# Stash redirects: eduardbruch.com/vault -> stashphotovault.com

Branch `stash-vault-redirects` (prepared 2026-10-02, **not deployed, not pushed, not merged**).
301s for the old Stash pages on eduardbruch.com whose new page exists on the live site
https://stashphotovault.com. No old page file was deleted; every other `/vault` URL behaves exactly as
before.

## What changed

| file | change |
|---|---|
| `stash-redirects.json` | 13 rules (`statusCode: 301`, absolute destinations). Copy of `~/Desktop/vscode/seo-toolbox/apps/stash/redirects.next.json`. |
| `next.config.ts` | `redirects()` spreads the Stash rules **first**, then keeps the existing `best-apps-to-hide-photos-2026` rule unchanged (it still serves the translated locales). |
| `src/app/sitemap.ts` | Drops sitemap entries whose path matches a Stash rule (18 URLs: `/vault/blog`, 4 English locale indexes, 13 English articles). Everything else, SoundDial included, is unchanged. |
| `public/llms.txt` | The three `/vault` and `/vault/blog` links now point to stashphotovault.com (they would redirect otherwise). |

Generator: `~/Desktop/vscode/stash-site/scripts/stash_redirect_map.py` (tests:
`scripts/test_stash_redirect_map.py`, 17 passing). Changed in this pass: rules are limited to `en` and
its `$copy` locales (`en-AU`, `en-CA`, `en-GB`); every translated locale gets the new status
`keep_translated` (no rule). Regenerate with `python3 scripts/stash_redirect_map.py`, then copy
`seo-toolbox/apps/stash/redirects.next.json` over `stash-redirects.json` here.

## Counts

13 rules, covering 65 old URLs:

| kind | URLs | what |
|---|---|---|
| page | 5 | `/vault`, `/vault/privacy`, `/vault/terms`, `/vault/imprint`, `/vault/blog` |
| index | 4 | `/vault/blog/{en,en-AU,en-CA,en-GB}` -> `/blog` |
| en | 14 | English articles -> same slug or merged new page |
| locale_to_en | 42 | the same 14 slugs under `en-AU`, `en-CA`, `en-GB` (English copies; today these 404, the redirect only gains) |

GSC (2026-07-08..09-28, all /vault URLs, 455 clicks):

| status in redirect_map.csv | URLs | clicks | impressions |
|---|---|---|---|
| drop_infidelity | 832 | 348 (76%) | 12,958 |
| redirect | 65 | 35 (8%) | 7,149 |
| drop | 5 | 30 (7%) | 1,341 |
| pending | 24 | 22 (5%) | 3,533 |
| keep_translated | 675 | 20 (4%) | 2,605 |
| skipped_junk | 1 | 0 (0%) | 1 |

## Rule table (order matters: first match wins)

| # | source | destination |
|---|---|---|
| 1 | `/vault` | https://stashphotovault.com/ |
| 2 | `/vault/privacy` | https://stashphotovault.com/privacy |
| 3 | `/vault/terms` | https://stashphotovault.com/terms |
| 4 | `/vault/imprint` | https://stashphotovault.com/imprint |
| 5 | `/vault/blog` | https://stashphotovault.com/blog |
| 6 | `/vault/blog/:locale(en\|en-AU\|en-CA\|en-GB)` | https://stashphotovault.com/blog |
| 7 | `/vault/blog/:locale(en\|en-AU\|en-CA\|en-GB)/:slug(securely-store-private-files-iphone\|how-to-hide-photos-from-icloud\|how-to-password-protect-photos-iphone\|how-to-hide-photos-on-iphone\|what-is-a-decoy-password)` | https://stashphotovault.com/blog/:slug |
| 8 | `/vault/blog/:locale(en\|en-AU\|en-CA\|en-GB)/:slug(best-secret-photo-vault-apps-iphone\|best-apps-to-hide-photos-2026\|best-offline-vault-app-iphone)` | https://stashphotovault.com/blog/best-photo-vault-apps-iphone |
| 9 | `/vault/blog/:locale(en\|en-AU\|en-CA\|en-GB)/:slug(how-to-hide-apps-on-iphone)` | https://stashphotovault.com/blog/hide-apps-iphone |
| 10 | `/vault/blog/:locale(en\|en-AU\|en-CA\|en-GB)/:slug(keepsafe-vs-stash)` | https://stashphotovault.com/alternatives/keepsafe |
| 11 | `/vault/blog/:locale(en\|en-AU\|en-CA\|en-GB)/:slug(calculator-vault-apps-explained\|best-disguised-app-iphone)` | https://stashphotovault.com/ |
| 12 | `/vault/blog/:locale(en\|en-AU\|en-CA\|en-GB)/:slug(iphone-hidden-album-not-secure)` | https://stashphotovault.com/blog/hidden-photos-iphone |
| 13 | `/vault/blog/:locale(en\|en-AU\|en-CA\|en-GB)/:slug(hide-photos-videos-any-file-iphone)` | https://stashphotovault.com/blog/securely-store-private-files-iphone |

