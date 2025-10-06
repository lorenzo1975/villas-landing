import Link from "next/link";

import { getFooterContent } from "@/lib/content";

const footerContent = getFooterContent();

export function FooterLinks() {
  return (
    <div className="grid gap-12 text-sm text-secondary-foreground/75 lg:grid-cols-[1.4fr_1fr_1fr]">
      <div className="space-y-4">
        <p className="font-sans text-2xl font-semibold text-secondary-foreground">
          {footerContent.companyName}
        </p>
        <p className="max-w-sm leading-relaxed text-secondary-foreground/70">
          {footerContent.tagline}
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground/60">
          Navigate
        </p>
        <ul className="grid gap-3">
          {footerContent.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-secondary-foreground transition hover:text-accent"
              >
                <span className="h-px w-4 bg-accent/70" aria-hidden />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground/60">
          Connect
        </p>
        <div className="space-y-2">
          <a
            href={`mailto:${footerContent.contact.email}`}
            className="block text-secondary-foreground transition hover:text-accent"
          >
            {footerContent.contact.email}
          </a>
          <a
            href={`tel:${footerContent.contact.phone}`}
            className="block text-secondary-foreground transition hover:text-accent"
          >
            {footerContent.contact.phone}
          </a>
          <p className="max-w-xs leading-relaxed text-secondary-foreground/70">
            {footerContent.contact.address}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          {footerContent.socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground transition hover:border-accent/70 hover:text-accent"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
