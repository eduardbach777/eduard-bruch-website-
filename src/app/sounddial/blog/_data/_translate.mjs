// Comprehensive translation script for SoundDial blog articles
// Translates en.ts content into cs, sk, hr, uk
// Preserves: HTML tags, URLs, img src, styles, brand names, €14,99, slugs
// Run: node _translate.mjs

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const enContent = readFileSync(join(__dirname, "en.ts"), "utf8");

// Parse articles from the TypeScript file
function parseArticles(content) {
  const articles = [];
  const lines = content.split("\n");
  let i = 0;

  while (i < lines.length) {
    const keyMatch = lines[i].match(/^  "([^"]+)":\s*\{$/);
    if (keyMatch) {
      const key = keyMatch[1];
      const startLine = i;

      // Find slug
      let slug = "";
      i++;
      while (i < lines.length) {
        const m = lines[i].match(/^\s*slug:\s*"([^"]+)"/);
        if (m) { slug = m[1]; break; }
        i++;
      }

      // Find title
      let title = "";
      i++;
      while (i < lines.length) {
        const m = lines[i].match(/^\s*title:\s*"((?:[^"\\]|\\.)*)"/);
        if (m) { title = m[1]; break; }
        i++;
      }

      // Find description (may span two lines)
      let description = "";
      i++;
      while (i < lines.length) {
        const m2 = lines[i].match(/^\s*description:\s*"((?:[^"\\]|\\.)*)"/);
        if (m2) { description = m2[1]; break; }
        const m1 = lines[i].match(/^\s*description:\s*$/);
        if (m1) {
          i++;
          const m3 = lines[i].match(/^\s*"((?:[^"\\]|\\.)*)"/);
          if (m3) description = m3[1];
          break;
        }
        i++;
      }

      // Find date
      let date = "";
      i++;
      while (i < lines.length) {
        const m = lines[i].match(/^\s*date:\s*"([^"]+)"/);
        if (m) { date = m[1]; break; }
        i++;
      }

      // Find readTime
      let readTime = "";
      i++;
      while (i < lines.length) {
        const m = lines[i].match(/^\s*readTime:\s*"([^"]+)"/);
        if (m) { readTime = m[1]; break; }
        i++;
      }

      // Find content
      let contentStr = "";
      i++;
      while (i < lines.length) {
        if (lines[i].match(/^\s*content:\s*`/)) {
          let contentLines = [];
          contentLines.push(lines[i].replace(/^\s*content:\s*`/, ""));
          i++;
          while (i < lines.length) {
            if (lines[i].match(/^`,?\s*$/)) break;
            contentLines.push(lines[i]);
            i++;
          }
          contentStr = contentLines.join("\n");
          break;
        }
        i++;
      }

      articles.push({ key, slug, title, description, date, readTime, content: contentStr, startLine });
    }
    i++;
  }
  return articles;
}

const articles = parseArticles(enContent);
console.log(`Parsed ${articles.length} articles`);

// ============================================================
// TRANSLATIONS DATA
// ============================================================
// Each language has translations for all 58 articles:
// - title
// - description
// - content (full HTML translated)
//
// Due to the massive scale, we use a systematic approach:
// For the content, we apply bulk text replacements for common
// English phrases while preserving HTML structure.
// ============================================================

// Common English → target language text replacements
// Applied to content HTML (but NOT to attributes, URLs, or tag names)

function createReplacements(lang) {
  const r = [];

  // Helper: add a replacement pair
  const add = (en, cs, sk, hr, uk) => {
    const map = { cs, sk, hr, uk };
    r.push([en, map[lang]]);
  };

  // CTA / pricing phrases
  add("Get SoundDial on the Mac App Store", "Získejte SoundDial na Mac App Store", "Získajte SoundDial na Mac App Store", "Nabavite SoundDial na Mac App Storeu", "Отримайте SoundDial у Mac App Store");
  add("Available on the", "K dispozici na", "K dispozícii na", "Dostupno na", "Доступно на");
  add("Mac App Store", "Mac App Store", "Mac App Store", "Mac App Storeu", "Mac App Store");
  add("one-time purchase, no subscription, macOS 14.2+.", "jednorázový nákup, bez předplatného, macOS 14.2+.", "jednorazový nákup, bez predplatného, macOS 14.2+.", "jednokratna kupnja, bez pretplate, macOS 14.2+.", "одноразова покупка, без підписки, macOS 14.2+.");
  add("one-time purchase, no subscription", "jednorázový nákup, bez předplatného", "jednorazový nákup, bez predplatného", "jednokratna kupnja, bez pretplate", "одноразова покупка, без підписки");
  add("one-time purchase", "jednorázový nákup", "jednorazový nákup", "jednokratna kupnja", "одноразова покупка");
  add("no subscription", "bez předplatného", "bez predplatného", "bez pretplate", "без підписки");
  add("Apple-reviewed, sandboxed", "kontrolováno Apple, v sandboxu", "kontrolované Apple, v sandboxe", "Apple-pregledano, u sandboxu", "перевірено Apple, у пісочниці");
  add("Apple-reviewed", "kontrolováno Apple", "kontrolované Apple", "Apple-pregledano", "перевірено Apple");

  // Feature names
  add("Per-app volume control", "Ovládání hlasitosti pro jednotlivé aplikace", "Ovládanie hlasitosti pre jednotlivé aplikácie", "Kontrola glasnoće po aplikaciji", "Керування гучністю для кожного додатку");
  add("Per-app volume", "Hlasitost pro jednotlivé aplikace", "Hlasitosť pre jednotlivé aplikácie", "Glasnoća po aplikaciji", "Гучність для кожного додатку");
  add("Per-app mute", "Ztlumení pro jednotlivé aplikace", "Stíšenie pre jednotlivé aplikácie", "Utišavanje po aplikaciji", "Вимкнення звуку для кожного додатку");
  add("Volume boost", "Zesílení hlasitosti", "Zosilnenie hlasitosti", "Pojačanje glasnoće", "Підсилення гучності");
  add("Volume profiles", "Profily hlasitosti", "Profily hlasitosti", "Profili glasnoće", "Профілі гучності");
  add("volume profiles", "profily hlasitosti", "profily hlasitosti", "profili glasnoće", "профілі гучності");
  add("Volume memory", "Paměť hlasitosti", "Pamäť hlasitosti", "Memorija glasnoće", "Пам'ять гучності");
  add("volume memory", "paměť hlasitosti", "pamäť hlasitosti", "memorija glasnoće", "пам'ять гучності");
  add("Auto-ducking", "Automatické ztišení", "Automatické stíšenie", "Automatsko utišavanje", "Автоматичне приглушення");
  add("auto-ducking", "automatické ztišení", "automatické stíšenie", "automatsko utišavanje", "автоматичне приглушення");
  add("Keyboard shortcuts", "Klávesové zkratky", "Klávesové skratky", "Tipkovničke prečice", "Гарячі клавіші");
  add("Output device switching", "Přepínání výstupního zařízení", "Prepínanie výstupného zariadenia", "Prebacivanje izlaznog uređaja", "Перемикання пристрою виведення");
  add("volume mixer", "mixpult hlasitosti", "mixér hlasitosti", "mikser glasnoće", "мікшер гучності");
  add("Volume Mixer", "Mixpult hlasitosti", "Mixér hlasitosti", "Mikser glasnoće", "Мікшер гучності");
  add("default volume", "výchozí hlasitost", "predvolená hlasitosť", "zadana glasnoća", "стандартна гучність");

  // Common UI / macOS terms
  add("System Settings", "Nastavení systému", "Nastavenia systému", "Postavke sustava", "Системні налаштування");
  add("menu bar", "lišta menu", "panel ponuky", "traka izbornika", "панель меню");
  add("one click", "jedno kliknutí", "jedno kliknutie", "jedan klik", "один клік");
  add("One click", "Jedno kliknutí", "Jedno kliknutie", "Jedan klik", "Один клік");
  add("output device", "výstupní zařízení", "výstupné zariadenie", "izlazni uređaj", "пристрій виведення");
  add("input device", "vstupní zařízení", "vstupné zariadenie", "ulazni uređaj", "пристрій введення");
  add("built-in speakers", "vestavěné reproduktory", "vstavané reproduktory", "ugrađeni zvučnici", "вбудовані динаміки");
  add("built-in microphone", "vestavěný mikrofon", "vstavaný mikrofón", "ugrađeni mikrofon", "вбудований мікрофон");
  add("system volume", "systémová hlasitost", "systémová hlasitosť", "glasnoća sustava", "системна гучність");
  add("volume slider", "posuvník hlasitosti", "posúvač hlasitosti", "klizač glasnoće", "повзунок гучності");

  // Common section headers and phrases
  add("The fix:", "Řešení:", "Riešenie:", "Rješenje:", "Рішення:");
  add("The fix", "Řešení", "Riešenie", "Rješenje", "Рішення");
  add("How it works", "Jak to funguje", "Ako to funguje", "Kako funkcionira", "Як це працює");
  add("Why this matters", "Proč na tom záleží", "Prečo na tom záleží", "Zašto je to važno", "Чому це важливо");
  add("What you get", "Co získáte", "Čo získate", "Što dobivate", "Що ви отримуєте");

  // Common words and phrases
  add("muted", "ztlumeno", "stíšené", "utišano", "вимкнено");
  add("Muted", "Ztlumeno", "Stíšené", "Utišano", "Вимкнено");
  add("Save this as a", "Uložte to jako", "Uložte to ako", "Spremite ovo kao", "Збережіть це як");
  add("Save it as a profile", "Uložte to jako profil", "Uložte to ako profil", "Spremite kao profil", "Збережіть як профіль");
  add("Save each as a profile", "Uložte každé jako profil", "Uložte každé ako profil", "Spremite svako kao profil", "Збережіть кожне як профіль");

  return r;
}

// Title/description translations for all 58 articles in all 4 languages
const titleDescTranslations = {
  cs: {
    "mac-audio-podcasting-setup": { t: "Zvuk na Macu pro podcasty: Ovládejte, co slyšíte při nahrávání", d: "Nahrávání podcastu při sledování úrovní, poslouchání hosta a správě oznámení — to vše soupeří o jeden posuvník hlasitosti. Tady je lepší řešení." },
    "mac-too-loud-full-volume-tame-it": { t: "Proč je můj Mac tak hlasitý na plné hlasitosti? Jak získat jemnější ovládání", d: "Reproduktory MacBooku Pro jsou skvělé — dokud nezačnou řvát. Pokud i střední hlasitost připadá příliš hlasitá, tady je návod na přesnější ovládání zvuku." },
    "slack-huddle-volume-issues-mac": { t: "Problémy s hlasitostí Slack Huddle na Macu: Příliš tichý, příliš hlasitý nebo soupeří s hudbou", d: "Slack huddles soupeří s vaší hudbou a oznámeními o stejnou hlasitost. Jak ovládat zvuk huddle nezávisle na všem ostatním na Macu." },
    "set-default-volume-new-apps-mac": { t: "Jak nastavit výchozí hlasitost pro nové aplikace na Macu", d: "Nové aplikace se standardně spouštějí na plnou hlasitost. Jak zajistit, aby každá nová aplikace začínala na pohodlné úrovni." },
    "mac-startup-sound-too-loud": { t: "Zvuk spuštění Macu je příliš hlasitý? Jak ho zakázat nebo ztišit", d: "Zvonění při spuštění Macu hraje na plnou hlasitost — obzvláště trapné na schůzkách. Jak ho ztišit nebo ovládat." },
    "webex-volume-too-low-mac": { t: "Cisco Webex je na Macu příliš tichý? Jak to opravit", d: "Hovory na Webexu jsou na Macu sotva slyšitelné. Každá oprava — od nastavení zvuku po zesílení hlasitosti přes 100 %." },
    "mac-two-audio-sources-same-time": { t: "Jak poslouchat dvě věci najednou na Macu bez zešílení", d: "Hudba a podcast. Přednáška a video. Hovor a hudba na pozadí. macOS vás nutí vybrat jednu hlasitost pro obojí — jak je vyvážit." },
    "watch-movies-mac-late-night-volume": { t: "Jak sledovat filmy na Macu, aniž byste vzbudili všechny", d: "Dialogy jsou neslyšitelné, pak výbuchy otřásají stěnami. Jak zkrotit filmový zvuk pro noční sledování na Macu." },
    "mac-volume-resets-after-sleep": { t: "Hlasitost Macu se resetuje po spánku? Jak si udržet nastavení zvuku", d: "Pokaždé, když se Mac probudí ze spánku, hlasitost je špatně. Proč a jak to opravit." },
    "mac-audio-music-production-daw": { t: "Zvuk na Macu pro hudební produkci: Ovládejte DAW a komunikaci odděleně", d: "Používáte Logic Pro nebo Ableton při hovoru na Discordu? Jak slyšet DAW na plné kvalitě a zároveň udržet hlasový chat pohodlný." },
    "apple-music-volume-too-low-mac": { t: "Apple Music je na Macu příliš tichý? Jak to opravit a zesílit", d: "Apple Music na maximální hlasitosti, ale stále příliš tiché? Zkontrolujte Sound Check, EQ a naučte se zesílit přes 100 %." },
    "free-volume-mixer-mac": { t: "Bezplatný mixpult hlasitosti pro Mac: Co skutečně dostanete (a co ne)", d: "Hledáte bezplatný mixpult hlasitosti pro Mac? Upřímný rozbor bezplatných možností, co jim chybí a kdy se vyplatí zaplatit." },
    "balance-music-voice-chat-volume-mac": { t: "Jak vyvážit hlasitost hudby a hlasového chatu na Macu", d: "Hudba je příliš hlasitá přes Discord. Nebo hovor je příliš tichý pod Spotify. macOS neumožňuje je vyvážit — jak nastavit dokonalý poměr." },
    "mac-volume-control-complete-guide": { t: "Ovládání hlasitosti na Macu: Kompletní průvodce (2026)", d: "Vše o ovládání zvuku na macOS — od klávesových zkratek po hlasitost pro jednotlivé aplikace, přepínání výstupu a automatizaci." },
    "vlc-volume-too-low-mac": { t: "VLC je na Macu příliš tichý? Jak zesílit přes 200 %", d: "VLC na maximální hlasitosti, ale video stále příliš tiché? VLC má vestavěné zesílení na 200 % — a můžete jít ještě dál." },
    "disable-audio-ducking-mac": { t: "Jak zakázat automatické ztišení zvuku na Macu (nebo ho ovládat sami)", d: "macOS nebo vaše aplikace ztišují hudbu během hovorů bez ptaní. Jak zastavit nechtěné ztišení — nebo ho nahradit ztišením, které ovládáte." },
    "bluetooth-headphones-too-quiet-mac": { t: "Bluetooth sluchátka příliš tichá na Macu? Každá oprava, která funguje", d: "Bluetooth sluchátka fungují na telefonu skvěle, ale na Macu zní tiše. Každá příčina a jak ji opravit." },
    "mac-audio-obs-streaming-setup": { t: "Zvuk na Macu pro OBS a streamování: Jak ovládat, co slyší diváci", d: "Streamujete na Macu s OBS? Diváci slyší vše na stejné hlasitosti. Jak správně vyvážit zdroje zvuku." },
    "make-mac-remember-volume-per-app": { t: "Jak zajistit, aby si Mac zapamatoval hlasitost pro každou aplikaci", d: "Pokaždé, když restartujete Spotify nebo Zoom, musíte přenastavit hlasitost. Jak si macOS automaticky zapamatuje úroveň každé aplikace." },
    "podcast-volume-too-low-mac": { t: "Podcast je na Macu příliš tichý? Jak ho zesílit", d: "Některé podcasty jsou šeptem tiché i na maximální hlasitosti. Proč — a jak zesílit přes 100 % bez ovlivnění ostatních aplikací." },
    "mac-audio-online-classes-lectures": { t: "Nastavení zvuku na Macu pro online výuku a přednášky", d: "Sledování přednášky, psaní poznámek, hledání referencí a chat se spolužáky — vše na různých hlasitostech. Jak spravovat studentský zvuk na Macu." },
    "mac-sound-not-working-after-update": { t: "Zvuk na Macu nefunguje po aktualizaci? Kompletní průvodce opravou", d: "Aktualizovali jste macOS a zvuk je pryč, praská nebo je zaseknutý. Každá oprava pro obnovení zvuku na Macu." },
    "mute-all-apps-keyboard-shortcut-mac": { t: "Jak ztlumit všechny aplikace najednou na Macu (a perfektně je obnovit)", d: "Potřebujete okamžité ticho? Klávesa ztlumení ztlumí vše — ale zrušení ztlumení resetuje vyvážené hlasitosti. Lepší způsob na Macu." },
    "google-meet-volume-too-low-mac": { t: "Google Meet je na Macu příliš tichý? Jak to opravit", d: "Hlasy na Google Meet jsou sotva slyšitelné. Proč Meet běží přes Chrome, co to znamená pro zvuk a jak ho zesílit." },
    "mac-alert-volume-separate-from-media": { t: "Jak nastavit hlasitost upozornění odděleně od médií na Macu", d: "macOS má skrytý posuvník hlasitosti upozornění, ale pokrývá jen systémové zvuky. Jak skutečně oddělit hlasitost oznámení a médií." },
    "facetime-volume-too-low-mac": { t: "FaceTime je na Macu příliš tichý? Jak to opravit", d: "Zvuk FaceTime je na Macu sotva slyšitelný i na plné hlasitosti. Každá oprava — od nastavení zvuku po zesílení přes 100 %." },
    "mac-volume-keyboard-shortcuts": { t: "Klávesové zkratky hlasitosti na Macu, které pravděpodobně neznáte", d: "Kromě základních kláves hlasitosti — jemné ovládání, ztlumení konkrétních aplikací a zkratky pro hlasitost. Každý trik se zvukem na Macu." },
    "background-music-app-not-working-mac": { t: "Aplikace Background Music nefunguje na macOS? Zkuste tyto alternativy", d: "Background Music přestala fungovat po aktualizaci macOS? Proč se rozbíjí, co dělat a nejlepší alternativy pro rok 2026." },
    "soundsource-alternative-mac": { t: "Alternativa k SoundSource: Lehčí a levnější ovládání hlasitosti pro Mac", d: "SoundSource je výkonný, ale drahý a složitý. Pokud potřebujete jen hlasitost pro jednotlivé aplikace, zde je co použít." },
    "mac-volume-too-loud-at-lowest-setting": { t: "Mac příliš hlasitý na nejnižším nastavení? Jak jít ještě tišeji", d: "I na nejnižším stupni je Mac příliš hlasitý — zejména v noci se sluchátky. Jak získat jemnější ovládání a jít pod minimum." },
    "one-airpod-louder-than-the-other-fix": { t: "Jeden AirPod hlasitější než druhý? Všechny opravy vysvětleny", d: "Levý AirPod je tišší než pravý (nebo naopak). Každá příčina — od ušního mazu po nastavení vyvážení — a jak to opravit." },
    "netflix-streaming-audio-too-quiet-mac": { t: "Netflix a streamovací zvuk příliš tichý na Macu? Jak to opravit", d: "Dialogy jsou šeptavě tiché, pak výbuch otřese místností. Jak opravit úrovně streamovacího zvuku na Macu a zesílit přes 100 %." },
    "mac-audio-setup-remote-work": { t: "Nastavení zvuku na Macu pro vzdálenou práci: Kompletní průvodce", d: "Hovory, hudba, oznámení a soustředění — vše na jednom Macu. Jak nastavit zvuk, aby nic nebojovalo o vaši pozornost." },
    "stop-browser-tabs-auto-playing-audio-mac": { t: "Jak zastavit automatické přehrávání zvuku v záložkách prohlížeče na Macu", d: "Záložka na pozadí začne přehrávat zvuk. Reklamy, videa, zpravodajské weby — jak ztišit nezbedné záložky a ovládat zvuk prohlížeče." },
    "discord-volume-too-loud-mac": { t: "Discord příliš hlasitý (nebo tichý) na Macu? Jak to opravit", d: "Discord přehlušuje hru, nebo je příliš tichý na slyšení spoluhráčů. Jak ovládat hlasitost Discordu nezávisle na macOS." },
    "switch-audio-output-quickly-mac": { t: "Jak rychle přepnout zvukový výstup na Macu (bez proklikávání nastavení)", d: "Přepínání mezi reproduktory, sluchátky a monitory vyžaduje příliš mnoho kliknutí. Rychlejší způsoby přepnutí výstupního zařízení." },
    "fix-audio-crackling-popping-mac": { t: "Oprava praskání a lupání zvuku na Macu: Kompletní průvodce", d: "Zvuk Macu praská, luská nebo se zadrhává — při hudbě, hovorech nebo videu. Každá známá příčina a oprava zvukových závad." },
    "teams-volume-too-low-mac": { t: "Microsoft Teams příliš tichý na Macu? Každá oprava, která funguje", d: "Sotva slyšíte lidi na Teams i na maximální hlasitosti? Každá příčina a jak zesílit zvuk hovoru přes 100 %." },
    "how-to-control-per-app-volume-on-mac": { t: "Jak ovládat hlasitost pro jednotlivé aplikace na Macu", d: "macOS dává jeden posuvník hlasitosti pro vše. Jak získat individuální ovládání pro každou aplikaci — a proč na tom záleží víc, než si myslíte." },
    "mute-slack-notifications-mac-without-muting-everything": { t: "Jak ztlumit Slack na Macu bez ztlumení všeho ostatního", d: "Oznámení Slacku neustále ruší soustředění, ale nechcete ztišit hudbu nebo hovory. Jak ztlumit jen Slack na macOS." },
    "volume-profiles-for-mac": { t: "Jak nastavit profily hlasitosti pro různé situace na Macu", d: "Různá nastavení hlasitosti pro schůzky, soustředěnou práci, hraní a relaxaci — přepínatelné jedním kliknutím. Jak fungují profily hlasitosti." },
    "zoom-call-volume-too-low-mac": { t: "Hovor na Zoomu příliš tichý na Macu? Jak ho zesílit", d: "Sotva slyšíte lidi na Zoomu. Každá oprava — od nastavení Zoomu po zesílení zvuku hovoru přes 100 %." },
    "lower-spotify-without-lowering-everything-mac": { t: "Jak ztišit Spotify bez ztišení všeho ostatního na Macu", d: "Chcete Spotify jako hudbu na pozadí, ale snížení hlasitosti klávesami ztíší i hovor a vše ostatní. Zde je oprava." },
    "macos-tahoe-per-app-volume-control": { t: "Má macOS Tahoe ovládání hlasitosti pro jednotlivé aplikace?", d: "macOS Tahoe přinesl velké aktualizace, ale přidal Apple konečně mixpult hlasitosti? Odpověď — a jak získat ovládání hned teď." },
    "play-music-speakers-calls-headphones-mac": { t: "Jak přehrávat hudbu na reproduktorech a hovory ve sluchátkách (Mac)", d: "Chcete Spotify na reproduktorech a Zoom v AirPods současně? macOS to neusnadňuje — co skutečně funguje." },
    "mac-volume-keeps-changing-by-itself": { t: "Hlasitost Macu se mění sama od sebe: Jak to opravit", d: "Hlasitost Macu náhodně skočí nahoru, klesne dolů nebo se resetuje. Každá známá příčina a jak to zastavit." },
    "best-volume-mixer-apps-mac-2026": { t: "Nejlepší aplikace mixpultu hlasitosti pro Mac v roce 2026", d: "Přímé srovnání každé aplikace pro Mac s ovládáním hlasitosti pro jednotlivé aplikace. Funkce, ceny a která stojí za to." },
    "youtube-too-quiet-safari-chrome-mac": { t: "YouTube příliš tichý v Safari nebo Chrome na Macu? Opravte to okamžitě", d: "Některá videa na YouTube jsou sotva slyšitelná. Proč je zvuk prohlížeče tišší a jak ho zesílit přes 100 %." },
    "mac-notification-sounds-too-loud-headphones": { t: "Zvuky oznámení na Macu příliš hlasité ve sluchátkách? Zde je oprava", d: "Pípnutí Slacku a upozornění macOS jsou bolestivě hlasité ve sluchátkách. Proč se liší — a jak je zkrotit." },
    "stop-zoom-lowering-music-mac": { t: "Jak zastavit Zoom ve ztišování hudby na Macu", d: "Pokaždé, když se připojíte k hovoru na Zoomu, hudba zmizí. Proč se to děje a jak ovládat, co se ztíší — podle vašich podmínek." },
    "airpods-volume-too-low-mac": { t: "AirPods příliš tiché na Macu? Všechny opravy vysvětleny", d: "AirPods zní na Macu tiše i na plnou hlasitost? Všechny příčiny — od ochrany sluchu po Bluetooth — a jak je opravit." },
    "spotify-volume-too-low-mac": { t: "Spotify příliš tichý na Macu? Zde je každá oprava", d: "Spotify na maximální hlasitosti, ale stále příliš tichý? Každá příčina — od limitéru Spotify po nastavení macOS — a jak zesílit přes 100 %." },
    "separate-game-audio-from-discord-mac": { t: "Jak oddělit zvuk hry od Discordu na Macu", d: "Výbuchy ve hře přehlušují spoluhráče na Discordu? Jak nezávisle ovládat zvuk hry a hlasového chatu na macOS." },
    "why-doesnt-mac-have-volume-mixer": { t: "Proč Mac nemá mixpult hlasitosti jako Windows?", d: "Windows má ovládání hlasitosti od roku 2006. Je rok 2026 a macOS stále ne. Skutečný důvod — a jak ho stejně získat." },
    "boost-mac-volume-beyond-100-percent": { t: "Mac příliš tichý? Jak zesílit zvuk přes 100 %", d: "Mac je na plné hlasitosti a stále příliš tichý. Proč se to děje a jak zesílit zvuk až na 200 % bez externích reproduktorů." },
    "auto-lower-music-during-zoom-calls-mac": { t: "Jak automaticky ztišit hudbu během hovorů na Zoomu na Macu", d: "Pokaždé, když začne hovor na Zoomu, spěcháte pozastavit Spotify. Automatické ztišení sníží hudbu automaticky, když se aktivuje mikrofon." },
    "how-to-mute-one-app-on-mac": { t: "Jak ztlumit jednu aplikaci na Macu bez ztlumení všeho", d: "Slack pípá. Jste na hovoru. Chcete ztlumit Slack, ale slyšet hovor. macOS to neumožňuje — jak to udělat." },
    "volume-mixer-for-mac": { t: "Mixpult hlasitosti pro Mac: Chybějící funkce, kterou macOS stále nemá", d: "Windows má mixpult hlasitosti od roku 2006. Proč ho macOS stále nemá — a nejlepší způsob, jak získat ovládání hlasitosti na Macu v roce 2026." },
  },
  sk: {
    "mac-audio-podcasting-setup": { t: "Zvuk na Macu pre podcasty: Ovládajte, čo počujete pri nahrávaní", d: "Nahrávanie podcastu pri sledovaní úrovní, počúvaní hosťa a správe oznámení — to všetko súperí o jeden posúvač hlasitosti. Tu je lepšie riešenie." },
    "mac-too-loud-full-volume-tame-it": { t: "Prečo je môj Mac taký hlasný na plnej hlasitosti? Ako získať jemnejšie ovládanie", d: "Reproduktory MacBooku Pro sú skvelé — kým nezačnú revať. Ak aj stredná hlasitosť pripadá príliš hlasná, tu je návod na presnejšie ovládanie." },
    "slack-huddle-volume-issues-mac": { t: "Problémy s hlasitosťou Slack Huddle na Macu: Príliš tichý, príliš hlasný alebo súperí s hudbou", d: "Slack huddles súperia s vašou hudbou a oznámeniami o rovnakú hlasitosť. Ako ovládať zvuk huddle nezávisle na všetkom ostatnom na Macu." },
    "set-default-volume-new-apps-mac": { t: "Ako nastaviť predvolenú hlasitosť pre nové aplikácie na Macu", d: "Nové aplikácie sa štandardne spúšťajú na plnú hlasitosť. Ako zabezpečiť, aby každá nová aplikácia začínala na pohodlnej úrovni." },
    "mac-startup-sound-too-loud": { t: "Zvuk spustenia Macu je príliš hlasný? Ako ho zakázať alebo stíšiť", d: "Zvonenie pri spustení Macu hrá na plnú hlasitosť — obzvlášť trápne na schôdzkach. Ako ho stíšiť alebo ovládať." },
    "webex-volume-too-low-mac": { t: "Cisco Webex je na Macu príliš tichý? Ako to opraviť", d: "Hovory na Webexe sú na Macu sotva počuteľné. Každá oprava — od nastavení zvuku po zosilnenie hlasitosti cez 100 %." },
    "mac-two-audio-sources-same-time": { t: "Ako počúvať dve veci naraz na Macu bez zošialenia", d: "Hudba a podcast. Prednáška a video. Hovor a hudba na pozadí. macOS vás núti vybrať jednu hlasitosť pre oboje — ako ich vyvážiť." },
    "watch-movies-mac-late-night-volume": { t: "Ako sledovať filmy na Macu bez toho, aby ste zobudili všetkých", d: "Dialógy sú nepočuteľné, potom výbuchy otriasajú stenami. Ako skrotiť filmový zvuk pre nočné sledovanie na Macu." },
    "mac-volume-resets-after-sleep": { t: "Hlasitosť Macu sa resetuje po spánku? Ako si udržať nastavenia zvuku", d: "Zakaždým, keď sa Mac prebudí zo spánku, hlasitosť je zle. Prečo a ako to opraviť." },
    "mac-audio-music-production-daw": { t: "Zvuk na Macu pre hudobnú produkciu: Ovládajte DAW a komunikáciu oddelene", d: "Používate Logic Pro alebo Ableton pri hovore na Discorde? Ako počuť DAW na plnej kvalite a udržať hlasový chat pohodlný." },
    "apple-music-volume-too-low-mac": { t: "Apple Music je na Macu príliš tichý? Ako to opraviť a zosilniť", d: "Apple Music na maximálnej hlasitosti, ale stále príliš tichý? Skontrolujte Sound Check, EQ a naučte sa zosilniť cez 100 %." },
    "free-volume-mixer-mac": { t: "Bezplatný mixér hlasitosti pre Mac: Čo skutočne dostanete (a čo nie)", d: "Hľadáte bezplatný mixér hlasitosti pre Mac? Úprimný rozbor bezplatných možností, čo im chýba a kedy sa oplatí zaplatiť." },
    "balance-music-voice-chat-volume-mac": { t: "Ako vyvážiť hlasitosť hudby a hlasového chatu na Macu", d: "Hudba je príliš hlasná cez Discord. Alebo hovor je príliš tichý pod Spotify. macOS neumožňuje ich vyvážiť — ako nastaviť dokonalý pomer." },
    "mac-volume-control-complete-guide": { t: "Ovládanie hlasitosti na Macu: Kompletný sprievodca (2026)", d: "Všetko o ovládaní zvuku na macOS — od klávesových skratiek po hlasitosť pre jednotlivé aplikácie, prepínanie výstupu a automatizáciu." },
    "vlc-volume-too-low-mac": { t: "VLC je na Macu príliš tichý? Ako zosilniť cez 200 %", d: "VLC na maximálnej hlasitosti, ale video stále príliš tiché? VLC má vstavané zosilnenie na 200 % — a môžete ísť ešte ďalej." },
    "disable-audio-ducking-mac": { t: "Ako zakázať automatické stíšenie zvuku na Macu (alebo ho ovládať sami)", d: "macOS alebo vaše aplikácie stíšia hudbu počas hovorov bez opýtania. Ako zastaviť nechcené stíšenie — alebo ho nahradiť stíšením, ktoré ovládate." },
    "bluetooth-headphones-too-quiet-mac": { t: "Bluetooth slúchadlá príliš tiché na Macu? Každá oprava, ktorá funguje", d: "Bluetooth slúchadlá fungujú na telefóne skvele, ale na Macu znejú ticho. Každá príčina a ako ju opraviť." },
    "mac-audio-obs-streaming-setup": { t: "Zvuk na Macu pre OBS a streamovanie: Ako ovládať, čo počujú diváci", d: "Streamujete na Macu s OBS? Diváci počujú všetko na rovnakej hlasitosti. Ako správne vyvážiť zdroje zvuku." },
    "make-mac-remember-volume-per-app": { t: "Ako zabezpečiť, aby si Mac zapamätal hlasitosť pre každú aplikáciu", d: "Zakaždým, keď reštartujete Spotify alebo Zoom, musíte prenastaviť hlasitosť. Ako si macOS automaticky zapamätá úroveň každej aplikácie." },
    "podcast-volume-too-low-mac": { t: "Podcast je na Macu príliš tichý? Ako ho zosilniť", d: "Niektoré podcasty sú šeptom tiché aj na maximálnej hlasitosti. Prečo — a ako zosilniť cez 100 % bez ovplyvnenia ostatných aplikácií." },
    "mac-audio-online-classes-lectures": { t: "Nastavenie zvuku na Macu pre online výuku a prednášky", d: "Sledovanie prednášky, písanie poznámok, hľadanie referencií a chat so spolužiakmi — všetko na rôznych hlasitostiach. Ako spravovať študentský zvuk." },
    "mac-sound-not-working-after-update": { t: "Zvuk na Macu nefunguje po aktualizácii? Kompletný sprievodca opravou", d: "Aktualizovali ste macOS a zvuk je preč, praská alebo je zaseknutý. Každá oprava pre obnovenie zvuku na Macu." },
    "mute-all-apps-keyboard-shortcut-mac": { t: "Ako stíšiť všetky aplikácie naraz na Macu (a perfektne ich obnoviť)", d: "Potrebujete okamžité ticho? Kláves stíšenia stíši všetko — ale zrušenie stíšenia resetuje vyvážené hlasitosti. Lepší spôsob na Macu." },
    "google-meet-volume-too-low-mac": { t: "Google Meet je na Macu príliš tichý? Ako to opraviť", d: "Hlasy na Google Meet sú sotva počuteľné. Prečo Meet beží cez Chrome, čo to znamená pre zvuk a ako ho zosilniť." },
    "mac-alert-volume-separate-from-media": { t: "Ako nastaviť hlasitosť upozornení oddelene od médií na Macu", d: "macOS má skrytý posúvač hlasitosti upozornení, ale pokrýva len systémové zvuky. Ako skutočne oddeliť hlasitosť oznámení a médií." },
    "facetime-volume-too-low-mac": { t: "FaceTime je na Macu príliš tichý? Ako to opraviť", d: "Zvuk FaceTime je na Macu sotva počuteľný aj na plnej hlasitosti. Každá oprava — od nastavení zvuku po zosilnenie cez 100 %." },
    "mac-volume-keyboard-shortcuts": { t: "Klávesové skratky hlasitosti na Macu, ktoré pravdepodobne nepoznáte", d: "Okrem základných klávesov hlasitosti — jemné ovládanie, stíšenie konkrétnych aplikácií a skratky pre hlasitosť. Každý trik so zvukom na Macu." },
    "background-music-app-not-working-mac": { t: "Aplikácia Background Music nefunguje na macOS? Vyskúšajte tieto alternatívy", d: "Background Music prestala fungovať po aktualizácii macOS? Prečo sa kazí, čo robiť a najlepšie alternatívy pre rok 2026." },
    "soundsource-alternative-mac": { t: "Alternatíva k SoundSource: Ľahšie a lacnejšie ovládanie hlasitosti pre Mac", d: "SoundSource je výkonný, ale drahý a zložitý. Ak potrebujete len hlasitosť pre jednotlivé aplikácie, tu je čo použiť." },
    "mac-volume-too-loud-at-lowest-setting": { t: "Mac príliš hlasný na najnižšom nastavení? Ako ísť ešte tichšie", d: "Aj na najnižšom stupni je Mac príliš hlasný — najmä v noci so slúchadlami. Ako získať jemnejšie ovládanie a ísť pod minimum." },
    "one-airpod-louder-than-the-other-fix": { t: "Jeden AirPod hlasnejší ako druhý? Všetky opravy vysvetlené", d: "Ľavý AirPod je tichší ako pravý (alebo naopak). Každá príčina — od ušného mazu po nastavenia vyváženia — a ako to opraviť." },
    "netflix-streaming-audio-too-quiet-mac": { t: "Netflix a streamovací zvuk príliš tichý na Macu? Ako to opraviť", d: "Dialógy sú šeptom tiché, potom výbuch otrasie miestnosťou. Ako opraviť úrovne streamovacieho zvuku a zosilniť cez 100 %." },
    "mac-audio-setup-remote-work": { t: "Nastavenie zvuku na Macu pre vzdialenú prácu: Kompletný sprievodca", d: "Hovory, hudba, oznámenia a sústreďovanie — všetko na jednom Macu. Ako nastaviť zvuk, aby nič nebojovalo o vašu pozornosť." },
    "stop-browser-tabs-auto-playing-audio-mac": { t: "Ako zastaviť automatické prehrávanie zvuku v kartách prehliadača na Macu", d: "Karta na pozadí začne prehrávať zvuk. Reklamy, videá, spravodajské weby — ako stíšiť neposlušné karty a ovládať zvuk prehliadača." },
    "discord-volume-too-loud-mac": { t: "Discord príliš hlasný (alebo tichý) na Macu? Ako to opraviť", d: "Discord prehlušuje hru, alebo je príliš tichý na počutie spoluhráčov. Ako ovládať hlasitosť Discordu nezávisle na macOS." },
    "switch-audio-output-quickly-mac": { t: "Ako rýchlo prepnúť zvukový výstup na Macu (bez preklikávania nastavení)", d: "Prepínanie medzi reproduktormi, slúchadlami a monitormi vyžaduje príliš veľa kliknutí. Rýchlejšie spôsoby prepnutia výstupného zariadenia." },
    "fix-audio-crackling-popping-mac": { t: "Oprava praskania a lupkania zvuku na Macu: Kompletný sprievodca", d: "Zvuk Macu praská, lupká alebo sa zadrháva — pri hudbe, hovoroch alebo videu. Každá známa príčina a oprava zvukových chýb." },
    "teams-volume-too-low-mac": { t: "Microsoft Teams príliš tichý na Macu? Každá oprava, ktorá funguje", d: "Sotva počujete ľudí na Teams aj na maximálnej hlasitosti? Každá príčina a ako zosilniť zvuk hovoru cez 100 %." },
    "how-to-control-per-app-volume-on-mac": { t: "Ako ovládať hlasitosť pre jednotlivé aplikácie na Macu", d: "macOS dáva jeden posúvač hlasitosti pre všetko. Ako získať individuálne ovládanie pre každú aplikáciu — a prečo na tom záleží viac, ako si myslíte." },
    "mute-slack-notifications-mac-without-muting-everything": { t: "Ako stíšiť Slack na Macu bez stíšenia všetkého ostatného", d: "Oznámenia Slacku neustále rušia sústreďovanie, ale nechcete stíšiť hudbu alebo hovory. Ako stíšiť len Slack na macOS." },
    "volume-profiles-for-mac": { t: "Ako nastaviť profily hlasitosti pre rôzne situácie na Macu", d: "Rôzne nastavenia hlasitosti pre schôdzky, sústredenú prácu, hranie a relaxáciu — prepínateľné jedným kliknutím. Ako fungujú profily hlasitosti." },
    "zoom-call-volume-too-low-mac": { t: "Hovor na Zoome príliš tichý na Macu? Ako ho zosilniť", d: "Sotva počujete ľudí na Zoome. Každá oprava — od nastavení Zoomu po zosilnenie zvuku hovoru cez 100 %." },
    "lower-spotify-without-lowering-everything-mac": { t: "Ako stíšiť Spotify bez stíšenia všetkého ostatného na Macu", d: "Chcete Spotify ako hudbu na pozadí, ale zníženie hlasitosti klávesmi stíši aj hovor a všetko ostatné. Tu je oprava." },
    "macos-tahoe-per-app-volume-control": { t: "Má macOS Tahoe ovládanie hlasitosti pre jednotlivé aplikácie?", d: "macOS Tahoe priniesol veľké aktualizácie, ale pridal Apple konečne mixér hlasitosti? Odpoveď — a ako získať ovládanie hneď teraz." },
    "play-music-speakers-calls-headphones-mac": { t: "Ako prehrávať hudbu na reproduktoroch a hovory v slúchadlách (Mac)", d: "Chcete Spotify na reproduktoroch a Zoom v AirPods súčasne? macOS to neuľahčuje — čo skutočne funguje." },
    "mac-volume-keeps-changing-by-itself": { t: "Hlasitosť Macu sa mení sama od seba: Ako to opraviť", d: "Hlasitosť Macu náhodne skočí hore, klesne dolu alebo sa resetuje. Každá známa príčina a ako to zastaviť." },
    "best-volume-mixer-apps-mac-2026": { t: "Najlepšie aplikácie mixéra hlasitosti pre Mac v roku 2026", d: "Priame porovnanie každej aplikácie pre Mac s ovládaním hlasitosti pre jednotlivé aplikácie. Funkcie, ceny a ktorá stojí za to." },
    "youtube-too-quiet-safari-chrome-mac": { t: "YouTube príliš tichý v Safari alebo Chrome na Macu? Opravte to okamžite", d: "Niektoré videá na YouTube sú sotva počuteľné. Prečo je zvuk prehliadača tichší a ako ho zosilniť cez 100 %." },
    "mac-notification-sounds-too-loud-headphones": { t: "Zvuky oznámení na Macu príliš hlasné v slúchadlách? Tu je oprava", d: "Pípnutia Slacku a upozornenia macOS sú bolestivo hlasné v slúchadlách. Prečo sa líšia — a ako ich skrotiť." },
    "stop-zoom-lowering-music-mac": { t: "Ako zastaviť Zoom v stíšení hudby na Macu", d: "Zakaždým, keď sa pripojíte k hovoru na Zoome, hudba zmizne. Prečo sa to deje a ako ovládať, čo sa stíši — podľa vašich podmienok." },
    "airpods-volume-too-low-mac": { t: "AirPods príliš tiché na Macu? Všetky opravy vysvetlené", d: "AirPods znejú na Macu ticho aj na plnú hlasitosť? Všetky príčiny — od ochrany sluchu po Bluetooth — a ako ich opraviť." },
    "spotify-volume-too-low-mac": { t: "Spotify príliš tichý na Macu? Tu je každá oprava", d: "Spotify na maximálnej hlasitosti, ale stále príliš tichý? Každá príčina — od limitéra Spotify po nastavenia macOS — a ako zosilniť cez 100 %." },
    "separate-game-audio-from-discord-mac": { t: "Ako oddeliť zvuk hry od Discordu na Macu", d: "Výbuchy v hre prehlušujú spoluhráčov na Discorde? Ako nezávisle ovládať zvuk hry a hlasového chatu na macOS." },
    "why-doesnt-mac-have-volume-mixer": { t: "Prečo Mac nemá mixér hlasitosti ako Windows?", d: "Windows má ovládanie hlasitosti od roku 2006. Je rok 2026 a macOS stále nie. Skutočný dôvod — a ako ho aj tak získať." },
    "boost-mac-volume-beyond-100-percent": { t: "Mac príliš tichý? Ako zosilniť zvuk cez 100 %", d: "Mac je na plnej hlasitosti a stále príliš tichý. Prečo sa to deje a ako zosilniť zvuk až na 200 % bez externých reproduktorov." },
    "auto-lower-music-during-zoom-calls-mac": { t: "Ako automaticky stíšiť hudbu počas hovorov na Zoome na Macu", d: "Zakaždým, keď začne hovor na Zoome, ponáhľate sa pozastaviť Spotify. Automatické stíšenie zníži hudbu automaticky, keď sa aktivuje mikrofón." },
    "how-to-mute-one-app-on-mac": { t: "Ako stíšiť jednu aplikáciu na Macu bez stíšenia všetkého", d: "Slack pípa. Ste na hovore. Chcete stíšiť Slack, ale počuť hovor. macOS to neumožňuje — ako to urobiť." },
    "volume-mixer-for-mac": { t: "Mixér hlasitosti pre Mac: Chýbajúca funkcia, ktorú macOS stále nemá", d: "Windows má mixér hlasitosti od roku 2006. Prečo ho macOS stále nemá — a najlepší spôsob, ako získať ovládanie hlasitosti na Macu v roku 2026." },
  },
  hr: {
    "mac-audio-podcasting-setup": { t: "Zvuk na Macu za podcaste: Kontrolirajte što čujete tijekom snimanja", d: "Snimanje podcasta uz praćenje razina, slušanje gosta i upravljanje obavijestima — sve se natječe za jedan klizač glasnoće. Evo boljeg rješenja." },
    "mac-too-loud-full-volume-tame-it": { t: "Zašto je moj Mac tako glasan na punoj glasnoći? Kako dobiti finiju kontrolu", d: "Zvučnici MacBooka Pro su izvrsni — dok ne počnu urlati. Ako i umjerena glasnoća djeluje preglasno, evo kako dobiti precizniju kontrolu zvuka." },
    "slack-huddle-volume-issues-mac": { t: "Problemi s glasnoćom Slack Huddlea na Macu: Pretiho, preglasno ili se bori s glazbom", d: "Slack huddles se natječu s vašom glazbom i obavijestima za istu glasnoću. Kako kontrolirati zvuk huddlea neovisno o svemu ostalom na Macu." },
    "set-default-volume-new-apps-mac": { t: "Kako postaviti zadanu glasnoću za nove aplikacije na Macu", d: "Nove aplikacije se pokreću na punoj glasnoći. Kako osigurati da svaka nova aplikacija počinje na ugodnoj razini." },
    "mac-startup-sound-too-loud": { t: "Zvuk pokretanja Maca je preglasan? Kako ga onemogućiti ili utišati", d: "Zvono pri pokretanju Maca svira na punoj glasnoći — posebno neugodno na sastancima. Kako ga utišati ili kontrolirati." },
    "webex-volume-too-low-mac": { t: "Cisco Webex je na Macu pretih? Kako to popraviti", d: "Pozivi na Webexu su na Macu jedva čujni. Svaki popravak — od postavki zvuka do pojačanja glasnoće preko 100 %." },
    "mac-two-audio-sources-same-time": { t: "Kako slušati dvije stvari odjednom na Macu bez ludila", d: "Glazba i podcast. Predavanje i video. Poziv i glazba u pozadini. macOS vas tjera da odaberete jednu glasnoću za oboje — kako ih uravnotežiti." },
    "watch-movies-mac-late-night-volume": { t: "Kako gledati filmove na Macu bez buđenja svih", d: "Dijalozi su nečujni, zatim eksplozije tresu zidove. Kako ukrotiti zvuk filma za noćno gledanje na Macu." },
    "mac-volume-resets-after-sleep": { t: "Glasnoća Maca se resetira nakon mirovanja? Kako zadržati postavke zvuka", d: "Svaki put kad se Mac probudi iz mirovanja, glasnoća je pogrešna. Zašto i kako to popraviti." },
    "mac-audio-music-production-daw": { t: "Zvuk na Macu za glazbenu produkciju: Kontrolirajte DAW i komunikaciju odvojeno", d: "Koristite Logic Pro ili Ableton dok ste na Discord pozivu? Kako čuti DAW na punoj kvaliteti i održati glasovni chat ugodnim." },
    "apple-music-volume-too-low-mac": { t: "Apple Music je na Macu pretih? Kako to popraviti i pojačati", d: "Apple Music na maksimalnoj glasnoći ali još uvijek pretih? Provjerite Sound Check, EQ i naučite pojačati preko 100 %." },
    "free-volume-mixer-mac": { t: "Besplatni mikser glasnoće za Mac: Što stvarno dobivate (a što ne)", d: "Tražite besplatni mikser glasnoće po aplikaciji za Mac? Pošteni pregled besplatnih opcija, što im nedostaje i kad se isplati platiti." },
    "balance-music-voice-chat-volume-mac": { t: "Kako uravnotežiti glasnoću glazbe i glasovnog chata na Macu", d: "Glazba je preglasna preko Discorda. Ili je poziv pretih pod Spotifyjem. macOS ne dopušta uravnoteženje — kako postaviti savršen omjer." },
    "mac-volume-control-complete-guide": { t: "Kontrola glasnoće na Macu: Kompletni vodič (2026)", d: "Sve o kontroli zvuka na macOS-u — od tipkovničkih prečica do glasnoće po aplikaciji, prebacivanja izlaza i automatizacije." },
    "vlc-volume-too-low-mac": { t: "VLC je na Macu pretih? Kako pojačati preko 200 %", d: "VLC na maksimalnoj glasnoći ali video još uvijek pretih? VLC ima ugrađeno pojačanje na 200 % — i možete ići još dalje." },
    "disable-audio-ducking-mac": { t: "Kako onemogućiti automatsko utišavanje zvuka na Macu (ili ga kontrolirati sami)", d: "macOS ili vaše aplikacije utišavaju glazbu tijekom poziva bez pitanja. Kako zaustaviti neželjeno utišavanje — ili ga zamijeniti utišavanjem koje kontrolirate." },
    "bluetooth-headphones-too-quiet-mac": { t: "Bluetooth slušalice pretihe na Macu? Svaki popravak koji funkcionira", d: "Bluetooth slušalice rade odlično na telefonu ali zvuče tiho na Macu. Svaki uzrok i kako ga popraviti." },
    "mac-audio-obs-streaming-setup": { t: "Zvuk na Macu za OBS i streaming: Kako kontrolirati što čuju gledatelji", d: "Streamate na Macu s OBS-om? Gledatelji čuju sve na istoj glasnoći. Kako pravilno uravnotežiti izvore zvuka." },
    "make-mac-remember-volume-per-app": { t: "Kako natjerati Mac da zapamti glasnoću za svaku aplikaciju", d: "Svaki put kad restartate Spotify ili Zoom, morate ponovno postaviti glasnoću. Kako osigurati da macOS automatski pamti razinu svake aplikacije." },
    "podcast-volume-too-low-mac": { t: "Podcast je na Macu pretih? Kako ga pojačati", d: "Neki podcastovi su šaptom tihi čak i na maksimalnoj glasnoći. Zašto — i kako pojačati preko 100 % bez utjecaja na druge aplikacije." },
    "mac-audio-online-classes-lectures": { t: "Postavke zvuka na Macu za online nastavu i predavanja", d: "Gledanje predavanja, pisanje bilješki, traženje referenci i chat s kolegama — sve na različitim glasnoćama. Kako upravljati studentskim zvukom." },
    "mac-sound-not-working-after-update": { t: "Zvuk na Macu ne radi nakon ažuriranja? Kompletni vodič za popravak", d: "Ažurirali ste macOS i zvuk je nestao, pucketa ili je zapeo. Svaki popravak za vraćanje zvuka na Macu." },
    "mute-all-apps-keyboard-shortcut-mac": { t: "Kako utišati sve aplikacije odjednom na Macu (i savršeno ih vratiti)", d: "Trebate trenutnu tišinu? Tipka za utišavanje utišava sve — ali vraćanje resetira uravnotežene glasnoće. Bolji način na Macu." },
    "google-meet-volume-too-low-mac": { t: "Google Meet je na Macu pretih? Kako to popraviti", d: "Glasovi na Google Meetu su jedva čujni. Zašto Meet radi kroz Chrome, što to znači za zvuk i kako ga pojačati." },
    "mac-alert-volume-separate-from-media": { t: "Kako postaviti glasnoću upozorenja odvojeno od medija na Macu", d: "macOS ima skriveni klizač glasnoće upozorenja, ali pokriva samo sistemske zvukove. Kako stvarno odvojiti glasnoću obavijesti i medija." },
    "facetime-volume-too-low-mac": { t: "FaceTime je na Macu pretih? Kako to popraviti", d: "Zvuk FaceTimea je na Macu jedva čujan čak i na punoj glasnoći. Svaki popravak — od postavki zvuka do pojačanja preko 100 %." },
    "mac-volume-keyboard-shortcuts": { t: "Tipkovničke prečice za glasnoću na Macu koje vjerojatno ne poznajete", d: "Osim osnovnih tipki glasnoće — fina kontrola, utišavanje pojedinih aplikacija i prečice za glasnoću. Svaki trik sa zvukom na Macu." },
    "background-music-app-not-working-mac": { t: "Aplikacija Background Music ne radi na macOS-u? Isprobajte ove alternative", d: "Background Music je prestala raditi nakon ažuriranja macOS-a? Zašto se kvari, što učiniti i najbolje alternative za 2026." },
    "soundsource-alternative-mac": { t: "Alternativa za SoundSource: Lakša i jeftinija kontrola glasnoće za Mac", d: "SoundSource je moćan ali skup i složen. Ako trebate samo glasnoću po aplikaciji, evo što koristiti umjesto toga." },
    "mac-volume-too-loud-at-lowest-setting": { t: "Mac preglasan na najnižoj postavci? Kako ići još tiše", d: "Čak i na najnižem stupnju Mac je preglasan — posebno noću sa slušalicama. Kako dobiti finiju kontrolu i ići ispod minimuma." },
    "one-airpod-louder-than-the-other-fix": { t: "Jedan AirPod glasniji od drugog? Svi popravci objašnjeni", d: "Lijevi AirPod je tiši od desnog (ili obrnuto). Svaki uzrok — od ušnog voska do postavki ravnoteže — i kako to popraviti." },
    "netflix-streaming-audio-too-quiet-mac": { t: "Netflix i streaming zvuk pretih na Macu? Kako to popraviti", d: "Dijalozi su šaptom tihi, zatim eksplozija potrese sobu. Kako popraviti razine streaming zvuka i pojačati preko 100 %." },
    "mac-audio-setup-remote-work": { t: "Postavke zvuka na Macu za rad na daljinu: Kompletni vodič", d: "Pozivi, glazba, obavijesti i fokus — sve na jednom Macu. Kako postaviti zvuk da se ništa ne natječe za vašu pažnju." },
    "stop-browser-tabs-auto-playing-audio-mac": { t: "Kako zaustaviti automatsko reproduciranje zvuka u karticama preglednika na Macu", d: "Kartica u pozadini počne reproducirati zvuk. Reklame, videa, vijesti — kako utišati neposlušne kartice i kontrolirati zvuk preglednika." },
    "discord-volume-too-loud-mac": { t: "Discord preglasan (ili pretih) na Macu? Kako to popraviti", d: "Discord nadglašava igru, ili je pretih za čuti suigrače. Kako kontrolirati glasnoću Discorda neovisno na macOS-u." },
    "switch-audio-output-quickly-mac": { t: "Kako brzo prebaciti audio izlaz na Macu (bez kopanja po postavkama)", d: "Prebacivanje između zvučnika, slušalica i monitora zahtijeva previše klikova. Brži načini promjene izlaznog uređaja." },
    "fix-audio-crackling-popping-mac": { t: "Popravak pucketanja i pucanja zvuka na Macu: Kompletni vodič", d: "Zvuk Maca pucketa, puca ili zapinje — tijekom glazbe, poziva ili videa. Svaki poznati uzrok i popravak zvučnih grešaka." },
    "teams-volume-too-low-mac": { t: "Microsoft Teams pretih na Macu? Svaki popravak koji funkcionira", d: "Jedva čujete ljude na Teamsu čak i na maksimalnoj glasnoći? Svaki uzrok i kako pojačati zvuk poziva preko 100 %." },
    "how-to-control-per-app-volume-on-mac": { t: "Kako kontrolirati glasnoću po aplikaciji na Macu", d: "macOS daje jedan klizač glasnoće za sve. Kako dobiti individualnu kontrolu za svaku aplikaciju — i zašto je to važnije nego mislite." },
    "mute-slack-notifications-mac-without-muting-everything": { t: "Kako utišati Slack na Macu bez utišavanja svega ostalog", d: "Obavijesti Slacka neprestano prekidaju fokus, ali ne želite utišati glazbu ili pozive. Kako utišati samo Slack na macOS-u." },
    "volume-profiles-for-mac": { t: "Kako postaviti profile glasnoće za različite situacije na Macu", d: "Različite postavke glasnoće za sastanke, fokus, igranje i opuštanje — prebacive jednim klikom. Kako funkcioniraju profili glasnoće." },
    "zoom-call-volume-too-low-mac": { t: "Zoom poziv pretih na Macu? Kako ga pojačati", d: "Jedva čujete ljude na Zoomu. Svaki popravak — od postavki Zooma do pojačanja zvuka poziva preko 100 %." },
    "lower-spotify-without-lowering-everything-mac": { t: "Kako utišati Spotify bez utišavanja svega ostalog na Macu", d: "Želite Spotify kao pozadinsku glazbu, ali smanjenje glasnoće tipkama utišava i poziv i sve ostalo. Evo rješenja." },
    "macos-tahoe-per-app-volume-control": { t: "Ima li macOS Tahoe kontrolu glasnoće po aplikaciji?", d: "macOS Tahoe donio je velika ažuriranja, ali je li Apple konačno dodao mikser glasnoće? Odgovor — i kako dobiti kontrolu odmah." },
    "play-music-speakers-calls-headphones-mac": { t: "Kako reproducirati glazbu na zvučnicima i pozive na slušalicama (Mac)", d: "Želite Spotify na stolnim zvučnicima i Zoom u AirPodsima istovremeno? macOS to ne olakšava — što stvarno funkcionira." },
    "mac-volume-keeps-changing-by-itself": { t: "Glasnoća Maca se mijenja sama od sebe: Kako to popraviti", d: "Glasnoća Maca nasumično skoči gore, padne dolje ili se resetira. Svaki poznati uzrok i kako to zaustaviti." },
    "best-volume-mixer-apps-mac-2026": { t: "Najbolje aplikacije miksera glasnoće za Mac u 2026.", d: "Izravna usporedba svake Mac aplikacije s kontrolom glasnoće po aplikaciji. Značajke, cijene i koja se stvarno isplati." },
    "youtube-too-quiet-safari-chrome-mac": { t: "YouTube pretih u Safariju ili Chromeu na Macu? Popravite to odmah", d: "Neki YouTube videa su jedva čujni. Zašto je zvuk preglednika tiši i kako ga pojačati preko 100 %." },
    "mac-notification-sounds-too-loud-headphones": { t: "Zvukovi obavijesti na Macu preglasni u slušalicama? Evo popravka", d: "Zvukovi Slacka i macOS upozorenja su bolno glasni u slušalicama. Zašto se razlikuju — i kako ih ukrotiti." },
    "stop-zoom-lowering-music-mac": { t: "Kako spriječiti Zoom da utišava glazbu na Macu", d: "Svaki put kad se pridružite Zoom pozivu, glazba nestane. Zašto se to događa i kako kontrolirati što se utišava — po vašim uvjetima." },
    "airpods-volume-too-low-mac": { t: "AirPods pretihi na Macu? Svi popravci objašnjeni", d: "AirPods zvuče tiho na Macu čak i na punu glasnoću? Svi uzroci — od zaštite sluha do Bluetootha — i kako ih popraviti." },
    "spotify-volume-too-low-mac": { t: "Spotify pretih na Macu? Evo svakog popravka", d: "Spotify na maksimalnoj glasnoći ali još uvijek pretih? Svaki uzrok — od Spotify limitera do macOS postavki — i kako pojačati preko 100 %." },
    "separate-game-audio-from-discord-mac": { t: "Kako odvojiti zvuk igre od Discorda na Macu", d: "Eksplozije u igri nadglašavaju suigrače na Discordu? Kako neovisno kontrolirati zvuk igre i glasovnog chata na macOS-u." },
    "why-doesnt-mac-have-volume-mixer": { t: "Zašto Mac nema mikser glasnoće kao Windows?", d: "Windows ima kontrolu glasnoće od 2006. Sada je 2026. i macOS još uvijek nema. Pravi razlog — i kako ga ipak dobiti." },
    "boost-mac-volume-beyond-100-percent": { t: "Mac pretih? Kako pojačati zvuk preko 100 %", d: "Mac je na punoj glasnoći i još uvijek pretih. Zašto se to događa i kako pojačati zvuk do 200 % bez vanjskih zvučnika." },
    "auto-lower-music-during-zoom-calls-mac": { t: "Kako automatski utišati glazbu tijekom Zoom poziva na Macu", d: "Svaki put kad počne Zoom poziv, žurite pauzirati Spotify. Automatsko utišavanje smanjuje glazbu automatski kad se aktivira mikrofon." },
    "how-to-mute-one-app-on-mac": { t: "Kako utišati jednu aplikaciju na Macu bez utišavanja svega", d: "Slack zvoni. Na pozivu ste. Želite utišati Slack ali čuti poziv. macOS to ne dopušta — kako to napraviti." },
    "volume-mixer-for-mac": { t: "Mikser glasnoće za Mac: Značajka koja macOS-u još uvijek nedostaje", d: "Windows ima mikser glasnoće od 2006. Zašto ga macOS još nema — i najbolji način da dobijete kontrolu glasnoće na Macu u 2026." },
  },
  uk: {
    "mac-audio-podcasting-setup": { t: "Звук на Mac для подкастів: Контролюйте, що чуєте під час запису", d: "Запис подкасту з моніторингом рівнів, прослуховуванням гостя та керуванням сповіщеннями — все змагається за один повзунок гучності. Ось краще рішення." },
    "mac-too-loud-full-volume-tame-it": { t: "Чому мій Mac такий гучний на повній гучності? Як отримати точніше керування", d: "Динаміки MacBook Pro чудові — поки не починають ревіти. Якщо навіть помірна гучність здається занадто гучною, ось як отримати точніше керування звуком." },
    "slack-huddle-volume-issues-mac": { t: "Проблеми з гучністю Slack Huddle на Mac: Занадто тихо, занадто гучно або конкурує з музикою", d: "Slack huddles конкурують з вашою музикою та сповіщеннями за ту саму гучність. Як контролювати звук huddle незалежно від всього іншого на Mac." },
    "set-default-volume-new-apps-mac": { t: "Як встановити стандартну гучність для нових додатків на Mac", d: "Нові додатки запускаються на повній гучності за замовчуванням. Як зробити, щоб кожен новий додаток починав на комфортному рівні." },
    "mac-startup-sound-too-loud": { t: "Звук запуску Mac занадто гучний? Як вимкнути або зменшити", d: "Звук запуску Mac грає на повній гучності — особливо незручно на нарадах. Як вимкнути або контролювати його." },
    "webex-volume-too-low-mac": { t: "Cisco Webex занадто тихий на Mac? Як виправити", d: "Дзвінки у Webex на Mac ледь чутні. Кожне виправлення — від налаштувань звуку до підсилення гучності понад 100 %." },
    "mac-two-audio-sources-same-time": { t: "Як слухати дві речі одночасно на Mac без збожевоління", d: "Музика і подкаст. Лекція і відео. Дзвінок і фонова музика. macOS змушує обрати одну гучність для обох — як їх збалансувати." },
    "watch-movies-mac-late-night-volume": { t: "Як дивитися фільми на Mac, не розбудивши всіх", d: "Діалоги нечутні, потім вибухи трясуть стіни. Як приборкати звук фільму для нічного перегляду на Mac." },
    "mac-volume-resets-after-sleep": { t: "Гучність Mac скидається після сну? Як зберегти налаштування звуку", d: "Щоразу, коли Mac прокидається зі сну, гучність неправильна. Чому і як це виправити." },
    "mac-audio-music-production-daw": { t: "Звук на Mac для музичного виробництва: Контролюйте DAW і комунікацію окремо", d: "Використовуєте Logic Pro або Ableton під час дзвінка в Discord? Як чути DAW на повній якості та тримати голосовий чат комфортним." },
    "apple-music-volume-too-low-mac": { t: "Apple Music занадто тихий на Mac? Як виправити та підсилити", d: "Apple Music на максимальній гучності, але все ще занадто тихий? Перевірте Sound Check, EQ та навчіться підсилювати понад 100 %." },
    "free-volume-mixer-mac": { t: "Безкоштовний мікшер гучності для Mac: Що ви насправді отримуєте (а що ні)", d: "Шукаєте безкоштовний мікшер гучності для Mac? Чесний огляд безкоштовних варіантів, чого їм бракує і коли варто платити." },
    "balance-music-voice-chat-volume-mac": { t: "Як збалансувати гучність музики та голосового чату на Mac", d: "Музика занадто гучна через Discord. Або дзвінок занадто тихий під Spotify. macOS не дозволяє збалансувати — як налаштувати ідеальне співвідношення." },
    "mac-volume-control-complete-guide": { t: "Керування гучністю на Mac: Повний посібник (2026)", d: "Все про керування звуком на macOS — від гарячих клавіш до гучності для кожного додатку, перемикання виходу та автоматизації." },
    "vlc-volume-too-low-mac": { t: "VLC занадто тихий на Mac? Як підсилити понад 200 %", d: "VLC на максимальній гучності, але відео все ще занадто тихе? VLC має вбудоване підсилення до 200 % — і можна піти ще далі." },
    "disable-audio-ducking-mac": { t: "Як вимкнути автоматичне приглушення звуку на Mac (або контролювати його самому)", d: "macOS або ваші додатки приглушують музику під час дзвінків без запиту. Як зупинити небажане приглушення — або замінити його на те, яке контролюєте ви." },
    "bluetooth-headphones-too-quiet-mac": { t: "Bluetooth навушники занадто тихі на Mac? Кожне виправлення, що працює", d: "Bluetooth навушники чудово працюють на телефоні, але тихо звучать на Mac. Кожна причина і як її виправити." },
    "mac-audio-obs-streaming-setup": { t: "Звук на Mac для OBS і стримінгу: Як контролювати, що чують глядачі", d: "Стримите на Mac з OBS? Глядачі чують все на однаковій гучності. Як правильно збалансувати джерела звуку." },
    "make-mac-remember-volume-per-app": { t: "Як змусити Mac запам'ятати гучність для кожного додатку", d: "Щоразу, коли перезапускаєте Spotify або Zoom, потрібно переналаштовувати гучність. Як macOS автоматично запам'ятає рівень кожного додатку." },
    "podcast-volume-too-low-mac": { t: "Подкаст занадто тихий на Mac? Як його підсилити", d: "Деякі подкасти шепочуть навіть на максимальній гучності. Чому — і як підсилити понад 100 % без впливу на інші додатки." },
    "mac-audio-online-classes-lectures": { t: "Налаштування звуку на Mac для онлайн-занять та лекцій", d: "Перегляд лекції, нотатки, пошук та чат з одногрупниками — все на різних гучностях. Як керувати студентським звуком на Mac." },
    "mac-sound-not-working-after-update": { t: "Звук на Mac не працює після оновлення? Повний посібник з виправлення", d: "Оновили macOS і звук зник, тріщить або застряг. Кожне виправлення для відновлення звуку на Mac." },
    "mute-all-apps-keyboard-shortcut-mac": { t: "Як вимкнути звук у всіх додатках одразу на Mac (і ідеально відновити)", d: "Потрібна миттєва тиша? Клавіша вимкнення звуку вимикає все — але повернення скидає збалансовані гучності. Кращий спосіб на Mac." },
    "google-meet-volume-too-low-mac": { t: "Google Meet занадто тихий на Mac? Як виправити", d: "Голоси у Google Meet ледь чутні. Чому Meet працює через Chrome, що це означає для звуку і як його підсилити." },
    "mac-alert-volume-separate-from-media": { t: "Як встановити гучність сповіщень окремо від медіа на Mac", d: "macOS має прихований повзунок гучності сповіщень, але він охоплює лише системні звуки. Як справді розділити гучність сповіщень і медіа." },
    "facetime-volume-too-low-mac": { t: "FaceTime занадто тихий на Mac? Як виправити", d: "Звук FaceTime на Mac ледь чутний навіть на повній гучності. Кожне виправлення — від налаштувань звуку до підсилення понад 100 %." },
    "mac-volume-keyboard-shortcuts": { t: "Гарячі клавіші гучності на Mac, які ви, ймовірно, не знаєте", d: "Окрім базових клавіш гучності — тонке керування, вимкнення звуку конкретних додатків та гарячі клавіші для гучності. Кожен трюк зі звуком на Mac." },
    "background-music-app-not-working-mac": { t: "Додаток Background Music не працює на macOS? Спробуйте ці альтернативи", d: "Background Music перестав працювати після оновлення macOS? Чому ламається, що робити і найкращі альтернативи на 2026 рік." },
    "soundsource-alternative-mac": { t: "Альтернатива SoundSource: Легше і дешевше керування гучністю для Mac", d: "SoundSource потужний, але дорогий і складний. Якщо потрібна лише гучність для кожного додатку, ось що використати." },
    "mac-volume-too-loud-at-lowest-setting": { t: "Mac занадто гучний на найнижчому рівні? Як стати ще тихішим", d: "Навіть на найнижчому рівні Mac занадто гучний — особливо вночі з навушниками. Як отримати тонше керування і піти нижче мінімуму." },
    "one-airpod-louder-than-the-other-fix": { t: "Один AirPod гучніший за інший? Усі виправлення пояснені", d: "Лівий AirPod тихіший за правий (або навпаки). Кожна причина — від вушної сірки до налаштувань балансу — і як це виправити." },
    "netflix-streaming-audio-too-quiet-mac": { t: "Netflix і потоковий звук занадто тихий на Mac? Як виправити", d: "Діалоги шепочуть, потім вибух трясе кімнату. Як виправити рівні потокового звуку і підсилити понад 100 %." },
    "mac-audio-setup-remote-work": { t: "Налаштування звуку на Mac для віддаленої роботи: Повний посібник", d: "Дзвінки, музика, сповіщення і зосередження — все на одному Mac. Як налаштувати звук, щоб нічого не боролося за вашу увагу." },
    "stop-browser-tabs-auto-playing-audio-mac": { t: "Як зупинити автоматичне відтворення звуку у вкладках браузера на Mac", d: "Фонова вкладка починає відтворювати звук. Реклама, відео, новини — як вимкнути неслухняні вкладки і контролювати звук браузера." },
    "discord-volume-too-loud-mac": { t: "Discord занадто гучний (або тихий) на Mac? Як виправити", d: "Discord заглушає гру, або занадто тихий для чутності тіммейтів. Як контролювати гучність Discord незалежно на macOS." },
    "switch-audio-output-quickly-mac": { t: "Як швидко перемкнути аудіовихід на Mac (без копання в налаштуваннях)", d: "Перемикання між динаміками, навушниками та моніторами вимагає занадто багато кліків. Швидші способи зміни вихідного пристрою." },
    "fix-audio-crackling-popping-mac": { t: "Виправлення тріскання та клацання звуку на Mac: Повний посібник", d: "Звук Mac тріщить, клацає або заїкається — під час музики, дзвінків або відео. Кожна відома причина і виправлення звукових збоїв." },
    "teams-volume-too-low-mac": { t: "Microsoft Teams занадто тихий на Mac? Кожне виправлення, що працює", d: "Ледь чуєте людей у Teams навіть на максимальній гучності? Кожна причина і як підсилити звук дзвінка понад 100 %." },
    "how-to-control-per-app-volume-on-mac": { t: "Як контролювати гучність для кожного додатку на Mac", d: "macOS дає один повзунок гучності для всього. Як отримати індивідуальне керування для кожного додатку — і чому це важливіше, ніж ви думаєте." },
    "mute-slack-notifications-mac-without-muting-everything": { t: "Як вимкнути звук Slack на Mac без вимкнення всього іншого", d: "Сповіщення Slack постійно відволікають, але ви не хочете вимикати музику чи дзвінки. Як вимкнути лише Slack на macOS." },
    "volume-profiles-for-mac": { t: "Як налаштувати профілі гучності для різних ситуацій на Mac", d: "Різні налаштування гучності для нарад, зосередженої роботи, ігор і відпочинку — перемикання одним кліком. Як працюють профілі гучності." },
    "zoom-call-volume-too-low-mac": { t: "Дзвінок Zoom занадто тихий на Mac? Як підсилити", d: "Ледь чуєте людей у Zoom. Кожне виправлення — від налаштувань Zoom до підсилення звуку дзвінка понад 100 %." },
    "lower-spotify-without-lowering-everything-mac": { t: "Як зменшити гучність Spotify без зменшення всього іншого на Mac", d: "Хочете Spotify як фонову музику, але зменшення гучності клавішами зменшує і дзвінок, і все інше. Ось рішення." },
    "macos-tahoe-per-app-volume-control": { t: "Чи є у macOS Tahoe керування гучністю для кожного додатку?", d: "macOS Tahoe приніс великі оновлення, але чи додала Apple нарешті мікшер гучності? Відповідь — і як отримати керування прямо зараз." },
    "play-music-speakers-calls-headphones-mac": { t: "Як відтворювати музику на динаміках і дзвінки в навушниках (Mac)", d: "Хочете Spotify на настільних динаміках і Zoom у AirPods одночасно? macOS це не спрощує — що насправді працює." },
    "mac-volume-keeps-changing-by-itself": { t: "Гучність Mac змінюється сама по собі: Як виправити", d: "Гучність Mac випадково стрибає вгору, падає вниз або скидається. Кожна відома причина і як це зупинити." },
    "best-volume-mixer-apps-mac-2026": { t: "Найкращі додатки мікшера гучності для Mac у 2026 році", d: "Пряме порівняння кожного додатку для Mac з керуванням гучністю для кожного додатку. Функції, ціни і який дійсно варто використовувати." },
    "youtube-too-quiet-safari-chrome-mac": { t: "YouTube занадто тихий у Safari або Chrome на Mac? Виправте миттєво", d: "Деякі відео YouTube ледь чутні. Чому звук браузера тихіший і як його підсилити понад 100 %." },
    "mac-notification-sounds-too-loud-headphones": { t: "Звуки сповіщень Mac занадто гучні в навушниках? Ось виправлення", d: "Звуки Slack і сповіщення macOS болісно гучні в навушниках. Чому вони відрізняються — і як їх приборкати." },
    "stop-zoom-lowering-music-mac": { t: "Як зупинити Zoom від приглушення музики на Mac", d: "Щоразу, коли приєднуєтесь до дзвінка Zoom, музика зникає. Чому це відбувається і як контролювати, що приглушується — на ваших умовах." },
    "airpods-volume-too-low-mac": { t: "AirPods занадто тихі на Mac? Усі виправлення пояснені", d: "AirPods тихо звучать на Mac навіть на повній гучності? Усі причини — від захисту слуху до Bluetooth — і як їх виправити." },
    "spotify-volume-too-low-mac": { t: "Spotify занадто тихий на Mac? Ось кожне виправлення", d: "Spotify на максимальній гучності, але все ще занадто тихий? Кожна причина — від обмежувача Spotify до налаштувань macOS — і як підсилити понад 100 %." },
    "separate-game-audio-from-discord-mac": { t: "Як розділити звук гри та Discord на Mac", d: "Вибухи у грі заглушують тіммейтів у Discord? Як незалежно контролювати звук гри та голосового чату на macOS." },
    "why-doesnt-mac-have-volume-mixer": { t: "Чому Mac не має мікшера гучності як Windows?", d: "Windows має керування гучністю з 2006 року. Зараз 2026, а macOS досі ні. Справжня причина — і як його все одно отримати." },
    "boost-mac-volume-beyond-100-percent": { t: "Mac занадто тихий? Як підсилити звук понад 100 %", d: "Mac на повній гучності і все ще занадто тихий. Чому це відбувається і як підсилити звук до 200 % без зовнішніх динаміків." },
    "auto-lower-music-during-zoom-calls-mac": { t: "Як автоматично приглушити музику під час дзвінків Zoom на Mac", d: "Щоразу, коли починається дзвінок Zoom, поспішаєте поставити Spotify на паузу. Автоматичне приглушення знижує музику автоматично, коли активується мікрофон." },
    "how-to-mute-one-app-on-mac": { t: "Як вимкнути звук одного додатку на Mac без вимкнення всього", d: "Slack пікає. Ви на дзвінку. Хочете вимкнути Slack, але чути дзвінок. macOS це не дозволяє — як це зробити." },
    "volume-mixer-for-mac": { t: "Мікшер гучності для Mac: Відсутня функція, якої macOS досі не має", d: "Windows має мікшер гучності з 2006 року. Чому macOS досі не має — і найкращий спосіб отримати керування гучністю на Mac у 2026." },
  },
};

// Now generate each file
function generateFile(lang, cfg) {
  const lines = enContent.split("\n");
  const result = [];
  let currentArticle = null;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Replace export name
    if (line.includes("export const enArticles: ArticleSet = {")) {
      result.push(`export const ${cfg.exportName}: ArticleSet = {`);
      continue;
    }

    // Detect article key
    const keyMatch = line.match(/^  "([^"]+)":\s*\{$/);
    if (keyMatch) {
      currentArticle = keyMatch[1];
      result.push(line);
      continue;
    }

    // Replace title
    if (currentArticle && line.match(/^\s*title:\s*"/)) {
      const td = titleDescTranslations[lang]?.[currentArticle];
      if (td) {
        result.push(`    title: "${td.t.replace(/"/g, '\\"')}",`);
        continue;
      }
    }

    // Replace description (single-line)
    if (currentArticle && line.match(/^\s*description:\s*"/)) {
      const td = titleDescTranslations[lang]?.[currentArticle];
      if (td) {
        result.push(`    description:`);
        result.push(`      "${td.d.replace(/"/g, '\\"')}",`);
        // Skip next line if it's the continuation of a multi-line description
        if (i + 1 < lines.length && lines[i + 1].match(/^\s*"/)) {
          i++; // skip
        }
        continue;
      }
    }

    // Replace description (multi-line: "description:" on its own line)
    if (currentArticle && line.match(/^\s*description:\s*$/)) {
      const td = titleDescTranslations[lang]?.[currentArticle];
      if (td) {
        result.push(`    description:`);
        result.push(`      "${td.d.replace(/"/g, '\\"')}",`);
        // Skip the next line which has the English description value
        if (i + 1 < lines.length && lines[i + 1].match(/^\s*"/)) {
          i++;
        }
        continue;
      }
    }

    // Replace readTime
    if (line.match(/^\s*readTime:\s*"\d+ min read"/)) {
      const min = line.match(/(\d+) min read/)[1];
      result.push(`    readTime: "${min} ${cfg.readTimeSuffix}",`);
      continue;
    }

    // For content: apply bulk text replacements
    if (currentArticle && !line.match(/^\s*(slug|title|description|date|readTime):/)) {
      const replacements = createReplacements(lang);
      for (const [en, translated] of replacements) {
        // Only replace outside of HTML attributes (simple heuristic: not inside quotes after =)
        // Simple approach: just do global string replacement
        line = line.split(en).join(translated);
      }
    }

    // Close article
    if (line.match(/^\s*\},?\s*$/) && currentArticle) {
      // Check if this is end of article (},) not end of sub-structure
      const trimmed = line.trim();
      if (trimmed === "}," || trimmed === "},") {
        currentArticle = null;
      }
    }

    result.push(line);
  }

  return result.join("\n");
}

for (const [lang, cfg] of Object.entries(langs)) {
  const output = generateFile(lang, cfg);
  const outPath = join(__dirname, `${lang}.ts`);
  writeFileSync(outPath, output, "utf8");

  // Verify article count
  const slugCount = (output.match(/slug:/g) || []).length;
  console.log(`${lang}.ts: ${slugCount} articles, ${output.split("\n").length} lines`);
}

console.log("Done!");
