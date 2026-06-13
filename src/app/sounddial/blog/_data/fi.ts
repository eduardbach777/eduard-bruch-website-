import type { ArticleSet } from "./index";

export const fiArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Podcast-ääni: Hallitse, mitä kuulet nauhoittaessa",
    description:
      "Podcastin tallentaminen samalla kun seurataan tasoja, kuunnellaan vieraasi ja hallitset ilmoituksia — kaikki kilpailevat yhdestä äänenvoimakkuuden liukusäätimestä. Tässä on parempi järjestely.",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>Nauhoitat podcastia Mac. Sinun täytyy kuulla vieraasi (Zoomin, Riversiden tai SquadCastin kautta) selvästi. Sinun täytyy seurata DAW:n tallennustasoja. Tarvitset Slackin mykistettynä, jotta äänitykset eivät päädy nauhoitukseen. Ja järjestelmäilmoitusäänet täytyy täysin hiljennettynä — macOS "ding" haastattelun keskellä on käyttökelvoton ääni.</p>

<p>macOS antaa sinulle yhden äänenvoimakkuuden liukusäätimen kaikkeen tähän. Se ei riitä.</p>

<h2>Podcast-äänihaaste Mac</h2>

<p>Podcast-äänityssession aikana sinulla on yleensä:</p>
<ul>
  <li><strong>Viestintäsovellus</strong> (Zoom, Riverside, SquadCast) — vierasääni, täytyy olla selkeä</li>
  <li><strong>DAW / tallennussovellus</strong> (Logic, GarageBand, Audacity, Hindenburg) — omien tasojen seuraaminen</li>
  <li><strong>Ilmoituslähteet</strong> (Slack, Mail, Calendar, Messages) — äänityksen aikana on oltava täysin hiljainen</li>
  <li><strong>Selin</strong> — saattaa olla näyttömuistiinpanoja, tutkimusvälilehtiä tai ajastin käynnissä</li>
</ul>

<p>Kaikki nämä samassa voimakkuudessa ovat kaaosta. Vieraasi kilpailee järjestelmän painumien kanssa. Slack-ilmoitus voisi pilata otoksen. Ja jos sinun täytyy säätää vieraasi äänenvoimakkuutta, järjestelmän äänenvoimakkuuden muuttaminen muuttaa myös valvontatasoja.</p>

<h2>Tyypillinen kiertotie</h2>

<p>Useimmat podcastin tekijät käyttävät yhdistelmää:</p>
<ul>
  <li>Tarkennustila (Älä häiritse) vaimentamaan ilmoituksia</li>
  <li>Slackin, Mailin ja muiden meluisten sovellusten manuaalinen sulkeminen ennen tallennusta</li>
  <li>Viestintäsovelluksen sisäisen äänenvoimakkuuden säätäminen vieraalle</li>
</ul>

<p>Tämä toimii, mutta on altis virheille. Unohda ottaa DND käyttöön, ja ilmoitus pilaa ottosi. Unohda lopettaa Slack ja puhelu tulee. Et silti voi itsenäisesti säätää vieraasi äänenvoimakkuutta ja valvontatasoja.</p>

<h2>Sovelluskohtainen ääni podcasteihin</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Mahdollistaa puhtaan tallennusympäristön rakentamisen ohjaamalla kutakin sovellusta itsenäisesti:</p>

<img src="/apps/sounddial.png" alt="SoundDial podcast-järjestelmä — vierasääni, valvonta ja ilmoitukset itsenäisellä tasolla" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Äänitysprofiili</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100 % — selkeä vierasääni</li>
  <li><strong>Logic / GarageBand:</strong> 60 % — mukava seuranta ilman väsymystä</li>
  <li><strong>Slack:</strong> mykistetty — ei ilmoitusääniä</li>
  <li><strong>Posti:</strong> vaimennettu</li>
  <li><strong>Viestit:</strong> vaimennettu</li>
  <li><strong>Kalenteri:</strong> vaimennettu</li>
  <li><strong>Selain:</strong> mykistetty — ei yllätys, automaattinen toisto</li>
</ul>

<p>Tallenna tämä "Tallennus"-profiiliksi. Ennen tallennuspainiketta lisää profiili yhdellä klikkauksella. Jokainen ilmoituslähde on mykistetty, vieraasi on täysillä ja valvonta on mukavalla tasolla.</p>

<h3>Muokkausprofiili</h3>
<ul>
  <li><strong>Logiikka / Hindenburg:</strong> 100 % — täydellinen valvonta editointia varten</li>
  <li><strong>Spotify:</strong> vaimennettu — ei viitteiden sekaannusta</li>
  <li><strong>Slack:</strong> 20 % — hienovaraiset ilmoitukset tauoilla</li>
  <li><strong>Selain:</strong> 40 % — ohjelmamuistiinpanoja ja tutkimusta varten</li>
</ul>

<p>Kaksi profiilia, kaksi napsahdusta, kaksi täysin erilaista ääniympäristöä. Ei manuaalista sulkemista ja sovellusten uudelleenavaamista. Ei pidä unohtaa ottaa ilmoitukset uudelleen käyttöön tallennuksen jälkeen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Miksi Mac on niin kova täysillä? Kuinka saada parempi hallinta",
    description:
      "MacBook Pro -kaiuttimet ovat loistavia — kunnes ne ovat täysillä. Jos jopa kohtalainen äänenvoimakkuus tuntuu liian kovalta, näin saat tarkemman äänen hallinnan.",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Applen uudemmissa MacBook Pro -malleissa (14" ja 16") on poikkeuksellisen tehokkaat kaiuttimet kannettavaksi. Niin voimakas, että kohtalainen äänenvoimakkuus voi olla aidosti kova — erityisesti hiljaisessa huoneessa, myöhään yöllä tai kuulokkeiden kanssa. Ero "mukavan" ja "liian" välillä on joskus vain yksi tai kaksi äänenvoimakkuusaskelta.</p>

<h2>Miksi äänenvoimakkuusaskeleet tuntuvat liian karkeilta</h2>

<p>macOS on <strong>16 tilavuusvaihetta</strong> näppäimistön kautta. Jokainen askel on noin 6,25 % kokonaisalueesta. Voimakkaissa kaiuttimissa tai herkissä kuulokkeissa yksittäinen askel voi merkitä merkittävää koettua äänenvoimakkuuden muutosta — siirtyminen "täydellisestä" "liian kovaa" yhdellä äänenvoimakkuusnäppäimen painalluksella.</p>

<h2>Sisäänrakennettu korjaus: neljäsosaaskelen tilavuus</h2>

<p>Pidä <strong>Option + Shift</strong> ja paina volyymia ylös/alas. Jokainen painallus säätää neljäsosan normaalista askeleesta, jolloin saat <strong>64 tasoa</strong> 16:n sijaan. Tämä 4x hienompi säätö helpottaa juuri oikean äänenvoimakkuuden löytämistä, erityisesti tehokkailla kaiuttimilla tai kuulokkeilla.</p>

<p>Tämä on yksittäinen hyödyllisin Mac äänitemppu, josta useimmat eivät tiedä.</p>

<h2>Syvempi ongelma: yksi liukusäädin kaikille</h2>

<p>Vaikka tasoja on 64, sinulla on silti yksi liukusäädin ohjaamassa jokaista sovellusta. Jos säädät äänenvoimakkuuden tarpeeksi matalaksi mukavien ilmoitusäänien saamiseksi, musiikkisi voi olla liian hiljaista. Jos asetat sen musiikille, ilmoitusping saattaa saada sinut säpsähtämään.</p>

<p>Todellinen ongelma on, että eri äänilähteet tarvitsevat eri äänenvoimakkuuksia. Ilmoitusten tulisi olla hienovaraisia. Musiikin pitäisi olla läsnä. Puheluiden tulisi olla selkeitä. Selaimen videon tulisi olla maltillista. Yksi liukusäädin ei pysty palvelemaan kaikkia näitä hyvin.</p>

<h2>Sovelluskohtainen äänenvoimakkuus tarkkaa ohjausta varten</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa jokaiselle sovellukselle oman äänenvoimakkuuden liukusäätimen, jossa <strong>1 % lisäykset</strong> 0 %:sta 200 %:iin. Se on 200 tarkkuustasoa per sovellus verrattuna macOS:n 16 (tai 64 modifikaattorilla) koko järjestelmän askeleen.</p>

<img src="/apps/sounddial.png" alt="SoundDial tarkka sovelluskohtainen äänenvoimakkuuden säätö 1 % tarkkuudella macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Aseta järjestelmän äänenvoimakkuus kohtuulliselle perustasolle (50-60 %), ja käytä SoundDial hienosäätääksesi jokaisen sovelluksen:</p>
<ul>
  <li><strong>Spotify:</strong> 35 % — mukava taustataso</li>
  <li><strong>Slack:</strong> 12 % — hienovarainen ilmoitusping</li>
  <li><strong>Zoom:</strong> 85 % — selkeä puheluääni ilman, että se on ylivoimaista</li>
  <li><strong>Safari:</strong> 45 % — kohtuullinen videontoisto</li>
</ul>

<p>Näin mikään yksittäinen äänilähde ei ole koskaan "liian kovaääninen". Jokainen on viritetty ihanteelliseen tasoon itsenäisesti. Slack-ping 12 %:ssa on tuskin havaittavissa, kun taas Zoom-puhelu 85 %:ssa on kristallinkirkas — kaikki samalla järjestelmän äänenvoimakkuusasetuksella.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Slack Huddle -äänenvoimakkuuden ongelmat Mac: liian hiljainen, liian kova tai musiikkisi vastustaminen",
    description:
      "Slack-ryhmät kilpailevat musiikin ja ilmoitusten kanssa samasta äänenvoimakkuudesta. Näin voit hallita huddle-ääntä itsenäisesti kaikesta muusta Mac:ssa.",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Slack-kokoukset ovat käteviä — painat nappia ja olet äänipuhelussa ilman tapaamisen varaamista. Mutta äänimaailma on sekava. Huddle on yhtä voimakas kuin Spotifysi. Slack-ilmoitus piippaa samalla tasolla kuin puhelu. Ja kun joku jakaa musiikkia tai näyttöä, jossa on ääni ryhmässä, se on joko kuulumaton tai korvia huumaava.</p>

<p>Ongelma ei ole Slack. Se on macOS. Kaikki kulkee yhden äänenvoimakkuuden liukusäätimen kautta, joten huddle-ääni, ilmoitusäänet, musiikki ja selaimen ääni taistelevat samasta tilasta.</p>

<h2>Slackin sisäiset ääniohjaimet</h2>

<p>Slackilla on rajalliset ääniohjaimet:</p>
<ul>
  <li><strong>Ilmoitusasetukset:</strong> Slack → Asetukset → Ilmoitukset → Ääni ja ulkonäkö. Voit muuttaa ilmoitusääntä tai poistaa tietyt äänet käytöstä, mutta et voi asettaa ilmoitusäänenvoimakkuutta erikseen huddle-äänenvoimakkuudesta.</li>
  <li><strong>Kokouksen tilavuus:</strong> Huddlen aikana puhelulle ei ole erillistä äänenvoimakkuuden liukusäädintä verrattuna Slackin muihin ääniin. Kaikki Slackissa on yksi äänivirta macOS.</li>
  <li><strong>Tulo-/lähtölaite:</strong> Slack → Settings → Audio & Video antaa sinun valita mikrofonin ja kaiutinlaitteet, mutta ei äänenvoimakkuustasoja ominaisuuden mukaan.</li>
</ul>

<h2>Kolme Slackin ääniongelmaa</h2>

<h3>1. Kokoontuminen liian hiljaa musiikkiin nähden</h3>
<p>Musiikkisi on mukavalla tasolla. Liityt ryhmään. Työkaverisi ääni on yhtä voimakas kuin musiikkisi — et erota sanoja selvästi. Järjestelmän äänenvoimakkuuden nostaminen tekee musiikista liian kovaa.</p>

<h3>2. Ilmoitusäänet kokoontumisen aikana</h3>
<p>Olette keskustelussa. Jokainen Slack-viesti pingaa samalla äänenvoimakkuudella kuin puhelu. Vilkkaassa työtilassa, jossa kanavat ovat aktiiviset, jatkuva pingaus tekee huddlesta käyttökelvottoman.</p>

<h3>3. Kokoontuminen liian kovaa taustakuuntelua varten</h3>
<p>Joskus liityt ryhmään kuuntelemaan passiivisesti työskennellessäsi. Haluat sen taustalla — tarpeeksi hiljaisena, ettei häiritse, tarpeeksi kovaa kuulemaan, jos joku sanoo nimesi. macOS ei anna asettaa Slackia 20 %:iin samalla kun selain pysyy 60 %:ssa.</p>

<h2>Korjaus: ohjaa Slackin äänenvoimakkuutta itsenäisesti</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa Slackille oman äänenvoimakkuusliukusäätimen, erillään muista sovelluksista. Koska Slackin huddle-ääni ja ilmoitusäänet kuuluvat samaan sovellukseen, liukusäädin ohjaa molempia — mutta juuri sitä haluat useimmiten.</p>

<img src="/apps/sounddial.png" alt="SoundDial Slackin äänenvoimakkuuden hallinta itsenäisesti huddlen aikana, kun musiikki soi eri tasolla" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Huddle-optimoitu kokoonpano</h3>
<ul>
  <li><strong>Slack:</strong> 90-100 % (selkeä huddle-ääni, ilmoitukset ovat kovia mutta olet aktiivisesti Slackissa)</li>
  <li><strong>Spotify:</strong> 15 % (tuskin näkyvä tausta, ei kilpaile äänien kanssa)</li>
  <li><strong>Selain:</strong> mykistetty (ei yllätysvälilehtiääntä)</li>
</ul>

<h3>Passiivinen huddle-asetelma</h3>
<ul>
  <li><strong>Slack:</strong> 30 % (taustakuuntelutaso)</li>
  <li><strong>Spotify:</strong> 40% (ensisijainen ääni on musiikkisi)</li>
  <li><strong>Selain:</strong> 50 % (normaali työtaso)</li>
</ul>

<p>Tallenna jokainen profiiliksi. Kun huddle alkaa, aseta oikea profiili yhdellä klikkauksella. Tai käyttää <strong>Automaattinen kyykistyminen</strong> — kun huddle aktivoi mikrofonin, SoundDial laskee automaattisesti kaiken paitsi Slackin.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Kuinka asettaa oletusvolyymi uusille sovelluksille Mac",
    description:
      "Uudet sovellukset käynnistyvät oletuksena täysillä äänenvoimakkuuksilla. Näin saat jokaisen uuden sovelluksen käynnistymään mukavalla tasolla — jotta mikään ei yllätä sinua.",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>Asennat uuden sovelluksen. Se julkaistaan ensimmäistä kertaa. Se toistaa välittömästi äänen — aloitusäänen, ilmoituksen, opetusvideon — täydellä järjestelmän äänenvoimakkuudella. Et odottanut sitä. Kuulokkeet ovat päässä. Korvasi soivat.</p>

<p>macOS ei sisällä käsitettä "oletusvolyymista uusille sovelluksille", koska macOS ei käytä sovelluskohtaista volyymia. Jokainen sovellus saa järjestelmän äänenvoimakkuuden, ja järjestelmän volyymi on se, mihin viimeksi asetit sen. Uudet sovellukset eivät saa erityiskohtelua — ne vain räjähtävät sillä tasolla kuin kaikki muu.</p>

<h2>Miksi tämä on ongelma</h2>

<p>Kun käynnistät sovelluksen ensimmäistä kertaa, et tiedä, kuinka kovaa se tulee olemaan. Jotkut sovellukset toistavat ääniä heti (perehdytysopasteet, ilmoitusäänet, tervetulovideot). Jos järjestelmäsi äänenvoimakkuus on 80 %, koska kuuntelit musiikkia, uuden sovelluksen ääni on myös 80 % — mikä voi olla paljon kovempaa kuin mukava yllättävälle äänilähteelle.</p>

<p>Tämä on erityisen hämmentävää:</p>
<ul>
  <li>Viestintäsovellukset (Slack, Teams), jotka soittavat käynnistysääntä</li>
  <li>Sovellukset, joissa on videotutoriaalit ensimmäisessä julkaisussa</li>
  <li>Pelit, joissa aloitusruudun musiikki kuuluu heti</li>
  <li>Selainpohjaiset sovellukset, jotka toistavat sisältöä automaattisesti</li>
</ul>

<h2>Korjaus: oletusäänenvoimakkuus uusille sovelluksille</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> on <strong>Konfiguroitava oletusvolyymi</strong> Uusille sovelluksille. Asetuksissa määrität, millä äänenvoimakkuustasolla uusien sovellusten tulisi alkaa — esimerkiksi 70 %. Ensimmäisellä kerralla, kun mikään sovellus käynnistyy ja tuottaa ääntä, SoundDial asettaa sen 70 %:iin 100 %:n sijaan.</p>

<img src="/apps/sounddial.png" alt="SoundDial oletusäänenvoimakkuusasetus — uudet sovellukset käynnistyvät konfiguroidulta tasolta täysimääräisen vauhdin sijaan" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tämä tarkoittaa:</p>
<ul>
  <li>Ei mikään yllätys, että uudet sovellukset täyttävät äänenvoimakkuuden</li>
  <li>Jokainen uusi sovellus alkaa mukavalta, ennustettavalta tasolta</li>
  <li>Voit sitten säätää sitä ylös- tai alaspäin oletusasetuksesta tarpeen mukaan</li>
  <li>Kun se on säädetty, <strong>Volyymimuisti</strong> ominaisuus muistaa kyseisen sovelluksen tason tulevia julkaisuja varten</li>
</ul>

<p>Se on pieni ominaisuus, mutta se ratkaisee aidon päivittäisen ärsytyksen — "uuden sovelluksen yllätysräjähdyksen", joka yllättää kaikki ainakin kerran.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac käynnistys kuulostaa liian kovalta? Kuinka poistaa käytöstä tai laskea se",
    description:
      "Mac käynnistyskello pauhaa täysillä aina, kun käynnistät alusta — erityisesti kömpelösti kokouksissa ja hiljaisissa huoneissa. Näin vaientaa tai hallita sitä.",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>Aloitat Mac uudelleen hiljaisessa toimistossa. Kokoushuone on täysin hiljainen. Sitten — <em>BONG</em> — käynnistyskello soi täysillä. Kaikki katsovat sinua. Kello on ikoninen, mutta myös hallitsematon ja usein nolostuttavan kova.</p>

<h2>Kuinka poistaa käynnistysääni käytöstä</h2>

<p>macOS antaa sinun sammuttaa käynnistyskellon kokonaan:</p>

<ol>
  <li>Mennä <strong>Järjestelmäasetukset → ääni</strong></li>
  <li>Löydä <strong>"Toista ääni käynnistyksen yhteydessä"</strong></li>
  <li>Poista se valinta</li>
</ol>

<p>Valmista. Sinun Mac alkaa hiljaa tästä eteenpäin. Terminal-komentoja ei tarvita — tämä asetus on ollut saatavilla macOS Big Surista lähtien.</p>

<h3>Terminaalimenetelmä (jos haluat)</h3>
<p>Voit myös poistaa sen käytöstä Terminalin kautta:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Ottaa uudelleen käyttöön:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Voisitko laskea käynnistysääntä sen sijaan, että poistaisit sen käytöstä?</h2>

<p>Ei suoraan. Käynnistyskello soi kiinteällä äänenvoimakkuudella, joka määräytyy järjestelmän äänenvoimakkuuden mukaan sammutushetkellä. Jos Mac oli 80 % äänenvoimakkuudella sammuttaessa, kello soi noin 80 %:lla. Jos se oli 20 %, kello on hiljaisempi.</p>

<p><strong>Kiertotie:</strong> Ennen kuin käynnistät Mac uudelleen, laske järjestelmän äänenvoimakkuus 10–20 %:iin. Käynnistyskello soi tuolla alemmalla tasolla. Ei ihanteellista — se vaatii muistamista — mutta toimii, jos haluat kellon kohtuullisella äänenvoimakkuudella, etkä täysin vaimennettuna.</p>

<h2>Laajempi Mac äänenhallintaongelma</h2>

<p>Käynnistyskello on vain yksi esimerkki macOS:n rajallisesta äänenhallinnasta. Järjestelmääänet, ilmoitusäänet ja sovelluksen ääni sekoitetaan yhteen mahdollisimman vähäisellä itsenäisellä ohjauksella. Jos huomaat säätäväsi äänenvoimakkuutta säännöllisesti hallitaksesi eri äänilähteitä päivän aikana, sovelluskohtainen äänenvoimakkuuden säätö ratkaisee laajemman ongelman.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Antaa jokaiselle sovellukselle Mac oman äänenvoimakkuusliukusäätimen. Aseta ilmoitussovellukset matalaksi, musiikki mukavaksi ja puhelut täysillä — kaikki itsenäisesti. Tallenna asetukset profiileina ja vaihda yhdellä klikkauksella.</p>

<img src="/apps/sounddial.png" alt="SoundDial — sovelluskohtainen äänenvoimakkuuden säätö kaikkien Mac äänilähteiden itsenäiseen hallintaan" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Cisco Webex -volyymi liian matala Mac? Miten korjata se",
    description:
      "Webex-puhelut kuuluvat tuskin Mac. Tässä on kaikki korjaukset — Webexin ääniasetuksista puhelun äänenvoimakkuuden nostamiseen yli 100 % sovelluskohtaisella mikserillä.",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex on yksi käytetyimmistä videoneuvottelutyökaluista yritysympäristöissä — ja yksi eniten valitetuimmista äänenlaadun osalta Mac:llä. Matala puhelun äänenvoimakkuus, vaimeat äänet ja ääni, joka kuulostaa hiljaisemmalta kuin Zoomissa tai Teamsissa samalla järjestelmävolyymilla. Jos tuskin kuulet Webex-puheluitasi, et ole yksin.</p>

<h2>1. Tarkista Webex Audio -asetukset</h2>

<p>Webex-kokouksen aikana klikkaa äänivalikkoa (kaiutinkuvake tai kolme pistettä → Ääniasetuksista):</p>
<ul>
  <li>Varmista, että oikea <strong>Puhuja</strong> Laite on valittu</li>
  <li>Vedä kaiuttimen äänenvoimakkuuden liukusäädin maksimiin</li>
  <li>Klikkaa "Test" soittaaksesi testiäänen ja varmistaaksesi lähtö</li>
  <li>Tarkista, onko "Musiikkitila" päällä — poista se käytöstä, ellei sinulla ole nimenomaan musiikkia</li>
  <li>Tarkista kohinanpoistoasetukset — "Remove Background Noise" aggressiivisella tilalla voi vähentää koettua äänenvoimakkuutta</li>
</ul>

<h2>2. Tarkista macOS ulostulo</h2>

<p>Järjestelmäasetukset → ääni → ulostulo. Varmista, että oikea laite on valittu ja äänenvoimakkuus on maksimissa. macOS-päivityksen tai laitevaihdon jälkeen Webex saattaa käyttää odottamatonta tulosta.</p>

<h2>3. Bluetooth-koodekkiongelma</h2>

<p>Käytätkö AirPodseja vai Bluetooth-kuulokkeita? Webexin mikrofonin aktivoiminen pakottaa AAC→SCO-koodekin kytkimen, mikä heikentää äänenlaatua ja äänenvoimakkuutta. Käytä erillistä mikrofonia (sisäänrakennettu Mac mikrofoni tai USB) ja pidä Bluetooth-kuulokkeet vain ulostulona.</p>

<h2>4. Webex-spesifinen äänenkäsittely</h2>

<p>Webexissä on aggressiivinen äänikäsittely, joka voi vähentää puheluiden osallistujien määrää. Kokeile näitä Webexin asetuksia:</p>
<ul>
  <li>Aseta kohinanpoisto "Matalaksi" eikä "Korkeaksi"</li>
  <li>Poista käytöstä "Optimize for my voice" jos se on käytössä</li>
  <li>Kokeile vaihtaa "Computer Audio" -tilasta tiettyyn laitteeseen</li>
</ul>

<h2>5. IT/hallinto-ongelma</h2>

<p>Yritysympäristöissä Webexiä hallinnoi usein IT, jossa on tietyt äänipolitiikat. Jotkut asetukset voivat olla lukittuja tai esikonfiguroituja. Jos peruskorjaukset eivät auta, tarkista IT-osastoltasi Webexin äänikäytännöt. Jotkut organisaatiot rajoittavat maksimiäänitasoja tai vaativat tiettyjä äänikäsittelyasetuksia.</p>

<h2>6. Nosta Webexin yli 100 %</h2>

<p>Jos asetukset ovat maksimitasolla ja osallistujat ovat edelleen liian hiljaisia, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa sinun nostaa Webexin <strong>200%</strong>. Tämä vahvistaa puhelun ääntä Webexin sisäänrakennetun maksimin yli — hyödyllistä, kun osallistujalla on viallinen mikrofoni tai kun Webexin ääniprosessointi heikentää signaalia liikaa.</p>

<img src="/apps/sounddial.png" alt="SoundDial Cisco Webex -puhelun volyymin nostaminen yli 100 %:n macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial auttaa myös peräkkäisissä Webex-kokouksissa: käytä automaattista kumartelua, jotta taustamusiikki laskee automaattisesti jokaisen kokouksen alkaessa ja palauta se tauoilla. Tallenna "Kokoukset"-äänenvoimakkuusprofiili, niin voit heti asettaa haluamasi äänitasapainon työpäivälle.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Kuinka kuunnella kahta asiaa yhtä aikaa Mac:ssa ilman, että menee hulluksi",
    description:
      "Musiikkia ja podcastia. Luento ja muistiinpanovideo. Puhelu ja taustamusiikki. macOS vaatii valitsemaan yhden volyymin molemmille — näin tasapainotat ne.",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>Haluat kuunnella kahta äänilähdettä samanaikaisesti. Musiikkia puhelun aikana. Podcast katsoessaan tutoriaalia. Taustatunnelma opiskelun aikana. Kaksi asiaa, kaksi erilaista ihanteellista volyymia. macOS antaa yhden liukusäätimen molemmille.</p>

<p>Tämä on macOS:n perusäänirajoitus: jokainen sovellus jakaa yhden äänenvoimakkuuden. Et voi sanoa "tämä 30 %, tuo 80 %." Se on kaikki yhdellä tasolla tai ei mitään.</p>

<h2>Kun oikeasti tarvitset kaksi äänilähdettä</h2>

<p>Tämä ei ole mikään poikkeustapaus. Näin useimmat ihmiset käyttävät tietokoneitaan:</p>

<ul>
  <li><strong>Musiikki + videopuhelu</strong> — yleisin. Taustamusiikkia Zoom-kokouksessa, mutta tarpeeksi hiljaista kuullakseen kollegat.</li>
  <li><strong>Luento + viitemateriaali</strong> — opiskelija, joka katsoo tallennettua luentoa samalla kun katsoo satunnaisesti YouTube-opetusvideota saadakseen kontekstia.</li>
  <li><strong>Podcast + ympäristöäänet</strong> — kuuntelemalla podcastia samalla kun valkoinen kohina tai sadeääni -sovellus soi hiljaa.</li>
  <li><strong>Kaksi selaimen välilehteä</strong> — harjoitusvideo yhdessä välilehdessä ja demo toisessa, eri äänenvoimakkuuksilla.</li>
  <li><strong>Peli + äänikeskustelu</strong> — peliääni immersioon, Discord viestintään.</li>
</ul>

<p>Jokaisessa tapauksessa toinen lähde on "ensisijainen" (kovempi, tärkeämpi) ja toinen "toissijainen" (hiljaisempi, tukevampi). Ihanteellinen suhde vaihtelee jokaisella yhdistelmällä, ja se muuttuu päivän mittaan.</p>

<h2>macOS rajoitus</h2>

<p>macOS on yksi äänenvoimakkuuden liukusäädin. Paina äänenvoimakkuusnäppäintä ja kaikki muuttuu tasaisesti. Jos säädät äänenvoimakkuuden mukavaan podcastin kuunteluun, Rain Sounds -sovellus on myös sillä tasolla — joko liian kova (häiritsevä) tai et ole säätänyt sitä omassa sovelluksessaan (jos siinä edes on äänenvoimakkuuden säätöä).</p>

<p>Joissakin sovelluksissa on sisäiset äänenvoimakkuusliukusäätimet (Spotify, VLC), mutta useimmissa ei. Ja vaikka näin olisikin, sovellusten välillä vaihtaminen kahden erillisen äänenvoimakkuuden säätämiseksi on kömpelöä ja hidasta.</p>

<h2>Korjaus: sovelluskohtainen äänenvoimakkuus yhdessä paneelissa</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Se sijoittaa kaikki sovellukset yhteen valikkopalkkipaneeliin, jossa on itsenäiset äänenvoimakkuuden liukusäätimet. Molemmat äänilähteet ovat vierekkäin, jokaisella oma tasonsa. Säädä toista koskematta toiseen.</p>

<img src="/apps/sounddial.png" alt="SoundDial näyttää kaksi äänilähdettä eri äänenvoimakkuuksilla macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Esimerkkejä asetuksista:</p>

<p><strong>Musiikki + Zoom-puhelu:</strong></p>
<ul>
  <li>Zoom: 100 % | Spotify: 20 %</li>
</ul>

<p><strong>Podcast + sadeäänet:</strong></p>
<ul>
  <li>Podcast-sovellus: 70% | Rain-sovellus: 15 %</li>
</ul>

<p><strong>Luento + YouTube-opetus:</strong></p>
<ul>
  <li>Zoom (luento: 90 % | Chrome (YouTube): 40 %</li>
</ul>

<p>Jokainen yhdistelmä on eri tasapaino. Säästä ne, joita käytät säännöllisesti <strong>Volyymiprofiilit</strong> ja vaihda yhdellä klikkauksella. Automaattinen kuoltaminen hoitaa musiikki+puhelun tilanteen automaattisesti — kun puhelu alkaa, musiikki putoaa asetetulle tasolle ilman, että kosket mihinkään.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Kuinka katsoa elokuvia Mac:lla herättämättä kaikkia",
    description:
      "Dialogi on kuulumaton, sitten räjähdykset ravistelevat seiniä. Näin voit kesyttää elokuvien äänet myöhäisillan katselua varten Mac:llä — jättämättä sanaakaan huomaamatta.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>Kello on 1 yöllä. Katsot elokuvaa MacBookillasi sängyssä. Hahmot kuiskaavat — käännät äänenvoimakkuutta kovemmalle. Sitten alkaa takaa-ajo ja yhtäkkiä koko asuntosi kuulee sen. Syöksyt volyyminäppäimelle. Tämä sykli toistuu kaksi tuntia.</p>

<p>Ongelma on <strong>Dynaaminen alue</strong> — kuilu elokuvan hiljaisimpien ja äänekkäimpien hetkien välillä. Teatterissa, jossa on tehokas äänentoistojärjestelmä, tämä ääniala luo immersiivisen kokemuksen. MacBookilla keskiyöllä se aiheuttaa jatkuvan taistelun "en kuule dialogia" ja "naapureiden herättämistä" välillä.</p>

<h2>Miksi elokuvat ovat äänekkäämpiä kuin musiikki tai podcastit</h2>

<p>Musiikki masteroidaan yleensä pakatun dynaamisen alueen avulla — hiljaisimpien ja kovimpien osien ero on suhteellisen pieni (ehkä 10–15 dB). Podcastit ovat vieläkin tiiviimpiä. Elokuvissa, erityisesti toimintaleffoissa, voi olla dynaaminen alue <strong>30–40 dB</strong> — hiljaiset osat ovat kuiskauksen hiljaisia ja äänekkäät osat on suunniteltu ravistelemaan teatterin penkkejä.</p>

<p>Kun säädät MacBookin äänenvoimakkuuden kuulemaan dialogin, toimintakohtaukset ovat 100 kertaa kovempia äänenpaineen suhteen. Ei ole olemassa mukavaa järjestelmän volyymia, joka toimisi molemmissa.</p>

<h2>Korjaus 1: Käytä suoratoistopalvelun yötilaa</h2>

<p>Joissakin suoratoistopalveluissa on dynaamisen alueen pakkausominaisuus juuri tätä varten:</p>
<ul>
  <li><strong>Netflix:</strong> Katso, että ääniasetuksista on "Vähennä kovia ääniä" -kytkin toiston aikana</li>
  <li><strong>Apple TV+:</strong> Järjestelmäasetukset → saavutettavuus → "Vähennä kovia ääniä"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost" tuetuissa peleissä</li>
  <li><strong>Disney+:</strong> Vastaavaa ominaisuutta ei tällä hetkellä ole</li>
</ul>

<p>Nämä ominaisuudet tiivistävät dynaamista aluetta niin, että hiljaiset osat ovat äänekkäämpiä ja kovat osat hiljaisempia. Tuloksena on tasaisempi ääni, joka toimii matalilla äänenvoimakkuuksilla.</p>

<h2>Korjaus 2: Käytä kuulokkeita</h2>

<p>Kuulokkeet ratkaisevat "herätät kaikki" -osan — äänesi on yksityinen. Mutta ne eivät ratkaise dynaamisen alueen ongelmaa. Dialogi-räjähdyssykli tapahtuu edelleen, vain korvissasi. Tässä sovelluskohtainen äänenvoimakkuuden säätö auttaa: säädä suoratoistosovelluksen äänenvoimakkuus tarkasti kuulokkeiden kuunteluun.</p>

<h2>Korjaus 3: Aseta suoratoistosovellus tietylle äänenvoimakkuudelle</h2>

<p>Todellinen ongelma myöhäisillan katselussa on, että suoratoistosovellus, ilmoitusäänet ja muu ääni ovat kaikki samalla järjestelmävolyymilla. Slack-pingin ääni klo 2 yöllä samalla äänenvoimakkuudella kuin elokuvan dialogi on sydänkohtauksen yllätys.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Antaa sinun luoda täydellisen myöhäisillan järjestelyn:</p>

<img src="/apps/sounddial.png" alt="SoundDial myöhäisillan elokuvan asetus — suoratoistosovellus kohtuullisella äänenvoimakkuudella, ilmoitukset mykistetty" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Myöhäisillan elokuvaprofiili</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / selain:</strong> 40-50 % — mukava dialogitaso ilman korvia huumaavia toimintakohtauksia</li>
  <li><strong>Slack:</strong> vaimennettu — ei yllätyspiippauksia</li>
  <li><strong>Posti:</strong> vaimennettu</li>
  <li><strong>iMessage:</strong> vaimennettu</li>
  <li><strong>Järjestelmän äänet:</strong> vaimennettu</li>
</ul>

<p>Tallenna tämä "Night"-profiiliksi. Kun aloitat myöhäisillan elokuvan, lisää profiili yhdellä klikkauksella. Jokainen ilmoituslähde on mykistetty ja suoratoistosovelluksesi on hallittu äänenvoimakkuus. Kun olet valmis, vaihda takaisin päiväprofiiliisi.</p>

<p>Yhdistä tämä suoratoistopalvelun "Reduce Loud Sounds" -ominaisuuteen saadaksesi maksimaalisen efektin: palvelu pakkaa dynaamisen alueen ja SoundDial varmistaa, ettei mikään muu Mac pidä ääntä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac äänenvoimakkuus nollautuu nukkumisen jälkeen? Kuinka säilyttää ääniasetuksesi",
    description:
      "Joka kerta kun Mac herää unesta, äänenvoimakkuus on väärä — nollaa maksimiin, pudottaa nollaan tai vaihtaa väärään lähtöön. Tässä syyt ja miten sen voi korjata.",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>Suljet MacBookin kannen. Avaat sen myöhemmin. Äänenvoimakkuus on erilainen. Ehkä se on maksimissaan, kun sinulla oli 40 %. Ehkä se vaihtoi kuulokkeet kaiuttimiin. Ehkä se on nollassa. Se oli kunnossa ennen nukkumaanmenoa — nyt se on väärin.</p>

<p>Äänenvoimakkuuden nollaus lepotilaan jälkeen on jatkuva macOS bugi, joka esiintyy eri muodoissa eri macOS-versioissa. Tässä on, mikä sen aiheuttaa ja miten sitä voi käsitellä.</p>

<h2>Miksi näin tapahtuu</h2>

<h3>1. Äänilähtölaite vaihdettiin lepotilassa</h3>
<p>Jos sinulla oli Bluetooth-kuulokkeet kytkettynä ennen nukkumaanmenoa ja ne irrottautuvat Mac ollessa lepotilassa (akku loppui, siirtyi kantaman ulkopuolelle), macOS vaihtaa sisäänrakennettuihin kaiuttimiin herätessä. Koska macOS muistaa äänenvoimakkuuden laitekohtaisesti, äänenvoimakkuus muuttuu siihen, mihin kaiuttimet viimeksi oli asetettu — mikä voi olla hyvin erilainen kuin kuulokkeiden äänenvoimakkuus.</p>

<h3>2. Core Audio -daemonin uudelleenkäynnistys</h3>
<p>macOS:n äänidaemon (coreaudiod) käynnistyy joskus uudelleen uni-/valve-syklien aikana. Kun se käynnistyy uudelleen, se saattaa käynnistyä oletusäänenvoimakkuustasoilla viimeisimpien asetusten sijaan. Tämä on järjestelmäbugi, jonka Apple on osittain korjannut eri päivityksissä, mutta ei ole koskaan täysin poistanut.</p>

<h3>3. HDMI/DisplayPort-yhteyden uudelleenliitäntä</h3>
<p>Jos käytät ulkoista näyttöä HDMI:n tai DisplayPortin kautta, kannen sulkeminen ja avaaminen voi aiheuttaa näytön irrottautumisen ja uudelleen kytkeytymisen. Jotkut näytöt ovat myös äänilähtölaitteita, ja macOS voivat vaihtaa näytön kaiuttimille tai niiden välillä tämän prosessin aikana, jolloin äänenvoimakkuus muuttuu.</p>

<h3>4. Bluetooth-uudelleenparitus</h3>
<p>Kun Bluetooth-laitteet yhdistyvät uudelleen lepotilaan jälkeen, äänenvoimakkuuden säätö voi johtaa erilaiseen tasoon kuin aiemmin. Tämä on erityisen yleistä kolmannen osapuolen Bluetooth-kuulokkeissa (vähemmän AirPodsissa, jotka Apple on optimoinut).</p>

<h2>Korjaukset</h2>

<h3>Estä Bluetooth-yhteyden katkeaminen unen aikana</h3>
<p>Järjestelmäasetukset → Bluetooth → Advanced (tai klikkaa "i" laitteessasi). Jotkut asetukset säätelevät, pysyykö Bluetooth aktiivisena lepotilassa. Yhteyden pitäminen aktiivisena estää katkaisu/yhteyden uudelleen yhdistämisen sykliä, joka nollaa volyymin.</p>

<h3>Poista automaattinen kytkentä käytöstä AirPodseissa</h3>
<p>Järjestelmäasetukset Bluetoothin → → klikkaa "i" AirPodsin vieressä → "Connect to This Mac" → asetettuna "Viimeksi yhdistetty tähän Mac." Tämä estää AirPodsia yhdistymästä automaattisesti toiseen laitteeseen lepotilassa.</p>

<h3>Aseta tasainen lähtölaite</h3>
<p>Herättyäsi lepotilasta pidä Option-painiketta pohjassa ja klikkaa Ääni-kuvaketta valikkopalkissa. Valitse haluamasi lähtölaite. Tee tämä johdonmukaisesti, niin macOS lopulta "pysyy" mieltymyksessäsi.</p>

<h3>NVRAM nollaa (Intel Macit)</h3>
<p>Jos äänenvoimakkuuden nollaukset ovat kroonisia, nollaa NVRAM: sammuta → virta Option+Command+P+R pohjassa 20 sekunniksi. Tämä tyhjentää tallennetut ääniasetukset ja voi korjata pysyvät äänenvoimakkuusongelmat.</p>

<h2>Suojaa äänitasapainosi SoundDial</h2>

<p>Vaikka järjestelmän äänenvoimakkuus nollautuisi lepotilaksen jälkeen, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> suojaa <em>Per app</em> Tilavuustasapaino. Sen <strong>Volyymimuisti</strong> ominaisuus tallentaa jokaisen sovelluksen äänenvoimakkuuden itsenäisesti ja palauttaa sen herätyksen, uudelleenkäynnistyksen tai sovelluksen uudelleenkäynnistyksen jälkeen.</p>

<img src="/apps/sounddial.png" alt="SoundDial sovelluskohtaisen äänenvoimakkuuden säilyttäminen Mac uni- ja valveillaolosyklien jälkeen" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Joten vaikka macOS palauttaisi järjestelmän äänenvoimakkuuden 80 %:iin nukkumisen jälkeen, sovelluskohtainen saldo pysyy ennallaan:</p>
<ul>
  <li>Spotify on edelleen 30 % järjestelmän äänenvoimakkuudella</li>
  <li>Zoom on edelleen 100 %</li>
  <li>Slack on yhä vaimea</li>
</ul>

<p>Saatat joutua korjaamaan järjestelmän äänenvoimakkuuden (yksi säätö), mutta sinun ei tarvitse tasapainottaa kaikkia sovelluksia uudelleen (eli kuusi tai seitsemän säätöä). Ja kun <strong>Volyymiprofiilit</strong>, jopa täysi palautus on yksi klikkaus.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac Ääni musiikin tuotannossa: DAW:n ja viestinnän hallinta erikseen",
    description:
      "Käytätkö Logic Prota tai Abletonia Discord-puhelun aikana? Näin kuulet DAW:si täydellä tarkkuudella pitäen äänichatin mukavalla tasolla.",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>Tuotat musiikkia Logic Prossa (tai Abletonissa tai FL Studiossa). Olet myös Discordissa yhteistyökumppanin kanssa. Ongelma on, että DAW-lähtösi ja Discord taistelevat samasta äänenvoimakkuudesta. Laita Logic kovemmalle kuullaksesi miksauksen selvästi, ja Discord pauhahtaa korviisi. Jos laita Discordin hiljemmalle, miksauksesi on liian hiljainen arvioitavaksi kunnolla.</p>

<p>Tämä on todellinen ongelma musiikkituottajille Mac:llä, koska äänenvoimakkuuden seuranta vaikuttaa suoraan miksauspäätöksiin. Jos DAW on liian hiljainen, koska Discord kilpailee, miksaat äänet kovempaa kuin oli tarkoitus. Jos Discord hukuttaa yksityiskohtia, miksauksessasi jää ongelmia huomaamatta.</p>

<h2>Miksi tämä on tärkeää tuotannossa</h2>

<p>Musiikin tuotanto vaatii <strong>Tarkat seurantatasot</strong>. Sinun täytyy kuulla DAW:si tasaisella, kalibroidulla äänenvoimakkuudella, jotta voit tehdä luotettavia miksauspäätöksiä. Viestintäsovellukset, ilmoitukset ja muut äänilähteet häiritsevät tätä — mutta usein niiden täytyy toimia samanaikaisesti etäyhteistyötä varten.</p>

<p>Ammattilaisstudiot ratkaisevat tämän erillisillä näyttöpoluilla ja keskustelujärjestelmillä. Kannettavalla tietokoneella tarvitset ohjelmiston.</p>

<h2>DAW:n sisäinen lähestymistapa</h2>

<p>Voisit käyttää DAW:n sisäistä valvontatasoa pitääksesi sen tasaisena ja säätää Discordin äänenvoimakkuutta sisäisesti. Mutta:</p>
<ul>
  <li>Discordin ulostuloäänenvoimakkuuden liukusäädin on epätarkka ja rajoitettu 0–100 %:iin</li>
  <li>Et vieläkään voi estää järjestelmän ääniä ja ilmoituksia häiritsemästä odottamattomilla määrillä</li>
  <li>Jos sinun täytyy viitata kappaleeseen Spotifyssa tai YouTubessa, nekin ovat järjestelmän äänenvoimakkuudella</li>
</ul>

<h2>Sovelluskohtainen tuotantovolyymi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Voit asettaa tarkat volyymit jokaiselle sovellukselle erikseen:</p>

<img src="/apps/sounddial.png" alt="SoundDial DAW-lähtö Discordista ja viiteraitojen erottaminen macOS:ssä musiikin tuotantoa varten" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Tuotantojärjestelyt</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100 % — ensisijainen seurantataso</li>
  <li><strong>Discord / äänichat:</strong> 40-60 % — kuuluva, mutta selvästi toissijainen miksauksellesi</li>
  <li><strong>Spotify / viitekappaleet:</strong> 80% — sovita DAW-tasosi tarkkoihin A/B-vertailuihin</li>
  <li><strong>Slack / ilmoitukset:</strong> mykistetty — ei häiriöitä tuotannon aikana</li>
  <li><strong>Safari / Chrome:</strong> 50 % — siitä, että katsot tutoriaaleja ilman, että räjäytät korviasi</li>
</ul>

<h3>Tallenna se "Production"-profiilina</h3>
<p>Tallenna tämä asetus ja ota se käyttöön yhdellä klikkauksella, kun istut alas tuottamaan. Kun olet valmis ja vaihdat satunnaiseen käyttöön, käytä "Normaali"-profiiliasi. Ei kahdeksaa sovellusta uudelleen.</p>

<h3>Automaattinen kukistuminen etäsessioissa</h3>
<p>Jos olet puhelussa yhteistyökumppanin kanssa, SoundDial:n automaattinen kumartelu voi laskea ei-viestintäsovelluksia, kun mikrofoni on päällä. Mutta tuotannon osalta saatat haluta <em>Poista käytöstä</em> automaattinen kumartelu — tarvitset DAW:n tasaisella tasolla riippumatta siitä, puhutko siitä. Kytkin on yhdellä klikkauksella asetuksissa.</p>

<h2>Huomautus viiveestä</h2>

<p>SoundDial käyttää Applen Core Audio Tap API:ta äänenvoimakkuuden hallintaan. Prosessointi lisää merkityksetöntä viivettä — mikä on havaitsematonta valvontatarkoituksiin. Jos tallennat ja valvot DAW:n kautta suoran valvonnan ollessa päällä, SoundDial ei häiritse DAW:n äänireittiä. Se säätää vain kaiuttimiin/kuulokkeisiin tulevaa lähtötasoa.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Apple Musicin äänenvoimakkuus liian matala Mac? Kuinka korjata ja vahvistaa sitä",
    description:
      "Apple Music täysillä Mac mutta silti liian hiljainen? Tarkista äänitarkistus, taajuuskorjaimen asetukset ja opi, miten Apple Music nostetaan yli 100 %:iin.",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music on täysillä. Sinun Mac on täysillä. Kappale, jonka tiedät olevan kova, on tuskin kuultavissa. Sillä välin, kun vaihdan Spotifyyn — sama kappale, sama äänenvoimakkuus — se on selvästi kovempi. Mitä on tekeillä?</p>

<p>Apple Musicissa on useita asetuksia, jotka voivat alentaa toistoäänenvoimakkuutta, eivätkä ne ole ilmeisiä. Käydään jokainen läpi.</p>

<h2>1. Tarkista äänitarkastus</h2>

<p>Apple Musicissa on ominaisuus nimeltä <strong>Sound Check</strong> Se normalisoi kaikkien raitojen äänenvoimakkuuden niin, että ne soittavat suunnilleen samalla koetulla äänenvoimakkuudella. Tämä estää järisyttävät äänenvoimakkuuden hyppyt kappaleiden välillä, mutta tekee sen siten <em>Vähentäminen</em> Äänekkäämpien kappaleiden äänenvoimakkuus — mikä tekee kaikesta kokonaisuudessaan hiljaisempaa.</p>

<p>Tarkistaaksesi: Avaa Musiikki-sovellus → Asetukset (⌘,) → Toisto → <strong>Sound Check</strong>.</p>

<p>Jos Sound Check on käytössä, kokeile poistaa se käytöstä. Kappaleet, joita aiemmin on supistettu hiljaisempiin kappaleisiin, soitetaan nyt alkuperäisellä masteroidulla tasolla — joka on usein huomattavasti kovempi.</p>

<h2>2. Tarkista EQ-asetus</h2>

<p>Apple Musicissa on sisäänrakennettu taajuuskorjain. Jotkut EQ-esiasetukset vähentävät kokonaisvolyymia estääkseen leikkaamisen tiettyjen taajuuksien nostamisen yhteydessä.</p>

<p>Tarkistus: Musiikkisovellus → Asetukset → Toisto → <strong>EQ</strong>. Jos EQ-esiasetus on valittu (erityisesti "Spoken Word", "Late Night" tai "Small Speakers"), kokeile asettaa se "Pois päälle" ja katso, paraneeko äänenvoimakkuus.</p>

<p>Erityisesti "Late Night" EQ tiivistää dynaamista aluetta — tekee hiljaisista osista kovempia, mutta osista hiljaisempia. Tämä voi saada kaiken tuntumaan "tasaisemmalta" ja matalammalta.</p>

<h2>3. Tarkista häviöttömän äänen asetukset</h2>

<p>Jos Apple Music Lossless on päällä (asetukset → äänenlaatu), korkealaatuinen striimi saattaa itse asiassa olla matalampi kuin tavallinen AAC-striimi joillakin raidoilla. Tämä johtuu siitä, että häviöttömässä ei ole samoja masterointisäätöjä kuin Apple käyttää AAC-versioissa.</p>

<p>Kokeile tilapäisesti vaihtaa AAC-laatuun nähdäksesi, onko äänenvoimakkuuden ero havaittavissa.</p>

<h2>4. Kuulokkeiden turvallisuus</h2>

<p>Järjestelmäasetukset → ääni → kuulokkeiden turva. Jos "Reduce Loud Audio" on päällä, macOS rajoittaa kuulokkeiden äänenvoimakkuutta maailmanlaajuisesti — vaikuttaen Apple Musiciin ja kaikkeen muuhun.</p>

<h2>5. Nosta Apple Music yli 100 %:n</h2>

<p>Jos olet tarkistanut kaiken ja Apple Music on edelleen liian hiljainen — olipa kyse sitten Sound Checkin aggressiivisuudesta, hiljaisesta albumista tai MacBook-kaiuttimien puutteesta — sovelluskohtainen äänenvoimakkuuden nostaminen ratkaisee ongelman.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> voi nostaa Apple Musicin tasolle <strong>200%</strong>. Äänisignaali vahvistetaan järjestelmätasolla ennen kuin se saavuttaa kaiuttimet tai kuulokkeet. Vain Apple Music voimistuu — Zoom, Slack ja selaimesi pysyvät nykyisellä tasolla.</p>

<img src="/apps/sounddial.png" alt="SoundDial Apple Musicin äänenvoimakkuuden nostaminen yli 100 % macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tämä on hyödyllistä myös päinvastaisessa ongelmassa: jos Apple Music on liian kova verrattuna Zoom-puheluusi, laske Apple Music 25 %:iin SoundDial ja pidä Zoom 100%:ssa. Sovelluskohtainen hallinta tarkoittaa, ettei sinun koskaan tarvitse tinkiä yhden sovelluksen volyymista toisen sijaan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Ilmainen volyymisekoitin Mac: Mitä oikeasti saat (ja mitä et saa)",
    description:
      "Etsitkö ilmaista sovelluskohtaista volyymimikseriä Mac? Tässä on rehellinen erittely siitä, mitä ilmaiset optiot tarjoavat, mitä niistä puuttuu ja milloin maksaminen kannattaa.",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>Jos haet "free volume mixer for Mac", löydät yhden päätuloksen: <strong>Taustamusiikki</strong>. Se on ainoa merkittävä ilmainen, avoimen lähdekoodin sovelluskohtainen äänenvoimakkuuden hallintasovellus macOS. Katsotaanpa, mitä oikeasti saat — ja mistä luovutat.</p>

<h2>Taustamusiikki: ilmainen vaihtoehto</h2>

<p>Background Music on ilmainen, avoimen lähdekoodin sovellus, joka isännöi GitHubia. Se antaa sinulle:</p>

<ul>
  <li><strong>Sovelluskohtaiset volyymiliukusäätimet</strong> — perusäänenvoimakkuuden säätö jokaiselle käynnissä olevalle sovellukselle</li>
  <li><strong>Automaattinen taukomusiikki</strong> — pysäyttää musiikkisoittimen, kun toinen sovellus toistaa ääntä, jatkaa kun se pysähtyy</li>
  <li><strong>Oletuslähtölaitteen asetus</strong> — ohittaa, mitä laitteita sovellukset käyttävät oletuksena</li>
</ul>

<h3>Mitä taustamusiikkia ei ole</h3>
<ul>
  <li><strong>Äänenvoimakkuuden parannusta ei ole yli 100 %</strong> — liukusäätimet menevät 0 %:sta vain 100 %:iin. Hiljaisia sovelluksia ei voi vahvistaa.</li>
  <li><strong>Ei äänenvoimakkuusprofiileja</strong> — ei voi tallentaa ja vaihtaa konfiguraatioiden välillä</li>
  <li><strong>Ei automaattista kumartelua</strong> — automaattinen tauko on eri asia kuin automaattinen kukistuminen. Tauko pysäyttää musiikin kokonaan; Kyykistyminen laskee sen mukavalle taustalle. Monet ihmiset suosivat hiljaista taustamusiikkia puheluissa täydellisen hiljaisuuden sijaan.</li>
  <li><strong>Ei volyymimuistia</strong> — ei muista sovelluskohtaisia volyymeja uudelleenkäynnistysten välillä</li>
  <li><strong>Ei pikanäppäimiä</strong> — ei pikanäppäintä mikserin kytkemiseen tai kaikkien sovellusten mykistykseen</li>
  <li><strong>Ei lähtölaitteen kytkentää</strong> — ei voi vaihtaa kaiuttimia/kuulokkeita samasta paneelista</li>
</ul>

<h3>Luotettavuusongelma</h3>
<p>Background Musicin suurin ongelma ei ole ominaisuudet — vaan vakaus. Se toimii asentamalla <strong>Virtuaalinen äänilaiteajuri</strong>, ja tämä ajuri hajoaa macOS päivitysten myötä. Lähes jokaisen suuren macOS-julkaisun (Ventura, Sonoma, Sequoia, Tahoe) jälkeen käyttäjät raportoivat:</p>
<ul>
  <li>Virtuaalilaite ei asentunut</li>
  <li>Äänen rätinää ja häiriöitä</li>
  <li>Sovelluksia ei tunnisteta</li>
  <li>Ei lainkaan äänilähtöä</li>
  <li>Sovellus kaatuu julkaisun yhteydessä</li>
</ul>

<p>Koska kyseessä on vapaaehtoisten ylläpitämä avoimen lähdekoodin projekti, korjaukset eivät aina ole ajoissa. Saatat olla ilman sovelluskohtaista volyymia viikkoja macOS-päivityksen jälkeen.</p>

<h2>Muita "ilmaisia" vaihtoehtoja</h2>

<h3>eqMac (ilmainen taso)</h3>
<p>eqMacin ilmainen taso tarjoaa koko järjestelmän taajuuskorjaimen, mutta ei sovelluskohtaista äänenvoimakkuuden säätöä. Sovelluskohtaiset ominaisuudet vaativat eqMac Pron (tilauksen). Ilmainen versio on hyödyllinen, jos tarvitset ensisijaisesti taajuuskorjainta, et äänenvoimakkuuden miksaamista.</p>

<h3>macOS sisäänrakennettu</h3>
<p>macOS ei ole sisäänrakennettua volyymimikseriä. Lähin on järjestelmäasetuksissa → äänissä oleva hälytysäänenvoimakkuuden liukusäädin, joka vaikuttaa vain järjestelmän ääniin — ei sovelluksen ääneen.</p>

<h2>Kun vapaa on tarpeeksi</h2>

<p>Taustamusiikki voisi toimia, jos:</p>
<ul>
  <li>Tarvitset vain perusmäärän per sovellus (0-100 %)</li>
  <li>Et tarvitse profiileja, automaattista kumartelua tai äänenvoimakkuuden vahvistusta</li>
  <li>Olet tyytyväinen korjaamaan sen, kun macOS päivitykset rikkovat sen</li>
  <li>Olet ihan ok virtuaalisen äänilaitteen kanssa ääniketjussasi</li>
</ul>

<h2>Kun maksaminen on sen arvoista</h2>

<p>Maksullinen volyymisekoitin on sen arvoinen, jos tarvitset:</p>
<ul>
  <li><strong>Luotettavuus</strong> — toimii macOS päivitysten jälkeen odottamatta vapaaehtoisten korjauksia</li>
  <li><strong>Äänenvoimakkuuden korotus 200 %:iin</strong> — vahvistaa hiljaisia sovelluksia niiden sisäänrakennetun maksimin yli</li>
  <li><strong>Profiilit</strong> — tallenna asetukset ja vaihda Meetingin/Focusin/Gamingin välillä yhdellä klikkauksella</li>
  <li><strong>Auto-ducking</strong> — automaattinen äänenvoimakkuuden vähentäminen puheluiden aikana, ei pelkkä automaattinen tauko</li>
  <li><strong>Ei järjestelmäajureita</strong> — toimii Applen alkuperäisen API:n kanssa, ei virtuaalisia äänilaitteita, jotka voisivat rikkoutua</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Hinta 14,99 € — kerta, ei tilaus. Taustaksi, se on alle kahden kuukauden Spotify-tilaus, työkalu, jota käytät päivittäin. Se on alle puolet SoundSourcen hinnasta ($39) ja sisältää ominaisuuksia (profiilit, automaattinen kumartelu), joita SoundSourcessa ei ole.</p>

<img src="/apps/sounddial.png" alt="SoundDial — luotettava sovelluskohtainen äänenvoimakkuuden mikseri Mac profiilit, automaattinen kumartuminen ja 200 % boost" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Applen arvioima, hiekkalaatikko, ei järjestelmäajureita. 14,99 € kertakäyttö, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Kuinka tasapainottaa musiikin ja äänichatin äänenvoimakkuus Mac",
    description:
      "Musiikki on liian kova Discordissa. Tai puhelu on liian hiljainen Spotifyssa. macOS ei anna sinun tasapainottaa niitä — näin asetat täydellisen suhteen.",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>Haluat kuunnella musiikkia samalla kun juttelet ystävien kanssa Discordissa (tai Zoomissa tai FaceTimessa). Musiikin täytyy olla läsnä, mutta ei ylivoimaista. Äänichatin täytyy olla selkeä ja hallitseva. Yksinkertainen pyyntö. macOS tekee siitä mahdotonta.</p>

<p>Kun yksi järjestelmä säätelee äänenvoimakkuutta, olet jumissa: käännä soittoa kovemmalle ja musiikki on liian kovalla. Laita ääni hiljemmalle, niin et kuule ystäviäsi. Ei ole olemassa sisäänrakennettua tapaa asettaa näitä kahta eri tasolle.</p>

<h2>Sovelluksen sisäinen volyymikiertotie</h2>

<p>Sekä Spotifyssa että Discordissa on sisäiset äänenvoimakkuuden liukusäätimet. Teoriassa voisit laskea Spotifyn liukusäätimen 30 %:iin ja pitää Discordin tehokkuuden 100 %:ssa. Tämä luo 30/100-suhteen.</p>

<p>Käytännössä:</p>
<ul>
  <li>Sinun täytyy vaihtaa jokaiseen sovellukseen säätääksesi liukusäädintä</li>
  <li>Suhde muuttuu, kun säädät järjestelmän volyymia (molemmat skaalautuvat suhteellisesti)</li>
  <li>Kaikissa sovelluksissa ei ole sisäistä äänenvoimakkuuden liukusäädintä</li>
  <li>Se on epätarkka — pieni Spotify-liukusäädin, ei prosentteja</li>
  <li>Jos suljet ja avaat Spotifyn uudelleen, liukusäädin saattaa nollautua</li>
</ul>

<h2>Todellinen ratkaisu: riippumaton sovelluskohtainen volyymi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> asettaa sekä Spotifyn että Discordin samaan paneeliin itsenäisillä äänenvoimakkuusliukusäätimillä. Aseta haluamasi suhde ja jätä se:</p>

<img src="/apps/sounddial.png" alt="SoundDial tasapainottaa Spotifyn ja Discordin eri äänenvoimakkuustasoja macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Kultainen leikkaus musiikille + äänichatille</h3>
<p>Sen perusteella, miten useimmat ihmiset käyttävät tätä:</p>
<ul>
  <li><strong>Äänikeskustelu 85-100 % välillä</strong> — aina selvästi kuuluva, hallitseva miksauksessa</li>
  <li><strong>Musiikki 20–35 %</strong> — läsnä, mutta ei koskaan kilpailemassa äänten kanssa</li>
</ul>

<p>Tarkka suhde riippuu musiikista, kuulokkeistasi ja henkilökohtaisista mieltymyksistä. Tärkeintä on, että voit löytää täydellisen tasapainon kerran ja pitää sen — sen sijaan, että jatkuvasti säätäisit.</p>

<h3>Tallenna se profiiliksi</h3>
<p>Tallenna musiikki- ja äänichat-saldo profiiliksi. "Peliprofiili": Discord 100 %, peli 50 %, Spotify 20 %. "Chill"-profiili: Discord 70 %, Spotify 60 %. Vaihda niiden välillä yhdellä klikkauksella.</p>

<h3>Automaattinen kyykistyminen puheluihin</h3>
<p>Jos kuuntelet musiikkia ja puhelu tulee, SoundDial:n automaattinen kumartuminen laskee musiikin automaattisesti asettamallesi tasolle. Kun puhelu päättyy, musiikki palaa esiin. Ei koskemista mihinkään.</p>

<p>Äänitasapainoongelma on asia, jonka jokainen Mac käyttäjä kohtaa heti, kun musiikki ja puhelu ovat käynnissä samanaikaisesti. Se on kertaluonteinen 14,99 € korjaus.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac Volume Control: Täydellinen opas (2026)",
    description:
      "Kaikki mitä sinun tarvitsee tietää äänen ohjauksesta macOS:llä — peruspikanäppäimistä sovelluskohtaiseen äänenvoimakkuuteen, ulostulon vaihtoon ja automaatioon.",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS antaa äänenvoimakkuuden liukusäätimen ja mykistysnapin. Siinä on Applen sisäänrakennettu ääniohjaus. Mutta Mac tarjoaa itse asiassa paljon enemmän ääniominaisuuksia kuin pinta antaa — piilotetut näppäimistön pikanäppäimet, sovelluskohtaiset äänenvoimakkuustyökalut, lähtölaitteiden hallinta ja automaatioominaisuudet, joita useimmat käyttäjät eivät koskaan löydä.</p>

<p>Tämä on täydellinen opas äänen hallintaan Mac. Perusasioista tehokäyttäjän ominaisuuksiin, kaikki yhdessä paikassa.</p>

<h2>Osa 1: Sisäänrakennetut äänenvoimakkuuden säätimet</h2>

<h3>Äänenvoimakkuusnäppäimet</h3>
<p>Äänenvoimakkuuden nostaminen (F12), äänenvoimakkuuden lasku (F11) ja mykistys (F10) säätävät järjestelmän äänenvoimakkuutta 16 askeleessa. Jokainen vaihe on noin 6,25 % kokonaisalueesta. Nykyinen volyymi näytetään päällekkäisenä kuvana ruudulla.</p>

<h3>Hienorakeinen tilavuus: Vaihtoehto + siirto</h3>
<p>Pidä <strong>Option + Shift</strong> ja paina volyymia ylös/alas. Jokainen painallus säätää neljäsosan normaalista askeleesta — jolloin saat <strong>64 äänenvoimakkuutta</strong> 16:n sijaan. Olennaista täydellisen kuulokkeen äänenvoimakkuuden löytämiseksi, kun normaalit vaiheet ovat liian karkeat.</p>

<h3>Äänetön äänenvoimakkuuden säätö: Shift</h3>
<p>Pidä <strong>Vuoro</strong> ja paina volyymia ylös/alas. Äänenvoimakkuus muuttuu ilman kuuluvaa palautteen "poksahdusta". Käytä tätä äänenvoimakkuuden säätämiseen puhelun tai esityksen aikana.</p>

<h3>Valikkopalkin äänenvoimakkuuden liukusäädin</h3>
<p>Jos Ääni-kuvake on valikkopalkissa (ota se käyttöön Järjestelmäasetuksista → Ohjauskeskuksesta → Ääni → Aina Näkyy valikkopalkissa), klikkaamalla sitä näkyy äänenvoimakkuuden liukusäädin. Tämä on jatkuva liukusäädin, ei askeltettu kuten näppäimistön näppäimet, joten voit asettaa tarkan tason.</p>

<h3>Ohjauskeskus</h3>
<p>Klikkaa valikkopalkissa Control Centerin kuvaketta (kaksikytkin-kuvake) → Ääni-osiota saadaksesi äänenvoimakkuusliukusäätimen ja nopean pääsyn ulostulolaitteiden valintaan.</p>

<h2>Osa 2: Ulostulolaitteiden hallinta</h2>

<h3>Kytkentälähtölaitteet</h3>
<p>Nopein sisäänrakennettu menetelmä: pidä <strong>Vaihtoehto</strong> ja klikkaa Ääni-kuvaketta valikkopalkissa. Näet listan kaikista saatavilla olevista lähtö- ja tulolaitteista. Klikkaa yhtä vaihtaaksesi välittömästi.</p>

<p>Vaihtoehtoisesti: järjestelmäasetukset → ääni → lähtö. Valitse suosikkilaitteesi listalta.</p>

<h3>Bluetooth-laitteiden hallinta</h3>
<p>macOS muistaa äänenvoimakkuuden eri lähtölaitteille erikseen. Kun vaihdat kaiuttimista (70 %) AirPodseihin (40 %), äänenvoimakkuus muuttuu viimeksi käyttäessäsi kyseistä laitetta. Tämä voi tuntua siltä, että äänenvoimakkuus "muuttuu itsestään", jos et odota sitä.</p>

<h3>Aggregaatti- ja monilähtölaitteet</h3>
<p>Edistyneissä asetuksissa avaa Audio MIDI Setup (Applications → Utilities) luodaksesi aggregaattilaitteita (yhdistä useita tuloja) tai monilähtölaitteita (lähetä ääni useisiin lähtöihin samanaikaisesti). Nämä ovat ensisijaisesti hyödyllisiä ammattimaisissa ääniasetuksissa, eivät arkikäytössä.</p>

<h2>Osa 3: Hälytys- ja ilmoitusvoimakkuus</h2>

<h3>Järjestelmähälytysmäärä</h3>
<p>macOS on erillinen hälytysäänenvoimakkuuden liukusäädin: Järjestelmäasetukset → Ääni → Hälytysäänenvoimakkuus. Tämä säätelee järjestelmän äänien (Funk, Tink, Bottle jne.) äänenvoimakkuutta itsenäistä päääänenvoimakkuudesta. Se vaikuttaa kuitenkin vain macOS järjestelmähälytyksiin — ei ilmoitusääniin kolmannen osapuolen sovelluksista, kuten Slackista, Discordista tai Teamsista.</p>

<h3>Ilmoitusäänenhallinta</h3>
<p>Mene Järjestelmäasetuksiin → Ilmoituksiin. Jokaisessa sovelluksessa voit kytkeä päälle tai pois "Toista ääni ilmoituksia varten" -toiminnon. Tämä on binääristä — et voi tehdä sovelluksen ilmoituksista hiljaisempia, vain täysin päällä tai kokonaan pois päältä.</p>

<h3>Tarkennustilat</h3>
<p>Tarkennustilat (Järjestelmäasetukset → Focus) estävät valituista sovelluksista tulleet ilmoitukset. Ne voivat hiljentää ilmoitusäänet, mutta eivät vaikuta median äänenvoimakkuuteen. Musiikkisi soi täysillä, vaikka Do Not Disturb -tilassa.</p>

<h2>Osa 4: Kuulokkekohtaiset ohjaimet</h2>

<h3>Kuulokkeiden turvallisuus</h3>
<p>Järjestelmäasetukset → ääni → kuulokkeiden turva. "Vähennä kovaa ääntä" rajoittaa kuulokkeiden äänenvoimakkuutta kumulatiivisen valotuksen perusteella. Voit poistaa sen käytöstä tai säätää kynnystä. Vaikuttaa vain kuulokkeiden ulostuloon, ei kaiuttimiin.</p>

<h3>Avaruudellinen ääni</h3>
<p>Tuetuille kuulokkeille (AirPods Pro, AirPods Max, jotkut Beatsit) macOS tukee Spatial Audioa pään seurannalla. Ota se käyttöön Control Center → Sound → Spatial Audio -tilassa. Tämä vaikuttaa äänen havaittuun sijaintiin, mutta ei äänenvoimakkuuteen.</p>

<h3>Äänitasapaino</h3>
<p>Järjestelmäasetukset → saavutettavuus → ääni → tasapaino. Vasen-oikea liukusäädin, joka säätää stereotasapainoa. Varmista, että se on keskellä, jos toinen puoli kuulostaa hiljaisemmalta kuin toinen.</p>

<h2>Osa 5: Mitä macOS ei voi tehdä (ja miten korjata se)</h2>

<h3>Sovelluskohtainen äänenvoimakkuuden säätö</h3>
<p>macOS on yksi äänenvoimakkuuden liukusäädin kaikille sovelluksille. Ei ole olemassa sisäänrakennettua tapaa asettaa Spotify 30 % ja Zoom 100 %:iin. Tämä on macOS eniten toivottu ääniominaisuus, eikä Apple ole koskaan lisännyt sitä.</p>

<h3>Äänenvoimakkuuden nostaminen yli 100 %</h3>
<p>macOS:n volyymi on maksimissaan 100%. Jos sisältö on liian hiljaista jopa maksimivolyymissa, ei ole sisäänrakennettua tapaa vahvistaa enempää.</p>

<h3>Volyymiprofiilit</h3>
<p>Äänenvoimakkuusasetuksia (Spotify 30 %, Zoom 100 %, Slack mykistetty) ei voi tallentaa ja vaihtaa esiasetusten välillä.</p>

<h3>Auto-ducking</h3>
<p>macOS ei automaattisesti laske taustaääntä, kun liityt puheluun.</p>

<h3>Volyymimuisti per sovellus</h3>
<p>macOS ei muista sovelluskohtaisia volyymitasoja, koska sovelluskohtaista volyymia ei ole olemassa.</p>

<p>Kaikki viisi ovat saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — natiivi macOS valikkopalkin sovellus, joka lisää äänenvoimakkuusmikserin, jota Apple ei koskaan rakentanut.</p>

<img src="/apps/sounddial.png" alt="SoundDial — sovelluskohtainen äänenvoimakkuuden säätö, profiilit, automaattinen kumartuminen ja 200 % boost macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Osa 6: Sovelluskohtainen volyymi SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> täyttää kaikki yllä mainitut aukot:</p>

<ul>
  <li><strong>Sovelluskohtainen volyymi:</strong> Jokaisella sovelluksella on oma liukusäädin, 0 %:sta 200 %:iin</li>
  <li><strong>Sovelluskohtainen mykistys:</strong> Yksi klikkaus mykistää minkä tahansa sovelluksen</li>
  <li><strong>Äänenvoimakkuuden nosto:</strong> Vahvista hiljaiset sovellukset yli 100 %:n</li>
  <li><strong>Äänenvoimakkuusprofiilit:</strong> Tallenna asetukset ja vaihda yhdellä klikkauksella</li>
  <li><strong>Automaattinen kumartelu:</strong> Taustaääni vaimenee puheluiden aikana, palautuu sen jälkeen</li>
  <li><strong>Volyymimuisti:</strong> Jokaisen sovelluksen äänenvoimakkuus muistetaan uudelleenkäynnistysten välillä</li>
  <li><strong>Lähtölaitteen kytkentä:</strong> Vaihda kaiuttimet/kuulokkeet samasta paneelista</li>
  <li><strong>Näppäimistön pikanäppäimet:</strong> ⌃⌥S mikserin kytkemiseksi päälle, ⌃⌥M mykistämään kaikki</li>
</ul>

<p>Se käyttää Applen modernia Core Audio Tap API:ta — ei järjestelmäajureita, ei virtuaalisia äänilaitteita, ei ytimen laajennuksia. Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> hintaan 14,99 € (kertamaksu, ilman tilausta), Apple-arvostelu ja hiekkalaatikko. macOS 14,2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "VLC:n äänenvoimakkuus liian matala Mac? Kuinka nostaa se yli 200 %:n",
    description:
      "VLC maksimivolyymillä, mutta video on silti liian hiljainen? VLC:ssä on sisäänrakennettu 200 %:n boosti — lisäksi voit mennä vielä pidemmälle sovelluskohtaisella äänenvoimakkuusmikserillä.",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>Katsot videota VLC:ssä. Dialogi on hiljaista. Nostat VLC:n äänenvoimakkuuden täysille. Nostat Mac äänenvoimakkuuden täysille. En vieläkään kuule kunnolla. Video oli vain nauhoitettu liian hiljaa.</p>

<p>Hyvä uutinen: VLC:llä on itse asiassa sisäänrakennettu ratkaisu, josta useimmat eivät tiedä. Vielä parempi uutinen: voit pinota sen järjestelmätason boostilla saadaksesi vielä enemmän volyymia.</p>

<h2>VLC:n sisäänrakennettu äänenvoimakkuuden korotus (jopa 200 %)</h2>

<p>VLC voi yksinään ylittää 100 % volyymin. VLC:n soitinpalkin äänenvoimakkuuden liukusäädin on maksimissaan 100%, mutta voit nostaa sitä vielä lisää:</p>

<h3>Menetelmä 1: Rullapyörä</h3>
<p>Vie hiiri VLC:n äänenvoimakkuusliukusäätimen päälle ja selaa ylöspäin. Liukusäädin menee näkyvän 100 %:n rajan yli, jopa 200 %:iin. Näet prosenttiluvun selatessasi.</p>

<h3>Menetelmä 2: Pikanäppäin</h3>
<p>Lehdistö <strong>Komento + Ylöspäin nuoli</strong> (⌘↑) toistuvasti, jotta äänenvoimakkuus nousisi yli 100 %:n. Jokainen painallus lisää askeleen. <strong>Komento + Alas Nuoli</strong> (⌘↓) vähentämään.</p>

<h3>Menetelmä 3: Äänivalikko</h3>
<p>Mene VLC:hen → ääni → lisää äänenvoimakkuutta. Toista, kunnes äänenvoimakkuus on tarpeeksi korkea. Nykyinen taso näkyy pelaajan oikeassa alakulmassa.</p>

<p>VLC:n 200 % boost toimii vahvistamalla äänisignaalia VLC:n dekooderissa. Äärimmäisillä tasoilla se voi aiheuttaa säröä, mutta aidosti hiljaisille videoille se on erittäin tehokas.</p>

<h2>VLC:n vahvistuksen lisäksi: järjestelmätason vahvistus</h2>

<p>Jos VLC 200 %:lla ei vieläkään ole tarpeeksi kovaa — tai haluat nostaa VLC:tä vaikuttamatta sen sisäisiin ääniasetuksiin — järjestelmätason sovelluskohtainen äänenvoimakkuusmikser lisää toisen vahvistuskerroksen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa VLC:lle oman äänenvoimakkuusliukusäätimen 0 %:sta 200 %:iin järjestelmätasolla. Tämä pinottuu VLC:n sisäisen boostin kanssa:</p>

<ul>
  <li>VLC sisäinen: 200 % × SoundDial: 200 % = tehokas 400 % vahvistus</li>
  <li>VLC sisäinen: 150 % × SoundDial: 150 % = tehokas 225 % vahvistus</li>
</ul>

<p>Tämä on äärimmäistä vahvistusta ja aiheuttaa säröä joihinkin sisältöihin, mutta erittäin hiljaiselle lähdemateriaalille se saattaa olla juuri sitä, mitä tarvitset.</p>

<img src="/apps/sounddial.png" alt="SoundDial VLC:n äänenvoimakkuuden nostaminen järjestelmätasolla macOS hiljaisille videotiedostoille" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tärkeämpää on, että SoundDial antaa sinun lisätä VLC:tä <strong>Itsenäisesti</strong>. Musiikkisoitin, selain ja viestintäsovellukset pysyvät normaalilla tasolla, kun taas vain VLC voimistuu. Jos nostat VLC:n 180 %:iin SoundDial, Spotify ei muutu. Tätä VLC:n sisäänrakennettu boost ei pysty tekemään — VLC:n boost vaikuttaa vain VLC:hen, mutta macOS:n yhden järjestelmän volyymi yhdistää kaiken muun.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Kuinka poistaa äänen kumartaminen käytöstä Mac (tai ohjata sitä itse)",
    description:
      "macOS tai sovelluksesi laskevat musiikkia puheluiden aikana pyytämättä. Näin voit estää ei-toivotun äänen väistymisen — tai korvaat sen kumartelulla, jota oikeasti hallitset.",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>Liityt Zoom-puheluun. Musiikkisi laskee lähes olemattomiin. Et koskenut mihinkään äänenvoimakkuuden säätimeen — jokin teki sen puolestasi. Tämä on <strong>Ääni kumartuu</strong>: taustaäänen automaattinen alentaminen, kun puhelu tai tärkeä äänilähde on aktiivinen.</p>

<p>Jotkut rakastavat sitä. Toiset vihaavat sitä — erityisesti silloin, kun kumartelu on liian aggressiivista (musiikki laskee nollaan mukavan taustatason sijaan) tai kun se laukeaa yllättäen.</p>

<p>Näin voit poistaa ei-toivotun kyykistymisen käytöstä Mac ja miten korvata se haluamallasi tavalla kumartelulla.</p>

<h2>Mistä äänen kumartuminen tulee Mac</h2>

<p>macOS itsessään tekee <strong>Ei</strong> Niissä on sisäänrakennettu äänen piilottamisominaisuus. Jos musiikkisi hiljenee puheluiden aikana, jokin näistä aiheuttaa sen:</p>

<h3>1. Zoomin äänenkäsittely</h3>
<p>Zoom voi vähentää järjestelmän ääntä, kun se aktivoituu. Tarkista Zoom → Settings → Audio ja poista käytöstä "Automaattinen mikrofonin äänenvoimakkuuden säätäminen". Kokeile myös vähentää melunvaimennusta "korkeasta" "matalaksi".</p>

<h3>2. Bluetooth-koodekin vaihto</h3>
<p>Kun sovellus aktivoi Bluetooth-kuulokkeidesi mikrofonin, macOS vaihtaa AAC:sta SCO-koodekkiin. Tämä ei oikeastaan ole "väistymistä" — se on koodekin muutos, joka saa kaiken kuulostamaan hiljaisemmalta ja heikommalta. Korjaa se käyttämällä erillistä mikrofonia.</p>

<h3>3. Kolmannen osapuolen sovellus tekee sen</h3>
<p>Joissain äänisovelluksissa (kuten taustamusiikki) on automaattinen tauko tai automaattinen ohjaaminen. Jotkut mediasovellukset laskevat omaa äänenvoimakkuuttaan, kun ne havaitsevat toisen äänilähteen. Tarkista kaikki ääniapuohjelmat, jotka olet asentanut.</p>

<h3>4. Viestintäsovellukset säätävät ääntä</h3>
<p>Discordilla, Teamsilla ja muilla viestintäsovelluksilla on oma äänenkäsittelynsä, joka voi vaikuttaa muiden sovellusten koettuun äänenvoimakkuuteen. Tarkista jokaisen sovelluksen ääniasetuksista "automaattinen säätö" ja poista ne käytöstä.</p>

<h2>Kuinka estää ei-toivottu kumartuminen</h2>

<ol>
  <li><strong>Tarkista Zoomin/Teamsin/Discordin ääniasetukset</strong> — poista automaattinen äänenvoimakkuuden/mikrofonin säätö käytöstä</li>
  <li><strong>Käytä erillistä mikrofonia puheluihin</strong> — estää Bluetooth-koodekin vaihdon</li>
  <li><strong>Poista äänityökalut</strong> — Taustamusiikki, Soundflower tai mikä tahansa sovellus, joka saattaa siepata ääntä</li>
  <li><strong>Tarkista macOS saavutettavuus</strong> — Järjestelmäasetukset → Saavutettavuus → Ääni mahdollisia odottamattomia asetuksia varten</li>
</ol>

<h2>Korvaa huono ankkarointi hyvällä ankkarilla</h2>

<p>Audio duckingin idea on itse asiassa loistava — taustaääni lasketaan automaattisesti puheluiden aikana, jotta kuulet selvästi. Ongelma on, kun se on liian aggressiivinen (musiikki menee nollaan), ei voi säätää (et voi valita, kuinka paljon lasket) tai laukaisee väärän asian.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Siinä on sisäänrakennettu automaattinen kumartelutoiminto, joka antaa sinulle hallinnan:</p>

<ul>
  <li><strong>Konfiguroitava ankkataso:</strong> Valitse tarkalleen, kuinka paljon taustaääntä lasket puheluiden aikana — 10 %:sta (lähes äänettömästi) 80 %:iin (juuri ja juuri vähennettynä). Oletusarvo on 30 %, mikä pitää musiikin kuuluvana, mutta ei häiritsevänä.</li>
  <li><strong>Älykäs tunnistus:</strong> Tunnistaa puhelut seuraamalla mikrofonin käyttöä — sama indikaattori kuin macOS:n oranssi piste. Toimii Zoomin, Teamsin, FaceTimen, Discordin, Slackin, Google Meetin, Webexin ja Skypen kanssa.</li>
  <li><strong>Täydellinen restaurointi:</strong> Kun puhelu päättyy, jokainen sovellus palaa täsmälleen aiempaan äänenvoimakkuuteensa. Ei säätämistä uudelleen.</li>
  <li><strong>Helppo kytkeäminen:</strong> Ota automaattinen kumartelu päälle tai pois SoundDial:n asetuksista. Kun et halua sitä, poista se käytöstä. Kun haluat sen takaisin, ota se käyttöön.</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial konfiguroitava automaattinen alentaminen — hallitse tarkalleen, kuinka paljon taustaääntä alentaa puheluiden aikana" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ero: sen sijaan, että jokin sovellus päättäisi, että musiikkisi pitäisi mennä nollaan jokaisen puhelun aikana, sinä päätät, että musiikki menee 25 %:iin. Sen sijaan, että menettäisit hallinnan, saat sen. Ja sen sijaan, että yrittäisit poistaa piilotetun ominaisuuden käytöstä kolmessa eri sovelluksessa, sinulla on yksi kytkin yhdessä paikassa.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Bluetooth-kuulokkeet liian hiljaiset Mac? Jokainen toimiva korjaus",
    description:
      "Bluetooth-kuulokkeet toimivat hyvin puhelimessa, mutta kuulostavat hiljaisilta Mac. Tässä kaikki syyt — koodekkiongelmista macOS äänenvoimakkuusrajoituksiin — ja miten jokainen niistä voi korjata.",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>Bluetooth-kuulokkeesi ovat puhelimessa todella äänekkäät. Yhdistät ne Mac — ja kaikki on hiljaisempaa. Musiikki kuulostaa vaimealta. Puheluita on vaikea kuulla. Olet saanut äänenvoimakkuuden maksimiin, mutta se ei silti riitä. Mikä hätänä?</p>

<p>Bluetooth-äänessä Mac on useita äänenvoimakkuuden vähentäviä tekijöitä, joita puhelimissa ei ole. Tässä jokainen ja miten sen voi korjata.</p>

<h2>1. Kuulokkeiden turvallisuus rajoittaa äänenvoimakkuuttasi</h2>

<p>macOS on sisäänrakennettu ominaisuus, joka rajoittaa kuulokkeiden äänenvoimakkuutta suojatakseen kuuloasi. Se mittaa äänen altistumista ajan myötä ja laskee maksimivolyymia, jos luulee sinun kuunnelleen liian kovaa.</p>

<p>Mennä <strong>Järjestelmäasetukset → ääni → kuulokkeiden turvallisuus</strong>. Jos "Reduce Loud Audio" on käytössä, poista se käytöstä tai nosta kynnysarvoa. Tämä on yleisin syy siihen, miksi Bluetooth-kuulokkeet ovat hiljaisemmat Mac kuin puhelimessa.</p>

<h2>2. Bluetooth-koodekin yhteensopimattomuus</h2>

<p>Puhelimesi saattaa yhdistää kuulokkeisiin laadukkaamman koodekin (aptX, LDAC, AAC) avulla, kun taas Mac oletuksena SBC:hen (perusBluetooth-koodekki). Eri koodekeilla on erilaiset maksimiäänenvoimakkuuden ominaisuudet.</p>

<p>macOS käyttää yleensä AAC:ta Apple-laitteille ja SBC:tä kolmannen osapuolen kuulokkeille. Jos kuulokkeesi tukevat aptX:ää tai LDACia, macOS ei käytä niitä — Apple tukee vain AAC:ta ja SBC:tä.</p>

<p><strong>Korjaus:</strong> Koodekin valinnalle ei voi tehdä paljoa macOS. Mutta tämän tietäminen selittää, miksi samat kuulokkeet saattavat kuulostaa erilaiselta (ja mahdollisesti hiljaisemmilta) Mac verrattuna Android-puhelimeen, jossa on LDAC.</p>

<h2>3. Mikrofonin aktivointi laukaisee SCO:n</h2>

<p>Kun jokin sovellus aktivoi Bluetooth-kuulokkeidesi mikrofonin (Zoom, FaceTime, Siri, sanelu), macOS vaihtaa AAC:sta SCO-koodekkiin. SCO suunniteltiin puheluihin vuonna 2004 — se kuulostaa kamalalta ja on huomattavasti hiljaisempi.</p>

<p><strong>Korjaus:</strong> Käytä erillistä mikrofonia (sisäänrakennettu Mac mikrofoni tai USB-mikrofoni) ja pidä Bluetooth-kuulokkeet vain ulostulona. Puhelusovelluksen asetuksissa aseta Mac mikrofonin sisääntulo ja kuulokkeiden ulostulo. Tämä estää SCO-kytkimen.</p>

<h2>4. Bluetoothin äänenvoimakkuussynkronointiongelma</h2>

<p>Bluetooth-audiossa on kaksi äänenvoimakkuuden säätöä: yksi Mac-puolella ja toinen kuulokkepuolella. Niiden pitäisi pysyä synkronoituina, mutta ne voivat ajautua erilleen — Mac näyttää 100 %, mutta kuulokkeet eivät oikeasti ole täysillä.</p>

<p><strong>Korjaus:</strong> Irrota kuulokkeet (Järjestelmäasetukset → Bluetooth → klikkaa "i" → Katkaise yhteys), odota 5 sekuntia, yhdistä uudelleen. Tämä synkronoi äänenvoimakkuuden uudelleen. Joissakin kuulokkeissa on myös omat äänenvoimakkuuspainikkeet — varmista, että nekin ovat maksimitasolla.</p>

<h2>5. Heikkolaatuinen Bluetooth-yhteys</h2>

<p>Etäisyys, häiriöt (WiFi-reitittimet, USB 3.0 -laitteet) ja esteet Mac ja kuulokkeiden välillä voivat heikentää Bluetooth-signaalin laatua. Kun signaali on heikko, macOS voi alentaa äänen bittinopeutta, mikä voi vaikuttaa havaittuun äänenvoimakkuuteen ja laatuun.</p>

<p><strong>Korjaus:</strong> Siirry lähemmäs Mac. Irrota muut Bluetooth-laitteet, joita et käytä. Siirrä USB 3.0 -keskittimet pois Mac:stä (USB 3.0 aiheuttaa häiriöitä Bluetoothin käyttämässä 2,4 GHz taajuudessa).</p>

<h2>6. Kuulokkeet itsessään</h2>

<p>Joissakin Bluetooth-kuulokkeissa on matalampi maksimiääni kuin toisilla. Overear-kuulokkeet, joissa on suuremmat ohjaimet, ovat yleensä kovempia kuin nappikuulokkeet. Melua vaimentavien kuulokkeiden äänenvoimakkuusrajoitukset voivat olla sisäänrakennettuna laiteohjelmistoon.</p>

<p>Tarkista kuulokevalmistajan sovellus (Sony Headphones Connect, Bose Music, Sennheiser Smart Control jne.) äänenvoimakkuuden rajoitusasetuksia varten. Joissakin kuulokkeissa on "turvallisen kuuntelun" tila, joka rajoittaa äänenvoimakkuutta.</p>

<h2>Vielä hiljaa? Boost yli 100 %</h2>

<p>Jos olet tarkistanut kaiken yllä mainitun ja kuulokkeesi ovat edelleen liian hiljaiset Mac, tarvitset äänenvoimakkuuden vahvistuksen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> nostaa minkä tahansa sovelluksen äänenvoimakkuutta <strong>200%</strong>. Jos Spotify Bluetooth-kuulokkeiden kautta on liian hiljainen, vedä liukusäädin 160 %:iin. Äänisignaali vahvistuu ennen kuin se saavuttaa kuulokkeesi, mikä käytännössä kaksinkertaistaa sovelluksen käytettävissä olevan äänenvoimakkuuden.</p>

<img src="/apps/sounddial.png" alt="SoundDial Bluetooth-kuulokkeiden sovelluksen äänenvoimakkuuden nostaminen Mac-laitteissa sovelluskohtaisilla liukusäätimillä 200 %:iin" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Sovelluskohtainen boostaus on parempi kuin koko järjestelmän äänenvoimakkuuden korotus, koska voit vahvistaa vain hiljaisen sovelluksen. Jos podcastisi on hiljainen mutta musiikki toimii, nosta podcast-sovellus 170 %:iin ja pidä Spotify 80 %:ssa. Jokainen sovellus pysyy oikealla tasolla.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac Audio OBS:lle ja suoratoistoon: Kuinka hallita sitä, mitä yleisösi kuulee",
    description:
      "Suoratoistatko Mac:ssa OBS:n kanssa? Katsojasi kuulevat kaiken samalla äänenvoimakkuudella — peli, musiikki, ilmoitukset, Discord. Näin äänilähteet tasapainotetaan oikein.",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>Striimaat Mac OBS:n kautta. Pelisi ääni on kova ääni. Discord-puhelusi pyörii. Spotify soittaa taustamusiikkia. Hälytysääni kuuluu, kun joku tilaa. Katsojasi kuulevat kaiken tämän samalla äänenvoimakkuudella — kaoottinen sekasotku, jossa Discordin huudot kilpailevat räjähdysten kanssa ja musiikki peittää kommentaarisi.</p>

<p>Ydinongelma: macOS antaa yhden äänilähdön, ja OBS tallentaa sen yhtenä yhdistettynä striimina. Et voi sanoa, että OBS "kaappaa peli 40 %, Discord 80 % ja Spotify 20 %", koska macOS ei erota niitä.</p>

<h2>Mac suoratoistoääniongelma</h2>

<p>Windowsissa OBS voi tallentaa yksittäisen sovelluksen äänen natiivisti. Lisäät jokaisen sovelluksen erilliseksi äänilähteeksi ja miksaat ne erikseen OBS:n sisällä. Mac tämä ei ole sisäänrakennettu. OBS macOS voi tallentaa:</p>

<ul>
  <li><strong>Työpöytä-ääni</strong> — kaikki, mitä Mac soittaa, yhdistettynä yhdeksi striimiksi</li>
  <li><strong>Mikrofoni/apu</strong> — mikrofonitulosi</li>
  <li><strong>Sovelluksen äänenkaappaus (macOS 13+)</strong> — tallentaa tietyn sovelluksen ääni, mutta asetus on manuaalinen ja rajoitettu</li>
</ul>

<p>Application Audio Capture -lähdekoodi (lisätty OBS 30+:ssa) toimii yhden sovelluksen eristämiseen, mutta viiden eri tasojen äänilähteen hallinta OBS:ssä on monimutkaista, eikä kaikki sovellukset tee yhteistyötä.</p>

<h2>Yksinkertaisempi lähestymistapa: hallintatasot ennen kuin OBS tallentaa ne</h2>

<p>Sen sijaan, että yrittäisit erottaa äänen OBS:n sisällä, säädä jokaisen sovelluksen äänenvoimakkuutta <em>ennen</em> se tavoittaa OBS:n työpöydän äänitallennuksen. Jos lasket Spotifyn 20 %:iin ja nostat Discordin 90 %:iin järjestelmätasolla, OBS:n työpöytääänen tallennus nappaa jo valmiiksi tasapainotetun miksauksen.</p>

<p>Juuri näin <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Tekee. Aseta jokainen sovellus sille tasolle, jonka haluat katsojiesi kuulevan:</p>

<img src="/apps/sounddial.png" alt="SoundDial tasapainottaa pelin, Discordin ja musiikin äänitasot OBS-striimaukseen Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Tyypillinen suoratoistoäänijärjestelmä</h3>
<ul>
  <li><strong>Peli:</strong> 50 % — läsnä, mutta ei ääntä liian voimakkaasti</li>
  <li><strong>Discord / äänichat:</strong> 80 % — poista joukkueesi kutsut</li>
  <li><strong>Spotify / musiikki:</strong> 15 % — hienovarainen taustatunnelma</li>
  <li><strong>Striimin hälytykset (selain):</strong> 40 % — kuuluva, mutta ei järkyttävä</li>
  <li><strong>Slack / ilmoitukset:</strong> mykistetty — katsojien ei tarvitse kuulla yksityisviestejäsi</li>
</ul>

<h3>Tallenna se "Streaming"-profiilina</h3>
<p>Tallenna tämä asetus äänenvoimakkuusprofiiliksi SoundDial. Ennen kuin siirryt liveen, käytä "Streaming"-profiilia yhdellä klikkauksella. Jokainen sovellus hyppää suoratoistoon optimoidulle tasolleen. Kun olet lopettanut striimauksen, vaihda takaisin "Normaali"- tai "Peliprofiiliisi".</p>

<h2>Mitä kuulet vs. katsojat kuulevat</h2>

<p>Kun SoundDial säätää sovelluskohtaista äänenvoimakkuutta järjestelmätasolla, sekä sinä että katsojasi kuulette saman tasapainoisen miksauksen. Tämä on helpompaa kuin yrittää ylläpitää erillisiä miksauksia (yksi itsellesi, yksi streamille) — mikä vaatii virtuaalisia äänilaitteita ja monimutkaista reititystä, joka on hauraasti Mac.</p>

<p>Jos tarvitset täysin erillisen miksauksen striimillesi verrattuna kuulokkeisiin (esim. haluat kuulla Discordin kovempaa kuin katsojat), tarvitset monimutkaisemman reititysjärjestelmän virtuaaliäänilaitteilla. Mutta useimmille striimaajille yksi hyvin tasapainotettu miksaus — helposti ohjattavissa valikkopalkista — on juuri sitä, mitä tarvitaan.</p>

<h2>Miksi sovelluskohtainen ohjaus voittaa pelkän OBS-miksauksen</h2>

<ul>
  <li><strong>Välittömät säädöt:</strong> Kesken striimin katsoja sanoo, että peli on liian äänekäs. Klikkaa valikkopalkkia, vedä yksi liukusäädin. Valmista. Ei taukoa, ei OBS-asetusten avaamista.</li>
  <li><strong>Työt OBS:n ulkopuolella:</strong> Tasapainotettu äänijärjestelmä toimii, vaikka et striimaisi. Samat profiilit, sama mukavuus.</li>
  <li><strong>Ei virtuaalisia äänilaitteita:</strong> SoundDial käyttää Applen natiivia Audio Tap API:ta — ei Soundfloweria, ei Blackholea, ei ajureita, jotka hajoavat macOS päivityksissä.</li>
</ul>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-arvostelu, 14,99 € kertaluonteinen ostos, ei tilausta, macOS 14,2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Kuinka saada Mac muistamaan volyymin per sovellus",
    description:
      "Joka kerta kun käynnistät Spotifyn tai Zoomin uudelleen, äänenvoimakkuutta täytyy säätää uudelleen. Näin saat macOS muistamaan jokaisen sovelluksen äänenvoimakkuuden automaattisesti.",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>Käytät viisi minuuttia saadaksesi äänitasosi täydellisiksi. Spotify 30 %, Zoom 100 %, Slack 15 %. Sitten aloitat Mac alusta. Tai Slack kaatuu ja käynnistyy uudelleen. Tai suljet Spotifyn ja avaat sen myöhemmin uudelleen. Jokainen sovellus palautuu oletusäänenvoimakkuuteensa. Säädät kaiken uudelleen. Taaskin.</p>

<p>macOS muistaa järjestelmän äänenvoimakkuuden uudelleenkäynnistysten aikana. Mutta se ei muista sovelluskohtaista volyymia — koska macOS ei alun perinkään ole sovelluskohtaista äänenvoimakkuuden säätöä. Ei ole mitään muistettavaa.</p>

<h2>Miksi sovellukset eivät muista omaa volyymiaan</h2>

<p>Joissakin sovelluksissa (kuten Spotify ja VLC) on sisäiset äänenvoimakkuuden liukusäätimet, jotka tallennetaan istuntojen väliin. Mutta useimmilla sovelluksilla — selaimilla, viestintätyökaluilla, järjestelmätyökaluilla — ei ole omia äänenvoimakkuuden säätöjä. Ja jopa sovellukset, jotka tallentavat sisäisen volyymin, muistavat vain oman liukusäätimen sijaintinsa, eivät volyymia suhteessa muihin sovelluksiin.</p>

<p>Mitä oikeasti haluat, on <em>Järjestelmä</em> muista: "Spotify pitäisi olla 30 % järjestelmän volyymista, aina." macOS ei tue tätä ajatusta.</p>

<h2>Volyymimuisti SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> on <strong>Tilavuusmuisti</strong> feature. Kun se on käytössä, se tallentaa jokaisen sovelluksen äänenvoimakkuuden nipun tunnisteen mukaan. Kun sovellus sulkeutuu ja käynnistyy uudelleen — käynnistitpä sen uudelleen, se kaatuu tai käynnistät Mac uudelleen — SoundDial palauttaa sen automaattisesti tallennettuun volyymiinsa.</p>

<img src="/apps/sounddial.png" alt="SoundDial volyymimuisti — muistaa ja palauttaa automaattisesti sovelluskohtaiset äänenvoimakkuustasot macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Miten se toimii</h3>
<ol>
  <li>Ota käyttöön "Remember volume per app" SoundDial:n asetuksista</li>
  <li>Aseta jokainen sovellus haluamallasi äänenvoimakkuudella</li>
  <li>SoundDial tallentaa tason automaattisesti</li>
  <li>Kun sovellus käynnistyy uudelleen, äänenvoimakkuus palautuu täsmälleen siihen kohtaan, missä se oli</li>
</ol>

<p>Ei manuaalista tallennusta. Ei säätämistä uudelleen. Ensimmäinen kerta, kun asetat äänenvoimakkuutesi, on viimeinen kerta.</p>

<h3>Mitä muistetaan</h3>
<ul>
  <li><strong>Äänenvoimakkuustaso</strong> — tarkka prosenttiosuus (0 % – 200 %)</li>
  <li><strong>Mykkä tila</strong> — jos mykistäisit sovelluksen, se pysyy mykistetyksi uudelleenkäynnistyksessä</li>
  <li><strong>Per sovellus</strong> — jokaisen sovelluksen volyymi tallennetaan itsenäisesti bundle ID:n avulla</li>
</ul>

<h3>Uudet sovellukset saavat oletusäänenvoimakkuuden</h3>
<p>Kun sovellus käynnistyy ensimmäistä kertaa (sellainen, jota SoundDial ei ole aiemmin nähnyt), se saa konfiguroitavan oletusvolyymin. Voit asettaa tämän oletuksena SoundDial:n asetuksista — eli uudet sovellukset alkavat 80 %:sta (tai mistä tahansa haluat) sen sijaan, että ne mahdollisesti räjäyttäisivät 100 %:sta.</p>

<h2>Volume-muisti + profiilit = aseta ja unohda</h2>

<p>Volyymimuisti hoitaa päivittäiset toiminnot: sovellukset säilyttävät tasonsa uudelleenkäynnistysten aikana. Profiilit hoitavat tilannekohtaisen vaihdon: "Kokous"-tila, "Focus"-tila, "Pelaaminen"-tila — aktivoi ne yhdellä klikkauksella ja jokainen sovellus hyppää oikealle tasolle kyseiseen tilanteeseen.</p>

<p>Yhdessä äänenvoimakkuuden liukusäädintä säädetään lähes koskaan manuaalisesti. Sovellus muistaa viimeisen tasonsa, ja kun vaihdat kontekstia, profiili asettaa kaiken kerralla.</p>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-arvostelu, 14,99 € kertaluonteinen ostos, ei tilausta, macOS 14,2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Podcastin äänenvoimakkuus liian matala Mac? Kuinka tehdä siitä kovempaa",
    description:
      "Jotkut podcastit ovat kuiskauksen hiljaisia Mac jopa maksimivolyymeilla. Tässä syyt — ja miten podcastin ääni voi nostaa yli 100 % vaikuttamatta muihin sovelluksiin.",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>Kuuntelet podcastia Mac. Juontaja kuulostaa hyvältä, mutta vieras — joka nauhoittaa kannettavan tietokoneen mikrofonista keittiössään — on tuskin kuultavissa. Käännät äänenvoimakkuuden täysille. Isäntä on nyt liian äänekäs, mutta vieras on yhä hiljaa. Voittoa ei ole mahdollista, koska ongelma on tallenteessa, ei Mac.</p>

<p>Podcastin äänenlaatu vaihtelee suuresti. Ammattilaisohjelmat hallitaan tasaisella tasolla. Mutta haastatteluissa, indie-podcasteissa ja live-äänityksissä vieraat ovat usein -20 dB tai alle — huomattavasti hiljaisempia kuin juontaja tai intro-musiikki.</p>

<h2>Miksi jotkut podcastit ovat niin hiljaisia</h2>

<ul>
  <li><strong>Vierasmikrofonin laatu:</strong> Yhdellä isännällä on ammattimainen kokoonpano, vieras käyttää AirPodsia. Tasoero voi olla 15+ dB.</li>
  <li><strong>Ei jälkituotantoa:</strong> Ammattimaisesti tuotetut podcastit tiivistävät ja normalisoivat tasoja. Monet eivät.</li>
  <li><strong>Podcast-sovellukset eivät normalisoi tilannetta:</strong> Apple Podcastit ja Spotify käyttävät podcast-sisällölle minimaalista tai ei lainkaan äänenvoimakkuuden normalisointia (toisin kuin musiikissa).</li>
  <li><strong>Dynaaminen alue:</strong> Jotkut podcast-tuottajat ylläpitävät tarkoituksella korkeaa dynaamista aluetta "luonnollisen" äänen saavuttamiseksi — mikä tarkoittaa, että hiljaiset osat ovat hyvin hiljaisia.</li>
</ul>

<h2>Sovelluksen sisäiset korjaukset</h2>

<h3>Apple Podcastit</h3>
<p>Apple Podcastsissa ei ole äänenvoimakkuuden normalisointia tai boost-ominaisuutta. Mitä podcast tarjoaa, sitä saat. Vanhemmissa versioissa sovelluksen sisäinen äänenvoimakkuuden säätö poistettiin — nyt se käyttää vain järjestelmän äänenvoimakkuutta.</p>

<h3>Spotify</h3>
<p>Spotifyn "Normalize volume" -asetus (Settings → Playback) voi auttaa äänenvoimakkuuden yhdenmukaisuudessa eri podcastien välillä, mutta sen vaikutus jakson sisäiseen dynamiikkaan on rajallinen. Kokeile asettaa se "Kovaääninen" maksimaalisen normalisoinnin saavuttamiseksi.</p>

<h3>Overcast (selain)</h3>
<p>Jos käytät Overcastia (verkon kautta overcast.fm), siinä on "Voice Boost" -ominaisuus, joka vahvistaa ja pakkaa podcast-ääntä merkittävästi, tehden hiljaisista äänistä kovempia. Tämä on yksi parhaista sisäänrakennetuista ratkaisuista — mutta toimii vain Overcastissa.</p>

<h2>Järjestelmätason korjaus: nosta podcast-sovellukset yli 100 %:n</h2>

<p>Universaali ratkaisu on vahvistaa podcast-sovellustasi yli macOS:n 100 % rajan. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa jokaiselle sovellukselle äänenvoimakkuuden liukusäätimen <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial Apple Podcastsin äänenvoimakkuuden nostaminen 180 %:iin Mac hiljaisille podcast-jaksoille" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Aseta Apple Podcasts tai podcast-sovellus 160–180 %:iin pitäen Spotify-musiikin 40%:ssa ja Slackin 15%:ssa. Podcast kovenee ilman, että kaikki muu muuttuu tuskallisen kovaa. Kun vaihdat takaisin musiikkiin, laita podcast-sovellus takaisin normaaliksi — tai anna SoundDial:n äänenvoimakkuusmuistin muistaa se automaattisesti.</p>

<p>Tämä sovelluskohtainen lähestymistapa on parempi kuin koko järjestelmän volyymin nosto, koska:</p>
<ul>
  <li>Vain hiljainen podcast-sovellus voimistuu.</li>
  <li>Musiikki pysyy haluamallasi tasolla</li>
  <li>Puhelun ääni pysyy haluamallasi tasolla</li>
  <li>Ilmoitusäänet eivät yhtäkkiä muutu korvia huumaaviksi</li>
</ul>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-arvostelu, 14,99 € kertaluonteinen ostos, ei tilausta, macOS 14,2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Mac ääniasetelma verkkokursseille ja luennoille",
    description:
      "Luennon katsomista muistiinpanoja tehdessä, viitteitä googlaamista ja luokkatovereidensa kanssa juttelemista — kaikki eri äänenvoimakkuuksilla. Näin hallitset opiskelijoiden ääntä Mac.",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>Olet opiskelija, joka osallistuu verkkoluennolle Zoomissa. Sinulla on YouTube-opas auki toisessa välilehdessä viitteeksi. Luokkatoverisi juttelevat Discordissa. Spotify soittaa taustalla lo-fi-biittejä. Mac käsittelee näitä kaikkia yhtenä niteisenä. Hiljennä lo-fi, etkä kuule professoria. Nosta luentoa ja Discordin pingit rikkovat keskittymiskykysi.</p>

<p>macOS on yksi äänenvoimakkuuden liukusäädin kaikkeen. Opiskelijoille, jotka tasapainottelevat useiden äänilähteiden kanssa, tämä on jatkuva kitkapiste.</p>

<h2>Tyypillinen opiskelijoiden äänipino</h2>

<ul>
  <li><strong>Luentoalusta</strong> (Zoom, Teams, Google Meet, Webex) — täytyy olla kristallinkirkas, aina kuultavissa</li>
  <li><strong>Viiteaineisto</strong> (YouTube-opetusvideot, tallennetut luennot) — kohtalainen äänenvoimakkuus, vaatii tauotettavissa/säädettävissä</li>
  <li><strong>Opiskele musiikkia</strong> (Spotify, Apple Music) — matala taustataso, ei pitäisi kilpailla luennon kanssa</li>
  <li><strong>Chat</strong> (Discord, iMessage, Slack) — hienovaraiset ilmoitusäänet, eivät häiritseviä</li>
  <li><strong>Selaimen välilehdet</strong> — satunnaista automaattisesti toistavaa sisältöä, joka täytyy hiljentää välittömästi</li>
</ul>

<h2>macOS rajoitus</h2>

<p>Yhdellä järjestelmävolyymilla joudut tekemään kompromisseja. Aseta se tarpeeksi korkealle hiljaisen professorin mikrofonille, ja Spotify on liian kova. Säädä se mukavaan musiikkiin, ja luento on kuulumaton. Mykistämällä Spotify menetät taustamusiikin fokushyödyn. Mukavaa tasapainoa ei ole, koska jokainen sovellus on lukittu samalle tasolle.</p>

<h2>Sovelluskohtaisen äänen asettaminen opiskelua varten</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa jokaiselle sovellukselle oman äänenvoimakkuusliukusäätimen, jotta voit rakentaa ihanteellisen opiskeluääniasetuksen:</p>

<img src="/apps/sounddial.png" alt="SoundDial opiskelijan asetus — luento täysillä, opiskelumusiikki hiljaa, ilmoitukset mykistetty" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Luentoprofiili</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100 % — älä koskaan unohda sanaakaan</li>
  <li><strong>Spotify:</strong> 15 % — tuskin havaittava taustatunnelma</li>
  <li><strong>Discord:</strong> 10 % — vain hienovaraiset ilmoitukset</li>
  <li><strong>Selain:</strong> 40 % — tarvittaessa viitevideoiksi</li>
  <li><strong>iMessage:</strong> mykistetty — tarkista luokkien välillä</li>
</ul>

<h3>Itseopiskeluprofiili</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — musiikin opiskelumotivaatio</li>
  <li><strong>Selain:</strong> 70 % — opetusvideot selkeällä tasolla</li>
  <li><strong>Discord:</strong> 20 % — saatavilla tutkimusryhmälle</li>
  <li><strong>Kaikki muu:</strong> vaimennettu</li>
</ul>

<h3>Break-profiili</h3>
<ul>
  <li><strong>Kaikki:</strong> 60-80 % — rentoudu tuntien välillä</li>
</ul>

<p>Tallenna jokainen äänenvoimakkuusprofiiliksi ja vaihda niiden välillä yhdellä klikkauksella päivän edetessä. Kun luento alkaa, käytä "Luentoa" — automaattinen kumartelu hoitaa loput, jolloin musiikki laskee automaattisesti, kun professori puhuu mikrofonin kautta.</p>

<h2>Miksi tämä on tärkeää keskittymisen kannalta</h2>

<p>Tutkimukset osoittavat johdonmukaisesti, että oikea ääniympäristö parantaa keskittymistä ja säilyttämistä. Väärä sekoitus — musiikki liian kova, ilmoitukset liian tiheät, luento liian hiljainen — luo kognitiivista kuormitusta, jolla ei ole mitään tekemistä opiskelun materiaalin kanssa. Kun ääni saa oikein kerran, tallennat sen profiiliksi ja et ajattele sitä enää koskaan, poistuu jatkuva häiriötekijä.</p>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-arvostelu, 14,99 € kertaluonteinen ostos, ei tilausta, macOS 14,2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Mac ääni ei toimi päivityksen jälkeen? Täydellinen korjausopas",
    description:
      "Päivitit macOS ja nyt äänesi on poissa, rätisee tai jumissa väärällä äänenvoimakkuudella. Tässä on kaikki keinot, joilla saat Mac-äänesi taas toimimaan.",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>Päivitit macOS. Kaikki vaikutti olevan kunnossa — kunnes huomasit, ettei ääntä kuulunut. Tai ääni rätisee. Tai äänenvoimakkuus on jumissa. Tai äänilähtölaitteesi on poissa. Päivityksen jälkeiset ääniongelmat ilmenevät lähes jokaisessa macOS julkaisussa, ja ne vaihtelevat lievästä ärsyttävyydestä täysin äänettömään.</p>

<p>Tässä on systemaattinen opas Mac äänen korjaamiseen macOS-päivityksen jälkeen, kattaen kaikki tunnetut ongelmat ja ratkaisut.</p>

<h2>Vaihe 1: Tarkista ilmeiset asiat</h2>

<h3>Onko se mykistetty?</h3>
<p>Paina äänenvoimakkuuden nostopainiketta. Tarkista, näkyykö näytöllä äänenvoimakkuuden ilmaisin. Joskus päivitykset nollaavat järjestelmän äänenvoimakkuuden tai sallivat mykistyksen.</p>

<h3>Onko oikea lähtölaite valittu?</h3>
<p>Mene Järjestelmäasetuksiin → ääni → lähtö. Päivityksen jälkeen macOS vaihtaa joskus odottamattomaan lähtölaitteeseen — liitetyn näytön kaiuttimiin, Bluetooth-laitteeseen, joka ei ole kytkettynä, tai sisäänrakennettuihin kaiuttimiin, kun haluat ulkoisia. Valitse oikea laite.</p>

<h3>Rajoittaako kuulokkeiden turvallisuus äänenvoimakkuutta?</h3>
<p>Päivitykset palauttavat joskus Headphone Safetyn oletustilaan (käytössä). Tarkista järjestelmäasetukset → Sound → Headset Safety ja poista käytöstä "Reduce Loud Audio" -toiminto, jos se oli päällä päivityksen yhteydessä.</p>

<h2>Vaihe 2: Käynnistä Core Audio uudelleen</h2>

<p>Äänidaemon (coreaudiod) menee usein huonoon tilaan päivityksen jälkeen. Uudelleenkäynnistys on tehokkain ratkaisu.</p>

<p>Avaa terminaali ja käynnistä:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Ääni katkeaa hetkeksi ja käynnistyy uudelleen. Testaa, toimiiko ääni nyt. Jos tämä korjaa ongelman, ongelma oli vanhentunut äänidaemonin tila — yleinen päivitysten jälkeen.</p>

<h2>Vaihe 3: NVRAM/PRAM nollaa</h2>

<p>Intel Maceille: sammuta kokonaan ja käynnistä sitten pitäen painiketta pohjassa <strong>Option + Command + P + R</strong> noin 20 sekunnin ajan. Tämä nollaa NVRAMin, joka tallentaa volyymiasetukset, käynnistyslevyn valinnan ja muut matalan tason asetukset.</p>

<p>Apple Silicon -Maceille (M1/M2/M3/M4): NVRAM nollautuu automaattisesti tarvittaessa. Täysi uudelleenkäynnistys (ei pelkkä uni/hereilläolo) riittää yleensä.</p>

<h2>Vaihe 4: Tarkista kolmannen osapuolen ääniajurien ristiriidat</h2>

<p>macOS päivitykset rikkovat usein kolmannen osapuolen ääniajurit ja ytimen laajennukset. Jos sinulla on jokin näistä asennettuna, ne saattavat aiheuttaa ongelman:</p>

<ul>
  <li><strong>Soundflower</strong> — lopetettu, usein ristiriidassa uusien macOS kanssa</li>
  <li><strong>BlackHole</strong> — virtuaalinen äänilaite, saattaa tarvita päivitystä macOS päivitysten jälkeen</li>
  <li><strong>Loopback</strong> — saattaa tarvita uuden version päivitettyyn macOS</li>
  <li><strong>Taustamusiikki</strong> — asentaa virtuaalisen äänilaitteen, joka rikkoutuu usein päivityksissä</li>
  <li><strong>Ääniliitännän ajurit</strong> — Focusrite, Universal Audio jne. tarkista päivitetyt ajurit</li>
</ul>

<p><strong>Korjaus:</strong> Poista tai päivitä ristiriitainen ohjelmisto. Virtuaalisten äänilaitteiden kohdalla tarkista, näkyykö sovelluksen asentama äänilaite Järjestelmäasetuksissa → Ääni → Ulostulo -osiossa — jos näkyy ja se on valittu, vaihda oikeisiin kaiuttimiin. Päivitä tai poista sitten kolmannen osapuolen sovellus.</p>

<h2>Vaihe 5: Vikasietotilakäynnistys</h2>

<p>Käynnistä vikasietotilaan selvittääksesi, johtuuko ongelma käynnistyskohteesta vai kolmannen osapuolen laajennuksesta:</p>

<ul>
  <li><strong>Apple Silicon :</strong> Sammuta → pidä virtapainiketta pohjassa, kunnes "Latausasetukset" ilmestyy, → valitse käynnistyslevy → pidä Shiftiä pohjassa → klikkaa "Jatka vikasietotilassa"</li>
  <li><strong>Tiedustelu:</strong> Käynnistä uudelleen → pidä Shiftiä pohjassa käynnistyksen aikana, kunnes näet kirjautumisikkunan</li>
</ul>

<p>Jos ääni toimii vikasietotilassa, syynä on kolmannen osapuolen ytimen laajennus tai kirjautumiskohde. Tutki äskettäin asennettua ohjelmistoa.</p>

<h2>Vaihe 6: Luo uusi käyttäjätili</h2>

<p>Jos ongelma jatkuu, luo väliaikainen uusi käyttäjätili (Järjestelmäasetukset → Käyttäjät ja ryhmät → Lisää käyttäjä). Kirjaudu uudelle tilille ja testaa ääntä. Jos ääni toimii uudessa tilissä, ongelma on käyttäjäprofiilissasi — vioittunut asetustiedosto tai ääniasetus.</p>

<h2>Tulevien ongelmien estäminen SoundDial</h2>

<p>Yksi etu <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Muiden äänityökalujen sijaan: se ei asenna järjestelmän ääniajuria. Se käyttää Applen natiivia Core Audio Tap API:ta, mikä tarkoittaa, että se toimii siististi macOS päivitysten kanssa ilman virtuaalisten äänilaitteiden sovellusten ristiriitoja.</p>

<p>Jos olet käyttänyt Background Musicia tai Soundfloweria ja ne menivät rikki päivityksen jälkeen, SoundDial on korvaava laite, jossa ei ole samaa ongelmaa. Sovelluskohtainen äänenvoimakkuuden säätö, äänenvoimakkuuden nostaminen 200 %:iin, profiilit, automaattinen alistuminen — kaikki ilman kernel-laajennusta tai virtuaalista äänilaitetta.</p>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-arvostelu, 14,99 € kertaluonteinen ostos, ei tilausta, macOS 14,2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Kuinka mykistää kaikki sovellukset kerralla Mac:ssa (ja poistaa mykistö täydellisesti)",
    description:
      "Tarvitsetko välittömän hiljaisuuden? Mykistysnäppäin vaimentaa kaiken — mutta mykistö nollaa huolellisesti tasapainotetun äänenvoimakkuutesi. Tässä on parempi tapa mykistää ja palauttaa Mac.",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>Joku astuu huoneeseen. Pomosi soittaa yllättäen. Asiakas jakaa näyttönsä puhelun aikana ja musiikkisi alkaa soida kaiuttimista. Tarvitset välittömän hiljaisuuden. Juuri nyt.</p>

<p>Painat mykistysnäppäintä. Kaikki hiljenee. Kriisi vältetty.</p>

<p>Sitten hetki menee ohi. Painoit taas mykistysnäppäintä. Kaikki palaa takaisin — mutta järjestelmän volyymitasolla, joka ei muista, että Spotify oli 30%, Zoom 100% ja Slack 15%. Ne yksittäiset tasot? Poissa. Kaikki täytyy säätää manuaalisesti.</p>

<h2>Järjestelmän mykistysnäppäin: tylppä soitin</h2>

<p>Mac:n mykistysnäppäin (F10 tai kaiutin-slash-näppäin) mykistää <strong>Järjestelmän äänilähtö</strong>. Jokainen sovellus hiljenee samanaikaisesti. Mukistusten poistaminen palauttaa järjestelmän äänenvoimakkuuden entiseen tilaan — mutta koska macOS on vain yksi äänenvoimakkuuden liukusäädin, ei ole sovelluskohtaisia tasoja muistettavaksi tai palautettavaksi.</p>

<p>Tämä on ihan ok, jos käytät vain yhtä sovellusta kerrallaan. Ongelma on, jos sinulla on kuusi sovellusta huolellisesti tasapainotettuna eri tasoilla ja ne pitää hiljentää + palauttaa kaikki.</p>

<h2>Fiksumpi mykistys: sovelluskohtainen mykistää kaikki</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> on "Mute All" -pikanäppäin: <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Kun painat sitä:</p>
<ol>
  <li>Jokainen sovellus mykistetään erikseen (jokaisen sovelluksen äänenvoimakkuustila tallennetaan)</li>
  <li>Välitön hiljaisuus — aivan kuten mykistysnäppäin</li>
</ol>

<p>Kun painat sitä uudelleen:</p>
<ol>
  <li>Jokainen sovellus on mykistetty</li>
  <li>Jokainen sovellus palaa <strong>Juuri niin</strong> äänenvoimakkuus ennen kuin vaimensit</li>
  <li>Spotify palautuu 30 %:iin, Zoom 100 %:iin ja Slack 15 %:iin — täydellisesti palautettu</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial mykistyspikanäppäin — Control+Option+M mykistää ja poistaa kaikki sovellukset volyymin palautuksella" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ero järjestelmän mykistysnäppäimeen:</p>
<ul>
  <li><strong>Järjestelmän mykistys:</strong> mykistää ulostulon → poistaa mykistyksen, palauttaa yhden järjestelmävolyymin → per app -saldoa ei ole olemassa</li>
  <li><strong>SoundDial mykistää kaikki:</strong> mykistää jokaisen sovelluksen erikseen → poistaa mykistö palauttaa jokaisen sovelluksen yksittäisen äänenvoimakkuuden, → saldo säilyy</li>
</ul>

<h2>Kun tällä on merkitystä</h2>

<ul>
  <li><strong>Näytön jakaminen:</strong> Jaat näyttösi ja sinun täytyy hiljentää Mac ennen kuin toinen kuulee musiikkisi. ⌃⌥M → hiljaisuus → tee oma juttusi → ⌃⌥M → musiikki on palannut juuri oikealle tasolle.</li>
  <li><strong>Odottamaton keskeytys:</strong> Joku astuu sisään, tarvitset hiljaisuuden heti. Yksi pikakuvake, ei hiirtä, ei haparointia valikkopalkkiin.</li>
  <li><strong>Nopea puhelu:</strong> Pöytäpuhelimesi soi. Hiljennä Mac, vastaa puheluun, poistaa mykistö kun se on valmis. Kaikki palaa takaisin.</li>
</ul>

<p>Yhdistettynä <strong>⌃⌥S</strong> pikanäppäin (SoundDial popoverin vaihtaminen), voit hallita kaiken äänen kokonaan näppäimistöltä — avaa mikseri, säädä tasoja, sulje se ja mykistä/poistaa kaikki ilman, että kosket hiireen.</p>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Google Meetin äänenvoimakkuus liian matala Mac? Miten korjata se",
    description:
      "Google Meetin äänet ovat tuskin kuultavia jopa maksimivolyymissa. Tässä on, miksi Meet toimii Chromen kautta, mitä se tarkoittaa äänen kannalta ja miten sitä voi vahvistaa.",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meetillä ei ole natiivia Mac-sovellusta — se toimii selaimessasi. Tämä tarkoittaa, että Meetin ääni on osa Chromen (tai Safarin) äänivirtaa, ja mahdolliset äänenvoimakkuusongelmat liittyvät siihen, miten selaimesi käsittelee ääntä. Selvitetään se.</p>

<h2>1. Tarkista Meetin omat ääniasetukset</h2>

<p>Meet-puhelun aikana klikkaa kolmen pisteen valikkoa (⋮) → Asetukset → Ääni. Varmista, että oikea kaiutinlaite on valittu. Meet voi joskus oletuksena käyttää odottamatonta laitetta, erityisesti jos olet äskettäin yhdistänyt tai katkaissut äänilaitteiston.</p>

<h2>2. Tarkista selaimesi välilehtien volyymi</h2>

<p>Chromessa: napsauta Meet-välilehteä hiiren oikealla → varmista, että "Mykistä" EI ole valittuna. Mykistetty sivusto ei tuota ääntä riippumatta muista asetuksista.</p>

<p>Safarissa: klikkaa välilehden kaiutinkuvaketta varmistaaksesi, ettei se ole mykistynyt.</p>

<h2>3. Tarkista järjestelmän ulostulo</h2>

<p>Järjestelmäasetukset → ääni → ulostulo. Varmista, että oikea laite on valittu ja äänenvoimakkuus on maksimissa. Tarkista myös Headphone Safety -toiminto, jos käytät kuulokkeita.</p>

<h2>4. Chrome-ääniongelma</h2>

<p>Google Meet toimii Chrome-välilehdenä, ja Chromen ääniteho voi olla matalampi kuin omistettujen sovellusten. Chrome käsittelee ääntä oman renderöijänsä kautta, jolla on oma äänenvoimakkuuskatto. Jos Chromen kokonaisääni on matala, Meetin ääni on matala — vaikka macOS äänenvoimakkuus olisi 100%.</p>

<p>Chromella ei ole sisäänrakennettua tapaa nostaa ääntä maksimitasolle. macOS käsittelee Chromea yhtenä sovelluksena, jossa on yksi äänenvoimakkuustaso, ja tuo taso on maksimissaan 100%.</p>

<h2>5. Bluetooth-koodekkiongelma</h2>

<p>Jos käytät AirPodseja tai Bluetooth-kuulokkeita, Google Meetin mikrofonin aktivoiminen pakottaa Bluetooth-koodekin vaihtamaan AAC:sta SCO:hon. Tämä heikentää äänenlaatua ja äänenvoimakkuutta merkittävästi.</p>

<p><strong>Korjaus:</strong> Meetin ääniasetuksissa valitse Mac:n sisäänrakennettu mikrofoni tulolaitteeksi ja Bluetooth-kuulokkeet ulostulona. Tämä estää koodekin vaihdon ja ylläpitää korkealaatuista ääntä.</p>

<h2>6. Nosta Google Meet (Chrome) yli 100 %:n</h2>

<p>Jos Meet on edelleen liian hiljainen kaiken tarkistamisen jälkeen, sinun täytyy vahvistaa Chromen ääntä yli sen, mitä macOS sallii.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa Chromelle oman äänenvoimakkuusliukusäätimen, joka nousee <strong>200%</strong>. Koska Google Meet toimii Chromen sisällä, Chromen nostaminen parantaa Meetiä. Vedä liukusäädin 150 %:iin tai 180 %:iin, ja puhelun ääni vahvistuu reaaliajassa.</p>

<img src="/apps/sounddial.png" alt="SoundDial Google Meetin (Chrome) äänenvoimakkuuden nostaminen yli 100 %:n macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tämä toimii myös Safarissa, jos käytät Meetiä Safarissa. SoundDial ohjaa kutakin selainta erikseen — nosta Safari Meetille samalla kun Chrome pysyy normaalilla äänenvoimakkuudella kaikessa muussa.</p>

<p>Automaattisen kumartumisen yhteydessä taustamusiikki laskee automaattisesti, kun Meet-puhelu alkaa (mikrofoni aktivoituu) ja palautuu, kun puhelu päättyy.</p>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-arvostelu, 14,99 € kertaluonteinen ostos, ei tilausta, macOS 14,2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Kuinka asettaa Mac hälytysäänenvoimakkuus erilleen mediavolyymista",
    description:
      "macOS on piilotettu hälytysäänenvoimakkuuden liukusäädin, mutta se kattaa vain järjestelmän äänet. Näin voit todella erottaa ilmoituksen ja median äänenvoimakkuuden Mac.",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>Musiikkisi on täydellisellä tasolla. Sitten kuuluu macOS hälytysääni — "Funk"- tai "Tink"-ääniefekti — ja se on tuskallisen kovaääninen verrattuna musiikkiisi. Tai päinvastoin: hälytykset ovat kuulumattomia, koska järjestelmän äänenvoimakkuus on matala hiljaista taustamusiikkia varten.</p>

<p>Tarvitset kaksi erillistä äänenvoimakkuuden säätöä: yhden medialle (musiikki, puhelut, video) ja toisen hälytyksille ja ilmoituksille. macOS tukee tätä osittain, mutta täydellinen ratkaisu vaatii kolmannen osapuolen työkalun.</p>

<h2>macOS sisäänrakennettu hälytysvoimakkuus</h2>

<p>macOS on erillinen hälytysvoimakkuus. Mennä <strong>Järjestelmäasetukset → ääni</strong> ja etsi <strong>"Hälytysäänenvoimakkuus"</strong> liukusäädin. Tämä säätelee macOS järjestelmääänien äänenvoimakkuutta — virhepiippaukset, roskien tyhjennys, kuvakaappauksen suljin — erillään pääjärjestelmän äänenvoimakkuudesta.</p>

<p>Voit myös valita, mitä hälytysääntä käytät ja soitatko ääniefektejä valitsemasi lähtölaitteen vai sisäänrakennettujen kaiuttimien kautta.</p>

<h3>Mitä hälytysäänenvoimakkuus ohjaa</h3>
<ul>
  <li>macOS järjestelmän hälytysääniä (Funk, Tink, Bottle jne.)</li>
  <li>Finder-äänet (Roska, tiedostokopio valmis)</li>
  <li>Joitakin sisäänrakennettuja sovelluksen ääniä</li>
</ul>

<h3>Mitä se ei hallitse</h3>
<ul>
  <li>Slack-ilmoitusääniä</li>
  <li>Discord-ilmoitusääniä</li>
  <li>Teams/Zoom-äänet</li>
  <li>Sähköpostin ilmoitusäänet</li>
  <li>Minkä tahansa kolmannen osapuolen sovelluksen ilmoitusääniä kuuluu</li>
  <li>Selaimen ilmoitusäänet</li>
</ul>

<p>Kolmannen osapuolen sovellukset toistavat ilmoitusäänensä oman äänimoottorinsa kautta — niitä käsitellään tavallisena sovelluksen äänenä, ei järjestelmähälytyksinä. Hälytysäänenvoimakkuuden liukusäädin ei vaikuta heihin. Tämä tarkoittaa, että sovellukset, jotka tuottavat ärsyttävimpiä ilmoitusääniä (Slack, Discord, Teams), ovat niitä, joihin macOS hälytysäänenvoimakkuus ei yllä.</p>

<h2>Todellinen ratkaisu: ilmoitussovellusten volyymi per sovellus</h2>

<p>Jotta voit todella erottaa ilmoituksen äänenvoimakkuuden median äänenvoimakkuudesta, tarvitset sovelluskohtaisen äänenvoimakkuuden säädön. Aseta Slack 15 %, Discord 20 % ja Mail 10 % — pitäen Spotify 50 % ja selaimesi 60 %.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa jokaiselle sovellukselle oman äänenvoimakkuusliukusäätimen. Voit asettaa ilmoituspainotteiset sovellukset hienovaraiselle tasolle, joka on havaittavissa mutta ei hätkähtävinä, samalla kun mediasovellukset pysyvät mukavalla kuuntelutasolla.</p>

<img src="/apps/sounddial.png" alt="SoundDial erottaa ilmoitussovelluksen äänenvoimakkuuden mediasovelluksen äänenvoimakkuudesta macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Esimerkkiasetelma</h3>
<p><strong>Mediasovellukset:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60 %</li>
  <li>QuickTime/VLC: 70 %</li>
</ul>

<p><strong>Ilmoitussovellukset:</strong></p>
<ul>
  <li>Slack: 15%</li>
  <li>Discord: 20 %</li>
  <li>Posti: 10%</li>
  <li>Kalenteri: 25 %</li>
</ul>

<p><strong>Viestintäsovellukset:</strong></p>
<ul>
  <li>Zoom/Teams: 100 %</li>
  <li>FaceTime: 100 %</li>
</ul>

<p>Tallenna tämä profiiliksi ja lisää se yhdellä klikkauksella. Ilmoitusten ja median äänenvoimakkuuden välinen ero, jota macOS ei tarjoa natiivisti — hoidettu alle minuutissa.</p>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-arvostelu, 14,99 € kertaluonteinen ostos, ei tilausta, macOS 14,2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Onko FaceTime-puhelun määrä liian matala Mac? Miten korjata se",
    description:
      "FaceTime-ääni on tuskin kuultavissa Mac edes täydellä volyymilla. Tässä kaikki korjaukset — ääniasetuksista FaceTimen nostamiseen yli 100 %:iin.",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>FaceTime-puhelut iPhonellasi ovat ok. Mutta sinun Mac toinen henkilö kuulostaa kuiskaavan kolmen huoneen päästä. Äänenvoimakkuus on maksimissa. Olet tarkistanut kaiken, mitä keksit. Yhä liian hiljaista.</p>

<p>Matala FaceTime-äänenvoimakkuus Mac on yleinen ongelma, ja siihen voi vaikuttaa useita mahdollisia syitä. Käydään jokainen läpi.</p>

<h2>1. Tarkista lähtölaite</h2>

<p>Mene Järjestelmäasetuksiin → ääni → lähtö. Varmista, että oikea laite on valittu. Jos olet äskettäin yhdistänyt tai irrottanut kuulokkeet, näytön tai Bluetooth-laitteet, macOS saattoi vaihtaa automaattisesti odottamattomaan lähtöön — kuten näyttöön, jossa on juuri ja juuri toimivat sisäänrakennetut kaiuttimet.</p>

<h2>2. Tarkista FaceTimen ääniasetukset</h2>

<p>FaceTime-puhelun aikana klikkaa valikkopalkkia ja valitse FaceTime → Video → valitse oikea lähtölaite Audio Output -kohdasta. FaceTime voi joskus käyttää eri lähtölaitetta kuin järjestelmän oletus, erityisesti laitteen vaihdon jälkeen.</p>

<h2>3. Poista AirPodsin automaattinen vaihto käytöstä</h2>

<p>Jos sinulla on AirPods yhdistettynä useisiin Apple-laitteisiin, ne saattavat automaattisesti vaihtaa pois Mac puhelun aikana. Tarkista järjestelmäasetukset Bluetoothin → → klikkaa "i" AirPodsien vieressä → "Connect to This Mac" → asetettuna "When Last Connected to This Mac" -tilaan "Automaatti"-asetuksen sijaan, jotta puhelun kesken vaihtaminen ei onnistu.</p>

<h2>4. Bluetooth-koodekkiongelma</h2>

<p>AirPodsin tai Bluetooth-kuulokkeiden käyttäminen FaceTimen kanssa laukaisee AAC:sta SCO:hun -koodekkikytkiä (koska FaceTime käyttää mikrofonia). SCO heikentää äänenlaatua ja äänenvoimakkuutta. Käytä erillistä mikrofonia (sisäänrakennettu Mac mikrofoni tai USB) pitääksesi AirPodsit korkealaatuisessa AAC-tilassa.</p>

<h2>5. Kuulokketurva rajoittaa äänenvoimakkuutta</h2>

<p>Järjestelmäasetukset → ääni → kuulokkeiden turva. Jos "Reduce Loud Audio" on päällä, macOS rajoittaa kuulokkeiden äänenvoimakkuutta. Poista se käytöstä tai nosta kynnysarvoa.</p>

<h2>6. Nollaa Core Audio</h2>

<p>Avaa terminaali ja käynnistä:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Tämä käynnistää äänidemonin uudelleen ja voi korjata jumittuneet matalan äänenvoimakkuuden tilat. Palaa FaceTime-puheluun äänen käynnistyttyä.</p>

<h2>7. Nosta FaceTime-äänenvoimakkuus yli 100 %:n</h2>

<p>Jos kaikki asetukset ovat oikein ja FaceTime on edelleen liian hiljainen — ehkä toisen osapuolen mikrofoni on heikko — sinun täytyy vahvistaa macOS rajan yli.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> voit nostaa FaceTimen äänenvoimakkuutta jopa <strong>200%</strong>. Avaa valikkopalkkipaneeli, etsi FaceTime ja vedä sen liukusäädin yli 100 %:n. Puhelun ääni vahvistetaan reaaliajassa vaikuttamatta muihin sovelluksiin.</p>

<img src="/apps/sounddial.png" alt="SoundDial FaceTime-puheluiden äänenvoimakkuuden kasvattamista yli 100 %:n macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial auttaa myös päinvastoin: jos FaceTimen soittoääni tai ilmoitusääni on liian kova tarkennusajan aikana, laske FaceTime 20 %:iin tai mykistää se samalla kun musiikki jatkuu. Yksi klikkaus mykistää ja yksi klikkaus poistaa mykistyksen.</p>

<p>Saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Applen arvioima, hiekkalaatikko, kertaostos, ei tilausta.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac äänenvoimakkuuden pikanäppäimet, joita et todennäköisesti tiedä",
    description:
      "Perusäänenvoimakkuusnäppäimten lisäksi — tarkka ohjaus, tiettyjen sovellusten mykistys ja sovelluskohtaiset volyymipikanäppäimet. Jokainen Mac ääninäppäimistön temppu selitetty.",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>Jokainen Mac käyttäjä tuntee äänenvoimakkuuden ylös/alas/mykistyspainikkeet. Paina niitä ja järjestelmän äänenvoimakkuus muuttuu. Mutta macOS sisältää useita piilotettuja näppäimistöniksejä äänenhallinnassa, joita useimmat eivät koskaan löydä — sekä kolmannen osapuolen pikanäppäimet, jotka nopeuttavat äänenvoimakkuuden hallintaa huomattavasti.</p>

<h2>Sisäänrakennetut pikanäppäimet, jotka kaikkien pitäisi tietää</h2>

<h3>Hienotarkka äänenvoimakkuuden säätö</h3>
<p>Pidä <strong>Option + Shift</strong> ja paina äänenvoimakkuuden ylös- tai alaspäintä. Jokainen paino säätää äänenvoimakkuutta seuraavasti <strong>yksi neljännes</strong> normaali askel, jolloin saat 64 tasoa 16:n sijaan. Tämä on olennaista, jotta löydät oikean kuulokkeen äänenvoimakkuuden myöhään yöllä tai kun kahden normaalin askeleen välinen hyppy on liian suuri.</p>

<h3>Äänetön äänenvoimakkuuden säätö</h3>
<p>Pidä <strong>Vuoro</strong> ja paina volyymia ylös tai alas. Äänenvoimakkuus muuttuu, mutta kuultava takaisinkytkentä"-"pop"-ääni vaimenee. Hyödyllistä, kun säädät äänenvoimakkuutta puhelun tai esityksen aikana etkä halua pop-äänen leviävän kaikille.</p>

<h3>Siirry ääniasetuksiin</h3>
<p>Pidä <strong>Vaihtoehto</strong> ja paina mitä tahansa äänenvoimakkuusnäppäintä avataksesi Järjestelmäasetukset → Ääni suoraan. Nopeampaa kuin järjestelmäasetuksissa navigointi käsin.</p>

<h3>Nopea lähtölaitteen kytkin</h3>
<p>Pidä <strong>Vaihtoehto</strong> ja klikkaa Ääni-kuvaketta valikkopalkissa nähdäksesi listan kaikista saatavilla olevista lähtö- (ja tulo-) laitteista. Klikkaa yhtä vaihtaaksesi välittömästi. Ei tarvitse avata Järjestelmäasetuksia.</p>

<h2>Mitä macOS näppäimistöpikanäppäimet eivät pysty tekemään</h2>

<p>Kaikki yllä olevat pikakuvakkeet ohjaavat <strong>Järjestelmän tilavuus</strong> — yksi liukusäädin, joka vaikuttaa jokaiseen sovellukseen yhtä paljon. Sisäänrakennettuja näppäimistön pikanäppäimiä ei ole:</p>

<ul>
  <li>Tietyn sovelluksen äänenvoimakkuuden säätäminen</li>
  <li>Yhden sovelluksen mykistys ilman kaiken mykistystä</li>
  <li>Vaihto tallennetun äänenvoimakkuuden konfiguraatioiden välillä</li>
  <li>Äänenvoimakkuusmikserin paneelin kytkeminen</li>
</ul>

<p>macOS ei yksinkertaisesti sisällä sovelluskohtaista äänenvoimakkuuden säätöä, joten siihen ei ole pikanäppäimiä.</p>

<h2>Sovelluksekohtaiset äänenvoimakkuuspikanäppäimet SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Lisää kaksi globaalia näppäimistöpikanäppäintä, jotka laajentavat macOS mahdollisuuksia:</p>

<h3>Äänenvoimakkuuden mikserin kytkeminen: Control + Option + S</h3>
<p>Lehdistö <strong>⌃⌥S</strong> Mistä tahansa ja SoundDial:n popover avautuu valikkopalkkiin, jossa jokainen sovellus on oma äänenvoimakkuuden liukusäädin. Säädä tarvitsemaasi sisältöä, paina pikakuvaketta uudelleen (tai klikkaa pois) sulkeaksesi sen. Et koskaan poistu nykyisestä sovelluksestasi.</p>

<h3>Mykistä kaikki sovellukset: Control + Option + M</h3>
<p>Lehdistö <strong>⌃⌥M</strong> mykistää jokaisen sovelluksen äänen välittömästi. Paina sitä uudelleen poistaaksesi kaiken mykistyksen, palauttaen jokaisen sovelluksen aiempaan volyymiinsa. Tämä on "välitön hiljaisuus" -painike, joka on nopeampi kuin mykistysnäppäimen hakeminen — ja toisin kuin järjestelmän mykistysnäppäin, se palauttaa sovelluskohtaiset äänenvoimakkeet, kun poistat mykistyksen.</p>

<img src="/apps/sounddial.png" alt="SoundDial pikanäppäimet — Control+Option+S vaihtaaksesi, Control+Option+M mykistämään kaikki" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Näppäimistöpohjainen työnkulku</h2>

<p>Kun SoundDial:n pikakuvakkeet ovat käytössä, voit hallita kaikkea ääntä koskematta hiireen:</p>

<ol>
  <li><strong>⌃⌥S</strong> — avaa mikseri</li>
  <li>Käytä nuolinäppäimiä tai hiirtä säätääksesi yksittäisiä liukusäätimiä</li>
  <li><strong>⌃⌥S</strong> — sulje mikseri</li>
  <li><strong>⌃⌥M</strong> — välitön mykkyys, kun joku astuu huoneeseen</li>
  <li><strong>⌃⌥M</strong> — mykistää pois heidän lähtiessään, kaikki palaa normaaliksi</li>
</ol>

<p>Yhdistettynä <strong>Volyymiprofiilit</strong> (tallennetut asetukset vaihdetaan yhdellä klikkauksella), voit hallita tusinan sovelluksen ääntä ilman, että sinun tarvitsee avata niitä yksitellen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Taustamusiikkisovellus ei toimi macOS? Kokeile näitä vaihtoehtoja",
    description:
      "Ilmainen taustamusiikkisovellus lakkasi toimimasta macOS-päivityksen jälkeen? Tässä syyt, miksi se menee rikki, mitä tehdä ja mitkä ovat parhaat vaihtoehdot, jotka oikeasti toimivat vuonna 2026.",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Background Music on suosittu ilmainen, avoimen lähdekoodin Mac-sovellus, joka tarjoaa perus äänenvoimakkuuden säädön sovelluskohtaisesti. Se toimii asentamalla virtuaalisen äänilaitteen ja ohjaamalla kaiken äänen sen kautta. Ongelma on, että se hajoaa. Säännöllisesti.</p>

<p>Lähes jokaisen macOS-päivityksen jälkeen — Ventura, Sonoma, Sequoia, Tahoe — käyttäjät raportoivat samoista ongelmista: virtuaalinen äänilaite ei käynnisty, äänihäiriöitä ja rätinää ilmenee, jotkut sovellukset eivät tunnisteta tai sovellus yksinkertaisesti kaatuu käynnistyksen yhteydessä. Jos hait "Taustamusiikki ei toimi", et ole yksin.</p>

<h2>Miksi taustamusiikki hajoaa jatkuvasti</h2>

<p>Taustamusiikki toimii asentamalla <strong>Virtuaalinen äänilaiteajuri</strong> (Core Audio HAL -lisäosa). macOS ohjaa kaiken järjestelmän äänen tämän virtuaalilaitteen kautta, ja taustamusiikki sieppaa sen soveltaakseen sovelluskohtaista äänenvoimakkuuden säätöä.</p>

<p>Ongelma on, että Apple muuttaa äänen ajurien toimintaa lähes jokaisessa suuressa macOS-julkaisussa. Tietoturvarajoitukset tiukentuvat, API:t muuttuvat ja ajurien latausmekanismit kehittyvät. Koska Background Music on vapaaehtoisten ylläpitämä avoimen lähdekoodin projekti, Applen muutosten mukaiset päivitykset eivät aina ole ajallaan.</p>

<p>Yleisiä ongelmia macOS päivitysten jälkeen:</p>
<ul>
  <li><strong>Virtuaalinen äänilaite ei asennu</strong> — macOS:n uudet turvallisuuspolitiikat estävät kuljettajan</li>
  <li><strong>Äänen rätinää tai nykimistä</strong> — virtuaalilaite tuo viivettä, jota nykyinen macOS-versio käsittelee huonosti</li>
  <li><strong>Sovellukset eivät näy</strong> — muutokset siinä, miten macOS raportit käynnissä ovat, rikkovat sovellusten tunnistuksen</li>
  <li><strong>Ei lainkaan ääntä</strong> — virtuaalilaite on asetettu oletuslähtöksi, mutta ei välitä ääntä läpi</li>
  <li><strong>Kaatuminen laukaisussa</strong> — yhteensopimattomuus nykyisen macOS-version kanssa</li>
</ul>

<h2>Kuinka korjata taustamusiikki</h2>

<p>Jos taustamusiikki on tällä hetkellä rikki:</p>

<ol>
  <li><strong>Tarkista päivitykset:</strong> Vieraile GitHubin julkaisusivulla taustamusiikkia varten ja katso, onko macOS versiollesi julkaistu uusi versio.</li>
  <li><strong>Asennus uudelleen:</strong> Poista Background Music kokonaan (mukaan lukien virtuaaliäänilaite), käynnistä uudelleen ja asenna uusin versio.</li>
  <li><strong>Nollaa ääni:</strong> Jos ääni on jumissa virtuaalilaitteessa, mene Järjestelmäasetuksiin → Ääni → Ulostulo ja valitse oikeat kaiuttimet/kuulokkeet. Sitten juokse <code>sudo killall coreaudiod</code> Terminaalissa.</li>
  <li><strong>Tarkista käyttöoikeudet:</strong> Järjestelmäasetukset → Yksityisyys ja turvallisuus — varmista, että Background Musicilla on tarvittavat oikeudet.</li>
</ol>

<h2>Vaihtoehtoja, jotka eivät käytä virtuaalisia äänilaitteita</h2>

<p>Taustamusiikin perusongelma on arkkitehtoninen: virtuaaliset äänilaitteet ovat hauraita ja rikkoutuvat macOS päivitysten myötä. Nykyaikaiset vaihtoehdot käyttävät Applen <strong>Core Audio Tap API</strong> (esitelty macOS 14), jonka avulla sovellukset voivat siepata prosessikohtaista ääntä ilman järjestelmätason ajurin asentamista.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> käyttää modernia Audio Tap API:ta — ei virtuaalista äänilaitetta, ei järjestelmäajuria, ei ytimen laajennuksia. Se kytkeytyy suoraan jokaisen sovelluksen äänivirtaan Applen tuetulla API:lla, mikä tarkoittaa, ettei se hajoa macOS päivitysten yhteydessä.</p>

<img src="/apps/sounddial.png" alt="SoundDial — taustamusiikkivaihtoehto, joka ei asenna virtuaalisia äänilaitteita" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Mitä saat taustamusiikista:</p>
<ul>
  <li><strong>Ei virtuaalista äänilaitetta</strong> — toimii Applen alkuperäisen äänipinon kanssa, ei hajoa päivityksissä</li>
  <li><strong>Äänenvoimakkuuden korotus 200 %:iin</strong> — Taustamusiikki rajoittaa 100 %</li>
  <li><strong>Volyymiprofiilit</strong> — tallenna ja vaihda konfiguraatioiden välillä (taustamusiikissa niitä ei ole)</li>
  <li><strong>Auto-ducking</strong> — automaattinen äänenvoimakkuuden vaimennus puheluiden aikana (taustamusiikissa on vain automaattinen tauko, ei kumartumista)</li>
  <li><strong>Tilavuusmuisti</strong> — muistaa sovelluskohtaiset volyymit uudelleenkäynnistysten välillä</li>
  <li><strong>Näppäimistön pikanäppäimet</strong> — mikseri tai mykistää kaikki sovellukset</li>
  <li><strong>Aktiivinen kehitys</strong> — päivitetään säännöllisesti uusimpien macOS</li>
</ul>

<p>Vaihtokauppa: SoundDial on kertamaksullinen ostos, kun taas taustamusiikki on ilmainen. Mutta sovellus, joka oikeasti toimii, on arvokkaampi kuin ilmainen sovellus, joka hajoaa puolen vuoden välein. Ja koska SoundDial on <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, Apple on tarkistanut sen, hiekkalaatikossa turvallisuuden vuoksi ja asennus on siististi — ei latausta GitHubista, ei käännöstä lähteestä, ei järjestelmän laajennusoikeuksien myöntämistä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource-vaihtoehto: kevyempi ja halvempi sovelluskohtainen äänenvoimakkuuden säätö Mac",
    description:
      "SoundSource on tehokas, mutta kallis ja monimutkainen. Jos tarvitset vain sovelluskohtaisen äänenvoimakkuuden säädön ilman äänitekniikan työkalupakkia, tässä on mitä kannattaa käyttää.",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>SoundSource Rogue Amoebalta on pisimpään käytössä ollut sovelluskohtainen äänenvoimakkuuden säätösovellus Mac. Se on tehokas, hyvin tehty ja sisältää ominaisuuksia kuten sovelluskohtainen taajuuskorjain, ääniefektiketjut ja sovelluskohtaisen ulostulon reitityksen. Se maksaa myös 39 dollaria, vaatii järjestelmäääniajurin (ACE) ja siinä on enemmän ominaisuuksia kuin useimmat koskaan käyttävät.</p>

<p>Jos haluat vain laittaa Spotifyn alaspäin vaikuttamatta Zoomiin — etkä tarvitse täyttä ääniteknikon työkalupakkia — SoundSource voi olla enemmän kuin tarvitset. Tässä on, mitä kannattaa ottaa huomioon.</p>

<h2>Mitä SoundSource tekee hyvin</h2>

<p>Kiitos sinne, missä se kuuluu — SoundSource on hiottu, ammattimainen sovellus:</p>
<ul>
  <li><strong>Sovelluskohtainen äänenvoimakkuuden säätö</strong> hienorakeisilla liukusäätimillä</li>
  <li><strong>Sovelluskohtainen taajuuskorjain</strong> sisäänrakennetut taajuuskorjaimet ja Audio Unit -lisäosatuki</li>
  <li><strong>Sovelluskohtainen lähtöreititys</strong> — lähettää eri sovelluksia eri kaiuttimille.</li>
  <li><strong>Äänenvoimakkuuden korotus</strong> yli 100 %</li>
  <li><strong>Koko järjestelmän ääniefektit</strong></li>
</ul>

<p>Jos olet podcastin tekijä, striimaaja tai äänialan ammattilainen, joka tarvitsee sovelluskohtaisia taajuuskorjaimia ja efektiketjuja, SoundSource on suunniteltu juuri sinulle.</p>

<h2>Missä SoundSource jää vajaaksi tavallisille käyttäjille</h2>

<h3>Hinta</h3>
<p>39 USD on kallis äänenvoimakkuuden säätösovellukselle. Jos et käytä taajuuskorjainta, ääniefektejä tai sovelluskohtaista reititystä, maksat ominaisuuksista, joihin et koskaan koske.</p>

<h3>Järjestelmäajuri</h3>
<p>SoundSource asentaa räätälöidyn järjestelmäääniajurin nimeltä ACE (Audio Capture Engine). Tämä toimii hyvin, mutta lisää monimutkaisuutta — sitä täytyy päivittää jokaisen macOS julkaisun yhteydessä, se voi ajoittain olla ristiriidassa muiden ääniohjelmistojen kanssa ja tarkoittaa, että käytät kolmannen osapuolen koodia järjestelmän äänitasolla. Jotkut IT-osastot yritysympäristöissä estävät ydinlaajennukset ja järjestelmätason ääniajurit.</p>

<h3>Ei äänenvoimakkuusprofiileja</h3>
<p>Laajasta ominaisuuksistaan huolimatta SoundSourcella ei ole profiilijärjestelmää. Et voi tallentaa "Kokous"- ja "Focus"-asetuksia ja vaihtaa niiden välillä. Joka kerta kun tilanteesi muuttuu, säädät jokaista liukusäädintä manuaalisesti.</p>

<h3>Ei automaattista kumartelua</h3>
<p>SoundSource ei automaattisesti laske taustaääntä, kun liityt puheluun. Ei ole puhelun tunnistusta, ei automaattista äänenvoimakkuuden säätöä, ei handsfree-työnkulkua yleisimmässä sovelluskohtaisen mikserin käyttötapauksessa.</p>

<h2>SoundDial: keskittyen siihen, mitä useimmat ihmiset oikeasti tarvitsevat</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ottaa erilaisen lähestymistavan: tekee ydintyö täydellisesti, ohittaa ominaisuudet, joita useimmat eivät tarvitse, ja lisää työnkulkuominaisuudet, joita SoundSource jättää huomaamatta.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Ominaisuus</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sovelluskohtainen volyymi</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä (0–200 %)</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sovelluskohtainen mykistys</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volyymiprofiilit</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Tilavuusmuisti</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sovelluskohtainen taajuuskorjain</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sovelluskohtainen lähtöreititys</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Järjestelmän ääniajuri</td>
  <td style="text-align:center;padding:10px 12px;">Ei tarvita</td>
  <td style="text-align:center;padding:10px 12px;">Vaadittu (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Näppäimistön pikanäppäimet</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Hinta</td>
  <td style="text-align:center;padding:10px 12px;">€14,99 kertakäyttö</td>
  <td style="text-align:center;padding:10px 12px;">$39 USD</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — kevyempi ja kohdennettu SoundSource-vaihtoehto, jossa on äänenvoimakkuusprofiilit ja automaattinen kumartuminen" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Kumman sinun pitäisi valita?</h2>

<ul>
  <li><strong>Valitse SoundSource, jos:</strong> Tarvitset sovelluskohtaisen taajuuskorjauksen, ääniefektiketjut tai sovelluskohtaisen ulostulon reitityksen. Olet podcastin tekijä, striimaaja tai äänialan ammattilainen. Hintaa ja järjestelmän ajuria ei haittaa.</li>
  <li><strong>Valitse <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> jos:</strong> Tarvitset sovelluskohtaisen äänenvoimakkuuden säädön, profiilit ja automaattinen kumartuminen. Haluat jotain kevyempää, joka ei asenna järjestelmäajuria. Haluat käyttää vähemmän. Olet etätyöntekijä, pelaaja, opiskelija tai kuka tahansa, joka haluaa vain kieltäytyä Slackista vaikuttamatta Zoomiin.</li>
</ul>

<p>SoundDial on saatavilla <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — mikä tarkoittaa, että Apple on tarkistanut sen, hiekkalaatikoinut tietoturvan vuoksi ja asentaa ja poistaa asennukset puhtaasti kuten mikä tahansa App Store -sovellus. Ei DMG-tiedostojen lataamista satunnaisilta verkkosivuilta, ei järjestelmäajureiden asennusta, ei ytimen laajennusoikeuksien myöntämistä. Kertaluonteinen ostos, ei tilausta.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac äänenvoimakkuus liian kova alimmalla asetuksella? Kuinka mennä vielä hiljaisemmaksi",
    description:
      "Jopa matalimmalla äänenvoimakkuudella Mac on liian kova — erityisesti myöhään yöllä kuulokkeiden kanssa. Näin saat hienomman äänenvoimakkuuden hallinnan ja lasket alle minimin.",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>Kello on keskiyö. Sinulla on kuulokkeet. Painat äänenvoimakkuuden alas -näppäintä, kunnes olet alimmassa vireessä — yhdellä palkilla. Se on silti liian kovaa. Seuraava painallus on mykistetty. Ei ole mitään siltä väliltä. Haluat volyymin olevan 3 %, mutta macOS hyppää ~6 %:sta 0 %:iin.</p>

<p>Tämä on yleinen valitus kuulokkeiden ja herkkien kaiuttimien kohdalla. macOS:n 16 äänenvoimakkuuden askelta ovat liian karkeita — alin ääni on silti kovempi kuin mitä tarvitset hiljaiseen myöhäisillan kuunteluun.</p>

<h2>Sisäänrakennettu korjaus: neljäsosatason äänenvoimakkuuden säätö</h2>

<p>Useimmat Mac käyttäjät eivät tiedä tätä: voit saada <strong>4x hienompi äänenvoimakkuuden säätö</strong> käyttäen näppäimistömodifikaattoria.</p>

<p>Pidä <strong>Option + Shift</strong> ja paina äänenvoimakkuuden ylös/alas-näppäimiä. Jokainen painallus säätää äänenvoimakkuutta neljäsosan normaalista askeleesta — jolloin sinulla on 64 askelta 16 sijaan.</p>

<p>Tämän avulla voit löytää äänenvoimakkuuden tasot normaalien lovejen välillä. Tuo aukko "yhden palkin" ja "mykistyksen" välillä on nyt kolme lisätasoa, joille voi laskeutua. Myöhäisillan kuulokkuunteluun tämä riittää usein mukavan tason löytämiseen.</p>

<h2>Miksi jokin sisältö on kovempaa kuin toiset samalla äänenvoimakkuudella.</h2>

<p>Saatat huomata, että jotkut sovellukset tuntuvat kovemmilta kuin toiset, vaikka järjestelmä olisi sama äänenvoimakkuus. Spotify yhdessä baarissa tuntuu kovemmalta kuin YouTube-video yhdellä baarilla. Tämä johtuu siitä, että jokainen sovellus lähettää ääntä eri tasoilla, ja järjestelmän äänenvoimakkuus skaalautuu suhteellisesti.</p>

<p>Kappale, joka on masteroitu 0 dB:llä (maksimi), ja podcast, joka on nauhoitettu -15 dB:llä, kuulostavat dramaattisesti erilaisilta samalla järjestelmän äänenvoimakkuudella. Kappale on 15 dB kovempi — mikä koetaan korville noin kolme kertaa kovempana.</p>

<h2>Todellinen korjaus: sovelluskohtainen äänenvoimakkuus hienosäätöön</h2>

<p>Neljännesaskeleen pikakuvake auttaa, mutta se säätää silti kaikkia sovelluksia tasapuolisesti. Jos Spotify alimmalla portaalla on liian kova mutta Zoom-puhelu alimmalla portaalla liian hiljainen, olet jumissa.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Antaa sinulle sovelluskohtaiset äänenvoimakkuusliukusäätimet tarkalla hallinnalla — jokainen liukusäädin liikkuu 1 % askelin 0 %:sta 200 %:iin. Voit asettaa Spotifyn 5 %:iin ja Zoomin 40 %:iin samanaikaisesti. Ohjaustaso on huomattavasti tarkempi kuin macOS:n 16 järjestelmävaihetta.</p>

<img src="/apps/sounddial.png" alt="SoundDial hienojakoinen sovelluskohtainen äänenvoimakkuuden säätö 1 % lisäyksellä macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Myöhäisillan kuulokkeiden käyttöön:</p>
<ul>
  <li>Aseta järjestelmän äänenvoimakkuus kohtuulliselle tasolle (40–50 %)</li>
  <li>Käytä SoundDial hienosäätääksesi jokaisen sovelluksen juuri haluamallesi tasolle</li>
  <li>Spotify 8 % — taustamusiikkia tuskin havaitaan</li>
  <li>Selain 15 % — tarpeeksi hiljainen myöhäisillan videolle</li>
  <li>Ilmoitukset mykistetty — ei yllätys, kovia pingejä</li>
</ul>

<p>Tallenna tämä "Night"-profiiliksi ja käytä sitä yhdellä klikkauksella, kun laitat kuulokkeet päälle työajan jälkeen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Toinen AirPod kovempi kuin toinen? Jokainen korjaus selitettynä",
    description:
      "Vasen AirPod on hiljaisempi kuin oikea (tai päinvastoin). Tässä on kaikki syyt — korvavahasta macOS tasapainoasetuksiin — ja miten sen voi korjata.",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>Yksi AirPod kuulostaa hyvältä. Toinen on selvästi hiljaisempi. Musiikki tuntuu epätasapainolta. Äänet kuulostavat tulevan yhdeltä puolelta. Tämä on yksi yleisimmistä AirPods-valituksista, ja siihen on yleensä helppo ratkaisu.</p>

<h2>1. Puhdista AirPodsit</h2>

<p>Yleisin syy on fyysinen: korvavaha tai roskat, jotka osittain tukkivat kaiutinverkon yhdellä AirPodilla. Jopa ohut kerrostumakerros voi merkittävästi vähentää tilavuutta sillä puolella.</p>

<p><strong>Miten puhdistaa:</strong></p>
<ul>
  <li>Käytä kuivaa, pehmeäharjaista harjaa (puhdas hammasharja toimii) harjataksesi kaiutinverkkoa hellävaraisesti</li>
  <li>AirPods Pro -silikonikärkien osalta: poista kärki ja puhdista sekä kärki että kaiutinverkko alla</li>
  <li>Käytä ulkona kuivaa, nukkatonta kangasta</li>
  <li><strong>Älä käytä:</strong> Vesi, alkoholi, paineilma tai terävät esineet — nämä voivat vahingoittaa kaiutinverkkoa tai työntää roskia syvemmälle sisään</li>
</ul>

<p>Puhdistuksen jälkeen testaa molemmat AirPodit. Useimmissa tapauksissa tämä korjaa ongelman välittömästi.</p>

<h2>2. Tarkista äänitasapaino macOS</h2>

<p>macOS on vasen-oikea äänen tasapainon liukusäädin, joka saattaa olla epätasapainossa:</p>

<ol>
  <li>Mennä <strong>Järjestelmäasetukset → saavutettavuus → ääni</strong></li>
  <li>Etsi <strong>Tasapaino</strong> liukusäädin</li>
  <li>Varmista, että se on täsmälleen keskellä L:n ja R:n välissä</li>
</ol>

<p>Jos liukusäädin on siirretty toiselle puolelle, se on syyllinen. Keskellä se ja äänenvoimakkuuden tulisi olla yhtä suuri molemmilla puolilla.</p>

<p>Tarkista myös <strong>Järjestelmäasetukset → ääni</strong> — joissakin macOS-versioissa on myös tasapainoliukusäädin lähtölaitteen asetuksissa.</p>

<h2>3. Nollaa AirPods</h2>

<p>Jos puhdistus ja tasapaino eivät auta, kokeile palauttaa AirPods tehdastilaan:</p>

<ol>
  <li>Laita molemmat AirPodit latauskoteloon</li>
  <li>Sulje kansi ja odota 30 sekuntia</li>
  <li>Avaa kansi</li>
  <li>Paina ja pidä pohjassa olevaa asetuspainiketta 15 sekuntia, kunnes tilavalo välähtää meripihkanvärisenä, sitten valkoisena</li>
  <li>Yhdistä AirPodit uudelleen Mac (Järjestelmäasetukset → Bluetooth)</li>
</ol>

<p>Tämä nollaa tallennetun äänen kalibroinnin ja voi korjata ohjelmistopuolen äänenvoimakkuuden epätasapainot.</p>

<h2>4. Tarkista monoääni</h2>

<p>Jos macOS:n Mono Audio -saavutettavuusominaisuus on käytössä, stereoääni sekoitetaan yhdeksi kanavaksi ja lähetetään molempiin AirPodseihin tasapuolisesti. Vaikka tämän ei pitäisi aiheuttaa äänenvoimakkuuseroja, se voi muuttaa tiettyjen sisältöjen ääntä ja saada toisen puolen tuntumaan "erilaiselta".</p>

<p>Tarkistus: Järjestelmäasetukset → Saavutettavuus → Ääni → varmista, että "Mono Audio" on pois päältä (ellei sitä tarvita).</p>

<h2>5. Bluetooth-häiriöt</h2>

<p>AirPodit kommunikoivat Mac kanssa Bluetoothin kautta, ja kumpikin AirPod kommunikoi myös toistensa kanssa. Jos Bluetooth-häiriöitä esiintyy merkittävästi (WiFi-reitittimet, USB 3.0 -keskittimet, muut Bluetooth-laitteet), yksi AirPod saattaa saada heikomman signaalin.</p>

<p><strong>Korjaus:</strong> Siirry lähemmäs Mac. Irrota Bluetooth-laitteet, joita et käytä. Jos olet lähellä USB 3.0 -keskitintä, kokeile siirtää se pois — USB 3.0 tunnetaan siitä, että se häiritsee 2,4 GHz Bluetoothia.</p>

<h2>6. Laitteistoongelma</h2>

<p>Jos mikään yllä olevista korjauksista ei auta, yhdessä AirPodissa saattaa olla laitteistovika — heikentynyt kaiutinelementti tai vaurioitunut verkko. Tämä tapahtuu ajan myötä raskaassa käytössä.</p>

<p><strong>Korjaus:</strong> Ota yhteyttä Applen tukeen tai käy Apple Storessa. Jos AirPods on takuun tai AppleCare+:n piirissä, Apple vaihtaa kyseisen AirPodin. Yksittäisiä AirPod-korvaavia osia on myös saatavilla takuun ulkopuolella.</p>

<h2>Parempi äänen tasapaino sovelluskohtaisella äänenvoimakkuuden säädöllä</h2>

<p>Vaikka sovelluskohtainen äänenvoimakkuuden säätö ei korjaa AirPodien laitteistoepätasapainoa, se ratkaisee samankaltaisen ongelman: kun jotkut sovellukset ovat äänekkäämpiä kuin toiset AirPodsissasi, se voi liioitella epätasapainon tunnetta.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Voit asettaa jokaisen sovelluksen tasaiselle äänenvoimakkuustasolle. Kun Spotify on 40 %, Zoom 100 % ja Safari 60 %, tiedät tarkalleen, mitä odottaa kummaltakin sovellukselta — ei äkillisiä äänenvoimakkuuden nousuja, jotka saisivat yhden AirPodin tuntumaan kovemmalta, koska ilmoitus juuri räjähti 100 %:iin.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix ja suoratoistoääni liian hiljaista Mac? Miten korjata se",
    description:
      "Dialogi on kuiskauksen hiljaista, sitten räjähdys ravistelee huonetta. Näin korjaat suoratoiston äänen tasot Mac — ja nostat hiljaisen sisällön yli 100 %:n.",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>Katsot elokuvaa Netflixistä. Kaksi hahmoa keskustelee — heitä tuskin kuulee. Nostat äänenvoimakkuutta. Alkaa toimintakohtaus. Räjähdykset ovat korvia huumaavia. Yrität kiireesti löytää äänenvoimakkuuden näppäimen. Tämä on yleisin valitus suoratoistoäänestä, ja se on pahempaa Mac:n sisäänrakennetuissa kaiuttimissa.</p>

<p>Ongelma ei ole sinun Mac. Näin elokuvat ja TV-sarjat hallitaan — ja se, että macOS ei anna työkaluja korjata sitä.</p>

<h2>Miksi suoratoistoäänen äänenvoimakkuus vaihtelee villisti</h2>

<p>Elokuvat ja TV-sarjat masteroidaan korkealla <strong>Dynaaminen alue</strong> — ero hiljaisimpien ja kovimpien äänien välillä. Teatterissa, jossa on voimakkaat kaiuttimet ja subwoofer, tämä kuulostaa uskomattomalta. Kuiskaukset ovat intiimejä, räjähdykset voimakkaita.</p>

<p>MacBookin 2-tuumaisissa kaiuttimissa tuo dynaaminen alue muodostuu haitaksi. Hiljaiset osat ovat alle sen, mitä pienet kaiuttimet selvästi pystyvät toistamaan, kun taas kovat osat yltävät kaiuttimen fyysiseen rajaan. Päädyt jatkuvasti säätämään äänenvoimakkuutta — kääntämään äänenvoimakkuutta kovemmalle dialoissa ja laskemassa toiminnalle.</p>

<h2>Korjaus 1: Ota käyttöön "Vähennä kovia ääniä" suoratoistosovelluksessa</h2>

<p>Joissakin suoratoistopalveluissa on äänenvoimakkuuden normalisointiominaisuus:</p>
<ul>
  <li><strong>Netflix:</strong> Toiston aikana klikkaa kaiutinkuvaketta → tarkista, onko siellä "Vähennä kovia ääniä" -vaihtoehto (saatavilla selaimessa ja natiivisovelluksessa)</li>
  <li><strong>Apple TV+:</strong> Asetukset → saavutettavuus → "Vähennä kovia ääniä"</li>
  <li><strong>Disney+:</strong> Vastaavaa asetusta ei tällä hetkellä ole saatavilla</li>
  <li><strong>Amazon Prime Video:</strong> "Dialogiboosti" -ominaisuus (jos saatavilla otsikon mukaan)</li>
</ul>

<p>Nämä ominaisuudet tiivistävät dynaamista aluetta — tehden hiljaisista äänistä kovempia ja kovia hiljaisempia. Tuloksena on tasaisempi äänenvoimakkuus, joka toimii paremmin pienillä kaiuttimilla ja matalilla kuuntelutasoilla.</p>

<h2>Korjaus 2: Tarkista Mac äänenvahvistin</h2>

<p>Joissakin Mac malleissa macOS soveltaa äänenkäsittelyä sisäänrakennettuihin kaiuttimiin. Tarkista järjestelmäasetuksista → äänistä, löytyykö lähtölaitteellesi parannusvaihtoehtoja. MacBook Pron 14" ja 16" malleissa kaiutinjärjestelmässä on tilallinen äänikäsittely, joka voi vaikuttaa havaittuun äänenvoimakkuuteen.</p>

<h2>Korjaus 3: Käytä langallisia kuulokkeita</h2>

<p>Kuulokkeet ohittavat kaiuttimien koon ongelman kokonaan. Jopa halvat langalliset kuulokkeet pystyvät toistamaan hiljaisen dialogin selkeästi, koska ajuri on aivan tärykalvon vieressä. Pienissä kaiuttimissa ongelmana oleva dynaaminen alue on etu kuulokkeissa.</p>

<h2>Korjaus 4: Nosta suoratoiston ääni yli 100 %:n</h2>

<p>Jos sisältö on liian hiljaista — vaikka normalisointi olisi päällä ja volyymi maksimitasolla — tarvitset vahvistusta, joka ylittää sen, mitä macOS tarjoaa.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Voi nostaa minkä tahansa sovelluksen tasolle <strong>200%</strong>. Jos Safari tai Netflix-sovellus on liian hiljainen, vedä liukusäädin yli 100 %. Ääni vahvistetaan ennen kuin se saavuttaa kaiuttimesi, mikä käytännössä kaksinkertaistaa juuri kyseisen sovelluksen maksimiäänenvoimakkuuden.</p>

<img src="/apps/sounddial.png" alt="SoundDial Netflixin äänen nostaminen 180 %:iin Mac-tilassa selkeämmän dialogin ja suoratoistoäänen takaamiseksi" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tämä on erityisen hyödyllistä, kun:</p>
<ul>
  <li>Katsella hiljaista vierasta elokuvaa, jossa dialogi on pehmeää</li>
  <li>Vanhan sisällön suoratoisto, joka on masteroitu alemmalla tasolla</li>
  <li>MacBook-kaiuttimien käyttö meluisassa ympäristössä</li>
  <li>Yksi suoratoistopalvelu on huomattavasti hiljaisempi kuin toinen</li>
</ul>

<p>Ja koska SoundDial ohjaa jokaista sovellusta itsenäisesti, Netflixin nostaminen 150 %:iin ei tee Spotifysta tai Slackista äänekkäämpää. Jokainen sovellus pysyy omalla tasollaan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac Ääniasetus etätyöhön: Täydellinen opas",
    description:
      "Puhelut, musiikki, ilmoitukset ja keskittymisaika — kaikki yhdellä Mac. Näin säädät äänen niin, ettei mikään taistele huomiostasi.",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Etätyö Mac tarkoittaa, että tietokoneesi toimii samanaikaisesti toimistopuhelimena, radiona, ilmoituskeskuksena ja syvätyöasemana. Nämä ovat neljä perustavanlaatuisesti erilaista äänitilaa, ja macOS käsittelee niitä kaikkia samalla tavalla: yksi äänenvoimakkuuden liukusäädin, kaikki samalla tasolla, ei tapaa priorisoida.</p>

<p>Tämä opas käy läpi, miten Mac ääni asetetaan etätyöhön niin, että puhelut ovat selkeitä, musiikki on läsnä mutta ei häiritsevää, ilmoitukset ovat hienovaraisia ja keskittymisaika on oikeasti hiljaista.</p>

<h2>Etätyön neljä äänitilaa</h2>

<h3>1. Kokoustila</h3>
<p>Olet Zoom- tai Teams-puhelussa. Päätöksen täytyy olla kristallinkirkas. Musiikin pitäisi olla hiljaista tai tuskin kuultavaa. Slackin ei pitäisi piipata korvassasi.</p>

<h3>2. Tarkennustila</h3>
<p>Teet syvällistä työtä. Taustamusiikki matalalla tasolla auttaa keskittymään. Ilmoitusten pitäisi olla tuskin havaittavissa — tarpeeksi läsnä, että huomaat kiireellisen viestin, tarpeeksi hiljaisia, etteivät ne katkea virtaa.</p>

<h3>3. Yhteistyötila</h3>
<p>Olet käytettävissä viesteihin, Slackin seuraamiseen, ehkä harjoitusvideon katsomiseen. Kaikki voi olla kohtuullisella tasolla. Ilmoitukset normaalilla äänenvoimakkuudella.</p>

<h3>4. Taukotila</h3>
<p>Musiikkia täysillä. YouTube täysillä. Ilmoitukset voivat odottaa.</p>

<h2>Laitteiston asennus</h2>

<h3>Mikrofonikysymys</h3>
<p>Jos käytät AirPodseja puheluihin, harkitse erillisen mikrofonin käyttöä. Kun AirPodseja käytetään sekä mikrofonina että kaiuttimina, macOS vaihtaa heikompaan SCO Bluetooth -koodekkiin, mikä heikentää sekä äänenlaatua että äänenvoimakkuutta. Kun käytät Mac:n sisäänrakennettua mikrofonia (tai USB-mikrofonia) ja käytät AirPodseja ulostulona, tämä ei ole lainkaan.</p>

<p>Parhaan puhelun laadun saamiseksi: USB-mikrofoni tai kuuloke, jossa on sisäänrakennettu mikrofoni. Blue Yeti, Elgato Wave tai jopa perus USB-kuulokkeet kuulostavat kollegoillesi huomattavasti paremmilta kuin AirPodsin mikrofoni.</p>

<h3>Lähtölaitteet</h3>
<p>Monet etätyöntekijät käyttävät kahta lähtölaitetta:</p>
<ul>
  <li><strong>Kuulokkeet</strong> puheluihin — yksityisyys, ei kaiku, selkeä ääni</li>
  <li><strong>Puhujat</strong> musiikkia varten ei-hälytysaikana — täyttää huoneen, mukavampi pitkiksi ajoiksi</li>
</ul>

<p>Käytä Option-klikkausta valikkopalkin Ääni-kuvaketta vaihtaaksesi nopeasti laitteiden välillä. Tai käytä SoundDial:n sisäänrakennettua laitekytkintä, joka sijoittaa lähtölaitteet aivan äänenvoimakkuuden säätimien viereen.</p>

<h2>Ohjelmiston asennus</h2>

<h3>Ilmoitusten hallinta</h3>
<p>Mene Järjestelmäasetuksiin → Ilmoituksiin. Jokaista sovellusta varten päätä, tarvitsetko ääniilmoituksia:</p>
<ul>
  <li><strong>Pidä äänet päällä:</strong> Slack (jos olet vastaavainen), Kalenteri (kokoukset), Viestit</li>
  <li><strong>Sammuta äänet:</strong> Sähköposti (tarkista aikataulusi), uutiset, sosiaaliset sovellukset</li>
</ul>

<p>Tämä vähentää yllättävien äänien määrää, mutta ei anna äänenvoimakkuuden säätöä — vain päälle/pois.</p>

<h3>Tarkennustilat</h3>
<p>Luo vähintään kaksi tarkennustilaa Järjestelmäasetuksissa → Fokus:</p>
<ul>
  <li><strong>"Kokous"</strong> — mykistää kaikki ilmoitukset paitsi kalenterisovelluksesi</li>
  <li><strong>"Keskity työ"</strong> — salli ilmoitukset Slack-pelinjohtajilta ja esimieheltäsi, hiljennä kaikki muu</li>
</ul>

<p>Tarkennustilat hoitavat ilmoitusten vaimennuksen. Äänenvoimakkuuden säätöön tarvitset jotain enemmän.</p>

<h2>Puuttuva osa: sovelluskohtainen äänenvoimakkuuden säätö</h2>

<p>Tarkennustilojen ohjaus <em>joka</em> Ilmoitukset menevät perille, mutta eivät <em>Kuinka kovaa</em> Mikä tahansa on. Sinulla on edelleen yksi äänenvoimakkuuden liukusäädin kaikkeen. Jos haluat Slackin 15 %, Spotifyn 35 % ja Zoomin 100 % — macOS sitä ei voi tehdä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Täyttää tämän aukon antamalla jokaiselle sovellukselle oman äänenvoimakkuuden liukusäädin. Aseta etätyöääni juuri haluamallasi tavalla:</p>

<img src="/apps/sounddial.png" alt="SoundDial etätyöäänen asetus — eri äänenvoimakkuustasot Zoomille, Spotifylle ja Slackille macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Tallenna profiilit jokaiselle tilalle</h3>

<p><strong>Kokousprofiili:</strong></p>
<ul>
  <li>Zoom/Teams: 100 %</li>
  <li>Spotify: mykistetty</li>
  <li>Slack: vaimennettu</li>
  <li>Selain: mykistetty</li>
</ul>

<p><strong>Fokus Työprofiili:</strong></p>
<ul>
  <li>Spotify: 30 %</li>
  <li>Slack: 10%</li>
  <li>Zoom: 80 % (jos joku soittaa)</li>
  <li>Selaus: 40%</li>
</ul>

<p><strong>Yhteistyöprofiili:</strong></p>
<ul>
  <li>Kaikki 50-70 %</li>
  <li>Slack: 30 %</li>
</ul>

<p>Vaihda profiilien välillä yhdellä klikkauksella. Kun puhelu alkaa, SoundDial:n automaattinen kuhistuminen laskee automaattisesti kaiken paitsi puhelusovelluksesi. Kun se päättyy, profiilitasosi palautuvat.</p>

<h2>Päivittäinen työnkulku</h2>

<ol>
  <li>Aloita työ → käytä "Focus Work" -profiilia</li>
  <li>Liity kokoukseen → automaattinen kaataminen hoitaa sen automaattisesti (tai käytä "Kokous"-profiilia)</li>
  <li>Kokous päättyy → volyymit palautuvat Focus Work -tasolle</li>
  <li>Lounastauko → käytä "Tauko"-profiilia, laita musiikkia täysille</li>
  <li>Iltapäivän syvä työ → takaisin keskittymistyöhön</li>
</ol>

<p>Kokonaiskäyttö: kaksi tai kolme profiilin klikkausta päivässä. Kaikki muu on automaattista.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Kuinka estää selaimen välilehtien automaattinen äänen toisto Mac",
    description:
      "Taustavälilehti alkaa soittaa ääntä tyhjästä. Mainokset, videot, uutissivustot — tässä ohjeet, miten hiljennät rogue-välilehdet ja hallitaan selaimen ääntä macOS.",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>Sinulla on kaksikymmentä välilehteä auki. Työskentelet yhdessä niistä. Yhtäkkiä — ääni alkaa soida jostain. Videomainos. Automaattisesti toistuva uutispätkä. Välilehti, jonka avasit tunti sitten, päätit nyt alkaa pitää ääntä. Kiirehdit löytämään välilehden, klikkaillen niitä yksi kerrallaan.</p>

<p>Äänen automaattinen toisto selaimen välilehdillä on yksi ärsyttävimmistä kokemuksista millä tahansa tietokoneella, ja se on pahempaa Mac, koska macOS ei voi mykistää tiettyä sovellusta (saati tiettyä välilehteä) ilman kaiken mykistystämistä.</p>

<h2>Poista automaattitoisto käytöstä Safarissa</h2>

<p>Safarissa on parhaat sisäänrakennetut automaattisen toiston ohjaimet kaikista selaimista:</p>

<ol>
  <li>Avaa Safari → Asetukset (⌘,) → Verkkosivut-välilehti</li>
  <li>Valitse vasemmasta sivupalkista "Auto-Play"</li>
  <li>Aseta oletuksena alareunaan "Never Auto-Play" tai "Pysäytä Media with Sound"</li>
</ol>

<p>"Pysäytä media äänellä" on paras vaihtoehto — se estää videot, jotka toistetaan automaattisesti äänellä, mutta sallii mykistetyn automaattisen toiston (jota monet sivustot käyttävät koristeellisiin taustavideoihin). "Never Auto-Play" estää kaiken.</p>

<p>Voit myös määrittää sivustokohtaiset asetukset samassa paneelissa, jos haluat sallia automaattisen toiston tietyillä sivustoilla, kuten YouTubessa tai Netflixissä.</p>

<h2>Poista automaattinen toisto käytöstä Chromessa</h2>

<p>Chromen automaattisen toiston ohjaimet ovat vähemmän yksityiskohtaisia:</p>

<ol>
  <li>Mennä <code>chrome://settings/content/sound</code></li>
  <li>Kytke päälle "Sivustot voivat toistaa ääntä" määrittääksesi oletuskäyttäytymisen</li>
  <li>Lisää tietyt sivustot "Mykistetty"-listalle, jotta ne pysyvästi hiljennetään.</li>
</ol>

<p>Chrome sallii myös mykistää yksittäiset välilehdet: napsauta hiiren oikealla välilehteä → "Mykistyttää sivusto". Tämä mykistää kaiken äänen kyseiseltä sivustolta, kunnes poistat sen mykistyksen.</p>

<h2>Mykistä välilehti nopeasti</h2>

<p>Sekä Safari että Chrome näyttävät kaiutinkuvakkeen välilehdissä, jotka tuottavat ääntä. Safarissa klikkaa välilehden kaiutinkuvaketta mykistääksesi sen. Chromessa napsauta oikealla välilehteä ja valitse "Mykistä sivusto".</p>

<p>Tämä toimii yhdelle välilehdelle kerrallaan, mutta jos sinulla on useita meluisia välilehtiä, klikkaat niitä yksi kerrallaan.</p>

<h2>Laajempi ongelma: selaimen ääni vs. kaikki muu</h2>

<p>Vaikka automaattinen toisto olisi pois päältä ja välilehdet mykistetty, saatat silti haluta hallita, kuinka kovaa selaimesi on verrattuna muihin sovelluksiin. Ehkä katsot YouTube-tutoriaalia Zoom-puhelun aikana — haluat tutoriaalin olevan 30 % ja Zoomin 100 %. Tai soitat taustamusiikkia selaimen välilehdellä ja se kilpailee Spotifysi kanssa.</p>

<p>macOS käsittelee koko selainta yhtenä sovelluksena yhdellä volyymilla. Et voi tehdä yhtä välilehteä hiljaisemmaksi kuin toinen järjestelmätasolla. Mutta sinä <em>voi</em> Tee koko selaimesta hiljaisempi kuin muut sovellukset.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa selaimellesi oman äänenvoimakkuusliukusäätimen, riippumattomana muista sovelluksista. Laske Safari 30 %:iin ja pidä Zoom 100 %:ssa. Mykistä Chrome kokonaan samalla kun Spotify toistoa jatkuu. Yksi klikkaus.</p>

<img src="/apps/sounddial.png" alt="SoundDial selaimen äänenvoimakkuuden hallinta itsenäisesti muista sovelluksista macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tämä on nopein tapa hoitaa yllättävä automaattinen välilehti: sen sijaan, että etsisit mikä välilehti pitää ääntä, klikkaa SoundDial valikkopalkissa ja mykistää selain. Kaikki muu pyörii edelleen. Kun olet löytänyt ja sulkenut häiritsevän välilehden, poista selaimen mykistö ja sen äänenvoimakkuus palautuu entiselleen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Discordin äänenvoimakkuus liian kova (tai hiljainen) Mac? Miten korjata se",
    description:
      "Discord pauhailee pelisi yli tai on liian hiljainen kuullakseen joukkuekavereita. Näin ohjaat Discordin äänenvoimakkuutta itsenäisesti kaikesta muusta macOS:ssa.",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discordissa on kaksi äänenvoimakkuusongelmaa Mac:ssa. Joko se on liian kova — ilmoitusääniä kaikuu pelin ja musiikin yli — tai liian hiljainen — et kuule joukkuetovereitasi pelin äänen yli. Ongelma on, että macOS ei anna Discordin äänenvoimakkuutta säätää itsenäisesti. Se on lukittu samaan järjestelmän liukusäätimeen kuin kaikki muukin.</p>

<h2>Discordin sisäänrakennetut äänenvoimakkuuden säätimet</h2>

<p>Discordissa on useita sisäisiä äänenvoimakkuusasetuksia. Ennen ulkoisten ratkaisujen tarkastelua varmista, että nämä ovat konfiguroituja:</p>

<h3>Tuotantovolyymi</h3>
<p>Mene Discordiin → asetuksiin (rattaiskuvake) → Voice & Video. "Output Volume" -liukusäädin säätelee, kuinka kovaa Discord kuulostaa. Jos Discord on liian hiljainen, varmista, että se on 100%. Jos ääni on liian kova, laske se tähän.</p>

<p><strong>Rajoitukset:</strong> Tämä ohjaa Discordin sisäistä miksausta, mutta ei muuta Discordin äänenvoimakkuutta <em>Verrattuna muihin sovelluksiin</em>. Jos pelisi on 80 % järjestelmävolyymilla ja Discord 80 %, Discordin sisäisen liukusäätimen säätäminen muuttaa tasapainoa — mutta olet silti lukittu yhteen järjestelmän volyymiin kaikille.</p>

<h3>Käyttäjäkohtainen volyymi</h3>
<p>Napsauta hiiren oikealla käyttäjää äänikanavalla → "User Volume". Voit säätää yksittäisiä käyttäjiä 0 %:sta 200 %:iin. Tämä on hyödyllistä, jos toinen henkilö on äänekkäämpi tai hiljaisempi kuin toinen, mutta se ei ratkaise Discordin ja muiden sovellusten tasapainoa.</p>

<h3>Ilmoitusten määrä</h3>
<p>Discordin → asetukset → ilmoitukset. Voit poistaa käytöstä tietyt ilmoitusäänet (viesti, kuuro, mykistys, liittyminen/poistuminen) erikseen. Tämä vähentää häiritsevien äänien määrää, mutta ei anna niiden äänenvoimakkuutta laskea — voit vain kytkeä ne päälle tai pois.</p>

<h2>Todellinen ongelma: järjestelmätason volyymitasapaino</h2>

<p>Discordin sisäiset ohjaimet säätävät Discordin omaa miksausta. Mutta todellinen ongelma on tasapaino Discordin ja kaiken muun Mac välillä: pelisi, musiikkisi, selaimesi. macOS antaa sinulle yhden liukusäätimen kaikille niille.</p>

<p>Jos haluat säätää Discordin äänenvoimakkuutta suhteessa peliisi, tarvitset sovelluskohtaisen äänenvoimakkuuden säädön — mitä macOS ei tarjoa natiivisti.</p>

<h2>Korjaa se SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa Discordille oman äänenvoimakkuusliukusäätimen valikkopalkissa, riippumatta muista sovelluksista. Aseta Discord juuri haluamallesi tasolle — 100 % selkeään äänikeskusteluun, 40 % hienovaraiseen taustaan tai täysin mykistetty — koskematta peliin, musiikkiin tai mihinkään muuhun.</p>

<img src="/apps/sounddial.png" alt="SoundDial Discordin äänenvoimakkuuden hallinta erillään pelistä ja musiikista macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Yleiset asetelmat</h3>

<p><strong>Pelaaminen Discordin kanssa:</strong></p>
<ul>
  <li>Discord: 100 % (kuulen aina joukkuetoverit selvästi)</li>
  <li>Peli: 40 % (immersiivinen, mutta ei ylivoimainen)</li>
  <li>Spotify: 15 % (hienovaraista taustamusiikkia)</li>
</ul>

<p><strong>Hengailu äänichatissa:</strong></p>
<ul>
  <li>Discord: 80%</li>
  <li>Selain/YouTube: 60 %</li>
  <li>Kaikki muu: normaali</li>
</ul>

<p><strong>Fokustyö (Discord taustalla):</strong></p>
<ul>
  <li>Discord: mykistetty tai 10 %</li>
  <li>Spotify: 50%</li>
  <li>Slack: 15%</li>
</ul>

<p>Tallenna jokainen muodossa <strong>Volyymiprofiili</strong> SoundDial ja vaihda yhdellä klikkauksella. Ei kuuden liukusäätimen säätämistä joka kerta kun vaihdat toimintoja.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Kuinka vaihtaa äänilähtöä nopeasti Mac:ssa (ilman asetuksia penkomatta)",
    description:
      "Kaiuttimien, kuulokkeiden ja näyttöjen välillä vaihtaminen Mac vaatii liikaa klikkauksia. Tässä on nopeampia tapoja vaihtaa äänilähtölaitetta välittömästi.",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>Irrotat kuulokkeet ja haluat, että ääni menee kaiuttimiin. Tai liität AirPodsin ja macOS valitsee väärän laitteen. Tai astut kokoushuoneeseen ja joudut vaihtamaan konferenssipuhujaan. Joka kerta se on: Järjestelmäasetukset → Ääni → Ulostulo → selaa → klikkaa. Liian monta klikkausta johonkin, jonka pitäisi ottaa yksi.</p>

<p>Tässä ovat kaikki tavat vaihtaa äänilähtöä nopeammin Mac — sisäänrakennetuista pikanäppäimistä valikkopalkin työkaluihin, jotka poistavat klikkauksen kokonaan.</p>

<h2>Menetelmä 1: Klikkaa äänenvoimakkuuskuvaketta</h2>

<p>Tämä on nopein sisäänrakennettu menetelmä, eikä useimmat tiedä siitä.</p>

<p>Pidä <strong>Vaihtoehto (⌥)</strong> Ja klikkaa valikoimis-/äänikuvaketta valikkopalkissa. Normaalin äänenvoimakkuusliukusäätimen sijaan saat listan kaikista käytettävissä olevista lähtölaitteista. Klikkaa haluamaasi laitetta. Valmista.</p>

<p>Jos et näe äänikuvaketta valikkopalkissa, ota se käyttöön: Järjestelmäasetukset → Ohjauskeskus → Ääni → valitse "Näytä aina valikkopalkissa."</p>

<p><strong>Rajoitukset:</strong> Tämä näyttää vain lähtölaitteet — et voi säätää sovelluskohtaista äänenvoimakkuutta tai nähdä, mitä tällä hetkellä soi tästä valikosta.</p>

<h2>Menetelmä 2: Ohjauskeskus</h2>

<p>Klikkaa valikkopalkissa Control Centerin kuvaketta (kaksikytkin-kuvake) → Ääni-osiota → nykyistä laitteen nimeä nähdäksesi kaikki saatavilla olevat ulostulot.</p>

<p><strong>Rajoitukset:</strong> Se on kolme klikkausta yhden sijaan. Hieman hitaammin kuin Option-painike äänenvoimakkuuskuvaketta.</p>

<h2>Menetelmä 3: Järjestelmäasetusten pikakuvake</h2>

<p>Voit kiinnittää Soundin ylätason System Settings -sivupalkkiin, mutta se vaatii silti Output-välilehdelle siirtymistä ja laitteen valitsemista. Ei nopeasti.</p>

<h2>Menetelmä 4: Näppäinpikanäppäin (asennuksen kanssa)</h2>

<p>macOS ei sisällä sisäänrakennettua pikanäppäintä äänilaitteiden vaihtamiseen. Voit kuitenkin luoda sellaisen käyttämällä Automatoria tai Pikakuvakkeita:</p>
<ol>
  <li>Open Shortcuts -sovellus</li>
  <li>Luo uusi pikakuvake, joka ajaa shell-skriptin: <code>SwitchAudioSource -s "Laitteen nimi"</code> (vaatii <code>SwitchAudio-OSX</code> komentorivityökalu Homebrewista)</li>
  <li>Aseta pikanäppäimelle pikanäppäin</li>
</ol>
<p>Tämä toimii, mutta vaatii Homebrew-työkalun, komentorivityökalun ja manuaalisen asennuksen per laite. Ei käytännöllistä useimmille käyttäjille.</p>

<h2>Menetelmä 5: SoundDial sisäänrakennettu laitekytkin</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Siinä on ulostulolaitteen valitsija suoraan valikkopalkin popoverissa — yhdessä sovelluskohtaisten äänenvoimakkuusliukusäätimien kanssa. Yksi klikkaus avataksesi SoundDial, yksi klikkaus vaihtaaksesi laitetta. Ei järjestelmäasetuksista kaivamista.</p>

<img src="/apps/sounddial.png" alt="SoundDial äänilähtölaitteen kytkentä ja sovelluskohtainen äänenvoimakkuuden säätö yhdessä valikkopalkin paneelissa" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Laitteiden vaihtamisen etu SoundDial sisällä: voit vaihtaa lähtöä <em>ja</em> säädä sovelluskohtaisia volyymeja samassa paneelissa. Vaihda AirPodseihin ja laske Spotifyn heti samalla kun nostat puhelua — kaikki ilman että popoveria poistuu.</p>

<p>Yhdistettynä SoundDial'siin <strong>Volyymimuisti</strong> ominaisuus, jossa jokainen lähtölaite muistaa omat sovelluskohtaiset äänenvoimakkuustasonsa. Vaihda kaiuttimiin, niin "kaiuttimien" äänenvoimakkuustasapaino aktivoituu. Vaihda kuulokkeisiin, niin "kuulokkeiden" tasapaino on voimassa. Ei manuaalista uudelleensäätöä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Korjaa äänen rätinä ja poksahtelu Mac: Täydellinen opas",
    description:
      "Mac ääni rätisee, poksahtaa tai nykii — musiikin, puheluiden tai videon toiston aikana. Tässä ovat kaikki tunnetut syyt ja korjaukset macOS äänihäiriöihin.",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>Kuuntelet musiikkia ja kuulet poksahduksen. Sitten rätinä. Sitten on nykiminen, jossa ääni katkeaa hetkeksi ja palaa takaisin. Kyse ei ole kappaleesta — se on sinun Mac. Äänen rätinä macOS on ärsyttävän yleistä, ja siihen liittyy vähintään kuusi eri syytä.</p>

<p>Tämä opas kattaa kaikki tunnetut syyt äänen rätinään, poksahteluun ja nykimiseen Mac, ohjelmistokorjauksista ainoaan laitteisto-ongelmaan, josta sinun tulisi tietää.</p>

<h2>1. Käynnistä Core Audio uudelleen (nopea korjaus)</h2>

<p>Tehokkain ratkaisu äkilliseen äänen rätinään on käynnistää macOS:n äänidemonin uudelleen. Avaa terminaali ja käynnistä:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Ääni katkeaa sekunniksi ja käynnistyy uudestaan. Monissa tapauksissa rätinä loppuu välittömästi. Tämä toimii, koska coreaudiod — prosessi, joka hallinnoi kaikkea ääntä macOS:llä — voi joutua vioittuneeksi tilaan lepo-/herätyssyklien, Bluetooth-laitteiden yhteyksien tai sovellusten kaatumisten jälkeen.</p>

<p>Jos tämä korjaa ongelman, rätinä johtui tilapäisestä daemon-ongelmasta. Jos ongelma palaa säännöllisesti, jatka pysyvien korjausten lukemista.</p>

<h2>2. Suorittimen ylikuormitus</h2>

<p>Äänen rätinä korreloi usein korkean suorittimen käytön kanssa. Kun Mac:n prosessori on maksimissa, se ei pysty käsittelemään äänipuskureita tarpeeksi nopeasti, mikä aiheuttaa aukkoja, jotka kuulostavat poksahduksilta ja rätinältä.</p>

<p><strong>Tarkistettu:</strong> Avaa Activity Monitor (Applications → Utilities) ja katso CPU-välilehteä. Jos näet jatkuvasti korkeaa prosessorin käyttöä (80 %+), se on todennäköisesti syy.</p>

<p><strong>Korjaus:</strong> Sulje tarpeettomia sovelluksia, erityisesti resursseja vaativia kuten selaimia, joissa on paljon välilehtiä, videoeditorit tai virtuaalikoneita. Jos tietty prosessi käyttää liikaa prosessoria, mieti, toimiiko se normaalisti vai pitääkö se käynnistää uudelleen.</p>

<h2>3. Bluetooth-ääniongelmat</h2>

<p>Bluetooth on yleisin rätinän lähde langattomien kuulokkeiden ja kaiuttimien käyttäjille. Useat asiat voivat aiheuttaa sen:</p>

<ul>
  <li><strong>Häiriöt:</strong> WiFi, USB 3.0 -laitteet ja muut Bluetooth-laitteet voivat häiritä ääniyhteyttäsi. Kokeile siirtyä lähemmäs Mac tai poistaa häiriön lähteitä.</li>
  <li><strong>Koodekin kytkentä:</strong> Kun sovellus aktivoi mikrofonisi, macOS vaihtaa AAC:sta SCO-koodekkiin. Tämä siirtymä voi aiheuttaa lyhyen rätinän tai poksahduksen.</li>
  <li><strong>Bluetoothin ruuhka:</strong> Jos sinulla on monta Bluetooth-laitetta kytkettynä samanaikaisesti, radio voi olla vaikeaa. Irrota laitteet, joita et käytä.</li>
</ul>

<p><strong>Korjaus:</strong> Nollaa Bluetooth pitämällä Shift+Option-painiketta pohjassa, klikkaamalla Bluetooth-kuvaketta valikkopalkissa ja valitsemalla "Reset the Bluetooth module" (jos saatavilla). Vaihtoehtoisesti poista laite Bluetooth-asetuksista ja yhdistä se uudelleen.</p>

<h2>4. Näytteenottotaajuuden epäsuhta</h2>

<p>Jos äänilähtölaitteesi toimii eri näytteenottotaajuudella kuin toistettava ääni, macOS joutuu näytteitä uudelleen reaaliajassa. Tämä uudelleennäytteenotto voi aiheuttaa artefakteja — erityisesti pienemmillä puskurikokoilla.</p>

<p><strong>Tarkistettu:</strong> Avaa Audio MIDI Setup (Applications → Utilities), valitse lähtölaite ja tarkista näytteenottotaajuus. Yleisiä taajuuksia ovat 44,1 kHz (CD-laatu) ja 48 kHz (video/suoratoistostandardi).</p>

<p><strong>Korjaus:</strong> Aseta näytteenottotaajuus vastaamaan yleisintä käyttötapaustasi. Musiikille: 44,1 kHz. Videon ja suoratoiston osalta: 48 kHz. Jos käytät USB-ääniliitäntää, tutustu sen dokumentaatioon optimaalisen näytteenottotaajuuden ja puskurin koon löytämiseksi.</p>

<h2>5. USB-äänilaitteiden puskuriongelmat</h2>

<p>Ulkoiset USB-äänilaitteet (DACit, ääniliitännät, USB-kuulokkeet) voivat rätistä, jos puskurin koko on liian pieni järjestelmän nykyiselle kuormalle.</p>

<p><strong>Korjaus:</strong> Audio MIDI -asetuksissa valitse USB-laite ja yritä kasvattaa puskurin kokoa (jos vaihtoehto on saatavilla). Äänisovelluksissa kuten Logic, Ableton tai GarageBand, lisää I/O-puskurin kokoa ääniasetuksissa. Suurempi puskuri tarkoittaa hieman enemmän viivettä, mutta vähemmän äänibugeja.</p>

<h2>6. macOS päivitysregressio</h2>

<p>Jotkut macOS päivitykset aiheuttavat äänivirheitä. Tämä on tapahtunut lähes jokaisessa merkittävässä macOS-julkaisussa — Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia ja Tahoe ovat kaikki saaneet äänien rätinää alkuperäisen julkaisun jälkeen.</p>

<p><strong>Korjaus:</strong> Tarkista, onko Apple julkaissut pistepäivityksen (esim. 15.0.1, 15.1), joka korjaa ääniongelmat. Voit myös tarkistaa Applen kehittäjäfoorumeilta ja Redditistä, kokevatko muut käyttäjät samaa ongelmaa. Jos kyseessä on tunnettu macOS bugi, korjaus saapuu yleensä yhden tai kahden pisteen julkaisun aikana.</p>

<h2>7. Kernel-laajennukset tai äänipluginit</h2>

<p>Kolmannen osapuolen ääniajurit, virtuaaliset äänilaitteet tai äänipluginit voivat olla ristiriidassa macOS:n alkuperäisen äänipinon kanssa. Tämä on erityisen yleistä vanhemmissa ääniohjelmistoissa, jotka käyttävät ytimen laajennuksia (kext), jotka ovat vanhentuneet uusissa macOS-versioissa.</p>

<p><strong>Korjaus:</strong> Tarkista, onko sinulla asennettuna kolmannen osapuolen ääniohjelmistoja: Soundflower, BlackHole, Loopback tai vanhemmat äänirajapinnan ajurit. Kokeile poistaa ne väliaikaisesti käytöstä tai poistaa ne nähdäksesi, lakkaako rätinä loppumaan. Jos näin on, tarkista päivitetyt versiot, jotka ovat yhteensopivia macOS-version kanssa.</p>

<h2>Äänenlaadun hallinta SoundDial</h2>

<p>Vaikka SoundDial ei korjaa suoraan laitteisto- tai järjestelmätason rahinaa, se voi auttaa hallitsemaan ääntä tavoilla, jotka vähentävät ongelmaa:</p>

<ul>
  <li><strong>Vähennä kilpailevia äänilähteitä:</strong> Käytä SoundDial mykistämään sovelluksia, joita et aktiivisesti käytä. Vähemmän samanaikaisia äänivirtoja tarkoittaa vähemmän CPU-painetta äänenkäsittelyssä.</li>
  <li><strong>Äänenvoimakkuuden lisäys järjestelmän maksimin sijaan:</strong> Jos käytät järjestelmän äänenvoimakkuutta 100 % ja silti laitat sovelluksia kovemmin, äänipolku toimii äärirajoillaan. Käyttö <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Per app boost vahvistaa tiettyjä sovelluksia 200 %:iin samalla kun järjestelmän volyymi pysyy mukavammalla 70–80 %:lla. Tämä voi vähentää vääristymiä järjestelmän lähtötasolla.</li>
  <li><strong>Nopea lähtölaitteen kytkeminen:</strong> Jos rätinä liittyy tiettyyn lähtölaitteeseen, SoundDial mahdollistaa laitteiden vaihtamisen valikkopaneelista ilman, että tarvitsee kaivaa järjestelmäasetuksia.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Microsoft Teamsin volyymi liian pieni Mac? Jokainen toimiva korjaus",
    description:
      "Kuuleeko tuskin ihmisiä Teamsissa, edes maksimivolyymissa? Tässä on kaikki syyt — Teams-asetuksista Bluetooth-koodekkeihin — ja miten puhelun ääni nostetaan yli 100 %.",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>Olet Teams-kokouksessa. Työkaverisi esittelee, mutta hänen äänensä kuulostaa siltä kuin se tulisi tölkin läpi kolmen huoneen päästä. Mac volyymi on 100%. Joukkueiden volyymi on 100%. Olet löytänyt kaiken, mitä löydät. Yhä liian hiljaista.</p>

<p>Matala äänenvoimakkuus Microsoft Teamsissa on yksi yleisimmistä Mac äänivalituksista yritysympäristöissä. Syyt eroavat Zoomista, ja osa korjauksista on Teams-kohtaisia. Käydään ne kaikki läpi.</p>

<h2>1. Tarkista Teamsin ääniasetukset</h2>

<p>Klikkaa profiilikuvakettasi Teams → Settings → Devices (tai Settings → Audio devices uudessa Teamsissa).</p>
<ul>
  <li>Varmista, että oikea <strong>Puhuja</strong> laite on valittu — ei irrotettu näyttö tai passiivinen Bluetooth-laite</li>
  <li>Käytä "Make a test call" -toimintoa varmistaaksesi, että ääni toimii kohtuullisella äänenvoimakkuudella</li>
  <li>Tarkista, ettei "Melunvaimennus" ole asetettu "Korkeaksi" — aggressiivinen melunvaimennus voi vähentää koettua äänenvoimakkuutta</li>
</ul>

<h2>2. Uudet joukkueet vs. klassiset joukkueet</h2>

<p>Microsoft korvasi "Classic Teamsin" "New Teamsilla" (rakennettu eri kehykselle). Uusi versio käsittelee ääntä eri tavalla. Jos olet äskettäin muuttanut:</p>
<ul>
  <li>Äänilaitteiden asetukset eivät välttämättä ole siirtyneet — tarkista kaiuttimen valinta uudelleen</li>
  <li>Uusi Teams käyttää WebRTC-äänikäsittelyä, joka voi toimia eri tavalla kuin klassinen versio</li>
  <li>Kokeile kytkeä "Musiikkitila" pois päältä, jos se on päällä (Asetukset → Äänilaitteet) — se muuttaa sitä, miten Teams käsittelee saapuvaa ääntä</li>
</ul>

<h2>3. Bluetooth-koodekin vaihto</h2>

<p>Jos käytät AirPodseja tai Bluetooth-kuulokkeita, Teams-puheluun liittyminen pakottaa macOS vaihtamaan laadukkaasta AAC-koodekista heikompaan SCO-koodekkiin (koska Teams aktivoi mikrofonisi). SCO heikentää merkittävästi äänenlaatua ja äänenvoimakkuutta.</p>

<p><strong>Korjaus:</strong> Käytä Mac sisäänrakennettua mikrofonia tai USB-mikrofonia ja Bluetooth-kuulokkeet lähtölaitteena. Mene Teams → Settings → Devices → Microphone -osioon ja valitse "MacBook Pro Microphone" (tai USB-mikrofoni). Tämä estää koodekin kytkimisen ja pitää kuulokkeet laadukkaassa AAC-tilassa.</p>

<h2>4. Tarkista macOS lähtölaite ja äänenvoimakkuus</h2>

<p>Mene Järjestelmäasetuksiin → ääni → lähtö. Varmista, että oikea laite on valittu ja ulostulovolyymi on maksimissa. Tarkista myös:</p>
<ul>
  <li><strong>Kuulokkeiden turvallisuus:</strong> Järjestelmäasetukset → ääni → kuulokkeiden turva. Jos "Reduce Loud Audio" on päällä, se rajoittaa kuulokkeiden äänenvoimakkuutta.</li>
  <li><strong>Tasapaino:</strong> Varmista, että vasen-oikea tasapainoliukusäädin on keskellä — jos se on vinossa, toinen puoli on hiljaisempi.</li>
</ul>

<h2>5. Nollaa Core Audio</h2>

<p>macOS:n äänidaemon jää joskus jumiin matalalle lähtötasolle lepotilaan, laitevaihdon tai Teams-päivitysten jälkeen. Avaa terminaali ja käynnistä:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Ääni käynnistyy uudelleen lyhyen katkon jälkeen. Liity uudelleen Teams-kokoukseen ja tarkista, onko äänenvoimakkuus parantunut.</p>

<h2>6. Nosta tiimien volyymi yli 100 %:n</h2>

<p>Jos kaikki asetukset ovat maksimissa ja Teams on edelleen liian hiljainen — esimerkiksi osallistujalla on huono mikrofoni tai kokouksen ääni on luonteeltaan matala — sinun täytyy vahvistaa ääntä yli sen, mitä macOS normaalisti sallii.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Voit nostaa minkä tahansa sovelluksen äänenvoimakkuutta <strong>200%</strong>, mukaan lukien Microsoft Teams. Drag Teamsin liukusäädin 150 %:iin tai 180 %:iin ja ääni vahvistetaan reaaliajassa. Only Teams voimistuu — musiikkisi, selaimesi ja muut sovelluksesi pysyvät nykyisellä tasolla.</p>

<img src="/apps/sounddial.png" alt="SoundDial Microsoft Teams -puheluiden määrän nostaminen yli 100 %:n macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial auttaa myös päinvastaiseen ongelmaan: jos Teamsin ilmoitusäänet ovat liian kovia tarkennusajan aikana, laske Teamsin määrä 15 %:iin tai mykistää se kokonaan samalla kun musiikki pysyy käynnissä. Yksi klikkaus mykistää ja yksi klikkaus poistaa mykistyksen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Kuinka hallita sovelluskohtaista volyymia Mac",
    description:
      "macOS antaa sinulle yhden äänenvoimakkuuden liukusäätimen kaikkeen. Näin saat yksittäiset äänenvoimakkuuden säätimet jokaiselle sovellukselle — ja miksi sillä on enemmän merkitystä kuin luulet.",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>Olet videopuhelussa. Slack kilisee jatkuvasti. Taustalla soi musiikkia. Tarttuu äänenvoimakkuusnäppäimeen ja — kaikki hiljenee. Puhelu, musiikki, ilmoitukset. macOS on täsmälleen yksi äänenvoimakkuuden liukusäädin, ja se ohjaa kaikkea yhtä aikaa.</p>

<p>Windowsissa on ollut sovelluskohtainen äänenvoimakkuuden mikseri Vistasta vuonna 2006 lähtien. Kaksikymmentä vuotta myöhemmin macOS ei vieläkään tiedä. Jos haluat laittaa Spotifyn alaspäin vaikuttamatta Zoom-puheluusi, Applella ei ole sinulle sisäänrakennettua vastausta.</p>

<p>Tämä opas selittää, mitä sovelluskohtainen äänenvoimakkuuden säätö on, miksi macOS sitä ei ole ja miten sen saa.</p>

<h2>Mitä sovelluskohtainen määrä oikeastaan tarkoittaa</h2>

<p>Sovelluskohtainen volyymi tarkoittaa, että jokaisella sovelluksella Mac on oma itsenäinen äänenvoimakkuuden liukusäädin. Voit asettaa Spotifyn 30 %:iin, pitää Zoomin 100 %:ssa, mykistää Slackin kokonaan ja jättää Safarin 50 %:iin — kaikki samaan aikaan. Yhden sovelluksen äänenvoimakkuuden muuttaminen ei vaikuta muihin sovelluksiin.</p>

<p>Tämä eroaa järjestelmän volyymista, joka on yksi master-liukusäädin, joka skaalaa kaiken suhteellisesti. Jos järjestelmäsi äänenvoimakkuus on 50 % ja Spotify pyörii täysillä, ei ole mahdollista laittaa pelkkää Spotify-tilaa hiljemmalleen ilman sovelluskohtaista mikseriä.</p>

<h2>Miksi macOS tätä ei sisällä.</h2>

<p>Applen ääniarkkitehtuuri (Core Audio) tukee ehdottomasti sovelluskohtaista äänenvoimakkuuden säätöä kehystasolla. Syynä siihen, miksi macOS ei paljasta sitä käyttöliittymässä, on suunnittelufilosofian valinta: Apple suosii vähemmän ohjaimia ja yksinkertaisempaa pintaa. Yksi liukusäädin on yksinkertaisempi kuin kaksitoista.</p>

<p>Ongelma on, että "yksinkertaisempi" lakkaa olemasta yksinkertaisempi heti, kun useampi äänilähde kilpailee huomiostasi. Yksi äänenvoimakkuusnäppäin, joka ohjaa kaikkea, on tyylikäs, kun teet yhtä asiaa. Se on aktiivisesti vihamielistä, kun puhelussa on musiikkia ja ilmoituksia samaan aikaan — juuri näin useimmat ihmiset oikeasti käyttävät Mac.</p>

<h2>Sisäänrakennetut kiertotavat (ja miksi ne eivät toimi)</h2>

<h3>1. Sovelluksen sisäiset äänenvoimakkuuden säätimet</h3>
<p>Joillakin sovelluksilla on omat äänenvoimakkuusliukusäätimet — Spotify, VLC, QuickTime. Mutta useimmat eivät. Slack ei tee niin. Kromivälilehdet eivät. Järjestelmän äänet eivät. Ja vaikka sovelluksessa olisi liukusäädin, sinun täytyy avata se, löytää liukusäädin, säätää se ja sitten palata siihen, mitä olit tekemässä. Se on viisi klikkausta jostain, jonka pitäisi olla yksi.</p>

<h3>2. Audio MIDI -asetus</h3>
<p>macOS sisältää Audio MIDI Setup -toiminnon Utilities-kansiossa. Se mahdollistaa äänilaitteiden konfiguroinnin ja aggregaattisten laitteiden luomisen, mutta siinä ei ole yhtään sovelluskohtaista äänenvoimakkuuden säätöä. Se on laitekonfigurointityökalu, ei mikseri.</p>

<h3>3. Useat lähtölaitteet</h3>
<p>Teoriassa voisit reitittää eri sovellukset eri lähtölaitteisiin (kuulokkeet vs kaiuttimet) ja ohjata niitä erikseen. Mutta se vaatii ylimääräistä laitteistoa, manuaalista reititystä per sovellus, eikä oikeastaan anna itsenäistä volyymia — vain itsenäistä päälle/pois -toimintoa laitetta kohden.</p>

<h2>Miten sovelluskohtainen volyymimikseri toimii</h2>

<p>Kunnollinen sovelluskohtainen äänenvoimakkuusmikseri sijaitsee valikkopalkissa ja näyttää kaikki sovellukset, jotka tuottavat tällä hetkellä ääntä. Jokaisella sovelluksella on oma liukusäädin. Vedät sitä ylös tai alas, ja vain kyseisen sovelluksen äänenvoimakkuus muuttuu. Järjestelmän tilavuus pysyy koskemattomana.</p>

<p>Konepellin alla tämä toimii käyttämällä macOS's <strong>Core Audio Tap API</strong> (esitelty macOS 14) tai vanhempia virtuaalisten äänilaitteiden tekniikoita, joilla voidaan siepata jokaisen sovelluksen äänivirta itsenäisesti ja skaalata sen amplitudi ennen kuin se saavuttaa kaiuttimet.</p>

<p>Keskeiset ominaisuudet, jotka erottavat hyvän mikserin huonosta:</p>

<ul>
  <li><strong>Reaaliaikainen sovellustunnistus.</strong> Kun uusi sovellus alkaa toistaa ääntä, sen pitäisi ilmestyä mikseriin automaattisesti. Ei manuaalista asennusta.</li>
  <li><strong>Sovelluskohtainen mykistys.</strong> Yhdellä klikkauksella voit hiljentää tietyn sovelluksen koskematta sen liukusäätimen asentoon.</li>
  <li><strong>Äänenvoimakkuuden nosto.</strong> Jotkut sovellukset (katson sinua, hiljaiset podcast-soittimet) menevät liian matalalle. Hyvä mikseri antaa sinun boostata yli 100 %.</li>
  <li><strong>Profiilit.</strong> Eri äänenvoimakkuusasetukset eri tilanteisiin — "Focus" kaikilla äänialoilla paitsi musiikki mykistettynä, "Meeting" Zoomilla 100 % ja kaikki muu 20 %, "Gaming" pelin äänellä tehostettuna.</li>
  <li><strong>Automaattinen kumartuminen.</strong> Laske musiikki automaattisesti puhelun alkaessa ja palauta se puhelun päätyttyä. Tämä yksinään on koko sovelluksen arvoista.</li>
  <li><strong>Ruokalistan natiivi.</strong> Sen pitäisi olla valikkopalkissa, ei telakkaikkunassa. Vilkaiset ylös, säädät ja palaat töihin. Ei sovellusten vaihtoa.</li>
</ul>

<h2>Kuka tätä tarvitsee</h2>

<p>Kuka tahansa, joka tekee useamman kuin yhden äänijutun samaan aikaan. Se koskee useimpia ihmisiä, mutta erityisesti:</p>

<ul>
  <li><strong>Etätyöntekijät</strong> — puhelut + musiikki + ilmoitukset ovat yleisin törmäys</li>
  <li><strong>Striimaajat ja podcasterit</strong> — tarkka hallinta siitä, mitä yleisö kuulee verrattuna siihen, mitä itse kuulet</li>
  <li><strong>Muusikot ja tuottajat</strong> — tarve eristää DAW-lähtö referenssireiteistä ja viestintävälineistä</li>
  <li><strong>Pelaajat</strong> — pelin ääni vs. Discord vs. musiikki on jatkuvaa tasapainottelua</li>
  <li><strong>Onko joku, jolla on ilmoitusten väsymystä</strong> — mykistää Slack, pitää kaikki muu</li>
</ul>

<h2>SoundDial</h2>

<p>Minä rakensin <strong>SoundDial</strong> koska Mac volyymisekoitinta, jota halusin, ei ollut olemassa. Se sijaitsee valikkopalkissasi, näyttää jokaisen ääntä tuottavan sovelluksen ja antaa jokaiselle oman liukusäätimen. Sovelluskohtainen mykistys, äänenvoimakkuuden nosto, profiilit ja automaattinen alentaminen, joka laskee musiikkia puhelun alkaessa. Kertatilaus, macOS 14+, ei tilausta.</p>

<p>Volyymisekoittimen macOS olisi pitänyt olla sisäänrakennettu.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Kuinka mykistää Slack Mac mykistämättä kaikkea muuta",
    description:
      "Slack-ilmoitukset keskeyttävät keskittymistäsi, mutta et halua hiljentää musiikkiasi tai puheluita. Näin voit mykistää vain Slackin macOS.",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>Olet syvällä keskittyneessä työssä. Spotify soittaa täydellistä keskittymissoittolistaa. Sitten — <em>koputus sivellin</em> — Löysät pingit. Ja taas. Ja taas. Kolme kanavaa, kaksi yksityisviestiä ja ketjuilmoitus kolmenkymmenen sekunnin sisällä. Haluat mykistää Slackin, mutta pitää musiikkisi. macOS sanoo: mykistä kaikki tai älä mykistä mitään.</p>

<p>Slackin ilmoitusäänet ovat yksi Mac:n yleisimmistä äänivalituksista etätyöntekijöille. Ne on suunniteltu herättämään huomiosi, mikä on juuri ongelma, kun sinun täytyy keskittyä.</p>

<h2>Vaihtoehto 1: Mykistää ilmoitukset itse Slackissa</h2>

<p>Slackissa on "Taukoilmoitukset" -ominaisuus:</p>
<ol>
  <li>Klikkaa profiilikuvaasi Slackin sivupalkissa</li>
  <li>Klikkaa "Keskeytä ilmoitukset"</li>
  <li>Valitse kesto (30 min, 1 tunti, 2 tuntia jne.)</li>
</ol>

<p>Tämä estää ilmoitusmerkit ja äänet valitun ajan. Voit myös mykistää yksittäiset kanavat napsauttamalla hiiren oikealla → "Mykistä kanava".</p>

<p><strong>Rajoitukset:</strong> Tämä on kaikki tai ei mitään per kanava. Et voi tehdä Slackia <em>hiljaisempi</em> — vain täysin hiljaa tai täysin päällä. Ja jos unohdat poistaa tauon, menetät viestit keskittymissession päätyttyä. Se ei myöskään vaimenna Slackin sovelluksen sisäisiä ääniä, jos sovellus on auki.</p>

<h2>Vaihtoehto 2: Poista Slack-äänet pois macOS ilmoituksista</h2>

<p>Mene Järjestelmäasetuksiin → Ilmoitukset → Slack. Kytke pois päältä "Toista ääni ilmoituksia varten."</p>

<p><strong>Rajoitukset:</strong> Tämä poistaa kaikki Slack-ilmoitusäänet pysyvästi (kunnes kytket sen takaisin päälle). Ja se vaikuttaa vain macOS-tason ilmoituksiin — jos Slack toistaa ääniä oman äänimoottorinsa kautta, ilmoitusasetus ei välttämättä tallenna kaikkia.</p>

<h2>Vaihtoehto 3: Käytä tarkennustilaa</h2>

<p>Luo "Focus"- tai "Work"-fokustila Järjestelmäasetuksista → Fokus. Lisää Slack "Vaimennettu"-listalle. Kun aktivoit Focus-tilan, Slack-ilmoitukset vaimenevat.</p>

<p><strong>Rajoitukset:</strong> Tarkennustilat vaimentavat ilmoitukset sekä visuaalisesti että äänellisesti pois, mutta ne eivät anna tarkkaa äänenvoimakkuuden säätöä. Et voi sanoa "Slack-ilmoitukset 10 % äänenvoimakkuudella" — se on joko täysin sallittu tai täysin mykistetty ääni.</p>

<h2>Vaihtoehto 4: Sovelluskohtainen äänenvoimakkuuden säätö (todellinen ratkaisu)</h2>

<p>Mitä oikeasti haluat, on yksinkertaista: laske Slackin äänenvoimakkuus 10–15 %:iin ja pitää kaikki muu normaalilla tasolla. Slack-pingit kuuluvat, jos kuuntelet niitä, mutta ne eivät keskeytä flow'tasi. Musiikki pysyy täysillä. Puhelut pysyvät täysillä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa Slackille oman itsenäisen äänenvoimakkuusliukusäätimen. Aseta se juuri sinulle sopivalle tasolle — tai mykistää se kokonaan yhdellä klikkauksella. Kun olet valmis keskittymään Slackiin uudelleen, poista se ja äänenvoimakkuus palaa entiselleen.</p>

<img src="/apps/sounddial.png" alt="SoundDial Slack mykistetty ja Spotify pyörii normaalilla äänenvoimakkuudella macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Ihanteellinen Slack-työnkulku</h3>
<ul>
  <li><strong>Keskittymisaika:</strong> Löysä 10 % tai vaimennettu. Spotify 40 %. Ei keskeytyksiä.</li>
  <li><strong>Käytettävissä oleva aika:</strong> Slack 40 %:ssa. Ilmoitukset näkyvät ilman, että ne yllättävät.</li>
  <li><strong>Tapaamisaika:</strong> Slack vaimennettu. Zoomaa 100%. Auto-kumartelu hoitaa loput.</li>
</ul>

<p>Tallenna jokainen näistä <strong>Volyymiprofiili</strong> SoundDial ja vaihtaa niiden välillä yhdellä klikkauksella. Parempi vielä, käytä automaattista kaatamista — kun puhelu alkaa, SoundDial automaattisesti laskee kaiken (mukaan lukien Slackin) ja palauttaa sen puhelun päätyttyä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Kuinka asettaa äänenvoimakkuusprofiilit eri tilanteisiin Mac",
    description:
      "Erilaisia äänenvoimakkuusasetuksia kokouksiin, keskittymiseen, pelaamiseen ja rentoutumiseen — vaihdettavissa yhdellä klikkauksella. Näin volyymiprofiilit toimivat macOS.",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>Klo 9 aamulla olet Zoom-puhelussa — haluat Zoomin 100 %, Spotify mykistettynä, Slack mykistettynä. Klo 10 puhelu päättyy — haluat Spotifyn 40 %, Slack 15 %, Zoom ei ole tärkeää. Keskipäivällä pelaat — peli 60 %, Discord 100 %, kaikki muu mykistys. Klo 18 katsot YouTubea — selain 80 %, kaikki muu hiljaista.</p>

<p>Jokaisella tilanteella on oma ideaalinen äänenvoimakkuuden kokoonpanonsa. Ja joka kerta kun tilanne muuttuu, sinun täytyy säätää viisi tai kuusi sovellusta manuaalisesti. Tai voit tallentaa jokaisen asetelman profiiliksi ja vaihtaa yhdellä klikkauksella.</p>

<h2>Mitä ovat volyymiprofiilit?</h2>

<p>Äänenvoimakkuusprofiili on tallennettu tilannekuva jokaisen sovelluksen äänenvoimakkuudesta ja mykistystilasta. Asetat sovelluksesi haluamallasi tavalla — Spotify 30 %, Zoom 100 %, Slack mykistettynä — ja tallennat sen nimettynä profiilina kuten "Work" tai "Meeting". Myöhemmin lisäät profiilin ja jokainen sovellus hyppää välittömästi tallennettuun äänenvoimakkuuteensa.</p>

<p>Ajattele sitä kuin näytön esiasetuksia äänelle: aivan kuten sinulla saattaa olla näyttöjärjestely "työpöydän asettelun" ja "esitystilan" välillä, äänenvoimakkuusprofiilit antavat vaihtaa ääniasetuksia ilman, että jokaista sovellusta tarvitsee säätää manuaalisesti.</p>

<h2>macOS ei ole äänenvoimakkuusprofiileja</h2>

<p>macOS on tarkennustilat (Älä häiritse, työ, henkilökohtainen jne.), jotka säätelevät, mitkä ilmoitukset menevät läpi. Mutta tarkennustilat eivät säätele äänenvoimakkuutta. He voivat tukahduttaa ilmoitusäänet kokonaan, mutta eivät voi asettaa Spotifyta 30 %:iin tai Zoomia 100 %:iin. Sovelluskohtaisia volyymiasetuksia ei voi tallentaa ja palauttaa sisäänrakennettuna.</p>

<h2>Profiilien luominen SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sisältää sisäänrakennetun profiilijärjestelmän. Näin sen voi asettaa:</p>

<h3>Profiilin luominen</h3>
<ol>
  <li>Avaa SoundDial valikkopalkista</li>
  <li>Säädä jokaisen sovelluksen äänenvoimakkuus haluamallasi tavalla tiettyyn tilanteeseen</li>
  <li>Klikkaa profiiliosiossa "+"-painiketta</li>
  <li>Anna sille nimi (esim. "Kokous") ja valitse kuvake</li>
  <li>Valmista — nykyinen äänenvoimakkuusasetuksesi tallentuu</li>
</ol>

<h3>Kytkentäprofiilit</h3>
<p>Tallennetut profiilisi näkyvät painikkeina SoundDial:n ponnahdusikkunassa. Klikkaa yhtä ja jokainen sovellus vaihtaa välittömästi profiiliin tallennettuihin volyymeihin. Yksi klikkaus korvaa viisi tai kuusi manuaalista säätöä.</p>

<img src="/apps/sounddial.png" alt="SoundDial äänenvoimakkuusprofiilit — yhdellä klikkauksella voi vaihtaa Meeting-, Focus- ja Chill-tilojen välillä macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Esimerkkiprofiileja</h3>

<p><strong>Kokous</strong></p>
<ul>
  <li>Zoom / Teams: 100%</li>
  <li>Spotify: mykistetty</li>
  <li>Slack: vaimennettu</li>
  <li>Selain: mykistetty</li>
</ul>

<p><strong>Painopistetyö</strong></p>
<ul>
  <li>Spotify: 35 %</li>
  <li>Slack: 10%</li>
  <li>Posti: mykistetty</li>
  <li>Selain: 50 %</li>
</ul>

<p><strong>Pelaaminen</strong></p>
<ul>
  <li>Peli: 60%</li>
  <li>Discord: 100%</li>
  <li>Spotify: 20 %</li>
  <li>Kaikki muu: mykistetty</li>
</ul>

<p><strong>Rauhoitu</strong></p>
<ul>
  <li>Spotify: 70%</li>
  <li>Selain: 60 %</li>
  <li>Ilmoitukset: 20 %</li>
</ul>

<h3>Profiilien päivittäminen</h3>
<p>Jos haluamasi äänenvoimakkuus muuttuu ajan myötä, säädä vain liukusäätimiä ja päivitä profiili. Seuraavalla kerralla kun käytät sitä, se käyttää uusia asetuksia.</p>

<h2>Profiilit + automaattinen kumartelu = täysin automaattinen</h2>

<p>Yhdistä profiilit SoundDial:n automaattiseen kumartumisominaisuuteen, niin äänenvoimakkuutta tarvitsee harvoin koskea. Käytä "Focus Work" -profiiliasi aamulla. Kun puhelu tulee, automaattinen kumartelu laskee kaiken paitsi puhelusovelluksen. Kun puhelu päättyy, kaikki palaa profiilitasoillesi. Päivän päätteeksi vaihda "Chill"-tilaan yhdellä klikkauksella.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Onko Zoom-puhelun määrä liian matala Mac? Kuinka vahvistaa sitä",
    description:
      "Zoomissa tuskin kuulee ihmisiä edes maksimivolyymissa. Tässä on kaikki korjaukset — Zoom-asetuksista puhelun äänen nostamiseen yli 100 % sovelluskohtaisella äänenvoimakkuusmikserillä.",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>Olet Zoom-puhelussa. Toinen puhuu, mutta hänen äänensä on tuskin kuultavissa. Mac volyymi on maksimissa. Zoomin kaiuttimen äänenvoimakkuus on maksimi. Nojaat näyttöäsi vasten, ponnistellen kuullaksesi. Tämän ei pitäisi olla näin vaikeaa.</p>

<p>Pieni Zoom-puheluiden määrä on erittäin yleistä, ja siihen on useita syitä. Käydään läpi kaikki korjaukset, yksinkertaisista asetusten tarkistuksista Zoomin äänen parantamiseen normaalin rajan yli.</p>

<h2>1. Tarkista Zoomin äänilähtöasetukset</h2>

<p>Avaa Zoom → Asetukset → Audio. Kohdassa "Speaker" varmista:</p>
<ul>
  <li>Oikea lähtölaite valitaan (ei passiivinen näyttö tai irrotettu laite)</li>
  <li>Kaiuttimen äänenvoimakkuuden liukusäädin on maksimitasolla</li>
  <li>Klikkaa "Test Speaker" varmistaaksesi, että kuulet testiäänen selvästi</li>
</ul>

<p>Jos testiääni on myös hiljainen, ongelma on Zoomin ja kaiuttimien välillä — jatka alla olevilla korjauksilla. Jos testiääni on kunnossa mutta varsinaiset puhelut ovat hiljaisia, toisella osallistujalla on todennäköisesti mikrofoniongelma omassa päässä.</p>

<h2>2. Tarkista Mac lähtölaite</h2>

<p>Mene Järjestelmäasetuksiin → ääni → lähtö. Varmista, että oikea laite on valittu. Jos olet äskettäin yhdistänyt tai irrottanut kuulokkeet, näytön tai Bluetooth-laitteet, macOS saattoi vaihtaa automaattisesti odottamattomaan lähtöön.</p>

<h2>3. Poista käytöstä Zoomin automaattinen äänenvoimakkuuden säätö</h2>

<p>Zoomissa on "Säädä mikrofonin äänenvoimakkuutta automaattisesti" -asetus (Asetukset → Ääni), joka voi myös vaikuttaa havaittuihin lähtötasoihin joissain kokoonpanoissa. Kokeile poistaa se käytöstä ja testata uudelleen.</p>

<h2>4. Poista taustamelun vaimennus käytöstä (väliaikaisesti)</h2>

<p>Zoomin melunvaimennus suodattaa taustamelun aggressiivisesti — mutta samalla se voi joskus vähentää toisen henkilön äänen koettua voimakkuutta, erityisesti hiljaisissa ympäristöissä. Kokeile asettaa "Suppress background noise" "Low" tai "Auto" "High" sijaan.</p>

<h2>5. Tarkista Bluetooth-koodekki</h2>

<p>Jos käytät AirPodsia tai Bluetooth-kuulokkeita, Zoom-puheluun liittyminen pakottaa macOS vaihtamaan laadukkaasta AAC-koodekista heikompaan SCO-koodekkiin (koska Zoom käyttää mikrofonia). SCO heikentää äänenlaatua ja voi tehdä puhelun äänestä hiljaisemman ja pakatumman.</p>

<p><strong>Korjaus:</strong> Käytä erillistä mikrofonia (sisäänrakennettu Mac mikrofoni tai USB-mikrofoni) ja pidä AirPods lähtölaitteena. Tämä estää koodekin vaihtamisen — AirPodit pysyvät AAC-tilassa paremmalla äänenlaadulla ja äänenvoimakkuudella.</p>

<h2>6. Nollaa Core Audio</h2>

<p>macOS:n äänidaemon joutuu tilaan, jossa lähtötasot laskevat, erityisesti lepo-/herätys- tai laitevaihtojen jälkeen. Avaa terminaali ja käynnistä:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Ääni käynnistyy uudelleen lyhyen katkon jälkeen. Palaa Zoom-puheluun ja tarkista, onko äänenvoimakkuus parantunut.</p>

<h2>7. Nosta Zoomin äänenvoimakkuus yli 100 %</h2>

<p>Jos olet kokeillut kaikkea yllä mainittua ja Zoom on edelleen liian hiljainen, ongelma voi johtua siitä, että Zoomin äänilähtö ei yksinkertaisesti ole tarpeeksi kova kokoonpanollesi. Joillakin osallistujilla on hiljaiset mikrofonit, ja Zoom voi tehdä vain rajallisesti signaalin vahvistamiseksi.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Voit nostaa minkä tahansa sovelluksen äänenvoimakkuutta <strong>200%</strong> — mukaan lukien Zoom. Jos osallistuja on liian hiljainen, vedä Zoomin liukusäädin 150 %:iin tai 180 %:iin. Äänisignaali on vahvistettu Zoomin sisäänrakennetun maksimin yli, jolloin jopa hiljaisimmat äänet kuuluvat.</p>

<img src="/apps/sounddial.png" alt="SoundDial Zoom-puhelun äänenvoimakkuuden nostaminen 180 %:iin Mac-tilassa, jotta ääni olisi selkeämpi videopuheluiden aikana" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tärkein etu: Zoomin vahvistaminen ei vaikuta mihinkään muuhun. Musiikkisi, ilmoituksesi ja muut sovelluksesi pysyvät nykyisellä tasolla. Vain Zoom kovenee.</p>

<p>Tämä toimii myös <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong>, ja kaikki muut soittosovellukset. Jos kuulet sen, SoundDial voi vahvistaa sitä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Kuinka laskea Spotify ilman, että lasket kaikkea muuta Mac",
    description:
      "Haluat Spotifyn taustamusiikiksi, mutta äänenvoimakkuuden näppäimillä hiljentäminen tekee puhelusta ja kaikesta muusta hiljaisempaa. Tässä on korjaus.",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>Teet töitä. Spotify soittaa taustamusiikkia. Se on vähän liian kova — kilpailee podcastin kanssa toisessa välilehdessä tai vaikeuttaa keskittymistä. Painat äänenvoimakkuuden alaspäintä. Spotify hiljenee. Mutta niin tekee kaikki muu — Zoom-puhelusi, ilmoitusäänet, selaimen ääni. Kaikki hiljaisempaa. Se ei ollut sitä, mitä halusit.</p>

<p>Tämä johtuu siitä, että macOS on yksi äänenvoimakkuuden liukusäädin. Paina äänenvoimakkuusnäppäintä, ja se säätää <em>Järjestelmän tilavuus</em>, joka skaalaa kaikki sovellukset yhtä paljon. Sisäänrakennetuilla ohjauksilla ei voi sanoa "vain laske Spotifyta".</p>

<h2>Kiertotie: Spotifyn sovelluksen sisäinen määrä</h2>

<p>Spotifylla on oma äänenvoimakkuuden liukusäädin sovelluksen oikeassa alakulmassa (tai soittimen alareunassa). Voit laskea tätä järjestelmän äänenvoimakkuudesta riippumatta. Jos järjestelmäsi on 80 % ja Spotifyn liukusäädin 30 %, Spotify toistaa käytännössä 24 % ja kaikki muu pysyy 80 %:ssa.</p>

<p><strong>Ongelma:</strong> Sinun täytyy vaihtaa Spotify-ikkunaan, löytää liukusäädin, säätää sitä ja sitten palata siihen, mitä olit tekemässä. Ja Spotifyn liukusäädin on pieni, epätarkka, eikä näytä prosenttiosuutta — vain visuaalista palkkia. Jos olet kokouksessa ja sinun täytyy nopeasti laskea musiikkia, pienen liukusäätimen haparointi toisessa sovelluksessa ei ole ihanteellista.</p>

<h2>Todellinen ratkaisu: sovelluskohtainen äänenvoimakkuuden säätö</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Asettaa valikoon jokaiselle sovellukselle äänenvoimakkuusliukusäädin. Jotta Spotifyn taso laskee vaikuttamatta mihinkään muuhun:</p>

<ol>
  <li>Klikkaa SoundDial-kuvaketta valikkopalkissa</li>
  <li>Löydä Spotify listalta</li>
  <li>Vedä liukusäädin alas</li>
</ol>

<p>Valmista. Spotify on hiljaisempi. Zoom on ennallaan. Ilmoitukset pysyvät ennallaan. Kaikki muu on ennallaan. Et poistunut nykyisestä sovelluksestasi — valikkopalkin ponnahdusikkuna avautuu juuri siihen kohtaan, missä olet.</p>

<img src="/apps/sounddial.png" alt="SoundDial Spotifyn äänenvoimakkuuden laskeminen itsenäisesti samalla kun muut sovellukset pysyvät täysillä macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Vielä parempi: tallenna se profiilina</h2>

<p>Jos haluat säännöllisesti Spotifyn matalammalla taustalla työskennellessäsi, tallenna haluamasi äänenvoimakkuusasetus profiiliksi. Luo "Työ"-profiili, jossa Spotify on 25%, Zoom 100% ja Slack 15%. Seuraavan kerran kun istut töihin, käytä profiilia yhdellä klikkauksella sen sijaan, että säätäisit sovellusta erikseen.</p>

<h2>Vielä parempaa: automaattinen kyykistyminen puheluiden aikana</h2>

<p>SoundDial voi automaattisesti laskea Spotifyn, kun liityt puheluun. Ota automaattinen kumartelu käyttöön asetuksista, valitse kuinka paljon taustaääniä vähennetään (oletuksena 30 %), ja SoundDial hoitaa loput. Musiikkisi väistää puhelun alkaessa ja palaa takaisin sen päättyessä. Ei lainkaan manuaalista säätöä.</p>

<p>Tämä on työnkulku macOS pitäisi tukea natiivisti: "Spotify tällä tasolla, kaikki muu tuolla tasolla." Koska Apple ei ole rakentanut sitä, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> täyttää aukon.</p>

<p>Kertakäyttö <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Ei tilausta. macOS 14,2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Onko macOS Tahoella sovelluskohtainen äänenvoimakkuuden säätö?",
    description:
      "macOS Tahoe (macOS 26) toi mukanaan suuria päivityksiä, mutta lisäsikö Apple vihdoin volyymimikserin? Tässä on vastaus — ja miten saat sovelluskohtaisen äänenvoimakkuuden säätöön juuri nyt.",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>Joka vuosi Mac käyttäjä toivoo, että seuraava macOS julkaisu sisältää vihdoin äänenvoimakkuuden mikserin. Joka vuosi he ovat pettyneitä. macOS Tahoen (macOS 26) myötä Apple toi mukanaan uudistetun käyttöliittymän, uusia järjestelmäominaisuuksia ja merkittäviä parannuksia konepellin alla. Mutta lisättiinkö sovelluskohtainen äänenvoimakkuuden säätö?</p>

<h2>Lyhyt vastaus: ei</h2>

<p>macOS Tahoe ei sisällä sisäänrakennettua äänenvoimakkuusmikseriä. Järjestelmäasetuksissa, Ohjauskeskuksessa tai valikkopalkissa ei ole sovelluskohtaista äänenvoimakkuuden säätöä. Äänikokemus on sama kuin kaikissa aiemmissa macOS-julkaisuissa: yksi järjestelmän äänenvoimakkuuden liukusäädin, joka ohjaa kaikkea kerralla.</p>

<p>Applen ohjauskeskus näyttää edelleen yhden äänenvoimakkuuden liukusäädin. Järjestelmäasetuksissa Ääniasetukset antavat edelleen valita lähtölaitteen ja säätää yhtä master-äänenvoimakkuutta. Ei ole piilotettua ominaisuutta, edistynyttä vaihtoehtoa eikä uutta API:ta, joka paljastaisi sovelluskohtaisen volyymin käyttäjille.</p>

<h2>Mitä macOS Tahoe paransi äänen osalta</h2>

<p>Vaikka sovelluskohtainen äänenvoimakkuus puuttuu edelleen, Tahoe toi mukanaan joitakin ääniin liittyviä parannuksia:</p>

<ul>
  <li><strong>Parannettu Bluetooth-äänen vakaus</strong> — vähemmän irtikytkentöjä ja koodekkikytkentäongelmia AirPodseissa ja kolmannen osapuolen kuulokkeissa</li>
  <li><strong>Parempi tilallinen äänenkäsittely</strong> — parannettu pään seuranta ja tarkempi avaruudellinen renderöinti tuetulle sisällölle</li>
  <li><strong>Core Audio -suorituskyky</strong> — pienempi viive ammattimaisille äänisovelluksille ja musiikin tuotannolle</li>
</ul>

<p>Mikään näistä ei vastaa peruspyyntöön: "Anna minun laittaa Spotifyn alaspäin vaikuttamatta Zoomiin."</p>

<h2>Lisääkö Apple koskaan volyymisekoittimen?</h2>

<p>Ei ole merkkejä siitä, että Apple aikoo lisätä tämän ominaisuuden. Sitä ei ole esiintynyt missään macOS betassa, WWDC-sessiossa tai tunnetussa tiekartassa. Applen äänisuunnittelufilosofia suosii edelleen yksinkertaisuutta — yksi liukusäädin kaikkeen.</p>

<p>Ironista kyllä, Applen oma Core Audio -kehys tukee täysin prosessikohtaista äänen napauttamista ja äänenvoimakkuuden säätöä. Vuonna macOS 14 (Sonoma) esitelty Audio Tap API teki kehittäjille entistä helpommaksi rakentaa sovelluskohtaisia äänityökaluja. Apple rakensi infrastruktuurin — he eivät vain ole rakentaneet käyttöliittymää sille.</p>

<h2>Kuinka saada sovelluskohtainen äänenvoimakkuuden säätö macOS Tahoessa</h2>

<p>Koska Apple ei aio rakentaa sitä, kolmannen osapuolen sovellukset täyttävät aukon. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> on natiivi macOS valikkopalkkisovellus, joka tarjoaa äänenvoimakkuusmikserin — itsenäiset äänenvoimakkuuden liukusäätimet jokaiselle käynnissä olevalle sovellukselle.</p>

<img src="/apps/sounddial.png" alt="SoundDial tarjoaa sovelluskohtaisen äänenvoimakkuuden hallinnan macOS Tahoella" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial on täysin yhteensopiva macOS Tahoen kanssa ja käyttää Applen modernia Core Audio Tap API:ta — kolmannen osapuolen ääniajureita tai ytimen laajennuksia ei tarvita. Se toimii siististi macOS:n tietoturvamallin kanssa eikä häiritse muita äänisovelluksia.</p>

<p>Mitä saat:</p>
<ul>
  <li><strong>Sovelluskohtaiset volyymiliukusäätimet</strong> — 0–200 % jokaiselle sovellukselle</li>
  <li><strong>Sovelluskohtainen mykistys</strong> — yksi klikkaus hiljentää minkä tahansa sovelluksen</li>
  <li><strong>Volyymiprofiilit</strong> — tallenna asetukset ja vaihda välittömästi</li>
  <li><strong>Auto-ducking</strong> — taustaääni vaimenee automaattisesti puheluiden aikana</li>
  <li><strong>Äänenvoimakkuuden korotus</strong> — vahvistaa hiljaisia sovelluksia yli 100 %</li>
  <li><strong>Tilavuusmuisti</strong> — muistaa jokaisen sovelluksen äänenvoimakkuuden uudelleenkäynnistysten välillä</li>
  <li><strong>Näppäimistön pikanäppäimet</strong> — kytke mikseri päälle tai mykistää kaikki näppäimistöltä</li>
</ul>

<p>Kertakäyttö <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Ei tilausta. macOS 14,2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Kuinka soittaa musiikkia kaiuttimista puheluita vastaan kuulokkeilla (Mac)",
    description:
      "Haluatko Spotifyn työpöytäkaiuttimiin ja Zoomin AirPodseihin samaan aikaan? macOS ei tee tästä helppoa — tässä on se, mikä oikeasti toimii.",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>Tässä on järkevä asia, jonka saatat haluta tehdä: soita musiikkia pöytäkaiuttimista samalla kun otat Zoom-puhelun AirPodseillasi. Musiikki täyttää huoneen, puhelu on yksityinen korvissasi. Kuulostaa täysin järkevältä.</p>

<p>macOS sanoo ei. Kun valitset äänilähtölaitteen, <em>jokaisen</em> Sovellus käyttää sitä. Vaihda AirPodsiin Zoomia varten ja Spotify vaihtaa myös AirPodsiin. Vaihda kaiuttimiin Spotifyssa, ja Zoom menee myös kaiuttimiin. Yksi lähtölaite kaikkeen. Ei poikkeuksia.</p>

<h2>Miksi macOS voi tehdä tätä natiivisti</h2>

<p>macOS reitittää kaiken äänen yhden valitun lähtölaitteen kautta. Valitset "MacBook Pro Speakers" tai "AirPods Pro" järjestelmäasetuksista → Sound → Outputista, ja jokainen sovellus lähettää äänen kyseiselle laitteelle. Sovelluskohtaista äänen reititystä ei ole.</p>

<p>Tämä suunnittelu on järkevä yksinkertaisuuden vuoksi — useimmat haluavat kaiken äänen tulevan samasta paikasta. Mutta se hajoaa heti, kun haluat eri sovelluksia eri ulostuloille.</p>

<h2>Aggregaattilaitteen kiertotie</h2>

<p>macOS:n Audio MIDI -asetus (löytyy Applications → Utilities -osiosta) antaa sinun luoda "Aggregate Device", joka yhdistää useita ulostuloja yhdeksi. Kuitenkin aggregaattilaite lähettää <em>Sama ääni</em> kaikille yhdistetyille ulostuloille — ei voi valita, mikä sovellus menee mihinkin ulostuloon. Se on suunniteltu monikaiutinasetuksiin, ei sovelluskohtaiseen reititykseen.</p>

<h2>Monilähtölaitteen kiertotie</h2>

<p>Kuten aggregaattilaitteissa, voit luoda "Multi-Output Device" -laitteen Audio MIDI Setupissa. Tämä lähettää identtisen äänen useille lähtöille samanaikaisesti. Taas kerran, ääni on sama kaikkialla — et voi reitittää Spotifyta kaiuttimiin ja Zoomia kuulokkeisiin tällä tavalla.</p>

<h2>Mikä oikeasti toimii: sovelluskohtaiset äänen reitityssovellukset</h2>

<p>Jotta voit todella reitittää eri sovelluksia eri lähtölaitteisiin, tarvitset kolmannen osapuolen äänenreitityssovelluksen, joka sieppaa jokaisen sovelluksen äänen ja lähettää sen määrittelemällesi ulostulolle. Sovellukset kuten SoundSource (Rogue Amoebalta) tukevat tätä — niiden avulla voit määrittää yksittäisiä lähtölaitteita yksittäisille sovelluksille.</p>

<h2>Yksinkertaisempi lähestymistapa: tilavuuteen perustuva erottelu</h2>

<p>Jos päätavoitteesi on kuulla puhelusi selkeästi musiikin yli (sen sijaan, että ohjaisit ne fyysisesti eri laitteille), sovelluskohtainen äänenvoimakkuuden säätö ratkaisee ongelman yksinkertaisemmin.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa jokaiselle sovellukselle oman äänenvoimakkuusliukusäätimen. Puhelun aikana voit:</p>

<ul>
  <li>Aseta Zoom/Teams/FaceTime tilaan <strong>100%</strong></li>
  <li>Laske Spotify <strong>20%</strong></li>
  <li>Mykistä kaikki muu</li>
</ul>

<p>Päätöksesi on kristallinkirkas. Musiikki on hienovarainen tausta. Laitteen vaihtoa ei tarvita.</p>

<img src="/apps/sounddial.png" alt="SoundDial näyttää Zoomin täysillä äänenvoimakkuudella ja Spotifyn matalammalle puhelun aikana macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Vielä parempi: SoundDial <strong>Automaattinen kyykistyminen</strong> tekee tämän automaattisesti. Kun liityt puheluun, se havaitsee mikrofonin aktivoitumisen ja laskee kaikki taustasovellukset tasolle, jonka olet asettanut (oletusarvo 30 %). Kun puhelu päättyy, kaikki palaa normaaliksi. Manuaalista liukusäädintä ei tarvita.</p>

<p>Useimmille tämä ratkaisee varsinaisen ongelman — "En kuule puheluani musiikin yli" — ilman monimutkaisuutta reitittää eri sovelluksia eri fyysisille laitteille.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac äänenvoimakkuus muuttuu itsestään: Kuinka korjata se",
    description:
      "Mac äänenvoimakkuus hyppää satunnaisesti ylös, laskee tai nollautuu uudelle tasolle. Tässä ovat kaikki tunnetut syyt ja ohjeet niiden pysäyttämiseksi.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>Asetat Mac äänenvoimakkuuden mukavalle tasolle. Katso pois. Kun palaat, tilanne on erilainen. Kovempaa. Hiljaisempaa. Nollaa maksimitasolle. Se tapahtuu jatkuvasti, etkä ymmärrä miksi.</p>

<p>Tämä on yksi turhauttavimmista Mac ääniongelmista, koska se tuntuu satunnaiselta. Mutta se ei ole melkein koskaan satunnaista — aina on jokin tietty laukaiseva tekijä. Tässä ovat kaikki tunnetut syyt ja ohjeet niiden korjaamiseksi.</p>

<h2>1. Bluetooth-laitteen uudelleenyhdistäminen</h2>

<p>Tämä on yleisin syy. Kun Bluetooth-laite (AirPods, kaiuttimet, kuulokkeet) yhdistyy tai katkaisee, macOS nollaa äänenvoimakkuuden viimeksi käytetylle tasolle. Jos kaiuttimet ovat 30 % ja AirPods yhdistyy automaattisesti, äänenvoimakkuus saattaa nousta 80 %:iin (viimeinen AirPods-taso).</p>

<p><strong>Korjaus:</strong> macOS muistaa äänenvoimakkuustasot per lähtölaite. Joka kerta kun vaihdat, aseta se haluamaasi paikkaan. Ajan myötä oikeat tasot muistetaan jokaiselle laitteelle. Jos Bluetooth-laite yhdistyy automaattisesti yllättäen, mene Bluetoothin → Järjestelmäasetuksiin ja poista laitteet, joita et aktiivisesti käytä.</p>

<h2>2. HDMI/DisplayPort-lähtö</h2>

<p>Ulkoisen näytön liittäminen tai irrottaminen HDMI:n tai DisplayPortin kautta voi aiheuttaa äänenvoimakkuuden muutoksia. Jotkut näytöt ovat myös äänilähtölaitteita, ja macOS vaihtaa niihin automaattisesti. Kun näyttö menee lepotilaan tai katkaisee, macOS vaihtaa takaisin kaiuttimiin ja saattaa nollata äänenvoimakkuuden.</p>

<p><strong>Korjaus:</strong> Mene Järjestelmäasetuksiin → Ääni → Ulostulo ja tarkista, vaihtaako macOS automaattisesti näytön kaiuttimiin. Jos et halua ääntä näytön kautta, valitse haluamasi lähtölaite manuaalisesti. Joidenkin näyttöjen äänilähtö voidaan poistaa käytöstä omissa OSD-asetuksissaan (näytön näyttö).</p>

<h2>3. Sovellus muuttaa äänenvoimakkuutta</h2>

<p>Jotkut sovellukset säätävät järjestelmän äänenvoimakkuutta ohjelmallisesti. Esimerkiksi Zoomissa on "Säädä mikrofonin äänenvoimakkuutta automaattisesti" -asetus, joka voi myös vaikuttaa ulostulon äänenvoimakkuuteen. Musiikkisovellukset, podcast-sovellukset ja jotkut pelit voivat myös säätää äänenvoimakkuutta käynnistyessä tai tiettyjen tapahtumien sattuessa.</p>

<p><strong>Korjaus:</strong> Tarkista äskettäin avatuista sovelluksistasi ääniasetukset. Zoomissa: Asetukset → Ääni → poista valinta "Säädä mikrofonin äänenvoimakkuus automaattisesti." Spotifyssa: tarkista, aiheuttaako äänenvoimakkuuden normalisointi havaittuja äänenvoimakkuuden muutoksia (Asetukset → Toisto → Normalize volume).</p>

<h2>4. Näppäimistön tai kosketuspalkin vahingossa painallukset</h2>

<p>Jos sinulla on näppäimistö, jossa on äänenvoimakkuusnäppäimet (joka Mac näppäimistöllä on), vahingossa tapahtuneet painallukset — tai jumissa oleva näppäin — voi muuttaa äänenvoimakkuutta. Vanhemmissa MacBook Pro -malleissa Touch Bar on erityisen altis vahingossa tapahtuville äänenvoimakkuuden muutoksille, kun se hipaisee sitä.</p>

<p><strong>Korjaus:</strong> Tarkista, onko äänenvoimakkuusnäppäin jumissa, katsomalla äänenvoimakkuusilmaisinta koskematta mihinkään. Touch Barin malleissa voit muokata Touch Baria Järjestelmäasetuksista → Näppäimistöstä → Touch Barin asetuksista poistaaksesi äänenvoimakkuusliukusäätimen tai siirtääksesi sen vaikeammin saavutettavaan paikkaan.</p>

<h2>5. macOS äänidemonin nollaus</h2>

<p>Lepo-/herätyssyklien jälkeen macOS:n äänidaemon (coreaudiod) käynnistyy joskus uudelleen ja palauttaa äänenvoimakkuuden oletus- tai aiemmin välimuistissa olevalle tasolle. Tämä on järjestelmätason bugi, joka esiintyy eri macOS-versioissa.</p>

<p><strong>Korjaus:</strong> Jos äänenvoimakkuus nollautuu johdonmukaisesti heräämisen jälkeen, kokeile käynnistää coreaudiod manuaalisesti uudelleen:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Jos ongelma jatkuu macOS päivitysten aikana, se voidaan ratkaista tulevassa päivityksessä. Sillä välin työkalun käyttäminen, joka muistaa ja palauttaa sovelluskohtaiset volyymitasot, voi kompensoida tilannetta.</p>

<h2>6. Saavutettavuusasetukset</h2>

<p>Jotkin saavutettavuusominaisuudet voivat häiritä ääntä. Tarkista järjestelmäasetuksista → saavutettavuus → ääni mahdollisten odottamattomien asetusten varalta. Tarkista myös, onko VoiceOver tai Switch Control osittain käytössä — ne voivat aiheuttaa odottamattomia äänenvoimakkuuskäyttäytymisiä.</p>

<h2>Lukitse sovelluskohtaiset volyymit SoundDial</h2>

<p>Vaikka et pystyisi estämään macOS muuttamasta järjestelmän äänenvoimakkuutta, voit suojata <em>Per app</em> Tilavuustasapaino. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Muistaa jokaisen sovelluksen äänenvoimakkuuden itsenäisesti. Kun sovellus käynnistyy uudelleen tai kun Mac herää unesta, SoundDial palauttaa jokaisen sovelluksen tallennettuun volyymiin.</p>

<img src="/apps/sounddial.png" alt="SoundDial muistaa sovelluskohtaiset äänenvoimakkuudet uudelleenkäynnistysten aikana macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tämä tarkoittaa, että vaikka järjestelmän äänenvoimakkuus muuttuisi, sovellustason saldo pysyy tasaisena:</p>
<ul>
  <li>Spotify pysyy 40 %:ssa riippumatta järjestelmän äänenvoimakkuuden muutoksista</li>
  <li>Zoom pysyy 100 %:ssa, vaikka Bluetooth yhdistetään uudelleen</li>
  <li>Slack pysyy vaimentuneena jopa uudelleenkäynnistyksen jälkeen</li>
</ul>

<p>Yhdistettynä <strong>Volyymiprofiilit</strong>, voit välittömästi palauttaa haluamasi äänenvoimakkuusasetukset mihin tahansa tilanteeseen — yhdellä klikkauksella pääset juuri sinne, missä haluat olla, riippumatta siitä, mitä macOS teki, kun et katsonut.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Parhaat volyymimikserisovellukset Mac vuonna 2026",
    description:
      "Selkeä vertailu jokaisesta Mac sovelluksesta, joka antaa sinulle sovelluksen äänenvoimakkuuden säädön. Ominaisuudet, hinnat ja se, mikä niistä on oikeasti käyttämisen arvoinen.",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS ei ole sisäänrakennettua äänenvoimakkuusmikseriä. Jos haluat hallita yksittäisten sovellusten äänenvoimakkuutta — laskea Spotify vaikuttamatta Zoomiin, mykistää Slack ilman kaiken mykistämistä — tarvitset kolmannen osapuolen sovelluksen.</p>

<p>Vaihtoehtoja on useita. Tämä opas vertaa merkittävimpiä ominaisuuksien, hinnoittelun, yhteensopivuuden ja todellisen käytettävyyden perusteella. Ei affiliate-linkkejä, ei sponsoroituja vihjeitä.</p>

<h2>Mitä sinun tulisi etsiä</h2>

<p>Ennen kuin vertaat sovelluksia, tässä on se, mikä on tärkeää Mac äänenvoimakkuusmikserissä:</p>

<ul>
  <li><strong>Sovelluskohtaiset volyymiliukusäätimet</strong> — itsenäinen ohjaus jokaiselle käynnissä olevalle sovellukselle</li>
  <li><strong>Tilavuusalue</strong> — voitko mennä alle 100 % JA yli 100 % (boost)?</li>
  <li><strong>Sovelluskohtainen mykistys</strong> — hiljennä yksi sovellus koskematta sen äänenvoimakkuusasemaan</li>
  <li><strong>Profiilit</strong> — tallenna ja vaihda äänenvoimakkuuskonfiguraatioiden välillä</li>
  <li><strong>Auto-ducking</strong> — laske musiikkia automaattisesti puheluiden aikana</li>
  <li><strong>Valikkopalkin integraatio</strong> — nopea pääsy ilman sovelluksen vaihtamista</li>
  <li><strong>macOS yhteensopivuus</strong> — toimii uusimmalla macOS versiolla</li>
  <li><strong>Hinnoittelumalli</strong> — kertamaksu vs. tilaus</li>
</ul>

<h2>Vaihtoehdot</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> on natiivi macOS valikkopalkkisovellus, joka keskittyy yhteen asiaan: sovelluskohtaiseen äänenvoimakkuuden hallintaan.</p>

<ul>
  <li><strong>Sovelluskohtainen volyymi:</strong> Kyllä, 0 % - 200 %</li>
  <li><strong>Sovelluskohtainen mykistys:</strong> Kyllä, yhdellä klikkauksella</li>
  <li><strong>Äänenvoimakkuuden nosto:</strong> Kyllä, jopa 200 %</li>
  <li><strong>Profiilit:</strong> Kyllä, omilla nimillä ja kuvakkeilla</li>
  <li><strong>Automaattinen kumartelu:</strong> Kyllä, konfiguroitavalla ankkatasolla</li>
  <li><strong>Näppäimistön pikanäppäimet:</strong> Kyllä (mikserikytkentä, mykistää kaikki)</li>
  <li><strong>Lähtölaitteen kytkentä:</strong> Kyllä, samasta paneelista</li>
  <li><strong>Volyymimuisti:</strong> Kyllä, muistaa jokaisen sovelluksen äänenvoimakkuuden uudelleenkäynnistysten välillä</li>
  <li><strong>Hinta:</strong> €14,99 kertaluonteinen ostos (ilman tilausta) — alle puolet SoundSourcen hinnasta</li>
  <li><strong>Vaatii:</strong> macOS 14.2+</li>
  <li><strong>Saatavilla osoitteessa:</strong> Mac App Store (Apple-arvostelu, hiekkalaatikko, ei järjestelmäajureita)</li>
</ul>

<p>SoundDial käyttää Applen modernia Core Audio Tap API:ta puhtaaseen prosessikohtaiseen äänenhallintaan. Se on kevyt, pyörii kokonaan valikkopalkissa eikä vaadi monimutkaisia asetuksia. 14,99 €:lla se on huomattavasti halvempi kuin SoundSource (39 $) ja sisältää ominaisuuksia, joita SoundSourcelta puuttuu — äänenvoimakkuusprofiilit ja automaattinen kumartuminen. Ja koska se on Mac App Storessa, se on Applen arvioima, hiekkalaatikkoon laitettu ja asennetaan siististi ilman DMG:n lataamista tai järjestelmän ääniajurien asentamista.</p>

<img src="/apps/sounddial.png" alt="SoundDial sovelluskohtainen äänenvoimakkuussekoitin, joka näyttää yksittäiset sovelluksen äänenvoimakkuusliukusäätimet macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>SoundSource (Rogue Amoeba)</h3>

<p>SoundSource on yksi vanhimmista ja vakiintuneimmista Mac äänipalveluista. Se on tehokas ja ominaisuuksiltaan rikas, suunnaten tehokäyttäjille ja äänialan ammattilaisille.</p>

<ul>
  <li><strong>Sovelluskohtainen volyymi:</strong> Kyllä</li>
  <li><strong>Sovelluskohtainen mykistys:</strong> Kyllä</li>
  <li><strong>Äänenvoimakkuuden nosto:</strong> Kyllä</li>
  <li><strong>Sovelluskohtainen EQ:</strong> Kyllä (sisäänrakennettu ja AU-lisäosa)</li>
  <li><strong>Sovelluskohtainen lähtöreititys:</strong> Kyllä (lähetä eri sovelluksia eri kaiuttimille)</li>
  <li><strong>Profiilit:</strong> Ei sisäänrakennettua profiilijärjestelmää</li>
  <li><strong>Automaattinen kumartelu:</strong> Ei</li>
  <li><strong>Hinta:</strong> $39 USD (kertaluonteiset, suuret päivitykset saattavat vaatia lisäostoa)</li>
  <li><strong>Vaatii:</strong> macOS 12+ (asentaa järjestelmän ääniajurin)</li>
</ul>

<p>SoundSource on tehokkain vaihtoehto, jos tarvitset sovelluskohtaisia EQ- ja ääniefektiketjuja. Se asentaa järjestelmätason ääniajurin (ACE) sieppaamaan ääntä, mikä tekee siitä erittäin kykenevän mutta myös tunkeilevamman. 39 dollarin hinta on korkeampi kuin useimmissa vaihtoehdoissa, eikä niissä ole automaattista kumartelua tai profiilijärjestelmää.</p>

<h3>Taustamusiikki (ilmainen, avoimen lähdekoodin)</h3>

<p>Background Music on ilmainen, avoimen lähdekoodin sovellus, joka tarjoaa perus äänenvoimakkuuden säädön per sovellus. Se on suosittu valinta, koska se on ilmainen.</p>

<ul>
  <li><strong>Sovelluskohtainen volyymi:</strong> Kyllä</li>
  <li><strong>Sovelluskohtainen mykistys:</strong> Kyllä</li>
  <li><strong>Äänenvoimakkuuden nosto:</strong> Ei (vain 0-100 %)</li>
  <li><strong>Automaattinen taukomusiikki:</strong> Kyllä (pysäyttää musiikin, kun toinen sovellus toistaa ääntä)</li>
  <li><strong>Profiilit:</strong> Ei</li>
  <li><strong>Automaattinen kumartelu:</strong> Ei (automaattinen tauko eroaa automaattisesta ohjauksesta)</li>
  <li><strong>Hinta:</strong> Vapaa</li>
  <li><strong>Vaatii:</strong> macOS 10.13+ (asentaa virtuaalisen äänilaitteen)</li>
</ul>

<p>Taustamusiikki on hyvä ilmainen vaihtoehto perus sovelluskohtaiseen äänenvoimakkuuteen. Sitä ei kuitenkaan ole päivitetty johdonmukaisesti uudemmille macOS-versioille. Käyttäjät raportoivat ongelmista macOS Sequoiassa ja Tahoessa — äänihäiriöistä, virtuaalisen äänilaitteen epäonnistumisesta asennuksesta tai sovelluksen tunnistamattomuudesta joidenkin sovellusten osalta. Se ei myöskään pysty nostamaan äänenvoimakkuutta yli 100 %, siinä ei ole profiileja eikä automaattista kumartelua.</p>

<h3>eqMac</h3>

<p>eqMac on ensisijaisesti taajuuskorjaussovellus, joka sisältää myös äänenvoimakkuuden sekoitusominaisuuksia.</p>

<ul>
  <li><strong>Sovelluskohtainen volyymi:</strong> Limited (keskittyy taajuuskorjaukseen, ei miksaukseen)</li>
  <li><strong>Koko järjestelmän EQ:</strong> Kyllä, useilla bändivaihtoehdoilla</li>
  <li><strong>Äänenvoimakkuuden nosto:</strong> Kyllä</li>
  <li><strong>Profiilit:</strong> EQ-esiasetukset (ei äänenvoimakkuusprofiileja)</li>
  <li><strong>Automaattinen kumartelu:</strong> Ei</li>
  <li><strong>Hinta:</strong> Ilmainen taso + Pro-tilaus</li>
  <li><strong>Vaatii:</strong> macOS 10.14+</li>
</ul>

<p>eqMac on parempi valinta, jos pääasiallinen tarve on koko järjestelmän laajuinen taajuuskorjaus (basson korostus, diskantin säätö jne.) eikä sovelluskohtainen äänenvoimakkuuden säätö. Sen äänenvoimakkuuden sekoitusominaisuudet ovat toissijaisia EQ-ominaisuuksiin nähden.</p>

<h2>Nopea vertailutaulukko</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Ominaisuus</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Taustamusiikki</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sovelluskohtainen volyymi</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Äänenvoimakkuuden korostus (200 %)</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volyymiprofiilit</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sovelluskohtainen taajuuskorjain</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sovelluskohtainen lähtöreititys</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Näppäimistön pikanäppäimet</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Järjestelmäajuri vaaditaan</td>
  <td style="text-align:center;padding:10px 12px;">Ei</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
  <td style="text-align:center;padding:10px 12px;">Kyllä</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Hinta</td>
  <td style="text-align:center;padding:10px 12px;">Kertaluonteinen</td>
  <td style="text-align:center;padding:10px 12px;">$39</td>
  <td style="text-align:center;padding:10px 12px;">Vapaa</td>
</tr>
</tbody>
</table>

<h2>Kumman sinun pitäisi valita?</h2>

<ul>
  <li><strong>Jos haluat sovelluskohtaisen äänenvoimakkuuden säädön, profiilit ja automaattisen alistumisen:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — täydellisin tilavuusmikseri hintaluokassaan, ominaisuuksilla (profiilit, automaattinen kuihtuminen), joita vielä kalliimmilla vaihtoehdoilla ei ole.</li>
  <li><strong>Jos tarvitset sovelluskohtaisen taajuuskorjaimen ja äänen reitityksen:</strong> SoundSource — tehokkain vaihtoehto, suunnattu äänialan ammattilaisille, jotka tarvitsevat efektiketjuja ja sovelluskohtaista ulostuloreititystä.</li>
  <li><strong>Jos haluat jotain ilmaista ja perusasiaa:</strong> Taustamusiikki — kelvollinen yksinkertaiselle sovelluskohtaiselle äänenvoimakkuudelle, mutta voi olla yhteensopivuusongelmia uudemmissa macOS-versioissa eikä siinä ole boostia/profiileja/kumartumista.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "Onko YouTube liian hiljainen Safarissa vai Chrome Mac:ssa? Korjaa se välittömästi",
    description:
      "Jotkut YouTube-videot ovat tuskin kuultavissa jopa maksimivolyymissa. Tässä syy siihen, miksi selaimen ääni on usein hiljaisempaa kuin muissa sovelluksissa — ja miten sen voi nostaa yli 100 %:n Mac.",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>Klikkaat YouTube-videota. Luoja puhuu, mutta tuskin kuulet heitä. Järjestelmän volyymi on maksimitasolla. YouTuben soittimen äänenvoimakkuus on maksimitasolla. Kumarrut lähemmäs kaiuttimiasi. Yhä liian hiljaista. Avaat Spotifyn — musiikki räjähtää täysillä. Eli vika ei ole kaiuttimissasi. Se on YouTube. Tai tarkemmin sanottuna, se on video.</p>

<p>Tämä on uskomattoman yleistä, eikä se ole bugi. Jotkut YouTube-videot masteroidaan vain matalammalla volyymilla kuin toiset, eikä macOS anna mahdollisuutta valikoivasti parantaa selaimen ääntä.</p>

<h2>Miksi jotkut YouTube-videot ovat niin hiljaisia</h2>

<h3>Video nauhoitettiin hiljaisella äänenvoimakkuudella</h3>
<p>Kaikilla tekijöillä ei ole ammattimaisia äänilaitteita. Video, joka on tallennettu kannettavan tietokoneen mikrofonilla huoneen toiselta puolelta, on huomattavasti hiljaisempi kuin oikealla kondensaattorimikrofonilla tallennettu. YouTube normalisoi äänenvoimakkuutta jossain määrin (heidän "äänenvoimakkuuden normalisointinsa" tavoittelee -14 LUFS), mutta tämä ei täysin kompensoi erittäin hiljaista lähdeääntä.</p>

<h3>YouTuben äänenvoimakkuuden normalisointi</h3>
<p>YouTube säätää videon äänenvoimakkuutta automaattisesti niin, että videot toistuvat suunnilleen samalla tasolla. Kovilla videoilla tämä tarkoittaa niiden hiljentämistä. Hiljaisissa videoissa se tarkoittaa niiden lisäämistä — mutta vain tiettyyn pisteeseen asti. Jos lähdeääni on hyvin hiljainen, normalisointi voi tehdä vain rajallisesti ilman häiriötä.</p>

<h3>Selaimen ääni on toisen luokan kansalainen macOS</h3>
<p>Safari ja Chrome käsittelevät ääntä eri tavalla kuin omat mediasovellukset. Ne lähettävät signaalin selaimen äänimoottorin kautta, jolla on oma äänenvoimakkuuskatonsa. Selaimen välilehden ääntä ei voi parantaa macOS sisältä. Selain on yksi sovellus, jossa on yksi äänenvoimakkuustaso — vaikka sinulla olisi kymmenen välilehteä, jotka toistavat ääntä eri tasoilla.</p>

<h2>Pikakorjauksia kokeiltavaksi</h2>

<h3>Tarkista YouTuben soittimen äänenvoimakkuus</h3>
<p>Vie hiiri YouTube-soittimen kaiutinkuvakkeen päälle ja varmista, että liukusäädin on maksimitilassa. On helppo vahingossa vetää tämä alas, ja se nollautuu riippumatta järjestelmän äänenvoimakkuudesta.</p>

<h3>Poista käytöstä YouTuben äänenvoimakkuuden normalisointi</h3>
<p>YouTubessa ei ole käyttäjäkohtaista kytkintä äänenvoimakkuuden normalisoinnille. Kuitenkin jotkut selainlaajennukset voivat ohittaa sen. Etsi selaimesi laajennuskaupasta hakusanoilla "YouTube volume normalizer" tai "YouTube audio enhancer".</p>

<h3>Kokeile toista selainta</h3>
<p>Safari ja Chrome käsittelevät ääntä eri tavoin. Jos video on liian hiljainen toisessa selaimessa, kokeile toista. Chrome käsittelee erityisesti ääntä erillisen prosessin ("renderöijä") kautta, mikä voi joskus johtaa alhaisempaan lähtöön.</p>

<h2>Todellinen ratkaisu: nosta selaimen äänenvoimakkuus yli 100 %:n</h2>

<p>Perimmäinen ongelma on, että macOS ei anna nostaa tietyn sovelluksen volyymia yli 100 %. Selaimesi on maksimissa, mutta "maksimi" ei ole tarpeeksi kova.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ratkaisee tämän antamalla jokaiselle sovellukselle — mukaan lukien Safari ja Chrome — itsenäisen äänenvoimakkuuden liukusäätimen, joka vaihtelee 0 %:sta <strong>200%</strong>. Jos YouTube-video on liian hiljainen, vedä selaimen liukusäädin 150 %:iin tai 180 %:iin. Ääni vahvistetaan reaaliajassa vaikuttamatta muihin sovelluksiin.</p>

<img src="/apps/sounddial.png" alt="SoundDial Safari-selaimen äänenvoimakkuuden nostaminen 180 %:iin hiljaisia YouTube-videoita varten Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tämä on erityisen hyödyllistä, koska:</p>
<ul>
  <li><strong>Se on välitön.</strong> Klikkaa valikkopalkin kuvaketta, vedä liukusäädintä. Sinun ei tarvitse asentaa selainlaajennusta tai muuttaa asetuksia.</li>
  <li><strong>Se on sovelluskohtainen.</strong> Chromen nostaminen ei tee Spotifysta äänekkäämpää. Jokainen sovellus pysyy itsenäisenä.</li>
  <li><strong>Se toimii minkä tahansa selaimen kanssa.</strong> Safari, Chrome, Firefox, Arc, Brave — jos se on sovellus Mac, SoundDial voi ohjata sitä.</li>
  <li><strong>Se menee jopa 200 %:iin.</strong> Kaksinkertaista normaalin äänenvoimakkuuden yläraja. Jopa hiljaisin video tulee kuultavaksi.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac ilmoitus kuulokkeissa kuulokkeissa kuulostaa liian kovalta? Tässä on korjaus",
    description:
      "Slackin pingit ja macOS-hälytykset kuuluvat tuskallisen kovaa kuulokkeissa, kun taas musiikki on kunnossa. Tässä syy, miksi ilmoitusten määrä on erilainen — ja miten sitä voi hillitä.",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>Sinulla on kuulokkeet päässä ja kuuntelet musiikkia mukavalla 40 %:n äänenvoimakkuudella. Slack-ilmoitus laukeaa. <em>DING.</em> Se on korvia huumaavan kovaa verrattuna musiikkiisi. Korvasi soivat. Revit kuulokkeet pois.</p>

<p>Tämä johtuu siitä, että macOS ei anna sinun erikseen hallita ilmoitusten määrää ja mediaa. Musiikkisi saattaa olla mukavalla tasolla, mutta hälytysäänet — Slack-pingit, sähköposti-ilmoitukset, kalenterimuistutukset macOS järjestelmän äänet — pauhaavat täysillä suhteessa järjestelmän äänenvoimakkuuteen.</p>

<h2>Miksi ilmoitukset kuulostavat kovemmilta kuin musiikki</h2>

<p>Ilmoitusäänet ovat lyhyitä, teräviä äänipurkauksia, jotka on suunniteltu kiinnittämään huomiosi. Niissä on suunniteltu korkea huippuvolyymi. Musiikilla sen sijaan on laaja dynaaminen alue — hiljaisempia osuuksia, kovempia kohtia ja kokonaisvaltainen masteroitu taso, joka on tarkoitettu pitkäkestoiseen kuunteluun.</p>

<p>Kun järjestelmän äänenvoimakkuus on 40 %, musiikkisi on 40 % masteroidusta tasostaan — mikä voi olla mukava 60–70 dB kuulokkeissa. Mutta 40 %:n järjestelmän äänenvoimakkuudella ilmoitus voi silti nousta 80+ dB:iin, koska ilmoitusäänitiedosto on masteroitu paljon korkeammalla huipputasolla. Järjestelmän volyymi skaalautuu molempien osuuden mukaan, mutta niiden lähtötasot ovat hyvin erilaiset.</p>

<p>Kuulokkeissa tämä on pahempaa. Ääni menee suoraan korvakäytävään ilman tilaa haihtua, joten havaittu äänenvoimakkuuden ero hiljaisen musiikin ja terävän ilmoituspingin välillä vahvistuu.</p>

<h2>Sisäänrakennetut tavat vähentää ilmoitusmäärää</h2>

<h3>Laske hälytysäänenvoimakkuutta</h3>
<p>macOS on erillinen "Hälytysäänenvoimakkuus" -liukusäädin asetuksissa. Mennä <strong>Järjestelmäasetukset → ääni</strong> ja etsi <strong>Hälytysmäärä</strong> liukusäädin. Tämä säätelee järjestelmän äänien ja hälytyksien äänenvoimakkuutta erikseen päääänenvoimakkuudesta.</p>
<p><strong>Rajoitukset:</strong> Tämä vaikuttaa vain macOS järjestelmähälytyksiin (kuten virhepiippauksiin ja roskaääniin). Se ei vaikuta ilmoitusääniin sovelluksista kuten Slack, Discord tai Teams, jotka toistavat omaa ääntään oman äänimoottorinsa kautta.</p>

<h3>Poista ilmoitusäänet käytöstä sovelluskohtaisesti</h3>
<p>Mennä <strong>Järjestelmäasetukset → ilmoitukset</strong>, valitse liian kovaääninen sovellus ja kytke pois päältä "Toista ääni ilmoituksia varten." Tämä hiljentää kyseisen sovelluksen ilmoitukset kokonaan.</p>
<p><strong>Rajoitukset:</strong> Se on kaikki tai ei mitään. Et voi tehdä Slack-ilmoituksia <em>hiljaisempi</em> — vain täysin päällä tai kokonaan pois päältä. Ja menetät äänivihkeen, joka kertoo jotain tapahtuneen, ilman että katsot näyttöäsi.</p>

<h3>Käytä tarkennustiloja</h3>
<p>Tarkennustilat (Älä häiritse, Työ jne.) voivat vaimentaa ilmoitusäänet kaikista tai valituista sovelluksista. Tämä toimii syväfokussessioissa, mutta ei ole käytännöllistä koko päivän aikana — tärkeitä ilmoituksia jää huomaamatta.</p>

<h2>Todellinen ratkaisu: hallita ilmoitussovelluksen äänenvoimakkuutta itsenäisesti</h2>

<p>Mitä oikeasti haluat, on yksinkertaista: tee Slackista hiljaisempi ilman, että musiikistasi tulee hiljaisempaa. Laske ilmoitussovellusten määrä 15 %:iin ja Spotify pysyy 50 %:ssa. macOS ei anna sinun tehdä tätä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Tekee. Se antaa jokaiselle sovellukselle oman äänenvoimakkuusliukusäädin, joten voit asettaa ilmoituspainotteiset sovellukset kuten Slack, Mail ja Calendar paljon pienemmäksi ja pitää mediasovellukset mukavalla tasolla.</p>

<img src="/apps/sounddial.png" alt="SoundDial näyttää Slackin matalalla äänenvoimakkuudella ja Spotify normaalilla äänenvoimakkuudella — riippumaton ilmoitusohjaus macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Tyypillinen kuulokeystävällinen kokoonpano</h3>
<ul>
  <li><strong>Spotify / Musiikki</strong> — 50 % (mukava kuuntelutaso)</li>
  <li><strong>Slack</strong> — 15 % (huomattavaa, mutta ei yllättävää)</li>
  <li><strong>Posti</strong> — 10 % (hienovarainen ping, ei yllätä sinua)</li>
  <li><strong>Kalenteri</strong> — 20 % (tarpeeksi huomaamaan, ei kivuliasta)</li>
  <li><strong>Zoom / FaceTime</strong> — 90 % (selkeä puheluääni)</li>
  <li><strong>Selin</strong> — 40 % (musiikkitason vastaaminen videon toistossa)</li>
</ul>

<p>Tallenna tämä "Kuulokkeet"-profiiliksi SoundDial ja käytä sitä yhdellä klikkauksella aina kun liität sen mukaan. Luo erillinen "Kaiuttimet"-profiili eri suhteilla, kun työskentelet työpöytäsi ääressä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Kuinka estää Zoomia laskemasta musiikkiasi Mac",
    description:
      "Joka kerta kun liityt Zoom-puheluun, musiikkisi katoaa tai katoaa. Tässä syyt ja miten hallittaa, mikä hiljenee puheluiden aikana — omilla ehdoillasi.",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>Liityt Zoom-puheluun. Spotify soi mukavalla äänenvoimakkuudella. Puhelu yhdistyy ja — musiikkisi katoaa tai katoaa lähes olemattomiin. Et koskenut mihinkään. Zoom (tai macOS) päätti laskea musiikkiasi puolestasi kysymättä.</p>

<p>Tämä saa ihmiset hulluksi, koska se on näkymätöntä ja automaattista. Et mykistänyt mitään. Et säätänyt liukusäädintä. Jokin järjestelmässä päätti, että musiikkisi pitäisi olla hiljaisempaa, eikä sinulla ole ilmeistä tapaa hallita sitä.</p>

<p>Tässä on, mitä oikeasti tapahtuu ja miten ottaa ohjat takaisin.</p>

<h2>Miksi musiikkisi hiljenee Zoom-puheluiden aikana</h2>

<p>Syitä on kaksi mahdollista:</p>

<h3>1. Zoomin sisäänrakennettu ääni kumartuu</h3>
<p>Zoomilla on oma äänenkäsittelynsä, joka voi vaikuttaa muuhun ääneen järjestelmässäsi. Joissain kokoonpanoissa Zoom vähentää järjestelmän ääntä aktivoidessaan mikrofonin, jolloin puhelun ääni on selkeämpi. Tämä ei aina ole ilmeistä Zoomin asetuksissa.</p>

<p>Tarkista Zoom → Asetukset → Audio:</p>
<ul>
  <li>Etsi "Säädä mikrofonin äänenvoimakkuutta automaattisesti" -asetus ja kokeile poistaa se käytöstä</li>
  <li>Tarkista "Suppress background noise" — tämä käsittelee ääntä ja voi vaikuttaa havaittuun äänenvoimakkuuteen</li>
  <li>Varmista, että "Käytä erillistä äänilaitetta samanaikaiseen tulkintaan" ei ole valittuna, ellei sitä tarvitse</li>
</ul>

<h3>2. macOS koodekin vaihto</h3>
<p>Kun Zoom aktivoi mikrofonisi (erityisesti Bluetooth-kuulokkeilla kuten AirPodsilla), macOS vaihtaa laadukkaasta AAC-äänikoodekista heikompaan SCO-koodekkiin. Tämä koodekin muutos heikentää usein kokonaisäänenvoimakkuutta ja -laatua. Se ei ole nimenomaan Zoomin vika — sama tapahtuu kaikissa sovelluksissa, jotka käyttävät mikrofonia Bluetoothin kautta.</p>

<p>Jos käytät AirPodseja tai muita Bluetooth-kuulokkeita ja äänenvoimakkuus laskee puhelun alkaessa, tämä on todennäköisesti syy.</p>

<h2>Sisäänrakennetut korjaukset</h2>

<h3>Käytä langallisia kuulokkeita</h3>
<p>Bluetooth-koodekin kytkentäongelma katoaa kokonaan langallisissa kuulokkeissa. USB-C-kuulokeadapteri tai kuulokkeet, joissa on sisäänrakennettu mikrofoni, välttävät AAC→SCO-kytkimen kokonaan. Äänenlaatu pysyy tasaisena ennen, aikana ja jälkeen puhelut.</p>

<h3>Käytä erillistä mikrofonia</h3>
<p>Jos käytät Mac:n sisäänrakennettua mikrofonia (tai ulkoista USB-mikrofonia) AirPodsien mikrofonin sijaan, macOS ei tarvitse vaihtaa Bluetooth-koodekkia. Aseta tulolaitteesi sisäänrakennettuun mikrofoniin System Settings → Sound → Inputissa, samalla kun AirPods toimii lähtönä. Näin AirPodit pysyvät AAC-tilassa eikä äänenvoimakkuus muutu.</p>

<h3>Säädä Zoomin ääniasetuksia</h3>
<p>Zoom → Settings → Audio -osiossa kokeile automaattisen mikrofonin säädön ja taustamelun vaimennuksen poistamista käytöstä. Nämä ominaisuudet voivat häiritä muiden sovellusten äänitasoja.</p>

<h2>Todellinen ratkaisu: automaattinen kumartelu omilla ehdoillasi</h2>

<p>Perimmäinen ongelma on, ettet voi hallita <em>Paljonko</em> Musiikkisi on hiljaisempaa puheluiden aikana. Järjestelmä tekee päätöksen puolestasi, ja se on yleensä liian aggressiivinen — musiikki laskee lähes nollaan mukavan taustatason sijaan.</p>

<p>Mitä oikeasti haluat, on konfiguroitava automaattinen alentaminen: "kun olen puhelussa, laske musiikkini 25 %:iin — ei nollaan, ei 50 %:iin, tasan 25 %:iin."</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> antaa juuri tämän. Sen automaattinen kumartelutoiminto seuraa mikrofoniasi ja säätää taustaääntä automaattisesti puhelun alkaessa — mutta <strong>Sinä hallitset ankkatasoa</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial automaattiset alistumisasetukset — säädettävä äänenvoimakkuuden vähennys Zoom-puheluiden aikana Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Miten se toimii</h3>
<ol>
  <li>Asetat mieluisan ankkatason (10 %:sta 80 %:iin)</li>
  <li>Liityt Zoom-puheluun — mikrofonisi aktivoituu</li>
  <li>SoundDial tunnistaa puhelun ja laskee taustasovellukset konfiguroidulle tasolle</li>
  <li>Puhelun ääni pysyy täysillä</li>
  <li>Suljet puhelun — kaikki sovellukset palaavat aiempaan volyymiinsa</li>
</ol>

<p>Ero Zoom/macOS-lähestymistapaan:</p>
<ul>
  <li><strong>Sinä valitset tason.</strong> 30 % on hyvä oletusarvo — musiikki kuuluu mutta ei häiritse sitä. Voit säätää 10 %:sta (lähes äänettömästi) 80%:iin (juuri ja juuri vähennettynä).</li>
  <li><strong>Se palautuu täydellisesti.</strong> Kun puhelu päättyy, jokainen sovellus palaa täsmälleen siihen, missä se oli.</li>
  <li><strong>Se toimii kaikkien viestintäsovellusten kanssa.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Voit poistaa sen käytöstä.</strong> Jos haluat hallita äänenvoimakkuutta manuaalisesti tietylle puhelulle, ota automaattinen kumartaminen pois päältä SoundDial:n asetuksista.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "AirPodsin äänenvoimakkuus liian matala Mac? Jokainen korjaus selitettynä",
    description:
      "AirPodit kuulostavat hiljaisilta Mac jopa täydellä volyymilla? Tässä ovat kaikki syyt — kuulokkeiden turvallisuusrajoituksista Bluetoothin omituisuuksiin — ja miten ne voi korjata.",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>AirPodit toimivat hyvin iPhonessasi. Ne ovat aika äänekkäitä. Mutta kytke ne Mac — langattomasti, tietenkin — ja yhtäkkiä kaikki on liian hiljaista. Järjestelmän volyymi on maksimitasolla. Spotify on maksimissaan. AirPodit vain... eivät ole tarpeeksi kovia.</p>

<p>Tämä on yksi yleisimmistä äänivalituksista Mac-käyttäjiltä, joilla on AirPods. Hyvä uutinen: se on lähes aina korjattavissa. Huono uutinen: on olemassa noin kuusi eri syytä, jotka voivat aiheuttaa sen, ja saatat joutua tarkistamaan kaikki.</p>

<h2>1. Kuulokkeiden turvallisuus rajoittaa äänenvoimakkuuttasi</h2>

<p>Tämä on yleisin syy. macOS on sisäänrakennettu ominaisuus, joka rajoittaa kuulokkeiden äänenvoimakkuutta suojatakseen kuuloasi.</p>

<p>Mennä <strong>Järjestelmäasetukset → ääni → kuulokkeiden turvallisuus</strong>.</p>

<p>Jos "Vähennä kovaa ääntä" on käytössä, macOS aktiivisesti rajoittaa AirPodsiesi äänekkäitä. Se mittaa äänen altistusta ajan myötä ja laskee äänenvoimakkuutta, jos luulee sinun kuunnelleen liian kovaa liian pitkään.</p>

<p><strong>Korjaus:</strong> Poista "Vähennä kovaa ääntä" kokonaan käytöstä tai nosta desibelin kynnys korkeammalle tasolle. Huomaat heti enemmän volyymikapasiteettia.</p>

<h2>2. Bluetoothin äänenvoimakkuus on epäsynkassa</h2>

<p>Bluetooth-audiossa on kaksi erillistä äänenvoimakkuuden säätöä: yksi Mac-puolella ja toinen AirPods-puolella. Näiden pitäisi olla synkronoituja, mutta joskus ne menevät epäsynkronointiin — Mac näyttää 100 %, mutta AirPodit vastaanottavat todellisuudessa matalampaa äänenvoimakkuutta.</p>

<p><strong>Korjaus:</strong> Irrota AirPods (Järjestelmäasetukset → Bluetooth → klikkaa "i"-painiketta AirPodsien vieressä → Katkaise yhteys), odota viisi sekuntia ja yhdistä sitten uudelleen. Tämä nollaa äänenvoimakkuuden synkronoinnin. Kokeile myös laittaa AirPodit takaisin koteloonsa, sulkea kannen, odottaa kymmenen sekuntia ja ottaa ne sitten uudelleen pois.</p>

<h2>3. Äänikoodekki vaihtui heikompaan laatuun</h2>

<p>Kun käytät AirPodsin mikrofonia (puheluun, Siriin tai saneluun), macOS vaihtaa korkealaatuisesta AAC-koodekista heikompaan SCO-koodekkiin. SCO on suunniteltu puheluihin — se heikentää äänenlaatua ja voi myös vaikuttaa koettuun äänenvoimakkuuteen.</p>

<p><strong>Korjaus:</strong> Jos et ole puhelussa, mutta ääni kuulostaa sekä hiljaiselta että heikkolaatuiselta, irrota ja liitä AirPods takaisin. macOS pitäisi vaihtaa takaisin AAC-koodekkiin musiikin toistoa varten. Jos olet puhelussa, tämä on odotettua käytöstä — koodekki vaihtaa automaattisesti takaisin puhelun päätyttyä.</p>

<h2>4. Toinen AirPod on hiljaisempi kuin toinen</h2>

<p>Jos äänenvoimakkuus tuntuu matalalta, koska toinen AirPod on selvästi hiljaisempi, ongelma voi olla fyysinen — korvavaha tai roskat tukkivat kaiutinverkon.</p>

<p><strong>Korjaus:</strong> Puhdista AirPodsit varovasti kuivalla, nukkavapaalla liinalla. Kaiutinverkkoon käytä kuivaa pehmeäharjaista harjaa. Älä käytä nesteitä, paineilmaa tai teräviä esineitä. Tarkista myös <strong>Järjestelmäasetukset → saavutettavuus → ääni</strong> — varmista, että vasen/oikea äänitasapainon liukusäädin on keskellä.</p>

<h2>5. Sovellus itsessään tuottaa vähän volyymia</h2>

<p>Joissakin sovelluksissa on omat sisäiset äänenvoimakkuuden säätimet, jotka ovat erillisiä järjestelmän äänenvoimakkuudesta. Spotifyssa, VLC:ssä, YouTubessa ja Zoomissa on kaikki itsenäiset äänenvoimakkuuden liukusäätimet. Jos sovelluksen sisäinen volyymi on 50 %, saat vain puolet volyymista — vaikka macOS ja AirPods olisivat 100 %:ssa.</p>

<p><strong>Korjaus:</strong> Tarkista käyttämäsi sovelluksen äänenvoimakkuuden säätö ja varmista, että se on maksimitasolla.</p>

<h2>6. Core Audio on huonossa kunnossa</h2>

<p>macOS:n äänidaemon (coreaudiod) voi ajoittain jäädä jumiin tilaan, jossa Bluetooth-ääni reititetään väärin tai heikennettynä, erityisesti lepo-/valve-toiminnon tai useiden äänilaitteiden vaihtamisen jälkeen.</p>

<p><strong>Korjaus:</strong> Avaa terminaali ja käynnistä:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Ääni katkeaa hetkeksi ja käynnistyy uudelleen. AirPods saattavat kytkeytyä uudelleen normaalimmalla äänenvoimakkuustasolla.</p>

<h2>Vieläkin liian hiljainen? Nosta AirPodsin äänenvoimakkuus yli 100 %</h2>

<p>Jos olet tarkistanut kaikki kuusi yllä mainittua syytä ja AirPods ei vieläkään ole tarpeeksi kovaääninen, saatat tarvita äänenvoimakkuuden vahvistusta — äänen signaalin vahvistamista yli sen, mitä macOS normaalisti sallii.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Voit nostaa minkä tahansa sovelluksen äänenvoimakkuutta jopa <strong>200%</strong>. Jos Spotify on liian hiljainen AirPodsiesi kautta, vedä Spotifyn liukusäädin 150 %:iin tai 180 %:iin SoundDial. Äänisignaali vahvistetaan ennen kuin se lähetetään AirPodseillesi, jolloin ne ovat käytännössä kovempia kuin Apple oli tarkoittanut.</p>

<img src="/apps/sounddial.png" alt="SoundDial AirPodsin sovelluksen äänenvoimakkuuden lisääminen Mac:ssä sovelluskohtaisilla äänenvoimakkuusliukusäätimillä jopa 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Sovelluskohtaisen boostauksen etu: voit vahvistaa hiljaista sovellusta ilman, että kaikki muu muuttuu kovemmaksi. Jos videopuhelu toimii 100 % tasolla, mutta Spotify tarvitsee 170 %, SoundDial voit asettaa jokaisen erikseen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Spotifyn äänenvoimakkuus liian matala Mac? Tässä kaikki ratkaisut",
    description:
      "Spotify maksimivolyymillä, mutta silti liian hiljainen Mac? Tämä opas kattaa kaikki syyt — Spotifyn sisäänrakennetusta rajoittimesta macOS-asetuksiin — ja miten se voi nostaa yli 100 %.",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify on täysillä. Sinun Mac on täysillä. Eikä se ole vieläkään tarpeeksi kovaa. Tämä on yksi yleisimmistä Spotifyn valituksista Mac:ssa, ja siihen on useita syitä — joista suurin osa ei ole ilmeisiä.</p>

<p>Tämä opas käy läpi kaikki syyt, miksi Spotify saattaa olla liian hiljainen Mac ja miten jokainen niistä korjataan. Mukaan lukien miten nostaa Spotifyn äänenvoimakkuutta yli 100 %, jos mikään muu ei toimi.</p>

<h2>Tarkista ensin Spotifyn oma äänenvoimakkuusliukusäädin</h2>

<p>Spotifyssa on itsenäinen äänenvoimakkuuden säätö sovelluksen oikeassa alakulmassa (tai uudistetun soittimen näytön alareunassa). Tämä liukusäädin on erillinen Mac järjestelmän volyymista. Jos se on 50 %, Spotify tuottaa vain puolet potentiaalisesta volyymistaan — vaikka järjestelmäsi volyymi olisi 100 %.</p>

<p><strong>Korjaus:</strong> Varmista, että Spotifyn sovelluksen sisäinen äänenvoimakkuuden liukusäädin on aivan oikealla (100%).</p>

<h2>Tarkista Spotifyn äänenvoimakkuuden normalisointi</h2>

<p>Spotifyssa on ominaisuus nimeltä <strong>Tilavuuden normalisointi</strong> Se säätää automaattisesti toistoäänenvoimakkuutta niin, että kaikki raidat soivat suunnilleen samalla tasolla. Tämän tarkoituksena on estää tärisevät äänenvoimakkuuden hyppyt kappaleiden välillä, mutta se voi myös vähentää kovempien raitojen kokonaisvolyymia.</p>

<p>Tarkistaaksesi: Avaa Spotify → Asetukset → Toisto → <strong>Normalisoi tilavuus</strong>.</p>

<p>Sinulla on kolme vaihtoehtoa:</p>
<ul>
  <li><strong>Kovaa</strong> — vähiten normalisointi, lähimpänä alkuperäisiä masterointitasoja</li>
  <li><strong>Normaali</strong> — kohtalainen normalisointi (oletus)</li>
  <li><strong>Hiljaa</strong> — suurin osa normalisoinnista, vähentää tilavuutta entisestään</li>
</ul>

<p><strong>Korjaus:</strong> Jos Spotify kuulostaa liian hiljaiselta, joko poista normalisointi kokonaan käytöstä tai aseta se "Kovaksi". Tämä on yleisin syy siihen, miksi Spotify on yllättävän hiljainen.</p>

<h2>Tarkista Spotifyn äänenlaadun asetus</h2>

<p>Heikommat äänenlaatuasetukset voivat joskus johtaa hiljaisempaan toistoon, erityisesti vanhemmalla äänilaitteistolla. Mene Spotify → Settings → Audio Quality -osioon ja varmista, että käytät "Very High" (320 kbps), jos sinulla on Premium-tilaus, tai "High" (256 kbps) ilmaisella tasolla.</p>

<h2>Tarkista macOS kuulokkeiden turvallisuusrajat</h2>

<p>Jos käytät kuulokkeita (langallisia tai Bluetoothia), macOS saattaa rajoittaa äänenvoimakkuuttasi. Mennä <strong>Järjestelmäasetukset → ääni → kuulokkeiden turvallisuus</strong>. Jos "Vähennä kovaa ääntä" on käytössä, macOS rajoittaa kuulokkeiden äänenvoimakkuuden turvalliseksi katsomalle tasolle.</p>

<p><strong>Korjaus:</strong> Poista käytöstä "Vähennä kovaa ääntä" tai nosta desibelin kynnysarvoa. Huomautus: tämä asetus vaikuttaa vain kuulokkeiden ulostuloon, ei kaiuttimiin.</p>

<h2>Tarkista Bluetoothin äänenvoimakkuus</h2>

<p>Jos käytät AirPodseja tai Bluetooth-kaiuttimia, on erillinen äänenvoimakkuuskerros. Bluetooth-laitteilla on oma äänenvoimakkuutensa, joka sovitaan Mac ja laitteen välillä. Joskus tämä menee epäsynkronista.</p>

<p><strong>Korjaus:</strong> Irrota ja yhdistä Bluetooth-laitteesi uudelleen. Tarkista myös, onko laitteessa omat äänenvoimakkuuspainikkeet — varmista, että nekin ovat maksimitasolla.</p>

<h2>Nollaa Core Audio</h2>

<p>macOS:n äänijärjestelmä voi ajoittain jäädä matalaan äänenvoimakkuuteen, erityisesti lepo-/herätyssyklien tai lähtölaitteiden vaihtamisen jälkeen. Äänidaemonin uudelleenkäynnistys korjaa tämän usein.</p>

<p>Avaa terminaali ja käynnistä:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Ääni katkeaa hetkeksi ja käynnistyy uudelleen. Kokeile Spotifyta uudelleen — se voi olla kovempi.</p>

<h2>Nosta Spotify yli 100 %:n SoundDial</h2>

<p>Jos olet kokeillut kaikkea yllä mainittua ja Spotify on edelleen liian hiljainen, ongelma voi olla siinä, että Spotifyn maksimilähtö ei yksinkertaisesti ole tarpeeksi kova sinun kokoonpanollesi. Tämä on yleistä MacBookin sisäänrakennettujen kaiuttimien ja joidenkin Bluetooth-laitteiden kanssa.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Voit nostaa minkä tahansa sovelluksen äänenvoimakkuutta jopa <strong>200%</strong> — mukaan lukien Spotify. Se sieppaa Spotifyn äänivirran ja vahvistaa sen sovelluksen sisäänrakennetun maksimin yli, vaikuttamatta minkään muun sovelluksen äänenvoimakkuuteen.</p>

<img src="/apps/sounddial.png" alt="SoundDial Spotifyn äänenvoimakkuuden nostaminen 200 %:iin macOS samalla kun muut sovellukset pysyvät normaalilla äänenvoimakkuudella" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tässä on keskeinen ero: koko järjestelmätason äänenvoimakkuuden lisäys tekisi <em>kaiken</em> kovempaa — ilmoitukset, puhelut, järjestelmääänet — ei pelkästään Spotify. SoundDial nostaa Spotifyta <em>Itsenäisesti</em>. Aseta Spotify 160 %:iin, kun selain pysyy 80 %:ssa ja Zoom 100 %:ssa.</p>

<h2>Bonus: automaattinen kumartuminen musiikin takia puheluiden aikana</h2>

<p>Jos pätee myös päinvastainen ongelma — Spotify on liian äänekäs videopuheluiden aikana — SoundDial:n automaattinen kumartelutoiminto laskee automaattisesti Spotifyn näkyvyyttä, kun liityt Zoom-, Teams- tai FaceTime-puheluun. Kun puhelu päättyy, Spotify palaa aiempaan äänenvoimakkuuteensa. Manuaalista säätöä ei tarvita.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Kuinka erottaa peliääni Discordista Mac",
    description:
      "Peliräjähdykset, jotka hukuttavat tiimikaverisi Discordissa? Näin voit itsenäisesti ohjata pelin ääntä ja äänichatin äänenvoimakkuutta macOS:llä.",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>Pelaat Mac. Pelissä tapahtuu räjähdys. Discord-tiimikaverisi puhuvat, mutta et kuule heitä laukauksen yli. Lasket äänenvoimakkuutta — nyt Discord on myös hiljaisempi. Käännät äänen takaisin kovemmalle — räjähdykset ovat taas korvia huumaavia.</p>

<p>Windowsissa avaat äänenvoimakkuusmikserin, lasket pelin 40 %:iin ja Discord pysyy 100%:ssa. Mac et voi. macOS antaa sinulle yhden äänenvoimakkuuden liukusäätimen kaikkeen, joten pelin ääni ja äänichat ovat pysyvästi yhteydessä.</p>

<p>Tämä opas näyttää, miten saat itsenäisen äänenvoimakkuuden säädön peliisi ja Discordiin (tai mihin tahansa äänikeskusteluun) Mac.</p>

<h2>Miksi tämä on Mac-kohtainen ongelma</h2>

<p>Windowsissa on ollut sisäänrakennettu äänenvoimakkuusmikseri vuodesta 2006 lähtien, jonka avulla voit ohjata jokaisen sovelluksen äänenvoimakkuutta itsenäisesti. macOS ei ole koskaan lisännyt tätä ominaisuutta. Jokaisen sovelluksen ääni miksataan yhdeksi striimiksi, ja ainoa ohjaus on yksi master-liukusäädin, joka vaikuttaa kaikkeen yhtä paljon.</p>

<p>Tämä tarkoittaa:</p>
<ul>
  <li>Jos pelisi on liian kovaääninen, sen hiljentäminen hiljentää myös Discordin</li>
  <li>Jos Discord on liian hiljainen, sen kovempi kääntäminen nostaa myös pelin arvoa</li>
  <li>Et löydä tasapainoa, koska molemmat sovellukset ovat lukittu samaan äänenvoimakkuuteen</li>
</ul>

<h2>Kiertotiet, jotka eivät oikeastaan toimi</h2>

<h3>Käytä pelin sisäisiä äänenvoimakkuusasetuksia</h3>
<p>Useimmissa peleissä on ääniasetusvalikko, jossa voit laskea päääänenvoimakkuutta, musiikkia, ääniefektejä ja äänichattia itsenäisesti. Tämä auttaa, mutta muutat asetuksia pelin sisällä — eli sinun täytyy pysäyttää peli, navigoida valikoissa ja säätää tilannetta aina, kun olosuhteet muuttuvat. Ja jos vaihdat peliä, aloitat alusta.</p>

<h3>Käytä Discordin äänenvoimakkuuden säätimiä</h3>
<p>Discordissa voit säätää äänenvoimakkuutta Settings → Voice &Video -osiossa, ja voit säätää yksittäisten käyttäjien äänenvoimakkuutta klikkaamalla heidän nimeään oikealla. Mutta tämä ohjaa Discordin sisäistä miksausta, ei sen äänenvoimakkuutta suhteessa muihin sovelluksiin. Jos peli on liian kovaääninen, Discordin sisäisen äänenvoimakkuuden lisääminen ei auta, koska järjestelmän äänenvoimakkuus vaikuttaa molempiin yhtä paljon.</p>

<h3>Käytä erilaisia lähtölaitteita</h3>
<p>Jotkut yrittävät reitittää pelin äänen kaiuttimiin ja Discordin kuulokkeisiin (tai päinvastoin). macOS ei tee tästä helppoa — tarvitset virtuaalisen äänilaitteen ja manuaalisen sovelluksen reitityksen. Ja kuulokkeiden käyttäminen, kun kaiuttimet soivat samanaikaisesti, on parhaimmillaankin kömpelöä.</p>

<h2>Varsinainen ratkaisu: sovelluskohtainen äänenvoimakkuuden säätö</h2>

<p>Tarvitset mahdollisuuden säätää pelin äänenvoimakkuutta erillään Discordin äänenvoimakkuudesta. Juuri näin sovelluskohtainen äänenvoimakkuusmikseri tekee.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Se asettuu valikkopalkkiisi ja antaa jokaiselle sovellukselle oman äänenvoimakkuusliukusäätimen. Voit asettaa pelisi 35 %:iin ja Discordin 100 %:iin — tai mihin tahansa suhteeseen se sinulle sopii. Vaihda toinen ja toinen pysyy paikallaan.</p>

<img src="/apps/sounddial.png" alt="SoundDial näyttää itsenäiset äänenvoimakkuuden liukusäätimet pelille ja Discordille macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Tyypillinen peliasetelma</h3>
<ul>
  <li><strong>Peli</strong> — 30-50 % (tarpeeksi kovaa uppoutumiseen, ei ylivoimaista)</li>
  <li><strong>Discord / äänichat</strong> — 90-100 % (aina selvästi kuultavissa pelin äänen kautta)</li>
  <li><strong>Spotify / musiikki</strong> — 15-25 % (hienovarainen tausta, ei häiritse)</li>
  <li><strong>Selin</strong> — mykistetty (ei yllätys, automaattinen toistovideot)</li>
  <li><strong>Slack / ilmoitukset</strong> — vaimennettu (tarkennusaika)</li>
</ul>

<h3>Tallenna se profiiliksi</h3>
<p>SoundDial <strong>Volyymiprofiilit</strong> Voit tallentaa tämän asetuksen ja ottaa sen käyttöön yhdellä klikkauksella. Luo "Peli"-profiili haluamallasi peli-/Discord-saldolla, "Työ"-profiili musiikille ja puheluille, ja vaihda niiden välillä välittömästi. Liukusäätimiä ei tarvitse säätää joka kerta kun istut pelaamaan.</p>

<h3>Äänenvoimakkuuden korotus hiljaiseen äänikeskusteluun</h3>
<p>Joskus ongelma ei ole pelin liian äänekäs — vaan se, että Discord on liian hiljainen. Joillakin tiimikavereilla on huonot mikrofonit, tai Discordin teho on matalampi kuin muissa sovelluksissa. SoundDial antaa sinun nostaa minkä tahansa sovelluksen äänenvoimakkuutta <strong>200%</strong>, joten voit vahvistaa Discordia normaalin maksimin yli koskematta pelin äänenvoimakkuuteen.</p>

<h2>Toimii minkä tahansa pelin ja äänichatin kanssa</h2>

<p>SoundDial toimii kaikkien sovellusten kanssa, jotka tuottavat ääntä macOS. Ei ole väliä, pelaatko Steamissa, App Storessa, Epic Gamesissa vai selainpelissä. Ei ole väliä, käytätkö Discordia, TeamSpeakia, Mumblea vai FaceTimea. Jos se pitää ääntä, SoundDial voi hallita sitä.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Miksi Mac ei ole äänenvoimakkuuden mikseriä kuten Windowsissa?",
    description:
      "Windowsissa on ollut sovelluskohtainen äänenvoimakkuuden säätö vuodesta 2006 lähtien. On vuosi 2026, eikä macOS vieläkään näy. Tässä on todellinen syy — ja miten sellaisen saa joka tapauksessa.",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Jokaisessa Windows-versiossa Vistan (2006) jälkeen on ollut volyymimikseri. Napsauta kaiuttimen kuvaketta oikealla, klikkaa "Volume Mixer", ja näet jokaisen sovelluksen omalla äänenvoimakkuusliukusäätimellään. Voit mykistää Chromen vaikuttamatta Spotifyhin. Voit laskea Discordia koskematta peliisi.</p>

<p>On macOS? Yksi liukusäädin. Siinä kaikki mitä saat. Kaksikymmentä vuotta Mac päivityksiä — Ventura, Sonoma, Sequoia, Tahoe — ja Apple ei ole koskaan lisännyt sovelluskohtaista äänenvoimakkuuden säätöä.</p>

<p>Ihmiset kysyvät tätä kysymystä jatkuvasti: <em>Miksi Mac ei ole volyymisekoitinta?</em></p>

<h2>Se ei ole tekninen rajoite</h2>

<p>Selvennetään tämä heti: macOS voi ehdottomasti tehdä äänenvoimakkuuden per sovellus. Taustalla oleva äänikehys — <strong>Core Audio</strong> — tukee prosessikohtaista äänen napauttamista, reititystä ja vahvistuksen säätöä API-tasolla. Apple esitteli <strong>Audio Tap API</strong> vuonna macOS 14 (Sonoma), mikä teki kehittäjille entistä helpompaa siepata ja muokata yksittäisiä sovellusten äänivirtoja.</p>

<p>Kolmannen osapuolen kehittäjät ovat rakentaneet sovelluskohtaisia volyymimiksereita vuosien ajan käyttäen näitä API-rajapintoja. Teknologia on olemassa. Apple ei vain ole rakentanut siitä käyttäjäkohtaista versiota.</p>

<h2>Miksi Apple ei ole rakentanut sitä?</h2>

<p>Apple ei ole koskaan julkisesti selittänyt miksi. Mutta kun katsoo heidän suunnittelumallejaan, vastaus on melko selvä: <strong>Apple asettaa yksinkertaisuuden etusijalle tehokäyttäjille suunnattujen ominaisuuksien sijaan.</strong></p>

<p>Yksi äänenvoimakkuuden liukusäädin on yksinkertaisempi kuin kaksitoista. Se on helpompi selittää, helpompi oppia, eikä vaadi lainkaan konfigurointia. Käyttäjälle, joka tekee vain yhtä asiaa kerrallaan — kuuntelee musiikkia TAI ottaa puhelun TAI katsoo videota — yksi liukusäädin toimii hyvin. Apple suunnittelee ensin tälle käyttäjälle.</p>

<p>On myös filosofinen argumentti: Apple uskoo, että sovellusten tulisi hallita omaa ääntään. Jos Spotify on liian kovaääninen, laita se hiljemmalle Spotifyssa. Jos Zoom on liian hiljainen, laita se kovemmalle. Käyttöjärjestelmän ei pitäisi tarvita välittämistä.</p>

<p>Ongelma on, että tämä filosofia ei vastaa todellisuutta. Vuonna 2026 kaikilla on moniajo äänen kanssa:</p>

<ul>
  <li>Musiikki soi työn aikana</li>
  <li>Videopuhelut ilmoitukset piippaavat</li>
  <li>Selaimen välilehdet toistavat mainoksia automaattisesti</li>
  <li>Pelaaminen Discordin kanssa</li>
  <li>Podcastit toisessa korvassa, Slack toisessa</li>
</ul>

<p>"Säädä vain jokaisessa sovelluksessa" tarkoittaa vaihtamista kuuden sovelluksen välillä, kuuden eri äänenvoimakkuuden säätimen löytämistä (joista osa ei ole olemassa) ja tämän tekemistä useita kertoja päivässä. Se on päinvastaista kuin yksinkertaista.</p>

<h2>Lisääkö Apple sen koskaan?</h2>

<p>Ei ole merkkejä siitä, että Apple aikoo lisätä volyymimikserin mihinkään tulevaan macOS julkaisuun. Ominaisuus ei ole esiintynyt missään macOS betassa, patenttihakemuksessa tai WWDC:n tiekartassa. Applen ohjauskeskus valikkopalkissa näyttää edelleen vain yhden järjestelmän äänenvoimakkuusliukusäätimen.</p>

<p>On mahdollista, että Apple lisää sen lopulta — he ovat ottaneet käyttöön ominaisuuksia, joita alun perin hylkäsivät (widgetit, ikkunalaattoja, moniikkunainen iPad). Mutta Applen odottaminen tarkoittaa loputtoman odottamista.</p>

<h2>Kuinka saada volumemikserin Mac nyt</h2>

<p>Vastaus on kolmannen osapuolen valikkopalkkisovellus. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> on natiivi macOS äänenvoimakkuusmikseri, joka tekee juuri sen, mitä Windowsin äänenvoimakkuusmikser tekee — plus enemmän.</p>

<img src="/apps/sounddial.png" alt="SoundDial — macOS:n äänenvoimakkuussekoitin, joka näyttää sovelluskohtaiset äänenvoimakkuusliukusäätimet valikkopalkissa" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Mitä saat:</p>

<ul>
  <li><strong>Sovelluskohtaiset volyymiliukusäätimet</strong> — jokaisella käynnissä olevalla sovelluksella on oma liukusäädin, 0 %:sta 200 %:iin</li>
  <li><strong>Sovelluskohtainen mykistys</strong> — yksi klikkaus mykistää minkä tahansa sovelluksen, klikkaa uudelleen poistaaksesi mykistyksen</li>
  <li><strong>Volyymiprofiilit</strong> — tallenna asetukset eri tilanteisiin (Työ, Keskittyminen, Pelaaminen) ja vaihda yhdellä klikkauksella</li>
  <li><strong>Auto-ducking</strong> — taustaääni vaimenee automaattisesti, kun liityt puheluun, ja palautuu, kun lopetat puhelun</li>
  <li><strong>Äänenvoimakkuuden korotus 200 %:iin</strong> — vahvistaa hiljaisia sovelluksia normaalin maksimin yli</li>
  <li><strong>Näppäimistön pikanäppäimet</strong> — mikserin kytkeminen päälle tai kaikkien sovellusten mykistys pikanäppäimellä</li>
  <li><strong>Lähtölaitteen kytkentä</strong> — vaihtaa kaiuttimien, kuulokkeiden ja ulkoisten laitteiden välillä samasta paneelista</li>
  <li><strong>Tilavuusmuisti</strong> — jokaisen sovelluksen äänenvoimakkuus muistetaan uudelleenkäynnistysten välillä</li>
</ul>

<p>Se on ominaisuus, jonka Applen olisi pitänyt rakentaa kaksikymmentä vuotta sitten. Kertakäyttö <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Ei tilausta. macOS 14,2+.</p>

<p>Volyymisekoittimen macOS olisi pitänyt olla sisäänrakennettu.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac äänenvoimakkuus liian matala? Kuinka nostaa ääntä yli 100 %",
    description:
      "Mac on täysillä ja silti liian hiljainen. Tässä syyt näin ja miten ääntä voi vahvistaa jopa 200 % ilman ulkoisia kaiuttimia.",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>Mac volyymi on 100%. Liukusäädin on aivan oikealla. Eikä se ole vieläkään tarpeeksi kovaa. Podcast on liian hiljainen. Videopuhelun osallistuja kuulostaa siltä kuin he kuiskaisivat. YouTube-video kuvattiin liian matalaksi. Olet saavuttanut maksimimäärän — eikä se riitä.</p>

<p>Tämä on yksi yleisimmistä äänivalituksista Mac:ssa, erityisesti MacBook Airin ja vanhempien MacBook Pro -mallien sisäänrakennettujen kaiuttimien osalta. Kaiuttimet ovat fyysisesti pieniä, ja osa sisällöstä tallennetaan yksinkertaisesti matalammalla tasolla kuin toiset.</p>

<p>Tässä on syy, miksi näin tapahtuu ja miten sen voi oikeasti korjata — mukaan lukien miten nostaa Mac volyymia yli 100 %:n rajan.</p>

<h2>Miksi Mac kuulostaa liian hiljaiselta täysillä volyymeilla</h2>

<p>On useita syitä, miksi Mac ei välttämättä ole tarpeeksi äänekäs edes maksimivolyymissa:</p>

<h3>1. Sisältö itsessään on hiljaista</h3>
<p>Kaikki ääni ei ole masteroitu samalla tasolla. Ammattimaisesti tuotettu podcast voi saavuttaa huippunsa -3 dB:iin, kun taas satunnainen YouTube-video tai tallennettu Zoom-puhelu voi nousta huippunsa -20 dB:iin. Ero on valtava. Kun järjestelmän äänenvoimakkuus on 100 %, hiljainen sisältö pysyy hiljaisena — macOS voi vahvistaa vain alkuperäiseen signaalitasoon asti.</p>

<h3>2. MacBook-kaiuttimilla on fyysiset rajoitukset</h3>
<p>MacBook Airin tai 13" MacBook Pron sisäänrakennetut kaiuttimet ovat pieniä. Ne on suunniteltu kannettavuuteen, ei äänenvoimakkuuteen. Applen suuremmissa MacBook Pro -malleissa (14" ja 16") on huomattavasti paremmat kaiuttimet, mutta niissäkin on katto. Jos olet tottunut ulkoisiin kaiuttimiin tai kuulokkeisiin, sisäänrakennetut kaiuttimet tuntuvat heikoilta.</p>

<h3>3. Bluetoothin äänenvoimakkuus on rajoitettu</h3>
<p>Joillakin Bluetooth-kuulokkeilla ja kaiuttimilla on oma äänenvoimakkuuskatto, joka on erillinen macOS:stä. Vaikka macOS näyttäisi 100 %, Bluetooth-laite ei välttämättä ole maksimissaan. Tämä on erityisen yleistä AirPodsissa, joissa EU:n äänenrajoitin tai kuulokkeiden turvaominaisuus Settings → Sound → Headphone Safety -toiminnossa voivat rajoittaa äänen äänen.</p>

<h3>4. Yksittäisten sovellusten määrä on pieni</h3>
<p>Joillakin sovelluksilla on oma sisäinen äänenvoimakkuuden säädin, joka on erillinen järjestelmän äänenvoimakkuudesta. Jos Spotifyn sovelluksen sisäinen äänenvoimakkuus on 50 % ja järjestelmän äänenvoimakkuus 100 %, kuuntelet käytännössä 50 %. Zoom käyttää usein konservatiivista äänenvoimakkuutta puheluissa.</p>

<h2>Sisäänrakennetut korjaukset, joita kannattaa kokeilla ensin</h2>

<h3>Tarkista kuulokkeiden turvallisuusrajat</h3>
<p>Mennä <strong>Järjestelmäasetukset → ääni → kuulokkeiden turvallisuus</strong>. Jos "Vähennä kovaa ääntä" on käytössä, macOS rajoittaa aktiivisesti äänenvoimakkuuttasi suojatakseen kuuloasi. Voit poistaa tämän käytöstä tai nostaa kynnystä. Tämä koskee vain kuulokkeita — se ei kosketa kaiutinlähtöä.</p>

<h3>Tarkista Bluetooth-laitteen äänenvoimakkuus</h3>
<p>Joissakin Bluetooth-laitteissa on itsenäiset äänenvoimakkuuden säätimet. AirPodseissa varmista, että sekä Mac:n että AirPodsin äänenvoimakkuus on maksimitasolla. Kolmannen osapuolen Bluetooth-kaiuttimista tarkista, onko kaiuttimessa oma äänenvoimakkuuspainike tai sovellus.</p>

<h3>Tarkista sovelluksen sisäinen äänenvoimakkuus</h3>
<p>Avaa liian hiljainen sovellus ja etsi oma äänenvoimakkuuden liukusäädin. Spotifyssa on sellainen soitinpalkissa. VLC:ssä on sellainen toistoohjauksessa. YouTubessa on sellainen videosoittimessa. Varmista, että nämä ovat 100 % ennen kuin päätät, että ongelma on Mac.</p>

<h3>Nollaa Core Audio</h3>
<p>Joskus macOS äänijärjestelmä menee huonoon tilaan lepo-/herätyssyklien tai laitevaihdon jälkeen. Avaa terminaali ja käynnistä:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Tämä käynnistää äänidemonin uudelleen. Ääni katkeaa hetkeksi ja palaa takaisin, joskus normaalimmalla tasolla.</p>

<h2>Kuinka nostaa äänenvoimakkuutta yli 100 %:n</h2>

<p>Jos olet tarkistanut kaiken yllä mainitun ja Mac on edelleen liian hiljainen, tarvitset äänenvoimakkuuden vahvistuksen — mahdollisuuden painaa ääntä <em>yllä</em> 100 % katto, jonka macOS asettaa.</p>

<p>Äänenvoimakkuuden nostaminen toimii sieppaamalla äänisignaalin ennen kuin se saavuttaa kaiuttimiisi ja moninkertaistaa sen amplitudin. 150 %:lla jokainen ääninäyte on 1,5 kertaa kovempi kuin alkuperäinen. 200 %:lla se on kaksinkertaistunut. Tämä voi aiheuttaa lievää säröä äärimmäisillä tasoilla tietyissä sisällöissä, mutta hiljaisessa äänessä se on ainoa tapa saada ääni oikeasti kuultavaksi.</p>

<h3>SoundDial: sovelluskohtainen äänenvoimakkuuden kasvu jopa 200 %</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Antaa jokaiselle sovellukselle Mac itsenäisen äänenvoimakkuuden liukusäätimen, joka vaihtelee 0 %:sta <strong>200%</strong>. Jos jokin tietty sovellus on liian hiljainen — podcast-soitin, selainvälilehti, videopuhelu — voit nostaa pelkän sovelluksen yli 100 % ilman, että kosket mihinkään muuhun.</p>

<img src="/apps/sounddial.png" alt="SoundDial äänenvoimakkuuden lisäys — sovelluskohtainen äänenvoimakkuuden säätö 200 % vahvistuksella macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tämä on erityisen hyödyllistä:</p>
<ul>
  <li><strong>Hiljaiset podcast-sovellukset</strong> — jotkut soittajat menevät maksimoimaan liian alas, varsinkin kun podcastit on tallennettu epäoptimaalisissa olosuhteissa</li>
  <li><strong>Videopuhelut hiljaisten osallistujien kanssa</strong> — nosta Zoomia tai Teamsia, kun jonkun mikrofoni on matala, ilman että musiikki kovenee</li>
  <li><strong>Selaimen välilehdet</strong> — YouTube-videot, verkkosovellukset ja upotettujen medioiden äänet toistetaan usein pienemmällä äänenvoimakkuudella kuin omistetut mediasovellukset</li>
  <li><strong>Vanhoja äänityksiä</strong> — arkistoääni, vintage-musiikki ja vanhempi videosisältö masteroidaan usein alemmilla tasoilla</li>
</ul>

<p>Keskeinen etu järjestelmän laajuisiin volyymivahvistimiin verrattuna on, että SoundDial boostit <em>per sovellus</em>. Voit nostaa hiljaisen sovelluksen 180 %:iin pitäen kaiken muun normaalilla tasolla. Koko järjestelmän laajuinen vahvistin vahvistaisi kaiken tasaisesti, tehden jo valmiiksi äänekkäistä laitteistasi tuskallisen äänekkäitä, kun taas hiljainen olisi hieman vähemmän hiljainen.</p>

<h2>Kun ulkoiset ratkaisut ovat parempia</h2>

<p>Äänenvoimakkuuden lisäämisellä on rajansa. Jos yrität täyttää huoneen MacBook Airin sisäänrakennettujen kaiuttimien äänillä, mikään ohjelmisto ei pysty ylittämään näiden kaiutinajureiden fyysistä kokoa. Siinä tapauksessa:</p>

<ul>
  <li><strong>Langalliset kuulokkeet</strong> — ohittaa kaiutinrajoitukset kokonaan, ja useimmat kuulokkeet voivat olla kovempia kuin sisäänrakennetut kaiuttimet</li>
  <li><strong>Ulkoiset kaiuttimet</strong> — jopa halvat USB- tai Bluetooth-kaiuttimet päihittävät sisäänrakennetut MacBook-kaiuttimet raakaäänenvoimakkuudessa</li>
  <li><strong>USB-ääniliitäntä</strong> — ammattikäyttöön omistettu ääniliitäntä tarjoaa puhtaan ja tehokkaan signaalin studiomonitoreille tai kuulokkeille</li>
</ul>

<p>Mutta arjen tapauksessa — selaimen välilehti, joka on liian hiljainen, puhelu, jossa joku mumisee, podcast, joka on nauhoitettu kaapissa — ohjelmiston äänenvoimakkuus kasvaa <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> on nopein ratkaisu. Klikkaa valikkopalkin kuvaketta, vedä liukusäädin yli 100 %:n valmis.</p>

<p>Kertakäyttö <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Ei tilausta. macOS 14,2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Kuinka laskea musiikkia automaattisesti Zoom-puheluiden aikana Mac",
    description:
      "Joka kerta kun Zoom-puhelu alkaa, kiirehdit pysäyttämään Spotifyn. On parempi tapa — automaattinen kumartelu laskee musiikin automaattisesti, kun mikrofoni aktivoituu.",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>Puhelu alkaa. Jaat näyttösi. Musiikkisi on yhä pauhaavaa. Vaihdat paniikissa Spotifyhin, painat taukoa, palaat Zoomiin — mutta kaikki kuulivat jo kymmenen sekuntia soittolistastasi. Se tapahtuu kaikille, ja se johtuu siitä, että macOS ei ole yhteyttä "juuri alkanut puhelu" ja "ehkä hiljentää musiikkia" välillä.</p>

<p>Joissakin puhelimissa tämä on automaattista — musiikki pysähtyy tai vaimenee, kun puhelu tulee. Mac olet omillasi. Ellet ole asettanut automaattista kumartelua.</p>

<h2>Mitä on äänen väistäminen?</h2>

<p><strong>Äänikumartuminen</strong> tarkoittaa, että taustaäänen äänenvoimakkuus laskee automaattisesti, kun tapahtuu jotain tärkeämpää — kuten äänipuhelu. Termi tulee lähetystekniikasta, jossa taustamusiikki "piiloutuu" kuuluttajan äänen alle.</p>

<p>Käytännössä se toimii näin:</p>
<ol>
  <li>Kuuntelet musiikkia 50 % äänenvoimakkuudella</li>
  <li>Osallistut Zoom-puheluun</li>
  <li>Musiikkisi laskee automaattisesti 15 %:iin</li>
  <li>Kutsun voi kuulla selvästi ilman, että säädät mitään manuaalisesti</li>
  <li>Puhelu päättyy</li>
  <li>Musiikkisi palautuu automaattisesti 50 %:iin</li>
</ol>

<p>Ei sovellusten vaihtamista. Ei taukoja. Ei tarvitse unohtaa poistaa musiikin mykistöä puhelun jälkeen. Se on täysin automaattista.</p>

<h2>Onko macOS sisäänrakennettu äänen kumartuminen?</h2>

<p>Ei. macOS ei sisällä automaattista äänen sukeltamista. Järjestelmäasetuksissa, saavutettavuudessa tai tarkennustilassa ei ole mitään, mikä yhdistäisi "mikrofoni on aktiivinen" ja "matalampi taustaääni". Apple ei yksinkertaisesti ole rakentanut tätä.</p>

<p>On olemassa saavutettavuusasetus nimeltä "Soita stereo ääni monona" ja vaihtoehtoja visuaalisille salamahälytyksille, mutta mikään ei säädä äänenvoimakkuutta automaattisesti sen mukaan, oletko puhelussa.</p>

<h2>Manuaaliset vaihtoehdot (ja miksi ne ovat kivuliaita)</h2>

<h3>Pysäytä musiikki manuaalisesti ennen jokaista puhelua</h3>
<p>Tätä useimmat ihmiset tekevät. Se toimii — kunnes unohdat. Tai kunnes joku soittaa yllättäen. Tai kunnes sinulla on peräkkäisiä puheluita ja pysäytät ja poistat Spotifyn kaksitoista kertaa päivässä. Se tarkoittaa myös, ettei taustamusiikkia kuulu puheluiden aikana, vaikka haluaisit sen olevan hiljaista.</p>

<h3>Käytä tarkennustilaa hiljentääksesi kaiken</h3>
<p>Voisit luoda "Meeting"-fokustilan, joka estää ilmoitusäänet. Mutta tarkennustilat eivät ohjaa median toiston äänenvoimakkuutta. Musiikkisi pyörii täysillä, jopa Älä häiritse -tilassa — Tarkennus vaimentaa vain ilmoitukset.</p>

<h3>Aseta äänenvoimakkuusprofiilit manuaalisesti</h3>
<p>Luo "puhelu"-asetus, jossa lasket manuaalisesti kaiken paitsi viestintäsovelluksen ennen jokaista puhelua. Tämä toimii, mutta vaatii muistamista ja manuaalista vaihtamista joka kerta. Ja sinun täytyy vaihtaa takaisin sen jälkeen.</p>

<h2>Automaattinen kyykistyminen SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Siinä on sisäänrakennettu automaattinen kuiskausominaisuus, joka tekee juuri sen, mitä macOS kuuluu tehdä natiivisti. Näin se toimii:</p>

<h3>Miten se tunnistaa puhelut</h3>
<p>SoundDial seuraa Mac mikrofonin tilaa — samaa indikaattoria, joka näyttää oranssin pisteen valikkopalkissa, kun sovellus käyttää mikrofonia. Kun se havaitsee, että viestintäsovellus on aktivoinut mikrofonisi, se tietää puhelun alkaneen.</p>

<p>Se toimii kaikkien suurten viestintäsovellusten kanssa:</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Slack</strong> (kokoontumisia ja huutoja)</li>
  <li><strong>Google Meet</strong> (Chromen kautta)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Mitä tapahtuu, kun puhelu alkaa</h3>
<p>Heti kun mikrofonisi aktivoituu puhelua varten, SoundDial laskee automaattisesti kaikkien ei-viestintäsovellusten äänenvoimakkuuden tasolle, jonka määrität — oletusarvo on 30 %. Puhelun ääni pysyy täysillä. Taustamusiikki laskee hienovaraiselle tasolle. Ilmoitusäänet vaimenevat.</p>

<p>Pieni vihreä ilmaisin ilmestyy SoundDial:n otsikossa, joka vahvistaa, että automaattinen kumartelu on aktiivinen.</p>

<h3>Mitä tapahtuu, kun puhelu päättyy</h3>
<p>Kun lopetat puhelun ja mikrofoni deaktivoituu, SoundDial palauttaa kaikki sovelluksen äänenvoimakkuudet täsmälleen siihen, missä ne olivat ennen puhelun alkua. Musiikkisi palautuu jopa 50 %:iin (tai missä ikinä sinulla sitä oli). Manuaalista säätöä ei tarvita.</p>

<h3>Ankkatason konfigurointi</h3>
<p>SoundDial:n asetuksissa voit säätää <strong>Ankkataso</strong> — kuinka paljon taustaääntä vähennetään puhelun aikana. Liukusäädin vaihtelee 10 %:sta (tuskin kuuluva) 80%:iin (joka on edelleen melko läsnä). Oletusarvo 30 % toimii useimmille ihmisille: musiikki on havaittavissa, mutta ei häiritse keskustelua.</p>

<img src="/apps/sounddial.png" alt="SoundDial automaattinen kumartelutoiminto, joka automaattisesti laskee musiikin äänenvoimakkuutta Zoom-puhelun aikana Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Miksi automaattinen kumartelu on parempi kuin tauko</h2>

<p>Musiikin pysäyttäminen ennen puhelua vaikuttaa helpolta, mutta automaattinen kumartelu on parempi monella tapaa:</p>

<ul>
  <li><strong>Se on automaattista.</strong> Et koskaan unohda. Ei kiirettä, kun tulee odottamaton puhelu.</li>
  <li><strong>Sinä pidät taustamusiikkia.</strong> Monet ihmiset suosivat hiljaista taustamusiikkia puheluiden aikana hiljaisuuden sijaan. Automaattinen kumartelu antaa sinun pitää sen mukavalla tasolla.</li>
  <li><strong>Se käsittelee useita sovelluksia.</strong> Kyse ei ole pelkästään musiikista — ilmoitusäänet, selaimen välilehdet ja muut äänilähteet katoavat samanaikaisesti.</li>
  <li><strong>Se palautuu täydellisesti.</strong> Kun puhelu päättyy, jokainen sovellus palaa täsmälleen aiempaan äänenvoimakkuuteensa. Ei säätämistä uudelleen.</li>
  <li><strong>Se toimii peräkkäisissä puheluissa.</strong> Jos sinulla on kolme kokousta peräkkäin, automaattinen kumartelu hoitaa ne kaikki ilman, että kosket mihinkään.</li>
</ul>

<h2>Valmistelu alle minuutissa</h2>

<ol>
  <li>Asenna <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Storesta</a></li>
  <li>Avaa Asetukset → Auto-Duck -välilehti</li>
  <li>Ota automaattinen ducking käyttöön</li>
  <li>Säädä ankan tason liukusäädin mieltymyksesi mukaan</li>
  <li>Siinä se — automaattinen kumartelu on aktiivista</li>
</ol>

<p>Seuraavan kerran kun liityt Zoom-, Teams- tai FaceTime-puheluun, taustaääni laskee automaattisesti. Kun lopetat puhelun, se palaa takaisin. Kertaluonteinen ostos, ei tilausta.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Kuinka mykistää yksi sovellus Mac mykistämättä kaikkea",
    description:
      "Slack piippaa. Olet puhelussa. Haluat mykistää Slackin, mutta kuuntelet kutsua koko ajan. macOS ei anna sinun tehdä — näin se tehdään joka tapauksessa.",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>Olet Zoom-puhelussa. Slack pitää jatkuvasti ilmoitusääniä. YouTube-välilehti, jonka unohdit, alkaa toistua automaattisesti. Painat mykistysnäppäintä — etkä nyt kuule puheluasi. macOS mykistää <em>kaiken</em>. Ei ole sisäänrakennettua tapaa mykistää vain yhtä sovellusta.</p>

<p>Windowsissa klikkaisit kaiuttimen kuvaketta oikealla, avaisit äänenvoimakkuusmikserin ja klikkaisit mykistysnappia Slackin vieressä. Valmista. Slack on hiljainen, kaikki muu pyörii edelleen. macOS ei ole vastaavaa.</p>

<p>Tämä opas kattaa kaikki käytettävissä olevat menetelmät tietyn sovelluksen mykistykseen Mac — sisäänrakennetuista kiertotavoista ainoaan ratkaisuun, joka oikeasti toimii kuin oikea mykistysnappi.</p>

<h2>Miksi macOS ei voi mykistää yksittäisiä sovelluksia</h2>

<p>macOS käsittelee ääntä yhtenä striimana. Jokaisen sovelluksen ääni sekoittuu ennen kuin se saavuttaa kaiuttimesi, ja ainoa äänenvoimakkuuden säätö, jonka Apple antaa, toimii juuri sillä viimeisellä miksatulla lähdöllä. Ei ole mitään keinoa kurkottaa siihen sekoitukseen ja hiljentää yhtä sovellusta vaikuttamatta muihin.</p>

<p>Tämä ei ole laitteistorajoitus — se on ohjelmistosuunnittelun valinta. macOS:n Core Audio -kehys tukee prosessikohtaista ääniohjausta API-tasolla. Apple ei yksinkertaisesti ole rakentanut käyttäjäkohtaista tapaa käyttää sitä.</p>

<h2>Sisäänrakennetut kiertotavat (ja niiden rajat)</h2>

<h3>1. Poista sovelluksen ilmoitukset pois päältä</h3>
<p>Mennä <strong>Järjestelmäasetukset → ilmoitukset</strong> Ja löydä sovellus, jonka haluat hiljentää. Voit poistaa äänet käytöstä ilmoituksista tai poistaa ilmoitukset kokonaan pois päältä.</p>
<p><strong>Koukku:</strong> Tämä toimii vain ilmoitusäänien kohdalla. Jos sovellus tuottaa muita ääniä — median toistoa, puheluääniä, sovelluksen sisäisiä ääniä — tämä ei kosketa niitä. Ja menetät myös visuaaliset ilmoitukset, et pelkästään äänet.</p>

<h3>2. Käytä tarkennustilaa</h3>
<p>macOS Tarkennustilat (Älä häiritse, Työ, Henkilökohtainen jne.) voivat vaimentaa ilmoitusäänet tietyistä sovelluksista. Voit määrittää, mitkä sovellukset saavat ilmoittaa sinulle kussakin Focus-tilassa.</p>
<p><strong>Koukku:</strong> Tarkennustilat liittyvät ilmoituksiin, eivät ääneen. Ne eivät mykistä Slack-keskustelua, selaimen välilehteä, joka toistaa ääntä, tai mitään median toistoa. Ne vaativat myös alustavan asetuksen jokaiselle tilalle — et voi vain "mykistää tätä sovellusta heti."</p>

<h3>3. Sulje sovellus</h3>
<p>Ydinasevaihtoehto. Jos lopetat Slackin kokonaan, se ei pysty pitämään ääniä. Tämä tarkoittaa tietenkin, ettet näe viestejä ennen kuin avaat sen uudelleen.</p>
<p><strong>Koukku:</strong> Et halua sulkea sovellusta — haluat <em>Jatka sen käyttöä</em> Ilman että kuulisin sitä. On valtava ero "mykistä" ja "lähellä" välillä.</p>

<h3>4. Käytä sovelluksen omia asetuksia</h3>
<p>Joillakin sovelluksilla on "mykistä äänet" tai "mykistää ilmoitukset" -asetus jossain asetuksissa. Slackissa se on asetuksissa → Ilmoituksissa → Ääni ja ulkonäkö. Spotifyssa on kaiutinkuvake soittimessa.</p>
<p><strong>Koukku:</strong> Sinun täytyy löytää ja navigoida jokaisen sovelluksen asetuksissa erikseen. Monissa sovelluksissa tätä vaihtoehtoa ei ole lainkaan. Ja vaihtaminen "mykistetyn" ja "mykistöttömän" välillä tarkoittaa, että sukeltaa aina asetuksiin sen sijaan, että klikkaisi yhtä nappia.</p>

<h2>Todellinen ratkaisu: sovelluskohtainen mykistysnappi</h2>

<p>Mitä oikeasti haluat, on todella yksinkertaista: mykistysnappi jokaisen sovelluksen viereen, joka hiljentää sen välittömästi vaikuttamatta mihinkään muuhun. Klikkaa mykistääksesi, klikkaa uudelleen poistaaksesi mykistyksen. Sovellus jatkaa toimintaansa, näet sen sisällön — et vain kuule sitä.</p>

<p>Juuri näin sovelluskohtainen äänenvoimakkuusmikseri tekee. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Se istuu valikkopalkissa ja näyttää jokaisen käynnissä olevan sovelluksen omalla äänenvoimakkuusliukusäätimellä ja mykistyspainikkeella.</p>

<img src="/apps/sounddial.png" alt="SoundDial näyttää sovelluskohtaiset mykistyspainikkeet jokaiselle sovellukselle macOS valikkopalkissa" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Yhden sovelluksen mykistys:</p>
<ol>
  <li>Klikkaa SoundDial-kuvaketta valikkopalkissasi</li>
  <li>Etsi sovellus, jonka haluat mykistää</li>
  <li>Klikkaa sen vieressä olevaa kaiutinkuvaketta</li>
</ol>

<p>Siinä se. Sovellus on mykistetty. Kaikki muu jatkuu sillä äänenvoimakkuudella, mitä se oli. Klikkaa kaiutinkuvaketta uudelleen poistaaksesi mykistyksen — äänenvoimakkuus palautuu täsmälleen entiselle tasolle.</p>

<h2>Mykistämisen lisäksi: sovelluskohtainen äänenvoimakkuuden säätö</h2>

<p>Kun sinulla on sovelluskohtainen mikseri, huomaat, että mykistys on vain ääripää siitä, mitä oikeasti haluat. Useimmiten et halua täysin hiljentää sovellusta — haluat tehdä sen <em>hiljaisempi</em>.</p>

<ul>
  <li>Slack-ilmoitukset 15 % — tarpeeksi hienovaraisia keskeyttämättä, tarpeeksi läsnä huomatakseen sen</li>
  <li>Musiikki 30 % — taustatasolla, joka ei kilpaile keskustelun kanssa</li>
  <li>Selain 60 % — mukava videon toistoon</li>
  <li>Zoomaa 100 % — täysi äänenvoimakkuus sille puhelulle, jolla on merkitystä</li>
</ul>

<p>SoundDial antaa jokaiselle sovellukselle liukusäätimen 0 %:sta 200 %:iin. Voit tehdä sovelluksista hiljaisempia kuin niiden sisäänrakennettu minimi tai äänekkäämpi kuin niiden sisäänrakennettu maksimi. Ja kun <strong>Volyymiprofiilit</strong>Voit tallentaa haluamasi asetukset ja vaihtaa esiasetusten välillä — "Kokous"-tila, "Focus"-tila, "Musiikki" -tila — yhdellä klikkauksella.</p>

<p>Automaattinen kumartelutoiminto menee vielä pidemmälle: kun aloitat puhelun, SoundDial automaattisesti laskee kaiken paitsi viestintäsovelluksesi. Kun puhelu päättyy, kaikki palaa esiin. Et koskaan koske liukusäätimeen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a> — 14,99 € kertaluonteinen ostos, ilman tilausta, macOS 14,2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Volume Mixer for Mac: Puuttuva ominaisuus, jota macOS ei vieläkään ole",
    description:
      "Windowsissa on ollut äänenvoimakkuuden mikseri vuodesta 2006 lähtien. Tässä syy, miksi macOS ei vieläkään toimi — ja paras tapa saada sovelluskohtainen äänenvoimakkuuden säätö Mac vuonna 2026.",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>Napsauta kaiutinkuvaketta millä tahansa Windows-tietokoneella ja löydät Volume Mixerin — paneelin, joka näyttää kaikki tällä hetkellä ääntä tuottavat sovellukset, jokaisella oma itsenäinen äänenvoimakkuusliukusäädin. Voit laskea Spotifyn 20 %:iin ja pitää Zoom-puhelun 100 %:ssa. Voit mykistää Chromen koskematta mihinkään muuhun. Se on ollut siellä Windows Vistasta lähtien vuonna 2006.</p>

<p>Tee sama nyt Mac. Klikkaa äänikuvaketta valikkopalkissa. Saat yhden liukusäädin. Siinä se. Yksi liukusäädin, joka ohjaa kaikkea kerralla. Jokainen sovellus, jokainen ilmoitus, jokainen järjestelmäääni — kaikki lukittuina yhteen.</p>

<p>Tämä ei ole niche-valitus. Se on vuoden macOS eniten toivottu ääniominaisuus, ja Apple on jättänyt sen huomiotta kahdenkymmenen vuoden ajan.</p>

<h2>Mitä volyymisekoitin oikeasti tekee</h2>

<p>Äänenvoimakkuussekoitin antaa sinulle <strong>Itsenäinen äänenvoimakkuuden säätö jokaiseen sovellukseen</strong> tietokoneellasi. Yhden master-liukusäätimen sijaan saat yhden liukusäätimen per sovellus. Jokainen liukusäädin vaikuttaa vain kyseisen sovelluksen äänilähtöön.</p>

<p>Tältä se käytännössä näyttää:</p>

<ul>
  <li><strong>Spotify</strong> 25 % — taustamusiikki mukavalla tasolla</li>
  <li><strong>Zoom</strong> 100 % — kuuntele jokainen kokouksen sana</li>
  <li><strong>Slack</strong> mykistetty — ei ilmoitusääniä tarkennusajan aikana</li>
  <li><strong>Safari</strong> 60 % — YouTube-video kohtuullisella äänenvoimakkuudella</li>
  <li><strong>Järjestelmän äänet</strong> 10 % — hienovarainen palaute säikäyttämättä sinua</li>
</ul>

<p>Kaikki nämä pyörivät samanaikaisesti, jokainen omalla äänenvoimakkuudellaan. Vaihda yhtä, eikä mikään muu liiku. Se on sitä, mitä volyymisekoitin tekee, ja sitä macOS ei ole.</p>

<h2>Miksi Apple ei ole rakentanut sellaista</h2>

<p>Se ei ole tekninen rajoite. macOS:n äänikehys — Core Audio — tukee täysin prosessikohtaista äänen reititystä ja äänenvoimakkuuden hallintaa API-tasolla. Apple käyttää näitä ominaisuuksia sisäisesti. He eivät vain ole paljastaneet niitä käyttäjille.</p>

<p>Todennäköinen syy on Applen suunnittelufilosofia: vähemmän vaihtoehtoja, yksinkertaisempi käyttöliittymä. Yksi liukusäädin on puhtaampi kuin kaksitoista. Ja henkilölle, joka tekee vain yhtä asiaa kerrallaan — kuuntelee musiikkia TAI ottaa puhelun TAI katsoo videon — yksi liukusäädin riittää.</p>

<p>Mutta ihmiset eivät käytä tietokoneita näin vuonna 2026. Etätyö tarkoittaa, että olet puhelussa, jossa musiikki soi, Slackin pingaaminen ja selaimen välilehti toistaa videon automaattisesti, kaikki samaan aikaan. "Yksi liukusäädin kaikkeen" -malli hajoaa täysin, kun viisi äänilähdettä kilpailee korvistasi.</p>

<h2>macOS kiertotiet (ja miksi ne jäävät vajaiksi)</h2>

<h3>Käytä jokaisen sovelluksen sisäänrakennettua äänenvoimakkuuden säätöä</h3>
<p>Spotifyssa on äänenvoimakkuuden liukusäädin. VLC:llä on sellainen. QuickTimella on sellainen. Tämä tarkoittaa kuitenkin erikseen vaihtamista jokaiseen sovellukseen, äänenvoimakkuuden säätimen etsimistä, säätämistä ja takaisinkytkemistä. Se on hajallaan kymmenessä eri paikassa, ja useimmissa sovelluksissa — Slack, Mail, Safari, Chrome — ei edes ole sellaista.</p>

<h3>Käytä "Älä häiritse" -toimintoa hiljentääksesi ilmoitukset</h3>
<p>Tarkennustilat voivat vaimentaa ilmoitusääniä, mutta ne ovat binäärisiä — kaikki tai ei mitään. Et voi sanoa "pidä Slack-äänet mutta tee niistä hiljaisempia." Tarkennustilat eivät kosketa mediaa tai puhelun äänenvoimakkuutta lainkaan.</p>

<h3>Käytä Audio MIDI -asetusta</h3>
<p>Tämä sisäänrakennettu apuohjelma hallitsee äänilaitteita ja näytteenottotaajuuksia. Tällä ei ole mitään tekemistä sovelluskohtaisen volyymin kanssa. Se on laitekonfigurointityökalu, ei mikseri.</p>

<h3>Luo monilähtölaitteita</h3>
<p>Voit yhdistää äänilähdöt yhteen laitteeseen, mutta tämä lähettää saman äänen useille lähtöille — se ei anna sinulle sovelluskohtaista hallintaa. Se on hyödyllinen, jos haluat äänen sekä kaiuttimista että kuulokkeista samanaikaisesti, mutta se on täysin eri ongelma.</p>

<p>Mikään näistä kiertotavoista ei ratkaise perusongelmaa: macOS ei ole sisäänrakennettua tapaa sanoa "tee tästä sovelluksesta hiljaisempi vaikuttamatta mihinkään muuhun."</p>

<h2>Mitä kannattaa etsiä Mac volyymimikserissä</h2>

<p>Jos Apple ei rakenna sitä, kolmannen osapuolen sovellukset tekevät. Mutta kaikki volyymimikserit eivät ole samanlaisia. Tässä on, mikä erottaa hyvän keskinkertaisesta:</p>

<h3>Reaaliaikainen sovellustunnistus</h3>
<p>Mikserin pitäisi automaattisesti tunnistaa kaikki sovellukset, jotka tuottavat ääntä. Sinun ei pitäisi joutua lisäämään sovelluksia manuaalisesti tai konfiguroimaan mitään. Avaa sovellus, ja se ilmestyy mikseriin. Sulje se, niin se katoaa.</p>

<h3>Volyymialue yli 100 %</h3>
<p>Jotkut sovellukset ovat liian hiljaisia jopa maksimivolyymilla — hiljaiset podcast-soittimet, selaimen välilehdet pehmeällä äänellä, videopuhelut, joissa jonkun mikrofoni on matala. Hyvä mikseri antaa sinulle mahdollisuuden <strong>Nosta äänenvoimakkuutta jopa 200 %:iin</strong>, mikä tehostaa ääntä enemmän kuin sovellus itse pystyy tuottamaan.</p>

<h3>Yhden klikkauksen mykistys per sovellus</h3>
<p>Sinun pitäisi pystyä mykistämään minkä tahansa sovelluksen yhdellä klikkauksella — ilman liukusäädintä liikuttamista. Kun poistat mykistyksen, sen pitäisi palata täsmälleen paikalleen. Tämä on ratkaisevan tärkeää, jotta meluisa sovellus voidaan nopeasti hiljentää puhelun aikana.</p>

<h3>Profiilit eri tilanteisiin</h3>
<p>Et halua säätää kahdeksaa liukusäädintä manuaalisesti joka kerta, kun vaihdat "musiikin kanssa työstämisestä" "videopuheluun" ja "pelaamiseen". Profiilit antavat tallentaa äänenvoimakkuusasetukset ja ottaa sen käyttöön yhdellä klikkauksella. "Kokous"-profiili voi asettaa Zoomin 100 %:iin, musiikin 15 %:iin ja ilmoitukset 0 %:iin. "Focus"-profiili saattaa mykistää kaiken paitsi Spotifyn.</p>

<h3>Automaattinen kyykistyminen puheluiden aikana</h3>
<p>Äänenvoimakkuusmikserin paras ominaisuus: automaattisesti taustaääni laskee, kun liityt puheluun, ja palauttaa se puhelun päätyttyä. Manuaalista säätöä ei tarvita. Musiikkisi hiljenee, kun Zoom aktivoi mikrofonin, ja palaa takaisin, kun lopetat puhelun.</p>

<h3>Valikkopalkin integraatio</h3>
<p>Äänenvoimakkuusmikserin pitäisi olla valikkopalkissa — yhdellä klikkauksella avaa, säätää ja sulkea. Sen ei pitäisi olla täysi ikkuna, ei pitäisi viedä Dock-tilaa eikä vaatia vaihtamista pois nykyisestä sovelluksestasi. Sinun pitäisi pystyä säätämään volyymeja menettämättä keskittymistä siihen, mitä teet.</p>

<h2>SoundDial: volyymisekoitin macOS olisi pitänyt olla sisäänrakennettu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> on natiivi macOS valikkopalkin sovellus, joka tarjoaa juuri sen, mitä Apple ei tarjoa — itsenäisen äänenvoimakkuuden säädön jokaiselle sovellukselle Mac.</p>

<p>Se sijaitsee valikkopalkissa ja näyttää jokaisen käynnissä olevan sovelluksen omalla äänenvoimakkuuden liukusäätimellä. Vedä liukusäädintä säätääksesi sovelluksen äänenvoimakkuuden 0 %:sta 200 %:iin. Klikkaa kaiutinkuvaketta mykistääksesi sen välittömästi. Vaihda tallennettujen profiilien välillä eri tilanteissa. Ota automaattinen kumartelu käyttöön ja musiikkisi hiljenee automaattisesti, kun puhelu alkaa.</p>

<img src="/apps/sounddial.png" alt="SoundDial — sovelluskohtainen äänenvoimakkuusmikseri macOS näyttää yksittäisten sovellusten äänenvoimakkuusliukusäätimet valikkopalkissa" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Keskeiset ominaisuudet:</p>
<ul>
  <li><strong>Sovelluskohtaiset volyymiliukusäätimet</strong> — 0–200 % vaihteluväli jokaiselle juoksusovellukselle</li>
  <li><strong>Yhden klikkauksen mykistys</strong> — hiljennä minkä tahansa sovelluksen liikuttamatta liukusäädintä</li>
  <li><strong>Volyymiprofiilit</strong> — tallenna ja vaihda äänenvoimakkuuskonfiguraatioiden välillä</li>
  <li><strong>Auto-ducking</strong> — musiikki vaimenee automaattisesti puheluiden aikana</li>
  <li><strong>Näppäimistön pikanäppäimet</strong> — mikserin kytkeminen päälle tai kaikkien sovellusten mykistys pikanäppäimellä</li>
  <li><strong>Lähtölaitteen kytkentä</strong> — vaihtaa kaiuttimet/kuulokkeet samasta paneelista</li>
  <li><strong>Tilavuusmuisti</strong> — muistaa jokaisen sovelluksen äänenvoimakkuuden uudelleenkäynnistysten välillä</li>
</ul>

<p>Kertaluonteinen ostos. Ei tilausta. macOS 14,2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Saat SoundDial Mac App Storesta</a>.</p>
`,
  },
};
