import { projects as baseProjects, type Project } from '@/lib/portfolio-data'

const groceryTimeProject: Project = {
  slug: 'grocery-time',
  title: 'Grocery Time! — VR買い物シミュレーション',
  year: '2026',
  description:
    '予算と時間制限の中で買い物を行い、「Needs / Wants」の判断を学ぶVRシミュレーション。3人チームで制作し、Developmentを担当。Unity上で買い物進行、予算、タイマー、チェックアウト、結果表示などのゲームシステムを実装した。',
  tags: ['Unity', 'C#', 'XR Interaction Toolkit', 'OpenXR'],
  overview:
    'Grocery Time!は、VR上のスーパーマーケットで買い物を体験しながら、予算管理と「必要なもの / 欲しいもの」の判断を学ぶ教育ゲームです。プレイヤーは制限時間と予算の中で買い物リストの商品を探し、商品を手に取ってカートへ入れ、最後にセルフレジで精算します。3人チームでの制作で、私はDevelopmentを担当しました。完成したストーリーボード、ワイヤーフレーム、フローをもとにUnity上のゲーム構造を組み立て、XR操作、買い物システム、予算・タイマー管理、チェックアウト、結果計算、音声など複数システムを連携させました。',
  role: '3人チーム制作 / Development担当 — Unity・C#実装 / XR Interaction / ゲームシステム設計・統合 / テスト・デバッグ',
  duration: '2026年（大学 Stereoscopic Vision System プロジェクト）',
  youtubeUrl: 'https://youtu.be/6hrapMvMPHw',
  githubUrl: 'https://github.com/mirai-333/GroceryTime-',
  videoEmbedUrl: 'https://www.youtube.com/embed/6hrapMvMPHw',
  process: [
    {
      title: '01. 設計内容を実装構造へ変換',
      body: 'チームで作成したストーリーボード、ワイヤーフレーム、アプリケーション構造、各フローをもとに、Unityで必要になる機能を整理しました。ゲーム全体を一つの大きなスクリプトにまとめるのではなく、GameManager、ShoppingManager、BudgetManager、TimerManager、Checkout、Resultなど役割ごとに分けて実装する方針を採用しました。商品情報についても名前・価格・Need / Want分類・アイコン・Prefabなどをデータとして管理できるようにし、各システムから共通して参照できる構造を作りました。',
    },
    {
      title: '02. XR操作と商品インタラクション',
      body: 'UnityのXR Interaction Toolkitを使用し、VRコントローラーによる移動、Ray Interaction、Grab Interactionを設定しました。商品にはXR Grab Interactableを適用し、棚から商品を手に取る、持つ、確認する、カートへ入れるという一連の動作を実装しました。カートへの投入はColliderとTriggerで検知し、商品が入ったタイミングでゲームデータを更新できるようにしています。',
    },
    {
      title: '03. Shopping Systemの実装',
      body: '買い物部分は複数のManagerに役割を分けて実装しました。ShoppingListManagerがセッション開始時に買い物リストを生成し、CartManagerがカート内の商品、合計金額、必要商品の取得数、不要商品の購入数、スコアを管理します。CartTriggerでは商品の追加を検出し、重複登録を防ぎながらデータ更新とフィードバックを実行しました。ShoppingManagerはWaiting、Shopping、Time Up、Checkout、Finishedなどの状態を管理し、ゲーム進行全体を制御します。',
    },
    {
      title: '04. 予算・タイマー・ゲーム進行',
      body: '買い物リストの必要商品の合計金額を基準に、少し余裕を持たせた予算を自動生成する仕組みを実装しました。予算値はBudgetManagerに集約し、ゲーム中のHUD、チェックアウト、結果画面から同じ値を参照できるようにしました。またTimerManagerで残り時間を管理し、時間内にチェックアウトした場合は買い物へ戻れる一方、タイムアップした場合は自動的にCheckoutへ遷移して戻れないなど、状況に応じてゲーム状態を切り替える処理を実装しました。',
    },
    {
      title: '05. Checkout・Resultシステム',
      body: 'チェックアウト画面では、カート内の商品、合計金額、残り予算を各Managerから取得して表示し、ゲームロジックとUI表示を分離しました。ResultではResultCalculatorが買い物リストと実際に購入した商品を比較し、正しく購入した商品、未購入商品、不要な購入、最終スコア、合計金額を計算します。計算結果をResultDataへまとめてResultUIに渡すことで、結果計算と画面表示を独立させ、後から調整しやすい構成にしました。',
    },
    {
      title: '06. Audio・フィードバック統合',
      body: 'ゲーム内の音声はAudioManagerに集約し、BGMとSEを別々のAudioSourceで管理しました。ボタン操作、商品取得、パネル表示、タイムアップ、結果表示などのイベントから共通のAudioManagerを呼び出す構造にし、各スクリプトが個別に音声処理を持たないようにしました。視覚的なフィードバックと合わせて、プレイヤーが操作結果を理解しやすい体験を目指しました。',
    },
    {
      title: '07. テスト・デバッグ・改善',
      body: '機能実装後は、予算計算、スコア、タイマー、Needs / Wants判定、チェックアウト、結果表示などをUnit / Integration Testingで確認しました。その後、16〜30歳の対象層に近い5名でUATを実施。全員が主要タスクを完了でき、5段階評価では「予算学習への推薦」が5.0、価格・商品情報の読みやすさとタイマーによる緊張感が4.8となりました。一方、VR操作は平均3.8で、初めてVRを使用するユーザーには短い慣れが必要という改善点も確認しました。',
    },
  ],
}

const safeRoute = baseProjects.find((project) => project.slug === 'saferoute-vr')
const remainingProjects = baseProjects.filter(
  (project) => project.slug !== 'saferoute-vr' && project.slug !== 'atlas',
)

export const projects: Project[] = [
  ...(safeRoute ? [safeRoute] : []),
  groceryTimeProject,
  ...remainingProjects,
]
