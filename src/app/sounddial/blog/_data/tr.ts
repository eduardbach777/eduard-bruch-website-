import type { ArticleSet } from "./index";

export const trArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Podcasting için Ses: Kayıt Sırasında Ne Duyduğunuzu Kontrol Edin",
    description:
      "Podcast kaydederken seviyeleri izlemek, misafirinizi dinlemek ve bildirimleri yönetmek — hepsi tek bir ses kaydırıcısı için rekabet ediyor. İşte daha iyi bir kurulum.",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>Podcast'i Mac üzerinde kaydediyorsun. Konuğunuzun (Zoom, Riverside veya SquadCast aracılığıyla) net bir şekilde duymanız gerekiyor. DAW'ın kayıt seviyelerini izlemen gerekiyor. Slack mutlaka mutlaka işlem yapmamanız gerekir ki kayıtta ping çıkmasın. Ve sistem bildirimi seslerinin tamamen susturulması gerekir — mülakatın ortasındaki macOS "ding" sesi kullanılamaz bir ses olur.</p>

<p>macOS tüm bunlar için bir ses kaydırıcısı veriyor. Yeterli değil.</p>

<h2>Podcast ses meydan okuması Mac</h2>

<p>Bir podcast kayıt oturumu sırasında genellikle şunları yaparsınız:</p>
<ul>
  <li><strong>İletişim uygulaması</strong> (Zoom, Riverside, SquadCast) — misafir sesi, net olmalı</li>
  <li><strong>DAW / kayıt uygulaması</strong> (Logic, GarageBand, Audacity, Hindenburg) — kendi seviyelerinizi takip etmek</li>
  <li><strong>Bildirim kaynakları</strong> (Slack, Mail, Calendar, Messages) — kayıt sırasında tamamen sessiz olmalı</li>
  <li><strong>Tarayıcı</strong> — gösteri notları, araştırma sekmeleri veya bir zamanlayıcı çalışmış olabilir</li>
</ul>

<p>Bunların hepsi aynı seviyede kaostur. Misafiriniz sistem zınalarıyla rekabet ediyor. Bir Slack bildirimi bir çekimi mahvedebilir. Ve misafirinizin sesini ayarlamanız gerekiyorsa, sistem sesini değiştirmek izleme seviyelerinizi de değiştirir.</p>

<h2>Tipik bir çözüm</h2>

<p>Çoğu podcast yapıcısı aşağıdakilerin kombinasyonunu kullanır:</p>
<ul>
  <li>Bildirimi bastırmak için odak modu (Rahatsız Etme)</li>
  <li>Kayıt yapmadan önce Slack, Mail ve diğer gürültülü uygulamalardan manuel olarak çıkmak</li>
  <li>Misafir için iletişim uygulamasının iç ses seviyesini ayarlamak</li>
</ul>

<p>Bu işe yarıyor, ama hata yapmaya meyilli. DND'yi etkinleştirmeyi unutursanız bir bildirim payınızı mahveder. Slack'ten çıkmayı unuttuğun için bir çağrı geliyor. Ve hâlâ misafirinizin ses seviyesini izleme seviyelerinize göre bağımsız olarak kontrol edemezsiniz.</p>

<h2>Podcast için uygulama başına ses</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Her uygulamayı bağımsız olarak kontrol ederek temiz bir kayıt ortamı oluşturmanızı sağlar:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial podcast kurulumu — bağımsız düzeyde misafir sesi, izleme ve bildirimler" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kayıt profili</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> %80-100 — net misafir sesi</li>
  <li><strong>Logic / GarageBand:</strong> %60 — yorgunluk olmadan rahat bir izleme</li>
  <li><strong>Gevşeklik:</strong> Kısılmış — Bildirim sesi sıfır</li>
  <li><strong>Posta:</strong> Kısılmış</li>
  <li><strong>Mesajlar:</strong> Kısılmış</li>
  <li><strong>Takvim:</strong> Kısılmış</li>
  <li><strong>Tarayıcı:</strong> Susturuldu — otomatik oynatma sürpriz değil</li>
</ul>

<p>Bunu "Kayıt" profili olarak kaydedin. Kayda basmadan önce, profili tek tıklamayla uygulayın. Her bildirim kaynağı susturulmuş, misafiriniz tam seste ve izleme seviyeniz rahat bir seviyede.</p>

<h3>Düzenleme profili</h3>
<ul>
  <li><strong>Mantık / Hindenburg:</strong> %100 — düzenleme için tam izleme</li>
  <li><strong>Spotify:</strong> Kısılmış — Referans karışıklığı yok</li>
  <li><strong>Gevşeklik:</strong> %20 — molalar sırasında ince bildirimler</li>
  <li><strong>Tarayıcı:</strong> %40 — gösteri notları ve araştırma için</li>
</ul>

<p>İki profil, iki tıklama, tamamen farklı iki ses ortamı. Uygulamaları manuel olarak kapatıp yeniden açmak yok. Kayıttan sonra bildirimleri tekrar etkinleştirmeyi unutma.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Neden Mac tam sesle bu kadar yüksek sesle? Daha İyi Kontrol Nasıl Alınır",
    description:
      "MacBook Pro hoparlörleri harika — ta ki patlamaya başlayana kadar. Orta seviyede ses ayarları bile çok yüksek geliyorsa, daha hassas ses kontrolü nasıl sağlanabileceğine şöyle bakalım.",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Apple'ın daha yeni MacBook Pro modelleri (14" ve 16") dizüstü bilgisayar için şaşırtıcı derecede güçlü hoparlörlere sahip. O kadar güçlü ki, orta seviyede ses gerçekten yüksek olabilir — özellikle sessiz bir odada, gece geç saatlerde veya kulaklıkla. "Rahat" ile "fazla" arasındaki boşluk bazen sadece bir veya iki ses seviyesi adımıdır.</p>

<h2>Neden ses seviyesi adımları çok kaba geliyor</h2>

<p>macOS <strong>16 hacim adımı</strong> klavye aracılığıyla bu yöntemle konuşurdu. Her adım toplam aralığın yaklaşık %6,25'ini oluşturur. Güçlü hoparlörlerde veya hassas kulaklıklarda, tek bir adım algılanan ses seviyesi değişikliğini temsil edebilir — ses tuşuna tek dokunuşla "mükemmel"den "çok yüksek"e geçiş.</p>

<h2>Yerleşik sabit: çeyrek basamak hacim</h2>

<p>Bekle <strong>Seçenek + Kayma</strong> ve sesi yukarı/aşağı basın. Her basma normal adımın dörtte biri ayarlanır ve size <strong>64 seviye</strong> 16 yerine 16 yerine. Bu 4 kat daha ince kontrol, özellikle güçlü hoparlörler veya kulaklıklarla, tam doğru ses seviyesini bulmayı çok daha kolay hale getiriyor.</p>

<p>Bu, çoğu insanın bilmediği en faydalı Mac ses numarasıdır.</p>

<h2>Daha derin sorun: her şey için bir kaydırıcı</h2>

<p>64 seviye olsa bile, her uygulamayı kontrol eden bir kaydırıcınız var. Sesi yeterince düşük tutarsanız, rahat bildirim sesleri için müziğiniz çok sessiz olabilir. Müzik için ayarlamışsanız, bir bildirim ping sizi sıçratabilir.</p>

<p>Asıl sorun, farklı ses kaynaklarının farklı ses seviyelerine ihtiyaç duyması. Bildirimler ince olmalı. Müzik olmalı. Çağrılar açık olmalı. Tarayıcı videosu orta düzeyde olmalı. Tek bir slider bunların hepsine iyi hizmet edemez.</p>

<h2>Hassas kontrol için uygulama başına ses sistemi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> her uygulamaya kendi ses kaydırıcısı verir <strong>%1 artışlar</strong> %0'tan %200'e. Bu, uygulama başına 200 hassasiyet seviyesi demek, macOS'nin sistem genelinde 16 (veya modifikatörü ile 64) adımına karşılık.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial uygulama başına ince tanenli ses kontrolü ve %1 hassasiyetle macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Sistem sesinizi orta seviyeye (%50-60) ayarlayın, ardından her uygulamayı ince ayar etmek için SoundDial kullanın:</p>
<ul>
  <li><strong>Spotify:</strong> %35 — rahat arka plan seviyesi</li>
  <li><strong>Gevşeklik:</strong> %12 — ince bildirim pingi</li>
  <li><strong>Zoom:</strong> %85 — çağrı sesi net ve bunaltıcı olmadan</li>
  <li><strong>Safari:</strong> %45 — orta seviyede video oynatma</li>
</ul>

<p>Bu şekilde, hiçbir ses kaynağı asla "çok yüksek" olmaz. Her biri ideal seviyesine bağımsız olarak ayarlanmış. %12'deki Slack ping'i neredeyse fark edilmiyor, Zoom çağrınız ise %85'te kristal berraklığı — hepsi aynı sistem ses seviyesinde.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Mac'da Slack Huddle Ses Sorunları Şunlar: Çok Sessiz, Çok Yüksek Ya Da Müziğinize Karşı Mücadele",
    description:
      "Slack huddle'lar aynı ses seviyesi için müzik ve bildirimlerinizle rekabet eder. İşte Mac'daki diğer her şeyden bağımsız olarak huddle sesini nasıl kontrol edeceğiniz.",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Slack huddle'lar çok kullanışlıdır — bir düğmeye tıklarsınız ve toplantı planlamadan sesli görüşmeye giriyorsunuz. Ama ses tam bir karmaşa. Huddle Spotify'ınızla aynı seste oluyor. Slack bildirimi, arama seviyesiyle aynı seviyede ping sesi veriyor. Ve birisi grupta müzik ya da ekranı sesli paylaştığında, ya duyulmaz ya da kulakları sağır edici.</p>

<p>Sorun Slack değil. Durum macOS. Her şey tek bir ses kaydırıcısından geçer, yani huddle sesi, bildirim sesleri, müzik ve tarayıcı sesi aynı alan için mücadele ediyor.</p>

<h2>Slack'in dahili ses kontrolleri</h2>

<p>Slack'in ses kontrolleri sınırlıdır:</p>
<ul>
  <li><strong>Bildirim tercihleri:</strong> Slack → Ayarlar → Bildirimler → Ses ve Görünüm. Bildirim sesini değiştirebilir veya belirli sesleri devre dışı bırakabilirsiniz, ancak bildirim sesini huddle sesinden bağımsız olarak ayarlayamazsınız.</li>
  <li><strong>Huddle cümle:</strong> Bir huddle sırasında, çağrı için ayrı bir ses kaydırıcısı yok, Slack'in diğer sesleri ise. Slack'teki her şey tek bir ses akışı macOS.</li>
  <li><strong>Giriş/çıkış cihazı:</strong> Slack → Settings → Ses ve Görüntü ile mikrofon ve hoparlör cihazlarını seçebilirsiniz, ancak özellik başına ses seviyesini seçemezsiniz.</li>
</ul>

<h2>Üç Slack ses sorunu</h2>

<h3>1. Müziğe göre çok sessiz bir araya gelmek</h3>
<p>Müziğiniz rahat bir seviyede. Bir grup katılıyorsun. İş arkadaşınızın sesi müziğinizle aynı seste — kelimeleri net ayırt edemiyorsunuz. Sistemin sesini yükseltmek müziği çok yüksek yapıyor.</p>

<h3>2. Huddle sırasında bildirim sesleri</h3>
<p>Bir toplantı tartışmasındasın. Gelen her Slack mesajı, çağrı ile aynı ses seviyesinde ping atıyor. Aktif kanallara sahip yoğun bir çalışma alanında, sürekli ping sesleri huddle'ı kullanılamaz hale getiriyor.</p>

<h3>3. Arka planda dinlemek için çok yüksek sesle toplanmak</h3>
<p>Bazen çalışırken pasif dinlemek için bir grup topluluğuna katılırsınız. Arka plan seviyesinde olmasını istersin — dikkatini dağıtmayacak kadar sessiz, ismini söylerse duyacak kadar yüksek. macOS Slack'i %20'ye ayarlamanıza izin vermez ve tarayıcınızı %60'ta tutar.</p>

<h2>Çözüm: Slack'in sesini bağımsız olarak kontrol edin</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Slack'e diğer tüm uygulamalardan ayrı kendi ses kaydırıcısı veriyor. Slack'in huddle sesi ve bildirim sesleri aynı uygulamanın parçası olduğundan, sürgü her ikisini de kontrol ediyor — ama aslında çoğu zaman istediğiniz şey bu.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial bir grup sırasında müzik farklı bir seviyede çalarken Slack sesini bağımsız olarak kontrol etmek" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Huddle için optimize edilmiş kurulum</h3>
<ul>
  <li><strong>Gevşeklik:</strong> %90-100 (Huddle sesi temiz, bildirimler yüksek ama aktif olarak Slack'tesiniz)</li>
  <li><strong>Spotify:</strong> %15 (neredeyse yok olmayan bir geçmiş, seslerle rekabet etmiyor)</li>
  <li><strong>Tarayıcı:</strong> Susturuldu (Beklenmedik sekme sesi yok)</li>
</ul>

<h3>Pasif huddle kurulumu</h3>
<ul>
  <li><strong>Gevşeklik:</strong> %30 (arka plan dinleme seviyesi)</li>
  <li><strong>Spotify:</strong> %40 (birincil ses sizin müziğinizdir)</li>
  <li><strong>Tarayıcı:</strong> %50 (normal çalışma seviyesi)</li>
</ul>

<p>Her birini profil olarak kaydet. Bir huddle başladığında, tek tıklamayla doğru profili uygulayın. Ya da kullanmak <strong>otomatik eğilme</strong> — huddle mikrofonunuzu etkinleştirdiğinde, SoundDial otomatik olarak Slack hariç her şeyi düşürüyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Mac Üzerinde Yeni Uygulamalar İçin Varsayılan Ses Seviyesi Nasıl Ayarlanır?",
    description:
      "Yeni uygulamalar varsayılan olarak tam ses seviyesinde açılıyor. Her yeni uygulamayı rahat bir seviyede başlatmak için nasıl yapılır — böylece hiçbir şey sizi hazırlıksız yakalamasın.",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>Yeni bir uygulama yüklüyorsunuz. İlk kez fırlatılıyor. Hemen tam sistem sesiyle ses — bir giriş sesi, bir bildirim, bir eğitim videosu — oynatıyor. Bunu beklemiyordun. Kulaklıklarınız açık. Kulakların çınlıyor.</p>

<p>macOS "yeni uygulamalar için varsayılan ses seviyesi" kavramı yok çünkü macOS uygulama başına hacim yok. Her uygulama sistem hacmini alır ve sistem sesi en son ayarladığınız seviyedir. Yeni uygulamalar özel muamele görmüyor — sadece diğer her şeyin seviyesine kadar hızlı performans gösteriyorlar.</p>

<h2>Neden bu bir sorun</h2>

<p>Bir uygulamayı ilk başlattığınızda, ne kadar yüksek ses çıkaracağını tahmin edemezsiniz. Bazı uygulamalar sesleri hemen çalır (işe alım eğitimleri, bildirim sesleri, hoş geldin videoları). Eğer müzik dinlediğiniz için sisteminizin sesi %80'deyse, o yeni uygulamanın sesi de %80'dir — ki bu beklenmedik bir ses kaynağı için çok daha yüksek olabilir.</p>

<p>Bu özellikle şu konularda sarsıcı:</p>
<ul>
  <li>Başlangıç sesi çalan iletişim uygulamaları (Slack, Teams)</li>
  <li>İlk lansmanda video eğitimleri olan uygulamalar</li>
  <li>Başlık ekranı müziğini anında çalan oyunlar</li>
  <li>İçeriği otomatik oynatan tarayıcı tabanlı uygulamalar</li>
</ul>

<h2>Çözüm: yeni uygulamalar için varsayılan ses seviyesi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> şu özelliği sunar: <strong>Yapılandırılabilir varsayılan ses seviyesi</strong> Yeni uygulamalar için. Ayarlarda, yeni tespit edilen uygulamaların hangi ses seviyesinde başlaması gerektiğini ayarlıyorsunuz — örneğin, %70. Herhangi bir uygulama ilk kez başlatıldığında ve ses ürettiğinde, SoundDial bunu %70'e ayarlıyor, %100 değil.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial varsayılan ses seviyesi — yeni uygulamalar tam seviye yerine yapılandırılmış seviyede başlar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bu şu anlam taşıyor:</p>
<ul>
  <li>Yeni yüklenmiş uygulamalardan tam ses ses çıkması şaşırtıcı değil</li>
  <li>Her yeni uygulama rahat ve öngörülebilir bir seviyede başlıyor</li>
  <li>Sonra gerekirse varsayılan ayarlardan yukarı veya aşağı ayarlayabilirsiniz</li>
  <li>Ayarlandıktan sonra, <strong>Hacim belleği</strong> Özellik, gelecekteki lansmanlar için o uygulamanın seviyesini hatırlıyor</li>
</ul>

<p>Küçük bir özellik, ama günlük gerçek bir rahatsızlığı çözüyor — herkesi en az bir kez hazırlıksız yakalayan "yeni uygulama sürpriz patlaması".</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac Başlangıç Sesi Çok Yüksekmi? Nasıl devre dışı bırakılır veya düşürülür",
    description:
      "Mac başlangıç çanı, her yeniden başlattığınızda tam sesle çalıyor — özellikle toplantılarda ve sessiz odalarda garip. İşte bunu nasıl susturmak veya kontrol etmek olur.",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>Sessiz bir ofiste Mac yeniden başlatıyorsun. Toplantı odası tamamen sessiz. O zaman — <em>BONG</em> — başlangıç çanı tam sesle çalar. Herkes sana bakıyor. Çan sesi ikonik, ama aynı zamanda kontrol edilemez ve çoğu zaman utanç verici derecede yüksek.</p>

<h2>Başlatma sesi nasıl devre dışı bırakılır</h2>

<p>macOS başlangıç zilini tamamen kapatmanıza olanak tanır:</p>

<ol>
  <li>Ziyaret edin <strong>Sistem Ayarları → Ses</strong></li>
  <li>Bulun <strong>"Başlangıçta ses çal"</strong></li>
  <li>Kaldır</li>
</ol>

<p>Bitti. Artık Mac sessizce başlayacak. Terminal komutlarına gerek yok — bu ayar Big Sur macOS dan beri mevcut.</p>

<h3>Terminal yöntem (isterseniz)</h3>
<p>Ayrıca Terminal üzerinden devre dışı bırakabilirsiniz:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Yeniden etkinleştirmek için:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Başlatma sesini devre dışı bırakmak yerine düşürebilir misiniz?</h2>

<p>Doğrudan değil. Başlatma sesi, kapanma anındaki sistem sesine göre belirlenen sabit bir ses seviyesinde çalıyor. Eğer Mac kapattığınızda %80 sesdeyse, zil yaklaşık %80 seviyesinde çalıyor. %20 ise, çan daha sessizdir.</p>

<p><strong>Çözüm:</strong> Mac yeniden başlatmadan önce sistem sesini %10-20'ye düşürün. Başlangıç sesi o alt seviyede çalacak. İdeal değil — hatırlamayı gerektiriyor — ama çan sesinin tamamen susturulmak yerine makul bir sesle olmasını istiyorsanız işe yarıyor.</p>

<h2>Daha geniş Mac ses kontrolü sorunu</h2>

<p>Başlatma zil, macOS'ın sınırlı ses kontrolünün sadece bir örneği. Sistem sesleri, bildirim sesleri ve uygulama sesi minimum bağımsız kontrolle bir arada karıştırılır. Gün boyunca farklı ses kaynaklarını yönetmek için düzenli olarak ses seviyesini ayarlıyorsanız, uygulama başına ses kontrolü daha geniş sorunu çözer.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Mac üzerindeki her uygulamaya kendi ses kaydırıcısı verir. Bildirim uygulamalarını düşük seviyede, müziği rahat bir seviyede ve aramaları tam sesle ayarlayın — hepsi bağımsız olarak. Konfigürasyonları profil olarak kaydedip tek tıklamayla değiştir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — tüm Mac ses kaynaklarını bağımsız yönetmek için uygulama başına ses kontrolü" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Cisco Webex Volume Mac'da Çok Düşük Mü? Bunu Nasıl Düzeltebilirim",
    description:
      "Webex çağrıları Mac üzerinde zar zor duyuluyor. İşte her çözüm — Webex ses ayarlarından, uygulama başına mikser ile çağrı sesini %100'ün üzerine çıkarmaya kadar.",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex, kurumsal ortamlarda en çok kullanılan video konferans araçlarından biri ve Mac'de ses kalitesi açısından en çok şikayet edilenlerden biri. Düşük çağrı sesi, boğuk sesler ve aynı sistem sesiyle Zoom veya Teams'ten daha sessiz gibi görünen ses. Webex çağrılarınızı zar zor duyabiliyorsanız, yalnız değilsiniz.</p>

<h2>1. Webex ses ayarlarını kontrol edin</h2>

<p>Bir Webex toplantısı sırasında, ses menüsüne tıklayın (hoparlör simgesi veya Ses Ayarları → üç nokta):</p>
<ul>
  <li>Doğru olduğundan emin olun <strong>Konuşmacı</strong> cihaz seçilir</li>
  <li>Hoparlör ses kaydırıcısını maksimuma çekin</li>
  <li>Test tonu çalmak ve çıkışı doğrulamak için "Test"e tıklayın</li>
  <li>"Müzik Modu"nun etkin olup olmadığını kontrol edin — özellikle müzik sunmıyorsanız devre dışı bırakın</li>
  <li>Gürültü giderme ayarlarını kontrol edin — agresif modda "Arka Plan Gürültüsünü Kaldır" seçeneği algılanan ses sesini azaltabilir</li>
</ul>

<h2>2. Çıkış macOS kontrol edin</h2>

<p>Sistem ayarları → ses → çıkış. Doğru cihazın seçildiğini ve sesin maksimumda olduğunu doğrulayın. macOS güncelleme veya cihaz değişikliğinden sonra, Webex beklenmedik bir çıkış kullanıyor olabilir.</p>

<h2>3. Bluetooth kodek sorunu</h2>

<p>AirPods veya Bluetooth kulaklık mı kullanıyorsun? Webex'in mikrofonunuzu etkinleştirmesi, AAC→SCO kodek anahtarını zorunlu kılarak ve ses kalitesini düşürür. Ayrı bir mikrofon kullanın (dahili Mac mikrofon veya USB) ve Bluetooth kulaklıkları sadece çıkış olarak kullanın.</p>

<h2>4. Webex'e özgü ses işleme</h2>

<p>Webex, arama katılımcılarının görünen hacmini azaltabilen agresif ses işleme özelliğine sahiptir. Şu Webex ayarlarını deneyin:</p>
<ul>
  <li>Gürültü giderme seviyesini "Yüksek" yerine "Düşük" olarak ayarlayın</li>
  <li>Eğer açıksa "Optimize for My Voice" seçeneğini devre dışı bırak</li>
  <li>"Bilgisayar Sesi"nden belirli bir cihaza geçmeyi deneyin</li>
</ul>

<h2>5. BT/yönetim sorunu</h2>

<p>Kurumsal ortamlarda, Webex genellikle BT tarafından belirli ses politikalarıyla yönetilir. Bazı ayarlar kilitlenmiş veya önceden ayarlanmış olabilir. Temel çözümler işe yaramazsa, Webex ses politikaları hakkında BT departmanınıza danışın. Bazı kuruluşlar maksimum ses seviyelerini küçümseer veya belirli ses işleme ayarlarını zorunlu kılar.</p>

<h2>6. Webex'i %100'ün üzerine çıkar</h2>

<p>Ayarlar maksimuma çıkarılmış ve katılımcılar hâlâ çok sessizse, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Webex'i yükseltmeye izin verir <strong>200%</strong>. Bu, çağrı sesini Webex'in yerleşik maksimumunun ötesine çıkarır — bir katılımcının kötü mikrofonu olduğunda veya Webex'in ses işlemesi sinyali çok azalttığında faydalıdır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Cisco Webex çağrı hacmini %100'ün üzerine çıkarmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial arka arkaya Webex toplantılarında da yardımcı olur: her toplantı başladığında otomatik olarak arka plan müziğinizi düşürmek için otomatik eğilme kullanın ve molalar sırasında geri kazanın. Bir "Toplantılar" ses profilini kaydederek iş günü için tercih ettiğiniz ses dengesini anında ayarlayın.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Mac'da iki şeyi aynı anda nasıl dinlerim ve çılgınlığa düşmeden",
    description:
      "Müzik ve podcast. Bir ders ve notlar videosu. Bir çağrı ve arka plan müziği. macOS ikisi için de bir cilt seçmenizi sağlar — bunları nasıl dengeleyeceğiniz işte.",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>Aynı anda iki ses kaynağını dinlemek istersiniz. Çağrı sırasında müzik. Bir eğitim izlerken bir podcast. Çalışma sırasında arka plan ortamı. İki şey, iki farklı ideal hacim. macOS ikisi için de bir kaydırıcı verir.</p>

<p>Bu, macOS'ın temel ses sınırlamasıdır: her uygulama bir ses seviyesini paylaşır. "Bu %30, o %80" diyemezsin. Her şey bir seviyede, ya da hiçbir şey.</p>

<h2>Aslında iki ses kaynağına ihtiyacınız olduğunda</h2>

<p>Bu bir kenar durumu değil. Çoğu insan bilgisayarlarını böyle kullanır:</p>

<ul>
  <li><strong>Müzik + video görüşmesi</strong> — en yaygın olan. Zoom toplantısında arka plan müziği ama meslektaşlarını duyacak kadar sessiz.</li>
  <li><strong>Ders + Referans materyali</strong> — bir öğrenci, kayıtlı bir dersi izlerken ara sıra bağlam için YouTube eğitimi izliyor.</li>
  <li><strong>Podcast + ortam sesleri</strong> — Beyaz gürültü veya yağmur sesleri uygulaması yumuşak çalırken podcast dinliyor.</li>
  <li><strong>İki tarayıcı sekmesi</strong> — bir sekmede bir eğitim videosu ve diğerinde farklı hacimlerde bir demo.</li>
  <li><strong>Oyun + sesli sohbet</strong> — oyun sesi, ortam için oyun, iletişim için Discord.</li>
</ul>

<p>Her durumda, bir kaynak "birinji" (daha yüksek, daha önemli) ve diğeri "ikincil" (daha sessiz, destekleyici). İdeal oran her kombinasyon için farklıdır ve gün içinde değişir.</p>

<h2>macOS sınırlaması</h2>

<p>macOS bir ses kaydırıcısı var. Ses tuşuna bastığınızda her şey eşit şekilde değişir. Podcast dinlemek için ses seviyesini ayarlıyorsanız, yağmur sesleri uygulaması da o seviyede — ya çok yüksek (dikkat dağıtıcı) ya da kendi uygulamasında ayarlamamış olsanız (eğer ses kontrolü varsa).</p>

<p>Bazı uygulamalarda dahili ses kaydırıcıları var (Spotify, VLC), ama çoğunda yok. Ve yapıldığında bile, iki ayrı ses kontrolünü ayarlamak için uygulamalar arasında geçiş yapmak hantal ve yavaş.</p>

<h2>Çözüm: tek bir panelde uygulama başına ses seviyesi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Tüm uygulamaları bağımsız ses kaydırıcılarıyla tek bir menü paneline yerleştirir. Her iki ses kaynağı yan yana, her birinin kendi seviyesi var. Birini diğerine dokunmadan ayarlayın.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial farklı ses seviyelerinde iki ses kaynağını gösteriyor macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Örnek kurulumlar:</p>

<p><strong>Müzik + Zoom görüşmesi:</strong></p>
<ul>
  <li>Zoom: %100 | Spotify: %20</li>
</ul>

<p><strong>Podcast + yağmur sesleri:</strong></p>
<ul>
  <li>Podcast uygulaması: %70 | Yağmur uygulaması: %15</li>
</ul>

<p><strong>Ders + YouTube eğitimi:</strong></p>
<ul>
  <li>Zoom (ders): %90 | Chrome (YouTube): %40</li>
</ul>

<p>Her kombinasyon farklı bir dengedir. Düzenli kullandıklarınızı <strong>Hacim profilleri</strong> ve tek tıklamayla değiştirin. Otomatik eğilme (ducking) müzik+arama senaryosunu otomatik olarak yönetiyor — bir arama başladığında, müzik hiçbir şeye dokunmadan ayarlanmış seviyenize düşüyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Mac Kanalında Herkesi Uyandırmadan Filmleri Nasıl İzlerim",
    description:
      "Diyalog duyulmaz, sonra patlamalar duvarları sarsıyor. İşte Mac'de gece geç saatlerde izlemek için film sesini nasıl evcilleştireceğiniz — hiçbir kelimeyi kaçırmadan — anlatım.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>Saat 1 gece. Yatakta MacBook'unuzda bir film izliyorsunuz. Karakterler fısıldıyor — sesi açıyorsun. Sonra bir araba kovalamacasına başlıyor ve aniden tüm daireniz duyuluyor. Ses tuşuna dalıyorsunuz. Bu döngü iki saat boyunca tekrar ediyor.</p>

<p>Sorun şu <strong>Dinamik Aralık</strong> — bir filmin en sessiz ve en gürültülü anları arasındaki boşluk. Güçlü bir ses sistemine sahip bir sinematoda, bu aralık sürükleyici bir deneyim yaratıyor. MacBook'ta gece yarısı olduğunda, "diyaloğu duyamıyorum" ile "komşuları uyandırmak" arasında sürekli bir kavga yaratıyor.</p>

<h2>Filmler neden müzik veya podcast'ten daha yüksek sesli</h2>

<p>Müzik genellikle sıkıştırılmış dinamik aralıkla masterlenir — en sessiz ve en yüksek sesli kısımlar arasındaki fark nispeten küçüktür (belki 10-15 dB). Podcast'ler ise daha da sıkıştırılmış. Filmler, özellikle aksiyon filmleri, dinamik bir aralığa sahip olabilir <strong>30-40 dB</strong> — sessiz kısımlar fısıltı gibi sessiz, yüksek sesli kısımlar ise tiyatro koltuklarını sallamak için tasarlanmış.</p>

<p>MacBook'unuzda diyalogu duyacak şekilde ses seviyesini ayarladığınızda, aksiyon sahneleri ses basıncı açısından 100 kat daha yüksek oluyor. İkisi için de uygun bir sistem sesi yok.</p>

<h2>Çözüm 1: Yayın servisinin gece modunu kullanın</h2>

<p>Bazı yayın servislerinde bu amaçla özel olarak dinamik aralık sıkıştırma özelliği vardır:</p>
<ul>
  <li><strong>Netflix:</strong> Oynatma sırasında ses ayarlarında "Yüksek Sesleri Azalt" seçeneğine bakın</li>
  <li><strong>Apple TV+:</strong> Sistem Ayarları → Erişilebilirlik → "Yüksek Sesleri Azaltma"</li>
  <li><strong>Amazon Prime:</strong> Desteklenen başlıklarda "Diyalog Artışı"</li>
  <li><strong>Disney+:</strong> Şu anda eşdeğer bir özellik yok</li>
</ul>

<p>Bu özellikler dinamik aralığı sıkıştırıyor, böylece sessiz kısımlar daha yüksek, yüksek sesli kısımlar ise daha sessiz oluyor. Sonuç olarak düşük ses seviyelerinde çalışan daha eşit bir ses ortaya çıkıyor.</p>

<h2>Çözüm 2: Kulaklık kullanın</h2>

<p>Kulaklıklar "herkesi uyandırmak" kısmını çözüyor — sesiniz gizlidir. Ama dinamik aralık sorununu çözemiyorlar. Diyalog-patlama döngüsü hâlâ oluyor, sadece kulaklarında. İşte uygulama başına ses kontrolü yardımcı olur: yayın uygulamanızın ses seviyesini kulaklık dinlemesi için tam olarak ayarlayın.</p>

<h2>Çözüm 3: Yayın uygulamanızı belirli bir ses seviyesine ayarlayın</h2>

<p>Gece geç saatlerde izleme için asıl sorun, yayın uygulamanızın, bildirim seslerinin ve diğer tüm seslerin aynı sistem sesiyle olması. Film diyalogunuzla aynı seste saat 2'de Slack ping atmak, kalp krizi seviyesinde bir sürpriz.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Mükemmel bir gece geç saatte kurulum yaratmanızı sağlar:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial gece film kurulumu — orta seste yayın uygulaması, bildirimler sessiz" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gece geç saatlerde film profili</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / tarayıcı:</strong> %40-50 — rahat diyalog seviyesi, sağır edici aksiyon sahneleri olmadan</li>
  <li><strong>Gevşeklik:</strong> Kısılmış — sürpriz sesler yok</li>
  <li><strong>Posta:</strong> Kısılmış</li>
  <li><strong>iMessage:</strong> Kısılmış</li>
  <li><strong>Sistem sesleri:</strong> Kısılmış</li>
</ul>

<p>Bunu "Gece" profili olarak kaydet. Gece geç saatlerde bir film başlattığınızda, profili tek tıklamayla uygulayın. Her bildirim kaynağı susturulmuş ve yayın uygulamanız kontrollü bir ses seviyesinde. İşin bittiğinde gündüz profiline geri dön.</p>

<p>Bunu, maksimum etki için yayın servisinin "Gürültülü Sesleri Azalt" özelliğiyle birleştirin: hizmet dinamik aralığı sıkıştırır ve SoundDial sizin Mac başka hiçbir şeyin ses çıkarmamasını sağlar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac Uykudan Sonra Ses Sıfırlanır? Ses Ayarlarınızı Nasıl Koruyabilirsiniz",
    description:
      "Her Mac uykudan uyandığında ses yanlış — maksimuma sıfırla, sıfıra düşür ya da yanlış çıkışa geçiyor. İşte nedenini ve nasıl düzeltilebileceğini.",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>MacBook kapağını kapatıyorsun. Sonra açarsın. Ses seviyesi farklı. Belki de %40'ta olduğunda maksimumda. Belki kulaklıktan hoparlörlere geçti. Belki sıfırda. Uyumadan önce sorun yoktu — şimdi yanlış.</p>

<p>Uyku sonrası ses sıfırlaması, farklı macOS sürümlerinde çeşitli şekillerde ortaya çıkan kalıcı bir macOS hatasıdır. İşte bunun nedeni ve nasıl başa çıkılacağı.</p>

<h2>Neden oluyor</h2>

<h3>1. Uyku sırasında ses çıkış cihazı değiştirildi</h3>
<p>Eğer uyku öncesi Bluetooth kulaklıklar bağlıydıysa ve Mac uykudayken (pil bitti, menzil dışına çıktı), macOS uyandığında dahili hoparlörlere geçer. macOS cihaz başına ses seviyesini hatırladığı için, ses hoparlörlerin en son ayarlandığı sesle değişir — bu da kulaklığınızın ses seviyesinden çok farklı olabilir.</p>

<h3>2. Core Audio daemon yeniden başlatma</h3>
<p>macOS'ın ses daemonu (coreaudiod) bazen uyku/uyanık döngülerinde yeniden başlatılır. Yeniden başladığında, son ayarlarınız yerine varsayılan ses seviyeleriyle başlatılabilir. Bu, Apple'ın çeşitli güncellemelerde kısmen düzelttiği ama asla tamamen ortadan kaldırmadığı bir sistem hatası.</p>

<h3>3. HDMI/DisplayPort yeniden bağlanması</h3>
<p>HDMI veya DisplayPort üzerinden harici bir ekran kullanıyorsanız, kapağı kapatıp açmak ekranın bağlantısını kapatıp yeniden bağlanmasına neden olabilir. Bazı ekranlar aynı zamanda ses çıkış cihazıdır ve macOS bu süreçte ekranın hoparlörlerine veya hoparlörlerinden geçiş yapabilir, bu süreçte ses seviyesi değişir.</p>

<h3>4. Bluetooth yeniden eşleştirme</h3>
<p>Bluetooth cihazları uykudan sonra yeniden bağlandığında, ses dengesi öncekinden farklı bir seviyeye çıkabilir. Bu özellikle üçüncü parti Bluetooth kulaklıklarda yaygındır (AirPods'ta daha az, Apple'ın optimize ettiği AirPods'ta ise daha az).</p>

<h2>Düzeltmeler</h2>

<h3>Uyku sırasında Bluetooth bağlantısının kesilmesini önleyin</h3>
<p>Sistem Ayarları → Bluetooth → Gelişmiş (veya cihazınızda "i" seçeneğine tıklayın). Bazı ayarlar, Bluetooth'un uyku sırasında aktif kalıp kalmadığını kontrol eder. Bağlantıyı aktif tutmak, hacmi sıfırlayan bağlantı/yeniden bağlantı döngüsünü önler.</p>

<h3>AirPods için otomatik anahtarlamayı devre dışı bırak</h3>
<p>Bluetooth → Sistem Ayarları: → AirPods'un yanındaki "i"ye tıklayın → "Bu Mac'ye Bağlanın" → "Son Bağlandığınızda Bu Mac" olarak ayarlandı. Bu, AirPods'un uyku sırasında başka bir cihazdan otomatik bağlanmasını engeller.</p>

<h3>Tutarlı bir çıkış cihazı ayarlayın</h3>
<p>Uykudan uyandıktan sonra Option tuşuna basılı tutun ve menü çubuğundaki Ses simgesine tıklayın. Tercih ettiğiniz çıkış cihazını seçin. Bunu tutarlı yapın ve macOS sonunda tercihinize "sadık" kalacaktır.</p>

<h3>NVRAM'ı sıfırla (Intel Mac'ler)</h3>
<p>Ses seviyesi sıfırlama kronikse, NVRAM'ı sıfırlayın: 20 saniye boyunca Option+Command+P+R tuşlarını basılı tutarak → gücü kapatın. Bu, kayıtlı ses ayarlarını temizler ve kalıcı ses seviyesi sorunlarını çözebilir.</p>

<h2>Ses dengenizi SoundDial</h2>

<p>Sistem sesi uykudan sonra sıfırlansa bile, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Sizin <em>Uygulama başına</em> hacim dengesi. Kendi <strong>Hacim belleği</strong> Özellik, her uygulamanın hacmini bağımsız olarak kaydeder ve uyandırma, yeniden başlatma veya uygulama yeniden başlatma sonrası geri getirir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Mac uyku ve uyanık döngülerinden sonra uygulama başına hacim seviyelerini korumak" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Yani macOS uykudan sonra sistem sesini %80'e sıfırlasa bile, uygulama başına bakiyeniz korunur:</p>
<ul>
  <li>Spotify hâlâ sistem sesinin %30'unda</li>
  <li>Zoom hâlâ %100</li>
  <li>Slack hâlâ sessiz</li>
</ul>

<p>Sistem sesini düzeltmeniz gerekebilir (bir ayar), ama tüm uygulamalarınızı yeniden dengelemenize gerek yok (bu altı ya da yedi ayar olur). Ve <strong>Hacim profilleri</strong>, tam iyileşme bile bir tıklama ile sonuçlanıyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac Müzik Prodüksiyonu İçin Ses: DAW ve İletişimi ayrı ayrı kontrol edin",
    description:
      "Discord görüşmesi sırasında Logic Pro veya Ableton kullanmak mı? İşte DAW'ınızı tam sesle duymanın ve sesli sohbeti rahat bir seviyede tutmanın yolları.",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>Logic Pro'da (ya da Ableton'da, ya da FL Studio'da) müzik üretiyorsunuz. Ayrıca bir işbirlikçiyle Discord'dasın. Sorun: DAW çıkışınız ve Discord'unuz aynı ses seviyesi için mücadele ediyor. Logic'i açarak miksinizi net duyun, Discord kulaklarınızda patlıyor. Discord için kısmayı yapın, miksiniz düzgün değerlendiremeyecek kadar sessiz oluyor.</p>

<p>Bu, müzik yapımcıları için gerçek bir sorun çünkü Mac ses seviyesini izlemek doğrudan miksaj kararlarını etkiliyor. DAW'ınız Discord yarıştığı için çok sessizse, beklenenden daha yüksek ses miks yaparsınız. Discord detayları bastırıyorsa, miksinizdeki sorunları kaçırırsınız.</p>

<h2>Bunun yapım için neden önemli olduğunu</h2>

<p>Müzik prodüksiyonu gerektirir <strong>Doğru izleme seviyeleri</strong>. Güvenilir miksaj kararları verebilmek için DAW'ınızı tutarlı, kalibre edilmiş bir ses seviyesinde duymanız gerekir. İletişim uygulamaları, bildirimler ve diğer ses kaynakları buna engel olur — ancak uzaktan iş birliği için genellikle aynı anda çalışmaları gerekir.</p>

<p>Profesyonel stüdyolar bunu ayrı monitör yolları ve talkback sistemleriyle çözüyor. Bir dizüstü bilgisayarda yazılıma ihtiyacınız var.</p>

<h2>DAW dahili yaklaşımı</h2>

<p>DAW'ın dahili izleme seviyesini kullanarak çıkışı tutarlı tutabilir, sonra Discord'un ses seviyesini dahili olarak ayarlayabilirsin. Ama:</p>
<ul>
  <li>Discord'un çıkış ses kaydırıcısı hassas değil ve %0-100 ile sınırlıdır</li>
  <li>Hâlâ sistem sesleri ve bildirimlerin beklenmedik seviyelerde müdahale etmesini engelleyemezsiniz</li>
  <li>Spotify veya YouTube'da bir parçaya referans vermeniz gerekiyorsa, onlar da sistem sesindedir</li>
</ul>

<h2>Üretim için uygulama başına hacim</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Her uygulama için bağımsız olarak tam hacimleri ayarlamanızı sağlar:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Discord'dan DAW çıkışını ve macOS'daki referans parçaları müzik prodüksiyonu için ayırmak" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Üretim kurulumu</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> %80-100 — birincil izleme seviyeniz</li>
  <li><strong>Discord / sesli sohbet:</strong> %40-60 — duyulabilir ama açıkça miksinize göre ikincil</li>
  <li><strong>Spotify / referans parçalar:</strong> %80 — doğru A/B karşılaştırmaları için DAW seviyenizi eşleştirin</li>
  <li><strong>Slack / bildirimler:</strong> Sessiz — prodüksiyon sırasında hiç parazit yok</li>
  <li><strong>Safari / Chrome:</strong> %50 — kulaklarınızı patlatmadan eğitimleri izlemek için</li>
</ul>

<h3>Bunu "Üretim" profili olarak kaydet</h3>
<p>Bu yapılandırmayı kaydedin ve üretim için oturduğunuzda tek tıklamayla uygulayın. İşiniz bittiğinde ve gündelik kullanıma geçtiğinizde, "Normal" profilinizi uygulayın. Sekiz uygulamayı yeniden ayarlamak yok.</p>

<h3>Uzaktan oturumlar için otomatik ördülme</h3>
<p>Bir işbirlikçiyle görüşüyorsanız, SoundDial'in otomatik eğilmesi mikrofon aktifken iletişim dışı uygulamaları düşürebilir. Ama prodüksiyon için bunu yapmak isteyebilirsiniz <em>devre dışı bırakmak</em> otomatik eğilme — DAW'ınız konuşuyor olunsa da tutarlı seviyelerde olmalı. Ayarlarda anahtar tek tıklama ile yapılıyor.</p>

<h2>Gecikme hakkında bir not</h2>

<p>SoundDial, ses kontrolü için Apple'ın Core Audio Tap API'sini kullanıyor. İşleme, izleme amaçları için fark edilmez olan önemsiz gecikme ekliyor. DAW üzerinden doğrudan izleme etkinleştirilmiş şekilde kayıt ve izleme yapıyorsanız, SoundDial DAW'ınızın ses yoluna müdahale etmez. Sadece hoparlörlerine/kulaklıklarınıza ulaşan çıkış seviyesini ayarlar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Apple Music Sesi Mac Çok Düşük mü? Bunu nasıl tamir eder ve güçlendiririm",
    description:
      "Apple Music maksimum seste Mac ama yine de çok sessiz mi? Ses Kontrolü, EQ ayarlarını kontrol edin ve Apple Music'i %100'ün üzerine nasıl çıkaracağınızı öğrenin.",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music tam sesle. Mac tam sesle. Yüksek olması gerektiğini bildiğin bir şarkı zar zor duyulabilir. Bu arada, Spotify'a geçerken — aynı şarkı, aynı ses — belirgin şekilde daha yüksek oluyor. Ne oluyor?</p>

<p>Apple Music'in oynatma sesini azaltabilen birkaç ayarı var ve bunlar belirgin değil. Her birini gözden geçirelim.</p>

<h2>1. Ses Kontrolü Kontrol Et</h2>

<p>Apple Music'in adı olan bir özellik var <strong>Ses Kontrolü</strong> Bu, tüm parçaların sesini normalleştirir ve yaklaşık aynı algılanan yüksek sesle çalıyorlar. Bu, şarkılar arasında sarsıcı ses sıçramalarını önler, ancak bunu şu şekilde yapar <em>azaltma</em> Daha yüksek sesli parçalar — her şeyi genel olarak daha sessiz kılıyor.</p>

<p>Kontrol etmek için: Müzik uygulamasını açın → Ayarlar (⌘,) → Playback → <strong>Ses Kontrolü</strong>.</p>

<p>Sound Check etkinse, devre dışı bırakmayı deneyin. Daha sessiz parçalara uydurmak için kısaltılan şarkılar şimdi orijinal mastering seviyelerinde çalmaya devam ediyor — ki bu genellikle çok daha yüksek sesle.</p>

<h2>2. EQ ayarını kontrol edin</h2>

<p>Apple Music'te yerleşik bir ekolayzer var. Bazı EQ ön ayarları, belirli frekansları artırırken kırpılmayı önlemek için genel ses seviyesini azaltır.</p>

<p>Kontrol et: Müzik uygulaması → Ayarlar → Oynatma → <strong>EQ</strong>. Bir EQ ön ayarı seçildiyse (özellikle "Spoken Word," "Late Night" veya "Small Speakers"), "Kapalı" olarak ayarlayın ve ses hızlanıp iyileşmediğine bakın.</p>

<p>Özellikle "Late Night" EQ dinamik aralığı sıkıştırıyor — sessiz kısımları daha yüksek, yüksek kısımları ise daha sessiz kılıyor. Bu da her şeyi daha "düz" ve daha düşük ses hissettirebilir.</p>

<h2>3. Kayıpsız Ses ayarlarını kontrol edin</h2>

<p>Apple Music Lossless (Ayarlar → Ses Kalitesi) etkinleştiriliyorsa, daha yüksek kaliteli akış bazı parçalar için standart AAC akışından daha düşük algılanan bir ses seviyesine sahip olabilir. Bunun sebebi, kayıpsız modun Apple'ın AAC versiyonlarında uyguladığı aynı mastering ayarlarına sahip olmamasıdır.</p>

<p>Ses farkının fark edilip edilmediğini görmek için geçici olarak AAC kalitesine geçmeyi deneyin.</p>

<h2>4. Kulaklık Güvenliği</h2>

<p>Sistem ayarları → ses → kulaklık güvenliği. "Düşük Gürültülü Ses" açıksa, macOS kulaklık sesini küresel olarak sınırlıyor — bu da Apple Music'i ve diğer her şeyi etkiliyor.</p>

<h2>5. Apple Music'i %100'ün üzerine çıkar</h2>

<p>Her şeyi kontrol ettiyseniz ve Apple Music hâlâ çok sessizse — ister Sound Check agresif olsun, ister albüm sessiz, ister MacBook hoparlörleriniz yeterince yüksek ses çıkarmıyorsa — uygulama başına ses yükseltmesi sorunu çözüyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Apple Music'i yükseltmenizi sağlıyor <strong>200%</strong>. Ses sinyali, hoparlörlerinize veya kulaklıklarınıza ulaşmadan önce sistem seviyesinde güçlendirilir. Sadece Apple Music daha yüksek sesle yükseliyor — Zoom, Slack ve tarayıcınız mevcut seviyelerinde kalıyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Apple Music'in sesini %100'ün üzerine çıkarıyor macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bu durum tam tersi için de faydalı: Apple Music Zoom çağrınıza göre çok yüksekse, Apple Music'i SoundDial içinde %25'e düşürüp Zoom'u %100'de tutun. Uygulama başına kontrol, bir uygulamanın sesini diğerinin sesine ödün vermek zorunda kalmamanız anlamına gelir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mac için Ücretsiz Ses Mikseri: Gerçekten Ne Alıyorsunuz (ve Ne Almadığınız)",
    description:
      "Mac için ücretsiz bir uygulama başına ses mikseri mi arıyorsunuz? İşte ücretsiz opsiyonların neler sunduğuna, eksiklerine ve ne zaman ödemeye değer olduğuna dair dürüst bir özet.",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>"Mac için ücretsiz hacim mikseri" ararsanız, ana bir sonuç bulursunuz: <strong>Arka Plan Müziği</strong>. macOS için tek kayda değer ücretsiz, açık kaynaklı uygulama ses kontrolü uygulaması. Gerçekten ne aldığınıza ve neyi vazettiğinize bakalım.</p>

<h2>Arka Plan Müziği: ücretsiz seçenek</h2>

<p>Background Music, GitHub'da barındırılan ücretsiz, açık kaynaklı bir uygulamadır. Size şunları verir:</p>

<ul>
  <li><strong>Uygulama başına ses kaydırıcıları</strong> — her çalışan uygulama için temel ses kontrolü</li>
  <li><strong>Otomatik duraklatma müziği</strong> — başka bir uygulama ses çaldığında müzik çalarınızı duraklatıyor, durduğunda devam ediyor</li>
  <li><strong>Varsayılan çıkış cihazı ayarı</strong> — varsayılan olarak hangi cihaz uygulamalarını kullandığını geçersiz kılmak</li>
</ul>

<h3>Arka Planda Müzikte Olmayan Şeyler</h3>
<ul>
  <li><strong>%100'ün üzerinde ses artışı yok</strong> — kaydıranlar sadece %0'dan %100'e çıkar. Sessiz uygulamaları güçlendiremiyor.</li>
  <li><strong>Ses profili yok</strong> — Kayıt yapamıyor ve yapılandırmalar arasında geçiş yapamıyor</li>
  <li><strong>Otomatik eğilme yok</strong> — otomatik duraklatma, otomatik eğilmekten farklıdır. Duraklama müziği tamamen durdurur; eğilmek onu rahat bir arka plan seviyesine indiriyor. Birçok kişi tam sessizlikten ziyade aramalar sırasında sessiz arka plan müziğini tercih eder.</li>
  <li><strong>Ses belleği yok</strong> — yeniden başlatmalar arasında uygulama başına hacimleri hatırlamıyor</li>
  <li><strong>Klavye kısayolu yok</strong> — mikseri açmak veya tüm uygulamaları sessize atmak için kısayol tuşu yok</li>
  <li><strong>Çıkış cihazı anahtarlaması yok</strong> — aynı panelden hoparlör/kulaklık değiştiremiyor</li>
</ul>

<h3>Güvenilirlik sorunu</h3>
<p>Background Music'in en büyük sorunu özellikler değil — istikrar. Bu, bir <strong>sanal ses cihaz sürücüsü</strong>, ve bu sürücü macOS güncellemelerle bozuluyor. Neredeyse her büyük macOS sürümünden (Ventura, Sonoma, Sequoia, Tahoe) sonra kullanıcılar şöyle bildirir:</p>
<ul>
  <li>Sanal cihaz kurulamıyor</li>
  <li>Ses çatırdamısı ve aksaklıklar</li>
  <li>Uygulamalar tespit edilmiyor</li>
  <li>Hiç ses çıkışı yok</li>
  <li>Uygulama lansmanda çöker</li>
</ul>

<p>Gönüllüler tarafından yönetilen açık kaynak bir proje olduğu için düzeltmeler her zaman zamanında olmaz. macOS güncellemesinden sonra haftalarca uygulama başına hacimsiz kalabilirsiniz.</p>

<h2>Diğer "ücretsiz" seçenekler</h2>

<h3>eqMac (ücretsiz katman)</h3>
<p>eqMac'ın ücretsiz katmanı, sistem çapında bir ekolayzer sağlar ancak uygulama başına ses kontrolü sağlamıyor. Uygulama başına özel özellikler için eqMac Pro (abonelik) gereklidir. Ücretsiz versiyon, öncelikle EQ istiyorsanız, ses mikslemesi değilse faydalı.</p>

<h3>macOS dahili</h3>
<p>macOS dahili ses mikseri yok. En yakın olanı Sistem Ayarları → Ses'teki uyarı ses kaydırıcısıdır; bu sadece sistem seslerini etkiler — uygulama sesini değil.</p>

<h2>Boşluğun yeterli olduğu</h2>

<p>Arka plan müziği uygun olabilir eğer:</p>
<ul>
  <li>Sadece temel uygulama başına hacim (%0-100) yeterlidir</li>
  <li>Profillere, otomatik eğilmeye veya ses yükseltmesine ihtiyacınız yok</li>
  <li>Güncellemeler bozulduğunda macOS rahatça tamir edebilirsiniz</li>
  <li>Ses zincirinizde sanal bir ses cihazı ile sorun yok</li>
</ul>

<h2>Ne zaman ödemeye değer</h2>

<p>Ücretli bir ses mikseri değer eğer ihtiyacınız varsa:</p>
<ul>
  <li><strong>Güvenilirlik</strong> — macOS güncellemelerden sonra gönüllü düzeltmeleri beklemeden çalışıyor</li>
  <li><strong>Ses seviyesi %200'e yükseltildi</strong> — sessiz uygulamaları yerleşik maksimumunun ötesine güçlendirir</li>
  <li><strong>Profiller</strong> — yapılandırmaları kaydedip tek tıklamayla Toplantı/Odak/Oyun arasında geçiş yapın</li>
  <li><strong>Otomatik ördülme</strong> — sadece otomatik duraklatma değil, aramalar sırasında otomatik ses düşürme</li>
  <li><strong>Sistem sürücüsü yok</strong> — Apple'ın yerel API'si ile çalışıyor, bozucu sanal ses cihazı yok</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Maliyeti €14,99 — bir kerelik, abonelik değil. Bağlam için, bu Spotify aboneliğinin iki aydan az bir süresi, yani her gün kullanacağınız bir araç için. SoundSource'un (39 dolar) yarısından daha ucuz ve SoundSource'da olmayan özellikler (profiller, otomatik eğilme) içeriyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — profil, otomatik alçlama ve %200 boost ile Mac için güvenilir uygulama başına ses mikseri" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple tarafından incelendi, sandbox'ta kullanıldı, sistem sürücüsü yok. €14.99 tek seferlik, aboneliksiz, macOS 14.2+ fiyat.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Müzik ve Sesli Sohbet Seviyesini Mac Nasıl Dengelenir",
    description:
      "Discord'da müzik çok yüksek. Ya da Spotify altında arama çok sessiz. macOS onları dengelemenize izin vermiyor — mükemmel oranı nasıl ayarlayacağınızı inceleyin.",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>Discord'da (veya Zoom'da, ya da FaceTime'da) arkadaşlarınızla konuşurken müzik dinlemek istersiniz. Müziğin var olması ama baskın olmaması gerekir. Sesli sohbet açık ve baskın olmalı. Basit bir istek. macOS bunu imkansız kılıyor.</p>

<p>Her şeyi tek bir sistem kontrol ederken, sıkışıp kalırsınız: arama için sesi aç ve müzik çok yüksek oluyor. Müzik için sesi kıstırırsan arkadaşlarını duyamazsın. Bu iki şeyi farklı seviyelere koymanın yerleşik bir yolu yok.</p>

<h2>Uygulama içi hacim çözüm</h2>

<p>Spotify ve Discord'da dahili ses kaydırıcıları var. Teoride, Spotify'ın kaydırıcısını %30'a düşürebilir ve Discord'un çıkışını %100'de tutabilirsiniz. Bu, 30/100 oranı oluşturur.</p>

<p>Pratikte:</p>
<ul>
  <li>Her uygulamanın kaydırıcısını ayarlamak için geçiş yapmanız gerekiyor</li>
  <li>Sistem hacmini ayarladığınızda oran değişir (her ikisi de orantılı olarak ölçeklenir)</li>
  <li>Her uygulamanın dahili ses kaydırıcısı yoktur</li>
  <li>Kesin değil — küçük Spotify kaydırıcısı, yüzde göstermiyor</li>
  <li>Spotify'ı kapatıp tekrar açarsanız, kaydırıcı sıfırlanabilir</li>
</ul>

<h2>Gerçek çözüm: bağımsız uygulama başına hacim</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Spotify ve Discord'u bağımsız ses kaydırıcılarıyla aynı panele getiriyor. İstediğiniz oranı ayarlayın ve bırakın:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Spotify ve Discord'u farklı ses seviyelerinde dengelemek macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Müzik + sesli sohbet için altın oran</h3>
<p>Çoğu insanın bunu nasıl kullandığına göre:</p>
<ul>
  <li><strong>Sesli sohbet %85-100 arası</strong> — her zaman net duyulabilir, karışımda baskın</li>
  <li><strong>Müzik %20-35</strong> — mevcut ama asla seslerle rekabet etmeyen</li>
</ul>

<p>Tam oran müzik, kulaklıklar ve kişisel tercihlere bağlıdır. Önemli olan, mükemmel dengeyi bir kez bulup koruyabilmesi; sürekli ayarlamak yerine.</p>

<h3>Profil olarak kaydet</h3>
<p>Müzik/sesli sohbet dengenizi profil olarak kaydedin. "Oyun" profili: Discord %100, oyun %50%, Spotify %20. "Chill" profili: Discord %70, Spotify %60. Tek tıklamayla aralarında geçiş yap.</p>

<h3>Çağrılar için otomatik eğilme</h3>
<p>Müzik dinliyorsanız ve bir çağrı gelirse, SoundDial'in otomatik eğilmesi müziği otomatik olarak yapılandırma seviyenize düşürür. Görüşme bittiğinde müzik tekrar çalınıyor. Hiçbir şeye dokunma.</p>

<p>Ses dengesi sorunu, her Mac kullanıcının müzik ve arama aynı anda çalıştığı anda karşılaştığı bir şeydir. Bir kerelik 14,99 €'luk bir tamir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac Ses Kontrolü: Tam Rehber (2026)",
    description:
      "macOS sesi kontrol etme konusunda bilmeniz gereken her şey — temel klavye kısayollarından uygulama başına ses seviyesine, çıkış anahtarlamaya ve otomasyona kadar.",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS size ses kaydırıcısı ve susturma düğmesi veriyor. Apple'ın dahili ses kontrolünün sınırı bu kadar. Ama Mac aslında yüzeyin gösterdiğinden çok daha fazla ses yeteneğine sahip — gizli klavye kısayolları, uygulama başına ses araçları, çıkış cihazı yönetimi ve çoğu kullanıcının asla keşfetmediği otomasyon özellikleri.</p>

<p>Bu, Mac sesi kontrol etmek için tam rehberdir. Temel özelliklerden güçlü kullanıcı özelliklerine kadar, her şey tek bir yerde.</p>

<h2>Bölüm 1: Dahili ses kontrolleri</h2>

<h3>Ses tuşları</h3>
<p>Ses yükseltme (F12), ses düşürme (F11) ve susturma (F10) tuşları sistem sesini 16 adımda ayarlar. Her adım toplam aralığın yaklaşık %6,25'ini oluşturur. Mevcut hacim ekranda üst örtü olarak gösterilir.</p>

<h3>İnce tanenli hacim: Seçenek + Kaydırma</h3>
<p>Bekle <strong>Seçenek + Kayma</strong> ve sesi yukarı/aşağı basın. Her basma normal adımın dörtte biri ayarlanır — böylece size <strong>64 ses seviyesi</strong> 16 yerine 16 yerine. Normal adımlar çok kaba olduğunda mükemmel kulaklık sesini bulmak için çok önemli.</p>

<h3>Sessiz ses ayarı: Kaydırma</h3>
<p>Bekle <strong>Vardiyası</strong> ve sesi yukarı/aşağı basın. Ses, duyulabilir geri bildirim "pop" olmadan değişiyor. Bunu bir arama veya sunum sırasında ses ayarında kullanın.</p>

<h3>Menü çubuğu ses kaydırıcısı</h3>
<p>Ses simgesi menü çubuğunuzda varsa (Sistem Ayarları, → Kontrol Merkezi → Menü Bar'da Ses → Her Zaman Göster) seçeneğinden etkinleştirin), ona tıkladığınızda bir ses kaydırıcısı görünür. Bu sürekli bir kaydırıcı, klavye tuşları gibi basamaklı değil, böylece herhangi bir hassas seviyeyi ayarlayabilirsiniz.</p>

<h3>Kontrol Merkezi</h3>
<p>Menü çubuğundaki Control Center simgesine (iki anahtarlı simge) tıklayın → ses kaydırıcısı ve çıkış cihazı seçimine hızlı erişim için Ses bölümüne tıklayın.</p>

<h2>Bölüm 2: Çıkış cihaz yönetimi</h2>

<h3>Çıkış cihazlarının anahtarlanması</h3>
<p>En hızlı yerleşik yöntem: tutma <strong>Seçenek</strong> ve menü çubuğundaki Ses simgesine tıklayın. Tüm mevcut çıkış ve giriş cihazlarının bir listesini göreceksiniz. Hemen değiştirmek için bire tıklayın.</p>

<p>Alternatif olarak: Sistem ayarları → ses → çıkış. Listeden tercih ettiğiniz cihazı seçin.</p>

<h3>Bluetooth cihaz yönetimi</h3>
<p>macOS, her çıkış cihazının ses seviyesini ayrı ayrı hatırlar. Hoparlörlerden (%70) AirPods'a (%40) geçtiğinizde, ses seviyesi o cihazı en son kullandığınız zamanki haline ayarlanıyor. Bu, ses seviyesinin "kendi kendine değişiyor" gibi hissettirmesi bekliyorsanız.</p>

<h3>Toplu ve çoklu çıkış cihazları</h3>
<p>Gelişmiş kurulumlar için, Audio MIDI Kurulumu (Uygulamalar → Yardımcı Programlar) açarak toplu cihazlar (birden fazla girişi birleştirmek) veya çoklu çıkış cihazları (sesi aynı anda birden fazla çıkışa göndermek) oluşturmak için açın. Bunlar öncelikle profesyonel ses kurulumları için kullanışlıdır, günlük kullanım için değil.</p>

<h2>Bölüm 3: Uyarı ve bildirim sesi</h2>

<h3>Sistem uyarı hacmi</h3>
<p>macOS ayrı bir uyarı ses kaydırıcısı var: Sistem Ayarları → Ses → Uyarı Sesi. Bu, sistem seslerinin (Funk, Tink, Bottle vb.) seviyesini ana ses seviyesinden bağımsız olarak kontrol eder. Ancak bu sadece macOS sistem uyarılarını etkiliyor — Slack, Discord veya Teams gibi üçüncü taraf uygulamalardan gelen bildirim seslerini değil.</p>

<h3>Bildirim ses yönetimi</h3>
<p>Sistem Ayarları → Bildirimler'e gidin. Her uygulama için "Bildirimler için ses çal" seçeneğini açıp kapatabilirsiniz. Bu ikili bir durum — bir uygulamanın bildirimlerini daha sessiz hale getiremezsiniz, sadece tamamen açık veya tamamen kapalı hale getirebilirsiniz.</p>

<h3>Odak modları</h3>
<p>Odaklanma modları (Sistem Ayarları → Odak) seçilen uygulamalardan gelen bildirimleri bastırır. Bildirim seslerini susturabilirler ama medya sesini etkilemezler. Müziğiniz Do Not Disturb'ta bile tam sesle çalmaya devam ediyor.</p>

<h2>Bölüm 4: Kulaklığa özgü kontroller</h2>

<h3>Kulaklık Güvenliği</h3>
<p>Sistem ayarları → ses → kulaklık güvenliği. "Yüksek Sesi Azalt" (Yüksek Sesi Azalt) kulaklık sesini birikimli pozlamaya göre sınırlar. Bunu devre dışı bırakabilir veya eşiği ayarlayabilirsiniz. Sadece kulaklık çıkışını etkiliyor, hoparlörleri etkiliyor.</p>

<h3>Mekansal Ses</h3>
<p>Desteklenen kulaklıklar için (AirPods Pro, AirPods Max, bazı Beats) macOS, Spatial Audio'yu ve kafa takibi destekliyor. Control Center → Ses → Mekansal Ses'te etkinleştirin. Bu, sesin algılanan konumunu etkiler ancak ses seviyesini etkilemez.</p>

<h3>Ses dengesi</h3>
<p>Sistem ayarları → Erişilebilirlik → Ses → Denge. Stereo dengesini ayarlayan sol-sağ kaydırma. Bir taraf diğerinden daha sessiz geliyorsa ortada olduğundan emin olun.</p>

<h2>Bölüm 5: macOS neler yapamaz (ve nasıl düzeltilir)</h2>

<h3>Uygulama başına ses kontrolü</h3>
<p>macOS tüm uygulamalar için tek bir ses kaydırıcısı var. Spotify'ı %30, Zoom'u %100'e ayarlamanın yerleşik bir yolu yok. Bu, macOS'de en çok istenen ses özelliği ve Apple bunu hiç eklemedi.</p>

<h3>%100'ün üzerinde ses artışı</h3>
<p>macOS'nin hacmi %100'e ulaşıyor. Eğer içerik maksimum ses seviyesinde bile çok sessizse, daha fazla yükseltmenin yerleşik bir yolu yok.</p>

<h3>Hacim profilleri</h3>
<p>Ses konfigürasyonunu kaydetmenin (Spotify 30%, Zoom %100%, Slack sessiz olmuş) ve ön ayarlar arasında geçiş yapmanın bir yolu yok.</p>

<h3>Otomatik ördülme</h3>
<p>macOS çağrıya katıldığınızda arka plan sesi otomatik olarak azalmıyor.</p>

<h3>Uygulama başına hacim belleği</h3>
<p>macOS, uygulama başına ses seviyesini hatırlamıyor çünkü uygulama başına hacim yok.</p>

<p>Bunların beşi de şu şekilde mevcuttur <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — Apple'ın hiç üretmediği ses mikserini ekleyen yerel macOS menü çubuğu uygulaması.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — uygulama başına ses kontrolü, profiller, otomatik eğilme ve %200 artış macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Bölüm 6: Uygulama başına hacim SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> yukarıda listelenen tüm boşlukları doldurur:</p>

<ul>
  <li><strong>Uygulama başına hacim:</strong> Her uygulamanın kendi kaydırıcısı var, %0'dan %200'e</li>
  <li><strong>Uygulama başına sessizleştirme:</strong> Herhangi bir uygulamayı sessizleştirmek için tek tıklama</li>
  <li><strong>Ses yükseltmesi:</strong> Sessiz uygulamaları %100'ün ötesine güçlendir</li>
  <li><strong>Hacim profilleri:</strong> Konfigürasyonları kaydet ve tek tıklamayla geçiş yap</li>
  <li><strong>Otomatik eğilme:</strong> Arka plan sesi aramalar sırasında azalır, sonra geri gelir</li>
  <li><strong>Hacim belleği:</strong> Her uygulamanın sesi yeniden başlatmalar arasında hatırlanır</li>
  <li><strong>Çıkış cihazı anahtarlama:</strong> Aynı panelden hoparlör/kulaklık değiştirin</li>
  <li><strong>Klavye kısayolları:</strong> ⌃⌥S mikseri açmak için, ⌃⌥M tüm sesleri kapatmak için</li>
</ul>

<p>Apple'ın modern Core Audio Tap API'sini kullanıyor — sistem sürücüsü yok, sanal ses cihazı yok, çekirdek uzantısı yok. Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 14,99 €'ya (tek seferlik satın alma, abonelik yok), Apple tarafından incelendi ve sandbox'ta alındı. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "VLC Ses Çok Düşük Mac? Nasıl %200'ün üzerine çıkarılır",
    description:
      "VLC maksimum seste ama video hâlâ çok sessiz mi? VLC'de yerleşik %200 artış var — ayrıca uygulama başına bir ses mikseriyle daha da ileri gidebilirsiniz.",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>VLC'de bir video izliyorsunuz. Diyalog sessiz. VLC'nin sesini tamamen açıyorsunuz. Mac sesini tamamen açıyorsunuz. Hâlâ düzgün duyamıyorum. Video çok sessiz kaydedildi.</p>

<p>İyi haber: VLC'nin çoğu kişinin bilmediği yerleşik bir çözümü var. Daha da iyi haber: Sistem seviyesinde bir boost ile üst üste koyup daha fazla ses seviyesi var.</p>

<h2>VLC'nin yerleşik ses seviyesi artışı (%200'e kadar)</h2>

<p>VLC kendi başına %100 hacmin üzerine çıkabilir. VLC'nin oynatıcı çubuğundaki ses kaydırıcısı %100'e ulaşıyor, ama bunu daha da artırabilirsiniz:</p>

<h3>Yöntem 1: Kaydırma tekerleği</h3>
<p>Farenizi VLC'nin ses kaydırıcısının üzerine getirin ve yukarı kaydırın. Kaydırıcı görünür %100 sınırını aşacak, %200'e kadar çıkacak. Kaydırırken yüzde gösterilir.</p>

<h3>Yöntem 2: Klavye kısayolu</h3>
<p>Basın <strong>Komuta + Yukarı Ok</strong> (⌘↑) defalarca %100'ün üzerine çıkarmak için hacmi tekrar tekrar artırdı. Her basma bir basma ekliyor. <strong>Komuta + Aşağı Ok</strong> (⌘↓) azaltmak için.</p>

<h3>Yöntem 3: Ses menüsü</h3>
<p>VLC'ye gidin → ses → sesi artırın. Ses yeterince yüksek olana kadar tekrarlayın. Mevcut seviye oyuncunun sağ alt köşesinde gösterilmiştir.</p>

<p>VLC'nin %200 güçlendirmesi, VLC'nin kod çözücüsündeki ses sinyalini güçlendirerek çalışır. Aşırı seviyelerde bozulma getirebilir, ancak gerçekten sessiz video dosyaları için çok etkilidir.</p>

<h2>VLC'nin güçlendirmesinin ötesinde: sistem seviyesinde güçlendirme</h2>

<p>VLC %200 hala yeterince yüksek değilse — ya da VLC'yi dahili ses ayarlarını etkilemeden yükseltmek istiyorsanız — sistem seviyesinde, uygulama başına bir ses mikseri başka bir yükseltme katmanı ekler.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> VLC'ye sistem seviyesinde %0'dan %200'e kadar kendi ses kaydırıcısını verir. Bu, VLC'nin dahili güçlendirmesiyle birlikte birikiyor:</p>

<ul>
  <li>VLC dahili: %200 × SoundDial: %200 = %400 etkili amplifikasyon</li>
  <li>VLC dahili: %150 × SoundDial: %150 = %225 etkili amplifikasyon</li>
</ul>

<p>Bu aşırı güçlendirme ve bazı içeriklerde bozulma yaratabilir, ancak son derece sessiz kaynak materyal için ihtiyacınız olan şey olabilir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial sessiz video dosyaları için macOS sistem seviyesinde VLC sesini artırmak" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Daha da önemlisi, SoundDial VLC'yi güçlendirmenize izin veriyor <strong>Bağımsız olarak</strong>. Müzik çalarınız, tarayıcınız ve iletişim uygulamalarınız normal seviyelerde kalırken, sadece VLC daha yüksek sesle konuşuyor. VLC'yi SoundDial'de %180'e çıkarırsan, Spotify değişmez. VLC'nin dahili boost özelliği bunu yapamaz — VLC'nin boost sadece VLC'yi etkiler, ancak macOS'nin tek sistem sesi yine de her şeyi birbirine bağlıyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Mac Üzerinde Ses Eğilmesini Nasıl Devre Dışı Bırakılır (veya Kendin Kontrol Edebilirim)",
    description:
      "macOS ya da uygulamalarınız aramalar sırasında sormadan müziğinizi sürekli kısıyor. İstenmeyen ses kaçırılmasını nasıl durduracağınızın — ya da bunu gerçekten kontrol ettiğiniz eğilme ile değiştirmenizin yolları şunlar.",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>Zoom görüşmesine katılıyorsun. Müziğin neredeyse sıfıra düşüyor. Hiçbir ses kontrolüne dokunmadın — bir şey senin için yaptı. Bu <strong>ses eğilme</strong>: bir arama veya önemli ses kaynağı aktifken arka planda sesin otomatik olarak düşürülmesi.</p>

<p>Bazı insanlar bunu çok seviyor. Bazıları ise bundan nefret ediyor — özellikle eğilme çok agresif olduğunda (müzik rahat bir arka plan seviyesi yerine sıfıra düşüyor) ya da beklenmedik şekilde tetiklendiğinde.</p>

<p>İşte Mac üzerinde istenmeyen ördülmeyi nasıl devre dışı bırakabileceğiniz ve istediğiniz şekilde çalışan ördülme ile nasıl değiştirileceği.</p>

<h2>Sesli eğilme nereden geliyor Mac</h2>

<p>macOS kendisi de öyle <strong>Değil</strong> Dahili bir ses eğiltme özelliği var. Eğer müziğiniz aramalar sırasında daha da sessizleşiyorsa, bunlardan biri buna sebep oluyor:</p>

<h3>1. Zoom'un ses işleme sistemi</h3>
<p>Zoom aktive olduğunda sistem sesini azaltabiliyor. Zoom → Ayarlar → Ses'i kontrol edin ve "Mikrofon sesini otomatik olarak ayarla" seçeneğini devre dışı bırakın. Ayrıca gürültü bastırmayı "Yüksek"ten "Düşük"e düşürmeyi de dene.</p>

<h3>2. Bluetooth kodek anahtarlaması</h3>
<p>Bir uygulama Bluetooth kulaklığınızın mikrofonunu etkinleştirdiğinde, macOS AAC'den SCO kodekine geçer. Bu aslında "eğilmek" değil — her şeyi daha sessiz ve daha düşük kaliteli yapan bir codec değişikliği. Ayrı bir mikrofon kullanarak düzeltin.</p>

<h3>3. Bunu yapan üçüncü taraf bir uygulama</h3>
<p>Bazı ses uygulamaları (örneğin Background Music) otomatik duraklatma veya otomatik eğilme özelliklerine sahiptir. Bazı medya uygulamaları başka bir ses kaynağı tespit ettiklerinde kendi seslerini düşürür. Yüklediğiniz herhangi bir ses programı uygulamasını kontrol edin.</p>

<h3>4. İletişim uygulamalarının sesi ayarlaması</h3>
<p>Discord, Teams ve diğer iletişim uygulamalarının kendi ses işleme süreçleri var ve bu da algılanan diğer uygulamaların ses seviyesini etkileyebilir. Her uygulamanın ses ayarlarında "otomatik ayarlama" seçeneklerini kontrol edin ve devre dışı bırakın.</p>

<h2>İstenmeyen ördeği nasıl durdururum</h2>

<ol>
  <li><strong>Zoom/Teams/Discord ses ayarlarını kontrol et.</strong> — otomatik ses seviyesi/mikrofon ayarını devre dışı bırak</li>
  <li><strong>Aramalar için ayrı bir mikrofon kullanın</strong> — Bluetooth codec geçişini engeller</li>
  <li><strong>Ses araçlarını kaldırın</strong> — Arka Plan Müziği, Soundflower veya sesi kesen herhangi bir uygulama</li>
  <li><strong>macOS Erişilebilirliği Kontrol Edin</strong> — Sistem Ayarları → Erişilebilirlik → Beklenmedik ayarlar için Ses</li>
</ol>

<h2>Kötü ördeği iyi ördek ile değiştirin</h2>

<p>Ses eğilme fikri aslında harika — aramalar sırasında otomatik olarak arka plan sesini düşürerek net duyabilirsiniz. Sorun, çok agresif olduğunda (müzik sıfıra düşer), yapılandırılamaz (ne kadar düşüreceğinizi seçemezsiniz) ya da yanlış bir şey tetiklendiğinde oluyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Kontrolü size veren yerleşik otomatik eğilme özelliğine sahiptir:</p>

<ul>
  <li><strong>Configurable duck level:</strong> Aramalar sırasında arka plan sesi tam olarak ne kadar düşüreceğinizi seçin — %10'dan (neredeyse sessiz) %80'e (neredeyse azalmış) kadar. Varsayılan %30, bu da müziği duyulabilir tutuyor ama dikkat dağıtmıyor.</li>
  <li><strong>Akıllı tespit:</strong> Mikrofon kullanımını izleyerek çağrıları algılar — macOS'nin turuncu noktasıyla aynı gösterge. Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype ile çalışıyor.</li>
  <li><strong>Mükemmel restorasyon:</strong> Arama bittiğinde, her uygulama tam olarak önceki sesine geri döner. Yeniden ayarlama yok.</li>
  <li><strong>Kolay geçiş:</strong> SoundDial ayarlarında otomatik eğiltme özelliğini açıp kapatın. İstemediğinizde devre dışı bırakın. Geri istediğinizde etkinleştirin.</li>
</ul>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial ayarlanabilir otomatik eğiltme — aramalar sırasında arka plan sesinin ne kadar azaldığını tam olarak kontrol edin" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Fark şu: Bir uygulama her arama sırasında müziğinizin sıfıra düşmesi gerektiğini karar vermek yerine, siz %25'e düştüğünüzü seçiyorsunuz. Kontrolü kaybetmek yerine, onu kazanıyorsun. Ve üç farklı uygulamada gizli bir özelliği devre dışı bırakmaya çalışmak yerine, tek bir yerde bir anahtar var.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Bluetooth kulaklıklar Mac çok sessiz mi? İşe Yarayan Her Çözüm",
    description:
      "Bluetooth kulaklıklarınız telefonda sorunsuz çalışıyor ama Mac sessiz çıkıyor. İşte her sebep — codec sorunlarından macOS ses sınırlarına kadar — ve her birinin nasıl düzeltileceği.",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>Bluetooth kulaklıklarınız telefonunuzda oldukça yüksek sesli. Onları Mac ile bağlıyorsunuz — ve her şey daha sessiz oluyor. Müzik boğuk geliyor. Çağrıları duymak zor. Ses seviyesini maksimuma çıkardınız ama yine de yeterli değil. Ne oluyor?</p>

<p>Bluetooth ses Mac telefonlarda olmayan birkaç ses düşürme faktörü var. İşte her biri ve nasıl düzeltileceği.</p>

<h2>1. Kulaklık Güvenliği sesini sınırlıyor</h2>

<p>macOS, işitmenizi korumak için kulaklık sesini sınırlayan yerleşik bir özellik var. Zaman içinde ses poziyetini ölçür ve çok yüksek dinlediğinizi düşünürse maksimum sesi düşürür.</p>

<p>Ziyaret edin <strong>Sistem Ayarları → Ses → Kulaklık Güvenliği</strong>. "Gürültülü Sesi Azalt" etkinse, devre dışı bırakın veya eşiği yükseltin. Bu, Bluetooth kulaklıkların Mac telefondan daha sessiz olmasının bir numaralı nedeni.</p>

<h2>2. Bluetooth kodek uyumsuzluğu</h2>

<p>Telefonunuz, kulaklıklarınıza daha yüksek kaliteli bir kodek (aptX, LDAC, AAC) ile bağlanırken Mac varsayılan olarak SBC'ye (temel Bluetooth kodek) gidebilir. Farklı kodeklerin farklı maksimum ses kalitesi özellikleri vardır.</p>

<p>macOS genellikle Apple cihazları için AAC, üçüncü parti kulaklıklar için SBC kullanır. Kulaklıklarınız aptX veya LDAC destekliyorsa, macOS onları kullanmaz — Apple sadece AAC ve SBC destekliyor.</p>

<p><strong>Düzeltme:</strong> macOS kodek seçimi konusunda pek bir şey yapamazsınız. Ama bunu bilmek nedenini açıklıyor ki, aynı kulaklıklar Mac LDAC kullanan Android telefonlardan farklı (ve potansiyel olarak daha sessiz) ses verebilir.</p>

<h2>3. Mikrofon aktivasyonu SCO'yu tetikler</h2>

<p>Herhangi bir uygulama Bluetooth kulaklığınızın mikrofonunu (Zoom, FaceTime, Siri, dikte) etkinleştirdiğinde, macOS AAC'den SCO kodekine geçer. SCO 2004 yılında telefon görüşmeleri için tasarlandı — sesi berbat ve çok daha sessiz.</p>

<p><strong>Düzeltme:</strong> Ayrı bir mikrofon (dahili Mac mikrofon veya USB mikrofon) kullanın ve Bluetooth kulaklıklarınızı sadece çıkış olarak kalın. Arama uygulamanızın ayarlarında, girişi Mac mikrofonunuza, çıkışı ise kulaklığınıza ayarlayın. Bu, SCO anahtarını engeller.</p>

<h2>4. Bluetooth ses senkronizasyonu sorunu</h2>

<p>Bluetooth ses sisteminde iki ses kontrolü var: biri Mac tarafında, diğeri kulaklık tarafında. Senkronize kalmaları gerekiyor ama birbirinden ayrılabilirler — Mac %100 gösteriyor ama kulaklıklar aslında tam seste değil.</p>

<p><strong>Düzeltme:</strong> Kulaklıkları (Sistem Ayarları → Bluetooth → "i" → Bağlantıyı Kes) tuşuna tıklayın), 5 saniye bekleyin, tekrar bağlayın. Bu, ses seviyesini yeniden senkronize eder. Bazı kulaklıklarda ayrıca kendi ses düğmeleri var — onları da maksimumda tutmaktan emin olun.</p>

<h2>5. Düşük kaliteli Bluetooth bağlantısı</h2>

<p>Mesafe, parazit (WiFi yönlendiriciler, USB 3.0 cihazları) ve Mac ile kulaklık arasındaki engeller Bluetooth sinyal kalitesini düşürebilir. Sinyal zayıf olduğunda, macOS ses bit hızını düşürebilir ve bu da algılanan ses seviyesini ve kalitesini etkileyebilir.</p>

<p><strong>Düzeltme:</strong> Kendi Mac daha da yaklaş. Kullanmadığınız diğer Bluetooth cihazlarını kesin. USB 3.0 hub'larını Mac uzağa taşıyın (USB 3.0, Bluetooth'un kullandığı 2.4 GHz bandında parazit yaratır).</p>

<h2>6. Kulaklıklar</h2>

<p>Bazı Bluetooth kulaklıklar diğerlerine göre daha düşük maksimum ses seviyesine sahiptir. Daha büyük sürücülü kulak üstü kulaklıklar genellikle kulaklıklardan daha yüksek çıkar. Gürültü engelleyen kulaklıkların firmware'inde ses sınırları olabilir.</p>

<p>Ses sınırlayıcı ayarları için kulaklık üreticisinin uygulamasına (Sony Headphones Connect, Bose Music, Sennheiser Smart Control vb.) bakın. Bazı kulaklıklarda "güvenli dinleme" modu bulunur ve bu mod sesi sınırlayır.</p>

<h2>Hâlâ sessiz misin? %100'ün üzerine boost</h2>

<p>Yukarıdaki her şeyi kontrol ettiyseniz ve kulaklıklarınız Mac hala çok sessizse, ses yükseltmesine ihtiyacınız var.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> herhangi bir uygulamanın sesini şu ana kadar artırır <strong>200%</strong>. Bluetooth kulaklığınızdan Spotify çok sessizse, kaydırıcıyı %160'a sürükleyin. Ses sinyali, kulaklıklarınıza ulaşmadan önce güçlendirilir ve bu da uygulamanın mevcut sesini iki katına çıkarır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial uygulama başına kaydırmalarla Bluetooth kulaklıklar için uygulama sesini %200'e çıkarmak Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Uygulama başına yükseltme, sistem çapında ses yükseltmesinden daha iyidir çünkü sadece sessiz uygulamayı güçlendirebilirsiniz. Podcastiniz sessiz ama müzik iyiyse, podcast uygulamasını %170'e çıkarırken Spotify'ı %80'te tutun. Her uygulama doğru seviyede kalıyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac OBS ve Yayın İçin Ses: İzleyicinizin Ne Duyduğunu Nasıl Kontrol Edebilirsiniz",
    description:
      "OBS ile Mac üzerinden yayın yapmak mı? İzleyicileriniz her şeyi aynı sesle duyar — oyun, müzik, uyarılar, Discord. İşte ses kaynaklarını doğru şekilde nasıl dengelediğiniz.",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>OBS ile Mac üzerinden yayımlıyorsun. Oyun sesi çok yüksek. Discord aramanız çalışıyor. Spotify arka plan müziği çalıyor. Birisi abone olduğunda uyarı sesi ateş çıkarır. İzleyicileriniz tüm bunları aynı sesle duyuyor — Discord çağrılarının patlamalarla yarıştığı ve müziğin yorumlarınızı bastırdığı kaotik bir karmaşa.</p>

<p>Temel sorun: macOS size bir ses çıkışı veriyor ve OBS bunu tek bir birleşik akış olarak yakalıyor. OBS'ye "oyunu %40, Discord %80 ve Spotify %20 ile yakalar" diyemezsiniz çünkü macOS bunları ayırmaz.</p>

<h2>Mac akış ses sorunu</h2>

<p>Windows'ta OBS, bireysel uygulama sesini doğal olarak yakalayabilir. Her uygulamayı ayrı bir ses kaynağı olarak ekliyorsunuz ve OBS içinde bağımsız olarak karıştırıyorsunuz. Mac bu yerleşik değil. OBS macOS şunları yakalayabilir:</p>

<ul>
  <li><strong>Masaüstü Ses</strong> — Mac üzerinde çalan her şey, tek bir akışta birleştirilmiş</li>
  <li><strong>Mikrofon/Yardımcı</strong> — mikrofon girişiniz</li>
  <li><strong>Uygulama Ses Yakalama (macOS 13+)</strong> — belirli bir uygulamanın sesini yakalamak ama kurulum manuel ve sınırlı</li>
</ul>

<p>Application Audio Capture kaynağı (OBS 30+ ile eklendi) bir uygulamayı izole etmek için çalışır, ancak OBS içinde ayrı seviyelerde beş ses kaynağını yönetmek karmaşıktır ve her uygulama işbirliği yapmaz.</p>

<h2>Daha basit yaklaşım: OBS onları yakalamadan önce seviyeleri kontrol ediyor</h2>

<p>OBS içinde sesi ayırmaya çalışmak yerine, her uygulamanın ses seviyesini kontrol edin <em>Öncesi</em> OBS'nin masaüstü ses yakalama sistemine ulaşıyor. Spotify'ı %20'ye düşürür ve Discord'u sistem seviyesinde %90'a çıkarırsanız, OBS'nin masaüstü ses yakalaması zaten dengelenmiş olan miksleri alır.</p>

<p>İşte tam olarak <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Öyle. Her uygulamayı izleyicilerinizin duymasını istediğiniz seviyeye ayarlayın:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial OBS üzerinden yayın yapmak için oyun, Discord ve müzik ses seviyelerini dengelemek Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tipik akış ses sistemi</h3>
<ul>
  <li><strong>Maç:</strong> %50 — mevcut ama sesini bastırmıyor</li>
  <li><strong>Discord / sesli sohbet:</strong> %80 — ekibinizden çağrıları temizleyin</li>
  <li><strong>Spotify / müzik:</strong> %15 — ince arka plan havası</li>
  <li><strong>Yayın uyarıları (tarayıcı):</strong> %40 — duyulur ama sarsıcı değil</li>
  <li><strong>Slack / bildirimler:</strong> sessiz — izleyicilerin DM'lerinizi duymasına gerek yok</li>
</ul>

<h3>Bunu "Streaming" profili olarak kaydet</h3>
<p>Bu yapılandırmayı SoundDial'de bir ses profili olarak kaydedin. Canlı yayına geçmeden önce, tek tıklamayla "Streaming" profilini uygulayın. Her uygulama yayın için optimize edilmiş seviyeye atlıyor. Yayın yapmayı bitirdikten sonra tekrar "Normal" veya "Oyun" profiline geç.</p>

<h2>Duyduklarınız ile izleyicilerin duydukları</h2>

<p>Sistem seviyesinde uygulama başına ses seviyesini SoundDial ayarladığınızda, hem siz hem de izleyicileriniz aynı dengeli miksi duyarsınız. Bu, ayrı miksleri (biri sizin için, biri akış için) sürdürmeye çalışmaktan daha basit — ki bu sanal ses cihazları ve Mac üzerinde kırılgan karmaşık yönlendirme gerektirir.</p>

<p>Yayınınız için tamamen ayrı bir miks gerekiyorsa (örneğin, Discord'u izleyicilerden daha yüksek duymak istiyorsanız), sanal ses cihazlarıyla daha karmaşık bir yönlendirme kurulumuna ihtiyacınız olacak. Ancak çoğu yayıncı için, menü çubuğundan kolayca kontrol edilen tek bir dengeli karışım tam da ihtiyaç duyulan şey.</p>

<h2>Neden uygulama başına kontrol sadece OBS ile miksajdan daha iyidir</h2>

<ul>
  <li><strong>Anında ayarlamalar:</strong> Yayın ortasında, bir izleyici oyunun çok yüksek olduğunu söylüyor. Menü çubuğuna tıklayın, bir kaydırıcıyı sürükleyin. Bitti. Duraklatma yok, OBS ayarlarını açmak yok.</li>
  <li><strong>OBS dışındaki çalışmalar:</strong> Dengeli ses kurulumunuz, yayın yapmadığınız zamanlarda bile çalışıyor. Aynı profiller, aynı kolaylık.</li>
  <li><strong>Sanal ses cihazı yok:</strong> SoundDial, Apple'ın yerel Audio Tap API'sini kullanıyor — ne Soundflower, ne BlackHole, ne macOS güncellemelerinde arızalanan sürücü yok.</li>
</ul>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple incelemesi, 14,99 € tek seferlik satın alma, abonelik yok macOS 14,2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Uygulama Başına Ses Seviyesini Mac Hatırlamanızı Nasıl Sağlarsınız",
    description:
      "Spotify'ı yeniden başlattığınızda veya Zoom'u her kez başlattığınızda, sesi yeniden ayarlamanız gerekiyor. Her uygulamanın ses seviyesini otomatik olarak hatırlamamı sağlayan macOS şunlar şunlar.",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>Ses seviyelerinizi mükemmel hale getirmek için beş dakika harcıyorsunuz. Spotify %30, Zoom %100, Slack %15. Sonra Mac yeniden başlatıyorsunuz. Ya da Slack çöküp yeniden başlatılır. Ya da Spotify'ı kapatıp sonra tekrar açarsınız. Her uygulama varsayılan ses seviyesine sıfırlanıyor. Her şeyi yeniden ayarlıyorsun. Yine.</p>

<p>macOS, yeniden başlatmalar arasında sistem hacmasını hatırlıyor. Ama uygulama başına ses seviyesini hatırlamıyor — çünkü macOS zaten uygulama başına ses kontrolüne sahip değil. Hatırlanacak bir şey yok.</p>

<h2>Neden uygulamalar kendi hacimlerini hatırlamıyor</h2>

<p>Bazı uygulamalarda (örneğin Spotify ve VLC) oturumlar arasında kaydedilen dahili ses kaydırıcıları var. Ancak çoğu uygulamanın — tarayıcılar, iletişim araçları, sistem araçları — kendi ses kontrolüne sahip değil. Ve dahili ses kaydeden uygulamalar bile sadece kendi kaydırıcı konumlarını hatırlıyor, diğer uygulamalara göre ses seviyesini değil.</p>

<p>Asıl istediğin şey <em>Sistem</em> hatırlamak gerekirse: "Spotify her zaman sistem sesinin %30'unda olmalı." macOS bu kavramı desteklemiyor.</p>

<h2>Ses belleği SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> şu özelliği sunar: <strong>Hacim Belleği</strong> özellik. Etkinleştirildiğinde, her uygulamanın ses seviyesini bundle tanımlayıcısına göre kaydeder. Uygulama kapanıp yeniden başlatıldığında — ister yeniden başlatsanız çöksün ister Mac yeniden başlatsanız — SoundDial otomatik olarak kaydedilen hacme geri döner.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial ses belleği — uygulama başına ses seviyelerini otomatik olarak hatırlar ve geri getirir macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nasıl çalışır</h3>
<ol>
  <li>SoundDial'nin ayarlarında "Uygulama başına ses hatırla" seçeneğini etkinleştirin</li>
  <li>Her uygulamayı tercih ettiğiniz ses seviyesine ayarlayın</li>
  <li>SoundDial seviyeyi otomatik olarak kaydeder</li>
  <li>Uygulama yeniden başlatıldığında, ses tam olarak eskisi haline geri döner</li>
</ol>

<p>Manuel kayıt yok. Yeniden ayarlama yok. Ses seviyelerini ilk kez ayarladığınızda son kez olur.</p>

<h3>Ne hatırlanır</h3>
<ul>
  <li><strong>Ses seviyesi</strong> — tam yüzde (%0'dan %200'e)</li>
  <li><strong>Mute durum</strong> — bir uygulamayı sessiz bıraktıysanız, yeniden başlatıldığında sessiz kalır</li>
  <li><strong>Uygulama başına</strong> — her uygulamanın hacmi bundle ID'ye göre bağımsız olarak saklanır</li>
</ul>

<h3>Yeni uygulamalar varsayılan ses seviyesi kazanıyor</h3>
<p>Bir uygulama ilk kez (daha önce görmediğim bir SoundDial açıldığında), ayarlanabilir bir varsayılan ses seviyesi kazanıyor. SoundDial'nin ayarlarında bu varsayılanı ayarlayabilirsiniz — böylece yeni uygulamalar %80'den (ya da istediğiniz gibi) başlıyor, potansiyel olarak %100'de patlamak yerine.</p>

<h2>Volume bellek + profiller = kur ve unut</h2>

<p>Hacim belleği günlük işleri yönetir: uygulamalar yeniden başlatma sırasında seviyelerini korur. Profiller duruma bağlı geçiş yapar: "Toplantı" modu, "Odaklan" modu, "Oyun" modu — tek tıklamayla uygularsanız her uygulama o duruma uygun seviyeye geçer.</p>

<p>Birlikte, ses kaydırıcısını neredeyse hiç manuel olarak ayarlamazsınız. Uygulama son seviyesini hatırlar ve bağlam değiştirdiğinizde, bir profil her şeyi aynı anda ayarlar.</p>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple incelemesi, 14,99 € tek seferlik satın alma, abonelik yok macOS 14,2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Podcast Ses Çok Düşük Mac? Nasıl Daha Yüksek Hale Getirilir",
    description:
      "Bazı podcastler maksimum sesle bile Mac fısıltı gibi sessiz. İşte nedeni — ve podcast sesini diğer uygulamaları etkilemeden %100'ün üzerine nasıl yükseltildiği.",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>Podcast dinliyorsunuz Mac. Sunucu iyi ses çıkarıyor, ama konuk — mutfakta dizüstü bilgisayar mikrofonundan kayıt yapan — neredeyse duyulmaz. Sesi %100'e çıkarıyorsunuz. Ev sahibi artık çok gürültülü ama misafir hâlâ sessiz. Kazanmanın bir yolu yok çünkü sorun kayıtta değil, Mac.</p>

<p>Podcast ses kalitesi çok değişken. Profesyonel programlar tutarlı seviyelerde ustalaşır. Ancak röportajlar, bağımsız podcastler ve canlı kayıtlarda genellikle konuklar -20 dB veya daha düşük seviyede olur — sunucudan veya giriş müziğinden çok daha sessiz.</p>

<h2>Bazı podcastler neden bu kadar sessiz oluyor</h2>

<ul>
  <li><strong>Konuk mikrofon kalitesi:</strong> Bir sunucu profesyonel bir kuruluma sahip, misafir AirPods'ta. Seviye farkı 15+ dB olabilir.</li>
  <li><strong>Post-prodüksiyon yok:</strong> Profesyonel olarak üretilen podcast'ler seviyeleri sıkıştırır ve normalleştirir. Birçoğu ise yapmıyor.</li>
  <li><strong>Podcast uygulamaları normalleşmez:</strong> Apple Podcast ve Spotify, podcast içeriğine (müzikten farklı olarak) minimum veya hiç ses normalizasyonu uygular.</li>
  <li><strong>Dinamik aralık:</strong> Bazı podcast yapımcıları, "doğal" ses için kasıtlı olarak yüksek dinamik aralığı koruyor — bu da sessiz kısımların çok sessiz olduğu anlamına gelir.</li>
</ul>

<h2>Uygulama içi düzeltmeler</h2>

<h3>Apple Podcast'leri</h3>
<p>Apple Podcasts'te ses normalizasyonu veya boost özelliği yok. Podcast ne sunuyorsa, o da senin aldığın şeydir. Eski sürümlerdeki uygulama içi ses kontrolü kaldırıldı — artık sadece sistem sesini kullanıyor.</p>

<h3>Spotify</h3>
<p>Spotify'ın "Ses Seviyesini Normalize Et" (Ayarlar → Oynatma) ayarı farklı podcastler arasında ses tutarlılığını sağlamaya yardımcı olabilir, ancak bölüm içi dinamiklere etkisi sınırlıdır. Maksimum normalleşme için "Yüksek" olarak ayarlamayı deneyin.</p>

<h3>Overcast (tarayıcı)</h3>
<p>Overcast (web üzerinden overcast.fm) kullanırsanız, podcast sesini önemli ölçüde güçlendiren ve sıkışan "Voice Boost" özelliği var, böylece sessiz sesler daha yüksek hale gelir. Bu en iyi yerleşik çözümlerden biri — ancak sadece Overcast içinde çalışıyor.</p>

<h2>Sistem düzeyinde çözüm: podcast uygulamalarını %100'ün üzerine yükseltin</h2>

<p>Evrensel çözüm, podcast uygulamanızı macOS'ın %100 sınırının ötesine genişletmektir. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> her uygulamaya bir ses kaydırıcısı veriyor <strong>200%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial sessiz podcast bölümleri için Mac Apple Podcasts sesini %180'e çıkarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Apple Podcasts veya podcast uygulamanızı %160-180 olarak ayarlayın, Spotify müziğini %40, Slack'i %15'te tutun. Podcast, diğer her şeyi acı verici derecede yüksek yapmadan daha yüksek sesle konuşuyor. Müziğe geri döndüğünüzde, podcast uygulamasını normale geri bırakın — ya da SoundDial'ın ses hafızasının otomatik olarak hatırlamasına izin verin.</p>

<p>Bu uygulama başına yaklaşım, sistem genelinde ses seviyesi artışından daha iyidir çünkü:</p>
<ul>
  <li>Sadece sessiz podcast uygulaması daha yüksek sesle konuşuyor</li>
  <li>Müzik tercih ettiğiniz seviyede kalır.</li>
  <li>Çağrı sesi tercih ettiğiniz seviyede kalır.</li>
  <li>Bildirim sesleri aniden kulakları sağır edici hale gelmez</li>
</ul>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple incelemesi, 14,99 € tek seferlik satın alma, abonelik yok macOS 14,2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Mac Çevrimiçi Dersler ve Dersler İçin Ses Kurulumu",
    description:
      "Not alırken ders izlemek, Google'da referanslar ararmak ve sınıf arkadaşlarıyla sohbet etmek — hepsi farklı seslerde. İşte Mac'de öğrenci seslerini nasıl yöneteceğiniz.",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>Zoom'da çevrimiçi bir derse katılan bir öğrencisiniz. Referans olarak başka bir sekmede açık bir YouTube eğitiminiz var. Sınıf arkadaşların Discord'da sohbet ediyor. Spotify arka planda lo-fi ritmler çalıyor. Mac bunların hepsini tek bir cilt gibi ele alıyor. Düşük sesleri azaltırsan profesörünü duyamazsın. Dersi açtığınızda Discord işaretleri konsantrasyonunuz bozuyor.</p>

<p>macOS her şey için bir ses kaydırıcısı var. Birden fazla ses kaynağını dengeleyen öğrenciler için bu sürekli bir sürtüşme noktasıdır.</p>

<h2>Tipik öğrenci ses yığını</h2>

<ul>
  <li><strong>Konferans platformu</strong> (Zoom, Teams, Google Meet, Webex) — kristal net olmalı, her zaman duyulabilir olmalı</li>
  <li><strong>Referans materyali</strong> (YouTube eğitimleri, kayıtlı dersler) — orta ses, duraklatılı/ayarlanabilir olmalı</li>
  <li><strong>Müzik eğitimi</strong> (Spotify, Apple Music) — düşük arka plan seviyesi, dersle rekabet etmemeli</li>
  <li><strong>Sohbet</strong> (Discord, iMessage, Slack) — ince bildirim sesleri, rahatsız edici değil</li>
  <li><strong>Tarayıcı sekmeleri</strong> — ara sıra otomatik oynatılan ve anında susturulması gereken içerikler</li>
</ul>

<h2>macOS sınırlaması</h2>

<p>Tek bir sistem hacmiyle taviz vermek zorunda kalırsınız. Sessiz bir profesörün mikrofonu için yeterince yüksek ayarla, Spotify çok yüksek oluyor. Rahat müzik için ayarlayın, ders duyulmaz olur. Spotify'ı sessize aldığınızda arka plan müziğinin odaklanma faydasını kaybedersiniz. Her uygulama aynı seviyeye kilitlendiği için rahat bir denge yok.</p>

<h2>Çalışma için uygulama başına ses kurulumu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Her uygulamaya kendi ses kaydırıcısı veriyor, böylece ideal çalışma sesi kurulumunu oluşturabilirsiniz:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial öğrenci kurulumu — ders tam sesle, müzik çalışması alçak, bildirimler sessiz" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ders profili</h3>
<ul>
  <li><strong>Zoom / Takımlar / Buluşma:</strong> %100 — hiçbir kelimeyi kaçırma</li>
  <li><strong>Spotify:</strong> %15 — neredeyse hiç yok olmayan arka plan atmosferi</li>
  <li><strong>Discord:</strong> %10 — sadece ince bildirimler</li>
  <li><strong>Tarayıcı:</strong> %40 — gerektiğinde referans videolar için</li>
  <li><strong>iMessage:</strong> Sessiz — dersler arasında kontrol</li>
</ul>

<h3>Kendi kendine çalışma profili</h3>
<ul>
  <li><strong>Spotify:</strong> %50 — müzik çalışmalarını motive etmek</li>
  <li><strong>Tarayıcı:</strong> %70 — eğitim videoları net seviyede</li>
  <li><strong>Discord:</strong> %20 — çalışma grubu için mevcut</li>
  <li><strong>Diğer her şey:</strong> Kısılmış</li>
</ul>

<h3>Break profili</h3>
<ul>
  <li><strong>Her şey:</strong> %60-80 — dersler arasında rahatlamak</li>
</ul>

<p>Her birini ses profili olarak kaydedin ve gün ilerledikçe tek tıklamayla aralarında geçiş yapın. Ders başladığında "Ders" uygula — otomatik eğilme geri kalanını halleder ve profesör mikrofonunuzdan konuşurken müziğinizi otomatik olarak azaltır.</p>

<h2>Bunun odak için neden önemli olması</h2>

<p>Araştırmalar, doğru ses ortamına sahip olmanın konsantrasyon ve kalıcılığı iyileştirdiğini sürekli olarak gösteriyor. Yanlış karışım — müzik çok yüksek, bildirimler çok sık, ders çok sessiz — çalıştığınız materyalle hiçbir ilgisi olmayan bilişsel yük yaratır. Sesi bir kez doğru ayarlamak, profil olarak kaydetmek ve bir daha asla düşünmemek, sürekli bir dikkat dağıtıcı kaynağı ortadan kaldırıyor.</p>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple incelemesi, 14,99 € tek seferlik satın alma, abonelik yok macOS 14,2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Mac Güncellemeden Sonra Çalışmayan Ses mi? Tam Düzeltme Rehberi",
    description:
      "macOS güncelledin, şimdi sesin kayboldu, çatırdatıyor ya da yanlış ses seviyesinde takılı kaldı. İşte Mac sesinizi tekrar çalıştırmak için her çözüm.",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>macOS güncelleme yaptın. Her şey yolundaydı — ta ki ses olmadığını fark edene kadar. Ya da ses çatırdıyor. Ya da ses takılıyor. Ya da ses çıkış cihazınız kaybolmuş olabilir. Güncelleme sonrası ses sorunları neredeyse her macOS sürümünde oluyor ve bunlar hafif sinir bozucudan tamamen sessizliğe kadar değişiyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>İşte macOS güncellemesinden sonra Mac sesi düzeltmek için sistematik bir rehber, bilinen tüm sorunları ve çözümleri kapsayan.</p>

<h2>Adım 1: Bariz olanı kontrol et</h2>

<h3>Sessiz mi?</h3>
<p>Ses yükseltme tuşuna basın. Ekranda ses seviyesi göstergesinin görünüp görünmediğini kontrol et. Bazen güncellemeler sistem sesini sıfıra sıfırlıyor veya sessizliği etkinleştiriyor.</p>

<h3>Doğru çıkış cihazı seçildi mi?</h3>
<p>Sistem ayarlarına gidin → ses → çıkışa gidin. Güncellemeden sonra bazen macOS beklenmedik bir çıkış cihazına geçiyor — bağlı monitörün hoparlörleri, bağlı olmayan Bluetooth cihazı veya harici hoparlörler istediğinizde dahili hoparlörler. Doğru cihazı seçin.</p>

<h3>Kulaklık Güvenliği ses seviyesini mi sınırlıyor?</h3>
<p>Güncellemeler bazen kulaklık güvenliğini varsayılan (etkinleştirilmiş) konumuna sıfırlıyor. Sistem ayarları, Ses → Kulaklık Güvenliği → kontrol edin ve güncelleme tarafından açılmışsa "Yüksek Sesli Azalt" seçeneğini devre dışı bırakın.</p>

<h2>Adım 2: Core Audio'yu Yeniden Başlatın</h2>

<p>Ses daemonu (coreaudiod) genellikle güncellemeden sonra kötü bir duruma girer. Yeniden başlatmak en etkili çözümdür.</p>

<p>Terminali aç ve çalıştır:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Ses kısa bir süreliğine kesiliyor ve yeniden başlatıyor. Sesin şimdi çalışıp çalışmadığını test et. Eğer bu sorunu çözerse, sorun güncellemelerden sonra yaygın olan bayat bir ses daemon durumuydu.</p>

<h2>Adım 3: NVRAM/PRAM'ı sıfırlayın</h2>

<p>Intel Mac'ler için: tamamen kapatın, sonra basılı tutarken açın <strong>Seçenek + Komut + P + R</strong> yaklaşık 20 saniye boyunca. Bu, ses seviyesi ayarlarını, başlatma diski seçimini ve diğer düşük seviyeli tercihleri kaydeden NVRAM'ı sıfırlar.</p>

<p>Apple Silicon Mac'ler (M1/M2/M3/M4) için: NVRAM gerektiğinde otomatik olarak sıfırlanır. Tam bir yeniden başlatma (sadece uyku/uyanık olmak değil) genellikle yeterlidir.</p>

<h2>Adım 4: Üçüncü taraf ses sürücüsü çakışmalarını kontrol edin</h2>

<p>macOS güncellemeler sık sık üçüncü taraf ses sürücülerini ve çekirdek uzantılarını bozuyor. Bunlardan herhangi biri kuruluysa, sorunun nedeni olabilir:</p>

<ul>
  <li><strong>Soundflower</strong> — üretimi durdurulmuş, çoğu zaman yeni macOS ile çelişiyor</li>
  <li><strong>BlackHole</strong> — sanal ses cihazı, macOS güncellemelerden sonra güncellenmesi gerekebilir</li>
  <li><strong>Döngü</strong> — güncellenmiş versiyon için yeni bir sürüm gerekebilir macOS</li>
  <li><strong>Arka Plan Müziği</strong> — güncellemelerde sık sık arızalanan sanal bir ses cihazı kurulur</li>
  <li><strong>Ses arayüzü sürücüleri</strong> — Focusrite, Universal Audio vb. güncellenmiş sürücüleri kontrol edin</li>
</ul>

<p><strong>Düzeltme:</strong> Çelişen yazılımı kaldırın veya güncelleyin. Sanal ses cihazları için, uygulama tarafından yüklenen ses cihazının Sistem Ayarları → Ses → Çıkış'ta göründüğünü kontrol edin — eğer görünüyorsa ve seçilmişse, gerçek hoparlörlere geçin. Sonra üçüncü taraf uygulamasını güncelleyin veya kaldırın.</p>

<h2>Adım 5: Güvenli Mod açılışı</h2>

<p>Sorunun bir başlatma öğesi mi yoksa üçüncü taraf uzantı mı kaynaklandığını belirlemek için Güvenli Mod'a açılın:</p>

<ul>
  <li><strong>Apple Silicon:</strong> Kapat → güç düğmesini basılı tutarak "Başlatma seçeneklerini yüklüyor" (Başlatma Seçenekleri Yükleniyor) görünene kadar → başlatma diskinizi seçin → Shift tuşuna basılı tutun → "Güvenli Modda Devam Et" seçeneğine tıklayın.</li>
  <li><strong>İstihbarat:</strong> Yeniden başlatın → açılış sırasında Shift tuşuna basılı tutun, giriş penceresini görene kadar</li>
</ul>

<p>Ses Güvenli Mod'da çalışıyorsa, üçüncü taraf çekirdek uzantısı veya giriş öğesi neden olur. Yakın zamanda kurulan yazılımı araştırın.</p>

<h2>Adım 6: Yeni bir kullanıcı hesabı oluşturun</h2>

<p>Sorun devam ederse, geçici yeni bir kullanıcı hesabı oluşturun (Sistem Ayarları → Kullanıcılar ve Gruplar → Kullanıcı Ekle). Yeni hesaba giriş yapın ve ses testi yapın. Yeni hesapta ses çalışıyorsa, sorun kullanıcı profilinizde — bozuk bir tercih dosyası veya ses konfigürasyonu.</p>

<h2>Gelecekte sorunların önlenmesi SoundDial</h2>

<p>Bir avantaj <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Diğer ses araçlarına göre: sistem ses sürücüsü yüklemez. Apple'ın yerel Core Audio Tap API'sini kullanıyor, yani sanal ses cihazı uygulamalarında yaşanan çatışmalar olmadan macOS güncellemelerle temiz çalışıyor.</p>

<p>Background Music veya Soundflower kullanıyorsanız ve güncellemeden sonra bozulduysa, SoundDial aynı sorunu yaşamayacak bir yedek cihazdır. Uygulama başına ses kontrolü, %200'e yükseltme, profiller, otomatik düşük — tüm bunlar çekirdek uzantısı veya sanal ses cihazı olmadan.</p>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple incelemesi, 14,99 € tek seferlik satın alma, abonelik yok macOS 14,2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Mac'de tüm uygulamaları aynı anda nasıl sessiz bırakılır (ve mükemmel şekilde açılır)",
    description:
      "Anında sessizliğe mi ihtiyacınız var? Mute tuşu her şeyi susturuyor — ama sesi açmak dikkatlice dengelenmiş ses seviyelerinizi sıfırlıyor. İşte Mac üzerinde susturup geri yüklemenin daha iyi bir yolu.",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>Birisi odaya giriyor. Patronunuz beklenmedik şekilde arıyor. Bir istemci bir aramada ekranını paylaşır ve müziğiniz hoparlörlerinden çalınmaya başlar. Anında sessizliğe ihtiyacın var. Şu anda.</p>

<p>Sessiz tuşuna bastın. Her şey sessizleşiyor. Kriz önlendi.</p>

<p>Sonra o an geçer. Tekrar sessiz tuşuna bastın. Her şey geri geliyor — ama sistem ses seviyesinde, ki Spotify'ın %30, Zoom'un %100 ve Slack %15'te olduğunu hatırlamıyor. O bireysel seviyeler mi? Gitti. Her şeyi manuel olarak yeniden ayarlamanız gerekiyor.</p>

<h2>Sistem sessiz tuşu: küt enstrüman.</h2>

<p>Mac'nin susturma tuşu (F10 veya hoparlör-slash tuşu) <strong>sistem ses çıkışı</strong>. Her uygulama aynı anda sessiz kalıyor. Sessizliği kaldırmak sistem sesini eskisine geri getirir — ancak macOS sadece bir ses kaydırıcısı olduğu için, uygulama başına hatırlanacak veya geri getirilecek seviyeler yok.</p>

<p>Aynı anda sadece bir uygulama kullanırsanız sorun değil. Altı farklı seviyede dikkatlice dengelenmiş uygulamalar varsa ve hepsini susturup geri yüklemek zorunda kalıyorsan, bu bir sorundur.</p>

<h2>Daha akıllı bir sessiz: uygulama başına hepsini sessiz et</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> "Mute All" klavye kısayolu vardır: <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Tuşuna bastığınızda:</p>
<ol>
  <li>Her uygulama ayrı ayrı sessiz bırakılır (her uygulamanın ses seviyesi kaydedilir)</li>
  <li>Anında sessizlik — tıpkı sessiz tuşlu gibi</li>
</ol>

<p>Tekrar bastığınızda:</p>
<ol>
  <li>Her uygulama sessizce değil</li>
  <li>Her uygulama şu adrese geri döner: <strong>Tam olarak</strong> Sessizleştirmeden önceki ses seviyesi</li>
  <li>Spotify %30'a, Zoom'u %100'e, Slack %15'e geri getirdi — mükemmel şekilde restore edildi</li>
</ol>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial sessiz kısayolu — Kontrol + Seçenek+M ile tüm uygulamaları ses geri yükleme ile susturup kaldırın" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Sistem susturma anahtarından farkı:</p>
<ul>
  <li><strong>Sistem sessizliği:</strong> Çıkışı susturur → untute, bir sistem hacmini geri getirir → uygulama başına denge yoktur</li>
  <li><strong>SoundDial Hepsini susturun:</strong> Her uygulamayı ayrı ayrı susturur → sesi açıyor, her uygulamanın bireysel hacmini geri kazanır → bakiyeniz korunur</li>
</ul>

<h2>Bu önemli olduğunda</h2>

<ul>
  <li><strong>Ekran paylaşımı:</strong> Ekranınızı paylaşıyorsunuz ve diğer kişi müziğinizi duymadan önce Mac sesinizi kapatmanız gerekiyor. ⌃⌥M → sessizlik → işini yap → ⌃⌥M → müzik tam doğru seviyeye döndü.</li>
  <li><strong>Beklenmedik bir kesinti:</strong> Biri içeri girdiğinde, hemen sessizliğe ihtiyacınız var. Bir kestirme, fare yok, menü çubuğuna uğraşmak yok.</li>
  <li><strong>Hızlı bir telefon:</strong> Masa telefonun çalıyor. Mac sustur, aramayı kabul et, bitince sessizliği aç. Her şey geri geliyor.</li>
</ul>

<p>Ayrıca <strong>⌃⌥S</strong> Kısayol (SoundDial's popover'ı aç), tüm sesi tamamen klavyeden yönetebilirsiniz — mikseri açın, seviyeleri ayarlayın, kapatın ve fareyi dokunmadan her şeyi sessiz/kapatın.</p>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Google Meet'in Ses Seviyesi Mac Çok Düşük Mü? Bunu Nasıl Düzeltebilirim",
    description:
      "Google Meet'teki sesler maksimum seste bile zar zor duyuluyor. İşte Meet'in neden Chrome üzerinden çalıştığı, bunun ses için ne anlama geldiği ve nasıl güçlendirileceği.",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meet'in yerel bir Mac uygulaması yok — tarayıcınız içinde çalışıyor. Bu, Meet'in seslerinin Chrome (veya Safari'nin) ses akışının bir parçası olduğu ve ses seviyesi sorunlarının tarayıcınızın sesi nasıl işlediğiyle karmaşık olduğu anlamına gelir. Hadi çözelim.</p>

<h2>1. Meet'in kendi ses ayarlarını kontrol edin</h2>

<p>Bir Buluşma görüşmesi sırasında, Ayarlar → Ses → üç nokta menüsüne (⋮) tıklayın. Doğru hoparlör cihazının seçildiğinden emin olun. Meet bazen varsayılan olarak beklenmedik bir cihaza yönelir, özellikle yakın zamanda ses donanımını bağladıysanız veya çıkardıysanız.</p>

<h2>2. Tarayıcınızın sekme hacmine bakın</h2>

<p>Chrome'da: Meet sekmesine sağ tıklayın → "Siteyi sessiz et" seçeneğinin seçilmediğinden emin olun. Susturulmuş bir site, diğer ayarlardan bağımsız olarak ses üretmez.</p>

<p>Safari'de: sekmedeki hoparlör simgesine tıklayarak sessizleştirilmediğinden emin olun.</p>

<h2>3. Sistem çıkışını kontrol edin</h2>

<p>Sistem ayarları → ses → çıkış. Doğru cihazın seçildiğini ve sesin maksimumda olduğunu doğrulayın. Ayrıca kulaklık kullanıyorsanız Kulaklık Güvenliği'ni kontrol edin.</p>

<h2>4. Chrome ses sorunu</h2>

<p>Google Meet, Chrome sekmesi olarak çalışıyor ve Chrome'un ses çıkışı özel uygulamalardan daha düşük olabiliyor. Chrome, kendi render cihazıyla sesi işliyor ve bu cihazın kendi ses seviyesi tavnı var. Chrome'un genel sesi düşükse, Meet düşük — hatta macOS ses seviyesi %100 olsa bile.</p>

<p>Chrome'un sesini maksimumun ötesine çıkarmanın yerleşik bir yolu yok. macOS, Chrome'u tek bir ses seviyesine sahip tek bir uygulama gibi ele alıyor ve bu seviye %100'e ulaşıyor.</p>

<h2>5. Bluetooth kodek sorunu</h2>

<p>AirPods veya Bluetooth kulaklık kullanıyorsanız, Google Meet'in mikrofonunuzu etkinleştirmesiyle Bluetooth codec'i AAC'den SCO'ya geçiş yapmasını zorlar. Bu durum ses kalitesini ve ses seviyesini önemli ölçüde düşürür.</p>

<p><strong>Düzeltme:</strong> Meet'in ses ayarlarında, giriş cihazı olarak Mac dahili mikrofonunu seçerek çıkış olarak Bluetooth kulaklıkları kalın. Bu, codec anahtarını engeller ve yüksek kaliteli ses korunur.</p>

<h2>6. Google Meet'i (Chrome) %100'ün üzerine çıkar</h2>

<p>Her şeyi kontrol ettikten sonra Meet hâlâ çok sessizse, Chrome'un sesini izin verdiği kadar yükseltmeniz gerekiyor macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Chrome'a kendi ses kaydırıcısını verir ve bu kaydırıcı <strong>200%</strong>. Google Meet, Chrome içinde çalıştığı için, Chrome'u yükseltmek Meet'i güçlendiriyor. Kaydırıcıyı %150 veya %180'e sürüklerseniz, çağrı sesi gerçek zamanlı olarak güçlendirilir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Google Meet (Chrome) sesini %100'ün üzerine çıkarmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bu, Safari'de Meet kullanıyorsanız Safari'de de çalışır. SoundDial her tarayıcıyı bağımsız olarak kontrol ediyor — Safari'yi Meet için güçlendirirken diğer her şey için Chrome'u normal ses seviyesinde tutuyor.</p>

<p>Otomatik eğilme ile, arka plan müziğiniz Meet görüşmesi başladığında (mikrofonunuz aktive olduğunda) otomatik olarak azalır ve arama bittiğinde geri döner.</p>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple incelemesi, 14,99 € tek seferlik satın alma, abonelik yok macOS 14,2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Medya Sesinden Ayrı Mac Uyarı Sesi Nasıl Ayarlanır",
    description:
      "macOS gizli bir uyarı ses kaydırıcısı var ama sadece sistem seslerini kapsar. İşte bildirim ve medya sesini gerçekten ayırmak Mac.",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>Müziğin mükemmel bir seviyede. Sonra macOS bir uyarı sesi çıkar — "Funk" veya "Tink" ses efekti — ve müziğinizle karşılaştırıldığında acı verici derecede yüksek olur. Ya da tam tersi: uyarılarınız duyulmaz çünkü sisteminizin sesi düşük ve sessiz arka plan müziği olur.</p>

<p>İki ayrı ses kontrolü istersiniz: biri medya (müzik, arama, video) için, diğeri ise uyarılar ve bildirimler için. macOS kısmen bunu destekliyor, ancak tam çözüm üçüncü taraf bir araç gerektiriyor.</p>

<h2>macOS yerleşik uyarı sesi</h2>

<p>macOS ayrı bir uyarı sesi var. Ziyaret edin <strong>Sistem Ayarları → Ses</strong> ve <strong>"Uyarı sesi"</strong> Slider. Bu, macOS sistem seslerinin — hata bip sesleri, çöp boşaltma, ekran görüntüsü deklanşörünün — sesini ana sistem sesinden bağımsız olarak kontrol eder.</p>

<p>Ayrıca hangi uyarı sesini kullanacağınızı ve seçtiğiniz çıkış cihazınız veya dahili hoparlörler aracılığıyla "ses efektlerini çalmayı" seçebilirsiniz.</p>

<h3>Uyarı ses seviyesini ne kontrol ediyor?</h3>
<ul>
  <li>macOS sistem uyarı sesleri (Funk, Tink, Bottle vb.)</li>
  <li>Bulucu sesleri (Çöp, dosya kopyası tamamlandı)</li>
  <li>Bazı yerleşik uygulama sesleri</li>
</ul>

<h3>Kontrol edemediği şeyler</h3>
<ul>
  <li>Gevşeklik bildirim sesleri</li>
  <li>Discord bildirim sesleri</li>
  <li>Teams/Zoom sesleri</li>
  <li>Posta bildirim sesleri</li>
  <li>Herhangi bir üçüncü taraf uygulama bildirimi sesi geliyor</li>
  <li>Tarayıcı bildirim sesleri</li>
</ul>

<p>Üçüncü taraf uygulamalar bildirim seslerini kendi ses motorları üzerinden oynatıyor — bunlar sistem uyarıları değil, normal uygulama sesi olarak kabul ediliyor. Uyarı ses kaydırıcısı onları etkilemiyor. Bu da demek oluyor ki, en sinir bozucu bildirim seslerini çıkaran uygulamalar (Slack, Discord, Teams) macOS'in uyarı sesinin dokunamadığı uygulamalar.</p>

<h2>Gerçek çözüm: bildirim uygulamaları için uygulama başına ses seviyesi</h2>

<p>Bildirim sesini medya sesinden gerçekten ayırmak için uygulama başına ses kontrolü gerekir. Slack'i %15, Discord'u %20, Mail'i %10'a ayarla — Spotify'ı %50, tarayıcınızı ise %60'da tutun.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Her uygulamaya kendi ses kaydırıcısı veriyor. Bildirim ağırlıklı uygulamaları belirgin ama rahatsız edici olmayan ince bir seviyeye ayarlayabilir, aynı zamanda medya uygulamalarını rahat bir dinleme seviyesinde tutabilirsiniz.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial bildirim uygulaması sesini medya uygulaması seminden ayırmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Örnek kurulum</h3>
<p><strong>Medya uygulamaları:</strong></p>
<ul>
  <li>Spotify: %50</li>
  <li>Safari/Chrome: %60</li>
  <li>QuickTime/VLC: %70</li>
</ul>

<p><strong>Bildirim uygulamaları:</strong></p>
<ul>
  <li>Slack: %15</li>
  <li>Discord: %20</li>
  <li>Posta: %10</li>
  <li>Takvim: %25</li>
</ul>

<p><strong>İletişim uygulamaları:</strong></p>
<ul>
  <li>Zoom/Teams: %100</li>
  <li>FaceTime: %100</li>
</ul>

<p>Bunu profil olarak kaydedin ve tek tıklamayla uygulayın. Bildirim ve medya sesi arasındaki ayrım macOS yerel olarak sağlanmıyor — bir dakikadan kısa sürede tamamlanıyor.</p>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple incelemesi, 14,99 € tek seferlik satın alma, abonelik yok macOS 14,2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "FaceTime Görüşme Kaydı Çok Düşük Mac? Bunu Nasıl Düzeltebilirim",
    description:
      "FaceTime sesi Mac tam seste bile zar zor duyuluyor. İşte her çözüm — ses ayarlarından FaceTime'ı %100'ün üzerine çıkarmaya kadar.",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>iPhone'unuzda FaceTime aramaları sorun değil. Ama Mac senin, diğer kişi üç oda öteden fısıldayıyormuş gibi geliyor. Ses maksimumda. Aklına gelen her şeyi kontrol ettin. Hâlâ çok sessiz.</p>

<p>Mac FaceTime sesinin düşük olması yaygın bir sorun ve bunun birkaç olası nedeni var. Her birini gözden geçirelim.</p>

<h2>1. Çıkış cihazını kontrol edin</h2>

<p>Sistem ayarlarına gidin → ses → çıkışa gidin. Doğru cihazın seçildiğinden emin olun. Yakın zamanda kulaklık, ekran veya Bluetooth cihazlarını bağladıysanız ya da çıkardıysanız, macOS otomatik olarak beklenmedik bir çıkışa geçmiş olabilir — örneğin, neredeyse hiç işlev görmeyen dahili hoparlörlü bir monitör gibi.</p>

<h2>2. FaceTime'ın ses ayarlarını kontrol edin</h2>

<p>Bir FaceTime görüşmesi sırasında menü çubuğuna tıklayın ve FaceTime → Video'yu kontrol edin → Ses Çıkışı altında doğru çıkış cihazını seçin. FaceTime bazen sistem varsayılan cihazından farklı bir çıkış cihazı kullanabilir, özellikle cihaz geçişinden sonra.</p>

<h2>3. AirPods otomatik geçişini devre dışı bırakın</h2>

<p>AirPods'u birden fazla Apple cihazıyla eşleştiriyorsanız, arama sırasında otomatik olarak Mac cihazınızdan uzaklaşabilirler. Bluetooth → Sistem Ayarlarını kontrol → AirPods'unuzun yanındaki "i" → "Connect to This Mac" → "En Son Bağlandığında Bu Mac" yerine "Otomatik olarak" olarak ayarlanarak arama ortasında geçişi önleyin.</p>

<h2>4. Bluetooth kodek sorunu</h2>

<p>AirPods veya Bluetooth kulaklıkları FaceTime ile kullanmak, AAC'den SCO'ya kodek anahtarını tetikliyor (çünkü FaceTime mikrofonunuzu kullanıyor). SCO, ses kalitesini ve ses seviyesini düşürür. AirPods'u yüksek kaliteli AAC modunda tutmak için ayrı bir mikrofon (dahili Mac mikrofon veya USB) kullanın.</p>

<h2>5. Kulaklık güvenliği sesi sınırlıyor</h2>

<p>Sistem ayarları → ses → kulaklık güvenliği. "Düşük Ses Azalt" açıksa, kulaklık sesini sınırlıyor macOS. Devre dışı bırakın ya da eşiği yükseltin.</p>

<h2>6. Çekirdek Sesin Sıfırlanması</h2>

<p>Terminali aç ve çalıştır:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Bu, ses daemonunu yeniden başlatır ve düşük ses seviyelerinin takılı kalmasını düzeltebilir. Ses yeniden başladıktan sonra FaceTime görüşmesine yeniden katılın.</p>

<h2>7. FaceTime hacmini %100'ün üzerine çıkar</h2>

<p>Tüm ayarlar doğruysa ve FaceTime hâlâ çok sessizse — belki karşı tarafın mikrofonu zayıf — macOS sınırının ötesine kadar güçlendirmeniz gerekir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> FaceTime'ın sesini yükseltmenizi sağlıyor <strong>200%</strong>. Menü çubuğu panelini açın, FaceTime'ı bulun ve kaydırıcıyı %100'ün üzerine sürükleyin. Çağrı sesi gerçek zamanlı olarak güçlendirilir ve diğer hiçbir uygulamayı etkilemez.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial FaceTime çağrı hacmini %100'ün üzerine çıkarmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial tersi de yardımcı olur: Eğer FaceTime'ın zil sesi veya bildirim sesleri odak zamanında çok yüksekse, FaceTime'ı %20'ye düşürün veya müziğinizi çalmaya devam ederken sesinizi kapatın. Bir tıklama ile sessizleştiriyor, bir tıkla sessizliği açıyor.</p>

<p>Mevcut <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple incelemesi, sandbox, tek seferlik satın alma, abonelik yok.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac Muhtemelen Bilmiyorsunuz Ses Klavyesi Kısayolları",
    description:
      "Temel ses tuşlarının ötesine geçti — ince taneli kontrol, belirli uygulamaları susturma ve uygulama başına ses kısayolları. Her Mac ses klavyesi numarası açıklandı.",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>Her Mac kullanıcısı ses yükseltme/azaltma/sessiz tuşlarını bilir. Onlara bas ve sistem sesi değişiyor. Ama macOS, çoğu kişinin asla keşfetmediği birkaç gizli klavye numarasına sahip — ayrıca ses yönetimini dramatik şekilde hızlandıran üçüncü taraf kısayollar.</p>

<h2>Herkesin bilmesi gereken yerleşik kestirmeler</h2>

<h3>İnce tanenli hacim ayarı</h3>
<p>Bekle <strong>Seçenek + Kayma</strong> ve ses yükseltme veya azaltma tuşuna basın. Her baskı sesi şu şekilde ayarlanır <strong>Çeyrek</strong> Normal bir adım, sana 16 yerine 64 seviye veriyor. Bu, gece geç saatlerde doğru kulaklık sesini bulmak için ya da iki normal adım arasındaki geçiş çok büyük olduğunda çok önemlidir.</p>

<h3>Sessiz ses ayarı</h3>
<p>Bekle <strong>Vardiyası</strong> ve sesi yukarı veya aşağı basın. Ses değişiyor ama duyulabilir geri besleme "pop" sesi bastırılır. Bir arama veya sunum sırasında ses seviyesini ayarlıyorsanız ve pop sesinin herkese ulaşmasını istemediğinizde faydalı.</p>

<h3>Ses ayarlarına geç</h3>
<p>Bekle <strong>Seçenek</strong> ve herhangi bir ses tuşuna basarak Sistem Ayarları → Ses'i doğrudan açın. Sistem Ayarları'nda manuel gezinmekten daha hızlı.</p>

<h3>Hızlı çıkış cihaz anahtarı</h3>
<p>Bekle <strong>Seçenek</strong> ve menü çubuğundaki Ses simgesine tıklayarak tüm mevcut çıkış (ve giriş) cihazlarının listesini görebilirsiniz. Hemen değiştirmek için bire tıklayın. Sistem Ayarları'nı açmana gerek yok.</p>

<h2>macOS klavye kısayollarının yapamadığı şeyler</h2>

<p>Yukarıdaki tüm kısayollar <strong>Sistem hacmi</strong> — her uygulamayı eşit şekilde etkileyen bir kaydırıcı. Dahili klavye kısayolları yoktur:</p>

<ul>
  <li>Belirli bir uygulamanın sesini ayarlamak</li>
  <li>Her şeyi sessiz bırakmadan bir uygulamayı sessize atmak</li>
  <li>Kaydedilen ses konfigürasyonları arasında geçiş</li>
  <li>Bir ses mikseri panelini değiştirmek</li>
</ul>

<p>macOS uygulama başına ses kontrolü yok, bu yüzden bunun için kestirme yok.</p>

<h2>Uygulama başına ses seviyesi klavye kısayolları SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> macOS yapabileceklerini genişleten iki küresel klavye kısayolu ekler:</p>

<h3>Ses mikserini aç: Kontrol + Seçenek + S</h3>
<p>Basın <strong>⌃⌥S</strong> Her yerden ve menü çubuğunda SoundDial'nin popover'ı açılıyor, her uygulamayı kendi ses kaydırıcısıyla gösteriyor. İhtiyacınızı ayarlayın, kısayyolu tekrar basın (veya tıklayarak kapatın). Mevcut uygulamanızdan asla ayrılmazsınız.</p>

<h3>Tüm uygulamaları sessiz et: Control + Option + M</h3>
<p>Basın <strong>⌃⌥M</strong> her uygulamanın sesini anında sessize almayı sağlıyor. Her şeyi açmak için tekrar basın ve her uygulamayı önceki hase geri getirin. Bu, sessizleştirme tuşuna ulaşmaktan daha hızlı olan bir "anında sessizlik" düğmesidir — ve sistem sessiz tuşunun aksine, sessizliği kaldırdığınızda uygulama başına ses seviyelerini geri kazanır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial klavye kısayolları — Control+Option+S ile geçiş, Control+Option+M ile tüm sesleri kapat" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Klavye odaklı iş akışı</h2>

<p>SoundDial'nin kısayolları etkinleştirildiğinde, tüm seslerinizi fareye dokunmadan yönetebilirsiniz:</p>

<ol>
  <li><strong>⌃⌥S</strong> — mikseri aç</li>
  <li>Tek tek kaydırmaları ayarlamak için ok tuşları veya fareyi kullanın</li>
  <li><strong>⌃⌥S</strong> — mikseri kapat</li>
  <li><strong>⌃⌥M</strong> — biri odaya girdiğinde anında sessizleşiyor</li>
  <li><strong>⌃⌥M</strong> — ayrılırken sessizliği açıyor, her şey normale döner</li>
</ol>

<p>Birleştirildiğinde <strong>Hacim profilleri</strong> (kayıtlı yapılandırmaları tek tıklamayla değiştiriyorsunuz), bir düzine uygulamanın sesini tek tek açmadan yönetebilirsiniz.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Arka Plan Müziği Uygulaması macOS Çalışmıyor mu? Bu Alternatifleri Deneyin",
    description:
      "Ücretsiz Arka Plan Müziği uygulaması macOS güncellemesinden sonra çalışmayı mı durdurdu? İşte neden bozulduğu, ne yapılması gerektiği ve 2026'da gerçekten işe yarayan en iyi alternatifler.",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Background Music, size temel uygulama başına ses kontrolü sağlayan popüler bir ücretsiz, açık kaynaklı Mac uygulamasıdır. Sanal bir ses cihazı kurup tüm sesi oradan yönlendirerek çalışıyor. Sorun: kırılır. Düzenli olarak.</p>

<p>Neredeyse her macOS güncellemesinden sonra — Ventura, Sonoma, Sequoia, Tahoe — kullanıcılar aynı sorunları bildiriyor: sanal ses cihazı yüklenemiyor, ses hatası ve çatırdama çıkıyor, bazı uygulamalar algılanmıyor ya da uygulama başlatıldığında çöküyor. "Arka plan müziği çalışmıyor" diye aradıysanız, yalnız değilsiniz.</p>

<h2>Arka Plan Müziği Neden Sürekli Bozulur</h2>

<p>Arka Müzik, bir <strong>sanal ses cihaz sürücüsü</strong> (bir Core Audio HAL eklentisi). macOS, tüm sistem sesini bu sanal cihaz üzerinden yönlendirir ve Background Music bunu keserek uygulama başına ses kontrolü uygular.</p>

<p>Sorun şu ki, Apple neredeyse her büyük macOS sürümünde ses sürücülerinin çalışma şeklini değiştiriyor. Güvenlik kısıtlamaları sıkılaştırılır, API'ler değişir ve sürücü yükleme mekanizmaları gelişir. Background Music gönüllüler tarafından yönetilen açık kaynak projesi olduğundan, Apple'ın değişikliklerine uygun güncellemeler her zaman zamanında yapılmıyor.</p>

<p>macOS güncellemelerinden sonra yaygın sorunlar:</p>
<ul>
  <li><strong>Sanal ses cihazı yüklenmiyor</strong> — macOS'nin yeni güvenlik politikaları sürücüyü engelliyor</li>
  <li><strong>Ses cızırtısı veya kekeme</strong> — sanal cihaz, mevcut macOS sürümünün kötü yönettiğini bir gecikme getiriyor</li>
  <li><strong>Uygulamalar görünmüyor</strong> — macOS raporlarının uygulama algılamasını nasıl bozduğu işlemler</li>
  <li><strong>Hiç ses yok</strong> — sanal cihaz varsayılan çıkış olarak ayarlanmış ancak ses geçmiyor</li>
  <li><strong>Lansmanda çöküş</strong> — mevcut macOS sürümüyle uyumsuzluk</li>
</ul>

<h2>Arka Plan Müziği Nasıl Düzeltilir</h2>

<p>Eğer Arka Plan Müziği şu anda bozulduysa:</p>

<ol>
  <li><strong>Güncellemeleri kontrol edin:</strong> GitHub'un Arka Plan Müziği sayfasını ziyaret edin ve macOS sürümünüz için yeni bir sürüm çıkıp çıkmadığını kontrol edin.</li>
  <li><strong>Yeniden Tak:</strong> Arka Plan Müziği'ni tamamen kaldırın (sanal ses cihazı dahil), yeniden başlatın ve en son sürümü yükleyin.</li>
  <li><strong>Sesi sıfırlayın:</strong> Eğer sesiniz sanal cihazda takılıysa, Sistem Ayarları → Ses → Çıkış'a gidin ve gerçek hoparlörleri/kulaklıklarınızı seçin. O zaman kaç <code>sudo killall coreaudiod</code> Terminal'de.</li>
  <li><strong>İzinleri kontrol et:</strong> Sistem Ayarları → Gizlilik ve Güvenlik — Background Music'in gerekli izinlere sahip olduğundan emin olun.</li>
</ol>

<h2>Sanal ses cihazları kullanmayan alternatifler</h2>

<p>Arka Plan Müziği'nin temel sorunu mimari: sanal ses cihazları kırılgan ve macOS güncellemelerle bozulur. Modern alternatifler Apple'ın <strong>Core Audio Tap API</strong> (macOS 14'te tanıtıldı), bu da uygulamaların sistem düzeyinde bir sürücü yüklemeden süreç başına sesi ele geçirmesine olanak tanır.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> modern Audio Tap API'sini kullanır — sanal ses cihazı yok, sistem sürücüsü yok, çekirdek uzantısı yok. Apple'ın desteklenen API'si aracılığıyla her uygulamanın ses akışına doğrudan bağlanıyor, yani macOS güncelleme yapıldığında bozulmaz.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — sanal ses cihazları yüklemeyen bir Arka Müzik'e alternatif" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Arka Plan Müziği üzerinden ne alırsınız:</p>
<ul>
  <li><strong>Sanal ses cihazı yok</strong> — Apple'ın yerel ses yığınıyla çalışıyor, güncellemelerde bozulmaz</li>
  <li><strong>Ses seviyesi %200'e yükseltildi</strong> — Arka plan müziği %100 sınırı</li>
  <li><strong>Hacim profilleri</strong> — kaydet ve yapılandırmalar arasında geçiş yap (Arka Müzik'te hiç yok)</li>
  <li><strong>Otomatik ördülme</strong> — aramalar sırasında otomatik ses düşürme (Arka Müzikte sadece otomatik duraklatma var, eğilme yok)</li>
  <li><strong>Hacim belleği</strong> — yeniden başlatmalar arasındaki uygulama başına hacimleri hatırlar</li>
  <li><strong>Klavye kısayolları</strong> — mikseri aç veya tüm uygulamaları sessiz bırak</li>
  <li><strong>Aktif gelişim</strong> — en son güncellemeler için düzenli olarak güncellenen macOS</li>
</ul>

<p>Karşılığı: SoundDial tek seferlik ücretli bir satın alma şeklinde, Arka Plan Müziği ise ücretsiz. Ama gerçekten çalışan bir uygulama, her altı ayda bir bozan ücretsiz bir uygulamadan daha değerli. Ve çünkü SoundDial <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, Apple tarafından incelendi, güvenlik için sandbox yapıldı ve temiz kurulum — GitHub'tan indirmek yok, kaynaktan derleme yok, sistem genişletme izni verilmiyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource Alternatif: Mac için Uygulama Başına Daha Hafif ve Daha Ucuz Ses Kontrolü",
    description:
      "SoundSource güçlü ama pahalı ve karmaşık. Eğer sadece uygulama başına ses kontrolüne ihtiyacınız varsa, ses mühendisliği araç seti olmadan şöyle bir şey kullanmanız gerekiyor.",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>Rogue Amoeba'nın SoundSource'u, Mac için en uzun süre çalışan uygulama başına ses kontrol uygulamasıdır. Güçlü, iyi yapılmış ve uygulama başına EQ, ses efekt zincirleri ve uygulama başına çıkış yönlendirmesi gibi özelliklerle geliyor. Ayrıca 39 dolar, sistem ses sürücüsü (ACE) gerektiriyor ve çoğu kişinin kullanabileceğinden daha fazla özelliğe sahip.</p>

<p>Eğer tek istediğiniz Zoom'u etkilemeden Spotify'ı kısmak ise — ve tam bir ses mühendisliği araç setine ihtiyacınız yoksa — SoundSource ihtiyacınız olandan daha fazla olabilir. İşte göz önünde bulundurmanız gerekenler şunlar.</p>

<h2>SoundSource'un iyi yaptığı şeyler</h2>

<p>Hak ettiği yerde kredi — SoundSource cilalı, profesyonel bir uygulama:</p>
<ul>
  <li><strong>Uygulama başına ses kontrolü</strong> ince taneli kaydırmalarla</li>
  <li><strong>Uygulama başına EQ</strong> dahili ekolayzer ve Audio Unit eklenti desteğiyle</li>
  <li><strong>Uygulama başına çıkış yönlendirme</strong> — farklı uygulamaları farklı hoparlörlere göndermek</li>
  <li><strong>Ses seviyesi artışı</strong> %100 geçmiş</li>
  <li><strong>Sistem genelinde ses efektleri</strong></li>
</ul>

<p>Eğer bir podcast yazarı, yayıncı veya ses profesyoneliyseniz ve uygulama başına EQ ve efekt zincirlerine ihtiyacınız varsa, SoundSource sizin için özel olarak tasarlanmış.</p>

<h2>SoundSource'un düzenli kullanıcılar için yetersiz kaldığı noktalar</h2>

<h3>Fiyat</h3>
<p>Bir ses kontrolü uygulaması için $39 USD oldukça yüksek. EQ, ses efektleri veya uygulama başlı yönlendirme kullanmıyorsanız, asla dokunamayacağınız özellikler için ödeme yapıyorsunuz.</p>

<h3>Sistem sürücüsü</h3>
<p>SoundSource, ACE (Audio Capture Engine) adlı özel bir sistem ses sürücüsü yükler. Bu iyi çalışıyor ama karmaşıklık katıyor — her macOS sürümle güncellenmesi gerekiyor, bazen diğer ses yazılımlarıyla çakışabilir ve sistem ses seviyesinde üçüncü taraf kod çalıştırıyor olmanız anlamına geliyor. Kurumsal ortamlardaki bazı BT departmanları, çekirdek uzantılarını ve sistem düzeyindeki ses sürücülerini engeller.</p>

<h3>Ses profili yok</h3>
<p>Geniş özelliklerine rağmen, SoundSource'un profil sistemi yok. "Toplantı" ve "Odak" konfigürasyonlarını kaydedip aralarında geçiş yapamazsınız. Durumunuz her değiştiğinde, her kaydırıcıyı manuel olarak ayarlıyorsunuz.</p>

<h3>Otomatik eğilme yok</h3>
<p>SoundSource, bir aramaya katıldığınızda arka plan sesini otomatik olarak düşürmez. Çağrı algılama, otomatik ses ayarı yok, en yaygın uygulama başına mikser kullanımı için hands-free iş akışı yok.</p>

<h2>SoundDial: çoğu insanın gerçekten ihtiyaç duyduğu şeye odaklanmak</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> farklı bir yaklaşım benimser: temel işi mükemmel yapar, çoğu insanın ihtiyaç duymadığı özellikleri atlar ve SoundSource'un eksik iş akışı özelliklerini ekler.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Özellik</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Uygulama başına hacim</td>
  <td style="text-align:center;padding:10px 12px;">Evet (%0-200)</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Uygulama başına sessiz bırak</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Hacim profilleri</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Otomatik ördülme</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Hacim belleği</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Uygulama başına EQ</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Uygulama başına çıkış yönlendirme</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sistem ses sürücüsü</td>
  <td style="text-align:center;padding:10px 12px;">Gerek yok</td>
  <td style="text-align:center;padding:10px 12px;">Zorunlu (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Klavye kısayolları</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Fiyat</td>
  <td style="text-align:center;padding:10px 12px;">€14.99 tek seferlik</td>
  <td style="text-align:center;padding:10px 12px;">$39 USD</td>
</tr>
</tbody>
</table>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — ses profilleri ve otomatik eğilme özellikleriyle daha hafif, odaklanmış bir SoundSource alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Hangisini seçmelisiniz?</h2>

<ul>
  <li><strong>SoundSource'u seçin eğlendiğinde:</strong> Uygulama başına EQ, ses efekt zincirleri veya uygulama başlı çıkış yönlendirmesi gerekir. Sen bir podcast yapıcısı, yayıncı ya da ses profesyonelisin. Fiyat ve sistem sürücüsü sizi rahatsız etmez.</li>
  <li><strong>Seç <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> eğer:</strong> Uygulama başına ses kontrolü, profiller ve otomatik eğilme ile istersiniz. Sistem sürücüsü yüklemeyen daha hafif bir şey istersiniz. Daha az harcamak istersin. Siz uzaktan çalışan birisiniz, oyuncusunuz, öğrencisiniz veya Zoom'u etkilemeden sadece Slack'i kapatmak isteyen birisiniz.</li>
</ul>

<p>SoundDial <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — yani Apple tarafından incelenmiş, güvenlik açısından sandbox'a alınmış ve herhangi bir App Store uygulaması gibi temiz bir şekilde kurulum/kaldırma işlemi yapılıyor. Rastgele web sitelerinden DMG indirmek yok, sistem sürücüsü kurulumu yok, çekirdek uzantısı izni verilmiyor. Tek seferlik satın alma, abonelik yok.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac En Düşük Ayarda Ses Çok Yüksek? Daha Sessiz Nasıl Gidilir",
    description:
      "En düşük ses çentiğinde bile, Mac çok yüksek — özellikle gece geç saatlerde kulaklıkla. İşte daha ince ses kontrolü elde etmek ve minimumun altına düşmek için nasıl yapılır.",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>Saat gece yarısı. Kulaklık takıyorsun. Ses kısma tuşuna basıyorsunuz, en düşük noktaya — bir bara ulaşınca. Hâlâ çok gürültülü. Sonraki baskı sessiz oluyor. Arada hiçbir şey yok. Hacim %3 olmasını istiyorsunuz ama macOS %6'dan %0'a atlıyor.</p>

<p>Bu, kulaklıklar ve hassas hoparlörlerde yaygın bir şikayettir. macOS'nin 16 ses seviyesi çok kaba — en düşük duyulabilir basamak hâlâ gece geç saatlerde sessiz dinlemek için ihtiyacınız olan basamadan daha yüksek.</p>

<h2>Yerleşik çözüm: çeyrek basamak ses ayarı</h2>

<p>Çoğu Mac kullanıcısı bunu bilmiyor: <strong>4 kat daha ince ses kontrolü</strong> Bir klavye modifikatörü kullanıyordu.</p>

<p>Bekle <strong>Seçenek + Kayma</strong> ve ses yükseltme/azaltma tuşlarına basın. Her basma sesi normal bir adımın dörtte biri kadar ayarlanır — böylece 16 yerine 64 basamak olur.</p>

<p>Bu, normal çentikler arasındaki ses seviyelerini bulmanızı sağlar. "Bir bar" ile "sessiz" arasındaki boşlukta artık üç ek seviyeye inebilirsiniz. Gece geç saatlerde kulaklık dinlemek için bu genellikle rahat bir seviye bulmak için yeterlidir.</p>

<h2>Neden bazı içerikler aynı seste diğerlerinden daha yüksek sesle</h2>

<p>Bazı uygulamaların aynı sistem sesiyle bile diğerlerinden daha yüksek ses verdiğini fark edebilirsiniz. Spotify, bir barda bir YouTube videosundan daha yüksek hissettiriyor. Bunun nedeni, her uygulamanın farklı seviyelerde ses çıkarması ve sistemin ses seviyesinin orantılı olarak ölçeklenmesidir.</p>

<p>0 dB'de (maksimum) mastering edilen bir şarkı ile -15 dB'de kaydedilen bir podcast, aynı sistem sesiyle dramatik şekilde farklı duyulur. Şarkı 15 dB daha yüksek — bu da kulaklarınıza yaklaşık üç kat daha yüksek algılanıyor.</p>

<h2>Gerçek çözüm: ince kontrol için uygulama başına ses seviyesi</h2>

<p>Çeyrek adım kısayolu yardımcı oluyor, ama yine de tüm uygulamaları eşit şekilde ayarlar. En düşük basamakta Spotify çok gürültülüyse ama en düşük basamaktaki Zoom çağrınız çok sessizse, takılı kalırsınız.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Uygulama başına ses kaydırıcıları ve ince taneli kontrol sağlar — her kaydırıcı %0'dan %200'e %1 artışla hareket eder. Spotify'ı aynı anda %5'e, Zoom'u %40'a ayarlayabilirsiniz. Kontrol seviyesi macOS'nin 16 sistem adımından çok daha ince.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial uygulama başına ince tanenli ses kontrolü ve %1 artışlarla macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Gece geç saatlerde kulaklık kullanımı için:</p>
<ul>
  <li>Sistem sesini orta seviyeye (%40-50) ayarlayın</li>
  <li>Her uygulamayı tam istediğiniz seviyeye ayarlamak için SoundDial kullanın</li>
  <li>Spotify %8 — neredeyse hiç yok olan arka plan müziği</li>
  <li>Tarayıcı %15 — gece geç saatlerde video için yeterince sessiz</li>
  <li>Bildirimler susturuldu — şaşırtıcı olmayan yüksek sesler</li>
</ul>

<p>Bunu "Gece" profili olarak kaydedin ve mesai saatleri dışında kulaklık taktığınızda tek tıklamayla uygulayın.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Bir AirPod diğerinden daha mı yüksek mi? Her Çözüm Açıklandı",
    description:
      "Sol AirPod sağa göre daha sessiz (ya da tam tersi). İşte her sebep — kulak kirinden macOS denge ayarlarına kadar — ve nasıl düzeltileceği.",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>Bir AirPod iyi ses çıkarıyor. Diğeri belirgin şekilde daha sessiz. Müzik merkezden sapmış gibi hissettiriyor. Sesler bir taraftan geliyormuş gibi geliyor. Bu, AirPods şikayetlerinin en yaygın örneklerinden biridir ve genellikle basit bir çözümü vardır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>1. AirPods'larınızı temizleyin</h2>

<p>En yaygın neden fiziksel: kulak kiri veya kalıntı bir AirPod'un hoparlör ağını kısmen engelliyor. İnce bir birikinti tabakası bile o tarafta hacmi önemli ölçüde azaltabilir.</p>

<p><strong>Nasıl temizlenir:</strong></p>
<ul>
  <li>Hoparlör ağını nazikçe fırçalamak için kuru, yumuşak kıllı bir fırça kullanın (temiz bir diş fırçası işe yarar)</li>
  <li>AirPods Pro silikon uçları için: ucu çıkarın ve hem ucu hem de altındaki hoparlör ağını temizleyin</li>
  <li>Dış cephe için kuru, tüy içermeyen bir bez kullanın</li>
  <li><strong>Kullanma:</strong> Su, alkol, sıkıştırılmış hava veya keskin nesneler — bunlar hoparlör ağına zarar verebilir veya döküntüleri daha da itebilir</li>
</ul>

<p>Temizledikten sonra her iki AirPod'u da test edin. Çoğu durumda, bu sorunu hemen çözer.</p>

<h2>2. Ses dengesini kontrol macOS</h2>

<p>macOS sol sağa ses dengesi kaydırıcısı olabilir ve bu da merkezden farklı olabilir:</p>

<ol>
  <li>Ziyaret edin <strong>Sistem Ayarları → Erişilebilirlik → Ses</strong></li>
  <li>Bulun <strong>Denge</strong> Kaydırıcı</li>
  <li>Tam olarak sol ve sağ arasında merkezlendiğinden emin olun</li>
</ol>

<p>Eğer kaydırıcı bir tarafa kaydırıldıysa, suçlunuz budur. Ortalayın ve ses her iki tarafta eşit olmalı.</p>

<p>Ayrıca kontrol edin <strong>Sistem Ayarları → Ses</strong> — bazı macOS sürümlerinde çıkış cihazı ayarlarında denge kaydırıcısı da bulunur.</p>

<h2>3. AirPods'unuzu sıfırlayın</h2>

<p>Temizleme ve denge yardımcı olmuyorsa, AirPods'larınızı fabrika haline sıfırlamayı deneyin:</p>

<ol>
  <li>Her iki AirPod'u da şarj kutusuna koyun</li>
  <li>Kapağı kapat ve 30 saniye bekle</li>
  <li>Kapağı aç</li>
  <li>Kılıfın arkasındaki kurulum düğmesine 15 saniye basılı tutup tutun, ta ki durum ışığı kehribar, sonra beyaz yanıp sönene kadar</li>
  <li>AirPods'u Mac ile yeniden eşleştirin (Sistem Ayarları → Bluetooth)</li>
</ol>

<p>Bu, saklanan herhangi bir ses kalibrasyonunu sıfırlar ve yazılım tarafındaki ses dengesizliklerini düzeltebilir.</p>

<h2>4. Mono Ses Kontrol Edin</h2>

<p>macOS'nin Mono Ses erişilebilirlik özelliği etkinleştirildiğinde, stereo ses tek bir kanala karıştırılır ve her iki AirPods'a eşit şekilde gönderilir. Bu ses farkına yol açmamalı, ancak bazı içeriklerin ses şeklini değiştirebilir ve bir tarafın "farklı" görünmesini sağlayabilir.</p>

<p>Kontrol et: Sistem Ayarları → Erişilebilirlik → Ses → "Mono Ses"in kapalı olduğundan emin olun (ihtiyacınız yoksa).</p>

<h2>5. Bluetooth paraziti</h2>

<p>AirPods, Mac ile Bluetooth üzerinden iletişim kurar ve her AirPod aynı zamanda diğeriyle de iletişim kurar. Eğer önemli Bluetooth parazitleri varsa (WiFi yönlendiriciler, USB 3.0 hub'ları, diğer Bluetooth cihazları), bir AirPod daha zayıf sinyal alabilir.</p>

<p><strong>Düzeltme:</strong> Kendi Mac daha da yaklaş. Kullanmadığınız Bluetooth cihazlarını kapatın. Eğer bir USB 3.0 hub'ın yakınındaysanız, onu uzaklaştırmayı deneyin — USB 3.0'ın 2.4 GHz Bluetooth'a müdahale ettiği bilinir.</p>

<h2>6. Donanım sorunu</h2>

<p>Yukarıdaki çözümlerin hiçbiri işe yaramıyorsa, bir AirPod'da donanım arızası olabilir — bozulmuş hoparlör sürücüsü veya hasarlı bir ağ. Bu, yoğun kullanımda zamanla gerçekleşir.</p>

<p><strong>Düzeltme:</strong> Apple Destek Ekibi ile iletişime geçin veya bir Apple Store'u ziyaret edin. AirPods'larınız garanti kapsamında veya AppleCare+ altındaysa, Apple etkilenen AirPod'u değiştirecektir. Bireysel AirPod yedekleri de garanti dışı satın alınabilir.</p>

<h2>Uygulama başına ses kontrolüyle daha iyi ses dengesi</h2>

<p>Uygulama başına ses kontrolü AirPods arasındaki donanım dengesizliğini çözmese de, ilgili bir sorunu çözüyor: AirPods'unuzdaki bazı uygulamalar diğerlerinden daha yüksek sesli olduğunda, dengesizlik algısını abartabilir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Her uygulamayı tutarlı bir ses seviyesine ayarlamanıza izin veriyor. Spotify %40, Zoom %100 ve Safari %60 olduğunda, her uygulamadan ne bekleyeceğinizi tam olarak bilirsiniz — bir AirPod'un %100 patlamasıyla ani ses seviyesi sıçramaları yok.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix ve Streaming Audio Mac'da Çok Sessiz mi? Bunu Nasıl Düzeltebilirim",
    description:
      "Diyalog fısıltı gibi sessiz, sonra bir patlama odayı sarsıyor. İşte Mac akışında ses seviyesini nasıl düzelteceğiniz ve sessiz içeriği %100'ün üzerine çıkaracağınız şunlar.",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>Netflix'te bir film izliyorsunuz. İki karakter sohbet ediyor — neredeyse duyulmayanlar. Sesi yükseltiyorsun. Bir aksiyon sahnesi başlar. Patlamalar sağır edici. Ses tuşuna koşuyor gibisin. Bu, ses akışıyla ilgili en yaygın şikayet ve Mac'ın dahili hoparlörlerinde daha da kötüleşiyor.</p>

<p>Sorun senin Mac değil. Filmler ve TV dizilerinin nasıl ustalaştığı — ve macOS bunu düzeltmek için hiçbir araç vermemesi.</p>

<h2>Neden ses akışında büyük ses dalgalanmaları var</h2>

<p>Filmler ve TV dizileri yüksek derecede mastering edilir <strong>Dinamik Aralık</strong> — en sessiz ve en yüksek sesler arasındaki fark. Güçlü hoparlörler ve subwoofer olan bir sinematoda bu inanılmaz geliyor. Fısıltılar samimi, patlamalar içgüdüsel.</p>

<p>MacBook'un 2 inçlik hoparlörlerinde bu dinamik aralık bir yük haline geliyor. Sessiz kısımlar, küçük hoparlörlerin net şekilde yeniden üretebildiği sınırların altında, yüksek sesli kısımlar ise hoparlörün fiziksel sınırlarına ulaşıyor. Sürekli ses seviyesini ayarlamak zorunda kalıyorsunuz — diyalog için yükselt, aksiyon için kıs.</p>

<h2>Çözüm 1: Yayın uygulamasında "Yüksek Sesleri Azalt" seçeneğini etkinleştirin</h2>

<p>Bazı yayın servislerinde ses seviyesi normalizasyon özelliği vardır:</p>
<ul>
  <li><strong>Netflix:</strong> Oynatma sırasında, hoparlör simgesine tıklayın → "Yüksek Sesleri Azalt" seçeneği olup olmadığını kontrol edin (tarayıcıda ve yerel uygulamada mevcut)</li>
  <li><strong>Apple TV+:</strong> Ayarlar → Erişilebilirlik → "Yüksek Sesleri Azaltma"</li>
  <li><strong>Disney+:</strong> Şu anda eşdeğer bir ayar mevcut değil</li>
  <li><strong>Amazon Prime Video:</strong> "Diyalog Artışı" özelliği (başlık için mevcutsa)</li>
</ul>

<p>Bu özellikler dinamik aralığı sıkıştırıyor — sessiz sesleri daha yüksek ve yüksek sesleri daha sessiz hale getiriyor. Sonuç olarak daha eşit ses seviyesi ve küçük hoparlörlerde ve düşük dinleme seviyelerinde daha iyi çalışıyor.</p>

<h2>Çözüm 2: Mac ses artırıcısını kontrol edin</h2>

<p>Bazı Mac modellerinde macOS, dahili hoparlörlere ses işleme uygular. Çıkış cihazınız için herhangi bir geliştirme seçeneği olup olmadığını görmek için Sistem Ayarları → Ses'e bakın. MacBook Pro 14" ve 16" modellerinde, hoparlör sistemi algılanan ses seviyesini etkileyebilen uzamsal ses işleme özelliğine sahiptir.</p>

<h2>Çözüm 3: Kablolu kulaklık kullanın</h2>

<p>Kulaklıklar hoparlör boyutu sorununu tamamen atlar. Ucuz kablolu kulaklıklar bile kulak zarınızın hemen yanında olduğu için sessiz diyalogları net bir şekilde tekrarlayabilir. Küçük hoparlörlerde sorun olan dinamik aralık, kulaklıklarda bir avantaj haline geliyor.</p>

<h2>Düzeltme 4: Akış sesini %100'ün üzerine çıkar</h2>

<p>Eğer içerik çok sessizse — normalizasyon açık ve ses seviyesi maksimumda olsa bile — macOS sağladığından daha fazla güçlendirme gerekir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Herhangi bir uygulamayı yükseltmeye izin verir <strong>200%</strong>. Safari veya Netflix uygulaması çok sessizse, kaydırıcıyı %100'ün üzerine çekin. Ses, hoparlörlerinize ulaşmadan önce güçlendirilir ve bu da sadece o uygulama için maksimum sesi iki katına çıkarır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial daha net diyalog ve akış sesi için Netflix sesini %180'e yükseltmek Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bu özellikle şu durumlarda faydalıdır:</p>
<ul>
  <li>Diyalogun yumuşak olduğu sessiz bir yabancı film izlemek</li>
  <li>Daha düşük seviyelerde mastering edilmiş eski içerikleri yayınlamak</li>
  <li>Gürültülü bir ortamda MacBook hoparlörleri kullanmak</li>
  <li>Bir yayın hizmeti diğerinden çok daha sessizdir</li>
</ul>

<p>Ve SoundDial her uygulamayı bağımsız kontrol ettiği için, Netflix'i %150'ye çıkarmak Spotify veya Slack'inizi daha yüksek yapmaz. Her uygulama kendi seviyesinde kalır.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac Uzaktan İş için Ses Kurulumu: Tam Rehber",
    description:
      "Aramalar, müzik, bildirimler ve odaklanma zamanı — hepsi tek bir Mac. İşte sesinizi nasıl ayarlayacağınızı ve hiçbir şeyin dikkatinizi çekmemesini sağlayacaksınız.",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Bir Mac üzerinde uzaktan çalışmak, bilgisayarınızın aynı anda ofis telefonunuz, radyonuzu, bildirim merkeziniz ve derin çalışma istasyonunuz olduğu anlamına gelir. Bunlar dört temel farklı ses modu ve macOS hepsini aynı şekilde ele alıyor: bir ses kaydırıcısı, her şey aynı seviyede, öncelik verme imkanı yok.</p>

<p>Bu rehber, Mac sesini uzaktan çalışma için nasıl ayarlayacağınızı gösteriyor; böylece aramalar net, müzik var ama dikkat dağıtıcı değil, bildirimler ince ve odaklanma süresi gerçekten sessiz oluyor.</p>

<h2>Uzaktan çalışmanın dört ses modu</h2>

<h3>1. Toplantı modu</h3>
<p>Zoom veya Teams görüşmelerindesiniz. Çağrı kristal net olmalı. Müzik sessiz olmalı ya da zar zor duyulmalı. Slack kulağınızda ses vermemeli.</p>

<h3>2. Odak modu</h3>
<p>Derin bir çalışma yapıyorsun. Düşük seviyede fon müziği konsantre olmanı sağlar. Bildirimler zar zor fark edilir olmalı — acil bir mesajı fark edecek kadar hazır olmalı, akışını bozmayacak kadar sessiz.</p>

<h3>3. İşbirlikçi mod</h3>
<p>Mesajlaşmak, Slack'i izlemek, belki bir eğitim videosu izlemek için müsaitsiniz. Her şey orta düzeyde olabilir. Bildirimler normal ses seviyesinde.</p>

<h3>4. Break modu</h3>
<p>Tam sesle müzik. YouTube tam sesle. Bildirimler bekleyebilir.</p>

<h2>Donanım kurulumu</h2>

<h3>Mikrofon sorusu</h3>
<p>Çağrılar için AirPods kullanıyorsanız, ayrı bir mikrofon kullanmayı düşünün. AirPods hem mikrofon hem de hoparlör olarak kullanıldığında, macOS daha düşük kaliteli SCO Bluetooth kodekine geçer ve bu da ses kalitesini ve ses seviyesini düşürür. Mac'inizin dahili mikrofonunu (veya USB mikrofonunu) AirPods'u çıkış olarak tutarken bu durumu tamamen ortadan kaldırır.</p>

<p>En iyi arama kalitesi için: USB mikrofon veya dahili mikrofonlu kulaklık. Blue Yeti, Elgato Wave ya da basit bir USB kulaklık, iş arkadaşlarınıza AirPods'un mikrofonundan çok daha iyi ses verir.</p>

<h3>Çıkış cihazları</h3>
<p>Birçok uzaktan çalışan iki çıkış cihazı kullanır:</p>
<ul>
  <li><strong>Kulaklıklar</strong> Aramalar için — gizlilik, yankı yok, net ses</li>
  <li><strong>Konuşmacılar</strong> çağrı dışı zamanlarda müzik için — odayı doldurur, uzun süre daha rahat olur</li>
</ul>

<p>Cihazlar arasında hızlıca geçiş yapmak için menü çubuğundaki Ses simgesine Option'u kullanın. Ya da çıkış cihazlarınızı ses kontrollerinin hemen yanına yerleştiren SoundDial'nin yerleşik cihaz anahtarını kullanın.</p>

<h2>Yazılım kurulumu</h2>

<h3>Bildirim yönetimi</h3>
<p>Sistem Ayarları → Bildirimler'e gidin. Her uygulama için, sesli bildirimlere ihtiyacınız olup olmadığına karar verin:</p>
<ul>
  <li><strong>Sesleri açık tutun:</strong> Slack (eğer yanıt veriyorsanız), Calendar (toplantılar), Mesajlar</li>
  <li><strong>Sesleri kapatın:</strong> Posta (programınızı kontrol edin), Haberler, sosyal uygulamalar</li>
</ul>

<p>Bu, sürpriz sesler çıkaran uygulamaların sayısını azaltıyor, ancak ses kontrolü vermiyor — sadece açma/kapalı.</p>

<h3>Odak modları</h3>
<p>Sistem Ayarları → Odak'ta en az iki Odak modu oluşturun:</p>
<ul>
  <li><strong>"Toplantı"</strong> — takvim uygulamanız hariç tüm bildirimleri sustur</li>
  <li><strong>"Odaklan Çalışma"</strong> — Slack DM'lerinden ve yöneticinizden bildirimlere izin verin, diğer her şeyi susturun</li>
</ul>

<p>Odak modları bildirim bastırmayı yönetir. Ses seviyesi kontrolü için daha fazlasına ihtiyacınız var.</p>

<h2>Eksik parça: uygulama başına ses kontrolü</h2>

<p>Odak modları kontrolü <em>hangi</em> Bildirimler ulaşır ama geçemez. <em>Ne kadar yüksek</em> Her şey iyidir. Her şey için hâlâ bir ses kaydırıcınız var. Slack'i %15, Spotify %35 ve Zoom'u %100 istiyorsanız — macOS bunu yapamazsınız.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Bu boşluğu her uygulamaya kendi ses kaydırıcısı vererek dolduruyor. Uzaktan çalışma sesinizi tam istediğiniz şekilde ayarlayın:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial uzaktan çalışma ses kurulumu — Zoom, Spotify ve Slack için farklı ses seviyeleri macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Her mod için profilleri kaydet</h3>

<p><strong>Toplantı profili:</strong></p>
<ul>
  <li>Zoom/Teams: %100</li>
  <li>Spotify: susturulmuş</li>
  <li>Gevşeklik: kısık</li>
  <li>Tarayıcı: sessiz</li>
</ul>

<p><strong>Odaklanma Çalışma Profili:</strong></p>
<ul>
  <li>Spotify: %30</li>
  <li>Slack: %10</li>
  <li>Zoom: %80 (birisi ararsa diye)</li>
  <li>Tarayıcı: %40</li>
</ul>

<p><strong>İşbirlikçi profil:</strong></p>
<ul>
  <li>Her şey %50-70 arası</li>
  <li>Slack: %30</li>
</ul>

<p>Tek tıklamayla profiller arasında geçiş yapın. Bir arama başladığında, SoundDial'ın otomatik eğilmesi otomatik olarak arama uygulamanız dışında her şeyi düşürüyor. Bittiğinde, profil seviyeleriniz geri döner.</p>

<h2>Günlük iş akışı</h2>

<ol>
  <li>İşe başlayın → "Odaklan İşi" profilini uygulayın</li>
  <li>Bir toplantıya katılın → otomatik ördülme otomatik olarak yönetiyor (veya "Toplantı" profilini uygulayın)</li>
  <li>Toplantı bitiyor → ciltler Focus Work seviyelerine geri döner</li>
  <li>Öğle arası → "Mola" profilini uygula, müziği aç</li>
  <li>Öğleden sonra derin çalışma, tekrar Odaklanma Çalışmasına →</li>
</ol>

<p>Toplam manuel çalışma: günde iki veya üç profil tıklaması. Geri kalan her şey otomatiktir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Tarayıcı sekmelerinin Mac Otomatik Ses Oynatmasını Nasıl Durdururum",
    description:
      "Arka plan sekmesi aniden ses oynatmaya başlıyor. Reklamlar, videolar, haber siteleri — macOS'de haydut sekmeleri nasıl susturmak ve tarayıcı sesini kontrol etmek için nasıl kontrol edileceği işte.",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>Yirmi sekmen açık. Onlardan birinde çalışıyorsun. Aniden — bir yerden ses çalmaya başlıyor. Bir video reklamı. Otomatik oynatılan bir haber klipi. Bir saat önce açtığınız bir sekme şimdi ses çıkarmaya başlama zamanı geldi. Hangi sekme olduğunu bulmak için telaşla bakıyorsunuz, birer teker tıklıyorsunuz.</p>

<p>Tarayıcı sekmelerinde otomatik ses oynatmak herhangi bir bilgisayarda en sinir bozucu deneyimlerden biridir ve Mac için daha da kötü çünkü macOS belirli bir uygulamayı (hele ki belirli bir sekmesi) sessizleştirmenin hiçbir yolu yok, her şeyi susturmadan yok.</p>

<h2>Safari'de otomatik oynatmayı devre dışı bırak</h2>

<p>Safari, herhangi bir tarayıcı arasında en iyi yerleşik otomatik oynatma kontrollerine sahiptir:</p>

<ol>
  <li>Safari → Ayarlar (⌘,) → Web Siteleri sekmesini açın</li>
  <li>Sol kenar çubuğundan "Otomatik Oynat" seçeneğini seçin</li>
  <li>Alt sıradaki varsayılan olarak "Asla Otomatik Oynatma" veya "Sesli Medyayı Durdur" olarak ayarlayın</li>
</ol>

<p>"Medyayı Sesle Durdur" en iyi seçenek — sesle otomatik oynatılan videoları engeller ancak birçok sitenin dekoratif arka plan videoları için kullandığı otomatik oynatma ile susuz izin verir. "Asla Otomatik Oynatma" her şeyi engelliyor.</p>

<p>YouTube veya Netflix gibi belirli sitelerde otomatik oynatmaya izin vermek isterseniz, aynı panelde site ayarlarını da ayarlayabilirsiniz.</p>

<h2>Chrome'da otomatik oynatmayı devre dışı bırak</h2>

<p>Chrome'un otomatik oynatma kontrolleri daha az ayrıntılı:</p>

<ol>
  <li>Ziyaret edin <code>chrome://settings/content/sound</code></li>
  <li>Varsayılan davranışı belirlemek için "Siteler ses çalabilir " seçeneğini değiştirin</li>
  <li>Belirli siteleri kalıcı olarak susturmak için "Mute" listesine ekleyin</li>
</ol>

<p>Chrome ayrıca bireysel sekmeleri sessize almanıza izin veriyor: "Siteyi sessiz → bir sekmeye sağ tıklayın." Bu, o sitedeki tüm sesleri sessizleştiriyor, ta ki siz onu kaldırana kadar.</p>

<h2>Bir sekmeyi hızlıca kapat</h2>

<p>Hem Safari hem de Chrome, ses üreten sekmelerde bir hoparlör simgesi gösteriyor. Safari'de, sekmedeki hoparlör simgesine tıklayarak sessizleştirebilirsiniz. Chrome'da sekmeye sağ tıklayın ve "Siteyi sessiz et" seçeneğini seçin.</p>

<p>Bu, bir sekme için bir sekme için işe yarıyor, ama birden fazla gürültülü sekme varsa, onları tek tek tıklıyorsunuz.</p>

<h2>Daha geniş sorun: tarayıcı sesi ile diğer her şey arasındaki fark</h2>

<p>Otomatik oynatma devre dışı bırakılsa ve sekmeler susturulsa bile, tarayıcınızın diğer uygulamalara göre ne kadar yüksek olduğunu kontrol etmek isteyebilirsiniz. Belki Zoom görüşmesi sırasında YouTube eğitimi izliyorsunuzdur — eğitimi %30, Zoom'u %100 istiyorsunuz. Ya da bir tarayıcı sekmesinde arka plan müziği çalıyorsunuz ve bu Spotify ile rekabet ediyor.</p>

<p>macOS tüm tarayıcıyı tek bir hacimli tek bir uygulama gibi ele alıyor. Sistem seviyesinde bir sekmeyi diğerinden daha sessiz hale getiremezsiniz. Ama sen <em>bunun yerine</em> Tüm tarayıcıyı diğer uygulamalardan daha sessiz hale getir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tarayıcınıza diğer tüm uygulamalardan bağımsız olarak kendi ses kaydırıcısını verir. Safari'yi %30'a düşürürken Zoom'u %100'de tutarak. Chrome'u tamamen sessiz bırakın ve Spotify oynatmaya devam edin. Bir tık.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial tarayıcı hacmasını diğer uygulamalardan bağımsız olarak kontrol macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bu, sürpriz otomatik oynatma sekmesini yönetmenin en hızlı yoludur: hangi sekmenin ses çıkardığını aramak yerine, menü çubuğunda SoundDial'e tıklayıp tarayıcıyı sessiz bırakın. Diğer her şey çalmaya devam ediyor. Sorunlu sekmeyi bulup kapattığınızda, tarayıcıyı sessizliği kaldırın ve ses seviyesi eski haline döner.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Discord Sesi Mac'de Çok Yüksek (veya Sessiz) mi? Bunu Nasıl Düzeltebilirim",
    description:
      "Discord oyununuzu gürültüyle dolduruyor ya da takım arkadaşlarınızı duyamayacak kadar sessiz. İşte Discord'un ses seviyesini macOS'daki diğer her şeyden bağımsız olarak nasıl kontrol edeceğiniz.",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discord'da Mac'da iki ses seviyesi sorunu var. Ya çok yüksek — oyun ve müzik üzerinden bildirim sesleri yükseliyor — ya da çok sessiz — oyun sesi üzerinden takım arkadaşlarınızı duyamıyorsun. Sorun şu ki macOS Discord'un sesini bağımsız olarak ayarlamanıza izin vermiyor. Diğer her şeyle aynı sistem kaydırıcısına kilitlenmiş.</p>

<h2>Discord'un dahili ses kontrolleri</h2>

<p>Discord'un birkaç dahili ses ayarı var. Dış çözümlere bakmadan önce, bunların konfigürasyonda olduğundan emin olun:</p>

<h3>Çıkış hacmi</h3>
<p>Discord → ayarları (dişli simgesi) → Ses ve Video bölümüne gidin. "Output Volume" kaydırıcısı, Discord'un size ne kadar yüksek ses verdiğini kontrol eder. Discord çok sessizse, %100 olduğundan emin olun. Çok gürültülüyse, buradan alçaltın.</p>

<p><strong>Sınırlama:</strong> Bu, Discord'un iç miksini kontrol eder, ancak Discord'un ses seviyesini değiştirmez <em>Diğer uygulamalara göre</em>. Oyununuz %80 sistem sesindeyse ve Discord da %80 ise, Discord'un dahili kaydırıcısını ayarlamak dengeyi değiştirir — ama yine de her şey için tek bir sistem sesine kilitlenmişsiniz.</p>

<h3>Kullanıcı başına hacim</h3>
<p>Bir ses kanalındaki herhangi bir kullanıcıya "Kullanıcı Sesi" → sağ tıklayın. Bireysel kullanıcıları %0'dan %200'e ayarlayabilirsiniz. Bu, bir kişi diğerlerinden daha yüksek sesli veya daha sessiz ise faydalıdır, ancak genel Discord ile diğer uygulamalar dengesini çözmez.</p>

<h3>Bildirim sesi</h3>
<p>Discord → Ayarları → Bildirimler. Belirli bildirim seslerini (mesaj, sağır et, sessiz bırakma, katıl/ayrılma) tek tek devre dışı bırakabilirsiniz. Bu, rahatsız edici seslerin sayısını azaltır ama sesini düşürmenize izin vermez — sadece açıp kapatabilirsiniz.</p>

<h2>Asıl sorun: sistem düzeyinde hacim dengesi</h2>

<p>Discord'un iç kontrolleri, Discord'un kendi karışımını ayarlar. Ama asıl sorun, Discord ile Mac üzerindeki diğer her şey arasındaki denge: oyununuz, müzikiniz, tarayıcınız. macOS hepsi için bir slider veriyor.</p>

<p>Discord'un sesini oyununuza göre ayarlamak için, uygulama başına ses kontrolü gerekiyor — ki macOS bunu doğal olarak sağlamaz.</p>

<h2>Bunu SoundDial ile düzeltin</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Discord'a menü çubuğunda kendi ses kaydırıcısını verir, diğer tüm uygulamalardan bağımsız. Discord'u tam istediğiniz seviyeye ayarlayın — %100 net sesli sohbet için, %40 ince arka plan için veya tamamen sessiz — oyuna, müziğe veya başka hiçbir şeye dokunmadan.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Discord'un sesini oyundan ve müzikten bağımsız olarak kontrol macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Yaygın kurulumlar</h3>

<p><strong>Discord ile Oyun Oynamak:</strong></p>
<ul>
  <li>Discord: %100 (takım arkadaşlarını her zaman net duyuyorum)</li>
  <li>Oyun: %40 (sürükleyici ama baskın değil)</li>
  <li>Spotify: %15 (hafif arka plan müziği)</li>
</ul>

<p><strong>Sesli sohbette takılmak:</strong></p>
<ul>
  <li>Discord: %80</li>
  <li>Tarayıcı/YouTube: %60</li>
  <li>Geri kalan her şey: normal</li>
</ul>

<p><strong>Odak çalışmaları (arka planda Discord):</strong></p>
<ul>
  <li>Discord: sessiz veya %10</li>
  <li>Spotify: %50</li>
  <li>Slack: %15</li>
</ul>

<p>Her birini bir <strong>Volume profili</strong> SoundDial ve tek tıklamayla geçiş yapıyor. Her aktivite değiştirdiğinizde altı kaydırıcıyı yeniden ayarlamak yok.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Mac Ses Çıkışını Hızlıca Nasıl Değiştiririm (Ayarlara Girmeden)",
    description:
      "Mac üzerinde hoparlör, kulaklık ve monitör arasında geçiş yapmak çok fazla tıklama gerektiriyor. İşte ses çıkış cihazınızı anında değiştirmenin daha hızlı yolları.",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>Kulaklıklarınızı çıkarıyorsunuz ve sesin hoparlörlere gitmesini istiyorsunuz. Ya da AirPods takıyorsunuz ve macOS yanlış cihazı seçiyor. Ya da bir toplantı odasına girersiniz ve konferans konuşmacısına geçmeniz gerekir. Her seferinde: Sistem Ayarları → Ses → Çıkış → kaydırma → tıklama. Bir klik alması gereken bir şey için çok fazla tıklama.</p>

<p>İşte Mac üzerinde ses çıkışını daha hızlı değiştirmenin tüm yolları — yerleşik kısayollardan tıklamayı tamamen ortadan kaldıran menü çubuğu araçlarına kadar.</p>

<h2>Yöntem 1: Ses simgesine seçici tıklayın</h2>

<p>Bu en hızlı yerleşik yöntemdir ve çoğu insan bundan habersizdir.</p>

<p>Bekle <strong>Option (⌥)</strong> ve menü çubuğundaki ses/ses simgesine tıklayın. Normal ses kaydırıcısı yerine, mevcut tüm çıkış cihazlarının listesini alıyorsunuz. İstediğin olanı tıkla. Bitti.</p>

<p>Menü çubuğunda ses simgesini görmüyorsanız, onu etkinleştirin: Sistem Ayarları → Kontrol Merkezi → Ses → "Her Zaman Menü Bar'da Göster" seçeneğini seçin.</p>

<p><strong>Sınırlama:</strong> Bu sadece çıkış cihazlarını gösteriyor — uygulama başına ses seviyesini ayarlayamazsınız veya bu menüden şu anda ne oynadığını göremezsiniz.</p>

<h2>Yöntem 2: Kontrol Merkezi</h2>

<p>Menü çubuğundaki Kontrol Merkezi simgesine (iki anahtarlı simge) tıklayın, →Ses bölümüne tıklayın → mevcut cihaz adını tıklayarak tüm mevcut çıkışları görün.</p>

<p><strong>Sınırlama:</strong> Bir yerine üç tıklama. Option ile ses simgesine tıklamaktan biraz daha yavaş.</p>

<h2>Yöntem 3: Sistem Ayarları kısayolu</h2>

<p>Sound'u en üst seviyedeki Sistem Ayarları yan çubuğuna sabitleyebilirsiniz, ancak yine de Çıkış sekmesine gidip bir cihaz seçmeniz gerekiyor. Hızlı değil.</p>

<h2>Yöntem 4: Klavye kısayolu (kurulum ile)</h2>

<p>macOS ses cihazlarını değiştirmek için yerleşik bir klavye kısayolu yok. Ancak, Automator veya Shortcuts kullanarak bir tane oluşturabilirsiniz:</p>
<ol>
  <li>Open Shortcuts uygulaması</li>
  <li>Shell betiği çalıştıran yeni bir kısayol oluşturun: <code>SwitchAudioSource -s "Cihaz Adı"</code> (gerektirir <code>switchaudio-osx</code> Homebrew'den komut satırı aracı)</li>
  <li>Kısayosaya klavye kısayolunu atayın</li>
</ol>
<p>Bu işe yarıyor ama Homebrew, komut satırı aracı ve cihaz başına manuel kurulum gerektiriyor. Çoğu kullanıcı için pratik değil.</p>

<h2>Yöntem 5: SoundDial'un yerleşik cihaz anahtarlayıcısı</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menü çubuğu açılır menüsünde bir çıkış cihazı seçicisi içerir — uygulama başına ses kaydırıcılarınızın yanında. SoundDial açmak için bir tıklama, cihazı değiştirmek için bir tıklama. Sistem ayarlarında araştırma yok.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial tek menü çubuğu panelinde ses çıkış cihazı anahtarı ve uygulama başına ses kontrolü ile" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial içinde cihaz değiştirmenin avantajı: çıkışınızı değiştirebilirsiniz <em>ve</em> Aynı panelde uygulama başına ses seviyelerini ayarlayın. AirPods'a geçin ve hemen Spotify'ı düşürerek çağrınızı güçlendirin — tüm bunlar popover'dan çıkmadan.</p>

<p>SoundDial's ile birleşince <strong>Hacim belleği</strong> özellik olarak, her çıkış cihazı kendi uygulama başına ses seviyelerini hatırlayabilir. Hoparlörlere geçtiğinizde "hoparlörler" ses dengesi geçerli. Kulaklıklara geçtiğinizde "kulaklık" dengeniz geçer. Manuel yeniden ayarlama yok.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Mac'de Ses Çatırdaması ve Patlamasını Düzeltin: Tam Rehber",
    description:
      "Mac sesi müzik, aramalar veya video oynatma sırasında çatırda, patlar veya takılar. İşte macOS ses hatalarının bilinen tüm nedenleri ve çözümleri.",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>Müzik dinliyorsunuz ve bir patlama sesi duyuyorsunuz. Sonra bir çatırtı. Sonra sesin bir saniyenin çok kısa bir kesintisi kesilip geri dönmesi gibi bir takılma oluyor. Sorun şarkı değil — Mac. macOS üzerindeki ses çatırtısı sinir bozucu derecede yaygın ve en az altı farklı nedeni var.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Bu rehber, Mac üzerinde ses çatırdaması, patlama ve takılma nedenlerini kapsıyor; yazılım çözümlerinden bilmeniz gereken tek donanım sorununa kadar.</p>

<h2>1. Core Audio'yu yeniden başlatın (hızlı çözüm)</h2>

<p>Ani ses çatırdamasının en etkili çözümü, macOS'nin ses daemonunu yeniden başlatmaktır. Terminali aç ve çalıştır:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Ses bir saniyeliğine kesiliyor ve yeniden başlıyor. Çoğu durumda, çatırdama hemen durur. Bu işe yarıyor çünkü coreaudiod — macOS üzerindeki tüm sesi yöneten süreç — uyku/uyanış döngülerinden, Bluetooth cihaz bağlantılarından veya uygulama çökmelerinden sonra bozulmuş bir duruma girebilir.</p>

<p>Eğer bu sorunu çözerse, çatırdama geçici bir daemon sorunundan kaynaklanıyordu. Eğer düzenli olarak geri gelirse, kalıcı çözümler için okumaya devam edin.</p>

<h2>2. CPU aşırı yüklenmesi</h2>

<p>Ses çatırtısı genellikle yüksek CPU kullanımıyla ilişkilidir. Mac'nin CPU'su maksimumda olduğunda, ses tamponlarını yeterince hızlı işleyemez, bu da patlama ve çatırdama gibi boşluklara neden olur.</p>

<p><strong>Kontrol edildi:</strong> Aktivite Monitörünü (Uygulamalar → Yardımcı Programlar) açın ve CPU sekmesine bakın. Eğer sürekli yüksek CPU kullanımı (%80+) görüyorsanız, muhtemelen bu sebep.</p>

<p><strong>Düzeltme:</strong> Gereksiz uygulamaları, özellikle çok sekmeli tarayıcılar, video editörleri veya VM'ler gibi kaynak yoğun olanları kapatın. Belirli bir süreç aşırı CPU kullanıyorsa, normal mi davranıyor yoksa yeniden başlatılması mı gerekiyor diye düşünün.</p>

<h2>3. Bluetooth ses sorunları</h2>

<p>Bluetooth, kablosuz kulaklık ve hoparlör kullanıcıları için en yaygın çatırdama kaynağıdır. Buna birkaç şey neden olabilir:</p>

<ul>
  <li><strong>Parazit:</strong> WiFi, USB 3.0 cihazları ve diğer Bluetooth cihazları ses bağlantınızı engelleyebilir. Yakınınıza yaklaşmayı Mac ya da parazit kaynaklarını ortadan kaldırmayı deneyin.</li>
  <li><strong>Kodek anahtarlama:</strong> Bir uygulama mikrofonunuzu etkinleştirdiğinde, macOS AAC'den SCO kodekine geçer. Bu geçiş kısa bir çatırdama veya patlama sesine neden olabilir.</li>
  <li><strong>Bluetooth tıkanıklığı:</strong> Aynı anda birden fazla Bluetooth cihazınız varsa, radyo zorlanabilir. Kullanmadığınız cihazları kapatın.</li>
</ul>

<p><strong>Düzeltme:</strong> Bluetooth'u Shift+Option tuşuna tutarak sıfırlayın, menü çubuğundaki Bluetooth simgesine tıklayarak ve "Bluetooth modülünü sıfırla" seçeneğini seçin (varsa). Alternatif olarak, cihazı Bluetooth ayarlarından kaldırıp yeniden eşleştirin.</p>

<h2>4. Örnekleme hızı uyumsuzluğu</h2>

<p>Eğer ses çıkış cihazınız çalılan sesten farklı bir örnekleme hızında çalışıyorsa, macOS gerçek zamanlı olarak yeniden örneklemek zorundadır. Bu yeniden örnekleme, özellikle daha düşük tampon boyutlarında artefaktlar getirebilir.</p>

<p><strong>Kontrol edildi:</strong> Ses MIDI Kurulumunu (Uygulamalar → Yardımcı Programlar) açın, çıkış cihazınızı seçin ve örnekleme hızını kontrol edin. Yaygın hızlar 44.1 kHz (CD kalitesi) ve 48 kHz (video/yayın standardı)dır.</p>

<p><strong>Düzeltme:</strong> Örnekleme hızını en yaygın kullanım alanınıza göre ayarlayın. Müzik için: 44.1 kHz. Video/yayın için: 48 kHz. USB ses arayüzü kullanıyorsanız, optimal örnekleme hızı ve tampon boyutu için dokümantasyonuna bakabilirsiniz.</p>

<h2>5. USB ses cihazı tamponu sorunları</h2>

<p>Harici USB ses cihazları (DAC'lar, ses arayüzleri, USB kulaklıklar) buffer boyutu sisteminizin mevcut yükü için çok küçükse çatırdamayabilir.</p>

<p><strong>Düzeltme:</strong> Audio MIDI Kurulumu'nda USB cihazınızı seçin ve tampon boyutunu artırmayı deneyin (eğer seçenek varsa). Logic, Ableton veya GarageBand gibi ses uygulamalarında, ses tercihlerinde I/O tampon boyutunu artırın. Daha büyük bir tampon, biraz daha fazla gecikme ama daha az ses hatası anlamına gelir.</p>

<h2>6. macOS güncelleme regresyonu</h2>

<p>Bazı macOS güncellemeler ses hataları getiriyor. Bu, neredeyse her büyük macOS yayınında yaşandı — Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia ve Tahoe'nun ilk çıkışından sonra ses çatırdaması bildirildi.</p>

<p><strong>Düzeltme:</strong> Apple'ın ses sorunlarını ele alan bir puan güncellemesi (örneğin 15.0.1, 15.1) yayınlayıp yayınlamadığını kontrol edin. Ayrıca Apple Geliştirici Forumları ve Reddit'i kontrol ederek diğer kullanıcıların aynı sorunu yaşayıp yaşamadığını öğrenebilirsiniz. Eğer bilinen bir macOS hataysa, genellikle bir veya iki puanlık sürüm içinde bir düzeltme gelir.</p>

<h2>7. Çekirdek uzantıları veya ses eklentileri</h2>

<p>Üçüncü parti ses sürücüleri, sanal ses cihazları veya ses eklentileri macOS'ın yerel ses yığınıyla çakışabilir. Bu özellikle, son macOS sürümlerinde kullanılmayan çekirdek uzantılarını (kexts) kullanan eski ses yazılımlarında yaygındır.</p>

<p><strong>Düzeltme:</strong> Üçüncü parti ses yazılımı yüklü olup olmadığını kontrol edin: Soundflower, BlackHole, Loopback veya eski ses arayüzü sürücüleri. Çatırdama durup durmadığını görmek için geçici olarak devre dışı bırakmayı veya kaldırmayı deneyin. Eğer varsa, macOS sürümünüzle uyumlu güncellenmiş sürümleri kontrol edin.</p>

<h2>Ses kalitesini SoundDial</h2>

<p>SoundDial donanım veya sistem seviyesinde çatırdamayı doğrudan çözmese de, sesi sorunu azaltacak şekilde yönetmenize yardımcı olabilir:</p>

<ul>
  <li><strong>Rakip ses kaynaklarını azaltın:</strong> Aktif olarak kullanmadığınız uygulamaları sessize atmak için SoundDial kullanın. Daha az eşzamanlı ses akışı, ses işleme üzerindeki CPU baskısını azaltır.</li>
  <li><strong>Sistem maksimumu yerine ses seviyesi artışı:</strong> Sistem sesini %100 çalıştırıyorsanız ve uygulamaları daha yüksek sesle basıyorsanız, ses yolu sınırlarında çalışıyor. Kullanım <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Uygulama başına yapılan artış, belirli uygulamaları %200'e çıkarırken sistem hacmini daha rahat 70-80% tutarken tutuyor. Bu, sistem çıkış seviyesinde bozulmayı azaltabilir.</li>
  <li><strong>Hızlı çıkış cihazı anahtarlama:</strong> Eğer çatırdama belirli bir çıkış cihazıyla ilgiliyse, SoundDial menü panelinden cihazları Sistem Ayarlarında gezinmeden değiştirmenizi sağlıyor.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Microsoft Teams Volume Çok Düşük Mac? İşe Yarayan Her Çözüm",
    description:
      "Teams üzerinden maksimum ses seviyesinde bile insanları zar zor duyabiliyor musun? İşte her sebep — Teams ayarlarından Bluetooth kodeklerine kadar — ve çağrı sesini %100'ün üzerine nasıl çıkarabileceğiniz.",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>Bir Teams toplantısındasın. İş arkadaşınız sunum yapıyor ama sesi üç oda öteden bir teneke kutudan geliyormuş gibi geliyor. Mac hacminiz %100'de. Takımların hacmi %100'de. Bulabildiğin her şeyi buldun. Hâlâ çok sessiz.</p>

<p>Microsoft Teams'te düşük ses sistemi, kurumsal ortamlarda en yaygın Mac ses şikayetlerinden biridir. Sebepler Zoom'dan farklı ve bazı düzeltmeler Teams'e özel. Hepsini gözden geçirelim.</p>

<h2>1. Teams'in ses ayarlarını kontrol edin</h2>

<p>Teams → Settings → Devices (veya yeni Teams'teki Settings → Audio Devices'te profil simgenize tıklayın.</p>
<ul>
  <li>Doğru olduğundan emin olun <strong>Konuşmacı</strong> cihaz seçiliyor — bağlantısı kesilen bir monitör veya aktif olmayan bir Bluetooth cihazı değil</li>
  <li>"Test görüşmesi yap" özelliğini kullanarak sesin makul bir ses seviyesinde çalıştığını doğrulayın</li>
  <li>"Gürültü bastırma"nın "Yüksek" olarak ayarlanmadığını kontrol edin — agresif gürültü bastırma algılanan ses sesini azaltabilir</li>
</ul>

<h2>2. Yeni Takımlar vs. Klasik Takımlar</h2>

<p>Microsoft, "Klasik Teams"i "New Teams" ile değiştirdi (farklı bir çerçeve üzerine kurulmuş). Yeni versiyon sesi farklı şekilde yönetiyor. Eğer yakın zamanda göç ettiyseniz:</p>
<ul>
  <li>Ses cihazı ayarları taşınmamış olabilir — hoparlör seçiminizi tekrar kontrol edin</li>
  <li>Yeni Teams, klasik versiyondan farklı davranabilen WebRTC ses işleme sistemi kullanıyor</li>
  <li>"Müzik modu"nu kapatmayı deneyin (Ayarlar → Ses Cihazları) — bu, Teams'in gelen sesi işleme şeklini değiştirir</li>
</ul>

<h2>3. Bluetooth kodek anahtarlaması</h2>

<p>AirPods veya Bluetooth kulaklık kullanıyorsanız, Teams çağrısına katılmak macOS yüksek kaliteli AAC kodekinden düşük kaliteli SCO kodekine geçmenizi zorlar (çünkü Teams mikrofonunuzu etkinleştirir). SCO, ses kalitesini ve ses seviyesini önemli ölçüde azaltır.</p>

<p><strong>Düzeltme:</strong> Mac dahili mikrofonunu veya USB mikrofonunu Bluetooth kulaklıkları çıkış cihazı olarak tutarken kullanın. Teams → Ayarlar → Mikrofon → Cihazlar bölümüne gidin ve "MacBook Pro Microphone"u (veya USB mikrofonunuz) seçin. Bu, codec anahtarını engeller ve kulaklıklarınızı yüksek kaliteli AAC modunda tutar.</p>

<h2>4. Çıkış cihazını ve macOS sesini kontrol edin</h2>

<p>Sistem ayarlarına gidin → ses → çıkışa gidin. Doğru cihazın seçildiğini ve çıkış hacminin maksimumda olduğunu doğrulayın. Ayrıca kontrol edin:</p>
<ul>
  <li><strong>Kulaklık Güvenliği:</strong> Sistem ayarları → ses → kulaklık güvenliği. "Düşük Gürültülü Ses" açıksa, kulaklık sesini sınırlıyor.</li>
  <li><strong>Denge:</strong> Sol-sağ denge kaydırıcısının ortada olduğundan emin olun — eğer eğikse, bir taraf daha sessiz olur.</li>
</ul>

<h2>5. Çekirdek Audio'yu Sıfırla</h2>

<p>macOS'nin ses daemonu, bazen uyku aşaması, cihaz değiştirme veya Teams güncellemelerinden sonra düşük çıkış seviyesinde takılı kalıyor. Terminali aç ve çalıştır:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Kısa bir kesintiden sonra ses yeniden başlar. Teams toplantısına yeniden katıl ve sesin iyileşip iyileşmediğini kontrol et.</p>

<h2>6. Takımların hacmini %100'ün üzerine çıkarın</h2>

<p>Eğer her ayar maksimuma ulaştıysa ve Teams hala çok sessizse — belki bir katılımcının mikrofonu kötü ya da toplantı sesi doğası gereği düşük — normalde izin verdiğinden fazlasını güçlendirmeniz macOS gerekir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Herhangi bir uygulamanın sesini artırmanıza izin verir <strong>200%</strong>, Microsoft Teams dahil. Teams'in kaydırıcısını %150 veya %180'e sürükleyin ve ses gerçek zamanlı olarak güçlendirilir. Only Teams daha yüksek sesle geliyor — müzik, tarayıcı ve diğer uygulamalar mevcut seviyelerinde kalıyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Microsoft Teams çağrı hacmini %100'ün üzerine çıkarmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial ayrıca ters soruna da yardımcı olur: Teams bildirim sesleri odaklanma süresince çok yüksekse, Teams'i %15'e düşürün veya tamamen sessize alın ve müziğiniz çalmaya devam eder. Bir tıklama ile sessizleştiriyor, bir tıkla sessizliği açıyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Mac Uygulamaya Göre Ses Kontrolü Nasıl Yapılır",
    description:
      "macOS her şey için bir ses kaydırıcısı veriyor. Her uygulama için bireysel ses kontrollerini nasıl alacağınız ve bunun düşündüğünüzden daha önemli olmasının nedenleri işte.",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>Görüntülü görüşmedesin. Gevşeklik sürekli çalıyor. Arka planda müzik çalıyor. Ses tuşuna uzanıyorsun ve — her şey daha da sessizleşiyor. Arama, müzik, bildirimler. macOS tam olarak bir ses kaydırıcısı var ve her şeyi aynı anda kontrol ediyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Windows, 2006'daki Vista'dan beri uygulama başına bir ses mikseri kullanıyor. Yirmi yıl sonra macOS hâlâ anlamıyor. Spotify'ı Zoom çağrınızı etkilemeden kısıtlamak istiyorsanız, Apple'ın sizin için yerleşik bir cevabı yok.</p>

<p>Bu rehber, uygulama başına ses kontrolünün ne olduğunu, neden macOS olmadığını ve nasıl alınacağını açıklıyor.</p>

<h2>Uygulama başına hacim gerçekten ne anlama geliyor?</h2>

<p>Uygulama başına hacim, Mac üzerindeki her uygulamanın kendi bağımsız ses kaydırıcısına sahip olması anlamına gelir. Spotify'ı %30'a ayarlayabilir, Zoom'u %100'de tutabilir, Slack'i tamamen sessiz bırakabilir ve Safari'yi %50'de bırakabilirsiniz — hepsini aynı anda tutarsınız. Bir uygulamanın ses seviyesini değiştirmek diğer uygulamalarda hiçbir etkisi yok.</p>

<p>Bu, sistem hacminden farklıdır; sistem tek bir ana kaydırıcıdır ve her şeyi orantılı olarak ölçeklendirir. Sisteminizin ses seviyesi %50 ve Spotify tam gaz oynuyorsa, sadece Spotify'ı kısıtlamak için uygulama başına mikser olmadan bir yol yok.</p>

<h2>Neden macOS bunu içermiyor</h2>

<p>Apple'ın ses mimarisi (Core Audio) framework seviyesinde uygulama başına ses kontrolünü kesinlikle destekliyor. macOS arayüzde bunu ortaya çıkarmamasının sebebi tasarım felsefesi seçimi: Apple daha az kontrol ve daha basit bir yüzeyi tercih ediyor. Bir kaydırıcı on ikiden daha basittir.</p>

<p>Sorun şu ki, birden fazla ses kaynağı dikkatiniz için yarışırken, "daha basit" artık daha basit olmayı bırakıyor. Her şeyi kontrol eden tek bir ses tuşu bir şey yaparken zariftir. Aynı anda müzik ve bildirimlerle aradığınızda aktif olarak düşmanca bir durum — çoğu insan aslında Mac böyle kullanıyor.</p>

<h2>Yerleşik çözümler (ve neden çalışmadıkları)</h2>

<h3>1. Uygulama içi ses kontrolleri</h3>
<p>Bazı uygulamaların kendi ses kaydırıcıları var — Spotify, VLC, QuickTime. Ama çoğu böyle bir şey yapmıyor. Slack ise bunu yapmıyor. Chrome sekmeleri ise yapmıyor. Sistem sesleri ise olmaz. Ve bir uygulamada bir kaydırıcı olsa bile, o uygulamayı açıp kaydırıcıyı bulup ayarlamak ve sonra yaptığın işe geri dönmek zorundasın. Bir olmalı olan bir şey için beş tıklama.</p>

<h3>2. Ses MIDI Kurulumu</h3>
<p>macOS Utilities klasöründe Audio MIDI Kurulumu da içerir. Ses cihazlarını yapılandırmanıza ve toplu cihazlar oluşturmanıza olanak tanıyor, ancak uygulama başına sıfır ses kontrolü yok. Bu bir cihaz yapılandırma aracı, mikser değil.</p>

<h3>3. Çoklu çıkış cihazları</h3>
<p>Teorik olarak farklı uygulamaları farklı çıkış cihazlarına yönlendirebilir (kulaklık veya hoparlör) ve bu cihazları ayrı ayrı kontrol edebilirsiniz. Ama bu ekstra donanım, uygulama başına manuel yönlendirme gerektirir ve aslında bağımsız ses seviyesi vermez — sadece cihaz başına bağımsız açma/kapatma sağlar.</p>

<h2>Uygulama başına bir ses mikseri nasıl çalışır</h2>

<p>Menü çubuğunda uygun bir uygulama başına ses mikseri bulunur ve şu anda ses üreten tüm uygulamaları gösterir. Her uygulamanın kendi kaydırıcısı var. Yukarı ya da aşağı sürüklüyorsunuz ve sadece o uygulamanın ses seviyesi değişiyor. Sistem hacmi dokunulmadan kalıyor.</p>

<p>Kapotun altında, macOS's kullanılarak bu yöntem işe yarıyor <strong>Core Audio Tap API</strong> (macOS 14'te tanıtıldı) veya her uygulamanın ses akışını bağımsız olarak kesmek ve hoparlörlere ulaşmadan önce genliğini ölçeklendirmek için eski sanal ses cihazı teknikleri vardı.</p>

<p>İyi bir mikseri kötü olandan ayıran temel özellikler:</p>

<ul>
  <li><strong>Gerçek zamanlı uygulama algılama.</strong> Yeni bir uygulama ses oynatmaya başladığında, mikserde otomatik olarak görünmeli. Manuel kurulum yok.</li>
  <li><strong>Uygulama başına sessiz bırak.</strong> Belirli bir uygulamayı kaydırıcı konumuna dokunmadan bir tıklamayla susturabilirsiniz.</li>
  <li><strong>Ses yükseltmesi.</strong> Bazı uygulamalar (sana bakıyorum, sessiz podcast oynatıcılar) maksimuma çok düşüyor. İyi bir mikser %100'ün üzerinde boost yapmanı sağlar.</li>
  <li><strong>Profiller.</strong> Farklı durumlar için farklı ses konfigürasyonları — müzik hariç her şey susturulmuş "Focus", Zoom ile %100 ve diğer her şey %20 ile "Meeting" ve oyun sesi güçlendirilmiş "Gaming".</li>
  <li><strong>Otomatik eğilmek.</strong> Bir aramaya başladığınızda müziği otomatik olarak kısın ve arama bitince geri getirin. Bu tek başına tüm uygulamaya değer.</li>
  <li><strong>Menü barının yerlisi.</strong> Menü çubuğunda olmalı, bir dock penceresinde değil. Başınızı kaldırıyorsunuz, ayarlıyorsunuz ve işe geri dönüyorsunuz. Uygulama değiştirme yok.</li>
</ul>

<h2>Buna kim ihtiyaç duyar</h2>

<p>Aynı anda birden fazla ses işi yapan herkes. Çoğu insan böyle bir durum böyle, ama özellikle:</p>

<ul>
  <li><strong>Uzaktan çalışanlar</strong> — çağrılar + müzik + bildirimler en yaygın çarpışmadır</li>
  <li><strong>Yayıncılar ve podcast yapanlar</strong> — izleyicinin ne duyduğuna karşı sizin duyduklarınız üzerinde kesin kontrol</li>
  <li><strong>Müzisyenler ve yapımcılar</strong> — DAW çıktısını referans izlerinden ve iletişim araçlarından izole etme ihtiyacı</li>
  <li><strong>Oyuncular</strong> — oyun sesi ile Discord ve müzik arasında sürekli bir denge kurgusu var</li>
  <li><strong>Bildirim yorgunluğu olan var mı?</strong> — sessiz bırak Slack, diğer her şeyi sakla</li>
</ul>

<h2>SoundDial</h2>

<p>Ben inşa ettim <strong>SoundDial</strong> Çünkü istediğim Mac ses mikseri yoktu. Menü çubuğunda duruyor, ses çıkaran tüm uygulamaları gösteriyor ve her birine kendi kaydırıcısını veriyor. Uygulama başına sessizleştirme, ses yükseltme, profiller ve arama başladığında müziğinizi düşüren otomatik alçaltma. Tek seferlik satın alma, 14+ macOS, abonelik yok.</p>

<p>Ses mikseri macOS yerleşik olmalıydı.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Mac Slack'i Nasıl Sessiz Edilir Ve Diğer Her Şeyi Sessizleştirmeden",
    description:
      "Slack bildirimleri odaklanmanızı sürekli bölüyor, ancak müziğinizi veya aramalarınızı susturmak istemezsiniz. İşte sadece Slack'i nasıl susturmak macOS.",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>Çalışmaya derin odaklanmışsın. Spotify mükemmel konsantrasyon çalma listesini çalıyor. O zaman — <em>Fırça Tık</em> — Gevşek sesler. Ve tekrar. Ve tekrar. Otuz saniyede üç kanal, iki DM ve bir başlık bildirimi. Slack'i sessiz bırakmak istiyorsun ama müziğini korumak istiyorsun. macOS şöyle diyor: her şeyi sessize al ya da hiçbir şeyi sustur.</p>

<p>Slack'in bildirim sesleri, Mac'daki uzaktan çalışanlar için en çok ses şikayetlerinden biri. Dikkatinizi çekmek için tasarlanmıştır, ki konsantre olmanız gerektiğinde tam da sorun budur.</p>

<h2>Seçenek 1: Slack'in kendisinde bildirimleri sessize alma</h2>

<p>Slack'in "Bildirimleri durdurma" özelliği var:</p>
<ol>
  <li>Slack'in yan panelindeki profil resminize tıklayın</li>
  <li>"Bildirimleri Durdur" seçeneğine tıklayın</li>
  <li>Bir süre seçin (30 dakika, 1 saat, 2 saat vb.)</li>
</ol>

<p>Bu, seçilen süre boyunca bildirim rozetlerini ve sesleri bastırır. Ayrıca "Kanalı sessiz et" → sağ tıklayarak kanalları sessize alabilirsiniz.</p>

<p><strong>Sınırlama:</strong> Bu, kanal başına ya hep ya hiç var. Slack yapamazsın <em>daha sessiz</em> — sadece tamamen sessiz ya da tamamen açık. Ve duraklamayı unutursanız, odaklanma seansınız bittikten sonra mesajları kaçırırsınız. Ayrıca uygulama açıkken Slack'in uygulama içi seslerini de bastırmıyor.</p>

<h2>Seçenek 2: macOS bildirimlerinde Slack seslerini kapatın</h2>

<p>Sistem ayarları → bildirimler → Slack bölümüne gidin. "Bildirim için ses çal" seçeneğini kapat.</p>

<p><strong>Sınırlama:</strong> Bu, tüm Slack bildirim seslerini kalıcı olarak kaldırır (tekrar açana kadar). Ve sadece macOS seviyesinde bildirimleri etkiliyor — Slack kendi ses motoruyla sesleri çaldırırsa, bildirim ayarı hepsini yakalamayabilir.</p>

<h2>Seçenek 3: Odak modu kullanın</h2>

<p>Sistem Ayarları → Focus'ta "Focus" veya "Work" Focus modu oluşturun. Slack'i "Susturulmuş" listesine ekleyin. Focus modunu etkinleştirdiğinizde, Slack bildirimleri bastırılır.</p>

<p><strong>Sınırlama:</strong> Odak modları bildirimleri görsel ve işitsel olarak bastırıyor, ancak ince tanenli ses kontrolü sunmuyor. "Slack bildirimleri %10 seste açılıyor" diyemezsiniz — ya tamamen izin verilir ya da tamamen susturulur.</p>

<h2>Seçenek 4: Uygulama başına ses kontrolü (gerçek çözüm)</h2>

<p>Aslında istediğiniz basit: Slack'in sesini %10-15'e düşürürken diğer her şeyi normal seviyelerde tutun. Slack ping'leri dinlerseniz duyulabilir ama akışınızı kesmezler. Müzik tam sesle devam ediyor. Çağrılar tam sesle devam ediyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Slack'e kendi bağımsız ses kaydırıcısı verir. Size uygun seviyeye ayarlayın — ya da tek tıklamayla tamamen sesinizi kapatın. Slack'e tekrar dikkat etmeye hazır olduğunda, onu açın ve ses seviyesi eskisi haline döner.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Slack sessiz ve Spotify normal ses seviyesinde oynatırken macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>İdeal Slack iş akışı</h3>
<ul>
  <li><strong>Odaklanma süresi:</strong> %10'da gevşek ya da susturulmuş. Spotify %40'a sahip. Kesinti yok.</li>
  <li><strong>Kullanılabilir zaman:</strong> Slack %40'da. Bildirimler ürkütmeden fark edilir.</li>
  <li><strong>Toplantı zamanı:</strong> Slack sönüyor. %100 zoom yapın. Geri kalanını otomatik eğilme yapıyor.</li>
</ul>

<p>Bunların her birini bir <strong>Volume profili</strong> SoundDial ve tek tıklamayla aralarında geçiş yapıyor. Daha da iyisi, otomatik ördülme kullanın — bir çağrı başladığında, SoundDial otomatik olarak her şeyi (Slack dahil) düşürür ve arama bittiğinde geri gelir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Farklı Durumlar İçin Ses Profilleri Nasıl Kurulur Mac",
    description:
      "Toplantılar, odaklanma çalışması, oyun ve rahatlama için farklı ses ayarları — tek tıklamayla değiştirilebiliyor. İşte macOS ses profillerinin nasıl çalıştığı.",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>Saat 9'da Zoom görüşmesiniz — Zoom'un %100, Spotify sessiz ve Slack sessiz olmasını istersiniz. Saat 10'da görüşme sona eriyor — Spotify %40, Slack %15, Zoom önemli değil. Öğle vakti oyun oynuyorsunuz — oyun %60, Discord %100, diğer her şey sessiz. Saat 18:00'de YouTube izliyorsunuz — tarayıcı %80, diğer her şey sessiz.</p>

<p>Her durumun farklı ideal ses konfigürasyonu vardır. Ve durum her değiştiğinde, beş ya da altı uygulamayı manuel olarak ayarlamanız gerekir. Ya da her kurulumu bir profil olarak kaydedip tek tıklamayla anahtar değiştirebilirsiniz.</p>

<h2>Hacim profilleri nedir?</h2>

<p>Ses profili, her uygulamanın ses ve sessiz durumunun kaydedilmiş bir anlık görüntüsüdür. Uygulamalarınızı istediğiniz gibi yapılandırıyorsunuz — Spotify'ı %30, Zoom %100, Slack (Slack sessiz bırakılmış) — sonra bunu "Work" veya "Meeting" gibi isimli bir profil olarak kaydediyorsunuz. Daha sonra profili uygularsınız ve her uygulama anında kaydedilen ses seviyesine geçer.</p>

<p>Bunu ses için ekran ön ayarları gibi düşünün: tıpkı "masa kurulumu" ve "sunum modu" için bir ekran düzenlemesi olduğu gibi, ses profilleri de her uygulamayı manuel ayarlamadan ses konfigürasyonları arasında geçiş yapmanızı sağlar.</p>

<h2>macOS ses profili yok</h2>

<p>macOS hangi bildirimlerin geçeceğini kontrol eden Odak modları (Rahatsız Etme, İş, Kişisel vb.) var. Ama Focus modları ses seviyesini kontrol etmiyor. Bildirim seslerini tamamen bastırabiliyorlar ama Spotify'ı %30, Zoom'u %100'e ayarlayamıyorlar. Uygulama başına ses konfigürasyonlarını kaydedip geri yüklemek için yerleşik bir yol yok.</p>

<h2>Profil kurmak SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dahili profil sistemi içerir. İşte nasıl kurulacağı:</p>

<h3>Profil oluşturma</h3>
<ol>
  <li>Menü çubuğundan SoundDial açın</li>
  <li>Her uygulamanın sesini belirli bir duruma göre istediğiniz şekilde ayarlayın</li>
  <li>Profil bölümündeki "+" butonuna tıklayın</li>
  <li>Bir isim verin (örneğin, "Toplantı") ve bir simge seçin</li>
  <li>Tamam — mevcut ses konfigürasyonun kaydedildi</li>
</ol>

<h3>Anahtarlama profilleri</h3>
<p>Kaydedilen profilleriniz SoundDial'ın açılır menüsünde butonlar olarak görünüyor. Bir tane tıklarsanız her uygulama anında o profilde kaydedilen hacimlere geçer. Bir tıklama, beş veya altı manuel ayarın yerini alır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial ses profilleri — macOS üzerinde Toplantı, Focus ve Chill modları arasında tek tıklamayla geçiş yapmak" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Örnek profiller</h3>

<p><strong>Buluşma</strong></p>
<ul>
  <li>Zoom / Teams: %100</li>
  <li>Spotify: susturulmuş</li>
  <li>Gevşeklik: kısık</li>
  <li>Tarayıcı: sessiz</li>
</ul>

<p><strong>Odak Çalışmaları</strong></p>
<ul>
  <li>Spotify: %35</li>
  <li>Slack: %10</li>
  <li>Posta: susturuldu</li>
  <li>Tarayıcı: %50</li>
</ul>

<p><strong>Oyun</strong></p>
<ul>
  <li>Maç: %60</li>
  <li>Discord: %100</li>
  <li>Spotify: %20</li>
  <li>Geri kalan her şey: susturulmuş</li>
</ul>

<p><strong>Sakin ol</strong></p>
<ul>
  <li>Spotify: %70</li>
  <li>Tarayıcı: %60</li>
  <li>Bildirimler: %20</li>
</ul>

<h3>Profillerin güncellenmesi</h3>
<p>Tercih ettiğiniz ses seviyeleri zamanla değişirse, sadece kaydırmaları ayarlayın ve profili güncelleyin. Bir dahaki uygulamada yeni ayarları kullanıyor.</p>

<h2>Profiller + otomatik eğilme = tam otomatik</h2>

<p>Profilleri SoundDial'nin otomatik eğiltme özelliğiyle birleştirdiğinizde, neredeyse hiç ses seviyesine dokunmanıza gerek kalmaz. Sabah "Odaklanma İşi" profilinizi uygulayın. Bir çağrı geldiğinde, otomatik eğilme uygulaması hariç her şeyi düşürüyor. Görüşme bittiğinde, her şey profil seviyenize döner. Günün sonunda, tek tıklamayla "Chill" seçeneğine geçin.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Zoom Çağrı Sığırı Çok Düşük Mac? Nasıl Güçlendirilir",
    description:
      "Zoom'da en yüksek seste bile insanları zar zor duyabiliyorsun. İşte her çözüm — Zoom ayarlarından, uygulama başına ses mikseriyle çağrı sesini %100'ün üzerine çıkarmaya kadar.",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>Zoom görüşmesindesin. Diğer kişi konuşuyor ama sesi zar zor duyuluyor. Mac hacminiz maksimumda. Zoom'un hoparlör sesi maksimumda. Ekranına yaslanıyorsun, duymaya çalışıyorsun. Bu kadar zor olmamalı.</p>

<p>Düşük Zoom çağrı hacmi son derece yaygındır ve bunun birden fazla nedeni vardır. Basit ayarlar kontrollerinden Zoom'un sesini normal sınırın ötesine çıkarmaya kadar her çözümü gözden geçirelim.</p>

<h2>1. Zoom'un ses çıkış ayarlarını kontrol edin</h2>

<p>Zoom → ayarlarını açın → Ses. "Konuşmacı" bölümünde mutlaka şunları edin:</p>
<ul>
  <li>Doğru çıkış cihazı seçilir (aktif olmayan bir monitör veya bağlantısı kesilen cihaz değil)</li>
  <li>Hoparlör ses kaydırıcısı maksimumda</li>
  <li>Test sesini net duyabildiğinizi doğrulamak için "Test Speaker"a tıklayın</li>
</ul>

<p>Test tonu da sessizse, sorun Zoom ile hoparlörleriniz arasında — aşağıdaki düzeltmelere devam edin. Test tonu iyiyse ama gerçek çağrılar sessizse, diğer katılımcının mikrofon sorunu muhtemelen vardır.</p>

<h2>2. Mac çıkış cihazını kontrol edin</h2>

<p>Sistem ayarlarına gidin → ses → çıkışa gidin. Doğru cihazın seçildiğinden emin olun. Yakın zamanda kulaklık, ekran veya Bluetooth cihazlarını bağladıysanız/çıkardıysanız, macOS otomatik olarak beklenmedik bir çıkışa geçmiş olabilir.</p>

<h2>3. Zoom'un otomatik ses ayarını devre dışı bırakın</h2>

<p>Zoom'da "Mikrofon sesini otomatik olarak ayarla" (Ayarlar → Ses) ayarı vardır ve bu da bazı konfigürasyonlarda algılanan çıkış seviyelerini etkileyebilir. Devre dışı bırakmayı ve tekrar test etmeyi dene.</p>

<h2>4. Arka plan gürültüsü bastırmayı (geçici olarak) devre dışı bırakın</h2>

<p>Zoom'un gürültü bastırıcı özelliği, arka plan gürültüsünü agresif şekilde filtreler — ancak bunu yaparken, özellikle sessiz ortamlarda karşı tarafın sesinin algılanan yüksekliğini bazen azaltabilir. "Arka plan gürültüsünü bastır" seçeneğini "Yüksek" yerine "Düşük" veya "Otomatik" olarak ayarlamayı deneyin.</p>

<h2>5. Bluetooth kodekini kontrol edin</h2>

<p>AirPods veya Bluetooth kulaklık kullanıyorsanız, Zoom çağrısına katılmak macOS yüksek kaliteli AAC kodekinden düşük kaliteli SCO kodekine geçmeye zorluyor (çünkü Zoom mikrofonunuzu kullanıyor). SCO, ses kalitesini düşürür ve çağrı sesini daha sessiz ve sıkıştırılmış hale getirebilir.</p>

<p><strong>Düzeltme:</strong> Ayrı bir mikrofon (dahili Mac mikrofon veya USB mikrofon) kullanın, çıkış cihazı olarak AirPods kullanın. Bu, codec anahtarını engeller — AirPods AAC modunda kalır, daha iyi ses kalitesi ve ses seviyesi sağlar.</p>

<h2>6. Çekirdek Sesin Sıfırlanması</h2>

<p>macOS'nin ses daemonu, özellikle uyku/uyanış veya cihaz anahtarlamalarından sonra çıkış seviyelerinin azaldığı bir duruma giriyor. Terminali aç ve çalıştır:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Ses kısa bir kesintiden sonra yeniden başlayacak. Zoom görüşmesine yeniden katıl ve ses seviyesinin iyileşip iyileşmediğini kontrol et.</p>

<h2>7. Zoom'un sesini %100'ün üzerine çıkar</h2>

<p>Yukarıdaki her şeyi denediyseniz ve Zoom hâlâ çok sessizse, sorun Zoom'un ses çıkışının kurulumunuz için yeterince yüksek olmaması olabilir. Bazı katılımcıların mikrofonları sessiz ve Zoom sinyallerini güçlendirmek için sadece sınırlı.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Herhangi bir uygulamanın sesini artırmanıza izin verir <strong>200%</strong> — Zoom dahil. Bir katılımcı çok sessizse, Zoom'un kaydırıcısını %150 veya %180'e çekin. Ses sinyali Zoom'un dahili maksimumunun ötesine kadar yükseltiliyor, böylece en sessiz sesler bile duyulabilir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial video görüşmeleri sırasında daha net ses için Zoom çağrı sesini %180'e çıkarmak Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Temel avantaj: Zoom'u güçlendirmek başka hiçbir şeyi etkilemiyor. Müzikleriniz, bildirimleriniz ve diğer uygulamalar mevcut seviyelerinde kalır. Sadece Zoom daha yüksek sesle konuşuyor.</p>

<p>Bu aynı zamanda <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong>, ve diğer herhangi bir arama uygulaması. Duyabiliyorsan, SoundDial güçlendirebilirsin.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Spotify'ı Diğer Her Şeyi Düşürmeden Nasıl Düşürülür Mac",
    description:
      "Spotify'ı arka plan müziği olarak istersiniz ama ses tuşlarıyla kısmak aramanızı ve diğer her şeyi daha sessiz hale getirir. İşte çözüm.",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>Çalışıyorsun. Spotify arka plan müziği çalıyor. Biraz fazla gürültülü — podcast'le başka bir sekmede rekabet ediyor ya da odaklanmayı zorlaştırıyor. Ses düşürme tuşuna basıyorsunuz. Spotify daha sessiz hale geliyor. Ama diğer her şey de öyle — Zoom görüşmeleriniz, bildirim sesleriniz, tarayıcı sesleri. Her şey daha sessizdi. İstediğin bu değildi.</p>

<p>Bu, macOS bir ses kaydırıcısı olduğu için olur. Ses tuşuna basın ve <em>Sistem hacmi</em>, bu da her uygulamayı eşit ölçeklendiriyor. Yerleşik kontrollerle "sadece Spotify'ı düşür" demenin bir yolu yok.</p>

<h2>Çözüm: Spotify'ın uygulama içi hacmi</h2>

<p>Spotify'ın uygulamanın sağ alt köşesinde (veya oynatıcının altında) kendi ses kaydırıcısı var. Bunu sistem hacminden bağımsız olarak düşürebilirsiniz. Sisteminiz %80 ve Spotify'ın kaydırıcısı %30 ise, Spotify %24 oynuyor, diğer her şey %80 seviyesinde kalır.</p>

<p><strong>Sorun:</strong> Spotify penceresine geçmeli, kaydırıcıyı bulmalı, ayarlamalı ve sonra yaptığın işe geri dönmen gerekiyor. Ve Spotify'ın kaydırıcısı küçük, belirsiz ve yüzde göstermiyor — sadece görsel bir çubuk. Bir toplantıdaysanız ve müziğinizi hızlıca düşürmeniz gerekiyorsa, başka bir uygulamada küçük bir kaydırıcıyla uğraşmak ideal değildir.</p>

<h2>Gerçek çözüm: uygulama başına ses kontrolü</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Menü çubuğunda her uygulama için bir ses kaydırıcısı yerleştirir. Spotify'ı başka hiçbir şeyi etkilemeden düşürmek için:</p>

<ol>
  <li>Menü çubuğundaki SoundDial simgesine tıklayın</li>
  <li>Listede Spotify'ı bulun</li>
  <li>Kaydırıcısını aşağı sürüklin</li>
</ol>

<p>Bitti. Spotify daha sessiz. Zoom değişmedi. Bildirimler değişmemiştir. Geri kalan her şey değişmedi. Mevcut uygulamanızdan ayrılmadınız — menü çubuğu tam bulunduğunuz yerde açılıyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Spotify sesini bağımsız olarak düşürürken diğer uygulamaları tam seste tutmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Daha da iyisi: profil olarak kaydedin</h2>

<p>Çalışırken düzenli olarak Spotify'ın arka plan seviyesinin daha düşük olmasını istiyorsanız, tercih ettiğiniz ses kurulumunu profil olarak kaydedin. Spotify %25, Zoom %100 ve Slack %15 ile "İş" profili oluşturun. Bir dahaki işe oturduğunuzda, her uygulamayı ayrı ayarlamak yerine profili tek tıklamayla uygulayın.</p>

<h2>Daha da iyisi: çağrılar sırasında otomatik eğilme</h2>

<p>SoundDial bir çağrıya katıldığınızda Spotify'ı otomatik olarak düşürebiliyor. Ayarlarda otomatik eğilmeyi etkinleştir, arka plan sesini ne kadar azaltacağınızı seçin (varsayılan %30), SoundDial geri kalanını halleder. Müziğiniz çağrı başladığında eğilip bittiğinde geri geliyor. Hiç manuel ayar yok.</p>

<p>Bu macOS doğal olarak desteklemesi gereken iş akışı bu: "Spotify bu seviyede, diğer her şey o seviyede." Apple bunu yapmadığı için, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boşluğu dolduruyor.</p>

<p>Tek seferlik satın alma <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Abonelik yok. macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "macOS Tahoe'da uygulama başına ses kontrolü var mı?",
    description:
      "macOS Tahoe (macOS 26) büyük güncellemeler getirdi, ama Apple sonunda bir ses mikseri ekledi mi? İşte cevap — ve şimdi uygulama başına ses kontrolü nasıl sağlanır.",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>Her yıl, Mac kullanıcısı bir sonraki macOS sürümünün nihayet bir ses mikseri içermesini umuyor. Her yıl hayal kırıklığına uğrarlar. macOS Tahoe (macOS 26) ile Apple, yeniden tasarlanmış bir arayüz, yeni sistem özellikleri ve büyük altyapı iyileştirmeleri sundu. Peki uygulama başına ses kontrolü eklediler mi?</p>

<h2>Kısa cevap: hayır</h2>

<p>macOS Tahoe'da dahili bir ses mikseri bulunmuyor. Sistem Ayarları, Kontrol Merkezi veya menü çubuğunda uygulama başına ses kontrolü yok. Ses deneyimi, önceki her macOS sürümüyle aynı: her şeyi aynı anda kontrol eden tek bir sistem ses kaydırıcısı.</p>

<p>Apple'ın Kontrol Merkezi hâlâ tek bir ses kaydırıcısı gösteriyor. Sistem Ayarları'ndaki Ses tercihleri hâlâ bir çıkış cihazı seçip bir ana ses seviyesini ayarlamanıza izin veriyor. Gizli bir özellik, gelişmiş seçenek yok ve kullanıcılara uygulama başına hacim açıklayan yeni bir API yok.</p>

<h2>Tahoe macOS un ses açısından neleri geliştirdiğini</h2>

<p>Uygulama başına ses seviyesi hâlâ eksik olsa da, Tahoe bazı ses ile ilgili iyileştirmeler getirdi:</p>

<ul>
  <li><strong>Bluetooth ses kararlılığı iyileştirildi</strong> — AirPods ve üçüncü parti kulaklıklarda daha az bağlantı kopması ve codec anahtarlama sorunu</li>
  <li><strong>Daha iyi uzamsal ses işleme</strong> — desteklenen içerik için geliştirilmiş kafa takibi ve daha doğru mekansal render</li>
  <li><strong>Core Audio performansı</strong> — profesyonel ses uygulamaları ve müzik prodüksiyonu için daha düşük gecikme</li>
</ul>

<p>Hiçbiri temel isteği karşılamaz: "Zoom'u etkilemeden Spotify'ı kısmama izin ver."</p>

<h2>Apple hiç ses mikseri ekleyecek mi?</h2>

<p>Apple'ın bu özelliği eklemeyi planladığına dair bir işaret yok. Hiçbir macOS beta, WWDC oturumu veya bilinen yol haritasında yer almamıştır. Apple'ın ses tasarım felsefesi sadeliği — her şey için tek bir kaydırıcıyı — tercih etmeye devam ediyor.</p>

<p>İronik olan ise, Apple'ın kendi Core Audio çerçevesinin süreç başına ses tıklama ve ses kontrolünü tamamen desteklemesidir. macOS 14'te tanıtılan Audio Tap API'si (Sonoma), geliştiricilerin uygulama başına ses araçları oluşturmasını daha da kolaylaştırdı. Apple altyapıyı inşa etti — sadece bunun için kullanıcı arayüzünü henüz oluşturmadılar.</p>

<h2>macOS Tahoe'da uygulama başına ses kontrolü nasıl yapılır</h2>

<p>Apple bunu geliştirmediği için, üçüncü taraf uygulamalar boşluğu dolduruyor. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Yerel bir macOS menü çubuğu uygulamasıdır ve size bir ses mikseri — her çalışan uygulama için bağımsız ses kaydırıcıları — sunar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial macOS Tahoe'da uygulama başına ses kontrolü sağlıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial macOS Tahoe ile tam uyumludur ve Apple'ın modern Core Audio Tap API'sini kullanır — üçüncü taraf ses sürücüsü veya çekirdek uzantısı gerekmez. macOS'nin güvenlik modeliyle sorunsuz çalışıyor ve diğer ses uygulamalarına müdahale etmiyor.</p>

<p>Ne elde edersiniz:</p>
<ul>
  <li><strong>Uygulama başına ses kaydırıcıları</strong> — Her uygulama için %0 ile %200 arasında</li>
  <li><strong>Uygulama başına sessiz bırak</strong> — herhangi bir uygulamayı susturmak için bir tıklama</li>
  <li><strong>Hacim profilleri</strong> — yapılandırmaları kaydet ve anında geçiş</li>
  <li><strong>Otomatik ördülme</strong> — aramalar sırasında arka plan sesi otomatik olarak azalır</li>
  <li><strong>Ses seviyesi artışı</strong> — sessiz uygulamaları %100'ün ötesine güçlendirmek</li>
  <li><strong>Hacim belleği</strong> — her uygulamanın yeniden başlatma arasındaki ses seviyesini hatırlar</li>
  <li><strong>Klavye kısayolları</strong> — mikseri aç ya da klavyeden sessiz bırak</li>
</ul>

<p>Tek seferlik satın alma <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Abonelik yok. macOS 14.2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Kulaklıkla Çağrı Alırken Müzik Nasıl Duyulur, Hoparlörden Çalar (Mac)",
    description:
      "Masaüstü hoparlörlerinizde Spotify ve AirPods'unuzda Zoom mı istiyorsunuz? macOS bunu kolaylaştırmıyor — işte gerçekten işe yarayan şey.",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>Yapmanız gereken makul bir şey var: AirPods'unuzdan Zoom görüşmesi yaparken masanızdaki hoparlörlerden müzik çalın. Müzik odayı dolduruyor, çağrı kulaklarında özel. Tamamen mantıklı.</p>

<p>macOS hayır diyor. Bir ses çıkış cihazı seçtiğinizde, <em>her</em> Uygulama bunu kullanıyor. Zoom için AirPods'a geçtim ve Spotify da AirPods'a geçiyor. Spotify için hoparlörlere geçiyor ve Zoom da hoparlörlere gidiyor. Her şey için bir çıkış cihazı. İstisna yok.</p>

<h2>Neden macOS bunu doğal olarak yapamıyor</h2>

<p>macOS tüm sesi tek seçilmiş bir çıkış cihazı üzerinden yönlendirir. Sistem Ayarları → Ses → Çıkış'ta "MacBook Pro Hoparlörler" veya "AirPods Pro" seçiyorsunuz ve her uygulama o cihaza ses gönderiyor. Uygulama başına yerleşik ses yönlendirmesi yok.</p>

<p>Bu tasarım basitlik açısından mantıklı — çoğu insan tüm seslerinin aynı yerden gelmesini ister. Ama farklı uygulamalar farklı çıktılarda kullanmak istediğinizde tamamen dağılır.</p>

<h2>Toplu cihaz çözüm</h2>

<p>macOS's Audio MIDI Kurulumu (Uygulamalar → Yardımcı Programlar'da bulunabilir) birden fazla çıkışı birleştiren bir "Toplu Cihaz" oluşturmanıza olanak tanır. Ancak, bir toplu cihaz <em>Aynı ses</em> Tüm birleşik çıktılara — hangi uygulamanın hangi çıkışa gideceğini seçmene izin vermiyor. Çok hoparlörlü kurulumlar için tasarlanmış, uygulama başına yönlendirme için değil.</p>

<h2>Çok çıkışlı cihaz çözüm</h2>

<p>Toplu cihazlara benzer şekilde, Audio MIDI Kurulumunda "Çok Çıkışlı Cihaz" oluşturabilirsiniz. Bu, aynı sesi aynı anda birden fazla çıkışa gönderir. Yine, her yerde aynı ses — Spotify'ı hoparlörlere ve Zoom'u kulaklıklara bu şekilde yönlendiremezsiniz.</p>

<h2>Gerçekten ne işe yarıyor: uygulama başına ses yönlendirme uygulamaları</h2>

<p>Farklı uygulamaları gerçekten farklı çıkış cihazlarına yönlendirmek için, her uygulamanın sesini kesip belirttiğiniz çıkışa gönderen üçüncü taraf bir ses yönlendirme uygulamasına ihtiyacınız var. SoundSource gibi uygulamalar (Rogue Amoeba'dan) bunu destekliyor — bireysel uygulamalara belirli çıkış cihazları atamanıza izin veriyorlar.</p>

<h2>Daha basit bir yaklaşım: hacim tabanlı ayrım</h2>

<p>Ana amacınız telefonunuzu müziğinizden net duymaksa (fiziksel olarak farklı cihazlara yönlendirmek yerine), uygulama başına ses kontrolü sorunu daha basit çözer.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Her uygulamaya kendi ses kaydırıcısı veriyor. Bir görüşme sırasında şunları yapabilirsiniz:</p>

<ul>
  <li>Zoom/Teams/FaceTime olarak ayarlanır <strong>100%</strong></li>
  <li>Spotify'ı aşağı indir <strong>20%</strong></li>
  <li>Diğer her şeyi sustur</li>
</ul>

<p>Kararın kristal net. Müzik ince bir arka plan. Cihaz değiştirme gerekmiyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Zoom'un tam seste ve Spotify'ın düşük seviyede gösterilmesi macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Daha da iyisi: SoundDial <strong>otomatik eğilme</strong> bunu otomatik olarak yapıyor. Bir çağrıya katıldığınızda, mikrofonunuzun aktive olduğunu algılar ve tüm arka plan uygulamalarını sizin ayarlarınız seviyesine (varsayılan %30) düşürür. Görüşme bittiğinde her şey normale döner. Manuel kaydırma ayarına gerek yok.</p>

<p>Çoğu insan için bu, gerçek sorunu — "Aramamı müziğim üzerinden duyamıyorum" — farklı uygulamaları farklı fiziksel cihazlara yönlendirme karmaşıklığı olmadan çözüyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac Volume Kendi Kendine Değişiyor: Nasıl Düzeltilir",
    description:
      "Mac'inizin sesi rastgele yükselir, düşer veya farklı bir seviyeye sıfırlanır. İşte bilinen tüm nedenler ve bunu nasıl durdurabileceğiniz.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>Mac sesinizi rahat bir seviyeye ayarlıyorsunuz. Bakışlarını kaçırdın. Geri döndüğünde durum farklı. Daha yüksek sesle. Daha sessiz. Maksimuma sıfırla. Sürekli oluyor ve nedenini anlayamıyorsunuz.</p>

<p>Bu, Mac ses sorunlarının en sinir bozucu olmasından biri çünkü rastgele hissettiriyor. Ama neredeyse hiç rastgele olmuyor — her zaman belirli bir tetikleyici vardır. İşte bilinen tüm nedenler ve her birinin nasıl düzeltileceği.</p>

<h2>1. Bluetooth cihaz yeniden bağlantısı</h2>

<p>Bu en yaygın sebep. Bir Bluetooth cihazı (AirPods, hoparlörler, kulaklık) bağlandığında veya kesildiğinde, macOS cihazın son kullandığı seviyeye ses seviyesini sıfırlar. Yani hoparlörlerinizde %30'daysanız ve AirPods'larınız otomatik bağlanıyorsa, ses seviyesi %80'e (son AirPods seviyesi) çıkabilir.</p>

<p><strong>Düzeltme:</strong> macOS çıkış cihazı başına ses seviyelerini hatırlıyor. Her geçiş yaptığınızda, istediğiniz yere ayarlayın. Zamanla, her cihaz için doğru seviyeler hatırlanacak. Bir Bluetooth cihazı beklenmedik şekilde otomatik bağlanıyorsa, Bluetooth → Sistem Ayarları'na gidin ve aktif olarak kullanmadığınız cihazları kaldırın.</p>

<h2>2. HDMI/DisplayPort çıkışı</h2>

<p>HDMI veya DisplayPort ile harici bir ekranı bağlamak veya ayırmak ses seviyesi değişikliklerine neden olabilir. Bazı ekranlar aynı zamanda ses çıkış cihazıdır ve macOS otomatik olarak onlara geçer. Ekran uyku uykusunda veya bağlantı kesildiğinde, macOS tekrar hoparlörlere geçer ve ses seviyesini sıfırlayabilir.</p>

<p><strong>Düzeltme:</strong> Sistem Ayarları'na → Ses → Çıkış'a gidin ve macOS ekranınızın hoparlörlerine otomatik geçiş yapıp yapmadığını kontrol edin. Ekranınızdan ses almak istemiyorsanız, tercih ettiğiniz çıkış cihazını manuel olarak seçin. Bazı ekranların ses çıkışı kendi OSD (ekran ekranı) ayarlarında devre dışı bırakılabilir.</p>

<h2>3. Bir uygulama sesi değiştiriyor</h2>

<p>Bazı uygulamalar sistem sesini programatik olarak ayarlar. Örneğin Zoom'da "Mikrofon sesini otomatik olarak ayarla" ayarı var ve bu da çıkış sesini etkileyebilir. Müzik uygulamaları, podcast uygulamaları ve bazı oyunlar da açılırken veya belirli olaylar gerçekleştiğinde ses seviyesini ayarlayabilir.</p>

<p><strong>Düzeltme:</strong> Sesle ilgili ayarlar için yeni açtığınız uygulamalara bakın. Zoom'da: Ayarlar → Ses → "Mikrofon sesini otomatik olarak ayarla" seçeneğini kaldır. Spotify'da: ses normalizasyonunun algılanan ses değişikliklerine neden olup olmadığını kontrol edin (Ayarlar → Oynatma → Ses Normalize).</p>

<h2>4. Klavye veya Dokunma Çubuğunda yanlışlıkla basmalar</h2>

<p>Eğer ses tuşlarına sahip bir klavyeniz varsa (her Mac klavyede var), yanlışlıkla basmak — ya da takılı bir tuş — ses seviyesini değiştirebilir. Eski MacBook Pro modellerindeki Touch Bar, özellikle ona dokunduğunda yanlışlıkla ses seviyesi değişikliklerine yatkın.</p>

<p><strong>Düzeltme:</strong> Bir ses tuşunun takılıp kalmadığını kontrol etmek için ses göstergesini izleyerek hiçbir şeye dokunmadan. Touch Bar modelleri için, Sistem Ayarları → Klavye → Touch Bar Ayarları'nda Touch Bar'ı özelleştirerek ses kaydırıcısını kaldırabilir veya daha az erişilebilir bir konuma taşıyabilirsiniz.</p>

<h2>5. macOS ses daemon sıfırlaması</h2>

<p>Uyku/uyandırma döngülerinden sonra, macOS'in ses daemonu (coreaudiod) bazen yeniden başlatılır ve ses seviyesini varsayılan veya önceden önbelleğe alınmış seviyeye sıfırlar. Bu, çeşitli macOS sürümlerinde görülen sistem seviyesinde bir hatadır.</p>

<p><strong>Düzeltme:</strong> Uyku uykusundan uyandıktan sonra ses düzenli olarak sıfırlanırsa, coreaudiod'u manuel olarak yeniden başlatmayı deneyin:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Sorun macOS güncellemelerde devam ederse, gelecekteki bir güncellemede çözülebilir. Bu arada, uygulama başına hacim seviyelerini hatırlayan ve geri kazandıran bir araç kullanmak bunu telafi edebilir.</p>

<h2>6. Erişilebilirlik ayarları</h2>

<p>Bazı Erişilebilirlik özellikleri sesi engelleyebilir. Beklenmedik ayarlar için Sistem Ayarları → Erişilebilirlik → Ses'i kontrol edin. Ayrıca VoiceOver veya Switch Control'un kısmen etkin olup olmadığını kontrol edin — bunlar beklenmedik ses davranışları yaratabilir.</p>

<h2>Uygulama başına hacimlerinizi SoundDial</h2>

<p>Sistem sesini değiştirmesini engelleyemeseniz bile, macOS kendi sisteminizi koruyabilirsiniz <em>Uygulama başına</em> hacim dengesi. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Her uygulamanın ses seviyesini bağımsız olarak hatırlar. Bir uygulama yeniden başladığında veya Mac uykudan uyandığında, SoundDial her uygulamayı kaydedilen hacme geri döndürür.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial yeniden başlatmalarda uygulama başına ses seviyelerini hatırlamak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bu, sistem sesi değişse bile, uygulama seviyesinde dengenizin tutarlı kalacağı anlamına gelir:</p>
<ul>
  <li>Spotify sistem ses değişikliğine rağmen %40'ta kalıyor</li>
  <li>Bluetooth'u yeniden bağladıktan sonra bile Zoom %100 kalıyor</li>
  <li>Slack yeniden başlatmadan sonra bile sessiz kalıyor</li>
</ul>

<p>Birleştirildiğinde <strong>Hacim profilleri</strong>, istediğiniz ses konfigürasyonunu anında geri getirebilirsiniz — bir tıklamayla tam istediğiniz yere geri dönebilirsiniz, bakmadığınız zamanlarda ne yaparsanız macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "2026'da Mac için En İyi Ses Mikseri Uygulamaları",
    description:
      "Her Mac uygulamanın kesin bir karşılaştırması, uygulama başına ses kontrolü sağlıyor. Özellikler, fiyatlandırma ve hangisinin gerçekten kullanmaya değer olduğu.",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS dahili ses mikseri yok. Bireysel uygulamaların sesini kontrol etmek istiyorsanız — Zoom'u etkilemeden Spotify'ı kısmak, her şeyi sessize almadan Slack'i sessize almak — üçüncü taraf bir uygulamaya ihtiyacınız var.</p>

<p>Birkaç seçenek var. Bu rehber, en dikkat çekici olanları özellikler, fiyatlandırma, uyumluluk ve gerçek kullanım kolaylığına göre karşılaştırıyor. Hiçbir bağlı bağlantı yok, sponsorlu seçim yok.</p>

<h2>Nelere dikkat etmelisiniz</h2>

<p>Uygulamaları karşılaştırmadan önce, Mac ses mikserinde önemli olan şunlar:</p>

<ul>
  <li><strong>Uygulama başına ses kaydırıcıları</strong> — her çalışan uygulama için bağımsız kontrol</li>
  <li><strong>Hacim aralığı</strong> — %100'ün altına VE %100'ün üzerine çıkabilir misin (boost)?</li>
  <li><strong>Uygulama başına sessiz bırak</strong> — bir uygulamayı ses seviyesine dokunmadan sustur</li>
  <li><strong>Profiller</strong> — kaydet ve ses konfigürasyonları arasında geçiş</li>
  <li><strong>Otomatik ördülme</strong> — Arama sırasında müziği otomatik olarak kısmak</li>
  <li><strong>Menü çubuğu entegrasyonu</strong> — uygulama değiştirmeden hızlı erişim</li>
  <li><strong>macOS uyumluluğu</strong> — en son macOS versiyonunda çalışıyor</li>
  <li><strong>Fiyatlandırma modeli</strong> — tek seferlik satın alma vs. abonelik</li>
</ul>

<h2>Seçenekler</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Yerel bir macOS menü çubuğu uygulaması, tek şeyi iyi yapmaya odaklanıyor: uygulama başına ses kontrolü.</p>

<ul>
  <li><strong>Uygulama başına hacim:</strong> Evet, %0 ile %200 arasında</li>
  <li><strong>Uygulama başına sessizleştirme:</strong> Evet, tek tıklama</li>
  <li><strong>Ses yükseltmesi:</strong> Evet, %200'e kadar</li>
  <li><strong>Profiller:</strong> Evet, özel isimler ve simgelerle</li>
  <li><strong>Otomatik eğilme:</strong> Evet, ayarlanabilir ördek seviyesiyle</li>
  <li><strong>Klavye kısayolları:</strong> Evet (mikser aç, hepsini sessiz et)</li>
  <li><strong>Çıkış cihazı anahtarlama:</strong> Evet, aynı panelden</li>
  <li><strong>Hacim belleği:</strong> Evet, her uygulamanın yeniden başlatma arasındaki ses seviyesini hatırlıyor</li>
  <li><strong>Fiyat:</strong> €14,99 tek seferlik satın alma (aboneliksiz) — SoundSource'un fiyatının yarısından daha az</li>
  <li><strong>Şunları gerektirir:</strong> macOS 14.2+</li>
  <li><strong>Mevcut adresler:</strong> Mac App Store (Apple tarafından incelenmiş, sandboxed, sistem sürücüsü yok)</li>
</ul>

<p>SoundDial, süreç başına temiz ses kontrolü için Apple'ın modern Core Audio Tap API'sini kullanır. Oyun hafif, tamamen menü çubuğunda çalışıyor ve karmaşık kurulum gerektirmiyor. 14,99 € ile SoundSource'tan (39 $) önemli ölçüde daha ucuz, ayrıca SoundSource'un eksik olduğu özellikler — ses profilleri ve otomatik alçaltma gibi özellikleri de içeriyor. Ve Mac App Store'da olduğu için Apple tarafından incelenmiş, sandbox'ta ve DMG indirmeden ya da sistem ses sürücüsü yüklemeden temiz bir şekilde kurulabiliyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial uygulama başına ses mikseri, tek uygulama ses kaydırıcılarını macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>SoundSource (Rogue Amoeba)</h3>

<p>SoundSource, en eski ve en köklü Mac ses araçlarından biridir. Güçlü ve özelliklerle zengin, güçlü kullanıcıları ve ses profesyonellerini hedefliyor.</p>

<ul>
  <li><strong>Uygulama başına hacim:</strong> Evet</li>
  <li><strong>Uygulama başına sessizleştirme:</strong> Evet</li>
  <li><strong>Ses yükseltmesi:</strong> Evet</li>
  <li><strong>Uygulama başına EQ:</strong> Evet (yerleşik ve AU eklenti desteği)</li>
  <li><strong>Uygulama başına çıkış yönlendirme:</strong> Evet (farklı uygulamaları farklı hoparlörlere gönderin)</li>
  <li><strong>Profiller:</strong> Yerleşik profil sistemi yok</li>
  <li><strong>Otomatik eğilme:</strong> Hayır</li>
  <li><strong>Fiyat:</strong> $39 USD (tek seferlik, büyük yükseltmeler ek satın alma gerektirebilir)</li>
  <li><strong>Şunları gerektirir:</strong> macOS 12+ (sistem ses sürücüsü yükler)</li>
</ul>

<p>SoundSource, uygulama başına EQ ve ses efekt zincirlerine ihtiyacınız varsa en güçlü seçenek. Sesi yakalamak için sistem düzeyinde bir ses sürücüsü (ACE) yükler; bu da onu çok yetenekli ama aynı zamanda daha müdahaleci kılar. 39 dolarlık fiyat çoğu alternatiften daha yüksek ve otomatik eğilme veya profil sistemi yok.</p>

<h3>Arka Plan Müziği (Ücretsiz, Açık Kaynak)</h3>

<p>Background Music, temel uygulama başına ses kontrolü sağlayan ücretsiz, açık kaynaklı bir uygulamadır. Ücretsiz olduğu için popüler bir seçim.</p>

<ul>
  <li><strong>Uygulama başına hacim:</strong> Evet</li>
  <li><strong>Uygulama başına sessizleştirme:</strong> Evet</li>
  <li><strong>Ses yükseltmesi:</strong> Hayır (sadece %0-100)</li>
  <li><strong>Otomatik duraklatma müziği:</strong> Evet (başka bir uygulama ses çaldığında müziği duraklatıyor)</li>
  <li><strong>Profiller:</strong> Hayır</li>
  <li><strong>Otomatik eğilme:</strong> Hayır (otomatik duraklatma otomatik eğilmekten farklıdır)</li>
  <li><strong>Fiyat:</strong> Ücretsiz</li>
  <li><strong>Şunları gerektirir:</strong> macOS 10.13+ (sanal bir ses cihazı yükler)</li>
</ul>

<p>Arka plan müziği, temel uygulama başına ses seviyesi için sağlam bir ücretsiz seçenektir. Ancak, yeni macOS sürümleri için tutarlı olarak güncellenmedi. Kullanıcılar, macOS Sequoia ve Tahoe'da ses hataları, sanal ses cihazının yüklenememesi veya uygulamanın bazı uygulamaları algılamaması gibi sorunları bildiriyor. Ayrıca sesi %100'ün üzerine çıkaramıyor, profili yok ve otomatik eğilme yok.</p>

<h3>eqMac</h3>

<p>eqMac öncelikle bir ekolayzer uygulamasıdır ve bazı ses karıştırma yetenekleri de içerir.</p>

<ul>
  <li><strong>Uygulama başına hacim:</strong> Limited (EQ'ya odaklanıyor, miksleme değil)</li>
  <li><strong>Sistem genelinde EQ:</strong> Evet, birden fazla grup seçeneğiyle</li>
  <li><strong>Ses yükseltmesi:</strong> Evet</li>
  <li><strong>Profiller:</strong> EQ ön ayarları (ses profilleri değil)</li>
  <li><strong>Otomatik eğilme:</strong> Hayır</li>
  <li><strong>Fiyat:</strong> Ücretsiz seviye + Pro abonelik</li>
  <li><strong>Şunları gerektirir:</strong> macOS 10.14+</li>
</ul>

<p>Birincil ihtiyacın sistem çapında eyarizleme (bas güçlendirme, tiz ayarı vb.) ise, uygulama başına ses kontrolü değilse daha iyi seçimdir. Ses miksleme yetenekleri, EQ özelliklerinden sonra ikincildir.</p>

<h2>Hızlı karşılaştırma tablosu</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Özellik</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Arka Plan Müziği</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Uygulama başına hacim</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Ses seviyesi artışı (%200)</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Hacim profilleri</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Otomatik ördülme</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Uygulama başına EQ</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Uygulama başına çıkış yönlendirme</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Klavye kısayolları</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sistem sürücüsü gerekli</td>
  <td style="text-align:center;padding:10px 12px;">Hayır</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
  <td style="text-align:center;padding:10px 12px;">Evet</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Fiyat</td>
  <td style="text-align:center;padding:10px 12px;">Bir kez</td>
  <td style="text-align:center;padding:10px 12px;">39 dolar</td>
  <td style="text-align:center;padding:10px 12px;">Ücretsiz</td>
</tr>
</tbody>
</table>

<h2>Hangisini seçmelisiniz?</h2>

<ul>
  <li><strong>Uygulama başına ses kontrolü, profiller ve otomatik alçaltma istiyorsanız:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — fiyatına göre en kapsamlı ses mikseri, profiller, otomatik eğilme gibi özelliklere sahip, daha pahalı alternatiflerin bile eksik olduğu özelliklere.</li>
  <li><strong>Uygulama başına EQ ve ses yönlendirmesine ihtiyacınız varsa:</strong> SoundSource — en güçlü seçenek, efekt zincirleri ve uygulama başlı çıkış yönlendirmesi isteyen ses profesyonellerine yönelik.</li>
  <li><strong>Ücretsiz ve temel bir şey istiyorsanız:</strong> Arka plan müziği — basit uygulama başına ses seviyesi için yeterli, ancak yeni macOS sürümlerinde uyumluluk sorunları yaşanabilir ve boost/profil/ducking yok.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube, Safari'de mi yoksa Chrome Mac'da çok sessiz? Anında Düzeltin",
    description:
      "Bazı YouTube videoları maksimum seste bile zar zor duyuluyor. İşte tarayıcı sesinin neden diğer uygulamalara göre daha sessiz olduğu ve Mac'de bunu %100'ün üzerine nasıl çıkarabileceğiniz.",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>Bir YouTube videosuna tıklıyorsunuz. Yaratıcı konuşuyor ama zar zor duyulmuyor. Sistem hacmi maksimumda. YouTube'un oynatıcı sesi maksimumda. Hoparlörlerine daha da yaklaşıyorsun. Hâlâ çok sessiz. Spotify'ı açıyorsunuz — müzik tam sesle patlıyor. Yani sorun hoparlörleriniz değil. Bu YouTube. Ya da daha doğrusu, video.</p>

<p>Bu inanılmaz derecede yaygın ve bir hata değil. Bazı YouTube videoları diğerlerinden daha düşük sesle mastering ediliyor ve macOS tarayıcı sesini seçici olarak yükseltmenin bir yolunu sunmuyor.</p>

<h2>Bazı YouTube videoları neden bu kadar sessiz</h2>

<h3>Video düşük sesle kaydedildi</h3>
<p>Her yaratıcının profesyonel ses ekipmanı yoktur. Bir odanın karşısından dizüstü bilgisayar mikrofonuyla kaydedilen bir video, düzgün bir kondenser mikrofonla kaydedilen videodan çok daha sessiz olur. YouTube bir dereceye kadar sesi normalleştiriyor ("yükseklik normalizasyonu" -14 LUFS'yi hedefliyor), ancak bu çok sessiz kaynak sesi tamamen telafi etmiyor.</p>

<h3>YouTube'un gürültü normalizasyonu</h3>
<p>YouTube otomatik olarak video sesini ayarlıyor, böylece yüksek ve sessiz videolar yaklaşık aynı seviyede oynanıyor. Yüksek sesli videolar için bu, onları kısmak anlamına gelir. Sessiz videolar için ise onları yükseltmek anlamına gelir — ama sadece belli bir noktaya kadar. Kaynak ses çok sessizse, normalleştirme sadece belli bir şey yapabilir ve gürültü yaratır.</p>

<h3>Tarayıcı sesi macOS ikinci sınıf bir vatandaştır</h3>
<p>Safari ve Chrome, sesi özel medya uygulamalarından farklı şekilde yönetiyor. Kendi ses tavnı olan tarayıcının ses motoru üzerinden çıkış yapıyorlar. Bir tarayıcı sekmesinin sesini macOS içinden yükseltmenin bir yolu yok. Tarayıcı, tek bir uygulama ve tek bir ses seviyesi — farklı seviyelerde on sekme ses oynatsa bile.</p>

<h2>Denemek için hızlı çözümler</h2>

<h3>YouTube'un oynatıcı sesini kontrol et</h3>
<p>YouTube oynatıcıda hoparlör simgesinin üzerine gelin ve kaydırıcının maksimum konumda olduğundan emin olun. Bunu yanlışlıkla aşağı çekmek kolaydır ve sistem hacminden bağımsız olarak sıfırlanır.</p>

<h3>YouTube'un ses yüksekliği normalizasyonunu devre dışı bırakın</h3>
<p>YouTube, sesliliği normalleştirmek için kullanıcıya yönelik bir anahtar sunmuyor. Ancak bazı tarayıcı eklentileri bunu aşabilir. Tarayıcınızın uzantı mağazasında "YouTube ses normalizatoru" veya "YouTube ses artırıcı" diye arama yapın.</p>

<h3>Farklı bir tarayıcı deneyin</h3>
<p>Safari ve Chrome sesi farklı şekilde yönetiyor. Bir video bir tarayıcıda çok sessizse, diğerini deneyin. Özellikle Chrome sesi ayrı bir süreç ("renderer") üzerinden yönetir, bu da bazen daha düşük çıkışa yol açabilir.</p>

<h2>Gerçek çözüm: tarayıcı sesini %100'ün üzerine çıkarmak:</h2>

<p>Temel sorun, macOS belirli bir uygulamanın hacmini %100'ün üzerine çıkarmanıza izin vermemesi. Tarayıcınız maksimumda ama "maksimum" yeterince yüksek değil.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Bu sorunu, Safari ve Chrome dahil her uygulamaya %0'dan %0'a çıkan bağımsız bir ses kaydırıcısı sunarak çözüyor <strong>200%</strong>. Bir YouTube videosu çok sessizse, tarayıcınızın kaydırıcısını %150 veya %180'e sürükleyin. Ses, diğer uygulamaları etkilemeden gerçek zamanlı olarak güçlendirilir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial sessiz YouTube videoları için Safari tarayıcı sesini %180'e yükseltmek Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bu özellikle faydalı çünkü:</p>
<ul>
  <li><strong>Anında.</strong> Menü çubuğu simgesine tıklayın, kaydırıcıyı sürükleyin. Tarayıcı eklentisi yüklemenize veya herhangi bir ayarı değiştirmenize gerek yok.</li>
  <li><strong>Uygulama başına yapılıyor.</strong> Chrome'u yükseltmek Spotify'ı daha yüksek sesli yapmaz. Her uygulama bağımsız kalıyor.</li>
  <li><strong>Her tarayıcıda çalışıyor.</strong> Safari, Chrome, Firefox, Arc, Brave — eğer Mac üzerinde bir uygulama ise, SoundDial kontrol edebilir.</li>
  <li><strong>%200'e kadar çıkıyor.</strong> Normal ses tavanı iki katına çıkar. En sessiz video bile duyulabilir hale geliyor.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac Kulaklıkta Bildirim Çok Yüksek Geliyor? İşte çözüm",
    description:
      "Slack ping'leri ve macOS uyarıları kulaklıkta acı verici derecede yüksek sesle çalıyor, müziğiniz ise sorun yaşamıyor. İşte bildirim haciminin neden farklı olduğu — ve bunu nasıl kontrol edeceğiniz.",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>Kulaklık takıyorsun, müzik dinliyorsun ve rahat, %40 sesle dinliyorsun. Bir Slack bildirimi açılıyor. <em>DING.</em> Müziğinizle karşılaştırıldığında sağır edici derecede yüksek. Kulakların çınlıyor. Kulaklıklarını koparıyorsun.</p>

<p>Bu, macOS bildirimlerin hacmini medya ile ayrı ayrı kontrol etmemenize izin vermediği için oluyor. Müziğiniz rahat bir seviyede olabilir, ancak uyarı sesleri — Slack pingleri, Posta bildirimleri, Takvim hatırlatıcıları macOS sistem sesleri — sistem sesine göre tam yoğunlukla yükselir.</p>

<h2>Bildirimler neden müzikten daha yüksek ses çıkarıyor</h2>

<p>Bildirim sesleri, dikkatinizi çekmek için tasarlanmış kısa ve keskin ses patlamalarıdır. Tasarım gereği yüksek zirve hacmi var. Buna karşılık, müzik geniş bir dinamik aralığa sahiptir — daha sessiz pasajlar, daha yüksek pasajlar ve uzun dinleme için tasarlanmış genel bir ustalık seviyesi.</p>

<p>Sisteminizin sesi %40 olduğunda, müziğiniz mastering seviyesinin %40'ında durur — bu da kulaklıklarınızda rahat bir 60-70 dB olabilir. Ancak %40 sistem sesiyle bildirim dingi yine de 80+ dB'ye ulaşabilir çünkü bildirim ses dosyası çok daha yüksek zirve seviyesinde mastere ediliyor. Sistem hacmi her ikisini de yüzde olarak eşit ölçeklendiriyor, ancak başlangıç seviyeleri çok farklı.</p>

<p>Kulaklıklarda ise bu daha kötü. Ses doğrudan kulak kanalına gidiyor ve dağılacak yer yok, bu yüzden sessiz müzik ile keskin bir bildirim pingi arasındaki algılanan ses farkı daha da artıyor.</p>

<h2>Bildirim sesini azaltmanın yerleşik yolları</h2>

<h3>Uyarı sesini azalt</h3>
<p>macOS ayarlarda ayrı bir "Uyarı ses" kaydırıcısı var. Ziyaret edin <strong>Sistem Ayarları → Ses</strong> ve <strong>Uyarı hacmi</strong> Slider. Bu, sistem seslerinin ve uyarıların seviyesini ana ses seviyesinden ayrı olarak kontrol eder.</p>
<p><strong>Sınırlama:</strong> Bu sadece macOS sistem uyarılarını (hata bip sesleri ve çöp sesleri gibi) etkiler. Slack, Discord veya Teams gibi kendi ses motorlarıyla kendi seslerini çalan uygulamalardan gelen bildirim seslerini etkilemez.</p>

<h3>Uygulama başına bildirim seslerini devre dışı bırak</h3>
<p>Ziyaret edin <strong>Sistem Ayarları → Bildirimler</strong>, çok yüksek sesli olan uygulamayı seçin ve "Bildirimler için ses çal" seçeneğini kapatın. Bu, uygulamanın bildirimlerini tamamen susturuyor.</p>
<p><strong>Sınırlama:</strong> Ya hep ya hiç. Slack bildirimleri yapamazsınız <em>daha sessiz</em> — sadece tamamen açık veya tamamen kapalı. Ve ekrana bakmadan bir şey olduğunu bildiren ses sisyonunu kaybediyorsunuz.</p>

<h3>Odak modlarını kullanın</h3>
<p>Odaklanma modları (Rahatsız Etme, Çalışma vb.) tüm veya seçilmiş uygulamalardan gelen bildirim seslerini engelleyebilir. Bu derin odaklanma seanslarında işe yarıyor ama tüm gün pratik değil — önemli bildirimleri kaçırırsınız.</p>

<h2>Gerçek çözüm: bildirim uygulaması sesini bağımsız olarak kontrol etmek</h2>

<p>Aslında istediğiniz basit: Slack'i müziğinizi daha sessiz yapmadan daha sessiz yapın. Bildirim uygulaması hacmini %15'e düşürürken Spotify'ı %50'de tutun. macOS bunu yapmana izin vermiyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Öyle. Her uygulamaya kendi ses kaydırıcısı veriyor, böylece Slack, Mail ve Calendar gibi bildirim ağırlıklı uygulamaları çok daha düşük ses seviyesine ayarlayabilir ve medya uygulamalarınızı rahat bir seviyede tutabilirsiniz.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Slack'i düşük sesle ve Spotify'ı normal ses seviyesinde gösteriyor — bağımsız bildirim kontrolü macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tipik bir kulaklık dostu kurulum</h3>
<ul>
  <li><strong>Spotify / Müzik</strong> — %50 (rahat dinleme seviyesi)</li>
  <li><strong>Slack</strong> — %15 (fark edilir ama şaşırtıcı değil)</li>
  <li><strong>Posta</strong> — %10 (ince ping sesi seni sarsamaz)</li>
  <li><strong>Takvim</strong> — %20 (fark edecek kadar, acı vermiyor)</li>
  <li><strong>Zoom / FaceTime</strong> — %90 (net çağrı sesi)</li>
  <li><strong>Tarayıcı</strong> — %40 (video oynatma için müzik seviyesine eşdeğer)</li>
</ul>

<p>Bunu SoundDial'de "Kulaklık" profili olarak kaydedin ve taktığınızda tek tıklamayla uygulayın. Masa başında çalışırken farklı oranlara sahip ayrı bir "Hoparlör" profili oluşturun.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Zoom'un Müziğinizi Düşürmesini Nasıl Durdurursunuz Mac",
    description:
      "Her Zoom görüşmesine katıldığınızda, müziğiniz ya düşüyor ya da kayboluyor. İşte neden böyle olduğunu ve aramalar sırasında neyin daha sessiz olduğunu nasıl kontrol edebileceğinizi — kendi şartlarınıza göre.",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>Zoom görüşmesine katılıyorsun. Spotify rahat bir ses seviyesiyle oynuyordu. Çağrı bağlanıyor ve — müziğiniz ya kayboluyor ya da neredeyse yok oluyor. Hiçbir şeye dokunmadın. Zoom (veya macOS) senin için müziğini sormadan düşürmeye karar verdi.</p>

<p>Bu insanları deli ediyor çünkü görünmez ve otomatik. Hiçbir şeyi susturmadın. Bir kaydırıcıyı ayarlamadınız. Sistemde bir şey müziğinizin daha sessiz olması gerektiğine karar vermiş ve bunu kontrol etmenin belirgin bir yolu yok.</p>

<p>İşte gerçekte olanlar ve kontrolü nasıl geri alacağınız.</p>

<h2>Zoom görüşmeleri sırasında müziğiniz neden daha da sessizleşiyor?</h2>

<p>İki olası neden vardır:</p>

<h3>1. Zoom'un yerleşik ses eğilmesi</h3>
<p>Zoom'un kendi ses işleme sistemi var ve bu da sisteminizdeki diğer sesleri etkileyebilir. Bazı konfigürasyonlarda Zoom, mikrofonunuzu etkinleştirdiğinde sistem sesini azaltır, böylece çağrı sesi daha net olur. Zoom'un ayarlarında bu her zaman belli olmuyor.</p>

<p>Zoom → Ayarları → Ses Kontrol Edin:</p>
<ul>
  <li>"Mikrofon sesini otomatik olarak ayarla" ayarını arayın ve devre dışı bırakmayı deneyin</li>
  <li>"Arka plan gürültüsünü bastır" seçeneğini kontrol edin — bu sesi işler ve algılanan ses seviyesini etkileyebilir</li>
  <li>"Eşzamanlı yorum için ayrı ses cihazı kullanın" seçeneğinin işaretsiz olduğundan emin olun, ancak ihtiyacınız varsa</li>
</ul>

<h3>2. macOS kodek anahtarlama</h3>
<p>Zoom mikrofonunuzu etkinleştirdiğinde (özellikle AirPods gibi Bluetooth kulaklıklarla), macOS yüksek kaliteli AAC ses kodekinden düşük kaliteli SCO kodekine geçer. Bu kodek değişikliği genellikle genel ses seviyesini ve kalitesini düşürür. Bu özellikle Zoom'un suçu değil — Bluetooth üzerinden mikrofon kullanan herhangi bir uygulamada oluyor.</p>

<p>AirPods veya başka Bluetooth kulaklık kullanıyorsanız ve arama başladığında ses düşüyorsa, muhtemelen bu sebep.</p>

<h2>Yerleşik düzeltmeler</h2>

<h3>Kablolu kulaklık kullanın</h3>
<p>Bluetooth codec anahtarlama sorunu kablolu kulaklıklarda tamamen ortadan kalkıyor. USB-C kulaklık adaptörü veya dahili mikrofonlu kulaklık, AAC→SCO anahtarını tamamen ortadan kaldırır. Ses kalitesi görüşmelerden önce, sırasında ve sonrasında tutarlı kalır.</p>

<h3>Ayrı bir mikrofon kullanın</h3>
<p>AirPods'unuzun mikrofonu yerine Mac'ınızın dahili mikrofonunu (veya harici USB mikrofonunu) kullanırsanız, Bluetooth kodekini değiştirmeye gerek macOS kalmaz. Giriş cihazınızı Sistem Ayarları → Ses → Giriş'te yerleşik mikrofona ayarlayın, çıkış olarak AirPods'u tutun. Bu şekilde AirPods AAC modunda kalır ve ses değişmez.</p>

<h3>Zoom'un ses ayarlarını ayarlayın</h3>
<p>Zoom → Ayarlar → Ses'te otomatik mikrofon ayarını ve arka plan gürültüsü bastırmayı devre dışı bırakmayı deneyin. Bu özellikler diğer uygulamaların ses seviyelerine müdahale edebilir.</p>

<h2>Gerçek çözüm: kendi şartlarınıza göre otomatik eğilmek:</h2>

<p>Temel sorun, üzerinde hiçbir kontrolün olmamasıdır <em>Ne kadar</em> Müziğiniz çağrılar sırasında kısılır. Sistem bu kararı sizin yerinize veriyor ve genellikle çok agresif oluyor — müzik neredeyse sıfıra düşüyor, rahat bir arka plan seviyesi değil.</p>

<p>Aslında istediğiniz şey, ayarlanabilir otomatik eğiltme: "Bir çağrıdayken müziğimi %25'e düşür — sıfır değil, %50 değil, tam olarak %25."</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tam olarak bunu verir. Otomatik eğilme özelliği mikrofonunuzu izler ve arama başladığında arka plan sesini otomatik olarak ayarlar — ama <strong>Ördek seviyesini sen kontrol ediyorsun</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial otomatik düşük ayarları — Zoom aramaları sırasında ayarlanabilir ses azalması Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nasıl çalışır</h3>
<ol>
  <li>Tercih ettiğiniz ördek seviyesini belirlersiniz (%10 ile %80)</li>
  <li>Zoom görüşmesine katılıyorsunuz — mikrofonunuz aktif oluyor</li>
  <li>SoundDial çağrıyı algılar ve arka plan uygulamalarını yapılandırma seviyenize indirir</li>
  <li>Çağrı sesi tam seste kalıyor</li>
  <li>Telefonu kapatıyorsunuz — tüm uygulamalar önceki hacmine geri dönersiniz</li>
</ol>

<p>Zoom/macOS yaklaşımından fark:</p>
<ul>
  <li><strong>Seviyeyi sen seçiyorsun.</strong> %30 iyi bir varsayılan — müzik duyulur ama müdahale etmez. %10 (neredeyse sessiz) ile %80 (neredeyse azaltılmış) arasında ayarlama yapabilirsiniz.</li>
  <li><strong>Mükemmel şekilde yenilenir.</strong> Arama bittiğinde, her uygulama tam olarak olduğu yere geri dönüyor.</li>
  <li><strong>Tüm iletişim uygulamalarıyla çalışıyor.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Devre dışı bırakabilirsiniz.</strong> Belirli bir arama için ses seviyesini manuel olarak yönetmek istiyorsanız, SoundDial's ayarlarında otomatik eğiltmeyi kapatın.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "AirPods Ses Çok Düşük Mac? Her Çözüm Açıklandı",
    description:
      "AirPods Mac seste bile sessiz mi ses çıkarıyor? İşte kulaklık güvenlik sınırlarından Bluetooth tuhaflıklarına kadar tüm nedenleri ve bunları nasıl düzeltebileceğiniz.",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>AirPods'larınız iPhone'da sorunsuz çalışıyor. Oldukça gürültülüler. Ama onları Mac taktığınızda — tabii ki kablosuz olarak — ve aniden her şey çok sessiz oluyor. Sistem hacmi maksimumda. Spotify maksimumda. AirPods sadece... yeterince yüksek değil.</p>

<p>Bu, AirPods kullanan Mac kullanıcılarından gelen en yaygın ses şikayetlerinden biridir. İyi haber: neredeyse her zaman düzeltilebilir. Kötü haber: Yaklaşık altı farklı sebep var ve hepsini kontrol etmeniz gerekebilir.</p>

<h2>1. Kulaklık Güvenliği ses seviyenizi sınırlıyor</h2>

<p>Bu en yaygın sebep. macOS, işitme cihazınızı korumak için kulaklık sesini sınırlayan yerleşik bir özelliği var.</p>

<p>Ziyaret edin <strong>Sistem Ayarları → Ses → Kulaklık Güvenliği</strong>.</p>

<p>"Gürültüyü Azalt" etkinse, macOS AirPods'unuzun ne kadar yüksek ses çıkarabileceğini aktif olarak sınırlıyor. Zamanla ses pozlamasını ölçür ve uzun süre çok yüksek sesle dinlediğinizi düşünürse sesi düşürür.</p>

<p><strong>Düzeltme:</strong> "Yüksek Sesli Sesi Azalt" özelliğini tamamen devre dışı bırakın veya desibel eşiğini daha yüksek bir seviyeye çıkarın. Hemen daha fazla ses boşluğu fark edeceksiniz.</p>

<h2>2. Bluetooth ses seviyesi senkronize değil</h2>

<p>Bluetooth sesin iki ayrı ses kontrolü var: biri Mac tarafında, diğeri AirPods tarafında. Bunların senkronize olması gerekiyor ama bazen senkronizasyondan çıkıyorlar — Mac %100 gösteriyor ama AirPods aslında daha düşük ses sinyali alıyor.</p>

<p><strong>Düzeltme:</strong> AirPods'larınızı (Sistem Ayarları → Bluetooth → AirPods'unuzun yanındaki "i" tuşuna tıklayın → Bağlantıyı Kapatın), beş saniye bekleyin, sonra tekrar bağlayın. Bu, ses senkronizasyonunu sıfırlar. Ayrıca AirPods'ları tekrar kutusuna koyup kapağını kapatıp on saniye bekleyip tekrar çıkarmayı dene.</p>

<h2>3. Ses kodek daha düşük kaliteye geçti</h2>

<p>AirPods'unuzun mikrofonunu kullandığınızda (bir arama, Siri veya dikte için), macOS yüksek kaliteli AAC kodekinden düşük kaliteli SCO kodekine geçiş yapar. SCO, telefon görüşmeleri için tasarlanmıştır — ses kalitesini düşürür ve algılanan ses seviyesini de etkileyebilir.</p>

<p><strong>Düzeltme:</strong> Eğer arama yapmıyorsanız ama ses hem sessiz hem de düşük kaliteliyse, AirPods'unuzu kapatıp yeniden bağlayın. macOS müzik çalma için tekrar AAC kodekine geçmeli. Eğer bir çağrıdaysanız, bu beklenen bir davranıştır — arama bittiğinde codec otomatik olarak geri döner.</p>

<h2>4. Bir AirPod diğerinden daha sessizdir</h2>

<p>Bir AirPod'un belirgin şekilde daha sessiz olması nedeniyle ses düşük hissediliyorsa, sorun fiziksel olabilir — kulak kiri veya kalıntı hoparlör ağını engelliyor.</p>

<p><strong>Düzeltme:</strong> AirPods'larınızı kuru, tüy içermeyen bir bezle nazikçe temizleyin. Hoparlör ağı için kuru, yumuşak kıllı bir fırça kullanın. Sıvı, sıkıştırılmış hava veya keskin nesneler kullanmayın. Ayrıca kontrol edin <strong>Sistem Ayarları → Erişilebilirlik → Ses</strong> — sol/sağ ses dengesi kaydırıcısının ortada olduğundan emin olun.</p>

<h2>5. Uygulamanın kendisi düşük ses seviyesi çıkarıyor</h2>

<p>Bazı uygulamalar, sistem hasından ayrı kendi dahili ses kontrolüne sahiptir. Spotify, VLC, YouTube ve Zoom'un hepsinde bağımsız ses kaydırıcıları var. Uygulamanın dahili hacmi %50 ise, sadece hacmin yarısını alıyorsunuz — macOS ve AirPods'larınız %100 olsa bile.</p>

<p><strong>Düzeltme:</strong> Kullandığınız uygulamanın içindeki ses kontrolünü kontrol edin ve maksimuma ulaştığından emin olun.</p>

<h2>6. Core Audio kötü durumda</h2>

<p>macOS'nin ses daemonu (coreaudiod) bazen Bluetooth sesin yanlış yönlendirildiği veya azaltılmış seviyede olduğu durumlarda takılı kalabilir, özellikle uyku/uyandırma veya birden fazla ses cihazı arasında geçiş yaptıktan sonra.</p>

<p><strong>Düzeltme:</strong> Terminali aç ve çalıştır:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Ses bir saniyeliğine kesiliyor ve yeniden başlatıyor. AirPods'larınız daha normal bir ses seviyesinde yeniden bağlanabilir.</p>

<h2>Hâlâ çok sessiz mi? AirPods'un sesini %100'ün üzerine çıkarın</h2>

<p>Yukarıdaki altı nedeni kontrol ettiyseniz ve AirPods'larınız hâlâ yeterince yüksek ses çıkarmıyorsa, ses sinyalini normalde izin verdiğinden macOS yükseltmek için ses yükseltmesine ihtiyacınız olabilir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Herhangi bir uygulamanın sesini artırmanıza izin verir <strong>200%</strong>. Eğer Spotify AirPods'unuzda çok sessizse, Spotify'ın kaydırıcısını SoundDial %150 veya %180'e çekin. Ses sinyali AirPods'a gönderilmeden önce güçlendirilir ve bu da AirPods'u Apple'ın amaçladığından daha yüksek bir ses haline getirir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial AirPods için Mac için uygulama sesini artırmak ve uygulama başına %200'e kadar ses kaydırıcıları" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Uygulama başına boosting'in avantajı: Sessiz uygulamayı güçlendirebiliyorsunuz, diğer her şeyi daha yüksek sesle yapasınız. Video görüşmeniz %100 uygunsa ama Spotify %170 istiyorsa SoundDial her birini bağımsız ayarlamanıza izin veriyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Spotify Sesi Mac'de Çok Düşük Mü? İşte tüm çözümler",
    description:
      "Spotify maksimum sesle ama Mac hala çok sessiz mi? Bu rehber, Spotify'ın yerleşik sınırlayıcısından macOS ayarlarına kadar her sebepten ve bunu %100'ün üzerine nasıl yükseltileceğine kadar kapsıyor.",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify tam sesle çalışıyor. Mac tam sesle. Ve hâlâ yeterince yüksek değil. Bu, Mac'de en yaygın Spotify şikayetlerinden biri ve birden fazla nedeni var — çoğu belirgin değil.</p>

<p>Bu rehber, Spotify'ın Mac konusunda çok sessiz olabileceği nedenlerini ve her birini nasıl düzeltebileceğinizi anlatıyor. Spotify'ın sesini %100'ün üzerine çıkarmak, başka hiçbir şey işe yaramıyorsa nasıl artırmak da dahil.</p>

<h2>Önce Spotify'ın kendi ses kaydırıcısını kontrol edin</h2>

<p>Spotify'ın uygulamanın sağ alt köşesinde (veya yeniden tasarlanmış oynatıcıda ekranın altında) bağımsız bir ses kontrolü var. Bu kaydırıcı, Mac sisteminizin ses seviyesinden ayrı. Eğer %50 ise, Spotify potansiyel ses seviyesinin sadece yarısını çıkarıyor — sisteminiz %100 olsa bile.</p>

<p><strong>Düzeltme:</strong> Spotify'ın uygulama içi ses kaydırıcısının tam sağa (%100) olduğundan emin olun.</p>

<h2>Spotify'ın ses normalizasyonunu kontrol edin</h2>

<p>Spotify'ın adı olan bir özellik var <strong>Hacim Normalizasyonu</strong> Bu, otomatik olarak oynatma sesini ayarlayarak tüm parçalar yaklaşık aynı seviyede çalıyor. Bu, şarkılar arasında sarsıcı ses sıçramalarını önlemek için tasarlanmıştır, ancak aynı zamanda daha yüksek sesli parçaların genel sesini de düşürebilir.</p>

<p>Kontrol için: Spotify'ı açın → Ayarlar → Oynatma → <strong>Hacmi normalize et</strong>.</p>

<p>Üç seçeneğiniz var:</p>
<ul>
  <li><strong>Yüksek sesle</strong> — en az normalizasyon, orijinal mastering seviyelerine en yakın</li>
  <li><strong>Normal</strong> — Orta Normalizasyon (Varsayılan)</li>
  <li><strong>Sessiz</strong> — çoğu normalizasyon, hacmi daha da azaltır</li>
</ul>

<p><strong>Düzeltme:</strong> Spotify çok sessiz gelirse, normalizasyonu tamamen devre dışı bırakın ya da "Yüksek sesli" olarak ayarlayın. Bu, Spotify'ın beklenmedik şekilde sessiz olmasının en yaygın nedenidir.</p>

<h2>Spotify'ın ses kalitesi ayarını kontrol edin</h2>

<p>Daha düşük ses kalitesi ayarları, özellikle eski ses donanımında bazen daha sessiz oynatmaya yol açabilir. Spotify → Ayarlar → Ses Kalitesi'ne gidin ve Premium aboneliğiniz varsa "Çok Yüksek" (320 kbps) veya ücretsiz seviyede "Yüksek" (256 kbps) kullandığınızdan emin olun.</p>

<h2>Kulaklık macOS güvenlik sınırlarını kontrol et</h2>

<p>Eğer kulaklık kullanıyorsan (kablolu veya Bluetooth), macOS ses seviyenizi kısıtlıyor olabilir. Ziyaret edin <strong>Sistem Ayarları → Ses → Kulaklık Güvenliği</strong>. "Gürültülü Sesi Azalt" etkinse, macOS kulaklık sesini güvenli olarak gördüğü seviyeye sınırlıyor.</p>

<p><strong>Düzeltme:</strong> "Yüksek Sesi Azalt" seçeneğini devre dışı bırakın veya desibel eşiğini yükseltin. Not: Bu ayar sadece kulaklık çıkışını etkiler, hoparlörleri değil.</p>

<h2>Bluetooth sesi kontrol edil</h2>

<p>AirPods veya Bluetooth hoparlör kullanıyorsan, ayrı bir ses seviyesi katmanı var. Bluetooth cihazlarının kendi ses seviyesi var ve bu ses sistemi Mac ile cihaz arasında ayarlanır. Bazen bu senkronizasyonun dışına çıkıyor.</p>

<p><strong>Düzeltme:</strong> Bluetooth cihazınızı kapatın ve yeniden bağlayın. Ayrıca cihazın kendi ses düğmeleri olup olmadığını kontrol edin — bunların da maksimumda olduğundan emin olun.</p>

<h2>Core Audio'yu Sıfırla</h2>

<p>macOS'nin ses sistemi bazen düşük ses seviyesinde takılı kalabilir, özellikle uyku/uyandırma döngülerinden sonra veya çıkış cihazları arasında geçiş yaptıktan sonra. Ses daemonunu yeniden başlatmak genellikle bunu düzeltir.</p>

<p>Terminali aç ve çalıştır:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Ses bir saniyeliğine kesiliyor ve yeniden başlatılıyor. Spotify'ı tekrar deneyin — belki daha yüksek sesli olabilir.</p>

<h2>Spotify'ı %100'ün üzerine çıkar SoundDial</h2>

<p>Yukarıdaki her şeyi denediyseniz ve Spotify hâlâ çok sessizse, sorun Spotify'ın maksimum çıkışının kurulumunuz için yeterince yüksek olmaması olabilir. Bu, MacBook dahili hoparlörler ve bazı Bluetooth cihazlarında yaygındır.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Herhangi bir uygulamanın sesini artırmanıza izin verir <strong>200%</strong> — Spotify dahil. Spotify'ın ses akışını yakalıyor ve uygulamanın dahili maksimumunun ötesine kadar yükseltiyor, başka hiçbir uygulamanın sesini etkilemiyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Spotify sesini macOS %200'e çıkarırken diğer uygulamaları normal ses seviyesinde tutmak" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>İşte temel fark: sistem genelinde bir ses artışı <em>her şey</em> daha yüksek sesle — bildirimler, aramalar, sistem sesleri — sadece Spotify değil. SoundDial Spotify'ı güçlendiriyor <em>Bağımsız olarak</em>. Spotify'ı %160'a ayarlayın, tarayıcınız %80'te kalırken, Zoom %100'de kalır.</p>

<h2>Bonus: arama sırasında müzik için otomatik eğilme</h2>

<p>Eğer tam tersi bir sorun da geçerliyse — Spotify video görüşmeleri sırasında çok gürültülü — SoundDial'nin otomatik eğilme özelliği, Zoom, Teams veya FaceTime görüşmesine katıldığınızda otomatik olarak Spotify'ı düşürüyor. Görüşme bittiğinde, Spotify önceki sesine geri döner. Manuel ayar gerekmiyor.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Oyun Sesi Discord'dan Nasıl Ayırılır Mac",
    description:
      "Discord'da takım arkadaşlarınızı boğan oyun patlamaları mı? İşte macOS üzerinde oyun sesi ve sesli sohbet sesini bağımsız olarak nasıl kontrol edeceğiniz.",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>Oyun oynuyorsun Mac. Oyunda bir patlama gerçekleşiyor. Discord takım arkadaşlarınız konuşuyor ama silah seslerinin ötesine geçerken onları duymuyorsunuz. Sesi kısıyorsunuz — artık Discord da daha sessiz. Tekrar açıyorsunuz — patlamalar tekrar sağır edici.</p>

<p>Windows'ta ses mikserini açıp oyunu %40'a düşürür ve Discord'u %100'e bırakırsınız. Mac üzerinde yapamazsın. macOS her şey için tek bir ses kaydırıcısı veriyor, böylece oyun sesi ve sesli sohbet kalıcı olarak birbirine bağlı oluyor.</p>

<p>Bu rehber, oyununuz ve Discord (veya herhangi bir sesli sohbet) için bağımsız ses kontrolünü Mac'da nasıl alacağınızı gösteriyor.</p>

<h2>Neden bu Mac spesifik bir sorun</h2>

<p>Windows, 2006'dan beri her uygulamanın sesini bağımsız olarak kontrol etmenizi sağlayan dahili bir ses mikserine sahip. macOS bu özelliği hiç eklemedi. Her uygulamanın sesi tek bir akışa karıştırılır ve tek kontrolünüz her şeyi eşit şekilde etkileyen tek bir ana kaydırıcıdır.</p>

<p>Bu şu anlam taşıyor:</p>
<ul>
  <li>Oyununuz çok gürültülüyse, sesinizi kısmak Discord'u da düşürüyor</li>
  <li>Discord çok sessizse, oyunu da açıyor</li>
  <li>Her iki uygulama da aynı ses seviyesine kilitlendiği için denge bulamazsınız</li>
</ul>

<h2>Gerçekten işe yaramayan çözümler</h2>

<h3>Oyun içi ses ayarlarını kullan</h3>
<p>Çoğu oyunda ana ses seviyesini, müziği, ses efektlerini ve sesli sohbeti bağımsız olarak düşürebileceğiniz bir ses ayarları menüsü bulunur. Bu yardımcı oluyor, ancak oyun içinde ayarları değiştiriyorsunuz — yani oynanışı duraklatmanız, menülerde gezinmeniz ve koşullar değiştiğinde ayarlamanız gerekiyor. Ve oyunu değiştirirseniz, baştan başlıyorsun.</p>

<h3>Discord'un ses kontrollerini kullanın</h3>
<p>Discord, Ses ve Video Ayarlarından çıkış sesini ayarlamanıza izin → ve bireysel kullanıcıların isimlerine sağ tıklayarak ses seviyesini ayarlayabilirsiniz. Ama bu, Discord'un dahili karışımını kontrol ediyor, diğer uygulamalara göre ses seviyesini değil. Oyun çok gürültülüyse, Discord'un dahili olarak daha yüksek olması yardımcı olmaz çünkü sistem sesi ikisini de eşit şekilde etkiler.</p>

<h3>Farklı çıkış cihazları kullanın</h3>
<p>Bazı insanlar oyun sesini hoparlörlere yönlendirmeyi ve Discord'u kulaklıklara yönlendirmeyi (ya da tam tersi) deniyor. macOS bunu kolaylaştırmaz — sanal bir ses cihazı ve uygulama başına manuel yönlendirme gerekir. Ve hoparlörler aynı anda çalan kulaklık takmak en iyi ihtimalle garip.</p>

<h2>Gerçek çözüm: uygulama başına ses kontrolü</h2>

<p>İhtiyacınız olan şey, oyununuzun sesini Discord'un sesinden bağımsız olarak ayarlayabilme yeteneği. Tam olarak uygulama başına ses mikseri bunu yapar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menü çubuğunda oturur ve her uygulamaya kendi ses kaydırıcısını verir. Oyununuzu %35'e, Discord'u %100'e ayarlayabilirsiniz — ya da sizin için uygun olan oran. Birini değiştir, diğeri yerinde kalır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial bir oyun için bağımsız ses kaydırıcıları ve Discord'da macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tipik oyun kurulumu</h3>
<ul>
  <li><strong>Maç</strong> — %30-50 (daldırmak için yeterince yüksek, bunaltıcı değil)</li>
  <li><strong>Discord / sesli sohbet</strong> — %90-100 (oyun sesi üzerinden her zaman net duyulabilir)</li>
  <li><strong>Spotify / müzik</strong> — %15-25 (ince arka plan, müdahale etmez)</li>
  <li><strong>Tarayıcı</strong> — susturuldu (otomatik oynatma videoları sürpriz değil)</li>
  <li><strong>Slack / bildirimler</strong> — kısılmış (odaklanma zamanı)</li>
</ul>

<h3>Profil olarak kaydet</h3>
<p>SoundDial <strong>Hacim profilleri</strong> Bu yapılandırmayı kaydedip tek tıklamayla uygulamanıza izin veriyor. Tercih ettiğiniz oyun/Discord dengesi ile bir "Oyun" profili, müzik ve aramalar için bir "İş" profili oluşturun ve aralarında anında geçiş yapın. Her oturup oynamaya başladığınızda kaydırıcıları yeniden ayarlamak yok.</p>

<h3>Sessiz sesli sohbet için ses yükseltmesi</h3>
<p>Bazen sorun oyunun çok yüksek olması değil — Discord'un çok sessiz olması. Bazı takım arkadaşlarının mikrofonları kötü ya da Discord'un çıkışı diğer uygulamalara göre daha düşük. SoundDial herhangi bir uygulamanın sesini yükseltmenizi sağlıyor. <strong>200%</strong>, böylece Discord'u normal maksimumunun üzerine çıkarıp oyun sesine dokunmadan yükseltebilirsiniz.</p>

<h2>Her oyunda ve sesli sohbette çalışır</h2>

<p>SoundDial, macOS üzerinde ses üreten her uygulamayla çalışıyor. Steam, App Store, Epic Games veya bir tarayıcı oyunu oynamanız fark etmez. Discord, TeamSpeak, Mumble veya FaceTime kullanmanız fark etmez. Eğer ses çıkarıyorsa, SoundDial kontrol edebilir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Neden Mac Windows gibi bir ses mikseri yok?",
    description:
      "Windows, 2006'dan beri uygulama başına ses kontrolüne sahip. 2026 yılı ve hâlâ yok macOS. İşte asıl sebep — ve yine de nasıl elde edileceği.",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Vista'dan (2006) bu yana her Windows sürümünde ses mikseri bulunuyordu. Hoparlör simgesine sağ tıklayın, "Volume Mixer"e tıklayın ve her uygulamanın kendi ses kaydırıcısını görebilirsiniz. Chrome'u Spotify'ı etkilemeden sessize alabilirsiniz. Discord'u oyununuza dokunmadan düşürebilirsiniz.</p>

<p>On macOS? Bir kaydırma. Sadece bu kadar. Yirmi yıldır Mac güncellemeleri — Ventura, Sonoma, Sequoia, Tahoe — ve Apple hiç uygulama başına ses kontrolü eklemedi.</p>

<p>İnsanlar bu soruyu sürekli soruyor: <em>Neden Mac ses mikseri yok?</em></p>

<h2>Bu teknik bir sınırlama değil</h2>

<p>Şunu baştan söyleyelim: macOS kesinlikle uygulama başına ses kontrolü yapabilir. Temel ses çerçevesi — <strong>Core Audio</strong> — API seviyesinde işlem başına ses tıklama, yönlendirme ve kazanç ayarlamasını destekler. Apple tanıttı <strong>Audio Tap API</strong> macOS 14 (Sonoma) ile geliştiricilerin bireysel uygulama ses akışlarını yakalamayı ve değiştirmesini daha da kolaylaştırdı.</p>

<p>Üçüncü parti geliştiriciler, yıllardır bu API'leri kullanarak uygulama başına ses mikserleri inşa ediyor. Teknoloji var. Apple ise henüz kullanıcıya yönelik bir versiyonunu geliştirmedi.</p>

<h2>Peki Apple neden bunu yapmadı?</h2>

<p>Apple nedenini hiç kamuoyuna açıklamadı. Ancak tasarım kalıplarına bakıldığında cevap oldukça net: <strong>Apple, sadeliği güçlü kullanıcı özelliklerinden ziyade önceliklendiriyor.</strong></p>

<p>Bir volume kaydırıcı on ikiden daha basittir. Açıklaması daha kolay, öğrenmesi daha kolay ve sıfır yapılandırma gerektiriyor. Aynı anda sadece bir şey yapan — müzik dinleyen YA da bir arama YA da video izleyen — bir kaydırıcı sorunsuz çalışıyor. Apple önce bu kullanıcı için tasarım yapıyor.</p>

<p>Ayrıca felsefi bir argüman var: Apple, uygulamaların kendi seslerini yönetmesi gerektiğine inanıyor. Spotify çok gürültülüyse, Spotify'da sesi kıs. Zoom çok sessizse, Zoom'da sesin yükseltildi. Işletim sistemi aracılık etmemeli.</p>

<p>Sorun şu ki, bu felsefe gerçeklikle uyuşmuyor. 2026'da herkes ses ile çoklu görev yapar:</p>

<ul>
  <li>Çalışırken çalan müzik</li>
  <li>Bildirimler sesi veren video görüşmeleri</li>
  <li>Tarayıcı sekmeleri otomatik olarak reklamları oynatıyor</li>
  <li>Discord çalışırken oyun oynamak</li>
  <li>Bir kulağında podcast, diğer kulağında Slack</li>
</ul>

<p>"Her uygulamada ayarla" demek, altı uygulama arasında geçiş yapmak, altı farklı ses kontrolü bulmak (bazıları yok) ve bunu günde birkaç kez yapmak demek. Basitliğin tam tersi.</p>

<h2>Apple bunu ekleyecek mi?</h2>

<p>Apple'ın yaklaşan macOS çıkışında ses mikseri eklemeyi planladığına dair bir işaret yok. Bu özellik macOS beta, patent başvurusu veya WWDC yol haritasında yer almamıştır. Apple'ın Kontrol Merkezi menü çubuğunda hâlâ tek bir sistem ses kaydırıcısı görünüyor.</p>

<p>Apple da zamanla ekleyebilir — daha önce reddettikleri özellikleri benimsediler (widget'lar, pencere döşemeleri, çok pencereli iPad). Ama Apple'ı beklemek, sonsuza dek beklemek demek.</p>

<h2>Şimdi Mac bir ses mikseri nasıl takılır</h2>

<p>Cevap, üçüncü taraf bir menü bar uygulaması. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Windows ses mikserinin tam olarak yaptığı gibi — ve daha fazlasını yapan yerel bir macOS ses mikseri.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — macOS için ses mikseri, menü çubuğunda uygulama başına ses kaydırıcılarını gösteriyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Ne elde edersiniz:</p>

<ul>
  <li><strong>Uygulama başına ses kaydırıcıları</strong> — her çalışan uygulamanın kendi kaydırıcısı var, %0'dan %200'e</li>
  <li><strong>Uygulama başına sessiz bırak</strong> — herhangi bir uygulamayı susturmak için bir tıklama, sessizliği açmak için tekrar tıklayın</li>
  <li><strong>Hacim profilleri</strong> — farklı durumlar için konfigürasyonları kaydedin (İş, Odak, Oyun) ve tek tıklamayla geçiş yapın</li>
  <li><strong>Otomatik ördülme</strong> — Arka plan sesi bir aramaya katıldığınızda otomatik olarak azalıyor ve kapattığınızda geri geliyor</li>
  <li><strong>Ses seviyesi %200'e yükseltildi</strong> — sessiz uygulamaları normal maksimumunun ötesine çıkarır</li>
  <li><strong>Klavye kısayolları</strong> — mikseri aç tuşla kapatın veya tüm uygulamaları sessize alın</li>
  <li><strong>Çıkış cihazı anahtarlaması</strong> — aynı panelden hoparlörler, kulaklıklar ve harici cihazlar arasında geçiş yapmak</li>
  <li><strong>Hacim belleği</strong> — her uygulamanın sesi yeniden başlatmalar arasında hatırlanır</li>
</ul>

<p>Apple'ın yirmi yıl önce geliştirmesi gereken özellik bu. Tek seferlik satın alma <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Abonelik yok. macOS 14.2+.</p>

<p>Ses mikseri macOS yerleşik olmalıydı.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac Ses Çok Düşük mü? Sesi %100'ün ötesine nasıl yükseltilir",
    description:
      "Mac tam seste ve hâlâ çok sessiz. İşte bunun neden böyle olduğunu ve harici hoparlörler olmadan sesi %200'e kadar nasıl yükseltebileceğimiz.",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>Mac hacminiz %100'de. Kaydırıcı tamamen sağda. Ve hâlâ yeterince yüksek değil. Podcast çok sessiz. Video görüşme katılımcısı fısıldayıyormuş gibi konuşuyor. YouTube videosu çok düşük bir şekilde kaydedildi. Maksimuma ulaştın — ve bu yeterli değil.</p>

<p>Bu, özellikle MacBook Air ve eski MacBook Pro modellerinde yerleşik hoparlörlerle ilgili en yaygın ses şikayetlerinden biri Mac. Konuşmacılar fiziksel olarak küçüktür ve bazı içerikler diğerlerinden daha düşük seviyede kaydedilir.</p>

<p>İşte neden böyle olduğunu ve gerçekten nasıl düzeltileceğini — Mac hacminizi %100 sınırın ötesine nasıl çıkarabileceğiniz gibi şeyler.</p>

<h2>Neden Mac tam seste çok sessiz geliyor</h2>

<p>Maksimum ses seviyesinde bile Mac yeterince yüksek olmamasının birkaç nedeni vardır:</p>

<h3>1. İçeriğin kendisi sessiz</h3>
<p>Tüm sesler aynı seviyede mastere edilmez. Profesyonel olarak üretilen bir podcast -3 dB'ye ulaşabilirken, sıradan bir YouTube videosu veya kaydedilmiş bir Zoom görüşmesi -20 dB'ye ulaşabilir. Fark çok büyük. Sisteminiz %100 olduğunda sessiz içerik sessiz kalır — macOS sadece orijinal sinyal seviyesine kadar yükseltilebilir.</p>

<h3>2. MacBook hoparlörlerinin fiziksel sınırları vardır</h3>
<p>MacBook Air veya 13" MacBook Pro'daki dahili hoparlörler küçük. Taşınabilirlik için tasarlanmışlar, hacim için değil. Apple'ın daha büyük MacBook Pro modellerinde (14" ve 16") çok daha iyi hoparlörler var, ancak onların bile bir tavanı var. Eğer harici hoparlörlere veya kulaklıklara alışkınsanız, dahili hoparlörler zayıf hissettirecektir.</p>

<h3>3. Bluetooth ses sınırı</h3>
<p>Bazı Bluetooth kulaklık ve hoparlörlerin macOS'dan ayrı kendi ses tavanı vardır. macOS %100 gösterse bile Bluetooth cihazı maksimum seviyede olmayabilir. Bu özellikle AirPods'larda yaygındır; çünkü AB ses sınırlayıcısı veya Settings → Sound → Headphone Safety'deki kulaklık güvenlik özelliği çıkışı sınırlayabilir.</p>

<h3>4. Bireysel uygulama hacmi düşük</h3>
<p>Bazı uygulamalar, sistem hacminden ayrı kendi dahili ses kontrolüne sahiptir. Spotify'ın uygulama içi sesi %50 ve sistem sesi %100 ise, aslında %50 dinliyorsunuz. Zoom genellikle çağrılar için varsayılan olarak muhafazakar bir ses seviyesine geçer.</p>

<h2>İlk denemek için yerleşik düzeltmeler</h2>

<h3>Kulaklık güvenlik sınırlarını kontrol et</h3>
<p>Ziyaret edin <strong>Sistem Ayarları → Ses → Kulaklık Güvenliği</strong>. "Yüksek Sesi Azalt" etkinse, macOS işitmenizi korumak için aktif olarak ses seviyenizi kısıtlıyor. Bunu devre dışı bırakabilir veya eşiği yükseltebilirsiniz. Bu sadece kulaklıkları etkiler — hoparlör çıkışına dokunmaz.</p>

<h3>Bluetooth cihazının sesini kontrol et</h3>
<p>Bazı Bluetooth cihazlarında bağımsız ses kontrolü bulunur. AirPods için, hem Mac hem de AirPods'un ses seviyesinin maksimumda olduğundan emin olun. Üçüncü parti Bluetooth hoparlörler için, hoparlörün kendi ses düğmesi veya uygulaması olup olmadığını kontrol edin.</p>

<h3>Uygulama içi hacmi kontrol et</h3>
<p>Çok sessiz olan uygulamayı açın ve kendi ses kaydırıcısını arayın. Spotify'da oynatıcı çubuğunda bir tane var. VLC'de oynatma kontrolünde bir tane var. YouTube'da video oynatıcıda bir tane var. Sorunun Mac olduğuna karar vermeden önce bunların %100 olduğundan emin olun.</p>

<h3>Core Audio'yu Sıfırla</h3>
<p>Bazen macOS ses sistemi uyku/uyanık döngülerinden veya cihaz değişikliklerinden sonra kötü bir duruma giriyor. Terminali aç ve çalıştır:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Bu, ses daemonunu yeniden başlatıyor. Sesiniz bir saniyeliğine kesilip geri gelir, bazen daha normal bir seviyede.</p>

<h2>Ses seviyesini %100'ün üzerine nasıl çıkarabilirim?</h2>

<p>Yukarıdaki her şeyi kontrol ettiyseniz ve Mac hâlâ çok sessizse, ses yükseltmesine ihtiyacınız var — ses basma yeteneği <em>Yukarıda</em> macOS getirdiği %100 tavan.</p>

<p>Ses yükseltme, ses sinyalini hoparlörlerinize ulaşmadan önce kesip genliğini çarparak çalışır. %150 ile her ses örneği orijinalinden 1,5 kat daha yüksek. %200'de iki katına çıktı. Bu, belirli içerikle aşırı seviyelerde hafif bozulma yaratabilir, ancak sessiz ses için gerçekten duyulabilir hale getirmenin tek yolu budur.</p>

<h3>SoundDial: uygulama başına hacim %200'e kadar artış</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Mac her uygulamaya %0'dan %0'a kadar değişen bağımsız bir ses kaydırıcısı veriyor <strong>200%</strong>. Belirli bir uygulama çok sessizse — podcast oynatıcı, tarayıcı sekmesi, video görüşmesi — sadece o uygulamayı %100'ün ötesine çıkarabilirsin ve başka hiçbir şeye dokunmadan.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial ses yükseltmesi — uygulama başına %200 amplifikasyonla ses kontrolü macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bu özellikle şu durumlar için faydalıdır:</p>
<ul>
  <li><strong>Sessiz podcast uygulamaları</strong> — bazı oyuncular özellikle podcastlerin optimal olmayan koşullarda kaydedilmesiyle maksimuma ulaşıyor</li>
  <li><strong>Sessiz katılımcılarla görüntülü görüşmeler</strong> — birinin mikrofonu alçakken Zoom veya Teams'i güçlendirin, müziğinizi daha yüksek yapmadan</li>
  <li><strong>Tarayıcı sekmeleri</strong> — YouTube videoları, web uygulamaları ve gömülü medya, özel medya uygulamalarından daha düşük sesle oynatılır</li>
  <li><strong>Eski kayıtlar</strong> — arşiv ses, eski müzik ve eski video içerikleri genellikle daha düşük seviyelerde masteringlenir</li>
</ul>

<p>Sistem genelinde hacim artırıcılarına göre temel avantaj, SoundDial artışların <em>Uygulama başına</em>. Sessiz uygulamayı %180'e çıkarırken diğer her şeyi normal seviyelerde tutabilirsiniz. Sistem çapında bir güçlendirici her şeyi eşit şekilde güçlendirir, zaten yüksek sesli olan uygulamalarınız acı verici derecede yüksek olurken, sessiz olan biraz daha az sessiz olur.</p>

<h2>Dış çözümler daha iyi olduğunda</h2>

<p>Ses yükseltmenin sınırları var. Bir MacBook Air'in yerleşik hoparlörlerinden gelen sesle bir odayı doldurmaya çalışıyorsanız, hiçbir yazılım bu hoparlör sürücülerinin fiziksel boyutunu aşamaz. O durumda:</p>

<ul>
  <li><strong>Kablolu kulaklıklar</strong> — hoparlör sınırlamalarını tamamen aşmak ve çoğu kulaklık dahili hoparlörlerden daha yüksek ses çıkarabilir</li>
  <li><strong>Dış hoparlörler</strong> — ucuz bir çift USB veya Bluetooth hoparlör bile ham ses seviyesi için dahili MacBook hoparlörlerinden daha iyi olur</li>
  <li><strong>USB ses arayüzü</strong> — profesyonel kullanım için, özel bir ses arayüzü stüdyo monitörlerine veya kulaklıklara temiz ve güçlü bir sinyal sağlar</li>
</ul>

<p>Ama günlük durum için — çok sessiz bir tarayıcı sekmesi, birinin mırıldandığı bir arama, dolapta kaydedilmiş bir podcast — yazılım sesi artıyor <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> en hızlı çözümdür. Menü çubuğu simgesine tıklayın, kaydırıcıyı %100'ün üzerine sürükleyin, tamam.</p>

<p>Tek seferlik satın alma <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Abonelik yok. macOS 14.2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Zoom Çağrıları sırasında Müziği Otomatik Olarak Düşürmek Mac",
    description:
      "Her Zoom görüşmesi başladığında, Spotify'ı durdurmak için acele ediyorsunuz. Daha iyi bir yol var — otomatik eğilmek, mikrofonunuz aktive olduğunda müziğinizi otomatik olarak düşürüyor.",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>Çağrı başlıyor. Ekranınızı paylaşıyorsunuz. Müziğin hâlâ coşkulu. Telaşla Spotify'a geçiyorsun, duraklatmaya basıyorsun, tekrar Zoom'a dönüyorsun — ama herkes çalma listeni on saniyelik duyuyordu. Herkesin başına gelir ve bunun nedeni, "yeni başlayan bir arama" ile "belki müziği kısmal" arasında hiçbir bağlantı olmadığı macOS olur.</p>

<p>Bazı telefonlarda bu otomatik oluyor — bir arama geldiğinde müzik duraklar veya sönür. Mac ise yalnızsın. Otomatik eğilme kurmadıysanız.</p>

<h2>Ses eğilmesi nedir?</h2>

<p><strong>Ses eğilme</strong> daha önemli bir şey olduğunda — örneğin sesli arama — arka planda sesin otomatik olarak düşürülmesi anlamına gelir. Bu terim, arka plan müziğinin spikerin sesinin altında "gizlendiği" yayın mühendisliğinden gelir.</p>

<p>Pratikte ise şöyle işler:</p>
<ol>
  <li>Müzik dinliyorsunuz %50 sesle</li>
  <li>Zoom görüşmesine katılıyorsunuz</li>
  <li>Müziğiniz otomatik olarak %15'e düşer</li>
  <li>Çağrıyı manuel olarak ayarlamadan net duyabilirsiniz</li>
  <li>Çağrı sona erer</li>
  <li>Müziğiniz otomatik olarak %50'ye geri döner.</li>
</ol>

<p>Uygulama değiştirmek yok. Duraklatma yok. Aramadan sonra müziğinizi kapatmayı unutmayın. Tamamen otomatik.</p>

<h2>macOS yerleşik ses eğiltme özelliği var mı?</h2>

<p>Hayır. macOS otomatik ses eğiltme özelliği yok. Sistem Ayarları, Erişilebilirlik veya Odak modlarında "mikrofon aktif" ile "düşük arka plan sesi" arasında bağlantı sağlayan hiçbir şey yok. Apple bunu henüz yapmadı.</p>

<p>"Stereo sesi mono olarak oynat" adlı bir Erişilebilirlik ayarı ve görsel flaş uyarıları seçenekleri var, ancak aramada olup olmadığınıza göre otomatik olarak ses seviyesini ayarlayan bir şey yok.</p>

<h2>Manuel alternatifler (ve neden acı verici oldukları)</h2>

<h3>Her aramadan önce müziği elle durdurun</h3>
<p>Çoğu insan bunu yapar. İşliyor — ta ki unutana kadar. Ya da biri beklenmedik şekilde arayana kadar. Ya da arka arkaya aramalarınız olana kadar ve Spotify'ı günde on iki kez duraklatıp kaldırana kadar. Ayrıca, düşük ses sesi isteseniz bile, aramalar sırasında arka plan müziği olmaması anlamına geliyor.</p>

<h3>Her şeyi susturmak için Odak modunu kullanın</h3>
<p>Bildirim seslerini engelleyen bir "Toplantı" Odak modu oluşturabilirsiniz. Ama Focus modları medya oynatma sesini kontrol etmiyor. Müziğiniz Rahatsız Etme modunda bile tam frekansla çalmaya devam eder — Odaklanma sadece bildirimleri bastırır.</p>

<h3>Ses profillerini manuel olarak ayarlayın</h3>
<p>Her aramadan önce iletişim uygulamanız dışında her şeyi manuel olarak düşürebileceğiniz bir "arama" düzeni oluşturun. Bu işe yarıyor ama her seferinde hatırlamanız ve manuel olarak geçiş yapmanızı gerektiriyor. Ve sonra tekrar geçmek zorundasın.</p>

<h2>Otomatik eğilme SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Doğal olarak yapması gereken macOS otomatik eğilme özelliğine sahiptir. İşte nasıl çalışıyor:</p>

<h3>Çağrıları nasıl algılıyor</h3>
<p>SoundDial, Mac mikrofon durumunu izler — bir uygulama mikrofonunuzu kullanırken menü çubuğundaki turuncu noktayı gösteren aynı gösterge. Bir iletişim uygulamasının mikrofonunuzu etkinleştirdiğini tespit ettiğinde, bir aramanın başladığını anlar.</p>

<p>Tüm büyük iletişim uygulamalarıyla çalışır:</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Slack</strong> (toplanma ve çağrılar)</li>
  <li><strong>Google Meet</strong> (Chrome aracılığıyla)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Bir arama başladığında ne olur</h3>
<p>Mikrofonunuz bir arama için aktif olduğunda, SoundDial tüm iletişim dışı uygulamaların sesini otomatik olarak sizin ayarlayacağınız seviyeye düşürür — varsayılan %30'dur. Çağrı sesi tam sesle kalıyor. Arka plan müziği ince bir seviyeye düşüyor. Bildirim sesleri azalıyor.</p>

<p>SoundDial'ın başlığında otomatik eğilme aktif olduğunu doğrulamak için küçük yeşil bir gösterge belirir.</p>

<h3>Arama bittiğinde ne olur?</h3>
<p>Telefonu kapattığınızda ve mikrofon devre dışı bırakıldığında, SoundDial tüm uygulama seslerini tam olarak görüşme başlamadan önceki konumuna geri getiriyor. Müziğin %50'ye kadar geri geliyor (ya da nerede aldığın yerde). Manuel ayar gerekmiyor.</p>

<h3>Ördek seviyesinin yapılandırılması</h3>
<p>SoundDial'nin ayarlarında <strong>Ördek Seviyesi</strong> — bir arama sırasında arka plan sesinin ne kadar azaldığını. Kaydırıcı %10 (zar zor duyuluyor) ile %80 (hala oldukça mevcut) arasında değişiyor. Varsayılan %30 çoğu insan için iyi çalışıyor: müzik fark edilir ama konuşmayı engellemez.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Zoom görüşmesi sırasında müzik sesini otomatik olarak düşüren otomatik eğiltme özelliği Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Neden otomatik eğilmek duraklatmaktan daha iyidir</h2>

<p>Bir çağrıdan önce müziği durdurmak basit görünse de, otomatik eğilme birkaç açıdan daha iyidir:</p>

<ul>
  <li><strong>Bu otomatik.</strong> Asla unutmazsın. Beklenmedik bir çağrı geldiğinde telaşlandırmayın.</li>
  <li><strong>Arka plan müziğini sen tut.</strong> Birçok kişi aramalarda sessizlik yerine sessiz arka plan müziğini tercih eder. Otomatik eğilme özelliği sayesinde rahat bir seviyede tutun.</li>
  <li><strong>Birden fazla uygulamayı yönetiyor.</strong> Sadece müzik değil — bildirim sesleri, tarayıcı sekmeleri ve diğer tüm ses kaynakları aynı anda gizleniyor.</li>
  <li><strong>Mükemmel şekilde yenilenir.</strong> Arama bittiğinde, her uygulama tam olarak önceki sesine geri döner. Yeniden ayarlama yok.</li>
  <li><strong>Arka arkaya yapılan aramalar için işe yarar.</strong> Üç toplantı üst üste olursa, otomatik eğilme hepsini yönetiyor ve hiçbir şeye dokunmuyorsunuz.</li>
</ul>

<h2>Kurulum bir dakikadan kısa sürede</h2>

<ol>
  <li>Kurulum <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan</a></li>
  <li>Ayarlar → Otomatik Ördek sekmesini aç</li>
  <li>Otomatik ördeği etkinleştir</li>
  <li>Ördek seviyesi kaydırıcısını tercihinize göre ayarlayın</li>
  <li>Hepsi bu — otomatik eğilme aktiftir</li>
</ol>

<p>Bir sonraki Zoom, Teams veya FaceTime görüşmesine katıldığınızda, arka plan sesi otomatik olarak azalır. Telefonu kapattığında geri geliyor. Tek seferlik satın alma, abonelik yok.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Mac Bir Uygulamayı Her Şeyi Sessizleştirmeden Nasıl Sessizleştiririm",
    description:
      "Slack ping yapıyor. Bir çağrıdasın. Slack'i sessize almak istiyorsunuz ama çağrınızı duymaya devam ediyorsunuz. macOS izin vermiyor — zaten nasıl yapılacağını anlatıyorum.",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>Zoom görüşmesindesin. Slack sürekli bildirim sesleri çıkarıyor. Unuttuğunuz bir YouTube sekmesi otomatik olarak oynatmaya başlıyor. Sessiz tuşuna bastın — ve artık çağrını da duyamıyorsun. macOS sustur <em>her şey</em>. Sadece bir uygulamayı sessizleştirmenin yerleşik bir yolu yok.</p>

<p>Windows'ta hoparlör simgesine sağ tıklar, ses mikserini açar ve Slack'in yanındaki susturma düğmesine basarlar. Bitti. Slack sessiz, diğer her şey çalmaya devam ediyor. macOS karşılığı yoktur.</p>

<p>Bu rehber, Mac üzerinde belirli bir uygulamayı sessizleştirmek için mevcut olan her yöntemi kapsar — yerleşik çözümlerden gerçek bir sessiz düğme gibi çalışan tek çözüme kadar.</p>

<h2>Neden macOS bireysel uygulamaları sessizleştiremiyor</h2>

<p>macOS sesi tek bir akış olarak ele alıyor. Her uygulamanın sesi hoparlörlerinize ulaşmadan önce karıştırılır ve Apple'ın size verdiği tek ses kontrolü son mikslenmiş çıkışta çalışıyor. O karışıma girip bir uygulamayı susturmanın başka bir yolu yok, diğerlerini etkilemeden.</p>

<p>Bu bir donanım kısıtlaması değil — bu bir yazılım tasarımı seçimi. macOS'nin Core Audio çerçevesi, API seviyesinde süreç başına ses kontrolünü destekler. Apple, kullanıcıya yönelik bir erişim yolu geliştirmedi.</p>

<h2>Yerleşik çözümler (ve sınırları)</h2>

<h3>1. Uygulama için bildirimleri kapatın</h3>
<p>Ziyaret edin <strong>Sistem Ayarları → Bildirimler</strong> Ve susturmak istediğiniz uygulamayı bulun. Bildirimleri için sesleri devre dışı bırakabilir veya bildirimleri tamamen kapatabilirsiniz.</p>
<p><strong>Sorun:</strong> Bu sadece bildirim sesleri için işe yarar. Uygulama başka sesler çıkarıyorsa — medya oynatma, arama sesi, uygulama içi sesler — bu sesler onları etkilemez. Ve sadece ses değil, görsel bildirimleri de kaybediyorsunuz.</p>

<h3>2. Odak modu kullanın</h3>
<p>macOS Odak modları (Rahatsız Etme, İş, Kişisel vb.) belirli uygulamalardan gelen bildirim seslerini bastırabilir. Her Focus modunda hangi uygulamaların sizi bilgilendirmesine izin verildiğini ayarlayabilirsiniz.</p>
<p><strong>Sorun:</strong> Odak modları bildirimlerle ilgilidir, ses için değil. Slack huddle'ı, ses oynatan tarayıcı sekmesini veya herhangi bir medya oynatmayı susturmazlar. Ayrıca her mod için önceden yapılandırma gerektiriyorlar — sadece "bu uygulamayı hemen sessize alamazsınız."</p>

<h3>3. Uygulamayı kapatın</h3>
<p>Nükleer seçeneği. Slack'i tamamen bırakırsanız, ses çıkaramaz. Tabii ki bu, tekrar açana kadar mesajları göremeyeceğiniz anlamına geliyor.</p>
<p><strong>Sorun:</strong> Uygulamayı bırakmak istemezsiniz — bırakmak istersiniz <em>Kullanmaya devam edin</em> duymadan. "Sessiz" ile "yakın" arasında büyük bir fark var.</p>

<h3>4. Uygulamanın kendi ayarlarını kullanın</h3>
<p>Bazı uygulamalarda tercihlerinde "sesleri sessiz et" veya "bildirimleri sustur" ayarı bulunur. Slack'te bunu Tercihler → Bildirimler → Ses ve Görünüm bölümlerinde var. Spotify'da oynatıcıda bir hoparlör simgesi var.</p>
<p><strong>Sorun:</strong> Her uygulamanın ayarlarını ayrı ayrı bulup gezmeniz gerekiyor. Birçok uygulamada bu seçenek hiç yok. Ve "susturulmuş" ile "sessiz olmuş" arasında geçiş yapmak, her seferinde tercihlere geri dönmek anlamına geliyor, tek bir düğmeye tıklamak yerine.</p>

<h2>Gerçek çözüm: uygulama başına bir sessiz düğmesi</h2>

<p>Aslında istediğiniz şey çok basit: her uygulamanın yanında bir sessiz hale getiren bir sessiz tuş, başka hiçbir şeyi etkilemeden. Sessizleştirmek için tıklayın, sessizliği açmak için tekrar tıklayın. Uygulama çalışmaya devam ediyor, içeriğini görmeye devam ediyorsun — sadece duymuyorsun.</p>

<p>Tam olarak uygulama başına ses mikseri bunu yapar. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menü çubuğunda duruyor ve kendi ses kaydırıcısı ile sessiz düğmesiyle çalışan her uygulamayı gösteriyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial macOS menü çubuğunda her uygulama için uygulama başına sessiz tuşlarının gösterilmesini" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Bir uygulamayı sessize almak için:</p>
<ol>
  <li>Menü çubuğundaki SoundDial simgesine tıklayın</li>
  <li>Sessizleştirmek istediğiniz uygulamayı bulun</li>
  <li>Yanındaki hoparlör simgesine tıklayın</li>
</ol>

<p>Hepsi bu. Uygulama sessiz. Diğer her şey hangi seste olursa olsun çalmaya devam ediyor. Sessizliği açmak için hoparlör simgesine tekrar tıklayın — ses tam olarak önceki haline döner.</p>

<h2>Susturmanın ötesinde: uygulama başına ses kontrolü</h2>

<p>Uygulama başına mikseriniz olduğunda, sessizleştirmenin aslında istediğiniz şeyin sadece uç noktası olduğunu fark edersiniz. Çoğu zaman, bir uygulamayı tamamen susturmak istemezsiniz — onu yapmak istersiniz <em>daha sessiz</em>.</p>

<ul>
  <li>Slack bildirimleri %15 — kesintiye uğratmayacak kadar ince, fark edecek kadar belirgin</li>
  <li>Müzik %30 — arka plan seviyesi, bu da sohbetle rekabet etmiyor</li>
  <li>Tarayıcı %60 — video oynatma için rahat</li>
  <li>%100 Zoom — önemli olan arama için tam ses</li>
</ul>

<p>SoundDial her uygulamaya %0'dan %200'e kadar bir kaydırıcı veriyor. Uygulamaları dahili minimumdan daha sessiz veya yerleşik maksimumdan daha yüksek sesli yapabilirsiniz. Ve <strong>Hacim profilleri</strong>, tercih ettiğiniz yapılandırmayı kaydedebilir ve tek bir tıklamayla "Toplantı" modu, "Odak" modu, "Müzik" modu — ön ayarlar arasında geçiş yapabilirsiniz.</p>

<p>Otomatik eğilme özelliği ise daha da ileri gidiyor: bir arama başlattığınızda, SoundDial iletişim uygulamanız dışında her şeyi otomatik olarak düşürüyor. Görüşme bittiğinde her şey tekrar açılıyor. Asla kaydırmaya dokunmazsın.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a> — 14,99 € tek seferlik alım, aboneliksiz, macOS 14,2+</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Mac için Ses Mikseri: Eksik Özellik macOS Hâlâ Yok",
    description:
      "Windows'un 2006'dan beri bir ses mikseri var. İşte neden hâlâ macOS — ve 2026'da Mac uygulamaya göre ses kontrolü elde etmenin en iyi yolu.",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>Herhangi bir Windows PC'de hoparlör simgesine sağ tıklarsanız, Ses Mikseri'ni bulacaksınız — bu panel, şu anda ses üreten her uygulamanın kendi bağımsız ses kaydırıcısını gösteren bir panel. Spotify'ı %20'ye düşürürken Zoom görüşmenizi %100'e indirebilirsiniz. Chrome'u başka hiçbir şeye dokunmadan sessize alabilirsiniz. 2006'daki Windows Vista'dan beri orada.</p>

<p>Şimdi aynı şeyi bir Mac üzerinde yapın. Menü çubuğundaki ses simgesine tıklayın. Bir kaydırıcı var. Hepsi bu. Her şeyi aynı anda kontrol eden bir kaydırıcı. Her uygulama, her bildirim, her sistem sesi — hepsi birbirine kilitlenmiş.</p>

<p>Bu niş bir şikayet değil. macOS yılının en çok talep edilen ses özelliği ve Apple yirmi yıldır bunu görmezden geliyor.</p>

<h2>Bir ses mikseri aslında ne yapar</h2>

<p>Bir ses mikseri size <strong>Her uygulama için bağımsız ses kontrolü</strong> bilgisayarında. Bir ana kaydırıcı yerine, her uygulama için bir sürgü alıyorsunuz. Her kaydırıcı sadece o uygulamanın ses çıkışını etkiler.</p>

<p>Pratikte bunun nasıl göründüğü şöyle:</p>

<ul>
  <li><strong>Spotify</strong> %25 — rahat bir seviyede arka plan müziği</li>
  <li><strong>Zoom</strong> %100 — toplantının her kelimesini dinleyin</li>
  <li><strong>Slack</strong> Sessiz — odak zamanında bildirim çağrısı yok</li>
  <li><strong>Safari</strong> %60 — YouTube videosu orta sesle</li>
  <li><strong>Sistem Sesleri</strong> %10 — sizi korkutmadan ince geri bildirim</li>
</ul>

<p>Bunların hepsi aynı anda çalışıyor, her biri kendi ses seviyesinde. Birini değiştirirsen başka hiçbir şey hareket etmez. Ses mikseri bunu yapar ve macOS bu yok.</p>

<h2>Apple neden bir tane üretmedi</h2>

<p>Bu teknik bir sınırlama değil. macOS'nin ses çerçevesi — Core Audio — API seviyesinde işlem başına ses yönlendirme ve ses kontrolünü tam olarak destekliyor. Apple bu yetenekleri kendi içinde kullanıyor. Sadece kullanıcılara maruz bırakmadılar.</p>

<p>Muhtemel sebep Apple'ın tasarım felsefesi: daha az seçenek, daha basit arayüz. Bir kaydırıcı on ikiden daha temiz. Ve aynı anda sadece bir şey yapan biri için — müzik dinleyen YA da bir telefon alan YA da video izleyen — tek bir kaydırıcı yeterli.</p>

<p>Ama 2026'da insanlar bilgisayarları böyle kullanmıyor. Uzaktan çalışma, aynı anda müzik çaldığı, Slack ping çaldığı ve tarayıcı sekmesinin otomatik olarak video oynattığı bir aramada olmanızdır. "Her şey için tek bir sürdürücü" modeli, kulaklarınız için yarışan beş ses kaynağı olduğunda tamamen bozuluyor.</p>

<h2>macOS çözümler (ve neden eksik oldukları)</h2>

<h3>Her uygulamanın yerleşik ses kontrolünü kullanın</h3>
<p>Spotify'da ses kaydırıcısı var. VLC'de bir tane var. QuickTime'da bir tane var. Ama bu, her uygulamaya ayrı ayrı geçmek, ses kontrolünü bulmak, ayarlamak ve tekrar tekrar değiştirmek anlamına geliyor. Bir düzine farklı yere dağılmış ve çoğu uygulamada — Slack, Mail, Safari, Chrome — bir uygulama bile yok.</p>

<h3>"Rahatsız Etme" seçeneğini kullanarak bildirimleri susturabilirsiniz</h3>
<p>Odak modları bildirim seslerini bastırabilir, ancak bunlar ikili — her şey ya hiçbir şey. "Slack seslerini sakla ama daha sessiz yap" diyemezsin. Ve Odak modları medyaya veya çağrı sesine hiç dokunmuyor.</p>

<h3>Audio MIDI Kurulumunu Kullanın</h3>
<p>Bu yerleşik yardımcı cihaz, ses cihazlarını ve örnekleme hızlarını yönetir. Uygulama başına hacimle hiçbir ilgisi yok. Bu bir cihaz yapılandırma aracı, mikser değil.</p>

<h3>Çok çıkışlı cihazlar oluşturun</h3>
<p>Ses çıkışlarını toplu bir cihazda birleştirebilirsiniz, ancak bu aynı sesi birden fazla çıkışa gönderir — uygulama başına kontrol vermez. Hem hoparlörde hem kulaklıkta aynı anda ses istiyorsan faydalı, ama bu tamamen farklı bir sorun.</p>

<p>Bu çözümlerin hiçbiri temel sorunu çözemiyor: macOS "bu uygulamayı başka hiçbir şeyi etkilemeden daha sessiz hale getir" demesinin yerleşik bir yolu yok.</p>

<h2>Mac ses mikserinde nelere dikkat edilmeli</h2>

<p>Apple bunu üretmiyorsa, üçüncü taraf uygulamalar yapacak. Ama tüm ses mikserleri eşit değildir. İşte iyi bir oyunu vasat olandan ayıran şey:</p>

<h3>Gerçek zamanlı uygulama tespiti</h3>
<p>Mikser, şu anda ses üreten her uygulamayı otomatik olarak algılamalı. Uygulamaları manuel olarak eklemek veya herhangi bir şey yapılandırmak zorunda değilsin. Bir uygulama açın, mikserde görünüyor. Kapatırsan, kaybolur.</p>

<h3>%100'ün üzerindeki hacim aralığı</h3>
<p>Bazı uygulamalar maksimum ses seviyesinde bile çok sessiz — sessiz podcast oynatıcılar, yumuşak sesli tarayıcı sekmeleri, birinin mikrofonu alçak olduğu video görüşmeleri. İyi bir mikser size <strong>Ses seviyesini %200'e çıkar</strong>, sesi uygulamanın kendisinin üretemeyeceğinin ötesinde etkili bir şekilde güçlendiriyor.</p>

<h3>Her uygulama için bir tıklamayla sessiz bırak</h3>
<p>Herhangi bir uygulamayı tek bir tıklamayla sessiz bırakabilmelisiniz — kaydırıcıyı hareket ettirmeden. Mulüsünü kaldırdığınızda, tam olarak olduğu yere dönmelidir. Bu, arama sırasında gürültülü bir uygulamayı hızlıca susturmak için kritik öneme sahiptir.</p>

<h3>Farklı durumlar için profiller</h3>
<p>"Müzikle çalışmak"dan "video araması"na ve "oyun oynama"ya her geçişinde sekiz kaydırıcıyı manuel olarak ayarlamak istemezsiniz. Profiller, ses konfigürasyonunu kaydedip tek tıklamayla uygulamanıza izin veriyor. "Toplantı" profili Zoom'u %100, müziği %15'e, bildirimleri ise %0'a ayarlayabilir. "Focus" profili Spotify hariç her şeyi sessize alabilir.</p>

<h3>Çağrılar sırasında otomatik eğilme</h3>
<p>Ses mikserinin sahip olabileceği en iyi özellik: Bir çağrıya katıldığınızda otomatik olarak arka plan sesini düşürmek ve arama bittiğinde geri yüklemek. Manuel ayar gerekmiyor. Zoom mikrofonu etkinleştirdiğinde müziğiniz sessizleşiyor ve telefonu kapattığınızda geri geliyor.</p>

<h3>Menü çubuğu entegrasyonu</h3>
<p>Bir ses mikseri menü çubuğunda yaşamalıdır — bir tıklama ile açmak, ayarlamak ve kapatmak gerekir. Tam bir pencere olmamalı, Dock alanı kaplamamalı ve mevcut uygulamanızdan uzaklaşmanızı gerektirmemeli. Yaptığınız işe odaklanmadan ses seviyesini ayarlayabilmelisiniz.</p>

<h2>SoundDial: Dahili olması gereken ses mikseri macOS</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Apple'ın sunamadığı şeyi — Mac üzerindeki her uygulama için bağımsız ses kontrolü — yerel bir macOS menü çubuğu uygulaması.</p>

<p>Menü çubuğunda duruyor ve her çalışan uygulamayı kendi ses kaydırıcısıyla gösteriyor. Bir kaydırıcıyı sürükleyerek o uygulamanın ses seviyesini %0'dan %200'e ayarlayın. Anında sesinizi kapatmak için hoparlör simgesine tıklayın. Farklı durumlar için kaydedilmiş profiller arasında geçiş yapın. Otomatik eğiltme özelliğini etkinleştirin, bir arama başladığında müziğiniz otomatik olarak daha da sessizleşiyor.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — menü çubuğunda tek uygulama ses kaydırıcılarını gösteren macOS için uygulama başına ses mikseri" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Temel özellikler:</p>
<ul>
  <li><strong>Uygulama başına ses kaydırıcıları</strong> — Her çalışan uygulama için %0 ila %200 aralığı</li>
  <li><strong>Tek tıklamayla sessiz bırak</strong> — herhangi bir uygulamayı kaydırıcısını hareket ettirmeden sustur</li>
  <li><strong>Hacim profilleri</strong> — kaydet ve ses konfigürasyonları arasında geçiş</li>
  <li><strong>Otomatik ördülme</strong> — Görüşmeler sırasında müzik otomatik olarak azalır</li>
  <li><strong>Klavye kısayolları</strong> — mikseri aç tuşla kapatın veya tüm uygulamaları sessize alın</li>
  <li><strong>Çıkış cihazı anahtarlaması</strong> — aynı panelden hoparlör/kulaklık değiştirin</li>
  <li><strong>Hacim belleği</strong> — her uygulamanın yeniden başlatma arasındaki ses seviyesini hatırlar</li>
</ul>

<p>Tek seferlik satın alma. Abonelik yok. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial Mac App Store'dan alın</a>.</p>
`,
  },
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "Mac için En İyi Background Music Alternatifi (2026)",
    description: "Background Music daha yeni macOS'yu mu kullanıyor? Uygulama başına en güvenilir ses karıştırıcı alternatifi, güçlendirme ve profillere sahip korumalı alanlı bir Mac App Store uygulaması olan SoundDial'dur.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS güncellemesinden sonra Background Music çalışmayı durdurduysa en güvenilir alternatif <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — Mac App Store'dan uygulama başına bir menü çubuğu ses karıştırıcısı. Her uygulamaya kendi ses düzeyi kaydırıcısını verir, sessize alma, yükseltme, ses profilleri ve otomatik kısma ekler ve tamamen korumalı alana alınmış ve Apple tarafından incelenmiş olduğundan bir sonraki macOS sürümünde kırılacak ses sürücüleri yok.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac için En İyi Background Music Alternatifi (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Background Music neden daha yeni macOS'da başarısız oluyor?</h2>

<p>Background Music gerçekten akıllı, ücretsiz, açık kaynaklı bir projedir. Mac kullanıcılarına Apple'ın asla sahip olmadığı bir şeyi verdi: Windows'nun yıllardır sahip olduğu türden uygulama başına ses mikseri. Ancak tasarımı aynı zamanda başarısız olmaya devam etmesinin de nedenidir.</p>

<p>Sesi yönlendirmek ve kontrol etmek için Background Music, Mac cihazınızın sesini kesen, sistem düzeyinde bir sürücü olan sanal bir ses cihazı yükler. Bu yaklaşım eski macOS'da işe yaradı ancak her büyük sürüm, çekirdek ve ses uzantıları etrafındaki güvenliği sıkılaştırıyor. Kullanıcıların bildirdiği yaygın belirtiler:</p>

<ul>
<li>Kurulumdan veya işletim sistemi güncellemesinden sonra hiç ses gelmiyor.</li>
<li>Sanal aygıt yüklenemediği için ses yönlendirme sessizce durdurulur.</li>
<li>Uygulamanın kurtarılması için yeniden yükleme, yeniden başlatma veya sürücünün manuel olarak kaldırılması gerekiyor.</li>
<li>Geliştirme topluluk odaklı ve gönüllü tempolu olduğundan yeni macOS'ya yönelik düzeltmeler gecikebilir.</li>
</ul>

<p>Bunların hiçbiri Background Music'yu "kötü" yapmaz. Bu sadece, ücretsiz bir sürücü tabanlı aracın doğası gereği kırılgan olduğu anlamına gelir ve her gün uygulama başına hacime güveniyorsanız, bu kırılganlık hızla eskir.</p>

<h2>Bir yedekte nelere dikkat edilmeli?</h2>

<p>Herhangi bir alternatifi seçmeden önce gerçekte neye ihtiyacınız olduğuna karar verin:</p>

<ul>
<li><strong>macOS güncellemelerinde güvenilirlik.</strong> Bir çekirdek veya ses uzantısı yüklerse ara sıra kırılmalar yaşanabilir.</li>
<li><strong>Gerçek uygulama başına kontrol.</strong> Her uygulama için bağımsız ses seviyesi ve sessize alma temeldir.</li>
<li><strong>Arttır.</strong> Bazı uygulamalar (sessiz toplantı araçları, belirli tarayıcılar) çok sessizdir; %100'ü aşmak istersiniz.</li>
<li><strong>Kolaylık özellikleri.</strong> Profiller ve otomatik kapanma, bir yardımcı programı tüm gün açık tuttuğunuz bir şeye dönüştüren şeydir.</li>
<li><strong>Güvenli kurulum.</strong> Korumalı alana alınmış bir Mac App Store uygulaması sistemin dahili bileşenlerine dokunamaz, bu nedenle kaldırma işlemi temizdir ve güncellemeler otomatiktir.</li>
</ul>

<h2>SoundDial neden güvenilir seçimdir?</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Background Music kullanıcılarının karşılaştığı sorunu tam olarak çözmek için tasarlandı: uygulama başına hacim istiyorlar, ancak bir sürücüye bakıcılık yapmak istemiyorlar. Menü çubuğunuzda bulunur ve temel işini iyi yapar:</p>

<ul>
<li><strong>Her uygulama için bağımsız ses düzeyi</strong>, aynı panelde uygulama başına sessize alma özelliğiyle.</li>
<li><strong>Uygulama başına artış</strong> sessiz uygulamaları gerçekten duyabilecek kadar yüksek sesle yapmak.</li>
<li><strong>Hacim profilleri</strong> — bir karışımı kaydedin ("toplantı" veya "oyun") ve her seferinde kaydırıcıları sürüklemek yerine anında geçiş yapın.</li>
<li><strong>Otomatik eğilme</strong>Böylece arka plan sesi olması gerektiği anda otomatik olarak azalır.</li>
<li><strong>Hızlı çıkış değiştirme</strong> hoparlörler, kulaklıklar ve diğer cihazlar arasında.</li>
</ul>

<p>En büyük fark, nasıl kurulduğudur. SoundDial, Mac App Store aracılığıyla gönderilir; bu, Apple tarafından incelendiği ve korumalı alana alındığı anlamına gelir. Sürüklenecek DMG yok, ses sürücüsü veya sistem uzantısı yok ve çekirdek erişimi yok. Yeni bir macOS geldiğinde Background Music'nun yaptığı gibi kırılmamasının en önemli nedeni budur; Apple'ın kilitlemeye devam ettiği sistem parçalarına bağlı değildir.</p>

<p>Maliyeti <strong>€14,99 tek seferlik</strong>. Ücretsiz değil, ancak abonelik yok ve bakımı yapılan ve kurulumu güvenli bir şey için para ödüyorsunuz.</p>

<h2>SoundDial ve Background Music ve ücretsiz araçlar</h2>

<p>Background Music tek ücretsiz seçeneğiniz değil, bu yüzden işte arazinin dürüst bir planı:</p>

<ul>
<li><strong>Background Music (ücretsiz, açık kaynak):</strong> uygulama başına hacim, ancak sürücü tabanlı, daha yeni macOS'da kırılmaya eğilimli ve güçlendirme, profiller ve otomatik azaltmadan yoksun.</li>
<li><strong>FineTune (ücretsiz, açık kaynak):</strong> Uygulama başına hafif bir menü çubuğu hacim uygulaması. Tek gereksiniminiz ücretsizse iyi, ancak ekstralar zayıf.</li>
<li><strong>eqMac (ücretsiz):</strong> öncelikle bir sistem EQ ve güçlendirici, gerçek bir uygulama başına karıştırıcı değil.</li>
<li><strong>Rogue Amoeba'dan SoundSource (~39$):</strong> uygulama başına EQ ve tam çıkış yönlendirmesi ile profesyonel düzeyde seçenek. Mükemmel, ancak SoundDial'nun fiyatının iki katından fazla ve yine de bir indirme artı bir ses yakalama sürücüsü gerektiriyor.</li>
<li><strong>SoundDial (14,99 €, Mac App Store):</strong> orta yol — sürücüsüz, temiz, korumalı alan kurulumu olarak sunulan, uygulama başına gerçek ses seviyesi, sessize alma, artırma, profiller ve engelleme.</li>
</ul>

<p>Uygulama başına EQ'ya veya karmaşık stüdyo yönlendirmeye ihtiyacınız varsa, SoundSource ekstra paraya değer. Ücretsiz bir tamirci aracı istiyorsanız ve ara sıra meydana gelen kırılmaları tolere edebiliyorsanız, FineTune veya Background Music işinizi görecektir. Ancak amacınız "her uygulamaya kendi hacmini vermek ve her macOS güncellemesini bozmasına son vermek" ise, SoundDial bu hedefe en az zorlukla ulaşır.</p>

<h2>Bunu gerekli kılan macOS bağlamı</h2>

<p>Açıkça söylemekte fayda var: macOS'da yerleşik uygulama başına ses karıştırıcısı yoktur. Windows'nun ses düzeyi açılır menüsünde yıllardır bir tane bulunur, ancak Mac'da sistem kaydırıcısı her şeyi aynı anda kontrol eder. Background Music ve SoundDial gibi araçların var olmasının tek nedeni bu boşluktur. Apple bunu doldurmadığından pratik soru, hangi üçüncü taraf yaklaşımına güveneceğinizdir: işletim sistemiyle savaşan ücretsiz bir sürücü veya onunla çalışan korumalı alanlı bir uygulama.</p>

<p>Bozuk ses sürücüleriyle mücadeleyi bırakmaya hazır mısınız? Al <a href="https://apps.apple.com/app/id6772792641">Mac App Store üzerinde SoundDial</a> 14,99 € karşılığında ve her uygulamanın sesini güvenilir bir şekilde kontrol edin.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial: Hangi Mac Volume Uygulaması Kazanır?",
    description: "SoundSource (39 $, profesyonel sınıf) ile SoundDial (14,99 €, App Store). Sizin için doğru Mac karıştırıcıyı seçmek için uygulama başına ses seviyesini, artırmayı, profilleri ve otomatik azaltmayı karşılaştırın.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Yalnızca temiz bir şekilde yüklenen ve daha az maliyetli olan uygulama başına ses kontrolü istiyorsanız, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> çoğu kişi için daha iyi bir satın almadır: Mac App Store'dan tek seferlik 14,99 €, uygulama başına ses seviyesi, sessize alma, yükseltme, profiller ve otomatik azaltma özellikleriyle. Rogue Amoeba'nun SoundSource'sunu (~39 $) yalnızca özellikle uygulama başına EQ'ya ve gelişmiş çıktı yönlendirmeye ihtiyacınız varsa seçin.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial: Hangi Mac Volume Uygulaması Kazanır?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Kısa versiyon</h2>
<p>macOS'da hâlâ yerleşik uygulama başına ses karıştırıcısı yok. Windows'da yıllardır böyle bir özellik var, ancak Mac'da sistem ses düzeyi kaydırıcısı her şeyi aynı anda hareket ettiriyor. Hem SoundSource hem de SoundDial bu açığı kapatmak için var. Sadece farklı alıcıları hedefliyorlar.</p>
<ul>
<li><strong>SoundDial</strong> — Tek seferlik 14,99 €, Mac App Store, menü çubuğu uygulaması. Uygulama başına bağımsız ses seviyesi, uygulama başına sessize alma, uygulama başına yükseltme, kayıtlı profiller, otomatik azaltma ve hızlı çıkış değiştirme. Korumalı alana alınmış ve Apple tarafından incelenmiş olduğundan sürücü kurulumu gerekmez.</li>
<li><strong>SoundSource</strong> — ~39$, Rogue Amoeba'dan doğrudan indirme. Yukarıdakilerin hepsine ek olarak uygulama başına EQ, gelişmiş çıkış yönlendirme ve ses efektleri. Küçük bir ses yakalama sürücüsünün yüklenmesini gerektirir.</li>
</ul>

<h2>Fiyat ve nasıl satın alacağınız</h2>
<p>Bu en net bölünmedir. SoundSource'nun fiyatı yaklaşık 39 dolar ve doğrudan Rogue Amoeba tarafından satılıyor. SoundDial, Mac App Store'da tek seferlik satın almada 14,99 €'dur; bu da fiyatın üçte birinden biraz fazladır.</p>
<p>Çünkü <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> App Store aracılığıyla gönderilir, korumalı alana alınır, noter onaylıdır ve Apple tarafından incelenir. Al'a tıklarsınız, yüklenir ve işlem tamamdır. Bağlanacak DMG yok, çekirdeğe bitişik bir bileşene verilecek izin yok ve ses sürücüsü veya sistem uzantısı yok. Ayrıca normal App Store güncelleme akışınızla birlikte çalışır ve aynı Apple Kimliğindeki diğer Mac'larınızla senkronize edilir.</p>
<p>SoundSource, App Store dışında indirme yapar ve her uygulamanın sesini yakalayıp işleyebilmesi için bir ses yakalama sürücüsü yükler. Profesyonel özelliklerinin kilidini açan şey budur, ancak aynı zamanda ekstra bir kurulum adımı ve sistemin daha derinlerinde yaşayan bir bileşen anlamına da gelir.</p>

<h2>SoundSource'nun yaptığı ama SoundDial'nun yapmadığı şey</h2>
<p>SoundSource, fiyatını belirli bir kullanıcı türü için hak ediyor. Bunlardan herhangi biri sizi tanımlıyorsa ekstra paraya değer:</p>
<ul>
<li><strong>Uygulama başına EQ.</strong> Zoom'yu düz bırakırken, örneğin Spotify'da 10 bantlı bir ekolayzır istiyorsunuz. SoundDial ses seviyesi sağlar, EQ değil.</li>
<li><strong>Gelişmiş çıktı yönlendirme.</strong> Hassas kontrolle bir uygulamayı hoparlörlerinize ve diğerini kulaklıklarınıza veya belirli bir arayüze gönderme.</li>
<li><strong>Ses efektleri ve eklentiler.</strong> SoundSource, efektleri uygulama bazında barındırabilir; gerçekten profesyonel bir alan.</li>
</ul>
<p>Rogue Amoeba'nun uzun ve güvenilir bir geçmişi var. SoundSource ciddi bir araçtır ve fiyatı da öyledir. Eğer bir ses uzmanıysanız veya yoğun çoklu çıkış kullanıcısıysanız, bu doğru karardır.</p>

<h2>SoundDial'nun günlük kullanımda daha iyi yaptığı şeyler</h2>
<p>"Mac ses mikseri" arayan çoğu kişinin EQ'ya ihtiyacı yoktur. Bir uygulamanın diğerinden daha sessiz olmasına ihtiyaç duyuyorlar ve onu almak için bir yükleyiciyle kavga etmek istemiyorlar. SoundDial bunu temiz bir şekilde ele alıyor ve bahsetmeye değer birkaç şey ekliyor:</p>
<ul>
<li><strong>Uygulama başına artış.</strong> Bazı uygulamalar ve videolar %100'de bile çok sessizdir. SoundDial, tek bir uygulamayı normal tavanının üzerine çıkarabilir, böylece sessiz bir toplantı veya podcast sonunda duyulabilir hale gelir.</li>
<li><strong>Hacim profilleri.</strong> Tam kurulumu kaydedin (müzik sesi kısıldı, tarayıcı sessize alındı, uygulamayı yüksek sesle arayın) ve anında geri çağırın. Beş kaydırıcıyı sürüklemeden "odaklanma", "toplantı" ve "oyun" arasında geçiş yapmak için idealdir.</li>
<li><strong>Otomatik eğilme.</strong> Başka bir kaynak başlatıldığında arka plan sesini (müzik gibi) otomatik olarak azaltın, böylece bildirimler, çağrılar veya videolar gizlenmez.</li>
<li><strong>Hızlı çıkış değiştirme.</strong> Menü çubuğundan hoparlörler, kulaklıklar ve diğer cihazlar arasında geçiş yapın.</li>
</ul>
<p>Bunların hepsi bir menü çubuğu açılır menüsünden çalıştırılır, bu nedenle bir tıklama uzaktadır ve geri kalan zamanlarda gözünüzün önünden uzaktadır.</p>

<h2>Kısaca ücretsiz alternatifler</h2>
<p>Aynı aramalarda bahsedilen birkaç ücretsiz seçeneği göreceksiniz. Şunları bilmeye değer:</p>
<ul>
<li><strong>Background Music</strong> — ücretsiz ve açık kaynak, size uygulama başına temel hacim sağlar. Ancak daha yeni macOS sürümlerinde bozulabilir ve yükseltme, profil veya otomatik azaltma özelliği yoktur.</li>
<li><strong>FineTune</strong> — ücretsiz, açık kaynaklı bir menü çubuğu ses düzeyi uygulaması. Basit ama kapsamı sınırlıdır.</li>
<li><strong>eqMac</strong> — ücretsiz EQ ve sistem güçlendirici, gerçek bir uygulama başına mikserden ziyade sistem çapında bir EQ aracı.</li>
</ul>
<p>Eğer işinize yararsa ücretsiz harikadır. Takas uyumluluk ve destektir: açık kaynaklı ses araçları macOS güncellemelerinin gerisinde kalabilir ve profiller ve eğilme gibi özellikler genellikle orada değildir. Kurulumunuz iş gününüz için önemliyse, gözden geçirilen ve bakımı yapılan bir şey için bir kez ödeme yapmak genellikle daha sakin bir yoldur.</p>

<h2>Hangisini satın almalısınız?</h2>
<p>Bir soruyu yanıtlayın: Uygulama başına EQ'ya mı yoksa gelişmiş çıktı yönlendirmesine mi ihtiyacınız var?</p>
<ul>
<li><strong>Evet</strong> — SoundSource satın alın. Bunun için tasarlandı ve ~ 39 $, sürücü düzeyinde bir motora sahip profesyonel bir araç için adil.</li>
<li><strong>Hayır, yalnızca uygulama başına ses düzeyi, artırma ve temiz bir yükleme istiyorum</strong> — SoundDial satın alın. Günlük olarak önemli olan miksajın yanı sıra profiller ve otomatik azaltma özelliğinin yanı sıra 14,99 € karşılığında ve sıfır sürücü zahmetine sahip oluyorsunuz.</li>
</ul>
<p>Mac kullanıcılarının büyük çoğunluğu için bu ikinci kova dürüst cevaptır. Bir stüdyo için değil, ses seviyesi kontrolü için para ödüyorsunuz.</p>

<p><strong>Mac birimini kolay yoldan düzeltmeye hazır mısınız?</strong> Al <a href="https://apps.apple.com/app/id6772792641">Mac App Store üzerinde SoundDial</a> — Tek seferlik 14,99 €, sürücü yok, DMG yok. Tek tıklamayla uygulama başına ses düzeyi, artırma, profiller ve otomatik azaltma.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Mac'da Uygulama Başına Hacim için Daha Ucuz Bir SoundSource Alternatifi",
    description: "39 ABD Doları fiyatı olmadan SoundSource tarzı uygulama başına hacim ister misiniz? SoundDial, yükseltme, profiller ve otomatik azaltma özelliklerine sahip, 14,99 €'luk bir Mac App Store menü çubuğu karıştırıcısıdır.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>Mac cihazınızda SoundSource tarzı uygulama başına ses kontrolü istiyorsanız ancak 39 $ çok yüksek geliyorsa, en hızlı ve güvenilir çözüm <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Bu, Mac App Store'nun 14,99 €'luk tek seferlik menü çubuğu karıştırıcısıdır ve her uygulamaya kendi ses kaydırıcısını, sesini kapatma ve yükseltme özelliğinin yanı sıra profiller ve otomatik kısma özelliği sunar; hiçbir indirme veya ses sürücüsü yüklemeye gerek yoktur.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Uygulama Başına Hacim için Daha Ucuz Bir SoundSource Alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>İnsanlar neden SoundSource alternatifi arıyor?</h2>
<p>Rogue Amoeba'nun SoundSource'su mükemmel bir yazılımdır. Gerçekten profesyonel seviyede: uygulama başına ekolayzerler, ses efektleri ve bir uygulamayı kulaklığınıza, diğerini hoparlörlerinize göndermenizi sağlayan çıkış yönlendirme. Ancak bu güç iki sürtünme noktasıyla birlikte gelir. İlk olarak, fiyat – yaklaşık 39 dolar. İkincisi, App Store dışında, bazı kişilerin bir iş makinesinde dikkatli olduğu veya macOS güncellemelerini yönetmek istemediği, sistem düzeyinde bir ses yakalama sürücüsü yükler.</p>
<p>Çoğu kişi için asıl ihtiyaç çok daha basittir: Zoom çağrısına dokunmadan Spotify'yu kapatın, gürültülü bir tarayıcı sekmesi uygulamasının sesini kapatın veya sessiz bir video oynatıcıyı %100'ün üzerine çıkarın. Eğer bu sizseniz, hiçbir zaman açmayacağınız özellikler için profesyonel para ödüyorsunuz demektir.</p>

<h2>SoundDial ne yapar ve maliyeti nedir?</h2>
<p>SoundDial, uygulama başına hacim işine odaklanır ve bunu temiz bir şekilde yapar. Menü çubuğunu açtığınızda, her biri kendi kontrolüne sahip olan, ses çıkaran her şeyin canlı bir listesini alırsınız:</p>
<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — uygulama başına gerçek zamanlı olarak ayarlanan bir kaydırıcı.</li>
<li><strong>Uygulama başına sessize alma</strong> — başka hiçbir şeyi duraklatmadan bir uygulamayı anında susturun.</li>
<li><strong>Uygulama başına ses artırma</strong> — Bir video veya çağrı çok yumuşak olduğunda sessiz uygulamaları normal maksimum değerlerinin üzerine çıkarın.</li>
<li><strong>Hacim profilleri</strong> — bir karışımı kaydedin (ör. "Odak", "Oyun", "Toplantı") ve tek tıklamayla geçiş yapın.</li>
<li><strong>Otomatik eğilme</strong> — daha önemli bir şey oynatılmaya başladığında diğer uygulamaları otomatik olarak indirir.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden hoparlörler, kulaklıklar ve diğer cihazlar arasında geçiş yapın.</li>
</ul>
<p>Fiyat: <strong>€14,99, bir kez ödendi</strong> - abonelik yok. Bu, çoğu kullanıcının gerçekte ulaştığı hacim özellikleri açısından SoundSource'nun maliyetinin kabaca üçte biri kadardır.</p>

<h2>App Store farkı</h2>
<p>Çünkü SoundDial şu adresten gönderilir: <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, Apple tarafından incelendi ve korumalı alana alındı. Sürüklenecek DMG yok, onaylanacak çekirdek uzantısı veya ses yakalama sürücüsü yok ve ayrı bir güncelleyici yok. Bunu diğer App Store uygulamaları gibi yüklersiniz ve çalışır. macOS güncellendiğinde, düşük seviyeli bir ses bileşeninin hala çalışıp çalışmadığını merak etmiyorsunuz.</p>
<blockquote>macOS'da hâlâ yerleşik uygulama başına ses karıştırıcısı yok. Windows'da yıllardır böyle bir araç var, ancak Mac'da sistem birimi ya hep ya hiç şeklindedir; bu da tam olarak bu araçların doldurduğu boşluktur.</blockquote>

<h2>Ücretsiz seçeneklerle karşılaştırıldığında nasıldır?</h2>
<p>SoundSource tek alternatifiniz değil. Ücretsiz araçlar vardır ve bunlar konusunda dürüst olmak önemlidir:</p>
<ul>
<li><strong>Background Music</strong> ücretsiz, açık kaynaklı, uygulama başına bir hacim uygulamasıdır. Birçok kişi için işe yarar, ancak daha yeni macOS sürümlerinde bozulabilir, güncellemeler düzensizdir ve güçlendirmesi, profili yoktur ve otomatik azaltma özelliği yoktur.</li>
<li><strong>FineTune</strong> ücretsiz, açık kaynaklı bir menü çubuğu ses uygulamasıdır; hafif ve kullanışlıdır, ancak yine profil ve eğilme özelliklerinden yoksundur.</li>
<li><strong>eqMac</strong> ücretsiz bir EQ ve sistem güçlendiricidir. Bu, gerçek bir uygulama başına karıştırıcıdan ziyade bir ekolayzır/güçlendirme aracıdır ve bireysel uygulama kaydırıcılarına odaklanmaz.</li>
</ul>
<p>Ücretsiz meşru bir seçimdir. Buradaki ödün, güvenilirlik ve özelliklerdir: açık kaynaklı ses araçları gönüllü bakıma bağlıdır ve macOS değişikliklerinin gerisinde kalabilir ve ücretsiz seçeneklerden hiçbiri paket profilleri artı SoundDial'nun yaptığı gibi otomatik azaltmanın hiçbiri değildir. Kurulumunuz basitse ve ara sıra meydana gelen kırılmalardan rahatsız olmuyorsanız, ücretsiz bir uygulama yeterli olabilir. Bakımı yapılan, korumalı alana alınmış ve çalışır durumda bir şey istiyorsanız, 14,99 € size tam olarak bunu satın alıyor.</p>

<h2>Hızlı karar kılavuzu</h2>
<ul>
<li><strong>Uygulama başına EQ'ya, ses efektlerine ve bir uygulamayı farklı bir çıkış cihazına yönlendirmeye ihtiyacınız var</strong> → SoundSource fiyatına değer. Buradaki hiçbir şey bunun yerini tam olarak alamaz.</li>
<li><strong>Temel olarak uygulama başına ses düzeyine, ses kapatmaya, yükseltmeye, profillere ve sürücülere ihtiyaç duymadan ses kısmaya ihtiyacınız var</strong> → 14,99€'luk SoundDial daha iyi değere sahip seçimdir.</li>
<li><strong>Ücretsiz istiyorsun ve bakım riskine aldırış etmiyorsun</strong> → önce Background Music, FineTune veya eqMac'yu deneyin.</li>
</ul>

<h2>Ayarlama</h2>
<p>Başlamak yaklaşık bir dakika sürer:</p>
<ul>
<li>SoundDial'yu Mac App Store'dan yükleyin; harici indirme gerekmez.</li>
<li>İlk başlatmada macOS istemlerine ses izni verin.</li>
<li>Birkaç uygulamada ses çalın ve menü çubuğu simgesini açın; her birinin kendi kaydırıcısını göreceksiniz.</li>
<li>Seviyeleri ayarlamak için sürükleyin, sessize almak için dokunun veya artırmak için %100'ü geçin.</li>
<li>Kurulumunuzu bir profil olarak kaydedin ve diğer uygulamaların aramalar veya medya sırasında sessiz kalmasını istiyorsanız otomatik ses kısmayı açın.</li>
</ul>
<p>Tüm iş akışı bu kadar; yapılandırma dosyası yok, yeniden başlatma yok, kutlanacak sistem uzantısı yok.</p>

<h2>Sonuç olarak</h2>
<p>SoundSource daha güçlü bir araçtır, ancak onu arayan çoğu kişi yalnızca uygulama başına uygun hacmi istiyor. SoundDial bunu fiyatının yaklaşık üçte biri karşılığında sağlıyor, App Store aracılığıyla güvenli bir şekilde gönderiliyor ve tek bir sürücü yüklemeye gerek kalmadan profilleri ve otomatik eğilmeyi de ekliyor.</p>

<p>Her uygulamanın sesini bağımsız olarak kontrol etmeye hazır mısınız? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> tek seferlik 14,99 € karşılığında.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "Mac için FineTune Alternatifi: Desteklenen Uygulama Başına Ses Düzeyi Karıştırıcısı",
    description: "Ücretsiz FineTune menü çubuğu uygulamasını denediniz ve bir şeyin bakımının yapılmasını ve App Store güvenli olmasını mı istiyorsunuz? İşte Mac'da uygulama başına ses düzeyi için en iyi FineTune alternatifi.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>FineTune'yu beğendiyseniz ancak güvenilir bir kaynaktan aktif olarak bakımı yapılan ve yüklenen bir şey istiyorsanız, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> en hızlı güvenilir düzeltmedir. Bağımsız ses seviyesi, uygulama başına sessize alma, ses yükseltme, kayıtlı profiller ve otomatik kısma özelliklerine sahip bir Mac App Store menü çubuğu uygulama başına ses karıştırıcısıdır. Apple tarafından incelendi ve korumalı alana alındı; herhangi bir sürücü yüklenmeden maliyeti tek seferde 14,99 Euro'dur.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac için FineTune Alternatifi: Desteklenen Uygulama Başına Ses Düzeyi Karıştırıcısı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden bir FineTune alternatifi aramalısınız?</h2>

<p>FineTune güzel bir fikir: macOS'da uygulama başına ses kontrolü sağlayan ücretsiz, açık kaynaklı bir menü çubuğu uygulaması, Apple'ın hala geliştirmeyi reddettiği bir şey (Windows'nun yıllardır uygulama başına bir mikseri vardı). Birçok insan için temel işi yapar. Ancak kullanıcıların başka bir şey aramaya başlamasının gerçek nedenleri var.</p>

<ul>
<li><strong>Bakım belirsizdir.</strong> Açık kaynaklı hobi projeleri, tek bir bakımcının boş zamanlarında yaşar ve ölür. macOS büyük bir güncelleme gönderdiğinde, genellikle ilk bozulan ses ile ilgili uygulamalar oluyor ve siz de hiçbir zaman gelmeyebilecek gönüllü bir düzeltmeyi beklemek zorunda kalıyorsunuz.</li>
<li><strong>Özellik tavan.</strong> FineTune, uygulama başına hacmi ve bunun dışında pek az şeyi kapsar. %100'ün üzerinde bir artış, kayıtlı profiller veya otomatik eğilme istiyorsanız diğer araçları kullanmanız gerekir.</li>
<li><strong>Güven ve güncellemeler.</strong> App Store dışında ham bir yapı yüklemek, otomatik incelemenin olmayacağı, sanal alan garantisinin olmayacağı ve manuel güncellemeleri kendiniz takip etmeniz gerektiği anlamına gelir.</li>
</ul>

<p>Bunların hiçbiri FineTune'yu kötü yapmaz. Bu sadece, her gün uygulama başına sese güveniyorsanız, muhtemelen arkasında destek modeli olan bir şey isteyeceğiniz anlamına gelir.</p>

<h2>SoundDial'nun farklı yaptığı şey nedir?</h2>

<p>SoundDial, çalışan her uygulama için kaydırıcılı bir menü çubuğu karıştırıcısı olan aynı temel fikirden yola çıkıyor ve daha sonra uzman kullanıcıların gerçekten istediği özelliklerle daha da ileri gidiyor.</p>

<ul>
<li><strong>Uygulama başına bağımsız ses seviyesi.</strong> Tek bir menüden Spotify'yu kısın, aramanızı tam ses seviyesinde tutun, gürültülü bir tarayıcı sekmesi uygulamasını tamamen sessize alın.</li>
<li><strong>Uygulama başına ses artışı.</strong> Bir podcast veya videonun ana kopyası çok düşük düzeyde olduğunda sessiz bir uygulamayı normal tavanının üzerine itin. FineTune bunu yapmaz.</li>
<li><strong>Hacim profilleri.</strong> Bir karışımı kaydedin, "odaklayın", "oyun", "toplantılar" yapın ve beş kaydırıcıyı kaydırmak yerine tek tıklamayla tüm kurulumunuzu değiştirin.</li>
<li><strong>Otomatik eğilme.</strong> Daha önemli bir şey çalmaya başladığında arka plan sesini otomatik olarak azaltın, böylece bir arama geldiğinde müzik kısılır.</li>
<li><strong>Hızlı çıkış değiştirme.</strong> Sistem Ayarlarına dalmadan hoparlörler, kulaklıklar ve diğer çıkışlar arasında geçiş yapın.</li>
</ul>

<p>Çünkü <a href="https://apps.apple.com/app/id6772792641">SoundDial, Mac App Store aracılığıyla gönderilir</a>, Apple tarafından incelenir ve korumalı alana alınır, temiz bir şekilde yüklenir ve diğer tüm App Store uygulamalarıyla aynı mekanizma aracılığıyla güncellenir. Sürüklenecek DMG yok, ses sürücüsü veya sistem uzantısı yok ve çekirdek düzeyinde bir bileşene izin vermenizi isteyen bir güvenlik istemi yok.</p>

<h2>SoundDial ve FineTune karşılaştırması ve diğer ücretsiz araçlar</h2>

<p>FineTune tek ücretsiz seçenek değildir ve tüm manzarayı dürüstçe görmenize yardımcı olur.</p>

<ul>
<li><strong>FineTune</strong> — Ücretsiz, açık kaynaklı, uygulama başına menü çubuğu hacmi. Basit ve hafiftir ancak destek yoktur, profil yoktur, eğilme yoktur ve bakım topluluğa bağlıdır.</li>
<li><strong>Background Music</strong> — Ücretsiz ve açık kaynaktır; uygulama başına sesi yönlendirir ve ayarlar. Gerçekten kullanışlıdır, ancak daha yeni macOS sürümlerinde bozulabilir ve güçlendirme, profiller ve eğilme özelliklerinden yoksundur.</li>
<li><strong>eqMac</strong> — Ücretsiz EQ ve sistem güçlendirici. Esas olarak bir ekolayzır istiyorsanız harika, ancak uygulama başına bir karıştırıcı değil.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — Uygulama başına EQ ve çıktı yönlendirmeyle birlikte profesyonel düzeyde seçenek yaklaşık 39 ABD dolarıdır. Mükemmel, ancak bir indirme artı bir ses yakalama sürücüsüne ihtiyacı var ve maliyeti iki katından fazla.</li>
<li><strong>SoundDial</strong> — Tek seferlik 14,99 €, App Store güvenli, sürücü yok. Uygulama başına ses seviyesi temel özelliklerinin üzerine yükseltme, profiller ve otomatik azaltma özelliklerini ekler.</li>
</ul>

<p>Dürüst özet: Kesinlikle en ucuz şeyi istiyorsanız ve yalnızca uygulama başına temel hacme ihtiyacınız varsa, ücretsiz araçlar işe yarayabilir. Uygulama başına EQ ve yönlendirme istiyorsanız ve bir sürücüye ödeme yapmayı ve sürücü yüklemeyi sorun etmiyorsanız, SoundSource ağır siklettir. SoundDial tatlı noktada oturuyor, ücretsiz uygulamalardan daha yetenekli, SoundSource'dan önemli ölçüde daha ucuz ve Apple'ın incelemesi ve korumalı alana alması nedeniyle kurulumu her ikisinden de daha güvenli.</p>

<h2>FineTune'dan geçiş</h2>

<p>Geçiş birkaç dakika sürer ve herhangi bir temizleme ritüeli yoktur.</p>

<ul>
<li>Mac App Store'dan SoundDial'yu yükleyin. Yükleyici yok, sürücü onayı yok, yeniden başlatma yok.</li>
<li>Çalışan her uygulamaya ilişkin kaydırıcıyı görmek için menü çubuğunuzdaki SoundDial simgesini tıklayın.</li>
<li>Günlük mix'inizi ayarlayın, ardından profil olarak kaydedin, böylece anında geri çağırabilirsiniz.</li>
<li>İsteğe bağlı olarak otomatik kısmayı açın, böylece arka plan sesi aramalar ve uyarılar için bir kenara bırakılır.</li>
<li>Mutlu olduğunuzda FineTune'dan çıkın. Her iki uygulama da sistem sürücülerini yüklemediğinden, kaldırılması gereken hiçbir şey yoktur.</li>
</ul>

<p>Apple'ın size asla vermediği temiz bir menü çubuğu karıştırıcısı olan FineTune ile ilgili beğendiğiniz şeyleri saklarsınız ve bakımı yapılan bir App Store uygulamasının sağladığı desteği, profilleri, eğilmeyi ve uzun vadeli desteği kazanırsınız.</p>

<h2>Sonuç olarak</h2>

<p>FineTune şu konsepti kanıtlıyor: uygulama başına ses seviyesi menü çubuğuna aittir. SoundDial, gerçek bir destek modeli, daha fazla özellik ve App Store güvenliği ile bu konseptin neye benzediğine benziyor; gönüllü bakım üzerine bahis yerine tek seferlik 14,99 € karşılığında.</p>

<p>Bakımlı kalan uygulama başına bir karıştırıcıya hazır mısınız? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> ve her uygulamanın ses seviyesini saniyeler içinde kontrol edin.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "Mac'da Gerçek Uygulama Başına Hacim için eqMac Alternatifi",
    description: "eqMac'nun güçlendirmesini beğendiniz ancak uygulama başına uygun ses düzeyine, sessize ve profillere mi ihtiyacınız var? SoundDial, en hızlı Mac App Store düzeltmesidir — 14,99 €, korumalı alanda, sürücü yok.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>EQ ve ses yükseltici için eqMac'yu kullandıysanız ancak her uygulama için gerçekten bağımsız ses düzeyine ek olarak sessize alma, yükseltme ve kaydedilmiş profiller istiyorsanız, en hızlı ve güvenilir çözüm şudur: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Bu bir Mac App Store menü çubuğu karıştırıcısıdır: Uygulama başına bir seviye belirleyin, sessiz olanları artırın ve profilleri anında değiştirin. €14,99 tek seferlik, korumalı alanda, yüklenecek sürücü yok.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Gerçek Uygulama Başına Hacim için eqMac Alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac ve gerçekte ihtiyacınız olan şey</h2>

<p>eqMac sağlam ve ücretsiz bir araçtır ve sistem çapındaki ekolayzırı ve ses yükselticisi gerçekten kullanışlıdır. Ancak eqMac, bir ana EQ ve bir ana çıkış etrafında oluşturulmuştur. Size gerçek bir uygulama başına ses karıştırıcısı sağlamaz - Windows'nun yıllardır sahip olduğu bir şey ve macOS hala yerel olarak gönderilmiyor.</p>

<p>Yani asıl sorununuz "Spotify görüşme sırasında çok yüksek ses çıkarıyor" veya "bu oyun kulaklarımı patlatıyor ama diğer her şey yolunda" ise eqMac bu iş için doğru şekil değil. Sonunda tek bir ana kaydırıcıyı kullanmak veya her uygulamanın dahili ses düzeyiyle uğraşmak zorunda kalırsınız. SoundDial'nun doldurduğu boşluk budur.</p>

<h2>SoundDial'nun yaptığı ama eqMac'nun yapmadığı şey</h2>

<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — Müzik %40'ta, tarayıcı %100'de, görüntülü görüşme %70'te, hepsi aynı anda hatırlanıyor.</li>
<li><strong>Uygulama başına sessize alma</strong> — Gürültülü bir uygulamayı başka hiçbir şeye dokunmadan anında susturun.</li>
<li><strong>Uygulama başına artış</strong> — eqMac'nun güçlendiricisinin yaptığı gibi sessiz bir uygulamayı normal tavanının ötesine itin, ancak tüm sistem yerine tek bir uygulamayı hedefleyin.</li>
<li><strong>Hacim profilleri</strong> — "Odaklanma", "Oyun" veya "Toplantı" gibi ayarları kaydedin ve tek tıklamayla tüm karışımı değiştirin.</li>
<li><strong>Otomatik eğilme</strong> — daha önemli bir şey başladığında arka plan sesini otomatik olarak keser, böylece aramanın ortasında kaydırıcıyı bulmaya çalışmazsınız.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — menü çubuğundan hoparlörler, kulaklıklar ve diğer çıkışlar arasında geçiş yapın.</li>
</ul>

<p>eqMac ile örtüşme temel olarak artıştır. Diğer her şey (mikser, ses kapatma, profiller, eğilme) eqMac'nun hiçbir zaman kapsamak üzere tasarlanmadığı bir alandır.</p>

<h2>Hala EQ'yu istiyor musun?</h2>

<p>Hangi sorunu çözdüğünüz konusunda dürüst olun. Gerçekten frekans EQ'ya ihtiyacınız varsa (basları kesmek, sert tizleri yumuşatmak, tüm sisteminizin tonunu şekillendirmek), o zaman eqMac'nun hala bir yeri var ve ücretsizdir. SoundDial bir ekolayzır değil, bir ses karıştırıcısıdır.</p>

<p>Ancak çoğu kişi eqMac'nun güçlendiricisine frekansları şekillendirmek istedikleri için değil, bir uygulamanın daha yüksek ses çıkarmasını veya miksajın dengeli olmasını istedikleri için ulaşıyor. Eğer bu sizseniz, özel bir mikser daha temiz bir cevaptır. Hatta her ikisini de çalıştırabilirsiniz: eqMac'yu sistem çapında bir EQ eğrisi için tutun ve uygulama başına seviyeler için SoundDial'yu kullanın. Aynı iş için kavga etmiyorlar.</p>

<h2>Diğer Mac ses araçlarıyla karşılaştırması</h2>

<p>Zaten alet avcılığı yaptığınıza göre, işte dürüst manzara:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> - uygulama başına EQ ve tam çıktı yönlendirme ile profesyonel düzeyde seçenek yaklaşık 39 ABD dolarıdır. Güçlüdür ancak doğrudan indirilmesi gerekir ve bir ses yakalama sürücüsü yüklenir. Tek istediğiniz profillerle birlikte uygulama başına hacimse, fazladan ve daha pahalıdır.</li>
<li><strong>Background Music</strong> — ücretsiz ve açık kaynak, ancak daha yeni macOS sürümlerinde bozulabilir ve güçlendirme, profil ve otomatik azaltma özelliği yoktur. İşe yaradığında harika, çalışmadığında sinir bozucu.</li>
<li><strong>FineTune</strong> — ücretsiz, açık kaynaklı bir menü çubuğu uygulaması. Özellikler ve cila açısından daha hafif olsa da, zor gereksinim 0 $ ise bir göz atmaya değer.</li>
<li><strong>eqMac</strong> — ücretsiz EQ artı güçlendirici, ancak yukarıda anlatıldığı gibi gerçek uygulama başına karıştırıcı yok.</li>
</ul>

<p>SoundDial tatlı noktada oturuyor: SoundSource'dan daha odaklanmış ve daha ucuz, ücretsiz seçeneklerden daha yetenekli ve daha güvenilir ve eqMac'nun yapmadığı uygulama başına işi yapıyor.</p>

<h2>Mac App Store neden burada önemli?</h2>

<p>Bu araçların birçoğu doğrudan indirmeyi ve çekirdek düzeyinde veya yakalama ses sürücüsünü gerektirir. Bunlar işe yarıyor, ancak bir macOS güncellemesine takılabilecek veya kilitli bir Mac çalışmasına takılıp düşebilecek türden şeyler.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bunun yerine Mac App Store aracılığıyla gönderilir. Bu, uygulamanın Apple tarafından incelendiği ve korumalı alana alındığı, DMG sürüklenmeden temiz bir şekilde yüklendiği ve onaylanacak ses sürücüsü veya sistem uzantısı olmadığı anlamına gelir. Güncellemeler diğer uygulamalar gibi App Store üzerinden gelir ve kaldırma işlemi normal bir silme işlemidir. Sesinize dokunan bir menü çubuğu yardımcı programı için bu daha düşük sürtünmeli, daha düşük riskli yol çok değerlidir.</p>

<h2>Hızlı kurulum</h2>

<ul>
<li>SoundDial'yu Mac App Store'dan yükleyin; yeniden başlatma yok, sürücü istemi yok.</li>
<li>Menü çubuğu simgesini açın; şu anda ses çıkaran her uygulama kendi kaydırıcısıyla görünür.</li>
<li>Seviyeleri ayarlayın, ihtiyacınız olmayan şeyleri sessize alın ve çok sessiz olan her şeyi yükseltin.</li>
<li>Düzenlemeyi bir profil olarak kaydedin, ardından oyun oynamak, arama yapmak veya odaklanmak için daha fazlasını oluşturun.</li>
<li>Arka plan sesinin otomatik olarak kenara çekilmesi için otomatik kısmayı açın.</li>
</ul>

<p>Bütün döngü bu. Birkaç dakika içinde eqMac'nun güçlendiricisinin yalnızca ima ettiği uygulama başına kontrole sahip olursunuz.</p>

<p><strong>Mac cihazınızda gerçek uygulama başına ses düzeyine hazır mısınız?</strong> <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> — 14,99 € tek seferlik, korumalı alana alınmış, sürücü yok ve bir menü çubuğu karıştırıcısının yapması gerekeni tam olarak yapıyor.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "2026'da Mac için En Ucuz İyi Hacimli Mikser",
    description: "2026'da Mac için en ucuz, iyi uygulama başına ses karıştırıcıyı mı arıyorsunuz? Fiyat, güvenlik ve özellikler açısından SoundDial, SoundSource, Background Music, FineTune ve eqMac'yu karşılaştırın.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>2026'da Mac için uygulama başına en iyi değere sahip ses karıştırıcısı: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>Mac App Store'da tek seferlik 14,99 € karşılığında bir menü çubuğu uygulaması. Her uygulamaya kendi ses kaydırıcısının yanı sıra sessize alma, yükseltme, profiller ve otomatik kısma özelliği sunar; sürücü yok, abonelik yok ve riskli indirmeler yok. Gerçekten güvenilir bir şekilde çalışan en ucuz ücretli seçenektir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 2026&#x27;da Mac için En Ucuz İyi Hacimli Mikser" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden "en ucuz"un bir tanıma ihtiyacı var?</h2>
<p>Mac için ücretsiz hacim araçları mevcut, dolayısıyla tek hedef sıfır harcamaksa seçenekleriniz var. Ancak ücretsizin maliyeti genellikle başka bir yere mal olur: yeni macOS sürümlerindeki kırılganlık, güçlendirme veya profiller gibi eksik özellikler veya güvenmeniz gereken bir ses yakalama sürücüsünü içeren bir yükleme işlemi. "En ucuz ürün", kullanmaya devam edeceğiniz istikrarlı, tam özellikli bir mikser almanızı sağlayacak en düşük fiyat anlamına gelir. Burada kullanacağımız lens bu.</p>

<h2>İlk olarak, macOS'nun yapmadığı şey</h2>
<p>Windows yıllardır uygulama başına ses karıştırıcıya sahiptir; hoparlör simgesine sağ tıklayın ve her uygulamayı bağımsız olarak ayarlayın. macOS'da hala yerleşik olarak eşdeğer bir şey yok. Bir ana birim ve bir uygulamanın gönderdiği dahili kaydırıcıyı alırsınız (Müzik, bazı tarayıcılar). Slack'yu Spotify'dan daha sessiz hale getirmenin veya sessiz bir video görüşmesini her şeyin ötesinde güçlendirmenin sistem çapında bir yolu yoktur. Aşağıdaki her seçenek bu boşluğu doldurmak için mevcuttur.</p>

<h2>Yarışmacılar dürüstçe fiyatlandırıldı</h2>

<h2>SoundDial — 14,99 €, tek seferlik</h2>
<p>SoundDial, menü çubuğunuzda bulunur ve çalışan her uygulamaya bağımsız bir ses düzeyi kaydırıcısı sağlar. Temel özelliklerin ötesinde, insanların gerçekten aradığı özellikleri de ekler:</p>
<ul>
<li><strong>Uygulama başına artış</strong> — Çok sessiz bir uygulamayı duymaya zorlamak yerine %100'ün üzerine çıkarın.</li>
<li><strong>Uygulama başına sessize alma</strong> — geri kalanına dokunmadan bir uygulamayı susturun.</li>
<li><strong>Hacim profilleri</strong> — bir "iş görüşmesi" veya "film gecesi" karışımını kaydedin ve anında geri çağırın.</li>
<li><strong>Otomatik eğilme</strong> — daha önemli bir şey çalındığında arka plan sesini otomatik olarak keser.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden hoparlörler, kulaklıklar ve diğer cihazlar arasında geçiş yapın.</li>
</ul>
<p>Çünkü Mac App Store üzerindedir, korumalı alandadır, Apple tarafından incelenir ve temiz bir şekilde kurulur; DMG yok, çekirdek uzantısı yok, onaylanacak ses sürücüsü yok. Sen öde <a href="https://apps.apple.com/app/id6772792641">€14,99 bir kez</a> ve ona sahip ol. Çoğu insan için bu en tatlı noktadır: kolay bir evet olacak kadar ucuz, büyüyemeyeceğiniz kadar eksiksiz.</p>

<h2>SoundSource – ~39 $, profesyonel seçenek</h2>
<p>Rogue Amoeba'nun SoundSource'su uzman kullanıcılar için altın standarttır. Uygulama başına ses seviyesini ayarlar ve SoundDial gibi sessize alır, ancak uygulama başına ekolayzırlarla ve tam çıkış yönlendirmeyle daha da ileri gider (bir uygulamayı kulaklığa, diğerini hoparlörlere gönderir). Gerçekten mükemmel - ancak kabaca 39 dolar ve izin vermeniz gereken bir ses yakalama bileşeniyle App Store'nun dışına kuruluyor. Uygulama başına EQ'ya veya karmaşık yönlendirmeye ihtiyacınız varsa, buna değer. Yalnızca temiz, ucuz bir mikser istiyorsanız asla dokunamayacağınız yetenekler için para ödüyorsunuz.</p>

<h2>Background Music — ücretsiz, açık kaynak</h2>
<p>Background Music, uygulama başına ses seviyesi ve otomatik duraklatma sunan, iyi bilinen ücretsiz, açık kaynaklı bir uygulamadır. İşin püf noktası: Sanal bir sürücü aracılığıyla Core Audio'ya derinlemesine bağlanıyor ve yeni macOS sürümlerinde kırılma konusunda uzun bir geçmişe sahip, bazen güncellemelerden sonra manuel düzeltmelere veya yeniden yüklemeye ihtiyaç duyuyor. Ayrıca güçlendirme, kaydedilmiş profiller ve otomatik eğilme gibi özelliklerden de yoksundur. Bakımı dert etmeyen tamirciler için harika; sadece çalışmasını istiyorsanız sinir bozucu.</p>

<h2>FineTune — ücretsiz, menü çubuğu</h2>
<p>FineTune ücretsiz, açık kaynaklı bir menü çubuğu ses düzeyi uygulamasıdır. Hafif ve hoştur ve uygulama başına basit ayarlamalar için yeterli olabilir. Ancak küçük ve ücretsiz bir proje olduğundan özellik derinliğiyle eşleşmiyor; profil yok, otomatik azaltma yok ve yükseltme/çıktı işlemleri sınırlı. Sıfır maliyet, uzun ömür ve destek konusunda daha az garanti.</p>

<h2>eqMac — ücretsiz, EQ + güçlendirici</h2>
<p>eqMac, ses yükselticiye sahip, sistem çapında ücretsiz bir ekolayzırdır. Bu, tek tek uygulamaları karıştırmaktan ziyade Mac'nuzun tamamında tonu ve ses yüksekliğini şekillendirmekle ilgilidir, dolayısıyla farklı bir iş için farklı bir araçtır. Özellikle uygulama başına kontrol istiyorsanız, eqMac gerçekten cevap değil, ancak iyi bir ücretsiz EQ.</p>

<h2>Fiyat ve değer: dürüst tablo</h2>
<ul>
<li><strong>Gerçekten ücretsiz, ancak bazı ödünler var:</strong> Background Music (kırılgan, sürücü tabanlı), FineTune (ince özellikler), eqMac (EQ, mikser değil).</li>
<li><strong>En ucuz tam ücretli uygulama:</strong> 14,99 € fiyatla SoundDial — güçlendirme, profiller, eğilme, App Store güvenliği.</li>
<li><strong>Premium/profesyonel:</strong> SoundSource ~39$ — EQ ve yönlendirme, App Store dışı kurulum.</li>
</ul>
<p>Başka bir deyişle: SoundDial, SoundSource'nun kabaca üçte birine mal oluyor ve insanların %90'ının gerçekten istediği özellikleri karşılıyor. Ve ücretsiz seçeneklerin aksine, macOS güncellemesinden sonra sessizce bozulmaz çünkü sistem düzeyinde hassas bir ses sürücüsüne bağlı değildir.</p>

<h2>Hangisini seçmelisiniz?</h2>
<p>Uygulama başına EQ'ya ihtiyaç duyan ve uygulamaları farklı çıkışlara yönlendirmek isteyen bir profesyonelseniz SoundSource satın alın; fiyatının karşılığını verir. Açık kaynağı seviyorsanız ve ara sıra meydana gelebilecek kesintileri sorun etmiyorsanız Background Music veya FineTune'yu ücretsiz deneyin. Ancak App Store'dan güvenli bir şekilde yüklenen bağımsız ses seviyesi, yükseltme, sessize alma, kaydedilebilir profiller ve otomatik azaltma gibi işe yarayan en ucuz seçeneği istiyorsanız, SoundDial 2026'nın açık değer kazananıdır.</p>

<blockquote>En iyi mikser, en çok özelliğe sahip olan veya en düşük fiyata sahip olan değil; bir kez kurup unutduğunuz mikserdir. 14,99 € fiyatıyla SoundDial bunu kolay bir arama haline getiriyor.</blockquote>

<p>Her uygulamaya kendi hacmini vermeye hazır mısınız? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> tek seferlik 14,99 € karşılığında — abonelik yok, sürücü yok, risk yok.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Mac için Windows Ses Düzeyi Karıştırıcısı: Uygulama Başına Ses Kontrolü Alın",
    description: "Mac cihazınızda Windows Ses Düzeyi Karıştırıcısını mı kaçırdınız? macOS'nun uygulama başına yerleşik ses kontrolü yoktur. İşte bunu elde etmenin en hızlı yolu: SoundDial, 14,99 €'luk bir menü çubuğu karıştırıcısı.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS'da Windows gibi yerleşik Ses Düzeyi Karıştırıcısı bulunmadığından uygulama başına ses düzeyini Sistem Ayarlarından ayarlayamazsınız. En hızlı ve güvenilir düzeltme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store'dan 14,99 €'luk bir menü çubuğu uygulaması. Her uygulamaya kendi ses kaydırıcısını, sessize alma ve yükseltme özelliğini sunar; sürücü yok, DMG yok, riskli kurulum yok.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac için Windows Ses Düzeyi Karıştırıcısı: Uygulama Başına Ses Kontrolü Alın" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Windows Volume Mixer'ın neden Mac eşdeğeri yok?</h2>

<p>Windows'dan geçiş yaptıysanız kaçıracağınız ilk şeylerden biri Ses Düzeyi Karıştırıcısıdır: hoparlör simgesine sağ tıklayın; çalışan her uygulamanın kendi kaydırıcısı olur. Chrome'yu kısın, Discord'yu yüksek sesle tutun, Spotify'yu sessize alın — hepsi tek bir yerde.</p>

<p>macOS bunu göndermiyor. Apple'ın ses kontrolü, sistem genelinde tek bir kaydırıcıdır. Hangi seviyeyi belirlerseniz aynı anda her şeye uygulanır. Sistem Ayarlarında gizli uygulama başına seçenek yok, Terminal komutu yok, erişilebilirlik geçişi yok. Bu gerçek bir boşluk ve yıllardır bu böyle.</p>

<p>Bunun nedeni mimaridir: uygulamalar, sesi Core Audio aracılığıyla çıkış cihazınıza yönlendirir ve işletim sistemi, bireysel akışlar için kullanıcıya yönelik bir mikser göstermez. Windows deneyimini yeniden yaratmak için bu ses yolunda yer alan ve Apple'ın dışarıda bıraktığı kontrolleri size sağlayan üçüncü taraf bir uygulamaya ihtiyacınız var.</p>

<h2>En yakın eşleşme: SoundDial</h2>

<p>SoundDial, bunun için özel olarak tasarlanmış, uygulama başına bir menü çubuğu ses karıştırıcısıdır. Simgesine tıkladığınızda, her biri kendi kaydırıcısına sahip, ses çalan her şeyin temiz bir listesini alırsınız. Bu, kurabileceğiniz en doğrudan "Mac için Windows Ses Düzeyi Karıştırıcısıdır" ve Windows karıştırıcının asla yapamayacağı birkaç şeyi yapar:</p>

<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — temel özellik. Chrome'yu %40'a, Zoom'yu %100'e, müziği %20'ye ayarlayın.</li>
<li><strong>Uygulama başına sessize alma</strong> — geri kalanına dokunmadan bir uygulamayı susturun.</li>
<li><strong>Uygulama başına ses artırma</strong> — sessiz bir uygulamaya basın <em>yukarıda</em> Kendi sesi çok düşük olduğunda %100.</li>
<li><strong>Hacim profilleri</strong> — bir karışımı kaydedin (ör. "iş görüşmesi" veya "oyun") ve kaydırıcıları yeniden sürüklemek yerine anında geri çağırın.</li>
<li><strong>Otomatik eğilme</strong> — çağrı gibi daha önemli bir şey başladığında arka plan sesini otomatik olarak azaltır.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden hoparlörler, kulaklıklar ve diğer cihazlar arasında geçiş yapın.</li>
</ul>

<p>Çünkü üzerinde <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, Apple tarafından incelendi ve korumalı alana alındı. Tek tıklamayla temiz bir şekilde yüklenir; sürüklenecek DMG yok, onaylanacak ses sürücüsü veya sistem uzantısı yok, güvenlik istemi yok. Tek seferlik 14,99 € (abonelik yok) fiyatıyla aradaki farkı kapatmanın en basit yoludur.</p>

<h2>Mac cihazınızda uygulama başına ses düzeyi nasıl ayarlanır?</h2>

<ol>
<li>Mac App Store'dan SoundDial'yu yükleyin.</li>
<li>İlk başlatmada istediği tek seferlik ses iznini verin.</li>
<li>Menü çubuğunuzdaki SoundDial simgesine tıklayın.</li>
<li>Herhangi bir uygulamanın ses seviyesini ayarlamak için kaydırıcıyı uygulamanın yanına sürükleyin veya sessize alma/güçlendirmeye basın.</li>
<li>İsteğe bağlı olarak, daha sonra geri yükleyebilmek için mevcut karışımı profil olarak kaydedin.</li>
</ol>

<p>Bütün iş akışı bu kadar. Görev çubuğuna sağ tıklamak yerine, yalnızca menü çubuğundan, zaten bildiğiniz Windows karıştırıcı gibi davranır.</p>

<h2>SoundDial'nun diğer seçeneklerle karşılaştırılması</h2>

<p>SoundDial bu alandaki tek araç değil, bu yüzden alternatiflere dürüst bir bakış sunuyoruz.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — 39 dolar civarında ve gerçekten profesyonel düzeyde: uygulama başına EQ, uygulama başına çıktı yönlendirme, efektler. Ancak doğrudan indirme artı bir ses yakalama sürücüsü gerektirir ve yalnızca uygulama başına ses seviyesi istiyorsanız bu aşırıya kaçar (ve daha pahalıdır). EQ ve yönlendirmeye ihtiyacınız varsa bunu seçin; Mikserin karmaşıklık veya sürücü olmadan olmasını istiyorsanız SoundDial'yu seçin.</li>
<li><strong>Background Music</strong> — ücretsiz ve açık kaynak, bu harika. İşin püf noktası: daha yeni macOS sürümlerinde bozulabilir ve güçlendirme, kayıtlı profiller ve otomatik azaltma gibi özelliklerden yoksundur. Açık kaynaklı ses sürücülerinde sorun giderme konusunda rahatsanız sorun değil; İşe yarayan bir şey istiyorsanız daha az idealdir.</li>
<li><strong>FineTune</strong> — ücretsiz, açık kaynaklı bir menü çubuğu uygulaması. Önceliğiniz bütçe ise hafiftir ve göz atmaya değer, ancak cila, profil ve App Store güvenliğini ücretsiz olarak takas ediyorsunuz.</li>
<li><strong>eqMac</strong> — ücretsiz bir EQ ve sistem çapında güçlendirici. Bu, uygulama başına bir karıştırıcı değil, öncelikle bir ekolayzırdır, bu nedenle farklı bir sorunu çözer.</li>
</ul>

<p>Takas basittir. Ücretsiz araçların hiçbir maliyeti yoktur ancak kırılgan veya ince özelliklere sahip olabilir. SoundSource güçlü ancak pahalı ve sürücü tabanlıdır. SoundDial tatlı noktada oturuyor: tek seferlik 14,99 €, App Store güvenlik ve korumalı alan ve ücretsiz seçeneklerin atladığı profiller + otomatik azaltma.</p>

<blockquote>İstediğiniz tek şey Windows Volume Mixer deneyimiyse (uygulama başına kaydırıcılar, sessize alma ve güçlendirme, saniyeler içinde güvenli bir şekilde kurulur) SoundDial en doğrudan eşleşmedir.</blockquote>

<h2>Sonuç olarak</h2>

<p>macOS size bir Ses Mikseri vermeyecektir ve muhtemelen hiçbir zaman da vermeyecektir. Ancak sistem çapında tek bir kaydırıcıyla yaşamak zorunda değilsiniz. Özel bir menü çubuğu karıştırıcısı, Windows'da sahip olduğunuz uygulama başına kontrolü geri yükler ve üstüne güçlendirme, profiller ve otomatik azaltma ekler.</p>

<p>Uygulama başına hacmi kolay yoldan elde etmeye hazır mısınız? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> 14,99 € karşılığında — tek seferlik, korumalı alana alınır ve saniyeler içinde kurulur.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Mac Cihazınızda Uygulama Sesini Windows'nun Yaptığı Gibi Ayarlayın",
    description: "Windows'nun uygulama başına ses karıştırıcısı vardır, ancak macOS'da yoktur. Mac cihazınızdaki her uygulama için bağımsız ses düzeyini hızlı, güvenli ve sürücüsüz olarak nasıl ayarlayacağınız aşağıda açıklanmıştır.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS'da Windows'daki gibi yerleşik uygulama başına ses karıştırıcısı yoktur, bu nedenle en hızlı ve güvenilir düzeltme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>Mac App Store menü çubuğu uygulaması, her uygulamaya kendi ses düzeyi kaydırıcısını, uygulama başına sessize alma özelliğini ve ses düzeyini yükseltme olanağı sağlar. Korumalı alandadır, Apple tarafından incelenir, sürücüsüz kurulur ve tek seferlik fiyatı 14,99 €'dur.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Cihazınızda Uygulama Sesini Windows&#x27;nun Yaptığı Gibi Ayarlayın" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden Windows bunu yapabiliyor da macOS yapamıyor?</h2>
<p>Windows kullandıysanız, işlemi biliyorsunuzdur: Hoparlör simgesine sağ tıklayın, Ses Düzeyi Karıştırıcısı'nı açın ve Chrome, Spotify, Discord ve ses çıkaran diğer her şey için ayrı bir kaydırıcıyı sürükleyin. Çok basit ve işe yarıyor.</p>
<p>macOS asla eşdeğerini göndermedi. Apple'ın ses kontrolleri globaldir; tüm sistem için tek bir ana ses düzeyi. Bir uygulamanın içindeki kaynağın sesini kapatarak bir uygulamayı sessize alabilirsiniz (hatta bir kontrolü varsa), ancak "toplantım %100'de kalırken müziğimi %40'ta tut" diyecek birleşik bir yer yoktur. Bu boşluk tam olarak üçüncü taraf karıştırıcıların var olmasının nedenidir.</p>

<h2>En hızlı çözüm: menü çubuğu karıştırıcısı</h2>
<p>Windows deneyimine en yakın eşleşme, çalışan ses uygulamalarınızı listeleyen ve her birine bir kaydırıcı veren bir menü çubuğu uygulamasıdır. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> tam da bunu yapıyor. Menü çubuğundaki simgesini tıkladığınızda şunları elde edersiniz:</p>
<ul>
<li><strong>Her uygulama için bağımsız ses düzeyi</strong> — çağrınıza dokunmadan Spotify'yu aşağı sürükleyin.</li>
<li><strong>Uygulama başına sessize alma</strong> — Gürültülü bir uygulamayı anında susturun, gerisini oynatmaya bırakın.</li>
<li><strong>Uygulama başına ses artırma</strong> — çok sessiz bir uygulamayı çalıştırın <em>yukarıda</em> Kendi maksimum değeri hala çok yumuşak olduğunda %100.</li>
<li><strong>Hacim profilleri</strong> — bir "İş" veya "Oyun" karışımını kaydedin ve tek tıklamayla geri çağırın.</li>
<li><strong>Otomatik eğilme</strong> — daha önemli bir şey başladığında arka plan sesini otomatik olarak azaltır.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden hoparlörler, kulaklıklar ve diğer çıkışlar arasında geçiş yapın.</li>
</ul>
<p>Çünkü Mac App Store'dadır, korumalı alana alınır ve Apple tarafından incelenir, temiz bir şekilde kurulur ve sürüklenecek bir DMG, çekirdek uzantısı ve Sistem Ayarlarında onaylanacak bir ses sürücüsü yoktur. Bu son kısım göründüğünden daha önemli; sürücü tabanlı araçlar macOS güncellemelerinden sonra bozulan araçlardır.</p>

<h2>Nasıl kurulur (yaklaşık iki dakika)</h2>
<ul>
<li><strong>1.</strong> Mac App Store'dan SoundDial'yu yükleyin ve başlatın.</li>
<li><strong>2.</strong> macOS'nun istediği ses iznini verin; bu, uygulamanın uygulama başına akışları görmesini sağlayan şeydir.</li>
<li><strong>3.</strong> Menü çubuğunuzdaki SoundDial simgesine tıklayın. Şu anda ses çalan her uygulama kendi kaydırıcısıyla görünür.</li>
<li><strong>4.</strong> Seviyesini ayarlamak için herhangi bir uygulamanın kaydırıcısını sürükleyin veya sessize alın. Bir uygulama çok sessiz olduğunda %100'ün üzerine çıkın.</li>
<li><strong>5.</strong> (İsteğe bağlı) Mevcut karışımınızı daha sonra geri yükleyebilmek için profil olarak kaydedin ve arka plan sesinin otomatik olarak kesilmesini istiyorsanız otomatik ses kısmayı açın.</li>
</ul>
<p>Bütün iş akışı bu kadar. Kurulum sürtünmesi hariç, zaten bildiğiniz Windows Hacim Karıştırıcı gibi davranır.</p>

<h2>Ücretsiz ve profesyonel alternatifler ne olacak?</h2>
<p>Mac'da uygulama başına ses düzeyi elde etmenin başka yolları da var. Dürüstçe seçim yapabilmeniz için bunları bilmeye değer.</p>
<blockquote>Ücretsiz araçlar, güvenilirlik ve özellikler karşılığında para değiştirir; profesyonel araçlar, ihtiyacınız olmayabilecek derinlik için para ve kurulum ticareti yapar.</blockquote>
<p><strong>Background Music</strong> ücretsiz ve açık kaynaklıdır ve uygulama başına hacim sağlar. İşin püf noktası: Ses sisteminin derinliklerine bağlanır ve daha yeni macOS sürümlerinde kırılma geçmişine sahiptir ve güçlendirme, profiller ve otomatik azaltmadan yoksundur. Kurulumunuzda işe yararsa harika, ancak yükseltmeler arasında bu bir kumardır.</p>
<p><strong>FineTune</strong> SoundDial ile aynı ruhu taşıyan ücretsiz, açık kaynaklı bir menü çubuğu uygulamasıdır. Profiller ve cilasız bir topluluk projesi olsa da, tek endişeniz bütçe ise bu iyi bir başlangıç ​​noktasıdır.</p>
<p><strong>eqMac</strong> sistem çapında ücretsiz bir EQ ve güçlendiricidir. Genel sesi şekillendirmek için harikadır, ancak gerçek bir uygulama başına mikser değildir; bireysel uygulamaları değil, tüm çıkışı ayarlarsınız.</p>
<p><strong>SoundSource</strong> Rogue Amoeba (yaklaşık 39 $) profesyonel düzeyde bir seçenektir: uygulama başına EQ, uygulama başına çıkış yönlendirme ve ciddi ses mühendisliği özellikleri. Mükemmel - ancak doğrudan indirilmesi ve bir ses yakalama bileşeninin kurulması gerekiyor ve SoundDial'nun maliyetinin iki katından fazlaya mal oluyor. Stüdyo düzeyinde yönlendirme ve EQ istiyorsanız, seçim budur. Sadece Windows tarzı mikseri istiyorsanız, bu çok fazla.</p>

<h2>Hangisini almalısınız?</h2>
<p>Amacınız indirmeler, sürücüler veya risk olmadan "Mac cihazımın Windows Volume Mixer gibi çalışmasını sağlamak" ise SoundDial en temiz yanıttır. Abonelik olmadan tek seferlik 14,99 € karşılığında uygulama başına ses seviyesi, sessize alma, yükseltme, profiller ve otomatik azaltma özelliklerine sahip olursunuz; bunların tümü App Store güvenlidir. Bunun yerine yalnızca özellikle uygulama başına EQ ve çıkış yönlendirmeye ihtiyacınız varsa SoundSource'yu seçin ve macOS güncellemelerinde sorun giderme konusunda rahatsanız ücretsiz seçenekleri deneyin.</p>

<p><strong>Her uygulamaya kendi hacmini vermeye hazır mısınız?</strong> <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> ve ilk karışımınızı yaklaşık iki dakika içinde hazırlayın.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "İşitme Güçlüğü Çekenlerin Dinlemesi için Mac Cihazınızın Sesini Nasıl Yükseltebilirsiniz?",
    description: "Maksimum ses seviyesinde bile Mac'nuzu duymakta zorlanıyor musunuz? SoundDial ve yerleşik ipuçları da dahil olmak üzere, işitme güçlüğü çeken kişiler için sesi uygulama başına nasıl artırıp netleştireceğinizi öğrenin.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Mac'nuzun sesi maksimum ses seviyesinde bile yeterince yüksek değilse, en hızlı ve güvenilir çözüm <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, herhangi bir uygulamayı %100'ün üzerine çıkarmanıza ve diğer her şeyi sessize almanıza olanak tanıyan bir Mac App Store menü çubuğu karıştırıcısıdır. Bu, tüm sisteminizi çalıştırmadan FaceTime'dan, videodan veya bir film oynatıcısından daha yüksek, daha net konuşma anlamına gelir. Tek seferlik 14,99€.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — İşitme Güçlüğü Çekenlerin Dinlemesi için Mac&#x27;nuzun Sesini Nasıl Yükseltebilirsiniz?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ses kaydırıcısını maksimuma çıkarmak neden hâlâ yeterli değil?</h2>
<p>İşitme güçlüğü çeken dinleyiciler için macOS ses düzeyi kaydırıcısının sinir bozucu iki sınırı vardır. İlk olarak, uygulamanın çıktısının %100'üyle sınırlıdır. Bir podcast, video veya çağrı sessizce kaydedilmişse "tam ses" hâlâ çok yumuşaktır. İkincisi, macOS'nun yerleşik uygulama başına ses karıştırıcısı yoktur. Windows'da yıllardır bir tane var ancak Mac'da her uygulama tek bir ana seviyeyi paylaşıyor. Yani yumuşak bir ses duymak için her şeyin sesini açtığınızda, arka plan müziği ve bildirim sesleri de rahatsız edici derecede yüksek çıkıyor.</p>
<p>Aslında ihtiyacınız olan şey yapma yeteneğidir <em>bir</em> Uygulamanın sesini diğerlerinden daha yüksek hale getirin, normal tavanının ötesine taşıyın ve rakip sesleri keserek konuşmanın öne çıkmasını sağlayın. Bu araçların doldurduğu boşluk tam olarak budur.</p>

<h2>Öncelikle ücretsiz macOS erişilebilirlik ayarlarını kullanın</h2>
<p>Herhangi bir uygulamayı eklemeden önce macOS'nun halihazırda sunduklarını ayarlamaya değer. Bunlar netliğe yardımcı olur, ancak ham ses yüksekliği eklemezler:</p>
<ul>
<li><strong>Mono ses:</strong> Sistem Ayarları &rarr; Erişilebilirlik &rarr; Ses, "Stereo sesi mono olarak çal" seçeneğini açın. Bir kulağınızda daha güçlü işitme varsa bu, her ikisine de tam sinyal gönderir, böylece diyaloğun yarısını kaybetmezsiniz.</li>
<li><strong>Denge ayarı:</strong> Sistem Ayarları &rarr; Ses'te, sol/sağ dengesini daha güçlü kulağınıza doğru sürükleyin.</li>
<li><strong>Arka plan seslerini azaltın:</strong> Buna izin veren uygulamalarda müziği ve ambiyansı azaltın, böylece sesler film müziğiyle mücadele etmez.</li>
<li><strong>Kulaklık konaklama yerleri:</strong> AirPods veya Beats kullanıyorsanız, Sistem Ayarları &rarr; Erişilebilirlik &rarr; Ses &rarr; Kulaklık Uyumluluğu, yumuşak sesleri yükseltebilir ve konuşmaya göre ayarlayabilir.</li>
</ul>
<p>Bunlar gerçekten faydalıdır ve hiçbir maliyeti yoktur. Ancak hiçbiri tek bir sessiz uygulama yapmıyor <em>%100'den daha yüksek ses</em>ve genellikle asıl sorun da budur.</p>

<h2>SoundDial ile bir uygulamayı %100'ün üzerine çıkarma</h2>
<p>SoundDial menü çubuğunuzda bulunur ve o anda ses çalan her uygulama için bir kaydırıcı gösterir. İşitme güçlüğü çeken kişiler için en çok yardımcı olan iş akışı aşağıda verilmiştir:</p>
<ul>
<li><strong>Dinlediğiniz uygulamayı güçlendirin.</strong> Sessiz bir video görüşmesini veya podcast'i uygulamanın kendi başına izin verdiğinin ötesine taşımak için kaydırıcıyı %100'ün üzerine sürükleyin.</li>
<li><strong>Diğer her şeyi sessize alın veya azaltın.</strong> Müziği, tarayıcı sekmelerini veya bildirim seslerini aşağı çekin; böylece hiçbir şey takip etmeye çalıştığınız sesle rekabet edemez.</li>
<li><strong>Otomatik eğilmeyi açın.</strong> Bir çağrı sırasında konuşmaya başladığınızda, SoundDial, konuştuğunuz kişinin net bir şekilde konuşması için diğer sesi otomatik olarak kısar ve daha sonra geri yükler.</li>
<li><strong>Bir birim profilini kaydedin.</strong> Konferans uygulamanızın güçlendirildiği ve diğer her şeyin sessiz olduğu bir "görüntülü görüşme" profili oluşturun ve ardından her seferinde yeniden ayarlama yapmak yerine anında bu profile geçin.</li>
<li><strong>Çıkışı hızlı bir şekilde değiştirin.</strong> Sistem Ayarlarına girmeden aynı menüden hoparlörler, kulaklık veya işitme cihazına bağlı cihaz arasında geçiş yapın.</li>
</ul>
<p>Güçlendirme özelliği burada anahtardır. Uygulamanın çıkışını yerel maksimum değerinin üzerine çıkardığı için, fısıltı sessizliğinde kayıt gerçekten duyabileceğiniz bir ses haline gelirken, sisteminizin geri kalanı rahat bir seviyede kalır.</p>

<h2>Distorsiyon hakkında kısa bir kelime</h2>
<p>Herhangi bir yazılım takviyesi, sinyaldeki her şeyi güçlendirir, dolayısıyla zaten yüksek olan seste %100'ün çok ötesine geçmek, kesintiye neden olabilir. Pratikte artırma <em>sessiz</em> Rahat ve anlaşılır bir seviyeye kadar olan içerik kulağa temiz geliyor. Mütevazı bir şekilde başlayın, konuşma netleşene kadar yükseltin ve sert gelmeye başlarsa geri çekilin. Kalan işitme duyunuzu korumak önemlidir; bu nedenle maksimum ses yüksekliği yerine netliği hedefleyin.</p>

<h2>SoundDial'nun alternatiflerle karşılaştırılması</h2>
<p>Birkaç seçeneğiniz var ve dürüstlük doğru olanı seçmenize yardımcı olur:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39$):</strong> Uygulama başına EQ ve çıkış yönlendirmeyle gerçek anlamda profesyonel düzeyde. İşitme kaybı için frekansları şekillendirmek istiyorsanız, bu çok güçlüdür. Ancak maliyeti iki katından fazladır, doğrudan indirmeyi gerektirir ve bir ses yakalama sürücüsü yükler. Bu, birçok kişinin istediğinden daha fazla kurulum ve sistem erişimi demektir.</li>
<li><strong>Background Music (ücretsiz, açık kaynak):</strong> Uygulama başına ses seviyesini ücretsiz olarak sunar, ancak yükseltme, profiller ve otomatik azaltma gibi özelliklerden yoksundur ve ses sisteminin derinliklerine bağlandığından daha yeni macOS sürümlerinde bozulabilir.</li>
<li><strong>FineTune (ücretsiz, açık kaynak):</strong> Hafif bir menü çubuğu ses düzeyi uygulaması. Temel bilgiler için iyi, ancak işitme güçlüğü çeken dinleyicilerin dayandığı güçlendirme, profiller ve eğilme olmadan.</li>
<li><strong>eqMac (ücretsiz):</strong> Güçlendiricili bir ekolayzır. Sesi şekillendirmek için kullanışlıdır ancak uygulama başına temiz miksleme ve profiller yerine EQ üzerine kurulmuştur.</li>
</ul>
<p>Nerede <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Fiyat dengesi, güvenlik ve burada önemli olan belirli özellikler öne çıkıyor. Mac App Store üzerinde olduğu için Apple tarafından incelenmiş ve korumalı alana alınmıştır, DMG olmadan temiz bir şekilde yüklenir ve ses sürücülerine veya sistem uzantılarına ihtiyaç duymaz. macOS ses yığınına hiçbir şey girmeden, tek seferlik 14,99 €'luk bir satın alma işlemiyle uygulama başına güçlendirme, ses kapatma, ses seviyesi profilleri ve otomatik kısma özelliklerine sahip olursunuz.</p>

<h2>Sonuç olarak</h2>
<p>Öncelikle ücretsiz macOS erişilebilirlik seçeneklerini ayarlayın; bunlara sahip olmaya değer. Ancak asıl sorun bir uygulamanın çok sessiz olmasıysa, tek bir uygulamayı %100'ün üzerine çıkarabilecek ve geri kalanını susturabilecek bir araca ihtiyacınız var. Uygulama başına güçlendirmenin asıl amacı budur ve macOS bunu kendi başına yapmaz.</p>

<p>Mac'nuzu gerçekten duymaya hazır mısınız? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> 14,99 € karşılığında ihtiyacınız olan uygulamayı güçlendirin ve otomatik kesme ve profillerin konuşmayı net tutmasına izin verin.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Mac'da Sessiz Bir Uygulama Nasıl Güçlendirilir (Geçmiş Maksimum Hacim)",
    description: "Bir uygulama %100'de bile çok mu sessiz? Uygulama başına ses karıştırıcısı olan SoundDial ile Mac'da yalnızca bu uygulamayı maksimum seviyeye yükseltin. İşte en hızlı düzeltme artı alternatifler.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Bir uygulama maksimum ses seviyesinde bile çok sessizse en hızlı ve güvenilir çözüm <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>macOS için uygulama başına bir menü çubuğu ses karıştırıcısı. Her uygulamaya kendi kaydırıcısının yanı sıra bir ses seviyesi verir <strong>artırmak</strong> Bu, tek bir uygulamayı %100'ün üzerine çıkarır, böylece fısıltı sessizliğinde bir video görüşmesi veya tarayıcı sekmesi, sistem ses seviyenize dokunmadan daha yüksek ses çıkarır. Mac App Store'da tek seferlik 14,99 € tutarındaki bir uygulamadır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Sessiz Bir Uygulama Nasıl Güçlendirilir (Geçmiş Maksimum Hacim)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden bir uygulama %100'de bile sessiz kalıyor?</h2>
<p>macOS'nun yalnızca bir ana birimi vardır. Onu kaldırdığınızda her şey birlikte daha da gürültülü hale gelir. Ancak her uygulama aynı zamanda kendi dahili seviyesinde de ses çıkışı sağlar ve bu seviye çok değişkendir. Sessizce yönetilen bir YouTube klibi, kötü mikrofonlu bir Zoom arayan, düşük diyalog karışımına sahip bir oyun veya yumuşak akışlı bir tarayıcı sekmesi, Mac'nuz tam güçteyken bile her şeyin çok altında yer alabilir.</p>
<p>Asıl sorun: macOS'nun sahip olduğu <strong>yerleşik uygulama başına ses karıştırıcısı yok</strong>. Windows'da yıllardır bir tane var (Ses Düzeyi Karıştırıcı, hoparlör simgesine sağ tıklayın). Mac'da, geri kalanını yalnız bırakırken bir uygulamayı açmanın yerel bir yolu yoktur ve kesinlikle tek bir uygulamayı güçlendirmenin de bir yolu yoktur. <em>yukarıda</em> normal maksimumu. Bu, vurduğunuz boşluktur.</p>

<h2>En hızlı çözüm: yalnızca tek bir uygulamayı güçlendirin</h2>
<p>Uygulama başına bir karıştırıcı, kendisini uygulamalarınız ile çıktınız arasına yerleştirerek bu sorunu çözer, böylece her akışı bağımsız olarak yükseltebilir veya azaltabilir ve birini %100'ün üzerine çıkarabilir. ile <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, akış kısa:</p>
<ul>
<li>Mac App Store'dan yükleyin ve açın. Kayan bir pencerede değil, menü çubuğunuzda yaşar.</li>
<li>Şu anda ses çalan her uygulama için bir kaydırıcı görmek üzere menü çubuğu simgesini tıklayın.</li>
<li>Sessiz uygulamayı bulun ve güçlendirme uygulamak için kaydırıcısını %100'ün üzerine sürükleyin. Yalnızca bu uygulamayı güçlendirir.</li>
<li>Geriye kalan her şeyi olduğu yerde bırakın. Sistem biriminize ve diğer uygulamalarınıza dokunulmaz.</li>
</ul>
<p>Güçlendirme uygulama başına olduğundan, yumuşak bir görüntülü aramayı rahat bir seviyeye kadar itebilir, aynı zamanda müzik veya bildirimlerin kulakları sağır etmesini önleyebilirsiniz. Yerleşik macOS kontrollerinin yapamayacağı temel şey budur.</p>

<h2>Arttırma ve kırpma hakkında bir not</h2>
<p>Takviye gerçekten faydalıdır, ancak bu güçlendirmedir, sihir değil. Bir uygulamanın orijinal sesi çok sessizse veya zaten bozuksa, onu sertçe çevirmek kırpmaya neden olabilir veya arka planda tıslamanın daha belirgin olmasına neden olabilir. Uygulamada orta düzeyde bir güçlendirme, "bu çağrı çok sessiz" durumlarının büyük çoğunluğunu temiz bir şekilde düzeltir. Uygulamayı tavana çarpmak yerine rahat hale gelinceye kadar yukarı itin; böylece sesi temiz tutabilirsiniz.</p>

<h2>Güçlendirmenin ötesinde: başka ne yardımcı olur?</h2>
<p>Uygulama başına kontrole sahip olduğunuzda, birkaç özellik sessiz uygulama sorununu tamamen ortadan kaldırır:</p>
<ul>
<li><strong>Hacim profilleri</strong> — bir kurulumu kaydedin (örneğin, "Zoom'yu artırın, Spotify'yu düşürün, Slack'yu sessize alın") ve her toplantıda kaydırıcıları yeniden sürüklemek yerine tek tıklamayla onu geri çağırın.</li>
<li><strong>Otomatik eğilme</strong> — seçilen bir uygulama oynatıldığında diğer uygulamalara otomatik olarak geçiş yapar, böylece güçlendirilmiş çağrı arka plandaki ses üzerinden net bir şekilde duyulur.</li>
<li><strong>Uygulama başına sessize alma</strong> — Gürültülü bir uygulamayı başka hiçbir şeyi duraklatmadan susturun.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden hoparlörler, kulaklıklar veya harici arayüz arasında geçiş yapın.</li>
</ul>

<h2>Ücretsiz ve profesyonel alternatifler ne olacak?</h2>
<p>Seçenekleriniz var ve burada dürüstlük önemlidir, işte gerçek manzara burada.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) 39 $ civarında profesyonel düzeyde bir seçimdir. Uygulama başına hacmin yanı sıra uygulama başına EQ ve tam çıkış yönlendirmesi yapar; bu, çoğu insanın ihtiyaç duyduğundan daha fazla güç sağlar. Takaslar: maliyeti iki katından fazla, App Store yerine doğrudan indiriliyor ve işini yapmak için bir ses yakalama sürücüsü yüklüyor. Bir ses mühendisinin araç setini istiyorsanız mükemmel. Yalnızca bir uygulamanın daha yüksek ses çıkarmasını istiyorsanız bu aşırıya kaçar.</p>
<p><strong>Background Music</strong> ücretsiz ve açık kaynaklıdır ve uygulama başına temel hacmi gerçekleştirebilir. Ancak bu, daha yeni macOS sürümlerinde kırılma geçmişi olan bir topluluk projesidir ve %100'ü aşan destek, profiller ve otomatik azaltmadan yoksundur. Tek gereksinim ücretsizse harikadır ve ara sıra kırılmayı sorun etmezsiniz.</p>
<p><strong>FineTune</strong> ücretsiz, açık kaynaklı bir menü çubuğu uygulamasıdır ve <strong>eqMac</strong> ücretsiz bir EQ ve sistem güçlendiricidir. Bütçeniz sıfırsa her ikisi de denemeye değer. Bunların topluluk tarafından sürdürülen, EQ odaklı veya uygulama başına yönetim konusunda daha hafif olduklarını bilin ve profilleri ve eğilmeyi tek bir gösterişli pakette birleştirmeyin.</p>
<p>Nerede <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> topraklar: orta yoldur. SoundSource'dan daha ucuz, ücretsiz araçlardan daha yetenekli ve daha güvenilir ve piyasada <strong>Mac App Store</strong>bu, Apple tarafından incelendiği, korumalı alana alındığı ve temiz bir şekilde yüklendiği anlamına gelir <strong>DMG yok ve ses sürücüsü veya uzantısı yok</strong> sisteminize cıvatalamak için. Çoğu insan için dürüst öneri basittir: Size destek, profiller ve otomatik azaltma da sağlayan en az güçlük içeren düzeltmeyi istiyorsanız, tek seferlik 14,99 € ile en iyi değerdir.</p>

<h2>Hızlı cevap, yeniden ifade edildi</h2>
<blockquote>Bir Mac uygulamasının sesini maksimumdan daha yüksek hale getirmek için uygulama başına yükseltmeli bir ses karıştırıcısı kullanın. Menü çubuğundan SoundDial'yu açın, sessiz uygulamanın kaydırıcısını bulun ve %100'ün üzerine sürükleyin. Yalnızca bu uygulamanın sesi yükselir.</blockquote>

<p>Mac'nuzun tamamı için tek bir ses düzeyi kaydırıcısıyla mücadele etmeye son verin. Al <a href="https://apps.apple.com/app/id6772792641">Mac App Store üzerinde SoundDial</a> Tek seferlik 14,99 € karşılığında, sessiz uygulamayı saniyeler içinde limitinin üzerine çıkarın ve bir profili kaydedin, böylece bir daha düşünmek zorunda kalmayın.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Mac Cihazınızda Sessiz Videoları ve Podcast'leri Nasıl Güçlendirebilirsiniz?",
    description: "Bazı YouTube videoları, podcast'leri ve dersleri %100'de bile çok sessizdir. SoundDial ile macOS'da uygulama başına ses düzeyini maksimumun üzerine nasıl çıkaracağınız aşağıda açıklanmıştır.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>En hızlı ve güvenilir düzeltme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, her uygulamaya kendi ses kaydırıcısını ve gerçek bir ses düzeyi sağlayan bir Mac App Store menü çubuğu karıştırıcısı <strong>artırmak</strong> bu %100'ü geçiyor. Tarayıcınızı veya podcast oynatıcınızı açın, kaydırıcısını maksimumun üzerine sürükleyin; sessiz bir videonun veya dersin sesi anında yükselir; sürücü yok, yeniden başlatma yok.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Cihazınızdaki Sessiz Videoları ve Podcast&#x27;leri Nasıl Güçlendirebilirsiniz?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden bazı videolar ve podcast'ler çok sessiz?</h2>
<p>Mac'nuzu %100'e çıkarıyorsunuz ve röportaj hâlâ bir fısıltıdan ibaret. Bu senin hayal gücün değil. Ses, son derece farklı ses yüksekliği seviyelerinde yönetilir; bir dizüstü bilgisayar mikrofonuyla kaydedilen bir web semineri, sessiz bir bağımsız podcast veya eski bir ders yüklemesi, profesyonelce üretilmiş bir YouTube videosunun 15-20 dB altında olabilir. Sistem ses düzeyiniz zaten maksimuma çıkarıldı, dolayısıyla ayırabileceğiniz boşluk kalmadı.</p>
<p>İşte önemli nokta: macOS'nun sahip olduğu <strong>yerleşik uygulama başına ses karıştırıcısı yok</strong>. Windows'da yıllardır bir tane var (sistem tepsisindeki Ses Düzeyi Karıştırıcısı), ancak Mac'da ses seviyesi tuşları her şey için bir genel düzey hareket ediyor. Tek bir uygulamayı %100'ün üzerine çıkarmak şöyle dursun, "yalnızca bu tarayıcı sekmesinin sesini yükselt" demenin yerel bir yolu yoktur.</p>

<h2>Gerçek çözüm: uygulama başına ses artırma</h2>
<p>Sessiz bir kaynağın sesini hoparlörlerinizin normalde izin verdiğinden daha yüksek yapmak için, kazancı uygulayan bir yazılıma ihtiyacınız vardır. <em>özellikle bu uygulama</em> ve %100 tavanının ötesine geçebilir. Güçlendirme özelliğine sahip uygulama başına mikserin yaptığı da tam olarak budur.</p>
<p>ile <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, çalışan her uygulama kendi kaydırıcısına sahip bir menü çubuğu listesinde görünür. Sessiz bir uygulamayı %150 veya %200'e kadar kaydırdığınızda ses gerçek zamanlı olarak güçlendirilir. Destek uygulama başına olduğundan, diğer her şey (müziğiniz, bildirimleriniz, başka bir penceredeki çağrı) normal seviyede kalır. Tek bir yumuşak podcast dinlemek için tüm sisteminizi patlatamazsınız.</p>
<blockquote>Global ses seviyesi "Mac'nun sesi ne kadar?" diye soruyor. Uygulama başına bir mikser "ne kadar gürültülü" diye soruyor <em>bu</em> uygulama?" — bir video sessizken geri kalanı iyi olduğunda asıl önemli olan soru budur.</blockquote>

<h2>Sessiz bir videoyu veya podcast'i adım adım güçlendirme</h2>
<ul>
<li><strong>SoundDial'yu yükleyin</strong> Mac App Store'dan. Korumalı alana alınır ve Apple tarafından incelenir, dolayısıyla diğer uygulamalar gibi temiz bir şekilde yüklenir; ayrı bir indirme gerekmez, ses sürücüsü yoktur, izin belgesi yoktur.</li>
<li><strong>Oynamaya başla</strong> Hangi uygulamayı kullanırsanız kullanın sessiz video, podcast bölümü veya ders - Safari, Chrome, bir podcast istemcisi, VLC.</li>
<li><strong>SoundDial simgesine tıklayın</strong> Menü çubuğunuzda. Şu anda ses çıkaran her uygulama için bir kaydırıcı göreceksiniz.</li>
<li><strong>Bu uygulamanın kaydırıcısını %100'ün üzerine sürükleyin</strong> — önce %150'yi deneyin, ardından hâlâ çok yumuşaksa daha yükseğe itin. Değişim anında gerçekleşir.</li>
<li><strong>Geriye kalan her şeyi kendi haline bırakın.</strong> Yalnızca güçlendirdiğiniz uygulamanın sesi yükselir; sisteminiz dengeli kalır.</li>
</ul>
<p>Kendinizi her gün aynı uygulamaları öne çıkarırken bulursanız (örneğin bir podcast oynatıcısı ve tarayıcınız), bu kurulumu bir dosya olarak kaydedebilirsiniz. <strong>hacim profili</strong> ve her seferinde yeniden ayarlamak yerine tek tıklamayla geri çağırın.</p>

<h2>Yükseltmeyle ilgili bir uyarı</h2>
<p>%100'ü aşmak kazanç sağlar ve kazancın sınırları vardır. Çok sessiz, düşük kaliteli bir kaydı yeterince zorlarsanız, kırpma veya bozulma duyabilirsiniz; bu, kaynağın temiz sinyalinin bitmesidir, uygulamadaki bir kusur değildir. Rahatça duyulabilene kadar artırın, ardından sert gelmeye başlarsa geri çekilin. Yerleşik dizüstü bilgisayar hoparlörlerinde aşırı yükseltme, sürücüleri de zorlayabilir; bu nedenle, iyi kulaklıklara veya harici hoparlörlere kıyasla oraya daha kolay gidin.</p>

<h2>Ücretsiz veya yerleşik seçeneklere ne dersiniz?</h2>
<p>Alternatifleriniz var ve bunlar konusunda dürüst olmaya değer:</p>
<ul>
<li><strong>Sistem ses düzeyi + uygulama düzeyinde kaydırıcılar.</strong> Bazı oynatıcılar (VLC, uzantılar aracılığıyla birkaç tarayıcı) kendi seslerini yükseltmenize izin verir. Yalnızca tek bir uygulamada ihtiyacınız varsa sorun yok; ancak birleşik kontrol ve profil olmadan her uygulamayı ayrı ayrı yapılandırmak zorunda kalıyorsunuz.</li>
<li><strong>eqMac</strong> ücretsiz bir EQ ve güçlendiricidir. Sistem genelinde ses yüksekliğini artırabilir, ancak küresel bir araçtır, uygulama başına temiz bir karıştırıcı değildir ve tüm çıktı düzeyinde çalışır.</li>
<li><strong>Background Music</strong> ücretsiz ve açık kaynaktır ve uygulama başına hacim sunar. Ancak macOS'nun daha yeni sürümlerinde bozulabilen bir ses yakalama kurulumuna dayanıyor ve özel bir güçlendirme, profiller ve otomatik azaltma özelliğinden yoksun.</li>
<li><strong>FineTune</strong> ücretsiz bir açık kaynaklı menü çubuğu uygulamasıdır; temel bilgileri istiyorsanız ve topluluk tarafından sağlanan yazılımlara aldırış etmiyorsanız hafif bir seçenektir.</li>
<li><strong>SoundSource</strong> Rogue Amoeba (~ 39 $) profesyonel düzeyde ağır siklettir: uygulama başına EQ, çıktı yönlendirme, işler. Ayrıca bir indirme ve ses yakalama sürücüsü gerektirir ve maliyeti SoundDial'nun iki katından fazladır. Tek istediğiniz sessiz sesi daha yüksek hale getirmekse aşırıya kaçarsınız.</li>
</ul>

<h2>Neden SoundDial pratik bir seçimdir?</h2>
<p>SoundDial tam olarak bu sorun için en uygun noktada bulunuyor. Onun <strong>€14,99 tek seferlik</strong> — abonelik yok — ve yaşamaya devam ediyor <strong>Mac App Store</strong>Bu, korumalı alana alındığı, Apple tarafından incelendiği ve herhangi bir DMG veya güvenilecek sistem uzantısı olmadan yüklendiği anlamına gelir. Aslında almak istediğiniz uygulama başına desteğin yanı sıra profiller, uygulama başına sessize alma, hızlı çıkış değiştirme ve <strong>otomatik eğilme</strong> Bu, birine odaklanmanız gerektiğinde diğer uygulamaları azaltır. Gürültülü işi basitçe yapıyor ve gerisini iyi yapıyor.</p>

<p><strong>Sessiz videoları ve podcast'leri dinlemekten yoruldunuz mu?</strong> <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> 14,99 € karşılığında her uygulamaya kendi ses seviyesini verin ve her şeyi net bir şekilde duyabilmenizi sağlayın.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Mac'da Her Uygulama için Farklı Bir Ses Seviyesi Nasıl Ayarlanır",
    description: "macOS'da yerleşik uygulama başına ses karıştırıcısı yoktur. SoundDial ve alternatiflerini kullanarak Mac'daki her uygulama için bağımsız, kalıcı ses seviyelerini nasıl ayarlayacağınız aşağıda açıklanmıştır.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS'nun her uygulama için farklı bir ses düzeyi ayarlamanın yerleşik bir yolu yoktur, bu nedenle bir menü çubuğu ses düzeyi karıştırıcısına ihtiyacınız vardır. En hızlı, en güvenilir düzeltme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, her uygulamaya kendi ses düzeyi kaydırıcısını, uygulama başına sessize alma özelliğini ve sessiz uygulamaları %100'ün üzerine çıkaran bir güçlendirme sağlayan bir Mac App Store uygulaması. Seviyelerinizi bir kez ayarlayın ve sabit kalırlar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Her Uygulama için Farklı Bir Ses Düzeyi Nasıl Ayarlanır" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden Mac'nun uygulama başına ses kontrolü yok?</h2>
<p>Windows'dan geçiş yaptıysanız, muhtemelen her uygulamanın kendi kaydırıcısının bulunduğu küçük panel olan Windows Volume Mixer'ın eşdeğerini aramaya başlamışsınızdır. Orada değil. macOS yalnızca bir global sistem birimi sunar. İster bir YouTube videosu, ister bir Zoom araması, Spotify veya bir oyun olsun, hepsi aynı ana seviyeyi paylaşır.</p>
<p>Olmayana kadar sorun değil. Discord sohbeti müziğinizin sesini bastırır. Podcast'iniz altta sessizce oynatılırken bir tarayıcı reklamı tam ses seviyesinde oynatılır. Oyununuz sağır edici ama arka plandaki sesli arama çok yumuşak. Apple'ın size sunduğu tek "çözüm", her uygulamayı açıp dahili ses düzeyini (eğer uygulamada varsa) manuel olarak ayarlamak ve bunu her oturumda yeniden yapmaktır.</p>
<p>Gerçek uygulama başına kontrol elde etmek için uygulamalarınız ile çıkış cihazınız arasında bulunan küçük bir yardımcı programa ihtiyacınız vardır. Aşağıda bunun nasıl doğru şekilde yapılacağı ve alternatifler hakkında dürüst notlar yer almaktadır.</p>

<h2>En hızlı yol: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menü çubuğunuzda bulunur ve o anda ses çalan her uygulamayı listeler. Her biri bağımsız bir kaydırıcıya sahiptir. İşte tüm iş akışı:</p>
<ul>
<li><strong>Mac App Store'dan yükleyin.</strong> Apple tarafından incelenmiş ve korumalı alana alınmıştır, dolayısıyla DMG, ses sürücüsü ve onaylanacak çekirdek veya sistem uzantısı yoktur. Herhangi bir normal uygulama gibi yüklenir ve aynı şekilde kaldırılabilir.</li>
<li><strong>Menü çubuğu simgesini tıklayın.</strong> Her etkin uygulama için bir kaydırıcının yanı sıra bir ana kontrol göreceksiniz.</li>
<li><strong>Seviyeleri ayarlamak için sürükleyin.</strong> Discord'yu aşağı çevirin, Spotify'yu yukarı itin, gürültülü bir tarayıcı sekmesinin uygulamasını tek tıklamayla tamamen sessize alın.</li>
<li><strong>Sessiz uygulamaları artırın.</strong> Bir uygulama %100'de bile çok yumuşaksa, uygulama başına yükseltmeyle uygulamayı %100'ün üzerine çıkarın.</li>
<li><strong>Bir profili kaydedin.</strong> "Oyun", "iş görüşmesi" veya "müzik" karışımınızı saklayın ve her gün kaydırıcıları yeniden sürüklemek yerine bunlar arasında anında geçiş yapın.</li>
</ul>
<p>En sinir bozucu senaryoları çözdüğü için iki özelliğe değinmeye değer:</p>
<ul>
<li><strong>Otomatik eğilme</strong> seçilen bir uygulama oynatıldığında diğer uygulamaları otomatik olarak kapatır, böylece bir arama geldiğinde müziğiniz azalır ve daha sonra geri döner, manuel olarak uğraşmanıza gerek kalmaz.</li>
<li><strong>Hızlı çıkış değiştirme</strong> Sistem Ayarlarına dalmadan aynı menüden kulaklıklar ve hoparlörler arasında geçiş yapmanızı sağlar.</li>
</ul>
<p>Seviyeler her uygulama için hatırlandığından ve profillere kaydedildiğinden, çoğu insanın aslında istediği kısım budur: onu bir kez ayarlarsınız ve <em>kalır</em> ayarlayın.</p>

<h2>Dürüstçe karşılaştırılan ücretsiz ve ücretli alternatifler</h2>
<p>SoundDial tek seçenek değildir ve ihtiyaçlarınıza bağlı olarak ücretsiz bir araç yeterli olabilir. İşte adil bir özet.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource profesyonel düzeyde ağır siklettir. Uygulama başına ses seviyesinin yanı sıra, uygulama başına EQ ve tam çıkış yönlendirmesi de yapar; böylece bir uygulamayı kulaklıklara, diğerini hoparlörlere gönderebilirsiniz. Gerçekten mükemmel. Takaslar: maliyeti yaklaşık 39 dolar ve temiz bir App Store kurulumu değil, sisteminize bir ses yakalama sürücüsünün eklenmesini gerektiren doğrudan bir indirme. EQ ve yönlendirmeye ihtiyaç duyan bir ses uzmanıysanız buna değer. Her uygulamanın doğru ses seviyesinde olmasını istiyorsanız, ihtiyacınız olandan daha fazla araç ve daha fazla kurulum gerekir.</p>

<h2>Background Music (açık kaynak, ücretsiz)</h2>
<p>Background Music, uygulama başına ses seviyesi ve otomatik duraklatma sunan ücretsiz, açık kaynaklı bir uygulamadır. İşin püf noktası güvenilirliktir: sanal bir ses cihazı yükler ve daha yeni macOS sürümlerinde bozulma geçmişi vardır, bazen güncellemelerden sonra yeniden yükleme veya düzeltme gerektirir. Ayrıca güçlendirme, kayıtlı profiller ve gerçek otomatik azaltma gibi özelliklerden de yoksundur. Ücretsiz istiyorsanız ve ara sıra bakıma aldırış etmiyorsanız harika.</p>

<h2>FineTune ve eqMac</h2>
<p>FineTune, hafif bir başlangıç noktası olan ücretsiz, açık kaynaklı bir menü çubuğu uygulamasıdır. eqMac, her uygulamaya kendi kalıcı kaydırıcısını vermekten ziyade EQ'yu ve genel kazancı hedefleyen, sistem çapında güçlendiriciye sahip ücretsiz bir ekolayzırdır. İhtiyacınız darsa her ikisi de denemeye değer, ancak ikisi de "profil olarak kaydedilen uygulama başına farklı hacim" iş akışına odaklanmıyor.</p>

<h2>Hangisini seçmelisiniz?</h2>
<ul>
<li><strong>Profiller ve otomatik eğilmeyle temiz bir şekilde çalışmasını mı istiyorsunuz?</strong> App Store'dan tek seferlik 14,99 € fiyatla SoundDial, hiçbir sürücü yüklenmeden.</li>
<li><strong>Uygulama başına EQ ve ses yönlendirmeye ihtiyacınız var ve fiyatı veya sürücüyü önemsemiyor musunuz?</strong> SoundSource.</li>
<li><strong>Ücretsiz mi istiyorsunuz ve macOS güncellendiğinde düzeltmeler yapabilir misiniz?</strong> Background Music, FineTune veya eqMac.</li>
</ul>
<p>SoundDial'nun gerçek avantajı şu kombinasyondur: her uygulama için bağımsız ses seviyesi, sessize alma ve yükseltme, değiştirilebilir profillere kaydedilmiş, otomatik azaltma ile, hepsi bir abonelik yerine tek seferlik 14,99 € karşılığında güvenebileceğiniz ve tek tıklamayla kaldırabileceğiniz sanal alanlı bir App Store indirmesinin içindedir.</p>

<blockquote>Sürücü yok, uzantı yok, DMG yok. Her uygulamanın ses seviyesini bir kez ayarlayın, profil olarak kaydedin ve gerisini otomatik azaltmanın halletmesine izin verin.</blockquote>

<p>Her uygulamaya kendi hacmini vermeye hazır mısınız? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> ve mükemmel karışımınızı yaklaşık bir dakika içinde ayarlayın.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Mac'da Bir Uygulamayı Diğer Her Şeyden Daha Sessiz Hale Getirin",
    description: "Yüksek sesli bir uygulama Mac cihazınızdaki geri kalanları mı bastırıyor? İşte diğerlerine dokunmadan tek bir uygulamanın sesini kısmanın en hızlı ve güvenilir yolu.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>Her şey aynı kalırken bir uygulamayı kapatmak için şunu kullanın: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>macOS için uygulama başına bir menü çubuğu ses karıştırıcısı. Açın, listede yüksek sesli uygulamayı bulun ve kaydırıcısını aşağı sürükleyin. Müziğiniz, aramalarınız ve diğer sesleriniz kendi seviyelerini korurken bu uygulama anında sessizleşir. Bu en hızlı ve en güvenilir çözümdür.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;daki Bir Uygulamayı Diğer Her Şeyden Daha Sessiz Hale Getirin" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS bunu neden bu kadar zorlaştırıyor?</h2>

<p>İşte sinir bozucu gerçek: macOS'da yerleşik uygulama başına ses karıştırıcısı yoktur. Windows'da yıllardır bir tane var (ses simgesine sağ tıklayın, Ses Düzeyi Karıştırıcısını açın, bitti), ancak Mac'da ses seviyesi tuşları ve menü çubuğu kaydırıcısı yalnızca tek bir şeyi kontrol ediyor: ana çıkışı. Kapatın ve her şey daha da sessizleşsin. Sesini açın ve yüksek sesli uygulamanın sesi hala yüksek, sadece geri kalanıyla birlikte daha da yüksek.</p>

<p>Yani bir oyunun ses efektleri çok yüksek olduğunda, bir tarayıcı sekmesi bir reklamı otomatik olarak oynattığında veya podcast'inizde bildirim sesleri artmaya devam ettiğinde, tek yerel seçenekleriniz hantaldır: tüm sistemi sessize alın, her uygulamanın kendi ses ayarına girin (eğer varsa) veya suçluyu tamamen ortadan kaldırın. Bunların hiçbiri basitçe "bu uygulamayı daha sessiz hale getirin ve diğer her şeyi olduğu gibi bırakın" demenize izin vermez.</p>

<h2>Hızlı çözüm: uygulama başına ses düzeyi karıştırıcısı</h2>

<p>Uygulama başına ses düzeyi karıştırıcısı, çalışan her uygulamaya kendi bağımsız kaydırıcısını verir. Bu tam olarak kaçırdığınız kontrol. ile <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> şuna benziyor:</p>

<ul>
<li><strong>Menü çubuğu karıştırıcısını açın.</strong> SoundDial simgesine tıkladığınızda o anda ses çalan her uygulamanın canlı bir listesini göreceksiniz.</li>
<li><strong>Yüksek sesli olanı bulun.</strong> Oyun, tarayıcı, görüntülü arama, bildirim sesleri, geri kalan her şeyi boğuyor.</li>
<li><strong>Kaydırıcısını aşağı sürükleyin.</strong> Dengeli hissettiğiniz her yerde %40, %20'ye ayarlayın. Değişiklik anında gerçekleşir ve yalnızca söz konusu uygulamayı etkiler.</li>
<li><strong>Geriye kalan her şeyi kendi haline bırakın.</strong> Müzik çalarınız, çağrınız, diğer sekmeleriniz, hepsi sizin ayarladığınız ses seviyesini korur.</li>
</ul>

<p>Ayrıca, diğerleri oynamaya devam ederken tek bir uygulamayı tek tıklamayla tamamen kapatabilir veya çok yumuşaksa sessiz bir uygulamayı %100'ün üzerine yükseltebilirsiniz. Uygulamayı yeniden başlatmak yok, menüye dalmak yok.</p>

<h2>Bunun sizi kurtardığı yaygın durumlar</h2>

<ul>
<li><strong>Fon müziği eşliğinde gürültülü bir oyun.</strong> Oyunu rahat bir seviyeye düşürün ve oynatma listenizi bunun altında tam ses seviyesinde tutun.</li>
<li><strong>Tarayıcı reklamları ve ani yükselişe geçen videolar.</strong> Sürpriz bir otomatik oynatmanın sizi asla etkilememesi için tarayıcınızı aşağıya sabitleyin.</li>
<li><strong>Bir çağrı veya podcast üzerinden bildirim çalınıyor.</strong> Gerçekten önemsediğiniz sesi susturmadan bildirim ağırlıklı uygulamayı kapatın.</li>
<li><strong>Yüksek sesli medya altında sessiz bir görüntülü arama.</strong> Yüksek sesli uygulamayı kapatmak yerine çağrıyı %100'ün üzerine yükseltin, böylece insanları net bir şekilde duyabilirsiniz.</li>
</ul>

<h2>Ses seviyesi profilleri ve otomatik azaltma ile bunu bir kez ayarlayın</h2>

<p>Gürültülü bir uygulamayı düzeltmek güzel, ancak muhtemelen sabit kalmasını istersiniz. SoundDial'nun bunu kalıcı kılan iki özelliği vardır:</p>

<p><strong>Hacim profilleri</strong> uygulama başına bir dizi seviye kaydetmenize ve bunları bir tıklamayla geri çağırmanıza olanak tanır. Oyunun %30'da ve müziğin %100'de olduğu bir "Oyun" profili ve aramaların artırıldığı ve diğer her şeyin azaltıldığı bir "İş" profili oluşturun. Her seferinde kaydırıcıları yeniden sürüklemeden bağlamları değiştirin.</p>

<p><strong>Otomatik eğilme</strong> Seçilen bir uygulama oynatıldığında diğer uygulamaları otomatik olarak düşürür ve daha sonra geri getirir; böylece yüksek sesli bir uygulama ilk etapta sesinizi hiçbir zaman tamamen ele geçirmez. Profiller, eğilme ve hızlı çıkış değiştirme (Sistem Ayarlarını açmadan hoparlörler ve kulaklıklar arasında geçiş yapma) arasında dengenizi bir kez ayarlarsınız ve ses seviyesiyle ilgilenmeyi bırakırsınız.</p>

<h2>SoundDial'nun alternatiflerle karşılaştırılması</h2>

<p>Mac'da uygulama başına ses düzeyi elde etmenin başka yolları da var. İşte dürüst bir bakış:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39$)</strong> gerçekten profesyonel düzeydedir: uygulama başına EQ ve ses seviyesi kontrolünün yanı sıra tam çıkış yönlendirmesi. Ancak maliyeti iki katından fazladır ve ayrı bir indirme artı bir ses yakalama sürücüsü gerektirir. Stüdyo düzeyinde bir araç seti istiyorsanız mükemmel. Yalnızca bir uygulamayı kapatmak istiyorsanız ihtiyacınız olandan daha fazlası var.</li>
<li><strong>Background Music</strong> Ücretsiz ve açık kaynaktır, bu harikadır, ancak daha yeni macOS sürümlerinde bozulabilir ve ses artırma, profiller ve otomatik azaltma gibi özelliklerden yoksundur.</li>
<li><strong>FineTune</strong> ücretsiz, açık kaynaklı bir menü çubuğu uygulamasıdır ve <strong>eqMac</strong> güçlendiricili ücretsiz bir EQ'dur. Önceliğiniz ücretsizse her ikisi de denemeye değer, ancak fiyat karşılığında cila, güvenilirlik ve özelliklerden vazgeçiyorsunuz.</li>
</ul>

<p>SoundDial tatlı noktada oturuyor: Tek seferlik 14,99 €, abonelik yok. Çünkü Mac App Store üzerindedir, Apple tarafından incelenir ve korumalı alana alınır ve DMG, ses sürücüsü ve onaylanacak sistem uzantısı olmadan temiz bir şekilde yüklenir. Uygulama başına ses seviyesi, sessize alma, artırma, profiller ve otomatik azaltma gibi bu sorun için gerçekten önemli olan özelliklere, 39 ABD doları tutarında bir fiyat etiketi veya hassas ücretsiz bir araç olmadan sahip olursunuz.</p>

<h2>Sonuç olarak</h2>

<p>macOS tek bir uygulamayı tek başına geri çevirmenize izin vermez ancak bu saniyeler içinde kapatabileceğiniz bir boşluktur. Uygulama başına bir mikser yükleyin, yüksek sesli uygulamanın kaydırıcısını aşağı sürükleyin; sesinizin geri kalanı tam olarak istediğiniz yerde kalır. Bir profili kaydedersen bir daha asla bununla kavga etmeyeceksin.</p>

<p><strong>Geri kalanını boğan uygulamayı susturmaya hazır mısınız?</strong> Al <a href="https://apps.apple.com/app/id6772792641">Mac App Store üzerinde SoundDial</a> 14,99 € karşılığında, tek ödeme, sürücü yok, abonelik yok.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Yayıncılar için Mac Ses Mikseri: Mikrofon, Oyun ve Müzik Dengesi",
    description: "Mac'da yayın yaparken mikrofonu, oyun sesini, müziği ve uyarıları dengelemenin en hızlı yolu. SoundDial size profiller ve eğilme özellikleriyle uygulama başına ses düzeyi karıştırıcısı sunar.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Mac'da yayın yaparken mikrofonunuzu, oyununuzu, müziğinizi ve uyarılarınızı dengelemek için en hızlı ve güvenilir çözüm şudur: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, uygulama başına bir menü çubuğu ses karıştırıcısı. macOS'da yerleşik bir mikser bulunmadığından SoundDial, uygulama başına bağımsız seviyeler ayarlamanıza, sessiz kaynakları artırmanıza, akış profillerini kaydetmenize ve konuşurken müziği otomatik olarak kısmanıza olanak tanır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Yayıncılar için Ses Mikseri: Mikrofon, Oyun ve Müzik Dengesi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Sorun: macOS'nun uygulama başına ses düzeyi kontrolü yok</h2>
<p>Windows yıllardır Hacim Mikserine sahiptir. macOS hâlâ bir tane göndermiyor. Sistem ses düzeyi kaydırıcınız her şeyi aynı anda hareket ettirir; canlı yayındayken bu hiçbir işe yaramaz. Bir akış sırasında, hepsi aynı çıktı için mücadele eden en az dört kaynakla hokkabazlık yapıyorsunuz:</p>
<ul>
<li><strong>Sesinizi / mikrofonunuzu izleme</strong> - her şeyin üzerinde durması gerekiyor.</li>
<li><strong>Oyun sesi</strong> — gürültülü, dinamik ve aksiyon sırasında ani yükselmelere eğilimli.</li>
<li><strong>Arka plan müziği</strong> - yorumunuz karşısında sessiz kalmalı.</li>
<li><strong>Uyarılar ve sohbet sesleri</strong> — Discord, Yayın Destesi, takipçi uyarıları, bildirimler.</li>
</ul>
<p>Uygulama başına kontrol olmadan, oyunun uygulama içi kaydırıcısını kullanırsınız, Spotify'yu elinizle susturursunuz ve yüksek sesli bir ara sahnenin izleyicilerinizi havaya uçurmaması için dua edersiniz. Bu bir karışım değil, hasar kontrolü.</p>

<h2>Uygun bir akış mikserinin yapması gerekenler</h2>
<p>Mac'da içerik oluşturucu odaklı bir ses kurulumu size dört şey sağlamalıdır: uygulama başına bağımsız seviyeler, çok sessiz bir kaynağı yükseltme yeteneği, anında hatırlayabileceğiniz kayıtlı konfigürasyonlar ve konuştuğunuz anda müziğin kesilmesi için otomatik kısma. SoundDial menü çubuğundaki dördünü de kapsar.</p>

<h3>1. Her uygulama için bağımsız ses düzeyi</h3>
<p>Oyunu %60'a, müziği %25'e, Discord'yu %80'e ve tarayıcınızı %40'a ayarlayın; her uygulamanın kendi kaydırıcısı vardır. Hiçbir şey başka hiçbir şeye karışmaz. Ayrıca, bir kaynak yayının ortasında hatalı davrandığında, uygulamanın kendisine dokunmadan uygulama başına sesi anında kapatabilirsiniz.</p>

<h3>2. Sessiz kaynaklar için ses seviyesini artırma</h3>
<p>Bazı uygulamalar ve oyunlar %100'de bile çok sessizdir. SoundDial'nun uygulama başına desteği, kaynağı normal tavanının ötesine iter, böylece mırıldanan bir oyun veya düşük hacimli bir video, karışımda ihtiyacınız olan yerde durur; yeniden kodlama yok, eklenti yok.</p>

<h3>3. Farklı sahneler için ses profilleri</h3>
<p>Bu, yayıncılara en çok zaman kazandıran özelliktir. "Just Chatting" karışımınız (müzik açık, oyun kapalı), "BRB" karışımınızdan farklı olan "Boss Fight" karışımınızdan (oyun açık, müzik neredeyse sessiz) farklıdır. Her birini bir profil olarak kaydedin ve dört kaydırıcıyı canlı olarak sürüklemek yerine tek tıklamayla geçiş yapın.</p>

<h3>4. Müziğin sesinizin altında kalması için otomatik kapanma</h3>
<p>Otomatik kısma, konuştuğunuzda arka plan sesini otomatik olarak azaltır ve durduğunuzda geri getirir. Tek başına yayıncılar için bu, net yorum ile sesinizi sürekli olarak gömen müzik arasındaki farktır; manuel yerine otomatik olarak gerçekleştirilir.</p>

<h2>OBS'nun uygun olduğu yer</h2>
<p>OBS, masaüstü ses karıştırıcınız değil, yayın aracınızdır. OBS, Ses Karıştırıcı paneli ve filtreleri aracılığıyla akışa hangi seviyelerin gireceğini kontrol eder, ancak yakaladığı ses kaynaklarından çalışır; bireysel macOS uygulamalarına ulaşıp bunları sistem düzeyinde kapatmaz. Mac'da, uygulama başına temiz masaüstü sesini OBS'ya almak her zaman sıkıntılı kısım olmuştur.</p>
<p>Pratik iş akışı: Mac cihazınızda gerçek uygulama başına seviyeleri ayarlamak için SoundDial'yu kullanın, böylece ortaya çıkanlar zaten dengeli olur, ardından OBS'nun yayın seviyelerini yakalamasına ve ince ayar yapmasına izin verin. Karışımı kaynağa bir kez ayarladığınızda OBS'nun mücadele edeceği çok daha az şey kalır. SoundDial'daki hızlı çıkış değiştirme, sahneler arasında Sistem Ayarlarına dalmadan kulaklıklar ve hoparlörler arasında geçiş yapmanızı da sağlar.</p>

<h2>SoundDial ve alternatifler</h2>
<p>Seçenekleriniz var ve burada dürüstlük önemlidir:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39$)</strong> — uygulama başına EQ ve tam çıkış yönlendirme ile profesyonel düzeyde. Mükemmel, ancak maliyeti iki katından fazla, doğrudan indirme gerektiriyor ve bir ses yakalama sürücüsü yüklüyor. Esas olarak uygulama başına temiz seviyelere, güçlendirmeye ve eğilmeye ihtiyacınız varsa aşırıya kaçmayın.</li>
<li><strong>Background Music (ücretsiz, açık kaynak)</strong> — gerçekten kullanışlı ve ücretsiz, ancak daha yeni macOS sürümlerinde işe yarayabilir ve hızlandırma, profil ve otomatik azaltma özelliği yoktur; yayıncıların tam olarak güvendiği özelliklerdir.</li>
<li><strong>FineTune (ücretsiz, açık kaynaklı menü çubuğu uygulaması)</strong> — uygulama başına hafif kontrol, ancak canlı akış için oluşturulmuş profiller artı ördek kombinasyonunun bulunmadığı bir topluluk projesi.</li>
<li><strong>eqMac (ücretsiz EQ + güçlendirici)</strong> — tonu şekillendirme ve güçlendirme için iyidir, ancak uygulama başına bir akış karıştırıcısı değil, bir ekolayzırdır.</li>
</ul>
<p>SoundDial'nun açısı: bu bir <strong>€14,99 tek seferlik</strong> üzerinde satın alın <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Apple tarafından incelendi, korumalı alana alındı ve DMG ve ses sürücüleri veya sistem uzantıları olmadan temiz bir şekilde kuruluyor. Bu son kısım yayıncılar için önemlidir: daha az çekirdek düzeyinde bileşen, macOS yayınınızdan önceki gece güncellendiğinde daha az sürpriz kesinti anlamına gelir.</p>

<h2>Dürüst takas</h2>
<p>Yayın düzeyinde EQ'ya ve karmaşık yönlendirme zincirlerine ihtiyacınız varsa SoundSource karşılığını alır. Ücretsiz bir tamirci aracı istiyorsanız ve ara sıra kırılmayı dert etmiyorsanız, Background Music veya FineTune işinizi görecektir. Ancak macOS güncellemelerinden sonra hayatta kalan güvenli bir App Store kurulumundan akışın gerçekten talep ettiği karışımı (uygulama başına seviyeler, artırma, kayıtlı sahne profilleri ve otomatik azaltma) istiyorsanız, SoundDial paraya ulaşmanın en doğrudan yoludur.</p>

<p><strong>Akış sesinizi düzeltmeye hazır mısınız?</strong> Al <a href="https://apps.apple.com/app/id6772792641">Mac App Store üzerinde SoundDial</a> 14,99 € karşılığında - mikrofonunuzu, oyununuzu, müziğinizi ve uyarı seviyenizi bir kez ayarlayın, bunları profil olarak kaydedin ve otomatik kısma özelliğinin sesinizi zirvede tutmasına izin verin.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "macOS Tahoe'da Ses Çatlaması ve Patlaması Nasıl Onarılır",
    description: "macOS Tahoe 26'ya güncelleme yaptıktan sonra seste çatlama veya patlama sesi mi oluyor? Örnek hızını eşleştirerek, CoreAudio'yu sıfırlayarak, Bluetooth codec bileşeninizi kontrol ederek ve eklenti çakışmalarını temizleyerek sorunu düzeltin. İşte tam sorun giderme sırası.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>macOS Tahoe 26'ya güncelleme sonrasında çatlama ve patlama neredeyse her zaman bir örnekleme hızı uyumsuzluğu, kesintili bir Bluetooth kodek anlaşması veya takılıp kalmış bir CoreAudio işlemidir. Ses MIDI Kurulumunda çıkış örnek hızını eşleştirip sıfırlayarak sorunu düzeltin <code>coreaudiod</code>, Bluetooth kulaklıkları unutup yeniden eşleştirmek ve ses eklentisi ana bilgisayarlarından çıkmak. Aşağıda sırayla bunları inceleyin.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — macOS Tahoe&#x27;da Ses Çatlaması ve Patlaması Nasıl Onarılır" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ucuz düzeltmelerle başlayın</h2>

<p>Teknik herhangi bir şeye dokunmadan önce, çoğu vakayı bir dakikadan kısa sürede çözen iki şeyi göz ardı edin:</p>

<ul>
<li><strong>Mac'yu yeniden başlatın.</strong> Bir Tahoe güncellemesi, ses servis programlarını şaşırtıcı bir şekilde sıklıkla yarı taşınmış durumda bırakır. Temiz bir yeniden başlatma, CoreAudio'yu sıfırdan yeniden yükler ve güncelleme sonrası çatlamaların çoğunu temizler.</li>
<li><strong>Çıkış cihazını çıkarın ve yeniden takın.</strong> Bu bir USB DAC, dock veya ses arabirimiyse bağlantısını kesin, birkaç saniye bekleyin ve yeniden bağlayın. Farklı bir USB bağlantı noktasını da deneyin; tercihen bir hub yerine doğrudan Mac üzerinde. Sesi ileten hub'lar ve ekranlar yaygın bir ses kaynağıdır.</li>
</ul>

<p>Yeniden başlatma sırasında gürültü devam ederse bu bir aksaklık değil, bir yapılandırma sorunudur. Devam etmek.</p>

<h2>Örnekleme hızını eşleştirin (en yaygın neden)</h2>

<p>Klasik Tahoe çatırtısı, cihazınızın istediği ile macOS'nun gönderdiği arasındaki örnek hızı uyumsuzluğundan kaynaklanır. Bir uygulama 44,1 kHz ses çaldığında ve sistem 48 kHz'e kilitlendiğinde (veya tam tersi), yeniden örneklemede takılma veya patlama meydana gelebilir.</p>

<ul>
<li>Açık <strong>Ses MIDI Kurulumu</strong> (Uygulamalar → Yardımcı Programlar'da veya Spotlight'ta arama yapın).</li>
<li>Sol kenar çubuğunda çıkış cihazınızı seçin.</li>
<li>Şuna bak <strong>Biçim</strong> açılır menü. Bunu ayarlamayı deneyin <strong>48000,0 Hz, 2 kanal-24 bit Tam Sayı</strong> ve test edin.</li>
<li>Patlama devam ederse şuna geçin: <strong>44100,0Hz</strong> ve tekrar test edin.</li>
<li>Arayüzler için örnekleme hızının DAW'nuzun proje hızıyla eşleştiğinden emin olun.</li>
</ul>

<p>Formatı değiştirmek aynı zamanda CoreAudio'yu bağlantıyı yeniden müzakere etmeye zorlar; bu, aynı değere geri döndüğünüzde bile birçok durumu tek başına düzeltir.</p>

<h2>CoreAudio'yu sıfırla</h2>

<p>CoreAudio, adı verilen bir arka plan arka plan programı olarak çalışır. <code>coreaudiod</code>. Büyük bir macOS güncellemesinden sonra eski cihaz durumunu koruyabilir. Yeniden başlatmak güvenlidir ve yeniden başlatmaya gerek kalmadan anında etkili olur.</p>

<p>Terminal'yu açın ve çalıştırın:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>İstendiğinde şifrenizi girin. Sesiniz bir saniyeliğine kesilecek, ardından arka plan programı temiz bir sayfayla otomatik olarak yeniden başlatılacak. Bu, güncellemeden önce sorun olmayan bir makinede birdenbire ortaya çıkan çatırtılara yönelik en etkili düzeltmedir.</p>

<h2>Bluetooth kulaklığınızı ve codec bileşeninizi kontrol edin</h2>

<p>Çatırtı yalnızca AirPods veya diğer Bluetooth kulaklıklarda meydana geliyorsa sorun genellikle hoparlörlerinizde değil kodek anlaşmasındadır. Bağlantı sıkışık olduğunda veya macOS düşük bant genişliğine sahip çağrı moduna düştüğünde kablosuz ses kalitesi düşer.</p>

<ul>
<li><strong>Cihazı unutun ve yeniden eşleştirin.</strong> Sistem Ayarları → Bluetooth seçeneğine gidin, kulaklıkları çıkarın ve yeniden eşleştirin. Bu, üzerinde anlaşılan codec bileşenini sıfırlar.</li>
<li><strong>Çağrı modunun düşmesine dikkat edin.</strong> Bir uygulama mikrofonu açtığında, macOS, Bluetooth kulaklıklarını düşük kaliteli, kulağa çıtır çıtır gelen iki yönlü bir profile geçirir. Kullanmadığınız konferans ve sesli uygulamalardan vazgeçtiğinizde aslına uygunluk geri gelir.</li>
<li><strong>Paraziti azaltın.</strong> Kalabalık 2,4 GHz ortamlardan uzaklaşın ve ihtiyacınız olmayan Bluetooth cihazlarının bağlantısını kesin. Meşgul bir radyo grubu aralıklı pop'lar üretiyor.</li>
<li><strong>Mikrofon girişini kapatın</strong> Yalnızca dinlemeniz gerekiyorsa bir uygulamanın ayarlarında, macOS yüksek kaliteli oynatma profilini korur.</li>
</ul>

<h2>Ses eklentisi ana bilgisayarlarından ve sanal sürücülerden çıkın</h2>

<p>Bir sistem uzantısı veya sanal aygıt yükleyen üçüncü taraf ses yazılımları, işletim sistemi atlamasından sonra sık sık suç işleyen kişilerdir, çünkü çekirdek ve ses uzantılarının yeni bir macOS sürümü için sıklıkla güncellenmesi gerekir. Şüpheliler arasında sanal ses yönlendiricileri, ekolayzır uygulamaları, geridöngü araçları ve eski sürücü tabanlı yardımcı programlar yer alıyor.</p>

<ul>
<li>Herhangi bir ekolayzırdan, ses yönlendiricisinden veya geridöngü uygulamasından çıkın ve çatırtının durup durmadığını test edin.</li>
<li>Güncelleştirilmesi veya kaldırılması gerekebilecek ses uzantıları için Sistem Ayarları → Genel → Oturum Açma Öğeleri &amp; Uzantılarını kontrol edin.</li>
<li>Bu uygulamaları Tahoe uyumlu sürümlerine güncelleyin veya artık kullanmadıklarınızı kaldırın. Yığılmış ses sürücüleri, büyük bir güncellemeden sonra sıklıkla birbiriyle çakışır.</li>
</ul>

<p>Bu uygulamalardan birini bırakmak pop'ları susturuyorsa suçluyu buldunuz. Geçerli sürümü yeniden yükleyin veya kapalı bırakın.</p>

<h2>Daraltın: sistem genelinde mi yoksa tek bir uygulamada mı?</h2>

<p>Gürültünün her yerde mi yoksa yalnızca belirli bir yazılımda mı meydana geldiğini öğrenin. Yerel bir ses dosyasını, ardından bir tarayıcı videosunu ve ardından bir müzik uygulamasını oynatın. Yalnızca bir uygulama çatırdıyorsa çözüm, macOS değil, o uygulamanın kendi ses ayarları veya güncellemesidir. Sorun sistem çapındaysa yukarıdaki adımlar yanıtın bulunduğu yerdir.</p>

<p>Hâlâ takılıp kaldığınızda Güvenli Mod'da önyükleme yapın (Apple silikonun üzerindeki güç düğmesini basılı tutun, ardından Shift tuşunu basılı tutarken başlangıç diskinizi seçin). Güvenli Mod hiçbir üçüncü taraf uzantısı yüklemez. Ses orada temizse bunun nedeni bir oturum açma öğesi veya sürücüdür ve onu bulmak için bunları birer birer yeniden etkinleştirebilirsiniz.</p>

<h2>Sesiniz temiz olduğunda</h2>

<p>Çatlaklık bir sürücü ve örnekleme hızı sorunudur, dolayısıyla yukarıdaki düzeltmeler sorunu gerçekten çözer. Ancak oynatma kararlı hale geldikten sonra farklı bir sınırlama fark edebilirsiniz: Windows'da olduğu gibi, macOS'da hâlâ yerleşik uygulama başına ses karıştırıcısı yoktur. Her şeyi geri çevirmeden yüksek sesli bir uygulamayı kapatamazsınız.</p>

<p>İşte boşluk <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> doldurur. Her uygulamaya kendi ses kaydırıcısını, uygulama başına ses kapatmayı ve hatta sessiz uygulamalar için ses yükseltmeyi ve ayrıca hızlı çıkış değiştirmeyi sağlayan bir menü çubuğu karıştırıcısıdır. Çatırtıyı düzeltmez, ancak sesiniz sağlıklı olduğunda günlük kontrolü çok daha kolay hale getirir.</p>

<p>Yukarıdaki adımları sırayla uygulayın ve yeniden başlatma ve örnekleme hızı kontrolüyle başlayın. Daha sonra temiz ses kurulumunuzda gerçek uygulama başına kontrol istiyorsanız, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store'da 14,99 €'luk tek seferlik satın alma işlemidir; hiçbir sürücü veya kurulacak DMG olmadan korumalı alana alınır.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Mac'da Kekemelik veya Kesilme (Tahoe Düzeltme)",
    description: "macOS Tahoe'da AirPods kekemeliği, kesilmesi veya sesin kesilmesi neredeyse her zaman Bluetooth paraziti veya otomatik geçiş kaybıdır. İşte nasıl yeniden eşleştirme yapacağınız, 2,4 GHz tıkanıklığı nasıl keseceğiniz ve oynatmayı kesintiye uğratan aktarımları nasıl durduracağınız.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>AirPods'nun macOS Tahoe'da takılması veya kesilmesi, neredeyse her zaman Bluetooth parazitidir, bozuk bir kulaklık değildir. Her zamanki suçlular 2,4 GHz Wi-Fi ve yönlendirici tıkanıklığı, agresif otomatik cihaz değiştirme ve eski bir eşleştirmedir. Çoğu durumu düzeltmek için AirPods'yu yeniden eşleştirin, otomatik geçişi kapatın ve kalabalık 2,4 GHz kanallardan uzaklaşın.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Mac&#x27;da Kekemelik veya Kesilme (Tahoe Düzeltme)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>AirPods neden özellikle Mac'ya düşüyor?</h2>

<p>AirPods, kalabalık 2,4 GHz radyo bandını Wi-Fi, mikrodalga fırınlar, USB 3 cihazları ve evinizdeki hemen hemen her akıllı prizle paylaşan Bluetooth'yu kullanır. Mac'nuz meşgul bir radyodur: Wi-Fi, Bluetooth, AirDrop ve Süreklilik özelliklerini üst üste binen antenler üzerinde dengeler. Bu bant tıkandığında, Bluetooth ses kekeleyen ilk şey oluyor çünkü dosya aktarımının yapabildiği gibi düşen paketlere tahammül edemiyor.</p>

<p>Tahoe sihirli bir şekilde AirPods cihazınızı daha da kötüleştirmedi, ancak yeni bir macOS kurulumu sıklıkla radyo davranışını sıfırlar, Süreklilik aktarımlarını yeniden etkinleştirir ve codec bileşenleri üzerinde yeniden pazarlık yapar. Bu nedenle güncellemeden hemen sonra sorunlar ortaya çıkıyor. İyi haber: düzeltmeler iyi anlaşılmış ve çoğunlukla ücretsiz.</p>

<h2>Düzeltme 1: AirPods'yu yeniden eşleştirin (önce bunu yapın)</h2>

<p>Eski veya bozuk bir eşleştirme, yeniden başlatmalarda hayatta kalır ve rastgele görünen aralıklı düşmelere neden olur. Bağlantıyı tamamen kaldırın ve yeniden ekleyin:</p>

<ul>
<li>Açık <strong>Sistem Ayarları, Bluetooth</strong>.</li>
<li>AirPods cihazınızın yanındaki bilgi (i) düğmesine tıklayın ve <strong>Bu Cihazı Unut</strong>.</li>
<li>AirPods'yu kutusuna koyun, kapağı kapatın, 15 saniye bekleyin ve ardından açın.</li>
<li>Işık beyaz renkte yanıp sönene kadar kasanın arkasındaki düğmeyi basılı tutun.</li>
<li>Bluetooth listesinden yeniden eşleştirin.</li>
</ul>

<p>Oradayken AirPods donanım yazılımının güncel olduğundan emin olun. Manuel güncelleyici yoktur, ancak bunları bir süreliğine bağlı bir iPhone veya Mac'nun yanında bırakmak, arka planda güncelleme yapmalarını sağlar.</p>

<h2>Düzeltme 2: Otomatik geçişin kapatılması</h2>

<p>Bu, Apple ekosistemindeki insanlar için "kesilmenin" en büyük nedenidir. AirPods cihazınız sizi Mac, iPhone ve iPad'iniz arasında takip etmeye çalışır. Telefonunuz ses alması gerektiğini düşündüğünde, Mac cihazınızdaki bağlantı kesintiye uğrar ve podcast'in ortasında yarım saniyelik bir kesintiye neden olur.</p>

<ul>
<li>Mac: Bluetooth'da, AirPods'nun yanındaki (i) öğesine tıklayın, <strong>Bu Mac'ya Bağlan</strong> için <strong>Bu Mac'ya En Son Bağlanıldığında</strong> Otomatik olarak yerine.</li>
<li>iPhone'da: Ayarlar'da AirPods cihazınıza dokunun, <strong>Bu iPhone'a Bağlan</strong>, seç <strong>Bu iPhone'a En Son Bağlanıldığında</strong>.</li>
</ul>

<p>Bu, cihazlar arasındaki çekişmeyi durdurur. Sesin nereye gideceğini manuel olarak seçeceksiniz; bu, istikrarlı oynatma için küçük bir bedeldir.</p>

<h2>Düzeltme 3: 2,4 GHz tıkanıklığı kesin</h2>

<p>Video görüşmeleri, indirmeler sırasında veya diğer kişiler yayın yaparken kesintiler meydana gelirse, radyo bandınız doymuş demektir. Birkaç pratik hareket:</p>

<ul>
<li><strong>5GHz Wi-Fi bandını kullanın</strong> Mac cihazınızda. Yönlendirici ayarlarınızda 5GHz ağına farklı bir ad verin ve ona bağlanın. Bu, Bluetooth için 2,4 GHz bandını serbest bırakır.</li>
<li><strong>USB 3 ve Thunderbolt hub'larını uzaklaştırın</strong> Mac ve AirPods cihazınızdan. USB 3, kötü şöhretli bir 2,4 GHz gürültü kaynağıdır; Dizüstü bilgisayarınızın yanında bulunan bir hub, Bluetooth'yu birkaç santim öteden mahvedebilir.</li>
<li><strong>Yönlendiricinizin 2,4 GHz kanalını değiştirin</strong> 1, 6 veya 11'e (örtüşmeyen seçenekler) gidin ve komşularınızın bulunduğu kalabalık kanallardan kaçının.</li>
<li><strong>Görüş hattınızı koruyun.</strong> Gövdeler ve duvarlar 2,4 GHz'i emer. Mac cihazınız arkanızda veya bir çantanın içindeyse düşmeler daha da kötüleşir.</li>
</ul>

<blockquote>Wi-Fi 6E ve Wi-Fi 7 yönlendiricileri dolaylı olarak yardımcı olabilir: cihazlarınızı 6 GHz'e itmek, Bluetooth'nun bağlı olduğu 2,4 GHz bandını temizler. Ancak sizi 2,4 GHz'e geri döndüren kötü yapılandırılmış bir ağ, işleri daha da kötüleştirebilir. Gerçekte hangi grupta olduğunuzu kontrol edin.</blockquote>

<h2>Düzeltme 4: Bluetooth ve Süreklilik yığınını sıfırlayın</h2>

<p>Yeniden eşleştirme işe yaramazsa radyoları kendiniz sıfırlayın:</p>

<ul>
<li>Menü çubuğundan Bluetooth'yu kapatıp açın, ardından Mac'yu yeniden başlatın. Yeniden başlatma, şaşırtıcı sayıda geçici ses sorununu ortadan kaldırır.</li>
<li>Intel Mac'larda SMC/NVRAM'ı sıfırlayın veya Apple Silicon'u 30 saniye boyunca tamamen kapatın (yeniden başlatmayın).</li>
<li>AirDrop veya Handoff kullanmıyorsanız Sistem Ayarları, Genel bölümünden Handoff'u devre dışı bırakarak AirDrop &amp; Handoff arka plandaki radyo sohbetini azaltır.</li>
</ul>

<h2>Sorunu ne düzeltmez (ve ses mikserinin gerçekte yaptığı şey)</h2>

<p>Kapsamı açıklığa kavuşturmak gerekirse: bunların hiçbiri bir yazılım birimi sorunu değildir ve hiçbir birim uygulaması bir Bluetooth bağlantısını onaramaz. Eğer sesiniz <em>düşürmek</em>, yukarıdaki radyo sorununu takip edin. Şuna benzer uygulamalar <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> uygulama başına ses seviyesini, ses kapatmayı ve çıkış değiştirmeyi kontrol ederler, Bluetooth yığınına dokunmazlar, dolayısıyla kekemeliği durdurmazlar. Bir mikserin gerçekten yardımcı olduğu nokta, birçok AirPods kullanıcısının kesintilerle bağdaştırdığı bitişik rahatsızlıktır: bir uygulamanın patlaması sırasında diğeri çok sessizdir veya çıkışları hızlı bir şekilde atlama ihtiyacı duyar. Bu bir ses dengesi sorunu, bağlantı sorunu değil.</p>

<p>Dürüstçe teşhis koyun. Ses bir vuruş için kesilip geri geliyorsa, bu bir parazit veya otomatik geçiştir. Uygulamalar arasında seviyeler eşit değilse, bu aslında yazılımla çözebileceğiniz bir karıştırma sorunudur.</p>

<h2>Hızlı kontrol listesi</h2>

<ul>
<li>AirPods'yu unutun ve yeniden eşleştirin.</li>
<li>Hem Mac'yu hem de iPhone'u şu şekilde ayarlayın: <strong>En Son Bağlanıldığında</strong>, Otomatik olarak değil.</li>
<li>Mac'nuzu 5 GHz Wi-Fi'ye taşıyın; USB 3 hub'larını uzak tutun.</li>
<li>2,4 GHz'i kanal 1, 6 veya 11'e ayarlayın.</li>
<li>Bluetooth'yu değiştirdikten sonra yeniden başlatın.</li>
</ul>

<p>Kesintiler ortadan kalktığında ve her uygulamanın ne kadar yüksek sesle oynatılacağı konusunda daha net bir kontrol istiyorsanız, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS'nun hala içermediği uygun bir uygulama başına ses mikseri, sessize alma, yükseltme ve hızlı çıkış değiştirme özelliği ekler. Bu, Mac App Store'da 14,99 €'luk tek seferlik satın alma işlemidir, korumalı alana alınır ve hiçbir sürücü kurulmaz.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Tahoe Güncellemesinden Sonra Mac'da Sağ Hoparlör Öldü mü? Nasıl Düzeltilir",
    description: "macOS Tahoe'ya güncelleme yaptıktan sonra bir hoparlör veya kanal çalışmayı durdurdu mu? Ses dengesi kaydırıcısıyla başlayın, ardından Core Audio'yu sıfırlayın, güvenli modu deneyin ve donanımı devre dışı bırakın. Açık bir sorun giderme kılavuzu.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>macOS Tahoe'ya güncelleme yaptıktan sonra sağ hoparlörünüz sustuysa sesi kontrol edin <strong>denge kaydırıcısı</strong> Birincisi, güncelleme sırasında değişebilir. Sistem Ayarları &gt; Ses &gt; Çıkışı'na gidin ve Balance'ın tam merkezde olduğundan emin olun. Sorun yoksa Core Audio'yu yeniden başlatın, güvenli modda önyükleyin ve ardından donanımı devre dışı bırakın. Çoğu vaka yazılımdır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Tahoe Güncellemesinden Sonra Mac&#x27;da Sağ Hoparlör Öldü mü? Nasıl Düzeltilir" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Birincisi: denge kaydırıcısı (bunu düşündüğünüzden daha sık düzeltir)</h2>

<p>Sıkışan veya değişen denge kaydırıcısı, bir kanalın sessiz kalmasının en yaygın nedenidir ve macOS güncellemeleri zaman zaman onu dürter. En kötüsünü varsaymadan önce:</p>

<ul>
<li>Açık <strong>Sistem Ayarları &gt; Ses</strong>.</li>
<li>tıklayın <strong>Çıkış</strong> sekmesine gidin ve hoparlörlerinizi (yerleşik veya harici aygıtınız) seçin.</li>
<li>Bul <strong>Bakiye</strong> kaydırıcıyı seçin ve tam merkeze sürükleyin. Sola çekilirse sağ kanalınız ölü gibi görünecektir.</li>
</ul>

<p>Bunu yap <em>çıkış cihazı başına</em>. Denge ayarı, yerleşik hoparlörler, kulaklıklar ve her bir harici arayüz için ayrı ayrı hatırlanır; dolayısıyla, sorun USB DAC'nizdeyse merkezi bir yerleşik dengenin faydası olmaz.</p>

<h2>Bunun gerçekten bir donanım kanalı olup olmadığını test edin</h2>

<p>Donanımı hızlı bir şekilde içeri veya dışarı doğru yönetin. İyi bildiğiniz bir stereo parçayı çalın ve ardından bir çift kablolu kulaklık takın. Her iki kanal da kulaklıkla çalışıyor ancak hoparlörler aracılığıyla çalışmıyorsa sorun, ses motorunun alt akışındadır (hoparlör donanımı veya çıkış yolu). Aynı kanal kulaklıklarda da ölüyse, bunun nedeni büyük olasılıkla yazılım veya mantık kartının ses kodlayıcısıdır.</p>

<p>Ayrıca açabilirsiniz <strong>Müzik</strong> veya QuickTime, bir şeyler çalın ve dengeyi önce sola, sonra tam sağa değiştirin. Ses kanallar arasında temiz bir şekilde hareket ediyorsa, her iki hoparlör de çalışıyor demektir ve bu tamamen bir ayar sorunudur.</p>

<h2>Core Audio'yu yeniden başlatın</h2>

<p>macOS tüm sesi <strong>çekirdek ses</strong> süreç. Büyük bir güncellemeden sonra durumu sıkışabilir; çıkışlar kaybolur, kanallar düşer veya ses seviyesi tuhaf davranır. Yeniden başlatmak güvenlidir ve macOS'yu ses grafiğini yeniden oluşturmaya zorlar:</p>

<ul>
<li>Açık <strong>Terminal</strong> (Uygulamalar &gt; Yardımcı Programlar).</li>
<li>Çalıştır: <code>sudo killall coreaudiod</code></li>
<li>Şifrenizi girin. Ses arka plan programı bir veya iki saniye içinde otomatik olarak yeniden başlatılır.</li>
</ul>

<p>Hiçbir şey silinmez; bu yalnızca ses alt sistemini yeniden başlatır. Hemen ardından sağ hoparlörünüzü tekrar test edin.</p>

<h2>Düzgün şekilde yeniden başlatın ve ardından güvenli modu deneyin</h2>

<p>Tam yeniden başlatma, killall'ın çözemeyeceği geçici ses sorunlarını giderir. Kanal hala ölüyse, önyükleme yapın <strong>güvenli mod</strong>Minimal bir sistem yükleyen ve üçüncü taraf ses uzantılarını ve oturum açma öğelerini atlayan:</p>

<ul>
<li><strong>Elma Silikonu:</strong> Kapatın. "Başlangıç ​​seçenekleri yükleniyor" görünene kadar güç düğmesini basılı tutun. Diskinizi seçin ve basılı tutun <strong>Shift</strong> ve "Güvenli Modda Devam Et"i tıklayın.</li>
<li><strong>Bilgi:</strong> Yeniden başlat ve basılı tut <strong>Shift</strong> Oturum açma penceresi görünene kadar.</li>
</ul>

<p>Her iki hoparlör de güvenli modda çalışıyorsa, güncellemeden önce yüklenmiş bir üçüncü taraf ses sürücüsü, sanal aygıt veya menü çubuğu yardımcı programı Tahoe'nun yeni ses yığınıyla çakışıyor demektir. Normale dönün ve yakın zamanda yüklenen ses yazılımını kaldırın veya güncelleyin (ekran kaydediciler, toplantı uygulamaları ve ses yönlendirme kext'leri yaygın suçlulardır).</p>

<h2>NVRAM'ı sıfırlayın (yalnızca Intel Mac'ler)</h2>

<p>Intel Mac'larda ses ve hoparlör ayarları NVRAM/PRAM'de bulunur ve eski bir değer güncellemeden sonra hayatta kalabilir. Sıfırlayın: kapatın, ardından açın ve hemen basılı tutun <strong>Seçenek + Komut + P + R</strong> yaklaşık 20 saniye boyunca Mac'nun bir kez yeniden başlatılmasına izin verin. Bu, Apple Silicon Mac'lar için geçerli değildir; bunu otomatik olarak yönetirler, bu nedenle M serisi bir makine kullanıyorsanız bunu atlayın.</p>

<h2>Tekrar güncelleyin ve bir nokta sürümü olup olmadığını kontrol edin</h2>

<p>Herhangi bir büyük macOS sürümünün ilk sürümleri, daha sonra yamalanacak ses sürücüsü hatalarıyla birlikte gelir. Git <strong>Sistem Ayarları &gt; Genel &gt; Yazılım Güncellemesi</strong> ve bekleyen Tahoe noktası sürümlerini (14.x.1, 14.x.2 vb.) yükleyin. Ek bir güncelleme varsa, genellikle güncelleme sonrası ses gerilemelerini tam olarak ele alır.</p>

<h2>Gerçekten donanım olduğunda</h2>

<p>Güvenli mod, Core Audio'nun yeniden başlatılması ve temiz bir yeniden yükleme başarısız olursa ve kulaklıklarda aynı kanal ölüyse, bir donanım hatasıyla karşı karşıya olabilirsiniz. Bir güncellemenin zamanlaması tesadüfi olabilir; hoparlör amplifikatörleri ve ses codec bileşenleri arızalanır. Çalıştır <strong>Apple Teşhisleri</strong> (kapatın, ardından Apple Silicon'daki güç düğmesini basılı tutun ve Tanılama'yı seçin veya basılı tutun <strong>D</strong> Başlangıçta Intel'de). Bir ses bileşenini işaretlerse iletişime geçin <strong>Apple Desteği</strong> veya yetkili servis sağlayıcınız. Patlamış bir hoparlör için yazılıma para harcamayın.</p>

<blockquote>Hızlı genel kural: Eğer ses, denge kaydırıcısıyla doğru bir şekilde kayıyorsa, her iki hoparlör de fiziksel olarak iyi durumdadır ve düzeltmeniz yazılımdadır. Hiçbir zaman ölü tarafa geçmezse donanımdan şüphelenin.</blockquote>

<h2>Toplu yazılım nereye uyar (ve nereye uymaz)</h2>

<p>Açık olmak gerekirse: ölü bir hoparlör kanalı, ses uygulamasının düzelttiği bir şey değildir; yukarıdaki kontroller sizin yolunuzdur. Bununla birlikte, sesiniz yeniden sağlıklı hale geldiğinde macOS'da Windows'nun yıllardır sahip olduğu bir şey eksiktir: gerçek bir uygulama başına ses mikseri. Bir uygulamanın çok gürültülüyken diğerinin çok sessiz olması nedeniyle kendinizi Ses ayarlarını karıştırırken bulursanız, aşağıdaki gibi bir menü çubuğu karıştırıcısı kullanabilirsiniz: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> sistem bakiyenize dokunmadan uygulama başına bağımsız ses seviyesi, sessize alma ve hatta yükseltme ayarlamanıza olanak tanır. Bu, bu makaledeki sorunun onarımı değil, günlük karıştırma için kullanışlı bir araçtır.</p>

<h2>Kısa versiyon</h2>

<ul>
<li>Ortala <strong>Bakiye</strong> kaydırıcı — çıkış cihazı başına.</li>
<li>Donanımı izole etmek için kulaklıkla test edin.</li>
<li>Çalıştır <code>sudo killall coreaudiod</code>, ardından yeniden başlatın.</li>
<li>Deneyin <strong>güvenli mod</strong> sürücü çatışmalarını yakalamak için.</li>
<li>Intel'de NVRAM'ı sıfırlayın; herhangi bir Tahoe noktası sürümünü yükleyin.</li>
<li>Hala kulaklıkla ölü müsün? Apple Diagnostics'i çalıştırın ve Apple'ı arayın.</li>
</ul>

<p>Hoparlörleriniz normale döndüğünde, uygulama başına ses yüksekliğiyle uğraşmak günlük bir sıkıntıysa, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS karıştırıcının her zaman eksik olduğunu ekliyor — 14,99 €, tek seferlik, korumalı alana alınmış, sürücüsüz.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods Mac Cihazınızda Yarı Ses Düzeyinde mi Takıldınız? İşte Düzeltme",
    description: "AirPods'nun Mac cihazınıza neden yarı ses seviyesinde bağlandığının (genellikle eller serbest mikrofon profiline Bluetooth codec anahtarı) artı onarım düzeltmeleri ve seviye yedeklemesinin tamamen nasıl artırılacağı.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>AirPods, Mac'da genellikle yarı yarıya düşer çünkü macOS bunları yüksek kaliteli A2DP ses profilinden, telefon görüşmesi mikrofonu kullanımı için tasarlanmış düşük kaliteli eller serbest (HFP) profiline geçirdi. Bu mod çıktıyı ve kaliteyi sınırlar. Mac'yu yalnızca kulaklık sesine geri döndürerek sorunu düzeltin, ardından bu sesi orada tutmak için seviyeyi artırın.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Mac Cihazınızda Yarı Ses Düzeyinde mi Takıldınız? İşte Düzeltme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Bu neden oluyor: codec anahtarı</h2>

<p>AirPods gibi Bluetooth ses cihazları iki moddan birinde çalışır. Sadece dinlerken, macOS A2DP'yi kullanır; tam stereo, tam ses yüksekliği, temiz kalite. Ancak bir uygulama mikrofonunuzu istediği anda macOS tüm bağlantıyı HFP'ye (Eller Serbest Profili) geçirir. HFP iki yönlü bir telefon codec bileşenidir. Müzik için değil sesli aramalar için tasarlandığından ince, tekdüze ve fark edilir derecede daha sessiz geliyor.</p>

<p>Sorun, macOS'nun, mikrofonu alan uygulama tamamlandıktan sonra bile genellikle HFP'de takılı kalması veya Zoom, FaceTime, Teams, Discord veya mikrofon iznine sahip bir tarayıcı sekmesini açtığınızda uygulamaya geçmesidir. Yani AirPods'nuz, ses düzeyi kaydırıcısının hareket etmesinden değil, tüm ses profilinin altınızda düşürülmesinden dolayı "yarı ses seviyesinde" gibi ses çıkarır.</p>

<p>Bunu fark edeceksiniz: ses aniden sessizleşiyor ve boğuklaşıyor, AirPods ses ayarlarınızda iki kez görünüyor (bir kez çıkış olarak, bir kez mikrofon olarak) ve sistem sesini sonuna kadar açmak pek işe yaramıyor.</p>

<h2>Yeniden eşleştirme ve codec bileşeni geçici çözümleri</h2>

<p>Bunlar dürüst ilk adımlardır. Bunları sırayla çalışın; ilklerden biri genellikle sorunu çözer.</p>

<ul>
<li><strong>Giriş cihazınızı değiştirin.</strong> Sistem Ayarları → Ses → Giriş'i açın ve AirPods yerine Mac cihazınızın yerleşik mikrofonunu seçin. Bu, macOS'nun AirPods'yu HFP modunda tutmasını durdurur, böylece çıktı tam A2DP kalitesine geri dönebilir. Bu en etkili tek çözümdür.</li>
<li><strong>Bluetooth'yu kapatıp açın.</strong> Bağlantının hızlı bir şekilde sıfırlanması, özellikle AirPods'nun bir çağrı bittikten sonra takılıp kalması durumunda, genellikle A2DP'yi temiz bir şekilde yeniden müzakere eder.</li>
<li><strong>AirPods'yu yeniden bağlayın.</strong> Kasayı kapatın, birkaç saniye bekleyin, Mac yakınında yeniden açın ve bunları çıkış cihazı olarak yeniden seçin.</li>
<li><strong>Mikrofonu alan uygulamadan çıkın.</strong> Zoom, Teams, Discord veya tarayıcı sekmesinden tamamen çıkın. Bazı uygulamalar mikrofon oturumunu arka planda açık tutar ve HFP'yi mikrofon bitene kadar sabitler.</li>
<li><strong>Sıfırdan yeniden eşleştirin.</strong> Sistem Ayarları → Bluetooth altından AirPods'yu kaldırın (bilgi düğmesine tıklayın → Bu Cihazı Unutun), ardından tekrar eşleştirin. Bu, tek başına geçiş yapmanın çözemeyeceği bozuk bir profil anlaşmasını temizler.</li>
<li><strong>AirPods'yu sıfırlayın.</strong> Kasa kapağı açıkken, ışık önce sarı, sonra beyaz renkte yanıp sönene kadar arkadaki kurulum düğmesini basılı tutun. Daha sonra yeniden eşleştirin. Bu, ürün yazılımı düzeyindeki tuhaflık için nükleer seçenektir.</li>
<li><strong>macOS ve AirPods ürün yazılımını güncelleyin.</strong> Apple, nokta sürümlerinde Bluetooth ses düzeltmelerini gönderdi. AirPods cihaz yazılımı, bağlı bir cihazın yanında şarj olurken sessizce güncellenir; bu nedenle onları gece boyunca Mac cihazınızın yanındaki kutuda bırakın.</li>
</ul>

<blockquote><p>İzlenecek model: Bir çağrıya katıldığınız anda ses düzeyi düşüyorsa ve çağrı sona erdiğinde normale dönüyorsa, bunun nedeni HFP anahtarıdır; bozuk bir hoparlör veya ayar hatası değildir.</p></blockquote>

<h2>Düzeltmeler neden her zaman kalıcı olmuyor?</h2>

<p>İşte sinir bozucu kısım. Yeniden eşleştirmeden sonra bile macOS, herhangi bir uygulamanın mikrofona bir sonraki dokunuşunda AirPods'nuzu mutlu bir şekilde sessiz eller serbest moduna geri döndürecektir. Bu davranışı sistem ayarlarında kalıcı olarak devre dışı bırakamazsınız; Apple bunu otomatik olarak değerlendirir. Böylece, giriş cihazı numarasını günde birkaç kez yeniden yapmak zorunda kalırsınız ve AirPods'nuz bir çağrıdayken veya mikrofona aç bir uygulamadayken, yine bu düşük seviyede sınırlanırlar.</p>

<p>İnsanların bununla bağdaştırdığı ikinci, ayrı bir sorun daha var: Bazı uygulamalar maksimum sistem ses seviyesinde diğerlerinden daha sessizdir. Bir podcast oynatıcı veya tarayıcı sekmesi, AirPods temiz A2DP çalıştırırken bile kulaklarınızın istediğinin oldukça altında durabilir. macOS size her şey için tek bir ses düzeyi kaydırıcısı sunar ve uygulama başına kontrol yoktur, dolayısıyla tek bir sessiz uygulamayı yedeklemenin yerel bir yolu yoktur.</p>

<h2>Seviye yedeklemesini artırın ve orada tutun</h2>

<p>Uygulama başına ses karıştırıcının yerini kazandığı yer burasıdır. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS için çalışan her uygulamaya %100'ün üzerinde bir yükseltme de dahil olmak üzere kendi bağımsız ses düzeyi kaydırıcısını sağlayan bir menü çubuğu uygulamasıdır. Dolayısıyla, AirPods cihazınız bir çağrıdan daha düşük bir etkili düzeyde geri döndüğünde veya belirli bir uygulama çok sessiz olduğunda, o uygulamayı normal tavanın ötesine sürüklersiniz ve orada kalır.</p>

<p>Somut olarak bu şu anlama gelir:</p>

<ul>
<li><strong>Uygulama başına ses artırımı.</strong> Sessiz bir uygulamayı "tam" sistem ses seviyesinde duymak için zorlamak yerine standart maksimumun üzerine itin.</li>
<li><strong>Hacim profilleri.</strong> Bir dizi seviyeyi (güçlendirilmiş tarayıcı, daha yumuşak müzik, yüksek sesli görüntülü aramalar) kaydedin ve tüm düzenlemeyi tek tıklamayla değiştirin, böylece her yeniden bağlantıdan sonra yeniden ayarlamanıza gerek kalmaz.</li>
<li><strong>Hızlı çıkış değiştirme.</strong> Sistem Ayarlarına girmeden menü çubuğundan AirPods, dizüstü bilgisayar hoparlörleri ve harici DAC arasında geçiş yapın; bu, yeni bir profil görüşmesini zorladığınızda size yardımcı olur.</li>
<li><strong>Uygulama başına sessize alma ve otomatik kapatma.</strong> Geri kalanına dokunmadan bir uygulamayı sessize alın ve daha önemli bir şey oynatıldığında medyanın otomatik olarak azalmasına izin verin.</li>
</ul>

<p>Bunun ne yapıp ne yapmadığını açık bir şekilde belirtmekte fayda var. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS'yu A2DP'de kalmaya zorlamayacaktır — yukarıdaki giriş cihazı hilesi hala codec bileşeni için sizin aracınızdır. Yaptığı şey, uygulama başına sürüm düşürmenin çaldığı ses yüksekliğini geri vermektir, böylece sessiz bir AirPods oturumu veya inatla yumuşak bir uygulama, kaybedilen bir neden yerine tek sürüklemeyle çözüm olur. Korumalı alana alınmış bir Mac App Store uygulaması olduğu için yüklenecek ses sürücüsü yok, DMG yok, çekirdek uzantısı yok; sadece çalışıyor.</p>

<h2>Kısa versiyon</h2>

<p>AirPods'nuzun sesi Mac'nuzda sessiz ve boğuk geliyorsa, giriş cihazınızı AirPods'yu kapatın ve onları eller serbest modundan çıkmaya zorlayın ve bu başarısız olursa yeniden eşleştirin. Seviye hala istediğiniz yere ulaşamıyorsa veya tek bir uygulama çok yumuşaksa, uygulama başına yükseltmeye ulaşın, böylece bunu bir kez ayarlayıp devam edersiniz.</p>

<p>Her çağrı aldığınızda ses düzeyi kaydırıcısıyla uğraşmaktan bıktınız mı? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> — tek seferlik 14,99 €, abonelik yok, sürücü yok — ve her uygulamaya kendi hacmini verin.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac Birimi Tahoe'da Kendini Sıfırlamaya Devam Ediyor mu? İyilik İçin Nasıl Kilitlenir",
    description: "macOS Tahoe'dan bu yana birçok Mac ses düzeyini kendiliğinden değiştiriyor veya sıfırlıyor. İşte bunun nedeni, yerleşik nedenlerin nasıl durdurulacağı ve uygulama başına sabit bir birimin sabit kalması için nasıl kilitleneceği.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Mac ses düzeyiniz macOS Tahoe'dan bu yana kendini sıfırlamaya devam ediyorsa çözüm, otomatik ayarlayıcıları ortadan kaldırmaktır: ses kısmayı devre dışı bırakın ve "Başlangıçta ses çal", ses ayarlarını sıfırlayın ve herhangi bir Bluetooth çıkışını temiz bir şekilde yeniden bağlayın. Atlayan uygulama başına seviyeler için, bir mikser ile uygulama başına sabit bir ses seviyesini kilitleyin, böylece bir daha asla kaymaz.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Birimi Tahoe&#x27;da Kendini Sıfırlamaya Devam Ediyor mu? İyilik İçin Nasıl Kilitlenir" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tahoe'dan sonra ses düzeyiniz neden kendi kendine değişiyor?</h2>

<p>Siz dokunmadan hareket eden bir birim, bir donanım arızası gibi hissettirir, ancak seviyenizi sizin yerinize belirleyen neredeyse her zaman yazılımdır. macOS'nun çıkışı sessizce iten veya sıfırlayan çeşitli otomatik davranışları vardır ve Tahoe'nun ses yığını değişiklikleri bunlardan birkaçını daha belirgin hale getirmiştir. Uygulamanın veya Mac'nun bozuk olduğunu varsaymadan önce, kaydırıcıyı tam olarak hangi sistemin kullandığını bilmek yardımcı olur.</p>

<ul>
<li><strong>Sesin kısılması:</strong> macOS, daha önemli bir şeyin çalındığını düşündüğünde (Siri, erişilebilirlik duyuruları, bildirimler) diğer sesleri azaltır. Tetikleyici sona erdikten sonra seviye bazen tamamen geri gelmez.</li>
<li><strong>Bluetooth el sıkışma sıfırlanır:</strong> AirPods ve diğer Bluetooth cihazları, bağlantı sırasında ses düzeyini yeniden belirler. Oturumun ortasında yeniden bağlanmak, çıkışı varsayılana veya çok daha yüksek/daha sessiz bir düzeye getirebilir.</li>
<li><strong>Çıkış cihazı değiştirme:</strong> Kulaklıkları çıkardığınızda, dock'a bağladığınızda veya monitörün hoparlörlerine geçiş yaptığınızda her çıkış kendi ses düzeyini hatırlar. İleri geri geçiş "rastgele" sıfırlamalara benziyor.</li>
<li><strong>Uygulama başına varsayılanlar:</strong> Bazı uygulamalar (tarayıcılar, video oynatıcılar, konferans araçları), başlangıçta veya yeni bir akış başladığında, sahip olduğunuz her şeyi geçersiz kılarak kendi kazançlarını belirler.</li>
<li><strong>Başlangıç sesi ve oturum açma durumu:</strong> Önyükleme sesi ve oturum açma, sistem ses düzeyini seçmediğiniz varsayılan düzeye geri itebilir.</li>
</ul>

<h2>Önce yerleşik nedenleri düzeltin</h2>

<p>Bunları sırasıyla çalışın. Çoğu "kendini sıfırlar" şikayeti, eğilip Bluetooth göz ardı edildiğinde ortadan kalkar.</p>

<ul>
<li><strong>Başlangıç sesini kapatın.</strong> Sistem Ayarları → Ses → işareti kaldırın <em>Başlangıçta ses çal</em>. Bu, önyükleme sesinin temel seviyenizi sıfırlamasını durdurur.</li>
<li><strong>Eğilme tetikleyicilerini azaltın veya devre dışı bırakın.</strong> Sistem Ayarları → Erişilebilirlik → Sözlü İçerik ve Siri'de ihtiyacınız olmayan sesli duyuruları kapatın. Daha az tetikleyici, macOS'nun sesi düşürdüğü ve geri yüklemeyi unuttuğu anların daha az olduğu anlamına gelir.</li>
<li><strong>Sorunlu Bluetooth cihazlarını yeniden eşleştirin.</strong> AirPods veya kulaklıkları Bluetooth ayarlarından çıkarın ve yeniden eşleştirin. Eski bir profil, bağlantı sırasında birimin kapanmasının yaygın bir nedenidir.</li>
<li><strong>Her çıkış cihazını bilinçli olarak ayarlayın.</strong> Kullandığınız her çıkışı (dahili, monitör, kulaklık) bağlayın ve ses seviyesini bir kez ayarlayın. macOS ses seviyesini cihaz başına saklar, böylece hepsini ayarlamak geçiş yaptığınızda ortaya çıkan sürprizi ortadan kaldırır.</li>
<li><strong>Sıkışmışsa Core Audio'yu sıfırlayın.</strong> Terminal'yu açın ve çalıştırın <code>sudo killall coreaudiod</code>. Bu, ses arka plan programını yeniden başlatmadan yeniden başlatır ve düzensiz düzeylere neden olabilecek askıda kalma durumunu temizler.</li>
<li><strong>Güncelleyin, ardından yeniden başlatın.</strong> Erken Tahoe noktası, gönderilen ses düzeltmelerini yayınladı. En son sürümde olduğunuzdan emin olun ve güncellemeden sonra bir kez yeniden başlatın.</li>
</ul>

<p>Sıfırlamalar durursa suçlunuz yukarıdakilerden biri olabilir. Eğer senin <em>sistem</em> ses düzeyi sabit ancak bireysel uygulamalar her şeyden daha yüksek veya daha sessiz olmaya devam ediyor; yerleşik kontrollerin yapabileceklerinin sınırına ulaştınız.</p>

<h2>Gerçek boşluk: macOS uygulama başına ses seviyesini kilitleyemiyor</h2>

<p>İşte sinir bozucu kısım. Windows'nun yıllardır uygulama başına ses karıştırıcısı var; onu açarsınız, bir uygulamanın kaydırıcısını sürüklersiniz ve o orada kalır. macOS hiçbir zaman bir tane göndermedi. Tam olarak tek bir sistem ses düzeyi kaydırıcısı vardır ve her uygulama bunun için kavga eder. Dolayısıyla, bir tarayıcı sekmesi otomatik oynatılan bir reklamı patlattığında veya bir video görüşmesi müziğinizin iki katı ses seviyesinde geldiğinde, tek seçeneğiniz ana ses seviyesini manuel olarak ayarlamaktır; bu, kaçmaya çalıştığınız "bu neden sürekli değişiyor" döngüsüdür.</p>

<blockquote>Sistem kaydırıcısı tek bir paylaşılan aramadır. Uygulama başına bir karıştırıcı olmadan, macOS stokunda "ayarla ve unut" imkansızdır - bir şey her zaman sizi geçersiz kılacaktır.</blockquote>

<h2>SoundDial ile uygulama başına sabit bir birimi kilitleyin</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> uygulama başına karıştırıcı macOS'nun eksik olduğunu ekler. Menü çubuğunuzda bulunur ve çalışan her uygulamaya, ana programdan bağımsız olarak kendi ses kaydırıcısını verir. Her uygulama için belirlediğiniz seviyeyi hatırladığı için "kendini sıfırlama" sorununu doğrudan çözer: Bir kez karar verirsiniz ve o uygulama her seferinde o ses seviyesinde açılır.</p>

<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi:</strong> Ana kaydırıcı hokkabazlığı olmadan aynı anda müziği %40'ta ve görüntülü aramayı %80'de tutun.</li>
<li><strong>Uygulama başına sessize alma ve güçlendirme:</strong> gürültülü bir uygulamayı anında susturun veya çok sessiz bir uygulamayı kendi sesi zayıf olduğunda %100'ün üzerine itin.</li>
<li><strong>Hacim profilleri:</strong> "iş", "oyun" veya "odaklanma" ayarlarını kaydedin ve tek tıklamayla tüm karışımı değiştirin.</li>
<li><strong>Kendi şartlarınıza göre otomatik olarak eğilme:</strong> macOS karar vermek yerine, konuştuğunuzda veya seçilen bir uygulama etkin olduğunda arka plan uygulamalarını otomatik olarak düşürür.</li>
<li><strong>Hızlı çıkış değiştirme:</strong> Ayarlara dalmadan menü çubuğundan hoparlörler ve kulaklıklar arasında geçiş yapın ve sesi izleyin.</li>
</ul>

<p>Bu, Mac App Store'dan tek seferlik 14,99 € tutarında bir satın almadır; abonelik yok, sürücü yok, DMG yok ve çekirdek uzantısı yok. Tamamen korumalı alan olduğundan ve App Store dağıtımına sahip olduğundan, Tahoe'nun bir sonraki güncellemede engelleyebileceği eski bir ses kext'i yüklemiyorsunuz. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> desteklenen API'leri kullanarak seviyelerinizi ayarlar, böylece hatırlanan birimleriniz güncellemelerden ve yeniden başlatmalardan etkilenmez.</p>

<h2>Aslında hangi yaklaşıma ihtiyacınız var?</h2>

<p>Tüm sisteminizin ses seviyesi yükselirse, yukarıdaki yerleşik düzeltmelerle başlayın; çoğu durumda ses kısma, Bluetooth ve başlangıç sesi hesabı. Bunun yerine sorun bir uygulamanın her zaman tuhaf olmasıysa veya ana kaydırıcının ödün vermesinden bıktıysanız, uygulama başına bir karıştırıcı tek gerçek cevaptır. macOS bir tane eklemeyecektir, bu nedenle menü çubuğu aracı, gerçekten koyduğunuz yerde kalan bir karışıma giden pratik yoldur.</p>

<p>Tahoe'daki ses kaydırıcısını takip etmekten bıktınız mı? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> ve her uygulama için hatırlanan bir birimi kilitleyin - tek seferlik 14,99 €, abonelik yok, sürücü yok.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "DAW Monitörünüzün Sesini Mac Üzerindeki Sistem Sesinden Ayrı Olarak Kontrol Edin",
    description: "macOS'da yerleşik uygulama başına ses karıştırıcısı yoktur, dolayısıyla DAW'nuz ve sistem sesleriniz aynı düzeyi paylaşır. Logic, Ableton veya GarageBand monitör ses düzeyini tarayıcınızdan ve bildirimlerinizden bağımsız olarak nasıl kontrol edebileceğiniz aşağıda açıklanmıştır.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>macOS'da yerleşik uygulama başına ses karıştırıcısı bulunmadığından DAW cihazınız ve diğer her şey tek bir sistem kaydırıcısını paylaşır. Monitör seviyenizi tarayıcılardan, Slack'dan ve bildirimlerden bağımsız olarak ayarlamak için uygulama başına ses kontrolüne ihtiyacınız vardır. Gibi bir menü çubuğu karıştırıcısı <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Logic, Ableton ve GarageBand'ya sistem sesinden ayrı olarak kendi ses seviyelerini verir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — DAW Monitörünüzün Sesini Mac Üzerindeki Sistem Sesinden Ayrı Olarak Kontrol Edin" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden bir ses kaydırıcısı izlemenizi mahvediyor?</h2>

<p>Üretim yaparken DAW'nuz ses çıkaran birçok şeyden yalnızca biridir. Bir tarayıcı sekmesinde bir referans parçası oynatılır. Slack ping'leri geliyor. YouTube öğreticisi ikinci bir monitörde çalışır. Windows'daki Ses Düzeyi Mikseri tüm bunları bağımsız olarak dengelemenizi sağlar. macOS'da Apple asla eşdeğerini göndermedi; ses tuşları ve menü çubuğu kaydırıcısı hareket ediyor <em>her şey</em> hemen.</p>

<p>Bu, kulakla karıştırma yapan herkes için gerçek bir sorun yaratır. Logic'da rahat bir izleme seviyesi ararsınız, ardından aynı seviyede bir bildirim gelir ve kulaklarınızı patlatır. Veya gürültülü bir geçiş sırasında işitme duyunuzu korumak için sistemi kapatırsınız ve artık referans parçanız karşılaştırılamayacak kadar sessiz olur. İzleme referansınız artık stabil değil ve stabil referans, karıştırmanın tüm amacıdır.</p>

<blockquote>Tutarlı bir düzeyde izleme, mikslerinizi ölçülebilir şekilde geliştiren birkaç alışkanlıktan biridir. Sistem sesleri sizi ana kaydırıcıyı hareket ettirmeye zorluyorsa bu tutarlılığı kaybedersiniz.</blockquote>

<h2>"Ayrı DAW birimi" aslında ne anlama geliyor?</h2>

<p>Burada yapımcıların birleştirdiği iki farklı şey var ve bunları ayırmakta fayda var:</p>

<ul>
<li><strong>Arayüz / ana çıkış seviyesi</strong> — ses arayüzünüzdeki veya monitör denetleyicinizdeki donanım düğmesi. Bu, mutlak dinleme ses sesinizi ayarlar ve kalibre edildikten sonra aynı konumda kalmalıdır.</li>
<li><strong>Uygulama başına yazılım hacmi</strong> — her uygulamanın ne kadar gürültülü olduğu <em>önce</em> bu çıktıya ulaşır. macOS'da eksik olan şey budur. Chrome, Müzik veya bildirim seslerini altındaki yatak seviyesine indirirken DAW'yu birlik içinde tutmanıza olanak tanır.</li>
</ul>

<p>İkincisini istiyorsun. Amaç, DAW cihazınızın sesini kısmak değil, onunla ilgili diğer her şeyi kısmaktır, böylece DAW en gürültülü, en tutarlı kaynağınız olarak kalır ve dikkat dağıtıcı şeyler arka planda sessizce durur.</p>

<h2>Uygulama başına karıştırıcıyla nasıl yapılır</h2>

<p>Bir menü çubuğu karıştırıcısı gibi <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> o anda ses çalan tüm uygulamaları listeler ve her birine kendi kaydırıcısını verir. Bir yapımcının iş akışı şuna benzer:</p>

<ul>
<li><strong>Arayüzünüzü bir kez kalibre edin.</strong> Ses arayüzünüzü veya monitör denetleyicinizi rahat, tekrarlanabilir bir referans seviyesine ayarlayın ve öyle bırakın. Bu sizin sabit çapanızdır.</li>
<li><strong>DAW'nuzu %100'e ayarlayın.</strong> Karıştırıcıda, Logic, Ableton veya GarageBand'yu tam yazılım biriminde bırakın, böylece birlik içinde geçsin. DAW'nuzun kendi ana fader'ı ince miksajı hâlâ yapıyor.</li>
<li><strong>Diğer her şeyi aşağı çekin.</strong> Chrome, Safari, Müzik ve Slack'yu daha düşük bir seviyeye (örneğin %40-60) düşürün, böylece referans parçalar ve mesajlar mix'inizle rekabet etmek yerine onun altında yer alır.</li>
<li><strong>Gürültülü şeyleri susturun.</strong> Uygulama başına sessize alma, izleme zincirinize dokunmadan bir tarayıcıyı veya sohbet uygulamasını tamamen susturmanıza olanak tanır. Tek bir tıklamayla DAW'nuz dokunulmadan oynamaya devam eder.</li>
</ul>

<p>DAW'nun kaydırıcısı hiçbir zaman hareket etmediği için izleme referansınız tüm oturum boyunca sağlam kalır. Hızlı bir A/B için bir referans parçasını açabilir, ardından sesini kapatabilirsiniz ve miks seviyeniz bir desibel bile değişmemiştir.</p>

<h2>Başkalarını geri çevirmek yerine sessiz bir uygulamayı öne çıkarmak</h2>

<p>Bazen sorun diğer tarafa da işliyor. Kaba bir demo geri dönüşü, sesli not veya sessiz bir referans, oturum seviyenizin çok altında oynatılır. Arayüzünüzü duyacak şekilde açmak, diğer her şeyin artık çok yüksek olduğu anlamına gelir. Uygulama başına <strong>ses artırma</strong> kalibre edilmiş çıktınıza dokunmadan tek bir sessiz uygulamayı %100'ün üzerine çıkarmanıza olanak tanır, böylece çalışma seviyenize uyum sağlar. Bu, Windows'nun mikserinin hiç sahip olmadığı bir parçadır ve DAW'nuzun dışından malzeme seçerken en kullanışlı araçlardan biridir.</p>

<h2>Farklı oturum türleri için profiller</h2>

<p>İdeal dengeniz her görev için aynı değildir. İzleme, miksaj ve gündelik dinlemenin her biri farklı uygulama düzeyleri karışımı gerektirir. Birim profilleri bir kurulumu kaydetmenize ve anında geri çağırmanıza olanak tanır:</p>

<ul>
<li><strong>Karıştırma:</strong> DAW %100'de, tarayıcı ve Müzik düşük, sohbet sessize alındı.</li>
<li><strong>Referans dinleme:</strong> Müzik veya akış uygulaması yukarı, DAW aşağı.</li>
<li><strong>Aramalar / işbirliği:</strong> konferans uygulaması açıldı, DAW aramaya karışmaması için geri çekildi.</li>
</ul>

<p>Profilleri değiştirmek, her vites değiştirdiğinizde beş kaydırıcıyı elle ayarlamaktan daha iyidir.</p>

<h2>Otomatik eğilme ve hızlı çıkış değiştirme</h2>

<p>Bir stüdyoda iki şey daha önemlidir. <strong>Otomatik eğilme</strong> Öncelikli bir kaynak konuştuğunda veya oynatıldığında arka plan uygulamalarını otomatik olarak kapatabilir, böylece bir çağrı veya önemli bir ses her zaman kesilir. Ve <strong>hızlı çıkış değiştirme</strong> Menü çubuğundan, Sistem Ayarlarına girmeden arayüzünüz, monitörleriniz ve kulaklıklarınız arasında geçiş yapmanızı sağlar; bu, farklı sistemlerde bir karışımı kontrol ederken sürekli bir görevdir.</p>

<h2>Neden sanal bir ses sürücüsü olmasın?</h2>

<p>Bazı yönlendirme araçları, çekirdek düzeyinde bir sanal ses sürücüsü yükleyerek bu sorunu çözer. Bunlar güçlü ama ağırdır: macOS güncellemelerinden sonra bozulabilir, gecikmeye neden olabilir ve derin sistem izinleri gerektirebilirler. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> korumalı alana alınır ve Mac App Store üzerinden gönderilir; sürücü yok, DMG yok, toplu cihaz kurulumu yok. Özellikle uygulama başına seviye kontrolü için bu, ses yönlendirmenizi yeniden tasarlamaktan çok daha basit bir yoldur.</p>

<p>Her şey yerinde kalırken izleme seviyenizi sabit tutmaya hazır mısınız? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> tek seferlik 14,99 € karşılığında DAW cihazınıza kendi hacmini kazandırın.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Mac'da Uygulama Başına Hacim için Daha Basit Bir Audio Hijack Alternatifi",
    description: "macOS'da yalnızca uygulama başına bağımsız ses seviyesi istiyorsanız, Audio Hijack aşırıya kaçıyor. İşte, ses yönlendirmesi olmadan uygulama başına ses seviyesini yükselten, sessize alan ve artıran daha hafif, daha ucuz bir menü çubuğu alternatifi.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>İstediğiniz tek şey macOS'da uygulama başına bağımsız ses düzeyi ise, Audio Hijack ihtiyacınız olandan daha fazla araçtır. Yakalama, efektler ve oturum grafikleri için oluşturulmuş profesyonel bir ses yönlendirme ve kayıt paketidir (yaklaşık 79 $). Basitçe bir uygulamayı kapatıp diğerini açmak için, aşağıdaki gibi hafif bir menü çubuğu karıştırıcısı kullanılabilir: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> daha hızlıdır, daha ucuzdur ve her zaman hazırdır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Uygulama Başına Hacim için Daha Basit Bir Audio Hijack Alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>İnsanlar neden ilk etapta Audio Hijack'ya ulaşıyor?</h2>

<p>macOS'da yerleşik uygulama başına ses karıştırıcısı yoktur. Windows'nun Ses Düzeyi Karıştırıcısında yıllardır bir tane bulunur, ancak Mac'da ses düzeyi tuşları ve menü çubuğu kaydırıcısı yalnızca tek bir şeyi hareket ettirir: sistem yöneticisini. Birinci tarafça "Spotify'yu %40'ta tut ama video görüşmemi %100'de bırak" demenin bir yolu yok.</p>

<p>Böylece insanlar bir geçici çözüm arıyor ve Audio Hijack'ya ulaşıyor. o <em>yapabilir</em> uygulama başına ses düzeyi sağlar, çünkü herhangi bir uygulamadan gelen sesi yakalayabilir ve işleyebilir. Ancak bu yetenek, gerçekte tasarlanma amacının bir yan etkisidir: uygulamalardan ve donanımlardan ses kaydetmek, efektleri zincirlemek, sanal cihazlar arasında yönlendirme ve yeniden kullanılabilir oturum hatları oluşturmak. Bu konuda gerçekten mükemmel. Bu sadece hafif bir soruya ağır bir cevap.</p>

<h2>Audio Hijack'nun aşırıya kaçtığı yer</h2>

<p>Yalnızca ses kaydırıcısı isteyen insanları birkaç şey hayal kırıklığına uğratıyor:</p>

<ul>
<li><strong>Fiyat.</strong> Audio Hijack 79 dolar civarında bulunuyor. Bu, bir uygulamadaki kayıt stüdyosu için adil bir durumdur; bir tarayıcı sekmesini kapatmak için çok fazla.</li>
<li><strong>Çalışmaya devam etmesi gerekiyor.</strong> Uygulama başına işleme yalnızca uygulama açıkken ve ilgili oturum etkinken çalışır. Bırakın ve hacimleriniz eski durumuna dönecektir. Sadece bir kaydırıcıyı yerinde tutmak için tam ses iş istasyonunu yerleşik olarak tutuyorsunuz.</li>
<li><strong>Oturum bazlı düşünme.</strong> Bloklar ve bağlantılarla oturumlar oluşturursunuz. Yakalama için güçlüdür, ancak hedefiniz "bu uygulama daha sessiz, şu uygulama daha yüksek" olduğunda bu çok fazla kavramsal yük anlamına gelir.</li>
<li><strong>Arayüz derin.</strong> Efektler, yönlendirme, ölçümler, blok kablolama; hiçbir şey kaydetmezseniz çoğunlukla göz ardı edeceğiniz zengin bir yüzey alanı.</li>
</ul>

<blockquote>Temel kural: Eğer istersen <em>kayıt veya rota</em> ses, Audio Hijack fiyatını kazanıyor. Eğer sadece istersen <em>denge</em> uygulamalar arasında ses, bir düğmeye ihtiyaç duyduğunuzda bir atölye çalışması için para ödüyorsunuz.</blockquote>

<h2>Daha basit bir alternatif: menü çubuğu ses karıştırıcısı</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> çoğu insanın aslında uğruna geldiği tek işi alıyor ve yalnızca bunu yapıyor. Menü çubuğunuzda yaşıyor. Simgeye tıkladığınızda, o anda ses çalan her uygulamanın, her biri kendi kaydırıcısına sahip, canlı bir listesini alırsınız. Spotify'yu %30'a sürükleyin, çağrınızı %100'de bırakın, Slack'yu tamamen sessize alın — bitti, oluşturulacak oturum yok.</p>

<p>Neleri kapsar:</p>

<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — her ses kaynağının gerçek zamanlı olarak ayarlanabilen kendi kaydırıcısı vardır.</li>
<li><strong>Uygulama başına sessize alma</strong> — Gürültülü bir uygulamayı başka hiçbir şeye dokunmadan tek tıklamayla susturun.</li>
<li><strong>Uygulama başına ses artırma</strong> — sessiz bir uygulamaya basın <em>yukarıda</em> Kendi maksimum değeri hala çok yumuşak olduğunda %100. Bu, sistem kaydırıcısının asla yapamayacağı parçadır.</li>
<li><strong>Hacim profilleri</strong> — tüm karışımı kaydedin (müzik kısık, çağrılar yüksek, bildirimler sessiz) ve belirli bir bağlam için tek tıklamayla geri çağırın.</li>
<li><strong>Otomatik eğilme</strong> — daha önemli bir şey başladığında arka plan sesini otomatik olarak kısın, böylece bir arama veya video oynatma listenizin altına gömülmez.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden kulaklıklar, hoparlörler ve diğer çıkışlar arasında geçiş yapın.</li>
</ul>

<h2>Pratik: Bir dakikadan kısa sürede uygulama başına kontrole sahip olmak</h2>

<p>Kurulum farkı bütün mesele. Bir yönlendirme aracıyla bir oturum oluşturabilir, bir kaynak bloğu ekleyebilir, kablo bağlantılarını yapabilir ve uygulamayı çalışır durumda tutabilirsiniz. İşte esasen:</p>

<ul>
<li>Yükle <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store'dan.</li>
<li>Listede görünmeleri için birkaç uygulamada ses çalın.</li>
<li>Menü çubuğu simgesini tıklayın ve her uygulamanın kaydırıcısını zevkinize göre sürükleyin.</li>
<li>İsteğe bağlı olarak bu karışımı bir profil olarak kaydedin veya çok sessiz bir uygulamayı %100'ün üzerine çıkarın.</li>
</ul>

<p>Mac App Store aracılığıyla dağıtıldığı için korumalı alana alınır ve herhangi bir normal uygulama gibi yüklenir; hayır <code>.dmg</code> sürüklenecek, çekirdek uzantısı yok, Güvenlik ayarlarında onaylanacak ses sürücüsü yok ve macOS güncellemesinden sonra yeniden onaylanması gereken hiçbir şey yok. Bu son nokta önemlidir: sürücü tabanlı karıştırıcılar geçmişte işletim sistemi yükseltmelerinde kesintiye uğrar ve sistem düzeyinde bir bileşenin yeniden yüklenmesini gerektirir. Korumalı alana alınmış bir App Store uygulaması, tüm bu bakım kategorisinin önüne geçer.</p>

<h2>Hangisini seçmelisiniz?</h2>

<p>İş konusunda dürüst olun. Seç <strong>Audio Hijack</strong> uygulama veya donanım sesini kaydetmeniz, gerçek zamanlı efektler uygulamanız veya sanal cihazlar arasında yönlendirme grafikleri oluşturmanız gerekiyorsa. Burası onun evi ve oradaki her dolara değer.</p>

<p>Gerçek ihtiyacınız "her uygulamanın sesini bağımsız olarak ayarlamama izin verin" ise özel bir menü çubuğu karıştırıcısı seçin. ~79$ yerine bir kez 14,99€ harcayacak, oturum oluşturmayı atlayacak ve menü çubuğundan açtığınız bir panelde güçlendirme, sessize alma, profiller ve eğilme avantajlarından yararlanacaksınız. Asla dokunmayacağınız kayıt özelliği yok, kaydırıcıyı yerinde tutmak için arka planda çalışan iş istasyonu yok.</p>

<p>Ses seviyesi dengeleme için Audio Hijack'yu deneyen çoğu kişi, büyük bir araçla küçük bir sorunu çözüyordu. Eğer bu sizseniz, küçük alet daha iyi uyuyor ve maliyeti de çok az.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> 14,99 € karşılığında, tek seferlik — doğrudan menü çubuğunuzdan uygulama başına ses seviyesi, artırma, sessize alma, profiller ve otomatik kısma.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D Alternatifi: Şişkinlik Olmadan Uygulama Başına Hacim (Mac)",
    description: "Boom 3D'yu esas olarak sesi artırmak için kullandıysanız ancak gerçekten uygulama başına ses seviyesi kontrolü istiyorsanız, SoundDial daha zayıf Mac alternatifidir: uygulama başına bağımsız ses seviyesi, uygulama başına sessize alma ve yükseltme, tek seferlik fiyat, sistem genelinde EQ veya sürücü yok.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>Sesi artırmak için Boom 3D'ya ulaştıysanız ancak aslında her uygulamayı ayrı ayrı kontrol etmek istiyorsanız, farklı bir araç istiyorsunuz demektir. Boom 3D, sistem çapında bir ses yükseltici ve EQ'dur. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> uygulama başına odaklanmış bir ses karıştırıcısıdır: her uygulama için bağımsız ses seviyesi, sessize alma ve yükseltme, tek seferlik 14,99 €, EQ yok, sürücü yok.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D Alternatif: Şişkinlik Olmadan Uygulama Başına Hacim (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Boom 3D gerçekte ne yapar (ve yapmaz)</h2>
<p>Boom 3D üç şey etrafında inşa edilmiştir: sistem çapında ses yükseltme, 31 bantlı ekolayzır ve 3D "surround" efektler. Bunları aşağıdakilere uygular: <em>her şey</em> Mac cihazınız aynı anda oynatılır. Amacınız daha yüksek sesli bir dizüstü bilgisayar veya genel olarak hoşunuza giden bir bas eğrisi ise bu gerçekten kullanışlıdır.</p>
<p>Boom 3D'nun tasarlanmadığı şey, uygulamaları bağımsız kanallar olarak ele almaktır. "Spotify %40'ta, video görüşmem %100'de ve bu tarayıcı sekmesi sessize alındı" demenin net bir yolu yok. Kaydırıcısı tüm karışımı hareket ettirir. Ve sinyal yoluna yerleştirilecek bir ses sürücüsü yüklediğinden, sisteminize korumalı alanlı bir yardımcı programdan daha düşük bir düzeyde dokunur. Aynı zamanda tek seferlik küçük bir araç yerine, yükseltme döngüleri olan ücretli bir ürün olarak da konumlandırılıyor.</p>
<blockquote><p>Ortak hikaye: İnsanlar sessiz bir uygulamanın sesini yükseltmek için Boom 3D'yu yüklüyorlar, sonra asıl sorunun macOS'nun uygulama başına ses karıştırıcısının olmaması olduğunu fark ediyorlar.</p></blockquote>

<h2>Boşluk: macOS'da ses karıştırıcısı yok</h2>
<p>Bu Windows'dan gelen insanları şaşırtıyor. Windows yıllardır uygulama başına bir Ses Düzeyi Karıştırıcısına sahiptir; hoparlöre sağ tıklayın, her uygulamanın düzeyini ayrı ayrı ayarlayın. macOS bunu göndermiyor. Bir ana birim ve her uygulamanın ortaya çıkardığı dahili kaydırıcıyı alırsınız. Slack'yu YouTube sekmesine ve bir oyuna karşı dengelemenin işletim sistemi düzeyinde bir yolu yoktur.</p>
<p>Bu nedenle, bir müzik uygulaması çağrınızı boğduğunda, tek yerel seçenekleriniz kabadır: ana sesi kısın (bu her şeyi susturur) veya bir ses kontrolüne sahip olduğunu umarak her uygulamanın kendi ayarlarını inceleyin. Boom 3D da bu boşluğu kapatmıyor; her uygulamanın değil, tüm karışımın sesini daha yüksek hale getiriyor.</p>

<h2>SoundDial'nun sığdığı yer</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> eksik karıştırıcıdır. Menü çubuğunuzda bulunur ve çalışan her uygulamaya kendi kaydırıcısıyla kendi satırını verir. Boom 3D'dan temel fark budur: tek bir küresel etki yerine kaynak başına kontrol elde edersiniz.</p>
<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — görüntülü görüşmeniz %100'de kalırken Spotify'yu %30'a ayarlayın.</li>
<li><strong>Uygulama başına sessize alma</strong> — Gürültülü bir uygulamayı başka hiçbir şeye dokunmadan anında susturun.</li>
<li><strong>Uygulama başına artış</strong> — Boom 3D'nun %100'den daha yüksek ses numarasını beğendiyseniz, SoundDial bunu koruyor ancak tüm sistem yerine tek bir uygulamayı hedefliyor. Sessiz uygulamalar kendi başlarına normal tavanlarını aşıyor.</li>
<li><strong>Hacim profilleri</strong> — bir mikser düzenini kaydedin (ör. "oyun", "toplantı", "müzik") ve kaydırıcıları her seferinde yeniden dengelemek yerine tek tıklamayla onu geri çağırın.</li>
<li><strong>Otomatik eğilme</strong> — önemli bir şey başladığında arka plan sesini otomatik olarak kısar, böylece bir çağrı veya oyun ipucu müziğin altına gizlenmez.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden kulaklıklar, hoparlörler ve diğer çıkışlar arasında geçiş yapın.</li>
</ul>
<p>SoundDial'nun kasıtlı olarak yapmadığı şey, Boom 3D özelliklerinin geri kalanının yayılmasıdır. 31 bantlı EQ yok, sahte surround işleme yok, sistem çapında efekt zinciri yok. Mastering düzeyinde bir EQ istiyorsanız Boom 3D veya özel bir ses paketi doğru seçimdir. Boom 3D'yu gerçekte açmaya devam ettiğiniz şey şu olsaydı: <em>hacim</em>, bu yüzey alanı taşımak için para ödediğiniz şişkinliktir.</p>

<h2>Sürücü olmadan güçlendirme</h2>
<p>"Arttırma" sorusu doğrudan bir cevabı hak ediyor çünkü Boom 3D kullanıcılarının genellikle alternatifler için alışveriş yapmasının nedeni budur. Boom 3D'nun desteği küresel ve sürücü tabanlıdır. SoundDial'nun desteği uygulama bazındadır ve Apple'ın uygulama korumalı alan modeli içinde çalışır; Mac App Store aracılığıyla dağıtılır, böylece ayrı bir yükleyici, çekirdek düzeyinde bir sürücü ve daha sonra kaldırılacak kalan sistem bileşenleri kalmaz. Tüm ses yolunuzun kontrolünü sürücüye bırakmadan "bu sessiz uygulamayı daha yüksek sesle yapın" sonucunu elde edersiniz.</p>

<h2>Fiyat: tek seferlik ve devam eden</h2>
<p>Boom 3D, kendi yükseltme ve lisanslama modeline sahip ücretli bir uygulamadır ve fiyatlandırma, platforma ve sürüme göre değişir. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 14,99 € tutarında tek seferlik bir satın almadır - bir kez satın alın, kullanmaya devam edin, abonelik yok ve mikserin çalışır durumda kalması için sürüm başına yeniden satın alma yok. Her gün menü çubuğunda açık bırakacağınız bir yardımcı program için sabit bir fiyat, yeniden satın almak zorunda kalacağınız bir üründen daha iyi eskime eğilimindedir.</p>

<h2>Hangisini seçmelisiniz?</h2>
<ul>
<li><strong>Boom 3D'yu seçin</strong> eğer gerçek ihtiyacınız ciddi bir ekolayzır ve sistem çapında ses efektleri ise ve karışımdaki ses sürücüsünün sizin için bir sakıncası yoksa.</li>
<li><strong>SoundDial'yu seçin</strong> Windows kullanıcılarının hafife aldığı şeyleri (uygulama başına gerçek bir ses karıştırıcısı) ve ayrıca hedeflenen yükseltmeyi, profilleri ve otomatik azaltmayı tek seferlik fiyatla ve hiçbir sürücü yüklemeden istiyorsanız.</li>
</ul>
<p>Boom 3D'dan çıkan çoğu insan ikinci gruba giriyor. Frekansları ayarlamak istemediler; tarayıcının aramadan daha sessiz olmasını istiyorlardı. SoundDial tam olarak bunun için tasarlandı.</p>

<p><strong>EQ şişmesi veya abonelik olmadan Mac cihazınızda uygulama başına ses kontrolü ister misiniz?</strong> <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> — Bir defalık 14,99 €, korumalı alanda, sürücü yok ve her uygulamanın kendi kaydırıcısı var.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Mac Cihazınızda Bir Uygulama Dışında Her Şeyin Sesini Nasıl Kapatabilirsiniz?",
    description: "macOS'nun uygulama başına ses karıştırıcısı yoktur, bu nedenle biri hariç her uygulamayı susturmak için bir yardımcı gerekir. Diğer her şey sessiz kalırken yalnızca aramanızı, yayınınızı veya oyununuzu nasıl duyacağınız aşağıda açıklanmıştır.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS'da bireysel uygulamaları susturmak için yerleşik bir yol yoktur, bu nedenle yalnızca bir uygulamayı duymak için uygulama başına ses karıştırıcısına ihtiyacınız vardır. Yükle <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, menü çubuğu karıştırıcısını açın, duymak istediğiniz uygulama dışındaki tüm uygulamaların sesini kapatın ve geri kalanlar anında sessizleşirken o uygulama oynamaya devam eder.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;nuzdaki Bir Uygulama Dışındaki Her Şeyin Sesi Nasıl Kapatılır" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden macOS bunu kendi başına yapamıyor?</h2>
<p>Windows, on yılı aşkın bir süredir Ses Düzeyi Karıştırıcısına sahiptir: hoparlör simgesine sağ tıklayın; çalışan her uygulamanın kendi kaydırıcısı olur. macOS bunu hiç göndermedi. Mac cihazınızdaki ses tuşları yalnızca tek bir şeyi kontrol eder: ana çıkış seviyesini. Sistemi kapattığınızda her şey birlikte çöker. Sesi kapattığınızda her şey susturulur.</p>
<p>Aynı anda beş şey ses çıkarana kadar bu sorun değil. Video görüşmesindesiniz ancak bir tarayıcı sekmesi otomatik olarak bir reklamı oynatıyor, Spotify hâlâ çalışıyor, arka planda bir oyun ping sesi çıkarıyor ve Slack uğultu yapıyor. Tek yerel seçenekleriniz uygulamalardan çıkmak, her uygulamanın kendi ayarlarında (eğer bu seçeneğe sahipse) uygulamaları birer birer sessize almak veya kulaklığınızı çıkarmaktır. Bunların hiçbiri "bunu sakla, gerisini sustur" demenize izin vermiyor.</p>

<h2>Basit yol: geri kalanını bir mikserle susturun</h2>
<p>Uygulama başına bir mikser, uygulamalarınız ve çıkış cihazınız arasında bulunur ve her uygulamaya kendi ses seviyesi ve ses kapatma kontrolünü verir. Bir uygulamayı çalıştırdıktan sonra tek bir uygulamayı izole etmek birkaç saniye sürer:</p>
<ul>
<li>Mikseri menü çubuğunuzdan açın. Şu anda ses üreten her uygulamanın canlı bir listesini göreceksiniz.</li>
<li>Duymak istediğiniz uygulamayı, çağrınızı, yayınınızı, oyununuzu bulun.</li>
<li>Diğer her şeyi sessize alın. Her uygulamanın yanındaki sessize alma düğmesine dokunun veya kaydırıcısını sıfıra çekin.</li>
<li>İşte bu. Geri kalanlar sessiz kalırken, yalnız bıraktığınız uygulama tam ses seviyesinde oynamaya devam ediyor.</li>
</ul>
<p>ile <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, listedeki her uygulamanın kendi kaydırıcısı ve kendi sessize alma düğmesi vardır, dolayısıyla bu bir avuç tıklamayla gerçekleşir. Daha sonra oynatılmaya başlayan yeni uygulamalar otomatik olarak gösterilir; böylece bir bildirim sesi gizlice içeri girmeye çalışırsa, odaklandığınız uygulamanıza dokunmadan bu sesi anında susturabilirsiniz.</p>

<blockquote>İşin püf noktası, "biri hariç her şeyi" sessize almanın, bir uygulamayı sessize almanın tam tersi olmasıdır. Mac'nuzu susturmuyorsunuz, gerçekten önemsediğiniz şeyin etrafındaki gürültüyü susturuyorsunuz.</blockquote>

<h2>Tekrarlamamak için profil olarak kaydedin</h2>
<p>Eğer bu sık sık başvurduğunuz bir kurulumsa, bunu her seferinde elle yapmak eskir. Toplantılar sırasında çağrı uygulamanızın her zaman yüksek sesle ve diğer her şeyin kapalı olmasını istediğinizi veya oyunlar ve tarayıcılar sessiz kalırken yayınınızın ön planda ve ortada olmasını istediğinizi varsayalım. Birim profili, uygulama başına tam olarak bu ayarları saklar ve bunları tek tıklamayla yeniden uygular.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> "Toplantı" veya "Yalnızca Yayın" gibi profilleri kaydetmenize ve ihtiyaç duyduğunuz anda bu profillere geçiş yapmanıza olanak tanır. Bir kez ayarladığınızda tek uygulamanızı izole etmek, beş kaydırıcılı bir iş yerine tek bir menü çubuğu işlemine dönüşür.</p>

<h2>Daha akıllı versiyon: sessize almak yerine otomatik kapanma</h2>
<p>Bazen diğer uygulamaların tamamen yok olmasını istemezsiniz, sadece daha önemli bir şey başladığında onların yoldan çekilmesini istersiniz. Bu otomatik eğilmedir. Öncelikli uygulamanız oynatıldığında, arka plan uygulamaları otomatik olarak düşük bir seviyeye düşer, durduğunda tekrar yükselir.</p>
<p>Bu, aramalar ve akışlar için idealdir. Birisi konuşmaya başladığında müziğiniz onu duyabilmeniz için kısalır ve arama bittiğinde müzik kendi kendine geri gelir. Durum her değiştiğinde manuel olarak sesi kapatıp açmadan "bir uygulamayı net bir şekilde duyun" sonucunu elde edersiniz. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> manuel karıştırıcının yanı sıra otomatik kısma özelliğini de içerir; böylece tam sessizlik için sert sessize almayı veya daha yumuşak bir arka plan için kısmayı seçebilirsiniz.</p>

<h2>Tuttuğunuz tek uygulamayı öne çıkarma</h2>
<p>Tek bir uygulamayı izole etmenin bir avantajı da var: Mac cihazınızın normalde izin verdiğinden daha yüksek ses çıkarmasını da sağlayabilirsiniz. Bazı uygulamalar, özellikle de sessiz görüntülü aramalar veya iyi yönetilmeyen yayınlar, maksimum ses seviyesinde bile neredeyse hiç duyulmuyor. Uygulama başına yükseltme, sistem çıktınızı artırmadan tek bir uygulamayı %100'ün üzerine çıkarır; bu da zaten sessize aldığınız uygulamaların gücünü artırır.</p>
<p>Yani tam hareket şu: gürültüyü susturun, tek uygulamanızı koruyun ve uygulama çok sessizse onu güçlendirin. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> üçünü de aynı mikser penceresinde yönetir.</p>

<h2>Ne için kaydolmuyorsunuz?</h2>
<p>Mac ses araçlarıyla ilgili yaygın bir endişe, çekirdek uzantılarına, sanal ses sürücülerine veya rastgele bir web sitesinden indirilen şüpheli yükleyicilere ihtiyaç duymalarıdır. Bu meşru bir endişedir ve bazı kişilerin bu uygulamalardan tamamen kaçınmasının nedeni de budur.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store'dadır, korumalı alandadır ve herhangi bir normal uygulama gibi yüklenir, sürücü yok, DMG yok, onaylanacak sistem uzantısı yok. Bu, abonelik yerine tek seferlik 14,99 €'luk bir satın alma işlemidir, yani bir kez ödersiniz ve kullanmaya devam edersiniz. Bu, tüm gün menü çubuğunuzda çalışır halde bırakacağınız bir şey için önemlidir.</p>

<h2>Hızlı özet</h2>
<ul>
<li>macOS'nun uygulama başına yerel ses kontrolü yoktur, dolayısıyla bunu yapmak için bir miksere ihtiyacınız vardır.</li>
<li>Mikseri açın, tek uygulamanızı koruyun, diğer her şeyi sessize alın veya sıfırlayın.</li>
<li>Sık yaptığınız aramalar veya yayınlar için bunu profil olarak kaydedin.</li>
<li>Arka plan uygulamalarının kapatılması yerine sessizleştirilmesini istiyorsanız otomatik azaltmayı kullanın.</li>
<li>Kendi başına çok sessizse, tutulan uygulamanızı güçlendirin.</li>
</ul>

<p>Yalnızca önemli olanı duymak ve gerisini susturmak mı istiyorsunuz? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> ve bir dakikadan kısa sürede ilk her şeyi sessize alma profilinizi oluşturun.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Mac'da Hoparlörler ve Kulaklıklar için Farklı Bir Ses Düzeyi Tutun",
    description: "macOS, hoparlörler ve kulaklıklar arasında geçiş yaptığınızda uygulama düzeyindeki ses düzeyi karışımınızı unutur. Bunun nedeni, manuel sınırlar ve uygulama başına birim belleğinin bunu nasıl düzelttiği aşağıda açıklanmıştır.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS aslında her çıkış cihazı için ayrı bir sistem birimini hatırlar, ancak her geçiş yaptığınızda uygulama düzeyindeki bakiyenizi unutur. Böylece kulaklıklar ve hoparlörler kendi genel seviyelerini korur, ancak fişini çektiğiniz anda bir uygulama patlar ve diğeri kaybolur. Çözüm, macOS'nun yerel bir aracının bulunmadığı, cihaz geçişlerinde hayatta kalan uygulama başına birim belleğidir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Hoparlörler ve Kulaklıklar için Farklı Bir Ses Düzeyi Tutun" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS'nun hatırladıkları ve hatırlamadıkları</h2>

<p>macOS'nun her çıkış cihazına aynı şekilde davrandığına dair yaygın bir inanış vardır. Değil. Her çıkış cihazı kendi sistem birimini saklar. MacBook hoparlörlerinizi %30'a ve AirPods'nuzu %80'e ayarlayın; macOS bu iki sayıyı ayrı tutar. Takın, çıkarın, yeniden bağlayın; her cihaz bıraktığınız yere geri döner.</p>

<p>Peki neden deneyim hâlâ bozuk gibi geliyor? Çünkü bu bellek tek, küresel kaydırıcıda durur. macOS, belirli bir cihazda oynatılan her şey için tam olarak tek bir ses seviyesi kontrolüne sahiptir. Bireysel uygulamaların ne kadar gürültülü olduğunu hatırlamıyor. Hoparlörlerden kulaklığa geçiş yaptığınızda Spotify, Zoom araması ve YouTube sekmesi arasındaki denge korunmaz çünkü bu denge hiçbir zaman var olmamıştır. Her uygulama aynı kaydırıcıyı paylaşır.</p>

<p>Sonuç, insanların "hoparlörler ve kulaklıklar için farklı ses seviyesi" olarak tanımladığı hayal kırıklığıdır. Genellikle istedikleri şey, yalnızca cihaz başına farklı bir ana seviye değil, aynı zamanda hatırlanan bir karışımdır: sessiz müzik, yüksek sesli çağrılar, kapatılmış bildirimler ve bu karışım, ister masa hoparlörlerinde ister kulaklıkta olsun, bozulmadan kalır.</p>

<h2>Manuel geçici çözümler ve bunların yetersiz kaldığı yerler</h2>

<p>Yerleşik araçlarla oraya kısmen ulaşabilirsiniz ve başka bir şeye ulaşmadan önce tavanı bilmek faydalı olacaktır.</p>

<ul>
<li><strong>Her cihazın sistem ses düzeyini bir kez ayarlayın.</strong> Sesi hoparlörlerinizden çalın, seviyeyi ayarlayın, ardından çıkışı kulaklığa geçirin ve bu seviyeyi ayarlayın. macOS her ikisini de korur. Bu, cihaz başına ana birimi yönetir, ancak uygulama başına hiçbir şey yapmaz.</li>
<li><strong>Uygulamanın sunduğu uygulama başına ses düzeyini kullanın.</strong> Spotify, VLC ve çoğu tarayıcının kendi dahili birimi vardır. Yüksek sesli bir uygulamayı uygulamanın içinde kırpabilirsiniz. İşin püf noktası: Bu ayar cihazda değil uygulamada bulunur, dolayısıyla kulaklığa geçtiğinizde değişmez ve çoğu uygulamanın (Slack, Zoom, sistem bildirimleri, Posta) böyle bir kontrolü yoktur.</li>
<li><strong>Çıkışı Kontrol Merkezi'nden veya menü çubuğundan değiştirin.</strong> Cihazlar arasında hızlı bir şekilde geçiş yapmak için menü çubuğundaki ses seviyesi simgesini Option tuşuna basarak tıklayın. Hızlıdır, ancak yalnızca ana seviyeyi hareket ettirir, uygulama başına karışımı geri yüklemez.</li>
</ul>

<p>Bunlar size cihaz başına bir ana birim sağlar. Hiçbirinin size vermediği şey, sizi cihazlar arasında takip eden, hatırlanan, uygulama başına bir dengedir. Bu boşluk tam olarak sıkıntının yaşandığı yerdir ve yapısaldır: Yıllardır bir tane gönderen Windows'nun aksine, işletim sisteminin uygulama başına bir karıştırıcısı yoktur.</p>

<h2>Uygulama başına birim belleği ve cihaz değiştirmenin neden asıl sorun olduğu</h2>

<p>Daha derin düzeltme, her uygulamaya kendi hacmini vermek ve bu ayarların devam etmesini sağlamaktır. Uygulama başına mikser böyle bir şey <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> için inşa edilmiştir. Menü çubuğunuzda bulunur, o anda ses üreten tüm uygulamaları listeler ve her birine bağımsız bir kaydırıcı, sessize alma geçişi ve hatta sessiz uygulamalar için %100'ün üzerinde bir artış sağlar.</p>

<p>Hoparlörler ve kulaklıklar sorunu için önemli olan kısım: bu seviyeler hatırlanır. Müziğinizi %40'a, çağrılarınızı %90'a ve sohbet uygulamasını sessize alın ve <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bu karışımı koruyor. Kulaklığınızı çıkarıp tekrar hoparlörlerin başına geçtiğinizde, her seferinde üç uygulamayı elle yeniden dengeleyemezsiniz.</p>

<p>Hacim profilleri bunu daha da ileri götürür. Adlandırılmış uygulama bazındaki seviyeleri kaydedebilir ve tek tıklamayla geri çağırabilirsiniz; böylece "kulaklık, odaklanmış çalışma" karışımı ve "konuşmacılar, toplantılar" karışımının her biri, manuel sıfırlama yerine tek bir seçimdir.</p>

<blockquote><p>Zihinsel değişim: Sürekli sürüklediğiniz bir ana kaydırıcıyı düşünmeyi bırakın ve duruma göre kaydedilmiş bir karışım düşünmeye başlayın. Cihaz değiştirme, yeniden dengeleme işi olmaktan çıkıyor.</p></blockquote>

<h2>Miksinizi kaybetmeden hızlı çıkış değiştirme</h2>

<p>Anahtarlama cihazları hızlı ve tahribatsız olmalıdır. Aynı menü çubuğu panelinden çıkış cihazınızı değiştirebilirsiniz; böylece hoparlörlerden kulaklığa geçmek tek tıklamayla gerçekleşir ve uygulama başına düzeyleriniz tek bir genel sayıya düşmek yerine ortaya çıkar.</p>

<p>İlgili bir özellikten bahsetmeye değer, otomatik kısmadır: mikrofonunuza ses geldiğinde (konuşmaya başladığınızda veya bir arama başladığında), diğer uygulamalar sizi duyabilmeniz için otomatik olarak kısılır ve daha sonra ayarlanan seviyelerine geri döner. Bu, cihazlardan ziyade dikkat için uygulanan prensibin aynısıdır; macOS'nun kendi başına yapamayacağı başka bir şeydir.</p>

<h2>Nasıl kurulur?</h2>

<ul>
<li>Yükle <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store'dan. Korumalı alana sahiptir, dolayısıyla onaylanacak bir sürücü, DMG ve çekirdek uzantısı yoktur.</li>
<li>Mikserde görünmeleri için en çok kullandığınız uygulamalarda ses çalın.</li>
<li>Her uygulamanın düzeyini ayarlayın, istemediğiniz her şeyin sesini kapatın ve çok sessiz olan her şeyin sesini yükseltin.</li>
<li>Bu düzenlemeyi bir profil olarak kaydedin; örneğin biri kulaklıklar için, diğeri hoparlörler için ayarlanmış.</li>
<li>Cihaz değiştirdiğinizde eşleşen profili geri çağırın veya uygulama başına kayıtlı seviyelerinizin aktarılmasına izin verin.</li>
</ul>

<p>Dürüst özet: macOS ana seviyede çıkış cihazı başına ses seviyesini hatırlar ancak uygulama başına karışımınızı asla hatırlamaz çünkü uygulama başına karıştırıcısı yoktur. Gerçek hedefiniz hoparlörler ve kulaklıklar arasındaki her geçişte müzik, aramalar ve bildirimler arasında tutarlı bir denge kurmaksa, işletim sistemi üzerinde uygulama başına belleğe ihtiyacınız vardır.</p>

<p>Hoparlörlerin ve kulaklıkların her uygulamayı yeniden ayarlamadan kendi miksajlarını korumasını mı istiyorsunuz? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> tek seferlik 14,99 € karşılığında, abonelik yok, sürücü yok.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control Üretimi Durduruldu mu? En İyi Mac Uygulama Başına Birim Değiştirme (2026)",
    description: "Static Z Software'in Sound Control'su üretilmiyor ve modern macOS'da bozuluyor. İşte bu yüzden çalışmayı bıraktı, ne yaptı ve 2026'da geçiş yapılacak en iyi uygulama başına ses karıştırıcısı.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>Static Z Software tarafından üretilen Sound Control üretilmiyor ve artık satılmıyor veya güncellenmiyor ve modern macOS'da giderek daha fazla başarısız oluyor çünkü Apple'ın kilitlediği çekirdek düzeyinde bir ses sürücüsüne dayanıyordu. Bugün uygulama başına birime ihtiyacınız varsa, en temiz değişim <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, sürücüsüz, korumalı alanlı bir Mac App Store karıştırıcı.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control Üretimi Durduruldu mu? En İyi Mac Uygulama Başına Birim Değiştirme (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Sound Control gerçekte ne yaptı?</h2>
<p>Sound Control, yıllardır gerçek bir macOS boşluğuna yanıt verecek çözümdü: Mac'da hâlâ yerleşik uygulama başına ses karıştırıcısı yok. Windows'nun Vista'dan bu yana Ses Düzeyi Karıştırıcısında bir tane var, ancak macOS size yalnızca tek bir ana kaydırıcı veriyor. Sound Control bu boşluğu aşağıdakileri yapmanıza olanak tanıyan düzenli bir menü çubuğu paneliyle doldurdu:</p>
<ul>
<li>Çalışan her uygulama için bağımsız bir ses düzeyi ayarlayın.</li>
<li>Sistem sesinizin geri kalanına dokunmadan bireysel uygulamaları sessize alın.</li>
<li>Sessiz uygulamaları yüzde 100'ün üzerine çıkarın.</li>
<li>Uygulama başına ekolayzır ve denge ayarlamalarını uygulayın.</li>
<li>Sesi yönlendirin ve uygulamaları belirli çıkış cihazlarına sabitleyin.</li>
</ul>
<p>Arka planda YouTube sekmesi fısıldarken Zoom araması patlatan herkes için bu uygulama başına kontrol dönüştürücüydü. Pek çok Mac uzman kullanıcısının makinesinde sessiz bir temel haline geldi.</p>

<h2>Neden çalışmayı bıraktı?</h2>
<p>Dürüst teknik hikaye burada önemlidir, çünkü bunun neden birinin kolayca yama yapabileceği bir hata olmadığını açıklar. Sound Control, her uygulamanın çıkışını yakalayıp yeniden şekillendirebilmek için kendisini macOS ses hattına yerleştiren bir çekirdek uzantısı (kext) olan bir sistem ses sürücüsü yükleyerek çalıştı. Bu derin kanca tam olarak EQ ve güçlendirme özelliklerini mümkün kılan şeydir.</p>
<p>macOS 10.15 Catalina ile başlayıp Big Sur ve Apple Silicon geçişiyle hızlanan Apple, kullanıcı alanı alternatifleri lehine çekirdek uzantılarını kullanımdan kaldırmaya başladı. Apple Silicon Mac'larda üçüncü taraf kext'ların yüklenmesi, Kurtarma Modunda sistem güvenliğinin düşürülmesini gerektirir ve Apple, eski ses kext'ların ödünç alınan süre içinde olduğunu açıkça belirtti. Static Z Software sonuçta Sound Control'nun satışını ve geliştirilmesini durdurdu. Sonuç: En yeni macOS sürümlerinde yüklemeler başarısız oluyor, ses sorunları yaşanıyor veya çoğu insanın haklı olarak yapmak istemediği güvenlik düşürmeleri olmadan sürücü yüklemeyi reddediyor.</p>
<blockquote>Bu geliştirici açısından ihmal değildir. Bu, platform düzeyinde bir değişimdir. Apple, Sound Control'nun üzerine inşa edildiği düşük seviyeli ses sürücüsü türüne kapıyı kapattı ve hiçbir güncelleme onu tamamen yeniden açamaz.</blockquote>

<h2>Modern macOS'da neler değişti?</h2>
<p>Apple konuyla ilgili bir şey ekledi: Core Audio artık uygulamaların kullanıcı alanından işlem başına sesi yakalamasına ve işlemesine olanak tanıyan bir Tap API'si (macOS 14.2 Sonoma'da tanıtıldı) sunuyor - kext yok, güvenlik düzeyi düşürülmesi yok, Kurtarma'da yeniden başlatma yok. Bu, uygulama başına ses için onaylanmış modern yoldur ve mevcut bir mikserin üzerine inşa edilmesi gereken yol budur. Takas dürüsttür: kullanıcı alanı dokunuşları eski bir çekirdek sürücüsüne göre daha kısıtlıdır, bu nedenle sunulan tam uygulama başına parametrik EQ Sound Control yerine uygulama başına temiz ses seviyesi, sessize alma ve yükseltme beklemelisiniz.</p>

<h2>En iyi yedek: SoundDial</h2>
<p>Sound Control'nun yaptığı işin özüne (uygulama başına bağımsız ses düzeyi) sahip olmak istiyorsanız Mac'da gerçekten güvende ve güncel kalabilirsiniz. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 2026'daki en yakın temiz geçiş seçeneğidir. Modern macOS ses yığını için oluşturulmuş, uygulama başına bir menü çubuğu ses karıştırıcısıdır. Sound Control iş akışından aktarılanlar:</p>
<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — Çalışan uygulama başına bir kaydırıcı, doğrudan menü çubuğunda.</li>
<li><strong>Uygulama başına sessize alma</strong> — diğer her şey oynatılmaya devam ederken bir uygulamayı sessize alın.</li>
<li><strong>Uygulama başına ses artırma</strong> — sessiz bir uygulamayı normal tavanının üzerine itin.</li>
<li><strong>Hacim profilleri</strong> — farklı bağlamlar (çağrılar, müzik, oyun) için mikser kurulumlarını kaydedin ve bunlar arasında geçiş yapın.</li>
<li><strong>Otomatik eğilme</strong> — arka planda uygulama ses düzeyini otomatik olarak düşürür; konuşmaya başladığınızda veya bir arama geldiğinde kullanışlıdır.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — Sistem Ayarlarına girmeden hoparlörler, kulaklıklar ve diğer cihazlar arasında geçiş yapın.</li>
</ul>
<p>Geçiş için önemli olan pratik farklılıklar: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store aracılığıyla gönderilir, korumalı alana alınır ve hiçbir sürücü ve DMG yüklenmez. Bu, onaylanacak bir çekirdek uzantısının olmadığı, Kurtarma Modunun olmadığı ve Mac'nuzun güvenlik duruşunun düşürülmediği anlamına gelir; bunlar Sound Control'yu öldüren tam da sorunlu noktalardır. Bu, bir abonelik değil, tek seferlik 14,99 € tutarında bir satın alma işlemidir.</p>

<h2>Adım adım nasıl geçiş yapılır?</h2>
<ul>
<li><strong>Sound Control'yu temiz bir şekilde kaldırın.</strong> Bir sürücü yüklediğinden, hala çalışıyorsa kendi kaldırıcısını kullanın veya yeni bir şey yüklemeden önce ses sürücüsü bileşenlerini kaldırın. İki rakip ses kancası aksaklıklara neden olabilir.</li>
<li><strong>App Store'dan SoundDial'yu yükleyin.</strong> Yeniden başlatma veya güvenlik değişikliği gerekmez.</li>
<li><strong>İstediği ses iznini verin.</strong> Modern macOS'da uygulama başına çıktıyı okumasını ve kontrol etmesini sağlayan şey budur.</li>
<li><strong>Menü çubuğu panelini açın ve seviyeleri ayarlayın.</strong> Çalışan uygulamalarınız ayrı kaydırıcılarla görünür; gerektiği gibi ayarlayın, sessize alın veya güçlendirin.</li>
<li><strong>Bir profili kaydedin.</strong> Favori Sound Control kurulumlarınız varsa, bunları profiller olarak yeniden oluşturun, böylece tek tıklamayla geçiş yapabilirsiniz.</li>
</ul>

<h2>Dürüst beklentiler</h2>
<p>Sound Control'yu kullanmanın tek nedeni uygulama başına ses seviyesi, sessize alma ve yükseltme ise modern bir korumalı alan mikseri sizi tamamen kapsar. Uygulama başına ekolayzırına çok güveniyorsanız, derin EQ'nun eski sürücü modeline bağlı olduğunu ve Apple'ın mevcut kurallarına göre temiz bir şekilde yeniden üretilmesi en zor özellik olduğunu unutmayın. Beklentilerinizi buna göre belirleyin, şaşırmayacaksınız.</p>

<p>Sürücü baş ağrıları olmadan uygulama başına ses seviyesini geri almaya hazır mısınız? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> — tek seferlik 14,99 €, korumalı alan, abonelik yok, sürücü yok.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny Gitti — Yerini Alacak Modern Mac Uygulama Başına Birim Uygulaması",
    description: "Prosoft'un SoundBunny ürünü üretilmiyor. İşte, bunun yerine geçecek mevcut, aktif olarak bakımı yapılan macOS uygulama başına ses karıştırıcısı - ayrıca uygulama başına ses kurulumunuzu çekirdek sürücüleri olmadan nasıl taşıyacağınız.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>SoundBunny çalışmayı durdurduysa veya artık satılmıyorsa, modern yedek parça <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mevcut macOS için oluşturulmuş, uygulama başına bir menü çubuğu ses karıştırıcısı. Size, çekirdek sürücüsü, DMG veya yönetme aboneliği olmadan, 14,99 €'luk tek seferlik Mac App Store satın alımıyla aynı temel işi (bağımsız ses seviyesi, sessize alma ve uygulama başına yükseltme) sunar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny Gitti — Onun Yerini Alacak Modern Mac Uygulama Başına Birim Uygulaması" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundBunny'ya ne oldu?</h2>
<p>SoundBunny, Prosoft Engineering'in macOS için uygulama başına hacim aracıydı. Çalışan her uygulama için doğrudan menü çubuğundan farklı bir ses seviyesi ayarlamanıza olanak tanır - Müziğin sessiz olması, aramanın yüksek olması, tarayıcının ikisinin arasında bir yerde olması. Yıllar boyunca Apple'ın asla kapatmadığı bir boşluğu dolduran birkaç araçtan biriydi.</p>
<p>Sorun SoundBunny'nun eski bir yazılım olmasıdır. Apple'ın macOS ses ve güvenlikte yaptığı derin değişikliklere (Apple Silicon, güçlendirilmiş çalışma süresi, sıkılaştırılmış sistem genişletme kuralları ve eski ses kancalarının kaldırılması) ayak uyduramadı. Bunun gibi bir yardımcı program güncellemeleri almayı bıraktığında eninde sonunda bozulur: başlatılamaz, bir işletim sistemi güncellemesinden sonra uygulama akışlarının kontrolünü kaybeder veya modern bir Mac'ya temiz bir şekilde yüklenemez. Eğer oradaysan, yanlış bir şey yapmıyorsun demektir. Arkada siz değil uygulama var.</p>

<h2>macOS'nun neden hala üçüncü taraf bir miksere ihtiyacı var?</h2>
<p>İşin dürüst kısmı şu: Bu, macOS'daki gerçek bir boşluktur, Ayarlar'da düzeltebileceğiniz bir hata değildir. Windows, on yılı aşkın bir süredir uygulama başına bir Ses Düzeyi Karıştırıcısı piyasaya sürüyor. macOS'nun hiçbir zaman böyle bir özelliği olmadı. Sistem ses düzeyi kaydırıcısı ve Ses ayarları sesinizi kontrol eder. <em>çıkış cihazı</em> bir bütün olarak her uygulama aynı ana seviyededir. "Safari'yu %40'ta tutun, ancak Zoom'yu %100'de tutun" demenin yerleşik bir yolu yoktur.</p>
<p>SoundBunny gibi araçların mevcut olmasının nedeni budur ve bugün bunların değiştirilmesinin hala gerekli olmasının nedeni budur. İhtiyaç, uygulama ortadan kalktığında ortadan kalkmadı; Apple hâlâ bu sorunu gidermedi.</p>

<h2>Modern alternatif: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menü çubuğunuzda yaşayan ve SoundBunny kullanıcılarının güvendiği şeyleri yapan, dünün macOS'su yerine bugünün macOS'suna dayanarak oluşturulmuş, uygulama başına bir ses karıştırıcısıdır. Özellik örtüşmesi temel hususları kapsar:</p>
<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — çalışan uygulama başına bir kaydırıcı, tam olarak SoundBunny zihinsel modeli.</li>
<li><strong>Uygulama başına sessize alma</strong> — Gürültülü tek bir uygulamayı, diğer her şeye dokunmadan susturun.</li>
<li><strong>Uygulama başına ses artırma</strong> — sessiz bir uygulamaya basın <em>yukarıda</em> Bir video veya çağrı çok düşük düzeyde kaydedildiğinde %100. SoundBunny, modern macOS'da geçmiş sistem maksimumunu güvenilir bir şekilde yükseltemedi; Boost burada gerçek bir yükseltmedir.</li>
<li><strong>Hacim profilleri</strong> - uygulama başına bir dizi seviye kaydedin ("iş" karışımı, "oyun" karışımı) ve kaydırıcıları birer birer itmek yerine bunlar arasında geçiş yapın.</li>
<li><strong>Otomatik eğilme</strong> — başka bir ses kaynağı (bir arama sırasında mikrofonunuz gibi) etkinleştiğinde arka plan uygulamasının ses düzeyini otomatik olarak düşürür.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden hoparlörler, kulaklıklar ve diğer çıkışlar arasında geçiş yapın.</li>
</ul>

<h2>Göç aslında neye benziyor</h2>
<p>Herhangi bir içe aktarma adımı yoktur; uygulama başına ses düzeyi düzeyleri, taşıdığınız bir dosya değildir; ancak geçiş hızlıdır:</p>
<ul>
<li><strong>SoundBunny'yu düzgün şekilde çıkarın.</strong> Çıkın ve ardından uygulamayı silin. Herhangi bir yardımcı veya oturum açma öğesi yüklediyse, iki yardımcı programın aynı ses akışları için kavga etmemesi için onu da kaldırın.</li>
<li><strong>Mac App Store'dan SoundDial'yu yükleyin.</strong> Korumalı alana alınır ve mağaza aracılığıyla dağıtılır, dolayısıyla monte edilecek DMG yoktur ve "tanımlanamayan geliştirici" uyarısı yoktur. Apple Kimliğinize bağlı tek bir satın alma.</li>
<li><strong>İlk başlatmada ses erişimine izin verin.</strong> macOS, SoundDial'nun uygulama sesini görmesi için izin isteyecektir. Bu, Apple'ın sağladığı modern ve onaylanmış yoldur; çekirdek uzantısı yok, yeniden başlatma yok, sistem güvenliği azaltılmıyor. İzin verirseniz çalışan uygulamalarınız kaydırıcı olarak görünür.</li>
<li><strong>Karışımınızı yeniden oluşturun.</strong> Ortak uygulamalarınızı ayarlayın, ardından bu düzenlemeyi profil olarak kaydedin, böylece hiçbir zaman yeniden yapmanıza gerek kalmaz.</li>
</ul>

<h2>SoundBunny'dan pratik farklar</h2>
<p>En önemli fark şu ki <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> güncel yazılımdır. Yerel olarak Apple Silicon üzerinde çalışır, Apple'ın desteklediği ses API'lerini kullanır ve bir Mac App Store uygulamasıdır; bu, güncellemelerin mağazadan geldiği ve işletim sistemi yükseltmelerini bozmak yerine hayatta kalacak şekilde oluşturulduğu anlamına gelir. Korumalı alana alınmış olmak aynı zamanda kendi şeridinin dışına çıkamayacağı anlamına da gelir; bu da uygulamalarınız ve hoparlörleriniz arasında duran bir şey için güven vericidir.</p>
<p>Beklentilerin doğru olması için birkaç dürüst uyarı. SoundDial, Apple'ın ses çerçevesi içinde çalıştığından, kontrol, normal sistem çıkışı üzerinden yönlendirilen standart uygulamalar için en iyisidir. Bazı yazılımlar sesi kendi yoluyla veya özel bir cihaz üzerinden çalar ve hiçbir menü çubuğu mikseri (SoundBunny dahil) bunları tam olarak yönetemez. Ve uygulama başına birim, doğası gereği macOS'nun üstünde bir yazılım katmanıdır; bu bir donanım karıştırıcısı değil. Bu gerçek sınırlar dahilinde SoundBunny'nun yaptığı işi yapıyor.</p>

<blockquote>Uygulama başına Ses Düzeyi Karıştırıcısı bekleyerek Windows'dan Mac'ya geçtiyseniz, bu, bu boşluğu dolduran araçtır ve şimdi gerçekten bakımı yapılan bir araçtır.</blockquote>

<p>SoundBunny iyi bir performans sergiledi ancak bu bir miras. Modern bir Mac'da uygulama başına ses düzeyine, sessize alma ve yükseltmeye ihtiyacınız varsa, <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> — Bir kerelik 14,99 €, abonelik yok, sürücü yok.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Mac için Boom 2 Alternatifi: Boom 3D Ek Satışı Olmadan Uygulama Başına Hacim",
    description: "Boom 2 eski bir teknolojidir ve sizi Boom 3D'ya itmeye devam etmektedir. Yalnızca uygulama başına ses seviyesi ve modern macOS'da basit bir artış istiyorsanız, işte odaklanmış bir alternatif ve nasıl çalıştığı.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>Sistem çapında güçlendirme için Boom 2'yu sevdiyseniz ancak basit bir şey istiyorsanız <strong>uygulama başına</strong> Mevcut bir Mac'nun hacmine baktığımızda dürüst cevap, Boom 2'nun eski olduğu ve artık doğru araç olmadığıdır. Odaklanmış bir alternatif <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, daha büyük bir pakete gerek kalmadan her uygulamaya kendi ses kaydırıcısını, sessize alma ve yükseltme özelliğini tek seferlik 14,99 € karşılığında sunan bir menü çubuğu karıştırıcısı.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac için Boom 2 Alternatifi: Boom 3D Satışı Olmadan Uygulama Başına Hacim" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Boom 2 neden artık uymuyor?</h2>
<p>Boom 2, belirli bir nedenden dolayı çok sevilen bir uygulamaydı: Mac cihazınızın genel ses seviyesini sistem maksimumunun üzerine çıkardı ve bir ekolayzır ekledi. Bunu uygulama başına değil, sistem genelinde yaptı. 2015'te bu iyiydi. 2026'da iki sorunu var.</p>
<p>Birincisi, bu bir miras. Global Delight, enerjisini açıkça Boom 3D'ya kaydırdı ve Boom 2 ürün sayfasını açtığınızda kendinizi neredeyse anında daha yeni, daha pahalı uygulamaya doğru sürüklenmiş bulacaksınız. Boom 2 hâlâ mevcut ancak satıcının Boom 3D'yu satmak için kullandığı bir basamaktır, aktif ilgi gören bir ürün değil.</p>
<p>İkincisi ve daha önemlisi: Boom 2 hiçbir zaman uygulama başına ses karıştırıcı olmadı. Bir ana çıktıyı yükseltir ve şekillendirir. Eğer asıl sıkıntınız Slack pinginin müziğinizden daha yüksek olmasıysa veya bir tarayıcı sekmesinin bir aramayı bastırmasıysa, Boom 2 bunu çözmez. Birlikte her şeyi daha da gürültülü hale getiriyor. Bu farklı bir iş.</p>

<h2>macOS'da "uygulama başına hacim" aslında ne anlama geliyor?</h2>
<p>Çoğu alternatif özetin atladığı dürüst bağlam şu şekildedir: macOS'da hiçbir yerleşik uygulama başına ses karıştırıcısı yoktur. Windows'da yıllardır böyle bir özellik var; hoparlöre sağ tıklayın, Ses Düzeyi Karıştırıcısını açın ve Chrome'yu %40'a ve Spotify'yu %80'e ayarlayın. Apple bunu asla göndermedi. macOS ses seviyesi tuşu yalnızca bir ana seviyeyi hareket ettirir.</p>
<p>Dolayısıyla bir "Boom 2 alternatifi" aradığınızda, aslında aradığınız şey daha yüksek sesli bir Mac değil, Windows kullanıcılarının hafife aldığı uygulama başına kontroldür. Bu, işletim sistemindeki gerçek bir boşluktur; Boom 2'nun veya herhangi bir uygulamanın oluşturmayı unuttuğu bir şey değildir.</p>

<h2>SoundDial'nun sığdığı yer</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> özellikle bu boşluk için tasarlandı. Menü çubuğunda bulunur ve o anda ses çalan uygulamaları, her biri kendi kaydırıcısıyla listeler. Tek bir ana kontrolü dürtmek ve en iyisini ummak yerine, uygulama başına seviyeleri belirlersiniz.</p>
<p>Ne yapar:</p>
<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — tarayıcıyı sessize alın, müziği istediğiniz yerde tutun, küresel uzlaşma yok.</li>
<li><strong>Uygulama başına sessize alma</strong> — Gürültülü bir uygulamayı başka hiçbir şeye dokunmadan susturun.</li>
<li><strong>Uygulama başına artış</strong> — Bir video veya çağrı çok sessiz kaydedildiğinde, tek bir uygulamayı normal tavanının ötesine itin. Bu, Boom 2 hayranlarının genellikle özlediği parçadır, ancak burada tüm sistem yerine tek bir uygulamayı hedef almaktadır.</li>
<li><strong>Hacim profilleri</strong> — "odaklanma", "toplantı" veya "oyun" gibi düzenleri kaydedin ve tek tıklamayla geçiş yapın.</li>
<li><strong>Otomatik eğilme</strong> — konuşmaya başladığınızda diğer uygulamaları otomatik olarak düşürür; aramalar ve kayıt için kullanışlıdır.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — aynı menüden hoparlörler, kulaklıklar ve diğer çıkışlar arasında geçiş yapın.</li>
</ul>

<h2>Nasıl kurulur?</h2>
<p>İş akışı kısa:</p>
<ul>
<li>Yükle <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store'dan — DMG yok, sürücü yok, yeniden başlatma yok.</li>
<li>Şu anda ses üreten her uygulamayı görmek için menü çubuğu simgesini tıklayın.</li>
<li>Her uygulamanın kaydırıcısını istediğiniz düzeye sürükleyin; Gerektiğinde tek tek sessize alın veya güçlendirin.</li>
<li>Daha sonra yeniden kullanmak istiyorsanız düzenlemeyi profil olarak kaydedin.</li>
</ul>
<p>App Store üzerinden gönderildiği için korumalı alana alınır ve temiz bir şekilde kurulur. Bunu belirtmeye değer çünkü bazı eski ses araçları çekirdek uzantılarına veya sanal ses sürücülerine dayanıyordu; modern macOS'nun giderek daha fazla direndiği türden bir şey. SoundDial sizden bir sürücü yüklemenizi veya herhangi bir güvenlik ayarını düşürmenizi istemez.</p>

<h2>Dürüst bir sınırlama</h2>
<p>Uygulama başına destek gerçektir ancak sihir değildir. Bir uygulamanın kaynak sesi gerçekten sessizse veya kötü kaydedilmişse, bunun yükseltilmesi sinyalle birlikte gürültü tabanını da yükseltir, böylece çok sessiz malzeme sertçe basıldığında tıslama sesi çıkarabilir. Bu, herhangi bir uygulamadaki bir kusur değil, yükseltmenin fizik sınırıdır - Boom 2'nun sistem güçlendirmesi de aynı ödünleşime sahipti. Güçlendirmeyi, bozuk ses için bir kurtarma aracı olarak değil, pratik durumlar için boşluk payı olarak değerlendirin.</p>

<h2>Boom 2 odaklanmış bir miksere karşı</h2>
<p>Boom 2'da sevdiğiniz şey sistem genelinde ses yüksekliği artı EQ idiyse ve uygulama başına kontrolü umursamıyorsanız, Boom 3D satıcının amaçlanan halefidir - bu adil bir yoldur ve biz aksini iddia etmeyeceğiz. Ancak Boom 2'yu denediyseniz ve aslında istediğiniz şeyin her şeyi taşımadan bir uygulamayı kapatmak veya kapatmak olduğunu fark ettiyseniz, EQ ve güçlendirme paketi yanlış araç şeklidir.</p>
<blockquote>Boom 2, Mac'nun tamamının sesini yükseltir. Uygulama başına mikser, hangi uygulamanın daha yüksek sesli olduğuna karar vermenizi sağlar. Bunlar farklı sorunları çözer.</blockquote>
<p>Fiyat farkı da açıkça belirtilmeye değer. SoundDial tek seferlik 14,99 €'dur. Abonelik yok, daha büyük bir planın kapsamına giren deneme yok ve sizi daha pahalı bir seviyeye yönlendiren uygulama içi yol yok. Mikseri satın alırsın, mikserin sahibi olursun.</p>

<p>Eğer gerçekten peşinde olduğunuz şey sistem çapında bir EQ değil, uygulama başına ses seviyesi ise, <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu deneyin</a> ve seviyelerinizi macOS'nun size izin vermesi gerektiği şekilde ayarlayın.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial: Mac'da Ücretsiz Açık Kaynak ve Uygulama Başına Ücretli Hacim",
    description: "FineTune, Mac için ücretsiz, açık kaynaklı, uygulama başına bir birim uygulamasıdır; SoundDial, güçlendirme, profiller ve desteğe sahip, ücretli, korumalı bir App Store uygulamasıdır. İşte seçmenize yardımcı olacak dürüst bir karşılaştırma.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>FineTune, macOS için ücretsiz, açık kaynaklı, uygulama başına ses karıştırıcıdır; dolayısıyla tek endişeniz fiyatsa, gerçek bir seçenektir. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ücretli (14,99 €, tek seferlik) bir Mac App Store uygulamasıdır; uygulama başına ses artırma, kayıtlı profiller, otomatik azaltma ve satıcı desteği ekler. Gerçek seçim, ücretsiz ve DIY ile korumalı alana alınmış ve desteklenendir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune ve SoundDial: Mac&#x27;da Ücretsiz Açık Kaynak ve Uygulama Başına Ücretli Hacim" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Her iki uygulamanın da çözdüğü sorun</h2>

<p>macOS'da hâlâ yerleşik uygulama başına ses karıştırıcısı yok. Windows'da yıllardır böyle bir özellik var; hoparlör simgesine sağ tıklayın, Ses Düzeyi Karıştırıcısını açın; her uygulamanın kendi kaydırıcısı olur. Mac'da her şey için tam olarak tek bir sistem ses düzeyi kaydırıcısına sahip olursunuz: müziğiniz, görüntülü aramanız, YouTube, bildirim sesleri ve oyunun tümü bunları paylaşır. Aramanız çok sessizse ve Spotify çok yüksekse, tek "düzeltmeniz" Spotify'nun sesini tamamen kapatmaktır.</p>

<p>Hem FineTune hem de SoundDial bu boşluğu doldurmak için var. Çalışan her uygulamaya kendi ses seviyesi kontrolünü verirler, böylece örneğin ana kaydırıcıya dokunmadan arka plan müziğini %20'ye çekerken bir toplantıyı %100'de tutabilirsiniz.</p>

<h2>FineTune'nun doğru yaptığı şey</h2>

<p>FineTune, SoundSource ruhunu taşıyan daha yeni, ücretsiz ve açık kaynaklı bir uygulamadır. Güçlü yönleri konusunda adil olalım çünkü bunlar gerçek:</p>

<ul>
  <li><strong>Hiçbir maliyeti yok.</strong> Lisans yok, deneme yok, yükseltme sorunu yok.</li>
  <li><strong>Kaynak açık.</strong> Tam olarak ne yaptığını okuyabilir, gizlilik açısından denetleyebilir ve - Swift'i biliyorsanız - değiştirebilir veya çatallayabilirsiniz.</li>
  <li><strong>Toplum odaklıdır.</strong> Hatalar herkes tarafından düzeltilebilir ve kod herhangi bir şirketten daha uzun süre dayanır.</li>
  <li><strong>Temel ihtiyacı karşılıyor.</strong> İnsanların %90'ının aslında aradığı özellik olan uygulama başına bağımsız hacim.</li>
</ul>

<p>Tek gereksiniminiz "her şeyi geri çevirmeden bir uygulamayı geri çevirmeme izin verin" ise ve resmi bir destek masası olmadan gelen yazılım konusunda rahatsanız, FineTune meşru bir yanıttır. Bunu burada tavsiye etmek bir taviz değil, dürüstlüktür.</p>

<h2>Kendin Yap rotasının dürüst değiş tokuşları</h2>

<p>Ücretsiz ve açık kaynak, fiyat etiketinde görünmeyen gerçek maliyetler taşır. Bunlar özellikle FineTune'ya yönelik bir darbe değil; yaklaşımın doğasıdır:</p>

<ul>
  <li><strong>Kurulum manueldir.</strong> Açık kaynaklı ses araçları genellikle App Store aracılığıyla değil, indirilmiş bir yapı veya Homebrew formülü olarak dağıtılır. Apple'ın incelemesinin dışında kurulum yapıyorsunuz ve onu güncel tutmak zorunda kalıyorsunuz.</li>
  <li><strong>Uygulama başına ses müdahalesi doğası gereği hassastır.</strong> Başka bir uygulamanın sesini yönlendirmek derin sistem işidir. Apple, ses yığınını değiştiren bir macOS güncellemesi gönderdiğinde, bu araçlar birisi onları yamalayana kadar bozulabilir. Gönüllü bir projeyle "birisi" o ay meşgul olabilir.</li>
  <li><strong>Destek en iyi çabadır.</strong> Bir şey bozulursa başvurunuz GitHub sorunu ve beklemek olacaktır. Garantili bir yanıt yoktur ve hiç kimse sorunu düzeltmek zorunda değildir.</li>
  <li><strong>Özellik kapsamı, bakımcıların gönderdiği her şeydir.</strong> Çekirdek ses kontrolü muhtemelen kapsanmaktadır; ekstralar tamamen katkıda bulunanın zamanına bağlıdır.</li>
</ul>

<blockquote>Dürüst çerçeve: FineTune bakım sorumluluğu için para ticareti yapıyor. 14,99 € tasarruf edersiniz ve topluluk yetişene kadar bir işletim sistemi güncellemesinin onu bozuk bırakma riskini üstlenirsiniz.</blockquote>

<h2>SoundDial'nun farklı olduğu yerler</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ters ticareti alır. Bir kez ödeme yaparsınız ve karşılığında arkasında bir satıcı bulunan bir App Store ürünü ve uygulama başına hacim üzerine inşa edilmiş daha geniş bir özellik seti elde edersiniz:</p>

<ul>
  <li><strong>Uygulama başına ses düzeyi ve sessize alma</strong> — her iki uygulamanın sunduğu ortak temel.</li>
  <li><strong>Uygulama başına ses artırımı</strong> — çok sessiz bir uygulamayı %100'ün üzerine itin. Diğerlerini reddetmenin hala yeterli olmadığı, zayıf ses çıkışına sahip uygulamalar için kullanışlıdır.</li>
  <li><strong>Hacim profilleri</strong> — tüm karışımları kaydedin ("Toplantı", "Odaklanma", "Oyun") ve her seferinde kaydırıcıları sıfırlamak yerine tek tıklamayla geçiş yapın.</li>
  <li><strong>Otomatik eğilme</strong> — konuştuğunuzda veya seçilen bir uygulama etkinleştiğinde arka plan uygulamalarını otomatik olarak azaltır, böylece aramalar manuel müdahaleye gerek kalmadan kesilir.</li>
  <li><strong>Hızlı çıkış değiştirme</strong> — menü çubuğundan hoparlörler, kulaklıklar ve diğer çıkışlar arasında geçiş yapın.</li>
</ul>

<p>Bir o kadar da önemli <em>nasıl</em> gönderiyor. SoundDial korumalı alana alınır ve Mac App Store aracılığıyla dağıtılır; ayrı bir DMG yok, çekirdek sürücüsü yok, ses sürücüsü kurulumu yok. Güncellemeler diğer uygulamalar gibi App Store üzerinden gelir ve bir şeyler ters gittiğinde e-posta gönderebileceğiniz gerçek bir geliştirici vardır. 14,99 €'nun somut değeri budur: yalnızca daha fazla özellik değil, aynı zamanda bunların macOS sürümlerinde çalışmasını sağlamaktan sorumlu biri.</p>

<h2>Her ikisi için de geçerli olan dürüst bir uyarı</h2>

<p>Hiçbir üçüncü taraf uygulaması, macOS'nun ses sistemini Windows' Volume Mixer'a dönüştüremez çünkü Apple, uygulama başına ses için temiz bir genel API sunmaz. Bu kategorideki ücretsiz veya ücretli, açık veya kapalı her araç, sistem düzeyinde ses tekniklerini kullanarak bu sınırlamayı ortadan kaldırır. Bu, hem FineTune hem de SoundDial'nun büyük macOS ses değişikliklerinden etkilenebileceği anlamına gelir. Aradaki fark, daha sonra düzeltmeden kimin sorumlu olacağıdır: gönüllü bir topluluk veya ürünü buna bağlı olan ücretli bir satıcı.</p>

<h2>Hangisini seçmelisiniz?</h2>

<ul>
  <li><strong>Aşağıdaki durumlarda FineTune'yu seçin</strong> sıfır maliyet istiyorsunuz, açık kaynak şeffaflığına değer veriyorsunuz, yalnızca uygulama başına temel birime ihtiyacınız var ve App Store'nun dışına rahatça kurulum yapabiliyor ve işler bozulduğunda kendi kendini destekleyebiliyorsunuz.</li>
  <li><strong>Aşağıdaki durumlarda SoundDial'yu seçin</strong> tek tıklamayla App Store kurulumu, güçlendirme, profiller ve otomatik indirme gibi ekstralar ve oyunda dış görünüme sahip bir satıcıdan güncelleme güvencesi ve destek istiyorsunuz.</li>
</ul>

<p>Her ikisi de geçerlidir. Bu gerçekten para harcamayı mı yoksa dikkat etmeyi mi tercih ettiğinize bağlıdır. Desteklenen, korumalı alana alınmış bir uygulamayı satın almayı ve bunu bir daha düşünmemeyi tercih ediyorsanız, <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> tek seferlik 14,99 € karşılığında — abonelik yok, sürücü yok, DMG yok.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial: Ücretsiz Mac Ses Mikseri Yeterli mi?",
    description: "Ücretsiz Background Music uygulaması ile ücretli SoundDial arasında adil bir rekabet. Ücretsiz sanal sürücü yaklaşımının işe yaradığı, başarısız olduğu ve 14,99 €'luk yerel mikserin buna değdiği yer.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Background Music ücretsizdir ve temel konularda gerçekten iyidir: her uygulamaya kendi ses düzeyi kaydırıcısını verir ve başka bir uygulama oynatıldığında müziği otomatik olarak duraklatabilir. İhtiyacınız olan tek şey buysa kullanın. Ancak macOS güncellemelerinden sonra bozulabilen sanal bir ses sürücüsüne dayanıyor ve uygulama başına güçlendirme, profiller ve çıkış değiştirme özelliğinden yoksun. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> sürücüsüz, korumalı alanla desteklenen, desteklenen bir alternatifle para takası yapar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial: Ücretsiz Mac Ses Düzeyi Karıştırıcısı Yeterli mi?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>İlk olarak macOS hakkındaki dürüst gerçek</h2>
<p>macOS'da yerleşik uygulama başına ses karıştırıcısı yoktur. Windows'nun Hacim Karıştırıcısında on yılı aşkın süredir bir tane var, ancak Mac'da sistem kaydırıcı her şeyi aynı anda hareket ettiriyor. Üçüncü taraf bir uygulamanın bireysel uygulama akışlarını temiz bir şekilde kesmesine ve yeniden dengelemesine olanak tanıyan, Apple tarafından desteklenen bir API yoktur. Bu tek boşluk, Background Music ve SoundDial gibi araçların var olmasının nedenidir ve aşağıdaki ödünleşimlerin çoğunun temel nedenidir.</p>

<h2>Background Music neyi iyi yapıyor?</h2>
<p>Background Music, yıllardır piyasada olan ve iyi bir nedenden ötürü sadık bir takipçiye sahip olan açık kaynaklı bir menü çubuğu uygulamasıdır. Size şunları sağlar:</p>
<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — temel özellik. Bir çağrıyı yüksek sesle tutarken Spotify'yu kısın.</li>
<li><strong>Otomatik duraklatma</strong> — ses başka bir yerde başladığında müzik çalarınızı duraklatabilir; bu, toplantılar için hoş bir dokunuştur.</li>
<li><strong>Sizi takip eden bir cihaz birimi</strong> ve basit, mantıklı bir arayüz.</li>
<li><strong>Sıfır maliyet</strong> — ücretsizdir ve kod herkese açıktır.</li>
</ul>
<p>Birçok insan için bu yeterli. İstek listenizin tamamı "gürültülü bir uygulamayı geri kalanına dokunmadan daha sessiz hale getirin" ise, Background Music bunu kapsar ve ihtiyacınız olmayan bir şey için ödeme yapmamalısınız. Burada adil olmak önemlidir: Bu yasal olarak yararlı bir araçtır.</p>

<h2>Serbest yaklaşımın dikişlerini gösterdiği yer</h2>
<p>Yakalama <em>nasıl</em> Background Music uygulama başına hacim sağlar. macOS resmi bir yol vermediğinden, sistem sesinizi kendi üzerinden yönlendiren sanal bir ses sürücüsü (eski Soundflower yaklaşımının değiştirilmiş bir versiyonu) yükler. Bu mimari akıllıcadır ancak gerçek maliyetleri de beraberinde getirir:</p>
<ul>
<li><strong>macOS güncellemelerinden sonra bozuluyor.</strong> Sanal ses sürücüleri sistemin derinliklerinde yer alır ve büyük macOS sürümleri bunları geçmişte devre dışı bırakmış veya istikrarsızlaştırmıştır. Kullanıcılar yükseltme sonrasında rutin olarak sessizlik, bozulma veya yeniden yükleme ihtiyacını bildiriyor. Kırıldığında, genellikle kendi başınasın.</li>
<li><strong>Kurulum daha ağırdır.</strong> Mac cihazınıza yalnızca bir uygulama değil, çekirdeğe bitişik bir ses cihazı ekliyorsunuz. Temiz bir şekilde kaldırmak zahmetli olabilir.</li>
<li><strong>Varsayılan çıkış cihazınız haline gelir.</strong> Her şey sanal cihaz üzerinden yönlendirildiğinden, bazı profesyonel ses, konferans veya oyun uygulamaları tuhaf davranabilir ve gerçek çıkışınızı değiştirmek ekstra bir adımdır.</li>
<li><strong>Kalkınma toplum temposunda gerçekleşir.</strong> Destek masası bulunmamaktadır. Gönüllünün vakti olduğunda düzeltmeler yapılır; bu da aniden sessizleşebilen bir ses aracı için anlamlı bir risktir.</li>
</ul>
<p>Bunların hiçbiri Background Music'yu kötü yapmaz. Bu, onu ücretsiz bir aracın değiş tokuşlarıyla birlikte ücretsiz bir araç haline getirir.</p>

<h2>SoundDial ile gerçekte ödediğiniz tutar</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ne olduğunu şekillendiren bir Mac App Store uygulamasıdır. App Store uygulamaları korumalı alanda olduğundan ve Background Music'nun kullandığı düşük seviyeli sanal sürücü türünü gönderemediğinden, SoundDial, ayrı bir ses cihazı veya DMG kurulmadan çalışacak şekilde tasarlanmıştır. Bu şu anlama gelir:</p>
<ul>
<li><strong>Sanal sürücü tuhaflıkları yok.</strong> Ses zincirinizi ele geçiren fazladan bir çıkış cihazı yoktur ve sistem değiştiğinde yeniden kurulacak hiçbir şey yoktur.</li>
<li><strong>macOS güncellemelerinden çok daha sorunsuz bir şekilde kurtulur.</strong> App Store dağıtımı ve korumalı alan oluşturma, desteklenen yollara göre oluşturulduğu ve mağaza aracılığıyla güncellendiği anlamına gelir; dolayısıyla işletim sistemi yükseltmesinin sizi sessiz bırakma olasılığı çok daha düşüktür.</li>
<li><strong>Uygulama başına ses artışı.</strong> Bu gerçek bir özellik farkıdır: SoundDial bir uygulamayı zorlayabilir <em>yukarıda</em> Sessiz kaynaklar için %100 — çok düşük düzeyde kaydedilen bir podcast, boğuk bir video görüşmesi. Background Music yalnızca zayıflar.</li>
<li><strong>Hacim profilleri.</strong> Uygulama başına bir dizi düzeyi ("Toplantı", "Müzik", "Oyun") kaydedin ve her seferinde kaydırıcıları sürüklemek yerine tek tıklamayla geçiş yapın.</li>
<li><strong>Otomatik eğilme.</strong> Seçilen bir kaynak oynatıldığında diğer uygulamaların ses düzeyini otomatik olarak düşürün; otomatik duraklatma fikrine daha yapılandırılabilir bir yaklaşım.</li>
<li><strong>Hızlı çıkış değiştirme</strong> menü çubuğuna eklenir ve uygulama başına sessize alınır.</li>
<li><strong>Gerçek destek.</strong> Bir şeyler ters gittiğinde birinin sorumlu olduğu ücretli bir üründür.</li>
</ul>

<h2>Dürüst karar</h2>
<blockquote>Ücretsiz istiyorsanız ve yalnızca uygulama başına temel birime ihtiyacınız varsa ve macOS güncellemelerinden sonra sorun giderme konusunda rahatsanız, Background Music sağlam bir seçimdir. Güçlendirme, profiller, eğilme, çıkış değiştirme, sanal sürücü kırılganlığının olmaması ve bozulduğunda birinin e-posta göndermesini istiyorsanız, SoundDial'nun değeri 14,99 €'dur.</blockquote>
<p>Birkaç somut eşitlik bozucu. Düzenli olarak çok sessiz kaynaklarla uğraşıyorsanız, yalnızca yükseltme fiyatı haklı çıkarır - Background Music, sesi kaynaktan daha yüksek hale getiremez. Her yıl yapılan "sesim güncellemede hayatta kalacak mı" kumarından korkuyorsanız, korumalı alan mağaza uygulaması bu kaygıyı ortadan kaldırır. Ayarla ve unut sahnelerini seviyorsanız profiller gerçek sürtünmeyi azaltır. Ve bu, bir abonelik değil, tek seferlik 14,99 €'dur; dolayısıyla karşılaştırma, ücretsiz sürücüyü sürdürmek için harcadığınız zamana karşı tek bir satın alma işlemidir.</p>
<p>Tam tersine, açık kaynaktan hoşlanan, kodu okumak isteyen ve çoğunlukla yalnızca bir uygulamayı reddeden bir tamirciyseniz paradan tasarruf edin. Her iki araç da aynı temel sorunu çözüyor; sağlamlık, özellik derinliği ve altlarında macOS değiştiğinde sizi kimin yakalayacağı açısından farklılık gösterirler.</p>

<p>Sanal sürücü kumarı olmadan uygulama başına hacim mi istiyorsunuz? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> — tek seferlik 14,99 €, korumalı alana alınmış, sürücüsüz, dahili güçlendirme, profiller ve otomatik azaltma özelliğine sahip.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "SoundSource 39$ Değerinde mi? Tek Seferlik Daha Ucuz Bir Mac Alternatifi",
    description: "SoundSource, yaklaşık 39 ABD doları tutarında güçlü bir Mac ses aracıdır, ancak yalnızca uygulama başına ses düzeyine ve artırmaya ihtiyacınız varsa bu aşırıya kaçar. İşte dürüst bir karşılaştırma ve tek seferlik 14,99 €'luk bir alternatif.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>Tam araç setine ihtiyacınız varsa SoundSource buna değer: uygulama başına ses seviyesi, uygulama başına 10 bantlı EQ, cihazlar arasında ses yönlendirme ve sistem çapında efektler. Ancak, esas olarak uygulama başına ses seviyesi, uygulama başına ses kapatma ve ses seviyesi artışı istiyorsanız, yaklaşık 39 $ civarında bu çok fazla. Bu daha dar iş için, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> tek seferlik maliyeti 14,99 €'dur.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource&#x27;nun Değeri 39 Dolar mı? Tek Seferlik Daha Ucuz Bir Mac Alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundSource gerçekte ne yapar?</h2>
<p>Rogue Amoeba'nun SoundSource'su gerçekten mükemmel bir yazılımdır ve bu konuda adil olmak önemlidir. Bu sadece bir ses mikseri değil. Size şunları sağlar:</p>
<ul>
<li><strong>Uygulama başına ses kontrolü</strong> Menü çubuğundan, çoğu insanın geldiği özellik.</li>
<li><strong>Tam 10 bantlı ekolayzır</strong> uygulama başına veya sistem genelinde ve ayrıca diğer ses efektlerini (Audio Unit eklentileri aracılığıyla) uygulayabilirsiniz.</li>
<li><strong>Çıkış/giriş yönlendirme</strong>Tek bir uygulamanın sistemin geri kalanından farklı bir çıkış cihazına gönderilmesi de dahil.</li>
<li><strong>Hızlı cihaz değiştirme</strong> ve kulaklığa özel EQ ön ayarları.</li>
</ul>
<p>Kulaklığınızdaki EQ'yu ayarlamak, bir uygulamanın sesini ayrı bir hoparlöre yönlendirmek veya Ses Birimi efektlerini yığınlamak isteyen bir podcast yayıncısı, yayıncı veya ses meraklısıysanız, SoundSource karşılığını alır. Burada hiçbir şey buna engel değil.</p>

<h2>Fiyat sorusu</h2>
<p>SoundSource, 39 ABD doları civarında ücretli, tek seferlik bir lisanstır (fiyat, sürüme ve promosyonlara göre değişir). Netflix anlamında yinelenen bir abonelik değil, ancak klasik ücretli uygulama modelini takip ediyor: büyük bir sürüm satın alıyorsunuz ve gelecekteki büyük yükseltmeler genellikle sonsuza kadar ücretsiz olmaktan ziyade indirimli ücretli yükseltmelerdir. Birkaç yıl boyunca bu, tek bir satın alma işleminden daha fazlasıdır. Pek çok Mac kullanıcısı için dürüst soru şu: Gerçekten dokunduğum tek şey uygulama başına ses kaydırıcılarıyken, bir yönlendirme ve EQ paketi için 39 dolar mı ödüyorum?</p>

<blockquote>SoundSource'yu açtıysanız ve yalnızca ses seviyesi kaydırıcılarını ve sessize alma düğmelerini kullandıysanız, bir çekmeceyi kullanmak için bir süite para ödüyorsunuz demektir.</blockquote>

<h2>Sorunun neden var olduğu</h2>
<p>İşte dürüst temel neden: macOS'da yerleşik uygulama başına ses karıştırıcısı yoktur. Windows'da yıllardır bir tane var, ancak Mac'da sistem birimi ya hep ya hiç. Bir video görüşmesi yüksek sesle devam ederken Spotify'yu sessiz tutmanın veya diğer her şeye dokunmadan bir uygulamayı sessize almanın Apple tarafından sağlanan bir yolu yoktur. Bu boşluk tam olarak SoundSource ve gibi araçların nedenidir. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> var. Bu gerçek bir işletim sistemi sınırlamasıdır; her iki uygulamanın da çözmek için icat ettiği bir sorun değildir.</p>

<h2>Daha hafif, daha ucuz bir seçeneğin uygun olduğu yer</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> profesyonel ses durumu yerine genel durum için oluşturulmuş, uygulama başına bir menü çubuğu ses karıştırıcısıdır. Şunları kapsar:</p>
<ul>
<li><strong>Uygulama başına bağımsız ses düzeyi</strong> — Toplantı tam düzeyde kalırken müziğinizi bırakın.</li>
<li><strong>Uygulama başına sessize alma</strong> — Mac'nun sesini kapatmadan bir uygulamayı susturun.</li>
<li><strong>Uygulama başına ses artırma</strong> - kaynak çok yumuşak olduğunda sessiz bir uygulamayı normal %100'ün üzerine çıkarın.</li>
<li><strong>Hacim profilleri</strong> — uygulama başına bir dizi seviye kaydedin (örneğin, "odaklanma" veya "çağrı" düzeni) ve tek tıklamayla geçiş yapın.</li>
<li><strong>Otomatik eğilme</strong> — konuşmaya başladığınızda veya seçilen bir uygulama oynatıldığında diğer uygulamaları otomatik olarak düşürür.</li>
<li><strong>Hızlı çıkış değiştirme</strong> — menü çubuğundan hoparlörler, kulaklıklar ve diğer cihazlar arasında geçiş yapın.</li>
</ul>
<p>bu <strong>€14,99 tek seferlik</strong>, Mac App Store aracılığıyla satılır, dolayısıyla korumalı alana alınır ve ayrı bir DMG, çekirdek uzantısı ve yüklenecek ses sürücüsü yoktur. Herhangi bir App Store uygulaması gibi indirirsiniz ve mağaza aracılığıyla güncellenir.</p>

<h2>Dürüst bir karşılaştırma</h2>
<p>Takas konusunda dikkatli olun. SoundSource, SoundDial'dan daha fazlasını yapar ve aşağıdakilerden herhangi biri sizin için önemliyse SoundSource daha iyi bir seçimdir:</p>
<ul>
<li>Gerçek bir uygulama başına veya sistem istiyorsunuz <strong>ekolayzır</strong> ve Ses Birimi efektleri.</li>
<li>Yapman gereken <strong>tek bir uygulamayı farklı bir çıkış cihazına yönlendirme</strong> diğer her şeyden.</li>
<li>güveniyorsun <strong>kulaklığa özel EQ ön ayarları</strong> ve ince taneli ses işleme.</li>
</ul>
<p>SoundDial, EQ veya uygulama başına cihaz yönlendirmesi yapmaz. Kasıtlı olarak daraltılmıştır. Bunun karşılığında size daha düşük bir fiyat, daha hafif bir ayak izi ve çoğu insanın gerçekte istediği şey için odaklanmış bir menü çubuğu arayüzü verir: her uygulamayı seçtiğiniz seviyede tutmak, yükseltme ve profilleri en üstte tutmak.</p>

<h2>Peki SoundSource buna değer mi?</h2>
<p>Evet, EQ ve yönlendirmeyi kullanacaksanız. Saygın bir geliştiricinin sunduğu olgun, iyi desteklenen bir yazılımdır ve fiyatı gerçek yeteneği yansıtır. Ancak "buna değer" neye dokunacağınıza bağlıdır. Uygulamayı açarsanız ve yalnızca ses seviyesi kaydırıcılarını ayarlarsanız, bir uygulamayı sessize alırsanız veya sessiz bir uygulamanın daha yüksek ses çıkarmasını istiyorsanız, temel mikser ihtiyaçları için premium paket parası ödüyorsunuz demektir. Bu durumda, tek seferlik 14,99 €'luk bir araç daha mantıklıdır ve ihtiyaçlarınız EQ ve yönlendirmeye doğru büyürse daha sonra istediğiniz zaman SoundSource'ya geçebilirsiniz.</p>

<p>Eğer uygulama başına ses seviyesi, artırma, sessize alma, profiller ve otomatik azaltma sizin peşindeyseniz, <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> — Bir kerelik 14,99 €, abonelik yok, sürücü yok.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Mac'da Çok mu Gürültülü? Her Şeyi Kapatmadan Bir Tarayıcıyı Kapatın",
    description: "Chrome, Mac'daki diğer uygulamalarınızdan daha mı yüksek ses çıkarıyor? Yerleşik düzeltmeleri (sekme başına sessize alma, site ses ayarları) ve Chrome'nun diğer her şeyden daha sessiz kalması için uygulama başına gerçek ses düzeyini nasıl ayarlayacağınızı öğrenin.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS'nun yerleşik uygulama başına ses düzeyi yoktur, bu nedenle diğer uygulamaları tam ses seviyesinde bırakırken Chrome'yu yerel olarak kapatamazsınız. En hızlı ücretsiz düzeltmeleriniz gürültülü sekmeleri susturmak, her video oynatıcının içindeki ses seviyesini azaltmak veya Chrome ayarlarında site başına sesi engellemektir. Gerçek, kalıcı, yalnızca Chrome ses düzeyi için uygulama başına bir karıştırıcıya ihtiyacınız vardır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Mac&#x27;da Çok mu Gürültülü? Her Şeyi Kapatmadan Bir Tarayıcıyı Kapatın" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden Chrome her şeyden daha yüksek ses çıkarıyor?</h2>
<p>Chrome'nun tasarımı gereği mutlaka "daha yüksek" olması gerekmez; Chrome, sesi birçok bağımsız kaynaktan yönlendirir: YouTube, otomatik oynatılan reklamlar, video görüşmeleri, arka plan müziği sekmeleri ve her biri kendi ses yüksekliğini sunan web uygulamaları. Bazı siteler sıcak bir şekilde yönetilir, reklamlar herkesin bildiği gibi gürültülüdür ve Chrome hepsini sisteminizin tam çıkış düzeyinde oynatır. Bu arada müzik uygulamanız veya aramanız daha sessiz olabilir, bu nedenle Chrome miksajda hakimdir.</p>
<p>Windows'da Ses Düzeyi Karıştırıcısını açıp Chrome kaydırıcısını aşağı sürüklemeniz yeterlidir. macOS bu özelliği içermiyor. Sistem ses seviyesi tuşu her şeyi aynı anda kontrol eder; dolayısıyla Chrome'yu kıstığınızda müziğiniz, bildirimleriniz ve çağrılarınız da azalır. Temel sınırlama budur ve bu bir işletim sistemi açığıdır, yanlış yaptığınız bir şey değildir.</p>

<h2>Hiçbir maliyeti olmayan yerleşik düzeltmeler</h2>
<p>Herhangi bir şey kurmadan önce bunları deneyin. Size tek bir Chrome sesli arama vermezler, ancak çoğu "tek sesli sekme" sorununu çözerler.</p>
<ul>
<li><strong>Gürültülü bir sekmeyi sessize alın.</strong> Sekmeyi sağ tıklayın ve "Siteyi sessize al"ı seçin veya ses çalan bir sekmede görünen küçük hoparlör simgesini tıklayın. Bu, Chrome'nun geri kalanına dokunmadan o sekmeyi tamamen susturur.</li>
<li><strong>Müzikçaların içindeki ses seviyesini azaltın.</strong> En güvenilir yöntem: YouTube, Netflix veya oynatılan her şeyin içinde ses düzeyi kaydırıcısını aşağı doğru sürükleyin. Web oynatıcıları site başına kendi seviyelerini hatırlar, böylece daha sessiz bir YouTube bir dahaki sefere sessiz kalır.</li>
<li><strong>Site başına sesi engelleyin.</strong> Git <em>chrome://ayarlar/içerik/ses</em>. Siteleri "izin verildi" ve "sessizleştirildi" arasında değiştirebilir ve belirli alan adlarını sessiz listesine ekleyebilirsiniz. Otomatik oynatılan siteleri kalıcı olarak susturmak için idealdir.</li>
<li><strong>Otomatik oynatılan reklamları sonlandırın.</strong> Reklam sesi genellikle asıl suçludur. İçerik engelleyici veya siz izlemeye hazır olana kadar sekmenin sesini kapatmak, çoğu sürpriz ses seviyesini ortadan kaldırır.</li>
</ul>
<blockquote>Bunlar gerçekten yararlı ve ücretsizdir. Ancak neyi yapamadıklarına dikkat edin: tek tek sekmeleri sessize alıyor veya yönetiyorlar. Hiçbiri "benim müziğim %100'de kalırken Chrome'nun tamamını %40'ta tut" demenize izin vermiyor.</blockquote>

<h2>Dürüst sınırlama: macOS'da uygulama başına hacim yok</h2>
<p>Gerçek hedefiniz "Chrome her zaman diğer uygulamalarımdan daha sessiz olmalı" ise yerleşik araçlar yetersiz kalır. Sekme başına sessize alma ya hep ya hiçtir. Bir site onları hatırlamadığında ve sürekli olarak yeniden yapılması gerektiğinde oynatıcı kaydırıcıları sıfırlanır. Ve sistem birimi her şeyi birlikte hareket ettirir.</p>
<p>Bu gerçek bir macOS sınırlamasıdır, yapılandırabileceğiniz bir hata değildir. Apple hiçbir zaman Windows tarzı bir ses karıştırıcısı göndermedi. Özellikle Chrome için kalıcı, bağımsız bir ses seviyesi elde etmenin tek yolu, uygulamalarınız ile çıkış cihazınız arasında yer alan ve uygulama başına kazanç uygulayan bir üçüncü taraf uygulamasıdır.</p>

<h2>Chrome için uygulama başına gerçek bir ses düzeyi ayarlayın</h2>
<p>Gibi bir menü çubuğu karıştırıcısı <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS'ya eksik olan uygulama başına ses seviyesi kontrolünü verir. O anda ses çalan tüm uygulamaları listeler ve her birine kendi kaydırıcısını verir; böylece Chrome'yu rahat bir seviyeye çekebilir ve Spotify'yu, çağrılarınızı ve sistem seslerini tam olarak oldukları yerde bırakabilirsiniz.</p>
<p>Gürültülü bir Chrome'yu bununla nasıl evcilleştireceğiniz aşağıda açıklanmıştır:</p>
<ul>
<li>Menü çubuğu karıştırıcısını açın ve aktif uygulamalar listesinde Chrome'yu bulun.</li>
<li>Chrome'nun kaydırıcısını örneğin yüzde 40 ila 50'ye kadar aşağı sürükleyin. Diğer uygulamalara dokunulmaz.</li>
<li>Belirli bir uygulama da varsa <em>sessiz</em> bunun yerine fısıldayan bir arama uygulaması kullanın <a href="https://apps.apple.com/app/id6772792641">uygulama başına ses artırma</a> Chrome'yu düşük tutarken yüzde 100'ün üzerine çıkarmak.</li>
<li>Sekmeleri kapatmadan sessizliğe ihtiyacınız olduğunda uygulama başına sessize alma özelliğiyle Chrome'nun sesini anında kapatın.</li>
</ul>
<p>Seviye uygulamaya bağlı olduğundan sabit kalır. Chrome, sekmelerde, sitelerde ve yeniden başlatmalarda seçtiğiniz ses seviyesinde kalır; her yeni video açtığınızda oynatıcı kaydırıcılarını yeniden sürüklemeye gerek kalmaz.</p>

<h2>Daha da ileri gitme: profiller, eğilme ve çıkış değiştirme</h2>
<p>Uygulama başına kontrole sahip olduğunuzda, birkaç ekstra, onu saklamaya değer hale getirir. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ses seviyesinden tasarruf etmenizi sağlar <strong>profiller</strong> — örneğin Chrome'nun sessiz ve müziğin yüksek olduğu bir "odaklanma" profili ve Chrome'nun hakim olduğu bir "izleme" profili — ve bunlar arasında tek tıklamayla geçiş yapın. Otomatik azaltma, seçilen bir kaynak başladığında diğer uygulamaları otomatik olarak kapatabilir (bir aramanın hiçbir zaman yüksek sesli bir tarayıcı sekmesinin altına gömülmemesi açısından kullanışlıdır). Hızlı çıkış değiştirme özelliği, Sistem Ayarlarına dalmadan hoparlörler, kulaklıklar ve diğer cihazlar arasında geçiş yapmanızı sağlar.</p>
<p>Mac App Store'da tek seferlik 14,99 €'luk bir satın alma söz konusudur; abonelik yok, kurulacak sürücü yok, DMG veya çekirdek uzantısı yok. Sandbox'a alınmış ve App Store aracılığıyla dağıtılmış olduğundan, kabataslak ses sürücüsünün güvendiği eski mikser araçlarını yüklemesini gerektirmez.</p>

<h2>Hangi düzeltmeyi kullanmalısınız?</h2>
<p>Ara sıra tek bir iğrenç sekmeniz varsa, Chrome'nun yerleşik sessiz özelliğini ve site ses ayarlarını kullanın; bunlar ücretsizdir ve çalışır. Kendinizi sürekli olarak, diğer her şey yerinde kalırken Chrome'nun basitçe reddedilmesini diliyorsanız, macOS'nun açık bıraktığı tam boşluk budur ve uygulama başına mikser temiz çözümdür.</p>

<p>Chrome'nun müziğinizin veya çağrılarınızın sesini kapatmadan kalıcı olarak daha sessiz olmasını mı istiyorsunuz? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> ve her uygulamaya kendi ses düzeyi kaydırıcısını verin.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "WhatsApp ve Telegram Bildirimi Mac'da Çok Yüksek Ses mi Çıkarıyor? Onları Geri Çevir",
    description: "Mac cihazınızda çok yüksek olan WhatsApp ve Telegram masaüstü bildirim seslerini düzeltin. Her uygulamanın yerleşik ayarlarıyla başlayın, ardından macOS size uygulama başına kontrol vermediğinde tüm uygulamayı azaltın veya sessize alın.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>Her uygulamanın içinden başlayın: WhatsApp ve Telegram, bildirim seslerini kendi ayarlarında kapatmanıza veya değiştirmenize olanak tanır; bu, en temiz çözümdür. Ancak macOS'nun uygulama başına bildirim ses düzeyi kaydırıcısı yoktur; bu nedenle, uygulamanın kendi sesi hala çok yüksekse, tek gerçek yardımcınız, uygulama başına bir ses düzeyi aracıyla tüm uygulamanın sesini azaltmak veya kapatmaktır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — WhatsApp ve Telegram Bildirimi Mac&#x27;da Çok Yüksek Ses mi Çıkarıyor? Onları Geri Çevir" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Öncelikle uygulamanın kendi bildirim ayarlarını kullanın</h2>

<p>Hem WhatsApp hem de Telegram kendi ses kontrollerini sunar ve her zaman başlamanız gereken yer burasıdır. Bu en hassas düzeltmedir ve Mac cihazınızdaki başka hiçbir şeye dokunmaz.</p>

<p><strong>WhatsApp Masaüstü:</strong> WhatsApp'yu açın, tıklayın <em>Ayarlar</em> (dişli simgesi), ardından <em>Bildirimler</em>. Kapatabilirsiniz <em>Sesler</em> Tamamen banner'ları tutarken veya bildirim önizlemelerini devre dışı bırakın. WhatsApp bir ses düzeyi kaydırıcısı sunmuyor, bu nedenle esas olarak sesin kendisi için açık veya kapalıdır.</p>

<p><strong>Telegram Masaüstü:</strong> Açık <em>Ayarlar → Bildirimler ve Sesler</em>. Telegram burada daha esnektir. Bildirim sesini genel olarak kapatabilir, bireysel sohbetleri sessize alabilir veya özel (daha sessiz) tonlar ayarlayabilirsiniz. Ayrıca tek bir gürültülü grubu açıp seçerek susturabilirsiniz. <em>Sessiz</em>. Çoğu insan için, en gürültülü sohbetleri susturmak, her yerde susmadan sorunu çözer.</p>

<p>Ses iyi ancak çok sıksa, uygulama genelinde sesi kapatmak yerine en sık tetiklenen belirli sohbetleri veya kanalları sessize alın. Bu, önemli uyarıların duyulmasını sağlar.</p>

<h2>macOS Sistem Ayarlarında bildirim seslerini kapatın</h2>

<p>macOS, bazı durumlarda uygulamayı geçersiz kılan ikinci bir kontrol katmanına sahiptir. Git <em>Sistem Ayarları → Bildirimler</em>, listeden WhatsApp veya Telegram seçeneğini seçin ve kapatın <em>Bildirimler için ses çal</em>. Bu, banner'ları göstermeye devam ederken o uygulamanın uyarı sesini susturur.</p>

<p>Uygulamanın yalnızca bildirimlerde sessiz kalmasını istiyorsanız ve diğer seslerle (çağrılar, video) ilgilenmiyorsanız, bu gerçekten iyi bir çözümdür. Uygulamanın kendi ayarlarıyla birleştirildiğinde, "ping rahatsız edici" şikayetlerinin çoğunu kapsar.</p>

<h2>Gerçek sınırlama: macOS'nun uygulama başına hacmi yok</h2>

<p>İşte dürüst kısım. Yukarıdaki adımlar açma/kapama anahtarlarıdır. Yapamayacakları şey WhatsApp veya Telegram'yu çevirmek <em>aşağı</em> diğer her şeyi tam ses seviyesinde tutarken, örneğin %40'a kadar. Windows yıllardır uygulama başına ses karıştırıcıya sahipti. macOS basitçe bir tane içermez ve onu ekleyen hiçbir gizli ayar veya Terminal komutu yoktur.</p>

<p>Bu, sorunun özellikle bildirim zili değil de uygulamanın tamamının çok yüksek olması durumunda önemlidir:</p>

<ul>
<li>WhatsApp veya Telegram <strong>sesli ve görüntülü aramalar</strong> Müziğinize veya bir toplantıya göre tam ses seviyesinde patlayan ses</li>
<li>Tamamen kapalı değil, daha düşük bir seviyede tutmak istediğiniz bir bildirim sesi</li>
<li>Dinlediğiniz her şeyin çok üstüne çıkan zil sesleri</li>
<li>Siz başka bir şeye odaklanırken uygulamanın sesli ama sessizce arka planda olmasını istemek</li>
</ul>

<p>Bunların hiçbiri yerleşik araçlarla çözülemez, çünkü bunlar bir seviye değil, yalnızca sessizleştirme sunar. Bu boşluk gerçek bir macOS sınırlamasıdır, kaçırdığınız bir şey değildir.</p>

<h2>SoundDial ile uygulama başına ses düzeyini ayarlayın</h2>

<p>Tek bir uygulamayı kapatmak yerine aslında kapatmak için uygulama başına bir ses karıştırıcısına ihtiyacınız vardır. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS'ya hiçbir zaman birlikte verilmeyen uygulama başına ses seviyesi kontrolünü sağlayan bir menü çubuğu uygulamasıdır. Şu anda ses çalan tüm uygulamaları listeler ve her birine kendi kaydırıcısını verir.</p>

<p>Bu özel sorun için:</p>

<ul>
<li>Açık <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menü çubuğundan seçin ve listede WhatsApp veya Telegram'yu bulun.</li>
<li>Müziğinize, tarayıcınıza veya video görüşmenize dokunmadan kaydırıcıyı rahat bir seviyeye, örneğin %30-40'a sürükleyin.</li>
<li>Uygulama başına kullanımı kullanın <strong>sessiz</strong> Bir arama veya toplantı sırasında yalnızca o uygulamayı anında susturmak ve daha sonra ayarları karıştırmadan sesi açmak için düğmeyi kullanın.</li>
<li>Tam tersine, çok yumuşak, sessiz bir uygulamaya ihtiyacınız olursa, uygulama başına <strong>artırmak</strong> %100'ün üzerine çıkarabilir.</li>
</ul>

<p>SoundDial, uygulama başına bir seviye belirlediğinden, yerleşik seçeneklerin sizi zorladığı ya hep ya hiç seçeneği yerine, bildirim zillerini ve çağrı sesini duyulabilir ancak orantılı tutar. Ayrıca kaydedebilirsiniz <strong>hacim profilleri</strong>, yani sohbet uygulamalarını düşük tutan bir "odaklanma" kurulumu bir tık uzağınızda.</p>

<blockquote>Dürüst bir uyarı: SoundDial'da bir uygulamanın genel ses seviyesini düşürmek aynı zamanda bildirim zillerini de azaltır, çünkü macOS için bunlar aynı uygulamanın sesidir. Bildirimlerin tamamen kapalı olmasını ancak çağrıların tam ses seviyesinde olmasını istiyorsanız uygulamanın kendi sessize alma özelliğini ve zil sesi için Sistem Ayarlarını kullanın ve genel seviyeyi ayarlamak için SoundDial'yu ayırın.</blockquote>

<p>SoundDial, Mac App Store'da tek seferlik 14,99 €'luk bir satın alma işlemidir, sandbox'a alınır, abonelik yoktur, çekirdek sürücüsü yoktur ve dışarıdan yüklenecek DMG yoktur. Gerçekten istediğiniz düzeltmenin (bir uygulamayı kapatmak yerine kapatmanın) macOS'nun kendisinin yapabileceği bir şey olmadığı durumlarda pratik cevap budur.</p>

<h2>Hangi düzeltmeyi kullanmalısınız?</h2>

<p>Yukarıdan aşağıya doğru çalışın. Önce uygulamanın kendi bildirim ayarlarını deneyin, ardından zil sesini kapatmak için macOS Sistem Ayarlarını deneyin. Gerçekten istediğiniz şey WhatsApp veya Telegram'yu belirli bir ses seviyesine indirmek veya çağrılar sırasında yalnızca o uygulamayı susturmaksa, uygulama başına mikserin yerini kazandığı yer burasıdır.</p>

<p>Sohbet uygulamalarınız için tam patlama ve tam sessizlik arasında seçim yapmaktan bıktınız mı? <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> ve her uygulamaya kendi ses seviyesi kadranını verin.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Oyun Sesi Mac'da Discord'dan Daha Yüksek mi? Oyun ve Ses Seviyesi Nasıl Dengelenir?",
    description: "Oyununuz Mac'daki Discord sesli sohbetini bastırıyor ve yerleşik ses karıştırıcısı yok. İşte macOS'nun Windows tarzı uygulama başına ses seviyesinden neden yoksun olduğu ve sesi yüksek tutarken oyunu nasıl kısacağınız.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS'da yerleşik uygulama başına ses karıştırıcısı bulunmadığından, Discord'nun yüksek sesini korurken oyununuzu yerel olarak sınırlayamazsınız. Düzeltme, uygulama başına bağımsız ses düzeyini ayarlayan bir menü çubuğu uygulamasıdır. Oyunu %40-50'ye düşürün, sesli sohbeti %100'de bırakın ve her ikisi de oyun içi kaydırıcılara dokunmadan dengede kalsın.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Oyun Sesi Discord&#x27;dan Daha mı Yüksek? Oyun ve Ses Seviyesi Nasıl Dengelenir?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Bu neden Mac'da oluyor (Windows'da değil)</h2>

<p>Windows'da oyun oynadıysanız Ses Düzeyi Karıştırıcısını bilirsiniz: Hoparlör simgesine sağ tıklayın; çalışan her uygulamanın kendi kaydırıcısı olur. Oyunu bırakırsınız, Discord'yu yükseltirsiniz, işlem tamamdır. macOS bu özelliği hiçbir zaman sunmadı. Bir ana çıkış birimi ve sistem ayarlarında gömülü bir avuç uygulama düzeyinde geçiş bulunur, ancak isteğe bağlı uygulamalar için uygulama başına düzey kontrolü yoktur.</p>

<p>Yani bir oyunun karışımı sıcak bir şekilde tamamlandığında patlamalar, müzik ve silah sesleri arkadaşlarınızın sesleriyle aynı çıkış seviyesinde duyulur. Bazı oyunlar bir ana ses düzeyi kaydırıcısını ortaya çıkarır, ancak birçoğu yeterince düşmüyor ve birçok başlatıcı, tarayıcı ve bağımsız başlık hiçbir şekilde kullanışlı bir kontrol sunmuyor. Discord'nun kendisi, onlarla rekabet eden oyunun değil, yalnızca gelen kullanıcıların ses düzeyini ayarlamanıza olanak tanır.</p>

<p>Dürüst olmak gerekirse bu, işletim sistemi düzeyinde bir boşluktur, değiştirebileceğiniz bir hata değildir. Apple'ın ses yığını her şeyi tek bir çıkış akışına yönlendirir ve bunu uygulamaya göre bölecek birinci taraf bir kullanıcı arayüzü yoktur. Bu nedenle uygulamalarınız ile çıktı aygıtınız arasında yer alan bir üçüncü taraf araca ihtiyacınız var.</p>

<h2>Manuel geçici çözümler (ve neden yetersiz kaldıkları)</h2>

<p>Yazılıma başvurmadan önce ücretsiz seçenekleri ve bunların sınırlarını bilmekte fayda var:</p>

<ul>
<li><strong>Oyunun uygulama içi sesini azaltın.</strong> Oyunun yeterince ince adımlara sahip bir ana kaydırıcısı varsa çalışır. Birçoğu %10'luk artışlarla durur veya müzik ve efektleri bir araya toplar, böylece yalnızca yüksek sesli kısımları evcilleştiremezsiniz.</li>
<li><strong>Discord'da arkadaşlarınızı yetiştirin.</strong> Her kullanıcıya sağ tıklayın ve ses düzeyini artırın. Bu biraz yardımcı oluyor ama en üst seviyeye çıkıyor ve aslında sorun olan oyuna dokunmuyor.</li>
<li><strong>Donanım ses düğmesi olan kulaklıklar kullanın.</strong> Oyun ve ses arasındaki dengeyi değil, yalnızca genel seviyeyi değiştirir.</li>
<li><strong>Sesi sanal bir cihaz üzerinden yönlendirin.</strong> Loopback veya BlackHole gibi araçlar akışları bölebilir, ancak bunlar profesyonelleri hedef alır, gerçek kurulum gerektirir ve "oyunu daha sessiz hale getirme" konusunda aşırıya kaçarlar.</li>
</ul>

<p>Bunların hiçbiri size Windows kullanıcılarının hafife aldığı tek şeyi vermez: uygulama başına hızlı bir kaydırıcı. İşte boşluk <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> doldurmak için inşa edilmiştir.</p>

<h2>Doğrudan düzeltme: uygulama başına bağımsız ses düzeyi</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS için uygulama başına bir menü çubuğu ses karıştırıcısıdır. O anda ses çalan her uygulamayı gösterir ve her birine tıpkı Windows Volume Mixer gibi kendi kaydırıcısını verir. Oyun-ses sorunu için iş akışı kısadır:</p>

<ul>
<li>Oyun ve Discord çalışırken menü çubuğunuzdaki SoundDial simgesine tıklayın.</li>
<li>Listede oyunu bulun ve kaydırıcısını yaklaşık %40-50'ye çekin.</li>
<li>Discord'yu (veya Slack, Zoom veya ses uygulamanızı) %100'de bırakın.</li>
<li>Oyun sırasında anında ayarlama yapın; gürültülü bir çatışmada oyunu daha da aşağıya doğru itin, sessiz keşif sırasında geri dönün.</li>
</ul>

<p>Seviyeler uygulama başına olduğundan, onları bir kez ayarlarsınız ve kalıcı olurlar. Kendi karışımı ne kadar sıcak olursa olsun oyun kapalı kalır ve arkadaşlarınız oyun boyunca açıkça duyulabilir.</p>

<h2>Kurulumunuzun geri kalanı için yükseltme, sessize alma ve profiller</h2>

<p>Aynı araç, sesli oyunla birlikte gelen bitişik rahatsızlıkları da kapsar:</p>

<ul>
<li><strong>Uygulama başına artış.</strong> Bir takım arkadaşınızın mikrofonu Discord'nun maksimum seviyesinde bile sessizse ses uygulamasına basabilirsiniz. <em>yukarıda</em> %100 yani gömülmek yerine oyunu kesiyor.</li>
<li><strong>Uygulama başına sessize alma.</strong> Arka plandaki bir tarayıcı sekmesini veya müzik uygulamasını, alt sekmeye basmadan veya oynatmayı sonlandırmadan anında sessize alın.</li>
<li><strong>Hacim profilleri.</strong> Oyunun %45'inde ve Discord'nun güçlendirilmiş olduğu bir "oyun" profili kaydedin, ardından tek tıklamayla günlük kullanım için "normal" profile geri dönün; her oturumda kaydırıcıları yeniden sürüklemeye gerek yok.</li>
<li><strong>Otomatik eğilme.</strong> Birisi konuştuğunda oyunun otomatik olarak azalmasını sağlayın, böylece açıklamalar her zaman aksiyonun en üstünde yer alır.</li>
<li><strong>Hızlı çıkış değiştirme.</strong> Sistem Ayarlarına dalmadan aynı menüden kulaklıklar ve hoparlörler arasında geçiş yapın.</li>
</ul>

<blockquote><p>Zihinsel model basittir: Windows'nun yıllardır yaptığı gibi, uygulama başına bir kaydırıcı. macOS bunu asla sağlamadı, bu nedenle küçük bir yardımcı program eşitliği geri yükler.</p></blockquote>

<h2>Dürüst olmak gerekirse ne beklenir</h2>

<p>Uygulama başına bir karıştırıcı, denge sorununu temiz bir şekilde çözer, ancak beklentileri doğru şekilde belirler. Yazılım çıkış seviyelerini kontrol eder; kendi sesinde kötü bir şekilde hakim olunan bir oyunu düzeltemez ve hiç yakalanmamış bir sinyali yükseltemez (gerçekten bozuk bir mikrofonun yine de donanım onarımına ihtiyacı vardır). Güçlendirme gerçek kazanç sağlar, bu nedenle sessiz bir kaynağı %100'ün çok ötesine itmek, tıpkı herhangi bir amplifikatörü çok yükseğe açmak gibi distorsiyona neden olabilir. Ancak makul bir şekilde kullanıldığında, çoğu kurulumun ihtiyaç duyduğu tek şey mütevazı bir oyun sınırı ve küçük bir ses yükseltmedir.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> korumalı alana alınır ve doğrudan Mac App Store'dan yüklenir; sürücü yok, çekirdek uzantısı yok, güvenilecek DMG yok. Abonelik olmadan tek seferlik 14,99 €'dur ve 28 dilde macOS ses seviyesi kontrolünü destekler.</p>

<p>Oyun içi kaydırıcılarınızla kavga etmeyi bırakın. Tut <a href="https://apps.apple.com/app/id6772792641">Mac App Store üzerinde SoundDial</a>, oyunu kısın, ekibinizin sesini yüksek tutun ve son olarak Windows tarzı ses mikseri macOS'nun göndermeyi unuttuğunu alın.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Harici Monitör Hoparlörleri Çok Yüksek Ses Çıkarıyor veya Mac'da Sıkışmış mı? HDMI/DisplayPort Sesini Düzeltme",
    description: "Mac cihazınızın ses seviyesi tuşları neden HDMI veya DisplayPort monitör hoparlörlerini kontrol etmiyor ve monitör OSD'si, Ses MIDI Kurulumu ve daha iyi çıkış yönlendirmesi kullanılarak çok yüksek, sıkışmış veya ayarlanamayan sesin nasıl düzeltileceği.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Mac cihazınızın ses seviyesi tuşları gri renkte görünüyorsa veya HDMI veya DisplayPort üzerinden bağlanan bir monitör için hiçbir şey yapmıyorsa bu genellikle bir hata değildir. Dijital ekran sesi genellikle sabit bir seviyede gönderilir ve monitörün kendi donanımı ses seviyesini kontrol eder. Çözüm, ekranı ayarlamak, çıkışı yeniden yönlendirmek veya farklı bir ses cihazı kullanmaktır.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Harici Monitör Hoparlörleri Çok Yüksek Ses Çıkarıyor veya Mac&#x27;da Sıkışmış mı? HDMI/DisplayPort Sesini Düzeltme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mac ses seviyesi tuşları neden HDMI/DisplayPort üzerinden çalışmayı bırakıyor?</h2>

<p>HDMI ve DisplayPort, sesi dijital akış olarak taşır. Çoğu monitör bu akışı sabit bir çıkış seviyesinde alır ve ses yüksekliğini kaynak cihazda değil ekranın kendisinde kontrol etmenizi bekler. macOS bunu algıladığında ekrandaki ses düzeyi kaydırıcısını devre dışı bırakır ve F11/F12 tuşlarını grileştirerek, bu tuşlara bastığınızda "giriş yok" simgesini gösterir.</p>

<p>Bu bir donanım ve protokol sınırlamasıdır; Mac üzerindeki yazılımın geçersiz kılabileceği bir şey değildir. Ses hiçbir zaman macOS'nun onu zayıflatmasına izin verilen bir aşamadan geçmez. Hiçbir uygulama, sürücü veya ayar, ekranın tam düzeyde almakta ısrar ettiği bir akışa ses düzeyi kontrolü ekleyemez. Bu konuda dürüst olmak sizi saatlerce yanlış çözümü kovalamaktan kurtarır.</p>

<h2>Çözüm 1: Monitörün kendi kontrollerini (OSD) kullanma</h2>

<p>Çoğu insan için gerçek çözüm budur. Yerleşik hoparlörleri olan hemen hemen her monitörde, panelin arkasında veya altında bulunan fiziksel düğmeler veya joystick ile yönlendirilen bir ekran menüsü bulunur.</p>

<ul>
<li>Monitörün ayarlarını açmak için OSD/menü düğmesine basın.</li>
<li>Ses veya Ses bölümünü arayın.</li>
<li>Buradaki seviyeyi düşürün; bu aslında HDMI/DP üzerinden çalışan kontroldür.</li>
</ul>

<p>Bazı monitörler ayrıca OSD'yi macOS'dan çalıştırabilmeniz için yardımcı bir uygulama veya DDC/CI desteği sunar. DDC konuşan üçüncü taraf yardımcı programlar, Mac cihazınızın ses seviyesi tuşlarını monitörün donanım ses seviyesiyle eşleyebilir; panel düğmelerine ulaşmaktan nefret ediyorsanız denemeye değer.</p>

<h2>Düzeltme 2: Ses MIDI Ayarını Kontrol Edin</h2>

<p>Açık <strong>Ses MIDI Kurulumu</strong> (/Uygulamalar/Yardımcı Programlar içinde). Cihaz listesinden monitörünüzü seçin. Sağda bir ses düzeyi kaydırıcısı görünürse onu aşağı sürükleyin; bazen menü çubuğu tuşları devre dışı bırakıldığında bile ekran yazılım tarafından kontrol edilebilen bir seviye gösterir. Kaydırıcı eksikse veya gri renkteyse, ekran yalnızca sabit düzeyli sesi kabul ettiğini doğruluyordur ve OSD'ye geri dönmeniz gerekir.</p>

<p>Buradayken doğru çıkış cihazının seçildiğini onaylayın. Sesin, bağlı olduğunu unuttuğunuz bir monitöre sessizce yönlendirilmesi yaygın bir durumdur; bu, ani yüksek sesin veya sesin yokluğunu açıklar.</p>

<h2>Çözüm 3: Sesi gerçekten kontrol edebileceğiniz bir yere yönlendirin</h2>

<p>Monitörünüzün hoparlörleri zaten vasatsa (çoğu öyledir) ve ses düzeyi kontrolü hantalsa, en temiz çözüm bunları kullanmayı bırakmaktır:</p>

<ul>
<li>Varsa monitörün kulaklık çıkış jakına hoparlör veya kulaklık takın; bu analog çıkışın ses düzeyi genellikle ekrandan kontrol edilebilir.</li>
<li>USB DAC, USB hoparlörler veya Bluetooth çıkışı kullanın. USB ve analog çıkışlar macOS'ya tam yazılım ses kontrolü sağlar, böylece tuşlarınız tekrar normal şekilde çalışır.</li>
<li>Hızlı sesler için Mac'nuzun yerleşik hoparlörlerini seçin ve monitörü yalnızca video için tutun.</li>
</ul>

<p>macOS'nun gerçekten zayıflatabileceği bir çıkışa ulaştığınızda, sistem ses seviyesi tuşları harekete geçer ve monitörün kaba OSD adımları arasında geçiş yapmak yerine hassas kontrolü yeniden kazanırsınız.</p>

<h2>Çıkış çalıştıktan sonra uygulama başına ses seviyesini kontrol edin</h2>

<p>Kontrol edilebilir bir çıkışın geri alınması "çok yüksek/sıkışma" sorununu çözer. Ancak macOS size yine de her şey için yalnızca tek bir ana cilt verir. Mac'da yerleşik uygulama başına karıştırıcı yok - Windows'da yıllardır bir tane var, ancak Apple hiçbir zaman eşdeğerini göndermedi. Yani yüksek sesli bir video, bir oyun ve sessiz bir arama aynı kaydırıcıyı paylaşır.</p>

<p>İşte boşluk <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> doldurur. Her uygulamaya kendi bağımsız ses seviyesini veren bir menü çubuğu karıştırıcısıdır; böylece müziğinize dokunmadan bir tarayıcı sekmesini kapatabilir, bir uygulamayı anında sessize alabilir veya sessiz bir uygulamayı normal tavanının üzerine yükseltebilirsiniz. Farklı kurulumlar için ses seviyesi profillerini kaydedebilir ve menü çubuğundan hızlı bir şekilde çıkışlar arasında geçiş yapabilirsiniz.</p>

<p>Kapsam hakkında net olmak gerekirse: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS üzerinden akan ses için yazılım ses düzeyini kontrol eder. HDMI üzerinden sistem ses düzeyini göz ardı eden bir monitörü geçersiz kılamaz; bu, ekranın sabit düzey davranışıdır ve yalnızca OSD veya farklı bir çıkış bunu düzeltir. Kontrol edilebilir bir çıktıya ulaştığınızda, uygulamanın parladığı yer uygulama başına kontroldür.</p>

<h2>Hızlı kontrol listesi</h2>

<ul>
<li>HDMI/DP üzerinden tuşlar gri mi görünüyor? Monitörün OSD ses düzeyini kullanın; bu beklenen davranıştır.</li>
<li>Gizli bir yazılım kaydırıcısı için Ses MIDI Kurulumunu kontrol edin.</li>
<li>Doğru çıkış cihazının seçildiğini onaylayın.</li>
<li>Gerçek kontrol için sesi kulaklık çıkışına, USB'ye veya Bluetooth'ya yönlendirin.</li>
<li>Daha sonra bireysel uygulamaları dengelemek için uygulama başına bir karıştırıcı kullanın.</li>
</ul>

<p>Çıktınız kontrol altına alındıktan sonra <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bir bakış. Bu, Mac App Store'dan tek seferlik 14,99 €'luk bir satın almadır - abonelik yok, sürücü yok, DMG yok - ve sonunda macOS'ya gerçek bir uygulama başına ses karıştırıcı getiriyor.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "USB DAC Ses Düzeyi Mac'da Ayarlanmıyor mu? Yazılım Ses Seviyesi Kontrolünü Geri Alın",
    description: "macOS, birçok USB DAC için ses düzeyi kaydırıcısını neden grileştiriyor, bunun ne anlama geldiği ve ses kalitesine zarar vermeden Mac cihazınızda çalışan yazılım ses düzeyi kontrolünü nasıl geri alacağınız.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>USB DAC cihazınızın ses düzeyi kaydırıcısı Mac'da gri renkte görünüyorsa bu genellikle bir hata değildir. macOS, DAC kontrol edilebilir bir ses düzeyine sahip olmadığını bildirdiğinde DAC'nun kendi donanım düğmesini kullanmanızı bekleyerek yazılım ses düzeyini devre dışı bırakır. Yazılım sesini geri almak için uygulama düzeyinde bir zayıflatıcı kullanın: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC Ses Düzeyi Mac&#x27;da Ayarlanmıyor mu? Yazılım Ses Seviyesi Kontrolünü Geri Alın" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS neden bazı USB DAC'ların sesini grileştiriyor?</h2>

<p>Bir USB ses cihazını taktığınızda macOS, USB Ses Sınıfı (UAC) protokolü üzerinden ne yapabileceğini sorar. Bu el sıkışmanın bir kısmı, ses seviyesi kontrolü de dahil olmak üzere bir dizi "özellik birimi" kontrolüdür. DAC bir ses seviyesi kontrolü bildirirse, macOS bunu klavyenizin ses seviyesi tuşlarına ve menü çubuğu kaydırıcısına bağlar. DAC ana bilgisayar tarafından ayarlanabilir ses düzeyine sahip olmadığını bildirirse macOS kaydırıcıyı tamamen grileştirir.</p>

<p>Birçok yüksek kaliteli DAC ve amfi, bilerek tam olarak ikincisini yapar. Tasarımcının varsayımı, DAC'yu tam ölçekli, mükemmel bir dijital sinyalle besleyeceğiniz ve ses yüksekliğini ünitenin üzerindeki analog ses düğmesiyle kontrol edeceğinizdir. Bu analog zayıflama, dijitalden analoga dönüşümden sonra gerçekleşir, bu nedenle bitlerin atılmasını önler ve gerçekten de ses tutkunlarının tercih ettiği yoldur. Bu bir hata değil, bir özelliktir.</p>

<blockquote>Temel kural: DAC cihazınızın fiziksel bir ses düğmesi varsa ve Mac kaydırıcısı gri renkteyse, üretici bu düğmeyi kullanmanızı ister. Sinyal tasarım gereği %100 oranında gönderiliyor.</blockquote>

<h2>Gri renkli kaydırıcı aslında bir sorun olduğunda</h2>

<p>"Sadece düğmeyi kullanın" yanıtı gerçek kurulumlarda bozulur:</p>

<ul>
<li><strong>DAC'nun düğmesi yoktur.</strong> Çok sayıda kompakt USB DAC, donanım kilidi ve profesyonel arayüz, ses seviyesi kontrolüne ve ana bilgisayar kontrolüne de maruz kalmaz. Aşağı akış amplifikatörünün veya güçlü hoparlörlerin ayarlandığı seviyede takılıp kalırsınız.</li>
<li><strong>Düğme ulaşılamaz durumda.</strong> Monitörünüzün arkasındaki masaüstü DAC veya sabit kazançlı bir amplifikatörü besleyen bir ünite, ses seviyesini ayarlamanın bir tuşa basmak yerine fiziksel bir iş haline gelmesi anlamına gelir.</li>
<li><strong>Yalnızca bir ana seviyeye değil, uygulama başına dengeye ihtiyacınız var.</strong> Mükemmel bir donanım düğmesi bile tek bir küresel kontroldür. Bir Zoom çağrısını müziğinizden daha sessiz hale getiremez veya bir bildirim geldiğinde oyundan kaçamaz.</li>
</ul>

<p>Bunların hiçbiri macOS tarafından düzeltilmedi çünkü işletim sistemi açısından bakıldığında cihaz doğru davranıyor. Bu dürüst bir sınırlamadır: Cihaz tarafından bildirilen bir özelliktir ve Sistem Ayarlarında bunu geçersiz kılacak bir geçiş yoktur.</p>

<h2>Herhangi bir şey yüklemeden önce dürüst geçici çözümler</h2>

<p>Önce bunları deneyin çünkü hiçbir maliyeti yoktur:</p>

<ul>
<li><strong>Donanım düğmesini veya aşağı akış sesini kullanın.</strong> DAC'nuzun veya amplifikatörlü hoparlörlerinizin/amplifikatörünüzün bir kontrolü varsa, bu en temiz seçenektir ve tam dijital çözünürlüğü korur.</li>
<li><strong>DAC'nun kendi uygulamasını veya donanım yazılımını kontrol edin.</strong> Bazı DAC'lar (ve oyun odaklı birimler), ana bilgisayar ses düzeyini etkinleştiren bir kontrol paneli veya ürün yazılımı ayarı sunar. Bir "USB birimi" veya "yazılım birimi" seçeneği mevcutsa, bu seçeneğin açılması macOS kaydırıcısının yeniden çalışmasını sağlar.</li>
<li><strong>Farklı bir USB modunu deneyin.</strong> Birkaç cihaz, "sınıf uyumlu" ve özel sürücü modunda farklı yetenekler rapor etmektedir. Satıcı sürücüsünü yüklemek veya kaldırmak, macOS'nun ses denetimi görüp görmeyeceğini değiştirebilir.</li>
<li><strong>Ses MIDI Kurulumu'na bakın.</strong> Ses MIDI Kurulumu'nu açın, cihazı seçin ve burada ana ses biriminin veya kanal başına ses düzeyinin görünüp görünmediğini kontrol edin. Bazen menü çubuğu gri renkte olsa bile o panelde bir kaydırıcı bulunur.</li>
</ul>

<p>Bunlardan hiçbiri geçerli değilse Mac tarafında yazılım zayıflatmasına ihtiyacınız vardır.</p>

<h2>Uygulama başına zayıflatma ile yazılım ses düzeyi kontrolü</h2>

<p>Donanım bir ses seviyesi komutunu kabul etmediğinde, kalan seçenek yazılımdaki sesi DAC'ya ulaşmadan önce zayıflatmaktır. Tam olarak bu <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> yapar. Menü çubuğunuzda bulunur ve DAC'nuzun bir donanım kontrolü sunup sunmadığına bakılmaksızın, çalışan her uygulamaya kendi bağımsız ses seviyesini, sesini kapatmayı ve hatta yükseltmeyi sağlar.</p>

<p>Grileştirilmiş bir DAC için kullanmak için:</p>

<ul>
<li>Yükle <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store'dan ve menü çubuğundan açın.</li>
<li>DAC'nuzu sistem çıkışı olarak seçili tutun; Sistem Ayarlarına dalmadan DAC, hoparlörler ve kulaklıklar arasında geçiş yapmak için SoundDial'nun hızlı çıkış değiştirme özelliğini de kullanabilirsiniz.</li>
<li>Uygulama başına seviyeleri ayarlayın: Tarayıcıyı bırakın, müzik çaları yükseltin, istemediğiniz her şeyin sesini kapatın. Her uygulama seçtiğiniz ses seviyesinde yayınlanır ve karışık sonuç DAC'ya gider.</li>
<li>Farklı senaryolar (çağrılar ve dinleme) için ses seviyesi profillerini kaydedin ve daha önemli bir şey oynatılmaya başladığında alt arka plan uygulamalarının otomatik olarak kısılmasına izin verin.</li>
</ul>

<h2>Ses kalitesinde dürüst değişim</h2>

<p>Yazılım zayıflaması, dönüşüm öncesinde dijital seviyeyi azaltır, dolayısıyla teoride, DAC'nun kendisindeki analog ses seviyesiyle karşılaştırıldığında küçük miktarda çözünürlük atlanır. Uygulamada, normal dinleme seviyelerindeki modern 24 bit ve daha yüksek yollarda, azalma duyulabilecek her şeyin çok altındadır ve tam ölçeğe yakın çalınan her şey için DAC'nun tam dinamik aralığını korursunuz. Ulaşabileceğiniz iyi bir analog düğmeye sahip, saf bir kişiyseniz, düğmeyi kullanın. Kullanılabilir bir donanım kontrolünüz yoksa veya macOS'nun sağlayamadığı uygulama başına dengeye ihtiyacınız varsa, yazılım hacmi doğru tercihtir ve hiçbir şey yapmayan kaydırıcıyı yener.</p>

<p>SoundDial, 14,99 €'luk, tek seferlik satın alınan, korumalı alana alınmış, sürücü, çekirdek uzantısı veya DMG yükleyicisi olmayan bir üründür. USB DAC cihazınızın ses seviyesi grileşmişse ve bir düğmeye ulaşmak bir seçenek değilse, <a href="https://apps.apple.com/app/id6772792641">Mac App Store'da SoundDial'yu edinin</a> ve çalışma ses seviyesi kontrolünü tekrar menü çubuğunuza yerleştirin.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Mac'da Yüksek Sesli Bir Uygulamanın Maksimum Sesini Sınırlandırın (İşitme Duyunuzu Koruyun)",
    description: "macOS'nun uygulama başına ses seviyesi sınırı yoktur, bu nedenle yüksek sesli bir uygulama sizi tam sistem ses seviyesinde patlatabilir. Uygulama başına mikser ile Mac'da tek bir uygulama için maksimum ses tavanını nasıl ayarlayacağınız ve donanım sınırlarının neden önemli olduğu burada açıklanmaktadır.",
    date: "2026-07-23",
    readTime: "5 dk okuma",
    content: `<p>macOS'nun bir uygulamanın maksimum ses seviyesini sınırlamak için yerleşik bir yolu yoktur, bu nedenle sistem kaydırıcınız ne şekilde ayarlanmış olursa olsun yüksek sesli bir program oynatılır. Tek bir uygulamaya yönelik bir tavan ayarlamak için uygulama başına menü çubuğu karıştırıcısını kullanın: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: Sistem ses düzeyiniz diğer her şey için yüksek kalırken bu uygulamayı örneğin yüzde 40'ta tutun.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Yüksek Sesli Bir Uygulamanın Maksimum Sesini Sınırlandırın (İşitme Duyunuzu Koruyun)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Neden bir uygulama aniden Mac'da sizi patlatabilir?</h2>

<p>macOS'da menü çubuğundaki veya Kontrol Merkezindeki ses düzeyi kaydırıcısı, sistem çapında tek bir kontroldür. Her uygulama aynı çıktıyı aynı düzeyde verir. İşletim sisteminde, Windows'nun Hacim Karıştırıcı paneliyle yıllardır sahip olduğu gibi yerleşik uygulama başına ses karıştırıcısı yoktur.</p>

<p>Bu tasarımın kulaklarınız için gerçek bir etkisi var. Sessiz bir podcast'i veya hafif bir görüntülü aramayı duyabilmek için sistem ses seviyenizi yüksek ayarlarsanız, ardından bir oyuna, Discord bildirimine, reklam ağırlıklı bir web sitesine veya çok daha yüksek sesle ana kopyalanmış bir videoya geçerseniz, bu uygulama da tam sistem düzeyinde oynatılır. Sonuç, klasik atlama korkusudur: söz konusu uygulama için asla amaçlamadığınız bir ses seviyesinde ani bir ses duvarı.</p>

<p>Kulak çınlaması olan, ses hassasiyeti olan veya yalnızca işitme duyusuna değer veren herkes için bu öngörülemezlik sorundur. Her şeyi daha sessiz hale getirmeye çalışmıyorsunuz. Belirli bir yüksek sesli uygulamanın güvenli olduğuna karar verdiğiniz seviyeyi asla aşmayacağını garanti etmeye çalışıyorsunuz.</p>

<h2>macOS'nun burada yapabileceği ve yapamayacağı şeyler</h2>

<p>Herhangi bir şey önermeden önce sınırlar konusunda dürüst olalım.</p>

<ul>
<li><strong>Sistem hacmi</strong> her şeyi bir anda düşürür. Bir uygulamayı evcilleştirmek için kapatın ve sessiz uygulamalarınız duyulmaz hale gelir.</li>
<li><strong>Uygulama içi ses düzeyi kaydırıcıları</strong> bazı uygulamalarda bulunur (medya oynatıcılar, sekme başına bazı tarayıcılar) ancak çoğunda yoktur. Bir oyun, video görüşmesi veya yerel bir uygulamanın çoğu zaman hiçbir bağımsız ses kontrolü yoktur.</li>
<li><strong>Donanım tavanı gerçektir.</strong> Hiçbir yazılım, bir sinyali çıkış cihazınızın maksimum seviyesinden daha yüksek bir seviyeye çıkaramaz. Bunun tersine, bir uygulamanın kendi ses yüksekliği yönetimi, artı DAC'nuz ve kulaklığınız, "yüzde 100" ses yüksekliğinin gerçekte ne kadar hissedildiğini belirler. Yazılım, uygulama başına seviyeyi güvenilir bir şekilde düşürebilir ancak kulaklığınızın fiziğini yeniden yazamaz.</li>
</ul>

<p>Dolayısıyla dürüst hedef, sürücü seviyesinde sihirli ses yüksekliği sınırlaması değildir. Pratik, güvenilir bir uygulama başına zayıflamadır: Seçilen bir uygulamayı sistem çıkışının sabit bir kısmında tutun, böylece sizi asla şaşırtmaz.</p>

<h2>Uygulama başına karıştırıcıyla tek bir uygulamanın hacmi nasıl kapatılır?</h2>

<p>Uygulama başına ses karıştırıcı, her uygulamanın sesini keser ve seviyesini bağımsız olarak ayarlamanıza olanak tanır. İşte iş akışı <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>menü çubuğunda yaşayan:</p>

<ul>
<li><strong>Mikseri açın.</strong> SoundDial menü çubuğu simgesine tıklayın. Şu anda ses çalan her uygulamanın kendi kaydırıcısına sahip bir listesini göreceksiniz.</li>
<li><strong>Yüksek sesli uygulamayı bulun.</strong> Sınırlamak istediğiniz uygulamayı (örneğin oyun, tarayıcı veya video konferans aracı) bulun.</li>
<li><strong>Tavanını ayarlayın.</strong> Bu uygulamanın kaydırıcısını güvenli seviyenize, örneğin yüzde 35 ila 50'ye sürükleyin. Bu uygulama artık sistem çıktısının bu kısmında oynatılırken, diğer tüm uygulamalar olduğu yerde kalıyor.</li>
<li><strong>Sistem biriminizi ihtiyacınız olan yerde bırakın.</strong> Sessiz uygulamalarınız için sistem kaydırıcısını yeterince yüksek tutun. Sınırlı uygulama ne olursa olsun dizginlenmeye devam ediyor.</li>
</ul>

<p>Seviye uygulama başına olduğundan, o program için etkili bir şekilde maksimum ayarlamış olursunuz. En yüksek sesli içeriği oynatmaya çalıştığında bile, artık en yüksek sesi tamın seçtiğiniz kısmıdır.</p>

<h2>Profillerle kapağın birbirine yapışmasını sağlayın</h2>

<p>Tek bir manuel ayarlama yardımcı olur, ancak uygulamadan çıkıp yeniden başlattığınızda uygulama düzeyleri sıfırlanabilir. Yeniden başlatmalara dayanıklı, işitme açısından güvenli bir kurulum yapmak için şunu kullanın: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>'nin hacim profilleri. Tercih ettiğiniz uygulama başına düzeylerle bir profil kaydedin; örneğin, oyun yüzde 40'tayken "sessiz oyun gecesi", müzik uygulamanız yüzde 70'te ve çağrı uygulamanız yüzde 90'da. Her oturduğunuzda tek tıklamayla hatırlayın. Yüksek sesli uygulama için tavanınız tam olarak ayarladığınız şekilde geri gelir.</p>

<p>İşitme koruması için iki özellik daha bilinmeye değer:</p>

<ul>
<li><strong>Uygulama başına sessize alma</strong> Başka hiçbir şeye dokunmadan tek bir suçluyu anında susturmanıza olanak tanır; yüksek sesli bildirimler gönderen bir uygulama için kullanışlıdır.</li>
<li><strong>Otomatik eğilme</strong> Daha önemli bir şey başladığında arka plan sesini otomatik olarak kısar, böylece aynı anda iki yüksek sesli kaynak arasında kalmazsınız.</li>
</ul>

<blockquote><p>Yazılım zayıflatma, bir uygulamayı sınırlamak için gerçekten etkilidir, ancak tıbbi bir koruma değil, bir koruma katmanıdır. Kulak çınlaması veya ses hassasiyetiniz varsa, uygulama başına tavanı makul genel dinleme seviyeleri ve kesintilerle eşleştirin. Hiçbir uygulama dikkatli ses seviyesi alışkanlıklarının yerini alamaz.</p></blockquote>

<h2>Güçlendirme ve neden ayrı olduğu hakkında bir not</h2>

<p>Yüksek sesli bir uygulamayı kapatan aynı uygulama başına mikser, çok sessiz bir uygulamayı da yüzde 100'ün üzerine çıkarabilir; bu, kendi ses seviyesi çok düşük olan bir uygulama için kullanışlıdır. Bunlar aynı kontrolün iki tarafıdır: Her uygulamanın seviyesine yukarı veya aşağı siz karar verirsiniz. İşitme koruması için yalnızca "aşağı" yönü seçip orada tutmanız yeterlidir.</p>

<h2>Kısa versiyon</h2>

<p>macOS, tek bir uygulamanın hacmini kendi başına sınırlamanıza izin vermez ve bu, kullanıcı hatası değil, gerçek bir işletim sistemi açığıdır. Uygulamaya özel bir menü çubuğu karıştırıcısı onu kapatır: yüksek sesli uygulamayı sabit bir kesre ayarlayın, bir profile kaydedin ve diğer uygulamalarınız duyulabilir durumdayken o sizi bir daha asla patlatamaz.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store'da tek seferlik 14,99 €'luk bir satın alma işlemidir; hiçbir sürücü veya kurulacak DMG olmadan korumalı alana alınır. Amaç, kulaklarınızı öngörülemeyen bir uygulamadan korumaksa, bu sınırı belirlemenin ve onu korumanın en basit yoludur.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Mac'da Uygulama Başına Farklı Sol/Sağ Dengesi — Mümkün mü?",
    description: "macOS'daki her uygulama için farklı bir sol/sağ stereo dengesi ayarlayabilir misiniz? Dürüst olmak gerekirse hayır; yerel olarak değil ve çoğu araçla değil. İşte gerçekte neyin mümkün olduğu ve gerçek sınırların nerede olduğu.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Dürüst olmak gerekirse hayır - macOS, uygulama başına farklı bir sol/sağ stereo dengesi ayarlamanıza izin vermez ve neredeyse hiçbir üçüncü taraf aracı da uygulama başına gerçek kaydırmayı ortaya çıkarmaz. Çıkış cihazınız için tek bir genel bakiye ayarlayabilir ve uygulama bazında kontrol edebilirsiniz. <em>hacim</em>, ancak uygulama başına bağımsız <em>tava</em> macOS'nun kullanıma sunduğu bir özellik değildir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Uygulama Başına Farklı Sol/Sağ Dengesi — Mümkün mü?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Denge ve hacim — ikisi aynı şey değil</h2>

<p>Sıklıkla karıştırılan iki fikri ayırmakta fayda var:</p>
<ul>
  <li><strong>Hacim</strong> — bir uygulamanın genel olarak ne kadar gürültülü olduğu. Bu, her iki kanala da uygulanan tek bir düzeydir.</li>
  <li><strong>Denge (tava)</strong> — sesin sol ve sağ hoparlörler arasında nasıl dağıtıldığı. "Tam sol" dengesi her şeyi sol kanala gönderir ve sağı susturur.</li>
</ul>

<p>"Uygulama başına farklı denge" isteyen kişiler genellikle iki şeyden birini ister: bir uygulamanın sesini bir kulağa göndermek (örneğin, bir aramayı sol kulağınıza, müziği sağ kulağınıza) veya işitme farkını veya bir taraftaki kötü hoparlörü düzeltmek - ancak yalnızca belirli uygulamalar için. Bunlar meşru hedeflerdir. Sorun kontrolün nerede yaşadığıdır.</p>

<h2>macOS bunu neden yerel olarak yapamıyor?</h2>

<p>macOS'nun tam olarak bir denge kontrolü vardır ve çıkış cihazı seviyesinde bulunur. Aşağıda bulacaksınız <strong>Sistem Ayarları → Ses → Çıkış</strong>, nerede <em>Bakiye</em> kaydırıcı tüm karışımı sola veya sağa kaydırır. Bu kaydırıcının uygulanacağı ayar ne olursa olsun <em>her şey</em> o cihaza yönlendirilir; her uygulama, her sistem sesi, hepsi aynı anda.</p>

<p>Standart macOS ses yığınında "bu uygulamanın sesini sola, bu uygulamayı sağa" diyen bir API yok. Uygulamalar, seslerini zaten karıştırılmış halde sisteme iletir ve sistem, hoparlörlere giderken bir ana denge uygular. Yani uygulama başına kaydırmayı isteyeceğiniz katman, işletim sistemi tarafından gösterilmez. Bu gerçek bir işletim sistemi sınırlamasıdır, bir menü çubuğu yardımcı programının kibarca çözebileceği bir şey değildir.</p>

<blockquote>Uygulama başına farklı olarak <em>hacim</em> - macOS'da da yerel olarak eksik olan ancak uygulama başına ses akışına dokunarak hangi uygulamaların uygulanabileceği <em>denge</em> her uygulamanın akışının bağımsız olarak yeniden kaydırılmasını gerektirir ve bu kanca, korumalı alan uygulamaları için kullanılamaz.</blockquote>

<h2>SoundDial ne yapar ve dürüst olmak gerekirse ne yapmaz</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> size uygulama başına kontrol sağlar macOS eksik: bağımsız <strong>hacim</strong> çalışan her uygulama için, uygulama başına <strong>sessiz</strong>, uygulama başına hacim <strong>artırmak</strong> %100'ün üzerinde, kaydedilebilir hacim <strong>profiller</strong>, otomatik azaltma ve menü çubuğundan hızlı çıkış değiştirme.</p>

<p>Sana karşı dürüst olmak gerekirse: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> uygulama başına kontroller <em>ses yüksekliği ve sessize alma</em>, uygulama başına stereo değil <em>yatay kaydırma</em>. Safari'yu sol kulağınıza ve Spotify'yu sağınıza göndermez. Birisi size bir menü çubuğu karıştırıcısının macOS'da uygulama başına gerçek Sol/Sağ dengesini sağladığını söylerse şüpheci olun; bu, işletim sisteminin sunduğu bir kontrol değildir. SoundDial'nun gerçekten çözdüğü şey, çok daha yaygın olan hayal kırıklığıdır: bir uygulamanın diğerine göre çok gürültülü veya çok sessiz olması.</p>

<h2>Uygulama başına denge için gerçek geçici çözümler</h2>

<p>Sesin gerçekten yan yana bölünmesine ihtiyacınız varsa, kabaca en basitinden en kapsamlısına doğru dürüst seçenekler şunlardır:</p>

<ul>
  <li><strong>Küresel bakiye (tüm uygulamalar):</strong> Sistem Ayarları → Ses → Çıkış → Denge'yi kullanın. Bu sizin tek yerleşik seçeneğinizdir ve her uygulamayı etkiler. Bir odayı veya işitme asimetrisini düzeltmek için kullanışlıdır, ancak bir uygulamayı izole etmek için işe yaramaz.</li>
  <li><strong>Ayrı çıkış cihazları:</strong> Bu, gerçek uygulama başına dengeye en yakın şeydir. Uygulama A'yı bir çıkış cihazına ve Uygulama B'yi diğerine yönlendirin, ardından her cihazın dengesini bağımsız olarak ayarlayın. macOS, bazı uygulamaların içinden bir çıktı cihazı seçmenize olanak tanır (ve tarayıcılar/iletişim uygulamaları genellikle kendi çıktı seçicilerini gösterir). Uygulama A sola kaydırılan bir cihazı ve Uygulama B sağa kaydırılan bir cihazı işaret ediyorsa, her iki uygulama da çıktılarını seçmenize izin verdiği sürece etkili bir şekilde uygulama başına denge elde edersiniz.</li>
  <li><strong>Sanal ses yönlendirme araçları:</strong> Sanal cihazlar ve dahili bir karıştırıcı oluşturan yardımcı programlar, bazı yapılandırmalarda belirli uygulamaları belirli kanallara yönlendirebilir. Bu güçlü ama zahmetlidir, sürücü tarzı bir bileşen ekler ve çoğu insan için aşırıya kaçar. Bu, sıradan bir "tek kulağa çağrı" çözümü değil, yayıncıların ve ses mühendislerinin alanıdır.</li>
  <li><strong>Donanım bölünmesi:</strong> Eğer konu fiziksel hoparlörler veya işitme farklılığı ise, bir donanım mikseri veya kanal başına kontrole sahip bir ses arayüzü, yazılım problemini tamamen ortadan kaldırır.</li>
</ul>

<h2>Uygulama başına hacim aslında ihtiyacınız olan miktar olduğunda</h2>

<p>"Uygulama başına farklı bakiye istiyorum" isteklerinin çoğu aslında "bir uygulamanın diğerini bastırmasıdır." Amaç, müziğiniz üzerinden duyabileceğiniz bir video görüşmesi veya Discord sohbetinin yanında çok yüksek sesli bir oyunsa, denge araç değildir; bağımsız ses seviyesidir. Uygulama başına mikserin sanal sürücüler veya yönlendirme jimnastiği olmadan temiz bir şekilde gerçekleştirdiği şey tam olarak budur.</p>

<p>Yani dürüst özet: Uygulama başına gerçek sol/sağ dengesi bir macOS özelliği değildir ve hiçbir mikser uygulaması bunu ikna edici bir şekilde taklit edemez. Gerçek rotalarınız, küresel denge kaydırıcısı veya ayrı ayrı kaydırılan cihazlara uygulama başına çıkış yönlendirmesidir. Ancak altta yatan ağrı göreceli ses yüksekliğiyse, bu çözülmüş bir sorundur.</p>

<p>Mac cihazınızdaki her uygulama için kaydedilebilir profillerle ve sürücü olmadan bağımsız ses seviyesi, sessize alma ve yükseltme özelliklerini mi istiyorsunuz? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Mac App Store'da SoundDial'yu edinin</a> — 14,99 €, tek seferlik, korumalı alana alınmış.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Mac'da Neden Bazı Uygulamalar Diğerlerine Göre Çok Daha Yüksek Ses Çıkarıyor? (Ve Nasıl Eşitlenir)",
    description: "Mac'da uygulamalar son derece farklı ses çıkarır çünkü her biri kendi ses yüksekliği hedefine göre yönetilir ve macOS'da uygulama başına yerleşik ses kontrolü yoktur. İşte bunun nedeni ve uygulamalarınızı nasıl seviyelendireceğiniz.",
    date: "2026-07-23",
    readTime: "6 dk okuma",
    content: `<p>Uygulamaların sesleri Mac cihazınızda son derece farklı geliyor çünkü her biri kendi ses yüksekliği hedefine göre yazılıyor, yönetiliyor ve normalize ediliyor ve macOS'da bunları uzlaştıracak yerleşik uygulama başına ses düzeyi kontrolü bulunmuyor. Spotify, YouTube, Zoom ve sistem uyarılarının tümü aynı ana kaydırıcıdan geçer, dolayısıyla onu sürekli olarak yukarı aşağı hareket ettirmek zorunda kalırsınız.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac&#x27;da Neden Bazı Uygulamalar Diğerlerine Göre Daha Yüksek Ses Çıkarıyor? (Ve Nasıl Eşitlenir)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Bu sizin Mac'nuz değil - sesin kendisi</h2>

<p>macOS üzerindeki tek sistem ses düzeyi kaydırıcısı, her şeyin son çıkış düzeyini kontrol eder. Her uygulamanın ses akışında oluşturulan göreceli ses yüksekliğine dokunmaz. Bu temel çizgi, ses hoparlörlerinize ulaşmadan çok önce belirlenir ve kaynaktan kaynağa büyük ölçüde değişir.</p>

<p>Bu farklılıkları yaratan üç şey var:</p>

<ul>
<li><strong>Seviyelere hakim olmak.</strong> Etkileyici bir pop parçası, sessiz bir akustik kayıttan veya sözlü bir podcast'ten çok daha sıcak bir şekilde öğrenilir. Sinema için mikslenen bir film, kasıtlı olarak fısıltıları susturur ve patlamaları yüksek sesle tutar; bu dinamik aralıktır ve ortalama seviyenin düşük olduğu anlamına gelir.</li>
<li><strong>Ses yüksekliği normalleştirme hedefleri.</strong> Yayın platformları, oynatmayı LUFS (Tam Ölçeğe göre Ses Yüksekliği Birimleri) cinsinden ölçülen bir hedefe ayarlar. Spotify -14 LUFS civarını, YouTube yaklaşık -14 LUFS'yi, Apple Music ise -16 LUFS civarını hedefliyor. Bir video konferans uygulaması veya oyun tamamen kendi kazancını uygular. Farklı hedeflere göre "normalleştirilmiş" iki uygulama asla birbiriyle eşleşmez.</li>
<li><strong>Uygulamalar arası seviyelendirme yok.</strong> Her uygulama yalnızca kendi içeriğini normalleştirir. Hiçbir şey Spotify ile Zoom'yu bir tarayıcı oyununa karşı koordine edemez. macOS sadece bunları toplar ve karışımı gönderir.</li>
</ul>

<h2>LUFS neden önemlidir (açık bir ifadeyle)</h2>

<p>Tepe seviyesi size bir sinyaldeki en gürültülü anı bildirir. LUFS size bir şeyin aslında ne kadar gürültülü olduğunu söyler <em>hissediyor</em> zamanla insan işitme duyusunun nasıl çalıştığına göre ağırlıklandırılır. Bu ayrım, bir podcast ile bir dans parçasının aynı zirveye varmasına rağmen ses yüksekliği açısından dünyalar kadar farklı hissettirebilmesinin nedenidir; parça tavana yakın yerlerde çok daha fazla zaman harcar.</p>

<blockquote>Daha sessiz bir LUFS hedefi, daha fazla boşluk payı ve daha fazla dinamik aralık anlamına gelir. Daha yüksek sesli bir hedef, daha tutarlı, "her zaman dolu" bir ses duvarı anlamına gelir. İkisi de yanlış değil; ancak uygulamalar farklı sayıları hedeflediğinde, bunu bir uygulamanın çığlık atması ve diğerinin mırıldanması gibi hissedersiniz.</blockquote>

<p>Dürüst temel sebep budur. Bu yama yapabileceğiniz bir hata değil. Bu, hiçbir zaman birbirleriyle uyum sağlayacak şekilde tasarlanmamış bir düzine uygulamayla çoğaltılan, sesin nasıl üretildiğinin ve iletildiğinin fiziğidir.</p>

<h2>macOS'nun açık bıraktığı boşluk</h2>

<p>İnsanları gerçekten sinirlendiren kısım şu: Windows yıllardır uygulama başına bir Volume Mixer piyasaya sürüyor. Doğrudan görev çubuğundan bir uygulamayı aşağı çekebilir ve diğerini yukarı itebilirsiniz. macOS bunu hiçbir zaman dahil etmedi. Ses tercihleri ​​size yalnızca ana kaydırıcıyı ve çıkış cihazı seçimini sunar.</p>

<p>Yani bir Mac'da seçenekleriniz geleneksel olarak sınırlıdır:</p>

<ul>
<li>Her uygulamanın kendi dahili ses kaydırıcısını (varsa) ayarlayın. Çoğu uygulama (Zoom, çoğu oyun, sistem zil sesleri) kullanılabilir bir uygulama göstermez.</li>
<li>İçeriği her değiştirdiğinizde ana kaydırıcıyı manuel olarak kullanın.</li>
<li>Bir şeyi tamamen susturun, bu aslında hiçbir şeyi dengelemeyen kör bir düzeltmedir.</li>
</ul>

<p>Bunların hiçbiri tercihinizi hatırlamıyor. Uygulamayı bırakın ve yeniden başlatın; ilk kareye geri dönersiniz.</p>

<h2>Pratik çözüm: Uygulama başına hatırlanan hacim</h2>

<p>Her hizmeti kataloğunu yeniden düzenlemeye zorlayamayacağınız için uygulanabilir çözüm, macOS'nun hiçbir zaman gönderilmeyen eksik katmanını eklemektir: her uygulama için bağımsız, hatırlanan birim. Tam olarak bu <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> yapar. Menü çubuğunuzda bulunur ve çalışan her uygulamaya kendi kaydırıcısını verir, böylece yüksek sesli olanı aşağı çekip sessiz olanı yukarı iterek size eşit gelen bir seviyeye oturabilirsiniz.</p>

<p>Uygulamalarınızı pratikte eşitlemek için:</p>

<ul>
<li>Açık <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menü çubuğundan her aktif uygulamayı kendi kontrolüyle göreceksiniz.</li>
<li>Patlayan her şeyi (genellikle popüler bir müzik veya video uygulaması) %60-70 gibi bir değere düşürün.</li>
<li>Sessiz referans uygulamanızı (genellikle bir arama uygulaması veya podcast) %100'de bırakın ve uygulama başına kullanın <strong>artırmak</strong> hala çok yumuşaksa %100'ün üzerine çıkarmak için.</li>
<li>Seviyeleri bir kez ayarlayın. SoundDial her uygulamanın ses düzeyini hatırlar, böylece uygulamayı bir sonraki açışınızda denge korunur.</li>
</ul>

<p>Buradaki seviyelendirme işinin çoğunu iki özellik yapıyor. <strong>Artırma</strong> Önemlidir çünkü pek çok uygulama maksimumda bile çok sessizdir; yalnızca ses seviyesini azaltan uygulama başına kaydırıcı onları kurtaramaz, ancak %100'ün üzerine çıkabilen bir kaydırıcı kurtarabilir. Ve <strong>hacim profilleri</strong> tüm seviyeleri kaydetmenize (örneğin, iş için "müziğe odaklanın, yüksek sesli çağrılar" profiline karşı oyun için farklı bir karışım) kaydetmenize ve uygulamayı uygulamaya göre yeniden ayarlamak yerine bunlar arasında anında geçiş yapmanıza olanak tanır.</p>

<h2>Bunun en çok yardımcı olduğu yer</h2>

<p>En yaygın rahatlama, müziğe karşı toplantı atlamadır: yüksek sesle müzik akışı, ardından bir çağrı uygulaması, kıyaslandığında zayıf ses çıkarır. Çağrı uygulamasını daha yükseğe (veya artırın) ayarlayın, müziği aşağı çekin ve şaşırtıcı ses seviyesi dalgalanması kaybolur. Aynı durum, yüksek sesli bir video oynatıcıya karşı sessiz bir tarayıcı oyunu veya her şeyin üzerinden atlayan sistem uyarıları için de geçerlidir.</p>

<p>Sınırlar konusunda net olmak gerekirse: SoundDial, uygulamalarınızın çıktısını dengeler. Kötü üretilmiş bir parçanın yeniden masteringini yapamaz ve çok geniş dinamik aralıkla karıştırılmış seste ayrıntı yaratamaz. Yaptığı şey, macOS'nun dışarıda bıraktığı tek kontrolü size vermektir; sabit, uygulama başına sabit kalan seviyeler.</p>

<p>Uygulamaları her değiştirdiğinizde ana kaydırıcıyı kullanmaktan bıktınız mı? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store için tek seferlik 14,99 Euro'dur (korumalı alanda, sürücü yok, DMG yok) ve sonunda her uygulamaya kendi hatırlanan hacmini veriyor.</p>`,
  },
};
