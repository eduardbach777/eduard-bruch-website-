import type { ArticleSet } from "./index";

export const roArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Audio pe Mac pentru podcasting: controlează ce auzi în timpul înregistrării",
    description:
      "Înregistrezi un podcast în timp ce monitorizezi nivelurile, îți auzi invitatul și gestionezi notificările — toate concurând pentru un singur slider de volum. Iată o configurare mai bună.",
    date: "2026-03-05",
    readTime: "5 min de citit",
    content: `
<p>Înregistrezi un podcast pe Mac. Trebuie să-ți auzi invitatul (prin Zoom, Riverside sau SquadCast) clar. Trebuie să monitorizezi nivelurile de înregistrare ale DAW-ului. Trebuie ca Slack să fie pe mut ca niciun ping să nu ajungă în înregistrare. Și trebuie ca sunetele de notificare ale sistemului să fie complet silențiate — un „ding" macOS în mijlocul unui interviu înseamnă audio inutilizabil.</p>

<p>macOS îți oferă un singur slider de volum pentru toate acestea. Nu este suficient.</p>

<h2>Provocarea audio pentru podcasting pe Mac</h2>

<p>În timpul unei sesiuni de înregistrare podcast, ai de obicei:</p>
<ul>
  <li><strong>Aplicația de comunicare</strong> (Zoom, Riverside, SquadCast) — audio-ul invitatului, trebuie să fie clar</li>
  <li><strong>DAW / aplicația de înregistrare</strong> (Logic, GarageBand, Audacity, Hindenburg) — monitorizarea propriilor niveluri</li>
  <li><strong>Surse de notificări</strong> (Slack, Mail, Calendar, Messages) — trebuie să fie complet silențioase în timpul înregistrării</li>
  <li><strong>Browser</strong> — poate avea notițe ale emisiunii, tab-uri de research sau un cronometru pornit</li>
</ul>

<p>Toate acestea la același volum înseamnă haos. Invitatul tău concurează cu sunetele sistemului. O notificare Slack ar putea strica o înregistrare. Și dacă trebuie să ajustezi volumul invitatului, schimbarea volumului sistemului schimbă și nivelurile de monitorizare.</p>

<h2>Soluția obișnuită</h2>

<p>Majoritatea podcasteri-lor folosesc o combinație de:</p>
<ul>
  <li>Modul de concentrare (Nu deranja) pentru a suprima notificările</li>
  <li>Închiderea manuală a Slack, Mail și a altor aplicații zgomotoase înainte de înregistrare</li>
  <li>Ajustarea volumului intern al aplicației de comunicare pentru invitat</li>
</ul>

<p>Funcționează, dar e predispus la erori. Uiți să activezi Nu deranja și o notificare îți strică înregistrarea. Uiți să închizi Slack și primești un apel. Și tot nu poți controla independent volumul invitatului față de nivelurile de monitorizare.</p>

<h2>Audio per aplicație pentru podcasting</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să creezi un mediu de înregistrare curat controlând fiecare aplicație independent:</p>

<img src="/apps/sounddial.png" alt="Configurare SoundDial pentru podcasting — audio invitat, monitorizare și notificări la niveluri independente" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil de înregistrare</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — audio clar al invitatului</li>
  <li><strong>Logic / GarageBand:</strong> 60% — monitorizare confortabilă fără oboseală auditivă</li>
  <li><strong>Slack:</strong> pe mut — zero sunete de notificare</li>
  <li><strong>Mail:</strong> pe mut</li>
  <li><strong>Messages:</strong> pe mut</li>
  <li><strong>Calendar:</strong> pe mut</li>
  <li><strong>Browser:</strong> pe mut — fără redare automată surpriză</li>
</ul>

<p>Salvează acest lucru ca profil „Înregistrare". Înainte de a apăsa pe înregistrare, aplică profilul cu un singur clic. Fiecare sursă de notificare este silențiată, invitatul tău e la volum maxim, iar monitorizarea e la un nivel confortabil.</p>

<h3>Profil de editare</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — monitorizare completă pentru editare</li>
  <li><strong>Spotify:</strong> pe mut — fără confuzie cu piesele de referință</li>
  <li><strong>Slack:</strong> 20% — notificări subtile în pauze</li>
  <li><strong>Browser:</strong> 40% — pentru notițe și research</li>
</ul>

<p>Două profiluri, două clicuri, două medii audio complet diferite. Fără închiderea și redeschiderea manuală a aplicațiilor. Fără uitarea reactivării notificărilor după înregistrare.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "De ce Mac-ul meu e atât de tare la volum maxim? Cum obții un control mai precis",
    description:
      "Boxele MacBook Pro sunt excelente — până când bubuie. Dacă și nivelurile moderate de volum par prea tari, iată cum obții un control audio mai precis.",
    date: "2026-03-08",
    readTime: "4 min de citit",
    content: `
<p>Modelele mai noi de MacBook Pro (14" și 16") au boxe remarcabil de puternice pentru un laptop. Atât de puternice încât nivelurile moderate de volum pot fi cu adevărat tari — mai ales într-o cameră liniștită, noaptea târziu sau cu căști. Diferența între „confortabil" și „prea mult" e uneori doar unul sau două trepte de volum.</p>

<h2>De ce treptele de volum par prea grosiere</h2>

<p>macOS are <strong>16 trepte de volum</strong> prin tastatură. Fiecare treaptă reprezintă aproximativ 6,25% din intervalul total. Pe boxe puternice sau căști sensibile, o singură treaptă poate reprezenta o schimbare semnificativă a volumului perceput — trecând de la „perfect" la „prea tare" cu o singură apăsare a tastei de volum.</p>

<h2>Soluție integrată: volum în sferturi de treaptă</h2>

<p>Ține apăsat <strong>Option + Shift</strong> și apasă volum sus/jos. Fiecare apăsare ajustează cu un sfert dintr-o treaptă normală, oferindu-ți <strong>64 de niveluri</strong> în loc de 16. Acest control de 4 ori mai fin face mult mai ușor să găsești volumul exact, mai ales cu boxe puternice sau căști.</p>

<p>Acesta este cel mai util truc audio pentru Mac pe care majoritatea oamenilor nu-l cunosc.</p>

<h2>Problema mai profundă: un singur slider pentru totul</h2>

<p>Chiar și cu 64 de niveluri, ai tot un singur slider care controlează fiecare aplicație. Dacă setezi volumul suficient de scăzut pentru sunete de notificare confortabile, muzica ta ar putea fi prea încetă. Dacă o setezi pentru muzică, un ping de notificare te-ar putea speria.</p>

<p>Adevărata problemă e că diferite surse audio au nevoie de volume diferite. Notificările ar trebui să fie subtile. Muzica ar trebui să fie prezentă. Apelurile ar trebui să fie clare. Video-ul din browser ar trebui să fie moderat. Un singur slider nu poate servi bine toate acestea.</p>

<h2>Volum per aplicație pentru control precis</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă fiecărei aplicații propriul slider de volum cu <strong>incremente de 1%</strong> de la 0% la 200%. Adică 200 de niveluri de precizie per aplicație, comparativ cu cele 16 (sau 64 cu modificatorul) trepte la nivel de sistem ale macOS.</p>

<img src="/apps/sounddial.png" alt="Control precis de volum per aplicație SoundDial cu precizie de 1% pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Setează volumul sistemului la un nivel de bază moderat (50-60%), apoi folosește SoundDial pentru a regla fin fiecare aplicație:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — nivel confortabil de fundal</li>
  <li><strong>Slack:</strong> 12% — ping subtil de notificare</li>
  <li><strong>Zoom:</strong> 85% — audio clar pentru apel fără a fi copleșitor</li>
  <li><strong>Safari:</strong> 45% — redare video moderată</li>
</ul>

<p>Astfel, nicio sursă audio nu e vreodată „prea tare". Fiecare e reglată la nivelul ideal independent. Un ping Slack la 12% abia se observă, în timp ce apelul Zoom la 85% e cristal de clar — totul la aceeași setare de volum a sistemului.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Probleme de volum cu Slack Huddle pe Mac: prea încet, prea tare sau în conflict cu muzica",
    description:
      "Huddle-urile Slack concurează cu muzica și notificările tale pentru același volum. Iată cum controlezi audio-ul huddle independent de restul pe Mac.",
    date: "2026-03-10",
    readTime: "5 min de citit",
    content: `
<p>Huddle-urile Slack sunt convenabile — apeși un buton și ești într-un apel vocal fără a programa o întâlnire. Dar audio-ul e un dezastru. Huddle-ul e la același volum cu Spotify. Sunetele de notificare Slack sună la același nivel ca apelul. Și când cineva împărtășește muzică sau un ecran cu audio în huddle, e fie inaudibil, fie asurzitor.</p>

<p>Problema nu e Slack. E macOS. Totul trece printr-un singur slider de volum, așa că audio-ul huddle, sunetele de notificare, muzica și audio-ul browserului se bat toate pentru același spațiu.</p>

<h2>Controalele audio interne ale Slack</h2>

<p>Slack are controale audio limitate:</p>
<ul>
  <li><strong>Preferințe notificări:</strong> Slack → Setări → Notificări → Sunet și aspect. Poți schimba sunetul de notificare sau dezactiva sunete specifice, dar nu poți seta volumul notificărilor independent de volumul huddle.</li>
  <li><strong>Volumul huddle:</strong> În timpul unui huddle, nu există un slider separat de volum pentru apel față de celelalte sunete ale Slack. Totul din Slack e un singur flux audio pentru macOS.</li>
  <li><strong>Dispozitiv de intrare/ieșire:</strong> Slack → Setări → Audio și Video îți permite să selectezi microfonul și boxele, dar nu niveluri de volum per funcție.</li>
</ul>

<h2>Cele trei probleme audio Slack</h2>

<h3>1. Huddle prea încet relativ la muzică</h3>
<p>Muzica ta e la un nivel confortabil. Te alături unui huddle. Vocea colegului tău e la același volum cu muzica — nu poți distinge cuvintele clar. Dacă mărești volumul sistemului, muzica devine prea tare.</p>

<h3>2. Sunete de notificare în timpul huddle-urilor</h3>
<p>Ești într-o discuție huddle. Fiecare mesaj Slack care sosește sună la același volum ca apelul. Într-un spațiu de lucru activ cu canale active, pingul constant face huddle-ul inutilizabil.</p>

<h3>3. Huddle prea tare pentru ascultare pasivă</h3>
<p>Uneori te alături unui huddle pentru a asculta pasiv în timp ce lucrezi. Vrei să fie la nivel de fundal — suficient de încet ca să nu distragi, suficient de tare ca să auzi dacă cineva îți spune numele. macOS nu te lasă să setezi Slack la 20% în timp ce browserul rămâne la 60%.</p>

<h2>Soluția: controlează volumul Slack independent</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă Slack propriul slider de volum, separat de orice altă aplicație. Deoarece audio-ul huddle și sunetele de notificare Slack fac parte din aceeași aplicație, sliderul le controlează pe amândouă — dar asta e de fapt ceea ce vrei de cele mai multe ori.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlând volumul Slack independent în timpul unui huddle în timp ce muzica se redă la un alt nivel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configurare optimizată pentru huddle</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (audio clar de huddle, notificările sunt tari dar ești activ în Slack)</li>
  <li><strong>Spotify:</strong> 15% (fundal abia auzit, nu concurează cu vocile)</li>
  <li><strong>Browser:</strong> pe mut (fără audio surpriză din tab-uri)</li>
</ul>

<h3>Configurare huddle pasiv</h3>
<ul>
  <li><strong>Slack:</strong> 30% (nivel de ascultare de fundal)</li>
  <li><strong>Spotify:</strong> 40% (audio-ul principal e muzica ta)</li>
  <li><strong>Browser:</strong> 50% (nivel normal de lucru)</li>
</ul>

<p>Salvează fiecare ca profil. Când începe un huddle, aplică profilul potrivit cu un singur clic. Sau folosește <strong>reducerea automată</strong> — când huddle-ul îți activează microfonul, SoundDial reduce automat totul în afară de Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Cum setezi un volum implicit pentru aplicații noi pe Mac",
    description:
      "Aplicațiile noi se lansează la volum maxim implicit. Iată cum faci ca fiecare aplicație nouă să pornească la un nivel confortabil — ca nimic să nu te ia prin surprindere.",
    date: "2026-03-12",
    readTime: "3 min de citit",
    content: `
<p>Instalezi o aplicație nouă. Se lansează pentru prima dată. Redă imediat audio — un sunet introductiv, o notificare, un video tutorial — la volumul maxim al sistemului. Nu te așteptai. Ai căștile pe tine. Îți țiuie urechile.</p>

<p>macOS nu are conceptul de „volum implicit pentru aplicații noi" deoarece macOS nu are volum per aplicație. Fiecare aplicație primește volumul sistemului, iar volumul sistemului e la ce l-ai setat ultima dată. Aplicațiile noi nu primesc tratament special — pur și simplu bubuie la orice nivel e restul.</p>

<h2>De ce e o problemă</h2>

<p>Când lansezi o aplicație pentru prima dată, nu ai idee cât de tare va fi. Unele aplicații redau sunete imediat (tutoriale de onboarding, sunete de notificare, videoclipuri de bun venit). Dacă volumul sistemului tău e la 80% pentru că ascultai muzică, sunetul aplicației noi e tot la 80% — ceea ce ar putea fi mult mai tare decât confortabil pentru o sursă audio neașteptată.</p>

<p>Acest lucru e special de deranjant cu:</p>
<ul>
  <li>Aplicații de comunicare (Slack, Teams) care redau un sunet la pornire</li>
  <li>Aplicații cu tutoriale video la prima lansare</li>
  <li>Jocuri care pornesc muzica ecranului de titlu imediat</li>
  <li>Aplicații bazate pe browser care redau conținut automat</li>
</ul>

<h2>Soluția: volum implicit pentru aplicații noi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> are un <strong>volum implicit configurabil</strong> pentru aplicații noi. În setări, alegi la ce nivel de volum ar trebui să pornească aplicațiile nou detectate — de exemplu, 70%. Prima dată când o aplicație se lansează și produce audio, SoundDial o setează la 70% în loc de 100%.</p>

<img src="/apps/sounddial.png" alt="Setare volum implicit SoundDial — aplicațiile noi pornesc la un nivel configurat în loc de volum maxim" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Asta înseamnă:</p>
<ul>
  <li>Fără audio surpriză la volum maxim de la aplicații nou instalate</li>
  <li>Fiecare aplicație nouă pornește la un nivel confortabil, previzibil</li>
  <li>Apoi poți ajusta în sus sau în jos de la valoarea implicită</li>
  <li>Odată ajustat, funcția de <strong>memorie a volumului</strong> reține nivelul aplicației pentru lansări viitoare</li>
</ul>

<p>E o funcție mică, dar rezolvă o neplăcere zilnică reală — „explozia surpriză a aplicației noi" care prinde pe toată lumea pe picior greșit cel puțin o dată.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Sunetul de pornire al Mac-ului e prea tare? Cum îl dezactivezi sau reduci",
    description:
      "Sunetul de pornire al Mac-ului bubuie la volum maxim de fiecare dată când repornești — mai ales stânjenitor în ședințe și camere liniștite. Iată cum îl silențiezi sau controlezi.",
    date: "2026-03-15",
    readTime: "4 min de citit",
    content: `
<p>Repornești Mac-ul într-un birou liniștit. Sala de ședință e complet tăcută. Apoi — <em>BONG</em> — sunetul de pornire bubuie la volum maxim. Toată lumea se uită la tine. Sunetul e iconic, dar e și incontrolabil și adesea jenitor de tare.</p>

<h2>Cum dezactivezi sunetul de pornire</h2>

<p>macOS îți permite să dezactivezi complet sunetul de pornire:</p>

<ol>
  <li>Mergi la <strong>Setări sistem → Sunet</strong></li>
  <li>Găsește <strong>„Redă sunet la pornire"</strong></li>
  <li>Debifează-l</li>
</ol>

<p>Gata. Mac-ul tău va porni silențios de acum înainte. Nu e nevoie de comenzi Terminal — această setare e disponibilă de la macOS Big Sur.</p>

<h3>Metoda Terminal (dacă preferi)</h3>
<p>Poți dezactiva și prin Terminal:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Pentru a reactiva:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Poți reduce sunetul de pornire în loc să-l dezactivezi?</h2>

<p>Nu direct. Sunetul de pornire se redă la un volum fix determinat de volumul sistemului la momentul opririi. Dacă Mac-ul tău era la 80% volum când l-ai oprit, sunetul se redă la aproximativ 80%. Dacă era la 20%, sunetul e mai încet.</p>

<p><strong>Soluție:</strong> Înainte de a reporni Mac-ul, redu volumul sistemului la 10-20%. Sunetul de pornire se va reda la acel nivel mai scăzut. Nu e ideal — necesită să-ți amintești — dar funcționează dacă vrei sunetul la un volum rezonabil în loc de complet silențiat.</p>

<h2>Problema mai largă a controlului sunetului pe Mac</h2>

<p>Sunetul de pornire e doar un exemplu al controlului audio limitat al macOS. Sunetele de sistem, sunetele de notificare și audio-ul aplicațiilor sunt toate amestecate împreună cu un control independent minim. Dacă te surprinzi ajustând în mod regulat volumul pentru a gestiona diferite surse audio pe parcursul zilei, controlul volumului per aplicație rezolvă problema mai largă.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă fiecărei aplicații de pe Mac propriul slider de volum. Setează aplicațiile de notificări la un nivel scăzut, muzica la un nivel confortabil și apelurile la volum maxim — toate independent. Salvează configurațiile ca profiluri și comută cu un singur clic.</p>

<img src="/apps/sounddial.png" alt="SoundDial — control volum per aplicație pentru gestionarea tuturor surselor audio Mac independent" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Volumul Cisco Webex e prea scăzut pe Mac? Cum rezolvi",
    description:
      "Apelurile Webex abia se aud pe Mac. Iată fiecare soluție — de la setările audio Webex la amplificarea volumului apelului peste 100% cu un mixer per aplicație.",
    date: "2026-03-18",
    readTime: "5 min de citit",
    content: `
<p>Webex e unul dintre cele mai folosite instrumente de videoconferință în medii corporative — și unul dintre cele mai reclamate pentru calitatea audio pe Mac. Volum scăzut la apeluri, voci neclare și audio care pare mai încet decât Zoom sau Teams la același volum de sistem. Dacă abia auzi apelurile Webex, nu ești singur.</p>

<h2>1. Verifică setările audio Webex</h2>

<p>În timpul unei întâlniri Webex, dă clic pe meniul audio (pictograma difuzor sau cele trei puncte → Setări audio):</p>
<ul>
  <li>Asigură-te că dispozitivul <strong>Difuzor</strong> corect e selectat</li>
  <li>Trage sliderul de volum al difuzorului la maxim</li>
  <li>Dă clic pe „Test" pentru a reda un ton de test și a verifica ieșirea</li>
  <li>Verifică dacă „Music Mode" e activat — dezactivează-l dacă nu prezinți specific muzică</li>
  <li>Verifică setările de eliminare a zgomotului — „Remove Background Noise" pe modul agresiv poate reduce volumul perceput al vocii</li>
</ul>

<h2>2. Verifică ieșirea macOS</h2>

<p>Setări sistem → Sunet → Ieșire. Verifică că dispozitivul corect e selectat și volumul e la maxim. După o actualizare macOS sau schimbare de dispozitiv, Webex ar putea folosi o ieșire neașteptată.</p>

<h2>3. Problema codecului Bluetooth</h2>

<p>Folosești AirPods sau căști Bluetooth? Activarea microfonului de către Webex forțează comutarea codecului AAC→SCO, reducând calitatea audio și volumul. Folosește un microfon separat (microfonul integrat al Mac-ului sau USB) și păstrează căștile Bluetooth doar ca ieșire.</p>

<h2>4. Procesarea audio specifică Webex</h2>

<p>Webex are procesare audio agresivă care poate reduce volumul aparent al participanților la apel. Încearcă aceste setări Webex:</p>
<ul>
  <li>Setează eliminarea zgomotului pe „Low" în loc de „High"</li>
  <li>Dezactivează „Optimize for my voice" dacă e activat</li>
  <li>Încearcă să comuți de la „Computer Audio" la un dispozitiv specific</li>
</ul>

<h2>5. Problema IT/administrator</h2>

<p>În medii corporative, Webex e adesea gestionat de IT cu politici audio specifice. Unele setări pot fi blocate sau pre-configurate. Dacă soluțiile de bază nu funcționează, verifică cu departamentul IT despre politicile audio Webex. Unele organizații restricționează nivelurile audio maxime sau impun setări specifice de procesare audio.</p>

<h2>6. Amplifică Webex peste 100%</h2>

<p>Dacă setările sunt la maxim și participanții sunt încă prea înceți, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să amplifici Webex la <strong>200%</strong>. Aceasta amplifică audio-ul apelului dincolo de maximul integrat al Webex — util când un participant are un microfon slab sau când procesarea audio Webex reduce prea mult semnalul.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplificând volumul apelului Cisco Webex peste 100% pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial ajută și în timpul ședințelor Webex consecutive: folosește reducerea automată pentru a reduce automat muzica de fundal când începe fiecare ședință, și o restaurează în pauze. Salvează un profil de volum „Ședințe" pentru a seta instant echilibrul audio preferat pentru ziua de lucru.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Cum asculți două lucruri simultan pe Mac fără să înnebunești",
    description:
      "Muzică și un podcast. O prelegere și un video cu notițe. Un apel și muzică de fundal. macOS te obligă să alegi un singur volum pentru ambele — iată cum le echilibrezi.",
    date: "2026-03-20",
    readTime: "4 min de citit",
    content: `
<p>Vrei să asculți două surse audio în același timp. Muzică în timpul unui apel. Un podcast în timp ce urmărești un tutorial. Ambianță de fundal în timp ce studiezi. Două lucruri, două volume ideale diferite. macOS îți oferă un singur slider pentru ambele.</p>

<p>Aceasta e limitarea audio fundamentală a macOS: fiecare aplicație împarte un singur volum. Nu poți spune „asta la 30%, aia la 80%". E totul la un nivel, sau nimic.</p>

<h2>Când chiar ai nevoie de două surse audio</h2>

<p>Nu e un caz marginal. E cum folosesc majoritatea oamenilor computerele:</p>

<ul>
  <li><strong>Muzică + apel video</strong> — cel mai frecvent. Muzică de fundal în timpul unei ședințe Zoom, dar suficient de încet ca să auzi colegii.</li>
  <li><strong>Prelegere + material de referință</strong> — un student urmărește o prelegere înregistrată în timp ce ocazional vizionează un tutorial YouTube pentru context.</li>
  <li><strong>Podcast + sunete ambientale</strong> — asculți un podcast în timp ce o aplicație de zgomot alb sau ploaie se redă încet.</li>
  <li><strong>Două tab-uri de browser</strong> — un video de instruire într-un tab și o demonstrație în altul, la volume diferite.</li>
  <li><strong>Joc + chat vocal</strong> — audio de joc pentru imersiune, Discord pentru comunicare.</li>
</ul>

<p>În fiecare caz, o sursă e „primară" (mai tare, mai importantă) și cealaltă e „secundară" (mai încetă, de suport). Raportul ideal e diferit pentru fiecare combinație, și se schimbă pe parcursul zilei.</p>

<h2>Limitarea macOS</h2>

<p>macOS are un singur slider de volum. Apasă tasta de volum și totul se schimbă egal. Dacă setezi volumul pentru ascultare confortabilă de podcast, aplicația de sunete de ploaie e tot la acel nivel — fie prea tare (distragătoare), fie nu ai ajustat-o în propria aplicație (dacă are măcar un control de volum).</p>

<p>Unele aplicații au slidere interne de volum (Spotify, VLC), dar majoritatea nu au. Și chiar când au, comutarea între aplicații pentru a ajusta două controale separate de volum e greoaie și lentă.</p>

<h2>Soluția: volum per aplicație într-un singur panou</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pune fiecare aplicație într-un panou din bara de meniu cu slidere de volum independente. Ambele surse audio, una lângă alta, fiecare cu propriul nivel. Ajustează una fără a o atinge pe cealaltă.</p>

<img src="/apps/sounddial.png" alt="SoundDial arătând două surse audio la niveluri diferite de volum pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Exemple de configurări:</p>

<p><strong>Muzică + apel Zoom:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>Podcast + sunete de ploaie:</strong></p>
<ul>
  <li>Aplicație podcast: 70% | Aplicație ploaie: 15%</li>
</ul>

<p><strong>Prelegere + tutorial YouTube:</strong></p>
<ul>
  <li>Zoom (prelegere): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>Fiecare combinație e un echilibru diferit. Salvează cele pe care le folosești regulat ca <strong>profiluri de volum</strong> și comută cu un singur clic. Reducerea automată gestionează automat scenariul muzică+apel — când începe un apel, muzica scade la nivelul configurat fără să atingi nimic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Cum vizionezi filme pe Mac fără să trezești pe toată lumea",
    description:
      "Dialogul e inaudibil, apoi exploziile zguduie pereții. Iată cum îmblânzești audio-ul filmelor pentru vizionare nocturnă pe Mac — fără a pierde niciun cuvânt.",
    date: "2026-03-22",
    readTime: "5 min de citit",
    content: `
