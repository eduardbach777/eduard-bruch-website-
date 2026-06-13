import type { ArticleSet } from "./index";

export const svArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac-ljud för podcastinspelning: Styr vad du hör under inspelningen",
    description:
      "Spela in en podcast medan du övervakar nivåer, hör din gäst och hanterar notiser – allt konkurrerar om ett volymreglage. Här är en bättre konfiguration.",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>Du spelar in en podcast på din Mac. Du behöver höra din gäst (via Zoom, Riverside eller SquadCast) tydligt. Du behöver övervaka inspelningsnivåerna i din DAW. Du behöver Slack tystat så att inga ping hamnar i inspelningen. Och du behöver systemnotisljud helt avaktiverade – ett macOS-"ding" mitt i en intervju gör ljudet oanvändbart.</p>

<p>macOS ger dig ett volymreglage för allt detta. Det räcker inte.</p>

<h2>Podcastens ljudutmaning på Mac</h2>

<p>Under en podcastinspelning har du vanligtvis:</p>
<ul>
  <li><strong>Kommunikationsapp</strong> (Zoom, Riverside, SquadCast) – gästljud, måste vara tydligt</li>
  <li><strong>DAW / inspelningsapp</strong> (Logic, GarageBand, Audacity, Hindenburg) – övervaka dina egna nivåer</li>
  <li><strong>Notiskällor</strong> (Slack, Mail, Kalender, Meddelanden) – måste vara helt tysta under inspelningen</li>
  <li><strong>Webbläsaren</strong> – kan ha visnotes, forskningstabbar eller en timer igång</li>
</ul>

<p>Allt detta på samma volym är kaos. Din gäst konkurrerar med systemljud. En Slack-notis kan förstöra en tagning. Och om du behöver justera gästens volym ändrar du även dina övervakningsnivåer.</p>

<h2>Den typiska lösningen</h2>

<p>De flesta podcasters använder en kombination av:</p>
<ul>
  <li>Fokusläge (Stör ej) för att undertrycka notiser</li>
  <li>Manuellt stänga Slack, Mail och andra bullriga appar innan inspelning</li>
  <li>Justera kommunikationsappens interna volym för gästen</li>
</ul>

<p>Det fungerar, men är felbenäget. Glömmer du att aktivera Stör ej förstörs tagningen av en notis. Glömmer du att stänga Slack kan ett samtal komma in. Och du kan ändå inte styra gästens volym oberoende av dina övervakningsnivåer.</p>

<h2>Per-app-ljud för podcasting</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig skapa en ren inspelningsmiljö genom att styra varje app oberoende:</p>

<img src="/apps/sounddial.png" alt="SoundDial podcastkonfiguration – gästljud, övervakning och notiser på oberoende nivåer" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Inspelningsprofil</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80–100 % – tydligt gästljud</li>
  <li><strong>Logic / GarageBand:</strong> 60 % – bekväm övervakning utan trötthet</li>
  <li><strong>Slack:</strong> tystat – inga notisljud</li>
  <li><strong>Mail:</strong> tystat</li>
  <li><strong>Meddelanden:</strong> tystat</li>
  <li><strong>Kalender:</strong> tystat</li>
  <li><strong>Webbläsaren:</strong> tystat – inga överraskande autospelningar</li>
</ul>

<p>Spara detta som en "Inspelnings"-profil. Innan du trycker på spela in, tillämpa profilen med ett klick. Varje notiskälla är tystnad, din gäst har full volym och din övervakning är på en bekväm nivå.</p>

<h3>Redigeringsprofil</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100 % – full övervakning vid redigering</li>
  <li><strong>Spotify:</strong> tystat – ingen referensförvirring</li>
  <li><strong>Slack:</strong> 20 % – subtila notiser under pauser</li>
  <li><strong>Webbläsaren:</strong> 40 % – för visnotes och forskning</li>
</ul>

<p>Två profiler, två klick, två helt olika ljudmiljöer. Inget manuellt öppnande och stängande av appar. Inget glömskt att återaktivera notiser efter inspelning.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Varför är min Mac så hög på full volym? Hur du får finare kontroll",
    description:
      "MacBook Pro-högtalarna är utmärkta – tills de dundrar. Om även måttliga volyminställningar känns för höga, så här får du mer precis ljudkontroll.",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Apples nyare MacBook Pro-modeller (14" och 16") har remarkabelt kraftfulla högtalare för en bärbar dator. Så kraftfulla att måttliga volymnivåer kan vara genuint höga – särskilt i ett tyst rum, sent på natten eller med hörlurar. Skillnaden mellan "bekvämt" och "för mycket" är ibland bara ett eller två volymsteg.</p>

<h2>Varför volymstegen känns för grova</h2>

<p>macOS har <strong>16 volymsteg</strong> via tangentbordet. Varje steg är ungefär 6,25 % av det totala omfånget. På kraftfulla högtalare eller känsliga hörlurar kan ett enda steg innebära en märkbar förändring av upplevd volym – från "perfekt" till "för högt" med ett enda knapptryck.</p>

<h2>Inbyggd fix: kvartsteg-volym</h2>

<p>Håll ned <strong>Option + Skift</strong> och tryck volym upp/ned. Varje tryckning justerar med en fjärdedel av ett normalt steg, vilket ger dig <strong>64 nivåer</strong> istället för 16. Denna 4x finare kontroll gör det mycket lättare att hitta exakt rätt volym, särskilt med kraftfulla högtalare eller hörlurar.</p>

<p>Det är det enskilt mest användbara Mac-ljudtipset som de flesta inte känner till.</p>

<h2>Det djupare problemet: ett reglage för allt</h2>

<p>Även med 64 nivåer har du fortfarande ett reglage som styr alla appar. Om du ställer in volymen lågt nog för bekväma notisljud kan musiken bli för tyst. Ställer du in den för musik kan ett notis-ping få dig att hoppa till.</p>

<p>Det verkliga problemet är att olika ljudkällor behöver olika volymer. Notiser bör vara subtila. Musik bör vara närvarande. Samtal bör vara tydliga. Webbläsarvideo bör vara måttlig. Ett reglage kan inte betjäna alla dessa väl.</p>

<h2>Per-app-volym för precis kontroll</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger varje app sitt eget volymreglage med <strong>1 %-steg</strong> från 0 % till 200 %. Det är 200 precisionsnivåer per app, jämfört med macOS:s 16 (eller 64 med modifieringstangenten) systemövergripande steg.</p>

<img src="/apps/sounddial.png" alt="SoundDial finkornig per-app-volymkontroll med 1 % precision på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ställ in systemvolymen på en måttlig basnivå (50–60 %), använd sedan SoundDial för att finjustera varje app:</p>
<ul>
  <li><strong>Spotify:</strong> 35 % – bekväm bakgrundsnivå</li>
  <li><strong>Slack:</strong> 12 % – subtilt notis-ping</li>
  <li><strong>Zoom:</strong> 85 % – tydligt samtalsljud utan att vara överväldigande</li>
  <li><strong>Safari:</strong> 45 % – måttlig videouppspelning</li>
</ul>

<p>På detta sätt är ingen enskild ljudkälla någonsin "för hög". Varje källan är inställd på sin ideala nivå oberoende av de andra. Ett Slack-ping på 12 % är knappt märkbart, medan ditt Zoom-samtal på 85 % är kristallklart – allt vid samma systemvolymsinställning.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Slack Huddle-volymproblem på Mac: För tyst, för högt eller kamp med musiken",
    description:
      "Slack-huddles konkurrerar med din musik och notiser om samma volym. Så här styr du huddle-ljud oberoende från allt annat på Mac.",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Slack-huddles är praktiska – du klickar på en knapp och är i ett röstsamtal utan att boka ett möte. Men ljudet är rörigt. Huddle-samtalet håller samma volym som din Spotify. Slacks notisljud pingar på samma nivå som samtalet. Och när någon delar musik eller en skärm med ljud i huddlen är det antingen ohörbart eller öronbedövande.</p>

<p>Problemet är inte Slack. Det är macOS. Allt körs genom ett volymreglage, så huddle-ljud, notisljud, musik och webbläsarljud kämpar alla om samma utrymme.</p>

<h2>Slacks interna ljudkontroller</h2>

<p>Slack har begränsade ljudkontroller:</p>
<ul>
  <li><strong>Notisinställningar:</strong> Slack → Inställningar → Notiser → Ljud och utseende. Du kan ändra notisljudet eller avaktivera specifika ljud, men du kan inte ställa in notisvolymen oberoende från huddle-volymen.</li>
  <li><strong>Huddle-volym:</strong> Under en huddle finns inget separat volymreglage för samtalet kontra Slacks övriga ljud. Allt i Slack är en enda ljudström till macOS.</li>
  <li><strong>In-/utdataenhet:</strong> Slack → Inställningar → Ljud och video låter dig välja mikrofon- och högtalarenheter, men inte volymnivåer per funktion.</li>
</ul>

<h2>De tre Slack-ljudproblemen</h2>

<h3>1. Huddle för tyst i förhållande till musik</h3>
<p>Din musik är på en bekväm nivå. Du går med i en huddle. Din kollegas röst är på samma volym som musiken – du kan inte urskilja ord tydligt. Att höja systemvolymen gör musiken för hög.</p>

<h3>2. Notisljud under huddles</h3>
<p>Du är i en huddle-diskussion. Varje Slack-meddelande som kommer in pingar på samma volym som samtalet. I en aktiv arbetsyta med aktiva kanaler gör det konstanta pingandet huddlen oanvändbar.</p>

<h3>3. Huddle för högt för bakgrundslyssning</h3>
<p>Ibland ansluter du till en huddle för att passivt lyssna medan du arbetar. Du vill ha det på bakgrundsnivå – tyst nog för att inte distrahera, högt nog för att höra om någon säger ditt namn. macOS låter dig inte ställa in Slack på 20 % medan webbläsaren är på 60 %.</p>

<h2>Lösningen: styr Slacks volym oberoende</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger Slack sitt eget volymreglage, separat från alla andra appar. Eftersom Slacks huddle-ljud och notisljud är en del av samma app styr reglaget båda – men det är faktiskt vad du vill ha för det mesta.</p>

<img src="/apps/sounddial.png" alt="SoundDial styr Slack-volymen oberoende under en huddle medan musik spelas på en annan nivå" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Huddle-optimerad konfiguration</h3>
<ul>
  <li><strong>Slack:</strong> 90–100 % (tydligt huddle-ljud, notiser är höga men du är aktivt i Slack)</li>
  <li><strong>Spotify:</strong> 15 % (knappt märkbar bakgrund, konkurrerar inte med röster)</li>
  <li><strong>Webbläsaren:</strong> tystat (inga överraskande flik-ljud)</li>
</ul>

<h3>Passiv huddle-konfiguration</h3>
<ul>
  <li><strong>Slack:</strong> 30 % (bakgrundslyssningsnivå)</li>
  <li><strong>Spotify:</strong> 40 % (primärt ljud är din musik)</li>
  <li><strong>Webbläsaren:</strong> 50 % (normal arbetsnivå)</li>
</ul>

<p>Spara varje konfiguration som en profil. När en huddle startar, tillämpa rätt profil med ett klick. Eller använd <strong>auto-ducking</strong> – när huddlen aktiverar din mikrofon sänker SoundDial automatiskt allt utom Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Hur du ställer in standardvolym för nya appar på Mac",
    description:
      "Nya appar startar med full volym som standard. Så här får du varje ny app att starta på en bekväm nivå – så att ingenting överraskar dig.",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>Du installerar en ny app. Den startar för första gången. Den spelar omedelbart upp ljud – ett introll, en notis, en handledningsvideo – med full systemvolym. Du väntade dig det inte. Dina hörlurar är på. Öronen ringer.</p>

<p>macOS har inget koncept för "standardvolym för nya appar" eftersom macOS inte har per-app-volym. Varje app får systemvolymen, och systemvolymen är vad du senast ställde in den på. Nya appar får ingen specialbehandling – de dundrar bara på vilken nivå allt annat är på.</p>

<h2>Varför detta är ett problem</h2>

<p>När du startar en app för första gången vet du inte hur hög den kommer att vara. Vissa appar spelar upp ljud direkt (onboarding-handledningar, notisljud, välkomstvideor). Om din systemvolym är på 80 % för att du lyssnade på musik är den nya appens ljud också på 80 % – vilket kan vara mycket högre än vad som är bekvämt för en oväntad ljudkälla.</p>

<p>Detta är särskilt störande med:</p>
<ul>
  <li>Kommunikationsappar (Slack, Teams) som spelar upp ett startljud</li>
  <li>Appar med videohandledningar vid första start</li>
  <li>Spel som omedelbart dundrar med titelskärmsmusik</li>
  <li>Webbläsarbaserade appar som autospelar innehåll</li>
</ul>

<h2>Lösningen: standardvolym för nya appar</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> har en <strong>konfigurerbar standardvolym</strong> för nya appar. I inställningarna anger du vilken volymnivå nyupptäckta appar ska starta på – till exempel 70 %. Första gången en app startar och producerar ljud ställer SoundDial in den på 70 % istället för 100 %.</p>

<img src="/apps/sounddial.png" alt="SoundDial standardvolym-inställning – nya appar startar på en konfigurerad nivå istället för full blast" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Det innebär:</p>
<ul>
  <li>Inga överraskande full-volym-ljud från nyinstallerade appar</li>
  <li>Varje ny app startar på en bekväm, förutsägbar nivå</li>
  <li>Du kan sedan justera upp eller ned från standardnivån efter behov</li>
  <li>När den väl justerats kommer <strong>volymminnesfunktionen</strong> att komma ihåg den appens nivå för framtida starter</li>
</ul>

<p>Det är en liten funktion, men den löser ett genuint dagligt besvär – den "nya app-överraskning" som fångar alla på fel fot åtminstone en gång.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac-startljudet för högt? Så här avaktiverar eller sänker du det",
    description:
      "Mac-startklangen dundrar med full volym varje gång du startar om – särskilt pinsamt på möten och i tysta rum. Så här tystar eller styr du det.",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>Du startar om din Mac i ett tyst kontor. Mötesrummet är dödstyst. Sedan – <em>BONG</em> – startklangen dundrar med full volym. Alla tittar på dig. Klangen är ikonisk, men den är okontrollerbar och ofta pinsamt hög.</p>

<h2>Hur du avaktiverar startljudet</h2>

<p>macOS låter dig stänga av startklangen helt:</p>

<ol>
  <li>Gå till <strong>Systeminställningar → Ljud</strong></li>
  <li>Hitta <strong>"Spela upp ljud vid start"</strong></li>
  <li>Avmarkera det</li>
</ol>

<p>Klart. Din Mac startar nu tyst. Inga Terminal-kommandon behövs – den här inställningen har funnits sedan macOS Big Sur.</p>

<h3>Terminal-metoden (om du föredrar det)</h3>
<p>Du kan även avaktivera det via Terminal:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>För att återaktivera:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Kan du sänka startljudet istället för att avaktivera det?</h2>

<p>Inte direkt. Startklangen spelas upp med en fast volym som bestäms av systemvolymen vid nedstängning. Om din Mac var på 80 % volym när du stängde av den spelas klangen upp på ungefär 80 %. Om den var på 20 % är klangen tystare.</p>

<p><strong>Lösning:</strong> Innan du startar om din Mac, sänk systemvolymen till 10–20 %. Startklangen spelas upp på den lägre nivån. Inte idealiskt – det kräver att du kommer ihåg – men det fungerar om du vill ha klangen på en rimlig volym snarare än helt tystnad.</p>

<h2>Det bredare Mac-ljudkontrollproblemet</h2>

<p>Startklangen är bara ett exempel på macOS:s begränsade ljudkontroll. Systemljud, notisljud och app-ljud blandas alla ihop med minimal oberoende kontroll. Om du regelbundet justerar volymen för att hantera olika ljudkällor under dagen löser per-app-volymkontroll det bredare problemet.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger varje app på din Mac sitt eget volymreglage. Ställ in notisappar lågt, musik på en bekväm nivå och samtal på full volym – allt oberoende. Spara konfigurationer som profiler och byt med ett klick.</p>

<img src="/apps/sounddial.png" alt="SoundDial – per-app-volymkontroll för att hantera alla Mac-ljudkällor oberoende" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Cisco Webex för tyst på Mac? Så här fixar du det",
    description:
      "Webex-samtal är knappt hörbara på din Mac. Här är alla fixar – från Webex-ljudinställningar till att boosta samtalsvolymen förbi 100 % med en per-app-mixer.",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex är ett av de mest använda videokonferensverktygen i företagsmiljöer – och ett av de mest klagade på för ljudkvalitet på Mac. Låg samtalsvolym, dova röster och ljud som verkar tystare än Zoom eller Teams vid samma systemvolym. Om du knappt kan höra dina Webex-samtal är du inte ensam.</p>

<h2>1. Kontrollera Webex-ljudinställningarna</h2>

<p>Under ett Webex-möte, klicka på ljudmenyn (högtalarikon eller de tre prickarna → Ljudinställningar):</p>
<ul>
  <li>Se till att rätt <strong>högtalar</strong>enhet är vald</li>
  <li>Dra högtalarvolymens reglage till maximum</li>
  <li>Klicka "Testa" för att spela upp en testton och verifiera utdata</li>
  <li>Kontrollera om "Musikläge" är aktiverat – avaktivera det om du inte specifikt presenterar musik</li>
  <li>Kontrollera brusreduceringsinställningar – "Ta bort bakgrundsljud" på aggressivt läge kan minska upplevd röstvolym</li>
</ul>

<h2>2. Kontrollera macOS-utdata</h2>

<p>Systeminställningar → Ljud → Utdata. Verifiera att rätt enhet är vald och att volymen är på maximum. Efter en macOS-uppdatering eller enhetsbyte kan Webex använda en oväntad utdata.</p>

<h2>3. Bluetooth-kodekproblem</h2>

<p>Använder du AirPods eller Bluetooth-hörlurar? Webex som aktiverar mikrofonen tvingar AAC→SCO-kodekbytet, vilket minskar ljudkvalitet och volym. Använd en separat mikrofon (inbyggd Mac-mikrofon eller USB) och behåll Bluetooth-hörlurarna som utdata bara.</p>

<h2>4. Webex-specifik ljudbehandling</h2>

<p>Webex har aggressiv ljudbehandling som kan minska den upplevda volymen hos samtalsdeltagare. Prova dessa Webex-inställningar:</p>
<ul>
  <li>Ställ in brusreducering på "Låg" istället för "Hög"</li>
  <li>Avaktivera "Optimera för min röst" om det är aktiverat</li>
  <li>Prova att byta från "Datorljud" till en specifik enhet</li>
</ul>

<h2>5. IT/administratörsproblemet</h2>

<p>I företagsmiljöer hanteras Webex ofta av IT med specifika ljudpolicyer. Vissa inställningar kan vara låsta eller förkonfigurerade. Om grundläggande fixar inte fungerar, kontrollera med din IT-avdelning om Webex-ljudpolicyer. Vissa organisationer begränsar maximala ljudnivåer eller tillämpar specifika ljudbehandlingsinställningar.</p>

<h2>6. Boosta Webex förbi 100 %</h2>

<p>Om inställningarna är maximerade och deltagarna fortfarande är för tysta låter <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dig boosta Webex till <strong>200 %</strong>. Detta förstärker samtalsljudet bortom Webex inbyggda maximum – användbart när en deltagare har en dålig mikrofon eller när Webex:s ljudbehandling reducerar signalen för mycket.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar Cisco Webex samtalsvolym bortom 100 % på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial hjälper även under back-to-back Webex-möten: använd auto-ducking för att automatiskt sänka din bakgrundsmusik när varje möte startar och återställa den under pauserna. Spara en "Möten"-volymprofil för att direkt ställa in din föredragna ljudbalans för arbetsdagen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Hur du lyssnar på två saker samtidigt på Mac utan att bli galen",
    description:
      "Musik och en podcast. En föreläsning och anteckningsvideo. Ett samtal och bakgrundsmusik. macOS tvingar dig att välja en volym för båda – här är hur du balanserar dem.",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>Du vill lyssna på två ljudkällor samtidigt. Musik under ett samtal. En podcast medan du tittar på en handledning. Bakgrundsambians medan du studerar. Två saker, två olika idealvolymer. macOS ger dig ett reglage för båda.</p>

<p>Det är den grundläggande ljudbegränsningen i macOS: varje app delar en volym. Du kan inte säga "den här på 30 %, den där på 80 %". Det är allt på en nivå, eller ingenting.</p>

<h2>När du faktiskt behöver två ljudkällor</h2>

<p>Det här är inget kantfall. Det är hur de flesta använder sina datorer:</p>

<ul>
  <li><strong>Musik + videosamtal</strong> – det vanligaste. Bakgrundsmusik under ett Zoom-möte, men tyst nog för att höra kollegor.</li>
  <li><strong>Föreläsning + referensmaterial</strong> – en student som tittar på en inspelad föreläsning medan de ibland tittar på en YouTube-handledning för sammanhang.</li>
  <li><strong>Podcast + ambient-ljud</strong> – lyssnar på en podcast medan en vit brus- eller regnljudsapp spelar tyst.</li>
  <li><strong>Två webbläsarflikar</strong> – en träningsvideo i en flik och en demo i en annan, på olika volymer.</li>
  <li><strong>Spel + röstchatt</strong> – spelljud för upplevelse, Discord för kommunikation.</li>
</ul>

<p>I varje fall är en källa "primär" (högre, viktigare) och den andra är "sekundär" (tystare, stödjande). Det idealiska förhållandet är olika för varje kombination och förändras under dagen.</p>

<h2>macOS-begränsningen</h2>

<p>macOS har ett volymreglage. Trycker du på volymtangenten ändras allt lika mycket. Om du ställer in volymen för bekväm podcastlyssning är regnljudsappen också på den nivån – antingen för hög (distraherande) eller du har inte justerat den i sin egen app (om den ens har en volymkontroll).</p>

<p>Vissa appar har interna volymreglage (Spotify, VLC), men de flesta har inte det. Och även när de har det är det klumpigt och långsamt att byta mellan appar för att justera två separata volymkontroller.</p>

<h2>Lösningen: per-app-volym i en panel</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> placerar varje app i en menyfältspanel med oberoende volymreglage. Båda ljudkällorna, sida vid sida, var och en med sin egen nivå. Justera en utan att röra den andra.</p>

<img src="/apps/sounddial.png" alt="SoundDial visar två ljudkällor på olika volymnivåer på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Exempelkonfigurationer:</p>

<p><strong>Musik + Zoom-samtal:</strong></p>
<ul>
  <li>Zoom: 100 % | Spotify: 20 %</li>
</ul>

<p><strong>Podcast + regnljud:</strong></p>
<ul>
  <li>Podcast-app: 70 % | Regnapp: 15 %</li>
</ul>

<p><strong>Föreläsning + YouTube-handledning:</strong></p>
<ul>
  <li>Zoom (föreläsning): 90 % | Chrome (YouTube): 40 %</li>
</ul>

<p>Varje kombination är en annan balans. Spara de du använder regelbundet som <strong>volymprofiler</strong> och byt med ett klick. Auto-ducking hanterar musik+samtal-scenariot automatiskt – när ett samtal startar sjunker musiken till din konfigurerade nivå utan att du rör något.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Hur du tittar på film på Mac utan att väcka alla",
    description:
      "Dialogen är ohörbar, sedan skakar explosioner väggarna. Så här tämjer du filmljudet för senlatekvällen på Mac – utan att missa ett ord.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>Klockan är 01:00. Du tittar på en film på din MacBook i sängen. Karaktärerna viskar – du höjer volymen. Sedan börjar en biljakt och plötsligt kan hela din lägenhet höra det. Du kastar dig mot volymtangenten. Den här cykeln upprepas i två timmar.</p>

<p>Problemet är <strong>dynamiskt omfång</strong> – klyftan mellan en films tystaste och högsta ögonblick. I en biograf med ett kraftfullt ljudsystem skapar detta omfång en uppslukande upplevelse. På en MacBook vid midnatt skapar det en konstant kamp mellan "kan inte höra dialogen" och "väcker grannarna".</p>

<h2>Varför filmer är högre än musik eller podcasts</h2>

<p>Musik mastras vanligtvis med komprimerat dynamiskt omfång – skillnaden mellan de tystaste och högsta delarna är relativt liten (kanske 10–15 dB). Podcasts är ännu mer komprimerade. Filmer, särskilt actionfilmer, kan ha ett dynamiskt omfång på <strong>30–40 dB</strong> – de tysta delarna är viskningstyst och de höga delarna är designade för att skaka biosalsstolar.</p>

<p>När du ställer in MacBook-volymen för att höra dialogen är actionscenerna 100 gånger högre i termer av ljudtryck. Det finns ingen bekväm systemvolym som fungerar för båda.</p>

<h2>Fix 1: Använd streamingtjänstens nattläge</h2>

<p>Vissa streamingtjänster har en dynamisk omfångskomprimering specifikt för detta:</p>
<ul>
  <li><strong>Netflix:</strong> Sök efter en "Minska höga ljud"-knapp i ljudinställningarna under uppspelning</li>
  <li><strong>Apple TV+:</strong> Systeminställningar → Tillgänglighet → "Minska höga ljud"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost" på stödda titlar</li>
  <li><strong>Disney+:</strong> Ingen motsvarande funktion för närvarande</li>
</ul>

<p>Dessa funktioner komprimerar det dynamiska omfånget så att tysta delar är högre och höga delar är tystare. Resultatet är jämnare ljud som fungerar vid låga volymer.</p>

<h2>Fix 2: Använd hörlurar</h2>

<p>Hörlurar löser "väcka alla"-delen – ditt ljud är privat. Men de löser inte det dynamiska omfångsproblemet. Dialog-explosions-cykeln sker fortfarande, bara i dina öron. Det är här per-app-volymkontroll hjälper: ställ in din streaming-apps volym exakt för hörlurslyssning.</p>

<h2>Fix 3: Ställ in din streaming-app på en specifik volym</h2>

<p>Det verkliga problemet för sen-kväll-tittande är att din streaming-app, notisljud och annan ljud alla är på samma systemvolym. Ett Slack-ping klockan 02:00 på samma volym som din filmdialog är en hjärtattacknivå-överraskning.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig skapa den perfekta sena kvällen-konfigurationen:</p>

<img src="/apps/sounddial.png" alt="SoundDial sen kväll-filmkonfiguration – streaming-app på måttlig volym, notiser tystade" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Sen kväll-filmprofil</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / webbläsare:</strong> 40–50 % – bekväm dialognivå utan öronbedövande actionscener</li>
  <li><strong>Slack:</strong> tystat – inga överraskande pings</li>
  <li><strong>Mail:</strong> tystat</li>
  <li><strong>iMessage:</strong> tystat</li>
  <li><strong>Systemljud:</strong> tystat</li>
</ul>

<p>Spara detta som en "Natt"-profil. När du startar en senkvällsfilm, tillämpa profilen med ett klick. Varje notiskälla är tystnad och din streaming-app är på en kontrollerad volym. När du är klar, byt tillbaka till din dagsprofil.</p>

<p>Kombinera detta med streamingtjänstens "Minska höga ljud"-funktion för maximal effekt: tjänsten komprimerar det dynamiska omfånget och SoundDial säkerställer att ingenting annat på din Mac låter.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac-volymen återställs efter viloläge? Så här behåller du dina ljudinställningar",
    description:
      "Varje gång din Mac vaknar från viloläge är volymen fel – återställd till max, nere på noll eller bytt till fel utdata. Här är varför och hur du fixar det.",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>Du stänger MacBook-locket. Du öppnar det senare. Volymen är annorlunda. Kanske är den på maximum när du hade den på 40 %. Kanske bytte den från hörlurar till högtalare. Kanske är den på noll. Den var bra innan viloläget – nu är den fel.</p>

<p>Volymåterställning efter viloläge är ett ihållande macOS-fel som uppträder i olika former i olika macOS-versioner. Här är vad som orsakar det och hur du hanterar det.</p>

<h2>Varför det händer</h2>

<h3>1. Ljudutdataenhet byttes under viloläget</h3>
<p>Om du hade Bluetooth-hörlurar anslutna innan viloläget och de kopplar ifrån medan Mac:en är i viloläge (batteriet tog slut, rörde sig utanför räckvidd) växlar macOS till de inbyggda högtalarna när det vaknar. Eftersom macOS minns volym per enhet ändras volymen till vad högtalarna senast var inställda på – vilket kan skilja sig mycket från din hörlursvolym.</p>

<h3>2. Core Audio-daemon-omstart</h3>
<p>macOS:s ljud-daemon (coreaudiod) startar ibland om under viloläge/uppvakningscykler. När den startar om kan den initialiseras med standardvolymnivåer istället för dina senaste inställningar. Det här är ett systemfel som Apple delvis fixat i olika uppdateringar men aldrig helt eliminerat.</p>

<h3>3. HDMI/DisplayPort-återanslutning</h3>
<p>Om du använder en extern skärm via HDMI eller DisplayPort kan öppning och stängning av locket göra att skärmen kopplar ifrån och återansluter. Vissa skärmar är också ljudutdataenheter, och macOS kan byta till eller från skärmens högtalare under denna process, vilket ändrar volymen.</p>

<h3>4. Bluetooth-återparning</h3>
<p>När Bluetooth-enheter återansluter efter viloläget kan volymförhandlingen resultera i en annan nivå än vad du hade innan. Det är särskilt vanligt med tredjepartsBluetooth-hörlurar (mindre vanligt med AirPods, som Apple har optimerat).</p>

<h2>Fixar</h2>

<h3>Förhindra Bluetooth-frånkoppling under viloläge</h3>
<p>Systeminställningar → Bluetooth → Avancerat (eller klicka "i" på din enhet). Vissa inställningar styr om Bluetooth förblir aktiv under viloläge. Att hålla anslutningen aktiv förhindrar frånkopplings/återanslutningscykeln som återställer volymen.</p>

<h3>Avaktivera auto-byte för AirPods</h3>
<p>Systeminställningar → Bluetooth → klicka "i" bredvid AirPods → "Anslut till den här Mac:en" → ställ in på "När senast ansluten till den här Mac:en". Detta förhindrar AirPods från att automatiskt ansluta från en annan enhet under viloläget.</p>

<h3>Ange en konsekvent utdataenhet</h3>
<p>Efter att ha vaknat från viloläget, håll Option och klicka på Ljud-ikonen i menyfältet. Välj din föredragna utdataenhet. Gör detta konsekvent och macOS bör så småningom "fastna" vid din preferens.</p>

<h3>Återställ NVRAM (Intel-Mac)</h3>
<p>Om volymåterställningar är kroniska, återställ NVRAM: stäng av → slå på och håll Option+Kommando+P+R i 20 sekunder. Detta rensar lagrade ljudinställningar och kan fixa ihållande volymproblem.</p>

<h2>Skydda din ljudbalans med SoundDial</h2>

<p>Även om systemvolymen återställs efter viloläget skyddar <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> din <em>per-app</em>-volymbalans. Dess <strong>volymminne</strong>-funktion sparar varje apps volym oberoende och återställer den efter uppvaknande, omstart eller app-omstart.</p>

<img src="/apps/sounddial.png" alt="SoundDial bevarar per-app-volymnivåer efter Mac viloläge och uppvakningscykler" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Så även om macOS återställer systemvolymen till 80 % efter viloläget förblir din per-app-balans intakt:</p>
<ul>
  <li>Spotify fortfarande på 30 % av systemvolymen</li>
  <li>Zoom fortfarande på 100 %</li>
  <li>Slack fortfarande tystat</li>
</ul>

<p>Du kan behöva fixa systemvolymen (en justering), men du behöver inte balansera om alla dina appar (vilket skulle vara sex eller sju justeringar). Och med <strong>volymprofiler</strong> är till och med den fullständiga återhämtningen ett klick.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac-ljud för musikproduktion: Styr DAW och kommunikation separat",
    description:
      "Använder du Logic Pro eller Ableton medan du är på ett Discord-samtal? Så här hör du din DAW med full kvalitet medan du håller röstchatten på en bekväm nivå.",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>Du producerar musik i Logic Pro (eller Ableton, eller FL Studio). Du är också på Discord med en samarbetspartner. Problemet: din DAW-utdata och Discord kämpar om samma volymnivå. Höjer du Logic för att höra din mix tydligt dundar Discord i öronen. Sänker du för Discord är din mix för tyst för att utvärdera ordentligt.</p>

