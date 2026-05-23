import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { toAbsoluteUrl } from '@/lib/site'
import businessPhoto from '@/images/photos/Daniel Sirz Business.png'
import kurabuLogo from './images/kurabu-logo.svg'
import juliaZinsmeisterPhoto from './images/Julia Zinsmeister.jpg'

const services = [
  {
    title: 'Microsoft Azure Architektur & Cloud-Betrieb',
    description:
      'Als Microsoft-Azure-Experte unterstütze ich bei Cloud-Strategie, sicherer Architektur, Deployment-Pipelines und stabilen Azure-Workloads für Ihr Unternehmen.',
  },
  {
    title: 'Softwareentwicklung mit C# und .NET',
    description:
      'Ich entwickle passgenaue Anwendungen und modernisiere bestehende Systeme, damit Ihre Abläufe schneller, robuster und wartbarer werden.',
  },
  {
    title: 'Excel-Beratung & Excel-Transformation',
    description:
      'Ich unterstütze bei der Entwicklung und Weiterentwicklung Ihrer Excel-Lösungen. Das klare Ziel ist die strukturierte Überführung in eine professionelle Anwendung mit sauberem Datenmodell.',
  },
]

const process = [
  {
    step: '01',
    title: 'Erstgespräch vor Ort',
    description:
      'Als lokaler Partner komme ich bei Unternehmen in Mannheim und den Stadtteilen direkt vorbei. Wir besprechen Ihr Ziel, die aktuelle Situation und den sinnvollsten Startpunkt.',
  },
  {
    step: '02',
    title: 'Klare Umsetzung in Etappen',
    description:
      'Sie erhalten einen realistischen Plan mit transparenter Priorisierung. So führen wir Ihre Excel-Lösung Schritt für Schritt in eine stabile Anwendung über.',
  },
  {
    step: '03',
    title: 'Verlässliche Betreuung',
    description:
      'Auch nach dem Start bleibe ich als direkter Ansprechpartner erreichbar. Mit einem klaren Betriebskonzept sorge ich dafür, dass die entwickelte Lösung stabil betrieben werden kann.',
  },
]

export const metadata: Metadata = {
  title:
    'IT-Services Mannheim, Seckenheim, Neckarau, Friedrichsfeld, Feudenheim | Azure Experte',
  description:
    'IT-Services in Mannheim, Seckenheim, Neckarau, Friedrichsfeld und Feudenheim: Microsoft Azure Beratung, C#/.NET Softwareentwicklung sowie Excel-Beratung und Excel-Transformation für lokale Unternehmen.',
  keywords: [
    'IT-Services',
    'IT-Services Mannheim',
    'IT-Services Seckenheim',
    'IT-Services Neckarau',
    'IT-Services Friedrichsfeld',
    'IT-Services Feudenheim',
    'Microsoft Azure Experte Mannheim',
    'Microsoft Azure Experte Seckenheim',
    'Microsoft Azure Experte Neckarau',
    'Microsoft Azure Experte Friedrichsfeld',
    'Microsoft Azure Experte Feudenheim',
    'Azure Beratung Mannheim',
    'Excel Beratung Seckenheim',
    'Excel Beratung Mannheim',
    'Excel Beratung Neckarau',
    'Excel Beratung Friedrichsfeld',
    'Excel Beratung Feudenheim',
    'Excel in Applikation transformieren',
    'Softwareentwicklung C# .NET',
    'lokales IT-Unternehmen Mannheim',
  ],
  alternates: {
    canonical: '/it-services',
  },
  openGraph: {
    title:
      'IT-Services in Mannheim, Seckenheim, Neckarau, Friedrichsfeld & Feudenheim',
    description:
      'Lokale IT-Unterstützung in Mannheim, Seckenheim, Neckarau, Friedrichsfeld und Feudenheim: Azure-Expertise, individuelle Softwareentwicklung und professionelle Excel-Transformation.',
    url: '/it-services',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'IT-Services in Mannheim & Stadtteilen | Azure & Excel-Transformation',
    description:
      'Microsoft Azure Experte für Mannheim, Seckenheim, Neckarau, Friedrichsfeld und Feudenheim: Beratung, Softwareentwicklung und Excel-Transformation.',
  },
}