<p>E 1 noaptea. Vizionezi un film pe MacBook în pat. Personajele șoptesc — dai volumul mai tare. Apoi începe o urmărire cu mașini și dintr-odată întregul apartament te poate auzi. Te repezi la tasta de volum. Ciclul se repetă timp de două ore.</p>

<p>Problema e <strong>intervalul dinamic</strong> — diferența dintre cele mai silențioase și cele mai puternice momente ale unui film. Într-un cinematograf cu un sistem de sunet puternic, acest interval creează o experiență imersivă. Pe un MacBook la miezul nopții, creează o luptă constantă între „nu aud dialogul" și „trezesc vecinii".</p>

<h2>De ce filmele sunt mai tari decât muzica sau podcasturile</h2>

<p>Muzica e de obicei masterizată cu interval dinamic comprimat — diferența între părțile cele mai silențioase și cele mai tari e relativ mică (poate 10-15 dB). Podcasturile sunt și mai comprimate. Filmele, mai ales cele de acțiune, pot avea un interval dinamic de <strong>30-40 dB</strong> — părțile silențioase sunt sussur-liniștite iar părțile tari sunt proiectate să zguduie scaunele cinematografului.</p>

<p>Când setezi volumul MacBook-ului pentru a auzi dialogul, scenele de acțiune sunt de 100 de ori mai tari ca presiune sonoră. Nu există un volum de sistem confortabil care să funcționeze pentru ambele.</p>

<h2>Soluția 1: Folosește modul de noapte al serviciului de streaming</h2>

<p>Unele servicii de streaming au o funcție de compresie a intervalului dinamic special pentru asta:</p>
<ul>
  <li><strong>Netflix:</strong> Caută un buton „Reduce Loud Sounds" în setările audio în timpul redării</li>
  <li><strong>Apple TV+:</strong> Setări sistem → Accesibilitate → „Reduce Loud Sounds"</li>
  <li><strong>Amazon Prime:</strong> „Dialog Boost" pe titlurile suportate</li>
  <li><strong>Disney+:</strong> Nu are o funcție echivalentă în prezent</li>
</ul>

<p>Aceste funcții comprimă intervalul dinamic astfel încât părțile silențioase sunt mai tari și părțile tari sunt mai silențioase. Rezultatul e un audio mai uniform care funcționează la volume scăzute.</p>

<h2>Soluția 2: Folosește căști</h2>

<p>Căștile rezolvă partea cu „trezitul tuturor" — audio-ul tău e privat. Dar nu rezolvă problema intervalului dinamic. Ciclul dialog-explozie continuă, doar în urechile tale. Aici ajută controlul volumului per aplicație: setează volumul aplicației de streaming precis pentru ascultare cu căști.</p>

<h2>Soluția 3: Setează aplicația de streaming la un volum specific</h2>

<p>Adevărata problemă pentru vizionarea nocturnă e că aplicația de streaming, sunetele de notificare și orice alt audio sunt toate la același volum de sistem. Un ping Slack la 2 noaptea la același volum cu dialogul filmului e o surpriză de nivel infarct.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să creezi configurarea perfectă pentru noapte:</p>

<img src="/apps/sounddial.png" alt="Configurare SoundDial pentru film de noapte — aplicația de streaming la volum moderat, notificări pe mut" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil de film de noapte</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / browser:</strong> 40-50% — nivel confortabil de dialog fără scene de acțiune asurzitoare</li>
  <li><strong>Slack:</strong> pe mut — fără pinguri surpriză</li>
  <li><strong>Mail:</strong> pe mut</li>
  <li><strong>iMessage:</strong> pe mut</li>
  <li><strong>Sunete de sistem:</strong> pe mut</li>
</ul>

<p>Salvează asta ca profil „Noapte". Când începi un film de noapte, aplică profilul cu un singur clic. Fiecare sursă de notificare e silențiată, iar aplicația de streaming e la un volum controlat. Când termini, comută înapoi la profilul de zi.</p>

<p>Combină asta cu funcția „Reduce Loud Sounds" a serviciului de streaming pentru efect maxim: serviciul comprimă intervalul dinamic, iar SoundDial se asigură că nimic altceva de pe Mac nu face zgomot.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Volumul Mac se resetează după repaus? Cum păstrezi setările audio",
    description:
      "De fiecare dată când Mac-ul se trezește din repaus, volumul e greșit — resetat la maxim, scăzut la zero sau comutat la ieșirea greșită. Iată de ce și cum rezolvi.",
    date: "2026-03-25",
    readTime: "5 min de citit",
    content: `
<p>Închizi capacul MacBook-ului. Îl deschizi mai târziu. Volumul e diferit. Poate e la maxim când l-ai avut la 40%. Poate s-a comutat de la căști la boxe. Poate e la zero. Era bine înainte de repaus — acum e greșit.</p>

<p>Resetarea volumului după repaus e un bug persistent macOS care apare în diverse forme pe diferite versiuni macOS. Iată ce-l cauzează și cum faci față.</p>

<h2>De ce se întâmplă</h2>

<h3>1. Dispozitivul de ieșire audio s-a schimbat în timpul repausului</h3>
<p>Dacă aveai căști Bluetooth conectate înainte de repaus și se deconectează în timp ce Mac-ul doarme (bateria a murit, te-ai depărtat), macOS comută la boxele integrate când se trezește. Deoarece macOS memorează volumul per dispozitiv, volumul se schimbă la ceea ce erau setate boxele ultima dată — ceea ce ar putea fi foarte diferit de volumul căștilor.</p>

<h3>2. Repornirea daemonului Core Audio</h3>
<p>Daemonul audio macOS (coreaudiod) uneori se repornește în timpul ciclurilor repaus/trezire. Când se repornește, se poate inițializa cu niveluri de volum implicite în loc de ultimele setări. Acesta e un bug de sistem pe care Apple l-a rezolvat parțial în diverse actualizări dar nu l-a eliminat niciodată complet.</p>

<h3>3. Reconectarea HDMI/DisplayPort</h3>
<p>Dacă folosești un afișaj extern prin HDMI sau DisplayPort, închiderea și deschiderea capacului poate cauza deconectarea și reconectarea afișajului. Unele afișaje sunt și dispozitive de ieșire audio, și macOS poate comuta de la sau la boxele afișajului în timpul acestui proces, schimbând volumul.</p>

<h3>4. Re-împerecherea Bluetooth</h3>
<p>Când dispozitivele Bluetooth se reconectează după repaus, negocierea volumului poate rezulta într-un nivel diferit de ce aveai înainte. Acest lucru e mai ales frecvent cu căștile Bluetooth de la terți (mai puțin cu AirPods, pe care Apple le-a optimizat).</p>

<h2>Soluții</h2>

<h3>Prevenirea deconectării Bluetooth în timpul repausului</h3>
<p>Setări sistem → Bluetooth → Avansat (sau clic „i" pe dispozitivul tău). Unele setări controlează dacă Bluetooth rămâne activ în timpul repausului. Menținerea conexiunii active previne ciclul deconectare/reconectare care resetează volumul.</p>

<h3>Dezactivează comutarea automată pentru AirPods</h3>
<p>Setări sistem → Bluetooth → clic „i" lângă AirPods → „Conectare la acest Mac" → setează la „Când a fost conectat ultima dată la acest Mac". Asta previne AirPods să se conecteze automat de la alt dispozitiv în timpul repausului.</p>

<h3>Setează un dispozitiv de ieșire consistent</h3>
<p>După trezirea din repaus, ține apăsat Option și dă clic pe pictograma Sunet din bara de meniu. Selectează dispozitivul de ieșire preferat. Fă asta în mod consistent și macOS ar trebui să „țină" eventual de preferința ta.</p>

<h3>Resetare NVRAM (Mac-uri Intel)</h3>
<p>Dacă resetările de volum sunt cronice, resetează NVRAM: oprire → pornire ținând Option+Command+P+R timp de 20 de secunde. Aceasta curăță setările audio stocate și poate rezolva problemele persistente de volum.</p>

<h2>Protejează-ți echilibrul audio cu SoundDial</h2>

<p>Chiar dacă volumul sistemului se resetează după repaus, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> protejează echilibrul volumului <em>per aplicație</em>. Funcția de <strong>memorie a volumului</strong> salvează volumul fiecărei aplicații independent și îl restaurează după trezire, repornire sau relansare a aplicației.</p>

<img src="/apps/sounddial.png" alt="SoundDial păstrând nivelurile de volum per aplicație după ciclurile de repaus și trezire ale Mac-ului" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Deci chiar dacă macOS resetează volumul sistemului la 80% după repaus, echilibrul per aplicație rămâne intact:</p>
<ul>
  <li>Spotify tot la 30% din volumul sistemului</li>
  <li>Zoom tot la 100%</li>
  <li>Slack tot pe mut</li>
</ul>

<p>S-ar putea să trebuiască să repari volumul sistemului (o singură ajustare), dar nu trebuie să re-echilibrezi toate aplicațiile (ceea ce ar fi șase sau șapte ajustări). Și cu <strong>profilurile de volum</strong>, chiar și recuperarea completă e un singur clic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Audio pe Mac pentru producție muzicală: controlează DAW-ul și comunicarea separat",
    description:
      "Folosești Logic Pro sau Ableton în timp ce ești pe un apel Discord? Iată cum auzi DAW-ul la fidelitate completă păstrând chat-ul vocal la un nivel confortabil.",
    date: "2026-03-28",
    readTime: "5 min de citit",
    content: `
<p>Produci muzică în Logic Pro (sau Ableton, sau FL Studio). Ești și pe Discord cu un colaborator. Problema: ieșirea DAW-ului și Discord se bat pentru același nivel de volum. Dă volumul mai tare la Logic și Discord bubuie în urechile tale. Dă-l mai încet pentru Discord și mixul tău e prea silențios pentru a-l evalua corect.</p>

<p>Aceasta e o problemă reală pentru producătorii muzicali pe Mac deoarece volumul de monitorizare afectează direct deciziile de mixare. Dacă DAW-ul tău e prea silențios pentru că Discord concurează, vei mixa mai tare decât intenționat. Dacă Discord acoperă detaliile, vei rata probleme în mix.</p>

<h2>De ce contează pentru producție</h2>

<p>Producția muzicală necesită <strong>niveluri de monitorizare precise</strong>. Trebuie să auzi DAW-ul la un volum consistent și calibrat pentru a lua decizii de mixare fiabile. Aplicațiile de comunicare, notificările și alte surse audio interferează cu asta — dar adesea ai nevoie de ele simultan pentru colaborare la distanță.</p>

<p>Studiourile profesionale rezolvă asta cu căi de monitorizare separate și sisteme de talkback. Pe un laptop, ai nevoie de software.</p>

<h2>Abordarea internă a DAW-ului</h2>

<p>Ai putea folosi nivelul intern de monitorizare al DAW-ului pentru a-l menține la o ieșire consistentă, apoi ajustezi volumul intern al Discord. Dar:</p>
<ul>
  <li>Sliderul de volum de ieșire al Discord e imprecis și limitat la 0-100%</li>
  <li>Tot nu poți preveni sunetele de sistem și notificările să interfereze la niveluri neașteptate</li>
  <li>Dacă trebuie să referențiezi o piesă în Spotify sau YouTube, acelea sunt și la volumul sistemului</li>
</ul>

<h2>Volum per aplicație pentru producție</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să setezi volume exacte pentru fiecare aplicație independent:</p>

<img src="/apps/sounddial.png" alt="SoundDial separând ieșirea DAW de Discord și piese de referință pe macOS pentru producție muzicală" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configurare de producție</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — nivelul principal de monitorizare</li>
  <li><strong>Discord / chat vocal:</strong> 40-60% — audibil dar clar secundar mixului tău</li>
  <li><strong>Spotify / piese de referință:</strong> 80% — potrivire cu nivelul DAW-ului pentru comparații A/B precise</li>
  <li><strong>Slack / notificări:</strong> pe mut — zero interferențe în timpul producției</li>
  <li><strong>Safari / Chrome:</strong> 50% — pentru vizionarea tutorialelor fără a-ți sparge urechile</li>
</ul>

<h3>Salvează ca profil „Producție"</h3>
<p>Salvează această configurație și aplică-o cu un singur clic când te așezi să produci. Când termini și treci la utilizare casual, aplică profilul „Normal". Fără re-ajustarea a opt aplicații.</p>

<h3>Reducere automată pentru sesiuni la distanță</h3>
<p>Dacă ești pe un apel cu un colaborator, reducerea automată a SoundDial poate reduce aplicațiile non-comunicare când microfonul e activ. Dar pentru producție, s-ar putea să vrei să <em>dezactivezi</em> reducerea automată — ai nevoie de DAW la niveluri consistente indiferent dacă vorbești. Comutarea e un clic în setări.</p>

<h2>O notă despre latență</h2>

<p>SoundDial folosește API-ul Core Audio Tap al Apple pentru controlul volumului. Procesarea adaugă latență neglijabilă — imperceptibilă pentru scopuri de monitorizare. Dacă înregistrezi și monitorizezi prin DAW cu monitorizare directă activată, SoundDial nu interferează cu calea audio a DAW-ului. Ajustează doar nivelul de ieșire care ajunge la boxe/căști.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Volumul Apple Music e prea scăzut pe Mac? Cum rezolvi și amplifici",
    description:
      "Apple Music la volum maxim pe Mac dar tot prea încet? Verifică Sound Check, setările EQ și învață cum amplifici Apple Music peste 100%.",
    date: "2026-03-30",
    readTime: "5 min de citit",
    content: `
<p>Apple Music e la volum maxim. Mac-ul tău e la volum maxim. O piesă care știi că ar trebui să fie tare abia se aude. Între timp, comutând la Spotify — aceeași piesă, același volum — e vizibil mai tare. Ce se întâmplă?</p>

<p>Apple Music are mai multe setări care pot reduce volumul de redare, și nu sunt evidente. Să trecem prin fiecare.</p>

<h2>1. Verifică Sound Check</h2>

<p>Apple Music are o funcție numită <strong>Sound Check</strong> care normalizează volumul tuturor pieselor astfel încât să se redea la aproximativ aceeași intensitate percepută. Aceasta previne salturile deranjante de volum între piese, dar o face <em>reducând</em> volumul pieselor mai tari — făcând totul mai silențios în general.</p>

<p>Pentru a verifica: Deschide aplicația Music → Setări (⌘,) → Redare → <strong>Sound Check</strong>.</p>

<p>Dacă Sound Check e activat, încearcă să-l dezactivezi. Piesele care erau reduse pentru a se potrivi pieselor mai silențioase se vor reda acum la nivelul original masterizat — care e adesea semnificativ mai tare.</p>

<h2>2. Verifică setarea EQ</h2>

<p>Apple Music are un egalizator integrat. Unele presetări EQ reduc volumul general pentru a preveni clipping-ul la amplificarea frecvențelor specifice.</p>

<p>Verifică: Aplicația Music → Setări → Redare → <strong>EQ</strong>. Dacă e selectat un presetare EQ (mai ales „Spoken Word", „Late Night" sau „Small Speakers"), încearcă să setezi la „Off" și vezi dacă volumul se îmbunătățește.</p>

<p>EQ-ul „Late Night" în particular comprimă intervalul dinamic — făcând părțile silențioase mai tari dar părțile tari mai silențioase. Asta poate face totul să pară „mai plat" și mai scăzut ca volum.</p>

<h2>3. Verifică setările Lossless Audio</h2>

<p>Dacă ai Apple Music Lossless activat (Setări → Calitate audio), stream-ul de calitate superioară poate fi de fapt la un volum perceput mai scăzut decât stream-ul AAC standard pentru unele piese. Asta e pentru că lossless nu are aceleași ajustări de masterizare pe care Apple le aplică versiunilor AAC.</p>

<p>Încearcă să comuți temporar la calitate AAC pentru a vedea dacă diferența de volum e perceptibilă.</p>

<h2>4. Siguranța căștilor</h2>

<p>Setări sistem → Sunet → Siguranța căștilor. Dacă „Reduce Loud Audio" e activat, macOS limitează volumul căștilor la nivel global — afectând Apple Music împreună cu orice altceva.</p>

<h2>5. Amplifică Apple Music peste 100%</h2>

<p>Dacă ai verificat totul și Apple Music e încă prea silențios — fie Sound Check e prea agresiv, un album silențios, sau boxele MacBook-ului pur și simplu nu sunt suficient de puternice — o amplificare per aplicație rezolvă.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să amplifici Apple Music la <strong>200%</strong>. Semnalul audio e amplificat la nivel de sistem înainte de a ajunge la boxe sau căști. Doar Apple Music devine mai tare — Zoom, Slack și browserul tău rămân la nivelurile curente.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplificând volumul Apple Music peste 100% pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Aceasta e utilă și pentru problema opusă: dacă Apple Music e prea tare relativ la apelul Zoom, reduce Apple Music la 25% în SoundDial păstrând Zoom la 100%. Controlul per aplicație înseamnă că nu trebuie niciodată să compromiți volumul unei aplicații pentru altă.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mixer de volum gratuit pentru Mac: ce obții de fapt (și ce nu)",
    description:
      "Cauți un mixer de volum per aplicație gratuit pentru Mac? Iată o analiză sinceră a opțiunilor gratuite, ce le lipsește și când merită să plătești.",
    date: "2026-04-03",
    readTime: "6 min de citit",
    content: `
<p>Dacă cauți „mixer de volum gratuit pentru Mac", vei găsi un rezultat principal: <strong>Background Music</strong>. E singura aplicație notabilă gratuită, open-source de control volum per aplicație pentru macOS. Să vedem ce obții de fapt — și la ce renunți.</p>

<h2>Background Music: opțiunea gratuită</h2>

<p>Background Music e o aplicație gratuită, open-source găzduită pe GitHub. Îți oferă:</p>

<ul>
  <li><strong>Slidere de volum per aplicație</strong> — control de volum de bază pentru fiecare aplicație în funcțiune</li>
  <li><strong>Pauză automată muzică</strong> — pune pe pauză playerul de muzică când altă aplicație redă audio, reia când se oprește</li>
  <li><strong>Setare dispozitiv de ieșire implicit</strong> — suprascrie ce dispozitiv folosesc aplicațiile implicit</li>
</ul>

<h3>Ce nu are Background Music</h3>
<ul>
  <li><strong>Fără amplificare de volum peste 100%</strong> — sliderele merg de la 0% la 100% doar. Nu poate amplifica aplicații silențioase.</li>
  <li><strong>Fără profiluri de volum</strong> — nu poate salva și comuta între configurații</li>
  <li><strong>Fără reducere automată</strong> — pauza automată e diferită de reducerea automată. Pauza oprește muzica complet; reducerea o scade la un nivel confortabil de fundal. Mulți oameni preferă muzică de fundal încetă în timpul apelurilor în loc de liniște totală.</li>
  <li><strong>Fără memorie a volumului</strong> — nu memorează volumele per aplicație între reporniri</li>
  <li><strong>Fără scurtături de tastatură</strong> — fără taste rapide pentru a comuta mixerul sau a pune pe mut toate aplicațiile</li>
  <li><strong>Fără comutare dispozitiv de ieșire</strong> — nu poate comuta boxe/căști din același panou</li>
</ul>

<h3>Problema fiabilității</h3>
<p>Cea mai mare problemă a Background Music nu e funcționalitatea — e stabilitatea. Funcționează instalând un <strong>driver de dispozitiv audio virtual</strong>, iar acest driver se strică cu actualizările macOS. După aproape fiecare lansare majoră macOS (Ventura, Sonoma, Sequoia, Tahoe), utilizatorii raportează:</p>
<ul>
  <li>Dispozitivul virtual nu se instalează</li>
  <li>Pocnituri și distorsiuni audio</li>
  <li>Aplicații nedetectate</li>
  <li>Fără ieșire audio deloc</li>
  <li>Aplicația se blochează la lansare</li>
</ul>

<p>Deoarece e un proiect open-source menținut de voluntari, reparațiile nu sunt mereu la timp. Ai putea rămâne fără control volum per aplicație săptămâni întregi după o actualizare macOS.</p>

<h2>Alte opțiuni „gratuite"</h2>

<h3>eqMac (nivel gratuit)</h3>
<p>Nivelul gratuit al eqMac oferă un egalizator la nivel de sistem dar nu control volum per aplicație. Funcțiile per aplicație necesită eqMac Pro (abonament). Versiunea gratuită e utilă dacă ai nevoie în principal de EQ, nu de mixare de volum.</p>

<h3>macOS integrat</h3>
<p>macOS nu are mixer de volum integrat. Cel mai apropiat e sliderul de volum al alertelor din Setări sistem → Sunet, care afectează doar sunetele de sistem — nu audio-ul aplicațiilor.</p>

<h2>Când gratuit e suficient</h2>

<p>Background Music ar putea fi bine dacă:</p>
<ul>
  <li>Ai nevoie doar de volum per aplicație de bază (0-100%)</li>
  <li>Nu ai nevoie de profiluri, reducere automată sau amplificare de volum</li>
  <li>Ești confortabil reparându-l când actualizările macOS îl strică</li>
  <li>Ești ok cu un dispozitiv audio virtual în lanțul tău audio</li>
</ul>

<h2>Când merită să plătești</h2>

<p>Un mixer de volum plătit merită dacă ai nevoie de:</p>
<ul>
  <li><strong>Fiabilitate</strong> — funcționează după actualizări macOS fără a aștepta reparații de la voluntari</li>
  <li><strong>Amplificare volum la 200%</strong> — amplifică aplicații silențioase dincolo de maximul integrat</li>
  <li><strong>Profiluri</strong> — salvează configurații și comută între Ședință/Concentrare/Gaming cu un singur clic</li>
  <li><strong>Reducere automată</strong> — reducere automată a volumului în timpul apelurilor, nu doar pauză automată</li>
  <li><strong>Fără drivere de sistem</strong> — funcționează cu API-ul nativ Apple, fără dispozitive audio virtuale care se pot strica</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> costă €14,99 — o singură dată, nu abonament. Pentru context, asta e mai puțin decât două luni de abonament Spotify, pentru un instrument pe care îl vei folosi în fiecare zi. E mai puțin de jumătate din prețul SoundSource ($39), și include funcții (profiluri, reducere automată) pe care SoundSource nu le are.</p>

<img src="/apps/sounddial.png" alt="SoundDial — mixer de volum fiabil per aplicație pentru Mac cu profiluri, reducere automată și amplificare 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, sandbox-at, fără drivere de sistem. €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Cum echilibrezi volumul muzicii și al chat-ului vocal pe Mac",
    description:
      "Muzica e prea tare pe Discord. Sau apelul e prea încet sub Spotify. macOS nu te lasă să le echilibrezi — iată cum setezi raportul perfect.",
    date: "2026-04-05",
    readTime: "4 min de citit",
    content: `
<p>Vrei să asculți muzică în timp ce vorbești cu prietenii pe Discord (sau Zoom, sau FaceTime). Muzica trebuie să fie prezentă dar nu copleșitoare. Chat-ul vocal trebuie să fie clar și dominant. Cerere simplă. macOS o face imposibilă.</p>

<p>Cu un singur volum de sistem controlând totul, ești blocat: dă-l mai tare pentru apel și muzica e prea tare. Dă-l mai încet pentru muzică și nu-ți auzi prietenii. Nu există o modalitate integrată de a seta aceste două lucruri la niveluri diferite.</p>

<h2>Soluția volumului intern al aplicației</h2>

<p>Atât Spotify cât și Discord au slidere de volum interne. Teoretic, ai putea reduce sliderul Spotify la 30% și păstra ieșirea Discord la 100%. Asta creează un raport 30/100.</p>

<p>În practică:</p>
<ul>
  <li>Trebuie să comuți la fiecare aplicație pentru a-i ajusta sliderul</li>
  <li>Raportul se schimbă când ajustezi volumul sistemului (ambele se scalează proporțional)</li>
  <li>Nu fiecare aplicație are un slider intern de volum</li>
  <li>E imprecis — slider mic în Spotify, fără procent afișat</li>
  <li>Dacă închizi și redeschizi Spotify, sliderul s-ar putea reseta</li>
</ul>

<h2>Adevărata soluție: volum independent per aplicație</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pune atât Spotify cât și Discord în același panou cu slidere de volum independente. Setează raportul dorit și lasă-l:</p>

<img src="/apps/sounddial.png" alt="SoundDial echilibrând Spotify și Discord la niveluri diferite de volum pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Raportul de aur pentru muzică + chat vocal</h3>
<p>Pe baza modului în care majoritatea oamenilor folosesc asta:</p>
<ul>
  <li><strong>Chat vocal la 85-100%</strong> — mereu clar audibil, dominant în mix</li>
  <li><strong>Muzică la 20-35%</strong> — prezentă dar niciodată în competiție cu vocile</li>
</ul>

<p>Raportul exact depinde de muzică, căștile tale și preferința personală. Ideea e că poți găsi echilibrul perfect o dată și îl păstrezi — în loc să ajustezi constant.</p>

<h3>Salvează ca profil</h3>
<p>Salvează echilibrul muzică/chat vocal ca profil. Profil „Gaming": Discord 100%, joc 50%, Spotify 20%. Profil „Relaxare": Discord 70%, Spotify 60%. Comută între ele cu un singur clic.</p>

<h3>Reducere automată pentru apeluri</h3>
<p>Dacă asculți muzică și primești un apel, reducerea automată a SoundDial scade automat muzica la nivelul configurat. Când apelul se termină, muzica revine. Fără a atinge nimic.</p>

<p>Problema echilibrului audio e ceva cu care se confruntă fiecare utilizator Mac în momentul în care are muzică și un apel rulând simultan. E o soluție de €14,99 o singură dată.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Controlul volumului pe Mac: ghidul complet (2026)",
    description:
      "Tot ce trebuie să știi despre controlul audio pe macOS — de la scurtături de bază de tastatură la volum per aplicație, comutare ieșire și automatizare.",
    date: "2026-06-12",
    readTime: "12 min de citit",
    content: `
