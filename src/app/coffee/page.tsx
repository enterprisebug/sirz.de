import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

import portraitImage from '@/images/coffee/daniel_on_coffee.jpeg'
import table from '@/images/coffee/table.jpeg'
import homeSetup from '@/images/coffee/home-setup.jpeg'
import rosetta from '@/images/coffee/rosetta.jpeg'
import grinder from '@/images/coffee/grinder.jpeg'
import rosetta2 from '@/images/coffee/rosetta2.jpeg'
import rosetta3 from '@/images/coffee/rosetta3.jpeg'
import tulip from '@/images/coffee/tulip.jpeg'
import heart from '@/images/coffee/heart.jpeg'
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
  title: 'Coffee 🍵',
  description: 'Hobby Barista & Latte Art Enthusiast since 2025 (Crema Vibes)',
}

export default function Coffee() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Daniel Sirz Barista Profile Picture"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
          <ul role="list" className="mt-10">
            <SocialLink
              href="https://www.instagram.com/crema.vibes/"
              icon={InstagramIcon}
            >
              crema.vibes on instagram
            </SocialLink>
          </ul>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <header className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              My Journey into Cappuccino Excellence
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Welcome to Crema Vibes, where every cup tells a story of passion,
              precision, and the pursuit of the perfect brew. My name is Daniel,
              and I&apos;m a dedicated home barista with a profound love for all
              things coffee.
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              My journey into the world of high-end espresso began in early May
              2025, a date etched in my memory. That&apos;s when I finally
              welcomed two magnificent pieces of machinery into my home: the
              legendary La Marzocco Linea Micra espresso machine and its perfect
              companion, the La Marzocco Pico grinder.
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Since then, my kitchen has transformed into a vibrant training
              ground, primarily for mastering the intricate dance of latte art.
              There&apos;s something incredibly satisfying about transforming
              milk into delicate hearts, rosettas, and tulips, and I&apos;m
              constantly pushing myself to refine my technique.
            </p>
          </header>
        </div>
      </div>

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
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          My dedication extends beyond just the brewing process. To truly create
          my ideal coffee sanctuary, I even designed and built the custom coffee
          bar that perfectly houses my beloved La Marzocco setup. At 196cm tall,
          standard counter heights often lead to uncomfortable bending. So, I
          meticulously crafted the table to my exact specifications, ensuring an
          ergonomic height that allows me to prepare every shot in comfort and
          style. It&apos;s truly a labor of love, designed to optimize my
          workflow and enhance the entire brewing experience.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Beyond my personal enjoyment, I love sharing the magic of freshly
          brewed, expertly crafted coffee with others. For private small events
          and gatherings, I&apos;m thrilled to bring my machine and offer a
          unique coffee experience to your guests. Imagine the aroma of freshly
          ground beans and the sight of perfectly poured latte art elevating
          your celebration!
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
              'rotate-',
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
      <div className="mt-16 max-w-3xl sm:mt-20">
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Of course, the heart of any great coffee lies in its beans. I&apos;m a
          strong advocate for supporting local businesses, which is why I
          exclusively source my beans from a fantastic local roastery. This not
          only ensures freshness and quality but also allows me to explore a
          diverse range of exquisite flavors and profiles.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          My ultimate goal is to cultivate this passion into a small, sideline
          business, sharing the joy and artistry of specialty coffee with an
          even wider audience. Crema Vibes is more than just a hobby; it&apos;s
          a testament to the pursuit of perfection, one delicious cup at a time.
        </p>
      </div>
    </Container>
  )
}
