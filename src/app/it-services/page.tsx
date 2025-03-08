import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import logo_dark from '@/images/logos/logo-banner-dark.svg'
import logo_light from '@/images/logos/logo-banner-light.svg'

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
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'IT services',
  description:
    'With over two decades of expertise in the IT industry, I am thrilled to present my newly established business dedicated to offering top-notch IT services with a special focus on C# programming. My extensive experience, particularly in the enterprise environment, enables me to deliver exceptional solutions tailored to meet your unique needs.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={logo_dark}
              alt="Daniel Sirz - IT services"
              className="hidden dark:block"
            />
            <Image
              src={logo_light}
              alt="Daniel Sirz - IT services"
              className="block dark:hidden"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Your IT Solution Partner
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              With over two decades of expertise in the IT industry, I am
              thrilled to present my newly established business dedicated to
              offering top-notch IT services with a special focus on C#
              programming. My extensive experience, particularly in the
              enterprise environment, enables me to deliver exceptional
              solutions tailored to meet your unique needs.
            </p>
            <h2 className="mt-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Unparalleled Experience
            </h2>
            <p>
              With more than 20 years in the industry, I bring a wealth of
              knowledge and expertise to every project.
            </p>
            <h2 className="mt-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Enterprise Excellence
            </h2>
            <p>
              Specializing in enterprise-level solutions, I understand the
              complexities and demands of large-scale systems.
            </p>
            <h2 className="mt-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              C# Programming Expertise
            </h2>
            <p>
              Leveraging the power of C#, I create robust, efficient, and
              scalable applications that drive business success.
            </p>
            <h2 className="mt-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Let`s Collaborate
            </h2>
            <p>
              At the heart of my business is a commitment to excellence,
              innovation, and customer satisfaction. I am dedicated to helping
              you achieve your business goals through cutting-edge IT solutions
              and exceptional service.
            </p>
            <p>
              Contact me today to discover how I can transform your IT landscape
              and propel your business forward.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <h2 className="mt-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Custom Software Development
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            From concept to deployment, I develop custom software solutions that
            align with your business objectives.
          </p>
          <h2 className="mt-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            System Integration
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Seamlessly integrate new solutions with your existing systems to
            enhance efficiency and productivity.
          </p>
          <h2 className="mt-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Consulting & Support
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Offering expert advice and ongoing support to ensure your IT
            infrastructure remains robust and secure.
          </p>
          <ul role="list">
            <SocialLink
              href="mailto:daniel.sirz@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              daniel.sirz@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
