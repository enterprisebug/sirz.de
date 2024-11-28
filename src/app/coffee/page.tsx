import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Coffee() {
  return (
    <SimpleLayout
      title="This is how i brew it!"
      intro="I like a large cup of coffee in the morning. I like the process of making coffee, the smell, the taste. In the future i want to be a Barista in a nice coffee, taking care about the coffee and a nice presentation of the products."
    >
      <div className="space-y-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          This is how i brew it!
        </h1>
        <ToolsSection title="French Press">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Handfilter Coffee">
          <Tool title="HARIO V60 Dripper">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="HARIO V60 Drip Scale">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="HARIO Ceramic Coffee Grinder Mini-Slim +">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever else
            relies on, Sublime Text is still the best text editor ever else
            relies on, Sublime Text is still the best text editor ever else
            relies on, Sublime Text is still the best text editor ever else
            relies on, Sublime Text is still the best text editor ever made.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
