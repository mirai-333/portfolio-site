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
    {
      title: '01. ユーザー要件を実装条件へ変換',
      body: '事前調査では、落ち着いたスローペースのVR体験、明確なガイダンス、自分のペースでの探索、文化的な正確さ、VR酔いへの配慮が重視されていました。さらに、手で物を直接扱う操作とシンプルなメニュー操作への支持が高かったため、開発では「複雑な操作を増やさない」「移動を急がせない」「次に何をすればよいか分かる」という3点を基準にしました。単に機能を実装するのではなく、調査結果を操作仕様へ変換することを意識しました。',
    },
    {
      title: '02. Unity / XR基盤構築',
      body: 'Unityをメイン開発環境として、XR Interaction Toolkitを用いたVR基盤を構築しました。Meta Questで動作するよう、Grab Interaction、Controller / Hand Input、Teleportationを組み込み、各シーンで共通して使える操作を整えました。初めてVRを使うユーザーも対象だったため、操作ごとに異なるルールを作るのではなく、できるだけ一貫したインタラクションに統一しました。',
    },
    {
      title: '03. Navigation / Scene Flow',
      body: '体験は鳥居から入り、手水、参道、神社、食文化、茶室、着物体験を経て再び鳥居から退出する流れで構成しました。神社参拝の順序を感じられる一方、移動そのものが負担にならないようTeleportを中心に実装し、大きな場面転換ではFade to Blackを使って視覚的な負荷を抑えました。シーン同士をただ接続するのではなく、ユーザーが「今どこにいて、次にどこへ行くのか」を理解できることを重視しました。',
    },
    {
      title: '04. Temizuya — 手水インタラクション',
      body: '手水舎では、柄杓を掴み、水を手にかけるという実際の動作に近い体験を実装しました。文化的な行為はボタン操作だけで済ませるより、自分の手で動作する方が記憶に残りやすいと考えたためです。一方で、初見では何をすればよいか分かりにくくなるため、インタラクション対象の分かりやすさと案内表示を組み合わせました。',
    },
    {
      title: '05. Matcha / Food Interaction',
      body: '茶室では茶杓、ケトル、茶筅を順に扱い、抹茶を作る流れを体験できるよう実装しました。食事エリアでは、複雑な物理操作ではなくメニュー形式を使い、シーンごとに操作の難易度を調整しました。すべてを同じ操作方式にするのではなく、「文化体験として意味のある動作か」「ユーザーに不要な負担を与えないか」を見ながら、GrabとMenu Interactionを使い分けました。',
    },
    {
      title: '06. Kimono Try-On',
      body: '着物エリアでは、展示された着物を選択し、自分に装着して鏡で確認できる体験を実装しました。視覚的な変化がすぐ返るため、文化要素を説明文だけでなく自分の身体との関係として感じられるようにしました。一方、ユーザーテストではこのエリアで操作が少し分かりにくいという指摘が出たため、インタラクション自体の面白さだけでなく、発見性の改善が必要だと分かりました。',
    },
    {
      title: '07. ガイダンス / Cultural Information',
      body: '各体験の近くに、神社の掲示板を模した文化解説パネルを配置しました。手水、寿司、抹茶、着物について、操作中に必要な情報をその場で確認できます。別画面へ強制的に遷移させる説明ではなく、ユーザーが自分のペースで読めるIn-World UIにすることで、体験の流れや没入感を止めずに文化的な背景を補うことを狙いました。',
    },
    {
      title: '08. 環境・音・没入感の調整',
      body: '桜や神社建築などの3DアセットをUnity上で組み合わせ、環境全体を構築しました。さらに自然音、水音、風鈴、屋台周辺の環境音などを組み込み、視覚だけでなく空間全体で神社らしい雰囲気を感じられるよう調整しました。ユーザー調査で環境音と細部が没入感を高めるという傾向が強かったため、開発上でも装飾ではなく体験設計の一部として扱いました。',
    },
    {
      title: '09. Meta Quest実機テスト・改善',
      body: '完成後はMeta Quest上で実機確認を行い、3名のユーザーテストを実施しました。全体としてNavigation、文化的な没入感、視覚品質は好意的に評価されましたが、TemizuyaやKimonoなど操作量の多い箇所では、初見時に迷いが出ました。また長時間利用後に軽い不快感を報告した初心者もいたため、ガイダンスの強化やComfort設定は今後さらに改善できると考えています。Developmentでは「動けば完成」ではなく、実際にユーザーが迷わず体験できるところまで確認する重要性を学びました。',
    },
  ],
}

const placeholderSlugs = new Set(['pulse', 'notes'])
const realProjects = baseProjects.filter((project) => !placeholderSlugs.has(project.slug))
const placeholders = baseProjects.filter((project) => placeholderSlugs.has(project.slug))

export const projects: Project[] = [...realProjects, beyondTheTorii, ...placeholders]
