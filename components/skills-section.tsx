import { skillGroups, career } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-20">
      <SectionHeading index="02" title="Skills & Career" />

      <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ol className="mt-16 space-y-10">
        {career.map((item) => (
          <li
            key={item.company}
            className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-8"
          >
            <span className="font-mono text-sm text-muted-foreground">{item.period}</span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="font-medium text-foreground">{item.role}</h3>
                <span className="text-sm text-muted-foreground">— {item.company}</span>
              </div>
              <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