## Verification (local `next build` + `next start -p 3917`, 2026-10-02)

- `npm run build`: clean (exit 0). The only warning, "inferred workspace root" (multiple lockfiles, `~/package-lock.json`), is pre-existing and also appears on `main`.
- `curl -sI` (no `-L`), Safari UA, against every one of the 65 redirected URLs with `Host: www.eduardbruch.com` and `Host: eduardbruch.com`: **130/130 return 301 with the exact expected `Location`, one hop.**
- GET with an iOS WKWebView UA and with Googlebot UA on `/vault/privacy`, `/vault/terms`, `/vault/imprint`, `/vault`, bare host: 301 to the new page. Query strings are kept (`/vault/privacy?lang=de` -> `.../privacy?lang=de`).
- All 14 destinations on the live new site return 200 with no further redirect (`/`, `/blog`, `/privacy`, `/terms`, `/imprint`, `/alternatives/keepsafe`, 8 `/blog/<slug>` pages).
- Not redirected, unchanged: `/`, `/apps`, `/blog`, `/sounddial`, `/sounddial/privacy`, `/sounddial/blog/en` (200); translated pages such as `/vault/blog/de/how-to-hide-photos-on-iphone`, `/vault/blog/fr/how-to-hide-apps-on-iphone`, `/vault/blog/es/securely-store-private-files-iphone`, `/vault/blog/ar/what-is-a-decoy-password`, translated indexes `/vault/blog/{de,es,ar,fr,es-MX,sv}` (200); pending/dropped English pages such as `/vault/blog/en/how-to-send-photos-privately` (200).
- `/vault/blog/de/best-apps-to-hide-photos-2026` still 308s to `/vault/blog/de/best-secret-photo-vault-apps-iphone` (existing rule kept).
- `sitemap.xml`: 8,712 URLs, 0 of them redirecting; 2,720 `/vault` URLs remain (was 2,738); SoundDial entries intact (3,257).
- Infidelity URLs: none redirect. See below for what they return.

### Two hosts, one hop: what local testing cannot show

Live today, `https://eduardbruch.com/*` answers **308 -> `https://www.eduardbruch.com/*`** at the Vercel
domain level, before Next.js runs. After deploy the bare host is therefore two hops
(`eduardbruch.com/vault/privacy` -> 308 `www.eduardbruch.com/vault/privacy` -> 301
`stashphotovault.com/privacy`). Browsers, app webviews and Googlebot follow both, so the shipped app
keeps working. A true single hop for the bare host needs a dashboard change (owner decision below);
the code already handles both hosts in one hop.

## Old URLs deliberately left alone (still served exactly as before)

1. **Translated copies of the migrated articles** (de, es, ar, fr; es-MX and fr-CA are copies of es/fr
   and have no articles): 675 URLs with status `keep_translated`, 20 clicks. The new site is English
   only, so they stay. The ones with GSC data:

