import * as cheerio from 'cheerio'
import { readFileSync } from 'node:fs'

const baseUrlArg = process.argv.find((arg) => arg.startsWith('--baseUrl='))

function readDotEnvSiteUrl() {
  try {
    const envFile = readFileSync('.env', 'utf8')
    const lines = envFile.split(/\r?\n/)
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) {
        continue
      }

      const [key, ...rest] = trimmed.split('=')
      if (key === 'NEXT_PUBLIC_SITE_URL') {
        return rest.join('=').trim()
      }
    }
  } catch {
    return null
  }

  return null
}

const resolvedBaseUrl =
  baseUrlArg?.split('=')[1] ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  readDotEnvSiteUrl() ??
  'https://sirz.de'

const baseUrl = resolvedBaseUrl.replace(/\/$/, '')

const pageChecks = [
  { path: '/', requiredJsonLdType: 'WebSite' },
  { path: '/it-services', requiredJsonLdType: null },
  { path: '/blog', requiredJsonLdType: null },
  { path: '/blog/beach-volleyball-season-2025-has-begun', requiredJsonLdType: 'BlogPosting' },
]

function normalizeUrl(url) {
  return url.replace(/\/$/, '')
}

function normalizePath(path) {
  if (!path || path === '/') {
    return '/'
  }

  return path.replace(/\/$/, '')
}

function parseJsonLdTypes($) {
  const types = []

  $('script[type="application/ld+json"]').each((_, script) => {
    const raw = $(script).html() ?? ''
    if (!raw.trim()) {
      return
    }

    try {
      const parsed = JSON.parse(raw)
      const nodes = Array.isArray(parsed) ? parsed : [parsed]
      for (const node of nodes) {
        if (node && typeof node === 'object') {
          const t = node['@type']
          if (Array.isArray(t)) {
            types.push(...t)
          } else if (typeof t === 'string') {
            types.push(t)
          }
        }
      }
    } catch {
      types.push('__INVALID_JSON__')
    }
  })

  return types
}

async function fetchWithRetry(url, attempts = 3) {
  let lastError = null

  for (let i = 0; i < attempts; i += 1) {
    try {
      return await fetch(url)
    } catch (error) {
      lastError = error
      await new Promise((resolve) => setTimeout(resolve, 300 * (i + 1)))
    }
  }

  throw lastError
}

async function checkPage(check) {
  const url = `${baseUrl}${check.path}`
  let response

  try {
    response = await fetchWithRetry(url)
  } catch (error) {
    return {
      path: check.path,
      ok: false,
      errors: [
        `Request failed: ${error instanceof Error ? error.message : 'unknown error'}`,
      ],
    }
  }

  const contentType = (response.headers.get('content-type') ?? '').toLowerCase()

  if (!response.ok) {
    return {
      path: check.path,
      ok: false,
      errors: [`HTTP ${response.status}`],
    }
  }

  if (!contentType.includes('text/html')) {
    return {
      path: check.path,
      ok: false,
      errors: [`Unexpected content-type: ${contentType || 'n/a'}`],
    }
  }

  const html = await response.text()
  const $ = cheerio.load(html)
  const errors = []

  const canonicalHref = $('link[rel="canonical"]').first().attr('href')
  if (!canonicalHref) {
    errors.push('Missing canonical link')
  } else {
    const canonicalAbsolute = new URL(canonicalHref, baseUrl)
    const canonicalPath = normalizePath(canonicalAbsolute.pathname)
    const expectedPath = normalizePath(check.path)
    if (canonicalPath !== expectedPath) {
      errors.push(`Canonical path mismatch: got ${canonicalAbsolute.pathname}, expected ${check.path}`)
    }
  }

  const robotsContent = $('meta[name="robots"]').first().attr('content')
  if (!robotsContent) {
    errors.push('Missing robots meta')
  } else {
    const robots = robotsContent.toLowerCase()
    if (robots.includes('noindex')) {
      errors.push(`Robots contains noindex: ${robotsContent}`)
    }
    if (robots.includes('nofollow')) {
      errors.push(`Robots contains nofollow: ${robotsContent}`)
    }
  }

  const jsonLdTypes = parseJsonLdTypes($)
  if (jsonLdTypes.includes('__INVALID_JSON__')) {
    errors.push('Invalid JSON-LD detected')
  }

  if (check.requiredJsonLdType && !jsonLdTypes.includes(check.requiredJsonLdType)) {
    errors.push(`Missing JSON-LD type ${check.requiredJsonLdType}`)
  }

  return {
    path: check.path,
    ok: errors.length === 0,
    errors,
    details: {
      canonicalHref: canonicalHref ?? 'n/a',
      robotsContent: robotsContent ?? 'n/a',
      jsonLdTypes,
    },
  }
}

async function checkTextEndpoint(path, includes) {
  const url = `${baseUrl}${path}`
  let response

  try {
    response = await fetchWithRetry(url)
  } catch (error) {
    return {
      path,
      ok: false,
      errors: [
        `Request failed: ${error instanceof Error ? error.message : 'unknown error'}`,
      ],
    }
  }

  if (!response.ok) {
    return { path, ok: false, errors: [`HTTP ${response.status}`] }
  }

  const body = await response.text()
  const lowerBody = body.toLowerCase()
  const missing = includes.filter((item) => !lowerBody.includes(item.toLowerCase()))
  if (missing.length > 0) {
    return {
      path,
      ok: false,
      errors: [`Missing expected text: ${missing.join(', ')}`],
    }
  }

  return { path, ok: true, errors: [] }
}

async function run() {
  console.log(`Running SEO checks against ${baseUrl}`)

  const pageResults = await Promise.all(pageChecks.map(checkPage))
  const robotsResult = await checkTextEndpoint('/robots.txt', ['user-agent', 'sitemap'])
  const sitemapResult = await checkTextEndpoint('/sitemap.xml', ['<urlset', '<loc>'])

  const allResults = [...pageResults, robotsResult, sitemapResult]
  const failures = allResults.filter((result) => !result.ok)

  for (const result of pageResults) {
    if (result.ok) {
      console.log(`✓ ${result.path}`)
    } else {
      console.error(`✗ ${result.path}`)
      for (const error of result.errors) {
        console.error(`  - ${error}`)
      }
    }
  }

  for (const result of [robotsResult, sitemapResult]) {
    if (result.ok) {
      console.log(`✓ ${result.path}`)
    } else {
      console.error(`✗ ${result.path}`)
      for (const error of result.errors) {
        console.error(`  - ${error}`)
      }
    }
  }

  if (failures.length > 0) {
    console.error(`\nSEO checks failed: ${failures.length} issue(s)`)
    process.exitCode = 1
    return
  }

  console.log('\nSEO checks passed.')
}

run().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
