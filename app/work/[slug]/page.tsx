import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Code2, ExternalLink, Play } from 'lucide-react'
import { projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  const showVideoSection = Boolean(project.videoEmbedUrl)
  const displayTitle = project.slug === 'ghost-presence-vfx' ? 'ALL Choices' : project.title
  const isSafeRoute = project.slug === 'saferoute-vr'

  const displayDuration = isSafeRoute
    ? '2026年4月 — 2026年7月（約8か月）（2025年12月-2026年3月までIR）'
    : project.duration

  const displayOverview = isSafeRoute
    ? '日本での災害経験や、学んできた災害に関しての知識を使い、安全なVR空間で従来よりリアルな災害避難訓練をできるようにすることを目的とした卒業研究です。従来の避難訓練では再現しにくい、物理的・心理的要因である環境の変動性・複雑さや、緊張感・切迫感などを含めました。アンケートと地震または津波経験者へのインタビューから課題を抽出し、屋外の津波避難と屋内の地震対応という2つのシナリオ、時間制限付きの判断ポイント、二次災害、行動時間の記録、結果フィードバックを統合しました。'
    : project.overview

  const displayTags = isSafeRoute
    ? ['Unity', 'Adobe Illustrator', 'Autodesk Maya', 'Mixamo']
    : project.tags

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10 sm:py-16">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-brand"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        制作物一覧へ戻る
      </Link>

      <section className="mt-10 border-b border-border pb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
          <span>{project.year}</span>
          <span aria-hidden="true">/</span>
          <span>{displayDuration}</span>
        </div>

        <h1 className="mt-4 w-full text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[3.25rem] lg:text-[3.5rem]">
          {displayTitle}
        </h1>

        {isSafeRoute && (
          <div className="mt-8 w-full rounded-3xl border border-brand/15 bg-card/60 p-5 backdrop-blur-sm sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              Thesis title
            </p>
            <p className="mt-3 text-sm font-medium leading-7 text-foreground sm:text-base">
              Enhancing Evacuation Speed and Risk Awareness among Young Adults for Tsunami and Earthquake through an Integrated Virtual Reality Training System
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              統合型VR訓練システムによる若年層の津波・地震避難速度およびリスク認知の向上
            </p>
          </div>
        )}

        <p className="mt-6 w-full text-pretty text-lg leading-8 text-muted-foreground">
          {displayOverview}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {displayTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-brand-soft px-3 py-1 font-mono text-xs text-brand"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
            >
              <Play className="size-4" aria-hidden="true" />
              YouTube
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
            >
              <Code2 className="size-4" aria-hidden="true" />
              GitHub
            </a>
          )}

          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-4 py-2 text-sm font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-brand-foreground"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Figma Prototype
            </a>
          )}
        </div>
      </section>

      {project.facts && project.facts.length > 0 && (
        <section className="border-b border-border py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Project summary
          </p>
          <dl className="mt-6 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {project.facts.map((fact) => (
              <div
                key={`${fact.label}-${fact.value}`}
                className="grid grid-cols-[7rem_1fr] gap-4 border-t border-border/70 py-4 first:border-t-0 sm:first:border-t sm:[&:nth-child(2)]:border-t"
              >
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="text-sm font-medium leading-6 text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {project.caseStudyType === 'ux' && project.highlights && (
        <section className="border-b border-border py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <article
                key={highlight.label}
                className="rounded-3xl border border-brand/15 bg-card/70 p-6 shadow-[0_18px_50px_-35px_rgba(95,77,255,0.55)] backdrop-blur-sm"
              >
                <p className="font-mono text-[11px] tracking-[0.18em] text-brand">
                  {highlight.label}
                </p>
                <h2 className="mt-3 text-lg font-semibold leading-7 text-foreground">
                  {highlight.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {highlight.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {showVideoSection && (
        <section className="border-b border-border py-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Video preview
          </p>
          <div className="mt-4 aspect-video overflow-hidden rounded-3xl border border-border bg-card">
            <iframe
              src={project.videoEmbedUrl}
              title={`${displayTitle} video preview`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="w-full">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            {project.caseStudyType === 'ux' ? 'UX case study' : 'Process'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {project.caseStudyType === 'ux' ? '考えたことと設計プロセス' : '制作プロセス'}
          </h2>
          <p className="mt-4 w-full leading-7 text-muted-foreground">
            {project.processIntro ??
              '企画・設計から実装、テスト、改善まで、制作の流れとその中で取り組んだ内容を工程ごとにまとめています。'}
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[1.15rem] top-5 w-px bg-gradient-to-b from-brand/70 via-violet-400/35 to-cyan-400/15 sm:left-[2.25rem]"
          />

          <div className="space-y-12 sm:space-y-16">
            {project.process.map((step, index) => (
              <article
                key={step.title}
                className="group relative grid grid-cols-[2.4rem_1fr] gap-5 sm:grid-cols-[4.5rem_1fr] sm:gap-8"
              >
                <div className="relative flex justify-center pt-1">
                  <div className="relative z-10 flex size-9 items-center justify-center rounded-full border border-brand/30 bg-background font-mono text-[10px] text-brand shadow-[0_0_0_6px_var(--background)] transition-all duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground sm:size-11 sm:text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.85rem] size-3 rounded-full bg-brand/25 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:top-[1.05rem]"
                  />
                </div>

                <div className="min-w-0 pb-2 transition-transform duration-300 ease-out group-hover:translate-x-1 sm:pb-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-brand/55 sm:text-[11px]">
                      STEP {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-semibold leading-8 tracking-tight text-foreground sm:text-2xl">
                      {step.title.replace(/^\d+\.\s*/, '')}
                    </h3>
                  </div>

                  <div className="mt-4 h-px w-12 bg-gradient-to-r from-brand/65 to-transparent transition-all duration-300 group-hover:w-24" />

                  <p className="mt-5 w-full whitespace-pre-line text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
                    {step.body}
                  </p>

                  {step.image && (
                    <figure className="mt-7 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={step.image}
                        alt={step.imageAlt ?? ''}
                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </figure>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
