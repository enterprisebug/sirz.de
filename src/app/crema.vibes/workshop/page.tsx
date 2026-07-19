import Image from 'next/image'
import Link from 'next/link'

import portraitImage from '@/images/crema.vibes/daniel_on_coffee.jpeg'
import rosetta from '@/images/crema.vibes/rosetta.jpeg'
import tulip from '@/images/crema.vibes/tulip.jpeg'
import heart from '@/images/crema.vibes/heart.jpeg'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Latte Art Workshop | Crema Vibes',
  description:
    'Hands-on latte art workshop in Mannheim: learn milk texturing, pouring control, and clean hearts, tulips, and rosettas.',
}

const outcomes = [
  'Pour a clean heart pattern with reliable contrast.',
  'Steam silky microfoam instead of airy bubbles.',
  'Follow a repeatable home workflow for faster progress.',
]

const learnList = [
  'How to texture milk to a paint-like consistency.',
  'Cup and pitcher movement that creates clean definition.',
  'The sequence for heart, tulip, and rosetta pours.',
  'How to diagnose and correct failed pours quickly.',
]

const details = [
  'Duration: 2 hours',
  'Location: Mannheim-Seckenheim',
  'Format: 1:1 or small group (up to 4)',
  'Language: German or English',
  'Includes beans, milk, and follow-up notes',
]

const faqs = [
  {
    question: 'Do I need prior experience?',
    answer:
      'No. The workshop is beginner-friendly and also useful for home baristas with basic espresso experience.',
  },
  {
    question: 'Can this be booked as a small event?',
    answer:
      'Yes, private small groups are possible and great for coffee-focused team sessions.',
  },
  {
    question: 'Can I bring questions about my own setup?',
    answer:
      'Absolutely. Bring photos of your machine and grinder, and we can review them together.',
  },
]

export default function LatteArtWorkshopPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-zinc-50 via-white to-teal-50/70 p-8 shadow-sm sm:p-12 dark:border-zinc-700/60 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/20" />
        <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:border-teal-500/40 dark:bg-zinc-900/70 dark:text-teal-300">
              Latte Art Workshop
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Latte Art Workshop by Crema Vibes
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Learn to pour better cups with a practical, guided workshop focused
              on real progress in one session.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="mailto:daniel@sirz.de?subject=Latte%20Art%20Workshop%20Booking">
                Book workshop
              </Button>
              <Button href="#pricing" variant="secondary">
                Pricing options
              </Button>
            </div>
          </div>
          <div className="mx-auto max-w-xs lg:mx-0 lg:max-w-none">
            <Image
              src={rosetta}
              alt="Rosetta latte art"
              sizes="(min-width: 1024px) 30rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Latte art is learnable
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Good latte art is not talent-only. With the right milk texture,
          movement sequence, and guided repetition, most people improve quickly.
        </p>
      </section>

      <section className="mt-12 max-w-4xl rounded-3xl border border-zinc-200/70 bg-white/80 p-8 backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/70">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Workshop description
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          This workshop is designed for coffee lovers who want practical latte
          art results, not theory overload. You will practice every step, get
          direct feedback, and leave with a clear training routine.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Key outcomes
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {outcomes.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-5 text-sm leading-6 text-zinc-700 dark:border-zinc-700/60 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          What you'll learn
        </h2>
        <ul className="mt-5 space-y-3">
          {learnList.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-teal-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-700/60 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Who it's for
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Home baristas and coffee enthusiasts who want structured guidance and
            repeatable technique.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-700/60 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Who it's not for
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Anyone expecting a lecture-only format without active practice.
          </p>
        </article>
      </section>

      <section className="mt-12 max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Practical details
        </h2>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          {details.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-zinc-200/70 bg-white/80 px-4 py-3 dark:border-zinc-700/60 dark:bg-zinc-900/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Testimonials
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              quote:
                'After one workshop my milk texture improved immediately and I could finally pour clean hearts.',
              name: 'Lena, Home Barista',
            },
            {
              quote:
                'Practical coaching, clear corrections, and no fluff. Exactly what I needed.',
              name: 'Marius, Coffee Enthusiast',
            },
            {
              quote:
                'Great format for our small private group. Everyone learned quickly.',
              name: 'Nina, Team Session',
            },
          ].map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl border border-zinc-200/70 bg-white/80 p-5 text-sm leading-6 text-zinc-700 backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/70 dark:text-zinc-300"
            >
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 rounded-3xl border border-zinc-200/70 bg-white/80 p-8 backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/70 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-xs">
          <Image
            src={portraitImage}
            alt="Daniel Sirz - Crema Vibes"
            sizes="20rem"
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Instructor
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I'm Daniel, a dedicated home barista and latte art enthusiast. I
            train daily with a high-end home espresso setup and focus on a
            coaching style that is practical, calm, and repeatable.
          </p>
        </div>
      </section>

      <section className="mt-12" id="pricing">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Pricing and booking options
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              title: '1:1 Intensive',
              price: '149 EUR',
              detail: 'Two hours, fully focused on your level and goals.',
            },
            {
              title: 'Duo Workshop',
              price: '229 EUR',
              detail: 'Bring one person and train together.',
            },
            {
              title: 'I visit your location',
              price: 'Price on request',
              detail:
                'I come to your place and prepare a custom offer based on location and setup.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-700/60 dark:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-2 text-2xl font-bold text-teal-700 dark:text-teal-300">
                {item.price}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Button href="mailto:daniel@sirz.de?subject=Crema%20Vibes%20Workshop%20Request">
            Request booking
          </Button>
        </div>
      </section>

      <section className="mt-12 max-w-4xl" id="faq">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          FAQ
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-zinc-200/70 bg-white/80 p-5 backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/70"
            >
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-teal-200 bg-teal-50/70 p-8 dark:border-teal-500/40 dark:bg-teal-950/20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Ready to pour your first clean heart?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          Send two preferred dates and your workshop format. You will get a
          quick confirmation and everything you need for the session.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="mailto:daniel@sirz.de?subject=Book%20Latte%20Art%20Workshop">
            Book now
          </Button>
          <Button href="/crema.vibes" variant="secondary">
            Back to Crema Vibes
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <div className="-my-4 flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
          {[rosetta, heart, tulip].map((image, idx) => (
            <div
              key={idx}
              className={
                idx % 2 === 0
                  ? 'relative aspect-[7/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800'
                  : 'relative aspect-[7/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800'
              }
            >
              <Image
                src={image}
                alt="Latte art showcase"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
        More about the journey on{' '}
        <Link href="/crema.vibes" className="font-semibold text-teal-600 dark:text-teal-400">
          Crema Vibes
        </Link>
        .
      </p>
    </Container>
  )
}
