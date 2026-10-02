# Consent process record: Google Analytics 4 (eduardbruch.com)

Internal record for Art. 5(2) / Art. 7(1) GDPR and § 25(1) TDDDG. Not published on the site.
Guidance used: DSK "Orientierungshilfe Digitale Dienste" v1.2 (Nov 2024, Rn. 84-85: show which process was implemented, store the result without identifiers, archive old texts), EDPB Guidelines 05/2020 and the 2023 cookie banner taskforce report.

## Current version: consent-v1 (CONSENT_VERSION = 1)
- Service behind the banner: Google Analytics 4, Measurement ID G-9M6ZSF925S, provider Google Ireland Limited.
- Banner text (German and English): `src/components/ConsentBanner.tsx`, constant `copy`. Git history is the archive of past texts; the commit that introduces a version is tagged `consent-vN`.
- Choices: "Akzeptieren / Accept" and "Ablehnen / Decline", equal prominence, both on the first layer. Ignoring the banner = no consent (GA stays off). Nothing is pre-selected.
- Storage: `localStorage["eb-consent-ga"]` = `{"v":1,"choice":"granted"|"denied","ts":"<ISO timestamp>"}`. No identifier, no server-side log.
- Re-asking: when `v` differs from `CONSENT_VERSION` (new text or new service) and when a `granted` choice is older than 12 months. A refusal is remembered until the version changes.
- What loads on "granted": `https://www.googletagmanager.com/gtag/js?id=G-9M6ZSF925S` plus an inline init (`src/components/GoogleAnalytics.tsx`) with `allow_google_signals:false`, `allow_ad_personalization_signals:false`, ad storage/user data/personalization denied. Cookies set by Google: `_ga`, `_ga_9M6ZSF925S` (up to 2 years).
- What happens on withdrawal ("Cookie-Einstellungen" in the footer, or the button on /datenschutz): `gtag('consent','update',{analytics_storage:'denied'})`, `ga-disable-G-9M6ZSF925S = true`, GA cookies deleted, no further requests.
- Independent of the cookieless Vercel Web Analytics (legitimate interest, Art. 21 objection toggle).

## Google Analytics admin settings this record assumes (screenshot each, dated, when set)
Data Processing Amendment accepted; all four data-sharing options off; Google signals off; granular location/device data off; user-provided data collection off; ads personalization disabled; data retention 14 months for event and user data with "Reset on new activity" off; enhanced measurement without form interactions and site search; no Ads/BigQuery links.

## Change log
| Date | Version | Change |
|---|---|---|
| 2026-10-02 | 1 | Initial: GA4 behind opt-in banner; privacy policy section 3a, 4a, 4b; two-click YouTube on /reel |
