import json

items = [
{
"slug": "mac-volume-profiles-work-vs-home",
"title": "Profili glasnoće na Macu: prebacujte se između radne i kućne audio postave",
"description": "Vaše idealne glasnoće aplikacija na poslu potpuno su drugačije od večernje postave kod kuće. Ručno podešavanje pet aplikacija svaki put kad promijenite kontekst gubi vrijeme. Evo alternative jednim klikom.",
"content": """
<p>U 9 ujutro trebate glasan Zoom, Slack na blagoj razini pinga, tihu glazbu i utišan preglednik. U 18 sati radni dan završava — Zoom nije bitan, Slack bi trebao biti tih, glazba ide na 80%, a preglednik pušta Netflix na punoj glasnoći. To je pet ili šest aplikacija za ručno podešavanje, dvaput dnevno, svaki dan. Većina ljudi se ne trudi i jednostavno živi s pogrešnim glasnoćama pola vremena.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — prebacujte se između radnih i kućnih profila glasnoće na Macu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Porez na promjenu konteksta</h2>

<p>Vaše potrebe za zvukom potpuno su drugačije ovisno o tome što radite, ali macOS nema nikakav koncept audio konteksta. Ne postoji postava glasnoće za „radni način" ili predložak za „večer". Svaki put kad se vaš kontekst promijeni, ili ručno podešavate svaku aplikaciju ili prihvaćate da će neke aplikacije biti preglasne, a druge pretihe.</p>

<p>Ovo nije problem koji se javlja jednom dnevno. Mnogi ljudi mijenjaju kontekst više puta: jutarnji fokus, standup sastanak, dubok rad, stanka za ručak, poslijepodnevna suradnja, večernje osobno vrijeme. Svaki ima idealnu audio konfiguraciju, a nijedna nije ista.</p>

<h2>Profili glasnoće za svaki kontekst</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vam omogućuje da spremite potpune konfiguracije glasnoće po aplikaciji kao imenovane profile i prebacujete se između njih jednim klikom iz trake izbornika.</p>

<h3>Radni profil</h3>
<ul>
  <li><strong>Zoom / Meet:</strong> 100%</li>
  <li><strong>Slack:</strong> 20% — suptilne obavijesti</li>
  <li><strong>Music:</strong> 25% — pozadinski fokus</li>
  <li><strong>Preglednik:</strong> utišan</li>
  <li><strong>Messages:</strong> utišan</li>
</ul>

<h3>Kućni profil</h3>
<ul>
  <li><strong>Music / Spotify:</strong> 80%</li>
  <li><strong>Preglednik (streaming):</strong> 100%</li>
  <li><strong>Slack:</strong> utišan</li>
  <li><strong>Zoom:</strong> utišan</li>
  <li><strong>Messages:</strong> 50%</li>
</ul>

<h3>Profil za fokus</h3>
<ul>
  <li><strong>Music:</strong> 40% — lo-fi ili ambijentalna</li>
  <li><strong>Sve ostalo:</strong> utišano</li>
</ul>

<p>Tri profila, tri potpuno različita zvučna okruženja. Svako prebacivanje traje jedan klik i primjenjuje se trenutačno. Zvuk vašeg Maca prilagođava se vama, umjesto obrnuto.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Preuzmite SoundDial na Mac App Storeu</a> — jednokratna kupnja za 14,99 €, bez pretplate, macOS 14.2+.</p>
"""
},
{
"slug": "mac-audio-for-twitch-streaming",
"title": "Zvuk na Macu za Twitch streaming: igra, obavijesti, glazba, mikrofon",
"description": "Streaming na Twitchu s Maca znači upravljanje zvukom igre, obavijestima za stream, pozadinskom glazbom i chatom — sve na ispravnim razinama za vašu publiku. Evo kako ih pravilno miksati.",
"content": """
<p>Streamate na Twitchu sa svog Maca. OBS hvata vašu igru, mikrofon i zvuk radne površine. No „zvuk radne površine" jedan je miksani signal — vaša igra, zvukovi obavijesti, pozadinska glazba, Discord i pingovi obavijesti svi slijeću na isti kanal na glasnoći koju macOS odluči. Vaši gledatelji čuju neuravnotežen kaos gdje obavijesti zaglušuju igru, glazba nadglasava vaš komentar, a Slack ping nasumično prekida stream.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — zvučni miks za Twitch streaming na Macu s glasnoćom po aplikaciji" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Zašto je zvuk za streaming težak na Macu</h2>

<p>OBS hvata „zvuk radne površine" kao jedan miksani tok — sve što svira na vašem Macu kombinirano. Na Windowsima streameri koriste ugrađeni mikser glasnoće da unaprijed usklade aplikacije prije nego ih OBS uhvati. Na macOS-u taj mikser ne postoji. Vaš miks prije hvatanja je onakav kakav se dogodi da svira, na razinama koje su zadane u aplikacijama.</p>

<p>Profesionalni Mac streameri obično koriste alate za virtualno usmjeravanje zvuka kako bi stvorili zasebne audio kanale za svaki izvor. To funkcionira, ali je složeno za postaviti, zahtijeva audio upravljačke programe i lomi se kad macOS nadogradnje promijene audio okvire.</p>

<h2>Predmiksanje s glasnoćom po aplikaciji</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vam omogućuje da uskladite svaku aplikaciju prije nego OBS uhvati kombinirani izlaz. Budući da OBS preuzima konačni miks, podešavanje pojedinačnih glasnoća aplikacija SoundDialom izravno utječe na ono što vaši gledatelji čuju.</p>

<h3>Profil za streaming</h3>
<ul>
  <li><strong>Igra:</strong> 60% — prisutna, ali ne preplavljujuća</li>
  <li><strong>Aplikacija za obavijesti / Streamlabs:</strong> 40% — čujna za angažman gledatelja, ne glasnija od igre</li>
  <li><strong>Glazba (Spotify / Apple Music):</strong> 15-20% — pozadinska atmosfera, glasnoća sigurna od DMCA prijava</li>
  <li><strong>Discord:</strong> 50% — komunikacija sa suvoditeljem ili moderatorima</li>
  <li><strong>Preglednik:</strong> utišan — bez iznenadnog zvuka iz kartica na streamu</li>
  <li><strong>Slack / Mail / Messages:</strong> utišani — osobne obavijesti ostaju izvan streama</li>
</ul>

<h3>Brza podešavanja usred streama</h3>

<p>Gledatelj kaže da je igra preglasna? Stišajte samo klizač igre iz trake izbornika bez alt-tabbing izlaska iz svoje scene za stream. Glazba pretiha? Malo je pojačajte. Brzo povlačenje klizača u SoundDialu nevidljivo je gledateljima — bez panela postavki na zaslonu, bez prekida streama.</p>

<h3>Automatsko prigušivanje za komentar</h3>

<p>Uključite automatsko prigušivanje da stišate zvuk igre i glazbe kad govorite. Vaš komentar uvijek se probije, a zvuk se vraća u tihim trenucima — točno ono što profesionalni streameri postižu skupim postavama usmjeravanja zvuka.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Preuzmite SoundDial na Mac App Storeu</a> — jednokratna kupnja za 14,99 €, bez pretplate, macOS 14.2+.</p>
"""
},
{
"slug": "mac-audio-for-music-lessons",
"title": "Zvuk na Macu za online glazbene poduke: odvojite DAW, videopoziv i metronom",
"description": "Pohađanje ili držanje glazbenih poduka online znači jasno čuti učenika ili učitelja dok se DAW, metronom i backing track natječu za istu glasnoću.",
"content": """
<p>Na online glazbenoj ste poduci — podučavate ili učite. Vaš učenik svira preko Zooma i trebate ga jasno čuti. GarageBand ili Logic svira backing track. Aplikacija metronoma otkucava. Možda Spotify ima u redu čekanja referentnu snimku. Sve se ovo bori za jedan sistemski klizač glasnoće. Pojačate glasnoću da čujete učenika i metronom postane zaglušujući. Ručno stišate metronom i sad je backing track pretih da svirate uz njega.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — postava zvuka za online glazbenu poduku s neovisnim glasnoćama aplikacija na Macu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Izazov online glazbene poduke</h2>

<p>Glazbene poduke zahtijevaju precizno usklađivanje zvuka kakvo ne zahtijeva nijedan drugi slučaj upotrebe. Trebate čuti udaljenog sudionika s dovoljno vjernosti da uhvatite probleme s tehnikom i ritmom. Trebate čujan, ali ne dominantan metronom ili click track. Backing trackovi trebaju biti ispod izvedbe, ne iznad nje. A ako ste učitelj, možda trebate pustiti referentne snimke učeniku — prebacujući se između aplikacija dok održavate ispravne relativne glasnoće.</p>

<p>Svaki od ovih izvora ima vlastitu internu razinu glasnoće, a nijedan se ne usklađuje s ostalima. macOS nema alate za njihovo usklađivanje.</p>

<h2>Izgradnja zvučnog miksa za poduku</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vam omogućuje da postavite svaku aplikaciju na njezinu idealnu razinu, stvarajući uravnotežen miks za poduku bez diranja internih postavki aplikacija.</p>

<h3>Profil za podučavanje</h3>
<ul>
  <li><strong>Zoom / FaceTime:</strong> 100% — zvuk učenika je prioritet</li>
  <li><strong>Aplikacija metronoma:</strong> 35% — čujan otkucaj bez preplavljivanja</li>
  <li><strong>GarageBand / Logic:</strong> 50% — backing trackovi ispod izvedbe</li>
  <li><strong>Spotify:</strong> utišan (nakratko uključite zvuk za referentnu reprodukciju)</li>
  <li><strong>Slack / Mail:</strong> utišani — nula prekida tijekom poduke</li>
</ul>

<h3>Profil za vježbanje</h3>
<ul>
  <li><strong>Metronom:</strong> 50% — jasna referenca za ritam</li>
  <li><strong>DAW:</strong> 80% — backing trackovi na punoj razini za vježbanje</li>
  <li><strong>Spotify:</strong> 70% — dostupne referentne snimke</li>
  <li><strong>Sve ostalo:</strong> utišano — usredotočeno vježbanje</li>
</ul>

<p>Prebacite se s podučavanja na osobno vježbanje jednim klikom. Vaše zvučno okruženje odgovara aktivnosti bez ručnog podešavanja četiri ili pet aplikacija svaki put.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Preuzmite SoundDial na Mac App Storeu</a> — jednokratna kupnja za 14,99 €, bez pretplate, macOS 14.2+.</p>
"""
},
{
"slug": "mac-audio-for-online-therapy",
"title": "Zvuk na Macu za online terapiju: privatnost, jasnoća i nula prekida",
"description": "Sesija online terapije zahtijeva apsolutnu zvučnu privatnost i nula prekida. Slack ping ili zvuk obavijesti tijekom sesije više je nego naporan — remeti sam proces.",
"content": """
<p>Na sesiji ste online terapije na svom Macu. Razgovor zahtijeva vašu punu pažnju i osjećaj privatnosti. Onda Slack zapinguje. Podsjetnik Kalendara zazvoni. Zaboravljena kartica preglednika počne reproducirati zvuk. Svaki prekid vas izvlači iz trenutka, a tjeskoba „hoće li me nešto drugo prekinuti?" može potkopati sesiju i prije nego što se sljedeći zvuk uopće oglasi.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — postava zvuka za privatnu terapijsku sesiju bez prekida na Macu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Zašto Ne uznemiravaj nije dovoljno</h2>

<p>Ne uznemiravaj potiskuje bannere obavijesti i većinu zvukova upozorenja, ali nije sveobuhvatan. Neke aplikacije reproduciraju vlastite audio obavijesti izvan sistemskog okvira. Kartica preglednika može se automatski reproducirati. Aplikacija za koju ste zaboravili da radi može proizvesti neočekivan zvuk. A Ne uznemiravaj ne pomaže s temeljnim problemom: želite da vaša terapijska aplikacija (Zoom, Doxy ili platforma temeljena na pregledniku) bude savršeno jasna dok je sve ostalo zajamčeno tiho.</p>

<h2>Zapečaćeno zvučno okruženje</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vam omogućuje da utišate svaku aplikaciju osim vaše terapijske platforme, stvarajući zvučno okruženje u kojem su prekidi strukturno nemogući — ne samo potisnuti.</p>

<h3>Profil za terapijsku sesiju</h3>
<ul>
  <li><strong>Zoom / preglednik (terapijska platforma):</strong> 100% — jasna komunikacija na punoj glasnoći</li>
  <li><strong>Svaka druga aplikacija:</strong> utišana — Slack, Mail, Messages, Calendar, Music, sekundarni preglednici</li>
</ul>

<p>Primijenite profil prije nego sesija počne. Sljedeći sat jedini zvuk koji vaš Mac proizvodi dolazi iz vaše terapijske aplikacije. Nijedan Slack ping ne može doprijeti do vaših zvučnika. Nijedno zvono Kalendara. Nijedna zaboravljena kartica preglednika. Tišina drugih aplikacija je zajamčena, ne samo poželjna.</p>

<h3>Povratak na normalu nakon</h3>

<p>Kad sesija završi, prebacite se natrag na svoj uobičajeni profil. Sve vaše aplikacije vraćaju se na svoje normalne glasnoće. Obavijesti koje ste propustili i dalje čekaju u svojim aplikacijama — ništa nije izgubljeno, samo utišano tijekom vremena kad vam je trebala privatnost.</p>

<h3>Ista postava funkcionira za</h3>
<ul>
  <li>Medicinske telemedicinske preglede</li>
  <li>Povjerljive poslovne razgovore</li>
  <li>Važne telefonske intervjue</li>
  <li>Bilo koju situaciju gdje su zvučna privatnost i nula prekida bitni</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Preuzmite SoundDial na Mac App Storeu</a> — jednokratna kupnja za 14,99 €, bez pretplate, macOS 14.2+.</p>
"""
},
{
"slug": "virtual-audio-driver-vs-sounddial-mac",
"title": "Virtualni audio upravljački programi naspram SoundDiala — koji je pristup bolji na Macu?",
"description": "Virtualni audio upravljački programi i mikseri glasnoće u traci izbornika oboje obećavaju kontrolu zvuka po aplikaciji na Macu. Rade na potpuno različite načine ispod haube. Evo iskrene usporedbe oba pristupa.",
"content": """
<p>Želite kontrolu glasnoće po aplikaciji na svom Macu. Pronašli ste dvije kategorije alata: virtualne audio upravljačke programe (poput Loopbacka, BlackHolea ili komponente upravljačkog programa u SoundSourceu) i lagane miksere u traci izbornika (poput SoundDiala ili Background Musica). Oba obećavaju neovisnu kontrolu glasnoće aplikacija. No postižu to putem temeljno različitih mehanizama, a kompromisi su bitni.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial naspram virtualnih audio upravljačkih programa — usporedba pristupa zvuku po aplikaciji na Macu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Kako rade virtualni audio upravljački programi</h2>

<p>Virtualni audio upravljački program stvara lažni audiouređaj u macOS-u. Aplikacije šalju svoj zvuk na taj virtualni uređaj, a softver upravljačkog programa ga usmjerava dalje — potencijalno dijeleći, miksajući ili obrađujući tokove usput. Ovo je moćno: možete slati različite aplikacije na različite fizičke izlaze, primijeniti EQ po aplikaciji, snimati pojedinačne tokove aplikacija i graditi složene matrice usmjeravanja.</p>

<p>Kompromisi:</p>
<ul>
  <li><strong>Instalacija na razini sustava:</strong> upravljački programi mijenjaju vaš audio podsustav. Zahtijevaju sigurnosno odobrenje, a ponekad i ponovno pokretanje.</li>
  <li><strong>Krhkost kod macOS nadogradnji:</strong> Apple često mijenja audio okvire. Upravljački programi mogu se pokvariti nakon veće nadogradnje, ostavljajući vas bez zvuka dok ih programer ne zakrpi.</li>
  <li><strong>Složenost:</strong> matrice usmjeravanja i virtualni uređaji moćni su, ali zbunjujući ako samo želite jednu aplikaciju stišati.</li>
  <li><strong>Nema ih na App Storeu:</strong> aplikacije koje instaliraju upravljačke programe ne mogu se distribuirati preko Mac App Storea zbog ograničenja sandboxa.</li>
</ul>

<h2>Kako radi SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> koristi drugačiji pristup. Koristi macOS API-je za kontrolu glasnoće audio toka svake aplikacije bez instaliranja bilo kakvog upravljačkog programa ili virtualnog uređaja. Nijedan lažni audiouređaj ne pojavljuje se u vašim postavkama Zvuka. Nikakva izmjena sustava nije potrebna.</p>

<p>Kompromisi:</p>
<ul>
  <li><strong>Bez složenog usmjeravanja:</strong> SoundDial kontrolira glasnoću, utišavanje i pojačanje po aplikaciji — ne usmjerava aplikacije na različite fizičke izlaze niti primjenjuje EQ po aplikaciji.</li>
  <li><strong>Sandboxan za App Store:</strong> čisto se instalira i deinstalira, bez sigurnosnih upita za upravljačke programe, bez potrebe za ponovnim pokretanjem.</li>
  <li><strong>Otpornost na macOS nadogradnje:</strong> budući da ne mijenja audio podsustav, manja je vjerojatnost da će se pokvariti nakon nadogradnji sustava.</li>
  <li><strong>Jednostavnost:</strong> klizač po aplikaciji, profili, automatsko prigušivanje. Nema dijagrama usmjeravanja za konfiguriranje.</li>
</ul>

<h2>Koji biste trebali odabrati?</h2>

<p>Budite iskreni prema onome što vam stvarno treba:</p>

<ul>
  <li><strong>Odaberite virtualni audio upravljački program</strong> ako trebate usmjeriti određene aplikacije na određene fizičke izlaze (npr. igru na slušalice, glazbu na zvučnike istovremeno), snimati pojedinačne audio tokove aplikacija ili primijeniti efekte i EQ po aplikaciji. Loopback ili SoundSource najbolje su opcije za ovo.</li>
  <li><strong>Odaberite <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a></strong> ako trebate kontrolu glasnoće po aplikaciji, utišavanje po aplikaciji, pojačanje iznad 100%, profile glasnoće i automatsko prigušivanje — bez složenosti i krhkosti instalacije upravljačkog programa. Ovo pokriva ono što stvarno treba većini ljudi.</li>
</ul>

<p>Većina ljudi koji traže „kontrolu glasnoće po aplikaciji" žele drugu opciju. Žele da Spotify bude tiši tijekom poziva, ili da Discord bude glasniji od njihove igre. To ne zahtijeva virtualni audiouređaj — zahtijeva klizač glasnoće po aplikaciji, što je točno ono što SoundDial pruža bez diranja vašeg audio podsustava.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Preuzmite SoundDial na Mac App Storeu</a> — jednokratna kupnja za 14,99 €, bez pretplate, macOS 14.2+.</p>
"""
},
]

with open("/Users/eduardbruch/Desktop/vscode/eduard-bruch-website/i18n-tools/translated/sounddial_hr_part7.json", "w") as f:
    json.dump(items, f, ensure_ascii=False, indent=2)

print("wrote", len(items), "items")
