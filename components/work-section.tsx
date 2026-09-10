import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

export function WorkSection() {
  return (
    <section id="work" className="relative border-t border-border py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10vw] top-12 -z-10 h-[70%] rounded-[4rem] bg-gradient-to-br from-brand/10 via-violet-400/10 to-cyan-300/10 blur-3xl"
      />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionHeading index="01" title="制作物" />
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            VR・ゲーム・UXを中心に、企画から設計、実装、検証まで取り組んだプロジェクトです。
          </p>
        </div>
        <span className="font-mono text-xs tracking-[0.18em] text-brand">SELECTED WORKS</span>
      </div>

      <ul className="mt-12 grid gap-5">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="group relative flex overflow-hidden rounded-3xl border border-brand/15 bg-card/75 p-6 shadow-[0_18px_60px_-28px_rgba(95,77,255,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_26px_80px_-28px_rgba(95,77,255,0.6)] sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-400 via-brand to-cyan-400 opacity-70 transition-all duration-300 group-hover:w-1.5 group-hover:opacity-100"
              />

              <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-brand/75">0{index + 1}</span>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="size-5 text-brand transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-pretty leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-brand/10 bg-brand-soft px-3 py-1 font-mono text-xs text-brand"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
