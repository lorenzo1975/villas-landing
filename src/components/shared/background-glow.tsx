export function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -inset-x-[18%] top-[-35%] h-[520px] bg-[radial-gradient(circle_at_top,rgba(192,172,255,0.55),rgba(192,172,255,0))] blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(143,109,255,0.4),rgba(143,109,255,0))] blur-[140px]" />
      <div className="absolute inset-x-[-10%] bottom-[-45%] h-[420px] bg-[radial-gradient(circle_at_bottom,rgba(255,205,145,0.22),rgba(255,205,145,0))] blur-[120px]" />
    </div>
  );
}
