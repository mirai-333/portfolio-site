import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

export function WorkSection() {
  return (
    <section id="work" className="border-t border-border py-20">
      <SectionHeading index="03" title="Selected Work" />
      <ul className="mt-10 divide-y divide-border">
        {projects.map((project) => (
          <li key={project.title}>
            <a
              href={project.link ?? '#'}
              className="group flex flex-col gap-4 py-8 transition-opacity hover:opacity-100 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="font-mono text-xs text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="shrink-0 font-mono text-sm text-muted-foreground">
                {project.year}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
