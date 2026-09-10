import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

const socials = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'GitHub', href: profile.github },
  { label: 'X', href: profile.x },
  { label: 'LinkedIn', href: profile.linkedin },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-20">
      <SectionHeading index="04" title="Contact" />
      <p className="mt-10 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        新しいプロジェクトのご相談や協業のお誘いなど、お気軽にご連絡ください。
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground shadow-sm transition-transform hover:-translate-y-0.5"
      >
        {profile.email}
        <ArrowUpRight
          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
      <ul className="mt-10 flex flex-wrap gap-2">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              className="inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