<p>Det här är ett verkligt problem för musikproducenter på Mac eftersom övervakningsvolymen direkt påverkar mixningsbeslut. Om din DAW är för tyst för att Discord konkurrerar mixar du högre än avsett. Om Discord dränker detaljer missar du problem i din mix.</p>

<h2>Varför detta spelar roll för produktion</h2>

<p>Musikproduktion kräver <strong>korrekta övervakningsnivåer</strong>. Du behöver höra din DAW på en konsekvent, kalibrerad volym för att fatta tillförlitliga mixningsbeslut. Kommunikationsappar, notiser och andra ljudkällor stör detta – men du behöver dem ofta igång samtidigt för fjärrsamarbete.</p>

<p>Professionella studior löser detta med separata övervakningsvägar och talkback-system. På en bärbar dator behöver du mjukvara.</p>

<h2>DAW:s interna metod</h2>

<p>Du kan använda din DAW:s interna övervakningsnivå för att hålla den på konsekvent utdata och sedan justera Discords volym internt. Men:</p>
<ul>
  <li>Discords utgångsvolymreglage är oprecist och begränsat till 0–100 %</li>
  <li>Du kan fortfarande inte förhindra systemljud och notiser från att störa på oväntade nivåer</li>
  <li>Om du behöver referera ett spår i Spotify eller YouTube är de också på systemvolymen</li>
</ul>

<h2>Per-app-volym för produktion</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig ange exakta volymer för varje app oberoende:</p>

<img src="/apps/sounddial.png" alt="SoundDial separerar DAW-utdata från Discord och referensspår på macOS för musikproduktion" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Produktionskonfiguration</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80–100 % – din primära övervakningsnivå</li>
  <li><strong>Discord / röstchatt:</strong> 40–60 % – hörbart men tydligt sekundärt till din mix</li>
  <li><strong>Spotify / referensspår:</strong> 80 % – matcha din DAW-nivå för korrekta A/B-jämförelser</li>
  <li><strong>Slack / notiser:</strong> tystat – noll störning under produktion</li>
  <li><strong>Safari / Chrome:</strong> 50 % – för att titta på handledningar utan att spränga öronen</li>
</ul>

<h3>Spara det som en "Produktion"-profil</h3>
<p>Spara denna konfiguration och tillämpa den med ett klick när du sätter dig för att producera. När du är klar och byter till avslappnad användning, tillämpa din "Normal"-profil. Ingen omjustering av åtta appar.</p>

<h3>Auto-ducking för fjärrsessioner</h3>
<p>Om du är i ett samtal med en samarbetspartner kan SoundDials auto-ducking sänka icke-kommunikationsappar när mikrofonen är aktiv. Men för produktion kanske du vill <em>avaktivera</em> auto-ducking – du behöver din DAW på konsekventa nivåer oavsett om du pratar eller inte. Knappen är ett klick i inställningarna.</p>

<h2>En not om latens</h2>

<p>SoundDial använder Apples Core Audio Tap API för volymkontroll. Behandlingen lägger till försumbar latens – omöjlig att uppfatta för övervakningsändamål. Om du spelar in och övervakar genom din DAW med direktövervakning aktiverad stör inte SoundDial din DAW:s ljudväg. Den justerar bara utgångsnivån som når dina högtalare/hörlurar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Apple Music för tyst på Mac? Hur du fixar och boostar det",
    description:
      "Apple Music på maxvolym på din Mac men fortfarande för tyst? Kontrollera Sound Check, EQ-inställningar och lär dig hur du boostar Apple Music förbi 100 %.",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music är på full volym. Din Mac är på full volym. En låt du vet borde vara hög är knappt hörbar. Medan du byter till Spotify – samma låt, samma volym – är den märkbart högre. Vad händer?</p>

<p>Apple Music har flera inställningar som kan minska uppspelningsvolymen, och de är inte uppenbara. Låt oss gå igenom var och en.</p>

<h2>1. Kontrollera Sound Check</h2>

<p>Apple Music har en funktion som kallas <strong>Sound Check</strong> som normaliserar volymen på alla spår så att de spelas upp med ungefär samma upplevda styrka. Detta förhindrar störande volymhopp mellan låtar, men gör det genom att <em>minska</em> volymen på högre spår – vilket gör allt tystare generellt.</p>

<p>Kontrollera: Öppna Music-appen → Inställningar (⌘,) → Uppspelning → <strong>Sound Check</strong>.</p>

<p>Om Sound Check är aktiverat, prova att avaktivera det. Låtar som reducerades för att matcha tystare spår spelas nu upp på sin ursprungliga mastrade nivå – vilket ofta är märkbart högre.</p>

<h2>2. Kontrollera EQ-inställningen</h2>

<p>Apple Music har en inbyggd equalizer. Vissa EQ-förval minskar den totala volymen för att förhindra klippning när specifika frekvenser boostas.</p>

<p>Kontrollera: Music-appen → Inställningar → Uppspelning → <strong>EQ</strong>. Om ett EQ-förval är valt (särskilt "Spoken Word", "Late Night" eller "Small Speakers"), prova att ställa in det på "Av" och se om volymen förbättras.</p>

<p>"Late Night"-EQ komprimerar i synnerhet dynamiskt omfång – gör tysta delar högre men höga delar tystare. Det kan göra allt kännas "plattare" och lägre i volym.</p>

<h2>3. Kontrollera Lossless Audio-inställningar</h2>

<p>Om du har Apple Music Lossless aktiverat (Inställningar → Ljudkvalitet) kan den högkvalitativa strömmen faktiskt ha lägre upplevd volym än standard-AAC-strömmen för vissa spår. Det beror på att lossless inte har samma mastering-justeringar som Apple tillämpar på AAC-versionerna.</p>

<p>Prova att tillfälligt byta till AAC-kvalitet för att se om volymskillnaden är märkbar.</p>

<h2>4. Hörlurssäkerhet</h2>

<p>Systeminställningar → Ljud → Hörlurssäkerhet. Om "Minska högt ljud" är på begränsar macOS din hörlursvolym globalt – vilket påverkar Apple Music tillsammans med allt annat.</p>

<h2>5. Boosta Apple Music förbi 100 %</h2>

<p>Om du har kontrollerat allt och Apple Music fortfarande är för tyst – oavsett om det är Sound Check som är aggressiv, ett tyst album eller att dina MacBook-högtalare helt enkelt inte är tillräckligt starka – löser en per-app-volymboost det.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig boosta Apple Music till <strong>200 %</strong>. Ljudsignalen förstärks på systemnivå innan den når dina högtalare eller hörlurar. Bara Apple Music blir högre – Zoom, Slack och din webbläsare stannar på sina nuvarande nivåer.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar Apple Music-volymen bortom 100 % på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Det är också användbart för det omvända problemet: om Apple Music är för högt i förhållande till ditt Zoom-samtal, sänk Apple Music till 25 % i SoundDial medan du håller Zoom på 100 %. Per-app-kontroll innebär att du aldrig behöver kompromissa med en apps volym för en annans skull.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Gratis volymixer för Mac: Vad du faktiskt får (och vad du inte får)",
    description:
      "Letar du efter en gratis per-app-volymixer för Mac? Här är en ärlig genomgång av vad gratisalternativen erbjuder, vad de saknar och när det är värt att betala.",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>Om du söker "gratis volymixer för Mac" hittar du ett huvudresultat: <strong>Background Music</strong>. Det är den enda anmärkningsvärda gratis, öppen källkod per-app-volymkontrollappen för macOS. Låt oss titta på vad du faktiskt får – och vad du ger upp.</p>

<h2>Background Music: gratisalternativet</h2>

<p>Background Music är en gratis, öppen källkod-app som finns på GitHub. Den ger dig:</p>

<ul>
  <li><strong>Per-app-volymreglage</strong> – grundläggande volymkontroll för varje körande app</li>
  <li><strong>Auto-paus av musik</strong> – pausar din musikspelare när en annan app spelar ljud, återupptar när den slutar</li>
  <li><strong>Inställning av standardutdataenhet</strong> – åsidosätt vilken enhet appar använder som standard</li>
</ul>

<h3>Vad Background Music inte har</h3>
<ul>
  <li><strong>Ingen volymboost förbi 100 %</strong> – reglagen går från 0 % till 100 % bara. Kan inte förstärka tysta appar.</li>
  <li><strong>Inga volymprofiler</strong> – kan inte spara och byta mellan konfigurationer</li>
  <li><strong>Ingen auto-ducking</strong> – auto-paus är annorlunda från auto-duck. Paus stoppar musik helt; ducking sänker den till en bekväm bakgrundsnivå. Många föredrar tyst bakgrundsmusik under samtal framför total tystnad.</li>
  <li><strong>Inget volymminne</strong> – minns inte per-app-volymer mellan omstarter</li>
  <li><strong>Inga tangentbordsgenvägar</strong> – ingen snabbtangent för att växla mixern eller tysta alla appar</li>
  <li><strong>Inget byte av utdataenhet</strong> – kan inte byta högtalare/hörlurar från samma panel</li>
</ul>

<h3>Tillförlitlighetsproblemet</h3>
<p>Background Musics största problem är inte funktioner – det är stabilitet. Det fungerar genom att installera en <strong>virtuell ljudenhetsdrivrutin</strong>, och den här drivrutinen bryts med macOS-uppdateringar. Efter nästan varje större macOS-version (Ventura, Sonoma, Sequoia, Tahoe) rapporterar användare:</p>
<ul>
  <li>Virtuell enhet misslyckas med att installeras</li>
  <li>Ljud-crackling och glitchar</li>
  <li>Appar som inte identifieras</li>
  <li>Ingen ljudutdata alls</li>
  <li>App kraschar vid start</li>
</ul>

<p>Eftersom det är ett frivilligunderhållet öppen källkodsprojekt är fixar inte alltid snabba. Du kan vara utan per-app-volym i veckor efter en macOS-uppdatering.</p>

<h2>Andra "gratis"-alternativ</h2>

<h3>eqMac (gratisnivå)</h3>
<p>eqMacs gratisnivå ger en systemövergripande equalizer men inte per-app-volymkontroll. Per-app-funktionerna kräver eqMac Pro (prenumeration). Gratisversionen är användbar om du primärt behöver EQ, inte volymixning.</p>

<h3>macOS inbyggt</h3>
<p>macOS har ingen inbyggd volymixer. Det närmaste är notisvolymreglaget i Systeminställningar → Ljud, som bara påverkar systemljud – inte app-ljud.</p>

<h2>När gratis räcker</h2>

<p>Background Music kan räcka om:</p>
<ul>
  <li>Du bara behöver grundläggande per-app-volym (0–100 %)</li>
  <li>Du inte behöver profiler, auto-ducking eller volymboost</li>
  <li>Du är bekväm med att fixa det när macOS-uppdateringar bryter det</li>
  <li>Du är okej med en virtuell ljudenhet i din ljudkedja</li>
</ul>

<h2>När det är värt att betala</h2>

<p>En betald volymixer är värd det om du behöver:</p>
<ul>
  <li><strong>Tillförlitlighet</strong> – fungerar efter macOS-uppdateringar utan att vänta på frivilligfixar</li>
  <li><strong>Volymboost till 200 %</strong> – förstärk tysta appar bortom deras inbyggda maximum</li>
  <li><strong>Profiler</strong> – spara konfigurationer och byt mellan Möte/Fokus/Gaming med ett klick</li>
  <li><strong>Auto-ducking</strong> – automatisk volymminskning under samtal, inte bara auto-paus</li>
  <li><strong>Inga systemdrivrutiner</strong> – fungerar med Apples inbyggda API, inga virtuella ljudenheter som kan brytas</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> kostar 14,99 € – engångsköp, inte en prenumeration. För sammanhang: det är mindre än två månader av en Spotify-prenumeration, för ett verktyg du använder varje dag. Det är mindre än hälften av priset för SoundSource (39 $) och inkluderar funktioner (profiler, auto-ducking) som SoundSource inte har.</p>

<img src="/apps/sounddial.png" alt="SoundDial – tillförlitlig per-app-volymixer för Mac med profiler, auto-ducking och 200 % boost" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, sandlådebaserad, inga systemdrivrutiner. 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Hur du balanserar musik och röstchatt-volym på Mac",
    description:
      "Musiken är för hög över Discord. Eller samtalet är för tyst under Spotify. macOS låter dig inte balansera dem – så här ställer du in det perfekta förhållandet.",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>Du vill lyssna på musik medan du pratar med vänner på Discord (eller Zoom, eller FaceTime). Musiken måste vara närvarande men inte överväldigande. Röstchatten måste vara tydlig och dominerande. Enkel begäran. macOS gör det omöjligt.</p>

<p>Med ett systemvolymreglage som styr allt är du fast: höjer du den för samtalet är musiken för hög. Sänker du den för musiken kan du inte höra dina vänner. Det finns inget inbyggt sätt att ställa in dessa två saker på olika nivåer.</p>

<h2>In-app volym-lösningen</h2>

<p>Både Spotify och Discord har interna volymreglage. I teorin kan du sänka Spotifys reglage till 30 % och hålla Discords utdata på 100 %. Detta skapar ett 30/100-förhållande.</p>

<p>I praktiken:</p>
<ul>
  <li>Du måste byta till varje app för att justera dess reglage</li>
  <li>Förhållandet ändras när du justerar systemvolymen (båda skalar proportionellt)</li>
  <li>Inte alla appar har ett internt volymreglage</li>
  <li>Det är oprecist – litet Spotify-reglage, ingen procentsats visas</li>
  <li>Om du stänger och öppnar Spotify igen kan reglaget återställas</li>
</ul>

<h2>Den verkliga lösningen: oberoende per-app-volym</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> placerar både Spotify och Discord i samma panel med oberoende volymreglage. Ställ in det förhållande du vill ha och låt det vara:</p>

<img src="/apps/sounddial.png" alt="SoundDial balanserar Spotify och Discord på olika volymnivåer på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Det gyllene förhållandet för musik + röstchatt</h3>
<p>Baserat på hur de flesta använder detta:</p>
<ul>
  <li><strong>Röstchatt på 85–100 %</strong> – alltid tydligt hörbar, dominant i mixen</li>
  <li><strong>Musik på 20–35 %</strong> – närvarande men konkurrerar aldrig med röster</li>
</ul>

<p>Det exakta förhållandet beror på musiken, dina hörlurar och personlig preferens. Poängen är att du kan hitta den perfekta balansen en gång och behålla den – istället för att konstant justera.</p>

<h3>Spara det som en profil</h3>
<p>Spara din musik/röstchatt-balans som en profil. "Gaming"-profil: Discord 100 %, spel 50 %, Spotify 20 %. "Chill"-profil: Discord 70 %, Spotify 60 %. Byt mellan dem med ett klick.</p>

<h3>Auto-ducking för samtal</h3>
<p>Om du lyssnar på musik och ett samtal kommer in sänker SoundDials auto-ducking automatiskt musiken till din konfigurerade nivå. När samtalet är slut kommer musiken tillbaka. Du rör ingenting.</p>

<p>Ljudbalansproblemet är något varje Mac-användare möter i det ögonblick de har musik och ett samtal igång samtidigt. Det är en 14,99 € engångslösning.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac-volymkontroll: Den kompletta guiden (2026)",
    description:
      "Allt du behöver veta om att styra ljud på macOS – från grundläggande tangentbordsgenvägar till per-app-volym, byte av utdataenhet och automatisering.",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS ger dig ett volymreglage och en tystaknapp. Det är omfattningen av Apples inbyggda ljudkontroll. Men din Mac har faktiskt mycket fler ljudfunktioner än ytan antyder – dolda tangentbordsgenvägar, per-app-volymverktyg, hantering av utdataenheter och automatiseringsfunktioner som de flesta användare aldrig upptäcker.</p>

<p>Det här är den kompletta guiden för att styra ljud på din Mac. Från grunderna till avancerade användarfunktioner, allt på ett ställe.</p>

<h2>Del 1: Inbyggda volymkontroller</h2>

<h3>Volymtangenterna</h3>
<p>Volym upp (F12), volym ned (F11) och tysta (F10) tangenterna justerar systemvolymen i 16 steg. Varje steg är ungefär 6,25 % av det totala omfånget. Den aktuella volymen visas som en overlay på skärmen.</p>

<h3>Finkornig volym: Option + Skift</h3>
<p>Håll ned <strong>Option + Skift</strong> och tryck volym upp/ned. Varje tryckning justerar med en fjärdedel av ett normalt steg – vilket ger dig <strong>64 volymnivåer</strong> istället för 16. Nödvändigt för att hitta den perfekta hörlursvolymen när de normala stegen är för grova.</p>

<h3>Tyst volymjustering: Skift</h3>
<p>Håll ned <strong>Skift</strong> och tryck volym upp/ned. Volymen ändras utan den hörbara feedback-"pop". Använd detta när du justerar volymen under ett samtal eller en presentation.</p>

<h3>Volymreglage i menyfältet</h3>
<p>Om Ljud-ikonen finns i ditt menyfält (aktivera det i Systeminställningar → Kontrollcenter → Ljud → Visa alltid i menyfält), visar ett klick på det ett volymreglage. Det är ett kontinuerligt reglage, inte stegvis som tangentbordstangenterna, så du kan ange valfri precis nivå.</p>

<h3>Kontrollcenter</h3>
<p>Klicka på Kontrollcenter-ikonen (tvåknappikonen) i menyfältet → klicka på Ljud-sektionen för ett volymreglage och snabbåtkomst till val av utdataenhet.</p>

<h2>Del 2: Hantering av utdataenheter</h2>

<h3>Byta utdataenheter</h3>
<p>Den snabbaste inbyggda metoden: håll ned <strong>Option</strong> och klicka på Ljud-ikonen i menyfältet. Du ser en lista över alla tillgängliga utdata- och indataenheter. Klicka på en för att byta direkt.</p>

<p>Alternativt: Systeminställningar → Ljud → Utdata. Välj din föredragna enhet från listan.</p>

<h3>Hantering av Bluetooth-enheter</h3>
<p>macOS minns volymnivån för varje utdataenhet separat. När du byter från högtalare (på 70 %) till AirPods (på 40 %) justeras volymen till vad den senast var när du använde den enheten. Det kan kännas som att volymen "ändrar sig av sig självt" om du inte förväntar dig det.</p>

<h3>Aggregerade och multi-utdataenheter</h3>
<p>För avancerade konfigurationer, öppna Audio MIDI Setup (Program → Verktyg) för att skapa aggregerade enheter (kombinera flera ingångar) eller multi-utdataenheter (skicka ljud till flera utgångar samtidigt). Dessa är primärt användbara för professionella ljudkonfigurationer, inte vardagsbruk.</p>

<h2>Del 3: Aviserings- och notisvolym</h2>

<h3>Systemnotisvolym</h3>
<p>macOS har ett separat notisvolymreglage: Systeminställningar → Ljud → Notisvolym. Det styr volymen på systemljud (Funk, Tink, Bottle, etc.) oberoende från huvudvolymen. Det påverkar dock bara macOS-systemnotiser – inte notisljud från tredjepartsappar som Slack, Discord eller Teams.</p>

<h3>Hantering av notisljud</h3>
<p>Gå till Systeminställningar → Notiser. För varje app kan du växla "Spela upp ljud för notiser" på eller av. Det är binärt – du kan inte göra en apps notiser tystare, bara helt på eller av.</p>

<h3>Fokuslägen</h3>
<p>Fokuslägen (Systeminställningar → Fokus) undertrycker notiser från valda appar. De kan tysta notisljud, men de påverkar inte medievolym. Din musik fortsätter att spelas med full volym även i Stör ej.</p>

<h2>Del 4: Hörlursspecifika kontroller</h2>

<h3>Hörlurssäkerhet</h3>
<p>Systeminställningar → Ljud → Hörlurssäkerhet. "Minska högt ljud" begränsar hörlursvolymen baserat på kumulativ exponering. Du kan avaktivera det eller justera tröskeln. Påverkar bara hörlursutdata, inte högtalare.</p>

<h3>Spatial Audio</h3>
<p>För stödda hörlurar (AirPods Pro, AirPods Max, vissa Beats) stöder macOS Spatial Audio med huvudspårning. Aktivera det i Kontrollcenter → Ljud → Spatial Audio. Det påverkar den upplevda placeringen av ljud men inte volymen.</p>

<h3>Ljudbalans</h3>
<p>Systeminställningar → Tillgänglighet → Ljud → Balans. Ett vänster-höger-reglage som justerar stereobilden. Se till att det är centrerat om ena sidan låter tystare än den andra.</p>

<h2>Del 5: Vad macOS inte kan göra (och hur man fixar det)</h2>

<h3>Per-app-volymkontroll</h3>
<p>macOS har ett volymreglage för alla appar. Det finns inget inbyggt sätt att ställa in Spotify på 30 % och Zoom på 100 %. Det är den enskilt mest efterfrågade ljudfunktionen i macOS, och Apple har aldrig lagt till den.</p>

<h3>Volymboost bortom 100 %</h3>
<p>macOS:s volym maxar på 100 %. Om innehåll är för tyst även vid maxvolym finns det inget inbyggt sätt att förstärka ytterligare.</p>

<h3>Volymprofiler</h3>
<p>Det finns inget sätt att spara en volymkonfiguration (Spotify på 30 %, Zoom på 100 %, Slack tystat) och byta mellan förinställningar.</p>

<h3>Auto-ducking</h3>
<p>macOS sänker inte automatiskt bakgrundsljud när du ansluter till ett samtal.</p>

<h3>Volymminne per app</h3>
<p>macOS minns inte per-app-volymnivåer eftersom per-app-volym inte finns.</p>

<p>Alla fem är tillgängliga med <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> – en inbyggd macOS menyfältsapp som lägger till volymixern Apple aldrig byggde.</p>

<img src="/apps/sounddial.png" alt="SoundDial – per-app-volymkontroll, profiler, auto-ducking och 200 % boost för macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Del 6: Per-app-volym med SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> fyller varje lucka listad ovan:</p>

<ul>
  <li><strong>Per-app-volym:</strong> Varje app får sitt eget reglage, 0 % till 200 %</li>
  <li><strong>Per-app-tystnad:</strong> Ett klick för att tysta en app</li>
  <li><strong>Volymboost:</strong> Förstärk tysta appar bortom 100 %</li>
  <li><strong>Volymprofiler:</strong> Spara konfigurationer och byt med ett klick</li>
  <li><strong>Auto-ducking:</strong> Bakgrundsljud sänks under samtal, återställs efter</li>
  <li><strong>Volymminne:</strong> Varje apps volym minns mellan omstarter</li>
  <li><strong>Byte av utdataenhet:</strong> Byt högtalare/hörlurar från samma panel</li>
  <li><strong>Tangentbordsgenvägar:</strong> ⌃⌥S för att växla mixern, ⌃⌥M för att tysta allt</li>
</ul>

<p>Den använder Apples moderna Core Audio Tap API – inga systemdrivrutiner, inga virtuella ljudenheter, inga kärnutökningar. Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> för 14,99 € (engångsköp, ingen prenumeration), Apple-granskad och sandlådebaserad. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "VLC för tyst på Mac? Hur du boostar det förbi 200 %",
    description:
      "VLC på maxvolym men en video är fortfarande för tyst? VLC har en inbyggd 200 %-boost – plus att du kan gå ännu längre med en per-app-volymixer.",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>Du tittar på en video i VLC. Dialogen är tyst. Du skruvar upp VLC:s volym helt. Du skruvar upp Mac:ens volym helt. Kan fortfarande inte höra ordentligt. Videon var bara inspelad för tyst.</p>

<p>Det goda nyheten: VLC har faktiskt en inbyggd lösning som de flesta inte känner till. Ännu bättre: du kan stapla den med en systemnivoboost för ännu mer volym.</p>

<h2>VLC:s inbyggda volymboost (upp till 200 %)</h2>

<p>VLC kan gå över 100 % volym på egen hand. Volymreglaget i VLC:s uppspelningsfält maxar på 100 %, men du kan öka det ytterligare:</p>

<h3>Metod 1: Scrollhjulet</h3>
<p>Håll musen över VLC:s volymreglage och scrolla uppåt. Reglaget går förbi den synliga 100 %-markeringen, upp till 200 %. Du ser procentsatsen visas när du scrollar.</p>

<h3>Metod 2: Tangentbordsgenväg</h3>
<p>Tryck <strong>Kommando + Uppåtpil</strong> (⌘↑) upprepade gånger för att öka volymen över 100 %. Varje tryckning lägger till ett steg. <strong>Kommando + Nedåtpil</strong> (⌘↓) för att minska.</p>

<h3>Metod 3: Ljudmenyn</h3>
<p>Gå till VLC → Ljud → Öka volym. Upprepa tills volymen är tillräckligt hög. Den aktuella nivån visas längst ned till höger i spelaren.</p>

<p>VLC:s 200 %-boost fungerar genom att förstärka ljudsignalen i VLC:s avkodare. Vid extrema nivåer kan det introducera distorsion, men för genuint tysta videofiler är det mycket effektivt.</p>

<h2>Bortom VLC:s boost: förstärkning på systemnivå</h2>

<p>Om VLC på 200 % fortfarande inte är tillräckligt högt – eller om du vill boosta VLC utan att påverka dess interna ljudinställningar – lägger en per-app-volymixer på systemnivå till ett annat lager av förstärkning.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger VLC sitt eget volymreglage från 0 % till 200 % på systemnivå. Det staplas med VLC:s interna boost:</p>

<ul>
  <li>VLC internt: 200 % × SoundDial: 200 % = effektiv 400 % förstärkning</li>
  <li>VLC internt: 150 % × SoundDial: 150 % = effektiv 225 % förstärkning</li>
</ul>

<p>Det här är extrem förstärkning och introducerar distorsion på visst innehåll, men för extremt tyst källmaterial kan det vara vad du behöver.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar VLC-volymen på systemnivå på macOS för tysta videofiler" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Viktigare är att SoundDial låter dig boosta VLC <strong>oberoende</strong>. Din musikspelare, webbläsare och kommunikationsappar stannar på sina normala nivåer medan bara VLC blir högre. Om du boostar VLC till 180 % i SoundDial ändras inte Spotify. Det är något VLC:s inbyggda boost inte kan göra – VLC:s boost påverkar bara VLC, men macOS:s enda systemvolym knyter fortfarande ihop allt annat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Hur du avaktiverar audio ducking på Mac (eller styr det själv)",
    description:
      "macOS eller dina appar sänker din musik under samtal utan att fråga. Så här stoppar du oönskad audio ducking – eller ersätter den med ducking du faktiskt styr.",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>Du ansluter till ett Zoom-samtal. Din musik sjunker till nästan ingenting. Du rörde inga volymkontroller – något gjorde det åt dig. Det är <strong>audio ducking</strong>: den automatiska sänkningen av bakgrundsljud när ett samtal eller en viktig ljudkälla är aktiv.</p>

<p>Vissa älskar det. Andra hatar det – särskilt när ducking-effekten är för aggressiv (musiken sjunker till noll istället för en bekväm bakgrundsnivå) eller när den utlöses oväntat.</p>

<p>Här är hur du avaktiverar oönskad ducking på Mac och hur du ersätter den med ducking som fungerar som du vill.</p>

<h2>Var audio ducking kommer från på Mac</h2>

<p>macOS självt har <strong>inte</strong> en inbyggd audio ducking-funktion. Om din musik tystnar under samtal orsakar en av dessa det:</p>

<h3>1. Zooms ljudbehandling</h3>
<p>Zoom kan minska systemljudet när det aktiveras. Kontrollera Zoom → Inställningar → Ljud och avaktivera "Justera automatiskt mikrofonvolym". Prova också att minska brusundertryckning från "Hög" till "Låg".</p>

<h3>2. Bluetooth-kodekbyte</h3>
<p>När en app aktiverar din Bluetooth-hörlurar-mikrofon växlar macOS från AAC till SCO-kodeken. Det är inte riktigt "ducking" – det är ett kodekbyte som gör allt tystare och lägre kvalitet. Fixa det genom att använda en separat mikrofon.</p>

<h3>3. En tredjepartsapp som gör det</h3>
<p>Vissa ljudappar (som Background Music) har auto-paus eller auto-duck-funktioner. Vissa medieappar minskar sin egen volym när de identifierar en annan ljudkälla. Kontrollera alla ljudhjälpmedelsappar du har installerade.</p>

<h3>4. Kommunikationsappar som justerar ljud</h3>
<p>Discord, Teams och andra kommunikationsappar har sin egen ljudbehandling som kan påverka upplevd volym hos andra appar. Kontrollera varje apps ljudinställningar för "justera automatiskt"-alternativ och avaktivera dem.</p>

<h2>Hur du stoppar oönskad ducking</h2>

<ol>
  <li><strong>Kontrollera Zoom/Teams/Discord-ljudinställningar</strong> – avaktivera automatisk volym-/mikrofon-justering</li>
  <li><strong>Använd en separat mikrofon för samtal</strong> – förhindrar Bluetooth-kodekbyte</li>
  <li><strong>Ta bort ljudhjälpmedel</strong> – Background Music, Soundflower eller appar som kan avlyssna ljud</li>
  <li><strong>Kontrollera macOS Tillgänglighet</strong> – Systeminställningar → Tillgänglighet → Ljud för oväntade inställningar</li>
</ol>

<h2>Ersätt dålig ducking med bra ducking</h2>

<p>Idén bakom audio ducking är faktiskt utmärkt – sänk automatiskt bakgrundsljud under samtal så att du kan höra tydligt. Problemet är när det är för aggressivt (musik sjunker till noll), inte konfigurerbart (du kan inte välja hur mycket att sänka) eller utlöst av fel sak.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> har en inbyggd auto-ducking-funktion som ger dig kontroll:</p>

<ul>
  <li><strong>Konfigurerbar ducking-nivå:</strong> Välj exakt hur mycket att sänka bakgrundsljud under samtal – från 10 % (nästan tyst) till 80 % (knappt reducerat). Standard är 30 %, vilket håller musik hörbar men inte distraherande.</li>
  <li><strong>Smart identifiering:</strong> Identifierar samtal genom att övervaka mikrofonanvändning – samma indikator som macOS:s orangeprick. Fungerar med Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Perfekt återställning:</strong> När samtalet slutar återgår varje app till exakt sin tidigare volym. Ingen omjustering.</li>
  <li><strong>Enkel växling:</strong> Slå på eller av auto-ducking i SoundDials inställningar. När du inte vill ha det, avaktivera det. När du vill ha det tillbaka, aktivera det.</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial konfigurerbar auto-ducking – styr exakt hur mycket bakgrundsljud sänks under samtal" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Skillnaden: istället för att en app bestämmer att din musik ska sjunka till noll under varje samtal, bestämmer du att den ska sjunka till 25 %. Istället för att förlora kontrollen får du den. Och istället för att försöka avaktivera en dold funktion i tre olika appar har du en knapp på ett ställe.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Bluetooth-hörlurar för tysta på Mac? Alla fixar som fungerar",
    description:
      "Dina Bluetooth-hörlurar fungerar fint på din telefon men låter tysta på Mac. Här är varje orsak – från kodekproblem till macOS volymbegränsningar – och hur du fixar var och en.",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>Dina Bluetooth-hörlurar är gott om höga på din telefon. Du ansluter dem till din Mac – och allt är tystare. Musik låter dovt. Samtal är svåra att höra. Du har maximerat volymen men det räcker fortfarande inte. Vad händer?</p>

<p>Bluetooth-ljud på Mac har flera volymreducerande faktorer som inte finns på telefoner. Här är var och en och hur du fixar dem.</p>

<h2>1. Hörlurssäkerhet begränsar din volym</h2>

<p>macOS har en inbyggd funktion som begränsar hörlursvolymen för att skydda din hörsel. Den mäter ljudexponering över tid och minskar den maximala volymen om den tror att du lyssnat för högt.</p>

<p>Gå till <strong>Systeminställningar → Ljud → Hörlurssäkerhet</strong>. Om "Minska högt ljud" är aktiverat, avaktivera det eller höj tröskeln. Det är den främsta orsaken till att Bluetooth-hörlurar är tystare på Mac än på en telefon.</p>

