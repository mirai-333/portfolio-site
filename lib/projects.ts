import { projects as baseProjects, type Project } from '@/lib/portfolio-data'

const beyondTheTorii: Project = {
  slug: 'beyond-the-torii',
  title: 'Beyond the Torii（鳥居の向こう）',
  year: '2026',
  description:
    '日本の神社文化を、落ち着いた探索と直感的なインタラクションで体験するVR文化学習プロジェクト。4人チームでDevelopmentを担当。',
  tags: ['Unity'],
  overview:
    'Beyond the Torii（鳥居の向こう）は、神社参拝の流れや手水、抹茶、着物、食文化などを、見るだけではなく「体験して学ぶ」ことを目指したVR文化体験です。文化的な意味を伝えることや初めてVRを使う人でも迷いにくいことを重視しました。私は4人チームの中でDevelopmentを担当し、Unity上で環境構築、XR操作、各文化体験のインタラクション、案内、シーン進行、音響、Meta Questでの動作確認まで実装しました。',
  role: 'Development',
  duration: '大学チーム制作 / 14週間',
  youtubeUrl: 'https://youtu.be/XlPORu96qO4',
  videoEmbedUrl: 'https://www.youtube.com/embed/XlPORu96qO4',
  facts: [
    { label: '制作形態', value: '4人チーム' },
    { label: '担当', value: 'Development' },
    { label: '使用ツール', value: 'Unity' },
    { label: '主要体験', value: '手水 / 神社探索 / 抹茶 / 食文化 / 着物試着' },
  ],
  processIntro:
    'この制作では、調査から得た「落ち着いて探索したい」「操作を分かりやすくしてほしい」「VR酔いを減らしたい」という要件を、実際のVR操作とシーン進行へどう落とし込むかを重視しました。開発担当として、設計された体験をUnity上で一つずつ実装し、最後にMeta Quest上で全体が自然につながるよう調整しました。',
  process: [
    { title: '01. ユーザー要件を実装条件へ変換', body: '事前調査では、落ち着いたゆっくりとしたVR体験、明確な案内、自分のペースでの探索、文化的な正確さ、VR酔いへの配慮が重視されていました。さらに、手で物を直接扱う操作とシンプルなメニュー操作への支持が高かったため、開発では「複雑な操作を増やさない」「移動を急がせない」「次に何をすればよいか分かる」という3点を基準にしました。単に機能を実装するのではなく、調査結果を操作仕様へ変換することを意識しました。' },
    { title: '02. Unity / XR基盤構築', body: 'Unityをメイン開発環境として、XR Interaction Toolkitを用いたVR基盤を構築しました。Meta Questで動作するよう、物を掴む操作（Grab Interaction）を組み込み、各シーンで共通して使える操作を整えました。初めてVRを使うユーザーも対象だったため、操作ごとに異なるルールを作るのではなく、できるだけ一貫した操作方法に統一しました。' },
    { title: '03. ナビゲーション・シーン進行', body: '体験は鳥居から始まり、手水、参道、レストラン、抹茶づくり体験、着物体験を経て、再び鳥居から退出する流れで構成しました。各体験では、必要な手順を細かく案内することで、ユーザーが次に何をすればよいか迷わず進められるようにしました。また、次のエリアへ向かう矢印を常に表示し、ユーザーが次にどこへ行けばよいかを理解できるようにしました。' },
    { title: '04. ガイダンス・文化情報の表示', body: '各体験の近くに、神社の掲示板を模した文化解説パネルを配置しました。手水、寿司、抹茶、着物について、操作中に必要な情報をその場で確認できます。別画面へ強制的に遷移させる説明ではなく、ユーザーが自分のペースで読めるVR空間内の案内表示にすることで、体験の流れや没入感を止めずに文化的な背景を補うことを目指しました。' },
    { title: '05. 環境・音・没入感の調整', body: '桜や神社建築などの3DアセットをUnity上で組み合わせ、環境全体を構築しました。さらに自然音、水音や和風のBGMなどを組み込み、視覚だけでなく空間全体で神社らしい雰囲気を感じられるよう調整しました。ユーザー調査で環境音と細部が没入感を高めるという傾向が強かったため、開発上でも装飾ではなく体験設計の一部として扱いました。' },
  ],
}

