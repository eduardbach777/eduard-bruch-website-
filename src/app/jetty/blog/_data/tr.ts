import type { ArticleSet } from "./index";

export const trArticles: ArticleSet = {
  "too-many-apps-mac-dock": {
    slug: "too-many-apps-mac-dock",
    title: "Mac Dock'unuzda Çok mu Fazla Uygulama Var? İşte Düzenleme Yöntemi",
    description: "Mac Dock'unuz, artık zor tanıdığınız uçsuz bucaksız bir simge sırasına dönüştü. İhtiyacınız olan uygulamayı bulmak gerekenden uzun sürüyor, bir şeyleri kaldırmak ise riskli geliyor.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Masum bir şekilde başlar. Yeni bir uygulama kurarsınız ve Dock'ta kalır. Sonra bir tane daha. Birkaç ay sonra ekranınızın altındaki şeride sıkıştırılmış 30'dan fazla minik simgeye bakıp Slack'i Discord'dan, onu da Mesajlar'dan ayırt etmeye çalışırken gözlerinizi kısıyorsunuzdur. Dock, uygulamaları hızlıca açmanızı sağlamak için tasarlanmıştı. Bunun yerine bir ıvır zıvır çekmecesine dönüştü.</p>

<p>Temizlemeniz gerektiğini biliyorsunuz ama her denediğinizde daha sonra ihtiyaç duyacağınız bir şeyi kaldırmaktan endişe ediyorsunuz. Sonuç olarak hiçbir şey değişmiyor.</p>

<h2>Mac Dock neden dağınıklaşır</h2>

<p>Dock, düz bir listedir. Günde on kez de kullansanız, ayda bir kez de kullansanız her uygulama aynı seviyede yer alır. Kategori yoktur, gruplama yoktur, bağlam yoktur. Bir tasarım aracının yanında bir hesap makinesi, onun yanında da bir kez oynadığınız bir oyun durur. macOS, Dock simgelerini anlamlı gruplar halinde düzenlemek için yerleşik bir yol sunmaz.</p>

<p>Terminal komutlarıyla boşluk ekleyebilirsiniz ama bunlar kırılgandır ve yönetmesi sıkıcıdır. Uygulamaları kaldırıp Spotlight'a güvenebilirsiniz ama bu sefer de Dock'u zaten kullanışlı kılan görsel hızlı erişimi kaybedersiniz. İki seçenek de sorunu gerçekten çözmüyor.</p>

<h2>Daha temiz bir yaklaşım: gruplanmış paneller</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a> uygulama kısayollarınızı Dock'tan alıp menü çubuğunda yaşayan düzenli panellere taşır. "Tasarım," "İletişim," "Geliştirme Araçları" gibi isimlendirilmiş paneller oluşturur ve birbiriyle ilişkili uygulamaları bu panellere sürüklersiniz. Dock'unuz sadece temel uygulamalara küçülür (ya da tamamen kaybolur), her uygulama ise yine bir tık uzağınızda kalır.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty menu bar panels replacing a cluttered Mac Dock" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Erişimi kaybetmeden azaltın</h3>
<p>Uygulamaları kaygı duymadan Dock'tan kaldırın. Her şey bir Jetty panelinde, kategorize edilmiş ve kolayca bulunabilir şekilde yer alır. Dock'unuz 30 simgeden 5'e düşer, ama yine de herhangi bir uygulamayı iki tıkla açabilirsiniz.</p>

<h3>Alfabeye göre değil, amaca göre gruplayın</h3>
<p>Figma, Sketch ve Önizleme'yi bir "Tasarım" paneline koyun. Slack, Zoom ve Mail'i "İletişim" paneline koyun. Gruplama, macOS'un sıralama biçimine değil, sizin düşünme biçiminize uyar.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "launch-apps-faster-mac": {
    slug: "launch-apps-faster-mac",
    title: "Spotlight Kullanmadan Mac'te Uygulamaları Daha Hızlı Açmanın Yolu",
    description: "Spotlight araması güçlüdür ama rutin uygulama açma işlemleri için yavaştır. Her gün kullandığınız bir şeyi açmak için her seferinde bir isim yazmak, gereksiz bir sürtünme gibi hissettirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Spotlight, nadir bulunan dosyaları aramak veya hızlı hesaplamalar yapmak için harikadır. Ama her gün kullandığınız aynı 15 uygulamayı açmak için Cmd+Space'e basıp bir isim yazmak, sonuçları beklemek ve Enter'a basmak olması gerekenden daha yavaştır. Spotlight bir başlatıcı değil, bir arama aracıdır — ve rutin işler için arama, sürtünme ekler.</p>

<p>Sadece açmak için bu hafta "Figma" yazısını yüzüncü kez yazmak zorunda kalmamalısınız.</p>

<h2>Spotlight günlük kullanım için neden ideal değil</h2>

<p>Spotlight tüm sisteminizi dizinler. "No" yazdığınızda, istediğiniz uygulamayı göstermeden önce size Notlar, Notion, Nova, "Kasım raporu" adlı bir dosya veya Noah adında bir kişi önerebilir. Sıralama, yakın zamanda kullanım ve alaka düzeyine göre değiştiğinden aynı sorgu her zaman aynı sonucu vermez. Refleks halinde açtığınız uygulamalar için bu öngörülemezlik sizi yavaşlatır.</p>

<p>Dock bunu birkaç uygulama için çözer ama başka bir yazıda da değindiğimiz gibi ölçeklenmez. Launchpad ise her şeyi gruplama olmadan alfabetik sırayla gösterir. İkisi de çalışma setinizdeki uygulamalara hızlı, düzenli ve görsel bir erişim sağlamaz.</p>

<h2>Menü çubuğundan görsel başlatma</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a> en çok kullandığınız uygulamaları menü çubuğundan erişilebilen düzenli panellere yerleştirir. Yazma yok, arama yok, alfabetik ızgaralarda kaydırma yok. Menü çubuğu simgesine tıklayın, panellerinizi görün, uygulamaya tıklayın. İki tık, sıfır tuş vuruşu.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty launching apps from organized menu bar panels" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Aramanın yerine kas hafızası</h3>
<p>Panelleriniz her zaman aynı sırada kaldığından ve uygulamalarınız her panelde aynı konumda durduğundan, mekânsal bir hafıza geliştirirsiniz. Bir iki gün sonra herhangi bir uygulamayı açmak otomatik hale gelir — etiketleri okumadan tam olarak nerede olduğunu bilirsiniz.</p>

<h3>Görsel düşünenler için klavye başlatıcılarından daha hızlı</h3>
<p>Herkes metinle düşünmez. Bir uygulamayı isminden çok simgesinden hatırlayan biriyseniz, görsel bir ızgara her zaman metin aramasını geride bırakır. Jetty, size istediğiniz şekilde düzenlenmiş bu ızgarayı sunar.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "organize-mac-apps-by-project": {
    slug: "organize-mac-apps-by-project",
    title: "Mac Uygulamalarını Proje veya İş Akışına Göre Düzenlemenin Yolu",
    description: "Farklı projeler farklı uygulama gruplarına ihtiyaç duyar ama macOS her şeyi tek bir büyük liste olarak ele alır. Bağlam değiştirmek, her seferinde doğru araçları aramak anlamına gelir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir video projesi üzerinde çalışırken Final Cut, Motion, Compressor ve belki bir renk düzenleme aracına ihtiyaç duyarsınız. Yazıya geçtiğinizde bu Ulysses, araştırma için Safari ve bir notlar uygulamasıdır. Koda geçtiğinizde ise VS Code, Terminal, bir veritabanı tarayıcısı ve bir Git istemcisidir. Her iş akışının kendine ait bir araç seti vardır — ama macOS'ta bu kavram yoktur.</p>

<p>Her proje değiştirdiğinizde, düz ve farksızlaştırılmamış bir listeden doğru uygulama grubunu zihinsel olarak yeniden bir araya getiriyorsunuz.</p>

<h2>macOS iş akışlarını anlamaz</h2>

<p>Dock, Launchpad ve Spotlight uygulamalarınızı tek bir koleksiyon olarak ele alır. "Bu beş uygulama video işim için," ya da "bu üçü müşteri iletişimi için" demenin bir yolu yoktur. Launchpad'de klasörler oluşturabilirsiniz ama bunlar ekstra bir tıklamanın arkasında gizlidir ve yeniden düzenlediğinizde sıfırlanan bir ızgarayla sınırlıdır.</p>

<p>Bazı kişiler proje başına birden fazla masaüstü (Spaces) kullanır ama Spaces pencereleri düzenler, başlatıcıları değil. Bir uygulama zaten açık değilse Spaces onu daha hızlı bulup açmanıza yardımcı olmaz.</p>

<h2>Proje bazlı paneller</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, iş akışlarınızla doğrudan eşleşen isimlendirilmiş paneller oluşturmanıza olanak tanır. Her panel, belirli bir proje veya görev türüyle ilişkili uygulamaları, klasörleri ve dosyaları barındırır. Paneli bir kez oluşturursunuz ve bağlam değiştirdiğinizde her zaman hazır olur.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panels organized by project workflow on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Örnek: serbest çalışan bir tasarımcı</h3>
<p>Figma, Slack, Invoice Ninja ve müşterinizin paylaşılan klasörünü içeren bir "Müşteri İşleri" paneli oluşturun. Yan proje araçlarınız için bir "Kişisel" panel. Takvim, Mail ve muhasebe yazılımı için bir "Yönetim" paneli. Her panel menü çubuğundan bir tık uzaktadır.</p>

<h3>Örnek: bir geliştirici</h3>
<p>VS Code, Terminal, Postico ve Docker içeren bir "Backend" paneli. Bir tarayıcı, DevTools yer imleri ve referans için Figma içeren bir "Frontend" paneli. Backend ve frontend işleri arasında geçiş yapmak artık bir uygulama avı değil, bir panel değişimidir.</p>

<h3>Sadece uygulamalar değil, dosyalar ve klasörler de</h3>
<p>Jetty panelleri klasörleri ve dosyaları da barındırabilir. Proje dizininizi, onunla birlikte kullandığınız uygulamaların yanına doğrudan panele bırakın. Bir iş akışına ait her şey, tek bir yerde.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-dock-alternatives": {
    slug: "mac-dock-alternatives",
    title: "Uygulama Başlatmak İçin En İyi Mac Dock Alternatifleri",
    description: "Yerleşik Dock, yıllardır pek değişmedi. Çalışma şeklinize uymuyorsa, uygulamalarınızı düzenlemenin ve başlatmanın daha iyi yolları var.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>macOS Dock, OS X'ten bu yana aşağı yukarı aynı görünüp aynı şekilde çalışıyor. Sınırlı düzenleme seçenekleri olan, tek satırlık yatay (veya dikey) bir simge şeridi. Bazı insanlar için bu yeterli. Ama düzinelerce uygulama kullanıyorsanız, birden fazla proje üzerinde çalışıyorsanız ya da uygulamaları nasıl başlattığınız üzerinde daha fazla kontrol istiyorsanız, Dock bir özellik olmaktan çıkıp bir kısıtlama gibi hissettirmeye başlar.</p>

<h2>Dock'un sorunu ne</h2>

<p>Temel sorunlar yapısaldır:</p>

<ul>
  <li><strong>Düz liste</strong> — gruplama yok, kategori yok, hiyerarşi yok</li>
  <li><strong>Sabit konum</strong> — ya her zaman görünür (ekran alanı kaplar) ya da otomatik gizlenir (gecikme ekler)</li>
  <li><strong>Kötü ölçeklenir</strong> — daha fazla uygulama, daha küçük simgeler ya da daha geniş bir Dock demektir</li>
  <li><strong>Bağlam yok</strong> — kod yazarken de, tasarım yaparken de, yazı yazarken de aynı Dock</li>
</ul>

<p>Bunlar hata değil — tasarım tercihleridir. Dock'un basit olması amaçlanmıştır. Ama basit olmakla kısıtlı olmak farklı şeylerdir.</p>

<h2>Yaygın alternatifler</h2>

<p><strong>Spotlight / Raycast / Alfred</strong> — klavye odaklı başlatıcılar. Metinle düşünüyorsanız ve uygulama isimlerini hatırlıyorsanız mükemmeller. Görsel düşünenler için ya da seçeneklerinizi tek bakışta görmek istediğinizde daha az kullanışlılar.</p>

<p><strong>Launchpad</strong> — yüklü tüm uygulamaların tam ekran bir ızgarası. Keşif için iyi, günlük kullanım için zayıf. Çok fazla simge, anlamlı bir düzenleme yok ve tüm ekranınızı kaplıyor.</p>

<p><strong>Dock'taki Stacks (Yığınlar)</strong> — Dock'un sağ tarafına, ızgaralara veya listelere genişleyen klasörler ekleyebilirsiniz. Ama bunlar yalnızca klasörlerle sınırlıdır, keyfi uygulama gruplamalarıyla değil, ve yelpaze/ızgara görünümü de hantaldır.</p>

<h2>Jetty ile panel tabanlı başlatma</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a> farklı bir yaklaşım benimser. Tek bir liste veya tek bir arama çubuğu yerine, menü çubuğunda birden fazla isimlendirilmiş panel sunar. Her panel, sürükle-bırak ile düzenlediğiniz özenle seçilmiş bir uygulama, klasör ve dosya setini barındırır.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty as a Mac Dock alternative with grouped panels" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Görsel ama düzenli</h3>
<p>Spotlight'ın aksine simgeleri görürsünüz — yazmaya gerek yoktur. Dock'un aksine anlama göre gruplandırılırlar. Launchpad'in aksine yalnızca dahil etmeyi seçtiğiniz şeyleri görürsünüz.</p>

<h3>Değiştirmek yerine tamamlar</h3>
<p>Dock'tan tamamen vazgeçmek zorunda değilsiniz. Pek çok kişi minimal bir Dock tutar (Finder, bir tarayıcı, belki birkaç günlük temel uygulama) ve geri kalan her şeyi Jetty panellerine koyar. İkisi birlikte gayet iyi çalışır.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "hide-mac-dock-still-launch-apps": {
    slug: "hide-mac-dock-still-launch-apps",
    title: "Mac Dock'unu Gizleyip Yine de Uygulamaları Hızlıca Açmanın Yolu",
    description: "Dock'u gizlemek ekran alanı kazandırır ama uygulama kısayollarınızı da gizler. Onlara geri dönmek, ekranın altında beklemek ve animasyonun bitmesini beklemek anlamına gelir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>13 inç bir MacBook ekranında çalıştıysanız, Dock'un ne kadar dikey alan kapladığını bilirsiniz. Onu gizlemek (Sistem Ayarları > Masaüstü ve Dock > Dock'u otomatik gizle ve göster) o pikselleri size geri verir. Ama artık bir uygulama açmak istediğinizde ekranın kenarında bekliyor, yukarı kayma animasyonunun bitmesini bekliyor, simgeyi buluyor ve tıklıyorsunuz. Gecikme küçük ama süreklidir ve zamanla birikir.</p>

<p>Gizli bir Dock'un ekran alanını, görünür bir Dock'un hızlı erişimiyle birleştirmek istersiniz.</p>

<h2>Otomatik gizlemenin bedeli</h2>

<p>macOS'un Dock otomatik gizleme özelliğinde, görünmeden önce kasıtlı bir gecikme vardır — varsayılan olarak yaklaşık 0,5 saniye. Bunu bir Terminal komutuyla azaltabilirsiniz ama tamamen ortadan kaldıramazsınız. En hızlı halinde bile animasyonun kendisi zaman alır. Günde onlarca kez uygulama açtığınızı ya da değiştirdiğinizi düşünürseniz, bu sürtünme gerçektir.</p>

<p>Bazı kişiler bu bedeli kabul eder. Diğerleri Dock'u görünür tutup ekran alanını kaybeder. İki seçenek de pek iyi değil.</p>

<h2>Başlatmayı menü çubuğuna taşıyın</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, uygulama kısayollarınızı her zaman görünür olan menü çubuğuna yerleştirir. Bekleme gecikmesi yok, animasyon beklemesi yok. Jetty simgesine tıklayın, panellerinizi görün, ihtiyacınız olana tıklayın. Dock'a artık ihtiyacınız olmadığı için kalıcı olarak gizli kalabilir.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty menu bar launcher with Mac Dock hidden" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tam ekran alanı, sıfır gecikme</h3>
<p>Dock gizliyken ve Jetty menü çubuğundayken, önemsediğiniz her uygulamaya maksimum dikey ekran alanı ve anında erişim elde edersiniz. Menü çubuğu her zaman oradadır — size hiçbir ek maliyeti yoktur.</p>

<h3>Özellikle dizüstü bilgisayarlarda iyi çalışır</h3>
<p>Bir MacBook Air veya 14 inç MacBook Pro'da her piksel önemlidir. Dock'u gizleyip Jetty kullanmak, açma hızından ödün vermeden daha temiz bir çalışma alanı sağlar. Harici ekran kullanıcıları da fayda görür — imlecinizi alt kenara götürdüğünüzde ekranlar arasında Dock'un yanıp sönmesi olmaz.</p>

<h3>Kademeli geçiş</h3>
<p>Bir anda vazgeçmenize gerek yok. En çok kullandığınız uygulamalarla Jetty panellerinizi kurun, Dock'u gizleyin ve bir gün deneyin. Dock'u özlerseniz, bir düğme uzağınızdadır. Çoğu insan geri dönmüyor.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "switch-between-app-groups-mac": {
    slug: "switch-between-app-groups-mac",
    title: "Mac'te Uygulama Grupları Arasında Geçiş Yapmanın Yolu",
    description: "Farklı görevler için farklı uygulama setleri kullanırsınız ama macOS hepsini aynı anda idare etmenizi ister. Bağlam değiştirmek, zihinsel olarak her şeyi elemekten geçer.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir tasarım oturumunun tam ortasındasınız — Figma, referanslarla dolu bir tarayıcı, belki bir renk aracı. Sonra bir mesaj gelir ve e-postaya, Slack'e ve bir proje yönetim aracına geçmeniz gerekir. Yirmi dakika sonra tasarıma geri döndüğünüzde ekranınız pencere karmaşasına dönmüştür ve hangi Figma dosyasının aktif olduğunu hatırlayamazsınız. Tanıdık geliyor mu?</p>

<p>Sorun uygulamalar değil. Sorun, macOS'un belirli uygulamaların birbiriyle ilişkili olduğunu anlamamasıdır.</p>

<h2>macOS ne sunuyor (ve neden yetersiz kalıyor)</h2>

<p><strong>Cmd+Tab</strong>, açık olan her uygulamayı, en son kullanıma göre sıralanmış tek bir satırda gösterir. Tasarım araçlarınızla iletişim araçlarınızı ayırt etmez. Hepsi birbirine karışmış durumdadır.</p>

<p><strong>Mission Control / Spaces</strong>, pencereleri sanal masaüstlerine yaymanıza olanak tanır. Bu, pencere yönetiminde yardımcı olur ama başlatma konusunda yardımcı olmaz. Tasarım uygulamalarınızı henüz açmadıysanız Spaces onları bulmanıza yardımcı olamaz.</p>

<p><strong>Stage Manager</strong> pencereleri gruplar ama gruplar otomatiktir ve çoğu zaman yanlıştır. Neyin birlikte olduğuna sizin niyetinize göre değil, yakın zamanda kullanıma göre karar verir.</p>

<h2>Sizin tanımladığınız isimlendirilmiş gruplar</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, uygulama grupları gibi davranan isimlendirilmiş paneller sunar. Neyin birlikte olduğunu siz tanımlarsınız ve bu gruplar kalıcı olur. Aralarında geçiş yapmak, Cmd+Tab'da bir arama ya da Spaces arasında bir kaydırma değil, menü çubuğunda bir tıklamadır.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panels for switching between app groups on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bağlam değiştirme açık hale gelir</h3>
<p>"Tasarım"dan "İletişim"e geçtiğinizde, tam olarak o bağlama ait uygulamaları görürsünüz. Slack'i bulmak için 15 Cmd+Tab simgesini taramaya gerek yok. Hangi masaüstünde ne olduğunu hatırlamaya çalışarak Spaces arasında kaydırma yapmaya gerek yok.</p>

<h3>Tüm iş akışlarını başlatın</h3>
<p>Paneller yalnızca zaten açık olan uygulamalar için değildir. Bir paneldeki herhangi bir uygulamaya tıklayın, çalışmıyorsa açılır. Bir panel, tüm bir iş akışı için tek tıklamalı bir başlatma noktasına dönüşür — "Dev" panelinizi açın ve VS Code'u, Terminal'i ve bir tarayıcıyı hızlı ardışık şekilde başlatın.</p>

<h3>Yeniden başlatmalarda değişmez</h3>
<p>Panelleriniz ve içerikleri kalıcıdır. Mac'inizi yeniden başlatın, gruplarınız tam olarak bıraktığınız yerde durur. Yeniden yapılandırma yok, simgeleri tekrar sürükleme yok.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-dock-too-small-too-big": {
    slug: "mac-dock-too-small-too-big",
    title: "Mac Dock Çok mu Küçük ya da Çok mu Büyük? Daha İyi Bir Yaklaşım",
    description: "Dock'u büyütmek, ekranınızı yemesi anlamına gelir. Küçültmek ise simgeleri birbirinden ayırt edememeniz anlamına gelir. Çok sayıda uygulamanız olduğunda hiçbir uç iyi çalışmaz.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Dock'unuzda 25 uygulama var. Varsayılan boyutta, ekranınızın büyük bölümüne yayılıyor. Boyut kaydırıcısını aşağı çekiyorsunuz — şimdi simgeler o kadar küçük ki gözlerinizi kısmadan veya araç ipuçları için üzerine gelmeden ayırt edemiyorsunuz. Tekrar yukarı çekiyorsunuz — şimdi Dock ekran genişliğinizin üçte birini kaplıyor ve büyütme etkinken simgeler etrafta zıplıyor.</p>

<p>Dock'un boyut sorunu kaydırıcıyla ilgili değil. Mimariyle ilgili: her şeyi aynı anda göstermek zorunda olan tek bir simge satırı.</p>

<h2>Ölçeklenme sorunu</h2>

<p>Dock, birkaç uygulama için tasarlandı. Mac kullanıcılarının 8-10 uygulaması sabitlenmişken boyutlandırma iyi çalışıyordu. Ama modern iş akışları düzinelerce araç içeriyor. Tek satırlık tasarım, simge okunabilirliği ile ekran alanı arasında, eklediğiniz her uygulamayla kötüleşen bir ödünleşime zorlar.</p>

<p>macOS büyütme özelliği sunar (üzerine geldiğinizde simgeler büyür) ama bu, Dock'un sürekli kaymasına ve yeniden boyutlanmasına neden olarak doğru simgeye tıklamayı zorlaştırır. "Çok küçük" sorununu, "çok oynak" bir sorun yaratarak çözer.</p>

<h2>Ölçeklendirmeyi bırakın, düzenlemeye başlayın</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, boyutlandırma sorununu tamamen ortadan kaldırır. Her şeyi tek bir satıra sıkıştırıp boyut kaydırıcısıyla uğraşmak yerine, uygulamalarınızı menü çubuğundaki birden fazla panele dağıtırsınız. Her panel, yönetilebilir sayıda simgeyi rahat bir boyutta gösterir.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panels as an alternative to resizing the Mac Dock" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Rahat simge boyutları</h3>
<p>Tek satırda 25 yerine panel başına 6-8 uygulamayla, her simge anında tanınacak kadar büyük olur. Büyütmeye gerek yok, göz kısmaya gerek yok, tahmin etmeye gerek yok.</p>

<h3>Minimal Dock, maksimum erişim</h3>
<p>Dock'unuzu sürekli kullandığınız yalnızca 3-4 uygulamayla küçük tutun (Finder, bir tarayıcı, belki ana çalışma uygulamanız). Geri kalan her şey Jetty panellerine gider. Dock küçük ve temiz kalır. Siz de her şeye tam erişiminizi korursunuz.</p>

<h3>Boşa harcanan ekran alanı yok</h3>
<p>Jetty panelleri yalnızca menü çubuğu simgesine tıkladığınızda görünür. Geri kalan zamanlarda sıfır ekran alanı kaplarlar. Bunu, çalışma alanınızı kalıcı olarak yiyen büyük bir Dock'la ya da her ihtiyaç duyduğunuzda gecikme ekleyen otomatik gizlenen bir Dock'la karşılaştırın.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "launch-folders-files-from-menu-bar-mac": {
    slug: "launch-folders-files-from-menu-bar-mac",
    title: "Mac'te Menü Çubuğundan Klasör ve Dosya Açmanın Yolu",
    description: "Her gün aynı proje klasörünü veya belgeyi açmak, her seferinde Finder'da gezinmek anlamına gelir. Belirli dosyaları hızlı erişim noktasına sabitlemenin yerleşik bir yolu yoktur.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Her sabah Finder'ı açar, proje klasörünüze gider, ardından belirli bir elektronik tabloyu açar, sonra referans dosyaları için başka bir klasöre gidersiniz. Ya da her gün ihtiyaç duyduğunuz o bir PDF için Belgeler dizininizi eşelersiniz. Finder, gezinmek için gayet iyidir ama tekrar tekrar eriştiğiniz öğeler için gezinme yolu boşa harcanan zamandır.</p>

<p>macOS, klasörleri Dock'un sağ tarafına koymanıza izin verir ve dosyaları Finder'ın kenar çubuğuna ekleyebilirsiniz. Ama ikisi de uygulamaların, klasörlerin ve dosyaların bir karışımı için temiz, düzenli bir hızlı erişim çözümü değildir.</p>

<h2>Dock klasörlerinin ve Finder kenar çubuğunun sınırlamaları</h2>

<p><strong>Dock klasörleri</strong>, klasörün içindeki her öğeyi gösteren bir yelpaze veya ızgara görünümüne açılır — yalnızca önemsediklerinizi değil. Aynı Dock klasöründe uygulamaları ve dosyaları karıştıramazsınız. Ve klasörler çok sayıda öğe içerdiğinde ızgara görünümü öngörülemez hale gelir.</p>

<p><strong>Finder kenar çubuğu</strong> yalnızca Finder etkinken çalışır. Başka bir uygulamadaysanız ve belirli bir klasörü açmanız gerekiyorsa önce Finder'a geçmeniz (veya yeni bir Finder penceresi açmanız), ardından kenar çubuğu öğesine tıklamanız gerekir. Her seferinde ekstra bir adım.</p>

<p><strong>Masaüstü takma adları</strong> işe yarar ama masaüstünüzü dağıtır. Temiz bir masaüstü tutuyorsanız (veya Stage Manager kullanıyorsanız), zaten pencerelerinizin arkasında gizlidirler.</p>

<h2>Uygulamaları, klasörleri ve dosyaları tek bir yerde birleştirin</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, uygulamaları, klasörleri ve tekil dosyaları aynı panele sürüklemenize olanak tanır. Tek bir "Sabah Rutini" paneli, e-posta uygulamanızı, proje klasörünüzü, günlük rapor elektronik tablosunu ve bir referans PDF'ini içerebilir. Gününüze başlamak için ihtiyacınız olan her şey, menü çubuğundan tek tıkla erişilebilir.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panel with apps, folders, and files in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Araçlarının yanında proje klasörleri</h3>
<p>"Müşteri X" klasörünüzü bir müşteri panelinde tam olarak Figma ve Slack'in yanına koyun. O müşterinin projesi üzerinde çalışırken her şey bir arada olur — araçlar ve dosyalar.</p>

<h3>Derinlerdeki dosyalara hızlı erişim</h3>
<p>Belgeler klasörünüzde beş seviye derinde gömülü olan o elektronik tablo mu? Bir kez bir Jetty paneline sürükleyin. O andan itibaren Finder'da gezinmeye gerek kalmadan bir menü çubuğu tıklaması uzağınızdadır.</p>

<h3>Her zaman erişilebilir</h3>
<p>Finder kenar çubuğu öğelerinin aksine Jetty panelleri herhangi bir uygulamadan çalışır. Bir dosyaya erişmek için bağlam değiştirmenize gerek yoktur — sadece menü çubuğu simgesine tıklayın.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-launchpad-too-slow": {
    slug: "mac-launchpad-too-slow",
    title: "Mac Launchpad Çok mu Yavaş? Uygulama Açmanın Daha Hızlı Yolları",
    description: "Launchpad, yüklü tüm uygulamaları hiçbir anlamlı düzen olmadan tam ekran bir ızgarada gösterir. İhtiyacınız olanı bulmak, hiç kullanmadığınız simge sayfalarında kaydırma yapmak anlamına gelir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Launchpad, Apple'ın tanıtımlarında güzel görünür. Pratikte ise Mac'inizde yüklü tüm uygulamaların tam ekran bir duvarıdır — varsayılan olarak alfabetik sıralanmış, birden fazla sayfaya yayılmış, hiç açmadığınız uygulamalar saatte bir kullandığınız uygulamaların yanında duruyor. Bir şey bulmak, ya sayfalarda kaydırma yapmak ya da üstteki arama çubuğunu kullanmak anlamına gelir (bu noktada zaten Spotlight kullanabilirsiniz).</p>

<p>Başka bir yerde bulamadığınız ara sıra kullandığınız bir uygulama için Launchpad işe yarar. Günlük bir başlatıcı olarak ise çok yavaş ve çok dağınıktır.</p>

<h2>Launchpad neden yavaş hissettiriyor</h2>

<p>Üç şey birikiyor:</p>

<ul>
  <li><strong>Tam ekran devralma</strong> — Launchpad'i etkinleştirmek tüm çalışma alanınızı kaplar. Ne yaptığınıza dair görsel bağlamı kaybedersiniz. Bir uygulama açtıktan sonra bir an için yönünüzü kaybedersiniz.</li>
  <li><strong>Anlamlı bir düzenleme yok</strong> — alfabetik sıra çalışma şeklinizi yansıtmaz. Klasörler oluşturabilirsiniz ama sınırlıdırlar: küçük simge ızgaraları, klasörü açana kadar görünmeyen isimler ve yeniden düzenlediğinizde sıfırlanmaları.</li>
  <li><strong>Çok fazla simge</strong> — Launchpad, sistem araçlarını, yardımcı uygulamaları ve kurduğunuzu unuttuğunuz araçları gösterir. Sinyal-gürültü oranı berbattır.</li>
</ul>

<p>Sonuç olarak çoğu ileri düzey kullanıcı Launchpad'i tamamen kullanmayı bırakıp Spotlight'a veya Dock'a geri döner — her ikisinin de kendi sınırlamaları vardır.</p>

<h2>Özenle seçilmiş bir başlatıcı</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, yalnızca dahil etmeyi seçtiğiniz uygulamaları, istediğiniz şekilde düzenlenmiş olarak gösterir. Mevcut çalışma alanınızın üzerinde kompakt bir panelde açılır — tam ekran devralma yok, bağlam kaybı yok. Yalnızca ihtiyacınız olanı görürsünüz, başka hiçbir şeyi değil.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty compact panel versus full-screen Launchpad" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Gürültünün üzerinde sinyal</h3>
<p>Aktif olarak 20 uygulama kullanıyorsanız 20 uygulama görmelisiniz — 80 değil. Jetty panelleri, tam olarak içine koyduğunuz şeyleri içerir. Görünümü dağıtan sistem araçları yok, bir kez kurup unuttuğunuz uygulamalar yok.</p>

<h3>Bağlam kaybı yok</h3>
<p>Jetty, menü çubuğundan açılan bir açılır menü olarak açılır. Mevcut çalışma alanınız arkasında görünür kalır. Bir uygulama açın ve tam olarak kaldığınız yere geri dönün — tam ekran geçişi yok, yeniden yönelme yok.</p>

<h3>İlk günden itibaren düzenli</h3>
<p>Uygulamalarınızı isimlendirilmiş panellere sürükleyin, orada kalırlar. Launchpad'in klasör sistemiyle uğraşmak yok, bir güncellemeden sonra uygulamaların farklı sayfalara zıplaması yok. Düzeniniz size aittir ve öylece kalır.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "reduce-mac-dock-clutter-workflow": {
    slug: "reduce-mac-dock-clutter-workflow",
    title: "İş Akışı Tabanlı Panellerle Mac Dock Dağınıklığını Azaltın",
    description: "Kalabalık bir Dock sizi yavaşlatır ama uygulamaları kaldırmak hızlı erişimi kaybetmek anlamına gelir. Gerçek çözüm daha az uygulama değil — daha iyi bir düzenlemedir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Dock dağınıklığı hakkındaki çoğu tavsiye "kullanmadığınız uygulamaları kaldırın" noktasına indirgenir. Bu, yeni uygulamalar ekleyip dağınıklık geri dönene kadar bir hafta işe yarar. Sorun çok fazla uygulamanız olması değil — sorun Dock'un bir yapıya sahip olmamasıdır. Şu anda ihtiyacınız olsun ya da günlerdir dokunmamış olun, her simge eşit derecede öne çıkar.</p>

<p>İhtiyacınız olan daha az kısayol değil. İhtiyacınız olan, bağlam içinde ortaya çıkan kısayollardır.</p>

<h2>"Dock'tan kaldır" neden çözüm değil</h2>

<p>Dock'tan 10 uygulama kaldırırsınız. Artık onları açmak daha zordur — onlara ulaşmak için Spotlight, Launchpad veya Finder kullanmanız gerekir. Bir hafta sonra ekstra adımlar sinir bozucu geldiği için birkaçını tekrar sabitlemeye başlarsınız. Bir ay sonra yine kalabalık bir Dock'a geri dönersiniz. Döngü tekrar eder.</p>

<p>Dock'un tasarımı hep ya da hiç bir seçim dayatır: bir uygulama ya kalıcı olarak görünürdür ya da fiilen gizlidir. Bir orta yol yoktur — "bu uygulamayı yalnızca tasarım işi yaparken göster" diyebileceğiniz bir seçenek yoktur.</p>

<h2>İş akışı tabanlı paneller</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a> tam olarak bu orta yolu sunar. Her şeyin tek bir düz listesi yerine, gerçekten nasıl çalıştığınıza karşılık gelen paneller oluşturursunuz. Her panel, belirli bir bağlam için özenle seçilmiş bir uygulama (ve klasör ile dosya) koleksiyonudur.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty workflow panels reducing Mac Dock clutter" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Örnek kurulum</h3>

<ul>
  <li><strong>Yaratıcı</strong> — Figma, Photoshop, Illustrator, varlıklar klasörünüz</li>
  <li><strong>Geliştirme</strong> — VS Code, Terminal, GitHub Desktop, localhost yer imi</li>
  <li><strong>İletişim</strong> — Slack, Zoom, Mail, Takvim</li>
  <li><strong>Medya</strong> — Spotify, Fotoğraflar, QuickTime, bir indirilenler klasörü</li>
  <li><strong>Araçlar</strong> — Etkinlik İzleyicisi, Disk Yardımcı Programı, ara sıra ihtiyaç duyduğunuz sistem araçları</li>
</ul>

<p>Her biri 4-6 öğe içeren beş panel. Bu, Dock'unuz 3-5 temel simgede kalırken 20-30 uygulamanın düzenli ve erişilebilir olması demektir.</p>

<h3>Tasarım gereği dağınıklığa dayanıklı</h3>
<p>Yeni bir uygulama kurduğunuzda, onu ekranınızın altında büyüyen bir şeride değil, ilgili panele eklersiniz. Dock büyümez. Her panel odaklı kalır. Düzen, çökmek yerine uygulama koleksiyonunuzla birlikte ölçeklenir.</p>

<h3>Sürükle-bırak kurulum</h3>
<p>Panel oluşturmak birkaç dakika sürer. Uygulamaları Finder'dan veya Uygulamalar klasörünüzden panele sürükleyin. Size mantıklı gelecek şekilde yeniden sıralayın. Bu kadar. Terminal komutları yok, plist düzenlemesi yok, yapılandırma dosyaları yok.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "app-launcher-mac-menu-bar": {
    slug: "app-launcher-mac-menu-bar",
    title: "Menü Çubuğunda Yaşayan Mac Uygulama Başlatıcısı",
    description: "Çoğu Mac başlatıcısı ya ekranınızı ele geçirir ya da sizi yazmaya zorlar. Ekranınızın köşesinde oturan ve ihtiyaç duyana kadar yolunuzdan çekilen daha sessiz bir seçenek var.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>macOS'taki her uygulama başlatıcısı bir şey ister. Spotlight sizden yazmanızı ister. Launchpad tüm ekranınızı ister. Dock, o anda kullanıyor olsanız da olmasanız da ekranınızın altında kalıcı bir alan ister. Hiçbiri, siz gerçekten bir şey açmaya ihtiyaç duyana kadar sessizce oturmaz.</p>

<p>Menü çubuğu ise zaten oradadır. Çalışmanızı asla kaplamaz, asla yeniden boyutlanmaz, asla dikkat talep etmez. macOS'un her zaman görünür ve asla yolunuzda olmayan tek parçasıdır — bu da onu bir başlatıcı için doğal bir yuva yapar, tabii biri onu bu şekilde kullanırsa.</p>

<h2>Menü çubuğu bir başlatma noktası olarak yeterince kullanılmıyor</h2>

<p>Apple, menü çubuğunu durum simgeleri için ayırır — Wi-Fi, pil, ses, arka plan araçları. Orada neredeyse hiçbir şey uygulamaları aktif olarak açmak için tasarlanmamıştır. Bu kaçırılmış bir fırsattır çünkü menü çubuğu, iyi bir başlatıcının ihtiyaç duyduğu özelliklere tam olarak sahiptir: her zaman görünür, her zaman aynı yerde, tıklanana kadar sıfır ekran alanı.</p>

<p>Üçüncü taraf menü çubuğu uygulamaları mevcuttur ama çoğu tek amaçlıdır (bir pano yöneticisi, bir Wi-Fi değiştirici). Çok azı özellikle günlük uygulamalarınızı barındırıp başlatmak için tasarlanmıştır.</p>

<h2>Menü çubuğu için tasarlanmış bir başlatıcı</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, Dock veya bir arama kutusu yerine menü çubuğu etrafında tasarlanmış bir uygulama başlatıcısıdır. Menü çubuğu simgesine tıklayın, içine düzenlediğiniz uygulamaları gösteren bir panel açılır. Bir uygulamaya tıklayın, açılır, panel kapanır. Yazma yok, tam ekran devralma yok, kalıcı Dock alanı yok.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty app launcher dropdown from the Mac menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Boştayken sıfır ayak izi</h3>
<p>Dock'un aksine, kullanmadığınızda Jetty ekran alanı kaplamaz. Menü çubuğunda küçük, tek bir simgedir. Tıklayın, uygulamalarınıza ulaşın. Başka yere tıklayın, kaybolur.</p>

<h3>Birden fazla panel, tek simge</h3>
<p>Tek bir düz listeyle sınırlı değilsiniz. Birden fazla isimlendirilmiş panel kurun — menü çubuğunda tek bir simge ama arkasında, birlikte olmalarına karar verdiğiniz uygulamaları, klasörleri veya dosyaları barındıran tam bir düzenli başlatma grupları seti.</p>

<h3>Her Mac'te aynı şekilde çalışır</h3>
<p>İster 13 inç bir MacBook Air'de ister 32 inç harici bir ekranda olun, menü çubuğu her zaman aynı yerde durur. Başlatıcı kurulumunuz, farklı ekran boyutları için yeniden düzenlenmeye gerek kalmadan sizinle birlikte taşınır.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "best-app-organizer-mac": {
    slug: "best-app-organizer-mac",
    title: "Mac İçin En İyi Uygulama Düzenleyici",
    description: "Mac'inizdeki uygulamaları düzenlemenin bir yolunu aradıysanız muhtemelen klasörler, Stacks ve hepsi bir şekilde yetersiz kalan üçüncü taraf başlatıcılar bulmuşsunuzdur. İşte gerçekten işe yarayan yöntem.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>"Mac için uygulama düzenleyici" araması pek çok sonuç getirir ama bunların çoğu beklediğinizden daha dar bir sorunu çözer. Bazıları, uygulamalara da dokunan dosya düzenleyicileridir. Bazıları kaldırma araçlarıdır. Birkaçı gerçek başlatıcılardır ama düzenleme yerine arama etrafında kurulmuştur. Gerçekten istediğiniz şey, uygulamalarınızı kendi tanımladığınız kategorilere gruplamanın bir yoluysa, seçenekler hızla azalır.</p>

<h2>macOS'ta "uygulamaları düzenlemek" genellikle ne anlama gelir</h2>

<p>macOS, kutudan çıktığı haliyle uygulamaları düzenlemenin üç yolunu sunar: Uygulamalar klasörü (alfabetik, gruplama yok), Launchpad (klasörlere sürükleyebildiğiniz bir ızgara ama klasörler sığdır ve takibini kaybetmek kolaydır) ve Dock (hiçbir kategorisi olmayan düz bir şerit). Bunların hiçbiri, işiniz hakkında gerçekte nasıl düşündüğünüze uyan bir yapı kurmanıza izin vermez — proje bazlı, müşteri bazlı veya görev türü bazlı.</p>

<p>Üçüncü taraf klasör tabanlı araçlar Uygulamalar klasörünüzü düzenleyebilir ama bu, günlük olarak bir şeyleri nasıl açtığınızı değiştirmez. Dosyaları düzenlemek, erişimi düzenlemekle aynı şey değildir.</p>

<h2>Paneller etrafında kurulmuş bir düzenleyici</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, buna bir dosyalama sorunu değil, bir başlatma sorunu olarak yaklaşır. Menü çubuğunda — ihtiyacınız kadar çok — isimlendirilmiş paneller oluşturur, uygulamaları, klasörleri ve dosyaları ait oldukları panele sürüklersiniz. Düzen, dosyaların diskte nerede durduğunda değil, şeyleri nasıl gruplandırdığınızda yaşar.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty app organizer with named panels on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>macOS'un varsaydığı değil, sizin tanımladığınız kategoriler</h3>
<p>Karşı mücadele edeceğiniz varsayılan bir sınıflandırma yoktur. "Yazı," "Müşteri A," ve "Geç Saat Araçları" size mantıklı geliyorsa, bu geçerli bir panel setidir. Düzenleyici, sizi genel bir modele zorlamak yerine sizin zihinsel modelinize uyum sağlar.</p>

<h3>Sadece uygulamalar değil, karışık içerik</h3>
<p>Gerçek bir düzenleyici, uygulama simgelerinden daha fazlasını idare etmelidir. Jetty panelleri, uygulamaların yanı sıra klasörleri ve tekil dosyaları da kabul eder, böylece bir projenin araçları ve çalışma dosyaları bir arada durabilir.</p>

<h3>Bakım gerektirmeden düzenli kalır</h3>
<p>Bir panel bir kez kurulduğunda kayması söz konusu değildir. Yeni uygulamalar, siz seçtiğinizde seçtiğiniz panele gider. Launchpad klasörlerinin bazen yaptığı gibi otomatik olarak yeniden sıralama veya alfabetik sıraya sıfırlanma yoktur.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-dock-keeps-rearranging": {
    slug: "mac-dock-keeps-rearranging",
    title: "Mac Dock Sürekli mi Yeniden Düzenleniyor? Onunla Mücadele Etmeyi Bırakın",
    description: "Dock simgelerini mantıklı bir sıraya koymak için beş dakika harcıyorsunuz ve bir hafta sonra farklı bir düzen oluyor. Açık uygulamalar öne atlıyor, kapalı olanlar yer değiştiriyor ve düzen hiç kalıcı olmuyor.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Dock'unuzu özenle düzenlersiniz — en çok kullanılan uygulamalar solda, ara sıra kullanılanlar sağda. Sonra sabitlenmemiş bir uygulama açarsınız ve o, siz kullanırken özenle sıraladığınız düzeninizin ortasında belirir, çıktığınızda ise yok olur. Sabitlenmiş simgeler yerinde kalır ama çalışan ve çalışmayan uygulamaların karışımı, Dock'un asla tam olarak bıraktığınız gibi görünmemesi anlamına gelir.</p>

<p>Tek başına küçük bir rahatsızlıktır ama kas hafızasına asla tam olarak güvenemeyeceğiniz anlamına gelir — bir simgenin konumu, o anda başka nelerin açık olduğuna bağlıdır.</p>

<h2>Dock neden böyle davranıyor</h2>

<p>Dock, tek bir satırda iki farklı şeyi karıştırır: kasıtlı olarak sabitlediğiniz uygulamalar ve şu anda çalışan ama sabitlenmemiş uygulamalar. İkinci grup, neyin açık olduğuna bağlı olarak belirir ve kaybolur, sağındaki her şeyin konumunu kaydırır. "Benim sabit kısayollarım" ile "şu anda her ne çalışıyorsa" ayrımını tamamen yapmanızı sağlayan bir ayar yoktur — tasarım gereği aynı şeridi paylaşırlar.</p>

<h2>Asla kaymayan bir düzen</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, uygulama kısayollarınızı şu anda çalışan uygulamalardan tamamen ayrı olan menü çubuğu panellerinde tutar. Bir uygulamanın paneldeki konumu, açık, küçültülmüş veya kapalı olmasına göre değişmez. Nereye ne koyduysanız orada kalır.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panels with a fixed, non-shifting app layout on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Uygulama durumundan bağımsız konum</h3>
<p>Bir uygulamanın çalışıyor, kapalı veya küçültülmüş olması, bir Jetty panelinde nerede durduğu üzerinde hiçbir etkiye sahip değildir. Oluşturduğunuz düzen, paneli her açtığınızda koruduğunuz düzendir.</p>

<h3>Gerçek kas hafızası</h3>
<p>Hiçbir şey kaymadığından, her paneldeki her uygulamanın tam konumunu öğrenebilir ve tam olarak bakmadan bile tıklayabilirsiniz. Bu tür güvenilir bir mekânsal hafızayı, kendini yeniden düzenleyen bir Dock üzerinde oluşturmak imkânsızdır.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "quick-launch-design-apps-mac": {
    slug: "quick-launch-design-apps-mac",
    title: "Mac'te Tasarım Uygulamalarınızı Hızlıca Açın — Figma, Sketch, Photoshop",
    description: "Tasarımcılar genellikle belirli bir araç setiyle uğraşır — bir tasarım uygulaması, referanslar için bir tarayıcı, bir varlık yöneticisi — ve bu araçlar, başka uygulamalar açık olduğu anda ilgisiz yazılımlarla dolu bir Dock'un içinde kaybolur.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Tasarım işinin kendine ait bir araç seti vardır: gerçek tasarım için Figma veya Sketch gibi bir şey, varlık hazırlığı için Photoshop veya bir görüntü düzenleyici, referans ve ilhamla dolu bir tarayıcı sekmesi ve belki yanında bir yazı tipi yöneticisi veya renk seçici aracı. Tek başlarına bunlar sıradan uygulamalardır ama birlikte, e-posta, aramalar veya idari görevler için ihtiyaç duyduğunuzdan farklı, belirli bir çalışma setini oluştururlar.</p>

<p>Sorun şu ki macOS "tasarım modu" diye bir şeyi tanımaz. Tasarım araçlarınız, takviminizle, Slack'inizle ve sabitlediğiniz başka her şeyle aynı Dock'ta durur ve çalışmaya her oturduğunuzda aynı birkaç simgeyi yeniden bulmak zorunda kalırsınız.</p>

<h2>Yerleşik bir araç seti kavramı yok</h2>

<p>Dock ve Launchpad, her uygulamayı bireysel, ilgisiz bir öğe olarak ele alır. "Bu dört uygulama benim tasarım araç setim" deyip macOS'un onları birlikte sunmasını sağlamanın bir yolu yoktur. Ya hepsini kalıcı olarak sabitlersiniz (tasarım işi dışında ihtiyaç duymadığınız araçlarla Dock'u kalabalıklaştırarak) ya da her seferinde onları tek tek ararsınız.</p>

<h2>Tasarım işi için özel bir panel</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, tam olarak tasarım araç setinizi içeren tek bir panel — "Tasarım" diyelim — oluşturmanıza olanak tanır: Figma, Photoshop, bir referans tarayıcı yer imi, varlıklar klasörünüz. Menü çubuğunda bir tık paneli açar; bir tık daha, sırada ihtiyaç duyduğunuz aracı açar.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty design panel with Figma, Sketch, and Photoshop on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bir tasarım oturumu için her şey tek bir yerde</h3>
<p>Figma'yı ayrı ayrı açmak, sonra referans klasörünüzü bulmak, sonra hızlı bir varlık düzeltmesi için Photoshop'u açmak yerine, tek bir panel açın ve her birini sırayla başlatın. Bir tasarım oturumu için kurulum süresi saniyelere düşer.</p>

<h3>Sadece uygulamalar değil, varlıklar ve dosyalar da</h3>
<p>Tasarım işi, uygulamalar kadar dosyaları da içerir — dışa aktarma klasörleri, marka varlık kütüphaneleri, bir müşterinin paylaşılan sürücüsü. Bunları tasarım uygulamalarınızla aynı panele bırakın, böylece dosyalar dahil tüm araç seti tek bir noktadan açılır.</p>

<h3>Müşteri veya idari panellerden ayrı</h3>
<p>Tasarım panelinizi yalnızca tasarım araçlarına odaklı tutun, müşteri iletişimi veya idari uygulamaları kendi ayrı panellerine koyun. Her biri sade kalır ve desteklediği işe özgü olur.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-dock-vs-menu-bar-launcher": {
    slug: "mac-dock-vs-menu-bar-launcher",
    title: "Mac Dock ve Menü Çubuğu Başlatıcısı — Hangisi Daha İyi?",
    description: "İkisi de ekranınızda bir yerde durur ve ikisi de uygulama açabilir ama pratikte çok farklı çalışırlar. İş akışınıza hangisinin uyduğuna karar vermenize yardımcı olacak açık bir karşılaştırma.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Dock ve bir menü çubuğu başlatıcısı aynı temel sorunu çözer — uygulamalarınıza hızlıca ulaşmak — ama ekran alanına, düzenlemeye ve uygulama koleksiyonunuz büyüdükçe nasıl ölçeklendiklerine karşıt yaklaşımlar benimserler. Dock'ta kalıp kalmamaya ya da menü çubuğu tabanlı bir kuruluma geçip geçmemeye karar vermeye çalışıyorsanız, farkları açıkça ortaya koymakta fayda var.</p>

<h2>Nerede farklılaşıyorlar</h2>

<p><strong>Ekran alanı.</strong> Dock, her zaman ekranınızın sabit bir şeridini kaplar (veya otomatik gizliyse erişimi geciktirir). Bir menü çubuğu başlatıcısı küçük bir simge kaplar ve yalnızca tıklandığında genişler, sonra tekrar hiçliğe daralır.</p>

<p><strong>Düzenleme.</strong> Dock, tek bir düz satırdır — kategori yok. İyi tasarlanmış bir menü çubuğu başlatıcısı, her şeyi tek bir satıra yığmak yerine uygulamaları proje, müşteri veya iş türüne göre ayırmanızı sağlayan birden fazla isimlendirilmiş grup sunabilir.</p>

<p><strong>Ölçeklenme.</strong> Daha fazla uygulama ekledikçe Dock ya sığdırmak için simgeleri küçültür ya da genişler, ikisi de tekil simgeleri ayırt etmeyi zorlaştırır. Panel tabanlı bir menü çubuğu başlatıcısı, zaten var olanı küçültmek yerine daha fazla panel ekleyerek ölçeklenir.</p>

<p><strong>Görünürlük.</strong> Dock her zaman kısmen görünürdür, bazı insanlar bunu neyin kurulu olduğuna dair pasif bir hatırlatıcı olarak sever. Bir menü çubuğu başlatıcısı çağrılana kadar gözden uzak kalır, diğerleri ise daha temiz bir masaüstü için bunu tercih eder.</p>

<h2>Jetty bu karşılaştırmaya nasıl uyuyor</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, Dock'un düzenleme ve ölçeklenme sınırlarını ele almak için özel olarak tasarlanmış, istemiyorsanız Dock'tan tamamen vazgeçmenizi istemeyen bir menü çubuğu başlatıcısıdır.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Comparing the Mac Dock to a Jetty menu bar launcher" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Birbirini dışlamaz</h3>
<p>Birkaç temel uygulamayla (Finder, bir tarayıcı) minimal bir Dock tutabilir ve geri kalan her şeyi Jetty panellerine taşıyabilirsiniz. Çoğu insan sonunda ikisini birden kullanır, her biri en iyi olduğu işi yapar.</p>

<h3>Kaç uygulama kullandığınıza göre seçin</h3>
<p>Düzenli olarak sadece altı veya yedi uygulama kullanıyorsanız, tek başına Dock yeterli olabilir. Farklı projeler arasında 20, 30 veya daha fazlasını yönetiyorsanız, panel tabanlı bir menü çubuğu başlatıcısı, Dock'un yapısal olarak yapamayacağı bir şekilde ölçeklenir.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "developer-app-launcher-mac": {
    slug: "developer-app-launcher-mac",
    title: "Mac İçin Geliştirici Uygulama Başlatıcısı — Terminal, Xcode, VS Code Tek Panelde",
    description: "Tipik bir kodlama oturumu bir düzenleyici, bir terminal, test için bir tarayıcı ve belki bir veritabanı aracı veya sürüm kontrol istemcisi gerektirir — hepsi, çalışmaya her oturduğunuzda sıfırdan açılır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir kodlama oturumuna başlamak genellikle aşağı yukarı aynı sırayla aynı birkaç uygulamayı açmak demektir: düzenleyiciniz, bir terminal penceresi (belki iki tane — biri dev sunucusu için, biri git için), localhost'a yönlendirilmiş bir tarayıcı ve muhtemelen bir veritabanı istemcisi veya API test aracı. Bunların hiçbiri zor değil ama tekrarlayıcı ve tekrarlayan kurulum adımları, bir iş gününde biriken tam olarak bu tür bir sürtünmedir.</p>

<p>Bunların hepsini Dock'a sabitlemek, e-posta, iletişim ve diğer her şey için de uygulamalar sabitleyene kadar işe yarar — bu noktada geliştirme araçlarınız kod yazmakla hiçbir ilgisi olmayan uygulamalarla karışmış olur.</p>

<h2>macOS "geliştirici modunu" başka hiçbir şeyden ayırt etmez</h2>

<p>Dock, Spotlight ve Launchpad, VS Code'u Mail veya Takvim'e davrandıkları gibi ele alır — birçok uygulamadan biri olarak, bazı uygulamalarınızın tekrar tekrar aynı kombinasyonda birlikte kullanılan tutarlı bir geliştirme ortamı oluşturduğuna dair hiçbir fikir olmadan.</p>

<h2>Geliştirme yığınınıza özel bir panel</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, tam olarak geliştirme araç setinizi içeren bir "Dev" paneli oluşturmanıza olanak tanır — VS Code veya Xcode, Terminal, bir tarayıcı, bir Git istemcisi, bir veritabanı aracı — ve bu araçlar kod dışı uygulamalarınızla aynı alanı doldurmadan, menü çubuğundan tek tıkla herhangi birini açabilirsiniz.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty developer panel with Terminal, Xcode, and VS Code on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Araçlarınızın yanında proje klasörleri</h3>
<p>Depo klasörünüzü doğrudan düzenleyiciniz ve terminalinizle aynı panele bırakın. Bir proje üzerinde çalışmaya başlamak, ayrı ayrı bir klasöre gidip sonra her aracı açmak yerine tek bir panel açmak anlamına gelir.</p>

<h3>Her yığın için ayrı paneller</h3>
<p>Bir frontend yığını ve bir backend yığını arasında çalışıyorsanız veya birden fazla müşteri kod tabanıyla uğraşıyorsanız, her bağlam için bir panel oluşturun. Aralarında geçiş yapmak, karışık bir pencere yığınında Cmd+Tab araması değil, bir menü çubuğu tıklamasıdır.</p>

<h3>Çalışırken yolunuzdan çekilir</h3>
<p>Araçlarınız açıldıktan sonra panel kapanır ve yolunuzdan çekilir. Genellikle zaten düzenleyici panelleri ve terminal pencereleriyle dolu bir ekranda dikkat için yarışan kalıcı bir dock öğesi değildir.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-dock-hidden-cant-find-apps": {
    slug: "mac-dock-hidden-cant-find-apps",
    title: "Mac Dock Gizli ve Uygulamaları Bulamıyor musunuz? İşte Çözüm",
    description: "Daha fazla ekran alanı için otomatik gizlemeyi açtınız ama artık her uygulama açma işlemi, ekranın kenarında beklemek ve simgelerin görünmesini beklemek anlamına geliyor.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir noktada Sistem Ayarları'na girip "Dock'u otomatik gizle ve göster" seçeneğini açtınız. İyi bir fikir gibi görünüyordu — daha fazla dikey alan, daha temiz bir ekran. Ama artık bir uygulama açmak istediğinizde her seferinde imlecinizi tamamen alt kenara götürmeyi, durmayı ve herhangi bir şeye tıklayabilmeden önce Dock'un yukarı kaymasını beklemeyi hatırlamanız gerekiyor. Çok hızlı hareket eder veya çok erken tıklarsanız hiçbir şey olmaz ve tekrar denemeniz gerekir.</p>

<p>Ekran alanı güzel. Ama bir şey açmak istediğiniz her seferinde yaşanan sürtünme değil.</p>

<h2>Bu ödünleşim neden var</h2>

<p>Otomatik gizleme, hep ya da hiç bir ayardır. Dock'un ne zaman görüneceği konusunda akıllı davrandığı bir orta yol yoktur — ya her zaman oradadır ve alan kaplar ya da her zaman gizlidir ve bir uygulamaya ne kadar hızlı ihtiyaç duyarsanız duyun bekleyip üzerine gelme hareketini gerektirir. macOS, yerleşik olarak daha hızlı bir ara seçenek sunmaz.</p>

<h2>Dock'u gizli tutun, yine de anında açın</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, uygulama kısayollarınızı ekran alanı kaplamadan her zaman görünür olan bir yere — menü çubuğuna — taşıyarak bunu çözer. Dock otomatik gizlemeyi kalıcı olarak açık bırakabilirsiniz çünkü artık bir şey açmak için Dock'a ihtiyacınız yok. Jetty simgesine tıklayın, uygulamalarınız anında görünür — üzerine gelme yok, bekleme yok, başarısız denemeler yok.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty menu bar launcher replacing the need to reveal a hidden Mac Dock" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Artık üzerine gelip bekleme yok</h3>
<p>Menü çubuğu gizlenmez veya animasyon yapmaz. Basitçe, her zaman, ekran alanınıza sıfır maliyetle oradadır. Tıklamak anındadır — hesaba katılacak bir gecikme yoktur.</p>

<h3>Kalıcı olarak tam ekran alanı</h3>
<p>Dock kalıcı olarak gizliyken ve açma işlemlerinizi Jetty hallederken, bir uygulamaya ihtiyaç duyduğunuz her seferinde yavaş bir ortaya çıkışın bedelini ödemeden, otomatik gizlemenin size vermesi gereken dikey alanı korursunuz.</p>

<h3>Dock görünürken de aynı şekilde çalışır</h3>
<p>Daha sonra Dock'u tekrar açmaya karar verirseniz, Jetty yine de tam olarak aynı şekilde çalışmaya devam eder. Her iki durumda da Dock ayarlarınıza bağlı değildir.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "organize-creative-workflow-mac": {
    slug: "organize-creative-workflow-mac",
    title: "Mac'te Yaratıcı İş Akışınızı Uygulama Panelleriyle Düzenleyin",
    description: "Yaratıcı işler genellikle tek bir oturumda birden fazla disiplini kapsar — yazma, düzenleme, tasarım, inceleme — her biri, macOS'un tek bir farksızlaştırılmış yığın olarak ele aldığı farklı bir yazılım karışımına ihtiyaç duyar.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Tek bir yaratıcı proje, bir gün içinde birkaç farklı aşamadan geçebilir: bir yazı uygulamasında taslak hazırlama, bir tarayıcıda referans toplama, görüntü veya video düzenleme, ardından sonucu inceleyip paylaşma. Her aşama farklı bir yazılım kombinasyonuna dayanır ama macOS'ta "aşama" diye bir kavram hiç yoktur — sahip olduğunuz her uygulama, bu dakika ihtiyaç duyduğunuz araç olsun ya da aylardır dokunmadığınız bir araç olsun, aynı farksızlaştırılmış yığında durur.</p>

<p>Sonuç olarak, aynı kombinasyonlar proje proje tekrarlansa bile, yaratıcı bir projenin aşamaları arasında geçiş yapmak her seferinde araçları yeniden bulmak anlamına gelir.</p>

<h2>Yaratıcı iş, düz bir uygulama listesine uymaz</h2>

<p>Dock ve Launchpad, her uygulamanın eşit ve sürekli görünürlüğü hak ettiğini ya da hiç hak etmediğini varsayar. "Bu üç uygulama taslak için, bu ikisi inceleme için" deyip bu yapının ihtiyaç duyduğunuzda ortaya çıkmasını sağlamanın bir yolu yoktur. Sonunda ya Dock'unuzu her aşamadan her araçla aşırı kalabalıklaştırırsınız ya da Spotlight'ta tekrar tekrar aynı birkaç isim için ararsınız.</p>

<h2>Yaratıcı aşamalarınıza uyan paneller</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, yaratıcı sürecinizin her aşaması için bir panel — "Taslak," "Düzenle," "İncele" — oluşturmanıza olanak tanır; her biri o aşamaya ait uygulamaları, klasörleri ve referans dosyalarını tam olarak barındırır. Bir aşamadan diğerine geçmek, menü çubuğundan farklı bir panel açmaktan ibarettir.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panels organizing a creative workflow on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Farklı ortamlar için paneller</h3>
<p>Bir yazarın "Uzun Metin," "Araştırma" ve "Yayınlama" panelleri olabilir. Bir video editörünün "Çekim," "Düzenleme" ve "Dışa Aktarma" panelleri olabilir. Yapı, yaratıcı sürecinizin gerçekte neye benzediğine uyum sağlar.</p>

<h3>Referans materyalleri araçlarla birlikte seyahat eder</h3>
<p>Duygu panolarını, stil rehberlerini veya referans klasörlerini, onları kullandığınız uygulamalarla aynı panele bırakın, böylece ilham ve araçlar birbirinden asla bir tıktan daha uzak olmaz.</p>

<h3>Projeler arasında tekrarlanabilir</h3>
<p>Aşama tabanlı panelleriniz bir kez oluşturulduktan sonra başlattığınız her yeni proje için işe yarar — yeni bir şeye her başladığınızda kurulumunuzu sıfırdan yeniden oluşturmazsınız.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "raycast-alfred-alternative-simple-mac": {
    slug: "raycast-alfred-alternative-simple-mac",
    title: "Raycast ve Alfred Fazla Abartılı — Mac İçin Basit Bir Uygulama Başlatıcısı Deneyin",
    description: "Güçlü klavye başlatıcıları iş akışları, uzantılar, eklentiler ve bir öğrenme eğrisiyle gelir. Gerçekten istediğiniz şey kendi uygulamalarınıza daha hızlı erişimse, bu basit bir iş için çok fazla araç demektir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Raycast ve Alfred gerçekten etkileyici yazılım parçalarıdır — pano geçmişi, özel iş akışları, hesap makinesi işlevleri, pencere yönetimi, düzinelerce hizmet için üçüncü taraf uzantılar. İleri düzey kullanıcılar bunların etrafında koca üretkenlik sistemleri kurar. Ama gerçek hedefiniz daha basitse — "uygulamalarımı, kullanma şekline göre düzenlenmiş olarak daha hızlı açmak istiyorum" — o tüm özellik seti çoğunlukla asla dokunmayacağınız bir yüktür.</p>

<p>Bir başlatma sorununu çözmek için böyle bir araç kurmak, başlatmanın kendisinden kazandığınızdan daha fazla zamanı iş akışlarını yapılandırmaya ve klavye kısayollarını öğrenmeye harcamak anlamına gelebilir.</p>

<h2>Her şey bir arada bir aracın karmaşıklık bedeli</h2>

<p>Klavye başlatıcıları, komutlar yazmak ve söz dizimini hatırlamak etrafında kurulmuştur — hesaplamalar için belirli bir önek, pano geçmişi için başka bir önek, özel bir iş akışı için bir başkası. Bunun çoğunu kullanıyorsanız değerlidir. Yalnızca uygulama açmak için kullanıyorsanız, çok daha küçük bir görev için çok daha büyük bir aracın zihinsel yükünü taşıyorsunuz demektir.</p>

<h2>Tek bir şey yapan bir başlatıcı</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, kasıtlı olarak dar kapsamlıdır: uygulamalarınızı, klasörlerinizi ve dosyalarınızı menü çubuğundan düzenler ve açar. Komut söz dizimi yok, uzantı mağazası yok, kullanışlı olmadan önce yapılandırmanız gereken bir ayarlar paneli yok. Uygulamaları panellere sürükler ve açmak için tıklarsınız. Öğrenme eğrisinin tamamı bu kadar.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty as a simpler alternative to Raycast and Alfred on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Komut tabanlı değil, görsel</h3>
<p>İsimleri yazıp hatırlamak yerine, gruplar halinde düzenlediğiniz simgelere tıklarsınız. Bu, sorgu söz dizimiyle değil, görsel olarak düşünen insanlar için bir başlatıcıdır.</p>

<h3>Kurulum tuzağı yok</h3>
<p>Göz atacağınız bir iş akışı mağazası, değerlendireceğiniz uzantılar, endişelenmeniz gereken eklenti uyumluluğu yoktur. Açın, uygulamalarınızı sürükleyin, tamamdır.</p>

<h3>Zaten bir klavye başlatıcınız varsa onu tamamlar</h3>
<p>Zaten başka şeyler için (pano geçmişi, hesaplamalar) Raycast veya Alfred kullanıyorsanız, onu o amaçla tutmaya devam edebilir ve düzenli, görsel uygulama başlatma için özel olarak Jetty'yi kullanabilirsiniz. İkisi birbirini dışlamaz.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-dock-magnification-annoying": {
    slug: "mac-dock-magnification-annoying",
    title: "Mac Dock Büyütme Özelliği Sinir Bozucu — Daha İyisini Deneyin",
    description: "İmleciniz üzerlerinden geçtikçe büyüyen simgeler bir tanıtımda güzel görünebilir ama günlük kullanımda büyütme, hassas tıklamayı kolaylaştırmak yerine zorlaştırır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Dock büyütme özelliği, kalabalık bir Dock üzerinde imlecinizi hareket ettirirken küçük simgeleri daha iyi görmenize yardımcı olmak için tasarlandı. Pratikte ise çoğu zaman tam tersini yapar: simgeler imleciniz hareket ettikçe gerçek zamanlı olarak büyür ve küçülür, her piksel hareketle konumlarını biraz kaydırır. Bir simgeyi hedeflersiniz, büyütme etkisi onu iter ve siz yanındakine tıklarsınız.</p>

<p>Büyütmeyi kapatmak kaymayı önler ama Dock'unuzda bir düzineden fazla uygulama varsa bu sefer küçük, ayırt edilmesi zor simgelere geri dönersiniz.</p>

<h2>Büyütme neden önlediğinden daha fazla yanlış tıklamaya neden oluyor</h2>

<p>Büyütme, tasarım gereği hareketli bir hedeftir — imlecinizi bir simgeye doğru hareket ettirme eylemi, o simgenin boyutunu ve konumunu değiştirir. Mükemmel derecede sabit bir fare kontrolüne sahip olmayan herkes için (özellikle trackpad'lerde çoğu insan böyledir) bu, Dock simgeleri küçüldükçe ve sayıları arttıkça kötüleşen, küçük ama gerçek bir hassasiyet sorunu yaratır.</p>

<h2>Yaklaştığınızda hareket etmeyen simgeler</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a> panelleri, uygulamaları büyütme efekti olmadan sabit bir boyutta gösterir. İmleciniz yakında olsa da olmasa da simgeler tam olarak oldukları yerde ve tam olarak oldukları boyutta kalır. Gördüğünüz şey, tıkladığınız şeydir — kayan bir hedef yok.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panels with fixed-size icons and no Dock-style magnification" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Panel başına daha az uygulama, zaten daha büyük simgeler demek</h3>
<p>Her uygulamayı tek bir satıra sıkıştırmadığınız için, her Jetty paneli okunaklı hale getirmek için bir büyütme efektine ihtiyaç duymadan yönetilebilir sayıda simgeyi rahat bir boyutta gösterebilir.</p>

<h3>Her seferinde öngörülebilir tıklama</h3>
<p>İmleciniz yaklaştıkça hiçbir şey büyümediği veya kaymadığı için tıklama hedefi, gözlerinizin size söylediği yerde tam olarak durur. Bu öngörülebilirlik, ne kadar hızlı hareket etmeye çalışırsanız o kadar önemli hale gelir.</p>

<h3>Dock büyütmeyi tamamen kapatın</h3>
<p>Günlük uygulamalarınız Jetty panellerinde yaşadığında, artık daha az kullandığınız bir Dock'ta büyütmeyi etkin tutmak için pek bir sebep kalmaz. Onu kapatmak, masaüstünüzden bir görsel gürültü kaynağını daha kaldırır.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "launch-app-groups-one-click-mac": {
    slug: "launch-app-groups-one-click-mac",
    title: "Mac'te Tek Tıkla Uygulama Gruplarını Açın",
    description: "İş gününüze başlamak genellikle aynı üç dört uygulamayı aynı sırayla açmak anlamına gelir. Bunu her sabah elle yapmak, var olmaması gereken küçük bir iştir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>İş gününüzün ilk beş dakikasını düşünün. Muhtemelen aşağı yukarı aynı sırayla aynı uygulamaları açarsınız — e-posta, bir mesajlaşma uygulaması, ana çalışma aracınız, belki bir takvim. Zor bir görev değil ama her gün, elle gerçekleştirilen, daha hızlı yapmak dışında kısaltmanın bir yolu olmayan tekrarlayan bir görev.</p>

<p>macOS, tanımlanmış bir uygulama grubunu birlikte açmanın yerleşik bir yolunu sunmaz. Ya her birini tek tek açarsınız ya da bir shell betiği ve bir klavye kısayolu kurarsınız — bu da çoğu insanın bu kadar rutin bir şey için yapmaya istekli olduğundan daha fazla kurulum gerektirir.</p>

<h2>Yerleşik bir "başlatma grubu" kavramı yok</h2>

<p>Apple'ın araçları, uygulama setleri etrafında değil, tekil uygulamalar etrafında kurulmuştur. Dock, Spotlight ve Launchpad hepsi seferinde bir şey açar. Automator veya Kısayollar teknik olarak tek bir tetikleyiciyle birden fazla uygulama açabilir ama bunu oluşturmak, çoğu insanın günlük bir rutin için yatırım yapmak isteyeceğinden daha fazla yapılandırma gerektirir.</p>

<h2>Menü çubuğundan birlikte açılan gruplar</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, uygulamaları isimlendirilmiş panellerde düzenler ve bir paneldeki her uygulama bir tıkla tek tek açılır — ama bir rutin için ihtiyacınız olan her şey tek bir panelde yaşadığından, tüm sabah kurulumunuzu açmak, her birini ayrı ayrı aramak yerine aynı açılır menüde üç dört simgeye tıklamaktan ibarettir.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panel for launching a group of apps together on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Özel bir "Sabah" paneli</h3>
<p>E-posta istemcinizi, mesajlaşma uygulamanızı, takviminizi ve ana çalışma aracınızı tek bir panele koyun. Gününüzü açmak, Dock ve Spotlight arasında bir hazine avı yerine tek bir yerde hızlı bir tıklama dizisi haline gelir.</p>

<h3>Farklı rutinler için farklı gruplar</h3>
<p>Çıkış yapmadan önce kontrol edilecek uygulamalarla bir "Kapanış" paneli veya raporlama araçlarınızla bir "Haftalık İnceleme" paneli — tekrarlayan her rutinin, ihtiyaç duyduğunuzda hazır kendi grubu olabilir.</p>

<h3>Betik yazmaya gerek yok</h3>
<p>Bir grup oluşturmak sürükle bırak işlemidir. Yazılacak bir Automator iş akışı, bakımı yapılacak bir shell betiği, ezberlenecek bir klavye kısayolu yoktur.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-desktop-apps-all-over": {
    slug: "mac-desktop-apps-all-over",
    title: "Mac Masaüstünde Her Yerde Uygulamalar mı Var? Menü Çubuğundan Düzenleyin",
    description: "Masaüstüne dağılmış takma adlar ve kısayollar, dağınık bir arka plan ve gerçekte aradığınız uygulamaya daha yavaş bir yol oluşturur.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Yaygın bir alışkanlıktır: bir uygulama Dock'a rahatça sığmaz ya da sadece hızlı bir kısayol istersiniz, bu yüzden masaüstüne bir takma ad sürüklersiniz. Bunu birkaç yıl boyunca birkaç düzine kez yapın ve masaüstü arka planınız bir simge ızgarasının arkasında kaybolur — bazı uygulamalar, bazı klasörler, sonunda ilgileneceğinizi düşündüğünüz bazı dosyalar. Herhangi bir şeyi bulmak, dağınık bir ızgarayı görsel olarak taramak anlamına gelir ve açtığınız her yeni pencere onun bir kısmını kapatır.</p>

<p>Masaüstü simgeleri, Stage Manager veya temiz masaüstü alışkanlığıyla da pek iyi uyumlu değildir — ya pencerelerinizin arkasında gizlidirler ya da masaüstü simgelerini tamamen kapatmışsınızdır ve orada ne varsa erişimini kaybetmişsinizdir.</p>

<h2>Masaüstü bir başlatıcı olarak tasarlanmadı</h2>

<p>Masaüstü simgeleri, düzenli bir sistem değil, kalıntı bir kolaylıktır. Zorunlu bir klasör yapısı, şeyleri nasıl sürüklediğinizin ötesinde bir gruplama ya da bir uygulama açtığınız anda pencerelerin onları kapatmasına karşı bir koruma yoktur. Hızlı erişim kısayollarını tutmak için Mac'inizdeki en az yapılandırılmış yerdir, yine de pek çok insan sonunda onları varsayılan olarak orada tutar.</p>

<h2>Masaüstü kısayollarını düzenli panellere taşıyın</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, o dağınık takma adlara uygun bir yuva sağlar. Şu anda masaüstünüzü dağıtan uygulamaları, klasörleri ve dosyaları bunun yerine isimlendirilmiş menü çubuğu panellerine sürükleyin. Görsel karmaşa ve kısayolları açık pencerelerin arkasında kaybetme riski olmadan aynı tek tıkla erişimi elde edersiniz.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panels replacing scattered desktop icons on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Erişimi kaybetmeden temiz bir masaüstü</h3>
<p>Kısayollarınız Jetty panellerinde yaşadığında, hiçbir şeye hızlı erişimden vazgeçmeden masaüstünüzü tamamen temizleyebilirsiniz — Finder ayarlarında masaüstü simgelerini kapatın, temiz bir duvar kağıdı kullanın, tercih ettiğiniz her neyse.</p>

<h3>Asla pencerelerin arkasında gizlenmez</h3>
<p>Menü çubuğu panelleri, kaç pencere açık olursa olsun ya da nasıl düzenlenmiş olurlarsa olsunlar erişilebilirdir. Masaüstü simgeleri ise bir şey onları kapladığı anda kaybolur.</p>

<h3>Dağınık yerine gruplanmış</h3>
<p>Tek bir farksızlaştırılmış ızgara yerine, kısayollarınız gerçek kategorileri yansıtan panellere ayrılır — uygulamalarıyla birlikte proje klasörleri, kullanan araçlarla birlikte referans dosyaları.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "best-mac-productivity-tools-app-launching": {
    slug: "best-mac-productivity-tools-app-launching",
    title: "Uygulama Başlatmak İçin En İyi Mac Üretkenlik Araçları",
    description: "Çoğu üretkenlik derlemesi not almaya ve görev yönetimine odaklanır. Her Mac kullanıcısının günde onlarca kez yaptığı bir şey olmasına rağmen uygulama başlatma nadiren kendi başına dikkat çeker.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Üretkenlik tavsiyeleri genellikle aynı birkaç kategoriye odaklanma eğilimindedir: görev yöneticileri, not alma uygulamaları, takvim araçları, zaman takipçileri. Uygulama başlatma, herhangi bir Mac'te en çok tekrarlanan eylemlerden biri olmasına rağmen neredeyse hiç listeye girmez — muhtemelen bir görev oluşturmaktan veya bir not yazmaktan çok daha sık uygulama açarsınız. Uygulamaları başlatmanın daha hızlı, daha düzenli bir yolu, sadece gösterişli olmadığı için gözden kaçırılması kolay bir üretkenlik yükseltmesidir.</p>

<h2>Uygulama başlatma neden ilgiyi hak ediyor</h2>

<p>Küçük, sık sürtünmeler, ara sıra yaşanan büyük olanlardan daha fazla birikir. Dağınık bir Dock'ta bir uygulama aramak veya Launchpad'de kaydırma yapmak için üç dört saniye kaybetmek o anda önemli hissettirmeyebilir ama günde 50-100 uygulama açma işlemiyle çarpıldığında, bir şeyin nerede olduğunu hatırlamanın zihinsel bağlam değiştirmesi bir yana, boşa harcanan dikkat ve zamanın anlamlı bir parçası haline gelir.</p>

<h2>Özel bir başlatıcı nereye uyuyor</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, bu belirli kategoriyi doğrudan ele alır. Uygulamalarınızı, klasörlerinizi ve dosyalarınızı isimlendirilmiş panellere düzenleyen bir menü çubuğu uygulamasıdır, böylece herhangi bir şeyi açmak, dağınık bir Dock'ta bir arama ya da avlanma yerine hızlı, öngörülebilir, iki tıklık bir eylem haline gelir.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty as a Mac productivity tool for organized app launching" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Görev ve not araçlarıyla iyi uyum sağlar</h3>
<p>Bir başlatıcı, görev yöneticinizle veya notlar uygulamanızla rekabet etmez — onları tamamlar. Üretkenlik yığınınızı (görev yöneticisi, notlar, takvim) tek bir panele koyun, böylece gününüzü yürüten araçlara, işin kendisine ulaşmak kadar hızlı ulaşırsınız.</p>

<h3>Bağlam değiştirme yükünü azaltır</h3>
<p>Bir uygulamanın nerede olduğunu düşünmek zorunda kaldığınız her seferinde, gerçek işinize gitmeyen bir parça dikkat harcarsınız. Düzenli, öngörülebilir başlatma bu yükü neredeyse tamamen ortadan kaldırır.</p>

<h3>Araç setinizle birlikte ölçeklenir</h3>
<p>Zamanla daha fazla üretkenlik uygulaması ekledikçe — yeni bir zaman takipçisi, yeni bir iletişim aracı — panel tabanlı bir başlatıcı, her eklemeyle daha da dağınıklaşan bir Dock'un aksine, kullanımı zorlaşmadan onları özümser.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "mac-stage-manager-not-enough": {
    slug: "mac-stage-manager-not-enough",
    title: "Mac Stage Manager Yeterli Gelmiyor mu? Bir Menü Çubuğu Başlatıcısı Ekleyin",
    description: "Stage Manager zaten açık olan pencereleri düzenler ama henüz başlatmadığınız uygulamaları açmanıza yardımcı olacak hiçbir şey yapmaz — pek çok kişinin onu açtıktan sonra karşılaştığı bir eksiklik.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Stage Manager, açık pencereleri düzenli tutmak için gerçekten kullanışlıdır — son kullanılan uygulamalar kenarda sıralanır, aktif pencereniz merkez sahneyi alır ve birkaç grup arasında geçiş yapmak, üst üste binen pencerelerle dolu bir masaüstünden daha temiz hissettirir. Ama yalnızca zaten çalışanı yönetir. Henüz açmadığınız bir uygulamayı açmanız gerektiği anda Stage Manager'ın sunacak hiçbir şeyi yoktur ve tekrar Dock'a, Spotlight'a veya Launchpad'e dönersiniz.</p>

<p>Pek çok kişi, tüm "çok fazla uygulama" sorununu çözmesini bekleyerek Stage Manager'ı açar, sonra bunun sorunun yalnızca yarısını çözdüğünü fark eder — başlatma yarısını değil, pencere yönetimi yarısını.</p>

<h2>Stage Manager erişimi değil, durumu düzenler</h2>

<p>Stage Manager'ın gruplamaları, önceden tanımladığınız bir yapıya değil, yakın zamanda kullanıma ve birlikte açık tuttuğunuz şeylere dayanır. Henüz açmadığınız bir uygulamayı size gösteremez ve otomatik gruplaması her zaman kendi iş akışlarınızı nasıl kategorize edeceğinizle eşleşmez.</p>

<h2>Onu özel bir başlatıcıyla eşleştirin</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, Stage Manager'ın bıraktığı boşluğu doldurur. Stage Manager açık pencerelerinizi düzenlerken, Jetty başlatma noktalarınızı düzenler — şu anda çalışıyor olsun ya da olmasın, açılmaya hazır uygulamaların, klasörlerin ve dosyaların isimlendirilmiş panelleri.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty menu bar launcher paired with Mac Stage Manager" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Önce açın, düzenlemeyi Stage Manager'a bırakın</h3>
<p>Belirli bir görev için uygulamaları açmak üzere bir Jetty paneli kullanın, ardından ortaya çıkan pencereleri düzenlemeyi çalışırken Stage Manager'a bırakın. İki araç, aynı iş akışının farklı aşamalarında çalışır.</p>

<h3>Otomatik değil, kendi gruplarınız</h3>
<p>Stage Manager gruplamaları son etkinlikten çıkarırken, Jetty panelleri tamamen sizin kontrolünüzdedir. Neyin birlikte olduğuna siz karar verirsiniz ve bu yapı, en son ne açtığınıza göre değişmez.</p>

<h3>Henüz açmadığınız uygulamaları da kapsar</h3>
<p>Jetty panelleri, çalışıyor olsun ya da olmasın uygulamaları listeler, böylece her zaman yeni bir şey açmak için bir yolunuz olur — Stage Manager'ın tasarımı gereği yardımcı olamadığı bir şey.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
  "open-recent-files-mac-menu-bar": {
    slug: "open-recent-files-mac-menu-bar",
    title: "Mac Menü Çubuğundan Son Kullanılan Dosyaları Açın",
    description: "En sık kullandığınız dosyaları tekrar açmak için Finder'da gezinmek veya bir uygulamanın kendi son dosyalar menüsünü eşelemek gerekmemeli.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bazı dosyalar sürekli açılır — devam eden bir proje elektronik tablosu, bir müşteri brifi, günlerce aktif olarak düzenlediğiniz bir belge. Her seferinde ya onu bulmak için Finder'da gezinir, ya tek bir uygulamanın "Son Dosyalar" menüsünü eşeler (bu yalnızca o uygulamayı kapsar) ya da hâlâ kaydırılıp listeden düşmemiş, yakın zamanda kullanılanlar listesinde olmasını umarsınız. Bunların hiçbiri özellikle hızlı değildir ve hiçbiri farklı uygulamalar ve dosya türleri arasında tutarlı çalışmaz.</p>

<p>macOS'ta bir "Apple menüsü > Son Kullanılan Öğeler" listesi vardır ama bu, uygulamaları, belgeleri ve sunucuları tek bir yerde karıştırır, hızla dağınıklaşır ve son etkinliğiniz onları listeden ittiği anda hâlâ ihtiyacınız olan öğeleri temizler.</p>

<h2>Son dosyalar listeleri tekrarlayan erişim için tasarlanmadı</h2>

<p>Apple'ın Son Kullanılan Öğeleri ve her uygulamanın kendi dahili son dosyalar menüsü, niyet etrafında değil, yakın zamanda kullanım etrafında tasarlanmıştır. Sürekli açtığınız bir dosya, bir kez açıp önemsemediğiniz düzinelerce başka şey tarafından listeden itilebilir. Dosyanın kendisini erişilebilir bir yerde bırakmadan belirli bir dosyayı kalıcı olarak bir hızlı erişim noktasına sabitlemenin bir yolu yoktur.</p>

<h2>Dosyaları dışarı itilmeyecekleri bir yere sabitleyin</h2>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty</a>, herhangi bir dosyayı doğrudan bir menü çubuğu paneline sürüklemenize olanak tanır; dosya, daha sonra başka ne açarsanız açın orada kalır. Yakın zamanda kullanıma dayalı bir listenin aksine, bir Jetty panelindeki dosya ilgisiz etkinlikler tarafından itilmez — siz kaldırana kadar oradadır.</p>

<a href="https://apps.apple.com/app/jetty/id6806639647" target="_blank" rel="noopener" style="display:block"><img src="/apps/jetty.png" alt="Jetty panel with pinned files accessible from the Mac menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bir Finder gezisi yerine tek tık</h3>
<p>Eskiden Finder'ı açmayı, klasörlerde gezinmeyi ve çift tıklamayı gerektiren bir dosya, artık hangi uygulamaya ait olursa olsun menü çubuğundan tek bir tıkla açılır.</p>

<h3>Kullanan uygulamalarla gruplanmış</h3>
<p>Aktif olarak düzenlenen bir elektronik tabloyu, onu düzenlediğiniz uygulamayla aynı panele koyun, ya da bir referans PDF'ini kullanırken başvurduğunuz tasarım aracının yanına. Dosyalar ve ilgili uygulamaları bir arada kalır.</p>

<h3>Tek bir uygulamanın hafızasıyla sınırlı değil</h3>
<p>Jetty, herhangi bir tek uygulamanın son kullanılanlar listesine güvenmek yerine kasıtlı olarak eklediğiniz dosyaları takip ettiğinden, dosyanın hangi uygulamaya ait olduğuna bakılmaksızın aynı şekilde çalışır.</p>

<p><a href="https://apps.apple.com/app/jetty/id6806639647">Jetty'yi Mac App Store'dan edinin</a></p>
`,
  },
};
