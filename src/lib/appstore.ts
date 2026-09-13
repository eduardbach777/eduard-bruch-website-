/**
 * Builds App Store URLs carrying an Apple campaign token.
 *
 * Why: YouTube videos, Reddit giveaways and blog articles all funnel into the same
 * App Store page, so installs are otherwise indistinguishable. The `ct` token makes
 * them show up separately under
 * App Store Connect → App Analytics → Acquisition → Campaigns.
 *
 * Safe by construction: Apple ignores query params it doesn't recognise, so a link
 * still resolves normally whether or not campaign reporting is switched on. A wrong
 * or missing token degrades to "untracked" — it can never break the link itself.
 *
 * `pt` (provider token) is only appended when NEXT_PUBLIC_APPLE_PT is set, so it can
 * be added later as a Vercel env var with no code change.
 */

/** Apple truncates long campaign tokens; keep them short and greppable. */
const CT_MAX_LENGTH = 40;

export interface StoreUrlOptions {
  /** Numeric App Store id, without the "id" prefix — e.g. "6806639647". */
  appId: string;
  /** Optional slug segment — e.g. "jetty" in /app/jetty/id6806639647. */
  appSlug?: string;
  /** Storefront country code. Omitted entirely when not given. */
  cc?: string;
  /** Campaign token. See docs/campaign-tokens.md for the naming convention. */
  campaign: string;
  /** Legacy media type — 12 for Mac apps, 8 for iOS. Omitted unless given. */
  mt?: 8 | 12;
}

/** Lowercase, strip anything not URL-safe, clamp to Apple's length limit. */
function normalizeCampaign(campaign: string): string {
  return campaign
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, CT_MAX_LENGTH);
}

export function buildStoreUrl({ appId, appSlug, cc, campaign, mt }: StoreUrlOptions): string {
  const path = [cc, "app", appSlug, `id${appId}`].filter(Boolean).join("/");

  const params = new URLSearchParams();
  const providerToken = process.env.NEXT_PUBLIC_APPLE_PT;
  if (providerToken) params.set("pt", providerToken);
  params.set("ct", normalizeCampaign(campaign));
  if (mt) params.set("mt", String(mt));

  return `https://apps.apple.com/${path}?${params.toString()}`;
}

/**
 * Campaign token for a surface. Keeping construction in one place means the tokens
 * stay consistent, which is what makes the App Store Connect report readable.
 */
export const campaignFor = {
  article: (app: string) => `web-article-${app}`,
  blogIndex: (app: string) => `web-blog-${app}`,
  landing: (app: string) => `web-landing-${app}`,
  home: () => "web-home",
  overview: () => "web-overview",
};
