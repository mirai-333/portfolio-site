import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Code2, ExternalLink, Play } from 'lucide-react'
import { projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  const showVideoSection = Boolean(project.videoEmbedUrl)
  const displayTitle = project.slug === 'ghost-presence-vfx' ? 'ALL Choices' : project.title
  const isSafeRoute = project.slug === 'saferoute-vr'
  const isGroceryTime = project.slug === 'grocery-time'
  const isWeDo = project.slug === 'wedo-ux'

  const displayDuration = isSafeRoute
    ? '2026年4月 — 2026年7月（約8か月）（2025年12月-2026年3月までIR）'
    : project.duration

  const displayOverview = isSafeRoute
    ? '日本での災害経験や、学んできた災害に関しての知識を使い、安全なVR空間で従来よりリアルな災害避難訓練をできるようにすることを目的とした卒業研究です。従来の避難訓練では再現しにくい、物理的・心理的要因である環境の変動性・複雑さや、緊張感・切迫感などを含めました。アンケートと地震または津波経験者へのインタビューから課題を抽出し、屋外の津波避難と屋内の地震対応という2つのシナリオ、時間制限付きの判断ポイント、二次災害、行動時間の記録、結果フィードバックを統合しました。'
    : isGroceryTime
      ? 'Grocery Time!は、現実のスーパーに近いVR空間で買い物を体験しながら、予算管理と「必要なもの / 欲しいもの」の判断を学ぶ教育ゲームです。プレイヤーは制限時間と予算の中で商品を探し、カートへ入れ、セルフレジで会計し、最後にスコア・残金・ミスのフィードバックを受けます。私は3人チームの中でDevelopmentを担当し、Unity上でゲーム進行や各システムの実装を中心に行いました。\n\n本作は、立体視による奥行き知覚とVRの没入感を活かしたアプリケーションを企画・開発する課題「Stereoscopic Vision System」の一環として制作しました。'
      : project.overview

  const displayTags = isSafeRoute
    ? ['Unity', 'Adobe Illustrator', 'Autodesk Maya', 'Mixamo']
    : isGroceryTime
      ? ['Unity', 'Visual Studio Code', 'Canva']
      : isWeDo
        ? ['Figma']
        : project.tags

  const displayFacts = isWeDo
    ? project.facts?.filter((fact) => fact.label !== '使用ツール' && fact.label !== '成果物')
    : project.facts

  const weDoDesignSteps = [
    '問題定義',
    'ターゲットユーザー定義',
    'アンケート調査',
    '主要ユーザーの特定',
    'ペルソナ・エンパシーマップ',
    'カードソーティング・IA設計',
    'ワイヤーフレーム',
    'インタラクティブプロトタイプ',
    'ハイフィデリティUI',
    'ユーザーテスト',
  ]

  const weDoProcess = [
    {
      title: '01. 問題定義',
      body: '出発点は、共同生活や大学のグループ課題で感じた「一部の人だけが管理を担う」「自分の担当が不明瞭」「誰がどれだけ貢献したのか分からない」という問題でした。\n\nこの課題では、教員から「日常生活で感じる不満を一つ選び、それを解決するものを制作する」というテーマが提示されていました。そこで、マレーシアでの留学生活を通じて実際に感じた問題に着目しました。\n\nSlackなどの業務向け管理ツールは日常の小規模なグループ活動には複雑で手軽に使いにくい一方、チャットだけでは情報や進捗を十分に整理・可視化できないという課題があると考えました。',
    },
    {
      title: '02. ターゲットユーザー定義',
      body: '大学のグループ課題、旅行、共同生活、クラブ活動など、日常的に複数の小規模グループ活動に参加する18〜25歳の若年層、特に大学生を主なターゲットユーザーとして設定しました。',
    },
    {
      title: '03. アンケート調査',
      body: 'グループ活動において参加者がどのような問題を感じているのかを把握するため、18〜25歳を中心とする32名にオンラインアンケートを実施しました。\n\n現在使用しているツール、スケジュール調整、タスク進捗、情報管理、過去の決定事項の確認方法、役割分担の公平感などについて、選択式と自由回答を組み合わせて調査しました。\n\nその結果、重要な情報がチャットに埋もれる、担当や進捗が分からない、ファイルやリンクが分散するという問題に加え、「進捗状況を更新すること自体が面倒」という声も確認できました。また、管理を担う人と、自分の担当作業を進める人では、それぞれ異なる課題を抱えていることも分かりました。\n\n特に着目したのは「他の人の進捗が分からない」という問題です。一般的なタスク管理ツールには進捗ステータスを変更する機能がありますが、更新作業そのものが負担となり、十分に活用されなくなる場合があります。そこで、進捗更新の負担を軽減しながらグループ全体の状況を把握できる、タスクのトラッキングを中心としたアプリを制作する方針を定めました。',
    },
    {
      title: '04. 主要ユーザーの特定',
      body: 'アンケート結果から、グループの調整や情報整理を担う人と、自分の担当や全体の進捗を把握したい参加者の双方に、それぞれ異なる問題があることが分かりました。\n\nそこで、「管理する人だけに負担を集中させず、参加者も簡単に次の行動を把握できること」を、以降の体験設計の軸としました。',
    },
    {
      title: '05. ペルソナ・エンパシーマップ',
      body: '調査結果をもとに、調整役になりやすく、見えない管理負担を抱えるAlexと、自分の担当やグループ全体の状況を把握したいMikaという2つのペルソナを作成しました。\n\nさらに、エンパシーマップを通じて、それぞれのユーザーの行動、考え、感情、抱えている課題を整理しました。',
    },
    {
      title: '06. カードソーティング・IA設計',
      body: 'カードソーティングを行い、機能同士の関係を整理したうえで、情報アーキテクチャ（IA）を作成しました。\n\n特に検討したのは、TrackingとArchiveの役割の違いです。「現在の状況を確認する＝Tracking」「過去の記録を探す＝Archive」と、ユーザーが情報を必要とする時間軸に合わせて分類しました。\n\nこれにより、進捗確認、情報の振り返り、タスク管理などの機能を、利用目的に応じて整理しました。',
    },
    {
      title: '07. ワイヤーフレーム',
      body: 'IAをもとに、画面構造と情報の優先順位をワイヤーフレームへ落とし込みました。\n\n特に検討を重ねたのが、活動ごとに分かれたWorkspaceの切り替えです。今回のターゲットユーザーは、大学の課題やクラブ活動など、複数のグループに参加していることが想定されます。そのため、Workspaceは見つけやすく、どの画面からでも切り替えられる必要がありました。\n\n一方で、常に目立ちすぎると現在の作業への集中を妨げます。そこで、複数の案を検討し、「見えるけれど邪魔しない」配置を探りました。',
    },
    {
      title: '08. インタラクティブプロトタイプ',
      body: 'Figmaで、基本的な操作が可能なプロトタイプを作成しました。\n\nWorkspaceの切り替えや画面遷移などを実際に操作できるようにし、画面同士のつながりやユーザーの操作動線を確認しました。',
    },
    {
      title: '09. ハイフィデリティUI',
      body: '初期案ではHomeに情報や区切りを詰め込みすぎて複雑に見えたため、要素を減らして視線の優先順位を整理しました。青系の柔らかいグラデーション、白を多く使ったカード、丸み、Glass表現を採用し、管理ツール特有の硬さやストレスを抑えながら、必要な情報を確認しやすいUIを目指しました。',
    },
    {
      title: '10. ユーザーテスト',
      body: '',
    },
  ]

  const weDoTestFindings = [
    'Workspaceの切り替えが目立ちすぎる',
    'Logボタンが大きく、意味が分かりにくい',
    '一部の文言が曖昧',
    'AI Meeting機能を見つけにくい',
    'File画面の情報階層が分かりにくい',
  ]
  const weDoTestImprovements = [
    'Workspace Selectorのサイズと視覚的な強さを調整し、横スワイプによる切り替えを追加',
    'Logボタンを縮小し、他のナビゲーションと統一',
    '曖昧なラベルを分かりやすい表現に変更',
    'File画面の情報階層を整理',
    'AI Meetingには初回利用時の説明が必要だと判断',
  ]
  const displayProcess = isWeDo ? weDoProcess : project.process

  const safeRouteResearchBlocks = [
    {
      label: 'Literature Review',
      body:
        '若年層が地震・津波発生時になぜ避難を遅らせるのか、従来の避難訓練にはどのような限界があるのか、そしてVRを活用した避難訓練がどのように有効なのかを先行研究から調査しました。あわせて、類似システムであるSamwoo Immersion、SkillsVR、VR Planetを比較し、それぞれの目的、UIガイド、体験内容、強み・弱みを整理しました。これにより、既存事例で不足している要素と、本研究で取り入れるべき方向性を明確にしました。',
      preview: 'Literature review / Existing system comparison',
    },
    {
      label: 'Questionnaire',
      body:
        '続いて、日本人・日本人以外の参加者を対象にアンケートを実施し、災害や避難に関する知識、判断傾向、従来の避難訓練で感じる課題、どのような訓練を求めているかを調べました。回答を分けて比較することで、災害経験や知識が少ない人と、日本で災害教育を受けてきた人との間に、認知や判断の違いがどの程度あるのかも確認しました。これらの結果は、単に災害状況を体験させるだけではなく、どのような学習要素や体験を組み込めば、より適切な判断や避難速度の向上につながるのかを考える基盤になりました。',
      preview: 'Questionnaire results / Comparative analysis',
    },
    {
      label: 'Interview',
      body:
        'さらに、実際に地震または津波を経験した人へのインタビューを行いました。発災時にどこにいたのか、何が起きたのか、そのときどのように感じたのか、実際にどのような判断や避難行動を取ったのかを聞き取りました。アンケートだけでは得にくい、緊張や混乱、周囲の状況によって判断が変化する様子を把握し、VRシナリオに現実的な心理的・環境的要因を取り入れるための参考にしました。',
      preview: 'Interview findings / Disaster experience analysis',
    },
  ]

  const scenarioRows = [
    {
      outdoorLabel: '判断ポイント1',
      outdoor: '海を確認する / 上に逃げる',
      indoorLabel: 'フェーズ1',
      indoor: '20秒以内に机の下に潜る',
    },
    {
      outdoorLabel: '判断ポイント2',
      outdoor: '近道の橋を渡る（海に近い） / 海から離れ、より高い場所へ向かう',
      indoorLabel: 'フェーズ2',
      indoor: '30秒以内に火を消し、ドアを開ける',
    },
    {
      outdoorLabel: '判断ポイント3',
      outdoor: '障害物をまたいで進む / 遠回りでも障害物のない道を進む',
      indoorLabel: 'フェーズ3',
      indoor: 'リュックに避難用荷物を適切なものだけ詰める',
    },
    {
      outdoorLabel: '判断ポイント4',
      outdoor: '人が向かう方へ進む / 避難看板に従う',
      indoorLabel: '',
      indoor: '—',
    },
    {
      outdoorLabel: '判断ポイント5',
      outdoor: '階段 / エレベーター',
      indoorLabel: '',
      indoor: '—',
    },
  ]

  const safeRouteStepBodyOverrides: Record<number, string> = {
    3: 'パネルやアイコン、ボタンなど基本的なUIをAdobe Illustratorで制作しました。VR内で情報量が過剰にならず見やすいことに加え、テクノロジー感も表現できるよう、グローや透過処理を取り入れた水色をメインカラーとして採用し、視認性と世界観のバランスを調整しました。環境やアニメーションに使用した3DモデルはAutodesk Mayaで制作・調整したほか、Sketchfabからダウンロードしたアセットも活用し、Unityへ統合しました。',
    4: 'UnityでMeta Quest向けVR環境を構築し、移動、Ray Interaction、Grab Interactionなどの基本操作に加え、ゲーム内イベントやフローの管理、地震・津波・NPC・火・ドアなどのアニメーションを実装しました。各Decision PointまたはPhaseでは回答時間と正誤を記録し、終了時に総時間と各フェーズの結果をResult Sceneへ渡して表示できるようにしました。ページ上部のYouTubeから実際のアプリケーション動作を、GitHubからソースコードを確認できます。',
    6: 'UATでは、シナリオの分かりやすさ、没入感、UI、操作性、学習体験について肯定的な評価を得ました。一方で、同じルートを繰り返すことで慣れが生じる課題も確認されました。テスト結果から、本研究の目的であった避難速度とリスク認知の向上が確認できました。その上で、今後の改善案として、ランダム障害物、ルート変更、追加災害、環境インタラクション、AI NPC、協力プレイなどを改善計画としてまとめました。',
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10 sm:py-16">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-brand"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        制作物一覧へ戻る
      </Link>

      <section className="mt-10 border-b border-border pb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
          <span>{project.year}</span>
          <span aria-hidden="true">/</span>
          <span>{displayDuration}</span>
        </div>

        <h1 className="mt-4 w-full text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[3.25rem] lg:text-[3.5rem]">
          {displayTitle}
        </h1>

        {isSafeRoute && (
          <div className="mt-8 w-full rounded-3xl border border-brand/15 bg-card/60 p-5 backdrop-blur-sm sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              Thesis title
            </p>
            <p className="mt-3 text-sm font-medium leading-7 text-foreground sm:text-base">
              Enhancing Evacuation Speed and Risk Awareness among Young Adults for Tsunami and Earthquake through an Integrated Virtual Reality Training System
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              統合型VR訓練システムによる若年層の津波・地震避難速度およびリスク認知の向上
            </p>
          </div>
        )}

        <p className="mt-6 w-full whitespace-pre-line text-pretty text-lg leading-8 text-muted-foreground">
          {displayOverview}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {displayTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-brand-soft px-3 py-1 font-mono text-xs text-brand"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
            >
              <Play className="size-4" aria-hidden="true" />
              YouTube
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
            >
              <Code2 className="size-4" aria-hidden="true" />
              GitHub
            </a>
          )}

          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-4 py-2 text-sm font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-brand-foreground"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Figma Prototype
            </a>
          )}
        </div>
      </section>

      {displayFacts && displayFacts.length > 0 && (
        <section className="border-b border-border py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Project summary
          </p>
          <dl className="mt-6 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {displayFacts.map((fact) => (
              <div
                key={`${fact.label}-${fact.value}`}
                className="grid grid-cols-[7rem_1fr] gap-4 border-t border-border/70 py-4 first:border-t-0 sm:first:border-t sm:[&:nth-child(2)]:border-t"
              >
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="text-sm font-medium leading-6 text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {project.caseStudyType === 'ux' && project.highlights && (
        <section className="border-b border-border py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <article
                key={highlight.label}
                className="rounded-3xl border border-brand/15 bg-card/70 p-6 shadow-[0_18px_50px_-35px_rgba(95,77,255,0.55)] backdrop-blur-sm"
              >
                <p className="font-mono text-[11px] tracking-[0.18em] text-brand">
                  {highlight.label}
                </p>
                <h2 className="mt-3 text-lg font-semibold leading-7 text-foreground">
                  {highlight.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {highlight.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {showVideoSection && (
        <section className="border-b border-border py-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Video preview
          </p>
          <div className="mt-4 aspect-video overflow-hidden rounded-3xl border border-border bg-card">
            <iframe
              src={project.videoEmbedUrl}
              title={`${displayTitle} video preview`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="w-full">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            {project.caseStudyType === 'ux' ? 'UX case study' : 'Process'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {project.caseStudyType === 'ux' ? '考えたことと設計プロセス' : '制作プロセス'}
          </h2>
          <p className="mt-4 w-full leading-7 text-muted-foreground">
            {project.processIntro ??
              '企画・設計から実装、テスト、改善まで、制作の流れとその中で取り組んだ内容を工程ごとにまとめています。'}
          </p>
          {isWeDo && (
            <nav className="mt-7 rounded-2xl border border-brand/15 bg-brand-soft/25 px-4 py-4 sm:px-5" aria-label="UX設計プロセスの順序">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {weDoDesignSteps.map((step, index) => (
                  <li key={step} className="inline-flex items-center gap-2 text-xs leading-5 text-foreground">
                    <span className="font-mono text-[10px] font-semibold text-brand">{String(index + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                    {index < weDoDesignSteps.length - 1 && <span aria-hidden="true" className="text-brand/45">→</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[1.15rem] top-5 w-px bg-gradient-to-b from-brand/70 via-violet-400/35 to-cyan-400/15 sm:left-[2.25rem]"
          />

          <div className="space-y-12 sm:space-y-16">
            {displayProcess.map((step, index) => {
              const isSafeRouteResearchStep = isSafeRoute && index === 0
              const isSafeRouteScenarioStep = isSafeRoute && index === 2
              const stepBody = isSafeRoute
                ? safeRouteStepBodyOverrides[index] ?? step.body
                : step.body

              return (
                <article
                  key={step.title}
                  className="group relative grid grid-cols-[2.4rem_1fr] gap-5 sm:grid-cols-[4.5rem_1fr] sm:gap-8"
                >
                  <div className="relative flex justify-center pt-1">
                    <div className="relative z-10 flex size-9 items-center justify-center rounded-full border border-brand/30 bg-background font-mono text-[10px] text-brand shadow-[0_0_0_6px_var(--background)] transition-all duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground sm:size-11 sm:text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute top-[0.85rem] size-3 rounded-full bg-brand/25 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:top-[1.05rem]"
                    />
                  </div>

                  <div className="min-w-0 pb-2 transition-transform duration-300 ease-out group-hover:translate-x-1 sm:pb-4">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-brand/55 sm:text-[11px]">
                        STEP {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-semibold leading-8 tracking-tight text-foreground sm:text-2xl">
                        {isSafeRouteResearchStep
                          ? 'Literature Review・ユーザーリサーチ'
                          : isSafeRouteScenarioStep
                            ? 'シナリオ・環境設計'
                            : step.title.replace(/^\d+\.\s*/, '')}
                      </h3>
                    </div>

                    <div className="mt-4 h-px w-12 bg-gradient-to-r from-brand/65 to-transparent transition-all duration-300 group-hover:w-24" />

                    {isSafeRouteResearchStep ? (
                      <div className="mt-6 space-y-8">
                        {safeRouteResearchBlocks.map((block) => (
                          <section key={block.label} className="grid gap-4 md:grid-cols-[1fr_13rem] md:items-start md:gap-6">
                            <div>
                              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand/75">
                                {block.label}
                              </p>
                              <p className="mt-2 text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
                                {block.body}
                              </p>
                            </div>

                            <div className="flex min-h-36 items-center justify-center rounded-2xl border border-dashed border-brand/25 bg-brand-soft/35 px-4 py-5 text-center">
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand/70">
                                  Image preview
                                </p>
                                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                                  {block.preview}
                                </p>
                              </div>
                            </div>
                          </section>
                        ))}
                      </div>
                    ) : isSafeRouteScenarioStep ? (
                      <div className="mt-6 space-y-9">
                        <div>
                          <p className="text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
                            まず、屋外と屋内それぞれで、どのような避難訓練を取り入れるかを整理し、それに対応するマップをスケッチしました。屋外シナリオでは、ビーチや建物が多い場所、広い道路、そして避難場所までの導線を長くしすぎないことを条件として考えました。そのため、これらの要素が比較的近い範囲にまとまっているお台場海浜公園周辺を参考に、環境と避難ルートを設計しました。
                          </p>

                          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card/60">
                            <table className="w-full min-w-[700px] border-collapse text-left">
                              <thead>
                                <tr className="border-b border-border bg-brand-soft/45">
                                  <th className="w-[8rem] px-4 py-4 text-sm font-semibold text-foreground">項目</th>
                                  <th className="px-4 py-4 text-sm font-semibold text-foreground">屋外シナリオ</th>
                                  <th className="px-4 py-4 text-sm font-semibold text-foreground">屋内シナリオ</th>
                                </tr>
                                <tr className="border-b border-border/80">
                                  <th className="px-4 py-4 text-xs font-medium text-muted-foreground">イメージ</th>
                                  <th className="px-4 py-4">
                                    <div className="flex min-h-24 items-center justify-center rounded-xl border border-dashed border-brand/25 bg-brand-soft/30 px-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-brand/65">
                                      画像プレビュー
                                    </div>
                                  </th>
                                  <th className="px-4 py-4">
                                    <div className="flex min-h-24 items-center justify-center rounded-xl border border-dashed border-brand/25 bg-brand-soft/30 px-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-brand/65">
                                      画像プレビュー
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {scenarioRows.map((row) => (
                                  <tr key={row.outdoorLabel} className="border-b border-border/70 last:border-b-0 align-top">
                                    <th className="px-4 py-4 text-xs font-medium text-muted-foreground">
                                      {row.outdoorLabel}
                                    </th>
                                    <td className="px-4 py-4 text-sm leading-6 text-foreground">
                                      {row.outdoor}
                                    </td>
                                    <td className="px-4 py-4 text-sm leading-6 text-foreground">
                                      {row.indoorLabel && (
                                        <span className="mb-1 block text-xs font-medium text-brand/75">
                                          {row.indoorLabel}
                                        </span>
                                      )}
                                      {row.indoor}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <section>
                          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand/75">
                            行動内容の根拠
                          </p>
                          <p className="mt-2 text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
                            これらの内容が避難訓練として妥当であることを裏付けるため、ゲーム内のルート選択や必要な行動は、日本の行政機関が公開している防災情報をもとに設計しました。避難時の判断をゲーム的な演出だけで作るのではなく、現実の防災行動に基づいて体験へ落とし込んでいます。
                          </p>
                          <div className="mt-4 flex min-h-36 items-center justify-center rounded-2xl border border-dashed border-brand/25 bg-brand-soft/35 px-4 py-5 text-center">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand/70">画像プレビュー</p>
                              <p className="mt-2 text-xs leading-5 text-muted-foreground">行政機関の防災情報・行動根拠</p>
                            </div>
                          </div>
                        </section>

                        <section>
                          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand/75">
                            ストーリーボード・UIイメージ
                          </p>
                          <p className="mt-2 text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
                            次に、シナリオ全体の流れと画面の方向性を明確にするため、ストーリーボードとUIのイメージ図を作成しました。これらは、構想をもとにAIを活用して作成したもので、完成イメージや体験の雰囲気を早い段階で共有・整理することを目的としています。
                          </p>
                          <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {['ストーリーボード', 'UIイメージ'].map((label) => (
                              <div key={label} className="flex min-h-36 items-center justify-center rounded-2xl border border-dashed border-brand/25 bg-brand-soft/35 px-4 py-5 text-center">
                                <div>
                                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand/70">画像プレビュー</p>
                                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{label}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>

                        <section>
                          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand/75">
                            フロー・実装構造の整理
                          </p>
                          <p className="mt-2 text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
                            その後、体験全体のフローを洗い出し、必要なUI画面・シーン構成・イベントの流れを整理しました。あわせて、開発時にどのような構造でスクリプトを組み立てるかも検討し、各機能やイベントの関係を事前に整理してから実装へ進みました。
                          </p>
                          <div className="mt-4 flex min-h-36 items-center justify-center rounded-2xl border border-dashed border-brand/25 bg-brand-soft/35 px-4 py-5 text-center">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand/70">画像プレビュー</p>
                              <p className="mt-2 text-xs leading-5 text-muted-foreground">フロー図・実装構造</p>
                            </div>
                          </div>
                        </section>
                      </div>
                    ) : isWeDo && index === 9 ? (
                      <div className="mt-6 space-y-7">
                        <section>
                          <p className="font-mono text-xs tracking-[0.15em] text-brand">01 / TEST</p>
                          <h4 className="mt-2 text-base font-semibold text-foreground">テスト内容</h4>
                          <p className="mt-2 text-[0.98rem] leading-8 text-muted-foreground sm:text-base">6名にFigmaプロトタイプを画面共有で操作してもらい、進捗確認、過去の会議Agendaの確認、ミーティング設定、自分の進捗記録という4つのタスクを実施しました。</p>
                        </section>
                        <section>
                          <p className="font-mono text-xs tracking-[0.15em] text-brand">02 / FINDINGS</p>
                          <h4 className="mt-2 text-base font-semibold text-foreground">発見した課題</h4>
                          <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.98rem] leading-7 text-muted-foreground">
                            {weDoTestFindings.map((finding) => <li key={finding}>{finding}</li>)}
                          </ul>
                        </section>
                        <section>
                          <p className="font-mono text-xs tracking-[0.15em] text-brand">03 / IMPROVEMENTS</p>
                          <h4 className="mt-2 text-base font-semibold text-foreground">改善内容・次の対応</h4>
                          <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.98rem] leading-7 text-muted-foreground">
                            {weDoTestImprovements.map((improvement) => <li key={improvement}>{improvement}</li>)}
                          </ul>
                        </section>
                        <section>
                          <p className="font-mono text-xs tracking-[0.15em] text-brand">04 / LEARNING</p>
                          <h4 className="mt-2 text-base font-semibold text-foreground">学び</h4>
                          <p className="mt-2 text-[0.98rem] leading-8 text-muted-foreground sm:text-base">機能を増やすことが必ずしも使いやすさにつながるわけではなく、認知負荷やユーザーの感情、グループ内の関係性まで考慮することが重要だと学びました。</p>
                        </section>
                      </div>
                    ) : (
                      <p className="mt-5 w-full whitespace-pre-line text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
                        {stepBody}
                      </p>
                    )}

                    {isWeDo && index >= 4 && index <= 8 && (
                      <div className="mt-6 flex min-h-44 items-center justify-center rounded-2xl border border-dashed border-brand/25 bg-brand-soft/35 px-4 py-8 text-center" aria-label={`${weDoDesignSteps[index]}の画像を配置予定`}>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand/70">画像プレビュー</p>
                          <p className="mt-2 text-sm text-muted-foreground">{weDoDesignSteps[index]}の制作資料を配置予定</p>
                        </div>
                      </div>
                    )}

                    {!isSafeRouteResearchStep && !isSafeRouteScenarioStep && step.image && (
                      <figure className="mt-7 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={step.image}
                          alt={step.imageAlt ?? ''}
                          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                      </figure>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
