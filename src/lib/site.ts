const fallbackSiteUrl = 'https://sirz.de'

export function getSiteUrl() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl
  return siteUrl.replace(/\/$/, '')
}

export function toAbsoluteUrl(path = '/') {
  return `${getSiteUrl()}${path.startsWith('/') ? path : `/${path}`}`
}
