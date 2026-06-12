import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, LOCALES } from "../_data";
import type { Locale } from "../_data";
import type { Metadata } from "next";

const APP_STORE_URL = "https://apps.apple.com/app/sounddial/id6772792641";

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
  en: { tagline: "SoundDial — Per-App Volume Mixer", heading: "Control Every\nApp's Volume", subtitle: "Independent volume sliders, profiles, auto-ducking, and per-app mute — the volume mixer macOS should have built in.", readMore: "Read more", ctaTitle: "SoundDial — Per-App Volume Mixer", ctaDesc: "Independent volume sliders for every app. Profiles, auto-ducking, and per-app mute. €14.99 one-time, no subscription.", ctaButton: "Get SoundDial" },
  de: { tagline: "SoundDial — Lautstärkeregler pro App", heading: "Jede App\nseparat steuern", subtitle: "Unabhängige Lautstärkeregler, Profile, Auto-Ducking und App-Stummschaltung — der Lautstärkemixer, den macOS haben sollte.", readMore: "Weiterlesen", ctaTitle: "SoundDial — Lautstärkeregler pro App", ctaDesc: "Unabhängige Lautstärkeregler für jede App. Profile, Auto-Ducking und Stummschaltung. 14,99 € einmalig, kein Abo.", ctaButton: "SoundDial laden" },
  fr: { tagline: "SoundDial — Mixeur de volume par app", heading: "Contrôlez le volume\nde chaque app", subtitle: "Curseurs de volume indépendants, profils, ducking automatique et sourdine par app — le mixeur que macOS devrait avoir.", readMore: "Lire la suite", ctaTitle: "SoundDial — Mixeur de volume par app", ctaDesc: "Curseurs de volume indépendants pour chaque app. Profils, ducking auto et sourdine. 14,99 € unique, sans abonnement.", ctaButton: "Obtenir SoundDial" },
  es: { tagline: "SoundDial — Mezclador de volumen por app", heading: "Controla el volumen\nde cada app", subtitle: "Controles de volumen independientes, perfiles, ducking automático y silencio por app — el mezclador que macOS debería tener.", readMore: "Leer más", ctaTitle: "SoundDial — Mezclador de volumen por app", ctaDesc: "Controles de volumen independientes para cada app. Perfiles, ducking automático y silencio. 14,99 € único, sin suscripción.", ctaButton: "Obtener SoundDial" },
  pt: { tagline: "SoundDial — Mixer de volume por app", heading: "Controle o volume\nde cada app", subtitle: "Controles de volume independentes, perfis, ducking automático e mudo por app — o mixer que o macOS deveria ter.", readMore: "Ler mais", ctaTitle: "SoundDial — Mixer de volume por app", ctaDesc: "Controles de volume independentes para cada app. Perfis, ducking automático e mudo. €14,99 único, sem assinatura.", ctaButton: "Obter SoundDial" },
  it: { tagline: "SoundDial — Mixer volume per app", heading: "Controlla il volume\ndi ogni app", subtitle: "Cursori volume indipendenti, profili, ducking automatico e muto per app — il mixer che macOS dovrebbe avere.", readMore: "Leggi di più", ctaTitle: "SoundDial — Mixer volume per app", ctaDesc: "Cursori volume indipendenti per ogni app. Profili, ducking automatico e muto. €14,99 una tantum, nessun abbonamento.", ctaButton: "Ottieni SoundDial" },
  nl: { tagline: "SoundDial — Per-app volumemixer", heading: "Regel het volume\nvan elke app", subtitle: "Onafhankelijke volumeschuifregelaars, profielen, auto-ducking en per-app dempen — de volumemixer die macOS zou moeten hebben.", readMore: "Lees meer", ctaTitle: "SoundDial — Per-app volumemixer", ctaDesc: "Onafhankelijke volumeschuifregelaars voor elke app. Profielen, auto-ducking en dempen. €14,99 eenmalig, geen abonnement.", ctaButton: "Download SoundDial" },
  ja: { tagline: "SoundDial — アプリ別ボリュームミキサー", heading: "すべてのアプリの\n音量を個別制御", subtitle: "独立した音量スライダー、プロファイル、自動ダッキング、アプリ別ミュート — macOSに本来あるべきボリュームミキサー。", readMore: "続きを読む", ctaTitle: "SoundDial — アプリ別ボリュームミキサー", ctaDesc: "すべてのアプリに独立した音量スライダー。プロファイル、自動ダッキング、ミュート。€14.99 買い切り。", ctaButton: "SoundDialを入手" },
  ko: { tagline: "SoundDial — 앱별 볼륨 믹서", heading: "모든 앱의\n볼륨을 개별 제어", subtitle: "독립적인 볼륨 슬라이더, 프로필, 자동 더킹, 앱별 음소거 — macOS에 있어야 할 볼륨 믹서.", readMore: "자세히 읽기", ctaTitle: "SoundDial — 앱별 볼륨 믹서", ctaDesc: "모든 앱에 독립적인 볼륨 슬라이더. 프로필, 자동 더킹, 음소거. €14.99 일회 구매.", ctaButton: "SoundDial 받기" },
  zh: { tagline: "SoundDial — 应用独立音量混音器", heading: "独立控制\n每个应用的音量", subtitle: "独立音量滑块、配置文件、自动闪避和应用静音 — macOS本应内置的音量混音器。", readMore: "阅读更多", ctaTitle: "SoundDial — 应用独立音量混音器", ctaDesc: "为每个应用提供独立音量滑块。配置文件、自动闪避和静音。€14.99 一次购买。", ctaButton: "获取SoundDial" },
  "zh-Hant": { tagline: "SoundDial — 應用程式獨立音量混音器", heading: "獨立控制\n每個應用程式的音量", subtitle: "獨立音量滑桿、設定檔、自動閃避和應用程式靜音 — macOS本應內建的音量混音器。", readMore: "閱讀更多", ctaTitle: "SoundDial — 應用程式獨立音量混音器", ctaDesc: "為每個應用程式提供獨立音量滑桿。設定檔、自動閃避和靜音。€14.99 一次購買。", ctaButton: "取得SoundDial" },
  ru: { tagline: "SoundDial — Микшер громкости", heading: "Управляйте громкостью\nкаждого приложения", subtitle: "Независимые ползунки громкости, профили, авто-приглушение и отключение звука — микшер, который macOS должна была иметь.", readMore: "Читать далее", ctaTitle: "SoundDial — Микшер громкости", ctaDesc: "Независимые ползунки громкости для каждого приложения. Профили, авто-приглушение и отключение. €14,99 разово.", ctaButton: "Скачать SoundDial" },
  tr: { tagline: "SoundDial — Uygulama Bazlı Ses Mikseri", heading: "Her uygulamanın\nsesini ayrı kontrol edin", subtitle: "Bağımsız ses kaydırıcıları, profiller, otomatik kısma ve uygulama bazlı sessizleştirme — macOS'un sahip olması gereken ses mikseri.", readMore: "Devamını oku", ctaTitle: "SoundDial — Uygulama Bazlı Ses Mikseri", ctaDesc: "Her uygulama için bağımsız ses kaydırıcıları. Profiller, otomatik kısma ve sessizleştirme. 14,99 € tek seferlik.", ctaButton: "SoundDial İndir" },
  pl: { tagline: "SoundDial — Mikser głośności per app", heading: "Kontroluj głośność\nkażdej aplikacji", subtitle: "Niezależne suwaki głośności, profile, auto-ducking i wyciszanie per app — mikser, który macOS powinien mieć.", readMore: "Czytaj dalej", ctaTitle: "SoundDial — Mikser głośności per app", ctaDesc: "Niezależne suwaki głośności dla każdej aplikacji. Profile, auto-ducking i wyciszanie. 14,99 € jednorazowo.", ctaButton: "Pobierz SoundDial" },
  sv: { tagline: "SoundDial — Volymmixer per app", heading: "Styr volymen\nför varje app", subtitle: "Oberoende volymreglage, profiler, auto-ducking och per-app-tystning — volymmixern som macOS borde ha.", readMore: "Läs mer", ctaTitle: "SoundDial — Volymmixer per app", ctaDesc: "Oberoende volymreglage för varje app. Profiler, auto-ducking och tystning. €14,99 engångsköp.", ctaButton: "Hämta SoundDial" },
  da: { tagline: "SoundDial — Per-app lydstyrkemixer", heading: "Styr lydstyrken\nfor hver app", subtitle: "Uafhængige lydstyrkeskydere, profiler, auto-ducking og per-app lydløs — den lydstyrkemixer macOS burde have.", readMore: "Læs mere", ctaTitle: "SoundDial — Per-app lydstyrkemixer", ctaDesc: "Uafhængige lydstyrkeskydere for hver app. Profiler, auto-ducking og lydløs. €14,99 engangskøb.", ctaButton: "Hent SoundDial" },
  no: { tagline: "SoundDial — Per-app volummikser", heading: "Styr volumet\nfor hver app", subtitle: "Uavhengige volumglidere, profiler, auto-ducking og per-app demping — volummixeren macOS burde hatt.", readMore: "Les mer", ctaTitle: "SoundDial — Per-app volummikser", ctaDesc: "Uavhengige volumglidere for hver app. Profiler, auto-ducking og demping. €14,99 engangskjøp.", ctaButton: "Hent SoundDial" },
  fi: { tagline: "SoundDial — Sovelluskohtainen äänenvoimakkuusmikseri", heading: "Hallitse jokaisen\nsovelluksen äänenvoimakkuutta", subtitle: "Itsenäiset äänenvoimakkuusliukusäätimet, profiilit, automaattinen hiljennys ja sovelluskohtainen mykistys.", readMore: "Lue lisää", ctaTitle: "SoundDial — Sovelluskohtainen mikseri", ctaDesc: "Itsenäiset äänenvoimakkuusliukusäätimet jokaiselle sovellukselle. Profiilit, automaattinen hiljennys. 14,99 € kertaosto.", ctaButton: "Lataa SoundDial" },
  ar: { tagline: "SoundDial — خلاط صوت لكل تطبيق", heading: "تحكم في صوت\nكل تطبيق", subtitle: "أشرطة تمرير مستقلة للصوت، ملفات تعريف، خفض تلقائي وكتم لكل تطبيق — خلاط الصوت الذي يجب أن يكون في macOS.", readMore: "اقرأ المزيد", ctaTitle: "SoundDial — خلاط صوت لكل تطبيق", ctaDesc: "أشرطة تمرير مستقلة لكل تطبيق. ملفات تعريف، خفض تلقائي وكتم. ١٤٫٩٩€ مرة واحدة.", ctaButton: "احصل على SoundDial" },
  he: { tagline: "SoundDial — מיקסר עוצמה לכל אפליקציה", heading: "שלוט בעוצמת\nכל אפליקציה", subtitle: "מחוונים עצמאיים, פרופילים, הנמכה אוטומטית והשתקה לכל אפליקציה — מיקסר העוצמה ש-macOS צריך.", readMore: "קרא עוד", ctaTitle: "SoundDial — מיקסר עוצמה לכל אפליקציה", ctaDesc: "מחוונים עצמאיים לכל אפליקציה. פרופילים, הנמכה אוטומטית והשתקה. €14.99 חד פעמי.", ctaButton: "הורד SoundDial" },
  th: { tagline: "SoundDial — มิกเซอร์เสียงแต่ละแอป", heading: "ควบคุมเสียง\nแต่ละแอป", subtitle: "ตัวเลื่อนเสียงอิสระ โปรไฟล์ ลดเสียงอัตโนมัติ และปิดเสียงแต่ละแอป — มิกเซอร์เสียงที่ macOS ควรมี", readMore: "อ่านเพิ่มเติม", ctaTitle: "SoundDial — มิกเซอร์เสียงแต่ละแอป", ctaDesc: "ตัวเลื่อนเสียงอิสระสำหรับทุกแอป โปรไฟล์ ลดเสียงอัตโนมัติ €14.99 จ่ายครั้งเดียว", ctaButton: "รับ SoundDial" },
  ms: { tagline: "SoundDial — Pengadun kelantangan setiap app", heading: "Kawal kelantangan\nsetiap app", subtitle: "Peluncur kelantangan bebas, profil, peredaman auto dan bisu setiap app — pengadun kelantangan yang macOS patut ada.", readMore: "Baca lagi", ctaTitle: "SoundDial — Pengadun kelantangan setiap app", ctaDesc: "Peluncur kelantangan bebas untuk setiap app. Profil, peredaman auto dan bisu. €14.99 sekali bayar.", ctaButton: "Dapatkan SoundDial" },
  vi: { tagline: "SoundDial — Bộ trộn âm lượng từng ứng dụng", heading: "Điều khiển âm lượng\ntừng ứng dụng", subtitle: "Thanh trượt âm lượng độc lập, hồ sơ, tự động giảm âm và tắt tiếng từng ứng dụng.", readMore: "Đọc thêm", ctaTitle: "SoundDial — Bộ trộn âm lượng từng ứng dụng", ctaDesc: "Thanh trượt âm lượng độc lập cho mỗi ứng dụng. Hồ sơ, tự động giảm âm. €14.99 mua một lần.", ctaButton: "Tải SoundDial" },
  uk: { tagline: "SoundDial — Мікшер гучності додатків", heading: "Керуйте гучністю\nкожного додатка", subtitle: "Незалежні повзунки гучності, профілі, авто-приглушення та вимкнення звуку — мікшер, який має бути в macOS.", readMore: "Читати далі", ctaTitle: "SoundDial — Мікшер гучності додатків", ctaDesc: "Незалежні повзунки гучності для кожного додатка. Профілі, авто-приглушення. €14,99 одноразово.", ctaButton: "Завантажити SoundDial" },
  ca: { tagline: "SoundDial — Mesclador de volum per app", heading: "Controla el volum\nde cada app", subtitle: "Controls de volum independents, perfils, ducking automàtic i silenci per app — el mesclador que macOS hauria de tenir.", readMore: "Llegir més", ctaTitle: "SoundDial — Mesclador de volum per app", ctaDesc: "Controls de volum independents per a cada app. Perfils, ducking automàtic i silenci. 14,99 € únic.", ctaButton: "Obtenir SoundDial" },
  el: { tagline: "SoundDial — Μίκτης έντασης ανά εφαρμογή", heading: "Ελέγξτε την ένταση\nκάθε εφαρμογής", subtitle: "Ανεξάρτητα ρυθμιστικά έντασης, προφίλ, αυτόματη μείωση και σίγαση ανά εφαρμογή.", readMore: "Διαβάστε περισσότερα", ctaTitle: "SoundDial — Μίκτης έντασης ανά εφαρμογή", ctaDesc: "Ανεξάρτητα ρυθμιστικά για κάθε εφαρμογή. Προφίλ, αυτόματη μείωση. €14,99 εφάπαξ.", ctaButton: "Λήψη SoundDial" },
  hr: { tagline: "SoundDial — Mikser glasnoće po aplikaciji", heading: "Upravljajte glasnoćom\nsvake aplikacije", subtitle: "Neovisni klizači glasnoće, profili, auto-stišavanje i isključivanje zvuka po aplikaciji.", readMore: "Čitaj više", ctaTitle: "SoundDial — Mikser glasnoće po aplikaciji", ctaDesc: "Neovisni klizači glasnoće za svaku aplikaciju. Profili, auto-stišavanje. €14,99 jednokratno.", ctaButton: "Preuzmi SoundDial" },
  sk: { tagline: "SoundDial — Mixér hlasitosti pre aplikácie", heading: "Ovládajte hlasitosť\nkaždej aplikácie", subtitle: "Nezávislé posuvníky hlasitosti, profily, automatické stíšenie a stlmenie pre aplikácie.", readMore: "Čítať ďalej", ctaTitle: "SoundDial — Mixér hlasitosti pre aplikácie", ctaDesc: "Nezávislé posuvníky hlasitosti pre každú aplikáciu. Profily, automatické stíšenie. 14,99 € jednorazovo.", ctaButton: "Stiahnuť SoundDial" },
  cs: { tagline: "SoundDial — Mixér hlasitosti pro aplikace", heading: "Ovládejte hlasitost\nkaždé aplikace", subtitle: "Nezávislé posuvníky hlasitosti, profily, automatické ztlumení a ztišení pro aplikace.", readMore: "Číst dále", ctaTitle: "SoundDial — Mixér hlasitosti pro aplikace", ctaDesc: "Nezávislé posuvníky hlasitosti pro každou aplikaci. Profily, automatické ztlumení. 14,99 € jednorázově.", ctaButton: "Stáhnout SoundDial" },
  ro: { tagline: "SoundDial — Mixer volum per aplicație", heading: "Controlează volumul\nfiecărei aplicații", subtitle: "Glisoare de volum independente, profiluri, reducere automată și dezactivare sunet per aplicație.", readMore: "Citește mai mult", ctaTitle: "SoundDial — Mixer volum per aplicație", ctaDesc: "Glisoare de volum independente pentru fiecare aplicație. Profiluri, reducere automată. €14,99 o singură dată.", ctaButton: "Obține SoundDial" },
  hu: { tagline: "SoundDial — Alkalmazásonkénti hangerőkeverő", heading: "Szabályozd minden\nalkalmazás hangerejét", subtitle: "Független hangerőcsúszkák, profilok, automatikus halkítás és alkalmazásonkénti némítás.", readMore: "Tovább olvasom", ctaTitle: "SoundDial — Alkalmazásonkénti hangerőkeverő", ctaDesc: "Független hangerőcsúszkák minden alkalmazáshoz. Profilok, automatikus halkítás. €14,99 egyszeri vásárlás.", ctaButton: "SoundDial letöltése" },
  id: { tagline: "SoundDial — Mixer volume per aplikasi", heading: "Kontrol volume\nsetiap aplikasi", subtitle: "Penggeser volume independen, profil, ducking otomatis, dan bisukan per aplikasi — mixer volume yang seharusnya ada di macOS.", readMore: "Baca selengkapnya", ctaTitle: "SoundDial — Mixer volume per aplikasi", ctaDesc: "Penggeser volume independen untuk setiap aplikasi. Profil, ducking otomatis. €14,99 pembelian satu kali.", ctaButton: "Dapatkan SoundDial" },
  hi: { tagline: "SoundDial — प्रति-ऐप वॉल्यूम मिक्सर", heading: "हर ऐप का\nवॉल्यूम अलग से नियंत्रित करें", subtitle: "स्वतंत्र वॉल्यूम स्लाइडर, प्रोफाइल, ऑटो-डकिंग और प्रति-ऐप म्यूट — वह वॉल्यूम मिक्सर जो macOS में होना चाहिए।", readMore: "और पढ़ें", ctaTitle: "SoundDial — प्रति-ऐप वॉल्यूम मिक्सर", ctaDesc: "हर ऐप के लिए स्वतंत्र वॉल्यूम स्लाइडर। प्रोफाइल, ऑटो-डकिंग। €14.99 एक बार भुगतान।", ctaButton: "SoundDial प्राप्त करें" },
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
    alternates[loc.code] = `/sounddial/blog/${loc.code}`;
  }

  return {
    title: `${l.tagline} Blog`,
    description: l.subtitle,
    alternates: { languages: alternates },
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
  const isRtl = locale === "ar" || locale === "he";

  return (
    <main className="min-h-screen bg-neutral-950 text-white" dir={isRtl ? "rtl" : undefined}>
      <section className="px-6 pt-36 pb-16 sm:pb-20 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
          {l.tagline}
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl whitespace-pre-line">
          {l.heading}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
          {l.subtitle}
        </p>

        <nav className="mt-10 flex flex-wrap gap-2" dir="ltr">
          {LOCALES.map((loc) => (
            <Link
              key={loc.code}
              href={`/sounddial/blog/${loc.code}`}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                loc.code === locale
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {loc.label}
            </Link>
          ))}
        </nav>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-neutral-800" />
      </div>

      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/sounddial/blog/${locale}/${article.slug}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all hover:border-purple-500/60 hover:bg-neutral-900 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
                <time>{article.date}</time>
                {article.readTime && (
                  <>
                    <span className="text-neutral-700">·</span>
                    <span>{article.readTime}</span>
                  </>
                )}
              </div>
              <h2 className="mt-3 text-xl font-bold text-white leading-snug group-hover:text-purple-400 transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed flex-1">
                {article.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-purple-400 group-hover:gap-2 transition-all">
                {l.readMore}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto text-center">
        <div className="rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/20 px-8 py-14 sm:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{l.ctaTitle}</h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">{l.ctaDesc}</p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-purple-500 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition hover:bg-purple-400 shadow-lg shadow-purple-500/30"
          >
            {l.ctaButton}
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-6xl mx-auto border-t border-neutral-800">
        <nav className="flex items-center justify-center gap-6 text-sm text-neutral-500" dir="ltr">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <span className="text-purple-400 font-medium">Blog</span>
        </nav>
      </footer>
    </main>
  );
}
