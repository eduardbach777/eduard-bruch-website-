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
    tagline: "Stash — Secret File Vault",
    heading: "Privacy Guides &\nSecurity Tips",
    subtitle:
      "How to hide photos, protect files, and keep your digital life private. Guides for calculator vault apps, decoy passwords, break-in alerts, and more.",
    readMore: "Read more",
    ctaTitle: "Hide Photos, Videos & Files",
    ctaDesc:
      "AES-256 encryption. Calculator disguise. Decoy vault. Intruder detection. Everything stays on your device.",
    ctaButton: "Download Stash Free",
  },
  de: {
    tagline: "Stash — Geheimer Foto Tresor",
    heading: "Datenschutz-Tipps &\nSicherheitsratgeber",
    subtitle:
      "Fotos verstecken, Dateien schützen, digitale Privatsphäre wahren. Ratgeber zu Taschenrechner-Tresoren, Tarn-Passwörtern, Einbruchswarnungen und mehr.",
    readMore: "Weiterlesen",
    ctaTitle: "Fotos, Videos & Dateien Verstecken",
    ctaDesc:
      "AES-256-Verschlüsselung. Taschenrechner-Tarnung. Tarn-Tresor. Einbruchserkennung. Alles bleibt auf deinem Gerät.",
    ctaButton: "Stash Kostenlos Laden",
  },
  es: {
    tagline: "Stash — Bóveda Secreta de Archivos",
    heading: "Guías de Privacidad &\nConsejos de Seguridad",
    subtitle:
      "Cómo ocultar fotos, proteger archivos y mantener tu vida digital privada. Guías sobre apps de calculadora secreta, contraseñas señuelo, alertas de intrusos y más.",
    readMore: "Leer más",
    ctaTitle: "Oculta Fotos, Videos y Archivos",
    ctaDesc:
      "Cifrado AES-256. Disfraz de calculadora. Bóveda señuelo. Detección de intrusos. Todo permanece en tu dispositivo.",
    ctaButton: "Descargar Stash Gratis",
  },
  ar: {
    tagline: "Stash — خزنة الملفات السرية",
    heading: "أدلة الخصوصية و\nنصائح الأمان",
    subtitle:
      "كيفية إخفاء الصور وحماية الملفات والحفاظ على خصوصية حياتك الرقمية. أدلة حول تطبيقات الآلة الحاسبة السرية وكلمات المرور الوهمية وتنبيهات الاختراق والمزيد.",
    readMore: "اقرأ المزيد",
    ctaTitle: "إخفاء الصور والفيديوهات والملفات",
    ctaDesc:
      "تشفير AES-256. تمويه الآلة الحاسبة. خزنة وهمية. كشف المتطفلين. كل شيء يبقى على جهازك.",
    ctaButton: "تحميل Stash مجاناً",
  },
  fr: {
    tagline: "Stash — Coffre-Fort Secret",
    heading: "Guides de\nConfidentialité",
    subtitle:
      "Comment cacher des photos, protéger des fichiers et garder votre vie numérique privée. Guides sur les apps calculatrice coffre-fort, mots de passe leurres, alertes d'intrusion et plus.",
    readMore: "Lire la suite",
    ctaTitle: "Cachez Photos, Vidéos & Fichiers",
    ctaDesc:
      "Chiffrement AES-256. Déguisement calculatrice. Coffre leurre. Détection d'intrus. Tout reste sur votre appareil.",
    ctaButton: "Télécharger Stash Gratuit",
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
    <main className="min-h-screen bg-neutral-950 text-white" dir={isRtl ? "rtl" : undefined}>
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
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
              href={`/vault/blog/${loc.code}`}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                loc.code === locale
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
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
              href={`/vault/blog/${locale}/${article.slug}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all hover:border-indigo-500/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col"
            >
              <time className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                {article.date}
              </time>
              <h2 className="mt-3 text-xl font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed flex-1">
                {article.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 group-hover:gap-2 transition-all">
                {l.readMore}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto text-center">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 border border-indigo-500/20 px-8 py-14 sm:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {l.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
            {l.ctaDesc}
          </p>
          <a
            href="https://apps.apple.com/app/id6759871587"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-indigo-500 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-indigo-400 shadow-lg shadow-indigo-500/30"
          >
            {l.ctaButton}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href="/vault/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/vault/terms" className="hover:text-white transition">
            Terms
          </Link>
          <span className="text-indigo-400 font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
