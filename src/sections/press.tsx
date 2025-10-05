import Link from "next/link";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPressContent } from "@/lib/content";
import { isFeatureEnabled } from "@/lib/feature-flags";

const content = getPressContent();

export function PressSection() {
  if (!isFeatureEnabled("showPress")) {
    return null;
  }

  return (
    <section className="section-spacing bg-white" id="press">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="About"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <FadeIn className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-base text-muted-foreground">{content.body}</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
            {content.pressList.map((press) => (
              <span key={press}>{press}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {content.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="rounded-full border border-border/60 px-4 py-2 text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Media enquiries?
            </p>
            <Link
              href={`mailto:${content.contact.email}`}
              className="text-base font-semibold text-primary underline-offset-4 hover:underline"
            >
              {content.contact.cta}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
