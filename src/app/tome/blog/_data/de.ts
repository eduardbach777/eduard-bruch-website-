import type { ArticleSet } from "./index";

export const deArticles: ArticleSet = {
  "best-sqlite-browser-mac": {
    slug: "best-sqlite-browser-mac",
    title: "Der beste SQLite-Browser für Mac",
    description:
      "Die meisten SQLite-Browser auf dem Mac sind plattformübergreifende Electron-Apps, die sich fehl am Platz anfühlen. Einen zu finden, der sich wirklich wie eine Mac-App verhält, erfordert mehr Suche als nötig.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine SQLite-Datenbank, die du untersuchen musst. Du suchst nach einem Browser, lädst etwas Vielversprechendes herunter und merkst sofort, dass native macOS-Funktionen fehlen — keine Dokument-Tabs, kein System-Dark-Mode, keine Spotlight-Integration. Es fühlt sich an wie eine Linux-App im Mac-Kostüm. So sieht die Realität der meisten heute verfügbaren SQLite-Browser aus.</p>

<h2>Warum die meisten SQLite-Browser auf dem Mac enttäuschen</h2>
<p>Die Mehrheit der Datenbank-Tools ist mit Electron oder Java gebaut, entworfen um überall zu laufen und nirgendwo optimiert. Sie ignorieren die Mac-Konventionen, auf die du dich verlässt: Drag-and-Drop aus dem Finder, ordentliche Fensterverwaltung, flüssiges Scrollen durch große Ergebnismengen. Am Ende kämpfst du mit dem Werkzeug, anstatt dich auf deine Daten zu konzentrieren.</p>
<p>DB Browser for SQLite ist Open Source und funktionsfähig, aber eine Qt-Anwendung — fremde Tastenkombinationen, nicht-native Dateidialoge und keine Integration in deinen restlichen macOS-Workflow. TablePlus sieht besser aus, unterstützt aber jede Datenbank-Engine, wodurch sich SQLite wie ein Nachgedanke anfühlt.</p>

<h2>Ein SQLite-Browser, von Grund auf für den Mac gebaut</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ist ein nativer macOS-SQLite-Browser, der speziell zum Öffnen, Durchsuchen und Bearbeiten von SQLite-Datenbanken entwickelt wurde. Er nutzt AppKit und Swift — kein Electron, kein plattformübergreifender Kompromiss. Er startet sofort, respektiert dein Systemdesign und funktioniert so, wie Mac-Apps es sollten.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — nativer SQLite-Browser für Mac mit Tabellen und Abfrage-Editor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tabellen, Views, Indizes und Trigger durchsuchen</h3>
<p>Öffne eine beliebige .db-, .sqlite- oder .sqlite3-Datei und sieh sofort jede Tabelle, jeden View, jeden Index und jeden Trigger in deiner Datenbank. Klicke auf eine Tabelle, um ihren Inhalt mit schnellem, nativem Scrollen zu durchsuchen. Kein Warten, bis ein Web-View Tausende von Zeilen rendert.</p>

<h3>Daten direkt bearbeiten</h3>
<p>Klicke auf eine beliebige Zelle, um sie direkt zu bearbeiten. Füge neue Zeilen ein, lösche bestehende oder erstelle komplett neue Tabellen mit einem visuellen Editor — kein SQL für einfache Operationen nötig. Wenn du SQL brauchst, bietet Tome einen Abfrage-Editor mit Syntaxhervorhebung und Autovervollständigung.</p>

<h3>Dokumentbasiert — Mehrere Datenbanken nebeneinander öffnen</h3>
<p>Tome ist dokumentbasiert, das heißt jede Datenbank öffnet sich in einem eigenen Fenster oder Tab. Vergleiche Staging- und Produktionsdatenbanken nebeneinander oder halte eine Referenzdatenbank offen, während du an einer anderen arbeitest. Es funktioniert genau wie jede dokumentbasierte Mac-App — weil es eine ist.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "view-sqlite-database-mac": {
    slug: "view-sqlite-database-mac",
    title: "So zeigst du eine SQLite-Datenbank auf dem Mac an",
    description:
      "SQLite-Dateien liegen überall auf deinem Mac — App-Daten, Core-Data-Stores, Browser-Verlauf — aber macOS bietet keine eingebaute Möglichkeit, sie zu öffnen und anzuzeigen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine .sqlite-Datei in deinem Projektordner oder tief in einem App-Container gefunden. Du doppelklickst darauf und macOS weiß nichts damit anzufangen. Du könntest das Terminal öffnen und <code>sqlite3 mydatabase.db</code> eingeben, aber tabellarische Daten in einem Terminalfenster zu lesen ist mühsam — keine Spaltenausrichtung, kein Scrollen, keine Möglichkeit, Hunderte von Zeilen schnell zu überblicken.</p>

<h2>Der Terminal-Ansatz und seine Grenzen</h2>
<p>Das eingebaute <code>sqlite3</code>-Kommandozeilentool wird mit jedem Mac ausgeliefert. Es funktioniert, technisch gesehen. Du kannst <code>.tables</code> ausführen, um Tabellen aufzulisten, und <code>SELECT * FROM tablename;</code>, um Zeilen auszugeben. Aber die Ausgabe ist reiner Text. Breite Tabellen umbrechen umständlich. Es gibt keine Möglichkeit, einen Wert anzuklicken und zu bearbeiten. Und wenn du Designer, Produktmanager oder jemand bist, der nicht im Terminal lebt, ist das kein realistischer Workflow.</p>
<p>Du könntest versuchen, die Datei in einem Texteditor zu öffnen, aber SQLite-Datenbanken sind binär — du siehst kryptische Zeichen, nicht deine Daten.</p>

<h2>Jede SQLite-Datenbank visuell anzeigen mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> gibt dir eine richtige visuelle Oberfläche für SQLite-Datenbanken auf dem Mac. Ziehe eine .db-, .sqlite- oder .sqlite3-Datei auf das App-Symbol oder nutze Ablage → Öffnen, und deine Datenbank erscheint sofort — Tabellen in einer Seitenleiste aufgelistet, Daten in einem scrollbaren Raster dargestellt.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome zeigt eine SQLite-Datenbank mit Tabellen und Zeilendaten" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Das Schema auf einen Blick erfassen</h3>
<p>Jede Tabelle, jeder View, jeder Index und jeder Trigger ist in der Seitenleiste aufgelistet. Klicke auf eine Tabelle, um ihre Zeilen zu sehen. Klicke auf einen View, um seine Ergebnisse zu sehen. Keine Befehle zum Auswendiglernen — einfach zeigen und klicken.</p>

<h3>Abfragen ausführen, wenn du sie brauchst</h3>
<p>Für alles, was über das Durchsuchen hinausgeht, steht Tomes SQL-Abfrage-Editor bereit. Er bietet Syntaxhervorhebung und Autovervollständigung für Tabellen- und Spaltennamen, damit du Abfragen schneller schreiben kannst als im Terminal, ohne Spaltennamen aus dem Gedächtnis raten zu müssen.</p>

<h3>Häufige Anwendungsfälle</h3>
<p>Debugging einer iOS- oder Android-App, die Daten in SQLite speichert. Überprüfung der Ausgabedatenbank eines Web-Scrapers. Kontrolle einer Django- oder Rails-Entwicklungsdatenbank. Anzeige des Browser-Verlaufs oder von Lesezeichen, die in SQLite gespeichert sind. All das wird einfach — Datei öffnen, Daten sehen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "native-sqlite-editor-mac": {
    slug: "native-sqlite-editor-mac",
    title: "Nativer SQLite-Editor für Mac — Ohne Electron",
    description:
      "Electron-basierte Datenbank-Tools verbrauchen Hunderte Megabyte RAM, nur um eine Tabelle anzuzeigen. Ein nativer macOS-Editor zeigt, was leichtgewichtig wirklich bedeutet.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du öffnest dein Datenbank-Tool und der Aktivitätsmonitor zeigt, dass es 400 MB RAM verbraucht, bevor du überhaupt eine Datei geladen hast. Die Oberfläche ruckelt beim Scrollen durch eine große Tabelle. Tastenkombinationen stimmen nicht mit dem überein, was jede andere Mac-App verwendet. Das passiert, wenn dein SQLite-Editor eigentlich ein Webbrowser ist, der sich als Desktop-App verkleidet.</p>

<h2>Das Electron-Problem</h2>
<p>Electron-Apps bündeln einen kompletten Chromium-Browser, um ihre Oberfläche zu rendern. Für einen Datenbank-Editor — eine App, die hauptsächlich Tabellen mit Text anzeigt — ist das extremer Overhead. Du bekommst langsame Startzeiten, hohen Speicherverbrauch und eine Oberfläche, die sich auf macOS nie richtig anfühlt. Dateidialoge sehen anders aus. Die Textdarstellung ist leicht daneben. Die App erscheint nicht korrekt im „Öffnen mit"-Menü des Finders.</p>
<p>Manche Entwickler wählen Electron, weil sie damit von einer Codebasis aus auf Mac, Windows und Linux ausliefern können. Das ist eine nachvollziehbare Geschäftsentscheidung, aber du bist derjenige, der jedes Mal die Performance-Steuer zahlt, wenn du eine Datenbank öffnest.</p>

<h2>Tome: Gebaut mit AppKit, nicht mit einem Webbrowser</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ist eine native macOS-Anwendung, gebaut mit Swift und AppKit. Sie nutzt dieselben Frameworks wie Finder, Xcode und jede andere Apple-eigene App. Das Ergebnis ist ein SQLite-Editor, der in unter einer Sekunde startet, flüssig durch Zehntausende von Zeilen scrollt und nur einen Bruchteil des Speichers einer Electron-App benötigt.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — nativer macOS-SQLite-Editor mit Seitenleiste und Datenraster" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Echte macOS-Integration</h3>
<p>Tome registriert sich als Handler für .db-, .sqlite- und .sqlite3-Dateien. Doppelklicke eine Datenbank im Finder und sie öffnet sich direkt. Ziehe Dateien auf das Dock-Symbol. Nutze macOS-Tabs und Fensterverwaltung. Alles funktioniert so, wie du es von einer Mac-App erwartest, weil es eine Mac-App ist.</p>

<h3>Bearbeiten ohne SQL schreiben</h3>
<p>Klicke auf eine beliebige Zelle, um ihren Wert direkt zu bearbeiten. Füge Zeilen ein, lösche Zeilen und erstelle neue Tabellen mit einem visuellen Editor. Wenn du SQL brauchst, bietet der integrierte Abfrage-Editor Syntaxhervorhebung und Autovervollständigung — aber für alltägliche Bearbeitungen musst du ihn nie anrühren.</p>

<h3>Leichtgewichtig von Natur aus</h3>
<p>Tome macht eine Sache gut: SQLite. Es versucht nicht, sich mit PostgreSQL, MySQL oder MongoDB zu verbinden. Durch die ausschließliche Konzentration auf SQLite ist jede Funktion für das Format optimiert, mit dem du tatsächlich arbeitest.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "db-browser-alternative-mac": {
    slug: "db-browser-alternative-mac",
    title: "DB Browser for SQLite Alternative auf dem Mac",
    description:
      "DB Browser for SQLite funktioniert, aber seine Qt-Oberfläche fühlt sich auf macOS fremd an — falsche Tastenkombinationen, nicht-native Dateidialoge und keine Integration in deinen restlichen Workflow.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>DB Browser for SQLite (DB4S) ist das bevorzugte kostenlose Tool zum Anzeigen von SQLite-Datenbanken. Es ist Open Source, plattformübergreifend und gibt es schon seit Jahren. Aber wenn du es auf einem Mac verwendest, hast du die Reibung bemerkt: Cmd+Q funktioniert manchmal nicht wie erwartet, Dateidialoge sehen aus, als gehörten sie zu einem anderen Betriebssystem, und die Oberfläche passt nie ganz zu deinen anderen Apps. Es funktioniert — aber es fühlt sich nicht richtig an.</p>

<h2>Wo DB Browser auf dem Mac Schwächen zeigt</h2>
<p>DB4S ist mit Qt gebaut, einem plattformübergreifenden UI-Framework. Auf dem Mac bedeutet das, die App verwendet keine nativen macOS-Steuerelemente. Du merkst es an kleinen Dingen: Die Tab-Leiste passt nicht zu Safari, die Scroll-Physik fühlt sich falsch an und es gibt kein Handoff, keine Spotlight-Integration und keine richtige Dark-Mode-Unterstützung. Die App unterstützt auch nicht die dokumentbasierte macOS-Architektur, sodass du nicht mehrere Datenbanken in nativen Tabs öffnen kannst.</p>
<p>Performance ist ein weiteres Thema. Das Öffnen einer Datenbank mit einer großen Tabelle kann sich träge anfühlen, und die Oberfläche hängt gelegentlich beim Ausführen von Abfragen. Für eine Desktop-App im Jahr 2026 erwarten Nutzer bessere Reaktionsfähigkeit.</p>
<p>Nichts davon macht DB4S zu einem schlechten Tool — es ist hervorragend für das, was es ist. Aber wenn du auf einem Mac arbeitest und etwas willst, das sich nativ anfühlt, hinterlässt es eine Lücke.</p>

<h2>Tome: Eine native macOS-Alternative</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> füllt diese Lücke. Es ist ein nativer SQLite-Browser und -Editor, speziell für macOS mit Swift und AppKit gebaut. Tome macht alles, was DB Browser für den Alltag bietet — Tabellen durchsuchen, Daten bearbeiten, Abfragen ausführen — aber verpackt in einer Oberfläche, die auf deinen Mac gehört.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome als native Alternative zu DB Browser for SQLite auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Alles, wofür du DB Browser nutzt, aber nativ</h3>
<p>Durchsuche Tabellen, Views, Indizes und Trigger in einer aufgeräumten Seitenleiste. Zeige Zeilendaten in einem schnellen, scrollbaren Raster an. Bearbeite Zellen direkt ohne SQL zu schreiben. Füge Zeilen ein und lösche sie mit einem Klick. Erstelle neue Tabellen mit einem visuellen Editor, anstatt CREATE-TABLE-Anweisungen von Hand zu schreiben.</p>

<h3>SQL-Abfrage-Editor, wenn du ihn brauchst</h3>
<p>Tome enthält einen vollständigen SQL-Abfrage-Editor mit Syntaxhervorhebung und Autovervollständigung für deine Tabellen- und Spaltennamen. Führe SELECT-, UPDATE-, DELETE- oder jede andere Abfrage aus und sieh die Ergebnisse sofort.</p>

<h3>Dokumentbasierter Workflow</h3>
<p>Anders als DB4S nutzt Tome die dokumentbasierte macOS-Architektur. Jede Datenbank öffnet sich in einem eigenen Fenster oder Tab. Du kannst mehrere Datenbanken gleichzeitig geöffnet haben, nebeneinander anordnen und zwischen ihnen wechseln, genau wie du zwischen Dokumenten in jeder anderen Mac-App wechselst.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "tableplus-alternative-mac-sqlite": {
    slug: "tableplus-alternative-mac-sqlite",
    title: "TablePlus-Alternative für Mac — Nur SQLite",
    description:
      "TablePlus unterstützt jede Datenbank, was bedeutet, dass SQLite nie die volle Aufmerksamkeit bekommt. Wenn SQLite alles ist, was du brauchst, steht dir die zusätzliche Komplexität nur im Weg.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>TablePlus ist ein gut gestalteter Datenbank-Client, der PostgreSQL, MySQL, SQLite, Redis, MongoDB und mehr unterstützt. Es ist wirklich gute Software. Aber wenn du nur mit SQLite-Dateien arbeitest, navigierst du durch Verbindungsdialoge, Treibereinstellungen und Oberflächenelemente, die für Datenbanken existieren, die du nie verwenden wirst. Es ist, als würdest du ein Schweizer Taschenmesser kaufen, wenn du nur die Klinge brauchst.</p>

<h2>Wenn ein Multi-Datenbank-Tool zu viel ist</h2>
<p>Jedes Mal, wenn du TablePlus öffnest, siehst du einen Verbindungsmanager, der für Remote-Datenbankserver konzipiert ist. Für SQLite — eine lokale, dateibasierte Datenbank — fügt dieser Workflow unnötige Schritte hinzu. Du brauchst keine Verbindungsstrings, keine Ports und keine Zugangsdaten. Du musst einfach nur eine Datei öffnen.</p>
<p>TablePlus nutzt außerdem ein Abo-Modell, das seinen breiten Funktionsumfang widerspiegelt. Wenn du dich nicht mit PostgreSQL oder MySQL verbindest, zahlst du für Funktionen, die du nicht nutzt. Die kostenlose Stufe beschränkt die Anzahl offener Tabs und Zeilen, was bei aktiver Entwicklung frustrierend sein kann.</p>
<p>Die Oberfläche ist zwar ausgereift, aber darauf ausgelegt, jede unterstützte Datenbank zu bedienen. SQLite-spezifische Funktionen wie das Durchsuchen von Triggern oder die Inspektion der internen Dateistruktur treten hinter Funktionen zurück, die für serverbasierte Datenbanken wichtiger sind.</p>

<h2>Tome: Speziell gebaut für SQLite auf dem Mac</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ist eine native macOS-App, die eines tut: SQLite. Kein Verbindungsmanager, keine Treiberkonfiguration, keine Funktionen für Datenbanken, die du nicht nutzt. Öffne eine .db-, .sqlite- oder .sqlite3-Datei und arbeite sofort los.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — fokussierter SQLite-Browser als Alternative zu TablePlus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Datei-zuerst-Workflow</h3>
<p>Doppelklicke eine SQLite-Datei im Finder und Tome öffnet sie. Ziehe eine Datei auf das Dock-Symbol. Nutze Ablage → Öffnen. Kein Verbindungsaufbau, keine Serverkonfiguration. SQLite ist ein Dateiformat, und Tome behandelt es wie eines.</p>

<h3>Volle SQLite-Abdeckung</h3>
<p>Durchsuche Tabellen, Views, Indizes und Trigger. Bearbeite Zellen direkt. Füge Zeilen ein und lösche sie. Erstelle Tabellen mit einem visuellen Editor. Führe SQL-Abfragen mit Syntaxhervorhebung und Autovervollständigung aus. Jede Funktion existiert, weil sie für SQLite sinnvoll ist.</p>

<h3>Mehrere Datenbanken, Mac-Style</h3>
<p>Tome ist dokumentbasiert. Öffne fünf Datenbanken und jede bekommt ihr eigenes Fenster oder ihren eigenen Tab. Vergleiche Daten über Datenbanken hinweg, indem du Fenster nebeneinander platzierst — derselbe Workflow, den du mit Textdateien, Tabellen oder jedem anderen Dokument auf deinem Mac verwendest.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "open-sqlite3-file-mac": {
    slug: "open-sqlite3-file-mac",
    title: "So öffnest du .sqlite3-Dateien auf dem Mac ohne Terminal",
    description:
      "Ein Doppelklick auf eine .sqlite3-Datei auf dem Mac bringt nichts Nützliches. macOS erkennt das Format nicht, und Terminal ist die einzige eingebaute Option.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine .sqlite3-Datei — vielleicht aus einem Django-Projekt exportiert, aus einem iOS-App-Container gezogen oder von einem Kollegen erhalten. Du doppelklickst sie auf deinem Mac und bekommst den Dialog „Keine App zum Öffnen festgelegt", oder schlimmer, sie öffnet sich in einem Texteditor und zeigt binären Zeichensalat. macOS weiß einfach nicht, was es mit SQLite-Dateien anfangen soll.</p>

<h2>Die Standardoptionen sind alle schlecht</h2>
<p>Ohne etwas zu installieren ist deine einzige Option das Terminal. Öffne es, navigiere zum Verzeichnis der Datei und gib <code>sqlite3 yourfile.sqlite3</code> ein. Von dort kannst du Befehle wie <code>.tables</code> und <code>SELECT * FROM tablename;</code> ausführen — aber die Ausgabe ist reiner Text ohne Formatierung, ohne Scrollen und ohne Möglichkeit, Daten visuell zu bearbeiten.</p>
<p>Wenn du ein Entwickler bist, der sich im Terminal wohlfühlt, funktioniert das für schnelle Überprüfungen. Aber für alles, was über eine einfache Abfrage hinausgeht — mehrere Tabellen durchsuchen, Werte bearbeiten, ein Schema verstehen — ist es langsam und fehleranfällig. Und wenn du kein Entwickler bist, ist es ein Ding der Unmöglichkeit.</p>
<p>Manche Leute versuchen Online-SQLite-Viewer, die im Browser laufen. Diese erfordern das Hochladen deiner Datenbankdatei auf einen Server, was offensichtliche Datenschutzbedenken aufwirft — besonders wenn die Datenbank Benutzerdaten oder Zugangsdaten enthält.</p>

<h2>.sqlite3-Dateien mit einem Doppelklick öffnen mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> registriert sich als Handler für .sqlite3-, .sqlite- und .db-Dateien auf macOS. Nach der Installation kannst du jede SQLite-Datei im Finder doppelklicken und sie öffnet sich direkt in Tome — Tabellen in der Seitenleiste aufgelistet, Daten in einem scrollbaren Raster dargestellt, bereit zum Durchsuchen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome öffnet eine .sqlite3-Datei auf dem Mac mit visuellem Tabellen-Browser" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kein Terminal nötig</h3>
<p>Durchsuche jede Tabelle, jeden View, jeden Index und jeden Trigger visuell. Scrolle durch Zeilen, wie du es in einer Tabellenkalkulation tun würdest. Klicke auf Spaltenüberschriften, um dein Schema zu verstehen. Alles ist visuell, sofort verfügbar und erfordert null Kommandozeilen-Kenntnisse.</p>

<h3>Daten bearbeiten ohne SQL</h3>
<p>Musst du einen Wert ändern? Klicke die Zelle an und tippe. Musst du eine Zeile hinzufügen? Klicke auf Einfügen. Musst du Datensätze entfernen? Auswählen und löschen. Für komplexere Operationen bietet Tome einen SQL-Abfrage-Editor mit Syntaxhervorhebung und Autovervollständigung — aber für alltägliche Aufgaben wirst du ihn selten brauchen.</p>

<h3>Deine Daten bleiben lokal</h3>
<p>Tome ist eine native macOS-App. Deine Datenbankdatei verlässt niemals deinen Rechner. Kein Hochladen, keine Cloud-Verarbeitung, keine Datenschutzbedenken. Öffnen, durchsuchen, bearbeiten, schließen — alles passiert lokal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "edit-sqlite-database-mac": {
    slug: "edit-sqlite-database-mac",
    title: "So bearbeitest du eine SQLite-Datenbank auf dem Mac",
    description:
      "Eine SQLite-Datenbank auf dem Mac zu bearbeiten bedeutet normalerweise, UPDATE-Anweisungen im Terminal zu schreiben. Für eine schnelle Wertänderung ist das ganz schön viel Aufwand.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du musst einen einzelnen Wert in einer SQLite-Datenbank ändern. Vielleicht muss ein Flag umgeschaltet, ein Benutzername korrigiert oder Testdaten angepasst werden. Der eingebaute Weg, dies auf dem Mac zu tun, ist das Terminal zu öffnen, <code>sqlite3</code> auszuführen, eine UPDATE-Anweisung mit der exakten WHERE-Klausel für die richtige Zeile zu schreiben und zu hoffen, dass du keinen Tippfehler gemacht hast, der die falschen Datensätze ändert. Für einen Wert. Im Jahr 2026.</p>

<h2>Warum Bearbeitung über das Terminal riskant ist</h2>
<p>UPDATE-Anweisungen manuell zu schreiben ist in Ordnung, wenn du genau weißt, was du tust. Aber es ist gefährlich einfach, eine WHERE-Klausel zu vergessen und jede Zeile in der Tabelle zu aktualisieren, oder einen Spaltennamen falsch zu schreiben und einen stillen Fehler zu bekommen. Es gibt kein Rückgängig im <code>sqlite3</code>-CLI — sobald die Anweisung ausgeführt wird, ist die Änderung permanent, es sei denn, du hast daran gedacht, eine Transaktion zu starten.</p>
<p>Neue Tabellen zu erstellen ist genauso mühsam. Du musst die vollständige CREATE-TABLE-Anweisung mit Spaltennamen, Typen und Constraints aufschreiben — eine Syntax, bei der man beim schnellen Prototyping und Iterieren leicht Fehler macht.</p>
<p>Für Entwickler, die in SQL denken, ist das machbar. Für alle anderen — und für Entwickler, die einfach schnell etwas bearbeiten möchten, ohne Risiko — sollte es einen besseren Weg geben.</p>

<h2>SQLite-Datenbanken visuell bearbeiten mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> lässt dich SQLite-Datenbanken auf dem Mac bearbeiten, wie du eine Tabellenkalkulation bearbeiten würdest. Öffne die Datenbank, klicke auf eine Zelle, ändere den Wert. Kein SQL für einfache Bearbeitungen nötig.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — direkte Zellenbearbeitung in einer SQLite-Datenbank auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Direkte Zellenbearbeitung</h3>
<p>Klicke auf eine beliebige Zelle in einer Tabelle, um ihren Wert direkt zu bearbeiten. Ändere Text, Zahlen oder Daten, ohne eine UPDATE-Anweisung schreiben zu müssen. Die Änderung zielt genau auf die Zeile, die du angeklickt hast — kein Risiko, dass eine fehlende WHERE-Klausel andere Datensätze betrifft.</p>

<h3>Zeilen einfügen und löschen</h3>
<p>Füge neue Zeilen zu jeder Tabelle mit einem einzigen Klick hinzu. Lösche ausgewählte Zeilen genauso einfach. Tome übernimmt das INSERT- und DELETE-SQL im Hintergrund, damit du dich auf deine Daten konzentrieren kannst, nicht auf deine Syntax.</p>

<h3>Tabellen visuell erstellen</h3>
<p>Brauchst du eine neue Tabelle? Tomes visueller Tabelleneditor lässt dich Spalten, Typen und Constraints in einem Formular definieren. Du musst keine CREATE-TABLE-Anweisungen aus dem Gedächtnis schreiben — fülle einfach die Felder aus und Tome generiert das korrekte SQL.</p>

<h3>SQL-Editor für komplexe Operationen</h3>
<p>Wenn du SQL brauchst — für Joins, Aggregationen oder Massenaktualisierungen — steht Tomes Abfrage-Editor mit Syntaxhervorhebung und Autovervollständigung für deine Tabellen- und Spaltennamen bereit.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "sql-query-editor-mac-native": {
    slug: "sql-query-editor-mac-native",
    title: "SQL-Abfrage-Editor für Mac — Nativ und schnell",
    description:
      "SQL-Abfragen gegen eine SQLite-Datenbank auf dem Mac auszuführen sollte keine schwergewichtige IDE oder ein Terminalfenster erfordern. Ein fokussierter Abfrage-Editor ist oft alles, was du brauchst.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du musst eine SQL-Abfrage gegen eine lokale SQLite-Datenbank ausführen. Deine Optionen: Das Terminal öffnen und das <code>sqlite3</code>-CLI ohne Syntaxhervorhebung und ohne Autovervollständigung verwenden, oder eine vollständige Datenbank-IDE starten, die zehn Sekunden zum Start braucht und ein halbes Gigabyte RAM verwendet. Keine Option passt zur Aufgabe — du willst einfach nur eine Abfrage schreiben, sie ausführen und die Ergebnisse sehen.</p>

<h2>Die Lücke zwischen Terminal und vollständigen IDEs</h2>
<p>Das <code>sqlite3</code>-CLI gibt dir rohe Abfrageausführung, aber null Entwicklerkomfort. Keine Syntaxfärbung, keine Vervollständigung von Tabellen- oder Spaltennamen, kein visuelles Ergebnisraster. Du liest Abfrageergebnisse als reinen Text und passt manuell die Terminalbreite an, um alle Spalten zu sehen.</p>
<p>Am anderen Ende des Spektrums sind Tools wie DataGrip oder DBeaver für Enterprise-Datenbank-Workflows gebaut — Verbindungen zu Remote-Servern verwalten, Migrationen durchführen, Schemas visualisieren. Sie sind leistungsstark, aber schwergewichtig. Für eine lokale SQLite-Datei fühlt sich das Starten einer vollständigen IDE an, als würdest du mit einem Sattelzug zum Laden an der Ecke fahren.</p>
<p>Was fehlt, ist ein schneller, fokussierter SQL-Editor, der eine SQLite-Datei öffnet und dich Abfragen mit den erwarteten Komfortfunktionen schreiben lässt — ohne den Overhead einer vollständigen IDE.</p>

<h2>Tomes SQL-Abfrage-Editor</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> enthält einen integrierten SQL-Abfrage-Editor, speziell für SQLite entwickelt. Er ist Teil einer nativen macOS-App, startet also sofort und läuft mit minimalem Ressourcenverbrauch.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQL-Abfrage-Editor mit Syntaxhervorhebung auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Syntaxhervorhebung</h3>
<p>SQL-Schlüsselwörter, Tabellennamen, String-Literale und Zahlen sind farblich gekennzeichnet für bessere Lesbarkeit. Erkenne Fehler, bevor du die Abfrage ausführst, anstatt nach dem Ausführen eine kryptische Fehlermeldung zu entziffern.</p>

<h3>Autovervollständigung</h3>
<p>Tome kennt dein Schema. Beginne, einen Tabellennamen einzutippen, und es schlägt Vervollständigungen vor. Referenziere eine Tabelle in einer FROM-Klausel und Spaltennamen erscheinen als Vorschläge. Kein ständiges Wechseln zwischen Schema-Browser und Abfrage-Editor mehr, um sich an Spaltennamen zu erinnern.</p>

<h3>Ergebnisse in einem nativen Raster</h3>
<p>Abfrageergebnisse erscheinen in einer schnellen, scrollbaren nativen Tabelle — nicht als HTML, das in einem Web-View gerendert wird. Sortiere Spalten, ändere ihre Größe und scrolle durch große Ergebnismengen mit der Performance, die du von einer macOS-App erwartest.</p>

<h3>Durchsuchen und Abfragen in einer App</h3>
<p>Tome ist nicht nur ein Abfrage-Editor. Durchsuche Tabellen, Views, Indizes und Trigger in der Seitenleiste. Bearbeite Daten direkt. Erstelle neue Tabellen visuell. Der SQL-Editor ist da, wenn du ihn brauchst, und der Rest der App kümmert sich um alles andere.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "browse-core-data-sqlite-mac": {
    slug: "browse-core-data-sqlite-mac",
    title: "So durchsuchst du Core-Data-SQLite-Dateien auf dem Mac",
    description:
      "Core Data speichert seine Daten in SQLite-Dateien, aber Apple gibt dir kein visuelles Tool, um sie zu inspizieren. Das Debugging persistenter Daten bedeutet, durch App-Container zu graben und rohe SQL-Ausgaben zu lesen.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Du debuggst ein Core-Data-Problem in deiner iOS- oder macOS-App. Die Daten sehen in der UI falsch aus, und du musst sehen, was tatsächlich in der zugrunde liegenden SQLite-Datei gespeichert ist. Xcodes Core-Data-Modelleditor zeigt dir dein Schema, aber er lässt dich nicht die tatsächlich gespeicherten Daten durchsuchen. Also machst du dich auf die Suche — finde den App-Container, lokalisiere die .sqlite-Datei, öffne das Terminal und führe rohe Abfragen gegen Tabellen mit Namen wie ZUSER und ZPOST aus, wo jede Spalte mit Z prefixiert ist und nichts intuitiv zu deinen Entity-Namen passt.</p>

<h2>Core-Data-SQLite-Dateien sind schwer zu inspizieren</h2>
<p>Core Data verwendet SQLite als Standard-Persistent-Store, fügt aber eigene Konventionen hinzu. Entity-Namen bekommen ein Z-Präfix im Tabellennamen. Attribute bekommen Z-präfixierte Spaltennamen. Beziehungen werden als Integer-Foreign-Keys in Spalten gespeichert, die du möglicherweise nicht sofort erkennst. Es gibt eine Z_METADATA-Tabelle und eine Z_PRIMARYKEY-Tabelle, die Core Data intern verwaltet.</p>
<p>Nichts davon ist so dokumentiert, dass manuelle Inspektion einfach wäre. Am Ende führst du Abfragen wie <code>SELECT * FROM ZUSER;</code> aus und versuchst, die Z-präfixierten Spalten deinem Managed-Object-Modell zuzuordnen. Im Terminal, ohne Syntaxhervorhebung und ohne visuelles Raster, ist das mühsam.</p>
<p>Xcode hilft hier nicht weiter. Es gibt keinen eingebauten SQLite-Browser. Das Instruments-Tool kann Core-Data-Operationen profilieren, aber es zeigt dir nicht die tatsächlichen Zeilendaten. Du brauchst ein separates Tool.</p>

<h2>Core-Data-SQLite-Dateien durchsuchen mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> öffnet Core-Data-SQLite-Dateien wie jede andere Datenbank. Navigiere zum Container deiner App, finde die .sqlite-Datei und öffne sie in Tome. Jede Z-präfixierte Tabelle erscheint in der Seitenleiste. Klicke auf eine, um alle Zeilen und ihre Werte in einem scrollbaren Raster zu sehen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome durchsucht eine Core-Data-SQLite-Datei mit Z-präfixierten Tabellen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Die echten Daten sehen</h3>
<p>Wenn deine App den falschen Wert anzeigt, öffne die SQLite-Datei in Tome und überprüfe die tatsächlich gespeicherten Daten. Ist der Wert in der Datenbank falsch, oder ist es ein Fetch-/Anzeigefehler? Visueller Zugriff auf die Rohdaten beantwortet diese Frage in Sekunden.</p>

<h3>Beziehungen und Metadaten inspizieren</h3>
<p>Durchsuche die Z_PRIMARYKEY-Tabelle, um zu sehen, wie Core Data Entity-Typen und Primärschlüssel verfolgt. Überprüfe Foreign-Key-Spalten, um sicherzustellen, dass Beziehungen korrekt gespeichert sind. Inspiziere Z_METADATA, um den Modellversions-Hash zu sehen.</p>

<h3>Diagnoseabfragen ausführen</h3>
<p>Nutze Tomes SQL-Abfrage-Editor, um Joins über Core Datas Z-präfixierte Tabellen zu schreiben, nach bestimmten Datensätzen zu filtern oder nach verwaisten Zeilen zu suchen, die auf ein Migrationsproblem hindeuten könnten. Syntaxhervorhebung und Autovervollständigung machen es einfacher als rohe Abfragen im Terminal.</p>

<h3>Sicher zu inspizieren, leicht zu finden</h3>
<p>Für den Simulator befindet sich die SQLite-Datei deiner App tief in <code>~/Library/Developer/CoreSimulator/</code>. Für eine macOS-App überprüfe <code>~/Library/Containers/</code> oder <code>~/Library/Application Support/</code>. Sobald du die Datei gefunden hast, ziehe sie auf Tomes Dock-Symbol und fange an zu browsen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "sqlite-viewer-mac-document-based": {
    slug: "sqlite-viewer-mac-document-based",
    title: "SQLite-Viewer für Mac — Mehrere Datenbanken nebeneinander öffnen",
    description:
      "Daten über zwei SQLite-Datenbanken hinweg zu vergleichen bedeutet normalerweise, zwischen Tabs zu wechseln oder zwei Instanzen deines Datenbank-Tools zu starten. Es gibt einen einfacheren Weg.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du migrierst Daten von einer SQLite-Datenbank in eine andere und musst die Ergebnisse überprüfen. Oder du vergleichst eine Staging-Datenbank mit der Produktion. Oder du hast zwei Versionen einer App-Datenbank und musst erkennen, was sich geändert hat. In jedem Fall musst du zwei Datenbanken gleichzeitig betrachten — und die meisten SQLite-Tools machen das schwieriger als nötig.</p>

<h2>Das Jonglieren mit Einzeldatenbank-Tools</h2>
<p>Die meisten SQLite-Browser sind für eine einzelne Datenbankverbindung auf einmal konzipiert. Um zwei Datenbanken zu vergleichen, öffnest du entweder manuell zwei separate Anwendungsfenster (wenn das Tool es überhaupt unterstützt), oder du wechselst zwischen Tabs hin und her und versuchst, Spaltenwerte im Gedächtnis zu behalten. Manche Tools erfordern, dass du eine Datenbank schließt, bevor du eine andere öffnest.</p>
<p>Der Terminal-Ansatz ist noch schlimmer. Du bräuchtest zwei Terminalfenster, jedes mit <code>sqlite3</code> gegen eine andere Datei laufend, und versuchst, die Ausgabe als reinen Text nebeneinander zu vergleichen. Es funktioniert theoretisch, aber scheitert bei jedem realen Datenvolumen.</p>
<p>Diese Einschränkung existiert, weil die meisten Datenbank-Tools nicht als dokumentbasierte Anwendungen konzipiert wurden. Sie wurden um einen Verbindungsmanager herum gebaut — wähle eine Datenbank, arbeite damit, trenne die Verbindung, wähle eine andere. Das ist für Remote-Server-Datenbanken in Ordnung, aber unnötige Reibung für lokale SQLite-Dateien.</p>

<h2>Tome: Ein dokumentbasierter SQLite-Viewer</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> behandelt jede SQLite-Datenbank als Dokument — genau wie TextEdit Textdateien oder Vorschau PDFs behandelt. Öffne eine Datenbank und sie bekommt ihr eigenes Fenster. Öffne eine weitere und sie bekommt auch ihr eigenes Fenster. Ordne sie nebeneinander an oder nutze die nativen macOS-Tabs, um sie zu gruppieren.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome mit mehreren SQLite-Datenbanken nebeneinander auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Datenbanken visuell vergleichen</h3>
<p>Öffne deine Quell- und Zieldatenbank in zwei Fenstern. Platziere sie nebeneinander mit macOS Split View oder durch Ziehen von Fenstern. Durchsuche dieselbe Tabelle in beiden, um Zeilenzahlen, Spaltenwerte oder Schema-Unterschiede zu vergleichen. Kein Tab-Wechsel, kein Auswendiglernen von Werten.</p>

<h3>Projektübergreifend arbeiten</h3>
<p>Halte eine Referenzdatenbank offen, während du gegen eine andere entwickelst. Öffne die Produktionsdatenbank deiner App neben einer Test-Fixture-Datenbank. Öffne die Datenbankdatei eines Kunden, während deine eigene noch geladen ist. Tome beschränkt die Anzahl gleichzeitig geöffneter Datenbanken nicht.</p>

<h3>Vollständiger Funktionsumfang in jedem Fenster</h3>
<p>Jedes Datenbankfenster hat die komplette Tome-Oberfläche — Seitenleiste mit Tabellen, Views, Indizes und Triggern; Datenraster mit direkter Bearbeitung; SQL-Abfrage-Editor mit Syntaxhervorhebung und Autovervollständigung. Es gibt kein Konzept von „primärer" und „sekundärer" Datenbank. Jede geöffnete Datenbank ist voll funktionsfähig.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "inspect-app-database-mac": {
    slug: "inspect-app-database-mac",
    title: "So inspizierst du die Datenbank einer App auf dem Mac",
    description:
      "Apps auf deinem Mac speichern Daten in versteckten SQLite-Dateien tief in Library-Ordnern. Was eine App tatsächlich gespeichert hat zu inspizieren bedeutet, durch Container-Pfade zu navigieren und rohe Datenbankausgaben zu entschlüsseln.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jede App auf deinem Mac, die Daten lokal speichert — Notizen, Lesezeichen, Nachrichten, Gesundheitsdaten, To-do-Listen — speichert sie wahrscheinlich in einer SQLite-Datenbank, die in <code>~/Library/</code> oder <code>~/Library/Containers/</code> versteckt ist. Vielleicht willst du sehen, welche Daten eine App gesammelt hat. Vielleicht musst du etwas wiederherstellen, das aus der UI gelöscht wurde. Vielleicht debuggst du deine eigene App und musst überprüfen, was tatsächlich auf die Festplatte geschrieben wurde. Egal aus welchem Grund, macOS bietet dir keine eingebaute Möglichkeit, diese Dateien visuell zu inspizieren.</p>

<h2>App-Datenbanken zu finden und zu öffnen ist mühsam</h2>
<p>Zuerst musst du die Datei finden. Sandboxed-Apps speichern ihre Daten in <code>~/Library/Containers/com.developer.appname/Data/</code>, während nicht-sandboxed Apps <code>~/Library/Application Support/</code> verwenden können. Der Library-Ordner ist standardmäßig versteckt — du musst Finders „Gehe zu Ordner" verwenden oder über das Terminal navigieren. Sobald du die .sqlite- oder .db-Datei gefunden hast, bleibt dir nur <code>sqlite3</code> im Terminal, um rohe Abfrageausgaben ohne visuelle Struktur zu lesen.</p>
<p>Für iOS-Apps, die im Simulator laufen, ist der Pfad noch tiefer: <code>~/Library/Developer/CoreSimulator/Devices/</code>, gefolgt von einer UUID, dann ein weiterer verschachtelter Pfad zum Documents- oder Library-Ordner der App. Die richtige Datenbank unter Dutzenden von Simulator-Geräteordnern zu finden, ist eine Schnitzeljagd.</p>

<h2>Jede App-Datenbank inspizieren mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> lässt dich jede SQLite-Datenbankdatei öffnen und sofort ihren Inhalt sehen — Tabellen, Views, Indizes, Trigger und Zeilendaten — in einer nativen macOS-Oberfläche. Sobald du die Datei gefunden hast, ziehe sie einfach auf Tome oder nutze Ablage → Öffnen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inspiziert die SQLite-Datenbank einer App auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verstehen, was eine App speichert</h3>
<p>Durchsuche jede Tabelle, um genau zu sehen, welche Daten die App persistent speichert. Spaltennamen verraten das Schema-Design. Zeilendaten zeigen die tatsächlichen Werte. Kein Rätselraten, keine Terminal-Befehle — klicke einfach durch die Tabellen in der Seitenleiste und scrolle durch ihren Inhalt.</p>

<h3>Die Datenschicht deiner eigenen App debuggen</h3>
<p>Wenn du eine macOS- oder iOS-App entwickelst, die SQLite oder Core Data verwendet, lässt Tome dich überprüfen, ob deine Schreiboperationen korrekt gelandet sind. Prüfe, ob Beziehungen intakt sind, inspiziere automatisch generierte Spalten und führe Diagnoseabfragen mit Syntaxhervorhebung und Autovervollständigung aus.</p>

<h3>Daten wiederherstellen oder exportieren</h3>
<p>Brauchst du einen Datensatz, der aus der UI einer App gelöscht wurde, aber vielleicht noch in der Datenbank existiert? Öffne die Datei in Tome und durchsuche die relevante Tabelle. Wenn die Daten vorhanden sind, kannst du sie direkt lesen oder eine SQL-Abfrage verwenden, um genau das zu extrahieren, was du brauchst.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "sqlite-for-ios-developers-mac": {
    slug: "sqlite-for-ios-developers-mac",
    title: "SQLite-Browser für iOS-Entwickler auf dem Mac",
    description:
      "iOS-Entwicklung bedeutet, ständig zu überprüfen, was deine App in ihre lokale Datenbank geschrieben hat. Xcode hat keinen eingebauten SQLite-Viewer und lässt dich einen Workflow aus Terminal und Drittanbieter-Tools zusammenstückeln.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Du baust eine iOS-App, die Core Data oder rohes SQLite für die Persistenz nutzt. Etwas sieht in der UI falsch aus — vielleicht füllt sich eine Liste nicht oder ein Wert erscheint veraltet. Du musst die Datenbank überprüfen. Xcode bietet einen Datenmodelleditor und einen Instruments-Profiler, aber keines davon zeigt dir die tatsächlichen Zeilen in der SQLite-Datei. Also öffnest du das Terminal, jagst den Container-Pfad des Simulators und fängst an, <code>SELECT *</code>-Abfragen gegen Z-präfixierte Tabellen auszuführen. Dieser Workflow unterbricht jedes Mal deine Konzentration.</p>

<h2>Das Datenbankproblem des iOS-Entwicklers</h2>
<p>Jeder iOS-Simulator-Lauf speichert seine Daten unter <code>~/Library/Developer/CoreSimulator/Devices/</code>, verschachtelt in einem UUID-benannten Verzeichnis. Der Pfad ändert sich, wenn du den Simulator zurücksetzt oder das Gerät wechselst. Selbst wenn du den Speicherort als Lesezeichen speicherst, kann das nächste Xcode-Update die Struktur durcheinanderbringen. Die richtige .sqlite-Datei zu finden ist die halbe Miete.</p>
<p>Wenn du sie gefunden hast, gibt dir das <code>sqlite3</code>-CLI rohe Textausgabe. Core Datas Z-präfixierte Tabellen- und Spaltennamen machen manuelle Abfragen verwirrend. Es gibt keine Autovervollständigung für Spaltennamen, kein visuelles Raster zum Überblicken von Zeilen und keine Möglichkeit, schnell einen Testwert zu bearbeiten, ohne eine vollständige UPDATE-Anweisung zu schreiben. Die meisten Entwickler verschwenden mehrmals täglich Minuten mit diesem Ritual.</p>
<p>Drittanbieter-Tools wie DB Browser for SQLite funktionieren, fühlen sich aber auf macOS fremd an — Qt-basierte Oberflächen mit falschen Tastenkombinationen und nicht-nativen Dateidialogen. DBeaver und DataGrip sind vollständige Datenbank-IDEs, Overkill für die Inspektion einer lokalen SQLite-Datei.</p>

<h2>Tome: Ein SQLite-Browser für deinen Mac-Workflow</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ist ein nativer macOS-SQLite-Browser, der sich natürlich in den Workflow eines iOS-Entwicklers einfügt. Öffne die .sqlite-Datei des Simulators und sieh sofort jede Tabelle, jeden View und jeden Index. Durchsuche Core Datas Z-präfixierte Tabellen in einem scrollbaren Raster. Bearbeite Werte direkt, um Testszenarien aufzubauen, ohne SQL schreiben zu müssen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome durchsucht die SQLite-Datenbank einer iOS-App auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Core-Data-Stores visuell inspizieren</h3>
<p>Core Datas SQLite-Tabellen verwenden Z-präfixierte Namen, die im Terminal schwer zu lesen sind. In Tome erscheint jede Tabelle in der Seitenleiste — klicke auf eine und sieh alle Zeilen mit ordentlich ausgerichteten Spalten. Ordne ZUSER- und ZPOST-Tabellen deinem Managed-Object-Modell auf einen Blick zu.</p>

<h3>Testdaten bearbeiten ohne neu zu bauen</h3>
<p>Musst du einen Wert ändern, um einen Bug zu reproduzieren? Klicke die Zelle in Tome an und tippe den neuen Wert. Du brauchst keine UPDATE-Anweisung zu schreiben oder die Seeding-Logik deiner App erneut auszuführen. Füge Zeilen ein, um Edge Cases zu testen, oder lösche Datensätze, um einen sauberen Zustand zu simulieren.</p>

<h3>Diagnoseabfragen ausführen</h3>
<p>Tomes SQL-Editor mit Syntaxhervorhebung und Autovervollständigung lässt dich Joins, Aggregationen und gefilterte Abfragen gegen die Daten deiner App schreiben. Überprüfe Beziehungen, zähle Datensätze oder suche nach bestimmten Werten — alles, ohne die App zu verlassen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "view-firefox-history-sqlite-mac": {
    slug: "view-firefox-history-sqlite-mac",
    title: "So zeigst du den Firefox-Verlauf (SQLite) auf dem Mac an",
    description:
      "Firefox speichert deinen Browserverlauf in einer SQLite-Datenbank namens places.sqlite. Ihn außerhalb des Browsers anzuzeigen bedeutet, mit gesperrten Dateien und roher SQL-Ausgabe umzugehen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Firefox speichert deinen gesamten Browserverlauf, Lesezeichen und Website-Metadaten in einer SQLite-Datenbank namens <code>places.sqlite</code>. Vielleicht möchtest du alten Verlauf durchsuchen, den die eingebaute Firefox-Suche nicht gut findet, deine Browserdaten exportieren oder deine Gewohnheiten analysieren. Aber das Öffnen dieser Datei ist nicht einfach — Firefox sperrt sie, während es läuft, und sobald du eine Kopie hast, bietet macOS keine eingebaute Möglichkeit, sie visuell anzuzeigen.</p>

<h2>Die Datenbank finden und kopieren</h2>
<p>Firefox' Profilordner befindet sich unter <code>~/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release/</code>. Darin findest du <code>places.sqlite</code> neben anderen Datenbanken wie <code>cookies.sqlite</code> und <code>formhistory.sqlite</code>. Der Haken: Firefox sperrt diese Dateien, während der Browser läuft. Du musst entweder Firefox zuerst beenden oder die Datei an einen anderen Ort kopieren, während es läuft (wobei die Kopie inkonsistent sein kann, wenn Firefox gerade schreibt).</p>
<p>Sobald du die Datei hast, bedeutet der Terminal-Ansatz, <code>sqlite3 places.sqlite</code> auszuführen und Abfragen gegen Tabellen wie <code>moz_places</code>, <code>moz_historyvisits</code> und <code>moz_bookmarks</code> zu schreiben. Das Schema ist nicht intuitiv — Besuchszeitstempel werden in Mikrosekunden seit der Epoche gespeichert, URLs sind in einer Tabelle während Besuchsmetadaten in einer anderen sind, und um eine lesbare Verlaufsliste zu bekommen, brauchst du einen JOIN. Das ist machbar für jemanden, der SQL fließend beherrscht, aber unzumutbar für die meisten Nutzer.</p>

<h2>Firefox-Verlauf visuell durchsuchen mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> öffnet <code>places.sqlite</code> wie jede andere Datenbankdatei. Ziehe die kopierte Datei auf Tome und sieh sofort jede Tabelle — <code>moz_places</code>, <code>moz_historyvisits</code>, <code>moz_bookmarks</code> und mehr — in der Seitenleiste aufgelistet. Klicke auf eine beliebige Tabelle, um ihren Inhalt in einem scrollbaren Raster zu durchsuchen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome zeigt die Firefox-places.sqlite-Verlaufsdatenbank auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verlauf durchsuchen und filtern</h3>
<p>Nutze Tomes SQL-Abfrage-Editor, um gezielte Suchen zu schreiben. Finde jeden Besuch auf einer bestimmten Domain, filtere nach Datumsbereich mit den Mikrosekunden-Zeitstempeln oder zähle, wie oft du eine bestimmte Website besucht hast. Syntaxhervorhebung und Autovervollständigung machen das Schreiben dieser Abfragen schnell.</p>

<h3>Lesezeichen und Metadaten erkunden</h3>
<p>Die <code>moz_bookmarks</code>-Tabelle speichert deine Lesezeichen-Baumstruktur mit Eltern-Kind-Beziehungen. Durchsuche sie in Tome, um deine vollständige Lesezeichen-Hierarchie zu sehen, einschließlich Ordnerstruktur und Sortierreihenfolge — Details, die der Firefox-Lesezeichen-Manager manchmal verbirgt.</p>

<h3>Andere Firefox-Datenbanken inspizieren</h3>
<p>Derselbe Profilordner enthält <code>cookies.sqlite</code>, <code>formhistory.sqlite</code> und <code>content-prefs.sqlite</code>. Jede ist eine Standard-SQLite-Datenbank, die Tome öffnen kann. Überprüfe, welche Cookies eine Website gesetzt hat, sieh dir gespeicherte Formulareingaben an oder inspiziere seitenspezifische Einstellungen — alles visuell, ohne rohe Abfragen im Terminal schreiben zu müssen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "sqlite-vs-realm-browser-mac": {
    slug: "sqlite-vs-realm-browser-mac",
    title: "SQLite vs. Realm Browser auf dem Mac",
    description:
      "Mobile Apps nutzen SQLite oder Realm für lokalen Speicher, aber die Inspektion auf dem Mac erfordert jeweils ein anderes Tool. Die Wahl des richtigen Browsers hängt davon ab, welches Format deine App tatsächlich verwendet.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du entwickelst eine Mobile-App und musst ihre lokale Datenbank inspizieren. Wenn du Realm verwendest, greifst du zu Realm Studio. Wenn du SQLite verwendest (direkt oder über Core Data, GRDB oder Room), brauchst du ein komplett anderes Tool. Die beiden Formate sind grundlegend verschieden, und die Browse-Tools überschneiden sich nicht. Zu verstehen, was jedes bietet, hilft dir, das richtige zu wählen — oder zu erkennen, dass du beide brauchst.</p>

<h2>Realm und SQLite dienen unterschiedlichen Zwecken</h2>
<p>Realm ist eine Objektdatenbank — sie speichert Daten als Objekte mit Eigenschaften und Beziehungen, nicht als Zeilen in Tabellen. Realm Studio lässt dich diese Objekte visuell durchsuchen, Beziehungen als Links sehen und Eigenschaften direkt bearbeiten. Es ist speziell für Realm-Dateien gebaut und macht nichts anderes.</p>
<p>SQLite ist eine relationale Datenbank, gespeichert als einzelne Datei. Sie verwendet Standard-SQL-Tabellen mit Zeilen und Spalten. Core Data auf iOS, Room auf Android und unzählige andere Frameworks nutzen SQLite als Speicher-Backend. Das Ökosystem ist enorm, aber die Inspektionstools auf dem Mac waren historisch entweder Terminal-basiert oder plattformübergreifende Portierungen, die sich fehl am Platz anfühlen.</p>
<p>Wenn dein Projekt Realm verwendet, ist Realm Studio deine einzige echte Option — kein Allzweck-Datenbank-Browser kann .realm-Dateien öffnen. Aber wenn dein Projekt SQLite in irgendeiner Form verwendet, hast du die Wahl. Die Frage ist, ob diese Optionen auf macOS tatsächlich gut sind.</p>

<h2>Ein nativer SQLite-Browser für die andere Hälfte</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ist ein nativer macOS-SQLite-Browser, der den Fokus und die Qualität von Realm Studio bietet, aber für SQLite-Datenbanken. Wo Realm Studio speziell für .realm-Dateien gebaut ist, ist Tome speziell für .sqlite-, .db- und .sqlite3-Dateien gebaut — und nichts anderes.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — nativer SQLite-Browser auf dem Mac im Vergleich zu Realm Studio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dieselbe fokussierte Philosophie</h3>
<p>Realm Studio versucht nicht, ein PostgreSQL-Client zu sein. Genauso versucht Tome nicht, sich mit MySQL oder MongoDB zu verbinden. Durch die ausschließliche Konzentration auf SQLite ist jede Funktion — direkte Bearbeitung, Tabellenerstellung, Abfrage-Autovervollständigung — für das Format optimiert, mit dem du tatsächlich arbeitest.</p>

<h3>Tabellen durchsuchen, direkt bearbeiten, komfortabel abfragen</h3>
<p>Öffne eine SQLite-Datenbank und durchsuche Tabellen, Views, Indizes und Trigger in der Seitenleiste. Bearbeite Zellwerte durch Anklicken. Füge Zeilen ein oder lösche sie ohne SQL zu schreiben. Wenn du Abfragen brauchst, bietet der integrierte Editor Syntaxhervorhebung und Autovervollständigung für dein Schema.</p>

<h3>Wenn du beides brauchst</h3>
<p>Manche Projekte nutzen Realm für eine Komponente und SQLite für eine andere. Halte Realm Studio und Tome nebeneinander — jedes verarbeitet sein Format nativ, und keines verschwendet Ressourcen für den Versuch, Formate zu unterstützen, für die es nicht konzipiert wurde.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "mac-sqlite-command-line-vs-gui": {
    slug: "mac-sqlite-command-line-vs-gui",
    title: "Mac SQLite: Kommandozeile vs. GUI — Wann du welches Tool nutzt",
    description:
      "Das sqlite3-CLI wird mit jedem Mac ausgeliefert und eignet sich für schnelle Abfragen, versagt aber beim Durchsuchen, Bearbeiten und Verstehen unbekannter Schemas. Zu wissen, wann du das Tool wechselst, spart Zeit.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Jeder Mac wird mit dem <code>sqlite3</code>-Kommandozeilentool ausgeliefert. Für Entwickler, die sich im Terminal wohlfühlen, ist es ein verlässlicher Weg für schnelle Abfragen. Aber es gibt einen Punkt, an dem das CLI aufhört, effizient zu sein, und eine GUI schneller wird — der Trick ist zu wissen, wo diese Grenze liegt. Das falsche Tool für die Aufgabe zu verwenden, verschwendet in beide Richtungen Zeit.</p>

<h2>Wann die Kommandozeile gewinnt</h2>
<p>Das <code>sqlite3</code>-CLI glänzt bei geskripteten Operationen. Wenn du ein Shell-Skript schreibst, das einen Wert aus einer Datenbank extrahieren muss, leitet das CLI die Ausgabe direkt in andere Befehle weiter. Einzeiler-Abfragen sind schnell: <code>sqlite3 app.db "SELECT count(*) FROM users;"</code> gibt dir eine Antwort, ohne etwas zu starten. Für Automatisierung, Backups mit <code>.dump</code> und schnelle Überprüfungen in einer bestehenden Terminal-Sitzung ist das CLI das richtige Tool.</p>
<p>Es ist auch überall verfügbar. Keine Installation nötig, keine App zum Herunterladen. Wenn du per SSH auf einem Remote-Rechner bist oder in einer CI-Pipeline arbeitest, ist das CLI alles, was du hast — und es funktioniert gut für gezielte Abfragen, wenn du das Schema kennst.</p>

<h2>Wann das CLI versagt</h2>
<p>Das CLI versagt beim Erkunden. Wenn du eine unbekannte Datenbank öffnest und ihr Schema verstehen musst, ist das wiederholte Ausführen von <code>.tables</code> und <code>.schema tablename</code> langsam. Breite Tabellen umbrechen im Terminal. Es gibt kein Scrollen durch Ergebnisse — die Ausgabe rauscht einfach vorbei. Daten zu bearbeiten bedeutet UPDATE-Anweisungen mit präzisen WHERE-Klauseln zu schreiben, mit dem Risiko versehentlicher Massenänderungen bei einem Tippfehler.</p>
<p>Für alle, die keine Entwickler sind — Datenanalysten, Designer, QA-Tester — ist das CLI praktisch unbenutzbar. Und selbst für Entwickler ist das visuelle Durchsuchen von mehr als ein paar Tabellen in einer GUI einfach schneller.</p>

<h2>Tome: Die GUI-Seite der Gleichung</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> füllt die GUI-Rolle als nativer macOS-SQLite-Browser. Es ist kein Ersatz für das CLI — es ist die Ergänzung. Nutze das CLI für Skripting und schnelle Checks; nutze Tome zum Durchsuchen, Bearbeiten und visuellen Verstehen von Datenbanken.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome GUI-SQLite-Browser im Vergleich zur Kommandozeile auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Unbekannte Schemas erkunden</h3>
<p>Öffne eine beliebige Datenbank und sieh jede Tabelle, jeden View, jeden Index und jeden Trigger in der Seitenleiste. Klicke dich durch Tabellen, um das Schema zu verstehen, Beispieldaten zu überblicken und Beziehungen herauszufinden — alles, ohne einen einzigen Befehl einzutippen.</p>

<h3>Sicher bearbeiten</h3>
<p>Klicke auf eine Zelle, um ihren Wert zu ändern. Keine UPDATE-Anweisung, keine WHERE-Klausel, die schiefgehen kann. Füge Zeilen ein und lösche sie mit einem Klick. Das Risiko versehentlicher Massenänderungen verschwindet, wenn jede Bearbeitung genau die Zelle betrifft, die du angeklickt hast.</p>

<h3>Abfragen mit Unterstützung</h3>
<p>Wenn du SQL schreibst, bietet Tomes Abfrage-Editor Syntaxhervorhebung und Autovervollständigung. Er ist der Mittelweg zwischen dem nackten CLI und einer vollständigen Datenbank-IDE — gerade genug Unterstützung, um Abfragen schneller zu schreiben, ohne den Overhead von Enterprise-Tooling.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "edit-sqlite-without-sql-mac": {
    slug: "edit-sqlite-without-sql-mac",
    title: "So bearbeitest du SQLite ohne SQL auf dem Mac",
    description:
      "Nicht jeder, der einen Wert in einer SQLite-Datenbank ändern muss, beherrscht SQL. Designer, QA-Tester und Produktmanager sollten keine UPDATE-Syntax lernen müssen, nur für eine schnelle Datenänderung.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Ein QA-Tester muss die Rolle eines Benutzers ändern, um einen Berechtigungsfehler zu reproduzieren. Ein Designer möchte Platzhaltertext in der Datenbank eines Prototyps austauschen. Ein Produktmanager muss einen Konfigurationswert aktualisieren, um ein Feature-Flag zu testen. Keiner von ihnen sollte SQL-Syntax lernen müssen, um eine einfache Datenänderung vorzunehmen — aber auf dem Mac ist das Standard-Tool zum Bearbeiten von SQLite-Datenbanken die <code>sqlite3</code>-Kommandozeile, wo selbst eine Ein-Zellen-Bearbeitung das Schreiben von <code>UPDATE tablename SET column = 'value' WHERE id = 42;</code> erfordert.</p>

<h2>SQL ist eine Hürde für Nicht-Entwickler</h2>
<p>SQL ist theoretisch nicht schwer zu lernen, aber es unter Druck richtig zu machen ist eine andere Sache. Das Vergessen der WHERE-Klausel in einer UPDATE-Anweisung ändert jede Zeile in der Tabelle. Falsche Anführungszeichen verursachen einen Syntaxfehler. Ein falsch geschriebener Spaltenname produziert eine verwirrende Fehlermeldung. Für jemanden, der nur einen Boolean umschalten oder einen String ändern muss, steht dieser Aufwand in keinem Verhältnis zur Aufgabe.</p>
<p>Selbst Entwickler ziehen es oft vor, kein SQL für triviale Bearbeitungen zu schreiben. Das Terminal öffnen, zur Datei navigieren, <code>sqlite3</code> starten, sich an die genauen Tabellen- und Spaltennamen erinnern und eine syntaktisch korrekte Anweisung schreiben — alles, um eine Zelle zu ändern — ist langsam im Vergleich zum einfachen Klicken und Tippen.</p>

<h2>SQLite wie eine Tabellenkalkulation bearbeiten mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> lässt jeden eine SQLite-Datenbank auf dem Mac bearbeiten, ohne eine einzige Zeile SQL zu schreiben. Öffne die Datei, finde die Tabelle, klicke auf die Zelle, tippe den neuen Wert. Es funktioniert wie das Bearbeiten einer Tabellenkalkulation — denn für einfache Änderungen ist genau das die Oberfläche, die du willst.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — SQLite-Daten ohne SQL auf dem Mac bearbeiten" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Jede Zelle per Klick bearbeiten</h3>
<p>Jede Zelle in Tomes Datenraster ist bearbeitbar. Klicke darauf, ändere den Wert, und das Update zielt auf genau diese Zeile und Spalte. Keine WHERE-Klausel zum Vergessen, kein Risiko von Massenänderungen, kein SQL-Wissen erforderlich.</p>

<h3>Einfügen und Löschen ohne Befehle</h3>
<p>Füge eine neue Zeile hinzu, indem du auf den Einfügen-Button klickst. Entferne Zeilen durch Auswählen und Löschen. Tome übernimmt das INSERT- und DELETE-SQL im Hintergrund, sodass du mit deinen Daten über vertraute Aktionen interagierst statt über Datenbankbefehle.</p>

<h3>Tabellen visuell erstellen</h3>
<p>Brauchst du eine neue Tabelle? Tomes visueller Tabelleneditor lässt dich Spaltennamen, Typen und Constraints in einem Formular definieren — du musst keine <code>CREATE TABLE</code>-Syntax aus dem Gedächtnis schreiben. Fülle die Felder aus und die Tabelle wird korrekt erstellt.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "sqlite-database-viewer-apple-silicon": {
    slug: "sqlite-database-viewer-apple-silicon",
    title: "SQLite-Datenbank-Viewer optimiert für Apple Silicon",
    description:
      "Viele Datenbank-Tools laufen auf Apple-Silicon-Macs noch über Rosetta und verschwenden dabei Akku und Performance. Ein nativer ARM-Build macht einen spürbaren Unterschied bei einer App, die du den ganzen Tag offen hast.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast dir einen Mac mit M-Chip für seine Performance und Akkulaufzeit gekauft. Dann installierst du ein Datenbank-Tool und merkst, dass es über Rosetta läuft — die Intel-Übersetzungsschicht, die für Kompatibilität existiert, nicht für Performance. Die App verbraucht mehr Speicher, zieht mehr Akku und startet langsamer als nötig. Für ein Tool, das du möglicherweise den ganzen Tag neben Xcode oder VS Code offen hast, summiert sich dieser Overhead.</p>

<h2>Die Rosetta-Steuer auf Datenbank-Tools</h2>
<p>Viele beliebte Datenbank-Browser werden immer noch als reine Intel-Binaries ausgeliefert oder sind mit Electron gebaut, das erst kürzlich zuverlässige Apple-Silicon-Unterstützung erhalten hat. DB Browser for SQLite, mit Qt gebaut, hatte über Versionen hinweg inkonsistente ARM-Unterstützung. DBeaver läuft auf Java und fügt eine weitere Abstraktionsschicht über der Hardware hinzu. Selbst Tools, die Apple Silicon technisch unterstützen, bündeln oft Electrons Chromium-Engine, die deutlich mehr Ressourcen verbraucht als eine native App benötigt.</p>
<p>Öffne den Aktivitätsmonitor und schau dir die Spalte „Art" an. Wenn dein Datenbank-Tool auf einem M-Chip-Mac „Intel" anzeigt, läuft es über Rosetta. Das bedeutet langsameren Start, höheren Speicherverbrauch und reduzierte Akkulaufzeit im Vergleich zu einem nativen ARM-Binary. Für ein leichtgewichtiges Werkzeug wie einen SQLite-Viewer ist der Performance-Unterschied besonders spürbar, weil die App selbst schnell und klein sein sollte.</p>

<h2>Tome: Nativ für Apple Silicon vom ersten Tag</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ist mit Swift und AppKit als Universal Binary gebaut, das nativ auf Apple Silicon und Intel Macs läuft. Auf einem Mac mit M-Chip startet es sofort, verbraucht minimalen Speicher und hat null Rosetta-Overhead. Es ist die Art von App, für die Apple Silicon gemacht wurde.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQLite-Viewer läuft nativ auf Apple Silicon Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sofortiger Start, geringer Speicherverbrauch</h3>
<p>Kein JVM-Start, keine Chromium-Engine-Initialisierung, keine Rosetta-Übersetzung. Tome öffnet sich in unter einer Sekunde und bleibt leichtgewichtig — typischerweise verbraucht es nur einen Bruchteil des Speichers, den Electron-basierte Alternativen benötigen. Halte es den ganzen Tag offen, ohne deine andere Arbeit zu beeinträchtigen.</p>

<h3>Flüssiges Scrollen durch große Tabellen</h3>
<p>Natives AppKit-Rendering bedeutet, dass Tome durch Tausende von Zeilen mit derselben Geschmeidigkeit scrollt, die du von Finder oder Numbers erwartest. Keine übersprungenen Frames, kein Lag beim Springen zum Ende einer großen Ergebnismenge. Der M-Chip bewältigt native UI mühelos.</p>

<h3>Voller Funktionsumfang, minimaler Fußabdruck</h3>
<p>Durchsuche Tabellen, Views, Indizes und Trigger. Bearbeite Daten direkt. Führe SQL-Abfragen mit Syntaxhervorhebung und Autovervollständigung aus. Erstelle und ändere Tabellen visuell. All das in einer App, die die Ressourcen deines Macs respektiert, weil sie speziell für die Plattform gebaut wurde.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "open-whatsapp-backup-sqlite-mac": {
    slug: "open-whatsapp-backup-sqlite-mac",
    title: "So öffnest du WhatsApp-Backup-SQLite auf dem Mac",
    description:
      "WhatsApp speichert den Chatverlauf in einer SQLite-Datenbank. Diese Nachrichten außerhalb der App anzuzeigen — zu Archivierungs-, rechtlichen oder persönlichen Zwecken — erfordert das Extrahieren und Öffnen der Datenbankdatei auf deinem Mac.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>WhatsApp speichert deine Chatnachrichten, Medienverweise und Kontaktdaten in einer SQLite-Datenbank. Ob du ein Backup von einem iPhone mit einem Tool wie iMazing extrahiert, eine <code>ChatStorage.sqlite</code>-Datei aus einem iTunes-Backup geholt oder eine <code>msgstore.db</code> aus einem Android-Backup gezogen hast — du hast jetzt eine Datenbankdatei auf deinem Mac. Ein Doppelklick bringt nichts Nützliches. Du brauchst einen Weg, sie zu öffnen und die Gespräche darin zu lesen.</p>

<h2>Warum das schwieriger ist als es sein sollte</h2>
<p>WhatsApps SQLite-Datenbanken verwenden ihr eigenes Schema. Nachrichten befinden sich in Tabellen wie <code>ZWAMESSAGE</code> (iOS) oder <code>messages</code> (Android), mit Spalten für Absender, Zeitstempel, Textinhalt, Medientyp und Status. Zeitstempel werden in nicht-standardmäßigen Formaten gespeichert — iOS verwendet Core Datas Epoche (Sekunden seit dem 01.01.2001), während Android Unix-Millisekunden nutzt. Kontakte werden durch JID-Strings referenziert, nicht durch lesbare Namen.</p>
<p>Die Datei im Terminal mit <code>sqlite3</code> zu öffnen gibt dir rohen Zugang, aber Chatnachrichten als unformatierte Textzeilen mit kodierten Zeitstempeln und JID-Bezeichnern zu lesen ist für die meisten Leute praktisch nutzlos. Du brauchst eine visuelle Oberfläche, um die Daten zu verstehen.</p>
<p>Android-Backups fügen eine weitere Komplikation hinzu: die <code>msgstore.db.crypt15</code>-Datei ist verschlüsselt. Du musst sie zuerst mit deiner Schlüsseldatei entschlüsseln, bevor ein SQLite-Browser sie öffnen kann. Einmal entschlüsselt ist sie jedoch eine Standard-SQLite-Datenbank.</p>

<h2>WhatsApp-Daten durchsuchen mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> öffnet WhatsApps SQLite-Datenbankdateien wie jede andere Datenbank. Ziehe die extrahierte <code>ChatStorage.sqlite</code> oder entschlüsselte <code>msgstore.db</code> auf Tome und sieh jede Tabelle in der Seitenleiste. Klicke auf die Nachrichtentabelle, um deinen Chatverlauf in einem scrollbaren Raster zu durchsuchen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome öffnet eine WhatsApp-Backup-SQLite-Datenbank auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nachrichten im Kontext lesen</h3>
<p>Durchsuche die Nachrichtentabelle, um Textinhalt, Absenderkennungen, Zeitstempel und Medienverweise zu sehen. Sortiere nach Datum, um Gespräche chronologisch zu lesen. Nutze Tomes SQL-Editor, um Nachrichten nach Kontakt oder Datumsbereich zu filtern.</p>

<h3>Konversationsübergreifend suchen</h3>
<p>Musst du eine bestimmte Nachricht finden? Schreibe eine schnelle Abfrage in Tomes SQL-Editor mit Autovervollständigung: <code>SELECT * FROM ZWAMESSAGE WHERE ZTEXT LIKE '%suchbegriff%';</code> Die Ergebnisse erscheinen in einem nativen Raster, das du scrollen und sortieren kannst — viel praktischer als grep im Terminal.</p>

<h3>Deine Daten bleiben auf deinem Mac</h3>
<p>Anders als web-basierte SQLite-Viewer, die das Hochladen deiner Datenbank erfordern, läuft Tome vollständig lokal. Deine WhatsApp-Nachrichten verlassen niemals deinen Rechner. Öffnen, durchsuchen, abfragen und schließen — alles passiert auf deinem Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "sqlite-query-editor-autocomplete-mac": {
    slug: "sqlite-query-editor-autocomplete-mac",
    title: "SQLite-Abfrage-Editor mit Autovervollständigung auf dem Mac",
    description:
      "SQL-Abfragen gegen eine SQLite-Datenbank ohne Autovervollständigung zu schreiben bedeutet, ständig zwischen Schema-Ansicht und Editor zu wechseln, um Tabellen- und Spaltennamen nachzuschlagen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du schreibst eine SELECT-Abfrage gegen eine SQLite-Datenbank mit dreißig Tabellen. Du erinnerst dich, dass die Tabelle etwas wie <code>user_sessions</code> oder <code>session_logs</code> heißt — aber welche? Und die Zeitstempelspalte — heißt sie <code>created_at</code>, <code>timestamp</code> oder <code>date_created</code>? Im <code>sqlite3</code>-CLI würdest du in den <code>.schema</code>-Modus wechseln, die Tabelle nachschlagen, zurück zur Abfrage gehen und das für jeden Spaltenverweis wiederholen. Dieses Kontextwechseln ist der Punkt, an dem der Großteil deiner Abfrage-Schreibzeit tatsächlich draufgeht.</p>

<h2>Die Kosten fehlender Autovervollständigung</h2>
<p>Das <code>sqlite3</code>-CLI hat keine Autovervollständigung für Tabellen- oder Spaltennamen. Du tippst aus dem Gedächtnis, und wenn du etwas falsch schreibst, bekommst du einen Fehler nach dem Ausführen — nicht während des Tippens. Für einfache Datenbanken mit wenigen Tabellen ist das machbar. Für Datenbanken mit Dutzenden von Tabellen und Hunderten von Spalten ist es eine ständige Produktivitätsbremse.</p>
<p>Manche Entwickler kopieren Tabellenschemas in eine Notizdatei und referenzieren sie beim Schreiben von Abfragen. Andere führen wiederholt <code>.tables</code> und <code>PRAGMA table_info(tablename);</code> aus. Beides sind Workarounds für ein fehlendes Feature — der Abfrage-Editor sollte dein Schema kennen und dir helfen, korrektes SQL zu schreiben.</p>
<p>Vollständige Datenbank-IDEs wie DataGrip bieten ausgezeichnete Autovervollständigung, sind aber teuer, schwergewichtig und für Enterprise-Workflows konzipiert. Für eine lokale SQLite-Datei solltest du keine Abo-basierte IDE brauchen, nur um Tabellennamen-Vorschläge zu bekommen.</p>

<h2>Tomes Abfrage-Editor mit Autovervollständigung</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> enthält einen SQL-Abfrage-Editor, der dein Datenbankschema kennt. Beginne, einen Tabellennamen einzutippen, und es schlägt Treffer vor. Referenziere eine Tabelle und Spaltennamen erscheinen als Vervollständigungen. Es ist keine vollständige IDE — es ist genau die Unterstützungsebene, die das Schreiben von SQLite-Abfragen schnell macht, ohne Komplexität hinzuzufügen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQL-Abfrage-Editor mit Autovervollständigung auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Schema-bewusste Vorschläge</h3>
<p>Tome liest dein Datenbankschema, wenn du die Datei öffnest. Tabellennamen, Spaltennamen und SQLite-Schlüsselwörter erscheinen alle als Vorschläge während du tippst. Kein Auswendiglernen von Spaltennamen oder Wechseln zum Schema-Browser mitten in der Abfrage nötig.</p>

<h3>Syntaxhervorhebung</h3>
<p>SQL-Schlüsselwörter, String-Literale, Zahlen und Bezeichner sind farblich gekennzeichnet. Erkenne ein fehlendes Anführungszeichen oder ein falsch geschriebenes Schlüsselwort, bevor du die Abfrage ausführst, nicht nachdem du eine Fehlermeldung gelesen hast.</p>

<h3>Ergebnisse in einem nativen Raster</h3>
<p>Abfrageergebnisse erscheinen sofort in einer nativen macOS-Tabellenansicht. Sortiere Spalten, ändere ihre Größe und scrolle flüssig durch große Ergebnismengen. Kopiere Ergebnisse oder wähle bestimmte Zellen aus — das Raster verhält sich wie eine echte Mac-Datenansicht, nicht wie eine HTML-Tabelle in einem Web-View.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "view-chrome-cookies-sqlite-mac": {
    slug: "view-chrome-cookies-sqlite-mac",
    title: "So zeigst du Chrome-Cookies (SQLite) auf dem Mac an",
    description:
      "Chrome speichert Cookies in einer SQLite-Datenbank auf deinem Mac. Sie über die DevTools anzuzeigen funktioniert für jeweils eine Website, aber die gesamte Cookie-Datenbank zu inspizieren erfordert einen anderen Ansatz.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Chrome speichert alle Cookies in einer SQLite-Datenbankdatei namens <code>Cookies</code> (ohne Erweiterung) unter <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code>. Du kannst Cookies für eine einzelne Website über Chrome DevTools anzeigen, aber wenn du über alle Cookies aller Websites suchen, Tracking-Muster analysieren oder prüfen willst, welche Daten Websites gespeichert haben, musst du die eigentliche Datenbankdatei öffnen. Chrome bietet keine Möglichkeit, seinen gesamten Cookie-Speicher visuell zu durchsuchen.</p>

<h2>Die DevTools-Einschränkung</h2>
<p>Chromes Application-Tab in den DevTools zeigt Cookies pro Domain für die aktuell geladene Seite. Das funktioniert zum Debuggen der Cookies einer bestimmten Website, reicht aber nicht aus, wenn du alle Cookies aller Websites sehen, nach einem bestimmten Cookie-Namen suchen möchtest, der von mehreren Domains verwendet wird, oder zählen willst, wie viele Tracking-Cookies vorhanden sind. Du müsstest jede Website einzeln besuchen und inspizieren — nicht praktikabel.</p>
<p>Der Datenbankansatz gibt dir das vollständige Bild. Aber Chromes <code>Cookies</code>-Datei mit <code>sqlite3</code> im Terminal zu öffnen bedeutet, Zeilen von Host-Keys, Cookie-Namen, Werten, Ablaufzeitstempeln (in Chromes Epochenformat — Mikrosekunden seit dem 1. Januar 1601) und verschlüsselten Werten als rohen Text zu lesen. Chrome verschlüsselt Cookie-Werte auf macOS, die Spalte <code>encrypted_value</code> enthält also binäre Blobs, die nicht direkt lesbar sind. Die Metadaten-Spalten — Host, Name, Pfad, Ablauf, Flags — sind dennoch lesbar und oft das, was du tatsächlich brauchst.</p>

<h2>Chrome-Cookies durchsuchen mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> öffnet Chromes Cookies-Datenbankdatei und zeigt die <code>cookies</code>-Tabelle in einem scrollbaren, sortierbaren Raster an. Schließe Chrome zuerst (es sperrt die Datei), dann öffne <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code> in Tome.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome zeigt die Chrome-Cookies-SQLite-Datenbank auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Über alle Domains hinweg suchen</h3>
<p>Nutze Tomes SQL-Editor, um Cookies nach Name, Host oder Muster zu finden. Eine Abfrage wie <code>SELECT host_key, name, path FROM cookies WHERE name LIKE '%_ga%';</code> zeigt jeden Google-Analytics-Cookie über alle besuchten Websites — etwas, das DevTools dir nicht in einer Ansicht zeigen kann.</p>

<h3>Cookie-Metadaten prüfen</h3>
<p>Durchsuche die Cookies-Tabelle, um zu sehen, welche Domains persistente Cookies setzen, welche Secure-Flags verwenden und welche SameSite-Attribute haben. Sortiere nach Ablaufdatum, um Cookies zu finden, die jahrelang bestehen bleiben. Diese Informationen liegen alle im Klartext vor, auch wenn die Werte verschlüsselt sind.</p>

<h3>Andere Chrome-Datenbanken inspizieren</h3>
<p>Chromes Profilverzeichnis enthält auch andere SQLite-Datenbanken: <code>History</code>, <code>Login Data</code>, <code>Web Data</code> und <code>Favicons</code>. Jede kann in Tome zur visuellen Inspektion geöffnet werden — nützlich, um zu verstehen, welche Daten Chrome lokal speichert.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "compare-sqlite-databases-mac": {
    slug: "compare-sqlite-databases-mac",
    title: "So vergleichst du SQLite-Datenbanken nebeneinander auf dem Mac",
    description:
      "Nach einer Migration, Schema-Änderung oder Datensynchronisation ist es mühsam zu überprüfen, ob zwei SQLite-Datenbanken übereinstimmen, wenn man sie nicht gleichzeitig anzeigen kann.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine Datenmigration durchgeführt und musst die Ergebnisse überprüfen. Oder du vergleichst eine Entwicklungsdatenbank mit einer Staging-Kopie. Oder ein Kollege hat dir seine Version einer gemeinsamen Datenbank geschickt und du musst die Unterschiede erkennen. In jedem Fall ist die Aufgabe dieselbe: zwei SQLite-Datenbanken betrachten und herausfinden, was sich geändert hat. Auf dem Mac machen die meisten Tools das überraschend schwierig, weil sie für eine einzelne Datenbankverbindung konzipiert sind.</p>

<h2>Warum Datenbanken vergleichen normalerweise mühsam ist</h2>
<p>Mit dem <code>sqlite3</code>-CLI bedeutet das Vergleichen zweier Datenbanken, zwei Terminalfenster zu öffnen, dieselbe Abfrage in jedem auszuführen und die Ausgabe visuell nach Unterschieden zu scannen. Für kleine Tabellen funktioniert das. Für Tabellen mit Hunderten von Zeilen und Dutzenden von Spalten ist es fehleranfällig und langsam. Es gibt keine Nebeneinander-Ansicht, keine Hervorhebung von Unterschieden — nur zwei Ströme von reinem Text.</p>
<p>Manche Entwickler nutzen <code>sqldiff</code>, ein Kommandozeilentool, das die SQL-Anweisungen ausgibt, die nötig sind, um eine Datenbank in die andere zu transformieren. Es ist leistungsstark für geskriptete Vergleiche, produziert aber rohe SQL-Ausgabe, keinen visuellen Diff. Zu verstehen, was sich tatsächlich geändert hat, erfordert das Lesen von INSERT-, UPDATE- und DELETE-Anweisungen statt der Daten selbst.</p>
<p>Die meisten GUI-Datenbank-Browser verschärfen das Problem, da sie nur eine Datenbank gleichzeitig unterstützen. Du öffnest Datenbank A, inspizierst sie, schließt sie, öffnest Datenbank B und versuchst dich zu erinnern, was du in Datenbank A gesehen hast. Manche Tools unterstützen mehrere Verbindungen, erfordern aber manuelles Setup für jede einzelne.</p>

<h2>Beide Datenbanken nebeneinander öffnen mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ist eine dokumentbasierte macOS-App, was bedeutet, dass jede Datenbank in einem eigenen Fenster mit einer eigenen vollständigen Oberfläche geöffnet wird. Öffne zwei Datenbanken und ordne sie nebeneinander an mit macOS Split View oder durch Ziehen von Fenstern — genau wie du zwei Textdateien vergleichen würdest.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome vergleicht zwei SQLite-Datenbanken nebeneinander auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Visueller Schema-Vergleich</h3>
<p>Mit beiden geöffneten Datenbanken überprüfe die Seitenleiste jedes Fensters. Hat die Quelle Tabellen, die das Ziel nicht hat? Sind Indizes in der einen vorhanden, aber in der anderen nicht? Ein visueller Scan beider Seitenleisten beantwortet diese Fragen sofort.</p>

<h3>Vergleich auf Zeilenebene</h3>
<p>Öffne dieselbe Tabelle in beiden Fenstern und scrolle durch die Daten. Sortiere beide nach derselben Spalte, um Zeilen auszurichten. Unterschiede in der Zeilenzahl oder bei Datenwerten werden sichtbar, wenn du beide Raster gleichzeitig sehen kannst.</p>

<h3>Beide unabhängig abfragen</h3>
<p>Jedes Fenster hat seinen eigenen SQL-Abfrage-Editor. Führe dieselbe Aggregationsabfrage in beiden aus — <code>SELECT COUNT(*) FROM users;</code> — und vergleiche die Ergebnisse nebeneinander. Schreibe komplexere Abfragen, um Summen, Durchschnitte oder das Vorhandensein bestimmter Datensätze in jeder Datenbank unabhängig zu überprüfen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "lightweight-database-browser-mac": {
    slug: "lightweight-database-browser-mac",
    title: "Leichtgewichtiger Datenbank-Browser für Mac — Ohne Electron, ohne Java",
    description:
      "Datenbank-Browser, die Chromium oder die JVM mitbringen, verbrauchen Hunderte Megabyte, bevor du überhaupt eine Datei geladen hast. Eine leichtgewichtige Alternative sollte nutzen, was macOS bereits bietet.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du installierst einen Datenbank-Browser und der Aktivitätsmonitor zeigt, dass er 350 MB RAM verbraucht — bevor du eine einzige Datei geöffnet hast. Die App braucht mehrere Sekunden zum Start. Das Scrollen durch eine Tabelle ruckelt. Die Oberfläche passt nicht zu deinen anderen Mac-Apps. Das sind die Kosten von Electron- und Java-basierten Datenbank-Tools: Sie bringen ihre eigene Rendering-Engine, ihr eigenes UI-Framework und ihren eigenen Speicher-Overhead mit, unabhängig davon, was du tatsächlich damit machst.</p>

<h2>Warum Datenbank-Browser unnötig schwergewichtig sind</h2>
<p>Electron-Apps liefern einen vollständigen Chromium-Browser aus, um ihre Oberfläche zu rendern. Für einen Datenbank-Browser — eine App, die hauptsächlich Datentabellen anzeigt — ist das, als würde man einen Dieselgenerator liefern, um eine Schreibtischlampe zu betreiben. DBeaver und ähnliche Tools laufen auf Java, was eine JVM-Startstrafe, Garbage-Collection-Pausen und einen Speicherverbrauch bedeutet, der über die Zeit wächst. Beide Ansätze priorisieren plattformübergreifende Kompatibilität über Effizienz.</p>
<p>Auf macOS ist dieser Overhead besonders frustrierend, weil das Betriebssystem bereits alles bietet, was ein Datenbank-Browser braucht: AppKit für native Tabellenansichten, Core Graphics für das Rendering und eingebaute Unterstützung für Dark Mode, Tabs und Fensterverwaltung. Ein Datenbank-Browser, der diese Frameworks direkt nutzt, kann einen Bruchteil der Größe haben und dramatisch schneller sein als einer, der seine eigene Plattform mitbringt.</p>

<h2>Tome: Ein Datenbank-Browser, der deine Ressourcen respektiert</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ist mit Swift und AppKit gebaut — kein Electron, kein Java, keine Web-Views. Es nutzt dieselben nativen Frameworks wie Finder und Vorschau, was in einer App resultiert, die sofort startet, im Speicher leichtgewichtig bleibt und sich anfühlt, als gehöre sie auf deinen Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — leichtgewichtiger nativer SQLite-Browser für Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Start in unter einer Sekunde</h3>
<p>Keine JVM-Initialisierung, kein Chromium-Start. Tome öffnet sich schneller als die meisten Electron-Apps brauchen, um ihren Splash-Screen anzuzeigen. Klicke auf das Dock-Symbol und deine Datenbank ist fast sofort bereit zum Durchsuchen.</p>

<h3>Minimaler Speicherbedarf</h3>
<p>Native AppKit-Tabellenansichten rendern Tausende von Zeilen mit einem Bruchteil des Speichers, den ein web-basiertes Raster verbrauchen würde. Halte Tome neben Xcode, VS Code und deinem Browser offen, ohne dass es um Ressourcen konkurriert.</p>

<h3>Voller Funktionsumfang, kleines Paket</h3>
<p>Leichtgewichtig zu sein bedeutet nicht, eingeschränkt zu sein. Tome bietet alles, was du für SQLite-Arbeit brauchst: Tabellen, Views, Indizes und Trigger durchsuchen; Daten direkt bearbeiten; Zeilen einfügen und löschen; Tabellen visuell erstellen; und SQL-Abfragen mit Syntaxhervorhebung und Autovervollständigung ausführen. Alles in einer App, die die Ressourcen deines Macs mit Respekt behandelt.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "export-sqlite-to-csv-mac": {
    slug: "export-sqlite-to-csv-mac",
    title: "So exportierst du SQLite zu CSV auf dem Mac",
    description:
      "Daten aus einer SQLite-Datenbank in eine Tabellenkalkulation zu bekommen bedeutet entweder, mit den Formatierungsoptionen des sqlite3-CLI zu kämpfen oder ein Skript zu schreiben. Ein visuelles Tool macht daraus eine Ein-Abfrage-Aufgabe.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du musst Daten aus einer SQLite-Datenbank in eine CSV-Datei bekommen — vielleicht um sie mit einem Kollegen zu teilen, der Excel nutzt, um sie in ein Datenvisualisierungstool zu importieren oder um Datensätze in einem portablen Format zu archivieren. Das <code>sqlite3</code>-CLI kann das, aber der Workflow ist umständlich: Modus auf CSV setzen mit <code>.mode csv</code>, Ausgabedatei setzen mit <code>.output filename.csv</code>, Abfrage ausführen, dann daran denken, die Ausgabe mit <code>.output stdout</code> zurückzusetzen. Vergiss einen Schritt und du bekommst entweder keine Datei oder dein Terminal verstummt, weil die Ausgabe noch umgeleitet ist.</p>

<h2>Der CLI-Export-Workflow ist fehleranfällig</h2>
<p>Der Export zu CSV mit <code>sqlite3</code> erfordert mehrere Punkt-Befehle in der richtigen Reihenfolge. Eine typische Sitzung sieht so aus:</p>
<pre><code>sqlite3 mydb.sqlite
.headers on
.mode csv
.output export.csv
SELECT * FROM products WHERE category = 'electronics';
.output stdout</code></pre>
<p>Vergiss <code>.headers on</code> und deine CSV hat keine Spaltenüberschriften. Vergiss <code>.output stdout</code> und dein nächstes Abfrageergebnis geht in die Datei statt auf den Bildschirm. Willst du eine zweite Tabelle exportieren? Wiederhole die ganze Sequenz mit einem anderen Dateinamen. Für einen einmaligen Export ist das erträglich. Für regelmäßige Exporte über mehrere Tabellen ist es mühsam und fehleranfällig.</p>
<p>Du könntest ein Python-Skript mit den Modulen <code>csv</code> und <code>sqlite3</code> schreiben, aber das ist Engineering-Aufwand für etwas, das eine einfache Datenextraktionsaufgabe sein sollte.</p>

<h2>Exportieren mit Tomes Abfrage-Editor</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> lässt dich jede SQL-Abfrage ausführen und die Ergebnisse in einem nativen Raster sehen. Von dort kannst du die Daten auswählen und kopieren, um sie direkt in eine Tabellenkalkulation einzufügen oder als CSV zu speichern. Schreibe deine Abfrage mit Autovervollständigung, führe sie aus und hole die Daten heraus — keine Punkt-Befehle, kein Moduswechsel.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome exportiert SQLite-Abfrageergebnisse auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Erst abfragen, dann exportieren was du brauchst</h3>
<p>Statt eine ganze Tabelle zu exportieren und in Excel zu filtern, schreibe eine gezielte Abfrage in Tome: Zeilen filtern, Tabellen verknüpfen, Werte aggregieren und Spalten mit SQL formatieren. Exportiere nur die Daten, die du tatsächlich brauchst, bereits in der Form, die du haben willst.</p>

<h3>Visuelle Überprüfung vor dem Export</h3>
<p>Sieh deine Abfrageergebnisse vor dem Export in einem scrollbaren Raster. Überprüfe, ob die Spalten korrekt sind, die Daten richtig aussehen und die Zeilenzahl den Erwartungen entspricht. Fehler vor dem Export zu finden erspart dir die Arbeit, eine fehlerhafte CSV in Excel nachzubearbeiten.</p>

<h3>Erst das vollständige Schema durchsuchen</h3>
<p>Nicht sicher, welche Tabelle die Daten hat, die du brauchst? Durchsuche Tabellen, Views und ihre Spalten in Tomes Seitenleiste. Klicke dich durch Beispieldaten, um das Schema zu verstehen, bevor du deine Export-Abfrage schreibst. Diese visuelle Erkundung ist viel schneller als <code>.schema</code>-Befehle im Terminal auszuführen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "sqlite-for-data-science-mac": {
    slug: "sqlite-for-data-science-mac",
    title: "SQLite-Browser für Data Science auf dem Mac",
    description:
      "Data Scientists, die mit lokalen Datensätzen in SQLite arbeiten, brauchen eine Möglichkeit, Schemas zu erkunden, Daten vorzuschauen und Abfragen zu testen, bevor sie Pipeline-Code schreiben — ohne einen vollständigen Datenbankserver hochzufahren.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast einen Datensatz als SQLite-Datei erhalten — ein Kaggle-Download, ein gescraptes Dataset, der Export eines Kollegen oder dein eigenes ETL-Ergebnis. Bevor du Python-Code schreibst, um ihn zu verarbeiten, musst du verstehen, was drin ist: Tabellennamen, Spaltentypen, Zeilenzahlen, Datenverteilungen und mögliche Qualitätsprobleme. Jupyter Notebooks können SQLite abfragen, aber die Verbindung aufzusetzen, exploratives SQL zu schreiben und Ergebnisse in Notebook-Zellen zu rendern ist Overhead, wenn du nur einen schnellen Blick auf die Daten werfen willst.</p>

<h2>Die Erkundungslücke in Data-Science-Workflows</h2>
<p>Data Scientists erkunden SQLite-Dateien typischerweise mit einem von drei Ansätzen: dem <code>sqlite3</code>-CLI (schnell, aber keine visuelle Ausgabe), einem Jupyter Notebook mit <code>pandas.read_sql()</code> (flexibel, aber erfordert Setup für jede Sitzung) oder einer schwergewichtigen Datenbank-IDE wie DBeaver (leistungsstark, aber Overkill für eine lokale Datei). Keiner davon trifft den Sweet Spot von „Datei öffnen und die Daten sofort durchsuchen".</p>
<p>Das CLI ist besonders schlecht für Datenerkundung, weil es keine visuelle Formatierung für breite Tabellen hat, keine scrollbare Ausgabe und keine Möglichkeit, Datenverteilungen schnell zu überblicken. Notebooks sind wertvoll für Analysen, aber langsam für die initiale Phase „Wie sehen diese Daten aus?". Am Ende schreibst du Boilerplate-Verbindungscode, bevor du eine einzige Zeile siehst.</p>

<h2>Datensätze visuell erkunden mit Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> lässt dich einen SQLite-Datensatz öffnen und seine Struktur sofort verstehen. Jede Tabelle erscheint in der Seitenleiste mit ihrer Zeilenzahl. Klicke auf eine Tabelle, um durch ihre Daten in einem nativen Raster zu scrollen. Kein Setup, keine Verbindungsstrings, kein Boilerplate — einfach die Datei öffnen und hinschauen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome durchsucht einen Data-Science-SQLite-Datensatz auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Schema verstehen, bevor du Code schreibst</h3>
<p>Durchsuche Tabellen, um Spaltennamen, Typen und Beispielwerte zu sehen. Identifiziere, welche Spalten Nullwerte enthalten, welche Tabellen über Foreign Keys zusammenhängen und wie der Datensatz strukturiert ist — alles, bevor du eine einzige Zeile Python schreibst. Dieser Kontext macht deinen Analysecode von Anfang an zielgerichteter.</p>

<h3>Abfragen interaktiv testen</h3>
<p>Nutze Tomes SQL-Editor mit Autovervollständigung, um Abfragen zu prototypisieren. Teste deine WHERE-Klauseln, JOIN-Bedingungen und Aggregationen zuerst in Tome, dann kopiere das funktionierende SQL in deine Python-Pipeline. Abfragefehler in einem visuellen Editor zu finden ist schneller als sie in einer Notebook-Zelle zu debuggen.</p>

<h3>ETL-Ausgabe inspizieren</h3>
<p>Nachdem deine Pipeline Ergebnisse in eine SQLite-Datenbank geschrieben hat, öffne sie in Tome, um die Ausgabe zu überprüfen. Prüfe Zeilenzahlen, entdecke Nullwerte und bestätige, dass Transformationen die erwarteten Ergebnisse produziert haben — alles, ohne zusätzlichen Verifikationscode schreiben zu müssen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },

  "postico-alternative-sqlite-mac": {
    slug: "postico-alternative-sqlite-mac",
    title: "Postico-Alternative für SQLite auf dem Mac",
    description:
      "Postico ist ein beliebter Mac-nativer Datenbank-Client — aber er unterstützt nur PostgreSQL. Wenn du mit SQLite-Dateien arbeitest, brauchst du dieselbe native Qualität für ein anderes Format.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Wenn du Postico für PostgreSQL auf dem Mac verwendet hast, weißt du, wie sich ein nativer Datenbank-Client anfühlen sollte: sofortiger Start, aufgeräumte Oberfläche, ordentliche macOS-Integration und gerade genug Funktionen, um produktiv zu sein, ohne Überladung. Es gilt weithin als eines der besten Datenbank-Tools auf der Plattform. Das einzige Problem ist, dass Postico kein SQLite unterstützt. Wenn deine Daten in .sqlite-Dateien statt auf einem PostgreSQL-Server liegen, musst du etwas anderes finden — und das „etwas anderes" ist normalerweise eine Electron- oder Java-App, die sich nicht im Entferntesten wie Postico anfühlt.</p>

<h2>Die Lücke zwischen Postico und SQLite-Tools</h2>
<p>Postico hat bewiesen, dass ein Datenbank-Client eine großartige Mac-App sein kann. Es verwendet native macOS-Steuerelemente, respektiert Systemkonventionen, startet schnell und hält sich im Hintergrund. Es hat einen Standard gesetzt, den die meisten SQLite-Browser nicht erreicht haben.</p>
<p>DB Browser for SQLite ist Qt-basiert — funktionsfähig, aber visuell von macOS abgekoppelt. TablePlus unterstützt SQLite, aber auch ein Dutzend anderer Datenbanken, was eine Komplexität mitbringt, die Postico bewusst vermeidet. DBeaver läuft auf Java mit dem gesamten Ressourcen-Overhead, den das mit sich bringt. Keines dieser Tools liefert das „für den Mac gebaut"-Erlebnis, das Postico-Nutzer erwarten.</p>
<p>Das Problem ist nicht, dass das schlechte Tools sind — das sind sie nicht. Aber sobald du einen wirklich nativen Mac-Datenbank-Client erlebt hast, fühlen sich plattformübergreifende Alternativen wie ein Kompromiss an. Du willst dieselbe Philosophie auf ein anderes Format angewandt sehen.</p>

<h2>Tome: Das Postico-Erlebnis für SQLite</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> bringt dieselbe native Mac-Qualität zu SQLite, die Postico zu PostgreSQL bringt. Gebaut mit Swift und AppKit, startet es sofort, folgt macOS-Designkonventionen und konzentriert sich darauf, eine Sache gut zu machen — SQLite-Datenbanken durchsuchen und bearbeiten.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome als SQLite-Browser in Postico-Qualität für Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dieselbe Philosophie, anderes Format</h3>
<p>Wie Postico ist Tome vollkommen fokussiert. Kein PostgreSQL, kein MySQL, kein MongoDB — nur SQLite. Jede Funktion ist für das Format konzipiert, mit dem du arbeitest. Die Oberfläche ist aufgeräumt, die App ist schnell und es gibt nichts Überflüssiges, das um deine Aufmerksamkeit konkurriert.</p>

<h3>Natives macOS-Erlebnis</h3>
<p>Dokumentbasierte Architektur mit richtiger Fenster- und Tab-Unterstützung. System-Dark-Mode. Drag-and-Drop aus dem Finder. Tastenkombinationen, die den macOS-Konventionen entsprechen. Tome verhält sich wie eine Mac-App, weil es eine ist — gebaut mit denselben Frameworks, die Apple für seine eigenen Anwendungen verwendet.</p>

<h3>Durchsuchen, Bearbeiten und Abfragen</h3>
<p>Durchsuche Tabellen, Views, Indizes und Trigger in der Seitenleiste. Bearbeite Zellen direkt. Füge Zeilen ein und lösche sie ohne SQL zu schreiben. Wenn du Abfragen brauchst, bietet der integrierte Editor Syntaxhervorhebung und Autovervollständigung für dein Schema. Es ist alles, was ein SQLite-Browser braucht — und nichts, was er nicht braucht.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome im Mac App Store laden</a></p>
`,
  },
};
