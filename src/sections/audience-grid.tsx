import { Building2, Handshake, Home, Scale, Users } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="section-spacing bg-white" id="who">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Audience"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.personas.map((persona, index) => {
            const IconComponent = iconMap[persona.icon as IconKey] ?? Users;
            return (
              <FadeIn delay={index * 0.08} key={persona.role}>
                <Card className="h-full">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle>{persona.role}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{persona.valueProp}</CardDescription>
                    <Button asChild variant="ghost" className="justify-start px-0">
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
