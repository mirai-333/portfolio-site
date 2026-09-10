import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

export function WorkSection() {
  return (
    <section id="work" className="border-t border-border py-20">
      <SectionHeading index="03" title="Selected Work" />
      <ul className="mt-10 grid gap-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-sm sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-brand-soft px-2.5 py-0.5 font-mono text-xs text-brand"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="shrink-0 font-mono text-sm text-muted-foreground">
                {project.year}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
