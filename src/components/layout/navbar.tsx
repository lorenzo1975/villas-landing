import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { isFeatureEnabled } from "@/lib/feature-flags";

export function Navbar() {
  const showThemeToggle = isFeatureEnabled("showDarkModeToggle");

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl" id="top">
      <div className="container flex items-center justify-between py-6">
        <Link href="#top" className="text-lg font-semibold text-foreground">
          Villas.co.th
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link href="#how" className="transition hover:text-foreground">
            How it works
          </Link>
          <Link href="#who" className="transition hover:text-foreground">
            Who it is for
          </Link>
          <Link href="#trust" className="transition hover:text-foreground">
            Trust & Safety
          </Link>
          <Link href="#roadmap" className="transition hover:text-foreground">
            Roadmap
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          {showThemeToggle ? <ThemeToggle /> : null}
          <Button asChild variant="secondary" className="hidden md:inline-flex">
            <Link href="#join">Join waitlist</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#partner">Partner with us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
