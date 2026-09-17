import type { ArticleSet } from "./index";

export const deArticles: ArticleSet = {
  "preview-zip-contents-mac-without-extracting": {
    slug: "preview-zip-contents-mac-without-extracting",
    title: "ZIP-Inhalte auf dem Mac ansehen, ohne sie zu entpacken",
    description: "Du hast eine ZIP-Datei heruntergeladen und willst wissen, was drin ist, bevor du sie entpackst. macOS zeigt es dir nicht – es entpackt einfach alles in einen neuen Ordner.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine ZIP-Datei von einem Kunden, einem Kollegen oder einem Filesharing-Dienst heruntergeladen. Bevor du sie auspackst, willst du wissen, was tatsächlich drin ist. Ist es die richtige Version? Sind die Assets enthalten, die du brauchst? Wie viele Dateien sind es überhaupt?</p>

<p>Auf macOS lautet die Antwort: doppelklicken und nachsehen. Es gibt keine eingebaute Möglichkeit, in eine ZIP-Datei hineinzuschauen, ohne sie vorher zu entpacken.</p>

<h2>Warum macOS dich zuerst entpacken lässt</h2>

<p>Wenn du eine ZIP-Datei im Finder auswählst und die Leertaste drückst, zeigt dir Quick Look den Dateinamen, die Größe und das Änderungsdatum des Archivs. Das war's. Keine Dateiliste, keine Ordnerstruktur, keine Möglichkeit zu erkennen, ob das Archiv ein PDF oder fünfhundert Rohfotos enthält.</p>

<p>Ein Doppelklick auf die ZIP-Datei entpackt alles in einen neuen Ordner neben der Originaldatei. Wenn das Archiv groß ist – sagen wir eine 2-GB-Designübergabe – hast du gerade auf eine vollständige Entpackung gewartet, nur um festzustellen, dass du die falsche Version heruntergeladen hast. Jetzt musst du den entpackten Ordner löschen und es erneut versuchen.</p>

<p>Für Entwickler und Designer, die täglich Dutzende Archive bearbeiten, summiert sich das schnell.</p>

<h2>ZIP-Inhalte sofort mit Quick Look ansehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> ist eine Quick-Look-Erweiterung, die dir den vollständigen Inhalt einer ZIP-Datei zeigt, sobald du im Finder die Leertaste drückst. Kein Entpacken, kein Warten, keine übrig gebliebenen Ordner zum Aufräumen.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Wähle eine ZIP-Datei im Finder aus, drücke die Leertaste, und du siehst sofort jede Datei und jeden Ordner darin – Namen, Größen und die komplette Verzeichnisstruktur. Vorschau schließen und weitermachen. Es wurde nichts entpackt. Es wurde nichts auf die Festplatte geschrieben.</p>

<h3>Kundenlieferungen prüfen</h3>
<p>Ein Kunde schickt dir eine ZIP-Datei mit Projekt-Assets. Bevor du 800 MB an Dateien entpackst, drückst du die Leertaste, um zu bestätigen, dass die richtigen Ordner und Dateitypen enthalten sind. Falsche Version? ZIP-Datei löschen und die richtige anfordern – kein Aufräumen nötig.</p>

<h3>Downloads sortieren</h3>
<p>Dein Downloads-Ordner enthält ein Dutzend ZIP-Dateien aus verschiedenen Quellen. Statt jede einzelne zu entpacken, um herauszufinden, was drin ist, siehst du dir mit der Leertaste eine nach der anderen an. Finde die Datei, die du brauchst, in Sekunden.</p>

<h3>Backups überprüfen</h3>
<p>Du hast letzten Monat einen Projektordner als ZIP archiviert. Bevor du das Original löschst, drückst du die Leertaste, um zu bestätigen, dass wirklich alles im Archiv gelandet ist. Der vollständige Dateibaum ist direkt sichtbar.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "quick-look-zip-files-mac": {
    slug: "quick-look-zip-files-mac",
    title: "Quick Look für ZIP-Dateien auf dem Mac",
    description: "Die Leertaste auf einer ZIP-Datei im Finder zeigt nur Namen und Größe – nichts über den Inhalt. Es gibt einen Weg, Quick Look für Archive tatsächlich nützlich zu machen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Quick Look ist eine der besten Funktionen von macOS. Datei im Finder auswählen, Leertaste drücken, und du bekommst eine sofortige Vorschau – Bilder, PDFs, Videos, Textdateien, sogar Tabellenkalkulationen. Das spart enorm viel Zeit, weil du Dateien prüfen kannst, ohne irgendeine Anwendung zu öffnen.</p>

<p>Aber Quick Look hat einen blinden Fleck: komprimierte Archive. Wähle eine ZIP-Datei aus und drücke die Leertaste, und du siehst nur ein generisches Symbol mit Dateiname und Größe. Keine Dateiliste. Keine Ordnerstruktur. Nichts Brauchbares.</p>

<h2>Was Quick Look bei ZIP-Dateien anzeigt</h2>

<p>Standardmäßig stellt macOS Quick Look ZIP-, RAR-, 7z- und TAR-Dateien als undurchsichtige Behälter dar. Du bekommst Metadaten – Dateiname, Dateigröße, Änderungsdatum – aber keinerlei Information über den Inhalt. Das ist, als würde man auf eine verschlossene Kiste schauen und nur erfahren, wie schwer sie ist.</p>

<p>Das überrascht, weil Quick Look von Haus aus Dutzende Dateitypen unterstützt, darunter komplexe Formate wie Keynote-Präsentationen und 3D-Modelle. Archive, obwohl sie zu den am häufigsten ausgetauschten Dateitypen überhaupt gehören, bekommen gar keine Vorschau.</p>

<p>Die einzige Möglichkeit, den Inhalt zu sehen, ist das Archiv zu entpacken. Bei ZIP-Dateien bedeutet das: doppelklicken und warten, bis macOS alles in einen neuen Ordner dekomprimiert hat.</p>

<h2>Quick Look für Archive nutzbar machen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> erweitert Quick Look so, dass Archive genauso behandelt werden wie jeder andere Dateityp – als etwas, das du dir tatsächlich in der Vorschau ansehen kannst. Einmal installiert, wird jede ZIP-, RAR-, 7z- und TAR-Datei mit der Leertaste vorschaufähig.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Der gleiche Workflow, den du schon kennst</h3>
<p>Es gibt nichts Neues zu lernen. Du drückst schon jetzt die Leertaste, um Dateien in der Vorschau anzusehen. Mit installiertem Loupe funktioniert dieselbe Geste jetzt auch für Archive. Wähle eine ZIP-Datei im Finder aus, drücke die Leertaste, und du siehst eine Baumansicht des gesamten Inhalts – Dateinamen, Größen und Ordnerhierarchie.</p>

<h3>Funktioniert in allen Finder-Ansichten</h3>
<p>Quick-Look-Vorschauen funktionieren in Listenansicht, Spaltenansicht, Symbolansicht und Galerieansicht. Loupes Archivvorschauen funktionieren in allen davon ebenfalls. Du kannst auch mit den Pfeiltasten durch mehrere Archive nacheinander blättern und jedes einzelne in der Vorschau ansehen, ohne etwas zu entpacken.</p>

<h3>Ordnervorschau inklusive</h3>
<p>Loupe kümmert sich nicht nur um Archive. Es erweitert Quick Look auch um die Vorschau von Ordnerinhalten – Ordner auswählen, Leertaste drücken, und den Dateibaum sehen, ohne ihn zu öffnen. Zwei blinde Flecken von Quick Look, mit einer Erweiterung behoben.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "preview-folder-contents-mac-finder": {
    slug: "preview-folder-contents-mac-finder",
    title: "Ordnerinhalte im Mac Finder in der Vorschau ansehen",
    description: "Du willst sehen, was in einem Ordner steckt, ohne ihn zu öffnen – die Dateianzahl, die Struktur, die Namen. Der Finder zeigt davon in Quick Look nichts.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du bist im Finder und schaust dir eine Liste von Projektordnern an. Du weißt, dass einer davon die finalen Lieferungen enthält, kannst dich aber nicht erinnern welcher. Also doppelklickst du den ersten, überfliegst den Inhalt, gehst zurück, probierst den nächsten, überfliegst wieder. Und das so lange, bis du ihn gefunden hast.</p>

<p>Bei jeder einzelnen Datei – einem Bild, einem PDF, einem Video – würdest du die Leertaste drücken, um sie sofort in der Vorschau zu sehen. Aber bei einem Ordner zeigt Quick Look nichts Brauchbares. Nur das Ordnersymbol und den Namen.</p>

<h2>Die Ordner-Beschränkung von Quick Look</h2>

<p>Wenn du im Finder einen Ordner auswählst und die Leertaste drückst, zeigt macOS den Ordnernamen, die Anzahl der Elemente und das Änderungsdatum. Es zeigt nicht, was drin ist. Keine Dateinamen, keine Unterordnerstruktur, keine Dateitypen. Du schaust auf eine verschlossene Kiste.</p>

<p>Das bedeutet, dass du jedes Mal, wenn du den Inhalt eines Ordners prüfen willst, ihn öffnen musst. Bei tief verschachtelten Projektstrukturen – wo die gesuchte Datei drei Ebenen tiefer liegt – bedeutet das, sich durch mehrere Verzeichnisse zu klicken, die Übersicht in der übergeordneten Ansicht zu verlieren und wieder zurückzunavigieren.</p>

<p>Die Spaltenansicht hilft etwas, erfordert aber trotzdem, sich Ebene für Ebene in jeden Ordner zu klicken. Es gibt keine Möglichkeit, den gesamten Baum auf einen Blick zu sehen.</p>

<h2>Ordnerbäume mit Quick Look in der Vorschau ansehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> fügt Quick Look eine Ordnervorschau hinzu. Wähle einen beliebigen Ordner im Finder aus, drücke die Leertaste, und sieh dir den gesamten Inhalt als Baum an – jede Datei und jeder Unterordner, mit Namen und Größen, ohne irgendetwas zu öffnen.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Projektordner vergleichen</h3>
<p>Du hast drei Versionen einer Designübergabe – v1, v2 und v3-final. Wähle jeden Ordner aus und drücke die Leertaste, um zu sehen, was sich zwischen den Versionen geändert hat. Kein Öffnen und visueller Vergleich jedes einzelnen Ordners nötig. Die Baumansicht zeigt dir die Struktur auf einen Blick.</p>

<h3>Das richtige Verzeichnis finden</h3>
<p>Ein Projektstammordner hat Dutzende Unterordner – Assets, Exporte, Entwürfe, Finals, Referenzen. Statt in jeden einzelnen zu klicken, um zu sehen, was drin ist, nutzt du die Pfeiltasten, um dich durch die Liste zu bewegen, während Quick Look geöffnet ist. Der Baum jedes Ordners erscheint sofort, während du navigierst.</p>

<h3>Ordnerorganisation überprüfen</h3>
<p>Bevor du einen Projektordner archivierst oder teilst, drückst du die Leertaste, um zu überprüfen, dass alles am richtigen Platz ist. Bestätige, dass Assets im Assets-Ordner liegen, Exporte im Exporte-Ordner, und nichts Wichtiges im falschen Verzeichnis gelandet ist.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "see-inside-rar-7z-mac": {
    slug: "see-inside-rar-7z-mac",
    title: "So siehst du auf dem Mac in RAR- und 7z-Dateien hinein",
    description: "macOS kann RAR- oder 7z-Dateien ohne Tools von Drittanbietern gar nicht erst öffnen. Wenn du nur prüfen willst, was drin ist, bevor du dich für einen Download oder eine Entpackung entscheidest, gibt es einen schnelleren Weg.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jemand schickt dir eine .rar-Datei. Oder du lädst ein Asset-Paket herunter, das als .7z komprimiert ist. Du doppelklickst es auf deinem Mac, und nichts passiert – oder macOS sagt dir, es gebe keine Anwendung, um es zu öffnen. Anders als bei ZIP-Dateien hat macOS keine eingebaute Unterstützung für RAR- oder 7z-Archive.</p>

<p>Also installierst du ein Entpackungs-Tool, entpackst das gesamte Archiv, stellst fest, dass es nicht die gesuchte Datei ist, und löschst alles wieder. Bei großen Archiven kostet das erheblich Zeit und Speicherplatz.</p>

<h2>Das RAR- und 7z-Problem auf macOS</h2>

<p>macOS unterstützt nativ ZIP und ein paar TAR-Varianten, aber RAR und 7z werden überhaupt nicht unterstützt. Du kannst sie nicht entpacken, du kannst sie nicht in der Vorschau ansehen, und Quick Look zeigt nichts außer einem leeren Symbol. Das ist frustrierend, weil RAR und 7z extrem verbreitet sind:</p>

<ul>
<li><strong>RAR</strong> wird nach wie vor häufig für große Dateiverteilungen, Spiel-Mods und Filesharing-Communities genutzt</li>
<li><strong>7z</strong> bietet bessere Komprimierungsraten als ZIP und ist bei Software-Distributionen und Asset-Paketen beliebt</li>
</ul>

<p>Die meisten Mac-Nutzer installieren ein Tool wie The Unarchiver oder Keka, um diese Formate zu entpacken. Aber Entpacken ist alles-oder-nichts – man kann nicht vorher hineinschauen. Wenn du nur wissen willst, welche Dateien in einem 4-GB-RAR-Archiv stecken, bevor du es entpackst, hast du Pech.</p>

<h2>RAR- und 7z-Inhalte ansehen, ohne zu entpacken</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> bringt Quick-Look-Unterstützung für RAR- und 7z-Dateien auf den Mac. Wähle eine beliebige .rar- oder .7z-Datei im Finder aus, drücke die Leertaste, und sieh dir die vollständige Dateiliste an – Namen, Größen und Ordnerstruktur – ohne ein einziges Byte zu entpacken.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Asset-Pakete prüfen</h3>
<p>Du hast eine 7z-Datei mit einer Schriftfamilie oder einem Icon-Set heruntergeladen. Bevor du 500 Dateien entpackst, drückst du die Leertaste, um zu bestätigen, dass das Paket die benötigten Schriftschnitte oder Größen enthält. Falsches Paket? Weitermachen, ohne Zeit zu verschwenden.</p>

<h3>Mehrteilige RAR-Archive prüfen</h3>
<p>RAR-Archive werden manchmal in mehrere Teile aufgeteilt. Schau dir mit Quick Look die Haupt-.rar-Datei an, um die vollständige Dateiliste zu sehen und zu bestätigen, dass das Archiv das enthält, was du erwartest, bevor du dich auf eine langwierige Entpackung einlässt.</p>

<h3>Downloads sichten</h3>
<p>Dein Downloads-Ordner enthält eine Mischung aus ZIP-, RAR- und 7z-Dateien aus verschiedenen Quellen. Loupe verarbeitet alle mit derselben Leertaste-Geste, sodass du jedes Archivformat in der Vorschau ansehen kannst, ohne das Werkzeug oder den Workflow zu wechseln.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "mac-quick-look-extensions-archives": {
    slug: "mac-quick-look-extensions-archives",
    title: "Die besten Quick-Look-Erweiterungen für Archive auf dem Mac",
    description: "Quick Look zeigt Bilder, PDFs und Videos in der Vorschau – aber keine Archive. So schließt du diese Lücke mit einer Erweiterung, die zeigt, was in ZIP-, RAR- und 7z-Dateien steckt.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Quick Look ist eine der am meisten unterschätzten Produktivitätsfunktionen von macOS. Leertaste auf einer Datei im Finder drücken, und du bekommst eine sofortige Vorschau – kein App-Start, kein Import-Dialog, kein Warten. Es funktioniert hervorragend für Bilder, PDFs, Videos, Markdown und Dutzende andere Dateitypen.</p>

<p>Aber es gibt eine Kategorie von Dateien, die Quick Look komplett ignoriert: komprimierte Archive. ZIP, RAR, 7z, TAR – drücke die Leertaste bei einem davon, und du bekommst eine leere Vorschau mit nur dem Dateinamen. Kein Inhalt, keine Struktur, nichts Verwertbares.</p>

<h2>Was Quick Look fehlt</h2>

<p>macOS liefert Quick-Look-Generatoren für eine breite Palette von Dateitypen mit, aber Archive gehören nicht dazu. Das bedeutet:</p>

<ul>
<li><strong>ZIP-Dateien</strong> – zeigen nur Dateiname und Größe, obwohl macOS sie nativ entpacken kann</li>
<li><strong>RAR-Dateien</strong> – zeigen ein leeres Symbol, da macOS RAR überhaupt nicht unterstützt</li>
<li><strong>7z-Dateien</strong> – die gleiche Behandlung mit leerem Symbol</li>
<li><strong>TAR / .tar.gz / .tar.bz2</strong> – nur Metadaten, keine Dateiliste</li>
</ul>

<p>Apple hat Quick Look nie um eine Archivvorschau erweitert, obwohl das eine der meistgewünschten Funktionen ist. Quick-Look-Erweiterungen – Plugins von Drittanbietern, die erweitern, was Quick Look in der Vorschau anzeigen kann – sind die einzige Lösung.</p>

<h2>Loupe: Archiv- und Ordnervorschau für Quick Look</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> ist eine Quick-Look-Erweiterung, die speziell für diese Lücke entwickelt wurde. Sie fügt in einem schlanken Paket Vorschauunterstützung für alle wichtigen Archivformate und Ordner hinzu.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Unterstützte Formate</h3>
<p>Loupe zeigt ZIP-, RAR-, 7z-, TAR-, .tar.gz- und .tar.bz2-Dateien in der Vorschau an. Es fügt außerdem Ordner-Inhaltsvorschauen hinzu, die Quick Look standardmäßig nicht bietet. Wähle eines dieser Formate im Finder aus, drücke die Leertaste, und du siehst eine vollständige Baumansicht des Inhalts.</p>

<h3>Native Quick-Look-Integration</h3>
<p>Loupe ist keine eigenständige App, zu der du wechseln musst. Es ist eine Quick-Look-Erweiterung, die sich direkt in den Finder einklinkt. Dein bestehender Workflow – Datei auswählen, Leertaste drücken – bleibt exakt gleich. Die Vorschau zeigt jetzt nur brauchbare Informationen an.</p>

<h3>Schlank und fokussiert</h3>
<p>Manche Archiv-Tools versuchen, alles zu können: Entpacken, Komprimieren, Verschlüsseln, Formatkonvertierung. Loupe macht eine Sache – es zeigt dir, was in einem Archiv oder Ordner steckt, ohne etwas zu entpacken oder zu öffnen. Es bleibt dir dabei nicht im Weg.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "open-tar-gz-mac-without-terminal": {
    slug: "open-tar-gz-mac-without-terminal",
    title: "TAR.GZ-Dateien auf dem Mac ohne Terminal öffnen",
    description: "Du hast eine .tar.gz-Datei bekommen und macOS weiß nichts damit anzufangen. Der übliche Rat lautet Terminal — dabei lässt sich der Inhalt auch visuell prüfen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Ein Entwickler schickt dir eine .tar.gz-Datei. Oder du lädst ein Open-Source-Tool herunter, das als Tarball verteilt wird. Du doppelklickst darauf, und macOS erzeugt entweder eine .tar-Datei (und entfernt damit nur eine Komprimierungsebene) oder reagiert gar nicht. Du suchst nach einer Lösung — und jedes Ergebnis sagt dir, du sollst das Terminal öffnen und \\\`tar -tzf dateiname.tar.gz\\\` eintippen.</p>

<p>Wenn du dich mit dem Terminal nicht wohlfühlst, ist hier Schluss. Und selbst wenn du es beherrschst: extra auf ein Kommandozeilen-Tool zu wechseln, nur um kurz in ein Archiv zu schauen, reißt dich aus deinem Finder-Workflow.</p>

<h2>Das .tar.gz-Problem unter macOS</h2>

<p>TAR-Dateien (Tape Archives) sind ein Unix-Klassiker, und .tar.gz (mit gzip komprimiertes TAR) ist das gängigste Format für Open-Source-Software, Code-Pakete und Server-Backups. macOS unterstützt das nur teilweise: Das Archivierungsprogramm kann .tar.gz-Dateien manchmal entpacken, aber das Verhalten ist unzuverlässig.</p>

<p>Viel wichtiger: Es gibt keine Möglichkeit, den Inhalt einer .tar.gz-Datei vor dem Entpacken anzusehen. Die Übersicht zeigt nichts Brauchbares — nur Dateiname und Größe. Der einzige verlässliche Weg, den Inhalt aufzulisten, ist der Terminal-Befehl \\\`tar -tzf\\\`, der eine Textwand ohne jede visuelle Struktur ausgibt.</p>

<p>Dasselbe gilt für .tar.bz2-Dateien, die statt gzip die bzip2-Komprimierung nutzen. Beide sind verbreitet, und beide bleiben unter macOS ohne Terminal undurchsichtig.</p>

<h2>.tar.gz-Inhalte visuell ansehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> bringt Übersicht-Unterstützung für .tar.gz- und .tar.bz2-Dateien. Wähle das Archiv im Finder aus, drücke die Leertaste und sieh eine übersichtliche Baumansicht aller Dateien und Ordner darin — ganz ohne Terminal.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Code-Pakete prüfen</h3>
<p>Ein Entwickler schickt dir eine .tar.gz mit einem Projekt. Drücke die Leertaste, um die Verzeichnisstruktur zu sehen — Quelldateien, Konfigurationsdateien, README — bevor du entscheidest, ob du sie in deinen Projektordner entpackst.</p>

<h3>Server-Backups kontrollieren</h3>
<p>Datenbank-Dumps und Server-Backups werden oft als .tar.gz-Dateien verteilt. Statt ein mehrere Gigabyte großes Archiv nur zur Kontrolle zu entpacken, siehst du dir die Dateiliste einfach in der Übersicht an. So prüfst du, ob das Backup wirklich die Verzeichnisse und Dateien enthält, die du erwartest.</p>

<h3>Im Finder bleiben</h3>
<p>Der ganze Sinn der Übersicht ist, dass du den Finder nie verlässt. Mit Loupe werden .tar.gz-Dateien genauso behandelt wie Bilder, PDFs und Videos — auswählen, Leertaste, ansehen, weiterarbeiten. Kein Terminal-Fenster, kein Entpacken, kein Aufräumen.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store laden</a></p>`,
  },
  "check-zip-contents-before-downloading-mac": {
    slug: "check-zip-contents-before-downloading-mac",
    title: "ZIP-Inhalt vor dem Entpacken auf dem Mac prüfen",
    description: "Du hast eine ZIP-Datei und willst ihren Inhalt überprüfen, bevor du sie auspackst. macOS bietet keine Möglichkeit, ein Archiv zu inspizieren, ohne es vorher vollständig zu entpacken.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine ZIP-Datei erhalten – vielleicht von einem Kunden, vielleicht von einem Filetransfer-Dienst, vielleicht von deinem eigenen Backup-Laufwerk. Bevor du sie entpackst, willst du eine einfache Frage beantworten: Ist das die richtige Datei? Enthält sie das, was du erwartest?</p>

<p>Auf macOS kannst du diese Frage nicht beantworten, ohne erst zu entpacken. Es gibt keine "Inhalt anzeigen"-Option, kein Vorschaufenster, keine Möglichkeit, hineinzuschauen. Deine einzige Wahl ist, alles zu entpacken und dann nachzusehen.</p>

<h2>Warum die Prüfung vor dem Entpacken wichtig ist</h2>

<p>Ein Archiv zu entpacken ist eine Verpflichtung. Bei einer großen ZIP-Datei kostet es Zeit, belegt Speicherplatz und erzeugt einen Ordner voller Dateien, die du vielleicht gar nicht willst. Wenn sich das Archiv als falsche Version, Duplikat oder beschädigt herausstellt, hast du Zeit verschwendet und musst jetzt aufräumen.</p>

<p>Häufige Situationen, in denen du vorher prüfen musst:</p>

<ul>
<li><strong>Versionsverwirrung</strong> – ein Kunde hat drei ZIP-Dateien geschickt, beschriftet als "final", "final-v2" und "final-FINAL". Du musst die richtige finden, ohne alle drei zu entpacken.</li>
<li><strong>Große Archive</strong> – eine 5-GB-Designübergabe. Das Entpacken dauert Minuten und verdoppelt vorübergehend deinen Speicherverbrauch. Du willst vorher bestätigen, dass es die richtige Lieferung ist.</li>
<li><strong>Sicherheitsbewusstsein</strong> – du willst die Dateitypen im Archiv sehen, bevor du entpackst. Eine unerwartete .exe oder .app in einer ZIP-Datei, die eigentlich PDFs enthalten sollte, ist gut zu wissen, bevor du sie entpackst.</li>
</ul>

<h2>ZIP-Inhalte mit Quick Look inspizieren</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> lässt dich den Inhalt jeder ZIP-Datei prüfen, indem du im Finder die Leertaste drückst. Der vollständige Dateibaum erscheint sofort – jeder Dateiname, jede Größe, jeder Ordner – ohne dass irgendetwas entpackt wird.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Die richtige Version finden</h3>
<p>Drei ZIP-Dateien, alle mit irgendeiner Version von "final" beschriftet. Wähle jede aus, drücke die Leertaste, und vergleiche die Dateilisten. Die mit den aktuellsten Exporten oder der erwarteten Dateianzahl ist die richtige – in Sekunden identifiziert, ohne eine einzige davon zu entpacken.</p>

<h3>Geteilte Dateien vorab prüfen</h3>
<p>Jemand hat dir eine ZIP-Datei per AirDrop oder einem Cloud-Dienst geschickt. Bevor du sie in deinen Dokumente-Ordner entpackst, drückst du die Leertaste, um nachzusehen, was drin ist. Ist es nicht das Erwartete, kannst du die ZIP-Datei sofort löschen – keine entpackten Dateien, die du suchen und entfernen musst.</p>

<h3>Archivierte Projekte durchsehen</h3>
<p>Du hast vor Monaten ein Projekt gezippt und brauchst jetzt etwas daraus. Statt das gesamte Archiv zu entpacken, um eine Datei zu finden, siehst du dir den Inhalt mit Quick Look an. Sieh den vollständigen Baum, bestätige, dass die Datei da ist, und entpacke erst dann, wenn du sie wirklich brauchst.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "finder-space-bar-preview-archives-mac": {
    slug: "finder-space-bar-preview-archives-mac",
    title: "Finder-Leertasten-Vorschau für Archive auf dem Mac",
    description: "Die Leertaste im Finder zeigt fast alles in der Vorschau – außer komprimierte Dateien. ZIP-, RAR- und 7z-Archive zeigen beim Drücken der Leertaste nichts außer einem Dateinamen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Wenn du einen Mac benutzt, hast du heute wahrscheinlich schon Hunderte Mal die Leertaste gedrückt. Foto auswählen – Leertaste – sofortige Vorschau. PDF auswählen – Leertaste – vollständiges Dokument. Video auswählen – Leertaste – es startet die Wiedergabe. Die Leertasten-Vorschau des Finders (Quick Look) ist eine dieser Funktionen, die innerhalb weniger Tage zum Reflex wird.</p>

<p>Dann wählst du eine ZIP-Datei aus und drückst die Leertaste. Du bekommst Name und Größe der Datei. Das war's. Die natürlichste, intuitivste Vorschaugeste auf macOS versagt komplett bei einem der häufigsten Dateitypen, denen du begegnest.</p>

<h2>Die Lücke bei der Leertasten-Vorschau</h2>

<p>Quick Look wurde mit Mac OS X Leopard eingeführt und mit jeder macOS-Version seitdem erweitert. Apple hat Unterstützung für immer komplexere Dateitypen hinzugefügt – 3D-Modelle, Augmented-Reality-Dateien, Swift Playgrounds. Aber komprimierte Archive wurden nie einbezogen.</p>

<p>Die Inkonsistenz ist auffällig. Du kannst die Leertaste bei einer .pages-Datei drücken und ein vollständig gerendertes Dokument sehen. Du kannst die Leertaste bei einer .mov-Datei drücken und ein Video ansehen. Aber drückst du die Leertaste bei einer .zip-Datei, siehst du weniger Informationen, als dir die Listenansicht des Finders ohnehin schon zeigt.</p>

<p>Das bedeutet, dass du bei Archiven den kompletten Quick-Look-Workflow verlierst. Statt eine Vorschau anzusehen, bist du gezwungen zu entpacken – eine langsamere, unordentlichere Aktion, die Dateien auf der Festplatte erzeugt.</p>

<h2>Leertasten-Vorschau auch für Archive</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> schließt diese Lücke. Einmal installiert, zeigt das Drücken der Leertaste bei jeder Archivdatei – ZIP, RAR, 7z, TAR, .tar.gz, .tar.bz2 – den vollständigen Inhalt als Baumansicht, direkt im Quick-Look-Fenster.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dein Workflow bleibt gleich</h3>
<p>Loupe führt keine neue App oder neue Geste ein. Du machst weiterhin genau das, was du immer gemacht hast – Datei auswählen, Leertaste drücken. Der Unterschied ist, dass Archive jetzt brauchbare Informationen zeigen statt einer leeren Vorschau.</p>

<h3>Navigation mit Pfeiltasten funktioniert</h3>
<p>Eine der besten Funktionen von Quick Look ist, dass du mit den Pfeiltasten durch Dateien blättern kannst, während die Vorschau geöffnet ist. Mit Loupe funktioniert das auch für Archive. Navigiere durch einen Ordner mit gemischten Dateien – Bilder, PDFs, ZIPs, RARs – und jede wird in der Vorschau angezeigt, während du dich mit den Pfeiltasten durcharbeitest.</p>

<h3>Auch Ordner bekommen eine Vorschau</h3>
<p>Loupe erweitert außerdem die Leertasten-Vorschau auf Ordner. Ordner auswählen, Leertaste drücken, und den vollständigen Dateibaum darin sehen. Zwei der größten Vorschau-Blindstellen des Finders – Archive und Ordner – mit einer Erweiterung behoben.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "betterzip-alternative-mac": {
    slug: "betterzip-alternative-mac",
    title: "BetterZip-Quick-Look-Alternative für den Mac",
    description: "Der Quick-Look-Generator von BetterZip zeigte früher den Archivinhalt im Finder in der Vorschau. Wenn du nach einem fokussierten, modernen Ersatz suchst, gibt es hier eine schlanke Option.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jahrelang war BetterZip die erste Anlaufstelle, um Archivinhalte auf dem Mac in der Vorschau anzusehen. Sein Quick-Look-Generator ließ dich im Finder bei einer ZIP-Datei die Leertaste drücken und die Dateiliste sehen, ohne zu entpacken. Es war ein Muss-Tool für Power-User.</p>

<p>Aber BetterZip ist ein vollwertiger Archivmanager – Komprimierung, Entpacken, Verschlüsselung, Aufteilung und mehr. Wenn du nur die Quick-Look-Vorschau willst, installierst du eine komplexe Anwendung für ein einziges Feature. Und mit der Weiterentwicklung von macOS finden manche Nutzer, dass BetterZips Quick-Look-Plugin auf neueren Systemversionen weniger zuverlässig läuft.</p>

<h2>Was BetterZips Quick-Look-Plugin großartig machte</h2>

<p>Der Reiz war einfach: Leertaste bei einem Archiv im Finder drücken und den Inhalt sehen. Kein Entpacken, kein App-Start, keine zusätzlichen Schritte. Es machte Quick Look von nutzlos (bei Archiven) zu unverzichtbar. Das Plugin zeigte Dateinamen, Größen und Ordnerstruktur – genau das, was du brauchst, um zu entscheiden, ob du entpacken willst.</p>

<p>Das Problem ist, dass BetterZip dieses Feature in eine viel größere Anwendung packt. Die App selbst umfasst:</p>

<ul>
<li>Archiverstellung mit Passwortschutz</li>
<li>Mehrformat-Entpacken (ZIP, RAR, 7z, TAR und mehr)</li>
<li>Archivaufteilung und -zusammenführung</li>
<li>Finder-Integration für Komprimierungs-Workflows</li>
</ul>

<p>Wenn du das alles nutzt, ist BetterZip hervorragend. Wenn du nur die Quick-Look-Vorschau willst – der häufigste Anwendungsfall – ist es mehr, als du brauchst.</p>

<h2>Eine fokussierte Quick-Look-Erweiterung für Archive</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> macht genau das, wofür die meisten Leute BetterZip installiert haben: Es zeigt den Archivinhalt, wenn du im Finder die Leertaste drückst. ZIP, RAR, 7z, TAR, .tar.gz, .tar.bz2 – alles unterstützt. Dazu Ordnervorschauen, die BetterZip nicht bot.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Leichterer Fußabdruck</h3>
<p>Loupe ist eine Quick-Look-Erweiterung, kein vollständiger Archivmanager. Es entpackt, komprimiert oder verändert keine Archive. Es zeigt sie in der Vorschau an. Wenn du Entpacken brauchst, kann macOS ZIP nativ verarbeiten, und Tools wie The Unarchiver übernehmen den Rest. Loupe schließt die Vorschau-Lücke, ohne Funktionen zu duplizieren, die du bereits hast.</p>

<h3>Für modernes macOS gebaut</h3>
<p>Loupe nutzt Apples aktuelle Quick-Look-Erweiterungs-API, entwickelt für die neuesten macOS-Versionen. Es integriert sich sauber in den Finder und benötigt keine Workarounds oder veraltete Plugin-Architekturen.</p>

<h3>Ordnervorschauen als Bonus</h3>
<p>Über Archive hinaus lässt dich Loupe auch bei jedem Ordner die Leertaste drücken, um seinen Inhalt als Baumansicht zu sehen. Das ist ein Feature, das sich natürlich mit Archivvorschauen ergänzt – beide lassen dich in Behälter hineinschauen, ohne sie zu öffnen.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "browse-folder-tree-quick-look-mac": {
    slug: "browse-folder-tree-quick-look-mac",
    title: "Ordnerbäume mit Quick Look auf dem Mac durchsuchen",
    description: "Du willst einen schnellen Überblick über die Struktur eines Ordners – Unterordner, Dateinamen, Verschachtelungstiefe – ohne in jede Ebene zu klicken. Standardmäßig kann Quick Look das nicht.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du schaust dir im Finder einen Projektordner an. Darin befinden sich Unterordner für Assets, Quellcode, Exporte, Dokumentation und Konfiguration. Darin wiederum weitere Unterordner. Du brauchst einen schnellen Überblick über die gesamte Struktur – was wo liegt, wie tief es geht, ob bestimmte Dateien existieren – aber der Finder zeigt dir immer nur eine Ebene auf einmal.</p>

<p>Die Spaltenansicht bringt dich ein Stück weiter, ist aber schmal, scrollt horizontal und erfordert trotzdem, dass du manuell in jeden Unterordner klickst. Es gibt keine Möglichkeit, den gesamten Baum auf einen Blick zu sehen.</p>

<h2>Die Grenzen der Ordnernavigation im Finder</h2>

<p>Der Finder ist dafür gebaut, in Ordner hineinzunavigieren, nicht sie von oben zu überblicken. Jeder Ansichtsmodus hat Einschränkungen, wenn du versuchst, die vollständige Struktur eines Ordners zu verstehen:</p>

<ul>
<li><strong>Listenansicht</strong> – du kannst Einblendedreiecke aufklappen, aber das ist bei tiefen Hierarchien mühsam, und man verliert leicht die Übersicht</li>
<li><strong>Spaltenansicht</strong> – zeigt eine Ebene pro Spalte, aber tiefe Strukturen scrollen aus dem Bild, und die Spalten sind schmal</li>
<li><strong>Symbolansicht</strong> – zeigt nur die oberste Ebene, überhaupt keine Strukturinformation</li>
<li><strong>Galerieansicht</strong> – für visuelle Dateien gedacht, nicht für Ordnerstrukturen</li>
</ul>

<p>Und Quick Look – das alles andere in der Vorschau zeigt – zeigt bei Ordnern nichts. Ordner auswählen, Leertaste drücken, und du siehst Name, Elementanzahl und Größe. Keine Dateinamen, keine Struktur, kein Baum.</p>

<h2>Vollständige Ordnerbäume mit einem Tastendruck sehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> erweitert Quick Look um eine Baumansicht für Ordnerinhalte. Wähle einen beliebigen Ordner im Finder aus, drücke die Leertaste, und die vollständige Hierarchie erscheint – jede Datei, jeder Unterordner, jede Verschachtelungsebene – in einem übersichtlichen, lesbaren Baum.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Projektstrukturen überblicken</h3>
<p>Bevor du in ein Projekt eintauchst, das du seit Monaten nicht angefasst hast, drückst du am Stammordner die Leertaste, um dein Gedächtnis aufzufrischen. Sieh das gesamte Layout – wo die Quelldateien sind, wo die Assets liegen, wie die Exporte organisiert sind – ohne einen einzigen Unterordner zu öffnen.</p>

<h3>Verzeichnis-Layouts vergleichen</h3>
<p>Du hast zwei Versionen eines Projektordners. Wähle die erste aus, drücke die Leertaste, merk dir die Struktur. Pfeiltaste zur nächsten, wieder Leertaste. Vergleiche die beiden Bäume gedanklich – oder mach Screenshots von jedem für einen visuellen Vergleich. Schneller, als beide in getrennten Finder-Fenstern zu öffnen und sich durch jede Ebene zu klicken.</p>

<h3>Dateiorganisation überprüfen</h3>
<p>Bevor du einen Ordner mit einem Mitarbeiter teilst oder ihn archivierst, drückst du die Leertaste, um zu überprüfen, dass alles an seinem Platz ist. Bestätige, dass keine Dateien im Stammverzeichnis liegen, die eigentlich in einen Unterordner gehören, und dass kein Unterordner leer ist. Eine schnelle strukturelle Prüfung in Sekunden.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "mac-quick-look-plugins-best": {
    slug: "mac-quick-look-plugins-best",
    title: "Die besten Quick-Look-Plugins für den Mac",
    description: "Quick Look verarbeitet Bilder, PDFs und Textdateien von Haus aus – aber komprimierte Archive und Ordnerstrukturen ignoriert es. Plugins können diese Lücke schließen.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Quick Look ist eine der produktivsten in macOS eingebauten Funktionen. Wähle eine beliebige Datei im Finder aus, drücke die Leertaste, und du bekommst eine sofortige Vorschau, ohne eine Anwendung zu starten. Es funktioniert hervorragend für Bilder, PDFs, Videos, Markdown-Dateien und sogar komplexe Formate wie Keynote-Präsentationen. Aber es gibt auffällige Lücken – Dateitypen, bei denen die Leertaste dir nichts Brauchbares zeigt.</p>

<p>Die größte Lücke sind komprimierte Archive. ZIP, RAR, 7z, TAR und .tar.gz-Dateien zeigen alle dieselbe nutzlose Vorschau: einen Dateinamen und eine Dateigröße. Keine Liste des Inhalts, keine Ordnerstruktur, keine Möglichkeit zu entscheiden, ob man entpacken sollte, ohne tatsächlich zu entpacken. Ordner haben ein ähnliches Problem – die Leertaste bei einem Ordner zeigt Name und Elementanzahl, aber nichts über die enthaltenen Dateien.</p>

<h2>Warum Quick-Look-Plugins wichtig sind</h2>

<p>Apple hat Quick Look mit einem Erweiterungssystem entworfen, damit Entwickler Vorschau-Unterstützung für Dateitypen hinzufügen können, die macOS nicht nativ verarbeitet. Diese Plugins – auf modernem macOS jetzt Quick-Look-Erweiterungen genannt – integrieren sich direkt in den Finder. Einmal installiert, funktionieren sie automatisch: Du drückst weiterhin die Leertaste wie immer, und mehr Dateitypen zeigen jetzt brauchbare Vorschauen.</p>

<p>Die besten Quick-Look-Plugins sind solche, bei denen du vergisst, dass du sie installiert hast. Sie fügen keine neuen Apps zum Erlernen und keine neuen Workflows hinzu. Sie machen die Leertaste einfach nützlicher.</p>

<h2>Archiv- und Ordnervorschauen mit Loupe</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> ist eine Quick-Look-Erweiterung, die genau die zwei größten Lücken bei Finder-Vorschauen schließt: komprimierte Archive und Ordnerinhalte. Einmal installiert, zeigt das Drücken der Leertaste bei einer ZIP-, RAR-, 7z-, TAR-, .tar.gz- oder .tar.bz2-Datei den vollständigen Inhalt als Baumansicht. Das Drücken der Leertaste bei einem Ordner zeigt dessen gesamten Dateibaum, einschließlich verschachtelter Unterordner.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kein Entpacken nötig</h3>
<p>Der Kernwert ist, dass du nie mehr ein Archiv entpacken musst, nur um zu sehen, was drin ist. Leertaste drücken, Inhalt prüfen, Vorschau schließen. Es wurde nichts auf die Festplatte geschrieben. Keine Ordner zum Aufräumen. Für jeden, der täglich mehrere Archive bearbeitet, spart das erheblich Zeit.</p>

<h3>Funktioniert mit jeder Finder-Ansicht</h3>
<p>Ob du Listenansicht, Spaltenansicht, Symbolansicht oder Galerieansicht nutzt, Loupes Vorschauen erscheinen in allen davon. Auch die Navigation mit Pfeiltasten funktioniert. Blättere durch einen Ordner mit gemischten Dateien, und Archive und Ordner werden in der Vorschau angezeigt, genau wie Bilder und Dokumente.</p>

<h3>Ein Plugin, zwei Blindstellen behoben</h3>
<p>Statt separate Plugins für Archive und Ordner zu installieren, kümmert sich Loupe um beides. ZIP-Datei auswählen – Baumansicht. Ordner auswählen – Baumansicht. Dasselbe übersichtliche Format für beides, was das Vorschauerlebnis konsistent hält.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "preview-dmg-contents-mac": {
    slug: "preview-dmg-contents-mac",
    title: "So siehst du DMG-Inhalte auf dem Mac in der Vorschau, ohne einzuhängen",
    description: "Du hast eine DMG-Datei heruntergeladen und willst sehen, was drin ist, bevor du sie einhängst. macOS verlangt, dass du das Disk-Image erst einhängst, was bei großen Dateien langsam ist.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Disk-Images – .dmg-Dateien – sind das Standardformat für die Verteilung von Mac-Software. Du lädst eines herunter, doppelklickst es, wartest, bis macOS es einhängt, ziehst die App in deinen Programme-Ordner und hängst das Disk-Image dann wieder aus. Es funktioniert, aber es ist ein mehrstufiger Prozess, selbst wenn du nur wissen willst, was drin ist.</p>

<p>Vielleicht hast du mehrere DMGs in deinem Downloads-Ordner und kannst dich nicht erinnern, welche App in welchem steckt. Oder du hast ein DMG von der Website eines Entwicklers heruntergeladen und willst dessen Inhalt überprüfen, bevor du es einhängst. macOS bietet dir keine Möglichkeit, hineinzuschauen, ohne den vollständigen Einhängen-und-Durchsuchen-Zyklus zu durchlaufen.</p>

<h2>Das Problem der Disk-Image-Inspektion</h2>

<p>Wenn du ein DMG im Finder auswählst und die Leertaste drückst, zeigt dir Quick Look Dateiname, Größe und Format – aber nichts über den Inhalt. Du kannst die enthaltene App nicht sehen, keine mitgelieferte Dokumentation, keine Ordnerstruktur. Die einzige Option ist, das Image einzuhängen, was bei großen Dateien mehrere Sekunden dauert und eine virtuelle Festplatte auf deinem Schreibtisch hinzufügt.</p>

<p>Für jeden, der einen Downloads-Ordner voller Installer und Disk-Images verwaltet, bedeutet das wiederholtes Einhängen und Auswerfen, nur um Dateien zu identifizieren. Es ist dasselbe Problem wie bei ZIP-Dateien – ein undurchsichtiger Behälter, den macOS sich weigert in der Vorschau zu zeigen.</p>

<h2>Archive und Ordner mit Quick Look in der Vorschau ansehen</h2>

<p>Während DMG-Dateien aufgrund ihres Disk-Image-Formats eine spezielle Behandlung erfordern, hat das breitere Problem der Vorschau komprimierter Behälter eine Lösung. <a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> erweitert Quick Look um die Vorschau von ZIP-, RAR-, 7z-, TAR-, .tar.gz- und .tar.bz2-Archiven sowie von Ordnerinhalten. Wenn deine Software als Archiv statt als DMG ankommt, kannst du sie mit der Leertaste sofort in der Vorschau ansehen.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Als ZIP verteilte Software</h3>
<p>Viele Entwickler verteilen Mac-Software als ZIP-Datei statt als DMG. Wenn du eine ZIP-Datei mit einer App herunterlädst, drückst du die Leertaste, um den Inhalt vor dem Entpacken zu sehen. Bestätige, dass es die richtige Version ist und die erwartete App enthalten ist – kein Entpacken nötig.</p>

<h3>Build-Artefakte und Releases</h3>
<p>Entwicklungs-Builds, Beta-Releases und CI-Artefakte werden oft als ZIP- oder TAR-Archive versendet. Statt jedes einzeln zu entpacken, um die gesuchte Binärdatei zu finden, siehst du den Archivinhalt mit Quick Look in der Vorschau. Identifiziere den richtigen Build in Sekunden.</p>

<h3>Downloads organisiert halten</h3>
<p>Ein unübersichtlicher Downloads-Ordner mit einer Mischung aus DMGs, ZIPs und TAR-Dateien ist leichter zu verwalten, wenn du die komprimierten davon in der Vorschau ansehen kannst, ohne sie einzuhängen oder zu entpacken. Blättere mit geöffnetem Quick Look durch die Dateien und identifiziere den Inhalt jedes Archivs auf einen Blick.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "inspect-zip-file-mac-without-unzipping": {
    slug: "inspect-zip-file-mac-without-unzipping",
    title: "So inspizierst du eine ZIP-Datei auf dem Mac, ohne sie zu entpacken",
    description: "Du musst die Dateien in einem ZIP-Archiv prüfen, aber das Entpacken erzeugt ein Durcheinander an Ordnern und kostet Zeit, die du nicht hast. Es gibt einen Weg, ohne Entpacken zu inspizieren.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine ZIP-Datei. Vielleicht kam sie von einem Kollegen, einem Kunden oder einem Download-Link. Du willst eine einfache Frage beantworten: Was ist drin? Auf macOS ist der einzige eingebaute Weg, diese Frage zu beantworten, die ZIP-Datei zu doppelklicken und das Archivierungsprogramm alles in einen neuen Ordner entpacken zu lassen. Dann durchsuchst du den Ordner, findest deine Antwort und löschst die entpackten Dateien, falls du sie nicht brauchtest.</p>

<p>Bei einer kleinen ZIP-Datei ist das leicht unpraktisch. Bei einem 3-GB-Archiv ist es Zeit- und Speicherplatzverschwendung. Und wenn du mehrere ZIPs prüfst, um die richtige zu finden, wird der Entpacken-Durchsuchen-Löschen-Zyklus richtig mühsam.</p>

<h2>Warum macOS ZIPs nicht nativ inspizieren kann</h2>

<p>macOS entpackt ZIP-Dateien schon seit den frühen Tagen von OS X. Doppelklicke eine ZIP-Datei, und das Archivierungsprogramm packt sie automatisch aus. Aber Apple hat nie eine Möglichkeit hinzugefügt, den Inhalt aufzulisten, ohne zu entpacken. Quick Look – das fast jeden anderen Dateityp in der Vorschau zeigt – zeigt bei ZIP-Dateien nichts Brauchbares. Du siehst Dateiname, Größe und Änderungsdatum. Keine Dateiliste, keine Ordnerstruktur.</p>

<p>Das ist eine Design-Lücke, keine technische Einschränkung. Die Information steckt direkt im Verzeichnis-Header der ZIP-Datei. Jedes Tool kann sie lesen, ohne die tatsächlichen Dateidaten zu dekomprimieren. macOS legt sie einfach nicht im Finder oder in Quick Look offen.</p>

<h2>Jede ZIP-Datei mit der Leertaste inspizieren</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> liest das Verzeichnis der ZIP-Datei und zeigt den vollständigen Inhalt als Baumansicht in Quick Look an. Wähle eine ZIP-Datei im Finder aus, drücke die Leertaste, und sieh dir jede Datei und jeden Ordner darin an. Das Archiv bleibt unberührt – nichts wird entpackt, nichts wird auf die Festplatte geschrieben.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Das richtige Archiv identifizieren</h3>
<p>Du hast vier ZIPs in einem Ordner – verschiedene Versionen derselben Lieferung. Wähle jede aus und drücke die Leertaste, um ihren Inhalt zu vergleichen. Finde die mit den benötigten Dateien, ohne eine davon zu entpacken. Was Minuten gedauert hätte, dauert jetzt Sekunden.</p>

<h3>Dateitypen vor dem Entpacken prüfen</h3>
<p>Eine ZIP-Datei aus unbekannter Quelle? Drück die Leertaste, um zu sehen, was drin ist, bevor du dich zum Entpacken verpflichtest. Du siehst jeden Dateinamen und kannst überprüfen, ob das Archiv das enthält, was es verspricht – Dokumente, Bilder oder Datendateien – bevor überhaupt etwas auf deinem System ausgepackt wird.</p>

<h3>Eigene Archive überprüfen</h3>
<p>Du hast eine ZIP-Datei erstellt, um sie jemandem zu schicken. Bevor du sie an eine E-Mail anhängst, drückst du die Leertaste, um zu bestätigen, dass die richtigen Dateien enthalten sind. Erkenne fehlende Dateien oder versehentliche Beifügungen, bevor dein Empfänger sie entdeckt.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "mac-finder-column-view-limitations": {
    slug: "mac-finder-column-view-limitations",
    title: "Einschränkungen der Mac-Finder-Spaltenansicht — kein Einblick in Archive",
    description: "Die Spaltenansicht im Finder eignet sich hervorragend zum Navigieren durch Ordnerhierarchien, stößt aber bei komprimierten Dateien an ihre Grenzen. Archive erscheinen als Sackgassen ohne Möglichkeit, ihren Inhalt zu sehen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Die Spaltenansicht des Finders ist wohl die beste Möglichkeit, tief verschachtelte Ordnerstrukturen auf einem Mac zu durchsuchen. Jeder Unterordner öffnet sich in einer neuen Spalte rechts daneben, sodass du deinen gesamten Pfad auf einen Blick siehst. Klicke auf eine Datei, und die rechte Spalte zeigt eine Vorschau – Bildminiaturen, PDF-Seiten, Videowiedergabe. Es ist schnell, visuell und intuitiv.</p>

<p>Aber wähle eine ZIP-, RAR- oder 7z-Datei in der Spaltenansicht aus, und die Vorschauspalte bleibt leer. Du siehst Dateiname, Größe und Erstellungsdatum. Keine Dateiliste, keine Ordnerstruktur, nichts, das dir sagt, was drin ist. Das Archiv ist eine Sackgasse – die Spaltenansicht kann nicht hineinnavigieren, und Quick Look kann es nicht in der Vorschau zeigen.</p>

<h2>Wo die Spaltenansicht an ihre Grenzen kommt</h2>

<p>Die Stärke der Spaltenansicht ist die schrittweise Offenlegung: Jeder Klick zeigt die nächste Ebene der Hierarchie. Aber komprimierte Archive durchbrechen dieses Muster. Eine ZIP-Datei kann eine komplexe Ordnerstruktur mit Hunderten von Dateien enthalten, doch die Spaltenansicht behandelt sie als einzelnes undurchsichtiges Objekt. Du kannst nicht hineinklicken. Du kannst es nicht aufklappen. Du kannst den Baum darin nicht sehen.</p>

<p>Das ist besonders frustrierend, wenn dein Workflow das Navigieren durch Ordner beinhaltet, um ein bestimmtes Archiv zu finden, und du dann dessen Inhalt prüfen musst. Die Navigation läuft flüssig, bis du auf das Archiv triffst – dann bist du gezwungen zu entpacken und stattdessen zum Durchsuchen des entpackten Ordners zu wechseln.</p>

<p>Ordner haben eine ähnliche, aber weniger schwerwiegende Einschränkung. Die Spaltenansicht lässt dich in Ordner navigieren, aber jeweils nur eine Ebene. Es gibt keine Möglichkeit, den gesamten Baum einer tief verschachtelten Ordnerstruktur zu sehen, ohne sich durch jede Ebene zu klicken.</p>

<h2>Spaltenansicht-Vorschau mit Quick Look erweitern</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> ändert nicht, wie die Spaltenansicht funktioniert, macht die Vorschauspalte aber weitaus nützlicher. Mit installiertem Loupe öffnet die Auswahl eines Archivs in der Spaltenansicht und das Drücken der Leertaste ein Quick-Look-Fenster, das den vollständigen Baum des Inhalts zeigt – jede Datei und jeder Unterordner, mit Namen und Größen.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Archive sind keine Sackgassen mehr</h3>
<p>Statt an eine Wand zu stoßen, wenn du ein Archiv in der Spaltenansicht erreichst, drückst du die Leertaste, um hineinzuschauen. Die Baumansicht zeigt dieselbe Art hierarchischer Struktur, in der die Spaltenansicht glänzt – nur angezeigt im Quick-Look-Fenster statt als navigierbare Spalten.</p>

<h3>Auch vollständiger Baum für Ordner</h3>
<p>Während die Spaltenansicht Ordnerinhalte jeweils eine Ebene auf einmal zeigt, zeigt Loupes Quick-Look-Vorschau den gesamten Baum auf einmal. Ordner auswählen, Leertaste drücken, und jeden verschachtelten Unterordner und jede Datei in einer einzigen Ansicht sehen. Das ergänzt die schrittweise Navigation der Spaltenansicht um einen Überblick aus der Vogelperspektive.</p>

<h3>Workflow mit Pfeiltasten</h3>
<p>In der Spaltenansicht kannst du mit den Pfeiltasten zwischen Dateien wechseln. Bei geöffnetem Quick Look aktualisiert jeder Pfeiltastendruck die Vorschau. Wechsle von einem PDF zu einer ZIP-Datei zu einem Ordner – jeder wird sofort in der Vorschau angezeigt. Archive und Ordner sind in deinem Durchsuchen-Ablauf keine blinden Flecken mehr.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "quick-look-for-developers-mac": {
    slug: "quick-look-for-developers-mac",
    title: "Quick Look für Entwickler auf dem Mac — Archive und Projektordner in der Vorschau ansehen",
    description: "Als Entwickler bearbeitest du ständig ZIP-Releases, TAR-Archive und verschachtelte Projektverzeichnisse. Der Finder-Quick-Look zeigt von all dem nichts in der Vorschau — eine Lücke, die es zu schließen lohnt.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Wenn du auf einem Mac Software entwickelst, besteht dein täglicher Workflow aus einem ständigen Strom komprimierter Dateien und tief verschachtelter Verzeichnisse. Du lädst ZIP-Releases von GitHub herunter. Du erhältst .tar.gz-Build-Artefakte von der CI. Du navigierst durch Projektordner mit Dutzenden von Unterverzeichnissen. Und bei all dem ist Quick Look im Finder – die nützlichste Vorschaufunktion von macOS – völlig unbrauchbar.</p>

<p>Leertaste bei einer ZIP-Datei? Dateiname und Größe. Leertaste bei einer .tar.gz-Datei? Dateiname und Größe. Leertaste beim Stammordner deines Projekts? Ordnername und Elementanzahl. Keine Dateilisten, keine Verzeichnisbäume, keine Möglichkeit, schnell einzuschätzen, was drin ist, ohne zu öffnen oder zu entpacken.</p>

<h2>Das Vorschau-Problem der Entwickler</h2>

<p>Entwickler haben es weit häufiger mit Archiven zu tun als Durchschnittsnutzer. Ein typischer Tag sieht so aus:</p>

<ul>
<li><strong>GitHub-Releases</strong> – ZIP- oder TAR-Archive von getaggten Releases herunterladen. Welche Version hat die benötigte Binärdatei? Entpacken und nachsehen, oder die Release Notes prüfen und hoffen, dass sie stimmen.</li>
<li><strong>CI-Artefakte</strong> – Build-Pipelines erzeugen .tar.gz- oder ZIP-Dateien. Du lädst sie herunter und musst überprüfen, ob die richtigen Dateien verpackt wurden, bevor du deployst.</li>
<li><strong>Dependency-Caches</strong> – node_modules-Archive, Framework-Downloads, SDK-Pakete. Große komprimierte Dateien, die man lieber vor dem Entpacken inspizieren würde.</li>
<li><strong>Navigation durch Projektordner</strong> – zwischen Repositorys wechseln, Verzeichnisstrukturen prüfen, überprüfen, ob Build-Ausgaben am richtigen Ort gelandet sind.</li>
</ul>

<p>In jedem Fall ist die benötigte Information strukturell: welche Dateien existieren, wie sie organisiert sind, ob die erwarteten Ausgaben vorhanden sind. Quick Look könnte diese Fragen sofort beantworten – wenn es Archive und Ordner unterstützen würde.</p>

<h2>Archive und Projektbäume sofort in der Vorschau ansehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> erweitert Quick Look um genau die Dateitypen, mit denen Entwickler am häufigsten zu tun haben. ZIP-, TAR-, .tar.gz-, .tar.bz2-, RAR- und 7z-Archive zeigen alle ihren vollständigen Inhalt als Baum, wenn du die Leertaste drückst. Ordner zeigen ihren kompletten Verzeichnisbaum. Kein Entpacken, keine Terminal-Befehle, kein Kontextwechsel.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Build-Artefakte überprüfen</h3>
<p>Deine CI-Pipeline hat eine .tar.gz-Datei erzeugt. Vor dem Deployment wählst du sie im Finder aus und drückst die Leertaste. Bestätige, dass Binärdatei, Konfigurationsdateien und Assets alle enthalten sind. Fehlt etwas, weißt du es sofort – kein Entpacken nötig.</p>

<h3>Release-Archive inspizieren</h3>
<p>Du hast eine ZIP-Datei von einer GitHub-Release-Seite heruntergeladen. Drück die Leertaste, um jede darin enthaltene Datei zu sehen, überprüfe, dass die Version stimmt, und bestätige, dass die Verzeichnisstruktur korrekt ist – alles ohne auszupacken.</p>

<h3>Projektstrukturen navigieren</h3>
<p>Wähle den Stammordner deines Projekts aus und drücke die Leertaste, um den vollständigen Verzeichnisbaum zu sehen. Nützlich, um dein mentales Modell einer Codebasis aufzufrischen, zu prüfen, ob generierte Dateien in den richtigen Verzeichnissen gelandet sind, oder eine saubere Projektstruktur vor dem Commit zu bestätigen.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "mac-archive-utility-limited": {
    slug: "mac-archive-utility-limited",
    title: "Das Mac-Archivierungsprogramm ist eingeschränkt — du verdienst eine bessere Vorschau",
    description: "Das Archivierungsprogramm auf macOS entpackt ZIP-Dateien automatisch — kann dir aber vorher nicht zeigen, was drin ist. Keine Vorschau, keine Dateiliste, keine Möglichkeit, einmal gestartet abzubrechen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Wenn du auf deinem Mac auf eine ZIP-Datei doppelklickst, erledigt das Archivierungsprogramm das Entpacken still im Hintergrund. Es erstellt einen neuen Ordner mit dem entpackten Inhalt, und das war's. Kein Bestätigungsdialog, keine Dateiliste, keine Option, auszuwählen, welche Dateien entpackt werden. Alles oder nichts.</p>

<p>Das Archivierungsprogramm funktioniert seit seiner Einführung so, und obwohl das automatische Entpacken für einfache Fälle praktisch ist, wird es zum Problem, wenn du mehr Kontrolle brauchst. Es gibt keine Möglichkeit, den Inhalt eines Archivs vorher zu sehen, keine Möglichkeit, selektiv zu entpacken, und keine Möglichkeit, eine Entpackung bei einer großen Datei zu stoppen, sobald sie gestartet ist.</p>

<h2>Was das Archivierungsprogramm nicht kann</h2>

<p>Das Archivierungsprogramm ist auf eine Aufgabe ausgelegt: Archive dekomprimieren. Das macht es gut, aber es fehlen Funktionen, die andere Betriebssysteme standardmäßig bieten:</p>

<ul>
<li><strong>Keine Inhaltsvorschau</strong> – du kannst nicht sehen, was in einem Archiv steckt, bevor du es entpackst</li>
<li><strong>Kein selektives Entpacken</strong> – du kannst nicht nur bestimmte Dateien oder Ordner auswählen</li>
<li><strong>Kein Fortschritt bei kleinen Dateien</strong> – das Entpacken passiert einfach, ohne Rückmeldung, bis es fertig ist</li>
<li><strong>Begrenzte Formatunterstützung</strong> – nur ZIP und ein paar TAR-Varianten werden unterstützt; RAR und 7z brauchen Tools von Drittanbietern</li>
</ul>

<p>Die größte Lücke ist die fehlende Vorschau. Bevor du dich entscheidest, ein großes Archiv zu entpacken – was Zeit und Speicherplatz kostet – möchtest du wissen, was drin ist. Das Archivierungsprogramm bietet das nicht. Quick Look auch nicht, das bei Archiven nur Dateiname und Größe zeigt.</p>

<h2>Archivinhalt vor dem Entpacken in der Vorschau ansehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> fügt hinzu, was dem Archivierungsprogramm fehlt: eine Möglichkeit, in ein Archiv hineinzuschauen, bevor du es entpackst. Wähle eine beliebige ZIP-, RAR-, 7z-, TAR-, .tar.gz- oder .tar.bz2-Datei im Finder aus, drücke die Leertaste, und der vollständige Inhalt erscheint als Baumansicht. Entscheide dann, ob du entpacken willst – oder es ganz überspringst.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Unnötiges Entpacken vermeiden</h3>
<p>Eine 2-GB-ZIP-Datei, die 30 Sekunden zum Entpacken braucht – und sich als falsche Version herausstellt. Mit einer Quick-Look-Vorschau hättest du es in einer Sekunde gewusst. Leertaste drücken, Dateiliste prüfen, weitermachen, ohne Zeit oder Speicherplatz zu verschwenden.</p>

<h3>Formate in der Vorschau, die das Archivierungsprogramm nicht öffnen kann</h3>
<p>Das Archivierungsprogramm unterstützt RAR- oder 7z-Dateien überhaupt nicht. Loupe zeigt beide Formate in Quick Look in der Vorschau, sodass du sehen kannst, was drin ist, auch ohne dediziertes Entpackungs-Tool installiert zu haben. Wenn du wirklich entpacken musst, können Tools wie The Unarchiver das übernehmen.</p>

<h3>Ergänzt das Archivierungsprogramm</h3>
<p>Loupe ersetzt das Archivierungsprogramm nicht – es fügt den Vorschauschritt hinzu, der dort fehlt. Mit der Leertaste in der Vorschau ansehen, dann mit Doppelklick über das Archivierungsprogramm entpacken, wenn der Inhalt passt. Zwei Tools, die zusammenarbeiten, um die Lücken des jeweils anderen zu füllen.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "preview-download-before-opening-mac": {
    slug: "preview-download-before-opening-mac",
    title: "Einen Download auf dem Mac in der Vorschau ansehen, bevor du ihn öffnest",
    description: "Du hast eine komprimierte Datei heruntergeladen und willst prüfen, was drin ist, bevor du sie entpackst oder öffnest. macOS zeigt den Inhalt von Archiven im Finder nicht an.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Dein Downloads-Ordner ist voller komprimierter Dateien – ZIPs aus E-Mail-Anhängen, RARs von Filesharing-Links, .tar.gz-Pakete von Entwicklertools. Du willst prüfen, was in jeder einzelnen steckt, bevor du entscheidest, was du damit machst. Ist es die richtige Datei? Enthält sie das, was du erwartest? Ist es sicher, sie zu entpacken?</p>

<p>Auf macOS erfordert die Antwort auf all diese Fragen, dass du zuerst entpackst. Du kannst den Inhalt keines komprimierten Dateiformats im Finder in der Vorschau ansehen. Quick Look zeigt dir Dateiname und Größe, und das war's.</p>

<h2>Downloads verdienen einen Vorschauschritt</h2>

<p>Für Bilder, PDFs und Videos, die du herunterlädst, bietet macOS einen klaren Vorschau-Workflow. Datei im Finder auswählen, Leertaste drücken, und sehen, was es ist. Du kannst sofort entscheiden, ob du sie behältst, verschiebst oder löschst – alles ohne eine Anwendung zu öffnen.</p>

<p>Aber bei komprimierten Dateien – einem der häufigsten Download-Typen überhaupt – gibt es keine entsprechende Vorschau. Du musst erst handeln (das Archiv entpacken), bevor du den Inhalt bewerten kannst. Das erzeugt mehrere Probleme:</p>

<ul>
<li><strong>Zeitverschwendung</strong> – große Archive nur entpacken, um ihren Inhalt zu prüfen, und die entpackten Dateien dann wieder löschen</li>
<li><strong>Unordnung auf der Festplatte</strong> – entpackte Ordner, die sich im Downloads-Ordner ansammeln, weil du vergessen hast, sie aufzuräumen</li>
<li><strong>Unsicherheit</strong> – nicht wissen, ob ein heruntergeladenes Archiv die erwarteten Dateien enthält, bis es entpackt ist</li>
</ul>

<h2>Komprimierte Downloads mit Quick Look in der Vorschau ansehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> gibt komprimierten Dateien dieselbe Vorschaubehandlung, die Bilder und Dokumente bereits genießen. Wähle eine ZIP-, RAR-, 7z- oder TAR-Datei in deinem Downloads-Ordner aus, drücke die Leertaste, und sieh dir die vollständige Dateiliste als Baumansicht an. Kein Entpacken, keine zusätzlichen Schritte.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Downloads-Ordner sichten</h3>
<p>Öffne die Downloads im Finder, drück bei der ersten komprimierten Datei die Leertaste, und nutze dann die Pfeiltasten, um durch jede weitere zu blättern. In Sekunden kannst du erkennen, was jedes Archiv enthält – die behalten, die du brauchst, den Rest in den Papierkorb. Kein Entpacken nötig.</p>

<h3>E-Mail-Anhänge überprüfen</h3>
<p>Jemand hat dir eine ZIP-Datei per E-Mail geschickt. Bevor du sie in deinen Arbeitsbereich entpackst, drückst du die Leertaste, um zu bestätigen, dass sie die erwarteten Dateien enthält. Falscher Anhang? ZIP-Datei löschen und nach der richtigen fragen – sauber, ohne übrig gebliebene entpackte Dateien.</p>

<h3>Geteilte Links prüfen</h3>
<p>Ein Kollege hat einen Download-Link zu einer komprimierten Datei geteilt. Sieh nach dem Herunterladen den Inhalt mit der Leertaste in der Vorschau an, um zu überprüfen, dass die richtigen Dateien und Versionen enthalten sind. Stimmt etwas nicht, weißt du es sofort – bevor du Zeit ins Entpacken investiert hast.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "whats-in-this-zip-mac": {
    slug: "whats-in-this-zip-mac",
    title: "Was ist in dieser ZIP-Datei? Vorschau ohne Entpacken auf dem Mac",
    description: "Eine ZIP-Datei liegt in deinem Finder — aber macOS verrät dir nicht, was drin ist, bis du sie entpackst. So schaust du am schnellsten in ein beliebiges Archiv hinein.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du starrst auf eine ZIP-Datei im Finder. Vielleicht ist es etwas, das du letzte Woche heruntergeladen und vergessen hast. Vielleicht ist es eines von fünf ähnlich benannten Archiven von einem Kunden. Vielleicht hast du etwas selbst gezippt und kannst dich jetzt nicht mehr erinnern, was drin ist. Wie auch immer der Fall liegt, du musst wissen, was drin ist – und macOS verrät es dir nicht.</p>

<p>Die Leertaste zeigt dir Dateiname und Größe. Ein Doppelklick entpackt alles in einen neuen Ordner. Es gibt keinen Mittelweg: keine schnelle Prüfung, keine Dateiliste, keine Möglichkeit, "Was ist in dieser ZIP-Datei?" zu beantworten, ohne dich auf eine vollständige Entpackung einzulassen.</p>

<h2>Eine einfache Frage, die macOS nicht beantworten kann</h2>

<p>"Was ist in diesem Archiv?" ist die grundlegendste Frage, die man zu einer komprimierten Datei stellen kann. Jedes andere Betriebssystem – Windows, Linux und die meisten mobilen Plattformen – bietet irgendeine Möglichkeit, Archivinhalte zu durchsuchen, ohne zu entpacken. macOS tut das trotz seines Feinschliffs und seiner Aufmerksamkeit für Nutzererfahrung nicht.</p>

<p>Das Terminal kann die Frage beantworten (<code>unzip -l dateiname.zip</code>), aber zu einem Kommandozeilen-Tool zu wechseln, um eine grundlegende Dateiverwaltungsfrage zu beantworten, ist eine unnötige Unterbrechung. Du bist im Finder und arbeitest visuell. Die Antwort sollte visuell verfügbar sein, direkt vor Ort.</p>

<p>Diese Lücke ist besonders frustrierend, weil Quick Look diese Frage bereits für jeden anderen Dateityp beantwortet. Was ist in diesem Bild? Leertaste drücken. Was ist in diesem PDF? Leertaste drücken. Was ist in dieser ZIP-Datei? Entpacken und nachsehen. Die Inkonsistenz durchbricht einen ansonsten nahtlosen Workflow.</p>

<h2>Leertaste drücken. Alles im Inneren sehen.</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> lässt Quick Look diese Frage auch für Archive beantworten. Wähle eine ZIP-, RAR-, 7z-, TAR-, .tar.gz- oder .tar.bz2-Datei aus, drücke die Leertaste, und der vollständige Inhalt erscheint als Baumansicht. Dateinamen, Größen, Ordnerstruktur – alles, was du wissen musst, sofort.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Mysteriöse Archive identifizieren</h3>
<p>Diese ZIP-Datei, die du vor zwei Wochen heruntergeladen hast? Wähle sie aus, drücke die Leertaste, und sieh sofort, was drin ist. Kein Rätselraten, kein Entpacken, keine übrig gebliebenen Ordner. Entscheide in Sekunden, ob du sie behältst oder löschst.</p>

<h3>Ähnliche Archive vergleichen</h3>
<p>Fünf ZIPs von einem Kunden, alle mit fast identischen Namen. Blättere bei geöffnetem Quick Look durch sie – jede zeigt ihren Inhalt, während du navigierst. Finde die richtige, ohne eine davon zu öffnen.</p>

<h3>Vor dem Versenden prüfen</h3>
<p>Du hast eine ZIP-Datei erstellt, um sie mit jemandem zu teilen. Drück vor dem Versenden die Leertaste, um zu bestätigen, dass die richtigen Dateien enthalten sind. Es dauert eine Sekunde und kann dir die Peinlichkeit ersparen, ein unvollständiges oder falsches Archiv zu verschicken.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "the-unarchiver-alternative-mac": {
    slug: "the-unarchiver-alternative-mac",
    title: "The-Unarchiver-Alternative für den Mac — Erst in der Vorschau ansehen, dann entpacken",
    description: "The Unarchiver öffnet und entpackt Dutzende Archivformate — kann dir aber vor dem Entpacken nicht zeigen, was drin ist. Es gibt ein Tool, das genau diesen fehlenden Vorschauschritt hinzufügt.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>The Unarchiver ist eine der beliebtesten Dienstprogramm-Apps auf dem Mac. Es unterstützt Dutzende Archivformate – ZIP, RAR, 7z, TAR und viele mehr – und macht das Entpacken mühelos. Du doppelklickst ein Archiv, wählst ein Ziel zum Entpacken, und es erledigt den Rest. Für einfaches Entpacken ist es hervorragend.</p>

<p>Aber The Unarchiver hat eine erhebliche Einschränkung: Es kann dir nicht zeigen, was in einem Archiv steckt, bevor du es entpackst. Es gibt keinen "Inhalt durchsuchen"-Modus, kein Vorschaufenster, keine Möglichkeit, die Dateiliste zu inspizieren, ohne dich zum Entpacken zu verpflichten. Du triffst jedes Mal eine blinde Entscheidung.</p>

<h2>Warum "erst Vorschau, dann Entpacken" wichtig ist</h2>

<p>Entpacken ist in dem Sinne eine unumkehrbare Aktion, dass es Zeit und Speicherplatz kostet. Bei einem großen Archiv – einer 4-GB-Sammlung von Spiel-Mods, einer 2-GB-Designübergabe – kann das Entpacken Minuten dauern. Stellt sich das Archiv als falsche Version heraus oder enthält nicht das Benötigte, war diese Zeit verschwendet.</p>

<p>Der Workflow von The Unarchiver lautet: erst entpacken, dann inspizieren. Was fehlt, ist die Umkehrung: erst inspizieren, nur bei Bedarf entpacken. Dieser Vorschau-zuerst-Ansatz vermeidet unnötiges Entpacken komplett.</p>

<p>Andere Archiv-Tools wie BetterZip bieten Inhalts-Browsing, aber das sind vollwertige Archivmanager mit entsprechendem Preis und entsprechender Komplexität. Wenn du nur einen schnellen Blick auf den Inhalt willst, solltest du keine schwergewichtige Anwendung brauchen.</p>

<h2>Quick-Look-Vorschauen neben The Unarchiver hinzufügen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> ersetzt The Unarchiver nicht – es ergänzt es. Loupe fügt den Vorschauschritt hinzu, der The Unarchiver fehlt. Wähle ein beliebiges Archiv im Finder aus, drücke die Leertaste, und sieh dir den vollständigen Inhalt als Baumansicht an. Entscheidest du dich zum Entpacken, doppelklickst du die Datei und lässt The Unarchiver den Rest erledigen.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Erst Vorschau, dann entscheiden</h3>
<p>Der Workflow wird zu: Archiv auswählen, Leertaste drücken, um den Inhalt in der Vorschau zu sehen, dann entweder entpacken (wenn der Inhalt stimmt) oder weitermachen (wenn nicht). Der Vorschauschritt dauert eine Sekunde und kann dir Minuten unnötigen Entpackens und Aufräumens ersparen.</p>

<h3>Alle Formate, die du schon nutzt</h3>
<p>Loupe zeigt ZIP, RAR, 7z, TAR, .tar.gz und .tar.bz2 in der Vorschau an – dieselben Kernformate, die The Unarchiver entpackt. Deine Formatabdeckung bleibt gleich; du gewinnst nur die Fähigkeit hinzu, vor dem Entpacken in der Vorschau nachzusehen.</p>

<h3>Plus Ordnervorschauen</h3>
<p>Über Archive hinaus zeigt Loupe auch Ordnerinhalte mit derselben Leertaste-Geste in der Vorschau an. Ordner auswählen, Leertaste drücken, und den vollständigen Dateibaum sehen. Es ist eine natürliche Erweiterung derselben Idee – sehen, was drin ist, bevor man öffnet.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "mac-space-bar-preview-everything": {
    slug: "mac-space-bar-preview-everything",
    title: "Die Mac-Leertaste sollte alles in der Vorschau zeigen — so machst du es möglich",
    description: "Die Leertaste im Finder zeigt Bilder, PDFs und Videos sofort in der Vorschau — versagt aber bei Archiven und Ordnern. Es gibt einen Weg, diese Lücken zu schließen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Die Mac-Leertaste ist wohl der effizienteste Dateivorschau-Mechanismus auf jedem Betriebssystem. Ein Tastendruck, sofortige Vorschau, kein App-Start. Sie ist so gut, dass man anfängt zu erwarten, dass sie für alles funktioniert – und dann stößt man auf die Dateitypen, bei denen das nicht der Fall ist.</p>

<p>Archive (ZIP, RAR, 7z, TAR) und Ordner sind die zwei auffälligsten blinden Flecken. Drück bei einem von beiden die Leertaste, und du bekommst Metadaten – Dateiname, Größe, Datum – aber nichts über den Inhalt. Bei Dateien, die im Grunde Behälter für andere Dateien sind, macht das Quick Look genau dann nutzlos, wenn man es am meisten braucht.</p>

<h2>Was die Leertaste bereits kann</h2>

<p>Die Liste der Dateitypen, die Quick Look nativ unterstützt, ist beeindruckend:</p>

<ul>
<li>Bilder – JPEG, PNG, HEIC, TIFF, GIF, RAW-Formate</li>
<li>Dokumente – PDF, Word, Excel, PowerPoint, Pages, Numbers, Keynote</li>
<li>Medien – MOV, MP4, MP3, WAV</li>
<li>Code – reiner Text, Markdown, Quellcode mit Syntaxhervorhebung</li>
<li>3D – USDZ, OBJ, STL</li>
</ul>

<p>Bei einer so breiten Unterstützung wirken die Lücken bei Archiven und Ordnern wie ein Versehen. Du kannst die Leertaste bei einem 3D-Modell drücken und es in Echtzeit gerendert sehen, aber du kannst die Leertaste bei einer ZIP-Datei nicht drücken und eine Liste der Dateinamen sehen. Die Fähigkeitslücke passt nicht zur Komplexität der Aufgabe.</p>

<h2>Die Lücken mit einer Erweiterung schließen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> fügt die fehlenden Vorschautypen hinzu, damit die Leertaste bei allem funktioniert, dem du üblicherweise begegnest. Archive – ZIP, RAR, 7z, TAR, .tar.gz, .tar.bz2 – zeigen ihren vollständigen Inhalt als Baumansicht. Ordner zeigen ihren kompletten Dateibaum. Dieselbe Ein-Tasten-Vorschau, auf die du dich bei Bildern und Dokumenten verlässt, jetzt auch für Behälter.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Konsistentes Vorschauerlebnis</h3>
<p>Nach der Installation von Loupe funktioniert die Leertaste bei Archiven und Ordnern genauso wie bei allem anderen. Es gibt keine neuen Gesten zu lernen, keine neuen Apps zu öffnen. Dein Muskelgedächtnis bleibt intakt – die Vorschauen decken einfach mehr ab.</p>

<h3>Pfeiltastennavigation über alle Dateitypen hinweg</h3>
<p>Eine der besten Funktionen von Quick Look ist das Blättern mit Pfeiltasten: Vorschau mit Leertaste öffnen, dann mit den Pfeiltasten durch Dateien navigieren. Mit Loupe funktioniert das nahtlos über Dateitypen hinweg – von einem PDF zu einer ZIP-Datei zu einem Ordner, und jeder wird korrekt im Quick-Look-Fenster angezeigt.</p>

<h3>Kein Overhead</h3>
<p>Loupe ist eine Quick-Look-Erweiterung, keine eigenständige App. Es läuft nur, wenn du die Leertaste bei einem unterstützten Dateityp drückst. Kein Menüleisten-Symbol, kein Hintergrundprozess, keine Konfiguration. Installieren und vergessen – bis du das nächste Mal bei einer ZIP-Datei die Leertaste drückst und ihren Inhalt siehst statt einer leeren Vorschau.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "quick-look-nested-folders-mac": {
    slug: "quick-look-nested-folders-mac",
    title: "Quick Look für verschachtelte Ordner auf dem Mac",
    description: "Tief verschachtelte Projektordner sind im Finder schwer zu navigieren. Du kannst den vollständigen Baum nicht sehen, ohne in jede Ebene zu klicken — es sei denn, Quick Look kann ihn dir zeigen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Moderne Projektstrukturen sind tief verschachtelt. Ein typisches Webprojekt hat Quellverzeichnisse, Build-Ausgabeordner, Konfigurationsdateien, Testverzeichnisse und Dokumentation – jedes mit eigenen Unterordnern. Das im Finder zu navigieren bedeutet, sich von Ordner zu Ordner zu klicken, dabei den Kontext zu verlieren, je tiefer man kommt, und dann wieder zurückzuklicken, um sich zu orientieren.</p>

<p>Quick Look sollte hier helfen – Leertaste bei einem Ordner drücken, um zu sehen, was drin ist. Tut es aber nicht. macOS zeigt dir Ordnername, Gesamtanzahl der Elemente und Größe. Keine Dateinamen, keine Unterordnerstruktur, keine Baumansicht. Du schaust auf einen verschlossenen Behälter und erfährst nichts über seinen Inhalt.</p>

<h2>Das Problem der Navigation verschachtelter Ordner</h2>

<p>Die Ansichtsmodi des Finders gehen jeweils anders mit verschachtelten Ordnern um, aber keiner gibt dir einen vollständigen Baum auf einen Blick:</p>

<ul>
<li><strong>Listenansicht</strong> mit Einblendedreiecken kann Verschachtelung zeigen, aber das manuelle Aufklappen mehrerer Ebenen ist langsam, und die Ansicht wird bei tiefen Strukturen unhandlich</li>
<li><strong>Spaltenansicht</strong> zeigt eine Ebene pro Spalte, aber tiefe Verschachtelung erfordert horizontales Scrollen, und du siehst immer nur einen Zweig</li>
<li><strong>Symbol- und Galerieansicht</strong> zeigen nur die oberste Ebene eines Ordners</li>
</ul>

<p>Keine davon bietet das, was du eigentlich willst: einen schnellen, reinen Lese-Überblick über den gesamten Ordnerbaum – jede Datei, jeden Unterordner, jede Verschachtelungsebene – in einer Ansicht.</p>

<h2>Den vollständigen Baum mit einem Tastendruck sehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> erweitert Quick Look, um Ordnerinhalte als vollständige Baumansicht anzuzeigen. Wähle einen beliebigen Ordner im Finder aus, drücke die Leertaste, und sieh jede Datei und jeden Unterordner darin – egal wie tief verschachtelt. Namen, Größen und die gesamte Hierarchie sind sofort sichtbar.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Das Gedächtnis auffrischen</h3>
<p>Du hast seit Monaten nicht an einem Projekt gearbeitet. Bevor du wieder einsteigst, wählst du den Projekt-Stammordner aus und drückst die Leertaste. Der vollständige Baum erinnert dich daran, wie das Projekt organisiert ist – wo die Quelldateien liegen, wo die Build-Ausgabe hingeht, wo die Konfiguration liegt. Kein Klicken in Unterordner, kein Raten.</p>

<h3>Build-Ausgaben überprüfen</h3>
<p>Nach einem Build- oder Export-Vorgang drückst du die Leertaste beim Ausgabeordner, um zu bestätigen, dass alles am richtigen Ort gelandet ist. Sieh den vollständigen Baum der generierten Dateien, ohne den Ordner zu öffnen und manuell durch den Inhalt zu navigieren.</p>

<h3>Ordnerstrukturen teilen</h3>
<p>Musst du jemandem zeigen, wie ein Projekt organisiert ist? Drück die Leertaste beim Stammordner und mach einen Screenshot der Baumansicht. Das geht schneller, als die Struktur mündlich zu beschreiben oder mit einem Terminal-Befehl einen Baum zu erzeugen.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "safe-download-preview-mac": {
    slug: "safe-download-preview-mac",
    title: "Sichere Download-Vorschau auf dem Mac — Inhalt sehen, bevor du etwas ausführst",
    description: "Du hast eine komprimierte Datei aus dem Internet heruntergeladen und willst prüfen, was drin ist, bevor du sie entpackst oder etwas ausführst. macOS bietet keine Möglichkeit, Archive zu inspizieren.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jeden Tag laden Mac-Nutzer komprimierte Dateien von Websites, E-Mail-Anhängen und Cloud-Diensten herunter. Bevor man diese Dateien entpackt oder öffnet, stellt sich eine vernünftige Frage: Was ist eigentlich drin? Enthält diese ZIP-Datei das versprochene PDF-Dokument, oder etwas Unerwartetes? Hat diese RAR-Datei die benötigten Assets, oder ist es die völlig falsche Datei?</p>

<p>macOS hilft dir nicht, diese Frage zu beantworten. Gatekeeper prüft, ob eine App signiert ist, und XProtect sucht nach bekannter Malware, aber keines von beiden sagt dir, welche Dateien in einem komprimierten Archiv stecken. Quick Look zeigt Dateiname und Größe – nichts über den Inhalt.</p>

<h2>Warum die Vorschau von Downloads wichtig ist</h2>

<p>Ein heruntergeladenes Archiv zu entpacken ist eine Vertrauensentscheidung. Du weist macOS an, Dateien aus einer externen Quelle auf deine Festplatte zu entpacken. Zwar hat macOS Sicherheitsmaßnahmen für das Ausführen von Anwendungen, aber es bietet kein Inspektionswerkzeug für komprimierte Dateien. Du entpackst blind und hoffst auf das Beste.</p>

<p>Ein Vorschauschritt vor dem Entpacken gibt dir grundlegendes Bewusstsein:</p>

<ul>
<li><strong>Dateityp-Verifizierung</strong> – enthält das Archiv die erwarteten Dokumenttypen? Eine ZIP-Datei, die PDFs enthalten sollte, aber ausführbare Dateien enthält, ist gut zu wissen, bevor man entpackt.</li>
<li><strong>Inhaltsvalidierung</strong> – sind die richtigen Dateien drin? Wenn du ein Schriftpaket bestellt hast, enthält das Archiv dann Schriftdateien?</li>
<li><strong>Größenprüfung</strong> – sind die einzelnen enthaltenen Dateien angemessen groß? Ein Archiv mit einer einzelnen 50-GB-Datei in einer 1-MB-ZIP ist verdächtig.</li>
</ul>

<h2>Archivinhalt mit Quick Look in der Vorschau ansehen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> fügt deinem Download-Workflow einen visuellen Vorschauschritt hinzu. Wähle eine beliebige komprimierte Datei im Finder aus – ZIP, RAR, 7z, TAR, .tar.gz, .tar.bz2 – drücke die Leertaste, und sieh die vollständige Dateiliste, bevor irgendetwas entpackt wird. Dateinamen, Größen und Ordnerstruktur sind alle sichtbar.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vor dem Entpacken prüfen</h3>
<p>Eine Datei landet in deinem Downloads-Ordner. Wähle sie aus, drücke die Leertaste, und überfliege den Inhalt. Die Baumansicht zeigt jede Datei und jeden Ordner darin. Sieht alles richtig aus, kannst du mit dem Entpacken fortfahren. Wirkt etwas seltsam, kannst du weiter nachforschen, bevor du dich festlegst.</p>

<h3>E-Mail-Anhänge screenen</h3>
<p>Eine ZIP-Datei, angehängt an eine E-Mail von einem unbekannten Absender. Drück vor dem Entpacken die Leertaste, um zu sehen, was drin ist. Du weißt sofort, ob sie die behaupteten Dokumente enthält oder etwas ganz anderes.</p>

<h3>Mehrere Downloads verwalten</h3>
<p>Du hast mehrere Archive aus verschiedenen Quellen heruntergeladen. Nutze die Pfeiltastennavigation von Quick Look, um jedes einzeln in der Vorschau anzusehen – Inhalt prüfen, entscheiden, welche du behältst, und den Rest löschen. Alles ohne eine einzige Datei zu entpacken.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "keka-alternative-mac-preview": {
    slug: "keka-alternative-mac-preview",
    title: "Keka-Alternative für den Mac — Wenn du nur in der Vorschau nachsehen willst",
    description: "Keka ist ein großartiges Komprimierungs- und Entpackungs-Tool — aber wenn du nur sehen willst, was in einem Archiv steckt, ohne zu entpacken, gibt es eine leichtere Lösung.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Keka ist eines der beliebtesten Archiv-Tools für den Mac. Es übernimmt Komprimierung und Entpacken für eine breite Palette von Formaten – ZIP, 7z, TAR, RAR und mehr. Es ist zuverlässig, gut gestaltet und leistungsstark. Aber wenn dein Hauptbedürfnis ist, vor dem Entpacken zu prüfen, was in einem Archiv steckt, verlangt Keka von dir, die vollständige Anwendung zu öffnen und den Entpackungsvorgang zu starten, um den Inhalt zu sehen.</p>

<p>Viele Nutzer installieren Keka nicht, weil sie fortgeschrittene Komprimierungsfunktionen brauchen, sondern weil macOS keine Möglichkeit bietet, Archivinhalte in der Vorschau zu sehen. Sie wollen nur eine Frage beantworten – welche Dateien sind in diesem Archiv? – und landen bei einem vollwertigen Archivmanager.</p>

<h2>Die Vorschau-Lücke, die Keka nicht schließt</h2>

<p>Keka glänzt bei dem, wofür es entwickelt wurde: Archive erstellen und entpacken. Aber es integriert sich nicht mit Quick Look. Du kannst kein Archiv im Finder auswählen, die Leertaste drücken und den Inhalt sehen. Der native Finder-Vorschau-Workflow – der, den du für Bilder, PDFs und Dokumente nutzt – erstreckt sich nicht auf Archive, selbst mit installiertem Keka.</p>

<p>Um mit Keka in ein Archiv hineinzuschauen, musst du:</p>

<ul>
<li>Keka öffnen oder die Datei auf sein Symbol ziehen</li>
<li>Warten, bis die Anwendung das Archiv liest</li>
<li>Den Inhalt in Kekas Oberfläche durchsuchen</li>
</ul>

<p>Es funktioniert, aber es ist ein Kontextwechsel. Du verlässt den Finder, interagierst mit einer separaten Anwendung, und kehrst dann zum Finder zurück, um deine Arbeit fortzusetzen. Für jemanden, der nur einen schnellen Blick auf den Inhalt werfen will, ist das mehr Aufwand als nötig.</p>

<h2>Archive in der Vorschau ansehen, ohne den Finder zu verlassen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> bleibt im Finder, wo du bereits arbeitest. Wähle eine ZIP-, RAR-, 7z-, TAR-, .tar.gz- oder .tar.bz2-Datei aus, drücke die Leertaste, und der Inhalt erscheint im Quick-Look-Fenster. Keine App zum Wechseln, kein Fenster zum Verwalten, keine Workflow-Unterbrechung.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>In Kombination mit Keka nutzen</h3>
<p>Loupe konkurriert nicht mit Keka – es übernimmt eine andere Aufgabe. Nutze Loupe, um Archivinhalte in Quick Look in der Vorschau anzusehen. Entscheidest du dich zum Entpacken, nutze Keka (oder das macOS-Archivierungsprogramm für ZIPs). Vorschau mit der Leertaste, Entpacken mit Keka – jedes Tool tut das, was es am besten kann.</p>

<h3>Schneller bei kurzen Checks</h3>
<p>Willst du nur wissen "Was ist in diesem Archiv?" – ohne Entpacken – antwortet Loupe mit einem Tastendruck. Leertaste drücken, Baumansicht überfliegen, Vorschau schließen. Du hast den Finder nie verlassen, und die gesamte Prüfung dauerte eine Sekunde.</p>

<h3>Ordnervorschauen als Bonus</h3>
<p>Über Archive hinaus fügt Loupe auch Quick-Look-Vorschauen für Ordnerinhalte hinzu. Ordner auswählen, Leertaste drücken, und den vollständigen Dateibaum sehen. Derselbe Ein-Tasten-Inspektions-Workflow, auch für Ordner angewendet.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "compress-and-preview-workflow-mac": {
    slug: "compress-and-preview-workflow-mac",
    title: "Komprimieren-und-Vorschau-Workflow auf dem Mac",
    description: "Nachdem du Dateien auf dem Mac zu einer ZIP-Datei komprimiert hast, gibt es keine Möglichkeit, den Inhalt des Archivs zu überprüfen, ohne es erneut zu entpacken. Ein richtiger Workflow braucht einen Vorschauschritt.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du wählst einen Ordner im Finder aus, klickst mit der rechten Maustaste und wählst "Komprimieren". macOS erstellt eine ZIP-Datei. Fertig – nur dass du jetzt eine Frage hast: Hat die ZIP-Datei wirklich alles korrekt erfasst? Sind alle Dateien drin? Ist die Ordnerstruktur intakt? Hast du versehentlich Dateien einbezogen, die du eigentlich weglassen wolltest?</p>

<p>Auf macOS gibt es keine Möglichkeit, das zu überprüfen, ohne das gerade erstellte Archiv zu entpacken. Rechtsklick, Komprimieren, dann Doppelklick zum Entpacken und Prüfen – ein Hin und Her, das den Zweck des Komprimierens von vornherein zunichtemacht.</p>

<h2>Das Problem der Überprüfung nach dem Komprimieren</h2>

<p>Eine ZIP-Datei zu erstellen ist auf macOS einfach. Sie zu überprüfen nicht. Der typische Workflow sieht so aus:</p>

<ol>
<li>Dateien oder einen Ordner im Finder auswählen</li>
<li>Rechtsklick und "Komprimieren" wählen</li>
<li>macOS erstellt eine .zip-Datei</li>
<li>Du willst den Inhalt überprüfen – aber Quick Look zeigt nur die Dateigröße</li>
<li>Du doppelklickst die ZIP-Datei, um sie zu entpacken</li>
<li>Du durchsuchst den entpackten Ordner, um zu überprüfen, dass alles stimmt</li>
<li>Du löschst den entpackten Ordner</li>
</ol>

<p>Schritte 5 bis 7 sind reiner Mehraufwand. Du hattest die Dateien bereits – du willst nur bestätigen, dass das Archiv sie korrekt erfasst hat. Zum Überprüfen entpacken und dann die Entpackung wieder löschen ist verschwendete Mühe.</p>

<p>Das fällt am meisten ins Gewicht, wenn du die ZIP-Datei mit jemand anderem teilst. Ein unvollständiges oder falsch strukturiertes Archiv an einen Kunden oder Kollegen zu schicken, ist peinlich und verschwendet auch dessen Zeit.</p>

<h2>Komprimieren, dann mit der Leertaste in der Vorschau prüfen</h2>

<p>Mit installiertem <a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> wird der Workflow zu: Komprimieren, ZIP-Datei auswählen, Leertaste drücken, prüfen. Der vollständige Inhalt erscheint als Baumansicht in Quick Look – Dateinamen, Größen und Ordnerstruktur. Du kannst in einer Sekunde bestätigen, dass das Archiv korrekt ist, ohne irgendetwas zu entpacken.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vor dem Versenden überprüfen</h3>
<p>Du hast einen Projektordner komprimiert, um ihn mit einem Kunden zu teilen. Bevor du ihn an eine E-Mail anhängst oder hochlädst, drückst du die Leertaste, um zu bestätigen, dass jede erwartete Datei enthalten ist. Erkenne fehlende Assets, überflüssige Dateien oder falsche Ordnerstrukturen, bevor der Empfänger sie sieht.</p>

<h3>Backup-Archive prüfen</h3>
<p>Du archivierst alte Projekte als ZIP-Dateien, um Speicherplatz zu sparen. Nach dem Komprimieren drückst du bei der ZIP-Datei die Leertaste, um zu überprüfen, dass der gesamte Inhalt erhalten geblieben ist. Lösche dann sicher den Originalordner, im Wissen, dass das Archiv vollständig ist.</p>

<h3>Archivinhalt iterativ anpassen</h3>
<p>Du merkst, dass in der ZIP-Datei eine Datei fehlt oder etwas enthalten ist, das nicht drin sein sollte. Kein Entpacken und erneutes Komprimieren nötig – füge die Datei einfach im Originalordner hinzu oder entferne sie, komprimiere erneut, und sieh dir die neue ZIP-Datei mit der Leertaste in der Vorschau an. Der Vorschauschritt macht den Iterationszyklus schneller.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
  "mac-finder-preview-pane-archives": {
    slug: "mac-finder-preview-pane-archives",
    title: "Die Mac-Finder-Vorschauspalte kann keine Archive anzeigen — hier ist eine Lösung",
    description: "Die Vorschauspalte im Finder zeigt Miniaturansichten für Bilder und Dokumente, aber bei ZIP-, RAR- oder 7z-Dateien nichts Brauchbares. Es gibt einen Weg, diese Lücke zu schließen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Der Finder hat eine eingebaute Vorschauspalte – erreichbar über Darstellung > Vorschau einblenden –, die Dateiinformationen und Miniaturansichten auf der rechten Seite des Fensters zeigt. Bei Bildern zeigt sie eine Miniaturansicht. Bei Dokumenten zeigt sie eine Seitenvorschau. Bei Videos bekommst du ein Standbild. Es ist eine nützliche passive Vorschau, die sich aktualisiert, während du durch Dateien klickst.</p>

<p>Aber bei komprimierten Archiven zeigt die Vorschauspalte fast nichts. Wähle eine ZIP-Datei aus, und du siehst Name, Größe, Datum und ein generisches Archivsymbol. Wähle eine RAR- oder 7z-Datei aus, und du bekommst sogar noch weniger – oft nur ein leeres Symbol. Keine Dateiliste, kein Hinweis darauf, was drin ist, keine brauchbare Vorschau überhaupt.</p>

<h2>Die blinde Stelle der Vorschauspalte bei Archiven</h2>

<p>Die Vorschauspalte des Finders und Quick Look sind verwandt, aber unterschiedlich. Die Vorschauspalte bietet eine dauerhafte Seitenleisten-Vorschau, ohne dass du eine Taste drücken musst. Quick Look (Leertaste) bietet eine größere, fokussierte Vorschau in einem schwebenden Fenster. Beide teilen dieselbe Einschränkung bei Archiven: Keines zeigt den Inhalt.</p>

<p>Das bedeutet, dass egal wie du Dateien im Finder durchsuchst – ob du dich auf die Vorschauspalte für passives Browsen verlässt oder auf Quick Look für aktive Inspektion – komprimierte Archive unsichtbare Behälter sind. Du kannst sie in deiner Dateiliste sehen, aber du kannst nicht sehen, was drin ist, ohne zu entpacken.</p>

<p>Für Nutzer, die häufig mit Archiven arbeiten – Lieferungen erhalten, Backups verwalten, Downloads sortieren – erzwingt diese blinde Stelle einen ständigen Zyklus aus Entpacken, Prüfen und Aufräumen. Jede Archivprüfung erfordert, den Finder-Browsing-Ablauf zu verlassen.</p>

<h2>Quick Look dazu bringen, Archivinhalte zu zeigen</h2>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe</a> erweitert Quick Look um die Vorschau von ZIP-, RAR-, 7z-, TAR-, .tar.gz- und .tar.bz2-Dateien. Wähle ein Archiv im Finder aus, drücke die Leertaste, und der vollständige Dateibaum erscheint – jede Datei, jeder Ordner, mit Namen und Größen. Es macht aus Archiven undurchsichtige Behälter durchsuchbare Dateilisten.</p>

<a href="https://apps.apple.com/app/loupe/id6806599791" target="_blank" rel="noopener" style="display:block"><img src="/apps/loupe.png" alt="Loupe screenshot" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gemischte Dateisammlungen durchsuchen</h3>
<p>Ein Ordner enthält Bilder, PDFs und mehrere ZIP-Dateien. Während du bei geöffnetem Quick Look mit den Pfeiltasten durch die Dateien navigierst, zeigen Bilder Miniaturansichten, PDFs zeigen Seiten, und ZIP-Dateien zeigen ihren vollständigen Inhaltsbaum. Jeder Dateityp bekommt eine brauchbare Vorschau – keine leeren Stellen mehr, wenn du auf ein Archiv triffst.</p>

<h3>Archivinhalte auf einen Blick identifizieren</h3>
<p>Du hast ein Dutzend Archive mit wenig aussagekräftigen Namen wie "export.zip" und "dateien.rar". Drück bei jedem die Leertaste, um den tatsächlichen Inhalt zu sehen. Die Baumansicht sagt dir in einer Sekunde mehr, als der Dateiname jemals könnte.</p>

<h3>Ordnervorschauen inklusive</h3>
<p>Neben Archiven erweitert Loupe auch Quick Look um die Vorschau von Ordnerinhalten. Ordner auswählen, Leertaste drücken, und den vollständigen Dateibaum sehen. Zwei verbreitete Vorschau-Lücken im Finder – Archive und Ordner – mit einer einzigen Erweiterung behoben.</p>

<p><a href="https://apps.apple.com/app/loupe/id6806599791">Loupe im Mac App Store holen</a></p>
`,
  },
};
