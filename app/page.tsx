import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { WorkSection } from '@/components/work-section'
import { ContactSection } from '@/components/contact-section'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="mx-auto max-w-3xl px-6 py-10">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.nameEn}
        </p>
      </footer>
    </div>
  )
}
