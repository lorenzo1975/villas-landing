import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BackgroundGlow } from "@/components/shared/background-glow";
import { FadeIn } from "@/components/shared/fade-in";
import { getHeroContent } from "@/lib/content";

const hero = getHeroContent();

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-24 pt-28 sm:pt-32 lg:pb-32 lg:pt-36"
      id="hero"
    >
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,175,255,0.28),transparent_62%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(88,66,150,0.4),transparent_60%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/18 via-white/45 to-transparent dark:from-primary/40 dark:via-secondary/60 dark:to-transparent" />
        <div className="absolute inset-x-[-10%] bottom-[-25%] h-[360px] bg-[radial-gradient(circle_at_bottom,rgba(255,205,145,0.24),transparent_70%)] blur-[120px] dark:bg-[radial-gradient(circle_at_bottom,rgba(246,189,120,0.3),transparent_70%)]" />
      </div>
      <BackgroundGlow />
      <div className="container relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-12">
          <FadeIn className="space-y-8">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.45em] text-primary/70 dark:text-primary/60">
              Thailand luxury villas
            </span>
            <h1 className="font-serif text-5xl leading-[1.05] text-secondary sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
            <p className="max-w-xl text-lg text-foreground/75 sm:text-2xl">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base shadow-[0_28px_70px_rgba(143,109,255,0.32)] dark:shadow-[0_32px_80px_rgba(112,88,204,0.5)]"
              >
                <Link href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full border border-primary/20 bg-white/75 px-8 py-6 text-base text-foreground/75 shadow-none transition hover:border-primary/30 hover:text-primary dark:border-white/12 dark:bg-secondary/60 dark:text-secondary-foreground/90 dark:hover:border-primary/35"
              >
                <Link href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-foreground/50">
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-primary/25 bg-white/75 px-4 py-2 text-foreground/65 dark:border-white/15 dark:bg-secondary/60 dark:text-secondary-foreground/80"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="frosted-card relative rounded-[2.75rem] p-12 text-secondary dark:text-secondary-foreground">
            <div className="grid gap-10 sm:grid-cols-2">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="text-4xl font-semibold text-foreground sm:text-5xl">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[2.75rem] border border-white/50" aria-hidden />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
