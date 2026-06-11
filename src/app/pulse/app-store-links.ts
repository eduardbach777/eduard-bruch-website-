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

export function getPulseAppStoreUrl(locale = "en") {
  const country = APP_STORE_COUNTRIES[locale] ?? APP_STORE_COUNTRIES.en;

  return `https://apps.apple.com/${country}/app/pulse-system-monitor/id6761375793?mt=12`;
}
