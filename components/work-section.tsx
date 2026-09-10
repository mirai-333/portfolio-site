import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'
import {
  BlobDoodle,
  BunnyDoodle,
  CatDoodle,
  PuppyDoodle,
  SparkleDoodle,
} from '@/components/hand-doodles'

const cardDoodles = [BunnyDoodle, CatDoodle, PuppyDoodle, BlobDoodle]

export function WorkSection() {
  return (
    <section id="work" className="relative border-t border-border py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10vw] top-12 -z-10 h-[72%] rounded-[4rem] bg-gradient-to-br from-brand/14 via-violet-400/12 to-cyan-300/12 blur-3xl"
      />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionHeading index="01" title="制作物" />
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            VR・ゲーム・UXを中心に、企画から設計、実装、検証まで取り組んだプロジェクトです。
          </p>
        </div>

        <div className="relative hidden h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-[2rem] border border-white/25 bg-gradient-to-br from-violet-500/70 via-brand/65 to-cyan-400/60 shadow-[0_18px_45px_-22px_rgba(93,73,255,0.7)] sm:flex">
          <SparkleDoodle className="h-16 w-32 opacity-90" />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3 sm:hidden">
        <span className="font-mono text-xs tracking-[0.18em] text-brand">SELECTED WORKS</span>
        <div className="h-px flex-1 bg-gradient-to-r from-brand/40 to-transparent" />
      </div>

      <ul className="mt-12 grid gap-5">
        {projects.map((project, index) => {
          const Doodle = cardDoodles[index % cardDoodles.length]

          return (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group relative flex min-h-[15rem] overflow-hidden rounded-[2rem] border border-brand/15 bg-card/78 p-6 shadow-[0_18px_60px_-28px_rgba(95,77,255,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_26px_80px_-28px_rgba(95,77,255,0.6)] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-400 via-brand to-cyan-400 opacity-70 transition-all duration-300 group-hover:w-1.5 group-hover:opacity-100"
                />

                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/75 via-brand/70 to-cyan-400/65 opacity-90 blur-[1px] transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-105"
                />
                <Doodle className="pointer-events-none absolute right-3 top-2 h-32 w-32 opacity-80 transition-all duration-500 group-hover:-rotate-2 group-hover:scale-105 sm:right-5 sm:top-4 sm:h-36 sm:w-36" />

                <div className="relative z-10 flex w-full flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-[34rem] pr-12 sm:pr-24">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-brand/75">0{index + 1}</span>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-brand transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
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
                  <span className="shrink-0 rounded-full border border-border bg-background/45 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
