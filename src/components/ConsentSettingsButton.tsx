"use client";

import { openConsentSettings } from "@/lib/consent";

/** Reopens the Google Analytics consent banner from the privacy page. */
export default function ConsentSettingsButton({ lang = "de" }: { lang?: "de" | "en" }) {
  return (
    <div className="mb-16">
      <button
        type="button"
        onClick={openConsentSettings}
        className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.1em] text-white/80 transition-colors hover:border-white/50 hover:text-white"
      >
        {lang === "de" ? "Cookie-Einstellungen ändern" : "Change cookie settings"}
      </button>
    </div>
  );
}
