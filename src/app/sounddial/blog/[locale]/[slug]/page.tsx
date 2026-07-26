import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getLocaleArticle, getAllArticles, getAllSlugs, LOCALES } from "../../_data";
import type { Locale } from "../../_data";
import type { Metadata } from "next";

// Blog locale -> App Store storefront country code, so each localized article
// links to its own regional App Store page (de -> /de, cs -> /cz, ja -> /jp, ...).
const STORE_CC: Record<string, string> = {
  en: "us", de: "de", fr: "fr", es: "es", pt: "pt", it: "it", nl: "nl", ja: "jp",
  ko: "kr", zh: "cn", "zh-Hant": "tw", ru: "ru", tr: "tr", pl: "pl", sv: "se",
  da: "dk", no: "no", fi: "fi", ar: "sa", he: "il", th: "th", ms: "my", vi: "vn",
  uk: "ua", ca: "es", el: "gr", hr: "hr", sk: "sk", cs: "cz", ro: "ro", hu: "hu",
  id: "id", hi: "in",
};

// Localized "quick fix" callout shown near the top of every article.
const QUICK: Record<string, { k: string; t: string }> = {
  en: { k: "The quick fix", t: "Give every Mac app its own volume slider — right from the menu bar." },
  de: { k: "Schnelle Lösung", t: "Gib jeder Mac-App ihren eigenen Lautstärkeregler – direkt aus der Menüleiste." },
  fr: { k: "La solution rapide", t: "Donnez à chaque app Mac son propre curseur de volume, directement depuis la barre des menus." },
  es: { k: "La solución rápida", t: "Dale a cada app de Mac su propio control de volumen, directamente desde la barra de menús." },
  pt: { k: "A solução rápida", t: "Dê a cada app do Mac o seu próprio controle de volume, direto da barra de menus." },
  it: { k: "La soluzione rapida", t: "Dai a ogni app Mac il suo cursore del volume, direttamente dalla barra dei menu." },
  nl: { k: "De snelle oplossing", t: "Geef elke Mac-app zijn eigen volumeschuif, rechtstreeks vanuit de menubalk." },
  ja: { k: "手軽な解決策", t: "すべてのMacアプリに専用の音量スライダーを、メニューバーからすぐに。" },
  ko: { k: "빠른 해결책", t: "모든 Mac 앱에 전용 볼륨 슬라이더를, 메뉴 막대에서 바로." },
  zh: { k: "快速解决方案", t: "为每个 Mac 应用配备独立的音量滑块——直接从菜单栏操作。" },
  "zh-Hant": { k: "快速解決方案", t: "為每個 Mac 應用程式配備專屬的音量滑桿——直接從選單列操作。" },
  ru: { k: "Быстрое решение", t: "Дайте каждому приложению Mac собственный ползунок громкости — прямо из строки меню." },
  tr: { k: "Hızlı Çözüm", t: "Her Mac uygulamasına kendi ses kaydırıcısını verin — doğrudan menü çubuğundan." },
  pl: { k: "Szybkie rozwiązanie", t: "Daj każdej aplikacji Mac własny suwak głośności — bezpośrednio z paska menu." },
  sv: { k: "Den snabba lösningen", t: "Ge varje Mac-app sin egen volymreglage – direkt från menyraden." },
  da: { k: "Den hurtige løsning", t: "Giv hver Mac-app sin egen lydstyrkeskyder – direkte fra menulinjen." },
  no: { k: "Den raske løsningen", t: "Gi hver Mac-app sin egen volumglidebryter – rett fra menylinjen." },
  fi: { k: "Nopea ratkaisu", t: "Anna jokaiselle Mac-sovellukselle oma äänenvoimakkuuden liukusäädin – suoraan valikkoriviltä." },
  ar: { k: "الحل السريع", t: "امنح كل تطبيق Mac شريط تحكم خاصًا به في مستوى الصوت — مباشرةً من شريط القوائم." },
  he: { k: "הפתרון המהיר", t: "תנו לכל אפליקציית Mac מחוון עוצמה משלה — ישירות משורת התפריטים." },
  th: { k: "วิธีแก้ด่วน", t: "มอบแถบเลื่อนปรับระดับเสียงเฉพาะให้ทุกแอป Mac — ได้จากแถบเมนูโดยตรง" },
  ms: { k: "Penyelesaian Pantas", t: "Beri setiap apl Mac peluncur kelantangannya sendiri — terus dari bar menu." },
  vi: { k: "Giải pháp nhanh", t: "Cấp cho mỗi ứng dụng Mac thanh trượt âm lượng riêng — ngay từ thanh menu." },
  uk: { k: "Швидке рішення", t: "Дайте кожному застосунку Mac власний повзунок гучності — прямо з рядка меню." },
  ca: { k: "La solució ràpida", t: "Dona a cada app de Mac el seu propi control de volum, directament des de la barra de menús." },
  el: { k: "Η γρήγορη λύση", t: "Δώστε σε κάθε εφαρμογή Mac το δικό της ρυθμιστικό έντασης — απευθείας από τη γραμμή μενού." },
  hr: { k: "Brzo rješenje", t: "Dajte svakoj Mac aplikaciji vlastiti klizač glasnoće — izravno iz trake izbornika." },
  sk: { k: "Rýchle riešenie", t: "Dajte každej Mac aplikácii vlastný posuvník hlasitosti — priamo z panela s ponukami." },
  cs: { k: "Rychlé řešení", t: "Dejte každé Mac aplikaci vlastní posuvník hlasitosti — přímo z řádku nabídek." },
  ro: { k: "Soluția rapidă", t: "Oferă fiecărei aplicații Mac propriul cursor de volum — direct din bara de meniu." },
  hu: { k: "A gyors megoldás", t: "Adj minden Mac-alkalmazásnak saját hangerőcsúszkát – közvetlenül a menüsorból." },
  id: { k: "Solusi Cepat", t: "Beri setiap aplikasi Mac penggeser volumenya sendiri — langsung dari bilah menu." },
  hi: { k: "त्वरित समाधान", t: "हर Mac ऐप को उसका अपना वॉल्यूम स्लाइडर दें — सीधे मेन्यू बार से।" },
};

