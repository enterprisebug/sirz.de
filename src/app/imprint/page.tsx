import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from '@/images/photos/imprint.jpg'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Daniel Sirz. Cloud software architect at Caterpillar Energy Solutions GmbH in Mannheim.',
}

export default function Imprint() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Daniel Sirz"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Imprint
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
              Daniel Sirz<br />
              Kloppenheimer Strasse 50<br />
              68239 Mannheim<br />
              Germany
            </p>
            <p>
              <strong>Contact</strong><br />
              E-Mail: daniel.sirz@gmail.com
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
