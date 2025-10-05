import { Building, Shield, ShieldCheck, Stars } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="section-spacing bg-muted/40" id="trust">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Trust"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as IconKey] ?? ShieldCheck;
            return (
              <FadeIn delay={index * 0.1} key={item.title}>
                <Card className="h-full">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn delay={0.2} className="rounded-3xl bg-white/70 p-8 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">{content.note}</p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm font-semibold text-foreground/80">
            {content.partners.map((partner) => (
              <span key={partner.name} className="rounded-full bg-muted px-4 py-2">
                {partner.name} - {partner.type}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