const labels: Record<string, { back: string; download: string; nextArticle: string }> = {
  en: { back: "Back to Blog", download: "Get SoundDial", nextArticle: "Next Article" },
  de: { back: "Zurück zum Blog", download: "SoundDial laden", nextArticle: "Nächster Artikel" },
  fr: { back: "Retour au Blog", download: "Obtenir SoundDial", nextArticle: "Article suivant" },
  es: { back: "Volver al Blog", download: "Obtener SoundDial", nextArticle: "Siguiente artículo" },
  pt: { back: "Voltar ao Blog", download: "Obter SoundDial", nextArticle: "Próximo artigo" },
  it: { back: "Torna al Blog", download: "Ottieni SoundDial", nextArticle: "Articolo successivo" },
  nl: { back: "Terug naar Blog", download: "Download SoundDial", nextArticle: "Volgend artikel" },
  ja: { back: "ブログに戻る", download: "SoundDialを入手", nextArticle: "次の記事" },
  ko: { back: "블로그로 돌아가기", download: "SoundDial 받기", nextArticle: "다음 기사" },
  zh: { back: "返回博客", download: "获取SoundDial", nextArticle: "下一篇文章" },
  "zh-Hant": { back: "返回部落格", download: "取得SoundDial", nextArticle: "下一篇文章" },
  ru: { back: "Назад к блогу", download: "Скачать SoundDial", nextArticle: "Следующая статья" },
  tr: { back: "Bloga Dön", download: "SoundDial İndir", nextArticle: "Sonraki makale" },
  pl: { back: "Powrót do Bloga", download: "Pobierz SoundDial", nextArticle: "Następny artykuł" },
  sv: { back: "Tillbaka till Bloggen", download: "Hämta SoundDial", nextArticle: "Nästa artikel" },
  da: { back: "Tilbage til Blog", download: "Hent SoundDial", nextArticle: "Næste artikel" },
  no: { back: "Tilbake til Bloggen", download: "Hent SoundDial", nextArticle: "Neste artikkel" },
  fi: { back: "Takaisin blogiin", download: "Lataa SoundDial", nextArticle: "Seuraava artikkeli" },
  ar: { back: "العودة إلى المدونة", download: "احصل على SoundDial", nextArticle: "المقال التالي" },
  he: { back: "חזרה לבלוג", download: "הורד SoundDial", nextArticle: "המאמר הבא" },
  th: { back: "กลับไปที่บล็อก", download: "รับ SoundDial", nextArticle: "บทความถัดไป" },
  ms: { back: "Kembali ke Blog", download: "Dapatkan SoundDial", nextArticle: "Artikel seterusnya" },
  vi: { back: "Quay lại Blog", download: "Tải SoundDial", nextArticle: "Bài viết tiếp theo" },
  uk: { back: "Назад до блогу", download: "Завантажити SoundDial", nextArticle: "Наступна стаття" },
  ca: { back: "Tornar al Blog", download: "Obtenir SoundDial", nextArticle: "Article següent" },
  el: { back: "Πίσω στο Blog", download: "Λήψη SoundDial", nextArticle: "Επόμενο άρθρο" },
  hr: { back: "Natrag na Blog", download: "Preuzmi SoundDial", nextArticle: "Sljedeći članak" },
  sk: { back: "Späť na Blog", download: "Stiahnuť SoundDial", nextArticle: "Ďalší článok" },
  cs: { back: "Zpět na Blog", download: "Stáhnout SoundDial", nextArticle: "Další článek" },
  ro: { back: "Înapoi la Blog", download: "Obține SoundDial", nextArticle: "Articolul următor" },
  hu: { back: "Vissza a Bloghoz", download: "SoundDial letöltése", nextArticle: "Következő cikk" },
  id: { back: "Kembali ke Blog", download: "Dapatkan SoundDial", nextArticle: "Artikel berikutnya" },
  hi: { back: "ब्लॉग पर वापस", download: "SoundDial प्राप्त करें", nextArticle: "अगला लेख" },
};

