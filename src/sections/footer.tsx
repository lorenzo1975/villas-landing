import { FooterLinks } from "@/components/layout/footer-links";
import { SectionHeading } from "@/components/shared/section-heading";
import { getJoinContent } from "@/lib/content";

const joinContent = getJoinContent();

export function FooterSection() {
  return (
    <footer className="section-spacing relative overflow-hidden bg-secondary">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(188,168,255,0.28),transparent_62%)]" />
        <div className="absolute inset-x-[-18%] bottom-[-30%] h-96 bg-[radial-gradient(circle_at_bottom,rgba(255,205,145,0.26),transparent_72%)] blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 via-white/5 to-transparent" />
      </div>
      <div className="container relative space-y-16 text-secondary-foreground">
        <SectionHeading
          eyebrow="Stay in touch"
          title="Thank you for exploring Villas.co.th"
          description={joinContent.waitlist.privacy}
          align="center"
          tone="inverted"
          className="max-w-4xl"
        />
        <FooterLinks />
        <div className="flex flex-col gap-4 border-t border-white/15 pt-8 text-xs uppercase tracking-[0.35em] text-secondary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {new Date().getFullYear()} Villas.co.th</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