<h2>2. Bluetooth-kodekmismatch</h2>

<p>Din telefon kan ansluta till dina hörlurar med en högre kvalitets-kodek (aptX, LDAC, AAC) medan din Mac använder SBC (den grundläggande Bluetooth-kodeken). Olika kodekter har olika maximala volymegenskaper.</p>

<p>macOS använder generellt AAC för Apple-enheter och SBC för tredjepartshörlurar. Om dina hörlurar stöder aptX eller LDAC använder macOS dem inte – Apple stöder bara AAC och SBC.</p>

<p><strong>Fix:</strong> Det finns inte mycket du kan göra åt kodekval på macOS. Men att känna till detta förklarar varför samma hörlurar kan låta annorlunda (och potentiellt tystare) på din Mac jämfört med en Android-telefon som använder LDAC.</p>

<h2>3. Mikrofonaktivering utlöser SCO</h2>

<p>När en app aktiverar dina Bluetooth-hörlurars mikrofon (Zoom, FaceTime, Siri, diktering) växlar macOS från AAC till SCO-kodeken. SCO designades för telefonsamtal 2004 – det låter fruktansvärt och är märkbart tystare.</p>

<p><strong>Fix:</strong> Använd en separat mikrofon (inbyggd Mac-mikrofon eller USB-mikrofon) och håll dina Bluetooth-hörlurar som utdata bara. I din samtalapps inställningar, ange indata till din Macs mikrofon och utdata till dina hörlurar. Det förhindrar SCO-bytet.</p>

<h2>4. Bluetooth-volymsynkroniseringsproblem</h2>

<p>Bluetooth-ljud har två volymkontroller: en på Mac-sidan och en på hörlurssidan. De ska stanna synkroniserade, men de kan glida isär – Mac visar 100 % men hörlurarna är faktiskt inte på full volym.</p>

<p><strong>Fix:</strong> Koppla ifrån hörlurarna (Systeminställningar → Bluetooth → klicka "i" → Koppla ifrån), vänta 5 sekunder, återanslut. Det omsynkroniserar volymen. Vissa hörlurar har också egna volymknappar – se till att de är på maximum.</p>

<h2>5. Lågkvalitativ Bluetooth-anslutning</h2>

<p>Avstånd, störningar (WiFi-routrar, USB 3.0-enheter) och hinder mellan din Mac och hörlurar kan minska Bluetooth-signalkvaliteten. När signalen är svag kan macOS minska ljud-bitrate, vilket kan påverka upplevd volym och kvalitet.</p>

<p><strong>Fix:</strong> Flytta dig närmare din Mac. Koppla ifrån andra Bluetooth-enheter du inte använder. Flytta USB 3.0-hubbar bort från din Mac (USB 3.0 genererar störningar i 2,4 GHz-bandet som Bluetooth använder).</p>

<h2>6. Hörlurarna själva</h2>

<p>Vissa Bluetooth-hörlurar har lägre maxvolym än andra. Over-ear-hörlurar med större drivrutiner blir generellt högre än öronsnäckor. Brusreducerande hörlurar kan ha volymgränser inbyggda i deras firmware.</p>

<p>Kontrollera hörlurtillverkarens app (Sony Headphones Connect, Bose Music, Sennheiser Smart Control, etc.) för volymbegränsningsinställningar. Vissa hörlurar har ett "säkert lyssnings"-läge som begränsar volymen.</p>

<h2>Fortfarande tyst? Boosta bortom 100 %</h2>

<p>Om du har kontrollerat allt ovan och dina hörlurar fortfarande är för tysta på Mac behöver du volymförstärkning.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boostar vilken apps volym som helst upp till <strong>200 %</strong>. Om Spotify genom dina Bluetooth-hörlurar är för tyst, dra dess reglage till 160 %. Ljudsignalen förstärks innan den når dina hörlurar, vilket effektivt fördubblar den tillgängliga volymen för den appen.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar app-volym för Bluetooth-hörlurar på Mac med per-app-reglage till 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Per-app-boostning är bättre än en systemövergripande volymboost eftersom du bara kan förstärka den tysta appen. Om din podcast är tyst men musiken är bra, boosta podcast-appen till 170 % medan du håller Spotify på 80 %. Varje app stannar på rätt nivå.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac-ljud för OBS och streaming: Styr vad din publik hör",
    description:
      "Streamar du på Mac med OBS? Dina tittare hör allt på samma volym – spel, musik, notiser, Discord. Så här balanserar du ljudkällor ordentligt.",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>Du streamar på din Mac med OBS. Ditt spelljud dundrar. Din Discord-samtal pågår. Spotify spelar bakgrundsmusik. Notisljud avfyras när någon prenumererar. Dina tittare hör allt detta på samma volym – ett kaotiskt röra där Discord-kommandon konkurrerar med explosioner och musiken dränker din kommentar.</p>

<p>Kärnproblemet: macOS ger dig en ljudutdata och OBS fångar den som en kombinerad ström. Du kan inte säga till OBS "fånga spelet på 40 %, Discord på 80 % och Spotify på 20 %" eftersom macOS inte separerar dem.</p>

<h2>Mac-streamningens ljudproblem</h2>

<p>På Windows kan OBS fånga individuellt program-ljud inbyggt. Du lägger till varje app som en separat ljudkälla och mixar dem oberoende i OBS. På Mac är detta inte inbyggt. OBS på macOS kan fånga:</p>

<ul>
  <li><strong>Skrivbordsljud</strong> – allt som spelas på din Mac, kombinerat till en ström</li>
  <li><strong>Mikrofon/Aux</strong> – din mikrofon-ingång</li>
  <li><strong>Appljudupptagning (macOS 13+)</strong> – fånga en specifik apps ljud, men konfigurationen är manuell och begränsad</li>
</ul>

<p>Appljudupptagningskällan (tillagd i OBS 30+) fungerar för att isolera en app, men att hantera fem ljudkällor med separata nivåer i OBS är komplext och inte alla appar samarbetar.</p>

<h2>Det enklare tillvägagångssättet: styr nivåer innan OBS fångar dem</h2>

<p>Istället för att försöka separera ljud inuti OBS, styr varje apps volym <em>innan</em> det når OBS:s skrivbordsljudupptagning. Om du sänker Spotify till 20 % och boostar Discord till 90 % på systemnivå fångar OBS:s skrivbordsljudupptagning den redan balanserade mixen.</p>

<p>Det är precis vad <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gör. Ange varje app på den nivå du vill att dina tittare ska höra:</p>

<img src="/apps/sounddial.png" alt="SoundDial balanserar spel-, Discord- och musikljudnivåer för OBS-streaming på Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Typisk streaming-ljudkonfiguration</h3>
<ul>
  <li><strong>Spel:</strong> 50 % – närvarande men inte överväldigande din röst</li>
  <li><strong>Discord / röstchatt:</strong> 80 % – tydliga kommando från ditt lag</li>
  <li><strong>Spotify / musik:</strong> 15 % – subtil bakgrundsvibb</li>
  <li><strong>Stream-notiser (webbläsare):</strong> 40 % – hörbart men inte störande</li>
  <li><strong>Slack / notiser:</strong> tystat – tittare behöver inte höra dina DM:s</li>
</ul>

<h3>Spara det som en "Streaming"-profil</h3>
<p>Spara denna konfiguration som en volymprofil i SoundDial. Innan du går live, tillämpa "Streaming"-profilen med ett klick. Varje app hoppar till sin streaming-optimerade nivå. När du är klar med streaming, byt tillbaka till din "Normal"- eller "Gaming"-profil.</p>

<h2>Vad du hör kontra vad tittare hör</h2>

<p>Med SoundDial som justerar per-app-volym på systemnivå hör du och dina tittare samma balanserade mix. Det är enklare än att försöka hålla separata mixar (en för dig, en för streamen) – vilket kräver virtuella ljudenheter och komplex routing som är bräcklig på Mac.</p>

<p>Om du behöver en helt separat mix för din stream kontra dina hörlurar (t.ex. du vill höra Discord högre än dina tittare gör) behöver du en mer komplex routing-konfiguration med virtuella ljudenheter. Men för de flesta streamare är en enda välbalanserad mix – enkelt styrd från menyfältet – exakt vad som behövs.</p>

<h2>Varför per-app-kontroll slår OBS-mixning</h2>

<ul>
  <li><strong>Omedelbara justeringar:</strong> Mitt i streamen säger en tittare att spelet är för högt. Klicka på menyfältet, dra ett reglage. Klart. Inget pausande, inget öppnande av OBS-inställningar.</li>
  <li><strong>Fungerar utanför OBS:</strong> Din balanserade ljudkonfiguration fungerar även när du inte streamar. Samma profiler, samma bekvämlighet.</li>
  <li><strong>Inga virtuella ljudenheter:</strong> SoundDial använder Apples inbyggda Audio Tap API – ingen Soundflower, ingen BlackHole, inga drivrutiner som bryts på macOS-uppdateringar.</li>
</ul>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Hur du får din Mac att minnas volym per app",
    description:
      "Varje gång du startar om Spotify eller startar om Zoom måste du justera volymen på nytt. Så här får macOS att automatiskt minnas varje apps volymnivå.",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>Du spenderar fem minuter på att få dina ljudnivåer perfekta. Spotify på 30 %, Zoom på 100 %, Slack på 15 %. Sedan startar du om din Mac. Eller Slack kraschar och startar om. Eller du stänger Spotify och öppnar det senare. Varje app återställs till sin standardvolym. Du justerar om allt. Igen.</p>

<p>macOS minns systemvolymen över omstarter. Men det minns inte per-app-volym – eftersom macOS inte har per-app-volymkontroll överhuvudtaget. Det finns ingenting att minnas.</p>

<h2>Varför appar inte minns sin egen volym</h2>

<p>Vissa appar (som Spotify och VLC) har interna volymreglage som sparas mellan sessioner. Men de flesta appar – webbläsare, kommunikationsverktyg, systemverktyg – har inga egna volymkontroller. Och även appar som sparar intern volym minns bara sin egen reglagestition, inte sin volym i förhållande till andra appar.</p>

<p>Vad du verkligen vill är att <em>systemet</em> minns: "Spotify ska vara på 30 % av systemvolymen, alltid." macOS stöder inte detta koncept.</p>

<h2>Volymminne med SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> har en <strong>Volymminne</strong>-funktion. När den är aktiverad sparar den varje apps volymnivå efter dess bundelidentifierare. När appen avslutas och startar om – oavsett om du startar om den, den kraschar eller du startar om din Mac – återställer SoundDial automatiskt den till dess sparade volym.</p>

<img src="/apps/sounddial.png" alt="SoundDial volymminne – minns och återställer automatiskt per-app-volymnivåer på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hur det fungerar</h3>
<ol>
  <li>Aktivera "Kom ihåg volym per app" i SoundDials inställningar</li>
  <li>Ange varje app på din önskade volym</li>
  <li>SoundDial sparar nivån automatiskt</li>
  <li>När appen startar om återställs volymen till exakt där den var</li>
</ol>

<p>Inget manuellt sparande. Ingen omjustering. Den första gången du ställer in dina volymer är den sista gången.</p>

<h3>Vad som minns</h3>
<ul>
  <li><strong>Volymnivå</strong> – den exakta procentsatsen (0 % till 200 %)</li>
  <li><strong>Tyst-tillstånd</strong> – om du tystade en app stannar den tystnad när den startar om</li>
  <li><strong>Per app</strong> – varje apps volym lagras oberoende av bundelID</li>
</ul>

<h3>Nya appar får en standardvolym</h3>
<p>När en app startar för första gången (en SoundDial inte sett tidigare) får den en konfigurerbar standardvolym. Du kan ange detta standard i SoundDials inställningar – så nya appar börjar på 80 % (eller vad du föredrar) istället för att potentiellt dunka på 100 %.</p>

<h2>Volymminne + profiler = ange det och glöm det</h2>

<p>Volymminne hanterar det dagliga: appar behåller sina nivåer över omstarter. Profiler hanterar situationsanpassad växling: "Möte"-läge, "Fokus"-läge, "Gaming"-läge – tillämpa med ett klick och varje app hoppar till rätt nivå för den situationen.</p>

<p>Tillsammans justerar du nästan aldrig ett volymreglage manuellt. Appen minns sin senaste nivå och när du byter sammanhang anger en profil allt på en gång.</p>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Podcast för tyst på Mac? Hur du gör det högre",
    description:
      "Vissa podcasts är viskningstysta på Mac även vid maxvolym. Här är varför – och hur du boostar podcastljud förbi 100 % utan att påverka andra appar.",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>Du lyssnar på en podcast på din Mac. Värden låter bra, men gästen – inspelad med en laptop-mikrofon i deras kök – är knappt hörbar. Du skruvar upp volymen till 100 %. Värden är nu för hög, men gästen är fortfarande tyst. Det finns inget sätt att vinna eftersom problemet finns i inspelningen, inte din Mac.</p>

<p>Podcastljudkvaliteten varierar enormt. Professionella program mastras på konsekventa nivåer. Men intervjuer, indie-podcasts och liveinspelningar har ofta gäster på -20 dB eller lägre – märkbart tystare än värden eller intro-musiken.</p>

<h2>Varför vissa podcasts är så tysta</h2>

<ul>
  <li><strong>Gästens mikrofon-kvalitet:</strong> En värd har en professionell konfiguration, gästen är på AirPods. Nivåskillnaden kan vara 15+ dB.</li>
  <li><strong>Ingen efterbehandling:</strong> Professionellt producerade podcasts komprimerar och normaliserar nivåer. Många gör inte det.</li>
  <li><strong>Podcast-appar normaliserar inte:</strong> Apple Podcasts och Spotify tillämpar minimal eller ingen hörnivånormalisering på podcastinnehåll (till skillnad från musik).</li>
  <li><strong>Dynamiskt omfång:</strong> Vissa podcastproducenter behåller avsiktligt högt dynamiskt omfång för "naturligt" ljud – vilket innebär att tysta delar är mycket tysta.</li>
</ul>

<h2>In-app-fixar</h2>

<h3>Apple Podcasts</h3>
<p>Apple Podcasts har ingen volymsnormaliseringsfunktion eller boost. Vad podcasten levererar är vad du får. In-app-volymkontrollen i äldre versioner togs bort – den använder nu bara systemvolymen.</p>

<h3>Spotify</h3>
<p>Spotifys "Normalisera volym"-inställning (Inställningar → Uppspelning) kan hjälpa med volymkonsistens mellan olika podcasts, men dess effekt på dynamik inom episoder är begränsad. Prova att ställa in det på "Högt" för maximal normalisering.</p>

<h3>Overcast (webbläsare)</h3>
<p>Om du använder Overcast (via webben på overcast.fm) har det en "Voice Boost"-funktion som markant förstärker och komprimerar podcastljud och gör tysta röster högre. Det är en av de bästa inbyggda lösningarna – men det fungerar bara i Overcast.</p>

<h2>Fix på systemnivå: boosta podcast-appar förbi 100 %</h2>

<p>Den universella lösningen är att förstärka din podcast-app bortom macOS:s 100 %-gräns. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger varje app ett volymreglage upp till <strong>200 %</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar Apple Podcasts-volymen till 180 % på Mac för tysta podcastavsnitt" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ange Apple Podcasts eller din podcast-app till 160–180 % medan du håller Spotify-musik på 40 % och Slack på 15 %. Podcasten blir högre utan att göra allt annat plågsamt högt. När du byter tillbaka till musik, sänk bara podcast-appen till normal – eller låt SoundDials volymminne komma ihåg det automatiskt.</p>

<p>Det här per-app-tillvägagångssättet är bättre än en systemövergripande volymboost eftersom:</p>
<ul>
  <li>Bara den tysta podcast-appen blir högre</li>
  <li>Musik stannar på din föredragna nivå</li>
  <li>Samtalsljud stannar på din föredragna nivå</li>
  <li>Notisljud blir inte plötsligt öronbedövande</li>
</ul>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Mac-ljudkonfiguration för onlineklasser och föreläsningar",
    description:
      "Tittar på en föreläsning medan du antecknar, googlar referenser och chattar med klasskompisar – allt på olika volymer. Så här hanterar du studentljud på Mac.",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>Du är student och deltar i en onlineföreläsning på Zoom. Du har en YouTube-handledning öppen i en annan flik som referens. Dina klasskompisar chattar på Discord. Spotify spelar lo-fi-beats i bakgrunden. Din Mac behandlar allt detta som en volym. Sänker du lo-fi kan du inte höra din professor. Höjer du föreläsningen spricker Discord-pings din koncentration.</p>

<p>macOS har ett volymreglage för allt. För studenter som jonglerar med flera ljudkällor är detta en konstant friktionspunkt.</p>

<h2>Den typiska studentens ljud-stack</h2>

<ul>
  <li><strong>Föreläsningsplattform</strong> (Zoom, Teams, Google Meet, Webex) – måste vara kristallklart, alltid hörbart</li>
  <li><strong>Referensmaterial</strong> (YouTube-handledningar, inspelade föreläsningar) – måttlig volym, måste kunna pausas/justeras</li>
  <li><strong>Studiemusik</strong> (Spotify, Apple Music) – låg bakgrundsnivå, ska inte konkurrera med föreläsningen</li>
  <li><strong>Chatt</strong> (Discord, iMessage, Slack) – subtila notisljud, inte störande</li>
  <li><strong>Webbläsarflikar</strong> – ibland autospelat innehåll som måste tystas omedelbart</li>
</ul>

<h2>macOS-begränsningen</h2>

<p>Med en systemvolym tvingas du kompromissa. Ställ in den tillräckligt högt för en tyst professors mikrofon och Spotify är för hög. Ställ in den för bekväm musik och föreläsningen är ohörbar. Tysta Spotify och du förlorar fokusfördelarna med bakgrundsmusik. Det finns ingen bekväm balans eftersom varje app är låst till samma nivå.</p>

<h2>Konfigurera per-app-ljud för studier</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger varje app sitt eget volymreglage så att du kan bygga den ideala studie-ljudkonfigurationen:</p>

<img src="/apps/sounddial.png" alt="SoundDial studentkonfiguration – föreläsning på full volym, studiemusik låg, notiser tystade" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Föreläsningsprofil</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100 % – missa aldrig ett ord</li>
  <li><strong>Spotify:</strong> 15 % – knappt märkbar bakgrundsambians</li>
  <li><strong>Discord:</strong> 10 % – bara subtila notiser</li>
  <li><strong>Webbläsaren:</strong> 40 % – för referensvideor vid behov</li>
  <li><strong>iMessage:</strong> tystat – kolla mellan klasser</li>
</ul>

<h3>Självstudier-profil</h3>
<ul>
  <li><strong>Spotify:</strong> 50 % – motiverande studiemusik</li>
  <li><strong>Webbläsaren:</strong> 70 % – handledningsvideor på en tydlig nivå</li>
  <li><strong>Discord:</strong> 20 % – tillgänglig för studiegrupp</li>
  <li><strong>Allt annat:</strong> tystat</li>
</ul>

<h3>Pauslrofil</h3>
<ul>
  <li><strong>Allt:</strong> 60–80 % – koppla av mellan klasser</li>
</ul>

<p>Spara varje som en volymprofil och byt mellan dem med ett klick när din dag fortskrider. När en föreläsning börjar, tillämpa "Föreläsning" – auto-ducking hanterar resten, sänker automatiskt din musik när professorn talar via mikrofonen.</p>

<h2>Varför detta spelar roll för fokus</h2>

<p>Studier visar konsekvent att rätt ljudmiljö förbättrar koncentration och inlärning. Fel mix – musik för hög, notiser för frekventa, föreläsning för tyst – skapar kognitiv belastning som inte har med materialet du studerar att göra. Att få ljud rätt en gång, spara det som en profil och aldrig tänka på det igen tar bort en konstant källa till distraktion.</p>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Mac-ljud fungerar inte efter uppdatering? Komplett fixguide",
    description:
      "Du uppdaterade macOS och nu är ljudet borta, cracklande eller fastnat på fel volym. Här är alla fixar för att få Mac-ljudet att fungera igen.",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>Du uppdaterade macOS. Allt verkade bra – tills du märkte att det inte finns något ljud. Eller att ljudet crackar. Eller att volymen är fast. Eller att din ljudutdataenhet är borta. Ljudproblem efter uppdateringar händer med nästan varje macOS-version, och de sträcker sig från milt irriterande till helt tyst.</p>

<p>Här är en systematisk guide för att fixa Mac-ljud efter en macOS-uppdatering, som täcker alla kända problem och lösningar.</p>

<h2>Steg 1: Kontrollera det uppenbara</h2>

<h3>Är det tystat?</h3>
<p>Tryck på volym-upp-tangenten. Kontrollera om volymindikatorn visas på skärmen. Ibland återställer uppdateringar systemvolymen till noll eller aktiverar tystning.</p>

<h3>Är rätt utdataenhet vald?</h3>
<p>Gå till Systeminställningar → Ljud → Utdata. Efter en uppdatering byter macOS ibland till en oväntad utdataenhet – en ansluten skärms högtalare, en Bluetooth-enhet som inte är ansluten, eller de inbyggda högtalarna när du vill ha externa. Välj rätt enhet.</p>

<h3>Begränsar Hörlurssäkerhet volymen?</h3>
<p>Uppdateringar återställer ibland Hörlurssäkerhet till standard (aktiverat). Kontrollera Systeminställningar → Ljud → Hörlurssäkerhet och avaktivera "Minska högt ljud" om det aktiverades av uppdateringen.</p>

<h2>Steg 2: Starta om Core Audio</h2>

<p>Ljud-daemon (coreaudiod) hamnar ofta i ett dåligt tillstånd efter en uppdatering. Att starta om den är den enskilt mest effektiva lösningen.</p>

<p>Öppna Terminal och kör:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Ljudet avbryts kort och startar om. Testa om ljudet fungerar nu. Om detta fixar det var problemet ett inaktuellt ljud-daemon-tillstånd – vanligt efter uppdateringar.</p>

<h2>Steg 3: Återställ NVRAM/PRAM</h2>

<p>För Intel-Mac: stäng av helt, starta sedan medan du håller <strong>Option + Kommando + P + R</strong> i ungefär 20 sekunder. Det återställer NVRAM, som lagrar volyminställningar och andra lågnivåinställningar.</p>

<p>För Apple Silicon-Mac (M1/M2/M3/M4): NVRAM återställs automatiskt när det behövs. En fullständig omstart räcker vanligtvis.</p>

<h2>Steg 4: Kontrollera konflikter med tredjepartslj uddrivrutiner</h2>

<p>macOS-uppdateringar bryter ofta tredjepartslj uddrivrutiner och kärnutökningar. Om du har något av dessa installerade kan de orsaka problemet:</p>

<ul>
  <li><strong>Soundflower</strong> – avvecklat, konfliktar ofta med nyare macOS</li>
  <li><strong>BlackHole</strong> – virtuell ljudenhet, kan behöva uppdateras efter macOS-uppdateringar</li>
  <li><strong>Loopback</strong> – kan behöva en ny version för det uppdaterade macOS</li>
  <li><strong>Background Music</strong> – installerar en virtuell ljudenhet som ofta bryts vid uppdateringar</li>
  <li><strong>Ljudgränssnittsdrivrutiner</strong> – Focusrite, Universal Audio, etc. kontrollera efter uppdaterade drivrutiner</li>
</ul>

<p><strong>Fix:</strong> Ta bort eller uppdatera den konfliktande programvaran. Kontrollera om ljudenheten installerad av appen visas i Systeminställningar → Ljud → Utdata – om den gör det och är vald, byt till dina riktiga högtalare. Uppdatera eller avinstallera sedan tredjepartsappen.</p>

<h2>Steg 5: Säkert läge-start</h2>

<p>Starta i Säkert läge för att avgöra om problemet orsakas av ett startobjekt eller ett tredjepartstillägg:</p>

<ul>
  <li><strong>Apple Silicon:</strong> Stäng av → håll strömknappen tills "Laddar startalternativ" visas → välj startdisken → håll Skift → klicka "Fortsätt i säkert läge"</li>
  <li><strong>Intel:</strong> Starta om → håll Skift under start tills inloggningsfönstret visas</li>
</ul>

<p>Om ljudet fungerar i Säkert läge är en tredjepartskärnutökning eller ett inloggningsobjekt orsaken. Undersök nyligen installerad programvara.</p>

<h2>Steg 6: Skapa ett nytt användarkonto</h2>

<p>Om problemet kvarstår, skapa ett tillfälligt nytt användarkonto (Systeminställningar → Användare och grupper → Lägg till användare). Logga in på det nya kontot och testa ljud. Om ljud fungerar i det nya kontot är problemet med din användarprofil – en skadad inställningsfil eller ljudkonfiguration.</p>

<h2>Förhindra framtida problem med SoundDial</h2>

<p>En fördel med <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> jämfört med andra ljudverktyg: det installerar inte en systemljuddrivrutin. Det använder Apples inbyggda Core Audio Tap API, vilket innebär att det fungerar rent med macOS-uppdateringar utan de konflikter som drabbar virtuella ljudenhetsappar.</p>

<p>Om du har använt Background Music eller Soundflower och de bröts efter en uppdatering är SoundDial en ersättning som inte kommer ha samma problem. Per-app-volymkontroll, volymboost till 200 %, profiler, auto-ducking – allt utan en kärnutökning eller virtuell ljudenhet.</p>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Hur du tystar alla appar på en gång på Mac (och återställer dem perfekt)",
    description:
      "Behöver du omedelbar tystnad? Tyst-tangenten tystar allt – men att avtysta återställer dina noggrant balanserade volymer. Här är ett bättre sätt att tysta och återställa på Mac.",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>Någon går in i rummet. Din chef ringer oväntat. En klient delar skärmen på ett samtal och din musik börjar spelas genom deras högtalare. Du behöver omedelbar tystnad. Just nu.</p>

<p>Du trycker på tysta-tangenten. Allt tystnar. Krisen avvärjd.</p>

<p>Sedan är ögonblicket över. Du trycker på tysta-tangenten igen. Allt kommer tillbaka – men på systemvolymsnivån, som inte minns att Spotify var på 30 %, Zoom på 100 % och Slack på 15 %. De individuella nivåerna? Borta. Du måste justera om allt manuellt.</p>

<h2>Systemets tysta-tangent: ett trubbigt instrument</h2>

<p>Mac:ens tysta-tangent (F10 eller högtalar-slash-tangenten) tystar <strong>systemets ljud-utdata</strong>. Varje app tystnar samtidigt. Att avtysta återställer systemvolymen till där den var – men eftersom macOS bara har ett volymreglage finns det inga per-app-nivåer att minnas eller återställa.</p>

<p>Det är bra om du bara använder en app i taget. Det är ett problem om du har sex appar noggrant balanserade på olika nivåer och behöver tysta + återställa dem alla.</p>

<h2>En smartare tystning: tysta alla per app</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> har en "Tysta alla"-tangentbordsgenväg: <strong>Ctrl + Option + M (⌃⌥M)</strong>.</p>

<p>När du trycker på den:</p>
<ol>
  <li>Varje app tystas individuellt (varje apps volymtillstånd sparas)</li>
  <li>Omedelbar tystnad – precis som tysta-tangenten</li>
</ol>

<p>När du trycker på den igen:</p>
<ol>
  <li>Varje app avtystat</li>
  <li>Varje app återgår till <strong>exakt</strong> den volym den hade innan tystning</li>
  <li>Spotify går tillbaka till 30 %, Zoom till 100 %, Slack till 15 % – perfekt återställt</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial tysta-alla-genväg — Ctrl+Option+M för att tysta och avtysta alla appar med volymåterställning" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Skillnaden från systemets tysta-tangent:</p>
<ul>
  <li><strong>Systemtystning:</strong> tystar utdata → avtysta återställer en systemvolym → per-app-balans finns inte</li>
  <li><strong>SoundDial tysta alla:</strong> tystar varje app individuellt → avtysta återställer varje apps individuella volym → din balans bevaras</li>
</ul>

<h2>När detta spelar roll</h2>

<ul>
  <li><strong>Skärmdelning:</strong> Du delar din skärm och behöver tysta din Mac innan den andra personen hör din musik. ⌃⌥M → tystnad → gör ditt → ⌃⌥M → musik är tillbaka på exakt rätt nivå.</li>
  <li><strong>Oväntad avbrytning:</strong> Någon går in, du behöver tystnad direkt. En genväg, ingen mus, inget fummel med menyfältet.</li>
  <li><strong>Snabbt telefonsamtal:</strong> Din skrivbordstelefon ringer. Tysta Mac:en, ta samtalet, avtysta när du är klar. Allt kommer tillbaka.</li>
</ul>

<p>Kombinerat med <strong>⌃⌥S</strong>-genvägen (växla SoundDials popover) kan du hantera all din ljud helt från tangentbordet – öppna mixern, justera nivåer, stäng den och tysta/avtysta allt utan att röra musen.</p>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Google Meet för tyst på Mac? Så här fixar du det",
    description:
      "Röster på Google Meet är knappt hörbara även vid maxvolym. Här är varför Meet körs via Chrome, vad det innebär för ljud och hur du boostar det.",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meet har ingen inbyggd Mac-app – den körs i din webbläsare. Det innebär att Meets ljud är en del av Chromes (eller Safaris) ljudström, och eventuella volymproblem är sammanvävda med hur din webbläsare hanterar ljud.</p>

<h2>1. Kontrollera Meets egna ljudinställningar</h2>

<p>Under ett Meet-samtal, klicka på tre-punkters-menyn (⋮) → Inställningar → Ljud. Se till att rätt högtalarenhet är vald. Meet väljer ibland en oväntad enhet, särskilt om du nyligen anslutit eller kopplat ifrån ljudutrustning.</p>

<h2>2. Kontrollera din webbläsares flik-volym</h2>

<p>I Chrome: högerklicka på Meet-fliken → se till att "Tysta webbplats" INTE är valt. En tystad webbplats producerar inget ljud oavsett andra inställningar.</p>

<p>I Safari: klicka på högtalarikonen på fliken för att se till att den inte är tystad.</p>

<h2>3. Kontrollera systemutdata</h2>

<p>Systeminställningar → Ljud → Utdata. Verifiera att rätt enhet är vald och att volymen är på maximum. Kontrollera även Hörlurssäkerhet om du använder hörlurar.</p>

<h2>4. Chrome-ljudproblemet</h2>

<p>Google Meet körs som en Chrome-flik och Chromes ljudutdata kan vara lägre än dedikerade appar. Chrome bearbetar ljud genom sin egen renderer, som har sitt eget volymtak. Om Chromes övergripande ljud är lågt är Meet lågt – även om macOS-volymen är på 100 %.</p>

<p>Det finns inget inbyggt sätt att boosta Chromes ljud förbi dess maximum. macOS behandlar Chrome som en app med en volymnivå, och den nivån maxar på 100 %.</p>

<h2>5. Bluetooth-kodekproblem</h2>

<p>Om du använder AirPods eller Bluetooth-hörlurar tvingar Google Meet som aktiverar din mikrofon Bluetooth-kodekbytet från AAC till SCO. Det minskar ljudkvalitet och volym markant.</p>

<p><strong>Fix:</strong> I Meets ljudinställningar, välj din Macs inbyggda mikrofon som indataenhet medan du behåller Bluetooth-hörlurar som utdata. Det förhindrar kodekbytet och behåller hög ljudkvalitet.</p>

<h2>6. Boosta Google Meet (Chrome) förbi 100 %</h2>

<p>Om Meet fortfarande är för tyst efter att ha kontrollerat allt, behöver du förstärka Chromes ljud bortom vad macOS tillåter.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger Chrome sitt eget volymreglage som går upp till <strong>200 %</strong>. Eftersom Google Meet körs inuti Chrome boostar att boosta Chrome Meet. Dra reglaget till 150 % eller 180 % och samtalsljudet förstärks i realtid.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar Google Meet (Chrome) volym bortom 100 % på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Det fungerar även med Safari om du använder Meet i Safari. SoundDial styr varje webbläsare oberoende – boosta Safari för Meet medan du håller Chrome på normal volym för allt annat.</p>

