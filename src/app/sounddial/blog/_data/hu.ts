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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial podcasting beállítás — vendéghang, figyelés és értesítések független szinten" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial aprócsás, alkalmazásonkénti hangerőszabályzó, 1%-os pontossággal macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Slack hangerő önállóan szabályozza a huddle közben, miközben a zene más szinten szól" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial alapértelmezett hangerő beállítás — az új alkalmazások beállított szinten indulnak, nem teljes sebességgel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — alkalmazásonkénti hangerőszabályzó az összes Mac hangforrás önállóan történő kezelésére" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Cisco Webex híváshangerő 100%-ra növelése macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial két hangforrást mutat különböző hangerő hangerőn macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial késő esti filmbeállítás — streaming alkalmazás közepes hangerőn, értesítések némítva" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial az alkalmazásonként megőrzött volumenszint megőrzése Mac alvási és ébrenléti ciklusok után" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a DAW kimenet Discordból és a referencia sávok elválasztása a macOS-on a zenei produkcióhoz" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial az Apple Music hangerő 100%-ra növelése macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — megbízható, alkalmazásonkénti hangerőkeverő Mac profilokkal, automatikus lecsúszással és 200%-os erősítéssel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Spotify és a Discord különböző hangerőfokú egyensúlyozása macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — alkalmazásonként hangerőszabályozás, profilok, automatikus lecsúszás és 200%-os növelés macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a VLC hangerő növelése a rendszer szintjén macOS a csendes videófájlok esetén" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial konfigurálható automatikus lecsúszás — pontosan szabályozza, mennyi háttérhang csökken hívások közben" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial az alkalmazás hangerő növelése Bluetooth fejhallgatóhoz Mac alkalmazásonkénti csúszkákkal, 200%-ra" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial egyensúlyozó játék, Discord és zenei hang szintek az OBS streaminghez Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial térfogatmemória — automatikusan megjegyzi és helyreállítja az alkalmazásonkénti hangerőszintet macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial az Apple Podcasts hangerő 180%-ra emelése a Mac-on csendes podcast epizódokhoz" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial diák beállítása — előadás teljes hangerőn, tanulj zenét halkan, értesítések némítva" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial némítás gyorsítványa — Control+Option+M billentyűk minden alkalmazás némításához és visszavonásához a hangerő visszaállításával" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Google Meet (Chrome) hangerő 100%-on fölé emelni macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial az értesítési alkalmazás hangerő és a médiaalkalmazás hangerő elválasztása macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a FaceTime hívások hangerőjének 100%-ra növelése macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial billentyűs billentyűk — Control+Option+S a kapcsolóhoz, Control+Option+M a némításhoz" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — egy háttérzenei alternatíva, amely nem telepít virtuális hangkészülékeket" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — egy könnyebb, fókuszált SoundSource alternatíva hangerőprofilokkal és automatikus leugrással" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial aprócsós, alkalmazásonkénti hangerőszabályzó, 1%-os növeléssel macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Netflix hangját 180%-ra emelni Mac-on a párbeszéd és a streaming hang érdekében" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial távoli munka hangrendszere — különböző hangerő a Zoom, Spotify és Slack esetén macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a böngészőhangerő vezérlése a többi alkalmazástól függetlenül macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Discord hangerő vezérlése a játéktól és a zenétől függetlenül macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial hangkimeneti eszköz kapcsolásával és alkalmazásonként hangerőszabályozással egy menü panelen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Microsoft Teams hívásainak volumenének 100%-ra növelése macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Slack némítással és a Spotify normál hangerőn fut macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial hangerőprofilok — egy kattintással válthatsz a Meeting, Focus és Chill módok között macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Zoom hívás hangerejének 180%-ra emelése Mac-on, hogy a videóhívások alatt tisztább hang biztosítson" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Spotify hangerő önállóan csökkentése, miközben a többi alkalmazás teljes hangerőn marad macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial alkalmazásonként hangerőszabályozást biztosít macOS Tahoe-n" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Zoomot teljes hangerőn mutatja és a Spotify lehalva hívás közben macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial emlékezni az alkalmazásonkénti hangerőszintekre az újraindítások során macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial alkalmazásonként hangerőkeverő, amely az egyes alkalmazások hangerő csúszkáit mutatja macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Safari böngésző hangerő 180%-ra emelése csendes YouTube videókhoz Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Slack alacsony hangerőn, a Spotify normál hangerőn mutat — független értesítési vezérlés macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial automatikus lecsúsztató beállítások — konfigurálható hangerőcsökkentés Zoom hívások közben Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial az AirPods alkalmazáshangerő növelését Mac-on, alkalmazásonkénti hangerő csúszkákkal, akár 200%-ig is" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial a Spotify hangerő 200%-ra emelni macOS-on, miközben más alkalmazásokat normál hangerőn tart" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial független hangerő csúszkákat mutat egy játékhoz és Discordot macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — a hangerőkeverő a macOS számára, amely alkalmazásonként megjeleníti a hangerő csúszkákat a menüsávban" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial hangerőnövelés — alkalmazásonként hangerőszabályzó, 200%-os erősítéssel macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial automatikus lecsúszó funkció, amely automatikusan csökkenti a zene hangerőjét egy Zoom hívás közben Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial az alkalmazásonként megjelenített némítás gombok minden alkalmazásnál a macOS menüsávban" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — alkalmazásonként hangerőkeverő macOS az egyes alkalmazások hangerő csúszkáit mutatja a menüsávban" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "A legjobb Background Music alternatíva a Mac számára (2026)",
    description: "A Background Music tönkreteszi az újabb macOS-t? A legmegbízhatóbb alkalmazásonkénti hangerőkeverési alternatíva a SoundDial – egy homokozós Mac App Store alkalmazás lendülettel és profilokkal.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha a Background Music leáll a macOS frissítése után, a legmegbízhatóbb alternatíva <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> - a Mac App Store menüsoronkénti hangerőkeverő. Minden alkalmazásnak saját hangerő-csúszkát ad, némítást, erősítést, hangerőprofilokat és automatikus lecsökkentést ad hozzá, és teljesen homokozóban van, és az Apple felülvizsgálta, így a következő macOS kiadásnál nem kell megtörni az audio-illesztőprogramokat.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A legjobb Background Music alternatíva a Mac számára (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért törik a Background Music az újabb macOS-n</h2>

<p>A Background Music egy igazán okos ingyenes, nyílt forráskódú projekt. A Mac-felhasználóknak olyasmit adott, amit az Apple soha: egy alkalmazásonkénti hangerőkeverőt, amilyen a Windows már évek óta. De a tervezése is az oka annak, hogy folyamatosan kudarcot vallanak.</p>

<p>A hang irányításához és vezérléséhez a Background Music egy virtuális audioeszközt telepít – egy rendszerszintű illesztőprogramot, amely elfogja a Mac hangját. Ez a megközelítés jól működött a régebbi macOS-n, de minden nagyobb kiadás szigorítja a kernel- és audiobővítmények biztonságát. A felhasználók által jelentett gyakori tünetek:</p>

<ul>
<li>Egyáltalán nincs hang a telepítés vagy az operációs rendszer frissítése után.</li>
<li>A virtuális eszköz betöltése sikertelen, ezért a hangtovábbítás csendben leáll.</li>
<li>Az alkalmazást újra kell telepíteni, újra kell indítani vagy kézi illesztőprogramot kell eltávolítani a helyreállításhoz.</li>
<li>A fejlesztés közösségvezérelt és önkéntes tempójú, így az új macOS javításai késhetnek.</li>
</ul>

<p>Mindez nem teszi a Background Music-t "rosszsá". Ez csak azt jelenti, hogy az ingyenes illesztőprogram-alapú eszköz természeténél fogva törékeny, és ha minden nap az alkalmazásonkénti hangerőre támaszkodik, ez a törékenység gyorsan elöregszik.</p>

<h2>Mire kell figyelni a csere során</h2>

<p>Mielőtt bármilyen alternatívát választana, döntse el, mire van szüksége:</p>

<ul>
<li><strong>Megbízhatóság a macOS frissítésekben.</strong> Ha kernelt vagy audiobővítményt telepít, időnként törésekre számíthat.</li>
<li><strong>Valódi alkalmazásonkénti vezérlés.</strong> Az egyes alkalmazások független hangereje és némítása az alap.</li>
<li><strong>Boost.</strong> Egyes alkalmazások (csendes értekezlet-eszközök, bizonyos böngészők) egyszerűen túl csendesek – a 100%-ot szeretné túllépni.</li>
<li><strong>Kényelmi funkciók.</strong> A profilok és az automatikus lehúzás az, ami egy segédprogramot olyanná változtat, amelyet egész nap nyitva tart.</li>
<li><strong>Biztonságos telepítés.</strong> A homokozóba helyezett Mac App Store alkalmazás nem érintheti a rendszer belső elemeit, így az eltávolítás tiszta, a frissítések pedig automatikusak.</li>
</ul>

<h2>Miért a SoundDial a megbízható választás?</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pont arra készült, hogy megoldja azt a problémát, amivel a Background Music felhasználók szembesülnek: alkalmazásonkénti hangerőt akarnak, de nem akarnak sofőrt babázni. A menüsorodban él, és jól végzi az alapvető feladatot:</p>

<ul>
<li><strong>Független hangerő minden alkalmazáshoz</strong>, alkalmazásonkénti némítással ugyanazon a panelen.</li>
<li><strong>Alkalmazásonkénti növelés</strong> hogy a csendes alkalmazások elég hangosak legyenek ahhoz, hogy valóban hallják.</li>
<li><strong>Hangerő profilok</strong> - mentse el a keveréket (mondjuk "találkozó" vagy "játék"), és azonnal váltson, ahelyett, hogy minden alkalommal húzza a csúszkákat.</li>
<li><strong>Automatikus kacsázás</strong>, így a háttérhang automatikusan lecsökken, amikor kell.</li>
<li><strong>Gyors kimenet váltás</strong> hangszórók, fejhallgatók és egyéb eszközök között.</li>
</ul>

<p>A nagyobb különbség a telepítés módja. A SoundDial a Mac App Store-n keresztül érkezik, ami azt jelenti, hogy az Apple felülvizsgálta és homokozóban van. Nincs húzható DMG, nincs audio-illesztőprogram vagy rendszerbővítmény, és nincs rendszermag-hozzáférés sem. Ez az egyetlen legfontosabb ok, amiért nem fogja megtörni a Background Music módját, amikor új macOS érkezik – nincs bekötve a rendszer azon részeibe, amelyeket az Apple folyamatosan zárol.</p>

<p>Ez kerül <strong>14,99 € egyszeri</strong>. Nem ingyenes, de nincs előfizetés, és fizetsz valami karbantartásért és biztonságos telepítésért.</p>

<h2>SoundDial vs. Background Music vs. ingyenes eszközök</h2>

<p>A Background Music nem az egyetlen ingyenes lehetőség, ezért íme egy őszinte alapvetés:</p>

<ul>
<li><strong>Background Music (ingyenes, nyílt forráskódú):</strong> Alkalmazásonkénti mennyiség, de illesztőprogram-alapú, hajlamos az újabb macOS feltörésére, és hiányzik belőle a boost, a profilok és az automatikus leállítás.</li>
<li><strong>FineTune (ingyenes, nyílt forráskódú):</strong> egy könnyű menüsor alkalmazásonkénti hangerő-alkalmazás. Jó, ha ingyenes, ez az egyetlen követelmény, de az extrák tekintetében kevés.</li>
<li><strong>eqMac (ingyenes):</strong> elsősorban rendszer EQ és booster, nem igazi alkalmazásonkénti keverő.</li>
<li><strong>SoundSource – Rogue Amoeba (~39 USD):</strong> a profi opció, alkalmazásonkénti EQ-val és teljes kimeneti útválasztással. Kiváló, de több mint duplája a SoundDial árának, és még mindig letöltésre és egy hangrögzítő illesztőprogramra van szükség.</li>
<li><strong>SoundDial (14,99 €, Mac App Store):</strong> a középút – valós alkalmazásonkénti hangerő, némítás, erősítés, profilok és lecsökkenés, tiszta sandbox-telepítésként, illesztőprogramok nélkül.</li>
</ul>

<p>Ha alkalmazásonkénti EQ-ra vagy összetett stúdióútválasztásra van szüksége, a SoundSource megéri az extra pénzt. Ha szeretne egy ingyenes bütykös szerszámot, és elviseli az időnkénti törést, akkor a FineTune vagy a Background Music megteszi. De ha az a cél, hogy „minden alkalmazásnak saját hangerőt adjon, és ne hagyja abba, hogy minden macOS frissítést megszakítson”, akkor a SoundDial a legkevesebb probléma miatt eléri ezt a célt.</p>

<h2>A macOS környezet, amely ezt szükségessé teszi</h2>

<p>Érdemes egyértelműen kijelenteni: a macOS-nak nincs beépített alkalmazásonkénti hangerőkeverője. A Windows hangerőszabályzójában évek óta van egy, de a Mac-n a rendszercsúszka mindent egyszerre vezérel. Ez a hiányosság a teljes oka annak, hogy léteznek olyan eszközök, mint a Background Music és a SoundDial. Mivel az Apple nem tölti be, a gyakorlati kérdés csak az, hogy melyik harmadik fél megközelítésében bízik – egy ingyenes illesztőprogramban, amely harcol az operációs rendszerrel, vagy egy homokozó alkalmazásban, amely együttműködik vele.</p>

<p>Készen állsz, hogy abbahagyd a törött audio-illesztőprogramok elleni küzdelmet? Kap <a href="https://apps.apple.com/app/id6772792641">SoundDial a Mac App Store modellen</a> 14,99 euróért, és minden alkalmazás hangerejét megbízható módon szabályozhatja.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial: Melyik Mac kötetalkalmazás nyer?",
    description: "SoundSource (39 USD, profi) vs SoundDial (14,99 EUR, App Store). Hasonlítsa össze az alkalmazásonkénti hangerőt, boostot, profilokat és automatikus lecsökkentést, hogy kiválaszthassa a megfelelő Mac keverőt.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Ha csak alkalmazásonkénti hangerőszabályozást szeretne, amely tisztán telepíthető és olcsóbb, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ez a legjobb vétel a legtöbb ember számára: 14,99 € egyszeri, a Mac App Store-tól, alkalmazásonkénti hangerővel, némítással, erősítéssel, profilokkal és automatikus leállítással. Csak akkor válassza a Rogue Amoeba SoundSource-ját (~39 USD), ha kifejezetten alkalmazásonkénti EQ-ra és fejlett kimeneti útválasztásra van szüksége.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial: Melyik Mac kötetalkalmazás nyer?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>A rövid változat</h2>
<p>A macOS továbbra sem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A Windows-nak évek óta van ilyen, de a Mac-n a rendszer hangerő-csúszkája mindent egyszerre mozgat. Mind a SoundSource, mind a SoundDial létezik ennek a hiányosságnak a javítására. Csak különböző vásárlókat céloznak meg.</p>
<ul>
<li><strong>SoundDial</strong> – 14,99 € egyszeri, Mac App Store, menüsor alkalmazás. Alkalmazásonként független hangerő, alkalmazásonkénti némítás, alkalmazásonkénti erősítés, mentett profilok, automatikus lecsökkenés és gyors kimenetváltás. Sandbox és Apple által felülvizsgált, így nincs illesztőprogram telepítése.</li>
<li><strong>SoundSource</strong> — ~39 USD, közvetlen letöltés a Rogue Amoeba-ról. Minden, ami fent van, plusz alkalmazásonkénti EQ, fejlett kimeneti útválasztás és hangeffektusok. Egy kisméretű hangrögzítő illesztőprogram telepítése szükséges.</li>
</ul>

<h2>Az ár és a vásárlás módja</h2>
<p>Ez a legvilágosabb felosztás. A SoundSource nagyjából 39 dollár, és közvetlenül a Rogue Amoeba értékesíti. A SoundDial ára 14,99 euró egyszeri vásárlásként a Mac App Store esetében – ez az ár valamivel több mint egyharmada.</p>
<p>mert <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> A App Store-n keresztül szállítják, homokozóban, közjegyzői hitelesítéssel és Apple által felülvizsgált. Rákattint a Get gombra, telepíti, és kész. Nincs csatlakoztatható DMG, nincs engedély a kernel melletti komponenshez, és nincs audio-illesztőprogram vagy rendszerbővítmény. Együtt működik a normál App Store frissítési folyamattal, és szinkronizálódik a többi Mac-val ugyanazon az Apple ID-n.</p>
<p>A SoundSource a App Store-n kívül tölt le, és telepít egy hangrögzítő illesztőprogramot, így képes elfogni és feldolgozni az egyes alkalmazások hangját. Ez az, ami felszabadítja a profi funkcióit, de ez egy extra telepítési lépést és egy olyan összetevőt is jelent, amely mélyebben él a rendszerben.</p>

<h2>Amit a SoundSource csinál, azt a SoundDial nem</h2>
<p>A SoundSource egy bizonyos típusú felhasználóért keresi meg az árát. Ha ezek közül bármelyik jellemzi Önt, megéri az extra pénzt:</p>
<ul>
<li><strong>Alkalmazásonkénti EQ.</strong> 10 sávos hangszínszabályzót szeretne mondjuk a Spotify-n, miközben a Zoom lapos marad. A SoundDial hangerőt csinál, nem EQ-t.</li>
<li><strong>Speciális kimeneti útválasztás.</strong> Egy alkalmazást a hangszórókra, egy másikat a fejhallgatóra vagy egy adott interfészre küldhet finom vezérléssel.</li>
<li><strong>Hangeffektusok és bővítmények.</strong> A SoundSource alkalmazásonkénti effektusokat tud tárolni – valóban területbarát.</li>
</ul>
<p>A Rogue Amoeba hosszú, megbízható múlttal rendelkezik. A SoundSource egy komoly eszköz, és az ára is hasonló. Ha Ön profi audio vagy több kimenetet használó felhasználó, akkor ez a megfelelő hívás.</p>

<h2>Miben jobb a SoundDial a mindennapi használatra</h2>
<p>A legtöbb embernek, aki "Mac hangerőkeverőt" keres, nincs szüksége EQ-ra. Egyik alkalmazásra halkabb, mint a másikra van szükségük, és nem akarnak egy telepítővel harcolni, hogy megszerezzék. A SoundDial tisztán takarja ezt, és néhány olyan dolgot is hozzáad, amelyeket érdemes kiemelni:</p>
<ul>
<li><strong>Alkalmazásonkénti növelés.</strong> Egyes alkalmazások és videók túl csendesek még 100%-on is. A SoundDial egyetlen alkalmazást a normál plafon fölé tud tolni, így végre hallható lesz egy csendes megbeszélés vagy podcast.</li>
<li><strong>Hangerő profilok.</strong> Mentse el a teljes beállítást – a zene halk, a böngésző némítva, az alkalmazás hangos hívása – és azonnal hívja elő. Kiválóan alkalmas a „fókusz”, „találkozó” és „játék” közötti váltáshoz öt csúszka elhúzása nélkül.</li>
<li><strong>Automatikus kacsázás.</strong> Automatikusan tompítsa a háttérhangot (például a zenét), amikor egy másik forrás elindul, így az értesítések, a hívások vagy a videók nem maradnak el.</li>
<li><strong>Gyors kimenet váltás.</strong> Ugorhat a hangszórók, fejhallgatók és egyéb eszközök között a menüsorból.</li>
</ul>
<p>Mindez a menüsor legördülő menüjéből fut, így egy kattintásnyira van, és a hátralévő időben eltűnik az arcáról.</p>

<h2>Az ingyenes alternatívák röviden</h2>
<p>Látni fog néhány ingyenes lehetőséget, amelyek ugyanazon kereséseknél szerepelnek. Ezekről érdemes tudni:</p>
<ul>
<li><strong>Background Music</strong> - ingyenes és nyílt forráskódú, alapvető alkalmazásonkénti hangerőt biztosít. De az újabb macOS kiadásokon eltörhet, és nincs lendülete, profilja vagy automatikus lecsökkentése.</li>
<li><strong>FineTune</strong> - egy ingyenes nyílt forráskódú menüsor hangerő-alkalmazás. Egyszerű, de korlátozott terjedelemben.</li>
<li><strong>eqMac</strong> - ingyenes EQ és rendszererősítő, inkább rendszerszintű EQ eszköz, mint valódi alkalmazásonkénti keverő.</li>
</ul>
<p>Az ingyenes nagyszerű, ha működik az Ön számára. A kompromisszum a kompatibilitás és a támogatás: a nyílt forráskódú audioeszközök lemaradhatnak a macOS frissítései mögött, és általában nincsenek ott olyan funkciók, mint a profilok és a kacsázás. Ha az Ön beállítása számít a munkanapja szempontjából, általában a nyugodtabb út, ha egyszer fizet az átvizsgált és karbantartott dolgokért.</p>

<h2>Melyiket érdemes megvenni?</h2>
<p>Válaszoljon egy kérdésre: alkalmazásonkénti EQ-ra vagy fejlett kimeneti útválasztásra van szüksége?</p>
<ul>
<li><strong>Igen</strong> — SoundSource vásárlás. Erre építették, és a ~39 dollár méltányos egy vezetői szintű motorral rendelkező profi eszközért.</li>
<li><strong>Nem, csak alkalmazásonkénti hangerőt, gyorsítást és tiszta telepítést szeretnék</strong> — SoundDial vásárlás. 14,99 €-ért megkapja azt a keverést, amely valóban számít a mindennapokban, plusz a profilok és az automatikus lecsökkenés, 14,99 €-ért és nulla vezetői gond nélkül.</li>
</ul>
<p>A Mac-felhasználók nagy többsége számára ez a második vödör az őszinte válasz. A hangerő szabályozásáért fizet, nem a stúdióért.</p>

<p><strong>Készen áll a Mac hangerő egyszerű javítására?</strong> Kap <a href="https://apps.apple.com/app/id6772792641">SoundDial a Mac App Store modellen</a> – 14,99 € egyszeri, sofőr nélkül, DMG nélkül. Alkalmazásonkénti hangerő, boost, profilok és automatikus csökkentés egyetlen kattintással.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Olcsóbb SoundSource alternatíva az alkalmazásonkénti hangerőhöz a Mac készüléken",
    description: "SoundSource stílusú alkalmazásonkénti mennyiséget szeretne a 39 dolláros ár nélkül? A SoundDial egy 14,99 eurós Mac App Store menüsoros keverő, amely lendülettel, profilokkal és automatikus leállítással rendelkezik.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha SoundSource-stílusú, alkalmazásonkénti hangerőszabályzót szeretne Mac készülékén, de a 39 dollár meredeknek tűnik, a leggyorsabb megbízható megoldás <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Ez egy 14,99 eurós egyszeri menüsor-keverő a Mac App Store-tól, amely minden alkalmazásnak saját hangerő-csúszkát, némítást és hangerőnövelést biztosít – plusz profilokat és automatikus lecsökkentést – letöltés vagy audio-illesztőprogram telepítése nélkül.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Olcsóbb SoundSource alternatíva az alkalmazásonkénti hangerő számára a Mac készüléken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért keresnek az emberek a SoundSource alternatívát?</h2>
<p>A SoundSource by Rogue Amoeba kiváló szoftver. Valóban profi: alkalmazásonkénti hangszínszabályzók, hangeffektusok és kimeneti útválasztás, amellyel az egyik alkalmazást a fejhallgatójába, a másikat pedig a hangszóróiba küldheti. De ez az erő két súrlódási ponttal jár. Először is, az ár - körülbelül 39 dollár. Másodszor, rendszerszintű hangrögzítési illesztőprogramot telepít a App Store-n kívül, amelyre néhány ember óvatos a munkagépen, vagy egyszerűen nem akarja kezelni a macOS frissítéseket.</p>
<p>A legtöbb ember számára a valódi igény sokkal egyszerűbb: kapcsolja le a Spotify hangot a Zoom hívás érintése nélkül, némítsa el a zajos böngészőlap alkalmazását, vagy növelje 100% fölé a csendes videólejátszót. Ha Ön az, akkor profi pénzt fizet olyan szolgáltatásokért, amelyeket soha nem fog megnyitni.</p>

<h2>Mit csinál a SoundDial – és mennyibe kerül</h2>
<p>A SoundDial az alkalmazásonkénti hangerő-feladatra összpontosít, és tisztán végzi azt. Nyissa meg a menüsort, és egy élő listát kap minden hangzásról, mindegyik saját vezérléssel:</p>
<ul>
<li><strong>Független kötet alkalmazásonként</strong> - alkalmazásonként egy csúszka, valós időben beállítva.</li>
<li><strong>Alkalmazásonkénti némítás</strong> – azonnal elnémíthatja az egyik alkalmazást anélkül, hogy bármi mást szüneteltetne.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés</strong> – a csendes alkalmazásokat a normál maximumuk fölé tolja, ha egy videó vagy hívás túl lágy.</li>
<li><strong>Hangerő profilok</strong> — mentse el a keveréket (pl. „Fókusz”, „Játék, Találkozó”), és váltson egyetlen kattintással.</li>
<li><strong>Automatikus kacsázás</strong> – automatikusan bemártsa a többi alkalmazást, ha valami fontosabb játék indul el.</li>
<li><strong>Gyors kimenet váltás</strong> - Ugrás a hangszórók, fejhallgatók és egyéb eszközök között ugyanabból a menüből.</li>
</ul>
<p>Az ár az <strong>14,99 €, egyszer fizetve</strong> - nincs előfizetés. Ez nagyjából a SoundSource költségének egyharmada, mivel a legtöbb felhasználó ténylegesen eléri a hangerőt.</p>

<h2>A App Store különbség</h2>
<p>Mivel a SoundDial-t a <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, az Apple által felülvizsgált és homokozó. Nincs húzható DMG, nincs jóváhagyandó kernelbővítmény vagy hangrögzítő illesztőprogram, és nincs külön frissítő sem. Úgy telepíti, mint bármely más App Store alkalmazást, és működik. Amikor a macOS frissül, nem kell azon töprengeni, hogy egy alacsony szintű audiokomponens továbbra is működik-e.</p>
<blockquote>A macOS továbbra sem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A Windows már évek óta rendelkezik ilyennel, de a Mac esetében a rendszer mennyisége mindent vagy semmit – pontosan ezt a hiányt pótolják ezek az eszközök.</blockquote>

<h2>Hogyan viszonyul az ingyenes opciókhoz</h2>
<p>A SoundSource nem az egyetlen alternatíva. Vannak ingyenes eszközök, és fontos, hogy őszinte legyél velük kapcsolatban:</p>
<ul>
<li><strong>Background Music</strong> egy ingyenes, nyílt forráskódú alkalmazásonkénti kötetalkalmazás. Sokaknak működik, de az újabb macOS kiadásokon eltörhet, a frissítések rendszertelenek, nincs boost, nincs profilja és nincs automatikus leállítása.</li>
<li><strong>FineTune</strong> egy ingyenes, nyílt forráskódú menüsoros hangerő-alkalmazás – könnyű és praktikus, de ismét hiányzik a profil és a lecsökkent funkciók.</li>
<li><strong>eqMac</strong> egy ingyenes EQ és rendszererősítő. Ez inkább hangszínszabályzó/növelő eszköz, mint valódi alkalmazásonkénti keverő, és nem az egyes alkalmazások csúszkáira összpontosít.</li>
</ul>
<p>Az ingyenes jogos választás. A kompromisszum a megbízhatóság és a funkciók: a nyílt forráskódú audioeszközök önkéntes karbantartástól függenek, és lemaradhatnak a macOS változtatásai mögött, és az ingyenes opciók egyike sem köti össze a profilokat és az automatikus lecsökkentést, ahogy a SoundDial teszi. Ha a beállítás egyszerű, és nem bánja az időnkénti töréseket, akkor elég lehet egy ingyenes alkalmazás. Ha valami karbantartott, homokozóval ellátott és egyszerűen működőt szeretne, akkor a 14,99 euróért pontosan ezt kapja.</p>

<h2>Gyors döntési útmutató</h2>
<ul>
<li><strong>Alkalmazásonkénti EQ-ra, hangeffektusokra és egy alkalmazást egy másik kimeneti eszközre kell irányítania</strong> → A SoundSource megéri az árát. Ezt itt semmi sem pótolja teljesen.</li>
<li><strong>Főleg alkalmazásonkénti hangerőre, némításra, erősítésre, profilokra és leállításra van szüksége – illesztőprogramok nélkül</strong> → A 14,99 eurós SoundDial a jobb ár-érték arány.</li>
<li><strong>Ön ingyenes, és nem bánja a karbantartási kockázatot</strong> → először próbálja ki a Background Music, FineTune vagy eqMac-t.</li>
</ul>

<h2>Beállítása</h2>
<p>Az indulás körülbelül egy percig tart:</p>
<ul>
<li>Telepítse a SoundDial-t a Mac App Store-ról – külső letöltés nélkül.</li>
<li>Adja meg a macOS hangengedélyt az első indításkor.</li>
<li>Játsszon le hangot néhány alkalmazásban, és nyissa meg a menüsor ikonját; mindegyikhez saját csúszka tartozik.</li>
<li>Húzza a szintek beállításához, koppintson a némításhoz, vagy tolja túl a 100%-ot a fokozáshoz.</li>
<li>Mentse el a beállításokat profilként, és kapcsolja be az automatikus lecsökkentést, ha azt szeretné, hogy más alkalmazások elcsendesedjenek hívások vagy média közben.</li>
</ul>
<p>Ez az egész munkafolyamat – nincsenek konfigurációs fájlok, nincs újraindítás, nincs megáldandó rendszerbővítmény.</p>

<h2>A lényeg</h2>
<p>A SoundSource a hatékonyabb eszköz, de a legtöbb ember, aki ezt keresi, csak olyan alkalmazásonkénti hangerőt szeretne, amely viselkedik. A SoundDial ezt az ár körülbelül egyharmadáért biztosítja, biztonságosan szállítja a App Store-n keresztül, és profilokat és automatikus lecsúszást ad hozzá – egyetlen illesztőprogram telepítése nélkül.</p>

<p>Készen áll arra, hogy minden alkalmazás hangerejét függetlenül vezérelje? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> 14,99 €-ért, egyszer.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "FineTune Alternatíva a Mac számára: Támogatott alkalmazásonkénti hangerőkeverő",
    description: "Kipróbálta az ingyenes FineTune menüsor alkalmazást, és szeretne valami karbantartott és App Store-biztonságot? Íme a legjobb FineTune alternatíva az alkalmazásonkénti hangerőhöz a Mac-n.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha tetszett a FineTune, de szeretne valamit aktívan karbantartani és megbízható forrásból telepíteni, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a leggyorsabb megbízható javítás. Ez egy Mac App Store menüsor alkalmazásonkénti hangerőkeverő független hangerővel, alkalmazásonkénti némítással, hangerőnöveléssel, mentett profilokkal és automatikus lecsökkentéssel. Az Apple által felülvizsgált és homokozóval ellátott, egyszeri ára 14,99 €, illesztőprogramok nélkül.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune Alternatíva a Mac számára: Támogatott alkalmazásonkénti hangerőkeverő" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért kell egyáltalán FineTune alternatívát keresni?</h2>

<p>A FineTune egy jó ötlet: egy ingyenes, nyílt forráskódú menüsoros alkalmazás, amely alkalmazásonkénti hangerőszabályozást biztosít a macOS-n, amit az Apple még mindig nem hajlandó beépíteni (a Windows-nak évek óta van alkalmazásonkénti keverője). Sok ember számára elvégzi az alapvető feladatot. De vannak valódi okok, amelyek miatt a felhasználók valami mást keresnek.</p>

<ul>
<li><strong>A karbantartás bizonytalan.</strong> A nyílt forráskódú hobbiprojektek egyetlen karbantartó szabadidejében élnek és halnak meg. Amikor a macOS egy jelentős frissítést szállít, gyakran a hanggal kapcsolatos alkalmazások törnek el először, és Ön egy önkéntes javításra vár, amely talán soha nem érkezik meg.</li>
<li><strong>Funkciós mennyezet.</strong> A FineTune alkalmazásonkénti mennyiséget takar, és kevés mást. Ha 100% feletti emelkedést szeretne, mentett profilokat vagy automatikus lecsúszást szeretne, más eszközöket kell felcsavaroznia.</li>
<li><strong>Bizalom és frissítések.</strong> A App Store-n kívüli nyers build telepítése azt jelenti, hogy nincs automatikus ellenőrzés, nincs sandbox-garancia, és manuális frissítéseket kell követnie.</li>
</ul>

<p>Mindez nem teszi rosszá a FineTune-t. Ez csak azt jelenti, hogy ha minden nap az alkalmazásonkénti hangra támaszkodik, valószínűleg szeretne valamit, amely mögött egy támogatási modell áll.</p>

<h2>Amit a SoundDial másképp csinál</h2>

<p>A SoundDial ugyanabból az alapötletből indul ki, egy menüsor-keverőből csúszkával minden futó alkalmazáshoz, majd továbbmegy azokkal a funkciókkal, amelyeket a felhasználók ténylegesen kérnek.</p>

<ul>
<li><strong>Független kötet alkalmazásonként.</strong> Kapcsolja le a Spotify-t, tartsa teljes hangerőn a hívást, teljesen némítsa el a zajos böngészőlap alkalmazását, mindezt egyetlen menüből.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés.</strong> Nyomjon egy csendes alkalmazást a normál plafon fölé, ha egy podcast vagy videó masterelése túl alacsony volt. A FineTune ezt nem teszi meg.</li>
<li><strong>Hangerő profilok.</strong> Mentsen el egy mixet, "fókusz", "játék", "találkozók", és egyetlen kattintással váltson át a teljes beállítást öt csúszka meghúzása helyett.</li>
<li><strong>Automatikus kacsázás.</strong> Automatikusan csökkenti a háttérhangot, ha valami fontosabb lejátszásra kerül, így a zene lecsökken, amikor hívás érkezik.</li>
<li><strong>Gyors kimenet váltás.</strong> Ugorhat a hangszórók, fejhallgatók és egyéb kimenetek között anélkül, hogy belemerülne a rendszerbeállításokba.</li>
</ul>

<p>mert <a href="https://apps.apple.com/app/id6772792641">A SoundDial-t a Mac App Store-n keresztül szállítjuk</a>, az Apple felülvizsgálta és homokozóban van, tisztán települ, és ugyanazon a mechanizmuson keresztül frissül, mint minden más App Store alkalmazás. Nincs húzható DMG, nincs hang-illesztőprogram vagy rendszerbővítmény, és nincs olyan biztonsági kérdés sem, amely a kernelszintű összetevő engedélyezését kérné.</p>

<h2>SoundDial vs. FineTune és a többi ingyenes eszköz</h2>

<p>A FineTune nem az egyetlen ingyenes lehetőség, és segít őszintén látni az egész tájat.</p>

<ul>
<li><strong>FineTune</strong> - Ingyenes, nyílt forráskódú menüsor alkalmazásonkénti hangereje. Egyszerű és könnyű, de nincs lendület, nincsenek profilok, nincs lehajlás, és a karbantartás a közösségtől függ.</li>
<li><strong>Background Music</strong> - Ingyenes és nyílt forráskódú, alkalmazásonként irányítja és állítja be a hangot. Valóban hasznos, de tönkremehet az újabb macOS kiadásokon, és hiányzik a boost, a profilok és a redukálás.</li>
<li><strong>eqMac</strong> - Ingyenes EQ és rendszererősítő. Nagyszerű, ha elsősorban hangszínszabályzót szeretne, de ez nem egy alkalmazásonkénti keverő.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> - Pro-grade opció körülbelül 39 dollárért, alkalmazásonkénti EQ-val és kimeneti útválasztással. Kiváló, de letöltésre és hangrögzítő illesztőprogramra van szüksége, és több mint kétszer annyiba kerül.</li>
<li><strong>SoundDial</strong> — 14,99 € egyszeri, App Store biztonságos, sofőr nélkül. Az alkalmazásonkénti hangerő alapjain felül fokozást, profilokat és automatikus lecsökkentést ad hozzá.</li>
</ul>

<p>Az őszinte összefoglaló: ha az abszolút legolcsóbb dolgot szeretné, és csak alapvető alkalmazásonkénti kötetre van szüksége, az ingyenes eszközök működhetnek. Ha alkalmazásonkénti EQ-t és útválasztást szeretne, és nem bánja, hogy fizet és telepít egy illesztőprogramot, a SoundSource a nehézsúlyú. A SoundDial a legjobb helyen van, jobb, mint az ingyenes alkalmazások, drámaian olcsóbb, mint a SoundSource, és biztonságosabb a telepítés, mint bármelyik, mert az Apple felülvizsgálja és homokozóba helyezi.</p>

<h2>Áttérés a FineTune-ról</h2>

<p>A váltás néhány percig tart, és nincs tisztítási rituálé.</p>

<ul>
<li>Telepítse a SoundDial-t a Mac App Store készülékről. Nincs telepítő, nincs illesztőprogram jóváhagyása, nincs újraindítás.</li>
<li>Kattintson a SoundDial ikonra a menüsorban az egyes futó alkalmazások csúszkájának megtekintéséhez.</li>
<li>Állítsa be mindennapi keverékét, majd mentse el profilként, hogy azonnal előhívhassa.</li>
<li>Opcionálisan kapcsolja be az automatikus halkítást, hogy a háttérben lévő hang félrelépjen a hívásokhoz és a figyelmeztetésekhez.</li>
<li>Ha boldog, lépjen ki a FineTune-ból. Mivel egyik alkalmazás sem telepíti a rendszer-illesztőprogramokat, nem kell eltávolítani semmit.</li>
</ul>

<p>Megtartja azt, ami tetszett a FineTune-ban, egy letisztult menüsor-keverőben, amelyet az Apple soha nem adott neked, és megkapod azt a lendületet, profilokat, kiegyensúlyozást és hosszú távú támogatást, amit egy karbantartott App Store alkalmazás nyújt.</p>

<h2>A lényeg</h2>

<p>A FineTune bizonyítja a koncepciót: az alkalmazásonkénti hangerő a menüsorba tartozik. A SoundDial úgy néz ki, mint ez a koncepció valódi támogatási modellel, több funkcióval és App Store biztonsággal, egyszeri 14,99 euróért az önkéntes fenntartásra tett fogadás helyett.</p>

<p>Készen áll egy alkalmazásonkénti keverőre, amely folyamatosan karbantartja? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> és másodpercek alatt szabályozhatja az összes alkalmazás hangerejét.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac Alternatív a valós alkalmazásonkénti hangerőhöz a Mac-n",
    description: "Tetszett a eqMac lendülete, de megfelelő alkalmazásonkénti hangerőre, némításra és profilokra van szüksége? A SoundDial a leggyorsabb Mac App Store javítás – 14,99 €, homokozóban, illesztőprogramok nélkül.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha a eqMac-t használta az EQ-hoz és a hangerőnövelőhöz, de valóban független hangerőt szeretne minden egyes alkalmazáshoz – plusz némítást, erősítést és mentett profilokat –, akkor a leggyorsabb megbízható megoldás <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Ez egy Mac App Store menüsoros keverő: állítson be egy szintet alkalmazásonként, fokozza a csendeseket, és azonnal váltson profilt. 14,99 € egyszeri, homokozó, nem kell illesztőprogramot telepíteni.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — eqMac alternatíva a valós alkalmazásonkénti hangerő számára a Mac-n" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac vs. amire valójában szüksége van</h2>

<p>A eqMac egy szilárd ingyenes eszköz, és rendszerszintű hangszínszabályzója és hangerő-növelője valóban hasznos. De a eqMac egy master EQ és egy master kimenet köré épül. Nem ad valódi alkalmazásonkénti hangerőkeverőt – a Windows már évek óta megvan, és a macOS még mindig nem natív módon érkezik.</p>

<p>Tehát ha az igazi problémád az, hogy "a Spotify túl hangos hívás közben" vagy "ez a játék kifújja a fülemet, de minden más rendben van", akkor a eqMac nem a megfelelő forma erre a feladatra. A végén egyetlen mestercsúszkát kell mozgatnia, vagy az egyes alkalmazások belső hangerején babrál. Ez az a hiány, amelyet SoundDial tölt be.</p>

<h2>Amit a SoundDial csinál, azt a eqMac nem</h2>

<ul>
<li><strong>Független kötet alkalmazásonként</strong> — Zene 40%, böngésző 100%, videohívás 70%, egyszerre, mindenre emlékszik.</li>
<li><strong>Alkalmazásonkénti némítás</strong> – azonnal elnémíthatja az egyik zajos alkalmazást anélkül, hogy bármi máshoz is hozzáérne.</li>
<li><strong>Alkalmazásonkénti növelés</strong> - tolja át a csendes alkalmazást a normál plafonon, ahogy a eqMac booster teszi, de egyetlen alkalmazást céloz meg az egész rendszer helyett.</li>
<li><strong>Hangerő profilok</strong> - mentse el az olyan beállításokat, mint a „Focus”, „Gaming” vagy „Meeting”, és egyetlen kattintással váltson át a teljes keveréket.</li>
<li><strong>Automatikus kacsázás</strong> – automatikusan leejti a háttérhangot, ha valami fontosabb elkezdődik, így nem kell a hívás közbeni csúszkáért tülekednie.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a hangszórók, fejhallgatók és egyéb kimenetek között a menüsorról.</li>
</ul>

<p>A eqMac-val való átfedés alapvetően a lendület. Minden más – a keverő, a némítás, a profilok, a lecsillapítás – olyan terület, amelyre a eqMac-t soha nem tervezték.</p>

<h2>Még mindig akarod az EQ-t?</h2>

<p>Legyen őszinte azzal kapcsolatban, hogy melyik problémát oldja meg. Ha valóban szüksége van frekvenciás EQ-ra – a mélyhangok levágására, a durva magas hangok megszelídítésére, az egész rendszer hangszínének alakítására –, akkor a eqMac-nak még mindig van helye, és ingyenes. A SoundDial hangerő-keverő, nem hangszínszabályzó.</p>

<p>De a legtöbben nem azért nyúlnak a eqMac erősítőjéhez, mert formálni akarják a frekvenciákat, hanem egy alkalmazással hangosabbra vagy kiegyensúlyozottabb keverékre. Ha Ön az, egy speciális keverő a tisztább megoldás. Akár mindkettőt futtathatja: tartsa meg a eqMac-t a rendszerszintű EQ-görbéhez, és használja a SoundDial-t az alkalmazásonkénti szintekhez. Nem ugyanazért a munkáért veszekednek.</p>

<h2>Hogyan viszonyul a többi Mac audioeszközhöz</h2>

<p>Mivel már szerszámvadászol, íme az őszinte táj:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> - a profi opció körülbelül 39 dollárért, alkalmazásonkénti EQ-val és teljes kimeneti útválasztással. Erőteljes, de közvetlen letöltésre van szüksége, és telepíti a hangrögzítő illesztőprogramot. Túlzás és drágább, ha csak alkalmazásonkénti mennyiséget szeretne profilokkal.</li>
<li><strong>Background Music</strong> - ingyenes és nyílt forráskódú, de az újabb macOS kiadásoknál megszakadhat, és nincs boost, nincs profilja és nincs automatikus leállítása. Nagyszerű, ha működik, frusztráló, ha nem.</li>
<li><strong>FineTune</strong> - egy ingyenes nyílt forráskódú menüsor alkalmazás. Érdemes megnézni, ha a 0 dollár a szigorú követelmény, bár a funkciók és a fényezés terén könnyebb.</li>
<li><strong>eqMac</strong> - ingyenes EQ plus booster, de nincs valódi alkalmazásonkénti keverő, amint azt fentebb leírtuk.</li>
</ul>

<p>A SoundDial a legjobb hely: koncentráltabb és olcsóbb, mint a SoundSource, képességesebb és megbízhatóbb, mint az ingyenes opciók, és elvégzi azt az alkalmazásonkénti feladatot, amit a eqMac nem.</p>

<h2>Miért számít itt a Mac App Store?</h2>

<p>Ezen eszközök közül több közvetlen letöltést és kernelszintű vagy rögzítő audio-illesztőprogramot igényel. Ezek működnek, de olyanok, amelyek elakadhatnak egy macOS frissítésen, vagy megakadhatnak egy lezárt Mac-ban.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> helyett a Mac App Store-n keresztül szállítják. Ez azt jelenti, hogy az Apple felülvizsgálta és homokozóban van, tisztán települ, nem kell DMG-t húzni, és nincsenek jóváhagyandó audio-illesztőprogramok vagy rendszerbővítmények. A frissítések a App Store-n keresztül érkeznek, mint bármely más alkalmazáshoz, és az eltávolítás normál törlés. Egy olyan menüsor-segédprogram esetében, amely érinti a hangot, ez az alacsonyabb súrlódású, alacsonyabb kockázatú út sokat ér.</p>

<h2>A gyors beállítás</h2>

<ul>
<li>Telepítse a SoundDial-t a Mac App Store-ról – nincs újraindítás, nincs meghajtó kérés.</li>
<li>Nyissa meg a menüsor ikonját; minden jelenleg hangot kibocsátó alkalmazás saját csúszkával jelenik meg.</li>
<li>Állítson be szintet, némítsa el azt, amire nincs szüksége, és fokozzon bármit, ami túl halk.</li>
<li>Mentse el az elrendezést profilként, majd hozzon létre többet játékhoz, hívásokhoz vagy fókuszáláshoz.</li>
<li>Kapcsolja be az automatikus halkítást, hogy a háttérhang automatikusan félrelépjen.</li>
</ul>

<p>Ez az egész hurok. Néhány percen belül megvan az alkalmazásonkénti vezérlés, a eqMac erősítője csak utal.</p>

<p><strong>Készen áll a valódi alkalmazásonkénti hangerőre a Mac készüléken?</strong> <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> – 14,99 € egyszeri, homokozó, nincs driver, és pontosan azt csinálja, amit egy menüsoros keverőnek kell.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "A legolcsóbb jó térfogatú keverő a Mac-hoz 2026-ban",
    description: "A legolcsóbb jó alkalmazásonkénti hangkeverőt keresi a Mac számára 2026-ban? Hasonlítsa össze a SoundDial, SoundSource, Background Music, FineTune és eqMac modelleket az ár, a biztonság és a funkciók tekintetében.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A legjobb ár-érték arányú alkalmazásonkénti hangkeverő a Mac számára 2026-ban <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy menüsor alkalmazás a Mac App Store modellen egyszeri 14,99 €-ért. Minden alkalmazásnak saját hangerő-csúszkát ad, valamint némítást, erősítést, profilokat és automatikus lecsökkentést – illesztőprogramok, előfizetés és kockázatos letöltések nélkül. Ez a legolcsóbb fizetős lehetőség, amely valóban megbízhatóan működik.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A legolcsóbb jó térfogati keverő a Mac számára 2026-ban" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért kell a "legolcsóbb" definíció</h2>
<p>Vannak ingyenes mennyiségi eszközök a Mac-hoz, így ha az egyetlen cél a nulla költés, akkor van lehetősége. Az ingyenes azonban általában valahol máshol kerül kiadásra: az új macOS-verziók törékenységébe, hiányzó szolgáltatásokba, mint például a boost vagy a profilok, vagy egy olyan telepítési folyamatba, amely egy hangrögzítő illesztőprogramot tartalmaz, amelyben megbíznia kell. A „legolcsóbb áru” a legalacsonyabb árat jelenti, amely továbbra is stabil, teljes értékű keverőt biztosít, amelyet továbbra is használni fog. Ez az az objektív, amit itt fogunk használni.</p>

<h2>Először is, amit a macOS nem csinál</h2>
<p>A Windows már évek óta rendelkezik alkalmazásonkénti hangerőkeverővel – kattintson a jobb gombbal a hangszóró ikonra, és állítsa be az egyes alkalmazásokat egymástól függetlenül. A macOS-ban még mindig nincs beépítve semmi egyenértékű. Kapsz egy főkötetet, és bármilyen belső csúszkát, amelyet egy alkalmazás szállít (zene, egyes böngészők). Nincs rendszerszintű mód arra, hogy a Slack-t halkabbá tegye, mint a Spotify-t, vagy hogy a csendes videohívást minden más fölé emelje. Az alábbi lehetőségek mindegyike létezik ennek a hiánynak a pótlására.</p>

<h2>A versenyzők, becsületesen beárazva</h2>

<h2>SoundDial – 14,99 €, egyszeri</h2>
<p>A SoundDial a menüsávban található, és minden futó alkalmazáshoz önálló hangerő-csúszkát ad. Az alapokon túl olyan funkciókat is hozzáad, amelyeket az emberek ténylegesen elérnek:</p>
<ul>
<li><strong>Alkalmazásonkénti növelés</strong> — a túl halk alkalmazást 100% fölé tolja ahelyett, hogy megerőltené, hogy meghallja.</li>
<li><strong>Alkalmazásonkénti némítás</strong> - némítsa el az egyik alkalmazást anélkül, hogy megérintené a többit.</li>
<li><strong>Hangerő profilok</strong> — mentse el a „munkahívás” vagy „mozi est” keverékét, és azonnal előhívja.</li>
<li><strong>Automatikus kacsázás</strong> - automatikusan eldobja a háttérhangot, ha valami fontosabb lejátszásra kerül.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a hangszórók, fejhallgatók és egyéb eszközök között ugyanabból a menüből.</li>
</ul>
<p>Mivel a Mac App Store-n van, homokozóban van, az Apple felülvizsgálta és tisztán telepíti – nincs DMG, nincs kernelbővítmény, nincs jóváhagyható audio-illesztőprogram. Te fizetsz <a href="https://apps.apple.com/app/id6772792641">14,99 € egyszer</a> és birtokolja. A legtöbb ember számára ez az édes pont: elég olcsó ahhoz, hogy egyszerű legyen, igen, elég komplett ahhoz, hogy ne nője ki.</p>

<h2>SoundSource – ~39 dollár, a profi opció</h2>
<p>A Rogue Amoeba SoundSource a nagy teljesítményű felhasználók aranyszabványa. Alkalmazásonkénti hangerőt és némítást végez, mint a SoundDial, de tovább megy az alkalmazásonkénti hangszínszabályzókkal és a teljes kimeneti útválasztással (az egyik alkalmazást a fejhallgatóra, a másikat a hangszórókra küldi). Valóban kiváló – de nagyjából 39 dollárba kerül, és a App Store-n kívülre telepíthető egy hangrögzítő komponenssel, amelyhez engedélyt kell adni. Ha alkalmazásonkénti EQ-ra vagy összetett útválasztásra van szüksége, megéri a pénzt. Ha csak egy tiszta, olcsó keverőt szeretne, akkor olyan képességekért kell fizetnie, amelyekhez soha nem fog hozzányúlni.</p>

<h2>Background Music – ingyenes, nyílt forráskódú</h2>
<p>A Background Music egy jól ismert ingyenes, nyílt forráskódú alkalmazás, amely alkalmazásonkénti hangerőt és automatikus szüneteltetést kínál. A csapda: mélyen beleköt a Core Audio-ba egy virtuális illesztőprogramon keresztül, és hosszú története van az új macOS kiadások feltörésének, néha kézi javításra vagy frissítés utáni újratelepítésre van szükség. Emellett hiányoznak a boost, a mentett profilok és az automatikus lecsökkenés. Nagyszerű olyan bütykök számára, akik nem bánják a karbantartást; frusztráló, ha csak azt akarod, hogy működjön.</p>

<h2>FineTune — ingyenes, menüsor</h2>
<p>A FineTune egy ingyenes, nyílt forráskódú menüsor hangerő-alkalmazás. Könnyű és kellemes, és az egyszerű alkalmazásonkénti beállításhoz ez is elég lehet. De mivel egy kis ingyenes projekt, nem egyezik a funkciók mélységével – nincsenek profilok, nincs automatikus lecsökkenés, és a boost/output kezelése korlátozott. Zéró költség, kevesebb garancia a hosszú élettartamra és a támogatásra.</p>

<h2>eqMac — ingyenes, EQ + erősítő</h2>
<p>A eqMac egy ingyenes rendszerszintű hangszínszabályzó hangerő-növelővel. Sokkal inkább a hang és a hangerő alakítása a teljes Mac-ban, mint az egyes alkalmazások keverése, így ez egy másik eszköz egy másik munkához. Ha kifejezetten alkalmazásonkénti vezérlést szeretne, a eqMac nem igazán a megoldás, bár ez egy remek ingyenes EQ.</p>

<h2>Ár vs. érték: a becsületes asztal</h2>
<ul>
<li><strong>Igazán ingyenes, de kompromisszumokkal:</strong> Background Music (törékeny, illesztőprogram-alapú), FineTune (vékony funkciók), eqMac (EQ, nem keverő).</li>
<li><strong>A legolcsóbb komplett fizetős alkalmazás:</strong> SoundDial 14,99 €-ért – erősítés, profilok, lehajlás, App Store biztonság.</li>
<li><strong>Prémium/profi:</strong> SoundSource ~39 dollárért – EQ és útválasztás, nem App Store telepítés.</li>
</ul>
<p>Másképpen fogalmazva: a SoundDial a SoundSource nagyjából egyharmadába kerül, miközben az emberek 90%-a által ténylegesen megkívánt funkciókat fedezi. És az ingyenes opciókkal ellentétben a macOS frissítés után sem fog csendben eltörni, mert nem támaszkodik egy törékeny rendszerszintű audio-illesztőprogramra.</p>

<h2>Melyiket érdemes választani?</h2>
<p>Ha profi vagy, akinek alkalmazásonkénti EQ-ra van szüksége, és az alkalmazásokat különböző kimenetekre irányítja, vásárolja meg a SoundSource-t – megéri az árát. Ha szereti a nyílt forráskódot, és nem bánja az időnkénti töréseket, próbálja ki ingyen a Background Music vagy a FineTune-t. De ha a legolcsóbb, éppen működőképes megoldást szeretné – független hangerő, erősítés, némítás, menthető profilok és automatikus lecsökkentés, biztonságosan telepítve a App Store-ból –, akkor a SoundDial egyértelmű értéknyertes 2026-ban.</p>

<blockquote>A legjobb mixer nem az, amelyik a legtöbb funkcióval rendelkezik, vagy nem a legalacsonyabb az ára – hanem az, amelyet egyszer beállít, és elfelejt. A 14,99 euróért a SoundDial könnyen hívható.</blockquote>

<p>Készen áll arra, hogy minden alkalmazásnak saját hangerőt adjon? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> egyszeri 14,99 euróért – előfizetés, illesztőprogramok, kockázat nélkül.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Windows hangerőkeverő a Mac-hoz: alkalmazásonkénti hangerőszabályozás",
    description: "Hiányzik a Windows hangerőkeverő a Mac készülékről? A macOS nem rendelkezik beépített alkalmazásonkénti hangerőszabályzóval. Íme a leggyorsabb módja annak, hogy megszerezze: SoundDial, egy 14,99 eurós menüsoros keverő.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A macOS nem rendelkezik olyan beépített hangerőkeverővel, mint a Windows, így nem állítható be alkalmazásonkénti hangerő a Rendszerbeállításokban. A leggyorsabb, megbízható javítás az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy 14,99 eurós menüsor-alkalmazás a Mac App Store-tól. Minden alkalmazásnak saját hangerő-csúszkát, némítást és erősítést biztosít – nincs illesztőprogram, nincs DMG, nincsenek kockázatos telepítések.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Windows hangerőkeverő a Mac-hoz: alkalmazásonkénti hangerőszabályozás" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért nincs a Windows Volume Mixernek Mac megfelelője?</h2>

<p>Ha Windows-ról váltott, az egyik első dolog, amit kihagy, az a Volume Mixer: kattintson jobb gombbal a hangszóró ikonra, és minden futó alkalmazás megkapja a saját csúszkáját. Kapcsolja le a Chrome-t, tartsa hangosan a Discord-t, némítsa el a Spotify-t – mindezt egy helyen.</p>

<p>A macOS ezt egyszerűen nem szállítja. Az Apple hangerőszabályzója egyetlen rendszerszintű csúszka. Bármilyen szintet állít is be, mindenre egyszerre vonatkozik. Nincs elrejtve alkalmazásonkénti opció a Rendszerbeállításokban, nincs Terminal parancs, nincs kisegítő lehetőségek kapcsolója. Ez egy valódi szakadék, és ez évek óta így van.</p>

<p>Az ok építészeti jellegű: az alkalmazások a Core Audio-n keresztül továbbítják a hangot a kimeneti eszközhöz, és az operációs rendszer nem tesz elérhetővé a felhasználó számára elérhető keverőt az egyes adatfolyamokhoz. A Windows élmény újrateremtéséhez szüksége van egy harmadik féltől származó alkalmazásra, amely belefér az audio útvonalba, és biztosítja az Apple által kihagyott vezérlőket.</p>

<h2>A legközelebbi egyezés: SoundDial</h2>

<p>A SoundDial egy menüsoronkénti hangerőkeverő, amelyet kifejezetten erre terveztek. Kattintson az ikonjára, és egy tiszta listát kap az összes lejátszott hangról, mindegyik saját csúszkával. Ez a legközvetlenebb "Windows Volume Mixer for Mac", amelyet telepíthet, és néhány olyan dolgot végez, amit a Windows keverő soha nem tudott:</p>

<ul>
<li><strong>Független kötet alkalmazásonként</strong> – az alapvető tulajdonság. Állítsa a Chrome-t 40%-ra, a Zoom-t 100%-ra, a zenét 20%-ra.</li>
<li><strong>Alkalmazásonkénti némítás</strong> - némítsa el az egyik alkalmazást anélkül, hogy megérintené a többit.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés</strong> - nyomjon meg egy csendes alkalmazást <em>fentebb</em> 100%, ha a saját hangja túl halk.</li>
<li><strong>Hangerő profilok</strong> - mentse el a keveréket (például "munkahelyi hívás" vagy "játék"), és azonnal hívja elő a csúszkák újrahúzása helyett.</li>
<li><strong>Automatikus kacsázás</strong> - automatikusan csökkenti a háttérhangot, ha valami fontosabb kezdődik, például egy hívás.</li>
<li><strong>Gyors kimenet váltás</strong> - Ugrás a hangszórók, fejhallgatók és egyéb eszközök között ugyanabból a menüből.</li>
</ul>

<p>Mert rajta van <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, az Apple által felülvizsgált és homokozó. Tisztán, egyetlen kattintással telepíthető – nincs húznivaló DMG, nincs jóváhagyandó audio-illesztőprogram vagy rendszerbővítmény, nincsenek biztonsági kérdések. Egyszeri 14,99 euróért (előfizetés nélkül) ez a legegyszerűbb módja a különbség felszámolásának.</p>

<h2>Alkalmazásonkénti hangerő beállítása a Mac készüléken</h2>

<ol>
<li>Telepítse a SoundDial-t a Mac App Store készülékről.</li>
<li>Az első indításkor adja meg az általa kért egyszeri hangengedélyt.</li>
<li>Kattintson a SoundDial ikonra a menüsorban.</li>
<li>Húzza el a csúszkát bármelyik alkalmazás mellett a hangerő beállításához, vagy nyomja meg a némítás/kiemelés gombot.</li>
<li>Opcionálisan mentheti az aktuális keveréket profilként, hogy később visszaállíthassa.</li>
</ol>

<p>Ez az egész munkafolyamat. Úgy viselkedik, mint a már ismert Windows keverő, csak a menüsorból, ahelyett, hogy a tálcán jobb gombbal kattintana.</p>

<h2>Hogyan viszonyul a SoundDial más lehetőségekhez</h2>

<p>A SoundDial nem az egyetlen eszköz ezen a téren, ezért íme egy őszinte pillantás az alternatívákra.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> – körülbelül 39 dollár, és valóban profi: alkalmazásonkénti EQ, alkalmazásonkénti kimeneti útválasztás, effektusok. De ehhez közvetlen letöltésre és egy hangrögzítő illesztőprogramra van szükség, és túlzás (és drágább), ha csak alkalmazásonkénti hangerőt szeretne. Válassza ezt, ha EQ-ra és útválasztásra van szüksége; válassza a SoundDial-t, ha a keverőt bonyolultság vagy meghajtó nélkül szeretné.</li>
<li><strong>Background Music</strong> - ingyenes és nyílt forráskódú, ami nagyszerű. A bökkenő: az újabb macOS verziókon eltörhet, és hiányoznak a boost, a mentett profilok és az automatikus lecsökkenés. Rendben, ha kényelmesen oldja meg a nyílt forráskódú audio-illesztőprogramokat; kevésbé ideális, ha valami működőképes dolgot akarsz.</li>
<li><strong>FineTune</strong> - egy ingyenes nyílt forráskódú menüsor alkalmazás. Könnyű, és érdemes megnézni, ha a költségvetés a prioritás, de Ön ingyen kereskedik fényezéssel, profilokkal és App Store biztonsággal.</li>
<li><strong>eqMac</strong> - ingyenes EQ és rendszerszintű booster. Ez először egy hangszínszabályzó, nem pedig egy alkalmazásonkénti keverő, tehát egy másik problémát old meg.</li>
</ul>

<p>A kompromisszum egyszerű. Az ingyenes eszközök nem kerülnek semmibe, de lehetnek törékenyek vagy jellemzően vékonyak. A SoundSource erős, de drága és illesztőprogram-alapú. A SoundDial a legjobb hely: egy egyszeri 14,99 eurós App Store biztonsági és sandboxing, valamint a profilok és az automatikus lecsúszás, amelyeket az ingyenes opciók kihagynak.</p>

<blockquote>Ha csak a Windows Volume Mixer élményre vágyik – alkalmazásonkénti csúszkák, némítás és erősítés, másodpercek alatt biztonságosan telepíthető –, a SoundDial a legközvetlenebb párosítás.</blockquote>

<h2>A lényeg</h2>

<p>A macOS nem ad Önnek Volume Mixert, és valószínűleg soha nem is fog. De nem kell egyetlen rendszerszintű csúszkával élnie. Egy dedikált menüsor-keverő visszaállítja a Windows-nál meglévő alkalmazásonkénti vezérlést, és a tetejére erősítést, profilokat és automatikus leállítást ad.</p>

<p>Készen áll arra, hogy az alkalmazásonkénti hangerőt a legegyszerűbben szerezze be? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> 14,99 €-ért – egyszeri, homokozóban, és másodpercek alatt telepíthető.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Állítsa be az alkalmazás hangerejét úgy, ahogy a Windows teszi – a Mac készülékén",
    description: "A Windows-nak van alkalmazásonkénti hangerőkeverője, de a macOS-nak nincs. Így állíthat be független hangerőt a Mac minden alkalmazásához – gyorsan, biztonságosan és illesztőprogramok nélkül.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel, mint a Windows-ban, így a leggyorsabb megbízható javítás <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy Mac App Store menüsor alkalmazás, amely minden alkalmazásnak saját hangerő-csúszkát, alkalmazásonkénti némítást és hangerőnövelést biztosít. Sandboxos, az Apple által felülvizsgált, illesztőprogramok nélkül telepíthető, és egyszeri ára 14,99 €.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Állítsa be az alkalmazás hangerejét, mint a Windows — a Mac készülékén" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért képes erre a Windows, és miért nem a macOS?</h2>
<p>Ha használta a Windows-t, ismeri a gyakorlatot: kattintson jobb gombbal a hangszóró ikonjára, nyissa meg a Hangerőkeverőt, és húzzon egy külön csúszkát a Chrome, Spotify, Discord és bármi más zajhoz. Egyszerű és csak működik.</p>
<p>A macOS soha nem szállított megfelelőt. Az Apple hangvezérlői globálisak – egyetlen fő hangerő az egész rendszerhez. Elnémíthat egy alkalmazást úgy, hogy elnémítja a forrást az alkalmazáson belül (ha még van vezérlője), de nincs egységes hely, ahol azt mondanák, hogy "tartsa a zenémet 40%-on, míg a megbeszélésem 100%-on marad". Pontosan ez a hiányosság az oka a harmadik féltől származó keverőknek.</p>

<h2>A leggyorsabb megoldás: menüsor mixer</h2>
<p>A Windows élményhez legközelebbi párja egy menüsor-alkalmazás, amely felsorolja a futó audioalkalmazásokat, és mindegyikhez csúszkát ad. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pontosan ezt teszi. Kattintson az ikonjára a menüsorban, és a következőt kapja:</p>
<ul>
<li><strong>Független hangerő minden alkalmazáshoz</strong> — húzza le a Spotify-t a hívás érintése nélkül.</li>
<li><strong>Alkalmazásonkénti némítás</strong> — azonnal elnémíthatja az egyik zajos alkalmazást, a többit pedig hagyja játszani.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés</strong> — nyomjon meg egy túl halk alkalmazást <em>fentebb</em> 100%, ha a saját max még túl puha.</li>
<li><strong>Hangerő profilok</strong> — mentse el a "Work" vagy "Gaming" mixet, és egy kattintással előhívja.</li>
<li><strong>Automatikus kacsázás</strong> - automatikusan csökkenti a háttérhangot, ha valami fontosabb elindul.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a hangszórók, fejhallgatók és más kimenetek között ugyanabból a menüből.</li>
</ul>
<p>Mivel a Mac App Store-n van, homokozóban van, és az Apple felülvizsgálta, tisztán települ, és nincs húzható DMG, nincs kernelbővítmény, és nincs jóváhagyandó audio-illesztőprogram sem. Ez az utolsó rész többet számít, mint amilyennek hangzik – az illesztőprogram-alapú eszközök azok, amelyek általában elromlanak a macOS frissítése után.</p>

<h2>Hogyan kell beállítani (kb. két perc)</h2>
<ul>
<li><strong>1.</strong> Telepítse a SoundDial-t a Mac App Store készülékről, és indítsa el.</li>
<li><strong>2.</strong> Adja meg a macOS által kért hangengedélyt – ez az, ami lehetővé teszi az alkalmazás számára, hogy az alkalmazásonkénti adatfolyamokat lássa.</li>
<li><strong>3.</strong> Kattintson a SoundDial ikonra a menüsorban. Minden jelenleg hangot lejátszott alkalmazás saját csúszkával jelenik meg.</li>
<li><strong>4.</strong> Húzza el bármelyik alkalmazás csúszkáját a szint beállításához, vagy nyomja meg a némítás gombot. Növelje a 100%-ot, ha egy alkalmazás túl csendes.</li>
<li><strong>5.</strong> (Opcionális) Mentse el az aktuális mixet profilként, hogy később visszaállíthassa, és kapcsolja be az automatikus lecsökkentést, ha azt szeretné, hogy a háttérhang automatikusan leessen.</li>
</ul>
<p>Ez az egész munkafolyamat. Úgy viselkedik, mint a már ismert Windows Volume Mixer, leszámítva a beállítási súrlódást.</p>

<h2>Mi a helyzet az ingyenes és profi alternatívákkal?</h2>
<p>Vannak más módok is az alkalmazásonkénti hangerő elérésére a Mac készüléken. Érdemes tudni őket, hogy őszintén válassz.</p>
<blockquote>Az ingyenes eszközök pénzt cserélnek megbízhatóságra és funkciókra; Pro tools kereskedjen pénzzel és állítsa be a mélységet, amire nincs szüksége.</blockquote>
<p><strong>Background Music</strong> ingyenes és nyílt forráskódú, és alkalmazásonkénti mennyiséget biztosít. A bökkenő: mélyen beleköt az audiorendszerbe, és már régebben megtörte az újabb macOS kiadásokat, és hiányzik belőle a boost, a profilok és az automatikus leállítás. Ha működik az Ön beállításain, nagyszerű – de ez egy hazárdjáték a frissítések között.</p>
<p><strong>FineTune</strong> egy ingyenes, nyílt forráskódú menüsor alkalmazás a SoundDial szellemében. Remek kiindulópont, ha a költségvetés az egyetlen gond, bár ez egy közösségi projekt profilok és finomság nélkül.</p>
<p><strong>eqMac</strong> egy ingyenes rendszerszintű EQ és booster. Kiválóan alkalmas az általános hangzás kialakítására, de nem igazi alkalmazásonkénti keverő – a teljes kimenetet állítja be, nem pedig az egyes alkalmazásokat.</p>
<p><strong>SoundSource</strong> by Rogue Amoeba (körülbelül 39 dollár) a profi opció: alkalmazásonkénti EQ, alkalmazásonkénti kimeneti útválasztás és komoly hangmérnöki szolgáltatások. Kiváló – de közvetlen letöltésre van szüksége, és telepítenie kell egy hangrögzítő komponenst, és több mint duplája a SoundDial-nak. Ha stúdiószintű útválasztást és EQ-t szeretne, akkor ez a választás. Ha csak a Windows stílusú keverőt akarja, az túlzás.</p>

<h2>Melyiket érdemes venni?</h2>
<p>Ha az a cél, hogy „az én Mac-m úgy működjön, mint a Windows Volume Mixer” letöltések, illesztőprogramok és kockázatok nélkül, a SoundDial a legtisztább válasz. Alkalmazásonkénti hangerőt, némítást, erősítést, profilokat és automatikus lecsökkentést kap, mindezt App Store-mentesen, egyszeri 14,99 €-ért – előfizetés nélkül. Ehelyett csak akkor válassza a SoundSource lehetőséget, ha kifejezetten alkalmazásonkénti EQ-ra és kimeneti útválasztásra van szüksége, és próbálja ki az ingyenes lehetőségeket, ha kényelmesen megoldja a hibaelhárítást a macOS frissítések során.</p>

<p><strong>Készen áll arra, hogy minden alkalmazásnak saját hangerőt adjon?</strong> <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> és körülbelül két perc múlva állítsa be az első keveréket.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Hogyan tegyük hangosabbá a Mac-t a nagyothalló hallgatáshoz",
    description: "Nehezen hallja Mac-ját még maximális hangerőn is? Tanulja meg, hogyan fokozhatja és tisztázza a hangot alkalmazásonként a nagyothallók számára, beleértve a SoundDial-t és a beépített tippeket.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Ha a Mac nem elég hangos még maximális hangerőn sem, a leggyorsabb megbízható megoldás <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy Mac App Store menüsoros keverő, amely lehetővé teszi, hogy bármelyik alkalmazást 100% fölé emelje, és minden mást elnémítson. Ez hangosabb, tisztább beszédet jelent a FaceTime-ból, videóból vagy filmlejátszóból anélkül, hogy az egész rendszert megmozgatná. 14,99 euró, egyszeri.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Hogyan tegyük hangosabbá a Mac-t a nagyothalló hallgatáshoz" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért nem elég a hangerő-csúszka maximalizálása?</h2>
<p>A nagyothalló hallgatók számára a macOS hangerő-csúszka két bosszantó korláttal rendelkezik. Először is, 100%-ban korlátozza azt, amit maga az alkalmazás kiad. Ha egy podcastot, videót vagy hívást csendesen rögzítették, a „teljes hangerő” még mindig túl halk. Másodszor, a macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A Windows már évek óta rendelkezik ilyennel, de a Mac-n minden alkalmazás egyetlen mesterszinten osztozik. Így ha mindent felhangosít, hogy halk hangot halljon, a háttérzene és az értesítési hangok is kellemetlenül hangosak lesznek.</p>
<p>Amire valójában szüksége van, az az elkészítési képesség <em>egyet</em> az alkalmazás hangosabb, mint a többi, tolja túl a normál mennyezetén, és vágja le a versengő hangokat, hogy a beszéd kiemelkedjen. Pontosan ezt a hiányt pótolják ezek az eszközök.</p>

<h2>Először használja az ingyenes macOS kisegítő lehetőségeket</h2>
<p>Mielőtt bármilyen alkalmazást hozzáadna, érdemes beállítani, hogy mit kínál a macOS. Ezek elősegítik a tisztaságot, bár nem adnak hozzá nyers hangosságot:</p>
<ul>
<li><strong>Monó hang:</strong> Rendszerbeállítások &rarr; Kisegítő lehetőségek &rarr; Audio, kapcsolja be a „Sztereó hang lejátszása monóként” lehetőséget. Ha az egyik fülben erősebb a hallás, ez a teljes jelet mindkét fülbe küldi, így nem veszíti el a párbeszéd felét.</li>
<li><strong>Egyenleg beállítás:</strong> A Rendszerbeállítások &rarr; Hang részben húzza a bal/jobb egyensúlyt az erősebb füle felé.</li>
<li><strong>Háttérhangok csökkentése:</strong> Csökkentse a zenét és a hangulatot az ezt lehetővé tevő alkalmazásokban, így a hangok nem harcolnak a hangsáv ellen.</li>
<li><strong>Fejhallgató elhelyezés:</strong> Ha a AirPods-t vagy a Beats-et használja, akkor a rendszerbeállítások &rarr; Kisegítő lehetőségek &rarr; Audio &rarr; fejhallgató-egységek felerősíthetik a lágy hangokat és beszédre hangolhatnak.</li>
</ul>
<p>Ezek valóban hasznosak és nem kerülnek semmibe. De egyikük sem készít egyetlen csendes alkalmazást sem <em>100%-nál hangosabb</em>, és általában ez az igazi probléma.</p>

<h2>Hogyan lehet egy alkalmazást 100%-ra növelni a SoundDial segítségével</h2>
<p>A SoundDial a menüsávban található, és egy csúszkát mutat minden, éppen hangot lejátszott alkalmazáshoz. Íme az a munkafolyamat, amely leginkább a nagyothalló hallásnál segít:</p>
<ul>
<li><strong>Növelje az éppen hallgatott alkalmazást.</strong> Húzza a csúszkát 100% fölé, hogy a csendes videohívást vagy podcastot az alkalmazás által önmagában megengedő mérték fölé erősítse.</li>
<li><strong>Minden más némítása vagy halkítása.</strong> Húzza le a zenét, a böngészőfüleket vagy az értesítési hangokat, hogy semmi se versenyezzen azzal a hanggal, amelyet követni próbál.</li>
<li><strong>Kapcsolja be az automatikus leállítást.</strong> Amikor elkezd beszélni egy hívás közben, a SoundDial automatikusan tompítja a többi hangot, így a beszélgetőpartner tisztán hallja, majd visszaállítja.</li>
<li><strong>Hangerőprofil mentése.</strong> Hozzon létre egy „videohívási” profilt, amelyben a konferencia-alkalmazás fel van erősítve, és minden más csendes, majd azonnal váltson rá ahelyett, hogy minden alkalommal újra beállítaná.</li>
<li><strong>Gyorsan kapcsolja a kimenetet.</strong> Ugyanabból a menüből ugorhat a hangszórók, a headset vagy a hallókészülékhez csatlakoztatott eszköz között, anélkül, hogy a Rendszerbeállítások között keresgélne.</li>
</ul>
<p>A boost funkció itt a legfontosabb. Mivel az alkalmazás kimeneti teljesítményét a natív maximum fölé emeli, a suttogó hangfelvétel olyasmivé válik, amit valóban hallhat, miközben a rendszer többi része kényelmes szinten marad.</p>

<h2>Egy gyors szó a torzításról</h2>
<p>Bármilyen szoftveres erősítés felerősíti a jelben lévő mennyiséget, így az amúgy is hangos hang 100%-os túllépése vágást okozhat. Gyakorlatilag erősítés <em>csendes</em> a tartalom kényelmes, érthető szintig tisztán hangzik. Kezdje szerényen, emelje fel, amíg a beszéd tiszta nem lesz, és húzzon vissza, ha elkezd durván hangzani. Fennmaradó hallási ügyeinek védelme, ezért törekedjen a tisztaságra a maximális hangerő helyett.</p>

<h2>Hogyan viszonyul a SoundDial az alternatívákhoz</h2>
<p>Van néhány lehetőség, és az őszinteség segít a megfelelő kiválasztásában:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~ 39 USD):</strong> Valóban profi, alkalmazásonkénti EQ-val és kimeneti útválasztással. Ha halláskárosodáshoz szeretne frekvenciákat faragni, akkor ez erős. De több mint kétszer annyiba kerül, közvetlen letöltést igényel, és telepít egy hangrögzítő illesztőprogramot. Ez több beállítási és rendszer-hozzáférési lehetőség, mint amennyit sokan szeretnének.</li>
<li><strong>Background Music (ingyenes, nyílt forráskódú):</strong> Alkalmazásonként ingyenes hangerőt kínál, de hiányzik belőle a boost, a profilok és az automatikus lecsökkenés, és az újabb macOS verzióknál megszakadhat, mivel mélyen az audiorendszerbe kapcsolódik.</li>
<li><strong>FineTune (ingyenes, nyílt forráskódú):</strong> Egy könnyű menüsor hangerő-alkalmazás. Az alapokhoz megfelelő, de a nagyothalló hallgatók által támaszkodó lendület, profilok és kacsázás nélkül.</li>
<li><strong>eqMac (ingyenes):</strong> Egyenlítő erősítővel. Hasznos a hang alakításához, de inkább az EQ-ra épül, mint a tiszta alkalmazásonkénti keverésre és profilokra.</li>
</ul>
<p>Hol <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kiemelkedik az ár, a biztonság és a fontos jellemzők egyensúlya. Mivel a Mac App Store-n van, az Apple felülvizsgálta és homokozóban van, tisztán települ DMG nélkül, és nincs szüksége audio-illesztőprogramokra vagy rendszerbővítményekre. Alkalmazásonkénti erősítést, némítást, hangerőprofilokat és automatikus csökkentést kapsz egyetlen egyszeri 14,99 eurós vásárlással, anélkül, hogy a macOS audioverembe belemélyedne.</p>

<h2>A lényeg</h2>
<p>Először állítsa be az ingyenes macOS kisegítő lehetőségeket, érdemes velük rendelkezni. De ha a valódi probléma az, hogy az egyik alkalmazás egyszerűen túl halk, akkor szüksége van egy olyan eszközre, amely egyetlen alkalmazást 100%-on túl tud tolni, a többit pedig lecsillapítja. Ez az alkalmazásonkénti fellendítés lényege, és a macOS önmagában nem teszi ezt meg.</p>

<p>Készen áll a Mac tényleges hallására? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> 14,99 €-ért növelje a szükséges alkalmazást, és hagyja, hogy az automatikus leállítás és a profilok tisztán tartsák a beszédet.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "A csendes alkalmazás növelése a Mac-n (múltbeli maximális hangerő)",
    description: "Egy alkalmazás túl halk még 100%-on is? Növelje ezt az alkalmazást a maximumon túl a Mac-n a SoundDial alkalmazásonkénti hangerőkeverővel. Íme a leggyorsabb javítás és az alternatívák.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Ha az egyik alkalmazás még maximális hangerőn is túl halk, a leggyorsabb megbízható megoldás az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy menüsoronkénti hangerőkeverő a macOS számára. Minden alkalmazásnak saját csúszkát és hangerőt ad <strong>lendületet</strong> amely egyetlen alkalmazást 100% fölé tol, így a suttogósan halk videohívás vagy böngészőlap hangosabbá válik anélkül, hogy megérintené a rendszer hangerejét. Ez egy egyszeri, 14,99 eurós alkalmazás a Mac App Store-n.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Csendes alkalmazás növelése a Mac készüléken (múltbeli maximális hangerő)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért csendes egy alkalmazás még 100%-ban is</h2>
<p>A macOS-nak csak egy fő kötete van. Amikor felemeli, minden hangosabb lesz együtt. De minden alkalmazás a saját belső szintjén is ad hangot, és ez a szint vadul változik. Egy csendesen elsajátított YouTube klip, egy Zoom hívó rossz mikrofonnal, egy játék alacsony párbeszédkeveréssel vagy egy böngészőlap lágy adatfolyammal mind messze minden más alatt marad, még akkor is, ha a Mac készüléke teljes gőzzel működik.</p>
<p>Az igazi probléma: a macOS-nak megvan <strong>nincs beépített alkalmazásonkénti hangerőkeverő</strong>. A Windows már évek óta rendelkezik ilyennel (a Volume Mixer, kattintson jobb gombbal a hangszóró ikonjára). A Mac-n nincs natív módja annak, hogy egy alkalmazást bekapcsoljon, miközben a többit magára hagyja, és egyáltalán nincs mód egyetlen alkalmazás felerősítésére sem. <em>fentebb</em> normál maximuma. Ez az a szakadék, amelyet eltalál.</p>

<h2>A leggyorsabb megoldás: csak ezt az alkalmazást fokozza</h2>
<p>Az alkalmazásonkénti keverő úgy oldja meg ezt, hogy beilleszti magát az alkalmazások és a kimenet közé, így képes az egyes adatfolyamokat függetlenül emelni vagy csökkenteni, és 100% fölé emelni egyet. -val <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, az áramlás rövid:</p>
<ul>
<li>Telepítse a Mac App Store készülékről, és nyissa meg. A menüsorodban él, nem egy lebegő ablakban.</li>
<li>Kattintson a menüsor ikonjára, hogy csúszkát jelenítsen meg minden, jelenleg hangot lejátszott alkalmazáshoz.</li>
<li>Keresse meg a csendes alkalmazást, és húzza el a csúszkát 100% fölé a növelés alkalmazásához. Csak ezt az alkalmazást erősíti.</li>
<li>Minden mást hagyj ott, ahol van. A rendszer hangereje és más alkalmazások érintetlenek maradnak.</li>
</ul>
<p>Mivel a lendület alkalmazásonként történik, egy lágy videohívást kényelmes szintre emelhet, miközben megakadályozza, hogy a zene vagy az értesítések fülsértőek legyenek. Ez az alapvető dolog, amire a beépített macOS vezérlők egyszerűen nem képesek.</p>

<h2>Megjegyzés az erősítésről és a kivágásról</h2>
<p>A Boost valóban hasznos, de erősítés, nem varázslat. Ha egy alkalmazás eredeti hangja nagyon halk vagy már torz, az erős forgatással kivágást okozhat, vagy nyilvánvalóbbá teheti a háttér sziszegését. A gyakorlatban egy mérsékelt erősítés tisztán javítja a "ez a hívás túl csendes" helyzetek túlnyomó többségét. Tolja felfelé, amíg az alkalmazás kényelmessé nem válik ahelyett, hogy a plafonhoz csapná, és a hang tiszta marad.</p>

<h2>A fellendítésen túl: mi segít még</h2>
<p>Ha már rendelkezik alkalmazásonkénti vezérléssel, néhány funkció végleg megszünteti a csendes alkalmazás problémáját:</p>
<ul>
<li><strong>Hangerő profilok</strong> — mentsen el egy beállítást (pl. „Zoom fokozása, Spotify csökkentése, Slack némítása”), és egy kattintással hívja elő, ahelyett, hogy minden ülésen újrahúzná a csúszkákat.</li>
<li><strong>Automatikus kacsázás</strong> – automatikusan lemeríti a többi alkalmazást egy kiválasztott alkalmazás lejátszásakor, így a megerősített hívás tisztán hallható a háttérhangon keresztül.</li>
<li><strong>Alkalmazásonkénti némítás</strong> — elnémíthat egy zajos alkalmazást anélkül, hogy bármi mást is szüneteltetne.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a hangszórók, fejhallgatók vagy külső interfész között ugyanabból a menüből.</li>
</ul>

<h2>Mi a helyzet az ingyenes és profi alternatívákkal?</h2>
<p>Vannak választási lehetőségei, és az őszinteség számít itt, tehát itt van az igazi táj.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) a profi választás 39 dollár körül. Alkalmazásonkénti hangerőt, alkalmazásonkénti EQ-t és teljes kimeneti útválasztást végez, több energiát, mint amennyire a legtöbb embernek szüksége van. A kompromisszumok: több mint a duplája, a App Store helyett közvetlenül letölthető, és egy hangrögzítő illesztőprogramot telepít, hogy elvégezze a munkáját. Ha hangmérnöki eszköztárat szeretne, az kiváló. Ha csak egy alkalmazással hangosabban szeretnél, az túlzás.</p>
<p><strong>Background Music</strong> ingyenes és nyílt forráskódú, és alapszintű alkalmazásonkénti hangerőre képes. De ez egy közösségi projekt, amelynek története az újabb macOS verziókra tört, és hiányzik belőle a 100% feletti lendület, a profilok és az automatikus leállítás. Nagyszerű, ha az egyetlen feltétel az ingyenes, és nem bánja az időnkénti törést.</p>
<p><strong>FineTune</strong> egy ingyenes, nyílt forráskódú menüsor alkalmazás, és <strong>eqMac</strong> egy ingyenes EQ és rendszererősítő. Mindkettőt érdemes kipróbálni, ha a költségvetés nulla. Csak tudd, hogy a közösség által fenntartott, az EQ-ra fókuszálnak vagy az alkalmazásonkénti felügyeletet kevésbé tudják kezelni, és ne csomagolják össze a profilokat és az áthelyezést egyetlen csiszolt csomagban.</p>
<p>Hol <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> földek: ez a középút. Olcsóbb, mint a SoundSource, képességesebb és megbízhatóbb, mint az ingyenes eszközök. <strong>Mac App Store</strong>, ami azt jelenti, hogy az Apple által felülvizsgált, homokozó, és tisztán telepíti a <strong>nincs DMG és nincs audio illesztőprogram vagy bővítmény</strong> hogy csatlakozzon a rendszeréhez. A legtöbb ember számára az őszinte ajánlás egyszerű: ha a legkevesebb gondot okozó javítást szeretné, amely lendületet, profilokat és automatikus lecsúszást is ad, akkor ez a legjobb érték 14,99 € egyszeri áron.</p>

<h2>Gyors válasz, megismételve</h2>
<blockquote>Ha az egyik Mac alkalmazást hangosabbá szeretné tenni a maximálisnál, használjon alkalmazásonkénti hangerőkeverőt erősítéssel. Nyissa meg a SoundDial-t a menüsorról, keresse meg a csendes alkalmazás csúszkáját, és húzza át 100% fölé. Csak ez az alkalmazás lesz hangosabb.</blockquote>

<p>Hagyja abba a harcot egyetlen hangerőcsúszkával az egész Mac-ért. Kap <a href="https://apps.apple.com/app/id6772792641">SoundDial a Mac App Store modellen</a> Egyszer 14,99 euróért növelje meg a csendes alkalmazást másodpercek alatt, és mentse el a profilt, hogy soha többé ne kelljen rá gondolnia.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "A csendes videók és podcastok felerősítése a Mac készüléken",
    description: "Egyes YouTube videók, podcastok és előadások túl csendesek még 100%-on is. A következőképpen növelheti az alkalmazásonkénti hangerőt a macOS maximális értékénél a SoundDial segítségével.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A leggyorsabb, megbízható javítás az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy Mac App Store menüsoros keverő, amely minden alkalmazásnak saját hangerő-csúszkát és valódi <strong>lendületet</strong> ami a 100%-ot meghaladja. Nyissa meg a böngészőt vagy a podcast-lejátszót, húzza a csúszkát a maximum fölé, és egy halk videó vagy előadás azonnal hangosabbá válik – nincs illesztőprogram, nincs újraindítás.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – A csendes videók és podcastok felerősítése a Mac készüléken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért túl csendesek egyes videók és podcastok?</h2>
<p>100%-ra forgatja a Mac-ját, és az interjú továbbra is suttogás. Ez nem a te képzeleted. A hangot vadul különböző hangerőszinteken lehet elsajátítani – egy laptop mikrofonra felvett webinárium, egy csendes indie podcast vagy egy régi előadás-feltöltés 15–20 dB-lel lejjebb kerülhet egy professzionálisan készített YouTube videó alatt. A rendszer hangereje már max.</p>
<p>Íme a csapda: a macOS rendelkezik <strong>nincs beépített alkalmazásonkénti hangerőkeverő</strong>. A Windows már évek óta rendelkezik ilyennel (a Volume Mixer a rendszertálcán), de a Mac-n a hangerőszabályzó gombok mindenre egy globális szintet mozgatnak. Nincs natív módja annak, hogy azt mondjuk, hogy „csak ez a böngészőlap legyen hangosabb” – nem beszélve arról, hogy egyetlen alkalmazást 100%-on túllépjünk.</p>

<h2>Az igazi megoldás: alkalmazásonkénti hangerőnövelés</h2>
<p>Ahhoz, hogy egy csendes forrás hangosabb legyen, mint amit a hangszórók általában lehetővé tesznek, olyan szoftverre van szükség, amely az erősítést alkalmazza <em>konkrétan azt az alkalmazást</em> és a 100%-os plafonon túl is erősíthet. Pontosan ezt csinálja az alkalmazásonkénti keverő, amely gyorsító funkcióval rendelkezik.</p>
<p>-val <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, minden futó alkalmazás megjelenik egy menüsor listában, saját csúszkával. Csúsztassa a csendes alkalmazást 150%-ra vagy 200%-ra, és a hang valós időben felerősödik. Mivel a lendület alkalmazásonként történik, minden más – a zene, az értesítések, a hívás egy másik ablakban – a normál szinten marad. Nem robbantja fel az egész rendszert, hogy egyetlen lágy podcastot halljon.</p>
<blockquote>A globális hangerő megkérdezi, hogy "milyen hangos a Mac?" Egy alkalmazásonkénti keverő megkérdezi, hogy „milyen hangos <em>ezt</em> alkalmazás?" – ez az a kérdés, ami valójában számít, ha az egyik videó halk, a többi pedig rendben van.</blockquote>

<h2>A csendes videó vagy podcast fokozása lépésről lépésre</h2>
<ul>
<li><strong>Telepítse a SoundDial-t</strong> a Mac App Store-tól. Sandboxban van és az Apple által felülvizsgált, így tisztán települ, mint bármely más alkalmazás – nincs külön letöltés, nincs hangillesztő, nincs engedélykesztyű.</li>
<li><strong>Kezdj el játszani</strong> a csendes videó, podcast epizód vagy előadás bármilyen alkalmazásban – Safari, Chrome, podcast kliens, VLC.</li>
<li><strong>Kattintson a SoundDial ikonra</strong> a menüsorban. Egy csúszkát fog látni minden jelenleg hangot kibocsátó alkalmazáshoz.</li>
<li><strong>Húzza az alkalmazás csúszkáját 100% fölé</strong> — először próbálja meg 150%-kal, majd nyomja feljebb, ha még mindig túl puha. A változás azonnali.</li>
<li><strong>Minden mást hagyj békén.</strong> Csak a feljavított alkalmazás lesz hangosabb; rendszere kiegyensúlyozott marad.</li>
</ul>
<p>Ha azon kapja magát, hogy minden nap ugyanazokat az alkalmazásokat – mondjuk egy podcast-lejátszót és a böngészőt – erősíti meg, elmentheti ezt a beállítást <strong>kötet profil</strong> és egy kattintással előhívja ahelyett, hogy minden alkalommal újra beállítaná.</p>

<h2>Óvatos szó az erősítésről</h2>
<p>A 100% feletti erősítés növeli a nyereséget, és a nyereségnek vannak határai. Nyomja meg elég erősen a nagyon halk, gyenge minőségű felvételt, és előfordulhat, hogy vágást vagy torzulást hallhat – ez a forrás, amely kifogy a tiszta jelből, nem pedig az alkalmazás hibája. Emelje addig, amíg kényelmesen hallhatóvá nem válik, majd kapcsolja vissza, ha durván hangzik. A beépített laptop hangszórókon az extrém hangerő is megterhelheti a meghajtókat, így ott könnyebben megy, mint jó fejhallgatóval vagy külső hangszóróval.</p>

<h2>Mi a helyzet az ingyenes vagy beépített opciókkal?</h2>
<p>Vannak alternatívái, és érdemes őszintének lenni velük kapcsolatban:</p>
<ul>
<li><strong>Rendszerhangerő + alkalmazásszintű csúszkák.</strong> Egyes lejátszók (VLC, néhány böngésző bővítményen keresztül) lehetővé teszik a saját hangzásuk fokozását. Rendben, ha valaha is csak egy alkalmazásban van szüksége rá – de elakad az egyes alkalmazások külön konfigurálása, egységes vezérlés és profilok nélkül.</li>
<li><strong>eqMac</strong> egy ingyenes EQ és booster. Növelheti a rendszerszintű hangerőt, de ez egy globális eszköz, nem egy tiszta alkalmazásonkénti keverő, és a teljes kimeneti szinten működik.</li>
<li><strong>Background Music</strong> ingyenes és nyílt forráskódú, és alkalmazásonkénti mennyiséget kínál. De egy hangrögzítési beállításra támaszkodik, amely a macOS újabb verzióinál megszakadhat, és hiányzik belőle a dedikált boost, a profilok és az automatikus leállítás.</li>
<li><strong>FineTune</strong> egy ingyenes, nyílt forráskódú menüsor-alkalmazás – egy könnyű lehetőség, ha szeretné az alapokat, és nem bánja a közösség által karbantartott szoftvereket.</li>
<li><strong>SoundSource</strong> by Rogue Amoeba (~39 USD) a profi nehézsúlyú: alkalmazásonkénti EQ, kimeneti útválasztás, működik. Letöltést és hangrögzítő illesztőprogramot is igényel, és több mint duplája a SoundDial. Túlzás, ha csak annyit szeretne, hogy a csendes hangot hangosabbá tegye.</li>
</ul>

<h2>Miért a SoundDial a praktikus választás?</h2>
<p>A SoundDial pont ennek a problémának a legjobb helye. ez van <strong>14,99 € egyszeri</strong> — nincs előfizetés — és tovább él a <strong>Mac App Store</strong>, ami azt jelenti, hogy homokozóban van, az Apple felülvizsgálja, és megbízható DMG vagy rendszerbővítmény nélkül telepíthető. Megkapja azt az alkalmazásonkénti lendületet, amit ténylegesen keresett, plusz profilokat, alkalmazásonkénti némítást, gyors kimenetváltást és <strong>automatikus kacsázás</strong> amely elrejti a többi alkalmazást, amikor az egyikre kell összpontosítania. Egyszerűen csinálja a hangos dolgot, a többit pedig jól.</p>

<p><strong>Belefáradt az erőlködésbe, hogy csendes videókat és podcastokat hallgasson?</strong> <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> 14,99 euróért, és minden alkalmazásnak saját hangerőt ad – ezzel a lendülettel, hogy bármit tisztán halljon.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Különböző hangerő beállítása a Mac minden alkalmazásához",
    description: "A macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A következőképpen állíthatja be a független, állandó hangerőszinteket a Mac egyes alkalmazásaihoz a SoundDial és az alternatívák használatával.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A macOS nem rendelkezik beépített móddal az egyes alkalmazásokhoz eltérő hangerő beállítására, ezért szüksége van egy menüsoros hangerőkeverőre. A leggyorsabb és legmegbízhatóbb javítás az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy Mac App Store alkalmazás, amely minden alkalmazásnak saját hangerő-csúszkát, alkalmazásonkénti némítást és olyan lendületet biztosít, amely 100% fölé tolja a csendes alkalmazásokat. Állítsd be egyszer a szinteket, és azok megmaradnak.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Különböző hangerő beállítása az egyes alkalmazásokhoz a Mac készüléken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért nincs a Mac-nak alkalmazásonkénti hangerőszabályzója?</h2>
<p>Ha váltott a Windows-ról, valószínűleg a Windows Volume Mixer megfelelőjét kereste, azt a kis panelt, ahol minden alkalmazásnak saját csúszkája van. Nincs ott. A macOS csak egy globális rendszerkötetet kínál. Legyen szó YouTube videóról, Zoom hívásról, Spotify-ról vagy játékról, mindegyik ugyanazon a mesteri szinten osztozik.</p>
<p>Addig jó, amíg nem. A Discord chat elnyomja a zenét. A böngészőhirdetés teljes hangerőn szólal meg, miközben a podcast csendesen szól alatta. A játék fülsiketítő, de a hanghívás a háttérben túl halk. Az Apple egyetlen "megoldása" az, hogy megnyitja az egyes alkalmazásokat, és manuálisan állítja be a belső hangerőt, ha az alkalmazásnak van ilyen, és minden munkamenetben újra megteszi.</p>
<p>A valódi alkalmazásonkénti vezérléshez szükség van egy kis segédprogramra, amely az alkalmazások és a kimeneti eszköz között helyezkedik el. Az alábbiakban bemutatjuk, hogyan kell helyesen csinálni, valamint őszinte megjegyzések az alternatívákról.</p>

<h2>A leggyorsabb út: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a menüsávban található, és felsorolja az összes olyan alkalmazást, amely jelenleg hangot játszik le. Mindegyik kap egy független csúszkát. Íme a teljes munkafolyamat:</p>
<ul>
<li><strong>Telepítés a Mac App Store-ból.</strong> Az Apple által felülvizsgált és homokozó, így nincs DMG, nincs audio-illesztőprogram, és nincs jóváhagyandó kernel vagy rendszerbővítmény. Úgy települ, mint bármely normál alkalmazás, és ugyanúgy eltávolítható.</li>
<li><strong>Kattintson a menüsor ikonjára.</strong> Minden aktív alkalmazáshoz megjelenik egy csúszka, valamint egy fővezérlő.</li>
<li><strong>Húzza a szintek beállításához.</strong> Kapcsolja le a Discord-t, tolja fel a Spotify-t, és egy kattintással teljesen némítsa el a zajos böngészőlap alkalmazását.</li>
<li><strong>Növelje a csendes alkalmazásokat.</strong> Ha egy alkalmazás még 100%-on is túl lágy, tolja 100% fölé az alkalmazásonkénti boost segítségével.</li>
<li><strong>Profil mentése.</strong> Tárolja "játék", "munkahelyi hívás" vagy "zene" egyvelegét, és azonnal váltson közöttük ahelyett, hogy minden nap újrahúzza a csúszkákat.</li>
</ul>
<p>Két funkciót érdemes kiemelni, mert ezek megoldják a legbosszantóbb forgatókönyveket:</p>
<ul>
<li><strong>Automatikus kacsázás</strong> automatikusan leengedi a többi alkalmazást egy kiválasztott alkalmazás lejátszásakor, így a zenéje lecsökken, amikor bejövő hívás érkezik, és utána visszatér, nem kell manuálisan nyomkodni.</li>
<li><strong>Gyors kimenet váltás</strong> lehetővé teszi, hogy ugyanabból a menüből ugorjon a fejhallgató és a hangszóró között anélkül, hogy belemerülne a rendszerbeállításokba.</li>
</ul>
<p>Mivel a szinteket a rendszer alkalmazásonként megjegyzi, és profilokba menti, ez az a rész, amire a legtöbb ember valójában vágyik: egyszer beállítja, és <em>marad</em> meg.</p>

<h2>Az ingyenes és fizetős alternatívák, őszintén összehasonlítva</h2>
<p>A SoundDial nem az egyetlen lehetőség, és az Ön igényeitől függően egy ingyenes eszköz is elegendő lehet. Íme egy korrekt összefoglaló.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>A SoundSource profi nehézsúlyú. Az alkalmazásonkénti hangerő mellett alkalmazásonkénti EQ-t és teljes kimeneti útválasztást végez, így az egyik alkalmazást a fejhallgatóba, a másikat pedig a hangszórókra küldheti. Valóban kiváló. A kompromisszumok: körülbelül 39 dollárba kerül, és ez nem egy tiszta App Store telepítés, hanem egy közvetlen letöltés, amelyhez hangrögzítő illesztőprogramot kell hozzáadni a rendszerhez. Ha hangszakértő vagy, akinek szüksége van EQ-ra és útválasztásra, akkor megéri. Ha csak azt szeretné, hogy minden alkalmazás a megfelelő hangerőn legyen, akkor az több eszközt és több beállítást tartalmaz, mint amennyire szüksége van.</p>

<h2>Background Music (nyílt forráskódú, ingyenes)</h2>
<p>A Background Music egy ingyenes, nyílt forráskódú alkalmazás, amely alkalmazásonkénti hangerőt és automatikus szüneteltetést kínál. A bökkenő a megbízhatóságban rejlik: virtuális audioeszközt telepít, és korábban feltört az újabb macOS kiadásokon, ami néha újratelepítést vagy javítást igényel a frissítések után. Hiányzik belőle a boost, a mentett profilok és a valódi automatikus lecsökkenés is. Nagyszerű, ha ingyenesre vágyik, és nem bánja az alkalmi karbantartást.</p>

<h2>FineTune és eqMac</h2>
<p>A FineTune egy ingyenes, nyílt forráskódú menüsor-alkalmazás, könnyű kiindulópont. A eqMac egy ingyenes hangszínszabályzó egész rendszerre kiterjedő boosterrel, amely inkább az EQ-t és az általános nyereséget célozza meg, mintsem arra, hogy minden alkalmazásnak saját állandó csúszkáját adja. Mindkettőt érdemes kipróbálni, ha szűk az igény, de egyik sem az „alkalmazásonként eltérő kötet, profilként mentve” munkafolyamatra összpontosít.</p>

<h2>Melyiket érdemes választani?</h2>
<ul>
<li><strong>Azt szeretné, hogy egyszerűen működjön, tisztán, profilokkal és automatikus lehúzással?</strong> SoundDial 14,99 € egyszeri áron, a App Store-tól, telepítendő illesztőprogramok nélkül.</li>
<li><strong>Alkalmazásonkénti EQ-ra és hangútválasztásra van szüksége, és nem bánja az árat vagy az illesztőprogramot?</strong> SoundSource.</li>
<li><strong>Ingyenesre vágyik, és nem baj, ha a macOS frissítésekor bütyköl?</strong> Background Music, FineTune vagy eqMac.</li>
</ul>
<p>A SoundDial igazi előnye a kombináció: független hangerő, némítás és erősítés minden alkalmazáshoz, átkapcsolható profilokba mentve, automatikus duzzasztással, mindezt egy homokozós App Store letöltésen belül, amelyben megbízhat és eltávolíthat egy kattintással, egyszeri 14,99 euróért, nem pedig előfizetésért.</p>

<blockquote>Se driver, se kiterjesztés, se DMG. Minden alkalmazás hangerejét állítsa be egyszer, mentse el profilként, a többit pedig hagyja, hogy az automatikus leállítás kezelje.</blockquote>

<p>Készen áll arra, hogy minden alkalmazásnak saját hangerőt adjon? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> és körülbelül egy perc alatt állítsa be a tökéletes keveréket.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Legyen egy alkalmazás csendesebb minden másnál a Mac készüléken",
    description: "Egy hangos alkalmazás elnyomja a többit a Mac-n? Íme a leggyorsabb és legmegbízhatóbb módja egyetlen alkalmazás hangerejének lehalkításának anélkül, hogy hozzáérne a többihez.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha egy alkalmazást le szeretné kapcsolni, miközben minden más a helyén marad, használja <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy menüsoronkénti hangerőkeverő a macOS számára. Nyissa meg, keresse meg a hangos alkalmazást a listában, és húzza le a csúszkát. Az alkalmazás azonnal csendesebbé válik, miközben a zenéje, hívásai és egyéb hangjai megtartják a saját szintjüket. Ez a leggyorsabb és legmegbízhatóbb javítás.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Tegyen egy alkalmazást minden másnál csendesebbé a Mac-n" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért teszi ezt olyan nehézzé a macOS?</h2>

<p>Íme a frusztráló igazság: a macOS-nak nincs beépített alkalmazásonkénti hangerőkeverője. A Windows-nak évek óta van ilyen (kattintson a jobb gombbal a hangerő ikonra, nyissa meg a Volume Mixert, kész), de a Mac-n a hangerőszabályzó gombok és a menüsor csúszkája csak egy dolgot vezérel: a fő kimenetet. Halkítsd le, és együtt minden csendesebb lesz. Kapcsolja fel, és a hangos alkalmazás továbbra is hangos lesz, csak a többivel együtt.</p>

<p>Tehát amikor egy játék hangeffektusai dübörögnek, egy böngészőlap automatikusan lejátszik egy hirdetést, vagy az értesítési zörgés folyamatosan ugrik a podcaston, az egyetlen natív lehetőségei esetlenek: az egész rendszer némítása, az egyes alkalmazások saját hangerő-beállításaiba ásni (ha van ilyen), vagy teljesen kilépni az elkövetőtől. Ezek egyike sem teszi lehetővé, hogy egyszerűen azt mondja: „tegye csendesebbé ezt az alkalmazást, és hagyjon békén minden mást”.</p>

<h2>A gyors megoldás: alkalmazásonkénti hangerőkeverő</h2>

<p>Az alkalmazásonkénti hangerőkeverő minden futó alkalmazásnak saját független csúszkát biztosít. Pontosan ez az irányítás hiányzik. -val <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> így néz ki:</p>

<ul>
<li><strong>Nyissa meg a menüsor keverőjét.</strong> Kattintson a SoundDial ikonra, és látni fogja az összes jelenleg hangot lejátszott alkalmazás élő listáját.</li>
<li><strong>Keresse meg a hangosat.</strong> A játék, a böngésző, a videohívás, az értesítési hangok, bármi, ami elnyomja a többit.</li>
<li><strong>Húzza le a csúszkát.</strong> Állítsa 40%-ra, 20%-ra, ahol kiegyensúlyozottnak érzi magát. A változás azonnali, és csak az alkalmazást érinti.</li>
<li><strong>Minden mást hagyj békén.</strong> A zenelejátszója, a hívása, a többi lapja mind megtartja a beállított hangerőt.</li>
</ul>

<p>Egyetlen alkalmazást egyetlen kattintással teljesen elnémíthat, miközben a többiek folytatják a lejátszást, vagy 100% fölé emelheti a csendes alkalmazást, ha túl lágy. Nincs az alkalmazás újraindítása, nincs búvárkodás a menüben.</p>

<h2>Gyakori esetek, amikor ez megmenti Önt</h2>

<ul>
<li><strong>Hangos játék háttérzene fölött.</strong> Csökkentse a játékot kényelmes szintre, és tartsa alatta a lejátszási listát teljes hangerőn.</li>
<li><strong>Böngészőben megjelenő hirdetések és videók.</strong> Rögzítse lejjebb böngészőjét, hogy a meglepetésszerű automatikus lejátszás soha ne üssön el.</li>
<li><strong>Hívásról vagy podcastról értesítés hallatszik.</strong> Kapcsolja le az értesítésekkel teli alkalmazást anélkül, hogy elnémítaná a valóban fontos hangot.</li>
<li><strong>Csendes videohívás hangos média mellett.</strong> A hangos alkalmazás lehalkítása helyett emelje 100% fölé a hívást, hogy tisztán hallja az embereket.</li>
</ul>

<h2>Állítsa be egyszer a hangerőprofilokkal és az automatikus halkítással</h2>

<p>Egy hangos alkalmazás javítása jó dolog, de valószínűleg azt szeretné, hogy javítva maradjon. A SoundDial két olyan funkcióval rendelkezik, amelyek ezt állandóvá teszik:</p>

<p><strong>Hangerő profilok</strong> Alkalmazásonkénti szintek készletét mentheti el, és egy kattintással előhívhatja őket. Hozzon létre egy „Gaming” profilt, ahol a játék 30%-on, a zene pedig 100%-on áll, valamint egy „Work” profilt, ahol a hívások felgyorsulnak, és minden más lecsökken. Váltson kontextust anélkül, hogy minden alkalommal újrahúzná a csúszkákat.</p>

<p><strong>Automatikus kacsázás</strong> automatikusan leengedi a többi alkalmazást, amikor egy kiválasztott alkalmazás lejátszik, majd utána visszahozza őket, így egy hangos alkalmazás eleve soha nem téríti el teljesen az Ön hangját. A profilok, a kacskaringós és a gyors kimeneti váltás (a rendszerbeállítások megnyitása nélkül ugrás a hangszórók és a fejhallgatók között) között egyszer beállíthatja az egyensúlyt, és abbahagyja a hangerő felügyeletét.</p>

<h2>Hogyan viszonyul a SoundDial az alternatívákhoz</h2>

<p>Vannak más módok is az alkalmazásonkénti hangerő elérésére a Mac készüléken. Íme egy őszinte pillantás:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 USD)</strong> valóban profi: alkalmazásonkénti EQ és teljes kimeneti útválasztás a hangerőszabályzón felül. De több mint a duplája, és külön letöltésre, valamint hangrögzítő illesztőprogramra van szüksége. Ha stúdió szintű eszköztárat szeretne, az kiváló. Ha csak egy alkalmazást szeretne leállítani, az több a kelleténél.</li>
<li><strong>Background Music</strong> ingyenes és nyílt forráskódú, ami nagyszerű, de az újabb macOS verziókon eltörhet, és hiányzik belőle a hangerőnövelés, a profilok és az automatikus csökkentés.</li>
<li><strong>FineTune</strong> egy ingyenes, nyílt forráskódú menüsor alkalmazás, és <strong>eqMac</strong> egy ingyenes EQ erősítővel. Mindkettőt érdemes kipróbálni, ha az ingyenesség a prioritás, de a fényezést, a megbízhatóságot és a funkciókat az árért keresed.</li>
</ul>

<p>A SoundDial a legjobb helyen áll: 14,99 € egyszeri, előfizetés nélkül. Mivel a Mac App Store-n található, az Apple felülvizsgálta és homokozóban van, és tisztán települ DMG, audio-illesztőprogramok és jóváhagyandó rendszerbővítmények nélkül. 39 dolláros árcédula vagy törékeny ingyenes eszköz nélkül megkapja azokat a funkciókat, amelyek valóban fontosak ebben a problémában: alkalmazásonkénti hangerő, némítás, erősítés, profilok és automatikus leállítás.</p>

<h2>A lényeg</h2>

<p>A macOS nem engedi, hogy önmagában egyetlen alkalmazást sem utasítson le, de ez az a hiányosság, amelyet másodpercek alatt bezárhat. Telepítsen egy alkalmazásonkénti keverőt, húzza lefelé a hangos alkalmazás csúszkáját, és a hang többi része pontosan ott marad, ahol szeretné. Mentsen el egy profilt, és soha többé nem fog harcolni ezzel.</p>

<p><strong>Készen állsz arra, hogy elhallgattasd azt az alkalmazást, amely a többit folyamatosan elfojtja?</strong> Kap <a href="https://apps.apple.com/app/id6772792641">SoundDial a Mac App Store modellen</a> 14,99 €-ért, egyszeri fizetés, illesztőprogramok, előfizetés nélkül.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mac hangkeverő streamerekhez: Balance mikrofon, játék és zene",
    description: "A leggyorsabb módja a mikrofon, a játékhang, a zene és a figyelmeztetések egyensúlyának a Mac streamelés közben. A SoundDial egy alkalmazásonkénti hangerőkeverőt kínál profilokkal és lecsökkentéssel.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A mikrofon, a játék, a zene és a figyelmeztetések egyensúlyba hozásához Mac-n való streamelés közben a leggyorsabb megbízható megoldás <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy menüsoronkénti hangerőkeverő. A macOS nem rendelkezik beépített keverővel, így a SoundDial lehetővé teszi, hogy alkalmazásonként független szinteket állítson be, növelje a halk forrásokat, mentse a streaming profilokat, és automatikusan lecsökkentse a zenét, amikor beszél.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac hangkeverő streamerekhez: Balance mikrofon, játék és zene" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>A probléma: A macOS-nak nincs alkalmazásonkénti hangerőszabályzója</h2>
<p>A Windows-nak évek óta megvan a Volume Mixer. A macOS továbbra sem szállít egyet. A rendszer hangerő-csúszkája mindent egyszerre mozgat, ami élő adásban hiábavaló. Egy adatfolyam során legalább négy forrással zsonglőrködsz, amelyek mind ugyanazért a kimenetért küzdenek:</p>
<ul>
<li><strong>A hang/mikrofon figyelése</strong> - mindenek felett kell ülnie.</li>
<li><strong>Játék hang</strong> – hangos, dinamikus, és hajlamos a tüskékre akció közben.</li>
<li><strong>Háttérzene</strong> - maradjon csendben a kommentárja alatt.</li>
<li><strong>Figyelmeztetések és csevegési hangok</strong> — Discord, Stream Deck, követői figyelmeztetések, értesítések.</li>
</ul>
<p>Alkalmazásonkénti vezérlés nélkül a végén a játék alkalmazáson belüli csúszkája lesz, kézzel elnémítod a Spotify-t, és egy hangos jelenetért imádkozol, hogy ne zúdítsd ki a nézőket. Ez nem keverék, hanem kárelhárítás.</p>

<h2>Mit kell tennie egy megfelelő streaming keverőnek</h2>
<p>Az alkotóközpontú hangbeállítás a Mac-n négy dolgot kínál: független alkalmazásonkénti szintek, a túl halk forrás erősítésének képessége, az azonnal visszahívható mentett konfigurációk és az automatikus lecsökkenés, így a zene a beszéd pillanatában elhallgat. A SoundDial mind a négyet lefedi a menüsorból.</p>

<h3>1. Független hangerő minden alkalmazáshoz</h3>
<p>Állítsa a játékot 60%-ra, a zenét 25%-ra, a Discord-t 80%-ra, a böngészőt pedig 40%-ra – minden alkalmazásnak saját csúszkája van. Semmi másba nem vérzik bele. Alkalmazásonként is némíthat azonnal, ha egy forrás rosszul működik a stream közben, anélkül, hogy magát az alkalmazást érintené.</p>

<h3>2. Hangerőnövelés csendes forrásokhoz</h3>
<p>Egyes alkalmazások és játékok egyszerűen túl csendesek még 100%-on is. A SoundDial alkalmazásonkénti erősítése túllépi a forrást a normál plafonon, így egy döcögős játék vagy egy kis hangerősségű videó ott lesz, ahol szükség van rá – nincs újrakódolás, nincsenek bővítmények.</p>

<h3>3. Hangerőprofilok különböző jelenetekhez</h3>
<p>Ez az a funkció, amely a legtöbb időt takarít meg a streamelőknek. A „Just Chatting” egyveleg (zene felfelé, játék lefelé) eltér a „Boss Fight” keverékétől (játék fel, zene szinte néma), amely eltér a „BRB” keverékétől. Mentse mindegyiket profilként, és egyetlen kattintással váltson négy csúszka élőben húzása helyett.</p>

<h3>4. Automatikus kacsázás, így a zene elhallgat a hangja alatt</h3>
<p>Az automatikus lecsökkentés automatikusan csökkenti a háttér hangját, amikor beszél, és visszaállítja, ha megáll. A szóló streamerek esetében ez a különbség a tiszta kommentár és a hangot folyamatosan eltemető zene között – manuális helyett automatikusan.</p>

<h2>Ahová a OBS illeszkedik</h2>
<p>A OBS az Ön műsorszórási eszköze, nem pedig az asztali hangerőkeverő. A OBS az Audio Mixer panelen és a szűrőkön keresztül szabályozza, hogy milyen szintek kerüljenek az adatfolyamba, de az általa rögzített hangforrásokból működik – nem nyúl be az egyes macOS alkalmazásokba, és nem kapcsolja le azokat rendszerszinten. A Mac esetében mindig is fájdalmas volt a tiszta, alkalmazásonkénti asztali hang beépítése a OBS-ba.</p>
<p>A gyakorlati munkafolyamat: a SoundDial segítségével állítsa be a tényleges alkalmazásonkénti szinteket a Mac készüléken, így a kiadott tartalmak már kiegyensúlyozottak, majd hagyja, hogy a OBS rögzítse és finomhangolja a sugárzási szinteket. Állítsa be egyszer a keveréket a forrásnál, és a OBS-nak sokkal kevesebb küzdenie kell vele. A SoundDial gyors kimeneti váltása lehetővé teszi a fejhallgató és a hangszórók közötti ugrást is anélkül, hogy a jelenetek között a rendszerbeállításokba merülne.</p>

<h2>SoundDial vs. az alternatívák</h2>
<p>Vannak választási lehetőségei, és az őszinteség itt számít:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 USD)</strong> - Pro-grade alkalmazásonkénti EQ-val és teljes kimeneti útválasztással. Kiváló, de több mint a duplája, közvetlen letöltést igényel, és telepít egy hangrögzítő illesztőprogramot. Túlzás, ha elsősorban alkalmazásonkénti tiszta szintre, erősítésre és leállításra van szüksége.</li>
<li><strong>Background Music (ingyenes, nyílt forráskódú)</strong> – valóban hasznos és ingyenes, de az újabb macOS verziókon tönkremehet, és nincs lendülete, nincs profilja, és nincs automatikus lecsúszása – a streamerek pontosan a funkciókra támaszkodnak.</li>
<li><strong>FineTune (ingyenes, nyílt forráskódú menüsor alkalmazás)</strong> - Könnyű alkalmazásonkénti vezérlés, de közösségi projekt az élő közvetítéshez épített profilok és kacskaringós kombináció nélkül.</li>
<li><strong>eqMac (ingyenes EQ + erősítő)</strong> — jó hangformálásra és hangosításra, de hangszínszabályzó, nem alkalmazásonkénti streaming keverő.</li>
</ul>
<p>A SoundDial szöge: ez a <strong>14,99 € egyszeri</strong> vásárolni a <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> – Az Apple által felülvizsgált, homokozóban, tisztán települ DMG és audio-illesztőprogramok vagy rendszerbővítmények nélkül. Ez az utolsó rész számít a streamelőknek: kevesebb kernelszintű komponens kevesebb meglepetésszerű törést jelent, amikor a macOS a streamelés előtti este frissít.</p>

<h2>Az őszinte kompromisszum</h2>
<p>Ha adásminőségű EQ-ra és összetett útválasztási láncokra van szüksége, a SoundSource megérdemli az árát. Ha szeretne egy ingyenes bütykös szerszámot, és nem bánja az időnkénti törést, a Background Music vagy a FineTune megteszi. De ha azt a keveréket szeretné, amit a streamelés valójában megkíván – alkalmazásonkénti szintek, boost, mentett jelenetprofilok és automatikus leállítás – egy biztonságos App Store telepítésből, amely túléli a macOS frissítéseket, akkor a SoundDial a legközvetlenebb út a pénzért.</p>

<p><strong>Készen állsz az adatfolyam hangjának javítására?</strong> Kap <a href="https://apps.apple.com/app/id6772792641">SoundDial a Mac App Store modellen</a> 14,99 €-ért – állítsa be egyszer mikrofon-, játék-, zene- és riasztási szintjeit, mentse el őket profilként, és hagyja, hogy az automatikus lecsillapítás a hangja felett maradjon.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "A hang recsegés és pattogás javítása a macOS Tahoe készüléken",
    description: "Recseg vagy pattog a hang a macOS Tahoe 26-ra való frissítés után? Javítsa ki a mintavételi frekvencia egyeztetésével, a CoreAudio alaphelyzetbe állításával, a Bluetooth kodek ellenőrzésével és a beépülő modulok ütközésének törlésével. Íme a teljes hibaelhárítási sorrend.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A macOS Tahoe 26-ra való frissítés utáni recsegés és pattogás szinte mindig a mintavételi frekvencia eltérése, a Bluetooth kodek ingadozása vagy egy elakadt CoreAudio folyamat. Javítsa ki a kimeneti mintavételi frekvenciával az Audio MIDI Setup menüben, és állítsa vissza <code>coreaudiod</code>, a Bluetooth fejhallgató elfelejtése és újrapárosítása, valamint az audio beépülő modulok kilépése. Dolgozzon át rajtuk az alábbi sorrendben.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Hogyan lehet javítani a hang reccsenését és pattanását a macOS Tahoe készüléken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Kezdje az olcsó javításokkal</h2>

<p>Mielőtt bármihez is hozzányúlna, zárja ki azt a két dolgot, amelyek a legtöbb esetben egy percen belül megoldódnak:</p>

<ul>
<li><strong>Indítsa újra a Mac-t.</strong> A Tahoe frissítés meglepően gyakran félig migrált állapotban hagyja az audiodémonokat. A tiszta újraindítás a semmiből újratölti a CoreAudio-t, és megszünteti a frissítés utáni recsegés nagy részét.</li>
<li><strong>Húzza ki, majd csatlakoztassa újra a kimeneti eszközt.</strong> Ha ez USB DAC, dokkoló vagy audio interfész, válassza le, várjon néhány másodpercet, majd csatlakoztassa újra. Próbáljon ki egy másik USB-portot is, ideális esetben közvetlenül a Mac-n, ne pedig hubon keresztül. A hangot továbbító hubok és kijelzők gyakori hangforrások.</li>
</ul>

<p>Ha a zaj túléli az újraindítást, az konfigurációs probléma, nem pedig hiba. Folytasd.</p>

<h2>Egyezzen meg a mintavételi gyakorisággal (a leggyakoribb ok)</h2>

<p>A klasszikus Tahoe recsegés abból ered, hogy a mintavételi frekvencia nem egyezik az eszköz által igényelt és a macOS által küldött adatok között. Ha egy alkalmazás 44,1 kHz-es hangot játszik le, és a rendszer 48 kHz-re van zárva (vagy fordítva), az újramintavételezés akadozhat vagy durranhat.</p>

<ul>
<li>Nyissa meg <strong>Audio MIDI beállítás</strong> (az Alkalmazások → Segédprogramok menüpontban, vagy keressen a Spotlightban).</li>
<li>Válassza ki a kimeneti eszközt a bal oldalsávon.</li>
<li>Nézd meg a <strong>Formátum</strong> legördülő menüt. Próbáld meg beállítani <strong>48000,0 Hz, 2 csatornás – 24 bites egész szám</strong> és tesztelje.</li>
<li>Ha a felbukkanás folytatódik, váltson erre <strong>44100,0 Hz</strong> és tesztelje újra.</li>
<li>Interfészek esetén győződjön meg arról, hogy a mintavételezési frekvencia megegyezik a DAW projektarányával.</li>
</ul>

<p>A formátum váltása arra is kényszeríti a CoreAudio-t, hogy újratárgyalja a kapcsolatot, ami önmagában sok esetet megold, még akkor is, ha ugyanazon az értéken áll vissza.</p>

<h2>Reset CoreAudio</h2>

<p>A CoreAudio háttérdémonként fut <code>coreaudiod</code>. Egy jelentősebb macOS frissítés után képes megtartani az elavult eszköz állapotát. Az újraindítás biztonságos, és azonnal, újraindítás nélkül hat.</p>

<p>Nyissa meg a Terminal-t, és futtassa:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Adja meg jelszavát, amikor a rendszer kéri. A hang egy másodpercre elhallgat, majd a démon automatikusan újraindul tiszta lappal. Ez az egyetlen leghatékonyabb javítás a semmiből felbukkanó recsegésre egy olyan gépen, amely a frissítés előtt rendben volt.</p>

<h2>Ellenőrizze a Bluetooth fejhallgatót és kodeket</h2>

<p>Ha a recsegés csak a AirPods vagy más Bluetooth fejhallgatón történik, a probléma általában a kodek egyeztetése, nem a hangszórók. A vezeték nélküli hangminőség romlik, ha a kapcsolat túlterhelt, vagy ha a macOS alacsony sávszélességű hívásmódba kerül.</p>

<ul>
<li><strong>Felejtse el, és párosítsa újra az eszközt.</strong> Lépjen a Rendszerbeállítások → Bluetooth menüpontra, távolítsa el a fejhallgatót, majd párosítsa újra. Ez alaphelyzetbe állítja az egyeztetett kodeket.</li>
<li><strong>Figyelje meg a hívásmód visszaesését.</strong> Amikor egy alkalmazás megnyitja a mikrofont, a macOS rossz minőségű kétirányú profilra kapcsolja a Bluetooth headsetet, ami ropogósan hangzik. Lépjen ki a konferencia- és hangalkalmazásokból, amelyeket nem használ, és a hűség visszatér.</li>
<li><strong>Csökkentse az interferenciát.</strong> Távolítsa el a zsúfolt 2,4 GHz-es környezeteket, és válassza le a Bluetooth-eszközöket, amelyekre nincs szüksége. Egy forgalmas rádiózenekar szaggatott durranásokat produkál.</li>
<li><strong>Kapcsolja ki a mikrofon bemenetet</strong> egy alkalmazás beállításaiban, ha csak hallgatnia kell, így a macOS megtartja a kiváló minőségű lejátszási profilt.</li>
</ul>

<h2>Lépjen ki az audio beépülő modulokból és a virtuális illesztőprogramokból</h2>

<p>A rendszerbővítményt vagy virtuális eszközt telepítő, harmadik féltől származó audioszoftver gyakori jogsértő az operációs rendszer ugrása után, mivel a kernel- és audiobővítményeket gyakran frissíteni kell egy új macOS verzióhoz. A gyanúsítottak között vannak virtuális audio-routerek, hangszínszabályzó alkalmazások, visszacsatolási eszközök és régebbi illesztőprogram-alapú segédprogramok.</p>

<ul>
<li>Lépjen ki minden hangszínszabályzóból, audio-routerből vagy visszacsatolási alkalmazásból, és ellenőrizze, hogy megszűnik-e a recsegés.</li>
<li>Ellenőrizze a Rendszerbeállítások → Általános → Bejelentkezési elemek &amp; bővítményeket, ha olyan hangbővítményeket talál, amelyek frissítésre vagy eltávolításra szorulnak.</li>
<li>Frissítse ezeket az alkalmazásokat Tahoe-kompatibilis kiadásukra, vagy távolítsa el azokat, amelyeket már nem használ. A halmozott audio-illesztőprogramok gyakran ütköznek egymással egy nagyobb frissítés után.</li>
</ul>

<p>Ha az egyik alkalmazás kilépése elnémítja a hangokat, akkor megtalálta a tettest. Telepítse újra az aktuális verziót, vagy hagyja ki.</p>

<h2>Szűkítés: rendszerszintű vagy egyetlen alkalmazás?</h2>

<p>Állapítsa meg, hogy a zaj mindenhol előfordul-e, vagy csak egy adott szoftverben. Játssz le egy helyi hangfájlt, majd egy böngészővideót, majd egy zenei alkalmazást. Ha csak egy alkalmazás recseg, a megoldás az adott alkalmazás saját hangbeállításai vagy frissítése, nem pedig a macOS. Ha az egész rendszerre kiterjed, a fenti lépésekben rejlik a válasz.</p>

<p>Ha még mindig elakad, indítsa el a csökkentett módot (tartsa lenyomva az Apple szilícium bekapcsológombját, majd válassza ki az indítólemezt, miközben lenyomva tartja a Shift billentyűt). A csökkentett mód nem tölt be harmadik féltől származó bővítményeket. Ha a hang tiszta, akkor egy bejelentkezési elem vagy illesztőprogram okozza, és egyenként engedélyezheti őket, hogy megtalálják.</p>

<h2>Miután a hang tiszta</h2>

<p>A recsegés meghajtó- és mintavételezési probléma, ezért a fenti javítások valójában megoldják. De amint a lejátszás stabil, egy másik korlátozást is észrevehet: a macOS továbbra sem rendelkezik beépített alkalmazásonkénti hangerőkeverővel, ahogy a Windows teszi. Nem lehet lehalkítani egy hangos alkalmazást anélkül, hogy mindent le ne halkítana.</p>

<p>Ez a szakadék <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kitölti. Ez egy menüsoros keverő, amely minden alkalmazásnak saját hangerő-csúszkát, alkalmazásonkénti némítást, sőt hangerőnövelést is biztosít a csendes alkalmazásokhoz, valamint gyors kimeneti váltást. Nem szünteti meg a recsegést, de ha a hangja egészséges, sokkal könnyebbé teszi a napi vezérlést.</p>

<p>Végezze el a fenti lépéseket sorrendben, és kezdje az újraindítással és a mintavételi gyakoriság ellenőrzésével. Ha később valódi alkalmazásonkénti vezérlést szeretne tiszta hangbeállításainál, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy 14,99 eurós egyszeri vásárlás a Mac App Store homokozóban, illesztőprogramok vagy telepítendő DMG nélkül.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Dadogás vagy kivágás a Mac-n (Tahoe Fix)",
    description: "A AirPods akadozása, kivágása vagy elejtése a macOS Tahoe készüléken szinte mindig Bluetooth interferencia vagy automatikus kapcsolási zavar. Így lehet újra párosítani, csökkenteni a 2,4 GHz-es torlódást, és leállítani a lejátszást megszakító átadásokat.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A AirPods dadogás vagy kivágás a macOS Tahoe-n szinte mindig Bluetooth interferencia, nem pedig egy törött headset. A szokásos bűnösök a 2,4 GHz-es Wi-Fi és a router torlódása, az agresszív automatikus eszközváltás és az elavult párosítás. Párosítsa újra a AirPods-t, kapcsolja ki az automatikus kapcsolót, és távolodjon el a zsúfolt 2,4 GHz-es csatornáktól, hogy megoldja a legtöbb esetet.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Dadogás vagy kivágás a Mac-n (Tahoe Fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért esik le a AirPods kifejezetten a Mac-ra?</h2>

<p>A AirPods a Bluetooth-t használja, amely megosztja a zsúfolt 2,4 GHz-es rádiósávot Wi-Fi-vel, mikrohullámú sütővel, USB 3 eszközökkel és szinte minden okoscsatlakozóval az otthonában. A Mac egy forgalmas rádió: a Wi-Fi, a Bluetooth, az AirDrop és a Continuity funkciókkal zsonglőrködik az átfedő antennákon. Amikor ez a sáv zsúfolttá válik, a Bluetooth hang akadozik először, mert nem tolerálja az elejtett csomagokat, ahogy a fájlátvitel.</p>

<p>A Tahoe varázsütésre nem rontotta a AirPods-t, de egy friss macOS telepítés gyakran visszaállítja a rádió viselkedését, újra engedélyezi a folytonossági átadásokat és újratárgyalja a kodekeket. Ezért úgy tűnik, hogy a problémák közvetlenül a frissítés után jelentkeznek. A jó hír: a javítások jól érthetők és többnyire ingyenesek.</p>

<h2>1. javítás: Párosítsa újra a AirPods-t (először ezt tegye)</h2>

<p>Az elavult vagy sérült párosítás túléli az újraindítást, és időszakos, véletlenszerűnek tűnő csökkenéseket okoz. Teljesen távolítsa el, majd csatlakoztassa újra a kapcsolatot:</p>

<ul>
<li>Nyissa meg <strong>Rendszerbeállítások, Bluetooth</strong>.</li>
<li>Kattintson az információs (i) gombra a AirPods mellett, és válassza ki <strong>Felejtse el ezt a készüléket</strong>.</li>
<li>Helyezze a AirPods-t a tokjukba, zárja le a fedelet, várjon 15 másodpercet, majd nyissa ki.</li>
<li>Tartsa lenyomva a tok hátulján található gombot, amíg a jelzőfény fehéren villogni nem kezd.</li>
<li>Párosítsa újra a Bluetooth listából.</li>
</ul>

<p>Amíg ott van, győződjön meg arról, hogy a AirPods firmware naprakész. Nincs manuális frissítő, de ha egy ideig a tokban hagyja a csatlakoztatott iPhone vagy Mac közelében, akkor a háttérben frissítheti őket.</p>

<h2>2. javítás: Kapcsolja ki az automatikus váltást</h2>

<p>Ez az egyetlen legnagyobb oka az Apple ökoszisztémájában élő emberek „kiszorulásának”. A AirPods megpróbál követni Önt Mac, iPhone és iPad között. Valahányszor a telefon úgy gondolja, hogy hangot kellene kapnia, a csatlakozás megakad a Mac-n, ami fél másodperces kiesést produkál a podcast közepén.</p>

<ul>
<li>A Mac: Bluetooth modellen kattintson az (i) gombra a AirPods mellett, állítsa be <strong>Csatlakozás ehhez a Mac-hoz</strong> hogy <strong>Amikor utoljára csatlakozik ehhez a Mac-hoz</strong> az Automatikusan helyett.</li>
<li>Az iPhone készüléken: Beállítások, koppintson a AirPods készülékére, <strong>Csatlakozás ehhez az iPhone-hoz</strong>, válassz <strong>Amikor utoljára csatlakozott ehhez az iPhone-hoz</strong>.</li>
</ul>

<p>Ez megállítja az eszközök közötti huzavonat. Manuálisan választhatja ki, hová kerüljön a hang, ami alacsony ár a stabil lejátszásért.</p>

<h2>3. javítás: Csökkentse a 2,4 GHz-es torlódást</h2>

<p>Ha leesik a videohívások, letöltések vagy mások streamelése közben, a rádió sávja telített. Néhány gyakorlati lépés:</p>

<ul>
<li><strong>Használja az 5 GHz-es Wi-Fi sávot</strong> a Mac készüléken. Az útválasztó beállításaiban adjon külön nevet az 5 GHz-es hálózatnak, és csatlakozzon hozzá. Ez felszabadítja a 2,4 GHz-es sávot a Bluetooth számára.</li>
<li><strong>Helyezze el az USB 3 és a Thunderbolt hubokat</strong> Mac és AirPods készülékeiből. Az USB 3 egy hírhedt 2,4 GHz-es zajforrás; a laptop mellett elhelyezkedő hub néhány centiméterről tönkreteheti a Bluetooth-t.</li>
<li><strong>Változtassa meg az útválasztó 2,4 GHz-es csatornáját</strong> 1-re, 6-ra vagy 11-re (a nem átfedő lehetőségek), és kerülje a zsúfolt csatornákat, amelyeken a szomszédai vannak.</li>
<li><strong>Tartsa a rálátást.</strong> A testek és a falak 2,4 GHz-et nyelnek el. Ha a Mac mögötted van vagy egy táskában van, a cseppek rosszabbodnak.</li>
</ul>

<blockquote>A Wi-Fi 6E és Wi-Fi 7 útválasztók közvetetten segíthetnek: ha eszközeit 6 GHz-re állítja, akkor a 2,4 GHz-es sáv törlődik, amelytől a Bluetooth függ. De egy rosszul konfigurált háló, amely folyamatosan 2,4 GHz-re irányítja vissza, ronthatja a helyzetet. Nézd meg, melyik zenekarban vagy valójában.</blockquote>

<h2>4. javítás: Állítsa vissza a Bluetooth és a Continuity veremét</h2>

<p>Ha az újrapárosítás nem sikerült, állítsa vissza magukat a rádiókat:</p>

<ul>
<li>Kapcsolja ki és be a Bluetooth-t a menüsorban, majd indítsa újra a Mac-t. Az újraindítás meglepően sok átmeneti hanghibát szüntet meg.</li>
<li>Állítsa alaphelyzetbe az SMC/NVRAM-ot Intel Mac-kon, vagy egyszerűen kapcsolja ki teljesen (ne indítsa újra) 30 másodpercre az Apple Silicon rendszeren.</li>
<li>Ha nem használja az AirDrop-ot vagy a Handoff-ot, az átadás-átvétel letiltása a Rendszerbeállítások, Általános, AirDrop &amp; Handoff menüpontban csökkenti a háttérben zajló rádiócsevegést.</li>
</ul>

<h2>Mi az, ami nem oldja meg (és mit csinál a hangerőkeverő)</h2>

<p>A hatókör tisztázása érdekében: ezek egyike sem szoftver-kötet-probléma, és egyetlen kötetalkalmazás sem tudja kijavítani a Bluetooth hivatkozást. Ha a hangja az <em>leejtés</em>, hajszolja a fenti rádiókérdést. Olyan alkalmazások, mint <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> alkalmazásonként vezérelheti a hangerőt, a némítást és a kimeneti kapcsolást, nem érnek hozzá a Bluetooth veremhez, így nem hagyják abba a dadogást. A keverő valóban segít abban, hogy a sok AirPods-felhasználó kihagyással keveredik össze: az egyik alkalmazás felrobban, míg a másik túl halk, vagy gyorsan kell ugrani a kimeneteket. Ez hangerő-egyensúlyi probléma, nem csatlakozási probléma.</p>

<p>Diagnosztizáljon őszintén. Ha a hang egy ütemre kiakad és visszatér, az interferencia vagy automatikus váltás. Ha a szintek egyenetlenek az alkalmazások között, ez egy keverési probléma, amelyet szoftverrel lehet megoldani.</p>

<h2>Gyors ellenőrző lista</h2>

<ul>
<li>Felejtse el, és párosítsa újra a AirPods-t.</li>
<li>Állítsa be a Mac-t és az iPhone-t is <strong>Amikor utoljára csatlakozott</strong>, nem Automatikusan.</li>
<li>Helyezze át a Mac-t 5 GHz-es Wi-Fi-re; tartsa távol az USB 3 hubokat.</li>
<li>Állítsa be a 2,4 GHz-et az 1., 6. vagy 11. csatornára.</li>
<li>Indítsa újra a Bluetooth váltás után.</li>
</ul>

<p>Miután a lemorzsolódás megszűnt, és csak tisztábban szeretné szabályozni az egyes alkalmazások lejátszásának hangosságát, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> megfelelő alkalmazásonkénti hangerőkeverőt, némítást, erősítést és gyors kimeneti kapcsolást ad hozzá, amelyet a macOS továbbra sem tartalmaz. Ez 14,99 eurós egyszeri vásárlás a Mac App Store homokozóban, illesztőprogramok telepítése nélkül.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "A jobb hangszóró elhalt a Mac-n a Tahoe frissítés után? Hogyan lehet javítani",
    description: "Az egyik hangszóró vagy csatorna leállt a macOS Tahoe-ra való frissítés után? Kezdje a hangegyensúly csúszkával, majd állítsa vissza a Core Audio-t, próbálja ki a csökkentett módot, és zárja ki a hardvert. Világos hibaelhárítási útmutató.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Ha a jobb hangszóró elnémult a macOS Tahoe-ra való frissítés után, ellenőrizze a hangot <strong>egyensúly csúszka</strong> először – frissítés közben elmozdulhat. Nyissa meg a Rendszerbeállítások &gt; Hang &gt; kimenetet, és győződjön meg arról, hogy a Balance holtpontban van. Ha ez rendben van, indítsa újra a Core Audio-t, indítsa el a csökkentett módot, majd zárja ki a hardvert. A legtöbb esetben szoftveres.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A jobb oldali hangszóró halott a Mac-n a Tahoe frissítés után? Hogyan lehet javítani" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Először is: az egyensúlyi csúszka (gyakrabban javítja, mint gondolná)</h2>

<p>A beragadt vagy elmozdult egyensúlycsúszka az egyetlen leggyakoribb oka annak, hogy az egyik csatorna elnémul – és a macOS frissítései időnként meglökik. Mielőtt a legrosszabbat feltételezné:</p>

<ul>
<li>Nyissa meg <strong>Rendszerbeállítások &gt; Hang</strong>.</li>
<li>Kattintson a <strong>Kimenet</strong> fület, és válassza ki a hangszóróit (beépített vagy külső eszköz).</li>
<li>Keresse meg a <strong>Egyenleg</strong> csúszkát, és húzza pontosan a közepére. Ha balra húzzák, a jobb oldali csatorna halottnak hangzik.</li>
</ul>

<p>Tedd ezt <em>kimeneti eszközönként</em>. A beépített hangszórók, fejhallgatók és minden külső interfész esetében külön megjegyzik a balansz beállítást – így a középen elhelyezett beépített egyensúly nem segít, ha a probléma az USB DAC-ban van.</p>

<h2>Tesztelje, hogy valóban hardveres csatorna-e</h2>

<p>Szabályozza be vagy ki gyorsan a hardvert. Játssz le egy jól ismert sztereó számot, majd csatlakoztass egy vezetékes fejhallgatót. Ha mindkét csatorna működik a fejhallgatóban, de nem a hangszórókon keresztül, akkor a probléma az audiomotor (hangszóró hardver vagy a kimeneti útvonal) mögött van. Ha ugyanaz a csatorna halott a fejhallgatóban is, akkor valószínűbb, hogy szoftver vagy a logikai kártya audiokodekje.</p>

<p>Ki is nyithatod <strong>Zene</strong> vagy QuickTime, játsszon le valamit, és váltsa az egyensúlyt erősen balra, majd erősen jobbra. Ha a hang tisztán mozog a csatornák között, akkor mindkét hangszóró él, és ez pusztán beállítási probléma.</p>

<h2>Indítsa újra a Core Audio-t</h2>

<p>A macOS az összes hangot átirányítja a készüléken <strong>coreaudiod</strong> folyamatot. Egy nagyobb frissítés után az állapota beékelődik – a kimenetek eltűnnek, a csatornák leesnek, vagy a hangerő furcsán viselkedik. Az újraindítás biztonságos, és arra kényszeríti a macOS-t, hogy újraépítse az audiografikont:</p>

<ul>
<li>Nyissa meg <strong>Terminal</strong> (Alkalmazások &gt; Utilities).</li>
<li>Futtatás: <code>sudo killall coreaudiod</code></li>
<li>Adja meg jelszavát. Az audiodémon egy-két másodpercen belül automatikusan újraindul.</li>
</ul>

<p>Semmi sem törlődik – ez csak újraindítja az audio alrendszert. Közvetlenül ezután tesztelje újra a jobb hangszórót.</p>

<h2>Indítsa újra megfelelően, majd próbálja meg a csökkentett módot</h2>

<p>A teljes újraindítás megszünteti az átmeneti hanghibákat, amelyeket a killall nem. Ha a csatorna még mindig halott, indítsa el <strong>biztonságos módban</strong>, amely minimális rendszert tölt be, és kihagyja a harmadik féltől származó hangkiterjesztéseket és bejelentkezési elemeket:</p>

<ul>
<li><strong>Apple szilícium:</strong> Zárd le. Tartsa lenyomva a bekapcsológombot, amíg meg nem jelenik az „Indítási beállítások betöltése” felirat. Válassza ki a lemezt, majd tartsa lenyomva <strong>Váltás</strong> és kattintson a "Folytatás csökkentett módban" gombra.</li>
<li><strong>Intel:</strong> Indítsa újra és tartsa lenyomva <strong>Váltás</strong> amíg meg nem jelenik a bejelentkezési ablak.</li>
</ul>

<p>Ha mindkét hangszóró csökkentett módban működik, akkor a frissítés előtt telepített harmadik féltől származó audio-illesztőprogram, virtuális eszköz vagy menüsor-segédprogram ütközik a Tahoe új hangcsomagjával. Indítsa újra a rendszert a normál állapotba, és távolítsa el vagy frissítse a nemrégiben telepített hangszoftvert (a képernyőrögzítők, a találkozóalkalmazások és az audio-routing kextek gyakori bűnösök).</p>

<h2>NVRAM visszaállítása (csak Intel Mac esetén)</h2>

<p>Az Intel Mac-kon a hang- és hangszóróbeállítások az NVRAM/PRAM-ban élnek, és az elavult érték túléli a frissítést. Állítsa vissza: kapcsolja ki, majd kapcsolja be és azonnal tartsa lenyomva <strong>Option + Command + P + R</strong> körülbelül 20 másodpercig, és hagyja, hogy a Mac egyszer újrainduljon. Ez nem vonatkozik az Apple Silicon Mac-kra – ezt automatikusan kezelik, ezért hagyja ki, ha M-sorozatú gépet használ.</p>

<h2>Frissítse újra – és ellenőrizze a pont kiadását</h2>

<p>Bármely nagyobb macOS verzió korai kiadása audio-illesztőprogram-hibákat tartalmaz, amelyeket később kijavítanak. Irány <strong>Rendszerbeállítások &gt; Általános &gt; Szoftverfrissítés</strong> és telepítsen minden függőben lévő Tahoe pont kiadást (14.x.1, 14.x.2 stb.). Ha létezik kiegészítő frissítés, az gyakran pontosan ezeket a frissítés utáni hangregressziókat kezeli.</p>

<h2>Amikor valóban hardverről van szó</h2>

<p>Ha a csökkentett mód, a Core Audio újraindítás és a tiszta újratelepítés mind meghiúsul – és ugyanaz a csatorna halott a fejhallgatóban –, akkor valószínűleg hardverhibát keres. A frissítés időzítése véletlen is lehet; a hangszóró erősítők és az audiokodekek meghibásodnak. Fuss <strong>Apple Diagnostics</strong> (kapcsolja ki, majd tartsa lenyomva az Apple Silicon bekapcsológombját, és válassza a Diagnosztika lehetőséget, vagy tartsa lenyomva <strong>D</strong> Intelnél indításkor). Ha megjelöl egy audiokomponenst, lépjen kapcsolatba <strong>Apple támogatás</strong> vagy egy felhatalmazott szolgáltató. Ne költsön pénzt egy kiégett hangszóró szoftverére.</p>

<blockquote>Gyors ökölszabály: ha a hang megfelelően pásztázik a balanszcsúszkával, akkor mindkét hangszóró fizikailag rendben van, és a javítás szoftveresen történik. Ha soha nem mozdul a holt oldalra, gyanakodjon a hardverre.</blockquote>

<h2>Hol illik a kötetszoftver (és hol nem)</h2>

<p>Az egyértelműség kedvéért: a hangerő-alkalmazás nem javítja ki a halott hangszórócsatornát – a fenti ellenőrzések az Ön útja. Ennek ellenére, ha a hangzás újra egészséges, a macOS-ból még mindig hiányzik valami, amivel a Windows évek óta rendelkezik: egy igazi alkalmazásonkénti hangerőkeverő. Ha azon kapta magát, hogy a hangbeállítások között keresgél, mert az egyik alkalmazás robbant, míg a másik túl halk, egy menüsor keverő, mint pl. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lehetővé teszi, hogy alkalmazásonként független hangerőt, némítást és akár erősítést állítson be a rendszeregyensúly érintése nélkül. Ez egy kényelmi eszköz a mindennapi keveréshez, nem a jelen cikkben szereplő probléma javítása.</p>

<h2>A rövid változat</h2>

<ul>
<li>Középre a <strong>Egyenleg</strong> csúszka – kimeneti eszközönként.</li>
<li>Tesztelje fejhallgatóval a hardver elkülönítéséhez.</li>
<li>Fuss <code>sudo killall coreaudiod</code>, majd indítsa újra.</li>
<li>Próbáld ki <strong>biztonságos módban</strong> a vezetői konfliktusok elkapására.</li>
<li>NVRAM alaphelyzetbe állítása az Intel rendszeren; telepítsen bármilyen Tahoe Point kiadást.</li>
<li>Még mindig halott a fejhallgató? Futtassa az Apple Diagnostics programot, és hívja az Apple-t.</li>
</ul>

<p>Ha a hangszórók visszatérnek a normál állapotba, ha az alkalmazásonkénti hangerővel való zsonglőrködés napi bosszúságot okoz, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> hozzáteszi a keverőt, a macOS mindig is hiányzott – 14,99 €, egyszeri, homokozó, illesztőprogram nélkül.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "A AirPods fél hangerőn elakadt a Mac készülékén? Itt a javítás",
    description: "Miért csatlakozik a AirPods a Mac-hoz fél hangerőn – általában egy Bluetooth kodek kapcsolója a kihangosító mikrofonprofilra –, valamint az újrapárosítási javítások és a szint végleges növelésének módja.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A AirPods általában fél hangerőre esik le a Mac esetében, mert a macOS átváltotta őket a kiváló minőségű A2DP audioprofilról az alacsony minőségű kihangosító (HFP) profilra, amely telefonhívási mikrofonhasználatra készült. Ez a mód korlátozza a kimenetet és a minőséget. Javítsa ki úgy, hogy a Mac-t csak fejhallgatóhoz állítja vissza, majd növelje a szintet, hogy ott is maradjon.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Fél hangerőn beragadt a Mac készüléken? Itt a javítás" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért történik ez: a kodek kapcsoló</h2>

<p>A Bluetooth audioeszközök, például a AirPods, két üzemmód egyikében futnak. Amikor csak hallgat, a macOS A2DP-t használ – teljes sztereó, teljes hangerő, tiszta minőség. De abban a pillanatban, amikor egy alkalmazás megkívánja a mikrofonját, a macOS a teljes kapcsolatot HFP-re (Hands-Free Profile) kapcsolja. A HFP egy kétirányú telefonkodek. Vékonyan, egyhangúan és észrevehetően halkabban szól, mert hanghívásokhoz tervezték, nem zenéhez.</p>

<p>A probléma az, hogy a macOS gyakran a HFP-ben marad még azután is, hogy a mikrofont megragadó alkalmazás elkészült – vagy a Zoom, FaceTime, Teams, Discord vagy egy mikrofonengedéllyel rendelkező böngészőlap megnyitásakor azonnal bekapcsol. Tehát a AirPods úgy hangzik, mintha „fél hangerőn” lenne, nem azért, mert a hangerő-csúszka elmozdult, hanem azért, mert a teljes hangprofil leminősült alatta.</p>

<p>Fel fogod ismerni: a hang hirtelen halk és tompa lesz, a AirPods kétszer jelenik meg a hangbeállításokban (egyszer kimenetként, egyszer mikrofonként), és a rendszer hangerejének teljes feltekerése alig segít.</p>

<h2>Az újrapárosítás és kodek kerülő megoldások</h2>

<p>Ezek az őszinte első lépések. Dolgozzon át rajtuk sorrendben – a koraiak egyike általában törli.</p>

<ul>
<li><strong>Változtassa meg a beviteli eszközt.</strong> Nyissa meg a Rendszerbeállítások → Hang → Bemenet menüpontot, és válassza ki a Mac beépített mikrofonját a AirPods helyett. Ez megakadályozza, hogy a macOS megtartsa a AirPods-t HFP módban, így a kimenet teljes A2DP minőségre emelkedhet. Ez a leghatékonyabb megoldás.</li>
<li><strong>Kapcsolja ki és be a Bluetooth-t.</strong> A kapcsolat gyors visszaállítása gyakran tisztán újratárgyalja az A2DP-t, különösen akkor, ha a AirPods egy hívás befejezése után elakad.</li>
<li><strong>Csatlakoztassa újra a AirPods-t.</strong> Csukja be a házat, várjon néhány másodpercet, nyissa ki újra a Mac közelében, és válassza ki újra a készüléket kimeneti eszközként.</li>
<li><strong>Lépjen ki az alkalmazásból, amely megragadta a mikrofont.</strong> Teljesen lépjen ki a Zoom, Teams, Discord vagy az adott böngészőlapból. Egyes alkalmazások a mikrofon munkamenetet nyitva tartják a háttérben, és rögzítik a HFP-t, amíg el nem tűnik.</li>
<li><strong>Párosítsa újra a semmiből.</strong> Távolítsa el a AirPods-t a Rendszerbeállítások → Bluetooth alatt (kattintson az információs gombra → Forget This Device), majd párosítsa újra. Ez törli a sérült profilegyeztetést, amelyet a váltás önmagában nem old meg.</li>
<li><strong>Állítsa vissza a AirPods-t.</strong> Nyitott állapotban tartva tartsa lenyomva a hátoldalon található beállítás gombot, amíg a lámpa borostyánsárgán, majd fehéren villogni nem kezd. Utána párosítsa újra. Ez a nukleáris lehetőség a firmware-szintű furcsaságokra.</li>
<li><strong>Frissítse a macOS és AirPods firmware-t.</strong> Az Apple a Bluetooth hangjavításokat pontszerű kiadásokban szállította. A AirPods firmware hangtalanul frissül, amikor egy csatlakoztatott eszköz közelében töltődik – ezért hagyja őket a tokban a Mac közelében egy éjszakára.</li>
</ul>

<blockquote><p>A figyelendő minta: ha a hangerő csökken abban a pillanatban, amikor csatlakozik egy híváshoz, és a hívás végén helyreáll, az a HFP kapcsoló – nem törött hangszóró vagy beállítási hiba.</p></blockquote>

<h2>Miért nem mindig maradnak be a javítások?</h2>

<p>Itt van a frusztráló rész. A macOS még az újrapárosítás után is boldogan visszakapcsolja a AirPods készüléket csendes kihangosító módba, amikor legközelebb bármilyen alkalmazás hozzáér a mikrofonhoz. Ezt a viselkedést nem lehet véglegesen letiltani a rendszerbeállításokban – az Apple automatikusként kezeli. Így a végén naponta többször is megismétli a beviteli eszköz trükköt, és bármely pillanatban, amikor a AirPods egy hívásban vagy egy mikrofonra éhes alkalmazásban van, ismét az alsó szintre korlátozódik.</p>

<p>Van egy másik, különálló probléma is, amelyet az emberek összekevernek ezzel: egyes alkalmazások csak csendesebbek, mint mások a rendszer maximális hangerején. Egy podcast-lejátszó vagy egy böngészőlap jóval a füled alatt maradhat, még akkor is, ha a AirPods tiszta A2DP-t futtat. A macOS egyetlen hangerő-csúszkát biztosít mindenhez, és nincs alkalmazásonkénti vezérlés, így nincs natív mód egyetlen csendes alkalmazás visszaállítására.</p>

<h2>Növelje újra a szintet – és tartsa ott</h2>

<p>Itt kapja meg a helyét az alkalmazásonkénti hangerőkeverő. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy menüsor-alkalmazás a macOS számára, amely minden futó alkalmazásnak saját független hangerő-csúszkát biztosít – beleértve a 100% feletti növelést. Tehát amikor a AirPods alacsonyabb hatásfokú szinten tér vissza egy hívásból, vagy egy adott alkalmazás egyszerűen túl halk, akkor húzza át az alkalmazást a normál plafonon, és ott marad.</p>

<p>Konkrétan ez azt jelenti:</p>

<ul>
<li><strong>Alkalmazásonkénti hangerő BOOST.</strong> Nyomjon egy csendes alkalmazást a normál maximum fölé, ahelyett, hogy erőlködne, hogy „teljes” rendszerhangerőn hallhassa.</li>
<li><strong>Hangerő profilok.</strong> Mentse el a szintek készletét – továbbfejlesztett böngésző, halkabb zene, hangos videohívások –, és egyetlen kattintással váltsa át a teljes elrendezést, hogy ne kelljen újra beállítani minden újracsatlakozás után.</li>
<li><strong>Gyors kimenet váltás.</strong> Ugorjon a AirPods, a laptop hangszórói és a külső DAC között a menüsorról anélkül, hogy a Rendszerbeállítások között böngésszen, ami segít, ha új profiltárgyalást kényszerít ki.</li>
<li><strong>Alkalmazásonkénti némítás és automatikus némítás.</strong> Csendesítse el az egyik alkalmazást anélkül, hogy megérintené a többit, és hagyja, hogy a média automatikusan lemerüljön, ha valami fontosabb lejátszásra kerül.</li>
</ul>

<p>Érdemes tisztázni, hogy ez mit tesz és mit nem. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nem kényszeríti a macOS-t arra, hogy A2DP-ben maradjon – a fenti bemeneti eszköz trükk továbbra is magának a kodeknek az eszköze. Alkalmazásonként visszaadja azt a hangerőt, amelyet a visszaminősítés ellopott, így egy csendes AirPods munkamenet vagy egy makacsul lágy alkalmazás egyetlen húzással javítható az elveszett ügy helyett. És mivel ez egy homokozós Mac App Store alkalmazás, nincs telepíthető audio-illesztőprogram, nincs DMG, nincs kernelbővítmény – csak fut.</p>

<h2>A rövid változat</h2>

<p>Ha a AirPods halkan és tomán szól a Mac-n, kapcsolja ki a beviteli eszközt a AirPods-ból, hogy kikényszerítse a kihangosító módból, és párosítsa újra, ha ez nem sikerül. Ha a szint még mindig nem éri el a kívántat – vagy egy alkalmazás túlságosan puha –, nyúljon az alkalmazásonkénti erősítéshez, így egyszer beállítja, és továbblép.</p>

<p>Belefáradt a hangerő-csúszka elleni küzdelembe, amikor hívást fogad? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> – egyszeri 14,99 euró, előfizetés, illesztőprogramok nélkül – és minden alkalmazásnak saját hangerőt biztosít.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "A Mac kötet folyamatosan visszaállítja magát a Tahoe-n? Hogyan zárjuk le végleg",
    description: "A macOS Tahoe óta sok Mac automatikusan megváltoztatja vagy visszaállítja a hangerőt. Íme, miért történik ez, hogyan lehet leállítani a beépített okokat, és hogyan zárolhat le egy rögzített kötetet alkalmazásonként, hogy az a helyén maradjon.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Ha a Mac hangereje a macOS Tahoe óta folyamatosan visszaállítja magát, a megoldás az automatikus beállítók megszüntetése: tiltsa le a hanglejátszást és a „Hang lejátszása indításkor”, állítsa vissza a hangbeállításokat, és csatlakoztassa újra a Bluetooth kimenetet. Alkalmazásonkénti szintek ugrálásához rögzítsen egy alkalmazásonként rögzített hangerőt egy keverővel, hogy soha többé ne sodródjon el.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A Mac kötet folyamatosan visszaállítja magát Tahoe-n? Hogyan zárjuk le végleg" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért változik magától a hangerőd Tahoe után?</h2>

<p>Az a hangerő, amely anélkül mozog, hogy megérintené, hardverhibának tűnik, de szinte mindig a szoftver határozza meg az Ön szintjét. A macOS számos automatikus viselkedéssel rendelkezik, amelyek csendesen elmozdítják vagy visszaállítják a kimenetet, és a Tahoe hangverem-módosításai közül néhányat észrevehetőbbé tettek. Mielőtt azt feltételezné, hogy az alkalmazás vagy a Mac meghibásodott, segít pontosan tudni, melyik rendszer fogja meg a csúszkát.</p>

<ul>
<li><strong>Hang leállítása:</strong> A macOS lehalkítja a többi hangot, ha úgy gondolja, hogy valami fontosabb játszik le (Siri, kisegítő lehetőségek közleményei, értesítések). A trigger lejárta után a szint néha nem jön vissza egészen.</li>
<li><strong>Bluetooth kézfogás visszaállítása:</strong> A AirPods és más Bluetooth eszközök csatlakozáskor újratárgyalják a hangerőt. A munkamenet közbeni újracsatlakozás a kimenetet az alapértelmezettre vagy sokkal hangosabb/halkabb szintre kapcsolhatja.</li>
<li><strong>Kimeneti eszköz váltás:</strong> Amikor kihúzza a fejhallgatót, a dokkolót vagy a monitor hangszóróira vált, minden kimenet megjegyzi a saját hangerejét. Az oda-vissza váltás „véletlenszerű” visszaállításnak tűnik.</li>
<li><strong>Alkalmazásonkénti alapértelmezett beállítások:</strong> Egyes alkalmazások (böngészők, videolejátszók, konferenciaeszközök) saját hasznot állítanak be indításkor vagy új adatfolyam indulásakor, felülírva a meglévőket.</li>
<li><strong>Indítási hang és bejelentkezési állapot:</strong> A rendszerindítási hangjelzés és a bejelentkezés visszaszoríthatja a rendszer hangerejét egy olyan alapértelmezett szintre, amelyet nem Ön választott.</li>
</ul>

<h2>Először javítsa ki a beépített okokat</h2>

<p>Sorrendben dolgozd át ezeket. A legtöbb „visszaállítja magát” panaszok eltűnnek, amint a leállás és a Bluetooth kizárt.</p>

<ul>
<li><strong>Kapcsolja ki az indítási hangot.</strong> Rendszerbeállítások → Hang → törölje a jelölést <em>Hang lejátszása indításkor</em>. Ez megakadályozza, hogy a rendszerindító csengő visszaállítsa az alapszintet.</li>
<li><strong>Csökkentse vagy tiltsa le a kioldó triggereket.</strong> A Rendszerbeállítások → Kisegítő lehetőségek → Beszélt tartalom és Siri menüpontban kapcsolja ki a felmondott bejelentéseket, amelyekre nincs szüksége. A kevesebb trigger kevesebb olyan pillanatot jelent, amikor a macOS csökkenti a hangot, és elfelejti visszaállítani.</li>
<li><strong>Párosítsa újra a problémás Bluetooth eszközöket.</strong> Távolítsa el a AirPods-t vagy a fejhallgatót a Bluetooth beállításai közül, és párosítsa őket frissen. Az elavult profil gyakori oka annak, hogy a hangerő megszakad a csatlakozáskor.</li>
<li><strong>Minden kimeneti eszközt szándékosan állítson be.</strong> Csatlakoztasson minden használt kimenetet (beépített, monitor, fejhallgató), és állítsa be egyszer a hangerőt. A macOS eszközönként tárolja a hangerőt, így az összes beállításával elkerülhető a meglepetés, amikor vált.</li>
<li><strong>Állítsa vissza a Core Audio-t, ha elakadt.</strong> Nyissa meg a Terminal-t, és futtassa <code>sudo killall coreaudiod</code>. Ez újraindítja az audiodémont újraindítás nélkül, és törli a lefagyott állapotot, amely hibás szinteket okozhat.</li>
<li><strong>Frissítés, majd újraindítás.</strong> Az Early Tahoe Point kiadja a szállított hangjavításokat. Győződjön meg arról, hogy a legújabb verziót használja, és a frissítés után indítsa újra.</li>
</ul>

<p>Ha a visszaállítás leáll, a fentiek egyike volt a tettes. Ha a te <em>rendszer</em> A hangerő stabil, de az egyes alkalmazások hangosabban vagy halkabban sodródnak, mint minden más, így elérte a beépített vezérlők képességének határát.</p>

<h2>Az igazi különbség: a macOS nem tudja alkalmazásonként rögzíteni a hangerőt</h2>

<p>Itt van a frusztráló rész. A Windows-nak évek óta van alkalmazásonkénti hangerőkeverője – kinyitod, elhúzod az egyik alkalmazás csúszkáját, és ott is marad. A macOS még soha nem szállított ilyet. Pontosan egy rendszerhangerő-csúszka van, és minden alkalmazás ez ellen harcol. Tehát amikor egy böngészőlap automatikusan lejátszott hirdetést sugároz, vagy egy videohívás kétszer olyan hangos, mint a zenéje, akkor az egyetlen lehetőség az, hogy manuálisan állítsa be a fő hangerőt – ez az a „miért változik ez folyamatosan” ciklus, amelyből ki akar kerülni.</p>

<blockquote>A rendszercsúszka egyetlen megosztott tárcsázás. Alkalmazásonkénti keverő nélkül a macOS készleten lehetetlen „állítsd be és felejtsd el” – valami mindig felülír.</blockquote>

<h2>Alkalmazásonként rögzített hangerőt rögzíthet a SoundDial segítségével</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> hozzáteszi, a macOS alkalmazásonkénti keverő hiányzik. A menüsorban található, és minden futó alkalmazásnak saját hangerő-csúszkát ad, függetlenül a mestertől. Mivel megjegyzi az egyes alkalmazásokhoz beállított szintet, közvetlenül megoldja a „visszaállítja magát” problémát: egyszer dönt, és az alkalmazás minden alkalommal azon a hangerőn nyílik meg.</p>

<ul>
<li><strong>Független kötet alkalmazásonként:</strong> tartsa egyszerre a zenét 40%-on és a videohívást 80%-on, mester-csúszka zsonglőrködés nélkül.</li>
<li><strong>Alkalmazásonkénti némítás és erősítés:</strong> azonnal elnémíthatja a zajos alkalmazásokat, vagy 100%-on túl halk alkalmazást, ha a saját hangja gyenge.</li>
<li><strong>Mennyiségi profilok:</strong> mentse el a beállításokat a "munka", a "játék" vagy a "fókusz" számára, és egyetlen kattintással váltsa át a teljes keveréket.</li>
<li><strong>Automatikus leállítás az Ön feltételei szerint:</strong> automatikusan csökkenti a háttéralkalmazásokat, amikor beszél, vagy amikor egy kiválasztott alkalmazás aktív – ahelyett, hogy macOS döntene.</li>
<li><strong>Gyors kimenet váltás:</strong> ugorhat a hangszórók, fejhallgatók és monitorok között a menüsorból anélkül, hogy belemerülne a beállításokba.</li>
</ul>

<p>Ez 14,99 eurós egyszeri vásárlás a Mac App Store-tól – előfizetés, illesztőprogramok, DMG és kernelbővítmények nélkül. Mivel teljesen homokozóban van és App Store terjesztésű, nem telepít olyan örökölt audio kextet, amelyet a Tahoe blokkolhat a következő frissítéskor. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> beállítja a szinteket a támogatott API-k segítségével, így az emlékezett kötetek túlélik a frissítéseket és az újraindításokat.</p>

<h2>Melyik megközelítésre van valójában szüksége?</h2>

<p>Ha az egész rendszer hangereje ugrik, kezdje a fenti beépített javításokkal – a lecsökkentéssel, a Bluetooth-val és a legtöbb esetben az indítási hanggal. Ha ehelyett az a probléma, hogy mindig egy alkalmazás a furcsa, vagy eleged van abból, hogy a főcsúszka kompromisszum, akkor az alkalmazásonkénti keverő az egyetlen igazi megoldás. A macOS nem ad hozzá egyet, így egy menüsor eszköz a praktikus út egy keverékhez, amely valóban ott marad, ahol elhelyezted.</p>

<p>Belefáradt a Tahoe hangerő-csúszkájának üldözésébe? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> és zároljon egy megjegyzett kötetet minden alkalmazáshoz – 14,99 € egyszer, előfizetés nélkül, illesztőprogramok nélkül.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "A DAW monitor hangerejét a Mac rendszerhangjától külön szabályozhatja",
    description: "A macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel, így a DAW és a rendszerhangok egy szinten osztoznak. Így szabályozhatja a Logic, Ableton vagy GarageBand monitor hangerejét a böngészőtől és az értesítésektől függetlenül.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel, így a DAW és minden más egy rendszercsúszkán osztozik. Ahhoz, hogy a monitor szintjét a böngészőktől, a Slack-tól és az értesítésektől függetlenül állítsa be, alkalmazásonkénti hangerőszabályozásra van szüksége. Egy menüsor mixer, mint pl <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a Logic, a Ableton és a GarageBand saját hangerőt ad, külön a rendszerhangtól.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A DAW monitor hangerejének vezérlése a Mac rendszerhangjától külön" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért teszi tönkre egy hangerőcsúszka a megfigyelést?</h2>

<p>Amikor produkciót készít, a DAW csak egy a sok közül, ami hangot ad. Egy referenciasáv lejátszása a böngésző lapján történik. Megérkeznek a Slack pingek. A YouTube oktatóanyag egy második monitoron fut. A Windows esetében a Volume Mixer lehetővé teszi, hogy mindezt egymástól függetlenül kiegyensúlyozza. A macOS esetében az Apple soha nem szállított megfelelőt – a hangerőszabályzó gombok és a menüsor csúszkája mozog <em>mindent</em> egyszerre.</p>

<p>Ez valódi problémát okoz mindenkinek, aki fülből kever. Kényelmes felügyeleti szintet tárcsáz a Logic-ban, majd ugyanazon a szinten egy értesítés érkezik, és kifújja a fülét. Vagy lekapcsolja a rendszert, hogy megvédje hallását hangos áthaladás közben, és most a referenciasáv túl halk ahhoz, hogy összehasonlítsa vele. A megfigyelési referencia már nem stabil, és a stabil referencia a keverés lényege.</p>

<blockquote>Az állandó szintű monitorozás azon kevés szokások egyike, amelyek mérhetően javítják a mixeket. Ha a rendszerhangok folyton a főcsúszka mozgatására kényszerítik, elveszti az összhangot.</blockquote>

<h2>Mit jelent valójában a „külön DAW kötet”.</h2>

<p>Itt két különböző dolgot kevernek össze a gyártók, és érdemes szétválasztani őket:</p>

<ul>
<li><strong>Interfész / mester kimeneti szint</strong> — az audio interfész vagy a monitorvezérlő hardveres gombja. Ez beállítja az abszolút hallgatási hangerőt, és kalibrálás után a helyén kell maradnia.</li>
<li><strong>Alkalmazásonkénti szoftvermennyiség</strong> — milyen hangosak az egyes alkalmazások <em>előtt</em> eléri azt a kimenetet. Ez hiányzik a macOS-ból. Lehetővé teszi, hogy egységben tartsa a DAW-t, miközben a Chrome-t, a zenét vagy az értesítési hangokat az ágy szintjére állítja le.</li>
</ul>

<p>A másodikat akarod. A cél nem a DAW lehangolása, hanem az, hogy minden mást lelassítson hozzá képest, így a DAW a leghangosabb, legkonzisztensebb forrás marad, és a zavaró tényezők csendesen a háttérben maradnak.</p>

<h2>Hogyan kell csinálni egy alkalmazásonkénti keverővel</h2>

<p>Egy menüsor mixer, mint pl <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> felsorolja az összes jelenleg hangot lejátszott alkalmazást, és mindegyikhez saját csúszkát ad. A producer munkafolyamata így néz ki:</p>

<ul>
<li><strong>Kalibrálja egyszer a felületet.</strong> Állítsa be audio interfészét vagy monitorvezérlőjét egy kényelmes, megismételhető referenciaszintre, és hagyja el. Ez a rögzített horgonyod.</li>
<li><strong>Állítsa a DAW-t 100%-ra.</strong> A keverőben hagyja a Logic, Ableton vagy GarageBand készüléket teljes szoftverhangerőn, hogy egységesen haladjon át. A DAW saját master faderje továbbra is elvégzi a finom keverést.</li>
<li><strong>Húzzon le minden mást.</strong> Csökkentse a Chrome-t, a Safari-t, a Zenét és a Slack-t alacsonyabb szintre – mondjuk 40–60%-ra –, így a referenciaszámok és üzenetek a mix alatt helyezkednek el, ahelyett, hogy versenyeznének vele.</li>
<li><strong>Némítsa el a zajos dolgokat.</strong> Az alkalmazásonkénti némítás lehetővé teszi a böngésző vagy a csevegőalkalmazás teljes elnémítását anélkül, hogy megérintené a megfigyelési láncot. Egy kattintás, és a DAW továbbra is érintetlenül játszik.</li>
</ul>

<p>Mivel a DAW csúszkája soha nem mozdul, a megfigyelési referencia sziklaszilárd marad az egész munkamenet során. A gyors A/B-hez beindíthat egy referenciasávot, majd elnémíthatja, és a keverési szint egy decibelt sem változott.</p>

<h2>Csendes alkalmazás feljavítása mások elutasítása helyett</h2>

<p>Néha a probléma másfelé fut. Egy durva bemutató visszapattanás, egy hangjegyzet vagy egy csendes hivatkozás jóval a munkamenet szintje alatt szólal meg. Ha felfelé fordítja a kezelőfelületet, hogy meghallja, akkor most minden más túl hangos. Alkalmazásonként <strong>hangerőnövelés</strong> lehetővé teszi, hogy egyetlen csendes alkalmazást 100% fölé toljon, így az megfelel a munka szintjének – anélkül, hogy megérintené a kalibrált kimenetet. Ez az a darab, amilyen a Windows' keverőben soha nem volt, és az egyik leghasznosabb eszköz a DAW-n kívülről származó anyagok meghallgatásához.</p>

<h2>Profilok különböző típusú munkamenetekhez</h2>

<p>Az ideális egyensúly nem minden feladatnál azonos. A követés, a keverés és az alkalmi zenehallgatás az alkalmazásszintek eltérő keverékét kívánja. A hangerőprofilok lehetővé teszik a beállítások mentését és azonnali előhívását:</p>

<ul>
<li><strong>Keverés:</strong> DAW 100%, a böngésző és a zene alacsony, a csevegés elnémítva.</li>
<li><strong>Referencia hallgatás:</strong> Zene vagy streaming alkalmazás felfelé, DAW le.</li>
<li><strong>Hívások/együttműködés:</strong> A konferenciaalkalmazás felfelé, a DAW visszahúzva, hogy ne vérezzen bele a hívásba.</li>
</ul>

<p>A profilváltás felülmúlja az öt csúszka kézzel történő beállítását minden sebességváltáskor.</p>

<h2>Automatikus leállítás és gyors kimenet váltás</h2>

<p>Még két dolog számít egy stúdióban. <strong>Automatikus kacsázás</strong> automatikusan lemeríti a háttéralkalmazásokat, amikor egy prioritást élvező forrás beszél vagy játszik, így egy hívás vagy egy fontos hang mindig átjön. És <strong>gyors kimenet kapcsolás</strong> A menüsorból a kezelőfelület, a monitorok és a fejhallgatók között ugrálhat anélkül, hogy belemélyedne a rendszerbeállításokba – ez állandó feladat, amikor különböző rendszereken keresi a keveréket.</p>

<h2>Miért nem egy virtuális audio-illesztőprogram?</h2>

<p>Egyes útválasztó eszközök ezt egy kernelszintű virtuális audio-illesztőprogram telepítésével oldják meg. Erőteljesek, de nehezek: eltörhetnek a macOS frissítése után, növelhetik a késleltetést, és mély rendszerengedélyeket igényelhetnek. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> homokozóban van, és a Mac App Store-n keresztül szállítják – nincs illesztőprogram, nincs DMG, nincs összesített eszköz beállítása. Kifejezetten alkalmazásonkénti szintű vezérlés esetén ez sokkal egyszerűbb út, mint a hangútválasztás újratervezése.</p>

<p>Készen áll arra, hogy stabilan tartsa megfigyelési szintjét, miközben minden más a helyén marad? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> egyszeri 14,99 €-ért, és saját hangerőt ad a DAW-nak.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Egy egyszerűbb Audio Hijack alternatíva az alkalmazásonkénti hangerő számára a Mac készüléken",
    description: "Ha csak alkalmazásonként független hangerőt szeretne a macOS-n, a Audio Hijack túlzás. Íme egy könnyebb, olcsóbb menüsor-alternatíva, amely alkalmazásonkénti hangerőt, némítást és felerősítést tesz lehetővé hangtovábbítás nélkül.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha csak az alkalmazásonkénti független hangerőt szeretné a macOS-n, a Audio Hijack több eszköz, mint amire szüksége van. Ez egy profi audio-routing és -rögzítő csomag (körülbelül 79 dollár), amelyet rögzítéshez, effektusokhoz és munkamenet-grafikonokhoz terveztek. Az egyik alkalmazás lefelé, a másik felfelé forgatásához egy könnyű menüsoros keverő, mint például <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> gyorsabb, olcsóbb és mindig készen áll.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Egy egyszerűbb Audio Hijack alternatíva az alkalmazásonkénti hangerő számára a Mac készüléken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért nyúlnak az emberek először a Audio Hijack-hoz?</h2>

<p>A macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A Windows Volume Mixerben évek óta van egy, de a Mac-n a hangerőszabályzó gombok és a menüsor csúszkája csak egy dolgot mozgat: a rendszermestert. A belső felek nem mondják azt, hogy „tartsa a Spotify-t 40%-on, de hagyja a videohívásomat 100%-on”.</p>

<p>Így az emberek keresik a megoldást, és a Audio Hijack-n landolnak. Ez <em>lehet</em> alkalmazásonkénti hangerőt, mert képes elkapni és feldolgozni bármely alkalmazás hangját. Ez a képesség azonban csak mellékhatása annak, amire valójában tervezték: hangfelvételek alkalmazásából és hardverből, effektusok láncolása, virtuális eszközök közötti forgalomirányítás és újrafelhasználható munkamenet-folyamatok létrehozása. Abban tényleg kiváló. Ez csak egy nehéz válasz egy könnyű kérdésre.</p>

<h2>Ahol a Audio Hijack túlzásba esik</h2>

<p>Néhány dolog frusztrálja azokat, akik csak hangerő-csúszkát akartak:</p>

<ul>
<li><strong>Ár.</strong> A Audio Hijack körülbelül 79 dollár. Ez méltányos egy alkalmazásban lévő hangstúdió számára; ez sok a böngésző lap letiltásáért.</li>
<li><strong>Ennek tovább kell futnia.</strong> Alkalmazásonkénti feldolgozása csak akkor működik, ha az alkalmazás nyitva van, és a megfelelő munkamenet aktív. Hagyd abba, és a hangerő visszaáll. Egy teljes audio munkaállomást tart fenn, csak hogy a csúszkát a helyén tartsa.</li>
<li><strong>Munkamenet alapú gondolkodás.</strong> A munkameneteket blokkokból és kapcsolatokból építi fel. Erőteljes a rögzítéshez, de sok fogalmi többletet jelent, ha a cél az, hogy „ez az alkalmazás halkabb, az alkalmazás hangosabb”.</li>
<li><strong>A felület mély.</strong> Effektek, útválasztás, mérőműszerek, blokkkábelezés – egy gazdag felület, amelyet többnyire figyelmen kívül hagy, ha soha nem rögzít semmit.</li>
</ul>

<blockquote>Ökölszabály: ha akarod <em>rekord vagy útvonal</em> hang, a Audio Hijack megkeresi az árát. Ha csak akarod <em>egyensúlyt</em> hangot az alkalmazások között, akkor fizet egy műhelyért, amikor szüksége van egy gombra.</blockquote>

<h2>Az egyszerűbb alternatíva: egy menüsoros hangerőkeverő</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> azt az egyetlen munkát vállalja, amelyért a legtöbb ember ténylegesen jött, és csak ezt teszi. A menüsorodban él. Kattintson az ikonra, és megjelenik egy élő lista az összes jelenleg hangot lejátszott alkalmazásról, mindegyik saját csúszkával. Húzza a Spotify-t 30%-ra, hagyja a hívást 100%-on, némítsa el teljesen a Slack-t – kész, nincs munkamenet létrehozása.</p>

<p>Mit takar:</p>

<ul>
<li><strong>Független kötet alkalmazásonként</strong> - minden hangforrás saját csúszkát kap, amely valós időben állítható.</li>
<li><strong>Alkalmazásonkénti némítás</strong> – egy kattanással elnémíthatja az egyik zajos alkalmazást anélkül, hogy bármi máshoz is hozzáérne.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés</strong> - nyomjon meg egy csendes alkalmazást <em>fentebb</em> 100%, ha a saját max még túl puha. Ez az a darab, amelyet a rendszercsúszka soha nem képes megtenni.</li>
<li><strong>Hangerő profilok</strong> — mentse el a teljes mixet (halk zene, hangos hívások, némított értesítések), és egy kattintással hívja elő egy adott környezetben.</li>
<li><strong>Automatikus kacsázás</strong> – automatikusan tompítja a háttérhangot, ha valami fontosabb elkezdődik, így a hívások vagy videók nem kerülnek a lejátszási listába.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a fejhallgatók, hangszórók és egyéb kimenetek között ugyanabból a menüből.</li>
</ul>

<h2>Praktikus: alkalmazásonkénti vezérlés egy perc alatt</h2>

<p>A beállítási különbség a lényeg. Egy útválasztó eszközzel létrehozhat egy munkamenetet, hozzáadhat egy forrásblokkot, bekötheti, és az alkalmazás futva marad. Lényegében itt van:</p>

<ul>
<li>Telepítés <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a Mac App Store-tól.</li>
<li>Játssz le hangot néhány alkalmazásban, hogy megjelenjenek a listában.</li>
<li>Kattintson a menüsor ikonjára, és húzza az egyes alkalmazások csúszkáját ízlés szerint.</li>
<li>Opcionálisan mentheti ezt a keveréket profilként, vagy növelheti a túl csendes alkalmazást 100%-ra.</li>
</ul>

<p>Mivel a Mac App Store-n keresztül terjesztik, homokozóban van, és úgy települ, mint bármely normál alkalmazás – nem <code>.dmg</code> húzni, nincs kernelbővítmény, nincs jóváhagyandó audio-illesztőprogram a Biztonsági beállításoknál, és nincs semmi, amit a macOS frissítés után újra jóvá kell hagyni. Ez az utolsó pont számít: az illesztőprogram-alapú keverők történelmileg megszakadnak az operációs rendszer frissítései során, és rendszerszintű összetevőt kell újratelepíteni. A homokozóba helyezett App Store alkalmazás elkerüli a karbantartás teljes kategóriáját.</p>

<h2>Melyiket érdemes választani?</h2>

<p>Legyen őszinte a munkával kapcsolatban. Válasszon <strong>Audio Hijack</strong> ha alkalmazás- vagy hardverhangot kell rögzítenie, valós idejű effektusokat kell alkalmaznia, vagy útválasztási grafikonokat kell készítenie a virtuális eszközök között. Ez az otthoni gyep, és ott minden dollárt megér.</p>

<p>Válasszon egy dedikált menüsor-keverőt, ha tényleges igénye az, hogy „engedjék meg, hogy külön-külön állítsam be az egyes alkalmazások hangerejét”. A ~79 dollár helyett egyszer 14,99 eurót kell elköltenie, kihagyja a munkamenet-építést, és a menüsorból megnyitott panelen kaphat lendületet, némítást, profilokat és lecsökkenést. Nincsenek olyan rögzítési funkciók, amelyeket soha nem fog megérinteni, és nincs háttérben futó munkaállomás, amely a csúszkát a helyén tartaná.</p>

<p>A legtöbb ember, aki kipróbálta a Audio Hijack-t hangerő-kiegyenlítésre, egy kis problémát oldott meg egy nagy eszközzel. Ha Ön az, a kis szerszám jobban illeszkedik – és töredéke annyiba kerül.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> 14,99 €-ért egyszeri – alkalmazásonkénti hangerő, erősítés, némítás, profilok és automatikus leállítás, közvetlenül a menüsorról.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D alternatíva: alkalmazásonkénti hangerő a felfúvódás nélkül (Mac)",
    description: "Ha a Boom 3D-t főként a hangzás fokozására használta, de nagyon szerette volna az alkalmazásonkénti hangerőszabályozást, a SoundDial a karcsúbb Mac alternatíva: alkalmazásonként független hangerő, alkalmazásonkénti némítás és erősítés, egyszeri ár, rendszerszintű EQ vagy illesztőprogramok nélkül.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha a hangerő növelése érdekében a Boom 3D-hoz nyúlt, de valójában minden egyes alkalmazást külön akart vezérelni, akkor más eszközt szeretne. A Boom 3D egy rendszerszintű hangerő-erősítő és EQ. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy alkalmazásonkénti koncentrált hangerőkeverő: független hangerő, némítás és erősítés minden alkalmazáshoz, egyszeri 14,99 €, nincs EQ, nincsenek meghajtók.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D Alternatíva: Alkalmazásonkénti hangerő a felfúvódás nélkül (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mit csinál a Boom 3D valójában (és mit nem)</h2>
<p>A Boom 3D három dologra épül: egy rendszerszintű hangerőnövelésre, egy 31 sávos hangszínszabályzóra és 3D „surround” effektekre. Azokra vonatkozik <em>mindent</em> a Mac egyszerre játszik le. Ez valóban hasznos, ha a cél egy hangosabb laptop vagy egy olyan basszusgörbe, amelyet mindenhol szeret.</p>
<p>Amire a Boom 3D nem készült, az az, hogy az alkalmazásokat független csatornaként kezeli. Nem lehet egyértelműen kimondani, hogy „Spotify 40%, videohívásom 100%, és ez a böngészőlap némítva”. A csúszkája mozgatja az egész keveréket. És mivel egy audio-illesztőprogramot telepít a jelútba, alacsonyabb szinten érinti a rendszert, mint egy homokozós segédprogram. Ezenkívül fizetős termékként van elhelyezve frissítési ciklusokkal, nem pedig egy kis egyszeri eszközként.</p>
<blockquote><p>A közös történet: az emberek telepítik a Boom 3D-t, hogy egy csendes alkalmazást hangosabbá tegyenek, majd rájönnek, hogy az igazi probléma az volt, hogy a macOS-nak egyáltalán nincs alkalmazásonkénti hangerőkeverője.</p></blockquote>

<h2>A rés: A macOS-nak nincs térfogatkeverője</h2>
<p>Ez meglepi a Windows-ból érkezőket. A Windows már évek óta rendelkezik alkalmazásonkénti hangerőkeverővel – kattintson a jobb gombbal a hangszóróra, és állítsa be az egyes alkalmazások szintjét külön-külön. A macOS ezt egyszerűen nem szállítja. Kap egy fő kötetet, és bármilyen belső csúszkát, amelyet az egyes alkalmazások felfednek. Nincs OS-szintű módszer a Slack és a YouTube lap és a játék közötti egyensúly megteremtésére.</p>
<p>Tehát amikor egy zenei alkalmazás elnyomja a hívást, az egyetlen natív lehetőségei nyersek: kapcsolja le a mestert (ami mindent elhallgat), vagy keresse meg az egyes alkalmazások saját beállításait abban a reményben, hogy van hangerőszabályzója. A Boom 3D sem zárja be ezt a rést – hangosabbá teszi az egész mixet, nem minden alkalmazást.</p>

<h2>Ahová a SoundDial illik</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a hiányzó keverő. A menüsorban található, és minden futó alkalmazásnak saját sort ad saját csúszkával. Ez az alapvető különbség a Boom 3D-hoz képest: egyetlen globális effektus helyett forrásonkénti vezérlést kap.</p>
<ul>
<li><strong>Független kötet alkalmazásonként</strong> — állítsa a Spotify értéket 30%-ra, miközben a videohívás 100%-on marad.</li>
<li><strong>Alkalmazásonkénti némítás</strong> – azonnal elnémíthatja az egyik zajos alkalmazást anélkül, hogy bármi máshoz is hozzáérne.</li>
<li><strong>Alkalmazásonkénti növelés</strong> — Ha tetszett a Boom 3D 100%-nál hangosabb trükkje, a SoundDial megtartja ezt, de az egész rendszer helyett egyetlen alkalmazást céloz meg. A csendes alkalmazások maguktól túllépnek normál plafonjukon.</li>
<li><strong>Hangerő profilok</strong> — mentse el a keverő elrendezését (pl. "játék", "találkozó", "zene"), és egy kattintással előhívja a csúszkák minden alkalommal történő újraegyensúlyozása helyett.</li>
<li><strong>Automatikus kacsázás</strong> – automatikusan lecsökkenti a háttérhangot, ha valami fontos elkezdődik, így a hívások vagy a játékjelek nem temethetők a zene alá.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a fejhallgatók, hangszórók és egyéb kimenetek között ugyanabból a menüből.</li>
</ul>
<p>Amit a SoundDial szándékosan nem tesz meg, az a Boom 3D többi funkciójának szétterjedése. Nincs 31 sávos EQ, nincs faux-surround feldolgozás, nincs rendszerszintű effektlánc. Ha mastering szintű EQ-t szeretne, a Boom 3D vagy egy dedikált audiocsomag a megfelelő választás. Ha valójában az volt, amiért megnyitottad a Boom 3D-t <em>kötet</em>, ez a felület duzzadt, ezért fizetsz.</p>

<h2>Boost, driver nélkül</h2>
<p>A „növelő” kérdés közvetlen választ érdemel, mert a Boom 3D felhasználók általában ezért vásárolnak alternatívákat. A Boom 3D lendülete globális és illesztőprogram-alapú. A SoundDial erősítése alkalmazásonként történik, és az Apple app-sandbox modelljén belül fut – a Mac App Store-n keresztül terjesztik, így nincs külön telepítő, nincs kernelszintű illesztőprogram, és nincsenek később eltávolítható rendszerelemek. A "tegye ezt az egy csendes alkalmazást hangosabbá" eredményt anélkül kapja meg, hogy a teljes hangútját a vezető irányítaná.</p>

<h2>Ár: egyszeri vs. folyamatos</h2>
<p>A Boom 3D egy fizetős alkalmazás saját frissítési és licencmodelljével, az árak pedig platformonként és verziónként változnak. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egyszeri vásárlás 14,99 euróért – egyszer vásárolja meg, tartsa meg, nincs előfizetés és nincs verziónkénti visszavásárlás, hogy a keverő működjön. Egy olyan segédprogram esetében, amelyet minden nap futni hagy a menüsorban, az átalányár jobban öregszik, mint egy olyan termék, amelyet folyamatosan újra kell vásárolnia.</p>

<h2>Melyiket érdemes választani?</h2>
<ul>
<li><strong>Válassza a Boom 3D lehetőséget</strong> ha valódi igénye egy komoly hangszínszabályzóra és az egész rendszerre kiterjedő hangeffektusra van, és nem bánja, ha egy audio-illesztőprogram van a keverékben.</li>
<li><strong>Válassza a SoundDial lehetőséget</strong> ha azt szeretné, amit a Windows felhasználók magától értetődőnek tekintenek – egy valódi alkalmazásonkénti hangerőkeverőt – plusz célzott erősítést, profilokat és automatikus lecsökkentést, egyszeri áron, telepítendő illesztőprogramok nélkül.</li>
</ul>
<p>A legtöbb ember, aki visszapattan a Boom 3D-ról, a második csoportba tartozik. Nem akarták hangolni a frekvenciákat; a hívásnál halkabb böngészőt akartak. A SoundDial pontosan erre a feladatra készült.</p>

<p><strong>Alkalmazásonkénti hangerőszabályozást szeretne Mac készülékén EQ felfúvódás vagy előfizetés nélkül?</strong> <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> – 14,99 € egyszer, homokozóban, illesztőprogramok nélkül, és minden alkalmazás saját csúszkát kap.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Hogyan némíthat el mindent, kivéve egy alkalmazást a Mac készüléken",
    description: "A macOS-nak nincs alkalmazásonkénti hangerőkeverője, így egy kivételével minden alkalmazás elnémításához segítségre van szükség. Így hallhatja csak a hívást, az adatfolyamot vagy a játékot, miközben minden más néma marad.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A macOS-nak nincs beépített módja az egyes alkalmazások elnémítására, ezért csak egy alkalmazás meghallgatásához alkalmazásonkénti hangerőkeverőre van szükség. Telepítés <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, nyissa meg a menüsor keverőjét, némítson el minden alkalmazást, kivéve azt, amelyet hallani szeretne, és az alkalmazás folytatja a lejátszást, míg a többi azonnal elnémul.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Hogyan némíthat el mindent, kivéve egy alkalmazást a Mac készüléken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért nem tudja ezt a macOS önmagában megtenni?</h2>
<p>A Windows több mint egy évtizede rendelkezik a Volume Mixerrel: kattintson a jobb gombbal a hangszóró ikonra, és minden futó alkalmazás megkapja a saját csúszkáját. A macOS még soha nem szállított ilyet. A Mac hangerőszabályzó gombjai egyetlen dolgot vezérelnek, a fő kimeneti szintet. Ha leállítja a rendszert, minden együtt leáll. Ha némítasz, minden elnémul.</p>
<p>Ez mindaddig rendben van, amíg öt dolog nem ad zajt egyszerre. Videohívásban vesz részt, de egy böngészőlap automatikusan lejátszik egy hirdetést, a Spotify még mindig fut, egy játék pingál a háttérben, és a Slack csipog. Az egyetlen natív lehetőség az alkalmazások bezárása, egyenkénti elnémítása az egyes alkalmazások saját beállításain belül (ha egyáltalán van ilyen lehetőség), vagy felrántja a fejhallgatót. Ezek egyike sem engedi azt mondani, hogy "tartsd meg ezt, a többit hallgattasd el".</p>

<h2>Az egyszerű módszer: némítsa el a többit mixerrel</h2>
<p>Egy alkalmazásonkénti keverő található az alkalmazások és a kimeneti eszköz között, és minden alkalmazásnak saját hangerő- és némításvezérlőt ad. Ha már fut egy alkalmazás, egyetlen alkalmazás elkülönítése másodpercekig tart:</p>
<ul>
<li>Nyissa meg a mixert a menüsorból. Megjelenik az összes jelenleg hangot előállító alkalmazás élő listája.</li>
<li>Keresse meg azt az alkalmazást, amelyet hallani szeretne, a hívást, a streamet vagy a játékot.</li>
<li>Minden más némítása. Érintse meg a némítás kapcsolót egymás mellett, vagy húzza a csúszkát nullára.</li>
<li>ennyi. Az egyetlen alkalmazás, amelyet magára hagyott, teljes hangerőn játszik le, a többi pedig néma marad.</li>
</ul>
<p>-val <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a listában szereplő minden alkalmazásnak saját csúszkája és saját némítógombja van, tehát ez csak néhány kattintás. Azok az új alkalmazások, amelyek később kezdenek játszani, automatikusan megjelennek, így ha egy értesítési hang megpróbál besurranni, a helyszínen elnémíthatja, anélkül, hogy megérintené a fókuszált alkalmazást.</p>

<blockquote>A trükk az, hogy a "minden egy kivételével" elnémítása az egyik alkalmazás elnémításának az ellenkezője. Nem elnémítja a Mac készüléket, hanem az Ön számára fontos dolog körüli zajt.</blockquote>

<h2>Mentse el profilként, hogy ne csinálja újra</h2>
<p>Ha ez egy olyan beállítás, amelyhez gyakran nyúl, akkor minden alkalommal, amikor kézzel csinálja, elöregszik. Tegyük fel, hogy mindig hangosan szeretné hangosítani a hívóalkalmazást, és minden mást kikapcsolni az értekezletek alatt, vagy szeretné, hogy a stream előtérben legyen, miközben a játékok és a böngészők csendesek maradnak. A kötetprofil pontosan ezeket az alkalmazásonkénti beállításokat tárolja, és egy kattintással újra alkalmazza őket.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lehetővé teszi az olyan profilok mentését, mint a „Meeting” vagy a „Csak streamelés”, majd azonnal váltson rájuk, amikor szüksége van rájuk. Állítsa be egyszer, és az egyetlen alkalmazás elkülönítése egyetlen menüsoros műveletté válik, nem pedig öt csúszkával.</p>

<h2>Az intelligensebb verzió: automatikus kacsa a kemény némítás helyett</h2>
<p>Néha nem akarja, hogy a többi alkalmazás teljesen eltűnjön, egyszerűen csak azt szeretné, ha valami fontosabb elkezdődne az útból. Ez az automatikus kacsázás. A kiemelt alkalmazás lejátszásakor a háttéralkalmazások automatikusan alacsony szintre süllyednek, majd leálláskor újra felfelé emelkednek.</p>
<p>Ez ideális hívásokhoz és adatfolyamokhoz. Amikor valaki beszélni kezd, a zenéje lecsillapodik, hogy hallja, és amikor a hívás véget ér, a zene magától visszajön. Az „egy alkalmazás tisztán hallása” eredményt kapja anélkül, hogy manuálisan elnémítaná és feloldaná a némítást minden alkalommal, amikor a helyzet megváltozik. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> A kézi keverő mellett automatikus lecsillapítást is tartalmaz, így választhat a kemény némítás közül a teljes csend érdekében, vagy a kacsázást a lágyabb háttér érdekében.</p>

<h2>A megtartott alkalmazás fejlesztése</h2>
<p>Egyetlen alkalmazás elkülönítésének bónusza is van: hangosabbá is teheti, mint amit a Mac általában lehetővé tesz. Egyes alkalmazások, különösen a csendes videohívások vagy a rosszul elsajátított adatfolyamok, még maximális hangerő mellett is alig hallhatók. Az alkalmazásonkénti erősítés 100% fölé emeli az egyes alkalmazásokat anélkül, hogy a rendszer kimenetét megmozgatná, ami csak felerősítené a már elnémított alkalmazásokat.</p>
<p>Tehát a teljes lépés a következő: némítsa el a zajt, tartsa meg az egyik alkalmazást, és ha az alkalmazás túl halk, fokozza azt. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mind a hármat ugyanabban a keverőablakban kezeli.</p>

<h2>Amire nem jelentkezel</h2>
<p>A Mac audioeszközökkel kapcsolatos gyakori aggodalom, hogy kernelbővítményeket, virtuális audio-illesztőprogramokat vagy egy véletlenszerű webhelyről letöltött árnyékos telepítőket igényelnek. Ez jogos aggodalom, és ez az oka annak, hogy egyesek teljesen elkerülik ezeket az alkalmazásokat.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a Mac App Store-n van, homokozóban, és úgy települ, mint bármely normál alkalmazás, nincs illesztőprogram, nincs DMG, nincsenek jóváhagyandó rendszerbővítmények. Ez egy egyszeri 14,99 eurós vásárlás, nem pedig előfizetés, tehát egyszer fizet, és megtartja. Ez azért számít, ha egész nap futni fog a menüsorban.</p>

<h2>Gyors összefoglaló</h2>
<ul>
<li>A macOS nem rendelkezik natív alkalmazásonkénti hangerőszabályzóval, ezért ehhez keverőre van szüksége.</li>
<li>Nyissa ki a keverőt, tartsa meg az egyetlen alkalmazást, némítson vagy nullázzon ki minden mást.</li>
<li>Mentse el profilként a gyakran használt hívásokhoz vagy adatfolyamokhoz.</li>
<li>Használja az automatikus lecsökkentést, ha azt szeretné, hogy a háttéralkalmazások elnémuljanak, semmint megsemmisüljenek.</li>
<li>Növelje megőrzött alkalmazását, ha önmagában túl csendes.</li>
</ul>

<p>Csak azt szeretné hallani, ami számít, a többit pedig elhallgattatni? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> és állítsa be az első némítás-mindent-egyéb profilt egy percen belül.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Tartson más hangerőt a hangszórókhoz és a fejhallgatókhoz a Mac készüléken",
    description: "A macOS elfelejti az alkalmazásszintű hangerőkeverést, amikor a hangszórók és a fejhallgatók között vált. Íme, miért történik ez, a kézi korlátozások, és hogyan javítja ki az alkalmazásonkénti kötetmemória.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A macOS valójában minden kimeneti eszközhöz külön rendszerkötetre emlékezik, de minden váltáskor elfelejti az alkalmazásszintű egyenleget. Így a fejhallgatók és a hangszórók megtartják saját általános szintjüket, de abban a pillanatban, amikor kihúzza a konnektorból, az egyik alkalmazás felrobban, a másik pedig eltűnik. A javítás egy alkalmazásonkénti kötetmemória, amely túléli az eszközváltásokat, amelyhez a macOS nem rendelkezik natív eszközzel.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Tartson más hangerőt a hangszórókhoz és a fejhallgatókhoz a Mac készüléken" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mire emlékszik a macOS és mire nem</h2>

<p>Az általános vélekedés szerint a macOS minden kimeneti eszközt azonosan kezel. Nem. Minden kimeneti eszköz saját rendszerkötetet tárol. Állítsa a MacBook hangszóróit 30%-ra, a AirPods-ját pedig 80%-ra, és a macOS külön tartja ezt a két számot. Csatlakoztassa, húzza ki, csatlakoztassa újra, és minden eszköz visszatér oda, ahol hagyta.</p>

<p>Akkor miért tűnik még mindig megtörtnek az élmény? Mert ez a memória megáll az egyetlen, globális csúszkánál. A macOS pontosan egy hangerőszabályzóval rendelkezik minden lejátszáshoz egy adott eszközön. Nem emlékszik, milyen hangosak voltak az egyes alkalmazások. Amikor hangszóróról fejhallgatóra vált, a Spotify, a Zoom hívás és a YouTube lap közötti egyensúly nem marad meg, mivel ez az egyensúly soha nem létezett. Minden alkalmazás ugyanazt a csúszkát használja.</p>

<p>Az eredmény az a frusztráció, amelyet az emberek a következőképpen írnak le: "különböző hangerő a hangszóróknak és a fejhallgatóknak". Általában nem csak eszközönként eltérő mesterszintre vágynak, hanem egy emlékezetes keverékre: halk zene, hangos hívások, lehalkított értesítések, és ez a keverék sértetlen, akár az asztali hangszórókon, akár a fejhallgatón.</p>

<h2>A kézi megoldások és azok hiányosságai</h2>

<p>A beépített szerszámokkal félig eljuthat, és érdemes megismerni a mennyezetet, mielőtt bármi másért nyúlna.</p>

<ul>
<li><strong>Állítsa be egyszer az egyes eszközök rendszerhangerejét.</strong> Játsszon le hangot a hangszórókon, állítsa be a hangerőt, majd kapcsolja át a kimenetet fejhallgatóra, és állítsa be ezt a szintet. A macOS mindkettőt megtartja. Ez eszközenként kezeli a fő hangerőt, de alkalmazásonként semmit.</li>
<li><strong>Használjon alkalmazásonkénti hangerőt, ahol az alkalmazás kínálja.</strong> A Spotify, VLC és a legtöbb böngésző saját belső kötettel rendelkezik. Magában az alkalmazásban vághat le egy hangos alkalmazást. A bökkenő: ez a beállítás az alkalmazásban él, nem az eszközben, tehát nem változik, ha fejhallgatóra váltunk, és a legtöbb alkalmazásnak (Slack, Zoom, rendszerértesítések, Mail) egyáltalán nincs ilyen vezérlés.</li>
<li><strong>Kimenet váltása a Vezérlőközpontból vagy a menüsorból.</strong> Az Option billentyűt lenyomva tartva kattintson a hangerő ikonra a menüsorban az eszközök közötti gyors ugráshoz. Gyors, de csak a mester szintet mozgatja, nem állít vissza alkalmazásonkénti keveréket.</li>
</ul>

<p>Ezek eszközönkénti főkötetet kapnak. Amit egyikük sem ad, az egy megjegyzett, alkalmazásonkénti egyenleg, amely követi Önt az eszközökön keresztül. Pontosan ez a rés az, ahol a bosszúság él, és ez strukturális: az operációs rendszernek egyszerűen nincs alkalmazásonkénti keverője, ellentétben a Windows-val, amelyet évek óta szállítanak.</p>

<h2>Alkalmazásonkénti kötetmemória, és miért az eszközváltás az igazi probléma</h2>

<p>A mélyebb megoldás az, hogy minden alkalmazásnak saját kötetet adunk, és ezek a beállítások megmaradnak. Ilyen az alkalmazásonkénti keverő <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> számára építették. A menüsoron található, felsorolja az összes jelenleg hangot produkáló alkalmazást, és mindegyikhez külön csúszkát, némítási kapcsolót ad, és még 100%-os emelkedést is biztosít a csendes alkalmazásokhoz.</p>

<p>A hangszóró-fejhallgató probléma szempontjából fontos rész: ezek a szintek emlékeznek. Állítsa a zenét 40%-ra, a hívásait 90%-ra, a csevegőalkalmazást pedig némításra, és <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> megtartja ezt a keveréket. Ha kihúzza a fejhallgatót, és visszaesik a hangszórókhoz, nem minden alkalommal kézzel egyensúlyoz ki három alkalmazást.</p>

<p>A kötetprofilok ezt tovább viszik. Alkalmazásonként elmenthet egy elnevezett szintkészletet, és egy kattintással előhívhatja azt, így a „fejhallgató, koncentrált munka” és a „hangszórók, értekezletek” egyveleg egyenkénti választás, nem pedig manuális visszaállítás.</p>

<blockquote><p>A mentális váltás: ne gondoljon tovább egyetlen főcsúszkára, amelyet folyamatosan húz, és kezdjen el gondolkodni a helyzetenként mentett keveréken. Az eszközváltás többé már nem az egyensúly helyreállítása.</p></blockquote>

<h2>Gyors kimenet váltás a mix elvesztése nélkül</h2>

<p>A kapcsolóberendezéseknek gyorsnak és roncsolásmentesnek kell lenniük. Ugyanerről a menüsor panelről módosíthatja a kimeneti eszközt, így a hangszórókról a fejhallgatókra egy kattintással válthat, és az alkalmazásonkénti szintek megjelennek ahelyett, hogy egyetlen globális számra zuhannának vissza.</p>

<p>A kapcsolódó funkció, amelyet érdemes megemlíteni, az automatikus lecsillapítás: amikor hang érkezik a mikrofonba (beszélni kezd, vagy hívás kezdődik), más alkalmazások automatikusan lemerülnek, hogy hallják, majd visszatérnek a beállított szintre. Ugyanez az elv a figyelemre, nem pedig az eszközökre vonatkozik, egy másik dolog, amit a macOS önmagában nem fog megtenni.</p>

<h2>Hogyan kell beállítani</h2>

<ul>
<li>Telepítés <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a Mac App Store-tól. Sandboxban van, így nincs meghajtó, nincs DMG és nincs jóváhagyandó kernelbővítmény.</li>
<li>Játssza le a hangot a leggyakrabban használt alkalmazásokban, hogy azok megjelenjenek a keverőben.</li>
<li>Állítsa be az egyes alkalmazások szintjeit, némítson el mindent, amit nem szeretne, és fokozzon bármit, ami túl halk.</li>
<li>Mentse el ezt az elrendezést profilként, például egy fejhallgatóhoz és egy hangszóróhoz hangolva.</li>
<li>Amikor eszközt vált, hívja elő a megfelelő profilt, vagy hagyja, hogy a mentett alkalmazásonkénti szintjeit továbbvigye.</li>
</ul>

<p>Az őszinte összefoglaló: A macOS mester szinten emlékszik a kimeneti eszközönkénti hangerőre, de soha nem fog emlékezni az alkalmazásonkénti mixre, mert nincs alkalmazásonkénti keverője. Ha az igazi cél a zene, a hívások és az értesítések közötti következetes egyensúly, amely minden hangszóró és fejhallgató közötti váltást túlél, akkor alkalmazásonkénti memóriára van szüksége az operációs rendszer tetején.</p>

<p>Szeretné, hogy a hangszórók és fejhallgatók megőrizzék saját keveréküket anélkül, hogy minden alkalmazást újra be kellene állítani? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> egyszeri 14,99 €-ért, előfizetés nélkül, illesztőprogramok nélkül.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control megszűnt? A legjobb Mac alkalmazásonkénti kötetcsere (2026)",
    description: "A Static Z Software Sound Control gyártása megszűnt, és leáll a modern macOS. Íme, miért nem működött, mit csinált, és a legjobb alkalmazásonkénti hangerőkeverő, amelyre 2026-ban váltani lehet.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A Static Z Software Sound Control-ja megszűnt, már nem értékesítik vagy frissítik, és egyre inkább meghibásodik a modern macOS-n, mert egy kernelszintű audio-illesztőprogramra támaszkodott, amelyet az Apple zárolt. Ha ma alkalmazásonkénti kötetre van szüksége, a legtisztább csere az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, homokozós Mac App Store keverő, illesztőprogramok nélkül.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control Megszűnt? A legjobb Mac alkalmazásonkénti kötetcsere (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Amit a Sound Control valójában csinált</h2>
<p>A Sound Control éveken át a valódi macOS hiányosságok megoldása volt: még mindig nincs beépített alkalmazásonkénti hangkeverő a Mac-n. A Windows Volume Mixerben a Vista óta van egy, de a macOS csak egyetlen főcsúszkát ad. A Sound Control ezt a lyukat egy rendezett menüsor-panellel töltötte be, amely lehetővé tette:</p>
<ul>
<li>Állítson be egy független hangerőszintet minden futó alkalmazáshoz.</li>
<li>Némítsa el az egyes alkalmazásokat anélkül, hogy megérintené a rendszer hangjának többi részét.</li>
<li>Növelje a csendes alkalmazásokat 100 százalék fölé.</li>
<li>Alkalmazásonkénti hangszínszabályzót és egyensúlybeállításokat alkalmazhat.</li>
<li>A hang továbbítása és az alkalmazások rögzítése adott kimeneti eszközökhöz.</li>
</ul>
<p>Mindenki számára, akinek valaha volt Zoom híváskitörése, miközben a háttérben lévő YouTube fül suttog, ez az alkalmazásonkénti vezérlés átalakító volt. Sok Mac nagyteljesítményű felhasználó gépén csendes alapanyag lett.</p>

<h2>Miért nem működött</h2>
<p>Az őszinte technikai történet itt számít, mert ez megmagyarázza, hogy ez miért nem olyan hiba, amelyet valaki egyszerűen befoltozhat. A Sound Control egy rendszeraudio-illesztőprogram telepítésével működött – egy kernelbővítmény (kext), amely beillesztette magát a macOS hangcsatornába, így képes volt elkapni és átformálni az egyes alkalmazások kimenetét. Ez a mély horog pontosan az, ami lehetővé tette az EQ és a boost funkciókat.</p>
<p>A macOS 10.15 Catalinától kezdve, majd a Big Sur és az Apple Silicon átállás révén felgyorsulva, az Apple elkezdte megszüntetni a kernelbővítményeket a felhasználói tér alternatíváinak javára. Az Apple Silicon Mac készülékeken a harmadik féltől származó kext-k betöltése a rendszerbiztonság csökkentését igényli helyreállítási módban, és az Apple egyértelművé tette, hogy a régi audio kext-k kölcsönzési ideje alatt állnak. A Static Z Software végül leállította a Sound Control értékesítését és fejlesztését. Az eredmény: a legújabb macOS verziókon a telepítések meghiúsulnak, a hang meghibásodik, vagy az illesztőprogram egyszerűen megtagadja a betöltést biztonsági leminősítések nélkül, amit a legtöbben jogosan nem akarnak végrehajtani.</p>
<blockquote>Ez nem elhanyagolható a fejlesztő részéről. Ez egy platformszintű váltás. Az Apple bezárta az ajtót a Sound Control alacsony szintű audio-illesztőprogramjára, és egyetlen frissítés sem tudja teljesen újra kinyitni.</blockquote>

<h2>Mi változott a modern macOS-n</h2>
<p>Az Apple hozzátett egy lényeges dolgot: a Core Audio most egy Tap API-t kínál (amelyet a macOS 14.2 Sonoma-ban vezettek be), amely lehetővé teszi az alkalmazások számára, hogy folyamatonkénti hangot rögzítsenek és feldolgozzanak a felhasználói térből – nincs kext, nincs biztonsági leminősítés, nincs újraindítás a helyreállítási rendszerbe. Ez az alkalmazásonkénti hang engedélyezett modern útja, és erre kell építeni egy jelenlegi keverőt. A kompromisszum őszinte: a felhasználói tér érintései korlátozottabbak, mint egy régi kernel-illesztőprogram, így inkább tiszta alkalmazásonkénti hangerőre, némításra és erősítésre kell számítani, mint a teljes, alkalmazásonkénti parametrikus EQ Sound Control-ra.</p>

<h2>A legjobb csere: SoundDial</h2>
<p>Ha azt szeretné, hogy a Sound Control lényege – alkalmazásonként független kötet – a Mac-n valóban biztonságos és naprakész legyen, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a legközelebbi tiszta migrációs lehetőség 2026-ban. Ez egy menüsoronkénti hangerőkeverő, amelyet a modern macOS audioveremhez építettek. Ami a Sound Control munkafolyamatból származik:</p>
<ul>
<li><strong>Független kötet alkalmazásonként</strong> – futó alkalmazásonként egy csúszka, közvetlenül a menüsorban.</li>
<li><strong>Alkalmazásonkénti némítás</strong> - némítsd el az egyik alkalmazást, miközben a többi lejátszás folytatódik.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés</strong> - toljon egy csendes alkalmazást a normál plafon fölé.</li>
<li><strong>Hangerő profilok</strong> — mentse el a keverőbeállításokat különböző környezetekhez (hívások, zene, játék), és váltson közöttük.</li>
<li><strong>Automatikus kacsázás</strong> – automatikusan csökkenti a háttéralkalmazás hangerejét, ami hasznos, ha beszélni kezd, vagy hívás érkezik.</li>
<li><strong>Gyors kimenet váltás</strong> — ugorhat a hangszórók, fejhallgatók és egyéb eszközök között anélkül, hogy belemerülne a rendszerbeállításokba.</li>
</ul>
<p>A migráció szempontjából fontos gyakorlati különbségek: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a Mac App Store-n keresztül szállítják, homokozóban vannak, és nem telepítenek illesztőprogramokat és DMG-t. Ez azt jelenti, hogy nincs jóváhagyandó kernelbővítés, nincs helyreállítási mód, és nem csökken a Mac biztonsági helyzete – pontosan azok a fájdalmak, amelyek megölték a Sound Control-t. Ez egyszeri 14,99 eurós vásárlás, nem előfizetés.</p>

<h2>Hogyan váltsunk, lépésről lépésre</h2>
<ul>
<li><strong>Tisztán távolítsa el a Sound Control-t.</strong> Mivel telepített egy illesztőprogramot, használja a saját eltávolítóját, ha még fut, vagy távolítsa el az audio-illesztőprogram-összetevőket, mielőtt bármi újat telepítene. Két versengő audio hook hibákat okozhat.</li>
<li><strong>Telepítse a SoundDial-t a App Store készülékről.</strong> Nincs szükség újraindításra vagy biztonsági változtatásokra.</li>
<li><strong>Adja meg a kért audioengedélyt.</strong> Ez lehetővé teszi az alkalmazásonkénti kimenetek olvasását és vezérlését a modern macOS-n.</li>
<li><strong>Nyissa meg a menüsor panelt, és állítsa be a szinteket.</strong> A futó alkalmazások egyedi csúszkákkal jelennek meg; szükség szerint állítsa be, némítsa el vagy fokozza.</li>
<li><strong>Profil mentése.</strong> Ha voltak kedvenc Sound Control beállításai, hozza létre őket újra profilként, hogy egyetlen kattintással válthasson.</li>
</ul>

<h2>Őszinte elvárások</h2>
<p>Ha a Sound Control használatának egyetlen oka az alkalmazásonkénti hangerő, némítás és erősítés volt, akkor egy modern homokozós keverő teljes mértékben lefedi. Ha erősen támaszkodott az alkalmazásonkénti hangszínszabályzóra, ne feledje, hogy a mély EQ a régi illesztőprogram-modellhez volt kötve, és az Apple jelenlegi szabályai szerint ezt a funkciót a legnehezebb tisztán reprodukálni. Ennek megfelelően állítsa be az elvárásokat, és nem fog meglepődni.</p>

<p>Készen áll arra, hogy visszaállítsa az alkalmazásonkénti hangerőt anélkül, hogy az illesztőprogram fejfájása lenne? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> – egyszeri 14,99 €, homokozóban, előfizetés nélkül, illesztőprogramok nélkül.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "A SoundBunny eltűnt – a modern Mac alkalmazásonkénti kötetalkalmazás a helyére",
    description: "A Prosoft SoundBunny gyártása megszűnt. Íme a jelenlegi, aktívan karbantartott macOS alkalmazásonkénti hangerőkeverő, amellyel helyettesíthető – valamint az alkalmazásonkénti hangbeállítások áttelepítése kernel-illesztőprogramok nélkül.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha a SoundBunny leállt, vagy már nem értékesítik, akkor a modern csere az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy alkalmazásonkénti menüsoros hangerőkeverő, amely a jelenlegi macOS számára készült. Ugyanazt az alapvető feladatot – független hangerőt, némítást és alkalmazásonkénti erősítést – kínál, mint a Mac App Store egyszeri 14,99 eurós vásárlása, kernel-illesztőprogram, DMG vagy előfizetés nélkül.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A SoundBunny eltűnt — a modern Mac alkalmazásonkénti kötetalkalmazás a helyére" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mi történt a SoundBunny-val?</h2>
<p>A SoundBunny a Prosoft Engineering alkalmazásonkénti mennyiségi segédprogramja volt a macOS számára. Lehetővé teszi, hogy minden futó alkalmazáshoz más hangerőt állítson be közvetlenül a menüsorból – Zene halk, hangos hívás, böngésző valahol a kettő között. Évekig egyike volt azon kevés eszközöknek, amelyek betöltik az Apple által soha nem zárt űrt.</p>
<p>A probléma az, hogy a SoundBunny egy örökölt szoftver. Nem tartott lépést az Apple által a macOS hang és biztonság terén végrehajtott mélyreható változtatásokkal – az Apple Silicon, a keményített futtatókörnyezet, a szigorított rendszerbővítési szabályok és a régebbi hanghorgok eltávolítása. Amikor egy ilyen segédprogram nem kap frissítéseket, végül meghibásodik: nem indul el, az operációs rendszer frissítése után elveszti az irányítást az alkalmazásfolyamok felett, vagy egyszerűen nem telepíthető tisztán egy modern Mac-ra. Ha ott vagy, nem csinálsz semmi rosszat. Az alkalmazás mögött van, nem te.</p>

<h2>Miért van szüksége a macOS-nak még mindig harmadik féltől származó keverőre?</h2>
<p>Íme az őszinte rész: ez egy valódi hiányosság a macOS-ban, nem pedig a Beállításokban javítható hiba. A Windows jó egy évtizede szállít egy alkalmazásonkénti Volume Mixert. A macOS-nak még soha nem volt ilyenje. A rendszer hangerő-csúszkája és a Hangbeállítások szabályozzák a <em>kimeneti eszköz</em> összességében – minden alkalmazás ugyanazt a mesteri szintet teljesíti. Nincs beépített módja annak, hogy azt mondjuk: „tartsa a Safari-t 40%-on, de a Zoom-t 100%-on”.</p>
<p>Ezért léteztek olyan eszközök, mint a SoundBunny, és ezért van szükség ma is a cserére. A szükség nem szűnt meg, amikor az alkalmazás megtette – az Apple egyszerűen még mindig nem foglalkozott vele.</p>

<h2>A modern csere: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy alkalmazásonkénti hangerőkeverő, amely a menüsávban található, és elvégzi azokat a dolgokat, amelyekre a SoundBunny-felhasználók bíztak, és a tegnapi helyett a mai macOS-hoz épül. A funkciók átfedése a lényeget fedi le:</p>
<ul>
<li><strong>Független kötet alkalmazásonként</strong> — futó alkalmazásonként egy csúszka, pontosan a SoundBunny mentális modell.</li>
<li><strong>Alkalmazásonkénti némítás</strong> - egyetlen zajos alkalmazás elnémítása anélkül, hogy minden máshoz hozzáérne.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés</strong> - nyomjon meg egy csendes alkalmazást <em>fentebb</em> 100%, ha egy videó vagy hívás túl alacsonyan van rögzítve. A SoundBunny nem tudta megbízhatóan felerősíteni a korábbi rendszermaximumokat a modern macOS-n; a boost itt igazi frissítés.</li>
<li><strong>Hangerő profilok</strong> – mentsen el egy alkalmazásonkénti szintet (egy „munka” egyveleget, egy „játékos” keveréket), és váltson közöttük ahelyett, hogy egyenként mozgatná a csúszkákat.</li>
<li><strong>Automatikus kacsázás</strong> – automatikusan csökkenti a háttéralkalmazás hangerejét, ha egy másik hangforrás (például a mikrofon hívás közben) aktiválódik.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a hangszórók, fejhallgatók és más kimenetek között ugyanabból a menüből.</li>
</ul>

<h2>Hogy néz ki valójában a migráció</h2>
<p>Nincs importálási lépés – az alkalmazásonkénti hangerőszintek nem egy átvitt fájl –, de a váltás gyors:</p>
<ul>
<li><strong>Távolítsa el megfelelően a SoundBunny-t.</strong> Lépjen ki, majd törölje az alkalmazást. Ha telepített bármilyen segédprogramot vagy bejelentkezési elemet, távolítsa el azt is, hogy két segédprogram ne harcoljon ugyanazon hangfolyam miatt.</li>
<li><strong>Telepítse a SoundDial-t a Mac App Store készülékről.</strong> Sandboxban van és az áruházon keresztül terjesztik, így nincs felszerelhető DMG, és nincs „azonosítatlan fejlesztő” figyelmeztetés sem. Egy vásárlás, az Apple ID-dhez kötve.</li>
<li><strong>Adjon hanghozzáférést az első indításkor.</strong> A macOS engedélyt kér a SoundDial számára az alkalmazás hangjának megtekintéséhez. Ez az Apple által biztosított modern, jóváhagyott út – nincs kernelbővítés, nincs újraindítás, nem csökken a rendszerbiztonság. Engedélyezze, és futó alkalmazásai csúszkákként jelennek meg.</li>
<li><strong>Építse újra a keveréket.</strong> Állítsa be a gyakori alkalmazásait, majd mentse el az elrendezést profilként, hogy soha ne kelljen újra megtennie.</li>
</ul>

<h2>A gyakorlati különbségek a SoundBunny-hoz képest</h2>
<p>A legfontosabb különbség az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> aktuális szoftver. Natívan az Apple Silicon rendszeren fut, az Apple által támogatott audio API-kat használja, és egy Mac App Store alkalmazás – ami azt jelenti, hogy a frissítések az áruházon keresztül érkeznek, és úgy készült, hogy túlélje az operációs rendszer frissítéseit, nem pedig megszakad. A homokozó azt is jelenti, hogy nem tud kinyúlni a sávon kívülre, ami megnyugtató az alkalmazások és a hangszórók között elhelyezkedő dolgok esetében.</p>
<p>Néhány őszinte figyelmeztetés, így az elvárások helyesek. Mivel a SoundDial az Apple hangrendszerén belül működik, a vezérlés a legjobb a normál rendszerkimeneten áthaladó szabványos alkalmazásokhoz. Egyes szoftverek a saját útvonalukon vagy egy exkluzív eszközön keresztül játsszák le a hangot, és ezeket egyetlen menüsor-keverő sem tudja teljes mértékben szabályozni – a SoundBunny-t tartalmazza. Az alkalmazásonkénti kötet pedig eleve egy szoftverréteg a macOS tetején; ez nem hardveres keverő. Ezeken a valós határokon belül elvégzi a SoundBunny korábbi munkáját.</p>

<blockquote>Ha Mac-ra váltott a Windows-tól, és alkalmazásonkénti Volume Mixert várt, akkor ez az az eszköz, amely kitölti ezt a hiányt – és most valóban karbantartják.</blockquote>

<p>A SoundBunny jól futott, de az örökség. Ha alkalmazásonkénti hangerőre, némításra és erősítésre van szüksége egy modern Mac-n, <a href="https://apps.apple.com/app/id6772792641">szerezze be a SoundDial-t a Mac App Store-ra</a> – 14,99 € egyszer, előfizetés nélkül, illesztőprogramok nélkül.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 Alternatíva a Mac számára: Alkalmazásonkénti hangerő a Boom 3D felár nélkül",
    description: "A Boom 2 örökölt, és folyamatosan a Boom 3D felé tolja Önt. Ha csak alkalmazásonkénti hangerőt szeretne, és a modern macOS egyszerű erősítésére van szüksége, itt van egy fókuszált alternatíva, és hogyan működik.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Ha tetszett a Boom 2 a rendszerszintű fellendítéshez, de egyszerűre vágysz <strong>alkalmazásonként</strong> kötet egy jelenlegi Mac-n, az őszinte válasz az, hogy a Boom 2 örökölt, és már nem a megfelelő eszköz. Fókuszált alternatíva az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, egy menüsoros keverő, amely minden alkalmazásnak saját hangerő-csúszkát, némítást és hangerőnövelést biztosít, egyszeri 14,99 €-ért, anélkül, hogy nagyobb csomagot kellene megtennie.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 2 Alternatíva a Mac számára: Alkalmazásonkénti hangerő a Boom 3D felár nélkül" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért nem illik többé a Boom 2?</h2>
<p>A Boom 2 egy bizonyos okból kedvelt alkalmazás volt: a rendszer maximumát meghaladó mértékben növelte a Mac teljes hangerejét, és hozzáadott egy hangszínszabályzót. Ezt a rendszer egészében tette, nem alkalmazásonként. Ez 2015-ben rendben volt. 2026-ban két probléma van.</p>
<p>Először is, örökség. A Global Delight egyértelműen a Boom 3D felé fordította energiáját, és ha megnyitja a Boom 2 termékoldalát, szinte azonnal az újabb, drágább alkalmazás felé tereli magát. A Boom 2 továbbra is létezik, de ez egy lépcsőfok, amelyet az eladó használja a Boom 3D értékesítéséhez, nem pedig egy olyan termék, amely aktívan szereti.</p>
<p>Másodszor, ami még fontosabb: a Boom 2 soha nem volt alkalmazásonkénti hangerőkeverő. Egy mester kimenetet emel és alakít. Ha tényleges fájdalma az, hogy a Slack ping hangosabb, mint a zenéje, vagy a böngésző lapja elnyomja a hívást, a Boom 2 ezt nem oldja meg. Együtt hangosabbá tesz mindent. Ez más munka.</p>

<h2>Mit jelent valójában az „alkalmazásonkénti hangerő” a macOS-n</h2>
<p>Íme az őszinte kontextus, amelyet a legtöbb alternatív összesítés kihagy: a macOS egyáltalán nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A Windows már évek óta rendelkezik ilyennel – kattintson jobb gombbal a hangszóróra, nyissa meg a Volume Mixert, és állítsa a Chrome értéket 40%-ra, a Spotify-t pedig 80%-ra. Az Apple soha nem szállított ilyet. A macOS hangerőgomb csak egy fő szintet mozgat.</p>
<p>Tehát amikor egy „Boom 2 alternatívát” keres, gyakran nem egy hangosabb Mac-t keres, hanem az alkalmazásonkénti vezérlést, amelyet a Windows felhasználók természetesnek vesznek. Ez egy valódi hiányosság az operációs rendszerben, nem olyasmi, amit a Boom 2 vagy bármelyik alkalmazás elfelejtett létrehozni.</p>

<h2>Ahová a SoundDial illik</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kifejezetten erre a résre készült. A menüsorban található, és felsorolja az éppen lejátszott alkalmazásokat, mindegyik saját csúszkával. Alkalmazásonként beállíthatja a szinteket, ahelyett, hogy megbökné az egyik fő vezérlőt, és a legjobbat remélné.</p>
<p>Mit csinál:</p>
<ul>
<li><strong>Független kötet alkalmazásonként</strong> – csendesítse le a böngészőt, tartsa a zenét ott, ahol szeretné, globális kompromisszumok nélkül.</li>
<li><strong>Alkalmazásonkénti némítás</strong> - némítson el egy zajos alkalmazást anélkül, hogy bármi máshoz is hozzáérne.</li>
<li><strong>Alkalmazásonkénti növelés</strong> — egy adott alkalmazást túllépni a normál plafonon, ha a videó vagy a hívás túl halkan kerül rögzítésre. Ez az a darab, amit a Boom 2 rajongók általában hiányolnak, de itt nem az egész rendszert, hanem egy alkalmazást célozzák meg.</li>
<li><strong>Hangerő profilok</strong> - mentse el az olyan elrendezéseket, mint a "fókusz", "találkozó" vagy "játék", és egyetlen kattintással válthat.</li>
<li><strong>Automatikus kacsázás</strong> - automatikusan leengedi a többi alkalmazást, amikor elkezd beszélni, hasznos hívásokhoz és rögzítéshez.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a hangszórók, fejhallgatók és más kimenetek között ugyanabból a menüből.</li>
</ul>

<h2>Hogyan kell beállítani</h2>
<p>A munkafolyamat rövid:</p>
<ul>
<li>Telepítés <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a Mac App Store-ból — nincs DMG, nincs illesztőprogram, nincs újraindítás.</li>
<li>Kattintson a menüsor ikonjára az összes jelenleg hangot produkáló alkalmazás megtekintéséhez.</li>
<li>Húzza az egyes alkalmazások csúszkáját a kívánt szintre; szükség szerint külön-külön némítsa el vagy fokozza.</li>
<li>Mentse el az elrendezést profilként, ha később újra fel szeretné használni.</li>
</ul>
<p>Mivel a App Store-n keresztül szállítják, homokozóban van és tisztán telepíthető. Ezt érdemes felhívni, mert néhány régebbi audioeszköz kernelbővítményekre vagy virtuális audio-illesztőprogramokra támaszkodott – aminek a modern macOS egyre inkább ellenáll. A SoundDial nem kéri az illesztőprogram telepítését vagy a biztonsági beállítások csökkentését.</p>

<h2>Őszinte korlátozás</h2>
<p>Az alkalmazásonkénti növelés valódi, de nem varázslatos. Ha egy alkalmazás forráshangja valóban halk vagy rosszul rögzített, akkor annak fokozása a jellel együtt megemeli a zajszintet, így a nagyon halk anyag sziszegő hangot adhat, ha erősen megnyomják. Ez az erősítés fizikai korlátja, nem pedig egyetlen alkalmazás hibája – a Boom 2 rendszererősítésének ugyanaz volt a kompromisszuma. Tekintse a boost mozgástérnek a gyakorlati eseteknél, ne pedig a meghibásodott hang megmentésére.</p>

<h2>Boom 2 a fókuszált keverővel szemben</h2>
<p>Ha a Boom 2-ban az egész rendszerre kiterjedő hangerőt és az EQ-t szerette, és nem törődik az alkalmazásonkénti vezérléssel, akkor a Boom 3D a gyártó tervezett utódja – ez egy tisztességes út, és nem teszünk mást. De ha kipróbálta a Boom 2-t, és rájött, hogy valójában egy alkalmazást le- vagy felfelé akart kapcsolni anélkül, hogy mindent megmozgatna, akkor az EQ-and-boost csomag rossz formájú eszköz.</p>
<blockquote>A Boom 2 hangosabbá teszi az egész Mac-t. Az alkalmazásonkénti keverő segítségével eldöntheti, melyik alkalmazás a hangosabb. Ezek különböző problémákat oldanak meg.</blockquote>
<p>Az árkülönbséget is érdemes tisztán megnevezni. A SoundDial egyszeri ára 14,99 euró. Nincs előfizetés, nincs próbaidőszak, amely egy nagyobb tervbe veszne, és nincs alkalmazáson belüli út, amely drágább szintre terelné. Megveszed a keverőt, tiéd a keverő.</p>

<p>Ha az alkalmazásonkénti hangerő – nem a rendszerszintű EQ – az, amire igazán vágyott, <a href="https://apps.apple.com/app/id6772792641">próbálja ki a SoundDial-t a Mac App Store-n</a> és állítsa be szintjeit úgy, ahogy a macOS-nak végig kellett volna adnia.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial: Ingyenes nyílt forráskódú vs fizetős alkalmazásonkénti kötet a Mac-n",
    description: "A FineTune egy ingyenes, nyílt forráskódú alkalmazásonkénti kötetalkalmazás a Mac számára; A SoundDial egy fizetős, homokozó App Store alkalmazás lendülettel, profilokkal és támogatással. Íme egy őszinte összehasonlítás, amely segít a választásban.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A FineTune egy ingyenes, nyílt forráskódú alkalmazásonkénti hangkeverő a macOS-hoz, tehát ha az ár az egyetlen gond, akkor ez egy valódi lehetőség. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy fizetős (14,99 €, egyszeri) Mac App Store alkalmazás, amely alkalmazásonként növeli a hangerőt, mentett profilokat, automatikus leállítást és szállítói támogatást nyújt. Az igazi választás az ingyenes és barkácsolás a homokozóval és a támogatottsággal szemben.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune vs SoundDial: Ingyenes nyílt forráskódú vs fizetős alkalmazásonkénti kötet a Mac rendszeren" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>A problémát mindkét alkalmazás megoldja</h2>

<p>A macOS továbbra sem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A Windows már évek óta rendelkezik ilyennel – kattintson jobb gombbal a hangszóró ikonjára, nyissa meg a Volume Mixert, és minden alkalmazás megkapja a saját csúszkáját. A Mac-n pontosan egy rendszerhangerő-csúszkát kap mindenhez: a zenéhez, a videohívásokhoz, a YouTube-hoz, az értesítési hangjelzésekhez és a játékhoz egyaránt. Ha a hívása túl halk, és a Spotify túl hangos, az egyetlen „javítás” a Spotify teljes némítása.</p>

<p>Mind a FineTune, mind a SoundDial azért létezik, hogy ezt a hiányt pótolja. Mindegyik futó alkalmazásnak saját hangerőszabályzót biztosít, így mondjuk 100%-on tarthatja a megbeszélést, miközben 20%-ra csökkenti a háttérzenét – anélkül, hogy megérintené a főcsúszkát.</p>

<h2>Mire jó a FineTune</h2>

<p>A FineTune egy újabb, ingyenes, nyílt forráskódú alkalmazás a SoundSource szellemében. Legyünk igazságosak az erősségeit illetően, mert azok valódiak:</p>

<ul>
  <li><strong>Nem kerül semmibe.</strong> Nincs licenc, nincs próba, nincs frissítés.</li>
  <li><strong>A forrás nyitott.</strong> Elolvashatja, hogy pontosan mit csinál, ellenőrizheti a magánélet védelmét, és – ha ismeri a Swiftet – módosíthatja vagy eloszthatja.</li>
  <li><strong>Ez közösségvezérelt.</strong> A hibákat bárki kijavíthatja, és a kód minden céget túlél.</li>
  <li><strong>Az alapvető szükségletet fedezi.</strong> Független alkalmazásonkénti hangerő, amelyre az emberek 90%-a ténylegesen rákeres.</li>
</ul>

<p>Ha egyetlen követelménye az, hogy "egy alkalmazást le kell tiltanom anélkül, hogy mindent leállítanám", és elégedett a hivatalos támogatási pult nélküli szoftverrel, a FineTune jogos válasz. Itt ajánlani nem engedmény, hanem őszinte.</p>

<h2>A barkácsút őszinte kompromisszumai</h2>

<p>Az ingyenes és nyílt forráskódú valós költségekkel jár, amelyek nem jelennek meg az árcédulán. Ezek nem kifejezetten a FineTune-t érintik, hanem a megközelítés természetéből adódóan:</p>

<ul>
  <li><strong>A telepítés kézi.</strong> A nyílt forráskódú audioeszközöket általában letöltött buildként vagy Homebrew képletként terjesztik, nem pedig a App Store-n keresztül. Az Apple felülvizsgálatán kívül telepíti, és Ön azon van, hogy folyamatosan frissítse.</li>
  <li><strong>Az alkalmazásonkénti hanglehallgatás természeténél fogva törékeny.</strong> Egy másik alkalmazás hangjának átirányítása mélyrendszeri munka. Amikor az Apple olyan macOS frissítést szállít, amely megváltoztatja az audiovermet, ezek az eszközök elromolhatnak, amíg valaki ki nem javítja őket. Egy önkéntes projektnél "valaki" elfoglalt lehet abban a hónapban.</li>
  <li><strong>A támogatás a legjobb erőfeszítés.</strong> Ha valami elromlik, GitHub-probléma, és várni kell. Nincs garantált válasz, és senki sem köteles kijavítani.</li>
  <li><strong>A szolgáltatás hatóköre a karbantartók által szállított.</strong> A mag hangerőszabályzója valószínűleg lefedett; az extrák teljes mértékben a közreműködő idejétől függenek.</li>
</ul>

<blockquote>Az őszinte keretezés: A FineTune pénzt cserél a karbantartási felelősségre. 14,99 eurót takarít meg, és vállalja annak kockázatát, hogy az operációs rendszer frissítése tönkreteszi, amíg a közösség felzárkózik.</blockquote>

<h2>Ahol a SoundDial más</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ellenkező kereskedelmet folytat. Egyszer fizet, és cserébe kap egy App Store terméket, mögötte egy szállítóval és egy szélesebb szolgáltatáskészlettel, amely az alkalmazásonkénti mennyiségre épül:</p>

<ul>
  <li><strong>Alkalmazásonkénti hangerő és némítás</strong> – a megosztott alapállapotot mindkét alkalmazás biztosítja.</li>
  <li><strong>Alkalmazásonkénti hangerő BOOST</strong> – tolja a túl csendes alkalmazást 100% fölé. Gyenge hangkimenettel rendelkező alkalmazásoknál hasznos, ahol még mindig nem elég mások lehangolása.</li>
  <li><strong>Hangerő profilok</strong> - mentse el a teljes mixeket ("Találkozás", "Fókusz", "Játék"), és egyetlen kattintással váltson a csúszkák minden egyes visszaállítása helyett.</li>
  <li><strong>Automatikus kacsázás</strong> – automatikusan csökkenti a háttéralkalmazások számát, amikor beszél, vagy amikor egy kiválasztott alkalmazás aktívvá válik, így a hívások kézi hegedülés nélkül megszakadnak.</li>
  <li><strong>Gyors kimenet váltás</strong> — ugrás a hangszórók, fejhallgatók és egyéb kimenetek között a menüsorról.</li>
</ul>

<p>Ugyanolyan fontos <em>hogyan</em> szállít. A SoundDial homokozóban van és a Mac App Store-n keresztül terjeszthető – nincs külön DMG, nincsenek kernel-illesztőprogramok, nincs audio-illesztőprogram telepítése. A frissítések a App Store-n keresztül érkeznek, mint bármely más alkalmazáshoz, és van egy igazi fejlesztő, aki e-mailt küldhet, ha valami baj van. Ez a 14,99 eurós konkrét értéke: nem csak több funkció, hanem valaki, aki felelős azért, hogy a macOS kiadásokon keresztül működjenek.</p>

<h2>Őszinte figyelmeztetés, amely mindkettőre vonatkozik</h2>

<p>Egyetlen harmadik féltől származó alkalmazás sem tudja a macOS hangrendszerét Windows Volume Mixerré alakítani, mivel az Apple nem tesz elérhetővé tiszta nyilvános API-t az alkalmazásonkénti hanghoz. Ebben a kategóriában minden eszköz – ingyenes vagy fizetős, nyitott vagy zárt – megkerüli ezt a korlátozást rendszerszintű hangtechnikákkal. Ez azt jelenti, hogy a FineTune és a SoundDial egyaránt hatással lehet a macOS hang jelentős változásaira. A különbség az, hogy később ki a felelős a javításért: egy önkéntes közösség vagy egy fizetett eladó, akinek a terméke függ tőle.</p>

<h2>Melyiket érdemes választani?</h2>

<ul>
  <li><strong>Válassza a FineTune-t, ha</strong> nulla költséget szeretne, értékeli a nyílt forráskódú átláthatóságot, csak alapszintű alkalmazásonkénti kötetre van szüksége, és kényelmesen telepíthető a App Store-n kívül, és önfenntartó, ha a dolgok megszakadnak.</li>
  <li><strong>Válassza a SoundDial-t, ha</strong> egy kattintással telepíthető App Store, olyan extrákra van szüksége, mint a boost, a profilok és az automatikus leállítás, valamint a frissítések és támogatás egy olyan gyártótól, aki a játékban van.</li>
</ul>

<p>Mindkettő érvényes. Valójában azon múlik, hogy pénzt költenél inkább, vagy odafigyelsz. Ha inkább vásárol egy támogatott, homokozó alkalmazást, és soha többé nem gondol rá, <a href="https://apps.apple.com/app/id6772792641">szerezze be a SoundDial-t a Mac App Store-ra</a> egyszeri 14,99 euróért – előfizetés, illesztőprogramok, DMG nélkül.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial: Elég az ingyenes Mac hangerőkeverő?",
    description: "Tisztességes fejpárbaj az ingyenes Background Music alkalmazás és a fizetős SoundDial között. Hol működik az ingyenes virtuális meghajtó megközelítés, hol tönkremegy, és mikor éri meg egy 14,99 eurós natív keverő.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>A Background Music ingyenes, és az alapokhoz valóban jó: minden alkalmazásnak saját hangerő-csúszkát ad, és automatikusan szüneteltetheti a zenét, amikor egy másik alkalmazás játszik. Ha ez minden, amire szüksége van, használja. De egy virtuális audio-illesztőprogramra támaszkodik, amely eltörhet a macOS frissítése után, és hiányzik az alkalmazásonkénti erősítés, a profilok és a kimeneti váltás. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pénzt cserél egy vezető nélküli, homokozós, támogatott alternatívára.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial: Elég az ingyenes Mac hangerőkeverő?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Először is, az őszinte igazság a macOS-ról</h2>
<p>A macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A Windows Volume Mixerben több mint egy évtizede van egy ilyen, de a Mac-n a rendszercsúszka mindent egyszerre mozgat. Nincs olyan Apple által támogatott API, amely lehetővé tenné a harmadik féltől származó alkalmazások számára, hogy tisztán elfogják és kiegyensúlyozzák az egyes alkalmazásfolyamokat. Ez az egyetlen hiányosság az, amiért egyáltalán léteznek olyan eszközök, mint a Background Music és a SoundDial, és ez a kiváltó oka az alábbi kompromisszumok többségének.</p>

<h2>Amit a Background Music jól csinál</h2>
<p>A Background Music egy nyílt forráskódú menüsor-alkalmazás, amely évek óta létezik, és jó okkal van hűséges követője. Ez ad neked:</p>
<ul>
<li><strong>Független kötet alkalmazásonként</strong> – az alapvető tulajdonság. Kapcsolja le a Spotify-t, miközben hangosabban tartja a hívást.</li>
<li><strong>Automatikus szünet</strong> — szüneteltetheti a zenelejátszót, ha a hang máshol kezdődik, ami kellemes találkozó a megbeszéléseken.</li>
<li><strong>Egy eszköz hangereje, amely követi Önt</strong> és egy egyszerű, értelmetlen felület.</li>
<li><strong>Nulla költség</strong> — ingyenes, és a kód nyilvános.</li>
</ul>
<p>Sok embernek ez is elég. Ha a teljes kívánságlistád az „egy zajos alkalmazás halkabbá tétele anélkül, hogy a többit érintené”, a Background Music lefedi, és nem szabad olyasmiért fizetni, amire nincs szüksége. Az igazságosság itt számít: ez egy jogosan hasznos eszköz.</p>

<h2>Ahol a szabad megközelítés megmutatja a varrásait</h2>
<p>A fogás az <em>hogyan</em> A Background Music alkalmazásonkénti hangerőt ér el. Mivel a macOS nem ad meg hivatalos elérési utat, egy virtuális audio-illesztőprogramot telepít (a régi Soundflower megközelítés módosított változata), amely a rendszer hangját önmagán keresztül irányítja. Ez az architektúra okos, de valós költségekkel jár:</p>
<ul>
<li><strong>A macOS frissítések után tönkremegy.</strong> A virtuális audio-illesztőprogramok a rendszer mélyén rejlenek, és a nagyobb macOS kiadások történelmileg letiltották vagy destabilizálták őket. A felhasználók rendszeresen jelentenek csendet, torzulást vagy a frissítés utáni újratelepítés szükségességét. Amikor eltörik, gyakran egyedül vagy.</li>
<li><strong>A telepítés nehezebb.</strong> Egy kernel melletti audioeszközt ad hozzá a Mac-hoz, nem csak egy alkalmazást. A tiszta eltávolítás nehézkes lehet.</li>
<li><strong>Ez lesz az alapértelmezett kimeneti eszköz.</strong> Mivel minden a virtuális eszközön keresztül történik, egyes pro-audió-, konferencia- vagy játékalkalmazások furcsán viselkedhetnek, és a valódi kimenet váltása egy extra lépés.</li>
<li><strong>A fejlődés közösségi ütemben zajlik.</strong> Nincs ügyfélszolgálat. A javítások akkor érkeznek, amikor egy önkéntesnek van ideje, ami egy olyan hangeszköz esetében, amely hirtelen elhallgathat, jelentős kockázatot jelent.</li>
</ul>
<p>Mindez nem teszi rosszá a Background Music-t. Ingyenes eszközzé teszi az ingyenes eszköz kompromisszumával.</p>

<h2>Amit valójában fizet a SoundDial-val</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy Mac App Store alkalmazás, amely formálja azt, ami. Mivel a App Store alkalmazások homokozóban vannak, és nem tudják szállítani azt a fajta alacsony szintű virtuális illesztőprogramot, amelyet a Background Music használ, a SoundDial úgy készült, hogy külön audioeszköz vagy DMG telepítése nélkül is működjön. Ez azt jelenti:</p>
<ul>
<li><strong>Nincsenek virtuális illesztőprogramok furcsaságai.</strong> Nincs extra kimeneti eszköz, amely eltérítené az audioláncot, és nincs mit újratelepíteni, ha a rendszer megváltozik.</li>
<li><strong>Sokkal kecsesebben túléli a macOS frissítéseket.</strong> A App Store disztribúció és a sandboxolás azt jelenti, hogy támogatott útvonalakra épül, és az áruházon keresztül frissül, így az operációs rendszer frissítése sokkal kisebb valószínűséggel hagyja elhallgatni.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés.</strong> Ez egy igazi különbség: a SoundDial képes egy alkalmazást lenyomni <em>fentebb</em> 100% csendes forrásokhoz – túl alacsonyan rögzített podcast, tompa videohívás. A Background Music csak csillapítja.</li>
<li><strong>Hangerő profilok.</strong> Mentse el az alkalmazásonkénti szinteket ("Találkozó", "Zene", "Játékok"), és egyetlen kattintással váltson a csúszkák minden alkalommal történő húzása helyett.</li>
<li><strong>Automatikus kacsázás.</strong> Más alkalmazások hangerejének automatikus csökkentése egy kiválasztott forrás lejátszásakor – az automatikus szüneteltetési ötlet jobban konfigurálható.</li>
<li><strong>Gyors kimenet váltás</strong> bekerül a menüsorba, plusz alkalmazásonkénti némítás.</li>
<li><strong>Valódi támogatás.</strong> Ez egy fizetős termék, amelyen valaki felelős, ha valami rosszul sül el.</li>
</ul>

<h2>Az őszinte döntés</h2>
<blockquote>Ha ingyenes, és csak alapszintű alkalmazásonkénti hangerőre van szüksége, és kényelmes a hibaelhárítás a macOS frissítések után, a Background Music jó választás. Ha szeretnél lendületet, profilokat, lecsillapítást, kimenetváltást, a virtuális illesztőprogram törékenységét, és valakit, aki e-mailt szeretne küldeni, ha elromlik, a SoundDial 14,99 eurót ér.</blockquote>
<p>Néhány konkrét döntetlen. Ha rendszeresen foglalkozik túl halk forrásokkal, az erősítés önmagában igazolja az árat – a Background Music egyszerűen nem tudja hangosabbá tenni a hangot, mint a forrás. Ha retteg az évenkénti „túléli-e a hangom a frissítést” szerencsejátéktól, a sandbox bolti alkalmazás megszünteti ezt a szorongást. Ha szereti a beállított és elfelejtett jeleneteket, a profilok valódi súrlódást takarítanak meg. És ez egy egyszeri 14,99 €, nem előfizetés, így az összehasonlítás egyetlen vásárlás és az ingyenes illesztőprogram fenntartására fordított idő.</p>
<p>Ellenkező esetben, ha Ön bütykös, aki szereti a nyílt forráskódot, el akarja olvasni a kódot, és többnyire csak egy alkalmazást tilt le – takarítson meg pénzt. Mindkét eszköz ugyanazt az alapvető problémát oldja meg; Különböznek robusztusságban, jellemző mélységben, és abban, hogy ki fogja meg, amikor a macOS megváltozik alattuk.</p>

<p>Alkalmazásonkénti hangerőt szeretne a virtuális vezetők szerencsejátéka nélkül? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> – egyszeri 14,99 €, homokozóban, meghajtók nélkül, beépített boosttal, profilokkal és automatikus lehúzással.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "A SoundSource megér 39 dollárt? Olcsóbb egyszeri Mac alternatíva",
    description: "A SoundSource egy nagy teljesítményű Mac audioeszköz 39 dolláros áron, de túlzás, ha csak alkalmazásonkénti hangerőre és erősítésre van szüksége. Íme egy őszinte összehasonlítás és egy 14,99 eurós egyszeri alternatíva.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A SoundSource megéri, ha szüksége van a teljes eszközkészletére: alkalmazásonkénti hangerőre, alkalmazásonkénti 10 sávos EQ-ra, hangútválasztásra az eszközök között és a rendszerszintű effektusokra. De 39 dollár körüli áron túlzás, ha elsősorban alkalmazásonkénti hangerőt, alkalmazásonkénti némítást és hangerőnövelést szeretne. Erre a szűkebb munkára <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egyszeri ára 14,99 €.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – A SoundSource megér 39 dollárt? Olcsóbb egyszeri Mac alternatíva" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Amit a SoundSource valójában csinál</h2>
<p>A Rogue Amoeba SoundSource egy igazán kiváló szoftver, és fontos, hogy ezzel kapcsolatban tisztességesnek legyünk. Ez nem csak egy hangerő-keverő. Ez ad neked:</p>
<ul>
<li><strong>Alkalmazásonkénti hangerőszabályzó</strong> a menüsorból, az a funkció, amelyet a legtöbben keresnek.</li>
<li><strong>Teljes 10 sávos equalizer</strong> Alkalmazásonként vagy rendszerszinten alkalmazhat, plusz egyéb hangeffektusokat (az Audio Unit beépülő modulokon keresztül).</li>
<li><strong>Kimenet/bemenet útválasztás</strong>, beleértve egyetlen alkalmazás küldését egy másik kimeneti eszközre, mint a rendszer többi része.</li>
<li><strong>Gyors eszközváltás</strong> és fejhallgató-specifikus EQ-beállítások.</li>
</ul>
<p>Ha Ön egy podcaster, streamer vagy audio majom, aki szeretné behangolni a fejhallgató EQ-ját, átirányítani az egyik alkalmazás hangját egy külön hangszóróra, vagy egymásra szeretné helyezni az Audio Unit effektusokat, a SoundSource megérdemli az árát. Itt semmi sem kopogtat.</p>

<h2>Az ár kérdése</h2>
<p>A SoundSource egy fizetős, egyszeri licenc körülbelül 39 dollár (az ár verziónként és promóciónként változik). Ez nem egy visszatérő előfizetés a Netflix értelmében, hanem a klasszikus fizetős alkalmazások mintáját követi: vásárolsz egy nagyobb verziót, és a jövőbeni nagyobb frissítések általában kedvezményes, fizetős frissítések, nem pedig örökké ingyenesek. Több év alatt ez több, mint egyetlen vásárlás. Sok Mac-felhasználó számára az őszinte kérdés az, hogy fizetek-e 39 dollárt egy útválasztási és hangszínszabályzó-csomagért, amikor tényleg csak az alkalmazásonkénti hangerő-csúszkákat érintem?</p>

<blockquote>Ha megnyitotta a SoundSource-t, és csak a hangerő-csúszkákat és a némítógombokat használta, akkor egy csomagért kell fizetnie, hogy az egyik fiókját használja.</blockquote>

<h2>Miért létezik egyáltalán a probléma</h2>
<p>Íme az őszinte kiváltó ok: a macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel. A Windows már évek óta rendelkezik ilyennel, de a Mac esetében a rendszer hangereje mindent vagy semmit. Nincs az Apple által biztosított módja annak, hogy a Spotify csendben maradjon, miközben a videohívás hangos marad, vagy hogy elnémítson egy alkalmazást anélkül, hogy minden máshoz hozzáérne. Ez a hiányosság pontosan az oka annak, hogy az olyan eszközök, mint a SoundSource és <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> léteznek. Ez valódi operációs rendszer-korlátozás, nem olyasmi, amit egyik alkalmazás sem talált ki a megoldásra.</p>

<h2>Ahol egy könnyebb, olcsóbb megoldás illik</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy menüsoronkénti, alkalmazásonkénti hangerőkeverő, amely a hagyományos esetekre készült, nem pedig a pro-audio tokhoz. A következőkre terjed ki:</p>
<ul>
<li><strong>Független kötet alkalmazásonként</strong> - ejtse le a zenét, miközben a találkozó teljes szinten marad.</li>
<li><strong>Alkalmazásonkénti némítás</strong> — egy alkalmazás elnémítása a Mac némítása nélkül.</li>
<li><strong>Alkalmazásonkénti hangerőnövelés</strong> – nyomja meg a csendes alkalmazást a normál 100%-a fölé, ha a forrás túl lágy.</li>
<li><strong>Hangerő profilok</strong> – mentsen el egy alkalmazásonkénti szintet (például egy „fókusz” vagy „hívás” elrendezést), és váltson egyetlen kattintással.</li>
<li><strong>Automatikus kacsázás</strong> – automatikusan leengedi a többi alkalmazást, amikor elkezd beszélni, vagy amikor egy kiválasztott alkalmazás játszik.</li>
<li><strong>Gyors kimenet váltás</strong> — ugrás a hangszórók, fejhallgatók és egyéb eszközök között a menüsorból.</li>
</ul>
<p>ez van <strong>14,99 € egyszeri</strong>, a Mac App Store-n keresztül értékesítik, tehát homokozóban van, és nincs külön DMG, nincs kernelbővítmény, és nincs telepíthető audio-illesztőprogram sem. Letöltöd, mint bármely App Store alkalmazást, és az áruházon keresztül frissül.</p>

<h2>Őszinte összehasonlítás</h2>
<p>Legyen tiszta szemmel a kompromisszum. A SoundSource többet tesz, mint a SoundDial, és ha a következők bármelyike számít Önnek, a SoundSource a jobb vétel:</p>
<ul>
<li>Valódi alkalmazásonkénti vagy rendszert szeretne <strong>equalizer</strong> és Audio Unit effektusok.</li>
<li>muszáj <strong>egyetlen alkalmazást irányítson át egy másik kimeneti eszközre</strong> mint minden más.</li>
<li>támaszkodsz <strong>fejhallgató-specifikus EQ előbeállítások</strong> és finomszemcsés hangfeldolgozás.</li>
</ul>
<p>A SoundDial nem végez EQ-t vagy alkalmazásonkénti eszközútválasztást. Szándékosan szűkebb. Amit cserébe ad, az az alacsonyabb ár, a kisebb helyigény és a fókuszált menüsoros felület, amire a legtöbben valóban vágytak: minden egyes alkalmazást a választott szinten tartsa, erősítéssel és profilokkal a tetején.</p>

<h2>Szóval megéri a SoundSource?</h2>
<p>Igen, ha az EQ-t és az útválasztást használja. Kiforrott, jól támogatott szoftver egy elismert fejlesztőtől, és az ára a valós képességeket tükrözi. De "megéri" attól függ, hogy mit fogsz megérinteni. Ha megnyitja az alkalmazást, és csak a hangerő-csúszkákat állítja be, egy alkalmazást némít el, vagy azt szeretné, ha egy csendes alkalmazás hangosabb lenne, akkor prémium kategóriájú pénzt fizet az alapvető keverőszükségletekért. Ebben az esetben az egyszeri, 14,99 eurós eszköz a legmegfelelőbb, és később bármikor áttérhet a SoundSource-ra, ha az igények EQ-ba és útválasztásba nőnek.</p>

<p>Ha alkalmazásonkénti hangerő, erősítés, némítás, profilok és automatikus lecsökkentés csak az Ön célja, <a href="https://apps.apple.com/app/id6772792641">szerezze be a SoundDial-t a Mac App Store-ra</a> – 14,99 € egyszer, előfizetés nélkül, illesztőprogramok nélkül.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Túl hangos a Mac-n? Kapcsolja le az egyik böngészőt anélkül, hogy mindent elnémítana",
    description: "A Chrome hangosabban robban, mint a többi alkalmazása a Mac-n? Ismerje meg a beépített javításokat (laponkénti némítás, webhelyhangbeállítások), és hogyan állíthat be valódi alkalmazásonkénti hangerőt a Chrome-hoz, hogy minden másnál csendesebb maradjon.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A macOS nem rendelkezik beépített alkalmazásonkénti hangerővel, így a Chrome natív módon nem kapcsolható le, miközben a többi alkalmazást teljes hangerőn hagyja. A leggyorsabb ingyenes javítások a zajos lapok elnémítása, a hangerő csökkentése az egyes videolejátszókban, vagy a hangok webhelyenkénti blokkolása a Chrome beállításaiban. A valódi, tartós, csak a Chrome hangerőszinthez alkalmazásonkénti keverőre van szüksége.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Túl hangos a Mac készüléken? Kapcsolja le az egyik böngészőt anélkül, hogy mindent elnémítana" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért hangzik hangosabb a Chrome minden másnál?</h2>
<p>A Chrome tervezése nem feltétlenül „hangosabb” – a Chrome számos független forrásból továbbítja a hangot: YouTube, automatikusan lejátszott hirdetések, videohívások, háttérzene lapok és webalkalmazások, amelyek mindegyike saját hangerőt biztosít. Egyes webhelyeket forrón kezelik, a hirdetések köztudottan hangosak, és a Chrome mindegyiket a rendszer teljes kimeneti szintjén játssza le. Eközben a zenei alkalmazás vagy a hívás halkabb lehet, így a Chrome uralja a mixet.</p>
<p>A Windows készüléken csak nyissa meg a Hangerőkeverőt, és húzza lefelé a Chrome csúszkát. A macOS egyszerűen nem tartalmazza ezt a funkciót. A rendszer hangerőszabályzója mindent egyszerre vezérel, így a Chrome lehalkítása a zenét, az értesítéseket és a hívásokat is lelassítja. Ez az alapvető korlát – és ez az operációs rendszer hiányossága, nem pedig valami, amit rosszul csinálsz.</p>

<h2>Beépített javítások, amelyek nem kerülnek semmibe</h2>
<p>Mielőtt bármit telepítene, próbálja ki ezeket. Nem adnak egyetlen Chrome hangerőszabályzót sem, de megoldják a legtöbb „egy hangos fül” problémát.</p>
<ul>
<li><strong>A zajos lap némítása.</strong> Kattintson a jobb gombbal a fülre, és válassza a „Webhely némítása” lehetőséget, vagy kattintson a hangot lejátszó lapon megjelenő kis hangszóró ikonra. Ez teljesen elnémítja azt a fület anélkül, hogy megérintené a Chrome többi részét.</li>
<li><strong>Csökkentse a hangerőt a lejátszó belsejében.</strong> A legmegbízhatóbb trükk: húzza le a hangerő csúszkát a YouTube, a Netflix vagy bármi más eszközön belül. A weblejátszók emlékeznek a saját szintjükre webhelyenként, így a csendesebb YouTube legközelebb is csendes marad.</li>
<li><strong>Hang letiltása webhelyenként.</strong> Menj ide <em>chrome://settings/content/sound</em>. A webhelyeket átfordíthatja az „engedélyezett” és a „némított” között, és adott domaineket hozzáadhat a némítási listához. Kiváló az automatikusan lejátszott webhelyek végleges elnémításához.</li>
<li><strong>Öld meg az automatikus lejátszású hirdetéseket.</strong> A hirdetés hangja gyakran az igazi bűnös. A tartalomblokkoló vagy a lap elnémítása, amíg készen nem áll a nézésre, eltávolítja a legtöbb meglepő hangerőt.</li>
</ul>
<blockquote>Ezek valóban hasznosak és ingyenesek. De figyelje meg, mit nem tehetnek: elnémítják vagy kezelik az egyes lapokat. Egyikük sem engedi, hogy azt mondhasd, hogy "a Chrome teljes értéke 40%, míg a zeném 100% marad."</blockquote>

<h2>Az őszinte korlátozás: nincs alkalmazásonkénti hangerő a macOS-ban</h2>
<p>Ha a tényleges cél az, hogy a Chrome-nak mindig halkabbnak kell lennie, mint a többi alkalmazásam, akkor a beépített eszközök nem működnek. A laponkénti némítás mindent vagy semmit. A lejátszó csúszkái visszaállnak, ha egy webhely nem emlékszik rájuk, és folyamatosan újra kell csinálni. A rendszer hangereje pedig mindent együtt mozgat.</p>
<p>Ez egy igazi macOS korlátozás, nem egy olyan hiba, amelyet el lehet konfigurálni. Az Apple soha nem szállított Windows típusú hangerőkeverőt. Kifejezetten a Chrome tartós, független hangerőszintjének egyetlen módja egy harmadik féltől származó alkalmazás, amely az Ön alkalmazásai és a kimeneti eszköze között helyezkedik el, és alkalmazásonkénti erősítést alkalmaz.</p>

<h2>Állítson be valódi alkalmazásonkénti hangerőt a Chrome számára</h2>
<p>Egy menüsor mixer, mint pl <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> megadja a macOS számára a hiányzó alkalmazásonkénti hangerőszabályzót. Felsorolja az összes jelenleg hangot lejátszott alkalmazást, és mindegyikhez saját csúszkát ad – így lehúzhatja a Chrome-t egy kényelmes szintre, és a Spotify-t, a hívásait és a rendszerhangokat pontosan ott hagyhatja, ahol vannak.</p>
<p>Így szelídíthetsz meg vele egy hangos Chrome-t:</p>
<ul>
<li>Nyissa meg a menüsor keverőjét, és keresse meg a Chrome elemet az aktív alkalmazások listájában.</li>
<li>Húzza le a Chrome csúszkáját mondjuk 40-50 százalékig. A többi alkalmazás érintetlen marad.</li>
<li>Ha egy adott alkalmazás is <em>csendes</em> helyette – egy hívásalkalmazást, amely suttogja – használja <a href="https://apps.apple.com/app/id6772792641">alkalmazásonkénti hangerőnövelés</a> 100 százalék fölé tolni, miközben alacsonyan tartja a Chrome értéket.</li>
<li>Azonnal némítsa el a Chrome-t az alkalmazásonkénti némítással, ha csendre van szüksége a lapok bezárása nélkül.</li>
</ul>
<p>Mivel a szint az alkalmazáshoz van kötve, ragad. A Chrome a kiválasztott hangerőn marad a lapokon, webhelyeken és újraindításkor – nem kell újra húzni a lejátszó csúszkáját minden alkalommal, amikor új videót nyit meg.</p>

<h2>Továbblépve: profilok, kacsázás és kimenetváltás</h2>
<p>Ha már rendelkezik alkalmazásonkénti vezérléssel, néhány extrával érdemes megőrizni. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> hangerőt takaríthat meg <strong>profilok</strong> – például egy „fókusz” profil, ahol a Chrome halk és hangos a zene, és egy „néző” profil, ahol a Chrome dominál – és egy kattintással válthat közöttük. Az automatikus lecsökkenés automatikusan elmeríti a többi alkalmazást, amikor a kiválasztott forrás elindul (jól használható, így a hívás soha nem kerül a hangos böngészőlap alá). A gyors kimeneti váltás pedig lehetővé teszi a hangszórók, fejhallgatók és egyéb eszközök közötti ugrást anélkül, hogy belemerülne a rendszerbeállításokba.</p>
<p>Ez 14,99 eurós egyszeri vásárlás a Mac App Store-n – nincs előfizetés, nincs telepítendő illesztőprogram, nincs DMG vagy kernelbővítmény. Mivel homokozóban van és a App Store-n keresztül terjesztik, nincs szükség a vázlatos audio-illesztőprogramokra, amelyek régebbi keverőeszközöket telepítenek.</p>

<h2>Melyik javítást érdemes használni?</h2>
<p>Ha időnként csak egy kellemetlen lapja van, használja a Chrome beépített némítását és a webhely hangbeállításait – ezek ingyenesek és működnek. Ha állandóan azt szeretné, ha a Chrome-t egyszerűen le lehetne utasítani, miközben minden más a helyén marad, akkor a macOS pontosan ez a rés marad nyitva, és az alkalmazásonkénti keverő a tiszta megoldás.</p>

<p>Szeretné, hogy a Chrome tartósan halkabb legyen a zene vagy a hívások elnémítása nélkül? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> és minden alkalmazásnak saját hangerő-csúszkát ad.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "A WhatsApp és Telegram értesítés túl hangosan hangzik a Mac készüléken? Kapcsold le őket",
    description: "Javítsa ki a túl hangos WhatsApp és Telegram asztali értesítési hangokat a Mac készüléken. Kezdje az egyes alkalmazások beépített beállításaival, majd csökkentse vagy némítsa le az egész alkalmazást, amikor a macOS nem biztosít alkalmazásonkénti vezérlést.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>Kezdje el minden alkalmazáson belül: A WhatsApp és a Telegram lehetővé teszi az értesítési hangok elnémítását vagy módosítását a saját beállításaiban, ami a legtisztább megoldás. A macOS azonban nem rendelkezik alkalmazásonkénti értesítési hangerő-csúszkával, így ha az alkalmazás saját hangja még mindig túl hangos, az egyetlen valódi kar az, hogy csökkentse vagy elnémítsa az alkalmazás teljes hangját egy alkalmazásonkénti hangerő-eszközzel.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A WhatsApp és Telegram értesítések túl hangosan szólnak a Mac készüléken? Kapcsold le őket" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Először használja az alkalmazás saját értesítési beállításait</h2>

<p>Mind a WhatsApp, mind a Telegram saját hangvezérlőt szállít, és mindig itt kell kezdenie. Ez a legpontosabb javítás, és semmi mást nem érint a Mac készüléken.</p>

<p><strong>WhatsApp asztali számítógép:</strong> Nyissa meg a WhatsApp-t, kattintson <em>Beállítások elemre</em> (a fogaskerék ikon), majd <em>Értesítések</em>. Ki lehet kapcsolni <em>Hangok</em> szalaghirdetések megtartása mellett, vagy letilthatja az értesítések előnézetét. A WhatsApp nem kínál hangerő-csúszkát, így lényegében magához a hanghoz van be- vagy kikapcsolva.</p>

<p><strong>Telegram asztali számítógép:</strong> Nyissa meg <em>Beállítások → Értesítések és hangok</em>. A Telegram itt rugalmasabb. Kikapcsolhatja az értesítési hangot globálisan, elnémíthatja az egyes csevegéseket, vagy egyéni (halkabb) hangokat állíthat be. Egyetlen zajos csoportot is elnémíthat, ha kinyitja és kiválasztja <em>Némítás</em>. A legtöbb ember számára a leghangosabb csevegés elnémítása megoldja a problémát anélkül, hogy mindenhol elhallgatna.</p>

<p>Ha a hang rendben van, de túl gyakori, némítsa el azokat a csevegéseket vagy csatornákat, amelyek a leggyakrabban szólalnak meg, ahelyett, hogy az alkalmazás egészében elpusztítanák a hangot. Így hallhatóak maradnak a fontos figyelmeztetések.</p>

<h2>Kapcsolja ki az értesítési hangokat a macOS rendszerbeállításokban</h2>

<p>A macOS egy második vezérlési szinttel rendelkezik, amely bizonyos esetekben felülbírálja az alkalmazást. Menj ide <em>Rendszerbeállítások → Értesítések</em>, válassza a WhatsApp vagy a Telegram lehetőséget a listában, és kapcsolja ki <em>Hang lejátszása az értesítésekhez</em>. Ez elnémítja az alkalmazás figyelmeztető hangjelzését, miközben továbbra is megjeleníti a szalaghirdetéseket.</p>

<p>Ez egy igazán jó megoldás, ha csak azt szeretné, hogy az alkalmazás halk legyen az értesítéseknél, és ne törődjön a többi hangjával (hívások, videó). Az alkalmazás saját beállításaival kombinálva lefedi a legtöbb „a ping borzasztó” panaszt.</p>

<h2>Az igazi korlátozás: a macOS-nak nincs alkalmazásonkénti hangereje</h2>

<p>Íme az őszinte rész. A fenti lépések be-/kikapcsolók. Amit nem tudnak, az a WhatsApp vagy a Telegram elforgatása <em>lefelé</em> mondjuk 40%-ra, miközben minden mást teljes hangerőn tart. A Windows-nak évek óta van alkalmazásonkénti hangerőkeverője. A macOS egyszerűen nem tartalmaz ilyet, és nincs rejtett beállítás vagy Terminal parancs, amely hozzáadná.</p>

<p>Ez akkor számít, ha a probléma nem kifejezetten az értesítési hangjelzés, hanem az egész alkalmazás túl hangos:</p>

<ul>
<li>WhatsApp vagy Telegram <strong>hang- és videohívások</strong> amely teljes hangerőn szól a zenéhez vagy egy találkozóhoz képest</li>
<li>Értesítési hang, amelyet meg szeretne tartani, de alacsonyabb szinten, nem teljesen kikapcsolva</li>
<li>Csengőhangok, amelyek messze felülmúlják azt, amit hallgat</li>
<li>Azt akarja, hogy az alkalmazás hallható legyen, de csendesen a háttérben, miközben valami másra összpontosít</li>
</ul>

<p>A beépített eszközökkel ezek egyike sem oldható meg, mert csak némítást kínálnak, szintet nem. Ez a hiányosság egy igazi macOS korlátozás, nem pedig valami, amit hiányolsz.</p>

<h2>Állítson be alkalmazásonkénti hangerőt a SoundDial segítségével</h2>

<p>Ahhoz, hogy egyetlen alkalmazást leállítson ahelyett, hogy kikapcsolná, alkalmazásonkénti hangerőkeverőre van szüksége. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy menüsoros alkalmazás, amely biztosítja a macOS-nak azt az alkalmazásonkénti hangerőszabályzót, amellyel soha nem szállították. Felsorolja az összes jelenleg hangot lejátszott alkalmazást, és mindegyikhez saját csúszkát ad.</p>

<p>Erre a konkrét problémára:</p>

<ul>
<li>Nyissa meg <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a menüsorból, és keresse meg a listában a WhatsApp vagy Telegram elemet.</li>
<li>Húzza le a csúszkát egy kényelmes szintre, például 30–40%-ra, miközben érintetlenül hagyja a zenét, a böngészőt vagy a videohívást.</li>
<li>Használja az alkalmazásonkénti lehetőséget <strong>néma</strong> gombot az adott alkalmazás azonnali elnémításához hívás vagy értekezlet közben, majd később feloldja a némítást anélkül, hogy a beállítások között böngésszen.</li>
<li>Ha valaha az ellenkezőjére van szüksége, egy csendes alkalmazásra, amely túl lágy, az alkalmazásonkénti alkalmazásra <strong>lendületet</strong> 100% fölé tudja tolni.</li>
</ul>

<p>Mivel alkalmazásonként beállít egy szintet, a SoundDial az értesítési csengőhangokat és a hívások hangját hallhatóan tartja, de arányosan, a „mindent vagy semmit” választás helyett a beépített beállítások kényszerítenek rád. Ön is mentheti <strong>kötetprofilok</strong>, így a csevegőalkalmazásokat alacsonyan tartó "fókusz" beállítás egyetlen kattintásnyira van.</p>

<blockquote>Egy őszinte figyelmeztetés: az alkalmazás általános hangerejének csökkentése a SoundDial-ban az értesítési csengőhangokat is csökkenti, mivel a macOS esetében ugyanaz az alkalmazás hangja. Ha teljesen ki szeretné kapcsolni az értesítéseket, de teljes hangerőn szeretne hívni, használja az alkalmazás saját némítását és a rendszerbeállításokat a csengőhanghoz, és tartsa fenn a SoundDial-t az általános szint beállításához.</blockquote>

<p>A SoundDial egy egyszeri 14,99 eurós vásárlás a Mac App Store-n, homokozóban, előfizetés nélkül, kernel-illesztőprogramok és oldalbetöltés nélküli DMG nélkül. Ez a praktikus válasz arra az esetre, ha a valóban kívánt javítást, vagyis az egyik alkalmazás leállítását, mint kikapcsolását, maga a macOS nem tudja megtenni.</p>

<h2>Melyik javítást érdemes használni?</h2>

<p>Dolgozz fentről lefelé. Először próbálja ki az alkalmazás saját értesítési beállításait, majd a macOS rendszerbeállításokat, hogy megszüntesse a csengőhangot. Ha igazán szeretné lecsökkenteni a WhatsApp-t vagy a Telegram-t egy adott hangerőre, vagy éppen az alkalmazást menet közben elnémítani hívás közben, akkor az alkalmazásonkénti keverő kiérdemli a helyét.</p>

<p>Belefáradt a csevegőalkalmazások teljes hangsugárzó és teljes csend közötti választásába? <a href="https://apps.apple.com/app/id6772792641">Szerezze be a SoundDial-t a Mac App Store-ra</a> és minden alkalmazásnak saját hangerőszabályzót ad.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "A játék hangja hangosabb, mint a Discord a Mac-n? Hogyan lehet egyensúlyba hozni a játékot a hangerővel",
    description: "A játékod kifullad a Discord hangcsevegéstől a Mac-n, és nincs beépített hangerőkeverő. Íme, miért hiányzik a macOS-ból a Windows-stílusú alkalmazásonkénti hangerő, és hogyan lehet lehalkítani a játékot úgy, hogy közben a hangot felemeljük.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A macOS nem rendelkezik beépített alkalmazásonkénti hangerőkeverővel, így nem tudja natívan lefedni a játékot, miközben a Discord hangos marad. A javítás egy menüsor alkalmazás, amely alkalmazásonként független hangerőt állít be. Csökkentse a játékot 40-50%-ra, hagyja az audiocsevegést 100%-on, és mindkettő kiegyensúlyozott marad a játékbeli csúszkák érintése nélkül.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A játék hangja hangosabb, mint a Discord a Mac-n? Hogyan lehet egyensúlyba hozni a játékot a hangerővel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért történik ez a Mac-n (és nem a Windows-n)</h2>

<p>Ha már játszott a Windows-n, ismeri a Volume Mixert: kattintson a jobb gombbal a hangszóró ikonra, és minden futó alkalmazás megkapja a saját csúszkáját. Eldobod a játékot, felemeled a Discord-t, kész. A macOS egyszerűen soha nem szállította ezt a funkciót. A rendszerbeállításokban egy fő kimeneti kötet és néhány alkalmazásszintű kapcsoló található, de nincs alkalmazásonkénti szintvezérlés tetszőleges alkalmazásokhoz.</p>

<p>Tehát amikor egy játék keverékét forrón elsajátítják, a robbanások, a zene és a lövöldözés ugyanazon a kimeneti szinten szólal meg, mint a barátaid hangja. Egyes játékok megjelenítik a fő hangerő csúszkát, de sok nem megy elég alacsonyra, és sok indító, böngésző és önálló játék egyáltalán nem kínál hasznos vezérlést. A Discord önmagában csak a bejövő felhasználók hangerejének beállítását teszi lehetővé, a velük versengő játékot nem.</p>

<p>Hogy őszinte legyek, ez egy operációs rendszer-szintű hiányosság, nem egy hiba, amelyet el lehet hárítani. Az Apple audioverme mindent egyetlen kimeneti adatfolyamhoz irányít, és nincs olyan belső felhasználói felület, amely alkalmazásonként felosztaná. Ezért van szüksége egy harmadik féltől származó eszközre, amely az alkalmazások és a kimeneti eszköz között helyezkedik el.</p>

<h2>A kézi megoldások (és miért nem sikerülnek)</h2>

<p>Mielőtt szoftverhez nyúlna, érdemes megismerni az ingyenes lehetőségeket és azok korlátait:</p>

<ul>
<li><strong>Csökkentse a játék alkalmazáson belüli hangerejét.</strong> Akkor működik, ha a játéknak van egy mestercsúszkája, elég finom lépésekkel. Sokan megállnak 10%-os lépésekben, vagy összekapcsolják a zenét és az effektusokat, így nem lehet csak a hangos részeket megszelídíteni.</li>
<li><strong>Neveld fel barátaidat a Discord-ban.</strong> Kattintson jobb gombbal az egyes felhasználókra, és növelje a hangerőt. Ez egy kicsit segít, de felülmúlja, és nem érinti a játékot, ami valójában a probléma.</li>
<li><strong>Használjon hardveres hangerőszabályzóval ellátott fejhallgatót.</strong> Csak az általános szintet változtatja meg, a játék és a hang egyensúlyát nem.</li>
<li><strong>A hang továbbítása virtuális eszközön keresztül.</strong> Az olyan eszközök, mint a Loopback vagy a BlackHole, meg tudják osztani a streameket, de a profiknak szólnak, valódi beállítást igényelnek, és túlzásba esnek a „csendesebbé tenni a játékot”.</li>
</ul>

<p>Ezek egyike sem adja azt az egy dolgot, amit a Windows felhasználók természetesnek tartanak: egy gyors csúszkát alkalmazásonként. Ez a szakadék <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kitöltésére épül.</p>

<h2>A közvetlen javítás: független kötet alkalmazásonként</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy menüsoronkénti hangerőkeverő a macOS számára. Megjeleníti az összes jelenleg lejátszott alkalmazást, és mindegyikhez saját csúszkát ad, pontosan úgy, mint a Windows hangerőkeverő. A játék versus hang probléma esetén a munkafolyamat rövid:</p>

<ul>
<li>Kattintson a SoundDial ikonra a menüsorban, miközben a játék és a Discord is fut.</li>
<li>Keresse meg a játékot a listában, és húzza le a csúszkát nagyjából 40-50%-ra.</li>
<li>Hagyja a Discord-t (vagy a Slack-t, a Zoom-t vagy a hangalkalmazást) 100%-on.</li>
<li>Menet közben állítsd be a játékot – lökd le a játékot hangos tűzharcban, és hátrálj fel a csendes felfedezés során.</li>
</ul>

<p>Mivel a szintek alkalmazásonként érvényesek, egyszer beállítja őket, és érvényesek. A játék korlátlan marad, függetlenül attól, hogy milyen melegben fut a saját mixe, és barátai tisztán hallhatók rajta.</p>

<h2>Boost, némítás és profilok a beállítás hátralevő részéhez</h2>

<p>Ugyanez az eszköz fedi le a hangjátékkal együtt járó kellemetlenségeket:</p>

<ul>
<li><strong>Alkalmazásonkénti növelés.</strong> Ha egy csapattárs mikrofonja még a Discord maximumon is halk, akkor nyomja meg a hangalkalmazást <em>fentebb</em> 100%, tehát inkább átvágja a játékot, mintsem eltemetné.</li>
<li><strong>Alkalmazásonkénti némítás.</strong> Azonnal némítson el egy háttérböngészőlapot vagy egy zenei alkalmazást anélkül, hogy alt-tab-ot húzna vagy leállítaná a lejátszást.</li>
<li><strong>Hangerő profilok.</strong> Mentse el a "játék" profilt a játék 45%-os és a Discord növelésével, majd váltson vissza egy "normál" profilra a mindennapi használathoz egyetlen kattintással – nem kell újrahúzni a csúszkákat minden munkamenetben.</li>
<li><strong>Automatikus kacsázás.</strong> A játék automatikusan lemerül, amikor valaki beszél, így a feliratok mindig az akció tetejére kerülnek.</li>
<li><strong>Gyors kimenet váltás.</strong> Ugyanabból a menüből ugorhat a fejhallgató és a hangszóró között anélkül, hogy belemerülne a rendszerbeállításokba.</li>
</ul>

<blockquote><p>A mentális modell egyszerű: alkalmazásonként egy csúszka, ahogy a Windows teszi ezt évek óta. A macOS soha nem biztosította, így egy kis segédprogram visszaállítja a paritást.</p></blockquote>

<h2>Őszintén mire számíthatunk</h2>

<p>Az alkalmazásonkénti keverő tisztán megoldja az egyensúlyi problémát, de helyesen állítja be az elvárásokat. Szabályozza a szoftveres kimeneti szinteket – nem tudja megjavítani azt a játékot, amelynek saját hangja rosszul van elsajátítva, és nem képes olyan jelet felvenni, amelyet soha nem rögzítettek (egy valóban törött mikrofonhoz még hardveres javítás szükséges). A Boost valódi nyereséget ad hozzá, így a csendes forrás 100% fölé tolása torzítást okozhat, pontosan úgy, mint bármely erősítő túl magasra forgatása. Ésszerűen használva azonban a legtöbb beállításhoz egy szerény játéksapka és egy kis hangerősítés szükséges.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> homokozóban van, és közvetlenül a Mac App Store-ból telepíthető – nincsenek meghajtók, nincsenek kernelbővítmények, nincs megbízható DMG. Ez egy egyszeri 14,99 euró, előfizetés nélkül, és támogatja a macOS hangerőszabályozást 28 nyelven.</p>

<p>Hagyd abba a harcot a játékon belüli csúszkák ellen. Fogd meg <a href="https://apps.apple.com/app/id6772792641">SoundDial a Mac App Store modellen</a>, kapcsolja le a játékot, tartsa hangosan a csapatot, és végül szerezze meg a Windows stílusú hangkeverőt, a macOS elfelejtett szállítani.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "A külső monitor hangszórói túl hangosak vagy elakadtak a Mac-n? Javítsa ki a HDMI/DisplayPort hangerőt",
    description: "Miért nem vezérlik a Mac hangerőszabályzó gombjai a HDMI vagy a DisplayPort monitor hangszóróit, és hogyan lehet kijavítani a túl hangos, elakadt vagy beállíthatatlan hangot a monitor OSD, Audio MIDI beállítás és jobb kimeneti útválasztás segítségével.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Ha a Mac hangerőszabályzó gombjai kiszürkültek, vagy nem csinálnak semmit a HDMI-n vagy DisplayPorton keresztül csatlakoztatott monitoron, ez általában nem hiba. A digitális kijelző hangját gyakran rögzített szinten küldik, és a monitor saját hardvere szabályozza a hangerőt. A javítás a kijelző beállítása, a kimenet átirányítása vagy egy másik audioeszköz használata.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A külső monitor hangszórói túl hangosak vagy elakadtak a Mac-n? Javítsa ki a HDMI/DisplayPort hangerőt" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért nem működnek a Mac hangerőgombok a HDMI/DisplayPort felett?</h2>

<p>A HDMI és a DisplayPort a hangot digitális adatfolyamként továbbítja. Sok monitor fix kimeneti szinten fogadja ezt a streamet, és azt várja el, hogy magán a kijelzőn szabályozza a hangerőt, ne a forráseszközön. Amikor a macOS ezt észleli, letiltja a képernyőn megjelenő hangerő-csúszkát, és kiszürkíti az F11/F12 billentyűket, és megnyomásakor megjelenik a „belépés tilos” szimbólum.</p>

<p>Ez hardver- és protokollkorlátozás, nem olyan, amit a Mac szoftvere felülírhat. A hang soha nem megy át olyan fokozaton, ahol a macOS tompítani tudja. Egyetlen alkalmazás, illesztőprogram vagy beállítás sem képes beadni a hangerőszabályozást egy adatfolyamba, amelyet a kijelző ragaszkodik a teljes szintű fogadáshoz. Ha őszinte akar lenni ezzel kapcsolatban, órákat takarít meg a rossz megoldás keresésétől.</p>

<h2>1. javítás: Használja a monitor saját vezérlőit (OSD)</h2>

<p>A legtöbb ember számára ez az igazi megoldás. Szinte minden beépített hangszóróval rendelkező monitoron van egy képernyőmenü, amelyet fizikai gombok vagy egy joystick működtetnek a panel hátoldalán vagy alján.</p>

<ul>
<li>Nyomja meg az OSD/menu gombot a monitor beállításainak megnyitásához.</li>
<li>Keressen egy Audio vagy Volume részt.</li>
<li>Csökkentse a szintet – ez az a vezérlés, amely valójában HDMI/DP-n keresztül működik.</li>
</ul>

<p>Egyes monitorok egy kísérőalkalmazást vagy DDC/CI-támogatást is megjelenítenek, így az OSD-t a macOS-ból hajthatja meg. A DDC-t beszélő, harmadik féltől származó segédprogramok a Mac hangerőgombjait leképezhetik a monitor hardveres hangerejének megfelelően, amit érdemes kipróbálni, ha utálunk a panel gombjaihoz nyúlni.</p>

<h2>2. javítás: Ellenőrizze az Audio MIDI beállítást</h2>

<p>Nyissa meg <strong>Audio MIDI beállítás</strong> (az /Applications/Utilities mappában). Válassza ki a monitort az eszközlistából. Ha egy hangerő-csúszka jelenik meg a jobb oldalon, húzza le – néha a kijelző egy szoftveresen vezérelhető szintet tesz közzé, még akkor is, ha a menüsor gombjai le vannak tiltva. Ha a csúszka hiányzik vagy ki van szürkítve, a kijelző megerősíti, hogy csak rögzített szintű hangot fogad, és vissza kell térnie az OSD-hez.</p>

<p>Amíg itt van, ellenőrizze, hogy a megfelelő kimeneti eszközt választotta-e ki. Gyakori, hogy a hangot csendben továbbítják egy olyan monitorhoz, amelyet elfelejtett csatlakoztatni, ami megmagyarázza a hirtelen hangos vagy hiányzó hangot.</p>

<h2>3. javítás: A hangot olyan helyre irányítsa, amelyet ténylegesen vezérelhet</h2>

<p>Ha a monitorod hangszórói amúgy is közepesek (a legtöbb ilyen), és a hangerőszabályozás is ügyetlen, a legtisztább megoldás az, ha abbahagyod a használatukat:</p>

<ul>
<li>Csatlakoztassa a hangszórókat vagy a fejhallgatót a monitor fejhallgató-kimenetébe, ha van ilyen – ez az analóg kimenet általában a kijelzőről vezérelhető.</li>
<li>Használjon USB DAC, USB hangszórókat vagy Bluetooth kimenetet. Az USB és analóg kimenetek teljes szoftveres hangerőszabályozást biztosítanak a macOS-nak, így a gombok ismét normálisan működnek.</li>
<li>Válassza a Mac beépített hangszóróit a gyors hangok érdekében, és tartsa a monitort csak a videóhoz.</li>
</ul>

<p>Ha olyan kimenetet használ, amelyet a macOS valóban képes csillapítani, a rendszer hangerőszabályzói működnek, és Ön visszanyeri a finom vezérlést, ahelyett, hogy a monitor durva OSD lépései között ugrálna.</p>

<h2>Ha a kimenet működik, szabályozza a hangerőt alkalmazásonként</h2>

<p>A vezérelhető kimenet visszaszerzése megoldja a "túl hangos / elakadt" problémát. De a macOS továbbra is csak egy fő kötetet ad mindenhez. A Mac-ban nincs beépített alkalmazásonkénti keverő – a Windows már évek óta rendelkezik vele, de az Apple soha nem szállított megfelelőt. Tehát egy hangos videó, egy játék és egy csendes hívás ugyanazt a csúszkát osztja meg.</p>

<p>Ez a szakadék <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kitölti. Ez egy menüsoros keverő, amely minden alkalmazásnak saját, független hangerőt ad, így lekapcsolhatja a böngészőfület anélkül, hogy hozzáérne a zenéhez, azonnal elnémíthat egy alkalmazást, vagy a normál plafon fölé emelhet egy csendes alkalmazást. Menthet hangerőprofilokat a különböző beállításokhoz, és gyorsan válthat a kimenetek között a menüsorból.</p>

<p>A hatály tisztázása érdekében: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vezérli a szoftver hangerejét a macOS-n keresztül áramló hanghoz. Nem tud felülírni egy olyan monitort, amely figyelmen kívül hagyja a rendszer hangerejét a HDMI-n keresztül – ez a kijelző rögzített szintű viselkedése, és csak az OSD vagy egy másik kimenet javítja a problémát. Ha már vezérelhető kimenetet használ, az alkalmazásonkénti vezérlés az, ahol az alkalmazás ragyog.</p>

<h2>Gyors ellenőrző lista</h2>

<ul>
<li>A billentyűk kiszürkültek HDMI/DP-n keresztül? Használja a monitor OSD hangerejét – ez az elvárt viselkedés.</li>
<li>Ellenőrizze, hogy az Audio MIDI Setup programban nincs-e rejtett szoftvercsúszka.</li>
<li>Győződjön meg arról, hogy a megfelelő kimeneti eszközt választotta ki.</li>
<li>A valódi vezérléshez irányítsa a hangot a fejhallgató-kimenetre, az USB-re vagy a Bluetooth-ra.</li>
<li>Ezután használjon alkalmazásonkénti keverőt az egyes alkalmazások kiegyensúlyozásához.</li>
</ul>

<p>Ha a kimenet ellenőrzése alatt áll, adjon <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy pillantást. Ez 14,99 eurós egyszeri vásárlás a Mac App Store-tól – nincs előfizetés, nincs illesztőprogram, nincs DMG –, és végül egy valódi alkalmazásonkénti hangkeverőt hoz a macOS-hoz.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "A USB DAC hangerő nem állítható be a Mac-n? Szerezze vissza a szoftver hangerőszabályzóját",
    description: "Miért szürkíti ki a macOS a hangerő csúszkát sok USB DAC esetében, mit jelent ez, és hogyan állíthatja vissza a működő szoftveres hangerőszabályzást a Mac készüléken a hangminőség romlása nélkül.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Ha a USB DAC hangerő-csúszkája szürkén jelenik meg a Mac-n, az általában nem hiba. A macOS letiltja a szoftver hangerejét, ha a DAC azt jelzi, hogy nincs szabályozható hangereje, és arra számít, hogy a DAC saját hardveres gombját használja. A szoftver hangerejének visszaállításához használjon alkalmazásszintű csillapítót, például <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A USB DAC hangerő nem állítható be a Mac készüléken? Szerezze vissza a szoftver hangerőszabályzóját" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért szürkíti ki a macOS a hangerőt egyes USB DAC esetében?</h2>

<p>Amikor csatlakoztat egy USB audioeszközt, a macOS megkérdezi, hogy mit tud az USB Audio Class (UAC) protokollon keresztül. Ennek a kézfogásnak a része egy sor „funkcióegység” vezérlő, beleértve a hangerőszabályzót is. Ha a DAC hangerőszabályzót deklarál, a macOS a billentyűzet hangerőgombjaihoz és a menüsor csúszkájához csatlakoztatja. Ha a DAC kijelenti, hogy nincs gazdagép által állítható hangereje, a macOS teljesen kiszürkíti a csúszkát.</p>

<p>Sok jó minőségű DAC és erősítő pontosan az utóbbit teszi, szándékosan. A tervező feltételezi, hogy a DAC teljes skálájú, bittökéletes digitális jelet fog táplálni, és magán az egységen található analóg hangerőszabályzóval szabályozza a hangerőt. Ez az analóg csillapítás a digitális-analóg átalakítás után következik be, így elkerülhető a bitek eldobása, és valóban az audiofilek által preferált útvonal. Ez egy tulajdonság, nem hiba.</p>

<blockquote>Ökölszabály: ha a DAC fizikai hangerőszabályzóval rendelkezik, és a Mac csúszka ki van szürkítve, a gyártó azt akarja, hogy használja a gombot. A jel továbbítása 100%-ban tervezett.</blockquote>

<h2>Amikor a kiszürkült csúszka valójában probléma</h2>

<p>A „csak használja a gombot” válasz a valós beállításokban lebomlik:</p>

<ul>
<li><strong>A DAC-nak nincs gombja.</strong> A sok kompakt USB DAC, hardverkulcs és profi interfész nem teszi lehetővé a hangerőszabályozást és a gazdagép vezérlését sem. Bármilyen szinten is megragadt az alsó erősítő vagy a meghajtott hangsugárzók beállítása.</li>
<li><strong>A gomb nem elérhető.</strong> A monitor mögött álló asztali DAC vagy egy fix erősítésű erősítőt tápláló egység azt jelenti, hogy a hangerő beállítása gombnyomás helyett fizikai feladattá válik.</li>
<li><strong>Alkalmazásonkénti egyensúlyra van szüksége, nem csak mesterszintre.</strong> Még egy tökéletes hardveres gomb is egyetlen globális vezérlés. Nem tud egy Zoom hívást halkabbá tenni, mint a zenét, és nem tudja lecsillapítani a játékot, amikor értesítést küld.</li>
</ul>

<p>Ezek egyikét sem javítja a macOS, mert az operációs rendszer szempontjából az eszköz megfelelően működik. Ez az őszinte korlátozás: ez egy eszköz által jelentett képesség, és a Rendszerbeállítások között nincs kapcsoló, amely felülírná.</p>

<h2>Őszinte megoldások, mielőtt bármit telepítesz</h2>

<p>Először próbáld ki ezeket, mert nem kerülnek semmibe:</p>

<ul>
<li><strong>Használja a hardver gombot vagy az alsó hangerőt.</strong> Ha a DAC vagy a meghajtott hangszórók/erősítők rendelkeznek vezérlővel, ez a legtisztább lehetőség, és megőrzi a teljes digitális felbontást.</li>
<li><strong>Ellenőrizze a DAC saját alkalmazását vagy firmware-jét.</strong> Egyes DAC-k (és játékorientált egységek) vezérlőpanelt vagy firmware-beállítást szállítanak, amely lehetővé teszi a gazdagép hangerejét. Ha létezik „USB-kötet” vagy „szoftver-kötet” opció, akkor annak bekapcsolásával a macOS csúszka ismét működik.</li>
<li><strong>Próbáljon meg másik USB módot.</strong> Néhány eszköz eltérő képességekről számol be "osztály-kompatibilis" és a szabadalmaztatott illesztőprogram módban. A gyártói illesztőprogram telepítése vagy eltávolítása megváltoztathatja, hogy a macOS lát-e hangerőszabályzót.</li>
<li><strong>Nézze meg az Audio MIDI beállításait.</strong> Nyissa meg az Audio MIDI Setup programot, válassza ki az eszközt, és ellenőrizze, hogy megjelenik-e mester vagy csatornánkénti hangerő. Időnként egy csúszka is elérhető ezen a panelen, még akkor is, ha a menüsor ki van szürkítve.</li>
</ul>

<p>Ha ezek egyike sem érvényes, akkor szoftveres csillapításra van szüksége a Mac oldalon.</p>

<h2>Szoftveres hangerőszabályozás alkalmazásonkénti csillapítással</h2>

<p>Ha a hardver nem fogadja el a hangerő parancsot, a fennmaradó lehetőség az, hogy a hangot szoftverben tompítsa, mielőtt elérné a DAC-t. Pontosan ez az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nem. A menüsoron található, és minden futó alkalmazásnak saját független hangerőt, némítást és még egy hangerőt is biztosít, függetlenül attól, hogy a DAC rendelkezik-e hardveres vezérléssel.</p>

<p>A kiszürkült DAC használatához:</p>

<ul>
<li>Telepítés <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a Mac App Store-ból, és nyissa meg a menüsorból.</li>
<li>Tartsa a DAC-t kiválasztva rendszerkimenetként; A SoundDial gyors kimeneti kapcsolóját is használhatja a DAC, a hangszórók és a fejhallgatók közötti váltáshoz anélkül, hogy a rendszerbeállításokba merülne.</li>
<li>Állítson be alkalmazásonkénti szinteket: dobja le a böngészőt, emelje fel a zenelejátszót, némítsa el, amit nem szeretne. Mindegyik alkalmazás a kiválasztott hangerőn streamel, és a vegyes eredmény a DAC-ra kerül.</li>
<li>Mentse el a hangerőprofilokat a különböző forgatókönyvekhez (hívások és hallgatás), és hagyja, hogy a háttérben futó alkalmazások automatikusan lecsökkenjenek, amikor valami fontosabb lejátszásra kerül sor.</li>
</ul>

<h2>Őszinte kompromisszum a hangminőségben</h2>

<p>A szoftveres csillapítás csökkenti a digitális szintet az átalakítás előtt, így elméletileg egy kis felbontást elvet magának a DAC analóg hangerőhöz képest. A gyakorlatban a modern 24 bites és magasabb utaknál normál hallgatási szinteken a redukció jóval minden hallható alatt van, és a DAC teljes dinamikatartományát megtartja a teljes skálához közeli lejátszáshoz. Ha Ön egy purista, akinek elérhető egy jó analóg gombja, használja a gombot. Ha nem rendelkezik használható hardveres vezérléssel, vagy alkalmazásonkénti egyensúlyra van szüksége, amit egyszerűen nem tud biztosítani a macOS, akkor a szoftver hangereje a megfelelő kompromisszum, és legyőzi a semmit sem tevő csúszkát.</p>

<p>A SoundDial 14,99 eurós egyszeri vásárlás, homokozóban, illesztőprogramok, kernelbővítmények vagy DMG telepítők nélkül. Ha a USB DAC hangereje ki van szürkítve, és a gomb elérése nem lehetséges, <a href="https://apps.apple.com/app/id6772792641">szerezze be a SoundDial-t a Mac App Store-ra</a> és helyezze vissza a működő hangerőszabályzót a menüsorba.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Egy hangos alkalmazás maximális hangerejének korlátozása a Mac készüléken (védje meg hallását)",
    description: "A macOS-nak nincs alkalmazásonkénti hangerőkorlátja, így egyetlen hangos alkalmazás a rendszer teljes hangerején képes felrobbantani. Az alábbiakban bemutatjuk, hogyan állíthat be maximális hangerőt egyetlen alkalmazáshoz a Mac-n egy alkalmazásonkénti keverővel, és miért számítanak a hardveres korlátok.",
    date: "2026-07-23",
    readTime: "5 perc olvasás",
    content: `<p>A macOS nem rendelkezik beépített móddal egy alkalmazás maximális hangerejének korlátozására, így egy hangos program a rendszercsúszka beállításánál fog játszani. Egyetlen alkalmazás felső határának beállításához használjon alkalmazásonkénti menüsort, például <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: tartsa az alkalmazást mondjuk 40 százalékon, miközben a rendszer hangereje minden másnál magasabb marad.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Egy hangos alkalmazás maximális hangerejének korlátozása a Mac készüléken (védje meg hallását)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Miért tud hirtelen felrobbantani egy alkalmazás egy Mac-ra?</h2>

<p>A macOS esetében a menüsorban vagy a Vezérlőközpontban található hangerő-csúszka egyetlen rendszerszintű vezérlőelem. Minden alkalmazás ugyanarra a kimenetre jut, ugyanazon a szinten. Nincs az operációs rendszerbe beépítve alkalmazásonkénti hangerőkeverő, ahogyan a Windows évek óta rendelkezik vele a Volume Mixer panellel.</p>

<p>Ennek a kialakításnak valódi következményei vannak a füled számára. Ha magasra állítja a rendszer hangerejét, hogy halk podcastot vagy halk videohívást hallhasson, majd váltson játékra, Discord értesítésre, hirdetésben gazdag webhelyre vagy sokkal hangosabban elsajátított videóra, akkor az alkalmazás a teljes rendszerszinten is lejátssza. Az eredmény a klasszikus ugrás-ijesztő: hirtelen hangfal olyan hangerővel, amelyet az adott alkalmazáshoz soha nem szántál.</p>

<p>Mindenkinek, akinek fülzúgása, hangérzékenysége van, vagy egyszerűen csak értékeli a hallását, ez a kiszámíthatatlanság jelenti a problémát. Nem próbálsz mindent csendesebbé tenni. Azt próbálja garantálni, hogy egy adott hangos alkalmazás soha nem lépheti túl azt a szintet, amelyet biztonságosnak határozott.</p>

<h2>Mit tehet itt a macOS és mit nem</h2>

<p>Hadd legyek őszinte a korlátokkal kapcsolatban, mielőtt bármit is javasolnék.</p>

<ul>
<li><strong>Rendszer hangereje</strong> mindent egyszerre leenged. Kapcsolja le egy alkalmazás megszelídítéséhez, és a csendes alkalmazásai hallhatatlanná válnak.</li>
<li><strong>Alkalmazáson belüli hangerő csúszkák</strong> léteznek egyes alkalmazásokban (médialejátszók, egyes böngészők laponként), de a legtöbb nem. Egy játék, egy videohívás vagy egy natív alkalmazás gyakran egyáltalán nem rendelkezik független hangerőszabályzóval.</li>
<li><strong>A hardver mennyezet valódi.</strong> Egyetlen szoftver sem képes a kimeneti eszköz maximális értékénél hangosabb jelet nyomni. Ezzel szemben az alkalmazás saját hangerő-master, valamint a DAC és a fejhallgató beállítja, hogy valójában milyen hangos legyen a „100 százalék”. A szoftver megbízhatóan csökkentheti az alkalmazásonkénti szintet, de nem tudja átírni a fejhallgató fizikáját.</li>
</ul>

<p>Tehát az őszinte cél nem a varázslatos hangerő korlátozása a vezető szintjén. Ez egy praktikus, megbízható alkalmazásonkénti csillapítás: tartsa a kiválasztott alkalmazást a rendszer kimenetének egy meghatározott hányadánál, hogy soha ne lephessen meg.</p>

<h2>Egyetlen alkalmazás hangerejének korlátozása alkalmazásonkénti keverővel</h2>

<p>Egy alkalmazásonkénti hangerőkeverő elfogja az egyes alkalmazások hangját, és lehetővé teszi a hangerő szintjének független beállítását. Íme a munkafolyamat vele <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, amely a menüsorban található:</p>

<ul>
<li><strong>Nyissa ki a keverőt.</strong> Kattintson a SoundDial menüsor ikonjára. Megjelenik az összes jelenleg hangot lejátszott alkalmazás listája, mindegyik saját csúszkával.</li>
<li><strong>Keresse meg a hangos alkalmazást.</strong> Keresse meg a korlátozni kívánt alkalmazást, például egy játékot, egy böngészőt vagy egy videokonferencia-eszközt.</li>
<li><strong>Állítsa be a mennyezetét.</strong> Húzza le az alkalmazás csúszkáját a biztonságos szintre, mondjuk 35-50 százalékra. Ez az alkalmazás most a rendszer kimenetének azon a hányadán játszik le, míg minden más alkalmazás ott marad, ahol volt.</li>
<li><strong>Hagyja a rendszerkötetet ott, ahol szüksége van rá.</strong> Tartsa a rendszercsúszkát elég magasan a csendes alkalmazásaihoz. A kupakkal ellátott alkalmazás ettől függetlenül visszafogott marad.</li>
</ul>

<p>Mivel a szint alkalmazásonkénti, gyakorlatilag maximumot állít be az adott programhoz. Még akkor is, ha megpróbálja lejátszani a leghangosabb tartalmat, a leghangosabb most a teljes kiválasztott töredéke.</p>

<h2>Ragassza fel a kupakot profilokkal</h2>

<p>Egyetlen kézi beállítás segít, de az alkalmazásszintek visszaállíthatók, amikor kilép, és újraindítja. A hallásbiztos beállításhoz, amely túléli az újraindításokat, használja <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>hangerőprofiljait. Mentsen el egy profilt a preferált alkalmazásonkénti szintekkel, például „csendes játékéjszaka”, ahol a játék 40 százalékos, a zenealkalmazás 70 százalékos, és a hívóalkalmazás 90 százalékos. Egy kattintással idézze fel, amikor leül. A hangos alkalmazás felső határa pontosan úgy jön vissza, ahogy beállította.</p>

<p>Két további funkciót érdemes tudni a hallásvédelemről:</p>

<ul>
<li><strong>Alkalmazásonkénti némítás</strong> lehetővé teszi, hogy azonnal elhallgattasson egyetlen elkövetőt anélkül, hogy bármi máshoz is hozzá kellene nyúlnia. Ez hasznos a hangos értesítéseket küldő alkalmazásoknál.</li>
<li><strong>Automatikus kacsázás</strong> automatikusan tompítja a háttérhangot, ha valami fontosabb elkezdődik, így nem kerülhet egyszerre két hangos forrás közé.</li>
</ul>

<blockquote><p>A szoftveres csillapítás valóban hatékony az alkalmazások lefedésére, de ez a védelem egyik rétege, nem pedig orvosi biztosíték. Ha fülzúgása vagy hangérzékenysége van, párosítsa az alkalmazásonkénti plafont ésszerű általános hallgatási szintekkel és szünetekkel. Egyetlen alkalmazás sem helyettesítheti a gondos hangerőszabályozást.</p></blockquote>

<h2>Megjegyzés a boostról, és arról, hogy miért van külön</h2>

<p>Ugyanaz az alkalmazásonkénti keverő, amely leállítja a hangos alkalmazásokat, a túl halkakat is 100 százalék fölé emelheti, ami hasznos olyan alkalmazásoknál, amelyek saját hangereje túl alacsony. Ugyanannak a vezérlésnek ez a két oldala: Ön dönti el az egyes alkalmazások szintjét, felfelé vagy lefelé. A hallásvédelem érdekében egyszerűen válassza ki a "le" irányt, és tartsa ott.</p>

<h2>A rövid változat</h2>

<p>A macOS nem engedi, hogy egyetlen alkalmazás hangerejét önmagában korlátozza, és ez valódi operációs rendszerbeli hiányosság, nem felhasználói hiba. A menüsoronkénti keverő bezárja: állítsa be a hangos alkalmazást egy fix töredékre, mentse el egy profilba, és soha többé nem tud felrobbantani, miközben a többi alkalmazása hallható marad.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> egy egyszeri 14,99 eurós vásárlás a Mac App Store homokozóban, illesztőprogramok vagy telepítendő DMG nélkül. Ha az a cél, hogy megvédje a fülét egy kiszámíthatatlan alkalmazástól, akkor ez a legegyszerűbb módja annak, hogy beállítsa és megtartsa a plafont.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Alkalmazásonként eltérő bal/jobb egyensúly a Mac-n – lehetséges?",
    description: "Beállíthat más bal/jobb sztereó egyensúlyt a macOS minden alkalmazásához? Őszintén szólva, nem – nem natívan, és nem a legtöbb eszközzel. Íme, mi lehetséges, és hol vannak az igazi határok.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Őszintén szólva, nem – a macOS nem teszi lehetővé, hogy alkalmazásonként eltérő bal/jobb sztereó egyensúlyt állítson be, és szinte egyetlen harmadik féltől származó eszköz sem teszi lehetővé a valódi alkalmazásonkénti pásztázást. Egy globális egyenleget állíthat be kimeneti eszközéhez, és alkalmazásonként vezérelheti <em>kötet</em>, de alkalmazásonként független <em>serpenyőben</em> nem a macOS által elérhető szolgáltatás.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Különböző bal/jobb oldali egyensúly alkalmazásonként a Mac-n — lehetséges?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Egyenleg vs. hangerő – ezek nem ugyanazok</h2>

<p>Érdemes szétválasztani két olyan gondolatot, amelyek gyakran összekeverednek:</p>
<ul>
  <li><strong>kötet</strong> - Összességében mennyire hangos egy alkalmazás. Ez egy szint mindkét csatornára vonatkozik.</li>
  <li><strong>Egyenleg (serpenyő)</strong> — hogyan oszlik el a hang a bal és a jobb hangszóró között. A "teljes baloldal" egyensúlya mindent a bal csatornára küld, és elnémítja a jobb oldalt.</li>
</ul>

<p>Azok az emberek, akik „alkalmazásonként eltérő egyensúlyt” kérnek, általában két dolog egyikét akarják: egy alkalmazás hangját az egyik fülbe tolni (például hívást a bal fülbe, zenét a jobbba), vagy kijavítani a halláskülönbséget vagy a rossz hangszórót az egyik oldalon – de csak bizonyos alkalmazások esetében. Ezek jogos célok. A probléma az, hogy hol él a kontroll.</p>

<h2>Miért nem tudja ezt a macOS natív módon megtenni?</h2>

<p>A macOS pontosan egy egyensúlyszabályzóval rendelkezik, és a kimeneti eszköz szintjén működik. alatt találod <strong>Rendszerbeállítások → Hang → Kimenet</strong>, ahol a <em>Egyenleg</em> csúszka a teljes keveréket balra vagy jobbra tolja. Bármire is van beállítva ez a csúszka, arra vonatkozik <em>mindent</em> erre az eszközre irányítva – minden alkalmazást, minden rendszerhangot, egyszerre.</p>

<p>A szabványos macOS audio veremben nincs olyan API, amely azt írja ki, hogy "renderelje le ennek az alkalmazásnak a hangját balra, az alkalmazást pedig jobbra". Az alkalmazások már összekeverve adják át hangjukat a rendszernek, és a rendszer egy mesteregyensúlyt alkalmaz a hangszórók felé. Így azt a réteget, ahol az alkalmazásonkénti pásztázást szeretné látni, egyszerűen nem teszi közzé az operációs rendszer. Ez az operációs rendszer valódi korlátja, nem olyasmi, amit egy menüsoros segédprogram udvariasan megkerülhet.</p>

<blockquote>Ellentétben az alkalmazásonkénti <em>kötet</em> – amely a macOS-ból szintén hiányzik natívan, de mely alkalmazások képesek az audiofolyam megérintésével megvalósítani – alkalmazásonként <em>egyensúlyt</em> minden egyes alkalmazás adatfolyamát külön-külön újra kell pásztázni, és ez a horog nem érhető el a sandbox-alkalmazások számára.</blockquote>

<h2>Mit csinál a SoundDial – és őszintén, mit nem</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> alkalmazásonkénti vezérlést ad. macOS hiányzik: független <strong>kötet</strong> minden futó alkalmazáshoz, alkalmazásonként <strong>néma</strong>, egy alkalmazásonkénti kötet <strong>lendületet</strong> 100% felett, menthető hangerő <strong>profilok</strong>, automatikus lecsökkenés és gyors kimenetváltás a menüsorból.</p>

<p>Hogy őszinte legyek veled: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> alkalmazásonkénti vezérlés <em>hangosság és némítás</em>, nem alkalmazásonkénti sztereó <em>pásztázás</em>. Nem küldi a Safari-t a bal fülébe és a Spotify-t a jobb fülébe. Ha valaki azt mondja, hogy egy menüsoros keverő valódi alkalmazásonkénti bal/jobb egyensúlyt hoz létre a macOS-n, legyen szkeptikus – ez nem az operációs rendszer által kiosztott vezérlés. Amit a SoundDial valóban megold, az a sokkal gyakoribb frusztráció: az egyik alkalmazás túl hangos vagy túl halk a másikhoz képest.</p>

<h2>Az alkalmazásonkénti egyensúly valódi megoldásai</h2>

<p>Ha valóban egymás mellett osztott hangra van szüksége, itt vannak az őszinte lehetőségek, nagyjából a legegyszerűbbtől a leginkább érintettig:</p>

<ul>
  <li><strong>Globális egyenleg (minden alkalmazás):</strong> Válassza a Rendszerbeállítások → Hang → Kimenet → Egyensúly menüpontot. Ez az egyetlen beépített lehetőség, és minden alkalmazást érint. Hasznos szoba vagy hallásaszimmetria korrigálására, haszontalan egy alkalmazás elkülönítésére.</li>
  <li><strong>Külön kimeneti eszközök:</strong> Ez áll a legközelebb az alkalmazásonkénti valós egyensúlyhoz. Az A alkalmazást irányítsa az egyik kimeneti eszközre, a B alkalmazást pedig egy másikra, majd állítsa be egymástól függetlenül az egyes eszközök egyensúlyát. A macOS lehetővé teszi a kimeneti eszköz kiválasztását egyes alkalmazásokon belül (és a böngészők/kommunikációs alkalmazások gyakran felteszik saját kimenetválasztójukat). Ha az A alkalmazás egy balra pásztázott eszközre, a B pedig egy jobbra pásztázott eszközre mutat, akkor gyakorlatilag alkalmazásonkénti egyenleget kap – mindaddig, amíg mindkét alkalmazás lehetővé teszi a kimenet kiválasztását.</li>
  <li><strong>Virtuális hangútválasztó eszközök:</strong> A virtuális eszközöket és a belső keverőt létrehozó segédprogramok bizonyos konfigurációkban adott alkalmazásokat meghatározott csatornákra irányíthatnak. Ez erőteljes, de makacs, illesztőprogram-stílusú összetevőt ad hozzá, és a legtöbb ember számára túlzás. Ez a streamerek és a hangmérnökök tartománya, nem egy egyszerű "hívás egy fülben" javítás.</li>
  <li><strong>Hardver felosztás:</strong> Ha fizikai hangszórókról vagy halláskülönbségről van szó, egy hardveres keverő vagy egy csatornánkénti vezérlésű audio interfész teljesen megkerüli a szoftverproblémát.</li>
</ul>

<h2>Amikor az alkalmazásonkénti hangerő valójában az, amire szüksége van</h2>

<p>Sok „alkalmazásonként eltérő egyenleget szeretnék” kérés valójában „egyik alkalmazás elnyomja a másikat”. Ha a cél egy videohívás, amelyet a zenén keresztül hallhat, vagy egy játék, amely túl hangos a Discord csevegés mellett, akkor nem az egyensúly az eszköz, hanem a független hangerő. Pontosan ez az, amit egy alkalmazásonkénti keverő tisztán kezel, virtuális illesztőprogramok vagy útválasztó torna nélkül.</p>

<p>Tehát az őszinte összefoglaló: a valódi alkalmazásonkénti bal/jobb egyensúly nem a macOS funkció, és egyetlen keverőalkalmazás sem hamisítja meg meggyőzően. Az Ön valódi útvonalai a globális egyenleg csúszkája vagy az alkalmazásonkénti kimeneti útválasztás a külön pásztázott eszközökhöz. De ha a fájdalom hátterében a relatív hangosság áll, az megoldott probléma.</p>

<p>Független hangerőt, némítást és erősítést szeretne a Mac minden alkalmazásához menthető profilokkal és illesztőprogramok nélkül? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Szerezze be a SoundDial-t a Mac App Store-ra</a> – 14,99 €, egyszeri, homokozóban.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Miért olyan hangosabbak egyes alkalmazások, mint mások a Mac-n? (És hogyan lehet kiegyenlíteni őket)",
    description: "Az alkalmazások a Mac-n vadul eltérően hangzanak, mivel mindegyik a saját hangerő-céljához igazodik, a macOS pedig nem rendelkezik beépített alkalmazásonkénti hangerőszabályzóval. Íme, miért történik ez, és hogyan állíthatja be az alkalmazásait.",
    date: "2026-07-23",
    readTime: "6 perc olvasás",
    content: `<p>Az alkalmazások vadul eltérően hangzanak a Mac készüléken, mert mindegyik a saját hangerő-céljához van írva, elsajátítva és normalizálva, a macOS pedig nem rendelkezik beépített alkalmazásonkénti hangerőszabályzóval, amely összeegyeztetné őket. A Spotify, YouTube, Zoom és a rendszerriasztások ugyanazon a főcsúszkán haladnak át, így Ön folyamatosan fel-le gurul.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Miért olyan hangosabbak egyes alkalmazások, mint mások a Mac-n? (És hogyan lehet kiegyenlíteni őket)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ez nem az Ön Mac-ja, hanem maga a hang</h2>

<p>A macOS egyetlen rendszerhangerő-csúszkája mindenhez szabályozza a végső kimeneti szintet. Nem érinti az egyes alkalmazások hangadatfolyamában tárolt relatív hangerőt. Ez az alapvonal jóval azelőtt beáll, hogy a hang elérné a hangszórókat, és forrásonként rendkívül eltérő.</p>

<p>Három dolog okozza ezeket a különbségeket:</p>

<ul>
<li><strong>A szintek elsajátítása.</strong> Egy ütős popzene sokkal dögösebben van elsajátítva, mint egy csendes akusztikus felvétel vagy egy kimondott podcast. A mozihoz kevert film szándékosan elhallgatja a suttogást és a robbanásokat – ez a dinamikatartomány, és ez azt jelenti, hogy az átlagos szint alacsony.</li>
<li><strong>Hangerő normalizálási célok.</strong> A streaming platformok a lejátszást a LUFS-ben (a teljes skálához viszonyított hangerősségi egységekben) mért célhoz igazítják. A Spotify -14 LUFS, a YouTube nagyjából -14 LUFS, az Apple Music -16 LUFS körüli értéket célozza meg. Egy videokonferencia-alkalmazás vagy egy játék teljes mértékben alkalmazza a saját nyereségét. Két különböző célokra "normalizált" alkalmazás soha nem fog megegyezni egymással.</li>
<li><strong>Nincs az alkalmazások közötti szintezés.</strong> Minden alkalmazás csak a saját tartalmát normalizálja. Semmi sem koordinálja a Spotify-t a Zoom-val szemben egy böngészős játékkal szemben. A macOS csak összegzi őket, és elküldi a keveréket.</li>
</ul>

<h2>Miért számít a LUFS (egyértelműen)</h2>

<p>A csúcsszint a jel leghangosabb pillanatát jelzi. A LUFS megmutatja, hogy valójában milyen hangos valami <em>úgy érzi</em> idővel az emberi hallás működésével súlyozva. Ez a különbség annak köszönhető, hogy a podcast és a dance szám ugyanazt a csúcsot érheti el, de hangosságban a világokat szétválaszthatja – a szám sokkal több időt tölt a mennyezet közelében.</p>

<blockquote>A halkabb LUFS cél nagyobb belmagasságot és nagyobb dinamikatartományt jelent. A hangosabb célpont konzisztensebb, "mindig telt" hangfalat jelent. Egyik sem rossz – de amikor az alkalmazások különböző számokat céloznak meg, azt úgy érzi, hogy az egyik alkalmazás sikoltozik, a másik pedig motyog.</blockquote>

<p>Ez az őszinte kiváltó ok. Ez nem olyan hiba, amelyet kijavíthat. Ez a hang előállításának és továbbításának fizikája, megsokszorozva tucatnyi olyan alkalmazásban, amelyeket soha nem úgy terveztek, hogy megegyezzenek egymással.</p>

<h2>A macOS rés nyitva marad</h2>

<p>Íme az a rész, ami igazán frusztrálja az embereket: a Windows évek óta szállít egy alkalmazásonkénti hangerőkeverőt. Az egyik alkalmazást lefelé húzhatja, a másikat pedig felfelé tolhatja közvetlenül a tálcáról. A macOS ezt soha nem tartalmazza. A hangbeállítások csak a fő csúszkát és a kimeneti eszközt adják meg.</p>

<p>Tehát a Mac esetében a lehetőségek hagyományosan korlátozottak:</p>

<ul>
<li>Állítsa be az egyes alkalmazások saját belső hangerő-csúszkáját – ha van ilyen. Sok alkalmazás (Zoom, a legtöbb játék, rendszerhangok) nem tesz elérhetővé egy használhatót.</li>
<li>Minden kontextusváltáskor kézzel mozgassa a főcsúszkát.</li>
<li>Egy dolgot teljesen elnémít, ami egy tompa javítás, amely valójában semmit sem egyensúlyoz.</li>
</ul>

<p>Ezek egyike sem emlékszik a preferenciáira. Lépjen ki, és indítsa újra az alkalmazást, és visszatérhet az eredetihez.</p>

<h2>A praktikus megoldás: megjegyzett kötet alkalmazásonként</h2>

<p>Mivel nem kényszeríthet minden szolgáltatást a katalógus újraindítására, a működőképes megoldás a hiányzó macOS réteg hozzáadása, amelyet soha nem szállítottak ki: független, megjegyzett kötet minden egyes alkalmazáshoz. Pontosan ez az <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nem. A menüsorban található, és minden futó alkalmazásnak saját csúszkát ad, így a hangosat lefelé húzhatja, a halkabbat pedig feljebb tolhatja, amíg az Ön számára is megfelelő szintre nem kerül.</p>

<p>Az alkalmazások gyakorlati kiegyenlítéséhez:</p>

<ul>
<li>Nyissa meg <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a menüsorból, és minden aktív alkalmazást saját vezérlővel láthat.</li>
<li>Csökkentse le a robbantást – általában egy forró zenei vagy videós alkalmazást – 60-70%-ra.</li>
<li>Hagyja csendes referenciaalkalmazását (gyakran hívóalkalmazás vagy podcast) 100%-on, és használja alkalmazásonként <strong>lendületet</strong> 100% fölé tolni, ha még mindig túl puha.</li>
<li>Állítsa be egyszer a szinteket. A SoundDial megjegyzi az egyes alkalmazások kötetét, így az egyenleg a következő megnyitáskor is megmarad.</li>
</ul>

<p>Itt két funkció végzi el a szintezési munka nagy részét. <strong>Boost</strong> számít, mert rengeteg alkalmazás egyszerűen túl halk, még a maximumon is – egy alkalmazásonkénti csúszka, amely csak a hangerőt csökkenti, nem tudja megmenteni őket, de az, amelyik képes 100%-on túl erősíteni, igen. És <strong>kötetprofilok</strong> Elmentheti a szintek egész sorát – mondjuk a „zene fókuszálása halk, hangos hívások” profilt a munkához, illetve a játékhoz használt eltérő keveréket –, és azonnal válthat közöttük az alkalmazásonkénti átállítás helyett.</p>

<h2>Ahol ez leginkább segít</h2>

<p>A leggyakoribb megkönnyebbülés a zene és a találkozás közötti ugrás: hangosan elsajátított zene streamelése, majd egy ehhez képest halványan hangzó hívásalkalmazás. Állítsa magasabbra (vagy fokozza a hívási alkalmazást), húzza le a zenét, és a megdöbbentő hangerő-ingadozás eltűnik. Ugyanez vonatkozik a hangos videólejátszóval szembeni csendes böngészős játékra, vagy a rendszerriasztásokra, amelyek mindenen átugranak.</p>

<p>A korlátok tisztázása érdekében: A SoundDial kiegyensúlyozza az alkalmazások kimenetét. Nem mesterkedik újra egy rosszul elkészített számot, és nem tud részleteket kitalálni a nagyon széles dinamikatartománnyal kevert hangban. Ez azt jelenti, hogy megadja az egyetlen vezérlőt, a macOS-t, amely kimaradt – állandó, alkalmazásonkénti szintek, amelyek a helyükön maradnak.</p>

<p>Belefáradt abba, hogy minden alkalmazásváltáskor a főcsúszkát használja? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Egyszeri 14,99 euró a Mac App Store-n – homokozó, illesztőprogramok nélkül, DMG nélkül –, és végül minden alkalmazásnak megadja a saját emlékezett mennyiségét.</p>`,
  },
};
