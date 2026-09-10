import type { ArticleSet } from "./index";

export const trArticles: ArticleSet = {
  "rename-multiple-files-mac": {
    slug: "rename-multiple-files-mac",
    title: "Mac'te Birden Fazla Dosya Nasıl Yeniden Adlandırılır",
    description: "Dosyaları tek tek yeniden adlandırmak, asıl işinize ayırabileceğiniz saatleri boşa harcamanıza neden olur. macOS size birkaç yerleşik seçenek sunar, ancak temel sıralı adlandırmanın ötesinde bir şeye ihtiyaç duyduğunuz anda bu seçenekler yetersiz kalır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Adları berbat olan dosyalarla dolu bir klasörünüz var. Belki bir kameradan, bir tarayıcıdan ya da "final_final_v3_GERCEK.pdf" adını kabul edilebilir bir adlandırma kuralı sanan bir müşteriden geldiler. Hepsini düzenli bir şeye dönüştürmeniz gerekiyor. Mac'te birkaç seçeneğiniz var — ama çoğu şaşırtıcı derecede hızlı bir şekilde duvara toslar.</p>

<p>Finder'da dosyaları tek tek yeniden adlandırarak yirmi dakika harcadıysanız, bu acıyı zaten biliyorsunuzdur. Finder'ın yerleşik toplu yeniden adlandırma özelliğini denediyseniz de, temel işlevleri karşıladığını ama gerçek bir kontrole ihtiyaç duyduğunuz anda sizi çaresiz bıraktığını bilirsiniz.</p>

<h2>macOS'un kutudan çıkardığı özellikler</h2>

<p>Finder'ın gerçekten bir toplu yeniden adlandırma özelliği var. Birden fazla dosya seçin, sağ tıklayın ve "Yeniden Adlandır"ı seçin. Üç mod elde edersiniz: metni değiştir, metin ekle veya biçimlendir (sıralı numaralandırma). Basit işler için — bir önek eklemek veya bir kelimeyi değiştirmek gibi — işe yarar. Ancak sınırlamalar hızla ortaya çıkar:</p>

<ul>
  <li>Regex veya kalıp eşleştirme yok</li>
  <li>Belirli karakterleri konuma göre kaldırma imkânı yok</li>
  <li>İşlemi onaylamadan önce son adların nasıl görüneceğine dair önizleme yok</li>
  <li>Çok adımlı yeniden adlandırma yok — tek seferde tek işlem yapabilirsiniz</li>
  <li>Yüzlerce dosya üzerinde bir hata yaparsanız geri alma yok</li>
</ul>

<p>Basit yeniden adlandırmanın ötesindeki her şey için özel bir araca ihtiyacınız var.</p>

<h2>Görsel işlem hattı yaklaşımı</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, toplu yeniden adlandırmaya farklı bir yaklaşım getiriyor. Tek bir metin alanı ve bir "başlat" düğmesi yerine, yeniden adlandırma eylemlerinden oluşan görsel bir işlem hattı (pipeline) oluşturursunuz. Her adım dosya adını dönüştürür ve ihtiyacınız kadar adımı üst üste ekleyebilirsiniz.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym toplu dosya yeniden adlandırma işlem hattı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sürükleyin, önizleyin, uygulayın</h3>

<p>Dosyalarınızı Renym'e sürükleyin ve mevcut adların yanında ne hâle geleceklerinin canlı önizlemesini anında görün. Eklediğiniz her eylem önizlemeyi gerçek zamanlı olarak günceller, böylece tek bir dosyaya bile dokunmadan sonucun tam olarak nasıl görüneceğini bilirsiniz.</p>

<h3>Birden fazla işlemi üst üste ekleyin</h3>

<p>Bir önek kaldırmanız, alt çizgileri tire ile değiştirmeniz ve sıralı numaralar eklemeniz mi gerekiyor? Üç adımlı bir işlem hattı oluşturun. Her adım bir sonrakini besler ve baştan başlamadan adımları yeniden sıralayabilir veya kaldırabilirsiniz.</p>

<h3>Bir şeyler ters gittiğinde geri alın</h3>

<p>300 dosyayı yeniden adlandırdınız ve ikinci adımın yanlış olduğunu mu fark ettiniz? Renym geri almayı destekler, böylece tüm grubu eski hâline döndürüp tekrar deneyebilirsiniz. Adları tek tek elle düzeltmeye gerek yok.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "batch-rename-photos-mac": {
    slug: "batch-rename-photos-mac",
    title: "Mac'te Fotoğraflar Nasıl Toplu Olarak Yeniden Adlandırılır",
    description: "IMG_4872.JPG gibi adlandırılmış kamera dosyaları, fotoğrafta ne olduğu veya çekimin ne zaman yapıldığı hakkında hiçbir şey söylemez. Tek bir seanstan yüzlerce fotoğrafınız olduğunda bunları elle yeniden adlandırmak gerçekçi değildir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>İster DSLR, ister aynasız, ister iPhone olsun, her kamera IMG_4872.JPG, DSC_0034.CR2 veya P1040291.RW2 gibi adlara sahip dosyalar üretir. Bu adların hiçbir anlamı yoktur. Bir düğün çekiminden veya ürün seansından 400 fotoğrafınız olduğunda, doğru görseli bulmak için anlamsız numaralar arasında gezinmek zaman kaybıdır.</p>

<p>"Johnson_Wedding_001.jpg" veya "Product_Shoot_March_001.CR2" gibi adlar istersiniz — gerçekten arayabileceğiniz ve sıralayabileceğiniz bir şey. Ama 400 dosyayı elle yeniden adlandırmak gerçekçi değil.</p>

<h2>Finder fotoğraf yeniden adlandırma için neden yetersiz kalır</h2>

<p>Finder'ın toplu yeniden adlandırması sıralı numara ekleyebilir ve metin değiştirebilir, ama fotoğrafçıların daha fazlasına ihtiyacı vardır:</p>

<ul>
  <li>Orijinal kamera önekini (IMG_, DSC_ vb.) kaldırıp özel bir adla değiştirmek</li>
  <li>Sıfırla dolgulu sıralı numaralar eklemek (1, 2, 3 yerine 001, 002, 003)</li>
  <li>Diğer her şeyi değiştirirken dosya uzantılarını korumak</li>
  <li>Aynı çekimden gelen karışık biçimleri (JPG + RAW) yönetmek</li>
  <li>Yeniden adlandırmayı onaylamadan önce 400 adın tamamını önizlemek</li>
</ul>

<p>Finder bunların bir kısmını yapabilir, ama hepsini birden değil ve hiçbir zaman tüm grubun canlı önizlemesiyle değil.</p>

<h2>Fotoğraf gruplarını bir işlem hattıyla yeniden adlandırma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, işlemleri birbirine zincirlemenize olanak tanıyan görsel bir işlem hattıyla fotoğraf yeniden adlandırmayı halleder. İşte tipik bir fotoğraf yeniden adlandırma iş akışı:</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile bir fotoğraf grubunun yeniden adlandırılması" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>1. Adım: Kamera önekini kaldırın</h3>

<p>Her dosya adından "IMG_" veya "DSC_" ifadesini kaldırmak için bul ve değiştir işlevini kullanın. Bu, tüm grup üzerinde tek seferde çalışır.</p>

<h3>2. Adım: Açıklayıcı bir ad ekleyin</h3>

<p>Kendi önekinizi ekleyin — müşteri adı, proje adı veya çekim açıklaması. Gruptaki her dosya aynı öneki alır.</p>

<h3>3. Adım: Sıralı numaralandırma ekleyin</h3>

<p>Dosyaların doğru sıralanması için sıfırla dolgulu numaralar ekleyin. Sıfır dolgusu olmadan elde edeceğiniz 1, 10, 100, 2, 20 yerine 001, 002, 003.</p>

<h3>Onaylamadan önce canlı önizleme</h3>

<p>Her adım canlı bir önizleme sütununu günceller. Solda "IMG_4872.JPG", sağda "Johnson_Wedding_001.JPG" görürsünüz. Tahmin yok, hata yok, kötü bir yeniden adlandırmanın ardından 400 dosyayı elle düzeltmek yok.</p>

<p>Bir şey yanlış görünüyorsa adımları yeniden sıralayın, bir parametreyi ayarlayın veya bir adımı tamamen kaldırın. Önizleme anında güncellenir.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-files-regex-mac": {
    slug: "rename-files-regex-mac",
    title: "Mac'te Dosyalar Regex ile Nasıl Yeniden Adlandırılır",
    description: "Dosya adları belirli kalıplar izlediğinde — metnin içine gömülü tarihler, sürüm numaraları, rastgele önekler — basit bul ve değiştir bunların üstesinden gelemez. Düzenli ifadeler (regex) gelebilir, ama macOS yerleşik olarak regex ile yeniden adlandırma sunmaz.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>"report_2026-03-15_draft_v2.pdf" gibi dosyalarla dolu bir klasörünüz var ve yalnızca tarihi çıkarıp yeniden biçimlendirmeniz, alt çizgiden sonraki her şeyi kaldırmanız veya dosyadan dosyaya değişen bir kalıbı değiştirmeniz gerekiyor. Basit metin değiştirme bunun üstesinden gelemez çünkü metin her dosyada aynı değildir — bir kalıp izler.</p>

<p>Düzenli ifadeler (regex), kalıp tabanlı metin işleme için kullanılan araçtır. Kesin dize eşleşmeleri yerine kurallara dayalı olarak bir dosya adının bölümlerini eşleştirmenize, yakalamanıza ve yeniden düzenlemenize olanak tanır. Sorun şu ki macOS, Finder'ın hiçbir yerinde regex ile yeniden adlandırma sunmaz.</p>

<h2>Terminal yaklaşımı ve çoğu insanın bundan neden kaçındığı</h2>

<p>Dosyaları <code>rename</code>, <code>sed</code> gibi Terminal komutlarını veya parametre genişletmeli bir bash döngüsünü kullanarak regex ile yeniden adlandırabilirsiniz. Örneğin:</p>

<p><code>for f in *.pdf; do mv "$f" "$(echo "$f" | sed 's/draft_v[0-9]*/final/')"; done</code></p>

<p>Bu işe yarar, ama gerçek dezavantajları vardır:</p>

<ul>
  <li>Önizleme yok — sonucu ancak yeniden adlandırma gerçekleştikten sonra görürsünüz</li>
  <li>Regex'te tek bir yazım hatası, geri alma imkânı olmadan bozulmuş dosya adları anlamına gelir</li>
  <li>Tek satırlık bir komutta regex yazmak ve hata ayıklamak zahmetlidir</li>
  <li>Teknik olmayan kullanıcılar bu yaklaşımı gerçekçi bir şekilde kullanamaz</li>
</ul>

<p>Deneyimli geliştiriciler bile geri döndürülemez hata riski çok yüksek olduğu için büyük gruplarda Terminal ile yeniden adlandırmadan kaçınır.</p>

<h2>Canlı önizlemeli regex ile yeniden adlandırma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, bul ve değiştir eyleminde tam regex desteği sunar. Bir regex kalıbı yazar, bir değiştirme tanımlarsınız (yakalama grubu referansları dahil) ve hiçbir şey yeniden adlandırılmadan önce sonucu her dosyada gerçek zamanlı olarak görürsünüz.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta canlı önizlemeli Renym regex dosya yeniden adlandırma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Yakalama grupları iş başında</h3>

<p>Diyelim ki dosyalarınız "2026-03-15_project_alpha.pdf" olarak adlandırılmış ve "project_alpha_2026-03-15.pdf" istiyorsunuz. Tarihi ve proje adını ayrı gruplar olarak yakalayan bir regex yazın, ardından değiştirme alanında bunları yeniden düzenleyin. Önizleme sütunu her dosyanın yeni adını anında gösterir.</p>

<h3>Kalıp tabanlı temizleme</h3>

<p>"_v1", "_v2", "_v14" gibi tüm sürüm son eklerini kaldırmanız mı gerekiyor? <code>_v\\d+</code> gibi bir regex, numaradan bağımsız olarak bunların hepsiyle eşleşir. Tek eylem, tek kalıp, her dosya temizlendi.</p>

<h3>Regex'i diğer eylemlerle birleştirin</h3>

<p>Regex, işlem hattındaki eylemlerden yalnızca biridir. Bir regex değiştirmesinin ardından sıralı numaralandırma ekleyebilir, büyük/küçük harfi değiştirebilir veya metin ekleyebilirsiniz. Her adım bir öncekinin üzerine inşa edilir ve önizleme tüm zinciri yansıtır.</p>

<p>Bir Terminal yeniden adlandırma komutunda hata ayıklarken bir saatinizi kaybettiyseniz veya sonucu önizlemenin bir yolu olmadığı için regex'ten tamamen kaçındıysanız, Renym her iki sorunu da aynı anda çözer.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "mac-finder-rename-limitations": {
    slug: "mac-finder-rename-limitations",
    title: "Mac Finder'ın Yeniden Adlandırma Özelliği Sınırlı — İşte Yapamadıkları",
    description: "Finder'ın yeniden adlandırma aracı temel işleri halleder, ama regex'e, çok adımlı işlemlere veya gerçek bir önizlemeye ihtiyaç duyduğunuz anda yardımcı olamaz. İşte nerede yetersiz kaldığı ve yerine ne kullanmanız gerektiği.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Apple, yıllar önce Finder'a toplu yeniden adlandırma özelliği ekledi ve basit işler için gayet iyi. Dosyaları seçin, sağ tıklayın, "X Öğeyi Yeniden Adlandır", bir seçenek belirleyin, tamamdır. Ama biraz daha karmaşık bir şey yapmayı denediyseniz — belirli bir konumdan karakter kaldırmak, iki yeniden adlandırma işlemini zincirlemek veya bir kalıp eşleşmesi kullanmak gibi — duvara tosladınız demektir. Finder'ın yeniden adlandırma özelliği başlangıç seviyesi bir araçtır ve yıllardır anlamlı bir şekilde geliştirilmedi.</p>

<h2>Finder yeniden adlandırma neler yapabilir</h2>

<p>Adil olmak gerekirse, Finder üç temel işlemi kapsar:</p>

<ul>
  <li><strong>Metni Değiştir:</strong> Bir dizeyi bulup başka biriyle değiştirir. Seçili tüm dosyalarda aynı anda çalışır.</li>
  <li><strong>Metin Ekle:</strong> Her dosya adının başına veya sonuna bir dize ekler.</li>
  <li><strong>Biçimlendir:</strong> Özel bir önekle sıralı numaralar uygular. Bir başlangıç numarası ve artış değeri seçersiniz.</li>
</ul>

<p>On dosyada "Report"u "Invoice" olarak değiştirmek veya bir tarih öneki eklemek için bu tamamen yeterlidir.</p>

<h2>Finder yeniden adlandırmanın yetersiz kaldığı yerler</h2>

<h3>Regex veya kalıp eşleştirme yok</h3>
<p>Finder'ın değiştirme özelliği yalnızca birebir metinle çalışır. "Herhangi bir rakam" veya "son alt çizgiden sonraki her şey" gibi kalıpları eşleştiremezsiniz. Dosya adlarınızın yapısı değişkense Finder yardımcı olamaz.</p>

<h3>Çok adımlı işlem yok</h3>
<p>Her yeniden adlandırmada tek bir işlem yapabilirsiniz. Metni değiştirmeniz VE bir numara eklemeniz VE büyük/küçük harfi değiştirmeniz gerekiyorsa, her seferinde dosyaları yeniden seçerek üç ayrı yeniden adlandırma işlemi çalıştırmanız gerekir.</p>

<h3>Gerçek bir önizleme yok</h3>
<p>Finder, yeniden adlandırma iletişim kutusunda ilk dosyanın yeni adından bir örnek gösterir, ama önce-sonra adlarının tam listesini göremezsiniz. 200 dosya için, tek bir örneğin tüm grubu temsil ettiğine güvenmiş olursunuz.</p>

<h3>Konuma göre karakter kaldırma yok</h3>
<p>Her dosya adının ilk 4 karakterini kaldırmanız mı gerekiyor? Ya da son 8'ini? Finder'da bunun için bir işlem yok. Elle bir değiştirme oluşturmanız gerekir ve bu da yalnızca o karakterler tüm dosyalarda tesadüfen aynıysa işe yarar.</p>

<h3>Toplu yeniden adlandırmalar için geri alma yok</h3>
<p>500 dosyayı yeniden adlandırırsanız ve sonuç yanlışsa, Command-Z bunu geri alır — ama yalnızca hemen ardından. Finder penceresini kapatın ya da başka bir işlem yapın, geri alma geçmişi kaybolur. Adları elle düzeltmek size kalır.</p>

<h2>Bunun yerine ne kullanılır</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, tam olarak Finder'ın bıraktığı yerden devam eder. Finder'ın sahip olduğu her işlemi — artı regex, konuma göre karakter kaldırma, büyük/küçük harf değişiklikleri, çok adımlı işlem hatları ve gruptaki her dosya için tam bir önce-sonra önizlemesi sunar.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Finder sınırlamalarına karşı Renym görsel yeniden adlandırma işlem hattı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Yeniden adlandırma eylemlerinden oluşan bir işlem hattı oluşturur, bunları yeniden sıralar, sonucu her dosyada önizler ve memnun kaldığınızda uygularsınız. Memnun kalmazsanız, tüm grubu geri alıp ayarlama yaparsınız. Tahmin yok, tekrar tekrar seçim yapmak yok, 500 dosyanın doğru çıkmasını ummak yok.</p>

<p>Finder'ın yeniden adlandırma özelliği, yeniden adlandırma işlerinin önemsiz olan yüzde 10'u için idare eder. Geri kalan her şey için gerçek bir araca ihtiyacınız var.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "name-mangler-alternative-mac": {
    slug: "name-mangler-alternative-mac",
    title: "Mac için Name Mangler Alternatifi",
    description: "Regex, sıralı numaralandırma ve çok adımlı işlem hatlarını, eski araçların öğrenme eğrisi olmadan halleden bir dosya yeniden adlandırma uygulaması mı arıyorsunuz? İşte modern bir seçenek.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Name Mangler, yıllardır Mac'te başvurulan bir toplu dosya yeniden adlandırma aracı oldu. Güçlüdür, regex'i destekler ve karmaşık yeniden adlandırma zincirlerini yönetir. Ama aynı zamanda pek fazla gelişmemiş bir tasarımın yükünü de taşır. Name Mangler'ı denediyseniz ve olması gerekenden daha karmaşık bulduysanız — ya da modern macOS'a özgü hissettiren bir alternatif arıyorsanız — göz atmaya değer daha yeni bir seçenek var.</p>

<h2>İnsanların Name Mangler'da sevdiği şeyler</h2>

<p>Name Mangler, itibarını haklı nedenlerle kazandı:</p>

<ul>
  <li>Kalıp tabanlı yeniden adlandırma için regex desteği</li>
  <li>Çok adımlı yeniden adlandırma zincirleri ("droplet" ve "gelişmiş" mod olarak adlandırılır)</li>
  <li>Uygulamadan önce dosya adlarının önizlemesi</li>
  <li>Geniş bir yeniden adlandırma işlemi yelpazesini destekler</li>
</ul>

<p>Arayüzü öğrenmiş güçlü kullanıcılar için işe yarar. Ama birçok kullanıcı arayüzün eski hissettirdiğini, basit bir iş olması gereken şey için öğrenme eğrisinin dik olduğunu ve daha basit iş akışlarının beklenenden fazla tıklama gerektirdiğini bildiriyor.</p>

<h2>Bir alternatifte nelere dikkat etmeli</h2>

<p>İyi bir Name Mangler alternatifi, arayüzü daha erişilebilir hale getirirken gücü — regex, çok adımlı işlem hatları, canlı önizleme — korumalıdır. Somut olarak:</p>

<ul>
  <li>Adımları görüp yeniden sıralayabileceğiniz görsel bir işlem hattı oluşturucusu</li>
  <li>Menü tabanlı dosya seçimi yerine sürükle-bırak dosya girişi</li>
  <li>Her adımı düzenledikçe güncellenen gerçek zamanlı önizleme</li>
  <li>Tüm yeniden adlandırma işlemi için tam geri alma desteği</li>
  <li>On yıl önce tasarlanmış gibi hissettirmeyen, macOS'a özgü bir görünüm</li>
</ul>

<h2>Bir alternatif olarak Renym</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, Name Mangler ile aynı temel özellik setini kapsar — regex ile bul ve değiştir, sıralı numaralandırma, karakter ekleme ve kaldırma, büyük/küçük harf değişiklikleri — ama bunu görsel bir işlem hattı arayüzüne sarar.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta bir Name Mangler alternatifi olarak Renym" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Görsel işlem hattı</h3>
<p>Her yeniden adlandırma eylemi, işlem hattında görünür bir adımdır. Yeniden sıralamak için sürükleyin, düzenlemek için tıklayın, kaldırmak için silin. Sekmeler veya iletişim kutuları arasında gezinmeden zinciri bir bakışta görürsünüz.</p>

<h3>Sürükle-bırak iş akışı</h3>
<p>Dosyaları doğrudan uygulamaya sürükleyin. Dosya seçici iletişim kutusu yok, menüde gezinme yok. Bir klasörü veya dosya seçimini bırakın ve işlem hattınızı hemen oluşturmaya başlayın.</p>

<h3>Canlı önce-sonra önizlemesi</h3>
<p>Her dosya, mevcut adını ve yeni adını yan yana gösterir. İşlem hattındaki herhangi bir adımı düzenledikçe değişiklikler gerçek zamanlı olarak güncellenir. Yalnızca bir örneği değil, her dosyadaki tam sonucu görürsünüz.</p>

<h3>Tam geri alma</h3>
<p>Bir yeniden adlandırma uyguladınız ve sonuç doğru değil mi? Tüm grubu geri alın ve tekrar deneyin. 500 dosya adını elle geri döndürmeye gerek yok.</p>

<p>Name Mangler her zaman başvurduğunuz araç olduysa ve aynı gücü daha temiz bir deneyimle istiyorsanız, Renym'e göz atmaya değer.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-hundreds-of-files-mac": {
    slug: "rename-hundreds-of-files-mac",
    title: "Mac'te Yüzlerce Dosya Tek Seferde Nasıl Yeniden Adlandırılır",
    description: "On dosyayı elle yeniden adlandırmak sıkıcıdır. Yüzlerce dosyayı yeniden adlandırmak ise doğru araç olmadan imkânsızdır. macOS'un yerleşik seçenekleri sınırlıdır ve Terminal yaklaşımı geri döndürülemez hatalar riski taşır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir tarayıcıdan, bir dışa aktarmadan, bir veri taşımasından veya bir müşteri teslimatından gelen 600 dosyanız var. Adlar berbat — rastgele diziler, tekrarlanan önekler, tutarsız biçimlendirme, yanlış uzantılar. 600 dosyanın tamamının düzenli, aranabilir ve tutarlı bir şeye yeniden adlandırılması gerekiyor. Hem de hemen.</p>

<p>On dosyayı elle yeniden adlandırmak bir dakika sürer. 600 dosyayı yeniden adlandırmak öğleden sonranızın tamamını alır — ve hatalar yaparsınız. Yazım hataları, atlanan dosyalar, tutarsız biçimlendirme. Grup büyüdükçe elle yeniden adlandırma daha da hataya açık hale gelir.</p>

<h2>Büyük gruplar alışılagelmiş yaklaşımları neden bozar</h2>

<h3>Finder</h3>
<p>Finder'ın toplu yeniden adlandırması, herhangi bir sayıda dosyada basit işlemleri halleder. Ama 600 dosya için tam bir önizleme eksikliği gerçek bir sorundur. İletişim kutusunda bir örnek dosya adı görür ve diğer 599'unun doğru çıkmasını umarsınız. Doğru çıkmazlarsa, geri alma artık mümkün olmadığında fark edebilirsiniz.</p>

<h3>Terminal</h3>
<p>Bir bash döngüsü veya bir <code>rename</code> komutu 600 dosyayı saniyeler içinde işleyebilir. Ama önizleme yok, geri alma yok ve komuttaki tek bir hata 600 bozuk dosya adı anlamına gelir. Risk, grup boyutuyla birlikte artar.</p>

<h3>Elektronik tabloyla yeniden adlandırma</h3>
<p>Bazı kişiler dosya adlarını bir elektronik tabloya aktarır, formüllerle işler ve ardından yeni adları uygulamak için bir betik kullanır. Bu işe yarar ama sürükle-bırak bir işlem olması gereken bir şey için saçma derecede fazla kurulum gerektirir.</p>

<h2>Ölçekte güvenle yeniden adlandırma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, tam olarak bu senaryo için tasarlandı. Yüzlerce dosyayı sürükleyin, bir yeniden adlandırma işlem hattı oluşturun, her bir sonucu önizleyin ve uygulayın. Sonuç yanlışsa, geri alın ve ayarlayın.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile yüzlerce dosyanın tek seferde yeniden adlandırılması" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Her ölçekte tam önizleme</h3>
<p>İster 20 dosyanız olsun ister 2.000, önizleme her dosyanın mevcut ve gelecekteki adını gösterir. Onaylamadan önce listede gezinip doğrulayın. Tahmin yok.</p>

<h3>Karmaşık yeniden adlandırmalar için çok adımlı işlem hatları</h3>
<p>Büyük gruplar genellikle birden fazla işlem gerektirir: bir öneki kaldırmak, karakterleri değiştirmek, numaralandırma eklemek, büyük/küçük harfi değiştirmek. Tüm zinciri oluşturun, son sonucu önizleyin ve her şeyi tek seferde uygulayın.</p>

<h3>Tüm grubu geri alın</h3>
<p>Yeniden adlandırmayı uyguladınız ve bir sorun mu fark ettiniz? Geri alma, gruptaki her dosyayı eski hâline döndürür. İşlem hattını düzeltin ve tekrar deneyin. Yüzlerce adı elle geri döndürmeye gerek yok.</p>

<p>Grup ne kadar büyükse, özel bir araç kendini o kadar amorti eder. Renym'de beş dakika harcamak, saatlerce elle çalışmadan tasarruf ettirir ve geri döndürülemez hata riskini ortadan kaldırır.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "sequential-numbering-files-mac": {
    slug: "sequential-numbering-files-mac",
    title: "Mac'te Dosya Adlarına Sıralı Numaralar Nasıl Eklenir",
    description: "Belirli bir sırada kalması gereken dosyalar — slaytlar, kareler, sayfalar, bölümler — yalnızca tutarlı dolgulu sıralı numaralara sahip olduklarında doğru şekilde sıralanır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Belirli bir sırada olması gereken bir dosya setiniz var: sunum slaytları, animasyon kareleri, kitap bölümleri, podcast bölümleri veya taranmış sayfalar. Bunları doğru sırada tutmanın tek güvenilir yolu, dosya adlarına sıralı numaralar eklemektir. Kulağa basit geliyor. Değil — en azından doğru araç olmadan.</p>

<h2>Sıfır dolgusu sorunu</h2>

<p>Dosyaları 1, 2, 3 ... 10, 11, 12 şeklinde numaralandırırsanız, dosya yöneticiniz bunları şöyle sıralar:</p>

<ul>
  <li>1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9</li>
</ul>

<p>Bunun nedeni, çoğu dosya sisteminin sayısal değil alfabetik olarak sıralama yapmasıdır. "10", "2"den önce gelir çünkü ilk karakter konumunda "1", "2"den önce gelir. Çözüm sıfır dolgusudur: 01, 02, 03 ... 10, 11, 12. Daha büyük setler için daha fazla basamağa ihtiyacınız vardır: 001, 002, 003 ... 100, 101.</p>

<p>Dolgu miktarını doğru ayarlamak önemlidir. Çok az basamak, daha fazla dosya eklediğinizde sıralamanızı bozar. Çok fazlası ise adları dağınık gösterir. Ayrıca numaranın dosya adının başında mı yoksa sonunda mı olacağına karar vermeniz gerekir.</p>

<h2>macOS'un yerleşik olarak sunduğu</h2>

<p>Finder'ın "Biçimlendir" yeniden adlandırma seçeneği, özel bir ad önekiyle sıralı numaralar ekleyebilir. Sıfır dolgusunu halleder ve bir başlangıç numarası ayarlamanıza olanak tanır. Basit bir numaralandırma işi için bu işe yarar.</p>

<p>Ama Finder numaralandırmasının sınırları vardır:</p>

<ul>
  <li>Numarayı yalnızca başa veya sona ekleyebilirsiniz — belirli bir konuma ekleyemezsiniz</li>
  <li>Numaralandırmayı metin değiştirme gibi başka işlemlerle birleştiremezsiniz</li>
  <li>Numaralandırma, uzantı hariç dosya adının tamamının yerini alır — orijinal adı kaybedersiniz</li>
  <li>Artış değerini kontrol edemezsiniz (her zaman 1 artar)</li>
</ul>

<h2>Bir işlem hattının parçası olarak sıralı numaralandırma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, bir yeniden adlandırma işlem hattına ekleyebileceğiniz birkaç eylemden biri olarak sıralı numaralandırmayı içerir. Bu, numaralandırmayı başka herhangi bir işlemle birleştirebileceğiniz anlamına gelir.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym'in dosya adlarına sıralı numara eklemesi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Orijinal adı koruyun ve bir numara ekleyin</h3>
<p>Finder'ın biçimlendirme modunun aksine, Renym mevcut dosya adını silmeden bir numara eklemenize olanak tanır. "project_brief.pdf"i olduğu gibi korurken önek olarak "001_" ekleyin, sonuç "001_project_brief.pdf" olsun.</p>

<h3>Diğer eylemlerle birleştirin</h3>
<p>Önce adı temizleyin — istenmeyen önekleri kaldırın, büyük/küçük harfi düzeltin, karakterleri değiştirin — sonra son adım olarak numaralandırma ekleyin. İşlem hattı yaklaşımı, her işlemin bir öncekinin üzerine inşa edilmesi anlamına gelir.</p>

<h3>Sırayı önizleyin</h3>
<p>Uygulamadan önce numaralandırılmış her dosya adını görün. Dolgunun doğru olduğunu, sıranın doğru olduğunu ve numaraların istediğiniz yerde göründüğünü doğrulayın.</p>

<p>Sıralı numaralandırma, 200 dosyanız olana ve sıralama düzeni bozulana kadar önemsiz görünen işlerden biridir. İlk seferde doğru yapmak, sonradan çok fazla temizlik yapmaktan kurtarır.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "remove-characters-from-filenames-mac": {
    slug: "remove-characters-from-filenames-mac",
    title: "Mac'te Dosya Adlarından Toplu Olarak Karakter Nasıl Kaldırılır",
    description: "Dosya adlarını dolduran fazladan karakterler, rastgele önekler veya istenmeyen son ekler aramayı ve sıralamayı zorlaştırır. Onlarca veya yüzlerce dosyanız varken bunları tek tek temizlemek gerçekçi değildir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Dışa aktarılan dosyalar adlarınıza gönüllü olarak gereksiz şeyler eklemeyi sever. Bir tarayıcı her şeye "Scan_" ekler. Bir CMS 12 karakterlik bir kimlik ekler. Bir indirme, dosya zaten var olduğu için sonuna "(1)" ekler. Bir müşteri, düzenli klasörünüzü kaosa çeviren boşluklar, özel karakterler ve tutarsız büyük/küçük harf kullanımına sahip dosyalar gönderir.</p>

<p>Bu fazladan karakterleri onlarca veya yüzlerce dosyadan çıkarmanız gerekiyor. Bunu elle yapmak, her tek dosya için tıklama, seçme, silme ve Enter'a basma anlamına gelir. Bu bir iş akışı değil — bir ceza.</p>

<h2>Finder'da yapamayacaklarınız</h2>

<p>Finder'ın yeniden adlandırma aracı metin bulup değiştirmenize izin verir, bu da bazı karakter kaldırma işlerini halleder. Her dosyanın başında "Scan_" varsa, "Scan_"ı hiçbir şeyle değiştirebilirsiniz. Ama Finder şunları yapamaz:</p>

<ul>
  <li>Karakterleri konuma göre kaldırmak (örneğin, "ilk 5 karakteri sil")</li>
  <li>Karakterleri sondan kaldırmak (örneğin, "son alt çizgiden sonraki her şeyi sil")</li>
  <li>Bir kalıpla eşleşen karakterleri kaldırmak (örneğin, "(1), (2), (copy) gibi herhangi bir parantezli ifadeyi sil")</li>
  <li>Tek bir işlemde birden fazla kaldırma işlemini zincirlemek</li>
</ul>

<p>Kaldırmanız gereken karakterler tüm dosyalarda aynı değilse, Finder'ın birebir metin eşleştirmesi yardımcı olmaz.</p>

<h2>Renym ile toplu karakter kaldırma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, dosya adlarından karakter kaldırmanın birden fazla yolunu sunar ve bunları tek bir işlem hattında birleştirebilirsiniz.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile dosya adlarından toplu karakter kaldırma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Konuma göre kaldırma</h3>
<p>Her dosya adından ilk N veya son N karakteri silin. İçeriği değişen ama uzunluğu değişmeyen sabit uzunluklu önekleri veya son ekleri temizlemek için mükemmel.</p>

<h3>Kalıba göre kaldırma</h3>
<p>Değişken metni eşleştirip kaldırmak için regex kullanın. <code>\\s*\\(\\d+\\)</code> gibi bir kalıp, numaradan bağımsız olarak tüm "(1)", "(2)", "(3)" son eklerini kaldırır. <code>^[A-Z]{3}_</code> gibi bir kalıp ise bir alt çizgiyle biten herhangi bir üç harfli öneki temizler.</p>

<h3>Bul ve değiştir ile kaldırma</h3>
<p>Basit durumlar için, istenmeyen metni bulun ve hiçbir şeyle değiştirin. "Copy of ", "Scan_" veya " - final" gibi tutarlı diziler için işe yarar.</p>

<h3>Kaldırma işlemlerini zincirleyin</h3>
<p>Bir öneki kaldırmanız VE parantezli son ekleri kaldırmanız VE geriye kalan çift boşlukları temizlemeniz mi gerekiyor? İşlem hattına üç eylem ekleyin. Her biri bir önceki adımın sonucu üzerinde çalışır ve canlı önizleme size her dosya için son sonucu gösterir.</p>

<p>Dosya adları temiz, tutarlı ve aranabilir olmalıdır. Değillerse, Renym'de beş dakikalık bir oturum tüm grubu düzeltir.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "change-file-extension-batch-mac": {
    slug: "change-file-extension-batch-mac",
    title: "Mac'te Dosya Uzantıları Toplu Olarak Nasıl Değiştirilir",
    description: "Yanlış dosya uzantıları iş akışlarını bozar, uygulamaları şaşırtır ve dosyaların yanlış programda açılmasına neden olur. Onları tek tek değiştirmek sıkıcıdır. Terminal'de yapmak ise önizleme olmadan hata riski taşır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir geliştirici 200 HTML dosyasını .txt uzantısıyla dışa aktarır. Bir fotoğrafçı .jpg olarak kaydedilmiş RAW dosyaları alır. Bir veri işlem hattı hiç uzantısı olmayan CSV dosyaları üretir. İçerik sorun değil — uzantı yanlış. Ve yanlış bir uzantı, dosyanın yanlış uygulamada açılması, aramalardan filtrelenmesi veya otomatik bir iş akışının bozulması anlamına gelir.</p>

<p>Hepsinin uzantısını değiştirmeniz gerekiyor. Tek tek değil. Hepsini birden.</p>

<h2>Finder yaklaşımı</h2>

<p>Finder teknik olarak uzantıları değiştirmenize izin verir — ama yalnızca birer birer. Sağ tıklayın, "Bilgi Al", ad alanında uzantıyı değiştirin, uzantıyı değiştirdiğiniz konusunda sizi uyaran iletişim kutusunu onaylayın. 200 dosya için bu saçma derecede fazla zaman alır.</p>

<p>Finder'ın toplu yeniden adlandırması bir metin değiştirme yapabilir, yani ".txt"i ".html" ile değiştirebilirsiniz — ama bu kırılgandır. Herhangi bir dosyanın adının başka bir yerinde ".txt" varsa (örneğin "notes_txt_backup.txt" gibi), değiştirme yanlış yeri hedef alır. Finder, "uzantı" ile "tesadüfen eşleşen metin" arasında ayrım yapmaz.</p>

<h2>Terminal yaklaşımı</h2>

<p>Basit bir bash komutu bunu halleder:</p>

<p><code>for f in *.txt; do mv "$f" "\\\${f%.txt}.html"; done</code></p>

<p>Hızlı ve etkili — ama önizleme yok, geri alma yok ve komuttaki tek bir hata 200 dosyanın adının bozulması anlamına gelir. Tırnak işaretlerini unutursanız ve bir dosya adında boşluk varsa, sonuç öngörülemez.</p>

<h2>Önizlemeli toplu uzantı değişiklikleri</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, uzantı değişikliklerini yeniden adlandırma işlem hattının bir parçası olarak halleder. Dosya adının geri kalanını etkilemeden yalnızca uzantıyı hedefleyebilirsiniz.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile dosya uzantılarını toplu değiştirme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Uzantıyı güvenli bir şekilde değiştirin</h3>
<p>Yalnızca uzantıyı değiştirmek ve dosya adının kendisindeki eşleşen metni etkilememek için adın sonuna sabitlenmiş bir regex ile bul ve değiştir kullanın. Önizleme, uygulamadan önce her dosyada tam olarak neyin değişeceğini gösterir.</p>

<h3>Eksik bir uzantı ekleyin</h3>
<p>Uzantısı olmayan dosyalar mı var? Sonuna ".csv", ".json" veya doğru uzantı her ne ise onu ekleyin. Ekleme eylemi, dosya adının sonuna, son karakterden sonra metin ekler.</p>

<h3>Diğer temizlik işlemleriyle birleştirin</h3>
<p>Genellikle uzantı sorunları başka adlandırma sorunlarıyla birlikte gelir. Uzantıyı düzeltin ve dosya adını aynı işlem hattında temizleyin — önekleri kaldırın, büyük/küçük harfi normalleştirin, numaralandırma ekleyin — hepsini tek seferde yapın.</p>

<h3>Gerekirse geri alın</h3>
<p>200 uzantıyı değiştirdiniz ve yanlışını seçtiğinizi mi fark ettiniz? Tüm grubu geri alın. İşlem hattını düzeltin ve tekrar uygulayın. 200 dosyayı elle orijinal uzantılarına geri döndürmeye gerek yok.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-files-drag-drop-mac": {
    slug: "rename-files-drag-drop-mac",
    title: "Mac'te Sürükle Bırak ile Dosya Yeniden Adlandırma",
    description: "Çoğu yeniden adlandırma aracı, dosyalarınıza bir dosya seçici aracılığıyla ulaşmanızı ister. Dosyalar zaten bir Finder penceresindeyse, onları doğrudan yeniden adlandırma aracına sürükleyebilmelisiniz.",
    date: "2026-09-06",
    readTime: "3 dk okuma",
    content: `
<p>Yeniden adlandırmanız gereken dosyaların bulunduğu açık bir Finder pencereniz var. Hangilerinin olduğunu tam olarak biliyorsunuz. Şimdi onları bir yeniden adlandırma aracına aktarmanız gerekiyor. Bu araç sizi bir dosya seçici iletişim kutusundan geçirmeye zorluyorsa — klasöre gidin, dosyaları tekrar seçin, Aç'a tıklayın — hiçbir nedeni olmadan iki kat iş yapıyorsunuz demektir.</p>

<p>Sürükle bırak, dosyaları herhangi bir araca aktarmanın en hızlı yoludur. Finder'da seçin, uygulamaya sürükleyin, bırakın. Dosyalar yüklenir ve yeniden adlandırmaya hazırsınızdır. Kulağa bariz geliyor, ama her yeniden adlandırma aracı bunu iyi desteklemez.</p>

<h2>Sürükle bırak yeniden adlandırma için neden önemli</h2>

<p>Toplu yeniden adlandırma zaten mümkün olduğunca hızlı bitirmek istediğiniz bir iştir. Her ekstra adım — bir dosya seçici açmak, dizinlerde gezinmek, zaten seçtiğiniz dosyaları yeniden seçmek — sürtünme ekler. Sürükle bırak bu sürtünmeyi tamamen ortadan kaldırır.</p>

<p>Ayrıca seçici olmanıza da olanak tanır. Belki klasördeki her dosyayı değil, yalnızca Finder'da seçtiğiniz 30 dosyayı istersiniz. O 30'unu sürükleyin. Yeniden adlandırma aracının içinde filtreleme yapmanıza gerek yok.</p>

<h2>Renym sürükle bırakı nasıl ele alıyor</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, sürükle bırak bir iş akışı etrafında inşa edilmiştir. Finder'da dosyaları seçin, uygulama penceresine sürükleyin ve hemen dosya listesinde görünürler. Oradan yeniden adlandırma işlem hattınızı oluşturur ve sonuçları önizlersiniz.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym sürükle bırak dosya yeniden adlandırma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dosyaları her yerden bırakın</h3>
<p>Herhangi bir Finder penceresinden, Masaüstünden veya hatta dosya referansları sürüklemeyi destekleyen başka bir uygulamadan dosyaları sürükleyin. Renym hepsini kabul eder.</p>

<h3>İstediğiniz zaman daha fazla dosya ekleyin</h3>
<p>Bir grup yüklediniz ama bazı dosyaları kaçırdığınızı mı fark ettiniz? Daha fazlasını sürükleyin. Zaten sahip olduklarınızı temizlemeden mevcut listeye eklenirler.</p>

<h3>Uygulamadan önce önizleyin</h3>
<p>Dosyalarınız bırakıldıktan sonra, eklediğiniz her yeniden adlandırma eylemi canlı bir önizleme gösterir. Orijinal ad, her dosya için yeni adın yanında durur. Gezinin, doğrulayın ve emin olduğunuzda uygulayın.</p>

<h3>Tam iş akışı</h3>
<ol>
  <li>Finder'da dosyaları seçin</li>
  <li>Renym'e sürükleyin</li>
  <li>Yeniden adlandırma eylemleri ekleyin (bul/değiştir, numaralandırma, büyük/küçük harf değişikliği vb.)</li>
  <li>Önce-sonra önizlemesini gözden geçirin</li>
  <li>Uygula'ya tıklayın</li>
</ol>

<p>Beş adım, dosya seçici yok, iletişim kutusu yok, yeniden gezinme yok. Sadece dosyalar giriyor, adlar çıkıyor.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "photographer-file-naming-mac": {
    slug: "photographer-file-naming-mac",
    title: "Fotoğrafçılar için Mac'te Dosya Adlandırma — İş Akışınızı Otomatikleştirin",
    description: "Tutarlı bir dosya adlandırma sistemi saatlerce arama yapmaktan kurtarır ve kayıp görselleri önler. IMG_4872 gibi kamera tarafından oluşturulan adlar; çekim, müşteri veya tarih hakkında hiçbir şey söylemez.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>Her profesyonel fotoğrafçı bunu hissetmiştir: IMG_4001'den IMG_4800'e kadar adlandırılmış 800 görsellik bir klasörü açar ve Johnson töreninden çekilen kareleri bulmaya çalışırsınız. Ya da iki hafıza kartını birleştirir ve her ikisinin de DSC_0001'den başladığını keşfedersiniz. Ya da bir müşteri "resepsiyondaki mavi elbiseli portre"yi ister ve her dosya anlamsız bir numara olduğu için onu arayacak bir yolunuz yoktur.</p>

<p>Tutarlı bir dosya adlandırma sistemi bir seçenek değildir — aranabilir bir arşiv ile rastgele numaralar mezarlığı arasındaki farktır. Sorun şu ki her çekimden sonra 800 dosyayı elle yeniden adlandırmak gerçekçi değildir. Otomasyona ihtiyacınız var.</p>

<h2>İyi bir adlandırma sistemi neye benzer</h2>

<p>Çoğu profesyonel fotoğrafçı, şu kalıbın bir varyasyonunda buluşur:</p>

<p><code>[Tarih]_[Müşteri/Proje]_[Sıra].[uzantı]</code></p>

<p>Örneğin: <code>2026-09-06_Johnson_Wedding_001.jpg</code></p>

<p>Bu size şunları sağlar:</p>

<ul>
  <li><strong>Kronolojik sıralama</strong> — farklı çekimlerdeki dosyalar otomatik olarak tarihe göre sıralanır</li>
  <li><strong>Aranabilirlik</strong> — "Johnson" arayın ve o müşteriden gelen her görseli bulun</li>
  <li><strong>Çakışma yok</strong> — farklı tarihlerdeki iki çekimin dosya adları asla çakışmaz</li>
  <li><strong>Doğru sıralama düzeni</strong> — sıfırla dolgulu numaralar (001, 002), 1, 10, 11, 2'nin aksine düzgün sıralanır</li>
</ul>

<h2>Lightroom ve Capture One adlandırması neden her zaman yeterli değil</h2>

<p>Hem Lightroom hem de Capture One, içe aktarma sırasında dosya yeniden adlandırma sunar. Yalnızca bu araçlardan biriyle çalışan fotoğrafçılar için içe aktarma sırasında yeniden adlandırma temel işleri karşılar. Ama bunun yetersiz kaldığı yaygın durumlar vardır:</p>

<ul>
  <li>Yeniden adlandırma yapılmadan zaten içe aktarılmış dosyaları yeniden adlandırmanız gerekiyor</li>
  <li>Birden fazla araçla çalışıyor ve herhangi bir katalogun dışında tutarlı adlandırmaya ihtiyaç duyuyorsunuz</li>
  <li>Yalnızca RAW dosyaları değil, teslimatları — dışa aktarılan JPEG'leri — yeniden adlandırmanız gerekiyor</li>
  <li>Bir müşteri kendi adlandırmasıyla dosyalar geri gönderiyor ve bunları normalleştirmeniz gerekiyor</li>
  <li>Farklı kameralardan, sistemlerden veya yıllardan gelen arşivleri birleştiriyorsunuz</li>
</ul>

<p>Bu durumlarda, hangi uygulamanın yönettiğinden bağımsız olarak herhangi bir dosyada çalışan bağımsız bir yeniden adlandırma aracına ihtiyacınız vardır.</p>

<h2>Bir fotoğrafçı adlandırma işlem hattı oluşturma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, adlandırma kuralınız için yeniden kullanılabilir bir işlem hattı oluşturmanıza olanak tanır. Bir kez kurun ve her çekime uygulayın.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym fotoğrafçı dosya adlandırma işlem hattı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>1. Adım: Kamera önekini kaldırın</h3>
<p>Kameranızın oluşturduğu IMG_, DSC_, P10 veya başka her ne ise kaldırın. Bir bul ve değiştir eylemi bunu tek adımda halleder, ya da herhangi bir kamera önek kalıbıyla eşleşmek için regex kullanın.</p>

<h3>2. Adım: Adlandırma yapınızı ekleyin</h3>
<p>Tarihi ve müşteri/proje adını ekleyin. Bu, dosya adının aranabilir, insan tarafından okunabilir kısmı hâline gelir.</p>

<h3>3. Adım: Sıralı numaralandırma ekleyin</h3>
<p>Dosyaların çekildikleri sırayla sıralanması için sıfırla dolgulu numaralar ekleyin. Dolgu genişliğini tipik çekim boyutunuza göre seçin — 1.000 altı görsel içeren çekimler için üç basamak, daha büyük setler için dört basamak.</p>

<h3>4. Adım: Önizleyin ve uygulayın</h3>
<p>Önce-sonra adlarının tam listesinde gezinin. Sıranın doğru olduğunu, dolgunun doğru göründüğünü ve adlandırmanın tutarlı olduğunu doğrulayın. Ardından tüm grubu tek seferde uygulayın.</p>

<h3>Teslimat yeniden adlandırması</h3>
<p>Bir müşteri için nihai JPEG'leri dışa aktardığınızda, genellikle çalışma dosyalarınızdan farklı adlara ihtiyaç duyarlar. Teslimatlar için ayrı bir işlem hattı oluşturun: sosyal medya dosyaları için belki "Johnson_Wedding_Web_001.jpg", baskı dosyaları için "Johnson_Wedding_Print_001.tif".</p>

<p>Bir adlandırma sistemi yalnızca tutarlı bir şekilde uygularsanız işe yarar. Süreci otomatikleştirmek, 10 saatlik bir düğün gününün ardından yorgun olduğunuz için atlama isteği duymadan, her seferinde, her çekimde gerçekleşmesini sağlar.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-files-lowercase-mac": {
    slug: "rename-files-lowercase-mac",
    title: "Mac'te Dosyalar Küçük Harfe Nasıl Çevrilir",
    description: "Karışık büyük/küçük harfli dosya adları bağlantıları bozar, yinelenen yüklemelere neden olur ve paylaşılan bir klasörde tutarsız görünür. Koca bir grubu elle küçük harfe çevirmek kimsenin vaktine değmez.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Devraldığınız bir klasörde dosyaların yarısı "Report.PDF", çeyreği "report.pdf" ve geri kalanı "REPORT.pdf" olarak adlandırılmış. Mac'te dosya sistemi genellikle bunları aynı klasördeyse aynı dosya olarak ele alır — ama bunları büyük/küçük harf duyarlı bir sunucuya yüklediğiniz, bir Linux makinesiyle senkronize ettiğiniz veya kodda referans verdiğiniz anda tutarsızlık gerçek sorunlara yol açar. Bozuk bağlantılar, yinelenen yüklemeler ve yalnızca kendi bilgisayarınızda çalışan dosya yolları yaygın belirtilerdir.</p>

<p>Çözüm kavramsal olarak basittir: her dosya adını küçük harf yapın. Sorun, bunu her birini tek tek yeniden adlandırmadan onlarca veya yüzlerce dosyada yapmaktır.</p>

<h2>Finder'da büyük/küçük harf dönüştürme seçeneği yok</h2>

<p>Bu, Finder'ın toplu yeniden adlandırma aracındaki daha şaşırtıcı boşluklardan biridir. Metni Değiştir, Metin Ekle ve Biçimlendir seçeneklerine sahipsiniz — hiçbiri harf büyüklüğüne dokunmuyor. "Report.PDF"in "report.pdf" olmasını istiyorsanız, Finder bunu toplu olarak yapmanın bir yolunu basitçe sunmaz. Her adı elle yeniden yazmanız gerekir, bu da toplu işlemenin amacını tamamen boşa çıkarır.</p>

<h2>Bir işlem hattı adımı olarak büyük/küçük harf dönüştürme</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, dosya adlarını tek bir adımda tüm grup genelinde küçük harfe, büyük harfe, başlık biçimine veya cümle biçimine dönüştüren özel bir büyük/küçük harf değiştirme eylemi içerir.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym dosya adlarını küçük harfe dönüştürme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Uzantı dahil her şeyi küçük harf yapın</h3>
<p>"Report.PDF"i tek bir eylemde "report.pdf"e dönüştürün. Büyük/küçük harf değişikliği dosya adının tamamına uygulanır, böylece elinizde küçük harfli bir ad ve geride kalan büyük harfli bir uzantı kalmaz.</p>

<h3>Temizlik adımlarıyla birleştirin</h3>
<p>Büyük/küçük harf tutarsızlığı nadiren tek başına görülür. Küçük harfe dönüştürmeyi bir boşluk-tire değiştirmesiyle veya bir karakter kaldırma adımıyla zincirleyin ve her sorun için ayrı araçlar çalıştırmak yerine her şeyi tek bir geçişte düzeltin.</p>

<h3>Uygulamadan önce önizleyin</h3>
<p>Uygulamadan önce gruptaki her dosya için küçük harf sonucunu görün. Bir dosya zaten doğruysa, basitçe hiçbir değişiklik gösterilmez — gereksiz yere hiçbir şeye dokunulmaz.</p>

<p>Tutarlı büyük/küçük harf kullanımı, bir web yüklemesini bozana veya büyük/küçük harf duyarlı bir sistemde yinelenen dosyalara neden olana kadar küçük bir meseledir. Tüm bir klasörde bunu düzeltmek tek bir işlem hattı adımı alır.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "add-date-to-filename-mac": {
    slug: "add-date-to-filename-mac",
    title: "Mac'te Dosya Adlarına Tarih Nasıl Eklenir",
    description: "Adlarında tarih bulunmayan dosyaları kronolojik olarak sıralamak zordur ve aynı temel ada sahip birden fazla sürüm olduğunda birbirinden ayırt etmek imkânsızdır. Tüm bir klasöre elle tarih eklemek yavaş ve hataya açıktır.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir fatura, rapor veya dışa aktarma klasörünüz var ve hiçbirinin adında tarih yok. Finder'da "değiştirilme tarihine" göre sıralamak, dosyaları başka bir yere kopyalayana ve değiştirilme tarihi sıfırlanana kadar ya da biri size klasörü e-postayla gönderene ve tarihlerin artık dosyaların gerçekten ne zaman oluşturulduğunu yansıtmamasına kadar işe yarar. Tek güvenilir çözüm, tarihi doğrudan dosya adına koymaktır.</p>

<p>Bunu bir dosya için yapmak birkaç saniye sürer. Her biri farklı bir oluşturulma tarihine sahip seksen dosya için yapmak, adları tek tek yeniden yazarak yapmak istemeyeceğiniz bir şeydir.</p>

<h2>Finder neden burada yardımcı olamaz</h2>

<p>Finder'ın toplu yeniden adlandırması bir dosya adına metin ekleyebilir, ama seçilen her dosyaya aynı sabit metni ekler. Her dosyanın gerçek oluşturulma veya değiştirilme tarihini otomatik olarak eklemenin bir yolu yoktur — Finder'ın yeniden adlandırma iletişim kutusunda dosya başına dinamik değer kavramı yoktur. Tüm dosyalarınız tek bir tarihi paylaşıyorsa, bunu elle yazıp bir önek olarak ekleyebilirsiniz. Tarihler grup genelinde farklıysa, Finder hiç yardımcı olamaz.</p>

<h2>Bir işlem hattının parçası olarak tarih ekleme</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, bir grup genelinde sabit bir tarih dizesini önek veya son ek olarak eklemenize olanak tanır — bir dışa aktarmanın veya teslimatın işlendiği günle etiketlenmesi için kullanışlıdır.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym dosya adlarına tarih ekleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bütün bir teslimatı tek seferde etiketleyin</h3>
<p>Bugün, yarınki gruptan ayırt etmeniz gereken bir dosya grubu mu aldınız? Tek adımda gruptaki her dosyaya "2026-09-06_" önekini ekleyin. Altı ay sonra, klasör size her setin tam olarak ne zaman geldiğini söyler.</p>

<h3>Sıralı numaralandırmayla birleştirin</h3>
<p>Tarihi önek olarak ekleyin, ardından sıralı numaralandırmayı üzerine katmanlayın: "2026-09-06_001.pdf," "2026-09-06_002.pdf." Bu, dosyaları tarihe göre gruplanmış ve her grup içinde doğru sıralanmış halde tutar.</p>

<h3>Adın geri kalanını olduğu gibi koruyun</h3>
<p>Tarihi, dosya adının açıklayıcı kısmını bozmadan ekleyin. "invoice_client_a.pdf", "2026-09-06_invoice_client_a.pdf" olur — hâlâ okunabilir, artık tarihe göre de sıralanabilir.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "remove-spaces-from-filenames-mac": {
    slug: "remove-spaces-from-filenames-mac",
    title: "Mac'te Dosya Adlarından Boşluklar Nasıl Kaldırılır",
    description: "Dosya adlarındaki boşluklar; Terminal komutlarında, URL'lerde ve bunları göz önünde bulundurmadan yazılmış betiklerde sorunlara yol açar. Tüm bir klasörü tek tek temizlemek bir öğleden sonrayı iyi değerlendirmenin yolu değildir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Dosya adlarındaki boşluklar Finder'da sorunsuz görünür, ama neredeyse her yerde başka sorunlara yol açar. Yolu tırnak içine almayı unutmadıkça bir Terminal komutu bozulur. Bir URL boşluğu "%20"ye çevirir, bu da bağlantıları okunması zor hale getirir ve bazen tamamen bozar. Boşlukları hesaba katmadan yazılmış bir betik sessizce başarısız olur veya dosya adını bölünmemesi gereken parçalara böler.</p>

<p>Yaygın çözüm, her boşluğu bir alt çizgi veya tire ile değiştirmek ya da boşlukları tamamen kaldırmaktır. Teoride basit. "Final Report March 2026.pdf" adlı seksen dosyalık bir klasörünüz olduğunda pratikte sıkıcı.</p>

<h2>Finder'ın değiştirme özelliği neleri yapıp yapamaz</h2>

<p>Finder'ın toplu yeniden adlandırması birebir bul ve değiştir işlevini destekler, bu yüzden her boşluğu bir tireyle değiştirmek teknik olarak mümkündür — tek bir boşluk karakteri arayın, "-" ile değiştirin. Bu basit durumlar için işe yarar. Ama şu durumlarda yetersiz kalır:</p>

<ul>
  <li>Boşlukları tamamen kaldırıp "Final Report"u "FinalReport" haline getirmeniz gerektiğinde — tek bir değiştirme bunu iyi halleder, ama bunu başka bir temizlikle (çift boşlukları düzeltmek gibi) birleştirmek birden fazla geçiş gerektirir</li>
  <li>Boşlukların kaldırılmasını ama dosya uzantısının tam olarak korunmasını istediğinizde</li>
  <li>Bunun aynı zamanda büyük/küçük harfi düzelten veya başka karakterleri kaldıran daha büyük bir temizliğin parçası olması gerektiğinde</li>
</ul>

<h2>Tek bir işlem hattı adımı olarak boşluk kaldırma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, boşluk kaldırmayı bul ve değiştir ile halleder ve bunu aynı geçişte ihtiyacınız olan her başka temizlik adımıyla zincirlemenize olanak tanır.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym dosya adlarından boşluk kaldırma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Boşlukları tire veya alt çizgiyle değiştirin</h3>
<p>Bir boşluk bulun, "-" veya "_" ile değiştirin. Gruptaki her dosya aynı anda aynı işlemi görür ve önizleme, herhangi bir şey uygulanmadan önce tam sonucu gösterir.</p>

<h3>Boşlukları tamamen kaldırın</h3>
<p>"Final Report.pdf"in hiçbir ayırıcı olmadan "FinalReport.pdf" olmasını istiyorsanız, boşluğu hiçbir şeyle değiştirin. Tek eylem, tüm grup.</p>

<h3>Kalan çift boşlukları veya artık kalıntıları düzeltin</h3>
<p>Belirli kelimeleri veya önekleri kaldırdıktan sonra dosyalar bazen çift boşluklarla veya garip boşluklarla sona erer. Bunları aynı işlem hattında temizlemek için tek bir boşluk veya tireyle değiştirilen <code>\\s+</code> gibi bir regex adımı ekleyin.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-files-for-web-mac": {
    slug: "rename-files-for-web-mac",
    title: "Web Yüklemesi için Mac'te Dosyalar Nasıl Yeniden Adlandırılır — Toplu Slug Oluşturma",
    description: "Boşluk, büyük harf ve özel karakter içeren dosyalar bir web sitesine yüklendiğinde bozuk bağlantılara ve dağınık URL'lere yol açar. Bir grubu elle temiz, web dostu adlara dönüştürmek ölçeklenmez.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir grup görseli veya belgeyi bir web sitesine, bir CMS'ye veya bir statik site oluşturucuya yüklemek üzeresiniz. Dosyalar "Product Photo (Final) 2.jpg" ve "Blog Header — Draft.png" gibi adlandırılmış. Bunları olduğu gibi yüklerseniz kodlanmış boşluklar ve özel karakterler içeren çirkin URL'ler elde edersiniz, ya da daha kötüsü, desteklenmeyen karakterler yüzünden yüklemeyi doğrudan reddeden bir CMS ile karşılaşırsınız.</p>

<p>Gerçekten istediğiniz şey bir "slug"dır — küçük harfli, tire ile ayrılmış, özel karakter içermeyen: "product-photo-final-2.jpg." Bunu bir avuç dosya için elle dönüştürmek idare eder. Yeni bir siteye giden elli görsellik bir grup için ise değil.</p>

<h2>Finder dosya adlarını neden slug haline getiremez</h2>

<p>Slug'a çevirmek aynı anda birkaç dönüşümü içerir: küçük harfe çevirme, parantez ve tire gibi noktalama işaretlerini kaldırma ve boşlukları tireye çevirme. Finder'ın yeniden adlandırma aracı bunlardan tam olarak birini yapabilir — birebir metin değiştirme — ve tek bir geçişte metni küçük harfe çeviremez veya çeşitli özel karakterleri temizleyemez. Birkaç elle yeniden adlandırma turuna ihtiyacınız olur ve Finder yine de harf büyüklüğüne hiç dokunamaz.</p>

<h2>Bir işlem hattıyla bir grubu slug haline getirme</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, gerekli adımları zincirleyerek slug oluşturmayı halleder: büyük/küçük harf dönüşümü, karakter kaldırma ve boşluk-tire değiştirme, hepsi tüm gruba uygulanan tek bir işlem hattında.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta web yüklemesi için Renym ile dosya adlarını slug haline getirme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>1. Adım: Özel karakterleri kaldırın</h3>
<p>Bir URL'de görünmemesi gereken parantezleri, tireleri ve diğer noktalama işaretlerini temizlemek için regex kullanın. Harfler, sayılar, boşluklar ve tireler dışındaki her şeyle eşleşen bir kalıp bunu tek adımda temizler.</p>

<h3>2. Adım: Boşlukları tireye çevirin</h3>
<p>Standart web slug kurallarına uygun olarak her boşluğu bulun ve bir tireyle değiştirin.</p>

<h3>3. Adım: Her şeyi küçük harf yapın</h3>
<p>Son adım olarak bir küçük harf değişikliği uygulayın, böylece "Product-Photo-Final-2.jpg", herhangi bir URL yapısı için temiz, öngörülebilir ve güvenli olan "product-photo-final-2.jpg" olur.</p>

<p>Bu işlem hattını bir kez kurun ve bundan sonra yüklediğiniz her varlık grubu için yeniden kullanın.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "a-better-rename-alternative-mac": {
    slug: "a-better-rename-alternative-mac",
    title: "Mac için Daha İyi Bir Yeniden Adlandırma Alternatifi",
    description: "A Better Finder Rename, Mac'te toplu yeniden adlandırma için uzun süredir bir seçenek olmuştur, ama yoğun, iletişim kutusu ağırlıklı arayüzü herkese göre değildir. Aynı güce daha az sürtünmeyle sahip olmak istiyorsanız nelere dikkat etmeniz gerektiği burada.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>A Better Finder Rename, birisi Mac'te dosyaların nasıl toplu yeniden adlandırılacağını sorduğunda varsayılan öneri haline gelecek kadar uzun süredir ortalıkta. Yetenekli — regex, birden fazla yeniden adlandırma eylemi, hazır ayarlar — ve yerini hak etmiş durumda. Ama "yetenekli" ile "kullanımı keyifli" aynı şey değil ve birçok kullanıcı onu açıp yoğun sekme ve seçenek listesini gördüğünde bir dosya uzantısını değiştirmek için bile bir kılavuza ihtiyaç duyduğunu hissediyor.</p>

<h2>İnsanları alternatif aramaya iten şey</h2>

<p>Şikayetler yorumlarda ve forum konularında tekrar tekrar karşımıza çıkıyor:</p>

<ul>
  <li>Arayüz, görsel bir düzen yerine ağırlıklı olarak açılır menülere ve yoğun seçenek panellerine dayanıyor</li>
  <li>Çok adımlı bir yeniden adlandırma oluşturmak, görünür bir şekilde üst üste yığıp yeniden sıralayabileceğiniz adımlar yerine birkaç sekmeyi yapılandırmak anlamına geliyor</li>
  <li>Tasarım yıllardır önemli ölçüde modernleştirilmedi, bu da basit işleri gerektiğinden daha teknik hissettiriyor</li>
  <li>Yeni kullanıcılar genellikle ilk grubu güvenle yeniden adlandırabilmeden önce bir eğitime ihtiyaç duyuyor</li>
</ul>

<p>Bunların hiçbiri uygulamanın işe yaramadığı anlamına gelmiyor — yarıyor. Ama dosyaları işinizin temel bir parçası olarak değil de ara sıra yeniden adlandırıyorsanız, öğrenme eğrisi göreve orantısız gelebilir.</p>

<h2>Daha pürüzsüz bir alternatif neye benzer</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, birden fazla sekmede ayar yapılandırmak yerine adımlar ekleyerek oluşturduğunuz görsel bir işlem hattı aracılığıyla aynı alanı kapsar — regex ile bul ve değiştir, sıralı numaralandırma, ekleme ve kaldırma, büyük/küçük harf değişiklikleri.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta bir toplu yeniden adlandırma alternatifi olarak Renym" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sadece ayarları değil, adımlarınızı görün</h3>
<p>Her yeniden adlandırma eylemi, işlem hattında görünür bir blok olarak görünür. Sırayı inceleyip ne olacağını, kontrol etmek için bir ayar panelini açmadan hemen anlayabilirsiniz.</p>

<h3>Dosyaları doğrudan sürükleyin</h3>
<p>Gezinilecek bir dosya seçim iletişim kutusu yok. Dosyaları Finder'dan doğrudan uygulamaya sürükleyin ve işlem hattınızı oluşturmaya başlayın.</p>

<h3>Önizleme ve geri alma her zaman kullanılabilir</h3>
<p>Her dosya, siz uygulamadan önce mevcut ve gelecekteki adını gösterir ve sonuç beklediğiniz gibi değilse tam bir geri alma kullanılabilir.</p>

<p>A Better Finder Rename'i kullandıysanız ve görevin hak ettiğinden daha fazla iş olduğunu düşündüyseniz, bunun yerine bunu denemeye değer.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-screenshots-mac": {
    slug: "rename-screenshots-mac",
    title: "Mac'te Ekran Görüntüleri Nasıl Yeniden Adlandırılır — 'Screenshot' Önekini Kaldırma",
    description: "macOS her ekran görüntüsünü 'Screenshot 2026-09-06 at 3.42.17 PM.png' olarak adlandırır — doğru ama hantal. Bunlarla dolu bir klasörü tek tek temizlemek harcayacak vaktiniz olmayan bir zamanı boşa harcar.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Mac'te aldığınız her ekran görüntüsü aynı muameleyi görür: "Screenshot 2026-09-06 at 3.42.17 PM.png." Teknik olarak bilgilendirici, ama uzun, her dosyada tekrarlanıyor ve bir raporda, bir talepte veya paylaşılan bir klasörde referans vermek için garip. Bir hata raporu, bir eğitim veya bir tasarım incelemesi için elli ekran görüntüsü biriktirdiyseniz, her birini elle "step-01.png" gibi bir şeye yeniden adlandırmak, hiçbir iyi nedeni olmadan bir öğleden sonrayı yiyip bitiren türden bir iştir.</p>

<h2>Varsayılan adın çalışması neden zor</h2>

<p>"Screenshot [tarih] at [saat]" biçimi okunabilirlik için değil, benzersizlik için tasarlanmıştı. Her dosya aynı 11 karakterle başlar, bu da şu anlama gelir:</p>

<ul>
  <li>Ada göre sıralama, alaka düzeyine veya içeriğe göre değil, yalnızca çekilme zamanına göre sıralar</li>
  <li>Adlar bir dosya listesinde veya paylaşılan bir bağlantıda rahatça okunmayacak kadar uzun</li>
  <li>Açmadan bir ekran görüntüsünün ne gösterdiğini anlayamazsınız</li>
  <li>Finder'ın toplu yeniden adlandırması "Screenshot" kelimesini kaldırabilir ama daha spesifik bir değiştirme oluşturmadıkça zaman damgası kalabalığını bırakır</li>
</ul>

<h2>Bir ekran görüntüsü klasörünü temizleme</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, ister tamamen özel bir ad ister orijinalin daha kısa bir sürümünü isteyin, bu temizliği birkaç işlem hattı adımıyla halleder.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym bir Mac ekran görüntüsü grubunu yeniden adlandırıyor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tüm varsayılan öneki kaldırın</h3>
<p>Kendi adlandırmanızı eklemek için boş bir sayfayla kalmanızı sağlayacak şekilde, tüm "Screenshot [tarih] at [saat]" kalıbını eşleştirip kaldırmak için tek bir adımda regex kullanın.</p>

<h3>Açıklayıcı bir ad ve sıra ekleyin</h3>
<p>"bug-report_" veya "onboarding-flow_" gibi özel bir önek ve ardından sıralı numaralandırma ekleyin, böylece elli ekran görüntünüz, çektiğiniz sırayla sıralanmış "bug-report_001.png"den "bug-report_050.png"ye dönüşür.</p>

<h3>Sadece daha kısa adlara ihtiyacınız varsa basit tutun</h3>
<p>Özel adlara ihtiyacınız yoksa, sadece "Screenshot " kelimesini kaldırın ve hedefli bir regex değiştirmesiyle zaman damgasını kısaltın; her birinin kabaca ne zaman alındığını bilmek için yeterli bilgiyi tüm kalabalık olmadan koruyun.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "bulk-rename-utility-mac": {
    slug: "bulk-rename-utility-mac",
    title: "Mac için En İyi Toplu Yeniden Adlandırma Aracı",
    description: "Mac için birkaç özel toplu yeniden adlandırma aracı vardır, her biri güç ve basitlik arasında farklı bir denge sunar. Birini seçmeden önce gerçekte neyi karşılaştırmanız gerektiği burada.",
    date: "2026-09-06",
    readTime: "5 dk okuma",
    content: `
<p>"Mac için toplu yeniden adlandırma aracı" diye arama yapın ve karşınıza eski Terminal tabanlı kılavuzların, on yıllık arayüzlere sahip birkaç ücretli uygulamanın ve yalnızca belirli bir noktaya kadar giden Finder'ın yerleşik seçeneğinin bir karışımı çıkar. Doğru olanı seçmek, en uzun özellik listesine sahip uygulamayı bulmaktan çok, gerçek yeniden adlandırma işlerinizin haftadan haftaya neye benzediğine bağlıdır.</p>

<h2>Gerçekte neyi değerlendirmeli</h2>

<p>Çoğu toplu yeniden adlandırma tartışması özellik kontrol listelerine odaklanır — regex destekliyor mu, sıralı numaralandırma yapıyor mu, büyük/küçük harf değişikliklerini yönetiyor mu. Bunlar önemlidir, ama aracı gerçekten kullanmaktan keyif alıp almayacağınızı belirleyen pratik soruları gözden kaçırırlar:</p>

<ul>
  <li><strong>Onaylamadan önce sonucu görebiliyor musunuz?</strong> Canlı önizlemesi olmayan bir araçta her yeniden adlandırma küçük bir kumardır.</li>
  <li><strong>Bir hatayı geri alabiliyor musunuz?</strong> Yüzlerce dosya üzerindeki toplu işlemler bir güvenlik ağına ihtiyaç duyar.</li>
  <li><strong>İşlemleri birleştirmek kaç adım alıyor?</strong> Gerçek dünyadaki yeniden adlandırmalar nadiren tek bir dönüşüm gerektirir.</li>
  <li><strong>Dosyaları sürükleyip bırakmak destekleniyor mu, yoksa her seferinde bir dosya seçiciye mi ihtiyacınız var?</strong></li>
</ul>

<p>Finder temel işleri kapsar ama ilk iki noktada tamamen başarısız olur — tam önizleme yok, kalıcı geri alma yok. Terminal tabanlı yaklaşımlar, betik yazmaktan rahatsa olmadığınız sürece dördünde de başarısız olur. Daha eski özel uygulamalar kağıt üzerinde kutuları işaretler ama iş akışını yoğun menülerin altına gömer.</p>

<h2>Toplu yeniden adlandırmaya görsel bir yaklaşım</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, bu dört soruyu iyi yanıtlamak üzerine kurulmuştur: üst üste yığılmış eylemlerden oluşan görsel bir işlem hattı, her dosya için canlı bir önce-sonra önizlemesi, tam geri alma ve sürükle-bırak girişi.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS için Renym toplu yeniden adlandırma aracı" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Her eylem görünür ve yeniden sıralanabilir</h3>
<p>Bul/değiştir, regex, sıralı numaralandırma, ekleme, kaldırma ve büyük/küçük harf değişiklikleri, üst üste yığabileceğiniz, yeniden sıralayabileceğiniz ve ayrı ayrı düzenleyebileceğiniz işlem hattı adımları olarak kullanılabilir.</p>

<h3>Önizleme grubunuzla birlikte ölçeklenir</h3>
<p>İster on dosyayı ister bin dosyayı yeniden adlandırıyor olun, önizleme listesi yalnızca bir örneği değil, her birinin mevcut ve gelecekteki adını gösterir.</p>

<h3>Hatalar geri alınabilir</h3>
<p>Uyguladığınız bir yeniden adlandırma istediğiniz gibi çıkmadı mı? Geri alma, dosyaları tek tek elle düzeltmek yerine tüm grubu eski hâline döndürür, böylece işlem hattını ayarlayıp tekrar deneyebilirsiniz.</p>

<p>En iyi toplu yeniden adlandırma aracı, sonuca güvenmenizi ona uygulamadan önce sağlayan araçtır. Herhangi bir aracı değerlendirmeye değer ölçüt budur.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-video-files-mac": {
    slug: "rename-video-files-mac",
    title: "Mac'te Video Dosyaları Toplu Olarak Nasıl Yeniden Adlandırılır",
    description: "Bir kameradan, ekran kaydediciden veya düzenleme uygulamasından dışa aktarılan video dosyalarının nadiren kullanışlı adları olur. Yalnızca zaman damgasına göre adlandırılmış bir klip klasöründe gezinmek, düzenlemeyi ve arşivlemeyi olması gerekenden daha zor hale getirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir kamera veya drone "DJI_0001.MP4," "DJI_0002.MP4" gibi adlandırılmış klipler dışa aktarır ve bu böyle devam eder. Bir ekran kaydedici, dosyaları kaydı başlattığınız kesin saniyeye göre adlandırır. Bir düzenleme uygulaması, proje hakkında hiçbir şey söylemeyen genel bir "Sequence_01.mov" ile render dışa aktarır. Birden fazla çekim, proje veya müşteri genelinde görüntüleri yönetirken, bu varsayılan adlar basit bir klasör göz atmayı, ihtiyacınız olan klibi bulmak için birkaç klip açmanız gereken bir tahmin oyununa dönüştürür.</p>

<h2>Videoya özgü yeniden adlandırma zorlukları</h2>

<p>Video dosyaları, toplu yeniden adlandırmayı fotoğraf veya belge yeniden adlandırmadan biraz farklı kılan birkaç incelik getirir:</p>

<ul>
  <li>Aynı çekimde, uzantıyı bozmadan tutarlı adlandırma gerektiren karışık uzantılar (MP4, MOV, MTS)</li>
  <li>Gruplanmış ve doğru sırada kalması gereken birden fazla kamera açısı veya çekim</li>
  <li>Anlamlı kısımları kaybetmeden kısaltılması gereken, düzenleme yazılımı dışa aktarımlarından gelen uzun orijinal adlar</li>
  <li>Finder'ın yeniden adlandırma aracının bu varyasyonları tek bir geçişte ele almanın bir yolunu sunmaması</li>
</ul>

<h2>Görüntü yeniden adlandırma için bir işlem hattı</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, her dosyanın halihazırda sahip olduğu uzantıyı korurken — görsel bir işlem hattı aracılığıyla — herhangi bir dosya türünü ele aldığı gibi video gruplarını da ele alır.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile video dosyalarını toplu yeniden adlandırma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kamera veya yazılım öneklerini kaldırın</h3>
<p>Kameranızın veya kaydedicinizin eklediği "DJI_," "GH0" veya başka genel bir öneki, uzantısından bağımsız olarak her klipte kaldırın.</p>

<h3>Proje ve çekim yapısı ekleyin</h3>
<p>Anlamsız bir klip numarasının yerine geçmesi için bir proje adı ve sıralı çekim numaraları ekleyin, "Scene_02_Take_03.mov" haline gelsin ve düzenleme zaman çizelgesine geldiğinizde görüntülerin sahne ve çekime göre düzenli kalmasını sağlasın.</p>

<h3>Bir şeyi bozmadan uzantıları karıştırın</h3>
<p>Aynı çekimden MP4, MOV ve MTS dosyalarını tek bir gruba yükleyin. Yeniden adlandırma eylemleri yalnızca ad kısmına uygulanır, böylece her dosya yeniden adlandırmadan sonra doğru, orijinal uzantısını korur.</p>

<p>Tutarlı klip adları, çekimden üç hafta sonra bir zaman çizelgesinde gezinip "o çekimi" ararken gerçek zaman kazandırır.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "find-replace-filename-mac": {
    slug: "find-replace-filename-mac",
    title: "Mac'te Dosya Adlarında Bul ve Değiştir",
    description: "Dosya adları genelinde bul ve değiştir basit görünür, ama bunu iyi yapmak basit bir metin değişiminden daha fazla kontrol gerektirir — büyük/küçük harf duyarlılığı, tam kelime eşleştirme ve metnin birden fazla kez görünmesini ele almak.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bul ve değiştir, en yaygın toplu yeniden adlandırma işlemidir. Bir dosya setinde geçen bir kelime veya dize var ve bunu başka bir şeyle değiştirmeniz gerekiyor — bir proje yeniden adlandırıldı, bir müşteri şirket adını değiştirdi veya bir arşivde eski bir adlandırma kuralının güncellenmesi gerekiyor. En basit yeniden adlandırma işi gibi görünür ve genellikle öyledir de. Ama dosya adlarınız tam olarak tek biçim olmadığı anda, basit bul ve değiştir sınırlarını göstermeye başlar.</p>

<h2>Basit bul ve değiştirin sorun yaşadığı yerler</h2>

<p>Finder'ın bul ve değiştir özelliği temiz, birebir durumlar için işe yarar. Ama gerçek klasörler bundan daha dağınıktır:</p>

<ul>
  <li>Değiştirmek istediğiniz metin dosyalar genelinde farklı büyük/küçük harflerde görünür ("Draft" ile "draft" ile "DRAFT")</li>
  <li>Hedef dize bir dosya adında birden fazla kez görünür ve yalnızca bir tekrarını değiştirmek istersiniz</li>
  <li>Tam metni değil bir kalıbı değiştirmeniz gerekir — sadece "v1" değil, herhangi bir sürüm numarası gibi</li>
  <li>Birbirinin üzerine inşa edilen birkaç bul ve değiştir işlemini sırayla çalıştırmak istersiniz</li>
</ul>

<p>Finder'ın değiştirmesi, çalıştırma başına tam olarak bir birebir metin değişimini, hiçbir büyük/küçük harf seçeneği ve hiçbir kalıp eşleştirmesi olmadan gerçekleştirir.</p>

<h2>Daha fazla kontrolle bul ve değiştir</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, regex desteğiyle bir bul ve değiştir eylemi içerir, böylece aynı araçta hem basit birebir değiştirme hem de kalıp tabanlı eşleştirme elde edersiniz.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile dosya adlarında bul ve değiştir" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Basit durumlar için kolay değişimler</h3>
<p>Uygulamadan önce değişikliğin doğru göründüğünü onaylayan canlı önizlemeyle, gruptaki her dosyada "OldClientName"i "NewClientName" ile değiştirin.</p>

<h3>Metin değiştiğinde kalıp eşleştirme</h3>
<p>Regex'i açın ve birebir diziler yerine kalıpları eşleştirin — ardından hangi numara gelirse gelsin, herhangi bir "draft_v"yi ardından gelen numarayla "final" ile değiştirin.</p>

<h3>Birden fazla değiştirmeyi zincirleyin</h3>
<p>Aynı grupta üç farklı tutarsızlığı düzeltmeniz mi gerekiyor? İşlem hattına üç bul ve değiştir adımı ekleyin. Her biri bir öncekinin sonucu üzerinde çalışır ve önizleme tüm zinciri yansıtır.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-files-with-counter-mac": {
    slug: "rename-files-with-counter-mac",
    title: "Mac'te Dosyalar Bir Sayaçla Nasıl Yeniden Adlandırılır — 001, 002, 003",
    description: "Dosya adlarına eklenen bir sayaç, bir seti sırayla tutar ve adlandırma çakışmalarını önler, ama dolguyu, başlangıç numarasını ve konumu doğru yapmak Finder'ın temel numaralandırmasından daha fazlasını gerektirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir slayt gösterisi, bir ürün görseli seti, dışa aktarılan bir dizi sayfa veya sıranın önemli olduğu ve yinelenen adların söz konusu olmadığı herhangi bir grup için 001, 002, 003 ve devamı şeklinde numaralandırılmış bir dosya setine ihtiyacınız var. Bir sayaç her iki sorunu da aynı anda çözer: tutarlı bir şekilde dolgulandığı sürece benzersizliği ve öngörülebilir bir sıralama düzenini garanti eder.</p>

<h2>Finder'ın sayacının neredeyse doğru yaptığı şey</h2>

<p>Finder'ın Biçimlendir yeniden adlandırma modu gerçekten bir sayaç içerir — bir başlangıç numarası seçersiniz ve seçili dosyalar genelinde birer birer artar. Birçok durum için bu gerçekten yeterlidir. Ama sabit kısıtlamalarla gelir:</p>

<ul>
  <li>Sayaç, orijinal dosya adının tamamının yerini alır; adın herhangi bir kısmını numarayla birlikte koruyamazsınız</li>
  <li>Artış değerini kontrol edemezsiniz — her zaman +1'dir</li>
  <li>Sayacı bir adın ortasına ekleyemezsiniz, yalnızca mod tarafından belirlenen sabit bir konuma</li>
  <li>Sayma işlemini, önce büyük/küçük harfi düzeltmek veya gereksiz karakterleri kaldırmak gibi ayrı bir temizlik adımıyla birleştirmenin bir yolu yoktur</li>
</ul>

<h2>Esnek bir işlem hattı adımı olarak sayaçlar</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, sıralı numaralandırmayı birkaç eylemden biri olarak içerir, böylece grubun ihtiyaç duyduğu başka her şeyle birleştirebilirsiniz.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile dosya adlarına sayaç ekleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dolgunuzu seçin</h3>
<p>Gruptaki dosya sayısına göre önceden 01, 001 veya 0001'e mi ihtiyacınız olduğuna karar verin ve her numara tutarlı bir şekilde dolgulandığında set büyüdükçe sıralama düzeni asla bozulmaz.</p>

<h3>İsterseniz orijinal adı koruyun</h3>
<p>Sayacı önek veya son ek olarak ekleyin ve dosya adının açıklayıcı kısmını olduğu gibi bırakın — genel bir sayaç biçimine "product"u tamamen kaybetmek yerine "product_001.jpg."</p>

<h3>Önce temizleyin, sonra numaralandırın</h3>
<p>Numaralandırma adımından önce bir bul ve değiştir veya büyük/küçük harf değiştirme adımı çalıştırın, böylece sayaç uygulandığında dosyalar zaten temiz olur. Önizleme, tüm zincirin son sonucunu gösterir.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "organize-downloads-folder-mac-rename": {
    slug: "organize-downloads-folder-mac-rename",
    title: "Dosyaları Toplu Olarak Yeniden Adlandırarak Mac'teki İndirilenler Klasörünü Düzenleyin",
    description: "'file(3).pdf' ve 'unnamed-1234567.zip' gibi adlandırılmış dosyalarla dolu bir İndirilenler klasörü aramak neredeyse imkânsızdır. Yıllarca biriken indirmeleri elle temizlemek gerçekçi bir hafta sonu projesi değildir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>İndirilenler klasörü, dosya adlarının öldüğü yerdir. Tarayıcılar zaten var olan her şeye "(1)," "(2)" ve "(3)" ekler. Bazı siteler, indirme oturumu dışında hiçbir anlamı olmayan "file_a8f3k29d.pdf" gibi otomatik oluşturulmuş adlarla dosyalar sunar. Yıllar boyunca bu birikir ve adlara göre arama yapmanın işe yaramadığı bir klasöre dönüşür — çünkü adların yarısı genel tekrarlar, diğer yarısı ise rastgele dizilerdir.</p>

<h2>Bu sorun zamanla neden daha da kötüleşir</h2>

<p>Aktif olarak yönettiğiniz bir proje klasörünün aksine, İndirilenler pasif olarak birikir. Kimse oturup onu düzenlemeye karar vermez — arama yapmak acı verici hale gelene kadar büyümeye devam eder ve bir şeyin ne olduğunu değil, ne zaman geldiğini söyleyen tarihe göre sıralamaya başvurursunuz. Onu temizlemeye karar verdiğinizde, yüzlerce ya da binlerce dosyayla karşı karşıyasınızdır, bu da elle yeniden adlandırmayı tamamen pratik dışı bırakır.</p>

<h2>Sıfırdan başlamadan toplu temizlik</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, tam olarak bu tür bir toplu temizlik için tasarlanmıştır — tek bir basit yeniden adlandırma yerine aynı anda birkaç düzeltme uygulanması gereken büyük, dağınık bir grup.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile İndirilenler klasörünü düzenleme" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Yinelenen indirme son eklerini kaldırın</h3>
<p>Tarayıcının yinelenen işlemesinden veya aynı dosyanın tekrar tekrar indirilmesinden gelsinler, klasördeki her "(1)," "(2)" ve "(3)" kalıbını tek seferde kaldırmak için regex kullanın.</p>

<h3>Önce dosya türüne göre sıralayın</h3>
<p>Yeniden adlandırmadan önce dosyaları uzantıya göre gruplandırın, ardından PDF'ler, görseller ve arşivler için ayrı işlem hatları çalıştırın — her biri o dosya türü için mantıklı bir adlandırmayla, kaynak veya tarih öneki eklemek gibi.</p>

<h3>Bağlam için tarihler ekleyin</h3>
<p>Büyük gruplar için bir önek olarak kabaca bir tarih aralığı ekleyin, böylece genel adlandırılmış dosyalar bile en azından klasöre kabaca ne zaman girdiğini söyler.</p>

<p>Her dosyayı tek tek sıralamanıza gerek yok — türe veya tarihe göre gruplandırılmış gruplarda birkaç işlem hattı geçişi, yılların birikimini tek oturumda aranabilir bir şeye dönüştürebilir.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-files-before-uploading-mac": {
    slug: "rename-files-before-uploading-mac",
    title: "Mac'te Yüklemeden Önce Dosyalar Nasıl Yeniden Adlandırılır",
    description: "Birçok yükleme sistemi, boşluk, özel karakter veya tutarsız adlandırma içeren dosyaları reddeder ya da yanlış işler. Bir yükleme son teriminden hemen önce bir grubu tek tek düzeltmek gereksiz strese neden olur.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bir portala, bir CMS'ye, bir FTP sunucusuna veya bir müşterinin dosya paylaşım sistemine bir dosya grubu yüklemek üzeresiniz ve adlandırma gereksinimleri elinizdekiyle eşleşmiyor. Belki sistem boşlukları reddediyor. Belki diğer uçta dosyaların doğru sıralanması için belirli bir önek gerekiyor. Belki dosyalarınız hâlâ alıcının görmemesi gereken dahili taslak adlarına sahip. Nedeni ne olursa olsun, tüm grubun yükleme gerçekleşmeden önce doğru bir şekilde yeniden adlandırılması gerekiyor — sonra değil, çünkü sonra düzeltmek her şeyi yeniden yüklemek anlamına gelir.</p>

<h2>Son dakika Finder'da yeniden adlandırma neden risklidir</h2>

<p>Son teslim tarihi baskısı altında, Finder'ın toplu yeniden adlandırması bir kolaylıktan çok bir yükümlülüğe dönüşür. Tek seferde bir işlem, tek bir örnek önizleme ve yüklemeden önce tüm grubu doğrulamanın bir yolu yoktur. On dosya yanlış çıkarsa, alıcı bunu belirtene kadar fark etmeyebilirsiniz — o noktaya geldiğinizde yükleme çoktan gitmiş olur.</p>

<h2>Yüklemeden önce güvenle yeniden adlandırma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, herhangi bir şey değişmeden önce her dosyanın yeni adının tam bir önizlemesini sunar, bu da tam olarak bir son teslim tarihine karşı çalışırken ve yeniden yükleme yapmayı göze alamayacağınız zaman önemlidir.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile yüklemeden önce dosyaları yeniden adlandırma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Hedefin adlandırma kurallarına uyun</h3>
<p>Boşlukları ve özel karakterleri kaldırın, küçük harf kullanımını zorunlu kılın veya gerekli bir önek ekleyin — yükleme sistemi her ne bekliyorsa, bunu bir kez işlem hattı olarak oluşturun ve aynı hedefe gelecekteki yüklemeler için yeniden kullanın.</p>

<h3>Dahili veya taslak adlandırmayı kaldırın</h3>
<p>Harici bir alıcının görmemesi gereken "DRAFT," "internal" gibi kelimeleri veya sürüm işaretçilerini, tüm grup genelinde tek geçişte kaldırın.</p>

<h3>Makinenizden çıkmadan önce her şeyi doğrulayın</h3>
<p>Tam önce-sonra listesinde gezinin ve her dosyanın doğru olduğunu onaylayın. Yeniden adlandırma yalnızca o zaman uygulanır ve yüklemeyi yalnızca o zaman yaparsınız — sonradan sürpriz yok.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "trim-filename-length-mac": {
    slug: "trim-filename-length-mac",
    title: "Mac'te Dosya Adı Uzunluğu Nasıl Kısaltılır",
    description: "Uzun dosya adları, dosya listelerinde kırpılır, yol uzunluğu sınırları olan sistemlerde hatalara neden olur ve betiklerde çalışması zordur. Bir grup adı tek tek kısaltmak yavaş ilerler.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Bazı dosya adları kontrolden çıkar — dışa aktarılan bir belge, orijinal başlığını artı bir sürüm etiketini artı bir tarihi artı bir departman kodunu korur, ta ki dosya adı 120 karakter uzunluğuna ulaşana kadar. Bu gerçek sorunlara yol açar: bazı sistemler maksimum bir yol uzunluğu uygular ve dosyayı doğrudan reddeder, bazı dosya listeleri adı kırpar, böylece dosyaları birbirinden ayıramazsınız ve adı işleyen betikler olağandışı uzun olduğunda öngörülemeyen şekilde davranabilir.</p>

<p>Adları kısaltmanız gerekiyor — gerçekten önemli olan kısımları korurken makul bir uzunluğa indirmeniz gerekiyor.</p>

<h2>Finder uzunluğa göre kısaltamaz</h2>

<p>Finder'ın yeniden adlandırma aracının maksimum bir uzunluk veya "yalnızca ilk N karakteri koru" gibi bir işlem kavramı yoktur. Tam olarak neyi kaldıracağınızı biliyorsanız belirli metni değiştirebilir, ama fazlalık uzunluk ad boyunca dağılmış gereksiz veya tutarsız bilgilerden geliyorsa, Finder bunu sistematik bir şekilde kısaltmanın hiçbir yolunu sunmaz. Her dosyayı elle kısaltmak size kalır — ki bu tam olarak toplu araçların ortadan kaldırmak için var olduğu türden tekrarlayan bir iştir.</p>

<h2>Hedefli kurallarla adları kısaltma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, karakterleri konuma veya kalıba göre kaldırmanıza olanak tanır, bu da aşırı uzun dosya adlarının çoğu gerçek dünya durumunu kapsar.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile dosya adı uzunluğunu kısaltma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sabit sayıda sondan karakter kaldırın</h3>
<p>Fazlalık uzunluk tekrarlanan bir son ekten — bir departman kodu, dahili bir etiket — geliyorsa, her dosya adının sonundan belirli sayıda karakteri tek bir adımda kaldırın.</p>

<h3>Belirli, gereksiz bir bölümü kesin</h3>
<p>Her adın ortasında görünen bir bölümü kaldırmak için bul ve değiştir veya regex kullanın — dosyalar zaten bir proje klasörüne düzenlendikten sonra artık gerekli olmayan tekrarlanan bir proje kodu gibi.</p>

<h3>Kısaltılmış sonucu önizleyin</h3>
<p>Kısaltılmış adların hâlâ birbirinden ayırt edilebilir olduğundan emin olmak için tam önce-sonra listesini kontrol edin — çok agresif kısaltma yanlışlıkla yinelenen adlar oluşturabilir ve önizleme, herhangi bir şey uygulamadan önce bunu yakalar.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "rename-music-files-mac": {
    slug: "rename-music-files-mac",
    title: "Mac'te Müzik Dosyaları Nasıl Yeniden Adlandırılır — Sanatçı, Albüm, Parça",
    description: "İndirilen veya rip edilen ses dosyaları genellikle gerçek meta verileriyle eşleşmeyen anlaşılmaz dosya adlarıyla gelir. Bir kitaplığı bu şekilde sıralamak sanatçıya, albüme veya parçaya göre göz atmayı neredeyse imkânsız hale getirir.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>"track01.mp3," "01 - Untitled.flac" olarak adlandırılmış veya bir indirmeden gelen rastgele karakterlerin karmaşası olan bir ses dosyası klasörünüz var. Gömülü meta veriler doğru olabilir, ama dosya adlarının kendisi bir müzik çalarının dışında göz atmak, belirli cihazlara senkronize etmek veya etiket verisi yerine doğrudan dosya adlarına baktığınız bir yedeği düzenlemek için işe yaramaz. Gerçek sanatçıyı, albümü ve parça numarasını yansıtan — kitaplık genelinde tutarlı bir şekilde — dosya adları istiyorsunuz.</p>

<h2>Bu neden tek dosyalık bir sorun değil</h2>

<p>Eşleşmeyen tek bir dosya adı iki dakikalık bir düzeltmedir. Bazıları zaten doğru, bazıları farklı bir biçim kullanan, bazıları tamamen genel olan tutarsız adlandırmaya sahip birkaç yüz parçalık bir kitaplık, elle düzeltip bir hafta sonunu kaybetmeden çözebileceğiniz bir şey değildir. Ve Finder'ın yeniden adlandırma aracının ses meta verisinden hiç haberi yoktur; dosya adını yalnızca düz metin olarak görür, bu yüzden isteseniz bile dosyanın etiketlerinden sanatçı veya albümü çekemez.</p>

<h2>Bir kitaplık genelinde adları standartlaştırma</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, bu sorunun dosya adı tarafını halleder — istediğiniz adlandırma kalıbını bildiğinizde, tüm grup genelinde tutarlı bir şekilde uygulayın.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta Renym ile sanatçı, albüm ve parçaya göre müzik dosyalarını yeniden adlandırma" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Parça numarası biçimini standartlaştırın</h3>
<p>Bazı dosyaların "1," bazılarının "01," bazılarının "Track 1" kullandığı tutarsız parça numaralandırmasını, sıralı numaralandırma veya regex tabanlı bir bul ve değiştir kullanarak tek, sıfırla dolgulu bir biçime dönüştürün.</p>

<h3>Genel veya bozuk adları temizleyin</h3>
<p>İndirme kalıntılarını, rastgele kimlik dizelerini veya "Untitled" gibi yer tutucu metni bul ve değiştir ile kaldırın, ardından her albümün klasöründe tutarlı bir önek olarak doğru sanatçı ve albüm bilgilerini ekleyin.</p>

<h3>Tüm kitaplığa değil, albüme göre gruplayın</h3>
<p>Adlandırma kuralları genellikle albüm başına uygulandığından, bir seferde bir albümün klasörünü sürükleyin, o adlandırma kalıbı için işlem hattını oluşturun ve uygulayın — ardından yeni bir grupla bir sonraki albüme geçin.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
  "mac-automator-rename-alternative": {
    slug: "mac-automator-rename-alternative",
    title: "Mac Automator Dosya Yeniden Adlandırma Kafa Karıştırıcı — Görsel Bir Alternatif Deneyin",
    description: "Automator teknik olarak dosyaları toplu yeniden adlandırabilir, ama bunun için bir iş akışı oluşturup hata ayıklamak, yeniden adlandırma işinin kendisinden çok daha uzun sürer. İşte nedeni ve aynı sonuca ulaşmanın daha doğrudan bir yolu.",
    date: "2026-09-06",
    readTime: "4 dk okuma",
    content: `
<p>Automator'ın bir "Finder Öğelerini Yeniden Adlandır" eylemi var ve teorik olarak bunu özel bir toplu yeniden adlandırma iş akışı oluşturmak için başka eylemlerle zincirleyebilirsiniz. Pratikte, bunu bir kez deneyen çoğu kişi bir daha denemez. Automator'ın arayüzü, genel eylemleri akış şeması benzeri bir listede birbirine bağlamak üzerine kuruludur; bu, tekrarlayan çok uygulamalı görevleri otomatikleştirmek için güçlüdür ama "bu 80 dosyayı tutarlı bir şekilde yeniden adlandır" kadar spesifik bir sorunu çözmek için hantal bir yoldur.</p>

<h2>Automator'ın yeniden adlandırmayı olması gerekenden daha zor kıldığı yerler</h2>

<ul>
  <li>İstediğiniz yeniden adlandırma davranışını hangi eylem kombinasyonunun oluşturduğunu bilmeniz gerekir — bu arayüzden açıkça anlaşılmaz</li>
  <li>İş akışı düzenleyicisinin içinde canlı bir önizleme yoktur; sonucu görmek için onu gerçek dosyalar üzerinde çalıştırmanız gerekir</li>
  <li>Automator bunu sizin için takip etmediğinden, hatalar yeniden adlandırmayı elle geri almanızı veya bir yedekten geri yüklemenizi gerektirir</li>
  <li>Bir iş akışını yeniden kullanılabilir bir uygulama veya Hızlı Eylem olarak kaydetmek çoğu kişinin atladığı ek bir kurulum katmanı ekler, bu yüzden her seferinde iş akışını sıfırdan yeniden oluştururlar</li>
  <li>Bir yeniden adlandırma eyleminin beklediğiniz şekilde uygulanmama nedenini araştırmak, sıradan kullanıcılar için tasarlanmamış olan Automator günlüklerini kurcalamak anlamına gelir</li>
</ul>

<p>Çoğu insanın ayda birkaç kez yaptığı bir iş için, Automator'ın kurulum maliyeti nadiren kendini amorti eder.</p>

<h2>Doğrudan bir görsel alternatif</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a>, Automator'ın ulaşmaya çalıştığı fikri — yeniden adlandırma işlemlerini zincirleme — ama genel amaçlı iş akışı yükü olmadan, özellikle yeniden adlandırma için tasarlanmış bir şekilde sunar.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="macOS'ta dosyaları yeniden adlandırmak için Automator'a görsel bir alternatif olarak Renym" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Yalnızca yeniden adlandırma için oluşturuldu</h3>
<p>Kullanılabilir her eylem bir yeniden adlandırma işlemidir — bul/değiştir, regex, numaralandırma, büyük/küçük harf değişikliği, ekleme, kaldırma. Gözden geçirilecek genel eylemler yok, hangisinin gerçekten dosyaları yeniden adlandırdığını tahmin etmek yok.</p>

<h3>Gerçekleşmeden önce sonucu görün</h3>
<p>Automator'ın çalıştır-ve-kontrol-et yaklaşımının aksine, önizleme işlem hattını oluştururken canlı olarak güncellenir, böylece herhangi bir şey uygulamadan önce sonucu bilirsiniz.</p>

<h3>Kaydedilecek veya sürdürülecek iş akışı dosyası yok</h3>
<p>Bir uygulama veya Hızlı Eylem olarak dışa aktarılacak hiçbir şey yoktur. Renym'i açın, dosyaları sürükleyin, işlem hattını oluşturun, uygulayın. Bir dahaki sefere, aynı şeyi aynı sürede tekrar yaparsınız.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym'i Mac App Store'dan edinin</a></p>
`,
  },
};
