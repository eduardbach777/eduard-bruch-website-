export type Locale =
  | "en" | "de" | "fr" | "es" | "pt" | "it" | "nl"
  | "ja" | "ko" | "zh" | "zh-Hant"
  | "ru" | "tr" | "pl" | "sv" | "da" | "no" | "fi"
  | "ar" | "he" | "th" | "ms" | "vi" | "uk" | "ca"
  | "el" | "hr" | "sk" | "cs" | "ro" | "hu" | "id" | "hi";

export const LOCALES: { code: Locale; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "it", label: "Italiano", dir: "ltr" },
  { code: "nl", label: "Nederlands", dir: "ltr" },
  { code: "ja", label: "日本語", dir: "ltr" },
  { code: "ko", label: "한국어", dir: "ltr" },
  { code: "zh", label: "中文(简)", dir: "ltr" },
  { code: "zh-Hant", label: "中文(繁)", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
  { code: "pl", label: "Polski", dir: "ltr" },
  { code: "sv", label: "Svenska", dir: "ltr" },
  { code: "da", label: "Dansk", dir: "ltr" },
  { code: "no", label: "Norsk", dir: "ltr" },
  { code: "fi", label: "Suomi", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "he", label: "עברית", dir: "rtl" },
  { code: "th", label: "ไทย", dir: "ltr" },
  { code: "ms", label: "Melayu", dir: "ltr" },
  { code: "vi", label: "Tiếng Việt", dir: "ltr" },
  { code: "uk", label: "Українська", dir: "ltr" },
  { code: "ca", label: "Català", dir: "ltr" },
  { code: "el", label: "Ελληνικά", dir: "ltr" },
  { code: "hr", label: "Hrvatski", dir: "ltr" },
  { code: "sk", label: "Slovenčina", dir: "ltr" },
  { code: "cs", label: "Čeština", dir: "ltr" },
  { code: "ro", label: "Română", dir: "ltr" },
  { code: "hu", label: "Magyar", dir: "ltr" },
  { code: "id", label: "Indonesia", dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
];

export const LOCALE_CODES = LOCALES.map((l) => l.code);

export const STORE_CC: Record<string, string> = {
  en: "us", de: "de", fr: "fr", es: "es", pt: "pt", it: "it", nl: "nl", ja: "jp",
  ko: "kr", zh: "cn", "zh-Hant": "tw", ru: "ru", tr: "tr", pl: "pl", sv: "se",
  da: "dk", no: "no", fi: "fi", ar: "sa", he: "il", th: "th", ms: "my", vi: "vn",
  uk: "ua", ca: "es", el: "gr", hr: "hr", sk: "sk", cs: "cz", ro: "ro", hu: "hu",
  id: "id", hi: "in",
};

export const BACK_LABEL: Record<string, string> = {
  en: "Back to Blog", de: "Zurück zum Blog", fr: "Retour au Blog",
  es: "Volver al Blog", pt: "Voltar ao Blog", it: "Torna al Blog",
  nl: "Terug naar Blog", ja: "ブログに戻る", ko: "블로그로 돌아가기",
  zh: "返回博客", "zh-Hant": "返回部落格", ru: "Назад к блогу",
  tr: "Bloğa Dön", pl: "Wróć do Bloga", sv: "Tillbaka till Blogg",
  da: "Tilbage til Blog", no: "Tilbake til Blogg", fi: "Takaisin blogiin",
  ar: "العودة للمدونة", he: "חזרה לבלוג", th: "กลับไปที่บล็อก",
  ms: "Kembali ke Blog", vi: "Quay lại Blog", uk: "Назад до блогу",
  ca: "Tornar al Blog", el: "Πίσω στο Blog", hr: "Natrag na Blog",
  sk: "Späť na Blog", cs: "Zpět na Blog", ro: "Înapoi la Blog",
  hu: "Vissza a Blogra", id: "Kembali ke Blog", hi: "ब्लॉग पर वापस जाएं",
};

export const NEXT_ARTICLE: Record<string, string> = {
  en: "Next Article", de: "Nächster Artikel", fr: "Article suivant",
  es: "Siguiente artículo", pt: "Próximo artigo", it: "Articolo successivo",
  nl: "Volgend artikel", ja: "次の記事", ko: "다음 기사",
  zh: "下一篇文章", "zh-Hant": "下一篇文章", ru: "Следующая статья",
  tr: "Sonraki Makale", pl: "Następny artykuł", sv: "Nästa artikel",
  da: "Næste artikel", no: "Neste artikkel", fi: "Seuraava artikkeli",
  ar: "المقال التالي", he: "המאמר הבא", th: "บทความถัดไป",
  ms: "Artikel Seterusnya", vi: "Bài viết tiếp theo", uk: "Наступна стаття",
  ca: "Pròxim article", el: "Επόμενο άρθρο", hr: "Sljedeći članak",
  sk: "Ďalší článok", cs: "Další článek", ro: "Articolul următor",
  hu: "Következő cikk", id: "Artikel Selanjutnya", hi: "अगला लेख",
};

export const READ_MORE: Record<string, string> = {
  en: "Read more", de: "Weiterlesen", fr: "Lire la suite",
  es: "Leer más", pt: "Ler mais", it: "Leggi di più",
  nl: "Lees meer", ja: "続きを読む", ko: "자세히 읽기",
  zh: "阅读更多", "zh-Hant": "閱讀更多", ru: "Читать далее",
  tr: "Devamını oku", pl: "Czytaj dalej", sv: "Läs mer",
  da: "Læs mere", no: "Les mer", fi: "Lue lisää",
  ar: "اقرأ المزيد", he: "קרא עוד", th: "อ่านเพิ่มเติม",
  ms: "Baca lagi", vi: "Đọc thêm", uk: "Читати далі",
  ca: "Llegir més", el: "Διαβάστε περισσότερα", hr: "Čitaj više",
  sk: "Čítať ďalej", cs: "Číst dále", ro: "Citește mai mult",
  hu: "Tovább olvasom", id: "Baca selengkapnya", hi: "और पढ़ें",
};
