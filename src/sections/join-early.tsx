import { WaitlistForm } from "@/components/forms/waitlist-form";
import { PartnerForm } from "@/components/forms/partner-form";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { getJoinContent } from "@/lib/content";

const content = getJoinContent();

export function JoinSection() {
  return (
    <section className="section-spacing relative overflow-hidden bg-secondary" id="join">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(189,171,255,0.24),transparent_65%)]" />
        <div className="absolute inset-x-[-25%] top-[-32%] h-[420px] bg-[radial-gradient(circle_at_top,rgba(255,205,145,0.22),transparent_70%)] blur-[150px]" />
      </div>
      <div className="container relative space-y-16 text-secondary-foreground">
        <SectionHeading
          eyebrow="Join"
          title={content.title}
          description={content.subtitle}
          align="center"
          tone="inverted"
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-[2.75rem] border border-white/45 bg-white/95 p-10 shadow-[0_30px_90px_rgba(88,63,140,0.25)] backdrop-blur-xl lg:p-12 dark:border-white/12 dark:bg-secondary/45 dark:shadow-[0_36px_120px_rgba(0,0,0,0.5)]">
              <div className="mb-10 space-y-4">
                <h3 className="font-serif text-3xl text-secondary dark:text-secondary-foreground">
                  {content.waitlist.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-foreground/70 dark:text-secondary-foreground/80">
                  {content.waitlist.description}
                </p>
              </div>
              <WaitlistForm />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="rounded-[2.75rem] border border-white/30 bg-white/85 p-10 shadow-[0_30px_90px_rgba(88,63,140,0.22)] backdrop-blur-xl lg:p-12 dark:border-white/12 dark:bg-secondary/40 dark:shadow-[0_36px_120px_rgba(0,0,0,0.48)]"
              id="partner"
            >
              <div className="mb-10 space-y-4">
                <h3 className="font-serif text-3xl text-secondary dark:text-secondary-foreground">
                  {content.partner.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-foreground/70 dark:text-secondary-foreground/80">
                  {content.partner.description}
                </p>
              </div>
              <PartnerForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
