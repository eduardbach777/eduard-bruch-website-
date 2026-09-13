"use client";

import { useEffect, useState } from "react";
import { isOptedOut, setOptedOut } from "@/lib/analytics-optout";

/**
 * Widerspruchs-Schalter (Art. 21 DSGVO) for the Datenschutz page.
 *
 * The site runs analytics under legitimate interest rather than consent, which
 * requires the objection right to be genuinely exercisable — not just described.
 * Flipping this on makes beforeSend drop every pageview and event.
 */
export default function AnalyticsOptOut({ lang = "de" }: { lang?: "de" | "en" }) {
  // Starts null so the button can't render a wrong state during hydration —
  // localStorage is only readable on the client.
  const [optedOut, setState] = useState<boolean | null>(null);

  useEffect(() => {
    setState(isOptedOut());
  }, []);

  const t =
    lang === "de"
      ? {
          on: "Analyse ist deaktiviert",
          off: "Analyse ist aktiv",
          enable: "Analyse wieder aktivieren",
          disable: "Analyse deaktivieren",
          note: "Die Einstellung wird lokal in diesem Browser gespeichert.",
        }
      : {
          on: "Analytics is disabled",
          off: "Analytics is active",
          enable: "Re-enable analytics",
          disable: "Disable analytics",
          note: "This setting is stored locally in this browser.",
        };

  if (optedOut === null) {
    return <div className="mb-8 h-[42px]" aria-hidden />;
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm text-white/60">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
            style={{ background: optedOut ? "#8E8E93" : "#34C759" }}
          />
          {optedOut ? t.on : t.off}
        </span>
        <button
          type="button"
          onClick={() => {
            const next = !optedOut;
            setOptedOut(next);
            setState(next);
          }}
          className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.1em] text-white/80 transition-colors hover:border-white/50 hover:text-white"
        >
          {optedOut ? t.enable : t.disable}
        </button>
      </div>
      <p className="mt-3 text-xs text-white/40">{t.note}</p>
    </div>
  );
}
