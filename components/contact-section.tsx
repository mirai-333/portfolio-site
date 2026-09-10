import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

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
        className="mt-6 inline-block border-b border-foreground pb-1 text-lg font-medium text-foreground transition-opacity hover:opacity-60"
      >
        {profile.email}
      </a>
      <ul className="mt-10 flex flex-wrap gap-6">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
