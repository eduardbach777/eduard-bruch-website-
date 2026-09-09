import type { ArticleSet } from "./index";

export const trArticles: ArticleSet = {
  "copy-text-from-image-mac": {
    slug: "copy-text-from-image-mac",
    title: "Mac'ta Resimden Metin Nasıl Kopyalanır",
    description: "Bir fotoğraf, tarayıcı belgesi veya meme gibi bir resmin içine hapsedilmiş metniniz var — ve onu seçmenin hiçbir yolu yok. Bunu hemen nasıl çıkaracağınız işte burada.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Birisi toplantı notlarıyla dolu beyaz tahtanın fotoğrafını gönderiyor. Veya bir Instagram hikayesinden bir tarif ekran görüntüsü alıyorsunuz. Metin ekranınızda tam orada ama seçemiyorsunuz, kopyalayamıyorsunuz, hiçbir yere yapıştıramıyorsunuz. Tek seçeneğiniz her kelimenin yazısını yazmaktır — ve bunu yaparken hata yapmamanız gerekir.</p>

<h2>Bir Resimde Metin Neden Seçilemez?</h2>
<p>Resimler pikselleridir, karakterler değil. Mac bir JPEG veya PNG'yi renkli noktaların bir ızgarası olarak görür, kelime ve cümleler olarak değil. Ön İzleme resimler üzerinde ek açıklamalar yapmanıza izin verir ancak bunların içindeki metni çıkarmaz. Hızlı Bakış resmi gösterir ancak içindeki kelimeleri kopyalamak için hiçbir işlev sunmaz. Resmi Notlar veya Sayfalar'a sürüklemek de sadece resmi yerleştirir — metin piksellerin arkasında kilitli kalır.</p>
<p>Apple'ın Canlı Metin özelliği bazı bağlamlarda çalışır, ancak uyumlu uygulamalar, belirli resim formatları gerektirir ve her senaryoyu kapsamaz. Metin bir tarayıcı sekmesinin içinde, bir tasarım mock-up'ında veya bir video karesinde yer alıyorsa, Canlı Metin sıklıkla buna ulaşamaz.</p>

<h2>Optic ile Seç, Anında Kopyala</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> menü çubuğunuzda yaşar ve ekranınızın herhangi bir bölümü üzerinde seçim dikdörtgeni çizmenizi sağlar. İçindeki karakterleri anında okur — kaynak bir resim dosyası, web sayfası, PDF veya görüntüünüzdeki başka bir şey olsun.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic menü çubuğu OCR aracı Mac için" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Fotoğraflar ve Ekran Görüntüleri</h3>
<p>Resmi herhangi bir uygulamada açın — Ön İzleme, Fotoğraflar, tarayıcı, Slack — ve metni seç. Optic karakterleri tanır ve panoya kopyalar. Yazılı notlar, yazdırılmış belgeler, fotoğraflardaki işaretler ve grafiklere bindirilmiş metinle çalışır.</p>

<h3>Tasarım Dosyaları ve Mock-up'lar</h3>
<p>Figma dışa aktarmasını veya düz bir tasarım compositionını gözden geçiriyor musunuz? Kopyayı tasarımcıdan ayrı olarak göndertmek zorunda kalmadan metin öğelerini ayıklamak için seçin. QA, çeviri iş akışları ve içerik denetimleri için yararlıdır.</p>

<h3>Yakalama Geçmişi</h3>
<p>Her yakalama menü çubuğunda kaydedilir, böylece daha önce ayıkladığınız metne geri dönebilirsiniz. Onu tutmak için sadece bir taslak belgeye yapıştırmanız gerekmez.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "screen-ocr-mac": {
    slug: "screen-ocr-mac",
    title: "Mac için Ekran OCR — Herhangi Bir Metni Seç ve Kopyala",
    description: "Ekranınızda seçilemez veya kopyalanamaz metin — resimler, videolar, iletişim kutuları veya kilitli arayüzlerin içinde. Ekran düzeyinde bir OCR aracı bunu çözer.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Mac ekranınızda seçilmek istemeyen metne bakıyorsunuz. Belki bir video eğitiminde işlenmiş, bir web sayfasındaki canvas öğesi içinde işlenmiş veya etkileşimli olmayan bir kullanıcı arayüzünün arkasında kilitli. Kelimeler tam orada, açıkça okunabilir, ancak imlecin onlara yokmuş gibi davranması.</p>

<h2>Görme ve Seçme Arasındaki Boşluk</h2>
<p>macOS yerel uygulamalarda ve standart web içeriğinde metin seçimi sağlar, ancak modern ekran istisnaların dolu. Web uygulamalarında grafikler olarak işlenen metin, video oynatıcılarında yanılmıştır altyazı, görüntü tabanlı belgelerde görüntülenen kod, uzak masaüstü oturumunda terminal çıktısı — bunların hiçbiri normal tıkla ve sürükle'ye yanıt vermez. Karşınızda zaten olan şeyi yazmak zorunda kalırsınız; bu yavaş ve hataya açıktır.</p>
<p>Geleneksel OCR araçları önce bir dosya kaydetmenizi gerektirir, sonra bunu içe aktarırsınız, sonra işlersiniz. Bu iş akışı metniniz kaynağı canlı ekran olduğu anda kırılır — bir video çağrısı, akış yapmadan bir gösterge tablosu veya dışa aktarma seçeneği olmayan bir uygulama.</p>

<h2>Optic ile Ekran Düzeyinde OCR</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> OCR'ı doğrudan ekranınızda gerçekleştirir. Menü çubuğunda yaşar ve etkinleştirdiğinizde, görünür metni seçin. Karakterler anında tanınır ve panoya yerleştirilir — dosya kaydetme, içe aktarma, bekleme yok.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic, Mac'ta ekran OCR gerçekleştiriyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Herhangi Bir Kaynak, Tek Hareket</h3>
<p>Metnin hangi uygulamada yaşadığı önemli değil. Paylaşılan slaydı gösteren bir Zoom çağrısı, terminal komutlarını gösteren bir YouTube öğretimi, etkileşimsiz etiketleri gösteren bir Retool panosu — eğer görebilirseniz, Optic okuyabilir. Bir kısayol, bir sürükleme ve metin senindir.</p>

<h3>Yerleşik Geçmiş</h3>
<p>Her OCR yakalama menü çubuğu açılır penceresinde günlüğe kaydedilir. Dakikalar veya saatler sonra aldığınız metne geri dönmek için önceki yakalamalardan kaydırın ve yeniden taramadan metni alın.</p>

<h3>Metin-Konuşma</h3>
<p>Yakalanan metni okumak yerine duymak mı gerekiyor? Optic herhangi bir yakalamada metin-konuşma özelliği içerir, bu da ayıklanan içeriği kontrol etmek veya erişilebilirlik için yararlıdır.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "extract-text-from-screenshot-mac": {
    slug: "extract-text-from-screenshot-mac",
    title: "Mac'ta Ekran Görüntüsünden Nasıl Metin Ayıklanır",
    description: "Metni kaydetmek için bir ekran görüntüsü aldınız, ancak şimdi bu metni düzenleyebileceğiniz ve arayabileceğiniz gerçek karakterler olarak almanız gerekiyor. Tekrar yazmanız amaçlamayı bozar.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Ekran görüntüsü bir kısa yol olacaktı. Önemli bir e-postanın, sevkiyat onayının, bir dizi talimatın hızlı bir kopyasını aldınız — bilgiye kaydedildiğini düşünüyor. Ancak şimdi takip numarasını forma yapıştırmanız gerekiyor veya bu talimatlardaki bir cümleyi araştırmanız gerekiyor ve ekran görüntüsü düz bir resim. İçindeki metin bir çizim kadar iyi yazılı olabilir.</p>

<h2>Ekran Görüntüleri Pikselleri Yakalar, Metin Değil</h2>
<p>Mac'ta Cmd+Shift+4 tuşlarına bastığınızda, ekranda olan şeyin piksel mükemmel bir görüntüsünü alırsınız. Ancak bu görüntüdeki metin yapısının tamamını kaybeder. Tek kelimeleri seçemez, bir paragrafı kopyalayamaz, hatta bir cümleyi araştıramaz. Ekran görüntüsü bir görsel kayıt olur, tekstual değil.</p>
<p>Ekran görüntüsünü Ön İzleme'de açabilir ve Apple'ın işaretleme araçlarını deneyin, ancak bunlar resmin üstüne çizim içindir — içindeki metni çıkarmak değil. Bazı kullanıcılar ekran görüntülerini Google Dokümanlar'a yapıştırmayı deneye otomatik OCR'nin umması, ancak bu yalnızca Drive'da yüklenen resimler için çalışır, yapıştırılan ekran görüntüleri değil ve sonuçlar tutarsızdır.</p>

<h2>Metni Doğrudan Ekrandan Ayıkla</h2>
<p>Önce ekran görüntüsü almak yerine sonra görüntüden metni ayıklamakta mücadele etmek, <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> ekran görüntüsünü tamamen atlaymanızı sağlar. Menü çubuğundan etkinleştirin, ihtiyacınız olan metni seçin ve tanınan karakterler doğrudan panoya gider.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta ekran görüntüsünden metni çıkarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zaten Ekran Görüntüsü Var mı?</h3>
<p>Sorun yok. Ekran görüntüsünü herhangi bir görüntüleyicide açın — Ön İzleme, Hızlı Bakış, hatta bir tarayıcı — ve ekranda görüntülenen görüntüdeki metni seçin. Görüntüdeki herhangi bir şeyden karakterleri okur, zaten açtığınız resimleri de dahil.</p>

<h3>Yakalama Geçmişi Ekran Görüntüsü Biriktirmeyi Değiştirir</h3>
<p>Pek çok kişi metni hatırlamak için özellikle ekran görüntüleri alır — onay numaraları, adresler, hata kodları. Optic'in yakalama geçmişi menü çubuğunda her metin çıkarmasını saklayarak size yakalanan metinin aranabilir bir günlüğünü vererek ekran görüntüsü klasöründe kaymak yerine.</p>

<h3>Toplu Ayıklama</h3>
<p>Uzun bir ekran görüntüsünün birden çok alanından metne ihtiyaç duyuyor musunuz? Arka arkaya birden çok hızlı seçim yapın. Her biri kaydedilir, böylece ihtiyacınız olan her şeyi alabilir ve parçaları gerektiği yere yapıştırabilirsiniz.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "copy-text-non-selectable-pdf-mac": {
    slug: "copy-text-non-selectable-pdf-mac",
    title: "Mac'ta Seçilemez PDF'den Nasıl Metin Kopyalanır",
    description: "Bazı PDF'ler normal belgeler gibi görünür ancak tek bir kelimenin seçilmesine izin vermez. Metin görsel olarak vardır ancak düz bir görüntü katmanının arkasında kilitlidir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>PDF'yi açıyor, bir paragrafı kopylamayı bekliyorsunuz, ancak tıkla ve sürükle yaptığınızda hiçbir şey vurgulanmıyor. İmlec sayfayı geçiyor sanki metin yokmuş gibi. Tümünü seçmek için Cmd+A'yı deniyorsunuz — hiçbir şey yok. Belge açıkça okunabilir, ancak etkili bir şekilde metnin bir resmi, gerçek metin değil.</p>

<h2>Neden Bazı PDF'ler Metni Seçmesine İzin Vermez?</h2>
<p>Bu taranmış belgeler, hükümet formları, eski akademik makaleler ve belirli tasarım araçlarından dışa aktarılan PDF'lerle olur. Sayfalar resimlerden oluşturulmuş — taranmış veya dışa aktarma sırasında düzleştirilmiş — bu nedenle PDF metin katmanları yerine raster katmanları içerir. Ön İzleme, Adobe Reader ve diğer tüm PDF görüntüleyicileri aynı şeyi görür: harflere benzeyen pikseller, temel karakter verisi olmadan seçilecek.</p>
<p>Bazı PDF'lerin de kopya koruması etkindir. Oluşturucu, metin seçimini engelleyen bir izin bayrağı ayarlamıştır, metin katmanı var olsa da. Standart PDF okuyucuları bu bayrağı saygı gösterir ve hiçbir şey kopyalamanızı engeller.</p>

<h2>Metni Doğrudan Ekrandan Okuyun</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> her iki sorunu da yan çizer. Karakterleri dosyanın iç yapısından değil ekranınızdan okuması, PDF'nin metin katmanı olması, taranmış görüntü olması veya kopya kısıtlamaları olması önemli değil. Metni ekranda görebiliyorsanız, Optic okuyabilir.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta seçilemez PDF'den metin okuyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Taranmış Belgeler</h3>
<p>Taranmış PDF'yi Ön İzleme'de açın, rahat bir okuma boyutuna yakınlaştırın, Optic'i etkinleştirin ve ihtiyacınız olan metni seçin. Taramanın yazdırılmış karakterlerini tanır ve ayıklanabilir metne kopyalar. Eski yazılı belgeleri, taranmış makbuzları ve fotoğraflanmış sayfalarla çalışır.</p>

<h3>Korumalı PDF'ler</h3>
<p>Metin katmanı mevcut olduğu ancak seçim kilitli olan PDF'ler için, Optic ekranda işlenen çıktıyı okur. İzin bayraklarıyla mücadele etmeden veya PDF'yi çözmek için araçlar aramadan aynı metni alırsınız.</p>

<h3>Çok Sayfalı Ayıklama</h3>
<p>Belgeyi gezin ve her sayfa üzerinde seçim yapın. Her yakalama menü çubuğu geçmişinde kaydedilir, böylece uzun taranmış belgeyi sayfa sayfa işleyebilir ve ihtiyacınız olan tüm metni toplayabilirsiniz.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "qr-code-reader-mac": {
    slug: "qr-code-reader-mac",
    title: "Mac için QR Kod Okuyucu — Ekrandan Tarama",
    description: "Mac ekranınızda bir QR kodu görünüyor — bir e-postada, belgede, web sayfasında — ve tek tarayıcınız cebinizdeki telefon. Daha hızlı bir yol var.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Birisi Slack mesajında QR kodunu paylaşıyor. Veya PDF, kaynağa bağlantı veren biri içerir. Veya web sayfası uygulama indirmesi için QR kodunu gösterir. Kod Mac ekranınızda tam orada, ancak taramak için cebinizdeki telefonu çıkarmanız, kamerayı açmanız, monitörünüze işaret etmeniz, odaklanması için bekleyin ve ardından bağlantıya dokunun — bu, monitörü açar açılmaz telefonda yerine ihtiyacınız olan bilgisayarında.</p>

<h2>Telefonlar Gerçek Dünyayı Tarar, Ekranları Değil</h2>
<p>QR kod taraması fiziksel nesnelere yönelik telefon kameraları için tasarlanmıştır. Kendi bilgisayar ekranınızı taramak için telefon kamerasını kullanmak hantal bir çözümdür: ekran parıltısıyla uğraşırsınız, kamera yakın aralıkta odaklanmakta güçlük çeker ve ortaya çıkan bağlantı yanlış cihazda açılır. Bağlantıyı Mac'inizde istiyorsanız, AirDrop'unu veya kendinize bir mesaj gönderin — bunların tümü zaten Mac'inizde olan bir bağlantıyı açmak için.</p>
<p>macOS ekran içeriği için yerleşik QR kod okuyucusu yoktur. Bir QR koduna sağ tıklayamazsınız Safari'de ve "kodu oku" seçeneğini seçin. Ön İzleme açık görüntüden birisini çözmez. Açık ekrandan aynı makinede kod içeriğine çözmek için hiçbir yerel yol yoktur.</p>

<h2>QR Kodlarını Doğrudan Ekranınızdan Tarama</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> ekranınızda görünür QR kodu okuyan bir okuyucu içerir. Menü çubuğundan etkinleştirin, QR kod etrafına seçim sürükleyin ve çözülen içerik — URL, metin, iletişim bilgisi, Wi-Fi kimlik bilgileri — hemen Mac'inizde kullanılabilir.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac ekranından QR kod taraması yapıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Belgelerdeki ve E-postalardaki QR Kodları</h3>
<p>Etkinlik biletleri, biniş kartları, ödeme onayları ve kurulum rehberleri sıklıkla QR kodları içerir. E-posta istemcisinde veya PDF görüntüleyicide kod etrafında seçim sürükleyin ve cihaz değiştirmeden çözülen içeriği alın.</p>

<h3>Geliştirici ve BT Kullanım Durumları</h3>
<p>İki faktörlü kimlik doğrulama kurulum sayfaları TOTP uygulamaları için QR kodları gösterir. API belgeleri bazen uç noktaları veya anahtarları QR biçiminde kodlar. Optic bunları doğrudan çözmesine izin verir ve iş akışınızı bir ekranda tutar.</p>

<h3>Her Şey Geçmişte Kalır</h3>
<p>Çözülen QR içeriği menü çubuğu geçmişinde metin yakalamalarının yanında kaydedilir. Dün taradığınız QR kodundan Wi-Fi parolası mı gerekiyor? Yeniden taramak yerine yakalama geçmişinize dönün.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "ocr-text-from-video-mac": {
    slug: "ocr-text-from-video-mac",
    title: "Mac'ta Video veya Akıştan OCR Metni Nasıl Yapılır",
    description: "Bir eğitim terminal komutunu gösteriyor, bir akış bir URL gösteriyor, bir ders formül gösteriyor — ve yakalamak için yeterince hızlı duramıyorsunuz.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir kodlama eğitimi izliyor ve eğitmen uzun bir terminal komutunu ekrana yapıştırıyor. Veya canlı akış kısaca bir indirim kodu gösteriyor. Veya kaydedilmiş bir ders karmaşık bir denklemi görüntülüyor. Metin birkaç saniye boyunca açıkça görünür, ancak video oynatıcısından seçilmesi hiçbir yolu yoktur. Duraklatıyorsunuz, çömeliyorsunuz ve yazmaya başlıyorsunuz — içerik devam etmeden önce her karakteri yakalamanız gerektiğini umup.</p>

<h2>Video Oynatıcılar Metni Göstermez</h2>
<p>Safari, Chrome, VLC, QuickTime veya herhangi bir akış uygulamasında izleseniz de, video karesinin işlenen görüntüsüdür. Etkileşimli metin katmanı yoktur. Altyazılar bazı oynatıcılarda seçilebilir, ancak video içeriğinin parçası olan ekran üzerindeki metin — kod, URL, başlıklar, veriler — kalıcı olarak piksel akışına yakıştırılır.</p>
<p>Duraklatılması yardımcı olur, ancak gördüğünüzü el ile yazın. Uzun komutlar, sorgu parametreleriyle URL'ler veya özel karakterleri olan teknik içerik için, manuel yazı yavaş ve güvenilmezdir. Terminal komutunda veya URL'de bir karakter yanlış ve sessizce başarısız olur.</p>

<h2>Herhangi Bir Video Karesinden Metni Yakala</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> ile videoyu duraklatırsınız (veya olmasın — hareketli içerikte de çalışır), aracı menü çubuğunuzdan etkinleştirin ve video karesinde görünen metin üzerinde seçim sürükleyin. Karakterler anında tanınır ve panoya kopyalanır.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta bir videodan metin okuyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kodlama Öğreticileri</h3>
<p>Terminal komutları, yapılandırma parçaları, dosya yolları ve video öğreticilerinde gösterilen paket adları — duraklatıp yazı yazmak yerine bir seçimle alın. Özellikle uzun yükleme komutları veya çok satırlı yapılandırmalar için değerli.</p>

<h3>Canlı Akışlar ve Web Seminerleri</h3>
<p>Sunucular sıklıkla URL'leri, promo kodlarını veya iletişim ayrıntılarını ekranda sadece birkaç saniye boyunca gösterir. Optic, seçim yaptığınız anında görüneni yakalar, böylece hızlı yazı yazmak için geçici bilgiyi yakalama ihtiyacı olmaz.</p>

<h3>Dersler ve Sunumlar</h3>
<p>Kaydedilmiş dersler formüller, alıntılar ve çoğunlukla yeniden yazılacak önemli çabalarıyla başlayan referanslar gösterir. İlgili bölüm üzerine sürükleyin ve ayıklanan metni doğrudan notlarınıza yapıştırın.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "copy-error-message-from-dialog-mac": {
    slug: "copy-error-message-from-dialog-mac",
    title: "Mac'ta İletişim Kutusundan Hata İletileri Nasıl Kopyalanır",
    description: "Teknik bir iletiyle bir hata iletişim kutusu açılıyor ve kopyalama düğmesi yok. Teknik bir iletiyle bir hata iletişim kutusu açılıyor — çözüm bulmak için gibberish hata kodlarını yazmayı bırakırsınız.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Uygulama çöküyor ve şifreli bir hata iletisiyle iletişim kutusu görünüyor: kod, dosya yolu, belki de stack trace referansı. Bu tam stringi araştırmanız gerekiyor bir çözümü bulmak için. Ancak iletişim kutusunun iki düğmesi vardır — Tamam ve İptal — ve metni seçmek veya kopyalamak için hiçbir yolu yok. Telefonunuzu çekip ekrandan fotoğraf çekip yazmaya başlıyorsunuz karakterleri yazarken. Veya yapışkan bir notta yazı yazı yazmaya başlıyorsunuz, karakter karakter.</p>

<h2>macOS İletişim Kutuları Nadir Olarak Metin Kopyalamaya İzin Verir</h2>
<p>Çoğu hata iletişim kutusu, uyarı pencereleri ve macOS'teki sistem istemleri metni statik etiketler olarak işlerler. Bunlara tıklayamaz, kısmi vurgulayamazsınız, kopyalama seçeneği için sağ tıklayamazsınız. Bu yerel macOS uyarıları, üçüncü taraf uygulama iletişim kutuları, yükleyici hata pencereleri ve kilitli olmayan etiketleri gösterir. Hata metni ne kadar teknik ve önemli ise, o kadar az seçilir.</p>
<p>Bu, özellikle BT desteği ve sorun giderme için hayal kırıcıdır. Çözüm araması, hata raporunu dosyalamak veya destek ekipleriyle iletişim kurmak için tam hata metni gerekir. Hata kodu yanlış — veya bir karakteri yanlış yazıp — alakasız sonuçlara yol açar.</p>

<h2>Hata Metnini Doğrudan İletişim Kutusundan Seç</h2>
<p>Hata iletişim kutusu göründüğünde, bunu açık tutun ve menü çubuğunuzdan <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> etkinleştirin. İletişim kutusundaki hata iletisi metni üzerine seçim sürükleyin. Optic karakterleri okur ve panoya kopyalar — tam string, tam düzeltme, tam büyük harf.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta iletişim kutusundan hata iletisini kopyalıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Çözümü Hemen Ara</h3>
<p>Tam hata stringini Google, Stack Overflow veya Apple destek forumuna yapıştırın. Tam eşleşme aramaları, hata açıklamalarınız yerine uygun sonuçları yüzey çok daha güvenilir.</p>

<h3>Hata Raporları ve Destek Biletleri</h3>
<p>Hata raporlarına veya destek e-postalarına tam hata metni ekleyin. Geliştiriciler ve destek aracıları, kullanıcının hata yorumu yerine tam hata string ile sorunları çok daha hızlı belirleyebilirler.</p>

<h3>Yinelenen Hatalar</h3>
<p>Optic her yakalamayı menü çubuğu geçmişine kaydeder. Aynı hata görünmeye devam ederse, ekran görüntü almanız gerekmeden her oluşum için damgalanmış bir kayıdınız vardır.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "mac-live-text-limitations": {
    slug: "mac-live-text-limitations",
    title: "Mac Canlı Metin Sınırlamaları — Neler Yapamaz",
    description: "Apple'ın Canlı Metni birkaç yerde çalışır ancak diğer birçok yerde sessizce başarısız olur. Ekran OCR için ona güveniyorsanız, duvarlar hızlı çarpacaksınız.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Apple, resimlerdeki metni tanıyan sistem düzeyinde bir özellik olan Canlı Metin tanıttı. Teoride, "resimlerde seçilemeyen metin" sorununu çözmek gibi geliyor. Uygulamada, dar bir senaryo seti içinde çalışır ve birçok durumda sessizce hiçbir şey yapmaz; burada aslında buna ihtiyacınız vardır.</p>

<h2>Canlı Metnin Yetersiz Olduğu Yerler</h2>
<p>Canlı Metin Fotoğraflar, Ön İzleme, Safari (bazı görüntülerde) ve Hızlı Bakış'ta çalışır. Bu kabaca çatısının sonu. İşte Yardımsız olması için yaygın durumlar:</p>
<p><strong>Video kareleri.</strong> Canlı Metin video içeriğinde çalışmaz. YouTube videosunda, Zoom ekran paylaşımında, QuickTime kaydında veya herhangi bir akış oynatıcısında metin göründüyse, Canlı Metin bunu tanımaz. Elle yazı yazmaya geri dönüyorsunuz.</p>
<p><strong>Uygulama arayüzleri ve iletişim kutuları.</strong> Uygulama kullanıcı arayüzlerinde etiket olarak işlenen metin, hata iletişim kutuları, menü öğeleri ve özel denetimler Canlı Metin'e görünmez. Yalnızca katıştırılmış görüntülerde etkinleşir, keyfi ekran içeriğinde değil.</p>
<p><strong>Canvas veya SVG metni olan web uygulamaları.</strong> Pek çok modern web uygulaması canvas öğeleri veya SVG kullanarak metni işler — gösterge tabloları, veri araçları, tasarım uygulamaları. Canlı Metin bu işleme bağlamlarına ulaşamaz.</p>
<p><strong>Seçilemez PDF'ler.</strong> Ön İzleme bazen görüntü tabanlı PDF'lerde metni tanıyabilse de, sonuçlar tutarsızdır ve tarama kalitesi, sayfa karmaşıklığı ve PDF yapısına bağlıdır. Pek çok taranmış belge Canlı Metin etkileşimi gösterir.</p>
<p><strong>Kopya korumalı içerik.</strong> Canlı Metin DRM ve kopya kısıtlamalarını saygı gösterir. Uygulama veya belgede metin seçimi devre dışı bırakıldıysa, Canlı Metin uyar.</p>
<p><strong>Yakalama geçmişi yok.</strong> Canlı Metinin hafızası yoktur. Her tanıma geçicidir. Resmi kapatırsanız veya uzaklaşırsanız, tanınan metin gider. Yakalama veya çıkarmış olduğunuz hiçbir günlük yoktur.</p>

<h2>Bu Sınırlamalar Olmadan Ekran Düzeyinde OCR</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> dosya veya görüntü düzeyinde değil, ekran düzeyinde çalışır. Ekranınızda görünür karakterleri okur — herhangi bir uygulama, herhangi bir kaynak, herhangi bir bağlam. Video kareleri, iletişim kutuları, web uygulaması canvası, kilitli PDF'ler, uzak masaüstü oturumları — metni görebilirseniz, Optic okuyabilir.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta Canlı Metin sınırlamalarının üstesinden geliyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Geçmiş ve Metin-Konuşma</h3>
<p>Canlı Metinin aksine, Optic menü çubuğundan erişilebilir kalıcı geçmişte her yakalamayı kaydeder. Metin-konuşmayı da içerir, seslendirilen yakalanan metinizi dinlemenize izin verir — ayıklanan içeriği kontrol etmek veya erişilebilirlik için yararlı.</p>

<h3>QR Kod Taraması</h3>
<p>Canlı Metin bazı görüntü bağlamlarında QR kodları okuyabilir, ancak videodan, ekran paylaşımından veya keyfi uygulama pencerelerinden değil. Optic QR kodlarını ekranınızın herhangi bir yerinden tarar ve hemen kodlar.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "textsniper-alternative-mac": {
    slug: "textsniper-alternative-mac",
    title: "Mac için TextSniper Alternatifi",
    description: "Temel metin yakalamalarının ötesine geçen bir ekran OCR aracı arıyorsunuz — QR taramasında, yakalama geçmişinde ve metin-konuşmada dahil olmak üzere yerleşikdir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>TextSniper ekran düzeyinde OCR fikrini Mac'ta popülerleştirdi: dikdörtgen çizin, metni alın. Basit bir konsept, gerçek bir sorunu çözer. Ancak bunu kullandıysanız ve kendinizi daha fazla istediğini bulduysanız — geçmiş yakalama, QR kod desteği veya ayıklanan sesi yüksek sesle okumayı dinleme yeteneği — muhtemelen alternatifler aramışsınızdır.</p>

<h2>Temel Ekran OCR'de Neler Eksik?</h2>
<p>Çoğu ekran OCR aracı temel yakalamayı iyi yönetir: bir kısayolu etkinleştirin, bölge sürükleyin, panoya metin alın. Ancak o tek eylem etrafındaki iş akışı tam kadar önemli.</p>
<p><strong>Yakalama geçmişi yok.</strong> Metni ayıklarsınız, bir yere yapıştırırsınız ve yakalama gider. On dakika sonra aynı metne tekrar ihtiyacınız varsa, yeniden tarama yapmanız gerekir. Hemen yapıştırmasaydı, kopyaladığınız sonraki şey bunu üzer yazıyor.</p>
<p><strong>QR kod okuma yok.</strong> Ekranınızdaki QR kodları — e-postalarda, belgelerde, web sayfalarında — ayrı bir araç veya telefonunuzun kamerasını gerektirir. Bir ekran yakalama aracı QR kodları çözebilirse, sizi cihazları dengeleme işinden kurtarır.</p>
<p><strong>Metin-konuşma yok.</strong> Bazen metinleri okumak yerine duymak istersiniz — kontrol yapmak, erişilebilirlik veya çok görev yapmak için. Temel OCR araçları pan çıkışında duraklıyor.</p>

<h2>Optic: Tam İş Akışı ile Ekran OCR</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> aynı temel OCR yakalamayı yönetir — ekranda görünür metni herhangi bir kaynaktan seçin — ve ekran OCR'nin gün içinde gerçekten kullanışlı kılmanı özellikler ekler.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac için TextSniper alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Menü Çubuğunda Yakalama Geçmişi</h3>
<p>Her metin ayıklama ve QR taraması kaydedilir ve menü çubuğundan erişilir. Önceki yakalamalardan kaydırın, bir saat önce ayıklamış olduğunuz şeyi yeniden kopyalayın veya bir araştırma oturumundan bir dizi ayıklamayı gözden geçirin. Kopyasından bir başka şey ortadan kalktığında artık metni yitirmek yok.</p>

<h3>Yerleşik QR Kod Tarayıcı</h3>
<p>Ekranınızda görünen herhangi bir QR kod etrafında seçim sürükleyin ve Optic çözer. URL'ler, Wi-Fi kimlik bilgileri, iletişim kartları, düz metin — kod ne içerirse içersin, hemen görünür, telefon gerekmez.</p>

<h3>Metin-Konuşma</h3>
<p>Yakalanan herhangi bir metin yüksek sesle okunabilir. Yakalamalar tarafından bir seçim tarafından ayıklanan içeriği dinlemek faydalı, erişilebilirlik yaşamı için yararlı veya başka bir şey üzerinde çalışırken ayıklanan içeriğini dinlemek için yararlı.</p>

<h3>Menü Çubuğu Yerel</h3>
<p>Optic menü çubuğunda yaşar ve ihtiyacınız olana kadar uzakta kalır. Dock simgesi yoktur, yönetilecek ana pencere yok — sadece bir hafif araç, her zaman bir tıklama veya kısayol bir tıklama uzağında.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "copy-code-from-screenshot-mac": {
    slug: "copy-code-from-screenshot-mac",
    title: "Mac'ta Ekran Görüntüsünden Kod Nasıl Kopyalanır",
    description: "Bir öğretim, bir tweet veya belgeleri kodu resim olarak gösteriyor. Yazmak hata tanıtıyor. İşte nasıl seçilebilir metne ayıklanır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir geliştirici Twitter'de bir kod parçacığını ekran görüntüsü olarak paylaşıyor. Eğitim blog yazısı örneklerini kod blokları yerine resimler olarak işleriyor. Dahili bir araç belgeleri yalnızca bir terminali ekran görüntüleri olarak var. Kod açıkça okunabilir, ancak bir resim içinde kilitli — ve bir resimden kod yazmak görünmez hataları tanıtmanın en güvenilir yollarından biridir.</p>

<h2>Neden Resimlerden Kod Yazmak Başarısız Olur</h2>
<p>Kod hassasiyet hakkında cezalandırıcıdır. Eksik yarı küme, küçük harf l karışık rakam 1 ile, küme ayraçları karşı parantez, kırılım en çizgi yerine kırılım — bu hiçbir ses sessizce kodu kıracak. Bir ekran görüntüsünden yeniden yardımcı olduğunuzda, karakter karakter görsel ayrıştırma yapıyorsunuz, bu hızda bu hataları davet ediyor.</p>
<p>Sorun yaygındır. Sosyal medya platformları daha güzel işleme için kodu görüntülere dönüştürür. Eski belgeler ekran görüntülerinden asla geçirilmedi. Slack ve Teams mesajları kodla sıklıkla ekran görüntüye alınır ve iletilir. Dahili wikis hiç kimse yazılı ekran görüntüleri tarafından yazılmış yıllar birikir.</p>

<h2>Kodu Doğrudan Ekrandan Ayıkla</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> kod karakterlerini ekranınızdan sağa okur. Ekran görüntüsünü veya kod görüntüsünü içeren sayfayı açın, menü çubuğunuzdan Optic'i etkinleştirin ve kod üzerinde seçim sürükleyin. Ayıklanan metin panoya gider, editörünüze veya terminalinize yapıştırmaya hazır.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta ekran görüntüsünden kodu çıkarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Terminal Komutları</h3>
<p>Uzun yükleme komutları, Docker run deyimleri, birden çok bayraklı curl istekleri — bunlar yaygın olarak ekran görüntüleri olarak paylaşılır. Optic bir sürükleme komutu ayıklar, özel karakterleri, bayrakları ve yanlış yazılması kolay olan yolları korur.</p>

<h3>Sosyal Medyadan Kod Parçacıkları</h3>
<p>Twitter, LinkedIn ve Instagram mesajları sıklıkla Carbon veya Ray.so gibi araçları kullanarak kodu stilize ekran görüntü olarak işlerir. Optic bu şekil ekran görüntülerinden kodu bu kadar kolay çıkarır düz terminal çıktısı.</p>

<h3>Çok Satır Ayıklama</h3>
<p>Birden çok satırı kapsayan bir kod bloğu seçin ve Optic hat yapısını korur. Editörünüze yapıştırın ve kod şeklini korur — el ile reformatlamaya gerek yok. Her yakalama menü çubuğu geçmişinde kaydedilir, böylece bir öğreticiden birden çok parçacık ayıklayabilir ve birini bir yapıştırabilirsiniz.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "read-text-aloud-from-screen-mac": {
    slug: "read-text-aloud-from-screen-mac",
    title: "Mac'ta Herhangi Bir Ekran İçeriğinden Metin Yüksek Sesle Oku",
    description: "Ekranınızda metni yüksek sesle duymak istiyorsunuz — resim, kilitli belge, video karesinden — ancak Mac'ın yerleşik konuşması yalnızca seçilebilir metinde çalışıyor.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>macOS yerleşik bir "Seçimi Söyle" özelliğine sahip: metni vurgulayın, sağ tıklayın ve "Konuşma" seçin. İyi çalışır — metin seçildiğinde. Ancak bir resimden, taranmış PDF'den, video karesinden veya etkileşimli olmayan UI öğesinden metin yüksek sesle okumak istemeniz gerekir, konuşma özelliği seçilemeyecek bir şeyle uğraşmak zorundasınız. Konuşamadığınız şeyi seçemezsiniz.</p>

<h2>Ekran İçeriği ve Konuşma Arasındaki Boşluk</h2>
<p>Pek çok durum metin yüksek sesle okunmasını çağırıyor. Dinleme yakaladığınız hatalar gözleriniz atlar. Çok görevlilik tarafından fayda görür — ayıklanan içeriği dinleyebilir ve başka bir şey üzerinde çalışıyorsunuz. Erişilebilirlik ihtiyaçları yerel olarak seçilemeyen içeriğe kadar uzanır. Dil öğrenenler, tanımadıkları metni duyduğunu avantaj yaşıyor.</p>
<p>Ancak yerleşik konuşma araçları yalnızca standart metin seçimlerinde çalışıyor. Metin bir resimde, web uygulamasında grafik olarak işleniyorsa, video olarak gösteriliyorsa veya taranmış belge içinde kilitli ise, macOS "ekranda görünür" ile "yüksek sesle oku" arasında yol sunar. Yapmanız gereken metin ilk yazısı el ile, bu amaç yitir.</p>

<h2>Herhangi Bir Metni Seç, Seslendirilen Dinle</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> ekran düzeyinde OCR ile metin-konuşma birleştirir. Menü çubuğunuzdan etkinleştirin, herhangi bir görünür metin sürükleyin — kaynağından bağımsız olarak — ve yakalanan metni yüksek sesle dinleyebilirsiniz. Elle yazı yok, metnin yerel olarak seçilmesi gerekli yok.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta ekran içeriğinden metni yüksek sesle okuyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>OCR Sonuçlarını Prova Okuma</h3>
<p>Taramadan veya görüntüden metin ayıklandıktan sonra, yüksek sesle okunmak doğru görünebilir hatalar yaşa göz atar. Yanlış kelime veya çatıştırılan kelime sesle konuştuğunda belir ancak görsel gözden kaçabilir.</p>

<h3>Erişilebilirlik</h3>
<p>Ekran okuyuculara dayananlara, görüntülerde kilitli içeriğe ve seçilemez biçim engel engelli oluşturur. Optic bu boşluğu herhangi bir görünür metni hem panoya metne hem de konuşulan sesine dönüştürerek daha önceden ulaşılamayan içeriğin erişilebilir kılarak köprü.</p>

<h3>Çok Görevlilik ve Dil Öğrenme</h3>
<p>Belgeden veya web sayfasından bir paragraf ayıklayın ve pişir, gidişi veya alıştırma sırasında dinleyin. Dil öğrenenler metini yabancı dilde seçebilir ve konuşma çıktısını kullanarak yanlış söylenen sözleri duymak.</p>

<h3>Konuşma Geçmişi ile Yakalama</h3>
<p>Her yakalama menü çubuğu geçmişinde kaydedildiğinden, önceki bir ayıklamaya dönüp yeniden yüksek sesle okunmasını sağlayabilirsiniz — faydalı notları gözden geçirmek veya oturum başında içeriğe geri dönmek için.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "ocr-receipts-mac": {
    slug: "ocr-receipts-mac",
    title: "Mac'ta Makbuzları OCR'le — Fotoğraflardan Metni Ayıkla",
    description: "Gider raporlaması için bir makbuzu fotoğrafladınız, ancak şimdi satıcı adı, toplam ve tarih olarak panoya metin olması gerekiyor — tekrar yazmak zorunda olduğunuz fotoğraf değil.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Makbuzu fotoğrafladığınız çünkü giderler için daha sonra ihtiyacınız olacak. Veya e-posta yoluyla taranmış makbuzu alırsınız. İhtiyacınız olan bilgiler — satıcı adı, tarih, satırbaşlı toplamlar, vergi tutarları — görüntüde ama daha sonra ödeme raporunu doldurmak gerekirse zamanı gelir, fotoğrafa bakarsınız ve her satırı yazarsınız. Toplam yanlış rakam transpoze ve rapor bayrak alır.</p>

<h2>Neden Makbuz Fotoğrafları Çalışmak Zor?</h2>
<p>Makbuzlar en kötü manuel yazı aday. Küçük yazılar, tutarsız girintili ve kısaltmalarını kullanırlar. Termal kağıt hızlı solup, yaşlı makbuzlar okuması zor. Ve her gider sistemi yapılandırılmış veri ister — satıcı, tarih, tutar — JPEG eki değil.</p>
<p>macOS makbuz fotoğrafından metni ayıklamak ve panoya koymak için yerleşik bir araç yoktur. Ön İzleme resmi gösterir. Fotoğraflar bunu organize eder. İkisi de yazdırılmış metni seçmesine izin vermez ve kopyalama. Üçüncü taraf gider tarayıcıları var, ama bunlar kurumsal iş akışları için tasarlanmış ağır uygulamalar, ekranınızdan makbuz toplamını hızlı almak için değil.</p>

<h2>Makbuzu Sürükle, Metni Al</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> ekranda doğrudan metin okur. Makbuz fotoğrafını herhangi bir görüntüleyicide açın — Ön İzleme, Hızlı Bakış, tarayıcı, hatta posta istemcisi — menü çubuğunuzdan Optic'i etkinleştirin ve ihtiyacınız olan makbuz bölümü üzerinde seçim sürükleyin. Tanınan karakterler panoya gider, elektronik tabloyu veya gideri formu yapıştırmaya hazır.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta makbuz fotoğrafından metni ayıklıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gider Raporları</h3>
<p>Makbuz görüntüsünden satıcı adı ve toplamı seçin ve bunları doğrudan gider takip aracınıza yapıştırın. Yazı yok, yazı yok. Tek satır öğeleri veya tüm makbuz alın — her yakalama menü çubuğu geçmişinde kaydedilir.</p>

<h3>Vergi ve Muhasebe</h3>
<p>Serbest çalışanlar ve küçük işletmeler yıl boyunca makbuz fotoğraflarını biriktirir. Vergi mevsimi gelince, her makbuz görüntüsünü açın ve ilgili rakamları Optic'le çıkar. Yıllık makbuzları elle yazı yerine dakikalarda inşa edin.</p>

<h3>Geri Ödeme İstekleri</h3>
<p>Geri ödeme e-postasına tam tutarlar eklemeniz gerekir? Makbuz fotoğrafından toplamı, vergiyi ve tarihi ayıklayın ve mesajınıza yapıştırın. Makbuzdan tam rakamlar hafızadan yaklaşık numaların yazılı olasılığından daha iyi sorumluluk alır.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "copy-text-from-zoom-screenshare-mac": {
    slug: "copy-text-from-zoom-screenshare-mac",
    title: "Mac'ta Zoom Ekran Paylaşımından Nasıl Metin Kopyalanır",
    description: "Meslektaş ekran paylaşıyor Zoom'da URL, yapılandırma veya veri gösteren — ancak görüyorsunuz, seçemez veya herhangi bir metin kopya kopyalayamazsınız.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Zoom toplantısı içinde ve meslektaşlar ekran paylaşımı var. Pano gidiyor, yapılandırma dosyası gösteriyor veya uygulama gösteriyor. Paylaşılan ekran açıkça URL'ler, kimlik bilgileri, terminal komutları ve veriler görebilirsiniz — ancak Zoom görüntüleyici sıfır yeteneği bunların herhangi biri etkileşime izin verir. Saat izleyebilir, seçemezsiniz. Bir terminal komutu, dosya yolu, API uç noktası ve yapılandırma değeri kaydırma geçer ve seçenekleriniz: taşın kodu panosu sohbetine yazılı, unutun ve toplantı devam ediyor.</p>

<h2>Ekran Paylaşımları Tasarım tarafından Görünüm-Sadece</h2>
<p>Birisi Zoom, Google Meet veya Microsoft Teams'te ekran paylaşımını yaptığında, gördüğünüz video kanalıdır. İmlecin etkinleşimi içeriğine çalışmaz. Metin editörüne tıklayamaz, terminal çıktılarını vurgulayamaz, tarayıcı sekmelerine sağ tıklayamaz. Paylaşılan ekran üzerinde işlenmiş her şey Mac'ınızın perspektifinden hareketli resim.</p>
<p>Bu, özellikle teknik toplantılarda acı veren. DevOps mühendisi Kubernetes yapılandırması gösterir. PM analitiği gidiyor. Tasarımcı mock-up'larda kopyasını sunuyor. Metin kaydırma geçer ve seçenekler: ondan yavaşlama ve dikte isteme, hızlı yazı ve umuyorsunuz veya kayıt yeterince netse daha sonra tekrar ziyaret edin.</p>

<h2>Herhangi Bir Paylaşılan Ekrandan Metni Yakala</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> Zoom penceresini ekranınızın başka bir bölümü gibi davranır. Menü çubuğunuzdan etkinleştirin, paylaşılan ekran tarafından görünen metin üzerinde seçim sürükleyin ve tanınan karakterler panoya kopyalanır. Suncunun tarayıcı, terminal, elektron tablosu veya slayt gösterme gösterip göstermediğini çalışır.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta Zoom ekran paylaşımından metin yakalar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Teknik Toplantılar</h3>
<p>Terminal komutları, dosya yolları, API uç noktaları ve yapılandırma değerlerini sohbetine geçen anında sunucu gösterir. Pausa ve yardımcı istemeyin. Yazı yok. Toplantı sonrası hafızadan yazı yok.</p>

<h3>Veri ve Gösterge Tabloları</h3>
<p>Paylaşılan ekran ölçütleri, KPI'ler veya tablo verisi gösterdiğinde, rakamları seçin. Kendi notlarınıza veya elektronik tablonuza kopyalayın tam değerlerle gösterilenler.</p>

<h3>Toplantı Notları Geçmişi Yakala</h3>
<p>Her çıkarım menü çubuğu geçmişinde kaydedilir. Toplantı boyunca birden çok yakalama yapın ve damgalanmış bir günlüğünüz olacak her metin parçacık aldığınız zaman — işlevsel toplantı notları en önemli içerik için.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "mac-screenshot-to-text": {
    slug: "mac-screenshot-to-text",
    title: "Mac Ekran Görüntüsü Metne — Herhangi Bir Yakalamadan Sözcükler Çıkart",
    description: "Ekran görüntüleri sürekli yaparsınız, ancak bu yakalamalardan metni editlenebilir, araştırılabilir metne dönüştürmek hala her şeyin yazılı yazısını gerektirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Ekran görüntüler ekranda ne olduğunu yakalama hızlı yolunun. Ancak, onay numarasını, bir tarifi, Wi-Fi kimlik bilgilerini veya bir adresini— yakalanan görüntüyü kullanan bilgiler — ve zamı bir form, e-posta veya belgede gerekirse, karakter karakter yazı yazı yazarsınız.</p>

<h2>Ekran Görüntüsü Metne Boşluk</h2>
<p>macOS ekran görüntü alma kolay kılar. Klavye kısayolları yapılır, yakalamalar yüksek kalitedir ve Masaüstüne auto-kurtarır veya panoya yapıştırın. Ancak macOS yakalamanın görünür metnini gerçek editlenebilir metne dönüştürmek yapılı kolay kılmaz. Ekran görüntü iş akışı görüntüde sonlanır. Bundan sonra her şey — ayıklama, kopyalama, yapıştırma sözcükleri — tamamen elle.</p>
<p>Metin "mentale" ekran görüntüleri hızlı bir şekilde Masaüstü görüntü bir görüntülerini tahakkuk ettirmek — aranabilir, indekslenebilir ve kolay başvuru olmaz. Bu bir onay numarası bulma bir tarama onlarca yakalamalar ve görsel taramalı anlamına gelmek.</p>

<h2>Ekran Görüntüsü Atla, Metni Doğrudan Yakala</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> ekran görüntü-yapı-yazı iş akışını tek bir eylem ile değiştirir. Metnin görüntüsünü yakalaması yerine, menü çubuğunuzdan Optic'i etkinleştirin ve ihtiyacınız olan kelimelerin üstünde seçim sürükleyin. OCR motoru karakterleri okur ve editlenebilir metin olarak panoya kopyalar — görüntü kaydedilmez, yazı yok.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta ekran içeriğini metne dönüştürüyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zaten Ekran Görüntüsü Aldınız mı?</h3>
<p>Sorun yok. Herhangi bir görüntüleyicide mevcut ekran görüntüsünü açın ve Optic'in seçimini içinde görünen metin üzerinde sürükleyin. Ekranda görüntülenen herhangi bir resim karakterleri okur, mevcut ekran görüntü kitaplığınız boşa gitmez — sadece erişilebilir olur.</p>

<h3>Aranabilir Yakalama Geçmişi</h3>
<p>Metin ekran görüntü yerine, her metin ayıklama menü çubuğu geçmişi tutulur. Araştırılabilir metin dizeleri kaydırılabilir listesi yerine ekran görüntü dosyaları klasörü. İki gün bu tutması gereken Wi-Fi parolası mı gerekiyor? Ekran görüntü dosyaları kullanmak yerine yakalama geçmişine dönün.</p>

<h3>Cmd+Shift+4 Hızlıdan Hızlı</h3>
<p>Hareket sırasında neredeyse aynıdır — etkinleştir, dikdörtgen sürükle — ancak çıktı hemen yararlı metin düz görüntü yerine. Ekran görüntü birincil olarak metni kaydetmek için kullananlar, tüm yazı adımı ortadan kaldırır.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "copy-serial-number-from-image-mac": {
    slug: "copy-serial-number-from-image-mac",
    title: "Mac'ta Görüntüden Seri Numarasını Nasıl Kopyalanır",
    description: "Seri numarası fotoğraf, tarama veya ayarları sayfasında oturursa — uzun, alfanumerik, yazı yapmak hatasız. Panoya metin olarak pixelsidir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Ürün kaydı, garantileme talep dosyası veya destek iletişim — ve seri numarası ister. Sorun: seri numarası fotoğrafladığınız stiker üzerinde, PDF faturasında, ayarları sayfasının ekran görüntüsüne, e-posta onayına katıldı. Uzun dizeleri — bazen 15 veya 20 karakter — deseni yok hatırlamaya yardımcı. Yazı kaydı eğer en azından bir karakter yanlış biraz emin nedir.</p>

<h2>Seri Numaraları Elle Girişi Yenileme İçin Yapılır</h2>
<p>Seri numaraları büyük harfleri, küçük harfler ve rakamları kombinleri dizileri benzersiz, hatırlanması düşük olmak tasarım. O ve 0 karakterleri, l ve 1, S ve 5 çoğu yazılarında neredeyse aynı görünür. Tek yanlış karakter seri doğrulamayan ve 20 karakter biri olup olmadığını merak kalır.</p>
<p>macOS burada kısayol vermez. Seri numarası bir fotoğraf veya taranmış belgede ise, seçemezsiniz. E-postaya göm resimde ise, vurgulayamazsınız. Dikkatli yazı umarak kalırsınız ve her denetim veya yakınlaştırma karakter karakter çift denetleme.</p>

<h2>Seri Numarası Sürükle, Mükemmel Kopyala</h2>
<p>Seri numarası içeren görüntü, tarama veya ekran görüntüsünü herhangi bir uygulamada açın, menü çubuğunuzdan <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> etkinleştirin. Seri numarası stringi hakkında dairesel seçim sürükleyin. OCR motoru her karakter okur ve tam metni panoya kopyalar. Kayıt formu, destek sohbetine veya kayıtlarınıza yapıştırın.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta görüntüden seri numarası kopyalıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ürün Kaydı</h3>
<p>Yeni donanım genellikle kurulum veya garantileme kaydı sırasında seri numarası girmesi gerektirir. Etiketi fotoğrafla, Mac'ında açın ve Optic bir sürükle stringini çıkart. Çömelenmiş, O ve 0 arasında tahmin yok.</p>

<h3>Destek ve Garantileme Talepleri</h3>
<p>Destek aracıları cihazı veya ürünü aramak için seri numaraları istiyorlar. Tam stringi panoya sahip, destek sohbetine veya e-postaya doğru yapıştırabilir, yanlış girişleri arkasında ileri geri kaçıyor.</p>

<h3>Varlık İzlemesi</h3>
<p>BT departmanları şirket donanımında varlık etiketlerini ve seri etiketlerini fotoğraflar. Optic bu resimler editlenebilir metne dönüştürür, envanter elektronik tablosu doldurmayı düzine seri numarası elle yazılı olmak basit kılar.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "ocr-handwriting-mac": {
    slug: "ocr-handwriting-mac",
    title: "Mac'ta El Yazısını OCR'le — Yazılı Notları Metne Dönüştür",
    description: "El yazılı notlarla fotoğrafı girmişiz — beyaz tahtadan, not defterinden veya yapışkan nottan — ve kelimeleri editlenebilir dijital metin olarak gerekiyor.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Toplantı yirmi dakika önce sonlandı ve birisi bunu silmeden önce beyaz tahtanın fotoğrafını çeken. Veya not defterinizde elle not aldık ve çünkü ekibe e-posta ihtiyacınız notları. Sözcükler görüntüde yazılı açıkça yeterince, ancak yazılı metni resimden seçmeniz ve belgeye yapıştırmanız hiçbir yolu yoktur. Ayaklı oturuş ve kendi yazılı başında yazı başınsırı başı.</p>

<h2>El Yazısı Dijital Metin Dünyası Dışında Yaşıyor</h2>
<p>macOS herhangi diğer görüntü olarak el yazısı olan resimleri davranır — pixeller metin katmanı şekilde yapılı. Ön İzleme not tahtası fotoğrafı görüntüleyebilir ancak sözcükleri çıkarmaz. Apple'ın Canlı Metni bazen Fotoğraflar içinde temiz yazısını tanıyabilir, ancak performans yaraçıkça değişir yazılı tarzı, görüntü kalitesi ve açı ile. Dağlığı ama okunabilir yazılı sıklıkla hiçbir sonuç üretmez her zaman.</p>
<p>Yazılı OCR uygulamaları var, ancak çoğu iOS-odaklı veya bulut hizmetleri için yükleme görüntülerini gerektirir. Mac üzerinde kalır ve ekranında zaten olan fotoğraf ile çalışmak istiyorsanız, seçenekleri ince.</p>

<h2>Herhangi Fotoğrafından El Yazılı Metni Seç</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> ekranınız görünür ne, yazılı metin de dahil olmak üzere OCR gerçekleştirin. Herhangi bir görüntüleyicide notlar fotoğraf açın, menü çubuğunuzdan Optic'i etkinleştirin ve yazılı bölümü seçim sürükleyin. Tanınan metin panoya e-postalar, belgeler veya not uygulamalarına yapıştırmak için kopyalanır.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta fotoğraftan yazısını tanıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Beyaz Tahtası Yakalamalar</h3>
<p>Toplantı beyaz tahtaları geçici — biri her zaman alan gerektirir. Tahtanın fotoğrafını çeken, Mac'ında açın ve Optic'le yazılı içeriği çıkart. Dönen oturumları, etiketleri şemaları ve yapılacakları listeleri silinmeden önce dijital metne kapatamak dönüştür.</p>

<h3>Not Defteri Sayfaları</h3>
<p>Pek çok kişi ilk düşünme için penle kağıdı tercih ederken, dijital paylaşma ve arama için metin gerekiyor. Not defteri sayfasını fotoğrafla ve bölüm çıkart. Sayfanın tümü yazı yazmak zorunda değilsiniz — sadece paragraf veya mermiler seçin gerekir.</p>

<h3>Yapışkan Notlar ve Etiketler</h3>
<p>Monitöre yazılı yapışkan notlar, saklama kutularında etiketler, yazdırılmış belgelerde açıklamalar — fotoğrafla ve metni çıkart. Özellikle birinin başka yazısı dahil ve yazarken tarafından deşişir OCR dene yerine tasarlanmış karakter tercih ederseniz yararlıdır.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "mac-text-recognition-menu-bar": {
    slug: "mac-text-recognition-menu-bar",
    title: "Mac Menü Çubuğundan Metin Tanıma",
    description: "Uygulamayı açmadan, dosyaları içe aktarmadan veya iş akışınızı bozmadan hızlı metin tanıması gerekiyor — sadece ekranda olan çabuk bir grabı.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir şey ortasında — e-posta yazma, kodlama, tarama araştırması — ve metni gerekiyor ekranda spot. Belki resimde, video karesinde veya seçilemeyen UI öğesinde. Son şey istediğiniz ayrı OCR uygulaması açma, dosyayı alma, temizlik, tanıma bekleme ve son yapma. Metni şimdi gereklidir, yapmakta olduğunuz bırakmadan.</p>

<h2>Geleneksel OCR İş Akışını Keser</h2>
<p>Çoğu OCR aracı penceresi, dosya tarayıcılar ve işleme boru hatları olan başlı başına uygulamalar. Bunları kullanmak, kaydeden veya ekran görüntü içeriğin, OCR uygulamasına geçer, dosyayı alır, tanım bekleme, sonucu kopyalar, orijinal uygulamaya geri geçer ve yapıştırır. Sekiz bağlam alıch için bu kadar birkaç saniye görev için.</p>
<p>Hatta daha hafif ağırlık araçları kendi penceresi veya paneli sıklıkla gerektir. Dock oturup, ekran gerçek demanda. Kısa, sık metin yakalama boyunca bir iş günü, bu genel masraflı hızlıca ekler.</p>

<h2>Bir Tıkla, Bir Sürükle, İşe Geri Dön</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> Mac menü çubuğunda yaşar — en agresif olmayan konum mümkün. Menü çubuğu simgesine tıkla veya kısayolu tuş, metni gerekiyor dikdörtgen sürükle ve tanınan karakterler panoya — tüm etkileşim iki saniyede altında ve çalışıyorsunuz uygulamayı asla bırakın.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac menü çubuğundan metin tanıma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Her Zaman Kullanılabilir, Hiçbir Zaman Şekilde</h3>
<p>Dock simgesi yok, ana pencere yok, uygulamayı yönetmek yok. Optic menü çubuğu oturuyor gerekene kadar sessiz kalır. Girişte başlat ve hazırlanmaya kalır dikkat veya ekran alan tüketen olmadan.</p>

<h3>Kısayol Tuşu Erişimi</h3>
<p>Daha hızlı etkinleştirme için, menü çubuğu dokunmadan yakalama tetiklemek kısayolu tuş kullan. Eliniz klavyede kalakalır, seçim sürükle ve metin yakalanır — menü çubuğu tek tıkla bitmeden.</p>

<h3>Ayrı Penceresiz Geçmiş</h3>
<p>Her yakalama menü çubuğu açılır tutulmak tutulur. Optic simgesine tıkla son yakalamalarıbeş bak, önceki ayıklamayı yeniden kopyala veya oturum boyunca ne tuttuğunuz gözden geçir. Geçmiş araç yaşayan — menü çubuğu, gerekene kadar uzak kalır.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "copy-text-from-youtube-video-mac": {
    slug: "copy-text-from-youtube-video-mac",
    title: "Mac'ta YouTube Videosundan Metin Nasıl Kopyalanır",
    description: "YouTube videonuzu gösteriyor komut, bağlantı veya bilgiye ihtiyacınız — videosunu oynatıcı hiçbir metin ayıklanıyor izin vermez.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>YouTube öğretim izliyor ve eğitmenci uzun terminal komutu yazıp çekiyor. Veya video taraflarından ortaya ürün karşılaştırma tablo yanlış. Veya teknoloji gidiş ayarlar sayfası görüntülüyor. Metin ekran mükemmel görünür, ancak YouTube video oynatıcı çatı çerçeveli işlemedikleri — hiçbir seçim düğmesi, tıkla, kopyalama mekanizması olur. Ekranda metin donup yazı başınsırı, her bayrak veya yol istediğini umup.</p>

<h2>YouTube Metni Video Kendi Baked</h2>
<p>YouTube video karenin gördüğünüz her şey çözümü görüntü. Slydı bir terminal oturum, bir kod editör veya ekran grafikleri, metin piksel verisi parça yapılı. YouTube video içeriğinden metin ayıklama mekanizması sunmaz. Altyazı ve açıklama ayrı — söylenmiş olan ne kapsanır, şekle gösteri değil.</p>
<p>Bazı yaratıcılar komut ve bağlantı video açıklaması veya sabitlenen yorum koyun, ama çoğu yok. Karşılaştırma tablolar, ayarlar sayfaları veya videolar geçiş veri gibi içeriği, tipik olarak metin eşdeğer hiçbir sağlanmıştır.</p>

<h2>Video Karesinden Doğrudan Metin Dokun</h2>
<p>Videoyu saat belirli an duraklatma (veya yok — hareket içeriği çalışır de), menü çubuğunuzdan <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> etkinleştirin ve YouTube oynatıcıda görünen metin üzerinde seçim sürükleyin. Optic render karesinden karakterler okuyan ve panoya kopyalar. Herhangi tarayıcısında çalışır — Safari, Chrome, Firefox, Arc.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta YouTube videosundan metin kopyalıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Eğitim Komutları ve Kodu</h3>
<p>Program eğitimler dönem terminal komutları, kod parçacığı ve yapılandırma örnek göster. Tek sürükle tam metin çıkart — özel karakterler, bayraklara tutukla ve elle yazı kolay söz biçimi tutukla.</p>

<h3>Ekran Verisi ve Tablolar</h3>
<p>Ürün inceleme, kıyaslama karşılaştırması ve eğitim içeriği tablolar veya listeler ekranda sıklıkla göster. Veri bölge seçin ve ayıklanan metni notlarınıza veya elektronik tabloya yapıştırın. Durakla ve satır satır yazı yok.</p>

<h3>URL'ler ve Başvuruları</h3>
<p>Video hızlı URL, kitap başlık veya kaynak adı gösteriş, bu kaçmadan çabuk yakala. Optic yakalama geçmiş her ayıklamayı kaydeder, bu yüzden hata video oynatu sırasında text alabilirseniz, daha sonra menü çubuğu açılır almaya geri alabilirsiniz.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "scan-qr-code-from-screenshot-mac": {
    slug: "scan-qr-code-from-screenshot-mac",
    title: "Mac'ta Ekran Görüntüsünden QR Kodunu Nasıl Tarama",
    description: "Mac'ta ekran görüntüsü QR kodunuz var, ancak tarama hiçbir yol — telefon kamerası ekran okuması yapamaz ve macOS hiçbir kodlayıcı sunar.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Birisi QR kodunu içeren ekran görüntüsü mesaj gönderiyor. Veya daha sonra için web tarafından QR kod kaydetti. Veya PDF eki kayıt sayfasına bağlantı QR kodunu içerir. QR kod Mac ekranınızda resim oturursa ve doğal arzusu "tarama" — ama nasıl? Telefon kamerayla bilgisayar monitöre işaret yanlış, parıltı oluşturur ve açık bağlantı cihazlı yanlış kuru. macOS QR kodunda deşmek hiçbir yapılı sunar.</p>

<h2>macOS'te Yerel QR Kodlayıcı Yok</h2>
<p>iPhone'lar QR tarama Kamera uygulaması gömülü. macOS değil denk vardır. Sağ tıkla QR kod görüntü Finder "Kod Çöz" seçim yapamaz. Ön İzleme resimden QR kod çıkarmaz. Safari web sayfalarında QR kodları tanımaz. QR kod zaten Mac ekranında ise Apple ekosistem beklenir başka cihazı okumak — cihazda sonuç aynı bilgisayarda mantık da yapmaz.</p>
<p>Online QR çözenler var, ama üçüncü taraf sunucuya görüntü yükleme gereklidir. İçeriği QR kodları — Wi-Fi parolaları, doğrulama token, özel URL — rastgele web sitesine yükleme başlangıç değil.</p>

<h2>Ekranınızda Doğrudan QR Kodları Kodla</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> ekranınız görünen QR kod çözdüğü ayrı tarayıcı içerir. Ekran görüntüsü açın veya QR kod görüntü, menü çubuğunuzdan Optic'i etkinleştirin ve seçim kod etrafında sürükleyin. Çözülen içerik — URL, metin, kimlik bilgileri, ne kodlar kodlar — Mac'ında hemen görünür.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic Mac'ta ekran görüntüsünden QR kodunu taraması yapıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Etkinlik Biletleri ve Biniş Kartları</h3>
<p>QR kodları e-posta onayında, Cevapları bilet içerir ve gezi rehberler. Mac'ında e-posta istemcisinde veya PDF görüntüleyicide kod sürükle açılacak adresi alın cihazdan değişmeden.</p>

<h3>Geliştirici ve BT Kullanım Durumları</h3>
<p>İki faktörlü kimlik doğrulama kurulumu sayfaları TOTP uygulamaları için QR kodları gösterir. API belgeleri bazen uç noktası veya anahtarları QR biçiminde kodlar. Optic doğrudan çözmek, iş akışını bir ekrana tutun.</p>

<h3>Her Şey Yakalama Geçmişinde Kalır</h3>
<p>Çözülen QR içeriği menü çubuğu geçmişi metin yakalamalarının yanında kaydedilir. Dün taradığınız QR kodundan Wi-Fi parolası mi gerekiyor? Yeniden taramadan yakalama geçmişinizi kaydırın yerine.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan İndirin</a></p>
`,
  },
  "ocr-foreign-language-mac": {
    slug: "ocr-foreign-language-mac",
    title: "OCR Foreign Language Text on Mac",
    description: "Text in a foreign language appears on screen — in an image, a document, or a video — and you need to copy it even though you can't type those characters yourself.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>You're looking at a Japanese product label in a photo, a French legal document someone scanned, or Chinese text in a video tutorial. You need that text — to paste into a translator, to send to a colleague, to include in a report. But you can't type those characters. You don't have the keyboard layout installed, you don't know the input method, and even if you did, looking at a character and reproducing it keystroke by keystroke would take forever. The text is right there on screen, readable by anyone who knows the language, but impossible for you to copy.</p>

<h2>Foreign Characters Without the Right Keyboard Are Unreachable</h2>
<p>macOS supports many keyboard layouts, but switching to one and learning its input method just to copy a few characters from an image is impractical. Character-by-character lookup in a Unicode table or an IME tool is painfully slow. Drawing input methods exist for some languages but are awkward for anything more than a single character.</p>
<p>The problem compounds when the text is inside an image, a scanned document, or a video frame — contexts where you can't select text even in your own language. Foreign language text in these formats is doubly inaccessible: you can't select it because it's an image, and you couldn't type it even if you could see each character clearly.</p>

<h2>Select Foreign Text Visually, Copy It Digitally</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> recognizes characters from your screen regardless of language. Activate it from the menu bar, drag over the foreign language text visible in any image, document, or video frame, and the recognized characters are copied to your clipboard — in the correct script, with the correct Unicode characters. Paste them into Google Translate, DeepL, or any application.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing foreign language text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Translation Workflows</h3>
<p>The fastest path from foreign text in an image to a translation is: select with Optic, paste into a translator. No manual transcription, no keyboard switching, no character lookup. Works with Latin, Cyrillic, CJK, Arabic, and other scripts.</p>

<h3>International Documents</h3>
<p>Scanned contracts, invoices, and forms in other languages contain names, addresses, and figures you may need to extract. Drag over the relevant section and paste the characters into your own documents, preserving the original script accurately.</p>

<h3>Language Study</h3>
<p>Encountering new vocabulary in images or videos? Select the text and paste it into a flashcard app or dictionary. Having the exact characters — rather than a guess at romanization — ensures accurate lookups and study.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-text-from-slack-image-mac": {
    slug: "copy-text-from-slack-image-mac",
    title: "Mac'te Slack'teki Bir Görüntüden Metin Nasıl Kopyalanır",
    description: "Bir ekip arkadaşı Slack'te bir ekran görüntüsü paylaşıyor — bir hata günlüğü, bir yapılandırma, bir gösterge paneli — ve içindeki metin sadece kopyalayamayacağınız veya arayamayacağınız piksellerden ibaret.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bu günde birkaç kez oluyor. Bir ekip arkadaşı Slack kanalına bir ekran görüntüsü yapıştırıyor: bir terminal hatası, metrikleri gösteren bir gösterge paneli, editöründen bir kod parçası veya bir yapılandırma paneli. O ekran görüntüsündeki metne ihtiyacınız var — aramak için bir hata mesajı, bir raporda alıntılamak için bir metrik veya yerel olarak test etmek için bir kod bloğu. Ancak Slack görüntü görüntüleyicisi size sadece resmi gösterir, başka bir şey değil. İçindeki metin, panonuz açısından bir suluboya tablo kadar erişilemez.</p>

<h2>Slack Görüntüleri Görüntü Olarak Ele Alır</h2>
<p>Biri Slack'te bir ekran görüntüsü paylaştığında, satır içi bir görüntü olarak işlenir veya Slack'in görüntü görüntüleyicisinde açılır. OCR katmanı yok, metin çıkarma seçeneği yok, sağ tık menüsünde "görüntüden metni kopyala" seçeneği yok. Görüntüyü indirebilirsiniz, ancak bu size sadece diskte bir dosya olarak aynı pikselleri verir — yine de seçilebilir metin yok.</p>
<p>Bu, mühendislik, destek ve operasyon ekiplerinde günlük bir sürtünme noktasıdır. Ekran görüntüleri, sohbette görsel bilgi paylaşmanın en hızlı yoludur, ancak metin içeren her ekran görüntüsü alıcı için bir çıkmaz sokak haline gelir. Gönderen bilginin paylaşıldığını varsayar; alıcı bunu manuel olarak yazıya dökmek veya gönderenden metin olarak yapıştırmasını istemek zorunda kalır — bu istek genellikle saatlerce yanıtsız kalır.</p>

<h2>Metni Doğrudan Slack Görüntülerinden Okuyun</h2>
<p>Slack'te ihtiyacınız olan metni içeren bir ekran görüntüsü gördüğünüzde, Slack'in görüntü görüntüleyicisinde açın veya sadece satır içi önizlemeye bakın, ardından menü çubuğundan <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a>'i etkinleştirin ve metnin üzerine bir seçim sürükleyin. Karakterler saniyeler içinde tanınır ve panonuza kopyalanır — indirme yok, uygulama değiştirme yok, gönderenin metin olarak yeniden paylaşmasını bekleme yok.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic, Mac'te bir Slack görüntüsünden metin çıkarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Hata Mesajları ve Günlükler</h3>
<p>Hata ve yığın izlerinin ekran görüntüleri mühendislik kanallarında sürekli paylaşılır. 200 karakterlik bir hata mesajını yeniden yazmak yerine, tam hata dizesini çıkarın ve arama motorunuza veya günlük toplayıcınıza yapıştırarak anında arama yapın.</p>

<h3>Kod Parçacıkları</h3>
<p>Biri kodunu bir parçacık olarak yapıştırmak yerine ekran görüntüsünü aldığında, Optic yine de metin olarak çıkarmanıza olanak tanır. Kodu kopyalayın, editörünüze yapıştırın ve yerel olarak test edin — bir görüntüden başkasının kodunu yeniden yazmaktan çok daha hızlı.</p>

<h3>Metrikler ve Veriler</h3>
<p>Slack kanallarında paylaşılan gösterge paneli ekran görüntüleri sayılar, etiketler ve eğilimler içerir. İhtiyacınız olan belirli rakamları seçin ve manuel yazım hataları olmadan kendi raporlarınıza veya elektronik tablolarınıza yapıştırın.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan edinin</a></p>
`,
  },
  "mac-preview-ocr-limitations": {
    slug: "mac-preview-ocr-limitations",
    title: "Mac Preview OCR Limitations — What It Misses",
    description: "Preview handles images and PDFs but can't extract text from most of them. If you've tried to copy text from a scanned PDF or photo in Preview and got nothing, here's why.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Preview is the default image and PDF viewer on macOS, and many users assume it can handle OCR — recognizing and extracting text from images and scanned documents. In limited situations it can, thanks to Live Text integration. But for many common scenarios, Preview either silently fails to recognize text or provides no extraction capability at all. If you've tried to select text from a scanned PDF or a photo of a document in Preview and your cursor just draws a selection rectangle with no text highlight, you've hit Preview's OCR wall.</p>

<h2>Where Preview's Text Recognition Breaks Down</h2>
<p><strong>Scanned PDFs with complex layouts.</strong> Preview can sometimes recognize text in clean, well-scanned single-column documents. But multi-column layouts, tables, headers and footers, and documents with mixed graphics and text often produce no selectable text at all. The Live Text engine in Preview doesn't handle complex document structures reliably.</p>
<p><strong>Low-contrast or small text.</strong> Receipt scans, faded documents, and images with low contrast between text and background frequently defeat Preview's recognition. The text might be perfectly readable to human eyes but invisible to Preview's detection.</p>
<p><strong>Handwritten text.</strong> Preview's text recognition is tuned for printed fonts. Handwritten notes, whiteboard photos, and annotated documents are rarely recognized, even when the handwriting is clean and legible.</p>
<p><strong>Non-Latin scripts.</strong> Support for non-Latin languages is inconsistent. CJK, Arabic, and Cyrillic text in images may or may not be detected depending on font style, image quality, and document complexity.</p>
<p><strong>No capture from screen.</strong> Preview only processes files you've opened. If the text you need is in a video frame, a web app interface, an error dialog, or another app's window, Preview has no way to reach it.</p>

<h2>OCR That Works Across Everything on Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> bypasses Preview's limitations entirely by working at the screen level. Instead of asking a file viewer to recognize text inside a file, Optic reads characters from whatever is visible on your display. Open the problematic document in Preview — or any other app — and drag Optic's selection over the text you need.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Preview OCR limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Complex Document Layouts</h3>
<p>Tables, multi-column text, and mixed content that stumps Preview are readable by Optic because you control exactly which region to scan. Select just the column or table cell you need — no full-page parsing required.</p>

<h3>Beyond Files</h3>
<p>Optic isn't limited to opened files. Video frames, dialogs, web apps, remote desktop sessions — anything rendered on screen is fair game. Preview can never reach these sources; Optic reads them as naturally as any image.</p>

<h3>Persistent History</h3>
<p>Preview has no memory of past text recognition attempts. Optic saves every extraction in the menu bar, building a log of captured text you can scroll through and re-copy at any time.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "batch-ocr-screenshots-mac": {
    slug: "batch-ocr-screenshots-mac",
    title: "Batch OCR Screenshots on Mac — Process Capture History",
    description: "You have a collection of screenshots containing text you need — but processing them one by one through a traditional OCR tool is tedious and slow.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>You took a dozen screenshots during a research session — pricing tables, feature comparisons, settings panels, reference material. Now you need the text from all of them. With traditional OCR tools, that means opening each file individually, running recognition, copying the output, pasting it somewhere, and repeating. Twelve screenshots means twelve cycles of file-open-process-copy-paste. It's not hard — just tediously slow.</p>

<h2>macOS Offers No Batch Text Extraction</h2>
<p>There's no built-in macOS feature that lets you select multiple images and extract text from all of them. Preview can open multiple files but has no "extract all text" function. Automator and Shortcuts can chain some actions together but lack reliable OCR capabilities for screen captures. You're either processing each image manually or installing heavy-duty document processing software meant for enterprise scanning workflows.</p>
<p>The irony is that you captured these screenshots quickly — Cmd+Shift+4, click, done — but extracting the text from them takes ten times longer than capturing them did.</p>

<h2>Rapid-Fire Screen OCR with Built-In History</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> turns batch extraction into a fast, linear workflow. Open your screenshots in Quick Look or any viewer, then make rapid selections — drag over the text in one image, move to the next, drag again. Each extraction is instantly saved to Optic's capture history in the menu bar. No file management, no save dialogs, no copy-paste juggling between windows.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic batch processing screenshots on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Research Sessions</h3>
<p>Captured screenshots from competitor websites, pricing pages, or documentation? Open them in sequence and fire off extractions. Your capture history becomes a clean text log of everything you gathered — searchable and re-copyable without reopening any images.</p>

<h3>Capture History as Your Text Archive</h3>
<p>Every extraction is timestamped and stored in the menu bar dropdown. After processing a batch of screenshots, scroll through the history to review, re-copy, or verify individual captures. The history functions as a lightweight text archive of your extracted content.</p>

<h3>Selective Extraction</h3>
<p>Unlike automated batch OCR that processes entire images, you control exactly which portion of each screenshot to extract. Need just the price from a pricing table? Just the error code from a log screenshot? Select precisely what matters and skip the rest.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-address-from-image-mac": {
    slug: "copy-address-from-image-mac",
    title: "Mac'te Bir Görüntüden Adres Nasıl Kopyalanır",
    description: "Bir teslimat etiketi, bir kartvizit fotoğrafı veya taranmış bir mektup ihtiyacınız olan bir adres içeriyor — ancak seçme imkanı olmayan bir görüntünün içinde sıkışıp kalmış.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir kartvizit fotoğrafından, taranmış bir zarftan, bir iletişim sayfası ekran görüntüsünden veya bir teslimat onay görüntüsünden bir adres kopyalamanız gerekiyor. Adres açıkça basılmış — sokak, şehir, eyalet, posta kodu — ancak bir görüntüde olduğu için tıklayamıyor, seçemiyor, kopyalayamıyorsunuz. Her satırı okuyup harita uygulamanıza, kişilerinize veya kargo formunuza yazmak zorundasınız. Posta kodundaki tek bir yanlış yazılan rakam, paketin yanlış yere gitmesine neden olur.</p>

<h2>Görüntülerdeki Adresler Kusursuz Manuel Transkripsiyon Gerektirir</h2>
<p>Adresleri yeniden yazmak özellikle risklidir. Sayılar, sokak adı kısaltmaları, daire numaraları ve posta kodlarının bir karışımını içerirler — hepsi kesin olmalıdır. Bir posta kodundaki iki rakamı yer değiştirmek veya bir daire numarasını yanlış yazmak, başarısız teslimat veya yanlış yönlendirilmiş posta anlamına gelir. Ve çoğu metnin aksine, bir adresi geri okuyarak kolayca doğrulayamazsınız — karakter karakter karşılaştırmanız gerekir.</p>
<p>macOS, bir görüntüden adres çıkarmak için yerleşik bir iş akışı sağlamaz. Live Text, bazı Fotoğraflar görüntülerinde adresleri vurgulayabilir ve Haritalar'da açmayı teklif edebilir, ancak bu sadece belirli Apple uygulamalarında, temiz görüntülerle çalışır ve Haritalar'a çıkarır — başka bir yere yapıştırmak için panonuza değil.</p>

<h2>Adresin Üzerine Sürükleyin, Her Yere Yapıştırın</h2>
<p>Adresi içeren görüntüyü herhangi bir uygulamada açın — Önizleme, Mail, bir tarayıcı, Slack — ardından menü çubuğundan <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a>'i etkinleştirin ve adresin etrafına bir seçim sürükleyin. Tam metin — her satır, her sayı, her kısaltma — panonuza kopyalanır. Google Haritalar'a, bir kargo formuna, kişilerinize veya bir e-postaya yapıştırın.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic, Mac'te bir görüntüden adres kopyalıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kartvizitler</h3>
<p>Networking etkinliklerinden kartvizit fotoğrafları, adresleri hiçbir zaman kişilerinize girmeden kamera rulonuzda oturmasıyla ünlüdür. Fotoğrafı açın, adresi Optic ile seçin ve doğrudan kişi girişine yapıştırın. Kartta görünen telefon numaraları ve e-posta adresleri için de çalışır.</p>

<h3>Kargo ve İadeler</h3>
<p>İade kargo etiketleri, teslimat onayları ve paketleme fotoğrafları genellikle başvurmanız veya yeniden kullanmanız gereken adresler içerir. Adresi görüntüden çıkarın ve yeniden yazmadan kargo platformunuza yapıştırın.</p>

<h3>Emlak ve Yol Tarifleri</h3>
<p>Emlak sürecindeki ilan fotoğrafları, mülk broşürleri ve taranmış belgeler adreslerle doludur. Bu görüntülerden herhangi bir adresi alın ve yol tarifleri için harita uygulamanıza veya takip için bir elektronik tabloya yapıştırın.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic'i Mac App Store'dan edinin</a></p>
`,
  },
  "ocr-code-snippets-mac": {
    slug: "ocr-code-snippets-mac",
    title: "OCR Code Snippets on Mac — Copy Code from Tutorials and Screenshots",
    description: "Code appears as an image in a tutorial, documentation, or a shared screenshot — and retyping it means introducing bugs one misplaced character at a time.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>A blog post renders its code examples as styled images. A coworker pastes a screenshot of their IDE into a pull request comment. Documentation for a legacy tool only exists as terminal screenshots on a wiki. Stack Overflow answers include code embedded in images because the formatter mangled the original. In each case, the code is visible and readable, but it's an image — and copying code from an image by retyping it is how you spend thirty minutes debugging a semicolon you thought was a colon.</p>

<h2>Code Demands Character-Perfect Extraction</h2>
<p>Unlike prose, code has zero tolerance for approximation. A hyphen instead of an underscore breaks an import. A single misplaced bracket makes a function invalid. A lowercase letter where uppercase was needed changes a variable reference entirely. When you retype code from an image, every character is a potential point of failure — and the bugs you introduce are invisible because they look correct at a glance.</p>
<p>The problem is magnified with long commands, multi-line snippets, or unfamiliar syntax. A Docker run command with ten flags, a regex pattern, or a shell pipeline with pipes and redirects — these are exactly the kind of content that gets shared as images and is nearly impossible to retype accurately.</p>

<h2>Extract Code from Any Image on Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> reads the code characters directly from your screen. Open the image, tutorial page, or screenshot containing the code, activate Optic from the menu bar, and drag a selection over the snippet. The recognized text — preserving indentation, special characters, and line structure — goes straight to your clipboard.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Terminal Commands</h3>
<p>Install scripts, build commands, and deployment pipelines displayed as terminal screenshots are common in documentation and tutorials. Select the command block and paste it into your terminal with confidence that the flags, paths, and arguments are exactly right.</p>

<h3>IDE Screenshots</h3>
<p>When a colleague shares a screenshot of their code — in Slack, in a GitHub comment, in an email — extract the code and paste it into your own editor. Test it, modify it, or review it properly instead of squinting at an image.</p>

<h3>Multi-Snippet Extraction</h3>
<p>Tutorials often show multiple code blocks across a page. Extract each one in sequence. Optic's capture history saves every extraction, so you can work through an entire tutorial and paste each snippet into your project one by one from the history dropdown.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "text-to-speech-from-screen-mac": {
    slug: "text-to-speech-from-screen-mac",
    title: "Text-to-Speech from Any Screen Content on Mac",
    description: "You want to listen to text that's on screen — in an image, a scanned PDF, a video frame — but your Mac's speech tools only work on text you can highlight.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>macOS includes a spoken content feature that reads selected text aloud. Highlight a paragraph in Safari, right-click, and your Mac speaks it. The feature works well — until you need to hear text that can't be highlighted. An infographic with key statistics. A scanned document with no text layer. Subtitles baked into a video frame. Text rendered as a graphic on a web app. In all these cases, macOS spoken content has nothing to work with because there's no selectable text to feed it.</p>

<h2>Most Screen Text Isn't Selectable</h2>
<p>The amount of non-selectable text on a modern Mac screen is larger than most people realize. Images with text overlays, canvas-rendered web apps, PDF scans, video frames, remote desktop sessions, dialog boxes, app interfaces with custom-rendered labels — all of these display readable text that macOS treats as part of an image. You can see it, you can read it with your eyes, but you can't select it, so you can't send it to the speech engine.</p>
<p>For users who rely on audio output for accessibility, proofreading, multitasking, or language learning, this gap is a real barrier. The text is on screen, the speech engine is on the same machine, but there's no bridge between them for non-selectable content.</p>

<h2>Select Anything on Screen, Hear It Aloud</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> closes this gap by combining screen-level OCR with text-to-speech. Activate it from the menu bar, drag a selection over any visible text — regardless of source — and Optic recognizes the characters. You can then have the captured text read aloud, turning any visible screen content into audio.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text-to-speech from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Accessibility</h3>
<p>Screen readers like VoiceOver work well with native UI elements and standard text, but stumble on text inside images and non-standard rendering. Optic fills this gap by making any visible text available as both clipboard text and spoken audio. Content that was previously inaccessible becomes hearable.</p>

<h3>Proofreading</h3>
<p>Hearing text read aloud catches errors that visual scanning misses. After extracting text from a scanned document or image, use text-to-speech to verify the OCR output. A garbled word or misrecognized character is immediately obvious when spoken but might pass unnoticed on screen.</p>

<h3>Multitasking and Comprehension</h3>
<p>Extract a long passage from a document, article, or scanned page and listen to it while doing other work. Audio processing engages different cognitive channels than reading, which can aid comprehension and retention — especially for dense or unfamiliar material. Every capture stays in your menu bar history, so you can revisit and replay any previous extraction.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
};
