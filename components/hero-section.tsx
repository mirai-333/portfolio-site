'use client'

import { useState } from 'react'
import { ChevronDown, MapPin, Plus } from 'lucide-react'

export function HeroSection() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <section id="top" className="relative pb-28 pt-40 sm:pb-32 sm:pt-44">
      <div
        className="brand-glow pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[460px]"
        aria-hidden="true"
      />

      <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-card/60 px-3.5 py-1.5 font-mono text-xs text-brand backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-brand" />
        2027卒 / NEW GRADUATE
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm tracking-wide text-muted-foreground">
        <span>Asia Pacific University</span>
        <span className="hidden text-border sm:inline" aria-hidden="true">/</span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5 text-brand" aria-hidden="true" />
          Malaysia
        </span>
      </div>

      <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl">
        津田みらい
        <span className="mt-2 block bg-gradient-to-r from-brand via-violet-500 to-cyan-500 bg-clip-text text-transparent">
          Mirai Tsuda
        </span>
      </h1>

      <div className="mt-16 sm:mt-20">
        <div className="relative max-w-2xl py-5 sm:py-7">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute left-2 top-1/2 w-[95%] -translate-y-1/2 select-none whitespace-nowrap text-[2.2rem] font-light italic leading-none tracking-[-0.03em] text-transparent opacity-[0.13] sm:left-5 sm:text-[3.2rem] lg:text-[3.7rem]"
            style={{
              fontFamily: 'cursive',
              WebkitTextStroke: '0.45px rgba(124, 102, 255, 0.38)',
              backgroundImage:
                'linear-gradient(100deg, rgba(124,102,255,0.9), rgba(139,92,246,0.72), rgba(34,211,238,0.8))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Technology × Design × Experience
          </p>

          <h2 className="relative z-10 text-balance text-2xl font-semibold leading-relaxed tracking-[-0.025em] text-foreground sm:text-3xl">
            VRを軸に、ゲーム、UI/UX、3DCG、映像まで。
          </h2>
        </div>

        <div className="mt-5 max-w-2xl space-y-5 text-pretty text-[1.02rem] leading-8 text-muted-foreground">
          <p>
            マレーシアにあるAsia Pacific UniversityでMultimedia Technology（VR/AR）を専攻し、Unityを用いたVRコンテンツ制作を中心に、UI/UX、3DCG、モーショングラフィックス、VFXまで幅広く制作しています。
          </p>
          <p>
            ただ制作するだけではなく、まず「どんな体験をつくるか」を深く考え、形にすることを大切にしています。
          </p>
        </div>

        <div className="mt-8 max-w-2xl border-y border-border/80">
          <button
            type="button"
            onClick={() => setIsAboutOpen((open) => !open)}
            aria-expanded={isAboutOpen}
            className="group flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-brand"
          >
            <span className="inline-flex items-center gap-2.5 font-mono text-sm font-medium tracking-wide text-foreground transition-colors group-hover:text-brand">
              <Plus
                className={`size-4 text-brand transition-transform duration-300 ${isAboutOpen ? 'rotate-45' : ''}`}
                aria-hidden="true"
              />
              More about me
            </span>
            <ChevronDown
              className={`size-4 text-muted-foreground transition-transform duration-300 ${isAboutOpen ? 'rotate-180 text-brand' : ''}`}
              aria-hidden="true"
            />
          </button>

          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              isAboutOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-5 pb-7 text-pretty leading-8 text-muted-foreground">
                <p>
                  マレーシアにあるAsia Pacific Universityの多国籍な環境で、英語を使いながらさまざまな国籍のメンバーとプロジェクトに取り組んできました。
                </p>
                <p>
                  大学ではVR/ARを中心に、Unityを用いたゲーム・VRコンテンツ制作に加えて、それを構成するUI/UX、3DCG、モーショングラフィックス、VFXなど複数の分野を学び、制作してきました。
                </p>
                <p>
                  また、マレーシアのドイツ系教育企業で4か月間のフルタイムインターン（2025年8月〜11月）を経験し、会社Webサイトのデザイン、SNSコンテンツ、広告動画、会社パンフレットなどの実務制作に携わりました。日本のAI系ベンチャー企業でも、2025年4月から現在までリモートでインターン生として働いています。
                </p>
                <p>
                  異なる文化や考え方を持つ人との協働経験を活かしながら、ユーザーの置かれている状況や抱えている課題を捉え、どう解決するかを考えることを大切にしています。その上で、つくるものがユーザーの感情にどのように作用し、行動にどのような変化や影響を与えられるのかまで考えながら、技術とデザインの両面から体験を作っています。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5 font-mono text-xs text-muted-foreground">
          {['Unity', 'C#', 'VR / AR', 'UI / UX', '3D / Maya', 'Motion / VFX'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card/55 px-3 py-1.5 backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
