import type { ArticleSet } from "./index";

export const caArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Àudio per a podcasts: Controla el que escoltes mentre graves",
    description:
      "Gravar un podcast mentre controles els nivells, escoltar el teu convidat i gestionar notificacions — tot competint per un sol control de volum. Aquí tens una millor configuració.",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>Estàs gravant un podcast al teu Mac. Has d'escoltar clarament el teu convidat (a través de Zoom, Riverside o SquadCast). Has de controlar els nivells de gravació del teu DAW. Necessites silenciar Slack perquè no hi hagi pings a la gravació. I necessites que els sons de notificació del sistema quedin completament silenciats — un macOS "ding" enmig d'una entrevista és àudio inutilitzable.</p>

<p>macOS et dona un sol control lliscant de volum per a tot això. No n'hi ha prou.</p>

<h2>El repte d'àudio de podcasting a Mac</h2>

<p>Durant una sessió de gravació de podcast, normalment tens:</p>
<ul>
  <li><strong>Aplicació de comunicació</strong> (Zoom, Riverside, SquadCast) — àudio d'invitats, ha de ser clar</li>
  <li><strong>DAW / aplicació de gravació</strong> (Logic, GarageBand, Audacity, Hindenburg) — monitoritzant els teus propis nivells</li>
  <li><strong>Fonts de notificació</strong> (Slack, Correu, Calendari, Missatges) — ha de ser completament silenciós durant la gravació</li>
  <li><strong>Navegador</strong> — podrien tenir notes de mostra, pestanyes de recerca o un temporitzador en marxa</li>
</ul>

<p>Tot això al mateix volum és caos. El teu convidat està competint amb les ajuntaments del sistema. Una notificació de Slack podria arruïnar una presa. I si has d'ajustar el volum dels teus convidats, canviar el volum del sistema també canvia els nivells de monitoratge.</p>

<h2>La solució típica</h2>

<p>La majoria de podcasters utilitzen una combinació de:</p>
<ul>
  <li>Mode d'enfocament (No molestar) per suprimir notificacions</li>
  <li>Tancar manualment Slack, Mail i altres aplicacions sorolloses abans de gravar</li>
  <li>Ajustant el volum intern de l'aplicació de comunicació per al convidat</li>
</ul>

<p>Això funciona, però és propens a errors. Si t'oblides d'activar el DND, una notificació espatlla la teva opinió. Oblido deixar Slack i arriba una trucada. I encara no pots controlar de manera independent el volum del teu convidat respecte als teus nivells de monitoratge.</p>

<h2>Àudio per aplicació per a podcasts</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet construir un entorn de gravació net controlant cada aplicació de manera independent:</p>

<img src="/apps/sounddial.png" alt="SoundDial configuració de podcasting — àudio convidat, monitoratge i notificacions a nivells independents" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Perfil de gravació</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — àudio clar dels convidats</li>
  <li><strong>Logic / GarageBand:</strong> 60% — monitoratge còmode sense fatiga</li>
  <li><strong>Slack:</strong> Silenciat — Zero sons de notificació</li>
  <li><strong>Correu:</strong> apagada</li>
  <li><strong>Missatges:</strong> apagada</li>
  <li><strong>Calendari:</strong> apagada</li>
  <li><strong>Navegador:</strong> Silenciat — Cap reproducció automàtica sorpresa</li>
</ul>

<p>Guarda això com un perfil de "Gravació". Abans de prémer gravar, aplica el perfil amb un sol clic. Totes les fonts de notificacions estan silenciades, el teu convidat està al màxim volum i el teu monitoratge és còmode.</p>

<h3>Perfil d'edició</h3>
<ul>
  <li><strong>Lògica / Hindenburg:</strong> 100% — monitoratge complet per a l'edició</li>
  <li><strong>Spotify:</strong> Silenciat — Sense confusió de referències</li>
  <li><strong>Slack:</strong> 20% — notificacions subtils durant les pauses</li>
  <li><strong>Navegador:</strong> 40% — per a notes de l'exposició i recerca</li>
</ul>

<p>Dos perfils, dos clics, dos entorns d'àudio completament diferents. No cal tancar ni tornar a obrir aplicacions manualment. No cal oblidar tornar a activar les notificacions després de gravar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Per què el meu Mac sona tan fort a tot volum? Com aconseguir un control més fi",
    description:
      "Els altaveus del MacBook Pro són fantàstics — fins que comencen a sonar fort. Si fins i tot els volums moderats et semblen massa forts, aquí tens com aconseguir un control d'àudio més precís.",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Els models més nous de MacBook Pro d'Apple (14" i 16") tenen altaveus sorprenentment potents per a un portàtil. Tan potents que nivells moderats de volum poden ser realment forts — especialment en una habitació tranquil·la, a la nit o amb auriculars. La diferència entre "còmode" i "massa" a vegades és només d'un o dos passos de volum.</p>

<h2>Per què els passos de volum semblen massa gruixuts</h2>

<p>macOS ha estat <strong>16 passos de volum</strong> a través del teclat. Cada pas representa aproximadament el 6,25% del rang total. En altaveus potents o auriculars sensibles, un sol pas pot representar un canvi significatiu de volum percebut — passant de "perfecte" a "massa fort" amb una sola pulsació de la tecla de volum.</p>

<h2>Correcció integrada: volum de quart de to</h2>

<p>Aguanta <strong>Opció + Canvi</strong> i prem el volum amunt/avall. Cada premsa ajusta un quart d'un pas normal, donant-te <strong>64 nivells</strong> en comptes de 16. Aquest control 4x més fi facilita molt trobar el volum exacte, especialment amb altaveus o auriculars potents.</p>

<p>Aquest és el truc d'àudio Mac més útil que la majoria de gent no coneix.</p>

<h2>El problema més profund: un lliscador per a tot</h2>

<p>Fins i tot amb 64 nivells, encara tens un control lliscant per cada aplicació. Si poses el volum prou baix per a sons còmodes de notificació, la teva música podria estar massa baixa. Si la configures per a música, un ping de notificació pot fer-te saltar.</p>

<p>El veritable problema és que diferents fonts d'àudio necessiten diferents volums. Les notificacions han de ser subtils. La música hauria d'estar present. Les trucades han de ser clares. El vídeo del navegador hauria de ser moderat. Un sol slider no serveix bé per a tots.</p>

<h2>Volum per aplicació per a un control precís</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Cada aplicació dóna el seu propi control lliscant de volum amb <strong>Increments de l'1%</strong> del 0% al 200%. Això són 200 nivells de precisió per aplicació, en comparació amb els 16 (o 64 amb el modificador) passos de macOS a tot el sistema.</p>

<img src="/apps/sounddial.png" alt="SoundDial control de volum de gra fi per aplicació amb un 1% de precisió en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Configura el volum del sistema a un nivell base moderat (50-60%) i després utilitza SoundDial per ajustar cada aplicació:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — nivell de fons còmode</li>
  <li><strong>Slack:</strong> 12% — notificació subtil</li>
  <li><strong>Zoom:</strong> 85% — aclarir l'àudio de la trucada sense ser aclaparador</li>
  <li><strong>Safari:</strong> 45% — reproducció moderada de vídeo</li>
</ul>

<p>D'aquesta manera, cap font d'àudio única és mai "massa forta". Cada una s'ajusta al seu nivell ideal de manera independent. Un ping de Slack al 12% és gairebé imperceptible, mentre que la trucada de Zoom al 85% és claríssima — tot amb el mateix volum del sistema.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Problemes de volum de Slack Huddle a Mac: massa baix, massa fort o lluitant contra la música",
    description:
      "Els huddles de Slack competeixen amb la teva música i les notificacions pel mateix volum. Aquí tens com controlar l'àudio del huddle de manera independent de la resta de Mac.",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Les reunions de Slack són còmodes — prems un botó i estàs en una trucada de veu sense haver de programar cap reunió. Però l'àudio és un desastre. El huddle està al mateix volum que el teu Spotify. Els sons de notificació de Slack sonen al mateix nivell que la trucada. I quan algú comparteix música o una pantalla amb àudio al grup, o bé és inaudible o ensordidor.</p>

<p>El problema no és Slack. És macOS. Tot funciona amb un sol control de volum, així que l'àudio de la reunió, els sons de notificacions, la música i l'àudio del navegador competeixen pel mateix espai.</p>

<h2>Controls interns d'àudio de Slack</h2>

<p>Slack té controls d'àudio limitats:</p>
<ul>
  <li><strong>Preferències de notificacions:</strong> Configuració → Slack → Notificacions → So i aparença. Pots canviar el so de notificació o desactivar sons específics, però no pots configurar el volum de les notificacions de manera independent del volum de la reunió.</li>
  <li><strong>Volum de la reunió:</strong> Durant un huddle, no hi ha un control de volum separat per a la trucada respecte als altres sons de Slack. Tot a Slack és un flux d'àudio per macOS.</li>
  <li><strong>Dispositiu d'entrada/sortida:</strong> Slack → Settings → Audio & Video et permet seleccionar micròfon i altaveu, però no els nivells de volum per funcionalitat.</li>
</ul>

<h2>Els tres problemes d'àudio de Slack</h2>

<h3>1. Huddle massa silenciós respecte a la música</h3>
<p>La teva música està en un nivell còmode. T'uneixes a una reunió. La veu del teu company de feina sona al mateix volum que la teva música — no pots distingir les paraules amb claredat. Pujar el volum del sistema fa que la música sigui massa alta.</p>

<h3>2. Sons de notificació durant les reunions</h3>
<p>Estàs en una discussió de reunió. Cada missatge de Slack que arriba fa ping al mateix volum que la trucada. En un espai de treball atapeït amb canals actius, el ping constant fa que el huddle sigui inutilitzable.</p>

<h3>3. Huddle massa fort per escoltar de fons</h3>
<p>De vegades t'uneixes a un grup per escoltar passivament mentre treballes. Vols que estigui a nivell de fons — prou baix per no distreure, prou fort per sentir si algú diu el teu nom. macOS no et deixarà posar Slack al 20% mentre mantens el navegador al 60%.</p>

<h2>La solució: controlar el volum de Slack de manera independent</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dóna a Slack el seu propi control lliscant de volum, separat de la resta d'aplicacions. Com que l'àudio de la concentració i els sons de notificació de Slack formen part de la mateixa aplicació, el control lliscant controla ambdós — però en realitat això és el que vols la majoria de vegades.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlar el volum de Slack de manera independent durant un huddle mentre la música sona a un nivell diferent" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuració optimitzada per a l'huddle</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (clar l'àudio del huddle, les notificacions són fortes però estàs activament a Slack)</li>
  <li><strong>Spotify:</strong> 15% (fons gairebé imperceptible, no competeix amb les veus)</li>
  <li><strong>Navegador:</strong> Silenciat (Sense àudio sorpresa a la pestanya)</li>
</ul>

