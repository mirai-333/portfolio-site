export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-sm text-muted-foreground">{index}</span>
      <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
    </div>
  )
}
