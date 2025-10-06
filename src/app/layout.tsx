import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import "./globals.css";

import { CookieConsent } from "@/components/cookie-consent";
import { ThemeProvider } from "@/components/layout/theme-provider";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://villas.co.th";

export const metadata: Metadata = {
  title: {
    default: "Villas.co.th - Trusted Thailand Luxury Villas",
    template: "%s | Villas.co.th"
  },
  description:
    "Villas.co.th is the escrow-backed marketplace connecting luxury villa buyers, renters, and partners with verified Thai properties.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Villas.co.th - Trusted Thailand Luxury Villas",
    description:
      "Discover legally verified villas across Phuket, Samui, and Hua Hin with escrow protection and AI concierge.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Villas.co.th",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Villas.co.th - premium Thai villa marketplace"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Villas.co.th",
    description:
      "Premium, escrow-backed marketplace for Thailand luxury villas with concierge support.",
    images: ["/og.jpg"],
    site: "@villas_co_th"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${playfair.variable} text-foreground`}
      >
        <a
          href="#main"
          className="absolute left-4 top-4 z-[999] -translate-y-20 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition focus:translate-y-0 focus:outline-none"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            {children}
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}