import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { isFeatureEnabled } from "@/lib/feature-flags";

export function Navbar() {
  const showThemeToggle = isFeatureEnabled("showDarkModeToggle");

  return (
    <header className="sticky top-0 z-50 pt-6 lg:pt-8" id="top">
      <div className="container">
        <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/80 px-5 py-3 shadow-[0_20px_70px_rgba(88,63,140,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10">
          <Link
            href="#top"
            className="font-serif text-2xl font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Villas.co.th
          </Link>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50 md:flex">
            <Link href="#how" className="transition hover:text-primary">
              How it works
            </Link>
            <Link href="#who" className="transition hover:text-primary">
              Who it is for
            </Link>
            <Link href="#trust" className="transition hover:text-primary">
              Trust & Safety
            </Link>
            <Link href="#roadmap" className="transition hover:text-primary">
              Roadmap
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {showThemeToggle ? (
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
            ) : null}
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="hidden rounded-full border border-primary/20 bg-white/70 px-8 py-5 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/75 transition hover:border-primary/30 hover:text-primary md:inline-flex"
            >
              <Link href="#join">Join waitlist</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="hidden rounded-full bg-primary px-8 py-5 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-[0_20px_45px_rgba(143,109,255,0.3)] transition hover:bg-primary/90 hover:shadow-[0_24px_60px_rgba(143,109,255,0.35)] md:inline-flex"
            >
              <Link href="#partner">Partner with us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