<h3>Configuració passiva del huddle</h3>
<ul>
  <li><strong>Slack:</strong> 30% (nivell d'escolta de fons)</li>
  <li><strong>Spotify:</strong> 40% (l'àudio principal és la teva música)</li>
  <li><strong>Navegador:</strong> 50% (nivell laboral normal)</li>
</ul>

<p>Desa cadascuna com a perfil. Quan comença una reunió, aplica el perfil correcte amb un sol clic. O ús <strong>Ànec automàtic</strong> — quan el huddle activa el teu micròfon, SoundDial abaixa automàticament tot excepte Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Com establir un volum per defecte per a les noves aplicacions a Mac",
    description:
      "Les noves aplicacions s'inicien per defecte a volum complet. Aquí tens com fer que cada nova aplicació comenci amb un nivell còmode — perquè res no t'agafi desprevingut.",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>Instal·les una nova aplicació. Es llança per primera vegada. Immediatament reprodueix àudio — un so d'introducció, una notificació, un vídeo tutorial — a tot volum del sistema. No t'ho esperaves. Portes els auriculars posats. Et xiulen les orelles.</p>

<p>macOS no té cap concepte de "volum per defecte per a les noves aplicacions" perquè macOS no té volum per aplicació. Cada aplicació obté el volum del sistema, i el volum del sistema és el que l'hagis configurat per últim. Les noves aplicacions no reben un tracte especial — simplement funcionen a fons al nivell on es troba la resta.</p>

<h2>Per què això és un problema</h2>

<p>Quan obres una aplicació per primera vegada, no tens ni idea de com de sorollosa serà. Algunes aplicacions reprodueixen sons immediatament (tutorials d'iniciació, sons de notificacions, vídeos de benvinguda). Si el volum del teu sistema està al 80% perquè estaves escoltant música, el so d'aquesta nova aplicació també està al 80% — cosa que pot ser molt més alta del que és còmode per a una font d'àudio inesperada.</p>

<p>Això és especialment impactant amb:</p>
<ul>
  <li>Aplicacions de comunicació (Slack, Teams) que reprodueixen un so d'inici</li>
  <li>Aplicacions amb tutorials en vídeo al primer llançament</li>
  <li>Jocs que posen música a la pantalla de títol immediatament</li>
  <li>Aplicacions basades en navegador que reprodueixen contingut automàticament</li>
</ul>

<h2>La solució: volum per defecte per a les aplicacions noves</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> té un <strong>Volum per defecte configurable</strong> Per a noves aplicacions. A la configuració, configures quin nivell de volum han de començar les aplicacions detectades — per exemple, al 70%. La primera vegada que una aplicació s'inicia i produeix àudio, SoundDial el posa al 70% en lloc del 100%.</p>

<img src="/apps/sounddial.png" alt="SoundDial configuració de volum per defecte — les aplicacions noves comencen a un nivell configurat en lloc de a tot volum" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Això significa:</p>
<ul>
  <li>No és cap sorpresa que l'àudio a volum complet provingui de les aplicacions recentment instal·lades</li>
  <li>Cada nova aplicació comença en un nivell còmode i previsible</li>
  <li>Després pots ajustar-ho cap amunt o cap avall respecte al valor per defecte segons calgui</li>
  <li>Un cop ajustat, el <strong>Memòria de volum</strong> La funció recorda el nivell d'aquesta aplicació per a llançaments futurs</li>
</ul>

<p>És una característica petita, però resol una molèstia diària genuïna: la "nova aplicació sorpresa explosiva" que agafa tothom desprevingut almenys una vegada.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac so d'arrencada massa fort? Com desactivar-lo o reduir-lo",
    description:
      "El Mac timbre d'inici sona a tot volum cada vegada que reinicies — especialment incòmode en reunions i sales silencioses. Així és com silenciar-la o controlar-la.",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>Reinicies el teu Mac en un despatx tranquil. La sala de reunions està completament silenciosa. Llavors — <em>BONG</em> — el timbre d'arrencada sona a tot volum. Tothom et mira. El timbre és icònic, però també és incontrolable i sovint vergonyosament fort.</p>

<h2>Com desactivar el so d'arrencada</h2>

<p>macOS et permet desactivar completament el timbre d'inici:</p>

<ol>
  <li>Ves a <strong>Configuració del sistema → so</strong></li>
  <li>Trobar <strong>"Reprodueix so en l'inici"</strong></li>
  <li>Desmarca-ho</li>
</ol>

<p>Fet. La teva Mac començarà en silenci a partir d'ara. No calen ordres de Terminal — aquesta configuració està disponible des de macOS Big Sur.</p>

<h3>Mètode terminal (si ho prefereixes)</h3>
<p>També el pots desactivar a través del Terminal:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Per tornar a habilitar:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Pots baixar el so d'arrencada en comptes de desactivar-lo?</h2>

<p>No directament. El timbre d'inici sona a un volum fix determinat pel volum del sistema en el moment de l'aturada. Si el teu Mac estava al 80% del volum quan l'apagues, el timbre sona a aproximadament el 80%. Si era al 20%, el timbre és més suau.</p>

<p><strong>Solució alternativa:</strong> Abans de reiniciar la Mac, baixa el volum del sistema al 10-20%. El timbre d'inici sonarà a aquest nivell més baix. No és ideal — requereix recordar — però funciona si vols el timbre a un volum raonable en comptes de silenciar-lo completament.</p>

<h2>El problema més ampli del control del so Mac</h2>

<p>El timbre d'inici és només un exemple del control d'àudio limitat de macOS. Els sons del sistema, les notificacions i l'àudio de l'aplicació es barregen tots amb un control independent mínim. Si et trobes ajustant el volum regularment per gestionar diferents fonts d'àudio al llarg del dia, el control de volum per aplicació resol el problema més ampli.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Cada aplicació del teu Mac té el seu propi control de volum. Posa les aplicacions de notificacions baixes, la música a un nivell còmode i les trucades a tot volum — tot de manera independent. Desa configuracions com a perfils i canvia amb un sol clic.</p>

<img src="/apps/sounddial.png" alt="SoundDial — control de volum per aplicació per gestionar totes les Mac fonts d'àudio de manera independent" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "El volum de Webex de Cisco és massa baix a Mac? Com arreglar-ho",
    description:
      "Les trucades Webex gairebé no es poden sentir a la teva Mac. Aquí tens totes les solucions — des de la configuració d'àudio de Webex fins a augmentar el volum de trucades més enllà del 100% amb un mesclador per aplicació.",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex és una de les eines de videoconferència més utilitzades en entorns corporatius — i una de les que més es queixen per la qualitat d'àudio a Mac. Volum baix de trucades, veus apagades i àudio que sembla més baix que Zoom o Teams al mateix volum del sistema. Si gairebé no pots sentir les teves trucades de Webex, no estàs sol.</p>

<h2>1. Comprova la configuració d'àudio de Webex</h2>

<p>Durant una reunió Webex, feu clic al menú d'àudio (icona d'altaveu o els tres punts → configuració d'àudio):</p>
<ul>
  <li>Assegura't que el correcte sigui <strong>Orador</strong> Dispositiu seleccionat</li>
  <li>Arrossega el control lliscant de volum de l'altaveu al màxim</li>
  <li>Fes clic a "Test" per reproduir un to de prova i verificar la sortida</li>
  <li>Comprova si el "Mode Música" està activat — desactiva'l tret que estiguis presentant música específicament</li>
  <li>Comprova la configuració d'eliminació de soroll — "Eliminar soroll de fons" en mode agressiu pot reduir el volum percebut de la veu</li>
</ul>

<h2>2. Comprova macOS sortida</h2>

<p>Configuració del sistema → so → sortida. Verifica que el dispositiu correcte estigui seleccionat i que el volum estigui al màxim. Després d'una actualització macOS o un canvi de dispositiu, Webex podria estar utilitzant una sortida inesperada.</p>

<h2>3. Problema amb el còdec Bluetooth</h2>

<p>Utilitzant AirPods o auriculars Bluetooth? Activar el micròfon de Webex força l'interruptor del còdec AAC→SCO, reduint la qualitat i el volum de l'àudio. Utilitza un micròfon separat (micròfon Mac integrat o USB) i deixa els auriculars Bluetooth només com a sortida.</p>

<h2>4. Processament d'àudio específic per a Webex</h2>

<p>Webex disposa d'un processament d'àudio agressiu que pot reduir el volum aparent de participants a la trucada. Prova aquesta configuració de Webex:</p>
<ul>
  <li>Configura l'eliminació de soroll a "Baix" en lloc de "Alta"</li>
  <li>Desactiva "Optimitzar per a la meva veu" si està activat</li>
  <li>Prova de canviar de "Àudio d'ordinador" a un dispositiu específic</li>
</ul>

<h2>5. El problema d'IT/administració</h2>

<p>En entorns corporatius, Webex sovint és gestionat per TI amb polítiques d'àudio específiques. Algunes configuracions poden estar bloquejades o preconfigurades. Si les solucions bàsiques no funcionen, consulta amb el teu departament d'informàtica sobre les polítiques d'àudio de Webex. Algunes organitzacions restringeixen els nivells màxims d'àudio o imposen ajustos específics de processament d'àudio.</p>

<h2>6. Impulsar Webex al 100%</h2>

<p>Si la configuració està al màxim i els participants encara són massa silenciosos, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> et permet potenciar Webex a <strong>200%</strong>. Això amplifica l'àudio de la trucada més enllà del màxim integrat de Webex — útil quan un participant té un micròfon defectuós o quan el processament d'àudio de Webex redueix massa el senyal.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum de trucades Cisco Webex més enllà del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial també ajuda durant les reunions Webex consecutives: utilitza l'auto-ducking per baixar automàticament la música de fons quan comença cada reunió, i restaura-la durant les pauses. Desa un perfil de volum "Reunions" per establir instantàniament el teu equilibri d'àudio preferit per a la jornada laboral.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Com escoltar dues coses alhora a Mac sense tornar-se boig",
    description:
      "Música i un podcast. Una conferència i un vídeo d'apunts. Una trucada i música de fons. macOS et fa triar un sol volum per a ambdós — aquí tens com equilibrar-los.",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>Vols escoltar dues fonts d'àudio alhora. Música mentre estic en una trucada. Un podcast mentre miro un tutorial. Ambient de fons mentre estudies. Dues coses, dos volums ideals diferents. macOS et dóna un control lliscant per a ambdós.</p>

<p>Aquesta és la limitació fonamental de l'àudio de macOS: cada aplicació comparteix un sol volum. No pots dir "aquest al 30%, aquell al 80%." És tot a un nivell, o res.</p>

<h2>Quan realment necessites dues fonts d'àudio</h2>

<p>Això no és un cas límit. Així és com la majoria de gent utilitza els seus ordinadors:</p>

<ul>
  <li><strong>Música + videotrucada</strong> — la més comuna. Música de fons durant una reunió per Zoom, però prou baixa per sentir els companys.</li>
  <li><strong>Conferència + material de referència</strong> — un estudiant que mira una classe enregistrada mentre, de tant en tant, mira un tutorial de YouTube per posar-hi context.</li>
  <li><strong>Podcast + sons ambientals</strong> — escoltant un podcast mentre una aplicació de soroll blanc o pluja sona suaument.</li>
  <li><strong>Dues pestanyes de navegador</strong> — un vídeo de formació en una pestanya i una demostració en una altra, a volums diferents.</li>
  <li><strong>Joc + xat de veu</strong> — l'àudio del joc per a la immersió, Discord per a la comunicació.</li>
</ul>

<p>En tots els casos, una font és "primària" (més forta, més important) i l'altra és "secundària" (més silenciosa, de suport). La proporció ideal és diferent per a cada combinació, i canvia al llarg del dia.</p>

<h2>La macOS limitació</h2>

<p>macOS té un control lliscant de volum. Prem la tecla de volum i tot canvia per igual. Si poses el volum per escoltar podcasts còmodament, l'aplicació Rain Sounds també està a aquest nivell — o bé massa fort (distreu) o bé no l'has ajustat a la seva pròpia aplicació (si és que té control de volum).</p>

<p>Algunes aplicacions tenen controls lliscants de volum interns (Spotify, VLC), però la majoria no. I fins i tot quan ho fan, canviar entre aplicacions per ajustar dos controls de volum diferents és feixuc i lent.</p>

<h2>La solució: volum per aplicació en un sol panell</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Posa totes les aplicacions en un únic panell de barra de menú amb controls de volum independents. Ambdues fonts d'àudio, una al costat de l'altra, cadascuna amb el seu propi nivell. Ajusta'n un sense tocar l'altre.</p>

<img src="/apps/sounddial.png" alt="SoundDial mostrant dues fonts d'àudio a nivells de volum diferents a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Exemples de configuració:</p>

<p><strong>Música + Videotrucada:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>Podcast + sons de pluja:</strong></p>
<ul>
  <li>App de podcast: 70% | Aplicació de pluja: 15%</li>
</ul>

<p><strong>Conferència + tutorial de YouTube:</strong></p>
<ul>
  <li>Zoom (conferència): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>Cada combinació és un equilibri diferent. Guarda les que utilitzes regularment com a <strong>Perfils de volum</strong> i canvia amb un sol clic. L'auto-ducking gestiona automàticament l'escenari de música+trucada — quan comença una trucada, la música baixa al teu nivell configurat sense que toquis res.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Com veure pel·lícules a Mac sense despertar tothom",
    description:
      "El diàleg és inaudible, després explosions sacsegen les parets. Aquí tens com moderar l'àudio d'una pel·lícula per veure'l a la nit a Mac — sense perdre ni una paraula.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>Són la 1 de la matinada. Estàs mirant una pel·lícula al teu MacBook al llit. Els personatges xiuxiuegen — puges el volum. Llavors comença una persecució en cotxe i de sobte tot el teu pis ho pot sentir. Et llances cap a la tecla de volum. Aquest cicle es repeteix durant dues hores.</p>

<p>El problema és <strong>Rang dinàmic</strong> — el buit entre els moments més tranquils i els més sorollosos d'una pel·lícula. En un teatre amb un sistema de so potent, aquesta gamma crea una experiència immersiva. En un MacBook a mitjanit, crea una lluita constant entre "no s'escolta el diàleg" i "despertar els veïns".</p>

<h2>Per què les pel·lícules són més fortes que la música o els podcasts</h2>

<p>La música normalment es masteritza amb un rang dinàmic comprimit — la diferència entre les parts més baixes i les més fortes és relativament petita (potser 10-15 dB). Els podcasts són encara més comprimits. Les pel·lícules, especialment les d'acció, poden tenir un rang dinàmic de <strong>30-40 dB</strong> — les parts més silencioses són en un xiuxiueig i les parts fortes estan dissenyades per fer tremolar les cadires del teatre.</p>

<p>Quan poses el volum del MacBook per escoltar el diàleg, les escenes d'acció són 100 vegades més fortes pel que fa a la pressió sonora. No hi ha cap volum de sistema còmode que funcioni per a tots dos.</p>

<h2>Solució 1: Utilitza el mode nit del servei de streaming</h2>

<p>Alguns serveis de streaming tenen una funció de compressió de rang dinàmic específica per a això:</p>
<ul>
  <li><strong>Netflix:</strong> Busca un interruptor de "Reduir sons forts" a la configuració d'àudio durant la reproducció</li>
  <li><strong>Apple TV+:</strong> Configuració del sistema → accessibilitat → "Reduir sons forts"</li>
  <li><strong>Amazon Prime:</strong> "Augment de diàleg" en títols compatibles</li>
  <li><strong>Disney+:</strong> Actualment no hi ha una característica equivalent</li>
</ul>

<p>Aquestes característiques comprimeixen el rang dinàmic, de manera que les parts silencioses són més fortes i les més sorolloses. El resultat és un àudio més uniforme que funciona a volums baixos.</p>

<h2>Solució 2: Utilitza auriculars</h2>

<p>Els auriculars solucionen la part de "despertar tothom" — el teu àudio és privat. Però no resolen el problema del rang dinàmic. El cicle de diàleg-explosió encara passa, només a les orelles. Aquí és on el control de volum per aplicació ajuda: ajusta el volum de la teva aplicació de streaming amb precisió per escoltar auriculars.</p>

<h2>Solució 3: Configura l'aplicació de streaming a un volum específic</h2>

<p>El veritable problema per veure a última hora de la nit és que l'aplicació de streaming, els sons de notificacions i qualsevol altre àudio estan tots al mateix volum del sistema. Un ping de Slack a les 2 de la matinada amb el mateix volum que el diàleg de la pel·lícula és una sorpresa de nivell d'atac de cor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet crear la configuració perfecta per a la nit tardana:</p>

<img src="/apps/sounddial.png" alt="SoundDial configuració de pel·lícules nocturnes — aplicació de streaming a volum moderat, notificacions silenciades" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Perfil de pel·lícules nocturnes</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / navegador:</strong> 40-50% — nivell de diàleg còmode sense escenes d'acció ensordidores</li>
  <li><strong>Slack:</strong> silenciat — sense pings sorpresa</li>
  <li><strong>Correu:</strong> apagada</li>
  <li><strong>iMessage:</strong> apagada</li>
  <li><strong>Sons del sistema:</strong> apagada</li>
</ul>

<p>Guarda això com un perfil de "Nit". Quan comencis una pel·lícula nocturna, aplica el perfil amb un sol clic. Totes les fonts de notificacions estan silenciades i la teva aplicació de streaming està a un volum controlat. Quan acabis, torna al teu perfil diürn.</p>

<p>Combina això amb la funció "Redueix els sons forts" del servei de streaming per a un efecte màxim: el servei comprimeix el rang dinàmic i SoundDial assegura que res més al teu Mac faci so.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac es reinicia el volum després de dormir? Com mantenir la configuració d'àudio",
    description:
      "Cada vegada que el teu Mac es desperta del repòs, el volum és incorrecte — es reinicia al màxim, baixa a zero o canvia a la sortida equivocada. Aquí tens per què i com solucionar-ho.",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>Tanques la tapa del MacBook. L'obres després. El volum és diferent. Potser està al màxim quan el tenies al 40%. Potser ha canviat d'auriculars a altaveus. Potser està a zero. Abans de dormir estava bé — ara està malament.</p>

<p>El reinici de volum després de dormir és un error persistent de macOS que apareix de diverses formes en diferents versions macOS. Això és el que ho causa i com gestionar-ho.</p>

<h2>Per què passa</h2>

<h3>1. Dispositiu de sortida d'àudio canviat durant la suspensió</h3>
<p>Si tenies uns auriculars Bluetooth connectats abans de dormir i es desconnecten mentre el Mac està en repòs (la bateria s'ha esgotat, s'ha mogut fora de rang), macOS canvia als altaveus integrats quan es desperta. Com que macOS recorda el volum per dispositiu, el volum canvia al que els altaveus estaven configurats per última vegada — cosa que pot ser molt diferent del volum dels teus auriculars.</p>

<h3>2. Reinici del dimoni Core Audio</h3>
<p>El dimoni d'àudio de macOS (coreaudiod) de vegades es reinicia durant els cicles de son/despertar. Quan es reinicia, pot inicialitzar-se amb els nivells de volum per defecte en lloc dels teus ajustos anteriors. Aquest és un error del sistema que Apple ha corregit parcialment en diverses actualitzacions però mai no s'ha eliminat del tot.</p>

<h3>3. Reconnexió HDMI/DisplayPort</h3>
<p>Si utilitzes una pantalla externa via HDMI o DisplayPort, tancar i obrir la tapa pot fer que la pantalla es desconnecti i es torni a connectar. Algunes pantalles també són dispositius de sortida d'àudio, i macOS poden canviar a o des dels altaveus de la pantalla durant aquest procés, modificant el volum.</p>

<h3>4. Reemparellament Bluetooth</h3>
<p>Quan els dispositius Bluetooth es reconnecten després de dormir, la negociació de volum pot donar lloc a un nivell diferent del que tenies abans. Això és especialment comú amb auriculars Bluetooth de tercers (menys amb els AirPods, que Apple ha optimitzat).</p>

<h2>Correccions</h2>

<h3>Evita la desconnexió Bluetooth durant la suspensió</h3>
<p>Configuració del sistema → Bluetooth → avançat (o fes clic a "i" al teu dispositiu). Algunes configuracions controlen si el Bluetooth es manté actiu durant el repòs. Mantenir la connexió activa evita el cicle de desconnexió/reconnexió que reinicia el volum.</p>

<h3>Desactiva el canvi automàtic per als AirPods</h3>
<p>Configuració del sistema → Bluetooth → clicar "i" al costat dels AirPods → "Connectar a aquest Mac" → posar a "Quan s'ha connectat per última vegada a aquest Mac." Això evita que els AirPods es connectin automàticament des d'un altre dispositiu durant el repòs.</p>

<h3>Configura un dispositiu de sortida consistent</h3>
<p>Després de despertar-te, mantén premut Opció i fes clic a la icona de So a la barra de menú. Selecciona el teu dispositiu de sortida preferit. Fes-ho de manera consistent i macOS acabaràs "adherint-te" a la teva preferència.</p>

<h3>Reinici de la NVRAM (Mac Intel)</h3>
<p>Si els restabliments de volum són crònics, reinicia la NVRAM: apaga → encend mantenint premut Option+Command+P+R durant 20 segons. Això esborra la configuració d'àudio emmagatzemada i pot solucionar problemes persistents de volum.</p>

<h2>Protegeix el teu equilibri d'àudio amb SoundDial</h2>

<p>Fins i tot si el volum del sistema es reinicia després de dormir, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> protegeix el teu <em>per aplicació</em> Equilibri de volum. És <strong>Memòria de volum</strong> La funció desa el volum de cada aplicació de manera independent i el restaura després de despertar-se, reiniciar o reiniciar l'aplicació.</p>

<img src="/apps/sounddial.png" alt="SoundDial preservar els nivells de volum per aplicació després de Mac cicles de son i despertar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Així que, fins i tot si macOS reinicia el volum del sistema al 80% després de dormir, el teu saldo per aplicació es manté intacte:</p>
<ul>
  <li>Spotify encara al 30% del volum del sistema</li>
  <li>Zoom encara al 100%</li>
  <li>Slack encara apagat</li>
</ul>

<p>Potser hauràs d'arreglar el volum del sistema (un ajust), però no cal reequilibrar totes les aplicacions (que serien sis o set ajustos). I amb <strong>Perfils de volum</strong>, fins i tot la recuperació completa és d'un sol clic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac Àudio per a la producció musical: Controla el DAW i la comunicació per separat",
    description:
      "Utilitzant Logic Pro o Ableton mentre estic en una trucada de Discord? Aquí tens com escoltar el teu DAW amb fidelitat completa mantenint el xat de veu a un nivell còmode.",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>Estàs produint música a Logic Pro (o Ableton, o FL Studio). També estàs a Discord amb un col·laborador. El problema: la sortida del teu DAW i Discord lluiten pel mateix nivell de volum. Puja el volum de Logic per escoltar clarament la teva mescla i Discord t'està sonant a les orelles. Si baixes el volum de Discord, la teva mescla és massa silenciosa per avaluar-la correctament.</p>

<p>Això és un problema real per als productors musicals en Mac perquè monitorar el volum afecta directament les decisions de mescla. Si el teu DAW és massa baix perquè Discord competeix, mesclaràs més fort del que esperaves. Si Discord ofega detalls, et perdràs problemes a la teva barreja.</p>

<h2>Per què això és important per a la producció</h2>

<p>La producció musical requereix <strong>Nivells de monitoratge precisos</strong>. Has d'escoltar el teu DAW a un volum consistent i calibrat per prendre decisions de mescla fiables. Les aplicacions de comunicació, notificacions i altres fonts d'àudio interfereixen amb això — però sovint necessites que funcionin simultàniament per a la col·laboració remota.</p>

<p>Els estudis professionals resolen això amb camins de monitoratge separats i sistemes de resposta de conversa. En un portàtil, necessites programari.</p>

<h2>L'enfocament intern del DAW</h2>

<p>Podries utilitzar el nivell de monitoratge intern del teu DAW per mantenir-lo en una sortida consistent i després ajustar el volum de Discord internament. Però:</p>
<ul>
  <li>El control lliscant de volum de sortida de Discord és imprecis i està limitat del 0 al 100%</li>
  <li>Encara no pots evitar que els sons i notificacions del sistema interfereixin a nivells inesperats</li>
  <li>Si necessites referenciar una cançó a Spotify o YouTube, aquests també estan a volum de sistema</li>
</ul>

<h2>Volum per aplicació per producció</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet establir volums exactes per a cada aplicació de manera independent:</p>

<img src="/apps/sounddial.png" alt="SoundDial separar la sortida DAW de Discord i les pistes de referència a macOS per a la producció musical" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuració de producció</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — el teu nivell principal de monitoratge</li>
  <li><strong>Discord / xat de veu:</strong> 40-60% — audible però clarament secundari a la teva barreja</li>
  <li><strong>Spotify / pistes de referència:</strong> 80% — iguala el teu nivell de DAW per a comparacions A/B precises</li>
  <li><strong>Slack / notificacions:</strong> Silenciat — zero interferències durant la producció</li>
  <li><strong>Safari / Chrome:</strong> 50% — per veure tutorials sense rebentar-te les orelles</li>
</ul>

<h3>Desa-ho com a perfil de "Producció"</h3>
<p>Desa aquesta configuració i aplica-la amb un sol clic quan t'asseguis a produir. Quan acabis i canviïs a ús casual, aplica el teu perfil "Normal". No cal reajustar vuit aplicacions.</p>

<h3>Auto-ducking per a sessions remotes</h3>
<p>Si estàs en una trucada amb un col·laborador, l'auto-ducking de SoundDial pot reduir les aplicacions de no comunicació quan el micròfon està actiu. Però per a producció, potser voldràs <em>desactivar</em> auto-ducking — necessites el teu DAW a nivells consistents, independentment de si parles o no. L'interruptor és d'un sol clic a la configuració.</p>

<h2>Una nota sobre la latència</h2>

<p>SoundDial utilitza l'API Core Audio Tap d'Apple per al control de volum. El processament afegeix una latència negligible — imperceptible per a finalitats de monitoratge. Si estàs gravant i monitoritzant a través del teu DAW amb el monitoratge directe activat, SoundDial no interfereix amb el camí d'àudio del teu DAW. Només ajusta el nivell de sortida que arriba als teus altaveus/auriculars.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "El volum de l'Apple Music és massa baix a Mac? Com arreglar-lo i potenciar-lo",
    description:
      "Apple Music al volum màxim al teu Mac però encara massa baix? Comprova la prova de so, la configuració d'equalització i aprèn a millorar Apple Music més enllà del 100%.",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music està a tot volum. El teu Mac està a ple volum. Una cançó que saps que hauria de ser forta gairebé no es pot sentir. Mentrestant, canviant a Spotify — mateixa cançó, mateix volum — és notablement més fort. Què passa?</p>

<p>Apple Music té diversos ajustos que poden reduir el volum de reproducció, i no són evidents. Repassem cadascuna.</p>

<h2>1. Comprova la prova de so</h2>

<p>Apple Music té una funció anomenada <strong>Prova de so</strong> Això normalitza el volum de totes les pistes perquè sonin a un volum perceput similar. Això evita salts bruscos de volum entre cançons, però ho fa mitjançant <em>Reducció</em> el volum de les pistes més fortes — fent que tot sigui més silenciós en general.</p>

<p>Per comprovar: Obre l'aplicació de Música → Configuració (⌘,) → Reproducció → <strong>Prova de so</strong>.</p>

<p>Si el Sound Check està activat, prova de desactivar-lo. Les cançons que s'havien reduït per coincidir amb pistes més suaus ara sonaran al seu nivell original masteritzat — que sovint és significativament més fort.</p>

<h2>2. Comprova la configuració de l'equalitzador</h2>

<p>Apple Music té un equalitzador integrat. Alguns presets d'EQ redueixen el volum general per evitar el saturació quan s'augmenten freqüències específiques.</p>

<p>Comprova: aplicació de música → configuració → reproducció → <strong>EQ</strong>. Si es selecciona un preset d'EQ (especialment "Spoken Word", "Late Night" o "Small Speakers"), prova de posar-lo a "Off" i mira si el volum millora.</p>

<p>L'EQ "Late Night" en particular comprimeix el rang dinàmic — fent que les parts silencioses siguin més fortes però les més sorolloses. Això pot fer que tot sembli més "pla" i de volum més baix.</p>

<h2>3. Comprova la configuració d'àudio sense pèrdues</h2>

<p>Si tens Apple Music Lossless activat (Configuració → qualitat d'àudio), el flux de més qualitat pot estar a un volum percebut més baix que el flux AAC estàndard per a algunes pistes. Això és perquè el mode sense pèrdues no té els mateixos ajustos de masterització que Apple aplica a les versions AAC.</p>

<p>Prova de canviar temporalment a qualitat AAC per veure si la diferència de volum es nota.</p>

<h2>4. Seguretat dels auriculars</h2>

<p>Configuració del sistema → so → seguretat dels auriculars. Si està activat "Redueix l'àudio fort", macOS està limitant el volum dels teus auriculars a nivell global — afectant Apple Music juntament amb tot la resta.</p>

<h2>5. Impulsar Apple Music al 100%</h2>

<p>Si ho has comprovat tot i Apple Music encara està massa baix — ja sigui per l'agressivitat de la prova de so, un àlbum baix o perquè els altaveus del MacBook simplement no són prou forts — un augment de volum per aplicació ho soluciona.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> et permet potenciar Apple Music a <strong>200%</strong>. El senyal d'àudio s'amplifica a nivell de sistema abans d'arribar als altaveus o auriculars. Només Apple Music fa més volum — Zoom, Slack i el teu navegador es mantenen als nivells actuals.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum d'Apple Music més enllà del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Això també és útil per al problema contrari: si Apple Music està massa fort respecte a la teva trucada de Zoom, baixa Apple Music al 25% en SoundDial mantenint Zoom al 100%. El control per aplicació significa que mai hauràs de comprometre el volum d'una aplicació pel d'una altra.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mesclador de volum gratuït per a Mac: què realment obtens (i què no)",
    description:
      "Busques un mesclador de volum gratuït per a cada aplicació per a Mac? Aquí tens un desglossament honest del que ofereixen les opcions gratuïtes, què els falta i quan val la pena pagar.",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>Si busques "free volume mixer per a Mac", trobaràs un resultat principal: <strong>Música de fons</strong>. És l'única aplicació gratuïta, de codi obert i de codi obert per a macOS. Vegem què obtens realment — i què renuncies.</p>

<h2>Música de fons: l'opció gratuïta</h2>

<p>Música de Fons és una aplicació gratuïta i de codi obert allotjada a GitHub. Et dóna:</p>

<ul>
  <li><strong>Lliscadors de volum per aplicació</strong> — control bàsic de volum per a cada aplicació en execució</li>
  <li><strong>Música amb pausa automàtica</strong> — pausa el reproductor de música quan una altra aplicació reprodueix àudio, i reprèn quan s'atura</li>
  <li><strong>Configuració predeterminada del dispositiu de sortida</strong> — sobreescriure quin dispositiu utilitzen les aplicacions per defecte</li>
</ul>

<h3>Què no té la música de fons</h3>
<ul>
  <li><strong>Cap augment de volum més enllà del 100%</strong> — els controls lliscants passen del 0% al 100% només. No es poden amplificar aplicacions silencioses.</li>
  <li><strong>Sense perfils de volum</strong> — no es pot desar ni canviar entre configuracions</li>
  <li><strong>Sense auto-ducking</strong> — l'autopausa és diferent de l'auto-duck. La pausa atura completament la música; Ajupir-se la baixa a un nivell de fons còmode. Moltes persones prefereixen música de fons suau durant les trucades abans que un silenci total.</li>
  <li><strong>Sense memòria de volum</strong> — no recorda els volums per aplicació entre reinicis</li>
  <li><strong>No hi ha dreceres de teclat</strong> — no hi ha tecla ràpida per desactivar la taula de mescles o silenciar totes les aplicacions</li>
  <li><strong>Sense commutació de dispositius de sortida</strong> — no pot canviar d'altaveus/auriculars des del mateix panell</li>
</ul>

<h3>El problema de fiabilitat</h3>
<p>El problema més gran de la música de fons no són les característiques — sinó l'estabilitat. Funciona instal·lant un <strong>Controlador de dispositiu d'àudio virtual</strong>, i aquest controlador es trenca amb macOS actualitzacions. Després de gairebé tots els grans llançaments macOS (Ventura, Sonoma, Sequoia, Tahoe), els usuaris informen:</p>
<ul>
  <li>El dispositiu virtual no s'instal·la</li>
  <li>Crepitacions d'àudio i fallades</li>
  <li>Aplicacions no detectades</li>
  <li>Cap sortida d'àudio</li>
  <li>L'aplicació es bloqueja en llançar-se</li>
</ul>

<p>Com que és un projecte de codi obert mantingut per voluntaris, les correccions no sempre arriben a temps. Potser et quedaràs sense volum per aplicació durant setmanes després d'una actualització macOS.</p>

<h2>Altres opcions "gratuïtes"</h2>

<h3>eqMac (nivell gratuït)</h3>
<p>La versió gratuïta d'eqMac proporciona un equalitzador a tot el sistema però no control de volum per a cada aplicació. Les funcions per aplicació requereixen eqMac Pro (subscripció). La versió gratuïta és útil si principalment necessites equalitzador, no mescla de volum.</p>

<h3>macOS encastat</h3>
<p>macOS no té cap mesclador de volum integrat. El més proper és el control lliscant de volum d'alerta a Configuració del sistema → So, que només afecta els sons del sistema — no l'àudio de l'aplicació.</p>

<h2>Quan n'hi ha prou lliure</h2>

<p>La música de fons podria anar bé si:</p>
<ul>
  <li>Només necessites el volum bàsic per aplicació (0-100%)</li>
  <li>No necessites perfils, auto-ducking ni augment de volum</li>
  <li>Et sents còmode arreglant-lo quan macOS actualitzacions el trenquen</li>
  <li>Estàs bé amb un dispositiu d'àudio virtual a la teva cadena d'àudio</li>
</ul>

<h2>Quan val la pena pagar</h2>

<p>Un mesclador de volum de pagament val la pena si necessites:</p>
<ul>
  <li><strong>Fiabilitat</strong> — funciona després de macOS actualitzacions sense esperar solucions voluntàries</li>
  <li><strong>Augment de volum al 200%</strong> — amplificar les aplicacions silencioses més enllà del seu màxim integrat</li>
  <li><strong>Perfils</strong> — desa configuracions i canvia entre Reunió/Focus/Joc amb un sol clic</li>
  <li><strong>Auto-ducking</strong> — reducció automàtica de volum durant les trucades, no només pausa automàtica</li>
  <li><strong>Sense controladors del sistema</strong> — funciona amb l'API nativa d'Apple, sense dispositius d'àudio virtuals que es puguin trencar</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> costa 14,99 € — una sola vegada, no una subscripció. Per posar-ho en context, això són menys de dos mesos d'una subscripció a Spotify, per a una eina que faràs servir cada dia. Costa menys de la meitat del preu de SoundSource (39 $), i inclou funcions (perfils, auto-ducking) que SoundSource no té.</p>

<img src="/apps/sounddial.png" alt="SoundDial — mesclador de volum fiable per a Mac amb perfils, auto-ducking i un augment del 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Revisat per Apple, sandbox, sense controladors de sistema. 14,99 € únic, sense subscripció, macOS 14,2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Com equilibrar el volum de la música i el xat de veu en Mac",
    description:
      "La música sona massa forta a Discord. O la trucada és massa baixa a Spotify. macOS no et permet equilibrar-los — aquí tens com establir la proporció perfecta.",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>Vols escoltar música mentre parles amb amics a Discord (o Zoom, o FaceTime). La música ha de ser present però sense ser aclaparadora. El xat de veu ha de ser clar i dominant. Una petició senzilla. macOS ho fa impossible.</p>

<p>Amb un sol volum de sistema controlant-ho tot, estàs encallat: puja el volum per a la trucada i la música és massa alta. Baixa el volum per la música i no pots sentir els teus amics. No hi ha cap manera integrada de posar aquestes dues coses a nivells diferents.</p>

<h2>La solució de volum dins de l'aplicació</h2>

<p>Tant Spotify com Discord tenen controls lliscants de volum interns. En teoria, podries baixar el control lliscant de Spotify al 30% i mantenir la sortida de Discord al 100%. Això crea una proporció de 30/100.</p>

<p>A la pràctica:</p>
<ul>
  <li>Has de canviar a cada aplicació per ajustar el seu control lliscant</li>
  <li>La proporció canvia quan ajustes el volum del sistema (ambdós escalen proporcionalment)</li>
  <li>No totes les aplicacions tenen un control lliscant de volum intern</li>
  <li>És imprecisa — un petit control lliscant de Spotify, sense percentatge mostrat</li>
  <li>Si tanques i tornes a obrir Spotify, el control lliscant pot reiniciar-se</li>
</ul>

<h2>La veritable solució: volum independent per aplicació</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> posa tant Spotify com Discord al mateix panell amb controls de volum independents. Estableix la proporció que vols i deixa-la:</p>

<img src="/apps/sounddial.png" alt="SoundDial equilibrar Spotify i Discord a diferents nivells de volum a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>La proporció d'or per a música + xat de veu</h3>
<p>Basat en com la majoria de gent utilitza això:</p>
<ul>
  <li><strong>Xat de veu al 85-100%</strong> — sempre clarament audible, dominant en la barreja</li>
  <li><strong>Música al 20-35%</strong> — present però mai competint amb veus</li>
</ul>

<p>La proporció exacta depèn de la música, els teus auriculars i preferències personals. La qüestió és que pots trobar l'equilibri perfecte una vegada i mantenir-lo — en comptes d'estar ajustant-te constantment.</p>

<h3>Desa-ho com a perfil</h3>
<p>Guarda el teu saldo de música/xat de veu com a perfil. Perfil "Gaming": Discord 100%, Game 50%, Spotify 20%. Perfil de "Chill": Discord 70%, Spotify 60%. Canvia entre ells amb un sol clic.</p>

<h3>Auto-ducking per a les crides</h3>
<p>Si estàs escoltant música i entra una trucada, l'auto-ducking de SoundDial baixa automàticament la música al nivell configurat que tens configurat. Quan acaba la trucada, la música torna a pujar. No tocar res.</p>

<p>El problema de l'equilibri d'àudio és una cosa que tots els usuaris Mac afronten en el moment que tenen música i trucada en marxa simultàniament. És una solució única de 14,99 €.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac Control de volum: La guia completa (2026)",
    description:
      "Tot el que cal saber sobre com controlar l'àudio en macOS — des de dreceres bàsiques de teclat fins a volum per aplicació, canvi de sortida i automatització.",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS et dóna un control lliscant de volum i un botó de silenci. Això és tot el control d'àudio integrat d'Apple. Però el teu Mac en realitat té moltes més capacitats d'àudio del que suggereix el Surface — dreceres de teclat ocultes, eines de volum per a cada aplicació, gestió de dispositius de sortida i funcions d'automatització que la majoria d'usuaris mai descobreixen.</p>

<p>Aquesta és la guia completa per controlar l'àudio al teu Mac. Des del bàsic fins a les funcions per a usuaris avançats, tot en un sol lloc.</p>

<h2>Part 1: Controls de volum integrats</h2>

<h3>Les tecles de volum</h3>
<p>Les tecles de volum amunt (F12), volum baix (F11) i silenci (F10) ajusten el volum del sistema en 16 passos. Cada pas representa aproximadament el 6,25% del rang total. El volum actual es mostra com una superposició a la pantalla.</p>

<h3>Volum de gra fi: Opció + Canvi</h3>
<p>Aguanta <strong>Opció + Canvi</strong> i prem el volum amunt/avall. Cada premsa s'ajusta un quart d'un pas normal — donant-te <strong>64 nivells de volum</strong> en comptes de 16. Essencial per trobar el volum perfecte dels auriculars quan els passos normals són massa bruscos.</p>

<h3>Ajust silenciós de volum: Shift</h3>
<p>Aguanta <strong>Canvi</strong> i prem el volum amunt/avall. El volum canvia sense el "pop" audible de retroalimentació. Fes-ho servir quan ajustes el volum durant una trucada o presentació.</p>

<h3>Lliscador de volum a la barra de menú</h3>
<p>Si la icona de So està a la barra de menú (activa-la a Configuració del sistema → Centre de Control → So → Sempre Apareix a la barra de menú), clicar-hi mostra un control lliscant de volum. Això és un control lliscant continu, no escalonat com les tecles del teclat, així que pots configurar qualsevol nivell precís.</p>

<h3>Centre de Control</h3>
<p>Fes clic a la icona del Centre de Control (icona de dos interruptors) a la barra de menú → fes clic a la secció de So per obtenir un control lliscant de volum i accés ràpid a la selecció de dispositius de sortida.</p>

<h2>Part 2: Gestió de dispositius de sortida</h2>

<h3>Dispositius de sortida de commutació</h3>
<p>El mètode integrat més ràpid: mantenir <strong>Opció</strong> i fes clic a la icona de So a la barra de menú. Veureu una llista de tots els dispositius de sortida i entrada disponibles. Fes clic en un per canviar instantàniament.</p>

<p>Alternativament: Configuració del sistema → so → sortida. Selecciona el teu dispositiu preferit de la llista.</p>

<h3>Gestió de dispositius Bluetooth</h3>
<p>macOS recorda el nivell de volum de cada dispositiu de sortida per separat. Quan canvies d'altaveus (al 70%) als AirPods (al 40%), el volum s'ajusta al que era l'última vegada que vas utilitzar aquell dispositiu. Pot semblar que el volum "canvia sol" si no t'ho esperes.</p>

<h3>Dispositius agregats i de sortida múltiple</h3>
<p>Per a configuracions avançades, obre Audio MIDI Setup (Aplicacions → Utilitats) per crear dispositius agregats (combinar múltiples entrades) o dispositius de múltiples sortides (enviar àudio a múltiples sortides simultàniament). Aquests són principalment útils per a equips d'àudio professionals, no per a l'ús quotidià.</p>

<h2>Part 3: Volum d'alertes i notificacions</h2>

<h3>Volum d'alerta del sistema</h3>
<p>macOS té un control lliscant separat de volum d'alerta: Configuració del sistema → Volum de so → d'alerta. Això controla el volum dels sons del sistema (Funk, Tink, Bottle, etc.) de manera independent del volum principal. Tanmateix, només afecta les alertes del macOS sistema — no els sons de notificació d'aplicacions de tercers com Slack, Discord o Teams.</p>

<h3>Gestió del so de notificació</h3>
<p>Ves a Configuració del sistema → Notificacions. Per a cada aplicació, pots activar o desactivar "Reproduir so per notificacions". Això és binari: no pots fer que les notificacions d'una aplicació siguin més silencioses, només completament activades o completament desactivades.</p>

<h3>Modes d'enfocament</h3>
<p>Els modes de focus (Configuració del sistema → Focus) suprimeixen les notificacions d'aplicacions seleccionades. Poden silenciar els sons de notificació, però no afecten el volum dels mitjans. La teva música continua sonant a tot volum fins i tot en mode No Molestar.</p>

<h2>Part 4: Controls específics per a auriculars</h2>

<h3>Seguretat dels auriculars</h3>
<p>Configuració del sistema → so → seguretat dels auriculars. "Redueix l'àudio fort" limita el volum dels auriculars segons l'exposició acumulada. Pots desactivar-lo o ajustar el llindar. Només afecta la sortida d'auriculars, no els altaveus.</p>

<h3>Àudio espacial</h3>
<p>Per a auriculars compatibles (AirPods Pro, AirPods Max, alguns Beats), macOS admet àudio espacial amb seguiment de capçalera. Activa'l al Centre de Control → So → Àudio Espacial. Això afecta la posició percebuda del so però no el volum.</p>

<h3>Equilibri d'àudio</h3>
<p>Configuració del sistema → accessibilitat → equilibri d'àudio →. Un control lliscant esquerra-dreta que ajusta l'equilibri estèreo. Assegura't que estigui centrat si un costat sona més suau que l'altre.</p>

<h2>Part 5: Què no macOS fer (i com arreglar-ho)</h2>

<h3>Control de volum per aplicació</h3>
<p>macOS té un control lliscant de volum per a totes les aplicacions. No hi ha cap manera integrada de posar Spotify al 30% i Zoom al 100%. Aquesta és la funció d'àudio més sol·licitada de macOS, i Apple mai no l'ha afegit.</p>

<h3>Augment de volum més enllà del 100%</h3>
<p>El volum de macOS arriba al màxim al 100%. Si el contingut és massa baix fins i tot al volum màxim, no hi ha cap manera integrada d'amplificar-lo més.</p>

<h3>Perfils de volum</h3>
<p>No hi ha manera de desar una configuració de volum (Spotify al 30%, Zoom al 100%, Slack silenciat) i canviar entre presets.</p>

<h3>Auto-ducking</h3>
<p>macOS no redueix automàticament l'àudio en segon pla quan t'uneixes a una trucada.</p>

<h3>Memòria de volum per aplicació</h3>
<p>macOS no recorda els nivells de volum per aplicació perquè no existeix el volum per aplicació.</p>

<p>Tots cinc estan disponibles amb <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — una aplicació nativa macOS barra de menú que afegeix el mesclador de volum que Apple mai va construir.</p>

<img src="/apps/sounddial.png" alt="SoundDial — control de volum per aplicació, perfils, auto-ducking i augment del 200% per a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Part 6: Volum per aplicació amb SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> omple tots els buits esmentats anteriorment:</p>

<ul>
  <li><strong>Volum per aplicació:</strong> Cada aplicació té el seu propi control lliscant, del 0% al 200%</li>
  <li><strong>Silenci per aplicació:</strong> Un clic per silenciar qualsevol aplicació</li>
  <li><strong>Augment de volum:</strong> Amplifica les aplicacions silencioses més enllà del 100%</li>
  <li><strong>Perfils de volum:</strong> Desa configuracions i canvia amb un sol clic</li>
  <li><strong>Auto-ducking:</strong> L'àudio en segon pla baixa durant les trucades i es restaura després</li>
  <li><strong>Memòria de volum:</strong> El volum de cada aplicació es recorda entre reinicis</li>
  <li><strong>Commutació de dispositius de sortida:</strong> Canvia els altaveus/auriculars des del mateix panell</li>
  <li><strong>Dreceres de teclat:</strong> ⌃⌥S per activar la taula de mesclatge, ⌃⌥M per silenciar totes</li>
</ul>

<p>Utilitza l'API moderna Core Audio Tap d'Apple — sense controladors del sistema, sense dispositius d'àudio virtuals, sense extensions del nucli. Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> per 14,99 € (compra única, sense subscripció), ressenyat per Apple i en sandbox. macOS 14,2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "El volum de VLC és massa baix a Mac? Com pujar-lo més enllà del 200%",
    description:
      "VLC al volum màxim però el vídeo encara queda massa baix? VLC té un augment integrat del 200% — a més, pots anar encara més lluny amb un mesclador de volum per aplicació.",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>Estàs veient un vídeo a VLC. El diàleg és silenciós. Puges el volum de VLC al màxim. Puges el volum de la Mac al màxim. Encara no sento bé. El vídeo es va gravar massa baix.</p>

<p>La bona notícia: VLC en realitat té una solució integrada que la majoria de gent no coneix. La notícia encara millor: pots acumular-ho amb un augment a nivell de sistema per obtenir encara més volum.</p>

<h2>L'augment de volum integrat del VLC (fins al 200%)</h2>

<p>VLC pot superar el 100% del volum per si sol. El control de volum a la barra de reproductor de VLC arriba al màxim al 100%, però pots augmentar-lo encara més:</p>

<h3>Mètode 1: Roda de desplaçament</h3>
<p>Passa el ratolí per sobre del control de volum de VLC i desplaça't cap amunt. El control lliscant superarà el 100% visible, fins al 200%. Veureu el percentatge que es mostra mentre feu scroll.</p>

<h3>Mètode 2: Drecera de teclat</h3>
<p>Premsa <strong>Comandament + Fletxa Amunt</strong> (⌘↑) repetidament per augmentar el volum per sobre del 100%. Cada premsa afegeix un pas. <strong>Comandament + Fletxa avall</strong> (⌘↓) per disminuir.</p>

<h3>Mètode 3: Menú d'àudio</h3>
<p>Ves a VLC → àudio → augmenta el volum. Repeteix fins que el volum sigui prou alt. El nivell actual es mostra a la part inferior dreta del jugador.</p>

<p>El 200% de boost de VLC funciona amplificant el senyal d'àudio dins del decodificador de VLC. A nivells extrems pot introduir distorsió, però per a fitxers de vídeo realment silenciosos és molt efectiu.</p>

<h2>Més enllà de l'impuls de VLC: amplificació a nivell de sistema</h2>

<p>Si VLC al 200% encara no és prou fort — o si vols potenciar VLC sense afectar la configuració interna d'àudio — un mesclador de volum per aplicació a nivell de sistema afegeix una capa addicional d'amplificació.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dóna a VLC el seu propi control lliscant de volum del 0% al 200% a nivell de sistema. Això s'acumula amb l'impuls intern de VLC:</p>

<ul>
  <li>VLC intern: 200% × SoundDial: 200% = amplificació efectiva del 400%</li>
  <li>VLC intern: 150% × SoundDial: 150% = amplificació efectiva del 225%</li>
</ul>

<p>Això és una amplificació extrema i introduirà distorsió en alguns continguts, però per a material d'origen extremadament silenciós pot ser el que necessites.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum de VLC a nivell de sistema a macOS per a fitxers de vídeo silenciosos" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Més important encara, SoundDial et permet potenciar VLC <strong>independentment</strong>. El teu reproductor de música, navegador i aplicacions de comunicació es mantenen als nivells normals mentre que només VLC puja de volum. Si puges VLC al 180% en SoundDial, Spotify no canvia. Això és una cosa que el turbo integrat del VLC no pot fer — el turbo del VLC només afecta el VLC, però el volum d'un sol sistema de macOS encara lliga la resta.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Com desactivar el ducking d'àudio en Mac (o controlar-lo tu mateix)",
    description:
      "macOS o les teves aplicacions continuen baixant la música durant les trucades sense que ho demanis. Així és com evitar que l'àudio no sigui desitjat — o substitueix-lo per un ducking que realment controles tu.",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>T'uneixes a una trucada de Zoom. La teva música cau gairebé a zero. No vas tocar cap control de volum — alguna cosa ho va fer per tu. Això és <strong>Àudio Ducking</strong>: la reducció automàtica de l'àudio en segon pla quan una trucada o una font d'àudio important està activa.</p>

<p>A algunes persones els encanta. D'altres ho odien — especialment quan l'ajupit és massa agressiu (la música baixa a zero en lloc d'un nivell de fons còmode) o quan s'activa inesperadament.</p>

<p>Aquí tens com desactivar el ducking no desitjat a Mac, i com substituir-lo per un ducking que funcioni com vols.</p>

<h2>D'on prové el ducking d'àudio a Mac</h2>

<p>macOS en si mateix sí <strong>no</strong> Tenen una funció d'àudio d'aducció integrada. Si la teva música es torna més fluixa durant les trucades, una d'aquestes causes ho provoca:</p>

<h3>1. Processament d'àudio de Zoom</h3>
<p>Zoom pot reduir l'àudio del sistema quan s'activa. Comprova Zoom → Configuració → Àudio i desactiva "Ajusta automàticament el volum del micròfon." També prova de reduir la supressió de soroll de "Alt" a "Baix".</p>

<h3>2. Commutació de còdecs Bluetooth</h3>
<p>Quan una aplicació activa el micròfon dels teus auriculars Bluetooth, macOS canvia d'AAC al còdec SCO. Això no és realment un "ducking" — és un canvi de còdec que fa que tot soni més baix i de menor qualitat. Soluciona-ho utilitzant un micròfon separat.</p>

<h3>3. Una aplicació de tercers que ho fa</h3>
<p>Algunes aplicacions d'àudio (com Música de fons) tenen funcions d'autopausa o auto-duck. Algunes aplicacions multimèdia redueixen el seu propi volum quan detecten una altra font d'àudio. Revisa qualsevol aplicació d'àudio que tinguis instal·lada.</p>

<h3>4. Aplicacions de comunicació ajustant l'àudio</h3>
<p>Discord, Teams i altres aplicacions de comunicació tenen el seu propi processament d'àudio que pot afectar el volum percebut d'altres aplicacions. Comprova la configuració d'àudio de cada aplicació per a opcions d'"ajust automàtic" i desactiva-les.</p>

<h2>Com aturar l'ànec desitjat</h2>

<ol>
  <li><strong>Comprova la configuració d'àudio de Zoom/Teams/Discord</strong> — desactivar l'ajust automàtic de volum/micròfon</li>
  <li><strong>Utilitza un micròfon separat per a les trucades</strong> — impedeix la commutació de còdecs Bluetooth</li>
  <li><strong>Elimina les utilitats d'àudio</strong> — Música de fons, Soundflower o qualsevol aplicació que pugui interceptar àudio</li>
  <li><strong>Comprova macOS Accessibilitat</strong> — Configuració del sistema → Accessibilitat → Àudio per a qualsevol configuració inesperada</li>
</ol>

<h2>Substitueix el mal ducking per el bon ducking</h2>

<p>La idea darrere de l'audio ducking és realment excel·lent: reduir automàticament l'àudio de fons durant les trucades perquè puguis escoltar clarament. El problema és quan és massa agressiu (la música arriba a zero), no es pot configurar (no pots triar quant baixar) o es desencadena per la cosa equivocada.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Té una funció d'auto-ducking integrada que et dóna el control:</p>

<ul>
  <li><strong>Nivell d'ànec configurable:</strong> Tria exactament quant reduir l'àudio en segon pla durant les trucades — des d'un 10% (gairebé silenciós) fins al 80% (gairebé reduït). El valor per defecte és el 30%, cosa que manté la música audible però sense distreure.</li>
  <li><strong>Detecció intel·ligent:</strong> Detecta trucades monitoritzant l'ús del micròfon — el mateix indicador que el punt taronja de macOS. Funciona amb Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Restauració perfecta:</strong> Quan la trucada finalitza, cada aplicació torna exactament al seu volum anterior. No cal reajustar.</li>
  <li><strong>Fàcil d'activar:</strong> Activa o desactiva l'auto-ducking a la configuració de SoundDial. Quan no el vulguis, desactiva'l. Quan el vulguis recuperar, activat-lo.</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial auto-ducking configurable — controla exactament quanta quantitat d'àudio en segon pla es redueix durant les trucades" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>La diferència: en lloc que una aplicació decideixi que la teva música ha d'anar a zero en cada trucada, tu decideixes que hauria d'anar al 25%. En comptes de perdre el control, el guanyes. I en comptes d'intentar desactivar una funció oculta en tres aplicacions diferents, tens un interruptor en un sol lloc.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Els auriculars Bluetooth són massa baixos a Mac? Totes les solucions que funcionen",
    description:
      "Els teus auriculars Bluetooth funcionen bé al telèfon però sonen baixos a Mac. Aquí tens totes les causes — des de problemes amb els còdecs fins a macOS límits de volum — i com solucionar-les cadascuna.",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>Els teus auriculars Bluetooth són prou sorollosos al teu telèfon. Els connectes amb el teu Mac — i tot és més silenciós. La música sona amortida. Les trucades són difícils d'escoltar. Has posat el volum al màxim però encara no n'hi ha prou. Què passa?</p>

<p>L'àudio Bluetooth a Mac té diversos factors que redueixen el volum i que no existeixen als telèfons. Aquí tens cadascuna i com solucionar-la.</p>

<h2>1. La seguretat dels auriculars és limitar el volum</h2>

<p>macOS té una funció integrada que limita el volum dels auriculars per protegir l'audició. Mesura l'exposició al so al llarg del temps i redueix el volum màxim si creu que has estat escoltant massa fort.</p>

<p>Ves a <strong>Configuració del sistema → So → Seguretat dels auriculars</strong>. Si està activat "Reduir àudio fort", desactiva-la o augmenta el llindar. Aquesta és la principal causa que els auriculars Bluetooth siguin més silenciosos en Mac que en un telèfon.</p>

<h2>2. Desajust del còdec Bluetooth</h2>

<p>El teu telèfon podria connectar-se als auriculars amb un còdec de més qualitat (aptX, LDAC, AAC) mentre que el teu Mac per defecte utilitza SBC (el còdec Bluetooth bàsic). Diferents còdecs tenen característiques diferents de volum màxim.</p>

<p>macOS generalment utilitza AAC per als dispositius Apple i SBC per a auriculars de tercers. Si els teus auriculars admeten aptX o LDAC, no macOS els faràs servir — Apple només suporta AAC i SBC.</p>

<p><strong>Correcció:</strong> No hi ha gaire cosa que puguis fer amb la selecció de còdecs en macOS. Però saber això explica per què els mateixos auriculars poden sonar diferent (i potencialment més fluixos) al teu Mac en comparació amb un telèfon Android que utilitza LDAC.</p>

<h2>3. L'activació del micròfon activa SCO</h2>

<p>Quan qualsevol aplicació activa el micròfon dels teus auriculars Bluetooth (Zoom, FaceTime, Siri, dictat), macOS canvia d'AAC al còdec SCO. SCO va ser dissenyat per a trucades telefòniques el 2004 — sona fatal i és significativament més silenciós.</p>

<p><strong>Correcció:</strong> Utilitza un micròfon separat (micròfon Mac integrat o micròfon USB) i mantén els auriculars Bluetooth només de sortida. A la configuració de l'aplicació de trucades, configura l'entrada al micròfon del teu Mac i la sortida als auriculars. Això evita el canvi SCO.</p>

<h2>4. Problema de sincronització de volum Bluetooth</h2>

<p>L'àudio Bluetooth té dos controls de volum: un al costat Mac i un altre al costat dels auriculars. Se suposa que han de mantenir-se sincronitzats, però poden separar-se — el Mac mostra el 100% però els auriculars no estan realment al volum complet.</p>

<p><strong>Correcció:</strong> Desconnecta els auriculars (Configuració del sistema → Bluetooth → clica "i" → Desconnecta), espera 5 segons i torna a connectar. Això torna a sincronitzar el volum. Alguns auriculars també tenen els seus propis botons de volum — assegura't que estiguin al màxim.</p>

<h2>5. Connexió Bluetooth de baixa qualitat</h2>

<p>La distància, les interferències (routers WiFi, dispositius USB 3.0) i els obstacles entre la Mac i els auriculars poden reduir la qualitat del senyal Bluetooth. Quan el senyal és feble, macOS pot reduir la taxa de bits de l'àudio, cosa que pot afectar el volum i la qualitat percebuts.</p>

<p><strong>Correcció:</strong> Acosta't a la teva Mac. Desconnecta altres dispositius Bluetooth que no utilitzis. Allunya els hubs USB 3.0 del teu Mac (USB 3.0 genera interferències a la banda de 2,4 GHz que utilitza Bluetooth).</p>

<h2>6. Els auriculars en si mateixos</h2>

<p>Alguns auriculars Bluetooth tenen un volum màxim més baix que d'altres. Els auriculars overear amb transductors més grans generalment fan més soroll que els auriculars. Els auriculars amb cancel·lació de soroll poden tenir límits de volum integrats al seu firmware.</p>

<p>Consulta l'aplicació del fabricant dels auriculars (Sony Headphones Connect, Bose Music, Sennheiser Smart Control, etc.) per veure la configuració de limitació de volum. Alguns auriculars tenen un mode d'"escolta segura" que limita el volum.</p>

<h2>Encara callada? Impuls més enllà del 100%</h2>

<p>Si ho has comprovat tot i els teus auriculars encara estan massa baixos en Mac, necessites amplificació de volum.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> augmenta el volum de qualsevol aplicació fins a <strong>200%</strong>. Si Spotify a través dels teus auriculars Bluetooth és massa silenciós, arrossega el seu control lliscant al 160%. El senyal d'àudio s'amplifica abans d'arribar als auriculars, duplicant efectivament el volum disponible per a aquella aplicació.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum de l'aplicació per a auriculars Bluetooth a Mac amb controls lliscants per aplicació al 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>L'augment per aplicació és millor que un augment de volum a nivell de sistema perquè només pots amplificar l'aplicació silenciosa. Si el teu podcast és tranquil però la música està bé, puja l'aplicació del podcast al 170% mantenint Spotify al 80%. Cada aplicació es manté al nivell correcte.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac Àudio per a OBS i Streaming: Com controlar el que sent la teva audiència",
    description:
      "Fer streaming per Mac amb OBS? Els teus espectadors ho escolten tot al mateix volum — joc, música, alertes, Discord. Així és com equilibrar correctament les fonts d'àudio.",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>Estàs fent streaming al teu Mac amb OBS. L'àudio del teu joc està a tot volum. La teva trucada de Discord està en marxa. Spotify està posant música de fons. L'alerta sona quan algú es subscriu. Els teus espectadors escolten tot això al mateix volum — un caos on les crides de Discord competeixen amb explosions i la música ofega els teus comentaris.</p>

<p>El problema principal: macOS et dóna una sortida d'àudio, i OBS la captura com una sola transmissió combinada. No pots dir a OBS "captura el joc al 40%, Discord al 80% i Spotify al 20%" perquè macOS no els separa.</p>

<h2>El problema de l'àudio Mac streaming</h2>

<p>A Windows, OBS pot capturar l'àudio d'una aplicació individual de manera nativa. Afegeixes cada aplicació com una font d'àudio separada i les mescles de manera independent dins d'OBS. En Mac, això no està integrat. OBS on macOS pot capturar:</p>

<ul>
  <li><strong>Àudio d'escriptori</strong> — tot el que sona a la teva Mac, combinat en un sol flux</li>
  <li><strong>Micròfon/Auxiliar</strong> — la teva entrada de micròfon</li>
  <li><strong>Captura d'àudio d'aplicació (macOS 13+)</strong> — capturar l'àudio d'una aplicació específica, però la configuració és manual i limitada</li>
</ul>

<p>La font de captura d'àudio d'aplicació (afegida a OBS 30+) funciona per aïllar una aplicació, però gestionar cinc fonts d'àudio amb nivells separats dins d'OBS és complex i no totes les aplicacions cooperen.</p>

<h2>L'enfocament més senzill: nivells de control abans que OBS els capturi</h2>

<p>En lloc d'intentar separar l'àudio dins d'OBS, controla el volum de cada aplicació <em>Abans</em> arriba a la captura d'àudio d'escriptori d'OBS. Si baixes Spotify al 20% i puges Discord al 90% a nivell de sistema, la captura d'àudio d'escriptori d'OBS capta la mescla ja equilibrada.</p>

<p>Això és exactament el que <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sí. Configura cada aplicació al nivell que vulguis que els teus espectadors escoltin:</p>

<img src="/apps/sounddial.png" alt="SoundDial equilibrar els nivells d'àudio del joc, Discord i música per a la transmissió d'OBS a Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuració típica d'àudio en streaming</h3>
<ul>
  <li><strong>Joc:</strong> 50% — present però sense dominar la teva veu</li>
  <li><strong>Discord / xat de veu:</strong> 80% — eliminar les crides del teu equip</li>
  <li><strong>Spotify / música:</strong> 15% — un ambient subtil de fons</li>
  <li><strong>Alertes de retransmissió (navegador):</strong> 40% — audible però no estranya</li>
  <li><strong>Slack / notificacions:</strong> silenciat — els espectadors no necessiten escoltar els teus missatges directes</li>
</ul>

<h3>Desa'l com un perfil de "Streaming"</h3>
<p>Desa aquesta configuració com a perfil de volum a SoundDial. Abans de començar en directe, aplica el perfil "Streaming" amb un sol clic. Cada aplicació salta al seu nivell optimitzat per a streaming. Quan acabis de fer streaming, torna al teu perfil "Normal" o "Gaming".</p>

<h2>El que escoltes vs. el que senten els espectadors</h2>

<p>Amb SoundDial ajustant el volum per aplicació a nivell de sistema, tant tu com els teus espectadors sentiu la mateixa barreja equilibrada. Això és més senzill que intentar mantenir mescles separades (una per a tu, una per a la retransmissió) — cosa que requereix dispositius d'àudio virtuals i un encaminament complex que és fràgil a Mac.</p>

<p>Si necessites una mescla completament separada per al teu stream respecte als auriculars (per exemple, vols escoltar Discord més fort que els teus espectadors), necessitaràs una configuració de rutes més complexa amb dispositius d'àudio virtuals. Però per a la majoria de streamers, una sola mescla ben equilibrada — controlada fàcilment des de la barra de menú — és exactament el que es necessita.</p>

<h2>Per què el control per aplicació supera la mescla només amb OBS</h2>

<ul>
  <li><strong>Ajustos instantanis:</strong> A mitja retransmissió, un espectador diu que el joc és massa sorollós. Fes clic a la barra de menú, arrossega un control lliscant. Fet. No hi ha pausa ni obrir la configuració d'OBS.</li>
  <li><strong>Treballa fora d'OBS:</strong> La teva configuració d'àudio equilibrada funciona fins i tot quan no estàs fent streaming. Mateixos perfils, mateixa comoditat.</li>
  <li><strong>No hi ha dispositius d'àudio virtuals:</strong> SoundDial utilitza l'API nativa Audio Tap d'Apple — sense Soundflower, sense BlackHole, sense controladors que es trenquin en macOS actualitzacions.</li>
</ul>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Ressenyada per Apple, compra única de 14,99 €, sense subscripció, macOS 14,2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Com fer que el teu Mac recordi el volum per aplicació",
    description:
      "Cada vegada que reinicies Spotify o reinicies Zoom, has de tornar a ajustar el volum. Aquí tens com fer que macOS recordin automàticament el nivell de volum de cada aplicació.",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>Passes cinc minuts aconseguint que els teus nivells d'àudio siguin perfectes. Spotify al 30%, Zoom al 100%, Slack al 15%. Després reinicies la Mac. O Slack es bloqueja i es torna a llançar. O tanques Spotify i el tornes a obrir més tard. Cada aplicació es reinicia al seu volum per defecte. Ho reajustes tot. Un altre cop.</p>

<p>macOS recorda el volum del sistema durant els reinicis. Però no recorda el volum per aplicació — perquè macOS no té control de volum per aplicació en primer lloc. No hi ha res a recordar.</p>

<h2>Per què les aplicacions no recorden el seu propi volum</h2>

<p>Algunes aplicacions (com Spotify i VLC) tenen controls lliscants de volum interns que es guarden entre sessions. Però la majoria d'aplicacions — navegadors, eines de comunicació, utilitats del sistema — no tenen els seus propis controls de volum. I fins i tot les aplicacions que sí que estalvien volum intern només recorden la posició del seu propi control lliscant, no el seu volum respecte a altres aplicacions.</p>

<p>El que realment vols és que el <em>Sistema</em> per recordar: "Spotify hauria d'estar sempre al 30% del volum del sistema." macOS no recolza aquest concepte.</p>

<h2>Memòria de volum amb SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> té un <strong>Memòria de volum</strong> Característica. Quan està activat, desa el nivell de volum de cada aplicació mitjançant el seu identificador de paquet. Quan l'aplicació tanca i es reinicia — tant si la reinicies, es bloqueja com si reinicies el Mac — SoundDial la restaura automàticament al volum que ha guardat.</p>

<img src="/apps/sounddial.png" alt="SoundDial memòria de volum — recorda i restaura automàticament els nivells de volum per aplicació a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Com funciona</h3>
<ol>
  <li>Activa "Recorda el volum per aplicació" a la configuració de SoundDial</li>
  <li>Configura cada aplicació al volum que prefereixis</li>
  <li>SoundDial desa el nivell automàticament</li>
  <li>Quan l'aplicació es reinicia, el volum es restaura exactament on era</li>
</ol>

<p>No es pot desar manualment. No cal reajustar. La primera vegada que configures els volums és l'última.</p>

<h3>El que es recorda</h3>
<ul>
  <li><strong>Nivell de volum</strong> — el percentatge exacte (0% a 200%)</li>
  <li><strong>Estat mut</strong> — si has silenciat una aplicació, es manté silenciada quan es reinicia</li>
  <li><strong>Per aplicació</strong> — el volum de cada aplicació s'emmagatzema de manera independent segons l'ID del paquet</li>
</ul>

<h3>Les aplicacions noves tenen un volum per defecte</h3>
<p>Quan una aplicació s'obre per primera vegada (una SoundDial no havia vist abans), obté un volum per defecte configurable. Pots establir aquest valor per defecte a la configuració de SoundDial — així les noves aplicacions comencen al 80% (o el que prefereixis) en comptes de potencialment explotar al 100%.</p>

<h2>Memòria de volum + perfils = configurar-ho i oblidar-ho</h2>

<p>La memòria de volum s'encarrega del dia a dia: les aplicacions mantenen els seus nivells durant els reinicis. Els perfils gestionen el canvi situacional: mode "Reunió", mode "Focus", mode "Gaming" — aplica-ho amb un sol clic i cada aplicació salta al nivell adequat per a aquella situació.</p>

<p>En conjunt, gairebé mai no s'ajusta manualment un control de volum. L'aplicació recorda el seu últim nivell, i quan canvies de context, un perfil ho configura tot alhora.</p>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Ressenyada per Apple, compra única de 14,99 €, sense subscripció, macOS 14,2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "El volum del podcast és massa baix en Mac? Com fer-ho més fort",
    description:
      "Alguns podcasts són molt silenciosos en Mac fins i tot al volum màxim. Aquí tens per què — i com millorar l'àudio d'un podcast més enllà del 100% sense afectar altres aplicacions.",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>Estàs escoltant un podcast al teu Mac. L'amfitrió sona bé, però el convidat — gravant amb un micròfon d'un portàtil a la seva cuina — gairebé no se sent. Poses el volum al 100%. L'amfitrió ara fa massa soroll, però el convidat segueix callat. No hi ha manera de guanyar perquè el problema està en la gravació, no en el teu Mac.</p>

<p>La qualitat de l'àudio dels podcasts varia molt. Els espectacles professionals es dominen a nivells consistents. Però les entrevistes, els podcasts independents i les gravacions en directe sovint tenen convidats a -20 dB o menys — significativament més baix que el presentador o la música d'introducció.</p>

<h2>Per què alguns podcasts són tan silenciosos</h2>

<ul>
  <li><strong>Qualitat del micròfon convidat:</strong> Un amfitrió té una configuració professional, el convidat porta AirPods. La diferència de nivell pot ser de 15+ dB.</li>
  <li><strong>Sense postproducció:</strong> Els podcasts produïts professionalment comprimeixen i normalitzen els nivells. Molts no ho fan.</li>
  <li><strong>Les aplicacions de podcasts no normalitzen:</strong> Apple Podcasts i Spotify apliquen una normalització mínima o cap de volum al contingut dels podcasts (a diferència de la música).</li>
  <li><strong>Rang dinàmic:</strong> Alguns productors de podcasts mantenen intencionadament un alt rang dinàmic per a un so "natural" — és a dir, les parts silencioses són molt silencioses.</li>
</ul>

<h2>Correccions dins de l'aplicació</h2>

<h3>Apple Podcasts</h3>
<p>Apple Podcasts no té cap funció de normalització de volum ni d'augment de volum. El que ofereix el podcast és el que obtens. El control de volum dins de l'aplicació en versions antigues es va eliminar — ara només utilitza el volum del sistema.</p>

<h3>Spotify</h3>
<p>La configuració "Normalitzar volum" de Spotify (Configuració → Reproducció) pot ajudar a mantenir la coherència del volum entre diferents podcasts, però el seu efecte en la dinàmica dins de l'episodi és limitat. Prova de posar-lo a "Fort" per a la màxima normalització.</p>

<h3>Overcast (navegador)</h3>
<p>Si utilitzes Overcast (via web a overcast.fm), té una funció de "Voice Boost" que amplifica i comprimeix significativament l'àudio del podcast, fent que les veus baixes siguin més fortes. Aquesta és una de les millors solucions integrades — però només funciona dins d'Overcloud.</p>

<h2>Solució a nivell de sistema: augmentar les aplicacions de podcasts més enllà del 100%</h2>

<p>La solució universal és amplificar la teva aplicació de podcasts més enllà del límit del 100% d'macOS. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Dóna a cada aplicació un control lliscant de volum fins a <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum d'Apple Podcasts al 180% a Mac per a episodis tranquils de podcast" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Configura Apple Podcasts o la teva aplicació de podcasts al 160-180% mantenint Spotify Music al 40% i Slack al 15%. El podcast es fa més fort sense fer que la resta soni dolorosament fort. Quan tornis a la música, simplement deixa l'aplicació del podcast a la normalitat — o deixa que la memòria de volum de SoundDial la recordi automàticament.</p>

<p>Aquest enfocament per aplicació és millor que un augment de volum a nivell de sistema perquè:</p>
<ul>
  <li>Només que l'aplicació de podcast silenciosa es fa més forta</li>
  <li>La música es manté al teu nivell preferit</li>
  <li>L'àudio de la trucada es manté al teu nivell preferit</li>
  <li>Els sons de notificació no es tornen ensordidors de sobte</li>
</ul>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Ressenyada per Apple, compra única de 14,99 €, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Mac Configuració d'àudio per a classes i conferències en línia",
    description:
      "Mirant una classe mentre prens apunts, buscant referències a Google i xerrant amb companys — tot a volums diferents. Així és com gestionar l'àudio dels estudiants a Mac.",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>Ets un estudiant que assisteix a una classe en línia per Zoom. Tens un tutorial de YouTube obert en una altra pestanya per referència. Els teus companys de classe estan xerrant per Discord. Spotify reprodueix ritmes lo-fi de fons. El teu Mac tracta tot això com un sol volum. Si baixes el volum de lo-fi, no sentiràs el teu professor. Si puges el volum de la conferència, els senyals de Discord et trenquen la concentració.</p>

<p>macOS té un sol control lliscant de volum per a tot. Per als estudiants que gestionen múltiples fonts d'àudio, aquest és un punt de fricció constant.</p>

<h2>La típica pila d'àudio d'estudiant</h2>

<ul>
  <li><strong>Plataforma de conferències</strong> (Zoom, Teams, Google Meet, Webex) — ha de ser claríssim, sempre audible</li>
  <li><strong>Material de referència</strong> (Tutorials de YouTube, classes gravades) — volum moderat, cal que sigui pausable/ajustable</li>
  <li><strong>Música d'estudi</strong> (Spotify, Apple Music) — nivell de fons baix, no hauria de competir amb la classe</li>
  <li><strong>Xat</strong> (Discord, iMessage, Slack) — sons subtils de notificació, no disruptius</li>
  <li><strong>Pestanyes del navegador</strong> — contingut que es reprodueix automàticament de tant en tant que cal silenciar immediatament</li>
</ul>

<h2>La macOS limitació</h2>

<p>Amb un sol volum del sistema, estàs obligat a fer concessions. Posa-la prou alta perquè el micròfon d'un professor sigui silenciós, i Spotify sona massa fort. Si la poses en música còmoda, la classe és inaudible. Si poses Spotify en silenci, perds el benefici de focus de la música de fons. No hi ha un equilibri còmode perquè totes les aplicacions estan bloquejades al mateix nivell.</p>

<h2>Configuració d'àudio per a cada aplicació per estudiar</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Cada aplicació dóna el seu propi control lliscant de volum, així pots construir la configuració d'àudio d'estudi ideal:</p>

<img src="/apps/sounddial.png" alt="SoundDial configuració de l'estudiant — classe a tot volum, música d'estudi baixa, notificacions apagades" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Perfil de la conferència</h3>
<ul>
  <li><strong>Zoom / Equips / Trobada:</strong> 100% — no fallis ni una paraula</li>
  <li><strong>Spotify:</strong> 15% — ambient de fons gairebé imperceptible</li>
  <li><strong>Discord:</strong> 10% — només notificacions subtils</li>
  <li><strong>Navegador:</strong> 40% — per a vídeos de referència quan calgui</li>
  <li><strong>iMessage:</strong> silenciat — comprova entre classes</li>
</ul>

<h3>Perfil d'autoestudi</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — música d'estudi motivadora</li>
  <li><strong>Navegador:</strong> 70% — vídeos tutorials a un nivell clar</li>
  <li><strong>Discord:</strong> 20% — disponible per a grups d'estudi</li>
  <li><strong>La resta:</strong> apagada</li>
</ul>

<h3>Perfil de trencament</h3>
<ul>
  <li><strong>Tot:</strong> 60-80% — relaxa't entre classes</li>
</ul>

<p>Guarda cadascun com un perfil de volum i canvia entre ells amb un sol clic a mesura que avanci el dia. Quan comenci una classe, aplica "Conferència" — l'auto-ducking s'encarregarà de la resta, baixant automàticament la música quan el professor parli pel micròfon.</p>

<h2>Per què això és important per a la concentració</h2>

<p>Els estudis demostren constantment que tenir l'entorn sonor adequat millora la concentració i la retenció. La mescla equivocada — música massa alta, notificacions massa freqüents, classe massa baixa — crea una càrrega cognitiva que no té res a veure amb el material que estàs estudiant. Encertar l'àudio una vegada, guardar-lo com a perfil i no pensar-hi mai més elimina una font constant de distracció.</p>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Ressenyada per Apple, compra única de 14,99 €, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Mac so no funciona després de l'actualització? Guia completa de correccions",
    description:
      "Has actualitzat macOS i ara el teu so ha desaparegut, crepita o està encallat al volum equivocat. Aquí tens totes les solucions per fer que el teu àudio Mac torni a funcionar.",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>Has actualitzat macOS. Tot semblava anar bé — fins que vas notar que no hi havia cap so. O el so és crepitant. O el volum està encallat. O el teu dispositiu de sortida d'àudio ha desaparegut. Els problemes d'àudio després de l'actualització passen amb gairebé totes les macOS llançaments, i van des d'una mica molestos fins a completament silenciosos.</p>

<p>Aquí tens una guia sistemàtica per arreglar l'àudio Mac després d'una actualització macOS, que cobreix tots els problemes i solucions coneguts.</p>

<h2>Pas 1: Comprova l'òbvia</h2>

<h3>Està apagada?</h3>
<p>Prem la tecla de pujar volum. Comprova si l'indicador de volum apareix a la pantalla. De vegades les actualitzacions reinicien el volum del sistema a zero o activen el silenci.</p>

<h3>Està seleccionat el dispositiu de sortida correcte?</h3>
<p>Ves a Configuració del sistema → so → sortida. Després d'una actualització, macOS vegades canvia a un dispositiu de sortida inesperat — els altaveus d'un monitor connectat, un dispositiu Bluetooth que no està connectat, o els altaveus integrats quan vols altaveus externs. Selecciona el dispositiu correcte.</p>

<h3>La seguretat dels auriculars limita el volum?</h3>
<p>Les actualitzacions de vegades reinicien la seguretat dels auriculars a la seva configuració per defecte (activada). Comprova la configuració del sistema → la seguretat de so → auriculars i desactiva la "Redueix l'àudio fort" si l'actualització l'ha activat.</p>

<h2>Pas 2: Reiniciar l'àudio del nucli</h2>

<p>El dimoni d'àudio (coreaudiod) sovint es posa en mal estat després d'una actualització. Reiniciar-lo és la solució més efectiva.</p>

<p>Obre la terminal i corre:</p>
<p><code>Sudo Killall Coreaudiod</code></p>

<p>L'àudio es talla breument i es reinicia. Comprova si el so funciona ara. Si això ho soluciona, el problema era un estat de dimoni d'àudio estancat — comú després de les actualitzacions.</p>

<h2>Pas 3: Reiniciar NVRAM/PRAM</h2>

<p>Per als Macs Intel: apaga completament i després encén mentre mantens premut <strong>Opció + Ordre + P + R</strong> durant uns 20 segons. Això reinicia la NVRAM, que emmagatzema la configuració de volum, la selecció de disc d'arrencada i altres preferències de baix nivell.</p>

<p>Per als Macs Apple Silicon (M1/M2/M3/M4): la NVRAM es reinicia automàticament quan cal. Un reinici complet (no només en repòs/despertar) sol ser suficient.</p>

<h2>Pas 4: Comprova si hi ha conflictes de controladors d'àudio de tercers</h2>

<p>macOS actualitzacions sovint trenquen controladors d'àudio de tercers i extensions del nucli. Si tens algun d'aquests instal·lats, podrien estar causant el problema:</p>

<ul>
  <li><strong>Soundflower</strong> — descontinuada, sovint entra en conflicte amb macOS més recents</li>
  <li><strong>BlackHole</strong> — dispositiu d'àudio virtual, pot necessitar actualització després de macOS actualitzacions</li>
  <li><strong>Bucle de retorn</strong> — potser necessitarà una nova versió per a la macOS actualitzada</li>
  <li><strong>Música de fons</strong> — instal·la un dispositiu d'àudio virtual que sovint es trenca en les actualitzacions</li>
  <li><strong>Controladors d'interfície d'àudio</strong> — Focusrite, Universal Audio, etc., comprova si hi ha controladors actualitzats</li>
</ul>

<p><strong>Correcció:</strong> Elimina o actualitza el programari en conflicte. Per als dispositius d'àudio virtuals, comprova si el dispositiu d'àudio instal·lat per l'aplicació apareix a la configuració del sistema → a →la sortida de so — si sí que apareix i està seleccionat, canvia als altaveus reals. Després actualitza o desinstal·la l'aplicació de tercers.</p>

<h2>Pas 5: Arrencada en mode segur</h2>

<p>Arrenca en mode segur per determinar si el problema és causat per un element d'inici o per una extensió de tercers:</p>

<ul>
  <li><strong>Apple Silicon:</strong> Apaga → mantén premut el botó d'engegada fins que aparegui "Carregant opcions d'inici" → selecciona el disc d'arrencada → mantén premut Shift → fes clic a "Continuar en mode segur"</li>
  <li><strong>Intel·ligència:</strong> Reinicia → manté premut Shift durant l'arrencada fins que vegis la finestra d'inici de sessió</li>
</ul>

<p>Si l'àudio funciona en Mode Segur, la causa és una extensió del nucli de tercers o un element d'inici de sessió. Investiga el programari instal·lat recentment.</p>

<h2>Pas 6: Crea un nou compte d'usuari</h2>

<p>Si el problema persisteix, crea un compte d'usuari nou temporal (Configuració del sistema → Usuaris i grups → Afegeix usuari). Inicia sessió al nou compte i prova l'àudio. Si el so funciona al compte nou, el problema és el teu perfil d'usuari — un fitxer de preferències o configuració d'àudio corrupte.</p>

<h2>Prevenir problemes futurs amb SoundDial</h2>

<p>Un avantatge de <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> En comparació amb altres eines d'àudio: no instal·la cap controlador d'àudio del sistema. Utilitza l'API nativa Core Audio Tap d'Apple, cosa que significa que funciona netament amb les actualitzacions macOS sense els conflictes que afecten les aplicacions de dispositius d'àudio virtuals.</p>

<p>Si has estat utilitzant Música de Fons o Soundflower i es van trencar després d'una actualització, SoundDial és un substitut que no tindrà el mateix problema. Control de volum per aplicació, augment de volum al 200%, perfils, auto-ducking — tot sense extensió del nucli ni dispositiu d'àudio virtual.</p>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Ressenyada per Apple, compra única de 14,99 €, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Com silenciar totes les aplicacions alhora a Mac (i desactivar el silenci perfectament)",
    description:
      "Necessites silenci instantani? La tecla de silenci ho silencia tot — però desactivar el silenci reinicia els volums acuradament equilibrats. Aquí tens una manera millor de silenciar i restaurar en Mac.",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>Algú entra a l'habitació. El teu cap truca inesperadament. Un client comparteix la seva pantalla durant una trucada i la teva música comença a sonar pels seus altaveus. Necessites silenci instantani. Ara mateix.</p>

<p>Has premut la tecla de silenci. Tot queda en silenci. Crisi evitada.</p>

<p>Llavors el moment passa. Tornes a prémer la tecla de silenci. Tot torna — però a nivell de volum del sistema, que no recorda que Spotify estava al 30%, Zoom al 100% i Slack al 15%. Aquests nivells individuals? Desaparegut. Has de reajustar-ho tot manualment.</p>

<h2>La tecla de silenci del sistema: instrument contundent</h2>

<p>La tecla de silenci del Mac (F10 o la tecla altaveu i barra) silencia la <strong>Sortida d'àudio del sistema</strong>. Totes les aplicacions es posen en silenci alhora. Desactivar el silenci restaura el volum del sistema al nivell on era — però com macOS que només té un control lliscant de volum, no hi ha nivells per aplicació per recordar o restaurar.</p>

<p>Això està bé si només utilitzes una aplicació alhora. És un problema si tens sis aplicacions acuradament equilibrades a diferents nivells i necessites silenciar-les + restaurar-les totes.</p>

<h2>Un silenci més intel·ligent: silencia tots per aplicació</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> té una drecera de teclat "Mute All": <strong>Control + Opció + M (⌃⌥M)</strong>.</p>

<p>Quan el prems:</p>
<ol>
  <li>Cada aplicació es silencia individualment (l'estat del volum de cada aplicació es guarda)</li>
  <li>Silenci instantani — igual que la tecla de silenci</li>
</ol>

<p>Quan el tornis a prémer:</p>
<ol>
  <li>Totes les aplicacions estan sense silenci</li>
  <li>Cada aplicació torna a <strong>Exactament</strong> el volum que tenia abans de silenciar</li>
  <li>Spotify torna al 30%, Zoom al 100%, Slack al 15% — perfectament restaurat</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial drecera mute-all — Control+Opció+M per silenciar i desactivar totes les aplicacions amb restauració de volum" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>La diferència respecte a la tecla de silenci del sistema:</p>
<ul>
  <li><strong>Silenci del sistema:</strong> silencia la sortida → desactivar el silenci restaura un volum del sistema → no existeix l'equilibri per aplicació</li>
  <li><strong>SoundDial silenciar tots:</strong> Silencia cada aplicació individualment → desactivar el silenci restaura el volum individual de cada aplicació → es preserva el teu saldo</li>
</ul>

<h2>Quan això importa</h2>

<ul>
  <li><strong>Compartir pantalla:</strong> Estàs compartint la pantalla i has de silenciar la Mac abans que l'altra persona escolti la teva música. ⌃⌥M → silenci → fes el teu → ⌃⌥M → música torna exactament al nivell correcte.</li>
  <li><strong>Interrupció inesperada:</strong> Si algú entra, necessites silenci immediatament. Una drecera, sense ratolí, sense buscar a la barra de menú.</li>
  <li><strong>Trucada ràpida:</strong> El telèfon de la teva taula sona. Silencia el Mac, agafa la trucada, desactiva el silenci quan acabis. Tot torna.</li>
</ul>

<p>Combinat amb el <strong>⌃⌥S</strong> Drecera (canvia el popover de SoundDial), pots gestionar tot l'àudio completament des del teclat: obre la taula de mescles, ajusta els nivells, tanca-la i silencia/des-muta tot sense tocar el ratolí.</p>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "El volum de Google Meet és massa baix a Mac? Com arreglar-ho",
    description:
      "Les veus a Google Meet gairebé no se senten ni tan sols al volum màxim. Aquí tens per què Meet funciona a través de Chrome, què significa això per a l'àudio i com millorar-lo.",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meet no té una aplicació Mac nativa — s'executa dins del navegador. Això vol dir que l'àudio de Meet forma part del flux d'àudio de Chrome (o de Safari), i qualsevol problema de volum està embolicat amb la gestió de l'àudio del navegador. Anem a desenredar-ho.</p>

<h2>1. Comprova la configuració d'àudio de Meet</h2>

<p>Durant una trucada de trobada, feu clic al menú de tres punts (⋮) → Configuració → Àudio. Assegura't que el dispositiu d'altaveu correcte estigui seleccionat. Meet de vegades es posa per defecte en un dispositiu inesperat, especialment si has connectat o desconnectat recentment el maquinari d'àudio.</p>

<h2>2. Comprova el volum de pestanyes del navegador</h2>

<p>A Chrome: fes clic dret a la pestanya Meet → assegura't que "Silenciar el lloc" NO estigui seleccionat. Un lloc silenciat no produeix àudio independentment de la resta de configuració.</p>

<p>A Safari: fes clic a la icona de l'altaveu a la pestanya per assegurar-te que no està silenciada.</p>

<h2>3. Comprovar la sortida del sistema</h2>

<p>Configuració del sistema → so → sortida. Verifica que el dispositiu correcte estigui seleccionat i que el volum estigui al màxim. També comprova la secció de Seguretat d'auriculars si utilitzes auriculars.</p>

<h2>4. El problema de l'àudio de Chrome</h2>

<p>Google Meet funciona com una pestanya de Chrome, i la sortida d'àudio de Chrome pot ser inferior a la de les aplicacions dedicades. Chrome processa l'àudio a través del seu propi renderitzador, que té el seu propi límit de volum. Si l'àudio global de Chrome és baix, Meet està baix — fins i tot si macOS volum està al 100%.</p>

<p>No hi ha cap manera integrada d'augmentar l'àudio de Chrome més enllà del seu màxim. macOS tracta Chrome com una aplicació amb un sol nivell de volum, i aquest nivell arriba al 100%.</p>

<h2>5. Problema amb el còdec Bluetooth</h2>

<p>Si utilitzes AirPods o auriculars Bluetooth, activar el micròfon de Google Meet obliga a canviar el còdec Bluetooth d'AAC a SCO. Això redueix significativament la qualitat i el volum de l'àudio.</p>

<p><strong>Correcció:</strong> A la configuració d'àudio de Meet, selecciona el micròfon integrat del teu Mac com a dispositiu d'entrada mantenint els auriculars Bluetooth com a sortida. Això evita el canvi de còdec i manté l'àudio d'alta qualitat.</p>

<h2>6. Impulsar Google Meet (Chrome) al 100%</h2>

<p>Si Meet encara està massa baix després de comprovar-ho tot, has d'amplificar l'àudio de Chrome més enllà del que macOS permet.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Dóna a Chrome el seu propi control lliscant de volum que arriba fins a <strong>200%</strong>. Com que Google Meet funciona dins de Chrome, potenciar Chrome impulsa Meet. Arrossega el control lliscant al 150% o 180% i l'àudio de la trucada s'amplifica en temps real.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum de Google Meet (Chrome) més enllà del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Això també funciona amb Safari si utilitzes Meet in Safari. SoundDial controla cada navegador de manera independent — augmenta Safari per a Meet mentre mantén Chrome en volum normal per a la resta.</p>

<p>I amb l'auto-ducking, la música de fons baixa automàticament quan comença una trucada de Meet (quan s'activa el micròfon) i es restaura quan acaba la trucada.</p>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Ressenyada per Apple, compra única de 14,99 €, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Com configurar Mac volum d'alerta separat del volum de mitjans",
    description:
      "macOS té un control de volum d'alerta ocult, però només cobreix els sons del sistema. Així és com separar realment el volum de notificacions i mitjans en Mac.",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>La teva música està a un nivell perfecte. Llavors s'activa un so d'alerta macOS — l'efecte de so "Funk" o "Tink" — i és dolorosament fort comparat amb la teva música. O al contrari: les teves alertes són inaudibles perquè el volum del sistema és baix per a música de fons suau.</p>

<p>Vols dos controls de volum separats: un per als mitjans (música, trucades, vídeo) i un altre per a alertes i notificacions. macOS suporta parcialment això, però la solució completa requereix una eina de tercers.</p>

<h2>macOS volum d'alerta incorporat</h2>

<p>macOS té un volum d'alerta separat. Ves a <strong>Configuració del sistema → so</strong> i busca el <strong>"Volum d'alerta"</strong> Slider. Això controla el volum dels sons del sistema macOS — bip d'error, buidatge de la paperera, obturador de captura de pantalla — independentment del volum principal del sistema.</p>

<p>També pots triar quin so d'alerta utilitzar i si vols "Reproduir efectes de so a través de" el dispositiu de sortida seleccionat o pels altaveus integrats.</p>

<h3>Què controla el volum de l'alerta</h3>
<ul>
  <li>macOS sons d'alerta del sistema (Funk, Tink, Bottle, etc.)</li>
  <li>Sons del Finder (Paperera, còpia del fitxer completada)</li>
  <li>Alguns sons d'aplicacions integrades</li>
</ul>

<h3>El que no controla</h3>
<ul>
  <li>Sons de notificació de Slack</li>
  <li>Sons de notificacions de Discord</li>
  <li>Sons de Teams/Zoom</li>
  <li>Sons de notificació per correu</li>
  <li>Qualsevol so de notificació d'aplicació de tercers</li>
  <li>Sons de notificació del navegador</li>
</ul>

<p>Les aplicacions de tercers reprodueixen els sons de notificació a través del seu propi motor d'àudio — es tracten com a àudio normal d'aplicació, no com a alertes del sistema. El control lliscant de volum d'alerta no els afecta. Això vol dir que les aplicacions que fan els sons de notificació més molestos (Slack, Discord, Teams) són les que el volum d'alertes de la macOS no pot tocar.</p>

<h2>La solució real: volum per aplicació per a les aplicacions de notificacions</h2>

<p>Per separar realment el volum de notificacions del volum multimèdia, necessites control de volum per a cada aplicació. Configura Slack al 15%, Discord al 20% i Mail al 10% — mantenint Spotify al 50% i el navegador al 60%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Cada aplicació dóna el seu propi control de volum. Pots configurar les aplicacions amb moltes notificacions a un nivell subtil que es noti però no desconcerti, mantenint les aplicacions multimèdia a un volum d'escolta còmode.</p>

<img src="/apps/sounddial.png" alt="SoundDial separar el volum de l'aplicació de notificacions del volum de l'aplicació multimèdia a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Exemple de configuració</h3>
<p><strong>Aplicacions multimèdia:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60%</li>
  <li>QuickTime/VLC: 70%</li>
</ul>

<p><strong>Aplicacions de notificacions:</strong></p>
<ul>
  <li>Slack: 15%</li>
  <li>Discord: 20%</li>
  <li>Correu: 10%</li>
  <li>Calendari: 25%</li>
</ul>

<p><strong>Aplicacions de comunicació:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>FaceTime: 100%</li>
</ul>

<p>Desa-ho com a perfil i aplica-ho amb un sol clic. La separació entre el volum de notificacions i els mitjans que macOS no proporciona de manera nativa — feta en menys d'un minut.</p>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Ressenyada per Apple, compra única de 14,99 €, sense subscripció, macOS 14,2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "El volum de trucades de FaceTime és massa baix en Mac? Com arreglar-ho",
    description:
      "L'àudio de FaceTime gairebé no se sent al teu Mac fins i tot a volum màxim. Aquí tens totes les solucions — des de la configuració de so fins a augmentar FaceTime més enllà del 100%.",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>Les trucades de FaceTime des del teu iPhone són bones. Però al teu Mac, l'altra persona sona com si xiuxiuegés des de tres habitacions més enllà. El volum està al màxim. Has comprovat tot el que se t'ha acudit. Encara massa silenciós.</p>

<p>El volum baix de FaceTime a Mac és un problema comú i té diverses causes possibles. Repassem cadascuna.</p>

<h2>1. Comprova el dispositiu de sortida</h2>

<p>Ves a Configuració del sistema → so → sortida. Assegura't que el dispositiu correcte estigui seleccionat. Si recentment has connectat o desconnectat auriculars, una pantalla o dispositius Bluetooth, potser macOS canviat automàticament a una sortida inesperada — com un monitor amb altaveus integrats gairebé no funcionals.</p>

<h2>2. Comprova la configuració d'àudio de FaceTime</h2>

<p>Durant una trucada de FaceTime, feu clic a la barra de menú i comproveu FaceTime → Vídeo → seleccioneu el dispositiu de sortida correcte a Sortida d'Àudio. FaceTime de vegades pot utilitzar un dispositiu de sortida diferent del per defecte del sistema, especialment després de canviar de dispositiu.</p>

<h2>3. Desactivar el canvi automàtic dels AirPods</h2>

<p>Si tens AirPods emparellats amb diversos dispositius Apple, poden canviar automàticament fora del teu Mac a mitja trucada. Comprova la configuració del sistema → Bluetooth → fes clic a "i" al costat dels teus AirPods → a "Connectar a aquest Mac" → posa a "Quan s'ha connectat per última vegada a aquest Mac" en lloc de "Automàticament" per evitar el canvi a mitja trucada.</p>

<h2>4. Problema amb el còdec Bluetooth</h2>

<p>Utilitzar AirPods o auriculars Bluetooth amb FaceTime activa l'interruptor del còdec d'AAC a SCO (perquè FaceTime utilitza el teu micròfon). SCO redueix la qualitat i el volum de l'àudio. Utilitza un micròfon separat (micròfon Mac integrat o USB) per mantenir els AirPods en mode AAC d'alta qualitat.</p>

<h2>5. La seguretat dels auriculars limita el volum</h2>

<p>Configuració del sistema → so → seguretat dels auriculars. Si tens activat "Redueix l'àudio fort", macOS està limitant el volum dels auriculars. Desactiva-ho o augmenta el llindar.</p>

<h2>6. Restablir l'àudio del nucli</h2>

<p>Obre la terminal i corre:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>Això reinicia el dimoni d'àudio i pot arreglar els estats de volum baix encallats. Torna a unir-te a la trucada de FaceTime després que l'àudio es reiniciï.</p>

<h2>7. Augmentar el volum de FaceTime més enllà del 100%</h2>

<p>Si tots els ajustos són correctes i FaceTime encara és massa baix — potser l'altra persona té un micròfon feble — cal amplificar més enllà del límit de macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet augmentar el volum de FaceTime fins a <strong>200%</strong>. Obre el panell de la barra de menú, busca FaceTime i arrossega el seu control lliscant més enllà del 100%. L'àudio de la trucada s'amplifica en temps real sense afectar cap altra aplicació.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum de trucades de FaceTime més enllà del 100% a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial també ajuda a l'inrevés: si el to de trucada o les notificacions de FaceTime són massa forts durant el temps d'enfocament, baixa FaceTime al 20% o silencia'l mentre continues sonant la música. Un clic per silenciar, un clic per desactivar el silenci.</p>

<p>Disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Ressenyat per Apple, sandbox, compra única, sense subscripció.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac dreceres de teclat de volum que probablement no coneixes",
    description:
      "Més enllà de les tecles bàsiques de volum — control detallat, silenciar aplicacions específiques i dreceres de volum per a cada aplicació. Cada truc Mac teclat d'àudio explicat.",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>Cada usuari Mac coneix les tecles de volum amunt/baix/silenci. Prem-los i el volum del sistema canvia. Però macOS té diversos trucs ocults de teclat per controlar l'àudio que la majoria de gent mai descobreix — a més de dreceres de tercers que fan que la gestió del volum sigui molt més ràpida.</p>

<h2>Dreceres integrades que tothom hauria de conèixer</h2>

<h3>Ajust de volum de gra fi</h3>
<p>Aguanta <strong>Opció + Canvi</strong> i prem la tecla de volum amunt o avall. Cada premsa ajusta el volum per <strong>un quart</strong> d'un pas normal, donant-te 64 nivells en lloc de 16. Això és essencial per trobar el volum adequat dels auriculars a última hora de la nit, o quan el salt entre dos passos normals és massa gran.</p>

<h3>Ajust de volum silenciós</h3>
<p>Aguanta <strong>Canvi</strong> i prem el volum amunt o avall. El volum canvia però el so audible de "pop" amb retroalimentació queda suprimit. Útil quan estàs ajustant el volum durant una trucada o presentació i no vols que el so pop arribi a tothom.</p>

<h3>Saltar a la configuració de so</h3>
<p>Aguanta <strong>Opció</strong> i prem qualsevol tecla de volum per obrir System Settings → Sound directament. Més ràpid que navegar manualment per la configuració del sistema.</p>

<h3>Commutació ràpida de dispositiu de sortida</h3>
<p>Aguanta <strong>Opció</strong> i fes clic a la icona de So a la barra de menú per veure una llista de tots els dispositius de sortida (i entrada) disponibles. Fes clic en un per canviar instantàniament. No cal obrir la configuració del sistema.</p>

<h2>Què macOS no poden fer les dreceres de teclat</h2>

<p>Totes les dreceres anteriors controlen el <strong>Volum del sistema</strong> — un control lliscant que afecta totes les aplicacions per igual. No hi ha dreceres de teclat integrades per a:</p>

<ul>
  <li>Ajustar el volum d'una aplicació específica</li>
  <li>Silenciar una aplicació sense silenciar-ho tot</li>
  <li>Canviant entre configuracions de volum desades</li>
  <li>Desactivant un panell de mesclador de volum</li>
</ul>

<p>macOS simplement no té control de volum per a cada aplicació, així que no hi ha dreceres per a ella.</p>

<h2>Dreceres de teclat de volum per aplicació amb SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Afegeix dues dreceres globals de teclat que amplien el que macOS pot fer:</p>

<h3>Activa el mesclador de volum: Control + Opció + S</h3>
<p>Premsa <strong>⌃⌥S</strong> Des de qualsevol lloc i el popover de SoundDial s'obre a la barra de menú, mostrant cada aplicació amb el seu propi control de volum. Ajusta el que necessites, prem l'accés ràpid de nou (o fes clic per tancar-lo). Mai surts de la teva aplicació actual.</p>

<h3>Silencia totes les aplicacions: Control + Opció + M</h3>
<p>Premsa <strong>⌃⌥M</strong> per silenciar instantàniament l'àudio de totes les aplicacions. Prem-lo de nou per desactivar el silenci de tot, restaurant cada aplicació al seu volum anterior. Aquest és un botó de "silenci instantani" que és més ràpid que agafar la tecla de silenci — i a diferència de la tecla de silenci del sistema, restaura els volums per aplicació quan desactives.</p>

<img src="/apps/sounddial.png" alt="SoundDial dreceres de teclat — Control+Opció+S per alternar, Control+Opció+M per silenciar-ho tot" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>El flux de treball impulsat pel teclat</h2>

<p>Amb les dreceres de SoundDial activades, pots gestionar tot l'àudio sense tocar el ratolí:</p>

<ol>
  <li><strong>⌃⌥S</strong> — obre la taula d'amagar</li>
  <li>Utilitza les tecles de fletxa o el ratolí per ajustar els controls lliscants individuals</li>
  <li><strong>⌃⌥S</strong> — tanca la taula de mescles</li>
  <li><strong>⌃⌥M</strong> — mut instantani quan algú entra a l'habitació</li>
  <li><strong>⌃⌥M</strong> — desactivar el silenci quan marxen, tot torna a la normalitat</li>
</ol>

<p>Combinat amb <strong>Perfils de volum</strong> (configuracions desades que canvies amb un sol clic), pots gestionar l'àudio d'una dotzena d'aplicacions sense necessitat d'obrir-ne cap individualment.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "L'aplicació de música de fons no funciona en macOS? Prova aquestes alternatives",
    description:
      "L'aplicació gratuïta de música de fons va deixar de funcionar després d'una actualització macOS? Aquí tens per què es trenca, què fer i quines són les millors alternatives que realment funcionen el 2026.",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Música de Fons és una aplicació de Mac gratuïta i de codi obert que et dóna un control bàsic de volum per a cada aplicació. Funciona instal·lant un dispositiu d'àudio virtual i fent passar tot l'àudio per ell. El problema: es trenca. Regularment.</p>

<p>Després de gairebé cada actualització macOS — Ventura, Sonoma, Sequoia, Tahoe — els usuaris informen dels mateixos problemes: el dispositiu d'àudio virtual no s'instal·la, apareixen errors d'àudio i crepitacions, algunes aplicacions no es detecten o simplement es bloqueja en llançar-se. Si has buscat "La música de fons no funciona", no estàs sol.</p>

<h2>Per què la música de fons continua trencant-se</h2>

<p>La música de fons funciona instal·lant un <strong>Controlador de dispositiu d'àudio virtual</strong> (un plugin Core Audio HAL). macOS redirigeix tot l'àudio del sistema a través d'aquest dispositiu virtual, i la música de fons l'intercepta per aplicar el control de volum per aplicació.</p>

<p>El problema és que Apple canvia la manera com funcionen els controladors d'àudio amb gairebé totes les grans macOS llançaments. Les restriccions de seguretat s'endureixen, les APIs canvien i els mecanismes de càrrega de controladors evolucionen. Com que Música de Fons és un projecte de codi obert mantingut per voluntaris, les actualitzacions que s'ajusten als canvis d'Apple no sempre arriben a temps.</p>

<p>Problemes comuns després de macOS actualitzacions:</p>
<ul>
  <li><strong>El dispositiu d'àudio virtual no s'instal·la</strong> — Les noves polítiques de seguretat de macOS bloquegen el conductor</li>
  <li><strong>Crepitació o tartamudeig d'àudio</strong> — el dispositiu virtual introdueix una latència que la versió macOS actual gestiona malament</li>
  <li><strong>Les aplicacions no apareixen</strong> — canvis en la manera com macOS informes que s'executen processos trenquen la detecció d'aplicacions</li>
  <li><strong>Cap àudio</strong> — el dispositiu virtual està configurat com a sortida per defecte però no fa passar àudio</li>
  <li><strong>Bloqueig en el llançament</strong> — incompatibilitat amb la versió macOS actual</li>
</ul>

<h2>Com arreglar la música de fons</h2>

<p>Si la música de fons està trencada actualment:</p>

<ol>
  <li><strong>Comprova les actualitzacions:</strong> Visita la pàgina de llançaments de GitHub per a música de fons i comprova si s'ha publicat una nova versió per a la teva versió macOS.</li>
  <li><strong>Reinstal·lar:</strong> Desinstal·la completament la música de fons (incloent-hi el dispositiu d'àudio virtual), reinicia i instal·la l'última versió.</li>
  <li><strong>Restablir l'àudio:</strong> Si l'àudio està encallat al dispositiu virtual, ves a Configuració del sistema → →Sortida de so i selecciona els teus altaveus/auriculars reals. Doncs corre <code>Sudo Killall Coreaudiod</code> a Terminal.</li>
  <li><strong>Comprova permisos:</strong> Configuració del sistema → Privacitat i Seguretat — assegura't que la Música de Fons tingui els permisos necessaris.</li>
</ol>

<h2>Alternatives que no utilitzen dispositius d'àudio virtuals</h2>

<p>El problema fonamental de la música de fons és arquitectònic: els dispositius d'àudio virtuals són fràgils i es trenquen amb macOS actualitzacions. Les alternatives modernes utilitzen les d'Apple <strong>Core Audio Tap API</strong> (introduït el macOS 14), que permet a les aplicacions interceptar l'àudio per procés sense instal·lar un controlador a nivell de sistema.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> utilitza l'API moderna Audio Tap — sense dispositiu d'àudio virtual, sense controlador del sistema, sense extensions del nucli. Accedeix directament al flux d'àudio de cada aplicació utilitzant l'API compatible amb Apple, cosa que significa que no es trenca quan macOS actualitza.</p>

<img src="/apps/sounddial.png" alt="SoundDial — una alternativa a música de fons que no instal·la dispositius d'àudio virtuals" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>El que obtens amb la música de fons:</p>
<ul>
  <li><strong>No hi ha dispositiu d'àudio virtual</strong> — funciona amb la pila d'àudio nativa d'Apple, no es trenca en les actualitzacions</li>
  <li><strong>Augment de volum al 200%</strong> — La música de fons es limita al 100%</li>
  <li><strong>Perfils de volum</strong> — desar i canviar entre configuracions (la música de fons no en té cap)</li>
  <li><strong>Auto-ducking</strong> — reducció automàtica de volum durant les trucades (la música de fons només té pausa automàtica, no s'abaixa)</li>
  <li><strong>Memòria de volum</strong> — recorda els volums per aplicació entre reinicis</li>
  <li><strong>Dreceres de teclat</strong> — desactiva la taula de mescles o silencia totes les aplicacions</li>
  <li><strong>Desenvolupament actiu</strong> — actualitzats regularment per a les últimes macOS</li>
</ul>

<p>El compromís: SoundDial és una compra de pagament única, mentre que la música de fons és gratuïta. Però una aplicació que realment funciona val més que una aplicació gratuïta que es trenca cada sis mesos. I perquè SoundDial és a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, ha estat revisat per Apple, posat en sandboxing per seguretat i s'instal·la netament — sense descarregar des de GitHub, sense compilar des del codi original, sense concedir permisos d'extensió del sistema.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "Alternativa a SoundSource: Control de volum per aplicació més lleuger i barat per a Mac",
    description:
      "SoundSource és potent però car i complex. Si només necessites control de volum per aplicació sense el kit d'eines d'enginyeria d'àudio, aquí tens què utilitzar en canvi.",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>SoundSource de Rogue Amoeba és l'aplicació de control de volum per aplicació més longeva per a Mac. És potent, ben fet i inclou característiques com l'equalitzador per aplicació, cadenes d'efectes d'àudio i encaminament de sortida per aplicació. A més, costa 39 dòlars, requereix un controlador d'àudio del sistema (ACE) i té més funcions de les que la majoria de gent mai utilitzarà.</p>

<p>Si tot el que vols és baixar Spotify sense afectar Zoom — i no necessites un kit complet d'eines d'enginyeria d'àudio — SoundSource pot ser més del que necessites. Això és el que cal tenir en compte.</p>

<h2>El que SoundSource fa bé</h2>

<p>Cal reconèixer el mèrit — SoundSource és una aplicació polida i professional:</p>
<ul>
  <li><strong>Control de volum per aplicació</strong> amb lliscadors de gra fi</li>
  <li><strong>EQ per aplicació</strong> amb equalitzadors integrats i suport per a plugins d'Audio Unit</li>
  <li><strong>Encaminament de sortida per aplicació</strong> — enviar diferents aplicacions a diferents altaveus</li>
  <li><strong>Augment de volum</strong> passat el 100%</li>
  <li><strong>Efectes d'àudio a nivell de sistema</strong></li>
</ul>

<p>Si ets podcaster, streamer o professional de l'àudio que necessita equalitzadors i cadenes d'efectes per a cada aplicació, SoundSource està dissenyat específicament per a tu.</p>

<h2>On SoundSource queda curt per als usuaris habituals</h2>

<h3>Preu</h3>
<p>39 dòlars és car per a una aplicació de control de volum. Si no utilitzes l'equalitzador, els efectes d'àudio o l'encaminament per cada aplicació, estàs pagant per funcions que mai no tocaràs.</p>

<h3>Controlador del sistema</h3>
<p>SoundSource instal·la un controlador d'àudio personalitzat del sistema anomenat ACE (Audio Capture Engine). Això funciona bé però afegeix complexitat — cal actualitzar-se amb cada macOS llançament, pot entrar en conflicte ocasional amb altres programes d'àudio i significa que estàs executant codi de tercers a nivell d'àudio del sistema. Alguns departaments d'informàtica en entorns corporatius bloquegen extensions del nucli i controladors d'àudio a nivell de sistema.</p>

<h3>Sense perfils de volum</h3>
<p>Malgrat el seu ampli conjunt de funcions, SoundSource no disposa d'un sistema de perfils. No pots desar una configuració de "Meeting" i una de "Focus" i canviar entre elles. Cada vegada que la teva situació canvia, ajustes cada lliscador manualment.</p>

<h3>Sense auto-ducking</h3>
<p>SoundSource no redueix automàticament l'àudio en segon pla quan t'uneixes a una trucada. No hi ha detecció de trucades, ni ajust automàtic de volum, ni flux de treball mans lliures per al cas d'ús més comú d'una taula de mescles per aplicació.</p>

<h2>SoundDial: centrat en allò que la majoria de gent realment necessita</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> adopta un enfocament diferent: fer la feina bàsica perfectament, saltar-se les funcions que la majoria de gent no necessita i afegir les funcions del flux de treball que SoundSource no veu.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Característica</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volum per aplicació</td>
  <td style="text-align:center;padding:10px 12px;">Sí (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Silenci per aplicació</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Perfils de volum</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Memòria de volum</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">EQ per aplicació</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Encaminament de sortida per aplicació</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Controlador d'àudio del sistema</td>
  <td style="text-align:center;padding:10px 12px;">No cal</td>
  <td style="text-align:center;padding:10px 12px;">Requisit (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Dreceres de teclat</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Preu</td>
  <td style="text-align:center;padding:10px 12px;">14,99 € únic</td>
  <td style="text-align:center;padding:10px 12px;">39 dòlars</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — una alternativa més lleugera i enfocada a SoundSource amb perfils de volum i auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Quina hauries de triar?</h2>

<ul>
  <li><strong>Tria SoundSource si:</strong> Necessites equalitzador per aplicació, cadenes d'efectes d'àudio o encaminament de sortida per aplicació. Ets podcaster, streamer o professional de l'àudio. No et molesta el preu ni el controlador del sistema.</li>
  <li><strong>Tria <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> si:</strong> Vols control de volum per aplicació amb perfils i auto-ducking. Vols alguna cosa més lleugera que no instal·li un controlador del sistema. Vols gastar menys. Ets un treballador remot, jugador, estudiant o qualsevol persona que només vulgui rebutjar Slack sense afectar Zoom.</li>
</ul>

<p>SoundDial està disponible a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — això vol dir que Apple l'ha revisat, l'ha adoctrinat per seguretat i s'instal·la/desinstal·la netament com qualsevol aplicació de l'App Store. No es poden descarregar DMGs de webs aleatòries, no es pot instal·lar controladors del sistema, no es pot atorgar permisos d'extensió del nucli. Compra única, sense subscripció.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac volum massa alt a la configuració més baixa? Com fer-se encara més silenciós",
    description:
      "Fins i tot al volum més baix, el teu Mac sona massa fort — especialment a altes hores de la nit amb auriculars. Aquí tens com aconseguir un control de volum més fi i baixar del mínim.",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>És mitjanit. Portes uns auriculars. Prems la tecla de baixar el volum fins que arribes al punt més baix — una barra. Encara sona massa fort. La següent premsa és muda. No hi ha res entremig. Vols el volum al 3% però macOS puja del ~6% al 0%.</p>

<p>Aquesta és una queixa habitual amb auriculars i altaveus sensibles. Els 16 passos de volum de macOS són massa gruixuts — el pas audible més baix encara és més fort que el que necessites per a una escolta tranquil·la a última hora de la nit.</p>

<h2>Correcció incorporada: ajust de volum en quart de to</h2>

<p>La majoria Mac usuaris no ho saben: pots obtenir <strong>Control de volum 4 vegades més fi</strong> Utilitzant un modificador de teclat.</p>

<p>Aguanta <strong>Opció + Canvi</strong> i prem les tecles de volum amunt/baix. Cada premsa ajusta el volum en un quart d'un pas normal — donant-te 64 passos en lloc de 16.</p>

<p>Això et permet trobar els nivells de volum entre les marques normals. Aquest espai entre "una barra" i "silenciar" ara té tres nivells addicionals on pots caure. Per escoltar auriculars a última hora de la nit, això sovint és suficient per trobar un nivell còmode.</p>

<h2>Per què alguns continguts són més forts que d'altres al mateix volum</h2>

<p>Potser notaràs que algunes aplicacions sonen més fortes que d'altres fins i tot amb el mateix volum del sistema. Spotify en un bar sona més fort que un vídeo de YouTube en un sol bar. Això és perquè cada aplicació envia àudio a diferents nivells, i el volum del sistema els escala proporcionalment.</p>

<p>Una cançó masteritzada a 0 dB (màxim) i un podcast gravat a -15 dB sonaran molt diferents al mateix volum del sistema. La cançó és 15 dB més forta — que per a les teves orelles es percep com aproximadament tres vegades més alta.</p>

<h2>La veritable solució: volum per aplicació per a un control fi</h2>

<p>La drecera de quart de pas ajuda, però encara ajusta totes les aplicacions per igual. Si Spotify al graó més baix sona massa fort però la trucada de Zoom al pas més baix és massa baixa, estàs encallat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et dona controls de volum per aplicació amb un control detallat — cada lliscador es mou en increments de l'1% del 0% al 200%. Pots posar Spotify al 5% i Zoom al 40% al mateix temps. El nivell de control és molt més fi que els 16 passos del sistema d'macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial control de volum detallat per aplicació amb increments de l'1% a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Per a l'ús nocturn dels auriculars:</p>
<ul>
  <li>Ajusta el volum del sistema a un nivell moderat (40-50%)</li>
  <li>Utilitza SoundDial per ajustar cada aplicació exactament al nivell que vols</li>
  <li>Spotify al 8% — música de fons gairebé imperceptible</li>
  <li>Navegador al 15% — prou silenciós per a vídeos nocturns</li>
  <li>Notificacions silenciades — cap sorpresa de pings forts</li>
</ul>

<p>Guarda-ho com un perfil de "Nit" i aplica'l amb un sol clic quan et posis els auriculars fora d'hores.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Un AirPod més sorollós que l'altre? Totes les solucions explicades",
    description:
      "L'AirPod esquerre és més silenciós que el dret (o a l'inrevés). Aquí tens totes les causes — des del cerumen fins als ajustos d'equilibri macOS — i com solucionar-ho.",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>Un AirPod sona bé. L'altra és notablement més silenciosa. La música sembla descentrada. Les veus semblen venir d'un costat. Aquesta és una de les queixes més comunes dels AirPods, i normalment té una solució senzilla.</p>

<h2>1. Neteja els teus AirPods</h2>

<p>La causa més comuna és física: cerumen o restes que bloquegen parcialment la malla de l'altaveu d'un AirPod. Fins i tot una capa fina d'acumulació pot reduir significativament el volum d'aquest costat.</p>

<p><strong>Com netejar:</strong></p>
<ul>
  <li>Utilitza un raspall sec i de truges suaus (un raspall de dents net va bé) per raspallar suaument la malla de l'altaveu</li>
  <li>Per a les puntes de silicona dels AirPods Pro: treu la punta i neteja tant la punta com la malla de l'altaveu per sota</li>
  <li>Utilitza un drap sec i sense pelussa per a l'exterior</li>
  <li><strong>No utilitzis:</strong> aigua, alcohol, aire comprimit o objectes punxeguts — aquests poden danyar la malla de l'altaveu o empènyer les deixalles més endins</li>
</ul>

<p>Després de netejar, prova ambdós AirPods. En la majoria dels casos, això soluciona el problema immediatament.</p>

<h2>2. Comprova l'equilibri d'àudio a macOS</h2>

<p>macOS té un control lliscant d'equilibri d'àudio esquerra-dreta que podria estar descentrat:</p>

<ol>
  <li>Ves a <strong>Configuració del sistema → Accessibilitat → àudio</strong></li>
  <li>Troba el <strong>Equilibri</strong> Slider</li>
  <li>Assegura't que estigui exactament centrada entre l'esquerra i la dreta</li>
</ol>

<p>Si el control lliscant s'ha desplaçat cap a un costat, aquest és el problema. Centra-la i el volum hauria de ser igual a ambdós costats.</p>

<p>També comprova <strong>Configuració del sistema → so</strong> — algunes versions macOS també tenen un control lliscant d'equilibri a la configuració del dispositiu de sortida.</p>

<h2>3. Reinicia els teus AirPods</h2>

<p>Si la neteja i l'equilibri no ajuden, prova de restablir els teus AirPods al seu estat de fàbrica:</p>

<ol>
  <li>Posa els dos AirPods a la funda de càrrega</li>
  <li>Tanca la tapa i espera 30 segons</li>
  <li>Obre la tapa</li>
  <li>Prem i mantén premut el botó de configuració a la part posterior de la funda durant 15 segons fins que la llum d'estat parpellegi en ambre i després en blanc</li>
  <li>Torna a emparellar els AirPods amb el teu Mac (Configuració del sistema → Bluetooth)</li>
</ol>

<p>Això reinicia qualsevol calibratge d'àudio emmagatzemat i pot corregir desequilibris de volum al costat del programari.</p>

<h2>4. Comprova l'àudio mono</h2>

<p>Si la funció d'accessibilitat Mono Audio de macOS està activada, l'àudio estèreo es barreja en un sol canal i s'envia a ambdós AirPods per igual. Tot i que això no hauria de causar diferències de volum, pot canviar la manera com sona cert contingut i fer que una banda sembli "diferent".</p>

<p>Comprova: Configuració del sistema → accessibilitat → àudio → assegura't que "Àudio mono" estigui desactivat (a menys que ho necessitis).</p>

<h2>5. Interferències Bluetooth</h2>

<p>Els AirPods es comuniquen amb el teu Mac via Bluetooth, i cada AirPod també es comunica amb l'altre. Si hi ha interferències Bluetooth significatives (routers WiFi, hub USB 3.0, altres dispositius Bluetooth), un AirPod podria rebre un senyal més feble.</p>

<p><strong>Correcció:</strong> Acosta't a la teva Mac. Desconnecta els dispositius Bluetooth que no utilitzis. Si estàs a prop d'un hub USB 3.0, prova de moure'l lluny — se sap que l'USB 3.0 interfereix amb el Bluetooth de 2,4 GHz.</p>

<h2>6. Problema de maquinari</h2>

<p>Si cap de les solucions anteriors funciona, un AirPod podria tenir un defecte de maquinari — un controlador d'altaveu degradat o una malla danyada. Això passa amb el temps amb un ús intensiu.</p>

<p><strong>Correcció:</strong> Contacta amb el suport d'Apple o visita una Apple Store. Si els teus AirPods estan en garantia o AppleCare+, Apple substituirà l'AirPod afectat. També hi ha recanvis individuals d'AirPods disponibles per a la compra fora de garantia.</p>

<h2>Millor equilibri d'àudio amb el control de volum per aplicació</h2>

<p>Tot i que el control de volum per aplicació no arregla un desequilibri de maquinari entre els AirPods, resol un problema relacionat: quan algunes aplicacions són més sorolloses que d'altres als teus AirPods, pot exagerar la percepció d'un desequilibri.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet configurar cada aplicació a un nivell de volum consistent. Quan Spotify està al 40%, Zoom al 100% i Safari al 60%, saps exactament què esperar de cada aplicació — cap salt de volum sobtat que faci que un AirPod soni més fort perquè una notificació acaba de sonar al 100%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix i l'àudio en streaming estan massa baixos a Mac? Com arreglar-ho",
    description:
      "El diàleg és en un silenci xiuxiuejós, després una explosió sacseja l'habitació. Aquí tens com arreglar els nivells d'àudio en streaming a Mac — i augmentar el contingut silenciós més enllà del 100%.",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>Estàs veient una pel·lícula a Netflix. Dos personatges estan mantenint una conversa — gairebé no els sents. Puges el volum. Comença una escena d'acció. Les explosions són ensordidores. Busques ràpidament la tecla de volum. Aquesta és la queixa més habitual sobre l'àudio en streaming, i és pitjor amb els altaveus integrats de Mac.</p>

<p>El problema no és el teu Mac. És com es masteritzen les pel·lícules i les sèries de televisió — i el fet que macOS no et dona cap eina per arreglar-ho.</p>

<h2>Per què l'àudio en streaming té canvis de volum molt forts</h2>

<p>Les pel·lícules i sèries de televisió es masteritzen amb l'alta <strong>Rang dinàmic</strong> — la diferència entre els sons més suaus i els més forts. En un teatre amb altaveus potents i un subwoofer, això sona increïble. Els xiuxiueigs són íntims, les explosions són viscerals.</p>

<p>En els altaveus de 2 polzades d'un MacBook, aquest rang dinàmic esdevé un inconvenient. Les parts silencioses estan per sota del que els altaveus petits poden reproduir clarament, mentre que les parts més fortes arriben als límits físics de l'altaveu. Acabes ajustant constantment el volum — pujant el volum per al diàleg, baixant el volum per l'acció.</p>

<h2>Solució 1: Activa "Redueix sons forts" a l'aplicació de streaming</h2>

<p>Alguns serveis de streaming tenen una funció de normalització de volum:</p>
<ul>
  <li><strong>Netflix:</strong> Durant la reproducció, fes clic a la icona de l'altaveu → comprova si hi ha l'opció "Redueix sons forts" (disponible al navegador i a l'aplicació nativa)</li>
  <li><strong>Apple TV+:</strong> Configuració → accessibilitat → "Reduir sons forts"</li>
  <li><strong>Disney+:</strong> Actualment no hi ha cap configuració equivalent disponible</li>
  <li><strong>Amazon Prime Video:</strong> Funció "Augment de Diàleg" (si està disponible per al títol)</li>
</ul>

<p>Aquestes característiques comprimeixen el rang dinàmic — fent que els sons suaus siguin més forts i els sons forts més baixos. El resultat és un volum més uniforme que funciona millor en altaveus petits i a nivells baixos d'escolta.</p>

<h2>Solució 2: Comprova l'amplificador de so del teu Mac</h2>

<p>En alguns models Mac, macOS aplica processament d'àudio als altaveus integrats. Comprova la configuració del sistema → el so per veure si hi ha opcions de millora per al teu dispositiu de sortida. En els models MacBook Pro de 14" i 16", el sistema d'altaveus té un processament d'àudio espacial que pot afectar el volum percebut.</p>

<h2>Solució 3: Utilitza auriculars amb cable</h2>

<p>Els auriculars eviten completament el problema de la mida dels altaveus. Fins i tot uns auriculars amb cable barats poden reproduir diàlegs baixos clarament perquè el transductor està just al costat del timpà. El rang dinàmic, que és un problema als altaveus petits, esdevé un avantatge en els auriculars.</p>

<h2>Solució 4: Augmentar l'àudio en streaming més enllà del 100%</h2>

<p>Si el contingut és simplement massa baix — fins i tot amb la normalització activada i el volum al màxim — necessites amplificació més enllà del que macOS proporciona.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet potenciar qualsevol aplicació a <strong>200%</strong>. Si Safari o l'aplicació de Netflix són massa silencioses, arrossega el seu control lliscant més enllà del 100%. L'àudio s'amplifica abans d'arribar als altaveus, duplicant efectivament el volum màxim només per a aquesta aplicació.</p>

<img src="/apps/sounddial.png" alt="SoundDial pujant l'àudio de Netflix al 180% en Mac per a diàlegs més clars i àudio en streaming" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Això és especialment útil quan:</p>
<ul>
  <li>Veient una pel·lícula estrangera tranquil·la on el diàleg és suau</li>
  <li>Streaming de contingut antic que es va masteritzar a nivells més baixos</li>
  <li>Utilitzar altaveus de MacBook en un entorn sorollós</li>
  <li>Un servei de streaming és significativament més silenciós que un altre</li>
</ul>

<p>I com que SoundDial controla cada aplicació de manera independent, augmentar Netflix al 150% no fa que Spotify o Slack siguin més forts. Cada aplicació es manté al seu propi nivell.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac Configuració d'àudio per a treball remot: La guia completa",
    description:
      "Trucades, música, notificacions i temps de concentració — tot en un sol Mac. Aquí tens com configurar el teu àudio perquè res lluiti per la teva atenció.",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Treballar a distància en un Mac significa que el teu ordinador és alhora el telèfon de l'oficina, la ràdio, el centre de notificacions i la teva estació de treball profund. Són quatre modes d'àudio fonamentalment diferents, i macOS els tracta tots igual: un sol control de volum, tot al mateix nivell, sense manera de prioritzar.</p>

<p>Aquesta guia explica com configurar l'àudio del teu Mac per a la feina remota perquè les trucades siguin clares, la música sigui present però no distreu, les notificacions siguin subtils i el temps de concentració sigui realment silenciós.</p>

<h2>Els quatre modes d'àudio del treball remot</h2>

<h3>1. Mode de reunió</h3>
<p>Estàs en una trucada de Zoom o Teams. La decisió ha de ser claríssima. La música hauria de ser silenciosa o gairebé inaudible. El Slack no hauria de ressonar a l'orella.</p>

<h3>2. Mode d'enfocament</h3>
<p>Estàs fent una feina profunda. La música de fons a un nivell baix t'ajuda a concentrar-te. Les notificacions haurien de ser gairebé imperceptibles — prou presents perquè notis un missatge urgent, prou baixes perquè no es trenquin el flux.</p>

<h3>3. Mode col·laboratiu</h3>
<p>Estàs disponible per missatges, monitoritzant Slack, potser veient un vídeo d'entrenament. Tot pot estar a nivells moderats. Notificacions a volum normal.</p>

<h3>4. Mode de trencament</h3>
<p>Música a tot volum. YouTube a tot volum. Les notificacions poden esperar.</p>

<h2>Configuració de maquinari</h2>

<h3>La qüestió del micròfon</h3>
<p>Si utilitzes AirPods per a les trucades, considera utilitzar un micròfon separat. Quan els AirPods s'utilitzen tant com a micròfon com a altaveus, macOS canvia al còdec Bluetooth SCO de menor qualitat, que redueix tant la qualitat d'àudio com el volum. Utilitzar el micròfon integrat del teu Mac (o un micròfon USB) mantenint els AirPods com a sortida evita això completament.</p>

<p>Per a la millor qualitat de trucada: un micròfon USB o uns auriculars amb micròfon integrat. El Blue Yeti, l'Elgato Wave o fins i tot uns auriculars USB bàsics sonaran molt millor que el micròfon dels AirPods per als teus companys.</p>

<h3>Dispositius de sortida</h3>
<p>Molts treballadors remots utilitzen dos dispositius de sortida:</p>
<ul>
  <li><strong>Auriculars</strong> Per a les trucades — privacitat, sense eco, àudio clar</li>
  <li><strong>Oradors</strong> per a la música sense temps de trucada — omple l'habitació, és més còmode durant períodes llargs</li>
</ul>

<p>Fes clic a Opció a la icona de So a la barra de menú per canviar ràpidament entre dispositius. O utilitza el commutador de dispositius integrat de SoundDial, que posa els teus dispositius de sortida just al costat dels controls de volum.</p>

<h2>Configuració de programari</h2>

<h3>Gestió de notificacions</h3>
<p>Ves a Configuració del sistema → Notificacions. Per a cada aplicació, decideix si necessites notificacions sonores:</p>
<ul>
  <li><strong>Mantingueu els sons activats:</strong> Slack (si ets receptiu), Calendari (reunions), Missatges</li>
  <li><strong>Apaga els sons:</strong> Correu (comprova el teu horari), Notícies, aplicacions socials</li>
</ul>

<p>Això redueix el nombre d'aplicacions que fan sons sorpresa, però no et dóna control de volum — només encendre/apagar.</p>

<h3>Modes d'enfocament</h3>
<p>Crea almenys dos modes d'enfocament a la configuració del sistema → enfocament:</p>
<ul>
  <li><strong>"Reunió"</strong> — silenciar totes les notificacions excepte l'aplicació de calendari</li>
  <li><strong>"Treball de concentració"</strong> — permetre notificacions dels DMs de Slack i del teu responsable, silenciar la resta</li>
</ul>

<p>Els modes d'enfocament gestionen la supressió de notificacions. Per controlar el volum de l'àudio, necessites alguna cosa més.</p>

<h2>La peça que falta: el control de volum per aplicació</h2>

<p>Control dels modes d'enfocament <em>que</em> Les notificacions arriben però no <em>Com de fort</em> Qualsevol cosa ho és. Encara tens un control lliscant de volum per a tot. Si vols Slack al 15%, Spotify al 35% i Zoom al 100% — macOS no pots fer-ho.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Omple aquest buit donant a cada aplicació el seu propi control lliscant de volum. Configura l'àudio de la teva feina remota exactament com vols:</p>

<img src="/apps/sounddial.png" alt="SoundDial configuració d'àudio de treball remot — diferents nivells de volum per a Zoom, Spotify i Slack a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Desa perfils per a cada mode</h3>

<p><strong>Perfil de la reunió:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>Spotify: silenciat</li>
  <li>Slack: silenciat</li>
  <li>Navegador: silenciat</li>
</ul>

<p><strong>Perfil de Focus Work:</strong></p>
<ul>
  <li>Spotify: 30%</li>
  <li>Slack: 10%</li>
  <li>Zoom: 80% (per si algú truca)</li>
  <li>Navegador: 40%</li>
</ul>

<p><strong>Perfil col·laboratiu:</strong></p>
<ul>
  <li>Tot al 50-70%</li>
  <li>Slack: 30%</li>
</ul>

<p>Canvia entre perfils amb un sol clic. Quan comença una trucada, l'auto-ducking de SoundDial automàticament redueix tot excepte l'aplicació de trucades. Quan acaba, els nivells del teu perfil es restauren.</p>

<h2>El flux de treball diari</h2>

<ol>
  <li>Comença a treballar → aplica el perfil de "Focus Work"</li>
  <li>Uneix-te a una reunió → l'auto-ducking ho gestiona automàticament (o aplica el perfil "Meeting")</li>
  <li>Els finals de la reunió → els volums es restauren als nivells de Focus Work</li>
  <li>A la pausa de dinar → aplicar el perfil de "Pausa", pujar la música</li>
  <li>Treball profund a la tarda → tornar a la Concentració</li>
</ol>

<p>Esforç manual total: dos o tres clics de perfil al dia. La resta és automàtica.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Com evitar que les pestanyes del navegador es reprodueixin automàticament a Mac",
    description:
      "Una pestanya de fons comença a reproduir àudio de sobte. Anuncis, vídeos, llocs de notícies — aquí tens com silenciar pestanyes descontrolades i controlar l'àudio del navegador a macOS.",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>Tens vint pestanyes obertes. Treballes en un d'ells. De sobte — l'àudio comença a sonar des d'algun lloc. Un anunci en vídeo. Un clip de notícies que es reprodueix automàticament. Una pestanya que vas obrir fa una hora i que va decidir que ara era el moment de començar a fer soroll. Busques ràpidament quina pestanya és, clicant una a una.</p>

<p>Reproduir àudio automàticament a les pestanyes del navegador és una de les experiències més molestes en qualsevol ordinador, i és pitjor en Mac perquè no macOS manera de silenciar una aplicació específica (i molt menys una pestanya concreta) sense silenciar-ho tot.</p>

<h2>Desactiva la reproducció automàtica a Safari</h2>

<p>Safari té els millors controls de reproducció automàtica integrats de qualsevol navegador:</p>

<ol>
  <li>Obre Safari → Configuració (⌘,) → pestanya de llocs web</li>
  <li>Selecciona "Auto-Play" a la barra lateral esquerra</li>
  <li>Configura el valor per defecte a la part inferior a "Mai reproduir automàticament" o "Aturar mitjans amb so"</li>
</ol>

<p>"Atura els mitjans amb so" és la millor opció — bloqueja vídeos que es reprodueixen automàticament amb àudio però permet la reproducció automàtica silenciada (que molts llocs utilitzen per a vídeos decoratius de fons). "Mai reprodueixi automàticament" ho bloqueja tot.</p>

<p>També pots configurar la configuració per lloc en aquest mateix panell si vols permetre la reproducció automàtica en llocs específics com YouTube o Netflix.</p>

<h2>Desactiva la reproducció automàtica a Chrome</h2>

<p>Els controls de reproducció automàtica de Chrome són menys detallats:</p>

<ol>
  <li>Ves a <code>chrome://settings/content/sound</code></li>
  <li>Activa "Els llocs poden reproduir so" per determinar el comportament per defecte</li>
  <li>Afegeix llocs específics a la llista de "Silenci" per silenciar-los permanentment</li>
</ol>

<p>Chrome també et permet silenciar pestanyes individuals: fes clic dret en una pestanya → "Silenciar el lloc." Això silencia tot l'àudio d'aquell lloc fins que el retires del silenci.</p>

<h2>Silencia una pestanya ràpidament</h2>

<p>Tant Safari com Chrome mostren una icona d'altaveu a les pestanyes que produeixen àudio. A Safari, fes clic a la icona de l'altaveu a la pestanya per silenciar-lo. A Chrome, fes clic dret a la pestanya i selecciona "Silenciar el lloc".</p>

<p>Això funciona per a una pestanya a la vegada, però si tens diverses pestanyes sorolloses, les vas passant una per una.</p>

<h2>El problema més ampli: àudio del navegador vs. tot la resta</h2>

<p>Fins i tot amb la reproducció automàtica desactivada i les pestanyes silenciades, potser voldràs controlar com de sorollós és el teu navegador respecte a altres aplicacions. Potser estàs mirant un tutorial de YouTube mentre estàs en una trucada de Zoom — vols el tutorial al 30% i el Zoom al 100%. O estàs posant música de fons en una pestanya del navegador i competeix amb el teu Spotify.</p>

<p>macOS tracta tot el navegador com una sola aplicació amb un sol volum. No pots fer que una pestanya sigui més silenciosa que una altra a nivell de sistema. Però tu <em>pot</em> Fes que tot el navegador sigui més silenciós que altres aplicacions.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Dóna al teu navegador el seu propi control lliscant de volum, independent de qualsevol altra aplicació. Redueix Safari al 30% mantenint Zoom al 100%. Silencia completament Chrome mentre segueixes reproduint Spotify. Un clic.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlar el volum del navegador de manera independent d'altres aplicacions a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Aquesta és la manera més ràpida de gestionar una pestanya sorpresa que es reprodueix automàticament: en comptes de buscar quina pestanya fa soroll, fes clic SoundDial a la barra de menú i silencia el navegador. Tot la resta segueix sonant. Quan hagis trobat i tancat la pestanya problemàtica, desactiva el silenci del navegador i el seu volum torna al lloc on era.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "El volum de Discord és massa alt (o suau) a Mac? Com arreglar-ho",
    description:
      "El Discord està sonant a tot volum per la teva partida, o està massa baix per sentir els companys. Aquí tens com controlar el volum de Discord de manera independent de la resta de macOS.",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discord té dos problemes de volum a Mac. O bé és massa fort — els sons de notificació sonen a tot volum sobre el teu joc i la música — o és massa baix — no pots sentir els teus companys per l'àudio del partit. El problema és que macOS no et permet ajustar el volum de Discord de manera independent. Està bloquejat al mateix control lliscant del sistema que la resta.</p>

<h2>Els controls de volum integrats de Discord</h2>

<p>Discord té diversos ajustos interns de volum. Abans de mirar solucions externes, assegura't que aquestes estiguin configurades:</p>

<h3>Volum de sortida</h3>
<p>Ves a Discord → Configuració (icona d'engranatge) → Veu i Vídeo. El control lliscant "Volum de sortida" controla com de fort sona Discord per a tu. Si Discord està massa silenciós, assegura't que sigui al 100%. Si sona massa fort, baixa-ho aquí.</p>

<p><strong>Limitació:</strong> Això controla la mescla interna de Discord, però no canvia el volum de Discord <em>en relació amb altres aplicacions</em>. Si el teu joc està al 80% del volum del sistema i Discord també al 80%, ajustar el control lliscant intern de Discord canvia l'equilibri — però encara estàs limitat a un sol volum del sistema per a tot.</p>

<h3>Volum per usuari</h3>
<p>Fes clic dret a qualsevol usuari en un canal de veu → "Volum d'usuari." Pots ajustar usuaris individuals del 0% al 200%. Això és útil si una persona és més sorollosa o més baixa que les altres, però no resol l'equilibri general entre Discord i altres aplicacions.</p>

<h3>Volum de notificacions</h3>
<p>Discord → Configuració → notificacions. Pots desactivar sons específics de notificació (missatge, sord, silenci, unir-te/sortir) individualment. Això redueix el nombre de sons molestos però no et permet baixar-ne el volum — només encendre'ls o apagar-los.</p>

<h2>El veritable problema: l'equilibri de volum a nivell de sistema</h2>

<p>Els controls interns de Discord ajusten la mescla de Discord. Però el veritable problema és l'equilibri entre Discord i tot el que tens a la Mac: el teu joc, la teva música, el teu navegador. macOS et dóna un control lliscant per a cadascuna.</p>

<p>Per ajustar el volum de Discord respecte al teu joc, necessites control de volum per aplicació — una cosa que macOS no ofereix de manera nativa.</p>

<h2>Arregla-ho amb SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Dóna a Discord el seu propi control lliscant de volum a la barra de menú, independent de qualsevol altra aplicació. Configura Discord exactament al nivell que vols — 100% per a xat de veu clar, 40% per a un fons subtil, o silenciat completament — sense tocar el joc, la música ni res més.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlar el volum de Discord de manera independent del joc i la música a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuracions comunes</h3>

<p><strong>Jugar amb Discord:</strong></p>
<ul>
  <li>Discord: 100% (sempre escolto clarament els companys d'equip)</li>
  <li>Joc: 40% (immersiu però no aclaparador)</li>
  <li>Spotify: 15% (música de fons subtil)</li>
</ul>

<p><strong>Passar l'estona pel xat de veu:</strong></p>
<ul>
  <li>Discord: 80%</li>
  <li>Navegador/YouTube: 60%</li>
  <li>La resta: normal</li>
</ul>

<p><strong>Treball de focus (Discord de fons):</strong></p>
<ul>
  <li>Discord: silenciat o 10%</li>
  <li>Spotify: 50%</li>
  <li>Slack: 15%</li>
</ul>

<p>Desa cadascuna com a <strong>Perfil de volum</strong> en SoundDial i canvia amb un sol clic. No cal reajustar sis lliscadors cada vegada que canvies d'activitat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Com canviar ràpidament la sortida d'àudio a Mac (sense haver de remenar a la configuració)",
    description:
      "Canviar entre altaveus, auriculars i monitors en Mac requereix massa clics. Aquí tens maneres més ràpides de canviar el teu dispositiu de sortida d'àudio a l'instant.",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>Desconnectes els auriculars i vols que l'àudio vagi als altaveus. O connectes els AirPods i macOS tries el dispositiu equivocat. O entres a una sala de reunions i has de canviar al ponent de la conferència. Cada vegada és: Configuració del sistema → So → Sortida → desplaça't → clic. Massa clics per a una cosa que hauria de requerir un.</p>

<p>Aquí tens totes les maneres de canviar la sortida d'àudio més ràpidament a Mac — des de dreceres integrades fins a eines a la barra de menú que eliminen completament els clics.</p>

<h2>Mètode 1: Fes clic opcional a la icona de volum</h2>

<p>Aquest és el mètode integrat més ràpid i la majoria de gent no en sap res.</p>

<p>Aguanta <strong>Opció (⌥)</strong> I fes clic a la icona de volum/so a la barra de menú. En lloc del control lliscant de volum normal, obtens una llista de tots els dispositius de sortida disponibles. Fes clic al que vulguis. Fet.</p>

<p>Si no veus la icona de so a la barra de menú, activa-la: Configuració del sistema → Centre de Control → So → selecciona "Mostrar sempre a la barra de menú."</p>

<p><strong>Limitació:</strong> Això només mostra els dispositius de sortida — no pots ajustar el volum per aplicació ni veure què està reproduint actualment des d'aquest menú.</p>

<h2>Mètode 2: Centre de Control</h2>

<p>Fes clic a la icona del Centre de Control (la icona de dos interruptors) a la barra de menú → fes clic a la secció de So → fes clic al nom actual del dispositiu per veure totes les sortides disponibles.</p>

<p><strong>Limitació:</strong> Són tres clics en comptes d'un. Una mica més lent que fer clic a l'icona de volum amb Option.</p>

<h2>Mètode 3: Drecera de configuració del sistema</h2>

<p>Pots fixar So a la barra lateral de Configuració del Sistema de nivell superior, però encara cal navegar fins a la pestanya de Sortida i seleccionar un dispositiu. No ràpid.</p>

<h2>Mètode 4: Drecera de teclat (amb configuració)</h2>

<p>macOS no té una drecera de teclat integrada per canviar de dispositius d'àudio. Tanmateix, pots crear-ne un utilitzant Automator o Shortcuts:</p>
<ol>
  <li>Obre l'aplicació Shortcuts</li>
  <li>Crea una drecera nova que executi un script de shell: <code>SwitchAudioSource -s "Nom del dispositiu"</code> (requereix el <code>switchaudio-osx</code> eina de línia de comandes de Homebrew)</li>
  <li>Assigna una drecera de teclat a la drecera</li>
</ol>
<p>Això funciona però requereix Homebrew, una eina de línia d'ordres i configuració manual per dispositiu. No és pràctic per a la majoria d'usuaris.</p>

<h2>Mètode 5: el commutador de dispositius integrat de SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Inclou un selector de dispositius de sortida directament a la barra de menú — juntament amb els controls lliscants de volum per a cada aplicació. Un clic per obrir SoundDial, un clic per canviar de dispositiu. No cal remenar a la configuració del sistema.</p>

<img src="/apps/sounddial.png" alt="SoundDial amb commutació de dispositius de sortida d'àudio i control de volum per aplicació en un únic panell de la barra de menús" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>L'avantatge de canviar de dispositiu dins SoundDial: pots canviar la sortida <em>i</em> Ajusta els volums per aplicació al mateix panell. Canvia als AirPods i immediatament baixa Spotify mentre augmentes la trucada — tot sense sortir del popover.</p>

<p>Combinat amb SoundDial's <strong>Memòria de volum</strong> cada dispositiu de sortida pot recordar els seus propis nivells de volum per aplicació. Canvia als altaveus i s'aplica l'equilibri de volum dels teus "altaveus". Canvia als auriculars i s'aplica l'equilibri dels teus "auriculars". No hi ha cap ajust manual.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Arregla els cruixits i cruixits d'àudio a la Mac: Guia completa",
    description:
      "L'àudio de la teva Mac crepita, esclata o tartamudeja — durant la música, les trucades o la reproducció de vídeo. Aquí tens totes les causes i solucions conegudes per macOS errors d'àudio.",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>Estàs escoltant música i sents un pop. Llavors un cruixit. Després hi ha un entrebancari on l'àudio es talla durant una fracció de segon i torna. No és la cançó — és la teva Mac. El cruixit d'àudio en macOS és esgotadorament comú, i té almenys sis causes diferents.</p>

<p>Aquesta guia cobreix totes les causes conegudes de crepitacions, cruixits i entrebancs d'àudio en Mac, des de solucions de programari fins al problema de maquinari que hauries de conèixer.</p>

<h2>1. Reiniciar l'àudio del nucli (la solució ràpida)</h2>

<p>La solució més efectiva per a un cruixit sobtat d'àudio és reiniciar el dimoni d'àudio de macOS. Obre la terminal i corre:</p>
<p><code>Sudo Killall Coreaudiod</code></p>

<p>L'àudio es talla durant un segon i es reinicia. En molts casos, el cruixit s'atura immediatament. Això funciona perquè coreaudiod — el procés que gestiona tot l'àudio de macOS — pot entrar en un estat corrupte després de cicles de repòs/despertar, connexions Bluetooth o bloquejos d'aplicacions.</p>

<p>Si això ho arregla, el cruixit va ser causat per un problema temporal del dimoni. Si torna regularment, segueix llegint per trobar solucions definitives.</p>

<h2>2. Sobrecàrrega de la CPU</h2>

<p>El cruixit d'àudio sovint es correlaciona amb un alt ús de la CPU. Quan la CPU del teu Mac està al màxim, no pot processar els buffers d'àudio prou ràpid, causant buits que semblen cruixits i cruixits.</p>

<p><strong>Comprova:</strong> Obre el Monitor d'Activitat (Aplicacions → Utilitats) i mira la pestanya de la CPU. Si veus un ús constant alt de la CPU (80%+), probablement aquesta sigui la causa.</p>

<p><strong>Correcció:</strong> Tanca aplicacions innecessàries, especialment les que consumeixen molts recursos com navegadors amb moltes pestanyes, editors de vídeo o màquines virtuals. Si un procés específic consumeix una CPU excessiva, considera si es comporta normalment o si cal reiniciar-lo.</p>

<h2>3. Problemes d'àudio Bluetooth</h2>

<p>El Bluetooth és la font més comuna de crepitar per als usuaris sense fils d'auriculars i altaveus. Diverses coses poden causar-ho:</p>

<ul>
  <li><strong>Interferències:</strong> El WiFi, dispositius USB 3.0 i altres dispositius Bluetooth poden interferir amb la teva connexió d'àudio. Prova d'acostar-te a la Mac o eliminar fonts d'interferència.</li>
  <li><strong>Commutació de còdecs:</strong> Quan una aplicació activa el teu micròfon, macOS canvia d'AAC a còdec SCO. Aquesta transició pot provocar un breu cruixit o cruixit.</li>
  <li><strong>Congestió Bluetooth:</strong> Si tens molts dispositius Bluetooth connectats simultàniament, la ràdio pot tenir dificultats. Desconnecta els dispositius que no estàs utilitzant.</li>
</ul>

<p><strong>Correcció:</strong> Reinicia Bluetooth mantenint premut Shift+Opció, fent clic a la icona Bluetooth a la barra de menú i seleccionant "Restablir el mòdul Bluetooth" (si està disponible). Alternativament, elimina el dispositiu de la configuració Bluetooth i torna a emparellar-lo.</p>

<h2>4. Desajust en la freqüència de mostreig</h2>

<p>Si el teu dispositiu de sortida d'àudio funciona a una taxa de mostreig diferent de la que s'està reproduint, macOS ha de tornar a mostrejar en temps real. Aquest remostreig pot introduir artefactes — especialment en mides de buffer més baixes.</p>

<p><strong>Comprova:</strong> Obre la configuració d'àudio MIDI (Aplicacions → utilitats), selecciona el dispositiu de sortida i comprova la freqüència de mostreig. Les freqüències habituals són 44,1 kHz (qualitat CD) i 48 kHz (estàndard de vídeo/streaming).</p>

<p><strong>Correcció:</strong> Configura la freqüència de mostreig perquè coincideixi amb el teu cas d'ús més comú. Per a música: 44,1 kHz. Per a vídeo/streaming: 48 kHz. Si utilitzes una interfície d'àudio USB, consulta la seva documentació per saber la taxa de mostreig i la mida del buffer òptims.</p>

<h2>5. Problemes amb la memòria intermèdia del dispositiu d'àudio USB</h2>

<p>Els dispositius d'àudio USB externs (DACs, interfícies d'àudio, auriculars USB) poden crepitar si la mida del buffer és massa petita per a la càrrega actual del teu sistema.</p>

<p><strong>Correcció:</strong> A la configuració d'àudio MIDI, selecciona el teu dispositiu USB i prova d'augmentar la mida del buffer (si hi ha l'opció disponible). En aplicacions d'àudio com Logic, Ableton o GarageBand, augmenta la mida del buffer d'E/S a les preferències d'àudio. Un buffer més gran significa una mica més de latència però menys errors d'àudio.</p>

<h2>6. macOS regressió d'actualització</h2>

<p>Algunes actualitzacions macOS introdueixen errors d'àudio. Això ha passat amb gairebé tots els grans llançaments de macOS — Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia i Tahoe han tingut sorolls d'àudio reportats després del llançament inicial.</p>

<p><strong>Correcció:</strong> Comprova si Apple ha publicat una actualització puntual (per exemple, 15.0.1, 15.1) que solucioni problemes d'àudio. També pots consultar els fòrums de desenvolupadors d'Apple i Reddit per veure si altres usuaris estan experimentant el mateix problema. Si és un error macOS conegut, normalment arriba una solució en un o dos llançaments puntuals.</p>

<h2>7. Extensions del nucli o plugins d'àudio</h2>

<p>Els controladors d'àudio de tercers, dispositius d'àudio virtuals o plugins d'àudio poden entrar en conflicte amb la pila d'àudio nativa de macOS. Això és especialment comú en programes d'àudio antics que utilitzen extensions de nucli (kexts) obsoletes en versions macOS recents.</p>

<p><strong>Correcció:</strong> Comprova si tens instal·lat algun programari d'àudio de tercers: Soundflower, BlackHole, Loopback o controladors d'interfície d'àudio més antics. Prova de desactivar-los o desinstal·lar-los temporalment per veure si el cruixit s'atura. Si és així, comprova si hi ha versions actualitzades compatibles amb la teva versió macOS.</p>

<h2>Gestionar la qualitat de l'àudio amb SoundDial</h2>

<p>Tot i que SoundDial no arregla directament el cruixit de maquinari o a nivell de sistema, pot ajudar-te a gestionar l'àudio de manera que redueixi el problema:</p>

<ul>
  <li><strong>Redueix les fonts d'àudio competidores:</strong> Fes servir SoundDial per silenciar les aplicacions que no estàs utilitzant activament. Menys fluxos d'àudio simultanis significa menys pressió de la CPU sobre el processament d'àudio.</li>
  <li><strong>Augment de volum en lloc de system max:</strong> Si tens el volum del sistema al 100% i encara poses les aplicacions més fortes, el camí d'àudio està funcionant al límit. Ús <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial's</a> Augment per aplicació per amplificar aplicacions específiques fins al 200% mentre es manté el volum del sistema en un 70-80% més còmode. Això pot reduir la distorsió a nivell de sortida del sistema.</li>
  <li><strong>Canvi ràpid de dispositiu de sortida:</strong> Si el crepitar està relacionat amb un dispositiu de sortida específic, SoundDial et permet canviar de dispositiu des del seu panell de menús sense haver de remenar a la configuració del sistema.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "El volum de Microsoft Teams és massa baix en Mac? Totes les solucions que funcionen",
    description:
      "Amb prou feines sento la gent a Teams fins i tot al volum màxim? Aquí tens totes les causes — des de la configuració de Teams fins als còdecs Bluetooth — i com augmentar l'àudio de les trucades més enllà del 100%.",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>Estàs en una reunió de Teams. El teu company està presentant-se, però la seva veu sona com si vingués d'una llauna de tres habitacions més enllà. El teu volum Mac està al 100%. El volum dels equips està al 100%. Has trobat tot el que has trobat. Encara massa silenciós.</p>

<p>El baix volum a Microsoft Teams és una de les queixes d'àudio Mac més comunes en entorns corporatius. Les causes són diferents de Zoom, i algunes de les correccions són específiques de Teams. Repassem-los tots.</p>

<h2>1. Comprova la configuració d'àudio de Teams</h2>

<p>Fes clic a la icona del teu perfil a Teams → Configuració → Dispositius (o Configuració → dispositius d'àudio al nou Teams).</p>
<ul>
  <li>Assegura't que el correcte sigui <strong>Orador</strong> el dispositiu està seleccionat — no un monitor desconnectat ni un dispositiu Bluetooth inactiu</li>
  <li>Fes servir la funció "Fes una trucada de prova" per verificar que l'àudio funciona a un volum raonable</li>
  <li>Comprova que la "Supressió de soroll" no estigui configurada a "Alta" — una supressió agressiva del soroll pot reduir el volum percebut de la veu</li>
</ul>

<h2>2. Equips nous vs. equips clàssics</h2>

<p>Microsoft va substituir "Classic Teams" per "New Teams" (construït sobre un marc diferent). La nova versió gestiona l'àudio de manera diferent. Si has migrat recentment:</p>
<ul>
  <li>La configuració del dispositiu d'àudio potser no s'ha mantingut — revisa de nou la selecció d'altaveus</li>
  <li>El nou Teams utilitza el processament d'àudio WebRTC, que pot comportar-se de manera diferent respecte a la versió clàssica</li>
  <li>Prova de desactivar el "mode Música" si està activat (Configuració → dispositius d'àudio) — canvia com Teams processa l'àudio entrant</li>
</ul>

<h2>3. Commutació de còdecs Bluetooth</h2>

<p>Si utilitzes AirPods o auriculars Bluetooth, unir-te a una trucada de Teams macOS obliga a canviar del còdec AAC d'alta qualitat al còdec SCO de menor qualitat (perquè Teams activa el teu micròfon). SCO redueix significativament la qualitat i el volum de l'àudio.</p>

<p><strong>Correcció:</strong> Utilitza el micròfon integrat del teu Mac o un micròfon USB mantenint els auriculars Bluetooth com a dispositiu de sortida. Ves a Teams → Configuració → Dispositius → Micròfon i selecciona "MacBook Pro Microphone" (o el teu micròfon USB). Això evita el canvi de còdec, mantenint els auriculars en mode AAC d'alta qualitat.</p>

<h2>4. Comprova macOS dispositiu de sortida i el volum</h2>

<p>Ves a Configuració del sistema → so → sortida. Verifica que el dispositiu correcte estigui seleccionat i que el volum de sortida estigui al màxim. També comprova:</p>
<ul>
  <li><strong>Seguretat dels auriculars:</strong> Configuració del sistema → so → seguretat dels auriculars. Si està activat "Redueix l'àudio fort", està limitant el volum dels auriculars.</li>
  <li><strong>Equilibri:</strong> Assegura't que el control lliscant d'equilibri esquerra-dreta estigui centrat — si està inclinat, un costat serà més silenciós.</li>
</ul>

<h2>5. Restablir l'àudio del nucli</h2>

<p>El dimoni d'àudio d'macOS de vegades es queda encallat a un nivell de sortida baix després de dormir, canviar de dispositiu o actualitzacions de Teams. Obre la terminal i corre:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>L'àudio es reinicia després d'una breu interrupció. Torna a unir-te a la reunió de Teams i comprova si el volum ha millorat.</p>

<h2>6. Augmentar el volum d'Teams més enllà del 100%</h2>

<p>Si tots els ajustos estan al màxim i Teams encara està massa baix — potser un participant té un micròfon defectuós o l'àudio de la reunió és inherentment baix — cal amplificar més enllà del que macOS normalment permet.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet augmentar el volum de qualsevol aplicació a <strong>200%</strong>, incloent-hi Microsoft Teams. Arrossega el control lliscant de Teams al 150% o 180% i l'àudio s'amplifica en temps real. Només Teams es fa més fort — la teva música, navegador i altres aplicacions es mantenen als nivells actuals.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum de trucades de Microsoft Teams més enllà del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial també ajuda amb el problema invers: si els sons de notificació de Teams són massa forts durant el temps de concentració, baixa Teams al 15% o silencia-ho completament mentre continues sonant la música. Un clic per silenciar, un clic per desactivar el silenci.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Com controlar el volum per aplicació a Mac",
    description:
      "macOS et dóna un control lliscant de volum per a tot. Aquí tens com obtenir controls de volum individuals per a cada aplicació — i per què és més important del que penses.",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>Estàs en una videotrucada. El Slack no para de sonar. Sona música de fons. Agafes la tecla de volum i — tot es torna més silenciós. La trucada, la música, les notificacions. macOS té exactament un control lliscant de volum i controla tot alhora.</p>

<p>Windows té un mesclador de volum per aplicació des de Vista el 2006. Vint anys després, encara macOS no ho fa. Si vols baixar Spotify sense afectar la teva trucada de Zoom, Apple no té cap resposta integrada per a tu.</p>

<p>Aquesta guia explica què és el control de volum per aplicació, per què macOS no el té i com aconseguir-lo.</p>

<h2>Què significa realment el volum per aplicació</h2>

<p>El volum per aplicació significa que cada aplicació del teu Mac té el seu propi control lliscant de volum independent. Pots posar Spotify al 30%, mantenir Zoom al 100%, silenciar completament Slack i deixar Safari al 50% — tot alhora. Canviar el volum d'una aplicació no té cap efecte en cap altra aplicació.</p>

<p>Això és diferent del volum del sistema, que és un únic control lliscant mestre que escala tot proporcionalment. Si el volum del teu sistema està al 50% i Spotify reprodueix a tot volum, no hi ha manera de baixar només Spotify sense un mesclador per a cada aplicació.</p>

<h2>Per què macOS no inclou això</h2>

<p>L'arquitectura d'àudio d'Apple (Core Audio) suporta absolutament el control de volum per aplicació a nivell de framework. La raó per la qual macOS no l'exposa a la interfície d'usuari és una elecció de la filosofia de disseny: Apple prefereix menys controls i una superfície més senzilla. Un control lliscant és més senzill que dotze.</p>

<p>El problema és que "més simple" deixa de ser més simple en el moment que tens més d'una font d'àudio competint per la teva atenció. Una sola tecla de volum que ho controla tot és elegant quan estàs fent una sola cosa. És activament hostil quan estàs en una trucada amb música i notificacions alhora — que és com la majoria de gent utilitza realment el seu Mac.</p>

<h2>Les solucions integrades (i per què no funcionen)</h2>

<h3>1. Controls de volum dins de l'aplicació</h3>
<p>Algunes aplicacions tenen els seus propis controls de volum — Spotify, VLC, QuickTime. Però la majoria no ho fa. En Slack no. Les pestanyes de Chrome no. Els sons del sistema no. I fins i tot quan una aplicació té un control lliscant, has d'obrir-la, trobar-la, ajustar-la i després tornar al que feies. Són cinc clics per una cosa que hauria de ser una.</p>

<h3>2. Configuració MIDI d'àudio</h3>
<p>macOS inclou la configuració d'àudio MIDI a la carpeta Utilitats. Et permet configurar dispositius d'àudio i crear dispositius agregats, però no té cap control de volum per aplicació. És una eina de configuració de dispositius, no una taula de mescladors.</p>

<h3>3. Dispositius de sortida múltiple</h3>
<p>Teòricament podries redirigir diferents aplicacions a diferents dispositius de sortida (auriculars vs altaveus) i controlar aquests dispositius per separat. Però això requereix maquinari addicional, encaminament manual per aplicació, i en realitat no et dóna volum independent — només encesa/apagat independent per dispositiu.</p>

<h2>Com funciona un mesclador de volum per aplicació</h2>

<p>Un mesclador de volum adequat per aplicació està a la barra de menú i mostra totes les aplicacions que estan produint àudio actualment. Cada aplicació té el seu propi control lliscant. L'arrossegues amunt o avall, i només canvia el volum d'aquella app. El volum del sistema es manté intacte.</p>

<p>Sota el capó, això funciona utilitzant macOS <strong>Core Audio Tap API</strong> (introduïts el macOS 14) o tècniques més antigues de dispositius d'àudio virtuals per interceptar el flux d'àudio de cada aplicació de manera independent i escalar-ne l'amplitud abans que arribi als altaveus.</p>

<p>Les característiques clau que diferencien un bon mesclador d'un de dolent:</p>

<ul>
  <li><strong>Detecció d'aplicacions en temps real.</strong> Quan una nova aplicació comença a reproduir àudio, hauria d'aparèixer automàticament a la taula de mesclatge. No hi ha cap configuració manual.</li>
  <li><strong>Silenci per aplicació.</strong> Un clic per silenciar una aplicació específica sense tocar la posició del control lliscant.</li>
  <li><strong>Augment de volum.</strong> Algunes aplicacions (et miro a tu, reproductors de podcasts tranquils) arriben al màxim massa baix. Un bon mesclador et permet superar el 100%.</li>
  <li><strong>Perfils.</strong> Configuracions de volum diferents per a diferents situacions — "Focus" amb tot silenciat excepte la música, "Meeting" amb Zoom al 100% i la resta al 20%, "Gaming" amb l'àudio del joc al màxim.</li>
  <li><strong>Abaix automàtic.</strong> Baixa automàticament la música quan comences una trucada i torna-la quan acabi. Només això ja val la pena per tota l'aplicació.</li>
  <li><strong>Nadiu de la barra de menú.</strong> Hauria d'estar a la barra de menús, no a la finestra de la base. Mires amunt, t'adaptes i tornes a la feina. No es pot canviar d'aplicació.</li>
</ul>

<h2>Qui necessita això</h2>

<p>Qualsevol que faci més d'una cosa d'àudio alhora. Això és la majoria de la gent, però especialment:</p>

<ul>
  <li><strong>Treballadors remots</strong> — trucades + música + notificacions és la col·lisió més comuna</li>
  <li><strong>Streamers i podcasters</strong> — control precís sobre el que el públic sent versus el que tu escoltes</li>
  <li><strong>Músics i productors</strong> — necessitat d'aïllar la sortida del DAW de les pistes de referència i les eines de comunicació</li>
  <li><strong>Jugadors</strong> — l'àudio de jocs vs. Discord vs. música és un equilibri constant</li>
  <li><strong>Algú amb fatiga de notificacions</strong> — muta Slack, queda't amb la resta</li>
</ul>

<h2>SoundDial</h2>

<p>Vaig construir <strong>SoundDial</strong> perquè el mesclador de Mac volum que volia no existia. Es troba a la barra de menú, mostra totes les aplicacions que fan so i dóna a cadascuna el seu propi control lliscant. Silenci per aplicació, augment de volum, perfils i auto-ducking que abaixa la música quan comença una trucada. Compra única, macOS 14+, sense subscripció.</p>

<p>El mesclador de volum macOS hauria de tenir integrat.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Com silenciar el Slack a Mac sense silenciar la resta",
    description:
      "Les notificacions de Slack interrompen constantment la teva concentració, però no vols silenciar la música ni les trucades. Aquí tens com silenciar només Slack en macOS.",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>Estàs molt concentrat en la feina. Spotify està posant la llista de reproducció perfecta de concentració. Llavors — <em>Raspall de toc</em> — Slack fa pings. I una altra vegada. I una altra vegada. Tres canals, dos DMs i una notificació de fil en trenta segons. Vols silenciar Slack però mantenir la teva música. macOS diu: silenciar-ho tot o silenciar res.</p>

<p>Els sons de notificació de Slack són una de les queixes d'àudio més importants per als treballadors remots a Mac. Estan dissenyats per captar la teva atenció, que és precisament el problema quan necessites concentrar-te.</p>

<h2>Opció 1: Silenciar les notificacions directament a Slack</h2>

<p>Slack té una funció de "Pausa notificacions":</p>
<ol>
  <li>Fes clic a la teva foto de perfil a la barra lateral de Slack</li>
  <li>Fes clic a "Pausa notificacions"</li>
  <li>Tria una durada (30 min, 1 hora, 2 hores, etc.)</li>
</ol>

<p>Això suprimeix les insígnies i sons de notificació durant la durada seleccionada. També pots silenciar canals individuals fent clic dret → "Silenciar canal".</p>

<p><strong>Limitació:</strong> Això és tot o res per canal. No pots fer Slack <em>més silenciós</em> — només completament silenciosa o completament encesa. I si t'oblides de despausar, et perds missatges després d'acabar la sessió de concentració. Tampoc suprimeix els sons dins de l'aplicació de Slack si tens l'aplicació oberta.</p>

<h2>Opció 2: Desactivar els sons de Slack a les notificacions macOS</h2>

<p>Ves a Configuració del sistema → Notificacions → Slack. Desactiva "Reproduir so per notificacions."</p>

<p><strong>Limitació:</strong> Això elimina tots els sons de notificacions de Slack de manera permanent (fins que el tornes a activar). I només afecta les notificacions de nivell macOS — si Slack reprodueix sons a través del seu propi motor d'àudio, la configuració de notificacions potser no les detectarà totes.</p>

<h2>Opció 3: Utilitza un mode Focus</h2>

<p>Crea un mode de focus "Focus" o "Work" a la configuració del sistema → Focus. Afegeix Slack a la llista de "Silenciats". Quan actives el mode Focus, les notificacions de Slack es suprimeixen.</p>

<p><strong>Limitació:</strong> Els modes de focus suprimeixen les notificacions visualment i sonorament, però no et donen un control de volum molt detallat. No pots dir "Notificacions de Slack al 10% de volum" — o està totalment permès o completament silenciat.</p>

<h2>Opció 4: Control de volum per aplicació (la solució real)</h2>

<p>El que realment vols és senzill: baixa el volum de Slack al 10-15% mentre mantingues la resta a nivells normals. Els senyals de slack són audibles si els estàs escoltant, però no interrompen el teu flux. La música es manté a tot volum. Les trucades es mantenen a volum màxim.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dóna a Slack el seu propi control lliscant de volum independent. Configura-la al nivell que et funcioni — o silencia-la completament amb un sol clic. Quan estiguis preparat per tornar a fixar-te en Slack, desactiva'l i el volum torna a ser com abans.</p>

<img src="/apps/sounddial.png" alt="SoundDial amb Slack silenciat i Spotify sonant a volum normal a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>El flux de treball ideal de Slack</h3>
<ul>
  <li><strong>Temps de concentració:</strong> Slack al 10% o silenciat. Spotify al 40%. Sense interrupcions.</li>
  <li><strong>Temps disponible:</strong> Slack al 40%. Les notificacions són notables sense ser sorprenents.</li>
  <li><strong>Hora de la reunió:</strong> En Slack es va silenciar. Fes zoom al 100%. L'auto-ducking s'encarrega de la resta.</li>
</ul>

<p>Desa cadascun d'aquests com a <strong>Perfil de volum</strong> en SoundDial i canvia entre ells amb un sol clic. Encara millor, utilitza l'auto-ducking — quan comença una trucada, SoundDial redueix automàticament tot (inclòs Slack) i ho restaura quan la trucada acaba.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Com configurar perfils de volum per a diferents situacions a Mac",
    description:
      "Diferents configuracions de volum per a reunions, treball de concentració, jocs i relaxació — es pot canviar amb un sol clic. Així és com funcionen els perfils de volum en macOS.",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>A les 9 del matí estàs en una trucada de Zoom — vols Zoom al 100%, Spotify silenciat, Slack silenciat. A les 10 del matí la trucada s'acaba — vols Spotify al 40%, Slack al 15%, Zoom no importa. Al migdia estàs jugant — juga al 60%, Discord al 100%, la resta en silenci. A les 6 de la tarda ja estàs mirant YouTube — navegador al 80%, la resta en silenci.</p>

<p>Cada situació té una configuració de volum ideal diferent. I cada vegada que la situació canvia, hauries d'ajustar cinc o sis aplicacions manualment. O podries desar cada configuració com un perfil i canviar amb un sol clic.</p>

<h2>Què són els perfils de volum?</h2>

<p>Un perfil de volum és una instantània guardada del volum i de l'estat de silenci de cada aplicació. Configures les teves aplicacions com vols — Spotify al 30%, Zoom al 100%, Slack silenciat — i després deses això com un perfil amb nom com "Work" o "Meeting". Més tard, apliques el perfil i cada aplicació salta instantàniament al seu nivell de volum guardat.</p>

<p>Pensa-ho com els presets de pantalla per a l'àudio: igual que pots tenir una disposició de pantalla per a "configuració d'escriptori" versus "mode presentació", els perfils de volum et permeten canviar entre configuracions d'àudio sense ajustar manualment cada aplicació.</p>

<h2>macOS no té perfils de volum</h2>

<p>macOS té modes de Focus (No molestar, Feina, Personal, etc.) que controlen quines notificacions arriben. Però els modes de focus no controlen els nivells de volum. Poden suprimir completament els sons de notificació, però no poden posar Spotify al 30% ni Zoom al 100%. No hi ha cap manera integrada de desar i restaurar configuracions de volum per a cada aplicació.</p>

<h2>Configuració de perfils amb SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> inclou un sistema de perfils integrat. Així és com configurar-ho:</p>

<h3>Creació d'un perfil</h3>
<ol>
  <li>Obre SoundDial des de la barra de menú</li>
  <li>Ajusta el volum de cada aplicació segons el que vulguis per a una situació específica</li>
  <li>Fes clic al botó "+" a la secció de perfil</li>
  <li>Posa-li un nom (per exemple, "Meeting") i tria una icona</li>
  <li>Fet — la configuració actual del volum es guarda</li>
</ol>

<h3>Commutació de perfils</h3>
<p>Els teus perfils desats apareixen com a botons al popover de SoundDial. Fes clic en una i totes les aplicacions canvien instantàniament als volums guardats en aquell perfil. Un clic substitueix cinc o sis ajustos manuals.</p>

<img src="/apps/sounddial.png" alt="SoundDial perfils de volum — canviant amb un clic entre els modes Reunió, Focus i Chill en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Perfils d'exemple</h3>

<p><strong>Reunió</strong></p>
<ul>
  <li>Zoom / Teams: 100%</li>
  <li>Spotify: silenciat</li>
  <li>Slack: silenciat</li>
  <li>Navegador: silenciat</li>
</ul>

<p><strong>Treball de Focus</strong></p>
<ul>
  <li>Spotify: 35%</li>
  <li>Slack: 10%</li>
  <li>Correu: silenciat</li>
  <li>Navegador: 50%</li>
</ul>

<p><strong>Jocs</strong></p>
<ul>
  <li>Partit: 60%</li>
  <li>Discord: 100%</li>
  <li>Spotify: 20%</li>
  <li>La resta: apagada</li>
</ul>

<p><strong>Tranquil·litat</strong></p>
<ul>
  <li>Spotify: 70%</li>
  <li>Navegador: 60%</li>
  <li>Notificacions: 20%</li>
</ul>

<h3>Actualització de perfils</h3>
<p>Si els teus volums preferits canvien amb el temps, només cal ajustar els controls lliscants i actualitzar el perfil. La propera vegada que l'apliques, utilitza la nova configuració.</p>

<h2>Perfils + auto-ducking = totalment automàtic</h2>

<p>Combina perfils amb la funció d'auto-ducking de SoundDial i gairebé no cal tocar el volum. Aplica el teu perfil de "Focus Work" al matí. Quan arriba una trucada, l'auto-ducking redueix tot excepte l'aplicació de trucades. Quan la trucada acaba, tot torna als nivells del teu perfil. Al final del dia, canvia a "Relax" amb un sol clic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "El volum de les trucades de Zoom és massa baix en Mac? Com potenciar-lo",
    description:
      "Amb prou feines pots sentir la gent a Zoom fins i tot al volum màxim. Aquí tens totes les solucions — des de la configuració de Zoom fins a augmentar l'àudio de les trucades més enllà del 100% amb un mesclador de volum per aplicació.",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>Estàs en una trucada de Zoom. L'altra persona parla, però la seva veu gairebé no se sent. El teu volum Mac és màxim. El volum de l'altaveu de Zoom està al màxim. T'estàs inclinant cap a la pantalla, esforçant-te per sentir. Això no hauria de ser tan difícil.</p>

<p>El baix volum de trucades per Zoom és extremadament comú i té múltiples causes. Repassem totes les solucions, des de comprovacions senzilles de configuració fins a augmentar l'àudio de Zoom més enllà del seu límit habitual.</p>

<h2>1. Comprova la configuració de sortida d'àudio de Zoom</h2>

<p>Obre Zoom → Configuració → Àudio. A la secció "Altaveu", assegureu-vos:</p>
<ul>
  <li>Es selecciona el dispositiu de sortida correcte (no un monitor inactiu ni un dispositiu desconnectat)</li>
  <li>El control lliscant de volum de l'altaveu està al màxim</li>
  <li>Fes clic a "Altaveu de prova" per comprovar que pots sentir clarament el to de prova</li>
</ul>

<p>Si el to de prova també és suau, el problema és entre Zoom i els altaveus — continua amb les correccions següents. Si el to de prova és correcte però les trucades reals són baixes, probablement l'altre participant té un problema amb el micròfon.</p>

<h2>2. Comprova el dispositiu de sortida del teu Mac</h2>

<p>Ves a Configuració del sistema → so → sortida. Assegura't que el dispositiu correcte estigui seleccionat. Si recentment has connectat o desconnectat uns auriculars, una pantalla o dispositius Bluetooth, potser macOS ha canviat automàticament a una sortida inesperada.</p>

<h2>3. Desactiva l'ajust automàtic de volum de Zoom</h2>

<p>Zoom té una opció de "Ajusta automàticament el volum del micròfon" (Configuració → Àudio) que també pot afectar els nivells de sortida percebuts en algunes configuracions. Prova de desactivar-lo i tornar-ho a provar.</p>

<h2>4. Desactivar la supressió del soroll de fons (temporalment)</h2>

<p>La supressió del soroll de Zoom filtra agressivament el soroll de fons — però en fer-ho, de vegades pot reduir la percepció de la veu de l'altra persona, especialment en entorns tranquils. Prova de configurar "Suprimir soroll de fons" a "Baix" o "Auto" en lloc de "Alt".</p>

<h2>5. Comprova el còdec Bluetooth</h2>

<p>Si utilitzes AirPods o auriculars Bluetooth, unir-te a una trucada de Zoom macOS obliga a canviar del còdec AAC d'alta qualitat al còdec SCO de menor qualitat (perquè el Zoom utilitza el teu micròfon). SCO redueix la qualitat de l'àudio i pot fer que l'àudio de la trucada soni més baix i comprimit.</p>

<p><strong>Correcció:</strong> Utilitza un micròfon separat (micròfon Mac integrat o micròfon USB) mentre mantingues els AirPods com a dispositiu de sortida. Això evita el canvi de còdec — els AirPods es mantenen en mode AAC amb millor qualitat d'àudio i volum.</p>

<h2>6. Restablir l'àudio del nucli</h2>

<p>El dimoni d'àudio de macOS vegades entra en un estat en què els nivells de sortida es redueixen, especialment després de dormir/despertar o canviar de dispositiu. Obre la terminal i corre:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>L'àudio es reiniciarà després d'una breu interrupció. Reincorpora't a la trucada de Zoom i comprova si el volum ha millorat.</p>

<h2>7. Augmenta el volum de Zoom més enllà del 100%</h2>

<p>Si has provat tot el que s'ha dit abans i Zoom encara és massa baix, el problema podria ser que la sortida d'àudio de Zoom simplement no és prou forta per a la teva configuració. Alguns participants tenen micròfons silenciosos, i Zoom només pot fer fins a cert punt per amplificar el seu senyal.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet augmentar el volum de qualsevol aplicació a <strong>200%</strong> — incloent-hi Zoom. Si un participant és massa silenciós, arrossega el control lliscant de Zoom al 150% o 180%. El senyal d'àudio s'amplifica més enllà del màxim integrat de Zoom, fent que fins i tot les veus més baixes siguin audibles.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum de les trucades de Zoom al 180% en Mac per a un àudio més clar durant les videotrucades" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>L'avantatge clau: augmentar el Zoom no afecta res més. La teva música, notificacions i altres aplicacions es mantenen als nivells actuals. Només que Zoom s'enfà més fort.</p>

<p>Això també funciona per a <strong>Microsoft Teams, Google Meet, FaceTime, Discord, reunions de Slack, Webex</strong>, i qualsevol altra aplicació de trucades. Si la pots sentir, SoundDial la pots potenciar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Com reduir Spotify sense baixar la resta de Mac",
    description:
      "Vols Spotify com a música de fons, però abaixar-lo amb les tecles de volum fa que la trucada i la resta siguin més silencioses també. Aquí tens la solució.",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>Estàs treballant. Spotify està posant música de fons. És una mica massa sorollós — competeix amb el podcast d'una altra pestanya o dificulta concentrar-se. Prem la tecla de baixar el volum. Spotify es torna més silenciós. Però també ho fa tot la resta — la teva trucada de Zoom, els sons de notificació, l'àudio del navegador. Tot més silenciós. Això no és el que volies.</p>

<p>Això passa perquè macOS té un sol control lliscant de volum. Prem la tecla de volum i ajusta la <em>Volum del sistema</em>, que escalen totes les aplicacions per igual. No hi ha manera de dir "només redueix Spotify" amb els controls integrats.</p>

<h2>La solució alternativa: el volum dins de l'aplicació de Spotify</h2>

<p>Spotify té el seu propi control lliscant de volum a la cantonada inferior dreta de l'aplicació (o a la part inferior del reproductor). Pots reduir això independentment del volum del sistema. Si el teu sistema està al 80% i el control lliscant de Spotify al 30%, Spotify es reproduirà pràcticament al 24% mentre que la resta es manté al 80%.</p>

<p><strong>El problema:</strong> Has de canviar a la finestra de Spotify, trobar el control lliscant, ajustar-lo i després tornar al que feies. I el control lliscant de Spotify és diminut, imprecis, i no mostra un percentatge — només una barra visual. Si estàs en una reunió i necessites baixar ràpidament la música, buscar un petit control lliscant en una altra aplicació no és l'ideal.</p>

<h2>La solució real: control de volum per aplicació</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Posa un control lliscant de volum per a cada aplicació a la barra de menú. Per reduir Spotify sense afectar res més:</p>

<ol>
  <li>Fes clic a la icona SoundDial a la barra de menú</li>
  <li>Troba Spotify a la llista</li>
  <li>Arrossega el seu control lliscant cap avall</li>
</ol>

<p>Fet. Spotify és més silenciós. Zoom no ha canviat. Les notificacions no han canviat. Tot la resta no ha canviat. No has sortit de l'aplicació actual — la finestra emergent de la barra de menú s'obre just on ets.</p>

<img src="/apps/sounddial.png" alt="SoundDial baixant el volum de Spotify de manera independent mentre mantens altres aplicacions a volum complet a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Encara millor: desa-ho com a perfil</h2>

<p>Si normalment vols Spotify a un nivell de fons més baix mentre treballes, desa la configuració de volum preferida com a perfil. Crea un perfil "Work" amb Spotify al 25%, Zoom al 100% i Slack al 15%. La propera vegada que t'asseguis a treballar, aplica el perfil amb un sol clic en comptes d'ajustar cada aplicació individualment.</p>

<h2>Encara millor: el ducking automàtic durant les trucades</h2>

<p>SoundDial pot reduir automàticament Spotify quan t'uneixes a una trucada. Activa l'auto-ducking a la configuració, tria quant reduir l'àudio de fons (per defecte un 30%), i SoundDial s'encarrega de la resta. La teva música s'atura quan comença la trucada i torna quan acaba. Cap ajust manual.</p>

<p>Aquest és el flux de treball que macOS hauria de suportar de manera nativa: "Spotify a aquest nivell, tot la resta a aquell nivell." Com que Apple no l'ha desenvolupat, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> omple el buit.</p>

<p>Compra única a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. No hi ha subscripció. macOS 14,2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "macOS Tahoe té control de volum per aplicació?",
    description:
      "macOS Tahoe (macOS 26) va portar actualitzacions importants, però Apple finalment va afegir un mesclador de volum? Aquí tens la resposta — i com aconseguir control de volum per aplicació ara mateix.",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>Cada any, Mac usuaris esperen que el proper llançament de macOS finalment inclogui una taula de mescles de volum. Cada any, es deceben. Amb macOS Tahoe (macOS 26), Apple va lliurar una interfície redissenyada, noves funcionalitats del sistema i grans millores sota el capó. Però van afegir control de volum per aplicació?</p>

<h2>La resposta curta: no</h2>

<p>macOS Tahoe no inclou un mesclador de volum integrat. No hi ha control de volum per aplicació a la configuració del sistema, al Centre de control ni a la barra de menús. L'experiència d'àudio és la mateixa que en totes les macOS anteriors: un control lliscant de volum del sistema que controla tot alhora.</p>

<p>El Centre de Control d'Apple encara mostra un únic control lliscant de volum. Les preferències de so a la configuració del sistema encara et permeten triar un dispositiu de sortida i ajustar un volum mestre. No hi ha cap funció oculta, ni opció avançada, ni cap nova API que exposi el volum per aplicació als usuaris.</p>

<h2>Què macOS Tahoe va millorar per a l'àudio</h2>

<p>Tot i que el volum per aplicació encara falta, Tahoe va portar algunes millores relacionades amb l'àudio:</p>

<ul>
  <li><strong>Millora de l'estabilitat de l'àudio Bluetooth</strong> — menys desconnexions i problemes de commutació de còdecs amb AirPods i auriculars de tercers</li>
  <li><strong>Millor processament d'àudio espacial</strong> — seguiment del cap millorat i renderització espacial més precisa per al contingut suportat</li>
  <li><strong>Rendiment d'àudio bàsic</strong> — menor latència per a aplicacions professionals d'àudio i producció musical</li>
</ul>

<p>Cap d'aquestes aborda la petició fonamental: "Deixa'm baixar Spotify sense afectar Zoom."</p>

<h2>Apple afegirà mai un mesclador de volum?</h2>

<p>No hi ha cap indici que Apple tingui intenció d'afegir aquesta funció. No ha aparegut en cap beta macOS, sessió de la WWDC ni full de ruta conegut. La filosofia de disseny d'àudio d'Apple continua afavorint la simplicitat — un sol control lliscant per a tot.</p>

<p>La ironia és que el propi framework Core Audio d'Apple suporta completament el tap d'àudio per procés i el control de volum. L'API Audio Tap introduïda el 14 de macOS (Sonoma) va facilitar encara més als desenvolupadors la creació d'eines d'àudio per a cada aplicació. Apple va construir la infraestructura — simplement no han creat la interfície d'usuari per a això.</p>

<h2>Com obtenir control de volum per aplicació a macOS Tahoe</h2>

<p>Com que Apple no el vol fabricar, les aplicacions de tercers cobreixen aquest buit. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> és una aplicació nativa macOS barra de menús que et proporciona un mesclador de volum — controls lliscants de volum independents per a cada aplicació en execució.</p>

<img src="/apps/sounddial.png" alt="SoundDial proporcionant control de volum per aplicació a macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial és totalment compatible amb macOS Tahoe i utilitza l'API moderna Core Audio Tap d'Apple — sense necessitat de controladors d'àudio ni extensions de nucli de tercers. Funciona perfectament amb el model de seguretat de macOS i no interfereix amb altres aplicacions d'àudio.</p>

<p>El que obtens:</p>
<ul>
  <li><strong>Lliscadors de volum per aplicació</strong> — 0% a 200% per a cada aplicació</li>
  <li><strong>Silenci per aplicació</strong> — un clic per silenciar qualsevol aplicació</li>
  <li><strong>Perfils de volum</strong> — desa configuracions i canvia instantàniament</li>
  <li><strong>Auto-ducking</strong> — l'àudio de fons disminueix automàticament durant les trucades</li>
  <li><strong>Augment de volum</strong> — amplificar les aplicacions silencioses més enllà del 100%</li>
  <li><strong>Memòria de volum</strong> — recorda el volum de cada aplicació entre reinicis</li>
  <li><strong>Dreceres de teclat</strong> — desactivar la taula de mescles o silenciar-ho tot des del teclat</li>
</ul>

<p>Compra única a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. No hi ha subscripció. macOS 14,2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Com posar música als altaveus mentre reps trucades amb auriculars (Mac)",
    description:
      "Vols Spotify als altaveus de la taula i fer zoom als teus AirPods al mateix temps? macOS no ho fa fàcil — això és el que realment funciona.",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>Aquí tens una cosa raonable que potser voldràs fer: posa música pels altaveus de la taula mentre fas una trucada per Zoom amb els teus AirPods. La música omple l'habitació, la trucada és privada a les teves orelles. Té tot el sentit.</p>

<p>macOS diu que no. Quan selecciones un dispositiu de sortida d'àudio, <em>cada</em> L'aplicació l'utilitza. Canvia als AirPods per a Zoom i Spotify també canvia als AirPods. Canvia als altaveus per Spotify i Zoom també va als altaveus. Un dispositiu de sortida per a tot. Sense excepcions.</p>

<h2>Per què no macOS fer això de manera nativa</h2>

<p>macOS redirigeix tot l'àudio a través d'un únic dispositiu de sortida seleccionat. Tries "Altaveus MacBook Pro" o "AirPods Pro" a la configuració del sistema → a la sortida de so →, i cada aplicació envia àudio a aquell dispositiu. No hi ha cap encaminament d'àudio integrat per a cada aplicació.</p>

<p>Aquest disseny té sentit per simplicitat — la majoria de gent vol que tot l'àudio surti del mateix lloc. Però es desmunta en el moment que vols diferents aplicacions en diferents sortides.</p>

<h2>La solució alternativa al dispositiu agregat</h2>

<p>L'Audio MIDI Setup de macOS (que es troba a Aplicacions → Utilitats) et permet crear un "Dispositiu Agregat" que combina múltiples sortides en una sola. Tanmateix, un dispositiu agregat envia el <em>Mateix àudio</em> a totes les sortides combinades — no et deixa triar quina aplicació va a quina sortida. Està dissenyat per a configuracions amb múltiples altaveus, no per a encaminament per pròpia aplicació.</p>

<h2>La solució alternativa al dispositiu multi-sortida</h2>

<p>De manera similar als dispositius agregats, pots crear un "Dispositiu Multi-Sortida" a Audio MIDI Setup. Això envia àudio idèntic a múltiples sortides simultàniament. De nou, és el mateix àudio a tot arreu — no pots dirigir Spotify als altaveus ni Zoom als auriculars d'aquesta manera.</p>

<h2>Què funciona realment: aplicacions d'encaminament d'àudio per aplicació</h2>

<p>Per encaminar realment diferents aplicacions a diferents dispositius de sortida, necessites una aplicació d'encaminament d'àudio de tercers que intercepti l'àudio de cada aplicació i l'enviï a la sortida que especifiquis. Aplicacions com SoundSource (de Rogue Amoeba) suporten això — et permeten assignar dispositius de sortida específics a aplicacions individuals.</p>

<h2>Un enfocament més senzill: separació basada en volums</h2>

<p>Si el teu objectiu principal és escoltar clarament la teva trucada per sobre de la música (en comptes de redirigir-la a dispositius físicament diferents), el control de volum per aplicació resol el problema de manera més senzilla.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Cada aplicació dóna el seu propi control de volum. Durant una trucada, pots:</p>

<ul>
  <li>Configura Zoom/Teams/FaceTime a <strong>100%</strong></li>
  <li>Baixa Spotify a <strong>20%</strong></li>
  <li>Silencia tot la resta</li>
</ul>

<p>La teva decisió és claríssima. La música és un fons subtil. No cal canviar de dispositiu.</p>

<img src="/apps/sounddial.png" alt="SoundDial mostrant Zoom al màxim volum i Spotify baixant durant una trucada a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Encara millor: SoundDial's <strong>Ànec automàtic</strong> Això ho fa automàticament. Quan t'uneixes a una trucada, detecta que el micròfon s'activa i redueix totes les aplicacions en segon pla a un nivell que configures (per defecte del 30%). Quan la trucada acaba, tot torna a la normalitat. No cal ajustar el control lliscant manualment.</p>

<p>Per a la majoria de persones, això resol el problema real — "No puc sentir la meva trucada per la música" — sense la complexitat de redirigir diferents aplicacions a diferents dispositius físics.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac volum canvia tot sol: com arreglar-ho",
    description:
      "El volum del teu Mac puja aleatòriament, baixa o es reinicia a un altre nivell. Aquí tens totes les causes conegudes i com aturar-ho.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>Poses el volum de la Mac a un nivell còmode. Desvies la mirada. Quan tornes, és diferent. Més fort. Més silenciós. Reinicia al màxim. Segueix passant, i no saps per què.</p>

<p>Aquest és un dels problemes d'àudio Mac més frustrants perquè sembla aleatori. Però gairebé mai és realment aleatori — sempre hi ha un desencadenant específic. Aquí tens totes les causes conegudes i com solucionar-les cadascuna.</p>

<h2>1. Reconnexió del dispositiu Bluetooth</h2>

<p>Aquesta és la causa més comuna. Quan un dispositiu Bluetooth (AirPods, altaveus, auriculars) es connecta o es desconnecta, macOS reinicia el volum al nivell que es va utilitzar per última vegada amb aquell dispositiu. Així que si estiguessis al 30% dels altaveus i els AirPods es connectessin automàticament, el volum podria pujar al 80% (l'últim nivell dels AirPods).</p>

<p><strong>Correcció:</strong> macOS recorda els nivells de volum per dispositiu de sortida. Cada vegada que canviïs, posa-ho on vulguis. Amb el temps, es recordaran els nivells adequats per a cada dispositiu. Si un dispositiu Bluetooth es connecta automàticament de manera inesperada, ves a Configuració del sistema → Bluetooth i elimina els dispositius que no utilitzis activament.</p>

<h2>2. Sortida HDMI/DisplayPort</h2>

<p>Connectar o desconnectar una pantalla externa via HDMI o DisplayPort pot provocar canvis de volum. Algunes pantalles també són dispositius de sortida d'àudio, i macOS canvia automàticament. Quan la pantalla entra en repòs o es desconnecta, macOS torna als altaveus i pot reiniciar el volum.</p>

<p><strong>Correcció:</strong> Ves a Configuració del sistema → Sound → Output i comprova si macOS canvia automàticament als altaveus de la pantalla. Si no vols que l'àudio passi per la pantalla, selecciona manualment el teu dispositiu de sortida preferit. Algunes pantalles poden tenir la sortida d'àudio desactivada en la seva pròpia configuració OSD (pantalla a la pantalla).</p>

<h2>3. Una aplicació està canviant el volum</h2>

<p>Algunes aplicacions ajusten el volum del sistema de manera programàtica. Zoom, per exemple, té una opció de "Ajusta automàticament el volum del micròfon" que també pot afectar el volum de sortida. Les aplicacions de música, podcasts i alguns jocs també poden ajustar el volum quan s'inicien o quan es produeixen esdeveniments específics.</p>

<p><strong>Correcció:</strong> Revisa les aplicacions que has obert recentment per veure la configuració relacionada amb l'àudio. A Zoom: Configuració → àudio → desmarcar "Ajusta automàticament el volum del micròfon." A Spotify: comprova si la normalització de volum està causant canvis percebuts de volum (Configuració → Reproducció → Normalització de volum).</p>

<h2>4. Pulsacions accidentals del teclat o de la barra tàctil</h2>

<p>Si tens un teclat amb tecles de volum (cada Mac teclat), les pulsacions accidentals — o una tecla encallada — poden canviar el volum. La Touch Bar dels MacBook Pro més antics és especialment propens a canvis accidentals de volum per fregar-la.</p>

<p><strong>Correcció:</strong> Comprova si una tecla de volum està bloquejada mirant l'indicador de volum sense tocar res. Per als models de Touch Bar, personalitza la Touch Bar a la configuració del sistema → al teclat → a la configuració de la Touch Bar per eliminar el control lliscant de volum o moure'l a una posició menys accessible.</p>

<h2>5. macOS reinici del dimoni d'àudio</h2>

<p>Després dels cicles de repòs/despertar, el dimoni d'àudio de macOS (coreaudiod) de vegades es reinicia i reinicia el volum a un nivell per defecte o previ emmagatzemat en memòria cau. Aquest és un error a nivell de sistema que apareix en diverses versions macOS.</p>

<p><strong>Correcció:</strong> Si el volum es reinicia de manera consistent després de despertar-se, prova de reiniciar Coreaudiod manualment:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>Si el problema persisteix a través de macOS actualitzacions, podria resoldre's en una actualització futura. Mentrestant, utilitzar una eina que recordi i restauri els nivells de volum per aplicació pot compensar.</p>

<h2>6. Configuració d'accessibilitat</h2>

<p>Algunes funcions d'accessibilitat poden interferir amb l'àudio. Comprova la configuració del sistema → l'accessibilitat → l'àudio per si hi ha configuracions inesperades. També comprova si VoiceOver o Switch Control estan parcialment activats — aquests poden produir comportaments inesperats de volum.</p>

<h2>Bloqueja els volums per aplicació amb SoundDial</h2>

<p>Encara que no puguis evitar que macOS canviï el volum del sistema, pots protegir el teu <em>per aplicació</em> Equilibri de volum. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> recorda el nivell de volum de cada aplicació de manera independent. Quan una aplicació es reinicia o quan el teu Mac es desperta del repòs, SoundDial restaura cada aplicació al seu volum desat.</p>

<img src="/apps/sounddial.png" alt="SoundDial recordar els nivells de volum per aplicació durant els reinicis de macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Això vol dir que, fins i tot si el volum del sistema canvia, l'equilibri a nivell d'aplicació es manté consistent:</p>
<ul>
  <li>Spotify es manté al 40% independentment dels canvis de volum del sistema</li>
  <li>Zoom es manté al 100% fins i tot després de reconnectar el Bluetooth</li>
  <li>El Slack es manté mut fins i tot després de reiniciar</li>
</ul>

<p>Combinat amb <strong>Perfils de volum</strong>, pots restaurar instantàniament la configuració de volum que prefereixes per a qualsevol situació: un clic per tornar exactament on vols estar, independentment del que hagis fet mentre no miraves macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Millors aplicacions de mescla de volum per a Mac el 2026",
    description:
      "Una comparació directa de cada Mac aplicació que et doni control de volum per aplicació. Característiques, preus i quin realment val la pena utilitzar.",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS no té un mesclador de volum integrat. Si vols controlar el volum de les aplicacions individuals — abaixar Spotify sense afectar Zoom, silenciar Slack sense silenciar-ho tot — necessites una aplicació de tercers.</p>

<p>Hi ha diverses opcions. Aquesta guia compara les més destacades basant-se en característiques, preus, compatibilitat i usabilitat real. Sense enllaços d'afiliats, sense seleccions patrocinades.</p>

<h2>Què hauries de buscar</h2>

<p>Abans de comparar aplicacions, això és el que importa en una taula de mescles de volum Mac:</p>

<ul>
  <li><strong>Lliscadors de volum per aplicació</strong> — control independent per a cada aplicació d'execució</li>
  <li><strong>Rang de volum</strong> — pots baixar del 100% I superar el 100% (impuls)?</li>
  <li><strong>Silenci per aplicació</strong> — silenciar una aplicació sense tocar la posició del volum</li>
  <li><strong>Perfils</strong> — desar i canviar entre configuracions de volum</li>
  <li><strong>Auto-ducking</strong> — baixa automàticament la música durant les trucades</li>
  <li><strong>Integració amb la barra de menú</strong> — accés ràpid sense canviar d'aplicació</li>
  <li><strong>macOS compatibilitat</strong> — treballa en l'última versió macOS</li>
  <li><strong>Model de preus</strong> — compra única vs. subscripció</li>
</ul>

<h2>Les opcions</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> És una aplicació nativa macOS barra de menús centrada en fer una cosa bé: el control de volum per aplicació.</p>

<ul>
  <li><strong>Volum per aplicació:</strong> Sí, 0% a 200%</li>
  <li><strong>Silenci per aplicació:</strong> Sí, un clic</li>
  <li><strong>Augment de volum:</strong> Sí, fins al 200%</li>
  <li><strong>Perfils:</strong> Sí, amb noms i icones personalitzats</li>
  <li><strong>Auto-ducking:</strong> Sí, amb nivell de duck configurable</li>
  <li><strong>Dreceres de teclat:</strong> Sí (toggle mixer, silenciar tot)</li>
  <li><strong>Commutació de dispositius de sortida:</strong> Sí, del mateix panell</li>
  <li><strong>Memòria de volum:</strong> Sí, recorda el volum de cada aplicació entre reinicis</li>
  <li><strong>Preu:</strong> 14,99 € compra única (sense subscripció) — menys de la meitat del preu de SoundSource</li>
  <li><strong>Requereix:</strong> macOS 14,2+</li>
  <li><strong>Disponible a:</strong> Mac App Store (revisada per Apple, en format sandbox, sense controladors del sistema)</li>
</ul>

<p>SoundDial utilitza l'API moderna Core Audio Tap d'Apple per a un control net d'àudio per procés. És lleuger, funciona completament a la barra de menú i no requereix una configuració complexa. Amb un cost de 14,99 €, és significativament més barat que SoundSource (39 $) i inclou característiques que SoundSource no té — perfils de volum i auto-ducking. I com que està a la Mac App Store, està revisat per Apple, en sandbox, i s'instal·la netament sense descarregar DMGs ni instal·lar controladors d'àudio del sistema.</p>

<img src="/apps/sounddial.png" alt="SoundDial mesclador de volum per aplicació que mostra els controls lliscants de volum individuals a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>SoundSource (Rogue Amoeba)</h3>

<p>SoundSource és una de les utilitats d'àudio de Mac més antigues i consolidades. És potent i ric en funcions, adreçat a usuaris avançats i professionals de l'àudio.</p>

<ul>
  <li><strong>Volum per aplicació:</strong> Sí</li>
  <li><strong>Silenci per aplicació:</strong> Sí</li>
  <li><strong>Augment de volum:</strong> Sí</li>
  <li><strong>EQ per aplicació:</strong> Sí (suport integrat i per a plugins AU)</li>
  <li><strong>Encaminament de sortida per aplicació:</strong> Sí (envia diferents aplicacions a diferents altaveus)</li>
  <li><strong>Perfils:</strong> No hi ha sistema de perfils integrat</li>
  <li><strong>Auto-ducking:</strong> No</li>
  <li><strong>Preu:</strong> 39 dòlars americans (una sola actualització, les millores importants poden requerir compra addicional)</li>
  <li><strong>Requereix:</strong> macOS 12+ (instal·la un controlador d'àudio del sistema)</li>
</ul>

<p>SoundSource és l'opció més potent si necessites equalitzador per aplicació i cadenes d'efectes d'àudio. Instal·la un controlador d'àudio a nivell de sistema (ACE) per interceptar l'àudio, cosa que el fa molt capaç però també més invasiu. El preu de 39 dòlars és més alt que la majoria d'alternatives, i no hi ha cap sistema d'auto-ducking ni de perfil.</p>

<h3>Música de fons (Gratuïta, codi obert)</h3>

<p>Música de Fons és una aplicació gratuïta i de codi obert que proporciona un control bàsic de volum per a cada aplicació. És una opció popular perquè és gratuïta.</p>

<ul>
  <li><strong>Volum per aplicació:</strong> Sí</li>
  <li><strong>Silenci per aplicació:</strong> Sí</li>
  <li><strong>Augment de volum:</strong> No (0-100% només)</li>
  <li><strong>Música amb pausa automàtica:</strong> Sí (pausa la música quan una altra aplicació reprodueix àudio)</li>
  <li><strong>Perfils:</strong> No</li>
  <li><strong>Auto-ducking:</strong> No (l'autopausa és diferent de l'auto-duck)</li>
  <li><strong>Preu:</strong> Gratuït</li>
  <li><strong>Requereix:</strong> macOS 10.13+ (instal·la un dispositiu d'àudio virtual)</li>
</ul>

<p>La música de fons és una opció gratuïta sòlida per al volum bàsic per a cada aplicació. Tanmateix, no s'ha actualitzat de manera consistent per a les versions macOS més recents. Els usuaris informen de problemes a macOS Sequoia i Tahoe: errors d'àudio, el dispositiu d'àudio virtual que no s'instal·la o l'aplicació que no detecta algunes aplicacions. Tampoc pot augmentar el volum més enllà del 100%, no té perfils i no té auto-ducking.</p>

<h3>eqMac</h3>

<p>eqMac és principalment una aplicació d'equalitzador que també inclou algunes capacitats de mescla de volum.</p>

<ul>
  <li><strong>Volum per aplicació:</strong> Limitat (centrat en l'EQ, no en la mescla)</li>
  <li><strong>EQ a nivell de sistema:</strong> Sí, amb diverses opcions de bandes</li>
  <li><strong>Augment de volum:</strong> Sí</li>
  <li><strong>Perfils:</strong> Presets d'EQ (no perfils de volum)</li>
  <li><strong>Auto-ducking:</strong> No</li>
  <li><strong>Preu:</strong> Nivell gratuït + subscripció Pro</li>
  <li><strong>Requereix:</strong> macOS 10.14+</li>
</ul>

<p>EQMac és la millor opció si la teva necessitat principal és una equalització a nivell de sistema (augment de greus, ajust d'aguts, etc.) en lloc de controlar el volum per cada aplicació. Les seves capacitats de mescla de volum són secundàries respecte a les seves característiques d'EQ.</p>

<h2>Taula comparativa ràpida</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Característica</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Música de fons</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volum per aplicació</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Augment de volum (200%)</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Perfils de volum</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">EQ per aplicació</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Encaminament de sortida per aplicació</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Dreceres de teclat</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Cal controlador de sistema</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Preu</td>
  <td style="text-align:center;padding:10px 12px;">Una sola vegada</td>
  <td style="text-align:center;padding:10px 12px;">39 dòlars</td>
  <td style="text-align:center;padding:10px 12px;">Gratuït</td>
</tr>
</tbody>
</table>

<h2>Quin hauries de triar?</h2>

<ul>
  <li><strong>Si vols control de volum per aplicació, perfils i auto-ducking:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — el mesclador de volum més complet pel preu, amb característiques (perfils, auto-ducking) que fins i tot les alternatives més cares no tenen.</li>
  <li><strong>Si necessites equalitzador per aplicació i encaminament d'àudio:</strong> SoundSource — l'opció més potent, pensada per a professionals de l'àudio que necessiten cadenes d'efectes i encaminament de sortida per aplicació.</li>
  <li><strong>Si vols alguna cosa gratuïta i bàsica:</strong> Música de fons — decent per a un volum senzill per aplicació, però pot tenir problemes de compatibilitat en versions macOS més noves i li falta boost/perfils/ducking.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube massa silenciós a Safari o Chrome a Mac? Arregla-ho a l'instant",
    description:
      "Alguns vídeos de YouTube gairebé no se senten ni tan sols al volum màxim. Aquí tens per què l'àudio del navegador sovint és més baix que en altres aplicacions — i com augmentar-lo més enllà del 100% en Mac.",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>Fas clic en un vídeo de YouTube. El creador parla, però gairebé no el pots sentir. El volum del sistema està al màxim. El volum del reproductor de YouTube està al màxim. T'inclines cap als altaveus. Encara massa silenciós. Obres Spotify — la música sona a tot volum. Així que no són els teus altaveus. És YouTube. O més precisament, és el vídeo.</p>

<p>Això és increïblement comú, i no és un error. Alguns vídeos de YouTube simplement estan masteritzats a un volum més baix que d'altres, i macOS no et dona cap manera d'augmentar selectivament l'àudio del navegador.</p>

<h2>Per què alguns vídeos de YouTube són tan silenciosos</h2>

<h3>El vídeo es va gravar a baix volum</h3>
<p>No tots els creadors disposen d'equip d'àudio professional. Un vídeo gravat amb un micròfon d'un portàtil des de l'altra punta d'una habitació serà significativament més baix que un gravat amb un micròfon de condensador adequat. YouTube normalitza el volum fins a cert punt (la seva "normalització de volum" apunta a -14 LUFS), però això no compensa completament l'àudio d'una font extremadament baixa.</p>

<h3>Normalització de la sonoritat de YouTube</h3>
<p>YouTube ajusta automàticament el volum del vídeo perquè els vídeos forts i baixos es reprodueixin aproximadament al mateix nivell. Per als vídeos forts, això vol dir que cal baixar el volum. Per als vídeos silenciosos, vol dir pujar-los — però només fins a cert punt. Si l'àudio font és molt baix, la normalització només pot fer fins a cert punt sense introduir soroll.</p>

<h3>L'àudio del navegador és un ciutadà de segona categoria a macOS</h3>
<p>Safari i Chrome gestionen l'àudio de manera diferent que les aplicacions multimèdia dedicades. Emeten a través del motor d'àudio del navegador, que té el seu propi límit de volum. No hi ha manera d'augmentar l'àudio d'una pestanya del navegador des de macOS. El navegador és una sola aplicació amb un sol nivell de volum — fins i tot si tens deu pestanyes reproduint àudio a diferents nivells.</p>

<h2>Solucions ràpides per provar</h2>

<h3>Comprova el volum del reproductor a YouTube</h3>
<p>Passa el cursor per sobre de la icona de l'altaveu al reproductor de YouTube i assegura't que el control lliscant estigui al màxim. És fàcil arrossegar això cap avall sense voler, i es reinicia independentment del volum del teu sistema.</p>

<h3>Desactiva la normalització de volum de YouTube</h3>
<p>YouTube no ofereix un interruptor orientat a l'usuari per a la normalització de volum. Tanmateix, algunes extensions de navegador poden evitar-ho. Cerca a la botiga d'extensions del teu navegador "YouTube volume normalizer" o "YouTube audio enhancer".</p>

<h3>Prova amb un altre navegador</h3>
<p>Safari i Chrome gestionen l'àudio de manera diferent. Si un vídeo és massa baix en un navegador, prova amb l'altre. Chrome, en particular, gestiona l'àudio a través d'un procés separat (el "renderitzador"), que de vegades pot resultar en una sortida més baixa.</p>

<h2>La veritable solució: augmentar el volum del navegador més enllà del 100%</h2>

<p>El problema de fons és que macOS no et permet augmentar el volum d'una aplicació específica més enllà del 100%. El teu navegador està al màxim, però "al màxim" no és prou fort.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> resol això donant a cada aplicació — incloent-hi Safari i Chrome — un control de volum independent que va del 0% al <strong>200%</strong>. Si un vídeo de YouTube és massa baix, arrossega el control lliscant del navegador al 150% o 180%. L'àudio s'amplifica en temps real sense afectar cap altra aplicació.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum del navegador Safari al 180% per a vídeos tranquils de YouTube a Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Això és especialment útil perquè:</p>
<ul>
  <li><strong>És instantani.</strong> Fes clic a la icona de la barra de menú, arrossega el control lliscant. No cal instal·lar una extensió de navegador ni canviar cap configuració.</li>
  <li><strong>És per aplicació.</strong> Potenciar Chrome no fa que Spotify sigui més fort. Cada aplicació es manté independent.</li>
  <li><strong>Funciona amb qualsevol navegador.</strong> Safari, Chrome, Firefox, Arc, Brave — si és una aplicació al teu Mac, SoundDial la pots controlar.</li>
  <li><strong>Arriba fins al 200%.</strong> Doble el límit de volum normal. Fins i tot el vídeo més baix es fa audible.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac les notificacions sonen massa forts als auriculars? Aquí tens la solució",
    description:
      "Els sons de Slack i les alertes de macOS són dolorosament forts als teus auriculars mentre la música està bé. Aquí tens per què el volum de notificacions és diferent — i com controlar-lo.",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>Portes auriculars, escoltes música a un volum còmode del 40%. S'activa una notificació de Slack. <em>DING.</em> És ensordidorament fort comparat amb la teva música. Et xiulen les orelles. Et treus els auriculars.</p>

<p>Això passa perquè macOS no et permet controlar per separat el volum de notificacions respecte als mitjans. La teva música pot estar a un nivell còmode, però els sons d'alerta — pings de Slack, notificacions de correu, recordatoris del calendari macOS sons del sistema — sonen a tota intensitat respecte al volum del teu sistema.</p>

<h2>Per què les notificacions sonen més fortes que la música</h2>

<p>Els sons de notificació són ràfegues d'àudio curtes i agudes dissenyades per captar la teva atenció. Tenen un volum màxim alt per disseny. La música, en canvi, té un ampli rang dinàmic — passatges més suaus, més forts i un nivell general dominat pensat per a una escolta sostinguda.</p>

<p>Quan el volum del sistema està al 40%, la música es troba al 40% del seu nivell masteritzat — que pot ser un còmode 60-70 dB als auriculars. Però una notificació que fa un ding al 40% del volum del sistema encara pot arribar als 80+ dB perquè el fitxer de so de notificacions està masteritzat a un nivell pic molt més alt. El volum del sistema escala igualment en percentatge, però els seus nivells inicials són molt diferents.</p>

<p>Amb auriculars, això és pitjor. El so entra directament al conducte auditiu sense marge per dissipar-se, així que la diferència de volum percebuda entre la música suau i un so de notificació agut s'amplifica.</p>

<h2>Maneres integrades de reduir el volum de notificacions</h2>

<h3>Redueix el volum d'alerta</h3>
<p>macOS té un control lliscant separat de "Volum d'alerta" amagat a la configuració. Ves a <strong>Configuració del sistema → so</strong> i busca el <strong>Volum d'alerta</strong> Slider. Això controla el volum dels sons i alertes del sistema per separat del volum principal.</p>
<p><strong>Limitació:</strong> Això només afecta les alertes del macOS sistema (com bip d'error i sons de Trash). No afecta els sons de notificació d'aplicacions com Slack, Discord o Teams, que reprodueixen el seu propi àudio a través del seu propi motor d'àudio.</p>

<h3>Desactiva els sons de notificació per aplicació</h3>
<p>Ves a <strong>Configuració → notificacions del sistema</strong>, selecciona l'aplicació que està massa sorollosa i desactiva "Reproduir so per notificacions." Això silencia completament les notificacions d'aquesta aplicació.</p>
<p><strong>Limitació:</strong> És tot o res. No pots fer notificacions a Slack <em>més silenciós</em> — només completament encès o completament desactivat. I perds la senyal sonora que t'indica que ha passat alguna cosa sense mirar la pantalla.</p>

<h3>Utilitza modes de focus</h3>
<p>Els modes d'enfocament (No molestar, Treballar, etc.) poden suprimir els sons de notificació de totes o de les aplicacions seleccionades. Això funciona durant les sessions de concentració profunda però no és pràctic tot el dia — et perdries notificacions importants.</p>

<h2>La veritable solució: controlar el volum de les notificacions de l'aplicació de manera independent</h2>

<p>El que realment vols és senzill: fes que Slack sigui més silenciós sense fer que la teva música sigui més baixa. Redueix el volum de notificacions de les aplicacions al 15% mentre manté Spotify al 50%. macOS no et deixa fer això.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sí. Dóna a cada aplicació el seu propi control lliscant de volum, així que pots configurar aplicacions amb moltes notificacions com Slack, Mail i Calendar a un volum molt més baix mantenint les teves aplicacions multimèdia en un nivell còmode.</p>

<img src="/apps/sounddial.png" alt="SoundDial mostrant Slack a baix volum i Spotify a volum normal — control independent de notificacions a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Una configuració típica apta per a auriculars</h3>
<ul>
  <li><strong>Spotify / Música</strong> — 50% (nivell d'escolta còmode)</li>
  <li><strong>Slack</strong> — 15% (notable però no sorprenent)</li>
  <li><strong>Correu</strong> — 10% (ping subtil, no et descol·locarà)</li>
  <li><strong>Calendari</strong> — 20% (suficient per notar-ho, no dolorós)</li>
  <li><strong>Zoom / FaceTime</strong> — 90% (àudio clar de la trucada)</li>
  <li><strong>Navegador</strong> — 40% (igualant el nivell de música per a la reproducció de vídeo)</li>
</ul>

<p>Desa-ho com a perfil "Auriculars" a SoundDial i aplica'l amb un sol clic cada vegada que el connectis. Crea un perfil separat de "Altaveus" amb diferents proporcions per quan treballis a la teva taula.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Com evitar que Zoom abaixi la música a Mac",
    description:
      "Cada vegada que t'uneixes a una trucada de Zoom, la teva música cau o desapareix. Aquí tens per què passa i com controlar què es torna més silenciós durant les trucades — segons els teus propis termes.",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>T'uneixes a una trucada de Zoom. Spotify sonava a un volum còmode. La trucada es connecta i — la teva música desapareix o cau gairebé fins a desaparèixer. No has tocat res. Zoom (o macOS) va decidir baixar la teva música per tu, sense demanar-ho.</p>

<p>Això torna boja la gent perquè és invisible i automàtic. No has silenciat res. No has ajustat cap control lliscant. Alguna cosa en el sistema ha decidit que la teva música hauria de ser més baixa, i no tens cap manera evident de controlar-la.</p>

<p>Això és el que està passant realment i com recuperar el control.</p>

<h2>Per què la teva música es torna més baixa durant les trucades de Zoom</h2>

<p>Hi ha dues possibles causes:</p>

<h3>1. L'àudio d'àudio integrat de Zoom</h3>
<p>Zoom té el seu propi processament d'àudio que pot afectar altres àudios del teu sistema. En algunes configuracions, Zoom redueix l'àudio del sistema quan activa el micròfon, de manera que l'àudio de la trucada és més clar. Això no sempre és evident a la configuració de Zoom.</p>

<p>Comprova la configuració de Zoom → → l'àudio:</p>
<ul>
  <li>Busca qualsevol opció de "Ajusta automàticament el volum del micròfon" i prova de desactivar-la</li>
  <li>Comprova "Suprimeix soroll de fons" — això processa l'àudio i pot afectar el volum percebut</li>
  <li>Assegura't que "Utilitza dispositiu d'àudio separat per a interpretació simultània" estigui desmarcat, tret que ho necessitis</li>
</ul>

<h3>2. macOS commutació de còdecs</h3>
<p>Quan Zoom activa el micròfon (especialment amb auriculars Bluetooth com els AirPods), macOS canvia del còdec d'àudio AAC d'alta qualitat al còdec SCO de menor qualitat. Aquest canvi de còdec sovint redueix el volum i la qualitat general de l'àudio. No és culpa específica de Zoom — passa amb qualsevol aplicació que utilitzi el micròfon per Bluetooth.</p>

<p>Si utilitzes AirPods o altres auriculars Bluetooth i el volum baixa quan comença una trucada, probablement aquesta sigui la causa.</p>

<h2>Solucions integrades</h2>

<h3>Utilitza auriculars amb cable</h3>
<p>El problema del canvi de còdecs Bluetooth desapareix completament amb auriculars amb cable. Un adaptador d'auriculars USB-C o uns auriculars amb micròfon integrat eviten completament l'interruptor AAC→SCO. La qualitat de l'àudio es manté consistent abans, durant i després de les trucades.</p>

<h3>Fes servir un micròfon separat</h3>
<p>Si utilitzes el micròfon integrat del teu Mac (o un micròfon USB extern) en lloc del micròfon dels teus AirPods, no cal que canviïs el còdec Bluetooth macOS. Configura el teu dispositiu d'entrada al micròfon integrat a la configuració del sistema → a So → Entrada, mantenint els AirPods com a sortida. D'aquesta manera, els AirPods es mantenen en mode AAC i el volum no es veu afectat.</p>

<h3>Ajusta la configuració d'àudio de Zoom</h3>
<p>A Zoom → Configuració → Àudio, experimenta desactivant l'ajust automàtic del micròfon i la supressió del soroll de fons. Aquestes funcions poden interferir amb els nivells d'àudio d'altres aplicacions.</p>

<h2>La veritable solució: fer l'auto-ducking segons les teves condicions</h2>

<p>El problema fonamental és que no tens cap control sobre <em>quant</em> La teva música baixa durant les trucades. El sistema pren aquesta decisió per tu, i normalment és massa agressiva: la música cau gairebé a zero en lloc d'un nivell de fons còmode.</p>

<p>El que realment vols és un auto-ducking configurable: "quan estic en una trucada, baixa la meva música al 25% — no zero, no al 50%, exactament al 25%."</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et dóna exactament això. La seva funció d'auto-ducking monitoritza el teu micròfon i ajusta automàticament l'àudio en segon pla quan comença una trucada — però <strong>Tu controles el nivell d'ànec</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial configuració d'auto-ducking — reducció de volum configurable durant les trucades de Zoom a Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Com funciona</h3>
<ol>
  <li>Fixes el teu nivell preferit d'ànec (del 10% al 80%)</li>
  <li>T'uneixes a una trucada de Zoom — el teu micròfon s'activa</li>
  <li>SoundDial detecta la trucada i redueix les aplicacions en segon pla al teu nivell configurat</li>
  <li>L'àudio de la trucada es manté a volum complet</li>
  <li>Penges — totes les aplicacions tornen al volum anterior</li>
</ol>

<p>La diferència respecte a l'enfocament Zoom/macOS:</p>
<ul>
  <li><strong>Tu tries el nivell.</strong> El 30% és un bon valor per defecte — la música és audible però no interfereix. Pots ajustar des d'un 10% (gairebé silenciós) fins al 80% (gairebé reduït).</li>
  <li><strong>Restaura perfectament.</strong> Quan la trucada acaba, totes les aplicacions tornen exactament al mateix punt que estaven.</li>
  <li><strong>Funciona amb totes les aplicacions de comunicació.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>El pots desactivar.</strong> Si vols gestionar el volum manualment per a una trucada específica, només cal que desactivis l'auto-ducking a la configuració de SoundDial.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "El volum dels AirPods és massa baix en Mac? Totes les solucions explicades",
    description:
      "Els AirPods sonen suaus a la teva Mac fins i tot a volum màxim? Aquí tens totes les causes — des dels límits de seguretat dels auriculars fins a les peculiaritats del Bluetooth — i com solucionar-les.",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>Els teus AirPods funcionen bé al teu iPhone. Són prou sorollosos. Però si les connectes a la Mac — sense fils, òbviament — tot és massa silenciós. El volum del sistema està al màxim. Spotify està al màxim. Els AirPods només... No són prou sorolloses.</p>

<p>Aquesta és una de les queixes d'àudio més comunes entre Mac usuaris amb AirPods. La bona notícia: gairebé sempre es pot arreglar. La mala notícia: hi ha unes sis coses diferents que poden causar-ho, i potser hauràs de revisar-les totes.</p>

<h2>1. La seguretat dels auriculars limita el volum</h2>

<p>Aquesta és la causa més comuna. macOS té una funció integrada que limita el volum dels auriculars per protegir l'audició.</p>

<p>Ves a <strong>Configuració del sistema → So → Seguretat dels auriculars</strong>.</p>

<p>Si està activada la funció "Redueix l'àudio fort", macOS està limitant activament el volum que poden tenir els teus AirPods. Mesura l'exposició al so al llarg del temps i redueix el volum si creu que has estat escoltant massa fort durant massa temps.</p>

<p><strong>Correcció:</strong> Desactiva completament "Redueix l'àudio fort" o augmenta el llindar de decibels a un nivell més alt. Immediatament notaràs més marge de volum.</p>

<h2>2. El volum del Bluetooth està desincronitzat</h2>

<p>L'àudio Bluetooth té dos controls de volum separats: un al costat Mac i un altre al costat dels AirPods. Aquests haurien d'estar sincronitzats, però de vegades es dessincronitzen — el Mac mostra el 100% però els AirPods en realitat reben un senyal de volum més baix.</p>

<p><strong>Correcció:</strong> Desconnecta els teus AirPods (configuració del sistema → Bluetooth → clica la "i" al costat dels AirPods → Desconnecta), espera cinc segons i després torna a connectar. Això reinicia la sincronització de volum. També prova de tornar a posar els AirPods a la seva funda, tancar la tapa, esperar deu segons i després treure'ls de nou.</p>

<h2>3. El còdec d'àudio va canviar a una qualitat inferior</h2>

<p>Quan utilitzes el micròfon dels teus AirPods (per a una trucada, Siri o dictat), macOS canvia del còdec AAC d'alta qualitat al còdec SCO de menor qualitat. SCO va ser dissenyat per a trucades telefòniques — redueix la qualitat de l'àudio i també pot afectar el volum percebut.</p>

<p><strong>Correcció:</strong> Si no estàs en una trucada però l'àudio sona tant suau com de baixa qualitat, desconnecta i torna a connectar els teus AirPods. macOS hauria de tornar al còdec AAC per a la reproducció de música. Si estàs en una trucada, aquest és un comportament esperat — el còdec canviarà automàticament quan la trucada acabi.</p>

<h2>4. Un AirPod és més silenciós que l'altre</h2>

<p>Si el volum és baix perquè un AirPod és notablement més silenciós, el problema podria ser físic — cera o deixalles que bloquegen la malla de l'altaveu.</p>

<p><strong>Correcció:</strong> Neteja suaument els teus AirPods amb un drap sec i sense pelussa. Per a la malla d'altaveus, utilitza un pinzell sec de truges suaus. No utilitzis líquids, aire comprimit ni objectes punxeguts. També comprova <strong>Configuració del sistema → Accessibilitat → àudio</strong> — assegura't que el control lliscant d'equilibri d'àudio esquerra/dret estigui centrat.</p>

<h2>5. L'aplicació en si genera un volum baix</h2>

<p>Algunes aplicacions tenen els seus propis controls interns de volum separats del volum del sistema. Spotify, VLC, YouTube i Zoom tenen controls lliscants de volum independents. Si el volum intern de l'aplicació està al 50%, només obtens la meitat del volum — encara que macOS i els teus AirPods estiguin al 100%.</p>

<p><strong>Correcció:</strong> Comprova el control de volum dins de l'aplicació que estàs utilitzant i assegura't que està al màxim.</p>

<h2>6. Core Audio està en mal estat</h2>

<p>El dimoni d'àudio d'macOS (coreaudiod) pot quedar encallat en un estat on l'àudio Bluetooth es dirigeix incorrectament o a un nivell reduït, especialment després de dormir/despertar o canviar entre diversos dispositius d'àudio.</p>

<p><strong>Correcció:</strong> Obre la terminal i corre:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>L'àudio cau un segon i es reinicia. Els teus AirPods poden reconnectar-se a un volum més normal.</p>

<h2>Encara massa silenciós? Augmenta el volum dels AirPods més enllà del 100%</h2>

<p>Si has comprovat les sis causes anteriors i els teus AirPods encara no són prou forts, potser necessitaràs amplificar el volum — augmentant el senyal d'àudio més enllà del que macOS normalment permet.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet augmentar el volum de qualsevol aplicació fins a <strong>200%</strong>. Si Spotify està massa silenciós amb els teus AirPods, arrossega el control lliscant de Spotify al 150% o 180% en SoundDial. El senyal d'àudio s'amplifica abans d'enviar-se als teus AirPods, fent-los més forts del que Apple pretenia.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant el volum de l'aplicació per als AirPods a Mac amb controls lliscants de volum per aplicació fins al 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>L'avantatge de l'augment per aplicació: pots augmentar l'aplicació en silenci sense fer que la resta sigui més sorollosa. Si la teva videotrucada està bé al 100% però Spotify necessita el 170%, SoundDial et permet configurar cadascuna de manera independent.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "El volum de Spotify és massa baix a Mac? Aquí tens totes les solucions",
    description:
      "Spotify al màxim volum però encara massa baix a la teva Mac? Aquesta guia cobreix totes les causes — des del limitador integrat de Spotify fins a la configuració de macOS — i com augmentar-la més enllà del 100%.",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify està a tot volum. El teu Mac està a ple volum. I encara no és prou fort. Aquesta és una de les queixes més comunes a Spotify sobre Mac, i té múltiples causes — la majoria de les quals no són evidents.</p>

<p>Aquesta guia explica totes les raons per les quals Spotify podria estar massa silenciós a la teva Mac i com arreglar-les cadascuna. Incloent com augmentar el volum de Spotify més enllà del 100% si res més funciona.</p>

<h2>Comprova primer el control lliscant de volum propi de Spotify</h2>

<p>Spotify té un control de volum independent a la cantonada inferior dreta de l'aplicació (o a la part inferior de la pantalla del reproductor redissenyat). Aquest control lliscant és separat del volum del sistema del teu Mac. Si està al 50%, Spotify només està generant la meitat del seu volum potencial — encara que el volum del teu sistema estigui al 100%.</p>

<p><strong>Correcció:</strong> Assegura't que el control lliscant de volum dins de l'aplicació de Spotify estigui completament a la dreta (100%).</p>

<h2>Comprova la normalització de volum de Spotify</h2>

<p>Spotify té una funció anomenada <strong>Normalització de volum</strong> Això ajusta automàticament el volum de reproducció perquè totes les pistes es reprodueixin a un nivell aproximadament igual. Això pretén evitar salts bruscos de volum entre cançons, però també pot reduir el volum total de les pistes més fortes.</p>

<p>Per comprovar: Obre la configuració de Spotify → → la reproducció → <strong>Normalitzar volum</strong>.</p>

<p>Tens tres opcions:</p>
<ul>
  <li><strong>Fort</strong> — mínima normalització, més propera als nivells de masterització originals</li>
  <li><strong>Normal</strong> — normalització moderada (per defecte)</li>
  <li><strong>Silenci</strong> — la majoria de normalització, redueix encara més el volum</li>
</ul>

<p><strong>Correcció:</strong> Si Spotify sona massa baix, desactiva completament la normalització o posa-la a "Fort". Aquesta és la causa més comuna que Spotify estigui inesperadament silenciós.</p>

<h2>Comprova la configuració de qualitat d'àudio de Spotify</h2>

<p>Configuracions de qualitat d'àudio més baixes de vegades poden provocar una reproducció més baixa, especialment en maquinari d'àudio antic. Ves a Spotify → Configuració → Qualitat d'Àudio i assegura't d'utilitzar "Molt Alt" (320 kbps) si tens una subscripció Premium, o "Alt" (256 kbps) a la versió gratuïta.</p>

<h2>Comprova macOS límits de seguretat per a auriculars</h2>

<p>Si utilitzes auriculars (per cable o Bluetooth), potser macOS limita el volum. Ves a <strong>Configuració del sistema → So → Seguretat dels auriculars</strong>. Si tens activat "Reduir l'àudio fort", macOS està limitant el volum dels auriculars a un nivell que considera segur.</p>

<p><strong>Correcció:</strong> Desactiva "Redueix l'àudio fort" o augmenta el llindar de decibels. Nota: aquesta configuració només afecta la sortida dels auriculars, no els altaveus.</p>

<h2>Comprova el volum Bluetooth</h2>

<p>Si utilitzes AirPods o altaveus Bluetooth, hi ha una capa de volum separada. Els dispositius Bluetooth tenen el seu propi volum que es negocia entre el Mac i el dispositiu. De vegades això es desincronitza.</p>

<p><strong>Correcció:</strong> Desconnecta i torna a connectar el teu dispositiu Bluetooth. També comprova si el dispositiu té els seus propis botons de volum — assegura't que estiguin al màxim.</p>

<h2>Restablir l'àudio del nucli</h2>

<p>El sistema d'àudio de macOS pot quedar de vegades encallat en un estat de volum baix, especialment després dels cicles de son/despertar o de canviar entre dispositius de sortida. Reiniciar el dimoni d'àudio sovint soluciona això.</p>

<p>Obre la terminal i corre:</p>
<p><code>Sudo Killall Coreaudiod</code></p>

<p>L'àudio es talla un segon i es reinicia. Prova Spotify de nou — potser sona més fort.</p>

<h2>Impulsa Spotify més enllà del 100% amb SoundDial</h2>

<p>Si has provat tot el que he dit abans i Spotify encara està massa baix, el problema podria ser que la sortida màxima de Spotify simplement no és prou forta per a la teva configuració. Això és habitual amb altaveus integrats de MacBook i alguns dispositius Bluetooth.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Et permet augmentar el volum de qualsevol aplicació fins a <strong>200%</strong> — incloent-hi Spotify. Intercepta el flux d'àudio de Spotify i l'amplifica més enllà del màxim integrat de l'aplicació, sense afectar el volum de cap altra aplicació.</p>

<img src="/apps/sounddial.png" alt="SoundDial pujant el volum de Spotify al 200% en macOS mentre mantens altres aplicacions al volum normal" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Aquí està la diferència clau: un augment de volum a tot el sistema faria <em>tot</em> més fort — notificacions, trucades, sons del sistema — no només Spotify. SoundDial impulsa Spotify <em>independentment</em>. Configura Spotify al 160% mentre el navegador es manté al 80% i Zoom al 100%.</p>

<h2>Bonus: fer un duc automàtic per a la música durant les trucades</h2>

<p>Si també s'aplica el problema contrari — Spotify és massa sorollós durant les videotrucades — la funció d'auto-ducking de SoundDial redueix automàticament Spotify quan t'uneixes a una trucada de Zoom, Teams o FaceTime. Quan acaba la trucada, Spotify torna al volum anterior. No cal ajustar manualment.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Com separar l'àudio del joc de Discord a Mac",
    description:
      "Les explosions del joc ofeguen els teus companys a Discord? Aquí tens com controlar de manera independent l'àudio del joc i el volum del xat de veu a macOS.",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>Estàs jugant a Mac. Una explosió esclata dins del joc. Els teus companys de Discord parlen, però no els sents per sobre dels trets. Baixes el volum — ara Discord també és més silenciós. Tornes a pujar el volum — les explosions tornen a ser ensordidores.</p>

<p>A Windows, obries el mesclador de volum, baixaves el joc al 40% i deixaves Discord al 100%. En Mac, no pots. macOS et dóna un control lliscant de volum per a tot, així que l'àudio del joc i el xat de veu estan permanentment vinculats.</p>

<p>Aquesta guia t'ensenya com obtenir un control independent de volum per al teu joc i Discord (o qualsevol xat de veu) a Mac.</p>

<h2>Per què això és un problema específic de Mac</h2>

<p>Windows té un mesclador de volum integrat des del 2006 que et permet controlar el volum de cada aplicació de manera independent. macOS mai ha afegit aquesta funció. L'àudio de cada aplicació es barreja en un sol flux, i l'únic control que tens és un control lliscant mestre que afecta tot per igual.</p>

<p>Això significa:</p>
<ul>
  <li>Si el teu joc és massa fort, baixar-lo també fa baixar Discord</li>
  <li>Si Discord està massa baix, pujar-lo també puja el joc</li>
  <li>No pots trobar un equilibri perquè ambdues aplicacions estan bloquejades al mateix volum</li>
</ul>

<h2>Les solucions alternatives que no funcionen gaire</h2>

<h3>Utilitza la configuració de volum dins del joc</h3>
<p>La majoria de jocs tenen un menú d'àudio on pots baixar el volum mestre, la música, els efectes de so i el xat de veu de manera independent. Això ajuda, però estàs canviant la configuració dins del joc — és a dir, has de pausar la partida, navegar pels menús i ajustar cada vegada que canvien les condicions. I si canvies de joc, comences de nou.</p>

<h3>Utilitza els controls de volum de Discord</h3>
<p>Discord et permet ajustar el volum de sortida a Configuració → Veu i Vídeo, i pots ajustar el volum de cada usuari fent clic dret al seu nom. Però això controla la barreja interna de Discord, no el seu volum respecte a altres aplicacions. Si el joc és massa fort, fer que Discord soni més fort internament no ajuda perquè el volum del sistema afecta ambdós per igual.</p>

<h3>Utilitza diferents dispositius de sortida</h3>
<p>Algunes persones intenten redirigir l'àudio del joc als altaveus i Discord als auriculars (o a l'inrevés). macOS no ho fa fàcil — necessitaries un dispositiu d'àudio virtual i un encaminament manual per a cada aplicació. I portar auriculars amb altaveus sonant simultàniament és, com a molt, incòmode.</p>

<h2>La solució real: control de volum per aplicació</h2>

<p>El que necessites és la capacitat de configurar el volum del teu joc de manera independent del volum de Discord. Això és exactament el que fa un mesclador de volum per aplicació.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Es col·loca a la barra de menú i dóna a cada aplicació el seu propi control de volum. Pots posar el teu joc al 35% i Discord al 100% — o la proporció que et vagi bé. Canvia'n un i l'altre es queda al seu lloc.</p>

<img src="/apps/sounddial.png" alt="SoundDial mostrant controls lliscants de volum independents per a un joc i Discord a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuració típica de joc</h3>
<ul>
  <li><strong>Partit</strong> — 30-50% (prou fort per a la immersió, no aclaparador)</li>
  <li><strong>Discord / xat de veu</strong> — 90-100% (sempre clarament audible per sobre de l'àudio del joc)</li>
  <li><strong>Spotify / música</strong> — 15-25% (fons subtil, no interfereix)</li>
  <li><strong>Navegador</strong> — silenciat (sense sorpresa de vídeos d'auto-reproducció)</li>
  <li><strong>Slack / notificacions</strong> — silenciat (temps de concentració)</li>
</ul>

<h3>Desa-ho com a perfil</h3>
<p>SoundDial's <strong>Perfils de volum</strong> Et permet desar aquesta configuració i aplicar-la amb un sol clic. Crea un perfil de "Gaming" amb l'equilibri de joc/Discord que prefereixis, un perfil de "Work" per a música i trucades, i canvia entre ells a l'instant. No cal reajustar els controls lliscants cada cop que t'asseus a jugar.</p>

<h3>Augment de volum per a xat de veu tranquil·la</h3>
<p>De vegades el problema no és que el joc sigui massa sorollós — sinó que Discord és massa silenciós. Alguns companys tenen micròfons dolents, o la sortida de Discord és inferior a la d'altres aplicacions. SoundDial et permet pujar el volum de qualsevol aplicació fins a <strong>200%</strong>, així que pots amplificar Discord més enllà del seu màxim normal sense tocar el volum del joc.</p>

<h2>Funciona amb qualsevol joc i qualsevol xat de veu</h2>

<p>SoundDial funciona amb totes les aplicacions que produeixen àudio a macOS. No importa si jugues a través de Steam, l'App Store, Epic Games o un joc de navegador. No importa si utilitzes Discord, TeamSpeak, Mumble o FaceTime. Si fa so, SoundDial el pot controlar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Per què Mac no té un mesclador de volum com Windows?",
    description:
      "Windows té control de volum per aplicació des del 2006. Som al 2026 i encara macOS no. Aquí tens la veritable raó — i com aconseguir-ne una, de totes maneres.",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Totes les versions de Windows des de Vista (2006) han inclòs un mesclador de volum. Fes clic dret a la icona de l'altaveu, fes clic a "Mesa de volum" i veuràs cada aplicació amb el seu propi control de volum. Pots silenciar Chrome sense afectar Spotify. Pots baixar Discord sense tocar el joc.</p>

<p>En macOS? Un slider. Això és tot el que tens. Vint anys d'actualitzacions Mac — Ventura, Sonoma, Sequoia, Tahoe — i Apple mai no ha afegit control de volum per aplicació.</p>

<p>La gent es fa aquesta pregunta constantment: <em>Per què Mac no té un mesclador de volum?</em></p>

<h2>No és una limitació tècnica</h2>

<p>Anem a aclarir-ho d'entrada: macOS pot fer absolutament control de volum per cada aplicació. El marc d'àudio subjacent — <strong>Àudio principal</strong> — suporta l'interceptació d'àudio per procés, l'encaminament i l'ajust de guany a nivell d'API. Apple va introduir el <strong>API d'Audio Tap</strong> el 14 de macOS (Sonoma), fent encara més fàcil per als desenvolupadors interceptar i modificar fluxos d'àudio individuals d'aplicacions.</p>

<p>Els desenvolupadors de tercers fa anys que construeixen mescladors de volum per aplicació utilitzant aquestes APIs. La tecnologia existeix. Apple simplement no ha creat una versió orientada a l'usuari.</p>

<h2>Aleshores, per què Apple no l'ha desenvolupat?</h2>

<p>Apple mai no ha explicat públicament per què. Però mirant els seus patrons de disseny, la resposta és força clara: <strong>Apple prioritza la simplicitat per sobre de les funcionalitats per a usuaris avançats.</strong></p>

<p>Un control lliscant de volum és més senzill que dotze. És més fàcil d'explicar, més fàcil d'aprendre i no requereix cap configuració. Per a un usuari que només fa una cosa a la vegada — escolta música O agafa una trucada O mira un vídeo — un sol control lliscant funciona bé. Apple dissenya primer per a aquest usuari.</p>

<p>També hi ha un argument filosòfic: Apple creu que les aplicacions haurien de gestionar el seu propi àudio. Si Spotify sona massa fort, baixa el volum a Spotify. Si Zoom és massa silenciós, puja el volum a Zoom. El sistema operatiu no hauria de necessitar mediar.</p>

<p>El problema és que aquesta filosofia no coincideix amb la realitat. El 2026, tothom fa multitasques amb àudio:</p>

<ul>
  <li>Música sonant mentre es treballa</li>
  <li>Videotrucades amb notificacions que sonen</li>
  <li>Les pestanyes del navegador reprodueixen automàticament els anuncis</li>
  <li>Jugar amb Discord obert</li>
  <li>Podcasts per una orella, Slack per l'altra</li>
</ul>

<p>"Només cal ajustar-ho a cada aplicació" vol dir canviar entre sis aplicacions, trobar sis controls de volum diferents (alguns dels quals no existeixen) i fer-ho diverses vegades al dia. És tot el contrari de senzill.</p>

<h2>Apple l'afegirà algun dia?</h2>

<p>No hi ha cap indici que Apple tingui previst afegir un mesclador de volum en cap proper llançament macOS. La funció no ha aparegut en cap beta macOS, presentació de patents ni fulla de ruta de la WWDC. El Centre de Control d'Apple a la barra de menú encara mostra només el control lliscant de volum del sistema.</p>

<p>És possible que Apple l'afegeixi eventualment — ja han adoptat funcions que inicialment havien rebutjat abans (widgets, mosaic de finestres, iPad amb múltiples finestres). Però esperar Apple vol dir esperar indefinidament.</p>

<h2>Com aconseguir un mesclador de volum Mac ara mateix</h2>

<p>La resposta és una aplicació de barra de menú de tercers. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> és un mesclador natiu macOS volum que fa exactament el que fa el mesclador de volum de Windows — i més.</p>

<img src="/apps/sounddial.png" alt="SoundDial — el mesclador de volum per a macOS, que mostra els controls lliscants de volum per aplicació a la barra de menú" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>El que obtens:</p>

<ul>
  <li><strong>Lliscadors de volum per aplicació</strong> — cada aplicació per córrer té el seu propi control lliscant, del 0% al 200%</li>
  <li><strong>Silenci per aplicació</strong> — un clic per silenciar qualsevol aplicació, torna a clicar per desactivar el silenci</li>
  <li><strong>Perfils de volum</strong> — desa configuracions per a diferents situacions (Feina, Focus, Jocs) i canvia amb un sol clic</li>
  <li><strong>Auto-ducking</strong> — l'àudio en segon pla baixa automàticament quan t'uneixes a una trucada, i es restaura quan penges</li>
  <li><strong>Augment de volum al 200%</strong> — amplificar les aplicacions silencioses més enllà del seu màxim habitual</li>
  <li><strong>Dreceres de teclat</strong> — desactiva la taula de mescles o silencia totes les aplicacions amb una tecla ràpida</li>
  <li><strong>Commutació de dispositius de sortida</strong> — canviar entre altaveus, auriculars i dispositius externs des del mateix panell</li>
  <li><strong>Memòria de volum</strong> — el volum de cada aplicació es recorda entre reinicis</li>
</ul>

<p>És la funció que Apple hauria d'haver creat fa vint anys. Compra única a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. No hi ha subscripció. macOS 14,2+.</p>

<p>El mesclador de volum macOS hauria de tenir integrat.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac volum massa baix? Com potenciar el so més enllà del 100%",
    description:
      "El teu Mac està a ple volum i encara està massa silenciós. Aquí tens per què passa això i com amplificar l'àudio fins al 200% sense altaveus externs.",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>El teu volum Mac està al 100%. El control lliscant està completament cap a la dreta. I encara no és prou fort. El podcast és massa silenciós. El participant de la videotrucada sona com si estigués xiuxiuejant. El vídeo de YouTube es va gravar massa baix. Has esgotat el màxim — i no n'hi ha prou.</p>

<p>Aquesta és una de les queixes d'àudio més comunes a Mac, especialment amb els altaveus integrats als MacBook Air i models antics de MacBook Pro. Els altaveus són físicament petits, i alguns continguts simplement s'enregistren a un nivell més baix que d'altres.</p>

<p>Aquí tens per què passa i com solucionar-ho realment — incloent-hi com augmentar el volum del teu Mac més enllà del límit del 100%.</p>

<h2>Per què el teu Mac sona massa baix a tot volum</h2>

<p>Hi ha diverses raons per les quals el teu Mac pot no ser prou fort ni tan sols al volum màxim:</p>

<h3>1. El contingut en si és silenciós</h3>
<p>No tot l'àudio es masteritza al mateix nivell. Un podcast produït professionalment pot arribar a -3 dB, mentre que un vídeo casual de YouTube o una trucada de Zoom gravada pot arribar a -20 dB. La diferència és enorme. Quan el volum del sistema està al 100%, el contingut silenciós es manté silenciós — macOS només pot amplificar fins al nivell original del senyal.</p>

<h3>2. Els altaveus de MacBook tenen límits físics</h3>
<p>Els altaveus integrats d'un MacBook Air o d'un MacBook Pro de 13" són petits. Estan dissenyats per a la portabilitat, no per al volum. Els models més grans de MacBook Pro d'Apple (14" i 16") tenen altaveus significativament millors, però fins i tot ells tenen sostre. Si estàs acostumat a altaveus o auriculars externs, els parlants integrats et semblaran febles.</p>

<h3>3. El volum Bluetooth està limitat</h3>
<p>Alguns auriculars i altaveus Bluetooth tenen el seu propi límit de volum separat del macOS. Fins i tot si macOS mostra el 100%, el dispositiu Bluetooth potser no està al seu màxim nivell. Això és especialment comú amb els AirPods, on el limitador de volum de la UE o la funció de seguretat d'auriculars a Configuració → So → Seguretat per a Auriculars poden limitar la sortida.</p>

<h3>4. Els volums individuals d'aplicacions són baixos</h3>
<p>Algunes aplicacions tenen el seu propi control intern de volum que és separat del volum del sistema. Si el volum dins de l'aplicació de Spotify està al 50% i el volum del sistema al 100%, estàs escoltant efectivament al 50%. Zoom sovint utilitza per defecte un nivell de volum conservador per a les trucades.</p>

<h2>Solucions integrades per provar primer</h2>

<h3>Comprova els límits de seguretat dels auriculars</h3>
<p>Ves a <strong>Configuració del sistema → So → Seguretat dels auriculars</strong>. Si està activat el mode "Reduir àudio fort", macOS està limitant activament el volum per protegir l'audició. Pots desactivar això o augmentar el llindar. Això només afecta els auriculars — no toca la sortida dels altaveus.</p>

<h3>Comprova el volum del dispositiu Bluetooth</h3>
<p>Alguns dispositius Bluetooth tenen controls de volum independents. Per als AirPods, assegura't que el volum tant de l'Mac com dels AirPods estigui al màxim. Per als altaveus Bluetooth de tercers, comprova si l'altaveu té el seu propi botó de volum o aplicació.</p>

<h3>Comprova el volum dins de l'aplicació</h3>
<p>Obre l'aplicació que estigui massa silenciosa i busca el seu propi control de volum. Spotify en té un a la barra del reproductor. VLC en té un als controls de reproducció. YouTube en té un al reproductor de vídeo. Assegura't que estiguin al 100% abans de concloure que el teu Mac és el problema.</p>

<h3>Restablir l'àudio del nucli</h3>
<p>De vegades, el sistema d'àudio macOS es posa en mal estat després dels cicles de son/despertar o canvis de dispositiu. Obre la terminal i corre:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>Això reinicia el dimoni d'àudio. L'àudio es talla un segon i torna, de vegades a un nivell més normal.</p>

<h2>Com augmentar el volum més enllà del 100%</h2>

<p>Si has comprovat tot el que has dit i la teva Mac encara és massa baixa, necessites amplificació de volum — la capacitat de transmetre àudio <em>a dalt</em> El sostre del 100% que macOS imposa.</p>

<p>L'augment de volum funciona interceptant el senyal d'àudio abans que arribi als altaveus i multiplicant-ne l'amplitud. Amb un 150%, cada mostra d'àudio és 1,5 vegades més forta que l'original. Al 200%, s'ha duplicat. Això pot introduir una lleugera distorsió a nivells extrems amb cert contingut, però per a àudio baix és l'única manera de fer-lo realment audible.</p>

<h3>SoundDial: augment de volum per aplicació fins al 200%</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Dóna a cada aplicació del teu Mac un control lliscant de volum independent que va del 0% al <strong>200%</strong>. Si una aplicació específica és massa silenciosa — un reproductor de podcast, una pestanya de navegador, una videotrucada — pots potenciar només aquesta aplicació més enllà del 100% sense tocar res més.</p>

<img src="/apps/sounddial.png" alt="SoundDial augment de volum — control de volum per aplicació amb amplificació del 200% a macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Això és especialment útil per:</p>
<ul>
  <li><strong>Aplicacions de podcasts tranquils</strong> — alguns reproductors arriben al màxim massa baix, especialment amb podcasts gravats en condicions subòptimes</li>
  <li><strong>Videotrucades amb participants silenciosos</strong> — augmenta Zoom o Teams quan el micròfon d'algú està baix, sense fer que la teva música sigui més forta</li>
  <li><strong>Pestanyes del navegador</strong> — Els vídeos de YouTube, les aplicacions web i els mitjans integrats sovint es reprodueixen a volums més baixos que les aplicacions multimèdia dedicades</li>
  <li><strong>Gravacions antigues</strong> — l'àudio d'arxiu, la música vintage i el contingut de vídeo antic sovint es masteritzen a nivells inferiors</li>
</ul>

<p>L'avantatge clau respecte als amplificadors de volum de tot el sistema és que SoundDial augmenta <em>per aplicació</em>. Pots pujar l'aplicació silenciosa al 180% mantenint la resta a nivells normals. Un amplificador a nivell de sistema amplificaria tot per igual, fent que les teves aplicacions que ja són sorolloses fossin dolorosament sorolloses mentre que la més silenciosa es tornés una mica menys silenciosa.</p>

<h2>Quan les solucions externes són millors</h2>

<p>L'augment de volum té límits. Si intentes omplir una habitació amb so dels altaveus integrats d'un MacBook Air, cap programari pot superar la mida física d'aquests controladors. En aquest cas:</p>

<ul>
  <li><strong>Auriculars amb cable</strong> — saltar-se completament les limitacions dels altaveus, i la majoria d'auriculars poden sonar més forts que els altaveus integrats</li>
  <li><strong>Altaveus externs</strong> — fins i tot un parell d'altaveus USB o Bluetooth barats superaran els altaveus integrats del MacBook pel volum brut</li>
  <li><strong>Interfície d'àudio USB</strong> — per a ús professional, una interfície d'àudio dedicada proporciona un senyal net i potent als monitors d'estudi o auriculars</li>
</ul>

<p>Però per al cas quotidià — una pestanya de navegador massa silenciosa, una trucada on algú murmura, un podcast gravat en un armari — el volum del programari augmentant amb <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> és la solució més ràpida. Fes clic a la icona de la barra de menú, arrossega el control lliscant més enllà del 100%, fet.</p>

<p>Compra única a la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. No hi ha subscripció. macOS 14,2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Com baixar automàticament la música durant les trucades de Zoom a Mac",
    description:
      "Cada vegada que comença una trucada de Zoom, t'afanyes a pausar Spotify. Hi ha una manera millor: l'auto-ducking baixa automàticament la música quan s'activa el micròfon.",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>Comença la trucada. Estàs compartint la pantalla. La teva música encara sona a tot volum. Canvies frenèticament a Spotify, poses pausa, tornes a Zoom — però tothom ja ha sentit deu segons de la teva llista de reproducció. Li passa a tothom, i macOS passa perquè no hi ha cap connexió entre "una trucada que acaba de començar" i "potser baixa la música".</p>

<p>En alguns telèfons, això és automàtic — la música es pausa o s'apaga quan arriba una trucada. A Mac, estàs sol. A menys que configuris l'auto-ducking.</p>

<h2>Què és l'audio ducking?</h2>

<p><strong>Ànec d'àudio</strong> Vol dir baixar automàticament el volum de l'àudio de fons quan passa alguna cosa més important — com una trucada de veu. El terme prové de l'enginyeria de transmissió, on la música de fons "s'amaga sota" la veu de l'anunciador.</p>

<p>A la pràctica, funciona així:</p>
<ol>
  <li>Estàs escoltant música al 50% del volum</li>
  <li>T'uneixes a una trucada de Zoom</li>
  <li>La teva música baixa automàticament al 15%</li>
  <li>Pots sentir la crida clarament sense haver d'ajustar res manualment</li>
  <li>Finalització de la trucada</li>
  <li>La teva música torna automàticament al 50%</li>
</ol>

<p>Sense canviar d'aplicació. Sense pauses. No t'oblidis de desactivar el silenci de la música després de la trucada. És totalment automàtic.</p>

<h2>macOS té un ducking d'àudio integrat?</h2>

<p>No. macOS no té funció automàtica d'àudio. No hi ha res als modes de Configuració del Sistema, Accessibilitat o Focus que connecti "micròfon actiu" amb "àudio de fons més baix". Apple simplement no ha construït això.</p>

<p>Hi ha una opció d'Accessibilitat anomenada "Reprodueix àudio estèreo com a mono" i opcions per a alertes visuals de flaix, però res que ajusti automàticament el volum segons si estàs en una trucada.</p>

<h2>Les alternatives manuals (i per què són doloroses)</h2>

<h3>Pausa la música manualment abans de cada trucada</h3>
<p>Això és el que fa la majoria de gent. Funciona — fins que t'oblides. O fins que algú truca inesperadament. O fins que tens trucades seguides i estàs pausando i despausant Spotify dotze vegades al dia. També vol dir que no hi ha música de fons durant les trucades, fins i tot quan voldries que estigués a baix volum.</p>

<h3>Utilitza el mode Focus per silenciar-ho tot</h3>
<p>Podries crear un mode de focus "Meeting" que bloquegi els sons de notificació. Però els modes Focus no controlen el volum de la reproducció multimèdia. La teva música continua sonant a tot volum fins i tot en mode No Molestar — Focus només suprimeix notificacions.</p>

<h3>Configura manualment els perfils de volum</h3>
<p>Crea una configuració de "trucada" on baixis manualment tot excepte l'aplicació de comunicació abans de cada trucada. Això funciona, però requereix que recordis i canviïs manualment cada vegada. I després has de tornar a canviar.</p>

<h2>Auto-ducking amb SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Té una funció d'auto-ducking integrada que fa exactament el que macOS hauria de fer de manera nativa. Així és com funciona:</p>

<h3>Com detecta les trucades</h3>
<p>SoundDial monitoritza l'estat del micròfon del teu Mac — el mateix indicador que mostra el punt taronja a la barra de menú quan una aplicació utilitza el micròfon. Quan detecta que una aplicació de comunicació ha activat el teu micròfon, sap que una trucada ha començat.</p>

<p>Funciona amb totes les aplicacions de comunicació principals:</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Slack</strong> (s'ajunta i crida)</li>
  <li><strong>Google Meet</strong> (via Chrome)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Què passa quan comença una trucada</h3>
<p>En el moment que el teu micròfon s'activa per a una trucada, SoundDial redueix automàticament el volum de totes les aplicacions no relacionades amb la comunicació a un nivell que configures — el valor per defecte és el 30%. L'àudio de la trucada es manté a volum màxim. La música de fons baixa a un nivell subtil. Els sons de notificació es fan suaus.</p>

<p>Un petit indicador verd apareix a la capçalera de SoundDial per confirmar que l'auto-ducking està actiu.</p>

<h3>Què passa quan acaba la trucada</h3>
<p>Quan penges i el micròfon es desactiva, SoundDial restaura tots els volums de l'aplicació exactament on eren abans que comencés la trucada. La teva música torna a pujar fins al 50% (o on sigui que l'hagis tingut). No cal ajustar manualment.</p>

<h3>Configuració del nivell de l'ànec</h3>
<p>A la configuració de SoundDial, pots ajustar la <strong>nivell ànec</strong> — quant d'àudio de fons es redueix durant una trucada. El control lliscant oscil·la entre el 10% (gairebé inaudible) i el 80% (encara força present). El valor per defecte del 30% funciona bé per a la majoria de gent: la música es nota però no interfereix en la conversa.</p>

<img src="/apps/sounddial.png" alt="SoundDial funció d'auto-ducking que redueix automàticament el volum de la música durant una trucada de Zoom a Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Per què l'auto-ducking és millor que pausar</h2>

<p>Pausar la música abans d'una crida sembla senzill, però l'auto-ducking és millor en diversos aspectes:</p>

<ul>
  <li><strong>És automàtic.</strong> Mai s'oblida. Res de córrer quan arriba una trucada inesperada.</li>
  <li><strong>Tu guardes la música de fons.</strong> Moltes persones prefereixen música de fons suau durant les trucades en lloc del silenci. L'auto-ducking et permet mantenir-lo a un nivell còmode.</li>
  <li><strong>Gestiona diverses aplicacions.</strong> No és només música — els sons de notificació, les pestanyes del navegador i qualsevol altra font d'àudio s'ignoren simultàniament.</li>
  <li><strong>Restaura perfectament.</strong> Quan la trucada finalitza, cada aplicació torna al seu volum exacte anterior. No cal reajustar.</li>
  <li><strong>Funciona per a trucades consecutives.</strong> Si tens tres reunions seguides, fer un duc automàtic les controla totes sense que toquis res.</li>
</ul>

<h2>Muntatge en menys d'un minut</h2>

<ol>
  <li>Instal·lació <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial de la Mac App Store</a></li>
  <li>Obre la configuració → pestanya Auto-Duck</li>
  <li>Activar l'auto-ducking</li>
  <li>Ajusta el control lliscant del nivell d'ànec segons la teva preferència</li>
  <li>Això és tot — l'auto-ducking està actiu</li>
</ol>

<p>La propera vegada que t'uneixis a una trucada de Zoom, Teams o FaceTime, l'àudio de fons baixarà automàticament. Quan penges, torna. Compra única, sense subscripció.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Com silenciar una aplicació a Mac sense silenciar-ho tot",
    description:
      "Slack està fent un ping. Estàs en una trucada. Vols silenciar Slack però segueixes escoltant la teva crida. macOS no et deixa — així tens com fer-ho igualment.",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>Estàs en una trucada de Zoom. Slack no para de fer sorolls de notificació. Una pestanya de YouTube que t'havies oblidat comença a reproduir-se automàticament. Prems la tecla de silenci — i ara tampoc sents la teva crida. macOS mutes <em>tot</em>. No hi ha cap manera integrada de silenciar només una aplicació.</p>

<p>A Windows, feies clic dret a la icona de l'altaveu, obries la taula de volum i premies el botó de silenci al costat de Slack. Fet. En Slack és silenciós, tot la resta continua sonant. macOS no té equivalent.</p>

<p>Aquesta guia cobreix tots els mètodes disponibles per silenciar una aplicació específica al teu Mac — des de solucions integrades fins a l'única solució que realment funciona com un botó de silenci correcte.</p>

<h2>Per què no macOS pot silenciar aplicacions individuals</h2>

<p>macOS tracta l'àudio com un únic flux. L'àudio de totes les aplicacions es barreja abans d'arribar als teus altaveus, i l'únic control de volum que et dóna Apple funciona en aquesta sortida final de mesclatge. No hi ha manera d'entrar en aquesta barreja i silenciar una aplicació sense afectar la resta.</p>

<p>Això no és una limitació de maquinari — és una decisió de disseny de programari. El marc Core Audio de macOS admet control d'àudio per procés a nivell d'API. Apple simplement no ha creat una manera orientada a l'usuari per accedir-hi.</p>

<h2>Solucions integrades (i els seus límits)</h2>

<h3>1. Desactiva les notificacions de l'aplicació</h3>
<p>Ves a <strong>Configuració → notificacions del sistema</strong> I troba l'aplicació que vols silenciar. Pots desactivar els sons per a les notificacions, o desactivar-les completament.</p>
<p><strong>La condició:</strong> Això només funciona per a sons de notificació. Si l'aplicació fa altres sons — reproducció de mitjans, àudio de trucades, sons dins de l'aplicació — això no els afectarà. I també perds notificacions visuals, no només el so.</p>

<h3>2. Utilitza el mode Focus</h3>
<p>macOS modes de focus (No molestar, Treball, Personal, etc.) poden suprimir els sons de notificació d'aplicacions específiques. Pots configurar quines aplicacions poden notificar-te a cada mode Focus.</p>
<p><strong>La condició:</strong> Els modes de focus són sobre notificacions, no àudio. No silenciaran un huddle de Slack, ni una pestanya del navegador que reprodueixi àudio, ni cap reproducció multimèdia. També requereixen configuració prèvia per a cada mode — no pots simplement "silenciar aquesta aplicació ara mateix."</p>

<h3>3. Tanca l'aplicació</h3>
<p>L'opció nuclear. Si deixes Slack completament, no pot fer sorolls. Òbviament, això vol dir que tampoc pots veure cap missatge fins que no el tornis a obrir.</p>
<p><strong>La condició:</strong> No vols deixar l'aplicació — vols fer-ho <em>Segueix fent-lo servir</em> sense sentir-ho. Hi ha una gran diferència entre "mut" i "proper".</p>

<h3>4. Utilitza la configuració pròpia de l'aplicació</h3>
<p>Algunes aplicacions tenen una opció de "silenciar els sons" o "silenciar notificacions" amagada en algun lloc de les seves preferències. Slack ho té a Preferències → Notificacions → So i aparença. Spotify té una icona d'altaveu al reproductor.</p>
<p><strong>La condició:</strong> Has de trobar i navegar per la configuració de cada aplicació individualment. Moltes aplicacions no tenen aquesta opció en absolut. I canviar entre "silenciat" i "sense silenciar" significa tornar a les preferències cada vegada, en comptes de prémer un botó.</p>

<h2>La veritable solució: un botó de silenci per a cada aplicació</h2>

<p>El que realment vols és molt senzill: un botó de silenci al costat de cada aplicació que la silenciï instantàniament, sense afectar res més. Fes clic per silenciar, torna a clicar per desactivar el silenci. L'aplicació segueix funcionant, tu segueixes veient el seu contingut — simplement no l'escoltes.</p>

<p>Això és exactament el que fa un mesclador de volum per aplicació. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Es troba a la barra de menú i mostra cada aplicació de córrer amb el seu propi control de volum i botó de silenci.</p>

<img src="/apps/sounddial.png" alt="SoundDial mostrant botons de silenci per a cada aplicació a la barra de menú macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Per silenciar una aplicació:</p>
<ol>
  <li>Fes clic a la icona SoundDial a la barra de menú</li>
  <li>Troba l'aplicació que vols silenciar</li>
  <li>Fes clic a la icona de l'altaveu al costat</li>
</ol>

<p>Això és tot. L'aplicació està en silenci. La resta continua sonant al volum que tenia. Fes clic a la icona de l'altaveu de nou per desactivar el silenci — el volum torna exactament al mateix nivell que abans.</p>

<h2>Més enllà del silenci: control de volum per aplicació</h2>

<p>Un cop tens una taula de mescles per a cada aplicació, t'adones que silenciar és simplement l'extrem del que realment vols. La majoria de vegades, no vols posar en silenci completament una aplicació — vols fer-la <em>més silenciós</em>.</p>

<ul>
  <li>Notificacions de Slack al 15% — prou subtils per no interrompre, prou presents per notar-ho</li>
  <li>Música al 30% — un nivell de fons que no competeix amb la conversa</li>
  <li>Navegador al 60% — còmode per a la reproducció de vídeo</li>
  <li>Zoom al 100% — volum complet per a la trucada que importa</li>
</ul>

<p>SoundDial dóna a cada aplicació un control lliscant del 0% al 200%. Pots fer que les aplicacions siguin més silencioses que el seu mínim integrat o més sorolloses que el seu màxim integrat. I amb <strong>Perfils de volum</strong>, pots desar la configuració preferida i canviar entre presets — mode "Reunió", mode "Focus", mode "Música" — amb un sol clic.</p>

<p>La funció d'auto-ducking va encara més enllà: quan comences una trucada, SoundDial automàticament abaixa tot excepte l'aplicació de comunicació. Quan acaba la trucada, tot torna a pujar. Mai toques un slider.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a> — 14,99 € compra única, sense subscripció, macOS 14,2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Mesclador de volum per a Mac: La funció que falta macOS encara no té",
    description:
      "Windows té un mesclador de volum des del 2006. Aquí tens per què macOS encara no ho fa — i la millor manera d'obtenir control de volum per aplicació a la teva Mac el 2026.",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>Fes clic dret a la icona de l'altaveu en qualsevol PC amb Windows i trobaràs el Mesa de Volum — un panell que mostra cada aplicació que està fent so, cadascuna amb el seu propi control de volum independent. Pots baixar Spotify al 20% mantenint la trucada de Zoom al 100%. Pots silenciar Chrome sense tocar res més. Hi és des de Windows Vista el 2006.</p>

<p>Ara fes el mateix en un Mac. Fes clic a la icona de so a la barra de menú. Tens un slider. Això és tot. Un sol control lliscant que ho controla tot alhora. Cada aplicació, cada notificació, cada so del sistema — tot bloquejat.</p>

<p>Això no és una queixa de nínxol. És la funció d'àudio més sol·licitada a macOS, i Apple l'ha ignorat durant vint anys.</p>

<h2>Què fa realment un mesclador de volum</h2>

<p>Un mesclador de volum et dóna <strong>Control de volum independent per a cada aplicació</strong> Al teu ordinador. En lloc d'un control lliscant mestre, tens un control lliscant per aplicació. Cada control lliscant només afecta la sortida d'àudio d'aquella aplicació específica.</p>

<p>Així és com és això en la pràctica:</p>

<ul>
  <li><strong>Spotify</strong> al 25% — música de fons a un nivell còmode</li>
  <li><strong>Zoom</strong> Al 100% — escolta cada paraula de la reunió</li>
  <li><strong>Slack</strong> Silenciat — No hi ha notificacions durant el temps de focus</li>
  <li><strong>Safari</strong> al 60% — vídeo de YouTube a volum moderat</li>
  <li><strong>Sons del sistema</strong> al 10% — retroalimentació subtil sense espantar-te</li>
</ul>

<p>Tot això funcionant simultàniament, cadascun amb el seu propi volum. Canvia'n un i res més es mou. Això és el que fa un mesclador de volum, i això és el que macOS no té.</p>

<h2>Per què Apple no n'ha creat cap</h2>

<p>No és una limitació tècnica. El marc d'àudio de macOS — Core Audio — suporta completament l'encaminament d'àudio per procés i el control de volum a nivell d'API. Apple utilitza aquestes capacitats internament. Simplement no els han exposat als usuaris.</p>

<p>La raó probable és la filosofia de disseny d'Apple: menys opcions, interfície més senzilla. Un slider és més net que dotze. I per a algú que només fa una cosa a la vegada — escolta música O agafa una trucada O mira un vídeo — un sol control lliscant està bé.</p>

<p>Però la gent no utilitza els ordinadors així el 2026. El treball remot significa que estàs en una trucada amb música sonant, Slack sonant i una pestanya del navegador reproduint automàticament un vídeo, tot alhora. El model de "un sol control lliscant per a tot" es trenca completament quan tens cinc fonts d'àudio competint per les teves orelles.</p>

<h2>Les macOS solucions alternatives (i per què no funcionen)</h2>

<h3>Utilitza el control de volum integrat de cada aplicació</h3>
<p>Spotify té un control lliscant de volum. VLC en té un. QuickTime en té un. Però això vol dir canviar a cada aplicació individualment, trobar el seu control de volum, ajustar-lo i tornar a utilitzar-lo. Està repartit per una dotzena de llocs diferents, i la majoria d'aplicacions — Slack, Mail, Safari, Chrome — ni tan sols en tenen una.</p>

<h3>Utilitza "No molestar" per silenciar les notificacions</h3>
<p>Els modes d'enfocament poden suprimir els sons de notificació, però són binaris — tot o res. No pots dir "mantingues els sons de Slack però fes-los més fluixos." I els modes Focus no toquen el contingut multimèdia ni el volum de les trucades en absolut.</p>

<h3>Utilitza la configuració MIDI d'àudio</h3>
<p>Aquesta utilitat integrada gestiona els dispositius d'àudio i les freqüències de mostreig. No té res a veure amb el volum per aplicació. És una eina de configuració de dispositius, no una taula de mescladors.</p>

<h3>Crea dispositius de sortida múltiple</h3>
<p>Pots combinar les sortides d'àudio en un dispositiu agregat, però això envia el mateix àudio a diverses sortides — no et dóna control per a cada aplicació. És útil si vols so tant als altaveus com als auriculars alhora, però això és un problema completament diferent.</p>

<p>Cap d'aquestes solucions resol el problema fonamental: macOS no té cap manera integrada de dir "fes aquesta aplicació més silenciosa sense afectar res més."</p>

<h2>Què cal buscar en un mesclador de volum Mac</h2>

<p>Si Apple no el fabrica, ho faran les aplicacions de tercers. Però no tots els mescladors de volum són iguals. Això és el que diferencia un bon de mediocre:</p>

<h3>Detecció d'aplicacions en temps real</h3>
<p>La taula de mescles hauria de detectar automàticament totes les aplicacions que estiguin produint àudio actualment. No hauries d'haver d'afegir aplicacions manualment ni configurar res. Obre una aplicació i apareix a la taula de mesclatge. Si la tanques, desapareix.</p>

<h3>Rang de volum més enllà del 100%</h3>
<p>Algunes aplicacions són massa silencioses fins i tot al volum màxim — reproductors de podcasts silenciosos, pestanyes del navegador amb àudio suau, videotrucades on el micròfon d'algú està baix. Un bon mesclador t'ho permet <strong>Volum d'augment fins al 200%</strong>, amplificant efectivament l'àudio més enllà del que l'aplicació pot produir.</p>

<h3>Silenci d'un sol clic per aplicació</h3>
<p>Hauries de poder silenciar qualsevol aplicació amb un sol clic — sense moure el control lliscant. Quan desactivis, hauria de tornar exactament on era. Això és fonamental per silenciar ràpidament una aplicació sorollosa durant una trucada.</p>

<h3>Perfils per a diferents situacions</h3>
<p>No vols ajustar manualment vuit controls lliscants cada vegada que canvies de "treballar amb música" a "videotrucada" o "jugar". Els perfils et permeten desar una configuració de volum i aplicar-la amb un sol clic. Un perfil de "Reunió" podria posar Zoom al 100%, la música al 15% i les notificacions al 0%. Un perfil "Focus" podria silenciar tot excepte Spotify.</p>

<h3>Auto-ducking durant les trucades</h3>
<p>La millor característica que pot tenir un mesclador de volum: reduir automàticament l'àudio en segon pla quan t'uneixes a una trucada, i restaurar-lo quan la trucada acaba. No cal ajustar manualment. La teva música es torna baixa quan Zoom activa el micròfon, i torna quan penges.</p>

<h3>Integració amb la barra de menú</h3>
<p>Un mesclador de volum hauria d'estar a la barra de menú — un clic per obrir, ajustar i tancar. No hauria de ser una finestra completa, no hauria d'ocupar espai a la base i no hauria de requerir que canviïs de l'aplicació actual. Hauries de poder ajustar els volums sense perdre el focus en el que estàs fent.</p>

<h2>SoundDial: el mesclador de volum macOS hauria de tenir integrat</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> és una aplicació nativa macOS barra de menús que et dóna exactament el que Apple no et dóna: control de volum independent per a cada aplicació del teu Mac.</p>

<p>Es troba a la barra de menú i mostra cada aplicació en execució amb el seu propi control de volum. Arrossega un control lliscant per ajustar el volum de l'aplicació del 0% al 200%. Fes clic a la icona de l'altaveu per silenciar-lo instantàniament. Canvia entre perfils desats per a diferents situacions. Activa l'auto-ducking i la teva música es torna automàticament més baixa quan comença una trucada.</p>

<img src="/apps/sounddial.png" alt="SoundDial — mesclador de volum per a cada aplicació per a macOS mostra els controls lliscants de volum individuals de l'aplicació a la barra de menú" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Característiques clau:</p>
<ul>
  <li><strong>Lliscadors de volum per aplicació</strong> — Rang del 0% al 200% per a cada aplicació de córrer</li>
  <li><strong>Silenci d'un sol clic</strong> — silenciar qualsevol aplicació sense moure el seu control lliscant</li>
  <li><strong>Perfils de volum</strong> — desar i canviar entre configuracions de volum</li>
  <li><strong>Auto-ducking</strong> — la música baixa automàticament durant les trucades</li>
  <li><strong>Dreceres de teclat</strong> — desactiva la taula de mescles o silencia totes les aplicacions amb una tecla ràpida</li>
  <li><strong>Commutació de dispositius de sortida</strong> — canviar altaveus/auriculars des del mateix panell</li>
  <li><strong>Memòria de volum</strong> — recorda el volum de cada aplicació entre reinicis</li>
</ul>

<p>Compra única. No hi ha subscripció. macOS 14,2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Aconsegueix SoundDial a la Mac App Store</a>.</p>
`,
  },
};
