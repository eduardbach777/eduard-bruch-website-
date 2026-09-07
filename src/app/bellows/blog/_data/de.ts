import type { ArticleSet } from "./index";

export const deArticles: ArticleSet = {
  "best-developer-tools-app-mac": {
    slug: "best-developer-tools-app-mac",
    title: "Die beste Entwickler-Tools-App für Mac",
    description:
      "Zwischen Browser-Tabs, CLI-Skripten und Lesezeichen-Ordnern für einfache Entwickler-Werkzeuge hin und her zu wechseln kostet mehr Zeit als das eigentliche Programmieren.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Du musst ein JWT dekodieren, einen JSON-Blob formatieren, eine UUID generieren und einen String in Base64 kodieren — alles in den nächsten zehn Minuten. Also öffnest du vier Browser-Tabs, fügst sensible Daten in vier verschiedene Websites ein und hoffst, dass keine davon deine Zwischenablage protokolliert. Am nächsten Tag wiederholst du das Ganze.</p>

<p>Entwickler basteln sich aus Lesezeichen, Shell-Aliases und Einmal-Skripten Lösungen für diese Mikro-Aufgaben. Es funktioniert — technisch gesehen. Aber jeder Kontextwechsel — den Editor verlassen, den richtigen Tab finden, warten bis eine Seite geladen hat — knabbert an der Konzentration, die du für das eigentliche Problem brauchst.</p>

<h2>Was macOS von Haus aus mitbringt</h2>
<p>macOS liefert Terminal mit, das einen Teil davon abdeckt — vorausgesetzt, du erinnerst dich an die richtigen Flags. <code>uuidgen</code> gibt dir eine UUID. <code>echo -n "text" | base64</code> erledigt die Kodierung. <code>python3 -m json.tool</code> formatiert JSON. Aber es gibt keine einheitliche Oberfläche, keine Auffindbarkeit und keine Möglichkeit, dreißig verschiedene Operationen zu handhaben, ohne dir einen eigenen Spickzettel mit Befehlen anzulegen.</p>

<p>Xcode enthält ein paar Hilfswerkzeuge, die in Menüs versteckt sind, aber eine 12 GB große IDE zu starten, um einen URL-String zu dekodieren, ist wie mit einem Lastwagen zum Kiosk fahren.</p>

<h2>Eine einzige App für 41 Entwickler-Tools</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> vereint 41 Entwickler-Tools in einer nativen macOS-App — erreichbar über die Menüleiste oder als eigenständiges Fenster. Die Tools sind in fünf Kategorien organisiert: Formatierer, Kodierer, Generatoren, Konverter und Text-Tools. Eine Seitenleiste ermöglicht das Durchsuchen, und die App merkt sich deine zuletzt verwendeten Tools, sodass die häufigsten Aufgaben immer nur einen Klick entfernt sind.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Entwickler-Tools-App für macOS mit 41 Tools in einer NavigationSplitView-Seitenleiste" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zwischenablage-Erkennung</h3>
<p>Kopiere ein JWT in die Zwischenablage und öffne Bellows — die App schlägt den JWT-Decoder vor. Kopiere einen JSON-String und der JSON-Formatierer wird angezeigt. Diese kleine Funktion eliminiert den Schritt der Tool-Auswahl komplett; die App liest den Inhalt deiner Zwischenablage und zeigt dir das richtige Werkzeug.</p>

<h3>Vollständig offline</h3>
<p>Jedes Tool läuft lokal. Keine Netzwerkanfragen, keine Telemetrie, kein Einfügen von API-Schlüsseln in eine Website von jemandem, den du noch nie gehört hast. Für Entwickler, die mit Tokens, Secrets oder internen Daten arbeiten, ist das kein Nice-to-have — es ist eine Voraussetzung.</p>

<h3>Zugriff über die Menüleiste</h3>
<p>Bellows sitzt in deiner Menüleiste und ist immer nur einen Klick entfernt, ohne dein Dock zu überladen. Klicke auf das Icon, wähle ein Tool, füge deine Eingabe ein, erhalte die Ausgabe. Die gesamte Interaktion dauert Sekunden und du verlässt nie deinen aktuellen Arbeitsbereich.</p>

<h2>Für wen ist das gedacht?</h2>
<p>Backend-Entwickler, die API-Antworten debuggen. Frontend-Entwickler, die Farben zwischen Hex und RGB konvertieren. DevOps-Ingenieure, die Base64-kodierte Secrets dekodieren. Mobile Entwickler, die UUIDs für Testdaten generieren. Jeder, der schon einmal gedacht hat: „Das muss doch schneller gehen" — während er einen Browser-Tab geöffnet hat.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "json-formatter-mac-app": {
    slug: "json-formatter-mac-app",
    title: "JSON-Formatierer für Mac — Native App, funktioniert offline",
    description:
      "Unformatierten JSON in ein Browser-Tool einzufügen, um ihn zu lesen, ist ein Workflow, den du dutzende Male pro Woche wiederholst, ohne ihn zu hinterfragen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Eine API liefert eine 200 Zeilen lange JSON-Antwort, die in eine einzige Zeile komprimiert ist. Du musst ein verschachteltes Feld finden. Also kopierst du sie, öffnest einen Browser-Tab, navigierst zu einer der dutzend JSON-Formatierer-Websites, fügst sie ein, klickst auf „Formatieren" und starrst auf die Ausgabe. Wenn der JSON etwas Sensibles enthält — Tokens, Nutzerdaten, interne IDs — hast du es gerade an einen Drittanbieter-Server geschickt.</p>

<p>Das ist eine der häufigsten Mikro-Aufgaben in der Softwareentwicklung, und die meisten Entwickler erledigen sie auf die ineffizienteste Art und Weise.</p>

<h2>Der Terminal-Ansatz</h2>
<p>macOS enthält <code>python3</code>, sodass du JSON durch <code>python3 -m json.tool</code> im Terminal leiten kannst. Es funktioniert bei wohlgeformtem Input. Aber es scheitert an Trailing Commas, gibt kryptische Fehlermeldungen bei fehlerhaftem JSON aus, und die Ausgabe bleibt in deinem Terminal-Fenster gefangen. Es gibt kein Syntax-Highlighting, keine einklappbaren Knoten und keine Möglichkeit, schnell einen verschachtelten Pfad zu kopieren.</p>

<p>Manche Entwickler installieren <code>jq</code> über Homebrew, was leistungsfähiger ist, aber eine weitere Abhängigkeit hinzufügt und erfordert, dass man die Abfragesyntax lernt — für alles über die Grundformatierung hinaus.</p>

<h2>Ein nativer JSON-Formatierer auf deinem Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen JSON-Formatierer als eines von 41 integrierten Entwickler-Tools. Füge JSON in den Eingabebereich ein und erhalte sofort formatierten, lesbaren Output. Keine Netzwerkverbindung nötig — alles läuft lokal auf deinem Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON-Formatierer-Tool mit formatierter Ausgabe auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zwischenablage-Erkennung</h3>
<p>Kopiere einen JSON-String in die Zwischenablage und öffne Bellows. Die App erkennt den JSON-Inhalt und schlägt automatisch den Formatierer vor. Kein Navigieren durch Menüs — das Tool, das du brauchst, wartet bereits.</p>

<h3>Teil eines größeren Werkzeugkastens</h3>
<p>JSON-Formatierung passiert selten isoliert. Vielleicht musst du erst einen Base64-String dekodieren, um an den JSON zu kommen, oder ein JWT-Payload extrahieren, das JSON enthält, oder einen URL-kodierten Query-Parameter dekodieren, der ein JSON-Objekt enthält. Mit 41 Tools in einer App kannst du diese Operationen verketten, ohne zwischen verschiedenen Programmen zu wechseln.</p>

<h3>Wenn du es am meisten brauchst</h3>
<p>Einen Webhook-Payload um 23 Uhr debuggen. Eine Config-Datei überprüfen, die ein Kollege in Slack eingefügt hat. Einen Core-Data-Export inspizieren. Die Struktur einer Mock-Antwort verifizieren, bevor du einen Test schreibst. Das sind die Momente, in denen der Griff zum Browser-Tab am schwersten wiegt — und ein nativer App in der Menüleiste den größten Unterschied macht.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "base64-encoder-decoder-mac": {
    slug: "base64-encoder-decoder-mac",
    title: "Base64-Kodierer und -Dekodierer für Mac",
    description:
      "Base64-Strings über Terminal-Befehle oder Web-Tools zu dekodieren unterbricht jedes Mal deinen Flow, wenn du auf einen kodierten Wert in Logs oder Configs stößt.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du liest Umgebungsvariablen durch und findest einen Wert, der wie Kauderwelsch aussieht — <code>eyJhbGciOiJIUzI1NiJ9</code>. Du weißt, dass es Base64 ist, aber du kannst es nicht direkt lesen. Also kopierst du es, öffnest Terminal, tippst <code>echo "..." | base64 --decode</code>, merkst, dass du auf macOS das <code>-D</code>-Flag vergessen hast, versuchst es nochmal, und siehst endlich die dekodierte Ausgabe. Dreißig Sekunden weg für etwas, das zwei dauern sollte.</p>

<p>Base64-Kodierung taucht überall auf: Authentifizierungs-Header, E-Mail-Anhänge, Data-URIs in CSS, Kubernetes-Secrets, CI/CD-Pipeline-Konfigurationen. Wenn du mit APIs oder Infrastruktur arbeitest, dekodierst du Base64 mehrmals am Tag.</p>

<h2>Warum Terminal nicht ausreicht</h2>
<p>Der eingebaute <code>base64</code>-Befehl auf macOS funktioniert, hat aber Eigenheiten. Das Decode-Flag ist <code>-D</code> (Großbuchstabe) auf macOS versus <code>-d</code> auf Linux, was jeden stolpern lässt, der auf beiden Systemen arbeitet. Mehrzeilige Eingaben erfordern sorgfältiges Quoting. Und es gibt kein visuelles Feedback — du tippst einen Befehl, bekommst einen String zurück und hoffst, dass du die Eingabe nicht versehentlich abgeschnitten hast.</p>

<p>Browser-basierte Tools lösen das Usability-Problem, schaffen aber ein Sicherheitsproblem. Base64-kodierte Werte sind oft Secrets: API-Schlüssel, Tokens, Zertifikatsdaten. Sie in eine Website einzufügen, macht den Zweck der Kodierung zunichte.</p>

<h2>Lokal kodieren und dekodieren mit einem Klick</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen Base64-Kodierer und -Dekodierer als Teil seines 41-Tool-Entwickler-Werkzeugkastens für macOS. Füge deinen kodierten String ein, sieh sofort die dekodierte Ausgabe. Wechsle die Richtung, um Klartext in Base64 zu kodieren. Alles passiert auf deinem Rechner — keine Daten verlassen deinen Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Base64-Kodierer und -Dekodierer-Tool auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Häufige Anwendungsfälle</h3>
<p>Kubernetes-Secrets dekodieren, die als Base64 in YAML-Manifesten gespeichert sind. Den Payload eines JWT inspizieren (der Base64url-kodiert ist). Ein Bild in eine Base64-Data-URI konvertieren, um es in HTML einzubetten. Anmeldedaten für einen HTTP-Basic-Auth-Header kodieren. Jede dieser Aufgaben erfordert nur ein einfaches Einfügen-und-Lesen statt eines Terminal-Befehls oder Browser-Umwegs.</p>

<h3>Zwischenablage-fähig</h3>
<p>Kopiere einen Base64-String und öffne Bellows über die Menüleiste. Die App erkennt den kodierten Inhalt in deiner Zwischenablage und schlägt das Base64-Tool vor, sodass du den Schritt des manuellen Navigierens überspringst.</p>

<h3>Kein Installations-Overhead</h3>
<p>Im Gegensatz zu Homebrew-Formulas oder Python-Skripten, die Pflege brauchen, ist Bellows eine einzige Mac-App-Store-Installation mit automatischen Updates. Die App läuft nativ auf Apple-Silicon- und Intel-Macs ohne Abhängigkeiten.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "devtoys-alternative-mac": {
    slug: "devtoys-alternative-mac",
    title: "DevToys-Alternative für Mac",
    description:
      "DevToys hat die Idee des All-in-One-Entwickler-Werkzeugkastens auf Windows gebracht, aber die macOS-Version hat nie das native Erlebnis geliefert, das Mac-Nutzer erwarten.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Wenn du DevToys auf Windows benutzt hast, kennst du den Reiz: eine App, die JSON-Formatierung, Base64, JWT-Dekodierung, Hash-Generierung und ein Dutzend weitere Hilfsfunktionen übernimmt. Keine Browser-Tabs, keine CLI-Befehle, kein Kontextwechsel. Dann bist du auf macOS umgestiegen und hast nach dem Gleichen gesucht.</p>

<p>Die macOS-Version von DevToys existiert, hat sich aber immer eher wie ein Port als eine native App angefühlt. Die UI folgt nicht den macOS-Konventionen, die Performance kann auf Apple Silicon haken, und sie trägt das Gewicht eines plattformübergreifenden Frameworks mit sich. Wenn du einen Mac wegen der Softwarequalität gewählt hast, fällt der Unterschied auf.</p>

<h2>Was Mac-Entwickler wirklich wollen</h2>
<p>macOS-Nutzer erwarten Apps, die sich anfühlen, als gehörten sie zur Plattform. Das bedeutet eine native Seitenleiste, Standard-Tastaturkürzel, ordentliche Dark-Mode-Unterstützung und Integration mit Systemfunktionen wie der Menüleiste. Das sind keine kosmetischen Vorlieben — sie beeinflussen, wie schnell du rein, die Aufgabe erledigen und wieder raus kannst.</p>

<p>Eine Entwickler-Tools-App lebt in den Lücken zwischen konzentrierten Arbeitsphasen. Sie muss sofort starten, Eingaben ohne Reibung annehmen und verschwinden, wenn du fertig bist. Jede Millisekunde Lag oder UI-Verwirrung arbeitet gegen diesen Zweck.</p>

<h2>Eine Mac-native Alternative mit 41 Tools</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> ist in Swift speziell für macOS geschrieben. Die App nutzt eine NavigationSplitView-Seitenleiste, um 41 Tools in fünf Kategorien zu organisieren: Formatierer, Kodierer, Generatoren, Konverter und Text-Tools. Sie läuft sowohl als Menüleisten-App als auch als eigenständiges Fenster — je nachdem, wie du arbeitest.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows als native macOS-DevToys-Alternative mit NavigationSplitView-Seitenleiste" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Wie es sich mit DevToys vergleicht</h3>
<p>Beide Apps decken das gleiche Kerngebiet ab — JSON-Formatierung, Kodierung/Dekodierung, Hashing, UUID-Generierung, Farbkonvertierung. Wo Bellows sich unterscheidet, ist die Plattform-Integration. Zwischenablage-Erkennung schlägt das richtige Tool basierend auf dem vor, was du gerade kopiert hast. Menüleisten-Zugriff bedeutet, dass du nie Cmd-Tab drücken musst, um die App zu finden. Die Verlaufsanzeige bringt deine meistgenutzten Tools nach oben. Das sind kleine Details, die sich aber über Hunderte täglicher Interaktionen summieren.</p>

<h3>Vollständig offline</h3>
<p>Wie DevToys läuft Bellows komplett offline. Keine Daten verlassen deinen Rechner, kein Account nötig, keine Telemetrie. Für Entwickler, die mit Anmeldedaten, Tokens oder proprietären Daten arbeiten, ist das Pflicht — aber es explizit zu bestätigen, ist dennoch sinnvoll.</p>

<h3>Native Performance</h3>
<p>Weil Bellows mit nativen macOS-Frameworks gebaut ist und nicht mit Electron oder einem plattformübergreifenden Toolkit, startet es sofort und verbraucht minimal Speicher. Es verhält sich wie ein System-Dienstprogramm, nicht wie eine Web-App im nativen Gewand.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "jwt-decoder-mac": {
    slug: "jwt-decoder-mac",
    title: "JWT-Decoder für Mac — Einfügen und inspizieren",
    description:
      "JWTs in jwt.io einzufügen, um ihre Claims zu lesen, funktioniert — bis du merkst, dass du gerade ein gültiges Token an eine Drittanbieter-Website geschickt hast.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du nimmst ein JWT aus einem Request-Header oder einer Log-Datei. Es ist ein langer, durch Punkte getrennter String, der für das menschliche Auge nichts bedeutet. Du musst den Ablauf-Claim prüfen, den Aussteller verifizieren oder sehen, welche Scopes eingebettet sind. Also öffnest du jwt.io, fügst das Token ein und liest den dekodierten Payload im rechten Bereich.</p>

<p>Dieser Workflow hat ein Problem: Du hast gerade ein gültiges Authentifizierungs-Token über das Netzwerk an eine Website geschickt, die du nicht kontrollierst. JWT-Payloads enthalten oft Benutzer-IDs, E-Mail-Adressen, Rollen und Berechtigungen. Das Token selbst ist möglicherweise noch gültig. Selbst wenn jwt.io vertrauenswürdig ist — die Sicherheitsrichtlinien deines Unternehmens sehen das vielleicht anders.</p>

<h2>Was ein JWT tatsächlich enthält</h2>
<p>Ein JSON Web Token besteht aus drei Teilen, die durch Punkte getrennt sind: einem Header (Algorithmus und Typ), einem Payload (die Claims — Ablauf, Aussteller, Subjekt, benutzerdefinierte Daten) und einer Signatur. Header und Payload sind einfach Base64url-kodiertes JSON. Du brauchst keinen Server und keine spezielle Bibliothek, um sie zu lesen — du brauchst einen Base64-Decoder und einen JSON-Formatierer. Aber das jedes Mal manuell im Terminal zu machen, ist mühsam.</p>

<h2>JWTs lokal auf deinem Mac dekodieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen dedizierten JWT-Decoder, der das Token in seine drei Teile aufspaltet und den dekodierten Header und Payload als formatiertes JSON anzeigt. Füge das Token ein und sieh die Claims. Keine Netzwerkanfrage, kein Drittanbieter-Server, kein Risiko, ein gültiges Token zu leaken.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JWT-Decoder zeigt dekodierten Header und Payload auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zwischenablage-fähig</h3>
<p>Kopiere ein JWT aus den Entwickler-Tools deines Browsers, einer Log-Datei oder einer Slack-Nachricht. Öffne Bellows und die App erkennt das Token-Format in deiner Zwischenablage und schlägt sofort den JWT-Decoder vor. Der dekodierte Payload erscheint in einem Schritt.</p>

<h3>Ablauf auf einen Blick prüfen</h3>
<p>Der häufigste Grund, ein JWT zu dekodieren, ist die Prüfung, ob es abgelaufen ist. Der <code>exp</code>-Claim ist ein Unix-Zeitstempel — leicht für Maschinen, nichtssagend für Menschen. Den dekodierten Payload zu sehen, ermöglicht es dir, den Ablauf schnell zusammen mit anderen Claims wie <code>iss</code>, <code>sub</code> und <code>aud</code> zu lesen, ohne Zeitstempel im Kopf umzurechnen.</p>

<h3>Teil eines größeren Werkzeugkastens</h3>
<p>JWT-Dekodierung führt oft zu verwandten Aufgaben: einen Base64-Wert innerhalb eines Claims dekodieren, einen String hashen, um ihn mit einem Fingerabdruck zu vergleichen, oder eine Redirect-URI dekodieren, die im Payload gespeichert ist. Mit 41 Tools in derselben App erfordern diese Folgeaufgaben keinen Wechsel zu einem anderen Programm.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "url-encoder-decoder-mac": {
    slug: "url-encoder-decoder-mac",
    title: "URL-Kodierer und -Dekodierer für Mac",
    description:
      "Prozentkodierte URLs voller %20 und %3D zu lesen ist wie einen Satz zu lesen, in dem jedes Leerzeichen durch eine Zahl ersetzt wurde.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du holst eine URL aus den Server-Logs und sie sieht so aus: <code>https://example.com/search?q=hello%20world&redirect=https%3A%2F%2Fother.com%2Fpath</code>. Du musst die Query-Parameter lesen, aber die Prozentkodierung macht es auf einen Blick fast unmöglich. Also fügst du sie in ein Browser-Tool ein, dekodierst sie, liest das Ergebnis und kodierst dann eine geänderte Version neu, um etwas zu testen. Zwei Umwege über eine Website für etwas, das eine triviale Operation sein sollte.</p>

<p>URL-Kodierung ist etwas, mit dem Entwickler ständig zu tun haben, aber selten darüber nachdenken — bis ein fehlerhafter Redirect, ein fehlgeformter Query-String oder ein doppelt kodierter Parameter aus einer Fünf-Minuten-Aufgabe eine einstündige Debugging-Sitzung macht.</p>

<h2>Wenn URL-Kodierung echte Probleme verursacht</h2>
<p>Doppelte Kodierung ist die klassische Falle. Eine URL wird einmal von deiner Anwendung kodiert und nochmal von einer Middleware-Schicht, wodurch aus <code>%20</code> ein <code>%2520</code> wird. Um das zu diagnostizieren, musst du die URL Schritt für Schritt dekodieren und genau sehen, wo die zusätzliche Kodierung hineingekommen ist. Das im Terminal mit <code>python3 -c "import urllib.parse; print(urllib.parse.unquote('...'))"</code> zu machen funktioniert, ist aber langsam und fehleranfällig bei langen URLs.</p>

<p>Kodierungsfehler brechen auch OAuth-Flows, Webhook-URLs und API-Callbacks, bei denen die Redirect-URI exakt übereinstimmen muss. Schnell kodieren und dekodieren zu können, lässt dich vergleichen, was deine App sendet versus was der Server erwartet.</p>

<h2>URLs sofort kodieren und dekodieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen URL-Kodierer und -Dekodierer unter seinen 41 Entwickler-Tools. Füge eine kodierte URL ein, um die lesbare Version zu sehen. Tippe eine normale URL ein, um die korrekt kodierte Ausgabe zu erhalten. Wechsle zwischen Kodieren und Dekodieren mit einem Klick, und das Ergebnis aktualisiert sich in Echtzeit.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows URL-Kodierer und -Dekodierer-Tool auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Redirects debuggen</h3>
<p>OAuth- und SSO-Flows übergeben Redirect-URIs als URL-kodierte Query-Parameter. Wenn ein Redirect fehlschlägt, ist der erste Schritt, die URL zu dekodieren, um zu prüfen, ob das Ziel mit deinem registrierten Callback übereinstimmt. Ein lokales Tool bedeutet, dass du das tun kannst, ohne deine IDE zu verlassen oder potenziell sensible Callback-URLs in eine öffentliche Website einzufügen.</p>

<h3>Arbeit mit Query-Strings</h3>
<p>APIs, die komplexe Filter oder Suchanfragen über URL-Parameter akzeptieren, erfordern oft eine sorgfältige Kodierung von Sonderzeichen wie <code>&</code>, <code>=</code>, <code>+</code> und Leerzeichen. Ein dedizierter Kodierer stellt sicher, dass du die richtige Ausgabe bekommst, ohne raten zu müssen, welche Zeichen in deinem spezifischen Kontext escaped werden müssen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "hash-generator-mac-app": {
    slug: "hash-generator-mac-app",
    title: "Hash-Generator für Mac — MD5, SHA-256 und mehr",
    description:
      "Dateiintegrität zu prüfen oder Passwort-Hashes über Terminal-Befehle zu generieren bedeutet, jedes Mal die verschiedenen Flags für jeden Algorithmus im Kopf haben zu müssen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du lädst eine Binärdatei von GitHub herunter und die Release-Seite listet eine SHA-256-Prüfsumme. Um sie zu verifizieren, öffnest du Terminal, tippst <code>shasum -a 256 ~/Downloads/file.tar.gz</code>, wartest auf die Berechnung und vergleichst dann manuell zwei 64-Zeichen-Hex-Strings nebeneinander. Ein falsches Zeichen und du kannst nicht sagen, ob die Datei beschädigt ist oder du dich nur verlesen hast.</p>

<p>Oder du brauchst einen MD5-Hash eines Strings — vielleicht für einen Cache-Key, eine Gravatar-URL oder eine Legacy-API, die noch MD5-Signaturen verwendet. Der Befehl lautet <code>md5 -s "text"</code> auf macOS, aber <code>md5sum</code> auf Linux. Kleine Unterschiede, aber genug, um dich auszubremsen, wenn du zwischen Systemen wechselst.</p>

<h2>Hashing im Terminal: Es funktioniert — gerade so</h2>
<p>macOS liefert <code>md5</code>, <code>shasum</code> und <code>openssl dgst</code> mit und deckt damit die meisten Algorithmen ab. Aber jedes Tool hat seine eigene Syntax. <code>md5</code> nutzt <code>-s</code> für String-Eingabe. <code>shasum</code> nutzt <code>-a</code> zur Algorithmus-Auswahl. <code>openssl dgst</code> erfordert <code>-sha256</code> oder <code>-md5</code> als Flag. Es gibt keinen einzigen Befehl, mit dem du einen Algorithmus auswählen und einen String hashen kannst, ohne die Man-Page zu konsultieren.</p>

<p>Für Entwickler, die nur gelegentlich einen schnellen Hash brauchen, steht der kognitive Aufwand, sich diese Variationen zu merken, in keinem Verhältnis zur Einfachheit der Aufgabe.</p>

<h2>Hashes mit einem Einfügen generieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen Hash-Generator, der MD5, SHA-1, SHA-256, SHA-384, SHA-512 und andere gängige Algorithmen unterstützt. Tippe oder füge deine Eingabe ein, wähle einen Algorithmus, und der Hash erscheint sofort. Keine Flags merken, keine Syntax nachschlagen.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Hash-Generator zeigt MD5- und SHA-256-Ausgabe auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Downloads verifizieren</h3>
<p>Wenn eine Release-Seite eine Prüfsumme bereitstellt, willst du sie mit der heruntergeladenen Datei vergleichen. Den Hash in einem visuellen Tool zu generieren, macht den Vergleich einfacher als das Abgleichen zweier Strings in einem Terminal-Fenster — besonders bei 64 Zeichen langen SHA-256-Hashes.</p>

<h3>API-Signaturen und Cache-Keys</h3>
<p>Manche APIs erfordern HMAC- oder hash-basierte Signaturen zur Anfrage-Authentifizierung. Andere nutzen MD5- oder SHA-Hashes als Cache-Keys oder Content-Identifier. Schnell einen Hash eines Request-Bodys oder eines Strings generieren zu können, lässt dich deine Implementierung beim Debugging gegen die erwarteten Werte verifizieren.</p>

<h3>Offline und privat</h3>
<p>Hash-Eingaben können sensible Daten enthalten — Passwörter, API-Secrets, interne Kennungen. Bellows läuft komplett auf deinem Mac ohne Netzwerkzugriff, sodass nichts, was du hashst, jemals deinen Rechner verlässt.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "regex-tester-mac-app": {
    slug: "regex-tester-mac-app",
    title: "Regex-Tester für Mac — Nativ und offline",
    description:
      "Reguläre Ausdrücke ohne Live-Feedback zu schreiben ist wie Code ohne Syntax-Highlighting zu bearbeiten — technisch möglich, aber unnötig schmerzhaft.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Du brauchst einen Regex, um E-Mail-Adressen zu validieren, Zeitstempel aus Log-Zeilen zu extrahieren oder ein CSV-Feld zu parsen, das manchmal Kommas in Anführungszeichen enthält. Du schreibst ein Muster, testest es gegen einen Beispiel-String in deinem Code, stellst fest, dass es bei einem Grenzfall fehlschlägt, passt es an, baust neu, testest nochmal. Jede Iteration dauert 30 Sekunden Kompilieren-Ausführen-Prüfen, und die meisten Regex-Muster brauchen fünf oder sechs Iterationen, bevor sie zuverlässig funktionieren.</p>

<p>Die Alternative ist regex101.com — ein exzellentes Tool, das Treffer in Echtzeit anzeigt, jeden Teil des Musters erklärt und es ermöglicht, gegen mehrere Eingaben gleichzeitig zu testen. Aber es läuft im Browser, was bedeutet, dass du deine Testdaten (Log-Zeilen, Nutzer-Datensätze, API-Antworten) in eine öffentliche Website einfügst. Und du brauchst eine Internetverbindung.</p>

<h2>Warum Live-Feedback bei Regex wichtig ist</h2>
<p>Reguläre Ausdrücke sind von Natur aus dicht gepackt. Der Unterschied zwischen <code>.*</code> und <code>.*?</code> (gierig versus faul) kann darüber entscheiden, ob dein Muster eine Zeile oder eine ganze Datei erfasst. Lookaheads, Zeichenklassen und Capture-Groups interagieren auf Weisen, die im Kopf schwer nachzuvollziehen sind. Treffer hervorgehoben zu sehen, während du das Muster tippst, verwandelt Regex von Raterei in einen visuellen, iterativen Prozess.</p>

<p>Deshalb sind browser-basierte Tester so beliebt — sie liefern die Feedback-Schleife, die das Schreiben von Regex im Quellcode nicht bietet. Das Problem ist, dass sie einen Browser, eine Internetverbindung und Vertrauen erfordern, dass deine Testdaten privat bleiben.</p>

<h2>Regex lokal auf deinem Mac testen</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen Regex-Tester als eines von 41 Entwickler-Tools. Tippe dein Muster ein, füge deinen Test-String ein und sieh Treffer in Echtzeit hervorgehoben. Passe das Muster an und die Ergebnisse aktualisieren sich sofort — kein Kompilierschritt, kein Seiten-Neuladen, keine Netzwerkanfrage.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Regex-Tester mit Live-Treffer-Hervorhebung auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gängige Muster leichter gemacht</h3>
<p>Datumsangaben aus Log-Dateien extrahieren (<code>\\d{4}-\\d{2}-\\d{2}</code>). Telefonnummern mit optionaler Landesvorwahl validieren. URLs in Freitext finden. Strukturierte Daten wie CSV oder TSV parsen, bei denen Felder in Anführungszeichen stehen können. Diese Muster sind im Konzept einfach, aber bei Grenzfällen knifflig — und ein Live-Tester lässt dich diese Randfälle erkennen, bevor sie in Produktion landen.</p>

<h3>Keine Daten verlassen deinen Mac</h3>
<p>Wenn deine Testdaten Server-Logs, Nutzerinformationen oder interne Systemausgaben enthalten, ist das Testen von Regex-Mustern offline nicht nur bequem — es ist die verantwortungsvolle Wahl. Bellows läuft komplett auf deinem Rechner ohne Netzwerkzugriff.</p>

<h3>Immer verfügbar</h3>
<p>Bellows sitzt in deiner Menüleiste, sodass der Regex-Tester nur einen Klick entfernt ist. Kein Browser-Tab zum Suchen, keine URL zum Merken, kein Lade-Spinner. Öffnen, Muster testen, Ergebnis kopieren, schließen. Die gesamte Interaktion dauert Sekunden.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "color-picker-hex-rgb-mac": {
    slug: "color-picker-hex-rgb-mac",
    title: "Farbwähler mit Hex und RGB für Mac",
    description:
      "Zwischen Hex-Codes, RGB-Werten und HSL-Notation hin und her zu rechnen ist fehleranfällig und unnötig, wenn du es mehrmals am Tag tust.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Ein Designer schickt dir eine Farbe als Hex: <code>#1A73E8</code>. Dein CSS-Framework will HSL. Deine iOS-Codebasis braucht RGB-Werte zwischen 0 und 1. Dein Android-Projekt verwendet ARGB-Integer. Eine Farbe, vier Formate, und du öffnest einen Browser-Tab, um zwischen ihnen zu konvertieren — schon wieder.</p>

<p>Farbkonvertierung ist triviale Mathematik (Hex zu RGB ist nur Basis-16 zu Dezimal), aber sie im Kopf für drei Kanäle durchzuführen, während du dich auf Layout oder Styling konzentrierst, ist eine Ablenkung, die du nicht brauchst.</p>

<h2>Was macOS bietet</h2>
<p>macOS hat einen eingebauten Farbwähler, der aus manchen Apps über das System-Farbpanel erreichbar ist. Er zeigt RGB-Regler und ein Hex-Feld, ist aber für das visuelle Auswählen von Farben gedacht, nicht für das programmatische Konvertieren zwischen Formaten. Es gibt keinen einfachen Weg, einen Hex-Code einzufügen und das HSL-Äquivalent zu bekommen, oder RGB-Integer einzugeben und die Hex-Ausgabe zu kopieren. Und er ist in bestimmten Apps versteckt statt systemweit verfügbar.</p>

<h2>Farben sofort zwischen Formaten konvertieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen Farbkonverter unter seinen 41 Entwickler-Tools. Gib eine Farbe in einem unterstützten Format ein — Hex, RGB, HSL — und sieh die äquivalenten Werte in jedem anderen Format. Kopiere die Darstellung, die du brauchst, mit einem Klick.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Farbwähler zeigt Hex-, RGB- und HSL-Konvertierung auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vom Design zum Code</h3>
<p>Figma exportiert Farben als Hex. Tailwind CSS verwendet benutzerdefinierte Farbwerte. SwiftUI will <code>Color(red:green:blue:)</code> mit Dezimalwerten. Android-XML verwendet <code>#AARRGGBB</code>. Alle Formate gleichzeitig sichtbar zu haben, eliminiert das Kopfrechnen und die Umwege über Konvertierungs-Websites.</p>

<h3>Kontrast und Lesbarkeit prüfen</h3>
<p>Wenn du die Farbe neben ihren numerischen Werten gerendert siehst, kannst du schnell einschätzen, ob eine Textfarbe vor einem Hintergrund lesbar sein wird. Das ist schneller, als für jedes Farbpaar in deinem Stylesheet zu einem separaten Kontrast-Checker zu wechseln.</p>

<h3>Zugriff über die Menüleiste</h3>
<p>Brauchst du eine schnelle Konvertierung beim CSS-Schreiben? Klicke auf das Bellows-Icon in deiner Menüleiste, wähle das Farb-Tool, füge den Hex-Code ein und kopiere den RGB-Wert. Die gesamte Interaktion dauert unter fünf Sekunden und du verlässt nie deinen Editor.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "uuid-generator-mac": {
    slug: "uuid-generator-mac",
    title: "UUID-Generator für Mac — Sofort kopieren",
    description:
      "UUIDs über Terminal oder Code-Snippets zu generieren fügt einer Aufgabe Reibung hinzu, die eigentlich komplett gedankenlos ablaufen sollte.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du brauchst eine UUID. Vielleicht schreibst du einen Unit-Test und brauchst einen eindeutigen Identifier für ein Mock-Objekt. Vielleicht befüllst du eine Datenbank und brauchst Primärschlüssel. Vielleicht erstellst du eine neue Entität in einer Config-Datei und das Schema verlangt eine UUID. Was auch immer der Grund ist, du musst unterbrechen, was du gerade tust, die UUID irgendwo generieren, kopieren und wieder in deinen Code einfügen.</p>

<p>Das passiert oft genug, dass die meisten Entwickler eine Muskelgedächtnis-Lösung haben: <code>uuidgen</code> im Terminal, ein Browser-Lesezeichen oder ein Snippet in ihrem Editor. Jede funktioniert. Keine davon ist wirklich reibungslos.</p>

<h2>Der Terminal-Weg</h2>
<p>macOS enthält <code>uuidgen</code>, das eine UUID v4 auf stdout ausgibt. Es ist schnell und zuverlässig. Aber die Ausgabe ist standardmäßig in Großbuchstaben (manche Systeme erwarten Kleinbuchstaben), es generiert eine UUID auf einmal, und die Nutzung bedeutet, zu Terminal zu wechseln, den Befehl auszuführen, die Ausgabe zu markieren, zu kopieren und zurückzuwechseln. Für eine einzelne UUID ist das in Ordnung. Für zehn UUIDs zum Befüllen einer Testdatenbank wird es mühsam.</p>

<h2>UUIDs aus der Menüleiste generieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen UUID-Generator als eines von 41 Entwickler-Tools. Öffne ihn über die Menüleiste, generiere eine UUID und kopiere sie in die Zwischenablage. Noch eine nötig? Erneut generieren. Das Tool ist immer nur einen Klick entfernt, läuft offline und erzeugt Standard-v4-UUIDs, bereit zum Einfügen in Code, Configs oder Datenbank-Seed-Dateien.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows UUID-Generator mit sofortigem Kopieren auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tests und Mock-Daten</h3>
<p>Unit-Tests und Integrationstests brauchen oft eindeutige Identifier, die realistisch aussehen. Überall dieselbe UUID hartzukodieren, führt zu subtilen Bugs, wenn Tests parallel laufen oder ein Test versehentlich von einer bestimmten ID abhängt. Für jede Test-Fixture frische UUIDs zu generieren, ist eine einfache Gewohnheit, die eine ganze Klasse von flaky Tests verhindert.</p>

<h3>Datenbank befüllen</h3>
<p>Beim Befüllen einer Entwicklungsdatenbank mit Beispieldaten brauchst du eindeutige Primärschlüssel, die nicht mit Produktionsdaten oder Seed-Dateien anderer Entwickler kollidieren. UUIDs bei Bedarf zu generieren, ist sauberer als Integers hochzuzählen oder vorhersagbare Muster zu verwenden, die sich überschneiden könnten.</p>

<h3>Immer verfügbar</h3>
<p>Weil Bellows in deiner Menüleiste lebt, ist der UUID-Generator erreichbar, ohne Terminal zu öffnen, Apps zu wechseln oder zu einem Lesezeichen zu navigieren. Klicken, generieren, kopieren, einfügen. Die Unterbrechung deines Workflows wird in Sekunden gemessen, nicht in Kontextwechseln.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "all-in-one-dev-tools-mac-offline": {
    slug: "all-in-one-dev-tools-mac-offline",
    title: "All-in-One Entwickler-Tools für Mac — 41 Tools, vollständig offline",
    description:
      "Browser-Tabs zum Kodieren, Terminal-Fenster zum Hashen, Lesezeichen zum Formatieren — Entwickler-Mikroaufgaben sind über ein Dutzend Orte verstreut.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Zähle die Tools, die du in einer typischen Debugging-Sitzung verwendest. Ein JSON-Formatierer, um eine API-Antwort zu lesen. Ein Base64-Decoder für einen Auth-Header. Ein JWT-Inspektor, um Token-Claims zu prüfen. Ein URL-Decoder, um eine Redirect-Kette zu entwirren. Ein Hash-Generator, um eine Prüfsumme zu verifizieren. Das sind fünf Browser-Tabs offen, fünf Websites, die jetzt deine Daten haben, und fünf Kontextwechsel, die dich vom eigentlichen Problem abgelenkt haben.</p>

<p>Das sind keine komplexen Aufgaben. Jede einzelne erfordert zehn Sekunden tatsächliche Arbeit. Aber der Overhead, das richtige Tool zu finden, dorthin zu wechseln, Input einzufügen und Output zu kopieren, summiert sich auf Minuten pro Sitzung und Stunden pro Woche. Schlimmer noch: Es fragmentiert deine Aufmerksamkeit genau in den Momenten, in denen du ein komplexes System im Kopf behalten musst.</p>

<h2>Die aktuelle Landschaft</h2>
<p>Entwickler haben sich persönliche Werkzeugkästen aus verschiedenen Quellen zusammengebaut. Browser-Lesezeichen zu Seiten wie jwt.io, regex101.com und jsonformatter.org. Shell-Aliases und Funktionen in <code>.zshrc</code>. VS-Code-Erweiterungen für Formatierung oder Kodierung. Homebrew-Pakete wie <code>jq</code> und <code>htop</code>. Jedes Tool wurde hinzugefügt, um ein Problem zu lösen, und keines kommuniziert mit den anderen.</p>

<p>Das Ergebnis ist eine Toolchain, die technisch funktioniert, aber keinen Zusammenhalt hat. Du kannst nicht vorhersagen, wo das nächste Hilfsprogramm zu finden ist. Du kannst keine Operationen verketten, ohne manuell die Ausgabe aus einem Tool zu kopieren und in ein anderes einzufügen. Und du kannst nicht garantieren, dass die web-basierten Tools deine Daten privat halten.</p>

<h2>41 Tools in einer nativen macOS-App</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> konsolidiert 41 Entwickler-Tools in einer einzigen macOS-Anwendung, organisiert in fünf Kategorien:</p>

<ul>
<li><strong>Formatierer</strong> — JSON, XML, SQL, HTML und mehr. Unordentlichen Input einfügen, sauberen Output erhalten.</li>
<li><strong>Kodierer</strong> — Base64, URL-Kodierung, HTML-Entitäten, JWT-Dekodierung. In beide Richtungen kodieren und dekodieren.</li>
<li><strong>Generatoren</strong> — UUIDs, Hashes (MD5, SHA-256, SHA-512), Lorem Ipsum, Passwörter. In einem Schritt generieren und kopieren.</li>
<li><strong>Konverter</strong> — Farben (Hex/RGB/HSL), Zahlensysteme, Zeitstempel, Einheiten. Zwischen Formaten konvertieren ohne Kopfrechnen.</li>
<li><strong>Text-Tools</strong> — Regex-Tester, Diff-Checker, Groß-/Kleinschreibung-Konverter, Zeilensortierer, Zeichenzähler. Die Textbearbeitungs-Werkzeuge, die du täglich brauchst.</li>
</ul>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows zeigt alle 41 Entwickler-Tools kategorisiert auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zwischenablage-Erkennung</h3>
<p>Kopiere etwas in die Zwischenablage und öffne Bellows. Die App analysiert den Inhalt der Zwischenablage und schlägt das passendste Tool vor. Kopiere ein JWT und der Decoder wird angeboten. Kopiere JSON und der Formatierer erscheint. Kopiere einen Base64-String und der Kodierer wird angezeigt. Das entfernt den Schritt der Tool-Auswahl — die App übernimmt das für dich.</p>

<h3>Menüleisten- und Fenstermodus</h3>
<p>Bellows läuft als Menüleisten-App für schnelle Einzeloperationen: auf das Icon klicken, ein Tool nutzen, schließen. Für längere Sitzungen — wie das Testen einer Reihe von Regex-Mustern oder das Konvertieren mehrerer Farbwerte — wechsle in den Fenstermodus und platziere die App neben deinem Editor. Beide Modi nutzen die gleiche Oberfläche mit einer NavigationSplitView-Seitenleiste zum Durchsuchen der Kategorien.</p>

<h3>Vollständig offline</h3>
<p>Jedes Tool läuft lokal auf deinem Mac. Keine Netzwerkanfragen, keine Accounts, keine Telemetrie. Das ist keine philosophische Haltung — es ist eine praktische Anforderung für Entwickler, die täglich mit Tokens, Secrets, Anmeldedaten und proprietären Daten arbeiten. Deine Eingabe bleibt auf deinem Rechner.</p>

<h3>Verlaufsanzeige</h3>
<p>Die Tools, die du am häufigsten verwendest, erscheinen oben in der Seitenleiste. Mit der Zeit passt sich Bellows an deinen Workflow an, sodass die Tools, die du brauchst, immer griffbereit sind, statt in einer Kategorie vergraben, die du erst aufklappen musst.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "json-validator-mac-app": {
    slug: "json-validator-mac-app",
    title: "JSON-Validator für Mac — Fehler sofort finden",
    description:
      "Ein fehlendes Komma oder eine verlorene Klammer kann eine ganze Config-Datei brechen, und sie Zeile für Zeile zu suchen verschwendet Zeit, die du nicht hast.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Dein Build schlägt fehl mit „Unexpected token in JSON at position 4.821." Super, danke. Jetzt darfst du durch eine viertausend Zeichen lange Config-Datei scrollen und im Kopf Klammern zählen, um herauszufinden, welche nicht geschlossen ist. Das ist einer der vermeidbarsten Zeitfresser in der Softwareentwicklung, und es passiert ständig, weil JSON null Toleranz für kleine Fehler hat.</p>

<p>Ein Trailing Comma nach dem letzten Element in einem Array. Ein fehlendes Anführungszeichen um einen Key. Eine zusätzliche schließende geschweifte Klammer, die irgendwoher kopiert wurde. Jeder dieser Fehler bricht das Parsing komplett, und die Fehlermeldung zeigt selten auf das eigentliche Problem — sie zeigt dorthin, wo der Parser aufgegeben hat, was oft mehrere Zeilen vom tatsächlichen Fehler entfernt ist.</p>

<h2>Warum Positionsangaben nicht helfen</h2>
<p>Die meisten JSON-Parser melden Fehler als Zeichenoffset, nicht als Zeile und Spalte, zu der du in deinem Editor springen kannst. Position 4.821 in „Zeile 112, irgendwo beim dritten Objekt" umzurechnen, erfordert entweder manuelles Zählen oder ein Wegwerf-Skript. Beides ist kein guter Einsatz deines Nachmittags.</p>

<p>Manche Editoren heben JSON-Syntaxfehler inline hervor, was bei Dateien hilft, die du aktiv schreibst. Aber für JSON, den du von einer API, einem Kollegen oder einer geerbten Legacy-Config erhalten hast, brauchst du ein Tool, das den Rohtext nimmt und dir genau sagt, was wo falsch ist.</p>

<h2>JSON validieren, ohne deinen Mac zu verlassen</h2>
<p>Ein JSON-Formatierer, der gleichzeitig validiert, spart das Rätselraten. Füge den JSON ein, und wenn er fehlerhaft ist, bekommst du eine klare Fehlermeldung, die auf die spezifische Zeile und das Zeichen zeigt, statt auf ein rohes Byte-Offset. Wenn er gültig ist, wird er sauber mit korrekter Einrückung gerendert, sodass du die Struktur visuell überprüfen kannst. <a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> handhabt beide Fälle im selben Tool — du musst vorher nicht wissen, ob dein JSON kaputt ist.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON-Formatierer validiert und hebt einen Syntaxfehler auf macOS hervor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Fehler abfangen, bevor sie live gehen</h3>
<p>Config-Dateien, API-Request-Bodys und Fixture-Daten stehen und fallen mit validem JSON. Einen schnellen Validierungsdurchlauf vor dem Committen einer Config-Änderung oder dem Senden eines Test-Requests zu machen, fängt die Art von Tippfehler ab, der sonst erst viel später als verwirrender Laufzeitfehler in der Pipeline auftaucht.</p>

<h3>Arbeit mit nicht vertrauenswürdigem Input</h3>
<p>Wenn ein Kollege dir einen JSON-Blob in Slack schickt oder du einen von einer Drittanbieter-API holst, der du nicht vollständig vertraust, bedeutet lokales Validieren, dass du diese Daten nie an eine externe Website schicken musst, nur um zu prüfen, ob sie parsen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "html-entity-encoder-mac": {
    slug: "html-entity-encoder-mac",
    title: "HTML-Entity-Kodierer und -Dekodierer für Mac",
    description:
      "Nutzer-eingereichten Text sicher darzustellen oder einen Seitenquelltext voller &amp; und &lt; zu lesen, läuft auf dasselbe mühsame Konvertierungsproblem hinaus.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du debuggst, warum ein Textabschnitt auf einer Webseite als <code>&amp;amp;</code> statt als einfaches Kaufmanns-Und angezeigt wird. Oder du schreibst HTML von Hand und musst ein Kleiner-als-Zeichen escapen, damit der Browser es nicht als Anfang eines Tags interpretiert. In beiden Fällen hast du es mit HTML-Entitäten zu tun — dem kleinen Satz von Zeichen, die eine spezielle Kodierung brauchen, um korrekt angezeigt zu werden oder um Markup nicht zu brechen.</p>

<p>Die gängigen sind leicht zu merken: <code>&amp;</code> wird zu <code>&amp;amp;</code>, <code>&lt;</code> wird zu <code>&amp;lt;</code>, <code>&gt;</code> wird zu <code>&amp;gt;</code>. Aber sobald du bei typografischen Anführungszeichen, Geviertstrichen, geschützten Leerzeichen und Sonderzeichen ankommst, hören die Entity-Namen auf, intuitiv zu sein, und du suchst jedes Mal eine Referenztabelle.</p>

<h2>Ein Sicherheitsaspekt, nicht nur ein Formatierungsaspekt</h2>
<p>HTML-Entity-Kodierung ist nicht rein kosmetisch. Nutzer-eingereichten Inhalt nicht zu kodieren, bevor er auf einer Webseite gerendert wird, ist ein klassischer Vektor für Cross-Site-Scripting. Wenn deine Anwendung jemals Rohtext — Kommentare, Nutzernamen, Formulareingaben — innerhalb von HTML anzeigen muss, gehört das Verständnis, was genau wie kodiert wird, zum Schreiben von sicherem Code, nicht nur hübsch aussehendem Output.</p>

<p>Umgekehrt ist Dekodierung genauso häufig nötig: Beim Scrapen einer Webseite, Parsen eines RSS-Feeds oder Lesen eines exportierten CMS-Dokuments bleibt oft entity-kodierter Text übrig, der zurück in normale Zeichen konvertiert werden muss, bevor du ihn anderswo verwenden kannst.</p>

<h2>In einem Schritt kodieren und dekodieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen HTML-Entity-Kodierer und -Dekodierer unter seinen 41 Entwickler-Tools. Füge Rohtext ein, um korrekt escapte HTML-Entitäten zu erhalten, oder füge kodiertes Markup ein, um den lesbaren Text zu sehen. Beide Richtungen funktionieren sofort und komplett offline.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows HTML-Entity-Kodierer und -Dekodierer-Tool auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gescrapten Content bereinigen</h3>
<p>Text, der aus RSS-Feeds, exportierten Blogposts oder gescraptem HTML stammt, kommt häufig voller Entity-Codes an, wo normale Satzzeichen stehen sollten. Ihn vor dem Speichern oder Anzeigen an anderer Stelle in einem Rutsch zu dekodieren, vermeidet eine Seite voller verstreuter <code>&amp;#8217;</code>, wo ein Apostroph stehen sollte.</p>

<h3>Markup von Hand schreiben</h3>
<p>Wenn du ein HTML-Template oder einen E-Mail-Newsletter von Hand bearbeitest und ein wörtliches Winkelklammer-Zeichen oder Kaufmanns-Und im sichtbaren Text einfügen musst, spart dir die korrekte Kodierung gleich beim ersten Mal einen Rendering-Bug, der erst nach dem Versenden der E-Mail auffällt.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "timestamp-converter-mac": {
    slug: "timestamp-converter-mac",
    title: "Unix-Zeitstempel-Konverter für Mac",
    description:
      "Eine Log-Zeile zeigt 1743984000 und du musst wissen, ob das drei Stunden oder drei Wochen her ist, ohne es im Kopf auszurechnen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Unix-Zeitstempel sind perfekt für Maschinen und nutzlos für Menschen. Jeder Log-Aggregator, jeder Datenbank-Datensatz und jede API-Antwort scheint Zeit als rohe Ganzzahl zu speichern, die Sekunden seit dem 1. Januar 1970 zählt, und jeder Entwickler hat schon einmal versucht, auf einen Blick einzuschätzen, ob <code>1725580800</code> kürzlich oder uralt ist.</p>

<p>Die übliche Ausweichlösung ist eine schnelle Google-Suche — „1725580800 to date" — was funktioniert, aber einen Browser-Umweg für etwas hinzufügt, das eine Zwei-Sekunden-Abfrage sein sollte. Oder du schreibst einen Einzeiler in einer Sprachkonsole: <code>new Date(1725580800000)</code> in einer Browser-JS-Konsole, wobei du daran denken musst, mit 1000 zu multiplizieren für Millisekunden, und hoffst, dass du Sekunden und Millisekunden nicht verwechselt hast.</p>

<h2>Sekunden vs. Millisekunden: Die klassische Falle</h2>
<p>Unix-Zeit ist typischerweise in Sekunden, aber JavaScripts <code>Date</code>-Objekt erwartet Millisekunden, und manche APIs (besonders die auf JavaScript basieren) geben standardmäßig Millisekunden-Zeitstempel zurück. Diese zu verwechseln gibt dir ein Datum, das entweder weit in der Zukunft liegt oder bei der Epoche 1970 festhängt — ein Fehler, den jeder Entwickler mindestens einmal gemacht hat, während er ein „warum sieht dieses Datum falsch aus"-Problem debuggt hat.</p>

<p>Zeitzonen fügen eine weitere Ebene hinzu. Ein Zeitstempel konvertiert zu einem bestimmten Zeitpunkt, aber ihn in deiner lokalen Zeit versus UTC versus der Zeitzone des Servers anzuzeigen, kann denselben Wert wie drei völlig verschiedene Zeiten aussehen lassen, was eine Menge ausmacht, wenn du versuchst, einen Fehler mit einem Deploy zu korrelieren.</p>

<h2>Sofort in beide Richtungen konvertieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen Zeitstempel-Konverter, der einen Unix-Zeitstempel in ein lesbares Datum und eine Uhrzeit umwandelt und ein Datum zurück in einen Zeitstempel konvertiert — beide Richtungen, ohne Rechnen. Er handhabt die Sekunden-versus-Millisekunden-Mehrdeutigkeit, sodass du nicht raten musst.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Unix-Zeitstempel-Konverter zeigt Datum und Uhrzeit auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Logs und Datenbanken debuggen</h3>
<p>Log-Aggregatoren, Datenbankzeilen und API-Payloads speichern Zeit weit häufiger als rohe Zahlen als als lesbare Strings. Beim Nachverfolgen eines Vorfalls ein paar Zeitstempel umzurechnen, ist eine kleine Aufgabe, die während jeder ernsthaften Debugging-Sitzung dutzende Male vorkommt.</p>

<h3>Scheduling- und Ablauf-Logik</h3>
<p>Cache-Ablauf, Token-Expiration und Zeitstempel für geplante Jobs sind unter der Haube alle Unix-Zeit. Schnell nachzuschauen, was ein gegebener Ablaufwert tatsächlich in Echtzeit bedeutet, hilft dir zu verifizieren, dass deine TTL-Logik das tut, was du denkst.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "markdown-preview-mac-app": {
    slug: "markdown-preview-mac-app",
    title: "Markdown-Vorschau für Mac — Einfügen und sehen",
    description:
      "Ein README oder eine Pull-Request-Beschreibung in rohem Markdown zu schreiben bedeutet zu raten, wie die Überschriften, Listen und Code-Blöcke tatsächlich gerendert werden.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du schreibst ein README mit verschachtelten Aufzählungspunkten, ein paar Code-Blöcken und einer Tabelle, die zwei Ansätze vergleicht. Es sieht als Klartext in deinem Editor gut aus. Dann pushst du es auf GitHub und die Tabelle ist falsch ausgerichtet, einer deiner Code-Blöcke wurde nicht richtig geschlossen, und eine nummerierte Liste hat mittendrin bei 1 neu angefangen wegen einer streunenden Leerzeile. Jetzt pushst du kleine Fixup-Commits, nur um die Formatierung hinzubekommen.</p>

<p>Markdown ist einfach genug, um es für grundlegende Formatierung aus dem Gedächtnis zu schreiben, aber Tabellen, verschachtelte Listen und Code-Fences haben alle kleine Syntaxeigenheiten, die sich zwischen Renderern leicht unterscheiden. GitHub Flavored Markdown ist nicht identisch mit CommonMark, das nicht identisch ist mit dem, was dein Static-Site-Generator verwendet. Die Lücke zwischen „sieht in meinem Kopf richtig aus" und „rendert richtig auf der Seite" ist genau dort, wo eine Live-Vorschau ihren Wert beweist.</p>

<h2>Warum Committen zum Prüfen ein schlechter Workflow ist</h2>
<p>Einen Commit zu pushen, nur um zu sehen, wie ein README rendert, dann einen weiteren, um eine kaputte Tabelle zu reparieren, dann noch einen, um die Reparatur zu reparieren, überfüllt deine Commit-Historie mit Formatierungsrauschen, das nichts mit dem eigentlichen Inhalt zu tun hat. Es bedeutet auch, dass jeder Vorschau-Zyklus so lange dauert wie ein Push und ein Seitenneuladen — langsam genug, dass du aufhörst zu prüfen und einfach hoffst, dass es gut aussieht.</p>

<h2>Gerenderte Ausgabe sehen, während du tippst</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält ein Markdown-Vorschau-Tool, das formatierte Ausgabe rendert, während du rohes Markdown einfügst oder tippst. Überschriften, Listen, Tabellen, Links und Code-Blöcke werden sofort gerendert, sodass du Formatierungsfehler erkennen kannst, bevor sie in einem Commit landen.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Markdown-Vorschau-Tool rendert formatierten Text auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>READMEs und PR-Beschreibungen schreiben</h3>
<p>Pull-Request-Beschreibungen und README-Dateien sind oft das Erste, was ein Reviewer oder neuer Contributor liest. Zu prüfen, ob Überschriften, Checklisten und verlinkte Bilder korrekt rendern, bevor du einreichst, spart eine Runde „kannst du die Formatierung fixen"-Kommentare.</p>

<h3>Dokumentation offline entwerfen</h3>
<p>Dokumentation im Flugzeug oder in einem Gebiet mit unzuverlässigem Internet zu schreiben bedeutet nicht, darauf verzichten zu müssen, deine Formatierung korrekt gerendert zu sehen. Ein lokales Vorschau-Tool funktioniert gleich, egal ob du verbunden bist oder nicht.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "lorem-ipsum-generator-mac": {
    slug: "lorem-ipsum-generator-mac",
    title: "Lorem-Ipsum-Generator für Mac — Beliebige Länge kopieren",
    description:
      "Ein Design-Mockup oder eine Test-Fixture mit Platzhaltertext zu füllen sollte nicht jedes Mal einen Website-Besuch erfordern.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du baust eine Karten-Komponente und brauchst drei Absätze Platzhaltertext, um zu sehen, wie er umbricht. Oder du schreibst eine Test-Fixture, die einen langen String braucht, um das Abschneideverhalten zu prüfen. In beiden Fällen brauchst du Fülltext, und „asdf asdf asdf" in ein Textfeld zu tippen gibt dir keine realistischen Wortlängen oder Satzstrukturen, mit denen du arbeiten kannst.</p>

<p>Lorem Ipsum ist seit Jahrzehnten die Standardlösung für dieses Problem, gerade weil sein lateinisch-abgeleiteter Pseudo-Text eine natürliche Verteilung von Wort- und Satzlängen hat, die echte Prosa nachahmt, ohne ablenkend oder bedeutungsvoll zu sein — das Auge des Lesers wird nicht in das tatsächliche Lesen hineingezogen, was genau der Punkt ist, wenn man ein Layout bewerten will.</p>

<h2>Über das Kopieren desselben Absatzes hinaus</h2>
<p>Die meisten Entwickler haben einen einzelnen Lorem-Ipsum-Absatz irgendwo gespeichert und verwenden ihn überall wieder, was funktioniert, bis du einen viel längeren Block für einen Scroll-Test brauchst oder einen viel kürzeren, um zu prüfen, wie sich eine Einzeiler-Abschneide-Ellipse verhält. Text in genau der Länge zu generieren, die du brauchst — einen Satz, einen Absatz, mehrere Absätze — ist besser als denselben festen Block wiederzuverwenden und manuell zu kürzen oder zu duplizieren.</p>

<h2>Genau die Länge generieren, die du brauchst</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen Lorem-Ipsum-Generator, der Platzhaltertext in jeder Länge erzeugt, die dein Layout oder Testfall erfordert, bereit zum Kopieren mit einem Klick. Kein Browser-Tab, keine werbeüberladene Generator-Website, kein Warten auf eine Seite, die lädt, nur um drei Sätze zu bekommen.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Lorem-Ipsum-Generator erzeugt Platzhaltertext auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>UI-Layouts prototypen</h3>
<p>Bevor echter Inhalt existiert, lässt Platzhaltertext dich bewerten, ob ein Design mit unterschiedlichen Inhaltslängen elegant umgeht — kurze Titel, lange Titel, Absätze, die auf zwei versus fünf Zeilen umbrechen. Schnell Text in verschiedenen Längen zu generieren, beschleunigt diese Bewertung.</p>

<h3>Test-Fixtures und Seed-Daten</h3>
<p>Automatisierte Tests, die Textabschneidung, Zeichenlimits oder Overflow-Verhalten prüfen, brauchen realistische Strings einer bekannten Länge. Sie bei Bedarf zu generieren ist schneller als denselben Platzhalter-String in dutzenden Testdateien hartzukodieren.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "xml-formatter-mac": {
    slug: "xml-formatter-mac",
    title: "XML-Formatierer und -Validator für Mac",
    description:
      "SOAP-Antworten und Legacy-Config-Dateien kommen immer noch als uneingerücktes XML an, und es ohne Formatierung zu lesen ist schwieriger als nötig.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>JSON bekommt die ganze Aufmerksamkeit, aber viele Systeme sprechen immer noch XML — SOAP-APIs, Android-Layout-Dateien, Mavens <code>pom.xml</code>, RSS-Feeds und nicht wenige Enterprise-Integrationen, die ihr Datenformat seit fünfzehn Jahren nicht geändert haben. Wenn eines davon minifiziert in einer einzigen Zeile ankommt, ist das Lesen der verschachtelten Struktur ohne ordentliche Einrückung wirklich schwierig.</p>

<p>Im Gegensatz zu JSON muss XML auch mit Namespaces, Attributen und selbstschließenden Tags umgehen, was manuelle Formatierung noch fehleranfälliger macht. Verschachtelungsebenen in einem tief strukturierten SOAP-Envelope falsch zu zählen, ist leicht getan und schwer zu bemerken, bis etwas nachgelagert bricht.</p>

<h2>Warum das 2026 immer noch relevant ist</h2>
<p>Trotz JSONs Dominanz im neuen API-Design ist XML in Enterprise-Software, Regierungssystemen und Android-Entwicklung nirgendwo hingegangen. Wenn du dich mit einem Zahlungsgateway einer Bank, einem Legacy-Versicherungssystem oder einem älteren SOAP-basierten Webservice integrierst, wirst du irgendwann rohes XML lesen und debuggen müssen — und auf eine unformatierte Antwort zu starren ist keine produktive Zeitverwendung.</p>

<h2>In einem Durchgang formatieren und validieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen XML-Formatierer, der verschachtelte Elemente korrekt einrückt und fehlerhaftes Markup kennzeichnet — ein nicht geschlossenes Tag, ein fehlerhaftes Attribut-Anführungszeichen, eine kaputte Namespace-Deklaration. Füge minifiziertes XML ein und erhalte sofort ein lesbares, korrekt eingerücktes Dokument zurück.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows XML-Formatierer zeigt eingerückte verschachtelte Elemente auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>SOAP- und Legacy-APIs debuggen</h3>
<p>SOAP-Envelopes umschließen den eigentlichen Payload mit mehreren Schichten Boilerplate, was das Finden des Feldes, das dich eigentlich interessiert, mühsam macht, wenn alles in einer Zeile steht. Die Antwort zuerst zu formatieren, verwandelt eine Textwand in einen navigierbaren Baum.</p>

<h3>Config- und Build-Dateien überprüfen</h3>
<p>Androids <code>AndroidManifest.xml</code>, Mavens <code>pom.xml</code> und unzählige CI-Konfigurationsformate sind unter der Haube XML. Wenn eines davon programmatisch generiert oder modifiziert wurde und uneingerückt herauskommt, macht ein schneller Formatierungsdurchlauf sowohl den Diff als auch den Inhalt leichter überprüfbar.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "cron-expression-helper-mac": {
    slug: "cron-expression-helper-mac",
    title: "Cron-Ausdruck-Helfer für Mac",
    description:
      "Einen Zeitplan-Ausdruck von Hand zu schreiben und zu hoffen, dass er das bedeutet, was du denkst, ist der Grund, warum Jobs um 3 Uhr nachts statt um 15 Uhr laufen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Cron-Syntax besteht aus fünf Feldern mit Zahlen und Symbolen, die irgendwie „jeden Werktag um 9 Uhr außer an Feiertagen" oder „alle 15 Minuten zwischen 8 und 18 Uhr" ausdrücken müssen. Die Felder sind Minute, Stunde, Tag des Monats, Monat und Wochentag — in einer Reihenfolge, die sich niemand beim ersten Versuch richtig merkt, und Sternchen, Kommas, Bindestriche und Schrägstriche bedeuten je nach Position unterschiedliche Dinge.</p>

<p><code>0 9 * * 1-5</code> sieht vernünftig aus, aber ist das 9 Uhr morgens oder 21 Uhr, und bedeutet <code>1-5</code> Montag bis Freitag oder etwas ganz anderes, je nachdem ob die Cron-Implementierung Sonntag als 0 oder 7 zählt? Das in einer Deployment-Pipeline, einem Backup-Job oder einem geplanten Report falsch zu haben bedeutet entweder stille Fehler oder einen Job, der zu einer ungünstigen Stunde feuert — manchmal wochenlang, bevor es jemand bemerkt.</p>

<h2>Jede Cron-Implementierung hat ihre eigenen Eigenheiten</h2>
<p>Standard-Unix-Cron, Kubernetes-CronJobs, AWS EventBridge und verschiedene CI-Plattformen verwenden alle grob die gleiche Fünf-Felder-Syntax, unterscheiden sich aber in kleinen Details — ob Sekunden unterstützt werden, wie die Wochentags-Nummerierung funktioniert, ob bestimmte Kurzschreibweisen wie <code>@daily</code> gültig sind. Einen Zeitplan zu schreiben, der beim ersten Deploy korrekt funktioniert, bedeutet, genau zu verstehen, welche Cron-Variante du verwendest.</p>

<h2>Ausdrücke in Klartext übersetzen</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen Cron-Ausdruck-Helfer, der einen Zeitplan-String nimmt und in verständlicher Sprache erklärt, was er tatsächlich bedeutet, sodass du deine Absicht überprüfen kannst, bevor du einen geplanten Job irgendwo deployst.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Cron-Ausdruck-Helfer erklärt einen Zeitplan-String auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vor dem Deploy verifizieren</h3>
<p>Ein geplanter Job, der zur falschen Zeit feuert, ist oft ein stiller Fehler — nichts stürzt ab, er läuft einfach, wenn du es nicht beabsichtigt hast, überlappt manchmal mit einem Wartungsfenster oder belastet die Datenbank während Spitzenverkehr. Die Klartext-Bedeutung eines Cron-Strings vor dem Mergen einer Deployment-Config zu prüfen, fängt das ab, bevor es um 2 Uhr morgens zum Pager-Alarm wird.</p>

<h3>Den Zeitplan eines anderen lesen</h3>
<p>Eine Codebasis mit einem Dutzend bestehender Cron-Jobs zu übernehmen bedeutet, herauszufinden, was jeder einzelne tut, bevor du irgendeinen davon sicher ändern kannst. Jeden Ausdruck schnell zu übersetzen ist schneller als fünf kryptische Felder pro Job im Kopf zu parsen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "yaml-to-json-mac": {
    slug: "yaml-to-json-mac",
    title: "YAML-zu-JSON-Konverter für Mac",
    description:
      "Kubernetes-Manifeste, CI-Pipelines und Config-Dateien sprechen alle YAML, aber die Tools, die du tatsächlich brauchst, um Daten zu inspizieren, erwarten meistens JSON.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>YAML ist überall in der Infrastruktur — Kubernetes-Manifeste, GitHub-Actions-Workflows, Docker-Compose-Dateien, Ansible-Playbooks. Es ist lesbar und kompakt, bis die Einrückung mehrdeutig wird, sich ein Tab einschleicht, wo ein Leerzeichen sein sollte, oder du die Daten in ein Tool füttern musst, das nur JSON versteht.</p>

<p>Zwischen den beiden Formaten von Hand zu konvertieren ist mechanisch, aber mühsam: YAMLs einrückungsbasierte Verschachtelung wird zu JSONs geschweiften und eckigen Klammern, YAML-Strings ohne Anführungszeichen brauchen Anführungszeichen, und YAMLs freizügigere Syntax (unquotierte Booleans, mehrzeilige Strings, Anker und Referenzen) lässt sich nicht immer sauber auf JSONs strengere Regeln abbilden.</p>

<h2>Warum du beide Formate brauchst</h2>
<p>Vielleicht schreibst du ein Kubernetes-Manifest in YAML, weil es einfacher zu lesen und zu versionieren ist, brauchst aber das JSON-Äquivalent, um es in ein Skript, einen API-Aufruf oder eine <code>jq</code>-Pipeline zu füttern, die JSON-Input erwartet. Oder du debuggst, warum die YAML-Config einer CI-Pipeline nicht so geparst wird, wie du es erwartest, und die JSON-Struktur darunter zu sehen, macht die tatsächliche Verschachtelung eindeutig — auf eine Weise, die whitespace-sensitives YAML manchmal nicht ist.</p>

<h2>Sofort zwischen Formaten konvertieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen YAML-zu-JSON-Konverter unter seinen 41 Entwickler-Tools. Füge YAML ein und erhalte sofort die äquivalente JSON-Struktur, mit korrekter Verschachtelung und erhaltenen Typen — kein manuelles Umformatieren, kein Raten bei Einrückungsebenen.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows YAML-zu-JSON-Konverter-Tool auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kubernetes- und CI-Configs debuggen</h3>
<p>Wenn sich ein Manifest unerwartet verhält, entfernt das Betrachten der zugrunde liegenden JSON-Struktur jede Mehrdeutigkeit darüber, wie das YAML tatsächlich verschachtelt ist — nützlich, wenn eine falsch platzierte Einrückung still geändert hat, welcher Key zu welchem übergeordneten Objekt gehört.</p>

<h3>Config in Skripte einspeisen</h3>
<p>Viele Skripting- und Automatisierungs-Tools arbeiten natürlicher mit JSON als mit YAML. Eine Config-Datei einmal zu konvertieren und die JSON-Ausgabe nachgelagert weiterzugeben ist oft einfacher, als jedem Skript in deiner Pipeline beizubringen, YAML direkt zu parsen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "text-diff-tool-mac": {
    slug: "text-diff-tool-mac",
    title: "Text-Diff-Tool für Mac — Zwei Texte nebeneinander vergleichen",
    description:
      "Zwei Versionen einer Config-Datei, eines E-Mail-Entwurfs oder eines Textabschnitts sehen fast identisch aus, und das eine geänderte Wort zu finden ist überraschend schwer mit bloßem Auge.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Git handhabt Diffs wunderbar für Code, der bereits in einem Repository getrackt wird. Aber viele Textvergleiche passieren komplett außerhalb der Versionskontrolle: zwei Versionen einer Rechtsklausel, die ein Anwalt zurückgeschickt hat, eine API-Antwort vor und nach einer Backend-Änderung, ein Absatz Marketingtext, den ein Kollege „nur leicht angepasst" hat. Beide Versionen nebeneinander zu lesen und zu versuchen, den Unterschied mit dem Auge zu finden, ist langsam und unzuverlässig, besonders bei längeren Textblöcken.</p>

<p>Das menschliche Auge ist schlecht bei dieser Art von Vergleich, weil es nicht nach Unterschieden sucht — es liest nach Bedeutung, und zwei nahezu identische Absätze lesen sich beide als „korrekt", es sei denn, man hält gezielt an und vergleicht Zeichen für Zeichen.</p>

<h2>Wenn Git Diff nicht verfügbar ist</h2>
<p>Nicht alles, was einen Vergleich wert ist, lebt in einem Git-Repository. Config-Werte, die aus zwei verschiedenen Umgebungen eingefügt wurden, zwei Entwürfe einer E-Mail oder das Vorher-Nachher eines Suchen-und-Ersetzen, bei dem du nicht sicher bist, ob du es richtig gemacht hast — all das braucht Vergleichstools, die mit beliebigem eingefügtem Text funktionieren, nicht nur mit getrackten Dateien.</p>

<h2>Zwei Textblöcke sofort vergleichen</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält ein Text-Diff-Tool, das genau hervorhebt, was sich zwischen zwei Blöcken eingefügtem Text geändert hat — Hinzufügungen, Löschungen und Änderungen werden visuell markiert, sodass du nicht jedes Zeichen selbst lesen musst.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Text-Diff-Tool vergleicht zwei Textblöcke auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Config zwischen Umgebungen vergleichen</h3>
<p>Wenn Staging und Produktion sich unterschiedlich verhalten, enthüllt das Vergleichen der tatsächlichen Config-Werte nebeneinander oft schneller den Übeltäter als das Durchlesen von Deployment-Logs — eine einzelne Umgebungsvariable mit einem Tippfehler oder einem veralteten Wert fällt sofort auf, wenn sie hervorgehoben ist.</p>

<h3>Bearbeiteten Text überprüfen</h3>
<p>Wenn jemand eine „leicht bearbeitete" Version eines Dokuments zurückschickt, verwandelt das genaue Sehen, was sich geändert hat — statt alles nochmal zu lesen in der Hoffnung, es zu bemerken — einen langsamen Korrekturlesedurchgang in eine schnelle visuelle Prüfung.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "number-base-converter-mac": {
    slug: "number-base-converter-mac",
    title: "Zahlensystem-Konverter für Mac — Hex, Binär, Oktal, Dezimal",
    description:
      "Eine Speicheradresse, einen Farbwert oder einen Dateiberechtigungscode zu lesen bedeutet, ständig zwischen Dezimal und dem jeweils geforderten Zahlensystem zu übersetzen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Eine Speicheradresse erscheint als <code>0x7ffee23a1c40</code>. Eine Dateiberechtigung ist <code>0755</code>. Ein Bitmask in der Dokumentation eines Treibers ist binär geschrieben. Ein Farbkanalwert muss von Dezimal in zweistelliges Hex konvertiert werden. Keine dieser Konvertierungen ist einzeln schwierig, aber sie wiederholt im Kopf durchzuführen — besonders Binär zu Hex, was das Gruppieren von Bits in Nibbles erfordert — ist langsamer und fehleranfälliger als es für etwas so Mechanisches sein sollte.</p>

<p>Low-Level-Programmierung, Embedded-Entwicklung, Netzwerke und sogar alltägliche Webentwicklung (Hex-Farben, schon wieder) erfordern alle regelmäßig das Wechseln zwischen Zahlensystemen — häufig genug, dass eine mentale Nachschlagetabelle für Hex-Ziffern nur bis zu ein oder zwei Bytes weit reicht.</p>

<h2>Wo das häufig schiefgeht</h2>
<p>Oktal ist das heimtückische. Eine Dateiberechtigung wie <code>644</code> sieht wie eine Dezimalzahl aus, ist aber tatsächlich Basis 8, und sie beim Nachdenken als Dezimal zu behandeln, führt zu Verwirrung über das tatsächliche Bitmuster. Binär wird jenseits von 16 Bits unhandlich — ein 32-Bit-Wert in Binär ist zweiunddreißig Zeichen lang, schwer zu lesen und leicht zu verzählen, wenn du versuchst, bestimmte Bits für eine Flag-Prüfung zu isolieren.</p>

<h2>Gleichzeitig zwischen allen vier Basen konvertieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen Zahlensystem-Konverter, der einen Wert gleichzeitig in Dezimal, Hexadezimal, Oktal und Binär anzeigt. Tippe eine Zahl in einem beliebigen System ein und sieh alle vier Darstellungen gemeinsam aktualisiert — keine separate Konvertierung für jedes Paar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Zahlensystem-Konverter zeigt Hex, Binär, Oktal und Dezimal auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Low-Level- und Embedded-Arbeit</h3>
<p>Registerwerte, Bitmasken und Speicheradressen in Embedded-Firmware oder Systemprogrammierung zu lesen bedeutet, fließend zwischen Hex und Binär zu wechseln. Beides gleichzeitig zu sehen, zusammen mit Dezimal, entfernt eine Schicht manueller Übersetzung von einer ohnehin detailreichen Aufgabe.</p>

<h3>Dateiberechtigungen und Netzwerke</h3>
<p>Unix-Dateiberechtigungen, Subnetzmasken und verschiedene Binär-Flags in Netzwerkprotokollen werden häufig in Oktal oder Binär ausgedrückt, aber in Dezimal durchdacht. Eine schnelle Konvertierung bestätigt genau, was ein Berechtigungs-String oder Flag-Byte repräsentiert, bevor du es änderst.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "csv-to-json-mac": {
    slug: "csv-to-json-mac",
    title: "CSV-zu-JSON-Konverter für Mac",
    description:
      "Ein Tabellen-Export muss zu strukturierten Daten für einen API-Aufruf oder eine Test-Fixture werden, und jedes Mal ein Einmal-Skript dafür zu schreiben ist Overkill.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jemand aus dem Vertrieb exportiert eine Tabelle als CSV und bittet dich, sie „einfach ins System zu laden." Das System erwartet JSON. Also schreibst du ein schnelles Python- oder Node-Skript mit einer CSV-Parsing-Bibliothek, mappst die Spalten auf Felder, behandelst die Header-Zeile und hoffst, dass keiner der Werte ein Komma enthält, das deine naive Split-on-Comma-Logik bricht (meistens tun sie es — versteckt in einem Feld mit Anführungszeichen).</p>

<p>Das ist eine Aufgabe, die Entwickler immer wieder lösen, jedes Mal mit leicht unterschiedlichem Wegwerf-Code, weil CSV ständig als Exportformat aus Tabellen, Datenbanken und Analysetools auftaucht, während die meisten modernen Tools und APIs JSON erwarten.</p>

<h2>CSVs trügerische Einfachheit</h2>
<p>CSV sieht trivial aus — bei Kommas aufteilen, bei Zeilenumbrüchen aufteilen, fertig. Dann triffst du auf ein Feld, das ein Komma enthält, das gemäß der Spezifikation in Anführungszeichen steht, und dein naiver Parser bricht. Oder ein Feld enthält einen eingebetteten Zeilenumbruch innerhalb von Anführungszeichen, den ein einfaches zeilenweises Lesen nicht korrekt verarbeiten kann. CSV-Parsing richtig zu machen erfordert tatsächlich das Respektieren der Quoting-Regeln, weshalb ein dedizierter Konverter besser ist als es jedes Mal von Grund auf zu schreiben.</p>

<h2>CSV in strukturiertes JSON konvertieren</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält einen CSV-zu-JSON-Konverter, der Felder in Anführungszeichen und Header-Zeilen korrekt verarbeitet und einen Tabellen-Export in ein Array von JSON-Objekten verwandelt, bereit zum Einfügen in eine Test-Fixture, einen Request-Body oder ein Skript.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows CSV-zu-JSON-Konverter-Tool auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tabellendaten in APIs laden</h3>
<p>Wenn ein einmaliger Datenimport nicht das Schreiben und Pflegen eines vollständigen Skripts rechtfertigt, erledigt das direkte Konvertieren des CSV-Exports in JSON und Einfügen in ein API-Testtool oder eine Datenbank-Seed-Datei die Aufgabe in einem Bruchteil der Zeit.</p>

<h3>Test-Fixtures aus echten Daten erstellen</h3>
<p>Eine Stichprobe produktionsähnlicher Daten als CSV aus einer Tabelle zu exportieren und in JSON zu konvertieren, ist ein schneller Weg, realistische Test-Fixtures zu generieren, ohne JSON-Objekte Feld für Feld von Hand zu schreiben.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "mac-developer-tools-no-internet": {
    slug: "mac-developer-tools-no-internet",
    title: "Mac-Entwickler-Tools, die ohne Internet funktionieren",
    description:
      "Im Flugzeug, im Serverraum oder bei wackeligem Café-WLAN zu arbeiten sollte nicht bedeuten, den Zugang zu den Werkzeugen zu verlieren, die du ständig nutzt.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Versuche, einen JSON-Blob im Flugzeug ohne WLAN zu formatieren, und du wirst schnell merken, wie viele deiner täglichen Entwickler-Werkzeuge eigentlich verkappte Websites sind. jwt.io, regex101, JSON-Formatierer, Base64-Tools — alle exzellent, alle komplett nutzlos in dem Moment, in dem deine Verbindung abbricht. Am Ende machst du entweder ohne oder fummelst an Terminal-Befehlen herum, die du halb erinnerst.</p>

<p>Das ist nicht nur eine Unannehmlichkeit beim Reisen. Serverräume, Sicherheitsbereiche und Air-Gapped-Umgebungen haben oft designbedingt keinen Internetzugang. Selbst ein wackeliges Büro-WLAN-Netzwerk kann eine Zwei-Sekunden-Aufgabe in ein frustrierendes Warten auf eine Seite verwandeln, die nicht laden will.</p>

<h2>Die versteckte Abhängigkeit in deinem Werkzeugkasten</h2>
<p>Die meisten Entwickler merken nicht, wie sehr ihre alltäglichen Tools von einer aktiven Verbindung abhängen, bis sie weg ist. Eine schnelle gedankliche Bestandsaufnahme ist aufschlussreich: Wie viele der Werkzeuge, die du mehrmals am Tag benutzt, sind eigentlich Browser-Tabs, die auf den Server eines anderen zeigen? Für die meisten Entwickler ist die Antwort mehr als erwartet.</p>

<p>Neben dem Verfügbarkeitsproblem gibt es auch ein Datenproblem. Tokens, Anmeldedaten oder interne Daten an eine Drittanbieter-Website zu schicken, um sie zu dekodieren oder zu formatieren, bedeutet, den Sicherheits- und Datenschutzpraktiken dieser Website zu vertrauen — Vertrauen, das möglicherweise nicht gerechtfertigt ist und das viele Unternehmenssicherheitsrichtlinien explizit verbieten.</p>

<h2>Ein Werkzeugkasten, der nie eine Verbindung braucht</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bündelt 41 Entwickler-Tools in einer nativen macOS-App, die komplett offline läuft — keine Ausnahmen, kein „braucht Internet für diese eine Funktion." JSON-Formatierung, JWT-Dekodierung, Hashing, Regex-Testing, Kodierung und Dekodierung und mehr funktionieren identisch, egal ob du Glasfaser hast oder zehntausend Meter hoch ohne Signal bist.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Offline-Entwickler-Tools-App läuft auf macOS ohne Netzwerkverbindung" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Arbeiten in sicheren oder Air-Gapped-Umgebungen</h3>
<p>Manche Entwicklung findet in Umgebungen statt, in denen Internetzugang eingeschränkt oder per Richtlinie komplett abwesend ist — Rüstungsaufträge, Finanzinfrastruktur, bestimmte Regierungsarbeit. Tools, die eine aktive Verbindung brauchen, sind dort schlicht nicht nutzbar, egal wie gut sie sind.</p>

<h3>Reisen ohne Produktivitätsverlust</h3>
<p>Flüge, Zugfahrten durch Tunnel und Remote-Arbeitsplätze mit unzuverlässiger Konnektivität sollten nicht bestimmen, welche Entwickleraufgaben du erledigen kannst und welche nicht. Ein Offline-first-Werkzeugkasten streicht Konnektivität von der Liste der Dinge, die dich ausbremsen können.</p>

<h3>Datenschutz als Nebeneffekt des Offline-Seins</h3>
<p>Eine App, die nie Netzwerkanfragen macht, kann deine Daten nicht an einen Server leaken, weder absichtlich noch unbeabsichtigt. Für Entwickler, die mit Tokens, Secrets oder proprietären Informationen umgehen, geht es bei Offline nicht nur um Verfügbarkeit — es ist eine echte Datenschutzgarantie.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "clipboard-formatter-mac": {
    slug: "clipboard-formatter-mac",
    title: "Zwischenablage-Formatierer für Mac — Automatische Erkennung und Tool-Vorschlag",
    description:
      "Zu entscheiden, welchen Formatierer, Decoder oder Konverter du brauchst, ist selbst eine kleine Entscheidung, die du dutzende Male am Tag triffst, ohne den Overhead zu bemerken.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du kopierst einen String. Bevor du etwas damit tun kannst, musst du herausfinden, was er ist und welches Tool ihn verarbeitet. Ist das ein JWT? Base64? Ein Hex-Farbwert? Eine einfache UUID? Für einen erfahrenen Entwickler passiert diese Erkennung fast sofort, aber es ist immer noch ein kleiner kognitiver Schritt zwischen dem Kopieren und dem tatsächlichen Handeln — und es ist ein Schritt, der sich jedes einzelne Mal wiederholt.</p>

<p>Multipliziere diesen Erkennungs-und-Navigations-Schritt über die dutzenden kleinen Hilfsaufgaben an einem typischen Tag, und es summiert sich zu einem überraschenden Maß an mentalem Overhead, der nur dafür aufgewendet wird, dich zum richtigen Tool zu leiten, bevor du überhaupt mit der eigentlichen Aufgabe angefangen hast.</p>

<h2>Mustererkennung ist ein lösbares Problem</h2>
<p>JWTs haben eine unverwechselbare dreiteilige, durch Punkte getrennte Struktur mit einem erkennbaren Base64url-Header. Hex-Farben beginnen mit einem Rautezeichen und sind genau sechs oder acht Hex-Zeichen lang. UUIDs folgen einem strikten Acht-Vier-Vier-Vier-Zwölf-Format mit Bindestrichen. JSON beginnt mit einer geschweiften oder eckigen Klammer. Diese Muster sind präzise genug, dass Software sie genauso schnell erkennen kann wie ein erfahrener Entwickler, ohne dass der Entwickler die Identifizierung jedes Mal manuell vornehmen muss.</p>

<h2>Die Zwischenablage das Tool vorschlagen lassen</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> liest deine Zwischenablage beim Öffnen und schlägt automatisch das passende Tool vor. Kopiere ein JWT und der Decoder ist bereits hervorgehoben. Kopiere JSON und der Formatierer ist einen Klick entfernt. Kopiere einen Hex-Farbwert und der Farbkonverter steht bereit. Der Erkennungsschritt passiert sofort, bevor du überhaupt die Seitenleiste öffnest.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Zwischenablage-Erkennung schlägt das passende Entwickler-Tool auf macOS vor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Weniger Klicks, weniger Entscheidungsmüdigkeit</h3>
<p>Den Schritt „welches Tool brauche ich" aus einer sich wiederholenden Aufgabe zu entfernen klingt isoliert betrachtet unbedeutend, aber über dutzende tägliche Interaktionen hinweg entfernt es ein spürbares Maß an Reibung — Reibung, die dich sonst dazu verleitet, die Daten einfach unformatiert zu lassen, weil das richtige Tool zu suchen sich nach zu viel Aufwand anfühlte.</p>

<h3>Nützlich für Tools, die du vergisst</h3>
<p>Mit 41 verfügbaren Tools ist es leicht zu vergessen, dass ein bestimmter Konverter oder Generator überhaupt existiert. Zwischenablage-basierte Vorschläge zeigen das relevante Tool auch dann, wenn du nicht daran gedacht hättest, danach zu suchen — was oft wertvoller ist als die Zeitersparnis bei Tools, die du ohnehin täglich nutzt.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "string-escape-unescape-mac": {
    slug: "string-escape-unescape-mac",
    title: "String Escape und Unescape für Mac — JSON, HTML, URL",
    description:
      "Ein Stringformat in ein anderes einzubetten bedeutet, Anführungszeichen, Schrägstriche und Sonderzeichen korrekt zu escapen — oder zuzusehen, wie dein Parser versagt.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du musst einen JSON-String in einen anderen JSON-String einbetten — vielleicht eine Log-Nachricht, die selbst ein JSON-Payload enthält. Oder du schreibst einen Shell-Befehl, der einen String mit Anführungszeichen enthält. Oder du baust eine URL, die eine andere URL als Query-Parameter tragen muss. Jede dieser Situationen erfordert Escaping: Zeichen, die sonst als Syntax interpretiert würden, in eine Form zu konvertieren, die als literale Daten behandelt wird.</p>

<p>Verschiedene Kontexte escapen unterschiedlich. JSON escapet Anführungszeichen mit einem Backslash und stellt Sonderzeichen wie Zeilenumbrüche als <code>\\n</code> dar. Shell-Escaping hängt davon ab, welchen Quoting-Stil du verwendest. URL-Escaping prozentkodiert reservierte Zeichen auf eine völlig andere Art als die beiden anderen. Diese zu verwechseln — JSON-Escaping anzuwenden, wo URL-Escaping nötig war — erzeugt Output, der fast richtig aussieht und auf verwirrende Weise fehlschlägt.</p>

<h2>Das Doppel-Escaping-Problem</h2>
<p>Einer der häufigsten Bugs in diesem Bereich ist Doppel-Escaping: Ein String wird einmal von deinem Code escaped und nochmal von einer Bibliothek oder einem Framework, das davon ausgeht, er sei noch roh, wodurch aus einem einzelnen Backslash zwei werden und die Daten leise korrumpiert werden. Das zu diagnostizieren erfordert schrittweises Unescaping, um genau zu sehen, wo die zusätzliche Schicht hinzugefügt wurde — mühsam von Hand, besonders bei einem langen String.</p>

<h2>Escape und Unescape für mehrere Formate</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> enthält String-Escaping-Tools für JSON-, HTML- und URL-Formate unter seinen 41 Entwickler-Tools. Füge einen rohen String ein, um ihn korrekt für einen bestimmten Kontext escaped zu sehen, oder füge einen escaped String ein, um den originalen Rohwert zu sehen.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows String Escape und Unescape Tool auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Strings in Strings einbetten</h3>
<p>Ein JSON-Payload zu bauen, der selbst einen JSON-String als Feldwert enthält, oder eine Log-Nachricht zu konstruieren, die beliebige Nutzereingaben sicher einschließen muss — beides erfordert korrektes Escaping, um die äußere Struktur nicht zu korrumpieren.</p>

<h3>Doppelt escapte Daten diagnostizieren</h3>
<p>Wenn ein String aussieht, als sei er öfter escaped worden als nötig, enthüllt schrittweises Unescaping genau, wo die zusätzliche Kodierung eingeführt wurde — was normalerweise der schnellste Weg ist, den verantwortlichen Code aufzuspüren.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },

  "mac-developer-utility-menu-bar": {
    slug: "mac-developer-utility-menu-bar",
    title: "Mac-Entwickler-Werkzeug in der Menüleiste — Schnellzugriff auf 41 Tools",
    description:
      "Das Dock ist für Apps, die du dir anschaust. Die Menüleiste ist für Tools, die du in Sekunden nutzt und wieder schließt — und die meisten Entwickler-Werkzeuge gehören in die zweite Kategorie.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Denk daran, wie du einen JSON-Formatierer oder UUID-Generator tatsächlich benutzt. Du öffnest ihn nicht, bewunderst die Oberfläche und richtest dich für eine Sitzung ein. Du öffnest ihn, machst eine kleine Sache und schließt ihn — die gesamte Interaktion dauert ein paar Sekunden. Dieses Nutzungsmuster passt schlecht zu einem Dock-Icon, das eine App impliziert, in die du hineinwechselst und Zeit verbringst, und viel besser zur Menüleiste, die genau für diese Art von schneller Rein-und-Raus-Interaktion gebaut ist.</p>

<p>Dock-basierte Apps konkurrieren auch um Platz mit allem anderen, was du offen hast — Cmd-Tab wechselt durch sie, Mission Control gruppiert ihre Fenster, und die richtige unter einem Dutzend offener Apps zu finden erfordert einen Moment visuellen Scannens. Ein Menüleisten-Icon sitzt an einem festen, vorhersagbaren Ort, der nie verschüttet wird.</p>

<h2>Warum der Ort wichtiger ist, als es scheint</h2>
<p>Der Wert eines Entwickler-Werkzeugs ist umgekehrt proportional zur Reibung, die zwischen dir und seiner Nutzung steht. Ein Tool, das zehn Sekunden zum Öffnen braucht, kostet mehr als die zehn Sekunden — es kostet den mentalen Kontext, den du verlierst, wenn du deine aktuelle Aufgabe verlässt, um es zu suchen. Platzierung in der Menüleiste minimiert diese Kosten, indem das Tool visuell präsent und immer nur einen Klick entfernt bleibt, ohne Bildschirmfläche oder Dock-Platz zu belegen, wenn du es nicht nutzt.</p>

<h2>41 Tools, ein Menüleisten-Icon</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> lebt in deiner Menüleiste und gibt dir Zugang zu 41 Entwickler-Tools — Formatierer, Kodierer, Generatoren, Konverter und Text-Tools — ohne jemals ein Dock-Icon oder ein dediziertes Fenster zu brauchen. Klicke auf das Icon, wähle ein Tool aus der Seitenleiste, erledige, was du brauchst, und es macht sich wieder unsichtbar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Menüleisten-Icon bietet schnellen Zugriff auf 41 Entwickler-Tools auf macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kein Dock-Fußabdruck</h3>
<p>Für Entwickler, die ein schlankes Dock mit nur den Apps behalten, die sie für längere Sitzungen nutzen — einen Editor, einen Browser, ein Terminal — passt ein Menüleisten-Werkzeug natürlich in die Philosophie. Es ist da, wenn es gebraucht wird, und sonst unsichtbar.</p>

<h3>Eigenständiges Fenster, wenn du es brauchst</h3>
<p>Manche Aufgaben — mehrere Regex-Muster hintereinander testen oder eine Reihe von Farben konvertieren — profitieren von einem persistenten Fenster statt einem Menüleisten-Dropdown. Bellows unterstützt beide Modi, sodass schnelle Abfragen in der Menüleiste bleiben, während längere Sitzungen ein richtiges Fenster neben deinem Editor bekommen.</p>

<h3>Verlauf hält deine häufigen Tools oben</h3>
<p>Mit 41 verfügbaren Tools sollten die, die du am meisten nutzt, nicht genauso viel Suchen erfordern wie die, die du selten benutzt. Zuletzt verwendete Tools tauchen automatisch auf, sodass deine täglichen Gewohnheiten die Oberfläche im Laufe der Zeit formen und nicht umgekehrt.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows im Mac App Store laden</a></p>
`,
  },
};
