/**
 * Consent for Google Analytics 4 (Art. 6(1)(a) GDPR, § 25(1) TDDDG).
 *
 * Unlike the cookieless Vercel analytics (see analytics-optout.ts), Google Analytics
 * sets cookies, so it may only load after the visitor has actively said yes.
 *
 * The choice is stored in localStorage as {v, choice, ts}:
 *  - v  = CONSENT_VERSION. Bump it whenever the banner text or the services behind it
 *         change; everyone is then asked again (a new purpose needs a new consent).
 *  - ts = ISO timestamp, so we can show when a consent was given. No identifier is stored.
 * A granted consent older than CONSENT_MAX_AGE_MS is treated as undecided and re-asked.
 * Old banner texts live in git history; see docs/CONSENT_PROCESS.md.
 */

export const CONSENT_KEY = "eb-consent-ga";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 12 months
export const CONSENT_CHANGE_EVENT = "eb-consent-change";
export const CONSENT_OPEN_EVENT = "eb-consent-open";

export type ConsentChoice = "granted" | "denied";

/** Reads the stored choice. null = undecided, outdated version, or expired consent. */
export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const rec = JSON.parse(raw) as { v?: number; choice?: string; ts?: string };
    if (rec.v !== CONSENT_VERSION) return null;
    if (rec.choice !== "granted" && rec.choice !== "denied") return null;
    if (rec.choice === "granted") {
      const age = Date.now() - Date.parse(rec.ts ?? "");
      if (!Number.isFinite(age) || age > CONSENT_MAX_AGE_MS) return null;
    }
    return rec.choice;
  } catch {
    // Storage blocked or unparsable record: treat as undecided, which keeps GA off.
    return null;
  }
}

export function setConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ v: CONSENT_VERSION, choice, ts: new Date().toISOString() }),
    );
  } catch {
    // Not persisted; the in-page event below still applies for this visit.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: choice }));
}

/** Lets the footer / privacy page reopen the banner so consent can be changed. */
export function openConsentSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

/** Subscribe for useSyncExternalStore: fires on in-page choices and on other tabs (storage event). */
export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}
