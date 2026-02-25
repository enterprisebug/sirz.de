import { type Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { getPersonJsonLd, getWebsiteJsonLd } from '@/lib/seo'
import { getSiteUrl, toAbsoluteUrl } from '@/lib/site'

import '@/styles/tailwind.css'
import '@/styles/prism.css'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: '%s - Daniel Sirz',
    default:
      'Daniel Sirz - father, Cloud Software architect, Barista, Tennis player, Beach-Volleyball player',
  },
  description:
    'I’m Daniel Sirz. Cloud software architect at Caterpillar Energy Solutions GmbH in Mannheim.',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': toAbsoluteUrl('/feed.xml'),
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Daniel Sirz',
    description:
      'I’m Daniel Sirz. Cloud software architect at Caterpillar Energy Solutions GmbH in Mannheim.',
    siteName: 'Daniel Sirz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Sirz',
    description:
      'I’m Daniel Sirz. Cloud software architect at Caterpillar Energy Solutions GmbH in Mannheim.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let websiteJsonLd = getWebsiteJsonLd()
  let personJsonLd = getPersonJsonLd()

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-M3BG3L3WRX" />
    </html>
  )
}
