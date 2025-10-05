import { FooterLinks } from "@/components/layout/footer-links";
import { SectionHeading } from "@/components/shared/section-heading";
import { getJoinContent } from "@/lib/content";

const joinContent = getJoinContent();

export function FooterSection() {
  return (
    <footer className="section-spacing border-t border-border/60 bg-muted/30">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Stay in touch"
          title="Thank you for exploring Villas.co.th"
          description={joinContent.waitlist.privacy}
          align="center"
        />
        <FooterLinks />
        <p className="text-xs text-muted-foreground">
          Copyright {new Date().getFullYear()} Villas.co.th. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
