export function TechBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* slow drifting technical grid */}
      <div className="tech-grid absolute inset-0" />
      {/* soft accent glow that breathes */}
      <div className="tech-glow absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/3 rounded-full" />
    </div>
  )
}