<p>Och med auto-ducking sänks din bakgrundsmusik automatiskt när ett Meet-samtal startar (när din mikrofon aktiveras) och återställs när samtalet slutar.</p>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Hur du ställer in Mac-notisvolym separat från medier",
    description:
      "macOS har ett dolt notisvolymreglage, men det täcker bara systemljud. Så här separerar du verkligen notis- och mediervolym på Mac.",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>Din musik är på en perfekt nivå. Sedan avfyras ett macOS-notisljud – "Funk"- eller "Tink"-ljud – och det är smärtsamt högt jämfört med din musik. Eller det omvända: dina notiser är ohörbara eftersom systemvolymen är låg för tyst bakgrundsmusik.</p>

<p>Du vill ha två separata volymkontroller: en för media (musik, samtal, video) och en för notiser. macOS stöder detta delvis, men den fullständiga lösningen kräver ett tredjepartsverktyg.</p>

<h2>macOS inbyggda notisvolym</h2>

<p>macOS har faktiskt en separat notisvolym. Gå till <strong>Systeminställningar → Ljud</strong> och leta efter reglaget <strong>"Notisvolym"</strong>. Det styr volymen på macOS-systemljud – felpip, Papperskorg-tömning, skärmbildsslutare – oberoende från huvudsystemvolymen.</p>

<p>Du kan också välja vilket notisljud som ska användas och om du vill "Spela upp ljudeffekter via" din valda utdataenhet eller de inbyggda högtalarna.</p>

<h3>Vad notisvolymen styr</h3>
<ul>
  <li>macOS systemnotisljud (Funk, Tink, Bottle, etc.)</li>
  <li>Finder-ljud (Papperskorg, filkopiering klar)</li>
  <li>Vissa inbyggda appljud</li>
</ul>

<h3>Vad den inte styr</h3>
<ul>
  <li>Slack-notisljud</li>
  <li>Discord-notisljud</li>
  <li>Teams/Zoom-ljud</li>
  <li>Mail-notisljud</li>
  <li>Notisljud från tredjepartsappar</li>
  <li>Webbläsarnotisljud</li>
</ul>

<p>Tredjepartsappar spelar sina notisljud via sin egen ljudmotor – de behandlas som vanligt app-ljud, inte systemnotiser. Notisvolymreglaget har ingen effekt på dem. Det innebär att apparna som gör de mest irriterande notisljuden (Slack, Discord, Teams) är de som macOS:s notisvolym inte kan röra.</p>

<h2>Den verkliga lösningen: per-app-volym för notisappar</h2>

<p>För att verkligen separera notisvolym från mediervolym behöver du per-app-volymkontroll. Ange Slack till 15 %, Discord till 20 % och Mail till 10 % – medan du håller Spotify på 50 % och din webbläsare på 60 %.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger varje app sitt eget volymreglage. Du kan ange notistäta appar till en subtil nivå som märks men inte stör, medan medieappar är på en bekväm lyssningsnivå.</p>

<img src="/apps/sounddial.png" alt="SoundDial separerar notisapp-volym från mediaapp-volym på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Exempelkonfiguration</h3>
<p><strong>Medieappar:</strong></p>
<ul>
  <li>Spotify: 50 %</li>
  <li>Safari/Chrome: 60 %</li>
  <li>QuickTime/VLC: 70 %</li>
</ul>

<p><strong>Notisappar:</strong></p>
<ul>
  <li>Slack: 15 %</li>
  <li>Discord: 20 %</li>
  <li>Mail: 10 %</li>
  <li>Kalender: 25 %</li>
</ul>

<p><strong>Kommunikationsappar:</strong></p>
<ul>
  <li>Zoom/Teams: 100 %</li>
  <li>FaceTime: 100 %</li>
</ul>

<p>Spara detta som en profil och tillämpa det med ett klick. Separationen mellan notis- och mediervolym som macOS inte tillhandahåller nativt – klart på under en minut.</p>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "FaceTime-samtalsvolym för tyst på Mac? Så här fixar du det",
    description:
      "FaceTime-ljud är knappt hörbart på din Mac även vid full volym. Här är alla fixar – från ljudinställningar till att boosta FaceTime förbi 100 %.",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>FaceTime-samtal på din iPhone fungerar bra. Men på din Mac låter den andra personen som om de viskar från tre rum bort. Volymen är maximerad. Du har kontrollerat allt du kan tänka på. Fortfarande för tyst.</p>

<p>Låg FaceTime-volym på Mac är ett vanligt problem och har flera möjliga orsaker.</p>

<h2>1. Kontrollera utdataenheten</h2>

<p>Gå till Systeminställningar → Ljud → Utdata. Se till att rätt enhet är vald. Om du nyligen anslutit eller kopplat ifrån hörlurar, en skärm eller Bluetooth-enheter kan macOS ha automatiskt bytt till en oväntad utdata.</p>

<h2>2. Kontrollera FaceTimes ljudinställningar</h2>

<p>Under ett FaceTime-samtal, klicka på menyfältet och kontrollera FaceTime → Video → välj rätt utdataenhet under Ljud-utdata. FaceTime kan ibland använda en annan utdataenhet än systemstandarden, särskilt efter enhetsbyte.</p>

<h2>3. Avaktivera AirPods auto-byte</h2>

<p>Om du har AirPods kopplade till flera Apple-enheter kan de automatiskt byta bort från din Mac mitt i ett samtal. Kontrollera Systeminställningar → Bluetooth → klicka "i" bredvid dina AirPods → "Anslut till den här Mac:en" → ställ in på "När senast ansluten till den här Mac:en" istället för "Automatiskt" för att förhindra byte mitt i samtal.</p>

<h2>4. Bluetooth-kodekproblem</h2>

<p>Att använda AirPods eller Bluetooth-hörlurar med FaceTime utlöser AAC-till-SCO-kodekbytet (eftersom FaceTime använder din mikrofon). SCO minskar ljudkvalitet och volym. Använd en separat mikrofon (inbyggd Mac-mikrofon eller USB) för att hålla AirPods i hög kvalitets-AAC-läge.</p>

<h2>5. Hörlurssäkerhet begränsar volymen</h2>

<p>Systeminställningar → Ljud → Hörlurssäkerhet. Om "Minska högt ljud" är på begränsar macOS din hörlursvolym. Avaktivera det eller höj tröskeln.</p>

<h2>6. Återställ Core Audio</h2>

<p>Öppna Terminal och kör:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Det här startar om ljud-daemon och kan fixa fastnade låg-volym-tillstånd. Anslut till FaceTime-samtalet igen efter att ljud har startat om.</p>

<h2>7. Boosta FaceTime-volym förbi 100 %</h2>

<p>Om alla inställningar är korrekta och FaceTime fortfarande är för tyst – kanske den andra personen har en svag mikrofon – behöver du förstärka bortom macOS:s gräns.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig boosta FaceTimes volym upp till <strong>200 %</strong>. Öppna menyfältspanelen, hitta FaceTime och dra dess reglage förbi 100 %. Samtalsljudet förstärks i realtid utan att påverka någon annan app.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar FaceTime samtalsvolym bortom 100 % på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial hjälper även med det omvända: om FaceTimes ringljud eller notisljud är för högt under fokustid, sänk FaceTime till 20 % eller tysta det medan din musik spelar. Ett klick för att tysta, ett klick för att avtysta.</p>

<p>Tillgänglig i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – Apple-granskad, sandlådebaserad, engångsköp, ingen prenumeration.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac-volymtangentbordsgenvägar du förmodligen inte känner till",
    description:
      "Bortom de grundläggande volymtangenterna – finkornig kontroll, tystning av specifika appar och per-app-volymgenvägar. Varje Mac-ljudtangentbordstrick förklarat.",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>Varje Mac-användare känner till volym upp/ned/tysta-tangenterna. Tryck på dem och systemvolymen ändras. Men macOS har flera dolda tangentbordstricks för ljudkontroll som de flesta aldrig hittar – plus tredjepartsgenvägar som gör volymhantering dramatiskt snabbare.</p>

<h2>Inbyggda genvägar alla borde känna till</h2>

<h3>Finkornig volyminpassning</h3>
<p>Håll ned <strong>Option + Skift</strong> och tryck volym upp eller ned. Varje tryckning justerar volymen med <strong>en fjärdedel</strong> av ett normalt steg, vilket ger dig 64 nivåer istället för 16. Nödvändigt för att hitta rätt hörlursvolym sent på natten, eller när hoppet mellan två normala steg är för stort.</p>

<h3>Tyst volyminpassning</h3>
<p>Håll ned <strong>Skift</strong> och tryck volym upp eller ned. Volymen ändras men den hörbara feedback-"pop"-ljudet undertrycks. Användbart när du justerar volymen under ett samtal eller en presentation och inte vill att pop-ljudet sänds till alla.</p>

<h3>Hoppa till Ljudinställningar</h3>
<p>Håll ned <strong>Option</strong> och tryck på valfri volymtangent för att öppna Systeminställningar → Ljud direkt. Snabbare än att navigera manuellt.</p>

<h3>Snabb byte av utdataenhet</h3>
<p>Håll ned <strong>Option</strong> och klicka på Ljud-ikonen i menyfältet för att se en lista över alla tillgängliga utdata- (och indataenheter). Klicka på en för att byta direkt. Ingen anledning att öppna Systeminställningar.</p>

<h2>Vad macOS tangentbordsgenvägar inte kan göra</h2>

<p>Alla genvägar ovan styr <strong>systemvolymen</strong> – ett reglage som påverkar alla appar lika. Det finns inga inbyggda tangentbordsgenvägar för att:</p>

<ul>
  <li>Justera volymen på en specifik app</li>
  <li>Tysta en app utan att tysta allt</li>
  <li>Byta mellan sparade volymkonfigurationer</li>
  <li>Växla en volymixerpanel</li>
</ul>

<p>macOS har helt enkelt inte per-app-volymkontroll, så det finns inga genvägar för det.</p>

<h2>Per-app-volymtangentbordsgenvägar med SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lägger till två globala tangentbordsgenvägar som utökar vad macOS kan göra:</p>

<h3>Växla volymixern: Ctrl + Option + S</h3>
<p>Tryck <strong>⌃⌥S</strong> var som helst och SoundDials popover öppnas i menyfältet med varje app och dess eget volymreglage. Justera vad du behöver, tryck på genvägen igen (eller klicka bort) för att stänga. Du lämnar aldrig din nuvarande app.</p>

<h3>Tysta alla appar: Ctrl + Option + M</h3>
<p>Tryck <strong>⌃⌥M</strong> för att omedelbart tysta varje apps ljud. Tryck igen för att avtysta allt, och återställer varje app till sin tidigare volym. Det här är en "omedelbar tystnad"-knapp som är snabbare än att nå tysta-tangenten – och till skillnad från systemets tysta-tangent återställer den per-app-volymer när du avtystar.</p>

<img src="/apps/sounddial.png" alt="SoundDial tangentbordsgenvägar — Ctrl+Option+S för att växla, Ctrl+Option+M för att tysta allt" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Det tangentbordsdrivna arbetsflödet</h2>

<p>Med SoundDials genvägar aktiverade kan du hantera all din ljud utan att röra musen:</p>

<ol>
  <li><strong>⌃⌥S</strong> – öppna mixern</li>
  <li>Använd piltangenterna eller musen för att justera individuella reglage</li>
  <li><strong>⌃⌥S</strong> – stäng mixern</li>
  <li><strong>⌃⌥M</strong> – omedelbar tystnad när någon går in i rummet</li>
  <li><strong>⌃⌥M</strong> – avtysta när de lämnar, allt tillbaka till normalt</li>
</ol>

<p>Kombinerat med <strong>volymprofiler</strong> (sparade konfigurationer du byter med ett klick) kan du hantera ljudet från ett dussin appar utan att någonsin behöva öppna någon av dem individuellt.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Background Music-appen fungerar inte på macOS? Prova dessa alternativ",
    description:
      "Den gratis Background Music-appen slutade fungera efter en macOS-uppdatering? Här är varför den bryts, vad du gör och de bästa alternativen som faktiskt fungerar 2026.",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Background Music är en populär gratis, öppen källkod Mac-app som ger dig grundläggande per-app-volymkontroll. Den fungerar genom att installera en virtuell ljudenhet och routa all ljud genom den. Problemet: den bryts. Regelbundet.</p>

<p>Efter nästan varje macOS-uppdatering – Ventura, Sonoma, Sequoia, Tahoe – rapporterar användare samma problem: den virtuella ljudenheten misslyckas med att installeras, ljud-glitchar och crackling uppträder, vissa appar identifieras inte, eller appen kraschar helt enkelt vid start.</p>

<h2>Varför Background Music fortsätter att brytas</h2>

<p>Background Music fungerar genom att installera en <strong>virtuell ljud-enhetsdrivrutin</strong> (ett Core Audio HAL-plugin). macOS routar all systemljud genom den här virtuella enheten, och Background Music fångar upp det för att tillämpa per-app-volymkontroll.</p>

<p>Problemet är att Apple ändrar hur ljud-drivrutiner fungerar med nästan varje större macOS-version. Säkerhetsbegränsningar skärps, API:er ändras och drivrutinsladdningsmekanismer utvecklas. Eftersom Background Music är ett frivilligunderhållet öppen källkodsprojekt är uppdateringar för att matcha Apples ändringar inte alltid snabba.</p>

<p>Vanliga problem efter macOS-uppdateringar:</p>
<ul>
  <li><strong>Virtuell ljudenhet installeras inte</strong> – macOS:s nya säkerhetspolicyer blockerar drivrutinen</li>
  <li><strong>Ljud crackling eller stuttering</strong> – den virtuella enheten introducerar latens som den nuvarande macOS-versionen hanterar dåligt</li>
  <li><strong>Appar visas inte</strong> – ändringar i hur macOS rapporterar körande processer bryter app-identifiering</li>
  <li><strong>Inget ljud alls</strong> – den virtuella enheten är inställd som standard men skickar inte ljud igenom</li>
  <li><strong>Krasch vid start</strong> – inkompatibilitet med den nuvarande macOS-versionen</li>
</ul>

<h2>Hur du fixar Background Music</h2>

<p>Om Background Music är trasigt just nu:</p>

<ol>
  <li><strong>Sök efter uppdateringar:</strong> Besök GitHub-releasesidan för Background Music och se om en ny version har släppts för din macOS-version.</li>
  <li><strong>Installera om:</strong> Avinstallera Background Music helt (inklusive den virtuella ljudenheten), starta om och installera den senaste versionen.</li>
  <li><strong>Återställ ljud:</strong> Om ditt ljud är fastnat på den virtuella enheten, gå till Systeminställningar → Ljud → Utdata och välj dina riktiga högtalare/hörlurar. Kör sedan <code>sudo killall coreaudiod</code> i Terminal.</li>
  <li><strong>Kontrollera behörigheter:</strong> Systeminställningar → Integritet och säkerhet – se till att Background Music har nödvändiga behörigheter.</li>
</ol>

<h2>Alternativ som inte använder virtuella ljudenheter</h2>

<p>Det grundläggande problemet med Background Music är arkitekturellt: virtuella ljudenheter är bräckliga och bryts med macOS-uppdateringar. Moderna alternativ använder Apples <strong>Core Audio Tap API</strong> (introducerat i macOS 14), vilket låter appar fånga upp per-process-ljud utan att installera en systemdrivrutin.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> använder det moderna Audio Tap API – ingen virtuell ljudenhet, ingen systemdrivrutin, inga kärnutökningar. Det knackar direkt in i varje apps ljudström med Apples stödda API, vilket innebär att det inte bryts när macOS uppdateras.</p>

<img src="/apps/sounddial.png" alt="SoundDial — ett Background Music-alternativ som inte installerar virtuella ljudenheter" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Vad du får över Background Music:</p>
<ul>
  <li><strong>Ingen virtuell ljudenhet</strong> – fungerar med Apples inbyggda ljud-stack, bryts inte vid uppdateringar</li>
  <li><strong>Volymboost till 200 %</strong> – Background Music begränsar till 100 %</li>
  <li><strong>Volymprofiler</strong> – spara och byt mellan konfigurationer (Background Music har inga)</li>
  <li><strong>Auto-ducking</strong> – automatisk volymminskning under samtal (Background Music har bara auto-paus, inte ducking)</li>
  <li><strong>Volymminne</strong> – minns per-app-volymer mellan omstarter</li>
  <li><strong>Tangentbordsgenvägar</strong> – växla mixern eller tysta alla appar</li>
  <li><strong>Aktiv utveckling</strong> – regelbundet uppdaterad för den senaste macOS</li>
</ul>

<p>Avvägningen: SoundDial är ett engångsbetalat köp medan Background Music är gratis. Men en app som faktiskt fungerar är värd mer än en gratis app som bryts var sjätte månad. Och eftersom SoundDial finns i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> har den granskats av Apple, sandlådebaseras för säkerhet och installeras rent.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource-alternativ: Lättare och billigare per-app-volymkontroll för Mac",
    description:
      "SoundSource är kraftfullt men dyrt och komplext. Om du bara behöver per-app-volymkontroll utan verktygsuppsättningen för ljudteknik, det här är vad du ska använda istället.",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>SoundSource av Rogue Amoeba är den äldst löpande per-app-volymkontrollappen för Mac. Den är kraftfull, välgjord och levereras med funktioner som per-app-EQ, ljudeffektkedjor och per-app-utdataroutning. Den kostar också 39 $, kräver en systemljuddrivrutin (ACE) och har fler funktioner än de flesta någonsin kommer att använda.</p>

<p>Om allt du vill är att sänka Spotify utan att påverka Zoom – och du inte behöver ett fullt ljudteknikverktyg – kan SoundSource vara mer än du behöver.</p>

<h2>Vad SoundSource gör bra</h2>

<p>Credit till där det är rätt – SoundSource är en polerad, professionell app:</p>
<ul>
  <li><strong>Per-app-volymkontroll</strong> med finkorniga reglage</li>
  <li><strong>Per-app-EQ</strong> med inbyggda equalizrar och Audio Unit-plugin-stöd</li>
  <li><strong>Per-app-utdataroutning</strong> – skicka olika appar till olika högtalare</li>
  <li><strong>Volymboost</strong> förbi 100 %</li>
  <li><strong>Systemövergripande ljudeffekter</strong></li>
</ul>

<p>Om du är en podcastare, streamer eller ljudproffs som behöver per-app-EQ och effektkedjor är SoundSource byggt för dig.</p>

<h2>Var SoundSource brister för vanliga användare</h2>

<h3>Pris</h3>
<p>39 $ är dyrt för en volymkontrollapp. Om du inte använder EQ, ljudeffekter eller per-app-routing betalar du för funktioner du aldrig kommer röra.</p>

<h3>Systemdrivrutin</h3>
<p>SoundSource installerar en anpassad systemljuddrivrutin kallad ACE (Audio Capture Engine). Det fungerar bra men lägger till komplexitet – det måste uppdateras med varje macOS-version, kan ibland konflkta med annan ljud-programvara och innebär att du kör tredjepartskod på systemljudnivån. Vissa IT-avdelningar i företagsmiljöer blockerar kärnutökningar och systemljuddrivrutiner.</p>

<h3>Inga volymprofiler</h3>
<p>Trots sin omfattande funktionsuppsättning har SoundSource inget profilsystem. Du kan inte spara en "Möte"-konfiguration och en "Fokus"-konfiguration och byta mellan dem. Varje gång situationen förändras justerar du varje reglage manuellt.</p>

<h3>Ingen auto-ducking</h3>
<p>SoundSource sänker inte automatiskt bakgrundsljud när du ansluter till ett samtal. Det finns ingen samtalsidentifiering, ingen automatisk volyminpassning, inget handsfree-arbetsflöde för det vanligaste användningsfallet för en per-app-mixer.</p>

