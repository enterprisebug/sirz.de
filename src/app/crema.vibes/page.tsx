import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

import portraitImage from '@/images/crema.vibes/daniel_on_coffee.jpeg'
import table from '@/images/crema.vibes/table.jpeg'
import homeSetup from '@/images/crema.vibes/home-setup.jpeg'
import rosetta from '@/images/crema.vibes/rosetta.jpeg'
import grinder from '@/images/crema.vibes/grinder.jpeg'
import rosetta2 from '@/images/crema.vibes/rosetta2.jpeg'
import rosetta3 from '@/images/crema.vibes/rosetta3.jpeg'
import tulip from '@/images/crema.vibes/tulip.jpeg'
import heart from '@/images/crema.vibes/heart.jpeg'
import cremaVibesLogo from '@/images/crema.vibes/CremaVibes.svg'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { InstagramIcon } from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
      <span className="ml-2">{children}</span>
    </Link>
  )
}

export const metadata = {
  title: 'Crema Vibes 🍵',
  description:
    'Crema Vibes Latte Art Workshop in Mannheim: hands-on coaching for hearts, tulips, and rosettas.',
}

export default function Coffee() {
  const learnList = [
    'How to texture milk to a paint-like consistency.',
    'Cup and pitcher movement that creates clean definition.',
    'The sequence for heart, tulip, and rosetta pours.',
    'How to diagnose and correct failed pours quickly.',
  ]

  const faqs = [
    {
      question: 'Do I need prior experience?',
      answer:
        'No. The workshop is beginner-friendly and also useful for home baristas with basic espresso experience.',
    },
    {
      question: 'Where does the workshop take place?',
      answer:
        'The workshop takes place in my kitchen at Kloppenheimer Strasse 50, 68239 Mannheim.',
    },
    {
      question: 'Can I bring questions about my own setup?',
      answer:
        'Absolutely. Bring photos of your machine and grinder, and we can review them together.',
    },
    {
      question: 'Do I need to bring my own equipment?',
      answer:
        'Of course not. I provide all the necessary equipment, including a La Marzocco Linea Micra espresso machine and a La Marzocco Pico grinder. Leveler and tamper are also provided. You just need to bring yourself and your enthusiasm for learning!',
    }
  ]

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
              Latte Art Workshop in Mannheim
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Learn to pour better cups with a practical, guided workshop focused
              on real progress in one session.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              This workshop is designed for coffee lovers who want practical
              results, not theory overload. You will practice every step, get
              direct feedback, and leave with a clear training routine.
            </p>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              What you&apos;ll learn
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {learnList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-teal-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#book" variant="primary">
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
              className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2" id="audience">
        <article className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-700/60 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Who it&apos;s for
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Home baristas and coffee enthusiasts who want structured guidance and
            repeatable technique.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-700/60 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Who it&apos;s not for
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Anyone expecting a lecture-only format without active practice.
          </p>
        </article>
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
            I&apos;m Daniel, a dedicated home barista and latte art enthusiast.
            I train daily with a high-end home espresso setup and focus on a
            coaching style that is practical, calm, and repeatable.
          </p>
          <ul role="list" className="mt-6">
            <SocialLink
              href="https://www.instagram.com/crema.vibes/"
              icon={InstagramIcon}
            >
              crema.vibes on instagram
            </SocialLink>
          </ul>
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
              price: '279 EUR',
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
          <Button href="#book" variant="primary">
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

      <section className="mt-12 rounded-3xl border border-teal-200 bg-teal-50/70 p-8 dark:border-teal-500/40 dark:bg-teal-950/20" id="book">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          How to book?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          Send an email to <a href="mailto:daniel@sirz.de?subject=Book%20Latte%20Art%20Workshop" className="text-teal-600 dark:text-teal-400">daniel@sirz.de</a> with your preferred date, number of participants, and any questions you may have. I will respond promptly to confirm availability and provide further details. 
        </p>
      </section>

      <section className="mt-16 sm:mt-20" id="story">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              About crema vibes
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              I started this espresso journey in May 2025 with a Linea Micra
              and Pico grinder. Since then, I practice latte art almost daily
              and keep refining a workflow that makes better cups more
              repeatable.
            </p>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              I also built my own coffee table for ergonomic prep and source
              beans locally whenever possible. Crema Vibes is where I share
              that craft and bring it into practical workshops.
            </p><p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Of course, the heart of any great coffee lies in its beans. I&apos;m a
              strong advocate for supporting local businesses, which is why I
              exclusively source my beans from a fantastic local roastery. This not
              only ensures freshness and quality but also allows me to explore a
              diverse range of exquisite flavors and profiles.
            </p>
          </div>
          <a
            href="https://www.instagram.com/crema.vibes/"
            target="_blank"
            title="crema.vibes on Instagram"
            className="block max-w-xs lg:justify-self-end"
          >
            <Image
              src={cremaVibesLogo}
              alt="Crema Vibes logo"
              sizes="(min-width: 1024px) 20rem, 16rem"
              className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </a>
        </div>
      </section>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
          <div
            className={clsx(
              'relative aspect-[7/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              'rotate-2',
            )}
          >
            <Image
              src={table}
              alt="Self built coffee table"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div
            className={clsx(
              'relative aspect-[7/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              '-rotate-2',
            )}
          >
            <Image
              src={homeSetup}
              alt="My home setup with La Marzocco Linea Micra and La Marzocco Pico"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div
            className={clsx(
              'relative aspect-[7/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              'rotate-2',
            )}
          >
            <Image
              src={rosetta}
              alt="Linea Micra with a rosetta latte art"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div
            className={clsx(
              'relative aspect-[7/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              '-rotate-2',
            )}
          >
            <Image
              src={grinder}
              alt="Pico grinder with coffee beans"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 max-w-3xl sm:mt-20">
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          A few impressions from my current setup and daily practice.
        </p>
      </div>
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
          <div
            className={clsx(
              'relative aspect-[7/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              '-rotate-2',
            )}
          >
            <Image
              src={rosetta2}
              alt="Rosetta latte art"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div
            className={clsx(
              'relative aspect-[7/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              'rotate-2',
            )}
          >
            <Image
              src={heart}
              alt="Heart latte art"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div
            className={clsx(
              'relative aspect-[7/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              '-rotate-2',
            )}
          >
            <Image
              src={tulip}
              alt="Tulip latte art"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div
            className={clsx(
              'relative aspect-[7/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              'rotate-2',
            )}
          >
            <Image
              src={rosetta3}
              alt="Rosetta latte art"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
