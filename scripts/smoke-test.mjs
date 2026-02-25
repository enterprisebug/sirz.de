import { spawn } from 'node:child_process'

const port = process.env.SMOKE_PORT ?? '4010'
const host = process.env.SMOKE_HOST ?? '127.0.0.1'
const baseUrl = `http://${host}:${port}`
const startupTimeoutMs = 60_000

const routes = [
  { path: '/', type: 'html' },
  { path: '/about', type: 'html' },
  { path: '/archive', type: 'html' },
  { path: '/blog', type: 'html' },
  { path: '/blog/beach-volleyball-season-2025-has-begun', type: 'html' },
  { path: '/feed.xml', type: 'xml' },
  { path: '/robots.txt', type: 'txt' },
  { path: '/sitemap.xml', type: 'xml' },
  { path: '/imprint', type: 'html' },
  { path: '/it-services', type: 'html' },
]

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForServer(url, timeoutMs) {
  const started = Date.now()

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url)
      if (response.status < 500) {
        return
      }
    } catch {
      // retry
    }

    await sleep(400)
  }

  throw new Error(`Server did not become ready within ${timeoutMs}ms`)
}

function validateContentType(expectedType, contentType) {
  if (expectedType === 'xml') {
    return contentType.includes('xml')
  }

  if (expectedType === 'txt') {
    return contentType.includes('text/plain')
  }

  return contentType.includes('text/html')
}

async function run() {
  console.log(`Starting app on ${baseUrl} ...`)

  const serverCommand = `npm run start -- --hostname ${host} --port ${port}`
  const server = spawn(serverCommand, {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
  })

  server.stdout.on('data', (chunk) => {
    process.stdout.write(chunk)
  })

  server.stderr.on('data', (chunk) => {
    process.stderr.write(chunk)
  })

  let exitCode = null
  server.on('exit', (code) => {
    exitCode = code
  })

  try {
    await waitForServer(baseUrl, startupTimeoutMs)

    const failures = []

    for (const route of routes) {
      const url = `${baseUrl}${route.path}`
      const response = await fetch(url)
      const contentType = (response.headers.get('content-type') ?? '').toLowerCase()
      const okStatus = response.status >= 200 && response.status < 400
      const okType = validateContentType(route.type, contentType)

      if (!okStatus || !okType) {
        failures.push({
          path: route.path,
          status: response.status,
          contentType,
          expected: route.type,
        })
      } else {
        console.log(`✓ ${route.path} -> ${response.status} (${contentType || 'no content-type'})`)
      }
    }

    if (failures.length > 0) {
      console.error('\nSmoke test failed:')
      for (const failure of failures) {
        console.error(
          `- ${failure.path}: status=${failure.status}, content-type='${failure.contentType || 'n/a'}', expected=${failure.expected}`,
        )
      }
      process.exitCode = 1
      return
    }

    console.log('\nSmoke test passed.')
  } finally {
    if (exitCode === null) {
      server.kill('SIGTERM')
      await sleep(500)
    }

    if (exitCode === null && !server.killed) {
      server.kill('SIGKILL')
    }
  }
}

run().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