const styleSnap: Project = {
  slug: 'stylesnap-motion-vfx',
  title: 'StyleSnap — AR Shopping Experience',
  year: '2025',
  description:
    'ARバーチャル試着サービスのコンセプトを、Storyboard・3D商品モデル・After Effectsのモーション表現を使って映像化したチーム制作。',
  tags: ['Adobe After Effects', 'Autodesk Maya', '3ds Max', 'Video Editing'],
  overview:
    'StyleSnapは、オンラインショッピングで商品を実際に試せない不安を減らすため、服・アクセサリ・コスメをARでバーチャル試着できるショッピング体験を提案したプロジェクトです。チームではモバイルとデスクトップの両方からカメラを使って商品を試せるサービス構想を設計しました。私はその中で、Storyboard制作、After Effectsによるアニメーション実装、4点の3D商品モデル制作、最終映像の編集・コンパイルを担当し、サービスの利用イメージが短い映像でも伝わることを重視しました。',
  role: 'Storyboard / Motion & VFX / 3D Product Modeling / Video Editing',
  duration: '2024年9月 — 2025年1月 / 2人チーム',
  youtubeUrl: 'https://youtu.be/xSLoQvwidnU',
  videoEmbedUrl: 'https://www.youtube.com/embed/xSLoQvwidnU',
  facts: [
    { label: '制作形態', value: '2人チーム / ARショッピング提案' },
    { label: '担当', value: 'Storyboard / After Effects Animation / 3D Product ×4 / Video Compiling' },
    { label: '使用ツール', value: 'Adobe After Effects / Autodesk Maya / 3ds Max' },
    { label: 'テーマ', value: 'AR Virtual Try-On / Online Shopping' },
    { label: '対応想定', value: 'Mobile / Desktop' },
    { label: '制作物', value: 'Storyboard / 3D Assets / Motion Video' },
  ],
  processIntro:
    'この作品では、サービスの機能そのものを実装したというより、AR試着という体験を「映像としてどう分かりやすく伝えるか」を担当しました。画面遷移をStoryboardで整理し、3D商品を制作し、After Effectsで動きと見せ方を加え、最終的に一つのプロモーション／コンセプト映像へまとめました。',
  process: [
    { title: '01. 体験の整理・Storyboard', body: '最初に、ユーザーが商品を探し、商品詳細を確認し、AR Try-Onを起動し、見た目を確認するまでの体験をStoryboardに整理しました。ARの仕組みを文章だけで説明するのではなく、「どの画面から、どの操作で、何が起きるのか」が映像だけでも理解できる順序を考えました。特に、通常のEC画面とAR体験の切り替わりが唐突に見えないことを意識しました。' },
    { title: '02. 3D Product Modeling', body: 'バーチャル試着の対象として使用する商品モデルのうち4点を制作しました。Mayaや3ds Maxを使い、コスメやファッションアイテムがAR画面上でも商品として認識できるシルエットと質感になるよう調整しました。映像で使用するため、細部を作り込みすぎるのではなく、カメラ距離と画面上での見え方を基準に情報量を決めました。' },
    { title: '03. AR体験を映像へ置き換える', body: 'プロジェクトの中心となるAR Try-Onは、カメラ映像上に商品が重なり、ユーザーの動きに合わせて見え方が変わる体験です。最終映像ではこの仕組みを視聴者が直感的に理解できるよう、商品選択からカメラ表示、試着結果までの因果関係が見える構成にしました。技術説明を増やすのではなく、「選ぶ → 試す → 確認する」という行動の連続で伝えることを優先しました。' },
    { title: '04. After Effects Animation', body: 'After Effectsを使い、画面・商品・テキストなどの動きを実装しました。操作の注目箇所が分かるように、すべてを同時に動かすのではなく、視線を誘導したい要素へ順番に動きを与えました。ARという技術感は出しつつも、ECサービスとして商品が主役に見えるよう、モーションが強すぎないバランスを意識しました。' },
    { title: '05. UIと3Dの見せ方を統一', body: 'プロジェクトでは商品一覧、商品詳細、カート、AR Try-Onなど複数のUIがあり、その中に3D商品や実写カメラ表現が入ります。映像内で素材の種類が切り替わっても別々の作品に見えないよう、画面サイズ、余白、切り替えテンポ、商品の位置関係を調整しました。UIを見せる時間とAR結果を見せる時間にも差をつけ、情報量を整理しました。' },
    { title: '06. Video Compiling / 最終編集', body: '各シーン、3D素材、モーションを一つの映像へまとめ、流れが止まって見える部分や説明不足になる部分を調整しました。特に、AR Try-Onという機能を初めて見る人でも、「オンライン上で商品を試してから購入判断できるサービス」であることが短時間で理解できることを完成基準にしました。最終的にはStoryboard時点の流れと照らし合わせながら、テンポと見せ場を整えました。' },
  ],
}

const ghostVfx: Project = {
  slug: 'ghost-presence-vfx',
  title: 'ALL Choices',
  year: '2025',
  description:
    '学校指定の「選択肢で分岐する映像」を、複数のYouTube動画と終了画面の導線で構成。VFXではゴーストの存在感と恐怖演出を担当したインタラクティブ映像作品。',
  tags: ['Adobe After Effects'],
  overview:
    'ALL Choicesは、視聴者の選択によって次の展開が変わるインタラクティブ映像作品です。課題条件として「選択肢によって分岐する構成」が指定されていたため、一つの長い動画に分岐を埋め込むのではなく、複数のYouTube動画を用意し、終了画面の次動画への導線を使って選択肢を作りました。視聴者は映像の最後で選択し、それぞれ異なる動画へ進むことで物語を体験します。私はVFXを担当し、特にゴーストが実際にその空間に存在しているように見えることと、視聴者の恐怖を徐々に高めることを重視しました。',
  role: 'VFX',
  duration: '大学課題 / インタラクティブ映像制作',
  youtubeUrl: 'https://youtu.be/hp3qrkdeHbM?si=FXxAaCJKgNx0Fv6E',
  videoEmbedUrl: 'https://www.youtube.com/embed/hp3qrkdeHbM',
  facts: [
    { label: '担当', value: 'VFX' },
    { label: '主要技法', value: 'Motion Tracking / Noise / Color Grading / Speed Adjustment' },
    { label: '使用ツール', value: 'Adobe After Effects' },
  ],
  process: [],
}

const placeholderSlugs = new Set(['pulse', 'notes'])
const realProjects = baseProjects.filter((project) => !placeholderSlugs.has(project.slug))
const placeholders = baseProjects.filter((project) => placeholderSlugs.has(project.slug))

export const projects: Project[] = [
  ...realProjects,
  beyondTheTorii,
  styleSnap,
  ghostVfx,
  ...placeholders,
]