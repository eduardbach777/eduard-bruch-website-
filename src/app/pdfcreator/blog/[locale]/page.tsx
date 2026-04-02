import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, LOCALES } from "../_data";
import type { Locale } from "../_data";
import type { Metadata } from "next";

const labels: Record<
  string,
  {
    tagline: string;
    heading: string;
    subtitle: string;
    readMore: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  }
> = {
  en: {
    tagline: "PDF Creator — Scanner & OCR",
    heading: "PDF Guides &\nScanning Tips",
    subtitle:
      "How to scan documents, convert images to PDF, merge files, compress PDFs, and get the most out of your mobile document scanner.",
    readMore: "Read more",
    ctaTitle: "Scan, Convert & Edit PDFs",
    ctaDesc:
      "29 PDF tools in one app. Scan documents with OCR, merge, split, compress, watermark, and more.",
    ctaButton: "Download PDF Creator Free",
  },
  de: {
    tagline: "PDF Creator — Scanner & OCR",
    heading: "PDF-Ratgeber &\nScan-Tipps",
    subtitle:
      "Dokumente scannen, Bilder in PDF umwandeln, Dateien zusammenfügen, PDFs komprimieren und das Beste aus Ihrem mobilen Dokumentenscanner herausholen.",
    readMore: "Weiterlesen",
    ctaTitle: "PDFs Scannen, Konvertieren & Bearbeiten",
    ctaDesc:
      "29 PDF-Werkzeuge in einer App. Dokumente mit OCR scannen, zusammenführen, teilen, komprimieren und mehr.",
    ctaButton: "PDF Creator Kostenlos Laden",
  },
  es: {
    tagline: "PDF Creator — Escáner y OCR",
    heading: "Guías PDF y\nConsejos de Escaneo",
    subtitle:
      "Cómo escanear documentos, convertir imágenes a PDF, fusionar archivos, comprimir PDFs y aprovechar al máximo tu escáner móvil.",
    readMore: "Leer más",
    ctaTitle: "Escanea, Convierte y Edita PDFs",
    ctaDesc:
      "29 herramientas PDF en una app. Escanea documentos con OCR, fusiona, divide, comprime y más.",
    ctaButton: "Descargar PDF Creator Gratis",
  },
  fr: {
    tagline: "PDF Creator — Scanner & OCR",
    heading: "Guides PDF &\nAstuces de Numérisation",
    subtitle:
      "Comment numériser des documents, convertir des images en PDF, fusionner des fichiers, compresser des PDFs et tirer le meilleur parti de votre scanner mobile.",
    readMore: "Lire la suite",
    ctaTitle: "Numérisez, Convertissez & Éditez vos PDFs",
    ctaDesc:
      "29 outils PDF en une seule app. Numérisez avec OCR, fusionnez, divisez, compressez et plus.",
    ctaButton: "Télécharger PDF Creator Gratuit",
  },
  pt: {
    tagline: "PDF Creator — Scanner & OCR",
    heading: "Guias PDF &\nDicas de Digitalização",
    subtitle:
      "Como digitalizar documentos, converter imagens em PDF, mesclar arquivos, compactar PDFs e aproveitar ao máximo seu scanner móvel.",
    readMore: "Leia mais",
    ctaTitle: "Digitalize, Converta e Edite PDFs",
    ctaDesc:
      "29 ferramentas PDF em um app. Digitalize com OCR, mescle, divida, compacte e mais.",
    ctaButton: "Baixar PDF Creator Grátis",
  },
  it: {
    tagline: "PDF Creator — Scanner & OCR",
    heading: "Guide PDF &\nConsigli di Scansione",
    subtitle:
      "Come scansionare documenti, convertire immagini in PDF, unire file, comprimere PDF e ottenere il massimo dal tuo scanner mobile.",
    readMore: "Leggi di più",
    ctaTitle: "Scansiona, Converti e Modifica PDF",
    ctaDesc:
      "29 strumenti PDF in una app. Scansiona con OCR, unisci, dividi, comprimi e altro.",
    ctaButton: "Scarica PDF Creator Gratis",
  },
  nl: {
    tagline: "PDF Creator — Scanner & OCR",
    heading: "PDF-Gidsen &\nScantips",
    subtitle:
      "Documenten scannen, afbeeldingen naar PDF converteren, bestanden samenvoegen, PDF's comprimeren en het meeste uit uw mobiele scanner halen.",
    readMore: "Lees meer",
    ctaTitle: "Scan, Converteer & Bewerk PDF's",
    ctaDesc:
      "29 PDF-tools in één app. Scan documenten met OCR, voeg samen, splits, comprimeer en meer.",
    ctaButton: "Download PDF Creator Gratis",
  },
  ja: {
    tagline: "PDF Creator — スキャナー & OCR",
    heading: "PDFガイド &\nスキャンのコツ",
    subtitle:
      "ドキュメントのスキャン、画像のPDF変換、ファイルの結合、PDFの圧縮方法、モバイルスキャナーの活用法をご紹介。",
    readMore: "続きを読む",
    ctaTitle: "PDFをスキャン、変換、編集",
    ctaDesc:
      "29のPDFツールを1つのアプリに。OCRスキャン、結合、分割、圧縮など。",
    ctaButton: "PDF Creatorを無料でダウンロード",
  },
  ko: {
    tagline: "PDF Creator — 스캐너 & OCR",
    heading: "PDF 가이드 &\n스캔 팁",
    subtitle:
      "문서 스캔, 이미지를 PDF로 변환, 파일 병합, PDF 압축 방법과 모바일 스캐너 활용법을 알려드립니다.",
    readMore: "더 읽기",
    ctaTitle: "PDF 스캔, 변환 및 편집",
    ctaDesc:
      "29가지 PDF 도구를 하나의 앱에. OCR 스캔, 병합, 분할, 압축 등.",
    ctaButton: "PDF Creator 무료 다운로드",
  },
  zh: {
    tagline: "PDF Creator — 扫描仪 & OCR",
    heading: "PDF指南 &\n扫描技巧",
    subtitle:
      "如何扫描文档、将图片转换为PDF、合并文件、压缩PDF，以及充分利用您的移动文档扫描仪。",
    readMore: "阅读更多",
    ctaTitle: "扫描、转换和编辑PDF",
    ctaDesc:
      "29种PDF工具集于一个应用。OCR扫描、合并、拆分、压缩等功能。",
    ctaButton: "免费下载PDF Creator",
  },
  ar: {
    tagline: "PDF Creator — ماسح ضوئي و OCR",
    heading: "أدلة PDF و\nنصائح المسح الضوئي",
    subtitle:
      "كيفية مسح المستندات ضوئياً، تحويل الصور إلى PDF، دمج الملفات، ضغط ملفات PDF، والاستفادة القصوى من الماسح الضوئي المحمول.",
    readMore: "اقرأ المزيد",
    ctaTitle: "امسح وحوّل وحرّر ملفات PDF",
    ctaDesc:
      "29 أداة PDF في تطبيق واحد. مسح ضوئي مع OCR، دمج، تقسيم، ضغط والمزيد.",
    ctaButton: "حمّل PDF Creator مجاناً",
  },
  hi: {
    tagline: "PDF Creator — स्कैनर और OCR",
    heading: "PDF गाइड और\nस्कैनिंग टिप्स",
    subtitle:
      "दस्तावेज़ स्कैन करें, इमेज को PDF में बदलें, फ़ाइलें मर्ज करें, PDF कंप्रेस करें और अपने मोबाइल स्कैनर का अधिकतम लाभ उठाएं।",
    readMore: "और पढ़ें",
    ctaTitle: "PDF स्कैन, कन्वर्ट और एडिट करें",
    ctaDesc:
      "एक ऐप में 29 PDF टूल। OCR स्कैन, मर्ज, स्प्लिट, कंप्रेस और भी बहुत कुछ।",
    ctaButton: "PDF Creator मुफ्त डाउनलोड करें",
  },
  tr: {
    tagline: "PDF Creator — Tarayıcı & OCR",
    heading: "PDF Rehberleri &\nTarama İpuçları",
    subtitle:
      "Belge tarama, resimleri PDF'e dönüştürme, dosya birleştirme, PDF sıkıştırma ve mobil tarayıcınızdan en iyi şekilde yararlanma.",
    readMore: "Devamını oku",
    ctaTitle: "PDF Tara, Dönüştür ve Düzenle",
    ctaDesc:
      "Tek uygulamada 29 PDF aracı. OCR tarama, birleştirme, bölme, sıkıştırma ve daha fazlası.",
    ctaButton: "PDF Creator'ı Ücretsiz İndir",
  },
  ru: {
    tagline: "PDF Creator — Сканер и OCR",
    heading: "Руководства PDF и\nСоветы по Сканированию",
    subtitle:
      "Как сканировать документы, конвертировать изображения в PDF, объединять файлы, сжимать PDF и максимально использовать мобильный сканер.",
    readMore: "Читать далее",
    ctaTitle: "Сканируйте, Конвертируйте и Редактируйте PDF",
    ctaDesc:
      "29 PDF-инструментов в одном приложении. Сканирование с OCR, объединение, разделение, сжатие и многое другое.",
    ctaButton: "Скачать PDF Creator Бесплатно",
  },
  pl: {
    tagline: "PDF Creator — Skaner i OCR",
    heading: "Poradniki PDF i\nWskazówki Skanowania",
    subtitle:
      "Jak skanować dokumenty, konwertować obrazy do PDF, łączyć pliki, kompresować PDF i w pełni wykorzystać mobilny skaner.",
    readMore: "Czytaj więcej",
    ctaTitle: "Skanuj, Konwertuj i Edytuj PDF",
    ctaDesc:
      "29 narzędzi PDF w jednej aplikacji. Skanowanie z OCR, łączenie, dzielenie, kompresja i więcej.",
    ctaButton: "Pobierz PDF Creator Za Darmo",
  },
  sv: {
    tagline: "PDF Creator — Skanner & OCR",
    heading: "PDF-Guider &\nSkanntips",
    subtitle:
      "Skanna dokument, konvertera bilder till PDF, slå ihop filer, komprimera PDF:er och få ut det mesta av din mobila skanner.",
    readMore: "Läs mer",
    ctaTitle: "Skanna, Konvertera & Redigera PDF",
    ctaDesc:
      "29 PDF-verktyg i en app. Skanna med OCR, slå ihop, dela, komprimera och mer.",
    ctaButton: "Ladda ner PDF Creator Gratis",
  },
};

