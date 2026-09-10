import { profile } from '@/lib/portfolio-data'
import { ArrowDownRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="top" className="pt-40 pb-24">
      <p className="mb-6 font-mono text-sm text-muted-foreground">
        {profile.role} · {profile.location}
      </p>
      <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
        {profile.name}
        <span className="block text-muted-foreground">{profile.nameEn}</span>
      </h1>
      <p className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        {profile.intro}
      </p>
      <a
        href="#work"
        className="mt-10 inline-flex items-center gap-1.5 border-b border-foreground pb-1 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
      >
        制作物を見る
        <ArrowDownRight className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
