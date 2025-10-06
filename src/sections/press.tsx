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
    <section className="section-spacing relative overflow-hidden" id="press">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(188,168,255,0.2),transparent_60%)]" />
        <div className="absolute inset-x-[-18%] bottom-[-25%] h-[360px] bg-[radial-gradient(circle_at_bottom,rgba(255,205,145,0.22),transparent_72%)] blur-[130px]" />
      </div>
      <div className="container relative space-y-16">
        <SectionHeading
          eyebrow="About"
          title={content.title}
          description={content.subtitle}
          align="center"
        />
        <FadeIn className="mx-auto max-w-4xl space-y-10 text-center">
          <p className="text-lg leading-relaxed text-foreground/72 sm:text-xl">
            {content.body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-[2.5rem] border border-white/55 bg-white/80 px-10 py-8 uppercase tracking-[0.35em] text-xs text-foreground/55">
            {content.pressList.map((press) => (
              <span key={press}>{press}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {content.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="inline-flex items-center justify-center rounded-full border border-primary/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary/70 transition hover:border-primary/40 hover:text-primary"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/45">
              Media enquiries?
            </p>
            <Link
              href={`mailto:${content.contact.email}`}
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent-foreground shadow-[0_18px_45px_rgba(255,205,145,0.28)] transition hover:bg-accent/90"
            >
              {content.contact.cta}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
