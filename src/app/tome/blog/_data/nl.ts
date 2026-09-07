import type { ArticleSet } from "./index";

export const nlArticles: ArticleSet = {
  "best-sqlite-browser-mac": {
    slug: "best-sqlite-browser-mac",
    title: "Beste SQLite Browser voor Mac",
    description:
      "De meeste SQLite-browsers op Mac zijn cross-platform Electron-apps die misplaatst aanvoelen. Een browser vinden die zich écht als een Mac-app gedraagt, kost meer moeite dan het zou moeten.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een SQLite-database die je moet inspecteren. Je zoekt naar een browser, downloadt iets veelbelovends en merkt meteen dat het geen native macOS-functies ondersteunt — geen documenttabs, geen systeem-donkere modus, geen Spotlight-integratie. Het voelt als een Linux-app in een Mac-jasje. Dit is de realiteit van de meeste SQLite-browsers die vandaag beschikbaar zijn.</p>

<h2>Waarom de meeste SQLite-browsers tekortschieten op Mac</h2>
<p>De meerderheid van databasetools is gebouwd met Electron of Java, ontworpen om overal te draaien en nergens voor geoptimaliseerd. Ze negeren de Mac-conventies waar je op vertrouwt: slepen en neerzetten vanuit Finder, correct vensterbeheer, soepel scrollen door grote resultatensets. Je vecht uiteindelijk tegen de tool in plaats van je op je data te richten.</p>
<p>DB Browser for SQLite is open source en functioneel, maar het is een Qt-toepassing — vreemde sneltoetsen, niet-native bestandsdialogen en geen integratie met de rest van je macOS-workflow. TablePlus ziet er beter uit, maar richt zich op elke database-engine, waardoor SQLite aanvoelt als een bijzaak.</p>

<h2>Een SQLite-browser die vanaf de basis voor Mac is gebouwd</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> is een native macOS SQLite-browser die specifiek is gebouwd om SQLite-databases te openen, te doorbladeren en te bewerken. Het gebruikt AppKit en Swift — geen Electron, geen cross-platform compromis. Het start direct op, respecteert je systeemweergave en werkt zoals Mac-apps horen te werken.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — native SQLite browser for Mac showing tables and query editor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Blader door tabellen, views, indexen en triggers</h3>
<p>Open elk .db-, .sqlite- of .sqlite3-bestand en zie meteen elke tabel, view, index en trigger in je database. Klik op een tabel om de inhoud te doorbladeren met snelle, native scrolling. Geen wachten tot een webweergave duizenden rijen rendert.</p>

<h3>Bewerk data direct inline</h3>
<p>Klik op een cel om deze rechtstreeks te bewerken. Voeg nieuwe rijen in, verwijder bestaande, of maak volledig nieuwe tabellen met een visuele editor — geen SQL nodig voor basisbewerkingen. Wanneer je toch SQL nodig hebt, bevat Tome een query-editor met syntaxismarkering en auto-aanvulling.</p>

<h3>Documentgebaseerd — open meerdere databases naast elkaar</h3>
<p>Tome is documentgebaseerd, wat betekent dat elke database in zijn eigen venster of tab opent. Vergelijk staging- en productiedatabases naast elkaar, of houd een referentiedatabase open terwijl je aan een andere werkt. Het werkt precies zoals elke documentgebaseerde Mac-app — omdat het er een is.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "view-sqlite-database-mac": {
    slug: "view-sqlite-database-mac",
    title: "Hoe je een SQLite-database bekijkt op Mac",
    description:
      "SQLite-bestanden zitten overal op je Mac — app-data, Core Data-opslag, browsegeschiedenis — maar macOS heeft geen ingebouwde manier om ze te openen en te bekijken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een .sqlite-bestand gevonden in je projectmap of ergens diep in de container van een app. Je dubbelklikt erop en macOS heeft geen idee wat het ermee moet doen. Je zou Terminal kunnen openen en <code>sqlite3 mydatabase.db</code> typen, maar tabulaire data lezen in een terminalvenster is vervelend — geen kolomuitlijning, geen scrollen, geen manier om snel honderden rijen te overzien.</p>

<h2>De Terminal-aanpak en de beperkingen ervan</h2>
<p>De ingebouwde <code>sqlite3</code> command-line tool wordt met elke Mac meegeleverd. Het werkt, technisch gezien. Je kunt <code>.tables</code> uitvoeren om tabellen te tonen en <code>SELECT * FROM tablename;</code> om rijen te dumpen. Maar de output is ruwe tekst. Brede tabellen lopen ongemakkelijk door. Er is geen manier om een waarde aan te klikken en te bewerken. En als je een designer, product manager, of iemand bent die niet in Terminal leeft, is dit geen realistische workflow.</p>
<p>Je zou het bestand kunnen openen in een teksteditor, maar SQLite-databases zijn binair — je ziet verminkte tekens, niet je data.</p>

<h2>Bekijk elke SQLite-database visueel met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> geeft je een echte visuele interface voor SQLite-databases op Mac. Sleep een .db-, .sqlite- of .sqlite3-bestand naar het app-icoon of gebruik Bestand → Open, en je database verschijnt direct — tabellen weergegeven in een zijbalk, data in een scrollbaar raster.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome showing a SQLite database with tables and row data" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zie je schema in één oogopslag</h3>
<p>Elke tabel, view, index en trigger staat in de zijbalk. Klik op een tabel om de rijen te zien. Klik op een view om de resultaten te zien. Geen commando's om te onthouden — gewoon aanwijzen en klikken.</p>

<h3>Voer queries uit wanneer nodig</h3>
<p>Voor alles wat verder gaat dan bladeren, staat Tome's SQL-query-editor klaar. Deze bevat syntaxismarkering en auto-aanvulling voor tabel- en kolomnamen, zodat je sneller queries schrijft dan in Terminal, zonder te gokken naar kolomnamen uit je geheugen.</p>

<h3>Veelvoorkomende toepassingen</h3>
<p>Een iOS- of Android-app debuggen die data opslaat in SQLite. De outputdatabase van een webscraper inspecteren. Een Django- of Rails-ontwikkeldatabase controleren. Browsegeschiedenis of bladwijzers bekijken die in SQLite zijn opgeslagen. Al deze zaken worden eenvoudig — open het bestand, zie de data.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "native-sqlite-editor-mac": {
    slug: "native-sqlite-editor-mac",
    title: "Native SQLite-editor voor Mac — Zonder Electron",
    description:
      "Op Electron gebaseerde databasetools verbruiken honderden megabytes RAM alleen om een tabel te tonen. Een native macOS-editor verandert wat lichtgewicht eigenlijk betekent.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je opent je databasetool en Activiteitenweergave laat zien dat het 400 MB RAM opslokt nog voordat je een bestand hebt geladen. De interface hapert bij het scrollen door een grote tabel. Sneltoetsen komen niet overeen met wat elke andere Mac-app gebruikt. Dit gebeurt er wanneer je SQLite-editor eigenlijk een webbrowser is die doet alsof hij een desktop-app is.</p>

<h2>Het Electron-probleem</h2>
<p>Electron-apps bundelen een volledige Chromium-browser om hun interface te renderen. Voor een database-editor — een app die vooral tabellen met tekst weergeeft — is dit extreme overhead. Je krijgt trage opstarttijden, hoog geheugengebruik en een interface die nooit helemaal goed voelt op macOS. Bestandsdialogen zien er anders uit. Tekstweergave klopt net niet. De app verschijnt niet correct in Finder's "Open met"-menu.</p>
<p>Sommige ontwikkelaars kiezen voor Electron omdat het hen toelaat vanuit één codebase te leveren voor Mac, Windows en Linux. Dat is een redelijke zakelijke beslissing, maar jij bent degene die de prestatietol betaalt telkens wanneer je een database opent.</p>

<h2>Tome: gebouwd met AppKit, geen webbrowser</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> is een native macOS-toepassing gebouwd met Swift en AppKit. Het gebruikt dezelfde frameworks als Finder, Xcode en elke andere first-party Apple-app. Het resultaat is een SQLite-editor die binnen een seconde opstart, soepel scrollt door tienduizenden rijen en een fractie gebruikt van het geheugen dat een Electron-app nodig zou hebben.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome native macOS SQLite editor with sidebar and data grid" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Echte macOS-integratie</h3>
<p>Tome registreert zich als handler voor .db-, .sqlite- en .sqlite3-bestanden. Dubbelklik op een database in Finder en het opent direct. Sleep bestanden naar het dock-icoon. Gebruik macOS-tabs en vensterbeheer. Alles werkt zoals je van een Mac-app verwacht, omdat het een Mac-app is.</p>

<h3>Bewerken zonder SQL te schrijven</h3>
<p>Klik op een willekeurige cel om de waarde inline te bewerken. Voeg rijen in, verwijder rijen en maak nieuwe tabellen met een visuele editor. Wanneer je SQL nodig hebt, heeft de ingebouwde query-editor syntaxismarkering en auto-aanvulling — maar voor dagelijkse bewerkingen hoef je er nooit aan te komen.</p>

<h3>Lichtgewicht van ontwerp</h3>
<p>Tome doet één ding goed: SQLite. Het probeert niet te verbinden met PostgreSQL, MySQL of MongoDB. Door zich exclusief op SQLite te richten, is elke functie geoptimaliseerd voor het formaat waar je daadwerkelijk mee werkt.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "db-browser-alternative-mac": {
    slug: "db-browser-alternative-mac",
    title: "DB Browser for SQLite-alternatief op Mac",
    description:
      "DB Browser for SQLite werkt, maar de Qt-interface voelt vreemd aan op macOS — verkeerde sneltoetsen, niet-native bestandsdialogen en geen integratie met de rest van je workflow.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>DB Browser for SQLite (DB4S) is de gangbare gratis tool om SQLite-databases te bekijken. Het is open source, cross-platform en bestaat al jaren. Maar als je het op een Mac gebruikt, heb je de wrijving vast al gemerkt: Cmd+Q werkt soms niet zoals verwacht, bestandsdialogen zien eruit alsof ze bij een ander besturingssysteem horen, en de interface komt nooit helemaal overeen met je andere apps. Het werkt — maar het voelt niet goed.</p>

<h2>Waar DB Browser tekortschiet op Mac</h2>
<p>DB4S is gebouwd met Qt, een cross-platform UI-framework. Op Mac betekent dit dat de app geen native macOS-bedieningselementen gebruikt. Je merkt het aan kleine dingen: de tabbalk komt niet overeen met die van Safari, scrollfysica voelt vreemd, en er is geen Overdracht, Spotlight-integratie of goede ondersteuning voor donkere modus. De app ondersteunt ook geen macOS-documentarchitectuur, dus je kunt geen meerdere databases openen in native tabs.</p>
<p>Prestaties zijn een ander probleem. Het openen van een database met een grote tabel kan traag aanvoelen, en de UI hangt af en toe tijdens het uitvoeren van queries. Voor een desktop-app in 2026 verwachten gebruikers betere responsiviteit.</p>
<p>Niets hiervan maakt DB4S een slechte tool — het is uitstekend in wat het is. Maar als je op een Mac zit en iets wilt dat native aanvoelt, laat het een gat achter.</p>

<h2>Tome: een native macOS-alternatief</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> vult dat gat. Het is een native SQLite-browser en -editor die specifiek voor macOS is gebouwd met Swift en AppKit. Het doet alles wat DB Browser doet voor dagelijks gebruik — tabellen doorbladeren, data bewerken, queries uitvoeren — maar verpakt in een interface die thuishoort op je Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome as a native alternative to DB Browser for SQLite on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Alles waarvoor je DB Browser gebruikt, maar native</h3>
<p>Blader door tabellen, views, indexen en triggers in een overzichtelijke zijbalk. Bekijk rijgegevens in een snel, scrollbaar raster. Bewerk cellen inline zonder SQL te schrijven. Voeg rijen in en verwijder ze met één klik. Maak nieuwe tabellen met een visuele editor in plaats van CREATE TABLE-statements handmatig te schrijven.</p>

<h3>SQL-query-editor wanneer je hem nodig hebt</h3>
<p>Tome bevat een volledige SQL-query-editor met syntaxismarkering en auto-aanvulling voor je tabel- en kolomnamen. Voer SELECT, UPDATE, DELETE of elke andere query uit en zie resultaten direct.</p>

<h3>Documentgebaseerde workflow</h3>
<p>In tegenstelling tot DB4S gebruikt Tome de documentgebaseerde architectuur van macOS. Elke database opent in zijn eigen venster of tab. Je kunt meerdere databases tegelijk open hebben, naast elkaar geplaatst, en ertussen wisselen zoals je tussen documenten wisselt in elke andere Mac-app.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "tableplus-alternative-mac-sqlite": {
    slug: "tableplus-alternative-mac-sqlite",
    title: "TablePlus-alternatief voor Mac — Alleen SQLite",
    description:
      "TablePlus ondersteunt elke database, wat betekent dat SQLite nooit de volle aandacht krijgt. Als SQLite alles is wat je nodig hebt, staat de extra complexiteit alleen maar in de weg.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>TablePlus is een goed ontworpen databaseclient die PostgreSQL, MySQL, SQLite, Redis, MongoDB en meer ondersteunt. Het is oprecht goede software. Maar als je alleen met SQLite-bestanden werkt, navigeer je door verbindingsdialogen, driverinstellingen en interface-elementen die bestaan voor databases die je nooit zult gebruiken. Het is alsof je een Zwitsers zakmes koopt terwijl je alleen het lemmet nodig hebt.</p>

<h2>Wanneer een multi-databasetool te veel is</h2>
<p>Elke keer dat je TablePlus opent, zie je een verbindingsbeheerder die is ontworpen voor externe databaseservers. Voor SQLite — een lokale, bestandsgebaseerde database — voegt deze workflow onnodige stappen toe. Je hebt geen verbindingsreeksen, poorten of inloggegevens nodig. Je hoeft alleen een bestand te openen.</p>
<p>TablePlus gebruikt ook een abonnementsmodel dat de brede functieset weerspiegelt. Als je geen verbinding maakt met PostgreSQL of MySQL, betaal je voor mogelijkheden die je niet gebruikt. De gratis versie beperkt je tot een bepaald aantal open tabs en rijen, wat frustrerend kan zijn tijdens actieve ontwikkeling.</p>
<p>De interface, hoewel gepolijst, is ontworpen om elke ondersteunde database te accommoderen. SQLite-specifieke functies zoals het doorbladeren van triggers of het inspecteren van de interne structuur van het bestand komen op de achtergrond te staan ten opzichte van functies die meer belang hebben voor server-gebaseerde databases.</p>

<h2>Tome: speciaal gebouwd voor SQLite op Mac</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> is een native macOS-app die één ding doet: SQLite. Geen verbindingsbeheerders, geen driverconfiguratie, geen functies voor databases die je niet gebruikt. Open een .db-, .sqlite- of .sqlite3-bestand en begin direct te werken.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — focused SQLite browser as an alternative to TablePlus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bestandsgerichte workflow</h3>
<p>Dubbelklik op een SQLite-bestand in Finder en Tome opent het. Sleep een bestand naar het dock-icoon. Gebruik Bestand → Open. Geen verbindingsinstellingen, geen serverconfiguratie. SQLite is een bestandsformaat, en Tome behandelt het als zodanig.</p>

<h3>Volledige SQLite-dekking</h3>
<p>Blader door tabellen, views, indexen en triggers. Bewerk cellen inline. Voeg rijen in en verwijder ze. Maak tabellen aan met een visuele editor. Voer SQL-queries uit met syntaxismarkering en auto-aanvulling. Elke functie bestaat omdat ze zinvol is voor SQLite.</p>

<h3>Meerdere databases, op z'n Mac's</h3>
<p>Tome is documentgebaseerd. Open vijf databases en elk krijgt zijn eigen venster of tab. Vergelijk data tussen databases door vensters naast elkaar te plaatsen — dezelfde workflow die je gebruikt met tekstbestanden, spreadsheets of elk ander document op je Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "open-sqlite3-file-mac": {
    slug: "open-sqlite3-file-mac",
    title: "Hoe je .sqlite3-bestanden opent op Mac zonder Terminal",
    description:
      "Dubbelklikken op een .sqlite3-bestand op Mac doet niets nuttigs. macOS herkent het formaat niet, en Terminal is de enige ingebouwde optie.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een .sqlite3-bestand — misschien geëxporteerd vanuit een Django-project, gehaald uit een iOS-appcontainer, of gedownload van een collega. Je dubbelklikt erop op je Mac en krijgt het dialoogvenster "geen toepassing ingesteld om te openen", of erger nog, het opent in een teksteditor en toont binaire brabbeltaal. macOS weet gewoonweg niet wat het met SQLite-bestanden moet doen, standaard.</p>

<h2>De standaardopties zijn allemaal slecht</h2>
<p>Zonder iets te installeren, is Terminal je enige optie. Open het, navigeer naar de map van het bestand en typ <code>sqlite3 yourfile.sqlite3</code>. Vanaf daar kun je commando's uitvoeren zoals <code>.tables</code> en <code>SELECT * FROM tablename;</code> — maar de output is platte tekst zonder opmaak, zonder scrollen en zonder manier om data visueel te bewerken.</p>
<p>Als je een ontwikkelaar bent die zich thuis voelt in Terminal, werkt dit voor snelle controles. Maar voor iets meer dan een simpele query — meerdere tabellen doorbladeren, waarden bewerken, een schema begrijpen — is het traag en foutgevoelig. En als je geen ontwikkelaar bent, is het geen optie.</p>
<p>Sommige mensen proberen online SQLite-viewers die in de browser draaien. Deze vereisen dat je je databasebestand naar een server uploadt, wat voor de hand liggende privacyzorgen oproept — vooral als de database gebruikersdata of inloggegevens bevat.</p>

<h2>Open .sqlite3-bestanden met een dubbelklik dankzij Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> registreert zich als handler voor .sqlite3-, .sqlite- en .db-bestanden op macOS. Na installatie kun je op elk SQLite-bestand in Finder dubbelklikken en het opent direct in Tome — tabellen weergegeven in de zijbalk, data in een scrollbaar raster, klaar om te doorbladeren.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome opening a .sqlite3 file on Mac with visual table browser" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Geen Terminal nodig</h3>
<p>Blader visueel door elke tabel, view, index en trigger. Scroll door rijen zoals je dat in een spreadsheet zou doen. Klik op kolomkoppen om je schema te begrijpen. Alles is visueel, direct en vereist geen enkele command line-kennis.</p>

<h3>Bewerk data zonder SQL</h3>
<p>Moet je een waarde wijzigen? Klik op de cel en typ. Moet je een rij toevoegen? Klik op invoegen. Moet je records verwijderen? Selecteer en verwijder. Voor complexere handelingen bevat Tome een SQL-query-editor met syntaxismarkering en auto-aanvulling — maar voor dagelijkse taken heb je die zelden nodig.</p>

<h3>Je data blijft lokaal</h3>
<p>Tome is een native macOS-app. Je databasebestand verlaat nooit je machine. Geen uploads, geen cloudverwerking, geen privacyzorgen. Openen, doorbladeren, bewerken, sluiten — alles gebeurt lokaal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "edit-sqlite-database-mac": {
    slug: "edit-sqlite-database-mac",
    title: "Hoe je een SQLite-database bewerkt op Mac",
    description:
      "Een SQLite-database bewerken op Mac betekent meestal UPDATE-statements schrijven in Terminal. Voor een snelle waardewijziging is dat veel omhaal.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je moet een enkele waarde wijzigen in een SQLite-database. Misschien moet een vlag worden omgezet, een gebruikersnaam gecorrigeerd, of testdata aangepast. De ingebouwde manier om dit op Mac te doen, is Terminal openen, <code>sqlite3</code> uitvoeren, een UPDATE-statement schrijven met de exacte WHERE-clausule om de juiste rij te raken, en hopen dat je geen typfout maakt die de verkeerde records verandert. Voor één waarde. In 2026.</p>

<h2>Waarom bewerken via Terminal riskant is</h2>
<p>Handmatig UPDATE-statements schrijven is prima wanneer je precies weet wat je doet. Maar het is gevaarlijk eenvoudig om een WHERE-clausule te vergeten en elke rij in de tabel bij te werken, of een kolomnaam verkeerd te spellen en een stille fout te krijgen. Er is geen ongedaan maken in de <code>sqlite3</code> CLI — zodra het statement wordt uitgevoerd, is de wijziging permanent, tenzij je eraan hebt gedacht een transactie te starten.</p>
<p>Nieuwe tabellen maken is even omslachtig. Je moet de volledige CREATE TABLE-instructie uitschrijven met kolomnamen, types en beperkingen — syntaxis die gemakkelijk verkeerd gaat wanneer je snel aan het prototypen en itereren bent.</p>
<p>Voor ontwikkelaars die in SQL denken, is dit beheersbaar. Voor iedereen anders — en voor ontwikkelaars die gewoon een snelle bewerking willen maken zonder het risico — zou er een betere manier moeten zijn.</p>

<h2>Bewerk SQLite-databases visueel met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> laat je SQLite-databases op Mac bewerken zoals je een spreadsheet zou bewerken. Open de database, klik op een cel, wijzig de waarde. Geen SQL nodig voor basisbewerkingen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inline cell editing in a SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Inline celbewerking</h3>
<p>Klik op een cel in een tabel om de waarde rechtstreeks te bewerken. Wijzig tekst, cijfers of datums zonder een UPDATE-statement te schrijven. De wijziging richt zich precies op de rij die je hebt aangeklikt — geen risico dat een ontbrekende WHERE-clausule andere records beïnvloedt.</p>

<h3>Rijen invoegen en verwijderen</h3>
<p>Voeg nieuwe rijen toe aan elke tabel met één klik. Verwijder geselecteerde rijen net zo eenvoudig. Tome regelt de INSERT- en DELETE-SQL op de achtergrond, zodat jij je kunt richten op je data, niet op je syntaxis.</p>

<h3>Maak tabellen visueel</h3>
<p>Heb je een nieuwe tabel nodig? Met Tome's visuele tabeleditor definieer je kolommen, types en beperkingen in een formulier. Geen CREATE TABLE-statements uit je hoofd hoeven schrijven — vul gewoon de velden in en Tome genereert de juiste SQL.</p>

<h3>SQL-editor voor complexe handelingen</h3>
<p>Wanneer je wel SQL nodig hebt — voor joins, aggregaties of batchupdates — staat Tome's query-editor klaar met syntaxismarkering en auto-aanvulling voor je tabel- en kolomnamen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "sql-query-editor-mac-native": {
    slug: "sql-query-editor-mac-native",
    title: "SQL-query-editor voor Mac — Native en snel",
    description:
      "SQL-queries uitvoeren tegen een SQLite-database op Mac zou geen zware IDE of terminalvenster mogen vereisen. Een gerichte query-editor is vaak alles wat je nodig hebt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je moet een SQL-query uitvoeren tegen een lokale SQLite-database. Je opties: open Terminal en gebruik de <code>sqlite3</code> CLI zonder syntaxismarkering en zonder auto-aanvulling, of start een volwaardige database-IDE die tien seconden nodig heeft om op te starten en een halve gigabyte RAM gebruikt. Geen van beide opties past bij de taak — je wilt gewoon een query schrijven, uitvoeren en de resultaten zien.</p>

<h2>De kloof tussen Terminal en volledige IDE's</h2>
<p>De <code>sqlite3</code> CLI geeft je ruwe query-uitvoering maar geen enkel ontwikkelaarsgemak. Geen syntaxiskleuring, geen aanvulling van tabel- of kolomnamen, geen visueel resultatenraster. Je leest queryoutput als platte tekst, handmatig de terminalbreedte aanpassend om alle kolommen te zien.</p>
<p>Aan de andere kant zijn tools zoals DataGrip of DBeaver gebouwd voor enterprise-databaseworkflows — verbindingen met externe servers beheren, migraties afhandelen, schema's visualiseren. Ze zijn krachtig, maar zwaar. Voor een lokaal SQLite-bestand voelt het opstarten van een volledige IDE als het besturen van een vrachtwagen naar de winkel om de hoek.</p>
<p>Wat ontbreekt, is een snelle, gerichte SQL-editor die een SQLite-bestand opent en je queries laat schrijven met het comfort dat je verwacht — zonder de overhead van een volledige IDE.</p>

<h2>Tome's SQL-query-editor</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> bevat een ingebouwde SQL-query-editor die specifiek voor SQLite is ontworpen. Het maakt deel uit van een native macOS-app, dus het start direct op en draait met minimaal resourcegebruik.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQL query editor with syntax highlighting on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Syntaxismarkering</h3>
<p>SQL-sleutelwoorden, tabelnamen, tekenreekswaarden en cijfers zijn gekleurd voor leesbaarheid. Spot fouten voordat je de query uitvoert, in plaats van een cryptische foutmelding achteraf te ontcijferen.</p>

<h3>Auto-aanvulling</h3>
<p>Tome kent je schema. Begin een tabelnaam te typen en het stelt aanvullingen voor. Verwijs naar een tabel in een FROM-clausule en kolomnamen verschijnen als suggesties. Niet meer wisselen tussen de schemaverkenner en de query-editor om te onthouden hoe een kolom heet.</p>

<h3>Resultaten in een native raster</h3>
<p>Queryresultaten verschijnen in een snelle, scrollbare native tabel — geen HTML gerenderd in een webweergave. Sorteer kolommen, wijzig hun grootte en scroll door grote resultatensets met de prestaties die je van een macOS-app verwacht.</p>

<h3>Doorbladeren en query's in één app</h3>
<p>Tome is niet alleen een query-editor. Blader door tabellen, views, indexen en triggers in de zijbalk. Bewerk data inline. Maak nieuwe tabellen visueel aan. De SQL-editor is er wanneer je hem nodig hebt, en de rest van de app regelt al het andere.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "browse-core-data-sqlite-mac": {
    slug: "browse-core-data-sqlite-mac",
    title: "Hoe je Core Data SQLite-bestanden doorbladert op Mac",
    description:
      "Core Data slaat zijn data op in SQLite-bestanden, maar Apple geeft je geen visuele tool om ze te inspecteren. Persistente data debuggen betekent zoeken door appcontainers en ruwe SQL-output lezen.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Je bent een Core Data-probleem aan het debuggen in je iOS- of macOS-app. De data ziet er verkeerd uit in de UI, en je moet zien wat er daadwerkelijk is opgeslagen in het onderliggende SQLite-bestand. Xcode's Core Data-modeleditor toont je schema, maar laat je de daadwerkelijk opgeslagen data niet doorbladeren. Dus ga je op zoek — je vindt de appcontainer, lokaliseert het .sqlite-bestand, opent Terminal en begint ruwe queries uit te voeren tegen tabellen met namen zoals ZUSER en ZPOST, waar elke kolom is voorafgegaan door een Z en niets intuïtief overeenkomt met je entiteitsnamen.</p>

<h2>Core Data's SQLite-bestanden zijn lastig te inspecteren</h2>
<p>Core Data gebruikt SQLite als standaard persistente opslag, maar voegt zijn eigen conventies toe. Entiteitsnamen krijgen een Z-voorvoegsel in de tabelnaam. Attributen krijgen Z-voorvoegde kolomnamen. Relaties worden opgeslagen als integer foreign keys in kolommen die je niet meteen herkent. Er is een Z_METADATA-tabel en een Z_PRIMARYKEY-tabel die Core Data intern beheert.</p>
<p>Niets hiervan is gedocumenteerd op een manier die handmatige inspectie eenvoudig maakt. Je eindigt met queries zoals <code>SELECT * FROM ZUSER;</code> en probeert de Z-voorvoegde kolommen terug te koppelen aan je managed object model. In Terminal, zonder syntaxismarkering en zonder visueel raster, is dit vervelend.</p>
<p>Xcode helpt hier niet bij. Er is geen ingebouwde SQLite-browser. Instruments kan Core Data-operaties profileren, maar toont je niet de daadwerkelijke rijdata. Je hebt een aparte tool nodig.</p>

<h2>Blader door Core Data SQLite-bestanden met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> opent Core Data's SQLite-bestanden zoals elke andere database. Navigeer naar de container van je app, vind het .sqlite-bestand en open het in Tome. Elke Z-voorvoegde tabel verschijnt in de zijbalk. Klik op één om alle rijen en hun waarden te zien in een scrollbaar raster.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing a Core Data SQLite file showing Z-prefixed tables" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zie de echte data</h3>
<p>Wanneer je app de verkeerde waarde toont, open het SQLite-bestand in Tome en controleer de daadwerkelijk opgeslagen data. Is de waarde verkeerd in de database, of is het een fetch/weergavebug? Visuele toegang tot de ruwe data beantwoordt deze vraag in seconden.</p>

<h3>Inspecteer relaties en metadata</h3>
<p>Blader door de Z_PRIMARYKEY-tabel om te zien hoe Core Data entiteitstypes en primaire sleutels bijhoudt. Controleer foreign key-kolommen om te verifiëren dat relaties correct zijn opgeslagen. Inspecteer Z_METADATA om de modelversiehash te zien.</p>

<h3>Voer diagnostische queries uit</h3>
<p>Gebruik Tome's SQL-query-editor om joins te schrijven tussen Core Data's Z-voorvoegde tabellen, te filteren op specifieke records, of te controleren op verweesde rijen die kunnen duiden op een migratieprobleem. Syntaxismarkering en auto-aanvulling maken dit gemakkelijker dan ruwe queries uitvoeren in Terminal.</p>

<h3>Veilig te inspecteren, gemakkelijk te vinden</h3>
<p>Voor de Simulator ligt het SQLite-bestand van je app diep verscholen in <code>~/Library/Developer/CoreSimulator/</code>. Voor een macOS-app kijk je in <code>~/Library/Containers/</code> of <code>~/Library/Application Support/</code>. Zodra je het bestand hebt gevonden, sleep je het naar het dock-icoon van Tome en begin je te bladeren.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "sqlite-viewer-mac-document-based": {
    slug: "sqlite-viewer-mac-document-based",
    title: "SQLite-viewer voor Mac — Meerdere databases naast elkaar openen",
    description:
      "Data vergelijken tussen twee SQLite-databases betekent meestal wisselen tussen tabs of twee instanties van je databasetool draaien. Er is een eenvoudigere aanpak.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je migreert data van de ene SQLite-database naar de andere en moet de resultaten verifiëren. Of je vergelijkt een staging-database met productie. Of je hebt twee versies van de database van een app en moet zien wat er is veranderd. In elk geval moet je twee databases tegelijk bekijken — en de meeste SQLite-tools maken dit moeilijker dan het zou moeten zijn.</p>

<h2>Het jongleeract met tools voor één database</h2>
<p>De meeste SQLite-browsers zijn ontworpen rond één databaseverbinding tegelijk. Om twee databases te vergelijken, open je handmatig twee aparte applicatievensters (als de tool dit al ondersteunt), of wissel je heen en weer tussen tabs terwijl je kolomwaarden in je geheugen probeert te houden. Sommige tools vereisen dat je één database sluit voordat je een andere opent.</p>
<p>De Terminal-aanpak is nog erger. Je hebt twee terminalvensters nodig, elk met <code>sqlite3</code> tegen een ander bestand, terwijl je output in platte tekst naast elkaar probeert te vergelijken. Het werkt in theorie, maar valt uit elkaar bij enig echt datavolume.</p>
<p>Deze beperking bestaat omdat de meeste databasetools niet zijn ontworpen als documentgebaseerde toepassingen. Ze zijn ontworpen rond een verbindingsbeheerder — kies een database, werk ermee, verbreek de verbinding, kies een andere. Dat is prima voor databases op externe servers, maar onnodige wrijving voor lokale SQLite-bestanden.</p>

<h2>Tome: een documentgebaseerde SQLite-viewer</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> behandelt elke SQLite-database als een document — op dezelfde manier waarop TextEdit tekstbestanden behandelt of Voorvertoning pdf's. Open een database en het krijgt zijn eigen venster. Open nog een en dat krijgt ook zijn eigen venster. Rangschik ze naast elkaar, of gebruik native macOS-tabs om ze te groeperen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome with multiple SQLite databases open side by side on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vergelijk databases visueel</h3>
<p>Open je bron- en bestemmingsdatabase in twee vensters. Plaats ze naast elkaar met macOS Gesplitste weergave of door vensters te slepen. Blader door dezelfde tabel in beide om rijaantallen, kolomwaarden of schemaverschillen te vergelijken. Geen tabs wisselen, geen waarden onthouden.</p>

<h3>Werk over projecten heen</h3>
<p>Houd een referentiedatabase open terwijl je tegen een andere ontwikkelt. Heb de productiedatabase van je app open naast een test-fixturedatabase. Open het databasebestand van een klant terwijl je eigen bestand nog geladen is. Tome beperkt het aantal gelijktijdig geopende databases niet.</p>

<h3>Volledige functieset in elk venster</h3>
<p>Elk databasevenster heeft de complete Tome-interface — zijbalk met tabellen, views, indexen en triggers; dataraster met inline bewerking; SQL-query-editor met syntaxismarkering en auto-aanvulling. Er is geen concept van een "primaire" en "secundaire" database. Elke geopende database is volledig functioneel.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "inspect-app-database-mac": {
    slug: "inspect-app-database-mac",
    title: "Hoe je de database van een app inspecteert op Mac",
    description:
      "Apps op je Mac slaan data op in verborgen SQLite-bestanden diep in Library-mappen. Inspecteren wat een app daadwerkelijk heeft opgeslagen, betekent navigeren door containerpaden en ruwe database-output ontcijferen.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Elke app op je Mac die lokaal data bewaart — notities, bladwijzers, berichten, gezondheidsgegevens, takenlijsten — slaat dit waarschijnlijk op in een SQLite-database ergens in <code>~/Library/</code> of <code>~/Library/Containers/</code>. Misschien wil je zien welke data een app verzamelde. Misschien moet je iets herstellen dat uit de UI is verwijderd. Misschien debug je je eigen app en moet je verifiëren wat er daadwerkelijk naar schijf is geschreven. Wat de reden ook is, macOS geeft je geen ingebouwde manier om deze bestanden visueel te inspecteren.</p>

<h2>Appdatabases vinden en openen is vervelend</h2>
<p>Eerst moet je het bestand lokaliseren. Sandboxed apps slaan hun data op in <code>~/Library/Containers/com.developer.appname/Data/</code>, terwijl niet-sandboxed apps mogelijk <code>~/Library/Application Support/</code> gebruiken. De Library-map is standaard verborgen — je moet Finder's "Ga naar map" gebruiken of navigeren via Terminal. Zodra je het .sqlite- of .db-bestand vindt, zit je vast met <code>sqlite3</code> in Terminal, ruwe queryoutput lezend zonder visuele structuur.</p>
<p>Voor iOS-apps die in de Simulator draaien, ligt het pad nog dieper: <code>~/Library/Developer/CoreSimulator/Devices/</code> gevolgd door een UUID, en dan nog een geneste pad naar de Documents- of Library-map van de app. De juiste database vinden tussen tientallen simulator-apparaatmappen is een speurtocht.</p>

<h2>Inspecteer elke app-database met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> laat je elk SQLite-databasebestand openen en meteen de inhoud zien — tabellen, views, indexen, triggers en rijdata — in een native macOS-interface. Zodra je het bestand hebt gelokaliseerd, sleep je het gewoon naar Tome of gebruik je Bestand → Open.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inspecting an app's SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Begrijp wat een app opslaat</h3>
<p>Blader door elke tabel om precies te zien welke data de app bewaart. Kolomnamen onthullen het schemaontwerp. Rijdata toont de daadwerkelijke waarden. Geen giswerk, geen Terminal-commando's — gewoon klikken door tabellen in de zijbalk en scrollen door hun inhoud.</p>

<h3>Debug de datalaag van je eigen app</h3>
<p>Als je een macOS- of iOS-app ontwikkelt die SQLite of Core Data gebruikt, laat Tome je verifiëren dat je schrijfacties correct zijn aangekomen. Controleer of relaties intact zijn, inspecteer automatisch gegenereerde kolommen en voer diagnostische queries uit met syntaxismarkering en auto-aanvulling.</p>

<h3>Herstel of exporteer data</h3>
<p>Heb je een record nodig dat uit de UI van een app is verwijderd, maar mogelijk nog in de database bestaat? Open het bestand in Tome en zoek in de relevante tabel. Als de data er is, kun je deze rechtstreeks lezen of een SQL-query gebruiken om precies te extraheren wat je nodig hebt.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "sqlite-for-ios-developers-mac": {
    slug: "sqlite-for-ios-developers-mac",
    title: "SQLite-browser voor iOS-ontwikkelaars op Mac",
    description:
      "iOS-ontwikkeling betekent voortdurend controleren wat je app naar zijn lokale database heeft geschreven. Xcode heeft geen ingebouwde SQLite-viewer, waardoor jij zelf een workflow moet samenstellen uit Terminal en tools van derden.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Je bouwt een iOS-app die Core Data of ruwe SQLite gebruikt voor opslag. Iets ziet er verkeerd uit in de UI — misschien wordt een lijst niet gevuld, of lijkt een waarde verouderd. Je moet de database controleren. Xcode biedt een datamodeleditor en een Instruments-profiler, maar geen van beide toont je de daadwerkelijke rijen in het SQLite-bestand. Dus open je Terminal, spoor je het containerpad van de Simulator op en begin je <code>SELECT *</code>-queries uit te voeren tegen Z-voorvoegde tabellen. Deze workflow onderbreekt elke keer je concentratie.</p>

<h2>Het databaseprobleem van de iOS-ontwikkelaar</h2>
<p>Elke iOS Simulator-run slaat zijn data op onder <code>~/Library/Developer/CoreSimulator/Devices/</code>, genest in een map met UUID-naam. Het pad verandert wanneer je de simulator reset of van apparaat wisselt. Zelfs als je de locatie als bladwijzer opslaat, kan de volgende Xcode-update alles door elkaar husselen. Het juiste .sqlite-bestand vinden is de halve strijd.</p>
<p>Zodra je het gevonden hebt, geeft de <code>sqlite3</code> CLI je ruwe tekstoutput. Core Data's Z-voorvoegde tabel- en kolomnamen maken handmatige queries verwarrend. Er is geen auto-aanvulling voor kolomnamen, geen visueel raster om rijen te overzien, en geen manier om snel een testwaarde te bewerken zonder een volledige UPDATE-statement te schrijven. De meeste ontwikkelaars verspillen hier meerdere keren per dag minuten aan.</p>
<p>Tools van derden zoals DB Browser for SQLite werken, maar voelen vreemd aan op macOS — Qt-gebaseerde interfaces met verkeerde sneltoetsen en niet-native bestandsdialogen. DBeaver en DataGrip zijn volledige database-IDE's, overkill voor het inspecteren van een lokaal SQLite-bestand.</p>

<h2>Tome: een SQLite-browser gebouwd voor jouw Mac-workflow</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> is een native macOS SQLite-browser die natuurlijk past in de workflow van een iOS-ontwikkelaar. Open het .sqlite-bestand van de Simulator en zie direct elke tabel, view en index. Blader door Core Data's Z-voorvoegde tabellen in een scrollbaar raster. Bewerk waarden inline om testscenario's op te zetten zonder SQL te schrijven.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing an iOS app's SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Inspecteer Core Data-opslag visueel</h3>
<p>Core Data's SQLite-tabellen gebruiken Z-voorvoegde namen die moeilijk te ontcijferen zijn in Terminal. In Tome verschijnt elke tabel in de zijbalk — klik op één en zie alle rijen met correct uitgelijnde kolommen. Koppel ZUSER- en ZPOST-tabellen in één oogopslag terug aan je managed object model.</p>

<h3>Bewerk testdata zonder opnieuw op te bouwen</h3>
<p>Moet je een waarde wijzigen om een bug te reproduceren? Klik op de cel in Tome en typ de nieuwe waarde. Geen UPDATE-statement nodig, geen seedlogica van je app opnieuw uitvoeren. Voeg rijen in om randgevallen te testen of verwijder records om een schone staat te simuleren.</p>

<h3>Voer diagnostische queries uit</h3>
<p>Met Tome's SQL-editor met syntaxismarkering en auto-aanvulling schrijf je joins, aggregaties en gefilterde queries tegen de data van je app. Verifieer relaties, tel records of zoek naar specifieke waarden — allemaal zonder de app te verlaten.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "view-firefox-history-sqlite-mac": {
    slug: "view-firefox-history-sqlite-mac",
    title: "Hoe je Firefox-geschiedenis (SQLite) bekijkt op Mac",
    description:
      "Firefox slaat je browsegeschiedenis op in een SQLite-database genaamd places.sqlite. Deze buiten de browser bekijken betekent omgaan met vergrendelde bestanden en ruwe SQL-output.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Firefox bewaart je volledige browsegeschiedenis, bladwijzers en site-metadata in een SQLite-database genaamd <code>places.sqlite</code>. Misschien wil je door oude geschiedenis zoeken die Firefox's ingebouwde zoekfunctie niet goed naar boven haalt, je browsedata exporteren, of je gewoontes analyseren. Maar dit bestand openen is niet vanzelfsprekend — Firefox vergrendelt het terwijl het draait, en zodra je een kopie hebt, heeft macOS geen ingebouwde manier om het visueel te bekijken.</p>

<h2>Het database bestand vinden en kopiëren</h2>
<p>De profielmap van Firefox bevindt zich op <code>~/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release/</code>. Daarbinnen vind je <code>places.sqlite</code> naast andere databases zoals <code>cookies.sqlite</code> en <code>formhistory.sqlite</code>. De addertje onder het gras: Firefox vergrendelt deze bestanden terwijl de browser draait. Je moet Firefox eerst afsluiten of het bestand naar een andere locatie kopiëren terwijl het draait (al kan de kopie inconsistent zijn als Firefox op dat moment aan het schrijven is).</p>
<p>Zodra je het bestand hebt, betekent de Terminal-aanpak <code>sqlite3 places.sqlite</code> uitvoeren en queries schrijven tegen tabellen zoals <code>moz_places</code>, <code>moz_historyvisits</code> en <code>moz_bookmarks</code>. Het schema is niet intuïtief — bezoektijdstempels worden opgeslagen in microseconden sinds epoch, URL's staan in de ene tabel terwijl bezoekmetadata in een andere staat, en een leesbare geschiedenislijst krijgen vereist een JOIN. Dit is werkbaar voor iemand die vloeiend SQL beheerst, maar onredelijk voor de meeste gebruikers.</p>

<h2>Blader visueel door Firefox-geschiedenis met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> opent <code>places.sqlite</code> zoals elk ander databasebestand. Sleep het gekopieerde bestand naar Tome en zie direct elke tabel — <code>moz_places</code>, <code>moz_historyvisits</code>, <code>moz_bookmarks</code> en meer — weergegeven in de zijbalk. Klik op een tabel om de inhoud te doorbladeren in een scrollbaar raster.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome viewing Firefox places.sqlite history database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zoek en filter je geschiedenis</h3>
<p>Gebruik Tome's SQL-query-editor om gerichte zoekopdrachten te schrijven. Vind elk bezoek aan een specifiek domein, filter op datumbereik met de microsecondetijdstempels, of tel hoe vaak je een bepaalde site hebt bezocht. Syntaxismarkering en auto-aanvulling maken het schrijven van deze queries snel.</p>

<h3>Verken bladwijzers en metadata</h3>
<p>De <code>moz_bookmarks</code>-tabel slaat je bladwijzerboomstructuur op met ouder-kindrelaties. Blader ernaar in Tome om je volledige bladwijzerhiërarchie te zien, inclusief mapstructuur en sorteervolgorde — details die de bladwijzerbeheerder van Firefox soms verbergt.</p>

<h3>Inspecteer andere Firefox-databases</h3>
<p>Dezelfde profielmap bevat <code>cookies.sqlite</code>, <code>formhistory.sqlite</code> en <code>content-prefs.sqlite</code>. Elk is een standaard SQLite-database die Tome kan openen. Controleer welke cookies een site heeft ingesteld, bekijk opgeslagen formulierinvoer, of inspecteer per-site voorkeuren — allemaal visueel, zonder ruwe queries in Terminal te schrijven.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "sqlite-vs-realm-browser-mac": {
    slug: "sqlite-vs-realm-browser-mac",
    title: "SQLite vs Realm Browser op Mac",
    description:
      "Mobiele apps gebruiken SQLite of Realm voor lokale opslag, maar voor het inspecteren van elk formaat op Mac is een andere tool nodig. Het kiezen van de juiste browser hangt af van welk formaat je app daadwerkelijk gebruikt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je ontwikkelt een mobiele app en moet de lokale database ervan inspecteren. Als je Realm gebruikt, grijp je naar Realm Studio. Als je SQLite gebruikt (direct of via Core Data, GRDB of Room), heb je een compleet andere tool nodig. De twee formaten zijn fundamenteel verschillend, en de doorbladertools overlappen niet. Begrijpen wat elk biedt, helpt je de juiste te kiezen — of te beseffen dat je beide nodig hebt.</p>

<h2>Realm en SQLite dienen verschillende behoeften</h2>
<p>Realm is een objectdatabase — het slaat data op als objecten met eigenschappen en relaties, niet als rijen in tabellen. Realm Studio laat je deze objecten visueel doorbladeren, relaties als links zien en eigenschappen inline bewerken. Het is speciaal gebouwd voor Realm-bestanden en doet verder niets anders.</p>
<p>SQLite is een relationele database opgeslagen als één bestand. Het gebruikt standaard SQL-tabellen met rijen en kolommen. Core Data op iOS, Room op Android en talloze andere frameworks gebruiken SQLite als opslagbackend. Het ecosysteem is enorm, maar de inspectietools op Mac zijn historisch gezien ofwel Terminal-gebaseerd of cross-platform ports die misplaatst aanvoelen.</p>
<p>Als je project Realm gebruikt, is Realm Studio je enige echte optie — geen algemene databasebrowser kan .realm-bestanden openen. Maar als je project SQLite in enige vorm gebruikt, heb je keuzes. De vraag is of die keuzes daadwerkelijk goed zijn op macOS.</p>

<h2>Een native SQLite-browser voor de andere helft</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> is een native macOS SQLite-browser die de focus en polish van Realm Studio evenaart, maar dan voor SQLite-databases. Waar Realm Studio speciaal is gebouwd voor .realm-bestanden, is Tome speciaal gebouwd voor .sqlite-, .db- en .sqlite3-bestanden — en niets anders.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome native SQLite browser on Mac compared to Realm Studio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dezelfde gerichte filosofie</h3>
<p>Realm Studio probeert geen PostgreSQL-client te zijn. Zo probeert Tome ook niet te verbinden met MySQL of MongoDB. Door zich exclusief op SQLite te richten, is elke functie — inline bewerking, tabelcreatie, query-auto-aanvulling — geoptimaliseerd voor het formaat waar je daadwerkelijk mee werkt.</p>

<h3>Blader door tabellen, bewerk inline, query met gemak</h3>
<p>Open een SQLite-database en blader door tabellen, views, indexen en triggers in de zijbalk. Bewerk celwaarden door erop te klikken. Voeg rijen in of verwijder ze zonder SQL te schrijven. Wanneer je queries nodig hebt, biedt de ingebouwde editor syntaxismarkering en auto-aanvulling voor je schema.</p>

<h3>Wanneer je beide nodig hebt</h3>
<p>Sommige projecten gebruiken Realm voor het ene onderdeel en SQLite voor het andere. Houd Realm Studio en Tome naast elkaar — elk behandelt zijn formaat native, en geen van beide verspilt resources aan het proberen ondersteunen van formaten waarvoor het niet is ontworpen.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "mac-sqlite-command-line-vs-gui": {
    slug: "mac-sqlite-command-line-vs-gui",
    title: "Mac SQLite: Command line vs GUI — Wanneer gebruik je wat",
    description:
      "De sqlite3 CLI wordt met elke Mac meegeleverd en handelt snelle queries af, maar schiet tekort bij het doorbladeren, bewerken en begrijpen van onbekende schema's. Weten wanneer je moet wisselen van tool bespaart tijd.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Elke Mac wordt geleverd met de <code>sqlite3</code> command-line tool. Voor ontwikkelaars die zich thuis voelen in Terminal, is het een betrouwbare manier om snelle queries uit te voeren. Maar er is een punt waarop de CLI niet meer efficiënt is en een GUI sneller wordt — de truc is weten waar die lijn ligt. De verkeerde tool voor de taak gebruiken, kost tijd in beide richtingen.</p>

<h2>Wanneer de command line wint</h2>
<p>De <code>sqlite3</code> CLI blinkt uit in gescripte handelingen. Als je een shellscript schrijft dat een waarde uit een database moet halen, sluist de CLI direct door naar andere commando's. One-liner queries zijn snel: <code>sqlite3 app.db "SELECT count(*) FROM users;"</code> geeft je een antwoord zonder iets te hoeven starten. Voor automatisering, backups met <code>.dump</code> en snelle controles binnen een bestaande Terminal-sessie is de CLI de juiste tool.</p>
<p>Het is ook overal beschikbaar. Geen installatie nodig, geen app om te downloaden. Als je via SSH verbonden bent met een externe machine of werkt in een CI-pipeline, is de CLI alles wat je hebt — en het werkt prima voor gerichte queries wanneer je het schema kent.</p>

<h2>Wanneer de CLI je in de steek laat</h2>
<p>De CLI valt uit elkaar bij verkenning. Wanneer je een onbekende database opent en het schema moet begrijpen, is <code>.tables</code> en <code>.schema tablename</code> herhaaldelijk uitvoeren traag. Brede tabellen lopen om in de terminal. Er is geen scrollen door resultaten — output vliegt gewoon voorbij. Data bewerken betekent UPDATE-statements schrijven met precieze WHERE-clausules, met het risico op onbedoelde bulkupdates bij een typfout.</p>
<p>Voor iedereen die geen ontwikkelaar is — data-analisten, designers, QA-testers — is de CLI feitelijk onbruikbaar. En zelfs voor ontwikkelaars is meer dan een paar tabellen visueel doorbladeren gewoonweg sneller in een GUI.</p>

<h2>Tome: de GUI-kant van de vergelijking</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> vervult de GUI-rol als een native macOS SQLite-browser. Het is geen vervanging voor de CLI — het is de aanvulling. Gebruik de CLI voor scripting en snelle controles; gebruik Tome om databases visueel te doorbladeren, te bewerken en te begrijpen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome GUI SQLite browser compared to command line on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verken onbekende schema's</h3>
<p>Open elke database en zie elke tabel, view, index en trigger in de zijbalk. Klik door tabellen om het schema te begrijpen, voorbeelddata te scannen en relaties te achterhalen — allemaal zonder een enkel commando te typen.</p>

<h3>Bewerk veilig</h3>
<p>Klik op een cel om de waarde te wijzigen. Geen UPDATE-statement, geen WHERE-clausule om verkeerd te doen. Voeg rijen in en verwijder ze met één klik. Het risico op onbedoelde bulkwijzigingen verdwijnt wanneer elke bewerking precies de cel raakt die je hebt aangeklikt.</p>

<h3>Query met assistentie</h3>
<p>Wanneer je wel SQL schrijft, biedt Tome's query-editor syntaxismarkering en auto-aanvulling. Het is het middenpad tussen de kale CLI en een volledige database-IDE — precies genoeg assistentie om sneller queries te schrijven zonder de overhead van enterprise-tooling.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "edit-sqlite-without-sql-mac": {
    slug: "edit-sqlite-without-sql-mac",
    title: "Hoe je SQLite bewerkt zonder SQL te schrijven op Mac",
    description:
      "Niet iedereen die een waarde in een SQLite-database moet wijzigen, kent SQL. Designers, QA-testers en product managers zouden geen UPDATE-syntaxis moeten hoeven leren voor een snelle datacorrectie.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een QA-tester moet de rol van een gebruiker wijzigen om een rechtenbug te reproduceren. Een designer wil placeholdertekst vervangen in de database van een prototype. Een product manager moet een configuratiewaarde bijwerken om een feature flag te testen. Geen van hen zou SQL-syntaxis moeten hoeven leren voor een simpele datawijziging — maar op Mac is de standaardtool voor het bewerken van SQLite-databases de <code>sqlite3</code> command line, waar zelfs een bewerking van één cel vereist dat je <code>UPDATE tablename SET column = 'value' WHERE id = 42;</code> schrijft.</p>

<h2>SQL is een drempel voor niet-ontwikkelaars</h2>
<p>SQL is in theorie niet moeilijk te leren, maar het onder druk goed doen is een ander verhaal. De WHERE-clausule vergeten in een UPDATE-statement verandert elke rij in de tabel. De verkeerde aanhalingstekens gebruiken veroorzaakt een syntaxisfout. Een kolomnaam verkeerd spellen levert een verwarrende foutmelding op. Voor iemand die gewoon een boolean wil omzetten of een string wil wijzigen, is deze omhaal buitenproportioneel ten opzichte van de taak.</p>
<p>Zelfs ontwikkelaars geven er vaak de voorkeur aan om geen SQL te schrijven voor triviale wijzigingen. Terminal openen, naar het bestand navigeren, <code>sqlite3</code> starten, de exacte tabel- en kolomnamen onthouden, en een syntactisch correcte instructie schrijven — allemaal om één cel te wijzigen — is traag vergeleken met gewoon klikken en typen.</p>

<h2>Bewerk SQLite zoals een spreadsheet met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> laat iedereen een SQLite-database op Mac bewerken zonder ook maar één regel SQL te schrijven. Open het bestand, zoek de tabel, klik op de cel, typ de nieuwe waarde. Het werkt als het bewerken van een spreadsheet — omdat dat voor eenvoudige wijzigingen precies de interface is die je wilt.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome editing SQLite data without SQL on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Klik om elke cel te bewerken</h3>
<p>Elke cel in Tome's dataraster is bewerkbaar. Klik erop, wijzig de waarde, en de update richt zich precies op die rij en kolom. Geen WHERE-clausule om te vergeten, geen risico op bulkwijzigingen, geen SQL-kennis vereist.</p>

<h3>Invoegen en verwijderen zonder commando's</h3>
<p>Voeg een nieuwe rij toe door op de invoegknop te klikken. Verwijder rijen door ze te selecteren en te verwijderen. Tome regelt de INSERT- en DELETE-SQL op de achtergrond, zodat je met je data omgaat via bekende handelingen in plaats van databasecommando's.</p>

<h3>Maak tabellen visueel</h3>
<p>Heb je een nieuwe tabel nodig? Met Tome's visuele tabeleditor definieer je kolomnamen, types en beperkingen in een formulier — geen <code>CREATE TABLE</code>-syntaxis uit je hoofd hoeven schrijven. Vul de velden in en de tabel wordt correct aangemaakt.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "sqlite-database-viewer-apple-silicon": {
    slug: "sqlite-database-viewer-apple-silicon",
    title: "SQLite-databaseviewer geoptimaliseerd voor Apple Silicon",
    description:
      "Veel databasetools draaien nog steeds via Rosetta op Apple Silicon Macs, waardoor batterij en prestaties worden verspild. Een native ARM-build maakt een merkbaar verschil voor een app die je de hele dag open hebt staan.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een M-serie Mac gekocht vanwege de prestaties en batterijduur. Dan installeer je een databasetool en merk je dat deze via Rosetta draait — de Intel-vertaallaag die bestaat voor compatibiliteit, niet voor prestaties. De app gebruikt meer geheugen, verbruikt meer batterij en start trager op dan zou moeten. Voor een tool die je misschien de hele dag naast Xcode of VS Code open hebt staan, telt die overhead op.</p>

<h2>De Rosetta-belasting op databasetools</h2>
<p>Veel populaire databasebrowsers worden nog steeds geleverd als Intel-only binaries of zijn gebouwd met Electron, dat pas recent betrouwbare ondersteuning voor Apple Silicon kreeg. DB Browser for SQLite, gebouwd met Qt, heeft wisselende ARM-ondersteuning gehad tussen versies. DBeaver draait op Java, wat weer een extra abstractielaag boven de hardware toevoegt. Zelfs tools die technisch gezien Apple Silicon ondersteunen, bundelen vaak Electron's Chromium-engine, die aanzienlijk meer resources verbruikt dan een native app nodig heeft.</p>
<p>Controleer Activiteitenweergave en kijk naar de kolom "Type". Als je databasetool "Intel" toont op een M-serie Mac, draait het via Rosetta. Dat betekent trager opstarten, hoger geheugengebruik en verminderde batterijduur vergeleken met een native ARM-binary. Voor een lichtgewicht hulpmiddel zoals een SQLite-viewer is het prestatiegat bijzonder merkbaar, omdat de app zelf snel en klein hoort te zijn.</p>

<h2>Tome: native Apple Silicon vanaf dag één</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> is gebouwd met Swift en AppKit als een universele binary die native draait op zowel Apple Silicon als Intel Macs. Op een M-serie Mac start het direct op, gebruikt het minimaal geheugen en heeft het geen enkele Rosetta-overhead. Het is het soort app waarvoor Apple Silicon is ontworpen om te draaien.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQLite viewer running natively on Apple Silicon Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Direct opstarten, laag geheugengebruik</h3>
<p>Geen JVM-opstart, geen initialisatie van de Chromium-engine, geen Rosetta-vertaling. Tome opent binnen een seconde en blijft lichtgewicht — meestal met een fractie van het geheugen dat op Electron gebaseerde alternatieven verbruiken. Houd het de hele dag open zonder dat het je andere werk beïnvloedt.</p>

<h3>Soepel scrollen door grote tabellen</h3>
<p>Native AppKit-rendering betekent dat Tome door duizenden rijen scrollt met dezelfde soepelheid die je van Finder of Numbers verwacht. Geen gemiste frames, geen vertraging bij het springen naar het einde van een grote resultatenset. De M-serie chip verwerkt native UI moeiteloos.</p>

<h3>Volledige functieset, minimale voetafdruk</h3>
<p>Blader door tabellen, views, indexen en triggers. Bewerk data inline. Voer SQL-queries uit met syntaxismarkering en auto-aanvulling. Maak en wijzig tabellen visueel. Dit alles in een app die de resources van je Mac respecteert omdat hij specifiek voor het platform is gebouwd.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "open-whatsapp-backup-sqlite-mac": {
    slug: "open-whatsapp-backup-sqlite-mac",
    title: "Hoe je WhatsApp-backup SQLite opent op Mac",
    description:
      "WhatsApp slaat chatgeschiedenis op in een SQLite-database. Die berichten buiten de app bekijken — voor archivering, juridische of persoonlijke redenen — vereist het uitpakken en openen van het databasebestand op je Mac.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>WhatsApp slaat je chatberichten, mediareferenties en contactgegevens op in een SQLite-database. Of je nu een backup van een iPhone hebt uitgepakt met een tool zoals iMazing, een <code>ChatStorage.sqlite</code>-bestand hebt opgehaald uit een iTunes-backup, of een <code>msgstore.db</code> uit een Android-backup hebt gehaald, je hebt nu een databasebestand op je Mac. Erop dubbelklikken doet niets nuttigs. Je hebt een manier nodig om het te openen en de gesprekken erin te lezen.</p>

<h2>Waarom dit moeilijker is dan het zou moeten zijn</h2>
<p>WhatsApp's SQLite-databases gebruiken hun eigen schema. Berichten staan in tabellen zoals <code>ZWAMESSAGE</code> (iOS) of <code>messages</code> (Android), met kolommen voor afzender, tijdstempel, tekstinhoud, mediatype en status. Tijdstempels worden opgeslagen in niet-standaard formaten — iOS gebruikt Core Data's epoch (seconden sinds 2001-01-01), terwijl Android Unix-milliseconden gebruikt. Contacten worden aangeduid met JID-strings, geen leesbare namen.</p>
<p>Het bestand openen in Terminal met <code>sqlite3</code> geeft je ruwe toegang, maar chatberichten lezen als ongeformatteerde rijen tekst met gecodeerde tijdstempels en JID-identifiers is voor de meeste mensen praktisch onbruikbaar. Je hebt een visuele interface nodig om de data te begrijpen.</p>
<p>Android-backups voegen nog een complicatie toe: het bestand <code>msgstore.db.crypt15</code> is versleuteld. Je moet het eerst ontsleutelen met je sleutelbestand voordat een SQLite-browser het kan openen. Eenmaal ontsleuteld, is het echter een standaard SQLite-database.</p>

<h2>Blader door WhatsApp-data met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> opent WhatsApp's SQLite-databasebestanden zoals elke andere database. Sleep het uitgepakte <code>ChatStorage.sqlite</code>- of ontsleutelde <code>msgstore.db</code>-bestand naar Tome en zie elke tabel in de zijbalk. Klik op de berichtentabel om je chatgeschiedenis te doorbladeren in een scrollbaar raster.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome opening a WhatsApp backup SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Lees berichten in context</h3>
<p>Blader door de berichtentabel om tekstinhoud, afzenderidentifiers, tijdstempels en mediareferenties te zien. Sorteer op datum om gesprekken chronologisch te lezen. Gebruik Tome's SQL-editor om berichten te filteren op contact of datumbereik.</p>

<h3>Zoek in alle gesprekken</h3>
<p>Moet je een specifiek bericht vinden? Schrijf een snelle query in Tome's SQL-editor met auto-aanvulling: <code>SELECT * FROM ZWAMESSAGE WHERE ZTEXT LIKE '%keyword%';</code> Resultaten verschijnen in een native raster dat je kunt scrollen en sorteren — veel praktischer dan grep in Terminal.</p>

<h3>Je data blijft op je Mac</h3>
<p>In tegenstelling tot webgebaseerde SQLite-viewers die vereisen dat je je database uploadt, draait Tome volledig lokaal. Je WhatsApp-berichten verlaten nooit je machine. Openen, doorbladeren, query's uitvoeren en sluiten — alles gebeurt op je Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "sqlite-query-editor-autocomplete-mac": {
    slug: "sqlite-query-editor-autocomplete-mac",
    title: "SQLite-query-editor met autoaanvulling op Mac",
    description:
      "SQL-queries schrijven tegen een SQLite-database zonder auto-aanvulling betekent voortdurend wisselen tussen de schemaweergave en de editor om tabel- en kolomnamen te controleren.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je schrijft een SELECT-query tegen een SQLite-database met dertig tabellen. Je herinnert je dat de tabel iets heet als <code>user_sessions</code> of <code>session_logs</code> — maar welke van de twee? En de tijdstempelkolom — is dat <code>created_at</code>, <code>timestamp</code> of <code>date_created</code>? In de <code>sqlite3</code> CLI zou je overschakelen naar <code>.schema</code>-modus, de tabel opzoeken, teruggaan naar het schrijven van je query, en dit herhalen voor elke kolomverwijzing. Deze contextwisseling is waar het meeste van je tijd bij het schrijven van queries daadwerkelijk naartoe gaat.</p>

<h2>De kosten van geen auto-aanvulling</h2>
<p>De <code>sqlite3</code> CLI heeft geen auto-aanvulling voor tabel- of kolomnamen. Je typt uit je geheugen, en als je iets verkeerd spelt, krijg je een foutmelding na uitvoering — niet tijdens het typen. Voor eenvoudige databases met een paar tabellen is dit beheersbaar. Voor databases met tientallen tabellen en honderden kolommen is het een constante belasting van je productiviteit.</p>
<p>Sommige ontwikkelaars kopiëren tabelschema's naar een notitiebestand en raadplegen dit tijdens het schrijven van queries. Anderen voeren herhaaldelijk <code>.tables</code> en <code>PRAGMA table_info(tablename);</code> uit. Beide benaderingen zijn workarounds voor een ontbrekende functie — de query-editor zou je schema moeten kennen en je moeten helpen correcte SQL te schrijven.</p>
<p>Volledige database-IDE's zoals DataGrip bieden uitstekende auto-aanvulling, maar ze zijn duur, zwaar en ontworpen voor enterprise-workflows. Voor een lokaal SQLite-bestand zou je geen abonnementsgebaseerde IDE nodig moeten hebben alleen voor suggesties van tabelnamen.</p>

<h2>Tome's query-editor met auto-aanvulling</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> bevat een SQL-query-editor die je databaseschema kent. Begin een tabelnaam te typen en het stelt overeenkomsten voor. Verwijs naar een tabel en kolomnamen verschijnen als aanvullingen. Het is geen volledige IDE — het is precies het niveau van assistentie dat SQLite-queries snel maakt zonder complexiteit toe te voegen.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQL query editor with autocomplete on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Schemabewuste suggesties</h3>
<p>Tome leest het schema van je database wanneer je het bestand opent. Tabelnamen, kolomnamen en SQLite-sleutelwoorden verschijnen allemaal als suggesties terwijl je typt. Geen kolomnamen hoeven te onthouden of tijdens het schrijven van een query naar een schemabrowser hoeven overschakelen.</p>

<h3>Syntaxismarkering</h3>
<p>SQL-sleutelwoorden, tekenreekswaarden, cijfers en identifiers zijn gekleurd. Spot een ontbrekend aanhalingsteken of een verkeerd gespeld sleutelwoord voordat je de query uitvoert, niet nadat je een foutmelding hebt gelezen.</p>

<h3>Resultaten in een native raster</h3>
<p>Queryresultaten verschijnen direct in een native macOS-tabelweergave. Sorteer kolommen, wijzig hun grootte en scroll soepel door grote resultatensets. Kopieer resultaten of selecteer specifieke cellen — het raster gedraagt zich als een echte Mac-dataweergave, geen HTML-tabel gerenderd in een webweergave.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "view-chrome-cookies-sqlite-mac": {
    slug: "view-chrome-cookies-sqlite-mac",
    title: "Hoe je Chrome-cookies (SQLite) bekijkt op Mac",
    description:
      "Chrome slaat cookies op in een SQLite-database op je Mac. Ze bekijken via DevTools werkt voor één site tegelijk, maar de volledige cookiedatabase inspecteren vereist een andere aanpak.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Chrome slaat alle cookies op in een SQLite-databasebestand genaamd <code>Cookies</code> (zonder extensie), te vinden op <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code>. Je kunt cookies voor een enkele site bekijken via Chrome DevTools, maar als je alle cookies wilt doorzoeken, trackingpatronen wilt analyseren, of wilt controleren welke data sites hebben opgeslagen, moet je het daadwerkelijke databasebestand openen. Chrome biedt geen manier om zijn volledige cookieopslag visueel te doorbladeren.</p>

<h2>De beperking van DevTools</h2>
<p>Het tabblad Applicatie in Chrome DevTools toont cookies per domein voor de momenteel geladen pagina. Dit werkt om de cookies van een specifieke site te debuggen, maar schiet tekort wanneer je alle cookies van alle sites wilt zien, een specifieke cookienaam wilt zoeken die door meerdere domeinen wordt gebruikt, of wilt tellen hoeveel trackingcookies er aanwezig zijn. Je zou elke site afzonderlijk moeten bezoeken en inspecteren — niet praktisch.</p>
<p>De databaseaanpak geeft je het volledige beeld. Maar Chrome's <code>Cookies</code>-bestand openen met <code>sqlite3</code> in Terminal betekent rijen lezen met host keys, cookienamen, waarden, verloopdatums (in Chrome's epoch-formaat — microseconden sinds 1 januari 1601) en versleutelde waarden als ruwe tekst. Chrome versleutelt cookiewaarden op macOS, dus de kolom <code>encrypted_value</code> bevat binaire blobs die niet direct leesbaar zijn. De metadatakolommen — host, naam, pad, verloop, vlaggen — zijn nog steeds leesbaar en vaak wat je daadwerkelijk nodig hebt.</p>

<h2>Blader door Chrome-cookies met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> opent Chrome's Cookies-databasebestand en toont de <code>cookies</code>-tabel in een scrollbaar, sorteerbaar raster. Sluit Chrome eerst af (het vergrendelt het bestand), open dan <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code> in Tome.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome viewing Chrome cookies SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zoek in alle domeinen</h3>
<p>Gebruik Tome's SQL-editor om cookies te vinden op naam, host of patroon. Een query zoals <code>SELECT host_key, name, path FROM cookies WHERE name LIKE '%_ga%';</code> onthult elke Google Analytics-cookie van alle sites die je hebt bezocht — iets wat DevTools je niet in één weergave kan tonen.</p>

<h3>Controleer cookiemetadata</h3>
<p>Blader door de cookiestabel om te zien welke domeinen persistente cookies instellen, welke secure-vlaggen gebruiken en welke SameSite-attributen hebben. Sorteer op verloopdatum om cookies te vinden die jarenlang blijven bestaan. Deze informatie is allemaal onversleuteld, ook al zijn de waarden versleuteld.</p>

<h3>Inspecteer andere Chrome-databases</h3>
<p>De profielmap van Chrome bevat ook andere SQLite-databases: <code>History</code>, <code>Login Data</code>, <code>Web Data</code> en <code>Favicons</code>. Elk kan in Tome worden geopend voor visuele inspectie — nuttig om te begrijpen welke data Chrome lokaal opslaat.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "compare-sqlite-databases-mac": {
    slug: "compare-sqlite-databases-mac",
    title: "Hoe je SQLite-databases naast elkaar vergelijkt op Mac",
    description:
      "Na een migratie, schemawijziging of datasynchronisatie is verifiëren dat twee SQLite-databases overeenkomen vervelend zonder een manier om beide gelijktijdig te bekijken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een datamigratie uitgevoerd en moet de resultaten verifiëren. Of je vergelijkt een ontwikkeldatabase met een staging-kopie. Of een collega heeft je zijn versie van een gedeelde database gestuurd en je moet de verschillen ontdekken. In elk geval is de taak hetzelfde: kijk naar twee SQLite-databases en achterhaal wat er is veranderd. Op Mac maken de meeste tools dit verrassend moeilijk omdat ze zijn ontworpen rond één databaseverbinding.</p>

<h2>Waarom databases vergelijken meestal pijnlijk is</h2>
<p>Met de <code>sqlite3</code> CLI betekent het vergelijken van twee databases dat je twee terminalvensters opent, dezelfde query in elk uitvoert en de output visueel scant op verschillen. Voor kleine tabellen werkt dit. Voor tabellen met honderden rijen en tientallen kolommen is het foutgevoelig en traag. Er is geen weergave naast elkaar, geen markering van verschillen — alleen twee stromen platte tekst.</p>
<p>Sommige ontwikkelaars gebruiken <code>sqldiff</code>, een command-line tool die de SQL-instructies uitvoert die nodig zijn om de ene database in de andere te veranderen. Het is krachtig voor gescripte vergelijkingen, maar produceert ruwe SQL-output, geen visuele diff. Begrijpen wat er daadwerkelijk is veranderd vereist het lezen van INSERT-, UPDATE- en DELETE-statements in plaats van de data zelf te zien.</p>
<p>De meeste GUI-databasebrowsers verergeren het probleem doordat ze slechts één database tegelijk ondersteunen. Je opent database A, inspecteert deze, sluit ze, opent database B en probeert je te herinneren wat je in database A zag. Sommige tools ondersteunen meerdere verbindingen, maar vereisen handmatige instelling voor elk.</p>

<h2>Open beide databases naast elkaar met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> is een documentgebaseerde macOS-app, wat betekent dat elke database in zijn eigen venster opent met zijn eigen volledige interface. Open twee databases en rangschik ze naast elkaar met macOS Gesplitste weergave of door vensters te slepen — dezelfde manier waarop je twee tekstbestanden zou vergelijken.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome comparing two SQLite databases side by side on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Visuele schemavergelijking</h3>
<p>Met beide databases geopend, controleer je de zijbalk van elk venster. Heeft de bron tabellen die de bestemming niet heeft? Zijn indexen aanwezig in de ene maar ontbreken ze in de andere? Een visuele blik op beide zijbalken beantwoordt deze vragen direct.</p>

<h3>Vergelijking op rijniveau</h3>
<p>Open dezelfde tabel in beide vensters en scroll door de data. Sorteer beide op dezelfde kolom om rijen uit te lijnen. Verschillen in rijaantal of datawaarden worden zichtbaar wanneer je beide rasters tegelijk kunt zien.</p>

<h3>Query beide onafhankelijk</h3>
<p>Elk venster heeft zijn eigen SQL-query-editor. Voer dezelfde aggregatiequery uit in beide — <code>SELECT COUNT(*) FROM users;</code> — en vergelijk resultaten naast elkaar. Schrijf complexere queries om sommen, gemiddelden of het bestaan van specifieke records in elke database onafhankelijk te controleren.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "lightweight-database-browser-mac": {
    slug: "lightweight-database-browser-mac",
    title: "Lichtgewicht databasebrowser voor Mac — Geen Electron, geen Java",
    description:
      "Databasebrowsers die Chromium of de JVM bundelen, verbruiken honderden megabytes voordat je zelfs maar een bestand hebt geladen. Een lichtgewicht alternatief zou moeten gebruiken wat macOS al biedt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je installeert een databasebrowser, en Activiteitenweergave laat zien dat deze 350 MB RAM gebruikt — voordat je zelfs maar één bestand hebt geopend. De app heeft meerdere seconden nodig om op te starten. Scrollen door een tabel hapert. De interface komt niet overeen met je andere Mac-apps. Dit zijn de kosten van op Electron en Java gebaseerde databasetools: ze brengen hun eigen render-engine mee, hun eigen UI-framework en hun eigen geheugenoverhead, ongeacht wat je er daadwerkelijk mee doet.</p>

<h2>Waarom databasebrowsers onnodig zwaar zijn</h2>
<p>Electron-apps leveren een volledige Chromium-browser om hun interface te renderen. Voor een databasebrowser — een app die vooral tabellen met data weergeeft — is dit alsof je een dieselgenerator verscheept om een bureaulamp van stroom te voorzien. DBeaver en soortgelijke tools draaien op Java, wat een JVM-opstartboete, garbage collection-pauzes en geheugengebruik betekent dat na verloop van tijd toeneemt. Beide benaderingen geven prioriteit aan cross-platform compatibiliteit boven efficiëntie.</p>
<p>Op macOS is deze overhead bijzonder frustrerend omdat het besturingssysteem al alles biedt wat een databasebrowser nodig heeft: AppKit voor native tabelweergaven, Core Graphics voor rendering, en ingebouwde ondersteuning voor donkere modus, tabs en vensterbeheer. Een databasebrowser die deze frameworks rechtstreeks gebruikt, kan een fractie van de grootte zijn en dramatisch sneller dan een app die zijn eigen platform meebrengt.</p>

<h2>Tome: een databasebrowser die je resources respecteert</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> is gebouwd met Swift en AppKit — geen Electron, geen Java, geen webweergaven. Het gebruikt dezelfde native frameworks als Finder en Voorvertoning, wat resulteert in een app die direct opstart, licht blijft in geheugengebruik en aanvoelt alsof hij thuishoort op je Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome lightweight native SQLite browser for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Opstarten in minder dan een seconde</h3>
<p>Geen JVM-initialisatie, geen Chromium-opstart. Tome opent sneller dan de tijd die de meeste Electron-apps nodig hebben om hun splashscreen te tonen. Klik op het dock-icoon en je database is bijna direct klaar om te doorbladeren.</p>

<h3>Minimale geheugenvoetafdruk</h3>
<p>Native AppKit-tabelweergaven renderen duizenden rijen met een fractie van het geheugen dat een webgebaseerd raster zou verbruiken. Houd Tome open naast Xcode, VS Code en je browser zonder dat het om resources concurreert.</p>

<h3>Volledige functieset, klein pakket</h3>
<p>Lichtgewicht zijn betekent niet beperkt zijn. Tome bevat alles wat je nodig hebt voor SQLite-werk: blader door tabellen, views, indexen en triggers; bewerk data inline; voeg rijen in en verwijder ze; maak tabellen visueel aan; en voer SQL-queries uit met syntaxismarkering en auto-aanvulling. Allemaal in een app die de resources van je Mac met respect behandelt.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "export-sqlite-to-csv-mac": {
    slug: "export-sqlite-to-csv-mac",
    title: "Hoe je SQLite exporteert naar CSV op Mac",
    description:
      "Data uit een SQLite-database halen en in een spreadsheet krijgen betekent meestal worstelen met de opmaakopties van de sqlite3 CLI of een script schrijven. Een visuele tool maakt hier een taak van één query van.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je moet data uit een SQLite-database in een CSV-bestand krijgen — misschien om te delen met een collega die Excel gebruikt, om te importeren in een datavisualisatietool, of om records in een draagbaar formaat te archiveren. De <code>sqlite3</code> CLI kan dit, maar de workflow is omslachtig: stel de modus in op CSV met <code>.mode csv</code>, stel het uitvoerbestand in met <code>.output filename.csv</code>, voer je query uit, en onthoud dan om de uitvoer terug te zetten met <code>.output stdout</code>. Mis een stap en je krijgt óf geen bestand óf je terminal blijft stil omdat de uitvoer nog steeds wordt omgeleid.</p>

<h2>De CLI-exportworkflow is foutgevoelig</h2>
<p>Exporteren naar CSV met <code>sqlite3</code> vereist meerdere puntcommando's in de juiste volgorde. Een typische sessie ziet er zo uit:</p>
<pre><code>sqlite3 mydb.sqlite
.headers on
.mode csv
.output export.csv
SELECT * FROM products WHERE category = 'electronics';
.output stdout</code></pre>
<p>Vergeet <code>.headers on</code> en je CSV heeft geen kolomkoppen. Vergeet <code>.output stdout</code> en het resultaat van je volgende query gaat naar het bestand in plaats van naar het scherm. Wil je een tweede tabel exporteren? Herhaal de hele reeks met een andere bestandsnaam. Voor een eenmalige export is het te dragen. Voor regelmatige exports over meerdere tabellen is het vervelend en foutgevoelig.</p>
<p>Je zou een Python-script kunnen schrijven met de modules <code>csv</code> en <code>sqlite3</code>, maar dat is engineering-overhead voor wat een eenvoudige dataextractietaak zou moeten zijn.</p>

<h2>Exporteren met Tome's query-editor</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> laat je elke SQL-query uitvoeren en de resultaten zien in een native raster. Vandaar geeft het selecteren en kopiëren van de data je een formaat dat je direct in een spreadsheet kunt plakken of als CSV kunt opslaan. Schrijf je query met auto-aanvulling, voer hem uit en haal de data eruit — geen puntcommando's, geen moduswisseling.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome exporting SQLite query results on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Eerst queryen, exporteer alleen wat je nodig hebt</h3>
<p>In plaats van een hele tabel te exporteren en te filteren in Excel, schrijf je een gerichte query in Tome: filter rijen, koppel tabellen, aggregeer waarden en formatteer kolommen met SQL. Exporteer alleen de data die je daadwerkelijk nodig hebt, al gevormd zoals je wilt.</p>

<h3>Visuele verificatie vóór export</h3>
<p>Bekijk je queryresultaten in een scrollbaar raster voordat je exporteert. Controleer of kolommen kloppen, data er goed uitziet en het aantal rijen overeenkomt met de verwachtingen. Fouten opsporen vóór export bespaart je het overdoen van het werk nadat je een slechte CSV in Excel hebt geopend.</p>

<h3>Blader eerst door het volledige schema</h3>
<p>Weet je niet zeker welke tabel de data bevat die je nodig hebt? Blader door tabellen, views en hun kolommen in de zijbalk van Tome. Klik door voorbeelddata om het schema te begrijpen voordat je je exportquery schrijft. Deze visuele verkenning is veel sneller dan <code>.schema</code>-commando's uitvoeren in Terminal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "sqlite-for-data-science-mac": {
    slug: "sqlite-for-data-science-mac",
    title: "SQLite-browser voor data science op Mac",
    description:
      "Data scientists die werken met lokale datasets in SQLite hebben een manier nodig om schema's te verkennen, data te bekijken en queries te testen voordat ze pipeline-code schrijven — zonder een volledige databaseserver op te starten.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een dataset ontvangen als een SQLite-bestand — een Kaggle-download, een gescrapete dataset, de export van een collega, of je eigen ETL-uitvoer. Voordat je Python-code schrijft om het te verwerken, moet je begrijpen wat erin zit: tabelnamen, kolomtypes, rijaantallen, dataverdelingen en mogelijke kwaliteitsproblemen. Jupyter-notebooks kunnen SQLite bevragen, maar de verbinding opzetten, verkennende SQL schrijven en resultaten renderen in notebookcellen is overhead wanneer je gewoon snel naar de data wilt kijken.</p>

<h2>De verkenningskloof in data science-workflows</h2>
<p>Data scientists verkennen SQLite-bestanden meestal met een van drie benaderingen: de <code>sqlite3</code> CLI (snel maar geen visuele uitvoer), een Jupyter-notebook met <code>pandas.read_sql()</code> (flexibel maar vereist opzet per sessie), of een zware database-IDE zoals DBeaver (krachtig maar overkill voor een lokaal bestand). Geen van deze raakt de sweet spot van "open een bestand en blader direct door de data".</p>
<p>De CLI is bijzonder zwak voor dataverkenning omdat er geen visuele opmaak is voor brede tabellen, geen scrollbare uitvoer en geen manier om snel dataverdelingen te overzien. Notebooks voegen waarde toe voor analyse, maar zijn traag voor de eerste fase van "hoe ziet deze data eruit?". Je schrijft uiteindelijk boilerplate-verbindingscode voordat je ook maar één rij ziet.</p>

<h2>Verken datasets visueel met Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> laat je een SQLite-dataset openen en meteen de structuur begrijpen. Elke tabel verschijnt in de zijbalk met zijn rijaantal. Klik op een tabel om door de data te scrollen in een native raster. Geen opzet, geen verbindingsreeksen, geen boilerplate — gewoon het bestand openen en kijken.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing a data science SQLite dataset on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Begrijp schema voordat je code schrijft</h3>
<p>Blader door tabellen om kolomnamen, types en voorbeeldwaarden te zien. Identificeer welke kolommen null-waarden bevatten, welke tabellen via foreign keys aan elkaar gerelateerd zijn, en hoe de dataset is gestructureerd — allemaal voordat je een enkele regel Python schrijft. Deze context maakt je analysecode vanaf het begin gerichter.</p>

<h3>Test queries interactief</h3>
<p>Gebruik Tome's SQL-editor met auto-aanvulling om queries te prototypen. Test je WHERE-clausules, JOIN-voorwaarden en aggregaties eerst in Tome, kopieer dan de werkende SQL naar je Python-pipeline. Queryfouten opsporen in een visuele editor is sneller dan ze debuggen in een notebookcel.</p>

<h3>Inspecteer ETL-uitvoer</h3>
<p>Nadat je pipeline resultaten naar een SQLite-database heeft geschreven, open je deze in Tome om de uitvoer te verifiëren. Controleer rijaantallen, spot null-waarden en bevestig dat transformaties de verwachte resultaten hebben opgeleverd — allemaal zonder extra verificatiecode te schrijven.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },

  "postico-alternative-sqlite-mac": {
    slug: "postico-alternative-sqlite-mac",
    title: "Postico-alternatief voor SQLite op Mac",
    description:
      "Postico is een geliefde, native Mac-databaseclient — maar het ondersteunt alleen PostgreSQL. Als je met SQLite-bestanden werkt, heb je dezelfde native kwaliteit nodig voor een ander formaat.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Als je Postico hebt gebruikt voor PostgreSQL op Mac, weet je hoe een native databaseclient hoort aan te voelen: direct opstarten, een overzichtelijke interface, correcte macOS-integratie en precies genoeg functies om productief te zijn zonder rommel. Het wordt algemeen beschouwd als een van de beste databasetools op het platform. Het enige probleem is dat Postico geen SQLite ondersteunt. Als je data in .sqlite-bestanden leeft in plaats van op een PostgreSQL-server, moet je iets anders zoeken — en dat "iets anders" is meestal een Electron- of Java-app die niets aanvoelt als Postico.</p>

<h2>De kloof tussen Postico en SQLite-tools</h2>
<p>Postico bewees dat een databaseclient een geweldige Mac-app kan zijn. Het gebruikt native macOS-bedieningselementen, respecteert systeemconventies, start snel op en blijft uit de weg. Het zette een standaard die de meeste SQLite-browsers niet hebben gehaald.</p>
<p>DB Browser for SQLite is Qt-gebaseerd — functioneel maar visueel losgekoppeld van macOS. TablePlus ondersteunt SQLite, maar ook een tiental andere databases, wat complexiteit met zich meebrengt die Postico bewust vermijdt. DBeaver draait op Java met alle resource-overhead die dat impliceert. Geen van deze tools levert de "gebouwd voor Mac"-ervaring die Postico-gebruikers verwachten.</p>
<p>Het probleem is niet dat dit slechte tools zijn — dat zijn ze niet. Het is dat zodra je een écht native Mac-databaseclient hebt ervaren, cross-platform alternatieven aanvoelen als een compromis. Je wilt dezelfde filosofie toegepast op een ander formaat.</p>

<h2>Tome: de Postico-ervaring voor SQLite</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> brengt dezelfde native Mac-kwaliteit naar SQLite die Postico naar PostgreSQL brengt. Gebouwd met Swift en AppKit, start het direct op, volgt het macOS-ontwerpconventies en richt het zich op het goed doen van één ding — SQLite-databases doorbladeren en bewerken.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome as a Postico-quality SQLite browser for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dezelfde filosofie, ander formaat</h3>
<p>Net als Postico is Tome laserscherp gefocust. Geen PostgreSQL, geen MySQL, geen MongoDB — alleen SQLite. Elke functie is ontworpen voor het formaat waarmee je werkt. De interface is overzichtelijk, de app is snel en er is niets overbodigs dat om je aandacht vraagt.</p>

<h3>Native macOS-ervaring</h3>
<p>Documentgebaseerde architectuur met correcte venster- en tabondersteuning. Systeem-donkere modus. Slepen en neerzetten vanuit Finder. Sneltoetsen die overeenkomen met macOS-conventies. Tome gedraagt zich als een Mac-app omdat het er een is — gebouwd met dezelfde frameworks die Apple gebruikt voor zijn eigen applicaties.</p>

<h3>Doorbladeren, bewerken en query's uitvoeren</h3>
<p>Blader door tabellen, views, indexen en triggers in de zijbalk. Bewerk cellen inline. Voeg rijen in en verwijder ze zonder SQL te schrijven. Wanneer je queries nodig hebt, biedt de ingebouwde editor syntaxismarkering en auto-aanvulling voor je schema. Het is alles wat een SQLite-browser nodig heeft — en niets wat overbodig is.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Haal Tome in de Mac App Store</a></p>
`,
  },
};
