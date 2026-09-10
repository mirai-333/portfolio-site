'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { projects } from '@/lib/projects'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight, Play } from 'lucide-react'

type WorkCategory = 'すべて' | 'ゲーム' | 'UI・UX' | '動画' | '3Dモデリング'

const categories: WorkCategory[] = ['すべて', 'ゲーム', 'UI・UX', '動画', '3Dモデリング']

const projectCategoryMap: Record<string, Exclude<WorkCategory, 'すべて'>> = {
  'saferoute-vr': 'ゲーム',
  'grocery-time': 'ゲーム',
  pulse: '動画',
  notes: '3Dモデリング',
}

const projectThumbnailMap: Record<string, string | undefined> = {
  'saferoute-vr': 'https://img.youtube.com/vi/TX7t-ck0Q28/maxresdefault.jpg',
  'grocery-time': 'https://img.youtube.com/vi/6hrapMvMPHw/maxresdefault.jpg',
  pulse: undefined,
  notes: undefined,
}

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('すべて')

  const visibleProjects = useMemo(() => {
    return [...projects]
      .sort((a, b) => Number(b.year) - Number(a.year))
      .filter((project) => {
        if (activeCategory === 'すべて') return true
        return projectCategoryMap[project.slug] === activeCategory
      })
  }, [activeCategory])

  return (
    <section id="work" className="relative border-t border-border py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10vw] top-12 -z-10 h-[78%] rounded-[4rem] bg-gradient-to-br from-brand/12 via-violet-400/10 to-cyan-300/12 blur-3xl"
      />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionHeading index="01" title="制作物" />
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            ゲーム・UI/UX・動画・3Dモデリングを中心に、企画から制作、実装、検証まで取り組んだ作品です。
          </p>
        </div>
        <span className="font-mono text-xs tracking-[0.18em] text-brand">SELECTED WORKS</span>
      </div>

      <div className="mt-9 flex flex-wrap gap-2.5" aria-label="制作物カテゴリ">
        {categories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'border-brand bg-brand text-brand-foreground shadow-[0_10px_30px_-14px_rgba(95,77,255,0.85)]'
                  : 'border-border bg-card/70 text-muted-foreground backdrop-blur-sm hover:-translate-y-0.5 hover:border-brand/35 hover:text-brand'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {visibleProjects.map((project) => {
          const category = projectCategoryMap[project.slug]
          const thumbnail = projectThumbnailMap[project.slug]
          const youtubeId = project.videoEmbedUrl?.split('/embed/')[1]?.split('?')[0]

          return (
            <li key={project.slug} className="min-w-0">
              <Link
                href={`/work/${project.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-brand/15 bg-card/80 shadow-[0_18px_60px_-28px_rgba(95,77,255,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_28px_80px_-30px_rgba(95,77,255,0.62)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-gradient-to-br from-violet-500/22 via-brand/18 to-cyan-400/22">
                  {thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={thumbnail}
                      alt={`${project.title} サムネイル`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.42),transparent_34%),radial-gradient(circle_at_80%_75%,rgba(96,165,250,0.28),transparent_32%)]" />
                      <div className="relative rounded-full border border-white/35 bg-white/10 px-4 py-2 font-mono text-xs tracking-[0.16em] text-white/85 backdrop-blur-sm">
                        IMAGE PREVIEW
                      </div>
                    </div>
                  )}

                  {project.videoEmbedUrl ? (
                    <iframe
                      src={`${project.videoEmbedUrl}${project.videoEmbedUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1&controls=0&loop=1${youtubeId ? `&playlist=${youtubeId}` : ''}&modestbranding=1`}
                      title={`${project.title} video preview`}
                      className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      tabIndex={-1}
                    />
                  ) : (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/25 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                        <Play className="size-3.5 fill-current" aria-hidden="true" />
                        VIDEO PREVIEW
                      </span>
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                    {category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="w-full text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-4 w-full line-clamp-3 text-pretty leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex w-full flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-brand/10 bg-brand-soft px-3 py-1 font-mono text-xs text-brand"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex w-full items-center justify-between pt-7">
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] text-brand/80">
                      VIEW PROJECT
                      <ArrowUpRight
                        className="size-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      {visibleProjects.length === 0 && (
        <div className="mt-10 rounded-3xl border border-dashed border-border bg-card/55 px-6 py-16 text-center text-sm text-muted-foreground backdrop-blur-sm">
          このカテゴリの制作物はまだありません。
        </div>
      )}
    </section>
  )
}
