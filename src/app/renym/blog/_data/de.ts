import type { ArticleSet } from "./index";

export const deArticles: ArticleSet = {
  "rename-multiple-files-mac": {
    slug: "rename-multiple-files-mac",
    title: "Wie du mehrere Dateien auf dem Mac umbenennst",
    description: "Dateien einzeln umzubenennen verschwendet Stunden, die du für echte Arbeit nutzen könntest. macOS bietet dir ein paar eingebaute Optionen, die aber schnell an ihre Grenzen stoßen, sobald du mehr als einfache fortlaufende Nummerierung brauchst.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast einen Ordner voller Dateien mit furchtbaren Namen. Vielleicht kommen sie von einer Kamera, einem Scanner oder einem Kunden, der "final_final_v3_ECHT.pdf" für eine akzeptable Namenskonvention hält. Du musst sie alle in etwas Geordnetes umbenennen. Auf dem Mac hast du ein paar Optionen — aber die meisten stoßen überraschend schnell an eine Wand.</p>

<p>Wenn du schon mal zwanzig Minuten damit verbracht hast, Dateien einzeln im Finder umzubenennen, kennst du den Schmerz. Und wenn du die eingebaute Stapelumbenennung des Finders ausprobiert hast, weißt du, dass sie die Grundlagen abdeckt, dich aber genau dann im Stich lässt, wenn du echte Kontrolle brauchst.</p>

<h2>Was macOS dir von Haus aus bietet</h2>

<p>Der Finder hat tatsächlich eine Stapelumbenennungsfunktion. Mehrere Dateien auswählen, Rechtsklick, "Umbenennen" wählen. Du bekommst drei Modi: Text ersetzen, Text hinzufügen oder formatieren (fortlaufende Nummerierung). Für einfache Aufgaben — ein Präfix hinzufügen oder ein Wort ersetzen — funktioniert das. Aber die Einschränkungen zeigen sich schnell:</p>

<ul>
  <li>Kein Regex oder Mustervergleich</li>
  <li>Keine Möglichkeit, bestimmte Zeichen nach Position zu entfernen</li>
  <li>Keine Vorschau, wie die finalen Namen aussehen werden, bevor du bestätigst</li>
  <li>Kein mehrstufiges Umbenennen — du bekommst nur eine Operation gleichzeitig</li>
  <li>Kein Rückgängig, wenn dir bei Hunderten von Dateien ein Fehler unterläuft</li>
</ul>

<p>Für alles jenseits trivialer Umbenennungen brauchst du ein dediziertes Werkzeug.</p>

<h2>Der visuelle Pipeline-Ansatz</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> verfolgt einen anderen Ansatz für Stapelumbenennungen. Statt eines einzelnen Textfelds und eines "Los"-Buttons baust du eine visuelle Pipeline aus Umbenennungsaktionen. Jeder Schritt transformiert den Dateinamen, und du stapelst so viele Schritte, wie du brauchst.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym Stapelumbenennungs-Pipeline auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ziehen, Vorschau, Anwenden</h3>

<p>Ziehe deine Dateien in Renym und siehe sofort die aktuellen Namen neben einer Live-Vorschau dessen, was sie werden. Jede Aktion, die du hinzufügst, aktualisiert die Vorschau in Echtzeit, sodass du genau weißt, wie das Ergebnis aussehen wird, bevor du auch nur eine Datei anfasst.</p>

<h3>Mehrere Operationen stapeln</h3>

<p>Musst du ein Präfix entfernen, Unterstriche durch Bindestriche ersetzen und fortlaufende Nummern hinzufügen? Baue eine dreistufige Pipeline. Jeder Schritt speist in den nächsten, und du kannst Schritte neu anordnen oder entfernen, ohne von vorn zu beginnen.</p>

<h3>Rückgängig machen, wenn etwas schiefgeht</h3>

<p>300 Dateien umbenannt und gemerkt, dass Schritt zwei falsch war? Renym unterstützt Rückgängig machen, sodass du den gesamten Stapel zurücksetzen und es erneut versuchen kannst. Kein manuelles Korrigieren von Namen einer nach dem anderen.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "batch-rename-photos-mac": {
    slug: "batch-rename-photos-mac",
    title: "Wie du Fotos stapelweise auf dem Mac umbenennst",
    description: "Kameradateien mit Namen wie IMG_4872.JPG verraten dir nichts darüber, was auf dem Foto ist oder wann das Shooting stattfand. Sie manuell umzubenennen ist unrealistisch, wenn du Hunderte aus einer einzigen Session hast.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jede Kamera, egal ob DSLR, spiegellos oder dein iPhone, wirft Dateien mit Namen wie IMG_4872.JPG, DSC_0034.CR2 oder P1040291.RW2 aus. Diese Namen bedeuten nichts. Wenn du 400 Fotos von einem Hochzeitsshooting oder einer Produktsession hast, ist das Scrollen durch bedeutungslose Zahlen, um das richtige Bild zu finden, Zeitverschwendung.</p>

<p>Du willst Namen wie "Johnson_Hochzeit_001.jpg" oder "Produktshooting_März_001.CR2" — etwas, das du tatsächlich durchsuchen und sortieren kannst. Aber 400 Dateien von Hand umzubenennen passiert einfach nicht.</p>

<h2>Warum der Finder für Fotoumbenennung nicht ausreicht</h2>

<p>Die Stapelumbenennung des Finders kann fortlaufende Nummern hinzufügen und Text ersetzen, aber Fotografen brauchen mehr:</p>

<ul>
  <li>Das ursprüngliche Kamerapräfix (IMG_, DSC_ usw.) entfernen und durch einen eigenen Namen ersetzen</li>
  <li>Nullaufgefüllte fortlaufende Nummern hinzufügen (001, 002, 003 statt 1, 2, 3)</li>
  <li>Dateierweiterungen beibehalten, während alles andere geändert wird</li>
  <li>Gemischte Formate aus demselben Shooting handhaben (JPG + RAW)</li>
  <li>Alle 400 Namen vor der Umbenennung in der Vorschau sehen</li>
</ul>

<p>Der Finder kann einige davon, aber nicht alle gleichzeitig, und nie mit einer Live-Vorschau des gesamten Stapels.</p>

<h2>Fotostapel mit einer Pipeline umbenennen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> handhabt Fotoumbenennungen mit einer visuellen Pipeline, die es dir erlaubt, Operationen miteinander zu verketten. Hier ist ein typischer Foto-Umbenennungs-Workflow:</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym benennt einen Stapel Fotos auf macOS um" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Schritt 1: Kamerapräfix entfernen</h3>

<p>Nutze Suchen und Ersetzen, um "IMG_" oder "DSC_" aus jedem Dateinamen zu entfernen. Das funktioniert für den gesamten Stapel auf einmal.</p>

<h3>Schritt 2: Einen beschreibenden Namen einfügen</h3>

<p>Füge dein eigenes Präfix hinzu — den Kundennamen, Projektnamen oder die Shooting-Beschreibung. Jede Datei im Stapel bekommt dasselbe Präfix.</p>

<h3>Schritt 3: Fortlaufende Nummerierung hinzufügen</h3>

<p>Hänge nullaufgefüllte Nummern an, damit Dateien korrekt sortiert werden. 001, 002, 003 statt 1, 10, 100, 2, 20 — was du ohne Nullauffüllung bekommst.</p>

<h3>Live-Vorschau vor dem Bestätigen</h3>

<p>Jeder Schritt aktualisiert eine Live-Vorschauspalte. Du siehst "IMG_4872.JPG" links und "Johnson_Hochzeit_001.JPG" rechts. Kein Rätselraten, keine Fehler, kein manuelles Korrigieren von 400 Dateien nach einer schiefgelaufenen Umbenennung.</p>

<p>Wenn etwas falsch aussieht, ordne die Schritte neu an, passe einen Parameter an oder entferne einen Schritt ganz. Die Vorschau aktualisiert sich sofort.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-files-regex-mac": {
    slug: "rename-files-regex-mac",
    title: "Wie du Dateien mit Regex auf dem Mac umbenennst",
    description: "Wenn Dateinamen Mustern folgen — eingebettete Daten im Text, Versionsnummern, zufällige Präfixe — kann einfaches Suchen und Ersetzen das nicht bewältigen. Reguläre Ausdrücke können es, aber macOS bietet native Regex-Umbenennung nicht an.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Du hast einen Ordner voller Dateien wie "bericht_2026-03-15_entwurf_v2.pdf" und musst nur das Datum extrahieren und neu formatieren, oder alles nach dem Unterstrich entfernen, oder ein Muster ersetzen, das von Datei zu Datei variiert. Einfacher Textersatz kann das nicht bewältigen, weil der Text nicht in jeder Datei gleich ist — er folgt einem Muster.</p>

<p>Reguläre Ausdrücke (Regex) sind das Werkzeug für musterbasierte Textmanipulation. Sie lassen dich Teile eines Dateinamens basierend auf Regeln statt exakten Zeichenfolgen abgleichen, erfassen und umordnen. Das Problem ist, dass macOS dir nirgendwo im Finder Regex-Umbenennung bietet.</p>

<h2>Der Terminal-Ansatz und warum die meisten ihn meiden</h2>

<p>Du kannst Dateien mit Regex über Terminal-Befehle wie <code>rename</code>, <code>sed</code> oder eine Bash-Schleife mit Parametererweiterung umbenennen. Zum Beispiel:</p>

<p><code>for f in *.pdf; do mv "$f" "$(echo "$f" | sed 's/entwurf_v[0-9]*/final/')"; done</code></p>

<p>Das funktioniert, hat aber echte Nachteile:</p>

<ul>
  <li>Keine Vorschau — du siehst das Ergebnis erst, nachdem die Umbenennung passiert ist</li>
  <li>Ein Tippfehler im Regex und du hast verstümmelte Dateinamen ohne Rückgängig</li>
  <li>Regex in einer Einzeiler-Zeile zu schreiben und zu debuggen ist schmerzhaft</li>
  <li>Nicht-technische Nutzer können diesen Ansatz realistisch nicht verwenden</li>
</ul>

<p>Selbst erfahrene Entwickler vermeiden Terminal-Umbenennung für große Stapel, weil das Risiko irreversibler Fehler zu hoch ist.</p>

<h2>Regex-Umbenennung mit Live-Vorschau</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> enthält volle Regex-Unterstützung in seiner Suchen-und-Ersetzen-Aktion. Du schreibst ein Regex-Muster, definierst einen Ersatz (einschließlich Verweisen auf Erfassungsgruppen) und siehst das Ergebnis für jede Datei in Echtzeit — bevor irgendetwas umbenannt wird.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym Regex-Dateiumbenennung mit Live-Vorschau auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Erfassungsgruppen in Aktion</h3>

<p>Angenommen, deine Dateien heißen "2026-03-15_projekt_alpha.pdf" und du willst "projekt_alpha_2026-03-15.pdf." Schreibe einen Regex, der das Datum und den Projektnamen als separate Gruppen erfasst, und ordne sie dann im Ersatzfeld neu an. Die Vorschauspalte zeigt sofort den neuen Namen jeder Datei.</p>

<h3>Musterbasiertes Entfernen</h3>

<p>Musst du alle Versionssuffixe wie "_v1", "_v2", "_v14" entfernen? Ein Regex wie <code>_v\\d+</code> trifft alle davon, unabhängig von der Zahl. Eine Aktion, ein Muster, jede Datei bereinigt.</p>

<h3>Regex mit anderen Aktionen kombinieren</h3>

<p>Regex ist nur eine Aktion in der Pipeline. Nach einer Regex-Ersetzung kannst du fortlaufende Nummerierung hinzufügen, Groß-/Kleinschreibung ändern oder Text einfügen. Jeder Schritt baut auf dem letzten auf, und die Vorschau spiegelt die gesamte Kette wider.</p>

<p>Wenn du je eine Stunde damit verbracht hast, einen Terminal-Umbenennungsbefehl zu debuggen, oder Regex ganz gemieden hast, weil es keine Möglichkeit gab, das Ergebnis vorherzusehen, löst Renym beide Probleme auf einmal.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "mac-finder-rename-limitations": {
    slug: "mac-finder-rename-limitations",
    title: "Die Umbenennungsfunktion des Mac Finders ist begrenzt — das kann sie nicht",
    description: "Das Umbenennungswerkzeug des Finders erledigt die Grundlagen, aber sobald du Regex, mehrstufige Operationen oder eine echte Vorschau brauchst, kann es nicht helfen. Hier siehst du, wo es scheitert und was du stattdessen verwenden solltest.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Apple hat vor Jahren die Stapelumbenennung zum Finder hinzugefügt, und für einfache Aufgaben ist das in Ordnung. Dateien auswählen, Rechtsklick, "X Objekte umbenennen", eine Option wählen, fertig. Aber wenn du je versucht hast, etwas etwas Komplexeres zu tun — Zeichen von einer bestimmten Position entfernen, zwei Umbenennungsoperationen verketten oder einen Mustervergleich verwenden — bist du an die Wand gestoßen. Die Umbenennung des Finders ist ein Einsteigerwerkzeug und hat sich seit Jahren nicht nennenswert verbessert.</p>

<h2>Was die Finder-Umbenennung kann</h2>

<p>Um fair zu sein, der Finder deckt drei grundlegende Operationen ab:</p>

<ul>
  <li><strong>Text ersetzen:</strong> Eine Zeichenfolge finden und durch eine andere ersetzen. Funktioniert für alle ausgewählten Dateien gleichzeitig.</li>
  <li><strong>Text hinzufügen:</strong> Eine Zeichenfolge vor oder nach jedem Dateinamen einfügen.</li>
  <li><strong>Formatieren:</strong> Fortlaufende Nummern mit einem eigenen Präfix anwenden. Startnummer und Schrittweite wählen.</li>
</ul>

<p>Um "Bericht" bei zehn Dateien in "Rechnung" umzubenennen oder ein Datumspräfix hinzuzufügen, ist das völlig ausreichend.</p>

<h2>Wo die Finder-Umbenennung scheitert</h2>

<h3>Kein Regex oder Mustervergleich</h3>
<p>Das Ersetzen des Finders ist nur literaler Text. Du kannst keine Muster wie "jede Ziffer" oder "alles nach dem letzten Unterstrich" abgleichen. Wenn deine Dateinamen in ihrer Struktur variieren, kann der Finder nicht helfen.</p>

<h3>Keine mehrstufigen Operationen</h3>
<p>Du bekommst eine Operation pro Umbenennung. Wenn du Text ersetzen UND eine Nummer hinzufügen UND die Groß-/Kleinschreibung ändern musst, musst du drei separate Umbenennungsoperationen ausführen und die Dateien jedes Mal neu auswählen.</p>

<h3>Keine echte Vorschau</h3>
<p>Der Finder zeigt im Umbenennungsdialog ein Beispiel des neuen Namens der ersten Datei, aber du kannst nicht die vollständige Liste der Vorher-Nachher-Namen sehen. Bei 200 Dateien vertraust du darauf, dass ein Beispiel den gesamten Stapel repräsentiert.</p>

<h3>Kein Entfernen von Zeichen nach Position</h3>
<p>Musst du die ersten 4 Zeichen aus jedem Dateinamen entfernen? Oder die letzten 8? Der Finder hat dafür keine Operation. Du müsstest manuell einen Ersatz konstruieren, und selbst dann funktioniert das nur, wenn diese Zeichen zufällig bei allen Dateien identisch sind.</p>

<h3>Kein Rückgängig für Stapelumbenennungen</h3>
<p>Wenn du 500 Dateien umbenennst und das Ergebnis falsch ist, macht Cmd-Z es rückgängig — aber nur unmittelbar danach. Schließe das Finder-Fenster oder führe eine andere Operation aus, und die Rückgängig-Historie ist weg. Du bleibst mit manueller Namenskorrektur zurück.</p>

<h2>Was du stattdessen verwenden solltest</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> setzt genau dort an, wo der Finder aufhört. Es gibt dir jede Operation, die der Finder hat — plus Regex, Zeichenentfernung nach Position, Groß-/Kleinschreibungsänderungen, mehrstufige Pipelines und eine vollständige Vorher-Nachher-Vorschau für jede Datei im Stapel.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym visuelle Umbenennungs-Pipeline gegenüber Finder-Einschränkungen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Du baust eine Pipeline aus Umbenennungsaktionen, ordnest sie neu an, siehst das Ergebnis für jede Datei in der Vorschau und wendest sie an, wenn du zufrieden bist. Wenn du nicht zufrieden bist, machst du den gesamten Stapel rückgängig und passt an. Kein Rätselraten, keine wiederholten Auswahlen, kein Hoffen, dass 500 Dateien richtig herausgekommen sind.</p>

<p>Die Finder-Umbenennung ist für die 10% der Umbenennungsaufgaben in Ordnung, die trivial sind. Für alles andere brauchst du ein echtes Werkzeug.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "name-mangler-alternative-mac": {
    slug: "name-mangler-alternative-mac",
    title: "Name Mangler Alternative für Mac",
    description: "Suchst du eine Dateiumbenennungs-App, die Regex, fortlaufende Nummerierung und mehrstufige Pipelines ohne die Lernkurve veralteter Werkzeuge bewältigt? Hier ist eine moderne Option.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Name Mangler ist seit Jahren ein beliebter Stapel-Dateiumbenenner auf dem Mac. Es ist mächtig, unterstützt Regex und bewältigt komplexe Umbenennungsketten. Aber es trägt auch das Gewicht eines Designs, das sich nicht viel weiterentwickelt hat. Wenn du Name Mangler ausprobiert und es komplexer gefunden hast, als es sein müsste — oder wenn du nach einer Alternative suchst, die sich für modernes macOS nativ anfühlt — gibt es eine neuere Option, die einen Blick wert ist.</p>

<h2>Was Leute an Name Mangler mögen</h2>

<p>Name Mangler hat sich seinen Ruf aus guten Gründen verdient:</p>

<ul>
  <li>Regex-Unterstützung für musterbasierte Umbenennung</li>
  <li>Mehrstufige Umbenennungsketten (genannt "Droplets" und "erweiterter" Modus)</li>
  <li>Vorschau der Dateinamen vor dem Anwenden</li>
  <li>Unterstützt eine breite Palette von Umbenennungsoperationen</li>
</ul>

<p>Für Power-User, die die Oberfläche gelernt haben, funktioniert es. Aber viele Nutzer berichten, dass sich die UI veraltet anfühlt, die Lernkurve für eine eigentlich unkomplizierte Aufgabe steil ist und einfachere Workflows mehr Klicks erfordern als erwartet.</p>

<h2>Worauf du bei einer Alternative achten solltest</h2>

<p>Eine gute Name-Mangler-Alternative sollte die Power beibehalten — Regex, mehrstufige Pipelines, Live-Vorschau — während sie die Oberfläche zugänglicher macht. Konkret:</p>

<ul>
  <li>Ein visueller Pipeline-Builder, bei dem du Schritte sehen und neu anordnen kannst</li>
  <li>Drag-and-Drop-Dateieingabe statt menügesteuerter Dateiauswahl</li>
  <li>Echtzeit-Vorschau, die sich aktualisiert, während du jeden Schritt bearbeitest</li>
  <li>Vollständige Rückgängig-Unterstützung für die gesamte Umbenennungsoperation</li>
  <li>Ein natives macOS-Aussehen, das sich nicht anfühlt, als wäre es vor zehn Jahren entworfen worden</li>
</ul>

<h2>Renym als Alternative</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> deckt denselben Kernfunktionsumfang wie Name Mangler ab — Regex-Suchen-und-Ersetzen, fortlaufende Nummerierung, Zeichen einfügen und entfernen, Groß-/Kleinschreibungsänderungen — verpackt es aber in eine visuelle Pipeline-Oberfläche.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym als Name-Mangler-Alternative auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Visuelle Pipeline</h3>
<p>Jede Umbenennungsaktion ist ein sichtbarer Schritt in einer Pipeline. Ziehen zum Neuordnen, Klicken zum Bearbeiten, Löschen zum Entfernen. Du siehst die Kette auf einen Blick, ohne durch Tabs oder Dialoge zu navigieren.</p>

<h3>Drag-and-Drop-Workflow</h3>
<p>Ziehe Dateien direkt in die App. Keine Dateiauswahl-Dialoge, keine Menünavigation. Lass einen Ordner oder eine Auswahl von Dateien fallen und beginne sofort mit dem Bau deiner Pipeline.</p>

<h3>Live-Vorher-Nachher-Vorschau</h3>
<p>Jede Datei zeigt ihren aktuellen Namen und ihren neuen Namen nebeneinander. Änderungen aktualisieren sich in Echtzeit, während du jeden Schritt in der Pipeline bearbeitest. Du siehst das vollständige Ergebnis für jede Datei, nicht nur ein Beispiel.</p>

<h3>Vollständiges Rückgängig</h3>
<p>Eine Umbenennung angewendet und das Ergebnis ist nicht richtig? Mache den gesamten Stapel rückgängig und versuche es erneut. Kein manuelles Zurücksetzen von 500 Dateinamen.</p>

<p>Wenn Name Mangler dein Go-to war und du dieselbe Power mit einer saubereren Erfahrung willst, lohnt sich ein Blick auf Renym.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-hundreds-of-files-mac": {
    slug: "rename-hundreds-of-files-mac",
    title: "Wie du Hunderte von Dateien gleichzeitig auf dem Mac umbenennst",
    description: "Zehn Dateien von Hand umzubenennen ist mühsam. Hunderte umzubenennen ist ohne das richtige Werkzeug unmöglich. macOS hat begrenzte eingebaute Optionen, und der Terminal-Ansatz riskiert irreversible Fehler.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast 600 Dateien, die von einem Scanner, einem Export, einer Datenmigration oder einer Kundenübergabe stammen. Die Namen sind Müll — zufällige Zeichenfolgen, doppelte Präfixe, inkonsistente Formatierung, falsche Erweiterungen. Du musst alle 600 in etwas Geordnetes, Durchsuchbares und Konsistentes umbenennen. Jetzt sofort.</p>

<p>Zehn Dateien von Hand umzubenennen dauert eine Minute. 600 umzubenennen kostet dich den Rest deines Nachmittags — und du wirst Fehler machen. Tippfehler, übersehene Dateien, inkonsistente Formatierung. Je größer der Stapel, desto fehleranfälliger wird das manuelle Umbenennen.</p>

<h2>Warum große Stapel die üblichen Ansätze sprengen</h2>

<h3>Finder</h3>
<p>Die Stapelumbenennung des Finders bewältigt einfache Operationen für beliebig viele Dateien. Aber bei 600 Dateien ist das Fehlen einer vollständigen Vorschau ein echtes Problem. Du siehst einen Beispielnamen im Dialog und hoffst, dass die anderen 599 richtig herauskommen. Und wenn nicht, bemerkst du es vielleicht erst später — wenn Rückgängig nicht mehr verfügbar ist.</p>

<h3>Terminal</h3>
<p>Eine Bash-Schleife oder ein <code>rename</code>-Befehl kann 600 Dateien in Sekunden verarbeiten. Aber es gibt keine Vorschau, kein Rückgängig, und ein Fehler im Befehl bedeutet 600 kaputte Dateinamen. Das Risiko skaliert mit der Stapelgröße.</p>

<h3>Umbenennung per Tabellenkalkulation</h3>
<p>Manche exportieren Dateinamen in eine Tabellenkalkulation, manipulieren sie mit Formeln und verwenden dann ein Skript, um die neuen Namen anzuwenden. Das funktioniert, erfordert aber einen absurden Aufwand für etwas, das eine Drag-and-Drop-Operation sein sollte.</p>

<h2>Umbenennung im großen Maßstab mit Sicherheit</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> ist genau für dieses Szenario gebaut. Ziehe Hunderte von Dateien hinein, baue eine Umbenennungs-Pipeline, sieh jedes einzelne Ergebnis in der Vorschau und wende an. Wenn das Ergebnis falsch ist, mache es rückgängig und passe an.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym benennt Hunderte von Dateien gleichzeitig auf macOS um" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vollständige Vorschau bei jeder Größenordnung</h3>
<p>Ob du 20 Dateien oder 2.000 hast — die Vorschau zeigt den aktuellen und zukünftigen Namen jeder Datei. Scrolle durch die Liste und verifiziere, bevor du bestätigst. Kein Rätselraten.</p>

<h3>Mehrstufige Pipelines für komplexe Umbenennungen</h3>
<p>Große Stapel brauchen oft mehrere Operationen: ein Präfix entfernen, Zeichen ersetzen, Nummerierung hinzufügen, Groß-/Kleinschreibung ändern. Baue die gesamte Kette, sieh das Endergebnis in der Vorschau und wende alles auf einmal an.</p>

<h3>Den gesamten Stapel rückgängig machen</h3>
<p>Die Umbenennung angewendet und ein Problem entdeckt? Rückgängig setzt jede Datei im Stapel zurück. Behebe die Pipeline und versuche es erneut. Kein manuelles Zurücksetzen von Hunderten von Namen.</p>

<p>Je größer der Stapel, desto mehr lohnt sich ein dediziertes Werkzeug. Fünf Minuten in Renym zu verbringen spart Stunden manueller Arbeit und eliminiert das Risiko irreversibler Fehler.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "sequential-numbering-files-mac": {
    slug: "sequential-numbering-files-mac",
    title: "Wie du fortlaufende Nummern zu Dateinamen auf dem Mac hinzufügst",
    description: "Dateien, die in einer bestimmten Reihenfolge bleiben müssen — Folien, Frames, Seiten, Kapitel — sortieren sich nur dann richtig, wenn sie fortlaufende Nummern mit konsistenter Auffüllung haben.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine Reihe von Dateien, die in einer bestimmten Reihenfolge sein müssen: Präsentationsfolien, Animationsframes, Buchkapitel, Podcast-Episoden oder gescannte Seiten. Der einzige zuverlässige Weg, sie korrekt sortiert zu halten, ist, fortlaufende Nummern zu den Dateinamen hinzuzufügen. Klingt einfach. Ist es nicht — zumindest nicht ohne das richtige Werkzeug.</p>

<h2>Das Nullauffüllungs-Problem</h2>

<p>Wenn du Dateien als 1, 2, 3 ... 10, 11, 12 nummerierst, wird dein Dateimanager sie so sortieren:</p>

<ul>
  <li>1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9</li>
</ul>

<p>Das liegt daran, dass die meisten Dateisysteme alphabetisch sortieren, nicht numerisch. "10" kommt vor "2", weil "1" an der ersten Zeichenposition vor "2" kommt. Die Lösung ist Nullauffüllung: 01, 02, 03 ... 10, 11, 12. Für größere Mengen brauchst du mehr Ziffern: 001, 002, 003 ... 100, 101.</p>

<p>Die richtige Auffüllung zu wählen ist wichtig. Zu wenige Ziffern und deine Sortierung bricht, wenn du mehr Dateien hinzufügst. Zu viele und die Namen wirken überladen. Und du musst entscheiden, ob die Nummer am Anfang oder Ende des Dateinamens steht.</p>

<h2>Was macOS nativ bietet</h2>

<p>Die "Format"-Umbenennungsoption des Finders kann fortlaufende Nummern mit einem eigenen Namenspräfix hinzufügen. Sie handhabt Nullauffüllung und lässt dich eine Startnummer festlegen. Für eine unkomplizierte Nummerierungsaufgabe funktioniert das.</p>

<p>Aber die Finder-Nummerierung hat Grenzen:</p>

<ul>
  <li>Du kannst die Nummer nur voranstellen oder anhängen — nicht an einer bestimmten Position einfügen</li>
  <li>Du kannst Nummerierung nicht mit anderen Operationen wie Textersatz kombinieren</li>
  <li>Die Nummerierung ersetzt den gesamten Dateinamen außer der Erweiterung — du verlierst den Originalnamen</li>
  <li>Du kannst den Schrittwert nicht kontrollieren (immer +1)</li>
</ul>

<h2>Fortlaufende Nummerierung als Teil einer Pipeline</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> enthält fortlaufende Nummerierung als eine von mehreren Aktionen, die du zu einer Umbenennungs-Pipeline hinzufügen kannst. Das bedeutet, du kannst Nummerierung mit jeder anderen Operation kombinieren.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym fügt fortlaufende Nummern zu Dateinamen auf macOS hinzu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Den Originalnamen behalten und eine Nummer hinzufügen</h3>
<p>Anders als der Formatmodus des Finders lässt Renym dich eine Nummer einfügen, ohne den bestehenden Dateinamen zu löschen. Füge "001_" als Präfix hinzu, während "projekt_brief.pdf" intakt bleibt, was zu "001_projekt_brief.pdf" führt.</p>

<h3>Mit anderen Aktionen kombinieren</h3>
<p>Bereinige zuerst den Namen — entferne unerwünschte Präfixe, korrigiere die Groß-/Kleinschreibung, ersetze Zeichen — dann füge Nummerierung als letzten Schritt hinzu. Der Pipeline-Ansatz bedeutet, dass jede Operation auf der letzten aufbaut.</p>

<h3>Die Sequenz in der Vorschau ansehen</h3>
<p>Sieh jeden nummerierten Dateinamen, bevor du anwendest. Verifiziere, dass die Auffüllung korrekt ist, die Sequenz stimmt und die Nummern dort erscheinen, wo du sie willst.</p>

<p>Fortlaufende Nummerierung ist eine dieser Aufgaben, die trivial erscheinen — bis du 200 Dateien hast und die Sortierreihenfolge falsch ist. Es beim ersten Mal richtig zu machen erspart später viel Aufräumarbeit.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "remove-characters-from-filenames-mac": {
    slug: "remove-characters-from-filenames-mac",
    title: "Wie du Zeichen massenhaft aus Dateinamen auf dem Mac entfernst",
    description: "Dateinamen, die mit zusätzlichen Zeichen, zufälligen Präfixen oder unerwünschten Suffixen überladen sind, sind schwer zu durchsuchen und zu sortieren. Sie einzeln zu bereinigen ist unrealistisch, wenn du Dutzende oder Hunderte hast.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Exportierte Dateien lieben es, deinen Namen Müll hinzuzufügen. Ein Scanner fügt allem "Scan_" hinzu. Ein CMS stellt eine 12-stellige ID voran. Ein Download hängt "(1)" an, weil die Datei schon existierte. Ein Kunde sendet Dateien mit Leerzeichen, Sonderzeichen und inkonsistenter Groß-/Kleinschreibung, die deinen geordneten Ordner wie Chaos aussehen lassen.</p>

<p>Du musst diese zusätzlichen Zeichen aus Dutzenden oder Hunderten von Dateien entfernen. Es von Hand zu tun bedeutet, für jede einzelne Datei zu klicken, auszuwählen, zu löschen und Enter zu drücken. Das ist kein Workflow — das ist eine Bestrafung.</p>

<h2>Was du im Finder nicht kannst</h2>

<p>Das Umbenennungswerkzeug des Finders lässt dich Text finden und ersetzen, was einige Zeichenentfernung bewältigt. Wenn jede Datei am Anfang "Scan_" hat, kannst du "Scan_" durch nichts ersetzen. Aber der Finder kann nicht:</p>

<ul>
  <li>Zeichen nach Position entfernen (z. B. "die ersten 5 Zeichen löschen")</li>
  <li>Zeichen vom Ende entfernen (z. B. "alles nach dem letzten Unterstrich löschen")</li>
  <li>Zeichen entfernen, die einem Muster entsprechen (z. B. "jede Klammer wie (1), (2), (Kopie) löschen")</li>
  <li>Mehrere Entfernungen in einer Operation verketten</li>
</ul>

<p>Wenn die Zeichen, die du entfernen musst, bei allen Dateien nicht identisch sind, hilft die literale Textabgleichung des Finders nicht.</p>

<h2>Massenhafte Zeichenentfernung mit Renym</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> gibt dir mehrere Möglichkeiten, Zeichen aus Dateinamen zu entfernen, und du kannst sie in einer einzigen Pipeline kombinieren.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym entfernt massenhaft Zeichen aus Dateinamen auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nach Position entfernen</h3>
<p>Lösche die ersten N oder letzten N Zeichen aus jedem Dateinamen. Perfekt zum Entfernen von Präfixen oder Suffixen fester Länge, deren Inhalt variiert, aber nicht deren Länge.</p>

<h3>Nach Muster entfernen</h3>
<p>Verwende Regex, um variablen Text abzugleichen und zu entfernen. Ein Muster wie <code>\\s*\\(\\d+\\)</code> entfernt alle "(1)", "(2)", "(3)"-Suffixe unabhängig von der Zahl. Ein Muster wie <code>^[A-Z]{3}_</code> entfernt jedes dreibuchstabige Präfix gefolgt von einem Unterstrich.</p>

<h3>Per Suchen und Ersetzen entfernen</h3>
<p>Für einfache Fälle, finde den unerwünschten Text und ersetze ihn durch nichts. Funktioniert für konsistente Zeichenfolgen wie "Kopie von ", "Scan_" oder " - final".</p>

<h3>Entfernungen verketten</h3>
<p>Musst du ein Präfix entfernen UND Klammersuffixe entfernen UND doppelte Leerzeichen bereinigen, die zurückbleiben? Füge drei Aktionen zur Pipeline hinzu. Jede arbeitet mit dem Ergebnis des vorherigen Schritts, und die Live-Vorschau zeigt dir das Endergebnis für jede Datei.</p>

<p>Dateinamen sollten sauber, konsistent und durchsuchbar sein. Wenn sie es nicht sind, behebt eine fünfminütige Sitzung in Renym den gesamten Stapel.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "change-file-extension-batch-mac": {
    slug: "change-file-extension-batch-mac",
    title: "Wie du Dateierweiterungen stapelweise auf dem Mac änderst",
    description: "Falsche Dateierweiterungen brechen Workflows, verwirren Apps und führen dazu, dass Dateien im falschen Programm geöffnet werden. Sie einzeln zu ändern ist mühsam. Es im Terminal zu tun riskiert Fehler ohne Vorschau.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Ein Entwickler exportiert 200 HTML-Dateien mit einer .txt-Erweiterung. Ein Fotograf erhält RAW-Dateien, die als .jpg gespeichert sind. Eine Datenpipeline gibt CSV-Dateien ganz ohne Erweiterung aus. Der Inhalt ist in Ordnung — die Erweiterung ist falsch. Und eine falsche Erweiterung bedeutet, dass die Datei in der falschen App geöffnet wird, aus Suchergebnissen herausgefiltert wird oder einen automatisierten Workflow bricht.</p>

<p>Du musst die Erweiterung bei allen ändern. Nicht einzeln. Alle auf einmal.</p>

<h2>Der Finder-Ansatz</h2>

<p>Der Finder lässt dich technisch Erweiterungen ändern — aber nur eine Datei gleichzeitig. Rechtsklick, "Informationen", die Erweiterung im Namensfeld ändern, den Dialog bestätigen, der dich vor der Erweiterungsänderung warnt. Bei 200 Dateien dauert das absurd lange.</p>

<p>Die Stapelumbenennung des Finders kann einen Textersatz durchführen, du könntest also ".txt" durch ".html" ersetzen — aber das ist brüchig. Wenn irgendeine Datei ".txt" an anderer Stelle im Namen hat (wie "notizen_txt_backup.txt"), trifft der Ersatz die falsche Stelle. Der Finder unterscheidet nicht zwischen "der Erweiterung" und "Text, der zufällig übereinstimmt".</p>

<h2>Der Terminal-Ansatz</h2>

<p>Ein einfacher Bash-Befehl erledigt das:</p>

<p><code>for f in *.txt; do mv "$f" "\\\${f%.txt}.html"; done</code></p>

<p>Schnell und effektiv — aber keine Vorschau, kein Rückgängig, und ein Fehler im Befehl bedeutet 200 Dateien mit verstümmelten Namen. Wenn du die Anführungszeichen vergisst und ein Dateiname Leerzeichen hat, ist das Ergebnis unvorhersehbar.</p>

<h2>Stapel-Erweiterungsänderungen mit Vorschau</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> handhabt Erweiterungsänderungen als Teil seiner Umbenennungs-Pipeline. Du kannst gezielt die Erweiterung ansprechen, ohne den Rest des Dateinamens zu beeinflussen.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym ändert Dateierweiterungen stapelweise auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Die Erweiterung sicher ersetzen</h3>
<p>Nutze Suchen und Ersetzen mit einem Regex, das am Ende des Namens verankert ist, um nur die Erweiterung zu ändern, nicht übereinstimmenden Text im Dateinamen selbst. Die Vorschau zeigt dir genau, was sich bei jeder Datei ändern wird, bevor du anwendest.</p>

<h3>Eine fehlende Erweiterung hinzufügen</h3>
<p>Dateien ohne Erweiterung? Hänge ".csv" oder ".json" oder was auch immer die richtige Erweiterung sein sollte an. Die Einfügen-Aktion fügt Text am Ende des Dateinamens hinzu, nach dem letzten Zeichen.</p>

<h3>Mit anderer Bereinigung kombinieren</h3>
<p>Oft treten Erweiterungsprobleme zusammen mit anderen Namensproblemen auf. Behebe die Erweiterung und bereinige den Dateinamen in derselben Pipeline — entferne Präfixe, normalisiere die Groß-/Kleinschreibung, füge Nummerierung hinzu — alles in einem Durchgang.</p>

<h3>Bei Bedarf rückgängig machen</h3>
<p>200 Erweiterungen geändert und gemerkt, dass du die falsche gewählt hast? Mache den gesamten Stapel rückgängig. Behebe die Pipeline und wende erneut an. Kein manuelles Zurückbenennen von 200 Dateien zu ihren ursprünglichen Erweiterungen.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-files-drag-drop-mac": {
    slug: "rename-files-drag-drop-mac",
    title: "Dateien per Drag-and-Drop auf dem Mac umbenennen",
    description: "Die meisten Umbenennungswerkzeuge lassen dich zu deinen Dateien über einen Dateiauswahldialog navigieren. Wenn du die Dateien bereits in einem Finder-Fenster hast, solltest du sie direkt in das Umbenennungswerkzeug ziehen können.",
    date: "2026-09-06",
    readTime: "3 Min. Lesezeit",
    content: `
<p>Du hast ein Finder-Fenster mit den Dateien offen, die du umbenennen musst. Du weißt genau, welche das sind. Jetzt musst du sie in ein Umbenennungswerkzeug bekommen. Wenn dieses Werkzeug dich durch einen Dateiauswahldialog schickt — zum Ordner navigieren, die Dateien erneut auswählen, Öffnen klicken — machst du doppelte Arbeit ohne Grund.</p>

<p>Drag-and-Drop ist der schnellste Weg, Dateien in ein beliebiges Werkzeug zu bekommen. Im Finder auswählen, zur App ziehen, fallen lassen. Die Dateien sind geladen und du bist bereit umzubenennen. Klingt offensichtlich, aber nicht jedes Umbenennungswerkzeug unterstützt es gut.</p>

<h2>Warum Drag-and-Drop beim Umbenennen wichtig ist</h2>

<p>Stapelumbenennung ist bereits eine Aufgabe, die du so schnell wie möglich erledigen willst. Jeder zusätzliche Schritt — einen Dateiauswahldialog öffnen, Verzeichnisse navigieren, bereits ausgewählte Dateien erneut auswählen — fügt Reibung hinzu. Drag-and-Drop beseitigt diese Reibung vollständig.</p>

<p>Es lässt dich auch selektiv sein. Vielleicht willst du nicht jede Datei im Ordner — nur die 30, die du im Finder ausgewählt hast. Ziehe diese 30 hinein. Kein Filtern innerhalb des Umbenennungswerkzeugs nötig.</p>

<h2>Wie Renym Drag-and-Drop handhabt</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> ist um einen Drag-and-Drop-Workflow herum gebaut. Wähle Dateien im Finder aus, ziehe sie in das App-Fenster, und sie erscheinen sofort in der Dateiliste. Von dort aus baust du deine Umbenennungs-Pipeline und siehst die Ergebnisse in der Vorschau.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym Drag-and-Drop-Dateiumbenennung auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dateien von überall fallen lassen</h3>
<p>Ziehe Dateien aus einem beliebigen Finder-Fenster, dem Schreibtisch oder sogar aus einer anderen App, die das Ziehen von Dateiverweisen unterstützt. Renym akzeptiert sie alle.</p>

<h3>Jederzeit mehr Dateien hinzufügen</h3>
<p>Bereits einen Stapel geladen, aber gemerkt, dass du ein paar Dateien vergessen hast? Ziehe mehr hinein. Sie werden zur bestehenden Liste hinzugefügt, ohne das zu löschen, was du bereits hast.</p>

<h3>Vor dem Anwenden in der Vorschau ansehen</h3>
<p>Sobald deine Dateien fallen gelassen sind, zeigt jede Umbenennungsaktion, die du hinzufügst, eine Live-Vorschau. Der Originalname sitzt neben dem neuen Namen für jede Datei. Scrolle durch, verifiziere und wende an, wenn du dir sicher bist.</p>

<h3>Der vollständige Workflow</h3>
<ol>
  <li>Dateien im Finder auswählen</li>
  <li>In Renym ziehen</li>
  <li>Umbenennungsaktionen hinzufügen (Suchen/Ersetzen, Nummerierung, Groß-/Kleinschreibung ändern usw.)</li>
  <li>Die Vorher-Nachher-Vorschau überprüfen</li>
  <li>Auf Anwenden klicken</li>
</ol>

<p>Fünf Schritte, keine Dateiauswahldialoge, keine Dialogboxen, kein erneutes Navigieren. Nur Dateien rein, Namen raus.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "photographer-file-naming-mac": {
    slug: "photographer-file-naming-mac",
    title: "Dateinamensgebung für Fotografen auf dem Mac — Automatisiere deinen Workflow",
    description: "Ein konsistentes Dateinamenssystem spart Stunden bei der Suche und verhindert verlorene Bilder. Kamerageneriere Namen wie IMG_4872 verraten dir nichts über das Shooting, den Kunden oder das Datum.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Jeder professionelle Fotograf kennt das: Du öffnest einen Ordner mit 800 Bildern, die von IMG_4001 bis IMG_4800 benannt sind, und versuchst, die Aufnahmen von der Johnson-Zeremonie zu finden. Oder du fügst zwei Speicherkarten zusammen und entdeckst, dass beide Dateien haben, die bei DSC_0001 beginnen. Oder ein Kunde fragt nach dem "blauen Kleid-Porträt vom Empfang", und du hast keine Möglichkeit, danach zu suchen, weil jede Datei eine bedeutungslose Nummer ist.</p>

<p>Ein konsistentes Dateinamenssystem ist nicht optional — es ist der Unterschied zwischen einem durchsuchbaren Archiv und einem Friedhof zufälliger Zahlen. Das Problem ist, dass 800 Dateien nach jedem Shooting von Hand umzubenennen unrealistisch ist. Du brauchst Automatisierung.</p>

<h2>Wie ein gutes Namenssystem aussieht</h2>

<p>Die meisten professionellen Fotografen einigen sich auf eine Variation dieses Musters:</p>

<p><code>[Datum]_[Kunde/Projekt]_[Sequenz].[Erw]</code></p>

<p>Zum Beispiel: <code>2026-09-06_Johnson_Hochzeit_001.jpg</code></p>

<p>Das gibt dir:</p>

<ul>
  <li><strong>Chronologische Sortierung</strong> — Dateien aus verschiedenen Shootings sortieren sich automatisch nach Datum</li>
  <li><strong>Durchsuchbarkeit</strong> — suche "Johnson" und finde jedes Bild von diesem Kunden</li>
  <li><strong>Keine Kollisionen</strong> — zwei Shootings an unterschiedlichen Daten werden nie überlappende Dateinamen haben</li>
  <li><strong>Korrekte Sortierreihenfolge</strong> — nullaufgefüllte Nummern (001, 002) sortieren sich richtig, anders als 1, 10, 11, 2</li>
</ul>

<h2>Warum Lightroom- und Capture-One-Benennung nicht immer ausreicht</h2>

<p>Sowohl Lightroom als auch Capture One bieten Dateiumbenennung beim Import. Für Fotografen, die ausschließlich mit einem dieser Werkzeuge arbeiten, deckt die Import-Umbenennung die Grundlagen ab. Aber es gibt häufige Situationen, in denen sie versagt:</p>

<ul>
  <li>Du musst Dateien umbenennen, die bereits ohne Umbenennung importiert wurden</li>
  <li>Du arbeitest mit mehreren Werkzeugen und brauchst konsistente Benennung außerhalb eines einzelnen Katalogs</li>
  <li>Du musst Lieferungen umbenennen — exportierte JPEGs, nicht nur RAW-Dateien</li>
  <li>Ein Kunde sendet Dateien mit eigener Benennung zurück und du musst sie normalisieren</li>
  <li>Du fügst Archive von verschiedenen Kameras, Systemen oder Jahren zusammen</li>
</ul>

<p>In diesen Fällen brauchst du ein eigenständiges Umbenennungswerkzeug, das mit beliebigen Dateien funktioniert, unabhängig davon, welche App sie verwaltet.</p>

<h2>Eine Fotografen-Namenspipeline aufbauen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> lässt dich eine wiederverwendbare Pipeline für deine Namenskonvention aufbauen. Richte sie einmal ein und wende sie auf jedes Shooting an.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym Fotografen-Dateinamenspipeline auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Schritt 1: Kamerapräfix entfernen</h3>
<p>Entferne IMG_, DSC_, P10 oder was auch immer deine Kamera generiert. Eine Suchen-und-Ersetzen-Aktion erledigt das in einem Schritt, oder verwende Regex, um jedes Kamerapräfixmuster abzugleichen.</p>

<h3>Schritt 2: Deine Namensstruktur hinzufügen</h3>
<p>Füge das Datum und den Kunden-/Projektnamen ein. Das wird der durchsuchbare, menschenlesbare Teil des Dateinamens.</p>

<h3>Schritt 3: Fortlaufende Nummerierung hinzufügen</h3>
<p>Hänge nullaufgefüllte Nummern an, damit die Dateien in der Reihenfolge sortiert werden, in der sie aufgenommen wurden. Wähle die Auffüllbreite basierend auf deiner typischen Shooting-Größe — drei Ziffern für Shootings unter 1.000 Bildern, vier für größere Mengen.</p>

<h3>Schritt 4: Vorschau und Anwenden</h3>
<p>Scrolle durch die vollständige Liste der Vorher-Nachher-Namen. Verifiziere, dass die Sequenz korrekt ist, die Auffüllung richtig aussieht und die Benennung konsistent ist. Wende dann auf den gesamten Stapel auf einmal an.</p>

<h3>Umbenennung von Lieferungen</h3>
<p>Wenn du finale JPEGs für einen Kunden exportierst, brauchen sie oft andere Namen als deine Arbeitsdateien. Baue eine separate Pipeline für Lieferungen: vielleicht "Johnson_Hochzeit_Web_001.jpg" für Social-Media-Dateien und "Johnson_Hochzeit_Druck_001.tif" für Druckdateien.</p>

<p>Ein Namenssystem ist nur nützlich, wenn du es tatsächlich konsistent anwendest. Den Prozess zu automatisieren bedeutet, dass es jedes Mal passiert, bei jedem Shooting, ohne die Versuchung, es zu überspringen, weil du nach einem 10-Stunden-Hochzeitstag müde bist.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-files-lowercase-mac": {
    slug: "rename-files-lowercase-mac",
    title: "Dateien auf dem Mac in Kleinbuchstaben umbenennen",
    description: "Dateinamen mit gemischter Groß- und Kleinschreibung führen zu defekten Links, doppelten Uploads und wirken in einem gemeinsam genutzten Ordner uneinheitlich. Eine ganze Reihe von Hand in Kleinbuchstaben umzuwandeln, lohnt sich für niemanden.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast einen Ordner geerbt, in dem die Hälfte der Dateien „Report.PDF" heißt, ein Viertel „report.pdf" und der Rest „REPORT.pdf". Auf dem Mac behandelt das Dateisystem diese Namen in der Regel als identisch, solange sie sich im selben Ordner befinden — aber sobald du die Dateien auf einen Case-Sensitive-Server hochlädst, sie mit einem Linux-Rechner synchronisierst oder sie im Code referenzierst, führt die Uneinheitlichkeit zu echten Problemen. Defekte Links, doppelte Uploads und Dateipfade, die nur auf deinem eigenen Rechner funktionieren, sind typische Symptome.</p>

<p>Die Lösung klingt einfach: Jeden Dateinamen in Kleinbuchstaben umwandeln. Das Problem ist, das bei Dutzenden oder Hunderten von Dateien umzusetzen, ohne jede einzeln umzubenennen.</p>

<h2>Finder bietet keine Option zur Umwandlung der Groß-/Kleinschreibung</h2>

<p>Das ist eine der überraschenderen Lücken im Batch-Umbenennen-Werkzeug des Finders. Du bekommst „Text ersetzen", „Text hinzufügen" und „Format" — keine dieser Optionen rührt an die Groß-/Kleinschreibung. Willst du, dass aus „Report.PDF" „report.pdf" wird, bietet der Finder schlicht keinen Weg, das in großem Stil zu erledigen. Du müsstest jeden Namen manuell neu eintippen, was den Sinn der Stapelverarbeitung völlig zunichtemacht.</p>

<h2>Groß-/Kleinschreibung als Schritt in einer Pipeline</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> enthält eine eigene Aktion zur Änderung der Schreibweise, die Dateinamen in einem Schritt für den gesamten Stapel in Kleinbuchstaben, Großbuchstaben, Titel- oder Satzschreibweise umwandelt.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym wandelt Dateinamen unter macOS in Kleinbuchstaben um" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Alles in Kleinbuchstaben, auch die Dateiendung</h3>
<p>Wandle „Report.PDF" in einem Schritt in „report.pdf" um. Die Änderung der Schreibweise gilt für den gesamten Dateinamen, sodass am Ende nicht ein kleingeschriebener Name mit einer großgeschriebenen Endung übrig bleibt.</p>

<h3>Mit weiteren Bereinigungsschritten kombinieren</h3>
<p>Uneinheitliche Schreibweise tritt selten allein auf. Verkette die Umwandlung in Kleinbuchstaben mit dem Ersetzen von Leerzeichen durch Bindestriche oder dem Entfernen bestimmter Zeichen und behebe alles in einem einzigen Durchgang, statt für jedes Problem ein eigenes Werkzeug zu nutzen.</p>

<h3>Vorschau vor der Anwendung</h3>
<p>Sieh dir das Ergebnis in Kleinbuchstaben für jede Datei im Stapel an, bevor du es anwendest. Ist eine Datei bereits korrekt, wird einfach keine Änderung angezeigt — es wird nichts unnötig angefasst.</p>

<p>Einheitliche Groß-/Kleinschreibung ist eine Kleinigkeit — bis sie einen Web-Upload zum Scheitern bringt oder auf einem Case-Sensitive-System doppelte Dateien erzeugt. Das für einen ganzen Ordner zu beheben, braucht genau einen Pipeline-Schritt.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "add-date-to-filename-mac": {
    slug: "add-date-to-filename-mac",
    title: "Datum zum Dateinamen auf dem Mac hinzufügen",
    description: "Dateien ohne Datum im Namen lassen sich schwer chronologisch sortieren und sind kaum auseinanderzuhalten, wenn mehrere Versionen denselben Basisnamen teilen. Das Datum von Hand in einen ganzen Ordner einzufügen, ist langsam und fehleranfällig.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast einen Ordner voller Rechnungen, Berichte oder Exporte, und keine der Dateien trägt ein Datum im Namen. Im Finder nach „Datum geändert" zu sortieren funktioniert – bis du die Dateien woanders hin kopierst und sich das Änderungsdatum zurücksetzt, oder bis dir jemand den Ordner per E-Mail schickt und die Daten nicht mehr widerspiegeln, wann die Dateien tatsächlich entstanden sind. Die einzig verlässliche Lösung ist, das Datum direkt in den Dateinamen zu schreiben.</p>

<p>Für eine Datei dauert das ein paar Sekunden. Für achtzig Dateien, jede mit einem anderen Erstellungsdatum, willst du das nicht durch manuelles Umbenennen einzeln erledigen.</p>

<h2>Warum der Finder hier nicht weiterhilft</h2>

<p>Der Finder kann beim Batch-Umbenennen zwar Text zu einem Dateinamen hinzufügen, aber er fügt bei jeder ausgewählten Datei denselben festen Text ein. Es gibt keine Möglichkeit, automatisch das tatsächliche Erstellungs- oder Änderungsdatum jeder einzelnen Datei einzufügen — der Finder kennt in seinem Umbenennen-Dialog keine dateispezifischen, dynamischen Werte. Teilen sich alle Dateien ein Datum, kannst du es manuell eintippen und als Präfix hinzufügen. Unterscheiden sich die Daten innerhalb des Stapels, hilft der Finder gar nicht weiter.</p>

<h2>Daten als Teil einer Pipeline einfügen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> lässt dich eine feste Datumszeichenfolge als Präfix oder Suffix über einen ganzen Stapel hinweg einfügen — praktisch, um einen kompletten Export oder eine Lieferung mit dem Tag der Verarbeitung zu kennzeichnen.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym fügt Dateinamen unter macOS ein Datum hinzu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Eine ganze Lieferung auf einmal kennzeichnen</h3>
<p>Heute einen Stapel Dateien erhalten, den du von der morgigen Lieferung unterscheiden musst? Füge „2026-09-06_" in einem Schritt als Präfix bei jeder Datei hinzu. In sechs Monaten zeigt dir der Ordner genau, wann welches Set eingetroffen ist.</p>

<h3>Mit fortlaufender Nummerierung kombinieren</h3>
<p>Füge das Datum als Präfix hinzu und lege danach eine fortlaufende Nummerierung darüber: „2026-09-06_001.pdf", „2026-09-06_002.pdf". So bleiben die Dateien nach Datum gruppiert und innerhalb jeder Gruppe korrekt sortiert.</p>

<h3>Den Rest des Namens unangetastet lassen</h3>
<p>Füge das Datum ein, ohne den beschreibenden Teil des Dateinamens zu stören. Aus „invoice_client_a.pdf" wird „2026-09-06_invoice_client_a.pdf" — weiterhin lesbar, jetzt zusätzlich nach Datum sortierbar.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "remove-spaces-from-filenames-mac": {
    slug: "remove-spaces-from-filenames-mac",
    title: "Leerzeichen aus Dateinamen auf dem Mac entfernen",
    description: "Leerzeichen in Dateinamen verursachen Probleme bei Terminal-Befehlen, URLs und Skripten, die nicht dafür ausgelegt sind. Einen ganzen Ordner einzeln von Hand zu bereinigen, ist keinen Nachmittag wert.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Leerzeichen in Dateinamen sehen im Finder unproblematisch aus, sorgen aber fast überall sonst für Ärger. Ein Terminal-Befehl bricht ab, wenn du nicht daran denkst, den Pfad in Anführungszeichen zu setzen. Eine URL wandelt das Leerzeichen in „%20" um, was Links schwerer lesbar macht und gelegentlich komplett zum Scheitern bringt. Ein Skript, das ohne Leerzeichen im Hinterkopf geschrieben wurde, scheitert lautlos oder zerlegt den Dateinamen in Teile, die so nicht gedacht waren.</p>

<p>Die gängige Lösung: jedes Leerzeichen durch einen Unterstrich oder Bindestrich ersetzen oder ganz entfernen. In der Theorie simpel. In der Praxis mühsam, wenn du einen Ordner mit achtzig Dateien namens „Final Report March 2026.pdf" vor dir hast.</p>

<h2>Was die Finder-Ersetzung kann und was nicht</h2>

<p>Der Finder unterstützt beim Batch-Umbenennen tatsächlich ein einfaches Suchen-und-Ersetzen, sodass sich jedes Leerzeichen technisch durch einen Bindestrich ersetzen lässt — nach einem einzelnen Leerzeichen suchen, durch „-" ersetzen. Das funktioniert für einfache Fälle. Aber es stößt an Grenzen, wenn:</p>

<ul>
  <li>du Leerzeichen komplett entfernen willst und „Final Report" zu „FinalReport" zusammenziehst — eine einzelne Ersetzung schafft das zwar, aber die Kombination mit weiterer Bereinigung (etwa dem Beheben doppelter Leerzeichen) braucht mehrere Durchgänge</li>
  <li>du Leerzeichen entfernen willst, die Dateiendung aber exakt erhalten bleiben soll</li>
  <li>du das als Teil einer größeren Bereinigung brauchst, die auch die Schreibweise korrigiert oder andere Zeichen entfernt</li>
</ul>

<h2>Leerzeichen entfernen als ein Pipeline-Schritt</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> erledigt das Entfernen von Leerzeichen über Suchen und Ersetzen und lässt dich das mit jedem anderen nötigen Bereinigungsschritt im selben Durchgang verketten.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym entfernt Leerzeichen aus Dateinamen unter macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Leerzeichen durch Bindestriche oder Unterstriche ersetzen</h3>
<p>Suche nach einem Leerzeichen, ersetze es durch „-" oder „_". Jede Datei im Stapel erhält auf einmal dieselbe Behandlung, und die Vorschau zeigt das exakte Ergebnis, bevor du irgendetwas anwendest.</p>

<h3>Leerzeichen komplett entfernen</h3>
<p>Soll aus „Final Report.pdf" ohne jedes Trennzeichen „FinalReport.pdf" werden, ersetze das Leerzeichen durch nichts. Eine Aktion, der gesamte Stapel.</p>

<h3>Übrig gebliebene doppelte Leerzeichen oder Reste beheben</h3>
<p>Nach dem Entfernen bestimmter Wörter oder Präfixe bleiben Dateien manchmal mit doppelten Leerzeichen oder unschönen Lücken zurück. Füge einen Regex-Schritt wie <code>\\s+</code>, ersetzt durch ein einzelnes Leerzeichen oder einen Bindestrich, hinzu, um das in derselben Pipeline zu bereinigen.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-files-for-web-mac": {
    slug: "rename-files-for-web-mac",
    title: "Dateien auf dem Mac für den Web-Upload umbenennen — Slugs in Bulk erstellen",
    description: "Dateien mit Leerzeichen, Großbuchstaben und Sonderzeichen führen nach dem Upload auf eine Website zu defekten Links und unübersichtlichen URLs. Einen Stapel von Hand in saubere, webtaugliche Namen umzuwandeln, skaliert nicht.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du willst gerade einen Stapel Bilder oder Dokumente auf eine Website, ein CMS oder einen statischen Site-Generator hochladen. Die Dateien heißen Dinge wie „Product Photo (Final) 2.jpg" und „Blog Header — Draft.png". Lädst du sie so hoch, wie sie sind, bekommst du hässliche URLs mit codierten Leerzeichen und Sonderzeichen — oder schlimmer, ein CMS, das den Upload wegen nicht unterstützter Zeichen von vornherein ablehnt.</p>

<p>Was du eigentlich brauchst, ist ein „Slug" — kleingeschrieben, durch Bindestriche getrennt, ohne Sonderzeichen: „product-photo-final-2.jpg". Diese Umwandlung für eine Handvoll Dateien von Hand vorzunehmen, ist machbar. Für einen Stapel von fünfzig Bildern, die in eine neue Website einfließen sollen, nicht.</p>

<h2>Warum der Finder Dateinamen nicht slugifizieren kann</h2>

<p>Slugifizieren umfasst mehrere Umwandlungen gleichzeitig: Umwandlung in Kleinbuchstaben, Entfernen von Satzzeichen wie Klammern und Gedankenstrichen, und die Umwandlung von Leerzeichen in Bindestriche. Das Umbenennen-Werkzeug des Finders kann genau eines davon — das wörtliche Ersetzen von Text — und kann weder Text in Kleinbuchstaben umwandeln noch verschiedenste Sonderzeichen in einem Durchgang entfernen. Du bräuchtest mehrere manuelle Umbenennungsrunden, und selbst dann kann der Finder die Groß-/Kleinschreibung überhaupt nicht anfassen.</p>

<h2>Einen Stapel mit einer Pipeline slugifizieren</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> erledigt das Slugifizieren, indem es genau die nötigen Schritte verkettet: Änderung der Schreibweise, Entfernen von Zeichen und Ersetzen von Leerzeichen durch Bindestriche — alles in einer Pipeline, angewendet auf den gesamten Stapel.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym slugifiziert Dateinamen für den Web-Upload unter macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Schritt 1: Sonderzeichen entfernen</h3>
<p>Nutze Regex, um Klammern, Gedankenstriche und andere Satzzeichen zu entfernen, die in einer URL nichts zu suchen haben. Ein Muster, das alles außerhalb von Buchstaben, Zahlen, Leerzeichen und Bindestrichen erfasst, räumt das in einem Schritt auf.</p>

<h3>Schritt 2: Leerzeichen in Bindestriche umwandeln</h3>
<p>Suche nach jedem Leerzeichen und ersetze es durch einen Bindestrich, passend zu den gängigen Konventionen für Web-Slugs.</p>

<h3>Schritt 3: Alles in Kleinbuchstaben</h3>
<p>Wende als letzten Schritt die Umwandlung in Kleinbuchstaben an, sodass aus „Product-Photo-Final-2.jpg" „product-photo-final-2.jpg" wird — sauber, vorhersehbar und für jede URL-Struktur unbedenklich.</p>

<p>Richte diese Pipeline einmal ein und nutze sie künftig für jeden Stapel an Assets, den du hochlädst.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "a-better-rename-alternative-mac": {
    slug: "a-better-rename-alternative-mac",
    title: "Eine bessere Rename-Alternative für den Mac",
    description: "A Better Finder Rename ist seit Langem eine Option für Batch-Umbenennungen auf dem Mac, aber seine dichte, dialoglastige Oberfläche ist nicht für jeden geeignet. Hier erfährst du, worauf du achten solltest, wenn du dieselbe Power mit weniger Reibung willst.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>A Better Finder Rename gibt es schon so lange, dass es zur Standardempfehlung geworden ist, sobald jemand fragt, wie man auf dem Mac Dateien im Batch umbenennt. Es ist leistungsfähig — Regex, mehrere Umbenennungsaktionen, Vorlagen — und hat sich seinen Platz verdient. Aber „leistungsfähig" und „angenehm zu bedienen" sind nicht dasselbe, und viele Nutzer öffnen es, sehen die dichte Liste an Tabs und Optionen und haben sofort das Gefühl, ein Handbuch zu brauchen, nur um eine Dateiendung zu ändern.</p>

<h2>Warum Nutzer nach Alternativen suchen</h2>

<p>Die Kritikpunkte wiederholen sich in Rezensionen und Forenbeiträgen:</p>

<ul>
  <li>Die Oberfläche setzt stark auf Dropdown-Menüs und dichte Optionsfelder statt auf ein visuelles Layout</li>
  <li>Einen mehrstufigen Umbenennungsvorgang zu erstellen bedeutet, mehrere Tabs zu konfigurieren, statt sichtbar Schritte zu stapeln, die man sehen und neu anordnen kann</li>
  <li>Das Design wurde seit Jahren nicht wesentlich modernisiert, wodurch einfache Aufgaben technischer wirken, als sie sein müssten</li>
  <li>Neue Nutzer brauchen oft ein Tutorial, bevor sie ihren ersten Stapel sicher umbenennen können</li>
</ul>

<p>Das heißt nicht, dass die App nicht funktioniert — sie funktioniert. Aber wenn du Dateien nur gelegentlich umbenennst statt als Kernbestandteil deiner Arbeit, kann sich die Lernkurve unverhältnismäßig zur eigentlichen Aufgabe anfühlen.</p>

<h2>Wie eine reibungslosere Alternative aussieht</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> deckt dieselben Bereiche ab — Suchen und Ersetzen mit Regex, fortlaufende Nummerierung, Einfügen und Entfernen, Änderungen der Schreibweise — über eine visuelle Pipeline, die du durch das Hinzufügen von Schritten aufbaust, statt Einstellungen über mehrere Tabs zu konfigurieren.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym als Alternative zum Batch-Umbenennen unter macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Deine Schritte sehen, nicht nur Einstellungen</h3>
<p>Jede Umbenennungsaktion erscheint als sichtbarer Block in der Pipeline. Du kannst dir die Abfolge ansehen und sofort verstehen, was passieren wird, ohne ein Einstellungsfeld zum Nachschauen zu öffnen.</p>

<h3>Dateien direkt hineinziehen</h3>
<p>Kein Dateiauswahl-Dialog, durch den du navigieren musst. Ziehe Dateien direkt aus dem Finder in die App und beginne mit dem Aufbau deiner Pipeline.</p>

<h3>Vorschau und Rückgängig, jederzeit verfügbar</h3>
<p>Jede Datei zeigt ihren aktuellen und zukünftigen Namen, bevor du die Änderung übernimmst, und ein vollständiges Rückgängigmachen steht zur Verfügung, falls das Ergebnis nicht deinen Erwartungen entspricht.</p>

<p>Wenn du A Better Finder Rename schon genutzt und als mehr Aufwand empfunden hast, als die Aufgabe wert war, lohnt sich diese Alternative.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-screenshots-mac": {
    slug: "rename-screenshots-mac",
    title: "Screenshots auf dem Mac umbenennen — Präfix „Screenshot“ entfernen",
    description: "macOS benennt jeden Screenshot „Screenshot 2026-09-06 at 3.42.17 PM.png“ — korrekt, aber sperrig. Einen ganzen Ordner voller solcher Dateien einzeln zu bereinigen, kostet Zeit, die du nicht hast.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jeder Screenshot, den du auf einem Mac machst, bekommt dieselbe Behandlung: „Screenshot 2026-09-06 at 3.42.17 PM.png". Das ist zwar technisch informativ, aber lang, bei jeder Datei identisch und unpraktisch, wenn du in einem Bericht, einem Ticket oder einem gemeinsamen Ordner darauf verweisen willst. Hast du fünfzig Screenshots für einen Bugreport, ein Tutorial oder eine Design-Review angesammelt, ist es genau die Art von Aufgabe, jeden einzeln in etwas wie „step-01.png" umzubenennen, die einen Nachmittag ohne guten Grund frisst.</p>

<h2>Warum sich mit dem Standardnamen schlecht arbeiten lässt</h2>

<p>Das Format „Screenshot [Datum] at [Uhrzeit]" wurde für Eindeutigkeit entworfen, nicht für Lesbarkeit. Jede Datei beginnt mit denselben elf Zeichen, was bedeutet:</p>

<ul>
  <li>Sortieren nach Name sortiert nur nach Aufnahmezeitpunkt, nicht nach Relevanz oder Inhalt</li>
  <li>Die Namen sind zu lang, um in einer Dateiliste oder einem geteilten Link bequem gelesen zu werden</li>
  <li>Du kannst nicht erkennen, was ein Screenshot zeigt, ohne ihn zu öffnen</li>
  <li>Der Finder kann beim Batch-Umbenennen zwar das Wort „Screenshot" entfernen, lässt den Zeitstempel-Wust aber trotzdem übrig, sofern du keine spezifischere Ersetzung baust</li>
</ul>

<h2>Einen Ordner voller Screenshots bereinigen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> erledigt diese Bereinigung in ein paar Pipeline-Schritten, egal ob du einen komplett individuellen Namen willst oder nur eine kürzere Version des Originals.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym benennt einen Stapel Mac-Screenshots um" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Das gesamte Standardpräfix entfernen</h3>
<p>Nutze Regex, um das komplette Muster „Screenshot [Datum] at [Uhrzeit]" in einem Schritt zu erkennen und zu entfernen — als leere Fläche, auf der du deine eigene Benennung aufbaust.</p>

<h3>Einen beschreibenden Namen und eine Sequenz einfügen</h3>
<p>Füge ein individuelles Präfix wie „bug-report_" oder „onboarding-flow_" gefolgt von fortlaufender Nummerierung hinzu, sodass aus deinen fünfzig Screenshots „bug-report_001.png" bis „bug-report_050.png" werden, sortiert in der Reihenfolge, in der du sie aufgenommen hast.</p>

<h3>Einfach halten, wenn du nur kürzere Namen brauchst</h3>
<p>Brauchst du keine individuellen Namen, entferne einfach „Screenshot " und kürze den Zeitstempel mit einer gezielten Regex-Ersetzung — so bleibt genug Information erhalten, um ungefähr zu wissen, wann jeder aufgenommen wurde, ohne den ganzen Wust.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "bulk-rename-utility-mac": {
    slug: "bulk-rename-utility-mac",
    title: "Das beste Tool zum Massen-Umbenennen für den Mac",
    description: "Es gibt eine Handvoll dedizierter Bulk-Rename-Tools für den Mac, jedes mit einer anderen Balance aus Power und Einfachheit. Hier erfährst du, was du vor der Auswahl wirklich vergleichen solltest.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Suchst du nach einem „Bulk Rename Utility für Mac", stößt du auf eine Mischung aus alten Terminal-basierten Anleitungen, ein paar kostenpflichtigen Apps mit jahrzehntealten Oberflächen und der eingebauten Finder-Option, die nur begrenzt weiterhilft. Die richtige Wahl hängt weniger davon ab, welche App die längste Funktionsliste hat, sondern davon, wie deine tatsächlichen Umbenennungsaufgaben Woche für Woche aussehen.</p>

<h2>Was du wirklich bewerten solltest</h2>

<p>Die meisten Diskussionen über Bulk-Rename-Tools konzentrieren sich auf Funktionslisten — unterstützt es Regex, kann es fortlaufend nummerieren, beherrscht es Änderungen der Schreibweise. Das zählt, verfehlt aber die praktischen Fragen, die darüber entscheiden, ob du das Tool wirklich gerne benutzt:</p>

<ul>
  <li><strong>Siehst du das Ergebnis, bevor du es übernimmst?</strong> Ein Tool ohne Live-Vorschau macht jede Umbenennung zu einer kleinen Wette.</li>
  <li><strong>Kannst du einen Fehler rückgängig machen?</strong> Batch-Operationen an Hunderten von Dateien brauchen ein Sicherheitsnetz.</li>
  <li><strong>Wie viele Schritte braucht es, um Operationen zu kombinieren?</strong> Reale Umbenennungsaufgaben brauchen selten nur eine einzige Transformation.</li>
  <li><strong>Kannst du Dateien hineinziehen, oder brauchst du jedes Mal einen Dateiauswahl-Dialog?</strong></li>
</ul>

<p>Der Finder deckt die Grundlagen ab, scheitert aber an den ersten beiden Punkten komplett — keine vollständige Vorschau, kein dauerhaftes Rückgängigmachen. Terminal-basierte Ansätze scheitern an allen vier, es sei denn, du bist mit Skripten vertraut. Ältere dedizierte Apps haken die Punkte auf dem Papier zwar ab, vergraben den Arbeitsablauf aber in dichten Menüs.</p>

<h2>Ein visueller Ansatz für Bulk-Umbenennungen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> ist genau darauf ausgelegt, diese vier Fragen gut zu beantworten: eine visuelle Pipeline aus gestapelten Aktionen, eine Live-Vorher-Nachher-Vorschau für jede Datei, vollständiges Rückgängigmachen und Drag-and-Drop-Eingabe.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym als Bulk-Rename-Tool für macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Jede Aktion ist sichtbar und neu anordenbar</h3>
<p>Suchen/Ersetzen, Regex, fortlaufende Nummerierung, Einfügen, Entfernen und Änderungen der Schreibweise stehen alle als Pipeline-Schritte zur Verfügung, die du stapeln, neu anordnen und einzeln bearbeiten kannst.</p>

<h3>Die Vorschau skaliert mit deinem Stapel</h3>
<p>Ob du zehn Dateien oder tausend umbenennst — die Vorschauliste zeigt für jede einzelne den aktuellen und den zukünftigen Namen, nicht nur eine Stichprobe.</p>

<h3>Fehler sind rückgängig zu machen</h3>
<p>Eine Umbenennung angewendet, die nicht wie gewünscht ausgefallen ist? Rückgängig macht den gesamten Stapel wieder rückgängig, sodass du die Pipeline anpassen und erneut versuchen kannst, statt Dateien einzeln von Hand zu korrigieren.</p>

<p>Das beste Bulk-Rename-Tool ist das, dem du vertrauen kannst, bevor du dich auf das Ergebnis festlegst. Das ist der Maßstab, an dem sich jedes Tool messen lassen sollte.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-video-files-mac": {
    slug: "rename-video-files-mac",
    title: "Videodateien auf dem Mac im Stapel umbenennen",
    description: "Videodateien, die von einer Kamera, einem Bildschirmrecorder oder einer Schnitt-App exportiert werden, haben selten brauchbare Namen. Sich durch einen Ordner voller Clips zu wühlen, die nur nach Zeitstempel benannt sind, erschwert Schnitt und Archivierung unnötig.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Eine Kamera oder Drohne exportiert Clips mit Namen wie „DJI_0001.MP4", „DJI_0002.MP4" und so weiter. Ein Bildschirmrecorder benennt Dateien nach der exakten Sekunde, in der du die Aufnahme gestartet hast. Eine Schnitt-App exportiert Renderings mit einem generischen „Sequence_01.mov", das nichts über das Projekt verrät. Verwaltest du Filmmaterial über mehrere Drehs, Projekte oder Kunden hinweg, machen diese Standardnamen aus einem einfachen Blick in den Ordner ein Ratespiel, bei dem du mehrere Clips öffnen musst, nur um den gesuchten zu finden.</p>

<h2>Videospezifische Herausforderungen beim Umbenennen</h2>

<p>Videodateien bringen ein paar Besonderheiten mit sich, die das Batch-Umbenennen etwas anders machen als bei Fotos oder Dokumenten:</p>

<ul>
  <li>Gemischte Dateiendungen im selben Dreh (MP4, MOV, MTS), die alle eine einheitliche Benennung brauchen, ohne die Endung zu beschädigen</li>
  <li>Mehrere Kamerawinkel oder Takes, die gruppiert und korrekt sortiert bleiben müssen</li>
  <li>Lange Originalnamen aus Exporten von Schnittsoftware, die gekürzt werden müssen, ohne relevante Teile zu verlieren</li>
  <li>Das Umbenennen-Werkzeug des Finders bietet keine Möglichkeit, diese Variationen in einem Durchgang zu behandeln</li>
</ul>

<h2>Eine Pipeline zum Umbenennen von Filmmaterial</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> behandelt Videostapel genauso wie jeden anderen Dateityp — über eine visuelle Pipeline — und erhält dabei die jeweils vorhandene Dateiendung jeder Datei.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym benennt Videodateien unter macOS im Stapel um" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kamera- oder Software-Präfixe entfernen</h3>
<p>Entferne „DJI_", „GH0" oder welches generische Präfix deine Kamera oder dein Recorder auch hinzufügt — bei jedem Clip, unabhängig von der Dateiendung.</p>

<h3>Projekt- und Take-Struktur hinzufügen</h3>
<p>Füge einen Projektnamen und fortlaufende Take-Nummern ein, sodass „Scene_02_Take_03.mov" eine bedeutungslose Clip-Nummer ersetzt — das Filmmaterial bleibt so nach Szene und Take organisiert, wenn du an der Schnitt-Timeline ankommst.</p>

<h3>Dateiendungen mischen, ohne etwas zu beschädigen</h3>
<p>Lade MP4-, MOV- und MTS-Dateien vom selben Dreh in einen einzigen Stapel. Die Umbenennungsaktionen wirken nur auf den Namensteil, sodass jede Datei nach der Umbenennung ihre korrekte, ursprüngliche Endung behält.</p>

<p>Einheitliche Clip-Namen sparen echte Zeit, sobald du drei Wochen nach dem Dreh durch eine Timeline scrollst und „diese eine Einstellung" suchst.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "find-replace-filename-mac": {
    slug: "find-replace-filename-mac",
    title: "Suchen und Ersetzen in Dateinamen auf dem Mac",
    description: "Suchen und Ersetzen in Dateinamen klingt einfach, aber es richtig zu machen erfordert mehr Kontrolle als ein simpler Textaustausch — Groß-/Kleinschreibung, Ganzwort-Übereinstimmung und der Umgang mit mehrfach auftretendem Text.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Suchen und Ersetzen ist die mit Abstand häufigste Batch-Umbenennungsoperation. Du hast ein Wort oder eine Zeichenfolge, die in einer Reihe von Dateien vorkommt, und musst sie gegen etwas anderes austauschen — ein Projekt wurde umbenannt, ein Kunde hat seinen Firmennamen geändert, oder eine alte Namenskonvention muss in einem Archiv aktualisiert werden. Das klingt nach der einfachsten denkbaren Umbenennungsaufgabe, und oft ist sie das auch. Aber sobald deine Dateinamen nicht perfekt einheitlich sind, zeigt einfaches Suchen und Ersetzen schnell seine Grenzen.</p>

<h2>Wo einfaches Suchen und Ersetzen an Grenzen stößt</h2>

<p>Die Finder-Funktion für Suchen und Ersetzen funktioniert für saubere, wörtliche Fälle. Aber echte Ordner sind unordentlicher als das:</p>

<ul>
  <li>Der zu ersetzende Text taucht in unterschiedlicher Schreibweise in verschiedenen Dateien auf („Draft" vs. „draft" vs. „DRAFT")</li>
  <li>Die Zielzeichenfolge kommt mehr als einmal in einem Dateinamen vor, und du willst nur ein Vorkommen ersetzen</li>
  <li>Du musst ein Muster ersetzen, keinen exakten Text — etwa jede Versionsnummer, nicht nur „v1"</li>
  <li>Du willst mehrere Suchen-und-Ersetzen-Operationen nacheinander ausführen, die jeweils auf der vorherigen aufbauen</li>
</ul>

<p>Die Ersetzungsfunktion des Finders erledigt genau eine exakte Textersetzung pro Durchgang, ohne Optionen zur Groß-/Kleinschreibung und ohne Mustererkennung.</p>

<h2>Suchen und Ersetzen mit mehr Kontrolle</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> enthält eine Suchen-und-Ersetzen-Aktion mit Regex-Unterstützung, sodass du sowohl einfache wörtliche Ersetzung als auch musterbasierte Übereinstimmung im selben Tool hast.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym sucht und ersetzt in Dateinamen unter macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Einfache Austausche für unkomplizierte Fälle</h3>
<p>Ersetze „OldClientName" durch „NewClientName" bei jeder Datei im Stapel — die Live-Vorschau bestätigt dabei, dass die Änderung richtig aussieht, bevor du sie anwendest.</p>

<h3>Mustererkennung, wenn Text variiert</h3>
<p>Schalte Regex ein und suche nach Mustern statt exakten Zeichenfolgen — ersetze jedes „draft_v" gefolgt von einer Zahl durch „final", unabhängig davon, welche Zahl folgt.</p>

<h3>Mehrere Ersetzungen verketten</h3>
<p>Musst du drei verschiedene Ungereimtheiten im selben Stapel beheben? Füge der Pipeline drei Suchen-und-Ersetzen-Schritte hinzu. Jeder läuft auf dem Ergebnis des vorherigen Schritts, und die Vorschau spiegelt die gesamte Kette wider.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-files-with-counter-mac": {
    slug: "rename-files-with-counter-mac",
    title: "Dateien auf dem Mac mit einem Zähler umbenennen — 001, 002, 003",
    description: "Ein an Dateinamen angehängter Zähler hält ein Set in Ordnung und verhindert Namenskollisionen, aber Polsterung, Startwert und Position richtig hinzubekommen braucht mehr als die einfache Nummerierung des Finders.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du brauchst eine Reihe von Dateien, nummeriert 001, 002, 003 und so weiter — für eine Diashow, eine Reihe von Produktbildern, eine Serie exportierter Seiten oder jeden Stapel, bei dem die Reihenfolge wichtig ist und doppelte Namen keine Option sind. Ein Zähler löst beide Probleme auf einmal: Er garantiert Eindeutigkeit und eine vorhersehbare Sortierreihenfolge, solange er konsistent aufgefüllt wird.</p>

<h2>Was der Finder-Zähler fast richtig macht</h2>

<p>Der Format-Umbenennungsmodus des Finders enthält tatsächlich einen Zähler — du wählst einen Startwert, und er zählt bei den ausgewählten Dateien um eins hoch. Für viele Fälle ist das durchaus in Ordnung. Aber er bringt feste Einschränkungen mit:</p>

<ul>
  <li>Der Zähler ersetzt den kompletten ursprünglichen Dateinamen; du kannst keinen Teil davon neben der Nummer behalten</li>
  <li>Du kannst die Schrittweite nicht steuern — sie ist immer +1</li>
  <li>Du kannst den Zähler nicht mitten im Namen einfügen, nur an einer festen, vom Modus vorgegebenen Position</li>
  <li>Es gibt keine Möglichkeit, das Zählen mit einem separaten Bereinigungsschritt zu kombinieren, etwa dem vorherigen Korrigieren der Schreibweise oder Entfernen unnötiger Zeichen</li>
</ul>

<h2>Zähler als flexibler Pipeline-Schritt</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> enthält fortlaufende Nummerierung als eine von mehreren Aktionen, sodass du sie mit allem anderen kombinieren kannst, was der Stapel braucht.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym fügt Dateinamen unter macOS einen Zähler hinzu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Deine Polsterung wählen</h3>
<p>Entscheide im Voraus, ob du 01, 001 oder 0001 brauchst, je nachdem, wie viele Dateien im Stapel sind, und jede Zahl wird einheitlich aufgefüllt, sodass die Sortierreihenfolge nie durcheinandergerät, während das Set wächst.</p>

<h3>Den Originalnamen behalten, wenn du willst</h3>
<p>Füge den Zähler als Präfix oder Suffix hinzu, während der beschreibende Teil des Dateinamens erhalten bleibt — „product_001.jpg" statt „product" komplett an ein generisches Zählformat zu verlieren.</p>

<h3>Erst bereinigen, dann nummerieren</h3>
<p>Führe vor dem Nummerierungsschritt einen Suchen-und-Ersetzen- oder Schreibweise-Ändern-Schritt aus, sodass die Dateien bereits sauber sind, wenn der Zähler angewendet wird. Die Vorschau zeigt das Endergebnis der gesamten Kette.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "organize-downloads-folder-mac-rename": {
    slug: "organize-downloads-folder-mac-rename",
    title: "Downloads-Ordner auf dem Mac durch Massen-Umbenennung organisieren",
    description: "Ein Downloads-Ordner voller Dateien namens „file(3).pdf“ und „unnamed-1234567.zip“ lässt sich kaum durchsuchen. Jahre angesammelter Downloads von Hand zu bereinigen, ist kein realistisches Wochenendprojekt.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Der Downloads-Ordner ist der Ort, an dem Dateinamen sterben. Browser hängen „(1)", „(2)" und „(3)" an alles an, was bereits existiert. Manche Websites liefern Dateien mit automatisch generierten Namen wie „file_a8f3k29d.pdf" aus, die außerhalb der Download-Sitzung nichts bedeuten. Über Jahre summiert sich das zu einem Ordner, in dem die Suche nach Namen nutzlos ist, weil die Hälfte der Namen generische Duplikate und die andere Hälfte Zufallszeichenfolgen sind.</p>

<h2>Warum sich dieses Problem mit der Zeit verschlimmert</h2>

<p>Anders als ein Projektordner, den du aktiv pflegst, wächst der Downloads-Ordner passiv. Niemand setzt sich hin und beschließt, ihn zu organisieren — er wächst einfach, bis das Suchen schmerzhaft wird, und du greifst stattdessen auf das Sortieren nach Datum zurück, was dir nur verrät, wann etwas eingetroffen ist, nicht was es ist. Bis du dich entschließt, ihn zu bereinigen, hast du es mit Hunderten oder Tausenden von Dateien zu tun, was manuelles Umbenennen völlig unpraktikabel macht.</p>

<h2>Massen-Bereinigung, ohne bei null anzufangen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> ist genau für diese Art von Massen-Bereinigung gebaut — ein großer, unordentlicher Stapel, bei dem mehrere Korrekturen auf einmal nötig sind statt einer einzigen einfachen Umbenennung.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym organisiert einen Downloads-Ordner unter macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Suffixe von Duplikat-Downloads entfernen</h3>
<p>Nutze Regex, um jedes Muster „(1)", „(2)" und „(3)" im gesamten Ordner auf einmal zu entfernen, egal ob sie von der Duplikatbehandlung des Browsers stammen oder von wiederholten Downloads derselben Datei.</p>

<h3>Erst nach Dateityp sortieren</h3>
<p>Gruppiere Dateien vor dem Umbenennen nach Dateiendung und führe dann separate Pipelines für PDFs, Bilder und Archive aus — jede mit einer Benennung, die für diesen Dateityp sinnvoll ist, etwa mit einem Quellen- oder Datumspräfix.</p>

<h3>Daten für Kontext hinzufügen</h3>
<p>Füge bei großen Stapeln einen groben Datumsbereich als Präfix ein, sodass selbst generisch benannte Dateien wenigstens grob verraten, wann sie im Ordner gelandet sind.</p>

<p>Du musst nicht jede Datei einzeln sortieren — ein paar Pipeline-Durchgänge auf nach Typ oder Datum gruppierten Stapeln können Jahre an Unordnung in einer Sitzung durchsuchbar machen.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-files-before-uploading-mac": {
    slug: "rename-files-before-uploading-mac",
    title: "Dateien auf dem Mac vor dem Upload umbenennen",
    description: "Viele Upload-Systeme lehnen Dateien mit Leerzeichen, Sonderzeichen oder uneinheitlicher Benennung ab oder verarbeiten sie falsch. Einen Stapel kurz vor einer Upload-Frist einzeln zu korrigieren, bringt unnötigen Stress.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du willst gerade einen Stapel Dateien in ein Portal, ein CMS, einen FTP-Server oder das Dateifreigabesystem eines Kunden hochladen, und die Benennungsanforderungen passen nicht zu dem, was du hast. Vielleicht lehnt das System Leerzeichen ab. Vielleicht braucht es ein bestimmtes Präfix, damit die Dateien auf der anderen Seite richtig sortiert werden. Vielleicht tragen deine Dateien noch interne Entwurfsnamen, die der Empfänger nicht sehen sollte. Was auch immer der Grund ist — du brauchst den gesamten Stapel korrekt umbenannt, bevor der Upload durchgeht, nicht danach, wenn eine Korrektur bedeutet, alles erneut hochzuladen.</p>

<h2>Warum Umbenennen in letzter Minute im Finder riskant ist</h2>

<p>Unter Zeitdruck wird das Batch-Umbenennen im Finder eher zur Belastung als zur Erleichterung. Du bekommst eine Operation nach der anderen, eine einzelne Stichprobenvorschau und keine Möglichkeit, den gesamten Stapel vor dem Upload zu überprüfen. Sind zehn Dateien am Ende falsch benannt, bemerkst du das womöglich erst, wenn der Empfänger es meldet — zu dem Zeitpunkt ist der Upload bereits raus.</p>

<h2>Mit Sicherheit umbenennen, bevor du hochlädst</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> zeigt dir eine vollständige Vorschau des neuen Namens jeder Datei, bevor sich irgendetwas ändert — genau dann am wichtigsten, wenn du gegen eine Frist arbeitest und dir einen erneuten Upload nicht leisten kannst.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym benennt Dateien unter macOS vor dem Upload um" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Die Benennungsregeln des Ziels erfüllen</h3>
<p>Entferne Leerzeichen und Sonderzeichen, erzwinge Kleinschreibung oder füge ein erforderliches Präfix hinzu — was das Upload-System auch erwartet, bau es einmal als Pipeline und nutze es für künftige Uploads an dasselbe Ziel wieder.</p>

<h3>Interne oder Entwurfsbenennung entfernen</h3>
<p>Entferne Wörter wie „DRAFT", „internal" oder Versionsmarkierungen, die für einen externen Empfänger nicht sichtbar sein sollten — für den gesamten Stapel in einem Durchgang.</p>

<h3>Alles überprüfen, bevor es deinen Rechner verlässt</h3>
<p>Scrolle durch die vollständige Vorher-Nachher-Liste und bestätige, dass jede Datei korrekt ist. Erst dann wird die Umbenennung angewendet, und erst dann lädst du hoch — keine Überraschungen im Nachhinein.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "trim-filename-length-mac": {
    slug: "trim-filename-length-mac",
    title: "Die Länge von Dateinamen auf dem Mac kürzen",
    description: "Lange Dateinamen werden in Dateilisten abgeschnitten, verursachen Fehler auf Systemen mit Pfadlängenbeschränkung und sind in Skripten unhandlich. Einen Stapel Namen einzeln zu kürzen, geht nur schleppend voran.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Manche Dateinamen wachsen sich aus — ein exportiertes Dokument behält seinen Originaltitel plus ein Versionskürzel plus ein Datum plus einen Abteilungscode, bis der Dateiname 120 Zeichen lang ist. Das verursacht echte Probleme: Manche Systeme erzwingen eine maximale Pfadlänge und lehnen die Datei rundweg ab, manche Dateilisten schneiden den Namen ab, sodass du Dateien nicht mehr auseinanderhalten kannst, und Skripte, die den Namen verarbeiten, können sich bei ungewöhnlicher Länge unvorhersehbar verhalten.</p>

<p>Du musst die Namen kürzen — auf eine vernünftige Länge bringen und dabei die Teile behalten, die tatsächlich wichtig sind.</p>

<h2>Der Finder kann nicht nach Länge kürzen</h2>

<p>Das Umbenennen-Werkzeug des Finders kennt weder eine maximale Länge noch eine Operation „nur die ersten N Zeichen behalten". Es kann bestimmten Text ersetzen, wenn du genau weißt, was entfernt werden soll, aber wenn die überschüssige Länge aus redundanten oder uneinheitlichen Informationen stammt, die über den ganzen Namen verteilt sind, bietet der Finder keinen systematischen Weg, das zu kürzen. Dir bleibt nur, jede Datei manuell zu kürzen — genau die Art von sich wiederholender Arbeit, für die Batch-Tools existieren.</p>

<h2>Namen mit gezielten Regeln kürzen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> lässt dich Zeichen nach Position oder nach Muster entfernen, was die meisten realen Fälle übermäßig langer Dateinamen abdeckt.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym kürzt die Länge von Dateinamen unter macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Eine feste Anzahl an Zeichen am Ende entfernen</h3>
<p>Stammt die überschüssige Länge von einem wiederkehrenden Suffix — einem Abteilungscode, einem internen Tag — entferne in einem Schritt eine bestimmte Anzahl von Zeichen vom Ende jedes Dateinamens.</p>

<h3>Ein bestimmtes redundantes Segment herausschneiden</h3>
<p>Nutze Suchen und Ersetzen oder Regex, um ein Segment zu entfernen, das in der Mitte jedes Namens vorkommt, etwa einen wiederholten Projektcode, der nicht mehr nötig ist, sobald Dateien bereits in einem Projektordner organisiert sind.</p>

<h3>Das gekürzte Ergebnis in der Vorschau prüfen</h3>
<p>Überprüfe die vollständige Vorher-Nachher-Liste, um sicherzustellen, dass die gekürzten Namen weiterhin voneinander unterscheidbar sind — zu aggressives Kürzen kann versehentlich doppelte Namen erzeugen, und die Vorschau fängt das ab, bevor du irgendetwas anwendest.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "rename-music-files-mac": {
    slug: "rename-music-files-mac",
    title: "Musikdateien auf dem Mac umbenennen — Interpret, Album, Titel",
    description: "Heruntergeladene oder gerippte Audiodateien haben oft kryptische Dateinamen, die nicht zu ihren tatsächlichen Metadaten passen. Eine so sortierte Bibliothek macht das Durchsuchen nach Interpret, Album oder Titel fast unmöglich.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast einen Ordner mit Audiodateien namens „track01.mp3", „01 - Untitled.flac" oder einem Wirrwarr aus Zufallszeichen von einem Download. Die eingebetteten Metadaten sind vielleicht korrekt, aber die Dateinamen selbst sind nutzlos, wenn du außerhalb eines Musikplayers durchsuchst, mit bestimmten Geräten synchronisierst oder ein Backup organisierst, bei dem du direkt auf die Dateinamen schaust statt auf Tag-Daten. Du willst Dateinamen, die den tatsächlichen Interpreten, das Album und die Titelnummer widerspiegeln — einheitlich, über die gesamte Bibliothek hinweg.</p>

<h2>Warum das kein Ein-Datei-Problem ist</h2>

<p>Ein einzelner falsch benannter Dateiname ist in zwei Minuten korrigiert. Eine Bibliothek mit ein paar hundert Titeln und uneinheitlicher Benennung — manche schon korrekt, manche in einem anderen Format, manche komplett generisch — behebst du nicht von Hand, ohne dafür ein Wochenende zu opfern. Und das Umbenennen-Werkzeug des Finders hat überhaupt kein Bewusstsein für Audio-Metadaten; es sieht den Dateinamen nur als reinen Text und kann den Interpreten oder das Album nicht aus den Tags der Datei übernehmen, selbst wenn du das wolltest.</p>

<h2>Namen über eine Bibliothek hinweg vereinheitlichen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> löst die Dateinamen-Seite dieses Problems — sobald du das gewünschte Benennungsmuster kennst, wende es einheitlich auf den gesamten Stapel an.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym benennt Musikdateien unter macOS nach Interpret, Album und Titel um" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Das Format der Titelnummer vereinheitlichen</h3>
<p>Korrigiere uneinheitliche Titelnummerierung — manche Dateien nutzen „1", andere „01", wieder andere „Track 1" — in ein einziges, mit Nullen aufgefülltes Format mithilfe von fortlaufender Nummerierung oder einer regex-basierten Suchen-und-Ersetzen-Operation.</p>

<h3>Generische oder verstümmelte Namen bereinigen</h3>
<p>Entferne Download-Artefakte, zufällige ID-Zeichenfolgen oder Platzhaltertext wie „Untitled" mit Suchen und Ersetzen und füge dann den korrekten Interpreten und die Albuminformation als einheitliches Präfix im Ordner jedes Albums ein.</p>

<h3>Stapelweise pro Album, nicht für die ganze Bibliothek</h3>
<p>Da Benennungskonventionen meist pro Album gelten, ziehe jeweils den Ordner eines Albums hinein, baue die Pipeline für dieses Benennungsmuster und wende sie an — dann weiter zum nächsten Album mit einem frischen Stapel.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
  "mac-automator-rename-alternative": {
    slug: "mac-automator-rename-alternative",
    title: "Das Umbenennen mit Mac Automator ist verwirrend — probier eine visuelle Alternative",
    description: "Automator kann technisch gesehen Dateien im Batch umbenennen, aber einen Workflow dafür zu bauen und zu debuggen dauert weit länger als die Umbenennungsaufgabe selbst. Hier ist, warum — und ein direkterer Weg zum gleichen Ergebnis.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Automator verfügt über eine Aktion „Finder-Objekte umbenennen", und theoretisch kannst du sie mit anderen Aktionen verketten, um einen individuellen Batch-Umbenennungs-Workflow zu bauen. In der Praxis versuchen die meisten, die das einmal ausprobiert haben, es kein zweites Mal. Die Oberfläche von Automator ist darauf ausgelegt, generische Aktionen in einer flussdiagrammartigen Liste zu verbinden — mächtig, um sich wiederholende Aufgaben über mehrere Apps hinweg zu automatisieren, aber ein umständlicher Weg, ein so spezifisches Problem wie „diese 80 Dateien einheitlich umbenennen" zu lösen.</p>

<h2>Wo Automator das Umbenennen unnötig erschwert</h2>

<ul>
  <li>Du musst wissen, welche Kombination von Aktionen das gewünschte Umbenennungsverhalten erzeugt — das ist aus der Oberfläche nicht ersichtlich</li>
  <li>Es gibt keine Live-Vorschau im Workflow-Editor; du musst ihn gegen echte Dateien laufen lassen, um das Ergebnis zu sehen</li>
  <li>Fehler erfordern manuelles Rückgängigmachen der Umbenennung oder eine Wiederherstellung aus einem Backup, da Automator das nicht für dich nachverfolgt</li>
  <li>Einen Workflow als wiederverwendbare App oder Schnellaktion zu speichern bringt eine weitere Einrichtungsebene mit sich, die die meisten überspringen — sie bauen den Workflow dann jedes Mal von Grund auf neu</li>
  <li>Zu debuggen, warum eine Umbenennungsaktion nicht wie erwartet gewirkt hat, bedeutet, sich durch Automators Protokolle zu wühlen, die nicht für gelegentliche Nutzer gedacht sind</li>
</ul>

<p>Für eine Aufgabe, die die meisten ein paar Mal im Monat erledigen, zahlt sich der Einrichtungsaufwand von Automator selten aus.</p>

<h2>Eine direkte visuelle Alternative</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> bietet dieselbe Idee, nach der Automator strebt — Umbenennungsoperationen zu verketten —, aber speziell fürs Umbenennen gebaut, ohne den Overhead eines universellen Workflow-Tools.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym als visuelle Alternative zu Automator zum Umbenennen von Dateien unter macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ausschließlich fürs Umbenennen gebaut</h3>
<p>Jede verfügbare Aktion ist eine Umbenennungsoperation — Suchen/Ersetzen, Regex, Nummerierung, Änderung der Schreibweise, Einfügen, Entfernen. Keine generischen Aktionen zum Durchforsten, kein Rätselraten, welche davon tatsächlich Dateien umbenennt.</p>

<h3>Das Ergebnis sehen, bevor es passiert</h3>
<p>Anders als Automators Ansatz „ausführen und prüfen" aktualisiert sich die Vorschau live, während du die Pipeline baust, sodass du das Ergebnis kennst, bevor du irgendetwas anwendest.</p>

<h3>Keine Workflow-Dateien zum Speichern oder Pflegen</h3>
<p>Es gibt nichts, was du als App oder Schnellaktion exportieren müsstest. Renym öffnen, Dateien hineinziehen, Pipeline bauen, anwenden. Nächstes Mal machst du genau dasselbe — in derselben Zeit.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Hol dir Renym im Mac App Store</a></p>
`,
  },
};
