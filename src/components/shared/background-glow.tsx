export function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-[-20%] h-[480px] bg-glow-gradient opacity-70 blur-3xl" />
      <div className="absolute left-[10%] top-[10%] h-48 w-48 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute right-[10%] bottom-[-10%] h-64 w-64 translate-x-1/3 rounded-full bg-secondary/30 blur-3xl" />
    </div>
  );
}
