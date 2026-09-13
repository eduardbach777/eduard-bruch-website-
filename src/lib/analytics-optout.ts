/**
 * Analytics opt-out (Art. 21 DSGVO right to object).
 *
 * The site runs cookieless analytics under legitimate interest (Art. 6 Abs. 1 lit. f
 * DSGVO) rather than asking for consent. That position only holds if the right to
 * object is actually exercisable, which is what this provides.
 *
 * The flag lives in localStorage. Writing it is strictly necessary to carry out the
 * user's own explicit request, so it falls under the § 25 Abs. 2 TDDDG necessity
 * exception and needs no consent of its own.
 */

export const OPT_OUT_KEY = "eb-analytics-opt-out";

/** Reads the opt-out flag. Treats any storage failure as "not opted out". */
export function isOptedOut(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(OPT_OUT_KEY) === "1";
  } catch {
    // Safari private mode and similar can throw on localStorage access.
    return false;
  }
}

export function setOptedOut(optedOut: boolean): void {
  if (typeof window === "undefined") return;
  try {
    if (optedOut) {
      window.localStorage.setItem(OPT_OUT_KEY, "1");
    } else {
      window.localStorage.removeItem(OPT_OUT_KEY);
    }
  } catch {
    // Nothing useful to do — the toggle simply won't persist.
  }
}
