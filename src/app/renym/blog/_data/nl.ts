import type { ArticleSet } from "./index";

export const nlArticles: ArticleSet = {
  "rename-multiple-files-mac": {
    slug: "rename-multiple-files-mac",
    title: "Meerdere bestanden tegelijk hernoemen op de Mac",
    description: "Bestanden een voor een hernoemen kost uren die je beter aan echt werk kunt besteden. macOS heeft een paar ingebouwde opties, maar die schieten al snel tekort zodra je meer nodig hebt dan simpele opeenvolgende naamgeving.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een map vol bestanden met vreselijke namen. Misschien komen ze van een camera, een scanner, of van een klant die "definitief_definitief_v3_ECHT.pdf" een acceptabele naamgeving vindt. Je moet ze allemaal hernoemen naar iets overzichtelijks. Op de Mac heb je een paar opties — maar de meeste lopen verrassend snel vast.</p>

<p>Als je ooit twintig minuten hebt besteed aan het een voor een hernoemen van bestanden in Finder, ken je de pijn al. En als je Finders ingebouwde batchfunctie voor hernoemen hebt geprobeerd, weet je dat die de basis dekt, maar je in de kou laat staan zodra je echte controle nodig hebt.</p>

<h2>Wat macOS standaard biedt</h2>

<p>Finder heeft wel degelijk een functie om bestanden in bulk te hernoemen. Selecteer meerdere bestanden, klik met de rechtermuisknop en kies "Wijzig naam." Je krijgt drie modi: tekst vervangen, tekst toevoegen, of opmaak (opeenvolgende nummering). Voor eenvoudige klussen — een voorvoegsel toevoegen of een woord vervangen — werkt dit prima. Maar de beperkingen komen snel om de hoek kijken:</p>

<ul>
  <li>Geen regex of patroonherkenning</li>
  <li>Geen manier om specifieke tekens op een bepaalde positie te verwijderen</li>
  <li>Geen voorbeeld van de uiteindelijke namen voordat je de wijziging doorvoert</li>
  <li>Geen meerstaps-hernoeming — je kunt maar één bewerking tegelijk uitvoeren</li>
  <li>Geen ongedaan maken als je een fout maakt bij honderden bestanden</li>
</ul>

<p>Voor alles wat verder gaat dan triviaal hernoemen, heb je een speciale tool nodig.</p>

<h2>De visuele pijplijn-aanpak</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> pakt batchgewijs hernoemen anders aan. In plaats van één tekstveld en een "start"-knop, bouw je een visuele pijplijn van hernoem-acties. Elke stap transformeert de bestandsnaam, en je stapelt zoveel stappen als je nodig hebt.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym batch file renaming pipeline on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Slepen, voorbeeld bekijken, toepassen</h3>

<p>Sleep je bestanden naar Renym en zie meteen de huidige namen naast een live voorbeeld van wat ze gaan worden. Elke actie die je toevoegt werkt de preview in real time bij, zodat je precies weet hoe het resultaat eruitziet voordat je ook maar één bestand aanraakt.</p>

<h3>Meerdere bewerkingen stapelen</h3>

<p>Moet je een voorvoegsel verwijderen, underscores vervangen door koppeltekens, en volgnummers toevoegen? Bouw een pijplijn van drie stappen. Elke stap voedt de volgende, en je kunt stappen herschikken of verwijderen zonder opnieuw te beginnen.</p>

<h3>Ongedaan maken als het misgaat</h3>

<p>300 bestanden hernoemd en er net achter gekomen dat stap twee fout was? Renym ondersteunt ongedaan maken, zodat je de hele batch kunt terugdraaien en opnieuw kunt proberen. Geen namen een voor een handmatig herstellen.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "batch-rename-photos-mac": {
    slug: "batch-rename-photos-mac",
    title: "Foto's in bulk hernoemen op de Mac",
    description: "Camerabestanden met namen als IMG_4872.JPG vertellen je niets over wat er op de foto staat of wanneer de shoot plaatsvond. Ze handmatig hernoemen is geen optie als je honderden foto's van één sessie hebt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Elke camera, of het nu een spiegelreflex, systeemcamera of je iPhone is, dumpt bestanden met namen als IMG_4872.JPG, DSC_0034.CR2 of P1040291.RW2. Deze namen betekenen niets. Bij 400 foto's van een bruiloft of een productshoot is scrollen door betekenisloze nummers op zoek naar de juiste afbeelding pure tijdverspilling.</p>

<p>Je wilt namen zoals "Jansen_Bruiloft_001.jpg" of "Productshoot_Maart_001.CR2" — iets waar je daadwerkelijk op kunt zoeken en sorteren. Maar 400 bestanden met de hand hernoemen gaat er niet van komen.</p>

<h2>Waarom Finder niet volstaat voor het hernoemen van foto's</h2>

<p>Finders batchfunctie kan volgnummers toevoegen en tekst vervangen, maar fotografen hebben meer nodig:</p>

<ul>
  <li>Het originele camera-voorvoegsel (IMG_, DSC_, enz.) verwijderen en vervangen door een eigen naam</li>
  <li>Volgnummers met nullen toevoegen (001, 002, 003 in plaats van 1, 2, 3)</li>
  <li>Bestandsextensies behouden terwijl al het andere verandert</li>
  <li>Gemengde formaten uit dezelfde shoot verwerken (JPG + RAW)</li>
  <li>Alle 400 namen vooraf bekijken voordat je de wijziging doorvoert</li>
</ul>

<p>Finder kan een deel hiervan, maar niet alles tegelijk, en al helemaal niet met een live voorbeeld van de hele batch.</p>

<h2>Fotobatches hernoemen met een pijplijn</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> handelt het hernoemen van foto's af met een visuele pijplijn waarmee je bewerkingen aan elkaar kunt koppelen. Dit is een typische workflow voor het hernoemen van foto's:</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renaming a batch of photos on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Stap 1: verwijder het cameravoorvoegsel</h3>

<p>Gebruik zoeken en vervangen om "IMG_" of "DSC_" uit elke bestandsnaam te halen. Dit werkt in één keer op de hele batch.</p>

<h3>Stap 2: voeg een beschrijvende naam toe</h3>

<p>Voeg je eigen voorvoegsel toe — de naam van de klant, het project of een omschrijving van de shoot. Elk bestand in de batch krijgt hetzelfde voorvoegsel.</p>

<h3>Stap 3: voeg volgnummers toe</h3>

<p>Voeg nummers met voorloopnullen toe zodat bestanden correct sorteren. 001, 002, 003 in plaats van 1, 10, 100, 2, 20 — wat je krijgt zonder voorloopnullen.</p>

<h3>Live voorbeeld voordat je toepast</h3>

<p>Elke stap werkt een live voorbeeldkolom bij. Je ziet "IMG_4872.JPG" links en "Jansen_Bruiloft_001.JPG" rechts. Geen giswerk, geen fouten, geen 400 bestanden handmatig herstellen na een mislukte hernoeming.</p>

<p>Klopt er iets niet? Herschik de stappen, pas een parameter aan, of verwijder een stap helemaal. Het voorbeeld werkt direct bij.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-files-regex-mac": {
    slug: "rename-files-regex-mac",
    title: "Bestanden hernoemen met regex op de Mac",
    description: "Wanneer bestandsnamen een patroon volgen — data verwerkt in tekst, versienummers, willekeurige voorvoegsels — kan eenvoudig zoeken en vervangen dat niet aan. Reguliere expressies wel, maar macOS biedt van huis uit geen regex-hernoeming.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Je hebt een map vol bestanden zoals "rapport_2026-03-15_concept_v2.pdf" en je wilt alleen de datum eruit halen en herformatteren, of alles na de underscore verwijderen, of een patroon vervangen dat per bestand verschilt. Simpele tekstvervanging lukt hier niet, omdat de tekst niet in elk bestand hetzelfde is — hij volgt een patroon.</p>

<p>Reguliere expressies (regex) zijn hét gereedschap voor patroongebaseerde tekstbewerking. Ze laten je delen van een bestandsnaam matchen, vastleggen en herschikken op basis van regels in plaats van exacte tekenreeksen. Het probleem is dat macOS nergens in Finder regex-hernoeming aanbiedt.</p>

<h2>De Terminal-aanpak en waarom de meeste mensen die vermijden</h2>

<p>Je kunt bestanden met regex hernoemen via Terminal-commando's zoals <code>rename</code>, <code>sed</code>, of een bash-lus met parameteruitbreiding. Bijvoorbeeld:</p>

<p><code>for f in *.pdf; do mv "$f" "$(echo "$f" | sed 's/concept_v[0-9]*/definitief/')"; done</code></p>

<p>Dit werkt, maar heeft echte nadelen:</p>

<ul>
  <li>Geen voorbeeld — je ziet het resultaat pas nadat de hernoeming heeft plaatsgevonden</li>
  <li>Eén typefout in de regex en je hebt verminkte bestandsnamen zonder ongedaan maken</li>
  <li>Regex schrijven en debuggen in een one-liner is een ellende</li>
  <li>Niet-technische gebruikers kunnen deze aanpak in de praktijk niet gebruiken</li>
</ul>

<p>Zelfs ervaren ontwikkelaars vermijden Terminal-hernoeming bij grote batches, omdat het risico op onomkeerbare fouten te groot is.</p>

<h2>Regex-hernoeming met live voorbeeld</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> heeft volledige regex-ondersteuning in de zoek-en-vervang-actie. Je schrijft een regex-patroon, definieert een vervanging (inclusief verwijzingen naar vastgelegde groepen), en ziet het resultaat op elk bestand in real time — voordat er iets wordt hernoemd.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym regex file renaming with live preview on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vastgelegde groepen in actie</h3>

<p>Stel dat je bestanden heten "2026-03-15_project_alpha.pdf" en je wilt "project_alpha_2026-03-15.pdf." Schrijf een regex die de datum en de projectnaam als aparte groepen vastlegt, en herschik ze vervolgens in het vervangingsveld. De voorbeeldkolom toont direct de nieuwe naam van elk bestand.</p>

<h3>Patroongebaseerd strippen</h3>

<p>Moet je alle versie-achtervoegsels zoals "_v1", "_v2", "_v14" verwijderen? Een regex zoals <code>_v\\d+</code> matcht ze allemaal, ongeacht het nummer. Eén actie, één patroon, elk bestand opgeschoond.</p>

<h3>Combineer regex met andere acties</h3>

<p>Regex is slechts één actie in de pijplijn. Na een regex-vervanging kun je volgnummers toevoegen, hoofdlettergebruik aanpassen, of tekst invoegen. Elke stap bouwt voort op de vorige, en het voorbeeld weerspiegelt de hele keten.</p>

<p>Heb je ooit een uur verspild aan het debuggen van een Terminal-hernoemcommando, of regex volledig vermeden omdat er geen manier was om het resultaat te bekijken? Renym lost beide problemen tegelijk op.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "mac-finder-rename-limitations": {
    slug: "mac-finder-rename-limitations",
    title: "Hernoemen in Finder is beperkt — dit kan het niet",
    description: "Finders hernoemtool dekt de basis, maar zodra je regex, meerstapsbewerkingen of een echt voorbeeld nodig hebt, kan het je niet helpen. Hier lees je waar het tekortschiet en wat je in plaats daarvan kunt gebruiken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Apple voegde jaren geleden batchgewijs hernoemen toe aan Finder, en voor simpele taken werkt het prima. Selecteer bestanden, klik met de rechtermuisknop, "Wijzig naam van x items," kies een optie, klaar. Maar als je ooit iets net iets complexers hebt geprobeerd — tekens op een specifieke positie verwijderen, twee hernoembewerkingen aan elkaar koppelen, of een patroon gebruiken — dan ben je tegen de muur gelopen. Finders hernoemfunctie is een startersgereedschap, en het is de afgelopen jaren nauwelijks verbeterd.</p>

<h2>Wat Finder's hernoemfunctie wel kan</h2>

<p>Om eerlijk te zijn, Finder dekt drie basisbewerkingen:</p>

<ul>
  <li><strong>Tekst vervangen:</strong> Zoek een tekenreeks en vervang die door een andere. Werkt in één keer op alle geselecteerde bestanden.</li>
  <li><strong>Tekst toevoegen:</strong> Zet een tekenreeks vóór of achter elke bestandsnaam.</li>
  <li><strong>Opmaak:</strong> Pas volgnummers toe met een eigen voorvoegsel. Kies een startnummer en stapgrootte.</li>
</ul>

<p>Voor het hernoemen van "Rapport" naar "Factuur" bij tien bestanden, of het toevoegen van een datumvoorvoegsel, is dit meer dan voldoende.</p>

<h2>Waar Finders hernoemfunctie tekortschiet</h2>

<h3>Geen regex of patroonherkenning</h3>
<p>Finders vervangfunctie werkt alleen met letterlijke tekst. Je kunt geen patronen matchen zoals "elk cijfer" of "alles na de laatste underscore." Als je bestandsnamen qua structuur verschillen, kan Finder niets voor je betekenen.</p>

<h3>Geen meerstapsbewerkingen</h3>
<p>Je krijgt één bewerking per hernoemactie. Moet je tekst vervangen ÉN een nummer toevoegen ÉN hoofdlettergebruik aanpassen, dan moet je drie aparte hernoembewerkingen uitvoeren, en de bestanden elke keer opnieuw selecteren.</p>

<h3>Geen echt voorbeeld</h3>
<p>Finder toont in het hernoemvenster een voorbeeld van de nieuwe naam van het eerste bestand, maar je kunt de volledige lijst van namen voor en na niet zien. Bij 200 bestanden vertrouw je erop dat dat ene voorbeeld voor de hele batch geldt.</p>

<h3>Geen tekens verwijderen op positie</h3>
<p>Moet je de eerste 4 tekens van elke bestandsnaam verwijderen? Of de laatste 8? Finder heeft daar geen bewerking voor. Je zou handmatig een vervanging moeten samenstellen, en zelfs dan werkt het alleen als die tekens toevallig identiek zijn bij alle bestanden.</p>

<h3>Geen ongedaan maken voor batches</h3>
<p>Als je 500 bestanden hernoemt en het resultaat klopt niet, maakt Command-Z dit ongedaan — maar alleen direct erna. Sluit je het Finder-venster of voer je een andere bewerking uit, dan is de geschiedenis van ongedaan maken verdwenen. Je blijft achter met het handmatig herstellen van namen.</p>

<h2>Wat je in plaats daarvan kunt gebruiken</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> pakt exact op waar Finder ophoudt. Het biedt alles wat Finder heeft — plus regex, tekens verwijderen op positie, hoofdlettergebruik aanpassen, meerstapspijplijnen en een volledig voorbeeld van voor en na voor elk bestand in de batch.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym visual rename pipeline versus Finder limitations" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Je bouwt een pijplijn van hernoemacties, herschikt ze, bekijkt het resultaat vooraf voor elk bestand, en past toe wanneer je tevreden bent. Ben je niet tevreden, maak dan de hele batch ongedaan en pas aan. Geen giswerk, geen herhaalde selecties, geen hopen dat 500 bestanden goed zijn uitgepakt.</p>

<p>Finders hernoemfunctie is prima voor de 10% van hernoemtaken die triviaal zijn. Voor al het andere heb je een echt gereedschap nodig.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "name-mangler-alternative-mac": {
    slug: "name-mangler-alternative-mac",
    title: "Een alternatief voor Name Mangler op de Mac",
    description: "Op zoek naar een app voor bestandshernoeming die regex, volgnummers en meerstapspijplijnen ondersteunt zonder de leercurve van verouderde tools? Hier is een moderne optie.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Name Mangler is al jarenlang een vaste naam als het om batchgewijs hernoemen op de Mac gaat. Het is krachtig, ondersteunt regex, en verwerkt complexe hernoemketens. Maar het draagt ook het gewicht van een ontwerp dat niet echt is meegegaan met de tijd. Heb je Name Mangler geprobeerd en vond je het ingewikkelder dan nodig — of zoek je een alternatief dat aanvoelt als natuurlijk onderdeel van moderne macOS — dan is er een nieuwere optie de moeite waard.</p>

<h2>Wat mensen waarderen aan Name Mangler</h2>

<p>Name Mangler heeft zijn reputatie met goede reden verdiend:</p>

<ul>
  <li>Regex-ondersteuning voor patroongebaseerd hernoemen</li>
  <li>Meerstapshernoemketens (genaamd "droplets" en "geavanceerde" modus)</li>
  <li>Voorbeeld van bestandsnamen voordat je toepast</li>
  <li>Ondersteunt een breed scala aan hernoembewerkingen</li>
</ul>

<p>Voor poweruser die de interface hebben leren kennen, werkt het. Maar veel gebruikers melden dat de interface gedateerd aanvoelt, de leercurve steil is voor wat een eenvoudige taak zou moeten zijn, en simpelere workflows meer klikken vergen dan verwacht.</p>

<h2>Waar je op moet letten bij een alternatief</h2>

<p>Een goed alternatief voor Name Mangler moet de kracht behouden — regex, meerstapspijplijnen, live voorbeeld — terwijl de interface toegankelijker wordt. In het bijzonder:</p>

<ul>
  <li>Een visuele pijplijnbouwer waarin je stappen kunt zien en herschikken</li>
  <li>Bestanden slepen en neerzetten in plaats van menugestuurde bestandsselectie</li>
  <li>Realtime voorbeeld dat bijwerkt terwijl je elke stap bewerkt</li>
  <li>Volledige ondersteuning voor ongedaan maken van de hele hernoemactie</li>
  <li>Een moderne macOS-uitstraling die niet aanvoelt alsof het tien jaar geleden is ontworpen</li>
</ul>

<h2>Renym als alternatief</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> dekt dezelfde kernfunctionaliteit als Name Mangler — regex zoeken en vervangen, volgnummers, tekens invoegen en verwijderen, hoofdlettergebruik aanpassen — maar verpakt dit in een visuele pijplijninterface.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym as a Name Mangler alternative on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Visuele pijplijn</h3>
<p>Elke hernoemactie is een zichtbare stap in een pijplijn. Sleep om te herschikken, klik om te bewerken, verwijder om te wissen. Je ziet de keten in één oogopslag, zonder door tabbladen of dialoogvensters te navigeren.</p>

<h3>Slepen-en-neerzetten workflow</h3>
<p>Sleep bestanden rechtstreeks naar de app. Geen bestandskiezer-dialoogvensters, geen menu-navigatie. Zet een map of een selectie van bestanden neer en begin direct met het bouwen van je pijplijn.</p>

<h3>Live voorbeeld van voor en na</h3>
<p>Elk bestand toont zijn huidige naam en zijn nieuwe naam naast elkaar. Wijzigingen worden in real time bijgewerkt terwijl je een stap in de pijplijn bewerkt. Je ziet het volledige resultaat voor elk bestand, niet slechts een steekproef.</p>

<h3>Volledig ongedaan maken</h3>
<p>Een hernoeming toegepast en het resultaat klopt niet? Maak de hele batch ongedaan en probeer opnieuw. Geen 500 bestandsnamen handmatig terugdraaien.</p>

<p>Was Name Mangler jarenlang je go-to, en wil je dezelfde kracht met een frissere ervaring, dan is Renym een blik waard.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-hundreds-of-files-mac": {
    slug: "rename-hundreds-of-files-mac",
    title: "Honderden bestanden tegelijk hernoemen op de Mac",
    description: "Tien bestanden met de hand hernoemen is al vervelend. Honderden bestanden hernoemen is onbegonnen werk zonder het juiste gereedschap. macOS biedt beperkte ingebouwde opties, en de Terminal-aanpak brengt het risico op onomkeerbare fouten met zich mee.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt 600 bestanden, afkomstig van een scanner, een export, een datamigratie, of een overdracht van een klant. De namen zijn waardeloos — willekeurige tekenreeksen, dubbele voorvoegsels, inconsistente opmaak, verkeerde extensies. Je moet alle 600 hernoemen naar iets overzichtelijks, doorzoekbaars en consistents. Nu meteen.</p>

<p>Tien bestanden met de hand hernoemen kost een minuut. 600 bestanden hernoemen kost de rest van je middag — en je maakt fouten. Typefouten, gemiste bestanden, inconsistente opmaak. Hoe groter de batch, hoe foutgevoeliger handmatig hernoemen wordt.</p>

<h2>Waarom grote batches de gebruikelijke aanpakken breken</h2>

<h3>Finder</h3>
<p>Finders batchfunctie kan eenvoudige bewerkingen op elk aantal bestanden toepassen. Maar bij 600 bestanden is het ontbreken van een volledig voorbeeld een echt probleem. Je ziet in het dialoogvenster één voorbeeldnaam en hoopt dat de andere 599 goed uitpakken. En als dat niet zo is, merk je dat misschien pas later — wanneer ongedaan maken niet meer beschikbaar is.</p>

<h3>Terminal</h3>
<p>Een bash-lus of een <code>rename</code>-commando kan 600 bestanden in seconden verwerken. Maar er is geen voorbeeld, geen ongedaan maken, en één fout in het commando betekent 600 kapotte bestandsnamen. Het risico schaalt mee met de omvang van de batch.</p>

<h3>Hernoemen via een spreadsheet</h3>
<p>Sommigen exporteren bestandsnamen naar een spreadsheet, bewerken ze met formules, en gebruiken vervolgens een script om de nieuwe namen toe te passen. Dit werkt, maar vergt een absurde hoeveelheid voorbereiding voor iets dat een simpele sleep-en-neerzet-bewerking zou moeten zijn.</p>

<h2>Hernoemen op grote schaal, met vertrouwen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> is gebouwd voor precies dit scenario. Sleep honderden bestanden naar binnen, bouw een hernoempijplijn, bekijk elk resultaat vooraf, en pas toe. Klopt het resultaat niet, maak het dan ongedaan en pas aan.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renaming hundreds of files at once on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Volledig voorbeeld, op elke schaal</h3>
<p>Of je nu 20 of 2000 bestanden hebt, het voorbeeld toont de huidige en toekomstige naam van elk bestand. Scroll door de lijst en controleer voordat je toepast. Geen giswerk.</p>

<h3>Meerstapspijplijnen voor complexe hernoemingen</h3>
<p>Grote batches hebben vaak meerdere bewerkingen nodig: een voorvoegsel verwijderen, tekens vervangen, nummering toevoegen, hoofdlettergebruik aanpassen. Bouw de hele keten, bekijk het eindresultaat vooraf, en pas alles in één keer toe.</p>

<h3>De hele batch ongedaan maken</h3>
<p>De hernoeming toegepast en een probleem ontdekt? Ongedaan maken herstelt elk bestand in de batch. Pas de pijplijn aan en probeer opnieuw. Geen honderden namen handmatig terugdraaien.</p>

<p>Hoe groter de batch, hoe meer een speciaal gereedschap zich terugbetaalt. Vijf minuten in Renym besparen uren handmatig werk en elimineren het risico op onomkeerbare fouten.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "sequential-numbering-files-mac": {
    slug: "sequential-numbering-files-mac",
    title: "Volgnummers toevoegen aan bestandsnamen op de Mac",
    description: "Bestanden die in een specifieke volgorde moeten blijven — dia's, frames, pagina's, hoofdstukken — sorteren alleen correct met volgnummers met consistente voorloopnullen.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een set bestanden die in een specifieke volgorde moeten staan: presentatiedia's, animatieframes, boekhoofdstukken, podcastafleveringen, of gescande pagina's. De enige betrouwbare manier om ze correct gesorteerd te houden, is volgnummers aan de bestandsnamen toevoegen. Klinkt simpel. Is het niet — niet zonder het juiste gereedschap.</p>

<h2>Het probleem met voorloopnullen</h2>

<p>Als je bestanden nummert als 1, 2, 3 ... 10, 11, 12, sorteert je bestandsbeheerder ze als:</p>

<ul>
  <li>1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9</li>
</ul>

<p>Dit komt doordat de meeste bestandssystemen alfabetisch sorteren, niet numeriek. "10" komt voor "2" omdat "1" voor "2" komt op de eerste tekenpositie. De oplossing is voorloopnullen: 01, 02, 03 ... 10, 11, 12. Voor grotere sets heb je meer cijfers nodig: 001, 002, 003 ... 100, 101.</p>

<p>De juiste voorloopnullen zijn belangrijk. Te weinig cijfers en je sortering breekt zodra je meer bestanden toevoegt. Te veel en de namen ogen rommelig. En je moet beslissen of het nummer aan het begin of het einde van de bestandsnaam komt.</p>

<h2>Wat macOS van huis uit biedt</h2>

<p>Finders "Opmaak"-optie voor hernoemen kan volgnummers toevoegen met een eigen naamvoorvoegsel. Het regelt voorloopnullen en laat je een startnummer instellen. Voor een eenvoudige nummeringsklus werkt dit.</p>

<p>Maar Finders nummering heeft beperkingen:</p>

<ul>
  <li>Je kunt het nummer alleen vóór of achter plaatsen — niet op een specifieke positie invoegen</li>
  <li>Je kunt nummering niet combineren met andere bewerkingen zoals tekstvervanging</li>
  <li>De nummering vervangt de hele bestandsnaam behalve de extensie — je verliest de oorspronkelijke naam</li>
  <li>Je kunt de stapgrootte niet aanpassen (altijd +1)</li>
</ul>

<h2>Volgnummers als onderdeel van een pijplijn</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> heeft volgnummering als een van de meerdere acties die je aan een hernoempijplijn kunt toevoegen. Dit betekent dat je nummering met elke andere bewerking kunt combineren.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym adding sequential numbers to file names on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Behoud de oorspronkelijke naam en voeg een nummer toe</h3>
<p>In tegenstelling tot Finders opmaakmodus laat Renym je een nummer invoegen zonder de bestaande bestandsnaam te wissen. Voeg "001_" toe als voorvoegsel terwijl "projectbrief.pdf" intact blijft, wat resulteert in "001_projectbrief.pdf."</p>

<h3>Combineer met andere acties</h3>
<p>Maak eerst de naam schoon — verwijder ongewenste voorvoegsels, corrigeer hoofdlettergebruik, vervang tekens — en voeg vervolgens nummering toe als laatste stap. Bij de pijplijnaanpak bouwt elke bewerking voort op de vorige.</p>

<h3>Bekijk de reeks vooraf</h3>
<p>Zie elke genummerde bestandsnaam voordat je toepast. Controleer of de voorloopnullen kloppen, de reeks juist is, en de nummers op de gewenste plek staan.</p>

<p>Volgnummering lijkt triviaal, totdat je 200 bestanden hebt en de sorteervolgorde niet klopt. Het meteen goed doen bespaart later veel opruimwerk.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "remove-characters-from-filenames-mac": {
    slug: "remove-characters-from-filenames-mac",
    title: "Tekens in bulk verwijderen uit bestandsnamen op de Mac",
    description: "Bestandsnamen vol extra tekens, willekeurige voorvoegsels of ongewenste achtervoegsels zijn lastig te doorzoeken en te sorteren. Ze een voor een opschonen is niet realistisch bij tientallen of honderden bestanden.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Geëxporteerde bestanden voegen graag rommel toe aan je namen. Een scanner plakt "Scan_" voor alles. Een CMS zet een ID van 12 tekens ervoor. Een download voegt "(1)" toe omdat het bestand al bestond. Een klant stuurt bestanden met spaties, speciale tekens en inconsistent hoofdlettergebruik, waardoor je overzichtelijke map eruitziet als chaos.</p>

<p>Je moet die extra tekens uit tientallen of honderden bestanden strippen. Handmatig betekent dat klikken, selecteren, verwijderen en op Enter drukken voor elk afzonderlijk bestand. Dat is geen workflow — dat is een straf.</p>

<h2>Wat je niet kunt in Finder</h2>

<p>Finders hernoemtool laat je tekst zoeken en vervangen, wat sommige gevallen van tekenverwijdering afhandelt. Heeft elk bestand "Scan_" aan het begin, dan kun je "Scan_" vervangen door niets. Maar Finder kan het volgende niet:</p>

<ul>
  <li>Tekens op positie verwijderen (bijv. "verwijder de eerste 5 tekens")</li>
  <li>Tekens vanaf het einde verwijderen (bijv. "verwijder alles na de laatste underscore")</li>
  <li>Tekens verwijderen die een patroon matchen (bijv. "verwijder elk stuk tussen haakjes zoals (1), (2), (kopie)")</li>
  <li>Meerdere verwijderingen in één bewerking koppelen</li>
</ul>

<p>Als de tekens die je moet verwijderen niet bij elk bestand identiek zijn, helpt Finders letterlijke tekstmatching niet.</p>

<h2>Tekens in bulk verwijderen met Renym</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> biedt meerdere manieren om tekens uit bestandsnamen te verwijderen, en je kunt ze combineren in één pijplijn.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym removing characters from file names in bulk on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verwijderen op positie</h3>
<p>Verwijder de eerste N of laatste N tekens van elke bestandsnaam. Ideaal voor het strippen van voorvoegsels of achtervoegsels met een vaste lengte maar wisselende inhoud.</p>

<h3>Verwijderen op patroon</h3>
<p>Gebruik regex om variabele tekst te matchen en te verwijderen. Een patroon als <code>\\s*\\(\\d+\\)</code> verwijdert alle "(1)", "(2)", "(3)"-achtervoegsels, ongeacht het nummer. Een patroon als <code>^[A-Z]{3}_</code> strip elk voorvoegsel van drie hoofdletters gevolgd door een underscore.</p>

<h3>Verwijderen via zoeken en vervangen</h3>
<p>Voor eenvoudige gevallen: zoek de ongewenste tekst en vervang die door niets. Werkt voor consistente tekenreeksen zoals "Kopie van ", "Scan_" of " - definitief".</p>

<h3>Verwijderingen aan elkaar koppelen</h3>
<p>Moet je een voorvoegsel strippen ÉN haakjes-achtervoegsels verwijderen ÉN de dubbele spaties opschonen die daarbij achterblijven? Voeg drie acties toe aan de pijplijn. Elke actie werkt op het resultaat van de vorige stap, en het live voorbeeld toont je het uiteindelijke resultaat voor elk bestand.</p>

<p>Bestandsnamen moeten schoon, consistent en doorzoekbaar zijn. Zijn ze dat niet, dan lost een sessie van vijf minuten in Renym de hele batch op.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "change-file-extension-batch-mac": {
    slug: "change-file-extension-batch-mac",
    title: "Bestandsextensies in bulk wijzigen op de Mac",
    description: "Verkeerde bestandsextensies verstoren workflows, verwarren apps en zorgen dat bestanden in het verkeerde programma openen. Ze een voor een wijzigen is tijdrovend. Het via Terminal doen brengt risico's met zich mee zonder voorbeeld.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een ontwikkelaar exporteert 200 HTML-bestanden met een .txt-extensie. Een fotograaf ontvangt RAW-bestanden opgeslagen als .jpg. Een datapijplijn levert CSV-bestanden zonder extensie op. De inhoud is prima — de extensie is fout. En een verkeerde extensie betekent dat een bestand in de verkeerde app opent, uit zoekresultaten wordt gefilterd, of een geautomatiseerde workflow verstoort.</p>

<p>Je moet de extensie bij ze allemaal wijzigen. Niet één voor één. Allemaal tegelijk.</p>

<h2>De Finder-aanpak</h2>

<p>Finder laat je technisch gezien extensies wijzigen — maar slechts één bestand tegelijk. Rechtermuisklik, "Toon info," wijzig de extensie in het naamveld, bevestig het dialoogvenster dat waarschuwt voor het wijzigen van de extensie. Bij 200 bestanden kost dit absurd veel tijd.</p>

<p>Finders batchfunctie kan tekst vervangen, dus je zou ".txt" kunnen vervangen door ".html" — maar dit is kwetsbaar. Heeft een bestand ".txt" ook elders in zijn naam staan (zoals "notities_txt_backup.txt"), dan raakt de vervanging het verkeerde voorkomen. Finder maakt geen onderscheid tussen "de extensie" en "tekst die toevallig overeenkomt."</p>

<h2>De Terminal-aanpak</h2>

<p>Een simpel bash-commando regelt dit:</p>

<p><code>for f in *.txt; do mv "$f" "\\\${f%.txt}.html"; done</code></p>

<p>Snel en effectief — maar geen voorbeeld, geen ongedaan maken, en één fout in het commando betekent 200 bestanden met verminkte namen. Vergeet je de aanhalingstekens en heeft een bestandsnaam spaties, dan is het resultaat onvoorspelbaar.</p>

<h2>Extensies in bulk wijzigen met voorbeeld</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> behandelt extensiewijzigingen als onderdeel van zijn hernoempijplijn. Je kunt specifiek de extensie targeten, zonder de rest van de bestandsnaam te beïnvloeden.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym changing file extensions in batch on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vervang de extensie veilig</h3>
<p>Gebruik zoeken en vervangen met een regex die is verankerd aan het einde van de naam, zodat alleen de extensie wijzigt en niet een overeenkomende tekst elders in de bestandsnaam. Het voorbeeld toont precies wat er verandert bij elk bestand voordat je toepast.</p>

<h3>Voeg een ontbrekende extensie toe</h3>
<p>Bestanden zonder extensie? Voeg ".csv" of ".json" toe, of wat de juiste extensie ook moet zijn. De invoegactie voegt tekst toe aan het einde van de bestandsnaam, na het laatste teken.</p>

<h3>Combineer met andere opschoning</h3>
<p>Extensieproblemen komen vaak samen met andere naamgevingsproblemen voor. Herstel de extensie en maak de bestandsnaam schoon in dezelfde pijplijn — verwijder voorvoegsels, normaliseer hoofdlettergebruik, voeg nummering toe — allemaal in één keer.</p>

<h3>Ongedaan maken indien nodig</h3>
<p>200 extensies gewijzigd en er net achter gekomen dat je de verkeerde hebt gekozen? Maak de hele batch ongedaan. Pas de pijplijn aan en pas opnieuw toe. Geen 200 bestanden handmatig terug hernoemen naar hun oorspronkelijke extensie.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-files-drag-drop-mac": {
    slug: "rename-files-drag-drop-mac",
    title: "Bestanden hernoemen via slepen en neerzetten op de Mac",
    description: "De meeste hernoemtools laten je bestanden opzoeken via een bestandskiezer. Heb je de bestanden al open in een Finder-venster, dan zou je ze direct naar de hernoemtool moeten kunnen slepen.",
    date: "2026-09-06",
    readTime: "3 min leestijd",
    content: `
<p>Je hebt een Finder-venster open met de bestanden die je moet hernoemen. Je weet precies welke het zijn. Nu moet je ze in een hernoemtool krijgen. Als die tool je door een bestandskiezer-dialoogvenster laat gaan — navigeer naar de map, selecteer de bestanden opnieuw, klik op Open — doe je dubbel werk voor niets.</p>

<p>Slepen en neerzetten is de snelste manier om bestanden in een tool te krijgen. Selecteer in Finder, sleep naar de app, zet neer. De bestanden zijn geladen en je kunt beginnen met hernoemen. Het klinkt vanzelfsprekend, maar niet elke hernoemtool ondersteunt het goed.</p>

<h2>Waarom slepen en neerzetten belangrijk is bij hernoemen</h2>

<p>Batchgewijs hernoemen is al een taak die je zo snel mogelijk wilt afronden. Elke extra stap — een bestandskiezer openen, mappen doorlopen, bestanden die je al had geselecteerd opnieuw selecteren — voegt wrijving toe. Slepen en neerzetten haalt die wrijving helemaal weg.</p>

<p>Het laat je ook selectief zijn. Misschien wil je niet elk bestand in de map — alleen de 30 die je in Finder hebt geselecteerd. Sleep die 30 naar binnen. Geen noodzaak om binnen de hernoemtool te filteren.</p>

<h2>Hoe Renym omgaat met slepen en neerzetten</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> is opgebouwd rond een sleep-en-neerzet-workflow. Selecteer bestanden in Finder, sleep ze naar het app-venster, en ze verschijnen meteen in de bestandslijst. Van daaruit bouw je je hernoempijplijn en bekijk je het resultaat vooraf.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym drag and drop file renaming on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zet bestanden overal vandaan neer</h3>
<p>Sleep bestanden vanuit elk Finder-venster, het Bureaublad, of zelfs vanuit een andere app die het slepen van bestandsreferenties ondersteunt. Renym accepteert ze allemaal.</p>

<h3>Voeg op elk moment meer bestanden toe</h3>
<p>Al een batch geladen maar er net achter gekomen dat je bestanden mist? Sleep er meer naar binnen. Ze worden aan de bestaande lijst toegevoegd zonder dat je huidige selectie verdwijnt.</p>

<h3>Bekijk het resultaat vooraf voordat je toepast</h3>
<p>Zodra je bestanden zijn neergezet, toont elke hernoemactie die je toevoegt een live voorbeeld. De oorspronkelijke naam staat naast de nieuwe naam voor elk bestand. Scroll erdoorheen, controleer, en pas toe wanneer je zeker bent.</p>

<h3>De volledige workflow</h3>
<ol>
  <li>Selecteer bestanden in Finder</li>
  <li>Sleep ze naar Renym</li>
  <li>Voeg hernoemacties toe (zoeken/vervangen, nummering, hoofdlettergebruik, enz.)</li>
  <li>Bekijk het voorbeeld van voor en na</li>
  <li>Klik op toepassen</li>
</ol>

<p>Vijf stappen, geen bestandskiezers, geen dialoogvensters, geen opnieuw navigeren. Gewoon bestanden erin, namen eruit.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "photographer-file-naming-mac": {
    slug: "photographer-file-naming-mac",
    title: "Bestandsnaamgeving voor fotografen op de Mac — automatiseer je workflow",
    description: "Een consistent naamgevingssysteem bespaart uren zoeken en voorkomt verloren beelden. Door de camera gegenereerde namen zoals IMG_4872 vertellen je niets over de shoot, de klant of de datum.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Elke professionele fotograaf herkent dit: je opent een map met 800 afbeeldingen genaamd IMG_4001 tot en met IMG_4800 en probeert de opnames van de ceremonie van Jansen te vinden. Of je voegt twee geheugenkaarten samen en ontdekt dat beide beginnen bij DSC_0001. Of een klant vraagt om "het portret met de blauwe jurk van de receptie" en je hebt geen manier om ernaar te zoeken, omdat elk bestand een betekenisloos nummer is.</p>

<p>Een consistent naamgevingssysteem is geen luxe — het is het verschil tussen een doorzoekbaar archief en een kerkhof van willekeurige nummers. Het probleem is dat 800 bestanden na elke shoot handmatig hernoemen niet realistisch is. Je hebt automatisering nodig.</p>

<h2>Hoe een goed naamgevingssysteem eruitziet</h2>

<p>De meeste professionele fotografen komen uit bij een variant van dit patroon:</p>

<p><code>[Datum]_[Klant/Project]_[Volgnummer].[ext]</code></p>

<p>Bijvoorbeeld: <code>2026-09-06_Jansen_Bruiloft_001.jpg</code></p>

<p>Dit levert je:</p>

<ul>
  <li><strong>Chronologische sortering</strong> — bestanden van verschillende shoots sorteren automatisch op datum</li>
  <li><strong>Doorzoekbaarheid</strong> — zoek op "Jansen" en vind elke afbeelding van die klant</li>
  <li><strong>Geen botsingen</strong> — twee shoots op verschillende data krijgen nooit overlappende bestandsnamen</li>
  <li><strong>Correcte sorteervolgorde</strong> — nummers met voorloopnullen (001, 002) sorteren correct, in tegenstelling tot 1, 10, 11, 2</li>
</ul>

<h2>Waarom naamgeving in Lightroom en Capture One niet altijd volstaat</h2>

<p>Zowel Lightroom als Capture One bieden bestandshernoeming bij import. Voor fotografen die uitsluitend binnen één van deze tools werken, dekt de importhernoeming de basis. Maar er zijn veelvoorkomende situaties waarin dit tekortschiet:</p>

<ul>
  <li>Je moet bestanden hernoemen die al zonder hernoeming zijn geïmporteerd</li>
  <li>Je werkt met meerdere tools en hebt consistente naamgeving nodig buiten één catalogus</li>
  <li>Je moet leverbare bestanden hernoemen — geëxporteerde JPEG's, niet alleen RAW-bestanden</li>
  <li>Een klant stuurt bestanden terug met een eigen naamgeving en je moet die normaliseren</li>
  <li>Je voegt archieven samen van verschillende camera's, systemen of jaren</li>
</ul>

<p>In deze gevallen heb je een zelfstandige hernoemtool nodig die op elk bestand werkt, ongeacht welke app het beheert.</p>

<h2>Een naamgevingspijplijn voor fotografen bouwen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> laat je een herbruikbare pijplijn bouwen voor jouw naamgevingsconventie. Eenmaal instellen, en toepassen op elke shoot.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym photographer file naming pipeline on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Stap 1: verwijder het cameravoorvoegsel</h3>
<p>Verwijder IMG_, DSC_, P10, of wat je camera ook genereert. Een zoek-en-vervangactie regelt dit in één stap, of gebruik regex om elk cameravoorvoegselpatroon te matchen.</p>

<h3>Stap 2: voeg je naamgevingsstructuur toe</h3>
<p>Voeg de datum en klant-/projectnaam in. Dit wordt het doorzoekbare, leesbare deel van de bestandsnaam.</p>

<h3>Stap 3: voeg volgnummers toe</h3>
<p>Voeg nummers met voorloopnullen toe zodat de bestanden sorteren in de volgorde waarin ze zijn opgenomen. Kies de breedte van de voorloopnullen op basis van je gebruikelijke shootgrootte — drie cijfers voor shoots onder 1.000 beelden, vier voor grotere sets.</p>

<h3>Stap 4: bekijk vooraf en pas toe</h3>
<p>Scroll door de volledige lijst van namen voor en na. Controleer of de volgorde klopt, de voorloopnullen er goed uitzien, en de naamgeving consistent is. Pas dan toe op de hele batch tegelijk.</p>

<h3>Naamgeving van leverbare bestanden</h3>
<p>Wanneer je definitieve JPEG's exporteert voor een klant, hebben die vaak andere namen nodig dan je werkbestanden. Bouw een aparte pijplijn voor leverbare bestanden: bijvoorbeeld "Jansen_Bruiloft_Web_001.jpg" voor sociale media-bestanden en "Jansen_Bruiloft_Print_001.tif" voor printbestanden.</p>

<p>Een naamgevingssysteem is alleen nuttig als je het ook daadwerkelijk consistent toepast. Door het proces te automatiseren, gebeurt het elke keer, bij elke shoot, zonder de verleiding om het over te slaan omdat je moe bent na een trouwdag van 10 uur.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-files-lowercase-mac": {
    slug: "rename-files-lowercase-mac",
    title: "Bestanden naar kleine letters hernoemen op de Mac",
    description: "Gemengd hoofdlettergebruik in bestandsnamen breekt links, veroorzaakt dubbele uploads en oogt inconsistent in een gedeelde map. Een hele batch handmatig naar kleine letters omzetten is niemands tijd waard.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een map geërfd waar de helft van de bestanden "Rapport.PDF" heet, een kwart "rapport.pdf" en de rest "RAPPORT.pdf." Op een Mac behandelt het bestandssysteem deze meestal als hetzelfde bestand als ze in dezelfde map staan — maar zodra je ze uploadt naar een hoofdlettergevoelige server, synchroniseert naar een Linux-machine, of ernaar verwijst in code, veroorzaakt de inconsistentie echte problemen. Kapotte links, dubbele uploads en bestandspaden die alleen op jouw machine werken, zijn veelvoorkomende symptomen.</p>

<p>De oplossing is conceptueel simpel: maak elke bestandsnaam kleine letters. Het probleem is dit doen bij tientallen of honderden bestanden zonder elk bestand afzonderlijk te hernoemen.</p>

<h2>Finder heeft geen optie voor hoofdlettercorrectie</h2>

<p>Dit is een van de meer verrassende gaten in Finders batchhernoemtool. Je krijgt Tekst vervangen, Tekst toevoegen en Opmaak — geen daarvan raakt het hoofdlettergebruik. Wil je dat "Rapport.PDF" "rapport.pdf" wordt, dan biedt Finder simpelweg geen manier om dat in bulk te doen. Je zou elke naam handmatig opnieuw moeten typen, wat het hele doel van batchverwerking tenietdoet.</p>

<h2>Hoofdlettercorrectie als pijplijnstap</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> heeft een speciale actie voor hoofdlettergebruik die bestandsnamen in één stap omzet naar kleine letters, hoofdletters, titelkapitalisatie of zinskapitalisatie, over een hele batch tegelijk.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym converting file names to lowercase on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Alles naar kleine letters, inclusief de extensie</h3>
<p>Zet "Rapport.PDF" om naar "rapport.pdf" in één actie. De hoofdlettercorrectie geldt voor de volledige bestandsnaam, dus je houdt niet een kleine-letter-naam met een hoofdletter-extensie over.</p>

<h3>Combineer met opschoonstappen</h3>
<p>Inconsistent hoofdlettergebruik komt zelden alleen voor. Koppel een omzetting naar kleine letters aan een vervanging van spaties door koppeltekens of een stap voor tekenverwijdering, en los alles in één keer op in plaats van aparte tools voor elk probleem te gebruiken.</p>

<h3>Bekijk vooraf voordat je toepast</h3>
<p>Zie het resultaat in kleine letters voor elk bestand in de batch voordat je toepast. Is een bestand al correct, dan toont het gewoon geen wijziging — er wordt niets onnodig aangeraakt.</p>

<p>Consistent hoofdlettergebruik is een kleinigheid, totdat het een webupload breekt of dubbele bestanden veroorzaakt op een hoofdlettergevoelig systeem. Het herstellen in een hele map kost één pijplijnstap.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "add-date-to-filename-mac": {
    slug: "add-date-to-filename-mac",
    title: "Datum toevoegen aan bestandsnamen op de Mac",
    description: "Bestanden zonder datum in de naam zijn lastig chronologisch te sorteren en onmogelijk uit elkaar te houden wanneer meerdere versies dezelfde basisnaam delen. Data handmatig aan een hele map toevoegen is traag en foutgevoelig.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een map met facturen, rapporten of exports, en geen daarvan heeft een datum in de naam. Sorteren op "datum gewijzigd" in Finder werkt totdat je de bestanden ergens anders naartoe kopieert en de wijzigingsdatum reset, of totdat iemand je de map e-mailt en de data niet meer weergeven wanneer de bestanden daadwerkelijk zijn gemaakt. De enige betrouwbare oplossing is de datum direct in de bestandsnaam te zetten.</p>

<p>Dit doen voor één bestand kost een paar seconden. Het doen voor tachtig bestanden, elk met een andere aanmaakdatum, is niet iets wat je wilt doen door namen een voor een opnieuw te typen.</p>

<h2>Waarom Finder hier niet kan helpen</h2>

<p>Finders batchhernoemtool kan tekst aan een bestandsnaam toevoegen, maar voegt dezelfde vaste tekst toe aan elk geselecteerd bestand. Er is geen manier om automatisch de daadwerkelijke aanmaak- of wijzigingsdatum van elk bestand in te voegen — Finder kent geen dynamische, per-bestand waarden in zijn hernoemvenster. Delen al je bestanden één datum, dan kun je die handmatig intypen en als voorvoegsel toevoegen. Verschillen de data binnen de batch, dan kan Finder helemaal niets voor je betekenen.</p>

<h2>Data invoegen als onderdeel van een pijplijn</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> laat je een vaste datumtekenreeks als voorvoegsel of achtervoegsel invoegen over een hele batch — handig om een volledige export of levering te taggen met de dag waarop deze is verwerkt.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym adding a date to file names on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tag een hele levering in één keer</h3>
<p>Vandaag een batch bestanden ontvangen die je van de batch van morgen wilt onderscheiden? Voeg "2026-09-06_" toe als voorvoegsel aan elk bestand in één stap. Zes maanden later vertelt de map je precies wanneer elke set is binnengekomen.</p>

<h3>Combineer met volgnummers</h3>
<p>Voeg de datum toe als voorvoegsel en stapel daar volgnummering achteraan: "2026-09-06_001.pdf," "2026-09-06_002.pdf." Zo blijven bestanden per datum gegroepeerd en correct geordend binnen elke groep.</p>

<h3>Behoud de rest van de naam intact</h3>
<p>Voeg de datum in zonder het beschrijvende deel van de bestandsnaam te verstoren. "factuur_klant_a.pdf" wordt "2026-09-06_factuur_klant_a.pdf" — nog steeds leesbaar, nu ook sorteerbaar op datum.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "remove-spaces-from-filenames-mac": {
    slug: "remove-spaces-from-filenames-mac",
    title: "Spaties verwijderen uit bestandsnamen op de Mac",
    description: "Spaties in bestandsnamen veroorzaken problemen in Terminal-commando's, URL's en scripts die er niet op zijn voorbereid. Een hele map één bestand tegelijk opschonen is geen goede besteding van een middag.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Spaties in bestandsnamen zien er prima uit in Finder, maar zorgen bijna overal elders voor problemen. Een Terminal-commando breekt tenzij je eraan denkt het pad tussen aanhalingstekens te zetten. Een URL zet de spatie om in "%20," wat links moeilijker leesbaar maakt en soms helemaal breekt. Een script dat niet met spaties rekening houdt, faalt stilletjes of splitst de bestandsnaam op een manier die niet de bedoeling was.</p>

<p>De gangbare oplossing is elke spatie te vervangen door een underscore of een koppelteken, of spaties helemaal te verwijderen. In theorie simpel. In de praktijk vervelend als je een map met tachtig bestanden hebt genaamd "Definitief Rapport Maart 2026.pdf."</p>

<h2>Wat Finders vervangfunctie wel en niet kan</h2>

<p>Finders batchhernoemtool ondersteunt wel een letterlijke zoek-en-vervangfunctie, dus elke spatie vervangen door een koppelteken is technisch mogelijk — zoek naar één spatie, vervang door "-". Dit werkt voor eenvoudige gevallen. Maar het schiet tekort wanneer:</p>

<ul>
  <li>Je spaties helemaal wilt verwijderen, zodat "Definitief Rapport" wordt tot "DefinitiefRapport" — wat één vervanging prima aankan, maar combineren met andere opschoning (zoals dubbele spaties herstellen) vergt meerdere ronden</li>
  <li>Je spaties wilt verwijderen maar de bestandsextensie exact wilt behouden</li>
  <li>Je dit nodig hebt als onderdeel van een grotere opschoning die ook hoofdlettergebruik corrigeert of andere tekens verwijdert</li>
</ul>

<h2>Spaties verwijderen als één pijplijnstap</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> verwerkt het verwijderen van spaties via zoeken en vervangen, en laat je dit koppelen aan elke andere opschoningsstap die je in dezelfde bewerking nodig hebt.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym removing spaces from file names on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vervang spaties door koppeltekens of underscores</h3>
<p>Zoek een spatie, vervang door "-" of "_". Elk bestand in de batch krijgt in één keer dezelfde behandeling, en het voorbeeld toont het exacte resultaat voordat je iets toepast.</p>

<h3>Verwijder spaties volledig</h3>
<p>Wil je dat "Definitief Rapport.pdf" wordt tot "DefinitiefRapport.pdf" zonder enig scheidingsteken, vervang de spatie dan door niets. Eén actie, hele batch.</p>

<h3>Herstel achtergebleven dubbele spaties of rommel</h3>
<p>Na het verwijderen van bepaalde woorden of voorvoegsels eindigen bestanden soms met dubbele spaties of ongemakkelijke gaten. Voeg een regex-stap toe zoals <code>\\s+</code> vervangen door een enkele spatie of koppelteken om dit in dezelfde pijplijn op te schonen.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-files-for-web-mac": {
    slug: "rename-files-for-web-mac",
    title: "Bestanden hernoemen voor webupload op de Mac — slugify in bulk",
    description: "Bestanden met spaties, hoofdletters en speciale tekens veroorzaken kapotte links en rommelige URL's eenmaal geüpload naar een website. Een batch handmatig omzetten naar schone, webveilige namen is niet schaalbaar.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je staat op het punt een batch afbeeldingen of documenten te uploaden naar een website, een CMS, of een statische sitegenerator. De bestanden heten dingen als "Productfoto (Definitief) 2.jpg" en "Blogheader — Concept.png." Upload ze zoals ze zijn en je krijgt lelijke URL's met gecodeerde spaties en speciale tekens, of erger nog, een CMS dat de upload volledig weigert vanwege niet-ondersteunde tekens.</p>

<p>Wat je eigenlijk wilt is een "slug" — kleine letters, gescheiden door koppeltekens, geen speciale tekens: "productfoto-definitief-2.jpg." Deze omzetting handmatig doen voor een handvol bestanden is te doen. Voor een batch van vijftig afbeeldingen voor een nieuwe site niet.</p>

<h2>Waarom Finder bestandsnamen niet kan slugifyen</h2>

<p>Slugifyen omvat meerdere transformaties tegelijk: omzetten naar kleine letters, leestekens zoals haakjes en kastlijntjes verwijderen, en spaties omzetten naar koppeltekens. Finders hernoemtool kan precies één van deze — letterlijke tekstvervanging — en kan geen tekst naar kleine letters omzetten of diverse speciale tekens in één keer strippen. Je zou meerdere handmatige hernoemrondes nodig hebben, en Finder raakt hoofdlettergebruik nog steeds helemaal niet aan.</p>

<h2>Een batch slugifyen met een pijplijn</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> handelt slugificatie af door precies de benodigde stappen aan elkaar te koppelen: hoofdlettercorrectie, tekenverwijdering, en spatie-naar-koppelteken-vervanging, allemaal in één pijplijn die op de hele batch wordt toegepast.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym slugifying file names for web upload on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Stap 1: verwijder speciale tekens</h3>
<p>Gebruik regex om haakjes, kastlijntjes en andere leestekens te strippen die niet in een URL thuishoren. Een patroon dat alles matcht buiten letters, cijfers, spaties en koppeltekens, ruimt dit in één stap op.</p>

<h3>Stap 2: zet spaties om naar koppeltekens</h3>
<p>Zoek en vervang elke spatie door een koppelteken, volgens de gangbare conventie voor webslugs.</p>

<h3>Stap 3: zet alles om naar kleine letters</h3>
<p>Pas een omzetting naar kleine letters toe als laatste stap, zodat "Productfoto-Definitief-2.jpg" wordt tot "productfoto-definitief-2.jpg" — schoon, voorspelbaar en veilig voor elke URL-structuur.</p>

<p>Zet deze pijplijn eenmaal op en hergebruik hem voor elke batch assets die je voortaan uploadt.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "a-better-rename-alternative-mac": {
    slug: "a-better-rename-alternative-mac",
    title: "Een beter alternatief voor Rename-apps op de Mac",
    description: "A Better Finder Rename is al lang een optie voor batchgewijs hernoemen op de Mac, maar de dichte, dialoogvenster-zware interface is niet voor iedereen. Hier lees je waar je op moet letten als je dezelfde kracht met minder frictie wilt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>A Better Finder Rename bestaat al lang genoeg om de standaardaanbeveling te worden zodra iemand vraagt hoe je bestanden in bulk kunt hernoemen op de Mac. Het is capabel — regex, meerdere hernoemacties, presets — en heeft zijn plek verdiend. Maar "capabel" en "prettig in gebruik" zijn niet hetzelfde, en veel gebruikers openen het, zien de dichte lijst met tabbladen en opties, en hebben meteen het gevoel dat ze een handleiding nodig hebben om alleen al een bestandsextensie te wijzigen.</p>

<h2>Wat mensen naar alternatieven doet zoeken</h2>

<p>De klachten herhalen zich in recensies en forumdiscussies:</p>

<ul>
  <li>De interface leunt zwaar op keuzemenu's en dichte optiepanelen in plaats van een visuele opzet</li>
  <li>Een meerstaps-hernoeming bouwen betekent meerdere tabbladen instellen, niet zichtbaar stappen stapelen die je kunt herschikken</li>
  <li>Het ontwerp is jarenlang niet noemenswaardig gemoderniseerd, waardoor simpele taken technischer aanvoelen dan nodig</li>
  <li>Nieuwe gebruikers hebben vaak een handleiding nodig voordat ze zelfverzekerd hun eerste batch kunnen hernoemen</li>
</ul>

<p>Niets van dit alles betekent dat de app niet werkt — dat doet hij wel. Maar hernoem je bestanden slechts af en toe in plaats van als kerntaak van je werk, dan kan de leercurve onevenredig aanvoelen ten opzichte van de klus.</p>

<h2>Hoe een soepeler alternatief eruitziet</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> dekt hetzelfde terrein — zoeken en vervangen met regex, volgnummering, invoegen en verwijderen, hoofdlettergebruik aanpassen — via een visuele pijplijn die je opbouwt door stappen toe te voegen, in plaats van instellingen te configureren over meerdere tabbladen.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym as a batch rename alternative on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zie je stappen, niet alleen instellingen</h3>
<p>Elke hernoemactie verschijnt als een zichtbaar blok in de pijplijn. Je kunt de reeks bekijken en meteen begrijpen wat er gaat gebeuren, zonder een instellingenpaneel te openen om te controleren.</p>

<h3>Sleep bestanden er direct in</h3>
<p>Geen bestandsselectiedialoog om doorheen te navigeren. Sleep bestanden vanuit Finder rechtstreeks naar de app en begin met het bouwen van je pijplijn.</p>

<h3>Voorbeeld en ongedaan maken, altijd beschikbaar</h3>
<p>Elk bestand toont zijn huidige en toekomstige naam voordat je toepast, en volledig ongedaan maken is beschikbaar als het resultaat niet is wat je verwachtte.</p>

<p>Heb je A Better Finder Rename gebruikt en vond je het meer werk dan de taak verdiende, dan is dit het proberen waard.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-screenshots-mac": {
    slug: "rename-screenshots-mac",
    title: "Schermafbeeldingen hernoemen op de Mac — verwijder het voorvoegsel 'Schermafbeelding'",
    description: "macOS noemt elke schermafbeelding 'Schermafbeelding 2026-09-06 om 15.42.17.png,' wat accuraat maar onhandig is. Een map vol daarvan één voor één opschonen kost tijd die je niet hebt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Elke schermafbeelding die je op een Mac maakt, krijgt dezelfde behandeling: "Schermafbeelding 2026-09-06 om 15.42.17.png." Het is technisch informatief, maar lang, herhaalt zich bij elk bestand, en is onhandig om naar te verwijzen in een rapport, een ticket, of een gedeelde map. Heb je vijftig schermafbeeldingen verzameld voor een bugrapport, een tutorial, of een designreview, dan is elke afbeelding met de hand hernoemen naar iets als "stap-01.png" precies het soort taak dat je een hele middag kost zonder goede reden.</p>

<h2>Waarom de standaardnaam lastig werkt</h2>

<p>De opmaak "Schermafbeelding [datum] om [tijd]" is ontworpen voor uniciteit, niet voor leesbaarheid. Elk bestand begint met dezelfde tekens, wat betekent:</p>

<ul>
  <li>Sorteren op naam sorteert simpelweg op opnametijd, niet op relevantie of inhoud</li>
  <li>De namen zijn te lang om comfortabel te lezen in een bestandslijst of een gedeelde link</li>
  <li>Je kunt niet zien wat een schermafbeelding toont zonder deze te openen</li>
  <li>Finders batchhernoemtool kan het woord "Schermafbeelding" wel strippen, maar laat de tijdstempel-rommel achter tenzij je een specifiekere vervanging opbouwt</li>
</ul>

<h2>Een map schermafbeeldingen opschonen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> handelt deze opschoning af in een paar pijplijnstappen, of je nu een volledig eigen naam wilt of gewoon een kortere versie van het origineel.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renaming a batch of Mac screenshots" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verwijder het volledige standaardvoorvoegsel</h3>
<p>Gebruik regex om het hele patroon "Schermafbeelding [datum] om [tijd]" in één stap te matchen en te verwijderen, zodat je een schone lei overhoudt om je eigen naamgeving toe te voegen.</p>

<h3>Voeg een beschrijvende naam en volgorde toe</h3>
<p>Voeg een eigen voorvoegsel toe zoals "bugrapport_" of "onboarding-flow_" gevolgd door volgnummering, zodat je vijftig schermafbeeldingen "bugrapport_001.png" tot en met "bugrapport_050.png" worden, gesorteerd in de volgorde waarin je ze maakte.</p>

<h3>Houd het simpel als je alleen kortere namen nodig hebt</h3>
<p>Heb je geen eigen namen nodig, strip dan gewoon "Schermafbeelding " en verkort de tijdstempel met een gerichte regex-vervanging, zodat er genoeg informatie overblijft om ongeveer te weten wanneer elke afbeelding is gemaakt, zonder de volledige rommel.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "bulk-rename-utility-mac": {
    slug: "bulk-rename-utility-mac",
    title: "De beste tool voor bulkgewijs hernoemen op de Mac",
    description: "Er zijn een handvol speciale tools voor bulkgewijs hernoemen op de Mac, elk met een andere balans tussen kracht en eenvoud. Dit is waar je op moet letten voordat je er een kiest.",
    date: "2026-09-06",
    readTime: "5 min leestijd",
    content: `
<p>Zoek naar een "tool voor bulkgewijs hernoemen op de Mac" en je vindt een mix van oude Terminal-gebaseerde handleidingen, een paar betaalde apps met tien jaar oude interfaces, en Finders ingebouwde optie die maar tot op zekere hoogte gaat. De juiste kiezen hangt minder af van welke app de langste featurelijst heeft, en meer van hoe je daadwerkelijke hernoemtaken er week na week uitzien.</p>

<h2>Waar je echt op moet letten</h2>

<p>De meeste discussies over bulkgewijs hernoemen richten zich op checklists met functies — ondersteunt het regex, doet het volgnummering, verwerkt het hoofdlettergebruik. Dat is belangrijk, maar mist de praktische vragen die bepalen of je de tool daadwerkelijk prettig zult vinden om te gebruiken:</p>

<ul>
  <li><strong>Kun je het resultaat zien voordat je toepast?</strong> Een tool zonder live voorbeeld maakt van elke hernoeming een klein gokspel.</li>
  <li><strong>Kun je een fout ongedaan maken?</strong> Batchbewerkingen op honderden bestanden hebben een vangnet nodig.</li>
  <li><strong>Hoeveel stappen kost het om bewerkingen te combineren?</strong> Hernoemen in de praktijk vergt zelden slechts één transformatie.</li>
  <li><strong>Kun je bestanden erin slepen, of heb je elke keer een bestandskiezer nodig?</strong></li>
</ul>

<p>Finder dekt de basis maar faalt op de eerste twee punten volkomen — geen volledig voorbeeld, geen blijvend ongedaan maken. Terminal-gebaseerde aanpakken falen op alle vier tenzij je vertrouwd bent met scripten. Oudere speciale apps vinken de vakjes op papier vaak wel aan, maar begraven de workflow in dichte menu's.</p>

<h2>Een visuele aanpak voor bulkgewijs hernoemen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> is gebouwd om die vier vragen goed te beantwoorden: een visuele pijplijn van gestapelde acties, een live voorbeeld van voor en na voor elk bestand, volledig ongedaan maken, en invoer via slepen en neerzetten.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym bulk rename utility for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Elke actie is zichtbaar en herschikbaar</h3>
<p>Zoeken/vervangen, regex, volgnummering, invoegen, verwijderen en hoofdlettergebruik zijn allemaal beschikbaar als pijplijnstappen die je kunt stapelen, herschikken en afzonderlijk bewerken.</p>

<h3>Het voorbeeld schaalt mee met je batch</h3>
<p>Of je nu tien bestanden of duizend hernoemt, de voorbeeldlijst toont de huidige en toekomstige naam van elk afzonderlijk bestand, niet slechts een steekproef.</p>

<h3>Fouten zijn herstelbaar</h3>
<p>Een hernoeming toegepast die niet goed uitpakte? Ongedaan maken herstelt de hele batch, zodat je de pijplijn kunt aanpassen en opnieuw kunt proberen, in plaats van bestanden één voor één handmatig te herstellen.</p>

<p>De beste tool voor bulkgewijs hernoemen is de tool waarmee je het resultaat kunt vertrouwen voordat je je eraan committeert. Dat is de maatstaf waaraan elke tool moet worden afgemeten.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-video-files-mac": {
    slug: "rename-video-files-mac",
    title: "Videobestanden in bulk hernoemen op de Mac",
    description: "Videobestanden geëxporteerd vanaf een camera, schermrecorder of montageapp hebben zelden nuttige namen. Een map clips sorteren die alleen op tijdstempel zijn genoemd, maakt monteren en archiveren lastiger dan nodig.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Een camera of drone exporteert clips genaamd "DJI_0001.MP4," "DJI_0002.MP4," enzovoort. Een schermrecorder noemt bestanden naar het exacte moment waarop je begon met opnemen. Een montageapp exporteert renders met een generieke naam als "Sequence_01.mov" die niets vertelt over het project. Beheer je beeldmateriaal van meerdere shoots, projecten of klanten, dan verandert deze standaardnaamgeving het simpelweg doorbladeren van een map in een gokspel waarbij je meerdere clips moet openen om de juiste te vinden.</p>

<h2>Video-specifieke uitdagingen bij hernoemen</h2>

<p>Videobestanden brengen een paar complicaties met zich mee die batchgewijs hernoemen net iets anders maken dan het hernoemen van foto's of documenten:</p>

<ul>
  <li>Gemengde extensies binnen dezelfde shoot (MP4, MOV, MTS) die allemaal consistente naamgeving nodig hebben zonder de extensie te breken</li>
  <li>Meerdere camerahoeken of takes die gegroepeerd en correct geordend moeten blijven</li>
  <li>Lange originele namen uit exports van montagesoftware die ingekort moeten worden zonder betekenisvolle delen te verliezen</li>
  <li>Finders hernoemtool die geen manier biedt om deze variaties in één keer te verwerken</li>
</ul>

<h2>Een pijplijn voor het hernoemen van beeldmateriaal</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> behandelt videobatches op dezelfde manier als elk ander bestandstype — via een visuele pijplijn — terwijl de bestaande extensie van elk bestand behouden blijft.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renaming video files in batch on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verwijder camera- of softwarevoorvoegsels</h3>
<p>Verwijder "DJI_," "GH0," of welk generiek voorvoegsel je camera of recorder ook toevoegt, bij elke clip ongeacht de extensie.</p>

<h3>Voeg project- en take-structuur toe</h3>
<p>Voeg een projectnaam en opeenvolgende take-nummers in, zodat "Scene_02_Take_03.mov" een betekenisloos clipnummer vervangt, en het beeldmateriaal georganiseerd blijft per scène en take wanneer je bij de montagetijdlijn aankomt.</p>

<h3>Meng extensies zonder iets te breken</h3>
<p>Laad MP4-, MOV- en MTS-bestanden van dezelfde shoot in één batch. De hernoemacties werken alleen op het naamgedeelte, dus elk bestand behoudt zijn correcte, oorspronkelijke extensie na de hernoeming.</p>

<p>Consistente clipnamen besparen echte tijd zodra je door een tijdlijn scrolt op zoek naar "dat ene shot," drie weken na de shoot.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "find-replace-filename-mac": {
    slug: "find-replace-filename-mac",
    title: "Zoeken en vervangen in bestandsnamen op de Mac",
    description: "Zoeken en vervangen in bestandsnamen klinkt simpel, maar het goed doen vergt meer controle dan een simpele tekstwissel — hoofdlettergevoeligheid, matchen op hele woorden, en tekst die meer dan eens voorkomt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Zoeken en vervangen is de meest voorkomende batchhernoembewerking. Je hebt een woord of tekenreeks die voorkomt in een set bestanden, en je moet die vervangen door iets anders — een project is hernoemd, een klant heeft de bedrijfsnaam gewijzigd, of een oude naamgevingsconventie moet in een archief worden bijgewerkt. Het klinkt als de simpelst denkbare hernoemtaak, en dat is het vaak ook. Maar zodra je bestandsnamen niet perfect uniform zijn, begint eenvoudig zoeken en vervangen zijn grenzen te tonen.</p>

<h2>Waar eenvoudig zoeken en vervangen vastloopt</h2>

<p>Finders zoek-en-vervangfunctie werkt voor schone, letterlijke gevallen. Maar echte mappen zijn rommeliger dan dat:</p>

<ul>
  <li>De tekst die je wilt vervangen komt in verschillende schrijfwijzen voor tussen bestanden ("Concept" versus "concept" versus "CONCEPT")</li>
  <li>De doeltekenreeks komt meer dan eens voor in een bestandsnaam, en je wilt maar één voorkomen vervangen</li>
  <li>Je moet een patroon vervangen, geen exacte tekst — zoals elk versienummer, niet alleen "v1"</li>
  <li>Je wilt meerdere zoek-en-vervangbewerkingen achter elkaar uitvoeren, elk voortbouwend op de vorige</li>
</ul>

<p>Finders vervangfunctie verwerkt precies één exacte tekstvervanging per run, zonder opties voor hoofdlettergevoeligheid en zonder patroonherkenning.</p>

<h2>Zoeken en vervangen met meer controle</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> heeft een zoek-en-vervangactie met regex-ondersteuning, zodat je zowel eenvoudige letterlijke vervanging als patroongebaseerde matching in dezelfde tool hebt.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym find and replace in file names on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Eenvoudige wissels voor rechttoe-rechtaan gevallen</h3>
<p>Vervang "OudeKlantnaam" door "NieuweKlantnaam" bij elk bestand in de batch, met het live voorbeeld dat bevestigt dat de wijziging klopt voordat je toepast.</p>

<h3>Patroonherkenning wanneer tekst varieert</h3>
<p>Schakel regex in en match patronen in plaats van exacte tekenreeksen — vervang elke "concept_v" gevolgd door een nummer door "definitief," ongeacht welk nummer erachter staat.</p>

<h3>Meerdere vervangingen aan elkaar koppelen</h3>
<p>Moet je drie verschillende inconsistenties in dezelfde batch herstellen? Voeg drie zoek-en-vervangstappen toe aan de pijplijn. Elke stap werkt op het resultaat van de vorige, en het voorbeeld weerspiegelt de hele keten.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-files-with-counter-mac": {
    slug: "rename-files-with-counter-mac",
    title: "Bestanden hernoemen met een teller op de Mac — 001, 002, 003",
    description: "Een teller toegevoegd aan bestandsnamen houdt een set op volgorde en voorkomt naamconflicten, maar de voorloopnullen, het startnummer en de positie goed instellen vergt meer dan Finders basisnummering.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een set bestanden nodig, genummerd 001, 002, 003 en verder — voor een diavoorstelling, een set productafbeeldingen, een reeks geëxporteerde pagina's, of elke batch waarbij volgorde belangrijk is en dubbele namen geen optie zijn. Een teller lost beide problemen tegelijk op: hij garandeert uniciteit en een voorspelbare sorteervolgorde, zolang hij consistent is opgevuld met voorloopnullen.</p>

<h2>Wat Finders teller bijna goed doet</h2>

<p>Finders Opmaak-modus voor hernoemen bevat wel een teller — je kiest een startnummer en die telt met één op bij elk geselecteerd bestand. Voor veel gevallen is dit prima. Maar het komt met vaste beperkingen:</p>

<ul>
  <li>De teller vervangt de volledige oorspronkelijke bestandsnaam; je kunt geen enkel deel ervan naast het nummer behouden</li>
  <li>Je kunt de stapgrootte niet aanpassen — altijd +1</li>
  <li>Je kunt de teller niet midden in een naam invoegen, alleen op een vaste positie die door de modus wordt bepaald</li>
  <li>Er is geen manier om tellen te combineren met een aparte opschoonstap, zoals eerst hoofdlettergebruik corrigeren of rommeltekens verwijderen</li>
</ul>

<h2>Tellers als flexibele pijplijnstap</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> heeft volgnummering als een van meerdere acties, zodat je die kunt combineren met al het andere wat de batch nodig heeft.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym adding a counter to file names on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kies je voorloopnullen</h3>
<p>Bepaal vooraf of je 01, 001 of 0001 nodig hebt op basis van hoeveel bestanden er in de batch zitten, en elk nummer wordt consistent opgevuld zodat de sorteervolgorde nooit breekt naarmate de set groeit.</p>

<h3>Behoud de oorspronkelijke naam als je dat wilt</h3>
<p>Voeg de teller toe als voorvoegsel of achtervoegsel terwijl het beschrijvende deel van de bestandsnaam intact blijft — "product_001.jpg" in plaats van "product" volledig te verliezen aan een generiek tellerformaat.</p>

<h3>Eerst opschonen, dan nummeren</h3>
<p>Voer een zoek-en-vervang- of hoofdlettercorrectiestap uit voordat je nummert, zodat de bestanden al schoon zijn tegen de tijd dat de teller wordt toegepast. Het voorbeeld toont het uiteindelijke resultaat van de hele keten.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "organize-downloads-folder-mac-rename": {
    slug: "organize-downloads-folder-mac-rename",
    title: "Organiseer je Downloads-map op de Mac door bestanden in bulk te hernoemen",
    description: "Een Downloads-map vol bestanden als 'bestand(3).pdf' en 'naamloos-1234567.zip' is nagenoeg onmogelijk te doorzoeken. Jaren aan opgestapelde downloads met de hand opschonen is geen realistisch weekendproject.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>De Downloads-map is waar bestandsnamen gaan sterven. Browsers plakken "(1)," "(2)" en "(3)" achter alles wat al bestaat. Sommige websites leveren bestanden met automatisch gegenereerde namen als "bestand_a8f3k29d.pdf" die buiten de downloadsessie niets betekenen. Jaren hiervan stapelen zich op tot een map waarin zoeken op naam nutteloos is, omdat de helft van de namen generieke duplicaten zijn en de andere helft willekeurige tekenreeksen.</p>

<h2>Waarom dit probleem met de tijd erger wordt</h2>

<p>In tegenstelling tot een projectmap die je actief beheert, stapelt Downloads zich passief op. Niemand gaat er bewust voor zitten om deze te organiseren — hij groeit gewoon door totdat zoeken pijnlijk wordt en je in plaats daarvan op datum gaat sorteren, wat je alleen vertelt wanneer iets is binnengekomen, niet wat het is. Tegen de tijd dat je besluit op te ruimen, kijk je aan tegen honderden of duizenden bestanden, wat handmatig hernoemen volstrekt onpraktisch maakt.</p>

<h2>Bulkopschoning zonder bij nul te beginnen</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> is gebouwd voor precies dit soort bulkopschoning — een grote, rommelige batch die meerdere correcties tegelijk nodig heeft in plaats van één simpele hernoeming.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym organizing a Downloads folder on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verwijder achtervoegsels van dubbele downloads</h3>
<p>Gebruik regex om elk patroon als "(1)," "(2)" en "(3)" in de hele map in één keer te verwijderen, ongeacht of ze afkomstig zijn van dubbele-bestandsafhandeling van de browser of herhaalde downloads van hetzelfde bestand.</p>

<h3>Sorteer eerst op bestandstype</h3>
<p>Groepeer bestanden op extensie voordat je hernoemt, en voer daarna aparte pijplijnen uit voor pdf's, afbeeldingen en archieven — elk met naamgeving die logisch is voor dat bestandstype, zoals een bron- of datumvoorvoegsel toevoegen.</p>

<h3>Voeg data toe voor context</h3>
<p>Voeg een globale datumperiode toe als voorvoegsel bij grote batches, zodat zelfs generiek genoemde bestanden je op zijn minst globaal vertellen wanneer ze in de map terechtkwamen.</p>

<p>Je hoeft niet elk bestand afzonderlijk te sorteren — een paar pijplijnrondes op batches gegroepeerd per type of datum kunnen jaren aan rommel omzetten in iets doorzoekbaars, in één sessie.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-files-before-uploading-mac": {
    slug: "rename-files-before-uploading-mac",
    title: "Bestanden hernoemen voordat je ze uploadt op de Mac",
    description: "Veel uploadsystemen weigeren of verwerken bestanden verkeerd met spaties, speciale tekens of inconsistente naamgeving. Een batch vlak voor een uploaddeadline één bestand tegelijk herstellen zorgt voor stress die je niet nodig hebt.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je staat op het punt een batch bestanden te uploaden naar een portaal, een CMS, een FTP-server, of het bestandsdelingssysteem van een klant, en de naamgevingseisen komen niet overeen met wat je hebt. Misschien weigert het systeem spaties. Misschien is een specifiek voorvoegsel nodig zodat bestanden aan de andere kant correct sorteren. Misschien hebben je bestanden nog interne conceptnamen die niet zichtbaar mogen zijn voor de ontvanger. Wat de reden ook is, je moet de hele batch correct hernoemen voordat de upload plaatsvindt — niet erna, wanneer het herstellen betekent dat je alles opnieuw moet uploaden.</p>

<h2>Waarom hernoemen op het laatste moment in Finder riskant is</h2>

<p>Onder deadlinedruk wordt Finders batchhernoemtool eerder een risico dan een gemak. Je krijgt één bewerking tegelijk, één voorbeeld van één bestand, en geen manier om de hele batch te controleren voordat je uploadt. Komen tien bestanden verkeerd uit, dan merk je dat misschien pas als de ontvanger het meldt — tegen die tijd is de upload al onderweg.</p>

<h2>Met vertrouwen hernoemen voordat je uploadt</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> geeft je een volledig voorbeeld van de nieuwe naam van elk bestand voordat er iets verandert, wat het belangrijkst is precies wanneer je tegen een deadline werkt en je geen herupload kunt veroorloven.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renaming files before uploading on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Voldoe aan de naamgevingsregels van de bestemming</h3>
<p>Verwijder spaties en speciale tekens, dwing kleine letters af, of voeg een vereist voorvoegsel toe — wat het uploadsysteem ook verwacht, bouw het eenmaal als pijplijn en hergebruik het voor toekomstige uploads naar dezelfde bestemming.</p>

<h3>Verwijder interne of conceptnaamgeving</h3>
<p>Verwijder woorden als "CONCEPT," "intern," of versiemarkeringen die niet zichtbaar mogen zijn voor een externe ontvanger, bij de hele batch in één keer.</p>

<h3>Controleer alles voordat het je machine verlaat</h3>
<p>Scroll door de volledige lijst van voor en na en bevestig dat elk bestand klopt. Pas dan wordt de hernoeming toegepast, en pas dan upload je — geen verrassingen achteraf.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "trim-filename-length-mac": {
    slug: "trim-filename-length-mac",
    title: "Lengte van bestandsnamen inkorten op de Mac",
    description: "Lange bestandsnamen worden afgekapt in bestandslijsten, veroorzaken fouten op systemen met een limiet op de padlengte, en zijn onhandig om mee te werken in scripts. Een batch namen één voor één inkorten schiet niet op.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Sommige bestandsnamen groeien ongebreideld — een geëxporteerd document behoudt zijn oorspronkelijke titel plus een versietag plus een datum plus een afdelingscode, totdat de bestandsnaam 120 tekens lang is. Dit veroorzaakt echte problemen: sommige systemen hanteren een maximale padlengte en weigeren het bestand volledig, sommige bestandslijsten kappen de naam af zodat je bestanden niet meer uit elkaar kunt houden, en scripts die de naam bewerken kunnen onvoorspelbaar gedrag vertonen bij een ongewoon lange naam.</p>

<p>Je moet de namen inkorten — terugbrengen tot een redelijke lengte terwijl je de delen behoudt die er echt toe doen.</p>

<h2>Finder kan niet inkorten op lengte</h2>

<p>Finders hernoemtool kent geen concept van een maximale lengte of een bewerking "behoud alleen de eerste N tekens." Het kan specifieke tekst vervangen als je precies weet wat je moet verwijderen, maar als de overtollige lengte komt van overbodige of inconsistente informatie verspreid door de naam, biedt Finder geen systematische manier om dat in te korten. Je blijft achter met elk bestand handmatig inkorten — precies het soort herhalend werk waarvoor batchtools bestaan.</p>

<h2>Namen inkorten met gerichte regels</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> laat je tekens verwijderen op positie of op patroon, wat de meeste praktijkgevallen van te lange bestandsnamen dekt.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym trimming file name length on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verwijder een vast aantal tekens aan het einde</h3>
<p>Komt de overtollige lengte van een herhaald achtervoegsel — een afdelingscode, een interne tag — verwijder dan een specifiek aantal tekens vanaf het einde van elke bestandsnaam in één stap.</p>

<h3>Snijd een specifiek overbodig segment eruit</h3>
<p>Gebruik zoeken en vervangen of regex om een segment te verwijderen dat midden in elke naam voorkomt, zoals een herhaalde projectcode die niet meer nodig is zodra bestanden al in een projectmap zijn georganiseerd.</p>

<h3>Bekijk het ingekorte resultaat vooraf</h3>
<p>Controleer de volledige lijst van voor en na om te zorgen dat de ingekorte namen nog steeds van elkaar te onderscheiden zijn — te agressief inkorten kan per ongeluk dubbele namen creëren, en het voorbeeld vangt dat op voordat je iets toepast.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "rename-music-files-mac": {
    slug: "rename-music-files-mac",
    title: "Muziekbestanden hernoemen op de Mac — artiest, album, track",
    description: "Gedownloade of geripte audiobestanden hebben vaak cryptische bestandsnamen die niet overeenkomen met hun daadwerkelijke metadata. Een bibliotheek zo sorteren maakt bladeren op artiest, album of track vrijwel onmogelijk.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Je hebt een map audiobestanden genaamd "track01.mp3," "01 - Naamloos.flac," of een mengelmoes van willekeurige tekens uit een download. De ingesloten metadata klopt misschien wel, maar de bestandsnamen zelf zijn nutteloos om buiten een muziekspeler te bladeren, te synchroniseren naar bepaalde apparaten, of een back-up te organiseren waarbij je rechtstreeks naar bestandsnamen kijkt in plaats van tag-gegevens. Je wilt bestandsnamen die de daadwerkelijke artiest, het album en het tracknummer weergeven — consistent, door de hele bibliotheek.</p>

<h2>Waarom dit geen probleem van één bestand is</h2>

<p>Eén niet-kloppende bestandsnaam is een klusje van twee minuten. Een bibliotheek van een paar honderd tracks met inconsistente naamgeving — sommige al correct, sommige in een andere opmaak, sommige volledig generiek — is niet iets wat je met de hand herstelt zonder een heel weekend kwijt te raken. En Finders hernoemtool heeft geen enkel besef van audiometadata; het ziet alleen de bestandsnaam als platte tekst, dus het kan de artiest of het album niet uit de tags van het bestand halen, ook al zou je dat willen.</p>

<h2>Namen standaardiseren door een bibliotheek</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> pakt het bestandsnaamgedeelte van dit probleem aan — zodra je het gewenste naamgevingspatroon kent, pas het consistent toe op de hele batch.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renaming music files by artist, album, and track on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Standaardiseer de opmaak van het tracknummer</h3>
<p>Herstel inconsistente tracknummering — sommige bestanden gebruiken "1," andere "01," weer andere "Track 1" — naar één opmaak met voorloopnullen, met behulp van volgnummering of een regex-gebaseerde zoek-en-vervangactie.</p>

<h3>Ruim generieke of onduidelijke namen op</h3>
<p>Strip downloadartefacten, willekeurige ID-tekenreeksen of placeholdertekst zoals "Naamloos" met zoeken en vervangen, en voeg vervolgens de juiste artiest- en albuminformatie in als consistent voorvoegsel per albummap.</p>

<h3>Werk per album, niet per hele bibliotheek</h3>
<p>Omdat naamgevingsconventies meestal per album gelden, sleep je de map van één album tegelijk naar binnen, bouw je de pijplijn voor dat naamgevingspatroon, en pas je die toe — ga dan verder naar het volgende album met een nieuwe batch.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
  "mac-automator-rename-alternative": {
    slug: "mac-automator-rename-alternative",
    title: "Bestanden hernoemen met Automator is verwarrend — probeer een visueel alternatief",
    description: "Automator kan technisch gezien bestanden in bulk hernoemen, maar het bouwen en debuggen van een workflow ervoor duurt veel langer dan de hernoemtaak zelf. Hier lees je waarom, en een directere manier om hetzelfde resultaat te bereiken.",
    date: "2026-09-06",
    readTime: "4 min leestijd",
    content: `
<p>Automator heeft een actie "Finder-items hernoemen," en in theorie kun je die combineren met andere acties om een eigen workflow voor batchgewijs hernoemen te bouwen. In de praktijk proberen de meeste mensen die dit één keer doen, het geen tweede keer. Automators interface is opgebouwd rond het koppelen van generieke acties in een stroomdiagram-achtige lijst, wat krachtig is voor het automatiseren van repetitieve taken over meerdere apps, maar een omslachtige manier is om een zo specifiek probleem op te lossen als "hernoem deze 80 bestanden consistent."</p>

<h2>Waar Automator hernoemen moeilijker maakt dan nodig</h2>

<ul>
  <li>Je moet weten welke combinatie van acties het gewenste hernoemgedrag oplevert — dit is niet vanzelfsprekend vanuit de interface</li>
  <li>Er is geen live voorbeeld binnen de workflow-editor; je moet de workflow op echte bestanden uitvoeren om het resultaat te zien</li>
  <li>Fouten vergen handmatig ongedaan maken van de hernoeming of herstellen vanuit een back-up, want Automator houdt dit niet voor je bij</li>
  <li>Een workflow opslaan als herbruikbare app of Snelle actie voegt een extra opzetlaag toe die de meeste mensen overslaan, waardoor ze de workflow elke keer opnieuw vanaf nul bouwen</li>
  <li>Uitzoeken waarom een hernoemactie niet werkte zoals verwacht, betekent graven door Automators logboeken, die niet gemaakt zijn voor incidentele gebruikers</li>
</ul>

<p>Voor een taak die de meeste mensen een paar keer per maand doen, betaalt de opzetkosten van Automator zich zelden uit.</p>

<h2>Een direct visueel alternatief</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> biedt hetzelfde idee waar Automator naar streeft — hernoembewerkingen aan elkaar koppelen — maar specifiek gebouwd voor hernoemen, zonder de overhead van een algemene workflow-tool.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym as a visual alternative to Automator for renaming files on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Alleen gebouwd voor hernoemen</h3>
<p>Elke beschikbare actie is een hernoembewerking — zoeken/vervangen, regex, nummering, hoofdlettergebruik, invoegen, verwijderen. Geen generieke acties om doorheen te zoeken, geen giswerk over welke actie daadwerkelijk bestanden hernoemt.</p>

<h3>Zie het resultaat voordat het gebeurt</h3>
<p>In tegenstelling tot Automators uitvoeren-en-controleren-aanpak, wordt het voorbeeld live bijgewerkt terwijl je de pijplijn bouwt, zodat je het resultaat kent voordat je iets toepast.</p>

<h3>Geen workflowbestanden om op te slaan of te onderhouden</h3>
<p>Er is niets om te exporteren als app of Snelle actie. Open Renym, sleep bestanden naar binnen, bouw de pijplijn, pas toe. De volgende keer doe je hetzelfde, in dezelfde tijd.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Haal Renym uit de Mac App Store</a></p>
`,
  },
};
