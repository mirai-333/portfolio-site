import { SiteNav } from '@/components/site-nav'
import { TechBackground } from '@/components/tech-background'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { WorkSection } from '@/components/work-section'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <div className="min-h-screen">
      <TechBackground />
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
      </main>
      <footer className="mx-auto max-w-3xl px-6 py-10">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.nameEn}
        </p>
      </footer>
    </div>
  )
}
