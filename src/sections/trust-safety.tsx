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
    <section className="section-spacing relative overflow-hidden bg-secondary" id="trust">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(187,168,255,0.22),transparent_60%)]" />
        <div className="absolute inset-x-[-15%] bottom-[-35%] h-[420px] bg-[radial-gradient(circle_at_bottom,rgba(255,205,145,0.24),transparent_72%)] blur-[150px]" />
      </div>
      <div className="container relative space-y-16 text-secondary-foreground">
        <SectionHeading
          eyebrow="Trust"
          title={content.title}
          description={content.subtitle}
          align="center"
          tone="inverted"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as IconKey] ?? ShieldCheck;
            return (
              <FadeIn delay={index * 0.1} key={item.title}>
                <div className="frosted-dark flex h-full flex-col rounded-[2.5rem] p-8">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-accent">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-secondary-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/75">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn delay={0.2} className="rounded-[2.5rem] border border-white/12 bg-white/10 p-10 backdrop-blur-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-foreground/65">
            {content.note}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-secondary-foreground">
            {content.partners.map((partner) => (
              <span
                key={partner.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-5 py-2 uppercase tracking-[0.28em] text-xs text-secondary-foreground/75"
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
