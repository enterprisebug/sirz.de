import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import clsx from 'clsx'

import harioDripper from '@/images/coffee/20210303-TAR_3860web.webp'
import harioGrinder from '@/images/coffee/MSS-1DTB_web03.webp'
import harioScale from '@/images/coffee/VST-2000Bweb.webp'
import frenchPress from '@/images/coffee/51xWBjhpy5L.__AC_SX300_SY300_QL70_ML2_.jpg'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Coffee 🍵',
  description: 'My current coffee setup',
}

export default function Coffee() {
  return (
    <SimpleLayout
      title="All you can coffee"
      intro="I like a large cup of coffee in the morning. I like the process of making coffee, the smell, the taste. In the future i want to be a Barista in a nice coffee, taking care about the coffee and a nice presentation of the products."
    >
      <div className="space-y-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          This is how i brew it!
        </h1>
        <ToolsSection title="French Press">
          <Tool title="For a large amount of coffee the Frech press is the tool to go for!">
            I adore my French press. It's incredibly simple to use, allowing me to brew 0.75 liters of coffee in no time. Perfect for mornings when I crave a generous amount of coffee. The rich aroma that fills the kitchen as I press down the plunger is an added delight. There's something uniquely satisfying about the manual process, which makes each cup feel like a small, rewarding ritual. It's a true companion for my morning routine, ensuring that I start my day with the perfect brew.
          </Tool>
        </ToolsSection>
        <div className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className={clsx('relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800', 'rotate-2')}>
              <Image
                src={frenchPress}
                alt="Simple but effective French press"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <ToolsSection title="Handfilter Coffee">
          <Tool title="HARIO V60 Dripper">
            As a coffee aficionado, I find immense joy in using the HARIO V60 Dripper. This meticulously designed pour-over coffee maker enhances the entire brewing process, offering a perfect blend of precision and artistry. The V60's conical shape and spiraled ridges allow for optimal extraction, producing a cup of coffee that is rich in flavor and aromatic complexity. Its simplicity in design belies the depth of control it offers, making each brew a unique and satisfying experience. Whether it's the morning ritual or a quiet afternoon indulgence, the HARIO V60 Dripper has become an indispensable part of my daily routine, consistently delivering a superior coffee experience.
          </Tool>
          <Tool title="HARIO Ceramic Coffee Grinder Mini-Slim +">
            Write a short abstract about the HARIO Ceramic Coffee Grinder Mini-Slim +
            The HARIO Ceramic Coffee Grinder Mini-Slim + is a compact, lightweight, and portable hand grinder designed for coffee enthusiasts on the go. Its ceramic burrs ensure minimal friction heat, preserving the beans' flavor and aroma1. With a capacity to hold enough beans for up to two cups of coffee, it's perfect for small gatherings or individual use. The grinder's ergonomic design and easy-to-grip shape make it convenient to use, while its durable construction ensures longevity1. Ideal for travel, the Mini-Slim + is a reliable companion for coffee lovers seeking freshly ground beans wherever they go.
          </Tool>
          <Tool title="HARIO V60 Drip Scale">
            Write a short abstract why you need the Hario V60 Drip scale
            When brewing the perfect cup of coffee, precision is key. The Hario V60 Drip Scale ensures you measure your coffee grounds and water with impeccable accuracy, providing consistency in every cup. This scale is not just about measurement; it’s about enhancing the brewing experience. It features a built-in timer that helps you control the extraction process, ensuring you get the most flavor from your beans. For coffee enthusiasts who understand that each gram counts, the Hario V60 Drip Scale is an indispensable tool that elevates your home brewing to barista-level precision.
          </Tool>
        </ToolsSection>
        <div className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className={clsx('relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800', 'rotate-2')}>
              <Image
                src={harioDripper}
                alt="HARIO V60 Dripper"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className={clsx('relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800', '-rotate-2')}>
              <Image
                src={harioGrinder}
                alt="HARIO Ceramic Coffee Grinder Mini-Slim +"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className={clsx('relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800', 'rotate-2')}>
              <Image
                src={harioScale}
                alt="HARIO V60 Drip Scale"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
