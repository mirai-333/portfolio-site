import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-20">
      <SectionHeading index="02" title="プロフィール" />

      <div className="mt-10 grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-start">
        <div className="space-y-5">
          <p className="text-pretty leading-8 text-muted-foreground">
            Asia Pacific University（APU）でMultimedia Technologyを専攻し、VR/ARを中心に学んでいます。Unityを用いたVRコンテンツやゲーム制作、3Dモデリング、UI/UX・HCIのプロジェクトに取り組んできました。
          </p>
          <p className="text-pretty leading-8 text-muted-foreground">
            企画や体験設計から実装、テスト、改善まで一連のプロセスに関わることが好きです。特に、ユーザーがどのように感じ、どのように行動するかを考えながら、技術とデザインの両面から体験を形にすることを大切にしています。
          </p>
        </div>

        <dl className="rounded-3xl border border-border bg-card/65 p-6 backdrop-blur-sm">
          <div className="border-b border-border pb-4">
            <dt className="font-mono text-xs text-muted-foreground">大学</dt>
            <dd className="mt-2 text-sm leading-6 text-foreground">Asia Pacific University</dd>
          </div>
          <div className="border-b border-border py-4">
            <dt className="font-mono text-xs text-muted-foreground">専攻</dt>
            <dd className="mt-2 text-sm leading-6 text-foreground">Multimedia Technology / VR・AR</dd>
          </div>
          <div className="pt-4">
            <dt className="font-mono text-xs text-muted-foreground">卒業年度</dt>
            <dd className="mt-2 text-sm leading-6 text-foreground">2027年卒予定</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