<p>macOS îți oferă un slider de volum și un buton de mut. Aceasta e limita controlului audio integrat Apple. Dar Mac-ul tău are de fapt mult mai multe capabilități audio decât sugerează suprafața — scurtături ascunse de tastatură, instrumente de volum per aplicație, gestionarea dispozitivelor de ieșire și funcții de automatizare pe care majoritatea utilizatorilor nu le descoperă niciodată.</p>

<p>Acesta e ghidul complet pentru controlul audio pe Mac. De la bazele elementare la funcții de utilizator avansat, totul într-un singur loc.</p>

<h2>Partea 1: Controale de volum integrate</h2>

<h3>Tastele de volum</h3>
<p>Tastele de volum sus (F12), volum jos (F11) și mut (F10) ajustează volumul sistemului în 16 trepte. Fiecare treaptă e aproximativ 6,25% din intervalul total. Volumul curent e afișat ca un overlay pe ecran.</p>

<h3>Volum fin: Option + Shift</h3>
<p>Ține apăsat <strong>Option + Shift</strong> și apasă volum sus/jos. Fiecare apăsare ajustează cu un sfert dintr-o treaptă normală — oferindu-ți <strong>64 de niveluri de volum</strong> în loc de 16. Esențial pentru a găsi volumul perfect la căști când treptele normale sunt prea grosiere.</p>

<h3>Ajustare silențioasă a volumului: Shift</h3>
<p>Ține apăsat <strong>Shift</strong> și apasă volum sus/jos. Volumul se schimbă fără „poc-ul" audibil de feedback. Folosește asta când ajustezi volumul în timpul unui apel sau prezentări.</p>

<h3>Sliderul de volum din bara de meniu</h3>
<p>Dacă pictograma Sunet e în bara de meniu (activează-o în Setări sistem → Centru de control → Sunet → Arată mereu în bara de meniu), dând clic pe ea apare un slider de volum. Acesta e un slider continuu, nu în trepte ca tastele de tastatură, deci poți seta orice nivel precis.</p>

<h3>Centrul de control</h3>
<p>Dă clic pe pictograma Centru de control (pictograma cu două comutatoare) din bara de meniu → dă clic pe secțiunea Sunet pentru un slider de volum și acces rapid la selecția dispozitivului de ieșire.</p>

<h2>Partea 2: Gestionarea dispozitivelor de ieșire</h2>

<h3>Comutarea dispozitivelor de ieșire</h3>
<p>Cea mai rapidă metodă integrată: ține apăsat <strong>Option</strong> și dă clic pe pictograma Sunet din bara de meniu. Vei vedea o listă a tuturor dispozitivelor de ieșire și intrare disponibile. Dă clic pe unul pentru a comuta instant.</p>

<p>Alternativ: Setări sistem → Sunet → Ieșire. Selectează dispozitivul preferat din listă.</p>

<h3>Gestionarea dispozitivelor Bluetooth</h3>
<p>macOS memorează nivelul de volum pentru fiecare dispozitiv de ieșire separat. Când comuți de la boxe (la 70%) la AirPods (la 40%), volumul se ajustează la ce era ultima dată când ai folosit acel dispozitiv. Asta poate părea ca volumul „se schimbă singur" dacă nu te aștepți.</p>

<h3>Dispozitive agregate și multi-ieșire</h3>
<p>Pentru configurări avansate, deschide Audio MIDI Setup (Aplicații → Utilități) pentru a crea dispozitive agregate (combină multiple intrări) sau dispozitive multi-ieșire (trimite audio la multiple ieșiri simultan). Acestea sunt utile în principal pentru configurări audio profesionale, nu pentru utilizare zilnică.</p>

<h2>Partea 3: Volumul alertelor și notificărilor</h2>

<h3>Volumul alertelor de sistem</h3>
<p>macOS are un slider separat de volum al alertelor: Setări sistem → Sunet → Volumul alertelor. Acesta controlează volumul sunetelor de sistem (Funk, Tink, Bottle, etc.) independent de volumul principal. Totuși, afectează doar alertele de sistem macOS — nu sunetele de notificare de la aplicații terțe ca Slack, Discord sau Teams.</p>

<h3>Gestionarea sunetelor de notificare</h3>
<p>Mergi la Setări sistem → Notificări. Pentru fiecare aplicație, poți comuta „Redă sunet pentru notificări" pornit sau oprit. E binar — nu poți face notificările unei aplicații mai silențioase, doar complet pornit sau complet oprit.</p>

<h3>Moduri de concentrare</h3>
<p>Modurile de concentrare (Setări sistem → Concentrare) suprimă notificările de la aplicațiile selectate. Pot silențiaza sunetele de notificare, dar nu afectează volumul media. Muzica ta continuă să se redea la volum maxim chiar și în Nu deranja.</p>

<h2>Partea 4: Controale specifice căștilor</h2>

<h3>Siguranța căștilor</h3>
<p>Setări sistem → Sunet → Siguranța căștilor. „Reduce Loud Audio" limitează volumul căștilor pe baza expunerii cumulate. Poți dezactiva sau ajusta pragul. Afectează doar ieșirea pe căști, nu boxele.</p>

<h3>Audio spațial</h3>
<p>Pentru căști suportate (AirPods Pro, AirPods Max, unele Beats), macOS suportă Audio Spațial cu urmărirea capului. Activează-l în Centru de control → Sunet → Audio Spațial. Aceasta afectează poziționarea percepută a sunetului dar nu volumul.</p>

<h3>Balanța audio</h3>
<p>Setări sistem → Accesibilitate → Audio → Balanță. Un slider stânga-dreapta care ajustează balanța stereo. Asigură-te că e centrat dacă o parte sună mai silențios decât cealaltă.</p>

<h2>Partea 5: Ce nu poate face macOS (și cum rezolvi)</h2>

<h3>Control volum per aplicație</h3>
<p>macOS are un singur slider de volum pentru toate aplicațiile. Nu există o modalitate integrată de a seta Spotify la 30% și Zoom la 100%. Aceasta e funcția audio cea mai solicitată în macOS, și Apple nu a adăugat-o niciodată.</p>

<h3>Amplificare volum peste 100%</h3>
<p>Volumul macOS se oprește la 100%. Dacă conținutul e prea silențios chiar la volum maxim, nu există o modalitate integrată de a amplifica mai mult.</p>

<h3>Profiluri de volum</h3>
<p>Nu există o modalitate de a salva o configurație de volum (Spotify la 30%, Zoom la 100%, Slack pe mut) și a comuta între presetări.</p>

<h3>Reducere automată</h3>
<p>macOS nu reduce automat audio-ul de fundal când te alături unui apel.</p>

<h3>Memorie volum per aplicație</h3>
<p>macOS nu memorează nivelurile de volum per aplicație deoarece volumul per aplicație nu există.</p>

<p>Toate cele cinci sunt disponibile cu <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — o aplicație nativă macOS din bara de meniu care adaugă mixerul de volum pe care Apple nu l-a construit niciodată.</p>

<img src="/apps/sounddial.png" alt="SoundDial — control volum per aplicație, profiluri, reducere automată și amplificare 200% pentru macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Partea 6: Volum per aplicație cu SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> completează fiecare lacună enumerată mai sus:</p>

<ul>
  <li><strong>Volum per aplicație:</strong> Fiecare aplicație primește propriul slider, 0% la 200%</li>
  <li><strong>Mut per aplicație:</strong> Un clic pentru a silențiaza orice aplicație</li>
  <li><strong>Amplificare volum:</strong> Amplifică aplicații silențioase peste 100%</li>
  <li><strong>Profiluri de volum:</strong> Salvează configurații și comută cu un singur clic</li>
  <li><strong>Reducere automată:</strong> Audio-ul de fundal scade în timpul apelurilor, se restaurează după</li>
  <li><strong>Memorie volum:</strong> Volumul fiecărei aplicații e memorat între reporniri</li>
  <li><strong>Comutare dispozitiv de ieșire:</strong> Schimbă boxe/căști din același panou</li>
  <li><strong>Scurtături de tastatură:</strong> ⌃⌥S pentru a comuta mixerul, ⌃⌥M pentru a pune totul pe mut</li>
</ul>

<p>Folosește API-ul modern Core Audio Tap al Apple — fără drivere de sistem, fără dispozitive audio virtuale, fără extensii kernel. Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> la €14,99 (achiziție unică, fără abonament), revizuit de Apple și sandbox-at. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Volumul VLC e prea scăzut pe Mac? Cum îl amplifici peste 200%",
    description:
      "VLC la volum maxim dar un video e tot prea silențios? VLC are o amplificare integrată la 200% — plus poți merge și mai departe cu un mixer de volum per aplicație.",
    date: "2026-04-08",
    readTime: "4 min de citit",
    content: `
<p>Vizionezi un video în VLC. Dialogul e silențios. Dai volumul VLC la maxim. Dai volumul Mac-ului la maxim. Tot nu auzi cum trebuie. Video-ul a fost pur și simplu înregistrat prea silențios.</p>

<p>Vestea bună: VLC are de fapt o soluție integrată pe care majoritatea oamenilor nu o cunosc. Vestea și mai bună: poți combina cu o amplificare la nivel de sistem pentru și mai mult volum.</p>

<h2>Amplificarea integrată VLC (până la 200%)</h2>

<p>VLC poate depăși 100% volum de unul singur. Sliderul de volum din bara playerului VLC se oprește la 100%, dar poți crește mai mult:</p>

<h3>Metoda 1: Rotița mouse-ului</h3>
<p>Poziționează mouse-ul peste sliderul de volum VLC și derulează în sus. Sliderul va trece dincolo de marcajul vizibil de 100%, până la 200%. Vei vedea procentajul afișat pe măsură ce derulezi.</p>

<h3>Metoda 2: Scurtătură de tastatură</h3>
<p>Apasă <strong>Command + Săgeată sus</strong> (⌘↑) repetat pentru a crește volumul peste 100%. Fiecare apăsare adaugă o treaptă. <strong>Command + Săgeată jos</strong> (⌘↓) pentru a reduce.</p>

<h3>Metoda 3: Meniul Audio</h3>
<p>Mergi la VLC → Audio → Crește volumul. Repetă până volumul e suficient de tare. Nivelul curent e afișat în dreapta-jos a playerului.</p>

<p>Amplificarea la 200% a VLC funcționează prin amplificarea semnalului audio în decodificatorul VLC. La niveluri extreme poate introduce distorsiune, dar pentru fișiere video cu adevărat silențioase e foarte eficientă.</p>

<h2>Dincolo de amplificarea VLC: amplificare la nivel de sistem</h2>

<p>Dacă VLC la 200% tot nu e suficient de tare — sau dacă vrei să amplifici VLC fără a-i afecta setările audio interne — un mixer de volum per aplicație la nivel de sistem adaugă un alt strat de amplificare.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă VLC propriul slider de volum de la 0% la 200% la nivel de sistem. Aceasta se cumulează cu amplificarea internă VLC:</p>

<ul>
  <li>VLC intern: 200% × SoundDial: 200% = amplificare efectivă 400%</li>
  <li>VLC intern: 150% × SoundDial: 150% = amplificare efectivă 225%</li>
</ul>

<p>Aceasta e amplificare extremă și va introduce distorsiune pe unele conținuturi, dar pentru material sursă extrem de silențios ar putea fi ceea ce ai nevoie.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplificând volumul VLC la nivel de sistem pe macOS pentru fișiere video silențioase" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Mai important, SoundDial îți permite să amplifici VLC <strong>independent</strong>. Playerul de muzică, browserul și aplicațiile de comunicare rămân la nivelurile normale în timp ce doar VLC devine mai tare. Dacă amplifici VLC la 180% în SoundDial, Spotify nu se schimbă. Amplificarea integrată VLC nu poate face asta — amplificarea VLC afectează doar VLC, dar volumul unic de sistem macOS leagă tot restul împreună.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Cum dezactivezi reducerea automată a audio pe Mac (sau o controlezi tu)",
    description:
      "macOS sau aplicațiile tale reduc muzica în timpul apelurilor fără să te întrebe. Iată cum oprești reducerea nedorită — sau o înlocuiești cu una pe care chiar o controlezi.",
    date: "2026-04-10",
    readTime: "5 min de citit",
    content: `
<p>Te alături unui apel Zoom. Muzica ta scade la aproape nimic. Nu ai atins niciun control de volum — ceva a făcut-o pentru tine. Aceasta e <strong>reducerea automată audio</strong>: scăderea automată a audio-ului de fundal când un apel sau o sursă audio importantă e activă.</p>

<p>Unii oameni o adoră. Alții o urăsc — mai ales când reducerea e prea agresivă (muzica scade la zero în loc de un nivel confortabil de fundal) sau când se declanșează neașteptat.</p>

<p>Iată cum dezactivezi reducerea nedorită pe Mac și cum o înlocuiești cu una care funcționează cum vrei tu.</p>

<h2>De unde vine reducerea automată audio pe Mac</h2>

<p>macOS în sine <strong>nu</strong> are o funcție integrată de reducere automată audio. Dacă muzica ți se face mai silențioasă în timpul apelurilor, una dintre acestea o cauzează:</p>

<h3>1. Procesarea audio Zoom</h3>
<p>Zoom poate reduce audio-ul sistemului când se activează. Verifică Zoom → Setări → Audio și dezactivează „Ajustare automată volum microfon". Încearcă și reducerea suprimării zgomotului de la „High" la „Low".</p>

<h3>2. Comutarea codecului Bluetooth</h3>
<p>Când o aplicație activează microfonul căștilor Bluetooth, macOS comută de la AAC la codecul SCO. Nu e cu adevărat „reducere" — e o schimbare de codec care face totul să sune mai silențios și de calitate mai slabă. Rezolvă folosind un microfon separat.</p>

<h3>3. O aplicație terță o face</h3>
<p>Unele aplicații audio (ca Background Music) au funcții de pauză automată sau reducere automată. Unele aplicații media își reduc propriul volum când detectează altă sursă audio. Verifică orice aplicații utilitare audio instalate.</p>

<h3>4. Aplicații de comunicare ajustând audio-ul</h3>
<p>Discord, Teams și alte aplicații de comunicare au propria procesare audio care poate afecta volumul perceput al altor aplicații. Verifică setările audio ale fiecărei aplicații pentru opțiuni „ajustare automată" și dezactivează-le.</p>

<h2>Cum oprești reducerea nedorită</h2>

<ol>
  <li><strong>Verifică setările audio Zoom/Teams/Discord</strong> — dezactivează ajustarea automată volum/microfon</li>
  <li><strong>Folosește un microfon separat pentru apeluri</strong> — previne comutarea codecului Bluetooth</li>
  <li><strong>Elimină utilitarele audio</strong> — Background Music, Soundflower sau orice aplicație care ar putea intercepta audio-ul</li>
  <li><strong>Verifică Accesibilitatea macOS</strong> — Setări sistem → Accesibilitate → Audio pentru setări neașteptate</li>
</ol>

<h2>Înlocuiește reducerea proastă cu reducere bună</h2>

<p>Ideea din spatele reducerii audio e de fapt excelentă — reduce automat audio-ul de fundal în timpul apelurilor ca să auzi clar. Problema e când e prea agresivă (muzica merge la zero), neconfigurabilă (nu poți alege cât de mult să reducă) sau declanșată de lucrul greșit.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> are o funcție integrată de reducere automată care te pune în control:</p>

<ul>
  <li><strong>Nivel de reducere configurabil:</strong> Alege exact cât de mult să reducă audio-ul de fundal în timpul apelurilor — de la 10% (aproape silențios) la 80% (abia redus). Valoarea implicită e 30%, care păstrează muzica audibilă dar nu distragătoare.</li>
  <li><strong>Detectare inteligentă:</strong> Detectează apelurile prin monitorizarea utilizării microfonului — același indicator ca punctul portocaliu macOS. Funcționează cu Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Restaurare perfectă:</strong> Când apelul se termină, fiecare aplicație revine la exact volumul anterior. Fără re-ajustare.</li>
  <li><strong>Comutare ușoară:</strong> Activează sau dezactivează reducerea automată în setările SoundDial. Când nu o vrei, dezactiveaz-o. Când o vrei înapoi, activează-o.</li>
</ul>

<img src="/apps/sounddial.png" alt="Reducere automată configurabilă SoundDial — controlează exact cât audio de fundal se reduce în timpul apelurilor" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Diferența: în loc ca o aplicație să decidă că muzica ta ar trebui să meargă la zero în timpul fiecărui apel, tu decizi că ar trebui să meargă la 25%. În loc să pierzi controlul, îl câștigi. Și în loc să încerci să dezactivezi o funcție ascunsă în trei aplicații diferite, ai un singur comutator într-un singur loc.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Căștile Bluetooth sunt prea silențioase pe Mac? Fiecare soluție care funcționează",
    description:
      "Căștile Bluetooth funcționează bine pe telefon dar sună silențios pe Mac. Iată fiecare cauză — de la probleme de codec la limite de volum macOS — și cum rezolvi.",
    date: "2026-04-12",
    readTime: "6 min de citit",
    content: `
<p>Căștile tale Bluetooth sunt suficient de tari pe telefon. Le conectezi la Mac — și totul e mai silențios. Muzica sună înăbușit. Apelurile sunt greu de auzit. Ai dat volumul la maxim dar tot nu e suficient. Ce se întâmplă?</p>

<p>Audio-ul Bluetooth pe Mac are mai mulți factori de reducere a volumului care nu există pe telefoane. Iată fiecare și cum îl rezolvi.</p>

<h2>1. Siguranța căștilor îți limitează volumul</h2>

<p>macOS are o funcție integrată care limitează volumul căștilor pentru a-ți proteja auzul. Măsoară expunerea sonoră în timp și reduce volumul maxim dacă consideră că ai ascultat prea tare.</p>

<p>Mergi la <strong>Setări sistem → Sunet → Siguranța căștilor</strong>. Dacă „Reduce Loud Audio" e activat, dezactivează-l sau mărește pragul. Aceasta e cauza numărul unu a căștilor Bluetooth mai silențioase pe Mac decât pe telefon.</p>

<h2>2. Nepotrivire de codec Bluetooth</h2>

<p>Telefonul tău s-ar putea conecta la căști folosind un codec de calitate superioară (aptX, LDAC, AAC) în timp ce Mac-ul tău folosește implicit SBC (codecul Bluetooth de bază). Codecuri diferite au caracteristici diferite de volum maxim.</p>

<p>macOS folosește în general AAC pentru dispozitive Apple și SBC pentru căști de la terți. Dacă căștile tale suportă aptX sau LDAC, macOS nu le va folosi — Apple suportă doar AAC și SBC.</p>

<p><strong>Soluție:</strong> Nu poți face prea multe în privința selecției codecului pe macOS. Dar știind asta explică de ce aceleași căști ar putea suna diferit (și potențial mai silențios) pe Mac versus un telefon Android folosind LDAC.</p>

<h2>3. Activarea microfonului declanșează SCO</h2>

<p>Când orice aplicație activează microfonul căștilor Bluetooth (Zoom, FaceTime, Siri, dictare), macOS comută de la AAC la codecul SCO. SCO a fost proiectat pentru apeluri telefonice în 2004 — sună teribil și e semnificativ mai silențios.</p>

<p><strong>Soluție:</strong> Folosește un microfon separat (microfonul integrat Mac sau USB) și păstrează căștile Bluetooth doar ca ieșire. În setările aplicației de apel, setează intrarea la microfonul Mac-ului și ieșirea la căști. Aceasta previne comutarea SCO.</p>

<h2>4. Problema sincronizării volumului Bluetooth</h2>

<p>Audio-ul Bluetooth are două controale de volum: unul pe partea Mac și unul pe partea căștilor. Ar trebui să rămână sincronizate, dar pot deveni desincronizate — Mac-ul arată 100% dar căștile nu sunt de fapt la volum maxim.</p>

<p><strong>Soluție:</strong> Deconectează căștile (Setări sistem → Bluetooth → clic „i" → Deconectare), așteaptă 5 secunde, reconectează. Aceasta re-sincronizează volumul. Unele căști au și propriile butoane de volum — asigură-te că acelea sunt la maxim.</p>

<h2>5. Conexiune Bluetooth de calitate slabă</h2>

<p>Distanța, interferențele (routere WiFi, dispozitive USB 3.0) și obstacolele între Mac și căști pot reduce calitatea semnalului Bluetooth. Când semnalul e slab, macOS poate reduce rata de biți audio, ceea ce poate afecta volumul și calitatea percepute.</p>

<p><strong>Soluție:</strong> Apropie-te de Mac. Deconectează alte dispozitive Bluetooth pe care nu le folosești. Mută hub-urile USB 3.0 departe de Mac (USB 3.0 generează interferențe în banda de 2.4 GHz pe care o folosește Bluetooth).</p>

<h2>6. Căștile în sine</h2>

<p>Unele căști Bluetooth au volum maxim mai scăzut decât altele. Căștile over-ear cu drivere mai mari sunt în general mai puternice decât earbuds-urile. Căștile cu anulare a zgomotului pot avea limite de volum integrate în firmware.</p>

<p>Verifică aplicația producătorului căștilor (Sony Headphones Connect, Bose Music, Sennheiser Smart Control, etc.) pentru setări de limitare a volumului. Unele căști au un mod „safe listening" care limitează volumul.</p>

<h2>Tot prea silențios? Amplifică peste 100%</h2>

<p>Dacă ai verificat tot ce e mai sus și căștile sunt tot prea silențioase pe Mac, ai nevoie de amplificare a volumului.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> amplifică volumul oricărei aplicații până la <strong>200%</strong>. Dacă Spotify prin căștile Bluetooth e prea silențios, trage sliderul la 160%. Semnalul audio e amplificat înainte de a ajunge la căști, dublând efectiv volumul disponibil pentru acea aplicație.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplificând volumul aplicației pentru căști Bluetooth pe Mac cu slidere per aplicație la 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Amplificarea per aplicație e mai bună decât o amplificare de volum la nivel de sistem deoarece poți amplifica doar aplicația silențioasă. Dacă podcastul tău e silențios dar muzica e bine, amplifică aplicația de podcast la 170% păstrând Spotify la 80%. Fiecare aplicație rămâne la nivelul potrivit.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Audio pe Mac pentru OBS și streaming: cum controlezi ce aude audiența ta",
    description:
      "Faci streaming pe Mac cu OBS? Spectatorii tăi aud totul la același volum — joc, muzică, alerte, Discord. Iată cum echilibrezi sursele audio corect.",
    date: "2026-04-15",
    readTime: "7 min de citit",
    content: `
<p>Faci streaming pe Mac cu OBS. Audio-ul jocului bubuie. Apelul Discord rulează. Spotify redă muzică de fundal. Sunetele de alertă se declanșează când cineva se abonează. Spectatorii tăi aud totul la același volum — un haos în care callout-urile Discord concurează cu exploziile iar muzica acoperă comentariul tău.</p>

