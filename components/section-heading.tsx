export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-brand-soft font-mono text-xs text-brand">
        {index}
      </span>
      <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
    </div>
  )
}
