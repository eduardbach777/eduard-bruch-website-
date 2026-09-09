import type { ArticleSet } from "./index";

export const trArticles: ArticleSet = {
  "block-distracting-websites-mac": {
    slug: "block-distracting-websites-mac",
    title: "Mac'te Dikkat Dağıtan Web Sitelerini Nasıl Engelleyebilirsiniz",
    description: "Tarayıcınızı bir şey kontrol etmek için açıyorsunuz ve 40 dakika sonra Reddit konuşmasının derinliklerinesiniz. macOS gerçek bir web sitesi engelleyicisiyle gelmiyor — bunu nasıl düzeltebileceğiniz aşağıda.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Çalışmaya oturuyorsunuz, Safari veya Chrome'u açıyorsunuz ve ihtiyaç duyduğunuz sekmeye ulaşmadan çok önce adresleme çubuğuna hafıza ediyle "r-e-d" yazmışsınız. Kırk dakika sonra, hot dog'ların sandviç olup olmadığı hakkında bir konuşmadan çıkıyorsunuz. İş hala bekliyor.</p>

<p>Bu bir irade gücü sorunu değil. Bu bir tasarım sorunudur. Tarayıcılar sizi içeriğe mümkün olduğunca hızlı bir şekilde getirmek için inşa edilmiştir — kaçınmaya çalıştığınız içerik dahil.</p>

<h2>macOS Bunu Neden Çözmüyor</h2>
<p>Apple, macOS Catalina'da Screen Time web sitesi sınırları ekledi, ancak bunlar yalnızca Safari'de çalışır. Chrome, Firefox, Arc veya başka bir tarayıcı kullanıyorsanız, bu sınırların hiçbir etkisi yoktur. Ayrıca Screen Time istemlerini tek tıklamayla kapatabilirsiniz — bu bir hız tümsekmatik, bir duvar değil.</p>

<p><code>/etc/hosts</code> dosyanızı düzenlemek teoride çalışır, ancak Terminal komutları, sudo erişimi ve işiniz bittiğinde manuel temizlik gerektirir. Günlük kullanım için pratik değildir ve bir zamanlayıcıda çalışmaz.</p>

<h2>Lock In! ile Sistem Genelinde Web Sitelerini Engelleme</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, macOS sistem uzantısını kullanarak, Mac'inizin her tarayıcısında — Safari, Chrome, Firefox, Arc, Brave, hepsi — dikkat dağıtan web sitelerini engeller. Siteleri seçersiniz, bir zamanlayıcı ayarlarsınız ve oturum bitene kadar kaybolurlar.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! web sitesi engelleyicisi, Mac'te odak oturumu sırasında engellenen siteleri gösteriyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ön Ayarlanmış Engel Listeleri</h3>
<p>Lock In!, Sosyal Medya, Eğlence, Haber ve Alışveriş için seçilmiş engel listeleriyle birlikte gelir. Bir tıkla, düzinelerce zaman israfı alanını engeller. Kendi göz atma alışkanlıklarınıza özgü herhangi bir şey için özel URL'ler ekleyebilirsiniz.</p>

<h3>Zamanlanmış Oturumlar</h3>
<p>Odak oturumunu 25 dakika, bir saat veya özel bir süre için ayarlayın. Engellenen siteler zamanlayıcı bitene kadar engelleme kalırlar. Devre dışı bırakılacak tarayıcı uzantısı yok, geri dönülecek hosts dosyası yok — sistem düzeyinde çalışır.</p>

<h3>Sıkı Mod</h3>
<p>Engeli iki dakika içinde iptal edecek türdenseniz, Sıkı Modu etkinleştirin. Oturum başladığında, bunu erken bitirebilmenin hiçbir yolu yoktur. Siteler engelleme kalır. Hepsi o kadar.</p>

<p>Dikkat dağıtan web sitelerini engellemek bilgisayar bilimleri derecesi gerektirmemelidir. Menu çubuğundan iki tıkla yapılmalıdır. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "website-blocker-focus-mac": {
    slug: "website-blocker-focus-mac",
    title: "Mac'te Odak İçin En İyi Web Sitesi Engelleyicisi",
    description: "Tarayıcı uzantıları devre dışı bırakmak kolay, Screen Time yalnızca Safari'yi kapsar ve hosts dosyası hackleri Terminal gerektiriyor. Her tarayıcıda çalışan sistem düzeyinde bir engelleyici eksik parçadır.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Mac için düzinelerce web sitesi engelleyicisi var. Çoğu tarayıcı uzantısıdır — ve işte sorun burada. Uzantılar üç saniye içinde açılıp kapatılabilir. Beyniniz dikkat dağıtmaya yazgılı olduğunda, üç saniye hiçtir.</p>

<p>Odak yönelimli bir web sitesi engelleyicisinin tarayıcı düzeyinin altında çalışması gerekir. Hangi tarayıcıyı açarsanız açın siteleri engel altına alması gerekir ve engeli açmayı yeterince zahmetli hale getirmesi gerekir ki bırak yapsınız.</p>

<h2>Çoğu Engellleyici Neden Eksik Kalır</h2>
<p>Tarayıcı uzantıları yalnızca bir tarayıcıyı kontrol eder. Twitter'ı Chrome'da engellerseniz, Safari'yi açabilir ve özgürce kaydırabilirsiniz. Screen Time web sitesi sınırları yalnızca Safari'ye uygulanır ve bir tıkla kapatılabilir. Hosts dosyası düzenlemeleri Terminal erişimi gerektirir ve temizlemeyi unutursanız artık kalır.</p>

<p>İşbirliğinize dayanan bir engelleyici aslında hiçbir şeyi engellemiyor. İt öneriliyor. Ve öneriler dopamin söz konusu olduğunda işe yaramazlar.</p>

<h2>Lock In! — Menu Çubuğundan Sistem Düzeyinde Engelleme</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, macOS sistem uzantısı olarak çalışır. Bu, herhangi bir tarayıcı görmeden ağ düzeyinde istekleri keseceği anlamına gelir. Engellenen alanlar Safari, Chrome, Firefox, Arc — ağa temas eden her uygulamada yüklenmek başarısız olur.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! menu çubuğu odak engelleyicisi Mac için" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tek Tıklamalı Odak Oturumları</h3>
<p>Lock In! menu çubuğunuzda yaşıyor. Tıklayın, bir süre seçin ve oturum başlatın. Engel listeniz anında etkinleşir. Kapatılacak tarayıcı sekmeleri yok, gezinmek için ayarlar sayfası yok — sadece tıklayın ve odaklanın.</p>

<h3>Uygulama Engelleme de Yapıyor</h3>
<p>Web siteleri tek sorun değildir. Lock In! ayrıca dikkat dağıtan uygulamaları da engelleyebilir. Oturum sırasında engellenen bir uygulamayı açmaya çalıştığınızda, tam ekran bir panel sizi keserek işe geri gönderir. Her iki saldırı vektörünü de kapsar — tarayıcı ve uygulama.</p>

<h3>Günlük İstatistikler</h3>
<p>7 günlük bir çubuk grafik, odak geçmişinizi gösterir. Derin çalışma oturumlarının bir dizisini görmek motive edici. Bir boşluk görmek, bunu doldurmak ister. Veriler sizi cimri olmadan dürüst tutar.</p>

<h3>Küresel Kısayollar</h3>
<p>Fareyi dokunmadan bir oturum başlatın veya kontrol edin. Küresel bir klavye kısayolu atayın ve Mac'inize herhangi bir yerinden odak modu tetikleyin.</p>

<p>En iyi web sitesi engelleyicisi, aldatamazsınız. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "block-tiktok-mac": {
    slug: "block-tiktok-mac",
    title: "Mac'te Çalışma Sırasında TikTok'u Nasıl Engelleyebilirsiniz",
    description: "TikTok'un algoritması sizi sonsuza kadar kaydırmaya devam ettirmek için tasarlanmıştır. İşinizin bir sekme uzağındayken, irade gücü yeterli değildir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>TikTok, şimdiye kadar inşa edilmiş en etkili dikkat tuzağıdır. Algoritması sizi izleyen şeyi öğrenir ve sonsuz bir akış sunar. İş sırasında TikTok'u "sadece bir saniye" açmak, sonu bitirmek için tasarlanan bir çantadan bir cips yemek gibidir.</p>

<p>Telefonunuzda, uygulamayı silebilir veya iOS Screen Time'ı kullanabilirsiniz. Ancak Mac'te, tiktok.com her zaman bir sekme uzakta. Ve macOS bunu engellemenin basit bir yolunu sağlamaz.</p>

<h2>Mac'te TikTok Neden Özellikle Tehlikelidir</h2>
<p>Telefonunuzda, TikTok en azından ayrı bir etkinlik gibi hissettiriyor — fiziksel olarak farklı bir cihaz alıyorsunuz. Mac'inizde, çalıştığınız aynı tarayıcıdır. Bir sekmede rapor yazıyorsunuz ve TikTok Cmd+T uzakta. Bağlam değişikliği yok, sürtünme yok, beynin çalışma modundan ayrıldığını görmesi için hiçbir şey yok.</p>

<p>TikTok'un web sürümü artık tam özellikleri. For You sayfası özdeş şekilde çalışır. Algoritma aynı derecede yapışkan. Telefonunuzun aksine, Mac'iniz daha büyük bir ekrana ve klavyeye sahip — yorum bölümleri ve aramalara daha da derinlemesine düşebilirsiniz.</p>

<h2>Lock In! ile Sistem Genelinde TikTok'u Engelleme</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, macOS ağ uzantısını kullanarak tiktok.com'u sistem düzeyinde engeller. Hangi tarayıcıyı kullanırsanız kullanın — Safari, Chrome, Firefox, Arc — odak oturumu sırasında TikTok yüklenmeyecektir.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! TikTok'u Mac'te odak oturumu sırasında engelliyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>TikTok'u Engel Listenize Ekleme</h3>
<p>Lock In!, TikTok, Instagram, Twitter, Facebook ve daha fazlasını kapsayan Sosyal Medya ön ayar engel listesi içerir. Ön ayarını etkinleştirin veya tiktok.com'u özel bir girdi olarak ekleyin — her iki şekilde de, oturum boyunca bir tıkla engeller.</p>

<h3>Sıfır İstisnalar için Sıkı Mod</h3>
<p>Engeli iptal edebileceğinizi ve TikTok'u açabileceğinizi bilmek tüm noktayı zayıflatır. Sıkı Modu etkinleştirin ve engel, zamanlayıcı bitene kadar kalıcı olur. Geçersiz kılma yok, acil durum düğmesi yok, "sadece beş dakika" yok. Oturum uzunluğunu belirlersiniz ve TikTok hepsi için engelleme kalır.</p>

<h3>Uygulama Engelleme ile Eşleştirme</h3>
<p>TikTok masaüstü uygulaması veya Unite gibi bir sarmalayıcı varsa, Lock In! bunları da engelleyebilir. Uygulama engelleme özelliği, engellenen bir uygulamayı başlatmaya çalıştığınızda tam ekran bir kesilme paneli gösterir, böylece TikTok'a gidecek her yol kapatılır.</p>

<p>Algoritma uyumaz, bu nedenle engelleyiciniz de açığa sahip olmamalıdır. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "cold-turkey-alternative-mac": {
    slug: "cold-turkey-alternative-mac",
    title: "Mac için Cold Turkey Alternatifi",
    description: "Cold Turkey güçlüdür ancak Windows odaklıdır ve Mac sürümü hep geride kalmıştır. Sistem uzantıları kullanan yerel bir macOS alternatifi bu açığı kapatabilir.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Cold Turkey, en iyi bilinen web sitesi engelleyicilerinden biridir ve iyi sebepten dolayı — katı engellenmesi gerçekten çevirilmesi zordur. Ancak Cold Turkey önce Windows için inşa edildi. Mac sürümü tarihsel olarak güncellemelerde geride kalmış ve Mac'te her zaman evinde hissetmez. Mac'te yerel olarak çalışan ve aynı şekilde uzlaşmaz engellemeler sunan bir şey arıyorsanız, artık daha iyi bir seçenek var.</p>

<h2>Cold Turkey Mac'te Nerede Eksik Kalır</h2>
<p>Cold Turkey'nin Mac sürümü Windows muadili ile farklı bir engelleme mekanizması kullanır. macOS daha kilitli bir işletim sistemidir ve açık Apple API'lerine bağlı olmayan araçlar sistem güncellemeleriyle bozulabilir. Uygulama ayrıca Mac kullanıcılarının beklediği görsel entegrasyondan yoksundur — bu bir yerel macOS uygulaması değildir çünkü değildir.</p>

<p>Ek olarak, Cold Turkey'nin arayüzü Windows kökenlerinden karmaşıklık taşır. Planlanan engeller, izin verilenler ve mola zamanlayıcıları gibi özellikler güçlüdür ancak tek istediğiniz Twitter'ı iki saat engellemek ve biraz çalışmak istiyorsanız aşırı görünebilir.</p>

<h2>Lock In! — Geçici Çözüm Olmaksızın Yerel Mac Engelleme</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> Mac App Store aracılığıyla dağıtılan yalnızca macOS için inşa edilmiştir. Apple'ın resmi Ağ Uzantısı çerçevesini sistem düzeyinde web sitelerini engellemek için kullanır — tarayıcı hackleri değil, proxy trikkleri değil, hosts dosyası düzenlemesi değil. Bu, macOS güncellemeleri arasında güvenilir bir şekilde çalıştığı ve Sistem Bütünlüğü Korumasını devre dışı bırakmanız veya olağandışı izinler vermeniz gerekmediği anlamına gelir.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! macOS için Cold Turkey alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sıkı Mod Cold Turkey'nin Kilitlemesinin Rakibi</h3>
<p>Cold Turkey'nin imza özelliği, sizi açmasından önleyen sıkı moddur. Lock In!, aynı taahhüt aracını sunar — Sıkı Modu etkinleştirin ve oturum erken bitirilemez. Kaldırma hilesi yok, çıkış kısayolu yok. Süreyi seçersiniz ve bununla yaşarsınız.</p>

<h3>Web Sitesi ve Uygulama Engelleme Kombinasyonu</h3>
<p>Cold Turkey, web sitesi ve uygulama engellemeyi farklı ürünlere (Cold Turkey Blocker ve Cold Turkey Writer) ayırır. Lock In! her ikisini bir uygulamada ele alır. Engellenen uygulamalar tam ekran bir kesilme paneli tetikler ve engellenen web siteleri herhangi bir tarayıcıda yüklenmek başarısız olur.</p>

<h3>Menu Çubuğu Basitliği</h3>
<p>Lock In! menu çubuğunuzda yaşıyor. Yönetmek için ana pencere yok, karmaşık bir planlama arayüzü yok. Simgeyi tıklayın, bir süre seçin, oturum başlatın. Sosyal, Eğlence, Haber ve Alışveriş için ön ayar engel listeleri, sıfırdan odaklanmaya kadar iki tıkla gidebileceğiniz anlamına gelir.</p>

<p>Aynı kırılamayan engelleme, yerel Mac deneyimi. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "block-apps-during-focus-mac": {
    slug: "block-apps-during-focus-mac",
    title: "Mac'te Odak Oturumları Sırasında Uygulamalar Nasıl Engellenir",
    description: "Web sitelerini engelleme sadece savaşın yarısıdır. Slack, Discord, iMessage ve oyunlar tarayıcının dışında yaşıyor — ve macOS Odak modu aslında onları açmanızı engellemez.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Tarayıcınızda Reddit ve Twitter'ı engellediniz. Disiplinli hissediyorsunuz. Sonra Discord'a "tek bir mesaj kontrol etmek" için tıklarsınız ve 30 dakika meme kanalına kaybolur. Veya bir konuya yanıt vermek için Slack'i açarsınız ve bulunduğunuz her kanalı okumaya devam edersiniz.</p>

<p>Web sitesi engelleme, dikkat dağıtma sorunun yarısını çözer. Diğer yarısı Uygulamalar klasörünüzde yaşıyor.</p>

<h2>macOS Odak Modu Neden Yeterli Değil</h2>
<p>Apple'ın yerleşik Odak modu bildirimleri filtreler — belirli uygulamalardan ping seslerini susturabilir. Ancak bu uygulamaları açmanızı engellemez. "Do Not Disturb" oturumu sırasında Discord, Slack, Messages veya Steam başlatabilirsiniz. Odak modu uyarıları gizler; kaynağı engellemez.</p>

<p>Bu, Odak modunun yalnızca kesintilere değil, kendi başına neden olan dikkat dağıtmalara yardımcı olduğu anlamına gelir. Uygulamayı açan sizseniz, Odak modu hiçbir şey yapmaz.</p>

<h2>Lock In! Uygulamaları ve Web Sitelerini Birlikte Engeller</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> web sitesi engellemenin ötesine gider. Engel listenize bir uygulama eklediğinizde ve oturum başlattığınızda, o uygulamayı açmaya yönelik herhangi bir girişim tam ekran bir kesilme paneli tetikler. Ekranınızı kaplar, uygulamanın engelleneceğini söyler ve sizi yaptığınız şeye geri gönderir.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Mac'te odak oturumu sırasında dikkat dağıtan uygulamaları engelliyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tam Ekran Kesilme, Nazik Bir Uzun Değil</h3>
<p>Bazı engellleyiciler engellenen bir uygulamayı açtığınızda küçük bir bildirim gösterir. Kapat - bunu kapatmak kolay. Lock In!'ın kesme paneli tüm ekranı ele alır. İlgisizleştirilmesi imkansız ve engellenen uygulamayı arkasında kullanmak imkansız. Nokta budur — engel geçişi kolayysa, engel değildir.</p>

<h3>Web Sitesi Engelleme ile Kombinasyon</h3>
<p>Gerçek güç her ikisini de birleştirmektir. Sistem uzantısı aracılığıyla her tarayıcıda sosyal medya web sitelerini engelle ve uygulama engelleyici aracılığıyla mesajlaşma ve eğlence uygulamalarını engelle. Lock In! oturumu sırasında, her yaygın dikkat dağıtma yolu kapatılır — tarayıcı ve uygulama.</p>

<h3>Önceden Ayarlanmış Listeler Sizi Başlatıyor</h3>
<p>Lock In!, yaygın dikkat dağıtma kategorileri için önceden ayarlanmış engel listeleri içerir: Sosyal, Eğlence, Haber ve Alışveriş. Bunlar popüler web sitelerini kapsar ve spesifik uygulamalar onunla ekleyebilirsiniz. Bir engel listesini bir kez oluşturun ve her oturum yeniden kullanın.</p>

<p>Uygulamaları engelleyin, yalnızca bildirileri değil. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "mac-screen-time-website-blocking-limitations": {
    slug: "mac-screen-time-website-blocking-limitations",
    title: "Mac Screen Time Web Sitesi Engelleme Bozuktur — Neden Böyle",
    description: "Mac'te Screen Time web sitesi sınırları vaat eder, ancak yalnızca Safari'de çalışır, bir tıklayla kapatılabilir ve macOS güncellemeleriyle düzenli olarak kırılır.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Mac'te dikkat dağıtan web sitelerini engellemek için Screen Time'ı kullanmaya çalıştıysanız, zaten hayal kırıklığını keşfetmişsinizdir. Apple, Screen Time'ı birincil olarak iPhone'larda ebeveyn denetimleri için oluşturdu. Mac sürümü bir ek etkinlik ve web sitesi engelleme özellikleri bunu yansıtır.</p>

<p><h2>Screen Time Web Sitesi Engelleme Sorunları</h2>

<h3>Yalnızca Safari</h3>
<p>Screen Time'ın web sitesi kısıtlamaları yalnızca Safari'ye uygulanır. Chrome, Firefox, Arc, Brave veya başka bir tarayıcı kullanıyorsanız — ve çoğu profesyonel en az bir Safari dışı tarayıcı kullanır — sınırlar geçerli değildir. Screen Time'da twitter.com'u engelleyebilir ve hala Chrome'da Twitter kaydırabilirsiniz herhangi bir kısıtlama olmaksızın.</p>

<h3>Bir Tıklamalı Kapat</h3>
<p>Safari'de Screen Time web sitesi sınırına çarptığınızda, bir istem görürsünüz. Bu istek bir "Sınırı Yoksay" düğmesine sahiptir. Bir tıkla ve sitenin geri kalırsınız. Sınır ertesi gün sıfırlanır ve bunu tekrar yaparsınız. Bu bir hatırlatıcı, bir engel değil — ve hatırlatıcılar adi dikkat dağıtmalarına karşı çalışmaz.</p>

<h3>Güncellemelerde Güvenilmez</h3>
<p>Mac'ta Screen Time'ın hata geçmişi vardır. Eşitleme sınırlaması durdurursa, sessizce devre dışı bıraktıkları kısıtlamalar, doğru web sitelerini içermeyen kategoriler. Her macOS güncellemesi bazı sorunları düzeltmek ve diğerlerini tanıtmak gibi görünüyor. Günlük odak disiplini için güvenebileceğiniz bir araç değildir.</p>

<h3>Zamanlayıcı Tabanlı Oturum Yok</h3>
<p>Screen Time günlük zaman sınırları kullanır — "Günde 30 dakikalık sosyal medya." Ancak odak çalışması böyle gerçekleşmez. Bir projeyi bitirme hakkında 2 saat site engel etme gerekmez, günlük bir bütçe yönetmek değil. Screen Time hiç zamanlı odak oturumlarını desteklemez.</p>

<h2>Lock In! Screen Time'ın Yapması Gerekenini Yapıyor</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> özel olarak Screen Time bu işte başarısız olduğu için inşa edildi. Her tarayıcıda — Safari, Chrome, Firefox, Arc, hepsi — web sitelerini engellemek için macOS sistem uzantısı kullanır. Hiçbir tarayıcı muaf değildir.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Screen Time'ı Mac'te web sitesi engellemeyi değiştiriyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kapat Düğmesi Yok</h3>
<p>Engellenen web siteleri yalnızca yüklenmek başarısız olur. Yoksayılacak istem yok, tıklanacak düğme yok. Sıkı Modda, oturum bile erken sonlandıramaz. Engel mutlaktur.</p>

<h3>Oturum Tabanlı, Bütçe Tabanlı Değil</h3>
<p>Lock In! zamanlanmış oturumlar kullanır. Dikkat dağıtmalarınız 25 dakika, 1 saat veya 4 saat engelleyin. Oturum bittiğinde, her şey otomatik olarak açılır. Bu, gerçek çalışma oturumlarının nasıl işlediğine uyuyor — konsantre patlamalar, gün boyu hizalanması değil.</p>

<p>Screen Time'ın sınırlamalarına karşı savaşmayı durdurun. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "pomodoro-website-blocker-mac": {
    slug: "pomodoro-website-blocker-mac",
    title: "Mac için Web Sitesi Engelleme ile Pomodoro Zamanlayıcı",
    description: "Pomodoro tekniği 25 dakikalık odak sprintiniz Instagram'a 10 dakikalık bir dolambaç içerdiğinde bozulur. Zamanlayıcı yalnız yeterli değil — her aralıkta engellemeye ihtiyacınız vardır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Pomodoro Tekniği basittir: 25 dakika çalış, 5 dakika ara, tekrarla. Başlamak kolay olduğu için en popüler verimlilik yöntemlerinden biridir — bir zamanlayıcı ayarlayın ve gidin. Ama işte sorun: zamanlayıcı, üçüncü dakikada Twitter açmanızı engeller değil.</p>

<p>Çoğu Pomodoro uygulaması domates simgeli zamanlayıcıdır. Geri sayarlar. Aralık bittiğinde çınlarlar. Arasında 25 dakikayı korumak için hiçbir şey yapmaz. Pomodoro sırasında dikkat dağıtırsanız, zamanlayıcı tıklamaya devam eder ve tüm aralığı israf ettiniz.</p>

<h2>Engelleme Olmayan Zamanlayıcılar Neden İşe Yaramaz</h2>
<p>Pomodoro Tekniği, her sprint sırasında odaklanacağınız varsayar. 2005'te popüler hale geldiğinde, daha gerçekçiydi. 2026'da, bir sekme uzağında algoritmik olarak optimize edilmiş içerik dolu bir tarayıcı ile, saf irade gücü yeterli değildir. Dijital dikkat dağıtma üzerine yapılan araştırmalar, sosyal medya sitesine bağlam değiştirdikten sonra, tamamen yeniden odaklanmanın ortalama 23 dakika sürdüğünü gösteriyor. Bu neredeyse tüm bir Pomodoro — gitti.</p>

<p>Web sitesi engelleme olmayan bir Pomodoro zamanlayıcı, gym olmayan bir egzersiz planı gibidir. Yapı var, ama ortam sizin aleyhine çalışıyor.</p>

<h2>Lock In! Pomodoro'yu Sistem Düzeyinde Engelleme ile Birleştiriyor</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, yerleşik Pomodoro desteğine sahiptir. İş aralığı uzunluğunu ayarlayın ve Lock In!, tüm süre boyunca seçili web sitelerini ve uygulamalarını engeller. Aralık bittiğinde, her şey aranız için açılır. Arası bittiğinde, bir sonraki sprint için engelleme devam eder.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Mac için web sitesi engelleme ile Pomodoro zamanlayıcı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Her Tarayıcı, Her Uygulama</h3>
<p>Engelleme macOS sistem düzeyinde, ağ uzantısı aracılığıyla çalışır. Safari, Chrome veya Arc kullanıyorsanız — dikkat dağıtan siteler yüklenmeyecektir. Her sprint sırasında Discord, Slack veya oyunları kapatmak için uygulama engelleme ile eşleştirin.</p>

<h3>Dürüst Pomodoros İçin Sıkı Mod</h3>
<p>Sıkı Modu etkinleştirin ve Pomodoro'yu erken iptal edemez. "Yalnızca beslenişimi kontrol edeceğim" istisnaları yok. Aralık, tüm engeller etkin olarak tam süresini çalıştırır. Bu, Pomodoro Tekniği olarak tasarlanmıştır — kesintisiz odak sprintleri.</p>

<h3>İlerlemenizi İzle</h3>
<p>Lock In!'ın günlük istatistikleri 7 günlük çubuk grafik ile kaç odaklanmış oturum tamamladığınızı gösterir. Zamanla, desenleri göreceksiniz — en verimli olduğunuz günler, oturumları atladığınız zaman ve odaklanmanız hafta hafta nasıl iyileşir.</p>

<p>Pomodoro'larınıza gerçek diş verin. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "strict-mode-website-blocker-mac": {
    slug: "strict-mode-website-blocker-mac",
    title: "Mac için Sıkı Mod Web Sitesi Engelleyicisi — Aldatma Yolu Yok",
    description: "Her web sitesi engelleyicisinin bir iptal düğmesi var — ve gelecekteki kendin bunu kullanacak. Seçeneği tamamen kaldıran sıkı bir mod, uzun vadede işe yarayan tek versiyon.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Web sitesi engelleyicisi yüklersiniz. Reddit, Twitter, YouTube'u listeye eklersiniz. 2 saatlik bir odak oturumu başlatırsınız. On dört dakika sonra, "Sadece bir şey kontrol edeceğim" düşünürsünüz ve iptal düğmesine basarsınız. Engel kaldırılır, Reddit'i açarsınız ve iki saat kaybolur.</p>

<p>Bu, aracın başarısızlığı değildir — bu, iptal düğmesi içeren her engellleyicinin özelliğidir. Gelecek-sen engeli iptal edebiliyorsa, mevcut-sen sadece bir ritüel gerçekleştiriyor, bir sınır uygulamıyor.</p>

<h2>İptal Düğmesi Sorunu</h2>
<p>Çoğu web sitesi engelleyicisi oturum istediğiniz zaman bitirmenizi sağlar. Bazıları kısa bir gecikme ekler — açılmadan önce 10 saniye bekleyin. Diğerleri bir cümle yazmanızı ister. Bunlar sürtünme teknikleridir ve hafif dürtülere karşı çalışırlar. Ancak güçlü cravings için — 30 dakika zor bir sorunla güreştik ve beyniniz dopamin için çıldırıyor — 10 saniyelik bir gecikme hiçtir.</p>

<p>Taahhüt cihazlarına ilişkin araştırmalar, en etkili olanların seçeneği tamamen kaldırdığını gösteriyor. Evde olmayan junk food'u yiyemezsiniz. Kilitli bir tasarruf hesabına aktardığınız parayı harcayamazsınız. Ve engellenen sitelere iptal düğmesi yoksa göz atamazsınız.</p>

<h2>Lock In!'ın Sıkı Modu Kaçışı Çıkarıyor</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, etkinleştirildiğinde, mevcut oturumu tamamen iptal edilemez hale getirebilecek bir Sıkı Mod sunuyor. Erken bitirmek için düğme yok. Klavye kısayolu yok. Kapat ve yeniden başlat-geçici çözümü yok. Oturumu başlattığınızda bir süre seçtiniz ve engeller onun her saniyesine kalır.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Sıkı Mod — Mac'te iptal edilemez web sitesi engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nasıl Çalışır</h3>
<p>Sıkı Modu ile oturum başlattığınızda, Lock In! sistem düzeyinde ağ uzantısını her tarayıcıda web sitelerini engellemek ve uygulamayı herhangi bir engellenen uygulamayı kesecek şekilde etkinleştirir. Oturum zamanlayıcı menu çubuğunda geri sayar. Bu süre boyunca, "Oturumu Sonlandır" denetimi kaybolur. Ona erişemezsiniz. Tek çıkış yolu beklemektir.</p>

<h3>Küçük Başlayın</h3>
<p>Sıkı Mod korkutucu gibi görünüyorsa, 25 dakikalık oturumlar ile başlayın. Instagram olmadan 25 dakika hayatta kalabilirsiniz. Rahat olunca 50 dakikaya ve sonra 90'a uzatın. İçke, gerçekten çalışmaları başardığınızı fark ettiğinizde hızlı kaybolur.</p>

<h3>Gelecek Kendin Sana Teşekkür Edecek</h3>
<p>Sıkı Mod, kendinizle yaptığınız bir anlaşmadır: "Sonraki X dakika, dikkat dağıtmalar masadan çıktı." Her oturumu gerçek derin çalışmaya dönüştürür çünkü alternatif yok. Müzakere yok, istisna yok, kaçış kapısı yok.</p>

<p>İşe yarayan tek engellleyici, kapatamadığınız biridir. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "block-youtube-mac-during-work": {
    slug: "block-youtube-mac-during-work",
    title: "Mac'te Çalışma Saatleri Sırasında YouTube'u Nasıl Engelleyebilirsiniz",
    description: "YouTube'ın otomatik oynatma ve tavsiye çubuğu, hızlı bir araştırmayı saat uzunluğunda bir dolambaçta döndürür. İşi engelleme, sekmeyı kapatmaktan daha güçlü bir şey gerektirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>YouTube, verimlilik için benzersiz şekilde tehlikelidir çünkü verimli hissettiriyor. Bir çalışma görevi için öğretim arama yapmaya gittiniz ve kenarı, aslında siyah delikleri hakkında 40 dakikalık bir belgesel tavsiye eder. Otomatik oynatma, izleyip izlemeyeceğine karar vermeden sonraki videoya girer. Bir meşru araştırma, bir saatlik içerik tüketimine dönüşür.</p>

<p>Saf sosyal medya farklı olarak, YouTube gerçek yardım programına sahiptir. Bu, bırakılması zor olan — her zaman ziyareti haklı gösterebilirsiniz. Ancak platform, 3 dakikalık bir ziyareti 30 dakikalık oturuma dönüştürmek için tasarlanmıştır ve çalışma saatleri sırasında bu dönüşüm oranı yıkıcıdır.</p>

<h2>Neden Self-Control YouTube'a Karşı Başarısız Olur</h2>
<p>YouTube'ın tavsiye motoru, insanları izletmeyi koruyan milyarlarca veri noktası tarafından desteklenir. Sizin irade gücü ne yedikleriniz kadar desteklenir. Bu adil bir savaş değildir. Kenar çubuğu, otomatik oynatma, bildirimler ve kişiselleştirilmiş homepage, sitenizde zamanınızı en üst düzeye çıkarmak için vardır. Buna "Sadece bir video izleyeceğim" ile savaşmak kaybeden bir stratejidir.</p>

<p>YouTube'u engelleyen tarayıcı uzantıları saniyeler içinde devre dışı bırakılabilir. YouTube'u yer imlerinizden kaldırmak, URL kas hafızasına yazılmış olduğunda yardımcı olmaz.</p>

<h2>Lock In! ile Sistem Genelinde YouTube'u Engelleme</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, macOS sistem düzeyinde youtube.com'u engeller. Odak oturumu sırasında, hiçbir tarayıcıda — Safari, Chrome, Firefox, Arc, hiçbiri — YouTube yüklenmeyecektir. Sistem uzantısı, herhangi bir tarayıcı görmeden istekleri keserek, yükleme sayfası yok, sizi cezbeden kenarbaş yok, başlatılacak otomatik oynatma yok.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Mac'te çalışma saatleri sırasında YouTube'u engelliyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>YouTube'u Her Şeyi Engelleme Olmaksızın Engelleme</h3>
<p>Nükleer gitmesi gerekmez. youtube.com'u diğer siteler erişilebilir kalırken özel engel listenize ekleyin. Veya Eğlence ön ayarını kullanın, YouTube'u diğer video ve akış platformlarıyla birlikte engeller. Listeyi gerçek dikkat dağıtma desenlerinize uyacak şekilde özelleştirin.</p>

<h3>YouTube Bağımlıları İçin Sıkı Mod</h3>
<p>YouTube'u engellemeyi denediniz ve engeli iptal etmek için "hızlı bir şey kontrol et" seçeneğine her zaman sonlandıysanız, Sıkı Modu etkinleştirin. Oturum iptal edilemez hale gelir. YouTube, zamanlayıcı sıfıra vurana kadar YouTube engelli kalır, ne kadar ikna edici bir araştırma yapma isteği olursa olsun.</p>

<h3>Öğretimi Arası Zaman İçin Kaydedin</h3>
<p>Pomodoro desteği ile, Lock In! doğal olarak YouTube'un mevcut olduğu pencereler oluşturur — ara aralıkları. Bir öğretim izlemeniz gerekiyor? Yer imine alın ve sonraki ara sırasında izleyin. Bu şekilde YouTube programınızda size hizmet eder, diğer yolu değil.</p>

<p>YouTube'u çalışma saatleri sırasında masadan çıkarın. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "selfcontrol-alternative-mac": {
    slug: "selfcontrol-alternative-mac",
    title: "Mac için SelfControl Alternatifi",
    description: "SelfControl sevilen açık kaynaklı bir engelleyicidir, ancak modern macOS ile ayak uydurmamıştır. Uygulama engelleme yok, menu çubuğu arayüzü yok ve son sistem güncellemeleriyle uyumluluk sorunları.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>SelfControl, 2009'dan beri git-for web sitesi engelleyicisi olmuştur. Çekirdek vaat — web sitelerini belirli bir süre engelleyin, geri alma yolu yok — devrimciydi. Ancak artık 2026 ve SelfControl yaşını gösteriyor. Bunu kullandıysanız ve sınırlamalarına çarptıysanız, yalnız değilsiniz.</p>

<h2>SelfControl 2026'da Nerede Eksik Kalır</h2>

<h3>Uygulama Engelleme Yok</h3>
<p>SelfControl yalnızca web sitelerini engeller. Discord, Slack, Steam veya Messages gibi dikkat dağıtan masaüstü uygulamalarla hiçbir şey yapamaz. Dikkat dağıtma sorununuz tarayıcının ötesine uzanıyorsa — ve çoğu insan için uzatır — SelfControl yalnızca sorunun yarısını kapsar.</p>

<h3>Menu Çubuğu Varlığı Yok</h3>
<p>SelfControl, oturum başlatmak için tam uygulama penceresini açmanızı gerektirir. Menu çubuğu simgesi yok, hızlı erişim arayüzü yok. Günde birçok kez kullandığınız bir araç için, bu sürtünme birikir. Uygulamayı bulmanız, açmanız, engel yapılandırmanız ve başlatmanız gerekir — her zaman.</p>

<h3>Uyumluluk Kaygıları</h3>
<p>SelfControl, engellerini uygulamak için sistem düzeyinde ağ yapılandırma dosyalarını değiştirir. Apple her yayınla macOS güvenliğini sıkılaştırdıkça, bu yaklaşım giderek daha kırılgan hale gelmiştir. Kullanıcılar, sessiz olarak başarısız olan engelleri, zamanlayıcısından geçen engelleri ve macOS yükseltmelerinden sonra kurulum sorunlarını bildir. Uygulama açık kaynaklı ve gönüllüler tarafından korunur, bu nedenle düzeltmeler Apple'ın yayın döngüsünün gerisinde kalabilir.</p>

<h3>Pomodoro veya Oturum Özellikleri Yok</h3>
<p>SelfControl tek modu vardır: X dakika boyunca engelle. Pomodoro entegrasyonu yok, oturum izleme yok, günlük istatistikler yok. Odak uygulamalarının önemli ölçüde evrim geçirdiği bir dünyada tek amaçlı bir araçtır.</p>

<h2>Lock In! — Modern Bir Yedek</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, insanların SelfControl sevdiklerini — katı, iptal edilemez engelleme — alır ve bunları SelfControl'un asla sunmadığı özelliklerle modern bir macOS uygulamasında sarmalıyor.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! modern macOS için SelfControl alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sistem Uzantısı, Hosts Hack Değil</h3>
<p>Lock In!, macOS'ta ağ trafiğini kesmenin desteklenen, geleceğe dayalı bir yolu olan Apple'ın resmi Ağ Uzantısı API'sini kullanır. Kırılgan dosya değişiklikleri yok, sistem güncellemeleriyle kırılma yok, bir şey yanlış giderse artık giriş yok.</p>

<h3>Web Sitesi + Uygulama Engelleme</h3>
<p>Her tarayıcıda dikkat dağıtan web sitelerini ve tam ekran kesme panelleri aracılığıyla dikkat dağıtan uygulamaları engelleyin. Bir uygulama her iki vektörü de kapsar. SelfControl hiç uygulamalar engelleme olamaz.</p>

<h3>Menu Çubuğu İlk</h3>
<p>Lock In! menu çubuğunuzda yaşıyor. Tıkla, süre ayarla, başla. Bulacak pencere yok, aç geçişi yok. Günde birçok kez odak oturumları başlatmanın iş akışı için tasarlanmıştır.</p>

<h3>Sıkı Mod + İstatistikler</h3>
<p>Sıkı Mod, SelfControl'un iptal edilemez felsefesini yansıtır. 7 günlük grafik ile günlük istatistikler, SelfControl asla sağlamadığı sorumluluk ekler. Sosyal, Eğlence, Haber ve Alışveriş için ön ayar engel listeleri, sıfırdan listeleri oluşturmadan saniyeler içinde engelliyorsunuz.</p>

<p>Aynı felsefe, modern yürütme. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "focus-app-blocks-websites-and-apps-mac": {
    slug: "focus-app-blocks-websites-and-apps-mac",
    title: "Mac'te Hem Web Siteleri Hem Uygulamalar Engeller Odak Uygulaması",
    description: "Çoğu odak aracı web sitelerini veya uygulamaları engeller, ikisini değil. Dikkat dağıtmalar bu sınırı saygı görmez — tarayıcınızda ve mandalınızda yaşarlar.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Web sitesi engelleyicisi yüklediniz, bu nedenle Reddit ve Twitter işlenir. Ancak sonra Discord'a "tek bir mesaj kontrol et" ve 20 dakika kaybo. Chrome'da reddit.com açtınız ve 20 dakika kaybolur. Dikkat dağıtmalar "web siteleri" ve "uygulamalar" arasındaki kategori çizgisini saygı görmez — hangi kanalı açık bıraktıysanız o yararlanırlar.</p>

<p>Gerçekten bir odak oturumunu korumak için, her ikisini de engelleyen tek bir aracın gerekir. İki araç değil, tarayıcı uzantısı artı ayrı uygulama yöneticisi değil — Mac'inizin dikkat dağıtmasının her vektörünü kapsayan bir birleşik engellleyici.</p>

<h2>İki-Araç Sorunu</h2>
<p>Web sitesi ve uygulama engelleme için ayrı araçlar çalıştırmak açığa yaratır. Web sitesi engelleyicisi uygulama engelleyicinin zamanlamasını bilmez ve tersi. İki engel listesini, iki zamanlayıcıyı, iki ayarlar kümesini yönetirsiniz. Kaçınılmaz olarak, biri diğerinden önce sona erer veya biri aldığınız yeni dikkat dağıtma için yapılandırılmamıştır. Karmaşıklık, her iki aracı da sürekli kullanması daha az muhtemel hale getirir.</p>

<p>macOS kendisi de bu sorunu ayırır. Screen Time, Safari web sitelerini sınırlayabilir ve uygulama zaman sınırları ayarlayabilir, ancak web sitesi sınırları yalnızca Safari'ye ve uygulama sınırları kapatılabilir. Odak modu bildirimleri susturur ancak hiçbir şeyi açmanızı engel değil. İkisi de amaçlı odak oturumları için tasarlanmamıştır.</p>

<h2>Lock In! Bir Menu Çubuğu Simgeden Her İkisini de Engeller</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, zamanlı oturumlar sırasında dikkat dağıtan web sitelerini ve uygulamalarını eş zamanlı olarak engeller Mac için birleşik odak uygulamasıdır.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Mac'te odak için hem web sitelerini hem uygulamalarını engelliyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sistem Düzeyinde Web Sitesi Engelleme</h3>
<p>macOS ağ uzantısı her tarayıcıda web sitelerini engeller — Safari, Chrome, Firefox, Arc, Brave ve web istekleri yapan başka uygulama. Sosyal, Eğlence, Haber ve Alışveriş için ön ayar engel listeleri yaygın kuşkuları kapsar. Alışkanlıklarınıza özgü özel alanlar ekleyin.</p>

<h3>Tam Ekran Uygulama Engelleme</h3>
<p>Oturum sırasında engellenen bir uygulamayı açmaya çalıştığınızda, Lock In! tam ekran bir panel ile keser. Kapatılabilecek bir bildirim değil — bir duvar. Engellenen uygulama oturum bitene kadar kullanılamaz. Bu, Discord, Slack, Steam, Messages ve Uygulamalar klasörünüzde başka bir şey gibi masaüstü dikkat dağıtmalarını kapsar.</p>

<h3>Bir Engel Listesi, Bir Zamanlayıcı, Bir Oturum</h3>
<p>Web sitesi ve uygulama engelleri birlikte yapılandırın. Menu çubuğundan bir oturum başlatın ve her şey aynı anda etkinleşir. Oturum bittiğinde, her şey devre dışı bırakılır. Yönetmek için ayrı zamanlayıcılar yok, eşleşmemiş zamanlamalar yok, dikkat dağıtmalarının kaymak için açığa yok.</p>

<h3>Pomodoro, Sıkı Mod ve İstatistikler</h3>
<p>İş sprintlerinizi yapılandırmak için Pomodoro aralıkları katman. Oturumları iptal edilemez hale getirmek için Sıkı Modu etkinleştirin. 7 günlük çubuk grafik ile odak geçmişinizi izleyin. Bu özellikler hem web sitesi hem uygulaması engelleme arasında çalışır — bunlar ayrı bir araçtan yapıştırılmış değil, aynı oturumun parçasıdır.</p>

<p>Bir uygulama, her dikkat dağıtma, sıfır açık. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "block-social-media-mac": {
    slug: "block-social-media-mac",
    title: "Mac'te Çalışma Sırasında Sosyal Medya Nasıl Engellenir",
    description: "Instagram, X ve TikTok sizi geri çekmeye yönelik tasarlanmıştır. İşinizi irade gücüne güvenmeksizin çıkarmak için pratik bir kurulum aşağıda.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Sekmeyi kapatırsınız. On dakika sonra tekrar açılır. Bunu açacağın kararını verdim çünkü değil — sadece yaptın, çiğnemek gibi bir kaşıntı yardır. Sosyal medya uygulamaları, bu döngüyü mümkün olduğunca pürüzsüz hale getirmek için tüm işi yapan takımlar tarafından inşa edilir. İrade gücü bu işe karşı adil bir savaş değildir.</p>

<p>Düzeltme daha disiplin değil. Önemli olan saatlerde seçeneği kaldırmaktır.</p>

<h2>Neden "Sadece Açmayın" İşe Yaramaz</h2>
<p>Sosyal platformlar değişken ödüllerin etrafında tasarlanmıştır — sonraki kaydırmanın ilginç bir şey olup olmadığını bilemezsiniz, bu nedenle bulmak için kaydırmaya devam edersiniz. Bu, slot makinelerin kullandığı aynı mekanizmadır. Instagram'ı kontrol etmemeye karar vermek, günde düzinelerce çalışan küçük bir irade gücü savaşını kazanmanızı gerektirir ve oturum için kaybolmak için sadece bir kez kaybetmeniz gerekir.</p>

<p>Siteyi yer imine alıp, logout veya uygulama simgesini gizlemek aynı sebepten başarısız olur: birkaç saniye sürtünme eklerler, ancak birkaç saniye adi bir çaba durdurmak için yeterli değildir. Çalışma saatleri sırasında seçeneğin basitçe daha zor olmadığı yerde var olması gerek.</p>

<h2>Sistem Düzeyinde Engelle</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, macOS'ta sosyal medya alanlarını sistem genelinde engeller, bu nedenle Instagram, X, TikTok, Facebook ve Reddit, odak oturması sırasında — sadece sizin yapılandırdığınız değil — her tarayıcıda ulaşılamaz.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Odak oturması sırasında Mac'te sosyal medya sitelerini engellemek" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Önceden Ayarlanmış Sosyal Engel Listesi</h3>
<p>Her sosyal alanı elle yazıp yazmadıysanız, yerleşik Sosyal ön ayar bir dokunuşta büyük platformları kapsar. Niş bir şey ekleyin — belirli bir forum, bir Discord sunucusunun web istemcisi — aynı listeye saniyeler içinde.</p>

<h3>Her Tarayıcıda Çalışır</h3>
<p>macOS ağ uzantısı engeli tarayıcı katmanının altında uygulanır, bu nedenle etrafından kaçmak için Safari'den Chrome'a geçiş yapmak yapamaz. Alan engellenmişse, makinede her yerde engellenir.</p>

<h3>Sıkı Mod Senin Kavma Gün İçin</h3>
<p>Bazı günler basit engel yeterli. Diğer günler — stresli bir sabah, sıkıcı bir görev — devre dışı bırakmak için birbiriyle kendi konuşmasını yapacağını bilirsin. Sıkı Mod bu seçeneği zamanlayıcı bitene kadar kaldırır, böylece karar bir kez yapılır, başlangıçta, en fazla çözmende olduğunuz zaman.</p>

<h3>Kalıcı Bir Yasak Değil, Bir Zamanlayıcı ile Eşleştir</h3>
<p>Sosyal medyayı sonsuza kadar engelleme gerçekçi veya gerekli değildir — sadece derin çalışma blokları sırasında kaybolması gerekir. Odaklanmış saatleriniz için bir oturum belirleyin ve otomatik olarak kaldırsın, böylece öğle saatlerinde beslenişinizi kontrol etmek bir seçim, bir kayma değil.</p>

<p>Daha az kaydırma, daha sevilen işi. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "mac-focus-mode-doesnt-block-websites": {
    slug: "mac-focus-mode-doesnt-block-websites",
    title: "Mac Odak Modu Web Sitelerini Engelleme — Ne Engeller",
    description: "Apple'ın Odak özelliği bildirimleri susturur ancak tarayıcınızı açık bırakır. Dikkat dağıtan siteleri de engelledi saysanız, işte açık ve onu kapatmak.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Mac'inizde Odak modunu açarsınız ve bildirimler sessiz olur — Slack ping'leri, metinler, takvim uyarıları, tümü bastırılır. Üretkenlik modu gibi hissettiriyor. Böylece, aynı zamanda aktif olduğu sırada dikkat dağıtan web sitelerinden sizi uzak tuttuğu makul bir varsayımdır. Yapmaz. Odak modu, tarayıcıda neler açabiliyorsunuzla ilgili hiçbir şey yapmaz.</p>

<h2>Odak Modu Aslında Ne Yapar</h2>
<p>Odak, bildirim filtresidir. Hangi uygulamaların ve insanların sizi banner, sesler ve rozetlerle kesintiye uğratabileceklerini kontrol eder ve Mac, iPhone ve iPad'iniz arasında senkronize edilebilir. Diğer insanlardan kesintileri azaltmak için gerçekten yararlıdır. Ancak giden davranışa dokunmaz — Safari'yi açmanızı ve bir URL yazmanızı engelleyen hiçbir şey yoktur. Odak modu sizi dış kesintilerden korur, kendi alışkanlıklarınızdan değil.</p>

<p>Bu yaygın bir karışıklık çünkü "Odak" "dikkat dağıtmasız" demesi gibi görünüyor ve Apple'ın pazarlaması o çerçevede yasanır. Uygulamada, daha fazla ayrıntılı kurallara sahip İlgi çeken "Do Not Disturb" kapatmasına daha yakındır.</p>

<h2>Aslında Engelleri Nedir</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, Odak modu atlamak bölüm ele alır — dikkat dağıtan web sitelerini ve uygulamalarını tamamen engelleyerek, yalnızca sessiz olmaktan ziyade ulaşılamaz.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Mac'te Apple'ın Odak modundan farklı olarak web sitesi engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bildirim Filtreleme Değil Gerçek Web Sitesi Engelleme</h3>
<p>Sistem düzeyinde ağ uzantısı, Mac'inize her tarayıcıda seçtiğiniz alanları engeller. URL'yi doğrudan yazarken bir oturum çalışırken site yüklenmek başarısız olur.</p>

<h3>Her İkisini Birlikte Kullan</h3>
<p>Odak modu ve gerçek web sitesi engelleyicisi rakip araçlar değildir — aynı sorunun farklı yarılarını çözerler. Insanlardan bildirimleri sessizleştirmek için Odak profili açın ve açacağınız siteleri ve uygulamaları engellemek için oturum başlatın. Birlikte her iki kesinti yönünü kapserler.</p>

<h3>Her Şey Veya Hiçbir Şey Değil Oturum Tabanlı</h3>
<p>Çalışmaya oturduğunuzda menu çubuğundan bir süre belirleyin ve başlatın. Yapılandırılmış molalar istiyorsanız Pomodoro aralıkları ekleyin veya erken durdurmaya güvenmezseniz Sıkı Modu ekleyin. Zamanlayıcı bittiğinde, her şey otomatik açılır.</p>

<p>Sessiz bildirimler bir başlangıçtır. Aslında engellenen siteler farktır. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "website-blocker-all-browsers-mac": {
    slug: "website-blocker-all-browsers-mac",
    title: "Mac'te Tüm Tarayıcılarda Çalışan Web Sitesi Engelleyicisi",
    description: "Çoğu engellleyici uzantısı yalnızca kurulu olduğu tarayıcıyı kapsar. Engeli kaçmak için tarayıcı geçişi yaparsanız, işte açığı kapatan kurulum.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Chrome'da bir web sitesi engelleyicisi uzantısı kurar. Çalışıyor — yaklaşık bir gün boyunca, uzantı olmadığı Safari'ni subconsciously açana kadar ve siteyi sürtünsüz olarak yükle. Engeli çevirmek için bile niyetlenmediyseniz; Mac'iniz sadece birden fazla tarayıcıya sahip ve engellenyici sadece birini biliyordu.</p>

<p>Tek tarayıcı engelli olduğunda tarayıcı değiştirme, çoğu insanın fark ettiğinden daha az çaba alır.</p>

<h2>Neden Uzantı Tabanlı Engellleyiciler Sızar</h2>
<p>Tarayıcı uzantısı yalnızca onu barındıran tarayıcı içindeki trafiği görebilir ve kontrol edebilir. Chrome, Safari, Firefox ve Arc hepsi yüklüyse — Mac'te yaygındır — bir uzantı diğer üçünü tamamen açık bırakır. Engeli çevirmek için aktif olarak arıyor olana kadar insanlar hatta birden fazla tarayıcıya sahip olduğunu fark etmeyebilirler, bu noktada beynin Safari'nin dock simgesini şaşırtıcı hızlı bulduğu noktada beynin bulduğu noktada fark eder.</p>

<p>Uzantılar ayrıca tarayıcının kendi ayarlarından birkaç tıkla devre dışı bırakmak kolay, bu da bunu engelleme noktasını yenilir.</p>

<h2>Sistem Düzeyinde Engelle</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, tarayıcı eklentisi yerine macOS ağ uzantısı kullanır, bu nedenle engel tüm tarayıcılarda aynı anda uygulanır — Safari, Chrome, Firefox, Arc, Brave ve makinede yüklü başka bir şey.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Mac'te tüm tarayıcılarda sistem düzeyinde web sitesi engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bir Engel, Her Tarayıcı</h3>
<p>Bir alanı bir kez ekleyin ve Mac'te hemen her yerde engellenir. Tarayıcı başına kurulum yok, uzantı dört kez yükleme yok ve unuttuğunuz tarayıcı yok.</p>

<h3>Oturum Ortasında Kapatılacak Uzantı Yok</h3>
<p>Engelleme bir tarayıcı içinde çalıştığı yerine sistem düzeyinde çalıştığından, açma geçişi yoktur. Sıkı Mod bir adım daha ileri gider, tüm oturumu iptal edilemez hale getirerek, bu nedenle karar bir kez yapılır, başlangıçta, en fazla çözmende olduğunuz zaman.</p>

<h3>Obvious Suçlular İçin Ön Ayar Listeleri</h3>
<p>Sosyal, Eğlence, Haber ve Alışveriş ön ayar listeleri kutuda en yaygın dikkat dağıtma kategorilerini kapsar, bu nedenle el ile düzinelerce alanı girip girmek ve yapılandırmak gerekmez.</p>

<p>Tarayıcı geçişi bir açık olmamalıdır. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "block-reddit-mac": {
    slug: "block-reddit-mac",
    title: "Mac'te Reddit Nasıl Engellenir — Kaydırmayı Durdur",
    description: "Reddit'in sonsuz kaydırması ve sonu olmayan subreddit'leri, öğleden sonra kaybetmenin en kolay yollarından biridir. İşinizden çıkarmak için işte.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Reddit, asla bitmediği için benzersiz şekilde zamanı yediyor. Bir subreddit bitir ve başka var. Ön sayfayı bitir ve bir yorum konuşması var. Tek bir makale veya video farklı olarak, yapısına giren doğal bir durma noktası yoktur — kaydırma sadece daha fazla oluşturur ve "bir daha gönderi" saatler boyunca gitmek için devam edebilir siz fark etmeden.</p>

<p>Reddit'i "sadece bir şey kontrol etmek" için açtıysanız ve 45 dakika sonra baktıysanız, bu neden. Bu disiplin hatası değildir — durma işaretini kaldırmak için inşa edilmiş bir ürün.</p>

<h2>Reddit Engelleme Yeterli Değildir</h2>
<p>Birçok kişi reddit.com'u özellikle engelleyen tarayıcı uzantıları deneyin, hangi işler yazı eski.reddit.com veya mobil web sürümü kaymak çıkmazsa. Reddit'in de birçok subdomain ve yönlendirme yolu var, bu nedenle dar bir engel listesi kenar durumları kaçırabilir.</p>

<h2>Bunu Engelleme Daha Temiz Yolu</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, macOS'ta Reddit'i sistem düzeyinde engeller, sadece tarayıcı uzantısı olup olmadığını yapılandırdığınız tarayıcıda yalnızca ana alanı değil, varyantlarını kapsar.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Odak oturumları sırasında Mac'te Reddit'i engelliyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bir Kez Ekleyin, Her Yerde Engellenir</h3>
<p>Reddit.com'u engel listenize ekleyin — veya zaten içeren Sosyal veya Eğlence ön ayarını kullanın — ve Safari, Chrome, Firefox ve Arc'da simultane olarak ulaşılamaz. Tarayıcı kurulumu yok.</p>

<h3>Uygulamayı da Engeller</h3>
<p>Reddit masaüstü uygulamasını veya Mac uygulaması olarak sarılmış bir üçüncü taraf istemcisini kullanırsanız, Lock In! tam ekran kesme ile bunu doğrudan engelleyebilir, web sitesi yalnızca engelleyicinin kaçıracağı açığını kapatır.</p>

<h3>İhtiyacınız Olduğunda Kapsam Belirlendi</h3>
<p>Reddit'i sonsuza kadar engelleme gerekmez — çoğu insanı istemiyor. Çalışma oturumları sırasında bunu çalıştırın ve oturum bittikten sonra otomatik açılır, bu nedenle öğle saatlerinde göz atmak etkilenmez.</p>

<h3>Dürüst Günler İçin Sıkı Mod</h3>
<p>Reddit kırılma birkaç dakika Reddit'in 50 olmuş biliyorsanız, Sıkı Modu etkinleştirin. Engel oturumun bitene kadar tutacak.</p>

<p>Kaydırma engelleyicide başlar. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "focus-app-with-stats-mac": {
    slug: "focus-app-with-stats-mac",
    title: "Mac için Günlük İstatistiklerle Odak Uygulaması",
    description: "Çoğu engellleyici sadece engel. Odak zamanınızın bir kaydı olmadan, alışkanlık gerçekten iyileşip iyileşmediğini bilmek zordur — sizin için bunu izleyen kurulum.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Odak aracını kullanmaya başlarsınız, birkaç oturum çalıştırır ve sonra bir hafta sonra nasıl gidiyor diye sorulursunuz. Dürüstçe bilemezsiniz. Belki tutarlı oldun, belki yarı günü atladın, belki oturumların süresi fark etmeden kısaltmış. Kayıt olmadan, "son zamanlarda daha çok odaklı oldum" bir his, bir gerçek değil.</p>

<p>Çoğu web sitesi ve uygulama engellleyicisi yapılmak için inşa edilir — engel — ve bunu durdurun. Bu anlık oturum için iyidir, ancak oturum bittikten sonra kaybolur, bu günler veya haftalarda alışkanlıkların gerçekten kütlelerini veya bölünmesini görmek için yol bırakır.</p>

<h2>Neden Tracking Davranışı Değiştirir</h2>
<p>Odak zamanınızın görünür bir kaydını görmek engelleme yalnız yapmaz bir şey yapıyor: görünmez bir alışkanlığı ölçülebilir bir olasılığa dönüştürer. Tutarlı oturumların bir dizisi, "son zamanlarda daha çok odaklı oldum" olmayan bir şekilde motive edici. Grafikteki bir boşluk, iki haftalık bir kayma haline gelmeden önce tekrar yolunda olmak için bir uyarı. İzleme sadece kayıt değil — sonraki oturumu şekillendiren geri bildirimdir.</p>

<h2>Ayrıca İstatistikler Gösteren Bir Engellleyici</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, web sitesi ve uygulama engellemeyi günlük istatistiklerle eşleştirerek, her oturum sonunda kaybolması yerine görünür kaydı bir araya gelir.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Mac'te Günlük Odak İstatistikleri ve 7 Günlük Grafik" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sadece Sayı Değil 7 Günlük Grafik</h3>
<p>Bir devamı altı günlük çubuk grafik bir bakışta odak zamanı gösterir, böylece tam bir yazılımı fark edebilirsiniz — güçlü bir hafta, yavaş Pazartesi, tam gerisini önce gösteren kayma tüm kaymalar.</p>

<h3>Menu Çubuğunda Günlük Toplamlar</h3>
<p>Ayrı bir pano açmak veya ayarlar ekranını ziyaret etmek zorunda kalmaksızın bugünün odaklanmış zamanını kontrol edin. Geri bildirim döngüsünün sıkı kalmasını sağlamak üzere menu çubuğuna baktığınızda orada.</p>

<h3>İstatistikler Hem Web Sitelerini Hem Uygulamalarını Kapsar</h3>
<p>Web sitesi ve uygulama engelleme aynı oturumda çalıştığından, istatistikler gerçek odak zamanınızı yansıtır, yalnızca bir dilim. İki ayrı araçtan sayıları uzlaştırmak için gerek yok.</p>

<p>Ölçülen şey tekrarlanır. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "mac-parental-controls-for-yourself": {
    slug: "mac-parental-controls-for-yourself",
    title: "Mac Parental Controls Kendin için — Kendi Başına Uygulanan Web Sitesi Engelleme",
    description: "Screen Time çocuk hesabını yönetmek için inşa edilmiştir, ancak birçok yetişkin, aynı etkiye umuyor ve bunu kendi Mac'te ayarladı. İşte neden çok olan ve daha iyi bir uyum.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Belirli bir araştırma vardır "Mac'imde parental denetimleri nasıl ayarlanır." Yazı hatasını değil — birçok yetişkin, bir ebeveynin bir çocuğun dizüstü bilgisayarında koyacağı aynı kısıtlamayı istiyorlar, kendi Mac'lerinde uygulanır, çünkü tam olarak hangi sitelerin öğleden sonrasını yediğini biliyor ve bir duvar istiyorlar kendilerini geçemez.</p>

<p>Içgüdü mantıklı. Araç tam olarak uymuyor.</p>

<h2>Bu Neden Screen Time Awkward Hissettiriyor</h2>
<p>Screen Time'ın parental denetimleri Aile Paylaşımı yapısı etrafında inşa edilir — bir ebeveyn hesabı çocuk hesabını yönetiyor, Screen Time parolası çocuğun bilemediği. Kendi tek kullanıcı Mac'inize uygulamaya çalışırsanız, bilindiğiniz bir parola ayarlıyor ve tam olarak kontrol ettiğiniz bir hesapta, engel her zaman uygun olur hale gelmek için bunu devre dışı bırakabilirsiniz. Tüm güvenlik modeli, bir yetişkinin başka birini sınırlattığını varsayar. İçe dönük düşün ve gerçek bir engel olmayı bırakmaz.</p>

<p>Ayrıca, web sitesi kısıtlamaları için yalnızca Safari'yi sınırlar, böylece yüklü herhangi bir tarayıcı dokunulmaz.</p>

<h2>Kendi Mac'ini Sınırlanmak İçin İnşa Bir Araç</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, özellikle kendi Mac'ini kısıtlayan kişiler için tasarlanmıştır, çocuğun hesabını yönetmeyen ebeveyn için değil — etkileşim modeli tümü seçenek ve onurlandırmanız olduğunu varsayar.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Mac'te kendi başına uygulanan web sitesi ve uygulama engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Hesap Tabanlı Değil Oturum Tabanlı</h3>
<p>Yönetilen bir hesaba bağlı kalıcı kısıtlama yerine, odaklanmak istediğiniz zamana bir zamanlanmış oturum başlatır. Siteleri ve uygulamalarını seçtiklerinizi o pencere için engeller, sonra otomatik açılır — ayrı hesap yapısı gerek yok.</p>

<h3>Bildiğiniz Parol Yerine Sıkı Mod</h3>
<p>Öz setli parol gerçek caydırma olmadığından, Sıkı Mod erken iptal etme yeteneğini tamamen kaldırır. Taahhüt kez yapılır, başlangıçta, sizin çözmede en hazır olduğunuz zaman yerine yakında yapılır.</p>

<h3>Safari'den Farklı Olarak Her Tarayıcıyı Kapsar</h3>
<p>Engelleme sistem düzeyinde çalışır, çünkü Safari'ye özgü kısıtlamalardan bırakılan boşluk yoktur.</p>

<p>Çocuk hesabı ödünç almayan sınırlamalar. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "deep-work-app-mac": {
    slug: "deep-work-app-mac",
    title: "Mac için Derin Çalışma Uygulaması — Her Şeyi Engelle, Bir Şeye Odaklan",
    description: "Derin çalışma kesintisiz zaman uzatılmış gerektirir, ancak tek bir ping veya açık sekme oturumu başlamadan önce bitirebilir — işte bloğu düzgün koruma.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Cal Newport'un derin çalışma konsepti basit ama talep yönetimi üzerine rests: anlamlı bilişsel çıktı uzun kesintisiz konsantrasyon uzatılmış gerektirir ve bu durum zaman girmek ve neredeyse hiçbir zaman çıkmak için hiç zaman almaz. Tek Slack bildirimi, relfeksif sekme anahtarı veya Discord ping kesinti 30 saniyenin maliyetini almaz — odak geri almak 10 veya 15 dakika maliyetini alır, bu yüzden şu anda almış hissettiyse ortada oturum tümü gitti.</p>

<p>Bu yüzden derin çalışma temel korumak zor. Söz konusu iki saat yok; söz konusu kesinti altı 20-dakika parçalar içine dilimleme şeyler tarafından tüm kesme vardır zamanı fark etmedi an.</p>

<h2>Derin Çalışma Blok Gerçekten Gerekir Ne</h2>
<p>Derin çalışma oturumda koruma herkes bir kesintiye tepki vermek yerine başlamadan önce plausible kesinti kaldırma yolu.Bu mesajlaşma uygulamaları ulaşılmaz, haberciler alanları ulaşılmaz ve kontrol "sadece bir şey" kontrol hiçbir kolay géçişi vardır orta çünkü yolu yok.</p>

<h2>Mac'te Blok İnşa</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> kesin olarak inşa edilen — oturum başlatın ve hem dikkat dağıtan web sitesi ve dikkat dağıtan uygulamalar sistem genelinde engelledir.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Derin Çalışma oturumu web sitesi ve uygulama engelleme ile Mac için" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sistem Düzeyinde Web Sitesi Engelleme</h3>
<p>macOS ağ uzantısı, her tarayıcı ve masaüstü uygulamada web sitelerini engeller. Sosyal, Eğlence, Haber ve Alışveriş ön ayar listeleri yaygın kuşkuları kapsar. İhtiyacınız olan özel etki alanı ekleyin.</p>

<h3>Tam Ekran Uygulama Engelleme</h3>
<p>Oturum sırasında engellenen uygulamayı açmaya çalıştığınızda, Lock In! tam ekran panel ile keser. Onu kapatmak için açık bir boşluk yok. Oturum ortasındaki engellenen uygulamayı arkasında açamazsınız.</p>

<h3>Pomodoro ve İstatistikler</h3>
<p>Yapılandırılmış çalışma aralıklarına işlem yapısı yapısı hale getirilir. Derin çalışmanızın her saniyesi izlenir, böylece hafta boyunca görünen kalıpları haritalar.</p>

<p>Tüm dikkat dağıtma vektörler kapla. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "block-news-sites-mac": {
    slug: "block-news-sites-mac",
    title: "Mac'te Odak Saatleri Sırasında Haber Sitelerini Engelleme",
    description: "Haberler kontrol \"bir dakika\" çalışması sırasında nadiren dakika kalır — başlık başlık çekilmesi yanında sonraki hikayeyi çekmek için tasarlanmıştır. Çalışma bloklarından tutmanız işte.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Sekmeyi kapatırsınız. On dakika sonra tekrar açılır. Açmaya karar vermediğiniz için değil — sadece yaptın, çiğnemek gibi bir kaşıntı tarafından. Haber siteleri haberler almak için tasarlanmış ekipler tarafından inşa edilir olsa da, haber kaydırması, makale kaydırması ve başlık başlık çekişi süresini alır. Bir harita mühendisini tamamen ayırmak için 23 dakika başlama çıkışı sıfırdan başlamak gibi alır.</p>

<p>Haber sitelerinin söz konusu sorun nedir, dikkat dağıtma zamanını bulunması zor olduğunu tespit etmek önemlidir. Çok çalışmak için değerli muhabir siteleri vardır, ancak beyin çalışması kesmeyi meşru hale getirebilir, hızlı "son dakikada" ziyaret kapı kapı çalışma blokları içinde zararlıdır.</p>

<h2>Haberlerin Belirli Çalışma Zamanını Engelleme</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, sistem genelinde haber sitelerini Mac'te engeller, yalnızca önerilen yok yapabilir. Odak oturması sırasında major haber sitelerine erişim yoktur.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Odak oturumları sırasında Mac'te haber sitelerini engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Haber Ön Ayarı Engel Listesi</h3>
<p>Büyük yayın sitelerini başlık tarafından listelemek yerine, yerleşik Haber ön ayarı tüm ana kuşkuları bir dokunuşta kapsar. Her zaman CNN, BBC, The Guardian ve daha fazlasını kapsar.</p>

<h3>Öğle Saatlerinde Okuyun</h3>
<p>Haberleri asla engel etmeyin — sadece 9-5 bloklarından tutun. Öğle molası sırasında oku, oturum bittiğinde tüm yeteneği açılır.</p>

<h3>Sıkı Mod Stresli Günler İçin</h3>
<p>Yoğun iş hacmi gün yüksek kayısı o zaman günler için, Sıkı Mod korkunç bu yalnızca haberler içinde "sadece hafif bir bakış" kaçışları kaldırır.</p>

<p>Haber cıvatası iş sırasında yapılmış. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "freedom-app-alternative-mac": {
    slug: "freedom-app-alternative-mac",
    title: "Mac için Freedom Uygulaması Alternatifi",
    description: "Freedom, abonelik web sitesi engelleyicisini kaldırmıştır, ancak temel engelleme için yinelenen ücret birçok insanı daha basit, yerel bir seçenek arama yaptırmıştır.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Özgürlük, abonelik web sitesi engelleyicisini çağırdıktan sonra. Temel engelleme ve bu ücret modeli çoğu kullanıcıyı durdurmaya yöneltti. Eğer Özgürlük'ten hareket ediyorsanız ve daha basit bir şey arıyorsanız, karşılaştırma işaretlemesi yapılması gereken başka seçenekler vardır.</p>

<h2>Özgürlük Düşündükten Sonra</h2>
<p>Özgürlük, abonelik modeli çoğu insanı biraz çok işaretledi. Temel engelleme için aylık ücret reklamının, kullanıcıları yerel engelleme arama yaptırmış olan şeydir.</p>

<h2>Lock In! — Abonelik Yok Basit Alternatif</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, Mac App Store'dan tek ödeme ile satın alınan Mac'te engelleme için bir alternatiftir. Abonelik yok, aylık ücret yok, yalnızca net ödeme.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! macOS için Özgürlük alternatifi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tek Ödeme Ömür Boyu Kullanım</h3>
<p>Aylık ücret yok, abonelik yok, sadece bir kez satın alın ve hepsi sizin.</p>

<h3>Sistem Uzantısı Tasarım</h3>
<p>Yerel macOS tasarım, tam ekran engelleme ve menu çubuğu entegrasyonu, makine'de makine engelleme hissi verir.</p>

<p>Temel engelleme, basit fiyatlandırma. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "mac-website-blocker-system-wide": {
    slug: "mac-website-blocker-system-wide",
    title: "Mac İçin Sistem Genelinde Web Sitesi Engelleyicisi — Sadece Bir Tarayıcı Değil",
    description: "Yalnızca bir tarayıcıyı kapsayan bir engel gerçekten engel değil, bir önerisidir. İşte Mac'te sistem geniş kurulum gibi görünüyor.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Tarayıcı uzantısı engelleyicisi kullanırsanız veya Chrome'da Twitter engelleme ayarlarında Safari açabilirsiniz ve sınırlama olmaksızın kaydırabilirsiniz. Engel, engel değildir — bu bir kaçış kapısıdır.</p>

<h2>Gerçek Sistem Genelinde Engelleme Anlamı</h2>
<p>Sistem genelinde engelleme, tüm tarayıcılarda ve hatta masaüstü uygulamalarında alan çalışması anlamına gelir. Mac'inize tarayıcı yüklü olunca yapılandırdığı görmeksizin tüm yollardan kapalı bir alandır.</p>

<h2>Lock In! — Gerçek Sistem Genelinde</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, macOS'ta sistem genelinde engellemenin neye benzediği hakkında inşa edildi. İlk engel, her tarayıcı ve ağı yapan her uygulamada çalışır.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Mac'te sistem genelinde web sitesi engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kaçış Yolu Yok</h3>
<p>Tarayıcı değiştirmek, engeli çevirmez. Masaüstü uygulamalarındaki alanları açmaya çalışmak, tam ekran kesintisi tetikler. Engeli kırmanın hiçbir yolu yoktur.</p>

<h3>Oturum Tabanlı Koruma</h3>
<p>Başlatılmış bir oturum çalıştırın, metin süresi ayarlayın ve engelleme kalır o süre için hepsi için. Oturum bittiğinde, otomatik açılır.</p>

<p>Tek tarayıcı açığı olmayan engelleme. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "unbypassable-website-blocker-mac": {
    slug: "unbypassable-website-blocker-mac",
    title: "Mac İçin Geçilemez Web Sitesi Engelleyicisi — Sıkı Mod",
    description: "Bir tıklamayla devre dışı bırakabileceğiniz bir engel, bir engel değildir, bir hatırlatıcıdır. İşte, dahi çok istensen tutmak için engelleme nasıl ayarlanır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Web sitesi engelleyicisi yüklersiniz. Oturum başlatırsınız. 14 dakika sonra, düğmeyi tıklatırsınız ve engel kaldırılır. Açması hafif engelleme vardır ve uzun mücadelede tutmaz. Kişi seçeneği iptal edebiliyorsa, hiçbir şey gerçekten engellenir.</p>

<h2>Neden İptal Seçeneği Başarısız</h2>
<p>Çoğu engellleyici iptal etmeye izin verir. Bazıları gecikme ekler. Bazıları parolalar ekler. Ancak beynin dopamin isteyen öğleden sonra, bunlar hiçbir şey yapmaz. Bir engel gerçek ise, oturum seçeneği olmayan bir şey olması gerekir.</p>

<h2>Lock In!'ın Sıkı Modu Engel Yapıyor</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, Sıkı Modu sunuyor, iptal etme yol yok bir oturum yapıyor. Zamanlayıcı bitene kadar tutulur.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Mac'te Sıkı Mod geçilmez engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kesin Engelleme</h3>
<p>Oturum başladığında, engel tutuyor. Düğme yok, kısayol yok, kaçış yok. Oturum geçene kadar kapı kapalı.</p>

<p>Gerçek engelleme. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "block-online-shopping-mac": {
    slug: "block-online-shopping-mac",
    title: "Mac'te Online Alışveriş Sitelerini Engelleme",
    description: "Amazon veya giyim sitesinin hızlı görünümü çalışması sırasında genellikle hızlı kalır ve sepet dolu şeyler kadar biter hiç planlanmadı. Çalışma günü dışarıda tutmak işte.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Amazon veya herhangi bir giyim sitesi "hızlı" göz ata çalışması sırasında, bakış hızlı kalır tarafından çok nadir ve satın alma dürtüsü yeterlidir. Niyetlenmedik satın almak yaygın alışveriş davranışıdır. İşi sürdürmek için çalışma zamanı kapatma zararlıdır.</p>

<h2>Alışveriş Engelleme Yapan</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, macOS'ta alışveriş sitelerini sistem genelinde engeller, sadece bir tarayıcı değil. Alışveriş Ön ayarı Amazon, Ebay, Etsy ve daha fazlasını kapsar.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Odak oturumları sırasında Mac'te alışveriş sitelerini engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Alışveriş Ön Ayarı</h3>
<p>Elle site adresleri girmek yerine, alışveriş ön ayarı tüm ana kuşkuları kapsar. Etsy, Zappos, H&M ve benzeri eklenir.</p>

<h3>Özel Siteler Ekleyin</h3>
<p>Sık ziyaret ettiğiniz daha küçük alışveriş siteleri ekleyin ve oturum sırasında kapalı kalırlar.</p>

<p>İmpuls satın alma, çalışma bloğunun dışında. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "focus-timer-with-website-blocking-mac": {
    slug: "focus-timer-with-website-blocking-mac",
    title: "Mac İçin İnşa Edilmiş Web Sitesi Engelleme ile Odak Zamanlayıcı",
    description: "Zamanlayıcı yalnız distraksiyon sekme açmanızı engel değildir ve bir engel yalnız çalışmanızı yapı vermez. Kombinasyon yapılmış görünüyor işte.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Zamanlayıcı yalnız çalışma oturumunuzu yapı vermez ve bir engel yalnız zamanlı olmaz. Kombinasyon ilişkili tarafından yapı ve dağıtılmış koruması hem sağlamak gerekir.</p>

<h2>Lock In! — Her İkisini</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, yapı ve engelleme yapıyor. Zamanlayıcı ayarlayın, engel listesi yapılandırın, oturum başlatın. Engelleme tüm dönem boyunca etkin kalır, zamanlayıcı yapı sağlar ve oturum bittiğinde her şey açılır.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Mac için web sitesi engelleme ile odak zamanlayıcı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Pomodoro Aralıkları</h3>
<p>Yapı mola araları ile sprintler. Engelleme ve zamanlayıcı her ikisi ile çalışma ve uyandırılmış zamanlar yapılandırılmış.</p>

<h3>Sıkı Mod Erken Bitme Engelleme</h3>
<p>Oturum başladığında, iptal etme seçeneği var. Zamanlayıcı ve engelleme tamamen tutulur.</p>

<p>Zamanlayıcı artı engelleme gerçek çalışma süresi yapar. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "mac-productivity-apps-for-adhd": {
    slug: "mac-productivity-apps-for-adhd",
    title: "ADHD İçin Mac Verimlilik Uygulamaları — Otomatik Olarak Dikkat Dağıtmaları Engelle",
    description: "Standart verimlilik tavsiyesi dikkat dağıtmaları saklamak hatırlamayın varsayar. ADHD beynin için daha güvenilir düzeltme tamamen seçeneği kaldırmaktır.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Standart verimlilik tavsiyesi, dikkat dağıtmalarından uzak kalmanızı hatırlayacağınızı varsayar. ADHD beyinde, daha güvenilir düzeltme, tarafsız seçeneği sahneden kaldırmak ve depolamaktan biraz tarafsız seçeneği kaldırmaktır. Engelleme olan, bir yaklaşımdır, hatırlamak yerine.</p>

<h2>ADHD Beyinleri Çalışması İçin Engelleme Kritik</h2>
<p>İmpulsivite ve dikkat dağıtma ADHD belirtileridir. Engelleme yapısından gerekli kaçışları kaldırır. Uygulamaları yükleme seçeneği veya siteleri ziyaret etme seçeneği çıkarırsanız, dikkat dağıtma gerçekleşmez ve odak doğal olarak gelişebilir.</p>

<h2>Lock In! — ADHD-Friendly Engelleme</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, sistem genelinde engelleme ve ön ayar listeleri ile odak sağlayan ADHD beyinleri için yapılandırılmıştır.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! ADHD verimlilik Mac için" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Seçeneği Kaldırın, Çalışma Otomatik</h3>
<p>Dikkat dağıtmalar olamaz, tarafsız seçeneği olamaz, odak doğal olarak ortaya çıkar. Açık listeler, seçenek kaldırma en yaklaşım uygulanabilir ADHD.</p>

<p>Engelleme düzeltilme ADHD. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
  "schedule-website-blocking-mac": {
    slug: "schedule-website-blocking-mac",
    title: "Mac'te Web Sitesi Engellemeyi Zamanla",
    description: "El ile engelleyiciyi her sabah başlatmak hatırlanacak bir şey ve unutmuş olduğunuz günler genellikle en çok gerekli günlerdir. Otomatikleştirme işte.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Her sabah el ile bir engellenci başlatmak hatırlanacak bir şey daha ve unutmuş olduğunuz günler genellikle çok ön blokla en çok ihtiyaç duyduğunuz günlerdir. Otomatikleştirme tutarlılığı korur.</p>

<h2>Zamanlanmış Engelleme Yapan</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a>, belirli saatlerde otomatik olarak engellemeyi başlatmak için kez çizelgeleri ile birlikte gelir. Engel dönemi sırasında otomatik etkinleştirir ve devre dışı bırakır.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Mac'te zamanlanmış web sitesi engelleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zamanlamaları Ayarla</h3>
<p>Her sabah 9'da başlat, öğle molası kapatıp, öğleden sonra saat 1'de yeniden başlat. Her gün otomatik çalışır, hatırlamadan.</p>

<h3>Rememebr Değil, Otomatik Yapın</h3>
<p>Tutarlılık Farkı Yapıyor. Zamanlamayı belirleyin, bir kez konfigüre edin ve hepsi işler. Hatırlamaya güvenmek kaldırılmış, otomatikleştirme kalır.</p>

<p>Tutarlı engelleme tutarlı çalışma yapıyor. <a href="https://apps.apple.com/app/lockin/id6802325423">Mac App Store'dan Lock In! edinin</a></p>
`,
  },
};
