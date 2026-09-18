'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#work', label: '制作物' },
  { href: '#about', label: 'プロフィール' },
  { href: '#skills', label: 'スキル・経験' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-2 pt-4 sm:px-4">
      <nav
        className={`flex w-full max-w-3xl items-center justify-between gap-1 rounded-full px-2 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border border-border bg-background/70 shadow-sm backdrop-blur-md'
            : 'border border-transparent'
        }`}
      >
        <a href="#top" className="shrink-0 whitespace-nowrap font-mono text-[11px] tracking-tight text-foreground sm:text-sm">
          Mirai Tsuda
        </a>
        <ul className="flex items-center gap-0 sm:gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap rounded-full px-1 py-1.5 text-[10px] text-muted-foreground transition-colors hover:bg-brand-soft hover:text-brand sm:px-3 sm:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
