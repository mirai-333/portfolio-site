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
          <span>{project.duration}</span>
        </div>

        <h1 className="mt-4 w-full text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[3.25rem] lg:text-[3.5rem]">
          {project.title}
        </h1>

        <p className="mt-6 w-full text-pretty text-lg leading-8 text-muted-foreground">
          {project.overview}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
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
              title={`${project.title} video preview`}
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

        <div className="mt-12 space-y-4">
          {project.process.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-5 rounded-3xl border border-border/80 bg-card/55 p-6 backdrop-blur-sm sm:grid-cols-[4.5rem_1fr] sm:p-8"
            >
              <div>
                <span className="font-mono text-xs text-brand/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-7 text-foreground">
                  {step.title.replace(/^\d+\.\s*/, '')}
                </h3>
                <p className="mt-3 w-full whitespace-pre-line leading-8 text-muted-foreground">
                  {step.body}
                </p>
                {step.image && (
                  <figure className="mt-7 overflow-hidden rounded-2xl border border-border bg-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.imageAlt ?? ''}
                      className="h-auto w-full object-cover"
                    />
                  </figure>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
