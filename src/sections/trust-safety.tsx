import { Building, Shield, ShieldCheck, Stars } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { getTrustContent } from "@/lib/content";

const content = getTrustContent();

const iconMap = {
  ShieldCheck,
  Building,
  Stars,
  Shield
};

type IconKey = keyof typeof iconMap;

export function TrustSection() {
  return (
    <section className="section-spacing relative overflow-hidden" id="trust">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(189,171,255,0.24),transparent_58%)]" />
        <div className="absolute inset-x-[-18%] bottom-[-35%] h-[420px] bg-[radial-gradient(circle_at_bottom,rgba(255,205,145,0.22),transparent_70%)] blur-[140px]" />
      </div>
      <div className="container relative space-y-16">
        <SectionHeading
          eyebrow="Trust"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as IconKey] ?? ShieldCheck;
            return (
              <FadeIn delay={index * 0.1} key={item.title}>
                <div className="group flex h-full flex-col rounded-[2.5rem] border border-white/55 bg-white/85 p-8 shadow-[0_24px_80px_rgba(88,63,140,0.14)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(88,63,140,0.2)] dark:border-white/12 dark:bg-white/10">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-primary/12 text-primary dark:border-primary/35 dark:bg-primary/20">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-secondary dark:text-secondary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70 dark:text-secondary-foreground/75">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn delay={0.2} className="rounded-[2.5rem] border border-white/55 bg-white/85 p-10 backdrop-blur-xl dark:border-white/12 dark:bg-white/10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/55 dark:text-secondary-foreground/70">
            {content.note}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-foreground/70 dark:text-secondary-foreground/80">
            {content.partners.map((partner) => (
              <span
                key={partner.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/80 px-5 py-2 uppercase tracking-[0.28em] text-xs text-foreground/70 dark:border-white/12 dark:bg-white/15 dark:text-secondary-foreground/80"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
                {partner.name} - {partner.type}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
