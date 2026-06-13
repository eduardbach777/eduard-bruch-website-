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

<img src="/apps/sounddial.png" alt="SoundDial podcast kurulumu — bağımsız düzeyde misafir sesi, izleme ve bildirimler" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial uygulama başına ince tanenli ses kontrolü ve %1 hassasiyetle macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial bir grup sırasında müzik farklı bir seviyede çalarken Slack sesini bağımsız olarak kontrol etmek" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial varsayılan ses seviyesi — yeni uygulamalar tam seviye yerine yapılandırılmış seviyede başlar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — tüm Mac ses kaynaklarını bağımsız yönetmek için uygulama başına ses kontrolü" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Cisco Webex çağrı hacmini %100'ün üzerine çıkarmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial farklı ses seviyelerinde iki ses kaynağını gösteriyor macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial gece film kurulumu — orta seste yayın uygulaması, bildirimler sessiz" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Mac uyku ve uyanık döngülerinden sonra uygulama başına hacim seviyelerini korumak" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Discord'dan DAW çıkışını ve macOS'daki referans parçaları müzik prodüksiyonu için ayırmak" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Apple Music'in sesini %100'ün üzerine çıkarıyor macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — profil, otomatik alçlama ve %200 boost ile Mac için güvenilir uygulama başına ses mikseri" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Spotify ve Discord'u farklı ses seviyelerinde dengelemek macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — uygulama başına ses kontrolü, profiller, otomatik eğilme ve %200 artış macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial sessiz video dosyaları için macOS sistem seviyesinde VLC sesini artırmak" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial ayarlanabilir otomatik eğiltme — aramalar sırasında arka plan sesinin ne kadar azaldığını tam olarak kontrol edin" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial uygulama başına kaydırmalarla Bluetooth kulaklıklar için uygulama sesini %200'e çıkarmak Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial OBS üzerinden yayın yapmak için oyun, Discord ve müzik ses seviyelerini dengelemek Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial ses belleği — uygulama başına ses seviyelerini otomatik olarak hatırlar ve geri getirir macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial sessiz podcast bölümleri için Mac Apple Podcasts sesini %180'e çıkarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial öğrenci kurulumu — ders tam sesle, müzik çalışması alçak, bildirimler sessiz" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial sessiz kısayolu — Kontrol + Seçenek+M ile tüm uygulamaları ses geri yükleme ile susturup kaldırın" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Google Meet (Chrome) sesini %100'ün üzerine çıkarmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial bildirim uygulaması sesini medya uygulaması seminden ayırmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial FaceTime çağrı hacmini %100'ün üzerine çıkarmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial klavye kısayolları — Control+Option+S ile geçiş, Control+Option+M ile tüm sesleri kapat" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — sanal ses cihazları yüklemeyen bir Arka Müzik'e alternatif" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — ses profilleri ve otomatik eğilme özellikleriyle daha hafif, odaklanmış bir SoundSource alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial uygulama başına ince tanenli ses kontrolü ve %1 artışlarla macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial daha net diyalog ve akış sesi için Netflix sesini %180'e yükseltmek Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial uzaktan çalışma ses kurulumu — Zoom, Spotify ve Slack için farklı ses seviyeleri macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial tarayıcı hacmasını diğer uygulamalardan bağımsız olarak kontrol macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Discord'un sesini oyundan ve müzikten bağımsız olarak kontrol macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial tek menü çubuğu panelinde ses çıkış cihazı anahtarı ve uygulama başına ses kontrolü ile" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Microsoft Teams çağrı hacmini %100'ün üzerine çıkarmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Slack sessiz ve Spotify normal ses seviyesinde oynatırken macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial ses profilleri — macOS üzerinde Toplantı, Focus ve Chill modları arasında tek tıklamayla geçiş yapmak" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial video görüşmeleri sırasında daha net ses için Zoom çağrı sesini %180'e çıkarmak Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Spotify sesini bağımsız olarak düşürürken diğer uygulamaları tam seste tutmak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial macOS Tahoe'da uygulama başına ses kontrolü sağlıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Zoom'un tam seste ve Spotify'ın düşük seviyede gösterilmesi macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial yeniden başlatmalarda uygulama başına ses seviyelerini hatırlamak macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial uygulama başına ses mikseri, tek uygulama ses kaydırıcılarını macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial sessiz YouTube videoları için Safari tarayıcı sesini %180'e yükseltmek Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Slack'i düşük sesle ve Spotify'ı normal ses seviyesinde gösteriyor — bağımsız bildirim kontrolü macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial otomatik düşük ayarları — Zoom aramaları sırasında ayarlanabilir ses azalması Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial AirPods için Mac için uygulama sesini artırmak ve uygulama başına %200'e kadar ses kaydırıcıları" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Spotify sesini macOS %200'e çıkarırken diğer uygulamaları normal ses seviyesinde tutmak" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial bir oyun için bağımsız ses kaydırıcıları ve Discord'da macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — macOS için ses mikseri, menü çubuğunda uygulama başına ses kaydırıcılarını gösteriyor" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial ses yükseltmesi — uygulama başına %200 amplifikasyonla ses kontrolü macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial Zoom görüşmesi sırasında müzik sesini otomatik olarak düşüren otomatik eğiltme özelliği Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial macOS menü çubuğunda her uygulama için uygulama başına sessiz tuşlarının gösterilmesini" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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

<img src="/apps/sounddial.png" alt="SoundDial — menü çubuğunda tek uygulama ses kaydırıcılarını gösteren macOS için uygulama başına ses mikseri" style="max-width:100%;border-radius:12px;margin:24px 0;" />

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
};
