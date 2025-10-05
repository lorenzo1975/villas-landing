import Link from "next/link";

import { getFooterContent } from "@/lib/content";

const footerContent = getFooterContent();

export function FooterLinks() {
  return (
    <div className="grid gap-8 text-sm text-muted-foreground md:grid-cols-3">
      <div className="space-y-2">
        <p className="text-lg font-semibold text-foreground">
          {footerContent.companyName}
        </p>
        <p>{footerContent.tagline}</p>
      </div>
      <div className="space-y-3">
        <p className="font-semibold text-foreground">Navigate</p>
        <ul className="grid gap-2">
          {footerContent.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <p className="font-semibold text-foreground">Connect</p>
        <p>
          <a href={`mailto:${footerContent.contact.email}`} className="transition hover:text-foreground">
            {footerContent.contact.email}
          </a>
        </p>
        <p>
          <a href={`tel:${footerContent.contact.phone}`} className="transition hover:text-foreground">
            {footerContent.contact.phone}
          </a>
        </p>
        <p>{footerContent.contact.address}</p>
        <div className="flex gap-4 pt-2">
          {footerContent.socials.map((social) => (
            <Link key={social.href} href={social.href} className="transition hover:text-foreground">
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
