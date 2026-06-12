import { mkdir, readFile, writeFile } from "node:fs/promises";

const sourcePath = "/tmp/vault-direct-articles-en.json";
const outputPath =
  "src/app/vault/blog/_data/generated-direct-locales.json";
const cachePath = "/tmp/vault-direct-nllb-context-cache.json";
const translationSourcePath = "/tmp/vault-direct-translation-source.json";
const ollamaEndpoint = "http://127.0.0.1:11434/api/generate";

const localeLanguages = {
  "bn-BD": "Bengali",
  ca: "Catalan",
  cs: "Czech",
  da: "Danish",
  el: "Greek",
  fi: "Finnish",
  he: "Hebrew",
  hi: "Hindi",
  hr: "Croatian",
  hu: "Hungarian",
  id: "Indonesian",
  it: "Italian",
  ja: "Japanese",
  "kn-IN": "Kannada",
  ko: "Korean",
  "ml-IN": "Malayalam",
  "mr-IN": "Marathi",
  ms: "Malay",
  "nl-NL": "Dutch",
  no: "Norwegian Bokmal",
  "or-IN": "Odia",
  "pa-IN": "Punjabi",
  pl: "Polish",
  "pt-BR": "Brazilian Portuguese",
  "pt-PT": "European Portuguese",
  ro: "Romanian",
  ru: "Russian",
  sk: "Slovak",
  "sl-SI": "Slovenian",
  sv: "Swedish",
  "ta-IN": "Tamil",
  "te-IN": "Telugu",
  th: "Thai",
  tr: "Turkish",
  uk: "Ukrainian",
  "ur-PK": "Urdu",
  vi: "Vietnamese",
  "zh-Hans": "Simplified Chinese",
  "zh-Hant": "Traditional Chinese",
};

const regionalCopies = {
  "en-AU": "en",
  "en-CA": "en",
  "en-GB": "en",
  "es-MX": "es",
  "fr-CA": "fr",
};

const localeSeoTerms = {
  "bn-BD": "বিবাহবহির্ভূত সম্পর্ক",
  ca: "Infidelitat",
  cs: "Nevěra",
  da: "Utroskab",
  el: "Απιστία",
  fi: "Uskottomuus",
  he: "בגידה",
  hi: "बेवफाई",
  hr: "Nevjera",
  hu: "Hűtlenség",
  id: "Perselingkuhan",
  it: "Infedeltà",
  ja: "不倫",
  "kn-IN": "ದಾಂಪತ್ಯ ದ್ರೋಹ",
  ko: "불륜",
  "ml-IN": "വിവാഹേതര ബന്ധം",
  "mr-IN": "बेवफाई",
  ms: "Hubungan sulit",
  "nl-NL": "Ontrouw",
  no: "Utroskap",
  "or-IN": "ବିବାହ ବାହାର ସମ୍ପର୍କ",
  "pa-IN": "ਬੇਵਫ਼ਾਈ",
  pl: "Zdrada",
  "pt-BR": "Infidelidade",
  "pt-PT": "Infidelidade",
  ro: "Infidelitate",
  ru: "Измена",
  sk: "Nevera",
  "sl-SI": "Nezvestoba",
  sv: "Otrohet",
  "ta-IN": "துரோகம்",
  "te-IN": "వివాహేతర సంబంధం",
  th: "การนอกใจ",
  tr: "Aldatma",
  uk: "Зрада",
  "ur-PK": "بے وفائی",
  vi: "Ngoại tình",
  "zh-Hans": "婚外情",
  "zh-Hant": "婚外情",
};

