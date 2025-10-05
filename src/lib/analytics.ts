export type AnalyticsEvent = {
  name: string;
  payload?: Record<string, unknown>;
};

const isBrowser = typeof window !== "undefined";

export function track(event: AnalyticsEvent) {
  if (process.env.NODE_ENV !== "production") {
    console.info(`[analytics] ${event.name}`, event.payload ?? {});
  }
  if (!isBrowser) return;
  // Hook in real analytics provider here (Segment, Plausible, etc.).
  window.dispatchEvent(
    new CustomEvent("analytics", {
      detail: event
    })
  );
}
