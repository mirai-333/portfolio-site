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
      body: '出発点は、共同生活、旅行、大学のグループ課題で感じた「一部の人だけが管理を抱える」「誰がどれだけ貢献したか分からない」という経験でした。最初は匿名意見箱や貢献度の可視化を重要だと考えていましたが、自分の経験だけを一般化せず、実際のグループ活動で何が起きているかを調査して仮説を検証することにしました。',
    },
    {
      title: '02. ターゲットユーザー定義',
      body: '大学のグループ課題、旅行、共同生活など、日常の小規模なグループ活動に参加する18〜25歳を中心に対象を設定しました。仕事向けの管理ツールほど複雑ではなく、チャットだけでは整理しきれない情報や進捗を、負担を増やさず扱える体験を目指しました。',
    },
    {
      title: '03. アンケート調査',
      body: '18〜25歳を中心とする32名にオンラインアンケートを実施しました。利用ツール、スケジュール調整、タスク進捗、過去の決定の確認方法、公平感、困っていることを、選択式と自由回答で調査しました。その結果、重要情報がチャットに埋もれる、担当や進捗が見えない、ファイルやリンクが分散するという問題に加え、「ステータス更新自体が面倒」という声も把握しました。',
    },
    {
      title: '04. 主要ユーザーの特定',
      body: 'アンケートで見えた課題から、グループの調整や情報整理を担う人と、自分の担当や全体の状況を知りたい参加者のニーズに注目しました。「管理する人だけに負担を集中させず、参加者も次の行動を把握できること」を、以降の体験設計で考える軸にしました。',
    },
    {
      title: '05. ペルソナ・エンパシーマップ',
      body: '調査結果をもとに、調整役になりやすく見えない管理負担を抱えるAlexと、自分の担当や全体状況を把握したいMikaという2つのペルソナを作成し、エンパシーマップでもユーザーの状況を整理しました。「進捗が分からない」を進捗・担当・状態の可視化というニーズへ、「更新が面倒」を会話に近い方法で素早く記録できる必要性へと言い換えました。',
    },
    {
      title: '06. カードソーティング・IA設計',
      body: 'カードソーティングを行い、機能同士の関係から情報アーキテクチャ（IA）を作成しました。特にTrackingとArchiveの境界を検討し、「今の状態を見る＝Tracking」「あとから記録を探す＝Archive」と、ユーザーの時間軸に合わせて分けました。進捗確認、情報の振り返り、タスク管理などを、利用目的ごとに整理しました。',
    },
    {
      title: '07. ワイヤーフレーム',
      body: 'IAをもとに画面の構造と情報の優先順位をワイヤーフレームへ落とし込みました。特にWorkspaceの切り替えは、頻繁に使うため見つけやすさが必要な一方、常に目立ちすぎると作業への集中を妨げます。何度も案を検討し、「見えるけれど邪魔しない」配置を探りました。',
    },
    {
      title: '08. インタラクティブプロトタイプ',
      body: 'Figmaで操作可能なプロトタイプを作成しました。Workspace作成からAIによるTask Board生成までの初回体験と、6週間利用した後に進捗確認・ミーティング設定を行う継続利用の2つのユーザーフローを設計し、画面同士のつながりや操作の流れを確認できる形にしました。',
    },
    {
      title: '09. ハイフィデリティUI',
      body: '初期案ではHomeに情報や区切りを詰め込みすぎて複雑に見えたため、要素を減らして視線の優先順位を整理しました。青系の柔らかいグラデーション、白を多く使ったカード、丸み、Glass表現を採用し、管理ツール特有の硬さやストレスを抑えながら、必要な情報を確認しやすいUIを目指しました。',
    },
    {
      title: '10. ユーザーテスト',
      body: '6名にFigmaプロトタイプを画面共有で操作してもらい、進捗確認、過去の会議Agenda確認、ミーティング設定、自分の進捗記録を実施しました。Workspace切り替えが目立ちすぎる、Logボタンが大きく意味が分かりにくい、文言が曖昧、AI Meetingを見つけにくい、File画面の情報階層が分かりづらい、といった課題が見つかりました。結果を受け、Workspace SelectorとLogボタンのサイズを調整し、横スワイプでの切り替え、ラベルの明確化、File画面の情報整理を行いました。AI Meetingには初回説明が必要だと判断しました。機能を増やすほど便利になるとは限らず、認知負荷やユーザーの感情、グループ内の関係まで考えることが重要だと学びました。',
    },
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
                    ) : (
                      <p className="mt-5 w-full whitespace-pre-line text-[0.98rem] leading-8 text-muted-foreground sm:text-base">
                        {stepBody}
                      </p>
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
