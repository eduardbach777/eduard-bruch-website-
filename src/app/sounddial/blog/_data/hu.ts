import type { ArticleSet } from "./index";

export const huArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Hang podcastokhoz: Irányítsd, mit hallasz felvétel közben",
    description:
      "Podcast felvétele szintek figyelése közben, vendég hallgatása és értesítések kezelése — mind egy hangerő csúszkáért versengenek. Itt egy jobb beállítás.",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>Podcastot veszel fel a Mac-n. Tisztán kell hallanod a vendégedet (Zoomon, Riverside-on vagy SquadCast-en keresztül). Figyelned kell a DAW felvételi szintjeit. A Slack hangosításra van szükség, hogy ne kerüljön a pingek a felvételen. És a rendszerértesítési hangokat teljesen elnémítva kell — egy macOS "ding" az interjú közepén használhatatlan hang.</p>

<p>macOS egy hangerőcsúszkát ad mindezekhez. Ez nem elég.</p>

<h2>A podcasting audio kihívás Mac</h2>

<p>Egy podcast felvétel során általában így van:</p>
<ul>
  <li><strong>Kommunikációs alkalmazás</strong> (Zoom, Riverside, SquadCast) — vendéghang, tisztának kell lennie</li>
  <li><strong>DAW / felvevő alkalmazás</strong> (Logic, GarageBand, Audacity, Hindenburg) — a saját szintjeid figyelése</li>
  <li><strong>Értesítési források</strong> (Lazítás, Posta, Naptár, Üzenetek) — a felvétel közben teljesen csendnek kell lennie</li>
  <li><strong>Böngésző</strong> — lehet, hogy vannak műsorjegyzetek, kutatási fülek vagy egy időzítő</li>
</ul>

<p>Mindez ugyanazon a hangerőn káosz. A vendéged versenyez a rendszer csilingeléseivel. Egy Slack értesítés tönkreteheti a felvételt. Ha pedig a vendég hangerejét kell állítanod, a rendszer hangerejének megváltoztatása a monitorozási szintet is megváltoztatja.</p>

<h2>A tipikus megoldás</h2>

<p>A legtöbb podcaster a következők kombinációját használja:</p>
<ul>
  <li>Fókusz mód (Ne zavard meg) az értesítések elnyomására</li>
  <li>A Slack, Mail és más zajos alkalmazások manuális kizárása a felvétel előtt</li>
  <li>A kommunikációs alkalmazás belső hangerőjének beállítása a vendég számára</li>
</ul>

<p>Ez működik, de hibázik. Elfelejted bekapcsolni a DND-t, és egy értesítés tönkreteszi a bevételedet. Elfelejted kimondani a Slack-ről, és jön a hívás. És még mindig nem tudod önállóan szabályozni a vendég hangerőjét a monitorozási szintedtől.</p>

<h2>Alkalmazásonkénti hang podcastinghez</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Lehetővé teszi, hogy tiszta felvételi környezetet építs ki azáltal, hogy minden alkalmazást önállóan irányíthatsz:</p>

<img src="/apps/sounddial.png" alt="SoundDial podcasting beállítás — vendéghang, figyelés és értesítések független szinten" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Felvételi profil</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — tiszta vendéghang</li>
  <li><strong>Logic / GarageBand:</strong> 60% — kényelmes monitorozás fáradtság nélkül</li>
  <li><strong>Lazaság:</strong> Némított — semmi értesítési hang</li>
  <li><strong>Posta:</strong> tompa</li>
  <li><strong>Üzenetek:</strong> tompa</li>
  <li><strong>Naptár:</strong> tompa</li>
  <li><strong>Böngésző:</strong> Némított — nem meglepő automatikus lejátszás</li>
</ul>

<p>Mentsd el ezt "Felvétel" profilként. A felvétel megnyomása előtt alkalmazd a profilt egy kattintással. Minden értesítési forrás elnémítva, a vendéged teljes hangerőn van, és a monitorozásod kényelmes szinten van.</p>

<h3>Szerkesztői profil</h3>
<ul>
  <li><strong>Logika / Hindenburg:</strong> 100% — teljes szerkesztési ellenőrzés</li>
  <li><strong>Spotify:</strong> tompa — nincs hivatkozási zavar</li>
  <li><strong>Lazaság:</strong> 20% — finom értesítések szünetekben</li>
  <li><strong>Böngésző:</strong> 40% — műsorjegyek és kutatások miatt</li>
</ul>

<p>Két profil, két kattintás, két teljesen eltérő hangkörnyezet. Nincs kézi kilépés és újranyitás alkalmazások. Nem felejtjük el újra engedélyezni az értesítéseket a felvétel után.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Miért olyan hangos a Mac teljes hangerőn? Hogyan lehet finomabb kontrollt szerezni",
    description:
      "A MacBook Pro hangszórók nagyszerűek — amíg nem pörögnek. Ha még a közepes hangerő beállítása is túl hangosnak tűnik, íme, hogyan lehet pontosabb hangvezérlést elérni.",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Az Apple újabb MacBook Pro modelljei (14" és 16") rendkívül erős hangszórókkal rendelkeznek egy laptophoz képest. Olyan erős, hogy a közepes hangerő valóban hangos lehet — különösen egy csendes szobában, késő este vagy fejhallgatóval. A "kényelmes" és a "túl sok" közötti különbség néha csak egy-két hangerős lépés.</p>

<h2>Miért érződnek túl durváknak a hangerő lépései</h2>

<p>macOS <strong>16 hangerő lépés</strong> a billentyűzeten keresztül. Minden lépés a teljes hatótáv körülbelül 6,25%-át teszi ki. Erős hangszórókon vagy érzékeny fejhallgatón egyetlen lépés jelentős hangerőváltozást jelenthet — egy hangerőgomb megnyomásával "tökéletesről" "túl hangosra" vált.</p>

<h2>Beépített fix: negyedlépéses térfogat</h2>

<p>Tartsd meg <strong>Opció + Váltás</strong> és nyomd fel a hangerőt. Minden nyomás egy negyedével a normál lépéshez igazít, így így <strong>64 szint</strong> helyett 16. Ez a négyszeresebb, finomabb vezérlés sokkal könnyebbé teszi a pontos hangerő megtalálását, különösen erős hangszórókkal vagy fejhallgatóval.</p>

<p>Ez az egyetlen leghasznosabb Mac hangos trükk, amiről a legtöbben nem tudnak.</p>

<h2>A mélyebb probléma: egy csúszka mindenhez</h2>

<p>Még 64 szinttel is van egy csúszka, ami minden alkalmazást irányít. Ha elég alacsonyra állítod a hangerőt a kényelmes értesítési hangokhoz, a zenéd túl halk lehet. Ha zenére állítod, egy értesítési ping ugrathat.</p>

<p>A valódi probléma az, hogy a különböző hangforrásoknak eltérő hangerőre van szüksége. Az értesítéseknek finomnak kell lenniük. A zenének jelen kell lennie. A hívásoknak tisztának kell lenniük. A böngészős videónak mérsékelten kell lennie. Egy csúszka nem szolgálja mindet jól.</p>

<h2>Alkalmazásonkénti hangerő a pontos vezérléshez</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> minden alkalmazásnak saját volumercsúszkát ad <strong>1%-os lépések</strong> 0%-tól 200%-ig. Ez 200 szint pontosságot jelent alkalmazásonként, szemben macOS 16 (vagy 64 a módosítóval) rendszerszintű lépéssel.</p>

<img src="/apps/sounddial.png" alt="SoundDial aprócsás, alkalmazásonkénti hangerőszabályzó, 1%-os pontossággal macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Állítsd be a rendszered hangerőt közepes alapszintre (50-60%), majd SoundDial-vel finomhangold az alkalmazásokat:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — kényelmes háttérszint</li>
  <li><strong>Lazaság:</strong> 12% — finom értesítési ping</li>
  <li><strong>Zoom:</strong> 85% — tiszta híváshang anélkül, hogy túlterhelő lenne</li>
  <li><strong>Safari:</strong> 45% — mérsékelt videólejátszás</li>
</ul>

<p>Így egyetlen hangforrás sem lesz "túl hangos". Mindegyik önállóan hangolt az ideális szintjére. A Slack ping 12%-nál alig észrevehető, míg a Zoom hívásod 85%-nál kristálytiszta — mindezt ugyanazon a rendszerhangerőnél.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Laza Huddle hangerő problémái Mac-en: túl csendes, túl hangos, vagy harcos a zenéddel",
    description:
      "A Slack huddle-ok versenyeznek a zenéddel és az értesítéseiddel ugyanazért a hangerőért. Íme, hogyan lehet a huddle hangot függetlenül irányítani minden mástól a Mac-on.",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>A Slack huddle-ek kényelmesek — megnyomsz egy gombot, és hanghívásban vagy anélkül, hogy időpontot egyeztetnél. De a hangzás egy káosz. A huddle ugyanolyan hangerős, mint a Spotify-od. A Slack értesítés ugyanabban a szinten csipog, mint a hívás. És amikor valaki zenét vagy képernyőt oszt meg a társaságban, az vagy hallhatatlan, vagy fülsiketítő.</p>

<p>A probléma nem a Slack. Ez macOS. Minden egy hangerő csúszkán keresztül fut, így a huddle hang, értesítési hangok, zene és böngészőhang mind ugyanazért a helyért harcolnak.</p>

<h2>A Slack belső hangvezérlései</h2>

<p>A Slack korlátozott hangvezérléssel rendelkezik:</p>
<ul>
  <li><strong>Értesítési beállítások:</strong> Slack → Beállítások → Értesítések → Hang és megjelenés. Megváltoztathatod az értesítési hangot, vagy kikapcsolhatod bizonyos hangokat, de az értesítés hangerőjét nem állíthatod be függetlenül a huddle hangerőtől.</li>
  <li><strong>Huddle volumen:</strong> A huddle alatt nincs külön hangerőcsúszka a híváshoz képest Slack többi hangjához. A Slackben minden egy hangfolyam macOS.</li>
  <li><strong>Bemeneti/kimeneti eszköz:</strong> A Slack → Beállítások → Audio & Video lehetővé teszi mikrofon és hangszóró kiválasztását, de nem a hangerőszinteket funkciónként.</li>
</ul>

<h2>A három Slack hangprobléma</h2>

<h3>1. Túl csendes össze a zenehez képest</h3>
<p>A zenéd kényelmes szinten van. Csatlakozol egy csoporthoz. A kollégád hangja ugyanolyan hangerős, mint a zenédnek — nem tudod tisztán megkülönböztetni a szavakat. Ha feltekered a rendszerhangot, túl hangos lesz a zene.</p>

<h3>2. Értesítési hangok a huddle-ok alatt</h3>
<p>Gyűlésbeszélgetésben vagytok. Minden Slack üzenet, ami beérkezik, ugyanolyan hangerőn pingel, mint a hívás. Egy forgalmas munkatérben, ahol aktív csatornák vannak, a folyamatos csipogás miatt a huddle használhatatlanná válik.</p>

<h3>3. Túl hangos összegyűlés a háttérhallgatáshoz</h3>
<p>Néha csatlakozol egy csoporthoz, hogy passzívan hallgass munka közben. Háttérszinten akarod — elég halkan, hogy ne vonja el a figyelmed, elég hangos, hogy hallja, ha valaki kimondja a neved. macOS nem engedi, hogy a Slacket 20%-ra állítsd, miközben a böngésződ 60%-on marad.</p>

<h2>A megoldás: a Slack hangerőjének önállóan történő vezérlése</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> A Slacknek saját volumencsúszkát ad, külön minden más alkalmazástól. Mivel a Slack huddle hangja és értesítési hangja ugyanannak az alkalmazásnak a részei, a csúszka mindkettőt irányítja — de valójában legtöbbször erre vágysz.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Slack hangerő önállóan szabályozza a huddle közben, miközben a zene más szinten szól" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Huddle-optimalizált beállítás</h3>
<ul>
  <li><strong>Lazaság:</strong> 90-100% (tiszta huddle hang, az értesítések hangosak, de aktívan vagy Slackben)</li>
  <li><strong>Spotify:</strong> 15% (alig észrevehető háttér, nem versenyez a hangokkal)</li>
  <li><strong>Böngésző:</strong> Némított (nincs meglepetés fülhang)</li>
</ul>

<h3>Passzív huddle beállítás</h3>
<ul>
  <li><strong>Lazaság:</strong> 30% (háttérben hallgatási szint)</li>
  <li><strong>Spotify:</strong> 40% (az elsődleges hang a zenéd)</li>
  <li><strong>Böngésző:</strong> 50% (normál munkaszint)</li>
</ul>

<p>Mentsd el mindegyiket profilként. Amikor elkezdődik a huddle, alkalmazd a megfelelő profilt egyetlen kattintással. Vagy használni <strong>Automatikus leugrás</strong> — amikor a huddle aktiválja a mikrofonodat, SoundDial automatikusan mindent leenged, kivéve a Slacket.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Hogyan állítsunk alapértelmezett hangerőt új alkalmazásokhoz Mac",
    description:
      "Az új alkalmazások alapértelmezés szerint teljes hangerőn indulnak. Íme, hogyan indíthatod el minden új alkalmazást kényelmes szinten — hogy semmi ne lepődjön meg.",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>Új alkalmazást telepítesz. Először indul. Azonnal lejátszja a hangot — egy bevezető hangot, egy értesítést, egy oktatóvideót — teljes rendszerhangerőnél. Nem számítottál rá. A fejhallgatód bekapcsolva. Csengenek a füleid.</p>

<p>macOS nincs fogalma az "alapértelmezett hangerőről az új alkalmazásokhoz", mert macOS nincs alkalmazásonkénti volumen. Minden alkalmazás megkapja a rendszer hangerőt, és a rendszer hangerő az, amire utoljára beállítottad. Az új alkalmazások nem kapnak különleges bánásmódot — egyszerűen csak olyan szinten robbannak, mint minden más.</p>

<h2>Miért jelent ez problémát</h2>

<p>Amikor először indítasz el egy alkalmazást, fogalmad sincs, milyen hangos lesz. Néhány alkalmazás azonnal lejátszik hangokat (bevezetési oktatóanyagok, értesítési hangok, üdvözlő videók). Ha a rendszered hangerő 80%-on van, mert zenét hallgattál, akkor az új alkalmazás hangja is 80%-os — ami sokkal hangosabb lehet, mint kényelmes egy váratlan hangforráshoz.</p>

<p>Ez különösen zavaró, ha a következők:</p>
<ul>
  <li>Kommunikációs alkalmazások (Slack, Teams), amelyek indító hangzást játszanak</li>
  <li>Alkalmazások, amelyekben videó oktatóanyagok vannak az első indításkor</li>
  <li>Olyan játékok, amelyek azonnal felrobbantják a címképernyős zenét</li>
  <li>Böngészőalapú alkalmazások, amelyek automatikusan lejátszanak tartalmat</li>
</ul>

<h2>A megoldás: alapértelmezett hangerő új alkalmazásokhoz</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> van egy <strong>Konfigurálható alapértelmezett hangerő</strong> új alkalmazásokhoz. A beállításokban beállítod, hogy milyen hangerőszinten kezdjék az újonnan észlelt alkalmazások — például 70%. Amikor először indít el és hangot állít elő, SoundDial 70%-ra állítja a 100% helyett.</p>

<img src="/apps/sounddial.png" alt="SoundDial alapértelmezett hangerő beállítás — az új alkalmazások beállított szinten indulnak, nem teljes sebességgel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ez azt jelenti:</p>
<ul>
  <li>Nem meglepő, hogy az újonnan telepített alkalmazásokból a teljes hangerő hangja</li>
  <li>Minden új alkalmazás kényelmes, kiszámítható szinten indul</li>
  <li>Ezután az alapértelmezettről fel- vagy lefelé állíthatod a szükséges módot</li>
  <li>Miután beállították, a <strong>Térfogatmemória</strong> a funkció megjegyzi az alkalmazás szintjét a jövőbeni indításokhoz</li>
</ul>

<p>Ez egy apró funkció, de megoldja az igazi napi bosszúságot — az "új alkalmazás meglepetéshullámot", ami legalább egyszer mindenkit meglep.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac túl hangos az indítás? Hogyan lehet letiltani vagy csökkenteni",
    description:
      "A Mac startup csengője teljes hangerőn szól, amikor újraindítod — különösen kínos értekezletekben és csendes szobákban. Íme, hogyan lehet elnémítani vagy irányítani.",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>Újraindítod a Mac egy csendes irodában. A tárgyalóterem halálos csend van. Akkor — <em>BONG</em> — a startup csengő teljes hangerővel szól. Mindenki rád néz. A csengő ikonikus, de ugyanakkor irányíthatatlan és gyakran kínosan hangos.</p>

<h2>Hogyan lehet kikapcsolni az indítási hangot</h2>

<p>macOS lehetővé teszi, hogy teljesen kikapcsold a startup csengőt:</p>

<ol>
  <li>Nézz ki <strong>Rendszerbeállítások → hang</strong></li>
  <li>Találd <strong>"Hang lejátszása indításkor"</strong></li>
  <li>Kapcsold ki a pipálást</li>
</ol>

<p>Kész. A Mac mostantól csendben fog elindulni. Nem kell terminálparancsokat használni — ez a beállítás macOS Big Sur óta elérhető.</p>

<h3>Végmódszer (ha szeretnéd)</h3>
<p>Terminálon keresztül is ki lehet tiltani:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>A következő funkciók újraaktiválásához:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Le tudod csökkenteni a kezdőhangot ahelyett, hogy kikapcsolnád?</h2>

<p>Nem közvetlenül. Az indítási csengő rögzített hangerőn szól, amit a leállítás pillanatában a rendszer hangerő határoz meg. Ha a Mac 80%-os hangerőn volt, amikor leállítottad, akkor a csengő nagyjából 80%-on szól. Ha 20%-on volt, akkor a csengő halkabb.</p>

<p><strong>Megoldás:</strong> Mielőtt újraindítsa a Mac, csökkentsd a rendszer hangerőjét 10-20%-ra. A startup csengő ezen az alacsonyabb szinten fog szólni. Nem ideális — emlékezni kell —, de akkor működik, ha a csengő ésszerű hangerőn akarod, nem teljesen elnémítva.</p>

<h2>A szélesebb Mac hangvezérlési probléma</h2>

<p>A startup csengő csak egy példa a macOS korlátozott hangvezérlésére. A rendszer hangjai, értesítési hangjai és az alkalmazás hangjai mind összekeverhetők, minimális független vezérléssel. Ha rendszeresen állítod a hangerőt a nap folyamán különböző hangforrások kezeléséhez, az alkalmazásonkénti hangerőszabályozás megoldja a nagyobb problémát.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Minden alkalmazásnak megadja a Mac saját hangerő csúszkát. Állítsd alacsony értesítési alkalmazásokat, a zenét kényelmes szinten, és teljes hangerőre hívásokat — mindezt önállóan. Mentsd el a konfigurációkat profilként, és válts egy kattintással.</p>

<img src="/apps/sounddial.png" alt="SoundDial — alkalmazásonkénti hangerőszabályzó az összes Mac hangforrás önállóan történő kezelésére" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Túl alacsony a Cisco Webex hangerő Mac? Hogyan lehet megoldani",
    description:
      "A Webex hívások alig hallhatók a Mac-n. Íme minden megoldás — a Webex hangbeállításoktól kezdve a híváshangerő 100%-ra történő növeléséig egy alkalmazásonkénti mixerrel.",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>A Webex az egyik leggyakrabban használt videokonferenciaeszköz a vállalati környezetben — és az egyik leginkább panaszt kapott a hangminőség miatt a Mac-n. Alacsony híváshangerő, tompa hangok, és a hang halkabbnak tűnik, mint a Zoom vagy a Teams, ugyanazon a rendszerhangerőn. Ha alig hallod a Webex hívásaidat, nem vagy egyedül.</p>

<h2>1. Nézd meg a Webex hangbeállításokat</h2>

<p>Egy Webex megbeszélés során kattints a hangmenüre (hangszóró ikon vagy a három pont a Hangbeállítások → alatt):</p>
<ul>
  <li>Győződj meg róla, hogy a helyes <strong>Előadó</strong> Kiválasztva az eszközt</li>
  <li>Húzd a hangszóró hangerő csúszkáját a maximumra</li>
  <li>Kattints a "Teszt" gombra, hogy teszthangot játsszon és ellenőrizd a kimenetet</li>
  <li>Ellenőrizd, hogy a "Music Mode" engedélyezve van-e — kapcsold ki, hacsak nem kifejezetten zenét mutatsz be</li>
  <li>Ellenőrizd a zajeltávolítási beállításokat — az "Remove Background Noise" agresszív módban csökkentheti az észlelt hangerőt</li>
</ul>

<h2>2. Ellenőrizd macOS kimenetet</h2>

<p>Rendszerbeállítások → hang → kimenet. Ellenőrizd, hogy a megfelelő eszköz van kiválasztva, és a hangerő maximum. Egy macOS frissítés vagy eszközváltás után a Webex váratlan kimenetet használhat.</p>

<h2>3. Bluetooth kodekprobléma</h2>

<p>AirPods vagy Bluetooth fejhallgató használata? A Webex mikrofon aktiválása az AAC→SCO kodekkapcsolót kényszeríti az AACSCO kódekapcsolóra, ami csökkenti a hangminőséget és a hangerőt. Használj külön mikrofont (beépített mikrofon vagy Mac USB), és csak a Bluetooth fejhallgatót tartsd kimenetként.</p>

<h2>4. Webex-specifikus hangfeldolgozás</h2>

<p>A Webex agresszív hangfeldolgozással rendelkezik, amely csökkentheti a hívásos résztvevők látszólagos hangerejét. Próbáld ki ezeket a Webex beállításokat:</p>
<ul>
  <li>Állítsd a zajeltávolítást "Alacsonyra" a "Magas" helyett</li>
  <li>Kapcsold ki a "Hangom optimalizálása" opciót, ha engedélyezve van</li>
  <li>Próbáld meg átváltani a "Számítógép hang" funkcióról egy adott eszközre</li>
</ul>

<h2>5. Az IT/adminisztrátor probléma</h2>

<p>Vállalati környezetben a Webexet gyakran az IT kezeli, meghatározott hangpolitikákkal. Néhány beállítás zárolható vagy előre konfigurált lehet. Ha az alapvető megoldások nem működnek, kérdezz az IT osztályodtól a Webex hangszabályokról. Egyes szervezetek korlátozzák a maximális hangszinteket vagy bizonyos hangfeldolgozási beállításokat kényszerítenek be.</p>

<h2>6. A Webex emelése 100% fölé</h2>

<p>Ha a beállítások maximumban vannak, és a résztvevők még mindig túl csendesek, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lehetővé teszi, hogy a Webex felemelje <strong>200%</strong>. Ez a hívás hangját túlmutatja a Webex beépített maximumán — hasznos, ha a résztvevőnek rossz a mikrofonja, vagy ha a Webex hangfeldolgozása túl jelentősen csökkenti a jelet.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Cisco Webex híváshangerő 100%-ra növelése macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial segít a Webex egymást követő megbeszélések során is: automatikus lecsúsztatással automatikusan csökkentheted a háttérzenét minden megbeszélés kezdetekor, és visszaállítod a szünetek alatt. Ments el egy "Meetings" hangerőprofilt, hogy azonnal beállítsd a kedvenc hangegyensúlyodat a munkanapra.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Hogyan hallgass egyszerre két dolgot Mac-on anélkül, hogy őrült lennénk",
    description:
      "Zene és egy podcast. Egy előadás és jegyzetek videó. Egy hívás és háttérzene. macOS arra kényszerít, hogy mindkettőhöz egy kötetet válassz — íme, hogyan egyensúlyozod őket.",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>Egyszerre két hangforrást kell hallgatni. Zene hívás közben. Egy podcast közben egy oktatóvideót nézek. Háttér a tanulás közben. Két dolog, két különböző ideális térfogat. macOS mindkettőhöz egy csúszkát ad.</p>

<p>Ez az macOS alapvető hangkorlátja: minden alkalmazás egy hangerőt oszt meg. Nem mondhatod: "ez 30%, az az 80%-." Minden egy szinten, vagy semmi.</p>

<h2>Amikor tényleg két hangforrásra van szükséged</h2>

<p>Ez nem egy kivételes eset. Így használják a legtöbben a számítógépét:</p>

<ul>
  <li><strong>Zene + videóhívás</strong> — a leggyakoribb. Háttérzene egy Zoom-megbeszélés közben, de elég halk, hogy hallják a kollégákat.</li>
  <li><strong>Előadás + referenciaanyag</strong> — egy diák, aki egy felvett előadást néz, miközben időnként egy YouTube oktatóvideót néz kontextusért.</li>
  <li><strong>Podcast + ambient hangok</strong> — podcastot hallgatni, miközben egy fehér zaj vagy esőhang alkalmazás halkan szól.</li>
  <li><strong>Két böngészőfül</strong> — egy tréningvideó az egyik fülben, egy demó a másikban, különböző hangerőken.</li>
  <li><strong>Játék + hangos chat</strong> — játék hangja az elmerüléshez, Discord a kommunikációhoz.</li>
</ul>

<p>Minden esetben az egyik forrás "elsődleges" (hangosabb, fontosabb), a másik pedig "másodlagos" (halkabb, támogató). Az ideális arány minden kombinációnál eltérő, és a nap folyamán változik.</p>

<h2>A macOS korlátozás</h2>

<p>macOS egy hangerőcsúszkával rendelkezik. Nyomd meg a hangerőgombot, és minden egyformán változik. Ha a hangerőt kényelmes podcasthallgatáshoz állítod be, az esőhangok alkalmazás is ezen a szinten van — vagy túl hangos (zavaró), vagy nem állítottad be a saját alkalmazásában (ha egyáltalán van hangerőszabályzó).</p>

<p>Néhány alkalmazásnak belső hangerő csúszkák vannak (Spotify, VLC), de a legtöbb esetben nincs. És még ha így is van, az alkalmazások között váltani, hogy két külön hangerőszabályt állítsanak be, nehézkes és lassú.</p>

<h2>A megoldás: alkalmazásonként egy panelen lévő hangerő</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Minden alkalmazást egy menüsávba helyez, független hangerő csúszkákkal. Mindkét hangforrás egymás mellett, mindegyiknek saját szintje. Állítsd be az egyiket anélkül, hogy a másikhoz érnél.</p>

<img src="/apps/sounddial.png" alt="SoundDial két hangforrást mutat különböző hangerő hangerőn macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Példa beállítások:</p>

<p><strong>Zene + Zoom hívás:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>Podcast + esőhangok:</strong></p>
<ul>
  <li>Podcast alkalmazás: 70% | Rain alkalmazás: 15%</li>
</ul>

<p><strong>Előadás + YouTube oktató:</strong></p>
<ul>
  <li>Zoom (előadás): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>Minden kombináció más-más egyensúlyt jelent. Azokat tartsd meg, amiket rendszeresen használsz <strong>Térfogatprofilok</strong> és egy kattintással váltanak. Az automatikus lehúzás automatikusan kezeli a zene+hívás helyzetet — amikor egy hívás elkezdődik, a zene a beállított szintre esik anélkül, hogy bármihez is nyúlnál.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Hogyan nézz filmeket Mac-on anélkül, hogy mindenkit felébresztenénk",
    description:
      "A párbeszéd hallhatatlan, majd robbanások rázzák meg a falakat. Íme, hogyan lehet megszelídíteni a filmhangot a késő esti Mac-on nézéshez — anélkül, hogy egy szót is kihagynánk.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>Hajnali 1 óra van. Ágyban nézel egy filmet a MacBookodon. A szereplők suttognak — feltekered a hangerőt. Aztán autós üldözés kezdődik, és hirtelen az egész lakásod hallja. A hangerő billentyűjére törekszel. Ez a ciklus két órán át ismétlődik.</p>

<p>A probléma a <strong>Dinamikatartomány</strong> — a film legcsendesebb és leghangosabb pillanatai közötti szakadék. Egy erős hangrendszerrel rendelkező moziban ez a hangszínvonal magával ragadó élményt nyújt. MacBookon éjfélkor állandó harcot hoz létre a "nem hallani a párbeszéd" és a "szomszédok felébresztése" között.</p>

<h2>Miért hangosabbak a filmek, mint a zene vagy a podcastok</h2>

<p>A zenét általában tömörített dinamikai tartományban masterálják — a legcsendesebb és leghangosabb részek közötti különbség viszonylag kicsi (talán 10-15 dB). A podcastok még tömörebbek. A filmek, különösen az akciófilmek, dinamikus tartományban lehetnek <strong>30-40 dB</strong> — a csendes részek suttogásszerűek, a hangos részek pedig a színházi ülések megrázására készültek.</p>

<p>Amikor a MacBook hangerőt állítod be, hogy hallja a párbeszédet, az akciójelenetek százszor hangosabbak a hangnyomás szempontjából. Nincs olyan kényelmes rendszerhangerő, ami mindkettőhöz működne.</p>

<h2>1. megoldás: Használd a streaming szolgáltatás éjszakai módját</h2>

<p>Néhány streaming szolgáltatás kifejezetten erre a dinamikus tartomány tömörítési funkcióval rendelkezik:</p>
<ul>
  <li><strong>Netflix:</strong> Nézd meg a "Csökkentsd a hangos hangokat" kapcsolót a hangbeállításokban lejátszás közben</li>
  <li><strong>Apple TV+:</strong> Rendszerbeállítások → hozzáférhetőség → "Hangos hangok csökkentése"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost" a támogatott címeken</li>
  <li><strong>Disney+:</strong> Jelenleg nincs ekviviáns funkció</li>
</ul>

<p>Ezek a funkciók tömörítik a dinamikatartományt, így a csendes részek hangosabbak, a hangos részek pedig halkabbak. Az eredmény egyenletesebb hangzás, ami alacsony hangerőn működik.</p>

<h2>2. javítás: Használj fejhallgatót</h2>

<p>A fejhallgató megoldja a "mindenki felébresztése" részét — a hangod privát marad. De nem oldják meg a dinamikatartomány problémáját. A párbeszéd-robbanás ciklusa még mindig megtörténik, csak a füledben. Itt segít az alkalmazásonkénti hangerőszabályzó: állítsd be a streaming alkalmazás hangerőjét pontosan a fejhallgató hallgatáshoz.</p>

<h2>3. megoldás: Állítsd be a streaming alkalmazást egy adott hangerőre</h2>

<p>Az igazi probléma az éjszakai nézésnél, hogy a streaming alkalmazás, az értesítési hangok és minden más hang ugyanazon a rendszerhangerőn szól. Egy Slack ping hajnali 2-kor, ugyanazon a hangerőn, mint a filmed párbeszéde, szívrohamos szintű meglepetés.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Lehetővé teszi, hogy tökéletes késő esti beállítást teremts:</p>

<img src="/apps/sounddial.png" alt="SoundDial késő esti filmbeállítás — streaming alkalmazás közepes hangerőn, értesítések némítva" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Késő esti filmprofil</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / böngésző:</strong> 40-50% — kényelmes párbeszédszint anélkül, hogy fülsiketítő akciójeleneteket talált</li>
  <li><strong>Lazaság:</strong> tompa — nincs meglepetés csipogás</li>
  <li><strong>Posta:</strong> tompa</li>
  <li><strong>iMessage:</strong> tompa</li>
  <li><strong>A rendszer hangjai:</strong> tompa</li>
</ul>

<p>Mentsd el ezt "Éjszaka" profilként. Amikor elkezdesz egy késő esti filmet, egy kattintással alkalmazd a profilt. Minden értesítési forrás elnémítva van, és a streaming alkalmazásod szabályozott hangerőn van. Ha végeztél, válts vissza a nappali profilodhoz.</p>

<p>Ezt kombináld a streaming szolgáltatás "Csökkentsd a hangos hangokat" funkciójával a maximális hatásért: a szolgáltatás tömöríti a dinamikatartományt, és SoundDial biztosítja, hogy a Mac többi ne adjon hangot sem.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac a hangerő visszaáll alvás után? Hogyan tartsd meg a hangbeállításokat",
    description:
      "Minden alkalommal, amikor a Mac felébred az alvóból, a hangerő rossz — a maximumra állítva, nullára csökkent, vagy rossz kimenetre váltott. Íme, miért és hogyan lehet ezt megoldani.",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>Becsukod a MacBook fedélét. Később nyitod ki. A hangerő más. Lehet, hogy a maximum, amikor nálad 40% volt. Talán a fejhallgatóról a hangszórókra váltott. Talán nullán van. Alvás előtt rendben volt — most már rossz.</p>

<p>A hangerő visszaállítása alvás után egy tartós macOS hiba, amely különböző formákban jelenik meg különböző macOS verziókban. Íme, mi okozza, és hogyan kezelje vele.</p>

<h2>Miért történik ez</h2>

<h3>1. A hangkimeneti eszköz alvó közben cserélve</h3>
<p>Ha Bluetooth fejhallgatód volt csatlakoztatva alvás előtt, és a Mac alvás közben lekapcsolódnak (az akkumulátor lemerült, eltűnt a hatótávolságból), macOS az ébredéskor bekapcsol a beépített hangszórókra. Mivel macOS minden eszköz hangerőt jegyzi meg, a hangerő változik ahhoz, amire a hangszórók legutóbb beállítottak — ami nagyon eltérhet a fejhallgató hangerőtől.</p>

<h3>2. Core Audio démonindítás újraindítása</h3>
<p>macOS audio daemonja (coreaudiod) néha újraindul alvás/ébresztés ciklusok alatt. Amikor újraindul, előfordulhat, hogy alapértelmezett hangerőszintekkel indul el a legutóbbi beállítások helyett. Ez egy rendszerhiba, amit az Apple részben különböző frissítésekben javított, de soha nem szüntetett meg teljesen.</p>

<h3>3. HDMI/DisplayPort újracsatlakozás</h3>
<p>Ha külső kijelzőt használsz HDMI vagy DisplayPorton keresztül, a fedél becsukása és kinyitása miatt a kijelző leszakadhat és újra csatlakozhat. Néhány kijelző hangkimeneti eszköz is, és macOS a folyamat során a kijelző hangszóróira vagy vissza válthatnak, így a hangerő is megváltozik.</p>

<h3>4. Bluetooth újrapárosítás</h3>
<p>Amikor a Bluetooth eszközök alvó után újra csatlakoznak, a hangerő egyeztetése más szintet eredményezhet, mint korábban. Ez különösen gyakori harmadik féltől származó Bluetooth fejhallgatóknál (kevésbé az AirPods-nál, amelyeket az Apple optimalizált).</p>

<h2>Javítások</h2>

<h3>Megakadályozza a Bluetooth megszakítását alvás közben</h3>
<p>Rendszerbeállítások → Bluetooth → Advanced (vagy kattints az eszközödön az "i"-re). Néhány beállítás szabályozza, hogy a Bluetooth aktív marad-e alvás közben. A kapcsolat aktív tartása megakadályozza a megszakítás/újracsatlakozás ciklusát, amely visszaállítja a hangerőt.</p>

<h3>Tiltsd le az automatikus váltást AirPods esetén</h3>
<p>Rendszerbeállítások → Bluetooth→ az AirPods mellett kattints a "i"-re → a "Connect to This Mac" → "Mikor csatlakozott legutóbb ehhez a Mac-hez." Ez megakadályozza, hogy az AirPods automatikusan csatlakozzon egy másik eszközhöz alvó alatt.</p>

<h3>Állíts be egy következetes kimeneti eszközt</h3>
<p>Az alvó állapotból való ébredés után nyomva tartsd az Opciót, és kattints a Hang ikonra a menüsávban. Válaszd ki a kedvenc kimeneti eszközödet. Ezt következetesen csináld, és macOS végül "ragaszkod" a saját preferenciádhoz.</p>

<h3>NVRAM visszaállítása (Intel Macek)</h3>
<p>Ha a hangerő visszaállítása krónikus, állítsd vissza az NVRAM-et: kapcsold le → áramot 20 másodpercig az Option+Command+P+R nyomva tartáson. Ez töröli a tárolt hangbeállításokat, és megoldhatja a tartós hangerő problémákat.</p>

<h2>Védd meg a hangegyensúlyodat SoundDial</h2>

<p>Még ha a rendszer hangerő alvás után is visszaáll, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> védi a <em>Alkalmazásonként</em> Térfogategyenleg. Az <strong>Térfogatmemória</strong> a funkció minden alkalmazás hangerőjét önállóan menti el, és visszaállítja az ébresztés, újraindítás vagy alkalmazás újraindítása után.</p>

<img src="/apps/sounddial.png" alt="SoundDial az alkalmazásonként megőrzött volumenszint megőrzése Mac alvási és ébrenléti ciklusok után" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tehát még ha macOS alvás után 80%-ra is állítja a rendszer hangerőjét, az alkalmazásonkénti egyenleg változatlan marad:</p>
<ul>
  <li>A Spotify továbbra is a rendszer hangerő 30%-án van</li>
  <li>Zoom továbbra is 100%-on</li>
  <li>Laza még mindig tompa</li>
</ul>

<p>Lehet, hogy a rendszer hangerőt kell javítanod (egy beállítás), de nem kell minden alkalmazást újrakiegyensúlyoznod (ami hat-hét beállítást jelentene). És <strong>Térfogatprofilok</strong>, még a teljes helyreállítás is egy kattintás.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac Hang zenei produkcióhoz: DAW és kommunikáció külön irányítása",
    description:
      "Használod a Logic Pro-t vagy az Ableton-t Discord hívás közben? Íme, hogyan hallhatod a DAW-odat teljes hangminőségben, miközben a hangbeszélgetést kényelmes szinten tartod.",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>A Logic Pro-ban (vagy Abletonban, vagy FL Studio-ban) készítel zenét. Te is Discordon vagy egy kollaborental. A probléma: a DAW kimeneted és a Discord ugyanazért a hangerőért küzd. Tekerd fel a Logic-t, hogy tisztán halld a mixed, és a Discord dübörög a füledben. Ha lekapcsolod a Discordot, a mixed túl halk ahhoz, hogy megfelelően értékeld.</p>

<p>Ez komoly probléma a zenei producerek számára Mac-nél, mert a hangerő monitorozása közvetlenül befolyásolja a keverési döntéseket. Ha a DAW-od túl halk, mert a Discord versenyez, akkor hangosabban keveredsz, mint tervezte. Ha a Discord elnyomja a részleteket, akkor a keveredben lévő problémákat lemaradhatod.</p>

<h2>Miért fontos ez a produkció szempontjából</h2>

<p>A zenei produkció szükséges <strong>Pontos monitorozási szintek</strong>. Megbízható keverési döntésekhez következetes, kalibrált hangerőn kell hallanod a DAW-odat. Kommunikációs alkalmazások, értesítések és egyéb hangforrások zavarják ezt — de gyakran szükség van egyszerre a távoli együttműködéshez.</p>

<p>A profi stúdiók külön monitoros útvonalakkal, beszélgetőrendszerekkel oldják meg ezt. Egy laptopon szoftverre van szükség.</p>

<h2>A DAW belső megközelítése</h2>

<p>Használhatod a DAW belső monitorozási szintjét, hogy egyenletes kimenetet tarts, majd belső hangerőt állíthatsz be. De:</p>
<ul>
  <li>A Discord kimeneti hangerő csúszkája pontatlan, és 0-100%-ra korlátozott.</li>
  <li>Még mindig nem lehet megakadályozni, hogy a rendszerhangok és értesítések váratlan szinten zavarjanak be</li>
  <li>Ha egy számot kell hivatkoznod Spotify-ban vagy YouTube-on, azok is rendszerhangerőn vannak</li>
</ul>

<h2>Alkalmazásonkénti mennyiség a gyártáshoz</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Lehetővé teszi, hogy minden alkalmazáshoz önállóan állítsd be a hangmennyiségeket:</p>

<img src="/apps/sounddial.png" alt="SoundDial a DAW kimenet Discordból és a referencia sávok elválasztása a macOS-on a zenei produkcióhoz" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Gyártási beállítás</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — az elsődleges monitorozási szinted</li>
  <li><strong>Discord / hangchat:</strong> 40-60% — hallható, de egyértelműen másodlagos a keverésedhez képest</li>
  <li><strong>Spotify / referencia számok:</strong> 80% — egyeztesd meg a DAW szintedet a pontos A/B összehasonlításokhoz</li>
  <li><strong>Slack / értesítések:</strong> Némított — nulla interferencia a gyártás során</li>
  <li><strong>Safari / Chrome:</strong> 50% — hogy nézd az oktatóanyagokat anélkül, hogy kifújnád a füled</li>
</ul>

<h3>Mentsd el "Production" profilként</h3>
<p>Mentsd el ezt a konfigurációt, és alkalmazd egy kattintással, amikor leülsz a producere. Ha végeztél és átváltottál a laza használatra, alkalmazd a "Normális" profilodat. Nem kell nyolc alkalmazást újraállítani.</p>

<h3>Automatikus lecsúszás távoli ülésekhez</h3>
<p>Ha egy együttműködővel vagy telefonon, az SoundDial automatikus lecsúszása csökkentheti a nem kommunikációs alkalmazásokat, amikor a mikrofon aktív. De a produkcióhoz érdemes lehet <em>Kikapcsolás</em> automatikus lecsúszás — a DAW-od következetes szinten kell lenni, függetlenül attól, hogy beszélsz-e. A kapcsoló egy kattintással a beállításokban.</p>

<h2>Egy megjegyzés a késleltetésről</h2>

<p>SoundDial az Apple Core Audio Tap API-ját használja a hangerő szabályozására. A feldolgozás elhanyagolható késleltetést ad hozzá — ami a monitorozás szempontjából észrevehetetlen. Ha a DAW-on keresztül rögzíted és figyelsz közvetlen monitorozással bekapcsolva, SoundDial nem zavarja a DAW hangútját. Csak azt a hangszintet állítja be, ami eléri a hangszóróidat vagy fejhallgatókat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Az Apple Music hangerő túl alacsony Mac? Hogyan javítsuk és növelheted ezt",
    description:
      "Az Apple Music maximális hangerőn van Mac, de még mindig túl halk? Nézd meg a Sound Check-et, EQ beállításokat, és tanuld meg, hogyan lehet az Apple Music 100%-ot fölé emelni.",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Az Apple Music teljes hangerőn szól. A Mac teljes hangerőn van. Egy dal, amit tudod, hogy hangosnak kellene lennie, alig hallható. Eközben, amikor Spotify-ra váltok — ugyanaz a dal, ugyanaz a hangerő — az észrevehetően hangosabb. Mi történik?</p>

<p>Az Apple Musicnak több beállítása is van, amelyek csökkenthetik a lejátszási hangerőt, és ezek nem feltűnőek. Nézzük át mindegyiket.</p>

<h2>1. Ellenőrizd a hangellenőrzést</h2>

<p>Az Apple Music-nak van egy funkciója, amit hívnak <strong>Hangellenőrzés</strong> Ez normalizálja az összes szám hangerejét, így nagyjából ugyanazon a hangerőn szólnak. Ez megakadályozza a dalok közötti zavaró hangerőugrásokat, de ezt úgy teszi: <em>Csökkentés</em> a hangosabb számok hangerője — ami mindent halkabbá tesz összességében.</p>

<p>Ellenőrizni: Nyisd meg a Music alkalmazást → Beállításokat (⌘,) → lejátszás → <strong>Hangellenőrzés</strong>.</p>

<p>Ha a Sound Check engedélyezett, próbáld meg kikapcsolni. Azok a dalok, amelyeket korábban a csendesebb számokhoz csökkentettek, most az eredeti masterelt szintjükön játszanak — ami gyakran jóval hangosabb.</p>

<h2>2. Ellenőrizd az EQ beállítást</h2>

<p>Az Apple Music-ban beépített egyenlítő található. Néhány EQ előbeállítás csökkenti az összhangerőt, hogy elkerüljék a klipesztést bizonyos frekvenciák növelésekor.</p>

<p>Ellenőrizve: Zenei alkalmazás → Beállítások → lejátszás → <strong>EQ</strong>. Ha EQ előbeállítást választanak (különösen "Spoken Word", "Late Night" vagy "Small Speakers"), próbáld meg "Kikapcsolva" állítani, és nézd meg, javul-e a hangerő.</p>

<p>Különösen a "Late Night" EQ tömöríti a dinamikai tartományt — így a csendes részek hangosabbak, míg a hangosak halkabbak. Ez mindent "laposabbnak" és alacsonyabb hangerőnek érzhet.</p>

<h2>3. Ellenőrizd a veszteségmentes hang beállításokat</h2>

<p>Ha bekapcsolva van az Apple Music Lossless (Beállítások → Hangminőség), akkor a jobb minőségű stream valójában alacsonyabb hangerővel jelentkezhet, mint a normál AAC stream, bizonyos sávoknál. Ez azért van, mert a veszteségmentes nem rendelkezik ugyanazokkal a mastering beállításokkal, mint az Apple az AAC verziókban.</p>

<p>Próbálj ideiglenesen átváltani AAC minőségre, hogy megnézd, észrevehető-e a hangerő különbség.</p>

<h2>4. Fejhallgató biztonsága</h2>

<p>Rendszerbeállítások → hang → fejhallgató biztonsága. Ha a "Csökkentse a hangos hangot" bekapcsolva, macOS globálisan korlátozza a fejhallgató hangerőjét — ami az Apple Musicot és minden mást is érint.</p>

<h2>5. Emeld az Apple Music 100%-ot</h2>

<p>Ha mindent ellenőriztél, és az Apple Music még mindig túl halk — legyen szó a Sound Check agresszívságáról, egy halk albumról, vagy a MacBook hangszórók egyszerűen nem elég hangosak — egy alkalmazásonkénti hangerőnövelés megoldja a problémát.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lehetővé teszi, hogy az Apple Music-ot felemeld <strong>200%</strong>. A hangjel a rendszer szintjén felerősítődik, mielőtt elérné a hangszórókat vagy a fejhallgatókat. Csak az Apple Music hangosabb — a Zoom, a Slack és a böngésződ a jelenlegi szinten maradnak.</p>

<img src="/apps/sounddial.png" alt="SoundDial az Apple Music hangerő 100%-ra növelése macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ez az ellenkező problémánál is hasznos: ha az Apple Music túl hangos a Zoom hívásodhoz képest, csökkentsd az Apple Musicot 25%-ra SoundDial között, miközben a Zoomot 100%-on tartsd. Az alkalmazásonkénti vezérlés azt jelenti, hogy soha nem kell egyik alkalmazás hangerőjét a másikért kompromittálni.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Ingyenes térfogatkeverő Mac: Mit kapsz (és amit nem)",
    description:
      "Ingyenes, alkalmazásonként használható hangerőkeverőt keresel Mac? Íme egy őszinte összefoglaló arról, mit kínálnak az ingyenes opciók, mit hiányoznak belőlük, és mikor éri meg fizetni.",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>Ha rákeresel a "free volume mixer for Mac" kifejezésre, egy fő eredményt találsz: <strong>Háttérzene</strong>. Ez az egyetlen figyelemre méltó, ingyenes, nyílt forráskódú, alkalmazásonként használható hangerőszabályzó alkalmazás macOS számára. Nézzük meg, mit kapsz valójában — és mit adsz fel.</p>

<h2>Háttérzene: az ingyenes opció</h2>

<p>A Background Music egy ingyenes, nyílt forráskódú alkalmazás, amelyet a GitHubon üzemeltetünk. Ez a következőket adja:</p>

<ul>
  <li><strong>Alkalmazásonkénti volumencsúszkák</strong> — minden futó alkalmazás alapvető hangszabályozása</li>
  <li><strong>Automatikus szünetes zene</strong> — megállítja a zenelejátszót, amikor egy másik alkalmazás szól hangot, folytatja, amikor megáll</li>
  <li><strong>Alapértelmezett kimeneti eszköz beállítása</strong> — felülírni, hogy az alapértelmezett eszközöket az alkalmazások használják</li>
</ul>

<h3>Mi nincs a háttérzene</h3>
<ul>
  <li><strong>Nincs 100%-os hangerőnövelés</strong> — a csúszkák csak 0%-ról 100%-ra mennek. Nem tudom felerősíteni a csendes alkalmazásokat.</li>
  <li><strong>Nincs hangerőprofil</strong> — nem lehet mentést és váltani konfigurációk között</li>
  <li><strong>Nincs automatikus lehajlás</strong> — az automatikus szünet eltér az automatikus lehúzástól. A szünet teljesen megállítja a zenét; A lehajlás kényelmes háttérszintre emeli le. Sokan inkább a csendes háttérzenét részesítik előnyben hívások közben, mint a teljes csend.</li>
  <li><strong>Nincs térfogatmemória</strong> — nem emlékszik az újraindítások közötti alkalmazásonkénti volumenekre</li>
  <li><strong>Nincsenek billentyűs rövidítések</strong> — nincs gyorsbillentyű a keverő kikapcsolására vagy az összes alkalmazás elnémítására</li>
  <li><strong>Nincs kimeneti eszköz kapcsolás</strong> — nem lehet ugyanannál a panelnél hangszórót vagy fejhallgatót váltani</li>
</ul>

<h3>A megbízhatósági probléma</h3>
<p>A Background Music legnagyobb problémája nem a funkciók – hanem a stabilitás. Úgy működik, hogy beszerel egy <strong>Virtuális hangeszköz meghajtó</strong>, és ez a meghajtó macOS frissítések esetén meghibásodik. Szinte minden nagyobb macOS megjelenés (Ventura, Sonoma, Sequoia, Tahoe) után a felhasználók így számolnak be:</p>
<ul>
  <li>A virtuális eszköz nem telepíti a telepítést</li>
  <li>Hang sistergése és hibák</li>
  <li>Alkalmazások nem észlelhetők</li>
  <li>Egyáltalán nincs hangkimenet</li>
  <li>Az alkalmazás összeomlik indításkor</li>
</ul>

<p>Mivel önkéntes által fenntartott nyílt forráskódú projektről van szó, a javítások nem mindig időszerűek. Lehet, hogy hetekig nem lesz alkalmazásonkénti mennyiség egy macOS frissítés után.</p>

<h2>Egyéb "ingyenes" lehetőségek</h2>

<h3>eqMac (ingyenes szint)</h3>
<p>Az eqMac ingyenes szintje rendszerszintű egyenlítőt biztosít, de nem alkalmazásonkénti hangerőszabályzót. Az alkalmazásonkénti funkciókhoz eqMac Pro (előfizetés) szükséges. Az ingyenes verzió hasznos, ha elsősorban EQ-ra van szükséged, nem hangerőkeverésre.</p>

<h3>macOS beépített</h3>
<p>macOS nincs beépített hangerőkeverő. A legközelebbi a Rendszerbeállítások → Hang riasztás hangerő csúszkája, amely csak a rendszerhangokat érinti — nem az alkalmazás hangját.</p>

<h2>Amikor a szabad elég</h2>

<p>A háttérzene lehet jó, ha:</p>
<ul>
  <li>Csak az alap alkalmazásonkénti mennyiségre van szükség (0-100%)</li>
  <li>Nem kell profilok, automatikus lehajlás vagy hangerőnövelés</li>
  <li>Kényelmesen javíthatod, ha macOS frissítések tönkreteszik</li>
  <li>Rendben van egy virtuális hangeszköz a hangláncodban</li>
</ul>

<h2>Amikor érdemes fizetni</h2>

<p>Egy fizetős hangerőkeverő megéri, ha szükséged van rá:</p>
<ul>
  <li><strong>Megbízhatóság</strong> — macOS frissítések után működik, önkéntes javítások nélkül</li>
  <li><strong>Hangerő növelése 200%-ra</strong> — erősítik a csendes alkalmazásokat a beépített maximumukon túl</li>
  <li><strong>Profilok</strong> — ments el a konfigurációkat, és egy kattintással válts Meeting/Focus/Gaming között</li>
  <li><strong>Automatikus leugrás</strong> — automatikus hangerőcsökkentés hívások alatt, nem csak automatikus szünetet</li>
  <li><strong>Nincsenek rendszermeghajtók</strong> — működik az Apple natív API-jával, nincs virtuális hangeszköz, ami megtörhet</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Költsége 14,99 € — egyszeri egyszeri, nem előfizetés. A kontextus kedvéért: ez kevesebb mint két hónapnyi Spotify előfizetés, egy olyan eszközért, amit minden nap használsz. Kevesebb, mint a SoundSource (39 dollár) ára kevesebb, mint a fele, és olyan funkciókat tartalmaz (profilok, automatikus lecsúszás), amelyek a SoundSource nem rendelkezik.</p>

<img src="/apps/sounddial.png" alt="SoundDial — megbízható, alkalmazásonkénti hangerőkeverő Mac profilokkal, automatikus lecsúszással és 200%-os erősítéssel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple által értékelt, sandbox, rendszerillepőszerek nélkül. 14,99 € egyszeri díj, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Hogyan egyensúlyozzuk a zene és a hangbeszélgetés hangerőjét Mac",
    description:
      "A zene túl hangos a Discordon. Vagy a hívás túl csendes a Spotify alatt. macOS nem engedi, hogy kiegyensúlyozd őket, így állíthatod be a tökéletes arányt.",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>Zenét akarsz hallgatni, miközben barátakkal beszélgetsz Discordon (vagy Zoomon, vagy FaceTime-on). A zenének jelen kell lennie, de nem túl erőteljesnek. A hangbeszélgetésnek egyértelműnek és dominánsnak kell lennie. Egyszerű kérés. macOS lehetetlenné teszi.</p>

<p>Egy rendszer szabályozza a hangerőt, így elakadsz: feltekerd a hangerőt a hívásra, és a zene túl hangos. Ha lehalkítod a zenét, nem hallod a barátaidat. Nincs beépített mód arra, hogy ezeket a két dolgot különböző szintekre állítsuk.</p>

<h2>Az alkalmazáson belüli volumen-megoldás</h2>

<p>Mind a Spotify, mind a Discord belső hangerő csúszkával rendelkezik. Elméletben le lehetne csökkenteni a Spotify csúszkáját 30%-ra, és a Discord kimenetét 100%-on tartanád. Ez 30/100-as arányt eredményez.</p>

<p>A gyakorlatban:</p>
<ul>
  <li>Minden alkalmazásra váltanod kell, hogy beállítsd a csúszkát</li>
  <li>Az arány változik, ha a rendszer hangerőt állítod (mindkettő arányosan skálázható)</li>
  <li>Nem minden alkalmazásnak van belső hangerő csúszka</li>
  <li>Pontatlan — kis Spotify csúszkával, nincs százalék megjelenítése</li>
  <li>Ha bezárod és újra megnyitod a Spotify-t, a csúszka visszaindulhat</li>
</ul>

<h2>Az igazi megoldás: független alkalmazásonkénti volument</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> A Spotify és Discord is ugyanarra a panelre kerül, független hangerő csúszkákkal. Állítsd be a kívánt arányt, és hagyd meg:</p>

<img src="/apps/sounddial.png" alt="SoundDial a Spotify és a Discord különböző hangerőfokú egyensúlyozása macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>A zene + hangbeszélgetés arany aránya</h3>
<p>A legtöbben ezt használják alapján:</p>
<ul>
  <li><strong>Hangbeszélgetés 85-100%-on</strong> — mindig tisztán hallható, domináns a keverésben</li>
  <li><strong>Zene 20-35%</strong> — jelen vannak, de soha nem versengnek a hangokkal</li>
</ul>

<p>A pontos arány a zenétől, a fejhallgatótól és a személyes preferenciától függ. A lényeg, hogy egyszer megtalálhatod a tökéletes egyensúlyt, és megtartod — ahelyett, hogy folyamatosan igazítanád.</p>

<h3>Mentsd el profilként</h3>
<p>Mentsd el a zene/hangchat egyenlegedet profilként. "Gaming" profil: Discord 100%, játék 50%, Spotify 20%. "Chill" profil: Discord 70%, Spotify 60%. Váltasz egy kattintással közöttük.</p>

<h3>Automatikus leugrás hívásokhoz</h3>
<p>Ha zenét hallgatsz, és hívás érkezik, az SoundDial automatikus lecsúszása automatikusan lecsökkenti a zenét a beállított szintre. Amikor véget ér a hívás, újra feljön a zene. Semmihez sem nyúlhatsz.</p>

<p>A hangegyensúly problémája minden Mac felhasználónak szembesül, amint egyszerre fut a zene és a hívás. Ez egy egyszeri €14,99 fix megoldás.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac Hangerőszabályzó: A teljes útmutató (2026)",
    description:
      "Minden, amit tudni kell a hangvezérlésről macOS – az alapvető billentyűbillentyűktől kezdve az alkalmazásonkénti hangerő, kimenetváltás és automatizálás módon.",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS ad egy hangerőcsúszkát és némító gombot. Ez az Apple beépített hangvezérlésének mértéke. De a Mac valójában sokkal több hangfunkcióval rendelkezik, mint amennyit a Surface sugall — rejtett billentyűbillentyűk, alkalmazásonkénti hangerő eszközök, kimeneti eszközök kezelése és automatizálási funkciók, amelyeket a legtöbb felhasználó soha nem fedez fel.</p>

<p>Ez a teljes útmutató a hangvezérléshez a Mac hangzásában. Az alapoktól a hatékony funkciókig – minden egy helyen.</p>

<h2>1. rész: Beépített hangerőszabályzók</h2>

<h3>A hangerő billentyűk</h3>
<p>A hangerő növelése (F12), a hangerő csökkentése (F11) és a némítás (F10) gombjai 16 lépésben állítják a rendszer hangerőjét. Minden lépés nagyjából a teljes hatótáv 6,25%-át teszi ki. A jelenlegi hangerő a képernyőn egy átfedésként jelenik meg.</p>

<h3>Finomszemcsésű térfogat: Opció + Shift</h3>
<p>Tartsd meg <strong>Opció + Váltás</strong> és nyomd fel a hangerőt. Minden nyomónyomás egy negyedével a normál lépéshez igazít — így <strong>64 hangerőszint</strong> helyett 16. Elengedhetetlen ahhoz, hogy megtaláljuk a tökéletes fejhallgató hangerőt, amikor a normál lépések túl durvák.</p>

<h3>Néma hangerőállítás: Váltás</h3>
<p>Tartsd meg <strong>Váltás</strong> és nyomd fel a hangerőt. A hangerő változik, anélkül, hogy hallható visszacsatolás "poppan" lenne. Ezt használd hívás vagy előadás hangerő beállításakor.</p>

<h3>Menüsáv hangerő csúszka</h3>
<p>Ha a Hang ikon a menüsávban van (engedélyezd a Rendszer beállításokban, → Vezérlőközpontban → Hang → Mindig Jelenik a menüsávban), rákattintva hangerő csúszkát látsz. Ez egy folyamatos csúszka, nem léptes, mint a billentyűzet billentyűk, így bármilyen pontos szintet be lehet állítani.</p>

<h3>Vezérlőközpont</h3>
<p>Kattints a menüsávban a Control Center ikonra (kétkapcsolós ikon) → kattints a Hang szekcióra, ahol hangerő csúszkát és gyors hozzáférést kapsz a kimeneti eszköz kiválasztásához.</p>

<h2>2. rész: Kimeneti eszközkezelés</h2>

<h3>Kapcsolási kimeneti eszközök</h3>
<p>A leggyorsabb beépített módszer: tartsd meg <strong>Opció</strong> és kattints a Hang ikonra a menüsávban. Látod az összes elérhető kimeneti és bemeneti eszköz listáját. Kattints az egyre, hogy azonnal válts.</p>

<p>Alternatívaként: Rendszerbeállítások → hang → kimenet. Válaszd ki a kedvenc eszközödet a listáról.</p>

<h3>Bluetooth eszközkezelés</h3>
<p>macOS külön-külön megjegyezi az egyes kimeneti eszközök hangerőszintjét. Amikor hangszórókról (70%-on) AirPods-ra váltasz, a hangerő úgy alakul, mint amikor legutóbb használtad azt az eszközt. Ez olyan érzés lehet, mintha a hangerő "magától változna", ha nem számítasz rá.</p>

<h3>Aggregált és többkimenetű eszközök</h3>
<p>Fejlett beállításokhoz nyisd meg az Audio MIDI beállítást (Applications → Utilities), hogy aggregált eszközöket hozz létre (több bemenetet kombinál) vagy többkimenetű eszközöket (egyszerre több kimenetre küldj). Ezek elsősorban professzionális hangrendszerekhez hasznosak, nem mindennapi használathoz.</p>

<h2>3. rész: Riasztás és értesítési hangerő</h2>

<h3>Rendszerriasztási mennyiség</h3>
<p>macOS külön riasztási hangerő csúszkával rendelkezik: Rendszerbeállítások → Hang → Riasztás hangerő. Ez a rendszer hangjainak (Funk, Tink, Bottle stb.) hangerőjét függetlenül szabályozza a fő hangerőtől. Azonban csak macOS rendszerriasztásokat érint — nem a harmadik féltől származó alkalmazások, mint a Slack, Discord vagy Teams értesítési hangjait.</p>

<h3>Értesítési hangmenedzsment</h3>
<p>Menj a Rendszerbeállításokhoz → Értesítésekhez. Minden alkalmazásnál bekapcsolhatod vagy kikapcsolhatod a "Lejátszás hang értesítésekhez" opciót. Ez bináris — nem lehet egy alkalmazás értesítését halkabbá tenni, csak teljesen bekapcsolva vagy teljesen kikapcsolva.</p>

<h3>Fókusz módok</h3>
<p>A fókusz módok (Rendszerbeállítások → Fókusz) elnyomják az értesítéseket a kiválasztott alkalmazásokból. El tudják némítani az értesítési hangokat, de nem befolyásolják a médiahangerőt. A zenéd teljes hangerőn szól még a Do Not Disturb (Ne zavarja) módban is.</p>

<h2>4. rész: Fejhallgató-specifikus vezérlők</h2>

<h3>Fejhallgató biztonság</h3>
<p>Rendszerbeállítások → hang → fejhallgató biztonsága. A "Csökkent Hangos Hang" (Csökkentse a hangos hangot) a fejhallgató hangerőjét az összesített expozíció alapján korlátozza. Le tudod kapcsolni vagy módosítani a küszöböt. Csak a fejhallgató kimenetét érinti, a hangszórókat nem.</p>

<h3>Térbeli hang</h3>
<p>A támogatott fejhallgatók (AirPods Pro, AirPods Max, néhány Beats) esetén macOS támogatja a térbeli hangot fejkövetéssel. Engedélyezd a Control Center → Sound → Spatial Audio menüben. Ez befolyásolja a hang érzékelt pozicionálását, de nem a hangerőt.</p>

<h3>Hangegyensúly</h3>
<p>Rendszerbeállítások → hozzáférhetőség → hang → egyensúly. Egy bal-jobb csúszkát, ami állítja a sztereó egyensúlyát. Győződj meg róla, hogy középre legyen állítva, ha az egyik oldal halkabbnak szól, mint a másik.</p>

<h2>5. rész: Mit macOS nem tehet (és hogyan lehet megjavítani)</h2>

<h3>Alkalmazásonkénti hangerőszabályozás</h3>
<p>macOS minden alkalmazáshoz egy hangerő csúszkával rendelkezik. Nincs beépített mód arra, hogy a Spotify-t 30%-ra, a Zoomot pedig 100%-ra állítsák. Ez a leggyakrabban kért hangfunkció macOS-ben, és az Apple soha nem adta hozzá.</p>

<h3>Hangerőnövelés 100%-on túl</h3>
<p>macOS hangerője 100%-ra éri a maximumot. Ha a tartalom még maximális hangerőn is túl halk, nincs beépített módja a további erősítésre.</p>

<h3>Térfogatprofilok</h3>
<p>Nincs mód arra, hogy hangerő konfigurációt ments (Spotify 30%, Zoom 100%, Slack némítva), és váltson az előbeállítások között.</p>

<h3>Automatikus leugrás</h3>
<p>macOS nem csökkenti automatikusan a háttérhangot, amikor csatlakozol egy híváshoz.</p>

<h3>Térfogatmemória alkalmazásonként</h3>
<p>macOS nem emlékszik alkalmazásonkénti hangerőszintekre, mert alkalmazásonkénti hangerő nem létezik.</p>

<p>Ezek mind az öt elérhető <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — egy natív macOS menüsávos alkalmazás, amely hozzáadja azt a hangerőkeverőt, amit az Apple soha nem épített.</p>

<img src="/apps/sounddial.png" alt="SoundDial — alkalmazásonként hangerőszabályozás, profilok, automatikus lecsúszás és 200%-os növelés macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>6. rész: Alkalmazásonkénti volument SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Kitölti a fent felsorolt hiányosságokat:</p>

<ul>
  <li><strong>Alkalmazásonként:</strong> Minden alkalmazásnak van saját csúszkálója, 0%-tól 200%-ig</li>
  <li><strong>App-enkénti némítás:</strong> Egy kattintás, hogy bármelyik alkalmazás elnémítsa</li>
  <li><strong>Hangerőnövelés:</strong> Erősítsd fel a csendes alkalmazásokat 100%-on</li>
  <li><strong>Térfogatprofilok:</strong> Mentsd el a konfigurációkat és válts egy kattintással</li>
  <li><strong>Automatikus leugrás:</strong> A háttérhang hívások alatt csökken, utána visszaáll</li>
  <li><strong>Térfogatmemória:</strong> Minden alkalmazás hangerője újraindítások között megjegyezik</li>
  <li><strong>Kimeneti eszköz kapcsolása:</strong> Cseréld ki a hangszórókat/fejhallgatót ugyanabból a panelről</li>
  <li><strong>Billentyűbillentyűk:</strong> ⌃⌥S a keverő kikapcsolásához, ⌃⌥M a mindent elnémítani</li>
</ul>

<p>Az Apple modern Core Audio Tap API-ját használja — nincs rendszermeghajtó, nincs virtuális hangeszköz, nincs kernel kiterjesztés. Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 14,99 €-ért (egyszeri vásárlás, előfizetés nélkül), Apple-értékelés és homokozós kiadás. macOS 14,2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Túl alacsony a VLC hangerő Mac? Hogyan lehet 200%-on fölé emelni",
    description:
      "VLC maximális hangerőnél, de a videó még mindig túl halk? A VLC-ben beépített 200%-os erősítés van — ráadásul még tovább léphetsz egy alkalmazásonkénti hangerőkeverővel.",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>Egy videót nézel VLC-ben. A párbeszéd csendes. A VLC hangerejét teljesen feltekered. A Mac hangerejét teljesen feltekered. Még mindig nem hallok rendesen. A videót túl halkan vették.</p>

<p>A jó hír: a VLC-nek valójában van egy beépített megoldása, amiről a legtöbben nem tudnak. A még jobb hír: rendszerszintű boostot is felhalmozhatsz, hogy még nagyobb hangerőt kapsz.</p>

<h2>A VLC beépített hangerőnövelése (akár 200%-ig is)</h2>

<p>A VLC önmagában is képes meghaladni a 100%-ot. A VLC lejátszó sávjában a hangerő csúszkája 100%-ra éri a maximumot, de ezt tovább növelheted:</p>

<h3>1. módszer: Görgető kerék</h3>
<p>Vidd az egeret a VLC hangerő csúszkájára, és görgess felfelé. A csúszka meghaladja a látható 100%-os határt, akár 200%-ig is. Görgetés közben a százalékot látod.</p>

<h3>2. módszer: Billentyűs billentyű</h3>
<p>Sajtó <strong>Parancsnokság + Felfelé Nyíl</strong> (⌘↑) ismételten, hogy a hangerőt 100% fölé emelje. Minden nyomás hozzáad egy lépést. <strong>Parancsnokság + Lefelé Nyíl</strong> (⌘↓) csökkenteni.</p>

<h3>3. módszer: Hangmenü</h3>
<p>Menj a VLC-hez → hangerőt → növeld a hangerőt. Ismételd, amíg a hangerő elég magas nem lesz. Az aktuális szint a játékos jobb alsó sarkában látható.</p>

<p>A VLC 200%-os erősítése úgy működik, hogy felerősíti a hangjelet a VLC dekóderében. Extrém szinten torzítást okozhat, de valóban csendes videófájloknál nagyon hatékony.</p>

<h2>A VLC erősítésén túl: rendszerszintű erősítés</h2>

<p>Ha a VLC 200%-on még mindig nem elég hangos — vagy ha a VLC-t anélkül szeretnéd növelni, hogy a belső hangbeállításokat befolyásolnád — egy rendszerszintű, alkalmazásonkénti hangerőkeverő egy újabb erősítési réteget ad hozzá.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> a VLC-nek saját hangerő csúszkát ad 0%-tól 200%-ig a rendszer szintjén. Ez összefügg a VLC belső erősítésével:</p>

<ul>
  <li>VLC belső oldal: 200% × SoundDial: 200% = hatékony 400% erősítés</li>
  <li>VLC belső kapacitás: 150% × SoundDial: 150% = hatékony 225% amplifikáció</li>
</ul>

<p>Ez extrém erősítés, és torzítást okoz bizonyos tartalmakon, de nagyon csendes forrás anyaghoz talán erre van szükséged.</p>

<img src="/apps/sounddial.png" alt="SoundDial a VLC hangerő növelése a rendszer szintjén macOS a csendes videófájlok esetén" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ami még fontosabb, SoundDial lehetővé teszi, hogy növeld a VLC-t <strong>Függetlenül</strong>. A zenelejátszód, a böngésződ és a kommunikációs alkalmazások a normál szinten maradnak, miközben csak a VLC hangosabb lesz. Ha SoundDial-ben 180%-ra emeled a VLC-t, a Spotify nem változik. Ezt a VLC beépített boost nem képes — a VLC boost csak a VLC-t érinti, de macOS egyetlen rendszerhangerője még mindig összeköti a többi részt.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Hogyan lehet letiltani az audio dugulást Mac (vagy hogyan irányítsd magad)",
    description:
      "macOS vagy az alkalmazásaid folyamatosan lehalkítják a zenédet hívások közben anélkül, hogy kérnék. Íme, hogyan állíthatod meg a nem kívánt hang leugrását — vagy helyettesítheted azt a lehúzással, amit ténylegesen irányítasz.",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>Csatlakozol egy Zoom-híváshoz. A zenéd szinte teljesen eltűnik. Nem nyúlt le a hangerőszabályzóhoz — valami megcsinálta helyetted. Ez az <strong>hang leugrás</strong>: a háttérhang automatikus lecsökkentése, amikor egy hívás vagy fontos hangforrás aktív.</p>

<p>Vannak, akik imádják. Mások utálják — különösen, ha a lehajlás túl agresszív (a zene nullára csökken, nem pedig kényelmes háttérszint), vagy amikor váratlanul aktiválódik.</p>

<p>Íme, hogyan lehet letiltani a nem kívánt lehajlást Mac-n, és hogyan cserélheted le azt a leugrásra, ami úgy működik, ahogy szeretnéd.</p>

<h2>Honnan jön az audio ducking Mac</h2>

<p>macOS maga is így van <strong>nem</strong> beépített hangos ducat-funkcióval rendelkezik. Ha a zenéd csendesebb lesz hívások alatt, az egyik ilyen tényező okozza:</p>

<h3>1. A Zoom hangfeldolgozása</h3>
<p>A zoom csökkentheti a rendszer hangját, amikor aktiválódik. Nézd meg a Zoom → Beállításokat → Hangot, és kapcsold ki az "Automatikus mikrofonhangerő beállítása" opciót. Próbáld meg csökkenteni a zajcsökkentést "Magasról" "Alacsonyra".</p>

<h3>2. Bluetooth kodekváltás</h3>
<p>Amikor egy alkalmazás aktiválja a Bluetooth fejhallgatód mikrofonját, macOS vált AAC-ról SCO kodekre. Ez nem igazán "lehajlás" — ez egy kodekváltás, ami halkabbá és rosszabbnak hangzik. Javítsd meg külön mikrofonnal.</p>

<h3>3. Egy harmadik féltől származó alkalmazás csinálja ezt</h3>
<p>Néhány hangalkalmazás (például a háttérzene) automatikus szünetes vagy automatikus lehúzó funkcióval rendelkezik. Néhány médiaalkalmazás csökkenti a saját hangerőjét, ha egy másik hangforrást észlel. Nézd meg az összes hangos segédprogramot, amit telepítettél.</p>

<h3>4. Kommunikációs alkalmazások hang beállítása</h3>
<p>A Discord, Teams és más kommunikációs alkalmazások saját hangfeldolgozással rendelkeznek, ami befolyásolhatja más alkalmazások észlelt hangerejét. Nézd meg minden alkalmazás hangbeállítását az "automatikus beállítás" opciók után, és kapcsold ki azokat.</p>

<h2>Hogyan lehet megállítani a nem kívánt lekacsolást</h2>

<ol>
  <li><strong>Nézd meg a Zoom/Teams/Discord hangbeállításokat</strong> — az automatikus hangerő/mikrofon beállítás kikapcsolása</li>
  <li><strong>Külön mikrofont használj hívásokhoz</strong> — megakadályozza a Bluetooth kodekváltást</li>
  <li><strong>Távolítsd el az audio segédeszközöket</strong> — Háttérzene, Soundflower vagy bármilyen alkalmazás, amely esetleg elfogja a hangot</li>
  <li><strong>Ellenőrizd macOS Akadálymentességet</strong> — Rendszerbeállítások → Hozzáférhetőség → Hang bármilyen váratlan beállításhoz</li>
</ol>

<h2>A rossz lehúzást jó leugrásra cseréljük</h2>

<p>Az audio ducking ötlete valójában nagyszerű — automatikusan csökkenti a háttérhangot hívások közben, így tisztán hallhatsz. A probléma akkor van, ha túl agresszív (a zene nullára csökken), nem konfigurálható (nem választhatod el, mennyit kell lecsökkenteni), vagy rossz dolog váltja ki.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> beépített automatikus lehajlási funkcióval rendelkezik, amely irányítja:</p>

<ul>
  <li><strong>Konfigurálható duck level:</strong> Válaszd ki pontosan, mennyit csökkents a háttérhang hívások közben — 10%-tól (majdnem néma) 80%-ig (alig csökkentve). Az alapértelmezett 30%, ami hallhatóvá teszi a zenét, de nem zavarja a figyelmet.</li>
  <li><strong>Okos észlelés:</strong> Mikrofon használatát figyelve érzékeli a hívásokat — ugyanaz a jelző, mint macOS narancssárga pontja. Működik Zoommal, Teams-szel, FaceTime-kal, Discorddal, Slack-kel, Google Meet-tel, Webex-szel, Skype-pal.</li>
  <li><strong>Tökéletes helyreállítás:</strong> Amikor a hívás véget ér, minden alkalmazás pontosan visszatér az előző hangerőre. Nem kell újraigazítani.</li>
  <li><strong>Könnyű váltás:</strong> Kapcsold be vagy kapcsold ki az automatikus lebukást a SoundDial beállításaiban. Ha nem akarod, kapcsold ki. Amikor vissza akarod kapni, kapcsold be.</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial konfigurálható automatikus lecsúszás — pontosan szabályozza, mennyi háttérhang csökken hívások közben" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>A különbség: ahelyett, hogy egy alkalmazás úgy döntené, hogy a zenéd minden hívás alatt nullára kellene menni, te úgy döntenéd, hogy 25%-ra kellene menni. Ahelyett, hogy elveszítenéd az irányítást, megszerzi. És ahelyett, hogy három különböző alkalmazásban próbálnál kitiltani egy rejtett funkciót, egy kapcsoló van egy helyen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Túl csendesek a Bluetooth fejhallgatók Mac? Minden megoldás, ami működik",
    description:
      "A Bluetooth fejhallgatód jól működnek a telefonon, de Mac halkan szólnak. Itt van minden ok — a kodekproblémáktól a hangerőkorlátokig macOS —, és hogyan lehet mindegyiket megoldani.",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>A Bluetooth fejhallgatód elég hangosak a telefonodon. Összekapcsolod őket a Mac-eddel — és minden csendesebb. A zene tompítva hangzik. A hívásokat nehéz hallani. Maximális hangerőt emeltél ki, de még mindig nem elég. Mi van?</p>

<p>A Bluetooth hang Mac több hangerőcsökkentő tényezővel rendelkezik, amelyek a telefonokon nincsenek. Íme mindegyik, és hogyan lehet megjavítani.</p>

<h2>1. A fejhallgató biztonság korlátozza a hangerőt</h2>

<p>macOS beépített funkcióval rendelkezik, amely korlátozza a fejhallgató hangerőjét, hogy megvédje a hallását. Idővel méri a hangexpozíciót, és csökkenti a maximális hangerőt, ha azt hiszi, túl hangosan hallgattál.</p>

<p>Nézz ki <strong>Rendszerbeállítások → hang → fejhallgató biztonsága</strong>. Ha a "Hangos hang csökkentése" engedélyezve, kapcsold ki vagy emeld meg a küszöböt. Ez az elsődleges oka annak, hogy a Bluetooth fejhallgató Mac hangosabban hallható, mint egy telefonon.</p>

<h2>2. Bluetooth kodek-eltérés</h2>

<p>Lehet, hogy a telefonod egy jobb minőségű kodektel (aptX, LDAC, AAC) csatlakozik a fejhallgatóhoz, míg a Mac alapértelmezett SBC-t (az alap Bluetooth kodek) használja. A különböző kodekeknek eltérő maximális hangerő jellemzői vannak.</p>

<p>macOS általában AAC-t használ Apple eszközökhöz, SBC-t pedig harmadik féltől származó fejhallgatókhoz. Ha a fejhallgatód támogatja az aptX-et vagy az LDAC-ot, macOS nem fogod használni őket — az Apple csak az AAC-t és az SBC-t támogatja.</p>

<p><strong>Javítás:</strong> Nem sokat lehet tenni a kódek kiválasztásával macOS. De ez megmagyarázza, miért szólhatnak ugyanazok a fejhallgatók másképp (és akár halkabban) a Mac-n, szemben egy LDAC-t használó Android telefonon.</p>

<h2>3. Mikrofon aktiválása aktiválja az SCO-t</h2>

<p>Amikor bármelyik alkalmazás aktiválja a Bluetooth fejhallgató mikrofonját (Zoom, FaceTime, Siri, diktál), macOS vált AAC-ról SCO kodekre. Az SCO-t 2004-ben tervezték telefonhívásokra — borzalmasan hangzik, és jelentősen halkabb.</p>

<p><strong>Javítás:</strong> Használj külön mikrofont (beépített Mac mikrofon vagy USB mikrofon), és tartsd a Bluetooth fejhallgatót csak kimenetként. A hívásalkalmazás beállításaiban állítsd be a bemenetet a Mac mikrofonjának, a kimenetet pedig a fejhallgatódnak. Ez megakadályozza az SCO kapcsolót.</p>

<h2>4. Bluetooth hangerő szinkronizációs probléma</h2>

<p>A Bluetooth hangerő két hangerőszabályzó van: az egyik a Mac oldalon, a másik a fejhallgató oldalon. Szinkronban kellene maradniuk, de eltávolodhatnak egymástól — a Mac 100%-ot mutat, de a fejhallgatók valójában nem teljes hangerőn.</p>

<p><strong>Javítás:</strong> Kapcsold ki a fejhallgatót (Rendszerbeállítások Bluetooth→ → kattints az "i" → Megszakításra), várj 5 másodpercet, majd csatlakoztasd újra. Ez újraszinkronizálja a hangerőt. Néhány fejhallgatónak saját hangerőgombja is van — győződj meg róla, hogy azok is maximálisan vannak.</p>

<h2>5. Alacsony minőségű Bluetooth kapcsolat</h2>

<p>A távolság, a zavarok (WiFi routerek, USB 3.0 eszközök) és az Mac és a fejhallgató közötti akadályok csökkenthetik a Bluetooth jelminőséget. Ha a jel gyenge, macOS csökkentheti a hang bitrátát, ami befolyásolhatja az észlelt hangerőt és a minőséget.</p>

<p><strong>Javítás:</strong> Menj közelebb a Mac. Kapcsold le azokat a Bluetooth-eszközöket, amelyeket nem használsz. Helyezd el az USB 3.0 hubokat a Mac-től (az USB 3.0 interferenciát generál a Bluetooth által használt 2,4 GHz-es sávban).</p>

<h2>6. Maguk a fejhallgatók</h2>

<p>Néhány Bluetooth fejhallgató maximális hangerője alacsonyabb, mint másoknak. A nagyobb hangszóróval ellátott fülhallgatók általában hangosabbak, mint a fülhallgatók. A zajszűrős fejhallgatók firmware-jében lehetnek beépített hangmennyiségkorlátozások.</p>

<p>Nézd meg a fejhallgató gyártó alkalmazását (Sony Headphones Connect, Bose Music, Sennheiser Smart Control stb.) a hangerőkorlát beállításokra. Néhány fejhallgatónak van "biztonságos hallgatás" módja, ami korlátozza a hangerőt.</p>

<h2>Még mindig csend? Boost 100%-on túl</h2>

<p>Ha mindent megnéztél, és a fejhallgatód még mindig túl halkan van Mac, akkor hangerő erősítésre van szükséged.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> bármilyen alkalmazás hangerőjét növeli <strong>200%</strong>. Ha a Spotify a Bluetooth fejhallgatódon túl csendes, húzd a csúszkát 160%-ra. Az audiojel felerősítődik, mielőtt elérné a fejhallgatót, így gyakorlatilag megduplázza az alkalmazás elérhető hangerőjét.</p>

<img src="/apps/sounddial.png" alt="SoundDial az alkalmazás hangerő növelése Bluetooth fejhallgatóhoz Mac alkalmazásonkénti csúszkákkal, 200%-ra" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Az alkalmazásonként történő erősítés jobb, mint a rendszerszintű hangerőnövelés, mert csak a csendes alkalmazást lehet erősíteni. Ha a podcastod csendes, de a zene rendben van, emeld fel a podcast alkalmazást 170%-ra, miközben a Spotify 80%-on marad. Minden alkalmazás a megfelelő szinten marad.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac Audio OBS-hez és streaminghez: Hogyan irányítsd, mit hall a közönséged",
    description:
      "Streamelni Mac-en OBS-szel? A nézőid mindent ugyanazon a hangerőn hallanak — játék, zene, értesítések, Discord. Íme, hogyan lehet megfelelően egyensúlyozni a hangforrásokat.",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>Az OBS-szel streamelsz Mac csatornán. A játék hangja nagyon hangos. A Discord hívásod fut. A Spotify háttérzenét játszik. Riasztás hangja tüzet ad, amikor valaki feliratkozik. A nézők mindezt ugyanazon hangerőn hallják — egy kaotikus káosz, ahol a Discord felhívásai robbanásokkal versenyeznek, a zene pedig elnyomja a kommentárodat.</p>

<p>A fő probléma: macOS egy hangkimenetet ad, és az OBS egy, kombinált streamként rögzíti azt. Nem mondhatod az OBS-nek, hogy "40%-on rögzítsd a játékot, a Discord 80%-on, a Spotify pedig 20%-on", mert macOS nem választja el őket.</p>

<h2>A Mac streaming audio probléma</h2>

<p>Windowson az OBS képes egyedi alkalmazás hangját natív módon rögzíteni. Minden alkalmazást külön hangforrásként adsz hozzá, és külön kevered őket az OBS-en belül. Mac-n ez nincs beépített rendszer. Az OBS macOS képes a következőket rögzíteni:</p>

<ul>
  <li><strong>Asztali hang</strong> — minden, ami a Mac-n játszik, egy streambe egyesítve</li>
  <li><strong>Mikrofon/Aux</strong> — a mikrofon bemeneted</li>
  <li><strong>Alkalmazás hangrögzítés (macOS 13+)</strong> — egy adott alkalmazás hangjának rögzítése, de a beállítás kézi és korlátozott</li>
</ul>

<p>Az Application Audio Capture forrás (hozzáadva az OBS 30+-hoz) egy alkalmazás izolálására alkalmas, de öt hangforrás kezelése külön szintekkel az OBS-en belül bonyolult, és nem minden alkalmazás működik együtt.</p>

<h2>Az egyszerűbb megközelítés: a szintek kontrollja, mielőtt az OBS elfogná őket</h2>

<p>Ahelyett, hogy az OBS-en belül próbálnád szétválasztani a hangot, irányítsd az alkalmazások hangerőjét <em>Előtte</em> eléri az OBS asztali hangrögzítését. Ha a Spotify értékét 20%-ra csökkented, és a Discordot 90%-ra emeled a rendszer szinten, az OBS asztali hangrögzítése felveszi a már kiegyensúlyozott mixet.</p>

<p>Pontosan ez az, ami <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Igen. Állítsd be az alkalmazást arra a szintre, amit a nézőid hallani szeretnél:</p>

<img src="/apps/sounddial.png" alt="SoundDial egyensúlyozó játék, Discord és zenei hang szintek az OBS streaminghez Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Tipikus streaming audio rendszer</h3>
<ul>
  <li><strong>Játék:</strong> 50% — jelen van, de nem nyomasztja el a hangodat</li>
  <li><strong>Discord / hangchat:</strong> 80% — távolítsd el a csapatod hívásait</li>
  <li><strong>Spotify / zene:</strong> 15% — finom háttérhangulat</li>
  <li><strong>Stream értesítések (böngésző):</strong> 40% — hallható, de nem megrázó</li>
  <li><strong>Slack / értesítések:</strong> némított — a nézőknek nem kell hallaniuk a privát üzeneteidet</li>
</ul>

<h3>Mentsd el "Streaming" profilként</h3>
<p>Ezt a konfigurációt SoundDial-ben tárold hangerőprofilként. Mielőtt élőben lépsz, alkalmazd a "Streaming" profilt egy kattintással. Minden alkalmazás átugrik a streaming-optimalizált szintre. Ha befejezted a streamelést, válts vissza a "Normális" vagy "Gaming" profilodra.</p>

<h2>Amit hallasz, és amit a nézők hallanak</h2>

<p>Ha SoundDial alkalmazásonként állítod a hangerőt rendszerszinten, te és a nézőid is ugyanazt a kiegyensúlyozott mixet halljátok. Ez egyszerűbb, mint külön keveréseket (egy neked, egy a streamen) fenntartani — ami virtuális hangeszközöket és bonyolult útvonaltervezést igényel, amely törékeny Mac.</p>

<p>Ha teljesen külön keverésre van szükséged a streamedhez a fejhallgatótól (például ha hangosabban akarod hallani a Discordot, mint a nézők), akkor bonyolultabb router-beállításra lesz szükséged virtuális hangeszközökkel. De a legtöbb streamer számára egy jól kiegyensúlyozott mix – amit könnyen lehet a menüsávból irányítani – pontosan az, amire szükség.</p>

<h2>Miért jobb, mint az alkalmazásonkénti vezérlés az OBS-es keveréssel.</h2>

<ul>
  <li><strong>Azonnali igazítások:</strong> A stream közben egy néző azt mondja, hogy a játék túl hangos. Kattints a menüsávra, húzz egy csúszkát. Kész. Nem volt megállás, nem nyitottam meg az OBS beállításokat.</li>
  <li><strong>Munka az OBS-en kívül:</strong> A kiegyensúlyozott hangrendszer akkor is működik, amikor nem streamelsz. Ugyanazok a profilok, ugyanaz a kényelm.</li>
  <li><strong>Nincsenek virtuális hangeszközök:</strong> SoundDial az Apple natív Audio Tap API-ját használja — nincs Soundflower, nincs BlackHole, és nincs illezser, ami macOS frissítéseknél meghibásodna.</li>
</ul>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-értékelés, 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Hogyan tudod Mac emlékezetet adni a hangerőt alkalmazásonként",
    description:
      "Minden alkalommal, amikor újraindítod a Spotify-t vagy újraindítod a Zoomot, újra kell állítanod a hangerőt. Íme, hogyan tudod macOS automatikusan emlékezni az egyes alkalmazások hangerőszintjére.",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>Öt percet töltesz azzal, hogy tökéletesen állítsd a hangmagasságodat. Spotify 30%, Zoom 100%, Slack 15%. Ezután újraindítod a Mac. Vagy a Slack összeomlik és újraindul. Vagy bezárod a Spotify-t, majd később újra megnyitod. Minden alkalmazás visszaáll az alapértelmezett hangerőre. Mindent újra állítasz. Megint.</p>

<p>macOS megjegyzi a rendszer hangerőjét az újraindítások során. De nem emlékszik az alkalmazásonkénti hangerőre — mert macOS egyáltalán nincs alkalmazásonkénti hangerőszabályozás. Nincs semmi, amire emlékezni kellene.</p>

<h2>Miért nem emlékeznek az alkalmazások a saját volumerükre</h2>

<p>Néhány alkalmazás (például a Spotify és VLC) belső hangerő csúszkával rendelkezik, amelyeket a játékmenetek között mentenek. De a legtöbb alkalmazás — böngészők, kommunikációs eszközök, rendszersegédeszközök — nincs saját hangerőszabályzó. És még azok az alkalmazások is, amelyek belső hangerőt mentenek, csak a saját csúszka pozíciójukat emlékezik, nem a hangerőjüket más alkalmazásokhoz képest.</p>

<p>Amit igazán szeretnél, az az a <em>Rendszer</em> emlékezni kell: "A Spotify-nak mindig a rendszer volumenének 30%-án kell lennie." macOS ezt a koncepciót nem támogatja.</p>

<h2>Volumenmemória SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> van egy <strong>Térfogatmemória</strong> Feature. Ha engedélyezve, minden alkalmazás hangerőszintjét a csomagazonosító alapján menti el. Amikor az alkalmazás leáll és újraindul — akár újraindítod, akár az Mac újraindítja — SoundDial automatikusan visszaállítja a mentett térfogatra.</p>

<img src="/apps/sounddial.png" alt="SoundDial térfogatmemória — automatikusan megjegyzi és helyreállítja az alkalmazásonkénti hangerőszintet macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hogyan működik</h3>
<ol>
  <li>Kapcsold be a "Emlékezz hangerőre alkalmazásonként" opciót a SoundDial beállításaiban</li>
  <li>Állítsd be az alkalmazásokat a kívánt hangerőre</li>
  <li>SoundDial automatikusan menti a pályát</li>
  <li>Amikor az alkalmazás újraindul, a hangerő pontosan visszaáll a régi helyére</li>
</ol>

<p>Nincs kézi mentés. Nem kell újraigazítani. Az első alkalom, amikor beállítod a hangerőt, az az utolsó.</p>

<h3>Mi marad emlékezve</h3>
<ul>
  <li><strong>Hangerőszint</strong> — a pontos arány (0%-tól 200%-hoz)</li>
  <li><strong>Néma állapot</strong> — ha elnémítottál egy alkalmazást, az visszafogva marad, amikor újraindul</li>
  <li><strong>Alkalmazásonként</strong> — minden alkalmazás kötetét külön-külön tárolják a csomagazonosító</li>
</ul>

<h3>Az új alkalmazások alap hangerőt kapnak</h3>
<p>Amikor egy alkalmazás először indul el (olyat, amit SoundDial még nem látott), konfigurálható alapértelmezett kötetet kap. Ezt az alapértelmezett beállításban beállíthatod a SoundDial beállításaiban — így az új alkalmazások 80%-ról indulnak (vagy bármit szeretsz), ahelyett, hogy esetleg 100%-on robbannának.</p>

<h2>Volumenmemória + profilok = állítsd be, és felejtsd el</h2>

<p>A volumenmemória kezeli a napi feladatokat: az alkalmazások újraindítások között is tartják a szintjeiket. A profilok kezelik a helyzetváltást: "Meeting" mód, "Fókusz" mód, "Gaming" mód — egy kattintással jelentkezve, és minden alkalmazás a megfelelő szintre ugrik az adott helyzethez.</p>

<p>Együtt szinte soha nem állítod kézzel a hangerő csúszkát. Az alkalmazás emlékszik az utolsó szintre, és amikor kontextust váltasz, egy profil egyszerre állít be mindent.</p>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-értékelés, 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Túl alacsony a podcast hangerő Mac? Hogyan lehet hangosabbá tenni",
    description:
      "Néhány podcast suttogó csendes Mac még maximális hangerőn is. Íme, miért — és hogyan lehet a podcast hangját 100%-on fölé emelni anélkül, hogy más alkalmazásokat érintenénk.",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>Egy podcastot hallgatsz a Mac. A műsorvezető jól hangzik, de a vendég — aki laptop mikrofonról rögzít a konyhájában — alig hallható. A hangerőt 100%-ra tekered. A házigazda most túl hangos, de a vendég még mindig csendben van. Nincs mód nyerni, mert a probléma a felvételben van, nem a Mac.</p>

<p>A podcast hangminősége nagyon változó. A profi műsorokat következetesen mesterelnek meg. De az interjúk, indie podcastok és élő felvételek gyakran -20 dB vagy alacsonyabb vendégek hangmagassága van — ami jelentősen halkabb, mint a műsorvezető vagy a bevezető zene.</p>

<h2>Miért olyan csendesek néhány podcast</h2>

<ul>
  <li><strong>Vendégmikrofon minősége:</strong> Az egyik műsorvezető profi beállítással rendelkezik, a vendég AirPods-on van. A szintkülönbség akár 15+ dB is lehet.</li>
  <li><strong>Nincs utángyártmány:</strong> A profi módon készített podcastok tömörítik és normalizálják a szinteket. Sokan nem.</li>
  <li><strong>A podcast alkalmazások nem normalizálják a dolgokat:</strong> Az Apple Podcastok és a Spotify minimális vagy semmilyen hangerő normalizációt alkalmaznak a podcast tartalmakra (ellentétben a zenével).</li>
  <li><strong>Dinamikus tartomány:</strong> Néhány podcast-producer szándékosan magas dinamikatartományt tart fenn a "természetes" hangzás érdekében — ami azt jelenti, hogy a csendes részek nagyon halkak.</li>
</ul>

<h2>Alkalmazáson belüli javítások</h2>

<h3>Apple Podcastok</h3>
<p>Az Apple Podcasts-nak nincs hangerő normalizálási vagy növelési funkciója. Amit a podcast nyújt, azt kapod. A régebbi verziókban eltávolították az alkalmazáson belüli hangerőszabályzót — most már csak a rendszer hangerőt használja.</p>

<h3>Spotify</h3>
<p>A Spotify "Normalize volume" beállítása (Beállítások → lejátszás) segíthet a hangerő konzisztenciájában a különböző podcastok között, de az epizódon belüli dinamikára gyakorolt hatása korlátozott. Próbáld meg "Hangos" beállítást a maximális normalizáció érdekében.</p>

<h3>Overcloud (böngésző)</h3>
<p>Ha az Overcastot használod (weben keresztül overcast.fm-n), van egy "Voice Boost" funkciója, amely jelentősen erősíti és tömöríti a podcast hangját, így a halk hangok hangosabbak lesznek. Ez az egyik legjobb beépített megoldás — de csak az Overcastban működik.</p>

<h2>Rendszerszintű megoldás: a podcast alkalmazások 100%-ra emelése</h2>

<p>Az univerzális megoldás az, hogy a podcast alkalmazásodat túlmutat macOS 100%-os határán. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> minden alkalmazásnak egy hangerő csúszkát ad fel <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial az Apple Podcasts hangerő 180%-ra emelése a Mac-on csendes podcast epizódokhoz" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Állítsd be az Apple Podcasts vagy a podcast alkalmazásod arányát 160-180%-ra, miközben a Spotify zenét 40%-on, a Slack pedig 15%-on tartsd. A podcast hangosabb lesz, anélkül, hogy minden más fájdalmasan hangossá válna. Amikor visszaváltasz zenére, egyszerűen visszaállítsd a podcast alkalmazást normál állapotba — vagy hagyd, hogy SoundDial hangerő memóriája automatikusan emlékezzen.</p>

<p>Ez az alkalmazásonkénti megközelítés jobb, mint egy rendszerszintű hangerőnövelés, mert:</p>
<ul>
  <li>Csak a csendes podcast alkalmazás hangosabb lesz</li>
  <li>A zene a kedvenc szintedben marad</li>
  <li>A híváshang a kívánt szinten marad</li>
  <li>Az értesítési hangok nem válnak hirtelen fülsiketítővé</li>
</ul>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-értékelés, 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Mac hangrendszer online órákhoz és előadásokhoz",
    description:
      "Előadást nézni jegyzetelés közben, referenciákat keresni a Google-ben, és beszélgetni osztálytársakkal – mindezt különböző hangerőn. Íme, hogyan kezelheted a diákhangot Mac-n.",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>Hallgató vagy, aki egy online előadáson veszel részt Zoomon. Van egy YouTube oktatóvideó egy másik fülön nyitva referenciaként. Az osztálytársaid a Discordon beszélgetnek. A Spotify háttérben lo-fi beateket játszik. A Mac mindezt egy kötetként kezeli. Ha lehalkítod a lo-fi-t, nem hallod a professzorodat. Ha felhangosítod az előadást, a Discord jelzései összetörik a koncentrációdat.</p>

<p>macOS van egy hangerő csúszkája mindenhez. Azoknak a diákoknak, akik több hangforrást zsonglőrködnek, ez állandó súrlódási pont.</p>

<h2>A tipikus diákhang stack</h2>

<ul>
  <li><strong>Előadásplatform</strong> (Zoom, Teams, Google Meet, Webex) — kristálytisztának kell lennie, mindig hallhatónak kell lennie</li>
  <li><strong>Referenciaanyagok</strong> (YouTube oktatóvideók, rögzített előadások) — közepes hangerő, meg kell állítani/állítani kell</li>
  <li><strong>Zene tanulmányozása</strong> (Spotify, Apple Music) — alacsony háttérszint, nem szabad versenyeznie az előadással</li>
  <li><strong>Chat</strong> (Discord, iMessage, Slack) — finom értesítési hangok, nem zavaró</li>
  <li><strong>Böngészőfülek</strong> — alkalmi automatikusan lejátszódó tartalom, amit azonnal el kell némítani</li>
</ul>

<h2>A macOS korlátozás</h2>

<p>Egy rendszerhangerővel kompromisszumot kell kötni. Ha elég magasra állítod egy csendes professzor mikrofonjához, a Spotify túl hangos. Állítsd be kényelmes zenére, és az előadás hallhatatlan. Ha elnémítod a Spotify-t, elveszíted a háttérzene fókuszos előnyeit. Nincs kényelmes egyensúly, mert minden alkalmazás ugyanarra a szintre van rögzítve.</p>

<h2>Alkalmazásonkénti hang beállítása tanuláshoz</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Minden alkalmazásnak saját hangerő csúszkát ad, így az ideális tanulmányi hangrendszert építheted:</p>

<img src="/apps/sounddial.png" alt="SoundDial diák beállítása — előadás teljes hangerőn, tanulj zenét halkan, értesítések némítva" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Előadási profil</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100% — soha ne hagyja ki egyetlen szót sem</li>
  <li><strong>Spotify:</strong> 15% — alig észrevehető háttérhangulat</li>
  <li><strong>Discord:</strong> 10% — csak finom értesítések</li>
  <li><strong>Böngésző:</strong> 40% — referenciavideók, ha szükség van</li>
  <li><strong>iMessage:</strong> Némított — ellenőrizd az órák között</li>
</ul>

<h3>Önálló tanulási profil</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — motiválja a zenetanulást</li>
  <li><strong>Böngésző:</strong> 70% — oktatóvideók tiszta szinten</li>
  <li><strong>Discord:</strong> 20% — elérhető a tanulmányi csoport számára</li>
  <li><strong>Minden más:</strong> tompa</li>
</ul>

<h3>Break profil</h3>
<ul>
  <li><strong>Minden:</strong> 60-80% — lazíts az órák között</li>
</ul>

<p>Mentsd el mindegyiket hangerőprofilként, és egy kattintással válts közöttük a napod haladtával. Amikor egy előadás kezdődik, alkalmazd az "Előadást" — az automata lehúzás kezeli a többit, automatikusan lecsökkenti a zenét, amikor a professzor a mikrofonon keresztül beszél.</p>

<h2>Miért fontos ez a fókusz szempontjából</h2>

<p>A tanulmányok következetesen azt mutatják, hogy a megfelelő hangkörnyezet javítja a koncentrációt és a megtartást. A rossz keverék — túl hangos zene, túl gyakori értesítések, túl halk az előadás — olyan kognitív terhelést generál, amelynek semmi köze a tanult anyaghoz. Ha egyszer jól csinálod a hangot, elmented profilként, és soha többé nem gondolsz rá, eltűnik egy állandó zavaró forrás.</p>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-értékelés, 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Mac hang nem működik frissítés után? Teljes Javítási Útmutató",
    description:
      "Frissítetted macOS, és most már a hangod eltűnt, recseg, vagy rossz hangerőn ragadt. Íme minden megoldás, hogy a Mac hangod újra működjön.",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>Frissítetted macOS. Minden rendben tűnt — egészen addig, amíg észre nem vetted, hogy nincs hang. Vagy a hang sistereg. Vagy a hangerő elakad. Vagy a hangkimeneti eszközöd eltűnt. Frissítés utáni hangproblémák szinte minden macOS kiadásnál előfordulnak, és ezek enyhén idegesítőtől teljesen némaságig terjednek.</p>

<p>Íme egy szisztematikus útmutató a Mac hang javításához egy macOS frissítés után, amely minden ismert problémát és megoldást lefed.</p>

<h2>1. lépés: Ellenőrizd a nyilvánvalót</h2>

<h3>Némított?</h3>
<p>Nyomd meg a hangerőnövelő gombot. Nézd meg, hogy a hangerőjelző megjelenik-e a képernyőn. Néha frissítések nullára állítják a rendszer hangerőjét vagy engedélyezik a némítást.</p>

<h3>A megfelelő kimeneti eszköz van kiválasztva?</h3>
<p>Menj a Rendszerbeállításokhoz → hang → kimenet. Egy frissítés után néha macOS váratlan kimeneti eszközre vált — egy csatlakoztatott monitor hangszóróira, egy nem csatlakoztatott Bluetooth eszközre, vagy a beépített hangszórókra, amikor külső hangszórókat szeretnél. Válaszd ki a megfelelő eszközt.</p>

<h3>Korlátozza a fejhallgató biztonsági funkciója a hangerőt?</h3>
<p>A frissítések néha visszaállítják a Headphone Safety-t alapértelmezettre (engedélyezve). Ellenőrizd a rendszerbeállításokat, → a hang → fejhallgató biztonságát, és kapcsold ki a "Hangos hang csökkentésé" opciót, ha a frissítés bekapcsolta.</p>

<h2>2. lépés: Indítsd újra a Core Audio rendszert</h2>

<p>A hangdémon (coreaudiod) gyakran rossz állapotba kerül egy frissítés után. Az újraindítás a leghatékonyabb megoldás.</p>

<p>Nyisd ki a terminált és futás:</p>
<p><code>Sudo killall coreaudiod</code></p>

<p>A hang rövid időre megáll, majd újraindul. Teszteld, hogy működik-e a hang most. Ha ez megoldja, akkor a probléma egy elavult audio démon állapot volt — ami frissítések után fordul elő.</p>

<h2>3. lépés: NVRAM/PRAM visszaállítása</h2>

<p>Intel Maceknél: teljesen kikapcsolni, majd kapcsolj be, miközben nyomva tartva <strong>Opció + parancs + P + R</strong> Kb. 20 másodpercig. Ez visszaállítja az NVRAM-ot, amely tárolja a hangerőbeállításokat, indítólemez választását és egyéb alacsony szintű beállításokat.</p>

<p>Apple Silicon Mac-eknél (M1/M2/M3/M4): az NVRAM automatikusan visszaáll, ha szükséges. Egy teljes újraindítás (nem csak alvás/ébrenlét) általában elég.</p>

<h2>4. lépés: Ellenőrizze a harmadik féltől származó hangmeghajtó ütközéseket</h2>

<p>macOS frissítések gyakran törik meg a harmadik féltől származó hangmeghajtókat és kernel-bővítményeket. Ha ezek közül valamelyik telepítve van, lehet, hogy ezek okozzák a problémát:</p>

<ul>
  <li><strong>Soundflower</strong> — megszűnt, gyakran ütközik az újabb macOS</li>
  <li><strong>BlackHole</strong> — virtuális hangkészülék, macOS frissítések után frissítésre lehet szükség</li>
  <li><strong>Visszacsatolás</strong> — lehet, hogy új verzióra lesz szükség a frissített macOS</li>
  <li><strong>Háttérzene</strong> — telepít egy virtuális hangeszközt, amely gyakran megszakad frissítésekkor</li>
  <li><strong>Hanginterfész illegesztőprogramok</strong> — Focusrite, Universal Audio stb. ellenőrizzék a frissített illezőprogramokat</li>
</ul>

<p><strong>Javítás:</strong> Távolítsd el vagy frissítsd az ellentmondó szoftvert. Virtuális hangkészülékeknél nézd meg, hogy az alkalmazás által telepített hangkészülék megjelenik-e a Rendszerbeállításokban → Hang → kimenet menüben — ha megjelenik, és ki van választva, válts a valódi hangszórókra. Ezután frissítsd vagy töröld a harmadik féltől származó alkalmazást.</p>

<h2>5. lépés: Biztonságos mód indítás</h2>

<p>Indíts be biztonságos módba, hogy megállapítsd, a problémát indító elem vagy harmadik féltől származó bővítmény okozza-e:</p>

<ul>
  <li><strong>Apple szilicon:</strong> Kapcsold le → tartsd a bekapcsológombot, amíg meg nem jelenik a "Indítási opciók betöltése" → válaszd ki az indítólemezt, → nyomd a Shift-et, → kattints a "Folytatás biztonságos módban" gombra.</li>
  <li><strong>Intel:</strong> Indítsd újra→ nyomd a Shift gombot indítás közben, amíg meg nem látod a bejelentkezési ablakot</li>
</ul>

<p>Ha a hang biztonságos módban működik, akkor egy harmadik féltől származó kernel bővítmény vagy bejelentkezési elem lehet az oka. Vizsgáld meg a nemrég telepített szoftvert.</p>

<h2>6. lépés: Új felhasználói fiók létrehozása</h2>

<p>Ha a probléma fennáll, hozz létre egy ideiglenes új felhasználói fiókot (Rendszerbeállítások → Felhasználók és csoportok → Felhasználó hozzáadása esetén). Jelentkezz be az új fiókba, és teszteld a hangfelvételt. Ha az új fiókban működik a hang, a probléma a felhasználói profiloddal van — egy sérült preferenciafájl vagy hangkonfiguráció.</p>

<h2>A jövőbeli problémák megelőzése SoundDial</h2>

<p>Az egyik előnye <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Más hangeszközökkel szemben: nem telepít rendszerhang meghajtót. Az Apple natív Core Audio Tap API-ját használja, ami azt jelenti, hogy tisztán működik macOS frissítésekkel, anélkül, hogy a virtuális hangkészülék alkalmazásokat sújtnák.</p>

<p>Ha Background Musicot vagy Soundflower-t használtál, és ezek egy frissítés után elromlottak, SoundDial egy csere, aminek nem lesz ugyanaz a problémája. Alkalmazásonkénti hangerőszabályozás, 200%-os hangerőnövelés, profilok, automatikus leszorítás — mindezt kernel kiterjesztés vagy virtuális audio eszköz nélkül.</p>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-értékelés, 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Hogyan lehet egyszerre elnémítani az összes alkalmazást Mac-on (és tökéletesen visszaoldani őket)",
    description:
      "Azonnali csendre van szükség? A némító gomb mindent elnémít — de a némítás visszaállítja a gondosan kiegyensúlyozott hangerőt. Itt egy jobb módja annak, hogy elnémítsd és helyreállítsd a Mac.",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>Valaki belép a szobába. A főnököd váratlanul hív. Egy ügyfél megosztja a képernyőjét egy hívás során, és a zenéje elkezd a hangszórókon keresztül szólni. Azonnali csendre van szükséged. Most azonnal.</p>

<p>Megnyomod a némító gombot. Minden elcsendesedik. Válság elhárítva.</p>

<p>Aztán elmúlik a pillanat. Megint megnyomod a némító gombot. Minden visszajön — de a rendszer hangerőszintjén, amely nem emlékszik arra, hogy a Spotify 30%-on volt, a Zoom 100%-on, a Slack pedig 15%-on. Azok az egyéni szintek? Eltűnt. Mindent kézzel kell újraállítani.</p>

<h2>A rendszer némító billentyű: tompa eszköz</h2>

<p>A Mac némító billentyűje (F10 vagy a hangszóró-slash billentyű) elnémítja a <strong>Rendszer hangkimenete</strong>. Minden alkalmazás egyszerre némít meg. A némítás visszaállítja a rendszer hangerőt a régi helyére — de mivel csak macOS egy hangerő csúszkával rendelkezik, nincs alkalmazásonként szint, amit meg kell idézni vagy visszaállítani.</p>

<p>Ez rendben van, ha egyszerre csak egy alkalmazást használsz. Probléma, ha hat alkalmazásod van gondosan kiegyensúlyozva különböző szinteken, és mindet le kell némítani + helyreállítani.</p>

<h2>Egy okosabb némítás: minden alkalmazás szerint némítsa el az összes gombot</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> van egy "Némítva minden" billentyűs billentyűbillentyű: <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Amikor megnyomod:</p>
<ol>
  <li>Minden alkalmazás egyénileg némítva van (minden alkalmazás hangerő állapota el van mentve)</li>
  <li>Azonnali csend — pont mint a némító gomb</li>
</ol>

<p>Amikor újra megnyomod:</p>
<ol>
  <li>Minden alkalmazás nem hallgatott</li>
  <li>Minden alkalmazás visszatér a <strong>Pontosan</strong> az a hangerő, ahogy tompítottál volna</li>
  <li>A Spotify visszament 30%-ra, a Zoom 100%-ra, a Slack 15%-ra — tökéletesen helyreállítva</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial némítás gyorsítványa — Control+Option+M billentyűk minden alkalmazás némításához és visszavonásához a hangerő visszaállításával" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>A különbség a rendszer némító billentyűtől:</p>
<ul>
  <li><strong>Rendszer némítása:</strong> elnémítja a kimenetet, → unte visszaállítja egy rendszerhangerőt, → az alkalmazásonkénti egyenleg nem létezik</li>
  <li><strong>SoundDial némítsd le mindet:</strong> minden alkalmazást külön-külön némít, → a némítás visszaállítja az egyes alkalmazások egyedi hangerőjét, → a egyenleg megmarad</li>
</ul>

<h2>Amikor ez számít</h2>

<ul>
  <li><strong>Képernyőmegosztás:</strong> Megosztod a képernyődet, és el kell némítanod a Mac, mielőtt a másik meghallja a zenédet. ⌃⌥M → csend, → csináld a dolgod→ ⌃⌥M→ a zene pont a megfelelő szintre került.</li>
  <li><strong>Váratlan megszakítás:</strong> Ha valaki belép, azonnal csendre van szükséged. Egy rövidítés, egér nélkül, nem balandozás a menüsávban.</li>
  <li><strong>Gyors telefonhívás:</strong> Az íróasztali telefonod csörög. Némítsd el a Mac, fogadd fel a hívást, kapcsold el a némítást, ha végeztél. Minden visszatér.</li>
</ul>

<p>Kombinálva <strong>⌃⌥S</strong> Gyorsbillentyű (SoundDial popoverének kapcsolása), az összes hangot teljesen billentyűzetről tudod kezelni — nyitod ki a keverőt, állíts be szintet, zárd be, és némítsd el vagy kapcsold le mindent, anélkül, hogy az egérhez nyúlnál.</p>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Túl alacsony a Google Meet hangerő Mac? Hogyan lehet megoldani",
    description:
      "A Google Meet-en a hangok alig hallhatók még maximális hangerőn is. Íme, miért fut a Meet Chrome-on keresztül, mit jelent ez a hang szempontjából, és hogyan lehet ezt felerősíteni.",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>A Google Meetnek nincs natív Mac alkalmazása — a böngésződben fut. Ez azt jelenti, hogy a Meet hangja a Chrome (vagy Safari) hangfolyamának része, és a hangerő problémái összefonódnak azzal, ahogyan a böngésződ kezeli a hangot. Bogozzuk ki.</p>

<h2>1. Ellenőrizd a Meet saját hangbeállításait</h2>

<p>Találkozóhívás közben kattints a három pont menüre (⋮) → Beállítások → Hang menüben. Győződj meg róla, hogy a megfelelő hangszóró eszköz van kiválasztva. A Meet néha alapértelmezetten váratlan eszközt használ, különösen, ha nemrég csatlakoztattad vagy leválasztottad a hangos hardvert.</p>

<h2>2. Ellenőrizd a böngésződ fülhangerőjét</h2>

<p>Chrome-ban: jobb kattints a Meet fülre, → győződj meg róla, hogy a "Weboldal némítása" NEM van kiválasztva. Egy elnémított oldal nem ad hangot más beállításoktól függetlenül.</p>

<p>Safari-ban: kattints a fül hangszóró ikonjára, hogy megbizonyosodj róla, nem volt némítva.</p>

<h2>3. Ellenőrizd a rendszer kimenetét</h2>

<p>Rendszerbeállítások → hang → kimenet. Ellenőrizd, hogy a megfelelő eszköz van kiválasztva, és a hangerő maximum. Ha fejhallgatót használsz, nézd meg a Headphone Safety funkciót is.</p>

<h2>4. A Chrome hangprobléma</h2>

<p>A Google Meet Chrome fülként fut, és a Chrome hangkimenete alacsonyabb lehet, mint a dedikált alkalmazásoké. A Chrome saját renderelőn keresztül dolgozza fel a hangot, amelynek saját hangerő plafonja van. Ha a Chrome összesített hangja alacsony, akkor a Meet alacsony — még akkor is, ha macOS hangerő 100%-on van.</p>

<p>Nincs beépített mód arra, hogy a Chrome hangját a maximumon fölé emeljék. macOS a Chrome-ot egy alkalmazásként kezeli, egy hangerőszinttel, és ez a szint 100%-ra éri a maximumot.</p>

<h2>5. Bluetooth kodekprobléma</h2>

<p>Ha AirPods-ot vagy Bluetooth fejhallgatót használsz, a Google Meet mikrofon aktiválása miatt a Bluetooth kodekváltás AAC-ról SCO-ra vált. Ez jelentősen csökkenti a hangminőséget és a hangerőt.</p>

<p><strong>Javítás:</strong> A Meet hangbeállításaiban válaszd ki a Mac beépített mikrofonját bemeneti eszközként, miközben a Bluetooth fejhallgatót tartsd kimenetként. Ez megakadályozza a kodekváltást, és fenntartja a magas minőségű hangot.</p>

<h2>6. Emeld a Google Meet (Chrome) teljesítményét 100%-on</h2>

<p>Ha a Meet még mindig túl csendes, miután mindent ellenőriztünk, akkor a Chrome hangját erősítened kell a macOS engedett szinten.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Chrome-nak saját hangerő csúszkát ad, ami a következőképpen <strong>200%</strong>. Mivel a Google Meet a Chrome-on belül fut, a Chrome fejlesztése növeli a Meet-et. Ha húzd a csúszkát 150%-ra vagy 180%-ra, a hívás hangja valós időben felerősítődik.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Google Meet (Chrome) hangerő 100%-on fölé emelni macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ez a Safarival is működik, ha Safariban használod a Meet-et. SoundDial minden böngészőt külön irányít — növelje a Safarit a Meet-hez, miközben a Chrome normál hangerőn tartja minden mást.</p>

<p>Az automatikus lecsúszásnál a háttérzene automatikusan lehalkul a Meet hívás elindításánál (amikor a mikrofonod aktiválódik), és a hívás végén visszatér.</p>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-értékelés, 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Hogyan állítsuk be Mac riasztási hangerőt külön a médiahangerőtől",
    description:
      "macOS van egy rejtett riasztási hangerő csúszkáló, de ez csak a rendszer hangjait fedi. Íme, hogyan lehet igazán elválasztani az értesítést és a médiahangerőt Mac-n.",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>A zenéd tökéletes szinten van. Aztán egy macOS riasztási hang – a "Funk" vagy "Tink" hanghatás – és fájdalmasan hangos a te zenédhez képest. Vagy fordítva: a riasztásaid nem hallhatók, mert a rendszer hangerője alacsony a háttérzenéhez.</p>

<p>Két külön hangsebességszabályozóra van szükséged: egyet a média (zene, hívások, videó) és egy értesítések és értesítések számára. macOS részben támogatja ezt, de a teljes megoldáshoz harmadik féltől származó eszköz szükséges.</p>

<h2>macOS beépített riasztási hangerő</h2>

<p>macOS külön riasztási mennyiséggel rendelkezik. Nézz ki <strong>Rendszerbeállítások → hang</strong> és keresd a <strong>"Riasztás hangerő"</strong> csúszkát. Ez a rendszer hangjainak macOS hangerőjét – hibasípolások, szemét ürítése, képernyőkép zár – függetlenül szabályozza a fő rendszer hangerőjétől.</p>

<p>Azt is eldöntheted, melyik riasztási hangot használod, és hogy "Lejátszás hangeffektjein" a kiválasztott kimeneti eszközön vagy a beépített hangszórókon keresztül játszasz-e le.</p>

<h3>Mi a riasztás hangerőszabálya</h3>
<ul>
  <li>macOS rendszerriasztási hangok (Funk, Tink, Bottle stb.)</li>
  <li>Kereső hangok (Szemét, fájlmásolat kész)</li>
  <li>Néhány beépített alkalmazás hang</li>
</ul>

<h3>Mit nem irányít</h3>
<ul>
  <li>Slack értesítési hangok</li>
  <li>Discord értesítési hangok</li>
  <li>Teams/Zoom hangok</li>
  <li>E-mail értesítési hangok</li>
  <li>Bármilyen harmadik féltől származó alkalmazás értesítési hangja</li>
  <li>Böngésző értesítési hangok</li>
</ul>

<p>A harmadik féltől származó alkalmazások a saját hangmotorjukon keresztül játszanak le értesítési hangokat — ezek a rendszeres hangként kezelik őket, nem pedig rendszerriasztásként. A riasztási hangerő csúszka nem befolyásolja őket. Ez azt jelenti, hogy azok az alkalmazások, amelyek a legidegesítőbb értesítési hangokat adják ki (Slack, Discord, Teams), azok azok, amiket macOS riasztási hangerő nem ér el.</p>

<h2>Az igazi megoldás: alkalmazásonkénti volumen az értesítési alkalmazásokhoz</h2>

<p>Ahhoz, hogy valóban elkülönítsd az értesítési hangerőt a média hangerőtől, alkalmazásonként hangerőszabályozásra van szükség. Állítsd a Slacket 15%-ra, a Discordot 20%-ra, a Mail-t 10%-ra — miközben a Spotify 50%-on, a böngésződ pedig 60%-on marad.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> minden alkalmazásnak saját hangerő csúszkát ad. Az értesítéssel foglalkozó alkalmazásokat finom szintre állíthatod, ami észrevehető, de nem zavaró, miközben a médiaalkalmazásokat kényelmes hallgatási hangerőn tartod.</p>

<img src="/apps/sounddial.png" alt="SoundDial az értesítési alkalmazás hangerő és a médiaalkalmazás hangerő elválasztása macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Példa beállítás</h3>
<p><strong>Médiaalkalmazások:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60%</li>
  <li>QuickTime/VLC: 70%</li>
</ul>

<p><strong>Értesítési alkalmazások:</strong></p>
<ul>
  <li>Lazaság: 15%</li>
  <li>Discord: 20%</li>
  <li>Posta: 10%</li>
  <li>Naptár: 25%</li>
</ul>

<p><strong>Kommunikációs alkalmazások:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>FaceTime: 100%</li>
</ul>

<p>Mentsd el ezt profilként, és alkalmazd egy kattintással. Az értesítés és a média hangerő közötti különbség, amit macOS nem biztosít natívan — kevesebb mint egy perc alatt kész meg.</p>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-értékelés, 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "A FaceTime hívás hangerője túl alacsony Mac? Hogyan lehet megoldani",
    description:
      "A FaceTime hang alig hallható a Mac hangerőn is. Íme minden megoldás — a hangbeállításoktól kezdve a FaceTime 100%-ra történő felemelésig.",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>Az iPhone-on FaceTime hívások rendben vannak. De a Mac a másik úgy hangzik, mintha három szobával arrébb suttogna. A hangerő maximumban van. Mindent átnéztél, amire csak gondolsz. Még mindig túl csendes.</p>

<p>Az alacsony FaceTime hangerő Mac-n gyakori probléma, és több oka is lehet. Nézzük végig mindegyiket.</p>

<h2>1. Ellenőrizd a kimeneti eszközt</h2>

<p>Menj a Rendszerbeállításokhoz → hang → kimenet. Győződj meg róla, hogy a megfelelő eszköz van kiválasztva. Ha nemrég csatlakoztattál vagy lecsatlakoztattál fejhallgatót, kijelzőt vagy Bluetooth eszközöket, macOS automatikusan átváltott egy váratlan kimenetre — például egy alig működő beépített hangszórójú monitorra.</p>

<h2>2. Nézd meg a FaceTime hangbeállításait</h2>

<p>FaceTime hívás közben kattints a menüsávra, és nézd meg a FaceTime → Videót, → válaszd ki a megfelelő kimeneti eszközt az Audio Output alatt. A FaceTime néha más kimeneti eszközt használhat, mint a rendszer alapértelmezettje, különösen az eszköz váltása után.</p>

<h2>3. Kapcsold ki az AirPods automatikus kapcsolását</h2>

<p>Ha több Apple eszközzel párosítod az AirPods-ot, előfordulhat, hogy automatikusan elváltanak a Mac-ről hívás közben. Ellenőrizd a Rendszerbeállításokat a Bluetooth→ → kattints az "i" gombra az AirPods mellett, → a "Connect to This Mac" → állítsd be "When Last Connected to This Mac" opcióra az "Automatikusan" helyett, hogy megakadályozd a hívás közbeni váltást.</p>

<h2>4. Bluetooth kodekprobléma</h2>

<p>AirPods vagy Bluetooth fejhallgató használata FaceTime-mal aktiválja az AAC-tól SCO kodekkapcsolót (mert a FaceTime a mikrofonoddal használja). Az SCO csökkenti a hangminőséget és a hangerőt. Külön mikrofont (beépített Mac mikrofont vagy USB-t) használj az AirPods magas minőségű AAC módjában tartására.</p>

<h2>5. Fejhallgató biztonsága korlátozza a hangerőt</h2>

<p>Rendszerbeállítások → hang → fejhallgató biztonsága. Ha a "Csökkent hang hang" bekapcsol, macOS a fejhallgató hangerőjét korlátozza. Kapcsold ki vagy emeld meg a küszöbértéket.</p>

<h2>6. A Core Audio visszaállítása</h2>

<p>Nyisd ki a terminált és futás:</p>
<p><code>Sudo killall coreaudiod</code></p>
<p>Ez újraindítja az audio daemont, és javíthatja a beragadt alacsony hangerő állapotokat. Csatlakozzon újra a FaceTime híváshoz a hang újraindítása után.</p>

<h2>7. Emeld a FaceTime hangerőt 100%-ra</h2>

<p>Ha minden beállítás helyes, és a FaceTime még mindig túl halk — talán a másik félnek gyenge mikrofonja van — akkor macOS korlátai felett kell erősíteni.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lehetővé teszi, hogy a FaceTime hangerőjét felemeld <strong>200%</strong>. Nyisd meg a menüsáv paneljét, keresd meg a FaceTime-ot, és húzd a csúszkát 100%-on túlra. A híváshang valós időben felerősítődik, anélkül, hogy más alkalmazásokat érintene.</p>

<img src="/apps/sounddial.png" alt="SoundDial a FaceTime hívások hangerőjének 100%-ra növelése macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial fordítva is segít: ha a FaceTime csengőhangja vagy értesítése túl hangosak a fókuszidőben, csökkentsd a FaceTime-t 20%-ra, vagy állítsd le, miközben a zene megmarad. Egy kattintás a némításhoz, egy kattintás a némítás megszüntetéséhez.</p>

<p>Elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple által értékelt, sandbox, egyszeri vásárlás, előfizetés nélkül.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac hangerő billentyűbillentyűk – valószínűleg nem tudod",
    description:
      "Az alapvető hangerőgombokon túl — finom vezérlés, bizonyos alkalmazások némítása, és alkalmazásonkénti hangerő billentyűk. Minden Mac hangbillentyűzet trükk elmagyarázta.",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>Minden Mac felhasználó ismeri a hangerő fel- és lecsökkentő/némító gombokat. Nyomd meg őket, és a rendszer hangerője változik. De macOS több rejtett billentyűzetes trükköt is tartalmaz a hangvezérléshez, amelyeket a legtöbben sosem fedeznek fel — plusz harmadik féltől származó gyorsítványok is felgyorsítják a hangerőkezelést.</p>

<h2>Beépített rövidítések, amiket mindenkinek tudnia kell</h2>

<h3>Finomszemcsésű térfogatállítás</h3>
<p>Tartsd meg <strong>Opció + Váltás</strong> és nyomd meg a hangerő fel- vagy lecsökkentő gombot. Minden nyomás a hangerőt a következőképpen állítja be <strong>egy negyed</strong> egy normális lépés, így 64 szintet adsz a 16 helyett. Ez elengedhetetlen ahhoz, hogy késő este megtaláld a megfelelő fejhallgató hangerőt, vagy amikor a két normál lépés közötti váltás túl nagy.</p>

<h3>Néma hangerőállítás</h3>
<p>Tartsd meg <strong>Váltás</strong> és nyomd fel vagy csökkent a hangerőt. A hangerő változik, de a hallható visszacsatolású "pop" hang elnyomódik. Hasznos, ha hívás vagy előadás közben állítod a hangerőt, és nem akarod, hogy a pophang mindenkihez eljutjon.</p>

<h3>Ugrás a Hangbeállításokhoz</h3>
<p>Tartsd meg <strong>Opció</strong> és bármelyik hangerő gombbal megnyitja közvetlenül a System Settings → Sound funkciót. Gyorsabb, mint kézzel navigálni a Rendszerbeállításokban.</p>

<h3>Gyors kimeneti eszközkapcsoló</h3>
<p>Tartsd meg <strong>Opció</strong> és kattints a menü Hang ikonra, hogy meglásd az összes elérhető kimeneti (és bemeneti) eszköz listáját. Kattints az egyre, hogy azonnal válts. Nem kell megnyitni a Rendszerbeállításokat.</p>

<h2>Mit nem tudnak macOS billentyűs billentyűk megtenni</h2>

<p>Az összes fent említett rövidítés a <strong>Rendszer térfogata</strong> — egy csúszkát, amely minden alkalmazást egyformán érint. Nincsenek beépített billentyűbillentyűk a következőkhöz:</p>

<ul>
  <li>Egy adott alkalmazás hangerőjének beállítása</li>
  <li>Egy alkalmazást némítani anélkül, hogy mindent elnémítanánk</li>
  <li>Váltás a mentett hangerő konfigurációk között</li>
  <li>Hangerőkeverő panel kapcsolása</li>
</ul>

<p>macOS egyszerűen nincs alkalmazásonként hangerőszabályzó, így nincs hozzá gyorsítvány.</p>

<h2>Alkalmazásonkénti hangerő billentyűbillentyűk SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Két globális billentyűs billentyűs parancsteret ad, amelyek kibővítik macOS képességeit:</p>

<h3>A hangerőkeverő kapcsolása: Control + Option + S</h3>
<p>Sajtó <strong>⌃⌥S</strong> Bárhonnan megnyílik a SoundDial popovere a menüsávban, ahol minden alkalmazás megmutatja a saját hangerő csúszkával. Állítsd be, amit szeretnél, nyomd meg újra a gyorsbillentyűt (vagy kattints tovább), hogy bezárd. Sosem hagyod el a jelenlegi appodat.</p>

<h3>Némítsd el az összes alkalmazást: Control + Option + M</h3>
<p>Sajtó <strong>⌃⌥M</strong> hogy azonnal elnémítsa minden alkalmazás hangját. Nyomd meg újra, hogy minden kioldja a némítást, és minden alkalmazást visszaállít az előző hangerőre. Ez egy "azonnali némaság" gomb, amely gyorsabb, mint a némítás gombhoz nyúlni — és ellentétben a rendszer némítás gombjával, visszaállítja az alkalmazásonkénti hangerőt, amikor visszakapcsolod.</p>

<img src="/apps/sounddial.png" alt="SoundDial billentyűs billentyűk — Control+Option+S a kapcsolóhoz, Control+Option+M a némításhoz" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>A billentyűzetvezérelt munkafolyamat</h2>

<p>Ha az SoundDial billentyűi bekapcsolva, az egérhez nem nyúlnál az összes hangrendszered, kezelheted:</p>

<ol>
  <li><strong>⌃⌥S</strong> — nyisd ki a keverőt</li>
  <li>Használj nyílbillentyűket vagy az egéret az egyes csúszkák beállításához</li>
  <li><strong>⌃⌥S</strong> — zárd be a keverőt</li>
  <li><strong>⌃⌥M</strong> — azonnali némítás, amikor valaki belép a szobába</li>
  <li><strong>⌃⌥M</strong> — elnémítják, amikor elmennek, minden visszatér a normális kerékvágásba</li>
</ol>

<p>Kombinálva <strong>Térfogatprofilok</strong> (a mentett konfigurációkat egyetlen kattintással válthatod), egy tucat alkalmazás hangját kezelheted anélkül, hogy egy-egy alkalommal meg kellene nyitnod.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Háttérzenei alkalmazás nem működik macOS? Próbáld ki ezeket az alternatívákat",
    description:
      "Az ingyenes Background Music alkalmazás egy macOS frissítés után leállt? Íme, miért romlik el, mit kell tenni, és mik a legjobb alternatívák, amelyek valóban működnek 2026-ban.",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>A Background Music egy népszerű, ingyenes, nyílt forráskódú Mac alkalmazás, amely alap, alkalmazásonkénti hangerőszabályozást biztosít. Úgy működik, hogy egy virtuális hangkészüléket telepít, és az összes hangot átirányítja rajta. A probléma: elromlik. Rendszeresen.</p>

<p>Szinte minden macOS frissítés után — Ventura, Sonoma, Sequoia, Tahoe — a felhasználók ugyanazokat a problémákat jelentik: a virtuális hangkészülék nem telepít be, hanghibák és recsegések jelennek meg, egyes alkalmazások nem érzékelnek, vagy egyszerűen összeomlik az alkalmazás indításkor. Ha rákerestél rá, hogy "Háttérzene nem működik", nem vagy egyedül.</p>

<h2>Miért törik meg a háttérzene folyamatosan</h2>

<p>A háttérzene úgy működik, hogy egy <strong>Virtuális hangeszköz meghajtó</strong> (egy Core Audio HAL plugin). macOS az összes rendszerhangot ezen a virtuális eszközön keresztül irányítja, és a háttérzene elfogja, hogy alkalmazásonként hangerőszabályozást alkalmazzon.</p>

<p>A probléma az, hogy az Apple szinte minden nagyobb macOS kiadásnál megváltoztatja a hangillesztőprogramok működését. Szigorítják a biztonsági korlátozásokat, az API-k változnak, és a driverbetöltési mechanizmusok fejlődnek. Mivel a Background Music önkéntesek által fenntartott nyílt forráskódú projekt, az Apple változásainak megfelelő frissítések nem mindig időszerűek.</p>

<p>Gyakori problémák macOS frissítések után:</p>
<ul>
  <li><strong>A virtuális hangeszköz nem telepíthető</strong> — macOS új biztonsági szabályzatai blokkolják a vezetőt</li>
  <li><strong>Hang sistergése vagy dadogása</strong> — a virtuális eszköz késleltetést hoz be, amit a jelenlegi macOS verzió rosszul kezel</li>
  <li><strong>Alkalmazások nem jelennek meg</strong> — változások abban, ahogyan macOS jelentések futtató folyamatokat megtörnek az alkalmazásfelismerés</li>
  <li><strong>Egyáltalán nincs hang</strong> — a virtuális eszköz alapértelmezett kimenetként van beállítva, de nem továbbítja a hangot</li>
  <li><strong>Összeomlás indításkor</strong> — az inkompatibilitás a jelenlegi macOS verzióval</li>
</ul>

<h2>Hogyan javítsuk meg a háttérzenét</h2>

<p>Ha a háttérzene jelenleg hibás:</p>

<ol>
  <li><strong>Nézd meg a frissítéseket:</strong> Látogass el a GitHub megjelenések oldalára a háttérzene számára, és nézd meg, megjelent-e új verzió a macOS verziódhoz.</li>
  <li><strong>Újratelepítés:</strong> Töröld teljesen a háttérzenét (beleértve a virtuális hangkészüléket is), indítsd újra, és telepítsd a legújabb verziót.</li>
  <li><strong>Hang visszaállítása:</strong> Ha a hangod beragad a virtuális eszközön, menj a Rendszerbeállításokhoz → a Hang → Kimenethez, és válaszd ki a valódi hangszórókat/fejhallgatókat. Akkor fuss el <code>Sudo killall coreaudiod</code> a terminálban.</li>
  <li><strong>Ellenőrizd a jogosultságokat:</strong> Rendszerbeállítások → Adatvédelmi és biztonság — győződj meg róla, hogy a Background Music rendelkezik a szükséges jogosultságokkal.</li>
</ol>

<h2>Alternatívák, amelyek nem használnak virtuális hangeszközöket</h2>

<p>A háttérzene alapvető problémája az építészet: a virtuális hangeszközök törékenyek és macOS frissítések miatt törékenyek. Modern alternatívák az Apple termékeit használják <strong>Core Audio Tap API</strong> (macOS 14-ben vezették be), amely lehetővé teszi, hogy az alkalmazások folyamatonként hangokat fogjanak el anélkül, hogy rendszerszintű drivert telepítenének.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> a modern Audio Tap API-t használja — nincs virtuális hangeszköz, nincs rendszermeghajtó, nincs kernel kiterjesztés. Közvetlenül csatlakozik az Apple által támogatott API-hoz tartozó alkalmazások hangfolyamához, ami azt jelenti, hogy nem törik meg macOS frissítésekkor.</p>

<img src="/apps/sounddial.png" alt="SoundDial — egy háttérzenei alternatíva, amely nem telepít virtuális hangkészülékeket" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Amit a háttérzene fölött kapsz:</p>
<ul>
  <li><strong>Nincs virtuális hangkészülék</strong> — működik az Apple natív hangrendszerével, nem romlik meg frissítésekkor</li>
  <li><strong>Hangerő növelése 200%-ra</strong> — A háttérzene 100%-os korlátja</li>
  <li><strong>Térfogatprofilok</strong> — mentés és váltás konfigurációk között (Háttérzene nem tartalmaz)</li>
  <li><strong>Automatikus leugrás</strong> — automatikus hangerőcsökkentés hívások közben (Háttérzene csak automatikus szünetet használ, nem hajol)</li>
  <li><strong>Térfogatmemória</strong> — emlékezik az alkalmazásonkénti volumenekre az újraindítások között</li>
  <li><strong>Billentyűs billentyűk</strong> — kapcsold ki a keverőt vagy némítsd el az összes alkalmazást</li>
  <li><strong>Aktív fejlesztés</strong> — rendszeresen frissítve a legfrissebb hírek macOS</li>
</ul>

<p>A kompromisszum: SoundDial egyszeri fizetett vásárlás, míg a háttérzene ingyenes. De egy ténylegesen működő alkalmazás többet ér, mint egy ingyenes alkalmazás, ami félhavonta megszűnik. És mivel SoundDial a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, az Apple átvizsgálta, biztonsági szempontból sandboxba helyezte, és tisztán telepíthető — nincs letöltés a GitHubról, nincs fordítás forrásból, nincs rendszerbővítési engedély.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource alternatíva: könnyebb, olcsóbb alkalmazásonkénti hangerőszabályzó Mac",
    description:
      "A SoundSource erőteljes, de drága és összetett. Ha csak alkalmazásonkénti hangerőszabályzóra van szükséged hangmérnöki eszköztár nélkül, íme, mit érdemes használni helyette.",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>A Rogue Amoeba SoundSource a leghosszabb ideig futó alkalmazásonkénti hangerőszabályzó alkalmazás Mac számára. Erőteljes, jól megalkotott, és olyan funkciókkal rendelkezik, mint az alkalmazásonkénti EQ, hangeffekt láncok és alkalmazásonkénti kimeneti útvonal. Ráadásul 39 dollárba kerül, rendszerhang-meghajtót (ACE) igényel, és több funkcióval rendelkezik, mint amennyit a legtöbben valaha is használnak.</p>

<p>Ha csak a Spotify lejátszását szeretnéd lekapcsolni anélkül, hogy befolyásolnád a Zoomot — és nincs szükséged teljes hangmérnöki eszköztárra — a SoundSource talán több, mint amire szükséged van. Íme, mit érdemes figyelembe venni.</p>

<h2>Amit a SoundSource jól csinál</h2>

<p>A hitel — a SoundSource egy kifinomult, professzionális alkalmazás:</p>
<ul>
  <li><strong>Alkalmazásonkénti hangerőszabályozás</strong> finomszemcsésű csúszkákkal</li>
  <li><strong>Alkalmazásonkénti EQ</strong> beépített ekvalizátorokkal és Audio Unit plugin támogatással</li>
  <li><strong>Alkalmazásonkénti kimeneti útozás</strong> — különböző alkalmazásokat küldj különböző hangszórókra</li>
  <li><strong>Hangerőnövelés</strong> múlt 100%-os</li>
  <li><strong>Rendszerszintű hangeffektek</strong></li>
</ul>

<p>Ha podcaster, streamer vagy hangmérnök vagy, akinek szüksége van alkalmazásonkénti EQ-ra és effektláncokra, a SoundSource kifejezetten neked van kialakítva.</p>

<h2>Ahol a SoundSource nem marad el a hétköznapi felhasználók számára</h2>

<h3>Ár</h3>
<p>39 USD drág egy hangerőszabályzó alkalmazásért. Ha nem használod az EQ-t, hangeffekteket vagy alkalmazásonkénti útvonalazást, akkor olyan funkciókért kell fizetned, amiket soha nem fogsz érinteni.</p>

<h3>Rendszermeghajtó</h3>
<p>A SoundSource egy egyedi rendszerhang-meghajtót telepít, amelynek neve ACE (Audio Capture Engine). Ez jól működik, de bonyolultságot növel — minden macOS kiadással frissíteni kell, néha ütközhet más hangszoftverekkel, és azt jelenti, hogy harmadik féltől származó kódot futtatsz a rendszer hangszintjén. Néhány vállalati környezetben működő IT osztály blokkolja a kernel kiterjesztéseket és rendszerszintű hangmeghajtókat.</p>

<h3>Nincs hangerőprofil</h3>
<p>A SoundSource kiterjedt funkciókészlete ellenére nincs profilrendszere. Nem lehet elmenteni egy "Meeting" és egy "Focus" konfigurációt, és váltani közöttük. Minden alkalommal, amikor a helyzeted változik, kézzel állítod be a csúszkát.</p>

<h3>Nincs automatikus lehajlás</h3>
<p>A SoundSource nem csökkenti automatikusan a háttérhangot, amikor csatlakozol egy híváshoz. Nincs hívásérzékelés, nincs automatikus hangerőállítás, nincs kéz nélküli munkafolyamat a leggyakoribb alkalmazásonkénti keverőhöz.</p>

<h2>SoundDial: arra fókuszál, amire a legtöbb embernek valójában szüksége van</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> más megközelítést alkalmaz: tökéletesen végezzük el a fő munkát, kihagyjuk azokat a funkciókat, amikre a legtöbb embernek nincs szüksége, és hozzáadjuk azokat a munkafolyamat-funkciókat, amik a SoundSource-tól hiányoznak.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Jellemzők</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Hangforrás</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Alkalmazásonkénti mennyiség</td>
  <td style="text-align:center;padding:10px 12px;">Igen (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Alkalmazás-alapú mute</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Térfogatprofilok</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Automatikus leugrás</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Térfogatmemória</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Alkalmazásonkénti EQ</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Alkalmazásonkénti kimeneti útozás</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Rendszerhang meghajtó</td>
  <td style="text-align:center;padding:10px 12px;">Nem szükséges</td>
  <td style="text-align:center;padding:10px 12px;">Kötelező (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Billentyűs billentyűk</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Ár</td>
  <td style="text-align:center;padding:10px 12px;">14,99 € egyszeri</td>
  <td style="text-align:center;padding:10px 12px;">39 USD</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — egy könnyebb, fókuszált SoundSource alternatíva hangerőprofilokkal és automatikus leugrással" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Melyiket válassza?</h2>

<ul>
  <li><strong>Válaszd a SoundSource-t, ha:</strong> Szükséged van alkalmazásonként EQ-ra, hanghatásláncokra vagy alkalmazásonkénti kimeneti útvonalra. Podcaster, streamer vagy hangmérnök vagy. Nem zavar az ár és a rendszer meghajtója.</li>
  <li><strong>Válassz <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ha:</strong> Alkalmazásonként hangerőszabályzót szeretnél profilokkal és automatikus leugrással. Valami könnyebbet szeretnél, ami nem telepít rendszermeghajtót. Többet akarsz költeni. Távmunkás, játékos, diák vagy bárki vagy, aki csak le akarja kapcsolni a Slack-et anélkül, hogy befolyásolná a Zoomot.</li>
</ul>

<p>SoundDial elérhető a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — ami azt jelenti, hogy az Apple átvizsgálta, biztonsági szempontból sandboxba helyezte, és tisztán telepíti/eltávolítja az alkalmazást, mint bármelyik App Store alkalmazás. Nem kell DMG-ket letölteni véletlenszerű weboldalakról, nem telepített rendszermeghajtót, nem adtak kernel kiterjesztési engedélyeket. Egyszeri vásárlás, előfizetés nélkül.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac túl hangos a legalacsonyabb beállításon? Hogyan legyek még csendesebbé",
    description:
      "Még a legalacsonyabb hangerőnél is túl hangos a Mac – főleg késő este fejhallgatóval. Íme, hogyan lehet finomabb hangerőszabályzót elérni, és a minimumot alá menni.",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>Éjfél van. Fejhallgatót viselsz. A hangerő csökkentő gombot nyomod, amíg a legalacsonyabb szintre nem érsz — egy sávot. Még mindig túl hangos. A következő nyomás néma. Nincs köztes hely. 3%-os volument szeretnél, de macOS ~6%-ról 0%-ra ugrik.</p>

<p>Ez gyakori panasz a fejhallgatókkal és érzékeny hangszórókkal. macOS 16 hangerős lépése túl durva — a legalacsonyabb hallható lépés még mindig hangosabb, mint amit a csendes, késő esti hallgatáshoz kell.</p>

<h2>Beépített megoldás: negyedlépéses hangerőállítás</h2>

<p>A legtöbb Mac felhasználó ezt nem tudja: <strong>4-szer finomabb hangerőszabályozás</strong> billentyűzetmódosító használatával.</p>

<p>Tartsd meg <strong>Opció + Váltás</strong> és nyomd meg a hangerő fel- és lecsökkentő gombokat. Minden nyomás egy negyedével állítja a hangerőt a normál lépés negyedével — így 64 lépés van a 16 helyett.</p>

<p>Ez lehetővé teszi, hogy a normál bevágások között hangerőt találj. Az a "egy sáv" és a "némítás" közötti távolság most három további szintet kap, amelyre leszállhatsz. Késő esti fejhallgató hallgatásnál ez gyakran elég ahhoz, hogy kényelmes szintet találjunk.</p>

<h2>Miért hangosabb néhány tartalom ugyanazon a hangerőn, mint mások</h2>

<p>Észreveheted, hogy egyes alkalmazások hangosabbnak érződnek még ugyanazon a rendszerhangerőn is. A Spotify egy bárban hangosabbnak tűnik, mint egy YouTube videó az egyik bárban. Ez azért van, mert minden alkalmazás különböző hangmagasságokon ad hangot ki, és a rendszer hangerő arányosan skálázza őket.</p>

<p>Egy 0 dB-en (maximum) maszterelt dal és egy -15 dB-es podcast ugyanazon a rendszerhangerőn drámaian eltérően fog szólni. A dal 15 dB-vel hangosabb — amit a füled számára nagyjából háromszor hangosabbnak érzékel.</p>

<h2>Az igazi megoldás: alkalmazásonként a hangerő finom vezérléshez</h2>

<p>A negyedlépéses gyorsítvány segít, de még mindig minden alkalmazást egyenlően állít. Ha a Spotify a legalacsonyabb lépésnél túl hangos, de a Zoom hívásod a legalacsonyabb szinten túl halk, akkor elakadsz.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Alkalmazásonként hangerő csúszkákat adsz apró szemcsésű vezérléssel — minden csúszka 1%-os lépésekben mozog 0%-tól 200%-ig. Egyszerre állíthatod a Spotify-t 5%-ra, a Zoomot 40%-ra egyszerre. Az irányítás szintje drámaian finomabb, mint macOS 16 rendszerlépése.</p>

<img src="/apps/sounddial.png" alt="SoundDial aprócsós, alkalmazásonkénti hangerőszabályzó, 1%-os növeléssel macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Késő esti fejhallgató használatra:</p>
<ul>
  <li>Állítsd a rendszer hangerőt mérsékelten (40-50%)</li>
  <li>Használd SoundDial, hogy finomhangold az összes alkalmazást pontosan a kívánt szintre</li>
  <li>A Spotify 8%-kal — alig hallható háttérzene</li>
  <li>Böngésző 15% — elég csendes az éjszakai videókhoz</li>
  <li>Értesítések elnémítva — nem meglepő, hangos csipogások</li>
</ul>

<p>Mentsd el ezt "Night" profilként, és egy kattintással alkalmazd, amikor bekapcsolod a fejhallgatót munkaidő után.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Az egyik AirPod hangosabb a másiknál? Minden megoldás elmagyarázva",
    description:
      "A bal AirPod halkabb, mint a jobb (vagy fordítva). Íme minden ok — a fülviaszttól a macOS egyensúlyozásig — és hogyan lehet ezt megoldani.",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>Egy AirPod rendben van. A másik észrevehetően csendesebb. A zene nem középpontnak tűnik. A hangok úgy hangzik, mintha az egyik oldalról jönnének. Ez az egyik leggyakoribb AirPods panasz, és általában egyszerű megoldással jár.</p>

<h2>1. Tisztítsd meg az AirPods-odat</h2>

<p>A leggyakoribb ok a fizikai: fülzsír vagy törmelék részben elzárja az egyik AirPod hangszóró hálóját. Még egy vékony réteg is jelentősen csökkentheti a térfogatot azon az oldalon.</p>

<p><strong>Hogyan tisztítsuk:</strong></p>
<ul>
  <li>Használj száraz, puha sörtés kefét (egy tiszta fogkefe működik), hogy finoman fésüld meg a hangszóró hálóját</li>
  <li>AirPods Pro szilikon hegyeknél: vedd le a hegyet, és tisztítsd meg mind a hegyet, mind a hangszóróhálót alatta</li>
  <li>Külső felületen száraz, szöszmentes kendőt használj</li>
  <li><strong>Ne használd:</strong> Víz, alkohol, sűrített levegő vagy éles tárgyak — ezek károsíthatják a hangszóró hálóját vagy tovább nyomhatják a törmeléket</li>
</ul>

<p>Tisztítás után teszteld mindkét AirPodot. A legtöbb esetben ez azonnal megoldja a problémát.</p>

<h2>2. Ellenőrizd a hangegyensúlyt macOS</h2>

<p>macOS bal-jobb hangegyensúly csúszkával rendelkezik, ami talán nem középen áll:</p>

<ol>
  <li>Nézz ki <strong>Rendszerbeállítások → Hozzáférhetőség → Audio</strong></li>
  <li>Keresd meg a <strong>Egyensúly</strong> csúszka</li>
  <li>Győződj meg róla, hogy pontosan középen van a L és R között</li>
</ol>

<p>Ha a csúszkát az egyik oldalra tolták, az a hibás. Középre kell helyezni, és a hangerőnek mindkét oldalon egyenlőnek kell lennie.</p>

<p>Nézd meg is <strong>Rendszerbeállítások → hang</strong> — néhány macOS verzióban is van egy egyensúlyérzékelő a kimeneti eszköz beállításaiban.</p>

<h2>3. Állítsd vissza az AirPods-odat</h2>

<p>Ha a tisztítás és az egyensúly nem segít, próbáld meg újraállítani az AirPods-odat gyári állapotra:</p>

<ol>
  <li>Tedd mindkét AirPod-ot a töltőtokba</li>
  <li>Csukd be a fedelet, és várj 30 másodpercet</li>
  <li>Nyisd ki a fedelet</li>
  <li>Nyomd meg és nyomd a doboz hátulján lévő beállítás gombot 15 másodpercig, amíg az állapotjelző fény borostyánszínű, majd fehér fényt villan</li>
  <li>Kapcsold újra az AirPods-ot a Mac-eddel (Rendszerbeállítások → Bluetooth)</li>
</ol>

<p>Ez visszaállítja a tárolt hangkalibrációt, és javíthatja a szoftveres hangerő egyensúlytalanságait.</p>

<h2>4. Ellenőrizze a mono hangot</h2>

<p>Ha macOS Mono Audio akadálymentességi funkciója engedélyezett, a sztereó hang egyetlen csatornába keveredik, és mindkét AirPods-ba egyenlően továbbítódik. Bár ez nem okozhat hangerőkülönbségeket, megváltoztathatja bizonyos tartalmak hangzását, és az egyik oldal "más" tűnését.</p>

<p>Ellenőrizd: Rendszerbeállítások → Elérhetőség → Hang → győződj meg róla, hogy a "Mono Audio" ki van kapcsolva (hacsak nincs rá szükséged).</p>

<h2>5. Bluetooth zavarás</h2>

<p>Az AirPods Bluetoothon keresztül kommunikál Mac-vel, és mindegyik AirPod a másikkal is kommunikál. Ha jelentős Bluetooth zavar (WiFi routerek, USB 3.0 hubok, más Bluetooth eszközök), az egyik AirPod gyengébb jelet kaphat.</p>

<p><strong>Javítás:</strong> Menj közelebb a Mac. Kapcsold le azokat a Bluetooth eszközöket, amiket nem használsz. Ha egy USB 3.0 hub közelében vagy, próbáld meg elmozdítani — az USB 3.0 ismert arról, hogy zavarja a 2,4 GHz-es Bluetoothot.</p>

<h2>6. Hardveres probléma</h2>

<p>Ha egyik fentiek sem működik, az egyik AirPod hardverhiba lehet — romos hangszórómeghajtó vagy sérült háló. Ez idővel előfordul, ha nagy a használat is van.</p>

<p><strong>Javítás:</strong> Vedd fel a kapcsolatot az Apple ügyfélszolgálatával vagy látogass el egy Apple Store-ra. Ha az AirPodjaid garanciában vagy AppleCare+ alatt vannak, az Apple kicseréli az érintett AirPodot. Egyedi AirPod cserék is elérhetők garancián kívüli vásárlásra.</p>

<h2>Jobb hangegyensúly alkalmazásonként hangerőszabályozással</h2>

<p>Bár az alkalmazásonként történő hangerőszabályzó nem javítja meg a hardveres egyensúlyhiányt az AirPods között, egy kapcsolódó problémát is megold: amikor egyes alkalmazások hangosabbak, az túlzásba hozhatja az egyensúlyhiány észlelését.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Lehetővé teszi, hogy minden alkalmazást egységes hangerőre állíts. Amikor a Spotify 40%-on, a Zoom 100%-on, a Safari pedig 60%-on, pontosan tudod, mire számíthatsz az egyes alkalmazásoktól — nincs hirtelen hangerőugrás, ami miatt az egyik AirPod hangosabbnak tűnik, mert egy értesítés 100%-ra robbant.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Túl halk a Netflix és a streaming hang Mac-n? Hogyan lehet megoldani",
    description:
      "A párbeszéd suttogásszerű halk, majd egy robbanás rázja meg a termet. Íme, hogyan javíthatod meg a streaming hangszintet Mac rendszeren — és hogyan emelheted a csendes tartalmat 100%-ra.",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>Netflixen nézel egy filmet. Két karakter beszélgetik — alig hallani lehet őket. Feltekered a hangerőt. Indul egy akciójelenet. A robbanások fülsiketítőek. Gyorsan kapkodsz a hangerő billentyűjéért. Ez a leggyakoribb panasz a streaming audio esetén, és a Mac beépített hangszóróinál még rosszabb.</p>

<p>A probléma nem a Mac. Ez az, ahogyan a filmek és tévésorozatok mesterlése – és hogy macOS nem ad eszközt a javításra.</p>

<h2>Miért van hangerő ingadozása a streaming hangerő</h2>

<p>A filmeket és tévéműsorokat magasan mesterelnek <strong>Dinamikatartomány</strong> — a különbség a legcsendesebb és leghangosabb hangok között. Egy színházban, ahol erős hangszórók és mélynyomó van, ez hihetetlenül hangzik. A suttogások intimek, a robbanások zsikeresek.</p>

<p>Egy MacBook 2 hüvelykes hangszóróján ez a dinamikatartomány hátránysá válik. A csendes részek alacsonyabb szintben vannak, mint amit a kis hangszórók tisztán képesek reprodukálni, míg a hangos részek elérik a hangszóró fizikai korlátait. Folyton hangerőt kell állítanod — a párbeszédhez feltegyél, akciónál lejjebb állítod.</p>

<h2>1. megoldás: Kapcsold be a "Csökkentse a hangos hangokat" a streaming alkalmazásban</h2>

<p>Néhány streaming szolgáltatás rendelkezik hangerőnormalizációs funkcióval:</p>
<ul>
  <li><strong>Netflix:</strong> Lejátszás közben kattints a hangszóró ikonra, → ellenőrizd, van-e "Hangos hangok csökkentése" opció (ami elérhető a böngészőben és a natív alkalmazásban)</li>
  <li><strong>Apple TV+:</strong> Beállítások → Hozzáférhetőség → "Hangos hangok csökkentése"</li>
  <li><strong>Disney+:</strong> Jelenleg nincs megfelelő beállítás</li>
  <li><strong>Amazon Prime Video:</strong> "Dialogue Boost" funkció (ha elérhető a címhez)</li>
</ul>

<p>Ezek a funkciók tömörítik a dinamikatartományt — így a halk hangok hangosabbak, míg hangosabbak hangok. Az eredmény egyenletesebb hangerő, ami jobban működik kis hangszórókon és alacsony hallgatási szinten.</p>

<h2>2. javítás: Ellenőrizd a Mac hangerősítőjét</h2>

<p>Néhány Mac modellen macOS hangfeldolgozást alkalmaz a beépített hangszórókra. Nézd meg a Rendszerbeállításokat → Hangot, hogy van-e valamilyen fejlesztési lehetőség a kimeneti eszközödhöz. A MacBook Pro 14" és 16" modelleken a hangszórórendszer térbeli hangfeldolgozással rendelkezik, ami befolyásolhatja az észlelt hangerőt.</p>

<h2>3. megoldás: Vezetékes fejhallgató használata</h2>

<p>A fejhallgatók teljesen megkerülik a hangszóróméret problémáját. Még az olcsó, vezetékes fülhallgatók is tisztán képesek halk párbeszédet regenerálni, mert a meghajtó közvetlenül a dobhártyád mellett van. A kis hangszórókon problémás dinamikatartomány előnyt jelent a fejhallgatóknál.</p>

<h2>4. javítás: A streaming hang 100%-on emelje fel</h2>

<p>Ha a tartalom túl halk — még a normalizáció és a maximális hangerő mellett is —, akkor erősítésre van szükség, mint amit macOS biztosít.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lehetővé teszi, hogy bármelyik alkalmazást felgyorsítsd <strong>200%</strong>. Ha a Safari vagy a Netflix alkalmazás túl csendes, húzd a csúszkát 100%-ra. A hang felerősítődik, mielőtt elérné a hangszórókat, így gyakorlatilag csak az adott alkalmazás maximális hangerőjét duplázza.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Netflix hangját 180%-ra emelni Mac-on a párbeszéd és a streaming hang érdekében" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ez különösen hasznos, ha:</p>
<ul>
  <li>Egy csendes külföldi filmet nézni, ahol a párbeszéd lágy</li>
  <li>Régebbi, alacsonyabb szinten masterelt tartalmak streamelése</li>
  <li>MacBook hangszórók használata zajos környezetben</li>
  <li>Egy streaming szolgáltatás jelentősen csendesebb, mint a másik</li>
</ul>

<p>És mivel SoundDial minden alkalmazást külön irányít, a Netflix 150%-ra emelése nem teszi hangosabbtá a Spotify vagy Slack hangosabbá. Minden alkalmazás a saját szintjén marad.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac Hangbeállítás távmunkához: A teljes útmutató",
    description:
      "Hívások, zene, értesítések és fókuszidő — mind egy Mac. Íme, hogyan állíthatod be a hangodat, hogy semmi ne harcoljon a figyelemért.",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>A távmunka egy Mac azt jelenti, hogy a számítógéped egyszerre működik az irodai telefonod, a rádiód, az értesítési központod és a mélymunkaállomásod. Ezek négy alapvetően eltérő hangmód, és macOS mindegyiket ugyanúgy kezeli: egy hangerőcsúszkával, minden ugyanazon szinten, nincs mód priorizálásra.</p>

<p>Ez az útmutató elmagyarázza, hogyan állíthatod be a Mac hangját távoli munkához úgy, hogy a hívások tiszták legyenek, a zene jelen legyen, de ne zavarja a figyelmet, az értesítések finomak, és a fókuszidő csendes legyen.</p>

<h2>A távmunka négy hangmódja</h2>

<h3>1. Találkozó mód</h3>
<p>Zoom vagy Teams híváson vagy. A hívásnak kristálytisztának kell lennie. A zene csendes vagy alig hallható legyen. A Slacknek nem kellene csipognie a füledben.</p>

<h3>2. Fókusz mód</h3>
<p>Mély munkát végzel. A háttérzene alacsony szinten segít koncentrálni. Az értesítéseknek alig kell észrevehetőek lenniük — elég jelennek legyenek ahhoz, hogy észrevegyél egy sürgős üzenetet, elég halknak kell lenniük, hogy ne törjék meg a folyamatot.</p>

<h3>3. Együttműködési mód</h3>
<p>Elérhető vagy üzenetekhez, Slack figyeléséhez, esetleg egy edzésvideó nézéséhez. Minden közepes szinten lehet. Értesítések normál hangerőn.</p>

<h3>4. Szünet üzemmód</h3>
<p>Zene teljes hangerőn. YouTube teljes hangerőn. Az értesítések várhatnak.</p>

<h2>Harver beállítás</h2>

<h3>A mikrofon kérdése</h3>
<p>Ha AirPods-ot használsz hívásokhoz, fontold meg inkább külön mikrofont. Amikor az AirPods-ot mikrofonként és hangszóróként egyaránt használják, macOS átvált a gyengébb minőségű SCO Bluetooth kodekre, ami csökkenti a hangminőséget és a hangerőt. Ha a Mac beépített mikrofonját (vagy USB mikrofont) használod, miközben az AirPods kimenetet tartod, teljesen elkerüled ezt.</p>

<p>A legjobb hívásminőségért: USB mikrofon vagy beépített mikrofonnal ellátott headset. A Blue Yeti, Elgato Wave vagy akár egy egyszerű USB headset sokkal jobban fog szólni a kollégáid számára, mint az AirPods mikrofonja.</p>

<h3>Kimeneti eszközök</h3>
<p>Sok távmunkás két kimeneti eszközt használ:</p>
<ul>
  <li><strong>Fejhallgatók</strong> Hívásokhoz — magánélet, visszhang nélkül, tiszta hang</li>
  <li><strong>Előadók</strong> a zene nem hívási időben — megtölti a szobát, hosszabb időre kényelmesebb</li>
</ul>

<p>Használd az Option kattintással a menüsávban a Hang ikonon, hogy gyorsan válts eszközök között. Vagy használd a SoundDial beépített eszközkapcsolóját, amely a kimeneti eszközöket közvetlenül a hangerőszabályzók mellé helyezi.</p>

<h2>Szoftver beállítás</h2>

<h3>Értesítéskezelés</h3>
<p>Menj a Rendszerbeállításokhoz → Értesítésekhez. Minden alkalmazáshoz döntsd el, szükséged van-e hangos értesítésekre:</p>
<ul>
  <li><strong>Tartsd a hangokat bekapcsolva:</strong> Slack (ha válaszolsz), Naptár (megbeszélések), Üzenetek</li>
  <li><strong>Hangok kikapcsolása:</strong> Mail (nézd meg az időbeosztásodat), Hírek, közösségi alkalmazások</li>
</ul>

<p>Ez csökkenti a meglepetés hangokat kiadó alkalmazások számát, de nem ad hangerőszabályozást — csak be/ki kapcsolást.</p>

<h3>Fókusz módok</h3>
<p>Legalább két Fókusz módot hozz létre a Rendszerbeállításokban → Fókuszban:</p>
<ul>
  <li><strong>"Találkozó"</strong> — minden értesítést némíts, kivéve a naptáralkalmazást</li>
  <li><strong>"Fókusz munka"</strong> — engedélyezd az értesítéseket a Slack DM-ektől és a vezetődtől, némítsd el minden mást</li>
</ul>

<p>A fókuszmódok kezelik az értesítés elnyomását. A hangerő szabályozásához valami többre van szükséged.</p>

<h2>A hiányzó darab: alkalmazásonkénti hangerőszabályzó</h2>

<p>Fókuszmódok vezérlése <em>amely</em> Az értesítések átjutnak, de nem <em>milyen hangos</em> Bármi az. Még mindig van egy hangerő csúszka mindenhez. Ha a Slacket 15%-ot, Spotify-t 35%-ot, a Zoom-ot pedig 100%-ot szeretnéd — macOS ezt nem tudod megvalósítani.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Ezt a hiányt úgy tölti ki, hogy minden alkalmazásnak saját hangerő csúszkát ad. Állítsd be a távoli munka hangját pontosan úgy, ahogy szeretnéd:</p>

<img src="/apps/sounddial.png" alt="SoundDial távoli munka hangrendszere — különböző hangerő a Zoom, Spotify és Slack esetén macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profilmentés minden módhoz</h3>

<p><strong>Találkozó profil:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>Spotify: tompa</li>
  <li>Lazaság: tompa</li>
  <li>Böngésző: némítva</li>
</ul>

<p><strong>Fókusz Munkaprofil:</strong></p>
<ul>
  <li>Spotify: 30%</li>
  <li>Lazaság: 10%</li>
  <li>Zoom: 80% (ha valaki hív)</li>
  <li>Böngésző: 40%</li>
</ul>

<p><strong>Együttműködési profil:</strong></p>
<ul>
  <li>Minden 50-70%-on</li>
  <li>Lazaság: 30%</li>
</ul>

<p>Egyetlen kattintással váltasz a profilok között. Amikor hívás kezdődik, az SoundDial automatikus lecsúszása automatikusan lecsökkenti az összes hívás alkalmazásodat kivéve. Amikor véget ér, a profilszinted helyreáll.</p>

<h2>A napi munkafolyamat</h2>

<ol>
  <li>Kezdj el dolgozni, → alkalmazd a "Focus Work" profilt</li>
  <li>Csatlakozz egy megbeszéléshez, → automatikusan kezeli az automatikus lebukás (vagy alkalmazd a "Meeting" profilt)</li>
  <li>A találkozó véget ér, → kötetek visszatérnek a Fókusz Munka szintre</li>
  <li>Ebédszünet → "Break" profil alkalmazása, hangba hangozz</li>
  <li>Délutáni mély munka → vissza a Fókusz munkához</li>
</ol>

<p>Teljes kézi munka: naponta két-három profilkattintás. Minden más automatikus.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Hogyan állítsuk meg a böngészőfülek automatikus lejátszását a Mac",
    description:
      "Egy háttérfül hirtelen elkezd hangot játszani. Hirdetések, videók, híroldalak — íme, hogyan lehet elnémítani a rogue füleket és szabályozni a böngésző hangját macOS-en.",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>Húsz tablet van nyitva. Egyikben dolgozol. Hirtelen — hang kezd el játszani valahonnan. Egy videóhirdetés. Egy automatikusan lejátszható hírklip. Egy tabletet, amit egy órával ezelőtt nyitottál, és úgy döntöttél, most van itt az ideje, hogy zajt csinálj. Gyorsan próbálod megtalálni, melyik tab, és egyenként átkattintasz rajtuk.</p>

<p>Az automatikus hanglejátszás a böngészőfüleken az egyik legidegesítőbb élmény bármely számítógépen, és Mac is rosszabb, mert macOS nincs mód egy adott alkalmazást (nemhogy egy adott fület) elnémítani anélkül, hogy mindent elnémítana.</p>

<h2>Kapcsold ki az automatikus lejátszást Safariban</h2>

<p>A Safari rendelkezik a legjobb beépített automatikus lejátszási vezérléssel bármely böngésző közül:</p>

<ol>
  <li>Nyisd meg a Safari → Beállításokat (⌘,) → Weboldalak fület</li>
  <li>Válaszd ki az "Auto-Play" opciót a bal oldali sávban</li>
  <li>Állítsd be az alapértelmezet: "Soha ne játssza meg az automatikusan" vagy "Állítsd meg a hanggal a médiát"</li>
</ol>

<p>A "Stop Media with Sound" a legjobb megoldás — blokkolja azokat a videókat, amelyek automatikusan játszanak hanggal, de lehetővé teszi a némított automatikus lejátszást (amit sok oldal díszítő háttérvideókhoz használ). "Soha automatikus lejátszás" mindent blokkol.</p>

<p>Ugyanezen a panelen állíthatod be az oldalonkénti beállításokat, ha engedélyezed az automatikus lejátszást bizonyos oldalakon, például a YouTube-on vagy Netflixen.</p>

<h2>Tiltsd ki az automatikus lejátszást a Chrome-ban</h2>

<p>A Chrome automatikus lejátszási vezérlői kevésbé részletesek:</p>

<ol>
  <li>Nézz ki <code>chrome://settings/content/sound</code></li>
  <li>Kapcsold be a "Oldalak játszani a hangot" opciót, hogy meghatározd az alapértelmezett viselkedést</li>
  <li>Bizonyos oldalakat adj hozzá a "Némítás" listához, hogy véglegesen elnémítsd őket</li>
</ol>

<p>A Chrome lehetővé teszi az egyes fülek elnémítását is: jobb kattintással egy fülre → "Oldal elnémítása" felirattal. Ez elnémítja az összes hangot az adott oldalról, amíg el nem kapcsolod a némítást.</p>

<h2>Gyorsan némítsd le egy tabot</h2>

<p>Mind a Safari, mind a Chrome hangszóró ikont jelenít meg a hangot előállító füleken. Safariban kattints a fül hangszóró ikonjára, hogy elnémítsd. A Chrome-ban jobb kattintással a fülre, és válaszd a "Weboldal némítása" opciót.</p>

<p>Ez egyszerre csak egy fülre működik, de ha több zajos fül van, egyenként kell átkattintani rajtuk.</p>

<h2>A tágabb probléma: böngészőhang vs. minden más</h2>

<p>Még ha az automatikus lejátszás ki van kapcsolva és a tabok is elnémítva, akkor is érdemes lehet szabályozni, hogy a böngésződ hangos a többi alkalmazáshoz képest. Lehet, hogy egy YouTube oktatóvideót nézel Zoom hívás közben — azt szeretnéd, hogy az oktatóanyag 30%-on, Zoom pedig 100%-on legyen. Vagy háttérzenét játszol egy böngészőfülön, és az versenyez a Spotify-oddal.</p>

<p>macOS az egész böngészőt egy alkalmazásként kezeli, egy kötettel. Nem lehet egy fület haldabbá tenni a másiknál a rendszer szintjén. De te <em>lehet</em> Tedd az egész böngészőt csendesebbnek, mint más alkalmazásoknak.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> A böngésződnek saját volumercsúszkát ad, függetlenül minden más alkalmazástól. Csökkentsd a Safari mennyiségét 30%-ra, miközben a Zoom 100%-on marad. Teljesen lenémítsd a Chrome-ot, miközben a Spotify lejátszás marad. Egy kattintás.</p>

<img src="/apps/sounddial.png" alt="SoundDial a böngészőhangerő vezérlése a többi alkalmazástól függetlenül macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ez a leggyorsabb módja annak, hogy kezeld a meglepetésszerű automatikusan lejátszó fület: ahelyett, hogy azt keresnéd, melyik tabon zajt ad, kattints a menüsávra SoundDial gombra, és némítsd le a böngészőt. Minden más tovább játszik. Amikor megtaláltad és bezártad a hibás fület, kapcsold vissza a böngészőt, és a hangerő visszatér a régi helyére.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Túl hangos a Discord hangerő (vagy halk) Mac? Hogyan lehet megoldani",
    description:
      "A Discord átdúlja a játékodat, vagy túl halk ahhoz, hogy a csapattársaidat hallja. Íme, hogyan lehet a Discord hangerőjét függetlenül szabályozni minden mástól a macOS-on.",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>A Discordnak két hangerőprobléma van Mac-en. Vagy túl hangos — értesítési hangok hallatszanak a játékon és a zenédben — vagy túl halk — nem hallod a csapattársaidat a játék hangján. A probléma az, hogy macOS nem engedi önállóan állítani a Discord hangerejét. Ugyanarra a rendszercsúszkához van rögzítve, mint minden más.</p>

<h2>A Discord beépített hangerőszabályzói</h2>

<p>A Discordnak több belső hangerőbeállítása van. Mielőtt külső megoldásokat nézel, győződj meg róla, hogy ezek konfigurálva vannak:</p>

<h3>Kimeneti térfogat</h3>
<p>Menj a Discord → beállításaihoz (fogaskerék-ikon) → Hang és videó. A "Output Volume" csúszka szabályozza, mennyire hangos a Discord számodra. Ha a Discord túl csendes, győződj meg róla, hogy ez 100%-on van. Ha túl hangos, engedd le itt.</p>

<p><strong>Korlátozás:</strong> Ez szabályozza a Discord belső mixjét, de nem változtatja meg a Discord hangerőjét <em>Más alkalmazásokhoz képest</em>. Ha a játékod 80%-on van, a Discord pedig 80%-on, akkor a Discord belső csúszkájának beállítása megváltoztatja az egyensúlyt — de még mindig egy rendszerhangerőre vagy rögzítve mindennél.</p>

<h3>Felhasználónkénti volument</h3>
<p>Jobb kattintással bármely felhasználót egy hangcsatornán → "User Volume" (Felhasználói hangerő). Az egyes felhasználókat 0%-ról 200%-ra lehet állítani. Ez akkor hasznos, ha az egyik ember hangosabb vagy halkabb, mint a többi, de nem oldja meg az általános Discord és más alkalmazások közötti egyensúlyt.</p>

<h3>Értesítési hangerő</h3>
<p>Discord → beállítások → értesítések. Külön-külön kikapcsolhatod bizonyos értesítési hangokat (üzenet, siket, némítás, csatlakozás/kilépés). Ez csökkenti a zavaró hangok számát, de nem engedi, hogy csökkentsd a hangerőt — csak be- vagy kikapcsolod őket.</p>

<h2>Az igazi probléma: a rendszerszintű hangerő egyensúly</h2>

<p>A Discord belső vezérlői módosítják a Discord saját keverékét. De az igazi probléma a Discord és minden más Mac között: a játékod, a zenéd, a böngésződ közötti egyensúly. macOS mindegyikhez egy csúszkát ad.</p>

<p>Ahhoz, hogy a Discord hangerőjét a játékodhoz viszonyítsd, szükséged van alkalmazásonkénti hangerőszabályozásra — amit macOS nem biztosít natív módon.</p>

<h2>Javítsd meg SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> megadja a Discordnak a saját hangerő csúszkát a menüsávban, függetlenül minden más alkalmazástól. Állítsd be a Discordot pontosan a kívánt szintre — 100% tiszta hangalapú csevegéshez, 40% finom háttérhez, vagy teljesen némítva — anélkül, hogy a játékhoz, zenéhöz vagy bármi máshoz nyúlnál.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Discord hangerő vezérlése a játéktól és a zenétől függetlenül macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Gyakori beállítások</h3>

<p><strong>Játék a Discorddal:</strong></p>
<ul>
  <li>Discord: 100% (mindig tisztán hallom a csapattársaidat)</li>
  <li>Játék: 40% (magával ragadó, de nem túlzó)</li>
  <li>Spotify: 15% (finom háttérzene)</li>
</ul>

<p><strong>Hangbeszélgetés:</strong></p>
<ul>
  <li>Discord: 80%</li>
  <li>Böngésző/YouTube: 60%</li>
  <li>Minden más: normális</li>
</ul>

<p><strong>Fókusz munka (Discord háttérben):</strong></p>
<ul>
  <li>Discord: némított vagy 10%</li>
  <li>Spotify: 50%</li>
  <li>Lazaság: 15%</li>
</ul>

<p>Mentsd meg mindegyiket <strong>Hangerő profil</strong> SoundDial-ben és egy kattintással válthatok. Nem kell minden alkalommal hat csúszkát újraállítani, amikor tevékenységet váltasz.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Hogyan lehet gyorsan váltani az audio kimenetet Mac-on (anélkül, hogy átnéznénk a beállításokat)",
    description:
      "A hangszórók, fejhallgatók és monitorok közötti váltás túl sok kattintást igényel Mac. Íme gyorsabb módszerek, hogy azonnal megváltoztatd az audio kimeneti eszközöd.",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>Kihúzod a fejhallgatót, és azt szeretnéd, hogy a hang a hangszóróidhoz menjen. Vagy csatlakoztatod az AirPods-t, és macOS rossz eszközt választ. Vagy belépsz egy tárgyalóba, és át kell váltanod a konferencia előadójára. Minden alkalommal: Rendszerbeállítások, → Hang → Kimenet, → görgess → kattints. Túl sok kattintás van valamihez, aminek egy kattintást kellene kitartania.</p>

<p>Íme minden mód, hogy gyorsabban válts hang kimenetet Mac – a beépített rövidítésektől a menüsáv eszközökig, amelyek teljesen megszüntetik a kattintást.</p>

<h2>1. módszer: Kattints a hangerő ikonra opcióval</h2>

<p>Ez a leggyorsabb beépített módszer, és a legtöbben nem is tudnak róla.</p>

<p>Tartsd meg <strong>Opció (⌥)</strong> És kattints a menü sávjában a hangerő/hang ikonra. A normál hangerő csúszka helyett az összes elérhető kimeneti eszköz listája jelenik meg. Kattints arra, amit szeretnél. Kész.</p>

<p>Ha nem látod a hangikont a menüsávban, engedélyezd: Rendszerbeállítások → Vezérlőközpont → Hang → válaszd a "Mindig Megjelenítse a menüsávban" opciót.</p>

<p><strong>Korlátozás:</strong> Ez csak a kimeneti eszközöket mutatja — nem lehet alkalmazásonként hangerőt állítani, és nem nézheted meg, mi játszik jelenleg ebből a menüből.</p>

<h2>2. módszer: Vezérlőközpont</h2>

<p>Kattints a Vezérlőközpont ikonjára (a két-kapcsolós ikonra) a menüsávban, → kattints a Hang szekcióra, → kattints a jelenlegi eszköz nevére, hogy lásd az összes elérhető kimenetet.</p>

<p><strong>Korlátozás:</strong> Három kattintás egy helyett. Kicsit lassabb, mint az Opció hangerő ikonra kattintás.</p>

<h2>3. módszer: Rendszerbeállítások gyorsbillentyű</h2>

<p>A Hang beállítást a felső szintű Rendszerbeállítások oldalsávra rögzítheted, de ehhez még mindig be kell navigálni a Kimenet fülre és kiválasztani egy eszközt. Nem gyorsan.</p>

<h2>4. módszer: Billentyűs billentyű (beállítással)</h2>

<p>macOS nincs beépített billentyűbillentyű a hangkészülékek váltásához. Azonban létrehozhatsz egyet az Automator vagy Shortcuts segítségével:</p>
<ol>
  <li>Open Shortcuts alkalmazás</li>
  <li>Hozz létre egy új gyorsbillentyűt, amely egy shell szkriptet futtat: <code>SwitchAudioSource -s "Eszköz neve"</code> (megköveteli a <code>SwitchAudio-OSX</code> parancssor-eszköz a Homebrew-ből)</li>
  <li>Rendelj hozzá egy billentyűs billentyűt</li>
</ol>
<p>Ez működik, de Homebrew, parancssoros eszköz, és kézi beállítás szükséges minden eszközönként. A legtöbb felhasználó számára nem praktikus.</p>

<h2>5. módszer: SoundDial beépített eszközkapcsoló</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> A menüsáv felugró ablakában egy kimeneti eszközválasztó is található — az alkalmazásonkénti hangerő csúszkákkal együtt. Egy kattintás a SoundDial megnyitásához, egy kattintással az eszközt váltani. Nem kell átnézni a rendszerbeállításokat.</p>

<img src="/apps/sounddial.png" alt="SoundDial hangkimeneti eszköz kapcsolásával és alkalmazásonként hangerőszabályozással egy menü panelen" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Az eszközök kapcsolásának előnye SoundDial belül: át tudod kapcsolni a kimenetet <em>és</em> Állítsd be az alkalmazásonként a hangerőt ugyanazon a panelen. Válts AirPods-ra, és azonnal csökkentsd a Spotify-t, miközben növeled a hívásodat — mindezt anélkül, hogy a popover elhagynád.</p>

<p>Kombinálva SoundDial-s <strong>Térfogatmemória</strong> funkciója szerint minden kimeneti eszköz megjegyezi a saját alkalmazásonkénti hangerőszintjét. Váltasz hangszórókra, és a "hangszórók" hangerőegyensúlya érvényesül. Ha váltasz fejhallgatóra, akkor a "fejhallgató" egyensúlyod érvényesül. Nincs kézi újraállítás.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "A hang recsegésének és pattogásának javítása Mac: Teljes útmutató",
    description:
      "A Mac hangja recseg, pattog vagy dadogik — zene, hívások vagy videólejátszás közben. Íme minden ismert oka és javítás macOS hanghibákra.",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>Zenét hallgatsz, és hallasz egy pattanást. Aztán egy ropogás. Aztán egy akadozás, amikor a hang egy töredékmásodpercre elhallgat, majd visszajön. Nem a dal a lényeg — hanem a Mac. A hang recsegése macOS bosszantóan gyakori, és legalább hat különböző oka van.</p>

<p>Ez az útmutató minden ismert okot lefed a hang recsegésére, pattogására és dadogására Mac, a szoftveres javításoktól kezdve az egyetlen hardveres problémáig, amiről tudnod kell.</p>

<h2>1. Indítsd el a Core Audio (a gyors megoldás)</h2>

<p>A hirtelen hangropogásra a leghatékonyabb megoldás az macOS audio démonjának újraindítása. Nyisd ki a terminált és futás:</p>
<p><code>Sudo killall coreaudiod</code></p>

<p>A hang egy másodpercre elszakad, majd újraindul. Sok esetben a sistergés azonnal megszűnik. Ez azért működik, mert a coreaudiod — az a folyamat, amely az macOS összes hangját kezeli — alvás/ébresztési ciklusok, Bluetooth eszközök vagy alkalmazásösszeomlások után sérült állapotba kerülhet.</p>

<p>Ha ez megoldja, akkor a ropogást egy ideiglenes démonprobléma okozta. Ha rendszeresen visszatér, olvass tovább a végleges megoldásokért.</p>

<h2>2. CPU túlterhelés</h2>

<p>A hang sistergése gyakran összefüggésben áll a magas CPU-használattal. Amikor a Mac CPU-ja maximális volt, nem tudja elég gyorsan feldolgozni az audio puffereket, ami rések okoznak, amelyek ropogást és ropogást idéznek.</p>

<p><strong>Megnézés:</strong> Nyisd meg az Activity Monitor (Alkalmazások → Segédeszközök) menüpontot, és nézd meg a CPU fület. Ha következetesen magas CPU-használatot látsz (80%+), valószínűleg ez az oka.</p>

<p><strong>Javítás:</strong> Zárd be a felesleges alkalmazásokat, különösen az erőforrás-igényeseket, mint például böngészők sok füllel, videószerkesztők vagy VM-ek. Ha egy adott folyamat túlzott CPU-t használ, gondold át, hogy normálisan működik-e, vagy újraindításra szorul.</p>

<h2>3. Bluetooth hangproblémák</h2>

<p>A Bluetooth a leggyakoribb ropogás forrása a vezeték nélküli fejhallgató és hangszóró felhasználók körében. Több dolog is okozhatja:</p>

<ul>
  <li><strong>Zavarás:</strong> WiFi, USB 3.0 eszközök és más Bluetooth eszközök zavarhatják a hangkapcsolatot. Próbálj közelebb kerülni a Mac vagy távolítsd el az interferenciát.</li>
  <li><strong>Kódek kapcsolás:</strong> Amikor egy alkalmazás aktiválja a mikrofonodat, macOS AAC-ról SCO kodekre vált. Ez az átmenet rövid ropogásot vagy pattogást okozhat.</li>
  <li><strong>Bluetooth torlódás:</strong> Ha egyszerre sok Bluetooth eszköz van csatlakoztatva, a rádió nehézséget okozhat. Kapcsold le azokat az eszközöket, amiket nem használsz.</li>
</ul>

<p><strong>Javítás:</strong> A Bluetooth-t úgy állítsd vissza, hogy nyomva tartja a Shift+Option gombot, kattints a menüsávban a Bluetooth ikonra, és válaszd a "Reset the Bluetooth module" opciót (ha elérhető). Alternatívaként távolítsd el az eszközt a Bluetooth beállításokból, és kapcsold újra.</p>

<h2>4. Mintavételi arány eltérése</h2>

<p>Ha a hangkimeneti eszközöd más mintavételi frekvenciával fut, mint a lejátszott hang, macOS valós időben újra mintavételeznie kell. Ez az újramintavétel artefaktumokat okozhat — különösen alacsonyabb pufferméreteknél.</p>

<p><strong>Megnézés:</strong> Nyisd ki az Audio MIDI beállítást (Alkalmazások → Segédeszközök), válaszd ki a kimeneti eszközöd, és ellenőrizd a mintavételi frekvenciát. Gyakori sebességek a 44,1 kHz (CD minőség) és 48 kHz (videó/streaming szabvány).</p>

<p><strong>Javítás:</strong> Állítsd be a mintavételi sebességet a leggyakoribb felhasználási esetedhez. Zene: 44,1 kHz. Videó/streaming: 48 kHz. Ha USB audio interfészt használsz, nézd meg annak dokumentációját az optimális mintavételi sebességért és a pufferméretért.</p>

<h2>5. USB audio eszköz pufferproblémák</h2>

<p>Külső USB audioeszközök (DAC-ok, audio interfészek, USB fejhallgatók) recseghetnek, ha a puffer mérete túl kicsi a rendszer jelenlegi terheléséhez.</p>

<p><strong>Javítás:</strong> Az Audio MIDI beállításban válaszd ki az USB eszközöd, és próbáld meg növelni a puffer méretét (ha elérhető az opció). Olyan hangalkalmazásokban, mint a Logic, Ableton vagy GarageBand, növeld az I/O puffer méretét az audio preferenciákban. A nagyobb puffer valamivel több késleltetést jelent, de kevesebb hanghibát.</p>

<h2>6. macOS frissítési regresszió</h2>

<p>Néhány macOS frissítés hanghibákat okoz. Ez szinte minden nagyobb macOS kiadásnál megtörtént — a Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia és Tahoe mind hangropogásról számoltak be az első megjelenés után.</p>

<p><strong>Javítás:</strong> Nézd meg, hogy az Apple kiadott pontfrissítést (pl. 15.0.1, 15.1), amely kezeli a hangproblémákat. Megnézheted az Apple fejlesztői fórumokat és a Redditet is, hogy más felhasználók is tapasztalja-e ugyanezt a problémát. Ha ismert macOS hiba, általában egy vagy két pont kiadáson belül megérkezik a javítás.</p>

<h2>7. Kernel kiterjesztések vagy audio pluginek</h2>

<p>Harmadik féltől származó hangillepreszterek, virtuális hangeszközök vagy audio pluginok ütközhetnek macOS natív hangrendszerével. Ez különösen gyakori a régebbi hangprogramoknál, amelyek kernel kiterjesztéseket (kexteket) használnak, amelyek a macOS utóbbi verziókban elavultak.</p>

<p><strong>Javítás:</strong> Ellenőrizd, van-e harmadik féltől származó hangprogramod telepítve: Soundflower, BlackHole, Loopback vagy régebbi hanginterfész illesztőprogramok. Próbáld meg ideiglenesen kikapcsolni vagy törölni őket, hogy megnézd, megszűnik-e a ropogás. Ha igen, nézd meg, hogy kompatibilisek-e a frissített verziók a macOS verzióddal.</p>

<h2>Hangminőség kezelése SoundDial</h2>

<p>Bár SoundDial nem közvetlenül javítja meg a hardver- vagy rendszerszintű recsegést, segíthet a hangkezelésben olyan módon, hogy csökkentse a problémát:</p>

<ul>
  <li><strong>Csökkentsék a versengő hangforrásokat:</strong> Használd SoundDial arra, hogy elnémítsd azokat az alkalmazásokat, amiket nem használsz aktívan. Kevesebb egyidejű hangfolyam kevesebb CPU-terhelést jelent az audio feldolgozásra.</li>
  <li><strong>Hangerő növelése a rendszer max helyett:</strong> Ha 100%-on futtatod a rendszerhangerőt, és még mindig hangosabban nyomod az alkalmazásokat, akkor a hangút a végsőségesen működik. Használat <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Alkalmazásonkénti boost, hogy bizonyos alkalmazásokat 200%-ra erősítse, miközben a rendszer hangerő kényelmesebb 70-80%-on marad. Ez csökkentheti a torzítást a rendszer kimeneti szintjén.</li>
  <li><strong>Gyors kimeneti eszköz kapcsolás:</strong> Ha a recsegés egy adott kimeneti eszközhöz kapcsolódik, SoundDial lehetővé teszi, hogy az eszközt a menüsávról váltsd anélkül, hogy átnéznéd a rendszerbeállításokat.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Túl alacsony a Microsoft Teams hangerő Mac? Minden megoldás, ami működik",
    description:
      "Alig hallod az embereket a Teams-en még maximális hangerőn is? Itt van minden ok — a Teams beállításaitól a Bluetooth kodekig — és hogyan lehet a híváshangot 100%-on magasabbra emelni.",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>Egy Teams megbeszélésen vagy. A kollégád bemutatkozik, de a hangja úgy hangzik, mintha egy konzervdobozon keresztül jönne három szobával arrébb. A Mac hangerőd 100%-on van. A csapatok volumenje 100%-os. Mindent megtaláltál, amit csak találtál. Még mindig túl csendes.</p>

<p>A Microsoft Teams-en az alacsony hangerő az egyik leggyakoribb Mac hangproblémája vállalati környezetben. Az okok eltérnek a Zoomtól, és néhány javítás kifejezetten Teams-specifikus. Nézzük végig mindet.</p>

<h2>1. Ellenőrizd a Teams hangbeállításait</h2>

<p>Kattints a profilikonodra a Teams → Beállítások → Eszközök (vagy az új Teams Beállítások → Hangeszközök menüben).</p>
<ul>
  <li>Győződj meg róla, hogy a helyes <strong>Előadó</strong> az eszköz van kiválasztva — nem egy lecsatlakoztatott monitor vagy inaktív Bluetooth eszköz</li>
  <li>Használd a "Teszthívást" funkciót, hogy ellenőrizd a hang megfelelő hangerőn működik</li>
  <li>Ellenőrizd, hogy a "Zajelnyomás" ne legyen "Magas" – az agresszív zajelnyomás csökkentheti az észlelt hangerőt</li>
</ul>

<h2>2. Új csapatok vs. klasszikus csapatok</h2>

<p>A Microsoft a "Classic Teams"-et "New Teams"-re cserélte (amely egy másik keretrendszerre épült). Az új verzió másképp kezeli a hangot. Ha nemrég költöztél:</p>
<ul>
  <li>Lehet, hogy a hangkészülék beállításai nem kerültek át — nézd meg újra a hangszóróválasztást</li>
  <li>Az új Teams WebRTC hangfeldolgozást használ, amely eltérhet a klasszikus verziótól</li>
  <li>Próbáld ki kapcsolni a "Zene módot", ha engedélyezve van (Beállítások → Audio eszközök) — ez megváltoztatja, ahogyan a Teams feldolgozza a bejövő hangot</li>
</ul>

<h2>3. Bluetooth kodekváltás</h2>

<p>Ha AirPods-ot vagy Bluetooth fejhallgatót használsz, a Teams híváshoz való csatlakozás arra kényszeríti macOS, hogy a magas minőségű AAC kodekről a gyengébb minőségű SCO kodekre válts (mert a Teams aktiválja a mikrofonodat). Az SCO jelentősen csökkenti a hangminőséget és a hangerőt.</p>

<p><strong>Javítás:</strong> Használd a Mac beépített mikrofonját vagy USB mikrofont, miközben Bluetooth fejhallgatót tartva kimeneti eszközként. Menj a Teams → Beállítások → Mikrofon → Beállításokhoz, és válaszd ki a "MacBook Pro Microphone" (vagy az USB mikrofonodat). Ez megakadályozza a kodek kapcsolóját, így a fejhallgatód magas minőségű AAC módban marad.</p>

<h2>4. Ellenőrizd macOS kimeneti eszközt és hangerőt</h2>

<p>Menj a Rendszerbeállításokhoz → hang → kimenet. Ellenőrizd, hogy a megfelelő eszköz van kiválasztva, és a kimeneti hangerő maximum. Még ellenőrizd:</p>
<ul>
  <li><strong>Fejhallgató biztonság:</strong> Rendszerbeállítások → hang → fejhallgató biztonsága. Ha a "Csökkent hang hang" bekapcsolva, akkor a fejhallgató hangerőjét korlátozza.</li>
  <li><strong>Egyensúly:</strong> Ügyelj rá, hogy a bal-jobb egyensúlyi csúszka középen legyen — ha ferde, az egyik oldal csendesebb lesz.</li>
</ul>

<h2>5. A Core Audio visszaállítása</h2>

<p>macOS hangdémonja néha alacsony kimeneti szintre ragad alvó, eszközváltás vagy Teams frissítések után. Nyisd ki a terminált és futás:</p>
<p><code>Sudo killall coreaudiod</code></p>
<p>A hang egy rövid megszakítás után újraindul. Csatlakozz újra a Teams megbeszéléshez, és ellenőrizd, javult-e a hangerő.</p>

<h2>6. Növeld a csapatok hangerőt 100%-on</h2>

<p>Ha minden beállítás maximumban van, és a Teams még mindig túl csendes — például egy résztvevőnek rossz mikrofonja van, vagy a megbeszélés hangja alapvetően alacsony —, akkor a macOS normál esetben engedélyezett hangokat kell erősíteni.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Lehetővé teszi, hogy bármelyik alkalmazás hangerejét növeld <strong>200%</strong>, beleértve a Microsoft Teams-t is. Drag Teams csúszkáját 150%-ra vagy 180%-ra állítsd, és a hang valós időben felerősítődik. Csak a Teams hangosabb — a zenéd, böngésződ és más alkalmazások a jelenlegi szinten maradnak.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Microsoft Teams hívásainak volumenének 100%-ra növelése macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial segít a fordított problémában is: ha a Teams értesítési hangja túl hangosak a fókusz alatt, csökkentsd a Teams számát 15%-ra, vagy teljesen elnémítsd, miközben a zene továbbra is szól. Egy kattintás a némításhoz, egy kattintás a némítás megszüntetéséhez.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Hogyan szabályozzuk az alkalmazásonként hangerőt Mac",
    description:
      "macOS minden hangerő csúszkát ad. Íme, hogyan lehet minden alkalmazáshoz külön hangerőszabályzót szerezni — és miért számít ez inkább, mint gondolnád.",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>Videóhíváson vagy. A laza hang folyamatosan cseng. Zene szól a háttérben. A hangerő billentyűjéért nyúlsz, és — minden halkabb lesz. A hívás, a zene, az értesítések. macOS pontosan egy hangerő csúszkával rendelkezik, és mindent egyszerre irányít.</p>

<p>A Windowsnak 2006-os Vista óta van alkalmazásonkénti hangerőkeverője. Húsz évvel később macOS még mindig nem teszi. Ha le akarod kapcsolni a Spotify használatát anélkül, hogy befolyásolnád a Zoom-hívásodat, az Apple-nek nincs beépített válasza számodra.</p>

<p>Ez az útmutató elmagyarázza, mi az alkalmazásonkénti hangerőszabályzó, miért nincs macOS meg, és hogyan lehet ezt megszerezni.</p>

<h2>Mit is jelent valójában az alkalmazásonkénti volument</h2>

<p>Az alkalmazásonkénti volumen azt jelenti, hogy minden alkalmazás a Mac-n saját független volumencsúszkát kap. A Spotify-t 30%-ra állíthatod, a Zoomot 100%-on tarthatod, teljesen lenémíthatod a Slacket, és a Safarit 50%-on hagyhatod — mindezt egyszerre. Az egyik alkalmazás hangerőjének megváltoztatása semmilyen más alkalmazásra semmilyen hatással nem van.</p>

<p>Ez eltér a rendszer térfogatától, amely egyetlen master csúszka, amely arányosan skálázza az egészet. Ha a rendszered hangerő 50%-on van, és a Spotify teljes hangerővel szól, akkor nincs mód csak a Spotify lejátszására gomb gomb nélkül keverő.</p>

<h2>Miért nem tartalmazza macOS ezt</h2>

<p>Az Apple audio architektúrája (Core Audio) teljes mértékben támogatja az alkalmazásonkénti hangerőszabályozást a keretrendszer szintjén. Azért, mert macOS nem tárja fel a felületen, egy tervezési filozófiaválasztás: az Apple kevesebb irányítást és egyszerűbb felületet részesít előnyben. Egy csúszka egyszerűbb, mint tizenkettő.</p>

<p>A probléma az, hogy az "egyszerűbb" már nem lesz egyszerűbb, ha több hangforrás verseng a figyelmedért. Egy hangerő billentyű, ami mindent irányít, elegáns, amikor egy dolgot csinálsz. Aktívan ellenséges, amikor egyszerre telefonálsz zene és értesítések — ahogyan a legtöbben ténylegesen használják a Mac.</p>

<h2>A beépített megoldások (és hogy miért nem működnek)</h2>

<h3>1. Az alkalmazáson belüli hangerőszabályzók</h3>
<p>Néhány alkalmazásnak saját volumenmódosítója van — Spotify, VLC, QuickTime. De a legtöbben nem. A Slack nem. A króm fülek nem. A rendszer hangjai nem. És még ha egy alkalmazásnak van csúszkálója, akkor is meg kell nyitnod azt az alkalmazást, meg kell találni a csúszkát, állítani, majd visszaváltani arra, amit eddig csináltál. Öt kattintás van valamiért, aminek az egy kellene lennie.</p>

<h3>2. Audio MIDI beállítás</h3>
<p>macOS tartalmazza az Audio MIDI beállítást a Utilities mappában. Lehetővé teszi hangeszközök konfigurálását és aggregált eszközök létrehozását, de nincs alkalmazásonként hangerőszabályzó. Ez egy eszközkonfigurációs eszköz, nem keverő.</p>

<h3>3. Több kimeneti eszköz</h3>
<p>Elméletileg különböző alkalmazásokat irányíthatnál különböző kimeneti eszközökre (fejhallgató vagy hangszórók), és külön irányíthatnád ezeket az eszközöket. De ehhez extra hardver, kézi útválasztás alkalmazásonként szükséges, és valójában nem ad önálló hangerőt – csak eszközönként független be- és kikapcsolást.</p>

<h2>Hogyan működik egy alkalmazásonkénti hangerőkeverő</h2>

<p>Egy megfelelő, alkalmazásonkénti hangerőkeverő a menüsávban található, és minden olyan alkalmazást megjelenít, amely jelenleg hangot készít. Minden alkalmazásnak van saját csúszkája. Felfelé vagy lefelé húzod, és csak az alkalmazás hangerője változik. A rendszer hangerője érintetlen marad.</p>

<p>A motorháztető alatt ez úgy működik, hogy macOS használjuk <strong>Core Audio Tap API</strong> (macOS 14-ben mutatták be) vagy régebbi virtuális hangkészülék technikákat, amelyek különállóan elfogják az alkalmazások hangfolyamát, és méretezték az amplitúdóját, mielőtt elérné a hangszórókat.</p>

<p>Azok a kulcsfontosságú jellemzők, amelyek elválasztják a jó keverőt a rossztól:</p>

<ul>
  <li><strong>Valós idejű alkalmazásfelismerés.</strong> Amikor egy új alkalmazás elkezd hangot játszani, annak automatikusan meg kell jelenteni a keverőben. Nincs kézi beállítás.</li>
  <li><strong>Alkalmazásonkénti némítás.</strong> Egy kattintással elnémíthatod egy adott alkalmazást anélkül, hogy megérintenéd a csúszka pozícióját.</li>
  <li><strong>Hangerőnövelés.</strong> Néhány alkalmazás (rád nézve, csendes podcastlejátszók) túl alacsonyra van a maximum. Egy jó keverő lehetővé teszi, hogy 100%-nál fölé boostozz.</li>
  <li><strong>Profilok.</strong> Különböző hangerő konfigurációk különböző helyzetekhez — "Fókusz" minden némítva, kivéve a zenét, "Meeting" Zoom 100%-on és minden más 20%-on, "Gaming" játék hanggal felerősítve.</li>
  <li><strong>Automatikusan lehajol.</strong> Automatikusan csökkentsd a zenét a hívás indításakor, és visszahozd a hívás végén. Ez önmagában megéri az egész alkalmazást.</li>
  <li><strong>A menü bárból származik.</strong> A menüsávban kellene lennie, nem egy dokkolóablakban. Felpillantasz, igazítasod, és visszatérsz a munkához. Nincs alkalmazásváltás.</li>
</ul>

<h2>Kinek kell ez</h2>

<p>Bárki, aki egyszerre több hangos dolgot csinál. Ez a legtöbb ember, de különösen:</p>

<ul>
  <li><strong>Távmunkások</strong> — a hívások + zene + értesítések a leggyakoribb ütközés</li>
  <li><strong>Streamerek és podcasterek</strong> — pontos kontroll afelett, amit a közönség hall és amit te hallasz,</li>
  <li><strong>Zenészek és producerek</strong> — szükség van arra, hogy a DAW kimenetet izoláljuk a referencia sávokról és kommunikációs eszközökről</li>
  <li><strong>Játékosok</strong> — a játék hangja, a Discord és a zene közötti egyensúly folyamatos egyensúlyozás</li>
  <li><strong>Van valakinek értesítési fáradtsága van</strong> — némítsd Lazaságot, tartsd meg minden mást</li>
</ul>

<h2>SoundDial</h2>

<p>Én építettem <strong>SoundDial</strong> mert az Mac hangerőkeverő, amit akartam, nem létezett. A menüsávban helyezkedik el, megmutatja az összes hangot kiadó alkalmazást, és mindegyiknek saját csúszkát ad. Alkalmazásonként némítás, hangerőnövelés, profilok és automatikus lebukás, ami lecsökkenti a zenédet, amikor hívás kezdődik. Egyszeri vásárlás, macOS 14+, előfizetés nélkül.</p>

<p>A hangerőkeverőnek macOS be kellett volna építenie.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Hogyan némítsd a Slack Mac anélkül, hogy minden más elnémítanád",
    description:
      "A Slack értesítések folyamatosan megszakítják a fókuszodat, de nem szeretnéd elnémítani a zenédet vagy a hívásaidat. Íme, hogyan lehet csak Slack némítást elnémítani macOS-n.",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>Mélyen a fókuszban vagy a munkában. A Spotify a tökéletes koncentrációs lejátszási listát játssza. Akkor — <em>kopogás kefe</em> — Laza csipogás. És még egyszer. És még egyszer. Három csatorna, két privát üzenet és egy thread értesítés harminc másodperc alatt. Szeretnéd elnémítani a Slack-et, de megtartsd a zenédet. macOS azt mondja: némítsd el mindent, vagy semmit ne némíts.</p>

<p>A Slack értesítési hangjai az egyik leggyakoribb hangpanaszt jelentenek a távmunkások számára a Mac-n. Azért vannak tervezve, hogy felkeltsék a figyelmed, ami pontosan a probléma, amikor koncentrálnod kell.</p>

<h2>1. lehetőség: Némítsd el az értesítéseket magában a Slackben</h2>

<p>A Slack-nek van egy "Értesítések szünete" funkciója:</p>
<ol>
  <li>Kattints a profilképedre a Slack oldalsávjában</li>
  <li>Kattints a "Értesítések szünetelésére"</li>
  <li>Válassz egy időtartamot (30 perc, 1 óra, 2 óra stb.)</li>
</ol>

<p>Ez elnyomja az értesítési jelvényeket és hangokat a kiválasztott időtartamra. Az egyes csatornákat is elnémíthatod → jobb kattintással a "Némíta csatornát".</p>

<p><strong>Korlátozás:</strong> Ez minden vagy semmi csatornánként. Nem tudod Slackot csinálni <em>csendesebb</em> — csak teljesen csendes vagy teljesen bekapcsolva. És ha elfelejteed kikapcsolni a szünetet, akkor az üzenetek kimaradnak a fókuszos alkalmad után. Ha nyitva van az alkalmazás, a Slack alkalmazáson belüli hangjait sem nyomja el.</p>

<h2>2. lehetőség: Kapcsold ki a Slack hangokat macOS értesítésekben</h2>

<p>Menj a Rendszerbeállításokhoz, → értesítések → Lazaság. Kapcsold ki a "Lejátszás hangját értesítésekhez."</p>

<p><strong>Korlátozás:</strong> Ez véglegesen eltávolítja az összes Slack értesítési hangot (amíg vissza nem kapcsolod). És csak macOS szintű értesítéseket érint — ha a Slack a saját hangmotorján keresztül játszik hangokat, az értesítési beállítás nem feltétlenül fogja meg mindet.</p>

<h2>3. lehetőség: Fókusz mód használata</h2>

<p>Hozz létre "Fókusz" vagy "Munka" fókusz módot a Rendszerbeállításokban → Fókuszban. Tedd fel a Slacket a "Némító" listára. Amikor aktiválod a Fókusz módot, a Slack értesítések elnyomódnak.</p>

<p><strong>Korlátozás:</strong> A fókuszmódok vizuálisan és hallhatóan elnyomják az értesítéseket, de nem adnak aprócsony hangerőszabályozást. Nem mondhatod "Slack értesítések 10%-os hangerőn" — vagy teljesen engedélyezett, vagy teljesen elnémítva.</p>

<h2>4. lehetőség: Alkalmazásonként hangerőszabályzó (az igazi megoldás)</h2>

<p>Amit valójában szeretnél, az egyszerű: csökkentsd a Slack hangerőjét 10-15%-ra, miközben minden más normál szinten marad. A Slack pingek hallhatók, ha figyeled őket, de nem zavarják meg a folyamatodat. A zene teljes hangerőn marad. A hívások teljes hangerőn maradnak.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> A Slacknek saját független hangerő csúszkát ad. Állítsd abba a szintre, ami neked megfelel — vagy egy kattintással teljesen elnémítsd. Amikor újra figyelni vagy a Slackre, kapcsold vissza a hangerőt, és a hangerő visszatér a régi helyére.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Slack némítással és a Spotify normál hangerőn fut macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Az ideális Slack munkafolyamat</h3>
<ul>
  <li><strong>Fókuszidő:</strong> Laza 10%-on vagy némított. A Spotify 40%-kal rendelkezik. Nincs megszakítás.</li>
  <li><strong>Elérhető idő:</strong> A lazaság 40%-nál. Az értesítések észrevehetők anélkül, hogy megijesztőek lennének.</li>
  <li><strong>Találkozó ideje:</strong> Slack elnémított. Zoom 100%-on. Az automata leugrás kezeli a többit.</li>
</ul>

<p>Mindezt mentsük el <strong>Hangerő profil</strong> SoundDial-ben, és egy kattintással válthatsz közöttük. Még jobb, ha használd az automatikus lecsúszást — amikor hívás kezdődik, SoundDial automatikusan lecsökkenti az összes eszközt (beleértve a Slacket is), és visszaállítja a hívás vége.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Hogyan állítsunk hangerőprofilokat különböző helyzetekhez Mac",
    description:
      "Különböző hangerőbeállítások értekezletekhez, fókuszos munkához, játékhoz és pihenéshez — egy kattintással válthatók. Így működnek a volumenprofilok macOS.",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>Reggel 9-kor Zoom híváson vagy — a Zoomot 100%-on szeretnéd, a Spotify némítva, a Slack némítva. 10-kor véget ér a hívás — Spotify-t 40%-on, Slack-et 15%-ot, Zoomot pedig nem számít. Délben játszol — a játék 60%, a Discord 100%, minden más némítva. Este 6-kor már YouTube-ot nézel — a böngésző 80%-on van, minden más csendes.</p>

<p>Minden helyzetnek más ideális hangerő konfigurációja van. És minden alkalommal, amikor a helyzet változik, öt-hat alkalmazást kellett kézzel módosítani. Vagy elmentheted az egyes beállításokat profilként, és egy kattintással válthatsz.</p>

<h2>Mik azok a hangerőprofilok?</h2>

<p>A hangerőprofil minden alkalmazás hangerő- és némítóállapotának mentett pillanatképe. Az alkalmazásaidat úgy konfigurálod, ahogy szeretnéd — a Spotify 30%, a Zoom 100%, a Slack némítva — majd elmented ezt neves profilként, például "Work" vagy "Meeting". Később alkalmazod a profilt, és minden alkalmazás azonnal ugrik a mentett hangerőre.</p>

<p>Gondolj rá úgy, mint a kijelző előbeállításokra az audiohoz: ahogy a "asztali beállítás" és a "prezentációs mód" esetén is van kijelzőelrendezés, a hangerőprofilok lehetővé teszik a hangbeállítások között váltani anélkül, hogy kézzel állítanád az egyes alkalmazásokat.</p>

<h2>macOS nincs hangerő profilja</h2>

<p>macOS vannak fókusz módok (Ne zavard, Munka, Személyes stb.), amelyek szabályozzák, mely értesítések jutnak át. De a fókusz módok nem szabályozzák a hangerőt. Teljesen el tudják nyomni az értesítési hangokat, de a Spotify-t 30%-ra vagy a Zoomot 100%-ra nem állíthatják. Nincs beépített mód arra, hogy apponként mentsen és visszaállítsa a hangerő konfigurációkat.</p>

<h2>Profilok beállítása SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> beépített profilrendszert tartalmaz. Íme, hogyan lehet beállítani:</p>

<h3>Profil létrehozása</h3>
<ol>
  <li>Nyisd ki SoundDial a menüsávból</li>
  <li>Állítsd be minden alkalmazás hangerőjét a saját igényeid szerint adott helyzethez</li>
  <li>Kattints a profil szekcióban a "+" gombra</li>
  <li>Adj neki nevet (pl. "Meeting"), és válassz egy ikont</li>
  <li>Kész — a jelenlegi hangerő konfigurációja elmentve van</li>
</ol>

<h3>Kapcsolóprofilok</h3>
<p>A mentett profiljaid gombként jelennek meg SoundDial popoverében. Rákattint egyre, és minden alkalmazás azonnal átvált a profilban tárolt kötetekre. Egy kattintás helyettesíti az öt-hat kézi beállítást.</p>

<img src="/apps/sounddial.png" alt="SoundDial hangerőprofilok — egy kattintással válthatsz a Meeting, Focus és Chill módok között macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Példaprofilok</h3>

<p><strong>Találkozó</strong></p>
<ul>
  <li>Zoom / Teams: 100%</li>
  <li>Spotify: tompa</li>
  <li>Lazaság: tompa</li>
  <li>Böngésző: némítva</li>
</ul>

<p><strong>Fókusz munka</strong></p>
<ul>
  <li>Spotify: 35%</li>
  <li>Lazaság: 10%</li>
  <li>Posta: némított</li>
  <li>Böngésző: 50%</li>
</ul>

<p><strong>Játék</strong></p>
<ul>
  <li>Mérkőzés: 60%</li>
  <li>Discord: 100%</li>
  <li>Spotify: 20%</li>
  <li>Minden más: tompa</li>
</ul>

<p><strong>Nyugodj meg</strong></p>
<ul>
  <li>Spotify: 70%</li>
  <li>Böngésző: 60%</li>
  <li>Értesítések: 20%</li>
</ul>

<h3>Profilok frissítése</h3>
<p>Ha a kedvenc hangerőd idővel változik, csak állítsd be a csúszkákat és frissítsd a profilt. Legközelebb, amikor alkalmazod, az új beállításokat használja.</p>

<h2>Profilok + automatikus leugrás = teljesen automatikus</h2>

<p>Ha a profilokat kombinálod SoundDial automatikus lecsúsztató funkciójával, ritkán kell hangerőt érinteni. Reggel alkalmazd a "Focus Work" profilodat. Amikor hívás érkezik, az automatikus lecsúszás mindent leenged, kivéve a hívás alkalmazását. Amikor a hívás véget ér, minden visszatér a profilszintedhez. A nap végén egy kattintással válts "Chill" opcióra.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Túl alacsony a Zoom hívás hangerő Mac? Hogyan lehet felerősíteni",
    description:
      "A Zoomon még maximális hangerőn is alig hallod az embereket. Íme minden megoldás — a Zoom beállításaitól kezdve a híváshang 100%-os fölé emelésig egy alkalmazásonkénti hangerőkeverővel.",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>Zoom híváson vagy. A másik beszél, de a hangja alig hallható. A Mac hangerőd a maximum. A Zoom hangszóró hangereje a maximum. A képernyődnek dőlsz, és erőltetésel, hogy hallgasd. Ez nem lehetne ilyen nehéz.</p>

<p>Az alacsony Zoom hívások száma rendkívül gyakori, és több oka is van. Nézzük végig minden javítást, az egyszerű beállításellenőrzésektől kezdve a Zoom hangjának a normál korlát fölé emelésig.</p>

<h2>1. Nézd meg a Zoom hangkimeneti beállításait</h2>

<p>Nyisd meg a Zoom → beállításait → hangot. A "Speaker" alatt győződj meg róla:</p>
<ul>
  <li>A megfelelő kimeneti eszközt választják ki (nem inaktív monitor vagy lecsatlakoztatott eszköz)</li>
  <li>A hangszóró hangerő csúszkája maximumon van</li>
  <li>Kattints a "Test Speaker" gombra, hogy megbizonyosodj róla, tisztán hallod a teszthangot</li>
</ul>

<p>Ha a teszthang is halk, akkor a probléma a Zoom és a hangszórók között van — folytasd az alábbi javításokat. Ha a teszthang rendben van, de a tényleges hívások halkak, akkor a másik résztvevőnek valószínűleg mikrofonproblémája van náluk.</p>

<h2>2. Ellenőrizd a Mac kimeneti eszközét</h2>

<p>Menj a Rendszerbeállításokhoz → hang → kimenet. Győződj meg róla, hogy a megfelelő eszköz van kiválasztva. Ha nemrég csatlakoztattál vagy lecsatlakoztattad a fejhallgatót, kijelzőt vagy Bluetooth-készüléket, macOS lehet, hogy automatikusan átváltott egy váratlan kimenetre.</p>

<h2>3. Kapcsold ki a Zoom automatikus hangerőállítását</h2>

<p>A Zoomban van egy "Automatikusan állíts mikrofon hangerőt" beállítása (Beállítások → Hang), amely bizonyos konfigurációkban befolyásolhatja az észlelt kimeneti szinteket is. Próbáld ki kikapcsolni és újra tesztelni.</p>

<h2>4. Kapcsold ki a háttérzaj elnyomását (ideiglenesen)</h2>

<p>A Zoom zajelnyomása agresszíven szűri a háttérzajt — de közben néha csökkentheti a másik fél hangjának észlelt hangosságát, különösen csendes környezetben. Próbáld meg beállítani a "Háttérzaj elnyomása" opciót "Alacsony" vagy "Auto" módra a "High" helyett.</p>

<h2>5. Ellenőrizd a Bluetooth kódek</h2>

<p>Ha AirPods-ot vagy Bluetooth fejhallgatót használsz, egy Zoom híváshoz csatlakozás arra kényszeríti macOS, hogy váltsd a magas minőségű AAC kodekről a gyengébb minőségű SCO kodekre (mert a Zoom a mikrofonodat használja). Az SCO csökkenti a hangminőséget, és a hívás hangját halkabbá és tömörebbé teheti.</p>

<p><strong>Javítás:</strong> Külön mikrofont használj (beépített Mac mikrofon vagy USB mikrofon), miközben az AirPods-ot tartsd kimenetként. Ez megakadályozza a kodek váltását — az AirPods AAC módban marad, jobb hangminőséggel és hangerővel.</p>

<h2>6. A Core Audio visszaállítása</h2>

<p>macOS hangdémonja néha olyan állapotba kerül, ahol a kimeneti szintek csökkennek, különösen alvó/ébresztés vagy eszköz kapcsolók után. Nyisd ki a terminált és futás:</p>
<p><code>Sudo killall coreaudiod</code></p>
<p>A hang rövid szünet után újraindul. Csatlakozz újra a Zoom híváshoz, és nézd meg, javult-e a hangerő.</p>

<h2>7. Növeld a Zoom hangerőt 100%-ra</h2>

<p>Ha mindent kipróbáltál, és a Zoom még mindig túl halk, akkor a probléma lehet, hogy a Zoom hangkimenete egyszerűen nem elég hangos a rendszeredhez. Néhány résztvevőnek csendes mikrofonja van, és a Zoom csak bizonyos mértékig képes a jel erősítésére.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Lehetővé teszi, hogy bármelyik alkalmazás hangerejét növeld <strong>200%</strong> — beleértve a Zoomot is. Ha egy résztvevő túl csendes, húzd a Zoom csúszkáját 150%-ra vagy 180%-ra. A hangjel a Zoom beépített maximumján túlerősödött, így még a leghalkabb hangok is hallhatók.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Zoom hívás hangerejének 180%-ra emelése Mac-on, hogy a videóhívások alatt tisztább hang biztosítson" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>A fő előny: a Zoom növelése semmi másra nem hat. A zenéid, értesítéseid és egyéb alkalmazásaid a jelenlegi szinten maradnak. Csak a Zoom hangosabb lesz.</p>

<p>Ez is működik <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong>, és bármilyen más hívó alkalmazás. Ha hallod, SoundDial fel tudod erősíteni.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Hogyan lehet lecsökkenteni a Spotify-t anélkül, hogy minden más a Mac",
    description:
      "A Spotify háttérzenét szeretnél, de ha lehalkítod a hangerő gombokkal, a hívásod és minden más is halkabbá válik. Itt a megoldás.",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>Dolgozol. A Spotify háttérzenét játszik. Kicsit túl hangos — versenyezem a podcastdal egy másik fülön, vagy megnehezíti a fókuszálást. Megnyomod a hangerő lejjebb gombot. A Spotify egyre halkabb lesz. De minden más is így van — a Zoom-hívásod, az értesítési hangok, a böngészőhangod. Minden csendesebb. Nem ezt akartad.</p>

<p>Ez azért történik, mert macOS egy hangerő csúszkával rendelkezik. Nyomd meg a hangerőgombot, és az beállítja a <em>Rendszer térfogata</em>, ami minden alkalmazást egyenlően skálál. Nincs mód arra, hogy "csak lealacsonyítsd a Spotify-t" a beépített vezérlőkkel.</p>

<h2>A megoldás: a Spotify alkalmazáson belüli volumenje</h2>

<p>A Spotify-nak saját hangerő csúszkája van az alkalmazás jobb alsó sarkában (vagy a lejátszó alján). Ezt a rendszer hangerejétől függetlenül is csökkentheted. Ha a rendszered 80%-on van, és a Spotify csúszkája 30%-on, a Spotify gyakorlatilag 24%-on játszik, míg minden más 80%-on marad.</p>

<p><strong>A probléma:</strong> Át kell váltanod a Spotify ablakra, meg kell találnod a csúszkát, beállítanod, majd vissza kell váltanod arra, amit eddig csináltál. A Spotify csúszkája pedig apró, pontatlan, és nem mutatja a százalékot — csak egy vizuális sávot. Ha egy megbeszélésen vagy, és gyorsan le kell halmoznod a zenédet, egy kis csúszkával babrálni egy másik alkalmazásban nem ideális.</p>

<h2>Az igazi megoldás: alkalmazásonkénti hangerőszabályozás</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Minden alkalmazáshoz egy hangerő csúszkát tesz a menüsávban. A Spotify csökkentése anélkül, hogy bármi mást befolyásolnánk:</p>

<ol>
  <li>Kattints a menü sávban a SoundDial ikonra</li>
  <li>Megtalálja a Spotify a listán</li>
  <li>Húzd le a csúszkát</li>
</ol>

<p>Kész. A Spotify csendesebb. A Zoom változatlan maradt. Az értesítések változatlanok. Minden más változatlan. Nem hagytad el a jelenlegi alkalmazásodat — a menüsáv felugró ablaka pont ott nyílik meg, ahol te vagy.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Spotify hangerő önállóan csökkentése, miközben a többi alkalmazás teljes hangerőn marad macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Még jobb: mentse meg profilként</h2>

<p>Ha rendszeresen szeretnél Spotify-t alacsonyabb háttérszinten dolgozva használni, mentsd el a kedvenc hangerőbeállításodat profilként. Hozz létre egy "Work" profilt, ahol a Spotify 25%, Zoom 100%, Slack pedig 15%. Legközelebb, amikor leülsz dolgozni, alkalmazd a profilt egy kattintással, ne csak egyes alkalmazásokat külön-külön állítanál.</p>

<h2>Még jobb: automatikus lecsúszás hívások közben</h2>

<p>SoundDial automatikusan lecsökkentheti a Spotify-t, amikor csatlakozol egy híváshoz. Engedélyezd az automatikus leducolást a beállításokban, válaszd ki, mennyivel csökkented a háttérhangot (alapértelmezett 30%), és SoundDial kezeli a többit. A zenéd elcsúszik, amikor a hívás kezdődik, és visszajön, amikor véget ér. Egyáltalán nincs kézi beállítás.</p>

<p>Ez az a munkafolyamat, amit macOS natív módon támogatnia kellene: "Spotify ezen a szinten, minden más ezen a szinten." Mivel az Apple nem építette meg, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> betölti a hiányt.</p>

<p>Egyszeri vásárlás a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Nincs előfizetés. macOS 14,2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Van macOS Tahoe-nak alkalmazásonként hangerőszabályzó?",
    description:
      "macOS Tahoe (macOS 26) jelentős frissítéseket hozott, de vajon az Apple végre hozzáadott egy hangerőkeverőt? Íme a válasz — és hogyan lehet most azonnal appenként hangerőszabályozást használni.",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>Minden évben Mac felhasználó reméli, hogy a következő macOS kiadás végre tartalmaz egy hangerőkeverőt. Minden évben csalódtak. Az macOS Tahoe (macOS 26) modellével az Apple áttervezett felületet, új rendszerfunkciókat és jelentős fejlesztéseket hozott a motorháztető alatt. De hozzáadták az alkalmazásonkénti hangerőszabályzót?</p>

<h2>A rövid válasz: nem</h2>

<p>macOS Tahoe nem tartalmaz beépített hangerőkeverőt. Nincs alkalmazásonként hangerőszabályozás a Rendszerbeállításokban, a Vezérlőközpontban vagy a menüsávban. A hangélmény ugyanaz, mint minden macOS megjelenésben: egy rendszeráram csúszkával, amely egyszerre irányít mindent.</p>

<p>Az Apple vezérlőközpontja még mindig egyetlen hangerő csúszkát mutat. A Rendszer beállításaiban a Hangbeállítások továbbra is lehetővé teszik, hogy kiválasztasz egy kimeneti eszközt, és egy fő hangerőt állíts. Nincs rejtett funkció, nincs fejlett opció, és nincs új API, amely alkalmazásonként elérhetővé teszi a felhasználók számára.</p>

<h2>Amit macOS Tahoe javított a hangzás terén</h2>

<p>Bár az alkalmazásonként még mindig hiányzik a hangerő, a Tahoe néhány hangzással kapcsolatos fejlesztést hozott:</p>

<ul>
  <li><strong>Javított Bluetooth hangstabilitás</strong> — kevesebb megszakítás és kodekkapcsolós probléma AirPods-szal és harmadik féltől származó fejhallgatóval</li>
  <li><strong>Jobb térbeli hangfeldolgozás</strong> — a fejkövetés fejkövetése és pontosabb térbeli megjelenítése a támogatott tartalomhoz</li>
  <li><strong>Core Audio teljesítmény</strong> — alacsonyabb késleltetés professzionális hangalkalmazásokhoz és zenegyártáshoz</li>
</ul>

<p>Ezek egyike sem válaszol az alapvető kérésre: "Engedd, hogy lekapcsoljam a Spotify-t anélkül, hogy befolyásolnám a Zoomot."</p>

<h2>Hozzáad-e valaha az Apple hangerőkeverőt?</h2>

<p>Nincs semmi jel arra, hogy az Apple tervezi ezt a funkciót hozzáadni. Nem jelent meg macOS béta-ban, WWDC ülésen vagy ismert útitervben. Az Apple hangtervezési filozófiája továbbra is az egyszerűséget részesíti előnyben — minden megoldáshoz egy csúszkát.</p>

<p>Az irónia az, hogy az Apple saját Core Audio keretrendszere teljes mértékben támogatja az egyes folyamatok hangvételét és hangerőszabályozását. Az macOS 14-ben bevezetett Audio Tap API (Sonoma) még könnyebbé tette a fejlesztők számára az alkalmazásonkénti hangeszközök létrehozását. Az Apple építette az infrastruktúrát — egyszerűen nem építették meg hozzá a felhasználói felületet.</p>

<h2>Hogyan lehet alkalmazásonként hangerőszabályzót kapni macOS Tahoe-n</h2>

<p>Mivel az Apple nem építi meg, a harmadik féltől származó alkalmazások töltik ki a hiányt. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> egy natív macOS menüsáv alkalmazás, amely hangerőkeverőt ad — független hangerő csúszkákat minden futó alkalmazáshoz.</p>

<img src="/apps/sounddial.png" alt="SoundDial alkalmazásonként hangerőszabályozást biztosít macOS Tahoe-n" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial teljesen kompatibilis a macOS Tahoe-val, és az Apple modern Core Audio Tap API-ját használja — nincs szükség harmadik féltől származó hangillesztőszerekre vagy kernel-bővítményekre. Tisztán működik macOS biztonsági modelljével, és nem zavarja más hangalkalmazásokat.</p>

<p>Amit kapsz:</p>
<ul>
  <li><strong>Alkalmazásonkénti volumencsúszkák</strong> — 0%-tól 200%-ig minden alkalmazásnál</li>
  <li><strong>Alkalmazás-alapú mute</strong> — egy kattintás, hogy bármelyik alkalmazás elnémítsa</li>
  <li><strong>Térfogatprofilok</strong> — mentsd el a konfigurációkat és azonnal válts</li>
  <li><strong>Automatikus leugrás</strong> — a háttérhang automatikusan csökken hívások közben</li>
  <li><strong>Hangerőnövelés</strong> — erősítse a csendes alkalmazásokat 100%-on</li>
  <li><strong>Térfogatmemória</strong> — megjegyzi az egyes alkalmazások hangerőjét az újraindítások között</li>
  <li><strong>Billentyűs billentyűk</strong> — kapcsold ki a keverőt vagy némítsd el a billentyűzetről</li>
</ul>

<p>Egyszeri vásárlás a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Nincs előfizetés. macOS 14,2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Hogyan játsszunk zenét hangszórókon, miközben fejhallgatóval fogadunk hívásokat (Mac)",
    description:
      "Szeretnéd, ha egyszerre lenne Spotify az asztali hangszóróidon és Zoom az AirPods-odban? macOS nem teszi ezt könnyűvé — ez az, ami valójában működik.",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>Íme egy ésszerű dolog, amit érdemes tenned: játssza a zenét az asztali hangszórókon, miközben Zoom-hívást fogadsz az AirPods-odon keresztül. A zene tölti be a termet, a hívás privát a füledben. Teljesen logikus.</p>

<p>macOS nemet mond. Amikor kiválasztasz egy hangkimeneti eszközt, <em>minden</em> Az alkalmazás használja. AirPods-ra váltva Zoomhoz, a Spotify pedig AirPods-ra vált. A Spotify-hoz hangszórókra váltok, a Zoom pedig hangszórókra is kapcsol. Mindenhez egy kimeneti eszköz. Nincs kivétel.</p>

<h2>Miért nem tudod ezt macOS natívan megcsinálni</h2>

<p>macOS minden hangot egyetlen kiválasztott kimeneti eszközön keresztül irányít. A Rendszerbeállításokban → Hang → Kimenetben kiválasztod a "MacBook Pro hangszórók" vagy "AirPods Pro" opciókat, és minden alkalmazás hangot küld az adott eszközre. Nincs beépített alkalmazásonkénti hangirányzás.</p>

<p>Ez a dizájn egyszerűség szempontjából érthető — a legtöbben azt szeretnék, ha az összes hangjuk ugyanonnan jönne. De az a helyzet akkor omlik szét, amikor különböző alkalmazásokat akarsz különböző kimenetekre.</p>

<h2>Az aggregált eszköz megoldása</h2>

<p>Az macOS Audio MIDI beállítása (megtalálható az Alkalmazások → Segédprogramok részén) lehetővé teszi, hogy létrehozz egy "aggregált eszközt", amely több kimenetet egyesít egybe. Azonban egy aggregált eszköz a <em>ugyanaz a hang</em> Az összes kombinált kimenethez — nem választhatod meg, melyik alkalmazás melyik kimenethez megy. Többhangszórós beállításokra tervezték, nem alkalmazásonkénti útvonalra.</p>

<h2>A többkimenetű eszköz megoldása</h2>

<p>Az aggregált eszközökhöz hasonlóan az Audio MIDI beállításban létrehozhatsz egy "Többkimenetű Eszközt". Ez egyszerre több kimenetre küld azonos hangot is. Ismétlem, mindenhol ugyanaz a hang — így nem lehet a Spotify-t hangszórókra és a Zoomot a fejhallgatóra irányítani.</p>

<h2>Mi működik valójában: alkalmazásonkénti hangúti alkalmazások</h2>

<p>Ahhoz, hogy igazán különböző alkalmazásokat irányítsanak különböző kimeneti eszközökre, szükséged van egy harmadik féltől származó hangirányzó alkalmazásra, amely elfogja az egyes alkalmazások hangját, és elküldi azt a megadott kimenetre. Az olyan alkalmazások, mint a SoundSource (a Rogue Amoeba-tól) ezt támogatják — lehetővé teszik, hogy specifikus kimeneti eszközöket rendelj az egyes alkalmazásokhoz.</p>

<h2>Egy egyszerűbb megközelítés: térfogatalapú szétválasztás</h2>

<p>Ha a fő célod, hogy tisztán halld a hívásodat a zenédön keresztül (nem pedig fizikailag különböző eszközökre irányítanád őket), az alkalmazásonkénti hangerőszabályozás egyszerűbben oldja meg a problémát.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> minden alkalmazásnak saját hangerő csúszkát ad. Hívás közben a következőket teheted:</p>

<ul>
  <li>Állítsd be a Zoom/Teams/FaceTime beállítást <strong>100%</strong></li>
  <li>Lejjebb a Spotify <strong>20%</strong></li>
  <li>Némítsd el minden mást</li>
</ul>

<p>A döntésed kristálytiszta. A zene egy finom háttér. Nem szükséges eszközváltás.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Zoomot teljes hangerőn mutatja és a Spotify lehalva hívás közben macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Még jobb: SoundDial <strong>Automatikus leugrás</strong> ezt automatikusan megteszi. Amikor csatlakozol egy híváshoz, érzékeli a mikrofon aktiválását, és az összes háttéralkalmazást egy olyan szintre csökkenti, amit te állítottál be (alapértelmezett 30%). Amikor a hívás véget ér, minden visszatér a normális kerékvágásba. Nincs szükség kézi csúszka beállításra.</p>

<p>A legtöbb ember számára ez megoldja a valódi problémát — "Nem hallom a hívásomat a zeném fölött" — anélkül, hogy bonyolult lenne különböző alkalmazásokat különböző fizikai eszközökre irányítani.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac hangerő magától változik: hogyan javítsuk meg",
    description:
      "A Mac hangerője véletlenszerűen felugrik, leesik vagy visszaáll egy másik szintre. Íme minden ismert ok és mód arra, hogyan lehet megállítani.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>Kényelmes szintre állítod a Mac hangerőt. Te nézz el. Amikor visszajössz, más lesz. Hangosabban. Halkabb. Reset maximumra. Ez folyton megtörténik, és nem tudod kitalálni, miért.</p>

<p>Ez az egyik legfrusztrálóbb Mac hangprobléma, mert véletlenszerűnek tűnik. De szinte soha nem véletlenszerű — mindig van egy konkrét kiváltó ok. Íme az összes ismert ok, és hogyan lehet mindegyiket orvosolni.</p>

<h2>1. Bluetooth eszköz újracsatlakozás</h2>

<p>Ez a leggyakoribb ok. Amikor egy Bluetooth eszköz (AirPods, hangszórók, fejhallgató) csatlakozik vagy lekapcsol, macOS visszaállítja a hangerőt arra a szintre, amit utoljára használtak az adott eszközzel. Tehát ha a hangszóróidon 30%-nál vagy, és az AirPods automatikusan csatlakozik, a hangerő akár 80%-ra is ugrhat (az utolsó AirPods szint).</p>

<p><strong>Javítás:</strong> macOS megjegyzi a kimeneti eszközönkénti hangerőszinteket. Minden váltáskor állítsd oda ahova, ahogy szeretnéd. Idővel minden eszköz esetében a megfelelő szintek maradnak emlékezni. Ha egy Bluetooth eszköz váratlanul automatikusan csatlakozik, menj a Rendszerbeállításokhoz a Bluetooth→ és távolítsd el azokat az eszközöket, amelyeket nem használsz aktívan.</p>

<h2>2. HDMI/DisplayPort kimenet</h2>

<p>Külső kijelző HDMI-vel vagy DisplayPorton való csatlakoztatása vagy lecsatlakoztatása hangerőváltozást okozhat. Néhány kijelző hangkimeneti eszköz is, és macOS automatikusan vált rájuk. Amikor a kijelző alszik vagy leszakad, macOS visszavált hangszórókra, és lehet, hogy visszaállítja a hangerőt.</p>

<p><strong>Javítás:</strong> Menj a Rendszerbeállításokhoz → Hang → Kimenet menübe, és nézd meg, hogy macOS automatikusan vált-e a kijelző hangszóróira. Ha nem akarod, hogy a kijelzőn keresztül hallgass a hangot, válaszd ki a kívánt kimeneti eszközt kézzel. Néhány kijelző hangkimenete kikapcsolható a saját OSD (képernyőn megjelenítő) beállításokban.</p>

<h2>3. Egy alkalmazás változtatja a hangerőt</h2>

<p>Néhány alkalmazás programozott módon állítja be a rendszer hangerőjét. Például a Zoomban van egy "Automatikus mikrofonhangerő beállítása" beállítás, amely szintén befolyásolhatja a kimeneti hangerőt. Zenei alkalmazások, podcast alkalmazások és néhány játék is állíthatja a hangerőt, amikor elindulnak vagy konkrét események bekövetkeznek.</p>

<p><strong>Javítás:</strong> Nézd meg a nemrég megnyitott alkalmazásaidat hang beállítások miatt. Zoomban: Beállítások → Hang → kapcsold ki a "Automatikusan állít mikrofon hangerőt" opciót. Spotify-ban: ellenőrizd, hogy a hangerő normalizálása okoz-e érzékelt hangerőváltozásokat (Beállítások → lejátszás → Hangerő normalizálása).</p>

<h2>4. Billentyűzet vagy Touch Bar véletlen lenyomásai</h2>

<p>Ha van egy billentyűzeted hangerő billentyűkkel (minden Mac billentyűzeten van), véletlen lenyomás vagy egy beszorult billentyű megváltoztathatja a hangerőt. A régebbi MacBook Pro modellek Touch Bar különösen hajlamos arra, hogy véletlenül változik a hangerő, ha hozzáér.</p>

<p><strong>Javítás:</strong> Ellenőrizd, hogy a hangerő gomb beragad-e úgy, hogy figyeled a hangerőjelzőt, miközben semmihez sem érsz. Touch Bar modellekhez testreszabd az Touch Bar beállításokat a Rendszerbeállításokban → Billentyűzet → Touch Bar beállításokban, hogy eltávolítsd a hangerő csúszkát vagy elhelyezd a kevésbé hozzáférhető helyre.</p>

<h2>5. macOS hangdémon visszaállítása</h2>

<p>Alvó/ébresztőciklusok után az macOS audio daemonja (coreaudiod) néha újraindul, és visszaállítja a hangerőt egy alapértelmezett vagy korábban gyorsankulcsra állítva. Ez egy rendszerszintű hiba, amely különböző macOS verziókban is megjelenik.</p>

<p><strong>Javítás:</strong> Ha a hangerő folyamatosan visszaáll az alvó állapotból való ébredés után, próbáld meg kézzel újraindítani a coreaudiod-ot:</p>
<p><code>Sudo killall coreaudiod</code></p>
<p>Ha a probléma macOS frissítések között is fennáll, a jövőbeli frissítésben megoldódhat. Addig is, ha egy olyan eszköz használ, amely megjegyzi és helyreállítja az alkalmazásonkénti hangerőszinteket, kompenzálhatja.</p>

<h2>6. Akadálymentességi beállítások</h2>

<p>Néhány akadálymentességi funkció zavarhatja a hangzást. Nézd meg a Rendszerbeállításokat → Akadálymentességet → Hangot esetleges váratlan beállítások után. Ellenőrizd azt is, hogy a VoiceOver vagy a Switch Control részben be van-e kapcsolva — ezek váratlan hangerő viselkedést okozhatnak.</p>

<h2>Zárd le az alkalmazásonkénti volumeneket SoundDial</h2>

<p>Még ha nem is tudod megakadályozni, hogy macOS a rendszer hangerő változtassák, megvédheted a rendszered <em>Alkalmazásonként</em> Térfogategyenleg. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Minden alkalmazás hangerejét önállóan megjegyzi. Amikor egy alkalmazás újraindul, vagy amikor a Mac felébred az alvásból, SoundDial visszaállítja az összes alkalmazást a mentett hangerőre.</p>

<img src="/apps/sounddial.png" alt="SoundDial emlékezni az alkalmazásonkénti hangerőszintekre az újraindítások során macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ez azt jelenti, hogy még ha a rendszer hangerő változik, az alkalmazásszintű egyenleg is állandó marad:</p>
<ul>
  <li>A Spotify 40%-on marad, függetlenül a rendszerszintű hangerőváltozástól</li>
  <li>A Zoom 100%-on marad, még a Bluetooth újracsatlakoztatása után is</li>
  <li>A Slack újraindítás után is tompán marad</li>
</ul>

<p>Kombinálva <strong>Térfogatprofilok</strong>, azonnal visszaállíthatod a kívánt hangerő konfigurációt bármilyen helyzetre — egyetlen kattintással visszajuthatsz pontosan oda, ahol szeretnél, függetlenül attól, mit tettél, amikor macOS nem néztél rá.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Legjobb hangerőkeverő alkalmazások Mac 2026-ban",
    description:
      "Egy határozott összehasonlítás minden Mac alkalmazásról, amely alkalmazásonként hangerőszabályozást ad. Funkciók, árképzés és az, hogy melyik valóban érdemes használni.",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS nincs beépített hangerőkeverő. Ha az egyes alkalmazások hangerejét akarod szabályozni — csökkenteni a Spotify-t anélkül, hogy befolyásolnád a Zoomot, elnémítsd a Slack-et anélkül, hogy mindent elnémítannál — szükséged van egy harmadik féltől származó alkalmazásra.</p>

<p>Több lehetőség is van. Ez az útmutató a legjelentősebbeket hasonlítja össze funkciók, ár, kompatibilitás és tényleges használhatóság alapján. Nincsenek affiliate linkek, nincsenek szponzorált választások.</p>

<h2>Mit érdemes figyelned</h2>

<p>Mielőtt összehasonlítanánk az alkalmazásokat, íme, mi számít egy Mac hangerőkeverőnél:</p>

<ul>
  <li><strong>Alkalmazásonkénti volumencsúszkák</strong> — minden futó alkalmazás független irányítása</li>
  <li><strong>Térfogattartomány</strong> — Tudsz 100% alá VAGY 100% fölé menni (boost)?</li>
  <li><strong>Alkalmazás-alapú mute</strong> — némítsd el az egyik alkalmazást anélkül, hogy megérintené a hangerő pozícióját</li>
  <li><strong>Profilok</strong> — mentés és váltás hangerő konfigurációk között</li>
  <li><strong>Automatikus leugrás</strong> — automatikusan csökkenti a zenét hívások közben</li>
  <li><strong>Menüsáv integráció</strong> — gyors hozzáférés alkalmazásváltás nélkül</li>
  <li><strong>macOS kompatibilitás</strong> — működik a legújabb macOS verzión</li>
  <li><strong>Árképzési modell</strong> — egyszeri vásárlás vs. előfizetés</li>
</ul>

<h2>A lehetőségek</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> egy natív macOS menü sáv alkalmazás, amely egy dolgot jól csinál: az alkalmazásonként hangerőszabályozást.</p>

<ul>
  <li><strong>Alkalmazásonként:</strong> Igen, 0%-tól 200%-ig</li>
  <li><strong>App-enkénti némítás:</strong> Igen, egy kattintással</li>
  <li><strong>Hangerőnövelés:</strong> Igen, akár 200%-ig</li>
  <li><strong>Profilok:</strong> Igen, egyedi nevekkel és ikonokkal</li>
  <li><strong>Automatikus leugrás:</strong> Igen, konfigurálható kacsa szinttel</li>
  <li><strong>Billentyűbillentyűk:</strong> Igen (keverőkapcsoló, némít mindent)</li>
  <li><strong>Kimeneti eszköz kapcsolása:</strong> Igen, ugyanarról a panelről</li>
  <li><strong>Térfogatmemória:</strong> Igen, emlékezik az egyes alkalmazások hangerőre az újraindítások között</li>
  <li><strong>Ár:</strong> 14,99 € egyszeri vásárlás (előfizetés nélkül) — kevesebb, mint a SoundSource ára</li>
  <li><strong>Megköveteli:</strong> macOS 14.2+</li>
  <li><strong>Elérhető a következő címen:</strong> Mac App Store (Apple által áttekintett, sandboxos, rendszerillesztőszerek nélkül)</li>
</ul>

<p>SoundDial az Apple modern Core Audio Tap API-ját használja tiszta, folyamatonkénti hangvezérléshez. Könnyű, teljes egészében a menüsávban fut, és nem igényel bonyolult beállítást. 14,99 €-ért jelentősen olcsóbb, mint a SoundSource (39 dollár), miközben olyan funkciókat tartalmaz, amelyek a SoundSource-ból hiányoznak — például hangerőprofilokat és automatikus leugrást. És mivel a Mac App Store-ban van, Apple által értékelt, sandbox-on van, és tisztán telepíthető anélkül, hogy letöltenék a DMG-ket vagy rendszerhang illesztőprogramokat.</p>

<img src="/apps/sounddial.png" alt="SoundDial alkalmazásonként hangerőkeverő, amely az egyes alkalmazások hangerő csúszkáit mutatja macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hangforrás (Zsődő Amoeba)</h3>

<p>A SoundSource az egyik legrégebbi és legismertebb Mac hangszolgáltató. Erős és funkciókkal gazdag, a nagy teljesítményű felhasználókat és a hang szakembereket célozza meg.</p>

<ul>
  <li><strong>Alkalmazásonként:</strong> Igen</li>
  <li><strong>App-enkénti némítás:</strong> Igen</li>
  <li><strong>Hangerőnövelés:</strong> Igen</li>
  <li><strong>Alkalmazásonkénti EQ:</strong> Igen (beépített és AU plugin támogatás)</li>
  <li><strong>Alkalmazásonkénti kimeneti útvonal:</strong> Igen (különböző alkalmazásokat küldj különböző hangszórókra)</li>
  <li><strong>Profilok:</strong> Nincs beépített profilrendszer</li>
  <li><strong>Automatikus leugrás:</strong> Nem</li>
  <li><strong>Ár:</strong> $39 USD (egyszeri, nagyobb fejlesztések további vásárlást igényelhetnek)</li>
  <li><strong>Megköveteli:</strong> macOS 12+ (rendszerhang meghajtót telepít)</li>
</ul>

<p>A SoundSource a leghatékonyabb opció, ha alkalmazásonként EQ-ra és hanghatásláncokra van szükséged. Rendszerszintű hangmeghajtót (ACE) telepít a hang elfogására, ami nagyon alkalmassá teszi, de egyben invazívabbá is. A 39 dolláros ár magasabb, mint a legtöbb alternatívánál, és nincs automatikus lecsúszás vagy profil rendszer.</p>

<h3>Háttérzene (ingyenes, nyílt forráskódú)</h3>

<p>A Background Music egy ingyenes, nyílt forráskódú alkalmazás, amely alap, alkalmazásonkénti hangerőszabályozást biztosít. Ez népszerű választás, mert ingyenes.</p>

<ul>
  <li><strong>Alkalmazásonként:</strong> Igen</li>
  <li><strong>App-enkénti némítás:</strong> Igen</li>
  <li><strong>Hangerőnövelés:</strong> Nem (csak 0-100%)</li>
  <li><strong>Automatikus szünetes zene:</strong> Igen (megállítja a zenét, amikor egy másik alkalmazás játszik hangot)</li>
  <li><strong>Profilok:</strong> Nem</li>
  <li><strong>Automatikus leugrás:</strong> Nem (az automatikus szünetet eltér az automatikus lehúzástól)</li>
  <li><strong>Ár:</strong> Szabad</li>
  <li><strong>Megköveteli:</strong> macOS 10.13+ (virtuális hangeszköz telepítése)</li>
</ul>

<p>A háttérzene egy megbízható, ingyenes opció az alap, alkalmazásonkénti hangerőhöz. Azonban nem frissítették következetesen az újabb macOS verziókhoz. A felhasználók problémákat jelentenek macOS Sequoia és Tahoe csatornákon — hanghibák, a virtuális hangeszköz nem telepítő, vagy az alkalmazás nem érzékel egyes alkalmazásokat. A hangerő 100%-nál sem tud növelni, nincs profilja, és nincs automatikus lehajlás.</p>

<h3>eqMac</h3>

<p>Az eqMac elsősorban egy kiegyenlítő alkalmazás, amely némi hangerőkeverési lehetőséget is tartalmaz.</p>

<ul>
  <li><strong>Alkalmazásonként:</strong> Limited (EQ-ra fókuszál, nem keverésre)</li>
  <li><strong>Rendszerszintű EQ:</strong> Igen, több zenekarlehetőséggel</li>
  <li><strong>Hangerőnövelés:</strong> Igen</li>
  <li><strong>Profilok:</strong> EQ előbeállítások (nem hangerőprofilok)</li>
  <li><strong>Automatikus leugrás:</strong> Nem</li>
  <li><strong>Ár:</strong> Ingyenes szint + Pro előfizetés</li>
  <li><strong>Megköveteli:</strong> macOS 10.14+</li>
</ul>

<p>az eqMac jobb választás, ha a fő szükséged a rendszerszintű ekvalaizációra (basszuserősítés, magas hang beállítás stb.), nem pedig alkalmazásonkénti hangerőszabályzó. A hangerőkeverési képességei másodlagosak az EQ funkcióihoz képest.</p>

<h2>Gyors összehasonlító táblázat</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Jellemzők</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Hangforrás</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Háttérzene</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Alkalmazásonkénti mennyiség</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Hangerőnövelés (200%)</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Térfogatprofilok</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Automatikus leugrás</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Alkalmazásonkénti EQ</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Alkalmazásonkénti kimeneti útozás</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Billentyűs billentyűk</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Rendszermeghajtó szükséges</td>
  <td style="text-align:center;padding:10px 12px;">Nem</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
  <td style="text-align:center;padding:10px 12px;">Igen</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Ár</td>
  <td style="text-align:center;padding:10px 12px;">Egyszeri</td>
  <td style="text-align:center;padding:10px 12px;">$39</td>
  <td style="text-align:center;padding:10px 12px;">Szabad</td>
</tr>
</tbody>
</table>

<h2>Melyiket válassza?</h2>

<ul>
  <li><strong>Ha alkalmazásonként hangerőszabályzót, profilokat és automatikus lecsúszást szeretnél:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — a legteljesebb hangerőkeverő az árára, olyan funkciókkal (profilok, automatikus lecsúszás), amelyek még drágább alternatívákból is hiányoznak.</li>
  <li><strong>Ha alkalmazásonként EQ-ra és hangirányzásra van szükséged:</strong> SoundSource — a legerősebb megoldás, amely hangmérnököknek szól, akiknek effektláncokra és alkalmazásonkénti kimeneti útvonalra van szükségük.</li>
  <li><strong>Ha valami ingyenes és alapvetőt szeretnél:</strong> Háttérzene — Egyszerű alkalmazásonkénti hangerőhöz elég, de az újabb macOS verziókon kompatibilitási problémákat okozhat, és hiányzik a boost/profil/lehajlás.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "Túl csendes a YouTube Safariban vagy Chrome Mac-n? Azonnal javítsd",
    description:
      "Néhány YouTube videó alig hallható még maximális hangerőn is. Íme, miért halkabb a böngészőhang gyakrabban más alkalmazásoknál — és hogyan lehet ezt 100%-on fölé emelni Mac-n.",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>Rákattintasz egy YouTube videóra. A teremtő beszél, de alig hallod őt. A rendszer hangerő maximum. A YouTube lejátszó hangerője a maximum. Közelebb hajolsz a hangszóróidhoz. Még mindig túl csendes. Megnyitod a Spotify-t — a zene teljes hangerőn szól. Szóval nem a hangszóróidban van a baj. Ez a YouTube. Pontosabban, a videó miatt van.</p>

<p>Ez hihetetlenül gyakori, és nem hiba. Néhány YouTube videót csak alacsonyabb hangerőn maszterelnek, mint másokat, és macOS nem enged módot a böngészőhang szelektív növelésére.</p>

<h2>Miért olyan csendesek néhány YouTube-videó</h2>

<h3>A videót alacsony hangerőn rögzítették</h3>
<p>Nem minden alkotónak van profi hangfelszerelése. Egy laptop mikrofonnal rögzített videó a szoba másik oldaláról jelentősen halkabb lesz, mint egy megfelelő kondenzátor mikrofonnal rögzített videó. A YouTube bizonyos mértékig normalizálja a hangerőt (a "hangerő normalizációjuk" -14 LUFS-t célozza meg), de ez nem kompenzálja teljesen a rendkívül halk forráshangot.</p>

<h3>A YouTube hangosság normalizálása</h3>
<p>A YouTube automatikusan állítja a videó hangerőjét, így a videók nagyjából ugyanazon a szinten játszódnak. Hangos videók esetén ez azt jelenti, hogy vissza kell kapcsolni őket. Csendes videóknál ez azt jelenti, hogy felemeled a videókat — de csak egy pontig. Ha a forráshang nagyon halk, a normalizáció csak bizonyos mértékig tud zajt okozni.</p>

<h3>A böngészőhang másodrendű állampolgár a macOS</h3>
<p>A Safari és a Chrome másképp kezeli a hangot, mint a dedikált médiaalkalmazások. A böngésző hangmotorján keresztül kimenetel, amelynek saját hangerő plafonja van. Nincs mód arra, hogy a böngészőfül hangját macOS belülről felerősítsd. A böngésző egy alkalmazás, egy hangerőszinttel — még akkor is, ha tíz tabot játszanak különböző hangmagasságokban.</p>

<h2>Gyors megoldások kipróbálásra</h2>

<h3>Nézd meg a YouTube lejátszó hangerőjét</h3>
<p>Vidd az everet a hangszóró ikon fölé a YouTube lejátszón, és győződj meg róla, hogy a csúszka maximumban van. Könnyű véletlenül lehúzni ezt, és függetlenül áll vissza a rendszer hangerőtől.</p>

<h3>Kapcsold ki a YouTube hangerő normalizálását</h3>
<p>A YouTube nem kínál felhasználóhoz nézhető kapcsolót a hangosság normalizálására. Azonban néhány böngészőbővítmény ezt megkerülheti. Keress a böngésződ bővítményében a "YouTube hangerő normalizátor" vagy "YouTube hangerősítő" kifejezéseket.</p>

<h3>Próbálj ki egy másik böngészőt</h3>
<p>A Safari és a Chrome másképp kezeli a hangot. Ha egy videó túl csendes az egyik böngészőben, próbáld ki a másikat. Különösen a Chrome egy külön folyamaton (a "renderelőn") keresztül kezeli a hangot, ami néha alacsonyabb kimenetet eredményezhet.</p>

<h2>Az igazi megoldás: növelje a böngészőhangerőt 100%-on</h2>

<p>A probléma az, hogy macOS nem engedi, hogy egy adott alkalmazás volumenét 100%-ra emeld. A böngésződ maximálisan van kihasználva, de a "maximum" nem elég hangos.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ezt úgy oldja meg, hogy minden alkalmazásnak – beleértve a Safarit és a Chrome-ot is – független hangerő csúszkát ad, amely 0%-ról a Chrome-ra változik <strong>200%</strong>. Ha egy YouTube videó túl csendes, húzd a böngésző csúszkáját 150%-ra vagy 180%-ra. A hang valós időben felerősítődik anélkül, hogy más alkalmazásokat érintene.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Safari böngésző hangerő 180%-ra emelése csendes YouTube videókhoz Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ez különösen hasznos, mert:</p>
<ul>
  <li><strong>Azonnal megtörténik.</strong> Kattints a menüsáv ikonjára, húzd el a csúszkát. Nem kell böngészőbővítményt telepítened vagy beállításokat módosítanod.</li>
  <li><strong>Ez alkalmazásonkénti történik.</strong> A Chrome felerősítése nem teszi hangosabbá a Spotify-t. Minden alkalmazás független marad.</li>
  <li><strong>Bármelyik böngészővel működik.</strong> Safari, Chrome, Firefox, Arc, Brave — ha ez egy alkalmazás a Mac rajta, SoundDial tudod irányítani.</li>
  <li><strong>A 200%-ig is felemelkedik.</strong> Duplázd meg a normál hangerő plafonját. Még a leghalkabb videó is hallhatóvá válik.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac túl hangos az értesítés fejhallgatóban? Íme a megoldás",
    description:
      "A Slack pingek és a macOS riasztások fájdalmasan hangosak a fejhallgatódban, miközben a zene rendben van. Íme, miért más az értesítési hangerő — és hogyan lehet ezt megszelídíteni.",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>Fejhallgatót viselsz, és kényelmes, 40%-os hangerővel hallgatod zenét. Slack értesítés indul. <em>DING.</em> A te zenédhez képest fülsiketítően hangos. Csengenek a füleid. Letéped a fejhallgatódat.</p>

<p>Ez azért történik, mert macOS nem engedi külön szabályozni az értesítések és a média hangerőjét. A zenéd talán kényelmes hangon van, de a riasztások — Slack pingek, Mail értesítések, naptári emlékeztetők macOS rendszerhangok — teljes intenzitással szólnak a rendszerhangerőhöz képest.</p>

<h2>Miért szólnak az értesítések hangosabbak, mint a zene</h2>

<p>Az értesítési hangok rövid, éles hangrobbanások, amelyek arra szolgálnak, hogy felkeltsék a figyelmedet. Tervezésük szerint magas csúcshangerővel rendelkeznek. Ezzel szemben a zene széles dinamikai tartománya van — halkabb részek, hangosabb részek, és egy általános, mesterelt szint, amely a tartós hallgatáshoz való.</p>

<p>Ha a rendszer hangerője 40%-on van, a zenéd a masterelt szint 40%-án áll — ami talán kényelmes 60-70 dB a fejhallgatóban. De egy 40%-os rendszerhangerő értesítés akkor is elérheti a 80+ dB-t, mert maga az értesítési hangfájl sokkal magasabb csúcsszinten van maszterelve. A rendszer térfogata mindkettő arányban egyenlően skáldozható, de a kezdő szintek nagyon eltérnek.</p>

<p>Fejhallgatóban ez rosszabb. A hang közvetlenül a fülcsatornába megy, nincs hely az eloszlásra, így a hangerő a csendes zene és az éles értesítés közötti hangerőkülönbség felerősítődik.</p>

<h2>Beépített módok az értesítési mennyiség csökkentésére</h2>

<h3>Csökkentsd a riasztási hangerőt</h3>
<p>macOS külön "Riasztás hangerő" csúszkával van elrejtve a beállításokban. Nézz ki <strong>Rendszerbeállítások → hang</strong> és keresd a <strong>Riasztási hangerő</strong> csúszkát. Ez a rendszer hangjainak és riasztásainak hangerejét külön szabályozza a fő hangerőtől.</p>
<p><strong>Korlátozás:</strong> Ez csak macOS rendszerriasztásokat érint (például hibasíptyegéseket és szemét hangokat). Nem befolyásolja az értesítési hangokat olyan alkalmazásokból, mint a Slack, Discord vagy Teams, amelyek saját hangmotorjukon keresztül játszanak le.</p>

<h3>Kapcsold ki az értesítési hangokat alkalmazásonként</h3>
<p>Nézz ki <strong>Rendszerbeállítások → értesítések</strong>, válaszd ki azt az appot, ami túl hangos, és kapcsold ki a "Lejátszás hang értesítésekhez" opciót. Ez teljesen elnémítja az alkalmazás értesítéseit.</p>
<p><strong>Korlátozás:</strong> Mindent vagy semmit. Nem lehet Slack értesítéseket létrehozni <em>csendesebb</em> — csak teljesen bekapcsolva vagy teljesen kikapcsolva. És elveszíted azt a hangjelzést, ami azt jelzi, hogy valami történt, anélkül, hogy a képernyődre néznéd.</p>

<h3>Fókusz módok használata</h3>
<p>A fókusz módok (Ne zavard, Munka stb.) képesek elnyomni az értesítési hangokat az összes vagy kiválasztott alkalmazásból. Ez mély fókuszú alkalmak alatt működik, de nem praktikus egész nap – fontos értesítéseket lekésnél.</p>

<h2>Az igazi megoldás: függetlenül szabályozza az értesítési alkalmazás hangerőjét</h2>

<p>Amit valójában szeretnél, az egyszerű: tegyük csendesebbé a Slack-et anélkül, hogy a zenéd halkabbá válna. Csökkentse az értesítési alkalmazások hangerőjét 15%-ra, miközben a Spotify 50%-on marad. macOS nem engedi, hogy ezt megtegye.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Igen. Minden alkalmazásnak saját hangerő csúszkát ad, így az értesítésekkel foglalkozó alkalmazásokat, mint a Slack, Mail és Calendar sokkal alacsonyabb hangerőre állíthatod, miközben a médiaalkalmazások kényelmes szinten maradnak.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Slack alacsony hangerőn, a Spotify normál hangerőn mutat — független értesítési vezérlés macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Egy tipikus fejhallgatóbarát megoldás</h3>
<ul>
  <li><strong>Spotify / Zene</strong> — 50% (kényelmes hallgatási szint)</li>
  <li><strong>Laza</strong> — 15% (feltűnő, de nem meglepő)</li>
  <li><strong>Mail</strong> — 10% (finom ping, nem fog megrázni)</li>
  <li><strong>Naptár</strong> — 20% (elég ahhoz, hogy észrevegyék, nem fájdalmas)</li>
  <li><strong>Zoom / FaceTime</strong> — 90% (tiszta hívás hang)</li>
  <li><strong>Böngésző</strong> — 40% (a zenei szint megegyezése videólejátszáshoz)</li>
</ul>

<p>Mentsd ezt "Fejhallgatók" profilként SoundDial-ben, és egy kattintással alkalmazd, amikor bedugod. Hozz létre egy külön "Hangszórók" profilt különböző arányokkal, amikor az asztalodnál dolgozol.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Hogyan állítsd meg, hogy a Zoom lejjebb engedje a zenédet Mac",
    description:
      "Minden alkalommal, amikor csatlakozol egy Zoom-híváshoz, a zenéd elhallik vagy eltűnik. Íme, miért történik ez, és hogyan szabályozhatod, mi lesz csendesebb hívások közben — a saját feltételeid szerint.",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>Csatlakozol egy Zoom-híváshoz. A Spotify kényelmes hangerőn szólt. A hívás összekapcsolódik, és — a zenéd eltűnik vagy szinte semmivé válik. Nem nyúlt semmihez. A Zoom (vagy macOS) úgy döntött, hogy kérés nélkül lehalványítja a zenédet.</p>

<p>Ez megőrjíti az embereket, mert láthatatlan és automatikus. Nem némítottál semmit. Nem állítottál be a csúszkát. Valami a rendszerben úgy döntött, hogy a zenéd halkabbnak kellene lennie, és nincs nyilvánvaló módod arra, hogy irányítsd.</p>

<p>Íme, mi történik valójában, és hogyan lehet visszavenni az irányítást.</p>

<h2>Miért halkít a zenéd Zoom-hívások alatt</h2>

<p>Két lehetséges ok lehetnek:</p>

<h3>1. A Zoom beépített hang lecsúszása</h3>
<p>A Zoomnak saját hangfeldolgozása is megvan, ami befolyásolhatja a rendszered többi hangját. Bizonyos konfigurációkban a Zoom csökkenti a rendszer hangját, amikor aktiválja a mikrofont, így a hívás hangja tisztább lesz. Ez nem mindig nyilvánvaló a Zoom beállításaiban.</p>

<p>Nézd meg a Zoom → Beállításokat → Hangot:</p>
<ul>
  <li>Keress bármilyen "Automatikus mikrofonhangerő beállítása" beállítást, és próbáld ki kikapcsolni</li>
  <li>Nézd meg a "Háttérzaj elnyomása" opciót — ez feldolgozza a hangot és befolyásolhatja az észlelt hangerőt</li>
  <li>Győződj meg róla, hogy a "Külön hangkészüléket használj szimultános értelmezéshez" opció nincs bejelölve, hacsak nem kell rá</li>
</ul>

<h3>2. macOS kodekváltás</h3>
<p>Amikor a Zoom aktiválja a mikrofonodat (különösen Bluetooth-fülhallgatóval, mint az AirPods-szal), macOS vált a magas minőségű AAC audio kodekről a gyengébb minőségű SCO kodekre. Ez a kodekváltás gyakran csökkenti az általános hangerőt és minőséget. Ez nem kifejezetten a Zoom hibája — ez bármelyik alkalmazásnál előfordul, amely Bluetoothon keresztül használja a mikrofont.</p>

<p>Ha AirPods-ot vagy más Bluetooth fejhallgatót használsz, és a hangerő elhalványul, amikor hívás kezdődik, valószínűleg ez az oka.</p>

<h2>Beépített javítások</h2>

<h3>Használjon vezetékes fejhallgatót</h3>
<p>A Bluetooth kodekkapcsoló probléma teljesen megszűnik vezetékes fejhallgatóknál. Egy USB-C fejhallgató-adapter vagy beépített mikrofonnal rendelkező headset teljesen elkerüli az AAC→SCO kapcsolót. A hangminőség állandó marad a hívások előtt, közben és után.</p>

<h3>Használj külön mikrofont</h3>
<p>Ha a Mac beépített mikrofonját (vagy külső USB mikrofont) használod az AirPods mikrofonja helyett, macOS nem kell váltanod a Bluetooth kodeket. Állítsd be a bemeneti eszközödet a beépített mikrofonra a Rendszerbeállításokban → Hang → Bemenetben, miközben az AirPods-t tartod kimenetként. Így az AirPods AAC módban marad, és a hangerő nem változik.</p>

<h3>Állítsd be a Zoom hangbeállításait</h3>
<p>A Zoom → Beállítások → Audio menüben kísérletezz az automatikus mikrofonbeállítás és háttérzaj elnyomásának kikapcsolásával. Ezek a funkciók zavarhatják más alkalmazások hangszintjét.</p>

<h2>Az igazi megoldás: az automata leugrás a te feltételeid szerint</h2>

<p>Az alapvető probléma, hogy nincs kontrollod feletted <em>Mennyire</em> A zene hívások alatt halkabban áll. A rendszer ezt a döntést hozza meg helyetted, és általában túl agresszív — a zene majdnem nullára csökken, ahelyett, hogy kényelmes háttérszintet használna.</p>

<p>Valójában azt szeretnéd, hogy konfigurálható automatikus leugrás: "amikor híváson vagyok, csökkentsd a zenémet 25%-ra — nem nullára, nem 50%-ra, pontosan 25%-ra."</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pontosan ezt adja. Az automatikus lecsúszás funkciója figyeli a mikrofonodat, és automatikusan állítja a háttérhangot a hívás elindításakor — de <strong>Te irányítod a kacsa szintjét</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial automatikus lecsúsztató beállítások — konfigurálható hangerőcsökkentés Zoom hívások közben Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hogyan működik</h3>
<ol>
  <li>Te állítod be a kedvenc kacsa szintedet (10%-tól 80%-ig)</li>
  <li>Csatlakozol egy Zoom-híváshoz — a mikrofonod aktiválódik</li>
  <li>SoundDial érzékeli a hívást, és a háttéralkalmazásokat a konfigurált szintre csökkenti</li>
  <li>A híváshangod teljes hangerőn marad</li>
  <li>Leteszed a telefont — minden alkalmazás visszatér a korábbi volumenhez</li>
</ol>

<p>A különbség a Zoom/macOS megközelítéstől:</p>
<ul>
  <li><strong>Te választod ki a pályát.</strong> 30% jó alapértelmezés — a zene hallható, de nem zavarja. A beállítást 10%-tól (majdnem hangtalan) vagy 80%-ig (alig csökkentve) lehet.</li>
  <li><strong>Tökéletesen helyreáll.</strong> Amikor véget ér a hívás, minden alkalmazás pontosan visszajön oda, ahol volt.</li>
  <li><strong>Minden kommunikációs alkalmazással működik.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Ki tudod kapcsolni.</strong> Ha egy adott híváshoz kézzel akarod kezelni a hangerőt, csak kapcsold ki az automatikus lecsúszást a SoundDial beállításaiban.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Az AirPods hangerő túl alacsony Mac? Minden megoldás elmagyarázva",
    description:
      "Az AirPods még teljes hangerőn is halkan szól Mac? Íme az összes ok — a fejhallgató biztonsági korlátoktól a Bluetooth furcsaságokig — és ezek megoldásának módja.",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>Az AirPods jól működik az iPhone-on. Elég hangosak. De ha bedugod őket a Mac — természetesen vezeték nélkül — és hirtelen minden túl csendes lesz. A rendszer hangerő maximum. A Spotify a maximumban van. Az AirPods csak... nem elég hangos.</p>

<p>Ez az egyik leggyakoribb hangpanasz Mac AirPods-os felhasználóktól. A jó hír: szinte mindig javítható. A rossz hír: körülbelül hat különböző dolog okozhatja, és lehet, hogy mindegyiket ellenőrizni kell.</p>

<h2>1. A fejhallgató biztonsága korlátozza a hangerőt</h2>

<p>Ez a leggyakoribb ok. macOS beépített funkcióval rendelkezik, amely korlátozza a fejhallgató hangerőjét, hogy megvédje a hallásodat.</p>

<p>Nézz ki <strong>Rendszerbeállítások → hang → fejhallgató biztonsága</strong>.</p>

<p>Ha a "Csökkent hangos hang" be van kapcsolva, macOS aktívan korlátozza, mennyire lehet hangossá válni az AirPods. Idővel méri a hangexpozíciót, és csökkenti a hangerőt, ha azt hiszi, túl hangosan hallgattál túl régóta.</p>

<p><strong>Javítás:</strong> Kapcsold ki teljesen a "Hangos hang csökkentése" funkciót, vagy emeld magasabb szintre a decibel küszöböt. Azonnal észreveszed a nagyobb hangerő kapacitást.</p>

<h2>2. A Bluetooth hangerő nincs szinkronban</h2>

<p>A Bluetooth hangzásnak két külön hangerőszabályzója van: az egyik a Mac oldalon, a másik az AirPods oldalon. Ezeknek szinkronnak kellene lennie, de néha kicsúsznak a szinkronból — a Mac 100%-ot mutat, de az AirPods valójában alacsonyabb hangerős jelet kap.</p>

<p><strong>Javítás:</strong> Kapcsold le az AirPods-odat (Rendszerbeállítások → Bluetooth, → kattints az AirPods melletti "i" billentyűre → Kapcsold le), várj öt másodpercet, majd csatlakozzon újra. Ez visszaállítja a hangerő szinkronizálását. Próbáld meg visszatenni az AirPods-okat a tokjukba, csukd be a fedelét, várj tíz másodpercet, majd újra kivedd őket.</p>

<h2>3. Az audio kódek alacsonyabb minőségre váltott</h2>

<p>Amikor az AirPods mikrofonját használod (híváshoz, Siri vagy diktáláshoz), macOS a magas minőségű AAC kodekről a gyengébb minőségű SCO kodekre vált. Az SCO-t telefonhívásokra tervezték — csökkenti a hangminőséget, és befolyásolhatja az észlelt hangerőt is.</p>

<p><strong>Javítás:</strong> Ha nem vagy híváson, de a hang egyszerre hallatszik és gyenge minőségű, kapcsold le és kapcsold vissza az AirPods-odat. macOS vissza kell váltanom az AAC kodekre a zenelejátszáshoz. Ha híváson vagy, ez elvárt viselkedés — a kódek automatikusan visszavált, amikor a hívás véget ér.</p>

<h2>4. Az egyik AirPod csendesebb, mint a másik</h2>

<p>Ha a hangerő alacsonynak tűnik, mert az egyik AirPod észrevehetően halkabb, a probléma fizikai lehet — fülzsír vagy törmelék akadályozza a hangszóró hálóját.</p>

<p><strong>Javítás:</strong> Tisztítsd meg az AirPods-odat óvatosan száraz, szöszmentes törvénnyel. A hangszóróhálóhoz száraz, puha sörtés ecsetet használj. Ne használj folyadékot, sűrített levegőt vagy éles tárgyakat. Nézd meg is <strong>Rendszerbeállítások → Hozzáférhetőség → Audio</strong> — Győződj meg róla, hogy a bal/jobb hangegyensúly csúszka középre van állítva.</p>

<h2>5. Az alkalmazás maga alacsony volumenű</h2>

<p>Néhány alkalmazásnak van saját belső hangerőszabályzója, amely különállóan működik a rendszer hangerőtől. A Spotify, VLC, YouTube és Zoom mind független hangerő csúszkával rendelkeznek. Ha az alkalmazás belső hangerője 50%-os, akkor csak a felét kapod meg — még akkor is, ha macOS és az AirPods 100%-on vannak.</p>

<p><strong>Javítás:</strong> Nézd meg az alkalmazásban lévő hangerőszabályzót, és győződj meg róla, hogy maximálisan van.</p>

<h2>6. A Core Audio rossz állapotban van</h2>

<p>macOS audio démonja (coreaudiod) néha beragadhat olyan állapotban, ahol a Bluetooth hang rosszul vagy csökkentett szinten van irányítva, különösen alvó/ébredés vagy több hangeszköz közötti váltás után.</p>

<p><strong>Javítás:</strong> Nyisd ki a terminált és futás:</p>
<p><code>Sudo killall coreaudiod</code></p>
<p>A hang egy pillanatra elhal, majd újraindul. Az AirPods előfordulhat, hogy normálisabb hangerőn csatlakozik.</p>

<h2>Még mindig túl csendes? Növeld az AirPods hangerőt 100%-on</h2>

<p>Ha már ellenőrizted mind a hat okot, és az AirPods még mindig nem elég hangosak, lehet, hogy hangerő erősítésére van szükség — ami a hangjelet a normál szinten macOS megengedi.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lehetővé teszi, hogy bármelyik alkalmazás hangerejét felemeld <strong>200%</strong>. Ha a Spotify túl csendes az AirPods-on keresztül, húzd a Spotify csúszkáját 150%-ra vagy 180%-ra SoundDial alatt. A hangjel felerősítődik, mielőtt az AirPods-odba kerülne, így hangosabb lesz, mint amennyit az Apple tervezett.</p>

<img src="/apps/sounddial.png" alt="SoundDial az AirPods alkalmazáshangerő növelését Mac-on, alkalmazásonkénti hangerő csúszkákkal, akár 200%-ig is" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Az alkalmazásonkénti boostolás előnye: a csendes alkalmazást anélkül is felerősítheted, hogy minden más hangosabb lenne. Ha a videóhívásod 100%-on rendben van, de a Spotify-nak 170%-ra van szüksége, SoundDial lehetővé teszi, hogy mindegyiket külön beállítsd.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Túl alacsony a Spotify hangerő Mac? Íme minden megoldás",
    description:
      "Spotify maximális hangerőnél, de még mindig túl halk a Mac? Ez az útmutató minden okot lefed — a Spotify beépített limiterétől a macOS beállításokig — és arról, hogyan lehet ezt 100%-ra emelni.",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>A Spotify teljes hangerőn van. A Mac teljes hangerőn van. És még mindig nem elég hangos. Ez az egyik leggyakoribb Spotify panasz Mac-nél, és több oka is van — amelyek többsége nem nyilvánvaló.</p>

<p>Ez az útmutató végigvezeti az összes okot, amiért a Spotify túl csendes a Mac és hogyan javíthatod mindezeket. Beleértve azt is, hogyan lehet a Spotify hangerőt 100%-kal fölé növelni, ha más nem működik.</p>

<h2>Először nézd meg a Spotify saját hangerő csúszkáját</h2>

<p>A Spotify-nak van egy független hangerőszabályzó az alkalmazás jobb alsó sarkában (vagy a képernyő alján a megtervezett lejátszón). Ez a csúszka külön a Mac rendszerhangerejétől. Ha 50%-on van, akkor a Spotify csak a potenciális volumenének felét adja ki — még akkor is, ha a rendszered 100%-on van.</p>

<p><strong>Javítás:</strong> Győződj meg róla, hogy a Spotify alkalmazáson belüli hangerő csúszkája teljesen jobbra van (100%).</p>

<h2>Nézd meg a Spotify hangerő normalizációját</h2>

<p>A Spotify-nak van egy funkciója, amit hívnak <strong>Térfogatnormalizáció</strong> Ez automatikusan állítja a lejátszási hangerőt, így minden sáv nagyjából ugyanazon a szinten szól. Ez azért szolgál, hogy elkerülje a dalok közötti zavaró hangerőugrásokat, de csökkentheti a hangosabb számok összességében a hangerőt is.</p>

<p>Ellenőrizni: Nyisd meg a Spotify → beállításait → lejátszási → <strong>Normalizáld a térfogatot</strong>.</p>

<p>Három lehetőséged van:</p>
<ul>
  <li><strong>Hangos</strong> — a legkisebb normalizáció, legközelebb az eredeti mastering szintekhez</li>
  <li><strong>Normál</strong> — mérsékelt normalizáció (alapértelmezett)</li>
  <li><strong>Csend</strong> — a legtöbb normalizáció tovább csökkenti a térfogatot</li>
</ul>

<p><strong>Javítás:</strong> Ha a Spotify túl halknak szól, vagy teljesen kapcsold ki a normalizációt, vagy állítsd "hangosra". Ez az egyetlen leggyakoribb oka annak, hogy a Spotify váratlanul csendes.</p>

<h2>Nézd meg a Spotify hangminőségi beállításait</h2>

<p>Az alacsonyabb hangminőségi beállítások néha csendesebb lejátszást eredményezhetnek, különösen régebbi hangos hardveren. Menj a Spotify → Beállítások → Audio Quality-hez, és győződj meg róla, hogy a "Nagyon magas" (320 kbps) opciót használod, ha Premium előfizetésed van, vagy az ingyenes szinten a "High" (256 kbps) opciót.</p>

<h2>Ellenőrizd macOS fejhallgató biztonsági korlátait</h2>

<p>Ha fejhallgatót használsz (vezetékes vagy Bluetooth), macOS korlátozhatja a hangerőt. Nézz ki <strong>Rendszerbeállítások → hang → fejhallgató biztonsága</strong>. Ha a "Hangos hang csökkentése" be van kapcsolva, macOS a fejhallgató hangerőjét olyan szintre korlátozza, amit biztonságosnak tart.</p>

<p><strong>Javítás:</strong> Kapcsold ki a "Hangos hang csökkentésé" funkciót vagy emeld meg a decibel-küszöböt. Megjegyzés: ez a beállítás csak a fejhallgató kimenetét érinti, nem a hangszórókat.</p>

<h2>Ellenőrizd a Bluetooth hangerőt</h2>

<p>Ha AirPods-ot vagy Bluetooth hangszórót használsz, van egy külön hangerő réteg. A Bluetooth eszközöknek saját hangerőjük van, amit a Mac és az eszköz között egyeztetnek. Néha ez kicsúszik a szinkronból.</p>

<p><strong>Javítás:</strong> Kapcsold ki és csatlakoztasd újra a Bluetooth eszközöd. Ellenőrizd azt is, hogy az eszköznek van-e saját hangerő gombja — győződj meg róla, hogy azok is maximálisan vannak.</p>

<h2>Reset Core Audio</h2>

<p>Az macOS hangrendszere néha alacsony hangerő állapotban ragadhat, különösen alvó/ébresztős ciklusok vagy kimeneti eszközök közötti váltás után. Az audio daemon újraindítása gyakran megoldja ezt.</p>

<p>Nyisd ki a terminált és futás:</p>
<p><code>Sudo killall coreaudiod</code></p>

<p>A hang egy pillanatra megáll, majd újraindul. Próbáld ki újra a Spotify-t — lehet, hogy hangosabb.</p>

<h2>Emeld a Spotify teljesítményét 100%-on SoundDial</h2>

<p>Ha mindent kipróbáltál a fentiekben, és a Spotify még mindig túl halk, akkor a probléma az lehet, hogy a Spotify maximális kimenete egyszerűen nem elég hangos a beállításaidhoz. Ez gyakori a MacBook beépített hangszóróknál és néhány Bluetooth eszköznél.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lehetővé teszi, hogy bármelyik alkalmazás hangerejét felemeld <strong>200%</strong> — beleértve a Spotify-t is. Lefogja a Spotify hangfolyamát, és túlerősíti az alkalmazás beépített maximumát, anélkül, hogy más alkalmazások hangerőjét befolyásolná.</p>

<img src="/apps/sounddial.png" alt="SoundDial a Spotify hangerő 200%-ra emelni macOS-on, miközben más alkalmazásokat normál hangerőn tart" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Itt a fő különbség: egy rendszerszintű hangerőnövelés <em>mindent</em> hangosabb — értesítések, hívások, rendszerhangok — nem csak a Spotify. SoundDial növeli a Spotify oldalát <em>Függetlenül</em>. Állítsd be a Spotify értékét 160%-ra, miközben a böngésződ 80%-on, a Zoom pedig 100%-on marad.</p>

<h2>Bónusz: automatikusan lecsúszás a zene után hívások közben</h2>

<p>Ha az ellenkezője is igaz — a Spotify túl hangos videóhívások közben — az SoundDial automatikus lecsúsztató funkciója automatikusan lecsökkenti a Spotify értékét, amikor csatlakozol egy Zoom, Teams vagy FaceTime híváshoz. Amikor a hívás véget ér, a Spotify visszatér a korábbi hangerőre. Nincs szükség kézi beállításra.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Hogyan lehet elválasztani a játék hangját a Discordtól Mac",
    description:
      "Játékrobbanások elnyomják a csapattársaidat a Discordon? Íme, hogyan lehet önállóan szabályozni a játék hangját és a hangchatet a macOS-n.",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>A Mac játszol. A játékban robbanás történik. A Discord csapattársaid beszélnek, de a lövöldözés alatt nem hallod őket. Lehalkítod a hangerőt — most már a Discord is halkabb. Feltekered a hangsúlyt — a robbanások ismét fülsiketítőek.</p>

<p>Windowson kinyitod a hangerő keverőt, lecsökkented a játékot 40%-ra, és a Discord 100%-on marad. Mac-n nem lehet. macOS egy hangerőcsúszkát ad mindenhez, így a játék hangja és a hangchat véglegesen össze van kötve.</p>

<p>Ez az útmutató megmutatja, hogyan lehet önálló hangerőszabályozást a játékhoz és a Discordhoz (vagy bármilyen hangalapú csevegéshez) Mac-en.</p>

<h2>Miért ez Mac-specifikus probléma</h2>

<p>A Windowsnak 2006 óta van beépített hangerőkeverője, amivel minden alkalmazás hangerőjét függetlenül lehet szabályozni. macOS soha nem adta hozzá ezt a funkciót. Minden alkalmazás hangja egyetlen streambe keveredik, és az egyetlen vezérlő egy master csúszka, ami mindent egyformán befolyásol.</p>

<p>Ez azt jelenti:</p>
<ul>
  <li>Ha túl hangos a játékod, a lehalkítva a Discordot is lehalkítja</li>
  <li>Ha a Discord túl csendes, akkor a hangosítás is felhívja a játékot</li>
  <li>Nem találsz egyensúlyt, mert mindkét alkalmazás ugyanarra a hangerőre van zárva.</li>
</ul>

<h2>Azok az elkerülő megoldások, amik nem igazán működnek</h2>

<h3>Használd a játékbeli hangerőbeállításokat</h3>
<p>A legtöbb játéknak van hangbeállítási menüje, ahol önállóan csökkentheted a fő hangerőt, a zenét, a hanghatásokat és a hangchatet. Ez segít, de a játékon belül változtatod a beállításokat — vagyis minden alkalommal meg kell szünetelned a játékmenetet, navigálnod a menükben, és minden alkalommal módosítanod kell, amikor a körülmények változnak. És ha váltasz játékot, újrakezded.</p>

<h3>Használd a Discord hangerőszabályzóit</h3>
<p>A Discord lehetővé teszi, hogy a kimenet hangerőt állítsd be a Hang és Videó beállításaiban → beállításokban, és az egyes felhasználók hangerőjét jobb kattintással is állíthatod a nevükre. De ez a Discord belső keverését szabályozza, nem a hangerőt más alkalmazásokhoz képest. Ha a játék túl hangos, a Discord belső hangosítása nem segít, mert a rendszer hangerője mindkettőt egyformán befolyásolja.</p>

<h3>Különböző kimeneti eszközök használata</h3>
<p>Vannak, akik megpróbálják a játék hangját a hangszórókra, a Discordot pedig a fejhallgatóra (vagy fordítva) irányítani. macOS nem teszi ezt egyszerűvé — szükséged lenne egy virtuális hangeszközre és manuális alkalmazásonkénti útvonalválasztásra. És ha egyszerre szól a fejhallgató, hangszórók egyszerre szólnak, legjobb esetben is kínos.</p>

<h2>A valódi megoldás: alkalmazásonkénti hangerőszabályozás</h2>

<p>Amire szükséged van, az az, hogy a játékod hangerőjét függetlenül állítsd be a Discord hangerőjétől. Pontosan ezt csinálja egy alkalmazásonkénti hangerőkeverő.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> A menüsávban helyezkedik el, és minden alkalmazásnak megadja a saját hangerő csúszkát. Beállíthatod a játékodat 35%-ra, a Discordot 100%-ra — vagy bármilyen arányt adhatsz neked. Cserélj egyet, a másik a helyben marad.</p>

<img src="/apps/sounddial.png" alt="SoundDial független hangerő csúszkákat mutat egy játékhoz és Discordot macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Tipikus játék beállítás</h3>
<ul>
  <li><strong>Játék</strong> — 30-50% (elég hangos a bemerüléshez, nem túlterhelő)</li>
  <li><strong>Discord / hangchat</strong> — 90-100% (mindig tisztán hallható a játék hangján)</li>
  <li><strong>Spotify / zene</strong> — 15-25% (finom háttér, nem zavar)</li>
  <li><strong>Böngésző</strong> — némított (nem meglepő automatikus lejátszási videók)</li>
  <li><strong>Slack / értesítések</strong> — tompa (fókuszidő)</li>
</ul>

<h3>Mentsd el profilként</h3>
<p>SoundDial <strong>Térfogatprofilok</strong> Ezt a konfigurációt elmentheted és egy kattintással alkalmazhatod. Hozz létre egy "Gaming" profilt a kedvenc játék/Discord egyensúlyoddal, egy "Work" profilt a zenéhez és hívásokhoz, és azonnal válts közöttük. Nem kell minden alkalommal újraállítani a csúszkákat, amikor leülsz játszani.</p>

<h3>Hangerő növelése csendes hangbeszélgetéshez</h3>
<p>Néha a probléma nem az, hogy a játék túl hangos — hanem az, hogy a Discord túl csendes. Néhány csapattársnak rossz a mikrofonja, vagy a Discord kimenete alacsonyabb, mint más alkalmazásoknál. SoundDial lehetővé teszi, hogy bármelyik alkalmazás hangerejét felemeld <strong>200%</strong>, így a Discordot a normál maximumon túl fel tudod erősíteni anélkül, hogy a játék hangerőjét érintenéd.</p>

<h2>Bármilyen játékkal és bármilyen hangbeszélgetéssel működik</h2>

<p>SoundDial minden olyan alkalmazással működik, amely hangot készít macOS-en. Nem számít, hogy Steamen, App Store-on, Epic Games-en vagy böngészős játékon játszol. Nem számít, hogy Discordot, TeamSpeaket, Mumble-t vagy FaceTime-ot használsz. Ha hangot ad ki, SoundDial irányítani tudja.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Miért nincs Mac olyan hangerőkeverő, mint a Windows?",
    description:
      "A Windows 2006 óta alkalmazva a hangerőszabályzó rendszerrel rendelkezik. 2026 van, és macOS még mindig nem van. Itt az igazi ok — és hogyan lehet egyet szerezni.",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Minden Windows verzió a Vista (2006) óta tartalmazott egy hangerőkeverőt. Jobb kattintással a hangszóró ikonjára, rákattints a "Volume Mixer"-re, és minden alkalmazásnak megvan a saját hangerő csúszkája. A Chrome-ot elnémíthatod anélkül, hogy a Spotify-t befolyásolnád. Le tudod engedni a Discordot anélkül, hogy hozzáérnél a játékhoz.</p>

<p>On macOS? Egy csúszkát. Ennyit kapsz. Húsz év Mac frissítés — Ventura, Sonoma, Sequoia, Tahoe — és az Apple soha nem adott hozzá alkalmazásonkénti hangerőszabályzót.</p>

<p>Az emberek folyamatosan felteszik ezt a kérdést: <em>Miért nincs Mac hangerőkeverő?</em></p>

<h2>Ez nem technikai korlát</h2>

<p>Tisztázzuk ezt: macOS teljesen tudod alkalmazásonként hangerőszabályzót használni. Az alap hangrendszer — <strong>Core Audio</strong> — támogatja folyamatonkénti hanglejátszást, útvonalat és erősítés beállítását API szinten. Az Apple bemutatta a <strong>Audio Tap API</strong> macOS 14-ben (Sonoma), ami még könnyebbé teszi a fejlesztők számára az egyes alkalmazások hangfolyamainak elfogását és módosítását.</p>

<p>Harmadik féltől származó fejlesztők évek óta építenek alkalmazásonkénti volumenkeverőket ezekkel az API-kkal. A technológia létezik. Az Apple egyszerűen nem épített egy felhasználóra néző verziót.</p>

<h2>Akkor miért nem építette meg az Apple ezt?</h2>

<p>Az Apple soha nem magyarázta el nyilvánosan az okot. De ha megnézzük a tervezési mintákat, a válasz elég egyértelmű: <strong>Az Apple az egyszerűséget helyezi előtérbe a teljesítményfelhasználó funkciókkal szemben.</strong></p>

<p>Egy hangerőcsúszka egyszerűbb, mint a tizenkettő. Könnyebb elmagyarázni, könnyebb megtanulni, és nulla konfigurációt igényel. Egy felhasználónak, aki egyszerre csak egy dolgot csinál — zenét hallgat VAGY hívást fogad VAGY videót néz — egy csúszka jól működik. Az Apple tervez először ennek a felhasználónak.</p>

<p>Van egy filozófiai érv is: az Apple úgy véli, hogy az alkalmazásoknak maguknak kell kezelniük a hangjukat. Ha a Spotify túl hangos, halkítsd le a Spotify-ban. Ha a Zoom túl halk, tekerd fel a Zoomban. Az operációs rendszernek nem kellene közvetítenie.</p>

<p>A probléma az, hogy ez a filozófia nem egyezik a valósággal. 2026-ban mindenki több feladatot is végez a hangzással:</p>

<ul>
  <li>Munka közben szóló zene</li>
  <li>Videóhívások értesítésekkel csipognak</li>
  <li>Böngészőfülek automatikusan lejátszanak hirdetéseket</li>
  <li>Játék Discorddal</li>
  <li>Podcastok az egyik fülben, Slack a másikban</li>
</ul>

<p>"Csak állítsd be minden alkalmazásban" azt jelenti, hogy hat alkalmazás között válthat, hat különböző hangerőszabályzót keresel (amelyek közül néhány nem létezik), és ezt naponta többször is megcsinálod. Ez az egyszerűség ellentéte.</p>

<h2>Hozzáadja az Apple valaha is?</h2>

<p>Nincs jel arra, hogy az Apple hangerőkeverőt tervezne hozzáadni a közelgő macOS megjelenésben. A funkció nem jelent meg semmilyen macOS béta, szabadalmi bevallás vagy WWDC útitervben. Az Apple vezérlőközpontja a menüsávban még mindig csak az egyetlen rendszerszintű hangerő csúszkát mutatja.</p>

<p>Lehetséges, hogy az Apple később hozzáadja — olyan funkciókat vettek be, amelyeket korábban elutasítottak (widgetek, ablakcsempész, többablakos iPad). De az Apple-re való várás azt jelenti, hogy végtelenül várak.</p>

<h2>Hogyan lehet most hangerőkeverőt Mac kapcsolni</h2>

<p>A válasz egy harmadik féltől származó menüsáv alkalmazás. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> egy natív macOS hangerőkeverő, amely pontosan azt csinálja, amit a Windows hangerőkeverője csinál — plusz még többet.</p>

<img src="/apps/sounddial.png" alt="SoundDial — a hangerőkeverő a macOS számára, amely alkalmazásonként megjeleníti a hangerő csúszkákat a menüsávban" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Amit kapsz:</p>

<ul>
  <li><strong>Alkalmazásonkénti volumencsúszkák</strong> — minden futó alkalmazás saját csúszkát kap, 0%-tól 200%-ig</li>
  <li><strong>Alkalmazás-alapú mute</strong> — egy kattintás, hogy elnémítsd bármelyik alkalmazást, újra kattints a némítás megszüntetéséhez</li>
  <li><strong>Térfogatprofilok</strong> — mentsd el a konfigurációkat különböző helyzetekhez (Munka, Fókusz, Játék), és egy kattintással válts</li>
  <li><strong>Automatikus leugrás</strong> — a háttérhang automatikusan csökken, amikor csatlakozol egy híváshoz, és visszaáll, amikor leteszed a telefont</li>
  <li><strong>Hangerő növelése 200%-ra</strong> — erősítik a csendes alkalmazásokat a normál maximumuk fölött</li>
  <li><strong>Billentyűs billentyűk</strong> — kapcsold be a keverőt vagy némítsd el az összes alkalmazást egy gyorsbillentyűvel</li>
  <li><strong>Kimeneti eszköz kapcsolása</strong> — váltson hangszórók, fejhallgatók és külső eszközök között ugyanarról a panelről</li>
  <li><strong>Térfogatmemória</strong> — minden alkalmazás hangerője az újraindítások között megjegyezik</li>
</ul>

<p>Ez az a funkció, amit az Apple-nek húsz évvel ezelőtt kellett volna megépítenie. Egyszeri vásárlás a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Nincs előfizetés. macOS 14,2+.</p>

<p>A hangerőkeverőnek macOS be kellett volna építenie.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac túl alacsony a hangerő? Hogyan lehet a hangzást 100%-on fölé emelni",
    description:
      "A Mac teljes hangerőn van, és még mindig túl halk. Íme, miért történik ez, és hogyan lehet 200%-ra erősíteni a hangot külső hangszórók nélkül.",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>A Mac hangerőd 100%-on van. A csúszka egészen jobbra van. És még mindig nem elég hangos. A podcast túl csendes. A videóhívás résztvevője úgy hangzik, mintha suttogna. A YouTube videót túl alacsonyan vették. Kihasználtad a maximumot — és ez nem elég.</p>

<p>Ez az egyik leggyakoribb hangpanasz Mac esetében, különösen a MacBook Air és a régebbi MacBook Pro modellek beépített hangszóróival. A hangszórók fizikailag kicsik, és néhány tartalom egyszerűen alacsonyabb szinten van rögzítve, mint mások.</p>

<p>Íme, miért történik ez, és hogyan lehet ténylegesen megoldani — beleértve azt is, hogyan növelheted a Mac volumenét a 100%-os határ fölé.</p>

<h2>Miért hangzik a Mac túl halkan teljes hangerőn</h2>

<p>Több oka is van, amiért a Mac nem elég hangos még maximális hangerőn sem:</p>

<h3>1. Maga a tartalom csendes</h3>
<p>Nem minden hang ugyanolyan szinten masterált. Egy profi podcast -3 dB-re érhet csúcsot, míg egy hétköznapi YouTube-videó vagy egy felvett Zoom hívás -20 dB-re érhet csúcsot. A különbség óriási. Ha a rendszer hangerő 100%-on van, a csendes tartalom csendes marad — macOS csak az eredeti jelszintig tudnak erősíteni.</p>

<h3>2. A MacBook hangszóróknak fizikai korlátai vannak</h3>
<p>A MacBook Air vagy a 13" MacBook Pro beépített hangszórói kicsik. A hordozhatóságra tervezték, nem a térfogatra. Az Apple nagyobb MacBook Pro modelljei (14" és 16") jóval jobb hangszórókkal rendelkeznek, de még nekik is van mennyezetük. Ha hozzászoktál a külső hangszórókhoz vagy fejhallgatókhoz, a beépített hangszórók gyengének tűnnek.</p>

<h3>3. Bluetooth hangerő le van zárva</h3>
<p>Néhány Bluetooth fejhallgatónak és hangszórónak van saját hangerő plafonja, ami külön a macOS-tól. Még ha macOS 100%-ot is mutat, a Bluetooth eszköz nem feltétlenül a maximumján van. Ez különösen gyakori az AirPodsnál, ahol az EU hangerőkorlátozó vagy a Beállítások → Hang → Fejhallgató Biztonsági funkciója korlátozhatja a kimenetet.</p>

<h3>4. Az egyes alkalmazások mennyisége alacsony</h3>
<p>Néhány alkalmazásnak van saját belső hangerőszabályzója, amely külön a rendszer hangerőtől. Ha a Spotify alkalmazáson belüli hangerő 50%, a rendszer hangereje pedig 100%, akkor gyakorlatilag 50%-on hallgatsz. A Zoom gyakran alapértelmezett konzervatív hangerőt használ a hívásoknál.</p>

<h2>Beépített javítások, amelyeket először érdemes kipróbálni</h2>

<h3>Ellenőrizd a fejhallgató biztonsági korlátait</h3>
<p>Nézz ki <strong>Rendszerbeállítások → hang → fejhallgató biztonsága</strong>. Ha a "Hangos hang csökkentése" engedélyezett, macOS aktívan korlátozza a hangerőt, hogy megvédje a hallásodat. Ezt kikapcsolhatod vagy megemelheted a küszöbértéket. Ez csak a fejhallgatót érinti — nem érinti a hangszóró kimenetet.</p>

<h3>Ellenőrizd a Bluetooth készülék hangerőt</h3>
<p>Néhány Bluetooth eszköz független hangerőszabályzóval rendelkezik. AirPods esetén győződj meg róla, hogy a Mac és az AirPods hangerője maximálisan van. Harmadik féltől származó Bluetooth hangszórók esetén ellenőrizd, van-e saját hangerő gombja vagy alkalmazása.</p>

<h3>Nézd meg az alkalmazáson belüli volument</h3>
<p>Nyisd meg a túl csendes alkalmazást, és keresd meg a saját hangerő csúszkát. A Spotify-ban van egy a lejátszó sávban. A VLC-ben van egy a lejátszási vezérlés alatt. A YouTube-on van egy videólejátszó. Győződj meg róla, hogy ezek 100%-on vannak, mielőtt arra gondolnának, hogy a Mac a probléma.</p>

<h3>Reset Core Audio</h3>
<p>Néha a macOS hangrendszer rossz állapotba kerül alvó/ébresztési ciklusok vagy eszközváltás után. Nyisd ki a terminált és futás:</p>
<p><code>Sudo killall coreaudiod</code></p>
<p>Ez újraindítja az audio démont. A hangod egy pillanatra elhallgat, majd visszatér, néha normálisabb szinten.</p>

<h2>Hogyan lehet 100%-on fölé növelni a hangerőt</h2>

<p>Ha mindent ellenőriztél fent, és a Mac még mindig túl halk, akkor hangerő erősítésre van szükséged — a hangzás benyomásának képességére. <em>fent</em> Az a 100%-os plafon, amit macOS rá tesz.</p>

<p>A hangerőnövelés úgy működik, hogy elfogja a hangjelet, mielőtt elérné a hangszórókat, és megszorozza annak amplitúdóját. 150%-os magasságban minden hangmintát 1,5-szer hangosabb, mint az eredeti. 200%-nál ez megduplázódott. Ez bizonyos tartalmak esetén extrém szinten enyhe torzítást okozhat, de csendes hangnál ez az egyetlen módja, hogy ténylegesen hallható legyen.</p>

<h3>SoundDial: alkalmazásonkénti volumennövelés akár 200%-ra is</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Minden alkalmazásod Mac egy független volumencsúszkát ad, ami 0%-ról a %-ra megy <strong>200%</strong>. Ha egy adott alkalmazás túl csendes – egy podcastlejátszó, böngészőfül, videóhívás –, akkor csak azt az alkalmazást 100%-nál magasabbra lehet állítani anélkül, hogy bármi máshoz nyúlnál.</p>

<img src="/apps/sounddial.png" alt="SoundDial hangerőnövelés — alkalmazásonként hangerőszabályzó, 200%-os erősítéssel macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ez különösen hasznos a következők számára:</p>
<ul>
  <li><strong>Csendes podcast alkalmazások</strong> — Néhány játékos túl alacsonyra ér a maximumot, főleg ha a podcastokat nem optimális körülmények között rögzítik</li>
  <li><strong>Videóhívások csendes résztvevőkkel</strong> — Boostold a Zoomot vagy a Teams-t, ha valaki mikrofonja alacsony, anélkül, hogy a zenéd hangosabb lenne</li>
  <li><strong>Böngészőfülek</strong> — a YouTube videók, webalkalmazások és beágyazott média gyakran alacsonyabb hangerővel játszódik, mint a dedikált médiaalkalmazások</li>
  <li><strong>Régi felvételek</strong> — az archív hang, a régi zene és a régebbi videótartalmak gyakran alacsonyabb szinten vannak mesterelve</li>
</ul>

<p>A fő előnye a rendszerszintű volumennövelőkkel szemben az, hogy SoundDial gyorsítók <em>alkalmazásonként</em>. A csendes alkalmazást 180%-ra lehet emelni, miközben minden más normál szinten marad. Egy rendszerszintű erősítő mindent egyenlően erősítené, így a már amúgy is hangos alkalmazásokat fájdalmasan hangossá teszi, míg a halk kissé kevésbé lesz.</p>

<h2>Amikor a külső megoldások jobbak</h2>

<p>A hangerőnövelésnek vannak határai. Ha egy MacBook Air beépített hangszóróiból akarsz megtölteni egy szobát, egyetlen szoftver sem tudja felülmúlni a hangszórók fizikai méretét. Ebben az esetben:</p>

<ul>
  <li><strong>Vezetékes fejhallgató</strong> — teljesen megkerülni a hangszórók korlátozásait, és a legtöbb fejhallgató hangosabb lehet, mint a beépített hangszórók</li>
  <li><strong>Külső hangszórók</strong> — még egy olcsó USB vagy Bluetooth hangszórópár is felülmúlja a beépített MacBook hangszórókat nyers hangerőben</li>
  <li><strong>USB audio interfész</strong> — professzionális használatra egy dedikált hanginterfész tiszta, erős jelet biztosít a stúdiómonitoroknak vagy fejhallgatóknak</li>
</ul>

<p>De a mindennapi esetre — egy túl csendes böngészőfül, egy hívás, ahol valaki motyog, egy podcast, amit egy szekrényben vettek fel — a szoftver hangerő növekedése <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ez a leggyorsabb megoldás. Kattints a menüsáv ikonra, húzd a csúszkát 100%-on túlra, kész.</p>

<p>Egyszeri vásárlás a <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Nincs előfizetés. macOS 14,2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Hogyan lehet automatikusan lecsökkenteni a zenét Zoom hívások közben Mac",
    description:
      "Minden alkalommal, amikor elindul egy Zoom-hívás, sietve próbálod megállítani a Spotify-t. Van egy jobb megoldás — az automatikus lecsúszás automatikusan lecsökkenti a zenét, amikor a mikrofon bekapcsol.",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>Kezdődik a hívás. Megosztod a képernyődet. A zenéd még mindig pörgősen szól. Kétségbeesetten váltasz Spotify-ra, megnyomod a szünetet, majd visszaváltasz a Zoomra — de mindenki már hallotta a lejátszási listádat. Ez mindenkivel előfordul, és azért, mert nincs kapcsolata macOS "egy most kezdődött hívás" és a "talán lecsökkenteni a zené" között.</p>

<p>Néhány telefonon ez automatikusan működik — a zene megáll vagy elcsúszik, amikor hívás érkezik. Mac-n egyedül vagy. Hacsak nem állítasz be automatikus leugrást.</p>

<h2>Mi az a hang leugrása?</h2>

<p><strong>Hang leugrás</strong> azt jelenti, hogy automatikusan csökkenti a háttérhangot, amikor valami fontosabb történik — például egy hanghívás. A kifejezés a műsorszóró mérnökségből származik, ahol a háttérzene "elbúj" a bemondó hangja alatt.</p>

<p>A gyakorlatban ez így működik:</p>
<ol>
  <li>50%-os hangerővel hallgatod a zenét</li>
  <li>Csatlakozol egy Zoom-híváshoz</li>
  <li>A zenéd automatikusan 15%-ra csökken</li>
  <li>A hívást tisztán hallod anélkül, hogy kézzel állítanád be</li>
  <li>A hívás véget ér</li>
  <li>A zenéd automatikusan visszatér 50%-ra</li>
</ol>

<p>Nincs alkalmazásváltás. Nincs megállás. Nem felejted el a hívás után visszakapcsolni a zenét. Teljesen automatikus.</p>

<h2>Van macOS beépített hang lehúzás?</h2>

<p>Nem. macOS nincs automatikus hang lehúzó funkciója. Nincs semmi a Rendszerbeállításokban, Akadálymentesség vagy Fókusz módokban, ami összekötné a "mikrofon aktív" és a "mélyebb háttérhang" funkciót. Az Apple egyszerűen nem építette ezt.</p>

<p>Van egy Accessibility beállítás, amit "Play Stereo audio as mono" néven, valamint opciók vizuális villanásriasztásokhoz, de nincs semmi, ami automatikusan állítana hangerőt attól függően, hogy hívásban vagy-e.</p>

<h2>A manuális alternatívák (és miért fájdalmasak)</h2>

<h3>Minden hívás előtt kézzel állítsd meg zenét</h3>
<p>Ez az, amit a legtöbben csinálnak. Működik — amíg el nem felejtesz. Vagy amíg valaki váratlanul nem hív. Vagy amíg egymás után hívások nem lesznek, és naponta tizenkétszer szüneteled meg és szüneted a Spotify-t. Ez azt is jelenti, hogy nincs háttérzene hívások alatt, még akkor sem, ha alacsony hangerőre szeretnénk.</p>

<h3>Használj Fókusz módot minden elnémítására</h3>
<p>Létrehozhatsz egy "Meeting" fókuszmódot, amely blokkolja az értesítési hangokat. De a fókusz módok nem szabályozzák a médialejátszás hangerőjét. A zenéd teljes hangerővel szól még Ne zavard módban is — a fókusz csak az értesítéseket nyomja el.</p>

<h3>Hangerőprofilok beállítása kézzel</h3>
<p>Hozz létre egy "hívás" beállítást, ahol minden hívás előtt mindent leengedsz, kivéve a kommunikációs alkalmazást, kézzel csökkented. Ez működik, de minden alkalommal meg kell jegyezned és kézzel váltanod. És utána vissza kell váltanod.</p>

<h2>Automatikus leugrás SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> beépített automatikus lehúzás funkcióval rendelkezik, ami pontosan azt teszi, amit macOS natív módon kellene. Így működik:</p>

<h3>Hogyan érzékeli a hívásokat</h3>
<p>SoundDial figyeli a Mac mikrofon állapotát — ugyanazt a jelzőt, ami a menüsávban a narancssárga pontot mutatja, amikor egy alkalmazás használja a mikrofonodat. Amikor észleli, hogy egy kommunikációs alkalmazás aktiválta a mikrofonodat, tudja, hogy elkezdődött a hívás.</p>

<p>Minden nagyobb kommunikációs alkalmazással működik:</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Laza</strong> (összebújás és kiáltás)</li>
  <li><strong>Google Meet</strong> (a Chrome révén)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Mi történik, amikor hívás kezdődik</h3>
<p>Amint a mikrofonod aktiválódik egy hívásra, SoundDial automatikusan csökkenti az összes nem kommunikációs alkalmazás hangerőjét egy olyan szintre, amit te állítogatsz — az alapértelmezett 30%. A híváshangod teljes hangerőn marad. A háttérzene egy finom szintre csökken. Az értesítési hangok elcsendesednek.</p>

<p>Egy kis zöld jelző jelenik meg SoundDial fejlécében, hogy megerősítse az automatikus lehúzás aktívságát.</p>

<h3>Mi történik, amikor a hívás véget ér</h3>
<p>Amikor leteszed a telefont és a mikrofon kikapcsol, SoundDial visszaállítja az összes alkalmazás hangerőt pontosan a hívás előtti állapotra. A zenéd visszajön 50%-ig (vagy bárhol, ahol volt). Nincs szükség kézi beállításra.</p>

<h3>A kacsa szint konfigurálása</h3>
<p>SoundDial beállításaiban beállíthatod a <strong>kacsa szint</strong> — mennyi háttérhang csökken egy hívás során. A csúszka 10%-tól (alig hallható) és 80%-ig (még mindig eléggé jelen van) változik. Az alapértelmezett 30% a legtöbb embernek jól működik: a zene észrevehető, de nem zavarja a beszélgetést.</p>

<img src="/apps/sounddial.png" alt="SoundDial automatikus lecsúszó funkció, amely automatikusan csökkenti a zene hangerőjét egy Zoom hívás közben Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Miért jobb az automatikus leugrás, mint a megállás</h2>

<p>A zene megállítása hívás előtt egyszerűnek tűnik, de az automatikus lecsúszás több szempontból is jobb:</p>

<ul>
  <li><strong>Ez automatikus.</strong> Sosem felejtesz el. Nem kell kapkodni, ha váratlan hívás érkezik.</li>
  <li><strong>Te tartod a háttérzenét.</strong> Sokan inkább a csendes háttérzenét részesítik előnyben hívások közben, mint a csend. Az automatikus ducking lehetővé teszi, hogy kényelmesen tartsd a játékot.</li>
  <li><strong>Több alkalmazást kezel.</strong> Nem csak a zene – értesítési hangok, böngészőfülek és minden más hangforrás egyszerre kerül ki.</li>
  <li><strong>Tökéletesen helyreáll.</strong> Amikor a hívás véget ér, minden alkalmazás visszatér a korábbi hangerőhöz. Nem kell újraigazítani.</li>
  <li><strong>Ez működik egymás utáni hívásokhoz.</strong> Ha három találkozód van egymás után, az automatikus lecsúszás mindet kezeli anélkül, hogy bármit is megérintesz.</li>
</ul>

<h2>A beállítás kevesebb mint egy perc alatt</h2>

<ol>
  <li>Telepítés <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial a Mac App Store-ból</a></li>
  <li>Nyisd meg a Beállításokat → Automatikus ducska fület</li>
  <li>Engedélyezd az automatikus leekelést</li>
  <li>Állítsd be a kacsa szint csúszkát a saját ízlésedre</li>
  <li>Ennyi — az automatikus lehúzás aktív</li>
</ol>

<p>Amikor legközelebb csatlakozol egy Zoom, Teams vagy FaceTime híváshoz, a háttérhangod automatikusan csökken. Amikor letesz, visszajön. Egyszeri vásárlás, előfizetés nélkül.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Hogyan lehet elnémítani egy alkalmazást Mac anélkül, hogy mindent elnémítanánk",
    description:
      "A Slack csipog. Híváson vagy. Szeretnéd elnémítani a Slack-et, de folyamatosan hallod a hívásodat. macOS nem engedi meg — így csináld mindenesetre.",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>Zoom híváson vagy. A Slack folyamatosan értesítési hangokat ad. Egy YouTube fül, amit elfelejtettél, elkezd automatikusan lejátszódni. Megnyomod a némító gombot — és most már a hívásodat sem hallod. macOS némít <em>mindent</em>. Nincs beépített mód arra, hogy csak egyetlen alkalmazást némíts.</p>

<p>Windowson jobb kattintással kattintasz a hangszóró ikonra, megnyitod a hangerőkeverőt, és a Slack melletti némítás gombra kattintasz. Kész. A Slack csendes, minden más tovább szól. macOS ennek nincs megfelelője.</p>

<p>Ez az útmutató minden lehetséges módszert lefed egy adott alkalmazás némítására Mac — a beépített megoldásoktól kezdve egészen az egyetlen megoldásig, amely ténylegesen működik, mint egy rendes némító gomb.</p>

<h2>Miért nem tudod macOS egyes alkalmazásokat némítani</h2>

<p>macOS az audio egyetlen streamként kezeli. Minden alkalmazás hangja összekeveredik, mielőtt elérné a hangszórókat, és az Apple egyetlen hangerőszabályzó az utolsó kevert kimeneten működik. Nincs mód arra, hogy belépj ebbe a keverékbe, és elnémítsd az egyik alkalmazást anélkül, hogy a többieket befolyásolnánk.</p>

<p>Ez nem hardveres korlát — ez egy szoftvertervezési döntés. Az macOS Core Audio keretrendszere támogatja az API-szinten, folyamatonkénti hangvezérlést. Az Apple egyszerűen nem épített felhasználóra nyitott módot a hozzáférésre.</p>

<h2>Beépített megoldások (és azok korlátai)</h2>

<h3>1. Kapcsold ki az értesítéseket az alkalmazásban</h3>
<p>Nézz ki <strong>Rendszerbeállítások → értesítések</strong> És keresd meg azt az alkalmazást, amit le akarsz hallgatni. Le tudod kapcsolni a hangokat az értesítéseknél, vagy teljesen kikapcsolhatod az értesítéseket.</p>
<p><strong>A csavar:</strong> Ez csak az értesítési hangokra működik. Ha az alkalmazás más hangokat is ad ki — médialejátszás, hívás hangja, alkalmazáson belüli hangok — ez nem érinti őket. És a vizuális értesítéseket is elveszíted, nem csak a hangokat.</p>

<h3>2. Használj Fókusz módot</h3>
<p>macOS Fókusz módok (Ne zavard, Munka, Személyes stb.) képesek elnyomni az értesítési hangokat bizonyos alkalmazásokból. Be lehet állítani, mely alkalmazások értesíthetnek minden Fókusz módban.</p>
<p><strong>A csavar:</strong> A fókusz módok az értesítésekről szólnak, nem a hangról. Nem némítják le a Slack huddle-t, a böngészőfület, amely hangot játszik, vagy semmilyen médialejátszást. Minden módhoz előzetes beállítást is igényelnek — nem lehet csak úgy "most elnémítani ezt az alkalmazást".</p>

<h3>3. Zárd be az alkalmazást</h3>
<p>A nukleáris opció. Ha teljesen kilépsz a Slackből, nem tud hangot adni. Ez azt is jelenti, hogy nem láthatsz üzeneteket, amíg újra nem nyitod meg.</p>
<p><strong>A csavar:</strong> Nem akarod kilépni az alkalmazásból — szeretnéd <em>Használd tovább</em> anélkül, hogy hallaná. Óriási különbség van a "néma" és a "közel" között.</p>

<h3>4. Használd az alkalmazás saját beállításait</h3>
<p>Néhány alkalmazás valahol a beállításokban elrejtve van egy "hangok némítása" vagy "értesítések némítása" beállítása. A Slack a Beállítások → Értesítések → Hang és megjelenés alatt található. A Spotify-ban hangszóró ikon van a lejátszóban.</p>
<p><strong>A csavar:</strong> Minden alkalmazás beállításait külön-külön kell megtalálni és navigálni. Sok alkalmazásban egyáltalán nincs ez a lehetőség. És a "némított" és "nem némított" között váltani azt jelenti, hogy minden alkalommal visszatérünk a beállításokhoz, nem csak egy gombra kattintanánk.</p>

<h2>Az igazi megoldás: egy alkalmazásonkénti némító gomb</h2>

<p>Amit valójában szeretnél, az nagyon egyszerű: egy némító gomb minden alkalmazás mellett, ami azonnal elnémítja azt, anélkül, hogy bármi mást befolyásolna. Kattints a némításhoz, újra kattints a némításhoz. Az alkalmazás folyamatosan fut, látod a tartalmát — egyszerűen nem hallod.</p>

<p>Pontosan ezt csinálja egy alkalmazásonkénti hangerőkeverő. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> A menüsávban helyezkedik el, és minden futó alkalmazást megmutat saját hangerő csúszkával és némítás gombbal.</p>

<img src="/apps/sounddial.png" alt="SoundDial az alkalmazásonként megjelenített némítás gombok minden alkalmazásnál a macOS menüsávban" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Egy alkalmazás elnémításához:</p>
<ol>
  <li>Kattints a menü sávban a SoundDial ikonra</li>
  <li>Keresd meg azt az alkalmazást, amit el akarsz némítani</li>
  <li>Kattints a mellette lévő hangszóró ikonra</li>
</ol>

<p>Ennyi. Az alkalmazás némított. Minden más ugyanazon a hangerőn szól, amilyen volt. Kattints újra a hangszóró ikonra, hogy visszakapcsold a némítást — a hangerő pontosan visszaáll a korábbi helyére.</p>

<h2>A némításon túl: alkalmazásonkénti hangerőszabályzó</h2>

<p>Ha van egy alkalmazásonkénti mixered, rájössz, hogy a némítás csak a legszélsősége annak, amit valójában szeretnél. A legtöbbször nem akarod teljesen elhallgattatni az alkalmazást — szeretnéd megcsinálni <em>csendesebb</em>.</p>

<ul>
  <li>Slack értesítések 15%-on — elég finomak, hogy ne szakítsák meg, elég jelen, hogy észrevegyék</li>
  <li>A zene 30%-on — háttérszint, ami nem versenyez a beszélgetéssel</li>
  <li>Böngésző 60% — kényelmes videólejátszáshoz</li>
  <li>Zoom 100%-on — teljes hangerő a fontos híváshoz</li>
</ul>

<p>SoundDial minden alkalmazásnak egy csúszkát ad 0%-tól 200%-ig. Az alkalmazásokat lehet csendesebbé tenni, mint a beépített minimum, vagy hangosabb, mint a beépített maximum. És <strong>Térfogatprofilok</strong>, elmentheted a kívánt konfigurációt, és egyetlen kattintással válthatsz előbeállítások között — "Meeting" mód, "Fókusz" mód, "Zene" mód.</p>

<p>Az automatikus lecsúsztatás funkció még ennél is tovább megy: amikor hívást indítasz, SoundDial automatikusan mindent lecsökkent, kivéve a kommunikációs alkalmazást. Amikor véget ér a hívás, minden visszatér. Sosem nyúlsz hozzá a csúszkához.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a> — 14,99 € egyszeri vásárlás, előfizetés nélkül, macOS 14,2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Hangerőkeverő Mac-hez: a hiányzó funkció, macOS még mindig nincs meg",
    description:
      "A Windowsnak 2006 óta van hangerőkeverője. Íme, miért nem macOS még mindig – és ez a legjobb módja annak, hogy 2026-ban alkalmazásonként hangerőszabályt kapj Mac készülékenként.",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>Bármelyik Windows PC-n jobb kattintással a hangszóró ikonjára, és megtalálod a Hangerőkeverőt — egy panelt, amely minden jelenleg hangot előállító alkalmazást megjelenít, mindegyiknek saját független hangerő csúszkája. A Spotify értékét 20%-ra csökkentheted, miközben a Zoom hívásodat 100%-on tartod. A Chrome-ot elnémíthatod anélkül, hogy bármi máshoz nyúlsz. Már a Windows Vista óta, 2006 óta ott van.</p>

<p>Most ugyanezt csináld egy Mac-n. Kattints a hangikonra a menüsávban. Van egy csúszkát. Ennyi. Egy csúszka, ami egyszerre irányít mindent. Minden alkalmazás, minden értesítés, minden rendszer hang — mind összezárva.</p>

<p>Ez nem egy speciális panasz. Ez az egyetlen legkeresettebb hangfunkció macOS-ben, és az Apple húsz éve figyelmen kívül hagyta.</p>

<h2>Mit is csinál valójában a hangerőkeverő</h2>

<p>Egy hangerőkeverő ad <strong>Minden alkalmazáshoz független hangszabályozás</strong> a számítógépedre. Egyetlen master csúszka helyett egy slidert kapsz egy alkalmazásonként. Minden csúszka csak az adott alkalmazás hangkibocsátását érinti.</p>

<p>Így néz ki ez a gyakorlatban:</p>

<ul>
  <li><strong>Spotify</strong> 25%-on — háttérzene kényelmes szinten</li>
  <li><strong>Zoom</strong> 100%-os szinten — hallgasd meg a találkozó minden szavát</li>
  <li><strong>Laza</strong> Némított — nincs értesítési csengés a fókusz alatt.</li>
  <li><strong>Safari</strong> 60%-on — YouTube videó mérsékelt hangerőn</li>
  <li><strong>Rendszer hangok</strong> 10%-nál — finom visszajelzés anélkül, hogy megijesztene</li>
</ul>

<p>Mindegyik egyszerre fut, mindegyik a maga hangerőjében. Egyet cserélj le, és semmi más nem mozdul. Ez az, amit a hangerőkeverő csinál, és ez macOS nincs meg.</p>

<h2>Miért nem épített Apple ilyet</h2>

<p>Ez nem technikai korlát. Az macOS audio keretrendszere — a Core Audio — teljes mértékben támogatja folyamatonkénti hangirányítást és hangerőszabályozást API szinten. Az Apple ezeket a képességeket belsőken használja. Csak nem tették ki őket a felhasználóknak.</p>

<p>A valószínű ok az Apple tervezési filozófiája: kevesebb lehetőség, egyszerűbb felület. Egy csúszka tisztább, mint tizenkettő. És ha valaki egyszerre csak egy dolgot csinál — zenét hallgat VAGY hívást fogad VAGY videót néz — egy csúszka rendben van.</p>

<p>De 2026-ban nem így használják az emberek a számítógépeket. A távmunka azt jelenti, hogy egyszerre telefonálsz, ahol zene szól, Slack csipog, és egy böngészőfül automatikusan lejátszik egy videót, mindezt egyszerre. A "egy csúszka mindenhez" modell teljesen meghibásdik, ha öt hangforrás verseng a füledért.</p>

<h2>A macOS megoldások (és miért maradnak elmaradva)</h2>

<h3>Használd az alkalmazások beépített hangerőszabályzóját</h3>
<p>A Spotify-nak van egy hangerő csúszkája. A VLC-nek van egy. A QuickTime-nak van ilyen. Ez azonban azt jelenti, hogy minden alkalmazásra külön-külön válthatsz, megtalálod a hangerőszabályzót, állítsd be, majd visszaválts. Több tucat különböző helyen van szórva, és a legtöbb alkalmazásban — Slack, Mail, Safari, Chrome — még csak nincs is ilyen.</p>

<h3>Használd a "Ne zavard" opciót az értesítések elnémítására</h3>
<p>A fókuszmódok elnyomhatják az értesítési hangokat, de binárisak — mindent vagy semmit. Nem mondhatod, hogy "tartsd meg a Slack hangokat, de tedd halkabbá őket." A fókusz módok pedig egyáltalán nem érintik a médiát vagy a híváshangerőt.</p>

<h3>Használd az Audio MIDI beállítást</h3>
<p>Ez a beépített segédeszköz kezeli az audio eszközöket és a mintavételi sebességeket. Ennek semmi köze az alkalmazásonkénti volumenhez. Ez egy eszközkonfigurációs eszköz, nem keverő.</p>

<h3>Többkimenetű eszközök létrehozása</h3>
<p>A hangkimeneteket össze lehet kombinálni egy aggregált eszközbe, de ez ugyanazt a hangot több kimenetre küldi — nem ad alkalmazásonként irányítást. Hasznos, ha egyszerre akarod hallani a hangot a hangszórón és a fejhallgatón, de az teljesen más probléma.</p>

<p>Ezek közül egyik megoldás sem oldja meg az alapvető problémát: macOS nincs beépített módja annak, hogy azt mondaná: "tedd ezt az alkalmazást halkabbá anélkül, hogy bármi mást befolyásolnád."</p>

<h2>Mire érdemes figyelni egy Mac hangerőkeverőben</h2>

<p>Ha az Apple nem építi meg, akkor a harmadik féltől származó alkalmazások fogják megtenni. De nem minden hangerőkeverő egyforma. Íme, mi választ el egy jó és a középszerűt:</p>

<h3>Valós idejű alkalmazásfelismerés</h3>
<p>A keverőnek automatikusan érzékelnie kell minden olyan alkalmazást, amely jelenleg hangot gyárt. Nem kellene manuálisan hozzáadnod vagy konfigurálnod semmit. Nyitsz egy alkalmazást, és megjelenik a keverőben. Becsukod, és eltűnik.</p>

<h3>Hangerőtartomány 100%-on túli</h3>
<p>Néhány alkalmazás még maximális hangerőn is túl csendes — csendes podcast-lejátszók, böngészőfülek lágy hanggal, videóhívások, ahol valakinek a mikrofonja alacsony. Egy jó keverő lehetővé teszi. <strong>Növelje a hangerőt 200%-ra</strong>, hatékonyan erősítve a hangot, ami túlmutat az alkalmazásban.</p>

<h3>Egy kattintással némít alkalmazásonként</h3>
<p>Egyetlen kattintással bármelyik alkalmazást el tudod némítani — anélkül, hogy a csúszkát elmozdítanád. Amikor lekapcsolod, pontosan vissza kell térnie oda, ahol volt. Ez kulcsfontosságú ahhoz, hogy gyorsan elnémítsd a zajos alkalmazást hívás közben.</p>

<h3>Profilok különböző helyzetekhez</h3>
<p>Nem akarod kézzel állítani nyolc csúszkát minden alkalommal, amikor "zenét használsz" állapotból "videóhívásra" vagy "játékra" váltasz. A profilok lehetővé teszik, hogy egy hangerő konfigurációt ments el, és egyetlen kattintással alkalmazd. Egy "Meeting" profil a Zoomot 100%-ra, a zenét 15%-ra, az értesítéseket pedig 0%-ra állíthatja. Egy "Fókusz" profil mindent elnémíthat, kivéve a Spotify-t.</p>

<h3>Automatikus leugrás hívások közben</h3>
<p>A hangerőkeverő legjobb tulajdonsága: automatikusan lecsökkenti a háttérhangot, amikor csatlakozol egy híváshoz, és visszaállítja azt, amikor a hívás véget ér. Nincs szükség kézi beállításra. A zenéd elcsendesedik, amikor a Zoom aktiválja a mikrofont, és visszajön, amikor leteszed a telefont.</p>

<h3>Menüsáv integráció</h3>
<p>A hangerőkeverőnek a menüsávban kell lennie — egy kattintással nyit, igazítja és zárja. Nem kellene teljes ablak legyen, nem foglalhatja el a dokkot, és nem kellene elmozdulnod a jelenlegi alkalmazásodtól. El kell tudnod állítani a hangerőt anélkül, hogy elveszítenéd a fókuszt arra, amit csinálsz.</p>

<h2>SoundDial: a hangerőkeverő, macOS be kellett volna építeni</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> egy natív macOS menüsáv alkalmazás, amely pontosan azt adja, amit az Apple nem nyújt — minden alkalmazáshoz független hangerőszabályozást a Mac minden alkalmazáshoz.</p>

<p>A menü sávban helyezkedik el, és minden futó alkalmazást megjelenít saját hangerő csúszkával. Húzz egy csúszkát, hogy az alkalmazás hangerőjét 0%-ról 200%-ra állítsd. Kattints a hangszóró ikonra, hogy azonnal elnémítsd. Válts a mentett profilok között különböző helyzetekhez. Ha engedélyezed az automatikus leduckolást, a zene automatikusan halkabb lesz, amikor hívás kezdődik.</p>

<img src="/apps/sounddial.png" alt="SoundDial — alkalmazásonként hangerőkeverő macOS az egyes alkalmazások hangerő csúszkáit mutatja a menüsávban" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Főbb jellemzők:</p>
<ul>
  <li><strong>Alkalmazásonkénti volumencsúszkák</strong> — 0%-tól 200%-ig terjedő tartomány minden futó alkalmazáshoz</li>
  <li><strong>Egy kattintásos némítás</strong> — némítsa el bármelyik alkalmazást anélkül, hogy a csúszkát mozgatná</li>
  <li><strong>Térfogatprofilok</strong> — mentés és váltás hangerő konfigurációk között</li>
  <li><strong>Automatikus leugrás</strong> — a zene automatikusan halkul hívások közben</li>
  <li><strong>Billentyűs billentyűk</strong> — kapcsold be a keverőt vagy némítsd el az összes alkalmazást egy gyorsbillentyűvel</li>
  <li><strong>Kimeneti eszköz kapcsolása</strong> — ugyanazon panelről cserélni hangszórót/fejhallgatót</li>
  <li><strong>Térfogatmemória</strong> — megjegyzi az egyes alkalmazások hangerőjét az újraindítások között</li>
</ul>

<p>Egyszeri vásárlás. Nincs előfizetés. macOS 14,2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Szerezd meg SoundDial a Mac App Store-ban</a>.</p>
`,
  },
};
