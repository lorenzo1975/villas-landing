import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { getRoadmapContent } from "@/lib/content";
import { isFeatureEnabled } from "@/lib/feature-flags";

const content = getRoadmapContent();

const statusStyles: Record<string, string> = {
  active: "bg-primary/15 text-primary",
  upcoming: "bg-secondary/15 text-secondary",
  future: "bg-muted text-muted-foreground"
};

export function RoadmapSection() {
  if (!isFeatureEnabled("showRoadmap")) {
    return null;
  }

  return (
    <section className="section-spacing" id="roadmap">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Roadmap"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {content.milestones.map((milestone, index) => (
            <FadeIn delay={index * 0.1} key={milestone.title}>
              <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {milestone.label}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
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
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
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
