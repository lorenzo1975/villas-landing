import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { getRoadmapContent } from "@/lib/content";
import { isFeatureEnabled } from "@/lib/feature-flags";

const content = getRoadmapContent();

const statusStyles: Record<string, string> = {
  active: "bg-primary text-primary-foreground dark:bg-primary/80 dark:text-primary-foreground",
  upcoming: "bg-secondary/80 text-secondary-foreground dark:bg-secondary/60 dark:text-secondary-foreground",
  future: "bg-white/45 text-foreground/60 dark:bg-white/10 dark:text-secondary-foreground/80"
};

export function RoadmapSection() {
  if (!isFeatureEnabled("showRoadmap")) {
    return null;
  }

  return (
    <section className="section-spacing relative overflow-hidden" id="roadmap">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(189,171,255,0.2),transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/65 via-white/25 to-transparent" />
      </div>
      <div className="container relative space-y-16">
        <SectionHeading
          eyebrow="Roadmap"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {content.milestones.map((milestone, index) => (
            <FadeIn delay={index * 0.1} key={milestone.title}>
              <div className="group rounded-[2.5rem] border border-white/55 bg-white/85 p-10 shadow-[0_26px_80px_rgba(88,63,140,0.14)] backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-[0_34px_100px_rgba(88,63,140,0.2)] dark:border-white/12 dark:bg-secondary/40 dark:shadow-[0_32px_110px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_38px_130px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between gap-4 uppercase tracking-[0.3em] text-xs text-foreground/55 dark:text-secondary-foreground/75">
                  <span>{milestone.label}</span>
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1 text-[0.65rem] font-semibold ${
                      statusStyles[milestone.status] ?? statusStyles.future
                    }`}
                  >
                    {milestone.status === "active"
                      ? "In progress"
                      : milestone.status === "upcoming"
                      ? "Planned"
                      : "Future"}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl text-secondary dark:text-secondary-foreground">
                  {milestone.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70 dark:text-secondary-foreground/80">
                  {milestone.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
