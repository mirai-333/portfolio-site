import { SectionHeading } from '@/components/section-heading'

const skillGroups = [
  {
    category: '開発',
    items: ['Unity', 'C#', 'Flutter', 'Dart', 'HTML / CSS', 'Git / GitHub'],
  },
  {
    category: 'VR・3D',
    items: ['Meta Quest', 'XR Interaction Toolkit', 'Maya', 'Blender'],
  },
  {
    category: 'デザイン・UX',
    items: ['Figma', 'UI Design', 'UX Research', 'HCI', 'User Testing'],
  },
  {
    category: '制作',
    items: ['Game Planning', 'Interaction Design', 'Video Editing', 'Adobe Tools'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-20">
      <SectionHeading index="03" title="スキル・経験" />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm"
          >
            <h3 className="font-mono text-xs tracking-widest text-brand">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-brand/15 bg-gradient-to-r from-brand/8 via-violet-400/8 to-cyan-300/8 p-6 sm:p-8">
        <p className="font-mono text-xs tracking-[0.18em] text-brand">学習・制作領域</p>
        <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">
          VR/AR、ゲーム制作、3D、UI/UXを横断して学び、大学プロジェクトでは企画・リサーチ・プロトタイピング・実装・ユーザーテストまで経験しています。
        </p>
      </div>
    </section>
  )
}