<p>Problema de bază: macOS îți oferă o singură ieșire audio, iar OBS o captează ca un singur flux combinat. Nu poți spune OBS-ului „captează jocul la 40%, Discord la 80% și Spotify la 20%" deoarece macOS nu le separă.</p>

<h2>Problema audio a streamingului pe Mac</h2>

<p>Pe Windows, OBS poate captura audio de la aplicații individuale nativ. Adaugi fiecare aplicație ca sursă audio separată și le mixezi independent în OBS. Pe Mac, nu e integrat. OBS pe macOS poate captura:</p>

<ul>
  <li><strong>Desktop Audio</strong> — tot ce se redă pe Mac, combinat într-un singur flux</li>
  <li><strong>Microphone/Aux</strong> — intrarea microfonului tău</li>
  <li><strong>Application Audio Capture (macOS 13+)</strong> — capturează audio-ul unei aplicații specifice, dar configurarea e manuală și limitată</li>
</ul>

<p>Sursa Application Audio Capture (adăugată în OBS 30+) funcționează pentru izolarea unei aplicații, dar gestionarea a cinci surse audio cu niveluri separate în OBS e complexă și nu fiecare aplicație cooperează.</p>

<h2>Abordarea mai simplă: controlează nivelurile înainte ca OBS să le captureze</h2>

<p>În loc să încerci să separi audio-ul în OBS, controlează volumul fiecărei aplicații <em>înainte</em> de a ajunge la captura desktop audio a OBS. Dacă reduci Spotify la 20% și amplifici Discord la 90% la nivel de sistem, captura desktop audio a OBS preia mixul deja echilibrat.</p>

<p>Exact asta face <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>. Setează fiecare aplicație la nivelul la care vrei ca spectatorii tăi să audă:</p>

<img src="/apps/sounddial.png" alt="SoundDial echilibrând nivelurile audio joc, Discord și muzică pentru streaming OBS pe Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configurare tipică de audio pentru streaming</h3>
<ul>
  <li><strong>Joc:</strong> 50% — prezent dar nu copleșind vocea ta</li>
  <li><strong>Discord / chat vocal:</strong> 80% — callout-uri clare de la echipa ta</li>
  <li><strong>Spotify / muzică:</strong> 15% — vibe subtil de fundal</li>
  <li><strong>Alerte stream (browser):</strong> 40% — audibile dar nu deranjante</li>
  <li><strong>Slack / notificări:</strong> pe mut — spectatorii nu trebuie să audă DM-urile tale</li>
</ul>

<h3>Salvează ca profil „Streaming"</h3>
<p>Salvează această configurație ca profil de volum în SoundDial. Înainte de a porni live, aplică profilul „Streaming" cu un singur clic. Fiecare aplicație sare la nivelul optimizat pentru streaming. Când termini streamingul, comută înapoi la profilul „Normal" sau „Gaming".</p>

<h2>Ce auzi tu vs. ce aud spectatorii</h2>

<p>Cu SoundDial ajustând volumul per aplicație la nivel de sistem, atât tu cât și spectatorii tăi auziți același mix echilibrat. E mai simplu decât încercarea de a menține mixuri separate (unul pentru tine, unul pentru stream) — ceea ce necesită dispozitive audio virtuale și rutare complexă care e fragilă pe Mac.</p>

<p>Dacă ai nevoie de un mix complet separat pentru stream versus căștile tale (de ex., vrei să auzi Discord mai tare decât spectatorii tăi), ai nevoie de o configurare mai complexă de rutare cu dispozitive audio virtuale. Dar pentru majoritatea streamerilor, un singur mix bine echilibrat — controlat ușor din bara de meniu — e exact ce e nevoie.</p>

<h2>De ce controlul per aplicație e mai bun decât mixarea doar în OBS</h2>

<ul>
  <li><strong>Ajustări instantanee:</strong> La mijlocul streamului, un spectator spune că jocul e prea tare. Clic pe bara de meniu, trage un slider. Gata. Fără pauză, fără deschiderea setărilor OBS.</li>
  <li><strong>Funcționează în afara OBS:</strong> Configurarea audio echilibrată funcționează chiar și când nu faci streaming. Aceleași profiluri, aceeași comoditate.</li>
  <li><strong>Fără dispozitive audio virtuale:</strong> SoundDial folosește API-ul nativ Audio Tap al Apple — fără Soundflower, fără BlackHole, fără drivere care se strică la actualizările macOS.</li>
</ul>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Cum faci Mac-ul să memoreze volumul per aplicație",
    description:
      "De fiecare dată când repornești Spotify sau relansezi Zoom, trebuie să re-ajustezi volumul. Iată cum faci macOS să memoreze automat nivelul volumului fiecărei aplicații.",
    date: "2026-04-18",
    readTime: "4 min de citit",
    content: `
<p>Petreci cinci minute obținând nivelurile audio perfecte. Spotify la 30%, Zoom la 100%, Slack la 15%. Apoi repornești Mac-ul. Sau Slack se blochează și se relansează. Sau închizi Spotify și îl redeschizi mai târziu. Fiecare aplicație se resetează la volumul implicit. Re-ajustezi totul. Din nou.</p>

<p>macOS memorează volumul sistemului între reporniri. Dar nu memorează volumul per aplicație — deoarece macOS nu are control volum per aplicație de la bun început. Nu are ce memora.</p>

<h2>De ce aplicațiile nu-și memorează propriul volum</h2>

<p>Unele aplicații (ca Spotify și VLC) au slidere de volum interne care se salvează între sesiuni. Dar majoritatea aplicațiilor — browsere, instrumente de comunicare, utilități de sistem — nu au propriile controale de volum. Și chiar aplicațiile care salvează volumul intern memorează doar poziția propriului slider, nu volumul lor relativ la alte aplicații.</p>

<p>Ce vrei de fapt e ca <em>sistemul</em> să memoreze: „Spotify ar trebui să fie la 30% din volumul sistemului, mereu." macOS nu suportă acest concept.</p>

<h2>Memorie de volum cu SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> are o funcție de <strong>Memorie a Volumului</strong>. Când e activată, salvează nivelul de volum al fiecărei aplicații după identificatorul de bundle. Când aplicația se închide și se relansează — fie o repornești, se blochează sau repornești Mac-ul — SoundDial o restaurează automat la volumul salvat.</p>

<img src="/apps/sounddial.png" alt="Memorie de volum SoundDial — memorează și restaurează automat nivelurile de volum per aplicație pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Cum funcționează</h3>
<ol>
  <li>Activează „Memorează volumul per aplicație" în setările SoundDial</li>
  <li>Setează fiecare aplicație la volumul preferat</li>
  <li>SoundDial salvează nivelul automat</li>
  <li>Când aplicația se relansează, volumul e restaurat la exact unde era</li>
</ol>

<p>Fără salvare manuală. Fără re-ajustare. Prima dată când îți setezi volumele e ultima dată.</p>

<h3>Ce se memorează</h3>
<ul>
  <li><strong>Nivelul volumului</strong> — procentajul exact (0% la 200%)</li>
  <li><strong>Starea de mut</strong> — dacă ai pus o aplicație pe mut, rămâne pe mut când se relansează</li>
  <li><strong>Per aplicație</strong> — volumul fiecărei aplicații e stocat independent după ID-ul de bundle</li>
</ul>

<h3>Aplicațiile noi primesc un volum implicit</h3>
<p>Când o aplicație se lansează pentru prima dată (una pe care SoundDial nu a văzut-o înainte), primește un volum implicit configurabil. Poți seta acest volum implicit în setările SoundDial — astfel încât aplicațiile noi pornesc la 80% (sau orice preferi) în loc de a bubui potențial la 100%.</p>

<h2>Memorie volum + profiluri = setează și uită</h2>

<p>Memoria volumului gestionează cotidianul: aplicațiile își păstrează nivelurile între reporniri. Profilurile gestionează comutarea situațională: modul „Ședință", modul „Concentrare", modul „Gaming" — aplică cu un singur clic și fiecare aplicație sare la nivelul potrivit pentru acea situație.</p>

<p>Împreună, aproape niciodată nu ajustezi manual un slider de volum. Aplicația memorează ultimul nivel, și când schimbi contextul, un profil setează totul odată.</p>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Volumul podcastului e prea scăzut pe Mac? Cum îl faci mai tare",
    description:
      "Unele podcasturi sunt șoptit-silențioase pe Mac chiar la volum maxim. Iată de ce — și cum amplifici audio-ul podcastului peste 100% fără a afecta alte aplicații.",
    date: "2026-04-20",
    readTime: "5 min de citit",
    content: `
<p>Asculți un podcast pe Mac. Gazda sună bine, dar invitatul — înregistrând de la un microfon de laptop în bucătărie — abia se aude. Dai volumul la 100%. Gazda e acum prea tare, dar invitatul e tot silențios. Nu ai cum câștiga deoarece problema e în înregistrare, nu pe Mac-ul tău.</p>

<p>Calitatea audio a podcasturilor variază enorm. Emisiunile profesionale sunt masterizate la niveluri consistente. Dar interviurile, podcasturile indie și înregistrările live au adesea invitați la -20 dB sau mai puțin — semnificativ mai silențios decât gazda sau muzica intro.</p>

<h2>De ce unele podcasturi sunt atât de silențioase</h2>

<ul>
  <li><strong>Calitatea microfonului invitatului:</strong> O gazdă are un setup profesional, invitatul e pe AirPods. Diferența de nivel poate fi 15+ dB.</li>
  <li><strong>Fără post-producție:</strong> Podcasturile produse profesional comprimă și normalizează nivelurile. Multe nu o fac.</li>
  <li><strong>Aplicațiile de podcast nu normalizează:</strong> Apple Podcasts și Spotify aplică normalizare minimă sau deloc a volumului conținutului podcast (spre deosebire de muzică).</li>
  <li><strong>Interval dinamic:</strong> Unii producători de podcasturi mențin intenționat un interval dinamic ridicat pentru sunet „natural" — ceea ce înseamnă că părțile silențioase sunt foarte silențioase.</li>
</ul>

<h2>Soluții în aplicație</h2>

<h3>Apple Podcasts</h3>
<p>Apple Podcasts nu are funcție de normalizare sau amplificare a volumului. Ce livrează podcastul e ce primești. Controlul de volum intern din versiunile mai vechi a fost eliminat — acum folosește doar volumul sistemului.</p>

<h3>Spotify</h3>
<p>Setarea „Normalize volume" a Spotify (Setări → Redare) poate ajuta cu consistența volumului între podcasturi diferite, dar efectul asupra dinamicii într-un episod e limitat. Încearcă să o setezi pe „Loud" pentru normalizare maximă.</p>

<h3>Overcast (browser)</h3>
<p>Dacă folosești Overcast (prin web la overcast.fm), are o funcție „Voice Boost" care amplifică și comprimă semnificativ audio-ul podcastului, făcând vocile silențioase mai tari. Aceasta e una dintre cele mai bune soluții integrate — dar funcționează doar în Overcast.</p>

<h2>Soluție la nivel de sistem: amplifică aplicațiile de podcast peste 100%</h2>

<p>Soluția universală e amplificarea aplicației de podcast dincolo de limita de 100% a macOS. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă fiecărei aplicații un slider de volum până la <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplificând volumul Apple Podcasts la 180% pe Mac pentru episoade silențioase de podcast" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Setează Apple Podcasts sau aplicația ta de podcast la 160-180% păstrând muzica Spotify la 40% și Slack la 15%. Podcastul devine mai tare fără a face totul altceva dureros de tare. Când treci înapoi la muzică, reduce aplicația de podcast la normal — sau lasă memoria de volum a SoundDial să o memoreze automat.</p>

<p>Această abordare per aplicație e mai bună decât o amplificare de volum la nivel de sistem deoarece:</p>
<ul>
  <li>Doar aplicația de podcast silențioasă devine mai tare</li>
  <li>Muzica rămâne la nivelul preferat</li>
  <li>Audio-ul apelului rămâne la nivelul preferat</li>
  <li>Sunetele de notificare nu devin brusc asurzitoare</li>
</ul>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Configurare audio pe Mac pentru cursuri și prelegeri online",
    description:
      "Urmărești o prelegere în timp ce iei notițe, cauți referințe pe Google și discuți cu colegii — toate la volume diferite. Iată cum gestionezi audio-ul de student pe Mac.",
    date: "2026-04-22",
    readTime: "5 min de citit",
    content: `
<p>Ești student care participă la o prelegere online pe Zoom. Ai un tutorial YouTube deschis într-un alt tab pentru referință. Colegii tăi discută pe Discord. Spotify redă beats lo-fi în fundal. Mac-ul tău tratează toate acestea ca un singur volum. Dă mai încet lo-fi-ul și nu-ți auzi profesorul. Dă mai tare prelegerea și pingurile Discord îți sparg concentrarea.</p>

<p>macOS are un singur slider de volum pentru totul. Pentru studenții care jonglează cu mai multe surse audio, acesta e un punct constant de fricțiune.</p>

<h2>Stiva audio tipică a studentului</h2>

<ul>
  <li><strong>Platformă de prelegere</strong> (Zoom, Teams, Google Meet, Webex) — trebuie să fie cristal de clar, mereu audibil</li>
  <li><strong>Material de referință</strong> (tutoriale YouTube, prelegeri înregistrate) — volum moderat, trebuie să poată fi pus pe pauză/ajustat</li>
  <li><strong>Muzică de studiu</strong> (Spotify, Apple Music) — nivel scăzut de fundal, nu ar trebui să concureze cu prelegerea</li>
  <li><strong>Chat</strong> (Discord, iMessage, Slack) — sunete subtile de notificare, nu deranjante</li>
  <li><strong>Tab-uri de browser</strong> — conținut ocazional cu redare automată care trebuie silențiat instant</li>
</ul>

<h2>Limitarea macOS</h2>

<p>Cu un singur volum de sistem, ești forțat să compromiți. Setează-l suficient de tare pentru microfonul silențios al profesorului, și Spotify e prea tare. Setează-l pentru muzică confortabilă, și prelegerea e inaudibilă. Pune Spotify pe mut și pierzi beneficiul de concentrare al muzicii de fundal. Nu există un echilibru confortabil deoarece fiecare aplicație e blocată la același nivel.</p>

<h2>Configurarea audio per aplicație pentru studiu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă fiecărei aplicații propriul slider de volum, astfel încât poți construi configurarea ideală de audio pentru studiu:</p>

<img src="/apps/sounddial.png" alt="Configurare SoundDial pentru student — prelegere la volum maxim, muzică de studiu scăzută, notificări pe mut" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil de prelegere</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100% — nu pierzi niciun cuvânt</li>
  <li><strong>Spotify:</strong> 15% — ambianță de fundal abia perceptibilă</li>
  <li><strong>Discord:</strong> 10% — doar notificări subtile</li>
  <li><strong>Browser:</strong> 40% — pentru videoclipuri de referință când e nevoie</li>
  <li><strong>iMessage:</strong> pe mut — verifică între cursuri</li>
</ul>

<h3>Profil de studiu individual</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — muzică motivantă de studiu</li>
  <li><strong>Browser:</strong> 70% — videoclipuri tutorial la un nivel clar</li>
  <li><strong>Discord:</strong> 20% — disponibil pentru grupul de studiu</li>
  <li><strong>Restul:</strong> pe mut</li>
</ul>

<h3>Profil de pauză</h3>
<ul>
  <li><strong>Totul:</strong> 60-80% — relaxare între cursuri</li>
</ul>

<p>Salvează fiecare ca profil de volum și comută între ele cu un singur clic pe măsură ce ziua ta avansează. Când începe o prelegere, aplică „Prelegere" — reducerea automată va gestiona restul, reducând automat muzica când profesorul vorbește prin microfon.</p>

<h2>De ce contează pentru concentrare</h2>

<p>Studiile arată constant că un mediu audio potrivit îmbunătățește concentrarea și retenția. Mixul greșit — muzica prea tare, notificările prea frecvente, prelegerea prea silențioasă — creează sarcină cognitivă care nu are nicio legătură cu materialul pe care îl studiezi. Obținerea audio-ului corect o dată, salvarea ca profil și niciodată gânditul la asta din nou elimină o sursă constantă de distragere.</p>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Sunetul Mac nu funcționează după actualizare? Ghid complet de reparare",
    description:
      "Ai actualizat macOS și acum sunetul a dispărut, pocnește sau e blocat la volumul greșit. Iată fiecare soluție pentru a readuce audio-ul Mac în funcțiune.",
    date: "2026-04-25",
    readTime: "7 min de citit",
    content: `
<p>Ai actualizat macOS. Totul părea bine — până ai observat că nu e sunet. Sau sunetul pocnește. Sau volumul e blocat. Sau dispozitivul de ieșire audio a dispărut. Problemele audio post-actualizare apar cu aproape fiecare lansare macOS, și variază de la ușor enervante la complet silențioase.</p>

<p>Iată un ghid sistematic pentru repararea audio-ului Mac după o actualizare macOS, acoperind fiecare problemă și soluție cunoscută.</p>

<h2>Pasul 1: Verifică ce e evident</h2>

<h3>E pe mut?</h3>
<p>Apasă tasta volum-sus. Verifică dacă indicatorul de volum apare pe ecran. Uneori actualizările resetează volumul sistemului la zero sau activează mutul.</p>

<h3>E selectat dispozitivul de ieșire corect?</h3>
<p>Mergi la Setări sistem → Sunet → Ieșire. După o actualizare, macOS uneori comută la un dispozitiv de ieșire neașteptat — boxele unui monitor conectat, un dispozitiv Bluetooth neconectat sau boxele integrate când vrei cele externe. Selectează dispozitivul corect.</p>

<h3>Siguranța căștilor limitează volumul?</h3>
<p>Actualizările uneori resetează Siguranța căștilor la valoarea implicită (activat). Verifică Setări sistem → Sunet → Siguranța căștilor și dezactivează „Reduce Loud Audio" dacă a fost activat de actualizare.</p>

<h2>Pasul 2: Repornește Core Audio</h2>

<p>Daemonul audio (coreaudiod) ajunge adesea într-o stare proastă după o actualizare. Repornirea lui e singura soluție cea mai eficientă.</p>

<p>Deschide Terminal și rulează:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Audio-ul se va întrerupe scurt și va reporni. Testează dacă sunetul funcționează acum. Dacă asta rezolvă, problema era o stare învechită a daemonului audio — frecvent după actualizări.</p>

<h2>Pasul 3: Resetează NVRAM/PRAM</h2>

<p>Pentru Mac-uri Intel: oprire completă, apoi pornire ținând <strong>Option + Command + P + R</strong> aproximativ 20 de secunde. Aceasta resetează NVRAM, care stochează setări de volum, selecția discului de pornire și alte preferințe de nivel scăzut.</p>

<p>Pentru Mac-uri Apple Silicon (M1/M2/M3/M4): NVRAM se resetează automat când e nevoie. O repornire completă (nu doar repaus/trezire) e de obicei suficientă.</p>

<h2>Pasul 4: Verifică conflictele cu drivere audio terțe</h2>

<p>Actualizările macOS strică frecvent driverele audio terțe și extensiile kernel. Dacă ai vreuna instalată, ar putea cauza problema:</p>

<ul>
  <li><strong>Soundflower</strong> — întrerupt, adesea conflictează cu macOS mai noi</li>
  <li><strong>BlackHole</strong> — dispozitiv audio virtual, poate necesita actualizare după actualizări macOS</li>
  <li><strong>Loopback</strong> — poate necesita o versiune nouă pentru macOS actualizat</li>
  <li><strong>Background Music</strong> — instalează un dispozitiv audio virtual care se strică frecvent la actualizări</li>
  <li><strong>Drivere interfețe audio</strong> — Focusrite, Universal Audio, etc. verifică driverele actualizate</li>
</ul>

<p><strong>Soluție:</strong> Elimină sau actualizează software-ul conflictual. Pentru dispozitive audio virtuale, verifică dacă dispozitivul audio instalat de aplicație apare în Setări sistem → Sunet → Ieșire — dacă da și e selectat, comută la boxele reale. Apoi actualizează sau dezinstalează aplicația terță.</p>

<h2>Pasul 5: Pornire în mod sigur</h2>

<p>Pornește în modul sigur pentru a determina dacă problema e cauzată de un element de pornire sau extensie terță:</p>

<ul>
  <li><strong>Apple Silicon:</strong> Oprire → ține apăsat butonul de pornire până apare „Se încarcă opțiunile de pornire" → selectează discul de pornire → ține apăsat Shift → clic „Continuă în modul sigur"</li>
  <li><strong>Intel:</strong> Repornire → ține apăsat Shift în timpul pornirii până vezi fereastra de autentificare</li>
</ul>

<p>Dacă audio-ul funcționează în modul sigur, o extensie kernel terță sau un element de autentificare e cauza. Investighează software-ul instalat recent.</p>

<h2>Pasul 6: Creează un cont de utilizator nou</h2>

<p>Dacă problema persistă, creează un cont temporar de utilizator nou (Setări sistem → Utilizatori și grupuri → Adaugă utilizator). Autentifică-te în contul nou și testează audio-ul. Dacă sunetul funcționează în contul nou, problema e cu profilul tău de utilizator — un fișier de preferințe corupt sau configurație audio.</p>

<h2>Prevenirea problemelor viitoare cu SoundDial</h2>

<p>Un avantaj al <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> față de alte instrumente audio: nu instalează un driver audio de sistem. Folosește API-ul nativ Core Audio Tap al Apple, ceea ce înseamnă că funcționează curat cu actualizările macOS fără conflictele care afectează aplicațiile cu dispozitive audio virtuale.</p>

<p>Dacă ai folosit Background Music sau Soundflower și s-au stricat după o actualizare, SoundDial e un înlocuitor care nu va avea aceeași problemă. Control volum per aplicație, amplificare volum la 200%, profiluri, reducere automată — toate fără extensie kernel sau dispozitiv audio virtual.</p>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Cum pui pe mut toate aplicațiile odată pe Mac (și le restaurezi perfect)",
    description:
      "Ai nevoie de liniște instantanee? Tasta de mut pune totul pe mut — dar activarea mută resetează volumele echilibrate cu grijă. Iată o modalitate mai bună pe Mac.",
    date: "2026-04-28",
    readTime: "4 min de citit",
    content: `
<p>Cineva intră în cameră. Șeful te sună neașteptat. Un client își împărtășește ecranul într-un apel și muzica ta începe să se audă prin boxele lor. Ai nevoie de liniște instantanee. Chiar acum.</p>

<p>Apeși tasta de mut. Totul devine silențios. Criză evitată.</p>

<p>Apoi momentul trece. Apeși din nou tasta de mut. Totul revine — dar la nivelul volumului sistemului, care nu memorează că Spotify era la 30%, Zoom la 100% și Slack la 15%. Acele niveluri individuale? Dispărute. Trebuie să re-ajustezi totul manual.</p>

<h2>Tasta de mut a sistemului: instrument contondent</h2>

<p>Tasta de mut a Mac-ului (F10 sau tasta difuzor-barat) pune pe mut <strong>ieșirea audio a sistemului</strong>. Fiecare aplicație devine silențioasă simultan. Activarea restabilește volumul sistemului la unde era — dar deoarece macOS are un singur slider de volum, nu există niveluri per aplicație de memorat sau restaurat.</p>

<p>E bine dacă folosești doar o aplicație odată. E o problemă dacă ai șase aplicații echilibrate cu grijă la niveluri diferite și trebuie să le silențiezi + restaurezi pe toate.</p>

<h2>Un mut mai inteligent: mut total per aplicație</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> are o scurtătură de tastatură „Mut total": <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Când o apeși:</p>
<ol>
  <li>Fiecare aplicație e pusă pe mut individual (starea volumului fiecărei aplicații e salvată)</li>
  <li>Liniște instantanee — la fel ca tasta de mut</li>
</ol>

<p>Când o apeși din nou:</p>
<ol>
  <li>Fiecare aplicație e scoasă de pe mut</li>
  <li>Fiecare aplicație revine la <strong>exact</strong> volumul la care era înainte de a pune pe mut</li>
  <li>Spotify revine la 30%, Zoom la 100%, Slack la 15% — restaurat perfect</li>
</ol>

<img src="/apps/sounddial.png" alt="Scurtătură mut-total SoundDial — Control+Option+M pentru a pune pe mut și scoate de pe mut toate aplicațiile cu restaurare volum" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Diferența față de tasta de mut a sistemului:</p>
<ul>
  <li><strong>Mut sistem:</strong> pune pe mut ieșirea → scoaterea de pe mut restaurează un singur volum de sistem → echilibrul per aplicație nu există</li>
  <li><strong>Mut total SoundDial:</strong> pune pe mut fiecare aplicație individual → scoaterea de pe mut restaurează volumul individual al fiecărei aplicații → echilibrul tău e păstrat</li>
</ul>

<h2>Când contează</h2>

<ul>
  <li><strong>Partajare ecran:</strong> Îți partajezi ecranul și trebuie să silențiezi Mac-ul înainte ca cealaltă persoană să-ți audă muzica. ⌃⌥M → liniște → fă-ți treaba → ⌃⌥M → muzica e înapoi la exact nivelul potrivit.</li>
  <li><strong>Întrerupere neașteptată:</strong> Cineva intră, ai nevoie de liniște instant. O scurtătură, fără mouse, fără bâjbâit după bara de meniu.</li>
  <li><strong>Apel telefonic rapid:</strong> Telefonul de birou sună. Silențiezi Mac-ul, preiei apelul, scoți de pe mut când termini. Totul revine.</li>
</ul>

<p>Combinat cu scurtătura <strong>⌃⌥S</strong> (comută popover-ul SoundDial), poți gestiona tot audio-ul tău complet de la tastatură — deschide mixerul, ajustează niveluri, închide-l și pune pe mut/scoate de pe mut totul fără a atinge mouse-ul.</p>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Volumul Google Meet e prea scăzut pe Mac? Cum rezolvi",
    description:
      "Vocile pe Google Meet abia se aud chiar la volum maxim. Iată de ce Meet rulează prin Chrome, ce înseamnă asta pentru audio și cum îl amplifici.",
    date: "2026-05-01",
    readTime: "5 min de citit",
    content: `
