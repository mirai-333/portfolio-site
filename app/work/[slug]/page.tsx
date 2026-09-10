import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Code2, Play } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'

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

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10 sm:py-16">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-brand"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to work
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
          <a
            href={project.youtubeUrl ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
          >
            <Play className="size-4" aria-hidden="true" />
            YouTube
          </a>
          <a
            href={project.githubUrl ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
          >
            <Code2 className="size-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-8 sm:grid-cols-[1.3fr_0.7fr] sm:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              Video preview
            </p>
            <div className="mt-4 aspect-video overflow-hidden rounded-3xl border border-border bg-card">
              {project.videoEmbedUrl ? (
                <iframe
                  src={project.videoEmbedUrl}
                  title={`${project.title} video preview`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center font-mono text-sm text-muted-foreground">
                  YouTube embed placeholder
                </div>
              )}
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              Project info
            </p>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-muted-foreground">Role</dt>
                <dd className="mt-1 leading-relaxed text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="mt-1 text-foreground">{project.duration}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="w-full">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            制作プロセス
          </h2>
          <p className="mt-4 w-full leading-7 text-muted-foreground">
            企画・設計から実装、テスト、改善まで、制作の流れとその中で取り組んだ内容を工程ごとにまとめています。
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {project.process.map((step) => (
            <article key={step.title} className="grid gap-6 sm:grid-cols-[180px_1fr]">
              <h3 className="font-mono text-sm text-foreground">{step.title}</h3>
              <div className="min-w-0">
                <p className="w-full whitespace-pre-line leading-8 text-muted-foreground">
                  {step.body}
                </p>
                {step.image ? (
                  <figure className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.imageAlt ?? ''}
                      className="h-auto w-full object-cover"
                    />
                  </figure>
                ) : (
                  <div className="mt-8 flex min-h-64 items-center justify-center rounded-3xl border border-dashed border-border bg-card/60 px-6 text-center font-mono text-xs text-muted-foreground">
                    Process image placeholder
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
