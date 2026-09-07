import type { ArticleSet } from "./index";

export const nlArticles: ArticleSet = {
  "best-developer-tools-app-mac": {
    slug: "best-developer-tools-app-mac",
    title: "De beste developer tools app voor Mac",
    description:
      "Schakelen tussen browsertabbladen, CLI-scripts en bladwijzermappen voor basale dev-hulpmiddelen kost meer tijd dan het daadwerkelijke coderen.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Je moet binnen tien minuten een JWT decoderen, een JSON-blob formatteren, een UUID genereren en een string naar Base64 coderen. Dus open je vier browsertabbladen, plak je gevoelige gegevens op vier verschillende websites en hoop je dat geen ervan je klembord logt. Morgen doe je het gewoon weer.</p>

<p>Developers stellen hun eigen mengeling samen van bladwijzers, shell-aliassen en eenmalige scripts om deze microtaken af te handelen. Het werkt, technisch gezien. Maar elke contextwissel — je editor verlaten, het juiste tabblad vinden, wachten tot een pagina laadt — knabbelt aan de focus die je nodig hebt voor het probleem waar je eigenlijk mee bezig bent.</p>

<h2>Wat macOS standaard biedt</h2>
<p>macOS wordt geleverd met Terminal, dat een deel van dit terrein afdekt als je de juiste flags onthoudt. <code>uuidgen</code> geeft je een UUID. <code>echo -n "text" | base64</code> regelt het coderen. <code>python3 -m json.tool</code> formatteert JSON. Maar er is geen uniforme interface, geen vindbaarheid, en geen manier om dertig verschillende bewerkingen af te handelen zonder je eigen spiekbriefje met commando's bij te houden.</p>

<p>Xcode bevat een paar hulpmiddelen die verstopt zitten in menu's, maar een IDE van 12 GB opstarten om een URL-string te decoderen is als een vrachtwagen pakken voor de winkel om de hoek.</p>

<h2>Eén app voor 41 developer tools</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> stopt 41 developer tools in één native macOS-app — toegankelijk vanuit je menubalk of als losstaand venster. Tools zijn onderverdeeld in vijf categorieën: Formatters, Encoders, Generators, Converters en Text Tools. Een zijbalk laat je bladeren of zoeken, en de app houdt je recent gebruikte tools bij, zodat je meest gebruikte bewerkingen altijd één klik verwijderd zijn.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows developer tools app voor macOS met 41 tools in een NavigationSplitView-zijbalk" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Klemborddetectie</h3>
<p>Kopieer een JWT naar je klembord en open Bellows — de app stelt de JWT-decoder voor. Kopieer een JSON-string en de JSON-formatter verschijnt. Deze kleine functie elimineert de stap van een tool kiezen volledig; de app leest je plakbord en verwijst je naar het juiste hulpmiddel.</p>

<h3>Volledig offline</h3>
<p>Elke tool draait lokaal. Geen netwerkverzoeken, geen telemetrie, geen API-sleutels plakken op een website van iemand die je nog nooit hebt gehoord. Voor developers die met tokens, geheimen of interne gegevens werken, is dit geen leuke extra — het is een vereiste.</p>

<h3>Toegang via de menubalk</h3>
<p>Bellows leeft in je menubalk, dus is het altijd één klik verwijderd zonder je Dock vol te zetten. Klik op het icoon, kies een tool, plak je invoer, krijg je uitvoer. De hele interactie duurt seconden en je verlaat nooit je huidige werkruimte.</p>

<h2>Voor wie is dit</h2>
<p>Backend-engineers die API-responses debuggen. Frontend-developers die kleuren converteren tussen hex en RGB. DevOps-engineers die Base64-gecodeerde geheimen decoderen. Mobile developers die UUID's genereren voor testdata. Iedereen die ooit dacht "er moet een snellere manier zijn" terwijl hij een browsertabblad opende.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "json-formatter-mac-app": {
    slug: "json-formatter-mac-app",
    title: "JSON-formatter voor Mac — native app, werkt offline",
    description:
      "Ongeformatteerde JSON in een browsertool plakken om het te kunnen lezen is een workflow die je tientallen keren per week herhaalt zonder erbij na te denken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een API geeft een JSON-response van 200 regels terug, samengeperst tot één enkele regel. Je moet één geneste veld vinden. Dus kopieer je het, open je een browsertabblad, navigeer je naar één van het dozijn JSON-formatterwebsites, plak je het, klik je op "Format" en tuur je naar de uitvoer. Als de JSON iets gevoeligs bevat — tokens, gebruikersgegevens, interne ID's — heb je het net naar een externe server gestuurd.</p>

<p>Dit is een van de meest voorkomende microtaken in softwareontwikkeling, en de meeste developers handelen het op de minst efficiënte manier af.</p>

<h2>De Terminal-aanpak</h2>
<p>macOS bevat <code>python3</code>, dus je kunt JSON door <code>python3 -m json.tool</code> in Terminal pipen. Dat werkt voor correct gevormde invoer. Maar het verslikt zich in slotkomma's, geeft cryptische foutmeldingen bij misvormde JSON, en de uitvoer blijft gevangen in je terminalvenster. Er is geen syntax highlighting, geen inklapbare knooppunten, en geen manier om snel een geneste pad te kopiëren.</p>

<p>Sommige developers installeren <code>jq</code> via Homebrew, wat krachtiger is maar een extra afhankelijkheid toevoegt en vereist dat je de queryssyntax leert voor alles wat verder gaat dan basale formattering.</p>

<h2>Een native JSON-formatter die op je Mac leeft</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een JSON-formatter als een van zijn 41 ingebouwde developer tools. Plak of typ JSON in het invoerpaneel en krijg direct geformatteerde, leesbare uitvoer. Geen netwerkverbinding nodig — alles draait lokaal op je Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON-formatter tool met geformatteerde uitvoer op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Klemborddetectie</h3>
<p>Kopieer een JSON-string naar je klembord en open Bellows. De app detecteert de JSON-inhoud en stelt automatisch de formatter voor. Geen gedoe met menu's — de tool die je nodig hebt, wacht al op je.</p>

<h3>Onderdeel van een grotere toolkit</h3>
<p>JSON-formattering gebeurt zelden geïsoleerd. Misschien moet je een Base64-string decoderen om bij de JSON te komen, of een JWT-payload uitpakken die JSON bevat, of een URL-gecodeerde queryparameter decoderen die een JSON-object bevat. Met 41 tools in één app kun je deze bewerkingen aan elkaar koppelen zonder tussen verschillende hulpmiddelen te wisselen.</p>

<h3>Wanneer je het het meest nodig hebt</h3>
<p>Een webhook-payload debuggen om 23 uur 's avonds. Een configuratiebestand controleren dat een collega in Slack plakte. Een Core Data-export inspecteren. De structuur van een mock-response verifiëren voordat je een test schrijft. Dit zijn de momenten waarop het pakken van een browsertabblad het zwaarst voelt — en waarop een native app in je menubalk het grootste verschil maakt.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "base64-encoder-decoder-mac": {
    slug: "base64-encoder-decoder-mac",
    title: "Base64-encoder en -decoder voor Mac",
    description:
      "Base64-strings decoderen via Terminal-commando's of webtools onderbreekt je flow elke keer dat je een gecodeerde waarde tegenkomt in logs of configuraties.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je bekijkt omgevingsvariabelen en vindt een waarde die eruitziet als brabbeltaal — <code>eyJhbGciOiJIUzI1NiJ9</code>. Je weet dat het Base64 is, maar je kunt het niet ter plekke lezen. Dus kopieer je het, open je Terminal, typ je <code>echo "..." | base64 --decode</code>, besef je dat je de <code>-D</code>-vlag op macOS vergeten bent, probeer je het opnieuw, en zie je eindelijk de gedecodeerde uitvoer. Dertig seconden verloren aan iets wat er twee had moeten kosten.</p>

<p>Base64-codering duikt overal op: authenticatieheaders, e-mailbijlagen, data-URI's in CSS, Kubernetes-geheimen, CI/CD-pipelineconfiguraties. Als je met API's of infrastructuur werkt, decodeer je meerdere keren per dag Base64.</p>

<h2>Waarom Terminal tekortschiet</h2>
<p>Het ingebouwde <code>base64</code>-commando op macOS werkt, maar heeft eigenaardigheden. De decodeervlag is <code>-D</code> (hoofdletter) op macOS versus <code>-d</code> op Linux, wat iedereen struikelt die met beide werkt. Invoer over meerdere regels vereist zorgvuldig aanhalingstekens. En er is geen visuele feedback — je typt een commando, krijgt een string terug, en hoopt dat je de invoer niet per ongeluk hebt afgekapt.</p>

<p>Browsergebaseerde tools lossen het bruikbaarheidsprobleem op, maar creëren een beveiligingsprobleem. Base64-gecodeerde waarden zijn vaak geheimen: API-sleutels, tokens, certificaatgegevens. Ze op een website plakken ondermijnt het hele doel van ze coderen.</p>

<h2>Lokaal coderen en decoderen met één klik</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een Base64-encoder en -decoder als onderdeel van zijn toolkit met 41 developer tools voor macOS. Plak je gecodeerde string, zie direct de gedecodeerde uitvoer. Wissel van richting om platte tekst naar Base64 te coderen. Alles gebeurt op je eigen machine — er verlaat geen data je Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Base64-encoder en -decoder tool op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Veelvoorkomende use cases</h3>
<p>Kubernetes-geheimen decoderen die als Base64 zijn opgeslagen in YAML-manifesten. De payload van een JWT inspecteren (die Base64url-gecodeerd is). Een afbeelding converteren naar een Base64-data-URI om in HTML te embedden. Inloggegevens coderen voor een HTTP Basic Auth-header. Elk van deze taken kost één plak-en-lees-interactie in plaats van een Terminal-commando of een omweg via de browser.</p>

<h3>Klembordbewust</h3>
<p>Kopieer een Base64-string en open Bellows vanuit de menubalk. De app detecteert de gecodeerde inhoud op je klembord en stelt de Base64-tool voor, zodat je de stap van er handmatig naartoe navigeren overslaat.</p>

<h3>Geen installatie-overhead</h3>
<p>In tegenstelling tot Homebrew-formules of Python-scripts die onderhoud nodig hebben, is Bellows een enkele Mac App Store-installatie met automatische updates. Het draait native op Apple Silicon en Intel Macs zonder afhankelijkheden.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "devtoys-alternative-mac": {
    slug: "devtoys-alternative-mac",
    title: "DevToys-alternatief voor Mac",
    description:
      "DevToys bracht het idee van de alles-in-één developer-toolkit naar Windows, maar de macOS-versie evenaarde nooit de native ervaring die Mac-gebruikers verwachten.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Als je DevToys op Windows hebt gebruikt, ken je de aantrekkingskracht: één app die JSON-formattering, Base64, JWT-decodering, hash-generatie en een dozijn andere hulpmiddelen afhandelt. Geen browsertabbladen, geen CLI-commando's, geen contextwissels. Toen stapte je over naar macOS en zocht je naar hetzelfde.</p>

<p>De macOS-versie van DevToys bestaat, maar voelde altijd meer als een port dan als een native app. De UI volgt de macOS-conventies niet, de prestaties kunnen haperen op Apple Silicon, en het draagt het gewicht van een cross-platform framework. Als je een Mac koos vanwege de softwarekwaliteit, valt het gat op.</p>

<h2>Wat Mac-developers eigenlijk willen</h2>
<p>Mac-gebruikers verwachten apps die aanvoelen alsof ze bij het platform horen. Dat betekent een native zijbalk, standaard sneltoetsen, degelijke dark mode-ondersteuning en integratie met systeemfuncties zoals de menubalk. Dit zijn geen cosmetische voorkeuren — ze beïnvloeden hoe snel je binnen kunt komen, de taak kunt uitvoeren en weer weg kunt gaan.</p>

<p>Een developer tools app leeft in de kieren tussen geconcentreerde werksessies. Hij moet direct opstarten, invoer accepteren zonder wrijving, en verdwijnen als je klaar bent. Elke milliseconde vertraging of UI-verwarring werkt tegen dat doel in.</p>

<h2>Een native Mac-alternatief met 41 tools</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> is in Swift gebouwd, specifiek voor macOS. Het gebruikt een NavigationSplitView-zijbalk om 41 tools te organiseren over vijf categorieën: Formatters, Encoders, Generators, Converters en Text Tools. Het draait zowel als menubalk-app als als losstaand venster — jouw keuze, afhankelijk van hoe je werkt.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows als native macOS DevToys-alternatief met NavigationSplitView-zijbalk" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Hoe het zich verhoudt tot DevToys</h3>
<p>Beide apps bestrijken hetzelfde kernterrein — JSON-formattering, coderen/decoderen, hashing, UUID-generatie, kleurconversie. Waar Bellows verschilt, is in platformintegratie. Klemborddetectie stelt de juiste tool voor op basis van wat je net gekopieerd hebt. Toegang via de menubalk betekent dat je nooit hoeft te Cmd-Tabben om de app te vinden. Bijhouden van recente items brengt je meest gebruikte tools naar boven. Dit zijn kleine details, maar ze tellen op over honderden dagelijkse interacties.</p>

<h3>Volledig offline</h3>
<p>Net als DevToys draait Bellows volledig offline. Er verlaat geen data je machine, geen account vereist, geen telemetrie. Voor developers die met inloggegevens, tokens of eigen data werken, is dit vanzelfsprekend — maar wel de moeite waard om expliciet te bevestigen.</p>

<h3>Native prestaties</h3>
<p>Omdat Bellows is gebouwd met native macOS-frameworks in plaats van Electron of een cross-platform toolkit, start het direct op en gebruikt het minimaal geheugen. Het gedraagt zich als een systeemhulpprogramma, niet als een webapp met een native jasje.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "jwt-decoder-mac": {
    slug: "jwt-decoder-mac",
    title: "JWT-decoder voor Mac — plakken en inspecteren",
    description:
      "JWT's in jwt.io plakken om de claims te lezen werkt, tot je je realiseert dat je net een geldig token naar een externe website hebt gestuurd.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je pakt een JWT uit een requestheader of een logbestand. Het is een lange, door punten gescheiden string die voor het menselijk oog niets betekent. Je moet de vervaldatum-claim controleren, de uitgever verifiëren, of zien welke scopes ingebed zijn. Dus open je jwt.io, plak je het token, en lees je de gedecodeerde payload in het rechterpaneel.</p>

<p>Deze workflow heeft een probleem: je hebt net een actief authenticatietoken over het netwerk gestuurd naar een website die je niet zelf beheert. JWT-payloads bevatten vaak gebruikers-ID's, e-mailadressen, rollen en rechten. Het token zelf kan nog steeds geldig zijn. Zelfs als jwt.io betrouwbaar is, is het mogelijk dat het beveiligingsbeleid van je bedrijf het daar niet mee eens is.</p>

<h2>Wat een JWT eigenlijk bevat</h2>
<p>Een JSON Web Token heeft drie delen, gescheiden door punten: een header (algoritme en type), een payload (de claims — vervaldatum, uitgever, subject, aangepaste data) en een handtekening. De header en payload zijn gewoon Base64url-gecodeerde JSON. Je hebt geen server of speciale library nodig om ze te lezen — je hebt een Base64-decoder en een JSON-formatter nodig. Maar dit elke keer handmatig in Terminal doen, is vervelend.</p>

<h2>Decodeer JWT's lokaal op je Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een speciale JWT-decoder die het token opsplitst in zijn drie delen en de gedecodeerde header en payload als geformatteerde JSON weergeeft. Plak het token, zie de claims. Geen netwerkverzoek, geen externe server, geen risico op het lekken van een actief token.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JWT-decoder met gedecodeerde header en payload op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Klembordbewust</h3>
<p>Kopieer een JWT uit de devtools van je browser, een logbestand, of een Slack-bericht. Open Bellows en het detecteert het tokenformaat op je klembord, waarna het direct de JWT-decoder voorstelt. De gedecodeerde payload verschijnt in één stap.</p>

<h3>Vervaldatum in één oogopslag controleren</h3>
<p>De meest voorkomende reden om een JWT te decoderen, is om te controleren of het is verlopen. De <code>exp</code>-claim is een Unix-timestamp — makkelijk voor machines, betekenisloos voor mensen. Door de gedecodeerde payload te zien, kun je snel de vervaldatum aflezen naast andere claims zoals <code>iss</code>, <code>sub</code> en <code>aud</code>, zonder timestamps in je hoofd om te rekenen.</p>

<h3>Onderdeel van een grotere toolkit</h3>
<p>JWT-decodering leidt vaak tot gerelateerde taken: een Base64-waarde binnen een claim decoderen, een string hashen om te vergelijken met een fingerprint, of een redirect-URI die in de payload staat URL-decoderen. Met 41 tools beschikbaar in dezelfde app hoef je voor deze vervolgtaken niet naar een ander hulpmiddel over te schakelen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "url-encoder-decoder-mac": {
    slug: "url-encoder-decoder-mac",
    title: "URL-encoder en -decoder voor Mac",
    description:
      "Percentgecodeerde URL's vol %20 en %3D lezen is als een zin lezen waarin elke spatie is vervangen door een getal.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je haalt een URL uit serverlogs en het ziet er zo uit: <code>https://example.com/search?q=hello%20world&redirect=https%3A%2F%2Fother.com%2Fpath</code>. Je moet de queryparameters lezen, maar de procentcodering maakt dat bijna onmogelijk in één oogopslag. Dus plak je het in een browsertool, decodeer je het, lees je het resultaat, en codeer je vervolgens een aangepaste versie opnieuw om iets te testen. Twee omwegen naar een website voor iets wat een triviale bewerking zou moeten zijn.</p>

<p>URL-codering is een van die dingen waar developers voortdurend mee te maken hebben maar zelden bij stilstaan — totdat een kapotte redirect, een misvormde querystring, of een dubbel gecodeerde parameter een taak van vijf minuten omzet in een uur durende debug-sessie.</p>

<h2>Wanneer URL-codering echte problemen veroorzaakt</h2>
<p>Dubbele codering is de klassieke valkuil. Een URL wordt één keer gecodeerd door je applicatie en nogmaals door een middleware-laag, waardoor <code>%20</code> verandert in <code>%2520</code>. Om dit te diagnosticeren moet je de URL stap voor stap decoderen en precies zien waar de extra codering is binnengeslopen. Dit doen in Terminal met <code>python3 -c "import urllib.parse; print(urllib.parse.unquote('...'))"</code> werkt, maar is traag en foutgevoelig bij lange URL's.</p>

<p>Coderingsfouten breken ook OAuth-flows, webhook-URL's en API-callbacks waarbij de redirect-URI exact moet overeenkomen. Snel kunnen coderen en decoderen laat je vergelijken wat je app stuurt versus wat de server verwacht.</p>

<h2>URL's direct coderen en decoderen</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een URL-encoder en -decoder tussen zijn 41 developer tools. Plak een gecodeerde URL om de leesbare versie te zien. Typ een gewone URL om de correct gecodeerde uitvoer te krijgen. Wissel met één klik tussen coderen en decoderen, en het resultaat wordt in realtime bijgewerkt.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows URL-encoder en -decoder tool op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Redirects debuggen</h3>
<p>OAuth- en SSO-flows geven redirect-URI's door als URL-gecodeerde queryparameters. Wanneer een redirect faalt, is de eerste stap het decoderen van de URL om te verifiëren dat het doel overeenkomt met je geregistreerde callback. Met een lokale tool kun je dit doen zonder je IDE te verlaten of mogelijk gevoelige callback-URL's op een publieke website te plakken.</p>

<h3>Werken met querystrings</h3>
<p>API's die complexe filters of zoekopdrachten accepteren via URL-parameters vereisen vaak zorgvuldige codering van speciale tekens zoals <code>&</code>, <code>=</code>, <code>+</code> en spaties. Een speciale encoder zorgt ervoor dat je de juiste uitvoer krijgt zonder te hoeven raden welke tekens in jouw specifieke context escaped moeten worden.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "hash-generator-mac-app": {
    slug: "hash-generator-mac-app",
    title: "Hash-generator voor Mac — MD5, SHA-256 en meer",
    description:
      "Bestandsintegriteit verifiëren of wachtwoordhashes genereren via Terminal-commando's betekent dat je elke keer andere flags per algoritme moet onthouden.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je downloadt een binair bestand van GitHub en de releasepagina vermeldt een SHA-256-checksum. Om het te verifiëren open je Terminal, typ je <code>shasum -a 256 ~/Downloads/file.tar.gz</code>, wacht je tot het berekend is, en vergelijk je vervolgens handmatig twee hexadecimale strings van 64 tekens naast elkaar. Eén verkeerd teken en je weet niet of het bestand corrupt is of dat je de hash gewoon verkeerd hebt gelezen.</p>

<p>Of je moet een MD5-hash van een string genereren — misschien voor een cachesleutel, een Gravatar-URL, of een legacy API die nog steeds MD5-handtekeningen gebruikt. Het commando is <code>md5 -s "text"</code> op macOS maar <code>md5sum</code> op Linux. Kleine verschillen, maar genoeg om je te vertragen wanneer je tussen systemen wisselt.</p>

<h2>Hashen in Terminal: het werkt, maar amper</h2>
<p>macOS wordt geleverd met <code>md5</code>, <code>shasum</code> en <code>openssl dgst</code>, wat de meeste algoritmes afdekt. Maar elke tool heeft zijn eigen syntax. <code>md5</code> gebruikt <code>-s</code> voor string-invoer. <code>shasum</code> gebruikt <code>-a</code> om het algoritme te kiezen. <code>openssl dgst</code> vereist <code>-sha256</code> of <code>-md5</code> als vlag. Er is geen enkel commando waarmee je een algoritme kiest en een string hasht zonder de man-pagina te raadplegen.</p>

<p>Voor developers die af en toe een snelle hash nodig hebben, staat de cognitieve overhead van het onthouden van deze variaties niet in verhouding tot de eenvoud van de taak.</p>

<h2>Hashes genereren met één keer plakken</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een hash-generator die MD5, SHA-1, SHA-256, SHA-384, SHA-512 en andere veelgebruikte algoritmes ondersteunt. Typ of plak je invoer, selecteer een algoritme, en de hash verschijnt direct. Geen vlaggen om te onthouden, geen syntax om op te zoeken.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows hash-generator met MD5- en SHA-256-uitvoer op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Downloads verifiëren</h3>
<p>Wanneer een releasepagina een checksum geeft, wil je die vergelijken met het bestand dat je hebt gedownload. Een hash genereren in een visuele tool maakt de vergelijking makkelijker dan twee strings in een terminalvenster met het blote oog vergelijken — vooral bij SHA-256-hashes van 64 tekens.</p>

<h3>API-handtekeningen en cachesleutels</h3>
<p>Sommige API's vereisen HMAC- of hashgebaseerde handtekeningen voor requestauthenticatie. Andere gebruiken MD5- of SHA-hashes als cachesleutels of content-identifiers. Snel een hash van een requestbody of een string kunnen genereren, laat je je implementatie tijdens het debuggen verifiëren tegen verwachte waarden.</p>

<h3>Offline en privé</h3>
<p>Invoer die gehasht wordt, kan gevoelige gegevens bevatten — wachtwoorden, API-geheimen, interne identifiers. Bellows draait volledig op je Mac zonder netwerktoegang, dus verlaat niets wat je hasht ooit je machine.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "regex-tester-mac-app": {
    slug: "regex-tester-mac-app",
    title: "Regex-tester voor Mac — native en offline",
    description:
      "Reguliere expressies schrijven zonder live feedback is als code bewerken zonder syntax highlighting — technisch mogelijk, maar onnodig pijnlijk.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Je hebt een regex nodig om e-mailadressen te valideren, timestamps uit logregels te halen, of een CSV-veld te parsen dat soms komma's tussen aanhalingstekens bevat. Je schrijft een patroon, test het tegen één voorbeeldstring in je code, ontdekt dat het faalt bij een randgeval, past het aan, bouwt opnieuw, test opnieuw. Elke iteratie kost 30 seconden aan compile-run-check, en de meeste regexpatronen hebben vijf of zes iteraties nodig voordat ze betrouwbaar werken.</p>

<p>Het alternatief is regex101.com — een uitstekende tool die matches in realtime toont, elk onderdeel van het patroon uitlegt, en je tegen meerdere invoerwaarden tegelijk laat testen. Maar het draait in een browser, wat betekent dat je je testdata (logregels, gebruikersgegevens, API-responses) op een publieke website plakt. En je hebt een internetverbinding nodig.</p>

<h2>Waarom live feedback belangrijk is voor regex</h2>
<p>Reguliere expressies zijn van nature dicht op elkaar gepakt. Het verschil tussen <code>.*</code> en <code>.*?</code> (greedy versus lazy) kan bepalen of je patroon één regel of een heel bestand matcht. Lookaheads, karakterklassen en capture groups interacteren op manieren die lastig in je hoofd te doorgronden zijn. Matches zien oplichten terwijl je het patroon typt, verandert regex van giswerk in een visueel, iteratief proces.</p>

<p>Daarom zijn browsergebaseerde testers zo populair — ze bieden de feedbackloop die regex schrijven in broncode niet biedt. Het probleem is dat ze een browser vereisen, een internetverbinding, en vertrouwen dat je testdata privé blijft.</p>

<h2>Test regex lokaal op je Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een regex-tester als een van zijn 41 developer tools. Typ je patroon, plak je teststring, en zie matches in realtime oplichten. Pas het patroon aan en de resultaten worden direct bijgewerkt — geen compilatiestap, geen paginaherlading, geen netwerkverzoek.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows regex-tester met live match-highlighting op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Veelvoorkomende patronen makkelijker gemaakt</h3>
<p>Datums uit logbestanden halen (<code>\\d{4}-\\d{2}-\\d{2}</code>). Telefoonnummers valideren met optionele landcodes. URL's matchen in vrije tekst. Gestructureerde data parsen zoals CSV of TSV waarbij velden tussen aanhalingstekens kunnen staan. Deze patronen zijn conceptueel simpel maar lastig bij randgevallen — en een live tester laat je die randen opvangen voordat ze de productie bereiken.</p>

<h3>Geen data verlaat je Mac</h3>
<p>Als je testdata serverlogs, gebruikersinformatie of interne systeemuitvoer bevat, is regexpatronen offline testen niet alleen handig — het is de verantwoorde keuze. Bellows draait volledig op je machine zonder netwerktoegang.</p>

<h3>Altijd beschikbaar</h3>
<p>Bellows zit in je menubalk, dus de regex-tester is één klik verwijderd. Geen browsertabblad om te vinden, geen URL om te onthouden, geen laadspinner. Open het, test je patroon, kopieer het resultaat, sluit het. De hele interactie duurt seconden.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "color-picker-hex-rgb-mac": {
    slug: "color-picker-hex-rgb-mac",
    title: "Kleurenkiezer met hex en RGB voor Mac",
    description:
      "Handmatig converteren tussen hexcodes, RGB-waarden en HSL-notatie is foutgevoelig en onnodig als je het meerdere keren per dag doet.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een designer stuurt je een kleur in hex: <code>#1A73E8</code>. Je CSS-framework wil HSL. Je iOS-codebase heeft RGB-waarden tussen 0 en 1 nodig. Je Android-project gebruikt ARGB-integers. Eén kleur, vier formaten, en je opent alweer een browsertabblad om ertussen te converteren.</p>

<p>Kleurconversie is triviale wiskunde (hex naar RGB is gewoon base-16 naar decimaal), maar het in je hoofd doen voor drie kanalen terwijl je probeert gefocust te blijven op layout of styling, is een afleiding die je niet nodig hebt.</p>

<h2>Wat macOS biedt</h2>
<p>macOS heeft een ingebouwde kleurenkiezer die vanuit sommige apps toegankelijk is via het systeem-kleurenpaneel. Het toont RGB-schuifregelaars en een hexveld, maar is ontworpen om kleuren visueel te kiezen, niet om programmatisch tussen formaten te converteren. Er is geen eenvoudige manier om een hexcode te plakken en de HSL-equivalent te krijgen, of om RGB-integers in te voeren en de hex-uitvoer te kopiëren. En het zit verstopt in specifieke apps in plaats van systeembreed beschikbaar te zijn.</p>

<h2>Converteer kleuren direct tussen formaten</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een kleurconverter tussen zijn 41 developer tools. Voer een kleur in, in elk ondersteund formaat — hex, RGB, HSL — en zie de equivalente waarden in elk ander formaat. Kopieer met één klik welke weergave je maar nodig hebt.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows kleurenkiezer met hex-, RGB- en HSL-conversie op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Van design naar code</h3>
<p>Figma exporteert kleuren als hex. Tailwind CSS gebruikt aangepaste kleurwaarden. SwiftUI wil <code>Color(red:green:blue:)</code> met decimale waarden. Android XML gebruikt <code>#AARRGGBB</code>. Als alle formaten tegelijk zichtbaar zijn, elimineer je het mentale rekenwerk en de omwegen naar conversiewebsites.</p>

<h3>Contrast en leesbaarheid controleren</h3>
<p>Wanneer je de gerenderde kleur naast de numerieke waarden kunt zien, kun je snel controleren of een tekstkleur leesbaar zal zijn tegen een achtergrond. Dat is sneller dan overschakelen naar een aparte contrastchecker voor elk kleurenpaar in je stylesheet.</p>

<h3>Toegang via de menubalk</h3>
<p>Snel een conversie nodig terwijl je CSS schrijft? Klik op het Bellows-icoon in je menubalk, selecteer de kleurtool, plak de hexcode, en kopieer de RGB-waarde. De hele interactie duurt minder dan vijf seconden en je verlaat nooit je editor.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "uuid-generator-mac": {
    slug: "uuid-generator-mac",
    title: "UUID-generator voor Mac — direct kopiëren",
    description:
      "UUID's genereren via Terminal of codefragmenten voegt wrijving toe aan een taak die volledig achteloos zou moeten zijn.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een UUID nodig. Misschien schrijf je een unit test en heb je een unieke identifier nodig voor een mock-object. Misschien vul je een database en heb je primaire sleutels nodig. Misschien maak je een nieuwe entiteit in een configuratiebestand aan en vereist het schema een UUID. Wat de reden ook is, je moet stoppen met wat je doet, ergens een UUID genereren, het kopiëren, en het terugplakken in je code.</p>

<p>Dit gebeurt vaak genoeg dat de meeste developers een oplossing uit het spiergeheugen hebben: <code>uuidgen</code> in Terminal, een bladwijzer in de browser, of een snippet in hun editor. Elk van deze werkt. Geen enkele is echt wrijvingsloos.</p>

<h2>De Terminal-manier</h2>
<p>macOS bevat <code>uuidgen</code>, dat een UUID v4 naar stdout schrijft. Het is snel en betrouwbaar. Maar het geeft standaard hoofdletters (sommige systemen verwachten kleine letters), het genereert één UUID tegelijk, en het gebruiken ervan betekent overschakelen naar Terminal, het commando uitvoeren, de uitvoer selecteren, kopiëren en terugschakelen. Voor één UUID is dat prima. Voor tien UUID's om een testdatabase te vullen, wordt het vervelend.</p>

<h2>Genereer UUID's vanuit je menubalk</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een UUID-generator als een van zijn 41 developer tools. Open het vanuit de menubalk, genereer een UUID, en kopieer het naar je klembord. Nog een nodig? Genereer opnieuw. De tool is altijd één klik verwijderd, draait offline en produceert standaard v4-UUID's die klaar zijn om te plakken in code, configuraties of database seed-bestanden.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows UUID-generator met direct kopiëren op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Testen en mockdata</h3>
<p>Unit- en integratietests hebben vaak unieke identifiers nodig die realistisch aanvoelen. Overal dezelfde UUID hardcoderen leidt tot subtiele bugs wanneer tests parallel draaien of wanneer een test per ongeluk afhankelijk is van een specifieke ID. Verse UUID's genereren voor elke testfixture is een eenvoudige gewoonte die een hele klasse van flaky testfouten voorkomt.</p>

<h3>Database seeden</h3>
<p>Bij het vullen van een ontwikkeldatabase met voorbeelddata heb je unieke primaire sleutels nodig die niet botsen met productiedata of de seed-bestanden van andere developers. UUID's op aanvraag genereren is schoner dan integers ophogen of voorspelbare patronen gebruiken die kunnen overlappen.</p>

<h3>Altijd beschikbaar</h3>
<p>Omdat Bellows in je menubalk leeft, is de UUID-generator toegankelijk zonder Terminal te openen, apps te wisselen, of naar een bladwijzer te navigeren. Klikken, genereren, kopiëren, plakken. De onderbreking van je workflow wordt gemeten in seconden, niet in contextwissels.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "all-in-one-dev-tools-mac-offline": {
    slug: "all-in-one-dev-tools-mac-offline",
    title: "Alles-in-één developer tools voor Mac — 41 tools, volledig offline",
    description:
      "Browsertabbladen voor codering, Terminal-vensters voor hashing, bladwijzers voor formattering — developer-microtaken zijn verspreid over een dozijn plekken.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Tel de tools die je gebruikt tijdens een gemiddelde debugsessie. Een JSON-formatter om een API-response te lezen. Een Base64-decoder voor een auth-header. Een JWT-inspector om tokenclaims te controleren. Een URL-decoder om een redirect-keten te ontwarren. Een hash-generator om een checksum te verifiëren. Dat zijn vijf open browsertabbladen, vijf websites die nu je data hebben, en vijf contextwissels die je weghaalden van het eigenlijke probleem.</p>

<p>Dit zijn geen complexe taken. Elke kost tien seconden daadwerkelijk werk. Maar de overhead van het juiste hulpmiddel vinden, erheen schakelen, invoer plakken en uitvoer kopiëren, telt op tot minuten per sessie en uren per week. Erger nog, het versnippert je aandacht op precies de momenten waarop je een complex systeem in je hoofd moet vasthouden.</p>

<h2>Het huidige landschap</h2>
<p>Developers hebben persoonlijke toolkits samengesteld uit een mix van bronnen. Browserbladwijzers naar sites als jwt.io, regex101.com en jsonformatter.org. Shell-aliassen en functies in <code>.zshrc</code>. VS Code-extensies die formattering of codering toevoegen. Homebrew-packages zoals <code>jq</code> en <code>htop</code>. Elke tool werd toegevoegd om één probleem op te lossen, en geen enkele praat met de andere.</p>

<p>Het resultaat is een toolchain die technisch werkt maar geen samenhang heeft. Je kunt niet voorspellen waar het volgende hulpmiddel zal leven. Je kunt bewerkingen niet aan elkaar koppelen zonder handmatig uitvoer van de ene tool te kopiëren en in de andere te plakken. En je kunt niet garanderen dat een van de webgebaseerde tools je data privé houdt.</p>

<h2>41 tools in één native macOS-app</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bundelt 41 developer tools in één enkele macOS-applicatie, onderverdeeld in vijf categorieën:</p>

<ul>
<li><strong>Formatters</strong> — JSON, XML, SQL, HTML en meer. Plak rommelige invoer, krijg schone uitvoer.</li>
<li><strong>Encoders</strong> — Base64, URL-codering, HTML-entiteiten, JWT-decodering. Coderen en decoderen in beide richtingen.</li>
<li><strong>Generators</strong> — UUID's, hashes (MD5, SHA-256, SHA-512), Lorem Ipsum, wachtwoorden. Genereren en kopiëren in één stap.</li>
<li><strong>Converters</strong> — Kleuren (hex/RGB/HSL), talstelsels, timestamps, eenheden. Converteren tussen formaten zonder mentaal rekenwerk.</li>
<li><strong>Text Tools</strong> — Regex-tester, diff-checker, hoofdlettergebruik-converter, regelsorteerder, tekentelling. De tekstmanipulatiehulpmiddelen die je dagelijks nodig hebt.</li>
</ul>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows met alle 41 developer tools georganiseerd in categorieën op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Klemborddetectie</h3>
<p>Kopieer iets naar je klembord en open Bellows. De app analyseert de inhoud van het plakbord en stelt de meest relevante tool voor. Kopieer een JWT en het biedt de decoder aan. Kopieer JSON en de formatter verschijnt. Kopieer een Base64-string en het wijst naar de encoder. Dit verwijdert de stap van een tool kiezen — de app doet het voor je.</p>

<h3>Menubalk- en venstermodus</h3>
<p>Bellows draait als menubalk-app voor snelle, eenmalige bewerkingen: klik op het icoon, gebruik een tool, sluit het. Voor langere sessies — zoals een reeks regexpatronen testen of meerdere kleurwaarden converteren — schakel je naar venstermodus en houd je het naast je editor. Beide modi gebruiken dezelfde interface met een NavigationSplitView-zijbalk om door categorieën te bladeren.</p>

<h3>Volledig offline</h3>
<p>Elke tool draait lokaal op je Mac. Geen netwerkverzoeken, geen accounts, geen telemetrie. Dit is geen filosofisch standpunt — het is een praktische vereiste voor developers die dagelijks werken met tokens, geheimen, inloggegevens en eigen data. Je invoer blijft op je machine.</p>

<h3>Bijhouden van recente items</h3>
<p>De tools die je het vaakst gebruikt, verschijnen bovenaan de zijbalk. Na verloop van tijd past Bellows zich aan je workflow aan, zodat de tools die je nodig hebt altijd binnen handbereik zijn, in plaats van verstopt in een categorie die je moet uitklappen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "json-validator-mac-app": {
    slug: "json-validator-mac-app",
    title: "JSON-validator voor Mac — vind fouten direct",
    description:
      "Een ontbrekende komma of een verdwaald haakje kan een heel configuratiebestand breken, en het regel voor regel opsporen kost tijd die je niet hebt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je build faalt met "Unexpected token in JSON at position 4,821." Geweldig, bedankt. Nu mag je door een configuratiebestand van vierduizend tekens scrollen om in je hoofd haakjes te tellen en te achterhalen welke niet klopt. Dit is een van de meest vermijdbare tijdverspillers in softwareontwikkeling, en het gebeurt voortdurend omdat JSON geen enkele tolerantie heeft voor kleine fouten.</p>

<p>Een slotkomma na het laatste item in een array. Een ontbrekend aanhalingsteken rond een key. Een extra sluitende accolade die ergens anders vandaan gekopieerd is. Elk hiervan breekt het parsen volledig, en de foutmelding wijst zelden naar het echte probleem — hij wijst naar waar de parser opgaf, wat vaak meerdere regels verwijderd is van de eigenlijke fout.</p>

<h2>Waarom positienummers niet helpen</h2>
<p>De meeste JSON-parsers rapporteren fouten als een tekenoffset, niet als een regel en kolom waar je in je editor naartoe kunt springen. Positie 4.821 omzetten naar "regel 112, ergens bij het derde object" vereist ofwel handmatig tellen ofwel een wegwerpscript schrijven. Geen van beide is een goede besteding van je middag.</p>

<p>Sommige editors markeren JSON-syntaxfouten inline, wat helpt bij bestanden die je actief aan het schrijven bent. Maar voor JSON die je van een API, een collega, of een geërfde legacy-configuratie hebt gekregen, heb je een tool nodig die de ruwe tekst neemt en je precies vertelt wat er mis is en waar.</p>

<h2>Valideer JSON zonder je Mac te verlaten</h2>
<p>Een JSON-formatter die ook valideert, bespaart je het giswerk. Plak de JSON erin, en als deze misvormd is, krijg je een duidelijke foutmelding die naar de specifieke regel en het teken wijst in plaats van een ruwe byte-offset. Als het geldig is, wordt het netjes weergegeven met correcte inspringing, zodat je de structuur visueel kunt doorlopen. <a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> handelt beide gevallen af in dezelfde tool — je hoeft van tevoren niet te weten of je JSON kapot is.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON-formatter valideert en markeert een syntaxfout op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Fouten opvangen voordat ze uitgerold worden</h3>
<p>Configuratiebestanden, API-requestbodies en fixture-data staan of vallen bij geldige JSON. Een snelle validatieronde uitvoeren voordat je een configuratiewijziging commit of een testverzoek verstuurt, vangt precies het soort typefout op dat anders veel later in de pipeline als een verwarrende runtime-fout naar boven zou komen.</p>

<h3>Werken met niet-vertrouwde invoer</h3>
<p>Wanneer een collega je een JSON-blob in Slack plakt, of je haalt er een uit een externe API die je niet volledig vertrouwt, betekent lokaal valideren dat je nooit die data naar een externe website hoeft te sturen alleen om te controleren of hij parseert.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "html-entity-encoder-mac": {
    slug: "html-entity-encoder-mac",
    title: "HTML-entiteitencoder en -decoder voor Mac",
    description:
      "Door gebruikers ingevoerde tekst veilig weergeven, of een paginabron vol &amp; en &lt; lezen, komen beide neer op hetzelfde vervelende conversieprobleem.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je debugt waarom een stuk tekst op een webpagina verschijnt als <code>&amp;amp;</code> in plaats van een gewoon ampersand. Of je schrijft HTML met de hand en moet een kleiner-dan-teken escapen zodat de browser het niet interpreteert als het begin van een tag. In beide gevallen heb je te maken met HTML-entiteiten — de kleine reeks tekens die speciale codering nodig hebben om correct weer te geven of om te voorkomen dat ze markup breken.</p>

<p>De gangbare zijn makkelijk te onthouden: <code>&amp;</code> wordt <code>&amp;amp;</code>, <code>&lt;</code> wordt <code>&amp;lt;</code>, <code>&gt;</code> wordt <code>&amp;gt;</code>. Maar zodra je bij gebogen aanhalingstekens, gedachtestreepjes, harde spaties en tekens met accenten komt, houden de entiteitsnamen op intuïtief te zijn en eindig je elke keer met het opzoeken van een referentietabel.</p>

<h2>Een beveiligingskwestie, niet alleen een opmaakkwestie</h2>
<p>HTML-entiteitencodering is niet puur cosmetisch. Het niet coderen van door gebruikers ingevoerde content voordat je die op een webpagina weergeeft, is een klassieke vector voor cross-site scripting. Als je applicatie ooit ruwe tekst moet weergeven — reacties, gebruikersnamen, forminvoer — binnen HTML, is precies begrijpen wat er gecodeerd wordt en hoe onderdeel van veilig coderen, niet alleen van er netjes uitziende uitvoer.</p>

<p>Omgekeerd is decoderen net zo'n veelvoorkomende behoefte: een webpagina scrapen, een RSS-feed parsen, of een geëxporteerd CMS-document lezen levert je vaak entiteitgecodeerde tekst op die je terug moet zetten naar gewone tekens voordat je het ergens anders kunt gebruiken.</p>

<h2>Coderen en decoderen in één stap</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een HTML-entiteitencoder en -decoder tussen zijn 41 developer tools. Plak ruwe tekst om correct escapete HTML-entiteiten te krijgen, of plak gecodeerde markup om de leesbare tekst te zien. Beide richtingen gebeuren direct en volledig offline.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows HTML-entiteitencoder en -decoder tool op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Geschraapte content opschonen</h3>
<p>Tekst uit RSS-feeds, geëxporteerde blogposts of gescrapete HTML komt vaak vol entiteitscodes binnen waar gewone leestekens zouden moeten staan. Deze in bulk decoderen voordat je ze elders opslaat of weergeeft, voorkomt een pagina vol verdwaalde <code>&amp;#8217;</code> waar een apostrof zou moeten staan.</p>

<h3>Markup met de hand schrijven</h3>
<p>Wanneer je handmatig een HTML-template of een e-mailnieuwsbrief bewerkt en een letterlijk hoekje haakje of ampersand in de zichtbare tekst moet opnemen, bespaart het meteen correct coderen je een weergavebug die pas opduikt nadat je de e-mail al hebt verstuurd.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "timestamp-converter-mac": {
    slug: "timestamp-converter-mac",
    title: "Unix-timestampconverter voor Mac",
    description:
      "Een logregel toont 1743984000 en je moet weten of dat drie uur of drie weken geleden was, zonder het handmatig uit te rekenen.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Unix-timestamps zijn perfect voor machines en nutteloos voor mensen. Elke logaggregator, database-record en API-response lijkt tijd op te slaan als een ruw geheel getal dat seconden telt sinds 1 januari 1970, en elke developer heeft ooit geprobeerd met het blote oog te schatten of <code>1725580800</code> recent is of oeroud.</p>

<p>De gebruikelijke terugvaloptie is een snelle Google-zoekopdracht — "1725580800 to date" — wat werkt maar een omweg via de browser toevoegt voor iets wat een opzoekklus van twee seconden zou moeten zijn. Of je schrijft een one-liner in een taalconsole: <code>new Date(1725580800000)</code> in een browser-JS-console, waarbij je moet onthouden om met 1000 te vermenigvuldigen voor milliseconden en hopen dat je seconden en milliseconden niet door elkaar hebt gehaald.</p>

<h2>Seconden versus milliseconden: de klassieke valkuil</h2>
<p>Unix-tijd is meestal in seconden, maar JavaScripts <code>Date</code>-object verwacht milliseconden, en sommige API's (vooral die gebouwd op JavaScript) geven standaard timestamps in milliseconden terug. Deze door elkaar halen geeft je een datum die ofwel wild in de toekomst ligt of vastzit rond het epoch van 1970 — een fout die elke developer minstens één keer heeft gemaakt tijdens het debuggen van een "waarom ziet deze datum er verkeerd uit"-probleem.</p>

<p>Tijdzones voegen nog een laag toe. Een timestamp converteert naar een specifiek moment, maar het weergeven in jouw lokale tijd versus UTC versus de tijdzone van de server kan dezelfde waarde er als drie compleet verschillende tijden laten uitzien, wat er veel toe doet als je probeert een fout aan een deployment te koppelen.</p>

<h2>Converteer direct in beide richtingen</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een timestampconverter die een Unix-timestamp omzet naar een leesbare datum en tijd, en een datum terug omzet naar een timestamp — beide richtingen, geen rekenwerk nodig. Het handelt de ambiguïteit tussen seconden en milliseconden af, zodat jij niet hoeft te raden.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Unix-timestampconverter met datum- en tijduitvoer op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Logs en databases debuggen</h3>
<p>Logaggregators, databaserijen en API-payloads slaan tijd veel vaker op als ruwe getallen dan als leesbare strings. Een handvol timestamps converteren terwijl je een incident traceert, is een kleine taak die tientallen keren voorkomt tijdens elke serieuze debugsessie.</p>

<h3>Planning en verlooplogica</h3>
<p>Cache-verlooptijden, tokenvervaldatums en geplande taak-timestamps zijn stuk voor stuk Unix-tijd onder de motorkap. Snel controleren wat een bepaalde vervalwaarde daadwerkelijk overeenkomt in kloktijd helpt je verifiëren dat je TTL-logica doet wat je denkt dat hij doet.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "markdown-preview-mac-app": {
    slug: "markdown-preview-mac-app",
    title: "Markdown-preview voor Mac — plakken en zien",
    description:
      "Een README of een pull request-beschrijving schrijven in ruwe Markdown betekent gissen hoe de kopteksten, lijsten en codeblokken daadwerkelijk gerenderd worden.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je schrijft een README met geneste opsommingstekens, een paar codeblokken en een tabel die twee benaderingen vergelijkt. Het ziet er prima uit als platte tekst in je editor. Dan push je het naar GitHub en blijkt de tabel scheef uitgelijnd, is een van je codeblokken niet correct gesloten, en begint een genummerde lijst halverwege opnieuw bij 1 vanwege een verdwaalde lege regel. Nu push je kleine fixup-commits alleen om de opmaak goed te krijgen.</p>

<p>Markdown is simpel genoeg om uit het hoofd te schrijven voor basisopmaak, maar tabellen, geneste lijsten en codefences hebben allemaal kleine syntax-eigenaardigheden die enigszins verschillen tussen renderers. GitHub Flavored Markdown is niet identiek aan CommonMark, wat weer niet identiek is aan wat je statische sitegenerator gebruikt. Het gat tussen "ziet er goed uit in mijn hoofd" en "wordt goed weergegeven op de pagina" is precies waar een live preview zijn nut bewijst.</p>

<h2>Waarom committen om te controleren een slechte workflow is</h2>
<p>Een commit pushen alleen om te zien hoe een README wordt weergegeven, dan nog een pushen om een kapotte tabel te herstellen, dan nog een om de fix te herstellen, verstopt je commit-geschiedenis met opmaakruis die niets met de eigenlijke inhoud te maken heeft. Het betekent ook dat elke previewronde net zo lang duurt als een push en een paginaherlading — traag genoeg dat je stopt met controleren en gewoon hoopt dat het er goed uitziet.</p>

<h2>Zie gerenderde uitvoer terwijl je typt</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een Markdown-previewtool die geformatteerde uitvoer weergeeft terwijl je ruwe Markdown plakt of typt. Kopteksten, lijsten, tabellen, links en codeblokken worden allemaal direct gerenderd, zodat je opmaakfouten kunt opvangen voordat ze in een commit terechtkomen.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Markdown-previewtool die geformatteerde tekst weergeeft op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>README's en PR-beschrijvingen schrijven</h3>
<p>Pull request-beschrijvingen en README-bestanden zijn vaak het eerste wat een reviewer of nieuwe bijdrager leest. Controleren dat kopteksten, checklists en gelinkte afbeeldingen correct worden weergegeven voordat je indient, bespaart een ronde van "kun je de opmaak repareren"-reacties.</p>

<h3>Documentatie offline opstellen</h3>
<p>Documentatie schrijven op een vlucht of in een gebied met onbetrouwbaar internet hoeft niet te betekenen dat je je opmaak niet correct kunt bekijken. Een lokale previewtool werkt hetzelfde, of je nu verbonden bent of niet.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "lorem-ipsum-generator-mac": {
    slug: "lorem-ipsum-generator-mac",
    title: "Lorem Ipsum-generator voor Mac — kopieer elke lengte",
    description:
      "Een designmockup of een testfixture vullen met placeholdertekst zou niet elke keer een uitstapje naar een website moeten vereisen.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je bouwt een kaartcomponent en hebt drie alinea's placeholdertekst nodig om te zien hoe het afbreekt. Of je schrijft een testfixture die een lange string nodig heeft om afkapgedrag te controleren. In beide gevallen heb je vultekst nodig, en "asdf asdf asdf" in een tekstveld typen geeft je geen realistische woordlengtes of zinsstructuur om mee te werken.</p>

<p>Lorem Ipsum is al decennialang het standaardantwoord op dit probleem, precies omdat de aan het Latijn ontleende pseudotekst een natuurlijke verdeling van woord- en zinslengtes heeft die echt proza nabootst zonder afleidend of betekenisvol te zijn — het oog van een lezer wordt niet meegetrokken om het daadwerkelijk te lezen, wat precies de bedoeling is als je een layout probeert te beoordelen.</p>

<h2>Meer dan dezelfde alinea kopiëren en plakken</h2>
<p>De meeste developers houden ergens één Lorem Ipsum-alinea bewaard en hergebruiken die overal, wat werkt totdat je een veel langer blok nodig hebt voor een scroll-test, of een veel korter om te controleren hoe een afkap-ellipsis op één regel zich gedraagt. Tekst genereren op exact de lengte die je nodig hebt — een zin, een alinea, meerdere alinea's — is beter dan hetzelfde vaste blok hergebruiken en handmatig bijknippen of dupliceren.</p>

<h2>Genereer precies de lengte die je nodig hebt</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een Lorem Ipsum-generator die placeholdertekst produceert op elke lengte die je layout of testcase vereist, klaar om met één klik te kopiëren. Geen browsertabblad, geen advertentievolle generatorsite, geen wachten tot een pagina laadt alleen om drie zinnen te pakken.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Lorem Ipsum-generator produceert placeholdertekst op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>UI-layouts prototypen</h3>
<p>Voordat echte content bestaat, laat placeholdertekst je beoordelen of een ontwerp gracieus omgaat met wisselende contentlengtes — korte titels, lange titels, alinea's die afbreken naar twee versus vijf regels. Snel tekst op verschillende lengtes genereren versnelt die beoordeling.</p>

<h3>Testfixtures en seed-data</h3>
<p>Geautomatiseerde tests die tekstafkapping, tekenlimieten of overloopgedrag controleren, hebben realistische strings van een bekende lengte nodig. Ze op aanvraag genereren is sneller dan dezelfde placeholderstring hardcoderen in tientallen testbestanden.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "xml-formatter-mac": {
    slug: "xml-formatter-mac",
    title: "XML-formatter en -validator voor Mac",
    description:
      "SOAP-responses en legacy-configuratiebestanden komen nog steeds binnen als niet-ingesprongen XML, en het lezen zonder opmaak is lastiger dan nodig.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>JSON krijgt alle aandacht, maar veel systemen spreken nog steeds XML — SOAP-API's, Android-layoutbestanden, Maven's <code>pom.xml</code>, RSS-feeds, en genoeg enterprise-integraties die hun dataformaat al vijftien jaar niet hebben veranderd. Wanneer een van deze geminificeerd op één regel binnenkomt, is de geneste structuur lezen zonder correcte inspringing echt lastig.</p>

<p>In tegenstelling tot JSON moet XML ook omgaan met namespaces, attributen en zelfsluitende tags, wat handmatige opmaak nog foutgevoeliger maakt. Nestingniveaus verkeerd tellen in een diep gestructureerde SOAP-envelope is makkelijk te doen en lastig op te merken tot er verderop iets breekt.</p>

<h2>Waarom dit in 2026 nog steeds belangrijk is</h2>
<p>Ondanks de dominantie van JSON in nieuw API-ontwerp is XML nergens verdwenen in enterprise-software, overheidssystemen en Android-ontwikkeling. Als je integreert met de betaalgateway van een bank, een legacy verzekeringssysteem, of een oudere SOAP-gebaseerde webservice, moet je uiteindelijk ruwe XML lezen en debuggen — en tegen een ongeformatteerde response turen is geen productieve manier om die tijd te besteden.</p>

<h2>Formatteer en valideer in één keer</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een XML-formatter die geneste elementen correct inspringt en misvormde markup markeert — een niet-gesloten tag, een niet-overeenkomend attribuutaanhalingsteken, een kapotte namespace-declaratie. Plak geminificeerde XML en krijg direct een leesbaar, correct ingesprongen document terug.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows XML-formatter met ingesprongen geneste elementen op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>SOAP en legacy API's debuggen</h3>
<p>SOAP-envelopes verpakken de daadwerkelijke payload in verschillende lagen boilerplate, wat het vinden van het veld waar je om geeft vervelend maakt wanneer alles op één regel staat. De response eerst formatteren verandert een muur van tekst in een navigeerbare boom.</p>

<h3>Configuratie- en buildbestanden beoordelen</h3>
<p>Android's <code>AndroidManifest.xml</code>, Maven's <code>pom.xml</code>, en talloze CI-configuratieformaten zijn onder de motorkap XML. Wanneer een van deze programmatisch wordt gegenereerd of gewijzigd en niet-ingesprongen eindigt, maakt een snelle formatteerronde zowel de diff als de inhoud makkelijker te beoordelen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "cron-expression-helper-mac": {
    slug: "cron-expression-helper-mac",
    title: "Cron-expressiehelper voor Mac",
    description:
      "Een schema-expressie met de hand schrijven en hopen dat hij betekent wat je denkt dat hij betekent, is hoe taken om 3 uur 's nachts draaien in plaats van 3 uur 's middags.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Cron-syntax is vijf velden van getallen en symbolen die op de een of andere manier "elke werkdag om 9 uur behalve feestdagen" of "elke 15 minuten tussen 8 en 6" moet uitdrukken. De velden zijn minuut, uur, dag van de maand, maand en dag van de week, in een volgorde die niemand de eerste keer goed onthoudt, en sterretjes, komma's, streepjes en schuine strepen betekenen allemaal iets anders afhankelijk van hun positie.</p>

<p><code>0 9 * * 1-5</code> ziet er redelijk uit, maar is dat 9 uur 's ochtends of 's avonds, en betekent <code>1-5</code> maandag tot en met vrijdag of iets compleet anders, afhankelijk van of de cron-implementatie zondag als 0 of als 7 telt? Dit verkeerd krijgen in een deploymentpipeline, een back-uptaak, of een geplande rapportage betekent ofwel stille fouten ofwel een taak die op een ongelegen tijdstip afgaat — soms wekenlang zonder dat iemand het merkt.</p>

<h2>Elke cron-implementatie heeft zijn eigen eigenaardigheden</h2>
<p>Standaard Unix-cron, Kubernetes CronJobs, AWS EventBridge en diverse CI-platforms gebruiken allemaal ongeveer dezelfde syntax van vijf velden, maar verschillen op kleine punten — of seconden ondersteund worden, hoe de nummering van de dag van de week werkt, of bepaalde afkortingen zoals <code>@daily</code> geldig zijn. Een schema schrijven dat bij de eerste deploy correct werkt, betekent precies begrijpen welke cron-variant je target.</p>

<h2>Vertaal expressies naar gewone taal</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een cron-expressiehelper die een schema-string neemt en in gewone taal uitlegt wat hij daadwerkelijk betekent, zodat je je bedoeling kunt verifiëren voordat je een geplande taak ergens uitrolt.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows cron-expressiehelper legt een schema-string uit op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verifiëren voordat je deployt</h3>
<p>Een geplande taak die op het verkeerde moment afgaat, is vaak een stille fout — er crasht niets, hij draait gewoon wanneer je dat niet wilde, soms overlappend met een onderhoudsvenster of een database beukend tijdens piekverkeer. De betekenis in gewone taal van een cron-string controleren voordat je een deploymentconfiguratie mergt, vangt dit op voordat het een 2 uur 's nachts-pager wordt.</p>

<h3>Iemand anders' schema lezen</h3>
<p>Een codebase erven met een dozijn bestaande cron-taken betekent uitzoeken wat elk ervan doet voordat je er veilig een kunt wijzigen. Elke expressie snel vertalen is sneller dan vijf cryptische velden één voor één mentaal parsen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "yaml-to-json-mac": {
    slug: "yaml-to-json-mac",
    title: "YAML naar JSON-converter voor Mac",
    description:
      "Kubernetes-manifesten, CI-pipelines en configuratiebestanden spreken allemaal YAML, maar de tooling die je daadwerkelijk nodig hebt om data te inspecteren verwacht meestal JSON.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>YAML is overal in infrastructuur — Kubernetes-manifesten, GitHub Actions-workflows, Docker Compose-bestanden, Ansible-playbooks. Het is leesbaar en compact, tot het moment dat inspringing ambigu wordt, er een tab binnensluipt waar een spatie hoort te staan, of je de data moet voeren aan een tool die alleen JSON begrijpt.</p>

<p>Handmatig converteren tussen de twee is mechanisch maar vervelend: YAML's op inspringing gebaseerde nesting wordt JSON's accolades en haakjes, ongequote YAML-strings hebben aanhalingstekens nodig, en YAML's soepelere syntax (ongequote booleans, meerregelige strings, anchors en references) mapt niet altijd netjes naar JSON's strengere regels.</p>

<h2>Waarom je beide formaten nodig hebt</h2>
<p>Je schrijft misschien een Kubernetes-manifest in YAML omdat het makkelijker te lezen en te versiebeheren is, maar hebt de JSON-equivalent nodig om in een script, een API-call, of een <code>jq</code>-pipeline te voeren die JSON-invoer verwacht. Of je debugt waarom de YAML-configuratie van een CI-pipeline niet parseert zoals je verwacht, en het onderliggende JSON zien maakt de daadwerkelijke nesting ondubbelzinnig op een manier die het witruimte-gevoelige YAML soms niet is.</p>

<h2>Converteer direct tussen formaten</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een YAML naar JSON-converter tussen zijn 41 developer tools. Plak YAML en krijg direct de equivalente JSON-structuur, met correcte nesting en behouden types — geen handmatige herformattering, geen gissen naar inspringingsniveaus.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows YAML naar JSON-converter tool op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kubernetes- en CI-configuraties debuggen</h3>
<p>Wanneer een manifest zich onverwacht gedraagt, verwijdert het zien van de onderliggende JSON-structuur elke ambiguïteit over hoe de YAML daadwerkelijk genest was — nuttig wanneer een verkeerd geplaatste inspringing stilletjes heeft veranderd welke key bij welk bovenliggend object hoort.</p>

<h3>Configuratie invoeren in scripts</h3>
<p>Veel scripting- en automatiseringstools werken natuurlijker met JSON dan met YAML. Een configuratiebestand één keer converteren en de JSON-uitvoer verderop doorgeven is vaak simpeler dan elk script in je pipeline leren om YAML direct te parsen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "text-diff-tool-mac": {
    slug: "text-diff-tool-mac",
    title: "Tekst-diff-tool voor Mac — vergelijk twee teksten naast elkaar",
    description:
      "Twee versies van een configuratiebestand, een e-mailconcept, of een alinea tekst lijken bijna identiek, en het ene veranderde woord vinden is verrassend lastig met het blote oog.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Git handelt diffs prachtig af voor code die al in een repository wordt bijgehouden. Maar veel tekstvergelijkingen gebeuren volledig buiten versiebeheer om: twee versies van een juridische clausule die een advocaat teruggestuurd heeft, een API-response voor en na een backend-wijziging, een alinea marketingtekst die een collega "net een beetje bijgeschaafd" heeft. Beide versies naast elkaar lezen en proberen het verschil met het blote oog te spotten, is traag en onbetrouwbaar, vooral bij langere tekstblokken.</p>

<p>Het menselijk oog is slecht in dit soort vergelijkingen omdat het niet op zoek is naar verschillen — het leest voor betekenis, en twee bijna identieke alinea's lezen allebei als "correct" tenzij je specifiek stopt en ze teken voor teken tegen elkaar controleert.</p>

<h2>Wanneer git diff niet beschikbaar is</h2>
<p>Niet alles wat de moeite waard is om te vergelijken, leeft in een git-repository. Configuratiewaarden geplakt uit twee verschillende omgevingen, twee conceptversies van een e-mail, of het voor-en-na van een zoek-en-vervang waarvan je niet zeker weet of je het correct hebt uitgevoerd, hebben allemaal vergelijkingshulpmiddelen nodig die werken op willekeurig geplakte tekst, niet alleen op bijgehouden bestanden.</p>

<h2>Vergelijk twee tekstblokken direct</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een tekst-diff-tool die precies markeert wat er veranderd is tussen twee geplakte tekstblokken — toevoegingen, verwijderingen en wijzigingen visueel aangegeven, zodat je niet elk teken zelf hoeft te lezen.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows tekst-diff-tool vergelijkt twee tekstblokken op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configuratie tussen omgevingen vergelijken</h3>
<p>Wanneer staging en productie zich anders gedragen, onthult het naast elkaar vergelijken van de daadwerkelijke configuratiewaarden vaak sneller de boosdoener dan door deploymentlogs lezen — een enkele omgevingsvariabele met een typefout of een verouderde waarde valt meteen op zodra hij gemarkeerd is.</p>

<h3>Bewerkte tekst beoordelen</h3>
<p>Wanneer iemand een "licht bewerkte" versie van een document terugstuurt, verandert precies zien wat er veranderd is — in plaats van het geheel opnieuw te lezen in de hoop iets op te merken — een trage proefleesronde in een snelle visuele controle.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "number-base-converter-mac": {
    slug: "number-base-converter-mac",
    title: "Talstelselconverter voor Mac — hex, binair, octaal, decimaal",
    description:
      "Een geheugenadres, een kleurwaarde, of een bestandsrechtencode lezen betekent voortdurend vertalen tussen decimaal en welk talstelsel de context ook vereist.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een geheugenadres verschijnt als <code>0x7ffee23a1c40</code>. Een bestandsrecht is <code>0755</code>. Een bitmasker in de documentatie van een driver is in binair geschreven. Een kleurkanaalwaarde moet van decimaal naar tweecijferig hex geconverteerd worden. Geen van deze conversies is op zich moeilijk, maar ze herhaaldelijk in je hoofd doen — vooral binair naar hex, wat vereist dat je bits in nibbles groepeert — is trager en foutgevoeliger dan het voor zoiets mechanisch zou moeten zijn.</p>

<p>Low-level programmeren, embedded ontwikkeling, netwerken, en zelfs alledaagse webontwikkeling (hexkleuren, wederom) vereisen allemaal regelmatig genoeg wisselen tussen talstelsels dat een mentale opzoektabel voor hexcijfers je maar tot een bepaald punt brengt zodra getallen groter worden dan een byte of twee.</p>

<h2>Waar mensen over struikelen</h2>
<p>Octaal is de sluwe. Een bestandsrecht zoals <code>644</code> ziet eruit als een decimaal getal maar is eigenlijk grondtal 8, en het als decimaal behandelen bij het erover redeneren leidt tot verwarring over wat het daadwerkelijke bitpatroon is. Binair wordt onhandelbaar voorbij 16 bits — een 32-bit waarde in binair is tweeëndertig tekens lang, lastig te lezen en makkelijk verkeerd te tellen wanneer je specifieke bits probeert te isoleren voor een vlagcontrole.</p>

<h2>Converteer tussen alle vier talstelsels tegelijk</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een talstelselconverter die een waarde tegelijkertijd in decimaal, hexadecimaal, octaal en binair toont. Typ een getal in elk talstelsel en zie alle vier weergaven samen bijgewerkt worden — geen aparte conversie voor elk paar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows talstelselconverter met hex, binair, octaal en decimaal op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Low-level en embedded werk</h3>
<p>Registerwaarden, bitmaskers en geheugenadressen lezen in embedded firmware of systeemprogrammering betekent vloeiend wisselen tussen hex en binair. Beide tegelijk zien, naast decimaal, verwijdert een laag handmatige vertaling uit een toch al detailrijke taak.</p>

<h3>Bestandsrechten en netwerken</h3>
<p>Unix-bestandsrechten, subnetmaskers, en diverse binaire vlaggen in netwerkprotocollen worden vaak uitgedrukt in octaal of binair maar overwogen in decimaal. Een snelle conversie bevestigt precies wat een rechtenstring of vlagbyte voorstelt voordat je hem wijzigt.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "csv-to-json-mac": {
    slug: "csv-to-json-mac",
    title: "CSV naar JSON-converter voor Mac",
    description:
      "Een spreadsheetexport moet gestructureerde data worden voor een API-call of een testfixture, en er elke keer een eenmalig script voor schrijven is overkill.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Iemand van sales exporteert een spreadsheet als CSV en vraagt je om het "gewoon in het systeem te laden." Het systeem verwacht JSON. Dus schrijf je snel een Python- of Node-script met een CSV-parsing-library, mep je de kolommen naar velden, handel je de headerrij af, en hoop je dat geen van de waarden een komma bevat die je naïeve split-op-komma-logica breekt (dat gebeurt meestal wel, verstopt in een gequote veld).</p>

<p>Dit is een taak die developers keer op keer oplossen, elke keer met net iets ander wegwerpcode, omdat CSV voortdurend opduikt als exportformaat vanuit spreadsheets, databases en analysetools, terwijl de meeste moderne tooling en API's JSON verwachten.</p>

<h2>CSV's bedrieglijke eenvoud</h2>
<p>CSV lijkt triviaal — splits op komma's, splits op nieuwe regels, klaar. Dan kom je een veld tegen dat een komma bevat, verpakt in aanhalingstekens volgens de spec, en breekt je naïeve parser. Of een veld bevat een ingebedde nieuwe regel tussen aanhalingstekens, wat een simpele regel-voor-regel lezing niet correct kan afhandelen. CSV-parsing goed doen vereist eigenlijk het respecteren van de quotingregels, wat waarom een speciale converter beter is dan het elke keer vanaf nul schrijven.</p>

<h2>Converteer CSV naar gestructureerde JSON</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat een CSV naar JSON-converter die gequote velden en headerrijen correct afhandelt, waardoor een spreadsheetexport verandert in een array van JSON-objecten, klaar om te plakken in een testfixture, een requestbody, of een script.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows CSV naar JSON-converter tool op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Spreadsheetdata laden in API's</h3>
<p>Wanneer een eenmalige data-import het schrijven en onderhouden van een volledig script niet rechtvaardigt, krijg je met het direct converteren van de CSV-export naar JSON en plakken in een API-testtool of een database seed-bestand de klus in een fractie van de tijd geklaard.</p>

<h3>Testfixtures bouwen van echte data</h3>
<p>Een steekproef van productie-achtige data als CSV exporteren vanuit een spreadsheet en converteren naar JSON is een snelle manier om realistische testfixtures te genereren zonder JSON-objecten met de hand veld voor veld te schrijven.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "mac-developer-tools-no-internet": {
    slug: "mac-developer-tools-no-internet",
    title: "Mac developer tools die werken zonder internet",
    description:
      "Werken op een vlucht, in een kelder-serverruimte, of gewoon op wankele koffiezaak-wifi zou geen toegang moeten kosten tot de hulpmiddelen die je constant gebruikt.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Probeer een JSON-blob te formatteren op een vliegtuig zonder wifi en je merkt al snel hoeveel van je dagelijkse developer-hulpmiddelen eigenlijk vermomde websites zijn. jwt.io, regex101, JSON-formatters, Base64-tools — allemaal uitstekend, allemaal volstrekt onbruikbaar zodra je verbinding wegvalt. Je eindigt ofwel zonder, ofwel prutsend met Terminal-commando's die je half onthoudt.</p>

<p>Dit is niet alleen een ongemak tijdens het reizen. Serverruimtes, beveiligde faciliteiten, en air-gapped omgevingen hebben vaak bewust geen internettoegang. Zelfs een wankel kantoor-wifinetwerk kan een taak van twee seconden veranderen in een frustrerende wachttijd voor een pagina die niet laadt.</p>

<h2>De verborgen afhankelijkheid in je toolkit</h2>
<p>De meeste developers realiseren zich niet hoeveel van hun dagelijkse tooling afhangt van een live verbinding totdat die wegvalt. Een snelle mentale audit is onthullend: hoeveel van de hulpmiddelen die je meerdere keren per dag pakt, zijn eigenlijk browsertabbladen gericht op de server van iemand anders? Voor de meeste developers is het antwoord meer dan ze verwachten.</p>

<p>Naast het beschikbaarheidsprobleem is er ook een dataprobleem. Tokens, inloggegevens of interne data naar een externe website sturen om te decoderen of te formatteren betekent vertrouwen op de beveiligings- en privacypraktijken van die website — vertrouwen dat misschien niet gerechtvaardigd is, en dat veel bedrijfsbeveiligingsbeleid expliciet verbiedt.</p>

<h2>Een toolkit die nooit een verbinding nodig heeft</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bundelt 41 developer tools in een native macOS-app die volledig offline draait — geen uitzonderingen, geen "vereist internet voor deze ene functie." JSON-formattering, JWT-decodering, hashing, regex-testen, coderen en decoderen, en meer werken allemaal identiek, of je nu op glasvezel zit of op dertigduizend voet hoogte zonder signaal.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows offline developer tools app draait op macOS zonder netwerkverbinding" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Werken in beveiligde of air-gapped omgevingen</h3>
<p>Sommige ontwikkeling vindt plaats in omgevingen waar internettoegang beperkt of volledig afwezig is door beleid — defensiecontracten, financiële infrastructuur, bepaald overheidswerk. Tools die een live verbinding vereisen, zijn daar simpelweg niet bruikbaar, hoe goed ze ook zijn.</p>

<h3>Reizen zonder productiviteit te verliezen</h3>
<p>Vluchten, treinen door tunnels, en werklocaties op afstand met onbetrouwbare connectiviteit zouden niet moeten bepalen welke developer-taken je wel en niet kunt uitvoeren. Een offline-first toolkit haalt connectiviteit van de lijst met dingen die je kunnen vertragen.</p>

<h3>Privacy als bijeffect van offline zijn</h3>
<p>Een app die nooit netwerkverzoeken doet, kan je data niet lekken naar een server, opzettelijk of anderszins. Voor developers die met tokens, geheimen, of eigen informatie werken, is offline niet alleen een kwestie van beschikbaarheid — het is een betekenisvolle privacygarantie.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "clipboard-formatter-mac": {
    slug: "clipboard-formatter-mac",
    title: "Klembordformatter voor Mac — automatische detectie en toolsuggesties",
    description:
      "Beslissen welke formatter, decoder of converter je moet pakken, is zelf al een kleine beslissing die je tientallen keren per dag neemt zonder de overhead op te merken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je kopieert een string. Voordat je er iets mee kunt doen, moet je uitzoeken wat het is en welke tool het afhandelt. Is dit een JWT? Base64? Een hexkleur? Een gewone UUID? Voor een ervaren developer gebeurt deze herkenning bijna direct, maar het is nog steeds een kleine cognitieve stap tussen iets kopiëren en er daadwerkelijk naar handelen — en het is een stap die elke keer opnieuw plaatsvindt.</p>

<p>Vermenigvuldig die herkennings-en-navigatiestap over de tientallen kleine hulptaken in een typische dag, en het telt op tot een verrassende hoeveelheid mentale overhead die alleen besteed wordt aan jezelf naar de juiste tool leiden, voordat je zelfs maar aan de eigenlijke taak begonnen bent.</p>

<h2>Patroonherkenning is een oplosbaar probleem</h2>
<p>JWT's hebben een kenmerkende driedelige, door punten gescheiden structuur met een herkenbare Base64url-header. Hexkleuren beginnen met een hekje en zijn precies zes of acht hextekens lang. UUID's volgen een strikt acht-vier-vier-vier-twaalf gestreept formaat. JSON begint met een accolade of haakje. Deze patronen zijn precies genoeg dat software ze net zo snel kan herkennen als een ervaren developer, zonder dat de developer de identificatie elke keer handmatig hoeft te doen.</p>

<h2>Laat het klembord de tool voorstellen</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> leest je klembord wanneer je het opent en stelt automatisch de bijpassende tool voor. Kopieer een JWT en de decoder is al gemarkeerd. Kopieer JSON en de formatter is één klik verwijderd. Kopieer een hexkleur en de kleurconverter staat klaar. De herkenningsstap gebeurt direct, nog voordat je de zijbalk opent.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows klemborddetectie stelt de bijpassende developer tool voor op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Minder klikken, minder beslismoeheid</h3>
<p>De stap "welke tool heb ik nodig" verwijderen uit een repetitieve taak klinkt op zichzelf minimaal, maar over tientallen dagelijkse interacties verwijdert het een aanzienlijke hoeveelheid wrijving — wrijving die je anders zou aanmoedigen om de data gewoon ongeformatteerd te laten omdat het pakken van de juiste tool te veel moeite leek.</p>

<h3>Nuttig voor tools waarvan je vergeet dat ze bestaan</h3>
<p>Met 41 beschikbare tools is het makkelijk om te vergeten dat een specifieke converter of generator überhaupt bestaat. Klembordgebaseerde suggesties brengen de relevante tool naar boven, zelfs wanneer je er niet aan zou hebben gedacht om te zoeken, wat vaak waardevoller is dan de tijd die je bespaart op tools die je al dagelijks gebruikt.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "string-escape-unescape-mac": {
    slug: "string-escape-unescape-mac",
    title: "String escapen en unescapen voor Mac — JSON, HTML, URL",
    description:
      "Het ene stringformaat in het andere embedden betekent aanhalingstekens, schuine strepen en speciale tekens correct escapen, of je parser laten stikken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je moet een JSON-string embedden in een andere JSON-string — misschien een logbericht dat zelf een JSON-payload bevat. Of je schrijft een shell-commando dat een string met aanhalingstekens erin bevat. Of je bouwt een URL die een andere URL als queryparameter moet meedragen. Elk van deze situaties vereist escapen: tekens die anders als syntax geïnterpreteerd zouden worden, omzetten naar een vorm die als letterlijke data behandeld wordt.</p>

<p>Verschillende contexten escapen anders. JSON escapet aanhalingstekens met een backslash en stelt speciale tekens zoals nieuwe regels voor als <code>\\n</code>. Shell-escaping hangt af van welke quotingstijl je gebruikt. URL-escaping percentcodeert gereserveerde tekens totaal anders dan de andere twee. Deze door elkaar halen — JSON-escaping toepassen waar URL-escaping nodig was — levert uitvoer op die er bijna goed uitziet en op verwarrende manieren faalt.</p>

<h2>Het probleem van dubbel escapen</h2>
<p>Een van de meest voorkomende bugs op dit gebied is dubbel escapen: een string wordt één keer geëscaped door je code en nogmaals door een library of framework dat ervan uitgaat dat hij nog ruw is, waardoor één backslash er twee wordt en de data stilletjes corrumpeert. Dit diagnosticeren vereist stap voor stap unescapen om precies te zien waar de extra laag is geïntroduceerd — vervelend om met de hand te doen, vooral bij een lange string.</p>

<h2>Escapen en unescapen voor meerdere formaten</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> bevat string-escapetools die JSON, HTML en URL-formaten dekken tussen zijn 41 developer tools. Plak een ruwe string om hem correct geëscaped te zien voor een bepaalde context, of plak een geëscapete string om de originele ruwe waarde te zien.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows string escape- en unescape-tool op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Strings in strings embedden</h3>
<p>Een JSON-payload bouwen die zelf een JSON-string als veldwaarde bevat, of een logbericht construeren dat willekeurige gebruikersinvoer veilig moet bevatten, vereisen beide correcte escaping om de buitenste structuur niet te corrumperen.</p>

<h3>Dubbel geëscapete data diagnosticeren</h3>
<p>Wanneer een string eruitziet alsof hij vaker geëscaped is dan zou moeten, onthult hem laag voor laag unescapen precies waar de extra codering is geïntroduceerd, wat meestal de snelste manier is om de verantwoordelijke code te achterhalen.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },

  "mac-developer-utility-menu-bar": {
    slug: "mac-developer-utility-menu-bar",
    title: "Mac developer-hulpprogramma in de menubalk — snelle toegang tot 41 tools",
    description:
      "Het Dock is voor apps waar je naar kijkt. De menubalk is voor tools die je in seconden gebruikt en wegklikt — en de meeste developer-hulpmiddelen horen in die tweede categorie.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Denk na over hoe je een JSON-formatter of een UUID-generator daadwerkelijk gebruikt. Je opent het niet, bewondert de interface, en gaat er lekker voor zitten. Je opent het, doet één kleine taak, en sluit het weer — de hele interactie duurt een handvol seconden. Dat gebruikspatroon past slecht bij een Dock-icoon, wat een app impliceert waar je naartoe schakelt en tijd in doorbrengt, en veel beter bij de menubalk, die precies gebouwd is voor dit soort snelle in-en-uit-interactie.</p>

<p>Dock-gebaseerde apps strijden ook om ruimte met alles wat je al open hebt staan — Cmd-Tab doorloopt ze, Mission Control groepeert hun vensters, en de juiste vinden tussen een dozijn open apps kost een moment visueel scannen. Een menubalk-icoon zit op een vaste, voorspelbare plek die nooit begraven raakt.</p>

<h2>Waarom locatie meer uitmaakt dan het lijkt</h2>
<p>De waarde van een developer-hulpprogramma staat omgekeerd evenredig met hoeveel wrijving er tussen jou en het gebruik ervan staat. Een tool die tien seconden kost om te openen, kost meer dan die tien seconden — het kost de mentale context die je verliest door uit je huidige taak te stappen om het te gaan zoeken. Menubalkplaatsing minimaliseert die kosten door de tool visueel aanwezig en altijd één klik verwijderd te houden, zonder schermruimte of Dock-plek in te nemen wanneer je hem niet gebruikt.</p>

<h2>41 tools, één menubalk-icoon</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> leeft in je menubalk en geeft je toegang tot 41 developer tools — formatters, encoders, generators, converters en text tools — zonder ooit een Dock-icoon of een apart venster nodig te hebben. Klik op het icoon, kies een tool uit de zijbalk, doe wat je moet doen, en het gaat weer uit je weg.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows menubalk-icoon geeft snelle toegang tot 41 developer tools op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Geen Dock-voetafdruk</h3>
<p>Voor developers die een strak Dock aanhouden met alleen de apps die ze voor langere sessies gebruiken — een editor, een browser, een terminal — past een menubalk-hulpprogramma van nature bij die filosofie. Het is er als het nodig is en verder onzichtbaar.</p>

<h3>Los venster wanneer je het nodig hebt</h3>
<p>Sommige taken — een reeks regexpatronen achter elkaar testen, of een reeks kleuren converteren — hebben baat bij een persistent venster in plaats van een menubalk-dropdown. Bellows ondersteunt beide modi, zodat snelle opzoekingen in de menubalk blijven terwijl langere sessies een eigen venster naast je editor krijgen.</p>

<h3>Recente items houden je gangbare tools bovenaan</h3>
<p>Met 41 beschikbare tools zouden de tools die je het vaakst gebruikt niet dezelfde hoeveelheid zoeken moeten vereisen als de tools die je zelden gebruikt. Recent gebruikte tools verschijnen automatisch bovenaan, zodat je dagelijkse gewoontes na verloop van tijd de interface vormgeven in plaats van andersom.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Haal Bellows in de Mac App Store</a></p>
`,
  },
};
