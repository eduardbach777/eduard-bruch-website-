import type { Locale } from "./index";

const storefronts: Record<Locale, string> = {
  en: "us",
  de: "de",
  es: "es",
  ar: "sa",
  fr: "fr",
  "bn-BD": "bd",
  ca: "es",
  cs: "cz",
  da: "dk",
  el: "gr",
  "en-AU": "au",
  "en-CA": "ca",
  "en-GB": "gb",
  "es-MX": "mx",
  fi: "fi",
  "fr-CA": "ca",
  he: "il",
  hi: "in",
  hr: "hr",
  hu: "hu",
  id: "id",
  it: "it",
  ja: "jp",
  "kn-IN": "in",
  ko: "kr",
  "ml-IN": "in",
  "mr-IN": "in",
  ms: "my",
  "nl-NL": "nl",
  no: "no",
  "or-IN": "in",
  "pa-IN": "in",
  pl: "pl",
  "pt-BR": "br",
  "pt-PT": "pt",
  ro: "ro",
  ru: "ru",
  sk: "sk",
  "sl-SI": "si",
  sv: "se",
  "ta-IN": "in",
  "te-IN": "in",
  th: "th",
  tr: "tr",
  uk: "ua",
  "ur-PK": "pk",
  vi: "vn",
  "zh-Hans": "cn",
  "zh-Hant": "tw",
};

export function getAppStoreUrl(locale: Locale): string {
  return `https://apps.apple.com/${storefronts[locale]}/app/stash-secret-file-vault/id6759871587`;
}

export function getAppScreenshot(locale: Locale): string {
  return `/images/vault/stash-${locale}.jpg`;
}
