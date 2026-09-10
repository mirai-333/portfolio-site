export const profile = {
  name: '佐藤 悠生',
  nameEn: 'Yuki Sato',
  role: 'ソフトウェアエンジニア',
  location: '東京, 日本',
  email: 'yuki.sato@example.com',
  github: 'https://github.com',
  x: 'https://x.com',
  linkedin: 'https://linkedin.com',
  intro:
    'プロダクトの設計から実装、運用までを一貫して手がけるフルスタックエンジニアです。使う人の体験を起点に、堅牢でスケールするシステムをつくることを大切にしています。',
}

export const about = [
  'Web アプリケーションの開発を専門に、7 年間にわたりスタートアップから大規模サービスまで幅広いプロダクトに携わってきました。フロントエンドの設計思想からバックエンドのアーキテクチャ、インフラの構築まで、垂直に理解して手を動かせることが強みです。',
  '技術そのものよりも、それによって何が生まれるかに関心があります。曖昧な要件を整理し、チームで議論しながら、シンプルで持続可能な解に落とし込むプロセスを得意としています。',
]

export type Project = {
  title: string
  year: string
  description: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Ledger — 経費管理プラットフォーム',
    year: '2024',
    description:
      '中小企業向けの経費精算・会計連携サービス。リアルタイム同期と権限管理を備えたダッシュボードを設計・実装し、月間処理件数 50 万件を支えた。',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    link: '#',
  },
  {
    title: 'Atlas — 社内デザインシステム',
    year: '2023',
    description:
      '40 以上のプロダクトチームが利用する共通コンポーネントライブラリを構築。アクセシビリティとテーマ切り替えを標準化し、開発速度を大幅に改善した。',
    tags: ['React', 'Storybook', 'Design Tokens'],
    link: '#',
  },
  {
    title: 'Pulse — リアルタイム分析基盤',
    year: '2022',
    description:
      'イベントストリームを集計しダッシュボードへ配信するデータパイプライン。秒間数万イベントを低レイテンシで処理するアーキテクチャを担当。',
    tags: ['Go', 'Kafka', 'ClickHouse'],
    link: '#',
  },
  {
    title: 'Notes — オフライン対応メモアプリ',
    year: '2021',
    description:
      'ローカルファーストな設計の個人開発プロジェクト。CRDT によるコンフリクト解決とエンドツーエンド暗号化を実装した。',
    tags: ['TypeScript', 'CRDT', 'IndexedDB'],
    link: '#',
  },
]

export const skillGroups = [
  {
    category: '言語',
    items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL'],
  },
  {
    category: 'フロントエンド',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Vue'],
  },
  {
    category: 'バックエンド',
    items: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'gRPC'],
  },
  {
    category: 'インフラ / ツール',
    items: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Kubernetes'],
  },
]

export type CareerItem = {
  period: string
  company: string
  role: string
  description: string
}

export const career: CareerItem[] = [
  {
    period: '2022 — 現在',
    company: 'Northwind Inc.',
    role: 'シニアソフトウェアエンジニア',
    description:
      '基幹プロダクトのアーキテクチャ刷新をリード。チームのメンタリングと技術選定を担いながら、可用性 99.9% を維持する基盤を運用。',
  },
  {
    period: '2019 — 2022',
    company: 'Meridian Labs',
    role: 'フルスタックエンジニア',
    description:
      '新規 SaaS プロダクトの立ち上げに 0→1 から参画。フロントエンドと API の両輪を担当し、初期ユーザー獲得に貢献した。',
  },
  {
    period: '2017 — 2019',
    company: 'Freelance',
    role: 'Web デベロッパー',
    description:
      '受託開発として複数のスタートアップの Web サービス構築を支援。要件定義から実装、納品までを一人称で遂行した。',
  },
]
