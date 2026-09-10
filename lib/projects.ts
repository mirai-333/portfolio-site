import { projects as baseProjects, type Project } from '@/lib/portfolio-data'

const beyondTheTorii: Project = {
  slug: 'beyond-the-torii',
  title: 'Beyond the Torii（鳥居の向こう）',
  year: '2026',
  description:
    '日本の神社文化を、落ち着いた探索と直感的なインタラクションで体験するVR文化学習プロジェクト。4人チームでDevelopmentをほぼ全般担当。',
  tags: ['Unity', 'XR Interaction Toolkit', 'Meta Quest', 'C#'],
  overview:
    'Beyond the Torii（鳥居の向こう）は、神社参拝の流れや手水、抹茶、着物、食文化などを、見るだけではなく「体験して学ぶ」ことを目指したVR文化体験です。既存の文化系VRが視覚的な再現や娯楽性に偏りやすいことに対して、文化的な意味を伝えること、初めてVRを使う人でも迷いにくいこと、長時間でも疲れにくいことを重視しました。私は4人チームの中でDevelopmentをほぼ全般担当し、Unity上で環境構築、XR操作、各文化体験のインタラクション、案内、シーン進行、音響、Meta Questでの動作確認まで実装しました。',
  role: 'Development（ほぼ全般）',
  duration: '大学チーム制作 / 14週間',
  youtubeUrl: 'https://youtu.be/XlPORu96qO4',
  videoEmbedUrl: 'https://www.youtube.com/embed/XlPORu96qO4',
  facts: [
    { label: '対象ユーザー', value: '18〜35歳 / 大学生・若年層' },
    { label: '制作形態', value: '4人チーム / VR文化体験' },
    { label: '担当', value: 'Developmentほぼ全般' },
    { label: '使用ツール', value: 'Unity / XR Interaction Toolkit / Meta Quest / C#' },
    { label: '事前調査', value: 'オンラインアンケート 21名' },
    { label: 'ユーザーテスト', value: '3名 / Beginner〜Intermediate' },
    { label: '主要体験', value: '手水 / 神社探索 / 抹茶 / 食文化 / 着物試着' },
    { label: '構成', value: '8つの連続シーン' },
  ],
  processIntro:
    'この制作では、調査から得た「落ち着いて探索したい」「操作を分かりやすくしてほしい」「VR酔いを減らしたい」という要件を、実際のVR操作とシーン進行へどう落とし込むかを重視しました。Development担当として、設計された体験をUnity上で一つずつ実装し、最後にMeta Quest上で全体が自然につながるよう調整しました。',
  process: [
    { title: '01. ユーザー要件を実装条件へ変換', body: '事前調査では、落ち着いたスローペースのVR体験、明確なガイダンス、自分のペースでの探索、文化的な正確さ、VR酔いへの配慮が重視されていました。さらに、手で物を直接扱う操作とシンプルなメニュー操作への支持が高かったため、開発では「複雑な操作を増やさない」「移動を急がせない」「次に何をすればよいか分かる」という3点を基準にしました。単に機能を実装するのではなく、調査結果を操作仕様へ変換することを意識しました。' },
    { title: '02. Unity / XR基盤構築', body: 'Unityをメイン開発環境として、XR Interaction Toolkitを用いたVR基盤を構築しました。Meta Questで動作するよう、Grab Interaction、Controller / Hand Input、Teleportationを組み込み、各シーンで共通して使える操作を整えました。初めてVRを使うユーザーも対象だったため、操作ごとに異なるルールを作るのではなく、できるだけ一貫したインタラクションに統一しました。' },
    { title: '03. Navigation / Scene Flow', body: '体験は鳥居から入り、手水、参道、神社、食文化、茶室、着物体験を経て再び鳥居から退出する流れで構成しました。神社参拝の順序を感じられる一方、移動そのものが負担にならないようTeleportを中心に実装し、大きな場面転換ではFade to Blackを使って視覚的な負荷を抑えました。シーン同士をただ接続するのではなく、ユーザーが「今どこにいて、次にどこへ行くのか」を理解できることを重視しました。' },
    { title: '04. Temizuya — 手水インタラクション', body: '手水舎では、柄杓を掴み、水を手にかけるという実際の動作に近い体験を実装しました。文化的な行為はボタン操作だけで済ませるより、自分の手で動作する方が記憶に残りやすいと考えたためです。一方で、初見では何をすればよいか分かりにくくなるため、インタラクション対象の分かりやすさと案内表示を組み合わせました。' },
    { title: '05. Matcha / Food Interaction', body: '茶室では茶杓、ケトル、茶筅を順に扱い、抹茶を作る流れを体験できるよう実装しました。食事エリアでは、複雑な物理操作ではなくメニュー形式を使い、シーンごとに操作の難易度を調整しました。すべてを同じ操作方式にするのではなく、「文化体験として意味のある動作か」「ユーザーに不要な負担を与えないか」を見ながら、GrabとMenu Interactionを使い分けました。' },
    { title: '06. Kimono Try-On', body: '着物エリアでは、展示された着物を選択し、自分に装着して鏡で確認できる体験を実装しました。視覚的な変化がすぐ返るため、文化要素を説明文だけでなく自分の身体との関係として感じられるようにしました。一方、ユーザーテストではこのエリアで操作が少し分かりにくいという指摘が出たため、インタラクション自体の面白さだけでなく、発見性の改善が必要だと分かりました。' },
    { title: '07. ガイダンス / Cultural Information', body: '各体験の近くに、神社の掲示板を模した文化解説パネルを配置しました。手水、寿司、抹茶、着物について、操作中に必要な情報をその場で確認できます。別画面へ強制的に遷移させる説明ではなく、ユーザーが自分のペースで読めるIn-World UIにすることで、体験の流れや没入感を止めずに文化的な背景を補うことを狙いました。' },
    { title: '08. 環境・音・没入感の調整', body: '桜や神社建築などの3DアセットをUnity上で組み合わせ、環境全体を構築しました。さらに自然音、水音、風鈴、屋台周辺の環境音などを組み込み、視覚だけでなく空間全体で神社らしい雰囲気を感じられるよう調整しました。ユーザー調査で環境音と細部が没入感を高めるという傾向が強かったため、開発上でも装飾ではなく体験設計の一部として扱いました。' },
    { title: '09. Meta Quest実機テスト・改善', body: '完成後はMeta Quest上で実機確認を行い、3名のユーザーテストを実施しました。全体としてNavigation、文化的な没入感、視覚品質は好意的に評価されましたが、TemizuyaやKimonoなど操作量の多い箇所では、初見時に迷いが出ました。また長時間利用後に軽い不快感を報告した初心者もいたため、ガイダンスの強化やComfort設定は今後さらに改善できると考えています。Developmentでは「動けば完成」ではなく、実際にユーザーが迷わず体験できるところまで確認する重要性を学びました。' },
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
  tags: ['Adobe After Effects', 'VFX', 'Motion Tracking', 'Interactive Video'],
  overview:
    'ALL Choicesは、視聴者の選択によって次の展開が変わるインタラクティブ映像作品です。課題条件として「選択肢によって分岐する構成」が指定されていたため、一つの長い動画に分岐を埋め込むのではなく、複数のYouTube動画を用意し、終了画面の次動画への導線を使って選択肢を作りました。視聴者は映像の最後で選択し、それぞれ異なる動画へ進むことで物語を体験します。私はVFXを担当し、特にゴーストが実際にその空間に存在しているように見えることと、視聴者の恐怖を徐々に高めることを重視しました。',
  role: 'VFX / Compositing',
  duration: '大学課題 / インタラクティブ映像制作',
  youtubeUrl: 'https://youtu.be/hp3qrkdeHbM?si=FXxAaCJKgNx0Fv6E',
  videoEmbedUrl: 'https://www.youtube.com/embed/hp3qrkdeHbM',
  facts: [
    { label: '作品形式', value: '選択肢で分岐するインタラクティブ映像' },
    { label: '分岐方法', value: '複数YouTube動画 + 終了画面の次動画導線' },
    { label: '担当', value: 'VFX / Compositing' },
    { label: '表現テーマ', value: 'ゴーストによる恐怖・不安の演出' },
    { label: '主要技法', value: 'Motion Tracking / Noise / Color Grading / Speed Adjustment' },
    { label: '使用ツール', value: 'Adobe After Effects' },
  ],
  processIntro:
    'この作品では、課題条件である「視聴者の選択によって展開が変わる映像」をYouTube上で成立させる構成と、ゴーストがその空間に本当に存在しているように感じられるVFX表現の両方がポイントです。特に自分の担当では、位置合わせだけでなく、色・ノイズ・速度・見せるタイミングを細かく比較しながら恐怖感を作りました。',
  process: [
    {
      title: '01. 分岐型の映像構成を設計',
      body: '学校から「選択肢によって展開が分かれる映像」という条件があったため、まず一本の映像として考えるのではなく、どの場面で選択を出し、その選択の先にどの動画をつなぐかを整理しました。各分岐を別動画として用意し、視聴者が自分で次の展開を選べる構成にしました。物語として自然につながりながら、選択している感覚が明確に残ることを意識しました。',
    },
    {
      title: '02. YouTube上で選択肢を実装',
      body: '分岐の実装には、YouTubeの終了画面から次の動画へ進める導線を利用しました。選択肢ごとに対応する動画を用意して並べることで、視聴者の選択によって別の展開へ進めるようにしています。通常の動画編集だけではなく、動画同士のつながりまで含めて一つのインタラクティブ体験として成立するよう構成しました。',
    },
    {
      title: '03. ゴーストによる恐怖の設計',
      body: 'VFXでは、ゴーストを明確に見せすぎると「怖い存在」ではなく「合成素材」として認識されやすくなると考えました。そこで一目で全貌を見せるのではなく、視聴者が「何かいるかもしれない」と感じる時間を作り、その後に存在へ気づく流れを意識しました。恐怖そのものより、恐怖が生まれる直前の違和感をどう作るかを重視しました。',
    },
    {
      title: '04. Motion Trackingで空間に固定',
      body: 'ゴーストがカメラの動きからずれると、どれだけ質感を作っても合成に見えてしまいます。そのため背景映像をトラッキングし、ゴーストが同じ空間に立っているよう位置と動きを合わせました。フレームごとに不自然な滑りやズレを確認し、「映像の上に貼られている」のではなく「撮影時からそこにいた」ように見えることを基準に調整しました。',
    },
    {
      title: '05. 色味・Noiseで存在感を調整',
      body: '元のゴースト素材をそのまま重ねると背景との明るさや色温度の差で浮いて見えるため、彩度、明度、コントラスト、色味を調整しました。さらにNoiseや映像の乱れを加えて、実写になじみながらも普通の人物とは異なる不安定さを作りました。強すぎるとエフェクト自体が目立ってしまうため、「存在は感じるが加工は意識させない」強度を何度も比較しました。',
    },
    {
      title: '06. 速度と見える時間を調整',
      body: 'ゴーストの動きを通常の人物と同じテンポにすると恐怖感が弱くなるため、速度を一定にせず部分的に変化させました。また、長く見せれば怖くなるわけではないため、出現タイミングと画面内に残る時間も調整しました。速すぎてコミカルにならず、遅すぎて存在に慣れられない境界を探しました。',
    },
    {
      title: '07. 分岐体験とVFXを通して最終確認',
      body: '最後に、Tracking、色味、Noise、速度、Opacity、タイミングだけでなく、動画の終わりから次の選択肢へ進む流れも含めて確認しました。各動画単体の完成度だけでなく、選択→次の展開という体験が途切れないことを確認しながら調整しました。最終的には「VFXが目立つ」ことではなく、視聴者がゴーストの存在を信じたまま、自分で次の展開を選びたくなることを完成基準にしました。',
    },
  ],
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
