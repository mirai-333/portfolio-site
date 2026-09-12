export function HeroSection() {
  return (
    <section id="top" className="relative pt-40 pb-28 sm:pt-44 sm:pb-32">
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[460px] brand-glow"
        aria-hidden="true"
      />

      <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-card/60 px-3.5 py-1.5 font-mono text-xs text-brand backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-brand" />
        2027卒 / NEW GRADUATE
      </div>

      <p className="mt-7 font-mono text-sm tracking-wide text-muted-foreground">
        VR・AR / ゲーム開発 / UX・インタラクションデザイン
      </p>

      <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl">
        津田みらい
        <span className="mt-2 block bg-gradient-to-r from-brand via-violet-500 to-cyan-500 bg-clip-text text-transparent">
          Mirai Tsuda
        </span>
      </h1>

      <p className="mt-9 max-w-2xl text-pretty text-[1.05rem] leading-8 text-muted-foreground">
        Asia Pacific UniversityでVR/ARを中心に学び、Unityを用いたVRコンテンツやゲーム制作、UX・HCIのプロジェクトに取り組んできました。技術とデザインの両方から、体験そのものを考えて形にすることを大切にしています。
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5 font-mono text-xs text-muted-foreground">
        {['Unity', 'C#', 'VR / AR', 'UI / UX', '3D / Maya'].map((item) => (
          <span key={item} className="rounded-full border border-border bg-card/55 px-3 py-1.5 backdrop-blur-sm">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