| old URL | clicks / imp | note |
|---|---|---|
| /vault/blog/de/how-to-hide-photos-on-iphone | 13 / 1763 | translated copy stays served (EN -> /blog/how-to-hide-photos-on-iphone) |
| /vault/blog/de/calculator-vault-apps-explained | 2 / 159 | translated copy stays served (EN -> /) |
| /vault/blog/fr/how-to-hide-apps-on-iphone | 1 / 358 | translated copy stays served (EN -> /blog/hide-apps-iphone) |
| /vault/blog/fr/securely-store-private-files-iphone | 1 / 200 | translated copy stays served (EN -> /blog/securely-store-private-files-iphone) |
| /vault/blog/de/how-to-hide-apps-on-iphone | 1 / 38 | translated copy stays served (EN -> /blog/hide-apps-iphone) |
| /vault/blog/es/keepsafe-vs-stash | 1 / 35 | translated copy stays served (EN -> /alternatives/keepsafe) |
| /vault/blog/de/what-is-a-decoy-password | 1 / 6 | translated copy stays served (EN -> /blog/what-is-a-decoy-password) |
| /vault/blog/fr/calculator-vault-apps-explained | 0 / 33 | translated copy stays served (EN -> /) |
| /vault/blog/it | 0 / 6 | translated locale index stays served |
| /vault/blog/es-MX | 0 / 1 | translated locale index stays served |
| /vault/blog/fr | 0 / 1 | translated locale index stays served |
| /vault/blog/he | 0 / 1 | translated locale index stays served |
| /vault/blog/hi | 0 / 1 | translated locale index stays served |
| /vault/blog/id | 0 / 1 | translated locale index stays served |
| /vault/blog/th | 0 / 1 | translated locale index stays served |
| /vault/blog/ur-PK | 0 / 1 | translated locale index stays served |

2. **Pending** (phase 2, no new page yet) and **dropped** non-infidelity slugs (24 + 5 URLs with data,
   52 clicks). English and translated pages still render 200 where they exist on the old site:

| old URL | status | clicks / imp |
|---|---|---|
| /vault/blog/es/apps-people-use-to-hide-things-on-phone | drop | 14 / 744 |
| /vault/blog/de/can-police-recover-deleted-photos | drop | 10 / 243 |
| /vault/blog/fr/face-id-vs-pin-security | pending | 5 / 81 |
| /vault/blog/fr/apps-people-use-to-hide-things-on-phone | drop | 4 / 130 |
| /vault/blog/de/face-id-vs-pin-security | pending | 4 / 95 |
| /vault/blog/en/how-to-send-photos-privately | pending | 3 / 1079 |
| /vault/blog/es/can-someone-see-deleted-photos-iphone | pending | 3 / 789 |
| /vault/blog/de/is-your-private-browser-really-private | drop | 2 / 180 |
| /vault/blog/fr/are-cloud-photo-services-safe | pending | 2 / 16 |
| /vault/blog/en/what-is-aes-256-encryption | pending | 1 / 261 |
| /vault/blog/en/are-cloud-photo-services-safe | pending | 1 / 206 |
| /vault/blog/es/what-is-aes-256-encryption | pending | 1 / 134 |
| /vault/blog/ar/what-is-aes-256-encryption | pending | 1 / 65 |
| /vault/blog/fr/break-in-alerts-how-vault-apps-catch-snoopers | pending | 1 / 32 |
| /vault/blog/en/how-encryption-protects-your-photos | pending | 0 / 478 |
| /vault/blog/en/break-in-alerts-how-vault-apps-catch-snoopers | pending | 0 / 112 |
| /vault/blog/es/browse-internet-without-leaving-trace | drop | 0 / 44 |
| /vault/blog/en/iphone-privacy-checklist-2026 | pending | 0 / 43 |
| /vault/blog/de/how-encryption-protects-your-photos | pending | 0 / 41 |
| /vault/blog/de/what-is-aes-256-encryption | pending | 0 / 37 |
| /vault/blog/de/how-to-tell-if-phone-is-being-monitored | pending | 0 / 16 |
| /vault/blog/ar/face-id-vs-pin-security | pending | 0 / 12 |
| /vault/blog/fr/what-is-zero-knowledge-encryption | pending | 0 / 10 |
| /vault/blog/ar/how-to-tell-if-phone-is-being-monitored | pending | 0 / 6 |
| /vault/blog/fr/iphone-privacy-settings | pending | 0 / 6 |
| /vault/blog/ar/break-in-alerts-how-vault-apps-catch-snoopers | pending | 0 / 5 |
| /vault/blog/ar/how-encryption-protects-your-photos | pending | 0 / 4 |
| /vault/blog/fr/what-is-aes-256-encryption | pending | 0 / 3 |
| /vault/blog/ar/how-to-protect-photos-if-phone-stolen | pending | 0 / 2 |
| /vault/blog/es/apps-people-use-t-hide-things-on-phone | skipped_junk | 0 / 1 |

