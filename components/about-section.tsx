import { about } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-20">
      <SectionHeading index="02" title="プロフィール" />
      <div className="mt-10 max-w-xl space-y-5">
        {about.map((paragraph, i) => (
          <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
