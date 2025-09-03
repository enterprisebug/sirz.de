import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import clsx from 'clsx'

import harioDripper from '@/images/archive/coffee/20210303-TAR_3860web.webp'
import harioGrinder from '@/images/archive/coffee/MSS-1DTB_web03.webp'
import harioScale from '@/images/archive/coffee/VST-2000Bweb.webp'
import frenchPress from '@/images/archive/coffee/51xWBjhpy5L.__AC_SX300_SY300_QL70_ML2_.jpg'
import waterCooker from '@/images/archive/coffee/61nrnRMIMmL._AC_SX679_.webp'
import { Container } from '@/components/Container'

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
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Arvhived: A Tribute to Coffee: From Home Barista to Professional
          Artisan
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          There&apos;s something profoundly magical about coffee. It&apos;s not
          just a beverage; &apos;s an experience, a ritual, and for many, a
          passion. For me, coffee has been a faithful companion through every
          chapter of my life, from quiet mornings at home to bustling afternoons
          at work. As I look back on my journey as a home barista and forward to
          the future as a professional artisan, I&apos;m filled with excitement
          and dedication.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <ToolsSection title="Becoming a Barista">
          <Tool title="The Art of Home Brewing">
            My adventure with coffee began at home, where the kitchen
            transformed into my personal café. The aroma of freshly ground beans
            would fill the air as I experimented with different brewing
            methods—pour-over, French press, and my trusty espresso machine.
            Each method brought out unique flavors and nuances in the beans,
            teaching me to appreciate the complexity of this humble beverage. I
            cherished the process of crafting the perfect cup, from selecting
            high-quality beans to mastering the precise grind size and water
            temperature. The satisfaction of sipping a well-brewed cup of
            coffee, knowing the care and attention that went into each step, was
            unparalleled.
          </Tool>
          <Tool title="The Leap to Professionalism">
            Now, I stand at the threshold of a new chapter: transitioning from a
            passionate home barista to a professional artisan. The world of
            specialty coffee is vast and intricate, with professional machines
            offering new possibilities and challenges. These sophisticated
            tools, with their precise temperature controls and advanced pressure
            systems, demand a deeper understanding and refined skills. Training
            on a professional machine is both daunting and exhilarating.
            It&apos;s a chance to learn from seasoned experts, explore advanced
            techniques, and create exquisite coffee experiences for others. The
            opportunity to perfect latte art, calibrate grind settings to an
            exact science, and experiment with exotic beans from around the
            world ignites my passion anew.
          </Tool>
          <Tool title="Embracing the Future">
            As I embark on this journey, my dedication to coffee remains
            unwavering. The lessons learned as a home barista will serve as the
            foundation for my growth in the professional arena. I am eager to
            embrace the challenges, learn from the best, and share my love for
            coffee with a wider audience. To every cup that has warmed my hands
            and every bean that has fueled my passion, I owe my deepest
            gratitude. Coffee is not just a drink; it’s a celebration of
            flavors, a moment of peace, and a source of inspiration. Here&apos;s
            to the future, brewed to perfection.
          </Tool>
        </ToolsSection>
      </div>
      <div className="mt-16 sm:mt-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          This is how i brew it!
        </h1>
        <div className="mt-16 sm:mt-20">
          <ToolsSection title="French Press">
            <Tool title="For a large amount of coffee the Frech press is the tool to go for!">
              I adore my French press. It&apos;s incredibly simple to use,
              allowing me to brew 0.75 liters of coffee in no time. Perfect for
              mornings when I crave a generous amount of coffee. The rich aroma
              that fills the kitchen as I press down the plunger is an added
              delight. There&apos;s something uniquely satisfying about the
              manual process, which makes each cup feel like a small, rewarding
              ritual. It&apos;s a true companion for my morning routine,
              ensuring that I start my day with the perfect brew.
            </Tool>
          </ToolsSection>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                'rotate-2',
              )}
            >
              <Image
                src={frenchPress}
                alt="Simple but effective French press"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <ToolsSection title="Handfilter Coffee">
            <Tool title="HARIO V60 Dripper">
              As a coffee aficionado, I find immense joy in using the HARIO V60
              Dripper. This meticulously designed pour-over coffee maker
              enhances the entire brewing process, offering a perfect blend of
              precision and artistry. The V60&apos;s conical shape and spiraled
              ridges allow for optimal extraction, producing a cup of coffee
              that is rich in flavor and aromatic complexity. Its simplicity in
              design belies the depth of control it offers, making each brew a
              unique and satisfying experience. Whether it&apos;s the morning
              ritual or a quiet afternoon indulgence, the HARIO V60 Dripper has
              become an indispensable part of my daily routine, consistently
              delivering a superior coffee experience.
            </Tool>
            <Tool title="HARIO Ceramic Coffee Grinder Mini-Slim +">
              Mini-Slim + The HARIO Ceramic Coffee Grinder Mini-Slim + is a
              compact, lightweight, and portable hand grinder designed for
              coffee enthusiasts on the go. Its ceramic burrs ensure minimal
              friction heat, preserving the beans&apos; flavor and aroma1. With
              a capacity to hold enough beans for up to two cups of coffee,
              it&apos;s perfect for small gatherings or individual use. The
              grinder&apos;s ergonomic design and easy-to-grip shape make it
              convenient to use, while its durable construction ensures
              longevity1. Ideal for travel, the Mini-Slim + is a reliable
              companion for coffee lovers seeking freshly ground beans wherever
              they go.
            </Tool>
            <Tool title="HARIO V60 Drip Scale">
              When brewing the perfect cup of coffee, precision is key. The
              Hario V60 Drip Scale ensures you measure your coffee grounds and
              water with impeccable accuracy, providing consistency in every
              cup. This scale is not just about measurement; it’s about
              enhancing the brewing experience. It features a built-in timer
              that helps you control the extraction process, ensuring you get
              the most flavor from your beans. For coffee enthusiasts who
              understand that each gram counts, the Hario V60 Drip Scale is an
              indispensable tool that elevates your home brewing to
              barista-level precision.
            </Tool>
            <Tool title="TIMEMORE Electric gooseneck kettle">
              An electric gooseneck kettle is essential for precision brewing,
              whether for coffee or tea. It offers precise temperature control,
              ensuring optimal extraction of flavors. The gooseneck spout allows
              for a steady, controlled pour, crucial for pour-over coffee
              techniques. Additionally, electric kettles are fast, convenient,
              and come with safety features like automatic shut-off. Their
              modern design adds a stylish touch to any kitchen, making them a
              valuable tool for any beverage enthusiast.
            </Tool>
          </ToolsSection>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
            <div
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                'rotate-2',
              )}
            >
              <Image
                src={harioDripper}
                alt="HARIO V60 Dripper"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                '-rotate-2',
              )}
            >
              <Image
                src={harioGrinder}
                alt="HARIO Ceramic Coffee Grinder Mini-Slim +"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                'rotate-2',
              )}
            >
              <Image
                src={harioScale}
                alt="HARIO V60 Drip Scale"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                'rotate-2',
              )}
            >
              <Image
                src={waterCooker}
                alt="TIMEMORE Electric gooseneck kettle"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