3. **Infidelity articles** (65 slugs, 832 URLs in the map): see the owner decision below.

## Owner decisions

### 1. Infidelity articles (348 of 455 /vault clicks = 76%)

Not redirected, not deleted, routes untouched. **They are not all offline**: tested on this build,

- in the 39 generated locales (sv, he, vi, ja, pt-BR, pl, no, tr, ru, ...) they **render 200** on demand
  (`[locale]/[slug]/page.tsx` has no `dynamicParams = false`) and are **listed in the old sitemap**
  (the locale indexes list them too). These carry 253 of the 348 clicks.
- in en, de, es, ar, fr they return 404 (the imports are commented out in `_data/index.ts`); 95 clicks
  in the GSC window came from the time they were live.

Options: (a) keep as is; (b) `noindex` + remove from sitemap; (c) 410 (fastest de-index; e.g.
`dynamicParams = false` plus a 410 rule); (d) 301 to `https://stashphotovault.com/blog` (not recommended:
it passes infidelity intent to the clean site, and Google treats an off-topic redirect as a soft 404).
Top URLs:

| old URL | clicks | impressions |
|---|---|---|
| /vault/blog/sv/apps-cheating-wives-use | 50 | 758 |
| /vault/blog/de/how-do-cheaters-hide-things-on-phone | 30 | 344 |
| /vault/blog/he/apps-cheating-husbands-use | 9 | 57 |
| /vault/blog/vi/secret-app-for-cheating | 7 | 51 |
| /vault/blog/ja/hide-other-man-photos-partner | 7 | 45 |
| /vault/blog/pt-BR/how-to-keep-an-affair-secret-iphone | 6 | 68 |
| /vault/blog/pl/apps-cheating-wives-use | 6 | 53 |
| /vault/blog/no/best-app-hide-affair-from-spouse | 5 | 114 |
| /vault/blog/pt-BR/apps-cheating-wives-use | 5 | 113 |
| /vault/blog/en/hide-extramarital-relationship-phone | 5 | 93 |
| /vault/blog/he/apps-cheaters-use-to-hide-photos-and-files | 5 | 72 |
| /vault/blog/tr/hide-evidence-of-infidelity-iphone | 5 | 54 |
| /vault/blog/ru/apps-cheating-husbands-use | 5 | 49 |
| /vault/blog/sv/secret-app-for-cheating | 4 | 115 |
| /vault/blog/fr/can-wife-see-hidden-photos-iphone | 4 | 106 |
| /vault/blog/en/apps-cheating-wives-use | 4 | 104 |
| /vault/blog/vi/apps-cheating-wives-use | 4 | 82 |
| /vault/blog/ru/how-to-hide-an-affair-on-iphone | 4 | 14 |
| /vault/blog/en/hide-affair-photos-from-wife | 3 | 104 |
| /vault/blog/pt-PT/best-infidelity-app-hide-photos-files | 3 | 82 |
| /vault/blog/de/calculator-app-to-hide-affair-photos | 3 | 47 |
| /vault/blog/es/where-do-cheaters-hide-photos-iphone | 3 | 45 |
| /vault/blog/de/hide-evidence-of-infidelity-iphone | 3 | 44 |
| /vault/blog/ja/can-wife-see-hidden-photos-iphone | 3 | 44 |
| /vault/blog/es/where-cheating-spouse-hides-videos | 3 | 43 |

Full list: `seo-toolbox/apps/stash/redirect_map.csv`, `status = drop_infidelity`.

### 2. Translated pages

Keep serving them (current choice), or later build `/de/blog/<slug>` etc. on stashphotovault.com and
add rules for those locales (`de/how-to-hide-photos-on-iphone` is the only one with real traffic:
13 clicks / 1,763 imp).

