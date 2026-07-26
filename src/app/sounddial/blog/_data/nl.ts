import type { ArticleSet } from "./index";

export const nlArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac-audio voor podcasting: bepaal wat je hoort tijdens het opnemen",
    description: "Een podcast opnemen terwijl je niveaus bewaakt, je gast hoort en meldingen beheert — alles vecht om één volumeschuif. Zo stel je het beter in.",
    date: "2026-03-05",
    readTime: "5 min leestijd",
    content: `
<p>Je neemt een podcast op met je Mac. Je moet je gast helder horen (via Zoom, Riverside of SquadCast). Je moet de opnameniveaus van je DAW monitoren. Slack moet gedempt zijn zodat er geen pings in de opname terechtkomen. En systeemmeldingen moeten volledig stil zijn — een macOS-"ding" midden in een interview is onbruikbare audio.</p>

<p>macOS geeft je één volumeschuif voor dit alles. Dat is niet genoeg.</p>

<h2>De podcast-audio-uitdaging op Mac</h2>

<p>Tijdens een podcast-opnamesessie heb je doorgaans:</p>
<ul>
  <li><strong>Communicatie-app</strong> (Zoom, Riverside, SquadCast) — gastgeluid, moet helder zijn</li>
  <li><strong>DAW / opname-app</strong> (Logic, GarageBand, Audacity, Hindenburg) — je eigen niveaus monitoren</li>
  <li><strong>Meldingsbronnen</strong> (Slack, Mail, Agenda, Berichten) — moeten volledig stil zijn tijdens opname</li>
  <li><strong>Browser</strong> — kan shownotities, onderzoekstabs of een timer bevatten</li>
</ul>

<p>Al deze op hetzelfde volume is chaos. Je gast concurreert met systeemgeluiden. Een Slack-melding kan een take verpesten. En als je het volume van je gast moet aanpassen, veranderen ook je monitorniveaus.</p>

<h2>De gebruikelijke workaround</h2>

<p>De meeste podcasters gebruiken een combinatie van:</p>
<ul>
  <li>Focusmodus (Niet storen) om meldingen te onderdrukken</li>
  <li>Handmatig Slack, Mail en andere luide apps afsluiten vóór het opnemen</li>
  <li>Het interne volume van de communicatie-app aanpassen voor de gast</li>
</ul>

<p>Dit werkt, maar is foutgevoelig. Vergeet je Niet storen in te schakelen en een melding verpest je take. Vergeet je Slack af te sluiten en er komt een oproep binnen. En je kunt nog steeds niet onafhankelijk het volume van je gast versus je monitorniveaus regelen.</p>

<h2>Per-app audio voor podcasting</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je een schone opname-omgeving bouwen door elke app onafhankelijk te regelen:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial podcast-setup — gastgeluid, monitoring en meldingen op onafhankelijke niveaus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Opnameprofiel</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — helder gastgeluid</li>
  <li><strong>Logic / GarageBand:</strong> 60% — comfortabele monitoring zonder vermoeidheid</li>
  <li><strong>Slack:</strong> gedempt — geen meldingsgeluiden</li>
  <li><strong>Mail:</strong> gedempt</li>
  <li><strong>Berichten:</strong> gedempt</li>
  <li><strong>Agenda:</strong> gedempt</li>
  <li><strong>Browser:</strong> gedempt — geen onverwachte autoplay</li>
</ul>

<p>Sla dit op als een "Opname"-profiel. Pas het profiel met één klik toe voordat je op opnemen drukt. Elke meldingsbron is stilgelegd, je gast staat op vol volume en je monitoring is op een comfortabel niveau.</p>

<h3>Bewerkingsprofiel</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — volledige monitoring voor bewerking</li>
  <li><strong>Spotify:</strong> gedempt — geen referentieverwarring</li>
  <li><strong>Slack:</strong> 20% — subtiele meldingen tijdens pauzes</li>
  <li><strong>Browser:</strong> 40% — voor shownotities en onderzoek</li>
</ul>

<p>Twee profielen, twee klikken, twee compleet verschillende audio-omgevingen. Geen handmatig afsluiten en heropenen van apps. Geen vergeten om meldingen weer in te schakelen na het opnemen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Waarom is mijn Mac zo hard op vol volume? Zo krijg je fijnere controle",
    description: "MacBook Pro-speakers zijn geweldig — totdat ze keihard staan. Als zelfs gemiddelde volume-instellingen te hard aanvoelen, lees dan hoe je preciezer audiocontrole krijgt.",
    date: "2026-03-08",
    readTime: "4 min leestijd",
    content: `
<p>Apple's nieuwere MacBook Pro-modellen (14" en 16") hebben opmerkelijk krachtige speakers voor een laptop. Zo krachtig dat gematigde volumeniveaus echt luid kunnen zijn — vooral in een stille kamer, laat op de avond, of met een koptelefoon. Het verschil tussen "comfortabel" en "te hard" is soms slechts één of twee volumestappen.</p>

<h2>Waarom de volumestappen te grof aanvoelen</h2>

<p>macOS heeft <strong>16 volumestappen</strong> via het toetsenbord. Elke stap is ongeveer 6,25% van het totale bereik. Op krachtige speakers of gevoelige koptelefoons kan een enkele stap een aanzienlijke waargenomen volumeverandering betekenen — van "perfect" naar "te hard" met één druk op de volumetoets.</p>

<h2>Ingebouwde oplossing: kwart-stap volume</h2>

<p>Houd <strong>Option + Shift</strong> ingedrukt en druk op volume omhoog/omlaag. Elke druk past aan met een kwart van een normale stap, waardoor je <strong>64 niveaus</strong> krijgt in plaats van 16. Deze 4x fijnere controle maakt het veel makkelijker om precies het juiste volume te vinden, vooral met krachtige speakers of koptelefoons.</p>

<p>Dit is de nuttigste Mac-audiotip die de meeste mensen niet kennen.</p>

<h2>Het diepere probleem: één schuif voor alles</h2>

<p>Zelfs met 64 niveaus heb je nog steeds één schuif die elke app bestuurt. Als je het volume laag genoeg zet voor comfortabele meldingsgeluiden, is je muziek misschien te zacht. Als je het voor muziek instelt, kan een meldingsping je laten schrikken.</p>

<p>Het echte probleem is dat verschillende audiobronnen verschillende volumes nodig hebben. Meldingen moeten subtiel zijn. Muziek moet aanwezig zijn. Gesprekken moeten helder zijn. Browservideo moet gematigd zijn. Eén schuif kan niet al deze behoeften goed bedienen.</p>

<h2>Per-app volume voor precieze controle</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft elke app zijn eigen volumeschuif met <strong>1% stappen</strong> van 0% tot 200%. Dat zijn 200 niveaus precisie per app, vergeleken met de 16 (of 64 met de modifier) systeembrede stappen van macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fijnmazige per-app volumecontrole met 1% precisie op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Zet je systeemvolume op een gematigd basisniveau (50-60%) en gebruik SoundDial om elke app fijn af te stemmen:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — comfortabel achtergrondniveau</li>
  <li><strong>Slack:</strong> 12% — subtiele meldingsping</li>
  <li><strong>Zoom:</strong> 85% — helder gespreksgeluid zonder overweldigend te zijn</li>
  <li><strong>Safari:</strong> 45% — gematigde videoweergave</li>
</ul>

<p>Zo is geen enkele audiobron ooit "te hard." Elk is afgestemd op het ideale niveau. Een Slack-ping op 12% is nauwelijks merkbaar, terwijl je Zoom-gesprek op 85% kristalhelder is — allemaal bij dezelfde systeemvolume-instelling.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Slack Huddle-volumeproblemen op Mac: te zacht, te hard of vecht met je muziek",
    description: "Slack-huddles concurreren met je muziek en meldingen om hetzelfde volume. Zo regel je huddle-audio onafhankelijk van al het andere op Mac.",
    date: "2026-03-10",
    readTime: "5 min leestijd",
    content: `
<p>Slack-huddles zijn handig — je klikt op een knop en je zit in een spraakgesprek zonder een vergadering te plannen. Maar het geluid is een puinhoop. De huddle staat op hetzelfde volume als je Spotify. Slack-meldingsgeluiden pingelen op hetzelfde niveau als het gesprek. En wanneer iemand muziek deelt of een scherm met geluid in de huddle, is het ofwel onhoorbaar ofwel oorverdovend.</p>

<p>Het probleem is niet Slack. Het is macOS. Alles loopt via één volumeschuif, dus huddle-audio, meldingsgeluiden, muziek en browseraudio vechten allemaal om dezelfde ruimte.</p>

<h2>Slacks interne audiocontroles</h2>

<p>Slack heeft beperkte audiocontroles:</p>
<ul>
  <li><strong>Meldingsvoorkeuren:</strong> Slack → Instellingen → Meldingen → Geluid & uiterlijk. Je kunt het meldingsgeluid wijzigen of specifieke geluiden uitschakelen, maar je kunt het meldingsvolume niet onafhankelijk van het huddle-volume instellen.</li>
  <li><strong>Huddle-volume:</strong> Tijdens een huddle is er geen aparte volumeschuif voor het gesprek versus andere Slack-geluiden. Alles in Slack is één audiostream voor macOS.</li>
  <li><strong>In-/uitvoerapparaat:</strong> Slack → Instellingen → Audio & Video laat je microfoon- en speakerapparaten selecteren, maar geen volumeniveaus per functie.</li>
</ul>

<h2>De drie Slack-audioproblemen</h2>

<h3>1. Huddle te zacht ten opzichte van muziek</h3>
<p>Je muziek staat op een comfortabel niveau. Je gaat in een huddle. De stem van je collega is op hetzelfde volume als je muziek — je kunt woorden niet duidelijk onderscheiden. Systeemvolume verhogen maakt de muziek te hard.</p>

<h3>2. Meldingsgeluiden tijdens huddles</h3>
<p>Je bent in een huddle-discussie. Elk Slack-bericht dat binnenkomt pingt op hetzelfde volume als het gesprek. In een drukke werkruimte met actieve kanalen maken de constante pings de huddle onbruikbaar.</p>

<h3>3. Huddle te hard voor achtergrondluisteren</h3>
<p>Soms ga je in een huddle om passief te luisteren terwijl je werkt. Je wilt het op achtergrondniveau — zacht genoeg om niet af te leiden, hard genoeg om te horen als iemand je naam zegt. macOS laat je niet Slack op 20% zetten terwijl je browser op 60% staat.</p>

<h2>De oplossing: Slacks volume onafhankelijk regelen</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft Slack een eigen volumeschuif, gescheiden van elke andere app. Aangezien de huddle-audio en meldingsgeluiden van Slack deel uitmaken van dezelfde app, bestuurt de schuif beide — maar dat is eigenlijk meestal wat je wilt.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial regelt Slack-volume onafhankelijk tijdens een huddle terwijl muziek op een ander niveau speelt" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Huddle-geoptimaliseerde setup</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (helder huddle-geluid, meldingen zijn luid maar je bent actief in Slack)</li>
  <li><strong>Spotify:</strong> 15% (nauwelijks hoorbare achtergrond, concurreert niet met stemmen)</li>
  <li><strong>Browser:</strong> gedempt (geen verrassende tab-audio)</li>
</ul>

<h3>Passieve huddle-setup</h3>
<ul>
  <li><strong>Slack:</strong> 30% (achtergrondluisterniveau)</li>
  <li><strong>Spotify:</strong> 40% (primaire audio is je muziek)</li>
  <li><strong>Browser:</strong> 50% (normaal werkniveau)</li>
</ul>

<p>Sla elk op als profiel. Wanneer een huddle begint, pas je het juiste profiel toe met één klik. Of gebruik <strong>auto-ducking</strong> — wanneer de huddle je microfoon activeert, verlaagt SoundDial automatisch alles behalve Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Hoe stel je een standaardvolume in voor nieuwe apps op Mac",
    description: "Nieuwe apps starten standaard op vol volume. Zo laat je elke nieuwe app op een comfortabel niveau starten — zodat niets je verrast.",
    date: "2026-03-12",
    readTime: "3 min leestijd",
    content: `
<p>Je installeert een nieuwe app. Het start voor het eerst op. Het speelt meteen geluid af — een introgeluid, een melding, een tutorialvideo — op vol systeemvolume. Je verwachtte het niet. Je koptelefoon is op. Je oren suizen.</p>

<p>macOS heeft geen concept van "standaardvolume voor nieuwe apps" omdat macOS geen per-app volume heeft. Elke app krijgt het systeemvolume, en het systeemvolume is wat je het laatst hebt ingesteld. Nieuwe apps krijgen geen speciale behandeling — ze knallen gewoon op welk niveau alles ook staat.</p>

<h2>Waarom dit een probleem is</h2>

<p>Wanneer je een app voor het eerst start, heb je geen idee hoe hard het zal zijn. Sommige apps spelen meteen geluiden (onboarding-tutorials, meldingsgeluiden, welkomstvideo's). Als je systeemvolume op 80% staat omdat je naar muziek luisterde, staat het geluid van die nieuwe app ook op 80% — wat veel harder kan zijn dan comfortabel voor een onverwachte audiobron.</p>

<p>Dit is vooral schokkend bij:</p>
<ul>
  <li>Communicatie-apps (Slack, Teams) die een opstartgeluid afspelen</li>
  <li>Apps met videotutorials bij de eerste start</li>
  <li>Games die meteen titelmuziek afspelen</li>
  <li>Browser-gebaseerde apps die automatisch content afspelen</li>
</ul>

<h2>De oplossing: standaardvolume voor nieuwe apps</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> heeft een <strong>configureerbaar standaardvolume</strong> voor nieuwe apps. In de instellingen stel je in op welk volumeniveau nieuw gedetecteerde apps moeten starten — bijvoorbeeld 70%. De eerste keer dat een app start en geluid produceert, zet SoundDial het op 70% in plaats van 100%.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial standaardvolume-instelling — nieuwe apps starten op een ingesteld niveau in plaats van vol volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Dit betekent:</p>
<ul>
  <li>Geen verrassend vol geluid van nieuw geïnstalleerde apps</li>
  <li>Elke nieuwe app start op een comfortabel, voorspelbaar niveau</li>
  <li>Je kunt het daarna naar boven of beneden aanpassen</li>
  <li>Eenmaal aangepast onthoudt de <strong>volumegeheugen</strong>-functie het niveau van die app voor toekomstige starts</li>
</ul>

<p>Het is een kleine functie, maar het lost een echte dagelijkse ergernis op — de "nieuwe-app-verrassingsknaller" die iedereen minstens één keer overkomt.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac-opstartgeluid te hard? Hoe je het uitschakelt of zachter zet",
    description: "De Mac-opstartgong blèrt elke keer als je herstart op vol volume — vooral gênant in vergaderingen en stille ruimtes. Zo stil je het of regel je het.",
    date: "2026-03-15",
    readTime: "4 min leestijd",
    content: `
<p>Je herstart je Mac in een stil kantoor. De vergaderruimte is doodstil. Dan — <em>BONG</em> — de opstartgong knalt op vol volume. Iedereen kijkt naar je. De gong is iconisch, maar ook oncontroleerbaar en vaak gênant hard.</p>

<h2>Hoe je het opstartgeluid uitschakelt</h2>

<p>macOS laat je de opstartgong volledig uitschakelen:</p>
<ol>
  <li>Ga naar <strong>Systeeminstellingen → Geluid</strong></li>
  <li>Zoek <strong>"Speel geluid bij opstarten"</strong></li>
  <li>Vink het uit</li>
</ol>

<p>Klaar. Je Mac start voortaan stil op. Geen Terminal-commando's nodig — deze instelling is beschikbaar sinds macOS Big Sur.</p>

<h3>Terminal-methode (als je dat liever hebt)</h3>
<p>Je kunt het ook uitschakelen via Terminal:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Om weer in te schakelen:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Kun je het opstartgeluid zachter zetten in plaats van uitschakelen?</h2>

<p>Niet direct. De opstartgong speelt op een vast volume dat wordt bepaald door het systeemvolume op het moment van afsluiten. Als je Mac op 80% volume stond toen je hem afsloot, speelt de gong op ongeveer 80%. Als het op 20% stond, is de gong zachter.</p>

<p><strong>Workaround:</strong> Verlaag het systeemvolume naar 10-20% voordat je je Mac herstart. De opstartgong speelt dan op dat lagere niveau. Niet ideaal — je moet eraan denken — maar het werkt als je de gong op een redelijk volume wilt in plaats van volledig stil.</p>

<h2>Het bredere Mac-geluidscontroleprobleem</h2>

<p>De opstartgong is slechts één voorbeeld van de beperkte audiocontrole van macOS. Systeemgeluiden, meldingsgeluiden en app-audio worden allemaal samengemengd met minimale onafhankelijke controle. Als je regelmatig het volume aanpast om verschillende audiobronnen gedurende de dag te beheren, lost per-app volumecontrole het bredere probleem op.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft elke app op je Mac een eigen volumeschuif. Zet meldingsapps laag, muziek op een comfortabel niveau en gesprekken op vol volume — allemaal onafhankelijk. Sla configuraties op als profielen en wissel met één klik.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volumecontrole voor het beheren van alle Mac-audiobronnen onafhankelijk" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Cisco Webex-volume te laag op Mac? Zo los je het op",
    description: "Webex-gesprekken zijn nauwelijks hoorbaar op je Mac. Hier vind je elke oplossing — van Webex audio-instellingen tot het versterken van gespreksvolume voorbij 100%.",
    date: "2026-03-18",
    readTime: "5 min leestijd",
    content: `
<p>Webex is een van de meest gebruikte videoconferentietools in bedrijfsomgevingen — en een van de meest beklaagde voor audiokwaliteit op Mac. Laag gespreksvolume, gedempte stemmen en audio die zachter lijkt dan Zoom of Teams op hetzelfde systeemvolume.</p>

<h2>1. Controleer Webex audio-instellingen</h2>

<p>Klik tijdens een Webex-vergadering op het audiomenu (luidsprekericoon of de drie puntjes → Audio-instellingen):</p>
<ul>
  <li>Zorg dat het juiste <strong>Speaker</strong>-apparaat is geselecteerd</li>
  <li>Sleep de speaker-volumeschuif naar het maximum</li>
  <li>Klik op "Test" om een testtoon af te spelen en de uitvoer te controleren</li>
  <li>Controleer of "Muziekmodus" is ingeschakeld — schakel het uit tenzij je specifiek muziek presenteert</li>
  <li>Controleer ruisonderdrukkingsinstellingen — "Verwijder achtergrondgeluid" op agressieve modus kan het waargenomen stemvolume verlagen</li>
</ul>

<h2>2. Controleer macOS-uitvoer</h2>

<p>Systeeminstellingen → Geluid → Uitvoer. Controleer of het juiste apparaat is geselecteerd en het volume op maximum staat.</p>

<h2>3. Bluetooth-codecprobleem</h2>

<p>Gebruik je AirPods of Bluetooth-koptelefoons? Webex dat je microfoon activeert forceert de AAC→SCO-codecwissel, waardoor audiokwaliteit en volume afnemen. Gebruik een aparte microfoon (ingebouwde Mac-mic of USB) en houd Bluetooth-koptelefoons alleen als uitvoer.</p>

<h2>4. Webex-specifieke audiobewerking</h2>

<p>Webex heeft agressieve audiobewerking die het schijnbare volume van gespreksdeelnemers kan verlagen. Probeer deze Webex-instellingen:</p>
<ul>
  <li>Zet ruisverwijdering op "Laag" in plaats van "Hoog"</li>
  <li>Schakel "Optimaliseer voor mijn stem" uit als het is ingeschakeld</li>
  <li>Probeer te wisselen van "Computeraudio" naar een specifiek apparaat</li>
</ul>

<h2>5. Het IT/beheerprobleem</h2>

<p>In bedrijfsomgevingen wordt Webex vaak beheerd door IT met specifiek audiobeleid. Sommige instellingen kunnen vergrendeld of vooraf geconfigureerd zijn.</p>

<h2>6. Versterk Webex voorbij 100%</h2>

<p>Als de instellingen op maximum staan en deelnemers nog steeds te zacht zijn, laat <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> je Webex versterken tot <strong>200%</strong>. Dit versterkt de gespreksaudio voorbij het ingebouwde maximum van Webex.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Cisco Webex-gespreksvolume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial helpt ook tijdens opeenvolgende Webex-vergaderingen: gebruik auto-ducking om je achtergrondmuziek automatisch te verlagen wanneer elke vergadering begint en te herstellen tijdens de pauzes.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Twee dingen tegelijk beluisteren op Mac zonder gek te worden",
    description: "Muziek en een podcast. Een college en een notitiescherm. Een gesprek en achtergrondmuziek. macOS dwingt je één volume voor beide te kiezen — zo balanceer je ze.",
    date: "2026-03-20",
    readTime: "4 min leestijd",
    content: `
<p>Je wilt naar twee audiobronnen tegelijk luisteren. Muziek tijdens een gesprek. Een podcast terwijl je een tutorial bekijkt. Achtergrondsfeergeluid tijdens het studeren. Twee dingen, twee verschillende ideale volumes. macOS geeft je één schuif voor beide.</p>

<p>Dit is de fundamentele audiobeperking van macOS: elke app deelt één volume. Je kunt niet zeggen "deze op 30%, die op 80%." Het is alles op één niveau, of niets.</p>

<h2>Wanneer je echt twee audiobronnen nodig hebt</h2>

<p>Dit is geen randgeval. Het is hoe de meeste mensen hun computer gebruiken:</p>
<ul>
  <li><strong>Muziek + videogesprek</strong> — het meest voorkomend. Achtergrondmuziek tijdens een Zoom-vergadering, maar zacht genoeg om collega's te horen.</li>
  <li><strong>College + referentiemateriaal</strong> — een student die een opgenomen college bekijkt terwijl hij af en toe een YouTube-tutorial voor context bekijkt.</li>
  <li><strong>Podcast + omgevingsgeluid</strong> — luisteren naar een podcast terwijl een witte-ruis- of regengeluiden-app zacht speelt.</li>
  <li><strong>Twee browsertabs</strong> — een trainingsvideo in één tab en een demo in een andere, op verschillende volumes.</li>
  <li><strong>Game + voicechat</strong> — gamegeluid voor onderdompeling, Discord voor communicatie.</li>
</ul>

<h2>De macOS-beperking</h2>

<p>macOS heeft één volumeschuif. Druk op de volumetoets en alles verandert gelijkmatig.</p>

<h2>De oplossing: per-app volume in één paneel</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> plaatst elke app in één menubalkpaneel met onafhankelijke volumeschuiven. Beide audiobronnen naast elkaar, elk met hun eigen niveau. Pas de ene aan zonder de andere te raken.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial toont twee audiobronnen op verschillende volumeniveaus op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Voorbeeldsetups:</p>
<p><strong>Muziek + Zoom-gesprek:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>
<p><strong>Podcast + regengeluiden:</strong></p>
<ul>
  <li>Podcast-app: 70% | Regen-app: 15%</li>
</ul>
<p><strong>College + YouTube-tutorial:</strong></p>
<ul>
  <li>Zoom (college): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>Elke combinatie is een andere balans. Sla de combinaties die je regelmatig gebruikt op als <strong>volumeprofielen</strong> en wissel met één klik. Auto-ducking handelt het muziek+gesprek-scenario automatisch af.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Films kijken op Mac zonder iedereen wakker te maken",
    description: "Dialoog is onhoorbaar, dan schudden explosies de muren. Zo tem je filmaudio voor laat-op-de-avond-kijken op Mac — zonder een woord te missen.",
    date: "2026-03-22",
    readTime: "5 min leestijd",
    content: `
<p>Het is 1 uur 's nachts. Je kijkt een film op je MacBook in bed. De personages fluisteren — je zet het volume hoger. Dan begint een achtervolging en plotseling kan je hele appartement het horen. Je grijpt naar de volumetoets. Deze cyclus herhaalt zich twee uur lang.</p>

<p>Het probleem is <strong>dynamisch bereik</strong> — het verschil tussen de zachtste en hardste momenten van een film. In een bioscoop met een krachtig geluidssysteem zorgt dit bereik voor een meeslepende ervaring. Op een MacBook om middernacht zorgt het voor een constant gevecht tussen "kan de dialoog niet horen" en "de buren wakker maken."</p>

<h2>Waarom films harder zijn dan muziek of podcasts</h2>

<p>Muziek wordt doorgaans gemastered met gecomprimeerd dynamisch bereik — het verschil tussen de zachtste en hardste delen is relatief klein (misschien 10-15 dB). Podcasts zijn nog meer gecomprimeerd. Films, vooral actiefilms, kunnen een dynamisch bereik van <strong>30-40 dB</strong> hebben.</p>

<h2>Oplossing 1: Gebruik de nachtmodus van de streamingdienst</h2>
<ul>
  <li><strong>Netflix:</strong> Zoek een "Verminder harde geluiden"-schakelaar in de audio-instellingen tijdens het afspelen</li>
  <li><strong>Apple TV+:</strong> Systeeminstellingen → Toegankelijkheid → "Verminder harde geluiden"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost" bij ondersteunde titels</li>
  <li><strong>Disney+:</strong> Momenteel geen vergelijkbare functie</li>
</ul>

<h2>Oplossing 2: Gebruik een koptelefoon</h2>

<p>Een koptelefoon lost het "iedereen wakker maken"-probleem op — je audio is privé. Maar het dynamisch-bereik-probleem blijft.</p>

<h2>Oplossing 3: Stel je streamingapp in op een specifiek volume</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je de perfecte laat-op-de-avond-setup maken:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial laat-op-de-avond filmsetup — streamingapp op gematigd volume, meldingen gedempt" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Laat-op-de-avond filmprofiel</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / browser:</strong> 40-50% — comfortabel dialookniveau</li>
  <li><strong>Slack:</strong> gedempt — geen verrassingspings</li>
  <li><strong>Mail:</strong> gedempt</li>
  <li><strong>iMessage:</strong> gedempt</li>
  <li><strong>Systeemgeluiden:</strong> gedempt</li>
</ul>

<p>Sla dit op als een "Nacht"-profiel. Wanneer je een laat-op-de-avond film begint, pas je het profiel toe met één klik.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac-volume reset na slaapstand? Zo behoud je je audio-instellingen",
    description: "Elke keer als je Mac uit slaapstand komt, klopt het volume niet — gereset naar maximum, gedaald naar nul of overgeschakeld naar de verkeerde uitvoer.",
    date: "2026-03-25",
    readTime: "5 min leestijd",
    content: `
<p>Je klapt je MacBook dicht. Je opent hem later. Het volume is anders. Misschien staat het op maximum terwijl je het op 40% had. Misschien is het van koptelefoon naar speakers overgeschakeld. Het was prima vóór de slaapstand — nu klopt het niet.</p>

<h2>Waarom het gebeurt</h2>

<h3>1. Audio-uitvoerapparaat gewijzigd tijdens slaapstand</h3>
<p>Als je Bluetooth-koptelefoon verbonden was vóór de slaapstand en ze loskoppelen terwijl de Mac slaapt, schakelt macOS over naar de ingebouwde speakers bij het ontwaken.</p>

<h3>2. Core Audio-daemon herstart</h3>
<p>De audiodaemon van macOS (coreaudiod) herstart soms tijdens slaap-/waakcycli. Bij het herstarten kan het initialiseren met standaardvolumeniveaus.</p>

<h3>3. HDMI/DisplayPort-herverbinding</h3>
<p>Als je een extern beeldscherm via HDMI of DisplayPort gebruikt, kan het sluiten en openen van het deksel ervoor zorgen dat het beeldscherm loskoppelt en weer verbindt.</p>

<h3>4. Bluetooth opnieuw koppelen</h3>
<p>Wanneer Bluetooth-apparaten na de slaapstand opnieuw verbinden, kan de volume-onderhandeling een ander niveau opleveren dan wat je eerder had.</p>

<h2>Oplossingen</h2>

<h3>Voorkom Bluetooth-ontkoppeling tijdens slaapstand</h3>
<p>Systeeminstellingen → Bluetooth → Geavanceerd. De verbinding actief houden voorkomt de ontkoppel-/heraansluitcyclus die het volume reset.</p>

<h3>Schakel automatisch wisselen uit voor AirPods</h3>
<p>Systeeminstellingen → Bluetooth → klik "i" naast AirPods → "Verbind met deze Mac" → stel in op "Wanneer als laatste verbonden met deze Mac."</p>

<h3>Reset NVRAM (Intel Macs)</h3>
<p>Schakel uit → schakel in terwijl je Option+Command+P+R 20 seconden ingedrukt houdt.</p>

<h2>Bescherm je audiobalans met SoundDial</h2>

<p>Zelfs als het systeemvolume reset na de slaapstand, beschermt <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> je <em>per-app</em> volumebalans. De <strong>volumegeheugen</strong>-functie slaat het volume van elke app onafhankelijk op en herstelt het na ontwaken, herstarten of app-herstart.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial behoudt per-app volumeniveaus na Mac slaapstand en waakcycli" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac-audio voor muziekproductie: DAW en communicatie apart regelen",
    description: "Logic Pro of Ableton gebruiken terwijl je in een Discord-gesprek zit? Zo hoor je je DAW op volle kwaliteit terwijl voicechat op een comfortabel niveau blijft.",
    date: "2026-03-28",
    readTime: "5 min leestijd",
    content: `
<p>Je produceert muziek in Logic Pro (of Ableton, of FL Studio). Je zit ook op Discord met een medewerker. Het probleem: je DAW-uitvoer en Discord vechten om hetzelfde volumeniveau.</p>

<h2>Waarom dit belangrijk is voor productie</h2>

<p>Muziekproductie vereist <strong>nauwkeurige monitorniveaus</strong>. Je moet je DAW op een consistent, gekalibreerd volume horen om betrouwbare mixbeslissingen te nemen.</p>

<h2>Per-app volume voor productie</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je exacte volumes instellen voor elke app onafhankelijk:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial scheidt DAW-uitvoer van Discord en referentietracks op macOS voor muziekproductie" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Productie-setup</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — je primaire monitorniveau</li>
  <li><strong>Discord / voicechat:</strong> 40-60% — hoorbaar maar duidelijk secundair aan je mix</li>
  <li><strong>Spotify / referentietracks:</strong> 80% — match je DAW-niveau voor nauwkeurige A/B-vergelijkingen</li>
  <li><strong>Slack / meldingen:</strong> gedempt — nul interferentie tijdens productie</li>
  <li><strong>Safari / Chrome:</strong> 50% — voor het bekijken van tutorials</li>
</ul>

<h2>Een opmerking over latentie</h2>

<p>SoundDial gebruikt Apples Core Audio Tap API voor volumecontrole. De verwerking voegt verwaarloosbare latentie toe — onmerkbaar voor monitordoeleinden.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Apple Music-volume te laag op Mac? Zo los je het op en versterk je het",
    description: "Apple Music op maximaal volume op je Mac maar nog steeds te zacht? Controleer Sound Check, EQ-instellingen, en leer hoe je Apple Music voorbij 100% versterkt.",
    date: "2026-03-30",
    readTime: "5 min leestijd",
    content: `
<p>Apple Music staat op vol volume. Je Mac staat op vol volume. Een nummer waarvan je weet dat het hard moet zijn, is nauwelijks hoorbaar. Ondertussen, overschakelen naar Spotify — hetzelfde nummer, hetzelfde volume — is het merkbaar harder.</p>

<h2>1. Controleer Sound Check</h2>
<p>Apple Music heeft een functie genaamd <strong>Sound Check</strong> die het volume van alle nummers normaliseert. Open de Muziek-app → Instellingen (⌘,) → Afspelen → <strong>Sound Check</strong>.</p>

<h2>2. Controleer de EQ-instelling</h2>
<p>Muziek-app → Instellingen → Afspelen → <strong>EQ</strong>. Als een EQ-preset is geselecteerd, probeer het op "Uit" te zetten.</p>

<h2>3. Controleer Lossless Audio-instellingen</h2>
<p>Als je Apple Music Lossless hebt ingeschakeld, kan de hogere kwaliteitsstroom bij sommige nummers een lager waargenomen volume hebben.</p>

<h2>4. Koptelefoonveiligheid</h2>
<p>Systeeminstellingen → Geluid → Koptelefoonveiligheid. Als "Verminder hard geluid" aan staat, beperkt macOS je koptelefoonvolume globaal.</p>

<h2>5. Versterk Apple Music voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je Apple Music versterken tot <strong>200%</strong>. Alleen Apple Music wordt harder — Zoom, Slack en je browser blijven op hun huidige niveaus.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Apple Music-volume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Gratis volumemixer voor Mac: wat je echt krijgt (en wat niet)",
    description: "Op zoek naar een gratis per-app volumemixer voor Mac? Hier is een eerlijke uitsplitsing van wat gratis opties bieden, wat ze missen, en wanneer betalen de moeite waard is.",
    date: "2026-04-03",
    readTime: "6 min leestijd",
    content: `
<p>Als je zoekt naar "gratis volumemixer voor Mac," vind je één hoofdresultaat: <strong>Background Music</strong>. Het is de enige noemenswaardige gratis, open-source per-app volumecontrole-app voor macOS.</p>

<h2>Background Music: de gratis optie</h2>
<ul>
  <li><strong>Per-app volumeschuiven</strong> — basisvolumecontrole voor elke draaiende app</li>
  <li><strong>Automatisch muziek pauzeren</strong> — pauzeert je muziekspeler wanneer een andere app geluid afspeelt</li>
  <li><strong>Standaard uitvoerapparaatinstelling</strong></li>
</ul>

<h3>Wat Background Music niet heeft</h3>
<ul>
  <li><strong>Geen volumeversterking voorbij 100%</strong></li>
  <li><strong>Geen volumeprofielen</strong></li>
  <li><strong>Geen auto-ducking</strong></li>
  <li><strong>Geen volumegeheugen</strong></li>
  <li><strong>Geen sneltoetsen</strong></li>
  <li><strong>Geen uitvoerapparaat wisselen</strong></li>
</ul>

<h3>Het betrouwbaarheidsprobleem</h3>
<p>Background Music werkt door het installeren van een <strong>virtueel audioapparaatdriver</strong>, en deze driver breekt bij macOS-updates.</p>

<h2>Wanneer betalen de moeite waard is</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> kost €14,99 — eenmalig, geen abonnement. Minder dan de helft van de prijs van SoundSource ($39) en bevat functies (profielen, auto-ducking) die SoundSource niet heeft.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — betrouwbare per-app volumemixer voor Mac met profielen, auto-ducking en 200% versterking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, gesandboxed, geen systeemstuurprogramma's. €14,99 eenmalig, geen abonnement, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Muziek en voicechat balanceren op Mac",
    description: "Muziek is te hard via Discord. Of het gesprek is te zacht onder Spotify. macOS laat je ze niet balanceren — zo stel je de perfecte verhouding in.",
    date: "2026-04-05",
    readTime: "4 min leestijd",
    content: `
<p>Je wilt naar muziek luisteren terwijl je met vrienden praat op Discord (of Zoom, of FaceTime). De muziek moet aanwezig zijn maar niet overheersend. De voicechat moet helder en dominant zijn. macOS maakt het onmogelijk.</p>

<h2>De echte oplossing: onafhankelijk per-app volume</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> plaatst zowel Spotify als Discord in hetzelfde paneel met onafhankelijke volumeschuiven.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial balanceert Spotify en Discord op verschillende volumeniveaus op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>De gouden verhouding voor muziek + voicechat</h3>
<ul>
  <li><strong>Voicechat op 85-100%</strong> — altijd duidelijk hoorbaar, dominant in de mix</li>
  <li><strong>Muziek op 20-35%</strong> — aanwezig maar nooit concurrerend met stemmen</li>
</ul>

<h3>Auto-ducking voor gesprekken</h3>
<p>Als je naar muziek luistert en er komt een gesprek binnen, verlaagt SoundDial's auto-ducking automatisch de muziek naar je geconfigureerde niveau.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac-volumecontrole: de complete gids (2026)",
    description: "Alles wat je moet weten over audiocontrole op macOS — van basis sneltoetsen tot per-app volume, uitvoer wisselen en automatisering.",
    date: "2026-06-12",
    readTime: "12 min leestijd",
    content: `
<p>macOS geeft je een volumeschuif en een dempenknop. Dat is de volledige omvang van Apples ingebouwde audiocontrole. Maar je Mac heeft veel meer audiomogelijkheden dan het oppervlak doet vermoeden.</p>

<h2>Deel 1: Ingebouwde volumecontroles</h2>

<h3>De volumetoetsen</h3>
<p>De volume omhoog (F12), volume omlaag (F11) en dempen (F10) toetsen passen het systeemvolume aan in 16 stappen.</p>

<h3>Fijnkorrelig volume: Option + Shift</h3>
<p>Houd <strong>Option + Shift</strong> ingedrukt en druk op volume omhoog/omlaag. Elke druk past aan met een kwart van een normale stap — waardoor je <strong>64 volumeniveaus</strong> krijgt in plaats van 16.</p>

<h3>Stille volumeaanpassing: Shift</h3>
<p>Houd <strong>Shift</strong> ingedrukt en druk op volume omhoog/omlaag. Het volume verandert zonder het hoorbare feedback-"pop"-geluid.</p>

<h2>Deel 2: Uitvoerapparaatbeheer</h2>

<h3>Uitvoerapparaten wisselen</h3>
<p>Houd <strong>Option</strong> ingedrukt en klik op het Geluid-icoon in de menubalk. Je ziet een lijst van alle beschikbare uitvoer- en invoerapparaten.</p>

<h2>Deel 3: Waarschuwings- en meldingsvolume</h2>

<p>macOS heeft een apart waarschuwingsvolumeschuif: Systeeminstellingen → Geluid → Waarschuwingsvolume. Dit bestuurt het volume van systeemgeluiden onafhankelijk van het hoofdvolume. Het beïnvloedt echter alleen macOS-systeemwaarschuwingen — niet meldingsgeluiden van apps van derden.</p>

<h2>Deel 4: Koptelefoon-specifieke controles</h2>

<p>Systeeminstellingen → Geluid → Koptelefoonveiligheid. "Verminder hard geluid" beperkt het koptelefoonvolume op basis van cumulatieve blootstelling.</p>

<h2>Deel 5: Wat macOS niet kan (en hoe je het oplost)</h2>

<p>macOS heeft één volumeschuif voor alle apps. Er is geen ingebouwde manier om Spotify op 30% en Zoom op 100% te zetten. Al deze vijf ontbrekende functies zijn beschikbaar met <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volumecontrole, profielen, auto-ducking en 200% versterking voor macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Deel 6: Per-app volume met SoundDial</h2>

<ul>
  <li><strong>Per-app volume:</strong> Elke app krijgt een eigen schuif, 0% tot 200%</li>
  <li><strong>Per-app dempen:</strong> Eén klik om een app te dempen</li>
  <li><strong>Volumeversterking:</strong> Versterk stille apps voorbij 100%</li>
  <li><strong>Volumeprofielen:</strong> Sla configuraties op en wissel met één klik</li>
  <li><strong>Auto-ducking:</strong> Achtergrondaudio verlaagt tijdens gesprekken, herstelt daarna</li>
  <li><strong>Volumegeheugen:</strong> Het volume van elke app wordt onthouden tussen herstarts</li>
  <li><strong>Sneltoetsen:</strong> ⌃⌥S om de mixer te schakelen, ⌃⌥M om alles te dempen</li>
</ul>

<p>Het gebruikt Apples moderne Core Audio Tap API. Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> voor €14,99 (eenmalige aankoop, geen abonnement), macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "VLC-volume te laag op Mac? Zo versterk je het voorbij 200%",
    description: "VLC op maximaal volume maar een video is nog steeds te zacht? VLC heeft een ingebouwde 200%-versterking — plus je kunt nog verder gaan met een per-app volumemixer.",
    date: "2026-04-08",
    readTime: "4 min leestijd",
    content: `
<p>Je kijkt een video in VLC. De dialoog is zacht. Je zet het volume van VLC helemaal omhoog. Je zet het volume van je Mac helemaal omhoog. Nog steeds niet goed te horen.</p>

<h2>VLC's ingebouwde volumeversterking (tot 200%)</h2>

<h3>Methode 1: Scrollwiel</h3>
<p>Beweeg je muis over VLC's volumeschuif en scroll omhoog. De schuif gaat voorbij de zichtbare 100%-markering, tot 200%.</p>

<h3>Methode 2: Sneltoets</h3>
<p>Druk op <strong>Command + Pijl omhoog</strong> (⌘↑) herhaaldelijk om het volume boven 100% te verhogen.</p>

<h2>Voorbij VLC's versterking: systeemniveau-versterking</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft VLC een eigen volumeschuif van 0% tot 200% op systeemniveau. Dit stapelt met VLC's interne versterking:</p>
<ul>
  <li>VLC intern: 200% × SoundDial: 200% = effectief 400% versterking</li>
</ul>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt VLC-volume op systeemniveau op macOS voor stille videobestanden" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Audio-ducking uitschakelen op Mac (of zelf de controle nemen)",
    description: "macOS of je apps verlagen je muziek steeds tijdens gesprekken zonder het te vragen. Zo stop je ongewenste audio-ducking — of vervang je het door ducking die je zelf regelt.",
    date: "2026-04-10",
    readTime: "5 min leestijd",
    content: `
<p>Je gaat in een Zoom-gesprek. Je muziek zakt naar bijna niets. Je hebt geen volumeregeling aangeraakt — iets deed het voor je. Dit is <strong>audio-ducking</strong>: het automatisch verlagen van achtergrondaudio wanneer een gesprek of belangrijke audiobron actief is.</p>

<h2>Waar audio-ducking vandaan komt op Mac</h2>

<p>macOS zelf heeft <strong>geen</strong> ingebouwde audio-duckingfunctie. Als je muziek zachter wordt tijdens gesprekken, veroorzaakt een van deze het:</p>
<ul>
  <li><strong>Zoom's audiobewerking</strong></li>
  <li><strong>Bluetooth-codecwisseling</strong></li>
  <li><strong>Een app van derden</strong></li>
  <li><strong>Communicatie-apps die audio aanpassen</strong></li>
</ul>

<h2>Vervang slechte ducking door goede ducking</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> heeft een ingebouwde auto-duckingfunctie die jou de controle geeft:</p>
<ul>
  <li><strong>Configureerbaar duckniveau:</strong> Van 10% (bijna stil) tot 80% (nauwelijks verlaagd). Standaard 30%.</li>
  <li><strong>Slimme detectie:</strong> Werkt met Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Perfecte herstel:</strong> Wanneer het gesprek eindigt, keert elke app terug naar precies het vorige volume.</li>
</ul>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial configureerbare auto-ducking — bepaal precies hoeveel achtergrondaudio wordt verlaagd tijdens gesprekken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Bluetooth-koptelefoon te zacht op Mac? Elke oplossing die werkt",
    description: "Je Bluetooth-koptelefoon werkt prima op je telefoon maar klinkt zacht op Mac. Hier is elke oorzaak — van codecproblemen tot macOS-volumelimieten — en hoe je elk oplost.",
    date: "2026-04-12",
    readTime: "6 min leestijd",
    content: `
<p>Je Bluetooth-koptelefoon is luid genoeg op je telefoon. Je verbindt ze met je Mac — en alles is zachter. Muziek klinkt gedempt. Gesprekken zijn moeilijk te horen.</p>

<h2>1. Koptelefoonveiligheid beperkt je volume</h2>
<p>Ga naar <strong>Systeeminstellingen → Geluid → Koptelefoonveiligheid</strong>. Als "Verminder hard geluid" is ingeschakeld, schakel het uit.</p>

<h2>2. Bluetooth-codec mismatch</h2>
<p>Je telefoon verbindt mogelijk met een hogere kwaliteitscodec (aptX, LDAC, AAC) terwijl je Mac standaard SBC gebruikt.</p>

<h2>3. Microfoonactivering triggert SCO</h2>
<p>Wanneer een app je Bluetooth-koptelefoonmicrofoon activeert, schakelt macOS van AAC naar de SCO-codec. Gebruik een aparte microfoon.</p>

<h2>4. Bluetooth-volumesynchronisatieprobleem</h2>
<p>Ontkoppel de koptelefoon, wacht 5 seconden, verbind opnieuw.</p>

<h2>Nog steeds te zacht? Versterk voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> versterkt het volume van elke app tot <strong>200%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt app-volume voor Bluetooth-koptelefoons op Mac met per-app schuiven tot 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac-audio voor OBS en streaming: bepaal wat je publiek hoort",
    description: "Streamen op Mac met OBS? Je kijkers horen alles op hetzelfde volume — game, muziek, alerts, Discord. Zo balanceer je audiobronnen correct.",
    date: "2026-04-15",
    readTime: "7 min leestijd",
    content: `
<p>Je streamt op je Mac met OBS. Je gamegeluid knalt. Je Discord-gesprek loopt. Spotify speelt achtergrondmuziek. Je kijkers horen dit alles op hetzelfde volume — een chaotische boel.</p>

<h2>De eenvoudigere aanpak: niveaus regelen vóór OBS ze opneemt</h2>

<p>In plaats van audio proberen te scheiden in OBS, regel je het volume van elke app <em>voordat</em> het OBS's desktop audio-opname bereikt.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> stelt elke app in op het niveau dat je kijkers moeten horen:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial balanceert game, Discord en muziek-audioniveaus voor OBS-streaming op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Typische streaming audio-setup</h3>
<ul>
  <li><strong>Game:</strong> 50%</li>
  <li><strong>Discord / voicechat:</strong> 80%</li>
  <li><strong>Spotify / muziek:</strong> 15%</li>
  <li><strong>Stream alerts (browser):</strong> 40%</li>
  <li><strong>Slack / meldingen:</strong> gedempt</li>
</ul>

<p>Sla dit op als een "Streaming"-profiel en pas toe met één klik voor je live gaat.</p>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Hoe je Mac het volume per app laat onthouden",
    description: "Elke keer dat je Spotify herstart of Zoom opnieuw opent, moet je het volume opnieuw aanpassen. Zo laat je macOS automatisch het volume van elke app onthouden.",
    date: "2026-04-18",
    readTime: "4 min leestijd",
    content: `
<p>Je besteedt vijf minuten om je audioniveaus perfect te krijgen. Spotify op 30%, Zoom op 100%, Slack op 15%. Dan herstart je je Mac. Of Slack crasht en herstart. Elke app reset naar zijn standaardvolume. Je past alles opnieuw aan. Weer.</p>

<h2>Volumegeheugen met SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> heeft een <strong>Volumegeheugen</strong>-functie. Wanneer ingeschakeld, slaat het het volumeniveau van elke app op via de bundle-identifier. Wanneer de app stopt en herstart, herstelt SoundDial het automatisch naar het opgeslagen volume.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volumegeheugen — onthoudt en herstelt automatisch per-app volumeniveaus op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Wat wordt onthouden</h3>
<ul>
  <li><strong>Volumeniveau</strong> — het exacte percentage (0% tot 200%)</li>
  <li><strong>Dempstatus</strong> — als je een app hebt gedempt, blijft het gedempt bij herstart</li>
  <li><strong>Per app</strong> — het volume van elke app wordt onafhankelijk opgeslagen per bundle ID</li>
</ul>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Podcastvolume te laag op Mac? Zo maak je het harder",
    description: "Sommige podcasts zijn fluisterzacht op Mac zelfs op maximaal volume. Hier is waarom — en hoe je podcastaudio voorbij 100% versterkt zonder andere apps te beïnvloeden.",
    date: "2026-04-20",
    readTime: "5 min leestijd",
    content: `
<p>Je luistert naar een podcast op je Mac. De host klinkt prima, maar de gast — opgenomen met een laptopmicrofoon in de keuken — is nauwelijks hoorbaar.</p>

<h2>Systeemniveau-oplossing: versterk podcast-apps voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft elke app een volumeschuif tot <strong>200%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Apple Podcasts-volume naar 180% op Mac voor stille podcastafleveringen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Zet Apple Podcasts of je podcast-app op 160-180% terwijl je Spotify-muziek op 40% houdt en Slack op 15%. De podcast wordt harder zonder al het andere pijnlijk hard te maken.</p>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Mac-audio-setup voor online lessen en colleges",
    description: "Een college volgen terwijl je aantekeningen maakt, referenties googelt en met klasgenoten chat — allemaal op verschillende volumes. Zo beheer je studentenaudio op Mac.",
    date: "2026-04-22",
    readTime: "5 min leestijd",
    content: `
<p>Je bent een student die een online college volgt op Zoom. Je hebt een YouTube-tutorial open in een ander tabblad voor referentie. Je klasgenoten chatten op Discord. Spotify speelt lo-fi beats op de achtergrond. Je Mac behandelt al deze als één volume.</p>

<h2>Per-app audio instellen voor studie</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft elke app een eigen volumeschuif:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial studentensetup — college op vol volume, studiemuziek laag, meldingen gedempt" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Collegeprofiel</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100%</li>
  <li><strong>Spotify:</strong> 15%</li>
  <li><strong>Discord:</strong> 10%</li>
  <li><strong>Browser:</strong> 40%</li>
  <li><strong>iMessage:</strong> gedempt</li>
</ul>

<h3>Zelfstudieprofiel</h3>
<ul>
  <li><strong>Spotify:</strong> 50%</li>
  <li><strong>Browser:</strong> 70%</li>
  <li><strong>Discord:</strong> 20%</li>
  <li><strong>Al het andere:</strong> gedempt</li>
</ul>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Mac-geluid werkt niet na update? Complete oplossingsgids",
    description: "Je hebt macOS bijgewerkt en nu is je geluid weg, kraakt het of zit het vast op het verkeerde volume. Hier is elke oplossing om je Mac-audio weer werkend te krijgen.",
    date: "2026-04-25",
    readTime: "7 min leestijd",
    content: `
<p>Je hebt macOS bijgewerkt. Alles leek prima — totdat je merkte dat er geen geluid is. Of het geluid kraakt. Of het volume zit vast. Audioproblemen na een update komen bijna bij elke macOS-release voor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Stap 1: Controleer het voor de hand liggende</h2>
<p>Is het gedempt? Is het juiste uitvoerapparaat geselecteerd?</p>

<h2>Stap 2: Herstart Core Audio</h2>
<p><code>sudo killall coreaudiod</code></p>

<h2>Stap 3: Reset NVRAM/PRAM</h2>
<p>Voor Intel Macs: schakel uit → schakel in terwijl je <strong>Option + Command + P + R</strong> 20 seconden ingedrukt houdt.</p>

<h2>Stap 4: Controleer op conflicten met drivers van derden</h2>
<p>macOS-updates breken regelmatig audiodrivers en kernel-extensies van derden.</p>

<h2>Toekomstige problemen voorkomen met SoundDial</h2>

<p>Een voordeel van <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boven andere audiotools: het installeert geen systeemaudiodriver. Het gebruikt Apples native Core Audio Tap API, wat betekent dat het schoon werkt met macOS-updates.</p>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Alle apps tegelijk dempen op Mac (en ze perfect weer herstellen)",
    description: "Directe stilte nodig? De demptoets dempt alles — maar het opheffen reset je zorgvuldig gebalanceerde volumes. Hier is een betere manier om te dempen en te herstellen op Mac.",
    date: "2026-04-28",
    readTime: "4 min leestijd",
    content: `
<p>Iemand loopt de kamer in. Je baas belt onverwacht. Je hebt direct stilte nodig. Nu.</p>

<p>Je drukt op de demptoets. Alles gaat stil. Crisis afgewend.</p>

<p>Dan gaat het moment voorbij. Je drukt weer op de demptoets. Alles komt terug — maar op het systeemvolumeniveau, dat niet onthoudt dat Spotify op 30% stond, Zoom op 100% en Slack op 15%.</p>

<h2>Een slimmere demping: per-app alles dempen</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> heeft een "Alles dempen"-sneltoets: <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Wanneer je het opnieuw indrukt: elke app keert terug naar <strong>precies</strong> het volume dat het had voordat je dempte.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial alles-dempen sneltoets — Control+Option+M om alle apps te dempen en te herstellen met volumeherstel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Google Meet-volume te laag op Mac? Zo los je het op",
    description: "Stemmen op Google Meet zijn nauwelijks hoorbaar zelfs op maximaal volume. Hier is waarom Meet via Chrome draait, wat dat betekent voor audio, en hoe je het versterkt.",
    date: "2026-05-01",
    readTime: "5 min leestijd",
    content: `
<p>Google Meet heeft geen native Mac-app — het draait in je browser. Dit betekent dat de audio van Meet deel uitmaakt van Chrome's (of Safari's) audiostream.</p>

<h2>Versterk Google Meet (Chrome) voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft Chrome een eigen volumeschuif die tot <strong>200%</strong> gaat. Aangezien Google Meet in Chrome draait, versterkt het versterken van Chrome ook Meet.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Google Meet (Chrome) volume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Mac-waarschuwingsvolume los van mediavolume instellen",
    description: "macOS heeft een verborgen waarschuwingsvolumeschuif, maar die dekt alleen systeemgeluiden. Zo scheid je echt meldings- en mediavolume op Mac.",
    date: "2026-05-02",
    readTime: "5 min leestijd",
    content: `
<p>Je muziek staat op het perfecte niveau. Dan gaat een macOS-waarschuwingsgeluid af — pijnlijk hard vergeleken met je muziek.</p>

<h2>macOS's ingebouwde waarschuwingsvolume</h2>
<p>macOS heeft een apart waarschuwingsvolume. Ga naar <strong>Systeeminstellingen → Geluid</strong> en zoek de <strong>"Waarschuwingsvolume"</strong>-schuif. Dit bestuurt alleen macOS-systeemgeluiden — niet Slack, Discord of Teams meldingsgeluiden.</p>

<h2>De echte oplossing: per-app volume voor meldingsapps</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft elke app een eigen volumeschuif. Zet meldingsapps op een subtiel niveau dat merkbaar maar niet schokkend is.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial scheidt meldingsapp-volume van mediaapp-volume op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "FaceTime-gespreksvolume te laag op Mac? Zo los je het op",
    description: "FaceTime-audio is nauwelijks hoorbaar op je Mac zelfs op vol volume. Hier is elke oplossing — van geluidsinstellingen tot het versterken van FaceTime voorbij 100%.",
    date: "2026-05-04",
    readTime: "5 min leestijd",
    content: `
<p>FaceTime-gesprekken op je iPhone zijn prima. Maar op je Mac klinkt de andere persoon alsof ze fluisteren vanuit drie kamers verderop.</p>

<h2>Versterk FaceTime-volume voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je het volume van FaceTime versterken tot <strong>200%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt FaceTime-gespreksvolume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, gesandboxed, eenmalige aankoop, geen abonnement.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac-volumesneltoetsen die je waarschijnlijk niet kent",
    description: "Voorbij de basis volumetoetsen — fijnmazige controle, specifieke apps dempen en per-app volumesneltoetsen. Elke Mac-audio-sneltoets uitgelegd.",
    date: "2026-05-06",
    readTime: "5 min leestijd",
    content: `
<p>Elke Mac-gebruiker kent de volume omhoog/omlaag/dempen toetsen. Maar macOS heeft verschillende verborgen sneltoetsen voor audiocontrole die de meeste mensen nooit ontdekken.</p>

<h2>Ingebouwde sneltoetsen die iedereen zou moeten kennen</h2>

<h3>Fijnmazige volumeaanpassing</h3>
<p>Houd <strong>Option + Shift</strong> ingedrukt en druk op volume omhoog of omlaag. 64 niveaus in plaats van 16.</p>

<h3>Stille volumeaanpassing</h3>
<p>Houd <strong>Shift</strong> ingedrukt en druk op volume omhoog/omlaag. Geen hoorbaar feedback-"pop"-geluid.</p>

<h2>Per-app volumesneltoetsen met SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> voegt twee globale sneltoetsen toe:</p>
<ul>
  <li><strong>⌃⌥S</strong> — schakel de volumemixer</li>
  <li><strong>⌃⌥M</strong> — demp alle apps direct</li>
</ul>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial sneltoetsen — Control+Option+S om te schakelen, Control+Option+M om alles te dempen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Background Music-app werkt niet op macOS? Probeer deze alternatieven",
    description: "De gratis Background Music-app werkt niet meer na een macOS-update? Hier is waarom het breekt, wat je kunt doen, en de beste alternatieven die echt werken in 2026.",
    date: "2026-06-08",
    readTime: "5 min leestijd",
    content: `
<p>Background Music is een populaire gratis, open-source Mac-app die basisper-app volumecontrole biedt. Het probleem: het breekt. Regelmatig.</p>

<h2>Waarom Background Music blijft breken</h2>
<p>Background Music werkt door het installeren van een <strong>virtueel audioapparaatdriver</strong>. Apple verandert hoe audiodrivers werken bij bijna elke grote macOS-release.</p>

<h2>Alternatieven die geen virtuele audioapparaten gebruiken</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gebruikt de moderne Audio Tap API — geen virtueel audioapparaat, geen systeemdriver, geen kernel-extensies.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — een Background Music-alternatief dat geen virtuele audioapparaten installeert" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource-alternatief: lichtere, goedkopere per-app volumecontrole voor Mac",
    description: "SoundSource is krachtig maar duur en complex. Als je gewoon per-app volumecontrole wilt zonder de audio-engineeringtoolkit, is hier wat je in plaats daarvan kunt gebruiken.",
    date: "2026-06-06",
    readTime: "6 min leestijd",
    content: `
<p>SoundSource van Rogue Amoeba is de langst lopende per-app volumecontrole-app voor Mac. Het is ook $39, vereist een systeemaudiodriver (ACE) en heeft meer functies dan de meeste mensen ooit zullen gebruiken.</p>

<h2>SoundDial: gericht op wat de meeste mensen echt nodig hebben</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> doet het kernwerk perfect, slaat de functies over die de meeste mensen niet nodig hebben, en voegt de workflowfuncties toe die SoundSource mist.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — een lichter, gericht SoundSource-alternatief met volumeprofielen en auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial is beschikbaar in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — door Apple beoordeeld, gesandboxed. Eenmalige aankoop, geen abonnement.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac-volume te hard op de laagste instelling? Zo ga je nog zachter",
    description: "Zelfs op de laagste volumestreep is je Mac te hard — vooral laat op de avond met koptelefoon. Zo krijg je fijnere volumecontrole en ga je onder het minimum.",
    date: "2026-05-08",
    readTime: "5 min leestijd",
    content: `
<p>Het is middernacht. Je draagt een koptelefoon. Je drukt op de volume-omlaag-toets tot je op de laagste streep zit — één balkje. Het is nog steeds te hard. De volgende druk is dempen.</p>

<h2>Ingebouwde oplossing: kwart-stap volumeaanpassing</h2>
<p>Houd <strong>Option + Shift</strong> ingedrukt en druk op de volume omhoog/omlaag toetsen. 64 stappen in plaats van 16.</p>

<h2>De echte oplossing: per-app volume voor fijne controle</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft je per-app volumeschuiven met fijne controle — elke schuif beweegt in 1% stappen van 0% tot 200%.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fijnmazige per-app volumecontrole met 1% stappen op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Eén AirPod harder dan de andere? Elke oplossing uitgelegd",
    description: "De linker AirPod is zachter dan de rechter (of andersom). Hier is elke oorzaak — van oorsmeer tot macOS-balansinstellingen — en hoe je het oplost.",
    date: "2026-05-10",
    readTime: "5 min leestijd",
    content: `
<p>Eén AirPod klinkt prima. De andere is merkbaar zachter. De meest voorkomende oorzaak is fysiek: oorsmeer of vuil dat het speakergaas gedeeltelijk blokkeert.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>1. Maak je AirPods schoon</h2>
<p>Gebruik een droog, zachtharen borsteltje om voorzichtig het speakergaas te borstelen.</p>

<h2>2. Controleer de audiobalans in macOS</h2>
<p><strong>Systeeminstellingen → Toegankelijkheid → Audio</strong> — zorg dat de balanschuif precies gecentreerd is.</p>

<h2>3. Reset je AirPods</h2>
<p>Doe beide AirPods in het oplaaddoosje, sluit het deksel, wacht 30 seconden, open het deksel, houd de setup-knop 15 seconden ingedrukt.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix en streamingaudio te zacht op Mac? Zo los je het op",
    description: "Dialoog is fluisterzacht, dan schudt een explosie de kamer. Zo repareer je streaming-audioniveaus op Mac — en versterk je stille content voorbij 100%.",
    date: "2026-05-17",
    readTime: "5 min leestijd",
    content: `
<p>Je kijkt een film op Netflix. Twee personages voeren een gesprek — je kunt ze nauwelijks horen. Je zet het volume omhoog. Een actiescène begint. De explosies zijn oorverdovend.</p>

<h2>Oplossing 4: Versterk streamingaudio voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je elke app versterken tot <strong>200%</strong>. Als Safari of de Netflix-app te zacht is, sleep de schuif voorbij 100%.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Netflix-audio naar 180% op Mac voor helderder dialoog en streamingaudio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac-audio-setup voor thuiswerken: de complete gids",
    description: "Gesprekken, muziek, meldingen en focustijd — alles op één Mac. Zo stel je je audio in zodat niets om je aandacht vecht.",
    date: "2026-05-12",
    readTime: "8 min leestijd",
    content: `
<p>Thuiswerken op een Mac betekent dat je computer tegelijkertijd je kantoortelefoon, je radio, je meldingscentrum en je deep work-station is.</p>

<h2>De vier audiomodi van thuiswerken</h2>
<ul>
  <li><strong>Vergadermodus:</strong> Gesprek kristalhelder. Muziek stil. Slack niet pingen.</li>
  <li><strong>Focusmodus:</strong> Achtergrondmuziek op laag niveau. Meldingen nauwelijks waarneembaar.</li>
  <li><strong>Samenwerkingsmodus:</strong> Alles op gematigde niveaus.</li>
  <li><strong>Pauzemodus:</strong> Muziek op vol volume.</li>
</ul>

<h2>Het ontbrekende stuk: per-app volumecontrole</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vult dit gat door elke app een eigen volumeschuif te geven.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial thuiswerk audio-setup — verschillende volumeniveaus voor Zoom, Spotify en Slack op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Browsertabs stoppen met automatisch audio afspelen op Mac",
    description: "Een achtergrondtab begint uit het niets geluid af te spelen. Advertenties, video's, nieuwssites — zo demp je ongewenste tabs en beheer je browseraudio op macOS.",
    date: "2026-05-14",
    readTime: "5 min leestijd",
    content: `
<p>Je hebt twintig tabs open. Je werkt in één ervan. Plotseling — audio begint te spelen van ergens. Een videoadvertentie. Een auto-afspelend nieuwsclip.</p>

<h2>Schakel autoplay uit in Safari</h2>
<p>Safari → Instellingen (⌘,) → Websites-tab → "Auto-Play" → "Nooit automatisch afspelen".</p>

<h2>Het bredere probleem: browseraudio vs. al het andere</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft je browser een eigen volumeschuif, onafhankelijk van elke andere app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial regelt browservolume onafhankelijk van andere apps op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Discord-volume te hard (of te zacht) op Mac? Zo los je het op",
    description: "Discord knalt over je game, of is te zacht om teamgenoten te horen. Zo regel je Discord's volume onafhankelijk van al het andere op macOS.",
    date: "2026-05-21",
    readTime: "5 min leestijd",
    content: `
<p>Discord heeft twee volumeproblemen op Mac. Ofwel het is te hard — meldingsgeluiden knallen over je game en muziek — ofwel het is te zacht.</p>

<h2>Los het op met SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft Discord een eigen volumeschuif in je menubalk, onafhankelijk van elke andere app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial regelt Discord-volume onafhankelijk van game en muziek op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gangbare setups</h3>
<p><strong>Gamen met Discord:</strong></p>
<ul>
  <li>Discord: 100% | Game: 40% | Spotify: 15%</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Snel van audio-uitvoer wisselen op Mac (zonder door instellingen te graven)",
    description: "Wisselen tussen speakers, koptelefoon en monitoren op Mac kost te veel klikken. Hier zijn snellere manieren om direct je audio-uitvoerapparaat te wijzigen.",
    date: "2026-05-19",
    readTime: "5 min leestijd",
    content: `
<p>Je haalt je koptelefoon eruit en wilt dat audio naar je speakers gaat. Elke keer is het: Systeeminstellingen → Geluid → Uitvoer → scrollen → klikken. Te veel klikken.</p>

<h2>Methode 1: Option-klik op het volume-icoon</h2>
<p>Houd <strong>Option (⌥)</strong> ingedrukt en klik op het volume/geluid-icoon in je menubalk. Je krijgt een lijst van alle beschikbare uitvoerapparaten.</p>

<h2>Methode 5: SoundDial's ingebouwde apparaatwisselaar</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> bevat een uitvoerapparaatkiezer recht in zijn menubalkpopover — naast je per-app volumeschuiven.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial met audio-uitvoerapparaat wisselen en per-app volumecontrole in één menubalkpaneel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Audiogekraak en -geknetter op Mac oplossen: complete gids",
    description: "Je Mac-audio kraakt, knettert of stottert — tijdens muziek, gesprekken of video. Hier is elke bekende oorzaak en oplossing voor macOS-audioglitches.",
    date: "2026-05-16",
    readTime: "8 min leestijd",
    content: `
<p>Je luistert naar muziek en hoort een knal. Dan een kraak. Dan een stotter waar de audio een fractie van een seconde wegvalt en terugkomt.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>1. Herstart Core Audio (de snelle oplossing)</h2>
<p><code>sudo killall coreaudiod</code></p>

<h2>2. CPU-overbelasting</h2>
<p>Wanneer de CPU van je Mac maximaal belast is, kan het audiobuffers niet snel genoeg verwerken.</p>

<h2>3. Bluetooth-audioproblemen</h2>
<p>Interferentie, codecwisseling en Bluetooth-congestie kunnen gekraak veroorzaken.</p>

<h2>Audiokwaliteit beheren met SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> kan helpen door apps te dempen die je niet actief gebruikt, waardoor de CPU-druk op audioverwerking afneemt.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Microsoft Teams-volume te laag op Mac? Elke oplossing die werkt",
    description: "Kun je mensen op Teams nauwelijks horen zelfs op maximaal volume? Hier is elke oorzaak — van Teams-instellingen tot Bluetooth-codecs — en hoe je gespreksaudio voorbij 100% versterkt.",
    date: "2026-06-04",
    readTime: "7 min leestijd",
    content: `
<p>Je bent in een Teams-vergadering. Je collega presenteert, maar de stem klinkt alsof die door een blikje komt van drie kamers verderop. Je Mac-volume staat op 100%. Teams' volume staat op 100%. Nog steeds te zacht.</p>

<h2>Versterk Teams-volume voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je het volume van elke app versterken tot <strong>200%</strong>, inclusief Microsoft Teams.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Microsoft Teams-gespreksvolume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Per-app volume regelen op Mac",
    description: "macOS geeft je één volumeschuif voor alles. Zo krijg je individuele volumeregelingen voor elke app — en waarom het belangrijker is dan je denkt.",
    date: "2026-05-20",
    readTime: "7 min leestijd",
    content: `
<p>Je zit in een videogesprek. Slack pingt voortdurend. Muziek speelt op de achtergrond. Je grijpt naar de volumetoets en — alles wordt zachter. macOS heeft precies één volumeschuif, en die bestuurt alles tegelijk.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Windows heeft sinds Vista in 2006 een per-app volumemixer gehad. Twintig jaar later heeft macOS het nog steeds niet.</p>

<h2>SoundDial</h2>

<p>Ik heb <strong>SoundDial</strong> gebouwd omdat de Mac-volumemixer die ik wilde niet bestond. Het zit in je menubalk, toont elke app die geluid maakt, en geeft elk een eigen schuif. Per-app dempen, volumeversterking, profielen en auto-ducking die je muziek verlaagt wanneer een gesprek begint. Eenmalige aankoop, macOS 14+, geen abonnement.</p>

<p>De volumemixer die macOS had moeten hebben.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Slack dempen op Mac zonder al het andere te dempen",
    description: "Slack-meldingen blijven je focus verstoren, maar je wilt je muziek of gesprekken niet stilleggen. Zo demp je alleen Slack op macOS.",
    date: "2026-05-24",
    readTime: "5 min leestijd",
    content: `
<p>Je zit diep in focuswerk. Spotify speelt de perfecte concentratieplaylist. Dan — <em>knock brush</em> — Slack pingt. En weer. En weer.</p>

<h2>Optie 4: Per-app volumecontrole (de echte oplossing)</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft Slack een eigen onafhankelijke volumeschuif. Zet het op het niveau dat voor jou werkt — of demp het volledig met één klik.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial met Slack gedempt en Spotify spelend op normaal volume op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Volumeprofielen instellen voor verschillende situaties op Mac",
    description: "Verschillende volumesetups voor vergaderingen, focuswerk, gamen en relaxen — schakelbaar met één klik. Zo werken volumeprofielen op macOS.",
    date: "2026-06-02",
    readTime: "5 min leestijd",
    content: `
<p>Om 9 uur zit je in een Zoom-gesprek — je wilt Zoom op 100%, Spotify gedempt, Slack gedempt. Om 10 uur is het gesprek afgelopen — je wilt Spotify op 40%, Slack op 15%. Om 12 uur game je — game op 60%, Discord op 100%, al het andere gedempt.</p>

<h2>Profielen instellen met SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> bevat een ingebouwd profielsysteem.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volumeprofielen — met één klik schakelen tussen Vergadering, Focus en Chill-modus op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Voorbeeldprofielen</h3>
<p><strong>Vergadering:</strong> Zoom/Teams: 100%, Spotify: gedempt, Slack: gedempt</p>
<p><strong>Focuswerk:</strong> Spotify: 35%, Slack: 10%, Browser: 50%</p>
<p><strong>Gaming:</strong> Game: 60%, Discord: 100%, Spotify: 20%</p>
<p><strong>Chill:</strong> Spotify: 70%, Browser: 60%, Meldingen: 20%</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Zoom-gespreksvolume te laag op Mac? Zo versterk je het",
    description: "Je kunt mensen op Zoom nauwelijks horen zelfs op maximaal volume. Hier is elke oplossing — van Zoom-instellingen tot het versterken van gespreksaudio voorbij 100%.",
    date: "2026-05-26",
    readTime: "6 min leestijd",
    content: `
<p>Je zit in een Zoom-gesprek. De andere persoon praat, maar hun stem is nauwelijks hoorbaar. Je Mac-volume staat op maximum. Zoom's speakervolume staat op maximum.</p>

<h2>Versterk Zoom's volume voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je het volume van elke app versterken tot <strong>200%</strong> — inclusief Zoom.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Zoom-gespreksvolume naar 180% op Mac voor helderder audio tijdens videogesprekken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Spotify zachter zetten zonder al het andere zachter te zetten op Mac",
    description: "Je wilt Spotify als achtergrondmuziek, maar zachter zetten met de volumetoetsen maakt je gesprek en al het andere ook zachter. Hier is de oplossing.",
    date: "2026-05-30",
    readTime: "4 min leestijd",
    content: `
<p>Je werkt. Spotify speelt achtergrondmuziek. Het is een beetje te hard. Je tikt op de volume-omlaag-toets. Spotify wordt zachter. Maar je Zoom-gesprek, meldingsgeluiden en browseraudio ook. Dat was niet de bedoeling.</p>

<h2>De echte oplossing: per-app volumecontrole</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> plaatst een volumeschuif voor elke app in je menubalk.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial verlaagt Spotify-volume onafhankelijk terwijl andere apps op vol volume blijven op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Eenmalige aankoop in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Geen abonnement. macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Heeft macOS Tahoe per-app volumecontrole?",
    description: "macOS Tahoe (macOS 26) bracht grote updates, maar heeft Apple eindelijk een volumemixer toegevoegd? Hier is het antwoord — en hoe je nu per-app volumecontrole krijgt.",
    date: "2026-06-12",
    readTime: "4 min leestijd",
    content: `
<p>Elk jaar hopen Mac-gebruikers dat de volgende macOS-release eindelijk een volumemixer zal bevatten. Elk jaar worden ze teleurgesteld.</p>

<h2>Het korte antwoord: nee</h2>
<p>macOS Tahoe bevat geen ingebouwde volumemixer. Er is geen per-app volumecontrole in Systeeminstellingen, Bedieningspaneel of de menubalk.</p>

<h2>Hoe je per-app volumecontrole krijgt op macOS Tahoe</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is een native macOS menubalk-app die je een volumemixer geeft.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial biedt per-app volumecontrole op macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Eenmalige aankoop in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Geen abonnement. macOS 14.2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Muziek op speakers afspelen terwijl je belt via koptelefoon (Mac)",
    description: "Wil je Spotify op je bureauspeakers en Zoom in je AirPods tegelijk? macOS maakt dit niet eenvoudig — hier is wat echt werkt.",
    date: "2026-05-15",
    readTime: "5 min leestijd",
    content: `
<p>Hier is iets redelijks dat je zou willen doen: muziek afspelen via je bureauspeakers terwijl je een Zoom-gesprek voert via je AirPods. macOS zegt nee.</p>

<h2>Een eenvoudigere aanpak: scheiding op basis van volume</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft elke app een eigen volumeschuif. Tijdens een gesprek kun je Zoom op <strong>100%</strong> zetten en Spotify op <strong>20%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial toont Zoom op vol volume en Spotify verlaagd tijdens een gesprek op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac-volume verandert vanzelf: zo los je het op",
    description: "Het volume van je Mac springt willekeurig omhoog, zakt omlaag of reset naar een ander niveau. Hier is elke bekende oorzaak en hoe je het stopt.",
    date: "2026-05-18",
    readTime: "6 min leestijd",
    content: `
<p>Je stelt je Mac-volume in op een comfortabel niveau. Je kijkt weg. Als je terugkomt, is het anders. Harder. Zachter. Gereset naar maximum.</p>

<h2>1. Bluetooth-apparaat herverbinding</h2>
<p>Dit is de meest voorkomende oorzaak. Wanneer een Bluetooth-apparaat verbindt of loskoppelt, reset macOS het volume.</p>

<h2>Vergrendel je per-app volumes met SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> onthoudt het volumeniveau van elke app onafhankelijk.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial onthoudt per-app volumeniveaus bij herstarts op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Beste volumemixer-apps voor Mac in 2026",
    description: "Een nuchtere vergelijking van elke Mac-app die je per-app volumecontrole geeft. Functies, prijzen en welke echt de moeite waard is.",
    date: "2026-06-12",
    readTime: "10 min leestijd",
    content: `
<p>macOS heeft geen ingebouwde volumemixer. Als je het volume van individuele apps wilt regelen, heb je een app van derden nodig.</p>

<h2>De opties</h2>

<h3>SoundDial</h3>
<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is een native macOS menubalk-app gericht op per-app volumecontrole. €14,99 eenmalig, geen abonnement. Bevat profielen en auto-ducking die zelfs duurdere alternatieven niet hebben.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial per-app volumemixer toont individuele app-volumeschuiven op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>SoundSource (Rogue Amoeba)</h3>
<p>$39 USD, krachtig maar complex, vereist systeemaudiodriver, geen profielen, geen auto-ducking.</p>

<h3>Background Music (Gratis, Open Source)</h3>
<p>Gratis maar breekt regelmatig bij macOS-updates. Geen volumeversterking, geen profielen, geen auto-ducking.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube te zacht in Safari of Chrome op Mac? Direct oplossen",
    description: "Sommige YouTube-video's zijn nauwelijks hoorbaar zelfs op maximaal volume. Hier is waarom browseraudio vaak zachter is dan andere apps — en hoe je het voorbij 100% versterkt op Mac.",
    date: "2026-05-22",
    readTime: "5 min leestijd",
    content: `
<p>Je klikt op een YouTube-video. De maker spreekt, maar je kunt ze nauwelijks horen. Systeemvolume staat op max. YouTube's spelervolume staat op max. Je opent Spotify — muziek knalt op vol volume. Het zijn dus niet je speakers. Het is YouTube.</p>

<h2>De echte oplossing: versterk browservolume voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft elke app — inclusief Safari en Chrome — een onafhankelijke volumeschuif die gaat van 0% tot <strong>200%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Safari-browservolume naar 180% voor stille YouTube-video's op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac-meldingsgeluiden te hard in koptelefoon? Hier is de oplossing",
    description: "Slack-pings en macOS-waarschuwingen zijn pijnlijk hard in je koptelefoon terwijl je muziek prima is. Hier is waarom meldingsvolume anders is — en hoe je het temt.",
    date: "2026-05-25",
    readTime: "5 min leestijd",
    content: `
<p>Je draagt een koptelefoon, luistert naar muziek op een comfortabele 40% volume. Een Slack-melding gaat af. <em>DING.</em> Het is oorverdovend vergeleken met je muziek.</p>

<h2>De echte oplossing: meldingsapp-volume onafhankelijk regelen</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> doet dit. Het geeft elke app een eigen volumeschuif, zodat je meldingsapps op een veel lager volume kunt zetten.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial toont Slack op laag volume en Spotify op normaal volume — onafhankelijke meldingscontrole op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Zoom stoppen met je muziek zachter te zetten op Mac",
    description: "Elke keer als je een Zoom-gesprek begint, verdwijnt je muziek of zakt het tot bijna niets. Hier is waarom het gebeurt en hoe je controleert wat zachter wordt tijdens gesprekken — op jouw voorwaarden.",
    date: "2026-05-28",
    readTime: "6 min leestijd",
    content: `
<p>Je gaat in een Zoom-gesprek. Spotify speelde op een comfortabel volume. Het gesprek verbindt en — je muziek verdwijnt of zakt naar bijna niets.</p>

<h2>De echte oplossing: auto-ducking op jouw voorwaarden</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft je precies dit. De auto-duckingfunctie monitort je microfoon en past automatisch achtergrondaudio aan — maar <strong>jij bepaalt het duckniveau</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial auto-ducking instellingen — configureerbare volumeverlaging tijdens Zoom-gesprekken op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "AirPods-volume te laag op Mac? Elke oplossing uitgelegd",
    description: "AirPods klinken zacht op je Mac zelfs op vol volume? Hier zijn alle oorzaken — van koptelefoonveiligheidslimieten tot Bluetooth-eigenaardigheden — en hoe je ze oplost.",
    date: "2026-06-08",
    readTime: "7 min leestijd",
    content: `
<p>Je AirPods werken prima op je iPhone. Ze zijn luid genoeg. Maar verbind ze met je Mac en plotseling is alles te zacht.</p>

<h2>1. Koptelefoonveiligheid beperkt je volume</h2>
<p>Ga naar <strong>Systeeminstellingen → Geluid → Koptelefoonveiligheid</strong>. Als "Verminder hard geluid" is ingeschakeld, schakel het uit.</p>

<h2>Nog steeds te zacht? Versterk AirPods-volume voorbij 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je het volume van elke app versterken tot <strong>200%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt app-volume voor AirPods op Mac met per-app volumeschuiven tot 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Spotify-volume te laag op Mac? Hier is elke oplossing",
    description: "Spotify op maximaal volume maar nog steeds te zacht op je Mac? Deze gids behandelt elke oorzaak — van Spotify's ingebouwde limiter tot macOS-instellingen — en hoe je het voorbij 100% versterkt.",
    date: "2026-06-11",
    readTime: "7 min leestijd",
    content: `
<p>Spotify staat op vol volume. Je Mac staat op vol volume. En het is nog steeds niet hard genoeg.</p>

<h2>Controleer Spotify's volumecorrectie</h2>
<p>Spotify heeft een functie genaamd <strong>Volumecorrectie</strong>. Spotify → Instellingen → Afspelen → <strong>Volume normaliseren</strong>. Als Spotify te zacht klinkt, schakel normalisatie uit of zet het op "Luid."</p>

<h2>Versterk Spotify voorbij 100% met SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> laat je het volume van elke app versterken tot <strong>200%</strong> — inclusief Spotify.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial versterkt Spotify-volume naar 200% op macOS terwijl andere apps op normaal volume blijven" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Gamegeluid scheiden van Discord op Mac",
    description: "Game-explosies overstemmen je teamgenoten op Discord? Zo regel je gamegeluid en voicechat-volume onafhankelijk op macOS.",
    date: "2026-06-10",
    readTime: "6 min leestijd",
    content: `
<p>Je gamet op je Mac. Een explosie gaat af in-game. Je Discord-teamgenoten praten, maar je kunt ze niet horen boven het geweer- vuur. Op Windows zou je de volumemixer openen. Op Mac kan dat niet.</p>

<h2>De echte oplossing: per-app volumecontrole</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> zit in je menubalk en geeft elke app een eigen volumeschuif.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial toont onafhankelijke volumeschuiven voor een game en Discord op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Typische gaming-setup</h3>
<ul>
  <li><strong>Game</strong> — 30-50%</li>
  <li><strong>Discord / voicechat</strong> — 90-100%</li>
  <li><strong>Spotify / muziek</strong> — 15-25%</li>
  <li><strong>Browser</strong> — gedempt</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Waarom heeft Mac geen volumemixer zoals Windows?",
    description: "Windows heeft per-app volumecontrole gehad sinds 2006. Het is 2026 en macOS heeft het nog steeds niet. Hier is de echte reden — en hoe je er toch een krijgt.",
    date: "2026-06-09",
    readTime: "6 min leestijd",
    content: `
<p>Elke versie van Windows sinds Vista (2006) bevat een volumemixer. Op macOS? Eén schuif. Dat is alles wat je krijgt. Twintig jaar Mac-updates en Apple heeft nooit per-app volumecontrole toegevoegd.</p>

<h2>Het is geen technische beperking</h2>
<p>macOS kan absoluut per-app volumecontrole aan. Het onderliggende audioframework — <strong>Core Audio</strong> — ondersteunt per-proces audio-tapping op API-niveau.</p>

<h2>Hoe je nu een volumemixer op Mac krijgt</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is een native macOS menubalk-app die je precies geeft wat Apple niet wil — onafhankelijke volumecontrole voor elke app op je Mac.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — de volumemixer voor macOS, toont per-app volumeschuiven in de menubalk" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Het is de functie die Apple twintig jaar geleden had moeten bouwen. Eenmalige aankoop in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Geen abonnement. macOS 14.2+.</p>

<p>De volumemixer die macOS had moeten hebben.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac-volume te laag? Zo versterk je geluid voorbij 100%",
    description: "Je Mac staat op vol volume en het is nog steeds te zacht. Hier is waarom dat gebeurt en hoe je audio tot 200% versterkt zonder externe speakers.",
    date: "2026-06-07",
    readTime: "8 min leestijd",
    content: `
<p>Je Mac-volume staat op 100%. De schuif staat helemaal naar rechts. En het is nog steeds niet hard genoeg.</p>

<h2>Hoe je volume voorbij 100% versterkt</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> geeft elke app op je Mac een onafhankelijke volumeschuif die gaat van 0% tot <strong>200%</strong>. Als een specifieke app te zacht is, kun je alleen die app voorbij 100% versterken.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volumeversterking — per-app volumecontrole met 200% versterking op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Eenmalige aankoop in de <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Geen abonnement. macOS 14.2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Muziek automatisch zachter zetten tijdens Zoom-gesprekken op Mac",
    description: "Elke keer als een Zoom-gesprek begint, grijp je naar Spotify om te pauzeren. Er is een betere manier — auto-ducking verlaagt je muziek automatisch wanneer je microfoon actief wordt.",
    date: "2026-06-05",
    readTime: "7 min leestijd",
    content: `
<p>Het gesprek begint. Je deelt je scherm. Je muziek staat nog steeds vol. Je schakelt in paniek naar Spotify, drukt op pauze, schakelt terug naar Zoom — maar iedereen heeft al tien seconden van je playlist gehoord.</p>

<h2>Wat is audio-ducking?</h2>
<p><strong>Audio-ducking</strong> betekent het automatisch verlagen van het volume van achtergrondaudio wanneer iets belangrijkers gebeurt — zoals een gesprek.</p>

<h2>Auto-ducking met SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> heeft een ingebouwde auto-duckingfunctie. Het monitort de microfoonstatus van je Mac. Wanneer het detecteert dat een communicatie-app je microfoon heeft geactiveerd, weet het dat een gesprek is begonnen.</p>

<p>Werkt met Zoom, Microsoft Teams, FaceTime, Discord, Slack, Google Meet, Cisco Webex en Skype.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial auto-duckingfunctie verlaagt automatisch muziekvolume tijdens een Zoom-gesprek op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Setup in minder dan een minuut</h2>
<ol>
  <li>Installeer <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial vanuit de Mac App Store</a></li>
  <li>Open Instellingen → Auto-Duck-tab</li>
  <li>Schakel auto-ducking in</li>
  <li>Pas de duckniveau-schuif aan naar je voorkeur</li>
</ol>

<p>Eenmalige aankoop, geen abonnement.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Eén app dempen op Mac zonder alles te dempen",
    description: "Slack pingt. Je zit in een gesprek. Je wilt Slack dempen maar je gesprek blijven horen. macOS laat het niet toe — hier is hoe je het toch doet.",
    date: "2026-06-03",
    readTime: "6 min leestijd",
    content: `
<p>Je zit in een Zoom-gesprek. Slack maakt voortdurend meldingsgeluiden. Een YouTube-tab die je vergeten was begint automatisch af te spelen. Je drukt op de demptoets — en nu kun je je gesprek ook niet meer horen. macOS dempt <em>alles</em>.</p>

<h2>De echte oplossing: een per-app dempknop</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> zit in je menubalk en toont elke draaiende app met een eigen volumeschuif en dempknop.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial toont per-app dempknoppen voor elke applicatie in de macOS-menubalk" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Om één app te dempen:</p>
<ol>
  <li>Klik op het SoundDial-icoon in je menubalk</li>
  <li>Zoek de app die je wilt dempen</li>
  <li>Klik op het luidsprekericoon ernaast</li>
</ol>

<p>Klaar. De app is gedempt. Al het andere blijft spelen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a> — €14,99 eenmalige aankoop, geen abonnement, macOS 14.2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Volumemixer voor Mac: de ontbrekende functie die macOS nog steeds niet heeft",
    description: "Windows heeft een volumemixer gehad sinds 2006. Hier is waarom macOS het nog steeds niet heeft — en de beste manier om per-app volumecontrole op je Mac te krijgen in 2026.",
    date: "2026-06-01",
    readTime: "9 min leestijd",
    content: `
<p>Rechtsklik op het luidsprekericoon op een Windows-pc en je vindt de Volumemixer — een paneel dat elke applicatie toont die geluid maakt, elk met een eigen onafhankelijke volumeschuif. Het bestaat al sinds Windows Vista in 2006.</p>

<p>Doe nu hetzelfde op een Mac. Klik op het geluidicoon in de menubalk. Je krijgt één schuif. Dat is alles. Eén schuif die alles tegelijk bestuurt.</p>

<h2>SoundDial: de volumemixer die macOS had moeten hebben</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is een native macOS menubalk-app die je precies geeft wat Apple niet wil — onafhankelijke volumecontrole voor elke app op je Mac.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volumemixer voor macOS toont individuele app-volumeschuiven in de menubalk" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Kernfuncties:</p>
<ul>
  <li><strong>Per-app volumeschuiven</strong> — 0% tot 200% bereik voor elke draaiende app</li>
  <li><strong>Eén-klik dempen</strong> — demp elke app zonder de schuif te verplaatsen</li>
  <li><strong>Volumeprofielen</strong> — sla configuraties op en wissel daartussen</li>
  <li><strong>Auto-ducking</strong> — muziek wordt automatisch zachter tijdens gesprekken</li>
  <li><strong>Sneltoetsen</strong> — schakel de mixer of demp alles met een hotkey</li>
  <li><strong>Uitvoerapparaat wisselen</strong> — wissel van speakers/koptelefoon vanuit hetzelfde paneel</li>
  <li><strong>Volumegeheugen</strong> — onthoudt het volume van elke app tussen herstarts</li>
</ul>

<p>Eenmalige aankoop. Geen abonnement. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Download SoundDial in de Mac App Store</a>.</p>
`,
  },
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "Het beste alternatief voor Background Music op Mac (2026)",
    description: "Werkt Background Music niet meer op nieuwere macOS-versies? Het meest betrouwbare alternatief als per-app volumemixer is SoundDial — een gesandboxte Mac App Store-app met boost en profielen.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Als Background Music na een macOS-update niet meer werkt, is het meest betrouwbare alternatief <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — een per-app volumemixer in de menubalk uit de Mac App Store. Het geeft elke app zijn eigen volumeschuif, voegt dempen, boost, volumeprofielen en automatisch ducken toe, en is volledig gesandboxt en door Apple gecontroleerd, dus er zijn geen audiodrivers die bij de volgende macOS-release kapot kunnen gaan.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Het beste alternatief voor Background Music op Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom Background Music kapotgaat op nieuwere macOS</h2>

<p>Background Music is een oprecht slim, gratis, opensource-project. Het gaf Mac-gebruikers iets wat Apple nooit heeft geboden: een per-app volumemixer, het soort dat Windows al jaren heeft. Maar het ontwerp is ook de reden dat het blijft haperen.</p>

<p>Om audio te routeren en te regelen installeert Background Music een virtueel audioapparaat — een driver op systeemniveau die het geluid van je Mac onderschept. Die aanpak werkte prima op oudere macOS, maar elke grote release scherpt de beveiliging rond kernel- en audio-extensies aan. De klachten die gebruikers vaak melden:</p>

<ul>
<li>Helemaal geen geluid na de installatie of na een OS-update.</li>
<li>Het virtuele apparaat laadt niet, waardoor de audiorouting stilletjes stopt.</li>
<li>De app moet opnieuw worden geïnstalleerd, de Mac moet opnieuw opstarten, of de driver moet handmatig worden verwijderd om te herstellen.</li>
<li>De ontwikkeling is community-gedreven en verloopt op vrijwilligerstempo, dus fixes voor een nieuwe macOS kunnen achterlopen.</li>
</ul>

<p>Niets hiervan maakt Background Music "slecht". Het betekent alleen dat een gratis, driver-gebaseerd hulpmiddel van nature kwetsbaar is, en als je elke dag op per-app volume vertrouwt, gaat die kwetsbaarheid al snel vervelen.</p>

<h2>Waar je op moet letten bij een vervanger</h2>

<p>Voordat je een alternatief kiest, bepaal wat je echt nodig hebt:</p>

<ul>
<li><strong>Betrouwbaarheid bij macOS-updates.</strong> Als het een kernel- of audio-extensie installeert, verwacht dan af en toe storingen.</li>
<li><strong>Echte per-app controle.</strong> Onafhankelijk volume en dempen voor elke app is het minimum.</li>
<li><strong>Boost.</strong> Sommige apps (stille vergadertools, bepaalde browsers) zijn simpelweg te stil — je wilt boven de 100% kunnen komen.</li>
<li><strong>Handige functies.</strong> Profielen en automatisch ducken zijn wat een hulpprogramma verandert in iets wat je de hele dag open laat staan.</li>
<li><strong>Veilige installatie.</strong> Een gesandboxte Mac App Store-app kan niet aan de systeemkern komen, dus verwijderen gaat schoon en updates zijn automatisch.</li>
</ul>

<h2>Waarom SoundDial de betrouwbare keuze is</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is gebouwd om precies het probleem op te lossen waar Background Music-gebruikers tegenaan lopen: ze willen per-app volume, maar geen driver in de gaten hoeven houden. Het leeft in je menubalk en doet de kerntaak goed:</p>

<ul>
<li><strong>Onafhankelijk volume voor elke app</strong>, met per-app dempen in hetzelfde paneel.</li>
<li><strong>Per-app boost</strong> om stille apps luid genoeg te maken om echt te horen.</li>
<li><strong>Volumeprofielen</strong> — sla een mix op (bijvoorbeeld "vergadering" of "gamen") en schakel direct in plaats van elke keer schuifjes te verslepen.</li>
<li><strong>Automatisch ducken</strong>, zodat achtergrondgeluid automatisch zakt wanneer dat moet.</li>
<li><strong>Snel wisselen van uitvoer</strong> tussen luidsprekers, koptelefoon en andere apparaten.</li>
</ul>

<p>Het grotere verschil zit in hoe het wordt geïnstalleerd. SoundDial wordt geleverd via de Mac App Store, wat betekent dat het door Apple is gecontroleerd en gesandboxt. Er is geen DMG om te verslepen, geen audiodriver of systeemextensie, en geen kerneltoegang. Dat is de belangrijkste reden dat het niet kapotgaat zoals Background Music wanneer er een nieuwe macOS verschijnt — het is niet verweven met de delen van het systeem die Apple steeds verder vergrendelt.</p>

<p>Het kost <strong>eenmalig €14,99</strong>. Niet gratis, maar er is geen abonnement, en je betaalt voor iets dat onderhouden en veilig te installeren is.</p>

<h2>SoundDial vs. Background Music vs. de gratis tools</h2>

<p>Background Music is niet je enige gratis optie, dus hier is een eerlijk overzicht van het landschap:</p>

<ul>
<li><strong>Background Music (gratis, opensource):</strong> per-app volume, maar driver-gebaseerd, gevoelig voor storingen op nieuwere macOS, en het mist boost, profielen en automatisch ducken.</li>
<li><strong>FineTune (gratis, opensource):</strong> een lichte per-app volume-app in de menubalk. Prima als gratis je enige eis is, maar mager op de extra's.</li>
<li><strong>eqMac (gratis):</strong> voornamelijk een systeem-EQ en booster, geen echte per-app mixer.</li>
<li><strong>SoundSource van Rogue Amoeba (~$39):</strong> de professionele optie, met per-app EQ en volledige uitvoerrouting. Uitstekend, maar meer dan twee keer zo duur als SoundDial en het vereist nog steeds een download plus een audio-capture driver.</li>
<li><strong>SoundDial (€14,99, Mac App Store):</strong> de gulden middenweg — echt per-app volume, dempen, boost, profielen en ducken, geleverd als een schone gesandboxte installatie zonder drivers.</li>
</ul>

<p>Als je per-app EQ of complexe studiorouting nodig hebt, is SoundSource het extra geld waard. Als je een gratis knutseltool wilt en af en toe een storing kunt verdragen, volstaan FineTune of Background Music. Maar als je doel is "geef elke app zijn eigen volume en stop dat het bij elke macOS-update kapotgaat," raakt SoundDial dat doel met de minste moeite.</p>

<h2>De macOS-context die dit noodzakelijk maakt</h2>

<p>Het is de moeite waard om het onomwonden te zeggen: macOS heeft geen ingebouwde per-app volumemixer. Windows heeft er al jaren een in de volumeflyout, maar op een Mac regelt de systeemschuif alles tegelijk. Dat gat is de hele reden dat tools als Background Music en SoundDial bestaan. Omdat Apple het niet opvult, is de praktische vraag simpelweg welke aanpak van derden je vertrouwt — een gratis driver die het OS tegenwerkt, of een gesandboxte app die ermee samenwerkt.</p>

<p>Klaar om te stoppen met vechten tegen kapotte audiodrivers? Haal <a href="https://apps.apple.com/app/id6772792641">SoundDial in de Mac App Store</a> voor €14,99 en regel het volume van elke app op de betrouwbare manier.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial: welke Mac-volume-app wint?",
    description: "SoundSource ($39, professioneel) vs SoundDial (€14,99, App Store). Vergelijk per-app volume, boost, profielen en automatisch ducken om de juiste Mac-mixer te kiezen.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Als je gewoon per-app volumeregeling wilt die schoon installeert en minder kost, is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> voor de meeste mensen de betere keuze: eenmalig €14,99, uit de Mac App Store, met per-app volume, dempen, boost, profielen en automatisch ducken. Kies SoundSource van Rogue Amoeba (~$39) alleen als je specifiek per-app EQ en geavanceerde uitvoerrouting nodig hebt.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial: welke Mac-volume-app wint?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>De korte versie</h2>
<p>macOS heeft nog steeds geen ingebouwde per-app volumemixer. Windows heeft er al jaren een, maar op een Mac verplaatst de systeemvolumeschuif alles tegelijk. Zowel SoundSource als SoundDial bestaan om dat gat te dichten. Ze richten zich alleen op verschillende kopers.</p>
<ul>
<li><strong>SoundDial</strong> — eenmalig €14,99, Mac App Store, menubalk-app. Onafhankelijk volume per app, per-app dempen, per-app boost, opgeslagen profielen, automatisch ducken en snel wisselen van uitvoer. Gesandboxt en door Apple gecontroleerd, dus geen driver-installatie.</li>
<li><strong>SoundSource</strong> — ~$39, directe download van Rogue Amoeba. Alles hierboven plus per-app EQ, geavanceerde uitvoerrouting en audio-effecten. Vereist dat er een kleine audio-capture driver wordt geïnstalleerd.</li>
</ul>

<h2>Prijs en hoe je het koopt</h2>
<p>Dit is de duidelijkste scheiding. SoundSource kost ongeveer $39 en wordt rechtstreeks door Rogue Amoeba verkocht. SoundDial is €14,99 als eenmalige aankoop in de Mac App Store — iets meer dan een derde van de prijs.</p>
<p>Omdat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> via de App Store wordt geleverd, is het gesandboxt, genotariseerd en door Apple gecontroleerd. Je klikt op Download, het installeert, en klaar. Er is geen DMG om te mounten, geen rechten om te verlenen aan een kernel-nabij onderdeel, en geen audiodriver of systeemextensie. Het rijdt ook mee op je normale App Store-updatestroom en synct naar je andere Macs met dezelfde Apple ID.</p>
<p>SoundSource wordt buiten de App Store gedownload en installeert een audio-capture driver zodat het de audio van elke app kan onderscheppen en verwerken. Dat is wat de professionele functies ontsluit, maar het betekent ook een extra installatiestap en een onderdeel dat dieper in het systeem leeft.</p>

<h2>Wat SoundSource doet dat SoundDial niet doet</h2>
<p>SoundSource verdient zijn prijs voor een specifiek soort gebruiker. Als een van deze op jou van toepassing is, is het extra geld waard:</p>
<ul>
<li><strong>Per-app EQ.</strong> Je wilt bijvoorbeeld een 10-bands equalizer op Spotify terwijl Zoom vlak blijft. SoundDial doet volume, geen EQ.</li>
<li><strong>Geavanceerde uitvoerrouting.</strong> Eén app naar je luidsprekers sturen en een andere naar de koptelefoon of een specifieke interface, met nauwkeurige controle.</li>
<li><strong>Audio-effecten en plug-ins.</strong> SoundSource kan effecten per app hosten — echt professioneel terrein.</li>
</ul>
<p>Rogue Amoeba heeft een lange, vertrouwde staat van dienst. SoundSource is een serieuze tool en heeft ook een serieuze prijs. Als je een audioprofessional bent of veel met meerdere uitvoerkanalen werkt, is het de juiste keuze.</p>

<h2>Wat SoundDial beter doet voor dagelijks gebruik</h2>
<p>De meeste mensen die zoeken naar een "Mac-volumemixer" hebben geen EQ nodig. Ze hebben de ene app zachter nodig dan de andere, en ze willen niet met een installer vechten om het voor elkaar te krijgen. SoundDial dekt dat netjes af, en voegt een paar dingen toe die het vermelden waard zijn:</p>
<ul>
<li><strong>Per-app boost.</strong> Sommige apps en video's zijn gewoon te stil, zelfs op 100%. SoundDial kan één app boven zijn normale plafond duwen zodat een stille vergadering of podcast eindelijk hoorbaar is.</li>
<li><strong>Volumeprofielen.</strong> Sla een volledige opstelling op — muziek laag, browser gedempt, gesprek-app luid — en roep die direct op. Ideaal om te wisselen tussen "focus", "vergadering" en "gamen" zonder vijf schuifjes te verslepen.</li>
<li><strong>Automatisch ducken.</strong> Verlaag automatisch achtergrondgeluid (zoals muziek) wanneer een andere bron start, zodat meldingen, gesprekken of video niet ondergesneeuwd raken.</li>
<li><strong>Snel wisselen van uitvoer.</strong> Spring tussen luidsprekers, koptelefoon en andere apparaten vanuit de menubalk.</li>
</ul>
<p>Dat alles draait vanuit een menubalk-dropdown, dus het is één klik weg en verder de rest van de tijd uit beeld.</p>

<h2>De gratis alternatieven, kort</h2>
<p>Je ziet in dezelfde zoekopdrachten een paar gratis opties genoemd. Het is goed om ze te kennen:</p>
<ul>
<li><strong>Background Music</strong> — gratis en opensource, geeft je basis per-app volume. Maar het kan kapotgaan op nieuwere macOS-releases, en het heeft geen boost, profielen of automatisch ducken.</li>
<li><strong>FineTune</strong> — een gratis opensource volume-app in de menubalk. Simpel, maar beperkt in reikwijdte.</li>
<li><strong>eqMac</strong> — gratis EQ en systeembooster, meer een systeembrede EQ-tool dan een echte per-app mixer.</li>
</ul>
<p>Gratis is geweldig als het voor jou werkt. De afweging is compatibiliteit en ondersteuning: opensource-audiotools kunnen achterlopen op macOS-updates, en functies als profielen en ducken ontbreken meestal. Als je opstelling belangrijk is voor je werkdag, is één keer betalen voor iets gecontroleerds en onderhoudens meestal de rustigere weg.</p>

<h2>Welke moet je kopen?</h2>
<p>Beantwoord één vraag: heb je per-app EQ of geavanceerde uitvoerrouting nodig?</p>
<ul>
<li><strong>Ja</strong> — koop SoundSource. Het is daarvoor gebouwd, en de ~$39 is redelijk voor een professionele tool met een engine op driverniveau.</li>
<li><strong>Nee, ik wil gewoon per-app volume, boost en een schone installatie</strong> — koop SoundDial. Je krijgt de mixing die dag in dag uit echt telt, plus profielen en automatisch ducken, voor €14,99 en zonder driver-gedoe.</li>
</ul>
<p>Voor de grote meerderheid van Mac-gebruikers is die tweede categorie het eerlijke antwoord. Je betaalt voor controle over volume, niet voor een studio.</p>

<p><strong>Klaar om het Mac-volume op de makkelijke manier te fixen?</strong> Haal <a href="https://apps.apple.com/app/id6772792641">SoundDial in de Mac App Store</a> — eenmalig €14,99, geen drivers, geen DMG. Per-app volume, boost, profielen en automatisch ducken met één klik.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Een goedkoper SoundSource-alternatief voor per-app volume op Mac",
    description: "Wil je per-app volume in SoundSource-stijl zonder de prijs van $39? SoundDial is een menubalk-mixer van €14,99 uit de Mac App Store met boost, profielen en automatisch ducken.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Als je per-app volumeregeling in SoundSource-stijl op je Mac wilt maar $39 te fors vindt, is de snelste betrouwbare oplossing <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Het is een eenmalige menubalk-mixer van €14,99 uit de Mac App Store die elke app zijn eigen volumeschuif, dempen en boost geeft — plus profielen en automatisch ducken — zonder download of audiodriver om te installeren.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Een goedkoper SoundSource-alternatief voor per-app volume op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom mensen een SoundSource-alternatief zoeken</h2>
<p>SoundSource van Rogue Amoeba is uitstekende software. Het is echt professioneel: per-app equalizers, audio-effecten en uitvoerrouting waarmee je één app naar je koptelefoon en een andere naar je luidsprekers kunt sturen. Maar die kracht brengt twee wrijvingspunten met zich mee. Ten eerste de prijs — rond de $39. Ten tweede installeert het een audio-capture driver op systeemniveau buiten de App Store, waar sommige mensen voorzichtig mee zijn op een werkmachine of simpelweg niet mee willen omgaan bij macOS-updates.</p>
<p>Voor de meeste mensen is de echte behoefte veel eenvoudiger: Spotify zachter zetten zonder een Zoom-gesprek aan te raken, de app van een lawaaierig browsertabblad dempen, of een stille videospeler boven de 100% boosten. Als dat jij bent, betaal je professioneel geld voor functies die je nooit zult openen.</p>

<h2>Wat SoundDial doet — en wat het kost</h2>
<p>SoundDial richt zich op de per-app volumetaak en doet die netjes. Open de menubalk en je krijgt een live-lijst van alles wat geluid maakt, elk met zijn eigen regeling:</p>
<ul>
<li><strong>Onafhankelijk volume per app</strong> — één schuif per applicatie, in realtime aangepast.</li>
<li><strong>Per-app dempen</strong> — leg één app direct het zwijgen op zonder iets anders te pauzeren.</li>
<li><strong>Per-app volumeboost</strong> — duw stille apps boven hun normale maximum wanneer een video of gesprek te zacht is.</li>
<li><strong>Volumeprofielen</strong> — sla een mix op (bijv. "Focus", "Gamen", "Vergadering") en schakel met één klik.</li>
<li><strong>Automatisch ducken</strong> — verlaag automatisch andere apps wanneer er iets belangrijkers begint te spelen.</li>
<li><strong>Snel wisselen van uitvoer</strong> — spring tussen luidsprekers, koptelefoon en andere apparaten vanuit hetzelfde menu.</li>
</ul>
<p>De prijs is <strong>€14,99, eenmalig betaald</strong> — geen abonnement. Dat is ongeveer een derde van de kosten van SoundSource, voor de volumefuncties waar de meeste gebruikers daadwerkelijk naar grijpen.</p>

<h2>Het App Store-verschil</h2>
<p>Omdat SoundDial via de <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> wordt geleverd, is het door Apple gecontroleerd en gesandboxt. Er is geen DMG om te verslepen, geen kernelextensie of audio-capture driver om goed te keuren, en geen aparte updater. Je installeert het als elke andere App Store-app en het werkt. Wanneer macOS wordt bijgewerkt, hoef je je niet af te vragen of een audiocomponent op laag niveau nog werkt.</p>
<blockquote>macOS heeft nog steeds geen ingebouwde per-app volumemixer. Windows heeft er al jaren een, maar op een Mac is het systeemvolume alles-of-niets — precies het gat dat deze tools vullen.</blockquote>

<h2>Hoe het zich verhoudt tot de gratis opties</h2>
<p>SoundSource is niet je enige alternatief. Er zijn gratis tools, en eerlijk zijn daarover doet ertoe:</p>
<ul>
<li><strong>Background Music</strong> is een gratis, opensource per-app volume-app. Het werkt voor veel mensen, maar het kan kapotgaan op nieuwere macOS-releases, updates zijn onregelmatig, en het heeft geen boost, geen profielen en geen automatisch ducken.</li>
<li><strong>FineTune</strong> is een gratis, opensource volume-app in de menubalk — licht en handig, maar mist opnieuw de profiel- en duckfuncties.</li>
<li><strong>eqMac</strong> is een gratis EQ en systeembooster. Het is meer een equalizer/booster-tool dan een echte per-app mixer, en het is niet gericht op individuele app-schuiven.</li>
</ul>
<p>Gratis is een legitieme keuze. De afweging is betrouwbaarheid en functies: opensource-audiotools hangen af van vrijwilligersonderhoud en kunnen achterlopen op macOS-veranderingen, en geen van de gratis opties bundelt profielen plus automatisch ducken zoals SoundDial doet. Als je opstelling simpel is en je af en toe een storing niet erg vindt, kan een gratis app genoeg zijn. Als je iets wilt dat onderhouden, gesandboxt is en gewoon werkt, koopt de €14,99 je precies dat.</p>

<h2>Snelle beslisgids</h2>
<ul>
<li><strong>Je hebt per-app EQ, audio-effecten en het routeren van één app naar een ander uitvoerapparaat nodig</strong> → SoundSource is zijn prijs waard. Niets hier vervangt dat volledig.</li>
<li><strong>Je hebt vooral per-app volume, dempen, boost, profielen en ducken nodig — zonder drivers</strong> → SoundDial voor €14,99 is de betere prijs-kwaliteitkeuze.</li>
<li><strong>Je wilt gratis en vindt onderhoudsrisico niet erg</strong> → probeer eerst Background Music, FineTune of eqMac.</li>
</ul>

<h2>Het instellen</h2>
<p>Aan de slag gaan kost ongeveer een minuut:</p>
<ul>
<li>Installeer SoundDial vanuit de Mac App Store — geen externe download.</li>
<li>Verleen de audiotoestemming waar macOS bij de eerste start om vraagt.</li>
<li>Speel geluid af in een paar apps en open het menubalk-pictogram; je ziet elke app met zijn eigen schuif.</li>
<li>Versleep om niveaus in te stellen, tik om te dempen, of duw voorbij 100% om te boosten.</li>
<li>Sla je opstelling op als een profiel, en zet automatisch ducken aan als je wilt dat andere apps zachter worden tijdens gesprekken of media.</li>
</ul>
<p>Dat is de hele workflow — geen configuratiebestanden, geen herstart, geen systeemextensie om goed te keuren.</p>

<h2>De conclusie</h2>
<p>SoundSource is de krachtigere tool, maar de meeste mensen die ernaar zoeken willen gewoon per-app volume dat zich netjes gedraagt. SoundDial levert dat voor ongeveer een derde van de prijs, wordt veilig geleverd via de App Store, en voegt profielen en automatisch ducken toe — zonder ook maar één driver om te installeren.</p>

<p>Klaar om het volume van elke app onafhankelijk te regelen? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> voor €14,99, eenmalig.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "FineTune-alternatief voor Mac: een ondersteunde per-app volumemixer",
    description: "De gratis FineTune-menubalk-app geprobeerd en wil je iets dat onderhouden en App Store-veilig is? Hier is het beste FineTune-alternatief voor per-app volume op Mac.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Als je FineTune goed vond maar iets wilt dat actief onderhouden wordt en vanuit een vertrouwde bron wordt geïnstalleerd, is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> de snelste betrouwbare oplossing. Het is een per-app volumemixer in de menubalk uit de Mac App Store met onafhankelijk volume, per-app dempen, volumeboost, opgeslagen profielen en automatisch ducken. Door Apple gecontroleerd en gesandboxt, kost het eenmalig €14,99 zonder drivers om te installeren.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune-alternatief voor Mac: een ondersteunde per-app volumemixer" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom überhaupt een FineTune-alternatief zoeken?</h2>

<p>FineTune is een mooi idee: een gratis, opensource menubalk-app die je per-app volumeregeling op macOS geeft, iets wat Apple nog steeds weigert in te bouwen (Windows heeft al jaren een per-app mixer). Voor veel mensen doet het de basistaak. Maar er zijn echte redenen waarom gebruikers iets anders gaan zoeken.</p>

<ul>
<li><strong>Het onderhoud is onzeker.</strong> Opensource-hobbyprojecten leven en sterven bij de vrije tijd van één beheerder. Wanneer macOS een grote update uitbrengt, zijn audiogerelateerde apps vaak de eerste die kapotgaan, en zit je te wachten op een vrijwilligersfix die er misschien nooit komt.</li>
<li><strong>Functieplafond.</strong> FineTune dekt per-app volume en weinig meer. Als je boost boven 100%, opgeslagen profielen of automatisch ducken wilt, moet je andere tools erbij zetten.</li>
<li><strong>Vertrouwen en updates.</strong> Een ruwe build buiten de App Store installeren betekent geen automatische controle, geen sandbox-garanties, en handmatige updates die je zelf moet bijhouden.</li>
</ul>

<p>Niets hiervan maakt FineTune slecht. Het betekent alleen dat als je elke dag op per-app audio vertrouwt, je waarschijnlijk iets wilt met een ondersteuningsmodel erachter.</p>

<h2>Wat SoundDial anders doet</h2>

<p>SoundDial vertrekt vanuit hetzelfde kernidee, een menubalk-mixer met een schuif voor elke draaiende app, en gaat dan verder met de functies waar powergebruikers echt om vragen.</p>

<ul>
<li><strong>Onafhankelijk volume per app.</strong> Zet Spotify zachter, houd je gesprek op vol volume, demp de app van een lawaaierig browsertabblad helemaal, alles vanuit één menu.</li>
<li><strong>Per-app volumeboost.</strong> Duw een stille app boven zijn normale plafond wanneer een podcast of video te laag is gemasterd. FineTune doet dit niet.</li>
<li><strong>Volumeprofielen.</strong> Sla een mix op, "focus", "gamen", "vergaderingen", en schakel je hele opstelling met één klik in plaats van vijf schuifjes te verstellen.</li>
<li><strong>Automatisch ducken.</strong> Verlaag automatisch achtergrondgeluid wanneer er iets belangrijkers begint te spelen, zodat muziek zakt wanneer er een gesprek binnenkomt.</li>
<li><strong>Snel wisselen van uitvoer.</strong> Spring tussen luidsprekers, koptelefoon en andere uitvoerkanalen zonder in Systeeminstellingen te duiken.</li>
</ul>

<p>Omdat <a href="https://apps.apple.com/app/id6772792641">SoundDial via de Mac App Store wordt geleverd</a>, is het door Apple gecontroleerd en gesandboxt, installeert het schoon, en werkt het bij via hetzelfde mechanisme als elke andere App Store-app. Er is geen DMG om te verslepen, geen audiodriver of systeemextensie, en geen beveiligingsmelding die je vraagt een kernel-onderdeel toe te staan.</p>

<h2>SoundDial vs. FineTune en de andere gratis tools</h2>

<p>FineTune is niet de enige gratis optie, en het helpt om het hele landschap eerlijk te bekijken.</p>

<ul>
<li><strong>FineTune</strong> — Gratis, opensource, per-app volume in de menubalk. Simpel en licht, maar geen boost, geen profielen, geen ducken, en het onderhoud hangt af van de community.</li>
<li><strong>Background Music</strong> — Gratis en opensource, routeert en past per-app audio aan. Echt nuttig, maar het kan kapotgaan op nieuwere macOS-releases en mist boost, profielen en ducken.</li>
<li><strong>eqMac</strong> — Gratis EQ en systeembooster. Prima als je vooral een equalizer wilt, maar het is geen per-app mixer.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — De professionele optie voor rond de $39, met per-app EQ en uitvoerrouting. Uitstekend, maar het heeft een download plus een audio-capture driver nodig, en het kost meer dan twee keer zoveel.</li>
<li><strong>SoundDial</strong> — Eenmalig €14,99, App Store-veilig, geen drivers. Voegt boost, profielen en automatisch ducken toe bovenop de per-app volumebasis.</li>
</ul>

<p>De eerlijke samenvatting: als je het absoluut goedkoopste wilt en alleen basis per-app volume nodig hebt, kunnen de gratis tools werken. Als je per-app EQ en routing wilt en het niet erg vindt om te betalen en een driver te installeren, is SoundSource het zwaargewicht. SoundDial zit in de sweet spot, capabeler dan de gratis apps, veel goedkoper dan SoundSource, en veiliger te installeren dan beide omdat Apple het controleert en sandboxt.</p>

<h2>Overstappen van FineTune</h2>

<p>Overstappen kost een paar minuten en er is geen opruimritueel.</p>

<ul>
<li>Installeer SoundDial vanuit de Mac App Store. Geen installer, geen drivergoedkeuring, geen herstart.</li>
<li>Klik op het SoundDial-pictogram in je menubalk om een schuif voor elke draaiende app te zien.</li>
<li>Stel je dagelijkse mix in, sla die dan op als profiel zodat je hem direct kunt oproepen.</li>
<li>Zet eventueel automatisch ducken aan zodat achtergrondgeluid opzij gaat voor gesprekken en meldingen.</li>
<li>Als je tevreden bent, sluit je FineTune af. Omdat geen van beide apps systeemdrivers installeert, blijft er niets hangen om te verwijderen.</li>
</ul>

<p>Je houdt het ding waar je FineTune om waardeerde, een schone menubalk-mixer die Apple je nooit gaf, en je wint de boost, profielen, ducken en langetermijnondersteuning die een onderhouden App Store-app biedt.</p>

<h2>De conclusie</h2>

<p>FineTune bewijst het concept: per-app volume hoort in de menubalk. SoundDial is hoe dat concept eruitziet met een echt ondersteuningsmodel, meer functies en App Store-veiligheid, voor eenmalig €14,99 in plaats van een gok op vrijwilligersonderhoud.</p>

<p>Klaar voor een per-app mixer die onderhouden blijft? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> en regel het volume van elke app in seconden.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac-alternatief voor echt per-app volume op Mac",
    description: "Was je dol op de boost van eqMac maar heb je goed per-app volume, dempen en profielen nodig? SoundDial is de snelste Mac App Store-oplossing — €14,99, gesandboxt, geen drivers.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Als je eqMac gebruikte voor de EQ en volumebooster maar eigenlijk onafhankelijk volume voor elke app wilt — plus dempen, boost en opgeslagen profielen — is de snelste betrouwbare oplossing <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Het is een menubalk-mixer uit de Mac App Store: stel een niveau per app in, boost de stille, en wissel direct van profiel. Eenmalig €14,99, gesandboxt, geen drivers om te installeren.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — eqMac-alternatief voor echt per-app volume op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac vs. wat je echt nodig hebt</h2>

<p>eqMac is een solide gratis tool, en de systeembrede equalizer en volumebooster zijn echt nuttig. Maar eqMac is gebouwd rond één master-EQ en één master-uitvoer. Het geeft je geen echte per-app volumemixer — het ding dat Windows al jaren heeft en macOS nog steeds niet standaard levert.</p>

<p>Dus als je echte probleem is "Spotify is te luid terwijl ik in een gesprek zit" of "dit ene spel blaast mijn oren eruit maar al het andere is prima," heeft eqMac niet de juiste vorm voor de klus. Je eindigt met het bewegen van één master-schuif of het knutselen aan het interne volume van elke app. Dat is het gat dat SoundDial vult.</p>

<h2>Wat SoundDial doet dat eqMac niet doet</h2>

<ul>
<li><strong>Onafhankelijk volume per app</strong> — Muziek op 40%, een browser op 100%, een videogesprek op 70%, alles tegelijk, alles onthouden.</li>
<li><strong>Per-app dempen</strong> — leg één lawaaierige app direct het zwijgen op zonder iets anders aan te raken.</li>
<li><strong>Per-app boost</strong> — duw een stille app voorbij zijn normale plafond, zoals de booster van eqMac doet, maar gericht op één enkele app in plaats van het hele systeem.</li>
<li><strong>Volumeprofielen</strong> — sla opstellingen op zoals "Focus", "Gamen" of "Vergadering" en schakel de hele mix met één klik.</li>
<li><strong>Automatisch ducken</strong> — verlaag automatisch achtergrondgeluid wanneer er iets belangrijkers begint, zodat je niet halverwege een gesprek naar een schuif hoeft te grabbelen.</li>
<li><strong>Snel wisselen van uitvoer</strong> — spring tussen luidsprekers, koptelefoon en andere uitvoerkanalen vanuit de menubalk.</li>
</ul>

<p>De overlap met eqMac is eigenlijk de boost. Al het andere — de mixer, dempen, profielen, ducken — is terrein dat eqMac nooit was ontworpen om te dekken.</p>

<h2>Wil je nog steeds EQ?</h2>

<p>Wees eerlijk over welk probleem je oplost. Als je echt frequentie-EQ nodig hebt — bas wegsnijden, scherpe hoge tonen temmen, de toon van je hele systeem vormgeven — dan heeft eqMac nog een plek, en het is gratis. SoundDial is een volumemixer, geen equalizer.</p>

<p>Maar de meeste mensen grijpen naar de booster van eqMac niet omdat ze frequenties willen vormgeven, ze willen één app luider of de mix in balans. Als dat jij bent, is een speciale mixer het schonere antwoord. Je kunt zelfs beide draaien: houd eqMac voor een systeembrede EQ-curve en gebruik SoundDial voor per-app niveaus. Ze vechten niet om dezelfde taak.</p>

<h2>Hoe het zich verhoudt tot de andere Mac-audiotools</h2>

<p>Omdat je toch al aan het tool-hunten bent, hier het eerlijke landschap:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — de professionele optie voor rond de $39, met per-app EQ en volledige uitvoerrouting. Krachtig, maar het heeft een directe download nodig en installeert een audio-capture driver. Overkill en duurder als je alleen per-app volume met profielen wilt.</li>
<li><strong>Background Music</strong> — gratis en opensource, maar het kan kapotgaan op nieuwere macOS-releases en heeft geen boost, geen profielen en geen automatisch ducken. Geweldig als het werkt, frustrerend als het niet werkt.</li>
<li><strong>FineTune</strong> — een gratis opensource menubalk-app. De moeite waard als $0 de harde eis is, al is het lichter op functies en afwerking.</li>
<li><strong>eqMac</strong> — gratis EQ plus booster, maar geen echte per-app mixer, zoals hierboven behandeld.</li>
</ul>

<p>SoundDial zit in de sweet spot: gerichter en goedkoper dan SoundSource, capabeler en betrouwbaarder dan de gratis opties, en het doet de per-app taak die eqMac niet doet.</p>

<h2>Waarom de Mac App Store hier belangrijk is</h2>

<p>Verschillende van deze tools vereisen een directe download en een audiodriver op kernelniveau of capture-niveau. Die werken, maar het is het soort ding dat kan haperen bij een macOS-update of struikelt op een vergrendelde werk-Mac.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> wordt in plaats daarvan via de Mac App Store geleverd. Dat betekent dat het door Apple is gecontroleerd en gesandboxt, dat het schoon installeert zonder DMG om te verslepen, en dat er geen audiodrivers of systeemextensies zijn om goed te keuren. Updates arriveren via de App Store zoals elke andere app, en verwijderen is een normale verwijdering. Voor een menubalk-hulpprogramma dat je audio raakt, is dat pad met minder wrijving en minder risico veel waard.</p>

<h2>De snelle installatie</h2>

<ul>
<li>Installeer SoundDial vanuit de Mac App Store — geen herstart, geen drivermelding.</li>
<li>Open het menubalk-pictogram; elke app die op dat moment geluid maakt verschijnt met zijn eigen schuif.</li>
<li>Stel niveaus in, demp wat je niet nodig hebt, en boost alles wat te stil is.</li>
<li>Sla de opstelling op als een profiel, en maak er meer voor gamen, gesprekken of focus.</li>
<li>Zet automatisch ducken aan zodat achtergrondgeluid automatisch opzij gaat.</li>
</ul>

<p>Dat is de hele lus. Binnen een paar minuten heb je de per-app controle waar de booster van eqMac alleen naar hintte.</p>

<p><strong>Klaar voor echt per-app volume op je Mac?</strong> <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> — eenmalig €14,99, gesandboxt, geen drivers, en het doet precies wat een menubalk-mixer zou moeten doen.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "De goedkoopste goede volumemixer voor Mac in 2026",
    description: "Op zoek naar de goedkoopste goede per-app volumemixer voor Mac in 2026? Vergelijk SoundDial, SoundSource, Background Music, FineTune en eqMac op prijs, veiligheid en functies.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>De beste per-app volumemixer voor de prijs op Mac in 2026 is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalk-app in de Mac App Store voor eenmalig €14,99. Het geeft elke app zijn eigen volumeschuif, plus dempen, boost, profielen en automatisch ducken — geen drivers, geen abonnement, en geen riskante downloads. Het is de goedkoopste betaalde optie die daadwerkelijk betrouwbaar werkt.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — De goedkoopste goede volumemixer voor Mac in 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom "goedkoopste" een definitie nodig heeft</h2>
<p>Er zijn gratis volumetools voor Mac, dus als het enige doel is om niets uit te geven, heb je opties. Maar gratis kost je meestal ergens anders wat: kwetsbaarheid op nieuwe macOS-versies, ontbrekende functies zoals boost of profielen, of een installatieproces met een audio-capture driver die je moet vertrouwen. "Goedkoopste goede" betekent de laagste prijs die je toch een stabiele, volledige mixer geeft die je blijft gebruiken. Dat is de lens die we hier gebruiken.</p>

<h2>Eerst, het ding dat macOS niet doet</h2>
<p>Windows heeft al jaren een per-app volumemixer — rechtsklik op het luidsprekerpictogram en stel elke app onafhankelijk in. macOS heeft nog steeds niets vergelijkbaars ingebouwd. Je krijgt één master-volume en welke interne schuif een app toevallig meelevert (Muziek, sommige browsers). Er is geen systeembrede manier om Slack zachter dan Spotify te maken, of om een stil videogesprek boven alles te boosten. Elke optie hieronder bestaat om dat gat te vullen.</p>

<h2>De kandidaten, eerlijk geprijsd</h2>

<h2>SoundDial — €14,99, eenmalig</h2>
<p>SoundDial leeft in je menubalk en geeft elke draaiende app een onafhankelijke volumeschuif. Naast de basis voegt het de functies toe waar mensen echt naar grijpen:</p>
<ul>
<li><strong>Per-app boost</strong> — duw een te stille app boven 100% in plaats van je oren te spitsen om het te horen.</li>
<li><strong>Per-app dempen</strong> — leg één app het zwijgen op zonder de rest aan te raken.</li>
<li><strong>Volumeprofielen</strong> — sla een mix voor "werkgesprek" of "filmavond" op en roep die direct op.</li>
<li><strong>Automatisch ducken</strong> — verlaag automatisch achtergrondgeluid wanneer er iets belangrijkers speelt.</li>
<li><strong>Snel wisselen van uitvoer</strong> — spring tussen luidsprekers, koptelefoon en andere apparaten vanuit hetzelfde menu.</li>
</ul>
<p>Omdat het in de Mac App Store staat, is het gesandboxt, door Apple gecontroleerd en installeert het schoon — geen DMG, geen kernelextensie, geen audiodriver om goed te keuren. Je betaalt <a href="https://apps.apple.com/app/id6772792641">eenmalig €14,99</a> en het is van jou. Voor de meeste mensen is dit de sweet spot: goedkoop genoeg om een makkelijke ja te zijn, compleet genoeg dat je er niet overheen groeit.</p>

<h2>SoundSource — ~$39, de professionele optie</h2>
<p>SoundSource van Rogue Amoeba is de gouden standaard voor powergebruikers. Het doet per-app volume en dempen zoals SoundDial, maar gaat verder met per-app equalizers en volledige uitvoerrouting (stuur één app naar de koptelefoon, een andere naar de luidsprekers). Het is echt uitstekend — maar het kost ongeveer $39, en het installeert buiten de App Store met een audio-capture component waar je toestemming voor moet geven. Als je per-app EQ of complexe routing nodig hebt, is het het geld waard. Als je gewoon een schone, goedkope mixer wilt, betaal je voor mogelijkheden die je misschien nooit aanraakt.</p>

<h2>Background Music — gratis, opensource</h2>
<p>Background Music is een bekende gratis, opensource-app die per-app volume en automatisch pauzeren biedt. De haak: het haakt diep in Core Audio via een virtuele driver, en het heeft een lange geschiedenis van kapotgaan op nieuwe macOS-releases, soms met handmatige fixes of een herinstallatie na updates. Het mist ook boost, opgeslagen profielen en automatisch ducken. Geweldig voor knutselaars die onderhoud niet erg vinden; frustrerend als je gewoon wilt dat het werkt.</p>

<h2>FineTune — gratis, menubalk</h2>
<p>FineTune is een gratis, opensource volume-app in de menubalk. Het is licht en aangenaam, en voor eenvoudige per-app aanpassing kan het genoeg zijn. Maar omdat het een klein gratis project is, evenaart het de functiediepte niet — geen profielen, geen automatisch ducken, en boost/uitvoerbeheer zijn beperkt. Geen kosten, minder garanties op levensduur en ondersteuning.</p>

<h2>eqMac — gratis, EQ + booster</h2>
<p>eqMac is een gratis systeembrede equalizer met een volumebooster. Het gaat meer over het vormgeven van toon en luidheid over je hele Mac dan over het mixen van individuele apps, dus het is een ander gereedschap voor een andere klus. Als je specifiek per-app controle wilt, is eqMac niet echt het antwoord, al is het een prima gratis EQ.</p>

<h2>Prijs vs. waarde: de eerlijke tabel</h2>
<ul>
<li><strong>Echt gratis, maar met afwegingen:</strong> Background Music (kwetsbaar, driver-gebaseerd), FineTune (magere functies), eqMac (EQ, geen mixer).</li>
<li><strong>Goedkoopste complete betaalde app:</strong> SoundDial voor €14,99 — boost, profielen, ducken, App Store-veiligheid.</li>
<li><strong>Premium/professioneel:</strong> SoundSource voor ~$39 — EQ en routing, installatie buiten de App Store.</li>
</ul>
<p>Anders gezegd: SoundDial kost ongeveer een derde van SoundSource terwijl het de functies dekt die 90% van de mensen daadwerkelijk wil. En anders dan de gratis opties gaat het niet stilletjes kapot na een macOS-update, omdat het niet afhankelijk is van een kwetsbare audiodriver op systeemniveau.</p>

<h2>Welke moet je kiezen?</h2>
<p>Als je een professional bent die per-app EQ nodig heeft en apps naar verschillende uitvoerkanalen wil routeren, koop SoundSource — het verdient zijn prijs. Als je van opensource houdt en af en toe een storing niet erg vindt, probeer Background Music of FineTune gratis. Maar als je de goedkoopste optie wilt die gewoon werkt — onafhankelijk volume, boost, dempen, opslaanbare profielen en automatisch ducken, veilig geïnstalleerd vanuit de App Store — is SoundDial de duidelijke prijs-kwaliteitwinnaar in 2026.</p>

<blockquote>De beste mixer is niet die met de meeste functies of de laagste prijs — het is die je één keer instelt en vergeet. Voor €14,99 maakt SoundDial dat een makkelijke keuze.</blockquote>

<p>Klaar om elke app zijn eigen volume te geven? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> voor eenmalig €14,99 — geen abonnement, geen drivers, geen risico.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Windows Volumemixer voor Mac: krijg per-app volumeregeling",
    description: "Mis je de Windows Volumemixer op je Mac? macOS heeft geen ingebouwde per-app volumeregeling. Hier is de snelste manier om die te krijgen: SoundDial, een menubalk-mixer van €14,99.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>macOS heeft geen ingebouwde Volumemixer zoals Windows, dus je kunt geen per-app volume instellen vanuit Systeeminstellingen. De snelste, betrouwbare oplossing is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalk-app van €14,99 uit de Mac App Store. Het geeft elke app zijn eigen volumeschuif, dempen en boost — geen drivers, geen DMG, geen riskante installaties.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Windows Volumemixer voor Mac: krijg per-app volumeregeling" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom de Windows Volumemixer geen Mac-equivalent heeft</h2>

<p>Als je van Windows bent overgestapt, is een van de eerste dingen die je zult missen de Volumemixer: rechtsklik op het luidsprekerpictogram, en elke draaiende app krijgt zijn eigen schuif. Zet Chrome zachter, houd Discord luid, demp Spotify — allemaal op één plek.</p>

<p>macOS levert dit simpelweg niet. Apple's volumeregeling is één systeembrede schuif. Welk niveau je ook instelt, het geldt voor alles tegelijk. Er is geen per-app optie verstopt in Systeeminstellingen, geen Terminal-commando, geen toegankelijkheidsschakelaar. Het is een echt gat, en dat is al jaren zo.</p>

<p>De reden is architecturaal: apps routeren audio via Core Audio naar je uitvoerapparaat, en het OS toont geen mixer voor de individuele streams aan de gebruiker. Om de Windows-ervaring na te bootsen heb je een app van derden nodig die in dat audiopad zit en je de regelaars geeft die Apple wegliet.</p>

<h2>De dichtstbijzijnde match: SoundDial</h2>

<p>SoundDial is een per-app volumemixer in de menubalk die speciaal hiervoor is gebouwd. Klik op het pictogram en je krijgt een overzichtelijke lijst van alles wat audio afspeelt, elk met zijn eigen schuif. Het is de meest directe "Windows Volumemixer voor Mac" die je kunt installeren, en het doet een paar dingen die de Windows-mixer nooit kon:</p>

<ul>
<li><strong>Onafhankelijk volume per app</strong> — de kernfunctie. Zet Chrome op 40%, Zoom op 100%, muziek op 20%.</li>
<li><strong>Per-app dempen</strong> — leg één app het zwijgen op zonder de rest aan te raken.</li>
<li><strong>Per-app volumeboost</strong> — duw een stille app <em>boven</em> 100% wanneer zijn eigen audio te laag is.</li>
<li><strong>Volumeprofielen</strong> — sla een mix op (bijv. "werkgesprek" of "gamen") en roep die direct op in plaats van schuiven opnieuw te verslepen.</li>
<li><strong>Automatisch ducken</strong> — verlaag automatisch achtergrondgeluid wanneer er iets belangrijkers begint, zoals een gesprek.</li>
<li><strong>Snel wisselen van uitvoer</strong> — spring tussen luidsprekers, koptelefoon en andere apparaten vanuit hetzelfde menu.</li>
</ul>

<p>Omdat het in de <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> staat, is het door Apple gecontroleerd en gesandboxt. Het installeert schoon met één klik — geen DMG om te verslepen, geen audiodriver of systeemextensie om goed te keuren, geen beveiligingsmeldingen. Voor eenmalig €14,99 (geen abonnement) is het de eenvoudigste manier om het gat te dichten.</p>

<h2>Zo stel je per-app volume in op je Mac</h2>

<ol>
<li>Installeer SoundDial vanuit de Mac App Store.</li>
<li>Verleen de eenmalige audiotoestemming waar het bij de eerste start om vraagt.</li>
<li>Klik op het SoundDial-pictogram in je menubalk.</li>
<li>Versleep de schuif naast een app om het volume in te stellen, of gebruik dempen/boost.</li>
<li>Sla eventueel de huidige mix op als profiel zodat je die later kunt herstellen.</li>
</ol>

<p>Dat is de hele workflow. Het gedraagt zich als de Windows-mixer die je al kent, alleen vanuit de menubalk in plaats van een rechtsklik op de taakbalk.</p>

<h2>Hoe SoundDial zich verhoudt tot andere opties</h2>

<p>SoundDial is niet de enige tool in dit gebied, dus hier een eerlijke blik op de alternatieven.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — rond de $39, en echt professioneel: per-app EQ, per-app uitvoerrouting, effecten. Maar het vereist een directe download plus een audio-capture driver, en het is overkill (en duurder) als je alleen per-app volume wilt. Kies het als je EQ en routing nodig hebt; kies SoundDial als je de mixer wilt zonder de complexiteit of de driver.</li>
<li><strong>Background Music</strong> — gratis en opensource, wat geweldig is. De haak: het kan kapotgaan op nieuwere macOS-versies, en het mist boost, opgeslagen profielen en automatisch ducken. Prima als je comfortabel bent met het oplossen van opensource-audiodrivers; minder ideaal als je iets wilt dat gewoon werkt.</li>
<li><strong>FineTune</strong> — een gratis opensource menubalk-app. Licht en de moeite waard als budget de prioriteit is, maar je ruilt afwerking, profielen en App Store-veiligheid in voor gratis.</li>
<li><strong>eqMac</strong> — een gratis EQ en systeembrede booster. Het is in de eerste plaats een equalizer, geen per-app mixer, dus het lost een ander probleem op.</li>
</ul>

<p>De afweging is simpel. Gratis tools kosten niets maar kunnen kwetsbaar of functiearm zijn. SoundSource is krachtig maar duur en driver-gebaseerd. SoundDial zit in de sweet spot: eenmalig €14,99, App Store-veiligheid en sandboxing, en de profielen + automatisch ducken die de gratis opties overslaan.</p>

<blockquote>Als je alleen de Windows Volumemixer-ervaring wilt — per-app schuiven, dempen en boost, in seconden veilig geïnstalleerd — is SoundDial de meest directe match.</blockquote>

<h2>De conclusie</h2>

<p>macOS geeft je geen Volumemixer, en dat zal het waarschijnlijk ook nooit doen. Maar je hoeft niet te leven met één systeembrede schuif. Een speciale menubalk-mixer herstelt de per-app controle die je op Windows had, en voegt boost, profielen en automatisch ducken toe.</p>

<p>Klaar om per-app volume op de makkelijke manier te krijgen? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> voor €14,99 — eenmalig, gesandboxt, en in seconden geïnstalleerd.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Stel app-volume in zoals Windows dat doet — op je Mac",
    description: "Windows heeft een per-app volumemixer, maar macOS niet. Zo stel je onafhankelijk volume in voor elke app op je Mac — snel, veilig en zonder drivers.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>macOS heeft geen ingebouwde per-app volumemixer zoals die in Windows, dus de snelste betrouwbare oplossing is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalk-app uit de Mac App Store die elke app zijn eigen volumeschuif, per-app dempen en volumeboost geeft. Het is gesandboxt, door Apple gecontroleerd, installeert zonder drivers, en kost eenmalig €14,99.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Stel app-volume in zoals Windows dat doet — op je Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom Windows dit kan en macOS niet</h2>
<p>Als je Windows hebt gebruikt, ken je het ritueel: rechtsklik op het luidsprekerpictogram, open de Volumemixer, en versleep een aparte schuif voor Chrome, Spotify, Discord en al het andere dat geluid maakt. Het is simpel en het werkt gewoon.</p>
<p>macOS leverde nooit een equivalent. Apple's audioregelaars zijn globaal — één master-volume voor het hele systeem. Je kunt een app dempen door de bron binnen die app te dempen (als die al een regelaar heeft), maar er is geen uniforme plek om te zeggen "houd mijn muziek op 40% terwijl mijn vergadering op 100% blijft." Dat gat is precies waarom mixers van derden bestaan.</p>

<h2>De snelste oplossing: een menubalk-mixer</h2>
<p>De dichtstbijzijnde match voor de Windows-ervaring is een menubalk-app die je draaiende audio-apps opsomt en elk een schuif geeft. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> doet precies dit. Klik op het pictogram in de menubalk en je krijgt:</p>
<ul>
<li><strong>Onafhankelijk volume voor elke app</strong> — zet Spotify zachter zonder je gesprek aan te raken.</li>
<li><strong>Per-app dempen</strong> — leg één lawaaierige app direct het zwijgen op, laat de rest doorspelen.</li>
<li><strong>Per-app volumeboost</strong> — duw een te stille app <em>boven</em> 100% wanneer zijn eigen maximum nog te zacht is.</li>
<li><strong>Volumeprofielen</strong> — sla een "Werk"- of "Gamen"-mix op en roep die met één klik op.</li>
<li><strong>Automatisch ducken</strong> — verlaag automatisch achtergrondgeluid wanneer er iets belangrijkers begint.</li>
<li><strong>Snel wisselen van uitvoer</strong> — spring tussen luidsprekers, koptelefoon en andere uitvoerkanalen vanuit hetzelfde menu.</li>
</ul>
<p>Omdat het in de Mac App Store staat, is het gesandboxt en door Apple gecontroleerd, installeert het schoon, en is er geen DMG om te verslepen, geen kernelextensie, en geen audiodriver om goed te keuren in Systeeminstellingen. Dat laatste doet er meer toe dan het klinkt — driver-gebaseerde tools zijn degene die de neiging hebben kapot te gaan na macOS-updates.</p>

<h2>Zo stel je het in (ongeveer twee minuten)</h2>
<ul>
<li><strong>1.</strong> Installeer SoundDial vanuit de Mac App Store en start het.</li>
<li><strong>2.</strong> Verleen de audiotoestemming waar macOS om vraagt — dit is wat de app in staat stelt per-app streams te zien.</li>
<li><strong>3.</strong> Klik op het SoundDial-pictogram in je menubalk. Elke app die op dat moment audio afspeelt verschijnt met zijn eigen schuif.</li>
<li><strong>4.</strong> Versleep de schuif van een app om het niveau in te stellen, of gebruik dempen. Boost voorbij 100% wanneer een app te stil is.</li>
<li><strong>5.</strong> (Optioneel) Sla je huidige mix op als profiel zodat je die later kunt herstellen, en zet automatisch ducken aan als je wilt dat achtergrondgeluid automatisch zakt.</li>
</ul>
<p>Dat is de hele workflow. Het gedraagt zich als de Windows Volumemixer die je al kent, zonder de instelwrijving.</p>

<h2>Hoe zit het met de gratis en professionele alternatieven?</h2>
<p>Er zijn andere manieren om per-app volume op een Mac te krijgen. Het is de moeite waard ze te kennen zodat je een eerlijke keuze kunt maken.</p>
<blockquote>Gratis tools ruilen geld voor betrouwbaarheid en functies; professionele tools ruilen geld en installatie voor diepgang die je misschien niet nodig hebt.</blockquote>
<p><strong>Background Music</strong> is gratis en opensource, en het biedt inderdaad per-app volume. De haak: het haakt diep in het audiosysteem en heeft een geschiedenis van kapotgaan op nieuwere macOS-releases, en het mist boost, profielen en automatisch ducken. Als het op jouw opstelling werkt, geweldig — maar het is een gok bij upgrades.</p>
<p><strong>FineTune</strong> is een gratis, opensource menubalk-app in dezelfde geest als SoundDial. Het is een prima startpunt als budget de enige zorg is, al is het een communityproject zonder de profiel- en duckafwerking.</p>
<p><strong>eqMac</strong> is een gratis systeembrede EQ en booster. Het is geweldig voor het vormgeven van algeheel geluid, maar het is geen echte per-app mixer — je past de hele uitvoer aan, niet individuele apps.</p>
<p><strong>SoundSource</strong> van Rogue Amoeba (rond de $39) is de professionele optie: per-app EQ, per-app uitvoerrouting, en serieuze audio-engineerfuncties. Het is uitstekend — maar het heeft een directe download nodig en installeert een audio-capture component, en het kost meer dan het dubbele van SoundDial. Als je routing en EQ op studioniveau wilt, is het de keuze. Als je gewoon de Windows-stijl mixer wilt, is het overkill.</p>

<h2>Welke moet je halen?</h2>
<p>Als je doel is "mijn Mac laten werken zoals de Windows Volumemixer" zonder downloads, drivers of risico, is SoundDial het schoonste antwoord. Je krijgt per-app volume, dempen, boost, profielen en automatisch ducken, allemaal App Store-veilig, voor eenmalig €14,99 — geen abonnement. Kies alleen voor SoundSource als je specifiek per-app EQ en uitvoerrouting nodig hebt, en probeer de gratis opties als je comfortabel bent met het oplossen ervan bij macOS-updates.</p>

<p><strong>Klaar om elke app zijn eigen volume te geven?</strong> <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> en stel je eerste mix in ongeveer twee minuten in.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Je Mac luider maken voor slechthorend luisteren",
    description: "Kun je je Mac zelfs op maximaal volume nauwelijks horen? Leer hoe je audio per app boost en verheldert voor slechthorend luisteren, inclusief SoundDial en ingebouwde tips.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Als je Mac zelfs op maximaal volume niet luid genoeg is, is de snelste betrouwbare oplossing <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalk-mixer uit de Mac App Store waarmee je één enkele app voorbij 100% kunt boosten en al het andere kunt dempen. Dat betekent luidere, helderdere spraak van FaceTime, video of een filmspeler zonder je hele systeem open te draaien. Het is eenmalig €14,99.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Je Mac luider maken voor slechthorend luisteren" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom de volumeschuif op maximaal zetten nog steeds niet genoeg is</h2>
<p>Voor slechthorende luisteraars heeft de macOS-volumeschuif twee frustrerende grenzen. Ten eerste stopt hij bij 100% van wat de app zelf uitvoert. Als een podcast, video of gesprek stil is opgenomen, is "vol volume" nog steeds te zacht. Ten tweede heeft macOS geen ingebouwde per-app volumemixer. Windows heeft er al jaren een, maar op een Mac delen alle apps één master-niveau. Dus wanneer je alles harder zet om een zachte stem te horen, worden achtergrondmuziek en meldingsgeluiden ook ongemakkelijk luid.</p>
<p>Wat je eigenlijk nodig hebt is de mogelijkheid om <em>één</em> app luider te maken dan de rest, hem voorbij zijn normale plafond te duwen, en concurrerende geluiden weg te snijden zodat spraak eruit springt. Dat is precies het gat dat deze tools vullen.</p>

<h2>Gebruik eerst de gratis macOS-toegankelijkheidsinstellingen</h2>
<p>Voordat je een app toevoegt, is het de moeite waard in te stellen wat macOS al biedt. Deze helpen de helderheid, al voegen ze geen ruwe luidheid toe:</p>
<ul>
<li><strong>Mono-audio:</strong> Systeeminstellingen &rarr; Toegankelijkheid &rarr; Audio, zet "Speel stereo-audio af als mono" aan. Als je gehoor in één oor sterker is, stuurt dit het volledige signaal naar beide, zodat je niet de helft van de dialoog mist.</li>
<li><strong>Balansaanpassing:</strong> Sleep in Systeeminstellingen &rarr; Geluid de links/rechts-balans naar je sterkere oor.</li>
<li><strong>Achtergrondgeluid verminderen:</strong> Verlaag muziek en sfeergeluid in apps die dat toelaten, zodat stemmen niet tegen een soundtrack hoeven te vechten.</li>
<li><strong>Koptelefoonaanpassingen:</strong> Als je AirPods of Beats gebruikt, kan Systeeminstellingen &rarr; Toegankelijkheid &rarr; Audio &rarr; Koptelefoonaanpassingen zachte geluiden versterken en afstemmen op spraak.</li>
</ul>
<p>Deze zijn echt nuttig en kosten niets. Maar geen ervan maakt één stille app <em>luider dan 100%</em>, en dat is meestal het echte probleem.</p>

<h2>Hoe je één app voorbij 100% boost met SoundDial</h2>
<p>SoundDial leeft in je menubalk en toont een schuif voor elke app die op dat moment geluid afspeelt. Hier is de workflow die het meest helpt voor slechthorend luisteren:</p>
<ul>
<li><strong>Boost de app waar je naar luistert.</strong> Sleep zijn schuif boven 100% om een stil videogesprek of podcast te versterken voorbij wat de app zelf toelaat.</li>
<li><strong>Demp of verlaag al het andere.</strong> Zet muziek, browsertabbladen of meldingsgeluiden zachter zodat niets concurreert met de stem die je probeert te volgen.</li>
<li><strong>Zet automatisch ducken aan.</strong> Wanneer je begint te praten in een gesprek, zakt SoundDial automatisch andere audio zodat de persoon met wie je praat helder doorkomt, en herstelt het daarna.</li>
<li><strong>Sla een volumeprofiel op.</strong> Maak een "videogesprekken"-profiel waarbij je vergaderapp geboost is en al het andere stil, en schakel er dan direct naartoe in plaats van elke keer opnieuw af te stellen.</li>
<li><strong>Wissel snel van uitvoer.</strong> Spring tussen luidsprekers, een headset of een op je hoortoestel aangesloten apparaat vanuit hetzelfde menu, zonder door Systeeminstellingen te graven.</li>
</ul>
<p>De boostfunctie is hier de belangrijkste. Omdat het de uitvoer van de app boven zijn oorspronkelijke maximum tilt, wordt een fluisterstille opname iets wat je daadwerkelijk kunt horen, terwijl de rest van je systeem op een comfortabel niveau blijft.</p>

<h2>Een korte opmerking over vervorming</h2>
<p>Elke softwareboost versterkt wat er in het signaal zit, dus ver voorbij 100% duwen op al luide audio kan clipping introduceren. In de praktijk klinkt het boosten van <em>stille</em> content tot een comfortabel, verstaanbaar niveau schoon. Begin bescheiden, verhoog totdat spraak helder is, en zet terug als het schril begint te klinken. Je resterende gehoor beschermen is belangrijk, dus streef naar helderheid in plaats van maximale luidheid.</p>

<h2>Hoe SoundDial zich verhoudt tot de alternatieven</h2>
<p>Je hebt een paar opties, en eerlijkheid helpt je de juiste te kiezen:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39):</strong> Echt professioneel, met per-app EQ en uitvoerrouting. Als je frequenties wilt bijstellen voor gehoorverlies, is het krachtig. Maar het kost meer dan twee keer zoveel, vereist een directe download, en installeert een audio-capture driver. Dat is meer installatie en systeemtoegang dan veel mensen willen.</li>
<li><strong>Background Music (gratis, opensource):</strong> Biedt gratis per-app volume, maar het mist boost, profielen en automatisch ducken, en het kan kapotgaan op nieuwere macOS-versies omdat het diep in het audiosysteem haakt.</li>
<li><strong>FineTune (gratis, opensource):</strong> Een lichte volume-app in de menubalk. Prima voor de basis, maar zonder de boost, profielen en ducken waar slechthorende luisteraars op leunen.</li>
<li><strong>eqMac (gratis):</strong> Een equalizer met een booster. Nuttig voor het vormgeven van geluid, maar gebouwd rond EQ in plaats van schone per-app mixing en profielen.</li>
</ul>
<p>Waar <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> uitblinkt, is de balans tussen prijs, veiligheid en de specifieke functies die hier tellen. Omdat het in de Mac App Store staat, is het door Apple gecontroleerd en gesandboxt, installeert het schoon zonder DMG, en heeft het geen audiodrivers of systeemextensies nodig. Je krijgt per-app boost, dempen, volumeprofielen en automatisch ducken in één eenmalige aankoop van €14,99, zonder dat er iets in de macOS-audiostack graaft.</p>

<h2>De conclusie</h2>
<p>Stel eerst de gratis macOS-toegankelijkheidsopties in, die zijn het waard om te hebben. Maar als het echte probleem is dat één app simpelweg te stil is, heb je een tool nodig die één enkele app voorbij 100% kan duwen en de rest zachter kan zetten. Dat is het hele punt van een per-app boost, en macOS doet het niet uit zichzelf.</p>

<p>Klaar om je Mac echt te horen? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> voor €14,99, boost de app die je nodig hebt, en laat automatisch ducken en profielen de spraak helder houden.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Hoe je een stille app op Mac boost (voorbij het maximale volume)",
    description: "Eén app te stil, zelfs op 100%? Boost alleen die app voorbij zijn maximum op Mac met SoundDial, een per-app volumemixer. Hier is de snelste oplossing plus alternatieven.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Als één app te stil is zelfs op maximaal volume, is de snelste betrouwbare oplossing <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een per-app volumemixer in de menubalk voor macOS. Het geeft elke app zijn eigen schuif plus een volume<strong>boost</strong> die één enkele app voorbij 100% duwt, zodat een fluisterstil videogesprek of browsertabblad luider wordt zonder je systeemvolume aan te raken. Het is een eenmalige app van €14,99 in de Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Hoe je een stille app op Mac boost (voorbij het maximale volume)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom één app stil is zelfs op 100%</h2>
<p>macOS heeft maar één master-volume. Als je het verhoogt, wordt alles samen luider. Maar elke app voert ook geluid uit op zijn eigen interne niveau, en dat niveau varieert enorm. Een stil gemasterde YouTube-clip, een Zoom-beller met een slechte microfoon, een spel met lage dialoogmixing, of een browsertabblad met een zachte stream kunnen allemaal ver onder al het andere zitten, zelfs met je Mac op vol vermogen.</p>
<p>Het echte probleem: macOS heeft <strong>geen ingebouwde per-app volumemixer</strong>. Windows heeft er al jaren een (de Volumemixer, rechtsklik op het luidsprekerpictogram). Op een Mac is er geen native manier om één app harder te zetten terwijl je de rest met rust laat, en zeker geen manier om één enkele app <em>boven</em> zijn normale maximum te versterken. Dat is het gat waar je tegenaan loopt.</p>

<h2>De snelste oplossing: boost alleen die ene app</h2>
<p>Een per-app mixer lost dit op door zichzelf tussen je apps en je uitvoer te plaatsen, zodat het elke stream onafhankelijk kan verhogen of verlagen, en er één voorbij 100% kan boosten. Met <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is de flow kort:</p>
<ul>
<li>Installeer vanuit de Mac App Store en open het. Het leeft in je menubalk, niet in een zwevend venster.</li>
<li>Klik op het menubalk-pictogram om een schuif te zien voor elke app die op dat moment audio afspeelt.</li>
<li>Zoek de stille app en sleep zijn schuif voorbij 100% om boost toe te passen. Het versterkt alleen die app.</li>
<li>Laat al het andere staan. Je systeemvolume en andere apps blijven onaangeroerd.</li>
</ul>
<p>Omdat de boost per app is, kun je een zacht videogesprek naar een comfortabel niveau duwen terwijl je voorkomt dat muziek of meldingen oorverdovend worden. Dat is precies het ding dat de ingebouwde macOS-regelaars simpelweg niet kunnen.</p>

<h2>Een opmerking over boost en clipping</h2>
<p>Boost is echt nuttig, maar het is versterking, geen magie. Als de oorspronkelijke audio van een app erg stil of al vervormd is, kan hard opdraaien clipping introduceren of achtergrondruis duidelijker maken. In de praktijk lost een gematigde boost de overgrote meerderheid van "dit gesprek is te stil"-situaties schoon op. Duw hem omhoog totdat de app comfortabel is in plaats van hem tegen het plafond te slaan, en je houdt het geluid schoon.</p>

<h2>Meer dan boosten: wat nog meer helpt</h2>
<p>Zodra je per-app controle hebt, laten een paar functies het probleem van stille apps voorgoed verdwijnen:</p>
<ul>
<li><strong>Volumeprofielen</strong> — sla een opstelling op (bijv. "boost Zoom, verlaag Spotify, demp Slack") en roep die met één klik op in plaats van schuiven opnieuw te verslepen bij elke vergadering.</li>
<li><strong>Automatisch ducken</strong> — verlaag automatisch andere apps wanneer een gekozen app speelt, zodat een geboost gesprek helder gehoord wordt boven achtergrondgeluid.</li>
<li><strong>Per-app dempen</strong> — leg één lawaaierige app het zwijgen op zonder iets anders te pauzeren.</li>
<li><strong>Snel wisselen van uitvoer</strong> — spring tussen luidsprekers, koptelefoon of een externe interface vanuit hetzelfde menu.</li>
</ul>

<h2>Hoe zit het met de gratis en professionele alternatieven?</h2>
<p>Je hebt opties, en eerlijkheid doet er hier toe, dus hier is het echte landschap.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) is de professionele keuze voor rond de $39. Het doet per-app volume plus per-app EQ en volledige uitvoerrouting, meer kracht dan de meeste mensen nodig hebben. De afwegingen: het kost meer dan het dubbele, het is een directe download in plaats van App Store, en het installeert een audio-capture driver om zijn werk te doen. Als je een toolkit voor audio-engineers wilt, is het uitstekend. Als je gewoon één app luider wilt, is het overkill.</p>
<p><strong>Background Music</strong> is gratis en opensource, en het kan basis per-app volume doen. Maar het is een communityproject dat een geschiedenis heeft van kapotgaan op nieuwere macOS-versies, en het mist boost voorbij 100%, profielen en automatisch ducken. Geweldig als gratis de enige eis is en je af en toe een storing niet erg vindt.</p>
<p><strong>FineTune</strong> is een gratis opensource menubalk-app, en <strong>eqMac</strong> is een gratis EQ en systeembooster. Beide zijn het proberen waard als je budget nul is. Weet alleen dat ze community-onderhouden zijn, EQ-gericht of lichter op per-app beheer, en profielen plus ducken niet in één verzorgd pakket bundelen.</p>
<p>Waar <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> landt: het is het middenpad. Goedkoper dan SoundSource, capabeler en betrouwbaarder dan de gratis tools, en het staat in de <strong>Mac App Store</strong>, wat betekent door Apple gecontroleerd, gesandboxt, en het installeert schoon met <strong>geen DMG en geen audiodrivers of extensies</strong> om aan je systeem te bevestigen. Voor de meeste mensen is de eerlijke aanbeveling simpel: als je de oplossing met de minste moeite wilt die je ook boost, profielen en automatisch ducken geeft, is het de beste prijs-kwaliteit voor eenmalig €14,99.</p>

<h2>Snel antwoord, opnieuw gezegd</h2>
<blockquote>Om één Mac-app luider te maken dan zijn maximum, gebruik een per-app volumemixer met boost. Open SoundDial vanuit de menubalk, zoek de schuif van de stille app, en sleep hem voorbij 100%. Alleen die app wordt luider.</blockquote>

<p>Stop met vechten tegen één volumeschuif voor je hele Mac. Haal <a href="https://apps.apple.com/app/id6772792641">SoundDial in de Mac App Store</a> voor eenmalig €14,99, boost die stille app in seconden voorbij zijn limiet, en sla een profiel op zodat je er nooit meer aan hoeft te denken.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Hoe je stille video's en podcasts op je Mac versterkt",
    description: "Sommige YouTube-video's, podcasts en colleges zijn gewoon te stil, zelfs op 100%. Zo boost je per-app volume voorbij het maximum op macOS met SoundDial.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>De snelste, betrouwbare oplossing is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalk-mixer uit de Mac App Store die elke app zijn eigen volumeschuif geeft en een echte <strong>boost</strong> die voorbij 100% gaat. Open je browser of podcastspeler, sleep zijn schuif boven het maximum, en een stille video of college wordt direct luider — geen drivers, geen herstart.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Hoe je stille video's en podcasts op je Mac versterkt" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom sommige video's en podcasts gewoon te stil zijn</h2>
<p>Je draait je Mac op 100%, en het interview is nog steeds een gefluister. Dit is geen inbeelding. Audio wordt gemasterd op enorm verschillende luidheidsniveaus — een webinar opgenomen op een laptopmicrofoon, een stille indie-podcast, of een oude college-upload kan 15–20 dB onder een professioneel geproduceerde YouTube-video zitten. Je systeemvolume staat al op maximaal, dus er is geen ruimte meer over om te geven.</p>
<p>Hier is de haak: macOS heeft <strong>geen ingebouwde per-app volumemixer</strong>. Windows heeft er al jaren een (de Volumemixer in het systeemvak), maar op een Mac verplaatsen de volumetoetsen één globaal niveau voor alles. Er is geen native manier om te zeggen "maak alleen dit browsertabblad luider" — laat staan één enkele app voorbij 100% te duwen.</p>

<h2>De echte oplossing: per-app volumeboost</h2>
<p>Om een stille bron luider te maken dan je luidsprekers normaal toelaten, heb je software nodig die versterking toepast op <em>die app specifiek</em> en voorbij het 100%-plafond kan versterken. Dat is precies wat een per-app mixer met een boostfunctie doet.</p>
<p>Met <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> verschijnt elke draaiende app in een menubalk-lijst met zijn eigen schuif. Schuif een stille app omhoog naar 150% of 200% en de audio wordt in realtime versterkt. Omdat de boost per app is, blijft al het andere — je muziek, meldingen, een gesprek in een ander venster — op een normaal niveau. Je blaast niet je hele systeem open om één zachte podcast te horen.</p>
<blockquote>Globaal volume vraagt "hoe luid is de Mac?" Een per-app mixer vraagt "hoe luid is <em>deze</em> app?" — wat de vraag is die er echt toe doet wanneer één video stil is en de rest prima.</blockquote>

<h2>Hoe je een stille video of podcast boost, stap voor stap</h2>
<ul>
<li><strong>Installeer SoundDial</strong> vanuit de Mac App Store. Het is gesandboxt en door Apple gecontroleerd, dus het installeert schoon zoals elke andere app — geen aparte download, geen audiodriver, geen toestemmingsgevecht.</li>
<li><strong>Speel</strong> de stille video, podcastaflevering of college af in welke app je ook gebruikt — Safari, Chrome, een podcastclient, VLC.</li>
<li><strong>Klik op het SoundDial-pictogram</strong> in je menubalk. Je ziet een schuif voor elke app die op dat moment geluid maakt.</li>
<li><strong>Sleep de schuif van die app boven 100%</strong> — probeer eerst 150%, duw dan hoger als het nog te zacht is. De verandering is direct.</li>
<li><strong>Laat al het andere met rust.</strong> Alleen de app die je hebt geboost wordt luider; je systeem blijft in balans.</li>
</ul>
<p>Als je merkt dat je elke dag dezelfde apps boost — bijvoorbeeld een podcastspeler en je browser — kun je die opstelling opslaan als een <strong>volumeprofiel</strong> en die met één klik oproepen in plaats van elke keer opnieuw af te stellen.</p>

<h2>Een woord van waarschuwing over boosten</h2>
<p>Versterken voorbij 100% voegt gain toe, en gain heeft grenzen. Duw een erg stille, lage-kwaliteitsopname hard genoeg en je hoort mogelijk clipping of vervorming — dat is de bron die zonder schoon signaal komt te zitten, geen gebrek in de app. Boost totdat het comfortabel hoorbaar is, en zet dan terug als het schril begint te klinken. Op ingebouwde laptopluidsprekers kan extreme boost ook de drivers belasten, dus ga daar voorzichtiger te werk dan met goede koptelefoons of externe luidsprekers.</p>

<h2>Hoe zit het met gratis of ingebouwde opties?</h2>
<p>Je hebt alternatieven, en het is de moeite waard eerlijk over ze te zijn:</p>
<ul>
<li><strong>Systeemvolume + app-schuiven.</strong> Sommige spelers (VLC, een paar browsers via extensies) laten je hun eigen audio boosten. Prima als je het alleen ooit in één app nodig hebt — maar je zit vast aan het instellen van elke app apart, zonder uniforme controle en zonder profielen.</li>
<li><strong>eqMac</strong> is een gratis EQ en booster. Het kan systeembrede luidheid verhogen, maar het is een globaal gereedschap, geen schone per-app mixer, en het werkt op het niveau van de hele uitvoer.</li>
<li><strong>Background Music</strong> is gratis en opensource en biedt inderdaad per-app volume. Maar het vertrouwt op een audio-capture-opstelling die kan kapotgaan op nieuwere versies van macOS, en het mist een speciale boost, profielen en automatisch ducken.</li>
<li><strong>FineTune</strong> is een gratis opensource menubalk-app — een lichte optie als je de basis wilt en community-onderhouden software niet erg vindt.</li>
<li><strong>SoundSource</strong> van Rogue Amoeba (~$39) is het professionele zwaargewicht: per-app EQ, uitvoerrouting, de hele mikmak. Het vereist ook een download en een audio-capture driver, en het kost meer dan het dubbele van SoundDial. Overkill als je alleen stille audio luider wilt maken.</li>
</ul>

<h2>Waarom SoundDial de praktische keuze is</h2>
<p>SoundDial zit in de sweet spot voor precies dit probleem. Het is <strong>eenmalig €14,99</strong> — geen abonnement — en het leeft in de <strong>Mac App Store</strong>, wat betekent dat het gesandboxt is, door Apple gecontroleerd, en installeert zonder DMG of systeemextensie om te vertrouwen. Je krijgt de per-app boost waar je eigenlijk voor kwam, plus profielen, per-app dempen, snel wisselen van uitvoer, en <strong>automatisch ducken</strong> dat andere apps zachter zet wanneer je je op één moet concentreren. Het doet het luide ding simpel, en doet de rest goed.</p>

<p><strong>Moe van het je oren spitsen om stille video's en podcasts te horen?</strong> <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> voor €14,99 en geef elke app zijn eigen volume — met de boost om alles helder te horen.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Hoe je een ander volume voor elke app op Mac instelt",
    description: "macOS heeft geen ingebouwde per-app volumemixer. Zo stel je onafhankelijke, blijvende volumeniveaus in voor elke app op Mac met SoundDial en de alternatieven.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>macOS heeft geen ingebouwde manier om een ander volume voor elke app in te stellen, dus je hebt een menubalk-volumemixer nodig. De snelste, meest betrouwbare oplossing is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een Mac App Store-app die elke applicatie zijn eigen volumeschuif, per-app dempen en een boost geeft die stille apps voorbij 100% duwt. Stel je niveaus één keer in en ze blijven staan.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Hoe je een ander volume voor elke app op Mac instelt" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom Mac geen per-app volumeregeling heeft</h2>
<p>Als je van Windows bent overgestapt, ben je waarschijnlijk op zoek gegaan naar het equivalent van de Windows Volumemixer, dat paneeltje waar elke app zijn eigen schuif heeft. Het is er niet. macOS biedt alleen één globaal systeemvolume. Of het nu een YouTube-video, een Zoom-gesprek, Spotify of een spel is, ze delen allemaal hetzelfde master-niveau.</p>
<p>Dat is prima totdat het dat niet is. Discord-chat overstemt je muziek. Een browseradvertentie knalt op vol volume terwijl je podcast er zachtjes onder speelt. Je spel is oorverdovend maar het gesprek op de achtergrond is te zacht. De enige "oplossing" die Apple je geeft is elke app openen en het interne volume handmatig aanpassen, als de app dat al heeft, en het elke sessie opnieuw doen.</p>
<p>Om echte per-app controle te krijgen heb je een klein hulpprogramma nodig dat tussen je apps en je uitvoerapparaat zit. Hieronder lees je hoe je het goed doet, plus eerlijke opmerkingen over de alternatieven.</p>

<h2>De snelste manier: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> leeft in je menubalk en somt elke app op die op dat moment audio afspeelt. Elk krijgt een onafhankelijke schuif. Hier is de hele workflow:</p>
<ul>
<li><strong>Installeer vanuit de Mac App Store.</strong> Het is door Apple gecontroleerd en gesandboxt, dus er is geen DMG, geen audiodriver, en geen kernel- of systeemextensie om goed te keuren. Het installeert als een normale app en kan op dezelfde manier worden verwijderd.</li>
<li><strong>Klik op het menubalk-pictogram.</strong> Je ziet een schuif voor elke actieve app, plus een masterregeling.</li>
<li><strong>Versleep om niveaus in te stellen.</strong> Zet Discord zachter, duw Spotify omhoog, demp de app van een lawaaierig browsertabblad helemaal met één klik.</li>
<li><strong>Boost stille apps.</strong> Als een app te zacht is zelfs op 100%, duw hem dan boven 100% met per-app boost.</li>
<li><strong>Sla een profiel op.</strong> Bewaar je "gamen"-, "werkgesprek"- of "muziek"-mix en schakel er direct tussen in plaats van elke dag schuiven te verslepen.</li>
</ul>
<p>Twee functies zijn het vermelden waard omdat ze de meest vervelende scenario's oplossen:</p>
<ul>
<li><strong>Automatisch ducken</strong> verlaagt automatisch andere apps wanneer een gekozen app speelt, zodat je muziek zakt wanneer een gesprek binnenkomt en daarna terugkeert, zonder handmatig geknutsel.</li>
<li><strong>Snel wisselen van uitvoer</strong> laat je springen tussen koptelefoon en luidsprekers vanuit hetzelfde menu zonder in Systeeminstellingen te duiken.</li>
</ul>
<p>Omdat niveaus per app worden onthouden en opgeslagen in profielen, is dit het deel dat de meeste mensen eigenlijk willen: je stelt het één keer in en het <em>blijft</em> ingesteld.</p>

<h2>De gratis en betaalde alternatieven, eerlijk vergeleken</h2>
<p>SoundDial is niet de enige optie, en afhankelijk van je behoeften kan een gratis tool genoeg zijn. Hier is een eerlijk overzicht.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource is het professionele zwaargewicht. Naast per-app volume doet het per-app EQ en volledige uitvoerrouting, zodat je één app naar de koptelefoon en een andere naar de luidsprekers kunt sturen. Het is echt uitstekend. De afwegingen: het kost rond de $39, en het is geen schone App Store-installatie, het is een directe download die vereist dat er een audio-capture driver aan je systeem wordt toegevoegd. Als je een audioprofessional bent die EQ en routing nodig heeft, is het het waard. Als je gewoon elke app op het juiste volume wilt, is het meer gereedschap en meer installatie dan je nodig hebt.</p>

<h2>Background Music (opensource, gratis)</h2>
<p>Background Music is een gratis, opensource-app die per-app volume en automatisch pauzeren biedt. De haak is betrouwbaarheid: het installeert een virtueel audioapparaat en heeft een geschiedenis van kapotgaan op nieuwere macOS-releases, soms met herinstallaties of fixes na updates. Het mist ook boost, opgeslagen profielen en echt automatisch ducken. Geweldig als je gratis wilt en af en toe onderhoud niet erg vindt.</p>

<h2>FineTune en eqMac</h2>
<p>FineTune is een gratis, opensource menubalk-app, een licht startpunt. eqMac is een gratis equalizer met een systeembrede booster, meer gericht op EQ en algehele gain dan op het geven van een eigen blijvende schuif aan elke app. Beide zijn het proberen waard als je behoefte beperkt is, maar geen van beide draait om de "ander volume per app, opgeslagen als profielen"-workflow.</p>

<h2>Welke moet je kiezen?</h2>
<ul>
<li><strong>Wil je dat het gewoon werkt, schoon, met profielen en automatisch ducken?</strong> SoundDial voor eenmalig €14,99, uit de App Store, zonder drivers om te installeren.</li>
<li><strong>Heb je per-app EQ en audiorouting nodig en vind je de prijs of de driver niet erg?</strong> SoundSource.</li>
<li><strong>Wil je gratis en vind je het niet erg om te knutselen wanneer macOS wordt bijgewerkt?</strong> Background Music, FineTune of eqMac.</li>
</ul>
<p>Het echte voordeel van SoundDial is de combinatie: onafhankelijk volume, dempen en boost voor elke app, opgeslagen in schakelbare profielen, met automatisch ducken, allemaal binnen een gesandboxte App Store-download die je kunt vertrouwen en in één klik kunt verwijderen, voor eenmalig €14,99 in plaats van een abonnement.</p>

<blockquote>Geen driver, geen extensie, geen DMG. Stel het volume van elke app één keer in, sla het op als profiel, en laat automatisch ducken de rest afhandelen.</blockquote>

<p>Klaar om elke app zijn eigen volume te geven? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> en stel je perfecte mix in ongeveer een minuut in.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Zet één app zachter dan al het andere op Mac",
    description: "Eén luide app die de rest overstemt op je Mac? Hier is de snelste, betrouwbare manier om het volume van één app zachter te zetten zonder de andere aan te raken.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Om één app zachter te zetten terwijl al het andere blijft staan, gebruik je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalk-volumemixer per app voor macOS. Open hem, vind de luide app in de lijst en sleep zijn schuif omlaag. Die app wordt meteen zachter terwijl je muziek, gesprekken en andere audio hun eigen niveaus houden. Het is de snelste, meest betrouwbare fix.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zet één app zachter dan al het andere op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom macOS dit zo moeilijk maakt</h2>

<p>Hier is de frustrerende waarheid: macOS heeft geen ingebouwde volumemixer per app. Windows heeft er al jaren een (rechtsklik op het volume-icoon, open de volumemixer, klaar), maar op een Mac regelen de volumetoetsen en de menubalkschuif maar één ding: de master-uitvoer. Zet hem lager en alles gaat samen zachter. Zet hem hoger en de luide app is nog steeds luid, gewoon luider samen met de rest.</p>

<p>Dus wanneer de geluidseffecten van een game knallen, een browsertabblad automatisch een advertentie afspeelt, of meldingspiepjes steeds over je podcast heen pieken, zijn je enige native opties onhandig: het hele systeem dempen, in de eigen volume-instelling van elke app duiken (als het die al heeft), of de boosdoener helemaal afsluiten. Niets daarvan laat je simpelweg zeggen "maak deze ene app zachter en laat al het andere met rust."</p>

<h2>De snelle fix: een volumemixer per app</h2>

<p>Een volumemixer per app geeft elke draaiende app zijn eigen onafhankelijke schuif. Dat is precies de bediening die je mist. Met <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ziet het er zo uit:</p>

<ul>
<li><strong>Open de menubalkmixer.</strong> Klik op het SoundDial-icoon en je ziet een live lijst van elke app die momenteel audio afspeelt.</li>
<li><strong>Vind de luide.</strong> De game, de browser, het videogesprek, de meldingsgeluiden, wat de rest ook overstemt.</li>
<li><strong>Sleep zijn schuif omlaag.</strong> Zet hem op 40%, 20%, waar het gebalanceerd voelt. De verandering is meteen en beïnvloedt alleen die app.</li>
<li><strong>Laat al het andere met rust.</strong> Je muziekspeler, je gesprek, je andere tabbladen, ze houden allemaal het volume dat je voor ze instelde.</li>
</ul>

<p>Je kunt ook een enkele app volledig dempen met één klik terwijl andere blijven spelen, of een stille app boven 100% boosten als hij te zacht is. Geen app herstarten, geen menugegraaf.</p>

<h2>Veelvoorkomende gevallen waar dit je redt</h2>

<ul>
<li><strong>Een luide game over achtergrondmuziek.</strong> Zet de game op een comfortabel niveau en houd je playlist op vol volume eronder.</li>
<li><strong>Browseradvertenties en video die pieken.</strong> Zet je browser lager vast zodat een onverwachte autoplay je nooit overvalt.</li>
<li><strong>Meldingspiepjes over een gesprek of podcast.</strong> Zet de meldingszware app zachter zonder de audio waar je echt om geeft het zwijgen op te leggen.</li>
<li><strong>Een stil videogesprek onder luide media.</strong> In plaats van de luide app zachter te zetten, boost je het gesprek boven 100% zodat je mensen duidelijk kunt horen.</li>
</ul>

<h2>Stel het één keer in met volumeprofielen en auto-ducking</h2>

<p>Eén luide app oplossen is fijn, maar je wilt waarschijnlijk dat het opgelost blijft. SoundDial heeft twee functies die dit permanent maken:</p>

<p>Met <strong>volumeprofielen</strong> kun je een set niveaus per app opslaan en met een klik terughalen. Bouw een "Gaming"-profiel waar de game op 30% zit en muziek op 100%, en een "Werk"-profiel waar gesprekken geboost zijn en al het andere getemperd. Wissel van context zonder elke keer de schuiven opnieuw te slepen.</p>

<p><strong>Auto-ducking</strong> verlaagt automatisch andere apps wanneer een gekozen app speelt, en brengt ze daarna terug, zodat een luide app je audio überhaupt nooit volledig kaapt. Tussen profielen, ducking en snel schakelen van uitvoer (spring tussen speakers en koptelefoon zonder Systeeminstellingen te openen) stel je je balans één keer in en houd je op met het bewaken van het volume.</p>

<h2>Hoe SoundDial zich verhoudt tot de alternatieven</h2>

<p>Er zijn andere manieren om volume per app op een Mac te krijgen. Hier is een eerlijke blik:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> is echt van proniveau: EQ per app en volledige uitvoer-routing bovenop volumebediening. Maar het kost meer dan het dubbele, en het heeft een aparte download plus een audio-capture-driver nodig. Wil je een toolkit van studioniveau, dan is het uitstekend. Wil je alleen één app zachter zetten, dan is het meer dan je nodig hebt.</li>
<li><strong>Background Music</strong> is gratis en open-source, wat mooi is, maar het kan breken op nieuwere macOS-versies, en het mist volumeboost, profielen en auto-ducking.</li>
<li><strong>FineTune</strong> is een gratis open-source menubalk-app, en <strong>eqMac</strong> is een gratis EQ met een booster. Beide zijn het proberen waard als gratis je prioriteit is, maar je ruilt verfijning, betrouwbaarheid en functies in voor de prijs.</li>
</ul>

<p>SoundDial zit in de sweet spot: €14,99 eenmalig, geen abonnement. Omdat het in de Mac App Store zit, is het door Apple gecontroleerd en sandboxed, en installeert het schoon zonder DMG, zonder audiodrivers en zonder systeemextensies om goed te keuren. Je krijgt de functies die er voor dit probleem echt toe doen, volume, demping, boost, profielen en auto-ducking per app, zonder een prijskaartje van $39 of een broos gratis gereedschap.</p>

<h2>De conclusie</h2>

<p>macOS laat je niet uit zichzelf een enkele app zachter zetten, maar dat is een gat dat je in seconden kunt dichten. Installeer een mixer per app, sleep de schuif van de luide app omlaag, en de rest van je audio blijft precies waar je hem wilt. Sla een profiel op en je zult hier nooit meer mee vechten.</p>

<p><strong>Klaar om de ene app die de rest steeds overstemt het zwijgen op te leggen?</strong> Haal <a href="https://apps.apple.com/app/id6772792641">SoundDial in de Mac App Store</a> voor €14,99, één betaling, geen drivers, geen abonnement.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mac-audiomixer voor streamers: balanceer mic, game & muziek",
    description: "De snelste manier om mic, game-audio, muziek en meldingen te balanceren tijdens het streamen op Mac. SoundDial geeft je een volumemixer per app met profielen en ducking.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Om je mic, game, muziek en meldingen te balanceren tijdens het streamen op een Mac, is de snelste betrouwbare fix <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalk-volumemixer per app. macOS heeft geen ingebouwde mixer, dus met SoundDial kun je onafhankelijke niveaus per app instellen, stille bronnen boosten, streamingprofielen opslaan en muziek automatisch dippen wanneer je praat.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac-audiomixer voor streamers: balanceer mic, game & muziek" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Het probleem: macOS heeft geen volumebediening per app</h2>
<p>Windows heeft al jaren de volumemixer. macOS levert er nog steeds geen. Je systeemvolumeschuif beweegt alles tegelijk, wat nutteloos is als je live bent. Tijdens een stream jongleer je met minstens vier bronnen die allemaal om dezelfde uitvoer vechten:</p>
<ul>
<li><strong>Je stem / mic-monitoring</strong> — moet boven alles uitkomen.</li>
<li><strong>Game-audio</strong> — luid, dynamisch en gevoelig voor pieken tijdens de actie.</li>
<li><strong>Achtergrondmuziek</strong> — moet stil blijven onder je commentaar.</li>
<li><strong>Meldingen en chatgeluiden</strong> — Discord, Stream Deck, volgersmeldingen, notificaties.</li>
</ul>
<p>Zonder bediening per app eindig je met het bijsturen van de in-app-schuif van de game, Spotify met de hand dempen en bidden dat een luide cutscene je kijkers niet wegblaast. Dat is geen mix, dat is schadebeperking.</p>

<h2>Wat een goede streamingmixer moet doen</h2>
<p>Een op creators gerichte audio-opstelling op Mac zou je vier dingen moeten geven: onafhankelijke niveaus per app, de mogelijkheid om een te stille bron te boosten, opgeslagen configuraties die je meteen kunt terughalen, en automatische ducking zodat muziek zakt op het moment dat je spreekt. SoundDial dekt alle vier vanuit de menubalk.</p>

<h3>1. Onafhankelijk volume voor elke app</h3>
<p>Zet de game op 60%, muziek op 25%, Discord op 80% en je browser op 40% — elke app heeft zijn eigen schuif. Niets lekt in iets anders. Je kunt ook meteen per app dempen wanneer een bron zich midden in een stream misdraagt, zonder de app zelf aan te raken.</p>

<h3>2. Volumeboost voor stille bronnen</h3>
<p>Sommige apps en games zijn simpelweg te stil, zelfs op 100%. De boost per app van SoundDial duwt een bron voorbij zijn normale plafond zodat een mompelige game of een video met laag volume zit waar je hem in de mix nodig hebt — geen herencodering, geen plugins.</p>

<h3>3. Volumeprofielen voor verschillende scènes</h3>
<p>Dit is de functie die streamers de meeste tijd bespaart. Je "Just Chatting"-mix (muziek omhoog, game omlaag) verschilt van je "Boss Fight"-mix (game omhoog, muziek bijna stil), die weer verschilt van je "BRB"-mix. Sla elk op als profiel en wissel met één klik in plaats van live vier schuiven te slepen.</p>

<h3>4. Auto-ducking zodat muziek onder je stem duikt</h3>
<p>Auto-ducking verlaagt automatisch achtergrondaudio wanneer je praat en brengt het terug wanneer je stopt. Voor solostreamers is dit het verschil tussen commentaar dat helder is en muziek die je stem constant begraaft — automatisch afgehandeld in plaats van handmatig.</p>

<h2>Waar OBS in past</h2>
<p>OBS is je uitzendtool, niet je desktop-volumemixer. OBS regelt welke niveaus in de stream gaan via zijn audiomixerpaneel en filters, maar het werkt vanuit de audiobronnen die het vastlegt — het reikt niet in afzonderlijke macOS-apps om ze op systeemniveau zachter te zetten. Op Mac is het schoon binnenkrijgen van desktop-audio per app in OBS altijd het pijnlijke deel geweest.</p>
<p>De praktische workflow: gebruik SoundDial om de daadwerkelijke niveaus per app op je Mac in te stellen zodat wat eruit komt al gebalanceerd is, en laat OBS dan de uitzendniveaus vastleggen en fijnafstellen. Stel de mix één keer in bij de bron en OBS heeft veel minder om tegen te vechten. Met snel schakelen van uitvoer in SoundDial kun je ook tussen scènes door tussen koptelefoon en speakers springen zonder in Systeeminstellingen te duiken.</p>

<h2>SoundDial vs. de alternatieven</h2>
<p>Je hebt opties, en eerlijkheid telt hier:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> — van proniveau met EQ per app en volledige uitvoer-routing. Het is uitstekend, maar het kost meer dan het dubbele, vereist een directe download en installeert een audio-capture-driver. Overkill als je vooral schone niveaus per app, boost en ducking nodig hebt.</li>
<li><strong>Background Music (gratis, open-source)</strong> — echt nuttig en gratis, maar het kan breken op nieuwere macOS-versies, en het heeft geen boost, geen profielen en geen auto-ducking — precies de functies waar streamers op leunen.</li>
<li><strong>FineTune (gratis, open-source menubalk-app)</strong> — lichtgewicht bediening per app, maar een communityproject zonder de combinatie van profielen-plus-ducking gebouwd voor livestreamen.</li>
<li><strong>eqMac (gratis EQ + booster)</strong> — goed voor toonvorming en boosten, maar het is een equalizer, geen streamingmixer per app.</li>
</ul>
<p>De invalshoek van SoundDial: het is een <strong>eenmalige aankoop van €14,99</strong> in de <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — door Apple gecontroleerd, sandboxed, en het installeert schoon zonder DMG en zonder audiodrivers of systeemextensies. Dat laatste telt voor streamers: minder componenten op kernelniveau betekent minder verrassende storingen wanneer macOS de avond voor je stream een update krijgt.</p>

<h2>De eerlijke afweging</h2>
<p>Als je EQ van uitzendkwaliteit en complexe routingketens nodig hebt, verdient SoundSource zijn prijs. Wil je een gratis knutselgereedschap en vind je een af en toe storing niet erg, dan volstaan Background Music of FineTune. Maar wil je de mix die streamen daadwerkelijk vereist — niveaus per app, boost, opgeslagen scèneprofielen en auto-ducking — vanuit een veilige App Store-installatie die macOS-updates overleeft, dan is SoundDial het meest directe pad voor het geld.</p>

<p><strong>Klaar om je streamaudio op te lossen?</strong> Haal <a href="https://apps.apple.com/app/id6772792641">SoundDial in de Mac App Store</a> voor €14,99 — stel je mic-, game-, muziek- en meldingsniveaus één keer in, sla ze op als profielen en laat auto-ducking je stem bovenaan houden.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Zo los je gekraak en geplof in audio op macOS Tahoe op",
    description: "Gekraak of geplof in de audio na de update naar macOS Tahoe 26? Los het op door de sample rate gelijk te trekken, CoreAudio te resetten, je Bluetooth-codec te controleren en plug-inconflicten op te ruimen. Hier is de volledige volgorde van het oplossen.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Gekraak en geplof na de update naar macOS Tahoe 26 komt bijna altijd door een sample-ratemismatch, een haperende Bluetooth-codec-onderhandeling of een vastgelopen CoreAudio-proces. Los het op door de sample rate van de uitvoer gelijk te trekken in Audio MIDI Setup, <code>coreaudiod</code> te resetten, je Bluetooth-koptelefoon te vergeten en opnieuw te koppelen, en audio-plug-inhosts af te sluiten. Werk ze hieronder op volgorde af.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zo los je gekraak en geplof in audio op macOS Tahoe op" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Begin met de goedkope oplossingen</h2>

<p>Voordat je iets technisch aanraakt, sluit je de twee dingen uit die de meeste gevallen in minder dan een minuut oplossen:</p>

<ul>
<li><strong>Herstart de Mac.</strong> Een Tahoe-update laat audio-daemons verrassend vaak in een half-gemigreerde staat achter. Een schone herstart laadt CoreAudio vanaf nul en verhelpt het merendeel van het gekraak na de update.</li>
<li><strong>Trek het uitvoerapparaat los en sluit het weer aan.</strong> Als het een USB-DAC, dock of audio-interface is, koppel die los, wacht een paar seconden en sluit hem weer aan. Probeer ook een andere USB-poort, bij voorkeur een die direct op de Mac zit in plaats van via een hub. Hubs en beeldschermen die audio doorgeven zijn een veelvoorkomende bron van geplof.</li>
</ul>

<p>Blijft het geluid na een herstart bestaan, dan is het een configuratieprobleem, geen storing. Ga door.</p>

<h2>Trek de sample rate gelijk (de meest voorkomende oorzaak)</h2>

<p>Het klassieke Tahoe-gekraak komt door een sample-ratemismatch tussen wat je apparaat wil en wat macOS verstuurt. Als een app audio van 44,1 kHz afspeelt terwijl het systeem op 48 kHz staat vastgezet (of andersom), kan het herbemonsteren stotteren of ploffen.</p>

<ul>
<li>Open <strong>Audio MIDI Setup</strong> (in Programma's → Hulpprogramma's, of zoek via Spotlight).</li>
<li>Selecteer je uitvoerapparaat in de zijbalk links.</li>
<li>Kijk naar het menu <strong>Format</strong>. Probeer het in te stellen op <strong>48000.0 Hz, 2ch-24bit Integer</strong> en test.</li>
<li>Blijft het ploffen, schakel dan over naar <strong>44100.0 Hz</strong> en test opnieuw.</li>
<li>Zorg voor interfaces dat de sample rate overeenkomt met de projectrate van je DAW.</li>
</ul>

<p>Het wisselen van het format dwingt CoreAudio ook om de verbinding opnieuw te onderhandelen, wat op zichzelf al veel gevallen oplost, zelfs als je weer op dezelfde waarde uitkomt.</p>

<h2>Reset CoreAudio</h2>

<p>CoreAudio draait als een achtergronddaemon genaamd <code>coreaudiod</code>. Na een grote macOS-update kan die vastzitten aan verouderde apparaatstatus. Hem herstarten is veilig en werkt direct, zonder herstart.</p>

<p>Open Terminal en voer uit:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Voer je wachtwoord in wanneer daarom wordt gevraagd. Je audio valt een seconde weg en daarna wordt de daemon automatisch opnieuw gestart met een schone lei. Dit is de meest effectieve oplossing voor gekraak dat uit het niets opduikt op een machine die daarvoor prima werkte.</p>

<h2>Controleer je Bluetooth-koptelefoon en codec</h2>

<p>Als het gekraak alleen optreedt bij AirPods of andere Bluetooth-koptelefoons, ligt het probleem meestal aan de codec-onderhandeling, niet aan je speakers. De kwaliteit van draadloze audio verslechtert wanneer de verbinding overbelast is of wanneer macOS overschakelt naar een gespreksmodus met lage bandbreedte.</p>

<ul>
<li><strong>Vergeet het apparaat en koppel het opnieuw.</strong> Ga naar Systeeminstellingen → Bluetooth, verwijder de koptelefoon en koppel hem opnieuw. Dit reset de onderhandelde codec.</li>
<li><strong>Let op de val naar gespreksmodus.</strong> Wanneer een app de microfoon opent, schakelt macOS Bluetooth-headsets naar een tweerichtingsprofiel van lage kwaliteit, wat krakerig klinkt. Sluit vergader- en spraakapps die je niet gebruikt af en de kwaliteit keert terug.</li>
<li><strong>Verminder interferentie.</strong> Ga uit de buurt van drukke 2,4 GHz-omgevingen en koppel Bluetooth-apparaten los die je niet nodig hebt. Een drukke radioband veroorzaakt sporadisch geplof.</li>
<li><strong>Schakel de microfooninvoer uit</strong> in de instellingen van een app als je alleen wilt luisteren, zodat macOS het afspeelprofiel van hoge kwaliteit behoudt.</li>
</ul>

<h2>Sluit audio-plug-inhosts en virtuele drivers af</h2>

<p>Software van derden die een systeemextensie of virtueel apparaat installeert, is een frequente boosdoener na een OS-sprong, omdat kernel- en audio-extensies vaak bijgewerkt moeten worden voor een nieuwe macOS-versie. Verdachten zijn onder meer virtuele audio-routers, equalizer-apps, loopback-tools en oudere driver-gebaseerde hulpprogramma's.</p>

<ul>
<li>Sluit elke equalizer-, audio-router- of loopback-app af en test of het gekraak stopt.</li>
<li>Controleer Systeeminstellingen → Algemeen → Inlogitems &amp; Extensies op audio-extensies die mogelijk een update of verwijdering nodig hebben.</li>
<li>Werk die apps bij naar hun Tahoe-compatibele versies, of verwijder degene die je niet meer gebruikt. Gestapelde audiodrivers geven na een grote update vaak conflicten met elkaar.</li>
</ul>

<p>Als het afsluiten van een van deze apps het geplof tot zwijgen brengt, heb je je boosdoener gevonden. Installeer de huidige versie opnieuw of laat hem uit.</p>

<h2>Grens het af: systeembreed of één app?</h2>

<p>Bepaal of het geluid overal optreedt of alleen in specifieke software. Speel een lokaal audiobestand af, dan een browservideo, dan een muziekapp. Als slechts één app kraakt, ligt de oplossing in de audio-instellingen of een update van die app, niet in macOS. Is het systeembreed, dan zit het antwoord in de stappen hierboven.</p>

<p>Als je nog steeds vastzit, start dan op in Veilige modus (houd de aan/uit-knop ingedrukt op Apple silicon, kies dan je opstartschijf terwijl je Shift ingedrukt houdt). In Veilige modus worden geen extensies van derden geladen. Is de audio daar schoon, dan is een inlogitem of driver de oorzaak, en kun je ze één voor één weer inschakelen om hem te vinden.</p>

<h2>Zodra je audio schoon is</h2>

<p>Gekraak is een driver- en sample-rateprobleem, dus de bovenstaande oplossingen zijn wat het daadwerkelijk verhelpt. Maar zodra het afspelen stabiel is, merk je misschien een andere beperking op: macOS heeft nog steeds geen ingebouwde volumemixer per app, zoals Windows die wel heeft. Je kunt een luide app niet zachter zetten zonder alles zachter te zetten.</p>

<p>Dat is het gat dat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> opvult. Het is een menubalkmixer die elke app zijn eigen volumeschuif geeft, demping per app en zelfs een volumeboost voor stille apps, plus snel schakelen van uitvoer. Het lost geen gekraak op, maar zodra je audio gezond is, maakt het de dagelijkse bediening veel eenvoudiger.</p>

<p>Werk de bovenstaande stappen op volgorde af, en begin met de herstart en de sample-ratecontrole. Wil je later echte bediening per app op je schone audio-opstelling, dan is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> een eenmalige aankoop van €14,99 in de Mac App Store, sandboxed, zonder drivers of DMG om te installeren.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods stotteren of vallen weg op Mac (Tahoe-fix)",
    description: "AirPods die stotteren, wegvallen of audio laten haperen op macOS Tahoe komt bijna altijd door Bluetooth-interferentie of geschakel bij automatisch overschakelen. Hier lees je hoe je opnieuw koppelt, 2,4GHz-drukte vermindert en de overdrachten stopt die het afspelen verstoren.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>AirPods die stotteren of wegvallen op macOS Tahoe komt bijna altijd door Bluetooth-interferentie, niet door een kapotte headset. De gebruikelijke boosdoeners zijn 2,4GHz-wifi en routerdrukte, agressief automatisch schakelen tussen apparaten, en een verouderde koppeling. Koppel de AirPods opnieuw, schakel automatisch overschakelen uit en ga uit de buurt van drukke 2,4GHz-kanalen om de meeste gevallen op te lossen.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods stotteren of vallen weg op Mac (Tahoe-fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom AirPods juist op de Mac wegvallen</h2>

<p>AirPods gebruiken Bluetooth, dat de drukke 2,4GHz-radioband deelt met wifi, magnetrons, USB 3-apparaten en zowat elke slimme stekker in huis. Je Mac is een drukke radio: hij jongleert met wifi, Bluetooth, AirDrop en Continuïteitsfuncties op overlappende antennes. Als die band overbelast raakt, is Bluetooth-audio het eerste dat stottert, omdat het niet tegen weggevallen pakketten kan zoals een bestandsoverdracht dat wel kan.</p>

<p>Tahoe heeft je AirPods niet op magische wijze slechter gemaakt, maar een verse macOS-installatie reset vaak het radiogedrag, schakelt Continuïteitsoverdrachten weer in en onderhandelt codecs opnieuw. Daarom lijken problemen vlak na een update op te duiken. Het goede nieuws: de oplossingen zijn goed begrepen en grotendeels gratis.</p>

<h2>Fix 1: Koppel de AirPods opnieuw (doe dit eerst)</h2>

<p>Een verouderde of beschadigde koppeling overleeft herstarts en veroorzaakt sporadische onderbrekingen die willekeurig lijken. Verwijder de verbinding volledig en voeg hem opnieuw toe:</p>

<ul>
<li>Open <strong>Systeeminstellingen, Bluetooth</strong>.</li>
<li>Klik op de info-knop (i) naast je AirPods en kies <strong>Vergeet dit apparaat</strong>.</li>
<li>Stop de AirPods in hun oplaadetui, sluit het deksel, wacht 15 seconden en open het weer.</li>
<li>Houd de knop op de achterkant van het etui ingedrukt totdat het lampje wit knippert.</li>
<li>Koppel opnieuw vanuit de Bluetooth-lijst.</li>
</ul>

<p>Zorg meteen dat de firmware van de AirPods actueel is. Er is geen handmatige updater, maar door ze een tijdje in het etui bij een verbonden iPhone of Mac te laten liggen, kunnen ze op de achtergrond updaten.</p>

<h2>Fix 2: Schakel automatisch overschakelen uit</h2>

<p>Dit is de allergrootste oorzaak van "wegvallen" voor mensen in het Apple-ecosysteem. Je AirPods proberen je te volgen tussen je Mac, iPhone en iPad. Elke keer dat je telefoon denkt dat hij de audio moet grijpen, hapert de verbinding op je Mac, wat een onderbreking van een halve seconde midden in je podcast oplevert.</p>

<ul>
<li>Op de Mac: Bluetooth, klik op (i) naast de AirPods, zet <strong>Verbind met deze Mac</strong> op <strong>Laatst verbonden met deze Mac</strong> in plaats van Automatisch.</li>
<li>Op de iPhone: Instellingen, tik op je AirPods, <strong>Verbind met deze iPhone</strong>, kies <strong>Laatst verbonden met deze iPhone</strong>.</li>
</ul>

<p>Dit stopt het touwtrekken tussen apparaten. Je kiest handmatig waar de audio naartoe gaat, wat een kleine prijs is voor stabiel afspelen.</p>

<h2>Fix 3: Verminder 2,4GHz-drukte</h2>

<p>Als onderbrekingen optreden tijdens videogesprekken, downloads of wanneer anderen aan het streamen zijn, is je radioband verzadigd. Een paar praktische zetten:</p>

<ul>
<li><strong>Gebruik de 5GHz-wifiband</strong> op je Mac. Geef in je routerinstellingen het 5GHz-netwerk een aparte naam en maak daar verbinding mee. Dit maakt de 2,4GHz-band vrij voor Bluetooth.</li>
<li><strong>Verplaats USB 3- en Thunderbolt-hubs weg</strong> van je Mac en AirPods. USB 3 is een beruchte 2,4GHz-ruisbron; een hub naast je laptop kan Bluetooth van centimeters afstand verstoren.</li>
<li><strong>Verander het 2,4GHz-kanaal van je router</strong> naar 1, 6 of 11 (de niet-overlappende opties) en vermijd drukke kanalen waar je buren op zitten.</li>
<li><strong>Houd zicht op de lijn.</strong> Lichamen en muren absorberen 2,4GHz. Als je Mac achter je of in een tas ligt, worden de onderbrekingen erger.</li>
</ul>

<blockquote>Wifi 6E- en Wifi 7-routers kunnen indirect helpen: door je apparaten naar 6GHz te sturen, maak je de 2,4GHz-band vrij waarvan Bluetooth afhankelijk is. Maar een slecht geconfigureerde mesh die je steeds terugstuurt naar 2,4GHz kan het juist erger maken. Controleer op welke band je daadwerkelijk zit.</blockquote>

<h2>Fix 4: Reset de Bluetooth- en Continuïteitsstack</h2>

<p>Als opnieuw koppelen niet standhield, reset dan de radio's zelf:</p>

<ul>
<li>Schakel Bluetooth uit en aan vanuit de menubalk, en herstart daarna de Mac. Een herstart verhelpt een verrassend aantal tijdelijke audiostoringen.</li>
<li>Reset de SMC/NVRAM op Intel-Macs, of schakel gewoon volledig uit (niet herstarten) gedurende 30 seconden op Apple Silicon.</li>
<li>Als je AirDrop of Handoff niet gebruikt, vermindert het uitschakelen van Handoff in Systeeminstellingen, Algemeen, AirDrop &amp; Handoff de radio-achtergrondruis.</li>
</ul>

<h2>Wat het niet oplost (en wat een volumemixer wel doet)</h2>

<p>Voor de duidelijkheid over de reikwijdte: niets hiervan is een softwarematig volumeprobleem, en geen enkele volume-app kan een Bluetooth-verbinding repareren. Als je audio <em>wegvalt</em>, jaag dan op het radioprobleem hierboven. Apps als <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> regelen volume per app, demping en het schakelen van uitvoer, ze raken de Bluetooth-stack niet aan, dus ze stoppen het stotteren niet. Waar een mixer echt helpt is bij de aangrenzende ergernis die veel AirPods-gebruikers met wegvallen verwarren: de ene app knalt terwijl de andere te zacht is, of je moet snel van uitvoer wisselen. Dat is een volumebalansprobleem, geen verbindingsprobleem.</p>

<p>Diagnosticeer eerlijk. Als de audio even wegvalt en terugkeert, is het interferentie of automatisch overschakelen. Als de niveaus gewoon ongelijk zijn tussen apps, is dat een mixprobleem dat je met software wél kunt oplossen.</p>

<h2>Snelle checklist</h2>

<ul>
<li>Vergeet de AirPods en koppel ze opnieuw.</li>
<li>Zet zowel Mac als iPhone op <strong>Laatst verbonden</strong>, niet Automatisch.</li>
<li>Zet je Mac op 5GHz-wifi; houd USB 3-hubs op afstand.</li>
<li>Zet 2,4GHz op kanaal 1, 6 of 11.</li>
<li>Herstart na het uit- en inschakelen van Bluetooth.</li>
</ul>

<p>Zodra de onderbrekingen weg zijn en je gewoon schonere controle wilt over hoe luid elke app speelt, voegt <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> een echte volumemixer per app toe, demping, boost en snel schakelen van uitvoer die macOS nog steeds niet biedt. Het is een eenmalige aankoop van €14,99 in de Mac App Store, sandboxed, zonder drivers om te installeren.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Rechterspeaker dood op Mac na de Tahoe-update? Zo los je het op",
    description: "Eén speaker of kanaal werkt niet meer na de update naar macOS Tahoe? Begin met de balansschuif van de audio, reset daarna Core Audio, probeer de veilige modus en sluit hardware uit. Een heldere probleemoplossingsgids.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Als je rechterspeaker stil is gevallen na de update naar macOS Tahoe, controleer dan eerst de <strong>balansschuif</strong> van de audio — die kan verschuiven tijdens een update. Ga naar Systeeminstellingen &gt; Geluid &gt; Uitvoer en zorg dat de Balans precies in het midden staat. Als dat in orde is, herstart Core Audio, start op in veilige modus en sluit daarna hardware uit. De meeste gevallen zijn software.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Rechterspeaker dood op Mac na de Tahoe-update? Zo los je het op" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Eerst: de balansschuif (lost dit vaker op dan je zou denken)</h2>

<p>Een vastzittende of verschoven balansschuif is de allergrootste reden waarom één kanaal stil valt — en macOS-updates duwen hem af en toe aan. Voordat je het ergste aanneemt:</p>

<ul>
<li>Open <strong>Systeeminstellingen &gt; Geluid</strong>.</li>
<li>Klik op het tabblad <strong>Uitvoer</strong> en selecteer je speakers (ingebouwd, of je externe apparaat).</li>
<li>Zoek de <strong>Balans</strong>-schuif en sleep hem precies naar het midden. Als hij naar links stond getrokken, zou je rechterkanaal dood klinken.</li>
</ul>

<p>Doe dit <em>per uitvoerapparaat</em>. De balansinstelling wordt apart onthouden voor ingebouwde speakers, koptelefoons en elke externe interface — dus een gecentreerde ingebouwde balans helpt niet als het probleem bij je USB-DAC zit.</p>

<h2>Test of het echt een hardwarekanaal is</h2>

<p>Sluit de hardware snel in of uit. Speel een stereonummer af dat je goed kent en steek daarna een bedrade koptelefoon in. Als beide kanalen werken in de koptelefoon maar niet via de speakers, ligt het probleem stroomafwaarts van de audio-engine (speakerhardware of het uitvoerpad). Is hetzelfde kanaal ook dood in de koptelefoon, dan is het waarschijnlijker software of de audiocodec van het moederbord.</p>

<p>Je kunt ook <strong>Muziek</strong> of QuickTime openen, iets afspelen en de balans hard naar links en dan hard naar rechts zetten. Als de audio netjes tussen de kanalen beweegt, zijn beide speakers in leven en is dit puur een instellingenprobleem.</p>

<h2>Herstart Core Audio</h2>

<p>macOS stuurt al het geluid door het proces <strong>coreaudiod</strong>. Na een grote update kan de status ervan vastlopen — uitvoeren verdwijnen, kanalen vallen weg, of het volume gedraagt zich vreemd. Het herstarten is veilig en dwingt macOS de audiograaf opnieuw op te bouwen:</p>

<ul>
<li>Open <strong>Terminal</strong> (Programma's &gt; Hulpprogramma's).</li>
<li>Voer uit: <code>sudo killall coreaudiod</code></li>
<li>Voer je wachtwoord in. De audio-daemon start binnen een seconde of twee automatisch opnieuw.</li>
</ul>

<p>Er wordt niets verwijderd — dit herstart alleen het audiosubsysteem. Test je rechterspeaker daarna meteen opnieuw.</p>

<h2>Herstart correct, probeer dan de veilige modus</h2>

<p>Een volledige herstart wist tijdelijke audiostoringen die een killall niet wist. Is het kanaal nog steeds dood, start dan op in de <strong>veilige modus</strong>, die een minimaal systeem laadt en audio-extensies en inlogitems van derden overslaat:</p>

<ul>
<li><strong>Apple Silicon:</strong> Schakel uit. Houd de aan/uit-knop ingedrukt tot "Opstartopties laden" verschijnt. Selecteer je schijf, houd dan <strong>Shift</strong> ingedrukt en klik op "Ga door in veilige modus."</li>
<li><strong>Intel:</strong> Herstart en houd <strong>Shift</strong> ingedrukt tot het inlogvenster verschijnt.</li>
</ul>

<p>Als beide speakers werken in de veilige modus, geeft een audiodriver, virtueel apparaat of menubalkhulpprogramma dat vóór de update is geïnstalleerd, een conflict met de nieuwe audiostack van Tahoe. Start terug naar normaal en verwijder of update recent geïnstalleerde audiosoftware (schermrecorders, vergaderapps en audio-routing-kexts zijn veelvoorkomende boosdoeners).</p>

<h2>Reset NVRAM (alleen Intel-Macs)</h2>

<p>Op Intel-Macs zitten geluids- en speakerinstellingen in NVRAM/PRAM, en een verouderde waarde kan een update overleven. Reset het: schakel uit, zet dan aan en houd onmiddellijk <strong>Option + Command + P + R</strong> ongeveer 20 seconden ingedrukt, waarbij je de Mac één keer laat herstarten. Dit is niet van toepassing op Apple Silicon-Macs — die beheren dit automatisch, dus sla het over als je een M-serie-machine hebt.</p>

<h2>Update opnieuw — en controleer op een puntrelease</h2>

<p>Vroege releases van elke grote macOS-versie komen met audiodriverbugs die later worden gepatcht. Ga naar <strong>Systeeminstellingen &gt; Algemeen &gt; Software-update</strong> en installeer elke openstaande Tahoe-puntrelease (14.x.1, 14.x.2, enz.). Als er een aanvullende update bestaat, pakt die vaak precies deze audioregressies na de update aan.</p>

<h2>Wanneer het echt hardware is</h2>

<p>Als de veilige modus, een Core Audio-herstart en een schone herinstallatie allemaal falen — en hetzelfde kanaal dood is in de koptelefoon — kijk je mogelijk naar een hardwarefout. De timing met een update kan toeval zijn; speakerversterkers en audiocodecs kunnen wel degelijk defect raken. Voer <strong>Apple Diagnostics</strong> uit (schakel uit, houd dan de aan/uit-knop ingedrukt op Apple Silicon en kies Diagnose, of houd <strong>D</strong> ingedrukt op Intel bij het opstarten). Als het een audiocomponent markeert, neem dan contact op met <strong>Apple Support</strong> of een erkende serviceprovider. Geef geen geld uit aan software voor een kapotte speaker.</p>

<blockquote>Snelle vuistregel: als de audio correct pant met de balansschuif, zijn beide speakers fysiek in orde en zit je oplossing in software. Beweegt hij nooit naar de dode kant, verdenk dan hardware.</blockquote>

<h2>Waar volumesoftware past (en waar niet)</h2>

<p>Voor de duidelijkheid: een dood speakerkanaal is niet iets wat een volume-app oplost — de controles hierboven zijn je pad. Dat gezegd hebbende, zodra je audio weer gezond is, mist macOS nog steeds iets wat Windows al jaren heeft: een echte volumemixer per app. Als je door de geluidsinstellingen aan het graven was omdat de ene app knalde terwijl de andere te zacht was, laat een menubalkmixer zoals <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je onafhankelijk volume, demping en zelfs boost per applicatie instellen zonder je systeembalans aan te raken. Het is een gemakstool voor dagelijks mixen, geen reparatie voor het probleem in dit artikel.</p>

<h2>De korte versie</h2>

<ul>
<li>Centreer de <strong>Balans</strong>-schuif — per uitvoerapparaat.</li>
<li>Test met een koptelefoon om hardware te isoleren.</li>
<li>Voer <code>sudo killall coreaudiod</code> uit, herstart daarna.</li>
<li>Probeer de <strong>veilige modus</strong> om driverconflicten te betrappen.</li>
<li>Reset NVRAM op Intel; installeer elke Tahoe-puntrelease.</li>
<li>Nog steeds dood in de koptelefoon? Voer Apple Diagnostics uit en bel Apple.</li>
</ul>

<p>Zodra je speakers weer normaal zijn, en als het jongleren met volume per app een dagelijkse ergernis is, voegt <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> de mixer toe die macOS altijd heeft gemist — €14,99, eenmalig, sandboxed, geen drivers.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods vastzitten op half volume op je Mac? Hier is de fix",
    description: "Waarom AirPods op half volume verbinden met je Mac — meestal een Bluetooth-codecwissel naar het handsfree-microfoonprofiel — plus de fixes met opnieuw koppelen en hoe je het niveau blijvend omhoog boost.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>AirPods vallen op een Mac meestal terug naar half volume omdat macOS ze van het A2DP-audioprofiel van hoge kwaliteit heeft omgeschakeld naar het handsfree-profiel (HFP) van lage kwaliteit — het profiel gebouwd voor het microfoongebruik bij telefoongesprekken. Die modus beperkt de uitvoer en kwaliteit. Los het op door de Mac terug te dwingen naar audio-alleen voor de koptelefoon, en boost daarna het niveau om het zo te houden.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods vastzitten op half volume op je Mac? Hier is de fix" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom dit gebeurt: de codecwissel</h2>

<p>Bluetooth-audioapparaten zoals AirPods draaien in een van twee modi. Als je alleen luistert, gebruikt macOS A2DP — vol stereo, vol volume, schone kwaliteit. Maar op het moment dat een app je microfoon wil, schakelt macOS de hele verbinding naar HFP (Hands-Free Profile). HFP is een tweerichtings-telefoniecodec. Het klinkt dun, mono-achtig en merkbaar zachter, omdat het is ontworpen voor spraakgesprekken, niet voor muziek.</p>

<p>Het probleem is dat macOS vaak in HFP blijft hangen, zelfs nadat de app die de microfoon greep klaar is — of er meteen naar overschakelt zodra je Zoom, FaceTime, Teams, Discord of een browsertabblad met microfoontoestemming opent. Dus je AirPods klinken alsof ze op "half volume" staan, niet omdat de volumeschuif is verschoven, maar omdat het hele audioprofiel onder je vandaan is teruggeschakeld.</p>

<p>Je herkent het: de audio wordt plots zacht en gedempt, de AirPods verschijnen twee keer in je geluidsinstellingen (een keer als uitvoer, een keer als microfoon), en het systeemvolume helemaal opendraaien helpt nauwelijks.</p>

<h2>De workarounds met opnieuw koppelen en codec</h2>

<p>Dit zijn de eerlijke eerste stappen. Werk ze op volgorde af — een van de eerste lost het meestal op.</p>

<ul>
<li><strong>Verander je invoerapparaat.</strong> Open Systeeminstellingen → Geluid → Invoer en kies de ingebouwde microfoon van je Mac in plaats van de AirPods. Dit weerhoudt macOS ervan de AirPods in HFP-modus te houden, zodat de uitvoer weer kan klimmen naar volledige A2DP-kwaliteit. Dit is de allereffectiefste fix.</li>
<li><strong>Schakel Bluetooth uit en aan.</strong> Een snelle reset van de verbinding heronderhandelt A2DP vaak schoon, vooral als de AirPods na een gesprek zijn vastgelopen.</li>
<li><strong>Verbind de AirPods opnieuw.</strong> Sluit het etui, wacht een paar seconden, open het weer bij de Mac en selecteer ze opnieuw als uitvoerapparaat.</li>
<li><strong>Sluit de app af die de microfoon greep.</strong> Sluit Zoom, Teams, Discord of dat browsertabblad volledig af. Sommige apps houden de microfoonsessie op de achtergrond open en zetten HFP vast tot ze weg zijn.</li>
<li><strong>Koppel opnieuw vanaf nul.</strong> Verwijder de AirPods onder Systeeminstellingen → Bluetooth (klik op de info-knop → Vergeet dit apparaat), en koppel dan opnieuw. Dit wist een beschadigde profielonderhandeling die alleen uit- en aanzetten niet oplost.</li>
<li><strong>Reset de AirPods.</strong> Met de klep van het etui open, houd je de setup-knop op de achterkant ingedrukt tot het lampje amber en dan wit knippert. Koppel daarna opnieuw. Dit is de laatste redmiddel voor rariteiten op firmwareniveau.</li>
<li><strong>Update macOS en AirPods-firmware.</strong> Apple heeft Bluetooth-audiofixes uitgebracht in puntreleases. AirPods-firmware update stilletjes terwijl ze bij een verbonden apparaat opladen — dus laat ze 's nachts in het etui bij je Mac liggen.</li>
</ul>

<blockquote><p>Het patroon om op te letten: als het volume daalt op het moment dat je een gesprek binnengaat en herstelt wanneer het gesprek eindigt, is het de HFP-wissel — niet een kapotte speaker of een instellingenstoring.</p></blockquote>

<h2>Waarom de fixes niet altijd blijven plakken</h2>

<p>Hier komt het frustrerende deel. Zelfs na opnieuw koppelen schakelt macOS je AirPods vrolijk terug naar de stille handsfree-modus zodra een app de microfoon aanraakt. Je kunt dat gedrag niet permanent uitschakelen in de systeeminstellingen — Apple behandelt het als automatisch. Dus je eindigt met het meerdere keren per dag herhalen van de invoerapparaat-truc, en op elk moment dat je AirPods in een gesprek of een microfoonhongerige app zitten, zijn ze weer beperkt tot dat lagere niveau.</p>

<p>Er is ook een tweede, apart probleem dat mensen hiermee verwarren: sommige apps zijn gewoon zachter dan andere op maximaal systeemvolume. Een podcastspeler of een browsertabblad kan ver onder zitten wat je oren willen, zelfs als de AirPods schoon A2DP draaien. macOS geeft je één volumeschuif voor alles en geen bediening per app, dus er is geen native manier om één stille app weer omhoog te duwen.</p>

<h2>Boost het niveau weer omhoog — en houd het daar</h2>

<p>Hier verdient een volumemixer per app zijn plek. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een menubalk-app voor macOS die elke draaiende app zijn eigen onafhankelijke volumeschuif geeft — inclusief een boost boven 100%. Dus als je AirPods terugkomen uit een gesprek op een lager effectief niveau, of een specifieke app is simpelweg te zacht, sleep je die app voorbij het normale plafond en blijft hij daar.</p>

<p>Concreet betekent dat:</p>

<ul>
<li><strong>VolumeBOOST per app.</strong> Duw een stille app boven het standaardmaximum in plaats van je in te spannen om hem te horen op "vol" systeemvolume.</li>
<li><strong>Volumeprofielen.</strong> Sla een set niveaus op — geboostte browser, zachtere muziek, luide videogesprekken — en wissel de hele opstelling met één klik zodat je niet na elke herverbinding opnieuw hoeft te bijstellen.</li>
<li><strong>Snel schakelen van uitvoer.</strong> Spring tussen AirPods, laptopspeakers en een externe DAC vanuit de menubalk zonder door Systeeminstellingen te graven, wat helpt wanneer je een verse profielonderhandeling afdwingt.</li>
<li><strong>Demping per app en auto-ducking.</strong> Breng één app tot zwijgen zonder de rest aan te raken, en laat media automatisch dippen wanneer iets belangrijkers speelt.</li>
</ul>

<p>Het is de moeite waard om duidelijk te zijn over wat dit wel en niet doet. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dwingt macOS niet in A2DP te blijven — de invoerapparaat-truc hierboven is nog steeds je middel voor de codec zelf. Wat het wel doet, is je het volume teruggeven dat de downgrade stal, per app, zodat een stille AirPods-sessie of een hardnekkig zachte app een fix met één sleep is in plaats van een verloren zaak. En omdat het een sandboxed Mac App Store-app is, is er geen audiodriver om te installeren, geen DMG, geen kernelextensie — het draait gewoon.</p>

<h2>De korte versie</h2>

<p>Als je AirPods zacht en gedempt klinken op je Mac, schakel je invoerapparaat weg van de AirPods om ze uit de handsfree-modus te dwingen, en koppel opnieuw als dat faalt. Als het niveau nog steeds niet komt waar je het wilt — of een enkele app is gewoon te zacht — grijp dan naar boost per app zodat je het één keer instelt en verder gaat.</p>

<p>Het beu om elke keer dat je een gesprek aanneemt met de volumeschuif te vechten? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> — eenmalig €14,99, geen abonnement, geen drivers — en geef elke app zijn eigen volume.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac-volume blijft zichzelf resetten op Tahoe? Zo zet je het definitief vast",
    description: "Sinds macOS Tahoe veranderen of resetten veel Macs plots vanzelf hun volume. Hier lees je waarom het gebeurt, hoe je de ingebouwde oorzaken stopt, en hoe je een vast volume per app vastzet zodat het blijft staan.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Als je Mac-volume zichzelf blijft resetten sinds macOS Tahoe, is de oplossing om de automatische bijstellers uit te schakelen: zet audio-ducking en "Speel geluid bij opstarten" uit, reset de geluidsinstellingen en verbind elke Bluetooth-uitvoer schoon opnieuw. Voor niveaus per app die rondspringen, zet een vast volume per app vast met een mixer zodat het nooit meer wegdrijft.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac-volume blijft zichzelf resetten op Tahoe? Zo zet je het definitief vast" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom je volume vanzelf verandert na Tahoe</h2>

<p>Een volume dat beweegt zonder dat je het aanraakt, voelt als een hardwarefout, maar het is bijna altijd software die je niveau voor je bepaalt. macOS heeft verschillende automatische gedragingen die de uitvoer stilletjes aanduwen of resetten, en de wijzigingen in de audiostack van Tahoe maakten er een paar opvallender. Voordat je aanneemt dat de app of de Mac kapot is, helpt het om precies te weten welk systeem de schuif grijpt.</p>

<ul>
<li><strong>Audio-ducking:</strong> macOS verlaagt andere audio wanneer het denkt dat er iets belangrijkers speelt (Siri, toegankelijkheidsaankondigingen, meldingen). Nadat de trigger eindigt, komt het niveau soms niet helemaal terug.</li>
<li><strong>Bluetooth-handshake-resets:</strong> AirPods en andere Bluetooth-apparaten heronderhandelen het volume bij verbinden. Midden in een sessie opnieuw verbinden kan de uitvoer terugklappen naar een standaard of naar een veel luider/zachter niveau.</li>
<li><strong>Schakelen van uitvoerapparaat:</strong> Wanneer je een koptelefoon of dock loskoppelt of overschakelt naar de speakers van een monitor, onthoudt elke uitvoer zijn eigen volume. Heen en weer schakelen lijkt op "willekeurige" resets.</li>
<li><strong>Standaardwaarden per app:</strong> Sommige apps (browsers, videospelers, vergadertools) stellen hun eigen versterking in bij het opstarten of wanneer een nieuwe stream begint, en overschrijven wat je had.</li>
<li><strong>Opstartgeluid en inlogstatus:</strong> De opstartchime en het inloggen kunnen het systeemvolume terugduwen naar een standaardniveau dat je niet hebt gekozen.</li>
</ul>

<h2>Los eerst de ingebouwde oorzaken op</h2>

<p>Werk deze op volgorde af. De meeste "reset zichzelf"-klachten verdwijnen zodra ducking en Bluetooth zijn uitgesloten.</p>

<ul>
<li><strong>Zet het opstartgeluid uit.</strong> Systeeminstellingen → Geluid → vink <em>Speel geluid bij opstarten</em> uit. Dit voorkomt dat de opstartchime je basisniveau reset.</li>
<li><strong>Verminder of schakel ducking-triggers uit.</strong> Zet in Systeeminstellingen → Toegankelijkheid → Gesproken inhoud en Siri de gesproken aankondigingen uit die je niet nodig hebt. Minder triggers betekent minder momenten waarop macOS de audio verlaagt en vergeet te herstellen.</li>
<li><strong>Koppel problematische Bluetooth-apparaten opnieuw.</strong> Verwijder AirPods of koptelefoons uit de Bluetooth-instellingen en koppel ze vers. Een verouderd profiel is een veelvoorkomende oorzaak van volume dat bij verbinden terugklapt.</li>
<li><strong>Stel elk uitvoerapparaat bewust in.</strong> Verbind elke uitvoer die je gebruikt (ingebouwd, monitor, koptelefoon) en stel het volume één keer in. macOS bewaart volume per apparaat, dus door ze allemaal in te stellen verwijder je de verrassing wanneer je wisselt.</li>
<li><strong>Reset Core Audio als het vastzit.</strong> Open Terminal en voer <code>sudo killall coreaudiod</code> uit. Dit herstart de audio-daemon zonder herstart en wist een vastgelopen status die grillige niveaus kan veroorzaken.</li>
<li><strong>Update, herstart daarna.</strong> Vroege Tahoe-puntreleases bevatten audiofixes. Zorg dat je op de nieuwste build zit en herstart één keer na het updaten.</li>
</ul>

<p>Als de resets stoppen, was een van bovenstaande je boosdoener. Als je <em>systeemvolume</em> stabiel is maar individuele apps steeds luider of zachter wegdrijven dan de rest, heb je de grens bereikt van wat de ingebouwde bediening kan.</p>

<h2>Het echte gat: macOS kan volume niet per app vastzetten</h2>

<p>Hier komt het frustrerende deel. Windows heeft al jaren een volumemixer per app — je opent hem, sleept de schuif van één app, en hij blijft daar. macOS heeft er nooit een uitgebracht. Er is precies één systeemvolumeschuif, en elke app vecht erom. Dus wanneer een browsertabblad een autoplay-advertentie afvuurt of een videogesprek binnenkomt dat twee keer zo luid is als je muziek, is je enige optie het master-volume handmatig bij te sturen — wat precies de "waarom blijft dit veranderen"-lus is waaruit je probeert te ontsnappen.</p>

<blockquote>De systeemschuif is één gedeelde knop. Zonder een mixer per app is "instellen en vergeten" onmogelijk op standaard macOS — iets zal je altijd overschrijven.</blockquote>

<h2>Zet een vast volume per app vast met SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> voegt de mixer per app toe die macOS mist. Het leeft in je menubalk en geeft elke draaiende app zijn eigen volumeschuif, onafhankelijk van de master. Omdat het het niveau onthoudt dat je voor elke app instelt, lost het direct het "reset zichzelf"-probleem op: je beslist één keer, en die app opent elke keer op dat volume.</p>

<ul>
<li><strong>Onafhankelijk volume per app:</strong> houd muziek op 40% en een videogesprek op 80% tegelijk, zonder gejongleer met de master-schuif.</li>
<li><strong>Demping en boost per app:</strong> breng een luidruchtige app meteen tot zwijgen, of duw een te stille app voorbij 100% wanneer zijn eigen audio zwak is.</li>
<li><strong>Volumeprofielen:</strong> sla opstellingen op voor "werk," "gaming" of "focus" en wissel de hele mix met één klik.</li>
<li><strong>Auto-ducking op jouw voorwaarden:</strong> verlaag achtergrondapps automatisch wanneer je spreekt of wanneer een gekozen app actief is — in plaats van dat macOS beslist.</li>
<li><strong>Snel schakelen van uitvoer:</strong> spring tussen speakers, koptelefoon en monitoraudio vanuit de menubalk zonder in de instellingen te duiken.</li>
</ul>

<p>Het is een eenmalige aankoop van €14,99 in de Mac App Store — geen abonnement, geen drivers, geen DMG en geen kernelextensies. Omdat het volledig sandboxed en via de App Store gedistribueerd is, installeer je geen verouderde audio-kext die Tahoe bij de volgende update zou kunnen blokkeren. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> stelt je niveaus in met ondersteunde API's, zodat je onthouden volumes updates en herstarts overleven.</p>

<h2>Welke aanpak heb je echt nodig?</h2>

<p>Als je hele systeemvolume springt, begin dan met de ingebouwde fixes hierboven — ducking, Bluetooth en het opstartgeluid zijn goed voor de meeste gevallen. Als het probleem juist is dat één app altijd de vreemde eend is, of je bent het beu dat de master-schuif een compromis is, dan is een mixer per app het enige echte antwoord. macOS voegt er geen toe, dus een menubalktool is de praktische route naar een mix die echt blijft staan waar je hem zet.</p>

<p>Het beu om de volumeschuif op Tahoe achterna te jagen? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> en zet een onthouden volume vast voor elke app — €14,99 eenmalig, geen abonnementen, geen drivers.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Regel het monitorvolume van je DAW los van de systeemaudio op Mac",
    description: "macOS heeft geen ingebouwde volumemixer per app, dus je DAW en systeemgeluiden delen één niveau. Hier lees je hoe je het monitorvolume van Logic, Ableton of GarageBand onafhankelijk regelt van je browser en meldingen.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>macOS heeft geen ingebouwde volumemixer per app, dus je DAW en al het andere delen één systeemschuif. Om je monitorniveau onafhankelijk in te stellen van browsers, Slack en meldingen, heb je volumebediening per app nodig. Een menubalkmixer zoals <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> geeft Logic, Ableton en GarageBand hun eigen volume, gescheiden van de systeemaudio.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Regel het monitorvolume van je DAW los van de systeemaudio op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom één volumeschuif je monitoring verpest</h2>

<p>Als je produceert, is je DAW maar een van de vele dingen die geluid maken. Een referentietrack speelt in een browsertabblad. Slack-pings komen binnen. Een YouTube-tutorial draait op een tweede monitor. Op Windows laat de volumemixer je al deze onafhankelijk balanceren. Op macOS heeft Apple nooit een equivalent uitgebracht — de volumetoetsen en de menubalkschuif bewegen <em>alles</em> tegelijk.</p>

<p>Dat creëert een echt probleem voor iedereen die op het gehoor mixt. Je stelt een comfortabel monitorniveau in in Logic, en dan knalt een melding er op hetzelfde niveau doorheen en blaast je oren weg. Of je zet het systeem lager om je gehoor te beschermen tijdens een luide passage, en nu is je referentietrack te zacht om mee te vergelijken. Je monitoringreferentie is niet langer stabiel, en een stabiele referentie is het hele punt van mixen.</p>

<blockquote>Op een consistent niveau monitoren is een van de weinige gewoontes die je mixes meetbaar verbeteren. Als systeemgeluiden je steeds dwingen de master-schuif te verplaatsen, verlies je die consistentie.</blockquote>

<h2>Wat "apart DAW-volume" eigenlijk betekent</h2>

<p>Er zijn twee verschillende dingen die producers hier door elkaar halen, en het is de moeite waard ze te scheiden:</p>

<ul>
<li><strong>Interface- / master-uitvoerniveau</strong> — de hardwareknop op je audio-interface of je monitorcontroller. Dit stelt je absolute luistervolume in en zou moeten blijven staan zodra het gekalibreerd is.</li>
<li><strong>Softwarematig volume per app</strong> — hoe luid elke applicatie is <em>voordat</em> het die uitvoer bereikt. Dit is wat macOS mist. Het laat je de DAW op unity houden terwijl je Chrome, Muziek of meldingsgeluiden lager zet naar een bedniveau eronder.</li>
</ul>

<p>Je wilt de tweede. Het doel is niet je DAW zachter te zetten — het is al het andere zachter te zetten ten opzichte ervan, zodat de DAW je luidste, meest consistente bron blijft en afleidingen stil op de achtergrond zitten.</p>

<h2>Hoe je het doet met een mixer per app</h2>

<p>Een menubalkmixer zoals <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vermeldt elke app die momenteel audio afspeelt en geeft elk zijn eigen schuif. De workflow voor een producer ziet er zo uit:</p>

<ul>
<li><strong>Kalibreer je interface één keer.</strong> Stel je audio-interface of monitorcontroller in op een comfortabel, herhaalbaar referentieniveau en laat het staan. Dit is je vaste anker.</li>
<li><strong>Zet je DAW op 100%.</strong> Laat in de mixer Logic, Ableton of GarageBand op vol softwarevolume zodat het op unity doorkomt. De eigen masterfader van je DAW doet nog steeds de fijne mix.</li>
<li><strong>Zet al het andere lager.</strong> Zet Chrome, Safari, Muziek en Slack op een lager niveau — zeg 40–60% — zodat referentietracks en berichten onder je mix zitten in plaats van ermee te concurreren.</li>
<li><strong>Demp het luidruchtige spul.</strong> Met demping per app kun je een browser of chat-app volledig het zwijgen opleggen zonder je monitoringketen aan te raken. Eén klik, en je DAW blijft onaangeroerd spelen.</li>
</ul>

<p>Omdat de schuif van de DAW nooit beweegt, blijft je monitoringreferentie rotsvast gedurende een hele sessie. Je kunt een referentietrack opkrikken voor een snelle A/B, hem dan dempen, en je mixniveau is geen decibel verschoven.</p>

<h2>Een stille app boosten in plaats van de andere zachter zetten</h2>

<p>Soms loopt het probleem de andere kant op. Een ruwe demobounce, een spraakmemo of een stille referentie speelt ver onder je sessieniveau af. Je interface hoger zetten om het te horen betekent dat al het andere nu te luid is. Met <strong>volumeboost</strong> per app kun je een enkele stille applicatie boven 100% duwen zodat het overeenkomt met je werkniveau — zonder je gekalibreerde uitvoer aan te raken. Het is het stuk dat de mixer van Windows nooit had en een van de nuttigere tools wanneer je materiaal van buiten je DAW beluistert.</p>

<h2>Profielen voor verschillende sessietypes</h2>

<p>Je ideale balans is niet voor elke taak hetzelfde. Opnemen, mixen en casual luisteren willen elk een andere mix van app-niveaus. Met volumeprofielen kun je een opstelling opslaan en meteen terughalen:</p>

<ul>
<li><strong>Mixen:</strong> DAW op 100%, browser en Muziek laag, chat gedempt.</li>
<li><strong>Referentie beluisteren:</strong> Muziek- of streamingapp omhoog, DAW omlaag.</li>
<li><strong>Gesprekken / samenwerking:</strong> vergaderapp omhoog, DAW teruggetrokken zodat het niet in het gesprek doorlekt.</li>
</ul>

<p>Wisselen van profiel verslaat het handmatig bijstellen van vijf schuiven elke keer dat je van tak verandert.</p>

<h2>Auto-ducking en snel schakelen van uitvoer</h2>

<p>Twee dingen zijn nog belangrijk in een studio. <strong>Auto-ducking</strong> kan achtergrondapps automatisch dippen wanneer een prioriteitsbron spreekt of speelt, zodat een gesprek of belangrijke audio er altijd doorheen komt. En <strong>snel schakelen van uitvoer</strong> vanuit de menubalk laat je springen tussen je interface, je monitoren en koptelefoon zonder in Systeeminstellingen te graven — een constante taak wanneer je een mix op verschillende systemen controleert.</p>

<h2>Waarom geen virtuele audiodriver?</h2>

<p>Sommige routingtools lossen dit op door een virtuele audiodriver op kernelniveau te installeren. Die zijn krachtig maar zwaar: ze kunnen breken na macOS-updates, voegen latentie toe en vereisen diepe systeemtoestemmingen. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is sandboxed en wordt geleverd via de Mac App Store — geen drivers, geen DMG, geen opzet van geaggregeerde apparaten. Specifiek voor niveaubediening per app is dat een veel eenvoudiger pad dan het herarchitecteren van je audio-routing.</p>

<p>Klaar om je monitorniveau stabiel te houden terwijl al het andere op zijn plaats blijft? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> voor een eenmalige €14,99 en geef je DAW zijn eigen volume.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Een eenvoudiger Audio Hijack-alternatief voor volume per app op Mac",
    description: "Als je alleen onafhankelijk volume per app op macOS wilt, is Audio Hijack overkill. Hier is een lichter, goedkoper menubalkalternatief dat volume, demping en boost per app doet zonder audio-routing.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Als het enige wat je wilt onafhankelijk volume per app op macOS is, is Audio Hijack meer tool dan je nodig hebt. Het is een pro audio-routing- en opnamesuite (rond de $79) gebouwd voor opname, effecten en sessiegrafieken. Om simpelweg de ene app zachter en de andere luider te zetten, is een lichtgewicht menubalkmixer zoals <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> sneller, goedkoper en altijd klaar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Een eenvoudiger Audio Hijack-alternatief voor volume per app op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom mensen in eerste instantie naar Audio Hijack grijpen</h2>

<p>macOS heeft geen ingebouwde volumemixer per app. Windows heeft er al jaren een in zijn volumemixer, maar op een Mac bewegen de volumetoetsen en de menubalkschuif maar één ding: de systeemmaster. Er is geen manier van Apple zelf om te zeggen "houd Spotify op 40% maar laat mijn videogesprek op 100%."</p>

<p>Dus mensen zoeken naar een workaround en belanden bij Audio Hijack. Het <em>kan</em> volume per app doen, omdat het de audio van elke afzonderlijke applicatie kan onderscheppen en verwerken. Maar die mogelijkheid is een bijeffect van waar het eigenlijk voor is ontworpen: audio opnemen van apps en hardware, effecten aan elkaar rijgen, routeren tussen virtuele apparaten en herbruikbare sessiepipelines bouwen. Daar is het echt uitstekend in. Het is alleen een zwaar antwoord op een lichte vraag.</p>

<h2>Waar Audio Hijack overkill wordt</h2>

<p>Een paar dingen frustreren mensen die alleen een volumeschuif wilden:</p>

<ul>
<li><strong>Prijs.</strong> Audio Hijack zit rond de $79. Dat is redelijk voor een opnamestudio in een app; het is veel om een browsertabblad zachter te zetten.</li>
<li><strong>Het moet blijven draaien.</strong> De verwerking per app werkt alleen zolang de app open is en de relevante sessie actief is. Sluit het af, en je volumes keren terug. Je houdt een volledig audiostation resident alleen om een schuif op zijn plaats te houden.</li>
<li><strong>Sessie-gebaseerd denken.</strong> Je bouwt sessies met blokken en verbindingen. Krachtig voor opname, maar het is veel conceptuele overhead als je doel "deze app zachter, die app luider" is.</li>
<li><strong>De interface is diep.</strong> Effecten, routing, meters, blokbedrading — een rijk oppervlak dat je grotendeels zult negeren als je nooit iets opneemt.</li>
</ul>

<blockquote>Vuistregel: als je audio wilt <em>opnemen of routeren</em>, verdient Audio Hijack zijn prijs. Als je alleen audio wilt <em>balanceren</em> tussen apps, betaal je voor een werkplaats terwijl je een knop nodig had.</blockquote>

<h2>Het eenvoudiger alternatief: een menubalk-volumemixer</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pakt de ene taak waarvoor de meeste mensen eigenlijk kwamen en doet alleen dat. Het leeft in je menubalk. Klik op het icoon en je krijgt een live lijst van elke app die momenteel audio afspeelt, elk met zijn eigen schuif. Sleep Spotify naar 30%, laat je gesprek op 100%, demp Slack volledig — klaar, geen sessie om te bouwen.</p>

<p>Wat het dekt:</p>

<ul>
<li><strong>Onafhankelijk volume per app</strong> — elke audiobron krijgt zijn eigen schuif, in realtime aanpasbaar.</li>
<li><strong>Demping per app</strong> — breng één luidruchtige app tot zwijgen met een klik zonder iets anders aan te raken.</li>
<li><strong>Volumeboost per app</strong> — duw een stille app <em>boven</em> 100% wanneer zijn eigen maximum nog te zacht is. Dit is het stuk dat de systeemschuif nooit kan.</li>
<li><strong>Volumeprofielen</strong> — sla een hele mix op (muziek laag, gesprekken luid, meldingen gedempt) en haal hem met één klik terug voor een bepaalde context.</li>
<li><strong>Auto-ducking</strong> — dip achtergrondaudio automatisch wanneer iets belangrijkers begint, zodat een gesprek of een video niet onder je playlist begraven raakt.</li>
<li><strong>Snel schakelen van uitvoer</strong> — spring tussen koptelefoon, speakers en andere uitvoeren vanuit hetzelfde menu.</li>
</ul>

<h2>Praktisch: bediening per app in minder dan een minuut</h2>

<p>Het verschil in de opzet is het hele punt. Met een routingtool zou je een sessie aanmaken, een bronblok toevoegen, het bedraden en de app laten draaien. Hier is het in wezen:</p>

<ul>
<li>Installeer <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> uit de Mac App Store.</li>
<li>Speel audio af in een paar apps zodat ze in de lijst verschijnen.</li>
<li>Klik op het menubalkicoon en sleep de schuif van elke app naar smaak.</li>
<li>Sla die mix optioneel op als profiel, of boost een te stille app voorbij 100%.</li>
</ul>

<p>Omdat het via de Mac App Store wordt gedistribueerd, is het sandboxed en installeert het als elke normale app — geen <code>.dmg</code> om te slepen, geen kernelextensie, geen audiodriver om goed te keuren in de beveiligingsinstellingen, en niets dat opnieuw goedgekeurd moet worden na een macOS-update. Dat laatste punt telt: driver-gebaseerde mixers braken van oudsher bij OS-upgrades en vereisten het herinstalleren van een systeemcomponent. Een sandboxed App Store-app vermijdt die hele categorie onderhoud.</p>

<h2>Welke moet je kiezen?</h2>

<p>Wees eerlijk over de taak. Kies <strong>Audio Hijack</strong> als je app- of hardware-audio moet opnemen, realtime-effecten moet toepassen of routinggrafieken tussen virtuele apparaten moet bouwen. Dat is zijn thuisterrein en daar is het elke dollar waard.</p>

<p>Kies een toegewijde menubalkmixer als je werkelijke behoefte "laat me het volume van elke app onafhankelijk instellen" is. Je geeft eenmalig €14,99 uit in plaats van ~$79, slaat het sessiebouwen over en krijgt boost, demping, profielen en ducking in een paneel dat je vanuit de menubalk opent. Geen opnamefuncties die je nooit aanraakt, geen station dat op de achtergrond draait om een schuif op zijn plaats te houden.</p>

<p>De meeste mensen die Audio Hijack probeerden voor volumebalans losten een klein probleem op met een groot gereedschap. Ben jij dat, dan past het kleine gereedschap beter — en kost het een fractie zoveel.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> voor €14,99, eenmalig — volume, boost, demping, profielen en auto-ducking per app, direct vanuit je menubalk.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D-alternatief: volume per app zonder de bloat (Mac)",
    description: "Als je Boom 3D vooral gebruikte om audio te boosten maar eigenlijk volumebediening per app wilde, is SoundDial het slankere Mac-alternatief: onafhankelijk volume per app, demping en boost per app, eenmalige prijs, geen systeembrede EQ of drivers.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Als je naar Boom 3D greep om volume te boosten maar eigenlijk elke app apart wilde regelen, wil je een ander gereedschap. Boom 3D is een systeembrede volumebooster en EQ. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een gerichte volumemixer per app: onafhankelijk volume, demping en boost voor elke app, eenmalig €14,99, geen EQ, geen drivers.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D-alternatief: volume per app zonder de bloat (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Wat Boom 3D eigenlijk doet (en niet doet)</h2>
<p>Boom 3D is gebouwd rond drie dingen: een systeembrede volumeboost, een 31-bands equalizer en 3D-"surround"-effecten. Die past het toe op <em>alles</em> wat je Mac tegelijk afspeelt. Dat is echt nuttig als je doel een luidere laptop is of een basscurve die je overal fijn vindt.</p>
<p>Waar Boom 3D niet voor is gebouwd, is het behandelen van apps als onafhankelijke kanalen. Er is geen schone manier om te zeggen "Spotify op 40%, mijn videogesprek op 100%, en dit browsertabblad gedempt." De schuif beweegt de hele mix. En omdat het een audiodriver installeert om in het signaalpad te zitten, raakt het je systeem op een lager niveau dan een sandboxed hulpprogramma dat doet. Het is ook gepositioneerd als een betaald product met upgradecycli in plaats van een klein eenmalig gereedschap.</p>
<blockquote><p>Het bekende verhaal: mensen installeren Boom 3D om één stille app luider te maken, en beseffen dan dat het echte probleem was dat macOS helemaal geen volumemixer per app heeft.</p></blockquote>

<h2>Het gat: macOS heeft geen volumemixer</h2>
<p>Dit verrast mensen die van Windows komen. Windows heeft al jaren een volumemixer per app — rechtsklik op de speaker, stel het niveau van elke app afzonderlijk in. macOS levert dit simpelweg niet. Je krijgt één master-volume en welke interne schuif elke app toevallig blootlegt. Er is geen manier op OS-niveau om Slack tegen een YouTube-tabblad tegen een game te balanceren.</p>
<p>Dus wanneer een muziekapp je gesprek overstemt, zijn je enige native opties grof: zet de master lager (wat alles zachter maakt) of graaf door de eigen instellingen van elke app in de hoop dat het een volumebediening heeft. Boom 3D dicht dat gat ook niet — het maakt de hele mix luider, niet elke app.</p>

<h2>Waar SoundDial past</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is de ontbrekende mixer. Het leeft in je menubalk en geeft elke draaiende app zijn eigen rij met zijn eigen schuif. Dat is het kernverschil met Boom 3D: in plaats van één globaal effect krijg je bediening per bron.</p>
<ul>
<li><strong>Onafhankelijk volume per app</strong> — zet Spotify op 30% terwijl je videogesprek op 100% blijft.</li>
<li><strong>Demping per app</strong> — breng één luidruchtige app meteen tot zwijgen zonder iets anders aan te raken.</li>
<li><strong>Boost per app</strong> — als je Boom 3D's luider-dan-100%-truc mooi vond, houdt SoundDial die, maar gericht op een enkele app in plaats van het hele systeem. Stille apps worden op zichzelf voorbij hun normale plafond geduwd.</li>
<li><strong>Volumeprofielen</strong> — sla een mixerlayout op (bijv. "gaming," "vergadering," "muziek") en haal hem met één klik terug in plaats van elke keer de schuiven opnieuw te balanceren.</li>
<li><strong>Auto-ducking</strong> — dip achtergrondaudio automatisch wanneer iets belangrijks begint, zodat een gesprek of een game-cue niet onder muziek begraven raakt.</li>
<li><strong>Snel schakelen van uitvoer</strong> — spring tussen koptelefoon, speakers en andere uitvoeren vanuit hetzelfde menu.</li>
</ul>
<p>Wat SoundDial bewust niet doet, is de rest van de Boom 3D-featurewildgroei. Er is geen 31-bands EQ, geen namaak-surroundverwerking, geen systeembrede effectketen. Als je een EQ van masteringkwaliteit wilt, is Boom 3D of een toegewijde audiosuite de juiste keuze. Als datgene waarvoor je Boom 3D eigenlijk steeds opende <em>volume</em> was, dan is dat oppervlak bloat waarvoor je betaalt om mee te sjouwen.</p>

<h2>Boost, zonder de driver</h2>
<p>De boost-vraag verdient een direct antwoord, want het is meestal waarom Boom 3D-gebruikers voor alternatieven winkelen. Boom 3D's boost is globaal en driver-gebaseerd. SoundDial's boost is per app en draait binnen Apple's app-sandboxmodel — het wordt gedistribueerd via de Mac App Store, dus er is geen aparte installer, geen driver op kernelniveau en geen achtergebleven systeemcomponenten om later te verwijderen. Je krijgt het "maak deze ene stille app luider"-resultaat zonder een driver de controle over je hele audiopad te geven.</p>

<h2>Prijs: eenmalig vs. doorlopend</h2>
<p>Boom 3D is een betaalde app met zijn eigen upgrade- en licentiemodel, en de prijs varieert per platform en versie. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een enkele eenmalige aankoop van €14,99 — koop het één keer, houd het, geen abonnement en geen heraankoop per versie om de mixer werkend te houden. Voor een hulpprogramma dat je elke dag in de menubalk laat draaien, veroudert een vaste prijs meestal beter dan een product waar je je steeds opnieuw in moet inkopen.</p>

<h2>Welke moet je kiezen?</h2>
<ul>
<li><strong>Kies Boom 3D</strong> als je echte behoefte een serieuze equalizer en systeembrede audio-effecten is, en je een audiodriver in de mix niet erg vindt.</li>
<li><strong>Kies SoundDial</strong> als je wilt wat Windows-gebruikers vanzelfsprekend vinden — een echte volumemixer per app — plus gerichte boost, profielen en auto-ducking, tegen een eenmalige prijs en zonder drivers om te installeren.</li>
</ul>
<p>De meeste mensen die op Boom 3D afketsen, vallen in de tweede groep. Ze wilden geen frequenties afstemmen; ze wilden de browser zachter dan het gesprek. Dat is precies de taak waarvoor SoundDial is gebouwd.</p>

<p><strong>Wil je volumebediening per app op je Mac zonder de EQ-bloat of een abonnement?</strong> <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> — €14,99 eenmalig, sandboxed, geen drivers, en elke app krijgt zijn eigen schuif.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Zo demp je alles behalve één app op je Mac",
    description: "macOS heeft geen volumemixer per app, dus om elke app behalve één het zwijgen op te leggen is een hulpje nodig. Hier lees je hoe je alleen je gesprek, stream of game hoort terwijl al het andere gedempt blijft.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>macOS heeft geen ingebouwde manier om afzonderlijke apps te dempen, dus om maar één app te horen heb je een volumemixer per app nodig. Installeer <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, open zijn menubalkmixer, demp elke app behalve degene die je wilt horen, en die app blijft spelen terwijl de rest meteen stil valt.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zo demp je alles behalve één app op je Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom macOS dit niet zelf kan</h2>
<p>Windows heeft al meer dan tien jaar de volumemixer: rechtsklik op het speakericoon, en elke draaiende app krijgt zijn eigen schuif. macOS heeft dit nooit uitgebracht. De volumetoetsen op je Mac regelen maar één ding, het master-uitvoerniveau. Als je het systeem lager zet, gaat alles samen omlaag. Als je dempt, dempt alles.</p>
<p>Dat is prima tot je vijf dingen tegelijk geluid hebt maken. Je zit in een videogesprek, maar een browsertabblad speelt automatisch een advertentie af, Spotify draait nog, een game pingt op de achtergrond en Slack rinkelt. Je enige native opties zijn apps afsluiten, ze één voor één dempen in de eigen instellingen van elke app (als het die optie al heeft), of je koptelefoon eruit rukken. Niets daarvan laat je zeggen "houd deze, breng de rest tot zwijgen."</p>

<h2>De rechttoe rechtaan manier: demp de rest met een mixer</h2>
<p>Een mixer per app zit tussen je apps en je uitvoerapparaat en geeft elke app zijn eigen volume- en dempbediening. Zodra er een draait, kost het isoleren van een enkele app seconden:</p>
<ul>
<li>Open de mixer vanuit je menubalk. Je ziet een live lijst van elke app die momenteel audio produceert.</li>
<li>Vind de ene app die je wilt horen, je gesprek, je stream, je game.</li>
<li>Demp al het andere. Tik op de demp-schakelaar naast elke andere app, of trek de schuif naar nul.</li>
<li>Dat is het. De ene app die je met rust liet blijft op vol volume spelen terwijl de rest stil blijft.</li>
</ul>
<p>Met <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> heeft elke app in de lijst zijn eigen schuif en zijn eigen dempknop, dus dit is een handvol klikken. Nieuwe apps die later beginnen te spelen verschijnen automatisch, dus als een meldingsgeluid probeert binnen te sluipen, kun je het ter plekke het zwijgen opleggen zonder je gefocuste app aan te raken.</p>

<blockquote>De truc is dat "alles behalve één" dempen gewoon de omgekeerde is van één app dempen. Je brengt niet je Mac tot zwijgen, je brengt de ruis rond het ding waar je echt om geeft tot zwijgen.</blockquote>

<h2>Sla het op als profiel zodat je het niet opnieuw doet</h2>
<p>Als dit een opstelling is waar je vaak naar grijpt, wordt het elke keer met de hand doen vervelend. Stel dat je tijdens vergaderingen altijd je gespreksapp luid wilt en al het andere uit, of je wilt je stream centraal terwijl games en browsers stil blijven. Een volumeprofiel bewaart die exacte instellingen per app en past ze met één klik opnieuw toe.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> laat je profielen opslaan zoals "Vergadering" of "Alleen stream," en er dan meteen naar wisselen wanneer je ze nodig hebt. Stel het één keer in, en het isoleren van je ene app wordt een enkele menubalkactie in plaats van een klus met vijf schuiven.</p>

<h2>De slimmere versie: auto-duck in plaats van hard dempen</h2>
<p>Soms wil je de andere apps niet volledig weg, je wilt alleen dat ze uit de weg gaan wanneer iets belangrijkers begint. Dat is auto-ducking. Wanneer je prioriteitsapp speelt, zakken achtergrondapps automatisch naar een laag niveau, en stijgen ze weer wanneer het stopt.</p>
<p>Dit is ideaal voor gesprekken en streams. Wanneer iemand begint te praten, dipt je muziek zodat je hen kunt horen, en wanneer het gesprek eindigt, komt de muziek vanzelf weer omhoog. Je krijgt het "hoor één app duidelijk"-resultaat zonder elke keer dat de situatie verandert handmatig te dempen en te ontdempen. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bevat auto-ducking naast de handmatige mixer, dus je kunt hard dempen kiezen voor totale stilte of ducking voor een zachtere achtergrond.</p>

<h2>De ene app boosten die je hield</h2>
<p>Er is een bonus aan het isoleren van een enkele app: je kunt hem ook luider maken dan je Mac normaal toestaat. Sommige apps, vooral stille videogesprekken of slecht gemasterde streams, zijn nauwelijks hoorbaar zelfs op max volume. Een boost per app duwt een afzonderlijke app boven 100% zonder je systeemuitvoer op te krikken, wat gewoon de apps die je al hebt gedempt zou versterken.</p>
<p>Dus de volledige zet is: demp de ruis, houd je ene app, en als die app te stil is, boost hem. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> regelt alle drie in hetzelfde mixervenster.</p>

<h2>Waar je je niet voor aanmeldt</h2>
<p>Een veelvoorkomende zorg bij Mac-audiotools is dat ze kernelextensies, virtuele audiodrivers of louche installers vereisen die je van een willekeurige website downloadt. Dat is een terechte zorg, en het is waarom sommige mensen deze apps helemaal mijden.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> zit in de Mac App Store, is sandboxed en installeert als elke normale app, geen drivers, geen DMG, geen systeemextensies om goed te keuren. Het is een eenmalige aankoop van €14,99 in plaats van een abonnement, dus je betaalt één keer en houdt het. Dat telt voor iets wat je de hele dag in je menubalk laat draaien.</p>

<h2>Snelle samenvatting</h2>
<ul>
<li>macOS heeft geen native volumebediening per app, dus je hebt een mixer nodig om dit te doen.</li>
<li>Open de mixer, houd je ene app, demp of nul al het andere.</li>
<li>Sla het op als profiel voor gesprekken of streams die je vaak doet.</li>
<li>Gebruik auto-ducking als je achtergrondapps gedempt wilt in plaats van gedood.</li>
<li>Boost je gehouden app als hij op zichzelf te stil is.</li>
</ul>

<p>Wil je alleen horen wat ertoe doet en de rest het zwijgen opleggen? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> en stel je eerste alles-behalve-dempen-profiel in binnen een minuut.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Houd een ander volume aan voor speakers vs koptelefoon op Mac",
    description: "macOS vergeet je volumemix op app-niveau elke keer dat je wisselt tussen speakers en koptelefoon. Hier lees je waarom het gebeurt, de handmatige grenzen, en hoe volumegeheugen per app het oplost.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>macOS onthoudt eigenlijk een apart systeemvolume voor elk uitvoerapparaat, maar het vergeet je balans op app-niveau elke keer dat je wisselt. Dus koptelefoon en speakers houden elk hun eigen algemene niveau, maar op het moment dat je loskoppelt, knalt de ene app en verdwijnt de andere. De oplossing is volumegeheugen per app dat apparaatwissels overleeft, waar macOS geen native gereedschap voor heeft.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Houd een ander volume aan voor speakers vs koptelefoon op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Wat macOS wel en niet onthoudt</h2>

<p>Er bestaat een veelvoorkomend geloof dat macOS elk uitvoerapparaat identiek behandelt. Dat doet het niet. Elk uitvoerapparaat bewaart zijn eigen systeemvolume. Zet je MacBook-speakers op 30% en je AirPods op 80%, en macOS houdt die twee getallen apart. Sluit aan, koppel los, verbind opnieuw, en elk apparaat keert terug naar waar je het liet.</p>

<p>Dus waarom voelt de ervaring dan nog steeds kapot? Omdat dat geheugen ophoudt bij de enkele, globale schuif. macOS heeft precies één volumebediening voor alles wat op een bepaald apparaat speelt. Het onthoudt niet hoe luid afzonderlijke apps waren. Wanneer je van speakers naar koptelefoon wisselt, blijft de balans tussen Spotify, een Zoom-gesprek en een YouTube-tabblad niet behouden, omdat die balans nooit bestond. Elke app deelt dezelfde schuif.</p>

<p>Het resultaat is de frustratie die mensen beschrijven als "ander volume voor speakers vs koptelefoon." Wat ze meestal willen is niet alleen een ander master-niveau per apparaat, maar een onthouden mix: stille muziek, luide gesprekken, meldingen lager gezet, en die mix intact of ze nu op bureauspeakers of koptelefoon zitten.</p>

<h2>De handmatige workarounds en waar ze tekortschieten</h2>

<p>Je komt een eind met ingebouwde tools, en het is de moeite waard het plafond te kennen voordat je naar iets anders grijpt.</p>

<ul>
<li><strong>Stel het systeemvolume van elk apparaat één keer in.</strong> Speel audio af via je speakers, stel het niveau in, wissel dan de uitvoer naar koptelefoon en stel dat niveau in. macOS behoudt beide. Dit regelt master-volume per apparaat maar niets per app.</li>
<li><strong>Gebruik volume per app waar de app het biedt.</strong> Spotify, VLC en de meeste browsers hebben hun eigen interne volume. Je kunt een luide app binnen de app zelf bijstellen. De catch: deze instelling leeft in de app, niet in het apparaat, dus het verandert niet wanneer je naar koptelefoon wisselt, en de meeste apps (Slack, Zoom, systeemmeldingen, Mail) hebben zo'n bediening helemaal niet.</li>
<li><strong>Wissel de uitvoer vanuit Bedieningspaneel of de menubalk.</strong> Option-klik op het volume-icoon in de menubalk om snel tussen apparaten te springen. Snel, maar het beweegt alleen het master-niveau, het herstelt geen mix per app.</li>
</ul>

<p>Deze geven je een master-volume per apparaat. Wat geen ervan je geeft is een onthouden balans per app die je over apparaten heen volgt. Dat gat is precies waar de ergernis zit, en het is structureel: het OS heeft simpelweg geen mixer per app, anders dan Windows, dat er al jaren een uitbrengt.</p>

<h2>Volumegeheugen per app, en waarom apparaatwisseling het echte probleem is</h2>

<p>De diepere oplossing is elke app zijn eigen volume geven en die instellingen laten voortbestaan. Daar is een mixer per app zoals <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> voor gebouwd. Het zit in je menubalk, vermeldt elke app die momenteel geluid produceert, en geeft elk een onafhankelijke schuif, een demp-schakelaar en zelfs een boost voorbij 100% voor stille apps.</p>

<p>Het deel dat telt voor het speakers-vs-koptelefoon-probleem: die niveaus worden onthouden. Zet je muziek op 40%, je gesprekken op 90% en een babbelende app op gedempt, en <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> houdt die mix. Wanneer je je koptelefoon loskoppelt en terugvalt op speakers, ben je niet elke keer drie apps met de hand aan het herbalanceren.</p>

<p>Volumeprofielen brengen dit verder. Je kunt een benoemde set niveaus per app opslaan en met één klik terughalen, zodat een "koptelefoon, gefocust werk"-mix en een "speakers, vergaderingen"-mix elk een enkele selectie zijn in plaats van een handmatige reset.</p>

<blockquote><p>De mentale verschuiving: stop met denken aan één master-schuif die je steeds versleept, en begin te denken aan een opgeslagen mix per situatie. Apparaatwisseling houdt op een herbalanceerklus te zijn.</p></blockquote>

<h2>Snel schakelen van uitvoer zonder je mix te verliezen</h2>

<p>Van apparaat wisselen zou snel en niet-destructief moeten zijn. Vanuit hetzelfde menubalkpaneel kun je je uitvoerapparaat veranderen, dus van speakers naar koptelefoon gaan is één klik, en je niveaus per app komen mee in plaats van terug te vallen op een enkel globaal getal.</p>

<p>Een verwante functie die het vermelden waard is, is auto-ducking: wanneer er audio binnenkomt op je microfoon (je begint te praten, of een gesprek begint), dippen andere apps automatisch zodat je gehoord kunt worden, en keren daarna terug naar hun ingestelde niveau. Het is hetzelfde principe toegepast op aandacht in plaats van apparaten, weer iets wat macOS niet uit zichzelf doet.</p>

<h2>Hoe je het instelt</h2>

<ul>
<li>Installeer <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> uit de Mac App Store. Het is sandboxed, dus er is geen driver, geen DMG en geen kernelextensie om goed te keuren.</li>
<li>Speel audio af in de apps die je het meest gebruikt zodat ze in de mixer verschijnen.</li>
<li>Stel het niveau van elke app in, demp wat je niet wilt en boost wat te stil is.</li>
<li>Sla die opstelling op als profiel, bijvoorbeeld een afgestemd op koptelefoon en een op speakers.</li>
<li>Wanneer je van apparaat wisselt, haal het bijpassende profiel terug, of laat gewoon je opgeslagen niveaus per app meekomen.</li>
</ul>

<p>De eerlijke samenvatting: macOS onthoudt wel volume per uitvoerapparaat op masterniveau, maar het zal nooit je mix per app onthouden, omdat het geen mixer per app heeft. Als je werkelijke doel een consistente balans tussen muziek, gesprekken en meldingen is die elke wissel tussen speakers en koptelefoon overleeft, heb je geheugen per app bovenop het OS nodig.</p>

<p>Wil je dat speakers en koptelefoon hun eigen mix houden zonder elke app opnieuw bij te stellen? <a href="https://apps.apple.com/app/id6772792641">Haal SoundDial in de Mac App Store</a> voor een eenmalige €14,99, geen abonnement, geen drivers.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control stopgezet? De beste Mac volumevervanging per app (2026)",
    description: "Sound Control van Static Z Software wordt stopgezet en breekt op de moderne macOS. Dit is waarom het niet meer werkte, wat het deed, en de beste volumemixer per app om naar over te schakelen in 2026.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Sound Control van Static Z Software wordt stopgezet en niet langer verkocht of bijgewerkt, en faalt steeds vaker op de moderne macOS omdat het vertrouwde op een audiostuurprogramma op kernelniveau dat Apple heeft vergrendeld. Als u vandaag volume per app nodig heeft, is de schoonste vervanging <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een Mac App Store-mixer in een sandbox zonder stuurprogramma's.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control stopgezet? De beste Mac volumevervanging per app (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Wat Sound Control daadwerkelijk deed</h2>
<p>Sound Control was jarenlang het antwoord op het echte macOS-gat: er is nog steeds geen ingebouwde volumemixer per app op de Mac. Windows heeft er sinds Vista een in zijn volumemixer, maar macOS geeft je slechts één masterslider. Sound Control vulde dat gat met een overzichtelijk menubalkpaneel waarmee je:</p>
<ul>
<li>Stel een onafhankelijk volumeniveau in voor elke actieve app.</li>
<li>Demp individuele apps zonder de rest van uw systeemaudio aan te raken.</li>
<li>Geef stille apps een boost tot boven de 100 procent.</li>
<li>Pas equalizer- en balansaanpassingen per app toe.</li>
<li>Routeer audio en pin-apps naar specifieke uitvoerapparaten.</li>
</ul>
<p>Voor iedereen die ooit een Zoom-oproep heeft gehad terwijl een YouTube-tabblad op de achtergrond fluisterde, was die bediening per app transformatief. Het werd een stille basis op veel machines van de Mac-hoofdgebruikers.</p>

<h2>Waarom het niet meer werkte</h2>
<p>Het eerlijke technische verhaal is hier van belang, omdat het verklaart waarom dit geen bug is die iemand zomaar kan patchen. Sound Control werkte door een systeemaudiostuurprogramma te installeren: een kernelextensie (kext) die zichzelf in de macOS-audiopijplijn plaatste, zodat deze de uitvoer van elke app kon onderscheppen en opnieuw vormgeven. Die diepe hook is precies wat de EQ- en boost-functies mogelijk maakte.</p>
<p>Beginnend met macOS 10.15 Catalina en steeds sneller door Big Sur en de Apple Silicon-overgang, begon Apple kernelextensies af te schaffen ten gunste van alternatieven voor de gebruikersruimte. Op Apple Silicon Mac's vereist het laden van kext's van derden een verlaging van de systeembeveiliging in de herstelmodus, en Apple heeft duidelijk gemaakt dat oudere audio-kext's op geleende tijd staan. Static Z Software stopte uiteindelijk met de verkoop en ontwikkeling van Sound Control. Het resultaat: bij recente macOS-versies mislukken de installaties, valt het geluid weg of weigert het stuurprogramma eenvoudigweg te laden zonder beveiligingsdowngrades die de meeste mensen terecht niet willen doorvoeren.</p>
<blockquote>Dit is geen nalatigheid van de kant van de ontwikkelaar. Het is een verschuiving op platformniveau. Apple heeft de deur gesloten voor het soort low-level audiodriver waar de Sound Control omheen is gebouwd, en geen enkele update kan deze volledig heropenen.</blockquote>

<h2>Wat is er veranderd op de moderne macOS</h2>
<p>Apple heeft wel één relevant ding toegevoegd: Core Audio biedt nu een Tap API (geïntroduceerd in macOS 14.2 Sonoma) waarmee apps audio per proces uit de gebruikersruimte kunnen vastleggen en verwerken - geen kext, geen beveiligingsdowngrade, geen herstart naar Recovery. Dit is het gesanctioneerde moderne pad voor audio per app, en dit is waar een huidige mixer op zou moeten worden gebouwd. De afweging is eerlijk: het tikken op de gebruikersruimte is beperkter dan bij een oude kerneldriver, dus je zou een schoon volume per app, mute en boost moeten verwachten in plaats van de volledige parametrische EQ die Sound Control per app aanbiedt.</p>

<h2>De beste vervanger: SoundDial</h2>
<p>Als je de kern wilt van wat Sound Control deed (onafhankelijk volume per app) op een Mac, kun je deze veilig en up-to-date houden: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is de dichtstbijzijnde optie voor schone migratie in 2026. Het is een menubalk-per-app-volumemixer gebouwd voor de moderne macOS-audiostack. Wat wordt overgenomen uit de Sound Control-workflow:</p>
<ul>
<li><strong>Onafhankelijk volume per app</strong> — één schuifregelaar per actieve applicatie, direct in de menubalk.</li>
<li><strong>Dempen per app</strong> - zet één app stil terwijl al het andere blijft spelen.</li>
<li><strong>Volumeboost per app</strong> – duw een stille app boven het normale plafond.</li>
<li><strong>Volumeprofielen</strong> - bewaar mixeropstellingen voor verschillende contexten (gesprekken, muziek, gamen) en schakel hiertussen.</li>
<li><strong>Automatisch ontwijken</strong> — automatisch het volume van de app op de achtergrond verlagen, handig als u begint te praten of als er een oproep binnenkomt.</li>
<li><strong>Snelle uitgangsschakeling</strong> - spring tussen luidsprekers, hoofdtelefoons en andere apparaten zonder in Systeeminstellingen te duiken.</li>
</ul>
<p>De praktische verschillen die van belang zijn bij een migratie: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> wordt verzonden via de Mac App Store, is in een sandbox geplaatst en installeert geen stuurprogramma's en geen DMG. Dat betekent dat er geen kernelextensie moet worden goedgekeurd, geen herstelmodus en geen verlaging van de beveiligingspositie van uw Mac - precies de pijnpunten die Sound Control hebben gedood. Het betreft een eenmalige aankoop van €14,99, geen abonnement.</p>

<h2>Hoe u stap voor stap kunt overstappen</h2>
<ul>
<li><strong>Verwijder Sound Control netjes.</strong> Omdat er een stuurprogramma is geïnstalleerd, gebruikt u het eigen verwijderprogramma als het nog steeds actief is, of verwijdert u de componenten van het audiostuurprogramma voordat u iets nieuws installeert. Twee concurrerende audiohooks kunnen storingen veroorzaken.</li>
<li><strong>Installeer SoundDial vanaf de App Store.</strong> Geen herstart of beveiligingswijzigingen vereist.</li>
<li><strong>Verleen de gevraagde audiotoestemming.</strong> Hierdoor kan de uitvoer per app op de moderne macOS worden gelezen en beheerd.</li>
<li><strong>Open het menubalkpaneel en stel niveaus in.</strong> Uw actieve apps verschijnen met individuele schuifregelaars; indien nodig aanpassen, dempen of versterken.</li>
<li><strong>Sla een profiel op.</strong> Als u favoriete Sound Control-instellingen had, kunt u deze opnieuw aanmaken als profielen, zodat u met één klik kunt overschakelen.</li>
</ul>

<h2>Eerlijke verwachtingen</h2>
<p>Als uw enige reden om Sound Control te gebruiken volume, mute en boost per app was, dan is een moderne sandbox-mixer de oplossing voor u. Als je zwaar leunde op de per-app-equalizer, houd er dan rekening mee dat diepe EQ gebonden was aan het oude drivermodel en de moeilijkste functie is om netjes te reproduceren onder de huidige regels van Apple. Stel uw verwachtingen dienovereenkomstig in, en u zult niet verrast worden.</p>

<p>Klaar om het volume per app terug te krijgen zonder kopzorgen voor de bestuurder? <a href="https://apps.apple.com/app/id6772792641">Koop SoundDial op de Mac App Store</a> — eenmalig € 14,99, sandboxed, geen abonnement, geen stuurprogramma's.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny is verdwenen: de moderne Mac volume-app per app om deze te vervangen",
    description: "SoundBunny van Prosoft wordt stopgezet. Hier is de huidige, actief onderhouden macOS volumemixer per app om deze te vervangen - plus hoe u uw audio-installatie per app kunt migreren zonder kernelstuurprogramma's.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Als SoundBunny niet meer werkt of niet meer wordt verkocht, is de moderne vervanger dat wel <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalk-per-app-volumemixer gebouwd voor de huidige macOS. Het geeft je dezelfde kerntaak – onafhankelijk volume, mute en boost per applicatie – als een eenmalige Mac App Store-aankoop van € 14,99, zonder kerneldriver, DMG of abonnement om te beheren.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – SoundBunny is verdwenen – de moderne Mac volume-app per app om deze te vervangen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Wat is er met SoundBunny gebeurd?</h2>
<p>SoundBunny was het volumehulpprogramma per app van Prosoft Engineering voor macOS. Hiermee kunt u rechtstreeks vanuit de menubalk voor elke actieve app een ander volumeniveau instellen: muziek zacht, een oproep luid, een browser ergens daar tussenin. Jarenlang was het een van de weinige tools die een leemte opvulden die Apple nooit heeft gedicht.</p>
<p>Het probleem is dat SoundBunny verouderde software is. Het heeft geen gelijke tred gehouden met de diepgaande veranderingen die Apple heeft aangebracht in de macOS-audio en -beveiliging: Apple Silicon, de strengere runtime, aangescherpte regels voor systeemextensies en het verwijderen van oudere audio-hooks. Wanneer een dergelijk hulpprogramma geen updates meer ontvangt, gaat het uiteindelijk kapot: het start niet op, verliest de controle over app-streams na een OS-update of kan eenvoudigweg niet netjes worden geïnstalleerd op een moderne Mac. Als dat is waar je bent, doe je niets verkeerd. De app staat erachter, niet jij.</p>

<h2>Waarom macOS überhaupt nog een mixer van derden nodig heeft</h2>
<p>Hier is het eerlijke deel: dit is een echte leemte in macOS, geen bug die je kunt oplossen in Instellingen. Windows levert al ruim tien jaar een volumemixer per app. macOS heeft er nog nooit een gehad. De schuifregelaar voor het systeemvolume en de geluidsinstellingen regelen uw <em>uitvoerapparaat</em> als geheel: elke app heeft hetzelfde masterniveau. Er is geen ingebouwde manier om te zeggen "houd Safari op 40% maar Zoom op 100%."</p>
<p>Dat is de reden waarom er tools als SoundBunny bestonden, en waarom vervanging vandaag de dag nog steeds nodig is. De behoefte verdween niet toen de app dat deed; Apple heeft er nog steeds geen aandacht aan besteed.</p>

<h2>De moderne vervanger: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een volumemixer per app die in je menubalk staat en de dingen doet waar SoundBunny-gebruikers op vertrouwden, gebouwd tegen de macOS van vandaag in plaats van die van gisteren. De functieoverlap omvat de essentie:</p>
<ul>
<li><strong>Onafhankelijk volume per app</strong> — één schuifregelaar per actieve applicatie, precies het mentale SoundBunny-model.</li>
<li><strong>Dempen per app</strong> - zet een enkele luidruchtige app stil zonder al het andere aan te raken.</li>
<li><strong>Volumeboost per app</strong> - druk op een stille app <em>hierboven</em> 100% wanneer een video of gesprek te laag wordt opgenomen. SoundBunny kon het eerdere systeemmaximum niet op betrouwbare wijze versterken op de moderne macOS; boost is hier een echte upgrade.</li>
<li><strong>Volumeprofielen</strong> - sla een reeks niveaus per app op (een "werk"-mix, een "gaming"-mix) en schakel hiertussen in plaats van de schuifregelaars één voor één te verschuiven.</li>
<li><strong>Automatisch ontwijken</strong> - automatisch het volume van de app op de achtergrond verlagen wanneer een andere audiobron (zoals uw microfoon tijdens een gesprek) actief wordt.</li>
<li><strong>Snelle uitgangsschakeling</strong> — spring tussen luidsprekers, hoofdtelefoons en andere uitgangen vanuit hetzelfde menu.</li>
</ul>

<h2>Hoe migreren er eigenlijk uitziet</h2>
<p>Er is geen importstap – volumeniveaus per app zijn geen bestanden die u overdraagt – maar de overstap is snel:</p>
<ul>
<li><strong>Verwijder SoundBunny op de juiste manier.</strong> Sluit het af en verwijder vervolgens de app. Als er een helper of login-item is geïnstalleerd, verwijder dat dan ook, zodat twee hulpprogramma's niet over dezelfde audiostreams vechten.</li>
<li><strong>Installeer SoundDial vanaf de Mac App Store.</strong> Het is in een sandbox geplaatst en via de winkel gedistribueerd, dus er hoeft geen DMG te worden gemount en er is geen waarschuwing voor een 'ongeïdentificeerde ontwikkelaar'. Eén aankoop, gekoppeld aan uw Apple ID.</li>
<li><strong>Verleen audiotoegang bij de eerste lancering.</strong> macOS vraagt toestemming aan SoundDial om app-audio te zien. Dit is het moderne, gesanctioneerde pad dat Apple biedt: geen kernelextensie, geen herstart, geen verlaging van de systeembeveiliging. Geef het toe en uw actieve apps verschijnen als schuifregelaars.</li>
<li><strong>Herbouw je mix.</strong> Stel uw gebruikelijke apps in en sla dat arrangement vervolgens op als profiel, zodat u het nooit opnieuw hoeft te doen.</li>
</ul>

<h2>De praktische verschillen met SoundBunny</h2>
<p>Het belangrijkste verschil is dat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is actuele software. Het draait native op Apple Silicon, maakt gebruik van de door Apple ondersteunde audio-API's en is een Mac App Store-app - wat betekent dat updates via de winkel arriveren en is gebouwd om OS-upgrades te overleven in plaats van ze kapot te maken. Omdat hij in een sandbox zit, betekent dit ook dat hij niet buiten zijn baan kan reiken, wat geruststellend is voor iets dat zich tussen je apps en je luidsprekers bevindt.</p>
<p>Een paar eerlijke kanttekeningen, dus de verwachtingen kloppen. Omdat SoundDial binnen het audioframework van Apple werkt, is de bediening het beste voor standaardapps die via de normale systeemuitvoer lopen. Sommige software speelt audio af via zijn eigen pad of via een exclusief apparaat, en geen enkele menubalkmixer (inclusief de SoundBunny) kan deze volledig regelen. En het volume per app is inherent een softwarelaag bovenop macOS; het is geen hardwaremixer. Binnen die echte grenzen doet het het werk dat SoundBunny vroeger deed.</p>

<blockquote>Als je van Windows bent overgestapt naar een Mac en een volumemixer per app verwacht, is dit de tool die dat gat opvult - en nu is het er een die daadwerkelijk wordt onderhouden.</blockquote>

<p>SoundBunny had een goede run, maar het is een erfenis. Als je volume, dempen en boost per app nodig hebt op een moderne Mac, <a href="https://apps.apple.com/app/id6772792641">koop SoundDial op de Mac App Store</a> — €14,99 eenmalig, geen abonnement, geen chauffeurs.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 Alternatief voor Mac: volume per app zonder de Boom 3D-upsell",
    description: "Boom 2 is verouderd en blijft je naar Boom 3D pushen. Als je alleen volume per app en een simpele boost wilt voor de moderne macOS, dan is hier een gericht alternatief en hoe het werkt.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Als je Boom 2 leuk vond voor een systeembrede boost, maar eenvoudig wilt <strong>per app</strong> volume op een huidige Mac, is het eerlijke antwoord dat de Boom 2 verouderd is en niet langer het juiste hulpmiddel. Een gericht alternatief is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, een menubalkmixer die elke app zijn eigen volumeschuifregelaar, mute en boost geeft, voor eenmalig € 14,99, zonder push naar een grotere bundel.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 2 Alternatief voor Mac: volume per app zonder de Boom 3D-upsell" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom Boom 2 niet meer past</h2>
<p>Boom 2 was om een specifieke reden een geliefde app: het verhoogde het algehele volume van je Mac tot boven het systeemmaximum en voegde een equalizer toe. Het deed dat systeembreed, niet per app. In 2015 was dat prima. In 2026 heeft het twee problemen.</p>
<p>Ten eerste is het erfenis. Global Delight heeft duidelijk zijn energie verplaatst naar Boom 3D, en als je de Boom 2-productpagina opent, zul je merken dat je vrijwel onmiddellijk naar de nieuwere, duurdere app wordt geduwd. Boom 2 bestaat nog steeds, maar het is een springplank die de verkoper gebruikt om Boom 3D te verkopen, en niet een product dat actieve liefde krijgt.</p>
<p>Ten tweede, en belangrijker: Boom 2 was nooit een volumemixer per app. Het verhoogt en vormt één masteruitvoer. Als uw werkelijke pijn is dat een Slack-ping luider is dan uw muziek, of dat een browsertabblad een oproep overstemt, dan lost Boom 2 dat niet op. Het maakt alles samen luider. Dat is een andere baan.</p>

<h2>Wat 'volume per app' eigenlijk betekent op macOS</h2>
<p>Hier is de eerlijke context die de meeste alternatieve razzia's overslaan: macOS heeft helemaal geen ingebouwde volumemixer per app. Windows heeft er al jaren een: klik met de rechtermuisknop op de luidspreker, open de volumemixer en stel Chrome in op 40% en Spotify op 80%. Apple heeft dat nooit verzonden. De macOS-volumetoets verplaatst slechts één hoofdniveau.</p>
<p>Dus als je op zoek bent naar een ‘Boom 2-alternatief’, ben je vaak niet echt op zoek naar een luidere Mac – het is de bediening per app die Windows-gebruikers als vanzelfsprekend beschouwen. Dat is een echt gat in het besturingssysteem, niet iets dat Boom 2 of welke app dan ook vergat te bouwen.</p>

<h2>Waar SoundDial past</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is speciaal voor die kloof gebouwd. Het bevindt zich in de menubalk en geeft een overzicht van de apps die momenteel audio afspelen, elk met een eigen schuifregelaar. Je stelt niveaus per app in in plaats van één hoofdbediening aan te duwen en er het beste van te hopen.</p>
<p>Wat het doet:</p>
<ul>
<li><strong>Onafhankelijk volume per app</strong> - stil de browser, bewaar muziek waar u maar wilt, geen wereldwijd compromis.</li>
<li><strong>Dempen per app</strong> - zet een luidruchtige app stil zonder iets anders aan te raken.</li>
<li><strong>Boost per app</strong> – duw een individuele app voorbij het normale plafond wanneer een video of gesprek te stil wordt opgenomen. Dit is het stuk dat Boom 2-fans meestal missen, behalve dat het hier op één app is gericht in plaats van op het hele systeem.</li>
<li><strong>Volumeprofielen</strong> - sla lay-outs zoals 'focus', 'vergadering' of 'gaming' op en schakel met één klik.</li>
<li><strong>Automatisch ontwijken</strong> - zet andere apps automatisch lager als je begint te praten, handig voor bellen en opnemen.</li>
<li><strong>Snelle uitgangsschakeling</strong> — spring tussen luidsprekers, hoofdtelefoons en andere uitgangen vanuit hetzelfde menu.</li>
</ul>

<h2>Hoe je het moet instellen</h2>
<p>De workflow is kort:</p>
<ul>
<li>Installeren <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> van de Mac App Store - geen DMG, geen stuurprogramma, geen herstart.</li>
<li>Klik op het menubalkpictogram om elke app te zien die momenteel geluid produceert.</li>
<li>Sleep de schuifregelaar van elke app naar het gewenste niveau; individueel dempen of versterken indien nodig.</li>
<li>Bewaar het arrangement als profiel als u het later opnieuw wilt gebruiken.</li>
</ul>
<p>Omdat het via de App Store wordt verzonden, zit het in een sandbox en kan het netjes worden geïnstalleerd. Dat is de moeite waard om te noemen, omdat sommige oudere audiotools afhankelijk waren van kernelextensies of virtuele audiostuurprogramma's - iets waar de moderne macOS zich steeds meer tegen verzet. SoundDial vraagt ​​u niet om een ​​stuurprogramma te installeren of een beveiligingsinstelling te verlagen.</p>

<h2>Een eerlijke beperking</h2>
<p>Een boost per app is echt, maar geen magie. Als de bronaudio van een app echt stil is of slecht is opgenomen, verhoogt het versterken ervan de ruisvloer samen met het signaal, zodat zeer stil materiaal sissend kan klinken als er hard op wordt geduwd. Dat is een natuurkundige limiet van versterking, en geen fout in een bepaalde app – de systeemboost van Boom 2 had dezelfde afweging. Beschouw boost als speelruimte voor praktische gevallen, niet als redding voor kapotte audio.</p>

<h2>Boom 2 versus een gerichte mixer</h2>
<p>Als wat je leuk vond aan de Boom 2 systeembrede luidheid plus een EQ was, en je niets geeft om bediening per app, dan is de Boom 3D de beoogde opvolger van de leverancier - dat is een eerlijke weg, en we zullen niet anders doen alsof. Maar als je Boom 2 hebt geprobeerd en beseft dat je eigenlijk één app lager of hoger wilt zetten zonder alles te verplaatsen, dan is een EQ-en-boost-bundel het verkeerde hulpmiddel.</p>
<blockquote>Boom 2 maakt de hele Mac luider. Met een per-app-mixer kunt u beslissen welke app luider is. Die lossen verschillende problemen op.</blockquote>
<p>Het prijsverschil is ook de moeite waard om duidelijk te benoemen. SoundDial kost eenmalig € 14,99. Er is geen abonnement, geen proefperiode die overgaat in een groter abonnement, en geen in-app-pad dat u naar een duurder niveau leidt. Je koopt de mixer, je bent eigenaar van de mixer.</p>

<p>Als volume per app – en niet een systeembrede EQ – is wat je echt zocht, <a href="https://apps.apple.com/app/id6772792641">probeer SoundDial op de Mac App Store</a> en stel je niveaus in zoals macOS je dat altijd had moeten toestaan.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune versus SoundDial: gratis open source versus betaald per app-volume op Mac",
    description: "FineTune is een gratis, open-source volume-app per app voor Mac; SoundDial is een betaalde App Store-app in een sandbox met boost, profielen en ondersteuning. Hier is een eerlijke vergelijking om u te helpen kiezen.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>FineTune is een gratis, open-source volumemixer per app voor macOS, dus als prijs je enige zorg is, is dit een echte optie. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een betaalde (€ 14,99, eenmalig) Mac App Store-app die volumeboost per app, opgeslagen profielen, automatisch ontduiken en leveranciersondersteuning toevoegt. De echte keuze is gratis en doe-het-zelf versus sandbox-en-ondersteund.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune versus SoundDial: gratis open source versus betaald volume per app op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Het probleem dat beide apps oplossen</h2>

<p>macOS heeft nog steeds geen ingebouwde volumemixer per app. Windows heeft er al jaren een: klik met de rechtermuisknop op het luidsprekerpictogram, open de volumemixer en elke app krijgt zijn eigen schuifregelaar. Op een Mac krijg je precies één systeemvolumeschuifregelaar voor alles: je muziek, een videogesprek, YouTube, meldingen en een game delen het allemaal. Als uw oproep te zacht is en de Spotify te luid is, is uw enige oplossing het volledig dempen van de Spotify.</p>

<p>Zowel FineTune als SoundDial zijn er om die leemte op te vullen. Ze geven elke actieve app zijn eigen volumeregeling, zodat u bijvoorbeeld een vergadering op 100% kunt houden en de achtergrondmuziek kunt terugbrengen naar 20% - zonder de hoofdschuifregelaar aan te raken.</p>

<h2>Wat FineTune goed doet</h2>

<p>FineTune is een nieuwere, gratis, open-source app in de geest van SoundSource. Laten we eerlijk zijn over de sterke punten, want ze zijn echt:</p>

<ul>
  <li><strong>Het kost niets.</strong> Geen licentie, geen proefperiode, geen upgrade-gedoe.</li>
  <li><strong>De bron is open.</strong> Je kunt precies lezen wat het doet, het controleren op privacy en – als je Swift kent – het aanpassen of afsplitsen.</li>
  <li><strong>Het is gemeenschapsgedreven.</strong> Bugs kunnen door iedereen worden opgelost en de code overleeft elk bedrijf.</li>
  <li><strong>Het dekt de kernbehoefte.</strong> Onafhankelijk volume per app, de functie waar 90% van de mensen daadwerkelijk naar op zoek is.</li>
</ul>

<p>Als uw enige vereiste is: "Laat mij één app uitschakelen zonder alles zachter te zetten", en u vertrouwd bent met software die zonder formele supportdesk wordt geleverd, dan is FineTune een legitiem antwoord. Het hier aanbevelen is geen concessie; het is eerlijk.</p>

<h2>De eerlijke afwegingen van de doe-het-zelf-route</h2>

<p>Gratis en open source brengt reële kosten met zich mee die niet op een prijskaartje staan. Dit zijn niet specifiek de FineTune, maar de aard van de aanpak:</p>

<ul>
  <li><strong>Installatie is handmatig.</strong> Open-source audiotools worden doorgaans gedistribueerd als een gedownloade build of een Homebrew-formule, niet via de App Store. Je installeert buiten de beoordeling van Apple om en je bent verplicht om het up-to-date te houden.</li>
  <li><strong>Audio-onderschepping per app is van nature kwetsbaar.</strong> Het routeren van de audio van een andere app is diepgaand systeemwerk. Wanneer Apple een macOS-update uitbrengt die de audiostack verandert, kunnen deze tools defect raken totdat iemand ze repareert. Met een vrijwilligersproject kan het zijn dat ‘iemand’ die maand bezig is.</li>
  <li><strong>Ondersteuning is de beste inspanning.</strong> Als er iets kapot gaat, is je verhaal een GitHub-probleem en wachten. Er is geen gegarandeerd antwoord en niemand is verplicht het probleem op te lossen.</li>
  <li><strong>De reikwijdte van de functies is wat de beheerders ook verzenden.</strong> De kernvolumeregeling is waarschijnlijk gedekt; extra's zijn volledig afhankelijk van de tijd van de bijdrager.</li>
</ul>

<blockquote>Het eerlijke frame: FineTune ruilt geld in voor onderhoudsverantwoordelijkheid. Je bespaart € 14,99 en loopt het risico dat een OS-update het kapot laat totdat de community het inhaalt.</blockquote>

<h2>Waar SoundDial anders is</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> neemt de tegenovergestelde handel. U betaalt één keer en in ruil daarvoor krijgt u een App Store-product met een leverancier erachter en een bredere functieset bovenop het volume per app:</p>

<ul>
  <li><strong>Volume en dempen per app</strong> – de gedeelde basislijn die beide apps leveren.</li>
  <li><strong>Volume per app BOOST</strong> – duw een te stille app voorbij de 100%. Handig voor apps met een zwakke audio-uitvoer waarbij het uitschakelen van andere apps nog steeds niet voldoende is.</li>
  <li><strong>Volumeprofielen</strong> - sla hele mixen op ("Meeting", "Focus", "Gaming") en schakel met één klik over in plaats van elke keer de schuifregelaars opnieuw in te stellen.</li>
  <li><strong>Automatisch ontwijken</strong> - automatisch achtergrondapps verlagen wanneer u spreekt of wanneer een gekozen app actief wordt, zodat oproepen worden doorgeschakeld zonder handmatig gedoe.</li>
  <li><strong>Snelle uitgangsschakeling</strong> — spring tussen luidsprekers, hoofdtelefoons en andere uitgangen vanuit de menubalk.</li>
</ul>

<p>Net zo belangrijk is <em>hoe</em> het wordt verzonden. SoundDial wordt in een sandbox geplaatst en gedistribueerd via de Mac App Store - geen afzonderlijke DMG, geen kernelstuurprogramma's, geen installatie van audiostuurprogramma's. Updates komen via de App Store, net als elke andere app, en er is een echte ontwikkelaar die een e-mail stuurt als er iets mis is. Dat is de concrete waarde van de € 14,99: niet alleen meer functies, maar iemand die verantwoordelijk is voor het werkend houden ervan in de macOS-releases.</p>

<h2>Een eerlijk voorbehoud dat voor beide geldt</h2>

<p>Geen enkele app van derden kan het audiosysteem van macOS in de Volume Mixer van Windows veranderen, omdat Apple geen schone openbare API beschikbaar stelt voor audio per app. Elke tool in deze categorie – gratis of betaald, open of gesloten – omzeilt die beperking met behulp van audiotechnieken op systeemniveau. Dat betekent dat zowel de FineTune als de SoundDial kunnen worden beïnvloed door grote macOS-audiowijzigingen. Het verschil is wie achteraf verantwoordelijk is voor de oplossing: een vrijwilligersgemeenschap of een betaalde leverancier wiens product ervan afhankelijk is.</p>

<h2>Welke moet je kiezen?</h2>

<ul>
  <li><strong>Kies FineTune als</strong> je wilt geen kosten, waardeert open-sourcetransparantie, hebt alleen een basisvolume per app nodig, kunt gemakkelijk buiten de App Store installeren en bent zelfvoorzienend als er iets kapot gaat.</li>
  <li><strong>Kies SoundDial als</strong> je wilt een App Store-installatie met één klik, extra's zoals boost, profielen en auto-ducking, en de geruststelling van updates en ondersteuning van een leverancier met skin in the game.</li>
</ul>

<p>Beide zijn geldig. Het komt er echt op neer of je liever geld uitgeeft of aandacht besteedt. Als u liever een ondersteunde app in een sandbox koopt en er nooit meer over nadenkt, <a href="https://apps.apple.com/app/id6772792641">koop SoundDial op de Mac App Store</a> voor een eenmalige € 14,99 — geen abonnement, geen chauffeurs, geen DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music versus SoundDial: is de gratis Mac-volumemixer voldoende?",
    description: "Een eerlijke strijd tussen de gratis Background Music-app en de betaalde SoundDial. Waar de gratis virtuele driver-aanpak werkt, waar deze kapot gaat, en wanneer een native mixer van € 14,99 de moeite waard is.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Background Music is gratis en echt goed in de basis: het geeft elke app zijn eigen volumeschuifregelaar en kan muziek automatisch pauzeren wanneer een andere app wordt afgespeeld. Als dat alles is wat je nodig hebt, gebruik het dan. Maar het is afhankelijk van een virtueel audiostuurprogramma dat kapot kan gaan na macOS-updates en het mist een boost per app, profielen en output-switching. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ruilt geld in voor een drivervrij, sandboxed, ondersteund alternatief.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music versus SoundDial: is de gratis Mac-volumemixer voldoende?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ten eerste de eerlijke waarheid over macOS</h2>
<p>macOS heeft geen ingebouwde volumemixer per app. Windows heeft er al meer dan tien jaar een in zijn volumemixer, maar op de Mac verplaatst de systeemschuif alles in één keer. Er is geen door Apple ondersteunde API waarmee een app van derden individuele applicatiestromen netjes kan onderscheppen en opnieuw in evenwicht kan brengen. Die ene kloof is de reden waarom tools als Background Music en SoundDial überhaupt bestaan, en het is de hoofdoorzaak van de meeste van de onderstaande afwegingen.</p>

<h2>Wat Background Music goed doet</h2>
<p>Background Music is een open-source menubalk-app die al jaren bestaat en niet voor niets een trouwe aanhang heeft. Het geeft je:</p>
<ul>
<li><strong>Onafhankelijk volume per app</strong> – het kernkenmerk. Zet de Spotify zachter terwijl u een gesprek luid houdt.</li>
<li><strong>Automatische pauze</strong> — het kan uw muziekspeler pauzeren wanneer de audio ergens anders begint, wat een leuke bijkomstigheid is voor vergaderingen.</li>
<li><strong>Een apparaatvolume dat u volgt</strong> en een eenvoudige, no-nonsense interface.</li>
<li><strong>Geen kosten</strong> — het is gratis en de code is openbaar.</li>
</ul>
<p>Voor veel mensen is dat genoeg. Als je hele verlanglijstje luidt: "Maak één luidruchtige app stiller zonder de rest aan te raken", dekt Background Music dit af, en je moet niet betalen voor iets dat je niet nodig hebt. Eerlijk zijn is hier van belang: dit is een legitiem nuttig hulpmiddel.</p>

<h2>Waar de vrije aanpak zijn naden laat zien</h2>
<p>De vangst is <em>hoe</em> Background Music bereikt volume per app. Omdat macOS geen officieel pad geeft, installeert het een virtueel audiostuurprogramma (een aangepaste versie van de oude Soundflower-aanpak) dat uw systeemaudio door zichzelf leidt. Die architectuur is slim, maar brengt reële kosten met zich mee:</p>
<ul>
<li><strong>Het breekt na macOS-updates.</strong> Virtuele audiostuurprogramma's zitten diep in het systeem en bij grote macOS-releases zijn deze in het verleden uitgeschakeld of gedestabiliseerd. Gebruikers melden routinematig stilte, vervorming of de noodzaak om opnieuw te installeren na het upgraden. Als het kapot gaat, sta je er vaak alleen voor.</li>
<li><strong>Installatie is zwaarder.</strong> U voegt een kernel-aangrenzend audioapparaat toe aan uw Mac, niet alleen een app. Schoon verwijderen kan lastig zijn.</li>
<li><strong>Het wordt uw standaarduitvoerapparaat.</strong> Omdat alles via het virtuele apparaat wordt geleid, kunnen sommige pro-audio-, conferentie- of game-apps zich vreemd gedragen, en het omschakelen van uw echte uitvoer is een extra stap.</li>
<li><strong>De ontwikkeling vindt plaats in het tempo van de gemeenschap.</strong> Er is geen supportdesk. Oplossingen komen wanneer een vrijwilliger tijd heeft, wat voor een audiotool die plotseling stil kan vallen een aanzienlijk risico is.</li>
</ul>
<p>Niets van dit alles maakt Background Music slecht. Het maakt het tot een gratis tool met de nadelen van een gratis tool.</p>

<h2>Waar u daadwerkelijk voor betaalt met SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een Mac App Store-app, die vormgeeft tot wat het is. Omdat App Store-apps in een sandbox zijn geplaatst en niet het soort low-level virtuele stuurprogramma kunnen leveren dat Background Music gebruikt, is SoundDial gebouwd om te worden uitgevoerd zonder een afzonderlijk audioapparaat of DMG te installeren. Dat betekent:</p>
<ul>
<li><strong>Geen eigenaardigheden van virtuele stuurprogramma's.</strong> Er is geen extra uitvoerapparaat dat uw audioketen kapt, en er is niets dat u opnieuw hoeft te installeren als het systeem verandert.</li>
<li><strong>Het overleeft macOS-updates veel sierlijker.</strong> App Store-distributie en sandboxing betekenen dat het is gebouwd op ondersteunde paden en wordt bijgewerkt via de winkel, dus het is veel minder waarschijnlijk dat een OS-upgrade u stil laat staan.</li>
<li><strong>Volumeboost per app.</strong> Dit is een echt verschil in functionaliteit: SoundDial kan een app pushen <em>hierboven</em> 100% voor stille bronnen: een podcast die te laag is opgenomen, een gedempt videogesprek. Background Music verzwakt alleen.</li>
<li><strong>Volumeprofielen.</strong> Sla een reeks niveaus per app op ("Vergadering", "Muziek", "Gaming") en schakel met één klik over in plaats van elke keer schuifregelaars te slepen.</li>
<li><strong>Automatisch ontwijken.</strong> Verlaag automatisch het volume van andere apps wanneer een gekozen bron wordt afgespeeld - een beter configureerbare versie van het idee voor automatisch pauzeren.</li>
<li><strong>Snelle uitgangsschakeling</strong> ingebakken in de menubalk, plus dempen per app.</li>
<li><strong>Echte steun.</strong> Het is een betaald product waarbij iemand verantwoordelijk is als er iets misgaat.</li>
</ul>

<h2>Het eerlijke besluit</h2>
<blockquote>Als je gratis wilt en alleen het basisvolume per app nodig hebt, en je geen probleem hebt met het oplossen van problemen na macOS-updates, dan is Background Music een solide keuze. Als je een boost, profielen, ducking, output-switching, geen kwetsbaarheid van de virtuele driver wilt en iemand die je een e-mail wilt sturen als deze kapot gaat, dan is SoundDial € 14,99 waard.</blockquote>
<p>Een paar betonnen tiebreakers. Als je regelmatig met te stille bronnen te maken hebt, rechtvaardigt boost alleen de prijs: de Background Music kan het geluid simpelweg niet luider maken dan de bron. Als je bang bent voor de jaarlijkse gok "zal mijn audio de update overleven", neemt de winkel-app in de sandbox die angst weg. Als je van set-and-forget-scènes houdt, besparen profielen echte wrijving. En het is een eenmalige € 14,99, geen abonnement, dus de vergelijking is een enkele aankoop versus de tijd die je besteedt aan het onderhouden van een gratis chauffeur.</p>
<p>Omgekeerd, als u een knutselaar bent die van open source houdt, de code wil lezen en meestal slechts één app weigert – bespaar dan uw geld. Beide tools lossen hetzelfde kernprobleem op; ze verschillen qua robuustheid, diepte van de functies en wie je vangt als de macOS eronder verandert.</p>

<p>Wilt u volume per app zonder de gok met de virtuele bestuurder? <a href="https://apps.apple.com/app/id6772792641">Koop SoundDial op de Mac App Store</a> — een eenmalig bedrag van € 14,99, in een sandbox, zonder stuurprogramma's, met ingebouwde boost, profielen en automatische ducking.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "Is SoundSource $ 39 waard? Een goedkoper eenmalig Mac-alternatief",
    description: "SoundSource is een krachtige Mac-audiotool voor ~ $ 39, maar het is overdreven als je alleen volume en boost per app nodig hebt. Hier vind je een eerlijke vergelijking en een eenmalig alternatief van € 14,99.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>SoundSource is de moeite waard als je de volledige toolkit nodig hebt: volume per app, een 10-bands EQ per app, audioroutering tussen apparaten en systeembrede effecten. Maar voor ongeveer $ 39 is het overdreven als je vooral volume per app, mute per app en een volumeboost wilt. Voor dat kleinere werk, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kost eenmalig €14,99.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Is SoundSource $ 39 waard? Een goedkoper eenmalig Mac-alternatief" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Wat SoundSource eigenlijk doet</h2>
<p>Rogue Amoeba's SoundSource is werkelijk een uitstekend stukje software, en het is belangrijk om daar eerlijk over te zijn. Het is niet zomaar een volumemixer. Het geeft je:</p>
<ul>
<li><strong>Volumeregeling per app</strong> uit de menubalk, de functie waar de meeste mensen voor komen.</li>
<li><strong>Een volledige 10-bands equalizer</strong> kunt u per app of systeembreed toepassen, plus andere audio-effecten (via Audio Unit-plug-ins).</li>
<li><strong>Uitvoer/invoerroutering</strong>, inclusief het verzenden van een enkele app naar een ander uitvoerapparaat dan de rest van het systeem.</li>
<li><strong>Snel schakelen tussen apparaten</strong> en hoofdtelefoonspecifieke EQ-presets.</li>
</ul>
<p>Als je een podcaster, streamer of audionerd bent en de EQ op je hoofdtelefoon wilt afstemmen, het geluid van een app naar een aparte luidspreker wilt omleiden of Audio Unit-effecten wilt stapelen, dan verdient SoundSource zijn prijs. Niets hier is een klop op.</p>

<h2>De prijsvraag</h2>
<p>SoundSource is een betaalde, eenmalige licentie van ongeveer $ 39 (prijzen variëren per versie en promoties). Het is geen terugkerend abonnement in de zin van Netflix, maar het volgt het klassieke patroon van betaalde apps: je koopt een grote versie en toekomstige grote upgrades zijn doorgaans betaalde upgrades met korting in plaats van voor altijd gratis. Over meerdere jaren is dat meer dan één enkele aankoop. Voor veel Mac-gebruikers is de eerlijke vraag: betaal ik $ 39 voor een routing-en-EQ-suite als ik alleen maar de volumeschuifregelaars per app aanraak?</p>

<blockquote>Als je SoundSource hebt geopend en alleen de volumeschuifregelaars en de mute-knoppen hebt gebruikt, betaal je voor een suite om één lade ervan te gebruiken.</blockquote>

<h2>Waarom het probleem überhaupt bestaat</h2>
<p>Hier is de eerlijke oorzaak: macOS heeft geen ingebouwde volumemixer per app. De Windows heeft er al jaren een, maar bij de Mac is het systeemvolume alles-of-niets. Er is geen door Apple geleverde manier om de Spotify stil te houden terwijl een videogesprek luid blijft, of om één app te dempen zonder al het andere aan te raken. Die kloof is precies waarom tools als SoundSource en <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bestaan. Het is een echte beperking van het besturingssysteem, en niet iets dat door beide apps een probleem heeft bedacht om op te lossen.</p>

<h2>Waar een lichtere, goedkopere optie past</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een menubalk-per-app-volumemixer die is gebouwd voor het gewone geval in plaats van voor het pro-audio-geval. Het omvat:</p>
<ul>
<li><strong>Onafhankelijk volume per app</strong> — zet uw muziek neer terwijl een vergadering op vol niveau blijft.</li>
<li><strong>Dempen per app</strong> - zet één app stil zonder de Mac te dempen.</li>
<li><strong>Volumeboost per app</strong> — duw een stille app boven de normale 100% als de bron gewoon te zacht is.</li>
<li><strong>Volumeprofielen</strong> — sla een reeks niveaus per app op (bijvoorbeeld een lay-out "focus" of "oproep") en schakel met één klik over.</li>
<li><strong>Automatisch ontwijken</strong> — automatisch andere apps verlagen wanneer u begint te praten of wanneer een gekozen app wordt afgespeeld.</li>
<li><strong>Snelle uitgangsschakeling</strong> — spring tussen luidsprekers, hoofdtelefoons en andere apparaten vanuit de menubalk.</li>
</ul>
<p>Het is <strong>€ 14,99 eenmalig</strong>, verkocht via de Mac App Store, dus het is een sandbox en er is geen aparte DMG, geen kernelextensie en geen audiostuurprogramma om te installeren. Je downloadt het zoals elke App Store-app en wordt bijgewerkt via de winkel.</p>

<h2>Een eerlijke vergelijking</h2>
<p>Wees helder over de afweging. SoundSource doet meer dan SoundDial, en als een van de volgende zaken voor u van belang is, is SoundSource de betere koop:</p>
<ul>
<li>Je wilt een echte per-app of systeem <strong>gelijkmaker</strong> en Audio Unit-effecten.</li>
<li>Dat moet <strong>stuur een enkele app naar een ander uitvoerapparaat</strong> dan al het andere.</li>
<li>Je vertrouwt op <strong>hoofdtelefoonspecifieke EQ-presets</strong> en fijnkorrelige audioverwerking.</li>
</ul>
<p>SoundDial doet geen EQ of apparaatroutering per app. Het is bewust smaller gemaakt. Wat het je in ruil daarvoor oplevert, is een lagere prijs, een kleinere voetafdruk en een gerichte menubalkinterface voor datgene wat de meeste mensen eigenlijk wilden: elke app op het door jou gekozen niveau houden, met boost en profielen bovenaan.</p>

<h2>Dus, is SoundSource het waard?</h2>
<p>Ja, als je de EQ en routing gebruikt. Het is volwassen, goed ondersteunde software van een gerespecteerde ontwikkelaar, en de prijs weerspiegelt de werkelijke mogelijkheden. Maar "de moeite waard" hangt af van wat je aanraakt. Als je de app opent en alleen de volumeschuifregelaars aanpast, een app dempt of wenst dat een stille app luider is, betaal je premium-suitegeld voor basismixerbehoeften. In dat geval is een eenmalige tool van € 14,99 verstandiger, en je kunt later altijd overstappen naar SoundSource als je behoeften uitgroeien tot EQ en routing.</p>

<p>Als volume per app, boost, mute, profielen en automatisch ducken alles is wat je zoekt, <a href="https://apps.apple.com/app/id6772792641">koop SoundDial op de Mac App Store</a> — €14,99 eenmalig, geen abonnement, geen chauffeurs.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Te luid op Mac? Schakel één browser uit zonder alles te dempen",
    description: "Chrome luider knallen dan je andere apps op Mac? Leer de ingebouwde oplossingen (dempen per tabblad, geluidsinstellingen voor de site) en hoe u een echt volume per app instelt voor Chrome, zodat deze stiller blijft dan al het andere.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>macOS heeft geen ingebouwd volume per app, dus je kunt Chrome niet standaard lager zetten terwijl andere apps op vol volume staan. De snelste gratis oplossing is het dempen van luidruchtige tabbladen, het verlagen van het volume in elke videospeler of het blokkeren van geluid per site in de instellingen van Chrome. Voor een echt, aanhoudend volumeniveau met alleen Chrome heb je een mixer per app nodig.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Te luid op Mac? Schakel één browser uit zonder alles te dempen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom Chrome luider klinkt dan al het andere</h2>
<p>Chrome is niet noodzakelijkerwijs "luider" van opzet - het is dat Chrome audio routeert van vele onafhankelijke bronnen: YouTube, automatisch afgespeelde advertenties, videogesprekken, tabbladen met achtergrondmuziek en webapps die elk hun eigen luidheid leveren. Sommige sites worden goed onder de knie, advertenties zijn notoir luid en Chrome speelt ze allemaal af op het volledige uitvoerniveau van uw systeem. Ondertussen is je muziekapp of een gesprek misschien stiller, dus domineert Chrome de mix.</p>
<p>Op Windows opent u gewoon de volumemixer en sleept u de schuifregelaar Chrome naar beneden. macOS bevat die functie simpelweg niet. De systeemvolumetoets regelt alles in één keer, dus als je de Chrome lager zet, worden ook je muziek, meldingen en oproepen zachter gezet. Dat is de kernbeperking - en het is een OS-kloof, niet iets dat u verkeerd doet.</p>

<h2>Ingebouwde oplossingen die niets kosten</h2>
<p>Probeer deze voordat u iets installeert. Ze geven je geen enkele Chrome-volumeknop, maar ze lossen de meeste problemen met "één luide tab" op.</p>
<ul>
<li><strong>Demp een luidruchtig tabblad.</strong> Klik met de rechtermuisknop op het tabblad en kies 'Site dempen', of klik op het kleine luidsprekerpictogram dat verschijnt op een tabblad dat audio afspeelt. Hierdoor wordt dat tabblad volledig stilgezet zonder de rest van de Chrome aan te raken.</li>
<li><strong>Verlaag het volume in de speler.</strong> De meest betrouwbare truc: sleep de volumeschuif naar beneden in YouTube, Netflix of wat er ook wordt afgespeeld. Webspelers onthouden hun eigen niveau per site, dus een stillere YouTube blijft de volgende keer stil.</li>
<li><strong>Blokkeer geluid per site.</strong> Ga naar <em>chrome://settings/content/sound</em>. U kunt sites schakelen tussen 'toegestaan' en 'gedempt' en specifieke domeinen toevoegen aan een mute-lijst. Ideaal voor het permanent uitschakelen van sites die automatisch worden afgespeeld.</li>
<li><strong>Stop autoplay-advertenties.</strong> Advertentie-audio is vaak de echte boosdoener. Een inhoudblokkering of het dempen van het tabblad totdat u klaar bent om te kijken, verwijdert de meeste verrassende luidheid.</li>
</ul>
<blockquote>Deze zijn echt nuttig en gratis. Maar kijk eens wat ze niet kunnen: ze dempen of beheren individuele tabbladen. Geen van hen laat je zeggen: "Houd de hele Chrome op 40% terwijl mijn muziek op 100% blijft."</blockquote>

<h2>De eerlijke beperking: geen volume per app in macOS</h2>
<p>Als je werkelijke doel is: "Chrome moet altijd stiller zijn dan mijn andere apps", schieten de ingebouwde tools tekort. Dempen per tabblad is alles of niets. Spelersschuifregelaars worden gereset als een site ze niet onthoudt en moeten voortdurend opnieuw worden ingesteld. En het systeemvolume brengt alles samen.</p>
<p>Dit is een echte macOS-beperking, geen bug die u kunt wegconfigureren. Apple heeft nog nooit een volumemixer in Windows-stijl uitgebracht. De enige manier om specifiek voor Chrome een aanhoudend, onafhankelijk volumeniveau te krijgen, is een app van derden die zich tussen uw apps en uw uitvoerapparaat bevindt en winst per app toepast.</p>

<h2>Stel een echt volume per app in voor Chrome</h2>
<p>Een menu-barmixer zoals <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> geeft macOS de volumeregeling per app die hij mist. Het geeft een overzicht van elke app die momenteel audio afspeelt en geeft elke app een eigen schuifregelaar - zodat u Chrome naar een comfortabel niveau kunt brengen en Spotify, uw oproepen en systeemgeluiden precies kunt laten waar ze zijn.</p>
<p>Zo tem je er een luide Chrome mee:</p>
<ul>
<li>Open de menubalkmixer en zoek Chrome in de lijst met actieve apps.</li>
<li>Sleep de schuifregelaar van Chrome naar bijvoorbeeld 40 tot 50 procent. Andere apps blijven onaangeroerd.</li>
<li>Als een specifieke app dat ook is <em>rustig</em> gebruik in plaats daarvan een bel-app die fluistert <a href="https://apps.apple.com/app/id6772792641">volumeboost per app</a> om het boven de 100 procent te brengen, terwijl Chrome laag blijft.</li>
<li>Demp de Chrome direct met dempen per app wanneer u stilte nodig heeft zonder tabbladen te sluiten.</li>
</ul>
<p>Omdat het niveau aan de app is gekoppeld, blijft het hangen. Chrome blijft op het door u gekozen volume op tabbladen, sites en opnieuw opstarten - u hoeft de schuifregelaars van de speler niet telkens opnieuw te slepen wanneer u een nieuwe video opent.</p>

<h2>Verder gaan: profielen, ducking en uitgangsschakeling</h2>
<p>Als je eenmaal controle per app hebt, maken een paar extra's het de moeite waard om te blijven. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Hiermee kunt u volume besparen <strong>profielen</strong> - bijvoorbeeld een 'focus'-profiel waarbij Chrome stil is en de muziek luid, en een 'kijk'-profiel waarin Chrome domineert - en met één klik hiertussen kunt schakelen. Auto-ducking kan andere apps automatisch onderdompelen wanneer een gekozen bron start (handig zodat een oproep nooit onder een luid browsertabblad wordt verborgen). En dankzij de snelle uitvoerschakeling kunt u schakelen tussen luidsprekers, hoofdtelefoons en andere apparaten zonder in de systeeminstellingen te hoeven duiken.</p>
<p>Het is een eenmalige aankoop van € 14,99 voor de Mac App Store - geen abonnement, geen stuurprogramma's om te installeren, geen DMG of kernelextensie. Omdat het in een sandbox is geplaatst en wordt gedistribueerd via de App Store, is het niet nodig dat de schetsmatige audiodriver wordt geïnstalleerd waar oudere mixertools op vertrouwden.</p>

<h2>Welke oplossing moet u gebruiken?</h2>
<p>Als je af en toe maar één irritant tabblad hebt, gebruik dan de ingebouwde mute-functie van Chrome en de geluidsinstellingen van de site. Deze zijn gratis en werken. Als je constant merkt dat je wilt dat Chrome gewoon kan worden afgewezen terwijl al het andere blijft staan, dan is dat precies het gat dat macOS openlaat, en een mixer per app is de schone oplossing.</p>

<p>Wilt u dat de Chrome permanent stiller is zonder uw muziek of oproepen te dempen? <a href="https://apps.apple.com/app/id6772792641">Koop SoundDial op de Mac App Store</a> en geef elke app zijn eigen volumeschuifregelaar.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "WhatsApp- en Telegram-melding klinkt te luid op Mac? Wijs ze af",
    description: "Repareer WhatsApp- en Telegram-bureaubladmeldingsgeluiden die te luid zijn op uw Mac. Begin met de ingebouwde instellingen van elke app en verlaag of demp vervolgens de hele app wanneer macOS u geen controle per app geeft.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>Begin in elke app: met WhatsApp en Telegram kun je beide meldingsgeluiden dempen of wijzigen in hun eigen instellingen, wat de schoonste oplossing is. Maar macOS heeft geen schuifregelaar voor het meldingsvolume per app, dus als het eigen geluid van de app nog steeds te luid is, is je enige echte hefboom het verlagen of dempen van de audio van de hele app met een volumetool per app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — WhatsApp- en Telegram-melding klinkt te luid op Mac? Wijs ze af" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Gebruik eerst de eigen meldingsinstellingen van de app</h2>

<p>Zowel de WhatsApp als de Telegram hebben hun eigen geluidsbediening, en dit is waar je altijd moet beginnen. Het is de meest nauwkeurige oplossing en raakt niets anders aan op uw Mac.</p>

<p><strong>WhatsApp-bureaublad:</strong> Open WhatsApp, klik <em>Instellingen</em> (het tandwielpictogram) en vervolgens <em>Meldingen</em>. U kunt uitschakelen <em>Geluiden</em> geheel met behoud van banners, of schakel notificatievoorbeelden uit. WhatsApp biedt geen volumeschuifregelaar, dus deze is in wezen aan of uit voor het geluid zelf.</p>

<p><strong>Telegram-bureaublad:</strong> Openen <em>Instellingen → Meldingen en geluiden</em>. Telegram is hier flexibeler. Je kunt het meldingsgeluid wereldwijd uitschakelen, individuele chats dempen of aangepaste (stillere) tonen instellen. Je kunt ook een enkele luidruchtige groep het zwijgen opleggen door deze te openen en te kiezen <em>Dempen</em>. Voor de meeste mensen lost het dempen van de luidste chats het probleem op zonder overal stil te worden.</p>

<p>Als het geluid prima maar te frequent is, demp dan de specifieke chats of kanalen die het vaakst actief zijn in plaats van het geluid in de hele app uit te schakelen. Zo blijven belangrijke waarschuwingen hoorbaar.</p>

<h2>Schakel meldingsgeluiden uit in macOS Systeeminstellingen</h2>

<p>macOS heeft een tweede controlelaag die in sommige gevallen de app overschrijft. Ga naar <em>Systeeminstellingen → Meldingen</em>, selecteer WhatsApp of Telegram in de lijst en schakel uit <em>Speel geluid af voor meldingen</em>. Hierdoor wordt het waarschuwingsgeluid voor die app onderdrukt terwijl er nog steeds banners worden weergegeven.</p>

<p>Dit is echt een goede oplossing als je alleen wilt dat de app stil is bij meldingen en je niets aantrekt van de andere audio (oproepen, video). Gecombineerd met de eigen instellingen van de app, worden de meeste klachten over "de ping is schokkend" gedekt.</p>

<h2>De echte beperking: macOS heeft geen volume per app</h2>

<p>Hier is het eerlijke deel. De bovenstaande stappen zijn aan/uit-schakelaars. Wat ze niet kunnen doen, is WhatsApp of Telegram veranderen <em>naar beneden</em> tot bijvoorbeeld 40%, terwijl al het andere op vol volume blijft. Windows heeft al jaren een volumemixer per app. macOS bevat er eenvoudigweg geen, en er is geen verborgen instelling of Terminal-opdracht die deze toevoegt.</p>

<p>Dit is van belang als het probleem niet specifiek het meldingsgeluid is, maar de hele app te luid is:</p>

<ul>
<li>WhatsApp of Telegram <strong>spraak- en video-oproepen</strong> die op vol volume knallen ten opzichte van uw muziek of een vergadering</li>
<li>Een meldingsgeluid dat je wilt behouden, maar op een lager niveau, niet helemaal uit</li>
<li>Beltonen die ver uitstijgen boven waar je ook naar luistert</li>
<li>De app hoorbaar maar rustig op de achtergrond willen hebben terwijl jij je op iets anders concentreert</li>
</ul>

<p>Niets van dat alles is op te lossen met de ingebouwde tools, omdat ze alleen mute bieden, geen niveau. Die kloof is een echte macOS-beperking, niet iets dat je mist.</p>

<h2>Stel een volume per app in met SoundDial</h2>

<p>Om daadwerkelijk een enkele app zachter te zetten in plaats van uit te schakelen, heb je een volumemixer per app nodig. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een menubalk-app die de macOS de volumeregeling per app geeft waarmee hij nooit is meegeleverd. Het vermeldt elke app die momenteel audio afspeelt en geeft elke app een eigen schuifregelaar.</p>

<p>Voor dit specifieke probleem:</p>

<ul>
<li>Openen <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> in de menubalk en zoek WhatsApp of Telegram in de lijst.</li>
<li>Sleep de schuifregelaar naar een comfortabel niveau, bijvoorbeeld 30-40%, terwijl u uw muziek, browser of videogesprek ongemoeid laat.</li>
<li>Gebruik de per-app <strong>dempen</strong> -knop om alleen die app onmiddellijk uit te zetten tijdens een gesprek of een vergadering, en het dempen later weer op te heffen zonder door de instellingen te hoeven bladeren.</li>
<li>Als je ooit het tegenovergestelde nodig hebt, een stille app die te zacht is, de app per app <strong>boost</strong> kan het boven de 100% brengen.</li>
</ul>

<p>Omdat het een niveau per app instelt, houdt SoundDial meldingsgeluiden en oproepaudio hoorbaar maar proportioneel, in plaats van de alles-of-niets-keuze die de ingebouwde opties je opdringen. Je kunt ook sparen <strong>volumeprofielen</strong>, dus een "focus"-instelling die chat-apps laag houdt, is slechts één klik verwijderd.</p>

<blockquote>Eén eerlijk voorbehoud: als u het algehele volume van een app in SoundDial verlaagt, worden ook de meldingsgeluiden verlaagd, aangezien dit voor macOS de audio van dezelfde app is. Als je meldingen volledig wilt uitschakelen maar op vol volume wilt bellen, gebruik dan de mutefunctie van de app plus Systeeminstellingen voor de bel en reserveer SoundDial voor het instellen van het algemene niveau.</blockquote>

<p>SoundDial is een eenmalige aankoop van € 14,99 op de Mac App Store, in de sandbox, zonder abonnement, zonder kernelstuurprogramma's en zonder DMG om te sideloaden. Het is het praktische antwoord als de oplossing die je eigenlijk wilt, een app zachter zetten in plaats van uitschakelen, niet iets is dat macOS zelf kan doen.</p>

<h2>Welke oplossing moet u gebruiken?</h2>

<p>Werk van boven naar beneden. Probeer eerst de eigen meldingsinstellingen van de app en vervolgens de systeeminstellingen van macOS om het geluidssignaal te beëindigen. Als je echt de WhatsApp of Telegram naar een specifiek volume wilt verlagen, of alleen die app direct wilt dempen tijdens gesprekken, dan verdient een per-app-mixer zijn plaats.</p>

<p>Ben je het beu om te kiezen tussen volle kracht en totale stilte voor je chat-apps? <a href="https://apps.apple.com/app/id6772792641">Koop SoundDial op de Mac App Store</a> en geef elke app een eigen volumeknop.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Gameaudio luider dan Discord op Mac? Hoe u het spel- en stemvolume in evenwicht kunt brengen",
    description: "Je game overstemt de Discord-voicechat op Mac en er is geen ingebouwde volumemixer. Dit is de reden waarom macOS het volume per app in Windows-stijl mist, en hoe je het spel zachter kunt zetten terwijl je de stem luid houdt.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>macOS heeft geen ingebouwde volumemixer per app, dus je kunt je game niet native afsluiten terwijl de Discord luid blijft. De oplossing is een menubalk-app die het volume per applicatie onafhankelijk instelt. Zet het spel lager op 40-50%, laat de voicechat op 100% staan ​​en beide blijven in balans zonder de schuifregelaars in het spel aan te raken.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Game-audio luider dan Discord op Mac? Hoe u het spel- en stemvolume in evenwicht kunt brengen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom dit gebeurt op Mac (en niet op Windows)</h2>

<p>Als je op Windows hebt gespeeld, ken je de volumemixer: klik met de rechtermuisknop op het luidsprekerpictogram en elke actieve app krijgt zijn eigen schuifregelaar. Je laat het spel vallen, verhoogt Discord en klaar. macOS heeft die functie simpelweg nooit geleverd. Er is één hoofduitvoervolume en een handvol schakelaars op app-niveau verborgen in de systeeminstellingen, maar geen controle per applicatieniveau voor willekeurige apps.</p>

<p>Dus als de mix van een game goed onder de knie is, komen de explosies, de muziek en het geweervuur door op hetzelfde uitgangsniveau als de stemmen van je vrienden. Sommige games hebben een schuifregelaar voor het hoofdvolume, maar veel games gaan niet laag genoeg, en veel opstartprogramma's, browsers en zelfstandige titels bieden helemaal geen bruikbare controle. Met Discord zelf kun je alleen het volume van inkomende gebruikers aanpassen, niet de game die met hen concurreert.</p>

<p>Om eerlijk te zijn, dit is een kloof op OS-niveau, geen bug die je kunt wegnemen. De audiostack van Apple stuurt alles naar één enkele uitvoerstroom, en er is geen eigen gebruikersinterface om het per app te splitsen. Daarom heb je een tool van derden nodig die zich tussen je apps en het uitvoerapparaat bevindt.</p>

<h2>De handmatige oplossingen (en waarom ze tekortschieten)</h2>

<p>Voordat u naar software grijpt, is het de moeite waard om de gratis opties en hun limieten te kennen:</p>

<ul>
<li><strong>Verlaag het in-app-volume van de game.</strong> Werkt als de game een hoofdschuifregelaar heeft met voldoende fijne stappen. Velen stoppen bij stappen van 10% of bundelen muziek en effecten samen, zodat je niet alleen de luide delen kunt temmen.</li>
<li><strong>Hef je vrienden op in Discord.</strong> Klik met de rechtermuisknop op elke gebruiker en verhoog het volume. Dit helpt een beetje, maar het komt verder uit, en het heeft niets te maken met het spel dat eigenlijk het probleem is.</li>
<li><strong>Gebruik een hoofdtelefoon met een hardwarevolumeknop.</strong> Verandert alleen het algehele niveau, niet de balans tussen spel en stem.</li>
<li><strong>Leid audio via een virtueel apparaat.</strong> Tools zoals Loopback of BlackHole kunnen streams splitsen, maar ze zijn gericht op professionals, vereisen echte instellingen en zijn overdreven om 'het spel stiller te maken'.</li>
</ul>

<p>Geen van deze geeft je het enige dat Windows-gebruikers als vanzelfsprekend beschouwen: een snelle schuifregelaar per app. Dat is de kloof <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is gebouwd om te vullen.</p>

<h2>De directe oplossing: onafhankelijk volume per app</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een menubalk-per-app-volumemixer voor macOS. Het toont elke app die momenteel geluid afspeelt en geeft elke app een eigen schuifregelaar, precies zoals de Windows Volume Mixer. Voor het game-versus-stemprobleem is de workflow kort:</p>

<ul>
<li>Klik op het SoundDial-pictogram in uw menubalk terwijl de game en Discord beide actief zijn.</li>
<li>Zoek het spel in de lijst en schuif de schuifregelaar omlaag naar ongeveer 40-50%.</li>
<li>Laat Discord (of Slack, Zoom of uw spraakapp) op 100% staan.</li>
<li>Pas tijdens het spelen de game meteen aan: laat het spel verder zakken in een luid vuurgevecht, en weer omhoog tijdens stille verkenning.</li>
</ul>

<p>Omdat de niveaus per app zijn, stel je ze één keer in en blijven ze behouden. De game blijft afgedekt, hoe heet de eigen mix ook is, en je vrienden blijven er duidelijk hoorbaar doorheen.</p>

<h2>Boost, mute en profielen voor de rest van uw installatie</h2>

<p>Hetzelfde hulpmiddel dekt de aangrenzende ergernissen die gepaard gaan met stemgamen:</p>

<ul>
<li><strong>Boost per app.</strong> Als de microfoon van een teamgenoot stil is, zelfs op het maximale niveau van de Discord, kun je op de stem-app drukken <em>hierboven</em> 100%, dus het snijdt door het spel in plaats van begraven te worden.</li>
<li><strong>Dempen per app.</strong> Zet een browsertabblad op de achtergrond of een muziekapp direct op stil zonder alt-tabben of het afspelen te beëindigen.</li>
<li><strong>Volumeprofielen.</strong> Sla een 'gaming'-profiel op met de game op 45% en Discord geboost, en schakel vervolgens met één klik terug naar een 'normaal' profiel voor dagelijks gebruik - u hoeft de schuifregelaars niet elke sessie opnieuw te slepen.</li>
<li><strong>Automatisch ontwijken.</strong> Laat het spel automatisch dippen als iemand praat, zodat callouts altijd bovenop de actie terechtkomen.</li>
<li><strong>Snelle uitgangsschakeling.</strong> Schakel tussen hoofdtelefoons en luidsprekers vanuit hetzelfde menu zonder in Systeeminstellingen te duiken.</li>
</ul>

<blockquote><p>Het mentale model is simpel: één slider per app, zoals Windows het al jaren doet. macOS heeft dit gewoon nooit geleverd, dus een klein hulpprogramma herstelt de pariteit.</p></blockquote>

<h2>Wat kun je eerlijk verwachten?</h2>

<p>Een per-app-mixer lost het balansprobleem netjes op, maar stelt de verwachtingen correct. Het regelt de software-uitvoerniveaus - het kan een game niet repareren waarvan de eigen audio slecht wordt beheerst, en het kan geen signaal verhogen dat nooit is vastgelegd (een echt kapotte microfoon heeft nog steeds een hardwarereparatie nodig). Boost voegt echte winst toe, dus als je een stille bron ver voorbij de 100% duwt, kan er vervorming optreden, net zoals je een versterker te hoog zet. Maar als je het verstandig gebruikt, is een bescheiden gamecap plus een kleine stemboost alles wat de meeste opstellingen nodig hebben.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is in een sandbox geplaatst en wordt rechtstreeks vanaf de Mac App Store geïnstalleerd - geen stuurprogramma's, geen kernelextensies, geen DMG om te vertrouwen. Het kost eenmalig € 14,99 zonder abonnement en ondersteunt macOS-volumeregeling in 28 talen.</p>

<p>Stop met vechten tegen je in-game sliders. Grijp <a href="https://apps.apple.com/app/id6772792641">SoundDial op de Mac App Store</a>, zet het spel zachter, houd je team luid en krijg eindelijk de volumemixer in Windows-stijl die macOS vergeten is te verzenden.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Externe monitorluidsprekers te luid of blijven hangen op de Mac? Herstel het HDMI/DisplayPort-volume",
    description: "Waarom de volumetoetsen van uw Mac de HDMI- of DisplayPort-monitorluidsprekers niet bedienen, en hoe u audio kunt repareren die te luid, vastloopt of niet kan worden aangepast met behulp van de monitor-OSD, Audio/MIDI-instellingen en betere uitvoerroutering.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Als de volumetoetsen van uw Mac grijs zijn of niets doen voor een monitor die is aangesloten via HDMI of DisplayPort, is dat meestal geen bug. Digitale weergaveaudio wordt vaak op een vast niveau verzonden en de eigen hardware van de monitor regelt het volume. De oplossing is om de weergave aan te passen, de uitvoer om te leiden of een ander audioapparaat te gebruiken.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Externe monitorluidsprekers te luid of blijven hangen op de Mac? Herstel het HDMI/DisplayPort-volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom de volumetoetsen van de Mac niet meer werken via HDMI/DisplayPort</h2>

<p>HDMI en DisplayPort dragen audio over als digitale stream. Veel monitoren ontvangen die stream op een vast uitgangsniveau en verwachten dat je de luidheid op het scherm zelf regelt, en niet op het bronapparaat. Wanneer macOS dit detecteert, wordt de volumeschuifregelaar op het scherm uitgeschakeld en worden de F11/F12-toetsen grijs weergegeven, waarbij een "geen invoer"-symbool wordt weergegeven wanneer u erop drukt.</p>

<p>Dit is een hardware- en protocolbeperking, en niet iets dat software op de Mac kan opheffen. De audio passeert nooit een fase waarin macOS deze mag verzwakken. Geen enkele app, driver of instelling kan volumeregeling injecteren in een stream die het display op volledig niveau wil ontvangen. Als u daar eerlijk over bent, bespaart u urenlang het achtervolgen van de verkeerde oplossing.</p>

<h2>Oplossing 1: gebruik de eigen bedieningselementen (OSD) van de monitor</h2>

<p>Dit is voor de meeste mensen de echte oplossing. Bijna elke monitor met ingebouwde luidsprekers heeft een schermmenu dat wordt aangestuurd door fysieke knoppen of een joystick aan de achter- of onderkant van het paneel.</p>

<ul>
<li>Druk op de OSD/menu-knop om de instellingen van de monitor te openen.</li>
<li>Zoek naar een sectie Audio of Volume.</li>
<li>Verlaag daar het niveau – dit is de bediening die daadwerkelijk werkt via HDMI/DP.</li>
</ul>

<p>Sommige monitoren bieden ook een bijbehorende app of DDC/CI-ondersteuning, zodat u de OSD vanaf macOS kunt aansturen. Hulpprogramma's van derden die DDC spreken, kunnen de volumetoetsen van uw Mac toewijzen aan het hardwarevolume van de monitor, wat het proberen waard is als u er een hekel aan heeft om naar de paneelknoppen te grijpen.</p>

<h2>Oplossing 2: Controleer de Audio/MIDI-instellingen</h2>

<p>Openen <strong>Audio-MIDI-instellingen</strong> (in /Toepassingen/Hulpprogramma's). Selecteer uw monitor in de apparatenlijst. Als er aan de rechterkant een volumeschuifregelaar verschijnt, sleept u deze naar beneden. Soms geeft het display een softwarematig regelbaar niveau weer, zelfs als de menubalktoetsen zijn uitgeschakeld. Als de schuifregelaar ontbreekt of grijs wordt weergegeven, bevestigt het scherm dat het alleen audio met een vast niveau accepteert en moet u terugvallen op het OSD.</p>

<p>Terwijl u hier bent, controleert u of het juiste uitvoerapparaat is geselecteerd. Het is gebruikelijk dat audio stil wordt gerouteerd naar een monitor waarvan u vergeten was dat deze was aangesloten, wat een plotseling luid of afwezig geluid verklaart.</p>

<h2>Oplossing 3: Stuur audio ergens heen waar u daadwerkelijk controle over heeft</h2>

<p>Als de luidsprekers van uw monitor toch middelmatig zijn (de meeste zijn dat) en de volumeregeling onhandig is, is de schoonste oplossing om ze niet meer te gebruiken:</p>

<ul>
<li>Sluit luidsprekers of een koptelefoon aan op de koptelefoonuitgang van de monitor, als die er is. De analoge uitgang kan meestal via het beeldscherm worden bediend.</li>
<li>Gebruik een USB DAC, USB-luidsprekers of een Bluetooth-uitgang. USB- en analoge uitgangen geven de macOS volledige softwarematige volumeregeling, zodat uw toetsen weer normaal werken.</li>
<li>Selecteer de ingebouwde luidsprekers van je Mac voor snelle geluiden en gebruik de monitor alleen voor video.</li>
</ul>

<p>Zodra u op een uitvoer zit die de macOS daadwerkelijk kan dempen, gedragen de volumetoetsen van het systeem zich en krijgt u de fijne controle terug in plaats van te springen tussen de grove OSD-stappen van de monitor.</p>

<h2>Zodra de uitvoer werkt, regelt u het volume per app</h2>

<p>Het terugkrijgen van een regelbare uitgang lost het probleem van "te luid / vastlopen" op. Maar macOS geeft je nog steeds maar één hoofdvolume voor alles. Er is geen ingebouwde mixer per app op de Mac - de Windows heeft er al jaren een, maar Apple heeft nooit een equivalent uitgebracht. Dus een luide video, een game en een stil gesprek delen allemaal dezelfde slider.</p>

<p>Dat is de kloof <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vult. Het is een menubalkmixer die elke app zijn eigen, onafhankelijke volume geeft, zodat je een browsertabblad lager kunt zetten zonder je muziek aan te raken, één app direct kunt dempen of een stille app een boost kunt geven tot boven het normale plafond. U kunt volumeprofielen voor verschillende instellingen opslaan en snel tussen uitgangen schakelen via de menubalk.</p>

<p>Voor alle duidelijkheid over de reikwijdte: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> regelt het softwarevolume voor audio die door de macOS stroomt. Het kan een monitor die het systeemvolume via HDMI negeert niet overschrijven. Dat is het gedrag van het beeldscherm met een vast niveau, en alleen de OSD of een andere uitgang lost dit op. Als je eenmaal een regelbare output hebt, is de controle per app waar de app uitblinkt.</p>

<h2>Snelle controlelijst</h2>

<ul>
<li>Toetsen grijs weergegeven via HDMI/DP? Gebruik het OSD-volume van de monitor: dat is het verwachte gedrag.</li>
<li>Controleer Audio MIDI Setup voor een verborgen softwareschuifregelaar.</li>
<li>Controleer of het juiste uitvoerapparaat is geselecteerd.</li>
<li>Voor echte controle leid je audio naar de hoofdtelefoonuitgang, USB of Bluetooth.</li>
<li>Gebruik vervolgens een per-app-mixer om individuele apps in balans te brengen.</li>
</ul>

<p>Zodra uw output onder controle is, geeft u <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> een blik. Het is een eenmalige aankoop van € 14,99 bij de Mac App Store – geen abonnement, geen stuurprogramma’s, geen DMG – en het brengt eindelijk een echte volumemixer per app naar de macOS.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "USB DAC-volume wordt niet aangepast op Mac? Krijg softwarevolumeregeling terug",
    description: "Waarom macOS de volumeschuifregelaar grijs maakt voor veel USB DAC's, wat dit betekent en hoe u werkende softwarevolumeregeling terug kunt krijgen op uw Mac zonder de audiokwaliteit te schaden.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Als de volumeschuifregelaar van uw USB DAC grijs wordt weergegeven op de Mac, is dit meestal geen bug. macOS schakelt het softwarevolume uit wanneer een DAC meldt dat deze geen regelbaar volume heeft, in de verwachting dat u de eigen hardwareknop van de DAC gebruikt. Om het softwarevolume terug te krijgen, gebruikt u een verzwakker op app-niveau, zoals <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC-volume wordt niet aangepast op Mac? Krijg softwarevolumeregeling terug" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom macOS het volume grijs maakt voor sommige USB DAC's</h2>

<p>Wanneer u een USB-audioapparaat aansluit, vraagt ​​macOS wat het kan doen via het USB Audio Class (UAC)-protocol. Onderdeel van die handdruk is een reeks ‘feature unit’-bedieningselementen, inclusief een volumeregelaar. Als de DAC een volumeregeling aangeeft, verbindt de macOS deze met de volumetoetsen op uw toetsenbord en de menubalkschuifregelaar. Als de DAC aangeeft dat hij geen door de host instelbaar volume heeft, wordt de schuifregelaar door macOS volledig grijs weergegeven.</p>

<p>Veel hoogwaardige DAC's en versterkers doen expres precies dat laatste. De veronderstelling van de ontwerper is dat je de DAC een volledig, bit-perfect digitaal signaal geeft en de luidheid regelt met de analoge volumeknop op het apparaat zelf. Die analoge verzwakking vindt plaats na de digitaal-naar-analoog-conversie, zodat er geen bits worden weggegooid en het is echt de route die audiofielen de voorkeur geven. Het is een kenmerk, geen fout.</p>

<blockquote>Vuistregel: als uw DAC een fysieke volumeknop heeft en de Mac-schuifregelaar grijs is, wil de fabrikant dat u de knop gebruikt. Het signaal wordt door het ontwerp op 100% verzonden.</blockquote>

<h2>Wanneer de grijze schuifregelaar daadwerkelijk een probleem is</h2>

<p>Het antwoord "gebruik gewoon de knop" valt uiteen in echte opstellingen:</p>

<ul>
<li><strong>De DAC heeft geen knop.</strong> Veel compacte USB DAC's, dongles en professionele interfaces bieden geen volumeregeling en ook geen hostcontrole. Je zit vast op welk niveau de stroomafwaartse versterker of actieve luidsprekers ook zijn ingesteld.</li>
<li><strong>De knop is buiten bereik.</strong> Een desktop DAC achter je monitor, of een apparaat dat een versterker met vaste versterking voedt, betekent dat het aanpassen van het volume een fysieke klus wordt in plaats van een toetsaanslag.</li>
<li><strong>U hebt een saldo per app nodig, niet alleen een masterniveau.</strong> Zelfs een perfecte hardwareknop is één enkele globale bediening. Het kan een Zoom-gesprek niet stiller maken dan je muziek, of een game ontwijken wanneer er een melding wordt geactiveerd.</li>
</ul>

<p>Geen van deze problemen wordt opgelost door macOS, omdat het apparaat zich vanuit het perspectief van het besturingssysteem correct gedraagt. Dit is de eerlijke beperking: het is een door het apparaat gerapporteerde mogelijkheid en er is geen schakelaar in de Systeeminstellingen om deze te overschrijven.</p>

<h2>Eerlijke oplossingen voordat u iets installeert</h2>

<p>Probeer deze eerst, want ze kosten niets:</p>

<ul>
<li><strong>Gebruik de hardwareknop of het stroomafwaartse volume.</strong> Als uw DAC of uw actieve luidsprekers/versterker een bediening hebben, is dat de schoonste optie en blijft de volledige digitale resolutie behouden.</li>
<li><strong>Controleer de eigen app of firmware van de DAC.</strong> Sommige DAC's (en gaming-georiënteerde eenheden) worden geleverd met een bedieningspaneel of een firmware-instelling die het hostvolume mogelijk maakt. Als er een optie "USB-volume" of "softwarevolume" bestaat, zorgt het inschakelen ervan ervoor dat de macOS-schuifregelaar weer werkt.</li>
<li><strong>Probeer een andere USB-modus.</strong> Een paar apparaten melden verschillende mogelijkheden in "klasse-compatibele" versus een eigen stuurprogrammamodus. Het installeren of verwijderen van het stuurprogramma van de leverancier kan veranderen of macOS een volumeregeling ziet.</li>
<li><strong>Kijk in Audio/MIDI-instellingen.</strong> Open Audio MIDI Setup, selecteer het apparaat en controleer of daar een master- of per-kanaalvolume verschijnt. Af en toe is er een schuifregelaar beschikbaar in dat paneel, zelfs als de menubalk grijs is.</li>
</ul>

<p>Als geen van deze van toepassing is, heb je softwarematige verzwakking aan de Mac-kant nodig.</p>

<h2>Softwarevolumeregeling met demping per app</h2>

<p>Wanneer de hardware een volumeopdracht niet accepteert, is de resterende optie het dempen van de audio in de software voordat deze de DAC bereikt. Dit is precies wat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> doet. Het bevindt zich in uw menubalk en geeft elke actieve app zijn eigen onafhankelijke volume, dempen en zelfs een boost, ongeacht of uw DAC een hardwarebediening blootstelt.</p>

<p>Om het te gebruiken voor een grijze DAC:</p>

<ul>
<li>Installeren <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vanuit de Mac App Store en open deze vanuit de menubalk.</li>
<li>Houd uw DAC geselecteerd als systeemuitvoer; je kunt ook de snelle uitvoerschakeling van de SoundDial gebruiken om tussen de DAC, luidsprekers en hoofdtelefoons te schakelen zonder in de systeeminstellingen te duiken.</li>
<li>Stel niveaus per app in: zet de browser neer, zet de muziekspeler hoger en demp wat je niet wilt. Elke app streamt op het door jou gekozen volume en het gemengde resultaat gaat naar de DAC.</li>
<li>Bewaar volumeprofielen voor verschillende scenario's (bellen versus luisteren) en laat apps op de achtergrond automatisch wegduiken wanneer er iets belangrijkers begint te spelen.</li>
</ul>

<h2>De eerlijke afweging op audiokwaliteit</h2>

<p>Softwarematige verzwakking verlaagt het digitale niveau vóór de conversie, dus in theorie gaat er een kleine hoeveelheid resolutie verloren in vergelijking met het analoge volume op de DAC zelf. In de praktijk ligt de reductie op moderne 24-bits en hogere paden bij normale luisterniveaus ruim onder alles wat hoorbaar is, en behoud je het volledige dynamische bereik van de DAC voor alles dat bijna op volledige schaal wordt gespeeld. Als je een purist bent en een goede analoge knop binnen handbereik hebt, gebruik dan de knop. Als je geen bruikbare hardwarecontrole hebt, of als je een balans per app nodig hebt die macOS simpelweg niet kan bieden, is softwarevolume de juiste afweging, en het is beter dan een schuifregelaar die niets doet.</p>

<p>SoundDial is een eenmalige aankoop van € 14,99, in een sandbox, zonder stuurprogramma's, kernelextensies of DMG-installatieprogramma's. Als het volume van uw USB DAC grijs is en naar een knop grijpen geen optie is, <a href="https://apps.apple.com/app/id6772792641">koop SoundDial op de Mac App Store</a> en zet de werkende volumeregeling terug in uw menubalk.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Beperk het maximale volume van één luide app op Mac (bescherm uw gehoor)",
    description: "macOS heeft geen volumelimiet per app, dus één luide app kan je op het volledige systeemvolume blazen. Hier leest u hoe u een maximaal volumeplafond instelt voor een enkele app op de Mac met een mixer per app, en waarom hardwarelimieten belangrijk zijn.",
    date: "2026-07-23",
    readTime: "5 min leestijd",
    content: `<p>macOS heeft geen ingebouwde manier om het maximale volume van één app te beperken, dus een luid programma wordt afgespeeld op de manier waarop uw systeemschuifregelaar is ingesteld. Om een plafond in te stellen voor een enkele app, gebruik je een menubalk-per-app-mixer, zoals <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: houd die app op bijvoorbeeld 40 procent terwijl uw systeemvolume voor al het andere hoger blijft.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Beperk het maximale volume van één luide app op de Mac (bescherm uw gehoor)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Waarom één app je plotseling op een Mac kan schieten</h2>

<p>Op de macOS is de volumeschuifregelaar in de menubalk of het Control Center één systeembrede bediening. Elke app levert op hetzelfde niveau dezelfde output op. Er is geen volumemixer per app ingebouwd in het besturingssysteem zoals de Windows er al jaren een heeft met zijn Volume Mixer-paneel.</p>

<p>Dat ontwerp heeft een reëel gevolg voor je oren. Als u het systeemvolume hoog instelt zodat u een rustige podcast of een zacht videogesprek kunt horen en vervolgens overschakelt naar een game, een Discord-melding, een website met veel advertenties of een video die veel luider is gemasterd, wordt die app ook op volledig systeemniveau afgespeeld. Het resultaat is de klassieke jump-scare: een plotselinge geluidsmuur op een volume dat je nooit voor die specifieke app had bedoeld.</p>

<p>Voor iedereen met tinnitus, geluidsgevoeligheid of die simpelweg waarde hecht aan zijn gehoor, is die onvoorspelbaarheid het probleem. Je probeert niet alles stiller te maken. Je probeert te garanderen dat een specifieke luide app nooit een niveau kan overschrijden waarvan jij hebt besloten dat het veilig is.</p>

<h2>Wat macOS hier wel en niet kan doen</h2>

<p>Laat me eerlijk zijn over de limieten voordat ik iets aanbeveel.</p>

<ul>
<li><strong>Systeemvolume</strong> verlaagt alles in één keer. Zet het lager om één app te temmen en je stille apps worden onhoorbaar.</li>
<li><strong>Volumeschuifregelaars in de app</strong> bestaan in sommige apps (mediaspelers, sommige browsers per tabblad), maar niet in de meeste. Een game, een videogesprek of een native app heeft vaak helemaal geen onafhankelijke volumeregeling.</li>
<li><strong>Het hardwareplafond is echt.</strong> Geen enkele software kan een signaal luider pushen dan het maximum van uw uitvoerapparaat. Omgekeerd bepaalt de eigen luidheidsbeheersing van een app, plus uw DAC en hoofdtelefoon, hoe luid "100 procent" daadwerkelijk voelt. Software kan het niveau per app op betrouwbare wijze verlagen, maar kan de fysica van uw hoofdtelefoon niet herschrijven.</li>
</ul>

<p>Het eerlijke doel is dus niet het beperken van de magische luidheid op bestuurdersniveau. Het is een praktische, betrouwbare demping per app: houd een gekozen app vast op een vast deel van de systeemoutput, zodat deze u nooit kan verrassen.</p>

<h2>Hoe u het volume van een enkele app kunt beperken met een mixer per app</h2>

<p>Een volumemixer per app onderschept de audio van elke app en laat je het niveau ervan onafhankelijk instellen. Hier is de workflow met <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, die in de menubalk staat:</p>

<ul>
<li><strong>Open de mixer.</strong> Klik op het menubalkpictogram SoundDial. Je ziet een lijst met elke app die momenteel audio afspeelt, elk met een eigen schuifregelaar.</li>
<li><strong>Zoek de luide app.</strong> Zoek de app die u wilt blokkeren, bijvoorbeeld een game, een browser of een tool voor videoconferenties.</li>
<li><strong>Stel het plafond in.</strong> Sleep de schuifregelaar van die app naar uw veilige niveau, bijvoorbeeld 35 tot 50 procent. Die app speelt nu op dat deel van de systeemoutput terwijl elke andere app blijft waar hij was.</li>
<li><strong>Laat uw systeemvolume achter waar u het nodig heeft.</strong> Houd de systeemschuifregelaar hoog genoeg voor uw stille apps. De afgetopte app blijft hoe dan ook in toom gehouden.</li>
</ul>

<p>Omdat het niveau per app is, stel je feitelijk een maximum in voor dat ene programma. Zelfs als het de luidste inhoud probeert af te spelen, is de luidste nu de door jou gekozen fractie van vol.</p>

<h2>Maak de dop vast met profielen</h2>

<p>Een enkele handmatige aanpassing helpt, maar app-niveaus kunnen worden gereset wanneer u afsluit en opnieuw start. Gebruik om een gehoorveilige opstelling te maken die herstarten overleeft <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>'s volumeprofielen. Sla een profiel op met de door u gewenste niveaus per app, bijvoorbeeld 'rustige gameavond' met de game op 40 procent, uw muziek-app op 70 procent en uw bel-app op 90 procent. Roep het met één klik op wanneer u gaat zitten. Je plafond voor de luide app komt precies terug zoals je het hebt ingesteld.</p>

<p>Er zijn nog twee kenmerken die de moeite waard zijn om te weten voor gehoorbescherming:</p>

<ul>
<li><strong>Dempen per app</strong> Hiermee kun je één overtreder onmiddellijk het zwijgen opleggen zonder iets anders aan te raken, handig voor een app die luide meldingen spamt.</li>
<li><strong>Automatisch ontwijken</strong> dipt automatisch achtergrondgeluid wanneer er iets belangrijkers begint, zodat je niet tussen twee luide bronnen tegelijk zit.</li>
</ul>

<blockquote><p>Softwareverzwakking is echt effectief voor het afdekken van een app, maar het is één beschermingslaag en geen medische bescherming. Als u tinnitus of geluidsgevoeligheid heeft, koppel dan een plafond per app aan verstandige algemene luisterniveaus en pauzes. Geen enkele app vervangt zorgvuldige volumegewoonten.</p></blockquote>

<h2>Een opmerking over boost en waarom het apart is</h2>

<p>Dezelfde per-app-mixer die een luide app afsluit, kan ook een te stille app tot boven de 100 procent versterken, wat handig is voor een app waarvan het eigen volume te laag wordt beheerst. Dit zijn twee kanten van dezelfde besturing: jij bepaalt het niveau van elke app, omhoog of omlaag. Voor gehoorbescherming kiest u eenvoudigweg de richting "naar beneden" en houdt u deze daar vast.</p>

<h2>De korte versie</h2>

<p>Met macOS kun je het volume van een enkele app niet afzonderlijk beperken, en dat is een echte OS-kloof en geen gebruikersfout. Een per-app-mixer in de menubalk sluit het: stel de luide app in op een vaste fractie, sla hem op in een profiel en hij kan je nooit meer opblazen terwijl je andere apps hoorbaar blijven.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is een eenmalige aankoop van € 14,99 op de Mac App Store, in de sandbox, zonder stuurprogramma's of DMG om te installeren. Als het doel is om je oren te beschermen tegen één onvoorspelbare app, dan is dit de eenvoudigste manier om dat plafond in te stellen en te behouden.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Verschillende links/rechts-saldo per app op Mac: is dit mogelijk?",
    description: "Kun je voor elke app op macOS een andere links/rechts stereobalans instellen? Eerlijk gezegd, nee – niet van nature, en niet met de meeste tools. Dit is wat feitelijk mogelijk is en waar de echte grenzen liggen.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Eerlijk gezegd: nee. Met macOS kun je niet per applicatie een andere links/rechts-stereobalans instellen, en bijna geen enkele tool van derden biedt ook echte panning per app. U kunt één globaal saldo instellen voor uw uitvoerapparaat en dit per app beheren <em>volume</em>, maar onafhankelijk per app <em>pan</em> is geen functie die macOS beschikbaar stelt.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Verschillend links/rechts-saldo per app op Mac — Is het mogelijk?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Balans versus volume: ze zijn niet hetzelfde</h2>

<p>Het is de moeite waard om twee ideeën te scheiden die vaak verward raken:</p>
<ul>
  <li><strong>Volume</strong> – hoe luid een app in het algemeen is. Dit is een enkel niveau dat op beide kanalen wordt toegepast.</li>
  <li><strong>Balans (pannen)</strong> — hoe audio wordt verdeeld tussen de linker- en rechterluidsprekers. Een balans van "volledig links" stuurt alles naar het linkerkanaal en legt het rechterkanaal stil.</li>
</ul>

<p>Mensen die om 'ander saldo per app' vragen, willen meestal een van twee dingen: het geluid van een app naar één oor duwen (bijvoorbeeld een oproep in je linkeroor, muziek in je rechteroor), of een gehoorverschil of een slechte luidspreker aan één kant corrigeren - maar alleen voor bepaalde apps. Dat zijn legitieme doelen. Het probleem is waar de controle leeft.</p>

<h2>Waarom macOS dit niet native kan doen</h2>

<p>macOS heeft precies één balansregelaar, en deze bevindt zich op het niveau van het uitvoerapparaat. Je vindt het hieronder <strong>Systeeminstellingen → Geluid → Uitvoer</strong>, waar een <em>Balans</em> schuifregelaar verschuift de gehele mix naar links of rechts. Waar de schuifregelaar ook op is ingesteld, is van toepassing <em>alles</em> naar dat apparaat gerouteerd: elke app, elk systeemgeluid, allemaal tegelijk.</p>

<p>Er is geen API in de standaard macOS-audiostack die zegt: "geef de audio van deze app aan de linkerkant weer, die app aan de rechterkant." Apps geven hun audio door aan het systeem dat al is afgemixt, en het systeem past één hoofdbalans toe op weg naar de luidsprekers. Dus de laag waar u per app wilt pannen, wordt eenvoudigweg niet zichtbaar door het besturingssysteem. Dit is een echte OS-beperking, niet iets waar een menubalkhulpprogramma beleefd omheen kan.</p>

<blockquote>In tegenstelling tot per app <em>volume</em> – die macOS ook standaard mist, maar welke apps kunnen implementeren door op de audiostream te tikken – per app <em>balans</em> zou vereisen dat de stream van elke app afzonderlijk opnieuw wordt gepand, en die hook is niet beschikbaar voor apps in de sandbox.</blockquote>

<h2>Wat SoundDial doet – en eerlijk gezegd, wat het niet doet</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> geeft je de controle per app macOS ontbreekt: onafhankelijk <strong>volume</strong> voor elke actieve app, per app <strong>dempen</strong>, een volume per app <strong>boost</strong> boven 100%, bespaarbaar volume <strong>profielen</strong>, automatisch ontwijken en snel schakelen tussen uitvoer vanuit de menubalk.</p>

<p>Om eerlijk tegen je te zijn: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> bediening per app <em>luidheid en demping</em>, niet stereo per app <em>pannen</em>. De Safari wordt niet naar uw linkeroor gestuurd en de Spotify naar uw rechteroor. Als iemand je vertelt dat een menubalkmixer de echte L/R-balans per app op macOS uitvoert, wees dan sceptisch: dat is geen controle die het besturingssysteem uitdeelt. Wat SoundDial echt oplost, is de veel vaker voorkomende frustratie: de ene app is te luid of te stil ten opzichte van de andere.</p>

<h2>De echte oplossingen voor het saldo per app</h2>

<p>Als je echt audio naast elkaar nodig hebt, zijn hier de eerlijke opties, grofweg van de eenvoudigste tot de meest ingewikkelde:</p>

<ul>
  <li><strong>Globaal saldo (alle apps):</strong> Gebruik Systeeminstellingen → Geluid → Uitvoer → Balans. Dit is uw enige ingebouwde optie en heeft invloed op elke app. Handig voor het corrigeren van een kamer of een gehoorasymmetrie, nutteloos voor het isoleren van één app.</li>
  <li><strong>Afzonderlijke uitvoerapparaten:</strong> Dit komt het dichtst in de buurt van het echte saldo per app. Stuur app A naar het ene uitvoerapparaat en app B naar het andere en stel vervolgens de balans van elk apparaat afzonderlijk in. Met macOS kun je in sommige apps een uitvoerapparaat kiezen (en browsers/communicatie-apps hebben vaak hun eigen uitvoerkiezer). Als App A verwijst naar een apparaat dat naar links is gepand en App B naar een apparaat dat naar rechts is gepand, krijgt u effectief een saldo per app, zolang u voor beide apps de uitvoer kunt kiezen.</li>
  <li><strong>Virtuele audiorouteringstools:</strong> Hulpprogramma's die virtuele apparaten en een interne mixer creëren, kunnen in sommige configuraties specifieke apps naar specifieke kanalen routeren. Dit is krachtig maar onhandig, voegt een component in driverstijl toe en is voor de meeste mensen overdreven. Het is het domein van streamers en audiotechnici, en niet van een informele ‘call in one ear’-oplossing.</li>
  <li><strong>Hardware-splitsing:</strong> Als het om fysieke speakers of om gehoorverschil gaat, omzeilt een hardwaremixer of een audio-interface met per-kanaalsregeling het softwareprobleem volledig.</li>
</ul>

<h2>Wanneer het volume per app daadwerkelijk is wat u nodig had</h2>

<p>Veel 'Ik wil een ander saldo per app'-verzoeken zijn eigenlijk 'de ene app overstemt de andere'. Als het doel een videogesprek is dat je via je muziek kunt horen, of een game die te luid is naast een Discord-chat, is balans niet het hulpmiddel; onafhankelijk volume wel. Dat is precies wat een per-app-mixer netjes afhandelt, zonder virtuele stuurprogramma's of routeringsgymnastiek.</p>

<p>Dus de eerlijke samenvatting: de echte links/rechts-balans per app is geen macOS-functie, en geen enkele mixer-app doet dit op overtuigende wijze na. Uw echte routes zijn de globale balansschuifregelaar of uitvoerroutering per app naar afzonderlijk gepande apparaten. Maar als de onderliggende pijn relatief luid is, is dat een opgelost probleem.</p>

<p>Wilt u onafhankelijk volume, dempen en boosten voor elke app op uw Mac, met profielen die u kunt opslaan en zonder stuurprogramma's? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Koop SoundDial op de Mac App Store</a> — €14,99, eenmalig, in de sandbox.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Waarom zijn sommige apps zoveel luider dan andere op Mac? (En hoe je ze kunt egaliseren)",
    description: "Apps klinken heel anders op de Mac, omdat ze elk hun eigen luidheidsdoel beheersen en de macOS geen ingebouwde volumeregeling per app heeft. Hier leest u waarom dit gebeurt en hoe u uw apps kunt nivelleren.",
    date: "2026-07-23",
    readTime: "6 min leestijd",
    content: `<p>Apps klinken heel anders op uw Mac omdat ze allemaal zijn geschreven, gemasterd en genormaliseerd naar hun eigen luidheidsdoel, en de macOS geen ingebouwde volumeregeling per app heeft om ze op elkaar af te stemmen. Spotify, YouTube, Zoom en systeemwaarschuwingen gaan allemaal door dezelfde masterslider, zodat je constant op en neer moet rijden.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Waarom zijn sommige apps zoveel luider dan andere op Mac? (En hoe je ze kunt egaliseren)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Het ligt niet aan jouw Mac, maar aan de audio zelf</h2>

<p>De enkele systeemvolumeschuif op de macOS regelt het uiteindelijke uitgangsniveau voor alles. Het doet niets af aan de relatieve luidheid die in de audiostream van elke app is ingebakken. Die basislijn wordt vastgelegd lang voordat het geluid je speakers bereikt, en varieert enorm van bron tot bron.</p>

<p>Drie dingen drijven deze verschillen:</p>

<ul>
<li><strong>Niveaus beheersen.</strong> Een pittig popnummer wordt veel beter gemasterd dan een rustige akoestische opname of een podcast met gesproken woord. Een film die voor een bioscoop is gemixt, houdt het gefluister stil en de explosies expres luid. Dat is dynamisch bereik en het betekent dat het gemiddelde niveau laag is.</li>
<li><strong>Doelstellingen voor normalisatie van luidheid.</strong> Streamingplatforms passen het afspelen aan op een doel gemeten in LUFS (Loudness Units relatief tot volledige schaal). Spotify mikt op ongeveer -14 LUFS, YouTube ongeveer -14 LUFS, Apple Music op ongeveer -16 LUFS. Een app voor videoconferenties of een game benut zijn eigen winst volledig. Twee apps die zijn "genormaliseerd" voor verschillende doelen zullen nooit met elkaar overeenkomen.</li>
<li><strong>Geen cross-app-nivellering.</strong> Elke app normaliseert alleen zijn eigen inhoud. Niets coördineert Spotify tegen Zoom tegen een browsergame. macOS telt ze gewoon op en stuurt de mix naar buiten.</li>
</ul>

<h2>Waarom LUFS ertoe doet (in duidelijke bewoordingen)</h2>

<p>Piekniveau vertelt u het luidste moment in een signaal. LUFS vertelt je hoe luid iets eigenlijk is <em>voelt</em> in de loop van de tijd, gewogen voor hoe het menselijk gehoor werkt. Dit onderscheid is de reden waarom een ​​podcast en een dansnummer dezelfde piek kunnen bereiken, maar toch een wereld van verschil voelen in luidheid: het nummer brengt veel meer tijd door in de buurt van het plafond.</p>

<blockquote>Een stiller LUFS-doel betekent meer hoofdruimte en een groter dynamisch bereik. Een luider doel betekent een consistentere, ‘altijd volle’ geluidsmuur. Geen van beide is verkeerd, maar als apps zich op verschillende nummers richten, voel je het als de ene app die schreeuwt en de andere mompelt.</blockquote>

<p>Dat is de eerlijke oorzaak. Het is geen bug die je kunt patchen. Het is de fysica van hoe audio wordt geproduceerd en geleverd, vermenigvuldigd met een tiental apps die nooit zijn ontworpen om met elkaar overeen te komen.</p>

<h2>De opening macOS laat open</h2>

<p>Dit is het deel dat mensen echt frustreert: Windows levert al jaren een volumemixer per app. U kunt de ene app naar beneden halen en de andere omhoog duwen, rechtstreeks vanaf de taakbalk. macOS heeft dit nooit opgenomen. Geluidsvoorkeuren geven u alleen de hoofdschuifregelaar en de selectie van het uitvoerapparaat.</p>

<p>Dus op een Mac zijn je opties traditioneel beperkt:</p>

<ul>
<li>Pas de interne volumeschuifregelaar van elke app aan, als deze er al is. Veel apps (Zoom, de meeste games, systeemklokken) geven geen bruikbaar exemplaar weer.</li>
<li>Beweeg de hoofdschuifregelaar handmatig elke keer dat u van context verandert.</li>
<li>Demp één ding helemaal, wat een botte oplossing is die eigenlijk niets in evenwicht brengt.</li>
</ul>

<p>Geen van deze onthoudt uw voorkeur. Sluit de app af en start deze opnieuw, en je bent weer terug bij af.</p>

<h2>De praktische oplossing: een onthouden volume per app</h2>

<p>Omdat je niet elke dienst kunt dwingen zijn catalogus opnieuw te beheren, is de werkbare oplossing het toevoegen van de ontbrekende laag macOS die nooit is geleverd: een onafhankelijk, onthouden volume voor elke app. Dat is precies wat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> doet. Het bevindt zich in je menubalk en geeft elke actieve app zijn eigen schuifregelaar, zodat je de luide naar beneden kunt trekken en de stille omhoog kunt duwen totdat ze op een niveau zitten dat zelfs voor jou aanvoelt.</p>

<p>Om uw apps in de praktijk gelijk te maken:</p>

<ul>
<li>Openen <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vanuit de menubalk en je ziet elke actieve app met zijn eigen bediening.</li>
<li>Zet alles wat goed werkt (meestal een muziek- of video-app die goed onder de knie is) lager tot ongeveer 60-70%.</li>
<li>Laat je stille referentie-app (vaak een belapp of podcast) op 100% staan, en gebruik per app <strong>boost</strong> om het voorbij 100% te duwen als het nog steeds te zacht is.</li>
<li>Stel de niveaus één keer in. SoundDial onthoudt het volume van elke app, zodat het saldo behouden blijft de volgende keer dat u de app opent.</li>
</ul>

<p>Twee functies doen hier het meeste nivelleringswerk. <strong>Boost</strong> is van belang omdat veel apps zelfs op het maximum simpelweg te stil zijn. Een schuifregelaar per app die alleen het volume verlaagt, kan ze niet redden, maar een schuifregelaar die de 100% kan versterken wel. En <strong>volumeprofielen</strong> laat je een hele reeks niveaus opslaan - bijvoorbeeld een profiel "focus muziek laag, luide oproepen" voor werk versus een andere mix voor gaming - en er onmiddellijk tussen schakelen in plaats van app voor app opnieuw aan te passen.</p>

<h2>Waar dit het meeste helpt</h2>

<p>De meest voorkomende opluchting is de sprong tussen muziek en vergaderen: muziek streamen die luid wordt gemasterd, en vervolgens een bel-app die in vergelijking zwak klinkt. Zet de bel-app hoger (of harder), zet de muziek zachter en de verrassende volumezwaai verdwijnt. Hetzelfde geldt voor een rustig browserspel tegen een luide videospeler, of systeemwaarschuwingen die over alles heen springen.</p>

<p>Om duidelijk te zijn over de limieten: SoundDial brengt de output van uw apps in evenwicht. Het zal een slecht geproduceerd nummer niet opnieuw masteren, en het kan geen details bedenken in audio die is gemixt met een zeer breed dynamisch bereik. Wat het doet, is dat je de enige controle krijgt die macOS heeft weggelaten: stabiele niveaus per app die blijven staan.</p>

<p>Ben je het beu om elke keer dat je van app wisselt op de hoofdschuifregelaar te rijden? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kost eenmalig € 14,99 voor de Mac App Store — in de sandbox, geen stuurprogramma's, geen DMG — en het geeft eindelijk elke app zijn eigen onthouden volume.</p>`,
  },
};