const sharedEnglish = {
  descriptionSuffix:
    "A direct guide to encrypted files, cloud copies, partner access, and the digital traces a private vault cannot remove.",
  directAnswer: "Direct answer",
  filesHeading: "What a private vault can protect",
  filesIntro:
    "Stash protects files deliberately imported into separately locked, encrypted storage. That includes:",
  files1:
    "Photos, videos, screenshots, PDFs, voice notes, downloaded attachments, tickets, receipts, and other saved files.",
  files2:
    "Copies verified inside the vault before an original is removed from Photos, Files, Downloads, or the source app.",
  files3:
    "Harmless decoy content behind a secondary PIN and records of failed vault access attempts.",
  files4:
    "Files kept outside the normal camera roll, recent-file lists, and casual photo browsing.",
  workflowHeading: "File-by-file privacy checklist",
  workflow1:
    "Find every source copy in Photos, Hidden, Recently Deleted, Files, Downloads, messages, editing apps, shared albums, and cloud folders.",
  workflow2:
    "Import the files and open every protected photo, document, and audio file. Play large videos from beginning to end.",
  workflow3:
    "Use a vault PIN unrelated to the iPhone passcode, birthdays, anniversaries, or a partner's known codes.",
  workflow4:
    "Choose the calculator, fitness, or music disguise that looks normal among the apps on the device.",
  workflow5:
    "Only after verification, decide which source copies to remove and review synchronized devices separately.",
  tracesHeading: "What can still reveal cheating or an affair",
  tracesIntro:
    "A file vault is not a system-wide invisibility tool. These records remain outside its control:",
  traces1:
    "Live messages, calls, contacts, notification previews, account logins, dating profiles, and linked devices.",
  traces2:
    "App Store purchases, subscriptions, Family Sharing, Screen Time, battery usage, device storage, and app search.",
  traces3:
    "iCloud Photos, Google Photos, shared libraries, backups, email, calendars, Wallet, bank statements, and loyalty accounts.",
  traces4:
    "Location sharing, ride history, hotel systems, tagged posts, the other person's phone, and anything another person saves or shares.",
  limitHeading: "The honest limit",
  limitText:
    "Encryption protects selected files from ordinary access. It cannot guarantee that cheating, adultery, an affair, or a secret relationship stays undiscovered. If discovery could cause violence, coercive control, forced outing, or loss of housing, treat that as a safety issue rather than only a phone-privacy problem.",
  faqHeading: "Frequently asked questions",
  faq1Question: "Does Stash hide every sign of cheating?",
  faq1Answer:
    "No. Stash protects supported files imported into the vault. It does not hide third-party apps, live chats, purchases, payments, locations, or records on another device.",
  faq2Question: "What should be checked before deleting an original file?",
  faq2Answer:
    "Open the protected copy, confirm full quality and playback, then review cloud synchronization, Recently Deleted, attachments, downloads, exports, and other devices.",
  cta: "Download Stash from the App Store",
  back: "Back to Blog",
  download: "Download Stash Free",
  appTitle: "Protect Private Photos and Files",
  appDescription:
    "AES-256 encryption, three disguise modes, a decoy vault, and intruder records on your iPhone.",
  screenshotAlt: "Stash encrypted private file vault on iPhone",
  relatedTitle: "Related cheating and privacy guides",
  relatedDescription: "Continue with the closest matching situation.",
  tagline: "Stash - Secret File Vault",
  indexHeading: "Cheating, Affair and Privacy Guides",
  indexSubtitle:
    "Direct guides for hiding affair photos, protecting secret relationship files, checking cloud exposure, and understanding what a vault cannot hide.",
  readMore: "Read more",
  indexCtaTitle: "Protect Private Affair Photos and Files",
  indexCtaDescription:
    "Encrypted local storage, calculator disguise, decoy vault, and intruder records.",
  indexCtaButton: "Download Stash Free",
};

const sourceArticles = JSON.parse(await readFile(sourcePath, "utf8"));
let cache = {};
try {
  cache = JSON.parse(await readFile(cachePath, "utf8"));
} catch {
  cache = {};
}

const titleKeys = Object.keys(sourceArticles);
const titleSource = Object.fromEntries(
  titleKeys.map((slug, index) => [
    `t${String(index).padStart(3, "0")}`,
    sourceArticles[slug].title,
  ]),
);

if (process.env.EXPORT_TRANSLATION_SOURCE === "1") {
  await writeFile(
    translationSourcePath,
    JSON.stringify({ ...sharedEnglish, ...titleSource }),
  );
  console.log(`Wrote ${translationSourcePath}`);
  process.exit(0);
}
async function translatePayload(source, language, retries = 3) {
  const prompt = [
    `Translate every JSON string value from English to ${language}.`,
    "Preserve every JSON key exactly.",
    "Use natural native-language wording suitable for direct SEO headlines about cheating, infidelity, affairs, spouses, secret lovers, and private iPhone files.",
    "Do not soften explicit words. Preserve product names, iPhone, iCloud, App Store, AES-256, PIN, Stash, Tinder, Grindr, HER, Bumble, WhatsApp, Snapchat, and iMessage.",
    "Return only a valid JSON object with exactly the same keys.",
    JSON.stringify(source),
  ].join("\n");

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    const response = await fetch(ollamaEndpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        model: "qwen2.5:7b",
        stream: false,
        format: "json",
        options: {
          temperature: 0.1,
          num_ctx: 16384,
          num_predict: 5000,
        },
        prompt,
      }),
    });
    if (!response.ok) {
      throw new Error(`Ollama HTTP ${response.status}`);
    }
    const data = await response.json();
    try {
      const translated = JSON.parse(data.response);
      const missingKeys = Object.keys(source).filter(
        (key) => typeof translated[key] !== "string",
      );
      if (missingKeys.length > 0) {
        throw new Error(`Missing ${missingKeys.length} translated keys`);
      }
      return translated;
    } catch (error) {
      if (attempt === retries) throw error;
    }
  }
}

