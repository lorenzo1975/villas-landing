import { Suspense } from "react";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/sections/hero";
import { HowItWorksSection } from "@/sections/how-it-works";
import { AudienceSection } from "@/sections/audience-grid";
import { TrustSection } from "@/sections/trust-safety";
import { RoadmapSection } from "@/sections/roadmap";
import { JoinSection } from "@/sections/join-early";
import { PressSection } from "@/sections/press";
import { FooterSection } from "@/sections/footer";

export default function HomePage() {
  return (
    <main id="main">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <AudienceSection />
      <TrustSection />
      <RoadmapSection />
      <JoinSection />
      <PressSection />
      <Suspense fallback={null}>
        <FooterSection />
      </Suspense>
    </main>
  );
}
