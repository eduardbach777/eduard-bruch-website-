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

<img src="/apps/sounddial.png" alt="SoundDial podcast-setup — gastgeluid, monitoring en meldingen op onafhankelijke niveaus" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial fijnmazige per-app volumecontrole met 1% precisie op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial regelt Slack-volume onafhankelijk tijdens een huddle terwijl muziek op een ander niveau speelt" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial standaardvolume-instelling — nieuwe apps starten op een ingesteld niveau in plaats van vol volume" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — per-app volumecontrole voor het beheren van alle Mac-audiobronnen onafhankelijk" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Cisco Webex-gespreksvolume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial toont twee audiobronnen op verschillende volumeniveaus op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial laat-op-de-avond filmsetup — streamingapp op gematigd volume, meldingen gedempt" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial behoudt per-app volumeniveaus na Mac slaapstand en waakcycli" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial scheidt DAW-uitvoer van Discord en referentietracks op macOS voor muziekproductie" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Apple Music-volume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — betrouwbare per-app volumemixer voor Mac met profielen, auto-ducking en 200% versterking" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial balanceert Spotify en Discord op verschillende volumeniveaus op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — per-app volumecontrole, profielen, auto-ducking en 200% versterking voor macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt VLC-volume op systeemniveau op macOS voor stille videobestanden" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial configureerbare auto-ducking — bepaal precies hoeveel achtergrondaudio wordt verlaagd tijdens gesprekken" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt app-volume voor Bluetooth-koptelefoons op Mac met per-app schuiven tot 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial balanceert game, Discord en muziek-audioniveaus voor OBS-streaming op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial volumegeheugen — onthoudt en herstelt automatisch per-app volumeniveaus op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Apple Podcasts-volume naar 180% op Mac voor stille podcastafleveringen" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial studentensetup — college op vol volume, studiemuziek laag, meldingen gedempt" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial alles-dempen sneltoets — Control+Option+M om alle apps te dempen en te herstellen met volumeherstel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Google Meet (Chrome) volume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial scheidt meldingsapp-volume van mediaapp-volume op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt FaceTime-gespreksvolume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial sneltoetsen — Control+Option+S om te schakelen, Control+Option+M om alles te dempen" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — een Background Music-alternatief dat geen virtuele audioapparaten installeert" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — een lichter, gericht SoundSource-alternatief met volumeprofielen en auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial fijnmazige per-app volumecontrole met 1% stappen op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Netflix-audio naar 180% op Mac voor helderder dialoog en streamingaudio" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial thuiswerk audio-setup — verschillende volumeniveaus voor Zoom, Spotify en Slack op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial regelt browservolume onafhankelijk van andere apps op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial regelt Discord-volume onafhankelijk van game en muziek op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial met audio-uitvoerapparaat wisselen en per-app volumecontrole in één menubalkpaneel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Microsoft Teams-gespreksvolume voorbij 100% op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial met Slack gedempt en Spotify spelend op normaal volume op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial volumeprofielen — met één klik schakelen tussen Vergadering, Focus en Chill-modus op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Zoom-gespreksvolume naar 180% op Mac voor helderder audio tijdens videogesprekken" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial verlaagt Spotify-volume onafhankelijk terwijl andere apps op vol volume blijven op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial biedt per-app volumecontrole op macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial toont Zoom op vol volume en Spotify verlaagd tijdens een gesprek op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial onthoudt per-app volumeniveaus bij herstarts op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial per-app volumemixer toont individuele app-volumeschuiven op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Safari-browservolume naar 180% voor stille YouTube-video's op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial toont Slack op laag volume en Spotify op normaal volume — onafhankelijke meldingscontrole op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial auto-ducking instellingen — configureerbare volumeverlaging tijdens Zoom-gesprekken op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt app-volume voor AirPods op Mac met per-app volumeschuiven tot 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial versterkt Spotify-volume naar 200% op macOS terwijl andere apps op normaal volume blijven" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial toont onafhankelijke volumeschuiven voor een game en Discord op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — de volumemixer voor macOS, toont per-app volumeschuiven in de menubalk" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial volumeversterking — per-app volumecontrole met 200% versterking op macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial auto-duckingfunctie verlaagt automatisch muziekvolume tijdens een Zoom-gesprek op Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial toont per-app dempknoppen voor elke applicatie in de macOS-menubalk" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — per-app volumemixer voor macOS toont individuele app-volumeschuiven in de menubalk" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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
};