async function translateObject(language) {
  const translatedTitles = await translatePayload(titleSource, language);
  const translatedShared = await translatePayload(sharedEnglish, language);
  return { ...translatedShared, ...translatedTitles };
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function list(items, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</${tag}>`;
}

function buildArticles(translated, seoTerm) {
  return Object.fromEntries(
    Object.entries(sourceArticles).map(([slug, article]) => {
      const titleIndex = titleKeys.indexOf(slug);
      const translatedTitle =
        translated[`t${String(titleIndex).padStart(3, "0")}`];
      const title = `${seoTerm}: ${translatedTitle}`;
      const faqs = [
        {
          question: translated.faq1Question,
          answer: translated.faq1Answer,
        },
        {
          question: translated.faq2Question,
          answer: translated.faq2Answer,
        },
      ];
      return [
        slug,
        {
          ...article,
          title,
          description: `${title}. ${translated.descriptionSuffix}`,
          faqs,
          content: `
<h2>${escapeHtml(translated.directAnswer)}</h2>
<p><strong>${escapeHtml(title)}</strong></p>
<h2>${escapeHtml(translated.filesHeading)}</h2>
<p>${escapeHtml(translated.filesIntro)}</p>
${list([
  translated.files1,
  translated.files2,
  translated.files3,
  translated.files4,
])}
<h2>${escapeHtml(translated.workflowHeading)}</h2>
${list(
  [
    translated.workflow1,
    translated.workflow2,
    translated.workflow3,
    translated.workflow4,
    translated.workflow5,
  ],
  true,
)}
<h2>${escapeHtml(translated.tracesHeading)}</h2>
<p>${escapeHtml(translated.tracesIntro)}</p>
${list([
  translated.traces1,
  translated.traces2,
  translated.traces3,
  translated.traces4,
])}
<h2>${escapeHtml(translated.limitHeading)}</h2>
<p>${escapeHtml(translated.limitText)}</p>
<h2>${escapeHtml(translated.faqHeading)}</h2>
${faqs
  .map(
    (faq) =>
      `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`,
  )
  .join("")}
`,
        },
      ];
    }),
  );
}

const generated = {};
const localeEntries = Object.entries(localeLanguages);
const concurrency = 4;
for (let index = 0; index < localeEntries.length; index += concurrency) {
  const batch = localeEntries.slice(index, index + concurrency);
  const translations = await Promise.all(
    batch.map(async ([locale, language]) => {
      if (cache[locale]) {
        console.log(`Using cached ${locale} translation.`);
        return [locale, cache[locale]];
      }
      console.log(`Translating direct article set to ${language} (${locale})...`);
      return [locale, await translateObject(language)];
    }),
  );

  for (const [locale, translated] of translations) {
    cache[locale] = translated;
    generated[locale] = {
      articles: buildArticles(translated, localeSeoTerms[locale]),
      ui: Object.fromEntries(
        Object.keys(sharedEnglish).map((key) => [key, translated[key]]),
      ),
    };
  }
  await writeFile(cachePath, JSON.stringify(cache));
}

for (const [locale] of localeEntries) {
  if (!generated[locale]) {
    const translated = cache[locale];
    generated[locale] = {
      articles: buildArticles(translated, localeSeoTerms[locale]),
      ui: Object.fromEntries(
        Object.keys(sharedEnglish).map((key) => [key, translated[key]]),
      ),
    };
  }
}

for (const [locale, sourceLocale] of Object.entries(regionalCopies)) {
  generated[locale] = { $copy: sourceLocale };
}

await mkdir("src/app/vault/blog/_data", { recursive: true });
await writeFile(outputPath, JSON.stringify(generated));
console.log(`Wrote ${outputPath}`);