<p>Google Meet nu are o aplicație nativă Mac — rulează în browser. Aceasta înseamnă că audio-ul Meet face parte din fluxul audio al Chrome (sau Safari), și orice probleme de volum sunt legate de cum browserul tău gestionează audio-ul. Să dezlegăm asta.</p>

<h2>1. Verifică setările audio proprii ale Meet</h2>

<p>În timpul unui apel Meet, dă clic pe meniul cu trei puncte (⋮) → Setări → Audio. Asigură-te că dispozitivul de difuzor corect e selectat. Meet uneori folosește implicit un dispozitiv neașteptat, mai ales dacă ai conectat sau deconectat recent hardware audio.</p>

<h2>2. Verifică volumul tab-ului browserului</h2>

<p>În Chrome: clic-dreapta pe tab-ul Meet → asigură-te că „Mute site" NU e selectat. Un site pe mut nu produce audio indiferent de alte setări.</p>

<p>În Safari: dă clic pe pictograma difuzor de pe tab pentru a te asigura că nu e pe mut.</p>

<h2>3. Verifică ieșirea sistemului</h2>

<p>Setări sistem → Sunet → Ieșire. Verifică că dispozitivul corect e selectat și volumul e la maxim. Verifică și Siguranța căștilor dacă folosești căști.</p>

<h2>4. Problema audio Chrome</h2>

<p>Google Meet rulează ca tab Chrome, și ieșirea audio Chrome poate fi mai scăzută decât aplicațiile dedicate. Chrome procesează audio-ul prin propriul renderer, care are propriul plafon de volum. Dacă audio-ul general Chrome e scăzut, Meet e scăzut — chiar dacă volumul macOS e la 100%.</p>

<p>Nu există o modalitate integrată de a amplifica audio-ul Chrome peste maximul său. macOS tratează Chrome ca o singură aplicație cu un singur nivel de volum, iar acel nivel se oprește la 100%.</p>

<h2>5. Problema codecului Bluetooth</h2>

<p>Dacă folosești AirPods sau căști Bluetooth, Google Meet activând microfonul forțează comutarea codecului Bluetooth de la AAC la SCO. Aceasta reduce calitatea audio și volumul semnificativ.</p>

<p><strong>Soluție:</strong> În setările audio ale Meet, selectează microfonul integrat al Mac-ului ca dispozitiv de intrare păstrând căștile Bluetooth ca ieșire. Aceasta previne comutarea codecului și menține audio de înaltă calitate.</p>

<h2>6. Amplifică Google Meet (Chrome) peste 100%</h2>

<p>Dacă Meet e tot prea silențios după verificarea a tot, trebuie să amplifici audio-ul Chrome dincolo de ce permite macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă Chrome propriul slider de volum care merge până la <strong>200%</strong>. Deoarece Google Meet rulează în Chrome, amplificarea Chrome amplifică Meet. Trage sliderul la 150% sau 180% și audio-ul apelului e amplificat în timp real.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplificând volumul Google Meet (Chrome) peste 100% pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Funcționează și cu Safari dacă folosești Meet în Safari. SoundDial controlează fiecare browser independent — amplifică Safari pentru Meet păstrând Chrome la volum normal pentru restul.</p>

<p>Și cu reducerea automată, muzica de fundal se reduce automat când începe un apel Meet (când microfonul se activează) și se restaurează când apelul se termină.</p>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Cum setezi volumul alertelor Mac separat de volumul media",
    description:
      "macOS are un slider ascuns de volum al alertelor, dar acoperă doar sunetele de sistem. Iată cum separi cu adevărat volumul notificărilor de cel media pe Mac.",
    date: "2026-05-02",
    readTime: "5 min de citit",
    content: `
<p>Muzica ta e la nivelul perfect. Apoi se declanșează un sunet de alertă macOS — efectul sonor „Funk" sau „Tink" — și e dureros de tare comparativ cu muzica. Sau invers: alertele sunt inaudibile deoarece volumul sistemului e scăzut pentru muzică de fundal silențioasă.</p>

<p>Vrei două controale separate de volum: unul pentru media (muzică, apeluri, video) și unul pentru alerte și notificări. macOS suportă parțial asta, dar soluția completă necesită un instrument terț.</p>

<h2>Volumul alertelor integrat macOS</h2>

<p>macOS are de fapt un volum separat de alerte. Mergi la <strong>Setări sistem → Sunet</strong> și caută sliderul <strong>„Volumul alertelor"</strong>. Acesta controlează volumul sunetelor de sistem macOS — bipuri de eroare, golirea Coșului de gunoi, declicul capturii de ecran — independent de volumul principal.</p>

<p>Poți alege și ce sunet de alertă să folosești și dacă „Redă efecte sonore prin" dispozitivul de ieșire selectat sau boxele integrate.</p>

<h3>Ce controlează volumul alertelor</h3>
<ul>
  <li>Sunete de alertă sistem macOS (Funk, Tink, Bottle, etc.)</li>
  <li>Sunete Finder (Coș de gunoi, copiere fișier completă)</li>
  <li>Unele sunete ale aplicațiilor integrate</li>
</ul>

<h3>Ce nu controlează</h3>
<ul>
  <li>Sunetele de notificare Slack</li>
  <li>Sunetele de notificare Discord</li>
  <li>Sunetele Teams/Zoom</li>
  <li>Sunetele de notificare Mail</li>
  <li>Orice sunet de notificare al aplicațiilor terțe</li>
  <li>Sunetele de notificare din browser</li>
</ul>

<p>Aplicațiile terțe redau sunetele de notificare prin propriul motor audio — sunt tratate ca audio obișnuit de aplicație, nu alerte de sistem. Sliderul volumului alertelor nu are niciun efect asupra lor. Aceasta înseamnă că aplicațiile care fac cele mai enervante sunete de notificare (Slack, Discord, Teams) sunt cele pe care volumul de alerte macOS nu le poate atinge.</p>

<h2>Adevărata soluție: volum per aplicație pentru aplicațiile de notificări</h2>

<p>Pentru a separa cu adevărat volumul notificărilor de volumul media, ai nevoie de control volum per aplicație. Setează Slack la 15%, Discord la 20% și Mail la 10% — păstrând Spotify la 50% și browserul la 60%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă fiecărei aplicații propriul slider de volum. Poți seta aplicațiile cu multe notificări la un nivel subtil care e perceptibil dar nu deranjant, păstrând aplicațiile media la un nivel confortabil de ascultare.</p>

<img src="/apps/sounddial.png" alt="SoundDial separând volumul aplicațiilor de notificări de volumul aplicațiilor media pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Exemplu de configurare</h3>
<p><strong>Aplicații media:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60%</li>
  <li>QuickTime/VLC: 70%</li>
</ul>

<p><strong>Aplicații de notificări:</strong></p>
<ul>
  <li>Slack: 15%</li>
  <li>Discord: 20%</li>
  <li>Mail: 10%</li>
  <li>Calendar: 25%</li>
</ul>

<p><strong>Aplicații de comunicare:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>FaceTime: 100%</li>
</ul>

<p>Salvează ca profil și aplică cu un singur clic. Separarea între volumul notificărilor și media pe care macOS nu o oferă nativ — realizată în mai puțin de un minut.</p>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Volumul apelului FaceTime e prea scăzut pe Mac? Cum rezolvi",
    description:
      "Audio-ul FaceTime abia se aude pe Mac chiar la volum maxim. Iată fiecare soluție — de la setările de sunet la amplificarea FaceTime peste 100%.",
    date: "2026-05-04",
    readTime: "5 min de citit",
    content: `
<p>Apelurile FaceTime pe iPhone sunt bune. Dar pe Mac, cealaltă persoană sună ca și cum ar șopti din trei camere distanță. Volumul e la maxim. Ai verificat tot ce ți-a trecut prin minte. Tot prea silențios.</p>

<p>Volumul scăzut FaceTime pe Mac e o problemă frecventă, și are mai multe cauze posibile. Să trecem prin fiecare.</p>

<h2>1. Verifică dispozitivul de ieșire</h2>

<p>Mergi la Setări sistem → Sunet → Ieșire. Asigură-te că dispozitivul corect e selectat. Dacă ai conectat sau deconectat recent căști, un afișaj sau dispozitive Bluetooth, macOS ar fi putut comuta automat la o ieșire neașteptată — ca un monitor cu boxe integrate abia funcționale.</p>

<h2>2. Verifică setările audio FaceTime</h2>

<p>În timpul unui apel FaceTime, dă clic pe bara de meniu și verifică FaceTime → Video → selectează dispozitivul de ieșire corect la Audio Output. FaceTime poate folosi uneori un dispozitiv de ieșire diferit de cel implicit al sistemului, mai ales după comutarea dispozitivelor.</p>

<h2>3. Dezactivează comutarea automată AirPods</h2>

<p>Dacă ai AirPods împerecheate cu mai multe dispozitive Apple, s-ar putea comuta automat de pe Mac în timpul apelului. Verifică Setări sistem → Bluetooth → clic „i" lângă AirPods → „Conectare la acest Mac" → setează la „Când a fost conectat ultima dată la acest Mac" în loc de „Automat" pentru a preveni comutarea în timpul apelului.</p>

<h2>4. Problema codecului Bluetooth</h2>

<p>Folosirea AirPods sau căștilor Bluetooth cu FaceTime declanșează comutarea codecului AAC-la-SCO (deoarece FaceTime folosește microfonul). SCO reduce calitatea audio și volumul. Folosește un microfon separat (microfonul integrat Mac sau USB) pentru a menține AirPods în modul AAC de înaltă calitate.</p>

<h2>5. Siguranța căștilor limitează volumul</h2>

<p>Setări sistem → Sunet → Siguranța căștilor. Dacă „Reduce Loud Audio" e activat, macOS limitează volumul căștilor. Dezactivează sau mărește pragul.</p>

<h2>6. Resetează Core Audio</h2>

<p>Deschide Terminal și rulează:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Aceasta repornește daemonul audio și poate rezolva stările de volum scăzut blocate. Realătură-te apelului FaceTime după ce audio-ul repornește.</p>

<h2>7. Amplifică volumul FaceTime peste 100%</h2>

<p>Dacă toate setările sunt corecte și FaceTime e tot prea silențios — poate cealaltă persoană are un microfon slab — trebuie să amplifici dincolo de limita macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să amplifici volumul FaceTime până la <strong>200%</strong>. Deschide panoul din bara de meniu, găsește FaceTime și trage sliderul peste 100%. Audio-ul apelului e amplificat în timp real fără a afecta orice altă aplicație.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplificând volumul apelului FaceTime peste 100% pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial ajută și invers: dacă tonul de apel sau sunetele de notificare FaceTime sunt prea tari în timpul timpului de concentrare, reduce FaceTime la 20% sau pune-l pe mut păstrând muzica. Un clic pentru mut, un clic pentru a scoate de pe mut.</p>

<p>Disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revizuit de Apple, sandbox-at, achiziție unică, fără abonament.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Scurtături de tastatură pentru volumul Mac pe care probabil nu le cunoști",
    description:
      "Dincolo de tastele de volum de bază — control fin, mut aplicații specifice și scurtături de volum per aplicație. Fiecare truc audio Mac explicat.",
    date: "2026-05-06",
    readTime: "5 min de citit",
    content: `
<p>Fiecare utilizator Mac cunoaște tastele volum sus/jos/mut. Le apeși și volumul sistemului se schimbă. Dar macOS are mai multe trucuri ascunse de tastatură pentru controlul audio pe care majoritatea oamenilor nu le descoperă niciodată — plus scurtături terțe care fac gestionarea volumului dramatic mai rapidă.</p>

<h2>Scurtături integrate pe care toată lumea ar trebui să le cunoască</h2>

<h3>Ajustare fină a volumului</h3>
<p>Ține apăsat <strong>Option + Shift</strong> și apasă tasta volum sus sau jos. Fiecare apăsare ajustează volumul cu <strong>un sfert</strong> dintr-o treaptă normală, oferindu-ți 64 de niveluri în loc de 16. Esențial pentru a găsi volumul potrivit la căști noaptea târziu, sau când saltul între două trepte normale e prea mare.</p>

<h3>Ajustare silențioasă a volumului</h3>
<p>Ține apăsat <strong>Shift</strong> și apasă volum sus sau jos. Volumul se schimbă dar sunetul audibil de feedback „poc" e suprimat. Util când ajustezi volumul în timpul unui apel sau prezentări și nu vrei ca sunetul de poc să se transmită tuturor.</p>

<h3>Salt la setările Sunet</h3>
<p>Ține apăsat <strong>Option</strong> și apasă orice tastă de volum pentru a deschide Setări sistem → Sunet direct. Mai rapid decât navigarea manuală prin Setări sistem.</p>

<h3>Comutare rapidă dispozitiv de ieșire</h3>
<p>Ține apăsat <strong>Option</strong> și dă clic pe pictograma Sunet din bara de meniu pentru a vedea o listă a tuturor dispozitivelor de ieșire (și intrare) disponibile. Dă clic pe unul pentru a comuta instant. Fără a deschide Setări sistem.</p>

<h2>Ce nu pot face scurtăturile de tastatură macOS</h2>

<p>Toate scurtăturile de mai sus controlează <strong>volumul sistemului</strong> — un singur slider care afectează fiecare aplicație egal. Nu există scurtături integrate de tastatură pentru:</p>

<ul>
  <li>Ajustarea volumului unei aplicații specifice</li>
  <li>Punerea pe mut a unei aplicații fără a pune totul pe mut</li>
  <li>Comutarea între configurații de volum salvate</li>
  <li>Comutarea unui panou de mixer de volum</li>
</ul>

<p>macOS pur și simplu nu are control volum per aplicație, deci nu există scurtături pentru asta.</p>

<h2>Scurtături de tastatură pentru volum per aplicație cu SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> adaugă două scurtături globale de tastatură care extind ce poate face macOS:</p>

<h3>Comută mixerul de volum: Control + Option + S</h3>
<p>Apasă <strong>⌃⌥S</strong> de oriunde și popover-ul SoundDial se deschide în bara de meniu, arătând fiecare aplicație cu propriul slider de volum. Ajustează ce ai nevoie, apasă din nou scurtătura (sau dă clic în altă parte) pentru a-l închide. Nu părăsești niciodată aplicația curentă.</p>

<h3>Mut total aplicații: Control + Option + M</h3>
<p>Apasă <strong>⌃⌥M</strong> pentru a pune instant pe mut audio-ul fiecărei aplicații. Apasă din nou pentru a scoate totul de pe mut, restaurând fiecare aplicație la volumul anterior. Acesta e un buton de „liniște instantanee" mai rapid decât a te întinde la tasta de mut — și spre deosebire de tasta de mut a sistemului, restaurează volumele per aplicație când scoți de pe mut.</p>

<img src="/apps/sounddial.png" alt="Scurtături tastatură SoundDial — Control+Option+S pentru comutare, Control+Option+M pentru mut total" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Fluxul de lucru condus de tastatură</h2>

<p>Cu scurtăturile SoundDial activate, poți gestiona tot audio-ul fără a atinge mouse-ul:</p>

<ol>
  <li><strong>⌃⌥S</strong> — deschide mixerul</li>
  <li>Folosește tastele săgeți sau mouse-ul pentru a ajusta sliderele individuale</li>
  <li><strong>⌃⌥S</strong> — închide mixerul</li>
  <li><strong>⌃⌥M</strong> — mut instant când cineva intră în cameră</li>
  <li><strong>⌃⌥M</strong> — scoate de pe mut când pleacă, totul revine la normal</li>
</ol>

<p>Combinat cu <strong>profiluri de volum</strong> (configurații salvate pe care le comuți cu un singur clic), poți gestiona audio-ul a douăsprezece aplicații fără a fi nevoie să deschizi vreuna individual.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Aplicația Background Music nu funcționează pe macOS? Încearcă aceste alternative",
    description:
      "Aplicația gratuită Background Music a încetat să funcționeze după o actualizare macOS? Iată de ce se strică, ce să faci și cele mai bune alternative care funcționează în 2026.",
    date: "2026-06-08",
    readTime: "5 min de citit",
    content: `
<p>Background Music e o aplicație populară gratuită, open-source pentru Mac care îți oferă control volum per aplicație de bază. Funcționează instalând un dispozitiv audio virtual și rutând tot audio-ul prin el. Problema: se strică. Regulat.</p>

<p>După aproape fiecare actualizare macOS — Ventura, Sonoma, Sequoia, Tahoe — utilizatorii raportează aceleași probleme: dispozitivul audio virtual nu se instalează, apar distorsiuni și pocnituri audio, unele aplicații nu sunt detectate sau aplicația pur și simplu se blochează la lansare. Dacă ai căutat „Background Music nu funcționează", nu ești singur.</p>

<h2>De ce Background Music se strică mereu</h2>

<p>Background Music funcționează instalând un <strong>driver de dispozitiv audio virtual</strong> (un plugin Core Audio HAL). macOS rutează tot audio-ul sistemului prin acest dispozitiv virtual, iar Background Music îl interceptează pentru a aplica controlul volumului per aplicație.</p>

<p>Problema e că Apple schimbă modul cum funcționează driverele audio cu aproape fiecare lansare majoră macOS. Restricțiile de securitate se strâng, API-urile se schimbă și mecanismele de încărcare a driverelor evoluează. Deoarece Background Music e un proiect open-source menținut de voluntari, actualizările pentru a se potrivi schimbărilor Apple nu sunt mereu la timp.</p>

<p>Probleme frecvente după actualizări macOS:</p>
<ul>
  <li><strong>Dispozitivul audio virtual nu se instalează</strong> — noile politici de securitate macOS blochează driverul</li>
  <li><strong>Pocnituri sau întreruperi audio</strong> — dispozitivul virtual introduce latență pe care versiunea macOS curentă o gestionează prost</li>
  <li><strong>Aplicațiile nu apar</strong> — schimbările în cum macOS raportează procesele în funcțiune strică detectarea aplicațiilor</li>
  <li><strong>Fără audio deloc</strong> — dispozitivul virtual e setat ca ieșire implicită dar nu transmite audio</li>
  <li><strong>Blocare la lansare</strong> — incompatibilitate cu versiunea macOS curentă</li>
</ul>

<h2>Cum repari Background Music</h2>

<p>Dacă Background Music e momentan stricat:</p>

<ol>
  <li><strong>Verifică actualizări:</strong> Vizitează pagina de lansări GitHub pentru Background Music și vezi dacă o versiune nouă a fost lansată pentru versiunea ta macOS.</li>
  <li><strong>Reinstalează:</strong> Dezinstalează Background Music complet (inclusiv dispozitivul audio virtual), repornește și instalează ultima versiune.</li>
  <li><strong>Resetează audio-ul:</strong> Dacă audio-ul tău e blocat pe dispozitivul virtual, mergi la Setări sistem → Sunet → Ieșire și selectează boxele/căștile reale. Apoi rulează <code>sudo killall coreaudiod</code> în Terminal.</li>
  <li><strong>Verifică permisiunile:</strong> Setări sistem → Confidențialitate și securitate — asigură-te că Background Music are permisiunile necesare.</li>
</ol>

<h2>Alternative care nu folosesc dispozitive audio virtuale</h2>

<p>Problema fundamentală cu Background Music e arhitecturală: dispozitivele audio virtuale sunt fragile și se strică cu actualizările macOS. Alternativele moderne folosesc <strong>API-ul Core Audio Tap</strong> al Apple (introdus în macOS 14), care permite aplicațiilor să intercepteze audio-ul per proces fără a instala un driver la nivel de sistem.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> folosește API-ul modern Audio Tap — fără dispozitiv audio virtual, fără driver de sistem, fără extensii kernel. Interceptează fluxul audio al fiecărei aplicații direct folosind API-ul suportat de Apple, ceea ce înseamnă că nu se strică când macOS se actualizează.</p>

<img src="/apps/sounddial.png" alt="SoundDial — o alternativă Background Music care nu instalează dispozitive audio virtuale" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ce obții peste Background Music:</p>
<ul>
  <li><strong>Fără dispozitiv audio virtual</strong> — funcționează cu stiva audio nativă Apple, nu se strică la actualizări</li>
  <li><strong>Amplificare volum la 200%</strong> — Background Music se oprește la 100%</li>
  <li><strong>Profiluri de volum</strong> — salvează și comută între configurații (Background Music nu are)</li>
  <li><strong>Reducere automată</strong> — reducere automată a volumului în timpul apelurilor (Background Music are doar pauză automată, nu reducere)</li>
  <li><strong>Memorie de volum</strong> — memorează volumele per aplicație între reporniri</li>
  <li><strong>Scurtături de tastatură</strong> — comută mixerul sau pune pe mut toate aplicațiile</li>
  <li><strong>Dezvoltare activă</strong> — actualizat regulat pentru ultimul macOS</li>
</ul>

