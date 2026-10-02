"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { getConsent, subscribeConsent } from "@/lib/consent";

export const GA_MEASUREMENT_ID = "G-9M6ZSF925S";

type Gtag = (...args: unknown[]) => void;
const win = () => window as unknown as Record<string, unknown> & { gtag?: Gtag };

/** Removes the GA cookies when consent is withdrawn (on this host and its parent domain). */
function deleteGaCookies() {
  const names = ["_ga", `_ga_${GA_MEASUREMENT_ID.replace("G-", "")}`];
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = [host, `.${host}`];
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`);
  for (const name of names) {
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

/**
 * Loads Google Analytics 4 only after the visitor has consented. Before consent there is
 * no request to Google and nothing is written to the device. Withdrawing consent stops
 * collection immediately and clears the GA cookies.
 *
 * Google signals and ad personalization are switched off; this site uses GA4 for
 * measurement only. Consent is its own legal basis (Art. 6(1)(a) GDPR), independent of
 * the objection toggle for the cookieless Vercel analytics, so an explicit Accept always works.
 */
export default function GoogleAnalytics() {
  // Server snapshot is null, so nothing renders (and nothing loads) until the client has read the choice.
  const choice = useSyncExternalStore(subscribeConsent, getConsent, () => null);

  useEffect(() => {
    const w = win();
    if (choice === "granted") {
      // Re-accepting in the same tab: next/script will not re-run the cached inline init.
      w[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
      w.gtag?.("consent", "update", { analytics_storage: "granted" });
    } else if (choice === "denied") {
      w.gtag?.("consent", "update", { analytics_storage: "denied" });
      w[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      deleteGaCookies();
    }
  }, [choice]);

  if (choice !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          window['ga-disable-${GA_MEASUREMENT_ID}'] = false;
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}