export default function ItServicesPage() {
  const pageUrl = toAbsoluteUrl('/it-services')

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: toAbsoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'IT-Services',
        item: pageUrl,
      },
    ],
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: 'Daniel Sirz IT-Services',
    url: pageUrl,
    image: toAbsoluteUrl('/downloads/profile.jpg'),
    description:
      'Lokale IT-Services in Mannheim, Seckenheim, Neckarau, Friedrichsfeld und Feudenheim mit Fokus auf Microsoft Azure, C#/.NET Softwareentwicklung sowie Excel-Beratung und Excel-Transformation.',
    email: 'daniel@sirz.de',
    areaServed: [
      {
        '@type': 'City',
        name: 'Mannheim',
      },
      {
        '@type': 'Place',
        name: 'Seckenheim',
      },
      {
        '@type': 'Place',
        name: 'Neckarau',
      },
      {
        '@type': 'Place',
        name: 'Friedrichsfeld',
      },
      {
        '@type': 'Place',
        name: 'Feudenheim',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Rhein-Neckar-Kreis',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Seckenheim',
      addressRegion: 'Baden-Württemberg',
      addressCountry: 'DE',
    },
    knowsAbout: [
      'Microsoft Azure',
      'Cloud Architektur',
      'C#',
      '.NET',
      'Excel Beratung',
      'Excel-Transformation',
      'Prozessdigitalisierung',
    ],
    sameAs: [
      'https://github.com/enterprisebug',
      'https://www.linkedin.com/in/daniel-sirz/',
    ],
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <section>
        <nav
          aria-label="Sprungnavigation"
          className="rounded-2xl border border-zinc-200/70 bg-white/80 p-3 backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/70"
        >
          <ul className="flex flex-wrap items-center gap-2">
            {[
              { href: '#leistungen', label: 'Leistungen' },
              { href: '#zusammenarbeit', label: 'Zusammenarbeit' },
              { href: '#referenzen', label: 'Referenzen' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-teal-500 dark:hover:text-teal-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="relative mt-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-zinc-50 to-teal-50/60 p-8 shadow-sm sm:p-12 dark:border-zinc-700/50 dark:from-zinc-900 dark:to-zinc-800">
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/20" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />

        <div className="relative max-w-3xl">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:border-teal-500/40 dark:bg-zinc-900/70 dark:text-teal-300">
            IT-Unterstützung vor Ort
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            IT-Services in Mannheim und den Stadtteilen Seckenheim, Neckarau,
            Friedrichsfeld und Feudenheim
          </h1>
          <p className="mt-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Ich lebe in Seckenheim und möchte die Menschen und Unternehmen in
            Mannheim und den umliegenden Stadtteilen digital stärker machen. Sie
            erhalten pragmatische IT-Lösungen mit Fokus auf Microsoft Azure. Ich
            unterstütze gern bei Excel-Lösungen, aber das eigentliche Ziel
            bleibt immer: aus Excel eine skalierbare Anwendung zu machen.
          </p>
          <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Regional in Mannheim, Seckenheim, Neckarau, Friedrichsfeld und
            Feudenheim, schnell erreichbar in der gesamten Rhein-Neckar-Region.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="mailto:daniel@sirz.de">
              Jetzt unverbindlich anfragen
            </Button>
            <Button href="/about" variant="secondary">
              Mehr über mich
            </Button>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mt-16 scroll-mt-24">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            Leistungen für lokale Unternehmen
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Ob Handwerksbetrieb, Agentur oder kleiner Dienstleister: Ich biete
            moderne IT-Unterstützung, die zu Ihrer Größe und Ihrem Budget passt.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-900/60"
            >
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="zusammenarbeit"
        className="mt-16 grid scroll-mt-24 grid-cols-1 gap-8 rounded-3xl border border-zinc-200/70 bg-zinc-50/70 p-8 lg:grid-cols-[1.1fr_1.4fr] dark:border-zinc-700/50 dark:bg-zinc-900/50"
      >
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            So läuft die Zusammenarbeit
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Kurze Wege, klare Kommunikation und Ergebnisse, die direkt nutzbar
            sind.
          </p>
        </div>
        <ol className="space-y-6">
          {process.map((item) => (
            <li key={item.step} className="relative pl-14">
              <span className="absolute left-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-xs font-semibold text-white dark:bg-teal-500">
                {item.step}
              </span>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="referenzen"
        className="mb-8 mt-16 scroll-mt-24 rounded-3xl border border-zinc-200/70 bg-white p-8 sm:p-10 dark:border-zinc-700/50 dark:bg-zinc-900/60"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Referenz: Migration der Vereinssoftware für die TSG Seckenheim
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Im Mai 2022 habe ich die bestehende Vereinssoftware der TSG Seckenheim
          auf{' '}
          <Link
            href="https://www.kurabu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-900 dark:text-teal-300 dark:decoration-teal-600 dark:hover:text-teal-200"
          >
            KURABU
          </Link>{' '}
          migriert. Die Mitgliederdaten wurden aus der alten Datenbank nach
          KURABU überführt. Bei rund 3000 Datensätzen habe ich den Import
          vollständig automatisiert, um Fehler zu minimieren und den Umstieg
          sicher und schnell umzusetzen.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Zusätzlich habe ich dem Hersteller KURABU konkrete Hinweise zur
          Weiterentwicklung des Datenimports gegeben, damit die Software für
          Vereine mit großen Datenbeständen noch robuster und praxisnaher
          funktioniert.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-50 dark:border-zinc-700/50 dark:bg-zinc-800/50">
            <Image
              src={businessPhoto}
              alt="Daniel Sirz als IT-Berater für Vereinsdigitalisierung"
              className="h-56 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs text-zinc-600 dark:text-zinc-400">
              Projektbegleitung und technische Umsetzung
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white dark:border-zinc-700/50 dark:bg-zinc-900/70">
            <Link
              href="https://www.kurabu.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KURABU Website öffnen"
              className="flex h-56 items-center justify-center p-8"
            >
              <div className="flex w-full max-w-xs flex-col items-center gap-3">
                <Image
                  src={kurabuLogo}
                  alt="KURABU Logo"
                  className="h-16 w-auto"
                />
                <span className="text-2xl font-bold tracking-[0.16em] text-zinc-800 dark:text-zinc-100">
                  KURABU
                </span>
              </div>
            </Link>
            <figcaption className="px-4 py-3 text-xs text-zinc-600 dark:text-zinc-400">
              Partnerplattform für die Vereinsmigration
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mb-8 rounded-3xl border border-zinc-200/70 bg-white p-8 sm:p-10 dark:border-zinc-700/50 dark:bg-zinc-900/60">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Referenz: Website und Printmedien für Julia Zinsmeister
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Für{' '}
              <Link
                href="https://zinsmeister-movement.de"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-900 dark:text-teal-300 dark:decoration-teal-600 dark:hover:text-teal-200"
              >
                zinsmeister-movement.de
              </Link>{' '}
              erstelle ich die Homepage sowie passende Printmedien, damit Marke,
              Design und Kommunikation über alle Kanäle hinweg konsistent
              wirken.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Dabei verbinde ich modernes Webdesign mit klaren Inhalten und
              ergänze das digitale Erscheinungsbild durch abgestimmte
              Materialien für den Einsatz vor Ort.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <figure className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-50 dark:border-zinc-700/50 dark:bg-zinc-800/50">
              <Image
                src={juliaZinsmeisterPhoto}
                alt="Julia Zinsmeister bei einem Outdoor-Workout"
                className="h-56 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-zinc-600 dark:text-zinc-400">
                Umsetzung der Website und Printmedien für Julia Zinsmeister
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </Container>
  )
}