<h2>SoundDial: fokuserat på vad de flesta faktiskt behöver</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tar ett annat tillvägagångssätt: gör kärnarbetet perfekt, hoppa över funktionerna de flesta inte behöver och lägg till arbetsflödesfunktioner som SoundSource missar.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Funktion</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app-volym</td>
  <td style="text-align:center;padding:10px 12px;">Ja (0–200 %)</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app-tystnad</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volymprofiler</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volymminne</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app-EQ</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app-utdataroutning</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Systemljuddrivrutin</td>
  <td style="text-align:center;padding:10px 12px;">Behövs inte</td>
  <td style="text-align:center;padding:10px 12px;">Krävs (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Tangentbordsgenvägar</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pris</td>
  <td style="text-align:center;padding:10px 12px;">14,99 € engångsköp</td>
  <td style="text-align:center;padding:10px 12px;">39 $ USD</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — ett lättare, fokuserat SoundSource-alternativ med volymprofiler och auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Vilket ska du välja?</h2>

<ul>
  <li><strong>Välj SoundSource om:</strong> Du behöver per-app-EQ, ljudeffektkedjor eller per-app-utdataroutning. Du är en podcastare, streamer eller ljudproffs. Du inte bryr dig om priset och systemdrivrutinen.</li>
  <li><strong>Välj <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> om:</strong> Du vill ha per-app-volymkontroll med profiler och auto-ducking. Du vill ha något lättare som inte installerar en systemdrivrutin. Du vill spendera mindre. Du är en distansarbetare, spelare, student eller vem som helst som bara vill sänka Slack utan att påverka Zoom.</li>
</ul>

<p>SoundDial finns i <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> – vilket innebär att det har granskats av Apple, sandlådebaseras för säkerhet och installeras/avinstalleras rent som valfri App Store-app. Engångsköp, ingen prenumeration.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac-volymen för hög vid lägsta inställning? Hur du går ännu tystare",
    description:
      "Även vid det lägsta volymhacket är din Mac för hög – särskilt sent på natten med hörlurar. Här är hur du får finare volymkontroll och går under minimum.",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>Det är midnatt. Du har hörlurar. Du trycker volym-ned-tangenten tills du är på det lägsta hacket – en stapel. Det är fortfarande för högt. Nästa tryckning är tystnad. Det finns ingenting emellan. Du vill ha volymen på 3 % men macOS hoppar från ~6 % till 0 %.</p>

<p>Det här är ett vanligt klagomål med hörlurar och känsliga högtalare. macOS 16 volymsteg är för grova – det lägsta hörbara steget är fortfarande högre än vad du behöver för tyst sent-på-natten-lyssning.</p>

<h2>Inbyggd fix: kvartsteg-volyminpassning</h2>

<p>De flesta Mac-användare vet inte om detta: du kan få <strong>4x finare volymkontroll</strong> med en tangentbordsmodifierare.</p>

<p>Håll ned <strong>Option + Skift</strong> och tryck volym upp/ned-tangenterna. Varje tryckning justerar volymen med en fjärdedel av ett normalt steg – vilket ger dig 64 steg istället för 16.</p>

<p>Det låter dig hitta volymnivåer mellan de normala hacken. Det gapet mellan "en stapel" och "tystnad" har nu tre ytterligare nivåer du kan landa på. För sent-på-natten-hörlurslyssning räcker det ofta för att hitta en bekväm nivå.</p>

<h2>Varför visst innehåll är högre än annat vid samma volym</h2>

<p>Du kanske märker att vissa appar känns högre än andra vid samma systemvolym. Spotify vid en stapel känns högre än en YouTube-video vid en stapel. Det beror på att varje app matar ut ljud på olika nivåer och systemvolymen skalar dem proportionellt.</p>

<p>En låt mastrad på 0 dB (maximum) och en podcast inspelad på -15 dB låter dramatiskt olika vid samma systemvolym. Låten är 15 dB högre – vilket uppfattas som ungefär tre gånger högre av dina öron.</p>

<h2>Den verkliga lösningen: per-app-volym för finkontroll</h2>

<p>Kvartsteg-genvägen hjälper, men den justerar fortfarande alla appar lika. Om Spotify vid det lägsta steget är för högt men ditt Zoom-samtal vid det lägsta steget är för tyst är du fast.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger dig per-app-volymreglage med finkornig kontroll – varje reglage rör sig i 1 %-steg från 0 % till 200 %. Du kan ange Spotify till 5 % och Zoom till 40 % samtidigt. Kontrollnivån är dramatiskt finare än macOS:s 16 systemsteg.</p>

<img src="/apps/sounddial.png" alt="SoundDial finkornig per-app-volymkontroll med 1 %-steg på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>För sent-på-natten-hörlursanvändning:</p>
<ul>
  <li>Ange systemvolymen till en måttlig nivå (40–50 %)</li>
  <li>Använd SoundDial för att finjustera varje app till exakt den nivå du vill ha</li>
  <li>Spotify på 8 % – knappt märkbar bakgrundsmusik</li>
  <li>Webbläsaren på 15 % – tyst nog för sent-på-natten-video</li>
  <li>Notiser tystade – inga överraskande höga pings</li>
</ul>

<p>Spara detta som en "Natt"-profil och tillämpa det med ett klick när du sätter på hörlurar efter arbetstid.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "En AirPod högre än den andra? Alla fixar förklarade",
    description:
      "Den vänstra AirPod är tystare än den högra (eller vice versa). Här är varje orsak – från öronvax till macOS-balansinställningar – och hur du fixar det.",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>En AirPod låter bra. Den andra är märkbart tystare. Musik känns off-center. Röster låter som om de kommer från ena sidan. Det här är ett av de vanligaste AirPods-klagomålen och har vanligtvis en enkel fix.</p>

<h2>1. Rengör dina AirPods</h2>

<p>Den vanligaste orsaken är fysisk: öronvax eller skräp som delvis blockerar högtalarens mesh på en AirPod. Även ett tunt lager av pålagring kan märkbart minska volymen på den sidan.</p>

<p><strong>Hur du rengör:</strong></p>
<ul>
  <li>Använd en torr, mjuk borstborste (en ren tandborste fungerar) för att försiktigt borsta högtalar-mesh</li>
  <li>För AirPods Pro silikonspetsar: ta bort spetsen och rengör både spetsen och högtalar-mesh under</li>
  <li>Använd en torr, luddfri trasa för utsidan</li>
  <li><strong>Använd inte:</strong> vatten, alkohol, tryckluft eller vassa föremål – dessa kan skada högtalar-mesh eller trycka skräp längre in</li>
</ul>

<p>Efter rengöring, testa båda AirPods. I de flesta fall fixar det problemet omedelbart.</p>

<h2>2. Kontrollera ljud-balansen i macOS</h2>

<p>macOS har ett vänster-höger ljud-balansreglage som kan vara av-center:</p>

<ol>
  <li>Gå till <strong>Systeminställningar → Tillgänglighet → Ljud</strong></li>
  <li>Hitta <strong>Balans</strong>-reglaget</li>
  <li>Se till att det är exakt centrerat mellan L och R</li>
</ol>

<p>Om reglaget var förskjutet till ena sidan är det din bov. Centrera det och volymen bör vara lika på båda sidorna.</p>

<p>Kontrollera även <strong>Systeminställningar → Ljud</strong> – vissa macOS-versioner har ett balansreglage i inställningarna för utdataenheten också.</p>

<h2>3. Återställ dina AirPods</h2>

<p>Om rengöring och balans inte hjälper, prova att återställa dina AirPods till fabriksinställningarna:</p>

<ol>
  <li>Lägg båda AirPods i laddningsetuien</li>
  <li>Stäng locket och vänta 30 sekunder</li>
  <li>Öppna locket</li>
  <li>Håll ned installationsknappen på baksidan av etuiet i 15 sekunder tills statuslampan blinkar bärnstensgult, sedan vitt</li>
  <li>Para om AirPods med din Mac (Systeminställningar → Bluetooth)</li>
</ol>

<p>Det återställer eventuell lagrad ljud-kalibrering och kan fixa programvarusidans volym-obalanser.</p>

<h2>4. Kontrollera Mono Audio</h2>

<p>Om macOS:s Mono Audio-tillgänglighetsfunktion är aktiverad blandas stereo-ljud till en enda kanal och skickas till båda AirPods lika. Även om detta inte borde orsaka volymskillnader kan det förändra hur visst innehåll låter och få en sida att verka "annorlunda".</p>

<p>Kontrollera: Systeminställningar → Tillgänglighet → Ljud → se till att "Mono Audio" är av (om du inte behöver det).</p>

<h2>5. Bluetooth-störningar</h2>

<p>AirPods kommunicerar med din Mac via Bluetooth, och varje AirPod kommunicerar också med den andra. Om det finns betydande Bluetooth-störningar (WiFi-routrar, USB 3.0-hubbar, andra Bluetooth-enheter) kan en AirPod ta emot en svagare signal.</p>

<p><strong>Fix:</strong> Flytta dig närmare din Mac. Koppla ifrån Bluetooth-enheter du inte använder. Om du är nära en USB 3.0-hubb, försök att flytta den bort – USB 3.0 är känt för att störa 2,4 GHz Bluetooth.</p>

<h2>6. Hårdvarufel</h2>

<p>Om ingen av ovanstående fixar fungerar kan en AirPod ha ett hårdvarufel – en degraderad högtalar-drivrutin eller ett skadat mesh. Det händer med tiden vid intensiv användning.</p>

<p><strong>Fix:</strong> Kontakta Apple Support eller besök en Apple Store. Om dina AirPods är under garanti eller AppleCare+ ersätter Apple den påverkade AirPod. Individuella AirPod-ersättningar finns också tillgängliga för köp utanför garanti.</p>

<h2>Bättre ljud-balans med per-app-volymkontroll</h2>

<p>Medan per-app-volymkontroll inte fixar en hårdvaru-obalans mellan AirPods löser det ett relaterat problem: när vissa appar är högre än andra i dina AirPods kan det förstärka uppfattningen av en obalans.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig ange varje app till en konsekvent volymnivå. När Spotify är på 40 %, Zoom på 100 % och Safari på 60 % vet du exakt vad du kan förvänta dig från varje app – inga plötsliga volymhopp som får en AirPod att kännas högre för att en notis precis blast på 100 %.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix och streaming-ljud för tyst på Mac? Så här fixar du det",
    description:
      "Dialogen är viskningstyss, sedan skakar en explosion rummet. Så här fixar du streaminglj udnivåer på Mac – och boostar tyst innehåll förbi 100 %.",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>Du tittar på en film på Netflix. Två karaktärer har en konversation – du kan knappt höra dem. Du höjer volymen. En actionscen börjar. Explosionerna är öronbedövande. Du kastar dig efter volymtangenten. Det här är det vanligaste klagomålet om streaming-ljud, och det är värre på Mac:ens inbyggda högtalare.</p>

<p>Problemet är inte din Mac. Det är hur filmer och TV-shower mastras – och att macOS inte ger dig några verktyg för att fixa det.</p>

<h2>Varför streaming-ljud har vilda volymsvängningar</h2>

<p>Filmer och TV-shower mastras med högt <strong>dynamiskt omfång</strong> – skillnaden mellan de tystaste och högsta ljuden. I en biograf med kraftfulla högtalare och en subwoofer låter detta fantastiskt. Viskningarna är intima, explosionerna är viscerala.</p>

<p>På en MacBooks 2-tumshögtalare blir det dynamiska omfånget en skuld. De tysta delarna är under vad de små högtalarna kan återge tydligt, medan de höga delarna slår mot högtalarens fysiska gränser. Du slutar med att konstant justera volymen – höjer för dialog, sänker för action.</p>

<h2>Fix 1: Aktivera "Minska höga ljud" i streaming-appen</h2>

<p>Vissa streamingtjänster har en volymsnormaliseringsfunktion:</p>
<ul>
  <li><strong>Netflix:</strong> Under uppspelning, klicka på högtalarikonen → kontrollera om det finns ett alternativ för "Minska höga ljud"</li>
  <li><strong>Apple TV+:</strong> Inställningar → Tillgänglighet → "Minska höga ljud"</li>
  <li><strong>Disney+:</strong> Ingen motsvarande inställning för närvarande</li>
  <li><strong>Amazon Prime Video:</strong> "Dialog Boost"-funktion (om tillgänglig för titeln)</li>
</ul>

<p>Dessa funktioner komprimerar det dynamiska omfånget – gör tysta ljud högre och höga ljud tystare. Resultatet är jämnare volym som fungerar bättre på små högtalare och vid låga lyssningsnivåer.</p>

<h2>Fix 2: Boosta streaming-ljud förbi 100 %</h2>

<p>Om innehållet bara är för tyst – även med normalisering på och volym vid max – behöver du förstärkning bortom vad macOS tillhandahåller.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig boosta vilken app som helst till <strong>200 %</strong>. Om Safari eller Netflix-appen är för tyst, dra dess reglage förbi 100 %. Ljuet förstärks innan det når dina högtalare, vilket effektivt fördubblar den maximala volymen för den appen bara.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar Netflix-ljud till 180 % på Mac för tydligare dialog och streaming-ljud" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Och eftersom SoundDial styr varje app oberoende, boostar Netflix till 150 % inte din Spotify eller Slack högre. Varje app stannar på sin egen nivå.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac-ljudkonfiguration för distansarbete: Den kompletta guiden",
    description:
      "Samtal, musik, notiser och fokustid – allt på en Mac. Så här konfigurerar du ditt ljud så att ingenting kämpar om din uppmärksamhet.",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Distansarbete på en Mac innebär att din dator samtidigt är din kontorstelefon, din radio, ditt notiscenter och din djuparbetsstation. Det är fyra fundamentalt olika ljud-lägen, och macOS behandlar dem alla likadant: ett volymreglage, allt på samma nivå, inget sätt att prioritera.</p>

<p>Den här guiden går igenom hur du konfigurerar din Mac:s ljud för distansarbete så att samtal är tydliga, musik är närvarande men inte distraherande, notiser är subtila och fokustid faktiskt är tyst.</p>

<h2>De fyra ljud-lägena för distansarbete</h2>

<h3>1. Mötesläge</h3>
<p>Du är i ett Zoom- eller Teams-samtal. Samtalet måste vara kristallklart. Musik bör vara tyst eller knappt hörbar. Slack bör inte pinga i ditt öra.</p>

<h3>2. Fokusläge</h3>
<p>Du gör djuparbete. Bakgrundsmusik på en låg nivå hjälper dig att koncentrera dig. Notiser bör vara knappt märkbara – närvarande nog att du märker ett brådskande meddelande, tyst nog att de inte bryter flödet.</p>

<h3>3. Samarbetsläge</h3>
<p>Du är tillgänglig för meddelanden, övervakar Slack, kanske tittar på en träningsvideo. Allt kan vara på måttliga nivåer. Notiser på normal volym.</p>

<h3>4. Pausläge</h3>
<p>Musik på full volym. YouTube på full volym. Notiser kan vänta.</p>

<h2>Hårdvarukonfiguration</h2>

<h3>Mikrofonfrågan</h3>
<p>Om du använder AirPods för samtal, överväg att använda en separat mikrofon istället. När AirPods används som både mikrofon och högtalare växlar macOS till den lägre kvalitets-SCO Bluetooth-kodeken, vilket minskar både ljudkvalitet och volym. Att använda din Macs inbyggda mikrofon (eller en USB-mikrofon) medan du behåller AirPods som utdata undviker detta helt.</p>

<h3>Utdataenheter</h3>
<p>Många distansarbetare använder två utdataenheter:</p>
<ul>
  <li><strong>Hörlurar</strong> för samtal – integritet, inget eko, tydligt ljud</li>
  <li><strong>Högtalare</strong> för musik under icke-samtalstid – fyller rummet, bekvämare under långa perioder</li>
</ul>

<p>Använd Option-klick på Ljud-ikonen i menyfältet för att snabbt byta mellan enheter. Eller använd SoundDials inbyggda enhetsväxlare, som placerar dina utdataenheter precis bredvid dina volymkontroller.</p>

<h2>Programvarukonfiguration</h2>

<h3>Notishantering</h3>
<p>Gå till Systeminställningar → Notiser. För varje app, bestäm om du behöver ljud-notiser:</p>
<ul>
  <li><strong>Behåll ljud på:</strong> Slack (om du svarar), Kalender (möten), Meddelanden</li>
  <li><strong>Stäng av ljud:</strong> Mail (kontrollera enligt schema), Nyheter, sociala appar</li>
</ul>

<p>Det minskar antalet appar som gör överraskningsljud, men ger dig inte volymkontroll – bara på/av.</p>

<h2>Det saknade: per-app-volymkontroll</h2>

<p>Fokuslägen styr <em>vilka</em> notiser som passerar men inte <em>hur höga</em> något är. Du har fortfarande ett volymreglage för allt. Om du vill ha Slack på 15 %, Spotify på 35 % och Zoom på 100 % – kan macOS inte göra det.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> fyller detta gap genom att ge varje app sitt eget volymreglage.</p>

<img src="/apps/sounddial.png" alt="SoundDial distansarbete-ljudkonfiguration – olika volymnivåer för Zoom, Spotify och Slack på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Spara profiler för varje läge</h3>

<p><strong>Mötesprofil:</strong></p>
<ul>
  <li>Zoom/Teams: 100 %</li>
  <li>Spotify: tystat</li>
  <li>Slack: tystat</li>
  <li>Webbläsaren: tystat</li>
</ul>

<p><strong>Fokusarbete-profil:</strong></p>
<ul>
  <li>Spotify: 30 %</li>
  <li>Slack: 10 %</li>
  <li>Zoom: 80 % (ifall någon ringer)</li>
  <li>Webbläsaren: 40 %</li>
</ul>

<p><strong>Samarbetsprofil:</strong></p>
<ul>
  <li>Allt på 50–70 %</li>
  <li>Slack: 30 %</li>
</ul>

<p>Byt mellan profiler med ett klick. När ett samtal startar sänker SoundDials auto-ducking automatiskt allt utom din samtalsapp. När det slutar återställs dina profilnivåer.</p>

<h2>Det dagliga arbetsflödet</h2>

<ol>
  <li>Börja arbeta → tillämpa "Fokusarbete"-profil</li>
  <li>Anslut till ett möte → auto-ducking hanterar det automatiskt (eller tillämpa "Möte"-profil)</li>
  <li>Mötet slutar → volymer återställs till Fokusarbete-nivåer</li>
  <li>Lunchpaus → tillämpa "Paus"-profil, höj musiken</li>
  <li>Eftermiddagens djuparbete → tillbaka till Fokusarbete</li>
</ol>

<p>Total manuell insats: två eller tre profilklick per dag. Allt annat är automatiskt.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Hur du stoppar webbläsarflikar från att autospela ljud på Mac",
    description:
      "En bakgrundsflik börjar spela ljud ur ingenstans. Annonser, videor, nyhetssajter – så här tystar du oseriösa flikar och styr webbläsarljud på macOS.",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>Du har tjugo flikar öppna. Du arbetar i en av dem. Plötsligt – ljud börjar spelas från någonstans. En videoreklam. Ett autospelande nyhetsklipp. En flik du öppnade för en timme sedan som bestämde att det nu är dags att börja låta. Du letar desperat efter vilken flik det är och klickar igenom dem en efter en.</p>

<p>Autospelande ljud i webbläsarflikar är en av de mest irriterande upplevelserna på valfri dator, och det är värre på Mac eftersom macOS inte har något sätt att tysta en specifik app (än mindre en specifik flik) utan att tysta allt.</p>

<h2>Avaktivera autospelning i Safari</h2>

<p>Safari har de bästa inbyggda autospelningskontrollerna av alla webbläsare:</p>

<ol>
  <li>Öppna Safari → Inställningar (⌘,) → fliken Webbplatser</li>
  <li>Välj "Automatisk uppspelning" i vänster sidofält</li>
  <li>Ange standardinställningen längst ned till "Spela aldrig automatiskt" eller "Stoppa media med ljud"</li>
</ol>

<p>"Stoppa media med ljud" är det bästa alternativet – det blockerar videor som autospelar med ljud men tillåter tystad autospelning (som många sajter använder för dekorativa bakgrundsvideor). "Spela aldrig automatiskt" blockerar allt.</p>

<h2>Avaktivera autospelning i Chrome</h2>

<ol>
  <li>Gå till <code>chrome://settings/content/sound</code></li>
  <li>Växla "Sajter kan spela ljud" för att bestämma standardbeteendet</li>
  <li>Lägg till specifika sajter till "Tysta"-listan för att permanent tysta dem</li>
</ol>

<p>Chrome låter dig också tysta individuella flikar: högerklicka på en flik → "Tysta sajt". Det tystar allt ljud från den sajten tills du avtystar.</p>

<h2>Det bredare problemet: webbläsarljud vs. allt annat</h2>

<p>Även med autospelning avaktiverat och flikar tystade kanske du fortfarande vill styra hur högt din webbläsare är relativt andra appar. kanske tittar du på en YouTube-handledning medan du är i ett Zoom-samtal – du vill ha handledningen på 30 % och Zoom på 100 %. Eller du spelar bakgrundsmusik i en webbläsarflik och det konkurrerar med din Spotify.</p>

<p>macOS behandlar hela webbläsaren som en app med en volym. Du kan inte göra en flik tystare än en annan på systemnivå. Men du <em>kan</em> göra hela webbläsaren tystare än andra appar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger din webbläsare sitt eget volymreglage, oberoende från alla andra appar. Sänk Safari till 30 % medan du håller Zoom på 100 %. Tysta Chrome helt medan du håller Spotify spelande. Ett klick.</p>

<img src="/apps/sounddial.png" alt="SoundDial styr webbläsarvolym oberoende från andra appar på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Det är det snabbaste sättet att hantera en överraskande autospelande flik: istället för att jaga vilken flik som låter, klicka på SoundDial i menyfältet och tysta webbläsaren. Allt annat fortsätter spela. När du hittat och stängt den felande fliken, avtysta webbläsaren och volymen återgår till där den var.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Discord för högt (eller tyst) på Mac? Så här fixar du det",
    description:
      "Discord dundrar över ditt spel, eller för tyst för att höra lagkamrater. Så här styr du Discords volym oberoende från allt annat på macOS.",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discord har två volymproblem på Mac. Antingen är det för högt – notisljud dundrar över ditt spel och musik – eller för tyst – du kan inte höra dina lagkamrater över spelljudet. Problemet är att macOS inte låter dig justera Discords volym oberoende. Det är låst till samma systemreglage som allt annat.</p>

<h2>Discords inbyggda volymkontroller</h2>

<p>Discord har flera interna volyminställningar. Innan du tittar på externa lösningar, se till att dessa är konfigurerade:</p>

<h3>Utgångsvolym</h3>
<p>Gå till Discord → Inställningar (kugghjulsikon) → Röst och video. "Utgångsvolym"-reglaget styr hur högt Discord låter för dig. Om Discord är för tyst, se till att det är på 100 %. Om det är för högt, sänk det här.</p>

<h3>Per-användarvolym</h3>
<p>Högerklicka på en användare i en röstkanal → "Användarvolym." Du kan justera individuella användare från 0 % till 200 %. Användbart om en person är högre eller tystare än andra.</p>

<h3>Notisvolym</h3>
<p>Discord → Inställningar → Notiser. Du kan avaktivera specifika notisljud individuellt. Det minskar antalet störande ljud men låter dig inte sänka deras volym – bara sätta på eller av dem.</p>

<h2>Det verkliga problemet: volymbalans på systemnivå</h2>

<p>Discords interna kontroller justerar Discords egen mix. Men det verkliga problemet är balansen mellan Discord och allt annat på din Mac: ditt spel, din musik, din webbläsare. macOS ger dig ett reglage för alla dessa.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger Discord sitt eget volymreglage i ditt menyfält, oberoende från alla andra appar.</p>

<img src="/apps/sounddial.png" alt="SoundDial styr Discord-volym oberoende från spel och musik på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Vanliga konfigurationer</h3>

<p><strong>Gaming med Discord:</strong></p>
<ul>
  <li>Discord: 100 % (hör alltid lagkamrater tydligt)</li>
  <li>Spel: 40 % (uppslukande men inte överväldigande)</li>
  <li>Spotify: 15 % (subtil bakgrundsmusik)</li>
</ul>

<p><strong>Umgås i röstchatt:</strong></p>
<ul>
  <li>Discord: 80 %</li>
  <li>Webbläsare/YouTube: 60 %</li>
  <li>Allt annat: normalt</li>
</ul>

<p><strong>Fokusarbete (Discord i bakgrunden):</strong></p>
<ul>
  <li>Discord: tystat eller 10 %</li>
  <li>Spotify: 50 %</li>
  <li>Slack: 15 %</li>
</ul>

<p>Spara varje som en <strong>volymprofil</strong> i SoundDial och byt med ett klick. Ingen omjustering av sex reglage varje gång du byter aktivitet.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Hur du snabbt byter ljud-utdata på Mac (utan att gräva i inställningar)",
    description:
      "Att byta mellan högtalare, hörlurar och skärmar på Mac tar för många klick. Här är snabbare sätt att byta din ljud-utdataenhet direkt.",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>Du kopplar ur dina hörlurar och vill att ljud ska gå till dina högtalare. Eller du ansluter AirPods och macOS väljer fel enhet. Eller du går in i ett mötesrum och behöver byta till konferensens högtalare. Varje gång är det: Systeminställningar → Ljud → Utdata → scrolla → klicka. För många klick för något som borde ta ett.</p>

<p>Här är alla sätt att byta ljud-utdata snabbare på Mac – från inbyggda genvägar till menyfältsverktyg som eliminerar klickandet helt.</p>

<h2>Metod 1: Option-klicka på volymikonen</h2>

<p>Det här är den snabbaste inbyggda metoden och de flesta känner inte till den.</p>

<p>Håll ned <strong>Option (⌥)</strong> och klicka på volym/ljud-ikonen i ditt menyfält. Istället för det normala volymreglaget får du en lista över alla tillgängliga utdataenheter. Klicka på den du vill ha. Klart.</p>

<p>Om du inte ser ljud-ikonen i ditt menyfält, aktivera den: Systeminställningar → Kontrollcenter → Ljud → välj "Visa alltid i menyfält".</p>

<h2>Metod 2: Kontrollcenter</h2>

<p>Klicka på Kontrollcenter-ikonen (tvåknappikonen) i menyfältet → klicka på Ljud-sektionen → klicka på det nuvarande enhetsnamnet för att se alla tillgängliga utdata.</p>

<h2>Metod 3: SoundDials inbyggda enhetsväxlare</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> inkluderar en utdataenhetsväljare direkt i sin menyfälts-popover – bredvid dina per-app-volymreglage. Ett klick för att öppna SoundDial, ett klick för att byta enheter. Ingen grävning i Systeminställningar.</p>

<img src="/apps/sounddial.png" alt="SoundDial med ljud-utdataenhetsväxling och per-app-volymkontroll i en menyfältspanel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Fördelen med att byta enhet inuti SoundDial: du kan byta utdata <em>och</em> justera per-app-volymer i samma panel. Byt till AirPods och sänk omedelbart Spotify medan du boostar ditt samtal – allt utan att lämna popovern.</p>

<p>Kombinerat med SoundDials <strong>volymminne</strong>-funktion kan varje utdataenhet minnas sina egna per-app-volymnivåer. Byt till högtalare och din "högtalare"-volymbalans tillämpas. Byt till hörlurar och din "hörlurar"-balans tillämpas. Ingen manuell omjustering.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Fixa ljud-crackling och -popping på Mac: Komplett guide",
    description:
      "Din Mac:s ljud cracklar, poppar eller stuttrar – under musik, samtal eller videouppspelning. Här är varje känd orsak och fix för macOS-ljudfel.",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>Du lyssnar på musik och hör ett pop. Sedan en crackle. Sedan en stutter där ljudet avbryts under en bråkdel av en sekund och kommer tillbaka. Det är inte låten – det är din Mac. Ljud-crackling på macOS är frustrerande vanligt och har minst sex olika orsaker.</p>

<p>Den här guiden täcker varje känd orsak till ljud-crackling, -popping och -stuttering på Mac, från mjukvarufixar till det ena hårdvaruproblemet du bör känna till.</p>

<h2>1. Starta om Core Audio (den snabba lösningen)</h2>

<p>Den enskilt mest effektiva lösningen för plötslig ljud-crackling är att starta om macOS:s ljud-daemon. Öppna Terminal och kör:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Ljud avbryts en sekund och startar om. I många fall slutar crackling omedelbart. Det fungerar eftersom coreaudiod – processen som hanterar all ljud på macOS – kan hamna i ett korrupt tillstånd efter viloläge/uppvakningscykler, Bluetooth-enhetsanslutningar eller app-krascher.</p>

<h2>2. CPU-överbelastning</h2>

<p>Ljud-crackling korrelerar ofta med hög CPU-användning. När din Mac:s CPU är maxad kan den inte bearbeta ljud-buffertar tillräckligt snabbt, vilket orsakar luckor som låter som pops och crackles.</p>

<p><strong>Kontrollera:</strong> Öppna Aktivitetsövervakare (Program → Verktyg) och titta på CPU-fliken. Om du ser konsekvent hög CPU-användning (80 %+) är det troligen orsaken.</p>

<p><strong>Fix:</strong> Stäng onödiga appar, särskilt resurskrävande sådana som webbläsare med många flikar, videoredigerare eller VM:ar.</p>

<h2>3. Bluetooth-ljudproblem</h2>

<p>Bluetooth är den vanligaste källan till crackling för trådlösa hörlurar och högtalar-användare. Flera saker kan orsaka det:</p>

<ul>
  <li><strong>Störningar:</strong> WiFi, USB 3.0-enheter och andra Bluetooth-enheter kan störa din ljud-anslutning.</li>
  <li><strong>Kodekbyte:</strong> När en app aktiverar din mikrofon växlar macOS från AAC till SCO-kodek. Den här övergången kan orsaka en kort crackle eller pop.</li>
  <li><strong>Bluetooth-trängsel:</strong> Om du har många Bluetooth-enheter anslutna samtidigt kan radion kämpa. Koppla ifrån enheter du inte använder.</li>
</ul>

<h2>4. Sampling-rate-mismatch</h2>

<p>Om din ljud-utdataenhet körs med en annan sampling-rate än det ljud som spelas måste macOS resamla i realtid. Den här resamplingen kan introducera artefakter.</p>

<p><strong>Kontrollera:</strong> Öppna Audio MIDI Setup (Program → Verktyg), välj din utdataenhet och kontrollera sampling-rate. Vanliga rates är 44,1 kHz (CD-kvalitet) och 48 kHz (video/streaming-standard).</p>

<h2>5. USB-ljud-enhet-buffertproblem</h2>

<p>Externa USB-ljud-enheter (DAC:ar, ljud-gränssnitt, USB-hörlurar) kan crackla om buffertstorleken är för liten för systemets nuvarande last.</p>

<p><strong>Fix:</strong> I Audio MIDI Setup, välj din USB-enhet och prova att öka buffertstorleken. I ljud-applikationer som Logic, Ableton eller GarageBand, öka I/O-buffertstorleken i ljud-inställningarna.</p>

<h2>6. macOS-uppdatering-regression</h2>

<p>Vissa macOS-uppdateringar introducerar ljud-buggar. Kontrollera om Apple har släppt en punktuppdatering (t.ex. 15.0.1, 15.1) som åtgärdar ljud-problem.</p>

<h2>Hantera ljudkvalitet med SoundDial</h2>

<p>Medan SoundDial inte direkt fixar hårdvaru- eller systemnivå-crackling kan det hjälpa dig hantera ljud på sätt som minskar problemet:</p>

<ul>
  <li><strong>Minska konkurrerande ljud-källor:</strong> Använd SoundDial för att tysta appar du inte aktivt använder. Färre samtidiga ljud-strömmar betyder mindre CPU-tryck på ljud-bearbetning.</li>
  <li><strong>Volymboost istället för systemmax:</strong> Använd <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDials</a> per-app-boost för att förstärka specifika appar till 200 % medan systemvolymen hålls på en mer bekväm 70–80 %.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Microsoft Teams för tyst på Mac? Alla fixar som fungerar",
    description:
      "Knappt hör folk på Teams även vid maxvolym? Här är varje orsak – från Teams-inställningar till Bluetooth-kodek – och hur du boostar samtalsljud förbi 100 %.",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>Du är i ett Teams-möte. Din kollega presenterar, men deras röst låter som om den kommer genom en konservburk från tre rum bort. Din Mac-volym är på 100 %. Teams volym är på 100 %. Du har höjt allt du kan hitta. Fortfarande för tyst.</p>

<p>Låg volym på Microsoft Teams är ett av de vanligaste Mac-ljudklagomålen i företagsmiljöer. Orsakerna är annorlunda från Zoom, och vissa av fixarna är Teams-specifika.</p>

<h2>1. Kontrollera Teams ljud-inställningar</h2>

<p>Klicka på din profilikon i Teams → Inställningar → Enheter.</p>
<ul>
  <li>Se till att rätt <strong>högtalar</strong>enhet är vald – inte en frånkopplad skärm eller en inaktiv Bluetooth-enhet</li>
  <li>Använd "Gör ett testsamtal"-funktionen för att verifiera att ljud fungerar på en rimlig volym</li>
  <li>Kontrollera att "Brusundertryckning" inte är satt till "Hög" – aggressiv brusundertryckning kan minska upplevd röstvolym</li>
</ul>

<h2>2. Nytt Teams vs. Klassiskt Teams</h2>

<p>Microsoft ersatte "Klassiskt Teams" med "Nytt Teams". Den nya versionen hanterar ljud annorlunda. Om du nyligen migrerade:</p>
<ul>
  <li>Ljud-enhetsinställningar kan inte ha förts över – kontrollera ditt högtalarval igen</li>
  <li>Prova att växla "Musikläge" av om det är aktiverat (Inställningar → Ljud-enheter) – det ändrar hur Teams bearbetar inkommande ljud</li>
</ul>

<h2>3. Bluetooth-kodekbyte</h2>

<p>Om du använder AirPods eller Bluetooth-hörlurar tvingar anslutning till ett Teams-samtal macOS att byta från den hög-kvalitets AAC-kodeken till den lägre kvalitets SCO-kodeken. SCO minskar markant ljud-kvalitet och volym.</p>

<p><strong>Fix:</strong> Använd din Macs inbyggda mikrofon eller en USB-mikrofon medan du behåller Bluetooth-hörlurar som utdataenhet. Gå till Teams → Inställningar → Enheter → Mikrofon och välj "MacBook Pro Microphone". Det förhindrar kodekbytet.</p>

<h2>4. Kontrollera macOS utdataenhet och volym</h2>

<p>Gå till Systeminställningar → Ljud → Utdata. Verifiera att rätt enhet är vald och att utdatavolymen är på maximum. Kontrollera även:</p>
<ul>
  <li><strong>Hörlurssäkerhet:</strong> Om "Minska högt ljud" är på begränsar det din hörlursvolym.</li>
  <li><strong>Balans:</strong> Se till att vänster-höger-balansreglaget är centrerat.</li>
</ul>

<h2>5. Återställ Core Audio</h2>

<p>Öppna Terminal och kör:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Ljud startar om efter en kort avbrytning. Anslut till Teams-mötet igen och kontrollera om volymen förbättrades.</p>

<h2>6. Boosta Teams volym bortom 100 %</h2>

<p>Om varje inställning är maxad och Teams fortfarande är för tyst behöver du förstärka bortom vad macOS normalt tillåter.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig boosta vilken apps volym som helst till <strong>200 %</strong>, inklusive Microsoft Teams. Dra Teams reglage till 150 % eller 180 % och ljuet förstärks i realtid. Bara Teams blir högre – din musik, webbläsare och andra appar stannar på sina nuvarande nivåer.</p>

<img src="/apps/sounddial.png" alt="SoundDial boostar Microsoft Teams samtalsvolym bortom 100 % på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial hjälper även med det omvända problemet: om Teams-notisljud är för höga under fokustid, sänk Teams till 15 % eller tysta det helt medan din musik spelar. Ett klick för att tysta, ett klick för att avtysta.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Hur du styr per-app-volym på Mac",
    description:
      "macOS ger dig ett volymreglage för allt. Här är hur du får individuella volymkontroller för varje app – och varför det spelar mer roll än du tror.",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>Du är i ett videosamtal. Slack fortsätter pinga. Musik spelar i bakgrunden. Du når volymtangenten och – allt blir tystare. Samtalet, musiken, notiserna. macOS har exakt ett volymreglage och det styr allt på en gång.</p>

<p>Windows har haft en per-app-volymixer sedan Vista 2006. Tjugo år senare har macOS fortfarande inte det. Om du vill sänka Spotify utan att påverka ditt Zoom-samtal har Apple inget inbyggt svar för dig.</p>

<p>Den här guiden förklarar vad per-app-volymkontroll är, varför macOS inte har det och hur du får det.</p>

<h2>Vad per-app-volym faktiskt innebär</h2>

<p>Per-app-volym innebär att varje applikation på din Mac får sitt eget oberoende volymreglage. Du kan ange Spotify till 30 %, hålla Zoom på 100 %, tysta Slack helt och lämna Safari på 50 % – allt på samma gång. Att ändra en apps volym har noll effekt på någon annan app.</p>

<h2>Varför macOS inte inkluderar detta</h2>

<p>Apples ljud-arkitektur (Core Audio) stöder absolut per-app-volymkontroll på API-nivå. Anledningen till att macOS inte exponerar det i UI:t är ett designfilosofival: Apple föredrar färre kontroller och en enklare yta. Ett reglage är enklare än tolv.</p>

<p>Problemet är att "enklare" slutar vara enklare i det ögonblick du har mer än en ljud-källa som konkurrerar om din uppmärksamhet.</p>

<h2>Hur en per-app-volymixer fungerar</h2>

<p>En ordentlig per-app-volymixer sitter i ditt menyfält och visar varje app som för närvarande producerar ljud. Varje app får sitt eget reglage. Du drar det upp eller ned och bara den appens volym ändras. Systemvolymen förblir orörd.</p>

<p>Nyckelfunktioner som separerar en bra mixer från en dålig:</p>

<ul>
  <li><strong>Realtids-app-identifiering.</strong> När en ny app börjar spela ljud bör den visas i mixern automatiskt.</li>
  <li><strong>Per-app-tystnad.</strong> Ett klick för att tysta en specifik app utan att röra dess reglagestition.</li>
  <li><strong>Volymboost.</strong> Vissa appar maxar för lågt. En bra mixer låter dig boosta förbi 100 %.</li>
  <li><strong>Profiler.</strong> Olika volymkonfigurationer för olika situationer.</li>
  <li><strong>Auto-ducking.</strong> Sänk automatiskt musik när du startar ett samtal och ta upp det igen när samtalet slutar.</li>
  <li><strong>Menyfält-native.</strong> Det bör leva i menyfältet, inte ett dock-fönster.</li>
</ul>

<h2>SoundDial</h2>

<p>Jag byggde <strong>SoundDial</strong> eftersom den Mac-volymixer jag ville ha inte existerade. Den sitter i ditt menyfält, visar varje app som låter och ger var och en sitt eget reglage. Per-app-tystnad, volymboost, profiler och auto-ducking som sänker din musik när ett samtal startar. Engångsköp, macOS 14+, ingen prenumeration.</p>

<p>Volymixern macOS borde ha byggt in.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Hur du tystar Slack på Mac utan att tysta allt annat",
    description:
      "Slack-notiser avbryter din fokus, men du vill inte tysta din musik eller samtal. Så här tystar du bara Slack på macOS.",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>Du är djupt i fokusarbete. Spotify spelar den perfekta koncentrationslistan. Sedan – <em>knock brush</em> – Slack pingar. Och igen. Och igen. Tre kanaler, två DM:s och ett trådnotis på trettio sekunder. Du vill tysta Slack men behålla din musik. macOS säger: tysta allt eller tysta ingenting.</p>

<h2>Alternativ 1: Tysta notiser i Slack självt</h2>

<p>Slack har en "Pausa notiser"-funktion:</p>
<ol>
  <li>Klicka på din profilbild i Slacks sidofält</li>
  <li>Klicka på "Pausa notiser"</li>
  <li>Välj en varaktighet (30 min, 1 timme, 2 timmar, etc.)</li>
</ol>

<p><strong>Begränsning:</strong> Det är allt-eller-inget per kanal. Du kan inte göra Slack <em>tystare</em> – bara helt tyst eller helt på.</p>

<h2>Alternativ 2: Stäng av Slack-ljud i macOS-notiser</h2>

<p>Gå till Systeminställningar → Notiser → Slack. Växla av "Spela upp ljud för notiser".</p>

<p><strong>Begränsning:</strong> Det tar bort alla Slack-notisljud permanent (tills du slår på det igen). Det är allt-eller-inget.</p>

<h2>Alternativ 3: Per-app-volymkontroll (den verkliga lösningen)</h2>

<p>Vad du faktiskt vill ha är enkelt: sänk Slacks volym till 10–15 % medan du håller allt annat på normala nivåer. Slack-pings är hörbara om du lyssnar efter dem, men de avbryter inte ditt flöde. Musik stannar på full volym. Samtal stannar på full volym.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger Slack sitt eget oberoende volymreglage. Ange det till vilken nivå som helst som fungerar för dig – eller tysta det helt med ett klick. När du är redo att uppmärksamma Slack igen, avtysta det och volymen återgår till där den var.</p>

<img src="/apps/sounddial.png" alt="SoundDial med Slack tystat och Spotify spelande på normal volym på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Det ideala Slack-arbetsflödet</h3>
<ul>
  <li><strong>Fokustid:</strong> Slack på 10 % eller tystat. Spotify på 40 %. Inga avbrott.</li>
  <li><strong>Tillgänglig tid:</strong> Slack på 40 %. Notiser märks utan att vara chockerande.</li>
  <li><strong>Mötestid:</strong> Slack tystat. Zoom på 100 %. Auto-ducking hanterar resten.</li>
</ul>

<p>Spara varje av dessa som en <strong>volymprofil</strong> i SoundDial och byt mellan dem med ett klick.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Hämta SoundDial i Mac App Store</a> – 14,99 € engångsköp, ingen prenumeration, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Hur man ställer in volymprofiler för olika situationer på Mac",
    description:
      "Olika volyminställningar för möten, fokusarbete, spel och avkoppling – kan växlas med ett klick. Så här fungerar volymprofiler på macOS.",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>Klockan 9 på morgonen är du på ett Zoom-samtal – du vill ha Zoom på 100 %, Spotify på ljudlöst, Slack på ljudlöst. Klockan 10 på morgonen avslutas samtalet — du vill ha Spotify på 40 %, Slack på 15 %, Zoom spelar ingen roll. Vid lunchtid spelar du – spela på 60 %, Discord på 100 %, allt annat på tyst. Vid 18-tiden tittar du på YouTube – webbläsaren är 80 %, allt annat tyst.</p>

<p>Varje situation har en unik ideal volymkonfiguration. Och varje gång situationen förändras måste du justera fem eller sex appar manuellt. Eller så kan du spara varje setup som en profil och byta med ett klick.</p>

<h2>Vad är volymprofiler?</h2>

<p>En volymprofil är en sparad ögonblicksbild av varje apps volym och mute-status. Du konfigurerar dina appar som du vill — Spotify på 30 %, Zoom på 100 %, Slack på ljudlöst — och sparar sedan det som en namngiven profil som "Arbete" eller "Möte." Senare applicerar du profilen och varje app hoppar direkt till sin sparade volymnivå.</p>

<p>Tänk på det som display-förinställningar för ljud: precis som du kanske har en display-konfiguration för "skrivbordssetup" kontra "presentation mode", låter volymprofiler dig växla mellan ljudkonfigurationer utan att manuellt justera varje app.</p>

<h2>macOS har inga volymprofiler</h2>

<p>macOS har fokuslägen (Stör ej, Arbete, Personligt, etc.) som styr vilka notiser som går igenom. Men Focus-lägen styr inte volymnivåerna. De kan helt undertrycka notisljud, men de kan inte ställa in Spotify på 30 % eller Zoom på 100 %. Det finns inget inbyggt sätt att spara och återställa volymkonfigurationer per app.</p>

<h2>Att skapa profiler med SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Inkluderar ett inbyggt profilsystem. Så här ställer du in det:</p>

<h3>Skapa en profil</h3>
<ol>
  <li>Öppna SoundDial från menyfältet</li>
  <li>Justera varje apps volym efter hur du vill ha den för en specifik situation</li>
  <li>Klicka på "+"-knappen i profildelen</li>
  <li>Ge det ett namn (t.ex. "Möte") och välj en ikon</li>
  <li>Klart — din nuvarande volymkonfiguration sparas</li>
</ol>

<h3>Switchprofiler</h3>
<p>Dina sparade profiler visas som knappar i SoundDial:s popover. Klicka på en och varje app byter omedelbart till volymerna som sparats i den profilen. Ett klick ersätter fem eller sex manuella justeringar.</p>

<img src="/apps/sounddial.png" alt="SoundDial volymprofiler — ett klick växlar mellan mötes-, fokus- och avkopplingslägena på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Exempelprofiler</h3>

<p><strong>Möte</strong></p>
<ul>
  <li>Zoom / Teams: 100%</li>
  <li>Spotify: avstängt</li>
  <li>Slack: dämpad</li>
  <li>Webbläsare: tystnad</li>
</ul>

<p><strong>Fokusarbete</strong></p>
<ul>
  <li>Spotify: 35 %</li>
  <li>Slack: 10%</li>
  <li>Mail: tyst.</li>
  <li>Webbläsare: 50 %</li>
</ul>

<p><strong>Spel</strong></p>
<ul>
  <li>Spel: 60%</li>
  <li>Discord: 100%</li>
  <li>Spotify: 20%</li>
  <li>Allt annat: dämpat</li>
</ul>

<p><strong>Ta det lugnt</strong></p>
<ul>
  <li>Spotify: 70%</li>
  <li>Webbläsare: 60 %</li>
  <li>Notiser: 20 %</li>
</ul>

<h3>Uppdatera profiler</h3>
<p>Om dina föredragna volymer ändras över tid, justera bara reglagen och uppdatera profilen. Nästa gång du applicerar det använder den de nya inställningarna.</p>

<h2>Profiler + automatisk ducking = helt automatisk</h2>

<p>Kombinera profiler med SoundDial:s automatiska ducking-funktion och du behöver sällan röra volymen alls. Applicera din "Focus Work"-profil på morgonen. När ett samtal kommer in, sänker automatisk ducking allt utom samtalsappen. När samtalet avslutas återgår allt till dina profilnivåer. I slutet av dagen, byt till "Chill" med ett klick.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Zoom-samtalsvolymen för låg på Mac? Hur man förstärker den",
    description:
      "Du hör knappt folk på Zoom ens på maxvolym. Här är alla lösningar – från Zoom-inställningar till att höja samtalsljudet över 100 % med en volymmixer per app.",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>Du är på ett Zoom-samtal. Den andra personen pratar, men deras röst är knappt hörbar. Din Mac volym är på max. Zooms högtalarvolym är på max. Du lutar dig mot skärmen och anstränger dig för att höra. Det här borde inte vara så här svårt.</p>

<p>Låg volym på Zoom-samtal är mycket vanligt och har flera orsaker. Låt oss gå igenom varje lösning, från enkla inställningskontroller till att höja Zooms ljud över dess normala gräns.</p>

<h2>1. Kontrollera Zooms ljudutgångsinställningar</h2>

<p>Öppna Zoom → inställningar → ljud. Under "Speaker", se till:</p>
<ul>
  <li>Rätt utgångsenhet väljs (inte en inaktiv skärm eller frånkopplad enhet)</li>
  <li>Högtalarvolymreglaget är på max</li>
  <li>Klicka på "Testhögtalare" för att verifiera att du kan höra testtonen tydligt</li>
</ul>

<p>Om testtonen också är tyst ligger problemet mellan Zoom och dina högtalare – fortsätt med lösningarna nedan. Om testtonen är okej men de faktiska samtalen är tysta, har den andra deltagaren troligen ett mikrofonproblem på sin sida.</p>

<h2>2. Kontrollera din Mac utmatningsenhet</h2>

<p>Gå till Systeminställningar → ljud → utgång. Se till att rätt enhet är vald. Om du nyligen har kopplat in eller kopplat bort hörlurar, en skärm eller Bluetooth-enheter kan macOS ha bytt automatiskt till en oväntad utgång.</p>

<h2>3. Inaktivera Zooms automatiska volymjustering</h2>

<p>Zoom har en inställning för "Justera mikrofonvolym automatiskt" (Inställningar → ljud) som också kan påverka upplevda utgångsnivåer i vissa konfigurationer. Prova att inaktivera den och testa igen.</p>

<h2>4. Inaktivera bakgrundsljudsdämpning (tillfälligt)</h2>

<p>Zooms brusdämpning filtrerar aggressivt bakgrundsljud – men kan ibland minska den upplevda ljudstyrkan i den andra personens röst, särskilt i tysta miljöer. Prova att ställa "Undertryck bakgrundsbrus" till "Låg" eller "Auto" istället för "Hög".</p>

<h2>5. Kontrollera Bluetooth-codec</h2>

<p>Om du använder AirPods eller Bluetooth-hörlurar tvingar ett Zoom-samtal macOS att byta från den högkvalitativa AAC-codecen till den lägre kvaliteten på SCO (eftersom Zoom använder din mikrofon). SCO minskar ljudkvaliteten och kan göra samtalsljudet tystare och mer komprimerat.</p>

<p><strong>Fix:</strong> Använd en separat mikrofon (inbyggd Mac mikrofon eller USB-mikrofon) samtidigt som AirPods är utgångsenhet. Detta förhindrar codec-switchen — AirPods förblir i AAC-läge med bättre ljudkvalitet och volym.</p>

<h2>6. Återställ kärnljudet</h2>

<p>macOS ljuddaemon hamnar ibland i ett tillstånd där utgångsnivåerna sänks, särskilt efter vilo/vakna eller enhetsbyten. Öppna terminalen och kör:</p>
<p><code>Sudo Killall CoreAudiod</code></p>
<p>Ljudet startar om efter ett kort avbrott. Gå med i Zoom-samtalet igen och kolla om volymen har förbättrats.</p>

<h2>7. Öka Zooms volym över 100 %</h2>

<p>Om du har provat allt ovan och Zoom fortfarande är för tyst kan problemet vara att Zooms ljudutgång helt enkelt inte är tillräckligt hög för din setup. Vissa deltagare har tysta mikrofoner, och Zoom kan bara göra så mycket för att förstärka deras signal.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig höja volymen på vilken app som helst till <strong>200%</strong> — inklusive Zoom. Om en deltagare är för tyst, dra Zooms reglage till 150 % eller 180 %. Ljudsignalen förstärks bortom Zooms inbyggda max, vilket gör att även de tysta rösterna hörs.</p>

<img src="/apps/sounddial.png" alt="SoundDial att höja volymen på Zoom-samtal till 180 % på Mac för klarare ljud under videosamtal" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Den största fördelen: att boosta Zoom påverkar inget annat. Din musik, notiser och andra appar håller sig på sina nuvarande nivåer. Bara Zoom blir högre.</p>

<p>Detta fungerar också för <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack-huddles, Webex</strong>, och alla andra samtalsappar. Om du kan höra det kan SoundDial förstärka det.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Hur sänker man Spotify utan att sänka allt annat på Mac",
    description:
      "Du vill ha Spotify som bakgrundsmusik, men om du sänker volymen med volymtangenterna blir ditt samtal och allt annat också tystare. Här är lösningen.",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>Du jobbar. Spotify spelar bakgrundsmusik. Det är lite för högljutt – konkurrerar med podden i en annan flik eller gör det svårt att fokusera. Du trycker på volymknappen. Spotify blir tystare. Men det gör allt annat också – ditt Zoom-samtal, dina notisljud, ditt webbläsarljud. Allt tystare. Det var inte vad du ville.</p>

<p>Detta händer eftersom macOS har en volymreglagare. Tryck på volymknappen så justerar den <em>Systemvolym</em>, vilket skalar varje app lika. Det finns inget sätt att säga "sänk bara Spotify" med de inbyggda kontrollerna.</p>

<h2>Lösningen: Spotifys volym i appen</h2>

<p>Spotify har en egen volymreglage nere till höger i appen (eller längst ner i spelaren). Du kan sänka detta oberoende av systemvolymen. Om ditt system är på 80 % och Spotifys reglage på 30 %, kommer Spotify att spela på effektivt 24 % medan allt annat stannar på 80 %.</p>

<p><strong>Problemet:</strong> Du måste byta till Spotify-fönstret, hitta reglagen, justera den och sedan byta tillbaka till det du höll på med. Och Spotifys reglage är liten, opprecis och visar ingen procent – bara en visuell stapel. Om du är i ett möte och snabbt behöver sänka musiken är det inte idealiskt att fumla med en liten reglage i en annan app.</p>

<h2>Den verkliga lösningen: volymkontroll per app</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Sätter en volymreglage för varje app i menyfältet. För att sänka Spotify utan att påverka något annat:</p>

<ol>
  <li>Klicka på SoundDial-ikonen i menyfältet</li>
  <li>Hitta Spotify i listan</li>
  <li>Dra dess reglage nedåt</li>
</ol>

<p>Klart. Spotify är tystare. Zoom är oförändrat. Notiserna är oförändrade. Allt annat är oförändrat. Du lämnade inte din nuvarande app – menyfältet öppnas precis där du är.</p>

<img src="/apps/sounddial.png" alt="SoundDial att sänka Spotify-volymen oberoende samtidigt som andra appar hålls på full volym på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Ännu bättre: spara den som en profil</h2>

<p>Om du regelbundet vill ha Spotify på en lägre bakgrundsnivå medan du jobbar, spara din föredragna volyminställning som en profil. Skapa en "Jobb"-profil med Spotify på 25 %, Zoom på 100 % och Slack på 15 %. Nästa gång du sätter dig för att arbeta, använd profilen med ett klick istället för att justera varje app individuellt.</p>

<h2>Ännu bättre: automatisk ducking under samtal</h2>

<p>SoundDial kan automatiskt sänka Spotify när du går med i ett samtal. Aktivera automatisk ducking i inställningarna, välj hur mycket som vill minska bakgrundsljudet (standard 30 %), och SoundDial hanterar resten. Din musik duckar när samtalet startar och kommer tillbaka när det avslutas. Ingen manuell justering alls.</p>

<p>Detta är arbetsflödet macOS borde stödja nativt: "Spotify på den här nivån, allt annat på den nivån." Eftersom Apple inte har byggt det, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> fyller tomrummet.</p>

<p>Engångsköp på <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Ingen prenumeration. macOS 14,2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Har macOS Tahoe volymkontroll per app?",
    description:
      "macOS Tahoe (26 macOS kom med stora uppdateringar, men lade Apple till en volymmixer till slut? Här är svaret – och hur du får volymkontroll per app just nu.",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>Varje år hoppas Mac användare att nästa macOS release äntligen kommer att inkludera en volymmixer. Varje år blir de besvikna. Med macOS Tahoe (macOS 26) levererade Apple ett omdesignat gränssnitt, nya systemfunktioner och stora förbättringar under huven. Men lade de till volymkontroll per app?</p>

<h2>Det korta svaret: nej</h2>

<p>macOS Tahoe inkluderar ingen inbyggd volymmixer. Det finns ingen volymkontroll per app i Systeminställningar, Kontrollcenter eller menyfältet. Ljudupplevelsen är densamma som i alla tidigare macOS släpp: en systemvolymreglage som styr allt samtidigt.</p>

<p>Apples Kontrollcenter visar fortfarande en enda volymreglag. Ljudinställningarna i Systeminställningar låter dig fortfarande välja en utgångsenhet och justera en mastervolym. Det finns ingen dold funktion, inget avancerat alternativ och inget nytt API som exponerar volym per app för användarna.</p>

<h2>Vad macOS Tahoe förbättrade för ljud</h2>

<p>Även om volymen per app fortfarande saknas, har Tahoe tagit med sig några ljudrelaterade förbättringar:</p>

<ul>
  <li><strong>Förbättrad Bluetooth-ljudstabilitet</strong> — färre frånkopplingar och problem med codec-växlingar med AirPods och tredjepartshörlurar</li>
  <li><strong>Bättre rumslig ljudbehandling</strong> — förbättrad huvudspårning och mer exakt rumslig rendering för stödd innehåll</li>
  <li><strong>Core Audio-prestanda</strong> — lägre latens för professionella ljudapplikationer och musikproduktion</li>
</ul>

<p>Ingen av dessa besvarar den grundläggande begäran: "Låt mig sänka Spotify utan att påverka Zoom."</p>

<h2>Kommer Apple någonsin att lägga till en volymmixer?</h2>

<p>Det finns inga tecken på att Apple planerar att lägga till denna funktion. Den har inte dykt upp i någon macOS beta, WWDC-session eller känd roadmap. Apples ljuddesignfilosofi fortsätter att föredra enkelhet – en reglage för allt.</p>

<p>Ironiskt nog stöder Apples eget Core Audio-ramverk fullt ut ljudtapping per process och volymkontroll. Audio Tap API:et som introducerades i macOS 14 (Sonoma) gjorde det ännu enklare för utvecklare att bygga ljudverktyg per app. Apple byggde infrastrukturen – de har bara inte byggt användargränssnittet för den.</p>

<h2>Hur man får volymkontroll per app på macOS Tahoe</h2>

<p>Eftersom Apple inte kommer att bygga det, fyller tredjepartsappar tomrummet. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> är en inbyggd menyradsapp macOS som ger dig en volymmixer – oberoende volymreglage för varje pågående applikation.</p>

<img src="/apps/sounddial.png" alt="SoundDial att erbjuda volymkontroll per app på macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial är fullt kompatibel med macOS Tahoe och använder Apples moderna Core Audio Tap API — inga tredjepartsdrivrutiner eller kärntillägg krävs. Den fungerar smidigt med macOS säkerhetsmodell och stör inte andra ljudappar.</p>

<p>Vad du får:</p>
<ul>
  <li><strong>Volymreglage per app</strong> — 0 % till 200 % för varje app</li>
  <li><strong>Mute per app</strong> — ett klick för att tysta vilken app som helst</li>
  <li><strong>Volymprofiler</strong> — spara konfigurationer och byta omedelbart</li>
  <li><strong>Auto-ducking</strong> — bakgrundsljudet sänks automatiskt under samtal</li>
  <li><strong>Volymökning</strong> — förstärka tysta appar bortom 100 %</li>
  <li><strong>Volymminne</strong> — minns varje apps volym mellan omstarter</li>
  <li><strong>Tangentbordsgenvägar</strong> — växla mixern eller muta allt från tangentbordet</li>
</ul>

<p>Engångsköp på <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Ingen prenumeration. macOS 14,2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Hur man spelar musik på högtalare medan man tar samtal med hörlurar (Mac)",
    description:
      "Vill du ha Spotify på dina skrivbordshögtalare och Zooma in dina AirPods samtidigt? macOS gör det inte lätt – här är vad som faktiskt fungerar.",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>Här är en rimlig sak du kan vilja göra: spela musik genom dina skrivbordshögtalare medan du tar ett Zoom-samtal via dina AirPods. Musiken fyller rummet, samtalet är privat i dina öron. Det är helt logiskt.</p>

<p>macOS säger nej. När du väljer en ljudutgångsenhet, <em>varje</em> appen använder den. Byt till AirPods för Zoom och Spotify byter också till AirPods. Byt till högtalare för Spotify och Zoom går också över till högtalare. En utgångsenhet för allt. Inga undantag.</p>

<h2>Varför macOS inte kan göra detta inhemskt</h2>

<p>macOS leder allt ljud genom en enda vald utgångsenhet. Du väljer "MacBook Pro Speakers" eller "AirPods Pro" i Systeminställningarna → Ljud → Utgång, och varje app skickar ljud till den enheten. Det finns ingen inbyggd ljudrouting per app.</p>

<p>Denna design är logisk för enkelhetens skull — de flesta vill att all deras ljud ska komma från samma plats. Men det faller isär i samma stund som du vill ha olika appar på olika utgångar.</p>

<h2>Den aggregerade enhetens lösning</h2>

<p>macOS Audio MIDI Setup (finns i Applications → Utilities) låter dig skapa en "Aggregate Device" som kombinerar flera utgångar till en. Dock skickar en aggregerad enhet <em>Samma ljud</em> Till alla kombinerade utgångar – den låter dig inte välja vilken app som går till vilken utgång. Den är designad för flerhögtalaruppsättningar, inte för routing per app.</p>

<h2>Multi-output-enhetslösningen</h2>

<p>Precis som med aggregatenheter kan du skapa en "Multi-Output Device" i Audio MIDI Setup. Detta skickar identiskt ljud till flera utgångar samtidigt. Återigen, ljudet är samma överallt — du kan inte dirigera Spotify till högtalare och Zoom till hörlurar på det sättet.</p>

<h2>Vad som faktiskt fungerar: ljudroutningsappar per app</h2>

<p>För att verkligen kunna dirigera olika appar till olika utdata behöver du en tredjeparts ljudroutningsapp som fångar upp varje apps ljud och skickar det till den utgång du anger. Appar som SoundSource (från Rogue Amoeba) stödjer detta – de låter dig tilldela specifika utgångsenheter till individuella appar.</p>

<h2>Ett enklare tillvägagångssätt: volymbaserad separation</h2>

<p>Om ditt huvudmål är att höra ditt samtal tydligt över musiken (istället för att koppla dem till fysiskt olika enheter), löser volymkontroll per app problemet enklare.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Ger varje app en egen volymreglagare. Under ett samtal kan du:</p>

<ul>
  <li>Ställ in Zoom/Teams/FaceTime till <strong>100%</strong></li>
  <li>Sänk Spotify till <strong>20%</strong></li>
  <li>Stäng av ljudet av allt annat</li>
</ul>

<p>Ditt samtal är kristallklart. Musik är en subtil bakgrund. Ingen enhetsväxling behövs.</p>

<img src="/apps/sounddial.png" alt="SoundDial att Zoom visas på full volym och Spotify sänkt under ett samtal på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ännu bättre: SoundDial <strong>Auto-ducking</strong> gör detta automatiskt. När du går med i ett samtal känner den av att mikrofonen aktiveras och sänker alla bakgrundsappar till en nivå du konfigurerar (standard 30%). När samtalet avslutas återgår allt till det normala. Ingen manuell reglage behövs.</p>

<p>För de flesta löser detta det faktiska problemet — "Jag kan inte höra mitt samtal över min musik" — utan komplexiteten i att routa olika appar till olika fysiska enheter.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac volymen ändras av sig själv: Hur man fixar det",
    description:
      "Din Mac volym hoppar slumpmässigt upp, sjunker eller återställs till en annan nivå. Här är alla kända orsaker och hur man stoppar det.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>Du ställer in volymen på Mac till en bekväm nivå. Du tittar bort. När du kommer tillbaka är det annorlunda. Högre. Tystare. Återställ till max. Det händer hela tiden, och du kan inte lista ut varför.</p>

<p>Detta är ett av de mest frustrerande Mac ljudproblemen eftersom det känns slumpmässigt. Men det är nästan aldrig slumpmässigt – det finns alltid en specifik utlösare. Här är alla kända orsaker och hur du kan åtgärda var och en.</p>

<h2>1. Bluetooth-enhetsåteranslutning</h2>

<p>Detta är den vanligaste orsaken. När en Bluetooth-enhet (AirPods, högtalare, hörlurar) kopplas upp eller från, återställer macOS volymen till den nivå som senast användes med den enheten. Så om du var på 30 % på dina högtalare och AirPods automatiskt ansluter kan volymen hoppa till 80 % (senaste AirPods-nivån).</p>

<p><strong>Fix:</strong> macOS minns volymnivåer per utgångsenhet. Varje gång du byter, ställ in den där du vill ha den. Med tiden kommer rätt nivåer att komma ihåg för varje enhet. Om en Bluetooth-enhet oväntat ansluter automatiskt, gå till Systeminställningar → Bluetooth och ta bort enheter du inte aktivt använder.</p>

<h2>2. HDMI/DisplayPort-utgång</h2>

<p>Att ansluta eller koppla bort en extern skärm via HDMI eller DisplayPort kan orsaka volymförändringar. Vissa skärmar är också ljudutgångsenheter och macOS växlar automatiskt till dem. När skärmen går i viloläge eller kopplar bort byter macOS tillbaka till högtalare och kan återställa volymen.</p>

<p><strong>Fix:</strong> Gå till Systeminställningar → Ljud → utgång och kontrollera om macOS automatiskt växlar till din skärms högtalare. Om du inte vill ha ljud genom din skärm, välj din föredragna utgångsenhet manuellt. Vissa skärmar kan ha sin ljudutgång avstängd i sina egna OSD-inställningar (on-screen display).</p>

<h2>3. En app ändrar volymen</h2>

<p>Vissa appar justerar systemvolymen programmatiskt. Zoom, till exempel, har en inställning "Justera mikrofonvolym automatiskt" som också kan påverka utgångsvolymen. Musikappar, poddappar och vissa spel kan också justera volymen när de startar eller när specifika händelser inträffar.</p>

<p><strong>Fix:</strong> Kolla dina nyligen öppnade appar för ljudrelaterade inställningar. I Zoom: Inställningar → ljud → avmarkera "Justera mikrofonvolym automatiskt." I Spotify: kontrollera om volymnormalisering orsakar upplevda volymförändringar (Inställningar → Uppspelning → Normalisera volym).</p>

<h2>4. Tangentbords- eller Touch Bar-tryck av misslyckande</h2>

<p>Om du har ett tangentbord med volymtangenter (varje Mac tangentbord har det), kan oavsiktliga tryck – eller en fastnaden tangent – ändra volymen. Touch Bar på äldre MacBook Pro-modeller är särskilt benägen för oavsiktliga volymförändringar när man nuddar den.</p>

<p><strong>Fix:</strong> Kontrollera om en volymknapp sitter fast genom att titta på volymindikatorn utan att röra något. För Touch Bar-modeller, anpassa Touch Bar i Systeminställningar → Tangentbord → Touch Bar-inställningar för att ta bort volymreglaget eller flytta det till en mindre tillgänglig position.</p>

<h2>5. macOS ljuddemonåterställning</h2>

<p>Efter vilo-/vakencykler startar macOS ibland om och återställer volymen till en standard- eller tidigare cachenivå. Detta är en systemnivåbugg som förekommer i olika macOS versioner.</p>

<p><strong>Fix:</strong> Om volymen återställs konsekvent efter att du vaknat från viloläge, försök starta om coreaudiod manuellt:</p>
<p><code>Sudo Killall CoreAudiod</code></p>
<p>Om problemet kvarstår i macOS uppdateringar kan det lösas i en framtida uppdatering. Under tiden kan ett verktyg som minns och återställer volymnivåer per app kompensera.</p>

<h2>6. Tillgänglighetsinställningar</h2>

<p>Vissa tillgänglighetsfunktioner kan störa ljudet. Kontrollera Systeminställningar → Tillgänglighet → Ljud för oväntade inställningar. Kontrollera också om VoiceOver eller Switch Control är delvis aktiverat – dessa kan ge oväntade volymbeteenden.</p>

<h2>Lås dina volymer per app med SoundDial</h2>

<p>Även om du inte kan förhindra att macOS ändrar systemvolymen kan du skydda din <em>per app</em> Volymbalans. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Kommer ihåg volymnivån på varje app oberoende av varandra. När en app startar om eller när din Mac vaknar från viloläge, återställer SoundDial varje app till dess sparade volym.</p>

<img src="/apps/sounddial.png" alt="SoundDial att komma ihåg volymnivåer per app vid omstarter på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Detta innebär att även om systemvolymen ändras förblir din appnivåbalans konstant:</p>
<ul>
  <li>Spotify håller sig på 40 % oavsett systemvolymförändringar</li>
  <li>Zoom förblir på 100 % även efter att jag återanslutit Bluetooth</li>
  <li>Slack förblir dämpad även efter en omstart</li>
</ul>

<p>Kombinerat med <strong>volymprofiler</strong>, kan du omedelbart återställa din föredragna volymkonfiguration för vilken situation som helst — ett klick för att komma tillbaka till exakt där du vill vara, oavsett vad macOS gjorde medan du inte tittade.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Bästa volymmixer-apparna för Mac år 2026",
    description:
      "En kompromisslös jämförelse av varje Mac app som ger dig volymkontroll per app. Funktioner, pris och vilken som faktiskt är värd att använda.",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS har ingen inbyggd volymmixer. Om du vill kontrollera volymen på enskilda appar – sänk Spotify utan att påverka Zoom, stäng av ljudlös Slack utan att stänga av allt – behöver du en tredjepartsapp.</p>

<p>Det finns flera alternativ. Denna guide jämför de mest anmärkningsvärda baserat på funktioner, prissättning, kompatibilitet och faktisk användbarhet. Inga affiliatelänkar, inga sponsrade tips.</p>

<h2>Vad du bör leta efter</h2>

<p>Innan vi jämför appar, här är vad som är viktigt i en Mac volymmixer:</p>

<ul>
  <li><strong>Volymreglage per app</strong> — oberoende kontroll för varje körande app</li>
  <li><strong>Volymomfängelse</strong> — kan man gå under 100% OCH över 100% (boost)?</li>
  <li><strong>Mute per app</strong> — tysta en app utan att röra dess volymläge</li>
  <li><strong>Profiler</strong> — spara och växla mellan volymkonfigurationer</li>
  <li><strong>Auto-ducking</strong> — sänker automatiskt musiken under samtal</li>
  <li><strong>Menyfältsintegration</strong> — snabb åtkomst utan att byta app</li>
  <li><strong>macOS kompatibilitet</strong> — fungerar på den senaste macOS versionen</li>
  <li><strong>Prissättningsmodell</strong> — engångsköp vs. prenumeration</li>
</ul>

<h2>Alternativen</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> är en inbyggd menyradsapp macOS som fokuserar på att göra en sak bra: volymkontroll per app.</p>

<ul>
  <li><strong>Volym per app:</strong> Ja, 0 % till 200 %</li>
  <li><strong>Tyst per app:</strong> Ja, ett klick</li>
  <li><strong>Volymökning:</strong> Ja, upp till 200 %</li>
  <li><strong>Profiler:</strong> Ja, med egna namn och ikoner</li>
  <li><strong>Automatisk ducking:</strong> Ja, med konfigurerbar anknivå</li>
  <li><strong>Tangentbordsgenvägar:</strong> Ja (växla mixern, stäng av ljudet av alla)</li>
  <li><strong>Utgångsenhetsomkoppling:</strong> Ja, från samma panel</li>
  <li><strong>Volymminne:</strong> Ja, den minns varje apps volym mellan omstarter</li>
  <li><strong>Pris:</strong> €14,99 engångsköp (ingen prenumeration) — mindre än hälften av priset för SoundSource</li>
  <li><strong>Kräver:</strong> macOS 14,2+</li>
  <li><strong>Tillgänglig på:</strong> Mac App Store (Apple-granskad, sandboxad, inga systemdrivrutiner)</li>
</ul>

<p>SoundDial använder Apples moderna Core Audio Tap API för ren ljudkontroll per process. Den är lätt, körs helt i menyfältet och kräver ingen komplicerad installation. För 14,99 € är den betydligt billigare än SoundSource (39 dollar) samtidigt som den inkluderar funktioner som SoundSource saknar – volymprofiler och automatisk ducking. Och eftersom det finns på Mac App Store är det Apple-granskat, sandboxat och installeras smidigt utan att ladda ner DMG:er eller installera systemdrivrutiner.</p>

<img src="/apps/sounddial.png" alt="SoundDial volymmixer per app som visar individuella volymreglage på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>SoundSource (Rogue Amoeba)</h3>

<p>SoundSource är ett av de äldsta och mest etablerade Mac ljudverktygen. Det är kraftfullt och funktionsrikt och riktar sig till avancerade användare och ljudproffs.</p>

<ul>
  <li><strong>Volym per app:</strong> Ja</li>
  <li><strong>Tyst per app:</strong> Ja</li>
  <li><strong>Volymökning:</strong> Ja</li>
  <li><strong>Per app EQ:</strong> Ja (inbyggt och stöd för AU-plugins)</li>
  <li><strong>Utgångsrutting per app:</strong> Ja (skicka olika appar till olika högtalare)</li>
  <li><strong>Profiler:</strong> Inget inbyggt profilsystem</li>
  <li><strong>Automatisk ducking:</strong> Nej</li>
  <li><strong>Pris:</strong> 39 USD (engångs, större uppgraderingar kan kräva extra inköp)</li>
  <li><strong>Kräver:</strong> macOS 12+ (installerar en systemljuddrivrutin)</li>
</ul>

<p>SoundSource är det mest kraftfulla alternativet om du behöver EQ per app och ljudeffektskedjor. Den installerar en systemnivå-ljuddrivrutin (ACE) för att fånga upp ljud, vilket gör den mycket kapabel men också mer påträngande. Priset på 39 dollar är högre än de flesta alternativ, och det finns inget automatiskt ducking eller profilsystem.</p>

<h3>Bakgrundsmusik (gratis, öppen källkod)</h3>

<p>Background Music är en gratis, öppen källkodsapp som erbjuder grundläggande volymkontroll per app. Det är ett populärt val eftersom det är gratis.</p>

<ul>
  <li><strong>Volym per app:</strong> Ja</li>
  <li><strong>Tyst per app:</strong> Ja</li>
  <li><strong>Volymökning:</strong> Nej (endast 0-100%)</li>
  <li><strong>Automatisk pausmusik:</strong> Ja (pausar musiken när en annan app spelar ljud)</li>
  <li><strong>Profiler:</strong> Nej</li>
  <li><strong>Automatisk ducking:</strong> Nej (auto-paus är annorlunda än auto-duck)</li>
  <li><strong>Pris:</strong> Gratis</li>
  <li><strong>Kräver:</strong> macOS 10.13+ (installerar en virtuell ljudenhet)</li>
</ul>

<p>Background Music är ett stabilt gratisalternativ för grundläggande volym per app. Den har dock inte uppdaterats konsekvent för nyare macOS versioner. Användare rapporterar problem på macOS Sequoia och Tahoe — ljudfel, att den virtuella ljudenheten inte kan installeras eller att appen inte upptäcker vissa applikationer. Den kan inte heller öka volymen över 100 %, har inga profiler och ingen automatisk ducking.</p>

<h3>eqMac</h3>

<p>eqMac är främst en equalizer-app som även inkluderar vissa volymmixningsfunktioner.</p>

<ul>
  <li><strong>Volym per app:</strong> Limited (fokuserad på EQ, inte mixning)</li>
  <li><strong>Systemomfattande EQ:</strong> Ja, med flera bandalternativ</li>
  <li><strong>Volymökning:</strong> Ja</li>
  <li><strong>Profiler:</strong> EQ-presets (inte volymprofiler)</li>
  <li><strong>Automatisk ducking:</strong> Nej</li>
  <li><strong>Pris:</strong> Gratis prenumeration + Pro</li>
  <li><strong>Kräver:</strong> macOS 10.14+</li>
</ul>

<p>eqMac är det bättre valet om ditt huvudsakliga behov är systemomfattande equalizering (basförstärkning, diskantjustering, etc.) snarare än volymkontroll per app. Dess volymmixningsmöjligheter är sekundära till EQ-funktionerna.</p>

<h2>Snabb jämförelsetabell</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Kännetecken</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Bakgrundsmusik</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volym per app</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volymökning (200%)</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volymprofiler</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per app EQ</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Utgångsrutting per app</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Tangentbordsgenvägar</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Systemdrivrutin krävs</td>
  <td style="text-align:center;padding:10px 12px;">Nej</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
  <td style="text-align:center;padding:10px 12px;">Ja</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pris</td>
  <td style="text-align:center;padding:10px 12px;">Engångsutnämning</td>
  <td style="text-align:center;padding:10px 12px;">39 dollar</td>
  <td style="text-align:center;padding:10px 12px;">Gratis</td>
</tr>
</tbody>
</table>

<h2>Vilken ska du välja?</h2>

<ul>
  <li><strong>Om du vill ha volymkontroll per app, profiler och automatisk ducking:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — den mest kompletta volymmixern för priset, med funktioner (profiler, automatisk ducking) som ännu dyrare alternativ saknar.</li>
  <li><strong>Om du behöver EQ per app och ljudrouting:</strong> SoundSource — det mest kraftfulla alternativet, riktat till ljudproffs som behöver effektkedjor och utgångsrouting per app.</li>
  <li><strong>Om du vill ha något gratis och grundläggande:</strong> Bakgrundsmusik — okej för enkel volym per app, men kan ha kompatibilitetsproblem på nyare macOS versioner och saknar boost/profiler/ducking.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "Är YouTube för tyst i Safari eller Chrome på Mac? Fixa det omedelbart",
    description:
      "Vissa YouTube-videor är knappt hörbara även på maxvolym. Här är varför webbläsarljudet ofta är tystare än andra appar – och hur du kan höja det över 100 % på Mac.",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>Du klickar på en YouTube-video. Skaparen talar, men man hör dem knappt. Systemvolymen är maxad. YouTubes spelarvolym är på max. Du lutar dig närmare dina högtalare. Fortfarande för tyst. Du öppnar Spotify – musiken spelas på full volym. Så det är inte dina högtalare. Det är YouTube. Eller mer precist, det är videon.</p>

<p>Detta är otroligt vanligt och det är ingen bugg. Vissa YouTube-videor mastras bara på lägre volym än andra, och macOS ger dig inget sätt att selektivt förstärka webbläsarens ljud.</p>

<h2>Varför vissa YouTube-videor är så tysta</h2>

<h3>Videon spelades in med låg volym</h3>
<p>Inte alla skapare har professionell ljudutrustning. En video inspelad med en laptopmikrofon från andra sidan rummet blir betydligt tystare än en inspelad med en riktig kondensatormikrofon. YouTube normaliserar volymen till viss del (deras "loudness normalization" siktar på -14 LUFS), men detta kompenserar inte helt för extremt tyst källljud.</p>

<h3>YouTubes normalisering av ljudstyrka</h3>
<p>YouTube justerar automatiskt videovolymen så att höga och tysta videor spelas upp på ungefär samma nivå. För högljudda videor betyder det att sänka volymen. För tysta videor betyder det att höja volymen – men bara till en viss gräns. Om ljudkällan är mycket tyst kan normalisering bara göra så mycket utan att introducera brus.</p>

<h3>Webbläsarljud är en andra klassens medborgare på macOS</h3>
<p>Safari och Chrome hanterar ljud annorlunda än dedikerade medieappar. De skickar ut via webbläsarens ljudmotor, som har sitt eget volymtak. Det finns inget sätt att förstärka ljudet från en webbläsarflik från macOS. Webbläsaren är en app med en volymnivå – även om du har tio flikar som spelar ljud på olika nivåer.</p>

<h2>Snabba lösningar att prova</h2>

<h3>Kolla YouTubes spelarvolym</h3>
<p>Håll muspekaren över högtalarikonen på YouTube-spelaren och se till att reglaget är på max. Det är lätt att av misstag dra ner detta, och det återställs oberoende av systemets volym.</p>

<h3>Inaktivera YouTubes ljudstyrkesnormalisering</h3>
<p>YouTube erbjuder ingen användarvänd knapp för ljudstyrkesnormalisering. Dock kan vissa webbläsartillägg kringgå det. Sök i din webbläsares tilläggsbutik efter "YouTube volymnormalizer" eller "YouTube audio enhancer."</p>

<h3>Prova en annan webbläsare</h3>
<p>Safari och Chrome hanterar ljud olika. Om en video är för tyst i en webbläsare, prova den andra. Chrome hanterar särskilt ljud genom en separat process ("renderaren"), vilket ibland kan leda till lägre utgång.</p>

<h2>Den verkliga lösningen: öka webbläsarvolymen över 100 %</h2>

<p>Det underliggande problemet är att macOS inte låter dig öka volymen i en specifik app över 100%. Din webbläsare är maxad, men "maxad" är inte tillräckligt högt.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> löser detta genom att ge varje app — inklusive Safari och Chrome — en separat volymreglage som går från 0 % till <strong>200%</strong>. Om en YouTube-video är för tyst, dra webbläsarens reglage till 150% eller 180%. Ljudet förstärks i realtid utan att påverka någon annan app.</p>

<img src="/apps/sounddial.png" alt="SoundDial att öka volymen i Safari-webbläsaren till 180 % för tysta YouTube-videor på Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Detta är särskilt användbart eftersom:</p>
<ul>
  <li><strong>Det är omedelbart.</strong> Klicka på menyradsikonen, dra reglaget. Du behöver inte installera en webbläsartillägg eller ändra några inställningar.</li>
  <li><strong>Det är per app.</strong> Att boosta Chrome gör inte Spotify högre. Varje app förblir självständig.</li>
  <li><strong>Det fungerar med vilken webbläsare som helst.</strong> Safari, Chrome, Firefox, Arc, Brave — om det är en app på din Mac kan SoundDial styra den.</li>
  <li><strong>Det går upp till 200%.</strong> Dubbla den normala volymtaket. Även den tystaste videon blir hörbar.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac Låter notiserna för högt i hörlurar? Här är lösningen",
    description:
      "Slack-pingar och macOS varningar är smärtsamt höga i dina hörlurar medan musiken är okej. Här är varför notisvolymen är annorlunda – och hur du kan tämja den.",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>Du har hörlurar på dig och lyssnar på musik på en bekväm volym på 40%. En Slack-notis utlöses. <em>DING.</em> Det är öronbedövande högt jämfört med din musik. Dina öron ringer. Du sliter av dig hörlurarna.</p>

<p>Detta händer eftersom macOS inte låter dig styra volymen på notiser jämfört med media separat. Din musik kan vara på en bekväm nivå, men varningsljud – Slack-pingar, Mail-notiser, kalenderpåminnelser macOS systemljud – dånar på full intensitet i förhållande till systemets volym.</p>

<h2>Varför notiser låter högre än musik</h2>

<p>Notisljud är korta, skarpa ljudutbrott som är utformade för att fånga din uppmärksamhet. De har hög toppvolym av design. Musiken, däremot, har ett brett dynamiskt omfång – tystare partier, högre partier och en övergripande behärskad nivå som är avsedd för långvarig lyssning.</p>

<p>När din systemvolym är på 40 %, ligger musiken på 40 % av sin masterade nivå – vilket kan vara bekväma 60–70 dB i dina hörlurar. Men en notifikations-ding vid 40% systemvolym kan ändå nå 80+ dB eftersom notifikationsljudfilen i sig mastras på en mycket högre toppnivå. Systemvolymen skalar lika mycket i procent, men deras startnivåer är mycket olika.</p>

<p>I hörlurar är detta värre. Ljudet går direkt in i hörselgången utan utrymme att försvinna, så den upplevda volymskillnaden mellan tyst musik och en skarp notifikationssignal förstärks.</p>

<h2>Inbyggda sätt att minska notisvolymen</h2>

<h3>Sänk larmvolymen</h3>
<p>macOS har en separat "Varningsvolym"-reglage gömd i inställningarna. Gå till <strong>Systeminställningar → ljud</strong> och leta efter <strong>Larmvolym</strong> Slider. Detta styr volymen på systemljud och varningar separat från huvudvolymen.</p>
<p><strong>Begränsning:</strong> Detta påverkar bara macOS systemvarningar (som felpip och skräpljud). Det påverkar inte notifikationsljud från appar som Slack, Discord eller Teams, som spelar upp sitt eget ljud via sin egen ljudmotor.</p>

<h3>Inaktivera notisljud per app</h3>
<p>Gå till <strong>Systeminställningar → Notiser</strong>, välj appen som är för högljudd och stäng av "Spela ljud för notiser." Detta tystar appens notiser helt.</p>
<p><strong>Begränsning:</strong> Det är allt eller inget. Du kan inte göra Slack-notiser <em>tystare</em> — bara helt på eller helt avstängt. Och du förlorar ljudsignalen som berättar att något hände utan att titta på skärmen.</p>

<h3>Använd fokuslägen</h3>
<p>Fokuslägen (Stör ej, Arbeta, etc.) kan undertrycka notifikationsljud från alla eller valda appar. Detta fungerar under djupfokuserade sessioner men är inte praktiskt hela dagen – då missar du viktiga notiser.</p>

<h2>Den verkliga lösningen: styr volymen på notiser självständigt</h2>

<p>Det du egentligen vill ha är enkelt: gör Slack tystare utan att göra din musik tystare. Sänk volymen på notisapparna till 15 % samtidigt som Spotify hålls på 50 %. macOS låter dig inte göra det här.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Gör det. Den ger varje app en egen volymreglag, så du kan ställa in notifieringsintensiva appar som Slack, Mail och Kalender till en mycket lägre volym samtidigt som du håller dina medieappar på en bekväm nivå.</p>

<img src="/apps/sounddial.png" alt="SoundDial visar Slack på låg volym och Spotify på normal volym — oberoende notifikationskontroll på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>En typisk hörlursvänlig uppsättning</h3>
<ul>
  <li><strong>Spotify / Musik</strong> — 50 % (bekväm lyssningsnivå)</li>
  <li><strong>Slack</strong> — 15 % (märkbart men inte överraskande)</li>
  <li><strong>Post</strong> — 10% (subtil ping, skakar dig inte)</li>
  <li><strong>Kalender</strong> — 20% (tillräckligt för att märka, inte smärtsamt)</li>
  <li><strong>Zoom / FaceTime</strong> — 90 % (tydligt samtalsljud)</li>
  <li><strong>Webbläsare</strong> — 40 % (matchar musiknivå för videouppspelning)</li>
</ul>

<p>Spara detta som en "Headphones"-profil i SoundDial och applicera det med ett klick varje gång du kopplar in det. Skapa en separat "Högtalare"-profil med olika proportioner när du arbetar vid ditt skrivbord.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Hur man stoppar Zoom från att sänka din musik på Mac",
    description:
      "Varje gång du går med i ett Zoom-samtal försvinner eller försvinner musiken. Här är varför det händer och hur du kan kontrollera vad som blir tystare under samtal – på dina villkor.",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>Du går med i ett Zoom-samtal. Spotify spelade på en behaglig volym. Samtalet kopplas upp och — din musik försvinner eller sjunker nästan till ingenting. Du rörde ingenting. Zoom (eller macOS) bestämde sig för att sänka din musik åt dig, utan att fråga.</p>

<p>Det driver folk till vansinne eftersom det är osynligt och automatiskt. Du stängde inte av ljudet av något. Du justerade inte en reglag. Något i systemet bestämde att din musik ska vara tystare, och du har inget uppenbart sätt att kontrollera den.</p>

<p>Här är vad som faktiskt händer och hur du kan ta tillbaka kontrollen.</p>

<h2>Varför din musik blir tystare under Zoom-samtal</h2>

<p>Det finns två möjliga orsaker:</p>

<h3>1. Zooms inbyggda ljudducking</h3>
<p>Zoom har sin egen ljudbehandling som kan påverka annat ljud på ditt system. I vissa konfigurationer minskar Zoom systemljudet när den aktiverar din mikrofon, så samtalsljudet blir tydligare. Detta är inte alltid uppenbart i Zooms inställningar.</p>

<p>Kontrollera Zoom → inställningar → ljud:</p>
<ul>
  <li>Leta efter någon inställning som helst "Justera mikrofonvolym automatiskt" och prova att inaktivera den</li>
  <li>Kolla i "Suppress background noise" — detta bearbetar ljud och kan påverka upplevd volym</li>
  <li>Se till att "Använd separat ljudenhet för simultantolkning" är avmarkerat om du inte behöver det</li>
</ul>

<h3>2. macOS codec-växling</h3>
<p>När Zoom aktiverar din mikrofon (särskilt med Bluetooth-hörlurar som AirPods) byter macOS från den högkvalitativa AAC-ljudkodeken till den lägre kvaliteten på SCO. Denna codecändring minskar ofta den totala ljudvolymen och kvaliteten. Det är inte Zooms fel specifikt — det händer med alla appar som använder mikrofonen via Bluetooth.</p>

<p>Om du använder AirPods eller andra Bluetooth-hörlurar och volymen sjunker när ett samtal startar, är detta troligen orsaken.</p>

<h2>Inbyggda fixar</h2>

<h3>Använd trådbundna hörlurar</h3>
<p>Problemet med Bluetooth-codec-växlingen försvinner helt med trådbundna hörlurar. En USB-C-hörlursadapter eller ett headset med inbyggd mikrofon undviker helt AAC→SCO-brytaren. Ljudkvaliteten är stabil före, under och efter samtal.</p>

<h3>Använd en separat mikrofon</h3>
<p>Om du använder din Mac inbyggda mikrofon (eller en extern USB-mikrofon) istället för din AirPods mikrofon behöver macOS inte byta Bluetooth-codec. Ställ in din inmatningsenhet till den inbyggda mikrofonen i Systeminställningar → Ljud → Ingång, samtidigt som AirPods är utgången. På så sätt håller AirPods sig i AAC-läge och volymen påverkas inte.</p>

<h3>Justera Zooms ljudinställningar</h3>
<p>I Zoom → Settings → Audio, experimentera med att inaktivera automatisk mikrofonjustering och bakgrundsljudsdämpning. Dessa funktioner kan störa andra appars ljudnivåer.</p>

<h2>Den verkliga lösningen: auto-ducking på dina villkor</h2>

<p>Det grundläggande problemet är att du inte har någon kontroll över <em>Hur mycket</em> Din musik sänks under samtal. Systemet fattar det beslutet åt dig, och det är oftast för aggressivt — musiken sjunker till nästan noll istället för en bekväm bakgrundsnivå.</p>

<p>Det du egentligen vill ha är konfigurerbar automatisk ducking: "när jag är på ett samtal, sänk min musik till 25% — inte noll, inte 50%, exakt 25%."</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger dig precis detta. Dess automatiska ducking-funktion övervakar din mikrofon och justerar automatiskt bakgrundsljudet när ett samtal startar – men <strong>Du styr anknivån</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial automatiska ducking-inställningar — justerbar volymminskning under Zoom-samtal på Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hur det fungerar</h3>
<ol>
  <li>Du ställer in din föredragna anknivå (10 % till 80 %)</li>
  <li>Du går med i ett Zoom-samtal – din mikrofon aktiveras</li>
  <li>SoundDial känner av samtalet och sänker bakgrundsappar till din konfigurerade nivå</li>
  <li>Ditt samtalsljud är på full volym</li>
  <li>Du lägger på — alla appar återgår till sin tidigare volym</li>
</ol>

<p>Skillnaden från Zoom/macOS-metoden:</p>
<ul>
  <li><strong>Du väljer nivån.</strong> 30% är en bra standard — musiken är hörbar men stör inte. Du kan justera allt från 10 % (nästan ljudlöst) till 80 % (knappt reducerat).</li>
  <li><strong>Den återställs perfekt.</strong> När samtalet avslutas återgår varje app exakt till där den var.</li>
  <li><strong>Den fungerar med alla kommunikationsappar.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Du kan stänga av det.</strong> Om du vill hantera volymen manuellt för ett specifikt samtal, stäng bara av automatisk ducking i SoundDial inställningar.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Volymen på AirPods för låg på Mac? Varje lösning förklarad",
    description:
      "Låter AirPods tysta på din Mac även på full volym? Här är alla orsaker – från hörlurssäkerhetsbegränsningar till Bluetooth-egenheter – och hur du kan åtgärda dem.",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>Dina AirPods fungerar bra på din iPhone. De är tillräckligt högljudda. Men koppla in dem i din Mac – trådlöst, såklart – och plötsligt är allt för tyst. Systemvolymen är maxad. Spotify är max. AirPods bara... inte tillräckligt högljudda.</p>

<p>Detta är en av de vanligaste ljudklagomålen från Mac användare med AirPods. Den goda nyheten: det går nästan alltid att fixa. De dåliga nyheterna: det finns ungefär sex olika saker som kan orsaka det, och du kan behöva kontrollera alla.</p>

<h2>1. Hörlurssäkerhet begränsar din volym</h2>

<p>Detta är den vanligaste orsaken. macOS har en inbyggd funktion som begränsar hörlursvolymen för att skydda din hörsel.</p>

<p>Gå till <strong>Systeminställningar → ljud- → hörlurssäkerhet</strong>.</p>

<p>Om "Minska högt ljud" är aktiverat begränsar macOS aktivt hur högt dina AirPods kan bli. Den mäter ljudexponering över tid och sänker volymen om den tror att du har lyssnat för högt för länge.</p>

<p><strong>Fix:</strong> Inaktivera "Minska högt ljud" helt, eller höj decibeltröskeln till en högre nivå. Du märker genast mer volymutrymme.</p>

<h2>2. Bluetooth-volymen är ur synk</h2>

<p>Bluetooth-ljud har två separata volymkontroller: en på Mac sidan och en på AirPods-sidan. Dessa ska vara synkroniserade, men ibland blir de ur synk — Mac visar 100 % men AirPods får faktiskt en lägre volymsignal.</p>

<p><strong>Fix:</strong> Koppla bort dina AirPods (systeminställningar → Bluetooth → klicka på "i" bredvid dina AirPods → koppla bort), vänta fem sekunder och koppla sedan upp igen. Detta återställer volymsynkroniseringen. Prova också att lägga tillbaka AirPods i fodralet, stänga locket, vänta tio sekunder och sedan ta ut dem igen.</p>

<h2>3. Ljudcodecen byttes till lägre kvalitet</h2>

<p>När du använder mikrofonen på din AirPods (för ett samtal, Siri eller diktering) byter macOS från den högkvalitativa AAC-codecen till den lägre kvaliteten på SCO. SCO är designat för telefonsamtal – det minskar ljudkvaliteten och kan även påverka upplevd volym.</p>

<p><strong>Fix:</strong> Om du inte är på samtal men ljudet låter både tyst och lågkvalitativt, koppla bort och koppla in dina AirPods igen. macOS bör byta tillbaka till AAC-codecen för musikuppspelning. Om du är på ett samtal är detta förväntat beteende — codecen byter automatiskt tillbaka när samtalet avslutas.</p>

<h2>4. En AirPod är tystare än den andra</h2>

<p>Om volymen känns låg eftersom en AirPod är märkbart tystare kan problemet vara fysiskt – öronvax eller skräp som blockerar högtalarnätet.</p>

<p><strong>Fix:</strong> Rengör dina AirPods försiktigt med en torr, luddfri trasa. För högtalarnätet, använd en torr, mjuk borste. Använd inte vätskor, tryckluft eller vassa föremål. Kolla också <strong>Systeminställningar → tillgänglighet → ljud</strong> — se till att vänster/höger ljudbalansreglage är centrerad.</p>

<h2>5. Appen själv ger ut låg volym</h2>

<p>Vissa appar har egna interna volymkontroller som är separata från systemets volym. Spotify, VLC, YouTube och Zoom har alla separata volymreglagare. Om appens interna volym är på 50 % får du bara hälften av volymen – även om macOS och dina AirPods är på 100 %.</p>

<p><strong>Fix:</strong> Kolla volymkontrollen i den app du använder och se till att den är maxad.</p>

<h2>6. Kärnljudet är i dåligt skick</h2>

<p>macOS ljuddaemon (coreaudiod) kan ibland fastna i ett tillstånd där Bluetooth-ljud är felaktigt eller på en lägre nivå, särskilt efter viloläge/vaknande eller byten mellan flera ljudenheter.</p>

<p><strong>Fix:</strong> Öppna terminalen och kör:</p>
<p><code>Sudo Killall CoreAudiod</code></p>
<p>Ljudet tappar en sekund och startar om. Dina AirPods kan återansluta på en mer normal volymnivå.</p>

<h2>Fortfarande för tyst? Höj volymen på AirPods över 100 %</h2>

<p>Om du har kollat alla sex orsaker ovan och dina AirPods fortfarande inte är tillräckligt högljudda, kan du behöva volymförstärkning – vilket förstärker ljudsignalen bortom vad macOS normalt tillåter.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig höja volymen på vilken app som helst upp till <strong>200%</strong>. Om Spotify är för tyst via dina AirPods, dra Spotifys reglage till 150 % eller 180 % i SoundDial. Ljudsignalen förstärks innan den skickas till dina AirPods, vilket effektivt gör dem högre än Apple tänkt sig.</p>

<img src="/apps/sounddial.png" alt="SoundDial att höja appvolymen för AirPods på Mac med volymreglage per app upp till 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Fördelen med att boosta per app: du kan boosta den tysta appen utan att göra allt annat högre. Om ditt videosamtal fungerar på 100 % men Spotify behöver 170 %, låter SoundDial dig ställa in varje samtal separat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Spotify-volymen för låg på Mac? Här är alla lösningar",
    description:
      "Spotify på maxvolym men ändå för tyst på din Mac? Denna guide täcker alla orsaker – från Spotifys inbyggda limiter till macOS inställningar – och hur du kan höja den över 100%.",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify är på full volym. Din Mac är på full volym. Och det är fortfarande inte tillräckligt högt. Detta är en av de vanligaste Spotify-klagomålen på Mac, och den har flera orsaker – de flesta är inte uppenbara.</p>

<p>Den här guiden går igenom alla anledningar till att Spotify kan vara för tyst på din Mac och hur du kan fixa varje enskild punkt. Inklusive hur man höjer Spotifys volym över 100% om inget annat fungerar.</p>

<h2>Kolla först Spotifys egen volymreglage</h2>

<p>Spotify har en separat volymkontroll nere till höger i appen (eller längst ner på skärmen på den omdesignade spelaren). Denna reglage är separat från din Mac systemvolym. Om den är på 50 %, så levererar Spotify bara hälften av sin potentiella volym – även om systemets volym är på 100 %.</p>

<p><strong>Fix:</strong> Se till att Spotifys volymreglage i appen är helt åt höger (100%).</p>

<h2>Kolla Spotifys volymnormalisering</h2>

<p>Spotify har en funktion som heter <strong>Volymnormalisering</strong> Det justerar automatiskt uppspelningsvolymen så att alla spår spelas på ungefär samma nivå. Detta är avsett att förhindra ryckiga volymhopp mellan låtar, men det kan också minska den totala volymen på högre spår.</p>

<p>För att kontrollera: Öppna Spotify → inställningar → Playback → <strong>Normalisera volym</strong>.</p>

<p>Du har tre alternativ:</p>
<ul>
  <li><strong>Högt</strong> — minst normalisering, närmast ursprungliga masteringnivåer</li>
  <li><strong>Normalt</strong> — måttlig normalisering (standard)</li>
  <li><strong>Tyst</strong> — de flesta normaliseringar minskar volymen ytterligare</li>
</ul>

<p><strong>Fix:</strong> Om Spotify låter för tyst, stäng av normaliseringen helt eller ställ in den på "Högt." Detta är den vanligaste orsaken till att Spotify är oväntat tyst.</p>

<h2>Kontrollera Spotifys ljudkvalitetsinställning</h2>

<p>Lägre ljudkvalitetsinställningar kan ibland leda till tystare uppspelning, särskilt på äldre ljudhårdvara. Gå till Spotify → inställningar → ljudkvalitet och se till att du använder "Mycket hög" (320 kbps) om du har en Premium-prenumeration, eller "Hög" (256 kbps) på gratisnivån.</p>

<h2>Kontrollera macOS hörlurssäkerhetsgränser</h2>

<p>Om du använder hörlurar (trådbundna eller Bluetooth) kan macOS begränsa volymen. Gå till <strong>Systeminställningar → ljud- → hörlurssäkerhet</strong>. Om "Minska högt ljud" är aktiverat begränsar macOS hörlursvolymen till en nivå som anses säker.</p>

<p><strong>Fix:</strong> Inaktivera "Minska högt ljud" eller höj decibeltröskeln. Obs: denna inställning påverkar bara hörlursutgången, inte högtalarna.</p>

<h2>Kolla Bluetooth-volymen</h2>

<p>Om du använder AirPods eller Bluetooth-högtalare finns det ett separat volymlager. Bluetooth-enheter har sin egen volym som förhandlas mellan Mac och enheten. Ibland hamnar detta ur synk.</p>

<p><strong>Fix:</strong> Koppla bort och koppla in din Bluetooth-enhet igen. Kontrollera också om enheten har egna volymknappar – se till att de är på max också.</p>

<h2>Återställ kärnljud</h2>

<p>macOS ljudsystem kan ibland fastna i lågvolym, särskilt efter vilo-/vakencykler eller byten mellan utgångsenheter. Att starta om ljuddaemon löser ofta detta.</p>

<p>Öppna terminalen och kör:</p>
<p><code>Sudo Killall CoreAudiod</code></p>

<p>Ljudet försvinner en sekund och startar om. Prova Spotify igen – det kan vara högre.</p>

<h2>Öka Spotify över 100 % med SoundDial</h2>

<p>Om du har provat allt ovan och Spotify fortfarande är för tyst kan problemet vara att Spotifys maximala utgång helt enkelt inte är tillräckligt hög för din setup. Detta är vanligt med inbyggda MacBook-högtalare och vissa Bluetooth-enheter.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> låter dig höja volymen på vilken app som helst upp till <strong>200%</strong> — inklusive Spotify. Den fångar upp Spotifys ljudström och förstärker den bortom appens inbyggda max, utan att påverka någon annan apps volym.</p>

<img src="/apps/sounddial.png" alt="SoundDial att höja Spotify-volymen till 200 % på macOS samtidigt som andra appar hålls på normal volym" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Här är den avgörande skillnaden: en volymökning i hela systemet skulle göra <em>Allt</em> högre — notiser, samtal, systemljud — inte bara Spotify. SoundDial boostar Spotify <em>Oberoende</em>. Ställ in Spotify på 160% medan din webbläsare ligger på 80% och Zoom på 100%.</p>

<h2>Bonus: automatisk ducking för musik under samtal</h2>

<p>Om motsatt problem också gäller – Spotify är för högt under videosamtal – sänker SoundDial automatiskt Spotify när du går med i ett Zoom-, Teams- eller FaceTime-samtal. När samtalet avslutas återgår Spotify till sin tidigare volym. Ingen manuell justering behövs.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Hur man separerar spelljud från Discord på Mac",
    description:
      "Spelexplosioner som dränker dina lagkamrater på Discord? Så här styr du spelljud och röstchattvolym på macOS självständigt.",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>Du spelar på din Mac. En explosion sker i spelet. Dina Discord-lagkamrater pratar, men du kan inte höra dem över skottlossningen. Du sänker volymen — nu är Discord också tystare. Du höjer volymen igen — explosionerna är öronbedövande igen.</p>

<p>På Windows öppnar du volymmixern, sänker spelet till 40 % och låter Discord stå på 100 %. På Mac kan du inte. macOS ger dig en volymreglage för allt, så spelljud och röstchatt är permanent kopplade.</p>

<p>Den här guiden visar hur du får en oberoende volymkontroll för ditt spel och Discord (eller någon röstchatt) på Mac.</p>

<h2>Varför detta är ett Mac-specifikt problem</h2>

<p>Windows har haft en inbyggd volymmixer sedan 2006 som låter dig styra varje apps volym oberoende av sig. macOS har aldrig lagt till denna funktion. Varje apps ljud mixas till en enda ström, och den enda kontrollen du har är en masterreglage som påverkar allt lika mycket.</p>

<p>Detta betyder:</p>
<ul>
  <li>Om ditt spel är för högt, sänker du också Discord om du sänker volymen</li>
  <li>Om Discord är för tyst höjs även spelet och höjer spelet</li>
  <li>Du kan inte hitta ett saldo eftersom båda apparna är låsta till samma volym</li>
</ul>

<h2>Lösningarna som egentligen inte fungerar</h2>

<h3>Använd volyminställningarna i spelet</h3>
<p>De flesta spel har en ljudinställningsmeny där du kan sänka huvudvolymen, musik, ljudeffekter och röstchatt oberoende av varandra. Det hjälper, men du ändrar inställningar inne i spelet – vilket betyder att du måste pausa spelet, navigera i menyer och justera varje gång förhållandena ändras. Och om du byter spel börjar du om.</p>

<h3>Använd Discords volymkontroller</h3>
<p>Discord låter dig justera utgångsvolymen i Inställningar → Röst och Video, och du kan justera individuella användares volymer genom att högerklicka på deras namn. Men detta styr Discords interna mix, inte volymen i förhållande till andra appar. Om spelet är för högt hjälper det inte att göra Discord högre internt eftersom systemvolymen påverkar båda lika mycket.</p>

<h3>Använd olika utgångsenheter</h3>
<p>Vissa försöker routa spelljudet till högtalare och Discord till hörlurar (eller tvärtom). macOS gör det inte enkelt – du skulle behöva en virtuell ljudenhet och manuell routing per app. Och att bära hörlurar med högtalare samtidigt är högst besvärligt.</p>

<h2>Den faktiska lösningen: volymkontroll per app</h2>

<p>Det du behöver är möjligheten att ställa in spelets volym oberoende av Discords volym. Det är precis vad en volymmixer per app gör.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Den ligger i menyfältet och ger varje app sin egen volymreglag. Du kan ställa in ditt spel på 35 % och Discord på 100 % – eller vilken kvot som helst som passar dig. Byt ut den ena så stannar den andra kvar.</p>

<img src="/apps/sounddial.png" alt="SoundDial att visa oberoende volymreglage för ett spel och Discord på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Typisk speluppställning</h3>
<ul>
  <li><strong>Spelet</strong> — 30-50 % (tillräckligt högt för inlevelse, inte överväldigande)</li>
  <li><strong>Discord / röstchatt</strong> — 90-100% (alltid tydligt hörbart över spelets ljud)</li>
  <li><strong>Spotify / musik</strong> — 15-25 % (subtil bakgrund, stör inte)</li>
  <li><strong>Webbläsare</strong> — avstängd (ingen överraskning auto-uppspelningsvideor)</li>
  <li><strong>Slack / notiser</strong> — dämpad (fokustid)</li>
</ul>

<h3>Spara det som en profil</h3>
<p>SoundDial <strong>volymprofiler</strong> Låter dig spara denna konfiguration och applicera den med ett klick. Skapa en "Gaming"-profil med ditt föredragna spel-/Discord-saldo, en "Work"-profil för musik och samtal, och byt mellan dem direkt. Inga justeringsreglage varje gång du sätter dig för att spela.</p>

<h3>Volymhöjning för tyst röstchatt</h3>
<p>Ibland är problemet inte att spelet är för högljutt – utan att Discord är för tyst. Vissa lagkamrater har dåliga mikrofoner, eller så är Discords utgång lägre än i andra appar. SoundDial låter dig höja volymen på vilken app som helst till <strong>200%</strong>, så du kan förstärka Discord bortom dess normala max utan att röra spelvolymen.</p>

<h2>Fungerar med alla spel och all röstchatt</h2>

<p>SoundDial fungerar med alla appar som producerar ljud på macOS. Det spelar ingen roll om du spelar via Steam, App Store, Epic Games eller ett webbläsarspel. Det spelar ingen roll om du använder Discord, TeamSpeak, Mumble eller FaceTime. Om den låter kan SoundDial kontrollera den.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Varför har Mac inte en volymmixer som Windows?",
    description:
      "Windows har haft volymkontroll per app sedan 2006. Det är 2026 och macOS gör det fortfarande inte. Här är den verkliga anledningen – och hur man får tag på en i alla fall.",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Varje version av Windows sedan Vista (2006) har inkluderat en volymmixer. Högerklicka på högtalarikonen, klicka på "Volymmixer" och du ser varje app med egen volymreglag. Du kan stänga av Chrome utan att påverka Spotify. Du kan sänka Discord utan att röra ditt spel.</p>

<p>På macOS? En reglagre. Det är allt du får. Tjugo år av Mac uppdateringar — Ventura, Sonoma, Sequoia, Tahoe — och Apple har aldrig lagt till volymkontroll per app.</p>

<p>Folk ställer den här frågan hela tiden: <em>Varför har Mac ingen volymmixer?</em></p>

<h2>Det är ingen teknisk begränsning</h2>

<p>Låt oss få det ur vägen: macOS kan absolut göra volymkontroll per app. Den underliggande ljudramen — <strong>Core Audio</strong> — stöder ljudtappning, routing och justering av förstärkning per process på API-nivå. Apple introducerade <strong>Audio Tap API</strong> i macOS 14 (Sonoma), vilket gör det ännu enklare för utvecklare att avlyssna och modifiera enskilda appljudströmmar.</p>

<p>Tredjepartsutvecklare har byggt volymmixers per app i åratal med hjälp av dessa API:er. Teknologin finns. Apple har helt enkelt inte byggt en användarvänlig version av det.</p>

<h2>Så varför har inte Apple byggt det?</h2>

<p>Apple har aldrig offentligt förklarat varför. Men om man tittar på deras designmönster är svaret ganska tydligt: <strong>Apple prioriterar enkelhet framför avancerade användarfunktioner.</strong></p>

<p>En volymreglage är enklare än tolv. Det är lättare att förklara, lättare att lära sig och kräver ingen konfiguration. För en användare som bara gör en sak åt gången – lyssnar på musik ELLER tar ett samtal ELLER tittar på en video – fungerar en reglage bra. Apple designar först för denna användare.</p>

<p>Det finns också ett filosofiskt argument: Apple anser att appar bör hantera sitt eget ljud. Om Spotify är för högt, sänk volymen i Spotify. Om Zoom är för tyst, höj volymen i Zoom. Operativsystemet borde inte behöva medla.</p>

<p>Problemet är att denna filosofi inte stämmer överens med verkligheten. År 2026 multitaskar alla med ljud:</p>

<ul>
  <li>Musik spelas medan jag arbetar</li>
  <li>Videosamtal med aviseringar som pingar</li>
  <li>Webbläsarflikar som automatiskt spelar upp annonser</li>
  <li>Spel med Discord igång</li>
  <li>Podcasts i ena örat, Slack i det andra</li>
</ul>

<p>"Justera bara i varje app" betyder att växla mellan sex appar, hitta sex olika volymkontroller (några finns inte), och göra detta flera gånger om dagen. Det är motsatsen till enkelt.</p>

<h2>Kommer Apple någonsin att lägga till det?</h2>

<p>Det finns inga tecken på att Apple planerar att lägga till en volymmixer i någon kommande macOS lansering. Funktionen har inte dykt upp i någon macOS beta, patentansökan eller WWDC:s färdplan. Apples Kontrollcenter i menyfältet visar fortfarande bara den enda systemvolymreglaget.</p>

<p>Det är möjligt att Apple lägger till det så småningom — de har tagit till sig funktioner som de tidigare avvisade (widgets, fönsterplattor, flerfönster-iPad). Men att vänta på Apple innebär att vänta på obestämd tid.</p>

<h2>Hur får man en volymmixer på Mac just nu</h2>

<p>Svaret är en tredjepartsmenyapp. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> är en inbyggd macOS volymmixer som gör exakt vad Windows volymmixer gör – plus mer.</p>

<img src="/apps/sounddial.png" alt="SoundDial — volymmixern för macOS, som visar volymreglage per app i menyfältet" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Vad du får:</p>

<ul>
  <li><strong>Volymreglage per app</strong> — varje löpande app får sin egen reglag, från 0 % till 200 %</li>
  <li><strong>Mute per app</strong> — ett klick för att tysta en app, klicka igen för att avstänga ljudet</li>
  <li><strong>Volymprofiler</strong> — spara konfigurationer för olika situationer (Arbete, Fokus, Spel) och byta med ett klick</li>
  <li><strong>Auto-ducking</strong> — bakgrundsljudet sänks automatiskt när du ansluter till ett samtal, och återställs när du lägger på</li>
  <li><strong>Volymökning till 200%</strong> — förstärker tysta appar bortom deras normala maximum</li>
  <li><strong>Tangentbordsgenvägar</strong> — växla mixern eller stäng av alla appar med en snabbknapp</li>
  <li><strong>Utgångsenhetsomkoppling</strong> — växla mellan högtalare, hörlurar och externa enheter från samma panel</li>
  <li><strong>Volymminne</strong> — varje apps volym minns mellan omstarterna</li>
</ul>

<p>Det är funktionen som Apple borde ha byggt för tjugo år sedan. Engångsköp på <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Ingen prenumeration. macOS 14,2+.</p>

<p>Volymmixern borde macOS ha inbyggd.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac volymen för låg? Hur man förstärker ljudet över 100 %",
    description:
      "Din Mac är på full volym och det är fortfarande för tyst. Här är varför det händer och hur man förstärker ljudet upp till 200 % utan externa högtalare.",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>Din Mac volym är på 100%. Reglaget är helt åt höger. Och det är fortfarande inte tillräckligt högt. Podcasten är för tyst. Videosamtalsdeltagaren låter som om de viskar. YouTube-videon spelades in för lågt. Du har nått maxen – och det räcker inte.</p>

<p>Detta är en av de vanligaste ljudklagomålen på Mac, särskilt med de inbyggda högtalarna på MacBook Air och äldre MacBook Pro-modeller. Högtalarna är fysiskt små, och vissa innehåll spelas helt enkelt in på en lägre nivå än annat.</p>

<p>Här är varför det händer och hur du faktiskt fixar det – inklusive hur du kan öka volymen på din Mac bortom 100 %-gränsen.</p>

<h2>Varför din Mac låter för tyst på full volym</h2>

<p>Det finns flera anledningar till att din Mac kanske inte är tillräckligt högljudd ens vid maximal volym:</p>

<h3>1. Innehållet i sig är tyst</h3>
<p>Inte all ljud är mastrade på samma nivå. En professionellt producerad podcast kan nå en topp på -3 dB, medan en avslappnad YouTube-video eller ett inspelat Zoom-samtal kan toppa på -20 dB. Skillnaden är enorm. När din systemvolym är på 100 %, förblir tyst innehåll tyst — macOS kan bara förstärkas upp till ursprungssignalnivån.</p>

<h3>2. MacBook-högtalare har fysiska begränsningar</h3>
<p>De inbyggda högtalarna i en MacBook Air eller en 13" MacBook Pro är små. De är designade för portabilitet, inte volym. Apples större MacBook Pro-modeller (14" och 16") har betydligt bättre högtalare, men även de har tak. Om du är van vid externa högtalare eller hörlurar kommer de inbyggda högtalarna att kännas svaga.</p>

<h3>3. Bluetooth-volymen är begränsad</h3>
<p>Vissa Bluetooth-hörlurar och högtalare har ett eget volymtak som är separat från macOS. Även om macOS visar 100 %, kanske Bluetooth-enheten inte är på max. Detta är särskilt vanligt med AirPods, där EU-volymbegränsaren eller hörlurssäkerhetsfunktionen i Settings → Sound → Earphone Safety kan begränsa utgången.</p>

<h3>4. Individuella appvolymer är låga</h3>
<p>Vissa appar har sin egen interna volymkontroll som är separat från systemvolymen. Om Spotifys in-app-volym är på 50 % och systemvolymen på 100 %, lyssnar du i praktiken på 50 %. Zoom har ofta en konservativ volymnivå för samtal.</p>

<h2>Inbyggda lösningar att prova först</h2>

<h3>Kontrollera hörlurssäkerhetsgränser</h3>
<p>Gå till <strong>Systeminställningar → ljud- → hörlurssäkerhet</strong>. Om "Sänk högt ljud" är aktiverat begränsar macOS aktivt volymen för att skydda din hörsel. Du kan inaktivera detta eller höja tröskeln. Detta påverkar bara hörlurar — det påverkar inte högtalarens utgång.</p>

<h3>Kontrollera volymen på Bluetooth-enheten</h3>
<p>Vissa Bluetooth-enheter har oberoende volymkontroller. För AirPods, se till att volymen på både Mac och AirPods är maxad. För tredjeparts Bluetooth-högtalare, kolla om högtalaren har en egen volymknapp eller app.</p>

<h3>Kontrollera volymen i appen</h3>
<p>Öppna appen som är för tyst och leta efter en egen volymreglagare. Spotify har en i spelarfältet. VLC har en sådan i uppspelningskontrollerna. YouTube har en sådan på videospelaren. Se till att dessa är på 100 % innan du drar slutsatsen att din Mac är problemet.</p>

<h3>Återställ kärnljud</h3>
<p>Ibland hamnar macOS ljudsystem i dåligt skick efter vilo-/vakencykler eller byte av enhet. Öppna terminalen och kör:</p>
<p><code>Sudo Killall CoreAudiod</code></p>
<p>Detta startar om ljuddemonen. Ditt ljud försvinner i en sekund och kommer tillbaka, ibland på en mer normal nivå.</p>

<h2>Hur man ökar volymen bortom 100 %</h2>

<p>Om du har kontrollerat allt ovan och din Mac fortfarande är för tyst, behöver du volymförstärkning – möjligheten att pusha ljudet <em>ovan</em> det 100%-tak som macOS medför.</p>

<p>Volymförstärkning fungerar genom att fånga upp ljudsignalen innan den når dina högtalare och multiplicera dess amplitud. Vid 150 % är varje ljudprov 1,5 gånger högre än originalet. Vid 200 % är den fördubblad. Detta kan introducera lätt distorsion vid extrema nivåer med visst innehåll, men för tyst ljud är det det enda sättet att faktiskt göra det hörbart.</p>

<h3>SoundDial: volymökning per app upp till 200 %</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ger varje app på din Mac en oberoende volymreglage som går från 0 % till <strong>200%</strong>. Om en specifik app är för tyst – en podcastspelare, en webbläsarflik, ett videosamtal – kan du boosta just den appen över 100 % utan att röra något annat.</p>

<img src="/apps/sounddial.png" alt="SoundDial volymökning — volymkontroll per app med 200 % förstärkning på macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Detta är särskilt användbart för:</p>
<ul>
  <li><strong>Tysta podcastappar</strong> — vissa spelare maxar för lågt, särskilt med poddar inspelade under suboptimala förhållanden</li>
  <li><strong>Videosamtal med tysta deltagare</strong> — förstärk Zoom eller Teams när någons mikrofon är låg, utan att göra musiken högre</li>
  <li><strong>Webbläsarflikar</strong> — YouTube-videor, webbappar och inbäddade medier spelas ofta upp i lägre volym än dedikerade medieappar</li>
  <li><strong>Gamla inspelningar</strong> — arkivljud, vintagemusik och äldre videoinnehåll mastras ofta på lägre nivåer</li>
</ul>

<p>Den största fördelen jämfört med systemomfattande volymförstärkare är att SoundDial ökar <em>per app</em>. Du kan höja tyst-appen till 180 % samtidigt som allt annat hålls på normala nivåer. En systemomfattande förstärkare skulle förstärka allt lika mycket, vilket gör dina redan högljudda appar smärtsamt högljudda medan den tysta blir något mindre tyst.</p>

<h2>När externa lösningar är bättre</h2>

<p>Volymökning har sina begränsningar. Om du försöker fylla ett rum med ljud från en MacBook Airs inbyggda högtalare kan ingen mjukvara övervinna den fysiska storleken på dessa högtalarelement. I så fall:</p>

<ul>
  <li><strong>Trådbundna hörlurar</strong> — kringgår högtalarbegränsningar helt, och de flesta hörlurar kan bli högre än inbyggda högtalare</li>
  <li><strong>Externa högtalare</strong> — även ett billigt par USB- eller Bluetooth-högtalare kommer att överträffa inbyggda MacBook-högtalare när det gäller rå volym</li>
  <li><strong>USB-ljudgränssnitt</strong> — för professionellt bruk ger ett dedikerat ljudkort en ren, kraftfull signal till studiomonitorer eller hörlurar</li>
</ul>

<p>Men för vardagliga fall – en webbläsarflik som är för tyst, ett samtal där någon mumlar, en podcast som spelats in i en garderob – mjukvaruvolymen ökar med <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> är den snabbaste lösningen. Klicka på menyfältsikonen, dra reglaget förbi 100%, klart.</p>

<p>Engångsköp på <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Ingen prenumeration. macOS 14,2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Hur sänker man automatiskt musiken under Zoom-samtal på Mac",
    description:
      "Varje gång ett Zoom-samtal startar försöker du snabbt pausa Spotify. Det finns ett bättre sätt — automatisk ducking sänker automatiskt musiken när mikrofonen aktiveras.",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>Samtalet börjar. Du delar din skärm. Din musik dånar fortfarande. Du byter febrilt till Spotify, trycker på paus, byter tillbaka till Zoom – men alla har redan hört tio sekunder av din spellista. Det händer alla, och det händer för att macOS inte har någon koppling mellan "ett samtal har precis startat" och "kanske sänk musiken."</p>

<p>På vissa telefoner sker detta automatiskt – musiken pausas eller hukar sig när ett samtal kommer in. På Mac är du på egen hand. Om du inte sätter upp auto-ducking.</p>

<h2>Vad är ljud-ducking?</h2>

<p><strong>Ljuddukning</strong> Det innebär att automatiskt sänka volymen på bakgrundsljudet när något viktigare händer – som ett röstsamtal. Termen kommer från sändningsteknik, där bakgrundsmusiken "duckar under" speakerrösten.</p>

<p>I praktiken fungerar det så här:</p>
<ol>
  <li>Du lyssnar på musik på 50% volym</li>
  <li>Du går med i ett Zoom-samtal</li>
  <li>Din musik sjunker automatiskt till 15 %</li>
  <li>Du kan höra samtalet tydligt utan att manuellt justera något</li>
  <li>Samtalet avslutas</li>
  <li>Din musik återgår automatiskt till 50 %</li>
</ol>

<p>Inga byten av appar. Ingen paus. Ingen glömska att stänga av ljudet efter samtalet. Den är helt automatisk.</p>

<h2>Har macOS inbäddad ljudducking?</h2>

<p>Nej. macOS har ingen automatisk ljud-ducking-funktion. Det finns inget i Systeminställningar, Tillgänglighet eller Fokus-lägena som kopplar "mikrofonen är aktiv" till "lägre bakgrundsljud." Apple har helt enkelt inte byggt detta.</p>

<p>Det finns en tillgänglighetsinställning som heter "Spela stereoljud som mono" och alternativ för visuella blixtvarningar, men inget som automatiskt justerar volymen baserat på om du är i ett samtal.</p>

<h2>De manuella alternativen (och varför de är smärtsamma)</h2>

<h3>Pausa musiken manuellt före varje samtal</h3>
<p>Det är vad de flesta gör. Det fungerar – tills du glömmer. Eller tills någon ringer oväntat. Eller tills du har samtal på rad och pausar och pausar Spotify tolv gånger om dagen. Det betyder också att det inte finns någon bakgrundsmusik under samtal, även när du vill ha den på låg volym.</p>

<h3>Använd fokusläget för att tysta allt</h3>
<p>Du skulle kunna skapa ett "Möte"-fokusläge som blockerar notifikationsljud. Men Focus-lägen styr inte volymen på medieuppspelning. Din musik fortsätter spela på full volym även i Stör ej-läge — Focus undertrycker bara notiser.</p>

<h3>Ställ in volymprofiler manuellt</h3>
<p>Skapa en "samtals"-setup där du manuellt sänker allt utom din kommunikationsapp innan varje samtal. Det fungerar men kräver att du kommer ihåg och byter manuellt varje gång. Och du måste byta tillbaka efteråt.</p>

<h2>Auto-ducking med SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> har en inbyggd automatisk ducking-funktion som gör exakt det macOS ska göra inbyggt. Så här fungerar det:</p>

<h3>Hur den upptäcker samtal</h3>
<p>SoundDial övervakar din Mac mikrofonstatus – samma indikator som visar den orange punkten i menyraden när en app använder din mikrofon. När den upptäcker att en kommunikationsapp har aktiverat din mikrofon vet den att ett samtal har startat.</p>

<p>Den fungerar med alla större kommunikationsappar:</p>
<ul>
  <li><strong>Zooma in</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Slack</strong> (samlingar och samtal)</li>
  <li><strong>Google Meet</strong> (via Chrome)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Vad händer när ett samtal startar</h3>
<p>I samma ögonblick som din mikrofon aktiveras för ett samtal sänker SoundDial automatiskt volymen på alla icke-kommunikationsappar till en nivå du konfigurerar — standarden är 30%. Ditt samtalsljud är på full volym. Bakgrundsmusiken sjunker till en subtil nivå. Notisljuden tystnar.</p>

<p>En liten grön indikator visas i SoundDial:s header för att bekräfta att auto-ducking är aktiv.</p>

<h3>Vad händer när samtalet avslutas</h3>
<p>När du lägger på och mikrofonen stängs av, återställer SoundDial alla appvolymer exakt där de var innan samtalet började. Din musik kommer tillbaka upp till 50 % (eller var du nu hade den). Ingen manuell justering behövs.</p>

<h3>Konfigurera anknivån</h3>
<p>I SoundDial inställningar kan du justera <strong>Anknivå</strong> — hur mycket bakgrundsljud som minskas under ett samtal. Reglaget varierar från 10 % (knappt hörbart) till 80 % (fortfarande ganska närvarande). Standardvärdet på 30 % fungerar bra för de flesta: musiken är märkbar men stör inte samtalet.</p>

<img src="/apps/sounddial.png" alt="SoundDial automatisk ducking-funktion sänker automatiskt musikvolymen under ett Zoom-samtal på Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Varför auto-ducking är bättre än paus</h2>

<p>Att pausa musiken före ett samtal verkar enkelt, men auto-ducking är bättre på flera sätt:</p>

<ul>
  <li><strong>Det är automatiskt.</strong> Du glömmer aldrig. Ingen stressande när ett oväntat samtal kommer in.</li>
  <li><strong>Du behåller bakgrundsmusik.</strong> Många föredrar tyst bakgrundsmusik under samtal snarare än tystnad. Auto-ducking låter dig hålla den på en bekväm nivå.</li>
  <li><strong>Den hanterar flera appar.</strong> Det är inte bara musik — notifikationsljud, webbläsarflikar och andra ljudkällor dämpas samtidigt.</li>
  <li><strong>Den återställs perfekt.</strong> När samtalet avslutas återgår varje app till exakt sin tidigare volym. Ingen omjustering.</li>
  <li><strong>Det fungerar för samtal på rad efter varandra.</strong> Om du har tre möten i rad, hanterar auto-ducking alla utan att du rör något.</li>
</ul>

<h2>Uppsättning på under en minut</h2>

<ol>
  <li>Installation <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial från Mac App Store</a></li>
  <li>Öppna Inställningar → fliken Auto-Duck</li>
  <li>Aktivera automatisk ducking</li>
  <li>Justera anknivåreglaget efter din preferens</li>
  <li>Det var allt — automatisk ducking är aktiv</li>
</ol>

<p>Nästa gång du går med i ett Zoom-, Teams- eller FaceTime-samtal kommer ditt bakgrundsljud automatiskt att sänkas. När du lägger på kommer det tillbaka. Engångsköp, ingen prenumeration.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Hur man tystar en app på Mac utan att stänga av allt",
    description:
      "Slack pingar. Du är på ett samtal. Du vill tysta Slack men fortsätt höra ditt samtal. macOS låter dig inte — så gör du det ändå.",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>Du är på ett Zoom-samtal. Slack fortsätter att göra notisljud. En YouTube-flik som du glömde börjar spela automatiskt. Du trycker på mute-knappen – och nu kan du inte heller höra ditt samtal. macOS tystar <em>Allt</em>. Det finns inget inbyggt sätt att tysta bara en app.</p>

<p>På Windows högerklickade du på högtalarikonen, öppnade volymmixern och tryckte på mute-knappen bredvid Slack. Klart. Slack är tyst, allt annat fortsätter spelas. macOS har ingen motsvarighet.</p>

<p>Den här guiden täcker alla metoder som finns för att tysta en specifik app på din Mac – från inbyggda lösningar till den enda lösning som faktiskt fungerar som en riktig mute-knapp.</p>

<h2>Varför macOS inte kan stänga av ljudlösa enskilda appar</h2>

<p>macOS behandlar ljud som en enda ström. Varje apps ljud mixas ihop innan det når dina högtalare, och den enda volymkontroll Apple ger dig fungerar på den slutliga mixade utgången. Det finns inget sätt att nå in i den mixen och tysta en app utan att påverka resten.</p>

<p>Detta är inte en hårdvarubegränsning – det är ett mjukvarudesignval. macOS:s Core Audio-ramverk stödjer ljudkontroll per process på API-nivå. Apple har helt enkelt inte byggt ett användarriktat sätt att komma åt det.</p>

<h2>Inbyggda lösningar (och deras begränsningar)</h2>

<h3>1. Stäng av aviseringar för appen</h3>
<p>Gå till <strong>Systeminställningar → Notiser</strong> Och hitta appen du vill tysta. Du kan stänga av ljud för dess notiser, eller stänga av notiser helt.</p>
<p><strong>Haken:</strong> Detta fungerar bara för notisljud. Om appen gör andra ljud – medieuppspelning, samtalsljud, ljud i appen – kommer detta inte att påverka dem. Och du förlorar också visuella notiser, inte bara ljud.</p>

<h3>2. Använd fokusläge</h3>
<p>macOS Fokus-lägen (Stör ej, Arbete, Personligt, etc.) kan undertrycka notisljud från specifika appar. Du kan konfigurera vilka appar som får meddela dig i varje Focus-läge.</p>
<p><strong>Haken:</strong> Fokuslägen handlar om notiser, inte ljud. De stänger inte av ljudet i en Slack-huddle, en webbläsarflik som spelar ljud eller någon medieuppspelning. De kräver också en förhandskonfiguration för varje läge – du kan inte bara "tysta den här appen just nu."</p>

<h3>3. Stäng appen</h3>
<p>Det nukleära alternativet. Om du slutar med Slack helt kan det inte låta. Det betyder förstås att du inte heller kan se några meddelanden förrän du öppnar den igen.</p>
<p><strong>Haken:</strong> Du vill inte sluta med appen – du vill <em>Fortsätt använda den</em> utan att höra det. Det är en stor skillnad mellan "mute" och "close."</p>

<h3>4. Använd appens egna inställningar</h3>
<p>Vissa appar har en inställning för "tysta ljud" eller "tysta notiser" gömd någonstans i sina inställningar. Slack har det under Inställningar → Notiser → Ljud och utseende. Spotify har en högtalarikon i spelaren.</p>
<p><strong>Haken:</strong> Du måste hitta och navigera i varje apps inställningar individuellt. Många appar har inte det här alternativet alls. Och att växla mellan "muted" och "unmuted" innebär att du måste dyka tillbaka till preferenser varje gång, istället för att klicka på en knapp.</p>

<h2>Den verkliga lösningen: en mute-knapp per app</h2>

<p>Det du faktiskt vill ha är helt enkelt: en mute-knapp bredvid varje app som tystar den direkt, utan att påverka något annat. Klicka för att tysta, klicka igen för att avstänga. Appen fortsätter att köra, du fortsätter se dess innehåll – du hör det bara inte.</p>

<p>Det är precis vad en volymmixer per app gör. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Den ligger i menyfältet och visar varje löpande app med egen volymreglage och ljudknapp.</p>

<img src="/apps/sounddial.png" alt="SoundDial att visa muteknappar per app för varje applikation i menyfältet macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>För att tysta en app:</p>
<ol>
  <li>Klicka på SoundDial-ikonen i menyfältet</li>
  <li>Hitta appen du vill tysta</li>
  <li>Klicka på högtalarikonen bredvid</li>
</ol>

<p>Det är allt. Appen är avstängd. Allt annat fortsätter spela på den volym det hade. Klicka på högtalarikonen igen för att avstänga ljudet — volymen återgår till exakt samma nivå som tidigare.</p>

<h2>Utöver att tysta: volymkontroll per app</h2>

<p>När du har en per-app-mixer inser du att muting bara är den extrema änden av vad du faktiskt vill ha. Oftast vill du inte helt tysta en app – du vill göra den <em>tystare</em>.</p>

<ul>
  <li>Slack-notiser på 15 % — tillräckligt subtila för att inte avbryta, tillräckligt närvarande för att märka</li>
  <li>Musik på 30 % — bakgrundsnivå som inte konkurrerar med samtal</li>
  <li>Webbläsare på 60 % — bekväm för videouppspelning</li>
  <li>Zoom på 100% — full volym för det samtal som räknas</li>
</ul>

<p>SoundDial ger varje app en reglage från 0 % till 200 %. Du kan göra appar tystare än deras inbyggda minimum eller högre än deras inbyggda max. Och med <strong>volymprofiler</strong>, du kan spara din föredragna konfiguration och växla mellan förinställningar — "Mötes"-läge, "Fokus"-läge, "Musik"-läge — med ett enda klick.</p>

<p>Funktionen för automatisk duckning går ännu längre: när du startar ett samtal sänker SoundDial automatiskt allt utom din kommunikationsapp. När samtalet avslutas kommer allt upp igen. Du rör aldrig en slider.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a> — €14,99 engångsköp, ingen prenumeration, macOS 14,2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Volymmixer för Mac: Den saknade funktionen macOS fortfarande inte har",
    description:
      "Windows har haft en volymmixer sedan 2006. Här är varför macOS fortfarande inte gör det – och det bästa sättet att få volymkontroll per app på din Mac under 2026.",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>Högerklicka på högtalarikonen på vilken Windows-dator som helst så hittar du volymmixern — en panel som visar alla program som för närvarande gör ljud, var och en med sin egen oberoende volymreglagare. Du kan sänka Spotify till 20 % samtidigt som du behåller ditt Zoom-samtal på 100 %. Du kan tysta Chrome utan att röra något annat. Det har funnits där sedan Windows Vista 2006.</p>

<p>Gör nu samma sak på en Mac. Klicka på ljudikonen i menyfältet. Du får en slider. Det är allt. En reglage som styr allt på en gång. Varje app, varje notis, varje systemljud — allt låst tillsammans.</p>

<p>Det här är inget nischklagomål. Det är den mest efterfrågade ljudfunktionen i macOS, och Apple har ignorerat den i tjugo år.</p>

<h2>Vad en volymmixer faktiskt gör</h2>

<p>En volymmixer ger dig <strong>Oberoende volymkontroll för varje applikation</strong> på din dator. Istället för en master slide får du en reglage per app. Varje reglage påverkar bara just den appens ljudutgång.</p>

<p>Så här ser det ut i praktiken:</p>

<ul>
  <li><strong>Spotify</strong> vid 25 % — bakgrundsmusik på en behaglig nivå</li>
  <li><strong>Zooma in</strong> på 100% — hör varje ord av mötet</li>
  <li><strong>Slack</strong> Tyst — inga notiser som plingar under fokuseringstid</li>
  <li><strong>Safari</strong> vid 60 % — YouTube-video med måttlig volym</li>
  <li><strong>Systemljud</strong> vid 10 % — subtil feedback utan att skrämma dig</li>
</ul>

<p>Alla dessa körs samtidigt, var och en i sin egen volym. Byt ut en och inget annat rör sig. Det är vad en volymmixer gör, och det är vad macOS inte har.</p>

<h2>Varför Apple inte har byggt en sådan</h2>

<p>Det är ingen teknisk begränsning. macOS:s ljudramverk — Core Audio — stöder fullt ut per-process-ljudrouting och volymkontroll på API-nivå. Apple använder dessa funktioner internt. De har bara inte exponerat dem för användarna.</p>

<p>Den troliga anledningen är Apples designfilosofi: färre alternativ, enklare gränssnitt. En reglage är renare än tolv. Och för någon som bara gör en sak åt gången – lyssnar på musik ELLER tar ett samtal ELLER tittar på en video – räcker det med en reglagre.</p>

<p>Men så använder man inte datorer år 2026. Distansarbete innebär att du är på ett samtal med musik som spelas och Slack som pingar och en webbläsarflik som automatiskt spelar upp en video, allt samtidigt. "En reglage för allt" faller helt när du har fem ljudkällor som tävlar om dina öron.</p>

<h2>De macOS lösningarna (och varför de inte räcker till)</h2>

<h3>Använd varje apps inbyggda volymkontroll</h3>
<p>Spotify har en volymreglagare. VLC har en. QuickTime har en. Men det innebär att byta till varje app individuellt, hitta dess volymkontroll, justera den och växla tillbaka. Det är utspritt över ett dussin olika platser, och de flesta appar — Slack, Mail, Safari, Chrome — har inte ens någon.</p>

<h3>Använd "Stör ej" för att tysta notiser</h3>
<p>Fokuslägen kan dämpa notisljud, men de är binära – allt eller inget. Du kan inte säga "behåll Slack-ljud men gör dem tystare." Och fokuslägena rör inte media- eller samtalsvolymen alls.</p>

<h3>Använd Audio MIDI-setup</h3>
<p>Detta inbyggda verktyg hanterar ljudenheter och samplingsfrekvenser. Det har inget att göra med volymen per app. Det är ett verktyg för enhetskonfiguration, inte en mixer.</p>

<h3>Skapa multi-utgångsenheter</h3>
<p>Du kan kombinera ljudutgångar till en aggregerad enhet, men detta skickar samma ljud till flera utgångar — det ger dig inte kontroll per app. Det är användbart om du vill ha ljud på både högtalare och hörlurar samtidigt, men det är ett helt annat problem.</p>

<p>Ingen av dessa lösningar löser det grundläggande problemet: macOS har inget inbyggt sätt att säga "gör den här appen tystare utan att påverka något annat."</p>

<h2>Vad man ska leta efter i en Mac volymmixer</h2>

<p>Om Apple inte bygger det, gör tredjepartsappar det. Men alla volymmixrar är inte likadana. Här är vad som skiljer en bra från en medioker:</p>

<h3>Realtidsdetektion av appar</h3>
<p>Mixern borde automatiskt upptäcka varje app som för närvarande producerar ljud. Du ska inte behöva lägga till appar manuellt eller konfigurera något. Öppnar en app, och den dyker upp i mixern. Stäng den, och den försvinner.</p>

<h3>Volymomfång över 100 %</h3>
<p>Vissa appar är för tysta även på maxvolym – tysta poddspelare, webbläsarflikar med mjukt ljud, videosamtal där någons mikrofon är låg. En bra mixer låter dig <strong>Höj volymen till 200%</strong>, vilket effektivt förstärker ljudet bortom vad appen själv kan producera.</p>

<h3>Ett-klick mute per app</h3>
<p>Du borde kunna stänga av vilken app som helst med ett enda klick – utan att flytta reglagen. När du avstänger ljudet ska det återgå till exakt där det var. Detta är avgörande för att snabbt tysta en bullrig app under ett samtal.</p>

<h3>Profiler för olika situationer</h3>
<p>Du vill inte manuellt justera åtta reglage varje gång du byter från "arbeta med musik" till "videosamtal" till "spel". Profiler låter dig spara en volymkonfiguration och applicera den med ett klick. En "Mötes"-profil kan sätta Zoom till 100 %, musiken till 15 % och notiser till 0 %. En "Focus"-profil kan tysta allt utom Spotify.</p>

<h3>Auto-ducking under samtal</h3>
<p>Den bästa funktionen en volymmixer kan ha: sänker automatiskt bakgrundsljudet när du går med i ett samtal och återställer det när samtalet avslutas. Ingen manuell justering behövs. Din musik tystnar när Zoom aktiverar din mikrofon och kommer tillbaka när du lägger på.</p>

<h3>Menyfältsintegration</h3>
<p>En volymmixer ska finnas i menyfältet – ett klick för att öppna, justera och stänga. Det ska inte vara ett fullt fönster, inte ta upp plats i Dock, och det ska inte kräva att du byter från din nuvarande app. Du borde kunna justera volymerna utan att tappa fokus på det du gör.</p>

<h2>SoundDial: volymmixern borde macOS ha inbyggd</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> är en inbyggd macOS menyradsapp som ger dig precis det Apple inte ger – oberoende volymkontroll för varje app på din Mac.</p>

<p>Den finns i menyfältet och visar varje program som körs med sin egen volymreglag. Dra en reglage för att justera appens volym från 0 % till 200 %. Klicka på högtalarikonen för att stänga av ljudet direkt. Byt mellan sparade profiler för olika situationer. Aktivera automatisk ducking och din musik blir automatiskt tystare när ett samtal startar.</p>

<img src="/apps/sounddial.png" alt="SoundDial — volymmixer per app för macOS som visar individuella volymreglage i menyn" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Nyckelfunktioner:</p>
<ul>
  <li><strong>Volymreglage per app</strong> — 0 % till 200 % intervall för varje löpande app</li>
  <li><strong>Ett-klicks mute</strong> — tysta vilken app som helst utan att flytta reglaget</li>
  <li><strong>Volymprofiler</strong> — spara och växla mellan volymkonfigurationer</li>
  <li><strong>Auto-ducking</strong> — musiken sänks automatiskt under samtal</li>
  <li><strong>Tangentbordsgenvägar</strong> — växla mixern eller stäng av alla appar med en snabbknapp</li>
  <li><strong>Utgångsenhetsomkoppling</strong> — byta högtalare/hörlurar från samma panel</li>
  <li><strong>Volymminne</strong> — minns varje apps volym mellan omstarter</li>
</ul>

<p>Engångsköp. Ingen prenumeration. macOS 14,2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Skaffa SoundDial på Mac App Store</a>.</p>
`,
  },
};
