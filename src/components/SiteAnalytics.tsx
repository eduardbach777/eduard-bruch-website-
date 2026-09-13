"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { isOptedOut } from "@/lib/analytics-optout";

/**
 * All site analytics, mounted once from the root layout.
 *
 * App Store clicks are captured with a single delegated listener on `document`
 * rather than by wrapping each link. Every store URL already carries a `ct`
 * campaign token identifying its surface (see src/lib/appstore.ts), so reading
 * that token off the clicked link yields the same data with no per-page changes —
 * and it covers the thousands of links embedded in article HTML, which are raw
 * markup and could not take a React handler anyway.
 */
export default function SiteAnalytics() {
  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.<HTMLAnchorElement>('a[href*="apps.apple.com"]');
      if (!link) return;
      if (isOptedOut()) return;

      let campaign = "untagged";
      try {
        campaign = new URL(link.href).searchParams.get("ct") ?? "untagged";
      } catch {
        // Malformed href — still worth recording the click as untagged.
      }

      track("appstore_click", {
        campaign,
        path: window.location.pathname,
      });
    };

    // "auxclick" covers middle-click / open-in-new-tab, which never fires "click".
    document.addEventListener("click", handleClick);
    document.addEventListener("auxclick", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("auxclick", handleClick);
    };
  }, []);

  return (
    <>
      <Analytics beforeSend={(event) => (isOptedOut() ? null : event)} />
      <SpeedInsights />
    </>
  );
}