const VALID_LOCALES = LOCALES.map((l) => l.code);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = labels[locale] ?? labels.en;
  return {
    title: `${l.tagline} Blog — ${l.heading.replace("\n", " ")}`,
    description: l.subtitle,
  };
}

export function generateStaticParams() {
  return LOCALES.map((l) => ({ locale: l.code }));
}

export default async function LocaleBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!VALID_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  let articles = getAllArticles(locale as Locale);
  if (articles.length === 0) {
    articles = getAllArticles("en");
  }

  const l = labels[locale] ?? labels.en;
  const isRtl = locale === "ar";

  return (
    <main
      className="min-h-screen bg-neutral-950 text-white"
      dir={isRtl ? "rtl" : undefined}
    >
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-400 mb-4">
          {l.tagline}
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl whitespace-pre-line">
          {l.heading}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
          {l.subtitle}
        </p>

        {/* Language Switcher */}
        <nav className="mt-10 flex flex-wrap gap-2" dir="ltr">
          {LOCALES.map((loc) => (
            <Link
              key={loc.code}
              href={`/pdfcreator/blog/${loc.code}`}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                loc.code === locale
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {loc.label}
            </Link>
          ))}
        </nav>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-neutral-800" />
      </div>

      {/* Article Grid */}
      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/pdfcreator/blog/${locale}/${article.slug}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all hover:border-rose-500/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-rose-500/5 flex flex-col"
            >
              <time className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                {article.date}
              </time>
              <h2 className="mt-3 text-xl font-bold text-white leading-snug group-hover:text-rose-400 transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed flex-1">
                {article.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-rose-400 group-hover:gap-2 transition-all">
                {l.readMore}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto text-center">
        <div className="rounded-3xl bg-gradient-to-br from-rose-600/20 to-rose-900/20 border border-rose-500/20 px-8 py-14 sm:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {l.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
            {l.ctaDesc}
          </p>
          <a
            href="https://apps.apple.com/app/pdf-creator-scanner-ocr/id6743597940"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-rose-500 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-rose-400 shadow-lg shadow-rose-500/30"
          >
            {l.ctaButton}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav
          className="flex items-center justify-center gap-6 text-sm text-neutral-500"
          dir="ltr"
        >
          <Link href="/pdfcreator/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/pdfcreator/terms" className="hover:text-white transition">
            Terms
          </Link>
          <span className="text-rose-400 font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
