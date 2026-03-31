export type Locale =
  | "en" | "de" | "fr" | "es" | "ja" | "ko" | "zh"
  | "pt" | "ru" | "it" | "nl" | "tr" | "ar" | "sv" | "pl";

export const LOCALES: { code: Locale; label: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "fr", label: "Francais", flag: "🇫🇷", dir: "ltr" },
  { code: "es", label: "Espanol", flag: "🇪🇸", dir: "ltr" },
  { code: "pt", label: "Portugues", flag: "🇧🇷", dir: "ltr" },
  { code: "it", label: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱", dir: "ltr" },
  { code: "sv", label: "Svenska", flag: "🇸🇪", dir: "ltr" },
  { code: "pl", label: "Polski", flag: "🇵🇱", dir: "ltr" },
  { code: "tr", label: "Turkce", flag: "🇹🇷", dir: "ltr" },
  { code: "ru", label: "Русский", flag: "🇷🇺", dir: "ltr" },
  { code: "ja", label: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "ko", label: "한국어", flag: "🇰🇷", dir: "ltr" },
  { code: "zh", label: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ar", label: "العربية", flag: "🇸🇦", dir: "rtl" },
];

interface QA { q: string; a: string }

interface Section { title: string; qas: QA[] }

interface Feature { icon: string; label: string; desc: string }

export interface PageContent {
  meta: { title: string; description: string };
  hero: { subtitle: string; description: string };
  featuresTitle: string;
  features: Feature[];
  faqTitle: string;
  sections: Section[];
  cta: { headline: string; sub: string; button: string };
  next: { label: string; title: string; href: string };
}

const ICONS = ["CPU", "RAM", "NET", "BAT", "TMP", "DSK"];

// ──────────────────────────────────────────
// ENGLISH
// ──────────────────────────────────────────
const en: PageContent = {
  meta: {
    title: "Pulse - System Monitor for Mac | CPU, Memory, Network & More",
    description: "Monitor your Mac's CPU, memory, network speed, battery health, temperature, and disk usage from the menu bar. The modern alternative to iStat Menus.",
  },
  hero: {
    subtitle: "System Monitor for Mac",
    description: "CPU, memory, network, battery, temperature, disk, GPU, fans, and processes — all visible from your menu bar. Built with SwiftUI for macOS 14+.",
  },
  featuresTitle: "What Pulse Monitors",
  features: [
    { icon: ICONS[0], label: "CPU Usage", desc: "Per-core load, system vs. user, load averages" },
    { icon: ICONS[1], label: "Memory", desc: "Pressure level, app memory, wired, compressed, swap" },
    { icon: ICONS[2], label: "Network", desc: "Upload & download speed, local & public IP" },
    { icon: ICONS[3], label: "Battery", desc: "Health %, cycle count, wattage, time remaining" },
    { icon: ICONS[4], label: "Temperature", desc: "CPU & GPU thermals, per-sensor readings" },
    { icon: ICONS[5], label: "Disk", desc: "Volume usage, free space, SMART health status" },
  ],
  faqTitle: "Frequently Asked Questions",
  sections: [
    {
      title: "Choosing a Mac System Monitor",
      qas: [
        { q: "What's the best system monitor app for Mac?", a: "The most popular paid option is iStat Menus ($14.99), which offers CPU, GPU, memory, network, disk, and temperature monitoring. Stats is the top free, open-source choice. Pulse is a modern SwiftUI alternative that combines comprehensive monitoring with a clean menu bar interface at a lower price point." },
        { q: "What are the best alternatives to iStat Menus?", a: "Popular iStat Menus alternatives include Stats (free, open-source), MenuMeters (free), iStatistica Pro (with widgets and remote access), TG Pro (thermal-focused), and Pulse. Pulse offers real-time CPU, memory, network, battery, temperature, disk, and GPU monitoring from the menu bar with a native SwiftUI design." },
        { q: "Is there a better alternative to Activity Monitor on Mac?", a: "Activity Monitor requires you to open a separate window each time. Menu bar monitors like Pulse, iStat Menus, or Stats give you instant access to CPU, memory, and network stats without interrupting your workflow. Pulse also adds battery health, temperature sensors, GPU utilization, and fan speeds — none of which are available in Activity Monitor." },
        { q: "What's the best menu bar system monitor for Mac?", a: "For a comprehensive, paid solution, iStat Menus has long been the standard. For a free option, Stats is excellent. Pulse sits in between — a modern, lightweight app that shows CPU, memory, network speed, battery, and temperature right in the menu bar with customizable display styles." },
      ],
    },
    {
      title: "Monitoring Performance on Your Mac",
      qas: [
        { q: "How do I check CPU usage on my Mac?", a: "Open Activity Monitor (press Cmd+Space, type \"Activity Monitor\") and click the CPU tab. Sort by \"% CPU\" to see which apps consume the most. For always-visible monitoring, a menu bar app like Pulse shows per-core CPU load, system vs. user breakdown, and load averages at a glance." },
        { q: "How do I see which app is using the most memory on Mac?", a: "In Activity Monitor, click the Memory tab and sort by the \"Memory\" column. The Memory Pressure graph at the bottom is the most useful indicator — green means healthy, yellow means your Mac is starting to struggle, and red means it's heavily using swap. Pulse displays memory pressure, app memory, wired, and compressed memory in the menu bar dropdown." },
        { q: "How can I monitor CPU temperature on my MacBook?", a: "macOS doesn't show temperature natively. On Intel Macs, you can use Terminal: sudo powermetrics --samplers smc. On Apple Silicon (M1–M4), third-party apps are the only reliable option. Pulse, iStat Menus, and Stats all read temperature sensors and can alert you if your CPU gets too hot." },
        { q: "How do I monitor network speed on Mac in real time?", a: "Activity Monitor's Network tab shows per-app bandwidth, but not total throughput. For real-time upload and download speeds in your menu bar, use a monitoring app. Pulse shows live network speed, your local IP, and public IP — click either to copy." },
        { q: "How do I check my Mac's battery health?", a: "Go to Apple menu > System Settings > Battery > Battery Health. This shows your condition and maximum capacity. For more detail — cycle count, wattage, voltage, and degradation alerts — use CoconutBattery or Pulse, which tracks battery health continuously in the menu bar." },
        { q: "How do I see disk usage on Mac?", a: "Click the Apple menu > About This Mac > More Info > Storage. This shows a color-coded bar of what's using space. For real-time monitoring with free space warnings, Pulse shows disk usage per volume and alerts you when a drive is getting full." },
        { q: "How do I check GPU usage on Mac?", a: "Activity Monitor shows GPU usage per process under the \"GPU\" column. For overall GPU utilization and VRAM usage, use a dedicated monitor. Pulse shows GPU load percentage and VRAM in the panel." },
        { q: "How can I see fan speed on my Mac?", a: "macOS doesn't expose fan speed in any built-in tool. You need a third-party app like Macs Fan Control, TG Pro, or Pulse. Pulse shows current fan RPM alongside temperature sensors so you can correlate heat with fan response." },
      ],
    },
    {
      title: "Understanding Mac Performance",
      qas: [
        { q: "What does memory pressure mean on Mac?", a: "Memory Pressure shows how efficiently your Mac's RAM is handling demand. Green means plenty of free memory. Yellow means macOS is compressing memory to make room. Red means your Mac is swapping to disk, which causes significant slowdowns. If you see yellow or red frequently, you likely need to close apps or consider more RAM." },
        { q: "What is normal CPU temperature for a Mac?", a: "At idle, most Macs sit between 35–55°C. Under moderate load, 60–80°C is normal. During intensive tasks (video export, compiling code), temperatures can reach 90–100°C — macOS will throttle the CPU to prevent damage. Sustained temperatures above 95°C warrant investigation." },
        { q: "What is normal CPU usage on Mac?", a: "When idle, CPU usage should be 5–15%. During normal app usage, 20–40% is typical. If your CPU stays above 50% while idle, a background process is likely misbehaving — check Activity Monitor or your menu bar monitor to identify the culprit." },
        { q: "Why is my Mac running hot and how do I fix it?", a: "Common causes: resource-intensive apps (video editing, gaming, Xcode builds), too many browser tabs, blocked ventilation, dust buildup, or a runaway background process. First, check which process is consuming the most CPU. Close unnecessary apps, ensure air vents are clear, and restart if needed." },
        { q: "How much RAM do I actually need on my Mac?", a: "8 GB handles web browsing, email, and light productivity. 16 GB is recommended for developers, designers, and anyone running multiple apps simultaneously. 32 GB+ is for video editors, data scientists, and virtual machine users. Check your Memory Pressure — if it's frequently yellow, you'd benefit from more RAM." },
      ],
    },
    {
      title: "About Pulse",
      qas: [
        { q: "Is Pulse safe for my Mac?", a: "Yes. Pulse uses only read-only macOS system APIs — it cannot modify, alter, or interfere with your system. It runs in the App Sandbox and is distributed through the Mac App Store, which means Apple has reviewed it for security and privacy compliance." },
        { q: "Does Pulse work on Apple Silicon and Intel Macs?", a: "Yes. Pulse is a universal binary that runs natively on both Apple Silicon (M1, M2, M3, M4) and Intel-based Macs. No Rosetta required." },
        { q: "What macOS version does Pulse require?", a: "Pulse requires macOS 14.0 (Sonoma) or later. It's built with SwiftUI and takes advantage of modern macOS APIs for efficient, low-overhead monitoring." },
      ],
    },
  ],
  cta: { headline: "Take control of your Mac's performance", sub: "Available on the Mac App Store.", button: "GET PULSE" },
  next: { label: "Continue Reading", title: "Pulse Support & FAQ", href: "/pulse/support" },
};

// ──────────────────────────────────────────
// GERMAN
// ──────────────────────────────────────────
const de: PageContent = {
  meta: {
    title: "Pulse - Systemmonitor fur Mac | CPU, RAM, Netzwerk & mehr",
    description: "Uberwache CPU, Arbeitsspeicher, Netzwerkgeschwindigkeit, Akkuzustand, Temperatur und Festplattennutzung deines Macs direkt in der Menuleiste.",
  },
  hero: {
    subtitle: "Systemmonitor fur Mac",
    description: "CPU, Arbeitsspeicher, Netzwerk, Akku, Temperatur, Festplatte, GPU, Lufter und Prozesse — alles sichtbar in deiner Menuleiste. Entwickelt mit SwiftUI fur macOS 14+.",
  },
  featuresTitle: "Was Pulse uberwacht",
  features: [
    { icon: ICONS[0], label: "CPU-Auslastung", desc: "Pro-Kern-Last, System vs. Benutzer, Lastdurchschnitte" },
    { icon: ICONS[1], label: "Arbeitsspeicher", desc: "Speicherdruck, App-Speicher, fest verdrahtet, komprimiert, Swap" },
    { icon: ICONS[2], label: "Netzwerk", desc: "Upload- & Download-Geschwindigkeit, lokale & offentliche IP" },
    { icon: ICONS[3], label: "Akku", desc: "Zustand %, Ladezyklen, Watt, verbleibende Zeit" },
    { icon: ICONS[4], label: "Temperatur", desc: "CPU- & GPU-Temperatur, Sensorwerte" },
    { icon: ICONS[5], label: "Festplatte", desc: "Speichernutzung, freier Speicher, SMART-Status" },
  ],
  faqTitle: "Haufig gestellte Fragen",
  sections: [
    {
      title: "Den richtigen Mac-Systemmonitor wahlen",
      qas: [
        { q: "Was ist die beste Systemuberwachungs-App fur Mac?", a: "Die beliebteste kostenpflichtige Option ist iStat Menus (14,99 $) mit CPU-, GPU-, RAM-, Netzwerk-, Festplatten- und Temperaturuberwachung. Stats ist die beste kostenlose Open-Source-Alternative. Pulse ist eine moderne SwiftUI-Alternative mit umfassender Uberwachung und einer aufgeraumten Menuleisten-Oberflache zu einem gunstigeren Preis." },
        { q: "Was sind die besten Alternativen zu iStat Menus?", a: "Beliebte Alternativen sind Stats (kostenlos, Open Source), MenuMeters (kostenlos), iStatistica Pro (mit Widgets), TG Pro (Temperatur-fokussiert) und Pulse. Pulse bietet Echtzeit-Uberwachung von CPU, RAM, Netzwerk, Akku, Temperatur, Festplatte und GPU in der Menuleiste." },
        { q: "Gibt es eine bessere Alternative zum Aktivitatsmonitor auf dem Mac?", a: "Der Aktivitatsmonitor erfordert jedes Mal das Offnen eines separaten Fensters. Menuleisten-Monitore wie Pulse, iStat Menus oder Stats geben dir sofortigen Zugriff auf CPU-, Speicher- und Netzwerkstatistiken, ohne deinen Arbeitsablauf zu unterbrechen. Pulse zeigt zusatzlich Akkuzustand, Temperatursensoren, GPU-Auslastung und Luftergeschwindigkeiten." },
        { q: "Was ist der beste Menuleisten-Systemmonitor fur Mac?", a: "Fur eine umfassende, kostenpflichtige Losung ist iStat Menus der Standard. Als kostenlose Option ist Stats ausgezeichnet. Pulse liegt dazwischen — eine moderne, leichtgewichtige App, die CPU, Speicher, Netzwerkgeschwindigkeit, Akku und Temperatur direkt in der Menuleiste anzeigt." },
      ],
    },
    {
      title: "Leistungsuberwachung auf deinem Mac",
      qas: [
        { q: "Wie uberprufe ich die CPU-Auslastung auf meinem Mac?", a: "Offne den Aktivitatsmonitor (Cmd+Leertaste, \"Aktivitatsmonitor\" eingeben) und klicke auf den Reiter CPU. Sortiere nach \"% CPU\", um die ressourcenhungrigsten Apps zu sehen. Fur standige Uberwachung zeigt eine Menuleisten-App wie Pulse die Pro-Kern-CPU-Last, System-vs.-Benutzer-Aufschlusselung und Lastdurchschnitte auf einen Blick." },
        { q: "Wie sehe ich, welche App den meisten Arbeitsspeicher auf dem Mac verbraucht?", a: "Klicke im Aktivitatsmonitor auf den Reiter Speicher und sortiere nach der Spalte \"Speicher\". Der Speicherdruck-Graph unten ist der nutzlichste Indikator — grun bedeutet gesund, gelb bedeutet es wird eng, und rot bedeutet starke Swap-Nutzung. Pulse zeigt Speicherdruck, App-Speicher, verdrahteten und komprimierten Speicher im Menuleisten-Dropdown." },
        { q: "Wie kann ich die CPU-Temperatur auf meinem MacBook uberwachen?", a: "macOS zeigt die Temperatur nicht nativ an. Auf Intel-Macs kannst du Terminal verwenden: sudo powermetrics --samplers smc. Auf Apple Silicon (M1–M4) sind Drittanbieter-Apps die einzige zuverlassige Option. Pulse, iStat Menus und Stats lesen Temperatursensoren aus und konnen dich warnen, wenn die CPU zu heiss wird." },
        { q: "Wie uberwache ich die Netzwerkgeschwindigkeit auf dem Mac in Echtzeit?", a: "Der Netzwerk-Tab des Aktivitatsmonitors zeigt App-spezifische Bandbreite, aber nicht den Gesamtdurchsatz. Fur Echtzeit-Upload- und Download-Geschwindigkeiten in der Menuleiste verwende eine Uberwachungs-App. Pulse zeigt Live-Netzwerkgeschwindigkeit, lokale IP und offentliche IP." },
        { q: "Wie uberprufe ich den Akkuzustand meines Macs?", a: "Gehe zu Apple-Menu > Systemeinstellungen > Batterie > Batteriezustand. Fur detailliertere Informationen — Ladezyklen, Watt, Spannung und Warnungen bei Verschleiss — verwende CoconutBattery oder Pulse, das den Akkuzustand kontinuierlich in der Menuleiste uberwacht." },
        { q: "Wie sehe ich die Festplattennutzung auf dem Mac?", a: "Klicke auf Apple-Menu > Uber diesen Mac > Weitere Infos > Speicher. Fur Echtzeit-Uberwachung mit Warnungen bei vollem Speicher zeigt Pulse die Festplattennutzung pro Volume und warnt dich, wenn eine Festplatte voll wird." },
        { q: "Wie uberprufe ich die GPU-Auslastung auf dem Mac?", a: "Der Aktivitatsmonitor zeigt die GPU-Nutzung pro Prozess in der Spalte \"GPU\". Fur die gesamte GPU-Auslastung und VRAM-Nutzung verwende einen dedizierten Monitor. Pulse zeigt GPU-Last in Prozent und VRAM im Panel." },
        { q: "Wie kann ich die Luftergeschwindigkeit auf meinem Mac sehen?", a: "macOS zeigt die Luftergeschwindigkeit in keinem integrierten Tool an. Du brauchst eine Drittanbieter-App wie Macs Fan Control, TG Pro oder Pulse. Pulse zeigt aktuelle Lufter-RPM neben Temperatursensoren." },
      ],
    },
    {
      title: "Mac-Leistung verstehen",
      qas: [
        { q: "Was bedeutet Speicherdruck auf dem Mac?", a: "Der Speicherdruck zeigt, wie effizient der RAM deines Macs die Nachfrage bewaltigt. Grun bedeutet genug freier Speicher. Gelb bedeutet, dass macOS Speicher komprimiert. Rot bedeutet, dass dein Mac auf die Festplatte auslagert, was deutliche Verlangsamungen verursacht." },
        { q: "Was ist eine normale CPU-Temperatur fur einen Mac?", a: "Im Leerlauf liegen die meisten Macs zwischen 35–55°C. Unter moderater Last sind 60–80°C normal. Bei intensiven Aufgaben konnen Temperaturen 90–100°C erreichen — macOS drosselt die CPU, um Schaden zu verhindern. Anhaltende Temperaturen uber 95°C sollten untersucht werden." },
        { q: "Was ist eine normale CPU-Auslastung auf dem Mac?", a: "Im Leerlauf sollte die CPU-Auslastung 5–15% betragen. Bei normaler App-Nutzung sind 20–40% typisch. Wenn deine CPU im Leerlauf uber 50% bleibt, verhalt sich wahrscheinlich ein Hintergrundprozess fehlerhaft." },
        { q: "Warum wird mein Mac heiss und wie behebe ich das?", a: "Haufige Ursachen: ressourcenintensive Apps, zu viele Browser-Tabs, blockierte Beluftung, Staubansammlung oder ein ausser Kontrolle geratener Hintergrundprozess. Prufe zuerst, welcher Prozess die meiste CPU verbraucht. Schliesse unnotige Apps und stelle sicher, dass die Luftungsoffnungen frei sind." },
        { q: "Wie viel RAM brauche ich wirklich auf meinem Mac?", a: "8 GB reichen fur Surfen, E-Mail und leichte Produktivitat. 16 GB werden fur Entwickler, Designer und Multitasking empfohlen. 32 GB+ sind fur Videobearbeiter und virtuelle Maschinen. Prufe deinen Speicherdruck — wenn er haufig gelb ist, wurde mehr RAM helfen." },
      ],
    },
    {
      title: "Uber Pulse",
      qas: [
        { q: "Ist Pulse sicher fur meinen Mac?", a: "Ja. Pulse verwendet nur schreibgeschutzte macOS-System-APIs — es kann dein System nicht verandern oder beeintrachtigen. Es lauft in der App Sandbox und wird uber den Mac App Store vertrieben, was bedeutet, dass Apple es auf Sicherheit und Datenschutz gepruft hat." },
        { q: "Funktioniert Pulse auf Apple Silicon und Intel Macs?", a: "Ja. Pulse ist ein Universal Binary, das nativ auf Apple Silicon (M1, M2, M3, M4) und Intel-basierten Macs lauft. Kein Rosetta erforderlich." },
        { q: "Welche macOS-Version benotigt Pulse?", a: "Pulse benotigt macOS 14.0 (Sonoma) oder neuer. Es ist mit SwiftUI entwickelt und nutzt moderne macOS-APIs fur effiziente Uberwachung mit geringem Overhead." },
      ],
    },
  ],
  cta: { headline: "Behalte die Leistung deines Macs im Blick", sub: "Verfugbar im Mac App Store.", button: "PULSE LADEN" },
  next: { label: "Weiterlesen", title: "Pulse Support & FAQ", href: "/pulse/support" },
};

// ──────────────────────────────────────────
// FRENCH
// ──────────────────────────────────────────
const fr: PageContent = {
  meta: {
    title: "Pulse - Moniteur systeme pour Mac | CPU, memoire, reseau et plus",
    description: "Surveillez le CPU, la memoire, la vitesse reseau, l'etat de la batterie, la temperature et l'utilisation du disque de votre Mac depuis la barre de menus.",
  },
  hero: {
    subtitle: "Moniteur systeme pour Mac",
    description: "CPU, memoire, reseau, batterie, temperature, disque, GPU, ventilateurs et processus — tout visible depuis votre barre de menus. Developpe avec SwiftUI pour macOS 14+.",
  },
  featuresTitle: "Ce que Pulse surveille",
  features: [
    { icon: ICONS[0], label: "Utilisation CPU", desc: "Charge par coeur, systeme vs. utilisateur, moyennes de charge" },
    { icon: ICONS[1], label: "Memoire", desc: "Pression memoire, memoire app, cablee, compressee, swap" },
    { icon: ICONS[2], label: "Reseau", desc: "Vitesse upload & download, IP locale & publique" },
    { icon: ICONS[3], label: "Batterie", desc: "Sante %, cycles, puissance, temps restant" },
    { icon: ICONS[4], label: "Temperature", desc: "Temperatures CPU & GPU, lectures par capteur" },
    { icon: ICONS[5], label: "Disque", desc: "Utilisation des volumes, espace libre, etat SMART" },
  ],
  faqTitle: "Questions frequemment posees",
  sections: [
    {
      title: "Choisir un moniteur systeme Mac",
      qas: [
        { q: "Quelle est la meilleure application de surveillance systeme pour Mac ?", a: "L'option payante la plus populaire est iStat Menus (14,99 $) avec surveillance CPU, GPU, memoire, reseau, disque et temperature. Stats est le meilleur choix gratuit et open-source. Pulse est une alternative moderne en SwiftUI combinant une surveillance complete avec une interface epuree dans la barre de menus a un prix inferieur." },
        { q: "Quelles sont les meilleures alternatives a iStat Menus ?", a: "Les alternatives populaires incluent Stats (gratuit, open source), MenuMeters (gratuit), iStatistica Pro (avec widgets), TG Pro (axe sur la temperature) et Pulse. Pulse offre une surveillance en temps reel du CPU, de la memoire, du reseau, de la batterie, de la temperature, du disque et du GPU depuis la barre de menus." },
        { q: "Existe-t-il une meilleure alternative au Moniteur d'activite sur Mac ?", a: "Le Moniteur d'activite necessite d'ouvrir une fenetre separee a chaque fois. Les moniteurs de barre de menus comme Pulse, iStat Menus ou Stats vous donnent un acces instantane aux statistiques CPU, memoire et reseau sans interrompre votre travail. Pulse ajoute egalement la sante de la batterie, les capteurs de temperature, l'utilisation du GPU et les vitesses de ventilateur." },
        { q: "Quel est le meilleur moniteur systeme pour la barre de menus Mac ?", a: "Pour une solution complete et payante, iStat Menus est la reference. Pour une option gratuite, Stats est excellent. Pulse se situe entre les deux — une application moderne et legere qui affiche CPU, memoire, vitesse reseau, batterie et temperature directement dans la barre de menus." },
      ],
    },
    {
      title: "Surveiller les performances de votre Mac",
      qas: [
        { q: "Comment verifier l'utilisation du CPU sur mon Mac ?", a: "Ouvrez le Moniteur d'activite (Cmd+Espace, tapez \"Moniteur d'activite\") et cliquez sur l'onglet CPU. Triez par \"% CPU\" pour voir les applications les plus gourmandes. Pour une surveillance permanente, une application de barre de menus comme Pulse affiche la charge CPU par coeur en un coup d'oeil." },
        { q: "Comment voir quelle application utilise le plus de memoire sur Mac ?", a: "Dans le Moniteur d'activite, cliquez sur l'onglet Memoire et triez par la colonne \"Memoire\". Le graphique de Pression memoire en bas est l'indicateur le plus utile — vert signifie sain, jaune signifie que votre Mac commence a avoir du mal, et rouge signifie un usage intensif du swap." },
        { q: "Comment surveiller la temperature du CPU sur mon MacBook ?", a: "macOS n'affiche pas la temperature nativement. Sur les Mac Intel, vous pouvez utiliser Terminal : sudo powermetrics --samplers smc. Sur Apple Silicon (M1–M4), les applications tierces sont la seule option fiable. Pulse, iStat Menus et Stats lisent les capteurs de temperature et peuvent vous alerter si votre CPU surchauffe." },
        { q: "Comment surveiller la vitesse du reseau sur Mac en temps reel ?", a: "L'onglet Reseau du Moniteur d'activite montre la bande passante par application, mais pas le debit total. Pour des vitesses d'upload et de download en temps reel dans votre barre de menus, utilisez une application de surveillance. Pulse affiche la vitesse reseau en direct, votre IP locale et votre IP publique." },
        { q: "Comment verifier l'etat de la batterie de mon Mac ?", a: "Allez dans le menu Apple > Reglages Systeme > Batterie > Etat de la batterie. Pour plus de details — cycles de charge, puissance, tension et alertes de degradation — utilisez CoconutBattery ou Pulse, qui surveille l'etat de la batterie en continu dans la barre de menus." },
        { q: "Comment voir l'utilisation du disque sur Mac ?", a: "Cliquez sur le menu Apple > A propos de ce Mac > Plus d'infos > Stockage. Pour une surveillance en temps reel avec des alertes d'espace insuffisant, Pulse affiche l'utilisation du disque par volume et vous avertit quand un disque se remplit." },
        { q: "Comment verifier l'utilisation du GPU sur Mac ?", a: "Le Moniteur d'activite montre l'utilisation GPU par processus dans la colonne \"GPU\". Pour l'utilisation globale du GPU et de la VRAM, utilisez un moniteur dedie. Pulse affiche le pourcentage de charge GPU et la VRAM dans le panneau." },
        { q: "Comment voir la vitesse des ventilateurs sur mon Mac ?", a: "macOS n'expose pas la vitesse des ventilateurs dans aucun outil integre. Vous avez besoin d'une application tierce comme Macs Fan Control, TG Pro ou Pulse. Pulse affiche les RPM des ventilateurs a cote des capteurs de temperature." },
      ],
    },
    {
      title: "Comprendre les performances du Mac",
      qas: [
        { q: "Que signifie la pression memoire sur Mac ?", a: "La Pression memoire montre l'efficacite avec laquelle la RAM de votre Mac gere la demande. Vert signifie beaucoup de memoire libre. Jaune signifie que macOS compresse la memoire. Rouge signifie que votre Mac utilise le swap, ce qui cause des ralentissements importants." },
        { q: "Quelle est la temperature CPU normale pour un Mac ?", a: "Au repos, la plupart des Mac se situent entre 35–55°C. Sous charge moderee, 60–80°C est normal. Lors de taches intensives, les temperatures peuvent atteindre 90–100°C — macOS limitera le CPU pour eviter les dommages. Des temperatures soutenues au-dessus de 95°C meritent une investigation." },
        { q: "Quelle est l'utilisation CPU normale sur Mac ?", a: "Au repos, l'utilisation du CPU devrait etre de 5–15%. Lors d'une utilisation normale, 20–40% est typique. Si votre CPU reste au-dessus de 50% au repos, un processus en arriere-plan se comporte probablement mal." },
        { q: "Pourquoi mon Mac chauffe-t-il et comment resoudre ce probleme ?", a: "Causes courantes : applications gourmandes en ressources, trop d'onglets de navigateur, ventilation bloquee, accumulation de poussiere ou un processus en arriere-plan devenu fou. Verifiez d'abord quel processus consomme le plus de CPU. Fermez les applications inutiles et assurez-vous que les bouches d'aeration sont degagees." },
        { q: "De combien de RAM ai-je reellement besoin sur mon Mac ?", a: "8 Go suffisent pour la navigation web, les e-mails et la productivite legere. 16 Go sont recommandes pour les developpeurs, designers et le multitache. 32 Go+ sont destines aux monteurs video et aux machines virtuelles. Verifiez votre Pression memoire — si elle est souvent jaune, plus de RAM serait benefique." },
      ],
    },
    {
      title: "A propos de Pulse",
      qas: [
        { q: "Pulse est-il sur pour mon Mac ?", a: "Oui. Pulse utilise uniquement des API systeme macOS en lecture seule — il ne peut pas modifier ou interferer avec votre systeme. Il fonctionne dans la Sandbox d'Apple et est distribue via le Mac App Store, ce qui signifie qu'Apple l'a examine pour la securite et la confidentialite." },
        { q: "Pulse fonctionne-t-il sur Apple Silicon et Intel Macs ?", a: "Oui. Pulse est un binaire universel qui fonctionne nativement sur Apple Silicon (M1, M2, M3, M4) et les Mac Intel. Aucun Rosetta necessaire." },
        { q: "Quelle version de macOS Pulse necessite-t-il ?", a: "Pulse necessite macOS 14.0 (Sonoma) ou ulterieur. Il est developpe avec SwiftUI et tire parti des API macOS modernes pour une surveillance efficace et legere." },
      ],
    },
  ],
  cta: { headline: "Prenez le controle des performances de votre Mac", sub: "Disponible sur le Mac App Store.", button: "OBTENIR PULSE" },
  next: { label: "Continuer la lecture", title: "Support & FAQ Pulse", href: "/pulse/support" },
};

// ──────────────────────────────────────────
// SPANISH
// ──────────────────────────────────────────
const es: PageContent = {
  meta: {
    title: "Pulse - Monitor del sistema para Mac | CPU, memoria, red y mas",
    description: "Monitorea el CPU, memoria, velocidad de red, estado de bateria, temperatura y uso de disco de tu Mac desde la barra de menus.",
  },
  hero: {
    subtitle: "Monitor del sistema para Mac",
    description: "CPU, memoria, red, bateria, temperatura, disco, GPU, ventiladores y procesos — todo visible desde tu barra de menus. Desarrollado con SwiftUI para macOS 14+.",
  },
  featuresTitle: "Que monitorea Pulse",
  features: [
    { icon: ICONS[0], label: "Uso de CPU", desc: "Carga por nucleo, sistema vs. usuario, promedios de carga" },
    { icon: ICONS[1], label: "Memoria", desc: "Presion de memoria, memoria de apps, fija, comprimida, swap" },
    { icon: ICONS[2], label: "Red", desc: "Velocidad de subida y bajada, IP local y publica" },
    { icon: ICONS[3], label: "Bateria", desc: "Salud %, ciclos de carga, potencia, tiempo restante" },
    { icon: ICONS[4], label: "Temperatura", desc: "Temperaturas CPU y GPU, lecturas por sensor" },
    { icon: ICONS[5], label: "Disco", desc: "Uso de volumenes, espacio libre, estado SMART" },
  ],
  faqTitle: "Preguntas frecuentes",
  sections: [
    {
      title: "Elegir un monitor de sistema para Mac",
      qas: [
        { q: "Cual es la mejor app de monitor de sistema para Mac?", a: "La opcion de pago mas popular es iStat Menus ($14.99) con monitoreo de CPU, GPU, memoria, red, disco y temperatura. Stats es la mejor opcion gratuita y de codigo abierto. Pulse es una alternativa moderna en SwiftUI que combina monitoreo completo con una interfaz limpia en la barra de menus a un precio mas accesible." },
        { q: "Cuales son las mejores alternativas a iStat Menus?", a: "Las alternativas populares incluyen Stats (gratis, codigo abierto), MenuMeters (gratis), iStatistica Pro (con widgets), TG Pro (enfocado en temperatura) y Pulse. Pulse ofrece monitoreo en tiempo real de CPU, memoria, red, bateria, temperatura, disco y GPU desde la barra de menus." },
        { q: "Hay una mejor alternativa al Monitor de Actividad en Mac?", a: "El Monitor de Actividad requiere abrir una ventana separada cada vez. Los monitores de barra de menus como Pulse, iStat Menus o Stats te dan acceso instantaneo a estadisticas de CPU, memoria y red sin interrumpir tu trabajo. Pulse agrega ademas salud de bateria, sensores de temperatura, uso de GPU y velocidad de ventiladores." },
        { q: "Cual es el mejor monitor de sistema en la barra de menus para Mac?", a: "Para una solucion completa de pago, iStat Menus es el estandar. Como opcion gratuita, Stats es excelente. Pulse esta entre ambos — una app moderna y ligera que muestra CPU, memoria, velocidad de red, bateria y temperatura directamente en la barra de menus." },
      ],
    },
    {
      title: "Monitoreo de rendimiento en tu Mac",
      qas: [
        { q: "Como verifico el uso de CPU en mi Mac?", a: "Abre el Monitor de Actividad (Cmd+Espacio, escribe \"Monitor de Actividad\") y haz clic en la pestana CPU. Ordena por \"% CPU\" para ver las apps que mas consumen. Para monitoreo permanente, una app de barra de menus como Pulse muestra la carga CPU por nucleo de un vistazo." },
        { q: "Como veo que app esta usando mas memoria en Mac?", a: "En el Monitor de Actividad, haz clic en la pestana Memoria y ordena por la columna \"Memoria\". El grafico de Presion de memoria en la parte inferior es el indicador mas util — verde significa saludable, amarillo significa que tu Mac empieza a tener problemas, y rojo significa uso intensivo de swap." },
        { q: "Como puedo monitorear la temperatura del CPU en mi MacBook?", a: "macOS no muestra la temperatura de forma nativa. En Mac Intel, puedes usar Terminal: sudo powermetrics --samplers smc. En Apple Silicon (M1–M4), las apps de terceros son la unica opcion confiable. Pulse, iStat Menus y Stats leen sensores de temperatura y pueden alertarte si tu CPU se calienta demasiado." },
        { q: "Como monitoreo la velocidad de red en Mac en tiempo real?", a: "La pestana Red del Monitor de Actividad muestra el ancho de banda por app, pero no el rendimiento total. Para velocidades de subida y bajada en tiempo real en tu barra de menus, usa una app de monitoreo. Pulse muestra velocidad de red en vivo, tu IP local e IP publica." },
        { q: "Como verifico el estado de la bateria de mi Mac?", a: "Ve al menu Apple > Ajustes del Sistema > Bateria > Estado de la bateria. Para mas detalles — ciclos de carga, potencia, voltaje y alertas de degradacion — usa CoconutBattery o Pulse, que monitorea la salud de la bateria continuamente en la barra de menus." },
        { q: "Como veo el uso de disco en Mac?", a: "Haz clic en el menu Apple > Acerca de este Mac > Mas informacion > Almacenamiento. Para monitoreo en tiempo real con alertas de espacio lleno, Pulse muestra el uso de disco por volumen y te avisa cuando un disco se esta llenando." },
        { q: "Como verifico el uso de GPU en Mac?", a: "El Monitor de Actividad muestra el uso de GPU por proceso en la columna \"GPU\". Para la utilizacion general de GPU y VRAM, usa un monitor dedicado. Pulse muestra el porcentaje de carga GPU y VRAM en el panel." },
        { q: "Como puedo ver la velocidad de los ventiladores en mi Mac?", a: "macOS no expone la velocidad de los ventiladores en ninguna herramienta integrada. Necesitas una app de terceros como Macs Fan Control, TG Pro o Pulse. Pulse muestra las RPM de los ventiladores junto a los sensores de temperatura." },
      ],
    },
    {
      title: "Entender el rendimiento del Mac",
      qas: [
        { q: "Que significa presion de memoria en Mac?", a: "La Presion de memoria muestra que tan eficientemente la RAM de tu Mac maneja la demanda. Verde significa mucha memoria libre. Amarillo significa que macOS esta comprimiendo memoria. Rojo significa que tu Mac esta usando swap, lo que causa ralentizaciones significativas." },
        { q: "Cual es la temperatura CPU normal para un Mac?", a: "En reposo, la mayoria de los Mac estan entre 35–55°C. Bajo carga moderada, 60–80°C es normal. Durante tareas intensivas, las temperaturas pueden alcanzar 90–100°C — macOS limitara el CPU para prevenir danos. Temperaturas sostenidas por encima de 95°C ameritan investigacion." },
        { q: "Cual es el uso normal de CPU en Mac?", a: "En reposo, el uso de CPU deberia ser 5–15%. Durante uso normal de apps, 20–40% es tipico. Si tu CPU se mantiene por encima del 50% en reposo, probablemente un proceso en segundo plano se esta comportando mal." },
        { q: "Por que mi Mac se calienta y como lo soluciono?", a: "Causas comunes: apps que consumen muchos recursos, demasiadas pestanas del navegador, ventilacion bloqueada, acumulacion de polvo o un proceso en segundo plano descontrolado. Primero, verifica que proceso consume mas CPU. Cierra apps innecesarias y asegurate de que las rejillas de ventilacion esten libres." },
        { q: "Cuanta RAM necesito realmente en mi Mac?", a: "8 GB son suficientes para navegacion web, correo y productividad ligera. 16 GB se recomiendan para desarrolladores, disenadores y multitarea. 32 GB+ son para editores de video y maquinas virtuales. Revisa tu Presion de memoria — si frecuentemente esta en amarillo, mas RAM te beneficiaria." },
      ],
    },
    {
      title: "Sobre Pulse",
      qas: [
        { q: "Es Pulse seguro para mi Mac?", a: "Si. Pulse usa solo APIs de sistema macOS de solo lectura — no puede modificar ni interferir con tu sistema. Se ejecuta en la Sandbox de Apple y se distribuye a traves del Mac App Store, lo que significa que Apple lo ha revisado en cuanto a seguridad y privacidad." },
        { q: "Pulse funciona en Apple Silicon e Intel Macs?", a: "Si. Pulse es un binario universal que se ejecuta nativamente en Apple Silicon (M1, M2, M3, M4) y Macs basados en Intel. No requiere Rosetta." },
        { q: "Que version de macOS requiere Pulse?", a: "Pulse requiere macOS 14.0 (Sonoma) o posterior. Esta desarrollado con SwiftUI y aprovecha las APIs modernas de macOS para un monitoreo eficiente y ligero." },
      ],
    },
  ],
  cta: { headline: "Toma el control del rendimiento de tu Mac", sub: "Disponible en el Mac App Store.", button: "OBTENER PULSE" },
  next: { label: "Seguir leyendo", title: "Soporte y FAQ de Pulse", href: "/pulse/support" },
};

// ──────────────────────────────────────────
// JAPANESE
// ──────────────────────────────────────────
const ja: PageContent = {
  meta: {
    title: "Pulse - Mac用システムモニター | CPU、メモリ、ネットワーク等",
    description: "MacのCPU、メモリ、ネットワーク速度、バッテリー状態、温度、ディスク使用量をメニューバーから監視。iStat Menusの最新代替アプリ。",
  },
  hero: {
    subtitle: "Mac用システムモニター",
    description: "CPU、メモリ、ネットワーク、バッテリー、温度、ディスク、GPU、ファン、プロセス — すべてメニューバーから確認可能。SwiftUIでmacOS 14+向けに構築。",
  },
  featuresTitle: "Pulseの監視項目",
  features: [
    { icon: ICONS[0], label: "CPU使用率", desc: "コアごとの負荷、システム vs ユーザー、ロードアベレージ" },
    { icon: ICONS[1], label: "メモリ", desc: "メモリプレッシャー、アプリメモリ、Wired、圧縮、スワップ" },
    { icon: ICONS[2], label: "ネットワーク", desc: "アップロード・ダウンロード速度、ローカル・パブリックIP" },
    { icon: ICONS[3], label: "バッテリー", desc: "健康状態%、充電サイクル、ワット数、残り時間" },
    { icon: ICONS[4], label: "温度", desc: "CPU・GPU温度、センサーごとの読み取り" },
    { icon: ICONS[5], label: "ディスク", desc: "ボリューム使用量、空き容量、SMARTステータス" },
  ],
  faqTitle: "よくある質問",
  sections: [
    {
      title: "Macシステムモニターの選び方",
      qas: [
        { q: "Macに最適なシステムモニターアプリは？", a: "最も人気のある有料オプションはiStat Menus（$14.99）で、CPU、GPU、メモリ、ネットワーク、ディスク、温度の監視が可能です。Statsは最高の無料オープンソースの選択肢です。Pulseは、包括的な監視と洗練されたメニューバーインターフェースを低価格で組み合わせたモダンなSwiftUI代替アプリです。" },
        { q: "iStat Menusの代替アプリは？", a: "人気の代替アプリにはStats（無料、オープンソース）、MenuMeters（無料）、iStatistica Pro（ウィジェット付き）、TG Pro（温度特化）、Pulseがあります。Pulseはメニューバーからリアルタイムで、CPU、メモリ、ネットワーク、バッテリー、温度、ディスク、GPU監視を提供します。" },
        { q: "アクティビティモニタより優れた代替アプリはある？", a: "アクティビティモニタは毎回別のウィンドウを開く必要があります。Pulse、iStat Menus、Statsなどのメニューバーモニターは、作業を中断することなくCPU、メモリ、ネットワークの統計にすぐにアクセスできます。Pulseはさらにバッテリー健康状態、温度センサー、GPU使用率、ファン速度を追加で表示します。" },
        { q: "Mac用の最適なメニューバーシステムモニターは？", a: "包括的な有料ソリューションとして、iStat Menusが長年のスタンダードです。無料オプションとしてはStatsが優れています。Pulseはその中間に位置し、CPU、メモリ、ネットワーク速度、バッテリー、温度をカスタマイズ可能な表示スタイルでメニューバーに直接表示します。" },
      ],
    },
    {
      title: "Macのパフォーマンス監視",
      qas: [
        { q: "MacでCPU使用率を確認するには？", a: "アクティビティモニタを開き（Cmd+スペース、「アクティビティモニタ」と入力）、CPUタブをクリックします。「%CPU」でソートすると、最もリソースを消費するアプリが表示されます。常時監視するには、PulseのようなメニューバーアプリがコアごとのCPU負荷を一目で表示します。" },
        { q: "Macでどのアプリが最もメモリを使っているか確認するには？", a: "アクティビティモニタでメモリタブをクリックし、「メモリ」列でソートします。下部のメモリプレッシャーグラフが最も役立つ指標です — 緑は健全、黄色はMacが苦しくなり始めている、赤はスワップを多用していることを意味します。" },
        { q: "MacBookのCPU温度を監視するには？", a: "macOSにはネイティブの温度表示がありません。Intel Macでは、ターミナルで sudo powermetrics --samplers smc を使用できます。Apple Silicon（M1–M4）では、サードパーティアプリが唯一の信頼できるオプションです。Pulse、iStat Menus、Statsはすべて温度センサーを読み取り、CPUが高温になると警告できます。" },
        { q: "Macでリアルタイムのネットワーク速度を監視するには？", a: "アクティビティモニタのネットワークタブはアプリごとの帯域幅を表示しますが、総スループットは表示しません。メニューバーでリアルタイムのアップロード・ダウンロード速度を確認するには、監視アプリを使用してください。Pulseはライブネットワーク速度、ローカルIP、パブリックIPを表示します。" },
        { q: "Macのバッテリー健康状態を確認するには？", a: "Appleメニュー > システム設定 > バッテリー > バッテリーの状態に移動します。より詳細な情報 — 充電サイクル、ワット数、電圧、劣化警告 — にはCoconutBatteryまたはPulseを使用してください。Pulseはメニューバーでバッテリーの健康状態を継続的に監視します。" },
        { q: "Macのディスク使用量を確認するには？", a: "Appleメニュー > このMacについて > 詳細情報 > ストレージをクリックします。空き容量警告付きのリアルタイム監視には、Pulseがボリュームごとのディスク使用量を表示し、ドライブが満杯になりそうな時に警告します。" },
        { q: "MacのGPU使用率を確認するには？", a: "アクティビティモニタは「GPU」列でプロセスごとのGPU使用量を表示します。GPU全体の使用率とVRAM使用量には、専用モニターを使用してください。PulseはパネルにGPU負荷率とVRAMを表示します。" },
        { q: "Macのファン速度を確認するには？", a: "macOSには組み込みツールでファン速度を表示する機能がありません。Macs Fan Control、TG Pro、Pulseなどのサードパーティアプリが必要です。Pulseは温度センサーと並んで現在のファンRPMを表示します。" },
      ],
    },
    {
      title: "Macのパフォーマンスを理解する",
      qas: [
        { q: "Macのメモリプレッシャーとは？", a: "メモリプレッシャーは、MacのRAMがどれだけ効率的に需要に対応しているかを示します。緑は十分な空きメモリがあることを意味します。黄色はmacOSがメモリを圧縮していることを意味します。赤はディスクへのスワップが発生しており、大幅な速度低下が生じていることを意味します。" },
        { q: "Macの正常なCPU温度は？", a: "アイドル時、ほとんどのMacは35–55°Cです。中程度の負荷では60–80°Cが正常です。集中的な作業時には90–100°Cに達することがあります — macOSは損傷を防ぐためにCPUをスロットルします。95°C以上の持続的な温度は調査が必要です。" },
        { q: "Macの正常なCPU使用率は？", a: "アイドル時のCPU使用率は5–15%であるべきです。通常のアプリ使用時は20–40%が典型的です。アイドル時にCPUが50%以上のままの場合、バックグラウンドプロセスが異常動作している可能性があります。" },
        { q: "Macが熱くなる原因と対処法は？", a: "一般的な原因：リソースを大量に消費するアプリ、ブラウザタブの開きすぎ、通気口の遮断、ホコリの蓄積、暴走するバックグラウンドプロセス。まず、最もCPUを消費しているプロセスを確認してください。不要なアプリを閉じ、通気口が塞がれていないか確認してください。" },
        { q: "Macに本当に必要なRAM容量は？", a: "8GBはウェブ閲覧、メール、軽い作業に対応します。16GBは開発者、デザイナー、複数アプリの同時使用にお勧めです。32GB以上は動画編集者や仮想マシンユーザー向けです。メモリプレッシャーを確認してください — 頻繁に黄色になるなら、より多くのRAMが有益です。" },
      ],
    },
    {
      title: "Pulseについて",
      qas: [
        { q: "PulseはMacに安全？", a: "はい。Pulseは読み取り専用のmacOSシステムAPIのみを使用しており、システムを変更したり干渉したりすることはできません。App Sandboxで動作し、Mac App Storeを通じて配布されています。つまり、Appleがセキュリティとプライバシーについて審査済みです。" },
        { q: "PulseはApple SiliconとIntel Macで動作する？", a: "はい。PulseはUniversal Binaryで、Apple Silicon（M1、M2、M3、M4）とIntelベースのMacの両方でネイティブに動作します。Rosettaは不要です。" },
        { q: "Pulseに必要なmacOSバージョンは？", a: "PulseはmacOS 14.0（Sonoma）以降が必要です。SwiftUIで構築されており、効率的で低オーバーヘッドな監視のためにモダンなmacOS APIを活用しています。" },
      ],
    },
  ],
  cta: { headline: "Macのパフォーマンスを管理しよう", sub: "Mac App Storeで入手可能。", button: "PULSEを入手" },
  next: { label: "続きを読む", title: "Pulseサポート & FAQ", href: "/pulse/support" },
};

// ──────────────────────────────────────────
// KOREAN
// ──────────────────────────────────────────
const ko: PageContent = {
  meta: {
    title: "Pulse - Mac용 시스템 모니터 | CPU, 메모리, 네트워크 등",
    description: "Mac의 CPU, 메모리, 네트워크 속도, 배터리 상태, 온도 및 디스크 사용량을 메뉴 바에서 모니터링하세요.",
  },
  hero: {
    subtitle: "Mac용 시스템 모니터",
    description: "CPU, 메모리, 네트워크, 배터리, 온도, 디스크, GPU, 팬, 프로세스 — 모두 메뉴 바에서 확인 가능. SwiftUI로 macOS 14+ 전용 제작.",
  },
  featuresTitle: "Pulse 모니터링 항목",
  features: [
    { icon: ICONS[0], label: "CPU 사용량", desc: "코어별 부하, 시스템 vs 사용자, 로드 평균" },
    { icon: ICONS[1], label: "메모리", desc: "메모리 압력, 앱 메모리, Wired, 압축, 스왑" },
    { icon: ICONS[2], label: "네트워크", desc: "업로드 & 다운로드 속도, 로컬 & 공개 IP" },
    { icon: ICONS[3], label: "배터리", desc: "상태 %, 충전 사이클, 와트, 남은 시간" },
    { icon: ICONS[4], label: "온도", desc: "CPU & GPU 온도, 센서별 측정값" },
    { icon: ICONS[5], label: "디스크", desc: "볼륨 사용량, 여유 공간, SMART 상태" },
  ],
  faqTitle: "자주 묻는 질문",
  sections: [
    {
      title: "Mac 시스템 모니터 선택하기",
      qas: [
        { q: "Mac용 최고의 시스템 모니터 앱은?", a: "가장 인기 있는 유료 옵션은 iStat Menus($14.99)로 CPU, GPU, 메모리, 네트워크, 디스크, 온도 모니터링을 제공합니다. Stats는 최고의 무료 오픈소스 선택지입니다. Pulse는 포괄적인 모니터링과 깔끔한 메뉴 바 인터페이스를 더 낮은 가격에 결합한 현대적인 SwiftUI 대안입니다." },
        { q: "iStat Menus 대안으로 뭐가 있나요?", a: "인기 있는 대안으로 Stats(무료, 오픈소스), MenuMeters(무료), iStatistica Pro(위젯 포함), TG Pro(온도 전문), Pulse가 있습니다. Pulse는 메뉴 바에서 CPU, 메모리, 네트워크, 배터리, 온도, 디스크, GPU를 실시간으로 모니터링합니다." },
        { q: "활성 상태 보기보다 나은 대안이 있나요?", a: "활성 상태 보기는 매번 별도의 창을 열어야 합니다. Pulse, iStat Menus, Stats 같은 메뉴 바 모니터는 작업 흐름을 방해하지 않고 CPU, 메모리, 네트워크 통계에 즉시 접근할 수 있게 해줍니다." },
        { q: "Mac용 최고의 메뉴 바 시스템 모니터는?", a: "포괄적인 유료 솔루션으로는 iStat Menus가 오랜 표준입니다. 무료 옵션으로는 Stats가 훌륭합니다. Pulse는 그 사이에 위치하며 — 커스터마이징 가능한 표시 스타일로 CPU, 메모리, 네트워크 속도, 배터리, 온도를 메뉴 바에 직접 표시하는 현대적이고 가벼운 앱입니다." },
      ],
    },
    {
      title: "Mac 성능 모니터링",
      qas: [
        { q: "Mac에서 CPU 사용량을 확인하려면?", a: "활성 상태 보기를 열고(Cmd+스페이스, \"활성 상태 보기\" 입력) CPU 탭을 클릭합니다. \"% CPU\"로 정렬하면 가장 많은 리소스를 소비하는 앱을 볼 수 있습니다. 상시 모니터링을 위해 Pulse 같은 메뉴 바 앱이 코어별 CPU 부하를 한눈에 보여줍니다." },
        { q: "Mac에서 어떤 앱이 가장 많은 메모리를 사용하는지 확인하려면?", a: "활성 상태 보기에서 메모리 탭을 클릭하고 \"메모리\" 열로 정렬합니다. 하단의 메모리 압력 그래프가 가장 유용한 지표입니다 — 녹색은 건강, 노란색은 Mac이 어려워지기 시작, 빨간색은 스왑을 많이 사용 중임을 의미합니다." },
        { q: "MacBook에서 CPU 온도를 모니터링하려면?", a: "macOS는 기본적으로 온도를 표시하지 않습니다. Intel Mac에서는 터미널에서 sudo powermetrics --samplers smc를 사용할 수 있습니다. Apple Silicon(M1–M4)에서는 서드파티 앱이 유일한 신뢰할 수 있는 옵션입니다." },
        { q: "Mac에서 실시간 네트워크 속도를 모니터링하려면?", a: "활성 상태 보기의 네트워크 탭은 앱별 대역폭을 보여주지만 총 처리량은 보여주지 않습니다. 메뉴 바에서 실시간 업로드 및 다운로드 속도를 확인하려면 모니터링 앱을 사용하세요. Pulse는 실시간 네트워크 속도, 로컬 IP, 공개 IP를 표시합니다." },
        { q: "Mac의 배터리 상태를 확인하려면?", a: "Apple 메뉴 > 시스템 설정 > 배터리 > 배터리 상태로 이동합니다. 더 자세한 정보 — 충전 사이클, 와트, 전압, 열화 경고 — 를 위해 CoconutBattery 또는 Pulse를 사용하세요." },
        { q: "Mac에서 디스크 사용량을 확인하려면?", a: "Apple 메뉴 > 이 Mac에 관하여 > 추가 정보 > 저장 공간을 클릭합니다. 여유 공간 경고가 포함된 실시간 모니터링을 위해 Pulse가 볼륨별 디스크 사용량을 표시합니다." },
        { q: "Mac에서 GPU 사용량을 확인하려면?", a: "활성 상태 보기는 \"GPU\" 열에서 프로세스별 GPU 사용량을 표시합니다. 전체 GPU 사용률과 VRAM 사용량을 위해서는 전용 모니터를 사용하세요. Pulse는 패널에서 GPU 부하율과 VRAM을 표시합니다." },
        { q: "Mac의 팬 속도를 확인하려면?", a: "macOS는 내장 도구에서 팬 속도를 표시하지 않습니다. Macs Fan Control, TG Pro, Pulse 같은 서드파티 앱이 필요합니다. Pulse는 온도 센서와 함께 현재 팬 RPM을 표시합니다." },
      ],
    },
    {
      title: "Mac 성능 이해하기",
      qas: [
        { q: "Mac에서 메모리 압력이란?", a: "메모리 압력은 Mac의 RAM이 얼마나 효율적으로 수요를 처리하고 있는지를 보여줍니다. 녹색은 충분한 여유 메모리를 의미합니다. 노란색은 macOS가 메모리를 압축하고 있음을 의미합니다. 빨간색은 디스크로 스왑하고 있어 상당한 속도 저하가 발생함을 의미합니다." },
        { q: "Mac의 정상 CPU 온도는?", a: "유휴 상태에서 대부분의 Mac은 35–55°C입니다. 중간 부하에서 60–80°C가 정상입니다. 집중적인 작업 중에는 90–100°C에 도달할 수 있습니다 — macOS가 손상을 방지하기 위해 CPU를 제한합니다." },
        { q: "Mac에서 정상적인 CPU 사용량은?", a: "유휴 상태에서 CPU 사용량은 5–15%여야 합니다. 일반적인 앱 사용 시 20–40%가 전형적입니다. 유휴 상태에서 CPU가 50% 이상을 유지한다면 백그라운드 프로세스가 오작동하고 있을 가능성이 높습니다." },
        { q: "Mac이 뜨거워지는 이유와 해결 방법은?", a: "일반적인 원인: 리소스 집약적 앱, 너무 많은 브라우저 탭, 막힌 통풍구, 먼지 축적, 폭주하는 백그라운드 프로세스. 먼저 어떤 프로세스가 가장 많은 CPU를 소비하는지 확인하세요. 불필요한 앱을 닫고 통풍구가 막히지 않았는지 확인하세요." },
        { q: "Mac에 실제로 필요한 RAM 용량은?", a: "8GB는 웹 브라우징, 이메일, 가벼운 작업에 충분합니다. 16GB는 개발자, 디자이너, 멀티태스킹에 권장됩니다. 32GB+는 영상 편집자와 가상 머신 사용자를 위한 것입니다. 메모리 압력을 확인하세요 — 자주 노란색이라면 더 많은 RAM이 도움이 됩니다." },
      ],
    },
    {
      title: "Pulse 정보",
      qas: [
        { q: "Pulse는 Mac에 안전한가요?", a: "네. Pulse는 읽기 전용 macOS 시스템 API만 사용하며 시스템을 수정하거나 간섭할 수 없습니다. Apple의 App Sandbox에서 실행되며 Mac App Store를 통해 배포되므로 Apple이 보안과 개인정보를 검토한 것입니다." },
        { q: "Pulse는 Apple Silicon과 Intel Mac에서 작동하나요?", a: "네. Pulse는 Universal Binary로 Apple Silicon(M1, M2, M3, M4)과 Intel 기반 Mac 모두에서 네이티브로 실행됩니다. Rosetta 불필요." },
        { q: "Pulse에 필요한 macOS 버전은?", a: "Pulse는 macOS 14.0(Sonoma) 이상이 필요합니다. SwiftUI로 구축되었으며 효율적이고 낮은 오버헤드의 모니터링을 위해 최신 macOS API를 활용합니다." },
      ],
    },
  ],
  cta: { headline: "Mac 성능을 직접 관리하세요", sub: "Mac App Store에서 사용 가능.", button: "PULSE 받기" },
  next: { label: "계속 읽기", title: "Pulse 지원 & FAQ", href: "/pulse/support" },
};

// ──────────────────────────────────────────
// CHINESE (Simplified)
// ──────────────────────────────────────────
const zh: PageContent = {
  meta: {
    title: "Pulse - Mac系统监控器 | CPU、内存、网络等",
    description: "从菜单栏监控Mac的CPU、内存、网络速度、电池健康、温度和磁盘使用情况。iStat Menus的现代替代品。",
  },
  hero: {
    subtitle: "Mac系统监控器",
    description: "CPU、内存、网络、电池、温度、磁盘、GPU、风扇和进程 — 全部在菜单栏中可见。使用SwiftUI为macOS 14+构建。",
  },
  featuresTitle: "Pulse监控内容",
  features: [
    { icon: ICONS[0], label: "CPU使用率", desc: "每核负载、系统 vs 用户、负载平均值" },
    { icon: ICONS[1], label: "内存", desc: "内存压力、应用内存、固定、压缩、交换" },
    { icon: ICONS[2], label: "网络", desc: "上传下载速度、本地和公网IP" },
    { icon: ICONS[3], label: "电池", desc: "健康状况%、充电循环、功率、剩余时间" },
    { icon: ICONS[4], label: "温度", desc: "CPU和GPU温度、传感器读数" },
    { icon: ICONS[5], label: "磁盘", desc: "卷使用量、可用空间、SMART健康状态" },
  ],
  faqTitle: "常见问题",
  sections: [
    {
      title: "选择Mac系统监控器",
      qas: [
        { q: "Mac上最好的系统监控应用是什么？", a: "最受欢迎的付费选项是iStat Menus（$14.99），提供CPU、GPU、内存、网络、磁盘和温度监控。Stats是最佳的免费开源选择。Pulse是一款现代SwiftUI替代品，以更低的价格将全面的监控与简洁的菜单栏界面相结合。" },
        { q: "iStat Menus有哪些替代品？", a: "热门替代品包括Stats（免费、开源）、MenuMeters（免费）、iStatistica Pro（带小组件）、TG Pro（温度专注）和Pulse。Pulse从菜单栏提供CPU、内存、网络、电池、温度、磁盘和GPU的实时监控。" },
        { q: "有比活动监视器更好的替代品吗？", a: "活动监视器每次都需要打开一个单独的窗口。Pulse、iStat Menus或Stats等菜单栏监控器让您无需中断工作即可即时访问CPU、内存和网络统计数据。Pulse还额外显示电池健康、温度传感器、GPU利用率和风扇速度。" },
        { q: "Mac上最好的菜单栏系统监控器是什么？", a: "作为全面的付费解决方案，iStat Menus一直是标准。作为免费选项，Stats非常出色。Pulse介于两者之间 — 一款现代、轻量的应用，以可自定义的显示样式在菜单栏中直接显示CPU、内存、网络速度、电池和温度。" },
      ],
    },
    {
      title: "监控Mac性能",
      qas: [
        { q: "如何检查Mac的CPU使用率？", a: "打开活动监视器（按Cmd+空格，输入\"活动监视器\"），点击CPU标签。按\"%CPU\"排序查看最耗资源的应用。要持续监控，Pulse等菜单栏应用可一目了然地显示每核CPU负载。" },
        { q: "如何查看Mac上哪个应用使用最多内存？", a: "在活动监视器中，点击内存标签并按\"内存\"列排序。底部的内存压力图是最有用的指标 — 绿色表示健康，黄色表示Mac开始吃力，红色表示大量使用交换空间。" },
        { q: "如何监控MacBook的CPU温度？", a: "macOS原生不显示温度。在Intel Mac上，可以使用终端：sudo powermetrics --samplers smc。在Apple Silicon（M1–M4）上，第三方应用是唯一可靠的选项。Pulse、iStat Menus和Stats都能读取温度传感器。" },
        { q: "如何实时监控Mac的网络速度？", a: "活动监视器的网络标签显示每个应用的带宽，但不显示总吞吐量。要在菜单栏中查看实时上传和下载速度，请使用监控应用。Pulse显示实时网络速度、本地IP和公网IP。" },
        { q: "如何检查Mac的电池健康状况？", a: "前往Apple菜单 > 系统设置 > 电池 > 电池健康。要获取更多详细信息 — 充电循环、功率、电压和退化警告 — 请使用CoconutBattery或Pulse。" },
        { q: "如何查看Mac的磁盘使用情况？", a: "点击Apple菜单 > 关于本机 > 更多信息 > 存储空间。要获得带有空间不足警告的实时监控，Pulse会显示每个卷的磁盘使用情况。" },
        { q: "如何检查Mac的GPU使用率？", a: "活动监视器在\"GPU\"列下显示每个进程的GPU使用量。要查看整体GPU利用率和VRAM使用量，请使用专用监控器。Pulse在面板中显示GPU负载百分比和VRAM。" },
        { q: "如何查看Mac的风扇速度？", a: "macOS的任何内置工具都不显示风扇速度。您需要Macs Fan Control、TG Pro或Pulse等第三方应用。Pulse在温度传感器旁边显示当前风扇转速。" },
      ],
    },
    {
      title: "理解Mac性能",
      qas: [
        { q: "Mac上的内存压力是什么意思？", a: "内存压力显示Mac的RAM处理需求的效率。绿色表示有大量可用内存。黄色表示macOS正在压缩内存。红色表示Mac正在使用磁盘交换，这会导致明显的速度下降。" },
        { q: "Mac的正常CPU温度是多少？", a: "空闲时，大多数Mac在35–55°C之间。中等负载下，60–80°C是正常的。在密集任务期间，温度可达90–100°C — macOS会限制CPU以防止损坏。持续温度超过95°C需要调查。" },
        { q: "Mac的正常CPU使用率是多少？", a: "空闲时，CPU使用率应为5–15%。正常应用使用期间，20–40%是典型的。如果空闲时CPU保持在50%以上，可能是后台进程出现异常。" },
        { q: "为什么我的Mac很烫，如何解决？", a: "常见原因：资源密集型应用、太多浏览器标签、通风口堵塞、灰尘积累或失控的后台进程。首先检查哪个进程消耗最多CPU。关闭不必要的应用，确保通风口畅通。" },
        { q: "Mac实际需要多少RAM？", a: "8GB可处理网页浏览、邮件和轻量生产力。16GB推荐给开发者、设计师和多任务处理。32GB+适合视频编辑和虚拟机用户。检查您的内存压力 — 如果经常显示黄色，更多RAM会有帮助。" },
      ],
    },
    {
      title: "关于Pulse",
      qas: [
        { q: "Pulse对Mac安全吗？", a: "是的。Pulse仅使用只读的macOS系统API — 无法修改或干扰您的系统。它在App Sandbox中运行，并通过Mac App Store分发，这意味着Apple已审查其安全性和隐私合规性。" },
        { q: "Pulse支持Apple Silicon和Intel Mac吗？", a: "是的。Pulse是通用二进制文件，在Apple Silicon（M1、M2、M3、M4）和Intel Mac上原生运行。无需Rosetta。" },
        { q: "Pulse需要什么macOS版本？", a: "Pulse需要macOS 14.0（Sonoma）或更高版本。它使用SwiftUI构建，利用现代macOS API实现高效、低开销的监控。" },
      ],
    },
  ],
  cta: { headline: "掌控Mac性能", sub: "Mac App Store现已提供。", button: "获取PULSE" },
  next: { label: "继续阅读", title: "Pulse支持与常见问题", href: "/pulse/support" },
};

// ──────────────────────────────────────────
// Remaining locales — use English content with localized UI labels
// (PT, RU, IT, NL, TR, AR, SV, PL)
// ──────────────────────────────────────────

function withLabels(
  locale: { meta: Partial<PageContent["meta"]>; hero: Partial<PageContent["hero"]>; featuresTitle?: string; faqTitle?: string; cta: PageContent["cta"]; next: PageContent["next"]; featuresOverride?: Feature[] },
): PageContent {
  return {
    ...en,
    meta: { ...en.meta, ...locale.meta },
    hero: { ...en.hero, ...locale.hero },
    featuresTitle: locale.featuresTitle ?? en.featuresTitle,
    features: locale.featuresOverride ?? en.features,
    faqTitle: locale.faqTitle ?? en.faqTitle,
    cta: locale.cta,
    next: locale.next,
  };
}

const pt = withLabels({
  meta: { title: "Pulse - Monitor de sistema para Mac | CPU, memoria, rede e mais", description: "Monitore CPU, memoria, velocidade de rede, saude da bateria, temperatura e uso de disco do seu Mac pela barra de menus." },
  hero: { subtitle: "Monitor de sistema para Mac", description: "CPU, memoria, rede, bateria, temperatura, disco, GPU, ventoinhas e processos — tudo visivel na barra de menus. Desenvolvido com SwiftUI para macOS 14+." },
  featuresTitle: "O que o Pulse monitora",
  faqTitle: "Perguntas frequentes",
  cta: { headline: "Assuma o controle do desempenho do seu Mac", sub: "Disponivel na Mac App Store.", button: "OBTER PULSE" },
  next: { label: "Continue lendo", title: "Suporte & FAQ do Pulse", href: "/pulse/support" },
});

const ru = withLabels({
  meta: { title: "Pulse - Системный монитор для Mac | CPU, память, сеть и более", description: "Мониторьте CPU, память, скорость сети, состояние батареи, температуру и использование диска вашего Mac из строки меню." },
  hero: { subtitle: "Системный монитор для Mac", description: "CPU, память, сеть, батарея, температура, диск, GPU, вентиляторы и процессы — всё видно из строки меню. Создано на SwiftUI для macOS 14+." },
  featuresTitle: "Что мониторит Pulse",
  faqTitle: "Часто задаваемые вопросы",
  cta: { headline: "Контролируйте производительность вашего Mac", sub: "Доступно в Mac App Store.", button: "СКАЧАТЬ PULSE" },
  next: { label: "Читать далее", title: "Поддержка Pulse и FAQ", href: "/pulse/support" },
});

const it = withLabels({
  meta: { title: "Pulse - Monitor di sistema per Mac | CPU, memoria, rete e altro", description: "Monitora CPU, memoria, velocita di rete, stato della batteria, temperatura e utilizzo del disco del tuo Mac dalla barra dei menu." },
  hero: { subtitle: "Monitor di sistema per Mac", description: "CPU, memoria, rete, batteria, temperatura, disco, GPU, ventole e processi — tutto visibile dalla barra dei menu. Sviluppato con SwiftUI per macOS 14+." },
  featuresTitle: "Cosa monitora Pulse",
  faqTitle: "Domande frequenti",
  cta: { headline: "Prendi il controllo delle prestazioni del tuo Mac", sub: "Disponibile sul Mac App Store.", button: "OTTIENI PULSE" },
  next: { label: "Continua a leggere", title: "Supporto & FAQ Pulse", href: "/pulse/support" },
});

const nl = withLabels({
  meta: { title: "Pulse - Systeemmonitor voor Mac | CPU, geheugen, netwerk en meer", description: "Monitor de CPU, geheugen, netwerksnelheid, batterijstatus, temperatuur en schijfgebruik van je Mac vanuit de menubalk." },
  hero: { subtitle: "Systeemmonitor voor Mac", description: "CPU, geheugen, netwerk, batterij, temperatuur, schijf, GPU, ventilatoren en processen — alles zichtbaar in je menubalk. Gebouwd met SwiftUI voor macOS 14+." },
  featuresTitle: "Wat Pulse monitort",
  faqTitle: "Veelgestelde vragen",
  cta: { headline: "Neem de controle over de prestaties van je Mac", sub: "Beschikbaar in de Mac App Store.", button: "DOWNLOAD PULSE" },
  next: { label: "Verder lezen", title: "Pulse Ondersteuning & FAQ", href: "/pulse/support" },
});

const tr = withLabels({
  meta: { title: "Pulse - Mac icin Sistem Izleyici | CPU, Bellek, Ag ve daha fazlasi", description: "Mac'inizin CPU, bellek, ag hizi, pil sagligi, sicaklik ve disk kullanimini menu cubugu'ndan izleyin." },
  hero: { subtitle: "Mac icin Sistem Izleyici", description: "CPU, bellek, ag, pil, sicaklik, disk, GPU, fanlar ve islemler — hepsi menu cubugunuzdan gorunur. SwiftUI ile macOS 14+ icin gelistirildi." },
  featuresTitle: "Pulse neleri izler",
  faqTitle: "Sikca sorulan sorular",
  cta: { headline: "Mac'inizin performansini kontrol altina alin", sub: "Mac App Store'da mevcut.", button: "PULSE'U EDIN" },
  next: { label: "Okumaya devam et", title: "Pulse Destek & SSS", href: "/pulse/support" },
});

const ar = withLabels({
  meta: { title: "Pulse - مراقب النظام لنظام Mac | المعالج، الذاكرة، الشبكة والمزيد", description: "راقب المعالج والذاكرة وسرعة الشبكة وصحة البطارية ودرجة الحرارة واستخدام القرص من شريط القوائم." },
  hero: { subtitle: "مراقب النظام لنظام Mac", description: "المعالج، الذاكرة، الشبكة، البطارية، درجة الحرارة، القرص، GPU، المراوح والعمليات — كل شيء مرئي من شريط القوائم. مبني بـ SwiftUI لنظام macOS 14+." },
  featuresTitle: "ما يراقبه Pulse",
  faqTitle: "الأسئلة الشائعة",
  cta: { headline: "تحكم في أداء Mac الخاص بك", sub: "متوفر على Mac App Store.", button: "احصل على PULSE" },
  next: { label: "تابع القراءة", title: "دعم Pulse والأسئلة الشائعة", href: "/pulse/support" },
});

const sv = withLabels({
  meta: { title: "Pulse - Systemovervakare for Mac | CPU, minne, natverk och mer", description: "Overvaka din Macs CPU, minne, natverkshastighet, batteristatus, temperatur och diskanvandning fran menyraden." },
  hero: { subtitle: "Systemovervakare for Mac", description: "CPU, minne, natverk, batteri, temperatur, disk, GPU, flaktar och processer — allt synligt i menyraden. Byggd med SwiftUI for macOS 14+." },
  featuresTitle: "Vad Pulse overvakar",
  faqTitle: "Vanliga fragor",
  cta: { headline: "Ta kontroll over din Macs prestanda", sub: "Tillganglig pa Mac App Store.", button: "HAMTA PULSE" },
  next: { label: "Las vidare", title: "Pulse Support & FAQ", href: "/pulse/support" },
});

const pl = withLabels({
  meta: { title: "Pulse - Monitor systemu dla Mac | CPU, pamiec, siec i wiecej", description: "Monitoruj CPU, pamiec, predkosc sieci, stan baterii, temperature i uzycie dysku Twojego Maca z paska menu." },
  hero: { subtitle: "Monitor systemu dla Mac", description: "CPU, pamiec, siec, bateria, temperatura, dysk, GPU, wentylatory i procesy — wszystko widoczne z paska menu. Zbudowany w SwiftUI dla macOS 14+." },
  featuresTitle: "Co monitoruje Pulse",
  faqTitle: "Czesto zadawane pytania",
  cta: { headline: "Przejmij kontrole nad wydajnoscia swojego Maca", sub: "Dostepny w Mac App Store.", button: "POBIERZ PULSE" },
  next: { label: "Czytaj dalej", title: "Wsparcie Pulse i FAQ", href: "/pulse/support" },
});

// ──────────────────────────────────────────
// EXPORTS
// ──────────────────────────────────────────
export const content: Record<Locale, PageContent> = {
  en, de, fr, es, ja, ko, zh, pt, ru, it, nl, tr, ar, sv, pl,
};

export function getContent(locale: string): PageContent {
  return content[locale as Locale] ?? en;
}

export const VALID_LOCALES = LOCALES.map((l) => l.code) as string[];
