import { buildStoreUrl } from "@/lib/appstore";

const APP_STORE_COUNTRIES: Record<string, string> = {
  en: "us",
  de: "de",
  fr: "fr",
  es: "es",
  pt: "pt",
  it: "it",
  nl: "nl",
  ja: "jp",
  ko: "kr",
  zh: "cn",
  ar: "sa",
  tr: "tr",
  ru: "ru",
  pl: "pl",
  sv: "se",
};

export function getPulseAppStoreUrl(locale = "en", campaign = "web-landing-pulse") {
  const country = APP_STORE_COUNTRIES[locale] ?? APP_STORE_COUNTRIES.en;

  return buildStoreUrl({
    appSlug: "pulse-system-monitor",
    appId: "6761375793",
    cc: country,
    campaign,
    mt: 12, // preserved from the original URL
  });
}
