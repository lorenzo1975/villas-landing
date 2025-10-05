import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundGlow } from "@/components/shared/background-glow";
import { FadeIn } from "@/components/shared/fade-in";
import { getHeroContent } from "@/lib/content";

const hero = getHeroContent();

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16" id="hero">
      <BackgroundGlow />
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <FadeIn className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Thailand luxury villas
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              {hero.badges.map((badge) => (
                <Badge key={badge} variant="default">
                  {badge}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-ocean-gradient p-10 text-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-80" aria-hidden />
            <div className="relative grid gap-8">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 rounded-[40px] border border-white/30" aria-hidden />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
