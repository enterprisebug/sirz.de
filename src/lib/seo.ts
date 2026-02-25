import { toAbsoluteUrl } from '@/lib/site'

interface ArticleSeoInput {
  title: string
  description: string
  date: string
  author: string
  slug: string
}

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Daniel Sirz',
    url: toAbsoluteUrl('/'),
    inLanguage: 'en',
  }
}

export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Sirz',
    url: toAbsoluteUrl('/'),
    jobTitle: 'Cloud Software Architect',
    sameAs: [
      'https://github.com/enterprisebug',
      'https://www.linkedin.com/in/daniel-sirz',
    ],
  }
}

export function getBlogPostingJsonLd(article: ArticleSeoInput) {
  const articleUrl = toAbsoluteUrl(`/blog/${article.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: articleUrl,
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Person',
      name: 'Daniel Sirz',
      url: toAbsoluteUrl('/'),
    },
    url: articleUrl,
  }
}
