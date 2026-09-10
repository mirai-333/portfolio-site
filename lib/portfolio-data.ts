export const profile = {
  name: '津田 未来',
  nameEn: 'Mirai Tsuda',
  role: 'VR / AR・ゲーム・UX',
  location: '日本',
  email: '',
  github: 'https://github.com/mirai-333',
  x: '',
  linkedin: '',
  intro:
    'VR/AR、ゲーム開発、UX・インタラクションデザインを学び、企画・設計・実装・検証まで一貫して取り組んでいます。',
}

export const about = [
  'Asia Pacific UniversityでMultimedia Technology（VR/AR）を専攻し、Unityを用いたVR・ゲーム制作、UXリサーチ、UI設計、3D制作に取り組んできました。',
  '技術を実装することだけでなく、誰が・どんな状況で使うのかを考え、調査やテストから得た気づきを体験設計へ反映することを大切にしています。',
]

export type ProjectProcess = {
  title: string
  body: string
  image?: string
  imageAlt?: string
}

export type ProjectFact = {
  label: string
  value: string
}

export type ProjectHighlight = {
  label: string
  title: string
  body: string
}

export type Project = {
  slug: string
  title: string
  year: string
  description: string
  tags: string[]
  overview: string
  role: string
  duration: string
  youtubeUrl?: string
  githubUrl?: string
  figmaUrl?: string
  videoEmbedUrl?: string
  caseStudyType?: 'default' | 'ux'
  facts?: ProjectFact[]
  highlights?: ProjectHighlight[]
  processIntro?: string
  process: ProjectProcess[]
}

