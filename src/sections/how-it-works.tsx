import { Circle, FileCheck, KeyRound, MapPinned, Search } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { getHowItWorksContent } from "@/lib/content";

const content = getHowItWorksContent();

const iconMap = {
  Search,
  MapPinned,
  FileCheck,
  KeyRound
};

type IconKey = keyof typeof iconMap;

export function HowItWorksSection() {
  return (
    <section className="section-spacing relative overflow-hidden" id="how">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(194,175,255,0.18),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/65 via-white/30 to-transparent" />
      </div>
      <div className="container relative space-y-16">
        <SectionHeading
          eyebrow="Process"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as IconKey] ?? Circle;
            return (
              <FadeIn delay={index * 0.08} key={step.title}>
                <div className="group flex h-full flex-col rounded-[2.5rem] border border-white/50 bg-white/80 p-8 shadow-[0_24px_70px_rgba(88,63,140,0.12)] backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-[0_32px_90px_rgba(88,63,140,0.18)] dark:border-white/12 dark:bg-secondary/40 dark:shadow-[0_28px_90px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_36px_110px_rgba(0,0,0,0.5)]">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary dark:border-primary/35 dark:bg-primary/25 dark:text-primary/90">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-sans text-2xl text-secondary">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70 dark:text-secondary-foreground/80">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