<p>Compromisul: SoundDial e o achiziție plătită unică, în timp ce Background Music e gratuit. Dar o aplicație care funcționează efectiv valorează mai mult decât o aplicație gratuită care se strică la fiecare șase luni. Și deoarece SoundDial e pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, a fost revizuit de Apple, sandbox-at pentru securitate și se instalează curat — fără descărcare de pe GitHub, fără compilare din sursă, fără acordarea permisiunilor pentru extensii de sistem.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "Alternativă SoundSource: control volum per aplicație mai ușor și mai ieftin pentru Mac",
    description:
      "SoundSource e puternic dar scump și complex. Dacă ai nevoie doar de control volum per aplicație fără toolkit-ul de inginerie audio, iată ce să folosești.",
    date: "2026-06-06",
    readTime: "6 min de citit",
    content: `
<p>SoundSource de la Rogue Amoeba e cea mai veche aplicație de control volum per aplicație pentru Mac. E puternică, bine făcută și vine cu funcții ca EQ per aplicație, lanțuri de efecte audio și rutare de ieșire per aplicație. E și $39, necesită un driver audio de sistem (ACE) și are mai multe funcții decât va folosi vreodată majoritatea oamenilor.</p>

<p>Dacă tot ce vrei e să dai Spotify mai încet fără a afecta Zoom — și nu ai nevoie de un toolkit complet de inginerie audio — SoundSource ar putea fi mai mult decât ai nevoie. Iată ce să iei în considerare.</p>

<h2>Ce face SoundSource bine</h2>

<p>Merit unde e meritat — SoundSource e o aplicație rafinată, profesională:</p>
<ul>
  <li><strong>Control volum per aplicație</strong> cu slidere fin-granulate</li>
  <li><strong>EQ per aplicație</strong> cu egalizatoare integrate și suport plugin Audio Unit</li>
  <li><strong>Rutare ieșire per aplicație</strong> — trimite aplicații diferite la boxe diferite</li>
  <li><strong>Amplificare volum</strong> peste 100%</li>
  <li><strong>Efecte audio la nivel de sistem</strong></li>
</ul>

<p>Dacă ești podcaster, streamer sau profesionist audio care are nevoie de EQ per aplicație și lanțuri de efecte, SoundSource e construit special pentru tine.</p>

<h2>Unde SoundSource dezamăgește utilizatorii obișnuiți</h2>

<h3>Preț</h3>
<p>$39 USD e mult pentru o aplicație de control al volumului. Dacă nu folosești EQ-ul, efectele audio sau rutarea per aplicație, plătești pentru funcții pe care nu le vei atinge niciodată.</p>

<h3>Driver de sistem</h3>
<p>SoundSource instalează un driver audio de sistem custom numit ACE (Audio Capture Engine). Funcționează bine dar adaugă complexitate — trebuie actualizat cu fiecare lansare macOS, poate conflicta ocazional cu alt software audio și înseamnă că rulezi cod terț la nivel audio de sistem. Unele departamente IT din medii corporative blochează extensiile kernel și driverele audio la nivel de sistem.</p>

<h3>Fără profiluri de volum</h3>
<p>În ciuda setului extensiv de funcții, SoundSource nu are un sistem de profiluri. Nu poți salva o configurație „Ședință" și una „Concentrare" și comuta între ele. De fiecare dată când situația se schimbă, ajustezi fiecare slider manual.</p>

<h3>Fără reducere automată</h3>
<p>SoundSource nu reduce automat audio-ul de fundal când te alături unui apel. Nu există detectare de apel, nicio ajustare automată a volumului, niciun flux de lucru hands-free pentru cel mai comun caz de utilizare al unui mixer per aplicație.</p>

<h2>SoundDial: concentrat pe ceea ce au nevoie de fapt majoritatea oamenilor</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> are o abordare diferită: fă treaba de bază perfect, sari peste funcțiile de care majoritatea oamenilor nu au nevoie și adaugă funcțiile de workflow pe care SoundSource le ratează.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Funcție</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volum per aplicație</td>
  <td style="text-align:center;padding:10px 12px;">Da (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Mut per aplicație</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Profiluri de volum</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
  <td style="text-align:center;padding:10px 12px;">Nu</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Reducere automată</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
  <td style="text-align:center;padding:10px 12px;">Nu</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Memorie volum</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">EQ per aplicație</td>
  <td style="text-align:center;padding:10px 12px;">Nu</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Rutare ieșire per aplicație</td>
  <td style="text-align:center;padding:10px 12px;">Nu</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Driver audio de sistem</td>
  <td style="text-align:center;padding:10px 12px;">Nu e nevoie</td>
  <td style="text-align:center;padding:10px 12px;">Necesar (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Scurtături de tastatură</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
  <td style="text-align:center;padding:10px 12px;">Da</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Preț</td>
  <td style="text-align:center;padding:10px 12px;">€14,99 achiziție unică</td>
  <td style="text-align:center;padding:10px 12px;">$39 USD</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — o alternativă SoundSource mai ușoară, concentrată, cu profiluri de volum și reducere automată" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Pe care ar trebui să-l alegi?</h2>

<ul>
  <li><strong>Alege SoundSource dacă:</strong> Ai nevoie de EQ per aplicație, lanțuri de efecte audio sau rutare de ieșire per aplicație. Ești podcaster, streamer sau profesionist audio. Nu te deranjează prețul și driverul de sistem.</li>
  <li><strong>Alege <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dacă:</strong> Vrei control volum per aplicație cu profiluri și reducere automată. Vrei ceva mai ușor care nu instalează un driver de sistem. Vrei să cheltuiești mai puțin. Ești lucrător la distanță, gamer, student sau oricine vrea doar să dea Slack mai încet fără a afecta Zoom.</li>
</ul>

<p>SoundDial e disponibil pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — ceea ce înseamnă că a fost revizuit de Apple, sandbox-at pentru securitate și se instalează/dezinstalează curat ca orice aplicație App Store. Fără descărcarea de DMG-uri de pe site-uri random, fără instalări de drivere de sistem, fără acordarea permisiunilor pentru extensii kernel. Achiziție unică, fără abonament.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": { slug: "mac-volume-too-loud-at-lowest-setting", title: "Volumul Mac prea tare la setarea cea mai scăzută? Cum mergi și mai încet", description: "Chiar la cea mai scăzută treaptă de volum, Mac-ul e prea tare — mai ales noaptea cu căștile. Iată cum obții un control mai fin și mergi sub minimum.", date: "2026-05-08", readTime: "5 min de citit", content: `<p>E miezul nopții. Porți căști. Apeși tasta volum-jos până ajungi la cea mai scăzută treaptă — o bară. E tot prea tare. Următoarea apăsare e mut. Nu e nimic între ele. Vrei volum la 3% dar macOS sare de la ~6% la 0%.</p><p>Aceasta e o plângere frecventă cu căștile și boxele sensibile. Cele 16 trepte de volum ale macOS sunt prea grosiere — cea mai scăzută treaptă audibilă e tot mai tare decât ce ai nevoie pentru ascultare nocturnă silențioasă.</p><h2>Soluție integrată: ajustare volum în sferturi de treaptă</h2><p>Majoritatea utilizatorilor Mac nu știu asta: poți obține un <strong>control de volum de 4 ori mai fin</strong> folosind un modificator de tastatură.</p><p>Ține apăsat <strong>Option + Shift</strong> și apasă tastele volum sus/jos. Fiecare apăsare ajustează volumul cu un sfert dintr-o treaptă normală — oferindu-ți 64 de trepte în loc de 16.</p><p>Asta te lasă să găsești niveluri de volum între treptele normale. Acel gol între „o bară" și „mut" are acum trei niveluri suplimentare pe care te poți opri. Pentru ascultare nocturnă cu căști, e adesea suficient pentru a găsi un nivel confortabil.</p><h2>De ce unele conținuturi sunt mai tari decât altele la același volum</h2><p>S-ar putea observa că unele aplicații par mai tari decât altele chiar la același volum de sistem. Spotify la o bară pare mai tare decât un video YouTube la o bară. Aceasta e deoarece fiecare aplicație emite audio la niveluri diferite, iar volumul sistemului le scalează proporțional.</p><p>O piesă masterizată la 0 dB (maxim) și un podcast înregistrat la -15 dB vor suna dramatic diferit la același volum de sistem. Piesa e cu 15 dB mai tare — ceea ce e perceput ca de aproximativ trei ori mai tare de urechile tale.</p><h2>Adevărata soluție: volum per aplicație pentru control fin</h2><p>Scurtătura sfert-de-treaptă ajută, dar tot ajustează toate aplicațiile egal. Dacă Spotify la treapta cea mai scăzută e prea tare dar apelul Zoom la treapta cea mai scăzută e prea silențios, ești blocat.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți oferă slidere de volum per aplicație cu control fin — fiecare slider se mișcă în incremente de 1% de la 0% la 200%. Poți seta Spotify la 5% și Zoom la 40% în același timp. Nivelul de control e dramatic mai fin decât cele 16 trepte de sistem ale macOS.</p><img src="/apps/sounddial.png" alt="Control fin de volum per aplicație SoundDial cu incremente de 1% pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Pentru utilizare nocturnă cu căști:</p><ul><li>Setează volumul sistemului la un nivel moderat (40-50%)</li><li>Folosește SoundDial pentru a regla fin fiecare aplicație la exact nivelul dorit</li><li>Spotify la 8% — muzică de fundal abia perceptibilă</li><li>Browser la 15% — suficient de încet pentru video noaptea</li><li>Notificări pe mut — fără pinguri surpriză tari</li></ul><p>Salvează ca profil „Noapte" și aplică-l cu un singur clic când pui căștile după ore.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "one-airpod-louder-than-the-other-fix": { slug: "one-airpod-louder-than-the-other-fix", title: "Un AirPod mai tare decât celălalt? Fiecare soluție explicată", description: "AirPod-ul stâng e mai silențios decât dreptul (sau invers). Iată fiecare cauză — de la ceară de urechi la setările de balanță macOS — și cum rezolvi.", date: "2026-05-10", readTime: "5 min de citit", content: `<p>Un AirPod sună bine. Celălalt e vizibil mai silențios. Muzica se simte decentrată. Vocile par că vin dintr-o parte. Aceasta e una dintre cele mai frecvente plângeri despre AirPods, și de obicei are o soluție simplă.</p><h2>1. Curăță-ți AirPods</h2><p>Cea mai frecventă cauză e fizică: ceară de urechi sau resturi care blochează parțial plasa difuzorului pe un AirPod. Chiar un strat subțire de acumulare poate reduce semnificativ volumul pe acea parte.</p><p><strong>Cum cureți:</strong></p><ul><li>Folosește o perie uscată, cu peri moi (o periuță de dinți curată funcționează) pentru a peria ușor plasa difuzorului</li><li>Pentru vârfurile de silicon AirPods Pro: scoate vârful și curăță atât vârful cât și plasa difuzorului de dedesubt</li><li>Folosește o cârpă uscată, fără scame pentru exterior</li><li><strong>Nu folosi:</strong> apă, alcool, aer comprimat sau obiecte ascuțite — pot deteriora plasa difuzorului sau împinge resturile mai adânc</li></ul><p>După curățare, testează ambele AirPods. În majoritatea cazurilor, asta rezolvă problema imediat.</p><h2>2. Verifică balanța audio în macOS</h2><p>macOS are un slider de balanță audio stânga-dreapta care ar putea fi decentrat:</p><ol><li>Mergi la <strong>Setări sistem → Accesibilitate → Audio</strong></li><li>Găsește sliderul <strong>Balanță</strong></li><li>Asigură-te că e exact centrat între S și D</li></ol><p>Dacă sliderul era deplasat spre o parte, acesta e vinovatul. Centrează-l și volumul ar trebui să fie egal pe ambele părți.</p><p>Verifică și <strong>Setări sistem → Sunet</strong> — unele versiuni macOS au un slider de balanță și în setările dispozitivului de ieșire.</p><h2>3. Resetează AirPods</h2><p>Dacă curățarea și balanța nu ajută, încearcă să resetezi AirPods la starea din fabrică:</p><ol><li>Pune ambele AirPods în carcasa de încărcare</li><li>Închide capacul și așteaptă 30 de secunde</li><li>Deschide capacul</li><li>Apasă și ține apăsat butonul de configurare de pe spatele carcasei timp de 15 secunde până LED-ul de stare clipește chihlimbariu, apoi alb</li><li>Re-împerechează AirPods cu Mac-ul (Setări sistem → Bluetooth)</li></ol><p>Aceasta resetează orice calibrare audio stocată și poate rezolva dezechilibrele de volum de pe partea software.</p><h2>4. Verifică Audio Mono</h2><p>Dacă funcția de accesibilitate Audio Mono a macOS e activată, audio-ul stereo e mixat într-un singur canal și trimis la ambele AirPods egal. Deși nu ar trebui să cauzeze diferențe de volum, poate schimba modul în care sună anumite conținuturi și face o parte să pară „diferită".</p><p>Verifică: Setări sistem → Accesibilitate → Audio → asigură-te că „Audio Mono" e dezactivat (dacă nu ai nevoie de el).</p><h2>5. Interferență Bluetooth</h2><p>AirPods comunică cu Mac-ul prin Bluetooth, și fiecare AirPod comunică și cu celălalt. Dacă există interferență Bluetooth semnificativă (routere WiFi, hub-uri USB 3.0, alte dispozitive Bluetooth), un AirPod ar putea primi un semnal mai slab.</p><p><strong>Soluție:</strong> Apropie-te de Mac. Deconectează dispozitive Bluetooth pe care nu le folosești. Dacă ești lângă un hub USB 3.0, încearcă să-l muți mai departe — USB 3.0 e cunoscut pentru interferența cu Bluetooth-ul de 2.4 GHz.</p><h2>6. Problemă hardware</h2><p>Dacă niciuna din soluțiile de mai sus nu funcționează, un AirPod ar putea avea un defect hardware — un driver de difuzor degradat sau o plasă deteriorată. Se întâmplă în timp cu utilizare intensă.</p><p><strong>Soluție:</strong> Contactează Suportul Apple sau vizitează un Apple Store. Dacă AirPods sunt sub garanție sau AppleCare+, Apple va înlocui AirPod-ul afectat. Înlocuirile individuale de AirPod sunt disponibile și pentru achiziție în afara garanției.</p><h2>Echilibru audio mai bun cu control volum per aplicație</h2><p>Deși controlul volumului per aplicație nu rezolvă un dezechilibru hardware între AirPods, rezolvă o problemă înrudită: când unele aplicații sunt mai tari decât altele în AirPods, poate exagera percepția unui dezechilibru.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să setezi fiecare aplicație la un nivel consistent de volum. Când Spotify e la 40%, Zoom la 100% și Safari la 60%, știi exact la ce să te aștepți de la fiecare aplicație — fără salturi bruște de volum care fac un AirPod să pară mai tare deoarece o notificare tocmai a bubulit la 100%.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "netflix-streaming-audio-too-quiet-mac": { slug: "netflix-streaming-audio-too-quiet-mac", title: "Audio Netflix și streaming prea silențios pe Mac? Cum rezolvi", description: "Dialogul e șoptit-silențios, apoi o explozie zguduie camera. Iată cum repari nivelurile audio de streaming pe Mac — și amplifici conținutul silențios peste 100%.", date: "2026-05-17", readTime: "5 min de citit", content: `<p>Vizionezi un film pe Netflix. Două personaje poartă o conversație — abia le auzi. Dai volumul mai tare. Începe o scenă de acțiune. Exploziile sunt asurzitoare. Te repezi la tasta de volum. Aceasta e cea mai frecventă plângere despre audio-ul streaming, și e mai gravă pe boxele integrate ale Mac-ului.</p><p>Problema nu e Mac-ul tău. E cum sunt masterizate filmele și serialele — și faptul că macOS nu-ți oferă instrumente să rezolvi.</p><h2>De ce audio-ul streaming are variații extreme de volum</h2><p>Filmele și serialele sunt masterizate cu <strong>interval dinamic</strong> ridicat — diferența între cele mai silențioase și cele mai tari sunete. Într-un cinematograf cu boxe puternice și un subwoofer, sună incredibil. Șoaptele sunt intime, exploziile sunt viscerale.</p><p>Pe boxele de 5 cm ale unui MacBook, acel interval dinamic devine o răspundere. Părțile silențioase sunt sub ce pot reproduce clar boxele mici, în timp ce părțile tari ating limitele fizice ale difuzorului. Ajungi să ajustezi constant volumul — dai mai tare pentru dialog, dai mai încet pentru acțiune.</p><h2>Soluția 1: Activează „Reduce Loud Sounds" în aplicația de streaming</h2><p>Unele servicii de streaming au o funcție de normalizare a volumului:</p><ul><li><strong>Netflix:</strong> În timpul redării, dă clic pe pictograma difuzor → verifică dacă există o opțiune „Reduce Loud Sounds" (disponibilă în browser și aplicația nativă)</li><li><strong>Apple TV+:</strong> Setări → Accesibilitate → „Reduce Loud Sounds"</li><li><strong>Disney+:</strong> Nicio setare echivalentă disponibilă în prezent</li><li><strong>Amazon Prime Video:</strong> Funcție „Dialogue Boost" (dacă e disponibilă pentru titlu)</li></ul><p>Aceste funcții comprimă intervalul dinamic — făcând sunetele silențioase mai tari și sunetele tari mai silențioase. Rezultatul e un volum mai uniform care funcționează mai bine pe boxe mici și la niveluri scăzute de ascultare.</p><h2>Soluția 2: Verifică amplificatorul de sunet al Mac-ului</h2><p>Pe unele modele Mac, macOS aplică procesare audio boxelor integrate. Verifică Setări sistem → Sunet pentru a vedea dacă există opțiuni de amplificare pentru dispozitivul de ieșire. Pe modelele MacBook Pro 14" și 16", sistemul de boxe are procesare audio spațială care poate afecta volumul perceput.</p><h2>Soluția 3: Folosește căști cu fir</h2><p>Căștile ocolesc complet problema dimensiunii boxelor. Chiar și căști cu fir ieftine pot reproduce dialogul silențios clar deoarece driverul e chiar lângă timpanul tău. Intervalul dinamic care e o problemă pe boxe mici devine un avantaj în căști.</p><h2>Soluția 4: Amplifică audio-ul streaming peste 100%</h2><p>Dacă conținutul e pur și simplu prea silențios — chiar cu normalizarea activată și volumul la maxim — ai nevoie de amplificare dincolo de ce oferă macOS.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să amplifici orice aplicație la <strong>200%</strong>. Dacă Safari sau aplicația Netflix e prea silențioasă, trage sliderul peste 100%. Audio-ul e amplificat înainte de a ajunge la boxe, dublând efectiv volumul maxim doar pentru acea aplicație.</p><img src="/apps/sounddial.png" alt="SoundDial amplificând audio-ul Netflix la 180% pe Mac pentru dialog mai clar și audio streaming" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>E special util când:</p><ul><li>Vizionezi un film străin silențios unde dialogul e încet</li><li>Faci streaming conținut mai vechi masterizat la niveluri mai scăzute</li><li>Folosești boxele MacBook într-un mediu zgomotos</li><li>Un serviciu de streaming e semnificativ mai silențios decât altul</li></ul><p>Și deoarece SoundDial controlează fiecare aplicație independent, amplificarea Netflix la 150% nu face Spotify sau Slack mai tare. Fiecare aplicație rămâne la propriul nivel.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "mac-audio-setup-remote-work": { slug: "mac-audio-setup-remote-work", title: "Configurare audio Mac pentru lucru la distanță: ghidul complet", description: "Apeluri, muzică, notificări și timp de concentrare — toate pe un singur Mac. Iată cum configurezi audio-ul ca nimic să nu-ți concureze pentru atenție.", date: "2026-05-12", readTime: "8 min de citit", content: `<p>Lucrul la distanță pe un Mac înseamnă că computerul tău e simultan telefonul de birou, radioul, centrul de notificări și stația de muncă profundă. Acestea sunt patru moduri audio fundamental diferite, iar macOS le tratează pe toate la fel: un singur slider de volum, totul la același nivel, fără posibilitate de a prioritiza.</p><p>Acest ghid parcurge cum configurezi audio-ul Mac-ului pentru lucrul la distanță astfel încât apelurile să fie clare, muzica să fie prezentă dar nu distragătoare, notificările să fie subtile și timpul de concentrare să fie cu adevărat liniștit.</p><h2>Cele patru moduri audio ale lucrului la distanță</h2><h3>1. Modul ședință</h3><p>Ești pe un apel Zoom sau Teams. Apelul trebuie să fie cristal de clar. Muzica ar trebui să fie silențioasă sau abia audibilă. Slack nu ar trebui să te pingUIASCĂ în ureche.</p><h3>2. Modul concentrare</h3><p>Faci muncă profundă. Muzică de fundal la un nivel scăzut te ajută să te concentrezi. Notificările ar trebui să fie abia perceptibile — suficient de prezente ca să observi un mesaj urgent, suficient de silențioase ca să nu-ți spargă fluxul.</p><h3>3. Modul colaborativ</h3><p>Ești disponibil pentru mesaje, monitorizezi Slack, poate vizionezi un video de instruire. Totul poate fi la niveluri moderate. Notificări la volum normal.</p><h3>4. Modul pauză</h3><p>Muzică la volum maxim. YouTube la volum maxim. Notificările pot aștepta.</p><h2>Configurare hardware</h2><h3>Întrebarea microfonului</h3><p>Dacă folosești AirPods pentru apeluri, ia în considerare utilizarea unui microfon separat. Când AirPods sunt folosite atât ca microfon cât și ca boxe, macOS comută la codecul Bluetooth SCO de calitate inferioară, care reduce atât calitatea cât și volumul audio. Folosirea microfonului integrat Mac (sau un microfon USB) păstrând AirPods ca ieșire evită asta complet.</p><p>Pentru cea mai bună calitate a apelurilor: un microfon USB sau un headset cu microfon integrat. Blue Yeti, Elgato Wave sau chiar un headset USB de bază va suna dramatic mai bine decât microfonul AirPods pentru colegii tăi.</p><h3>Dispozitive de ieșire</h3><p>Mulți lucrători la distanță folosesc două dispozitive de ieșire:</p><ul><li><strong>Căști</strong> pentru apeluri — intimitate, fără ecou, audio clar</li><li><strong>Boxe</strong> pentru muzică în afara apelurilor — umple camera, mai confortabil pe perioade lungi</li></ul><p>Folosește Option-clic pe pictograma Sunet din bara de meniu pentru a comuta rapid între dispozitive. Sau folosește comutatorul integrat de dispozitiv al SoundDial, care pune dispozitivele de ieșire chiar lângă controalele de volum.</p><h2>Configurare software</h2><h3>Gestionarea notificărilor</h3><p>Mergi la Setări sistem → Notificări. Pentru fiecare aplicație, decide dacă ai nevoie de notificări sonore:</p><ul><li><strong>Păstrează sunetele:</strong> Slack (dacă ești responsiv), Calendar (ședințe), Messages</li><li><strong>Dezactivează sunetele:</strong> Mail (verifică la programul tău), Știri, aplicații sociale</li></ul><p>Aceasta reduce numărul de aplicații care fac sunete surpriză, dar nu-ți oferă control al volumului — doar pornit/oprit.</p><h3>Moduri de concentrare</h3><p>Creează cel puțin două moduri de concentrare în Setări sistem → Concentrare:</p><ul><li><strong>„Ședință"</strong> — silențiază toate notificările cu excepția aplicației de calendar</li><li><strong>„Muncă concentrată"</strong> — permite notificări de la DM-urile Slack și managerul tău, silențiază restul</li></ul><p>Modurile de concentrare gestionează suprimarea notificărilor. Pentru controlul volumului audio, ai nevoie de ceva mai mult.</p><h2>Piesa lipsă: control volum per aplicație</h2><p>Modurile de concentrare controlează <em>care</em> notificări trec dar nu <em>cât de tare</em> e ceva. Tot ai un singur slider de volum pentru totul. Dacă vrei Slack la 15%, Spotify la 35% și Zoom la 100% — macOS nu poate face asta.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> completează această lacună oferind fiecărei aplicații propriul slider de volum. Configurează audio-ul pentru lucru la distanță exact cum vrei:</p><img src="/apps/sounddial.png" alt="Configurare audio SoundDial pentru lucru la distanță — niveluri diferite de volum pentru Zoom, Spotify și Slack pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><h3>Salvează profiluri pentru fiecare mod</h3><p><strong>Profil ședință:</strong></p><ul><li>Zoom/Teams: 100%</li><li>Spotify: pe mut</li><li>Slack: pe mut</li><li>Browser: pe mut</li></ul><p><strong>Profil muncă concentrată:</strong></p><ul><li>Spotify: 30%</li><li>Slack: 10%</li><li>Zoom: 80% (în caz că cineva te sună)</li><li>Browser: 40%</li></ul><p><strong>Profil colaborativ:</strong></p><ul><li>Totul la 50-70%</li><li>Slack: 30%</li></ul><p>Comută între profiluri cu un singur clic. Când începe un apel, reducerea automată a SoundDial scade automat totul cu excepția aplicației de apel. Când se termină, nivelurile profilului se restaurează.</p><h2>Fluxul de lucru zilnic</h2><ol><li>Începe lucrul → aplică profilul „Muncă concentrată"</li><li>Alătură-te unei ședințe → reducerea automată gestionează automat (sau aplică profilul „Ședință")</li><li>Ședința se termină → volumele se restaurează la nivelurile Muncă concentrată</li><li>Pauza de prânz → aplică profilul „Pauză", dă muzica tare</li><li>Muncă profundă după-amiaza → înapoi la Muncă concentrată</li></ol><p>Efort manual total: două sau trei clicuri de profil pe zi. Restul e automat.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "stop-browser-tabs-auto-playing-audio-mac": { slug: "stop-browser-tabs-auto-playing-audio-mac", title: "Cum oprești tab-urile de browser să redea audio automat pe Mac", description: "Un tab din fundal începe să redea audio de nicăieri. Reclame, videoclipuri, site-uri de știri — iată cum silențiezi tab-urile rebele și controlezi audio-ul browserului pe macOS.", date: "2026-05-14", readTime: "5 min de citit", content: `<p>Ai douăzeci de tab-uri deschise. Lucrezi în unul. Brusc — audio-ul începe să se redea de undeva. O reclamă video. Un clip de știri cu redare automată. Un tab pe care l-ai deschis acum o oră care a decis că acum e momentul să facă zgomot. Te repezi să găsești ce tab e, dând clic prin ele unul câte unul.</p><p>Audio-ul cu redare automată în tab-urile de browser e una dintre cele mai enervante experiențe pe orice computer, și e mai gravă pe Mac deoarece macOS nu are nicio modalitate de a pune pe mut o aplicație specifică (darămite un tab specific) fără a pune totul pe mut.</p><h2>Dezactivează redarea automată în Safari</h2><p>Safari are cele mai bune controale integrate de redare automată din orice browser:</p><ol><li>Deschide Safari → Setări (⌘,) → tab-ul Site-uri web</li><li>Selectează „Auto-Play" în bara laterală stângă</li><li>Setează valoarea implicită din partea de jos la „Never Auto-Play" sau „Stop Media with Sound"</li></ol><p>„Stop Media with Sound" e cea mai bună opțiune — blochează videoclipurile care se redau automat cu audio dar permite redarea automată fără sunet (pe care multe site-uri o folosesc pentru videoclipuri decorative de fundal). „Never Auto-Play" blochează totul.</p><p>Poți configura și setări per site în același panou dacă vrei să permiți redarea automată pe site-uri specifice ca YouTube sau Netflix.</p><h2>Dezactivează redarea automată în Chrome</h2><p>Controalele de redare automată ale Chrome sunt mai puțin granulare:</p><ol><li>Mergi la <code>chrome://settings/content/sound</code></li><li>Comută „Sites can play sound" pentru a determina comportamentul implicit</li><li>Adaugă site-uri specifice la lista „Mute" pentru a le silențiaza permanent</li></ol><p>Chrome îți permite și să pui pe mut tab-uri individuale: clic-dreapta pe tab → „Mute site". Aceasta pune pe mut tot audio-ul de la acel site până îl scoți de pe mut.</p><h2>Pune rapid un tab pe mut</h2><p>Atât Safari cât și Chrome arată o pictogramă de difuzor pe tab-urile care produc audio. În Safari, dă clic pe pictograma difuzor în tab pentru a-l pune pe mut. În Chrome, clic-dreapta pe tab și selectează „Mute site".</p><p>Funcționează pentru un tab odată, dar dacă ai mai multe tab-uri zgomotoase, dai clic prin ele unul câte unul.</p><h2>Problema mai largă: audio-ul browserului vs. restul</h2><p>Chiar cu redarea automată dezactivată și tab-urile pe mut, s-ar putea totuși să vrei să controlezi cât de tare e browserul relativ la alte aplicații. Poate vizionezi un tutorial YouTube în timp ce ești pe un apel Zoom — vrei tutorialul la 30% și Zoom la 100%. Sau redai muzică de fundal într-un tab de browser și concurează cu Spotify.</p><p>macOS tratează întregul browser ca o singură aplicație cu un singur volum. Nu poți face un tab mai silențios decât altul la nivel de sistem. Dar <em>poți</em> face întregul browser mai silențios decât alte aplicații.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă browserului tău propriul slider de volum, independent de orice altă aplicație. Reduce Safari la 30% păstrând Zoom la 100%. Pune Chrome complet pe mut păstrând Spotify. Un singur clic.</p><img src="/apps/sounddial.png" alt="SoundDial controlând volumul browserului independent de alte aplicații pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Aceasta e cea mai rapidă modalitate de a gestiona un tab cu redare automată surpriză: în loc să cauți ce tab face zgomot, dă clic pe SoundDial în bara de meniu și pune browserul pe mut. Totul altceva continuă să se redea. Când ai găsit și închis tab-ul problematic, scoate browserul de pe mut și volumul revine unde era.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "discord-volume-too-loud-mac": { slug: "discord-volume-too-loud-mac", title: "Volumul Discord prea tare (sau prea încet) pe Mac? Cum rezolvi", description: "Discord bubuie peste jocul tău, sau e prea silențios ca să auzi coechipieri. Iată cum controlezi volumul Discord independent de restul pe macOS.", date: "2026-05-21", readTime: "5 min de citit", content: `<p>Discord are două probleme de volum pe Mac. Fie e prea tare — sunetele de notificare bubuie peste joc și muzică — fie e prea silențios — nu-ți auzi coechipieri peste audio-ul jocului. Problema e că macOS nu te lasă să ajustezi volumul Discord independent. E blocat la același slider de sistem ca restul.</p><h2>Controalele de volum integrate ale Discord</h2><p>Discord are mai multe setări interne de volum. Înainte de a căuta soluții externe, asigură-te că acestea sunt configurate:</p><h3>Volum de ieșire</h3><p>Mergi la Discord → Setări (pictograma roată) → Voice & Video. Sliderul „Output Volume" controlează cât de tare sună Discord pentru tine. Dacă Discord e prea silențios, asigură-te că e la 100%. Dacă e prea tare, redu-l aici.</p><p><strong>Limitare:</strong> Aceasta controlează mixul intern Discord, dar nu schimbă volumul Discord <em>relativ la alte aplicații</em>. Dacă jocul tău e la 80% volum de sistem și Discord e tot la 80%, ajustarea sliderului intern Discord schimbă echilibrul — dar ești tot blocat la un singur volum de sistem pentru totul.</p><h3>Volum per utilizator</h3><p>Clic-dreapta pe orice utilizator într-un canal vocal → „User Volume". Poți ajusta utilizatori individuali de la 0% la 200%. Util dacă o persoană e mai tare sau mai silențioasă decât altele, dar nu rezolvă echilibrul general Discord-vs-alte-aplicații.</p><h3>Volum notificări</h3><p>Discord → Setări → Notifications. Poți dezactiva sunete specifice de notificare (mesaj, amuțire, alăturare/părăsire) individual. Aceasta reduce numărul de sunete deranjante dar nu te lasă să le reduci volumul — doar le pornești sau oprești.</p><h2>Adevărata problemă: echilibrul volumului la nivel de sistem</h2><p>Controalele interne Discord ajustează mixul propriu al Discord. Dar adevărata problemă e echilibrul între Discord și orice altceva pe Mac: jocul, muzica, browserul. macOS îți oferă un singur slider pentru toate.</p><p>Pentru a ajusta volumul Discord relativ la joc, ai nevoie de control volum per aplicație — ceva ce macOS nu oferă nativ.</p><h2>Rezolvă cu SoundDial</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă Discord propriul slider de volum în bara de meniu, independent de orice altă aplicație. Setează Discord la exact nivelul dorit — 100% pentru chat vocal clar, 40% pentru fundal subtil, sau complet pe mut — fără a atinge jocul, muzica sau orice altceva.</p><img src="/apps/sounddial.png" alt="SoundDial controlând volumul Discord independent de joc și muzică pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><h3>Configurări frecvente</h3><p><strong>Gaming cu Discord:</strong></p><ul><li>Discord: 100% (auzi mereu coechipieri clar)</li><li>Joc: 40% (imersiv dar nu copleșitor)</li><li>Spotify: 15% (muzică subtilă de fundal)</li></ul><p><strong>Relaxare în chat vocal:</strong></p><ul><li>Discord: 80%</li><li>Browser/YouTube: 60%</li><li>Restul: normal</li></ul><p><strong>Muncă concentrată (Discord în fundal):</strong></p><ul><li>Discord: pe mut sau 10%</li><li>Spotify: 50%</li><li>Slack: 15%</li></ul><p>Salvează fiecare ca <strong>profil de volum</strong> în SoundDial și comută cu un singur clic. Fără re-ajustarea a șase slidere de fiecare dată când schimbi activitățile.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "switch-audio-output-quickly-mac": { slug: "switch-audio-output-quickly-mac", title: "Cum comuți rapid ieșirea audio pe Mac (fără a căuta prin setări)", description: "Comutarea între boxe, căști și monitoare pe Mac necesită prea multe clicuri. Iată modalități mai rapide de a schimba dispozitivul de ieșire audio instant.", date: "2026-05-19", readTime: "5 min de citit", content: `<p>Deconectezi căștile și vrei ca audio-ul să meargă la boxe. Sau conectezi AirPods și macOS alege dispozitivul greșit. Sau intri într-o sală de ședință și trebuie să comuți la difuzorul de conferință. De fiecare dată, e: Setări sistem → Sunet → Ieșire → derulare → clic. Prea multe clicuri pentru ceva care ar trebui să ia unul.</p><p>Iată toate modalitățile de a comuta ieșirea audio mai rapid pe Mac — de la scurtături integrate la instrumente din bara de meniu care elimină clicurile complet.</p><h2>Metoda 1: Option-clic pe pictograma de volum</h2><p>Aceasta e cea mai rapidă metodă integrată și majoritatea oamenilor nu o cunosc.</p><p>Ține apăsat <strong>Option (⌥)</strong> și dă clic pe pictograma volum/sunet din bara de meniu. În loc de sliderul normal de volum, primești o listă a tuturor dispozitivelor de ieșire disponibile. Dă clic pe cel dorit. Gata.</p><p>Dacă nu vezi pictograma de sunet în bara de meniu, activează-o: Setări sistem → Centru de control → Sunet → selectează „Arată mereu în bara de meniu".</p><p><strong>Limitare:</strong> Arată doar dispozitive de ieșire — nu poți ajusta volumul per aplicație sau vedea ce se redă momentan din acest meniu.</p><h2>Metoda 2: Centrul de control</h2><p>Dă clic pe pictograma Centru de control (pictograma cu două comutatoare) din bara de meniu → dă clic pe secțiunea Sunet → dă clic pe numele dispozitivului curent pentru a vedea toate ieșirile disponibile.</p><p><strong>Limitare:</strong> Sunt trei clicuri în loc de unul. Puțin mai lent decât Option-clic pe pictograma de volum.</p><h2>Metoda 3: Scurtătură Setări sistem</h2><p>Poți fixa Sunet în bara laterală de nivel superior a Setărilor sistem, dar tot necesită navigarea la tab-ul Ieșire și selectarea unui dispozitiv. Nu e rapid.</p><h2>Metoda 4: Scurtătură de tastatură (cu configurare)</h2><p>macOS nu are o scurtătură de tastatură integrată pentru comutarea dispozitivelor audio. Totuși, poți crea una folosind Automator sau Shortcuts:</p><ol><li>Deschide aplicația Shortcuts</li><li>Creează o scurtătură nouă care rulează un script shell: <code>SwitchAudioSource -s "Nume dispozitiv"</code> (necesită instrumentul de linie de comandă <code>switchaudio-osx</code> din Homebrew)</li><li>Atribuie o scurtătură de tastatură scurtăturii</li></ol><p>Funcționează dar necesită Homebrew, un instrument de linie de comandă și configurare manuală per dispozitiv. Nu e practic pentru majoritatea utilizatorilor.</p><h2>Metoda 5: Comutatorul integrat de dispozitiv al SoundDial</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> include un selector de dispozitiv de ieșire chiar în popover-ul din bara de meniu — alături de sliderele de volum per aplicație. Un clic pentru a deschide SoundDial, un clic pentru a comuta dispozitivul. Fără a căuta prin Setări sistem.</p><img src="/apps/sounddial.png" alt="SoundDial cu comutare dispozitiv de ieșire audio și control volum per aplicație într-un singur panou din bara de meniu" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Avantajul comutării dispozitivelor în SoundDial: poți comuta ieșirea <em>și</em> ajusta volumele per aplicație în același panou. Comută la AirPods și imediat reduce Spotify amplificând apelul — totul fără a părăsi popover-ul.</p><p>Combinat cu funcția de <strong>memorie a volumului</strong> a SoundDial, fiecare dispozitiv de ieșire poate memora propriile niveluri de volum per aplicație. Comută la boxe și echilibrul de volum „boxe" se aplică. Comută la căști și echilibrul „căști" se aplică. Fără re-ajustare manuală.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "fix-audio-crackling-popping-mac": { slug: "fix-audio-crackling-popping-mac", title: "Repararea pocniturilor și distorsiunilor audio pe Mac: ghid complet", description: "Audio-ul Mac-ului pocnește, trosnește sau se întrerupe — în timpul muzicii, apelurilor sau redării video. Iată fiecare cauză cunoscută și soluție pentru problemele audio macOS.", date: "2026-05-16", readTime: "8 min de citit", content: `<p>Asculți muzică și auzi o pocnitură. Apoi o trosnitură. Apoi o întrerupere unde audio-ul se oprește o fracțiune de secundă și revine. Nu e piesa — e Mac-ul tău. Pocniturile audio pe macOS sunt frustrant de frecvente, și au cel puțin șase cauze diferite.</p><p>Acest ghid acoperă fiecare cauză cunoscută a pocniturilor, trosniturilor și întreruperilor audio pe Mac, de la soluții software la singura problemă hardware de care ar trebui să știi.</p><h2>1. Repornește Core Audio (soluția rapidă)</h2><p>Singura soluție cea mai eficientă pentru pocnituri audio bruște e repornirea daemonului audio macOS. Deschide Terminal și rulează:</p><p><code>sudo killall coreaudiod</code></p><p>Audio-ul se va opri o secundă și va reporni. În multe cazuri, pocniturile se opresc imediat. Funcționează deoarece coreaudiod — procesul care gestionează tot audio-ul pe macOS — poate ajunge într-o stare coruptă după cicluri repaus/trezire, conexiuni de dispozitive Bluetooth sau blocări de aplicații.</p><p>Dacă asta rezolvă, pocniturile erau cauzate de o problemă temporară de daemon. Dacă revine regulat, citește mai departe pentru soluții permanente.</p><h2>2. Suprasarcină CPU</h2><p>Pocniturile audio se corelează adesea cu utilizare ridicată a CPU. Când CPU-ul Mac-ului e la maxim, nu poate procesa bufferele audio suficient de rapid, cauzând goluri care sună ca pocnituri și trosnituri.</p><p><strong>Verifică:</strong> Deschide Monitor de activitate (Aplicații → Utilități) și uită-te la tab-ul CPU. Dacă vezi utilizare CPU constant ridicată (80%+), aceasta e probabil cauza.</p><p><strong>Soluție:</strong> Închide aplicațiile inutile, mai ales cele care consumă multe resurse ca browserele cu multe tab-uri, editoarele video sau VM-urile.</p><h2>3. Probleme audio Bluetooth</h2><p>Bluetooth-ul e cea mai frecventă sursă de pocnituri pentru utilizatorii de căști și boxe wireless. Mai multe lucruri o pot cauza:</p><ul><li><strong>Interferență:</strong> WiFi, dispozitive USB 3.0 și alte dispozitive Bluetooth pot interfera cu conexiunea audio. Încearcă să te apropii de Mac sau să elimini sursele de interferență.</li><li><strong>Comutare codec:</strong> Când o aplicație activează microfonul, macOS comută de la AAC la codecul SCO. Această tranziție poate cauza o pocnitură scurtă.</li><li><strong>Congestie Bluetooth:</strong> Dacă ai multe dispozitive Bluetooth conectate simultan, radio-ul poate avea dificultăți. Deconectează dispozitivele pe care nu le folosești.</li></ul><h2>4. Nepotrivire frecvență de eșantionare</h2><p>Dacă dispozitivul de ieșire audio rulează la o frecvență de eșantionare diferită de audio-ul redat, macOS trebuie să re-eșantioneze în timp real. Această re-eșantionare poate introduce artefacte.</p><p><strong>Verifică:</strong> Deschide Audio MIDI Setup (Aplicații → Utilități), selectează dispozitivul de ieșire și verifică frecvența de eșantionare. Frecvențe comune sunt 44.1 kHz (calitate CD) și 48 kHz (standard video/streaming).</p><p><strong>Soluție:</strong> Setează frecvența de eșantionare să se potrivească cazului tău cel mai frecvent de utilizare. Pentru muzică: 44.1 kHz. Pentru video/streaming: 48 kHz.</p><h2>5. Probleme buffer dispozitiv audio USB</h2><p>Dispozitivele audio USB externe (DAC-uri, interfețe audio, căști USB) pot pocni dacă dimensiunea bufferului e prea mică pentru sarcina curentă a sistemului.</p><p><strong>Soluție:</strong> În Audio MIDI Setup, selectează dispozitivul USB și încearcă să mărești dimensiunea bufferului. În aplicațiile audio ca Logic, Ableton sau GarageBand, mărește dimensiunea bufferului I/O în preferințele audio.</p><h2>6. Regresie actualizare macOS</h2><p>Unele actualizări macOS introduc buguri audio. S-a întâmplat cu aproape fiecare lansare majoră macOS.</p><p><strong>Soluție:</strong> Verifică dacă Apple a lansat o actualizare punct (de ex., 15.0.1, 15.1) care rezolvă problemele audio.</p><h2>7. Extensii kernel sau pluginuri audio</h2><p>Driverele audio terțe, dispozitivele audio virtuale sau pluginurile audio pot conflicta cu stiva audio nativă macOS.</p><p><strong>Soluție:</strong> Verifică dacă ai software audio terț instalat: Soundflower, BlackHole, Loopback sau drivere mai vechi de interfețe audio. Încearcă să le dezactivezi sau dezinstalezi temporar pentru a vedea dacă pocniturile se opresc.</p><h2>Gestionarea calității audio cu SoundDial</h2><p>Deși SoundDial nu rezolvă direct pocniturile hardware sau la nivel de sistem, te poate ajuta să gestionezi audio-ul în moduri care reduc problema:</p><ul><li><strong>Reduce sursele audio concurente:</strong> Folosește SoundDial pentru a pune pe mut aplicațiile pe care nu le folosești activ. Mai puține fluxuri audio simultane înseamnă mai puțină presiune CPU pe procesarea audio.</li><li><strong>Amplificare volum în loc de maxim de sistem:</strong> Dacă rulezi volumul sistemului la 100% și tot împingi aplicațiile mai tare, calea audio lucrează la limitele ei. Folosește amplificarea per aplicație <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pentru a amplifica aplicații specifice la 200% păstrând volumul sistemului la un nivel mai confortabil de 70-80%.</li><li><strong>Comutare rapidă dispozitiv de ieșire:</strong> Dacă pocniturile sunt legate de un dispozitiv de ieșire specific, SoundDial te lasă să comuți dispozitivele din panoul din bara de meniu fără a căuta prin Setări sistem.</li></ul><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "teams-volume-too-low-mac": { slug: "teams-volume-too-low-mac", title: "Volumul Microsoft Teams prea scăzut pe Mac? Fiecare soluție care funcționează", description: "Abia auzi oamenii pe Teams chiar la volum maxim? Iată fiecare cauză — de la setările Teams la codecuri Bluetooth — și cum amplifici audio-ul apelului peste 100%.", date: "2026-06-04", readTime: "7 min de citit", content: `<p>Ești într-o ședință Teams. Colegul tău prezintă, dar vocea lui sună ca prin o cutie de conserve de la trei camere distanță. Volumul Mac-ului e la 100%. Volumul Teams e la 100%. Ai dat totul la maxim. Tot prea silențios.</p><p>Volumul scăzut pe Microsoft Teams e una dintre cele mai frecvente plângeri audio Mac în medii corporative. Cauzele sunt diferite de Zoom, iar unele soluții sunt specifice Teams.</p><h2>1. Verifică setările audio Teams</h2><p>Dă clic pe pictograma de profil în Teams → Setări → Dispozitive.</p><ul><li>Asigură-te că dispozitivul <strong>Difuzor</strong> corect e selectat</li><li>Folosește funcția „Fă un apel de test" pentru a verifica audio-ul</li><li>Verifică dacă „Suprimarea zgomotului" nu e setată pe „High" — suprimarea agresivă a zgomotului poate reduce volumul perceput al vocii</li></ul><h2>2. New Teams vs. Classic Teams</h2><p>Microsoft a înlocuit „Classic Teams" cu „New Teams" (construit pe un framework diferit). Versiunea nouă gestionează audio-ul diferit.</p><h2>3. Comutarea codecului Bluetooth</h2><p>Dacă folosești AirPods sau căști Bluetooth, alăturarea unui apel Teams forțează macOS să comute de la codecul AAC de calitate superioară la codecul SCO de calitate inferioară. SCO reduce semnificativ calitatea audio și volumul.</p><p><strong>Soluție:</strong> Folosește microfonul integrat Mac sau un microfon USB ca intrare, păstrând căștile Bluetooth ca ieșire.</p><h2>4. Verifică dispozitivul de ieșire și volumul macOS</h2><p>Setări sistem → Sunet → Ieșire. Verifică dispozitivul și volumul. Verifică și Siguranța căștilor.</p><h2>5. Resetează Core Audio</h2><p>Deschide Terminal și rulează:</p><p><code>sudo killall coreaudiod</code></p><h2>6. Amplifică volumul Teams peste 100%</h2><p>Dacă fiecare setare e la maxim și Teams e tot prea silențios, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să amplifici volumul oricărei aplicații la <strong>200%</strong>, inclusiv Microsoft Teams.</p><img src="/apps/sounddial.png" alt="SoundDial amplificând volumul apelului Microsoft Teams peste 100% pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "how-to-control-per-app-volume-on-mac": { slug: "how-to-control-per-app-volume-on-mac", title: "Cum controlezi volumul per aplicație pe Mac", description: "macOS îți oferă un singur slider de volum pentru totul. Iată cum obții controale individuale de volum pentru fiecare aplicație — și de ce contează mai mult decât crezi.", date: "2026-05-20", readTime: "7 min de citit", content: `<p>Ești pe un apel video. Slack tot dă ping. Muzica se redă în fundal. Întinzi mâna la tasta de volum și — totul devine mai silențios. Apelul, muzica, notificările. macOS are exact un slider de volum, și controlează totul odată.</p><p>Windows a avut un mixer de volum per aplicație de la Vista în 2006. Douăzeci de ani mai târziu, macOS tot nu are. Dacă vrei să dai Spotify mai încet fără a afecta apelul Zoom, Apple nu are niciun răspuns integrat.</p><p>Acest ghid explică ce e controlul volumului per aplicație, de ce macOS nu-l are și cum îl obții.</p><h2>Ce înseamnă de fapt volumul per aplicație</h2><p>Volum per aplicație înseamnă că fiecare aplicație de pe Mac primește propriul slider independent de volum. Poți seta Spotify la 30%, păstra Zoom la 100%, pune Slack complet pe mut și lăsa Safari la 50% — toate în același timp. Schimbarea volumului unei aplicații are zero efect asupra oricărei alte aplicații.</p><h2>De ce macOS nu include asta</h2><p>Arhitectura audio Apple (Core Audio) suportă absolut controlul volumului per aplicație la nivel de framework. Motivul pentru care macOS nu-l expune în UI e o alegere de filosofie de design: Apple preferă mai puține controale și o suprafață mai simplă.</p><h2>Cine are nevoie de asta</h2><p>Oricine face mai mult de un lucru audio odată. Adică majoritatea oamenilor, dar mai ales:</p><ul><li><strong>Lucrători la distanță</strong> — apeluri + muzică + notificări e cea mai frecventă coliziune</li><li><strong>Streameri și podcasteri</strong> — control precis asupra a ce aude audiența vs. ce auzi tu</li><li><strong>Muzicieni și producători</strong> — trebuie să izoleze ieșirea DAW de piese de referință și instrumente de comunicare</li><li><strong>Gameri</strong> — audio joc vs. Discord vs. muzică e un act constant de echilibrare</li><li><strong>Oricine cu oboseală de notificări</strong> — pune Slack pe mut, păstrează restul</li></ul><h2>SoundDial</h2><p>Am construit <strong>SoundDial</strong> deoarece mixerul de volum Mac pe care-l voiam nu exista. Stă în bara de meniu, arată fiecare aplicație care face sunet și oferă fiecăreia propriul slider. Mut per aplicație, amplificare volum, profiluri și reducere automată care scade muzica când începe un apel. Achiziție unică, macOS 14+, fără abonament.</p><p>Mixerul de volum pe care macOS ar fi trebuit să-l construiască.</p>` },
  "mute-slack-notifications-mac-without-muting-everything": { slug: "mute-slack-notifications-mac-without-muting-everything", title: "Cum pui Slack pe mut pe Mac fără a pune totul pe mut", description: "Notificările Slack îți întrerup concentrarea, dar nu vrei să silențiezi muzica sau apelurile. Iată cum pui pe mut doar Slack pe macOS.", date: "2026-05-24", readTime: "5 min de citit", content: `<p>Ești în muncă profundă de concentrare. Spotify redă playlist-ul perfect de concentrare. Apoi — <em>knock brush</em> — Slack dă ping. Și din nou. Și din nou. Trei canale, două DM-uri și o notificare de fir în treizeci de secunde. Vrei să pui Slack pe mut dar să păstrezi muzica. macOS spune: pune totul pe mut sau nimic.</p><h2>Opțiunea 1: Pune notificările pe mut în Slack însuși</h2><p>Slack are o funcție „Pune notificările pe pauză".</p><p><strong>Limitare:</strong> E totul sau nimic per canal. Nu poți face Slack <em>mai silențios</em> — doar complet silențios sau complet pornit.</p><h2>Opțiunea 2: Dezactivează sunetele Slack în notificările macOS</h2><p>Setări sistem → Notificări → Slack. Dezactivează „Redă sunet pentru notificări".</p><h2>Opțiunea 3: Folosește un mod de concentrare</h2><p>Creează un mod „Concentrare" în Setări sistem → Concentrare. Adaugă Slack la lista „Silențiat".</p><h2>Opțiunea 4: Control volum per aplicație (adevărata soluție)</h2><p>Ce vrei de fapt e simplu: reduce volumul Slack la 10-15% păstrând totul la niveluri normale.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă Slack propriul slider independent de volum.</p><img src="/apps/sounddial.png" alt="SoundDial cu Slack pe mut și Spotify redându-se la volum normal pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><h3>Fluxul de lucru ideal pentru Slack</h3><ul><li><strong>Timp de concentrare:</strong> Slack la 10% sau pe mut. Spotify la 40%. Fără întreruperi.</li><li><strong>Timp disponibil:</strong> Slack la 40%. Notificările sunt perceptibile fără a fi sperioase.</li><li><strong>Timp de ședință:</strong> Slack pe mut. Zoom la 100%. Reducerea automată gestionează restul.</li></ul><p>Salvează fiecare ca <strong>profil de volum</strong> în SoundDial și comută cu un singur clic.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "volume-profiles-for-mac": { slug: "volume-profiles-for-mac", title: "Cum configurezi profiluri de volum pentru diferite situații pe Mac", description: "Configurări diferite de volum pentru ședințe, muncă concentrată, gaming și relaxare — comutabile cu un singur clic. Iată cum funcționează profilurile de volum pe macOS.", date: "2026-06-02", readTime: "5 min de citit", content: `<p>La 9 dimineața ești pe un apel Zoom — vrei Zoom la 100%, Spotify pe mut, Slack pe mut. La 10 apelul se termină — vrei Spotify la 40%, Slack la 15%, Zoom nu contează. La prânz faci gaming — joc la 60%, Discord la 100%, restul pe mut. La 6 seara vizionezi YouTube — browser la 80%, restul silențios.</p><p>Fiecare situație are o configurație ideală diferită de volum. Și de fiecare dată când situația se schimbă, ar trebui să ajustezi cinci sau șase aplicații manual. Sau poți salva fiecare configurare ca profil și comuta cu un singur clic.</p><h2>Ce sunt profilurile de volum?</h2><p>Un profil de volum e un instantaneu salvat al volumului și stării de mut a fiecărei aplicații. Configurezi aplicațiile cum vrei — Spotify la 30%, Zoom la 100%, Slack pe mut — apoi salvezi ca profil numit „Lucru" sau „Ședință". Mai târziu, aplici profilul și fiecare aplicație sare instant la nivelul salvat.</p><h2>macOS nu are profiluri de volum</h2><p>macOS are moduri de concentrare care controlează ce notificări trec. Dar modurile de concentrare nu controlează nivelurile de volum.</p><h2>Configurarea profilurilor cu SoundDial</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> include un sistem integrat de profiluri.</p><img src="/apps/sounddial.png" alt="Profiluri de volum SoundDial — comutare cu un clic între modurile Ședință, Concentrare și Relaxare pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><h3>Exemple de profiluri</h3><p><strong>Ședință</strong></p><ul><li>Zoom / Teams: 100%</li><li>Spotify: pe mut</li><li>Slack: pe mut</li><li>Browser: pe mut</li></ul><p><strong>Muncă concentrată</strong></p><ul><li>Spotify: 35%</li><li>Slack: 10%</li><li>Mail: pe mut</li><li>Browser: 50%</li></ul><p><strong>Gaming</strong></p><ul><li>Joc: 60%</li><li>Discord: 100%</li><li>Spotify: 20%</li><li>Restul: pe mut</li></ul><p><strong>Relaxare</strong></p><ul><li>Spotify: 70%</li><li>Browser: 60%</li><li>Notificări: 20%</li></ul><h2>Profiluri + reducere automată = complet automat</h2><p>Combină profilurile cu funcția de reducere automată a SoundDial și rareori trebuie să atingi volumul. Aplică profilul „Muncă concentrată" dimineața. Când vine un apel, reducerea automată scade totul cu excepția aplicației de apel. Când apelul se termină, totul revine la nivelurile profilului. La sfârșitul zilei, comută la „Relaxare" cu un singur clic.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "zoom-call-volume-too-low-mac": { slug: "zoom-call-volume-too-low-mac", title: "Volumul apelului Zoom prea scăzut pe Mac? Cum îl amplifici", description: "Abia auzi oamenii pe Zoom chiar la volum maxim. Iată fiecare soluție — de la setările Zoom la amplificarea audio-ului apelului peste 100%.", date: "2026-05-26", readTime: "6 min de citit", content: `<p>Ești pe un apel Zoom. Cealaltă persoană vorbește, dar vocea abia se aude. Volumul Mac-ului e la maxim. Volumul difuzorului Zoom e la maxim. Te apleci în ecran, încordându-te să auzi.</p><p>Volumul scăzut al apelului Zoom e extrem de frecvent, și are mai multe cauze.</p><h2>1. Verifică setările de ieșire audio Zoom</h2><p>Deschide Zoom → Setări → Audio. La „Speaker", asigură-te că dispozitivul corect de ieșire e selectat și sliderul de volum e la maxim.</p><h2>2-6. Verifică ieșirea Mac, dezactivează ajustarea automată, verifică codecul Bluetooth, resetează Core Audio</h2><h2>7. Amplifică volumul Zoom peste 100%</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să amplifici volumul oricărei aplicații la <strong>200%</strong> — inclusiv Zoom.</p><img src="/apps/sounddial.png" alt="SoundDial amplificând volumul apelului Zoom la 180% pe Mac pentru audio mai clar în timpul apelurilor video" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Funcționează și pentru <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong> și orice altă aplicație de apel.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "lower-spotify-without-lowering-everything-mac": { slug: "lower-spotify-without-lowering-everything-mac", title: "Cum dai Spotify mai încet fără a da totul mai încet pe Mac", description: "Vrei Spotify ca muzică de fundal, dar dând volumul mai jos cu tastele face apelul și restul mai silențios. Iată soluția.", date: "2026-05-30", readTime: "4 min de citit", content: `<p>Lucrezi. Spotify redă muzică de fundal. E puțin prea tare — concurează cu podcastul din alt tab sau face concentrarea dificilă. Apeși tasta volum-jos. Spotify devine mai silențios. Dar la fel și restul — apelul Zoom, sunetele de notificare, audio-ul browserului. Toate mai silențioase. Nu asta voiai.</p><h2>Soluția: Spotify are slider intern de volum</h2><p>Dar trebuie să comuți la fereastra Spotify, să găsești sliderul, să-l ajustezi, apoi să te întorci la ce făceai.</p><h2>Adevărata soluție: control volum per aplicație</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pune un slider de volum pentru fiecare aplicație în bara de meniu.</p><img src="/apps/sounddial.png" alt="SoundDial reducând volumul Spotify independent păstrând alte aplicații la volum maxim pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Și mai bine: salvează ca profil. Și mai bine: reducerea automată în timpul apelurilor scade automat Spotify.</p><p>Achiziție unică pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Fără abonament. macOS 14.2+.</p>` },
  "macos-tahoe-per-app-volume-control": { slug: "macos-tahoe-per-app-volume-control", title: "Are macOS Tahoe control volum per aplicație?", description: "macOS Tahoe (macOS 26) a adus actualizări majore, dar a adăugat Apple în sfârșit un mixer de volum? Iată răspunsul — și cum obții control volum per aplicație chiar acum.", date: "2026-06-12", readTime: "4 min de citit", content: `<p>În fiecare an, utilizatorii Mac speră că următoarea lansare macOS va include în sfârșit un mixer de volum. În fiecare an, sunt dezamăgiți. Cu macOS Tahoe (macOS 26), Apple a livrat o interfață redesenată, funcții noi de sistem și îmbunătățiri majore sub capotă. Dar au adăugat control volum per aplicație?</p><h2>Răspunsul scurt: nu</h2><p>macOS Tahoe nu include un mixer de volum integrat. Nu există control volum per aplicație în Setări sistem, Centrul de control sau bara de meniu.</p><h2>Cum obții control volum per aplicație pe macOS Tahoe</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> e o aplicație nativă macOS din bara de meniu care îți oferă un mixer de volum — slidere independente de volum pentru fiecare aplicație în funcțiune.</p><img src="/apps/sounddial.png" alt="SoundDial oferind control volum per aplicație pe macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Achiziție unică pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Fără abonament. macOS 14.2+.</p>` },
  "play-music-speakers-calls-headphones-mac": { slug: "play-music-speakers-calls-headphones-mac", title: "Cum redai muzică pe boxe în timp ce iei apeluri pe căști (Mac)", description: "Vrei Spotify pe boxele de birou și Zoom în AirPods în același timp? macOS nu face asta ușor — iată ce funcționează de fapt.", date: "2026-05-15", readTime: "5 min de citit", content: `<p>Iată un lucru rezonabil pe care ai putea vrea să-l faci: redai muzică prin boxele de birou în timp ce iei un apel Zoom prin AirPods. Muzica umple camera, apelul e privat în urechi. Perfect logic.</p><p>macOS spune nu. Când selectezi un dispozitiv de ieșire audio, <em>fiecare</em> aplicație îl folosește.</p><h2>O abordare mai simplă: separare bazată pe volum</h2><p>Dacă scopul principal e să auzi apelul clar peste muzică, controlul volumului per aplicație rezolvă problema mai simplu.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă fiecărei aplicații propriul slider de volum.</p><img src="/apps/sounddial.png" alt="SoundDial arătând Zoom la volum maxim și Spotify redus în timpul unui apel pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Și mai bine: <strong>reducerea automată</strong> a SoundDial face asta automat.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "mac-volume-keeps-changing-by-itself": { slug: "mac-volume-keeps-changing-by-itself", title: "Volumul Mac se schimbă singur: cum rezolvi", description: "Volumul Mac-ului sare aleatoriu în sus, scade sau se resetează la un alt nivel. Iată fiecare cauză cunoscută și cum o oprești.", date: "2026-05-18", readTime: "6 min de citit", content: `<p>Setezi volumul Mac-ului la un nivel confortabil. Te uiți în altă parte. Când te întorci, e diferit. Mai tare. Mai silențios. Resetat la maxim. Se tot întâmplă, și nu poți înțelege de ce.</p><h2>1. Reconectarea dispozitivului Bluetooth</h2><p>Cea mai frecventă cauză. Când un dispozitiv Bluetooth se conectează sau deconectează, macOS resetează volumul.</p><h2>2. Ieșire HDMI/DisplayPort</h2><h2>3. O aplicație schimbă volumul</h2><h2>4. Apăsări accidentale pe tastatură</h2><h2>5. Resetare daemon audio macOS</h2><h2>6. Setări de accesibilitate</h2><h2>Blochează-ți volumele per aplicație cu SoundDial</h2><p>Chiar dacă nu poți preveni macOS să schimbe volumul sistemului, poți proteja echilibrul volumului <em>per aplicație</em>. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memorează nivelul de volum al fiecărei aplicații independent.</p><img src="/apps/sounddial.png" alt="SoundDial memorând nivelurile de volum per aplicație între reporniri pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "best-volume-mixer-apps-mac-2026": { slug: "best-volume-mixer-apps-mac-2026", title: "Cele mai bune aplicații mixer de volum pentru Mac în 2026", description: "O comparație fără perdea a fiecărei aplicații Mac care îți oferă control volum per aplicație. Funcții, prețuri și care merită de fapt folosită.", date: "2026-06-12", readTime: "10 min de citit", content: `<p>macOS nu are un mixer de volum integrat. Dacă vrei să controlezi volumul aplicațiilor individuale, ai nevoie de o aplicație terță.</p><h2>SoundDial</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> e o aplicație nativă macOS din bara de meniu concentrată pe a face un singur lucru bine: control volum per aplicație.</p><img src="/apps/sounddial.png" alt="Mixer de volum per aplicație SoundDial arătând slidere individuale de volum pentru aplicații pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>€14,99 achiziție unică, Mac App Store, macOS 14.2+.</p><h3>SoundSource (Rogue Amoeba)</h3><p>$39 USD. Cel mai puternic dacă ai nevoie de EQ per aplicație. Instalează driver de sistem.</p><h3>Background Music (Gratuit, Open Source)</h3><p>Gratuit. Per aplicație de bază. Se strică frecvent la actualizări macOS.</p><h3>eqMac</h3><p>Primar egalizator, nu mixer de volum.</p><h2>Pe care ar trebui să-l alegi?</h2><ul><li><strong>Pentru control volum per aplicație, profiluri și reducere automată:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a></li><li><strong>Pentru EQ per aplicație și rutare audio:</strong> SoundSource</li><li><strong>Ceva gratuit și de bază:</strong> Background Music</li></ul><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a>.</p>` },
  "youtube-too-quiet-safari-chrome-mac": { slug: "youtube-too-quiet-safari-chrome-mac", title: "YouTube prea silențios în Safari sau Chrome pe Mac? Rezolvă instant", description: "Unele videoclipuri YouTube abia se aud chiar la volum maxim. Iată de ce audio-ul browserului e adesea mai silențios decât alte aplicații — și cum îl amplifici peste 100% pe Mac.", date: "2026-05-22", readTime: "5 min de citit", content: `<p>Dai clic pe un videoclip YouTube. Creatorul vorbește, dar abia îl auzi. Volumul sistemului e la maxim. Volumul playerului YouTube e la maxim. Te apleci spre boxe. Tot prea silențios.</p><h2>Adevărata soluție: amplifică volumul browserului peste 100%</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> rezolvă oferind fiecărei aplicații — inclusiv Safari și Chrome — un slider independent de volum care merge de la 0% la <strong>200%</strong>.</p><img src="/apps/sounddial.png" alt="SoundDial amplificând volumul browserului Safari la 180% pentru videoclipuri YouTube silențioase pe Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "mac-notification-sounds-too-loud-headphones": { slug: "mac-notification-sounds-too-loud-headphones", title: "Sunetele de notificare Mac prea tari în căști? Iată soluția", description: "Pingurile Slack și alertele macOS sunt dureros de tari în căști în timp ce muzica e bine. Iată de ce volumul notificărilor e diferit — și cum îl îmblânzești.", date: "2026-05-25", readTime: "5 min de citit", content: `<p>Porți căști, asculți muzică la un volum confortabil de 40%. O notificare Slack se declanșează. <em>DING.</em> E asurzitor de tare comparativ cu muzica.</p><h2>Adevărata soluție: controlează volumul aplicațiilor de notificări independent</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> face asta. Oferă fiecărei aplicații propriul slider de volum.</p><img src="/apps/sounddial.png" alt="SoundDial arătând Slack la volum scăzut și Spotify la volum normal — control independent al notificărilor pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><h3>O configurare tipică prietenoasă cu căștile</h3><ul><li><strong>Spotify / Music</strong> — 50%</li><li><strong>Slack</strong> — 15%</li><li><strong>Mail</strong> — 10%</li><li><strong>Calendar</strong> — 20%</li><li><strong>Zoom / FaceTime</strong> — 90%</li><li><strong>Browser</strong> — 40%</li></ul><p>Salvează ca profil „Căști" în SoundDial și aplică-l cu un singur clic oricând conectezi.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "stop-zoom-lowering-music-mac": { slug: "stop-zoom-lowering-music-mac", title: "Cum oprești Zoom să-ți reducă muzica pe Mac", description: "De fiecare dată când te alături unui apel Zoom, muzica scade sau dispare. Iată de ce se întâmplă și cum controlezi ce devine mai silențios în timpul apelurilor — în termenii tăi.", date: "2026-05-28", readTime: "6 min de citit", content: `<p>Te alături unui apel Zoom. Spotify reda la un volum confortabil. Apelul se conectează și — muzica ta dispare sau scade la aproape nimic.</p><h2>Adevărata soluție: reducere automată în termenii tăi</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți oferă exact asta. Funcția sa de reducere automată monitorizează microfonul și ajustează automat audio-ul de fundal — dar <strong>tu controlezi nivelul de reducere</strong>.</p><img src="/apps/sounddial.png" alt="Setări reducere automată SoundDial — reducere configurabilă a volumului în timpul apelurilor Zoom pe Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "airpods-volume-too-low-mac": { slug: "airpods-volume-too-low-mac", title: "Volumul AirPods prea scăzut pe Mac? Fiecare soluție explicată", description: "AirPods sună silențios pe Mac chiar la volum maxim? Iată toate cauzele — de la limite de siguranță a căștilor la particularități Bluetooth — și cum le rezolvi.", date: "2026-06-08", readTime: "7 min de citit", content: `<p>AirPods funcționează bine pe iPhone. Sunt suficient de tare. Dar conectează-le la Mac și brusc totul e prea silențios.</p><h2>1-6. Verifică Siguranța căștilor, sincronizarea volumului Bluetooth, codecul audio, curățare, volum aplicație, Core Audio</h2><h2>Tot prea silențios? Amplifică volumul AirPods peste 100%</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să amplifici volumul oricărei aplicații până la <strong>200%</strong>.</p><img src="/apps/sounddial.png" alt="SoundDial amplificând volumul aplicației pentru AirPods pe Mac cu slidere per aplicație până la 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "spotify-volume-too-low-mac": { slug: "spotify-volume-too-low-mac", title: "Volumul Spotify prea scăzut pe Mac? Iată fiecare soluție", description: "Spotify la volum maxim dar tot prea silențios pe Mac? Acest ghid acoperă fiecare cauză — de la limitatorul integrat Spotify la setările macOS — și cum îl amplifici peste 100%.", date: "2026-06-11", readTime: "7 min de citit", content: `<p>Spotify e la volum maxim. Mac-ul tău e la volum maxim. Și tot nu e suficient de tare.</p><h2>Verifică sliderul de volum Spotify, normalizarea volumului, calitatea audio, siguranța căștilor, volumul Bluetooth, resetează Core Audio</h2><h2>Amplifică Spotify peste 100% cu SoundDial</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> îți permite să amplifici volumul oricărei aplicații până la <strong>200%</strong> — inclusiv Spotify.</p><img src="/apps/sounddial.png" alt="SoundDial amplificând volumul Spotify la 200% pe macOS păstrând alte aplicații la volum normal" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "separate-game-audio-from-discord-mac": { slug: "separate-game-audio-from-discord-mac", title: "Cum separi audio-ul jocului de Discord pe Mac", description: "Exploziile din joc acoperă coechipieri pe Discord? Iată cum controlezi independent volumul audio al jocului și al chat-ului vocal pe macOS.", date: "2026-06-10", readTime: "6 min de citit", content: `<p>Faci gaming pe Mac. O explozie se produce în joc. Coechipieri tăi Discord vorbesc, dar nu-i auzi peste focuri. Dai volumul mai încet — acum Discord e mai silențios și el.</p><h2>Soluția reală: control volum per aplicație</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> stă în bara de meniu și oferă fiecărei aplicații propriul slider de volum.</p><img src="/apps/sounddial.png" alt="SoundDial arătând slidere independente de volum pentru un joc și Discord pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><h3>Configurare tipică gaming</h3><ul><li><strong>Joc</strong> — 30-50%</li><li><strong>Discord / chat vocal</strong> — 90-100%</li><li><strong>Spotify / muzică</strong> — 15-25%</li><li><strong>Browser</strong> — pe mut</li><li><strong>Slack / notificări</strong> — pe mut</li></ul><p>Salvează ca profil „Gaming" și comută cu un singur clic.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "why-doesnt-mac-have-volume-mixer": { slug: "why-doesnt-mac-have-volume-mixer", title: "De ce nu are Mac un mixer de volum ca Windows?", description: "Windows a avut control volum per aplicație din 2006. E 2026 și macOS tot nu are. Iată motivul real — și cum obții unul oricum.", date: "2026-06-09", readTime: "6 min de citit", content: `<p>Fiecare versiune de Windows de la Vista (2006) a inclus un mixer de volum. Pe macOS? Un singur slider. Asta e tot.</p><h2>Nu e o limitare tehnică</h2><p>Core Audio suportă absolut controlul volumului per aplicație la nivel de framework. Apple pur și simplu nu l-a construit.</p><h2>Cum obții un mixer de volum pe Mac chiar acum</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> e un mixer de volum nativ macOS.</p><img src="/apps/sounddial.png" alt="SoundDial — mixerul de volum pentru macOS, arătând slidere de volum per aplicație în bara de meniu" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Achiziție unică pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Fără abonament. macOS 14.2+.</p><p>Mixerul de volum pe care macOS ar fi trebuit să-l construiască.</p>` },
  "boost-mac-volume-beyond-100-percent": { slug: "boost-mac-volume-beyond-100-percent", title: "Volumul Mac prea scăzut? Cum amplifici sunetul peste 100%", description: "Mac-ul tău e la volum maxim și tot nu e suficient de tare. Iată de ce se întâmplă și cum amplifici audio-ul până la 200% fără boxe externe.", date: "2026-06-07", readTime: "8 min de citit", content: `<p>Volumul Mac-ului e la 100%. Sliderul e complet la dreapta. Și tot nu e suficient de tare.</p><h2>Cum amplifici volumul peste 100%</h2><h3>SoundDial: amplificare volum per aplicație până la 200%</h3><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> oferă fiecărei aplicații de pe Mac un slider independent de volum care merge de la 0% la <strong>200%</strong>.</p><img src="/apps/sounddial.png" alt="Amplificare volum SoundDial — control volum per aplicație cu amplificare 200% pe macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Achiziție unică pe <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Fără abonament. macOS 14.2+.</p>` },
  "auto-lower-music-during-zoom-calls-mac": { slug: "auto-lower-music-during-zoom-calls-mac", title: "Cum reduci automat muzica în timpul apelurilor Zoom pe Mac", description: "De fiecare dată când începe un apel Zoom, te repezi să pui Spotify pe pauză. Există o modalitate mai bună — reducerea automată scade muzica automat când microfonul se activează.", date: "2026-06-05", readTime: "7 min de citit", content: `<p>Apelul începe. Îți partajezi ecranul. Muzica ta tot bubuie. Te repezi la Spotify, apeși pauză, te întorci la Zoom — dar toată lumea a auzit deja zece secunde din playlist-ul tău.</p><h2>Reducere automată cu SoundDial</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> are o funcție integrată de reducere automată care face exact ce ar trebui să facă macOS nativ.</p><img src="/apps/sounddial.png" alt="Funcția de reducere automată SoundDial reducând automat volumul muzicii în timpul unui apel Zoom pe Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /><h2>Configurare în mai puțin de un minut</h2><ol><li>Instalează <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial de pe Mac App Store</a></li><li>Deschide Setări → tab-ul Reducere automată</li><li>Activează reducerea automată</li><li>Ajustează sliderul nivelului de reducere după preferință</li><li>Gata — reducerea automată e activă</li></ol><p>Data viitoare când te alături unui apel Zoom, Teams sau FaceTime, audio-ul de fundal se va reduce automat. Când închizi, revine. Achiziție unică, fără abonament.</p>` },
  "how-to-mute-one-app-on-mac": { slug: "how-to-mute-one-app-on-mac", title: "Cum pui pe mut o aplicație pe Mac fără a pune totul pe mut", description: "Slack dă ping. Ești pe un apel. Vrei să pui Slack pe mut dar să continui să auzi apelul. macOS nu te lasă — iată cum faci oricum.", date: "2026-06-03", readTime: "6 min de citit", content: `<p>Ești pe un apel Zoom. Slack tot face sunete de notificare. Un tab YouTube pe care l-ai uitat începe redarea automată. Apeși tasta de mut — și acum nu-ți mai auzi nici apelul. macOS pune <em>totul</em> pe mut.</p><h2>Adevărata soluție: un buton de mut per aplicație</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> stă în bara de meniu și arată fiecare aplicație în funcțiune cu propriul slider de volum și buton de mut.</p><img src="/apps/sounddial.png" alt="SoundDial arătând butoane de mut per aplicație pentru fiecare aplicație în bara de meniu macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a> — €14,99 achiziție unică, fără abonament, macOS 14.2+.</p>` },
  "volume-mixer-for-mac": { slug: "volume-mixer-for-mac", title: "Mixer de volum pentru Mac: funcția lipsă pe care macOS tot nu o are", description: "Windows a avut un mixer de volum din 2006. Iată de ce macOS tot nu are — și cea mai bună modalitate de a obține control volum per aplicație pe Mac în 2026.", date: "2026-06-01", readTime: "9 min de citit", content: `<p>Clic-dreapta pe pictograma difuzor de pe orice PC Windows și vei găsi Mixerul de Volum — un panou care arată fiecare aplicație care face sunet momentan, fiecare cu propriul slider independent de volum.</p><p>Acum fă același lucru pe un Mac. Dă clic pe pictograma de sunet din bara de meniu. Primești un slider. Atât. Un slider care controlează totul odată.</p><h2>SoundDial: mixerul de volum pe care macOS ar fi trebuit să-l construiască</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> e o aplicație nativă macOS din bara de meniu care îți oferă exact ce Apple nu va oferi — control volum independent pentru fiecare aplicație de pe Mac.</p><img src="/apps/sounddial.png" alt="SoundDial — mixer de volum per aplicație pentru macOS arătând slidere individuale de volum în bara de meniu" style="max-width:100%;border-radius:12px;margin:24px 0;" /><p>Achiziție unică. Fără abonament. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Obține SoundDial de pe Mac App Store</a>.</p>` },
};
