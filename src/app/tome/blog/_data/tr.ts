import type { ArticleSet } from "./index";

export const trArticles: ArticleSet = {
  "best-sqlite-browser-mac": {
    slug: "best-sqlite-browser-mac",
    title: "Mac için En İyi SQLite Tarayıcısı",
    description: "Mac'teki çoğu SQLite tarayıcısı, yerinde durmayan platformlar arası Electron uygulamalarıdır. Gerçekten bir Mac uygulaması gibi davranan birini bulmak, gerekenden fazla arama gerektirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>İncelemeniz gereken bir SQLite veritabanınız var. Bir tarayıcı arıyorsunuz, umut verici bir şey indiriyorsunuz ve hemen yerel macOS özelliklerini desteklemediğini fark ediyorsunuz — belge sekmesi yok, sistem karanlık modu yok, Spotlight entegrasyonu yok. Mac kostümü giymiş bir Linux uygulaması gibi hissettiriyor. Bu, bugün mevcut olan çoğu SQLite tarayıcısının gerçeği.</p>

<h2>Çoğu SQLite Tarayıcısı Neden Mac'te Yetersiz Kalıyor</h2>
<p>Veritabanı araçlarının çoğu Electron veya Java ile inşa edilmiş, her yerde çalışmak için tasarlanmış ve hiçbir yer için optimize edilmemiştir. Güvendiğiniz Mac kurallarını görmezden gelirler: Finder'dan sürükle-bırak, uygun pencere yönetimi, büyük sonuç kümelerinde pürüzsüz kaydırma. Verinize odaklanmak yerine araçla savaşırsınız.</p>
<p>DB Browser for SQLite açık kaynaklı ve işlevseldir, ancak bir Qt uygulamasıdır — yabancı klavye kısayolları, yerel olmayan dosya iletişim kutuları ve macOS iş akışınızın geri kalanıyla entegrasyon yok. TablePlus daha iyi görünüyor ancak her veritabanı motorunu hedefliyor, bu da SQLite'ı sonradan akla gelen bir şey gibi hissettiriyor.</p>

<h2>Sıfırdan Mac İçin İnşa Edilmiş Bir SQLite Tarayıcısı</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, özellikle SQLite veritabanlarını açmak, taramak ve düzenlemek için inşa edilmiş yerel bir macOS SQLite tarayıcısıdır. AppKit ve Swift kullanır — Electron yok, platformlar arası taviz yok. Anında başlar, sistem görünümünüze saygı gösterir ve Mac uygulamalarının çalışması gerektiği gibi çalışır.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — tablo ve sorgu düzenleyicisi gösteren Mac için yerel SQLite tarayıcısı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tabloları, Görünümleri, İndeksleri ve Tetikleyicileri Tarayın</h3>
<p>Herhangi bir .db, .sqlite veya .sqlite3 dosyasını açın ve veritabanınızdaki her tabloyu, görünümü, indeksi ve tetikleyiciyi hemen görün. İçeriğini hızlı, yerel kaydırma ile taramak için bir tabloya tıklayın. Binlerce satırın işlenmesi için bir web görünümünü beklemek yok.</p>

<h3>Veriyi Satır İçinde Düzenleyin</h3>
<p>Herhangi bir hücreyi doğrudan düzenlemek için tıklayın. Yeni satırlar ekleyin, mevcut olanları silin veya görsel bir düzenleyici kullanarak tamamen yeni tablolar oluşturun — temel işlemler için SQL gerekmez. SQL'e ihtiyacınız olduğunda, Tome sözdizimi vurgulama ve otomatik tamamlama içeren bir sorgu düzenleyicisi içerir.</p>

<h3>Belge Tabanlı — Birden Fazla Veritabanını Yan Yana Açın</h3>
<p>Tome belge tabanlıdır, yani her veritabanı kendi penceresinde veya sekmesinde açılır. Staging ve üretim veritabanlarını yan yana karşılaştırın veya bir referans veritabanını açık tutarken başka bir tanesi üzerinde çalışın. Herhangi bir belge tabanlı Mac uygulaması gibi çalışır — çünkü öyledir.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "view-sqlite-database-mac": {
    slug: "view-sqlite-database-mac",
    title: "Mac'te SQLite Veritabanı Nasıl Görüntülenir",
    description: "SQLite dosyaları Mac'inizde her yerde bulunur — uygulama verileri, Core Data depoları, tarayıcı geçmişi — ancak macOS'un bunları açıp görüntülemenin yerleşik bir yolu yoktur.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Proje klasörünüzde veya bir uygulamanın konteynerinde gömülü bir .sqlite dosyası buldunuz. Üzerine çift tıklıyorsunuz ve macOS bununla ne yapacağını bilmiyor. Terminal'i açıp <code>sqlite3 mydatabase.db</code> yazabilirsiniz, ancak bir terminal penceresinde tablo verilerini okumak acı vericidir — sütun hizalaması yok, kaydırma yok, yüzlerce satırı hızlıca tarama yolu yok.</p>

<h2>Terminal Yaklaşımı ve Sınırları</h2>
<p>Yerleşik <code>sqlite3</code> komut satırı aracı her Mac ile birlikte gelir. Teknik olarak çalışır. Tabloları listelemek için <code>.tables</code> çalıştırabilir ve satırları dökmek için <code>SELECT * FROM tablename;</code> yapabilirsiniz. Ancak çıktı ham metindir. Geniş tablolar garip bir şekilde sarılır. Bir değere tıklayıp düzenlemenin bir yolu yoktur. Ve bir tasarımcı, ürün yöneticisi veya Terminal'de yaşamayan biriyseniz, bu gerçekçi bir iş akışı değildir.</p>
<p>Dosyayı bir metin düzenleyicide açmayı deneyebilirsiniz, ancak SQLite veritabanları ikilidir — verinizi değil, bozuk karakterler göreceksiniz.</p>

<h2>Tome ile Herhangi Bir SQLite Veritabanını Görsel Olarak Görüntüleyin</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, Mac'te SQLite veritabanları için uygun bir görsel arayüz sunar. Bir .db, .sqlite veya .sqlite3 dosyasını uygulama simgesine sürükleyin veya Dosya → Aç'ı kullanın ve veritabanınız anında görünür — kenar çubuğunda listelenen tablolar, kaydırılabilir bir ızgarada görüntülenen veriler.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, tablolar ve satır verileriyle bir SQLite veritabanını gösteriyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Şemanızı Bir Bakışta Görün</h3>
<p>Her tablo, görünüm, indeks ve tetikleyici kenar çubuğunda listelenir. Satırlarını görmek için herhangi bir tabloya tıklayın. Sonuçlarını görmek için bir görünüme tıklayın. Ezberlenecek komut yok — sadece işaretleyin ve tıklayın.</p>

<h3>İhtiyacınız Olduğunda Sorgu Çalıştırın</h3>
<p>Taramanın ötesinde herhangi bir şey için, Tome'un SQL sorgu düzenleyicisi hazırdır. Tablo ve sütun adları için sözdizimi vurgulama ve otomatik tamamlama içerir, böylece hafızadan sütun adlarını tahmin etmeden Terminal'den daha hızlı sorgular yazabilirsiniz.</p>

<h3>Yaygın Kullanım Durumları</h3>
<p>SQLite'ta veri saklayan bir iOS veya Android uygulamasını hata ayıklama. Bir web kazıyıcının çıktı veritabanını inceleme. Bir Django veya Rails geliştirme veritabanını kontrol etme. SQLite'ta saklanan tarayıcı geçmişini veya yer imlerini görüntüleme. Bunların hepsi basit hale gelir — dosyayı açın, veriyi görün.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "native-sqlite-editor-mac": {
    slug: "native-sqlite-editor-mac",
    title: "Mac için Yerel SQLite Düzenleyici — Electron Yok",
    description: "Electron tabanlı veritabanı araçları, sadece bir tablo göstermek için yüzlerce megabayt RAM tüketir. Yerel bir macOS düzenleyicisi, hafif olmanın gerçekte ne anlama geldiğini değiştirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Veritabanı aracınızı açıyorsunuz ve Activity Monitor, bir dosya yüklemeden önce bile 400 MB RAM yediğini gösteriyor. Büyük bir tabloda kaydırırken arayüz takılıyor. Klavye kısayolları diğer her Mac uygulamasının kullandığıyla eşleşmiyor. SQLite düzenleyiciniz aslında masaüstü uygulaması taklidi yapan bir web tarayıcısı olduğunda bu olur.</p>

<h2>Electron Problemi</h2>
<p>Electron uygulamaları, arayüzlerini işlemek için tam bir Chromium tarayıcısını paketler. Çoğunlukla metin tablolarını görüntüleyen bir uygulama olan bir veritabanı düzenleyicisi için bu aşırı bir yüktür. Yavaş başlangıç süreleri, yüksek bellek kullanımı ve macOS'ta hiç tam doğru hissettirmeyen bir arayüz elde edersiniz. Dosya iletişim kutuları farklı görünür. Metin işleme biraz kapalıdır. Uygulama Finder'ın "Birlikte Aç" menüsünde doğru şekilde görünmez.</p>
<p>Bazı geliştiriciler Electron'u seçer çünkü tek bir kod tabanından Mac, Windows ve Linux'ta gönderim yapmalarını sağlar. Bu makul bir iş kararıdır, ancak her veritabanı açtığınızda performans vergisini ödeyen sizsiniz.</p>

<h2>Tome: Web Tarayıcısı Değil, AppKit ile İnşa Edildi</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, Swift ve AppKit ile inşa edilmiş yerel bir macOS uygulamasıdır. Finder, Xcode ve diğer her Apple uygulaması ile aynı çerçeveleri kullanır. Sonuç, bir saniyeden kısa sürede başlayan, on binlerce satırda pürüzsüzce kayan ve bir Electron uygulamasının ihtiyaç duyacağı belleğin bir kısmını kullanan bir SQLite düzenleyicisidir.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Kenar çubuğu ve veri ızgarası ile Tome yerel macOS SQLite düzenleyicisi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gerçek macOS Entegrasyonu</h3>
<p>Tome, .db, .sqlite ve .sqlite3 dosyaları için bir işleyici olarak kaydolur. Finder'da bir veritabanına çift tıklayın ve doğrudan açılır. Dosyaları dock simgesine sürükleyin. macOS sekmelerini ve pencere yönetimini kullanın. Her şey bir Mac uygulamasından beklediğiniz gibi çalışır çünkü o bir Mac uygulamasıdır.</p>

<h3>SQL Yazmadan Düzenleyin</h3>
<p>Değerini satır içinde düzenlemek için herhangi bir hücreye tıklayın. Görsel bir düzenleyici kullanarak satır ekleyin, satır silin ve yeni tablolar oluşturun. SQL'e ihtiyacınız olduğunda, yerleşik sorgu düzenleyicisinde sözdizimi vurgulama ve otomatik tamamlama vardır — ancak günlük düzenlemeler için buna hiç dokunmanız gerekmez.</p>

<h3>Tasarım Gereği Hafif</h3>
<p>Tome bir şeyi iyi yapar: SQLite. PostgreSQL, MySQL veya MongoDB'ye bağlanmaya çalışmaz. Yalnızca SQLite'a odaklanarak, her özellik gerçekte çalıştığınız formata göre optimize edilmiştir.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "db-browser-alternative-mac": {
    slug: "db-browser-alternative-mac",
    title: "Mac'te DB Browser for SQLite Alternatifi",
    description: "DB Browser for SQLite çalışır, ancak Qt arayüzü macOS'ta yabancı hissettirir — yanlış kısayollar, yerel olmayan dosya iletişim kutuları ve iş akışınızın geri kalanıyla entegrasyon yok.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>DB Browser for SQLite (DB4S), SQLite veritabanlarını görüntülemek için başvurulan ücretsiz araçtır. Açık kaynaklıdır, platformlar arasıdır ve yıllardır var olmuştur. Ancak bir Mac'te kullanıyorsanız, sürtünmeyi fark etmişsinizdir: Cmd+Q bazen beklendiği gibi çalışmaz, dosya iletişim kutuları farklı bir işletim sistemine aitmiş gibi görünür ve arayüz diğer uygulamalarınızla hiç tam eşleşmez. Çalışır — ama doğru hissettirmez.</p>

<h2>DB Browser'ın Mac'te Yetersiz Kaldığı Yerler</h2>
<p>DB4S, platformlar arası bir UI çerçevesi olan Qt ile inşa edilmiştir. Mac'te, bu uygulamanın yerel macOS kontrollerini kullanmadığı anlamına gelir. Bunu küçük şekillerde fark edersiniz: sekme çubuğu Safari'ninkiyle eşleşmez, kaydırma fiziği kapalı hissettirir ve Handoff, Spotlight entegrasyonu veya uygun karanlık mod desteği yoktur. Uygulama ayrıca macOS belge tabanlı mimarisini desteklemez, bu nedenle birden fazla veritabanını yerel sekmelerde açamazsınız.</p>
<p>Performans başka bir sorundur. Büyük bir tabloyla bir veritabanı açmak yavaş hissedebilir ve UI, sorguları yürütürken zaman zaman takılır. 2026'da bir masaüstü uygulaması için kullanıcılar daha iyi yanıt verebilirlik bekler.</p>
<p>Bunların hiçbiri DB4S'yi kötü bir araç yapmaz — olduğu şey için mükemmeldir. Ancak bir Mac'teyseniz ve yerel hissettiren bir şey istiyorsanız, bir boşluk bırakır.</p>

<h2>Tome: Yerel Bir macOS Alternatifi</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> bu boşluğu doldurur. Özellikle Swift ve AppKit ile macOS için inşa edilmiş yerel bir SQLite tarayıcısı ve düzenleyicisidir. DB Browser'ın günlük kullanım için yaptığı her şeyi yapar — tabloları tarayın, verileri düzenleyin, sorgular çalıştırın — ancak Mac'inize ait bir arayüze sarılmıştır.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Mac'te SQLite için DB Browser'a yerel alternatif olarak Tome" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>DB Browser İçin Kullandığınız Her Şey, Ama Yerel</h3>
<p>Temiz bir kenar çubuğunda tabloları, görünümleri, indeksleri ve tetikleyicileri tarayın. Hızlı, kaydırılabilir bir ızgarada satır verilerini görüntüleyin. SQL yazmadan hücreleri satır içinde düzenleyin. Bir tıklamayla satır ekleyin ve silin. Elle CREATE TABLE ifadeleri yazmak yerine görsel bir düzenleyici ile yeni tablolar oluşturun.</p>

<h3>İhtiyacınız Olduğunda SQL Sorgu Düzenleyicisi</h3>
<p>Tome, tablo ve sütun adlarınız için sözdizimi vurgulama ve otomatik tamamlama içeren tam bir SQL sorgu düzenleyicisi içerir. SELECT, UPDATE, DELETE veya başka herhangi bir sorgu çalıştırın ve sonuçları anında görün.</p>

<h3>Belge Tabanlı İş Akışı</h3>
<p>DB4S'nin aksine, Tome macOS belge tabanlı mimarisini kullanır. Her veritabanı kendi penceresinde veya sekmesinde açılır. Aynı anda birden fazla veritabanını açık tutabilir, yan yana düzenleyebilir ve diğer herhangi bir Mac uygulamasında belgeler arasında geçiş yaptığınız gibi aralarında geçiş yapabilirsiniz.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "tableplus-alternative-mac-sqlite": {
    slug: "tableplus-alternative-mac-sqlite",
    title: "Mac için TablePlus Alternatifi — Yalnızca SQLite",
    description: "TablePlus her veritabanını destekler, bu da SQLite'ın hiçbir zaman tam ilgi görmediği anlamına gelir. İhtiyacınız olan tek şey SQLite ise, fazladan karmaşıklık sadece işinize engel olur.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>TablePlus, PostgreSQL, MySQL, SQLite, Redis, MongoDB ve daha fazlasını destekleyen iyi tasarlanmış bir veritabanı istemcisidir. Gerçekten iyi bir yazılımdır. Ancak yalnızca SQLite dosyalarıyla çalışıyorsanız, bağlantı iletişim kutularında, sürücü ayarlarında ve asla kullanmayacağınız veritabanları için var olan arayüz öğelerinde geziniyorsunuz demektir. Sadece bıçağa ihtiyacınız olduğunda İsviçre çakısı satın almak gibi.</p>

<h2>Çoklu Veritabanı Aracı Çok Fazla Olduğunda</h2>
<p>TablePlus'u her açtığınızda, uzak veritabanı sunucuları için tasarlanmış bir bağlantı yöneticisi görürsünüz. Yerel dosya tabanlı bir veritabanı olan SQLite için bu iş akışı gereksiz adımlar ekler. Bağlantı dizelerine, portlara veya kimlik bilgilerine ihtiyacınız yoktur. Sadece bir dosya açmanız gerekir.</p>
<p>TablePlus ayrıca geniş özellik setini yansıtan bir abonelik modeli kullanır. PostgreSQL veya MySQL'e bağlanmıyorsanız, kullanmadığınız yeteneklere ödeme yapıyorsunuzdur. Ücretsiz katman, sizi belirli sayıda açık sekme ve satırla sınırlar, bu da aktif geliştirme sırasında sinir bozucu olabilir.</p>
<p>Arayüz cilalı olmasına rağmen, desteklenen her veritabanını barındıracak şekilde tasarlanmıştır. Tetikleyicileri tarama veya dosyanın iç yapısını inceleme gibi SQLite'a özgü özellikler, sunucu tabanlı veritabanları için daha önemli olan özelliklerin gerisinde kalır.</p>

<h2>Tome: Mac'te SQLite İçin Özel Olarak İnşa Edildi</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, bir şey yapan yerel bir macOS uygulamasıdır: SQLite. Bağlantı yöneticisi yok, sürücü yapılandırması yok, kullanmadığınız veritabanları için özellik yok. Bir .db, .sqlite veya .sqlite3 dosyasını açın ve hemen çalışmaya başlayın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — TablePlus'a alternatif olarak odaklanmış SQLite tarayıcısı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dosya Öncelikli İş Akışı</h3>
<p>Finder'da bir SQLite dosyasına çift tıklayın ve Tome onu açar. Bir dosyayı dock simgesine sürükleyin. Dosya → Aç'ı kullanın. Bağlantı kurulumu yok, sunucu yapılandırması yok. SQLite bir dosya formatıdır ve Tome ona öyle davranır.</p>

<h3>Tam SQLite Kapsamı</h3>
<p>Tabloları, görünümleri, indeksleri ve tetikleyicileri tarayın. Hücreleri satır içinde düzenleyin. Satır ekleyin ve silin. Görsel bir düzenleyici ile tablolar oluşturun. Sözdizimi vurgulama ve otomatik tamamlama ile SQL sorguları çalıştırın. Her özellik, SQLite için mantıklı olduğu için var.</p>

<h3>Birden Fazla Veritabanı, Mac Tarzında</h3>
<p>Tome belge tabanlıdır. Beş veritabanı açın ve her biri kendi penceresini veya sekmesini alır. Pencereleri yan yana yerleştirerek veritabanları arasında verileri karşılaştırın — metin dosyalarıyla, elektronik tablolarla veya Mac'inizdeki diğer herhangi bir belgeyle kullandığınız aynı iş akışı.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "open-sqlite3-file-mac": {
    slug: "open-sqlite3-file-mac",
    title: "Terminal Olmadan Mac'te .sqlite3 Dosyaları Nasıl Açılır",
    description: "Mac'te bir .sqlite3 dosyasına çift tıklamak hiçbir işe yaramaz. macOS bu formatı tanımaz ve Terminal tek yerleşik seçenektir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir .sqlite3 dosyanız var — belki bir Django projesinden dışa aktarılmış, bir iOS uygulaması konteynerinden çekilmiş veya bir meslektaşınızdan indirilmiş. Mac'inizde üzerine çift tıklıyorsunuz ve "açmak için ayarlanmış uygulama yok" iletişim kutusunu alıyorsunuz, ya da daha kötüsü, bir metin düzenleyicide açılıyor ve ikili anlamsız karakterler gösteriyor. macOS, kutudan çıktığı haliyle SQLite dosyalarıyla ne yapacağını basitçe bilmiyor.</p>

<h2>Varsayılan Seçenekler Hepsi Kötü</h2>
<p>Hiçbir şey yüklemeden, tek seçeneğiniz Terminal'dir. Açın, dosyanın dizinine gidin ve <code>sqlite3 yourfile.sqlite3</code> yazın. Oradan <code>.tables</code> ve <code>SELECT * FROM tablename;</code> gibi komutlar çalıştırabilirsiniz — ancak çıktı, biçimlendirme olmadan, kaydırma olmadan ve veriyi görsel olarak düzenlemenin bir yolu olmadan düz metindir.</p>
<p>Terminal'de rahat bir geliştiriciyseniz, bu hızlı kontroller için işe yarar. Ancak basit bir sorgunun ötesindeki herhangi bir şey için — birden fazla tabloyu tarama, değerleri düzenleme, bir şemayı anlama — yavaş ve hataya açıktır. Ve bir geliştirici değilseniz, bu bir başlangıç noktası bile değildir.</p>
<p>Bazı insanlar tarayıcıda çalışan çevrimiçi SQLite görüntüleyicileri dener. Bunlar veritabanı dosyanızı bir sunucuya yüklemenizi gerektirir, bu da özellikle veritabanı kullanıcı verisi veya kimlik bilgileri içeriyorsa açık gizlilik endişeleri doğurur.</p>

<h2>Tome ile .sqlite3 Dosyalarını Çift Tıklamayla Açın</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, macOS'ta .sqlite3, .sqlite ve .db dosyaları için kendini bir işleyici olarak kaydeder. Kurduktan sonra, Finder'daki herhangi bir SQLite dosyasına çift tıklayabilirsiniz ve doğrudan Tome'da açılır — kenar çubuğunda listelenen tablolar, kaydırılabilir bir ızgarada görüntülenen veriler, taramaya hazır.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te görsel tablo tarayıcısıyla bir .sqlite3 dosyası açıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Terminal Gerekmez</h3>
<p>Her tabloyu, görünümü, indeksi ve tetikleyiciyi görsel olarak tarayın. Bir elektronik tabloda olduğu gibi satırlar arasında kaydırın. Şemanızı anlamak için sütun başlıklarına tıklayın. Her şey görseldir, anındadır ve sıfır komut satırı bilgisi gerektirir.</p>

<h3>SQL Olmadan Veriyi Düzenleyin</h3>
<p>Bir değeri değiştirmeniz mi gerekiyor? Hücreye tıklayın ve yazın. Bir satır eklemeniz mi gerekiyor? Ekle'ye tıklayın. Kayıtları kaldırmanız mı gerekiyor? Seçin ve silin. Daha karmaşık işlemler için, Tome sözdizimi vurgulama ve otomatik tamamlama içeren bir SQL sorgu düzenleyicisi içerir — ancak günlük görevler için buna nadiren ihtiyacınız olacaktır.</p>

<h3>Verileriniz Yerel Kalır</h3>
<p>Tome yerel bir macOS uygulamasıdır. Veritabanı dosyanız asla makinenizden ayrılmaz. Yükleme yok, bulut işleme yok, gizlilik endişesi yok. Aç, tara, düzenle, kapat — her şey yerel olarak gerçekleşir.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "edit-sqlite-database-mac": {
    slug: "edit-sqlite-database-mac",
    title: "Mac'te SQLite Veritabanı Nasıl Düzenlenir",
    description: "Mac'te bir SQLite veritabanını düzenlemek genellikle Terminal'de UPDATE ifadeleri yazmak anlamına gelir. Hızlı bir değer değişikliği için bu çok fazla tören.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir SQLite veritabanında tek bir değeri değiştirmeniz gerekiyor. Belki bir bayrağın çevrilmesi, bir kullanıcı adının düzeltilmesi veya test verilerinin ayarlanması gerekiyor. Mac'te bunu yapmanın yerleşik yolu, Terminal'i açmak, <code>sqlite3</code> çalıştırmak, doğru satırı hedeflemek için tam WHERE cümlesiyle bir UPDATE ifadesi yazmak ve yanlış kayıtları değiştiren bir yazım hatası yapmadığınızı ummaktır. Tek bir değer için. 2026'da.</p>

<h2>Terminal Tabanlı Düzenleme Neden Risklidir</h2>
<p>UPDATE ifadelerini elle yazmak, tam olarak ne yaptığınızı bildiğinizde sorun değildir. Ancak bir WHERE cümlesini unutup tablodaki her satırı güncellemek veya bir sütun adını yanlış yazıp sessiz bir hata almak tehlikeli derecede kolaydır. <code>sqlite3</code> CLI'de geri alma yoktur — ifade yürütüldüğünde, bir işlem başlatmayı hatırlamadıysanız değişiklik kalıcıdır.</p>
<p>Yeni tablolar oluşturmak da aynı derecede sıkıcıdır. Sütun adları, türleri ve kısıtlamalarıyla tam CREATE TABLE ifadesini yazmanız gerekir — hızlı prototipleme ve yineleme yaparken yanlış anlaşılması kolay bir sözdizimi.</p>
<p>SQL ile düşünen geliştiriciler için bu yönetilebilir. Herkes için — ve risk olmadan hızlı bir düzenleme yapmak isteyen geliştiriciler için — daha iyi bir yol olmalı.</p>

<h2>Tome ile SQLite Veritabanlarını Görsel Olarak Düzenleyin</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, Mac'te SQLite veritabanlarını bir elektronik tabloyu düzenlediğiniz gibi düzenlemenize olanak tanır. Veritabanını açın, bir hücreye tıklayın, değeri değiştirin. Temel düzenlemeler için SQL gerekmez.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Mac'te bir SQLite veritabanında Tome satır içi hücre düzenleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Satır İçi Hücre Düzenleme</h3>
<p>Değerini doğrudan düzenlemek için bir tablodaki herhangi bir hücreye tıklayın. Bir UPDATE ifadesi yazmadan metni, sayıları veya tarihleri değiştirin. Değişiklik tam olarak tıkladığınız satırı hedefler — eksik bir WHERE cümlesinin diğer kayıtları etkileme riski yoktur.</p>

<h3>Satır Ekleyin ve Silin</h3>
<p>Tek bir tıklamayla herhangi bir tabloya yeni satırlar ekleyin. Seçili satırları aynı kolaylıkla silin. Tome, arka planda INSERT ve DELETE SQL'ini işler, böylece sözdiziminize değil verinize odaklanabilirsiniz.</p>

<h3>Tabloları Görsel Olarak Oluşturun</h3>
<p>Yeni bir tabloya mı ihtiyacınız var? Tome'un görsel tablo düzenleyicisi, sütunları, türleri ve kısıtlamaları bir formda tanımlamanıza olanak tanır. Hafızadan CREATE TABLE ifadeleri yazmaya gerek yok — sadece alanları doldurun ve Tome doğru SQL'i oluşturur.</p>

<h3>Karmaşık İşlemler İçin SQL Düzenleyici</h3>
<p>SQL'e ihtiyaç duyduğunuzda — birleştirmeler, toplamalar veya toplu güncellemeler için — Tome'un sorgu düzenleyicisi, tablo ve sütun adlarınız için sözdizimi vurgulama ve otomatik tamamlama ile hazırdır.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "sql-query-editor-mac-native": {
    slug: "sql-query-editor-mac-native",
    title: "Mac için SQL Sorgu Düzenleyici — Yerel ve Hızlı",
    description: "Mac'te bir SQLite veritabanına karşı SQL sorguları çalıştırmak ağır bir IDE veya terminal penceresi gerektirmemelidir. Odaklanmış bir sorgu düzenleyicisi genellikle ihtiyacınız olan tek şeydir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Yerel bir SQLite veritabanına karşı bir SQL sorgusu çalıştırmanız gerekiyor. Seçenekleriniz: Terminal'i açın ve sözdizimi vurgulama ve otomatik tamamlama olmadan <code>sqlite3</code> CLI'yi kullanın, ya da başlamak için on saniye süren ve yarım gigabayt RAM kullanan tam bir veritabanı IDE'si başlatın. Hiçbir seçenek göreve uymuyor — sadece bir sorgu yazmak, çalıştırmak ve sonuçları görmek istiyorsunuz.</p>

<h2>Terminal ile Tam IDE'ler Arasındaki Boşluk</h2>
<p><code>sqlite3</code> CLI size ham sorgu yürütme sağlar ama sıfır geliştirici konforu. Sözdizimi renklendirme yok, tablo veya sütun adı tamamlama yok, görsel sonuç ızgarası yok. Sorgu çıktısını düz metin olarak okuyorsunuz, tüm sütunları görmek için terminal genişliğinizi manuel olarak ayarlıyorsunuz.</p>
<p>Diğer uçta, DataGrip veya DBeaver gibi araçlar kurumsal veritabanı iş akışları için inşa edilmiştir — uzak sunuculara bağlantıları yönetmek, geçişleri işlemek, şemaları görselleştirmek. Güçlüdürler, ama ağırdırlar. Yerel bir SQLite dosyası için, tam bir IDE başlatmak köşedeki dükkana bir çekici kamyon sürmek gibi hissettirir.</p>
<p>Eksik olan şey, bir SQLite dosyası açan ve tam bir IDE'nin yükü olmadan beklediğiniz konfor özellikleriyle sorgular yazmanıza izin veren hızlı, odaklanmış bir SQL düzenleyicisidir.</p>

<h2>Tome'un SQL Sorgu Düzenleyicisi</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, özellikle SQLite için tasarlanmış yerleşik bir SQL sorgu düzenleyicisi içerir. Yerel bir macOS uygulamasının parçasıdır, bu nedenle anında başlar ve minimum kaynak kullanımıyla çalışır.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Mac'te sözdizimi vurgulama ile Tome SQL sorgu düzenleyicisi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sözdizimi Vurgulama</h3>
<p>SQL anahtar kelimeleri, tablo adları, dize değişmezleri ve sayılar okunabilirlik için renk kodludur. Kriptik bir hata mesajını sonradan ayrıştırmak yerine sorguyu çalıştırmadan önce hataları tespit edin.</p>

<h3>Otomatik Tamamlama</h3>
<p>Tome şemanızı bilir. Bir tablo adı yazmaya başlayın ve tamamlamalar önerir. Bir FROM cümlesinde bir tabloya referans verin ve sütun adları önerilerde görünür. Bir sütunun ne adı olduğunu hatırlamak için şema tarayıcısı ile sorgu düzenleyicisi arasında geçiş yapmaya son.</p>

<h3>Yerel Bir Izgarada Sonuçlar</h3>
<p>Sorgu sonuçları, bir web görünümünde işlenen HTML değil, hızlı, kaydırılabilir yerel bir tabloda görünür. Sütunları sıralayın, yeniden boyutlandırın ve bir macOS uygulamasından beklediğiniz performansla büyük sonuç kümelerinde kaydırın.</p>

<h3>Bir Uygulamada Tarayın ve Sorgulayın</h3>
<p>Tome sadece bir sorgu düzenleyicisi değildir. Kenar çubuğunda tabloları, görünümleri, indeksleri ve tetikleyicileri tarayın. Verileri satır içinde düzenleyin. Görsel olarak yeni tablolar oluşturun. SQL düzenleyicisi ihtiyacınız olduğunda oradadır ve uygulamanın geri kalanı diğer her şeyi halleder.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "browse-core-data-sqlite-mac": {
    slug: "browse-core-data-sqlite-mac",
    title: "Mac'te Core Data SQLite Dosyaları Nasıl Taranır",
    description: "Core Data verilerini SQLite dosyalarında saklar, ancak Apple bunları incelemek için görsel bir araç sunmaz. Kalıcı verileri hata ayıklamak, uygulama konteynerlerinde arama yapmak ve ham SQL çıktısını okumak anlamına gelir.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>iOS veya macOS uygulamanızda bir Core Data sorununu hata ayıklıyorsunuz. Veri UI'da yanlış görünüyor ve altta yatan SQLite dosyasında gerçekte neyin saklandığını görmeniz gerekiyor. Xcode'un Core Data model düzenleyicisi şemanızı gösterir, ancak gerçek kalıcı verileri taramanıza izin vermez. Bu yüzden arama yapmaya gidiyorsunuz — uygulama konteynerini bulun, .sqlite dosyasını bulun, Terminal'i açın ve ZUSER ve ZPOST gibi adlara sahip tablolara karşı ham sorgular çalıştırmaya başlayın, burada her sütun Z ile öneklenmiştir ve hiçbir şey varlık adlarınızla sezgisel olarak eşleşmez.</p>

<h2>Core Data'nın SQLite Dosyalarını İncelemek Zordur</h2>
<p>Core Data, varsayılan kalıcı deposu olarak SQLite kullanır, ancak kendi kurallarını ekler. Varlık adları tablo adında Z öneki alır. Nitelikler Z öneki eklenmiş sütun adları alır. İlişkiler, hemen tanımayabileceğiniz sütunlarda tamsayı yabancı anahtarlar olarak saklanır. Core Data'nın dahili olarak yönettiği bir Z_METADATA tablosu ve bir Z_PRIMARYKEY tablosu vardır.</p>
<p>Bunların hiçbiri manuel incelemeyi kolaylaştıracak şekilde belgelenmemiştir. <code>SELECT * FROM ZUSER;</code> gibi sorgular çalıştırıp Z öneki eklenmiş sütunları yönetilen nesne modelinize geri eşleştirmeye çalışırsınız. Terminal'de, sözdizimi vurgulama ve görsel ızgara olmadan, bu sıkıcıdır.</p>
<p>Xcode burada yardımcı olmaz. Yerleşik bir SQLite tarayıcısı yoktur. Instruments aracı Core Data işlemlerini profilleyebilir, ancak size gerçek satır verisini göstermez. Ayrı bir araca ihtiyacınız var.</p>

<h2>Tome ile Core Data SQLite Dosyalarını Tarayın</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, Core Data'nın SQLite dosyalarını başka herhangi bir veritabanı gibi açar. Uygulamanızın konteynerine gidin, .sqlite dosyasını bulun ve Tome'da açın. Z öneki eklenmiş her tablo kenar çubuğunda görünür. Tüm satırları ve değerlerini kaydırılabilir bir ızgarada görmek için birine tıklayın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Z öneki eklenmiş tabloları gösteren bir Core Data SQLite dosyasını tarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gerçek Veriyi Görün</h3>
<p>Uygulamanız yanlış değeri gösterdiğinde, SQLite dosyasını Tome'da açın ve gerçek saklanan veriyi kontrol edin. Değer veritabanında mı yanlış, yoksa bir alma/görüntüleme hatası mı? Ham veriye görsel erişime sahip olmak bu soruyu saniyeler içinde yanıtlar.</p>

<h3>İlişkileri ve Meta Verileri İnceleyin</h3>
<p>Core Data'nın varlık türlerini ve birincil anahtarları nasıl izlediğini görmek için Z_PRIMARYKEY tablosunu tarayın. İlişkilerin doğru şekilde saklandığını doğrulamak için yabancı anahtar sütunlarını kontrol edin. Model sürüm karmasını görmek için Z_METADATA'yı inceleyin.</p>

<h3>Tanılama Sorguları Çalıştırın</h3>
<p>Core Data'nın Z öneki eklenmiş tabloları arasında birleştirmeler yazmak, belirli kayıtları filtrelemek veya bir geçiş sorununu gösterebilecek yetim satırları kontrol etmek için Tome'un SQL sorgu düzenleyicisini kullanın. Sözdizimi vurgulama ve otomatik tamamlama, Terminal'de ham sorgular çalıştırmaktan daha kolay hale getirir.</p>

<h3>İncelemek Güvenli, Bulmak Kolay</h3>
<p>Simulator için, uygulamanızın SQLite dosyası <code>~/Library/Developer/CoreSimulator/</code> içinde derinlerde yaşar. Bir macOS uygulaması için, <code>~/Library/Containers/</code> veya <code>~/Library/Application Support/</code> kontrol edin. Dosyayı bulduktan sonra, Tome'un dock simgesine sürükleyin ve taramaya başlayın.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "sqlite-viewer-mac-document-based": {
    slug: "sqlite-viewer-mac-document-based",
    title: "Mac için SQLite Görüntüleyici — Birden Fazla Veritabanını Yan Yana Açın",
    description: "İki SQLite veritabanı arasında verileri karşılaştırmak genellikle sekmeler arasında geçiş yapmak veya veritabanı aracınızın iki örneğini çalıştırmak anlamına gelir. Daha basit bir yaklaşım var.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir SQLite veritabanından diğerine veri taşıyorsunuz ve sonuçları doğrulamanız gerekiyor. Ya da bir staging veritabanını üretimle karşılaştırıyorsunuz. Ya da bir uygulamanın veritabanının iki sürümü var ve neyin değiştiğini tespit etmeniz gerekiyor. Her durumda, iki veritabanına aynı anda bakmanız gerekir — ve çoğu SQLite aracı bunu gerekenden daha zor hale getirir.</p>

<h2>Tek Veritabanı Araçlarıyla Jonglörlük</h2>
<p>Çoğu SQLite tarayıcısı, bir seferde tek bir veritabanı bağlantısı etrafında tasarlanmıştır. İki veritabanını karşılaştırmak için, ya iki ayrı uygulama penceresini manuel olarak açarsınız (araç bunu destekliyorsa), ya da sütun değerlerini hafızanızda tutmaya çalışarak sekmeler arasında ileri geri geçiş yaparsınız. Bazı araçlar, diğerini açmadan önce bir veritabanını kapatmanızı gerektirir.</p>
<p>Terminal yaklaşımı daha da kötüdür. Her biri farklı bir dosyaya karşı <code>sqlite3</code> çalıştıran iki terminal penceresine ihtiyacınız olur, çıktıyı düz metinde yan yana karşılaştırmaya çalışırsınız. Teoride çalışır ama herhangi bir gerçek veri hacmiyle dağılır.</p>
<p>Bu sınırlama, çoğu veritabanı aracının belge tabanlı uygulamalar olarak tasarlanmamış olmasından kaynaklanır. Bir bağlantı yöneticisi etrafında tasarlanmışlardır — bir veritabanı seçin, onunla çalışın, bağlantıyı kesin, başka bir tane seçin. Bu uzak sunucu veritabanları için iyidir ama yerel SQLite dosyaları için gereksiz sürtünmedir.</p>

<h2>Tome: Belge Tabanlı Bir SQLite Görüntüleyici</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, her SQLite veritabanını bir belge olarak ele alır — TextEdit'in metin dosyalarını ele alması veya Preview'in PDF'leri ele alması gibi. Bir veritabanı açın ve kendi penceresini alır. Başka birini açın ve o da kendi penceresini alır. Yan yana düzenleyin veya onları gruplamak için macOS'un yerel sekmelerini kullanın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Mac'te yan yana açık birden fazla SQLite veritabanıyla Tome" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Veritabanlarını Görsel Olarak Karşılaştırın</h3>
<p>Kaynak ve hedef veritabanlarınızı iki pencerede açın. macOS Split View kullanarak veya pencereleri sürükleyerek yan yana yerleştirin. Satır sayılarını, sütun değerlerini veya şema farklılıklarını karşılaştırmak için her ikisinde de aynı tabloyu tarayın. Sekme değiştirme yok, değerleri ezberleme yok.</p>

<h3>Projeler Arasında Çalışın</h3>
<p>Başka bir tanesine karşı geliştirme yaparken bir referans veritabanını açık tutun. Uygulamanızın üretim veritabanını bir test fikstür veritabanının yanında açık tutun. Kendiniki hala yüklüyken bir müşterinin veritabanı dosyasını açın. Tome, aynı anda açık veritabanı sayısını sınırlamaz.</p>

<h3>Her Pencerede Tam Özellik Seti</h3>
<p>Her veritabanı penceresinde tam Tome arayüzü vardır — tablolar, görünümler, indeksler ve tetikleyicilerle kenar çubuğu; satır içi düzenleme ile veri ızgarası; sözdizimi vurgulama ve otomatik tamamlama ile SQL sorgu düzenleyicisi. "Birincil" ve "ikincil" veritabanı kavramı yoktur. Açık olan her veritabanı tamamen işlevseldir.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "inspect-app-database-mac": {
    slug: "inspect-app-database-mac",
    title: "Mac'te Bir Uygulamanın Veritabanı Nasıl İncelenir",
    description: "Mac'inizdeki uygulamalar, Library klasörlerinin derinliklerinde gizli SQLite dosyalarında veri saklar. Bir uygulamanın gerçekte neyi kaydettiğini incelemek, konteyner yollarında gezinmek ve ham veritabanı çıktısını çözmek anlamına gelir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Mac'inizde yerel olarak veri kalıcı hale getiren her uygulama — notlar, yer imleri, mesajlar, sağlık kayıtları, yapılacaklar listeleri — muhtemelen bunu <code>~/Library/</code> veya <code>~/Library/Containers/</code> içine sıkıştırılmış bir SQLite veritabanında saklar. Belki bir uygulamanın hangi verileri topladığını görmek istiyorsunuz. Belki UI'dan silinmiş bir şeyi kurtarmanız gerekiyor. Belki kendi uygulamanızda hata ayıklıyorsunuz ve gerçekte diske ne yazıldığını doğrulamanız gerekiyor. Sebep ne olursa olsun, macOS bu dosyaları görsel olarak incelemek için yerleşik bir yol sunmaz.</p>

<h2>Uygulama Veritabanlarını Bulmak ve Açmak Sıkıcıdır</h2>
<p>Önce dosyayı bulmanız gerekir. Sandbox'lı uygulamalar verilerini <code>~/Library/Containers/com.developer.appname/Data/</code> içinde saklarken, sandbox'sız uygulamalar <code>~/Library/Application Support/</code> kullanabilir. Library klasörü varsayılan olarak gizlidir — Finder'ın "Klasöre Git"ini kullanmanız veya Terminal aracılığıyla gezinmeniz gerekir. .sqlite veya .db dosyasını bulduğunuzda, Terminal'de <code>sqlite3</code> kullanmakla sınırlı kalırsınız, görsel yapı olmadan ham sorgu çıktısını okursunuz.</p>
<p>Simulator'da çalışan iOS uygulamaları için, yol daha da derindir: bir UUID takip eden <code>~/Library/Developer/CoreSimulator/Devices/</code>, ardından uygulamanın Documents veya Library klasörüne başka bir iç içe yol. Düzinelerce simulator cihaz klasörü arasında doğru veritabanını bulmak bir define avıdır.</p>

<h2>Tome ile Herhangi Bir Uygulama Veritabanını İnceleyin</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, herhangi bir SQLite veritabanı dosyasını açmanıza ve içeriğini — tabloları, görünümleri, indeksleri, tetikleyicileri ve satır verilerini — yerel bir macOS arayüzünde hemen görmenize olanak tanır. Dosyayı bulduktan sonra, sadece Tome'a sürükleyin veya Dosya → Aç'ı kullanın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te bir uygulamanın SQLite veritabanını inceliyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bir Uygulamanın Ne Sakladığını Anlayın</h3>
<p>Uygulamanın gerçekte hangi verileri kalıcı hale getirdiğini görmek için her tabloyu tarayın. Sütun adları şema tasarımını ortaya çıkarır. Satır verileri gerçek değerleri gösterir. Tahmin yok, Terminal komutları yok — sadece kenar çubuğundaki tablolara tıklayın ve içeriklerinde kaydırın.</p>

<h3>Kendi Uygulamanızın Veri Katmanında Hata Ayıklayın</h3>
<p>SQLite veya Core Data kullanan bir macOS veya iOS uygulaması geliştiriyorsanız, Tome yazmalarınızın doğru şekilde ulaştığını doğrulamanıza olanak tanır. İlişkilerin sağlam olduğunu kontrol edin, otomatik oluşturulan sütunları inceleyin ve sözdizimi vurgulama ve otomatik tamamlama ile tanılama sorguları çalıştırın.</p>

<h3>Veriyi Kurtarın veya Dışa Aktarın</h3>
<p>Bir uygulamanın UI'sinden silinmiş ama veritabanında hala var olabilecek bir kayda mı ihtiyacınız var? Dosyayı Tome'da açın ve ilgili tabloyu arayın. Veri oradaysa, doğrudan okuyabilir veya tam olarak ihtiyacınız olanı çıkarmak için bir SQL sorgusu kullanabilirsiniz.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "sqlite-for-ios-developers-mac": {
    slug: "sqlite-for-ios-developers-mac",
    title: "Mac'te iOS Geliştiricileri İçin SQLite Tarayıcısı",
    description: "iOS geliştirme, uygulamanızın yerel veritabanına ne yazdığını sürekli kontrol etmek anlamına gelir. Xcode'un yerleşik bir SQLite görüntüleyicisi yoktur, bu da sizi Terminal ve üçüncü taraf araçlardan bir iş akışı bir araya getirmeye bırakır.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Kalıcılık için Core Data veya ham SQLite kullanan bir iOS uygulaması geliştiriyorsunuz. UI'da bir şey yanlış görünüyor — belki bir liste doldurulmuyor veya bir değer eski görünüyor. Veritabanını kontrol etmeniz gerekiyor. Xcode bir veri modeli düzenleyicisi ve bir Instruments profilleyici sunar, ancak hiçbiri SQLite dosyasında oturan gerçek satırları göstermez. Bu yüzden Terminal'i açıyorsunuz, Simulator'ün konteyner yolunu buluyorsunuz ve Z öneki eklenmiş tablolara karşı <code>SELECT *</code> sorguları çalıştırmaya başlıyorsunuz. Bu iş akışı her seferinde konsantrasyonunuzu bozar.</p>

<h2>iOS Geliştiricisinin Veritabanı Sorunu</h2>
<p>Her iOS Simulator çalıştırması, UUID adlı bir dizinin içine yerleştirilmiş olarak verilerini <code>~/Library/Developer/CoreSimulator/Devices/</code> altında saklar. Simulator'ü sıfırladığınızda veya cihaz değiştirdiğinizde yol değişir. Konumu yer imlerine eklseniz bile, bir sonraki Xcode güncellemesi işleri karıştırabilir. Doğru .sqlite dosyasını bulmak işin yarısıdır.</p>
<p>Onu bulduğunuzda, <code>sqlite3</code> CLI size ham metin çıktısı verir. Core Data'nın Z öneki eklenmiş tablo ve sütun adları manuel sorguları kafa karıştırıcı hale getirir. Sütun adları için otomatik tamamlama yok, satırları taramak için görsel ızgara yok ve tam bir UPDATE ifadesi yazmadan bir test değerini hızlıca düzenlemenin bir yolu yok. Çoğu geliştirici günde birkaç kez bu dansta dakikalar harcar.</p>
<p>DB Browser for SQLite gibi üçüncü taraf araçlar çalışır ama macOS'ta yabancı hissettirir — yanlış klavye kısayolları ve yerel olmayan dosya iletişim kutuları olan Qt tabanlı arayüzler. DBeaver ve DataGrip tam veritabanı IDE'leridir, yerel bir SQLite dosyasını incelemek için aşırıdır.</p>

<h2>Tome: Mac İş Akışınız İçin İnşa Edilmiş Bir SQLite Tarayıcısı</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, bir iOS geliştiricisinin iş akışına doğal olarak uyan yerel bir macOS SQLite tarayıcısıdır. Simulator'ün .sqlite dosyasını açın ve her tabloyu, görünümü ve indeksi anında görün. Core Data'nın Z öneki eklenmiş tablolarını kaydırılabilir bir ızgarada tarayın. SQL yazmadan test senaryoları kurmak için değerleri satır içinde düzenleyin.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te bir iOS uygulamasının SQLite veritabanını tarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Core Data Depolarını Görsel Olarak İnceleyin</h3>
<p>Core Data'nın SQLite tabloları, Terminal'de ayrıştırılması zor olan Z öneki eklenmiş adlar kullanır. Tome'da, her tablo kenar çubuğunda görünür — birine tıklayın ve doğru hizalanmış sütunlarla tüm satırları görün. ZUSER ve ZPOST tablolarını bir bakışta yönetilen nesne modelinizle eşleştirin.</p>

<h3>Yeniden Oluşturmadan Test Verilerini Düzenleyin</h3>
<p>Bir hatayı yeniden üretmek için bir değeri değiştirmeniz mi gerekiyor? Tome'da hücreye tıklayın ve yeni değeri yazın. Bir UPDATE ifadesi yazmaya veya uygulamanızın tohumlama mantığını yeniden çalıştırmaya gerek yok. Sınır durumlarını test etmek için satırlar ekleyin veya temiz bir durumu simüle etmek için kayıtları silin.</p>

<h3>Tanılama Sorguları Çalıştırın</h3>
<p>Tome'un sözdizimi vurgulama ve otomatik tamamlama içeren SQL düzenleyicisi, uygulamanızın verilerine karşı birleştirmeler, toplamalar ve filtrelenmiş sorgular yazmanıza olanak tanır. İlişkileri doğrulayın, kayıtları sayın veya belirli değerleri arayın — hepsi uygulamadan ayrılmadan.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "view-firefox-history-sqlite-mac": {
    slug: "view-firefox-history-sqlite-mac",
    title: "Mac'te Firefox Geçmişi (SQLite) Nasıl Görüntülenir",
    description: "Firefox, tarama geçmişinizi places.sqlite adlı bir SQLite veritabanında saklar. Bunu tarayıcı dışında görüntülemek, kilitli dosyalarla ve ham SQL çıktısıyla uğraşmak anlamına gelir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Firefox, tüm tarama geçmişinizi, yer imlerinizi ve site meta verilerinizi <code>places.sqlite</code> adlı bir SQLite veritabanında tutar. Firefox'un yerleşik aramasının iyi göstermediği eski geçmişte arama yapmak, tarama verilerinizi dışa aktarmak veya alışkanlıklarınızı analiz etmek isteyebilirsiniz. Ancak bu dosyayı açmak basit değildir — Firefox çalışırken onu kilitler ve bir kopyasını aldığınızda, macOS'un onu görsel olarak görüntülemenin yerleşik bir yolu yoktur.</p>

<h2>Veritabanını Bulma ve Kopyalama</h2>
<p>Firefox'un profil klasörü <code>~/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release/</code> içinde yaşar. İçinde, <code>cookies.sqlite</code> ve <code>formhistory.sqlite</code> gibi diğer veritabanlarının yanında <code>places.sqlite</code> bulacaksınız. Sorun şu: Firefox, tarayıcı çalışırken bu dosyaları kilitler. Önce Firefox'tan çıkmanız veya çalışırken dosyayı başka bir konuma kopyalamanız gerekir (Firefox o anda yazıyorsa kopya tutarsız olabilir).</p>
<p>Dosyayı aldığınızda, Terminal yaklaşımı <code>sqlite3 places.sqlite</code> çalıştırmak ve <code>moz_places</code>, <code>moz_historyvisits</code> ve <code>moz_bookmarks</code> gibi tablolara karşı sorgular yazmak anlamına gelir. Şema sezgisel değildir — ziyaret zaman damgaları epoch'tan bu yana mikrosaniye cinsinden saklanır, URL'ler bir tabloda, ziyaret meta verileri başka bir tabloda ve okunabilir bir geçmiş listesi almak bir JOIN gerektirir. Bu, SQL'de akıcı biri için işe yarar ama çoğu kullanıcı için makul değildir.</p>

<h2>Tome ile Firefox Geçmişini Görsel Olarak Tarayın</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, <code>places.sqlite</code>'ı başka herhangi bir veritabanı dosyası gibi açar. Kopyalanan dosyayı Tome'a sürükleyin ve kenar çubuğunda listelenen her tabloyu — <code>moz_places</code>, <code>moz_historyvisits</code>, <code>moz_bookmarks</code> ve daha fazlasını — hemen görün. İçeriğini kaydırılabilir bir ızgarada taramak için herhangi bir tabloya tıklayın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te Firefox places.sqlite geçmiş veritabanını görüntülüyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Geçmişinizi Arayın ve Filtreleyin</h3>
<p>Hedefli aramalar yazmak için Tome'un SQL sorgu düzenleyicisini kullanın. Belirli bir alan adına yapılan her ziyareti bulun, mikrosaniye zaman damgalarını kullanarak tarih aralığına göre filtreleyin veya belirli bir siteyi kaç kez ziyaret ettiğinizi sayın. Sözdizimi vurgulama ve otomatik tamamlama bu sorguları hızlıca yazmayı sağlar.</p>

<h3>Yer İmlerini ve Meta Verileri Keşfedin</h3>
<p><code>moz_bookmarks</code> tablosu, ebeveyn-çocuk ilişkileriyle yer imi ağaç yapınızı saklar. Klasör yapısı ve sıralama düzeni dahil tam yer imi hiyerarşinizi görmek için Tome'da tarayın — Firefox'un yer imi yöneticisinin bazen gizlediği ayrıntılar.</p>

<h3>Diğer Firefox Veritabanlarını İnceleyin</h3>
<p>Aynı profil klasörü <code>cookies.sqlite</code>, <code>formhistory.sqlite</code> ve <code>content-prefs.sqlite</code> içerir. Her biri Tome'un açabileceği standart bir SQLite veritabanıdır. Bir sitenin hangi çerezleri ayarladığını kontrol edin, kaydedilmiş form girişlerini gözden geçirin veya siteye özel tercihleri inceleyin — hepsi görsel olarak, Terminal'de ham sorgular yazmadan.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "sqlite-vs-realm-browser-mac": {
    slug: "sqlite-vs-realm-browser-mac",
    title: "Mac'te SQLite ve Realm Tarayıcısı Karşılaştırması",
    description: "Mobil uygulamalar yerel depolama için SQLite veya Realm kullanır, ancak Mac'te herhangi birini incelemek farklı bir araç gerektirir. Doğru tarayıcıyı seçmek, uygulamanızın gerçekte hangi formatı kullandığına bağlıdır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir mobil uygulama geliştiriyorsunuz ve yerel veritabanını incelemeniz gerekiyor. Realm kullanıyorsanız, Realm Studio'ya başvurursunuz. SQLite kullanıyorsanız (doğrudan veya Core Data, GRDB veya Room aracılığıyla), tamamen farklı bir araca ihtiyacınız vardır. İki format temelde farklıdır ve tarama araçları örtüşmez. Her birinin ne sunduğunu anlamak, doğru olanı seçmenize — veya ikisine de ihtiyacınız olduğunu fark etmenize — yardımcı olur.</p>

<h2>Realm ve SQLite Farklı İhtiyaçlara Hizmet Eder</h2>
<p>Realm bir nesne veritabanıdır — verileri tablolarda satırlar olarak değil, özellikleri ve ilişkileri olan nesneler olarak saklar. Realm Studio, bu nesneleri görsel olarak taramanıza, ilişkileri bağlantılar olarak görmenize ve özellikleri satır içinde düzenlemenize olanak tanır. Realm dosyaları için özel olarak inşa edilmiştir ve başka hiçbir şey yapmaz.</p>
<p>SQLite, tek bir dosya olarak saklanan ilişkisel bir veritabanıdır. Satır ve sütunlarla standart SQL tabloları kullanır. iOS'ta Core Data, Android'de Room ve sayısız diğer çerçeve, depolama arka ucu olarak SQLite kullanır. Ekosistem devasadır, ancak Mac'teki inceleme araçları tarihsel olarak ya Terminal tabanlı ya da yerinde durmayan platformlar arası portlardır.</p>
<p>Projeniz Realm kullanıyorsa, Realm Studio tek gerçek seçeneğinizdir — hiçbir genel amaçlı veritabanı tarayıcısı .realm dosyalarını açamaz. Ancak projeniz herhangi bir biçimde SQLite kullanıyorsa, seçenekleriniz vardır. Soru, bu seçeneklerin macOS'ta gerçekten iyi olup olmadığıdır.</p>

<h2>Diğer Yarı İçin Yerel Bir SQLite Tarayıcısı</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, Realm Studio'nun odağını ve cilasını eşleştiren ancak SQLite veritabanları için olan yerel bir macOS SQLite tarayıcısıdır. Realm Studio .realm dosyaları için özel olarak inşa edildiği yerde, Tome .sqlite, .db ve .sqlite3 dosyaları için özel olarak inşa edilmiştir — ve başka hiçbir şey için değil.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Realm Studio ile karşılaştırıldığında Mac'te yerel Tome SQLite tarayıcısı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Aynı Odaklanmış Felsefe</h3>
<p>Realm Studio bir PostgreSQL istemcisi olmaya çalışmaz. Benzer şekilde, Tome MySQL veya MongoDB'ye bağlanmaya çalışmaz. Yalnızca SQLite'a odaklanarak, her özellik — satır içi düzenleme, tablo oluşturma, sorgu otomatik tamamlama — gerçekte çalıştığınız format için optimize edilmiştir.</p>

<h3>Tabloları Tarayın, Satır İçinde Düzenleyin, Konforla Sorgulayın</h3>
<p>Bir SQLite veritabanı açın ve kenar çubuğunda tabloları, görünümleri, indeksleri ve tetikleyicileri tarayın. Hücre değerlerini tıklayarak düzenleyin. SQL yazmadan satır ekleyin veya silin. Sorgulara ihtiyaç duyduğunuzda, yerleşik düzenleyici şemanız için sözdizimi vurgulama ve otomatik tamamlama sunar.</p>

<h3>İkisine de İhtiyacınız Olduğunda</h3>
<p>Bazı projeler bir bileşen için Realm, başka bir bileşen için SQLite kullanır. Realm Studio ve Tome'u yan yana tutun — her biri kendi formatını yerel olarak işler ve hiçbiri için tasarlanmadığı formatları desteklemeye çalışarak kaynak israf etmez.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "mac-sqlite-command-line-vs-gui": {
    slug: "mac-sqlite-command-line-vs-gui",
    title: "Mac SQLite: Komut Satırı ile GUI — Ne Zaman Hangisi Kullanılır",
    description: "sqlite3 CLI her Mac ile birlikte gelir ve hızlı sorguları halleder, ancak tarama, düzenleme ve tanıdık olmayan şemaları anlama konusunda yetersiz kalır. Araçları ne zaman değiştireceğinizi bilmek zaman kazandırır.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Her Mac, <code>sqlite3</code> komut satırı aracıyla birlikte gelir. Terminal'de rahat olan geliştiriciler için, hızlı sorgular çalıştırmanın güvenilir bir yoludur. Ancak CLI'nin verimli olmayı bıraktığı ve bir GUI'nin daha hızlı hale geldiği bir nokta vardır — hile, o çizginin nerede olduğunu bilmektir. Görev için yanlış aracı kullanmak her iki yönde de zaman kaybettirir.</p>

<h2>Komut Satırı Ne Zaman Kazanır</h2>
<p><code>sqlite3</code> CLI, komut dosyalı işlemlerde mükemmeldir. Bir veritabanından bir değer çıkarması gereken bir kabuk betiği yazıyorsanız, CLI doğrudan diğer komutlara aktarılır. Tek satırlık sorgular hızlıdır: <code>sqlite3 app.db "SELECT count(*) FROM users;"</code> hiçbir şey başlatmadan size bir cevap verir. Otomasyon, <code>.dump</code> ile yedeklemeler ve mevcut bir Terminal oturumunda hızlı kontroller için CLI doğru araçtır.</p>
<p>Ayrıca her yerde mevcuttur. Kurulum gerekmez, indirilecek uygulama yoktur. Uzak bir makineye SSH ile bağlıysanız veya bir CI hattında çalışıyorsanız, sahip olduğunuz tek şey CLI'dir — ve şemayı bildiğiniz hedefli sorgular için iyi çalışır.</p>

<h2>CLI Ne Zaman Başarısız Olur</h2>
<p>CLI, keşif için bozulur. Tanıdık olmayan bir veritabanı açtığınızda ve şemasını anlamanız gerektiğinde, <code>.tables</code> ve <code>.schema tablename</code> komutlarını tekrar tekrar çalıştırmak yavaştır. Geniş tablolar terminalde sarılır. Sonuçlar arasında kaydırma yoktur — çıktı sadece uçup geçer. Veriyi düzenlemek, yanlışlıkla toplu güncellemeler riski taşıyan hassas WHERE cümleleriyle UPDATE ifadeleri yazmak anlamına gelir.</p>
<p>Geliştirici olmayan herkes için — veri analistleri, tasarımcılar, QA test uzmanları — CLI etkili bir şekilde kullanılamaz. Ve geliştiriciler için bile, birkaç tablodan fazlasını görsel olarak taramak bir GUI'de basitçe daha hızlıdır.</p>

<h2>Tome: Denklemin GUI Tarafı</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, yerel bir macOS SQLite tarayıcısı olarak GUI rolünü doldurur. CLI'nin yerine geçmez — onu tamamlar. Betikleme ve hızlı kontroller için CLI'yi kullanın; veritabanlarını görsel olarak taramak, düzenlemek ve anlamak için Tome'u kullanın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Mac'te komut satırıyla karşılaştırıldığında Tome GUI SQLite tarayıcısı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tanıdık Olmayan Şemaları Keşfedin</h3>
<p>Herhangi bir veritabanını açın ve kenar çubuğunda her tabloyu, görünümü, indeksi ve tetikleyiciyi görün. Şemayı anlamak, örnek verileri taramak ve ilişkileri anlamak için tablolara tıklayın — hepsi tek bir komut yazmadan.</p>

<h3>Güvenle Düzenleyin</h3>
<p>Değerini değiştirmek için bir hücreye tıklayın. UPDATE ifadesi yok, yanlış anlaşılacak WHERE cümlesi yok. Bir tıklamayla satır ekleyin ve silin. Her düzenleme tam olarak tıkladığınız hücreyi hedeflediğinde, yanlışlıkla toplu değişiklik riski ortadan kalkar.</p>

<h3>Yardımla Sorgulayın</h3>
<p>SQL yazdığınızda, Tome'un sorgu düzenleyicisi sözdizimi vurgulama ve otomatik tamamlama sunar. Çıplak CLI ile tam bir veritabanı IDE'si arasındaki orta noktadır — kurumsal araçların yükü olmadan sorguları daha hızlı yazmak için yeterli yardım.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "edit-sqlite-without-sql-mac": {
    slug: "edit-sqlite-without-sql-mac",
    title: "Mac'te SQL Yazmadan SQLite Nasıl Düzenlenir",
    description: "Bir SQLite veritabanında bir değeri değiştirmesi gereken herkes SQL bilmez. Tasarımcılar, QA test uzmanları ve ürün yöneticileri, hızlı bir veri düzeltmesi için UPDATE söz dizimini öğrenmek zorunda kalmamalı.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir QA test uzmanının bir izin hatasını yeniden üretmek için bir kullanıcının rolünü değiştirmesi gerekiyor. Bir tasarımcı, bir prototipin veritabanındaki yer tutucu metni değiştirmek istiyor. Bir ürün yöneticisinin bir özellik bayrağını test etmek için bir yapılandırma değerini güncellemesi gerekiyor. Hiçbirinin basit bir veri değişikliği yapmak için SQL söz dizimini öğrenmesi gerekmemeli — ancak Mac'te, SQLite veritabanlarını düzenlemek için varsayılan araç <code>sqlite3</code> komut satırıdır, burada tek hücrelik bir düzenleme bile <code>UPDATE tablename SET column = 'value' WHERE id = 42;</code> yazmayı gerektirir.</p>

<h2>SQL, Geliştirici Olmayanlar İçin Bir Engeldir</h2>
<p>SQL teoride öğrenmesi zor değildir, ancak baskı altında doğru yapmak başka bir konudur. Bir UPDATE ifadesinde WHERE cümlesini unutmak, tablodaki her satırı değiştirir. Yanlış tırnak işaretleri kullanmak bir sözdizimi hatasına neden olur. Bir sütun adını yanlış yazmak kafa karıştırıcı bir hata mesajı üretir. Sadece bir boolean'ı çevirmesi veya bir dizeyi değiştirmesi gereken biri için, bu tören göreve orantısızdır.</p>
<p>Geliştiriciler bile genellikle önemsiz düzenlemeler için SQL yazmayı tercih etmez. Terminal'i açmak, dosyaya gitmek, <code>sqlite3</code>'ü başlatmak, tam tablo ve sütun adlarını hatırlamak ve sözdizimsel olarak doğru bir ifade yazmak — hepsi tek bir hücreyi değiştirmek için — sadece tıklayıp yazmaya kıyasla yavaştır.</p>

<h2>Tome ile SQLite'ı Bir Elektronik Tablo Gibi Düzenleyin</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, herkesin Mac'te tek bir satır SQL yazmadan bir SQLite veritabanını düzenlemesine olanak tanır. Dosyayı açın, tabloyu bulun, hücreye tıklayın, yeni değeri yazın. Bir elektronik tabloyu düzenlemek gibi çalışır — çünkü basit değişiklikler için istediğiniz arayüz tam olarak budur.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te SQL olmadan SQLite verisini düzenliyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Herhangi Bir Hücreye Tıklayıp Düzenleyin</h3>
<p>Tome'un veri ızgarasındaki her hücre düzenlenebilir. Tıklayın, değeri değiştirin ve güncelleme tam olarak o satırı ve sütunu hedefler. Unutulacak WHERE cümlesi yok, toplu değişiklik riski yok, SQL bilgisi gerekmez.</p>

<h3>Komut Olmadan Ekleyin ve Silin</h3>
<p>Ekle düğmesine tıklayarak yeni bir satır ekleyin. Seçip silerek satırları kaldırın. Tome, arka planda INSERT ve DELETE SQL'ini işler, böylece veritabanı komutları yerine tanıdık eylemler kullanarak verinizle etkileşim kurarsınız.</p>

<h3>Tabloları Görsel Olarak Oluşturun</h3>
<p>Yeni bir tabloya mı ihtiyacınız var? Tome'un görsel tablo düzenleyicisi, sütun adlarını, türlerini ve kısıtlamaları bir formda tanımlamanıza olanak tanır — hafızadan <code>CREATE TABLE</code> söz dizimi yazmaya gerek yok. Alanları doldurun ve tablo doğru şekilde oluşturulur.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "sqlite-database-viewer-apple-silicon": {
    slug: "sqlite-database-viewer-apple-silicon",
    title: "Apple Silicon İçin Optimize Edilmiş SQLite Veritabanı Görüntüleyici",
    description: "Birçok veritabanı aracı hala Apple Silicon Mac'lerde Rosetta üzerinden çalışıyor, pil ve performansı boşa harcıyor. Yerel bir ARM derlemesi, tüm gün açık tuttuğunuz bir uygulama için fark edilir bir değişiklik yaratır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Performansı ve pil ömrü için bir M serisi Mac satın aldınız. Sonra bir veritabanı aracı kuruyorsunuz ve Rosetta üzerinden çalıştığını fark ediyorsunuz — performans için değil, uyumluluk için var olan Intel çeviri katmanı. Uygulama daha fazla bellek kullanıyor, daha fazla pil tüketiyor ve olması gerekenden daha yavaş başlıyor. Xcode veya VS Code'un yanında tüm gün açık tutabileceğiniz bir araç için, bu yük birikir.</p>

<h2>Veritabanı Araçlarındaki Rosetta Vergisi</h2>
<p>Birçok popüler veritabanı tarayıcısı hala yalnızca Intel ikili dosyaları olarak gönderiliyor veya yakın zamana kadar güvenilir Apple Silicon desteği kazanan Electron ile inşa ediliyor. Qt ile inşa edilen DB Browser for SQLite, sürümler arasında tutarsız ARM desteğine sahip. DBeaver Java üzerinde çalışıyor, donanımın üzerine başka bir soyutlama katmanı ekliyor. Teknik olarak Apple Silicon'u destekleyen araçlar bile genellikle yerel bir uygulamanın ihtiyaç duyduğundan çok daha fazla kaynak tüketen Electron'un Chromium motorunu paketler.</p>
<p>Activity Monitor'ü kontrol edin ve "Tür" sütununa bakın. Veritabanı aracınız bir M serisi Mac'te "Intel" gösteriyorsa, Rosetta üzerinden çalışıyor demektir. Bu, yerel bir ARM ikili dosyasına kıyasla daha yavaş başlangıç, daha yüksek bellek kullanımı ve azalmış pil ömrü anlamına gelir. Bir SQLite görüntüleyici gibi hafif bir yardımcı program için, performans farkı özellikle belirgindir çünkü uygulamanın kendisi hızlı ve küçük olmalıdır.</p>

<h2>Tome: İlk Günden Beri Yerel Apple Silicon</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, hem Apple Silicon hem de Intel Mac'lerde yerel olarak çalışan evrensel bir ikili dosya olarak Swift ve AppKit ile inşa edilmiştir. Bir M serisi Mac'te anında başlar, minimum bellek kullanır ve sıfır Rosetta yükü vardır. Apple Silicon'un çalışması için tasarlandığı türden bir uygulamadır.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Apple Silicon Mac'te yerel olarak çalışan Tome SQLite görüntüleyici" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Anında Başlatma, Düşük Bellek</h3>
<p>JVM başlatma yok, Chromium motoru başlatma yok, Rosetta çevirisi yok. Tome bir saniyeden kısa sürede açılır ve hafif kalır — tipik olarak Electron tabanlı alternatiflerin tükettiği belleğin bir kısmını kullanır. Diğer işinizi etkilemeden tüm gün açık tutun.</p>

<h3>Büyük Tablolarda Pürüzsüz Kaydırma</h3>
<p>Yerel AppKit işleme, Tome'un binlerce satırda Finder veya Numbers'tan beklediğiniz aynı pürüzsüzlükle kaymasını sağlar. Düşürülen kare yok, büyük bir sonuç kümesinin sonuna atladığınızda gecikme yok. M serisi çip, yerel UI'yi zahmetsizce işler.</p>

<h3>Tam Özellik Seti, Minimal Ayak İzi</h3>
<p>Tabloları, görünümleri, indeksleri ve tetikleyicileri tarayın. Verileri satır içinde düzenleyin. Sözdizimi vurgulama ve otomatik tamamlama ile SQL sorguları çalıştırın. Tabloları görsel olarak oluşturun ve değiştirin. Bunların hepsi, platform için özel olarak inşa edildiği için Mac'inizin kaynaklarına saygı gösteren bir uygulamada.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "open-whatsapp-backup-sqlite-mac": {
    slug: "open-whatsapp-backup-sqlite-mac",
    title: "Mac'te WhatsApp Yedekleme SQLite Dosyası Nasıl Açılır",
    description: "WhatsApp, sohbet geçmişini bir SQLite veritabanında saklar. Bu mesajları uygulama dışında görüntülemek — arşivleme, yasal veya kişisel nedenlerle — veritabanı dosyasını Mac'inizde çıkarmayı ve açmayı gerektirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>WhatsApp, sohbet mesajlarınızı, medya referanslarınızı ve kişi verilerinizi bir SQLite veritabanında saklar. iMazing gibi bir araç kullanarak bir iPhone'dan yedek çıkardıysanız, bir iTunes yedeğinden <code>ChatStorage.sqlite</code> dosyası aldıysanız veya bir Android yedeğinden <code>msgstore.db</code> çektiyseniz, artık Mac'inizde bir veritabanı dosyanız var. Üzerine çift tıklamak hiçbir işe yaramaz. Onu açmanın ve içindeki konuşmaları okumanın bir yoluna ihtiyacınız var.</p>

<h2>Bu Neden Olması Gerekenden Daha Zor</h2>
<p>WhatsApp'ın SQLite veritabanları kendi şemalarını kullanır. Mesajlar, gönderici, zaman damgası, metin içeriği, medya türü ve durum için sütunlarla <code>ZWAMESSAGE</code> (iOS) veya <code>messages</code> (Android) gibi tablolarda yaşar. Zaman damgaları standart olmayan formatlarda saklanır — iOS, Core Data'nın epoch'unu kullanır (2001-01-01'den bu yana saniye), Android ise Unix milisaniyelerini kullanır. Kişilere okunabilir isimler değil, JID dizeleriyle referans verilir.</p>
<p>Dosyayı Terminal'de <code>sqlite3</code> ile açmak size ham erişim sağlar, ancak sohbet mesajlarını kodlanmış zaman damgaları ve JID tanımlayıcıları olan biçimlendirilmemiş metin satırları olarak okumak çoğu insan için pratik olarak işe yaramaz. Veriyi anlamlandırmak için görsel bir arayüze ihtiyacınız var.</p>
<p>Android yedekleri başka bir komplikasyon ekler: <code>msgstore.db.crypt15</code> dosyası şifrelidir. Herhangi bir SQLite tarayıcısı onu açabilmeden önce anahtar dosyanızı kullanarak önce şifresini çözmeniz gerekir. Şifresi çözüldükten sonra, standart bir SQLite veritabanıdır.</p>

<h2>Tome ile WhatsApp Verilerini Tarayın</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, WhatsApp'ın SQLite veritabanı dosyalarını başka herhangi bir veritabanı gibi açar. Çıkarılan <code>ChatStorage.sqlite</code> veya şifresi çözülmüş <code>msgstore.db</code>'yi Tome'a sürükleyin ve kenar çubuğundaki her tabloyu görün. Sohbet geçmişinizi kaydırılabilir bir ızgarada taramak için messages tablosuna tıklayın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te bir WhatsApp yedekleme SQLite veritabanını açıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Mesajları Bağlam İçinde Okuyun</h3>
<p>Metin içeriğini, gönderici tanımlayıcılarını, zaman damgalarını ve medya referanslarını görmek için messages tablosunu tarayın. Konuşmaları kronolojik olarak okumak için tarihe göre sıralayın. Mesajları kişiye veya tarih aralığına göre filtrelemek için Tome'un SQL düzenleyicisini kullanın.</p>

<h3>Konuşmalar Arasında Arama Yapın</h3>
<p>Belirli bir mesajı bulmanız mı gerekiyor? Tome'un otomatik tamamlamalı SQL düzenleyicisinde hızlı bir sorgu yazın: <code>SELECT * FROM ZWAMESSAGE WHERE ZTEXT LIKE '%keyword%';</code> Sonuçlar, kaydırabileceğiniz ve sıralayabileceğiniz yerel bir ızgarada görünür — Terminal'deki grep'ten çok daha pratik.</p>

<h3>Verileriniz Mac'inizde Kalır</h3>
<p>Veritabanınızı yüklemenizi gerektiren web tabanlı SQLite görüntüleyicilerin aksine, Tome tamamen yerel olarak çalışır. WhatsApp mesajlarınız asla makinenizden ayrılmaz. Aç, tara, sorgula ve kapat — her şey Mac'inizde gerçekleşir.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "sqlite-query-editor-autocomplete-mac": {
    slug: "sqlite-query-editor-autocomplete-mac",
    title: "Mac'te Otomatik Tamamlamalı SQLite Sorgu Düzenleyicisi",
    description: "Otomatik tamamlama olmadan bir SQLite veritabanına karşı SQL sorguları yazmak, tablo ve sütun adlarını kontrol etmek için şema görünümü ile düzenleyici arasında sürekli geçiş yapmak anlamına gelir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Otuz tablolu bir SQLite veritabanına karşı bir SELECT sorgusu yazıyorsunuz. Tablonun <code>user_sessions</code> veya <code>session_logs</code> gibi bir şey olarak adlandırıldığını hatırlıyorsunuz — ama hangisi? Ve zaman damgası sütunu — <code>created_at</code> mı, <code>timestamp</code> mi, yoksa <code>date_created</code> mı? <code>sqlite3</code> CLI'de, <code>.schema</code> moduna geçer, tabloya bakar, sorgunuzu yazmaya geri döner ve her sütun referansı için tekrarlarsınız. Bu bağlam değiştirme, sorgu yazma zamanınızın çoğunun gerçekte gittiği yerdir.</p>

<h2>Otomatik Tamamlama Olmamasının Maliyeti</h2>
<p><code>sqlite3</code> CLI'de tablo veya sütun adları için otomatik tamamlama yoktur. Hafızadan yazarsınız ve bir şeyi yanlış yazarsanız, yazarken değil, yürüttükten sonra bir hata alırsınız. Birkaç tablosu olan basit veritabanları için bu yönetilebilir. Düzinelerce tablosu ve yüzlerce sütunu olan veritabanları için, üretkenliğiniz üzerinde sürekli bir vergidir.</p>
<p>Bazı geliştiriciler tablo şemalarını bir notlar dosyasına kopyalar ve sorgular yazarken ona başvurur. Diğerleri <code>.tables</code> ve <code>PRAGMA table_info(tablename);</code> komutlarını tekrar tekrar çalıştırır. Her iki yaklaşım da eksik bir özellik için geçici çözümlerdir — sorgu düzenleyicisi şemanızı bilmeli ve doğru SQL yazmanıza yardımcı olmalıdır.</p>
<p>DataGrip gibi tam veritabanı IDE'leri mükemmel otomatik tamamlama sunar, ancak pahalı, ağır ve kurumsal iş akışları için tasarlanmıştır. Yerel bir SQLite dosyası için, sadece tablo adı önerileri almak üzere abonelik tabanlı bir IDE'ye ihtiyacınız olmamalı.</p>

<h2>Tome'un Otomatik Tamamlamalı Sorgu Düzenleyicisi</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, veritabanı şemanızı bilen bir SQL sorgu düzenleyicisi içerir. Bir tablo adı yazmaya başlayın ve eşleşmeleri önerir. Bir tabloya referans verin ve sütun adları tamamlamalar olarak görünür. Tam bir IDE değil — SQLite sorgularını karmaşıklık eklemeden hızlı yazmayı sağlayan tam olarak yardım seviyesidir.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Mac'te otomatik tamamlamalı Tome SQL sorgu düzenleyicisi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Şema Farkındalıklı Öneriler</h3>
<p>Tome, dosyayı açtığınızda veritabanı şemanızı okur. Tablo adları, sütun adları ve SQLite anahtar kelimelerinin hepsi yazarken öneriler olarak görünür. Sütun adlarını ezberlemeye veya sorgu ortasında bir şema tarayıcısına geçmeye gerek yok.</p>

<h3>Sözdizimi Vurgulama</h3>
<p>SQL anahtar kelimeleri, dize değişmezleri, sayılar ve tanımlayıcılar renk kodludur. Bir hata mesajını okuduktan sonra değil, sorguyu çalıştırmadan önce eksik bir tırnak işareti veya yanlış yazılmış bir anahtar kelime tespit edin.</p>

<h3>Yerel Bir Izgarada Sonuçlar</h3>
<p>Sorgu sonuçları anında yerel bir macOS tablo görünümünde görünür. Sütunları sıralayın, yeniden boyutlandırın ve büyük sonuç kümelerinde pürüzsüzce kaydırın. Sonuçları kopyalayın veya belirli hücreleri seçin — ızgara, bir web görünümünde işlenen bir HTML tablosu gibi değil, uygun bir Mac veri görünümü gibi davranır.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "view-chrome-cookies-sqlite-mac": {
    slug: "view-chrome-cookies-sqlite-mac",
    title: "Mac'te Chrome Çerezleri (SQLite) Nasıl Görüntülenir",
    description: "Chrome, çerezleri Mac'inizde bir SQLite veritabanında saklar. Bunları DevTools aracılığıyla görüntülemek bir seferde bir site için işe yarar, ancak tam çerez veritabanını incelemek farklı bir yaklaşım gerektirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Chrome tüm çerezleri <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code> konumunda bulunan <code>Cookies</code> adlı (uzantısız) bir SQLite veritabanı dosyasında saklar. Chrome DevTools aracılığıyla tek bir site için çerezleri görüntüleyebilirsiniz, ancak tüm çerezlerde arama yapmak, izleme kalıplarını analiz etmek veya sitelerin hangi verileri sakladığını denetlemek istiyorsanız, gerçek veritabanı dosyasını açmanız gerekir. Chrome, tam çerez deposunu görsel olarak taramanın bir yolunu sunmaz.</p>

<h2>DevTools Sınırlaması</h2>
<p>Chrome'un DevTools'taki Application sekmesi, şu anda yüklü sayfa için alan adına göre çerezleri gösterir. Bu, belirli bir sitenin çerezlerinde hata ayıklamak için işe yarar ama tüm sitelerdeki tüm çerezleri görmek, birden fazla alan adı tarafından kullanılan belirli bir çerez adını aramak veya kaç izleme çerezinin mevcut olduğunu saymak istediğinizde yetersiz kalır. Her siteyi ayrı ayrı ziyaret edip her birini incelemeniz gerekir — pratik değil.</p>
<p>Veritabanı yaklaşımı size tam resmi verir. Ancak Chrome'un <code>Cookies</code> dosyasını Terminal'de <code>sqlite3</code> ile açmak, host anahtarları, çerez adları, değerler, son kullanma zaman damgaları (Chrome'un epoch formatında — 1 Ocak 1601'den bu yana mikrosaniye) ve şifrelenmiş değerleri ham metin olarak okumak anlamına gelir. Chrome, macOS'ta çerez değerlerini şifreler, bu nedenle <code>encrypted_value</code> sütunu doğrudan okunamayan ikili blob'lar içerir. Meta veri sütunları — host, ad, yol, son kullanma, bayraklar — hala okunabilir ve genellikle gerçekte ihtiyacınız olan şeydir.</p>

<h2>Tome ile Chrome Çerezlerini Tarayın</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, Chrome'un Cookies veritabanı dosyasını açar ve <code>cookies</code> tablosunu kaydırılabilir, sıralanabilir bir ızgarada görüntüler. Önce Chrome'u kapatın (dosyayı kilitler), ardından <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code> dosyasını Tome'da açın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te Chrome çerezleri SQLite veritabanını görüntülüyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tüm Alan Adlarında Arayın</h3>
<p>Çerezleri ada, host'a veya kalıba göre bulmak için Tome'un SQL düzenleyicisini kullanın. <code>SELECT host_key, name, path FROM cookies WHERE name LIKE '%_ga%';</code> gibi bir sorgu, ziyaret ettiğiniz tüm sitelerdeki her Google Analytics çerezini ortaya çıkarır — DevTools'un size tek bir görünümde gösteremeyeceği bir şey.</p>

<h3>Çerez Meta Verilerini Denetleyin</h3>
<p>Hangi alan adlarının kalıcı çerezler ayarladığını, hangilerinin güvenli bayraklar kullandığını ve hangilerinin SameSite özniteliklerine sahip olduğunu görmek için çerezler tablosunu tarayın. Yıllarca kalıcı olan çerezleri bulmak için son kullanma tarihine göre sıralayın. Değerler şifrelenmiş olsa bile bu bilgilerin tamamı açıktır.</p>

<h3>Diğer Chrome Veritabanlarını İnceleyin</h3>
<p>Chrome'un profil dizini başka SQLite veritabanları da içerir: <code>History</code>, <code>Login Data</code>, <code>Web Data</code> ve <code>Favicons</code>. Her biri görsel inceleme için Tome'da açılabilir — Chrome'un yerel olarak hangi verileri sakladığını anlamak için kullanışlıdır.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "compare-sqlite-databases-mac": {
    slug: "compare-sqlite-databases-mac",
    title: "Mac'te SQLite Veritabanları Yan Yana Nasıl Karşılaştırılır",
    description: "Bir geçiş, şema değişikliği veya veri senkronizasyonundan sonra, iki SQLite veritabanının eşleştiğini doğrulamak, her ikisini aynı anda görüntülemenin bir yolu olmadan sıkıcıdır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir veri geçişi çalıştırdınız ve sonuçları doğrulamanız gerekiyor. Ya da bir geliştirme veritabanını bir staging kopyasıyla karşılaştırıyorsunuz. Ya da bir meslektaşınız size paylaşılan bir veritabanının kendi sürümünü gönderdi ve farklılıkları tespit etmeniz gerekiyor. Her durumda, görev aynıdır: iki SQLite veritabanına bakın ve neyin değiştiğini bulun. Mac'te, çoğu araç bunu şaşırtıcı derecede zorlaştırır çünkü tek bir veritabanı bağlantısı etrafında tasarlanmışlardır.</p>

<h2>Veritabanlarını Karşılaştırmak Neden Genellikle Zahmetlidir</h2>
<p><code>sqlite3</code> CLI ile, iki veritabanını karşılaştırmak iki Terminal penceresi açmak, her birinde aynı sorguyu çalıştırmak ve çıktıyı farklılıklar için görsel olarak taramak anlamına gelir. Küçük tablolar için bu işe yarar. Yüzlerce satır ve düzinelerce sütunu olan tablolar için hataya açık ve yavaştır. Yan yana görünüm yok, farklılıkların vurgulanması yok — sadece iki düz metin akışı.</p>
<p>Bazı geliştiriciler, bir veritabanını diğerine dönüştürmek için gereken SQL ifadelerini üreten bir komut satırı aracı olan <code>sqldiff</code> kullanır. Betikli karşılaştırmalar için güçlüdür ama görsel bir fark değil, ham SQL çıktısı üretir. Gerçekte neyin değiştiğini anlamak, verinin kendisini görmek yerine INSERT, UPDATE ve DELETE ifadelerini okumayı gerektirir.</p>
<p>Çoğu GUI veritabanı tarayıcısı, bir seferde yalnızca bir veritabanını destekleyerek sorunu daha da kötüleştirir. Veritabanı A'yı açarsınız, incelersiniz, kapatırsınız, veritabanı B'yi açarsınız ve veritabanı A'da ne gördüğünüzü hatırlamaya çalışırsınız. Bazı araçlar birden fazla bağlantıyı destekler ama her biri için manuel kurulum gerektirir.</p>

<h2>Tome ile Her İki Veritabanını da Yan Yana Açın</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> belge tabanlı bir macOS uygulamasıdır, yani her veritabanı kendi tam arayüzüyle kendi penceresinde açılır. İki veritabanı açın ve macOS Split View kullanarak veya pencereleri sürükleyerek yan yana düzenleyin — iki metin dosyasını karşılaştırdığınız aynı şekilde.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te iki SQLite veritabanını yan yana karşılaştırıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Görsel Şema Karşılaştırması</h3>
<p>Her iki veritabanı da açıkken, her pencerenin kenar çubuğunu kontrol edin. Kaynağın hedefte olmayan tabloları var mı? İndeksler birinde var ama diğerinde eksik mi? Her iki kenar çubuğunun görsel bir taraması bu soruları anında yanıtlar.</p>

<h3>Satır Düzeyinde Karşılaştırma</h3>
<p>Her iki pencerede de aynı tabloyu açın ve veride kaydırın. Satırları hizalamak için her ikisini de aynı sütuna göre sıralayın. Her iki ızgarayı aynı anda görebildiğinizde satır sayısı veya veri değerlerindeki farklılıklar görünür hale gelir.</p>

<h3>Her İkisini de Bağımsız Olarak Sorgulayın</h3>
<p>Her pencerenin kendi SQL sorgu düzenleyicisi vardır. Her ikisinde de aynı toplama sorgusunu çalıştırın — <code>SELECT COUNT(*) FROM users;</code> — ve sonuçları yan yana karşılaştırın. Her veritabanında bağımsız olarak toplamları, ortalamaları veya belirli kayıtların varlığını kontrol etmek için daha karmaşık sorgular yazın.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "lightweight-database-browser-mac": {
    slug: "lightweight-database-browser-mac",
    title: "Mac için Hafif Veritabanı Tarayıcısı — Electron Yok, Java Yok",
    description: "Chromium veya JVM'yi paketleyen veritabanı tarayıcıları, bir dosya yüklemeden önce bile yüzlerce megabayt tüketir. Hafif bir alternatif, macOS'un zaten sunduklarını kullanmalıdır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir veritabanı tarayıcısı kuruyorsunuz ve Activity Monitor, tek bir dosya açmadan önce 350 MB RAM kullandığını ortaya koyuyor. Uygulamanın başlaması birkaç saniye sürüyor. Bir tabloda kaydırma takılıyor. Arayüz diğer Mac uygulamalarınızla eşleşmiyor. Bu, Electron ve Java tabanlı veritabanı araçlarının maliyetidir: onlarla gerçekte ne yaptığınızdan bağımsız olarak kendi işleme motorlarını, kendi UI çerçevelerini ve kendi bellek yüklerini getirirler.</p>

<h2>Veritabanı Tarayıcıları Neden Gereksiz Yere Ağır</h2>
<p>Electron uygulamaları, arayüzlerini işlemek için tam bir Chromium tarayıcısı gönderir. Öncelikle veri tablolarını görüntüleyen bir uygulama olan bir veritabanı tarayıcısı için, bu bir masa lambasına güç vermek için dizel bir jeneratör göndermek gibidir. DBeaver ve benzer araçlar Java üzerinde çalışır, bu da bir JVM başlatma cezası, çöp toplama duraklamaları ve zamanla büyüyen bellek kullanımı anlamına gelir. Her iki yaklaşım da verimlilik yerine platformlar arası uyumluluğu önceliklendirir.</p>
<p>macOS'ta, bu yük özellikle sinir bozucudur çünkü işletim sistemi bir veritabanı tarayıcısının ihtiyaç duyduğu her şeyi zaten sunar: yerel tablo görünümleri için AppKit, işleme için Core Graphics ve karanlık mod, sekmeler ve pencere yönetimi için yerleşik destek. Bu çerçeveleri doğrudan kullanan bir veritabanı tarayıcısı, kendi platformunu getiren birinden çok daha küçük ve dramatik derecede daha hızlı olabilir.</p>

<h2>Tome: Kaynaklarınıza Saygı Gösteren Bir Veritabanı Tarayıcısı</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, Swift ve AppKit ile inşa edilmiştir — Electron yok, Java yok, web görünümü yok. Finder ve Preview ile aynı yerel çerçeveleri kullanır, bu da anında başlayan, bellekte hafif kalan ve Mac'inize ait olduğunu hissettiren bir uygulama ortaya çıkarır.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac için hafif yerel SQLite tarayıcısı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bir Saniyeden Kısa Başlatma</h3>
<p>JVM başlatma yok, Chromium başlangıcı yok. Tome, çoğu Electron uygulamasının açılış ekranını göstermesinin süresinden daha hızlı açılır. Dock simgesine tıklayın ve veritabanınız neredeyse anında taramaya hazır.</p>

<h3>Minimal Bellek Ayak İzi</h3>
<p>Yerel AppKit tablo görünümleri, web tabanlı bir ızgaranın tüketeceği belleğin bir kısmını kullanarak binlerce satırı işler. Kaynaklar için rekabet etmeden Xcode, VS Code ve tarayıcınızın yanında Tome'u açık tutun.</p>

<h3>Tam Özellik Seti, Küçük Paket</h3>
<p>Hafif olmak sınırlı olmak anlamına gelmez. Tome, SQLite işi için ihtiyacınız olan her şeyi içerir: tabloları, görünümleri, indeksleri ve tetikleyicileri tarayın; verileri satır içinde düzenleyin; satır ekleyin ve silin; tabloları görsel olarak oluşturun; ve sözdizimi vurgulama ve otomatik tamamlama ile SQL sorguları çalıştırın. Hepsi, Mac'inizin kaynaklarına saygıyla davranan bir uygulamada.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "export-sqlite-to-csv-mac": {
    slug: "export-sqlite-to-csv-mac",
    title: "Mac'te SQLite CSV'ye Nasıl Aktarılır",
    description: "Veriyi bir SQLite veritabanından çıkarıp bir elektronik tabloya aktarmak, ya sqlite3 CLI'nin biçimlendirme seçenekleriyle boğuşmak ya da bir betik yazmak anlamına gelir. Görsel bir araç bunu tek sorgulu bir göreve dönüştürür.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir SQLite veritabanından veriyi bir CSV dosyasına almanız gerekiyor — belki Excel kullanan bir meslektaşınızla paylaşmak için, bir veri görselleştirme aracına aktarmak için veya kayıtları taşınabilir bir formatta arşivlemek için. <code>sqlite3</code> CLI bunu yapabilir, ama iş akışı beceriksizdir: modu <code>.mode csv</code> ile CSV'ye ayarlayın, çıktı dosyasını <code>.output filename.csv</code> ile ayarlayın, sorgunuzu çalıştırın, sonra çıktıyı <code>.output stdout</code> ile sıfırlamayı hatırlayın. Herhangi bir adımı kaçırın ve ya hiç dosya almazsınız ya da çıktı hala yönlendirildiği için terminaliniz sessizleşir.</p>

<h2>CLI Dışa Aktarma İş Akışı Hataya Açıktır</h2>
<p><code>sqlite3</code> ile CSV'ye aktarmak, doğru sırada birden fazla nokta-komut gerektirir. Tipik bir oturum şöyle görünür:</p>
<pre><code>sqlite3 mydb.sqlite
.headers on
.mode csv
.output export.csv
SELECT * FROM products WHERE category = 'electronics';
.output stdout</code></pre>
<p><code>.headers on</code>'ı unutun ve CSV'nizde sütun başlıkları olmaz. <code>.output stdout</code>'u unutun ve bir sonraki sorgu sonucunuz ekran yerine dosyaya gider. İkinci bir tabloyu dışa aktarmak mı istiyorsunuz? Tüm diziyi farklı bir dosya adıyla tekrarlayın. Tek seferlik bir dışa aktarma için tahammül edilebilir. Birden fazla tablo boyunca düzenli dışa aktarmalar için, sıkıcı ve hataya açıktır.</p>
<p><code>csv</code> ve <code>sqlite3</code> modülleriyle bir Python betiği yazabilirdiniz, ama bu, basit bir veri çıkarma görevi olması gereken bir şey için mühendislik yüküdür.</p>

<h2>Tome'un Sorgu Düzenleyicisi ile Dışa Aktarın</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, herhangi bir SQL sorgusu çalıştırmanıza ve sonuçları yerel bir ızgarada görmenize olanak tanır. Oradan, veriyi seçip kopyalamak, doğrudan bir elektronik tabloya yapıştırabileceğiniz veya CSV olarak kaydedebileceğiniz bir format verir. Sorgunuzu otomatik tamamlamayla yazın, çalıştırın ve veriyi çıkarın — nokta-komut yok, mod değiştirme yok.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te SQLite sorgu sonuçlarını dışa aktarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Önce Sorgulayın, İhtiyacınız Olanı Dışa Aktarın</h3>
<p>Tüm bir tabloyu dışa aktarıp Excel'de filtrelemek yerine, Tome'da hedefli bir sorgu yazın: satırları filtreleyin, tabloları birleştirin, değerleri toplayın ve sütunları SQL ile biçimlendirin. Yalnızca gerçekten ihtiyacınız olan, zaten istediğiniz şekilde biçimlendirilmiş veriyi dışa aktarın.</p>

<h3>Dışa Aktarmadan Önce Görsel Doğrulama</h3>
<p>Dışa aktarmadan önce sorgu sonuçlarınızı kaydırılabilir bir ızgarada görün. Sütunların doğru olduğunu, verinin doğru göründüğünü ve satır sayısının beklentilerle eşleştiğini kontrol edin. Dışa aktarmadan önce hataları yakalamak, Excel'de kötü bir CSV açtıktan sonra işi yeniden yapmaktan sizi kurtarır.</p>

<h3>Önce Tam Şemayı Tarayın</h3>
<p>İhtiyacınız olan verinin hangi tabloda olduğundan emin değil misiniz? Tome'un kenar çubuğunda tabloları, görünümleri ve sütunlarını tarayın. Dışa aktarma sorgunuzu yazmadan önce şemayı anlamak için örnek verilere tıklayın. Bu görsel keşif, Terminal'de <code>.schema</code> komutları çalıştırmaktan çok daha hızlıdır.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "sqlite-for-data-science-mac": {
    slug: "sqlite-for-data-science-mac",
    title: "Mac'te Veri Bilimi İçin SQLite Tarayıcısı",
    description: "SQLite'ta yerel veri kümeleriyle çalışan veri bilimciler, boru hattı kodu yazmadan önce şemaları keşfetmenin, verileri önizlemenin ve sorguları test etmenin bir yoluna ihtiyaç duyar — tam bir veritabanı sunucusu başlatmadan.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir veri kümesini SQLite dosyası olarak aldınız — bir Kaggle indirmesi, kazınmış bir veri kümesi, bir meslektaşınızın dışa aktarımı veya kendi ETL çıktınız. Onu işlemek için Python kodu yazmadan önce, içinde ne olduğunu anlamanız gerekir: tablo adları, sütun türleri, satır sayıları, veri dağılımları ve olası kalite sorunları. Jupyter defterleri SQLite'ı sorgulayabilir, ama bağlantıyı kurmak, keşifsel SQL yazmak ve sonuçları defter hücrelerinde işlemek, tek istediğiniz şey veriye hızlı bir bakış olduğunda yüktür.</p>

<h2>Veri Bilimi İş Akışlarındaki Keşif Boşluğu</h2>
<p>Veri bilimciler tipik olarak SQLite dosyalarını üç yaklaşımdan biriyle keşfeder: <code>sqlite3</code> CLI (hızlı ama görsel çıktı yok), <code>pandas.read_sql()</code> ile bir Jupyter defteri (esnek ama her oturum için kurulum gerektirir) veya DBeaver gibi ağır bir veritabanı IDE'si (güçlü ama yerel bir dosya için aşırı). Bunların hiçbiri "bir dosya aç ve veriyi hemen tara" tatlı noktasını yakalamaz.</p>
<p>CLI, veri keşfi için özellikle zayıftır çünkü geniş tablolar için görsel biçimlendirme yoktur, kaydırılabilir çıktı yoktur ve veri dağılımlarını hızlıca taramanın bir yolu yoktur. Defterler analiz için değer katar ama ilk "bu veri neye benziyor?" aşaması için yavaştır. Tek bir satır görmeden önce standart bağlantı kodu yazmakla kalırsınız.</p>

<h2>Tome ile Veri Kümelerini Görsel Olarak Keşfedin</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, bir SQLite veri kümesini açmanıza ve yapısını hemen anlamanıza olanak tanır. Her tablo, satır sayısıyla birlikte kenar çubuğunda görünür. Verisini yerel bir ızgarada kaydırmak için bir tabloya tıklayın. Kurulum yok, bağlantı dizeleri yok, standart kod yok — sadece dosyayı açın ve bakın.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac'te bir veri bilimi SQLite veri kümesini tarıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kod Yazmadan Önce Şemayı Anlayın</h3>
<p>Sütun adlarını, türlerini ve örnek değerleri görmek için tabloları tarayın. Hangi sütunların null içerdiğini, hangi tabloların yabancı anahtarlar aracılığıyla birbiriyle ilişkili olduğunu ve veri kümesinin nasıl yapılandırıldığını belirleyin — hepsi tek bir satır Python yazmadan önce. Bu bağlam, analiz kodunuzu baştan daha hedefli hale getirir.</p>

<h3>Sorguları Etkileşimli Olarak Test Edin</h3>
<p>Sorguları prototiplemek için Tome'un otomatik tamamlamalı SQL düzenleyicisini kullanın. WHERE cümlelerinizi, JOIN koşullarınızı ve toplamalarınızı önce Tome'da test edin, sonra çalışan SQL'i Python boru hattınıza kopyalayın. Sorgu hatalarını görsel bir düzenleyicide yakalamak, onları bir defter hücresinde hata ayıklamaktan daha hızlıdır.</p>

<h3>ETL Çıktısını İnceleyin</h3>
<p>Boru hattınız sonuçları bir SQLite veritabanına yazdıktan sonra, çıktıyı doğrulamak için Tome'da açın. Satır sayılarını kontrol edin, null değerleri tespit edin ve dönüşümlerin beklenen sonuçları ürettiğini onaylayın — hepsi ek doğrulama kodu yazmadan.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
  "postico-alternative-sqlite-mac": {
    slug: "postico-alternative-sqlite-mac",
    title: "Mac'te SQLite İçin Postico Alternatifi",
    description: "Postico, Mac'te sevilen yerel bir veritabanı istemcisidir — ancak yalnızca PostgreSQL'i destekler. SQLite dosyalarıyla çalışıyorsanız, farklı bir format için aynı yerel kaliteye ihtiyacınız var.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Mac'te PostgreSQL için Postico kullandıysanız, yerel bir veritabanı istemcisinin nasıl hissettirmesi gerektiğini bilirsiniz: anında başlatma, temiz arayüz, uygun macOS entegrasyonu ve dağınıklık olmadan üretken olmak için tam olarak yeterli özellik. Platformdaki en iyi veritabanı araçlarından biri olarak geniş çapta kabul görür. Tek sorun, Postico'nun SQLite'ı desteklememesidir. Verileriniz bir PostgreSQL sunucusu yerine .sqlite dosyalarında yaşıyorsa, başka bir şey bulmanız gerekir — ve o "başka bir şey" genellikle Postico'ya hiç benzemeyen bir Electron veya Java uygulamasıdır.</p>

<h2>Postico ile SQLite Araçları Arasındaki Boşluk</h2>
<p>Postico, bir veritabanı istemcisinin harika bir Mac uygulaması olabileceğini kanıtladı. Yerel macOS kontrollerini kullanır, sistem kurallarına saygı gösterir, hızlı başlar ve yolunuzdan çekilir. Çoğu SQLite tarayıcısının karşılayamadığı bir standart belirledi.</p>
<p>DB Browser for SQLite Qt tabanlıdır — işlevsel ama görsel olarak macOS'tan kopuktur. TablePlus SQLite'ı destekler ama aynı zamanda düzinelerce başka veritabanını da destekler, Postico'nun kasıtlı olarak kaçındığı karmaşıklığı getirir. DBeaver, ima ettiği tüm kaynak yüküyle Java üzerinde çalışır. Bu araçların hiçbiri, Postico kullanıcılarının beklediği "Mac için inşa edilmiş" deneyimini sunmaz.</p>
<p>Sorun bunların kötü araçlar olması değil — değiller. Sorun, gerçekten yerel bir Mac veritabanı istemcisi deneyimledikten sonra, platformlar arası alternatiflerin bir taviz gibi hissettirmesidir. Aynı felsefenin farklı bir formata uygulanmasını istiyorsunuz.</p>

<h2>Tome: SQLite İçin Postico Deneyimi</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>, Postico'nun PostgreSQL'e getirdiği aynı yerel Mac kalitesini SQLite'a getirir. Swift ve AppKit ile inşa edilmiştir, anında başlar, macOS tasarım kurallarına uyar ve bir şeyi iyi yapmaya odaklanır — SQLite veritabanlarını taramak ve düzenlemek.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, Mac için Postico kalitesinde bir SQLite tarayıcısı olarak" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Aynı Felsefe, Farklı Format</h3>
<p>Postico gibi, Tome de lazer odaklıdır. PostgreSQL yok, MySQL yok, MongoDB yok — sadece SQLite. Her özellik, çalıştığınız format için tasarlanmıştır. Arayüz temizdir, uygulama hızlıdır ve dikkatinizi çekmek için rekabet eden gereksiz hiçbir şey yoktur.</p>

<h3>Yerel macOS Deneyimi</h3>
<p>Uygun pencere ve sekme desteğiyle belge tabanlı mimari. Sistem karanlık modu. Finder'dan sürükle-bırak. macOS kurallarına uyan klavye kısayolları. Tome, bir Mac uygulaması gibi davranır çünkü öyledir — Apple'ın kendi uygulamaları için kullandığı aynı çerçevelerle inşa edilmiştir.</p>

<h3>Tarayın, Düzenleyin ve Sorgulayın</h3>
<p>Kenar çubuğunda tabloları, görünümleri, indeksleri ve tetikleyicileri tarayın. Hücreleri satır içinde düzenleyin. SQL yazmadan satır ekleyin ve silin. Sorgulara ihtiyaç duyduğunuzda, yerleşik düzenleyici şemanız için sözdizimi vurgulama ve otomatik tamamlama sunar. Bir SQLite tarayıcısının ihtiyaç duyduğu her şey — ve ihtiyaç duymadığı hiçbir şey değil.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome'u Mac App Store'dan edinin</a></p>
`,
  },
};
