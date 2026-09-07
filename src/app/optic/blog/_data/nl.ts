import type { ArticleSet } from "./index";

export const nlArticles: ArticleSet = {
  "copy-text-from-image-mac": {
    slug: "copy-text-from-image-mac",
    title: "Hoe je tekst uit een afbeelding kopieert op de Mac",
    description:
      "Je hebt tekst die vastzit in een afbeelding — een foto van een whiteboard, een gescand document, een meme — en geen manier om die te selecteren. Zo haal je hem er direct uit.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Iemand stuurt je een foto van een whiteboard vol vergadernotities. Of je maakt een screenshot van een recept uit een Instagram-verhaal. De tekst staat gewoon op je scherm, maar je kunt hem niet selecteren, niet kopiëren, nergens bruikbaars naartoe plakken. Je enige optie is elk woord handmatig overtypen — en hopen dat je onderweg geen typefouten maakt.</p>

<h2>Waarom je tekst in een afbeelding niet zomaar kunt selecteren</h2>
<p>Afbeeldingen bestaan uit pixels, geen tekens. Je Mac ziet een JPEG of PNG als een raster van gekleurde punten, niet als woorden en zinnen. Preview laat je afbeeldingen annoteren, maar haalt er geen tekst uit. Quick Look toont je de afbeelding, maar biedt geen kopieerfunctie voor de woorden erin. Zelfs als je de afbeelding in Notities of Pages sleept, wordt alleen de afbeelding ingesloten — de tekst blijft achter pixels opgesloten.</p>
<p>De Live Text-functie van Apple werkt in sommige gevallen, maar vereist compatibele apps, specifieke afbeeldingsformaten en dekt niet elk scenario. Als de tekst zich in een browsertab, een designmockup of een videoframe bevindt, kan Live Text er vaak niet bij.</p>

<h2>Sleep om te selecteren, kopieer direct met Optic</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> zit in je menubalk en laat je een selectierechthoek tekenen over elk deel van je scherm. Het leest de tekens binnen die rechthoek direct — of de bron nu een afbeeldingsbestand, een webpagina, een PDF of iets anders zichtbaars op je scherm is.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic menu bar OCR tool for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Foto's en screenshots</h3>
<p>Open de afbeelding in een willekeurige app — Preview, Foto's, een browser, Slack — en sleep een selectie over de tekst. Optic herkent de tekens en kopieert ze naar je klembord. Werkt met handgeschreven notities, gedrukte documenten, borden op foto's en tekst over grafische elementen heen.</p>

<h3>Designbestanden en mockups</h3>
<p>Bekijk je een Figma-export of een platte designcomp? Sleep over de tekstelementen om de copy te extraheren zonder de designer apart te hoeven vragen deze te sturen. Handig voor QA, vertaalworkflows en contentaudits.</p>

<h3>Vastleggingsgeschiedenis</h3>
<p>Elke vastlegging wordt opgeslagen in de menubalk, zodat je terug kunt gaan en tekst kunt ophalen die je eerder hebt geëxtraheerd, zonder opnieuw te scannen. Geen noodzaak om in een kladdocument te plakken enkel om het vast te houden.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "screen-ocr-mac": {
    slug: "screen-ocr-mac",
    title: "Screen OCR voor Mac — selecteer en kopieer elke tekst",
    description:
      "Tekst op je scherm die je niet kunt selecteren of kopiëren — in afbeeldingen, video's, dialoogvensters of vergrendelde interfaces. Een OCR-tool op schermniveau lost dat op.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je staart naar tekst op je Mac-scherm die weigert geselecteerd te worden. Misschien zit hij ingebakken in een video-tutorial, weergegeven binnen een canvas-element op een webpagina, of vergrendeld achter een niet-interactieve UI. De woorden staan er duidelijk leesbaar, maar je cursor behandelt ze alsof ze niet bestaan.</p>

<h2>De kloof tussen zien en selecteren</h2>
<p>macOS biedt tekstselectie in native apps en standaard webcontent, maar het moderne scherm zit vol uitzonderingen. Tekst weergegeven als afbeelding in webapps, ondertitels ingebrand in videospelers, code getoond in op afbeeldingen gebaseerde documentatie, terminaluitvoer in een remote-desktopsessie — geen van deze reageert op een normale klik-en-sleep. Je eindigt met het overtypen van wat al voor je neus staat, wat traag is en foutgevoelig.</p>
<p>Traditionele OCR-tools vereisen dat je eerst een bestand opslaat, het vervolgens importeert en dan verwerkt. Die workflow breekt op het moment dat je tekstbron een levend scherm is — een videogesprek, een streamingdashboard of een app zonder exportoptie.</p>

<h2>OCR op schermniveau met Optic</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> voert OCR rechtstreeks op je scherm uit. Het zit in de menubalk, en wanneer je het activeert, teken je een rechthoek over elke zichtbare tekst. De tekens worden direct herkend en op je klembord geplaatst — geen bestand opslaan, geen importeren, geen wachten.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic performing screen OCR on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Elke bron, één gebaar</h3>
<p>Het maakt niet uit in welke app de tekst leeft. Een Zoom-gesprek met een gedeelde slide, een YouTube-tutorial die terminalcommando's toont, een Retool-dashboard met niet-selecteerbare labels — als je het kunt zien, kan Optic het lezen. Eén sneltoets, één sleep, en de tekst is van jou.</p>

<h3>Ingebouwde geschiedenis</h3>
<p>Elke OCR-vastlegging wordt gelogd in het dropdownmenu van de menubalk. Scroll terug door eerdere vastleggingen om tekst op te halen die je minuten of uren geleden hebt gepakt, zonder opnieuw te scannen.</p>

<h3>Tekst-naar-spraak</h3>
<p>Wil je de vastgelegde tekst horen in plaats van lezen? Optic bevat tekst-naar-spraak voor elke vastlegging, handig om geëxtraheerde content te proeflezen of voor toegankelijkheid.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "extract-text-from-screenshot-mac": {
    slug: "extract-text-from-screenshot-mac",
    title: "Hoe je tekst uit een screenshot haalt op de Mac",
    description:
      "Je hebt een screenshot gemaakt om tekst te bewaren, maar nu heb je die tekst nodig als echte tekens die je kunt bewerken en doorzoeken. Overtypen ondermijnt het hele doel.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>De screenshot zou een snelle oplossing zijn. Je maakte een snelle opname van een belangrijke e-mail, een verzendbevestiging, een reeks instructies — in de veronderstelling dat je de informatie had bewaard. Maar nu moet je dat trackingnummer in een formulier plakken, of een zin uit die instructies opzoeken, en de screenshot is gewoon een platte afbeelding. De tekst erin zou net zo goed een tekening kunnen zijn.</p>

<h2>Screenshots leggen pixels vast, geen tekst</h2>
<p>Als je Cmd+Shift+4 indrukt op je Mac, krijg je een pixelperfecte afbeelding van wat er op het scherm stond. Maar de tekst in die afbeelding verliest alle structuur. Je kunt geen losse woorden selecteren, geen alinea kopiëren, zelfs niet naar een zin zoeken. De screenshot is een visuele registratie, geen tekstuele.</p>
<p>Je zou de screenshot in Preview kunnen openen en Apples markeertools proberen, maar die zijn bedoeld voor annotatie — tekenen over de afbeelding — niet voor het extraheren van de tekst erin. Sommige gebruikers proberen screenshots in Google Docs te plakken in de hoop op automatische OCR, maar dat werkt alleen voor geüploade afbeeldingen in Drive, niet voor geplakte screenshots, en de resultaten zijn inconsistent.</p>

<h2>Haal tekst rechtstreeks van het scherm</h2>
<p>In plaats van eerst een screenshot te maken en vervolgens te worstelen om tekst uit de afbeelding te halen, laat <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> je de screenshot helemaal overslaan. Activeer het vanuit de menubalk, sleep een selectie over de tekst die je nodig hebt, en de herkende tekens gaan direct naar je klembord.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Heb je de screenshot al?</h3>
<p>Als je de screenshot al hebt gemaakt, open hem dan in een willekeurige viewer — Preview, Quick Look, zelfs een browser — en sleep de selectie van Optic over de tekst in de weergegeven afbeelding. Het leest tekens uit alles wat zichtbaar is op je scherm, inclusief afbeeldingen die je al open hebt staan.</p>

<h3>Vastleggingsgeschiedenis vervangt screenshotverzameling</h3>
<p>Veel mensen maken screenshots specifiek om tekst te onthouden — bevestigingsnummers, adressen, foutcodes. De vastleggingsgeschiedenis van Optic bewaart elke tekstextractie in de menubalk, wat je een doorzoekbaar logboek van vastgelegde tekst geeft. Geen gescroll meer door een map met screenshots om één string te vinden.</p>

<h3>Bulkextractie</h3>
<p>Heb je tekst nodig uit meerdere delen van een lange screenshot? Maak achtereenvolgens meerdere snelle selecties. Elke selectie wordt opgeslagen in je geschiedenis, zodat je alles kunt pakken wat je nodig hebt en de stukken kunt plakken waar ze horen.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "copy-text-non-selectable-pdf-mac": {
    slug: "copy-text-non-selectable-pdf-mac",
    title: "Hoe je tekst kopieert uit een niet-selecteerbare PDF op de Mac",
    description:
      "Sommige PDF's zien eruit als normale documenten maar laten je geen enkel woord selecteren. De tekst is visueel aanwezig, maar zit opgesloten als een platte afbeeldingslaag.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je opent een PDF in de verwachting een alinea te kunnen kopiëren, maar als je klikt en sleept, wordt er niets gemarkeerd. De cursor glijdt over de pagina alsof de tekst er niet is. Je probeert Cmd+A om alles te selecteren — niets. Het document ziet er perfect leesbaar uit, maar het is in feite een afbeelding van tekst, geen echte tekst.</p>

<h2>Waarom sommige PDF's geen tekstselectie toestaan</h2>
<p>Dit gebeurt met gescande documenten, overheidsformulieren, oudere academische papers en PDF's geëxporteerd vanuit bepaalde designtools. De pagina's zijn gemaakt van afbeeldingen — gescand vanaf papier of platgeslagen tijdens export — waardoor de PDF rasterlagen bevat in plaats van tekstlagen. Preview, Adobe Reader en elke andere PDF-viewer zien hetzelfde: pixels gerangschikt om op letters te lijken, zonder onderliggende tekengegevens om te selecteren.</p>
<p>Sommige PDF's hebben ook kopieerbeveiliging ingeschakeld. De maker heeft een rechtenvlag ingesteld die tekstselectie voorkomt, ook al bestaat de tekstlaag wel. Standaard PDF-lezers respecteren deze vlag, waardoor je niets kunt kopiëren.</p>

<h2>Lees de tekst rechtstreeks van het scherm</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> omzeilt beide problemen. Omdat het tekens leest van je scherm in plaats van uit de interne structuur van het bestand, maakt het niet uit of de PDF een tekstlaag heeft, een gescande afbeelding is, of kopieerbeperkingen heeft. Als je de tekst op je scherm kunt zien, kan Optic hem lezen.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text from a non-selectable PDF on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gescande documenten</h3>
<p>Open de gescande PDF in Preview, zoom naar een comfortabele leesgrootte, activeer Optic en sleep over de tekst die je nodig hebt. Het herkent gedrukte tekens uit de scan en kopieert ze als bewerkbare tekst. Werkt met oude getypte documenten, gescande bonnetjes en gefotografeerde pagina's.</p>

<h3>Beveiligde PDF's</h3>
<p>Voor PDF's waar de tekstlaag bestaat maar selectie is vergrendeld, leest Optic de weergegeven output op het scherm. Je krijgt dezelfde tekst zonder te vechten met rechtenvlaggen of te zoeken naar tools om PDF's te ontgrendelen.</p>

<h3>Extractie over meerdere pagina's</h3>
<p>Scroll door het document en maak selecties op elke pagina. Elke vastlegging wordt opgeslagen in de menubalkgeschiedenis van Optic, zodat je een lang gescand document pagina voor pagina kunt doorwerken en alle tekst kunt verzamelen die je nodig hebt.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "qr-code-reader-mac": {
    slug: "qr-code-reader-mac",
    title: "QR-codelezer voor Mac — scan direct vanaf het scherm",
    description:
      "Er verschijnt een QR-code op je Mac-scherm — in een e-mail, een document, een webpagina — en je enige scanner is de telefoon in je zak. Er is een snellere manier.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Iemand deelt een QR-code in een Slack-bericht. Of een PDF bevat er een die naar een bron linkt. Of een webpagina toont een QR-code voor een app-download. De code staat gewoon op je Mac-scherm, maar om hem te scannen, moet je zogenaamd je telefoon pakken, de camera openen, hem op je monitor richten, wachten tot hij scherpstelt, en dan op de link tikken — die vervolgens op je telefoon opent in plaats van op de computer waar je hem eigenlijk nodig hebt.</p>

<h2>Telefoons scannen de echte wereld, geen schermen</h2>
<p>QR-codescannen is ontworpen voor telefooncamera's gericht op fysieke objecten. Een telefooncamera gebruiken om je eigen computerscherm te scannen is een omslachtige workaround: je krijgt te maken met schermreflectie, de camera heeft moeite met scherpstellen op korte afstand, en de resulterende link opent op het verkeerde apparaat. Als je de URL op je Mac wilt hebben, moet je die vervolgens AirDroppen of naar jezelf sturen — allemaal om een link te openen die al op je Mac stond.</p>
<p>macOS heeft geen ingebouwde QR-codelezer voor content op het scherm. Je kunt niet met de rechtermuisknop op een QR-code in Safari klikken en "lees code" kiezen. Preview decodeert er geen uit een geopende afbeelding. Er is simpelweg geen native pad van een QR-code op het scherm naar gedecodeerde content op dezelfde machine.</p>

<h2>Scan QR-codes rechtstreeks vanaf je scherm</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> bevat een QR-codelezer die werkt op alles wat zichtbaar is op je scherm. Activeer het vanuit de menubalk, sleep een selectie rond de QR-code, en de gedecodeerde inhoud — URL, tekst, contactgegevens, wifi-inloggegevens — is direct beschikbaar op je Mac.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic scanning a QR code from the Mac screen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>QR-codes in documenten en e-mails</h3>
<p>Evenementtickets, instapkaarten, betalingsbevestigingen en installatiegidsen bevatten vaak QR-codes. Sleep een selectie over de code in je e-mailclient of PDF-viewer en krijg de gedecodeerde inhoud zonder van apparaat te wisselen.</p>

<h3>Gebruik voor developers en IT</h3>
<p>Instelpagina's voor tweestapsverificatie tonen QR-codes voor TOTP-apps. API-documentatie codeert soms endpoints of sleutels in QR-formaat. Optic laat je deze rechtstreeks decoderen, waardoor je workflow op één scherm blijft.</p>

<h3>Alles blijft in de geschiedenis</h3>
<p>Gedecodeerde QR-inhoud wordt samen met je tekstvastleggingen opgeslagen in de menubalkgeschiedenis. Heb je dat wifi-wachtwoord nodig van een QR-code die je gisteren scande? Scroll terug door je vastleggingen in plaats van opnieuw te scannen.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "ocr-text-from-video-mac": {
    slug: "ocr-text-from-video-mac",
    title: "Hoe je tekst OCR'ed uit een video of stream op de Mac",
    description:
      "Een tutorial toont een terminalcommando, een stream flitst een URL, een college toont een formule — en je kunt niet snel genoeg pauzeren om alles over te typen.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je kijkt naar een codeer-tutorial en de instructeur plakt een lang terminalcommando op het scherm. Of een livestream toont kort een kortingscode. Of een opgenomen college toont een complexe vergelijking. De tekst is een paar seconden duidelijk zichtbaar, maar er is geen manier om hem te selecteren vanuit de videospeler. Je pauzeert, tuurt en begint te typen — in de hoop elk teken te vangen voordat de content verdergaat.</p>

<h2>Videospelers laten geen tekst zien om mee te werken</h2>
<p>Of je nu kijkt in Safari, Chrome, VLC, QuickTime of een streamingapp, het videoframe is een weergegeven afbeelding. Er is geen tekstlaag om mee te interacteren. Ondertitels zijn in sommige spelers wel selecteerbaar, maar tekst op het scherm die deel uitmaakt van de video-inhoud — code, URL's, titels, data — zit permanent ingebakken in de pixelstroom.</p>
<p>Pauzeren helpt, maar je moet nog steeds handmatig transcriberen wat je ziet. Bij lange commando's, URL's met queryparameters of technische content met speciale tekens is handmatige transcriptie traag en onbetrouwbaar. Eén verkeerd teken in een terminalcommando of URL en het faalt stilzwijgend.</p>

<h2>Leg tekst vast uit elk videoframe</h2>
<p>Met <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> pauzeer je de video (of niet — het werkt ook op bewegende content), activeer je de tool vanuit je menubalk en sleep je een selectie over de tekst die zichtbaar is in het videoframe. De tekens worden herkend en direct naar je klembord gekopieerd.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text from a video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Codeer-tutorials</h3>
<p>Terminalcommando's, configuratiesnippets, bestandspaden en pakketnamen getoond in video-tutorials — pak ze met één selectie in plaats van te pauzeren en over te typen. Vooral waardevol bij lange installatiecommando's of meerregelige configuraties.</p>

<h3>Livestreams en webinars</h3>
<p>Presentatoren flitsen vaak URL's, promocodes of contactgegevens slechts een paar seconden op het scherm. Optic legt vast wat er zichtbaar is op het moment dat je selecteert, zodat je geen bliksemsnel typwerk nodig hebt om vluchtige informatie te pakken.</p>

<h3>Colleges en presentaties</h3>
<p>Opgenomen colleges tonen formules, citaten en referenties die aanzienlijke moeite zouden kosten om over te typen. Sleep over het relevante gedeelte en plak de geëxtraheerde tekst direct in je notities.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "copy-error-message-from-dialog-mac": {
    slug: "copy-error-message-from-dialog-mac",
    title: "Hoe je foutmeldingen kopieert uit dialoogvensters op de Mac",
    description:
      "Er verschijnt een foutdialoog met een technische melding en geen kopieerknop. Je blijft achter met het overtypen van onbegrijpelijke foutcodes enkel om naar een oplossing te zoeken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een app crasht en er verschijnt een dialoogvenster met een cryptische foutmelding: een code, een bestandspad, misschien een stack trace-referentie. Je moet die exacte string googelen om een oplossing te vinden. Maar het dialoogvenster heeft twee knoppen — OK en Annuleren — en geen manier om de tekst te selecteren of te kopiëren. Dus pak je je telefoon, maak je een foto van het scherm en tuur je ernaar terwijl je de fout overtypt in een zoekbalk. Of je begint het karakter voor karakter op een plaknotitie te krabbelen.</p>

<h2>macOS-dialoogvensters laten zelden tekst kopiëren</h2>
<p>De meeste foutdialogen, waarschuwingsvensters en systeemprompts op macOS geven hun tekst weer als statische labels. Je kunt er niet in klikken, geen gedeelte markeren, niet met de rechtermuisknop een kopieeroptie oproepen. Dit geldt voor native macOS-waarschuwingen, dialogen van externe apps, installatiefoutvensters en crashrapporten. Hoe technischer en belangrijker de fouttekst, hoe groter de kans dat hij vastzit in een niet-selecteerbaar label.</p>
<p>Dit is bijzonder frustrerend voor IT-support en probleemoplossing. Je hebt de exacte fouttekst nodig om naar oplossingen te zoeken, een bugreport in te dienen of met supportteams te communiceren. Een foutcode parafraseren — of één teken verkeerd typen — leidt je naar irrelevante resultaten.</p>

<h2>Selecteer de fouttekst rechtstreeks uit het dialoogvenster</h2>
<p>Wanneer het foutdialoogvenster verschijnt, laat het open staan en activeer <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vanuit de menubalk. Sleep een selectie over de fouttekst in het dialoogvenster. Optic leest de tekens en kopieert ze naar je klembord — exacte string, exacte interpunctie, exact hoofdlettergebruik.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying an error message from a dialog on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Direct naar oplossingen zoeken</h3>
<p>Plak de exacte foutstring in Google, Stack Overflow of een Apple-supportforum. Exacte zoekopdrachten leveren veel betrouwbaarder relevante resultaten op dan geparafraseerde beschrijvingen van wat de fout zei.</p>

<h3>Bugrapporten en supporttickets</h3>
<p>Neem de precieze fouttekst op in bugrapporten of supportmails. Ontwikkelaars en supportmedewerkers kunnen problemen veel sneller identificeren met de daadwerkelijke foutstring in plaats van de interpretatie van een gebruiker ervan.</p>

<h3>Terugkerende fouten</h3>
<p>Optic slaat elke vastlegging op in zijn menubalkgeschiedenis. Als dezelfde fout blijft terugkomen, heb je een tijdgestempelde registratie van elk voorval, zonder elk dialoogvenster te hoeven screenshotten.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "mac-live-text-limitations": {
    slug: "mac-live-text-limitations",
    title: "Beperkingen van Mac Live Text — wat het niet kan",
    description:
      "Apples Live Text werkt op een paar plekken maar faalt stilzwijgend op veel andere. Als je erop vertrouwt voor schermOCR, loop je snel tegen muren aan.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Apple introduceerde Live Text als een systeembrede functie die tekst in afbeeldingen herkent. In theorie klinkt het alsof het het probleem "kan geen tekst in afbeeldingen selecteren" oplost. In de praktijk werkt het in een beperkt aantal scenario's en doet het stilzwijgend niets in veel situaties waarin je het echt nodig hebt.</p>

<h2>Waar Live Text tekortschiet</h2>
<p>Live Text werkt binnen Foto's, Preview, Safari (bij sommige afbeeldingen) en Quick Look. Daar houdt het bereik ongeveer op. Hier zijn de veelvoorkomende situaties waarin het niet kan helpen:</p>
<p><strong>Videoframes.</strong> Live Text werkt niet op video-inhoud. Als tekst verschijnt in een YouTube-video, een Zoom-schermdeling, een QuickTime-opname of een willekeurige streamingspeler, herkent Live Text die niet. Je bent terug bij handmatige transcriptie.</p>
<p><strong>App-interfaces en dialoogvensters.</strong> Tekst weergegeven als labels in app-UI's, foutdialogen, menu-items en aangepaste bedieningselementen is onzichtbaar voor Live Text. Het activeert alleen bij ingesloten afbeeldingen, niet bij willekeurige scherminhoud.</p>
<p><strong>Webapps met canvas- of SVG-tekst.</strong> Veel moderne webapps geven tekst weer met behulp van canvas-elementen of SVG — dashboards, datatools, designapps. Live Text komt niet in deze weergavecontexten.</p>
<p><strong>Niet-selecteerbare PDF's.</strong> Hoewel Preview soms tekst in op afbeeldingen gebaseerde PDF's kan herkennen, zijn de resultaten inconsistent en afhankelijk van scankwaliteit, paginacomplexiteit en PDF-structuur. Veel gescande documenten laten helemaal geen Live Text-interactie zien.</p>
<p><strong>Kopieerbeveiligde content.</strong> Live Text respecteert DRM en kopieerbeperkingen. Als een app of document tekstselectie heeft uitgeschakeld, volgt Live Text dat voorbeeld.</p>
<p><strong>Geen vastleggingsgeschiedenis.</strong> Live Text heeft geen geheugen. Elke herkenning is vluchtig. Als je de afbeelding sluit of wegnavigeert, is de herkende tekst weg. Er is geen logboek of geschiedenis van wat je hebt geëxtraheerd.</p>

<h2>OCR op schermniveau zonder deze beperkingen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> werkt op schermniveau in plaats van op bestands- of afbeeldingsniveau. Het leest tekens uit alles wat zichtbaar is op je scherm — elke app, elke bron, elke context. Videoframes, dialoogvensters, canvassen van webapps, vergrendelde PDF's, remote-desktopsessies — als je tekst kunt zien, kan Optic hem lezen.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Live Text limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Geschiedenis en tekst-naar-spraak</h3>
<p>In tegenstelling tot Live Text bewaart Optic elke vastlegging in een permanente geschiedenis, toegankelijk vanuit de menubalk. Het bevat ook tekst-naar-spraak, waarmee je vastgelegde tekst hardop kunt laten voorlezen — handig voor proeflezen of toegankelijkheid.</p>

<h3>QR-codescannen</h3>
<p>Live Text kan QR-codes lezen in sommige afbeeldingscontexten, maar niet vanuit video, schermdelingen of willekeurige app-vensters. Optic scant QR-codes vanaf overal op je scherm en decodeert ze direct.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "textsniper-alternative-mac": {
    slug: "textsniper-alternative-mac",
    title: "TextSniper-alternatief voor Mac",
    description:
      "Op zoek naar een schermOCR-tool die verder gaat dan basale tekstvastlegging — met QR-scannen, vastleggingsgeschiedenis en ingebouwde tekst-naar-spraak.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>TextSniper maakte het idee van OCR op schermniveau op Mac populair: teken een rechthoek, pak de tekst. Het is een eenvoudig concept dat een echt probleem oplost. Maar als je het hebt gebruikt en merkte dat je meer wilde — een geschiedenis van eerdere vastleggingen, QR-codeondersteuning, of de mogelijkheid om geëxtraheerde tekst hardop te laten voorlezen — heb je waarschijnlijk naar alternatieven gezocht.</p>

<h2>Wat ontbreekt in basale schermOCR</h2>
<p>De meeste schermOCR-tools doen de kernvastlegging goed: activeer een sneltoets, sleep een gebied, krijg tekst op je klembord. Maar de workflow rondom die ene actie is net zo belangrijk.</p>
<p><strong>Geen vastleggingsgeschiedenis.</strong> Je extraheert tekst, plakt hem ergens, en de vastlegging is weg. Tien minuten later heb je die tekst weer nodig, en moet je opnieuw scannen. Als je vergat direct te plakken, overschrijft het volgende dat je kopieert het al.</p>
<p><strong>Geen QR-codeherkenning.</strong> QR-codes op je scherm — in e-mails, documenten, webpagina's — vereisen een aparte tool of de camera van je telefoon. Een schermvastleggingstool die QR-codes kan decoderen bespaart je het jongleren met apparaten.</p>
<p><strong>Geen tekst-naar-spraak.</strong> Soms moet je tekst horen in plaats van lezen — voor proeflezen, toegankelijkheid of multitasken. Basale OCR-tools stoppen bij klembordoutput.</p>

<h2>Optic: schermOCR met de volledige workflow</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> voert dezelfde kern-OCR-vastlegging uit — sleep om elke tekst op het scherm vanaf elke bron te selecteren — en voegt de functies toe die schermOCR dagelijks echt bruikbaar maken.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic as a TextSniper alternative for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vastleggingsgeschiedenis in de menubalk</h3>
<p>Elke tekstextractie en QR-scan wordt opgeslagen en is toegankelijk vanuit de menubalk. Scroll terug door eerdere vastleggingen, kopieer iets van een uur geleden opnieuw, of bekijk een reeks extracties uit een onderzoekssessie. Geen tekst meer kwijtraken doordat je iets anders hebt gekopieerd.</p>

<h3>Ingebouwde QR-codescanner</h3>
<p>Teken een selectie rond elke QR-code die zichtbaar is op je scherm en Optic decodeert hem. URL's, wifi-inloggegevens, contactkaarten, gewone tekst — wat de code ook bevat, verschijnt onmiddellijk, zonder telefoon nodig.</p>

<h3>Tekst-naar-spraak</h3>
<p>Elke vastgelegde tekst kan hardop worden voorgelezen. Handig om OCR-fouten met je oren op te vangen, voor toegankelijkheidsbehoeften, of om naar geëxtraheerde content te luisteren terwijl je aan iets anders werkt.</p>

<h3>Native in de menubalk</h3>
<p>Optic zit in de menubalk en blijft uit je weg tot je het nodig hebt. Geen dockicoon, geen hoofdvenster om te beheren — gewoon een lichtgewicht tool die altijd één klik of sneltoets verwijderd is.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "copy-code-from-screenshot-mac": {
    slug: "copy-code-from-screenshot-mac",
    title: "Hoe je code kopieert uit een screenshot op de Mac",
    description:
      "Een tutorial, een tweet of documentatie toont code als afbeelding. Overtypen introduceert bugs. Zo extraheer je het als selecteerbare tekst.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een developer deelt een codefragment als screenshot op Twitter. Een tutorialblog geeft zijn voorbeelden weer als afbeeldingen in plaats van codeblokken. Documentatie voor een intern tool bestaat alleen als screenshots van een terminal. De code is perfect leesbaar, maar zit opgesloten in een afbeelding — en code overtypen vanaf een afbeelding is een van de meest betrouwbare manieren om onzichtbare bugs te introduceren.</p>

<h2>Waarom code overtypen vanaf afbeeldingen faalt</h2>
<p>Code is meedogenloos als het om precisie gaat. Een ontbrekende puntkomma, een kleine letter L die verward wordt met het cijfer 1, een accolade versus een haakje, een liggend streepje in plaats van een koppelteken — elk van deze breekt je code stilzwijgend. Als je overtypt vanaf een screenshot, doe je karakter-voor-karakter visuele parsering op een tempo dat precies deze fouten uitlokt.</p>
<p>Het probleem is wijdverspreid. Sociale media zetten code om naar afbeeldingen voor een mooiere weergave. Oudere documentatie is nooit gemigreerd vanaf screenshots. Slack- en Teams-berichten met code worden vaak geschermafbeeld en doorgestuurd. Interne wiki's stapelen jarenlang geplakte terminal-screenshots op die niemand heeft getranscribeerd.</p>

<h2>Extraheer code rechtstreeks van het scherm</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> leest de codetekens rechtstreeks van je scherm. Open de screenshot of de pagina met de code-afbeelding, activeer Optic vanuit de menubalk, en sleep een selectie over de code. De geëxtraheerde tekst gaat naar je klembord, klaar om in je editor of terminal te plakken.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Terminalcommando's</h3>
<p>Lange installatiecommando's, Docker run-statements, curl-verzoeken met meerdere flags — deze worden vaak als screenshot gedeeld. Eén sleepbeweging met Optic extraheert het hele commando, met behoud van speciale tekens, flags en paden die makkelijk verkeerd getypt worden.</p>

<h3>Codefragmenten van sociale media</h3>
<p>Twitter-, LinkedIn- en Instagram-posts geven code vaak weer als afbeeldingen met tools zoals Carbon of Ray.so. Optic extraheert de code uit deze gestileerde screenshots net zo gemakkelijk als uit gewone terminaluitvoer.</p>

<h3>Extractie over meerdere regels</h3>
<p>Selecteer een codeblok dat meerdere regels beslaat en Optic behoudt de regelstructuur. Plak het in je editor en de code behoudt zijn vorm — geen handmatige herformattering nodig. Elke vastlegging wordt opgeslagen in je menubalkgeschiedenis, zodat je meerdere snippets uit een tutorial kunt extraheren en er een voor een kunt plakken.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "read-text-aloud-from-screen-mac": {
    slug: "read-text-aloud-from-screen-mac",
    title: "Lees elke scherminhoud hardop voor op de Mac",
    description:
      "Je wilt tekst op je scherm hardop laten voorlezen — uit een afbeelding, een vergrendeld document, een videoframe — maar de ingebouwde spraakfunctie van je Mac werkt alleen op selecteerbare tekst.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>macOS heeft een ingebouwde functie "Selectie uitspreken": markeer tekst, klik met de rechtermuisknop en kies "Spraak." Het werkt goed — wanneer de tekst selecteerbaar is. Maar zodra je tekst hardop wilt laten voorlezen uit een afbeelding, een gescande PDF, een videoframe of een niet-interactief UI-element, heeft de spraakfunctie niets om mee te werken. Je kunt niet uitspreken wat je niet kunt selecteren.</p>

<h2>De kloof tussen scherminhoud en spraak</h2>
<p>Veel situaties vragen erom scherptekst hardop te laten voorlezen. Proeflezen vangt fouten op die je ogen overslaan. Multitasken profiteert van audio — je kunt naar geëxtraheerde content luisteren terwijl je aan iets anders werkt. Toegankelijkheidsbehoeften strekken zich uit tot content die van nature niet selecteerbaar is. Taalstudenten profiteren van het horen van onbekende tekst uitgesproken.</p>
<p>Maar de ingebouwde spraaktools werken alleen op standaard tekstselecties. Als de tekst in een afbeelding staat, weergegeven als grafisch element in een webapp, getoond in een video, of vergrendeld in een gescand document, biedt macOS geen pad van "zichtbaar op scherm" naar "hardop voorgelezen." Je zou de tekst eerst handmatig moeten transcriberen, wat het hele doel ondermijnt.</p>

<h2>Selecteer elke tekst, hoor hem uitgesproken</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> combineert OCR op schermniveau met tekst-naar-spraak. Activeer het vanuit de menubalk, sleep over elke zichtbare tekst — ongeacht de bron — en je kunt de vastgelegde tekst hardop laten voorlezen. Geen handmatige transcriptie, geen afhankelijkheid van van nature selecteerbare tekst.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text aloud from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>OCR-resultaten proeflezen</h3>
<p>Nadat je tekst hebt geëxtraheerd uit een scan of afbeelding, helpt het om hem hardop te horen om OCR-fouten op te vangen die correct lijken op het scherm. Een verkeerd gelezen letter of een verhaspeld woord wordt duidelijk zodra het wordt uitgesproken, maar kan bij visuele controle onopgemerkt blijven.</p>

<h3>Toegankelijkheid</h3>
<p>Voor gebruikers die op schermlezers vertrouwen, vormt content die vastzit in afbeeldingen en niet-selecteerbare formaten een barrière. Optic overbrugt die kloof door elke zichtbare tekst om te zetten in zowel klembordtekst als gesproken audio, waardoor voorheen ontoegankelijke content beschikbaar wordt.</p>

<h3>Multitasken en taal leren</h3>
<p>Extraheer een passage uit een document of webpagina en luister ernaar terwijl je kookt, forenst of sport. Taalstudenten kunnen onbekende woorden correct uitgesproken horen door tekst in een vreemde taal te selecteren en de spraakoutput te gebruiken.</p>

<h3>Vastleggingsgeschiedenis met spraak</h3>
<p>Omdat elke vastlegging wordt opgeslagen in de menubalkgeschiedenis, kun je terugkeren naar een eerdere extractie en die opnieuw hardop laten voorlezen — handig om notities te herzien of content van eerder in je sessie opnieuw te bekijken.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "ocr-receipts-mac": {
    slug: "ocr-receipts-mac",
    title: "OCR voor bonnetjes op Mac — haal tekst uit foto's van bonnetjes",
    description:
      "Je hebt een bonnetje gefotografeerd voor je onkostendeclaratie, maar nu heb je de leverancierscnaam, het totaal en de datum nodig als kopieerbare tekst — geen foto waar je van moet overtypen.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je maakt een foto van een lunchbonnetje omdat je het later nodig hebt voor onkosten. Of je ontvangt een gescand bonnetje per e-mail. De informatie die je nodig hebt — leveranciersnaam, datum, gespecificeerde totalen, belastingbedragen — staat allemaal in de afbeelding, maar wanneer het tijd is om het onkostenformulier in te vullen, tuur je naar een foto en typ je handmatig elke regel over. Eén verwisseld cijfer in het totaal en je declaratie wordt aangemerkt.</p>

<h2>Waarom bonnetjesfoto's zo lastig zijn om mee te werken</h2>
<p>Bonnetjes behoren tot de slechtste kandidaten voor handmatige transcriptie. Ze gebruiken kleine lettertypes, inconsistente spatiëring en afkortingen. Thermisch papier vervaagt snel, waardoor oudere bonnetjes nog moeilijker te lezen zijn. En elk onkostensysteem wil gestructureerde data — leverancier, datum, bedrag — geen JPEG-bijlage.</p>
<p>macOS heeft geen ingebouwde tool die tekst uit een bonnetjesfoto haalt en op je klembord zet. Preview toont je de afbeelding. Foto's organiseert hem. Geen van beide laat je de gedrukte tekst selecteren en kopiëren. Externe onkostenscanners bestaan, maar het zijn zware apps ontworpen voor enterprise-workflows, niet om snel een totaal uit een foto te pakken.</p>

<h2>Sleep over het bonnetje, krijg de tekst</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> leest tekst rechtstreeks van je scherm. Open de bonnetjesfoto in een willekeurige viewer — Preview, Quick Look, een browser, zelfs je e-mailclient — activeer Optic vanuit de menubalk en sleep een selectie over het deel van het bonnetje dat je nodig hebt. De herkende tekens komen op je klembord terecht, klaar om te plakken in een spreadsheet of onkostenformulier.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a receipt photo on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Onkostendeclaraties</h3>
<p>Selecteer de leveranciersnaam en het totaal van een bonnetjesafbeelding en plak ze direct in je onkostentool. Geen overtypen, geen verwisselingsfouten. Pak losse regelitems of het hele bonnetje — elke vastlegging wordt bewaard in je menubalkgeschiedenis ter referentie.</p>

<h3>Belastingen en boekhouding</h3>
<p>Freelancers en kleine ondernemers verzamelen het hele jaar door bonnetjesfoto's. Als het belastingseizoen aanbreekt, open elke bonnetjesafbeelding en extraheer de relevante cijfers met één sleepbeweging. Bouw je aftrekspreadsheet in minuten in plaats van uren handmatig invoeren.</p>

<h3>Vergoedingsaanvragen</h3>
<p>Moet je exacte bedragen opnemen in een vergoedingsmail? Extraheer het totaal, de belasting en de datum uit de bonnetjesfoto en plak ze in je bericht. De precieze cijfers van het bonnetje wegen zwaarder dan geschatte getallen die je uit je hoofd typt.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "copy-text-from-zoom-screenshare-mac": {
    slug: "copy-text-from-zoom-screenshare-mac",
    title: "Hoe je tekst kopieert uit een Zoom-schermdeling op de Mac",
    description:
      "Een collega deelt zijn scherm in Zoom met een URL, een configuratie of data — maar jij kunt alleen toekijken, niet selecteren of kopiëren van de tekst die je ziet.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je zit in een Zoom-vergadering en een collega deelt zijn scherm. Ze lopen door een dashboard, tonen een configuratiebestand, of demonstreren een app. Op hun gedeelde scherm zie je duidelijk URL's, inloggegevens, terminalcommando's en data — maar de Zoom-viewer geeft je nul mogelijkheid om ermee te interacteren. Je kunt toekijken, maar niet selecteren. Je vraagt ze de link in de chat te plakken, ze vergeten het, en de vergadering gaat verder.</p>

<h2>Schermdelingen zijn met opzet alleen-lezen</h2>
<p>Wanneer iemand zijn scherm deelt via Zoom, Google Meet of Microsoft Teams, zie je een videofeed van hun scherm. Je cursor interacteert niet met hun content. Je kunt niet in hun teksteditor klikken, hun terminaluitvoer niet markeren, niet met de rechtermuisknop op hun browsertabs klikken. Alles wat op het gedeelde scherm wordt weergegeven, is vanuit het perspectief van je Mac een bewegend beeld.</p>
<p>Dit is bijzonder pijnlijk in technische vergaderingen. Een DevOps-engineer toont een Kubernetes-configuratie. Een PM loopt door analytics. Een designer presenteert copy op mockups. De tekst scrolt voorbij, en je opties zijn: vragen om langzamer te gaan en te dicteren, koortsachtig typen wat je kunt zien, of hopen dat de opname het duidelijk genoeg vastlegt om later terug te kijken.</p>

<h2>Leg tekst vast uit elk gedeeld scherm</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> behandelt het Zoom-venster als elk ander deel van je scherm. Activeer het vanuit de menubalk, sleep een selectie over de tekst die zichtbaar is in het gedeelde scherm, en de herkende tekens worden naar je klembord gekopieerd. Het werkt of de presentator nu een browser, een terminal, een spreadsheet of een diapresentatie toont.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic capturing text from a Zoom screen share on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Technische vergaderingen</h3>
<p>Pak terminalcommando's, bestandspaden, API-endpoints en configuratiewaarden op het moment dat ze op het gedeelde scherm verschijnen. Geen gevraag aan de presentator om te pauzeren en in de chat te plakken. Geen overtypen uit je geheugen na afloop van de vergadering.</p>

<h3>Data en dashboards</h3>
<p>Wanneer een gedeeld scherm statistieken, KPI's of tabelgegevens toont, selecteer de cijfers direct. Plak ze in je eigen notities of spreadsheet met de exacte waarden die werden weergegeven.</p>

<h3>Vastleggingsgeschiedenis als vergadernotities</h3>
<p>Elke extractie wordt opgeslagen in de menubalkgeschiedenis van Optic. Maak meerdere vastleggingen gedurende de vergadering en je hebt een tijdgestempeld logboek van elk stuk tekst dat je hebt gepakt — functionerend als precieze vergadernotities voor de content die er het meest toe deed.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "mac-screenshot-to-text": {
    slug: "mac-screenshot-to-text",
    title: "Mac screenshot naar tekst — haal woorden uit elke vastlegging",
    description:
      "Je maakt voortdurend screenshots, maar die vastleggingen omzetten in bewerkbare, doorzoekbare tekst vereist nog steeds dat je alles wat je ziet overtypt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Screenshots zijn de snelste manier om vast te leggen wat er op het scherm staat, maar ze zijn de traagste manier om de informatie later te gebruiken. Je maakt Cmd+Shift+4 van een bevestigingsnummer, een recept, een set wifi-inloggegevens of een adres — en op het moment dat je die tekst nodig hebt in een formulier, een e-mail of een document, staar je naar een afbeelding en typ je karakter voor karakter over.</p>

<h2>De kloof tussen screenshot en tekst</h2>
<p>macOS maakt screenshots maken moeiteloos. De sneltoetsen zijn ingebouwd, de vastleggingen zijn van hoge kwaliteit en worden automatisch opgeslagen op je bureaublad of klembord. Maar macOS biedt geen ingebouwde manier om de zichtbare tekst van een screenshot om te zetten in echte bewerkbare tekst. De screenshot-workflow eindigt bij de afbeelding. Alles daarna — extraheren, kopiëren, plakken van de woorden erin — is volledig handmatig.</p>
<p>Gebruikers die screenshots maken als manier om "tekst te bewaren" verzamelen snel een bureaublad vol afbeeldingen die ze niet kunnen doorzoeken, niet kunnen indexeren en niet gemakkelijk kunnen raadplegen. Dat ene bevestigingsnummer vinden betekent scrollen door tientallen vastleggingen en elke daarvan visueel doorzoeken.</p>

<h2>Sla de screenshot over, leg de tekst direct vast</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vervangt de workflow van screenshot-en-dan-overtypen door één enkele actie. In plaats van een afbeelding van de tekst vast te leggen, activeer je Optic vanuit de menubalk en sleep je een selectie over de woorden die je nodig hebt. De OCR-engine leest de tekens en kopieert ze als bewerkbare tekst naar je klembord — geen afbeelding opgeslagen, geen overtypen nodig.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic converting screen content to text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Heb je de screenshot al gemaakt?</h3>
<p>Geen probleem. Open je bestaande screenshot in een willekeurige viewer en sleep de selectie van Optic over de tekst erin. Het leest tekens uit elke afbeelding die op je scherm wordt weergegeven, dus je bestaande screenshotbibliotheek is niet verspild — hij wordt gewoon toegankelijk.</p>

<h3>Doorzoekbare vastleggingsgeschiedenis</h3>
<p>Elke tekstextractie wordt gelogd in de menubalkgeschiedenis van Optic. In plaats van een map met niet-doorzoekbare afbeeldingen, krijg je een doorbladerbare lijst met vastgelegde tekststrings. Heb je dat bevestigingsnummer van twee dagen geleden nodig? Scroll door je geschiedenis in plaats van te zoeken tussen screenshotbestanden.</p>

<h3>Sneller dan Cmd+Shift+4</h3>
<p>Het gebaar is bijna identiek — activeren, een rechthoek slepen — maar de output is direct bruikbare tekst in plaats van een platte afbeelding. Voor iedereen die vooral screenshots maakt om tekst te bewaren, elimineert dit de hele omzettingsstap.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "copy-serial-number-from-image-mac": {
    slug: "copy-serial-number-from-image-mac",
    title: "Hoe je een serienummer kopieert uit een afbeelding op de Mac",
    description:
      "Een serienummer staat in een foto of scan — lang, alfanumeriek, onmogelijk om zonder fouten over te typen. Je hebt het nodig als kopieerbare tekst, geen pixels.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je moet een product registreren, een garantieclaim indienen of contact opnemen met support — en ze willen het serienummer. Het probleem: het serienummer staat op een sticker die je hebt gefotografeerd, in een PDF-factuur, op een screenshot van een instellingenpagina, of in een e-mailbevestiging met een ingesloten afbeelding. Het is een lange reeks letters en cijfers — soms 15 of 20 tekens — zonder patroon om je te helpen het te onthouden. Overtypen betekent een bijna zekere kans dat je minstens één teken verkeerd krijgt.</p>

<h2>Serienummers zijn gemaakt om handmatige invoer te dwarsbomen</h2>
<p>Serienummers combineren hoofdletters, kleine letters en cijfers in reeksen die met opzet uniek zijn ontworpen, niet memorabel. Tekens zoals O en 0, l en 1, S en 5 zien er in de meeste lettertypes bijna identiek uit. Eén verkeerd teken betekent dat het serienummer niet valideert, en je blijft achter met de vraag welk van de 20 tekens je verkeerd hebt gelezen.</p>
<p>macOS biedt hier geen snelkoppeling. Als het serienummer in een foto of gescand document staat, kun je het niet selecteren. Als het in een afbeelding in een e-mail staat, kun je het niet markeren. Je zit vast aan zorgvuldig overtypen en hopen, of karakter voor karakter inzoomen en dubbelchecken.</p>

<h2>Sleep over het serienummer, kopieer het perfect</h2>
<p>Open de afbeelding, scan of screenshot met het serienummer in een willekeurige app, activeer dan <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vanuit de menubalk. Sleep een strakke selectie rond alleen de serienummerstring. De OCR-engine leest elk teken en kopieert de exacte tekst naar je klembord. Plak het in het registratieformulier, de supportchat, of je administratie.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying a serial number from an image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Productregistratie</h3>
<p>Nieuwe hardware vereist vaak het invoeren van een serienummer tijdens installatie of garantieregistratie. Fotografeer het label, open het op je Mac en extraheer de string met één sleepbeweging. Geen turen, geen gokken tussen O en 0.</p>

<h3>Support- en garantieclaims</h3>
<p>Supportmedewerkers vragen om serienummers om je apparaat of product op te zoeken. Met de exacte string op je klembord kun je hem direct in de supportchat of e-mail plakken, wat heen-en-weer over verkeerd getypte identificatienummers voorkomt.</p>

<h3>Asset tracking</h3>
<p>IT-afdelingen fotograferen asset tags en serielabels op bedrijfshardware. Optic zet die foto's om in kopieerbare tekst, waardoor het eenvoudig wordt om inventarisspreadsheets in te vullen zonder handmatige transcriptie van honderden serienummers.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "ocr-handwriting-mac": {
    slug: "ocr-handwriting-mac",
    title: "OCR voor handschrift op Mac — zet geschreven notities om naar tekst",
    description:
      "Je hebt handgeschreven notities gefotografeerd — van een whiteboard, een notitieboek of een plaknotitie — en hebt de woorden nodig als bewerkbare digitale tekst.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>De vergadering is twintig minuten geleden afgelopen en je maakte een foto van het whiteboard voordat iemand het uitveegde. Of je maakt al een tijdje handgeschreven notities in een notitieboek en moet die nu naar je team e-mailen. De woorden staan in de foto, duidelijk genoeg geschreven om te lezen, maar er is geen manier om handgeschreven tekst uit een afbeelding te selecteren en in een document te plakken. Dus ga je zitten en begin je je eigen handschrift woord voor woord te transcriberen.</p>

<h2>Handschrift leeft buiten de digitale tekstwereld</h2>
<p>macOS behandelt afbeeldingen van handschrift hetzelfde als elke andere afbeelding — als pixels zonder tekstlaag. Preview kan je whiteboardfoto weergeven maar haalt er geen woorden uit. De Live Text-functie van Apple kan soms netjes handschrift herkennen in Foto's, maar de prestaties variëren enorm met de handschriftstijl, afbeeldingskwaliteit en hoek. Rommelig maar leesbaar handschrift levert vaak helemaal geen resultaten op.</p>
<p>Specifieke handschrift-OCR-apps bestaan, maar de meeste zijn iOS-gericht of vereisen het uploaden van afbeeldingen naar clouddiensten. Als je op je Mac wilt blijven en wilt werken met een foto die al op je scherm staat, zijn de opties beperkt.</p>

<h2>Selecteer handgeschreven tekst uit elke foto</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> voert OCR uit op alles wat zichtbaar is op je scherm, inclusief handgeschreven tekst in foto's. Open de foto van je notities in een willekeurige viewer, activeer Optic vanuit de menubalk en sleep een selectie over het handgeschreven gedeelte. De herkende tekst wordt naar je klembord gekopieerd om te plakken in e-mails, documenten of notitie-apps.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing handwriting from a photo on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Whiteboardvastleggingen</h3>
<p>Vergaderwhiteboards zijn van nature tijdelijk — iemand heeft de ruimte altijd weer nodig. Fotografeer het bord, open de foto op je Mac en extraheer de geschreven inhoud met Optic. Zet brainstormsessies, diagrammen met labels en to-dolijsten om in digitale tekst voordat het whiteboard wordt uitgeveegd.</p>

<h3>Notitieboekpagina's</h3>
<p>Veel mensen geven nog steeds de voorkeur aan pen en papier voor eerste gedachten, maar hebben digitale tekst nodig om te delen en te doorzoeken. Fotografeer je notitieboekpagina en extraheer belangrijke gedeelten. Geen noodzaak om een hele pagina te transcriberen — selecteer alleen de alinea's of opsommingstekens die je nodig hebt.</p>

<h3>Plaknotities en labels</h3>
<p>Handgeschreven plaknotities op een monitor, labels op opslagdozen, aantekeningen op gedrukte documenten — fotografeer ze en extraheer de tekst. Vooral nuttig wanneer het handschrift van iemand anders betrokken is en je liever OCR laat proberen dan het karakter voor karakter te ontcijferen.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "mac-text-recognition-menu-bar": {
    slug: "mac-text-recognition-menu-bar",
    title: "Tekstherkenning vanuit de Mac-menubalk",
    description:
      "Je hebt snelle tekstherkenning nodig zonder een volledige app te openen, bestanden te importeren of je workflow te onderbreken — gewoon een snelle greep uit wat er op het scherm staat.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je bent middenin iets bezig — een e-mail schrijven, coderen, onderzoek doen — en je merkt tekst op je scherm op die je moet vastleggen. Misschien staat het in een afbeelding, een videoframe of een niet-selecteerbaar UI-element. Het laatste wat je wilt, is je flow onderbreken door een aparte OCR-applicatie te openen, een bestand te importeren, te wachten op verwerking en dan het resultaat te kopiëren. Je hebt de tekst nu nodig, zonder wat je aan het doen bent te verlaten.</p>

<h2>Traditionele OCR verstoort je workflow</h2>
<p>De meeste OCR-tools zijn losstaande applicaties met eigen vensters, bestandsverkenners en verwerkingspijplijnen. Om ze te gebruiken, sla je de content op of maak je een screenshot, schakel je naar de OCR-app, importeer je het bestand, wacht je op herkenning, kopieer je het resultaat, schakel je terug naar je oorspronkelijke app en plak je het. Dat zijn zes contextwisselingen voor een taak die één seconde zou moeten duren.</p>
<p>Zelfs lichtere tools vereisen vaak hun eigen venster of paneel. Ze zitten in het Dock, vragen schermruimte en trekken je aandacht weg van de taak. Voor snelle, frequente tekstvastleggingen gedurende een werkdag loopt deze overhead snel op.</p>

<h2>Eén klik, één sleepbeweging, terug aan het werk</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> zit in de Mac-menubalk — de minst opdringerige locatie mogelijk. Klik op het menubalkpictogram of druk op een sneltoets, sleep een rechthoek over de tekst die je nodig hebt, en de herkende tekens staan op je klembord. De hele interactie duurt minder dan twee seconden, en je verlaat nooit de app waarin je werkt.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text recognition from the Mac menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Altijd beschikbaar, nooit in de weg</h3>
<p>Geen dockicoon, geen hoofdvenster, geen app om te beheren. Optic zit rustig in de menubalk tot je het nodig hebt. Het start bij het inloggen en blijft klaar zonder je aandacht of schermruimte in beslag te nemen.</p>

<h3>Toegang via sneltoets</h3>
<p>Voor nog snellere activering gebruik je de sneltoets om een vastlegging te starten zonder de menubalk aan te raken. Je handen blijven op het toetsenbord, je sleept de selectie, en de tekst wordt vastgelegd — allemaal zonder één enkele klik op het menubalkpictogram.</p>

<h3>Geschiedenis zonder apart venster</h3>
<p>Elke vastlegging wordt gelogd in het dropdownmenu van de menubalk. Klik op het Optic-pictogram om je recente vastleggingen te zien, een eerdere extractie opnieuw te kopiëren of te bekijken wat je tijdens de sessie hebt gepakt. De geschiedenis leeft waar de tool leeft — in de menubalk, uit je weg tot je hem wilt.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "copy-text-from-youtube-video-mac": {
    slug: "copy-text-from-youtube-video-mac",
    title: "Hoe je tekst kopieert uit een YouTube-video op de Mac",
    description:
      "Een YouTube-video toont een commando, een link of een stuk informatie dat je nodig hebt — maar de videospeler laat je geen tekst selecteren uit het videoframe.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je volgt een YouTube-tutorial en de instructeur typt een lang terminalcommando. Of een videoreview toont kort een productvergelijkingstabel. Of een technische walkthrough toont instellingen die je moet nabootsen. De tekst is perfect zichtbaar op het scherm, maar de videospeler van YouTube geeft alleen frames weer — er is niets om op te klikken, te markeren of te kopiëren. Je pauzeert de video en begint te typen wat je ziet, in de hoop geen flag te missen of een pad verkeerd te spellen.</p>

<h2>YouTube-tekst zit ingebakken in de video</h2>
<p>Alles wat je in een YouTube-videoframe ziet, is een gedecodeerde afbeelding. Of het nu een dia is, een terminalsessie, een code-editor of grafische elementen op het scherm, de tekst maakt deel uit van de pixeldata. YouTube biedt geen mechanisme om tekst uit de video-inhoud zelf te extraheren. Ondertitels en beschrijvingen zijn apart — ze dekken wat er gezegd wordt, niet wat er op het scherm wordt getoond.</p>
<p>Sommige makers plaatsen commando's en links in de videobeschrijving of vastgezette reacties, maar velen doen dat niet. En voor content zoals vergelijkingstabellen, instellingenpagina's of data die in de video wordt getoond, is er meestal helemaal geen tekstequivalent beschikbaar.</p>

<h2>Pak tekst rechtstreeks uit het videoframe</h2>
<p>Pauzeer de video op het juiste moment (of niet — het werkt ook op afspelende content), activeer <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vanuit de menubalk en sleep een selectie over de tekst die zichtbaar is in de YouTube-speler. Optic leest de tekens uit het weergegeven frame en kopieert ze naar je klembord. Werkt in elke browser — Safari, Chrome, Firefox, Arc.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying text from a YouTube video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tutorialcommando's en code</h3>
<p>Programmeer-tutorials tonen voortdurend terminalcommando's, codesnippets en configuratievoorbeelden. Eén sleepbeweging extraheert de exacte tekst — met behoud van speciale tekens, flags en syntax die makkelijk handmatig verkeerd getypt worden.</p>

<h3>Data en tabellen op het scherm</h3>
<p>Productreviews, benchmarkvergelijkingen en educatieve content tonen vaak tabellen of lijsten op het scherm. Selecteer het datagebied en plak de geëxtraheerde tekst in je notities of een spreadsheet. Geen gepauzeer en rij-voor-rij transcriberen meer.</p>

<h3>URL's en referenties</h3>
<p>Wanneer een video kort een URL, een boektitel of een bronnaam toont, leg het vast voordat het verdwijnt. De vastleggingsgeschiedenis van Optic bewaart elke extractie, dus zelfs als je tekst pakt terwijl de video speelt, kun je het later ophalen uit het menubalk-dropdownmenu.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "scan-qr-code-from-screenshot-mac": {
    slug: "scan-qr-code-from-screenshot-mac",
    title: "Hoe je een QR-code scant vanuit een screenshot op de Mac",
    description:
      "Je hebt een screenshot van een QR-code op je Mac, maar geen manier om hem te scannen — je telefooncamera kan geen scherm lezen, en macOS biedt geen ingebouwde decoder.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Iemand stuurt je een sms met een screenshot met een QR-code erin. Of je hebt een QR-code van een website bewaard voor later. Of een PDF-bijlage bevat er een die naar een aanmeldpagina linkt. De QR-code staat als afbeelding op je Mac-scherm, en het natuurlijke instinct is om hem te "scannen" — maar hoe? Je telefooncamera op je computermonitor richten is onhandig, geeft reflectie en opent de link op het verkeerde apparaat. macOS biedt geen ingebouwde manier om een QR-code te decoderen uit een afbeelding of screenshot.</p>

<h2>Geen native QR-decoder op macOS</h2>
<p>iPhones hebben QR-scannen ingebouwd in de Camera-app. macOS heeft niets vergelijkbaars. Je kunt niet met de rechtermuisknop op een QR-codeafbeelding in Finder klikken en "Decodeer" kiezen. Preview haalt geen URL uit een QR-code. Safari herkent geen QR-codes in webpagina's. Als de QR-code al op je Mac-scherm staat, verwacht Apples ecosysteem dat je een ander apparaat gebruikt om hem te lezen — wat geen zin heeft als je het resultaat op dezelfde computer wilt.</p>
<p>Online QR-decoders bestaan, maar ze vereisen dat je je afbeelding naar een externe server uploadt. Voor QR-codes met gevoelige informatie — wifi-wachtwoorden, authenticatietokens, privé-URL's — is uploaden naar een willekeurige website geen optie.</p>

<h2>Decodeer QR-codes rechtstreeks op je scherm</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> bevat een QR-codescanner die werkt op alles wat zichtbaar is op je scherm. Open de screenshot of afbeelding met de QR-code, activeer Optic vanuit de menubalk en sleep een selectie rond de code. De gedecodeerde inhoud — URL, tekst, inloggegevens, wat de code ook codeert — verschijnt direct op je Mac.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic scanning a QR code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Evenementtickets en instapkaarten</h3>
<p>QR-codes op e-mailbevestigingen, doorgestuurde tickets en bewaarde instapkaarten komen vaak voor. Decodeer ze op je Mac om de inhoud te verifiëren, de gelinkte pagina te openen, of de gecodeerde informatie op te slaan — allemaal zonder naar je telefoon te wisselen.</p>

<h3>Wifi- en authenticatiecodes</h3>
<p>QR-codes die wifi-inloggegevens of URI's voor tweestapsverificatie coderen, bevatten gevoelige data. Optic decodeert ze lokaal op je apparaat — geen upload naar externe servers, geen blootstelling van je inloggegevens aan diensten van derden.</p>

<h3>Opgeslagen in vastleggingsgeschiedenis</h3>
<p>Elke gedecodeerde QR-code wordt opgeslagen in de menubalkgeschiedenis van Optic, samen met je tekstvastleggingen. Heb je het wifi-wachtwoord nodig van een QR-code die je vorige week scande? Scroll terug door je vastleggingen in plaats van de originele afbeelding te zoeken en opnieuw te scannen.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "ocr-foreign-language-mac": {
    slug: "ocr-foreign-language-mac",
    title: "OCR voor vreemde talen op Mac",
    description:
      "Tekst in een vreemde taal verschijnt op het scherm — in een afbeelding, een document of een video — en je moet die kopiëren, ook al kun je die tekens zelf niet typen.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je kijkt naar een Japans productlabel op een foto, een Frans juridisch document dat iemand heeft gescand, of Chinese tekst in een video-tutorial. Je hebt die tekst nodig — om in een vertaler te plakken, naar een collega te sturen, in een rapport op te nemen. Maar je kunt die tekens niet typen. Je hebt de toetsenbordindeling niet geïnstalleerd, je kent de invoermethode niet, en zelfs als je die kende, zou het karakter voor karakter reproduceren van een teken dat je bekijkt eeuwig duren. De tekst staat gewoon op het scherm, leesbaar voor iedereen die de taal kent, maar onmogelijk voor jou om te kopiëren.</p>

<h2>Vreemde tekens zonder het juiste toetsenbord zijn onbereikbaar</h2>
<p>macOS ondersteunt veel toetsenbordindelingen, maar overschakelen naar een indeling en de invoermethode ervan leren enkel om een paar tekens uit een afbeelding te kopiëren is onpraktisch. Karakter-voor-karakter opzoeken in een Unicode-tabel of een IME-tool is pijnlijk traag. Tekeninvoermethoden bestaan voor sommige talen, maar zijn onhandig voor meer dan één enkel teken.</p>
<p>Het probleem wordt groter wanneer de tekst zich in een afbeelding, een gescand document of een videoframe bevindt — contexten waarin je zelfs tekst in je eigen taal niet kunt selecteren. Vreemde taal tekst in deze formaten is dubbel ontoegankelijk: je kunt het niet selecteren omdat het een afbeelding is, en je zou het niet kunnen typen zelfs als je elk teken duidelijk kon zien.</p>

<h2>Selecteer vreemde tekst visueel, kopieer hem digitaal</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> herkent tekens van je scherm ongeacht de taal. Activeer het vanuit de menubalk, sleep over de vreemdetaaltekst die zichtbaar is in een afbeelding, document of videoframe, en de herkende tekens worden gekopieerd naar je klembord — in het juiste schrift, met de juiste Unicode-tekens. Plak ze in Google Translate, DeepL, of een willekeurige applicatie.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing foreign language text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vertaalworkflows</h3>
<p>De snelste weg van vreemde tekst in een afbeelding naar een vertaling is: selecteer met Optic, plak in een vertaler. Geen handmatige transcriptie, geen toetsenbord wisselen, geen tekens opzoeken. Werkt met Latijns, Cyrillisch, CJK, Arabisch en andere schriften.</p>

<h3>Internationale documenten</h3>
<p>Gescande contracten, facturen en formulieren in andere talen bevatten namen, adressen en cijfers die je mogelijk moet extraheren. Sleep over het relevante gedeelte en plak de tekens in je eigen documenten, met behoud van het originele schrift.</p>

<h3>Taalstudie</h3>
<p>Kom je nieuwe woordenschat tegen in afbeeldingen of video's? Selecteer de tekst en plak hem in een flashcard-app of woordenboek. Met de exacte tekens — in plaats van een gok naar romanisatie — zorg je voor nauwkeurige opzoekingen en studie.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "copy-text-from-slack-image-mac": {
    slug: "copy-text-from-slack-image-mac",
    title: "Hoe je tekst kopieert uit een afbeelding in Slack op de Mac",
    description:
      "Een teamgenoot deelt een screenshot in Slack — een foutlog, een configuratie, een dashboard — en de tekst erin is gewoon pixels die je niet kunt kopiëren of doorzoeken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Het gebeurt meerdere keren per dag. Een teamgenoot plakt een screenshot in een Slack-kanaal: een terminalfout, een dashboard met statistieken, een codefragment uit hun editor, of een configuratiepaneel. Je hebt de tekst in die screenshot nodig — een foutmelding om op te zoeken, een statistiek om in een rapport te citeren, of een codeblok om lokaal te testen. Maar de Slack-afbeeldingviewer toont je de afbeelding en verder niets. De tekst erin zou net zo goed een aquarel kunnen zijn wat je klembord betreft.</p>

<h2>Slack behandelt afbeeldingen als afbeeldingen</h2>
<p>Wanneer iemand een screenshot deelt in Slack, wordt hij weergegeven als een ingesloten afbeelding of geopend in de afbeeldingviewer van Slack. Er is geen OCR-laag, geen tekstextractieoptie, geen "kopieer tekst uit afbeelding" in het rechtermuisknopmenu. Je kunt de afbeelding downloaden, maar dat geeft je dezelfde pixels als een bestand op schijf — nog steeds geen selecteerbare tekst.</p>
<p>Dit is een dagelijks wrijvingspunt in engineering-, support- en operationsteams. Screenshots zijn de snelste manier om visuele informatie in chat te delen, maar elke screenshot met tekst wordt een doodlopende weg voor de ontvanger. De verzender gaat ervan uit dat de informatie is gedeeld; de ontvanger moet het handmatig transcriberen of de verzender vragen het als tekst te plakken — een verzoek dat vaak urenlang onbeantwoord blijft.</p>

<h2>Lees tekst rechtstreeks uit Slack-afbeeldingen</h2>
<p>Wanneer je in Slack een screenshot ziet met tekst die je nodig hebt, open hem in de afbeeldingviewer van Slack of bekijk gewoon de inline preview, activeer dan <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vanuit de menubalk en sleep een selectie over de tekst. De tekens worden in seconden herkend en naar je klembord gekopieerd — geen downloaden, geen wisselen tussen apps, geen wachten tot de verzender opnieuw als tekst deelt.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a Slack image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Foutmeldingen en logs</h3>
<p>Screenshots van fouten en stack traces worden voortdurend gedeeld in engineeringkanalen. Extraheer de exacte foutstring en plak hem in je zoekmachine of logaggregator voor een directe opzoeking, in plaats van een foutmelding van 200 tekens over te typen.</p>

<h3>Codefragmenten</h3>
<p>Wanneer iemand zijn code screenshot in plaats van als snippet te plakken, laat Optic je hem toch als tekst extraheren. Kopieer de code, plak hem in je editor en test hem lokaal — veel sneller dan iemand anders' code overtypen vanaf een afbeelding.</p>

<h3>Statistieken en data</h3>
<p>Dashboardscreenshots gedeeld in Slack-kanalen bevatten cijfers, labels en trends. Selecteer de specifieke cijfers die je nodig hebt en plak ze in je eigen rapporten of spreadsheets zonder handmatige transcriptiefouten.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "mac-preview-ocr-limitations": {
    slug: "mac-preview-ocr-limitations",
    title: "Beperkingen van Mac Preview OCR — wat het mist",
    description:
      "Preview verwerkt afbeeldingen en PDF's maar kan uit de meeste geen tekst extraheren. Als je hebt geprobeerd tekst te kopiëren uit een gescande PDF of foto in Preview en niets kreeg, is dit waarom.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Preview is de standaard afbeeldings- en PDF-viewer op macOS, en veel gebruikers gaan ervan uit dat het OCR aankan — het herkennen en extraheren van tekst uit afbeeldingen en gescande documenten. In beperkte situaties kan het dat, dankzij Live Text-integratie. Maar bij veel gangbare scenario's herkent Preview de tekst stilzwijgend niet of biedt het helemaal geen extractiemogelijkheid. Als je hebt geprobeerd tekst te selecteren uit een gescande PDF of een foto van een document in Preview en je cursor tekent gewoon een selectierechthoek zonder tekstmarkering, ben je tegen de OCR-muur van Preview aangelopen.</p>

<h2>Waar de tekstherkenning van Preview faalt</h2>
<p><strong>Gescande PDF's met complexe lay-outs.</strong> Preview kan soms tekst herkennen in schone, goed gescande documenten met één kolom. Maar meerkoloms-lay-outs, tabellen, kop- en voetteksten, en documenten met gemengde afbeeldingen en tekst leveren vaak helemaal geen selecteerbare tekst op. De Live Text-engine in Preview verwerkt complexe documentstructuren niet betrouwbaar.</p>
<p><strong>Tekst met weinig contrast of kleine tekst.</strong> Bonnetjesscans, vervaagde documenten en afbeeldingen met weinig contrast tussen tekst en achtergrond ondermijnen vaak de herkenning van Preview. De tekst is voor het menselijk oog misschien perfect leesbaar, maar onzichtbaar voor de detectie van Preview.</p>
<p><strong>Handgeschreven tekst.</strong> De tekstherkenning van Preview is afgestemd op gedrukte lettertypes. Handgeschreven notities, whiteboardfoto's en geannoteerde documenten worden zelden herkend, zelfs als het handschrift netjes en leesbaar is.</p>
<p><strong>Niet-Latijnse schriften.</strong> Ondersteuning voor niet-Latijnse talen is inconsistent. CJK-, Arabische en Cyrillische tekst in afbeeldingen wordt al dan niet gedetecteerd, afhankelijk van lettertypestijl, afbeeldingskwaliteit en documentcomplexiteit.</p>
<p><strong>Geen vastlegging vanaf het scherm.</strong> Preview verwerkt alleen bestanden die je hebt geopend. Als de tekst die je nodig hebt in een videoframe, een webapp-interface, een foutdialoog of het venster van een andere app zit, heeft Preview geen manier om erbij te komen.</p>

<h2>OCR dat werkt over alles op het scherm</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> omzeilt de beperkingen van Preview volledig door op schermniveau te werken. In plaats van een bestandsviewer te vragen tekst in een bestand te herkennen, leest Optic tekens uit alles wat zichtbaar is op je scherm. Open het problematische document in Preview — of een andere app — en sleep de selectie van Optic over de tekst die je nodig hebt.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Preview OCR limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Complexe documentlay-outs</h3>
<p>Tabellen, meerkoloms tekst en gemengde content die Preview struikelen laten, zijn leesbaar voor Optic omdat jij precies bepaalt welk gebied wordt gescand. Selecteer alleen de kolom of tabelcel die je nodig hebt — geen volledige pagina-analyse vereist.</p>

<h3>Meer dan bestanden</h3>
<p>Optic is niet beperkt tot geopende bestanden. Videoframes, dialoogvensters, webapps, remote-desktopsessies — alles wat op het scherm wordt weergegeven, is toegestaan. Preview kan deze bronnen nooit bereiken; Optic leest ze net zo natuurlijk als elke afbeelding.</p>

<h3>Permanente geschiedenis</h3>
<p>Preview heeft geen geheugen van eerdere tekstherkenningspogingen. Optic bewaart elke extractie in de menubalk, waardoor een logboek van vastgelegde tekst ontstaat dat je kunt doorbladeren en op elk moment opnieuw kunt kopiëren.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "batch-ocr-screenshots-mac": {
    slug: "batch-ocr-screenshots-mac",
    title: "Batch-OCR voor screenshots op Mac — verwerk vastleggingsgeschiedenis",
    description:
      "Je hebt een verzameling screenshots met tekst die je nodig hebt — maar ze één voor één verwerken via een traditionele OCR-tool is omslachtig en traag.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je maakte tijdens een onderzoekssessie een dozijn screenshots — prijstabellen, functievergelijkingen, instellingenpanelen, referentiemateriaal. Nu heb je de tekst uit ze allemaal nodig. Met traditionele OCR-tools betekent dat elk bestand afzonderlijk openen, herkenning uitvoeren, de output kopiëren, ergens plakken, en herhalen. Twaalf screenshots betekent twaalf cycli van bestand-openen-verwerken-kopiëren-plakken. Het is niet moeilijk — gewoon vervelend traag.</p>

<h2>macOS biedt geen batch-tekstextractie</h2>
<p>Er is geen ingebouwde macOS-functie waarmee je meerdere afbeeldingen kunt selecteren en tekst uit alle daaruit kunt extraheren. Preview kan meerdere bestanden openen maar heeft geen "alle tekst extraheren"-functie. Automator en Shortcuts kunnen bepaalde acties aan elkaar koppelen, maar missen betrouwbare OCR-mogelijkheden voor schermafbeeldingen. Je bent ofwel elke afbeelding handmatig aan het verwerken, ofwel installeer je zware documentverwerkingssoftware bedoeld voor enterprise-scanworkflows.</p>
<p>De ironie is dat je deze screenshots snel hebt vastgelegd — Cmd+Shift+4, klik, klaar — maar het extraheren van de tekst eruit tien keer langer duurt dan het vastleggen zelf.</p>

<h2>Snelle schermOCR met ingebouwde geschiedenis</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> maakt van batchextractie een snelle, lineaire workflow. Open je screenshots in Quick Look of een willekeurige viewer, maak dan snel achtereenvolgende selecties — sleep over de tekst in één afbeelding, ga naar de volgende, sleep opnieuw. Elke extractie wordt direct opgeslagen in de vastleggingsgeschiedenis van Optic in de menubalk. Geen bestandsbeheer, geen opslagvensters, geen kopieer-plakgejongleer tussen vensters.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic batch processing screenshots on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Onderzoekssessies</h3>
<p>Heb je screenshots vastgelegd van concurrentenwebsites, prijspagina's of documentatie? Open ze op volgorde en voer extracties uit. Je vastleggingsgeschiedenis wordt een schoon tekstlogboek van alles wat je hebt verzameld — doorzoekbaar en opnieuw kopieerbaar zonder afbeeldingen opnieuw te openen.</p>

<h3>Vastleggingsgeschiedenis als je tekstarchief</h3>
<p>Elke extractie krijgt een tijdstempel en wordt opgeslagen in het menubalk-dropdownmenu. Nadat je een batch screenshots hebt verwerkt, scroll je door de geschiedenis om afzonderlijke vastleggingen te bekijken, opnieuw te kopiëren of te verifiëren. De geschiedenis functioneert als een lichtgewicht tekstarchief van je geëxtraheerde content.</p>

<h3>Selectieve extractie</h3>
<p>In tegenstelling tot geautomatiseerde batch-OCR die hele afbeeldingen verwerkt, bepaal je zelf precies welk deel van elke screenshot je extraheert. Heb je alleen de prijs uit een prijstabel nodig? Alleen de foutcode uit een logscreenshot? Selecteer precies wat belangrijk is en sla de rest over.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "copy-address-from-image-mac": {
    slug: "copy-address-from-image-mac",
    title: "Hoe je een adres kopieert uit een afbeelding op de Mac",
    description:
      "Een verzendlabel, een foto van een visitekaartje, of een gescande brief bevat een adres dat je nodig hebt — maar het zit vast in een afbeelding zonder manier om het te selecteren.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je moet een adres kopiëren van een foto van een visitekaartje, een gescande envelop, een screenshot van een contactpagina, of een afbeelding van een leveringsbevestiging. Het adres is duidelijk afgedrukt — straat, stad, provincie, postcode — maar omdat het in een afbeelding staat, kun je er niet op klikken, het niet selecteren, het niet kopiëren. Je moet elke regel lezen en typen in je kaart-app, je contacten, of je verzendformulier. Eén verkeerd getypt cijfer in een postcode en het pakket gaat naar de verkeerde plaats.</p>

<h2>Adressen in afbeeldingen vereisen perfecte handmatige transcriptie</h2>
<p>Adressen zijn bijzonder risicovol om over te typen. Ze bevatten een mix van cijfers, afkortingen van straatnamen, huisnummers en postcodes — allemaal exact. Twee cijfers in een postcode verwisselen of een huisnummer verkeerd spellen betekent een mislukte bezorging of verkeerd bezorgde post. En in tegenstelling tot de meeste tekst kun je een adres niet gemakkelijk verifiëren door het terug te lezen — je moet karakter voor karakter vergelijken.</p>
<p>macOS biedt geen ingebouwde workflow voor het extraheren van een adres uit een afbeelding. Live Text kan adressen in sommige Foto's-afbeeldingen markeren en aanbieden ze in Kaarten te openen, maar dit werkt alleen in specifieke Apple-apps, met schone afbeeldingen, en het extraheert naar Kaarten — niet naar je klembord om elders te plakken.</p>

<h2>Sleep over het adres, plak het overal</h2>
<p>Open de afbeelding met het adres in een willekeurige app — Preview, Mail, een browser, Slack — activeer dan <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vanuit de menubalk en sleep een selectie rond het adres. De volledige tekst — elke regel, elk cijfer, elke afkorting — wordt naar je klembord gekopieerd. Plak het in Google Maps, een verzendformulier, je contacten, of een e-mail.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying an address from an image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Visitekaartjes</h3>
<p>Foto's van visitekaartjes van netwerkevenementen staan berucht bekend om in je cameraroll te blijven staan zonder dat de adressen ooit in je contacten terechtkomen. Open de foto, selecteer het adres met Optic en plak het direct in het contactveld. Werkt ook voor telefoonnummers en e-mailadressen op de kaart.</p>

<h3>Verzending en retouren</h3>
<p>Retourlabels, leveringsbevestigingen en verpakkingsfoto's bevatten vaak adressen die je moet raadplegen of hergebruiken. Extraheer het adres uit de afbeelding en plak het in je verzendplatform zonder overtypen.</p>

<h3>Vastgoed en routebeschrijvingen</h3>
<p>Advertentiefoto's, woningflyers en gescande documenten in het vastgoedproces staan vol adressen. Pak elk adres uit deze afbeeldingen en plak het in je kaart-app voor routebeschrijvingen of in een spreadsheet voor tracking.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "ocr-code-snippets-mac": {
    slug: "ocr-code-snippets-mac",
    title: "OCR voor codefragmenten op Mac — kopieer code uit tutorials en screenshots",
    description:
      "Code verschijnt als afbeelding in een tutorial, documentatie of een gedeelde screenshot — en overtypen betekent bugs introduceren, één verkeerd geplaatst teken tegelijk.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een blogpost geeft zijn codevoorbeelden weer als gestileerde afbeeldingen. Een collega plakt een screenshot van hun IDE in een pull-requestopmerking. Documentatie voor een legacy-tool bestaat alleen als terminalscreenshots op een wiki. Stack Overflow-antwoorden bevatten code ingesloten in afbeeldingen omdat de opmaak het origineel verminkte. In elk geval is de code zichtbaar en leesbaar, maar het is een afbeelding — en code kopiëren uit een afbeelding door het over te typen is hoe je dertig minuten besteedt aan het debuggen van een puntkomma die je dacht dat een dubbele punt was.</p>

<h2>Code vraagt om karakterperfecte extractie</h2>
<p>In tegenstelling tot proza heeft code nul tolerantie voor benadering. Een koppelteken in plaats van een underscore breekt een import. Eén verkeerd geplaatst haakje maakt een functie ongeldig. Een kleine letter waar een hoofdletter nodig was, verandert een variabelreferentie volledig. Als je code overtypt vanaf een afbeelding, is elk teken een potentieel faalpunt — en de bugs die je introduceert zijn onzichtbaar omdat ze er op het eerste gezicht correct uitzien.</p>
<p>Het probleem wordt vergroot bij lange commando's, meerregelige snippets of onbekende syntax. Een Docker run-commando met tien flags, een regexpatroon, of een shell-pipeline met pipes en redirects — dit is precies het soort content dat als afbeelding wordt gedeeld en bijna onmogelijk nauwkeurig over te typen is.</p>

<h2>Extraheer code uit elke afbeelding op het scherm</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> leest de codetekens rechtstreeks van je scherm. Open de afbeelding, tutorialpagina of screenshot met de code, activeer Optic vanuit de menubalk en sleep een selectie over het fragment. De herkende tekst — met behoud van insprong, speciale tekens en regelstructuur — gaat direct naar je klembord.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Terminalcommando's</h3>
<p>Installatiescripts, buildcommando's en deploymentpijplijnen weergegeven als terminalscreenshots komen vaak voor in documentatie en tutorials. Selecteer het commandoblok en plak het in je terminal met het vertrouwen dat de flags, paden en argumenten precies kloppen.</p>

<h3>IDE-screenshots</h3>
<p>Wanneer een collega een screenshot van hun code deelt — in Slack, in een GitHub-opmerking, in een e-mail — extraheer de code en plak hem in je eigen editor. Test hem, wijzig hem, of beoordeel hem goed in plaats van naar een afbeelding te turen.</p>

<h3>Extractie van meerdere fragmenten</h3>
<p>Tutorials tonen vaak meerdere codeblokken op een pagina. Extraheer elk op volgorde. De vastleggingsgeschiedenis van Optic bewaart elke extractie, zodat je een hele tutorial kunt doorwerken en elk fragment een voor een uit het geschiedenisdropdownmenu in je project kunt plakken.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },

  "text-to-speech-from-screen-mac": {
    slug: "text-to-speech-from-screen-mac",
    title: "Tekst-naar-spraak vanaf elke scherminhoud op de Mac",
    description:
      "Je wilt luisteren naar tekst die op het scherm staat — in een afbeelding, een gescande PDF, een videoframe — maar de spraaktools van je Mac werken alleen op tekst die je kunt markeren.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>macOS bevat een functie voor gesproken content die geselecteerde tekst hardop voorleest. Markeer een alinea in Safari, klik met de rechtermuisknop, en je Mac spreekt hem uit. De functie werkt goed — totdat je tekst wilt horen die niet gemarkeerd kan worden. Een infographic met belangrijke statistieken. Een gescand document zonder tekstlaag. Ondertitels ingebakken in een videoframe. Tekst weergegeven als afbeelding op een webapp. In al deze gevallen heeft de gesproken content van macOS niets om mee te werken omdat er geen selecteerbare tekst is om aan de spraakengine te voeren.</p>

<h2>De meeste scherptekst is niet selecteerbaar</h2>
<p>De hoeveelheid niet-selecteerbare tekst op een modern Mac-scherm is groter dan de meeste mensen beseffen. Afbeeldingen met tekstoverlays, canvas-weergegeven webapps, PDF-scans, videoframes, remote-desktopsessies, dialoogvensters, app-interfaces met aangepast weergegeven labels — dit alles toont leesbare tekst die macOS als deel van een afbeelding behandelt. Je kunt het zien, je kunt het met je ogen lezen, maar je kunt het niet selecteren, dus kun je het niet naar de spraakengine sturen.</p>
<p>Voor gebruikers die vertrouwen op audio-output voor toegankelijkheid, proeflezen, multitasken of taal leren, is deze kloof een echte barrière. De tekst staat op het scherm, de spraakengine draait op dezelfde machine, maar er is geen brug tussen beide voor niet-selecteerbare content.</p>

<h2>Selecteer alles op het scherm, hoor het hardop</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> overbrugt deze kloof door OCR op schermniveau te combineren met tekst-naar-spraak. Activeer het vanuit de menubalk, sleep een selectie over elke zichtbare tekst — ongeacht de bron — en Optic herkent de tekens. Vervolgens kun je de vastgelegde tekst hardop laten voorlezen, waardoor elke zichtbare scherminhoud audio wordt.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text-to-speech from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Toegankelijkheid</h3>
<p>Schermlezers zoals VoiceOver werken goed met native UI-elementen en standaardtekst, maar struikelen over tekst in afbeeldingen en niet-standaard weergave. Optic vult deze leemte door alle zichtbare tekst beschikbaar te maken als zowel klembordtekst als gesproken audio. Content die voorheen ontoegankelijk was, wordt hoorbaar.</p>

<h3>Proeflezen</h3>
<p>Tekst hardop horen vangt fouten op die visueel scannen mist. Nadat je tekst hebt geëxtraheerd uit een gescand document of afbeelding, gebruik je tekst-naar-spraak om de OCR-output te verifiëren. Een verhaspeld woord of verkeerd herkend teken is direct duidelijk als het wordt uitgesproken, maar kan onopgemerkt blijven op het scherm.</p>

<h3>Multitasken en begrip</h3>
<p>Extraheer een lange passage uit een document, artikel of gescande pagina en luister ernaar terwijl je ander werk doet. Audioverwerking activeert andere cognitieve kanalen dan lezen, wat het begrip en de retentie kan bevorderen — vooral bij dichte of onbekende materie. Elke vastlegging blijft in je menubalkgeschiedenis, zodat je elke eerdere extractie kunt herbezoeken en opnieuw kunt afspelen.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Haal Optic in de Mac App Store</a></p>
`,
  },
};
