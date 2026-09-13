# App Store campaign tokens (`ct`)

Every App Store link on the site carries a `ct` campaign token. Apple reports these under
**App Store Connect → App Analytics → Acquisition → Campaigns**, which is the only free way
to tell whether an install came from a YouTube video, a Reddit post, or a blog article.

Links are built by `src/lib/appstore.ts` — never hand-write an App Store URL in a page.

## Tokens set automatically by the site

| Surface | Token | Where it comes from |
|---|---|---|
| Article page + every in-body link | `web-article-{app}` | `campaignFor.article()` |
| Per-app blog index | `web-blog-{app}` | `campaignFor.blogIndex()` |
| App landing page | `web-landing-{app}` | `campaignFor.landing()` |
| Homepage | `web-home` | `campaignFor.home()` |
| `/overview` | `web-overview` | `campaignFor.overview()` |

## Tokens you add by hand — this is the part that matters

When posting anywhere off-site, append the token yourself. **A link without one shows up as
`untagged` and tells you nothing.**

| Channel | Token pattern | Example |
|---|---|---|
| YouTube video description | `yt-{app}-{topic}` | `yt-renym-bulk-rename` |
| Reddit giveaway | `rdt-{subreddit}` | `rdt-appgiveaway` |
| Reddit normal post | `rdt-{subreddit}-{topic}` | `rdt-macapps-launch` |
| Newsletter / email | `mail-{campaign}` | `mail-launch-renym` |

### How to build one

Take the app's normal store URL and append `?ct=` plus the token:

```
https://apps.apple.com/app/renym/id6806640534?ct=yt-renym-bulk-rename
```

If the URL already has a `?`, use `&ct=` instead.

### Rules

- Lowercase, digits and hyphens only. `buildStoreUrl()` normalises these automatically, but
  hand-written links do not get normalised — so write them correctly.
- Keep under **40 characters**; Apple truncates longer tokens.
- Keep the prefix (`yt-`, `rdt-`, `web-`) consistent — the report is sorted alphabetically,
  so a consistent prefix groups a channel together.
- One token per video/post, not per app. If a video covers two apps, use two links with
  different `{app}` segments.

## Provider token (`pt`)

`buildStoreUrl()` also appends a `pt` provider token **if** the `NEXT_PUBLIC_APPLE_PT`
environment variable is set in Vercel. It is currently unset, which is harmless — Apple
ignores parameters it doesn't recognise, so links work either way.

If App Store Connect shows a provider ID for campaign links, add it as `NEXT_PUBLIC_APPLE_PT`
in Vercel → Project → Settings → Environment Variables. No code change is needed.

## Verifying it works

Campaign data is **not** instant. After deploying, wait ~48 hours, then check
App Store Connect → App Analytics → Acquisition → Campaigns for `web-article-sounddial`
(the highest-traffic surface). If nothing appears after a few days, the `pt`/`ct` pairing
likely needs adjusting for this account before trusting the numbers elsewhere.

## On-site side (separate from Apple)

Clicks are also recorded as a Vercel custom event, `appstore_click`, with:
- `campaign` — the `ct` token from the clicked link
- `path` — the page the click happened on

Vercel → Analytics → Events. Combining `path` (which article) with pageviews for the same
path gives per-article click-through rate. This is captured by a single delegated listener in
`src/components/SiteAnalytics.tsx`, so new links are covered automatically with no extra work.