const VALID_LOCALES = LOCALES.map((l) => l.code);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(locale as Locale, slug);

  if (!article) return { title: "Article Not Found" };

  const alternates: Record<string, string> = {};
  for (const loc of LOCALES) {
    const locArticle = getLocaleArticle(loc.code, slug);
    if (locArticle) {
      alternates[loc.code] = `/sounddial/blog/${loc.code}/${slug}`;
    }
  }

  return {
    title: `${article.title} — SoundDial Blog`,
    description: article.description,
    openGraph: { title: article.title, description: article.description, type: "article", publishedTime: article.date },
    alternates: { canonical: `/sounddial/blog/${locale}/${slug}`, languages: alternates },
  };
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  const slugs = getAllSlugs();

  for (const loc of LOCALES) {
    for (const slug of slugs) {
      const article = getLocaleArticle(loc.code, slug);
      if (article) {
        params.push({ locale: loc.code, slug });
      }
    }
  }

  return params;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!VALID_LOCALES.includes(locale as Locale)) notFound();

  const article = getArticle(locale as Locale, slug);
  if (!article) notFound();

  const l = labels[locale] ?? labels.en;
  const isRtl = locale === "ar" || locale === "he";

  const availableLocales = LOCALES.filter((loc) => getLocaleArticle(loc.code, slug));

  const allArticles = getAllArticles(locale as Locale);
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);

  // Point every App Store link (CTA, in-text mentions, wrapped images) at this
  // locale's regional storefront. Rewriting at render time keeps the stored
  // article HTML and URLs untouched — only the outbound href changes.
  const cc = STORE_CC[locale] ?? "us";
  const storeUrl = `https://apps.apple.com/${cc}/app/sounddial/id6772792641`;
  const content = article.content.replace(
    /https:\/\/apps\.apple\.com\/(?:[a-z]{2}(?:-[A-Za-z]+)?\/)?app\/(?:sounddial\/)?id6772792641/g,
    storeUrl,
  );
  const q = QUICK[locale] ?? QUICK.en;

  // Up to 3 related guides for internal linking.
  const related = [1, 2, 3]
    .map((k) => allArticles[(currentIndex + k) % allArticles.length])
    .filter((a, i, arr) => a && a.slug !== slug && arr.findIndex((x) => x.slug === a.slug) === i);
  const nextArticle = related[0];

  return (
    <main className="min-h-screen bg-[#050506] text-white" dir={isRtl ? "rtl" : undefined}>
      <div className="px-6 pt-36 max-w-4xl mx-auto">
        <Link
          href={`/sounddial/blog/${locale}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition group"
        >
          <svg
            className={`w-4 h-4 transition group-hover:-translate-x-1 ${isRtl ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {l.back}
        </Link>
      </div>

      {availableLocales.length > 1 && (
        <div className="px-6 pt-6 max-w-4xl mx-auto">
          <nav className="flex flex-wrap gap-2" dir="ltr">
            {availableLocales.map((loc) => (
              <Link
                key={loc.code}
                href={`/sounddial/blog/${loc.code}/${slug}`}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  loc.code === locale
                    ? "bg-[#d4ad5e] text-black"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {loc.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <header className="px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#d4ad5e]">
          <time>{article.date}</time>
          {article.readTime && (
            <>
              <span className="text-neutral-700">·</span>
              <span className="text-neutral-500">{article.readTime}</span>
            </>
          )}
        </div>
        <h1 className="font-serif mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
          {article.title}
        </h1>
        <p className="mt-6 text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
          {article.description}
        </p>
      </header>

      <div className="px-6 max-w-4xl mx-auto mb-2">
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-[#d4ad5e]/30 bg-[#d4ad5e]/[0.06] px-5 py-4 sm:px-6 transition-colors hover:border-[#d4ad5e]/60 hover:bg-[#d4ad5e]/[0.1]"
        >
          <span className="text-2xl" aria-hidden>⚡</span>
          <span className="flex-1">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#d4ad5e]">{q.k}</span>
            <span className="block mt-0.5 text-[15px] text-neutral-200 leading-snug">{q.t}</span>
          </span>
          <span className="hidden shrink-0 items-center rounded-full bg-[#d4ad5e] px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition group-hover:bg-[#e0bd72] sm:inline-flex">
            {l.download}
          </span>
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-neutral-800" /></div>

      <article className="px-6 py-12 sm:py-16 max-w-4xl mx-auto">
        <div
          className={[
            "max-w-3xl",
            "text-[17px] leading-[1.8]",
            "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-tight [&_h2]:tracking-tight",
            "[&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:leading-snug",
            "[&_p]:text-neutral-200 [&_p]:mb-5",
            "[&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:text-neutral-200 [&_ul]:list-disc [&_ul]:pl-5",
            "[&_ol]:space-y-2 [&_ol]:mb-6 [&_ol]:text-neutral-200 [&_ol]:list-decimal [&_ol]:pl-5",
            "[&_li]:pl-1 [&_li]:leading-relaxed",
            "[&_a]:text-[#d4ad5e] [&_a]:hover:text-[#e0bd72] [&_a]:underline [&_a]:underline-offset-2",
            "[&_strong]:text-white [&_strong]:font-semibold",
            "[&_em]:text-neutral-100 [&_em]:italic",
            "[&_code]:text-[0.9em] [&_code]:bg-white/[0.08] [&_code]:text-white [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-[#d4ad5e] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-neutral-300 [&_blockquote]:my-6",
            "[&_table]:w-full [&_table]:border-collapse [&_table]:mb-6 [&_table]:text-sm",
            "[&_th]:border [&_th]:border-neutral-700 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-white [&_th]:bg-neutral-800/80 [&_th]:font-semibold",
            "[&_td]:border [&_td]:border-neutral-700 [&_td]:px-4 [&_td]:py-3 [&_td]:text-neutral-200",
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>

      {related.length > 0 && (
        <section className="px-6 pb-8 max-w-4xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">{l.nextArticle}</span>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/sounddial/blog/${locale}/${a.slug}`}
                className="group block rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-[#d4ad5e]/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-[#d4ad5e]/5"
              >
                <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-[#d4ad5e] transition-colors">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-3">{a.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#d4ad5e]/15 to-[#d4ad5e]/5 border border-[#d4ad5e]/25 px-8 py-12 sm:px-14 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">SoundDial</h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-md mx-auto">
            Per-app volume control for macOS. €14.99 one-time purchase.
          </p>
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#d4ad5e] text-black px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-[#e0bd72] shadow-lg shadow-[#d4ad5e]/30"
          >
            {l.download}
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-4xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href={`/sounddial/blog/${locale}`} className="hover:text-white transition">Blog</Link>
          <Link href="/sounddial/privacy" className="hover:text-white transition">Privacy</Link>
          <Link href="/sounddial/terms" className="hover:text-white transition">Terms</Link>
        </nav>
      </footer>
    </main>
  );
}
