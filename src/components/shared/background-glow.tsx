export function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/2 top-[-35%] h-[520px] w-[136%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(192,172,255,0.55),rgba(192,172,255,0))] blur-3xl dark:bg-[radial-gradient(circle_at_top,rgba(92,62,150,0.6),rgba(92,62,150,0))]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(143,109,255,0.4),rgba(143,109,255,0))] blur-[140px] dark:bg-[radial-gradient(circle,rgba(112,88,204,0.55),rgba(112,88,204,0))]" />
      <div className="absolute bottom-[-45%] left-1/2 h-[420px] w-[120%] -translate-x-1/2 bg-[radial-gradient(circle_at_bottom,rgba(255,205,145,0.22),rgba(255,205,145,0))] blur-[120px] dark:bg-[radial-gradient(circle_at_bottom,rgba(246,189,120,0.28),rgba(246,189,120,0))]" />
    </div>
  );
}
