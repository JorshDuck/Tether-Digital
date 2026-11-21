export function BackgroundLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-glow-layer" />
      <div className="absolute inset-0 bg-dot-grid" />
      <div className="absolute inset-0 bg-grain" />
    </div>
  )
}
