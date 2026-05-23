export function DotGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
      style={{
        backgroundImage: `radial-gradient(circle, #FF5A1F 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
    />
  );
}