### 3. Bare host single hop

Optional: in Vercel -> eduardbruch.com project -> Domains, the apex `eduardbruch.com` currently redirects
to www. Leaving it is safe (two hops, both permanent). Changing the apex to serve the project directly
would make `/vault/*` one hop on the bare host, but then every other page on the apex is served without
the www redirect (canonical tags still point to www). Recommendation: leave it.

### 4. Internal links (not changed, they keep working through the 301)

`src/app/page.tsx` (`/vault/blog` card), `src/app/apps/page.tsx` and `src/app/creative/page.tsx`
(`/vault/privacy`, `/vault/terms`), `src/app/blog/_data.ts` (vault articles in the hub). Point them to
stashphotovault.com in a later commit if wanted. Also noticed: `llms.txt` gives the Stash App Store id
`6759873487`, `vault/blog/_data/store.ts` uses `6759871587`; one of them is wrong (not changed).

## Deployment steps (owner)

1. Review the branch: `git -C ~/Desktop/vscode/eduard-bruch-website log main..stash-vault-redirects`.
2. Merge into `main` and push (`git checkout main && git merge --ff-only stash-vault-redirects && git push`);
   Vercel deploys `main`.
3. Verify (the middleware blocks `curl/` user agents, so send a browser UA):

```sh
for h in https://www.eduardbruch.com https://eduardbruch.com; do
  for p in /vault/privacy /vault/terms /vault/imprint /vault /vault/blog \
           /vault/blog/en/securely-store-private-files-iphone /vault/blog/en/keepsafe-vs-stash; do
    echo "$h$p"; curl -sI -A "Mozilla/5.0" "$h$p" | grep -iE "^(HTTP|location)"
  done
done
curl -sI -A "Mozilla/5.0" https://www.eduardbruch.com/vault/blog/de/how-to-hide-photos-on-iphone | grep -i ^HTTP   # 200, untouched
curl -sI -A "Mozilla/5.0" https://www.eduardbruch.com/sounddial | grep -i ^HTTP                                    # 200
curl -s  -A "Mozilla/5.0" https://www.eduardbruch.com/sitemap.xml | grep -c "vault/blog/en/securely"              # 0
```

   Expect `HTTP/2 301` + `location: https://stashphotovault.com/...` on www, and `308` -> www then
   `301` on the bare host. Open the app's Settings -> Privacy / Terms links once on a device.
4. LATER (after the new site is indexed): update App Store Connect privacy, support and marketing URLs
   (and fastlane metadata) to stashphotovault.com. **Never remove these redirects**: shipped app builds
   open `/vault/privacy` and `/vault/terms` forever.

## Appendix: every redirected URL

