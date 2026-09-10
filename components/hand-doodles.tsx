type DoodleProps = {
  className?: string
}

function BaseSvg({
  className,
  children,
  viewBox = '0 0 120 120',
}: DoodleProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  )
}

export function BunnyDoodle({ className }: DoodleProps) {
  return (
    <BaseSvg className={className}>
      <path d="M44 42C36 27 35 12 42 10c8-2 12 16 13 27" />
      <path d="M67 38c3-17 10-29 17-26 7 4 1 21-7 34" />
      <path d="M31 65c0-19 13-31 31-31 19 0 32 13 32 31 0 20-14 34-33 34-18 0-30-14-30-34Z" />
      <path d="M49 63h1M74 63h1" />
      <path d="M58 74c3 3 6 3 9 0" />
      <path d="M28 78c-7 2-11 6-14 11M95 78c7 2 11 6 14 11" />
    </BaseSvg>
  )
}

export function CatDoodle({ className }: DoodleProps) {
  return (
    <BaseSvg className={className}>
      <path d="M31 49 23 26l25 13c8-4 18-4 26 0l24-13-7 24c5 7 7 14 7 23 0 19-16 31-37 31S24 92 24 73c0-9 2-17 7-24Z" />
      <path d="M47 65h1M75 65h1" />
      <path d="M58 75c3 2 6 2 9 0" />
      <path d="M39 76 15 72M40 83 17 88M84 76l23-4M83 83l22 5" />
    </BaseSvg>
  )
}

export function PuppyDoodle({ className }: DoodleProps) {
  return (
    <BaseSvg className={className}>
      <path d="M39 43C26 31 13 35 13 47c0 11 9 18 19 18" />
      <path d="M82 43c13-12 26-8 26 4 0 11-9 18-19 18" />
      <path d="M31 66c0-20 13-34 30-34 18 0 31 14 31 34 0 21-13 36-31 36-17 0-30-15-30-36Z" />
      <path d="M48 65h1M74 65h1" />
      <path d="M57 75c2-3 8-3 10 0-1 5-3 7-5 7s-4-2-5-7Z" />
      <path d="M54 87c5 4 11 4 16 0" />
    </BaseSvg>
  )
}

export function BlobDoodle({ className }: DoodleProps) {
  return (
    <BaseSvg className={className}>
      <path d="M24 66c2-24 17-41 38-41 22 0 37 18 36 42-1 22-13 38-35 38-23 0-41-16-39-39Z" />
      <path d="M47 63h1M73 60h1" />
      <path d="M52 77c8 5 15 4 22-2" />
      <path d="M24 79c-7 4-11 9-13 16M95 83c7 3 12 8 14 14" />
    </BaseSvg>
  )
}

export function SparkleDoodle({ className }: DoodleProps) {
  return (
    <BaseSvg className={className} viewBox="0 0 140 80">
      <path d="m24 9 4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12Z" />
      <path d="m88 22 3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9Z" />
      <path d="M44 55c9-10 18-10 27 0s18 10 27 0 18-10 28 0" />
    </BaseSvg>
  )
}

export function ScribbleDoodle({ className }: DoodleProps) {
  return (
    <BaseSvg className={className} viewBox="0 0 180 80">
      <path d="M9 41c12-23 28-21 38 0s26 24 38 0 27-21 38 0 28 22 48-2" />
      <path d="M28 62c18-7 36-7 54 0" />
      <path d="m137 13 3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9Z" />
    </BaseSvg>
  )
}
