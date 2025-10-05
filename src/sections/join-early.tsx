import { WaitlistForm } from "@/components/forms/waitlist-form";
import { PartnerForm } from "@/components/forms/partner-form";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { getJoinContent } from "@/lib/content";

const content = getJoinContent();

export function JoinSection() {
  return (
    <section className="section-spacing" id="join">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Join"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-border/60 bg-white/90 p-8 shadow-sm backdrop-blur lg:p-10">
              <div className="mb-8 space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">
                  {content.waitlist.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {content.waitlist.description}
                </p>
              </div>
              <WaitlistForm />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl border border-border/60 bg-white/90 p-8 shadow-sm backdrop-blur lg:p-10" id="partner">
              <div className="mb-8 space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">
                  {content.partner.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