| old path | new path on stashphotovault.com | kind | clicks / imp |
|---|---|---|---|
| /vault | / | page | 0 / 0 |
| /vault/blog | /blog | page | 0 / 175 |
| /vault/blog/en | /blog | index | 0 / 0 |
| /vault/blog/en-AU | /blog | index | 0 / 0 |
| /vault/blog/en-AU/best-apps-to-hide-photos-2026 | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/best-disguised-app-iphone | / | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/best-offline-vault-app-iphone | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/best-secret-photo-vault-apps-iphone | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/calculator-vault-apps-explained | / | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/hide-photos-videos-any-file-iphone | /blog/securely-store-private-files-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/how-to-hide-apps-on-iphone | /blog/hide-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/how-to-hide-photos-from-icloud | /blog/how-to-hide-photos-from-icloud | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/how-to-hide-photos-on-iphone | /blog/how-to-hide-photos-on-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/how-to-password-protect-photos-iphone | /blog/how-to-password-protect-photos-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/iphone-hidden-album-not-secure | /blog/hidden-photos-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/keepsafe-vs-stash | /alternatives/keepsafe | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/securely-store-private-files-iphone | /blog/securely-store-private-files-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-AU/what-is-a-decoy-password | /blog/what-is-a-decoy-password | locale_to_en | 0 / 0 |
| /vault/blog/en-CA | /blog | index | 0 / 0 |
| /vault/blog/en-CA/best-apps-to-hide-photos-2026 | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/best-disguised-app-iphone | / | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/best-offline-vault-app-iphone | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/best-secret-photo-vault-apps-iphone | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/calculator-vault-apps-explained | / | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/hide-photos-videos-any-file-iphone | /blog/securely-store-private-files-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/how-to-hide-apps-on-iphone | /blog/hide-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/how-to-hide-photos-from-icloud | /blog/how-to-hide-photos-from-icloud | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/how-to-hide-photos-on-iphone | /blog/how-to-hide-photos-on-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/how-to-password-protect-photos-iphone | /blog/how-to-password-protect-photos-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/iphone-hidden-album-not-secure | /blog/hidden-photos-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/keepsafe-vs-stash | /alternatives/keepsafe | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/securely-store-private-files-iphone | /blog/securely-store-private-files-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-CA/what-is-a-decoy-password | /blog/what-is-a-decoy-password | locale_to_en | 0 / 0 |
| /vault/blog/en-GB | /blog | index | 0 / 0 |
| /vault/blog/en-GB/best-apps-to-hide-photos-2026 | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/best-disguised-app-iphone | / | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/best-offline-vault-app-iphone | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/best-secret-photo-vault-apps-iphone | /blog/best-photo-vault-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/calculator-vault-apps-explained | / | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/hide-photos-videos-any-file-iphone | /blog/securely-store-private-files-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/how-to-hide-apps-on-iphone | /blog/hide-apps-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/how-to-hide-photos-from-icloud | /blog/how-to-hide-photos-from-icloud | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/how-to-hide-photos-on-iphone | /blog/how-to-hide-photos-on-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/how-to-password-protect-photos-iphone | /blog/how-to-password-protect-photos-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/iphone-hidden-album-not-secure | /blog/hidden-photos-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/keepsafe-vs-stash | /alternatives/keepsafe | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/securely-store-private-files-iphone | /blog/securely-store-private-files-iphone | locale_to_en | 0 / 0 |
| /vault/blog/en-GB/what-is-a-decoy-password | /blog/what-is-a-decoy-password | locale_to_en | 0 / 0 |
| /vault/blog/en/best-apps-to-hide-photos-2026 | /blog/best-photo-vault-apps-iphone | en | 0 / 0 |
| /vault/blog/en/best-disguised-app-iphone | / | en | 0 / 0 |
| /vault/blog/en/best-offline-vault-app-iphone | /blog/best-photo-vault-apps-iphone | en | 0 / 0 |
| /vault/blog/en/best-secret-photo-vault-apps-iphone | /blog/best-photo-vault-apps-iphone | en | 0 / 0 |
| /vault/blog/en/calculator-vault-apps-explained | / | en | 0 / 0 |
| /vault/blog/en/hide-photos-videos-any-file-iphone | /blog/securely-store-private-files-iphone | en | 0 / 0 |
| /vault/blog/en/how-to-hide-apps-on-iphone | /blog/hide-apps-iphone | en | 0 / 0 |
| /vault/blog/en/how-to-hide-photos-from-icloud | /blog/how-to-hide-photos-from-icloud | en | 4 / 2067 |
| /vault/blog/en/how-to-hide-photos-on-iphone | /blog/how-to-hide-photos-on-iphone | en | 1 / 221 |
| /vault/blog/en/how-to-password-protect-photos-iphone | /blog/how-to-password-protect-photos-iphone | en | 1 / 1571 |
| /vault/blog/en/iphone-hidden-album-not-secure | /blog/hidden-photos-iphone | en | 0 / 0 |
| /vault/blog/en/keepsafe-vs-stash | /alternatives/keepsafe | en | 0 / 0 |
| /vault/blog/en/securely-store-private-files-iphone | /blog/securely-store-private-files-iphone | en | 29 / 3112 |
| /vault/blog/en/what-is-a-decoy-password | /blog/what-is-a-decoy-password | en | 0 / 0 |
| /vault/imprint | /imprint | page | 0 / 0 |
| /vault/privacy | /privacy | page | 0 / 3 |
| /vault/terms | /terms | page | 0 / 0 |