export const projects: Project[] = [
  {
    slug: 'saferoute-vr',
    title: 'SafeRoute VR — 地震・津波避難訓練VR',
    year: '2026',
    description:
      '若年層の避難速度と災害リスク認知の向上を目的に制作したVR避難訓練システム。調査からシナリオ設計、Unity実装、評価まで行った卒業研究。',
    tags: ['Unity', 'Adobe Illustrator', 'Autodesk Maya', 'Blender'],
    overview:
      '従来の避難訓練では再現しにくい「切迫感」「環境の複雑さ」「その場での判断」を、安全なVR空間で体験できるようにすることを目的とした卒業研究です。アンケートと災害経験者へのインタビューから課題を抽出し、屋外の津波避難と屋内の地震対応という2つのシナリオ、時間制限付きの判断ポイント、二次災害、行動時間の記録、結果フィードバックを統合しました。',
    role: '個人制作 / 全工程',
    duration: '2025年12月 — 2026年7月（約8か月）',
    youtubeUrl: 'https://youtu.be/TX7t-ck0Q28',
    githubUrl: 'https://github.com/mirai-333/SafeRoute-VR/tree/main',
    videoEmbedUrl: 'https://www.youtube.com/embed/TX7t-ck0Q28',
    facts: [
      { label: '対象ユーザー', value: '18〜25歳の若年層' },
      { label: '制作形態', value: '卒業研究 / 個人制作' },
      { label: '担当', value: '調査・設計・UI/3D制作・開発・評価' },
      { label: '使用ツール', value: 'Unity / Illustrator / Maya / Blender' },
      { label: 'ユーザー調査', value: 'アンケート31名 + 災害経験者インタビュー3名' },
      { label: '評価', value: 'UAT 3名 / 各シナリオ3回反復' },
    ],
    processIntro:
      'ユーザー調査から要件を定義し、災害時の意思決定をVR体験へ落とし込み、実装後は行動データとUATを用いて効果を検証しました。',
    process: [
      {
        title: '01. 課題調査・ユーザーリサーチ',
        body: '若年層が地震・津波発生時にどこで迷い、なぜ避難が遅れるのかを調査しました。日本語・英語のアンケートを実施し、さらに実際に地震・津波を経験した人への半構造化インタビューを行いました。調査から、避難経路や安全な場所を選ぶ難しさ、現実的な訓練経験の不足、パニックへの不安が見えました。そこで「正解を教えるVR」ではなく、ユーザー自身が限られた時間の中で判断する訓練にする必要があると考えました。',
      },
      {
        title: '02. 要件定義・開発方針',
        body: '調査結果と先行研究から、現実に近い災害状況、時間制限下の意思決定、複数環境への適応、警報や火災などのストレス要因、避難経路の理解、反復練習を主要要件として整理しました。評価できる体験にするため、総避難時間、初動時間、判断ポイントごとの回答時間と正誤も記録する設計にしました。',
      },
      {
        title: '03. シナリオ・体験設計',
        body: '単純に矢印を追うだけにならないよう、ユーザー自身が判断しなければ進めない構成にしました。屋外では海沿いから高台までの移動中に複数の判断ポイントを設け、屋内では地震後に机の下へ避難し、火元確認、出口確保、防災用品の選択を経て避難する流れを設計しました。実装前にシナリオマップ、ストーリーボード、UIフロー、インタラクションフローを作成し、体験全体を整理しました。',
      },
      {
        title: '04. UI・3Dアセット制作',
        body: '警告、判断パネル、操作説明、カウントダウン、結果画面などのUIをAdobe Illustratorで制作しました。VR内で情報量が過剰にならないことを重視し、視認性と世界観のバランスを調整しました。環境用の道路、障害物、避難標識、小物などはAutodesk MayaやBlenderで制作・調整し、Unityへ統合しました。',
      },
      {
        title: '05. Unity / XR実装',
        body: 'UnityでMeta Quest向けVR環境を構築し、移動、Ray Interaction、Grab Interactionに加え、地震、津波、火災、NPC、ドア、障害物などのイベントを実装しました。各Decision Pointでは回答時間と正誤を記録し、終了時に総時間と各フェーズの結果をResult Sceneへ渡して表示できるようにしました。',
      },
      {
        title: '06. テスト・反復改善',
        body: 'シーン遷移、インタラクション、タイマー、判断ロジック、結果計算を確認した後、大学生を対象にUATを実施しました。各シナリオを3回ずつ体験してもらった結果、反復によって避難時間と判断速度が改善し、初回に誤答やタイムアップがあった判断ポイントでも正しい選択が増えました。単に「楽しかった」で終わらず、学習の変化を行動データで確認できることを重視しました。',
      },
      {
        title: '07. 評価・次の改善',
        body: 'UATではシナリオの分かりやすさ、没入感、UI、操作性、学習体験に肯定的な評価を得ました。一方、同じルートを繰り返すことで慣れが生じる課題も見つかりました。今後はランダム障害物、ルート変更、追加災害、環境インタラクション、AI NPC、協力プレイなどを導入し、繰り返しても判断が必要な訓練へ発展させたいと考えています。',
      },
    ],
  },
  {
    slug: 'grocery-time',
    title: 'Grocery Time! — VR買い物シミュレーション',
    year: '2026',
    description:
      '予算と時間制限の中で買い物を行い、Needs / Wantsを判断するVR金融リテラシーゲーム。3人チームで開発を担当。',
    tags: ['Unity', 'Visual Studio Code', 'Blender', 'Canva'],
    overview:
      'Grocery Time!は、現実のスーパーに近いVR空間で買い物を体験しながら、予算管理と「必要なもの / 欲しいもの」の判断を学ぶ教育ゲームです。プレイヤーは制限時間と予算の中で商品を探し、カートへ入れ、セルフレジで会計し、最後にスコア・残金・ミスのフィードバックを受けます。私は3人チームの中でDevelopmentを担当し、Unity上でゲーム進行と各システムをつなぐ実装を中心に行いました。',
    role: 'Development',
    duration: 'チーム制作',
    youtubeUrl: 'https://youtu.be/6hrapMvMPHw',
    githubUrl: 'https://github.com/mirai-333/GroceryTime-',
    videoEmbedUrl: 'https://www.youtube.com/embed/6hrapMvMPHw',
    facts: [
      { label: '対象ユーザー', value: '16〜30歳の若年層' },
      { label: '制作形態', value: '3人チーム / VR教育ゲーム' },
      { label: '担当', value: 'Development' },
      { label: '使用ツール', value: 'Unity / VS Code / Blender / Canva' },
      { label: '主要機能', value: 'Shopping / Budget / Timer / Checkout / Result' },
      { label: '評価', value: 'UAT 5名' },
    ],
    processIntro:
      'チームで決めた体験設計を、保守しやすいゲームシステムへ分解してUnity上に実装しました。自分の担当では、各機能を独立させながらゲーム全体として自然につながることを重視しました。',
    process: [
      {
        title: '01. 設計を実装構造へ変換',
        body: '完成していたストーリーボード、ワイヤーフレーム、フローをもとに、ゲームをどの単位に分ければ実装・修正しやすいかを考えました。GameManagerを中心にIntro、Gameplay、Resultの状態を分け、ShoppingManager、BudgetManager、TimerManagerなどへ責務を分散させました。機能追加時に別システムへ影響しにくい構成を目指しました。',
      },
      {
        title: '02. XR操作・商品インタラクション',
        body: 'XR Interaction Toolkitを使用して、商品を掴む、持つ、確認する、カートへ入れるといった現実の買い物に近い操作を実装しました。VR初心者でも理解しやすいよう、複雑な操作ではなく「手を伸ばして掴む」という自然なマッピングを優先しました。',
      },
      {
        title: '03. Shopping System',
        body: '商品情報はItemDataとしてまとめ、ShoppingListManagerがランダムな買い物リストを生成し、CartManagerが取得商品、合計価格、必要品、不要品、スコアを管理する構造にしました。処理を一つの巨大なスクリプトへ集約せず、役割ごとに分割することでデバッグしやすくしました。',
      },
      {
        title: '04. 予算・タイマー・進行制御',
        body: '買い物リストに応じて初期予算を生成し、残予算を各UIから参照できるBudgetManagerを実装しました。TimerManagerでは通常のチェックアウトと時間切れを別の状態として扱い、時間切れの場合は買い物へ戻れないようゲーム進行を制御しました。プレイヤーの状況に応じて同じ画面でも挙動が変わるため、状態管理を明確にすることを意識しました。',
      },
      {
        title: '05. Checkout / Result',
        body: 'CheckoutではCartManagerやBudgetManagerから必要な値を取得し、表示側と計算ロジックを分離しました。ResultでもResultCalculatorとResultUIを分け、正しく購入した商品、買い忘れ、不要な購入、最終スコア、残予算を計算して提示しました。プレイヤーが「なぜこの結果になったか」を理解できるフィードバックを目指しました。',
      },
      {
        title: '06. Audio・フィードバック',
        body: 'BGMとSEをAudioManagerへ集約し、ボタン操作、商品追加、時間切れ、結果表示などで一貫したフィードバックを返せるようにしました。VRでは画面だけを見続けるとは限らないため、音によって操作結果が伝わることも重要だと考えました。',
      },
      {
        title: '07. テスト・改善',
        body: '各機能のUnit / Integration Testingを行い、予算、スコア、タイマー、Needs / Wants、Checkout、Resultが連携して正しく動くことを確認しました。その後5名でUATを実施し、商品情報の読みやすさやタイマーの緊張感、予算学習への有用性が高く評価されました。実装後も操作の分かりやすさやフィードバックを調整しました。',
      },
    ],
  },
  {
    slug: 'wedo-ux',
    title: 'WeDo — グループ活動を支えるUX設計',
    year: '2026',
    description:
      '日常的な小規模グループの「情報が埋もれる・進捗が見えない・負担が偏る」を調査し、AIを活用した協働アプリを設計したUXプロジェクト。',
    tags: ['Figma', 'UX Research', 'Prototyping', 'Usability Testing'],
    overview:
      'WeDoは、大学のグループ課題、旅行、共同生活などの小規模な共同作業を、ビジネス向けツールほど堅くせず、チャットだけより整理しやすくすることを目指したUXプロジェクトです。32名への調査から、情報がチャットに埋もれる、誰が何を担当しているか分からない、複数サービスに情報が散らばる、進捗更新そのものが面倒といった行動上の問題を抽出しました。そこから「管理機能を増やす」のではなく、ユーザーの負担を増やさずに透明性を高めることを中心に設計しました。',
    role: '個人制作 / UX Research・Information Architecture・UI/UX Design・Prototype・User Testing',
    duration: 'UX coursework',
    figmaUrl: 'https://www.figma.com/proto/45s3l7JK0ougBsE6AYlDl1/UX-assignment?page-id=20%3A2&node-id=179-698&starting-point-node-id=179%3A698&t=epvso0BzTsOgmPqf-1',
    caseStudyType: 'ux',
    facts: [
      { label: '対象ユーザー', value: '18〜25歳を中心とした小規模グループ参加者' },
      { label: '利用シーン', value: '大学課題 / 旅行計画 / 共同生活 / クラブ活動' },
      { label: '制作形態', value: '個人UXプロジェクト' },
      { label: '担当', value: 'リサーチからユーザーテスト・改善まで全工程' },
      { label: '使用ツール', value: 'Figma' },
      { label: 'ユーザー調査', value: 'オンラインアンケート 32名' },
      { label: 'ユーザーテスト', value: 'リモートテスト 6名' },
      { label: '成果物', value: 'IA / Wireframe / Interactive Prototype / High-Fidelity UI' },
    ],
    highlights: [
      {
        label: 'PROBLEM',
        title: 'チャットは気軽。でも「管理」には弱い。',
        body: '重要情報が流れ、担当や進捗が見えず、別ツールへ情報が分散する。一方で業務向け管理ツールは日常的なグループ活動には重すぎる、という間のギャップに着目しました。',
      },
      {
        label: 'KEY INSIGHT',
        title: '必要なのは機能の多さより「見えること」と「面倒を減らすこと」。',
        body: '調査から、ユーザーは進捗・担当・次にやることをすぐ確認したい一方、ステータス更新など管理作業を増やしたくないことが分かりました。',
      },
      {
        label: 'DESIGN DIRECTION',
        title: 'AIを「追加機能」ではなく、管理負担を減らす裏方として使う。',
        body: '会話からの進捗更新、タスク生成、要約、リマインドなどをAIが補助し、人は自然なコミュニケーションを続けながら情報が整理される体験を目指しました。',
      },
    ],
    processIntro:
      'このケーススタディでは、完成画面よりも「なぜその設計にしたか」を中心に、仮説がユーザー調査でどう変化し、どの発見をどの機能・UIへ変換したかを追えるようにしています。',
    process: [
      {
        title: '01. 問題設定・初期仮説',
        body: '出発点は、共同生活、旅行、大学のグループ課題で感じた「一部の人だけが管理を抱える」「誰がどれだけ貢献したか分からない」という経験でした。最初は匿名意見箱や貢献度の可視化を重要だと考えていました。しかし、自分の経験だけを一般化しないため、まず実際のグループ活動で何が起きているかを調査することにしました。ここでの目的は、作りたい機能を正当化することではなく、仮説そのものを検証することでした。',
      },
      {
        title: '02. ユーザーリサーチ',
        body: '18〜25歳を中心とする32名へオンラインアンケートを実施しました。利用ツール、スケジュール調整、タスク進捗、過去の決定の確認方法、公平感、困っていることを質問し、選択式だけでなく自由回答も集めました。その結果、①チャット中心で重要情報が埋もれる、②担当・進捗が見えない、③ファイルやリンクが複数サービスへ分散する、という共通する行動パターンが見えました。さらに「ステータス更新自体が面倒」という問題もあり、管理機能を増やすだけでは別の負担を生むと考えました。',
      },
      {
        title: '03. PersonaからUser Needへ',
        body: '調査結果を、調整役になりやすく見えない管理負担を抱えるAlexと、自分の担当や全体状況を把握したいMikaという対照的な2つのPersonaに整理しました。ここで重要だったのは、表面的な要望をそのまま機能にしないことです。「進捗が分からない」は“進捗・担当・状態が見える必要がある”、「更新が面倒」は“会話に近い方法で素早く記録できる必要がある”というUser Needへ言い換えました。以降の設計では、各画面がこのNeedのどれを解決するかを確認し続けました。',
      },
      {
        title: '04. User Need → 機能へ変換',
        body: '各User Needに対して機能と理由を対応させました。進捗の透明性にはTracking Dashboard、散らばる情報にはArchiveとAI要約、管理者の見えない負担にはAI ChatとReminder、タスク配分の不公平感にはAI Task Boardと作業量の説明、自分の次の行動を知りたいニーズにはMe Page、更新の面倒さには会話形式で記録できるLog Pageを設計しました。AIは目立つ主役ではなく、入力・整理・確認の手間を減らす役割として配置しました。',
      },
      {
        title: '05. 情報設計・Wireframe',
        body: 'Card Sortingを行い、機能同士の関係からInformation Architectureを作りました。特に悩んだのがTrackingとArchiveの境界です。最終的に「今の状態を見る＝Tracking」「あとから記録を探す＝Archive」と、ユーザーの時間軸に合わせて分けました。WireframeではWorkspace切り替えも何度も検討しました。頻繁に使うため見つけやすさは必要ですが、常に強く見えると現在の作業への集中を妨げます。この“見えるけれど邪魔しない”バランスが重要な設計課題になりました。',
      },
      {
        title: '06. Interactive / High-Fidelity Prototype',
        body: 'Figmaで操作可能なPrototypeを作り、Workspace作成からAIによるTask Board生成までの初回体験と、6週間利用した後に進捗確認・ミーティング設定を行う継続利用の2つのUser Flowを設計しました。初期案ではHomeに区切りや情報を詰め込みすぎ、複雑に見えたため、要素を減らして視線の優先順位を整理しました。UIは青系の柔らかいグラデーション、白を多く使ったカード、丸み、Glass表現を採用し、管理ツール特有の硬さやストレスを弱めることを狙いました。',
      },
      {
        title: '07. ユーザーテスト',
        body: '6名にFigma Prototypeを画面共有で操作してもらい、「進捗確認」「過去の会議Agenda確認」「ミーティング設定」「自分の進捗記録」を実施しました。Workspace切り替えが目立ちすぎる、Logボタンが大きく意味が分かりにくい、一部の文言が曖昧、AIによるミーティング設定は説明なしでは発見しにくい、File画面の情報階層が分かりづらい、という課題が見つかりました。機能が存在することと、ユーザーが自力で見つけて理解できることは別だと確認できました。',
      },
      {
        title: '08. テスト結果から改善',
        body: 'Workspace Selectorはサイズと視覚的な強さを下げ、横スワイプでも切り替えられるようにしました。Logボタンは他のナビゲーションを邪魔しないサイズへ縮小し、見た目も統一しました。曖昧だったラベルは説明的な文言へ変更し、File画面は情報階層を整理して視認性を改善しました。また、AI Meeting機能は便利でも存在に気づかれなければ使われないため、初回利用時に短い説明を入れる必要があると判断しました。',
      },
      {
        title: '09. 学び',
        body: 'この制作で最も大きかった学びは、UXは機能を整理するだけではなく、ユーザーの感情やグループ内の関係にも影響するということです。機能を増やすほど便利になるとは限らず、認知負荷も同時に増えます。特にWorkspace切り替えは何度も作り直し、「目立たせること」と「使いやすいこと」は同じではないと実感しました。今後も既存サービスの自然なUIパターンを観察し、ユーザーが考えなくても操作できる体験を設計したいです。',
      },
    ],
  },
  {
    slug: 'pulse',
    title: 'Pulse — リアルタイム分析基盤',
    year: '2022',
    description: '仮の制作物データです。後ほど実際の作品へ差し替えます。',
    tags: ['Placeholder'],
    overview: '後ほど実際の作品情報へ差し替えます。',
    role: '—',
    duration: '—',
    process: [],
  },
  {
    slug: 'notes',
    title: 'Notes — オフライン対応メモアプリ',
    year: '2021',
    description: '仮の制作物データです。後ほど実際の作品へ差し替えます。',
    tags: ['Placeholder'],
    overview: '後ほど実際の作品情報へ差し替えます。',
    role: '—',
    duration: '—',
    process: [],
  },
]

export const skillGroups = [
  {
    category: '開発',
    items: ['Unity', 'C#', 'XR Interaction Toolkit', 'OpenXR'],
  },
  {
    category: 'UI / UX',
    items: ['Figma', 'Adobe Illustrator', 'UX Research', 'Prototyping'],
  },
  {
    category: '3D',
    items: ['Autodesk Maya', 'Blender'],
  },
  {
    category: 'その他',
    items: ['Git', 'GitHub', 'Adobe Premiere Pro'],
  },
]

export type CareerItem = {
  period: string
  company: string
  role: string
  description: string
}

export const career: CareerItem[] = []
