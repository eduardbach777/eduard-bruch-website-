import type { ArticleSet } from "./index";

export const deArticles: ArticleSet = {
  "how-to-check-cpu-temperature-on-mac": {
    slug: "how-to-check-cpu-temperature-on-mac",
    title: "CPU-Temperatur auf dem Mac prüfen (2026 Anleitung)",
    description:
      "Erfahren Sie, wie Sie die CPU-Temperatur Ihres Macs überwachen — von Terminal-Befehlen bis zu Drittanbieter-Apps. Für Apple Silicon und Intel Macs mit normalen Temperaturbereichen.",
    date: "2026-04-02",
    content: `
<p>Die CPU-Temperatur Ihres Macs ist eine der wichtigsten Kennzahlen, die Sie im Auge behalten sollten — besonders wenn Sie Ihre Maschine mit Videobearbeitung, Softwareentwicklung oder Gaming fordern. Ein überhitzender Prozessor führt zu thermischem Drosseln, reduzierter Leistung und — langfristig — verkürzter Hardware-Lebensdauer. Dennoch bietet macOS keine eingebaute Temperaturanzeige in der Aktivitätsanzeige oder den Systemeinstellungen. In dieser Anleitung zeigen wir Ihnen jede zuverlässige Methode zur Überprüfung der CPU-Temperatur auf einem Mac im Jahr 2026, sowohl für Apple Silicon als auch Intel-Maschinen.</p>

<h2>Warum die CPU-Temperatur wichtig ist</h2>
<p>Moderne Prozessoren sind für den Betrieb innerhalb einer bestimmten thermischen Hüllkurve ausgelegt. Wenn die CPU diese Hüllkurve überschreitet, reduziert das System die Taktfrequenz, um weniger Wärme zu erzeugen — ein Prozess namens <strong>thermisches Drosseln</strong>. Auf einem MacBook kann dies eine schnelle Maschine innerhalb von Minuten bei anhaltender Belastung in eine träge verwandeln. Auf einem Mac Studio oder Mac Pro kann es bedeuten, dass Ihre Renderings deutlich länger dauern als nötig.</p>
<p>Die Temperaturüberwachung hilft Ihnen auch, Probleme frühzeitig zu erkennen. Ein mit Staub verstopfter Lüfter, ausgetrocknete Wärmeleitpaste oder ein defektes Kühlsystem zeigen sich als ungewöhnlich hohe Leerlauftemperaturen, lange bevor Sie andere Symptome bemerken. Das frühzeitige Erkennen dieser Probleme kann Ihnen eine teure Reparatur ersparen.</p>

<h2>Normale CPU-Temperaturbereiche</h2>
<p>Bevor Sie mit der Überwachung beginnen, hilft es zu wissen, welche Werte normal sind:</p>
<ul>
<li><strong>Leerlauf (leichtes Surfen, E-Mail):</strong> 35 °C – 55 °C für Apple Silicon, 40 °C – 60 °C für Intel Macs.</li>
<li><strong>Moderate Last (Code kompilieren, Fotobearbeitung):</strong> 60 °C – 80 °C bei Apple Silicon, 65 °C – 85 °C bei Intel.</li>
<li><strong>Hohe Last (Videoexport, 3D-Rendering, Stresstests):</strong> 80 °C – 100 °C bei Apple Silicon, 85 °C – 100 °C bei Intel.</li>
<li><strong>Thermische Drosselschwelle:</strong> Apple-Silicon-Chips beginnen typischerweise bei etwa 105 °C–110 °C zu drosseln. Intel-Macs drosseln je nach Chip bei etwa 100 °C–105 °C.</li>
</ul>
<p>Wenn Ihr Mac im Leerlauf oder bei leichter Belastung konstant über 90 °C liegt, stimmt wahrscheinlich etwas mit der Kühlung nicht oder ein Prozess verbraucht unkontrolliert Ressourcen.</p>

<h2>Apple Silicon vs. Intel: Wichtige Unterschiede</h2>
<p>Apples M-Serie-Chips (M1, M2, M3, M4 und deren Pro/Max/Ultra-Varianten) basieren auf der ARM-Architektur und sind deutlich energieeffizienter als Intels x86-Chips. Das bedeutet, dass Apple-Silicon-Macs generell kühler laufen, wobei die MacBook-Air-Modelle bekanntlich keinen Lüfter haben. Intel-basierte Macs, insbesondere die 15- und 16-Zoll MacBook Pro-Modelle von 2019 und früher, waren dafür bekannt, unter Last heiß zu werden.</p>
<p>Die Tools zum Auslesen der Temperatur unterscheiden sich leicht zwischen den beiden Architekturen. Einige ältere Dienstprogramme, die auf Intels SMC-Schlüssel (System Management Controller) angewiesen waren, funktionieren nicht auf Apple Silicon. Überprüfen Sie immer, ob Ihr gewähltes Tool Ihre Chip-Generation ausdrücklich unterstützt.</p>

<h2>Methode 1: Terminal mit powermetrics (Apple Silicon)</h2>
<p>Auf Apple-Silicon-Macs liefert der eingebaute <strong>powermetrics</strong>-Befehl detaillierte Thermaldaten. Öffnen Sie Terminal und führen Sie aus:</p>
<p><strong>sudo powermetrics --samplers smc -i 1000 -n 1</strong></p>
<p>Dies gibt eine Momentaufnahme der SMC-Sensordaten aus, einschließlich der CPU-Die-Temperatur. Das Flag <strong>-i 1000</strong> setzt ein Abtastintervall von einer Sekunde, und <strong>-n 1</strong> begrenzt auf eine einzige Messung. Sie müssen Ihr Administrator-Passwort eingeben. Suchen Sie in der Ausgabe nach Zeilen mit „CPU die temperature" oder „SOC temperature".</p>
<p>Diese Methode ist kostenlos, erfordert keine Drittanbieter-Software und liefert genaue Messwerte direkt von Apples eigenen Systemtools. Der Nachteil ist, dass es eine Einzelmessung ist — kein Live-Dashboard.</p>

<h2>Methode 2: Terminal mit istats (Intel Macs)</h2>
<p>Wenn Sie einen Intel-basierten Mac nutzen und Homebrew installiert haben, können Sie das <strong>iStats</strong>-Ruby-Gem installieren:</p>
<p><strong>gem install iStats</strong></p>
<p>Führen Sie dann einfach <strong>istats</strong> im Terminal aus, um CPU-Temperatur, Lüftergeschwindigkeiten und Akkutemperatur zu sehen. Dieses Tool liest direkt vom SMC und ist leichtgewichtig, funktioniert aber nur auf Intel-Macs. Es unterstützt kein Apple Silicon.</p>

<h2>Methode 3: Menüleisten-Apps</h2>
<p>Für die kontinuierliche Überwachung ist ein Menüleisten-Programm weitaus praktischer als Terminal-Befehle. Es gibt mehrere Optionen:</p>

<h3>Pulse</h3>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> ist ein moderner Systemmonitor, der mit SwiftUI für macOS 14 und neuer entwickelt wurde. Er zeigt CPU-Temperatur, GPU-Temperatur, Sensor-Werte, Lüftergeschwindigkeiten, CPU-Last, Speicherdruck, Netzwerkgeschwindigkeit, Akkugesundheit und Festplattennutzung an — alles über kompakte Menüleisten-Widgets. Pulse unterstützt sowohl Apple Silicon als auch Intel Macs und ist auf minimalen Ressourcenverbrauch ausgelegt. Er ist im Mac App Store erhältlich.</p>

<h3>iStat Menus</h3>
<p>iStat Menus ist seit über einem Jahrzehnt der Standard-Systemmonitor für Mac-Power-User. Es bietet hochgradig anpassbare Menüleisten-Anzeigen und Dropdown-Panels für CPU, Speicher, Festplatten, Netzwerk, Sensoren und Akku. Es unterstützt sowohl Apple Silicon als auch Intel, hat aber einen höheren Preis und wird als Abo über Setapp oder als Einmalkauf über die Website des Entwicklers verkauft.</p>

<h3>TG Pro</h3>
<p>TG Pro konzentriert sich speziell auf Temperaturüberwachung und Lüftersteuerung. Wenn Ihr Hauptanliegen das Wärmemanagement ist, lässt TG Pro Sie benutzerdefinierte Lüfterkurven und Alarme einstellen. Es unterstützt beide Architekturen und enthält einen Diagnosemodus zur Identifizierung defekter Sensoren.</p>

<h3>Stats</h3>
<p>Stats ist eine kostenlose Open-Source-Alternative, die grundlegende Systemmetriken in der Menüleiste anzeigt. Es unterstützt Temperaturanzeigen auf Apple Silicon und Intel, wobei die Oberfläche weniger poliert ist als bei kommerziellen Alternativen.</p>

<h2>Methode 4: Desktop-Anwendungen von Drittanbietern</h2>
<p>Neben Menüleisten-Programmen bieten einige Anwendungen vollständige Fenster-Dashboards. <strong>Intel Power Gadget</strong> war früher beliebt für Intel-Macs, wurde aber eingestellt und unterstützt kein Apple Silicon. <strong>Macs Fan Control</strong> bietet eine einfache Oberfläche zum Anzeigen von Temperaturen und Einstellen von Lüftergeschwindigkeiten und funktioniert auf beiden Architekturen.</p>

<h2>Was tun, wenn Ihr Mac heiß läuft</h2>
<p>Wenn Sie feststellen, dass die Temperaturen konstant höher sind als die oben aufgeführten Bereiche, hier sind die empfohlenen Schritte:</p>
<ol>
<li><strong>Aktivitätsanzeige prüfen:</strong> Öffnen Sie die Aktivitätsanzeige und sortieren Sie nach CPU-Auslastung. Ein außer Kontrolle geratener Prozess (oft eine Browser-Erweiterung oder eine hängende Anwendung) kann die CPU unbegrenzt auf 100 % halten.</li>
<li><strong>Unnötige Tabs und Apps schließen:</strong> Jeder Chrome- oder Safari-Tab verbraucht CPU-Zyklen und Arbeitsspeicher und trägt zur Wärme bei.</li>
<li><strong>Luftzirkulation sicherstellen:</strong> Vermeiden Sie es, Ihr MacBook auf weichen Oberflächen zu verwenden, die die Lüftungsschlitze blockieren. Ein Laptop-Ständer mit guter Luftzirkulation kann die Temperaturen um mehrere Grad senken.</li>
<li><strong>Lüfter reinigen:</strong> Mit der Zeit sammelt sich Staub auf den internen Lüftern und dem Kühlkörper. Wenn Sie sich zutrauen, Ihren Mac zu öffnen, kann Druckluft die Ablagerungen entfernen. Andernfalls bringen Sie ihn zu einem Apple Store oder autorisierten Serviceanbieter.</li>
<li><strong>SMC zurücksetzen (Intel) oder neustarten (Apple Silicon):</strong> Auf Intel-Macs kann ein SMC-Reset lüfterbezogene Probleme lösen. Auf Apple Silicon erreicht ein einfacher Neustart denselben Effekt, da der SMC in den Chip integriert ist.</li>
<li><strong>Wärmeleitpaste prüfen:</strong> Bei älteren Intel-Macs (5+ Jahre) kann die Wärmeleitpaste zwischen CPU und Kühlkörper austrocknen und die Wärmeübertragung drastisch reduzieren. Das Erneuern ist eine fortgeschrittene Reparatur, kann aber die Temperaturen deutlich senken.</li>
</ol>

<h2>Temperatur über die Zeit überwachen</h2>
<p>Eine einzelne Temperaturmessung ist nützlich, aber Trends erzählen eine vollständigere Geschichte. Apps wie <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> können Echtzeit-Grafiken der CPU-Temperatur zusammen mit der CPU-Last anzeigen, sodass hohe Temperaturen leicht mit bestimmten Arbeitslasten korreliert werden können. Wenn Sie bemerken, dass Ihr Mac während eines Videoanrufs 95 °C erreicht, aber beim Surfen bei 60 °C bleibt, ist die Ursache klar.</p>

<h2>Zusammenfassung</h2>
<p>Die CPU-Temperatur Ihres Macs im Jahr 2026 zu überprüfen ist unkompliziert, ob Sie Terminal-Befehle, kostenlose Open-Source-Tools oder polierte Menüleisten-Apps bevorzugen. Die wichtigste Erkenntnis ist, dass regelmäßige Überwachung Ihnen hilft, Probleme frühzeitig zu erkennen, Spitzenleistung zu erhalten und die Lebensdauer Ihrer Hardware zu verlängern. Wählen Sie die Methode, die zu Ihrem Arbeitsablauf passt, und gewöhnen Sie sich an, einen Blick auf Ihre Thermaldaten zu werfen — besonders bei anspruchsvollen Aufgaben.</p>
`,
  },

  "what-is-memory-pressure-on-mac": {
    slug: "what-is-memory-pressure-on-mac",
    title: "Was ist Speicherdruck auf dem Mac und warum er wichtig ist",
    description:
      "Verstehen Sie den macOS-Speicherdruck — grüne, gelbe und rote Stufen — und erfahren Sie, wie Ihr Mac RAM mit komprimiertem, gebundenem und App-Speicher verwaltet.",
    date: "2026-04-02",
    content: `
<p>Wenn Sie jemals die Aktivitätsanzeige auf Ihrem Mac geöffnet und den Speicherdruck-Graphen unten im Speicher-Tab bemerkt haben, haben Sie sich vielleicht gefragt, was er tatsächlich bedeutet. Anders als die einfache Anzeige „X GB von Y GB verwendet", die die meisten erwarten, verwendet macOS ein differenzierteres System namens <strong>Speicherdruck</strong>, um anzuzeigen, wie effizient Ihr RAM genutzt wird. Das Verständnis dieser Metrik ist essentiell für die Diagnose von Leistungsproblemen, die Entscheidung ob Sie mehr RAM benötigen und das reibungslose Funktionieren Ihres Macs.</p>

<h2>Speicherdruck erklärt</h2>
<p>Speicherdruck ist eine zusammengesetzte Metrik, die widerspiegelt, wie viel Nachfrage auf den physischen RAM Ihres Macs (auch bekannt als Hauptspeicher oder Unified Memory bei Apple Silicon) ausgeübt wird. Er wird als farbcodierter Graph in der Aktivitätsanzeige dargestellt:</p>
<ul>
<li><strong>Grün:</strong> Ihr System hat reichlich verfügbaren Speicher. Anwendungen laufen ohne Einschränkungen, und das System greift nicht auf aggressive Speicherverwaltungstechniken zurück. Dies ist der ideale Zustand.</li>
<li><strong>Gelb:</strong> Speicherressourcen werden knapp. macOS komprimiert aktiv Speicher und beginnt möglicherweise, auf Swap (festplattenbasierter virtueller Speicher) zu schreiben. Die Leistung kann leicht nachlassen, besonders auf Maschinen mit langsamerem Speicher.</li>
<li><strong>Rot:</strong> Das System steht unter starkem Speicherdruck. macOS nutzt Swap intensiv, komprimiert aggressiv und kann Hintergrundprozesse beenden, um Speicher freizugeben. Anwendungen fühlen sich langsam an, das Wechseln zwischen Apps verursacht sichtbare Verzögerungen, und das System kann in extremen Fällen nicht mehr reagieren.</li>
</ul>
<p>Die wichtige Erkenntnis ist, dass die Menge des „verwendeten" Speichers in der Aktivitätsanzeige nicht direkt mit dem Speicherdruck korreliert. Ihr Mac kann 15 GB von 16 GB als „verwendet" anzeigen und trotzdem grünen Speicherdruck haben, weil macOS intelligent Dateien zwischenspeichert und Daten vorlädt, um zukünftige Operationen zu beschleunigen. Dieser zwischengespeicherte Speicher ist sofort verfügbar, wenn eine App ihn braucht.</p>

<h2>Wie macOS den Speicher verwaltet</h2>
<p>macOS nutzt mehrere ausgefeilte Techniken zur effizienten Speicherverwaltung. Das Verständnis dieser erklärt, warum Speicherdruck wichtiger ist als reine Nutzungszahlen.</p>

<h3>App-Speicher</h3>
<p>App-Speicher ist RAM, der aktiv von laufenden Anwendungen genutzt wird. Dies umfasst den Code der Anwendung selbst, ihre Datenstrukturen, Texturen, Puffer und alle anderen Zuweisungen. Wenn Sie eine App schließen, wird ihr App-Speicher freigegeben.</p>

<h3>Gebundener Speicher</h3>
<p>Gebundener Speicher ist RAM, der unter keinen Umständen komprimiert, auf die Festplatte ausgelagert oder freigegeben werden kann, solange das System läuft. Er wird vom Kernel, Gerätetreibern und kritischen Systemprozessen verwendet. Gebundener Speicher beträgt typischerweise 2–6 GB, abhängig von Ihrer Konfiguration und angeschlossenen Peripheriegeräten.</p>

<h3>Komprimierter Speicher</h3>
<p>Dies ist einer der cleversten Tricks von macOS. Wenn der physische RAM knapp wird, komprimiert macOS den Inhalt inaktiver Speicherseiten, anstatt sie auf die Festplatte zu schreiben. Komprimierung ist auf modernen CPUs extrem schnell und hält Daten im RAM, was um Größenordnungen schneller ist als das Lesen von einer SSD. Eine moderate Menge komprimierten Speichers ist normal und zeigt kein Problem an — es bedeutet, dass macOS Ihren RAM effizient nutzt.</p>

<h3>Zwischengespeicherte Dateien</h3>
<p>macOS speichert kürzlich aufgerufene Dateien im RAM, damit das erneute Öffnen eines Dokuments, das Wechseln zu einer kürzlich verwendeten App oder das Laden einer Webseite nahezu sofort erfolgt. Diese zwischengespeicherten Daten werden als „verwendeter" Speicher angezeigt, sind aber frei verfügbar — das System gibt sie sofort frei, wenn eine Anwendung mehr Speicher anfordert.</p>

<h3>Swap (Virtueller Speicher)</h3>
<p>Wenn der physische RAM wirklich erschöpft ist und Komprimierung allein nicht ausreicht, schreibt macOS Daten in eine Swap-Datei auf Ihrer SSD oder Festplatte. Swap ist dramatisch langsamer als RAM — selbst auf den schnellsten NVMe-SSDs. Übermäßige Swap-Nutzung ist die Hauptursache für die Trägheit und das drehende Warterad, die man mit „Speichermangel" assoziiert.</p>

<h2>Speicherdruck in der Praxis interpretieren</h2>
<p>Hier sind reale Szenarien und was der Speicherdruck-Graph Ihnen sagt:</p>
<ol>
<li><strong>Grün mit hohem Speicherverbrauch:</strong> Völlig normal. macOS nutzt RAM effektiv zum Caching. Keine Maßnahmen nötig.</li>
<li><strong>Gelb nach dem Öffnen vieler Apps:</strong> Sie nähern sich den Grenzen Ihres physischen RAMs. Erwägen Sie, ungenutzte Anwendungen zu schließen. Wenn dies regelmäßig bei Ihrem normalen Workflow passiert, ist es möglicherweise Zeit für mehr RAM.</li>
<li><strong>Rot bei intensiven Aufgaben:</strong> Ihr Mac hat nicht genug RAM für Ihre aktuelle Arbeitslast. Wenn dies selten vorkommt, können Sie es abwarten. Wenn es häufig passiert, müssen Sie entweder Ihre Arbeitslast reduzieren oder Ihre Hardware aufrüsten.</li>
<li><strong>Rot im Leerlauf:</strong> Etwas stimmt nicht. Ein Hintergrundprozess oder ein Speicherleck in einer Anwendung verbraucht eine abnormale Menge RAM.</li>
</ol>

<h2>Speicherdruck mit Menüleisten-Apps überwachen</h2>
<p>Die Aktivitätsanzeige erfordert, dass Sie eine separate Anwendung öffnen und einen kleinen Graphen interpretieren. Für Benutzer, die den Speicherdruck auf einen Blick überwachen möchten, sind Menüleisten-Programme weitaus praktischer.</p>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> zeigt den Speicherdruck direkt in Ihrer Menüleiste als farbcodierten Indikator zusammen mit numerischen Werten für verwendeten, komprimierten und Swap-Speicher an. So sehen Sie auf einen Blick, ob Ihr System grün, gelb oder rot ist, ohne Ihren Arbeitsablauf zu unterbrechen.</p>

<h2>Wie viel RAM brauchen Sie wirklich?</h2>
<p>Apples Unified-Memory-Architektur bei Apple Silicon bedeutet, dass RAM zwischen CPU, GPU und Neural Engine geteilt wird. Dies nutzt jeden Gigabyte effizient, bedeutet aber auch, dass GPU-intensive Aufgaben RAM verbrauchen, der sonst für Anwendungen verfügbar wäre.</p>
<ul>
<li><strong>8 GB:</strong> Ausreichend für leichte Nutzung — Surfen, E-Mail, Dokumentenbearbeitung, Streaming.</li>
<li><strong>16 GB:</strong> Der Sweet Spot für die meisten Benutzer, einschließlich Entwickler, Fotografen und gelegentliche Videobearbeiter.</li>
<li><strong>24 GB – 32 GB:</strong> Empfohlen für professionelle Workflows — Videobearbeitung, große Xcode-Projekte, virtuelle Maschinen oder Arbeit mit großen Datensätzen.</li>
<li><strong>64 GB – 192 GB:</strong> Spezialisierte Arbeitslasten wie lokale Large Language Models, 8K-Videobearbeitung oder massive wissenschaftliche Berechnungen.</li>
</ul>

<h2>Wann Sie sich Sorgen machen und wann aufrüsten sollten</h2>
<p>Wenn Ihr Speicherdruck-Graph während Ihres täglichen Workflows konstant gelb ist, befinden Sie sich in der Zone, in der ein Upgrade Ihre Erfahrung spürbar verbessern würde. Wenn er regelmäßig rot ist, wird ein Upgrade dringend empfohlen.</p>
<p>Bedenken Sie, dass Apple-Silicon-Macs verlöteten RAM haben, der nach dem Kauf nicht aufgerüstet werden kann. Dies macht die anfängliche RAM-Konfiguration zu einer kritischen Entscheidung. Im Zweifelsfall wählen Sie die nächsthöhere Stufe.</p>

<h2>Zusammenfassung</h2>
<p>Speicherdruck ist die wichtigste Speicher-Metrik unter macOS. Er sagt Ihnen auf einen Blick, ob Ihr System Reserven hat (grün), belastet aber funktionsfähig ist (gelb) oder kämpft und Maßnahmen braucht (rot). Ignorieren Sie die reine Zahl des „verwendeten Speichers" — konzentrieren Sie sich stattdessen auf den Druck. Tools wie die Aktivitätsanzeige und <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> machen es einfach, diese Metrik zu überwachen und Leistungsproblemen zuvorzukommen.</p>
`,
  },

  "best-system-monitor-apps-for-mac": {
    slug: "best-system-monitor-apps-for-mac",
    title: "Beste Systemmonitor-Apps für Mac 2026: Kompletter Vergleich",
    description:
      "Vergleichen Sie die besten Mac-Systemmonitore — iStat Menus, Stats, MenuMeters, TG Pro und Pulse. Funktionen, Preise, Apple-Silicon-Support und ehrliche Vor- und Nachteile.",
    date: "2026-04-02",
    content: `
<p>Den Überblick über die Leistung Ihres Macs zu behalten, erforderte früher das Öffnen der Aktivitätsanzeige, das Navigieren durch mehrere Tabs und das Interpretieren dichter Zahlentabellen. Heute platzieren einige dedizierte Systemmonitor-Apps alle kritischen Informationen — CPU-Auslastung, Speicherdruck, Netzwerkgeschwindigkeit, Temperatur, Akkugesundheit, Festplattenaktivität und mehr — direkt in Ihrer Menüleiste. Aber welche sollten Sie wählen? In diesem umfassenden Vergleich bewerten wir die fünf beliebtesten Mac-Systemmonitore 2026: iStat Menus, Stats, MenuMeters, TG Pro und Pulse.</p>

<h2>Worauf Sie bei einem Systemmonitor achten sollten</h2>
<p>Bevor wir auf einzelne Apps eingehen, hier die Kriterien unserer Bewertung:</p>
<ul>
<li><strong>Apple-Silicon-Support:</strong> Unterstützt er M1, M2, M3 und M4 Chips vollständig mit genauen Sensorwerten?</li>
<li><strong>Abgedeckte Metriken:</strong> CPU, Speicher, Netzwerk, Festplatte, Temperatur, Akku, GPU, Lüfter und Prozesse.</li>
<li><strong>Menüleisten-Design:</strong> Wie viel Platz nimmt er ein? Ist er auf einen Blick lesbar?</li>
<li><strong>Ressourcenverbrauch:</strong> Ein Systemmonitor, der selbst erhebliche CPU oder Speicher verbraucht, verfehlt seinen Zweck.</li>
<li><strong>Preis und Lizenz:</strong> Einmalkauf, Abonnement oder kostenlos/Open Source.</li>
</ul>

<h2>iStat Menus</h2>
<p>iStat Menus von Bjango ist der etablierteste Systemmonitor für Mac, mit einer Geschichte, die bis in die frühen Tage von macOS zurückreicht:</p>
<ul>
<li><strong>Metriken:</strong> CPU (pro Kern und gesamt), GPU, Speicher (Druck, Aufschlüsselung), Festplatte (Aktivität, SMART-Status), Netzwerk, Akku, Sensoren, Lüfter und Wetter.</li>
<li><strong>Menüleiste:</strong> Hochgradig anpassbar. Dropdown-Panels zeigen detaillierte Aufschlüsselungen mit historischen Graphen.</li>
<li><strong>Preis:</strong> 11,99 $ einmalig oder in Setapp enthalten (9,99 $/Monat).</li>
</ul>
<p><strong>Vorteile:</strong> Unübertroffene Tiefe der Anpassung. Jahrzehnte der Entwicklung. Wetter-Integration. Benachrichtigungssystem für Schwellenwerte.</p>
<p><strong>Nachteile:</strong> Die Vielzahl der Optionen kann für neue Benutzer überwältigend sein. Die UI wirkt im Vergleich zu modernen SwiftUI-Apps veraltet. Nicht im Mac App Store verfügbar.</p>

<h2>Stats</h2>
<p>Stats ist ein kostenloser Open-Source-Systemmonitor auf GitHub mit einer großen Anhängerschaft:</p>
<ul>
<li><strong>Metriken:</strong> CPU, GPU, Speicher, Festplatte, Netzwerk, Akku, Sensoren und Lüfter.</li>
<li><strong>Preis:</strong> Kostenlos und Open Source (MIT-Lizenz).</li>
</ul>
<p><strong>Vorteile:</strong> Völlig kostenlos. Open Source bedeutet Transparenz. Leichtgewichtig.</p>
<p><strong>Nachteile:</strong> Oberfläche ist funktional aber nicht poliert. Sensorgenauigkeit auf Apple Silicon hat historisch hinter kommerziellen Apps zurückgelegen.</p>

<h2>MenuMeters</h2>
<p>MenuMeters ist einer der ältesten Mac-Systemmonitore:</p>
<ul>
<li><strong>Metriken:</strong> CPU, Speicher, Festplatte und Netzwerk. Keine Temperatur, kein Akku, keine GPU.</li>
<li><strong>Preis:</strong> Kostenlos und Open Source.</li>
</ul>
<p><strong>Vorteile:</strong> Extrem leichtgewichtig. Einfachste Oberfläche.</p>
<p><strong>Nachteile:</strong> Sehr eingeschränkte Metriken. Selten aktualisiert. In 2026 nicht ideal als primärer Systemmonitor.</p>

<h2>TG Pro</h2>
<p>TG Pro von Tunabelly Software konzentriert sich auf Temperaturüberwachung und Lüftersteuerung:</p>
<ul>
<li><strong>Metriken:</strong> Temperatur (Dutzende Sensoren), Lüfter (Geschwindigkeit und manuelle Steuerung), Akku. Kein detailliertes Speicher-, Festplatten- oder Netzwerk-Monitoring.</li>
<li><strong>Preis:</strong> 20 $ Einmalkauf.</li>
</ul>
<p><strong>Vorteile:</strong> Beste Temperatur-Sensorabdeckung. Lüftersteuerung mit benutzerdefinierten Kurven. Diagnosemodus.</p>
<p><strong>Nachteile:</strong> Nur nützlich, wenn Temperatur Ihr Hauptanliegen ist. Der Preis von 20 $ ist steil für ein Einzelzweck-Tool.</p>

<h2>Pulse</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> ist ein neuerer Eintrag in der Systemmonitor-Kategorie, von Grund auf mit SwiftUI für macOS 14+ entwickelt:</p>
<ul>
<li><strong>Metriken:</strong> CPU (pro Kern, Lastdurchschnitte), GPU, Speicher (Druck, App/Gebunden/Komprimiert/Swap), Netzwerk, Akku (Gesundheit, Zyklen, Wattage), Temperatur, Festplatte, Lüfter und Top-Prozesse.</li>
<li><strong>Preis:</strong> 5,99 $ Einmalkauf im Mac App Store.</li>
</ul>
<p><strong>Vorteile:</strong> Umfassende Metrikabdeckung vergleichbar mit iStat Menus zu einem Bruchteil des Preises. Native SwiftUI-Oberfläche. Sehr niedriger Ressourcenverbrauch. Im Mac App Store verfügbar. Datenschutzorientiert — keine Analytik, keine Datenerfassung.</p>
<p><strong>Nachteile:</strong> Neuere App mit kürzerer Erfolgsgeschichte. Einige Nischenfunktionen von iStat Menus (wie Wetter) fehlen möglicherweise.</p>

<h2>Funktionsvergleichstabelle</h2>
<table>
<tr><th>Funktion</th><th>iStat Menus</th><th>Stats</th><th>MenuMeters</th><th>TG Pro</th><th>Pulse</th></tr>
<tr><td>CPU-Überwachung</td><td>Ja</td><td>Ja</td><td>Ja</td><td>Einfach</td><td>Ja</td></tr>
<tr><td>Speicherdruck</td><td>Ja</td><td>Ja</td><td>Einfach</td><td>Nein</td><td>Ja</td></tr>
<tr><td>Netzwerkgeschwindigkeit</td><td>Ja</td><td>Ja</td><td>Ja</td><td>Nein</td><td>Ja</td></tr>
<tr><td>Temperatursensoren</td><td>Ja</td><td>Ja</td><td>Nein</td><td>Ja (beste)</td><td>Ja</td></tr>
<tr><td>Akkugesundheit</td><td>Ja</td><td>Ja</td><td>Nein</td><td>Einfach</td><td>Ja</td></tr>
<tr><td>Mac App Store</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
<tr><td>Preis</td><td>11,99 $</td><td>Kostenlos</td><td>Kostenlos</td><td>20 $</td><td>5,99 $</td></tr>
</table>

<h2>Welchen sollten Sie wählen?</h2>
<ul>
<li><strong>Maximale Anpassung:</strong> iStat Menus bleibt der König der Konfigurierbarkeit.</li>
<li><strong>Kostenlos und Open Source:</strong> Stats ist der klare Gewinner.</li>
<li><strong>Temperatur und Lüftersteuerung:</strong> TG Pro ist der Spezialist.</li>
<li><strong>Bestes Preis-Leistungs-Verhältnis:</strong> <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> bietet einen Funktionsumfang vergleichbar mit iStat Menus für 5,99 $ mit einer modernen, leichtgewichtigen Oberfläche.</li>
<li><strong>Minimal und einfach:</strong> MenuMeters ist die schnörkellose Option.</li>
</ul>

<h2>Fazit</h2>
<p>Im Jahr 2026 haben Mac-Benutzer mehr Systemüberwachungsoptionen als je zuvor. Ob Sie einen Veteranen wie iStat Menus, eine kostenlose Option wie Stats oder einen modernen Neuling wie Pulse wählen — das Wichtige ist, Einblick in die Leistung Ihres Macs zu haben. Thermisches Drosseln, Speichererschöpfung und Netzwerkengpässe sind viel einfacher zu beheben, wenn Sie sie in Echtzeit sehen können.</p>
`,
  },

  "how-to-monitor-network-speed-on-mac": {
    slug: "how-to-monitor-network-speed-on-mac",
    title: "Netzwerkgeschwindigkeit auf dem Mac in Echtzeit überwachen",
    description:
      "Erfahren Sie, wie Sie Upload- und Download-Geschwindigkeiten auf Ihrem Mac verfolgen — mit Aktivitätsanzeige, Terminal-Befehlen und Menüleisten-Apps. Inklusive Fehlerbehebungstipps.",
    date: "2026-04-02",
    content: `
<p>Ob Sie eine große Datei herunterladen, einen Videoanruf streamen oder eine träge Internetverbindung beheben — die Kenntnis der Echtzeit-Netzwerkgeschwindigkeit Ihres Macs ist unglaublich nützlich. macOS bietet einige grundlegende Tools dafür, aber für die kontinuierliche Überwachung sind Drittanbieter-Apps weitaus praktischer. In dieser Anleitung behandeln wir jede Methode zur Überwachung der Netzwerkgeschwindigkeit auf Ihrem Mac — von eingebauten Dienstprogrammen bis zu dedizierten Menüleisten-Apps — zusammen mit Fehlerbehebungstipps für langsame Verbindungen.</p>

<h2>Netzwerkgeschwindigkeits-Metriken verstehen</h2>
<ul>
<li><strong>Download-Geschwindigkeit:</strong> Wie schnell Daten aus dem Internet oder lokalen Netzwerk auf Ihrem Mac ankommen. Gemessen in Mbps (Megabit pro Sekunde) oder MB/s (Megabyte pro Sekunde). Hinweis: 1 MB/s = 8 Mbps.</li>
<li><strong>Upload-Geschwindigkeit:</strong> Wie schnell Daten Ihren Mac verlassen. Wichtig für Videoanrufe, Cloud-Backups und Datei-Uploads.</li>
<li><strong>Latenz (Ping):</strong> Die Zeit, die ein kleines Datenpaket braucht, um zu einem Server und zurück zu reisen, gemessen in Millisekunden. Niedrige Latenz (unter 20 ms) ist kritisch für Gaming und Echtzeitkommunikation.</li>
<li><strong>Durchsatz vs. Bandbreite:</strong> Ihr ISP bewirbt Bandbreite (die theoretische Maximalgeschwindigkeit). Durchsatz ist, was Sie tatsächlich erreichen.</li>
</ul>

<h2>Methode 1: Aktivitätsanzeige</h2>
<p>macOS enthält eine eingebaute Möglichkeit, Netzwerkaktivität zu sehen. Öffnen Sie die <strong>Aktivitätsanzeige</strong> (in Programme > Dienstprogramme) und klicken Sie auf den <strong>Netzwerk</strong>-Tab. Unten sehen Sie: <strong>Empfangene Daten/Sek.</strong> und <strong>Gesendete Daten/Sek.</strong></p>
<p>Der Netzwerk-Tab zeigt auch eine Liste aller Prozesse, die das Netzwerk nutzen, zusammen mit den gesendeten und empfangenen Datenmengen. Dies ist wertvoll, um herauszufinden, welche Anwendung Ihre Bandbreite verbraucht.</p>
<p><strong>Einschränkungen:</strong> Die Aktivitätsanzeige erfordert ein offenes Fenster. Die Zahlen aktualisieren sich langsam und die Oberfläche ist nicht für die Überwachung auf einen Blick konzipiert.</p>

<h2>Methode 2: Terminal-Befehle</h2>

<h3>nettop</h3>
<p>Führen Sie <strong>nettop</strong> im Terminal aus. Dies zeigt eine Echtzeitansicht aller Netzwerkverbindungen, einschließlich ein- und ausgehender Bytes pro Prozess. Drücken Sie <strong>q</strong> zum Beenden.</p>

<h3>Geschwindigkeitstest vom Terminal</h3>
<p>Installieren Sie die Speedtest CLI mit Homebrew: <strong>brew install speedtest-cli</strong>. Führen Sie dann <strong>speedtest-cli</strong> aus, um eine Einzelmessung Ihrer Download-Geschwindigkeit, Upload-Geschwindigkeit und Ping zu erhalten.</p>

<h2>Methode 3: Menüleisten-Apps für Echtzeit-Überwachung</h2>
<p>Der praktischste Ansatz für den Alltag ist eine Menüleisten-App, die die Live-Netzwerkgeschwindigkeit neben Uhr, Akku und anderen Indikatoren anzeigt.</p>

<h3>Pulse</h3>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> zeigt Ihre aktuelle Upload- und Download-Geschwindigkeit direkt in der Menüleiste an. Ein Klick auf das Widget öffnet ein detailliertes Panel mit Netzwerk-Durchsatz-Graphen, Ihrer lokalen IP-Adresse, öffentlichen IP-Adresse und aktiven Schnittstelle. Es ist leichtgewichtig und visuell sauber gestaltet. Pulse überwacht auch CPU, Speicher, Temperatur, Akku und Festplatte und dient so als All-in-One-Systemmonitor.</p>

<h3>iStat Menus</h3>
<p>iStat Menus bietet ein Netzwerkmodul mit anpassbarer Formatierung (Pfeile, Graphen, Zahlen). Das Dropdown-Panel zeigt historische Durchsatz-Graphen und eine Liste aktiver Verbindungen.</p>

<h2>Methode 4: WLAN-Diagnose</h2>
<p>Wenn Sie speziell Ihre WLAN-Verbindung beheben möchten, enthält macOS ein verstecktes Tool. Halten Sie die <strong>Option</strong>-Taste gedrückt und klicken Sie auf das WLAN-Symbol in der Menüleiste. Ein detailliertes Panel erscheint mit Kanal, RSSI (Signalstärke), Rauschpegel, Übertragungsrate und mehr.</p>

<h2>Langsame Netzwerkgeschwindigkeit beheben</h2>
<p>Wenn Ihre Echtzeit-Überwachung Geschwindigkeiten zeigt, die deutlich unter dem liegen, was Ihr ISP-Plan vorsieht, hier ein systematischer Ansatz zur Diagnose:</p>

<h3>Schritt 1: Serverseite ausschließen</h3>
<p>Führen Sie einen Geschwindigkeitstest durch. Wenn der Test Zahlen nahe Ihrem Plan zeigt, liegt das Problem wahrscheinlich beim Dienst, nicht bei Ihrer Verbindung.</p>

<h3>Schritt 2: WLAN-Signalstärke prüfen</h3>
<p>Ein RSSI-Wert von -30 bis -50 ist ausgezeichnet, -50 bis -70 akzeptabel, und alles unter -70 zeigt ein schwaches Signal an.</p>

<h3>Schritt 3: Bandbreiten-Fresser identifizieren</h3>
<p>Öffnen Sie den Netzwerk-Tab der Aktivitätsanzeige oder nutzen Sie ein Tool wie <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a>, um zu sehen, welche Anwendungen die meiste Bandbreite verbrauchen.</p>

<h3>Schritt 4: Auf Ethernet wechseln</h3>
<p>Eine kabelgebundene Verbindung eliminiert WLAN-Variablen vollständig. Wenn sich die Geschwindigkeiten über Ethernet dramatisch verbessern, liegt das Problem in Ihrer WLAN-Umgebung.</p>

<h3>Schritt 5: DNS-Server ändern</h3>
<p>Langsame DNS-Auflösung kann Webseiten träge erscheinen lassen. In Systemeinstellungen > WLAN > Details > DNS versuchen Sie Cloudflare (1.1.1.1) oder Google DNS (8.8.8.8).</p>

<h3>Schritt 6: VPN-Overhead prüfen</h3>
<p>Wenn Sie ein VPN verwenden, wird Ihr Datenverkehr über einen Remote-Server geleitet, was Latenz hinzufügt. Trennen Sie das VPN vorübergehend, um zu sehen, ob sich die Geschwindigkeiten verbessern.</p>

<h3>Schritt 7: Router neustarten</h3>
<p>Ein Neustart Ihres Routers löscht dessen Speicher, stellt Verbindungen zu Ihrem ISP wieder her und kann viele intermittierende Probleme lösen.</p>

<h2>Zusammenfassung</h2>
<p>Die Überwachung der Netzwerkgeschwindigkeit Ihres Macs in Echtzeit hilft Ihnen, Ihre Verbindung zu verstehen, Engpässe zu identifizieren und Probleme effizient zu beheben. Die Aktivitätsanzeige und Terminal-Befehle liefern grundlegende Daten, aber eine Menüleisten-App gibt Ihnen kontinuierliche Sichtbarkeit auf einen Blick. Kombinieren Sie Echtzeit-Überwachung mit den obigen Fehlerbehebungsschritten, um das Beste aus Ihrer Internetverbindung herauszuholen.</p>
`,
  },

  "mac-running-slow-how-to-fix": {
    slug: "mac-running-slow-how-to-fix",
    title: "Mac läuft langsam? So diagnostizieren und beheben Sie Leistungsprobleme",
    description:
      "Eine systematische Anleitung zur Diagnose, warum Ihr Mac langsam ist. Lernen Sie CPU-, Speicher- und Festplatten-Engpässe zu unterscheiden und Schritt für Schritt zu beheben.",
    date: "2026-04-02",
    content: `
<p>Es gibt wenige Dinge, die frustrierender sind als ein langsamer Mac. Das drehende Warterad, die verzögerte Fenstergrößenänderung, die fünf Sekunden Verzögerung beim App-Wechsel — diese Symptome lassen selbst leistungsstarke Hardware kaputt wirken. Aber „langsam" ist eine vage Beschreibung, die viele verschiedene Ursachen haben kann. Ein Mac, der langsam ist, weil der Speicher ausgeht, verhält sich anders als einer, der CPU-gebunden ist. In dieser Anleitung gehen wir systematisch vor, um zu diagnostizieren, warum Ihr Mac langsam ist, und beheben dann die Grundursache.</p>

<h2>Schritt 1: Die Art des Engpasses identifizieren</h2>
<p>Leistungsprobleme fallen generell in vier Kategorien:</p>
<ul>
<li><strong>CPU-gebunden:</strong> Der Prozessor ist am Limit. Symptome: Lüfter auf Volllast, langsame App-Reaktion, nahe 100 % CPU-Auslastung in der Aktivitätsanzeige.</li>
<li><strong>Speicher-gebunden:</strong> Ihnen geht der verfügbare RAM aus. Symptome: Warterad beim App-Wechsel, gelber oder roter Speicherdruck, hohe Swap-Nutzung.</li>
<li><strong>Festplatten-gebunden:</strong> Der Speicherlaufwerk ist der Flaschenhals — entweder fast voll, fehlerhaft oder durch exzessives Lesen/Schreiben belastet.</li>
<li><strong>Netzwerk-gebunden:</strong> Langsames Internet. Symptome: Webseiten laden ewig, Videoanrufe verlieren Qualität.</li>
</ul>

<h2>Schritt 2: Aktivitätsanzeige öffnen</h2>
<p>Die Aktivitätsanzeige ist Ihr erstes Diagnosewerkzeug. Finden Sie sie in Programme > Dienstprogramme oder suchen Sie mit Spotlight.</p>

<h3>CPU-Tab</h3>
<p>Sortieren Sie nach <strong>% CPU</strong> absteigend. Suchen Sie nach Prozessen mit abnormal hoher CPU-Auslastung:</p>
<ul>
<li><strong>kernel_task:</strong> macOS verwendet diesen Prozess, um den CPU-Zugang bei Überhitzung zu drosseln. Hohe kernel_task-Auslastung = das eigentliche Problem ist thermisch.</li>
<li><strong>WindowServer:</strong> Verantwortlich für die Bildschirmdarstellung. Hohe Auslastung deutet auf zu viele Fenster oder externe Displays mit nicht-nativen Auflösungen hin.</li>
<li><strong>mds_stores / Spotlight:</strong> Indizierungsdienst. Nach einem großen OS-Update kann Spotlight die CPU stundenlang belasten.</li>
<li><strong>Browser-Prozesse:</strong> Websites mit schwerem JavaScript oder automatisch abspielenden Videos.</li>
</ul>

<h3>Speicher-Tab</h3>
<p>Schauen Sie auf den <strong>Speicherdruck</strong>-Graphen unten. Grün ist in Ordnung. Gelb bedeutet, Sie stoßen an Grenzen. Rot heißt, Ihr Mac hungert nach Speicher. Prüfen Sie auch den <strong>Swap-Verbrauch</strong>.</p>

<h2>Schritt 3: Menüleisten-Monitor für kontinuierliche Sichtbarkeit</h2>
<p>Die Aktivitätsanzeige gibt Ihnen eine Momentaufnahme, aber Leistungsprobleme sind oft intermittierend. Ein Menüleisten-Systemmonitor wie <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> hält wichtige Metriken jederzeit sichtbar, damit Sie den Moment erfassen können, in dem die Dinge langsamer werden.</p>

<h2>Schritt 4: CPU-gebundene Verlangsamungen beheben</h2>
<ol>
<li><strong>Den störenden Prozess beenden:</strong> Wenn eine App übermäßig CPU verbraucht, beenden Sie sie normal (Cmd + Q) oder erzwingen Sie das Beenden (Option + Cmd + Esc).</li>
<li><strong>Apps aktualisieren:</strong> CPU-intensive Bugs werden oft in Updates behoben.</li>
<li><strong>Browser-Last reduzieren:</strong> Schließen Sie Tabs, die Sie nicht aktiv nutzen. Wechseln Sie von Chrome zu Safari, das auf macOS effizienter ist.</li>
<li><strong>Anmeldeobjekte deaktivieren:</strong> Gehen Sie zu Systemeinstellungen > Allgemein > Anmeldeobjekte. Entfernen Sie Apps, die Sie beim Start nicht benötigen.</li>
</ol>

<h2>Schritt 5: Speicher-gebundene Verlangsamungen beheben</h2>
<ol>
<li><strong>Speicherhungrige Apps schließen:</strong> Sortieren Sie im Speicher-Tab nach Speicherverbrauch und schließen Sie die größten Verbraucher.</li>
<li><strong>Mac neustarten:</strong> Ein Neustart löscht allen Speicher, einschließlich geleaktem Speicher von lang laufenden Prozessen.</li>
<li><strong>Anzahl offener Apps reduzieren:</strong> Jede offene App verbraucht etwas Speicher.</li>
<li><strong>RAM aufrüsten (wenn möglich):</strong> Bei älteren Macs mit austauschbarem RAM ist dies das effektivste Upgrade. Bei Apple-Silicon-Macs ist dies nach dem Kauf leider nicht möglich.</li>
</ol>

<h2>Schritt 6: Festplatten-gebundene Verlangsamungen beheben</h2>
<ol>
<li><strong>Speicherplatz freigeben:</strong> macOS braucht freien Platz auf dem Startvolume für Swap, Caches und temporäre Dateien. Wenn Ihr Laufwerk zu mehr als 90 % voll ist, verschlechtert sich die Leistung erheblich.</li>
<li><strong>Festplattengesundheit prüfen:</strong> Öffnen Sie das Festplattendienstprogramm und führen Sie Erste Hilfe auf Ihrem Startvolume aus.</li>
<li><strong>Swap-Druck reduzieren:</strong> Wenn hohe Festplattenaktivität durch Swap verursacht wird, ist die eigentliche Lösung, den Speicherdruck zu adressieren.</li>
<li><strong>Backups pausieren oder planen:</strong> Time Machine und Cloud-Backup-Dienste können starke Festplatten-I/O erzeugen.</li>
</ol>

<h2>Schritt 7: Allgemeine Wartung</h2>
<ul>
<li><strong>macOS aktuell halten:</strong> Apple liefert regelmäßig Leistungsverbesserungen.</li>
<li><strong>Regelmäßig neustarten:</strong> Ein wöchentlicher Neustart hilft, angesammelte Speicherlecks und temporäre Dateien zu bereinigen.</li>
<li><strong>Native Apps bevorzugen:</strong> Safari verbraucht weniger Speicher und Akku als Chrome.</li>
</ul>

<h2>Wann neue Hardware in Betracht ziehen</h2>
<ul>
<li>Speicherdruck ist während Ihres normalen Workflows konstant gelb oder rot, und Sie können den RAM nicht aufrüsten.</li>
<li>CPU-Auslastung ist konstant hoch, selbst nach dem Schließen unnötiger Prozesse.</li>
<li>Ihr Mac hat eine mechanische Festplatte (HDD) statt einer SSD. Das Upgrade auf eine SSD ist das transformativste Einzelupgrade.</li>
</ul>

<h2>Zusammenfassung</h2>
<p>Die Diagnose eines langsamen Macs erfordert die Identifizierung, ob der Engpass CPU, Speicher, Festplatte oder Netzwerk ist. Nutzen Sie die Aktivitätsanzeige für punktuelle Diagnosen und ein Menüleisten-Tool wie <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> für kontinuierliche Überwachung. Beheben Sie den spezifischen Engpass mit gezielten Maßnahmen, warten Sie Ihr System mit regelmäßigen Neustarts und Updates und ziehen Sie neue Hardware nur in Betracht, wenn Software-Optimierungen nicht ausreichen.</p>
`,
  },

  "how-to-check-battery-health-on-mac": {
    slug: "how-to-check-battery-health-on-mac",
    title: "Akkugesundheit am MacBook prüfen: Komplette Anleitung",
    description:
      "Jede Methode zur Überprüfung der Akkugesundheit Ihres MacBooks — Systemeinstellungen, Terminal, Ladezyklen und Drittanbieter-Apps. Erfahren Sie, wann Sie den Akku ersetzen sollten.",
    date: "2026-04-02",
    content: `
<p>Der Akku Ihres MacBooks hält nicht ewig. Mit der Zeit bauen die chemischen Prozesse in Lithium-Ionen-Zellen ab, was die maximale Kapazität und letztlich die Nutzungszeit zwischen den Ladevorgängen reduziert. Die Überwachung der Akkugesundheit hilft Ihnen zu verstehen, wie viel Leben Ihr Akku noch hat, einen Ersatz zu planen und Ihre Ladegewohnheiten anzupassen, um die Lebensdauer zu verlängern.</p>

<h2>Was Akkugesundheit tatsächlich bedeutet</h2>
<ul>
<li><strong>Maximale Kapazität:</strong> Der Prozentsatz der ursprünglichen Akkukapazität, der verbleibt. Ein neues MacBook zeigt 100 %. Nach einem Jahr typischer Nutzung vielleicht 95 %. Apple betrachtet einen Akku als verbraucht, wenn er unter 80 % fällt.</li>
<li><strong>Ladezyklenzahl:</strong> Ein Ladezyklus ist abgeschlossen, wenn Sie eine Energiemenge gleich 100 % der Akkukapazität verbraucht (und wieder aufgeladen) haben. Die meisten modernen MacBooks sind für 1.000 Ladezyklen ausgelegt. Neuere Modelle (2024+) für bis zu 1.500.</li>
</ul>
<p>Ein „verbrauchter" Akku funktioniert weiter — er hält nur weniger Ladung als im Neuzustand.</p>

<h2>Methode 1: Systemeinstellungen (macOS Ventura und neuer)</h2>
<ol>
<li>Öffnen Sie <strong>Systemeinstellungen</strong> (Apple-Menü > Systemeinstellungen).</li>
<li>Klicken Sie auf <strong>Batterie</strong> in der Seitenleiste.</li>
<li>Klicken Sie auf die <strong>ⓘ</strong>-Schaltfläche neben <strong>Batteriezustand</strong>.</li>
</ol>
<p>Sie sehen einen von mehreren Status:</p>
<ul>
<li><strong>Normal:</strong> Der Akku funktioniert normal und behält einen wesentlichen Teil seiner ursprünglichen Kapazität.</li>
<li><strong>Service empfohlen:</strong> Der Akku hat sich deutlich verschlechtert. Apple empfiehlt eine Wartung.</li>
<li><strong>Maximale Kapazität:</strong> Als Prozentsatz angezeigt (z. B. 89 %).</li>
</ul>

<h2>Methode 2: Systeminformationen (Detailansicht)</h2>
<ol>
<li>Halten Sie die <strong>Option</strong>-Taste und klicken Sie auf das <strong>Apple-Menü</strong>.</li>
<li>Klicken Sie auf <strong>Systeminformationen</strong>.</li>
<li>Klicken Sie in der Seitenleiste unter <strong>Hardware</strong> auf <strong>Stromversorgung</strong>.</li>
</ol>
<p>Diese Ansicht zeigt: Ladezyklenzahl, Zustand, Volle Ladekapazität (mAh), Designkapazität (mAh), Ladezustand und Wattage.</p>

<h2>Methode 3: Terminal-Befehle</h2>
<p>Führen Sie im Terminal aus:</p>
<p><strong>system_profiler SPPowerDataType</strong></p>
<p>Für eine schnelle Zyklenprüfung:</p>
<p><strong>system_profiler SPPowerDataType | grep "Cycle Count"</strong></p>
<p>Für den aktuellen Ladestand:</p>
<p><strong>pmset -g batt</strong></p>

<h2>Methode 4: Menüleisten-Apps</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> zeigt Akkugesundheit in Prozent, Ladezyklenzahl, aktuelle Wattage, verbleibende Zeit und Ladestatus direkt in der Menüleiste an. Da Pulse auch CPU, Speicher, Netzwerk, Temperatur und Festplatte überwacht, erhalten Sie umfassende Systemüberwachung ohne mehrere Apps installieren zu müssen.</p>
<p>Andere Optionen sind iStat Menus (mit dediziertem Akkumodul) und coconutBattery (eine kostenlose App speziell für Akkudiagnose).</p>

<h2>Ladezyklenzahl verstehen</h2>
<ul>
<li><strong>0–200 Zyklen:</strong> Ihr Akku ist im Wesentlichen neu. Erwarten Sie 95–100 % Kapazität.</li>
<li><strong>200–500 Zyklen:</strong> Moderate Nutzung. Kapazität sollte 85–95 % betragen.</li>
<li><strong>500–800 Zyklen:</strong> Gut genutzter Akku. Kapazität typischerweise 80–90 %.</li>
<li><strong>800–1000 Zyklen:</strong> Nähert sich dem bewerteten Limit. Kapazität meist 75–85 %. Akkuersatz sollte auf Ihrem Radar sein.</li>
<li><strong>1000+ Zyklen:</strong> Jenseits der bewerteten Lebensdauer. Kapazität oft unter 80 %.</li>
</ul>

<h2>Wann den Akku ersetzen</h2>
<ul>
<li><strong>Früher ersetzen:</strong> Wenn Sie zuverlässige ganztägige Akkulaufzeit für Arbeit oder Reisen brauchen.</li>
<li><strong>Später ersetzen:</strong> Wenn Ihr MacBook hauptsächlich am Schreibtisch mit Stromversorgung verwendet wird.</li>
<li><strong>Sofort ersetzen:</strong> Bei unerwarteten Abschaltungen, sichtbarem Aufblähen des Akkus oder wiederholten macOS-Warnungen.</li>
</ul>
<p>Apple berechnet 199–249 $ für einen MacBook-Akkuersatz je nach Modell (Preise 2026).</p>

<h2>Akku-Lebensdauer verlängern</h2>

<h3>Optimiertes Laden verwenden</h3>
<p>macOS enthält <strong>Optimiertes Laden</strong> (Systemeinstellungen > Batterie). Wenn aktiviert, lernt Ihr MacBook Ihre tägliche Laderoutine und verzögert das Laden über 80 %, bis kurz bevor Sie typischerweise das Kabel abziehen.</p>

<h3>Extreme Temperaturen vermeiden</h3>
<p>Lithium-Ionen-Akkus bauen bei Hitze schneller ab. Ideale Betriebstemperatur: 10 °C – 35 °C.</p>

<h3>Nicht regelmäßig vollständig entladen</h3>
<p>Tiefe Entladungen (unter 20 %) belasten die Akkuchemie mehr als flache Zyklen. Versuchen Sie, Ihre Ladung zwischen 20 % und 80 % zu halten.</p>

<h3>Bei 50 % lagern</h3>
<p>Wenn Sie ein MacBook für längere Zeit lagern, empfiehlt Apple, es auf ca. 50 % aufzuladen und an einem kühlen, trockenen Ort zu lagern.</p>

<h2>Akkugesundheit über die Zeit überwachen</h2>
<p>Statt die Akkugesundheit einmal zu prüfen und zu vergessen, hilft regelmäßige Überwachung, Degradationstrends zu verfolgen. Ein Tool wie <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> macht dies mühelos, da Akkugesundheit und Ladezyklenzahl immer in Ihrer Menüleiste sichtbar sind.</p>

<h2>Zusammenfassung</h2>
<p>Die Akkugesundheit Ihres MacBooks zu prüfen ist einfach mit den von Apple bereitgestellten Tools und noch einfacher mit einem Menüleisten-Monitor. Die wichtigsten Metriken sind maximale Kapazität und Ladezyklenzahl. Pflegen Sie gute Ladegewohnheiten — nutzen Sie optimiertes Laden, vermeiden Sie extreme Temperaturen und halten Sie den Ladestand zwischen 20–80 % — um die Lebensdauer Ihres Akkus zu maximieren.</p>
`,
  },
};
