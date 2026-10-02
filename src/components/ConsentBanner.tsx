"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { CONSENT_OPEN_EVENT, getConsent, setConsent, subscribeConsent } from "@/lib/consent";

/**
 * Banner text. It is part of the consent record: when the wording or the services behind it
 * change, bump CONSENT_VERSION in src/lib/consent.ts (git history is the archive of old texts,
 * see docs/CONSENT_PROCESS.md).
 */
const copy = {
  en: {
    title: "Consent to Google Analytics",
    body: "With your consent we use Google Analytics 4 by Google Ireland Limited to analyse, in statistical form, which pages and articles are visited. For this, cookies are stored on your device (kept for up to 2 years) and usage data is sent to Google, where Google LLC in the USA may have access (EU-US Data Privacy Framework). Without your consent Google Analytics is not loaded and the site works exactly the same. You can change your choice at any time via “Cookie settings” at the bottom of every page; withdrawing only affects the future.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Privacy policy",
    imprint: "Legal notice",
  },
  de: {
    title: "Einwilligung in Google Analytics",
    body: "Mit Ihrer Einwilligung setzen wir Google Analytics 4 der Google Ireland Limited ein, um statistisch auszuwerten, welche Seiten und Artikel besucht werden. Dazu werden Cookies auf Ihrem Gerät gespeichert (Speicherdauer bis zu 2 Jahre) und Nutzungsdaten an Google übermittelt. Dabei ist ein Zugriff durch Google LLC in den USA möglich (EU-US Data Privacy Framework). Ohne Einwilligung wird Google Analytics nicht geladen; die Website funktioniert unverändert. Sie können Ihre Entscheidung jederzeit über „Cookie-Einstellungen“ unten auf jeder Seite ändern; ein Widerruf wirkt nur für die Zukunft.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    privacy: "Datenschutzerklärung",
    imprint: "Impressum",
  },
} as const;

/**
 * Consent banner for Google Analytics. Accept and Decline are equally prominent and both sit on
 * the first layer. It never blocks the page: ignoring it simply means no consent. Reopens via the
 * footer's "Cookie-Einstellungen" button (CONSENT_OPEN_EVENT).
 */
export default function ConsentBanner() {
  // Server snapshot says "granted" so no banner is rendered on the server or during hydration;
  // on the client it becomes null (undecided) and the banner appears.
  const stored = useSyncExternalStore(subscribeConsent, getConsent, () => "granted" as const);
  const browserLang = useSyncExternalStore(
    () => () => {},
    () => (navigator.language?.toLowerCase().startsWith("de") ? "de" : "en"),
    () => "en" as const,
  );
  const { lang: siteLang } = useLanguage();
  const pathname = usePathname();
  const [reopened, setReopened] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const visible = stored === null || reopened;
  const isGerman = siteLang === "de" || browserLang === "de" || /(^|\/)de(\/|$)/.test(pathname ?? "");
  const t = copy[isGerman ? "de" : "en"];

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  // Keep the footer links reachable: pad the page by the banner's height while it is shown.
  useEffect(() => {
    if (!visible || !ref.current) return;
    const el = ref.current;
    const apply = () => {
      document.body.style.paddingBottom = `${el.offsetHeight + 24}px`;
    };
    apply();
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("resize", apply);
      document.body.style.paddingBottom = "";
    };
  }, [visible, isGerman]);

  if (!visible) return null;

  const choose = (c: "granted" | "denied") => {
    setConsent(c);
    setReopened(false);
  };

  const btn =
    "rounded-full border border-white/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  const link =
    "underline underline-offset-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";

  return (
    <div
      ref={ref}
      role="region"
      aria-labelledby="consent-title"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-h-[70vh] max-w-[760px] overflow-y-auto rounded-2xl border border-white/15 bg-black/95 p-5 shadow-2xl backdrop-blur md:p-6"
    >
      <p id="consent-title" className="mb-1 text-sm font-medium text-white">
        {t.title}
      </p>
      <p className="mb-3 text-[13px] leading-relaxed text-white/70">{t.body}</p>
      <p className="mb-4 text-[13px] text-white/70">
        <Link href="/datenschutz" className={link}>
          {t.privacy}
        </Link>
        {" · "}
        <Link href="/impressum" className={link}>
          {t.imprint}
        </Link>
      </p>
      <div className="flex flex-wrap gap-3">
        <button type="button" className={btn} onClick={() => choose("denied")}>
          {t.decline}
        </button>
        <button type="button" className={btn} onClick={() => choose("granted")}>
          {t.accept}
        </button>
      </div>
    </div>
  );
}
