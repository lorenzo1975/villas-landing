"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { isFeatureEnabled } from "@/lib/feature-flags";

const NAV_LINKS = [
  { href: "#how", label: "How it works", short: "How" },
  { href: "#who", label: "Who it is for", short: "Who" },
  { href: "#trust", label: "Trust & Safety", short: "Trust" },
  { href: "#roadmap", label: "Roadmap", short: "Roadmap" }
];

export function Navbar() {
  const showThemeToggle = isFeatureEnabled("showDarkModeToggle");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-6 lg:pt-8" id="top">
      <div className="container">
        <div className={`flex items-center justify-between px-5 py-3 transition-colors duration-300 ${scrolled ? "bg-white/80 backdrop-blur-2xl rounded-full border border-white/40 shadow-[0_20px_70px_rgba(88,63,140,0.16)] dark:border-white/12 dark:bg-[rgba(30,20,50,0.82)] dark:shadow-[0_28px_90px_rgba(0,0,0,0.55)]" : ""}`}>
          <Link
            href="#top"
            className="font-sans text-2xl font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Villas.co.th
          </Link>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50 md:flex md:pl-8 lg:pl-14 dark:text-secondary-foreground">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-primary dark:hover:text-accent"
              >
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden">{item.short}</span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {showThemeToggle ? (
              <div className="hidden md:block text-foreground/70 dark:text-secondary-foreground">
                <ThemeToggle />
              </div>
            ) : null}
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="hidden rounded-full border border-primary/20 bg-white/70 px-8 py-5 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/75 transition hover:border-primary/30 hover:text-primary md:inline-flex dark:border-white/15 dark:bg-white/10 dark:text-secondary-foreground dark:hover:border-primary/40 dark:hover:text-accent"
            >
              <Link href="#join">Join waitlist</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="hidden rounded-full bg-primary px-8 py-5 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-[0_20px_45px_rgba(143,109,255,0.3)] transition hover:bg-primary/90 hover:shadow-[0_24px_60px_rgba(143,109,255,0.35)] md:inline-flex dark:bg-primary/80 dark:shadow-[0_28px_80px_rgba(112,88,204,0.45)]"
            >
              <Link href="#partner">Partner with us</Link>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-hidden="true"
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute inset-x-4 top-20 rounded-3xl border border-white/40 bg-white/95 p-6 shadow-[0_32px_90px_rgba(88,63,140,0.32)] backdrop-blur-2xl dark:border-white/12 dark:bg-[rgba(34,24,58,0.92)] dark:shadow-[0_32px_110px_rgba(0,0,0,0.6)]">
            <nav className="space-y-4 text-sm font-semibold uppercase tracking-[0.35em] text-foreground/70 dark:text-secondary-foreground">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition hover:border-primary/40 hover:text-primary dark:hover:border-primary/35 dark:hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-foreground/40 dark:text-secondary-foreground/60">{item.short}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-6 grid gap-3">
              <Button
                asChild
                variant="secondary"
                className="w-full rounded-full border border-primary/20 bg-white/75 text-foreground/80 hover:border-primary/35 hover:text-primary dark:border-white/15 dark:bg-white/10 dark:text-secondary-foreground dark:hover:border-primary/40"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#join">Join waitlist</Link>
              </Button>
              <Button
                asChild
                className="w-full rounded-full bg-primary text-primary-foreground shadow-[0_20px_45px_rgba(143,109,255,0.35)] hover:bg-primary/90 dark:bg-primary/80 dark:shadow-[0_28px_80px_rgba(112,88,204,0.45)]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#partner">Partner with us</Link>
              </Button>
            </div>
            {showThemeToggle ? (
              <div className="mt-6 flex justify-center text-foreground/70 dark:text-secondary-foreground">
                <ThemeToggle />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
