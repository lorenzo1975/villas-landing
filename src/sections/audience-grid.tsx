import { Building2, Handshake, Home, Scale, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPersonasContent } from "@/lib/content";

const content = getPersonasContent();

const iconMap = {
  Users,
  Home,
  Handshake,
  Building2,
  Scale
};

type IconKey = keyof typeof iconMap;

export function AudienceSection() {
  return (
    <section className="section-spacing relative overflow-hidden" id="who">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(187,168,255,0.2),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-white/70 via-white/25 to-transparent" />
      </div>
      <div className="container relative space-y-16">
        <SectionHeading
          eyebrow="Audience"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.personas.map((persona, index) => {
            const IconComponent = iconMap[persona.icon as IconKey] ?? Users;
            return (
              <FadeIn delay={index * 0.08} key={persona.role}>
                <Card className="group h-full overflow-hidden rounded-[2.5rem] border border-white/55 bg-white/85 p-8 shadow-[0_24px_80px_rgba(88,63,140,0.14)] backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-[0_32px_90px_rgba(88,63,140,0.2)] dark:border-white/12 dark:bg-secondary/40 dark:shadow-[0_32px_100px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                  <CardHeader className="space-y-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary dark:border-primary/35 dark:bg-primary/25 dark:text-primary/90">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-serif text-2xl text-secondary">
                      {persona.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm leading-relaxed text-foreground/70 dark:text-secondary-foreground/80">
                      {persona.valueProp}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="justify-start gap-3 px-0 text-xs font-semibold uppercase tracking-[0.35em] text-primary/70 transition hover:text-primary dark:text-primary/80 dark:hover:text-primary/70"
                    >
                      <a href={persona.ctaHref}>{persona.ctaLabel}</a>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
