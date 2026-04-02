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
    tagline: "Pulse — System Monitor",
    heading: "Mac Performance\nGuides",
    subtitle:
      "How to monitor CPU temperature, memory pressure, network speed, battery health, and diagnose performance issues on your Mac.",
    readMore: "Read more",
    ctaTitle: "Take Control of Your Mac's Performance",
    ctaDesc:
      "CPU, memory, network, battery, temperature, disk, GPU, and fan monitoring — all from your menu bar.",
    ctaButton: "Download Pulse",
  },
  de: {
    tagline: "Pulse — Systemmonitor",
    heading: "Mac Performance\nRatgeber",
    subtitle:
      "So überwachen Sie CPU-Temperatur, Speicherdruck, Netzwerkgeschwindigkeit, Akkugesundheit und diagnostizieren Leistungsprobleme auf Ihrem Mac.",
    readMore: "Weiterlesen",
    ctaTitle: "Übernehmen Sie die Kontrolle über die Leistung Ihres Macs",
    ctaDesc:
      "CPU, Speicher, Netzwerk, Akku, Temperatur, Festplatte, GPU und Lüfter — alles in Ihrer Menüleiste.",
    ctaButton: "Pulse Laden",
  },
  fr: {
    tagline: "Pulse — Moniteur Système",
    heading: "Guides Performance\nMac",
    subtitle:
      "Comment surveiller la température CPU, la pression mémoire, la vitesse réseau, la santé de la batterie et diagnostiquer les problèmes de performances sur votre Mac.",
    readMore: "Lire la suite",
    ctaTitle: "Prenez le contrôle des performances de votre Mac",
    ctaDesc:
      "CPU, mémoire, réseau, batterie, température, disque, GPU et ventilateurs — tout depuis votre barre de menus.",
    ctaButton: "Télécharger Pulse",
  },
  es: {
    tagline: "Pulse — Monitor del Sistema",
    heading: "Guías de Rendimiento\nMac",
    subtitle:
      "Cómo monitorear la temperatura de CPU, presión de memoria, velocidad de red, salud de batería y diagnosticar problemas de rendimiento en tu Mac.",
    readMore: "Leer más",
    ctaTitle: "Toma el control del rendimiento de tu Mac",
    ctaDesc:
      "CPU, memoria, red, batería, temperatura, disco, GPU y ventiladores — todo desde tu barra de menú.",
    ctaButton: "Descargar Pulse",
  },
  pt: { tagline: "Pulse — Monitor do Sistema", heading: "Guias de Performance\nMac", subtitle: "Como monitorar temperatura da CPU, pressão de memória, velocidade de rede e saúde da bateria no seu Mac.", readMore: "Ler mais", ctaTitle: "Assuma o controle do desempenho do seu Mac", ctaDesc: "CPU, memória, rede, bateria, temperatura, disco, GPU e ventoinhas — tudo na barra de menus.", ctaButton: "Baixar Pulse" },
  it: { tagline: "Pulse — Monitor di Sistema", heading: "Guide Prestazioni\nMac", subtitle: "Come monitorare temperatura CPU, pressione della memoria, velocità di rete e salute della batteria sul tuo Mac.", readMore: "Leggi di più", ctaTitle: "Prendi il controllo delle prestazioni del tuo Mac", ctaDesc: "CPU, memoria, rete, batteria, temperatura, disco, GPU e ventole — tutto dalla barra dei menu.", ctaButton: "Scarica Pulse" },
  nl: { tagline: "Pulse — Systeemmonitor", heading: "Mac Prestatie\nGidsen", subtitle: "Hoe je CPU-temperatuur, geheugendruk, netwerksnelheid en batterijgezondheid op je Mac monitort.", readMore: "Lees meer", ctaTitle: "Neem controle over de prestaties van je Mac", ctaDesc: "CPU, geheugen, netwerk, batterij, temperatuur, schijf, GPU en ventilatoren — alles in je menubalk.", ctaButton: "Download Pulse" },
  ja: { tagline: "Pulse — システムモニター", heading: "Macパフォーマンス\nガイド", subtitle: "MacのCPU温度、メモリプレッシャー、ネットワーク速度、バッテリー状態の監視方法とパフォーマンス問題の診断。", readMore: "続きを読む", ctaTitle: "Macのパフォーマンスを管理しよう", ctaDesc: "CPU、メモリ、ネットワーク、バッテリー、温度、ディスク、GPU、ファン — すべてメニューバーから。", ctaButton: "Pulseをダウンロード" },
  ko: { tagline: "Pulse — 시스템 모니터", heading: "Mac 성능\n가이드", subtitle: "Mac의 CPU 온도, 메모리 압력, 네트워크 속도, 배터리 상태를 모니터링하고 성능 문제를 진단하는 방법.", readMore: "자세히 읽기", ctaTitle: "Mac의 성능을 관리하세요", ctaDesc: "CPU, 메모리, 네트워크, 배터리, 온도, 디스크, GPU, 팬 — 모두 메뉴바에서.", ctaButton: "Pulse 다운로드" },
  zh: { tagline: "Pulse — 系统监控器", heading: "Mac性能\n指南", subtitle: "如何监控Mac的CPU温度、内存压力、网络速度、电池健康并诊断性能问题。", readMore: "阅读更多", ctaTitle: "掌控Mac的性能", ctaDesc: "CPU、内存、网络、电池、温度、磁盘、GPU和风扇 — 全部在菜单栏中。", ctaButton: "下载Pulse" },
  ar: { tagline: "Pulse — مراقب النظام", heading: "أدلة أداء\nMac", subtitle: "كيفية مراقبة درجة حرارة المعالج وضغط الذاكرة وسرعة الشبكة وصحة البطارية وتشخيص مشاكل الأداء على Mac.", readMore: "اقرأ المزيد", ctaTitle: "تحكم في أداء Mac الخاص بك", ctaDesc: "المعالج والذاكرة والشبكة والبطارية والحرارة والقرص والرسومات والمراوح — كل ذلك من شريط القوائم.", ctaButton: "تحميل Pulse" },
  tr: { tagline: "Pulse — Sistem Monitörü", heading: "Mac Performans\nRehberleri", subtitle: "Mac'inizde CPU sıcaklığı, bellek basıncı, ağ hızı, pil sağlığı nasıl izlenir ve performans sorunları nasıl teşhis edilir.", readMore: "Devamını oku", ctaTitle: "Mac'inizin performansını kontrol altına alın", ctaDesc: "CPU, bellek, ağ, pil, sıcaklık, disk, GPU ve fan — hepsi menü çubuğunuzda.", ctaButton: "Pulse İndir" },
  ru: { tagline: "Pulse — Системный Монитор", heading: "Руководства по\nпроизводительности Mac", subtitle: "Как мониторить температуру CPU, давление памяти, скорость сети, состояние батареи и диагностировать проблемы производительности Mac.", readMore: "Читать далее", ctaTitle: "Возьмите производительность Mac под контроль", ctaDesc: "CPU, память, сеть, батарея, температура, диск, GPU и вентиляторы — всё в строке меню.", ctaButton: "Скачать Pulse" },
  pl: { tagline: "Pulse — Monitor Systemu", heading: "Poradniki wydajności\nMac", subtitle: "Jak monitorować temperaturę CPU, ciśnienie pamięci, prędkość sieci, stan baterii i diagnozować problemy z wydajnością na Macu.", readMore: "Czytaj dalej", ctaTitle: "Przejmij kontrolę nad wydajnością Maca", ctaDesc: "CPU, pamięć, sieć, bateria, temperatura, dysk, GPU i wentylatory — wszystko na pasku menu.", ctaButton: "Pobierz Pulse" },
  sv: { tagline: "Pulse — Systemövervakare", heading: "Mac Prestanda\nGuider", subtitle: "Hur du övervakar CPU-temperatur, minnestryck, nätverkshastighet, batterihälsa och diagnosticerar prestandaproblem på din Mac.", readMore: "Läs mer", ctaTitle: "Ta kontroll över din Macs prestanda", ctaDesc: "CPU, minne, nätverk, batteri, temperatur, disk, GPU och fläktar — allt i din menyrad.", ctaButton: "Ladda ner Pulse" },
};

const VALID_LOCALES = LOCALES.map((l) => l.code);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = labels[locale] ?? labels.en;

  const alternates: Record<string, string> = {};
  for (const loc of LOCALES) {
    alternates[loc.code] = `/pulse/blog/${loc.code}`;
  }

  return {
    title: `${l.tagline} Blog — ${l.heading.replace("\n", " ")}`,
    description: l.subtitle,
    alternates: {
      languages: alternates,
    },
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
              href={`/pulse/blog/${loc.code}`}
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
              href={`/pulse/blog/${locale}/${article.slug}`}
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
            href="https://apps.apple.com/app/pulse-system-monitor/id6744194761"
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
          <Link href="/pulse/support" className="hover:text-white transition">
            Support
          </Link>
          <Link href="/pulse/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/pulse/terms" className="hover:text-white transition">
            Terms
          </Link>
          <span className="text-indigo-400 font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
