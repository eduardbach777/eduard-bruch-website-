import type { ArticleSet } from "./index";

export const deArticles: ArticleSet = {
  "best-media-converter-mac": {
    slug: "best-media-converter-mac",
    title: "Bester Media-Converter für Mac",
    description:
      "Für Video-, Bild- und Audiokonvertierung separate Apps zu jonglieren, kostet Zeit. Ein einziges natives Tool erledigt alle drei Medientypen in einem Fenster.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Du musst eine Reihe von Produktfotos in JPEG umwandeln, eine Bildschirmaufnahme in MP4 transkodieren und einen Podcast-Ausschnitt als MP3 exportieren. Auf den meisten Systemen bedeutet das: drei verschiedene Apps öffnen, drei verschiedene Oberflächen lernen und drei verschiedene Warteschlangen im Auge behalten. Und wenn auch nur eines dieser Tools ein Electron-Wrapper ist, drehen deine Lüfter schon auf Hochtouren.</p>

<p>Medienkonvertierung unter macOS sollte sich nicht wie Projektmanagement anfühlen. Du willst Dateien reinziehen, ein Format auswählen und weitermachen.</p>

<h2>Warum macOS keinen echten Converter mitbringt</h2>

<p>Die Schnellaktionen im Finder können Bilder zwischen HEIC, JPEG und PNG umwandeln – und das war's dann auch schon. Für Videos wirst du auf iMovie oder Compressor verwiesen, von denen keines ein einfacher Format-Converter ist. Für Audiokonvertierung brauchst du GarageBand oder einen Ausflug ins Terminal mit <code>ffmpeg</code>. Es gibt kein einziges integriertes Tool, das Video, Bilder und Audio gemeinsam abdeckt.</p>

<h2>Wie ein richtiger Media-Converter aussieht</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> bringt drei Konvertierungs-Warteschlangen – Video, Bilder und Audio – in ein einziges natives macOS-Fenster. Du ziehst Dateien auf die passende Warteschlange, wählst ein Ausgabeformat und klickst auf Konvertieren. Keine Browser-Runtime, kein Abo, kein Cloud-Upload-Gimmick.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Mediasmith Media-Converter für Mac mit Video-, Bild- und Audio-Warteschlangen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Videokonvertierung</h3>
<p>Wandle MOV, AVI, MKV und WebM in MP4 oder andere Formate um. Da es sich um eine native Swift-App handelt, wird auf Apple Silicon automatisch hardwarebeschleunigtes Encoding genutzt – ein 4K-Clip wird in einem Bruchteil der Zeit konvertiert, die ein Electron-basiertes Tool bräuchte.</p>

<h3>Batch-Bildverarbeitung</h3>
<p>Lade Hunderte Bilder hoch und konvertiere zwischen HEIC, JPEG, PNG, WebP und TIFF. Eine geordnete Pixel-Pipeline erlaubt es dir, Operationen zu verketten – erst skalieren, dann zuschneiden, dann ein Wasserzeichen einfügen – und jede Operation läuft in der von dir festgelegten Reihenfolge ab.</p>

<h3>Audio- und MP3-Export</h3>
<p>Die Audio-Warteschlange übernimmt die Formatkonvertierung, einschließlich MP3-Export über einen integrierten LAME-Encoder. Du musst weder Homebrew installieren noch Bibliotheken kompilieren oder ffmpeg-Flags herausfinden.</p>

<h3>Presets und Parallelverarbeitung</h3>
<p>Speichere Format-und-Pipeline-Kombinationen als Presets, damit wiederkehrende Jobs nur einen Klick brauchen. Die Stapelverarbeitung läuft mit einstellbarer Parallelität, sodass große Warteschlangen schneller fertig werden, ohne den Rest deines Systems auszubremsen.</p>

<p>Wenn du bisher Vorschau, Handbrake und ein Terminal-Fenster notdürftig zusammengeflickt hast, ist ein einziger nativer Converter ein echter Gewinn an Lebensqualität.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "batch-convert-images-mac": {
    slug: "batch-convert-images-mac",
    title: "So konvertierst du Bilder im Batch auf dem Mac",
    description:
      "Bilder einzeln in der Vorschau umzuwandeln ist mühsam. Es gibt schnellere Wege, um Hunderte von Fotos unter macOS im Batch zwischen Formaten zu konvertieren.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Du hast gerade 200 Produktfotos aus Lightroom als TIFF exportiert, und jetzt will dein Webentwickler JPEG. Oder du hast einen Ordner mit WebP-Bildern von einem Kunden bekommen und brauchst sie als PNG für eine Keynote-Präsentation. Jede Datei in der Vorschau öffnen, Exportieren wählen, ein Format auswählen und speichern – 200 Mal – ist kein echter Workflow.</p>

<p>Batch-Bildkonvertierung ist eine dieser Aufgaben, die eigentlich dreißig Sekunden dauern sollte, aber unter macOS irgendwie einen ganzen Nachmittag frisst.</p>

<h2>Was macOS dir bietet (und wo es aufhört)</h2>

<p>Mit den Schnellaktionen im Finder kannst du ausgewählte Bilder konvertieren, aber nur zwischen HEIC, JPEG und PNG. Es gibt keine WebP-Ausgabe, kein TIFF und keine Möglichkeit, Qualität oder Auflösung zu steuern. Die Vorschau kann jeweils nur ein Bild exportieren – funktioniert, ist aber bei Batches quälend langsam. Das Kommandozeilentool <code>sips</code> beherrscht einige Konvertierungen, scheitert aber an Formaten wie WebP und bietet nur eingeschränkte Pipeline-Optionen.</p>

<p>Für alles, was über die Grundlagen hinausgeht, brauchst du ein dediziertes Tool.</p>

<h2>Batch-Konvertierung mit einer Pixel-Pipeline</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> ist ein nativer macOS-Converter, der genau dafür gebaut wurde. Zieh einen Ordner mit Bildern auf die Bild-Warteschlange, wähle dein Ausgabeformat – JPEG, PNG, WebP, HEIC oder TIFF – und konvertiere. Alle Dateien werden parallel mit einstellbarer Parallelität verarbeitet.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch-Bildkonvertierung auf dem Mac mit Format- und Pipeline-Optionen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Geordnete Operationen</h3>
<p>Die Pixel-Pipeline lässt dich Skalieren-, Zuschneiden- und Wasserzeichen-Operationen in einer bestimmten Reihenfolge verketten. Musst du auf 1200px Breite skalieren, dann auf 4:3 zuschneiden und dann dein Logo einfügen? Lege die Pipeline einmal fest, und sie wird identisch auf jedes Bild im Batch angewendet.</p>

<h3>Qualitätskontrolle</h3>
<p>Bei der JPEG- und WebP-Ausgabe gibt es Qualitätsregler, mit denen du Dateigröße und Bildqualität gegeneinander abwägen kannst. Im E-Commerce, wo jedes Kilobyte zählt, erspart dir das allein schon den Umweg über einen Online-Kompressor.</p>

<h3>Preset-System</h3>
<p>Wenn du dieselbe Konvertierung regelmäßig durchführst – etwa „Kundenlieferungen: JPEG, 2000px breit, 85% Qualität, mit Wasserzeichen" – speichere sie als Preset. Beim nächsten Mal wendet ein Klick die komplette Pipeline auf einen neuen Batch an.</p>

<p>Batch-Bildkonvertierung ist ein gelöstes Problem. Die Kunst liegt darin, ein Tool zu finden, das nativ und schnell ist und dich nicht dazu zwingt, deine Dateien auf einen fremden Server hochzuladen.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "permute-alternative-mac": {
    slug: "permute-alternative-mac",
    title: "Permute-Alternative für Mac",
    description:
      "Auf der Suche nach einem Media-Converter, der Video, Bilder und Audio ohne Abo verarbeitet. Eine native macOS-App mit Batch-Verarbeitung und Pixel-Pipeline.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Permute ist seit Jahren ein fester Bestandteil unter den Media-Convertern für macOS. Es verarbeitet Video, Audio und Bilder in einer übersichtlichen Drag-and-Drop-Oberfläche. Aber wenn du nach etwas mit granularerer Bildverarbeitung suchst – einer geordneten Pipeline von Operationen statt einfacher Formatkonvertierung – oder einfach nur wissen willst, was es sonst noch gibt, lohnt sich ein Blick auf die Alternativen.</p>

<p>Nicht jeder Converter passt zu jedem Workflow. Das richtige Tool hängt davon ab, ob dein Schwerpunkt eher auf Video-Transkodierung, Batch-Bildverarbeitung oder Audio-Export liegt.</p>

<h2>Worauf du bei einer Permute-Alternative achten solltest</h2>

<p>Jeder ernstzunehmende Ersatz sollte dieselben Grundvoraussetzungen erfüllen: native macOS-App (kein Electron), Drag-and-Drop-Batch-Konvertierung und Unterstützung für Video-, Bild- und Audioformate in einer Oberfläche. Darüber hinaus beginnen Funktionen wie eine geordnete Pixel-Pipeline, parallele Stapelverarbeitung und ein Preset-System, Tools voneinander zu unterscheiden.</p>

<h2>Mediasmith als Alternative</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> ist eine native Swift-App für macOS, die die Konvertierung in drei dedizierte Warteschlangen organisiert – Video, Bilder und Audio – in einem einzigen Fenster. Sie ist für Leute gebaut, die mehr brauchen als Format-rein-Format-raus.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Mediasmith als Permute-Alternative für Medienkonvertierung auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Geordnete Pixel-Pipeline</h3>
<p>Der auffälligste Unterschied ist die Pixel-Pipeline für Bilder. Statt nur Formate zu konvertieren, baust du eine Abfolge von Operationen – Skalieren, Zuschneiden, Wasserzeichen – die der Reihe nach ausgeführt werden. Die Reihenfolge ist wichtig: Zuerst skalieren und dann zuschneiden liefert andere Ergebnisse als zuerst zuzuschneiden. Du bestimmst die Reihenfolge.</p>

<h3>MP3 über integriertes LAME</h3>
<p>Die Audiokonvertierung umfasst MP3-Export über einen integrierten LAME-Encoder. Du musst weder Homebrew installieren noch nach Codec-Paketen suchen. Es funktioniert sofort.</p>

<h3>Parallele Stapelverarbeitung</h3>
<p>Große Batches werden mit einstellbarer Parallelität verarbeitet. Auf einem Apple-Silicon-Mac bedeutet das, dass Hunderte von Bildern im Hintergrund konvertiert werden, ohne den Rest deines Systems lahmzulegen.</p>

<h3>Presets</h3>
<p>Speichere deine am häufigsten genutzten Format-und-Pipeline-Kombinationen als Presets. Gängige Jobs wie „Web-Export: WebP, 1600px, mit Wasserzeichen" werden zu Ein-Klick-Operationen.</p>

<p>Wenn Permute alles kann, was du brauchst, gibt es keinen Grund zu wechseln. Aber wenn du dir eine tiefere Bildverarbeitung oder ein anderes Workflow-Modell gewünscht hast, lohnt sich ein Blick auf Mediasmith.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "heic-to-jpg-batch-mac": {
    slug: "heic-to-jpg-batch-mac",
    title: "So konvertierst du HEIC in JPG im Batch auf dem Mac",
    description:
      "Hunderte HEIC-Fotos von deinem iPhone, die außerhalb von Apples Ökosystem niemand öffnen kann. Sie im Batch in JPG umzuwandeln sollte einfach sein.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jedes iPhone-Foto, das seit iOS 11 aufgenommen wird, ist standardmäßig HEIC. Das Format ist hervorragend – halb so groß wie JPEG bei vergleichbarer Qualität. Das Problem entsteht, sobald du diese Fotos mit jemandem außerhalb des Apple-Ökosystems teilen musst. Deine WordPress-Seite akzeptiert keine HEIC-Uploads. Dein Fotolabor will JPEG. Dein Kunde mit Windows 10 kann die Dateien nicht einmal öffnen.</p>

<p>Eine einzelne HEIC-Datei in der Vorschau in JPG umzuwandeln dauert etwa zehn Sekunden. 300 von einem Hochzeitsshooting kosten dich den Rest des Abends.</p>

<h2>Integrierte Optionen unter macOS</h2>

<p>Die Schnellaktionen im Finder können ausgewählte Bilder in JPEG umwandeln. Dateien markieren, Rechtsklick, Schnellaktionen, Bild konvertieren. Das funktioniert, aber du hast keine Qualitätskontrolle – die Ausgabequalität ist fest vorgegeben, und es gibt keine Möglichkeit, während der Konvertierung zu skalieren oder andere Anpassungen vorzunehmen. Die Vorschau kann einzelne Dateien exportieren, aber es gibt keinen Batch-Export. Der Befehl <code>sips</code> beherrscht HEIC-zu-JPEG, verlangt aber Terminal-Erfahrung und bietet keine Pipeline-Optionen.</p>

<h2>HEIC im Batch zu JPG mit voller Kontrolle</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> konvertiert HEIC im Batch zu JPG mit einer Pixel-Pipeline, die dir die Kontrolle über die Ausgabe gibt. Zieh deine HEIC-Dateien auf die Bild-Warteschlange, setze JPEG als Ausgabeformat, stelle den Qualitätsregler ein und konvertiere.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch-Konvertierung von HEIC zu JPG auf dem Mac mit Qualitätskontrolle" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gleich weitere Operationen hinzufügen</h3>
<p>Da du sowieso schon konvertierst, kannst du in der Pixel-Pipeline gleich weitere Operationen verketten. Skaliere alle Fotos auf eine maximale Breite für die Web-Nutzung. Schneide auf ein einheitliches Seitenverhältnis zu. Füge für Portfolio-Bilder ein Wasserzeichen hinzu. Die Pipeline läuft der Reihe nach ab, sodass „erst skalieren, dann Wasserzeichen" und „erst Wasserzeichen, dann skalieren" bewusst unterschiedliche Ergebnisse liefern.</p>

<h3>Metadaten erhalten oder entfernen</h3>
<p>HEIC-Dateien enthalten EXIF-Daten – Kameraeinstellungen, GPS-Koordinaten, Zeitstempel. Je nach Anwendungsfall willst du diese Metadaten vielleicht zur Archivierung behalten oder sie aus Datenschutzgründen entfernen, bevor du die Bilder online teilst.</p>

<h3>Den Workflow speichern</h3>
<p>Wenn HEIC-zu-JPG eine regelmäßige Aufgabe ist – monatliche Fotoexporte vom Handy, Kundenlieferungen – speichere Format und Pipeline als Preset. Beim nächsten Batch reicht ein Klick.</p>

<p>HEIC ist ein großartiges Format zum Speichern. JPEG ist nach wie vor das universelle Format zum Teilen. Die Massenkonvertierung zwischen beiden sollte weder ein Terminal noch einen Cloud-Upload erfordern.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "video-converter-mac-native": {
    slug: "video-converter-mac-native",
    title: "Nativer Video-Converter für Mac — ohne Electron",
    description:
      "Electron-basierte Converter fressen RAM und lassen deine Lüfter aufdrehen. Ein nativer macOS-Video-Converter nutzt Hardwarebeschleunigung und bleibt schlank.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du lädst einen Video-Converter herunter, ziehst eine 4K-Datei rein, und die Lüfter deines MacBooks drehen auf wie ein Düsentriebwerk. Die Aktivitätsanzeige zeigt, dass die App 800 MB RAM verbraucht – für einen Format-Converter. Der Übeltäter ist fast immer Electron: ein kompletter Chromium-Browser, der hinter der Oberfläche des Converters läuft. Die App sieht poliert aus, verbrennt aber Ressourcen fürs Rendern einer Webseite, statt dein Video zu transkodieren.</p>

<p>Auf einem Rechner, der für Medienarbeit gebaut ist, sollte der Converter selbst nicht der Performance-Engpass sein.</p>

<h2>Warum native Apps bei Video wichtig sind</h2>

<p>macOS bietet über VideoToolbox hardwarebeschleunigtes Encoding und Decoding für Video. Apple-Silicon-Chips verfügen über dedizierte Media-Engines, die H.264 und H.265 mit einem Bruchteil des Stromverbrauchs von Software-Encoding transkodieren können. Aber ein Converter profitiert davon nur, wenn er mit nativen Frameworks gebaut ist. Electron-Apps rufen typischerweise ffmpeg im Software-Modus auf und umgehen die Hardware damit komplett.</p>

<p>Der Unterschied ist messbar: Ein 10-minütiger 4K-Clip, der in einer nativen App 3 Minuten braucht, kann in einem Electron-Wrapper 12 Minuten dauern – und dabei mehr Akku und mehr RAM verbrauchen.</p>

<h2>Ein Converter, der die Hardware nutzt, für die du bezahlt hast</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> ist in Swift mit nativen macOS-Frameworks gebaut. Die Video-Transkodierung nutzt auf Apple Silicon automatisch Hardwarebeschleunigung. Die App läuft in einem einzigen Fenster mit drei Warteschlangen – Video, Bilder und Audio – und ihr Speicherverbrauch bleibt gering, weil kein eingebetteter Browser mitläuft.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Nativer macOS-Video-Converter mit hardwarebeschleunigtem Encoding" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Formatunterstützung</h3>
<p>Konvertiere zwischen MOV, MP4, AVI, MKV und WebM. Für die meisten Workflows – etwa eine Bildschirmaufnahme von MOV zu MP4 zum Teilen umzuwandeln oder Kundenmaterial in ein Lieferformat zu transkodieren – ist es Ziehen, Ablegen, Fertig.</p>

<h3>Läuft parallel zu deinen anderen Tools</h3>
<p>Da die App leichtgewichtig ist, kannst du eine Batch-Konvertierung im Hintergrund laufen lassen, während du in Final Cut Pro oder Premiere schneidest, ohne dass der Converter um Ressourcen konkurriert. Auf einem MacBook bedeutet das auch weniger Hitze und mehr Akkulaufzeit.</p>

<p>Wenn dein aktueller Converter deinen Mac klingen lässt, als würde er einen Spielfilm rendern, obwohl er nur ein Containerformat ändert, ist eine native App die Lösung.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "convert-webp-to-png-mac": {
    slug: "convert-webp-to-png-mac",
    title: "So konvertierst du WebP in großen Mengen zu PNG auf dem Mac",
    description:
      "Einen Ordner mit WebP-Bildern heruntergeladen, und nichts öffnet sie richtig. Massenkonvertierung zu PNG unter macOS ohne Web-Uploader.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast ein Dutzend Bilder von einer Website gespeichert, und jedes einzelne ist eine .webp-Datei. Die Vorschau öffnet sie, aber die Hälfte deiner anderen Apps nicht – ältere Photoshop-Versionen, Keynote-Vorlagen, E-Mail-Programme und die meisten Druckdienste erwarten nach wie vor JPEG oder PNG. Wenn du mit heruntergeladenen Assets, Produktbildern aus einer Konkurrenzanalyse oder aus dem Web zusammengesuchten Referenzboards arbeitest, ist die WebP-zu-PNG-Konvertierung eine wöchentliche Pflichtaufgabe.</p>

<p>Es einzeln in der Vorschau zu machen, funktioniert – bis du fünfzig Dateien hast. Dann nicht mehr.</p>

<h2>macOS und WebP: fast am Ziel</h2>

<p>Seit macOS Ventura kann die Vorschau WebP-Dateien öffnen und anzeigen. Aber die Schnellaktionen im Finder – das schnellste integrierte Batch-Tool – bieten HEIC, JPEG und PNG als Ausgabeformate an und akzeptieren nur genau diese Formate als Eingabe. WebP-Dateien werden stillschweigend ignoriert. Das Kommandozeilentool <code>sips</code> unterstützt WebP überhaupt nicht. macOS kann dir WebP-Bilder also zeigen, aber ohne Hilfe von Drittanbietern nicht im Batch konvertieren.</p>

<h2>WebP in großen Mengen zu PNG in einer nativen App</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> unterstützt WebP sowohl als Eingabe- als auch als Ausgabeformat. Zieh einen Ordner mit WebP-Dateien auf die Bild-Warteschlange, wähle PNG als Ausgabe und konvertiere. Der Batch wird mit einstellbarer Parallelität verarbeitet, sodass selbst Hunderte von Dateien schnell fertig sind.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Massenkonvertierung von WebP zu PNG auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Die andere Richtung</h3>
<p>WebP ist auch als Ausgabeformat nützlich. Wenn du Bilder für eine Website vorbereitest, kann die Konvertierung von PNG oder JPEG zu WebP die Dateigröße um 25–35% reduzieren, bei minimalem sichtbaren Qualitätsverlust. Dieselbe Warteschlange funktioniert in beide Richtungen – PNG zu WebP für die Web-Optimierung, WebP zu PNG für die Kompatibilität.</p>

<h3>Verarbeitungsschritte hinzufügen</h3>
<p>Während der Konvertierung kannst du Pipeline-Operationen hinzufügen. Skaliere Bilder auf eine einheitliche Breite für dein Design-System. Schneide sie auf ein Standard-Seitenverhältnis zu. Die Pixel-Pipeline wendet jede Operation der Reihe nach an, bevor das finale PNG gespeichert wird.</p>

<h3>Kein Upload nötig</h3>
<p>Online-WebP-Converter gibt es zwar, aber sie verlangen, dass du deine Dateien auf einen fremden Server hochlädst. Für Kundenarbeit, interne Assets oder alles, was auch nur ansatzweise sensibel ist, kommt das nicht infrage. Eine lokale App konvertiert alles auf deinem eigenen Rechner.</p>

<p>WebP ist das Format des Webs. PNG ist das Format für alle anderen. Die Massenkonvertierung zwischen beiden sollte Drag-and-Drop sein, kein Rechercheprojekt.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "resize-images-batch-mac": {
    slug: "resize-images-batch-mac",
    title: "So skalierst du Bilder im Batch auf dem Mac",
    description:
      "Fotos einzeln in der Vorschau zu skalieren ist Zeitverschwendung. Hunderte Bilder unter macOS im Batch auf exakte Maße bringen, ganz ohne Photoshop.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Deine E-Commerce-Seite braucht Produktbilder mit exakt 1200×1200 Pixeln. Dein Blog-Template bricht, wenn Hero-Bilder breiter als 1600px sind. Die Markenrichtlinien deines Kunden geben eine maximale Bildgröße für Social-Media-Assets vor. Du hast 400 Bilder in Kameraauflösung, und jedes einzelne muss vor dem Upload skaliert werden.</p>

<p>Die Vorschau unter macOS kann Bilder skalieren – eines nach dem anderen, mit einem Dialogfenster, dann Ablage > Exportieren. Für eine Handvoll Dateien ist das in Ordnung. Für Hunderte ist es unbezahlte Arbeit.</p>

<h2>Integrierte Optionen zum Batch-Skalieren</h2>

<p>macOS bringt kein dediziertes Werkzeug zum Batch-Skalieren mit. Die Schnellaktionen im Finder können Formate konvertieren, bieten aber keine Skalierungsoptionen. Automator (oder Kurzbefehle) lässt sich zum Skalieren von Bildern konfigurieren, aber einen verlässlichen Workflow zu bauen bedeutet, die Automator-Oberfläche zu lernen, Sonderfälle wie Hoch- vs. Querformat zu behandeln und zu hoffen, dass der Workflow bei ungewöhnlichen Formaten nicht stillschweigend versagt. Das <code>sips</code>-CLI kann in einer Schleife skalieren, aber ein Shell-Skript ist kein Workflow, den du an einen Kollegen weitergeben kannst.</p>

<h2>Batch-Skalierung mit einer geordneten Pipeline</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> übernimmt das Batch-Skalieren als Teil seiner Pixel-Pipeline. Zieh Bilder auf die Bild-Warteschlange, füge eine Skalierungs-Operation hinzu, lege deine Zielmaße oder eine maximale Breite fest und verarbeite den Batch. Die App skaliert jedes Bild in der Warteschlange mit einstellbarer Parallelität.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch-Bildskalierung auf dem Mac mit Pixel-Pipeline" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Operationen verketten</h3>
<p>Skalieren ist oft nur der erste Schritt. Die Pixel-Pipeline lässt dich Operationen der Reihe nach verketten: auf 1200px Breite skalieren, dann quadratisch zuschneiden, dann ein Wasserzeichen hinzufügen. Jede Operation läuft in der von dir festgelegten Reihenfolge ab, sodass du vorhersehbare, wiederholbare Ergebnisse über den gesamten Batch hinweg bekommst.</p>

<h3>Formatkonvertierung inklusive</h3>
<p>Wenn du für die Web-Nutzung skalierst, willst du wahrscheinlich auch von TIFF oder PNG zu JPEG oder WebP konvertieren. Das Ausgabeformat wird zusammen mit der Pipeline festgelegt, sodass Skalieren und Formatkonvertierung in einem einzigen Durchgang passieren – du musst den Batch nicht durch ein zweites Tool schicken.</p>

<h3>Presets für wiederkehrende Jobs</h3>
<p>Wenn du regelmäßig auf dieselben Vorgaben skalierst – „Instagram: 1080×1080, JPEG, 90% Qualität" oder „Web-Hero: 1600px breit, WebP" – speichere die Pipeline als Preset. Beim nächsten Mal: ziehen, Preset auswählen, konvertieren. Die gesamte Spezifikation wird gespeichert, nicht nur das Format.</p>

<p>Batch-Skalierung ist eine dieser Aufgaben, die sich anfühlt, als sollte sie ins Betriebssystem eingebaut sein. Bis Apple das genauso sieht, ist ein dediziertes Tool mit einer richtigen Pipeline der schnellste Weg von Kameraauflösung zu upload-fertig.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },
  "convert-mov-to-mp4-mac": {
    slug: "convert-mov-to-mp4-mac",
    title: "MOV in MP4 umwandeln auf dem Mac",
    description:
      "Bildschirmaufnahmen und iPhone-Videos werden als MOV gespeichert. Die meisten Plattformen wollen MP4. So konvertierst du auf macOS ohne Neukodierung oder Qualitätsverlust.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine Bildschirmaufnahme für ein Tutorial gemacht, und macOS hat sie als .mov-Datei gespeichert. Du ziehst sie in dein CMS, und der Upload schlägt fehl — nur MP4. Du versuchst, sie an eine E-Mail anzuhängen oder in ein Kundenportal hochzuladen, und dasselbe passiert wieder. MOV ist Apples Standardcontainer, aber MP4 ist das, was der Rest der Welt erwartet.</p>

<p>Das ist die mit Abstand häufigste Videokonvertierung auf macOS, und das Betriebssystem selbst bietet dafür keinen sauberen Ein-Klick-Weg.</p>

<h2>Deine Optionen ohne Software von Drittanbietern</h2>

<p>iMovie kann als MP4 exportieren, aber eine Bildschirmaufnahme nur wegen einer Container-Änderung in iMovie zu importieren und neu zu exportieren, ist absurder Aufwand. Das Menü „Ablage > Exportieren als" von QuickTime Player bietet feste Auflösungsvoreinstellungen (1080p, 720p, 480p), aber keine Option für „gleiche Auflösung, nur MP4". Das Kommandozeilen-Tool <code>ffmpeg</code> erledigt das perfekt — <code>ffmpeg -i input.mov -c copy output.mp4</code> — erfordert aber eine Installation über Homebrew und Vertrautheit mit dem Terminal.</p>

<p>Zwischen „iMovie öffnen" und „Homebrew installieren" klafft eine Lücke, die eigentlich ein einfacher Konverter füllen sollte.</p>

<h2>MOV zu MP4 in einem nativen Konverter</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> erledigt diese Konvertierung per Drag-and-Drop. Zieh die MOV-Datei in die Video-Warteschlange, wähle MP4 als Ausgabeformat und starte die Konvertierung. Auf Apple Silicon sorgt hardwarebeschleunigte Kodierung dafür, dass selbst lange Videos schnell und mit minimalem Akkuverbrauch fertig werden.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="MOV-zu-MP4-Konvertierung auf dem Mac mit Hardwarebeschleunigung" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>MOV-Dateien im Stapel konvertieren</h3>
<p>Wenn du einen ganzen Ordner voller Bildschirmaufnahmen, iPhone-Videos oder Kameramaterial hast — alles MOV —, zieh sie einfach alle auf einmal rein. Der Stapel wird parallel verarbeitet, sodass du nicht warten musst, bis eine Datei fertig ist, bevor die nächste startet.</p>

<h3>Mehr als nur Video</h3>
<p>Dieselbe App verarbeitet auch Bilder und Audio in eigenen Warteschlangen. Wenn dein Workflow das Konvertieren von Bildschirmaufnahmen (MOV zu MP4), das Optimieren von Screenshots (PNG zu WebP) und das Exportieren von Audioclips (WAV zu MP3) umfasst, passiert alles drei in einem Fenster, ohne das Tool zu wechseln.</p>

<p>MOV zu MP4 ist eigentlich eine Zwei-Sekunden-Aufgabe, die macOS überraschend kompliziert macht. Ein nativer Konverter bringt sie dahin zurück, wo sie hingehört — ziehen, ablegen, fertig.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "add-watermark-batch-images-mac": {
    slug: "add-watermark-batch-images-mac",
    title: "Wasserzeichen zu Bildern im Stapel hinzufügen auf dem Mac",
    description:
      "Ein Logo auf Hunderte Fotos einzeln zu stempeln ist brutal. Wasserzeichen im Stapel auf macOS mit Kontrolle über Position und Pipeline.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine Vorschaugalerie für einen Kunden fotografiert — 150 Fotos — und musst jedes davon mit einem Wasserzeichen versehen, bevor du die Korrekturabzüge verschickst. Oder du lädst Portfolioarbeiten auf eine öffentliche Seite hoch und willst dein Logo auf jedem Bild haben. Jedes Foto einzeln in einem Editor zu öffnen, das Wasserzeichen zu platzieren, die Position anzupassen und zu exportieren dauert länger als das Shooting selbst.</p>

<p>Wasserzeichen sind im Grunde immer eine Stapeloperation. Niemand versieht nur ein einzelnes Bild mit einem Wasserzeichen. Trotzdem behandeln die meisten Tools auf macOS das als Aufgabe pro Datei.</p>

<h2>macOS hat keine eingebaute Wasserzeichen-Funktion</h2>

<p>Vorschau, Schnellaktionen und der Finder bieten null Unterstützung für Wasserzeichen. Automator hat eine Aktion „Wasserzeichen zu PDF-Dokumenten hinzufügen" — aber nur für PDFs, nicht für Bilder. Kurzbefehle können Bilder überlagern, aber einen verlässlichen Kurzbefehl zu bauen, der unterschiedliche Bildgrößen handhabt, das Wasserzeichen konsistent positioniert und im richtigen Format ausgibt, ist ein Projekt für mehrere Stunden. Die meisten Fotografen greifen am Ende auf die Wasserzeichen-Exportfunktion von Lightroom zurück, was in Ordnung ist, wenn man ohnehin in Lightroom arbeitet — aber übertrieben, wenn man nur einen Logo-Stempel braucht.</p>

<h2>Wasserzeichen im Stapel mit einer Pixel-Pipeline</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> integriert Wasserzeichen als Pipeline-Schritt für Bilder im Stapel. Füge der Pixel-Pipeline einen Wasserzeichen-Schritt hinzu, wähle deine Logo-Datei, lege Position und Deckkraft fest, und jedes Bild in der Warteschlange bekommt dieselbe Behandlung.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Wasserzeichen im Stapel auf Bilder anwenden auf dem Mac mit Pipeline-Operationen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Die Reihenfolge zählt</h3>
<p>Die Pixel-Pipeline führt Operationen nacheinander aus, und die Reihenfolge verändert das Ergebnis. Wenn du Bilder vor dem Wasserzeichen verkleinerst, erscheint das Wasserzeichen im Verhältnis zum Ausgabebild in einer gleichbleibenden visuellen Größe. Setzt du zuerst das Wasserzeichen und verkleinerst danach, skaliert das Wasserzeichen mit dem Bild mit. Beides ist sinnvoll — die Pipeline gibt dir die Kontrolle darüber, welches Verhalten du willst.</p>

<h3>Mit anderen Operationen kombinieren</h3>
<p>Wasserzeichen kommen selten allein vor. Eine typische Pipeline für Korrekturabzüge könnte so aussehen: auf 1600px Breite verkleinern (damit die Abzüge nicht in voller Auflösung vorliegen), auf 3:2 zuschneiden, dann das Wasserzeichen setzen. Alle drei Operationen laufen in einem Durchgang über den gesamten Stapel.</p>

<h3>Als Preset speichern</h3>
<p>Wenn du regelmäßig Korrekturabzüge mit Wasserzeichen versiehst, speichere die Pipeline — Format, Größenänderung, Wasserzeichen-Datei und Position — als Preset. Die nächste Galerie ist dann nur noch Ziehen und Klicken.</p>

<p>Wasserzeichen sind genau einmal mühsam: wenn du die Pipeline einrichtest. Danach läuft es automatisch.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "handbrake-alternative-mac-images-too": {
    slug: "handbrake-alternative-mac-images-too",
    title: "HandBrake-Alternative für Mac, die auch Bilder verarbeitet",
    description:
      "HandBrake ist großartig für Video, rührt aber keine Bilder an. Ein macOS-Konverter, der Video, Bilder und Audio in einem Tool vereint.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>HandBrake ist ein solider, kostenloser Open-Source-Video-Transcoder. Wenn du nur Videodateien konvertierst, ist er kaum zu schlagen. Aber sobald dein Workflow auch Bilder umfasst — Produktfotos verkleinern, HEIC in JPEG umwandeln, ein Portfolio mit Wasserzeichen versehen —, kann HandBrake nicht helfen. Am Ende läufst du HandBrake für Video und ein separates Tool für Bilder und wechselst zwischen zwei Apps für etwas, das sich wie eine einzige Kategorie von Arbeit anfühlt: Medienkonvertierung.</p>

<p>Wenn deine Arbeit mehrere Medientypen betrifft, nimmt die Konsolidierung in ein einziges Tool jede Menge Reibung heraus.</p>

<h2>Wo HandBrake glänzt und wo es aufhört</h2>

<p>HandBrake beherrscht Video-Transcoding mit tiefer Kontrolle: Codec-Auswahl, Bitraten-Zielwerte, Filter, Untertitel, Kapitelmarken. Für DVD-Rips und Videoarchivierung ist es hervorragend. Aber es hat keine Bildunterstützung, keine reine Audiokonvertierung, und seine Oberfläche — so mächtig sie ist — hat eine steile Lernkurve für Leute, die nur MOV in MP4 umwandeln wollen.</p>

<p>Wenn du HandBrakes fortgeschrittene Videofunktionen brauchst (Untertitel einbrennen, Decomb, spezifisches Encoder-Tuning), gibt es keinen Ersatz. Aber wenn deine Videoanforderungen einfacher sind und du zusätzlich Bilder und Audio verarbeitest, deckt ein einheitliches Tool mehr Boden ab.</p>

<h2>Video, Bilder und Audio in einem Fenster</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> ist eine native macOS-App mit drei Warteschlangen — Video, Bilder und Audio — in einem einzigen Fenster. Sie wird HandBrake für fortgeschrittene Videoarbeit nicht ersetzen, aber sie deckt die gängigen Konvertierungen ab (MOV zu MP4, MKV zu MP4) und dazu Bild-Stapelverarbeitung und Audioexport.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="HandBrake-Alternative für Mac mit Bild- und Audiokonvertierung" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Eine Bild-Pipeline, die HandBrake nicht hat</h3>
<p>Die Bild-Warteschlange enthält eine geordnete Pixel-Pipeline: Größe ändern, zuschneiden, Wasserzeichen setzen und Formatkonvertierung (HEIC, JPEG, PNG, WebP, TIFF). Operationen werden nacheinander verkettet, und Stapel werden parallel verarbeitet. Genau das ist die Funktionalität, für die du sonst Photoshop-Aktionen oder ein separates Batch-Tool bräuchtest.</p>

<h3>MP3-Export eingebaut</h3>
<p>Die Audio-Warteschlange konvertiert zwischen Formaten einschließlich MP3 über einen mitgelieferten LAME-Encoder. Wenn du Audio aus Video extrahierst oder Podcast-Aufnahmen konvertierst, erledigt sie das ohne separates Tool oder eine Homebrew-Installation.</p>

<h3>Native Performance</h3>
<p>In Swift entwickelt, nutzt die App hardwarebeschleunigte Kodierung auf Apple Silicon. Bei einfachen Videokonvertierungen bedeutet das schnelle Transcodes bei niedrigem Stromverbrauch — kein Lüftergeräusch für eine simple Formatänderung.</p>

<p>HandBrake für tiefgehende Videoarbeit; ein einheitlicher Konverter für alles andere. Beides schließt sich nicht aus.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "mp3-converter-mac": {
    slug: "mp3-converter-mac",
    title: "MP3-Konverter für Mac — Audio, Video und Bilder in einer App",
    description:
      "MP3-Export auf macOS bedeutet meist ffmpeg installieren oder eine fragwürdige kostenlose App. Ein nativer Konverter mit integriertem LAME-Encoder.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Du hast eine WAV-Datei aus einer Sprachaufnahme und brauchst eine MP3 für deine Website. Oder ein Podcast-Schnitt wurde als AIFF exportiert und muss für die Distribution zu MP3 werden. Oder du hast eine Videodatei, bei der du nur die Tonspur als MP3 brauchst. Auf macOS führt dich diese eigentlich simple Aufgabe in ein Kaninchenloch aus fragwürdigen kostenlosen Apps, browserbasierten Konvertern, die deine Audiodatei auf unbekannte Server hochladen, oder der Installation von Homebrew und ffmpeg nur für einen einzigen Befehl.</p>

<p>MP3 ist das universellste Audioformat überhaupt. Es auf einem Mac in dieses Format umzuwandeln, sollte kein Informatikstudium erfordern.</p>

<h2>Warum macOS MP3 nicht nativ exportiert</h2>

<p>MP3-Kodierung erfordert die LAME-Bibliothek (oder ein Äquivalent), und Apple liefert sie nicht mit. iTunes — heute Musik — kann CDs als MP3 importieren, aber es gibt keine allgemeine „Diese Datei in MP3 umwandeln"-Funktion im Betriebssystem. GarageBand kann als MP3 exportieren, aber GarageBand nur zu öffnen, um eine Audiodatei zu konvertieren, ist so, als würdest du Final Cut öffnen, um ein Video zu kürzen. QuickTime Player exportiert Audio nur als M4A. Die Lücke besteht, weil MP3-Kodierung eine lizenzierte Technologie ist, die Apple bewusst nicht in seine Konvertierungs-Workflows integriert hat.</p>

<h2>MP3-Export mit integriertem Encoder</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> liefert den LAME-MP3-Encoder direkt in der App mit. Kein Homebrew, kein Terminal, keine Codec-Downloads. Zieh eine Audiodatei in die Audio-Warteschlange, wähle MP3 als Ausgabeformat und konvertiere. Der Encoder ist bereits enthalten — er funktioniert, sobald du die App öffnest.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="MP3-Konverter für Mac mit integriertem LAME-Encoder" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nicht nur Audio</h3>
<p>Dieselbe App verarbeitet auch Videokonvertierung (MOV zu MP4, MKV zu MP4) und Bild-Stapelverarbeitung (Größe ändern, zuschneiden, Wasserzeichen, Formatkonvertierung) in eigenen Warteschlangen. Wenn dein Workflow mehrere Medientypen umfasst — was bei den meisten kreativen Workflows der Fall ist —, deckt eine App alle drei ab, ohne zwischen Tools zu jonglieren.</p>

<h3>Audio im Stapel konvertieren</h3>
<p>Musst du einen ganzen Ordner mit WAV-Aufnahmen in MP3 umwandeln? Zieh sie alle auf einmal rein. Der Stapel wird mit konfigurierbarer Parallelität verarbeitet, sodass selbst große Sammlungen an Audiodateien schnell konvertiert werden.</p>

<h3>Lokal und privat</h3>
<p>Jede Konvertierung findet auf deinem eigenen Rechner statt. Es werden keine Dateien irgendwohin hochgeladen. Bei Kundenaufnahmen, Interview-Audio oder allem Vertraulichen zählt das mehr als Bequemlichkeit — es ist eine Voraussetzung.</p>

<p>MP3-Konvertierung ist ein grundlegendes Werkzeug, das macOS vergessen hat einzubauen. Eine native App mit integriertem Encoder schließt diese Lücke ohne den Umweg.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "convert-png-to-jpg-batch-mac": {
    slug: "convert-png-to-jpg-batch-mac",
    title: "PNG in JPG im Stapel umwandeln auf dem Mac",
    description:
      "Screenshots und Design-Exporte häufen sich als PNGs schnell an. So verwandelst du auf macOS einen ganzen Ordner in JPGs, ohne jede Datei einzeln zu öffnen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>PNG ist ein gutes Format für Screenshots und Grafiken mit Transparenz, aber eine schlechte Standardwahl für Fotos und Webbilder — die Dateien werden zwei- bis fünfmal größer als ein vergleichbares JPG, ohne einen sichtbaren Qualitätsgewinn. Wenn du einen Ordner mit hundert PNGs hast, die für eine Website, einen E-Mail-Anhang oder eine Kundenlieferung bestimmt sind, ist es keine ernsthafte Option, sie einzeln in Vorschau zu konvertieren.</p>

<h2>Warum sich PNG überhaupt erst anhäuft</h2>
<p>Screenshot-Tools verwenden standardmäßig PNG. Design-Software exportiert flachgedrückte Bilder standardmäßig als PNG. Scanner und manche Kameras speichern ebenfalls PNG. Nichts davon ist falsch — PNG ist verlustfrei und beherrscht Transparenz —, aber es führt dazu, dass sich PNGs in den Ordnern Downloads und Schreibtisch ansammeln, selbst wenn JPG dem eigentlichen Verwendungszweck besser dienen würde.</p>

<h2>Der manuelle Weg und warum er scheitert</h2>
<p>Vorschau kann eine einzelne PNG über Ablage > Exportieren in JPG umwandeln. Wählst du im Finder mehrere Dateien aus und klickst mit der rechten Maustaste, findest du auch eine Schnellaktion zur Bildkonvertierung — aber sie lässt dich die JPG-Qualität nicht einstellen und behält stillschweigend dieselben Dateinamen bei, was bedeutet, dass du die Originale überschreibst, wenn du nicht aufpasst. Bei einer Handvoll Dateien ist das noch zu ertragen. Bei hundert willst du Kontrolle über die Qualität und eine Warteschlange, die unbeaufsichtigt durchläuft.</p>

<h2>Im Stapel konvertieren mit Qualitätskontrolle</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> hat eine eigene Bild-Warteschlange, die genau dafür gebaut ist. Zieh einen Ordner voller PNGs hinein, wähle JPG als Ausgabeformat, stelle deine Kompressionsqualität ein und konvertiere den gesamten Stapel in einem Durchgang. Dateien werden parallel statt nacheinander verarbeitet, sodass ein Ordner mit hundert Bildern nicht hundertmal so lange dauert wie eine einzelne Datei.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="PNG-Dateien im Stapel in JPG umwandeln auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gleich mit verkleinern</h3>
<p>Da die Formatkonvertierung in derselben Pipeline sitzt wie Größenänderung und Zuschnitt, kannst du überdimensionierte Screenshots gleichzeitig mit der Konvertierung auf eine vernünftige Breite verkleinern — nützlich, wenn die PNGs von einem 5K-Display stammen und für einen Blogbeitrag bestimmt sind.</p>

<h3>Originale bleiben unangetastet</h3>
<p>Konvertierte Dateien werden als neue Ausgabedateien geschrieben, deine PNG-Quellen werden also nicht überschrieben. Das ist wichtig, falls du die Transparenz oder verlustfreie Qualität jemals wieder brauchst.</p>

<p>PNG-zu-JPG-Konvertierung im Stapel ist eine Fünf-Minuten-Aufgabe statt eines Nachmittags, sobald du es nicht mehr Datei für Datei erledigst.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },

  "compress-images-batch-mac": {
    slug: "compress-images-batch-mac",
    title: "Bilder im Stapel komprimieren auf dem Mac",
    description:
      "Große Fotoordner bremsen Uploads und fressen Speicherplatz. So verkleinerst du auf macOS Hunderte Bilder auf einmal, ohne es manuell zu machen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Ein Ordner mit Kamerafotos oder exportierten Grafiken kann leicht mehrere Gigabyte umfassen, und der Großteil dieser Größe ist für das Auge unsichtbar — ein Foto, das bei 80 Prozent JPEG-Qualität komprimiert wurde, sieht fast identisch aus wie die unkomprimierte Version, belegt aber nur einen Bruchteil des Speichers. Das Problem ist nicht zu wissen, dass Kompression funktioniert; das Problem ist, sie über Dutzende oder Hunderte Dateien anzuwenden, ohne jede einzeln zu öffnen.</p>

<h2>Warum „einfach komprimieren" auf dem Mac schwieriger ist, als es klingt</h2>
<p>macOS hat kein eingebautes Werkzeug für Stapelkompression. Vorschau lässt dich ein Bild nach dem anderen mit einem Qualitätsregler exportieren, was für ein einzelnes Foto gut funktioniert, aber nicht skaliert. Die Option „Bildgröße" beim Anhängen von Fotos in Mail komprimiert zwar auf eine gewisse Weise, ist aber an das Versenden einer E-Mail gebunden und nicht daran, komprimierte Dateien zu erzeugen, die du behalten oder woanders hochladen kannst. Für echte Stapelarbeit brauchst du ein Tool mit Warteschlange.</p>

<h2>Stapelkompression, die Originale unangetastet lässt</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> erledigt das über seine Bild-Warteschlange. Ziehe einen Ordner hinein, behalte das gleiche Ausgabeformat bei (oder wechsle das Format, falls du gleichzeitig konvertierst) und stelle eine Qualitätsstufe ein. Der gesamte Stapel wird in einem Durchgang komprimiert, wobei die Aufträge parallel verarbeitet werden, damit große Ordner nicht ewig dauern.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Einen Ordner voller Bilder im Stapel komprimieren auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Die richtige Qualitätsstufe finden</h3>
<p>Es gibt keine universell „richtige" Kompressionseinstellung — sie hängt vom Bild und seinem Bestimmungsort ab. Produktfotografie für einen Onlineshop kann meist niedriger angesetzt werden als ein Portfoliostück, das in voller Bildschirmgröße betrachtet werden soll. Führe zuerst einen kleinen Testlauf durch, prüfe die Ausgabe in Originalgröße und passe an, bevor du dich auf tausend Dateien festlegst.</p>

<h3>Größenänderung als Teil der Kompression</h3>
<p>Die Dateigröße entsteht aus zwei Faktoren: Qualität und Abmessungen. Ein 6000px breites Foto, das auf einer Webseite bei 800px angezeigt wird, schleppt Pixel mit sich herum, die nie jemand sehen wird. Da Größenänderung und Kompression in derselben Pipeline liegen, kannst du die Abmessungen vor dem Qualitätsdurchgang reduzieren, was die Dateigröße oft stärker verkleinert als Kompression allein.</p>

<h3>Presets für wiederkehrende Aufgaben</h3>
<p>Wenn du regelmäßig denselben Bildtyp komprimierst — etwa wöchentliche Produktfotos für einen Shop —, speichere Format, Qualität und Größeneinstellungen als Preset, sodass künftige Stapel nur noch einen Klick entfernt sind.</p>

<p>Sobald Kompression eine Stapeloperation ist statt einer lästigen Pflicht pro Datei, gibt es keinen Grund mehr, überdimensionierte Bilder zu verschicken.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Hol dir Mediasmith im Mac App Store</a></p>
`,
  },
  "convert-mkv-to-mp4-mac": {
    slug: "convert-mkv-to-mp4-mac",
    title: "MKV auf dem Mac in MP4 umwandeln",
    description:
      "MKV-Dateien lassen sich nicht mit QuickTime abspielen und auch nicht ohne Weiteres auf die meisten Plattformen hochladen. So wandelst du sie unter macOS in MP4 um, ganz ohne ffmpeg zu installieren.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>MKV ist ein leistungsfähiges Containerformat — beliebt, weil es mehrere Audiospuren, Untertitel und Video in hoher Qualität in einer einzigen Datei unterbringen kann. Genau deshalb kommt so viel heruntergeladenes oder geripptes Material als MKV daher. Das Problem: macOS behandelt das Format wie einen Außenseiter. QuickTime Player öffnet es nicht. AirPlay streamt es nicht an ein Apple TV. Und die meisten Upload-Formulare oder Messaging-Apps, die Video akzeptieren, erwarten MP4 — eine MKV-Datei wird entweder abgelehnt oder lässt sich gar nicht erst als Vorschau anzeigen.</p>

<h2>Warum sich MKV und macOS nicht vertragen</h2>
<p>Apples Frameworks sind auf QuickTime-kompatible Container ausgelegt, und MKV gehörte nie dazu. VLC spielt MKV-Dateien problemlos ab, weil es eigene Decoder mitbringt — aber Wiedergabe ist nicht dasselbe wie Kompatibilität. Sobald du die Datei teilen, in Final Cut bearbeiten oder irgendwo hochladen willst, wo der Dateityp geprüft wird, wird MKV vom kleinen Ärgernis zum echten Hindernis.</p>

<h2>Umwandeln ohne Terminal</h2>
<p>Die klassische Lösung ist <code>ffmpeg -i input.mkv -c copy output.mp4</code>, was den Container ohne erneutes Encoding neu verpackt — schnell, aber es erfordert die Installation von ffmpeg über Homebrew und für jede Datei die korrekte Eingabe des Befehls. Für eine einzelne Datei ist das ein vertretbarer einmaliger Aufwand; für einen Ordner mit zwanzig Dateien wird es mühsam.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> liefert dasselbe Ergebnis per Drag-and-Drop-Warteschlange. Ziehe deine MKV-Dateien in die Video-Warteschlange, wähle MP4 als Ausgabeformat und starte die Umwandlung. Hardwarebeschleunigtes Encoding auf Apple Silicon hält den Prozess auch bei längeren Dateien flott.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Umwandlung von MKV-Videodateien in MP4 auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Den ganzen Ordner auf einmal umwandeln</h3>
<p>Wenn du eine Serie von Episoden oder einen Ordner heruntergeladener Clips als MKV vorliegen hast, stelle sie gemeinsam in die Warteschlange, statt sie einzeln zu konvertieren. Die Warteschlange verarbeitet Dateien mit einstellbarer Parallelität, sodass ein Batch aus zehn Dateien in etwa der Zeit fertig ist, die zwei oder drei nacheinander benötigen würden.</p>

<h3>Was mit zusätzlichen Audiospuren und Untertiteln passiert</h3>
<p>MKV-Dateien enthalten manchmal mehrere Audiospuren oder eingebettete Untertitel, mit denen MP4 anders umgeht. Hat deine Quelldatei mehr als eine Audiospur, solltest du prüfen, welche davon im Ergebnis landet — bei einfachen Dateien mit nur einer Spur ist das kein Thema, aber bei Multi-Track-Rips lohnt sich nach der Umwandlung ein kurzer Kontrollblick.</p>

<p>Sobald dein Video im MP4-Format vorliegt, spielt es in QuickTime, zeigt im Finder eine korrekte Vorschau und lässt sich überall problemlos hochladen, wo Standardvideo erwartet wird.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store laden</a></p>
`,
  },

  "mac-preview-batch-convert-limitations": {
    slug: "mac-preview-batch-convert-limitations",
    title: "Batch-Konvertierung mit Vorschau auf dem Mac — Was sie nicht kann",
    description:
      "Vorschau kann technisch gesehen mehrere Bilder auf einmal umwandeln, aber die Funktion hat echte Lücken. Hier siehst du, was sie gut kann und wo sie an ihre Grenzen stößt.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Vorschau ist die App, zu der die meisten Mac-Nutzer als Erstes greifen, wenn sie eine Handvoll Bilder umwandeln müssen, und für einfache Aufgaben funktioniert das auch: Mehrere Dateien im Finder auswählen, in Vorschau öffnen und über Ablage > Ausgewählte Bilder exportieren ein neues Format wählen. Sie ist im Betriebssystem integriert, kostenlos, und für eine schnelle Einzelaufgabe erfüllt sie ihren Zweck. Aber je mehr man sich für echte Batch-Arbeit darauf verlässt, desto deutlicher zeigen sich die Grenzen.</p>

<h2>Was der Batch-Export von Vorschau wirklich macht</h2>
<p>Mehrere Bilder auswählen, "Ausgewählte Bilder exportieren" wählen — und Vorschau lässt dich ein Ausgabeformat und einen Zielordner für den gesamten Batch festlegen. Für einen einfachen Formatwechsel — etwa HEIC zu JPEG — bei einer überschaubaren Anzahl von Dateien ist das durchaus nützlich.</p>

<h2>Wo die Grenzen liegen</h2>
<h3>Keine Qualitätskontrolle pro Datei</h3>
<p>Es gibt nur eine einzige Qualitätseinstellung, die einheitlich auf alle Dateien angewendet wird. Es gibt keine Möglichkeit, einen Bilder-Batch je nach Inhalt unterschiedlich zu komprimieren, und keine Live-Vorschau der Ausgabegröße, bevor du bestätigst.</p>

<h3>Kein Zuschneiden, Skalieren oder Wasserzeichen im selben Durchgang</h3>
<p>Die Markup-Werkzeuge von Vorschau können ein einzelnes Bild in der Größe ändern, wenn du es manuell öffnest, aber der Batch-Export bietet weder Skalieren, Zuschneiden noch Wasserzeichen als Teil der Konvertierung an. Willst du hundert Bilder umwandeln und dabei skalieren, brauchst du zwei separate manuelle Durchgänge — oder hundert manuelle Bearbeitungen.</p>

<h3>Kein Video- oder Audio-Support</h3>
<p>Die Batch-Werkzeuge von Vorschau funktionieren nur mit Bildern. Es gibt kein Konzept für die Umwandlung von Videodateien oder den Export von Audio — sobald dein Workflow mehrere Medientypen umfasst, greifst du ohnehin schon zu anderer Software.</p>

<h3>Keine Vorlagen oder Warteschlangen</h3>
<p>Jeder Batch-Export beginnt bei null. Es gibt keine Möglichkeit, "auf 1200px skalieren, in JPG umwandeln, Wasserzeichen unten rechts" als wiederholbare Aktion zu speichern — du wählst jedes Mal aufs Neue dieselben Optionen aus.</p>

<h2>Wann sich ein dediziertes Batch-Tool lohnt</h2>
<p>Wenn deine Batches gelegentlich anfallen und einfach sind — nur ein Formatwechsel, sonst nichts —, ist Vorschau völlig ausreichend, und es gibt keinen Grund, etwas anderes zu installieren. Sobald du aber Skalieren, Zuschneiden und Wasserzeichen zusammen brauchst, oder Bilder, Video und Audio im selben Workflow umwandelst, schließt ein dediziertes Tool wie <a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> diese Lücken mit einer geordneten Pixel-Pipeline und getrennten Warteschlangen für jeden Medientyp.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch-Bildverarbeitungs-Pipeline jenseits der Grenzen von Vorschau" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Vorschau deckt die Grundlagen gut ab. Zu wissen, wo genau sie aufhört, hilft dir zu entscheiden, wann es Zeit ist, zu etwas zu greifen, das speziell für Batch-Arbeit gebaut wurde.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store laden</a></p>
`,
  },

  "convert-tiff-to-jpg-mac": {
    slug: "convert-tiff-to-jpg-mac",
    title: "TIFF auf dem Mac in JPG umwandeln",
    description:
      "TIFFs von Scannern und Kameras sind riesig und werden von vielen Web-Tools oft nicht unterstützt. So wandelst du sie unter macOS in JPG um — eine Datei oder einen ganzen Batch.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>TIFF ist das bevorzugte Format für Scanner, professionelle Kameras im unkomprimierten Modus und Druck-Workflows, weil es jedes Bit an Bilddaten ohne verlustbehaftete Kompression bewahrt. Genau deshalb sind TIFF-Dateien so riesig — eine einzelne gescannte Dokumentseite kann leicht mehrere Dutzend Megabyte groß sein — und genau deshalb lehnen die meisten Webformulare, E-Mail-Clients und Messaging-Apps sie entweder rundweg ab oder kommen nur schlecht damit zurecht.</p>

<h2>Warum sich TIFF schlecht verschicken lässt</h2>
<p>Browser können TIFF in der Regel nicht direkt anzeigen. Die meisten Content-Management-Systeme akzeptieren es nicht als Upload. Und weil TIFF-Dateien bei fotografischen Inhalten so viel größer sind als JPG, verschwendest du nur Speicherplatz, wenn du sie behältst, nachdem du das druckfertige Original nicht mehr brauchst. Die Umwandlung in JPG löst beide Probleme: kleinere Dateien, die dort tatsächlich angezeigt werden, wo du sie brauchst.</p>

<h2>Eine einzelne Datei umwandeln</h2>
<p>Vorschau öffnet TIFF-Dateien nativ und kann über Ablage > Exportieren nach JPG exportieren — JPEG auswählen, eine Qualitätsstufe festlegen und speichern. Für ein oder zwei gescannte Seiten reicht das völlig aus und braucht keine zusätzliche Software.</p>

<h2>Einen gescannten Batch umwandeln</h2>
<p>Scanner produzieren selten nur eine Datei. Ein mehrseitiger Dokumentenscan, eine Kiste alter Fotos, die durch einen Flachbettscanner gelaufen ist, oder ein Batch-Export einer DSLR, die in TIFF fotografiert, können dir Dutzende Dateien bescheren, die alle dieselbe Behandlung brauchen. Jede einzeln in Vorschau zu öffnen und zu exportieren macht aus einer Fünf-Minuten-Aufgabe eine Stunde.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> behandelt das als Warteschlange statt als Reihe manueller Exporte. Ziehe den gesamten Ordner mit TIFFs in die Bild-Warteschlange, stelle JPG als Ausgabeformat ein, wähle eine Qualitätsstufe und wandle alles in einem Durchgang um.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch-Umwandlung von TIFF-Scans in JPG auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gescannte Seiten beim Umwandeln direkt skalieren</h3>
<p>Scanner-Ausgaben sind oft auf eine druckfähige DPI-Zahl eingestellt, die weit mehr Pixel liefert, als ein Bildschirm je braucht. Da Skalieren auf derselben Pipeline wie die Formatumwandlung liegt, kannst du gescannte Seiten im selben Batch-Durchlauf auf eine sinnvolle Breite bringen und so die Dateigröße zusätzlich zum Formatwechsel weiter reduzieren.</p>

<h3>Die TIFF-Originale behalten</h3>
<p>Wenn es sich um archivierte Scans oder Material aus einem Druckauftrag handelt, lösche die TIFFs nach der Umwandlung nicht — die verlustfreie Qualität von TIFF ist genau der Grund, warum sie so erstellt wurden. Behandle die JPGs als Verteilungskopien und die TIFFs als Archiv.</p>

<p>TIFF hat seine Berechtigung, ist aber kein Format zum Teilen. Einen ganzen gescannten Batch in einem Durchgang zu JPG umzuwandeln macht aus stundenlangen manuellen Exporten eine Sache von Minuten.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store laden</a></p>
`,
  },

  "image-resizer-mac-app": {
    slug: "image-resizer-mac-app",
    title: "Bilder skalieren auf dem Mac — Batch-Resize ohne Photoshop",
    description:
      "Eine Handvoll Fotos in Vorschau zu skalieren ist kein Problem. Zweihundert für eine Website oder einen Shop-Eintrag zu skalieren braucht ein echtes Batch-Tool, keine Photoshop-Aktionen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Jedes Foto, das am Ende auf einer Website, in einer E-Mail oder in einem Produktlisting landet, muss irgendwann an den vorgesehenen Platz angepasst werden. Machst du das einmal, reicht der Dialog Werkzeuge > Größe anpassen in Vorschau völlig aus. Machst du es zweihundertmal für einen Produktkatalog, brauchst du etwas, das nicht jede Datei einzeln öffnen muss.</p>

<h2>Der Umweg über Photoshop-Aktionen</h2>
<p>Die klassische Antwort auf Batch-Skalierung war bisher Photoshops Image Processor oder eine aufgezeichnete Aktion, ausgeführt über Automatisieren > Stapelverarbeitung. Es funktioniert, bedeutet aber, Photoshop besitzen oder abonnieren zu müssen — nur um "diese Bilder kleiner zu machen" —, plus den Aufwand, eine Aktion korrekt einzurichten und über einen ziemlich unhandlichen Dialog auf Eingabe- und Ausgabeordner zu zeigen.</p>

<h2>Ein Resizer, der einfach nur ein Resizer ist</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> hat Skalieren als eine Stufe seiner Bild-Pipeline integriert, ohne dass du dafür den Rest eines vollständigen Bildeditors brauchst. Ziehe einen Batch Fotos in die Bild-Warteschlange, lege die Zielabmessungen fest und starte die Umwandlung. Die Skalierung wird in einem Durchgang auf jede Datei im Batch angewendet.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch-Skalierung von Fotos auf dem Mac ohne Photoshop" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Skalieren, dann Zuschneiden, dann Wasserzeichen — der Reihe nach</h3>
<p>Da Skalieren eine Stufe in einer geordneten Pipeline neben Zuschneiden und Wasserzeichen ist, kannst du Vorgänge in einer festen Reihenfolge verketten: zuerst das Bild verkleinern, dann auf ein bestimmtes Seitenverhältnis zuschneiden, dann ein Logo in die Ecke stempeln. Jeder Vorgang arbeitet mit dem Ergebnis des vorherigen, sodass die Reihenfolge, die du festlegst, auch die ausgeführte Reihenfolge ist.</p>

<h3>Formatumwandlung im selben Durchgang</h3>
<p>Wenn deine Quellbilder HEIC oder PNG sind und das Ziel JPG oder WebP braucht, läuft die Formatumwandlung parallel zum Skalieren statt als separater Schritt. Ein Batch, ein Durchgang, fertig.</p>

<h3>Vorlagen für wiederkehrende Abmessungen</h3>
<p>Wenn du regelmäßig auf dieselbe Zielgröße skalierst — etwa 1200 px Breite für einen Blog oder ein festes Quadrat für ein Marktplatz-Listing —, speichere sie als Vorlage, damit du die Abmessungen bei künftigen Batches nicht erneut eingeben musst.</p>

<p>Bilder skalieren ist eine eng umrissene, mechanische Aufgabe. Sie braucht weder den Preis noch die Komplexität eines vollständigen Bildeditors.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store laden</a></p>
`,
  },

  "convert-audio-files-mac": {
    slug: "convert-audio-files-mac",
    title: "Audiodateien auf dem Mac umwandeln — WAV, FLAC, MP3, AAC",
    description:
      "Sprachmemos, gerippte Audiodateien und Podcast-Exporte liegen selten schon im Format vor, das du gerade brauchst. So wandelst du unter macOS zwischen WAV, FLAC, MP3 und AAC um.",
    date: "2026-09-06",
    readTime: "5 Min. Lesezeit",
    content: `
<p>Audioformate existieren aus unterschiedlichen Gründen — WAV und FLAC bewahren die volle Qualität für Bearbeitung und Archivierung, MP3 und AAC opfern etwas Klangtreue für kleinere Dateien, die überall abgespielt werden können —, und es kommt oft vor, dass eine Datei genau im falschen Format für das vorliegt, was du als Nächstes vorhast. Eine WAV-Aufnahme, die für eine Website zu MP3 werden muss. Ein FLAC-Rip, der AAC braucht, damit er überhaupt auf den Speicher deines Handys passt. Ein Sprachmemo, das für einen Podcast-Host, der nichts anderes akzeptiert, zu MP3 werden muss.</p>

<h2>Wo macOS an seine Grenzen stößt</h2>
<p>Apples eigene Tools kommen mit ihren bevorzugten Formaten gut zurecht, mit allem anderen eher umständlich. Musik kann über die eigenen Import-Einstellungen zwischen manchen Formaten umwandeln, ist aber auf deine Mediathek ausgelegt und kein allgemeiner Dateikonverter — mit WAV oder FLAC kommt es nicht sonderlich elegant zurecht. QuickTime Player exportiert Audio, aber nur nach M4A. Keine der integrierten Apple-Apps bietet einen unkomplizierten "beliebiges Format rein, beliebiges Format raus"-Audiokonverter, und der MP3-Export erfordert speziell einen lizenzierten Encoder, den Apple nicht mitliefert.</p>

<h2>Formatumwandlung ohne Terminal</h2>
<p>Der übliche Workaround ist, ffmpeg über Homebrew zu installieren und für jedes Formatpaar Befehle mit den passenden Codec-Flags auszuführen — funktioniert, setzt aber Vertrautheit mit dem Terminal voraus und dass man sich die je nach Format unterschiedliche Flag-Syntax merkt.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> packt das stattdessen in eine Drag-and-Drop-Warteschlange. Ziehe WAV-, FLAC-, AAC- oder andere Audiodateien in die Audio-Warteschlange, wähle dein Ausgabeformat und starte die Umwandlung. Der MP3-Export funktioniert dank eines mitgelieferten LAME-Encoders sofort — kein separater Installationsschritt nötig.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Umwandlung von Audiodateien zwischen WAV, FLAC, MP3 und AAC auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Batch-Umwandlung für ganze Aufnahmesessions</h3>
<p>Wenn du mehrere Takes aufgenommen oder eine Session als separate WAV-Stems exportiert hast, wandle den ganzen Ordner in einem Warteschlangen-Durchlauf um, statt Datei für Datei zu exportieren. Parallele Verarbeitung sorgt dafür, dass der Batch nicht proportional länger dauert, je mehr Dateien dazukommen.</p>

<h3>Das richtige Ausgabeformat wählen</h3>
<p>MP3 ist die sicherste Wahl für maximale Kompatibilität — jedes Gerät und jede Plattform spielt es ab. AAC klingt bei gleicher Bitrate in der Regel besser und ist Apples eigenes bevorzugtes Format, was wichtig ist, wenn das Ziel eine App im Apple-Ökosystem ist. Behalte WAV oder FLAC nur, wenn du verlustfreie Qualität für weitere Bearbeitung brauchst.</p>

<p>Audioumwandlung sollte keine Aufgabe sein, über die du lange nachdenken musst. Eine Warteschlange, die jedes gängige Format annimmt und in jedes andere exportiert, nimmt dir das Rätselraten ab.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store laden</a></p>
`,
  },

  "crop-images-batch-mac": {
    slug: "crop-images-batch-mac",
    title: "Bilder im Batch auf dem Mac zuschneiden",
    description:
      "Hundert Produktfotos einzeln auf dasselbe Seitenverhältnis zuzuschneiden ist Verschwendung eines ganzen Nachmittags. So schneidest du unter macOS stattdessen im Batch zu.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Ein einzelnes Bild zuzuschneiden ist in Vorschau eine Sache von dreißig Sekunden: öffnen, Auswahl ziehen, zuschneiden. Zweihundert Bilder auf exakt dasselbe Seitenverhältnis zuzuschneiden — für ein Marktplatz-Listing, ein Rasterlayout oder eine Reihe von Thumbnails, die bündig zueinander sitzen müssen — ist ein völlig anderes Problem, für das Vorschau schlicht nicht gebaut ist.</p>

<h2>Warum manuelles Zuschneiden nicht skaliert</h2>
<p>Jeder manuelle Zuschnitt in Vorschau verlangt, dass du die Auswahl für genau dieses Bild abschätzt oder manuell einträgst, da Vorschau kein Konzept von "diesen Batch auf ein festes Verhältnis zuschneiden" kennt. Selbst wenn du sorgfältig arbeitest, führen kleine Abweichungen bei zweihundert von Hand gemachten Zuschnitten dazu, dass Thumbnails im Raster später sichtbar nicht bündig sitzen.</p>

<h2>Zuschneiden mit festem Zielwert</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> behandelt Zuschneiden als Batch-Vorgang mit einem definierten Zielwert, nicht als manuelle Auswahl, die pro Datei wiederholt wird. Lege die Zuschnittparameter einmal fest, ziehe deinen gesamten Bilder-Batch in die Warteschlange, und jedes Bild wird in einem einzigen Durchgang auf dieselbe Weise zugeschnitten.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch-Zuschnitt von Produktfotos auf ein festes Seitenverhältnis auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Erst skalieren, dann zuschneiden — für vorhersehbare Ergebnisse</h3>
<p>Da Zuschneiden in einer geordneten Pipeline neben Skalieren liegt, kannst du Bilder zuerst auf eine einheitliche Basisgröße bringen und erst dann von dieser bekannten Größe aus zuschneiden — das liefert deutlich vorhersehbarere Ergebnisse, als Bilder zuzuschneiden, die in völlig unterschiedlichen Originalabmessungen ankommen.</p>

<h3>Typische Anwendungsfälle</h3>
<p>Quadratische Zuschnitte für Social-Media-Raster, feste Seitenverhältnisse für die Listing-Vorgaben eines Marktplatzes oder einheitliche Ränder, die aus einem Batch gescannter Bilder entfernt werden — das sind alles Varianten desselben Grundproblems: eine Zuschnittregel auf viele Dateien anwenden. Batch-Tooling macht daraus statt eines manuellen Nachmittags einen Warteschlangenjob.</p>

<h3>Kombination mit Wasserzeichen</h3>
<p>Wenn die zugeschnittenen Bilder vor der Veröffentlichung auch noch ein Logo oder Wasserzeichen brauchen, kann das als nächste Stufe in derselben Pipeline laufen, sodass zugeschnittenes und mit Wasserzeichen versehenes Ergebnis aus einem einzigen Warteschlangen-Durchlauf kommt, statt aus zwei separaten Durchgängen durch zwei verschiedene Tools.</p>

<p>Batch-Zuschnitt ist eine Funktion, nach der die wenigsten von sich aus suchen — bis sie ihr fünfzigstes Bild von Hand zugeschnitten und gemerkt haben, dass es einen besseren Weg geben muss.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store laden</a></p>
`,
  },
  "ffmpeg-alternative-mac-gui": {
    slug: "ffmpeg-alternative-mac-gui",
    title: "FFmpeg-Alternative für Mac mit grafischer Oberfläche",
    description:
      "FFmpeg kann so ziemlich alles mit Mediendateien anstellen, aber sich die Flag-Syntax für jeden Job zu merken, nervt irgendwann. Hier ist ein GUI-Ansatz für die Konvertierungen, die die meisten Leute tatsächlich brauchen.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>FFmpeg ist, ohne Übertreibung, eines der leistungsfähigsten Open-Source-Programme, die je geschrieben wurden. Es konvertiert zwischen nahezu jedem Video-, Audio- und Containerformat, das existiert, und wenn man die richtige Kombination aus Flags kennt, gibt es fast nichts, was es nicht kann. Genau darin liegt der Haken: Man muss diese richtige Kombination aus Flags jedes Mal aufs Neue kennen, für jede Art von Aufgabe, und ein einziger Tippfehler in einem Befehl führt entweder zu einer Fehlermeldung oder – schlimmer noch – zu einem stillschweigend falschen Ergebnis.</p>

<h2>Warum Leute nach einer Alternative suchen</h2>
<p>Um ffmpeg zu installieren, braucht man Homebrew, wofür man wiederum die Xcode Command Line Tools braucht, falls man sie nicht schon hat – ziemlich viel Aufwand für jemanden, der einfach nur eine Videodatei konvertieren möchte. Selbst nach der Installation bedeutet der Terminal-basierte Workflow: keine visuelle Warteschlange, kein Drag-and-Drop, kein direktes Gefühl für den Fortschritt außer einem scrollenden Log – für Skripting in Ordnung, für eine schnelle Konvertierung zwischendurch weniger.</p>

<h2>Eine grafische Oberfläche für die häufigsten 90 %</h2>
<p>Niemand behauptet, dass eine GUI-App den vollen Funktionsumfang von ffmpeg ersetzt – Filtergraphen, exotische Codecs und Skript-Pipelines gehören weiterhin auf die Kommandozeile. Aber die meisten Leute, die zu ffmpeg greifen, erledigen eine von wenigen wiederkehrenden Aufgaben: dieses Video in MP4 umwandeln, diese Bilder in JPG konvertieren, dieses Audio als MP3 exportieren. Genau dieses Terrain deckt <a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> mit einer nativen Drag-and-Drop-Oberfläche statt einem Terminal ab.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="GUI-Medienkonverter als Alternative zu ffmpeg auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Drei Warteschlangen statt drei Befehlsmuster</h3>
<p>Statt sich unterschiedliche Flag-Sets für Video-, Audio- und Bildkonvertierung zu merken, gibt es drei separate Warteschlangen – eine pro Medientyp –, bei denen die relevanten Optionen als Regler und Schalter dargestellt werden statt als Syntax.</p>

<h3>Hardwarebeschleunigung, ohne sie zu konfigurieren</h3>
<p>Damit ffmpeg auf Apple Silicon Hardware-Encoding nutzt, muss man das richtige Encoder-Flag angeben (zum Beispiel <code>-c:v h264_videotoolbox</code>). Eine native App erledigt das automatisch und nutzt Hardwarebeschleunigung standardmäßig, ohne dass man überhaupt wissen muss, dass es sie gibt.</p>

<h3>Wann das Terminal trotzdem die bessere Wahl ist</h3>
<p>Batch-Skripting über Tausende Dateien mit eigener Logik, ungewöhnliche Filterketten oder Codec-Optionen, die keine GUI anbietet – das ist weiterhin die Domäne von ffmpeg, und es sollte für genau diese Momente installiert bleiben. Ein GUI-Tool und ffmpeg sind keine Konkurrenten, sie decken unterschiedliche Teile derselben Aufgabe ab.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store holen</a></p>
`,
  },

  "convert-raw-to-jpg-mac": {
    slug: "convert-raw-to-jpg-mac",
    title: "RAW-Fotos auf dem Mac in JPG umwandeln",
    description:
      "RAW-Dateien bewahren jedes Detail, das der Kamerasensor erfasst, aber fast nichts außerhalb eines Bildbearbeitungsprogramms kann sie öffnen. So wandelst du eine ganze Serie auf macOS in JPG um.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>In RAW zu fotografieren gibt dir den größtmöglichen Bearbeitungsspielraum, den eine Kamera bieten kann – vollen Dynamikumfang, keine bereits in der Kamera getroffenen Kompressionsentscheidungen, volle Kontrolle in der Nachbearbeitung. Es bedeutet aber auch, dass jede Datei riesig und für fast alles außerhalb eines dedizierten Bildbearbeitungsprogramms unlesbar ist. Bevor ein RAW-Foto auf eine Website, in eine Kundengalerie oder in soziale Medien kann, muss es erst zu einem JPG werden.</p>

<h2>Wo RAW-Konvertierung normalerweise passiert</h2>
<p>Die meisten Fotografen wandeln RAW in JPG als Teil der Bearbeitung in Lightroom, Capture One oder Fotos um und exportieren dabei die fertig bearbeitete Version. Das ist der richtige Workflow, wenn jedes Bild eine individuelle Anpassung braucht. Manchmal willst du aber einfach nur eine Reihe von RAW-Dateien ohne Bearbeitung in JPGs verwandeln – ein schnelles Vorschau-Set für einen Kunden, ein Backup unbearbeiteter Aufnahmen oder Bilder, die bereits in der Kamera farblich korrigiert wurden und nur noch das Format wechseln müssen.</p>

<h2>Batch-Konvertierung, ohne einen Editor zu öffnen</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> erledigt eine unkomplizierte RAW-zu-JPG-Konvertierung als Batch-Job in der Bild-Warteschlange, ohne dass du jede Datei vorher in einer Bearbeitungs-App öffnen musst. Ordner reinziehen, JPG als Ausgabeformat einstellen, eine Qualitätsstufe wählen – und die ganze Serie in einem Durchgang konvertieren.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Umwandlung mehrerer RAW-Kamerafotos in JPG auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Wann dieser Ansatz sinnvoll ist</h3>
<p>Batch-RAW-Konvertierung ohne Bearbeitung ist die richtige Wahl für Bilder, die keine individuelle Korrektur brauchen – gut belichtete Aufnahmen, ein schneller Kontaktabzug, aus dem ein Kunde auswählen kann, oder Bilder, die du später selektiv bearbeiten wirst und die bis dahin nur ansehbar sein müssen. Wenn jedes Bild eine eigene Belichtungs- und Farbanpassung braucht, ist ein vollwertiger RAW-Editor weiterhin das richtige Werkzeug für diesen Schritt.</p>

<h3>Gleichzeitig die Größe anpassen</h3>
<p>RAW-Dateien erzeugen JPGs oft in voller Sensorauflösung, was für die meisten Zwecke weit mehr ist, als nötig. Da die Größenanpassung in derselben Pipeline sitzt wie die Formatkonvertierung, kannst du die Ausgabe direkt im selben Durchlauf auf eine webgerechte Größe verkleinern, statt das in einem separaten Schritt hinterher zu machen.</p>

<h3>Die RAW-Dateien behalten</h3>
<p>Behandle die JPGs als wegwerfbare Vorschauen oder Lieferkopien. Die RAW-Originale bleiben dein eigentliches Asset – lösch sie nicht, sobald du JPGs hast, denn die RAW-Datei ist es, die dir die Möglichkeit erhält, später neu zu bearbeiten.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store holen</a></p>
`,
  },

  "mac-sips-command-vs-gui-converter": {
    slug: "mac-sips-command-vs-gui-converter",
    title: "Der sips-Befehl auf dem Mac vs. GUI-Konverter — wann du was nutzt",
    description:
      "macOS bringt ein verstecktes Kommandozeilen-Tool für Bilder namens sips mit. Hier erfährst du, was es kann, wo es an Grenzen stößt und wann ein grafischer Batch-Konverter mehr Sinn ergibt.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Tief in macOS vergraben steckt <code>sips</code> – Scriptable Image Processing System –, ein Kommandozeilen-Tool, das seit Jahren Teil des Betriebssystems ist und von dem die meisten Mac-Nutzer noch nie gehört haben, geschweige denn es benutzt haben. Es kann Bilder direkt im Terminal skalieren, drehen und im Format konvertieren, ganz ohne Software von Drittanbietern. Für Skripting-Zwecke ist es ein wirklich nützliches Werkzeug. Für den alltäglichen Batch-Einsatz sorgt es für echten Frust.</p>

<h2>Was sips gut kann</h2>
<p>Ein einzelner Befehl wie <code>sips -s format jpeg input.png --out output.jpg</code> konvertiert eine Datei, ohne dass irgendetwas installiert werden muss – es ist bereits auf jedem Mac vorhanden. In eine Shell-Schleife verpackt, kann es einen ganzen Ordner verarbeiten: <code>for f in *.png; do sips -s format jpeg "$f" --out "\${f%.png}.jpg"; done</code>. Wenn du dich im Terminal wohlfühlst und schnell ein einmaliges Skript brauchst, erledigt sips die Aufgabe ohne jeglichen Einrichtungsaufwand.</p>

<h2>Wo es unangenehm wird</h2>
<p>Die Syntax ist wenig intuitiv und leicht falsch zu verwenden – Flags wie <code>-Z</code> für eine Größenanpassung mit erhaltenem Seitenverhältnis versus <code>--resampleWidth</code> für exakte Abmessungen merkt sich kaum jemand zwischen zwei Anwendungen. Es gibt keine visuelle Warteschlange, keine Fortschrittsanzeige außer der Terminalausgabe, und keine Möglichkeit, Größenanpassung, Zuschnitt und Wasserzeichen zu verketten, ohne ein aufwendigeres Skript zu schreiben. Und wenn du mit Shell-Schleifen nicht vertraut bist, wird die Konvertierung eines ganzen Ordners statt einer einzelnen Datei schnell zu einem kleinen Rechercheprojekt.</p>

<h2>Wann ein GUI-Tool die Nase vorn hat</h2>
<p>Wenn Batch-Konvertierung ein wiederkehrender Teil deines Workflows ist statt einer seltenen Skript-Aufgabe, nimmt dir ein grafisches Tool wie <a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> die Syntax komplett ab. Dateien in eine Warteschlange ziehen, Format, Größenanpassung, Zuschnitt und Wasserzeichen als visuelle Optionen einstellen – und konvertieren.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="GUI-Bild-Batch-Konverter im Vergleich zum Mac-Befehl sips" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Der ehrliche Vergleich</h3>
<p>sips ist kostenlos, vorinstalliert und perfekt geeignet, um es in einen größeren automatisierten Workflow einzubinden, falls du sowieso schon aus anderen Gründen Shell-Skripte schreibst. Ein GUI-Konverter ist für alltägliche Einzel- und Batch-Aufgaben schneller zu benutzen, besonders bei allem, was Größenanpassung, Zuschnitt oder Wasserzeichenketten betrifft, und du musst dir keine Befehlssyntax merken, die du erst Monate später wieder brauchst.</p>

<p>Keins von beiden ist grundsätzlich besser – es hängt davon ab, ob du eine automatisierte Pipeline aufbaust oder heute einfach nur ein paar Dateien konvertieren musst.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store holen</a></p>
`,
  },

  "reduce-image-file-size-mac": {
    slug: "reduce-image-file-size-mac",
    title: "Bilddateigröße auf dem Mac reduzieren, ohne Qualität zu verlieren",
    description:
      "Große Bilddateien verlangsamen Websites und belegen Speicherplatz, aber zu aggressive Kompression lässt Fotos schlecht aussehen. So verkleinerst du Dateien auf macOS, ohne die Qualität zu opfern.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>"Dateigröße reduzieren, ohne Qualität zu verlieren" klingt, als würde man etwas Unmögliches verlangen, und im strengsten Sinne ist es das auch – jede verlustbehaftete Kompression verwirft irgendwelche Daten. In der Praxis tragen die meisten Bilder aber weit mehr Daten mit sich, als jemand jemals wahrnehmen wird, was bedeutet, dass es einen breiten Bereich gibt, in dem die Dateigröße drastisch sinkt und der Unterschied für das Auge unsichtbar bleibt. Der Trick besteht darin, zu wissen, wo dieser Bereich liegt, und ihn über einen ganzen Batch hinweg konsistent zu treffen, statt es bei einem einzelnen Bild nach Gefühl zu machen.</p>

<h2>Die zwei Stellschrauben, die wirklich zählen</h2>
<p>Dateigröße hängt von zwei Dingen ab: den Pixelmaßen und der Kompressionsqualität. Die meisten Leute stürzen sich sofort darauf, die JPEG-Qualität herunterzudrehen, was die sichtbarere Stellschraube ist – übertreibt man es, bekommt man blockige Artefakte. Die weniger offensichtliche Stellschraube sind die Abmessungen: Ein Bild, das mit 1000 Pixel Breite angezeigt, aber mit 4000 Pixel Breite gespeichert wird, trägt die vierfache Pixelmenge mit sich, ohne bei der tatsächlichen Anzeigegröße irgendeinen visuellen Vorteil zu bringen.</p>

<h2>Erst verkleinern, dann leicht komprimieren</h2>
<p>Die Kombination, die die Dateigröße am stärksten reduziert und dabei visuell verlustfrei bleibt, ist: zuerst auf die tatsächliche Anzeigegröße verkleinern, dann moderate Kompression anwenden – statt die volle Auflösung zu behalten und zum Ausgleich aggressiv zu komprimieren. Ein überdimensioniertes Bild auf seine echten Zielabmessungen zu verkleinern, senkt die Dateigröße oft stärker als Kompression allein, und es erlaubt dir, obendrauf eine höhere, sicherere Qualitätsstufe zu verwenden.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> führt Größenanpassung und Qualitätskompression als Stufen in derselben Pipeline aus, sodass beides in einem Batch-Durchlauf passiert statt in zwei separaten Tools oder Schritten.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Reduzierung der Bilddateigröße bei erhaltener visueller Qualität auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Die Formatwahl spielt auch eine Rolle</h3>
<p>WebP erzeugt bei gleicher visueller Qualität in der Regel kleinere Dateien als JPG und wird inzwischen von Browsern und Plattformen breit unterstützt. Wenn das Ziel es akzeptiert, kann allein der Formatwechsel Dateien verkleinern, ohne Qualität oder Abmessungen überhaupt anzufassen.</p>

<h3>Vor dem großen Batch erst testen</h3>
<p>Lass zuerst eine Handvoll repräsentativer Bilder mit deinen gewählten Einstellungen laufen, betrachte sie in ihrer tatsächlichen Ausgabegröße, und wende die Einstellung erst dann auf den kompletten Batch an. Was auf einem Landschaftsfoto einwandfrei aussieht, kann bei einem Foto mit feinem Text oder scharfen Kanten Artefakte zeigen.</p>

<p>Kleinere Dateien ohne sichtbaren Qualitätsverlust sind kein Mythos – es ist einfach das Zusammenspiel von Größenanpassung und Kompression, statt dass Kompression allein die ganze Arbeit macht.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store holen</a></p>
`,
  },

  "convert-gif-to-mp4-mac": {
    slug: "convert-gif-to-mp4-mac",
    title: "GIF auf dem Mac in MP4 umwandeln",
    description:
      "GIFs sind für das, was sie eigentlich enthalten – kurzes Loop-Video –, unnötig aufgebläht. So wandelst du sie auf macOS in MP4 um, für kleinere Dateien und bessere Wiedergabe.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>GIF ist ein seltsamer Überlebender unter den Formaten – 1987 für einfache Grafiken entwickelt, ist es heute der De-facto-Standard für kurze Loop-Clips, die im Web geteilt werden, obwohl es für diese Aufgabe spektakulär ineffizient ist. Ein GIF kodiert jedes Einzelbild mit einer begrenzten 256-Farben-Palette und ohne echte Kompression zwischen den Bildern, was bedeutet, dass ein fünfsekündiger Clip, der als MP4 nur ein paar Hundert Kilobyte groß wäre, als GIF locker mehrere Dutzend Megabyte erreichen kann – bei zusätzlich sichtbar schlechterer Farbqualität.</p>

<h2>Warum man überhaupt von GIF weg konvertieren sollte</h2>
<p>Wenn ein GIF nur in eine Chat-Nachricht wandert, spielt seine Ineffizienz meistens keine Rolle. Aber sobald es auf eine Website, in einen Videoeditor oder irgendwo hin muss, wo Dateigröße oder Qualität zählen, ist MP4 für denselben Inhalt strikt besser: kleinere Datei, voller Farbraum, und es spielt als echtes Videoelement ab statt als animiertes Bild, was die meisten Plattformen effizienter verarbeiten.</p>

<h2>GIF in MP4 umwandeln</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> behandelt ein GIF in seiner Video-Warteschlange als Videoquelle – reinziehen, MP4 als Ausgabe einstellen, konvertieren. Das Farbbanding und die begrenzte Palette, die GIF der Quelle auferlegt, verschwinden dabei, da MP4 nicht auf 256 Farben beschränkt ist, auch wenn der ursprüngliche visuelle Inhalt (und jeder Qualitätsverlust, der beim Erstellen des GIFs bereits entstanden ist) unverändert bleibt.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Umwandlung eines animierten GIFs in ein MP4-Video auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Einen ganzen Ordner voller GIFs im Batch umwandeln</h3>
<p>Wenn du einen Ordner voller GIFs gesammelt oder erzeugt hast – Bildschirmaufnahmen, die als GIF gespeichert wurden, Memes, UI-Demos –, senkt das Umwandeln aller in einem einzigen Warteschlangen-Durchlauf den gesamten Speicherbedarf erheblich, da MP4-Encoding für denselben visuellen Inhalt so viel effizienter ist.</p>

<h3>Wo MP4 immer noch einen GIF-Fallback braucht</h3>
<p>Manche älteren Plattformen und E-Mail-Clients spielen MP4 nicht automatisch ab, so wie sie GIFs inline anzeigen – prüf also das Ziel, bevor du davon ausgehst, dass MP4 überall ein direkter Ersatz ist. Für moderne Websites, Videoeditoren und die meisten Social-Media-Plattformen ist MP4 die bessere Wahl ohne Einschränkungen.</p>

<p>Eine GIF-Bibliothek in MP4 umzuwandeln, verkleinert den Gesamtspeicherbedarf in der Regel deutlich – das lohnt sich, bevor die Dateigröße zu einem echten Problem wird.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store holen</a></p>
`,
  },

  "batch-watermark-photos-mac": {
    slug: "batch-watermark-photos-mac",
    title: "Fotos auf dem Mac im Batch mit Wasserzeichen versehen",
    description:
      "Ein Logo einzeln auf jedes Foto zu stempeln, funktioniert über eine Handvoll Bilder hinaus nicht mehr. So versiehst du einen ganzen Batch konsistent mit einem Wasserzeichen auf macOS.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>Ein Foto vor der öffentlichen Veröffentlichung mit einem Wasserzeichen zu versehen – das Logo eines Fotografen, ein Urheberrechtshinweis, eine Marke auf Produktbildern – ist ein vernünftiger Wunsch für jedes veröffentlichte Bild. Das manuell in den Markup-Werkzeugen von Vorschau zu erledigen, indem man ein Logo-Bild auf jedem Foto von Hand positioniert, ist bei einem Foto vertretbar und bei hundert eine Qual, und manuelle Platzierung sorgt dafür, dass das Wasserzeichen auf jedem Bild an einer leicht anderen Stelle landet.</p>

<h2>Das Problem beim manuellen Wasserzeichnen</h2>
<p>Vorschau erlaubt es technisch, mit Markup ein Bild über ein anderes zu legen, aber es gibt keinen Batch-Modus, keine Möglichkeit, Position und Größe des Wasserzeichens über eine Reihe von Bildern hinweg zu fixieren, und keine Automatisierung. Jedes Foto wird zu einer kleinen manuellen Bearbeitungssitzung, und Konsistenz über einen großen Batch hinweg lässt sich per Augenmaß kaum aufrechterhalten.</p>

<h2>Konsistente Platzierung über den ganzen Batch</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> enthält Wasserzeichen als eine Stufe in seiner geordneten Bild-Pipeline. Wasserzeichenbild, Position und Größe einmal festlegen, den Foto-Batch in die Warteschlange ziehen, und jedes Foto erhält dasselbe Wasserzeichen an derselben Stelle – ohne manuelles Neupositionieren pro Datei.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Konsistentes Batch-Wasserzeichen für eine Reihe von Fotos auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Erst verkleinern für einheitliche Wasserzeichengröße</h3>
<p>Wenn deine Quellfotos in den Abmessungen variieren, kann ein für ein Foto passend dimensioniertes Wasserzeichen auf einem größeren Bild winzig und auf einem kleineren überdimensioniert wirken. Wenn die Größenanpassung zuerst in der Pipeline läuft, sodass jedes Foto vor der Wasserzeichen-Stufe dieselben Abmessungen erreicht, bleibt die relative Größe des Wasserzeichens über den gesamten Batch konsistent.</p>

<h3>Formatkonvertierung gleich mit erledigen</h3>
<p>Falls die mit Wasserzeichen versehenen Fotos auch einen Formatwechsel brauchen – zum Beispiel HEIC zu JPG für breitere Kompatibilität –, passiert das im selben Durchgang statt als separater Schritt, sodass ein einziger Warteschlangen-Lauf verkleinerte, mit Wasserzeichen versehene, formatkonvertierte Ausgabe liefert, die veröffentlichungsbereit ist.</p>

<h3>Als Preset speichern</h3>
<p>Wenn du bei jedem Foto-Batch, den du veröffentlichst, ein Wasserzeichen setzt, speichere die Wasserzeicheneinstellungen als Preset, damit zukünftige Shootings die Einrichtung überspringen und direkt zur Konvertierung übergehen.</p>

<p>Ein konsistentes Wasserzeichen über eine ganze Galerie hinweg wirkt beabsichtigt und professionell. Eins, das auf jedem dritten Foto leicht daneben sitzt, wirkt wie ein nachträglicher Einfall – Batch-Tools sind der Unterschied zwischen beidem.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store holen</a></p>
`,
  },

  "convert-avif-to-png-mac": {
    slug: "convert-avif-to-png-mac",
    title: "AVIF auf dem Mac in PNG umwandeln",
    description:
      "AVIF ist ein großartiges Webformat, aber schlecht geeignet für Bearbeitung oder Apps, die ältere Bildtypen erwarten. So wandelst du es auf macOS zurück in PNG um.",
    date: "2026-09-06",
    readTime: "4 Min. Lesezeit",
    content: `
<p>AVIF ist als Format wirklich beeindruckend – es komprimiert bei gleicher visueller Qualität weit effizienter als JPEG oder PNG, und genau deshalb liefern immer mehr Websites ihre Bilder in diesem Format aus. Aber genau diese Modernität wird zum Problem, sobald man mit einer AVIF-Datei außerhalb eines Browsers etwas anfangen muss: Ältere Software, manche Bildbearbeitungsprogramme und jede Menge Tools, die "ein Bild" erwarten, meinen damit immer noch JPEG oder PNG und wissen mit einer AVIF-Datei schlicht nichts anzufangen.</p>

<h2>Warum man am Ende doch zurückkonvertieren muss</h2>
<p>Rechtsklick und "Bild speichern" auf einer modernen Website speichert zunehmend eine AVIF-Datei, weil die Seite genau das inzwischen tatsächlich ausliefert. Versucht man dann, diese Datei in einem älteren Design-Tool zu öffnen, sie irgendwo anzuhängen, wo Dateierweiterungen streng geprüft werden, oder sie einem Kollegen zu geben, dessen Software noch keine AVIF-Unterstützung hat, lässt sie sich einfach nicht öffnen. Eine Umwandlung in PNG – ein Format, das alles ab 2003 versteht – löst das Kompatibilitätsproblem sofort.</p>

<h2>AVIF-Dateien auf macOS umwandeln</h2>
<p>macOS hat in aktuellen Versionen native AVIF-Anzeige eingeführt, sodass Vorschau eine AVIF-Datei meist öffnen und darstellen kann, und von dort aus lässt sie sich Datei für Datei nach PNG exportieren. Für ein einzelnes Bild reicht das aus. Für einen ganzen Ordner davon – etwa einen Batch von Bildern, die von einer Seite heruntergeladen wurden, die alles als AVIF ausliefert – erspart ein warteschlangenbasierter Ansatz die Wiederholung.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> wandelt AVIF als Batch-Vorgang in PNG (oder jedes andere unterstützte Format) um. AVIF-Dateien in die Bild-Warteschlange ziehen, PNG als Ausgabe wählen, und den ganzen Satz in einem Durchgang konvertieren.</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch-Umwandlung von AVIF-Bildern in PNG auf dem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>PNG vs. JPG als Zielformat</h3>
<p>Wähle PNG, wenn das Bild Transparenz behalten muss oder du ein verlustfreies Zwischenformat für die weitere Bearbeitung willst. Wähle stattdessen JPG, wenn das Bild ein Foto ohne Transparenz ist und du lieber eine kleinere Datei hättest – AVIF zu JPG läuft durch dieselbe Pipeline, nur mit einem anderen ausgewählten Ausgabeformat.</p>

<h3>Warum das mit der Zeit häufiger vorkommt</h3>
<p>Je mehr Teile des Webs aus Performancegründen auf AVIF und WebP setzen, desto häufiger wird "modernes Format zurück in etwas universell Kompatibles umwandeln" zu einem alltäglichen statt einem seltenen Randfall – besonders für alle, die Referenzbilder oder Assets von aktiven Websites beziehen.</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith im Mac App Store holen</a></p>
`,
  },
};
