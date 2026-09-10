import { profile } from '@/lib/portfolio-data'
import { ArrowDownRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="top" className="relative pt-40 pb-24">
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[420px] brand-glow"
        aria-hidden="true"
      />
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
          <span className="relative inline-flex size-2 rounded-full bg-brand" />
        </span>
        Available for work
      </span>
      <p className="mt-6 font-mono text-sm text-muted-foreground">
        {profile.role} · {profile.location}
      </p>
      <h1 className="mt-4 text-balance text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
        {profile.name}
        <span className="block text-muted-foreground">{profile.nameEn}</span>
      </h1>
      <p className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        {profile.intro}
      </p>
      <a
        href="#work"
        className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground shadow-sm transition-transform hover:-translate-y-0.5"
      >
        制作物を見る
        <ArrowDownRight className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
