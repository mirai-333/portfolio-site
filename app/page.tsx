import { SiteNav } from '@/components/site-nav'
import { TechBackground } from '@/components/tech-background'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { WorkSection } from '@/components/work-section'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <TechBackground />
      <div className="relative z-10">
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
    </div>
  )
}
