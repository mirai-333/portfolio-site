export function TechBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="tech-haze absolute inset-0" />
      <div className="tech-grid absolute inset-0" />

      <div className="tech-orb tech-orb-a absolute -left-32 top-16 h-[32rem] w-[32rem] rounded-full" />
      <div className="tech-orb tech-orb-b absolute -right-40 top-[28%] h-[36rem] w-[36rem] rounded-full" />
      <div className="tech-orb tech-orb-c absolute left-[38%] top-[62%] h-[30rem] w-[30rem] rounded-full" />

      <span className="floating-dot floating-dot-1" />
      <span className="floating-dot floating-dot-2" />
      <span className="floating-dot floating-dot-3" />
      <span className="floating-dot floating-dot-4" />
      <span className="floating-dot floating-dot-5" />
    </div>
  )
}
