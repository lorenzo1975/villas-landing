import { Circle, FileCheck, KeyRound, MapPinned, Search } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="section-spacing" id="how">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Process"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as IconKey] ?? Circle;
            return (
              <FadeIn delay={index * 0.08} key={step.title}>
                <Card className="h-full bg-white/80 shadow-sm backdrop-blur">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
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
