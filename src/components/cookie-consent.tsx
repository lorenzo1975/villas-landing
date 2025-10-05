"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { getSettings } from "@/lib/content";

const storageKey = "villas-cookie-consent";

const analyticsSettings = getSettings().analytics;

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!analyticsSettings.cookieConsent) return;
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(storageKey, "accepted");
    setVisible(false);
  };

  if (!analyticsSettings.cookieConsent || !visible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[min(640px,90vw)] -translate-x-1/2 rounded-2xl border border-border/80 bg-background/95 p-6 shadow-xl backdrop-blur">
      <p className="text-sm text-muted-foreground">
        We use cookies and analytics to improve the Villas.co.th experience. Accept to help us tailor updates. You can withdraw consent at any time.
      </p>
      <div className="mt-4 flex justify-end gap-3">
        <Button variant="ghost" onClick={() => setVisible(false)}>
          Not now
        </Button>
        <Button onClick={accept}>Accept</Button>
      </div>
    </div>
  );
}
