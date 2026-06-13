import type { ArticleSet } from "./index";

export const msArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Audio Mac untuk Podcasting: Kawal Apa yang Anda Dengar Semasa Merakam",
    description:
      "Merakam podcast sambil memantau tahap, mendengar tetamu, dan menguruskan pemberitahuan — semuanya bersaing untuk satu peluncur kelantangan. Inilah persediaan yang lebih baik.",
    date: "2026-03-05",
    readTime: "5 min baca",
    content: `
<p>Anda sedang merakam podcast di Mac anda. Anda perlu mendengar tetamu anda (melalui Zoom, Riverside, atau SquadCast) dengan jelas. Anda perlu memantau tahap rakaman DAW anda. Anda perlu Slack disenyapkan supaya tiada bunyi ping masuk dalam rakaman. Dan anda perlu bunyi pemberitahuan sistem dimatikan sepenuhnya — bunyi "ding" macOS di tengah temu bual ialah audio yang tidak boleh digunakan.</p>

<p>macOS memberi anda satu peluncur kelantangan untuk semua ini. Ia tidak mencukupi.</p>

<h2>Cabaran audio podcasting pada Mac</h2>

<p>Semasa sesi rakaman podcast, anda biasanya mempunyai:</p>
<ul>
  <li><strong>Aplikasi komunikasi</strong> (Zoom, Riverside, SquadCast) — audio tetamu, perlu jelas</li>
  <li><strong>DAW / aplikasi rakaman</strong> (Logic, GarageBand, Audacity, Hindenburg) — memantau tahap anda sendiri</li>
  <li><strong>Sumber pemberitahuan</strong> (Slack, Mail, Calendar, Messages) — mesti senyap sepenuhnya semasa rakaman</li>
  <li><strong>Pelayar</strong> — mungkin ada nota rancangan, tab penyelidikan, atau pemasa berjalan</li>
</ul>

<p>Semua ini pada kelantangan yang sama ialah kekacauan. Tetamu anda bersaing dengan bunyi ding sistem. Pemberitahuan Slack boleh merosakkan satu ambilan. Dan jika anda perlu melaraskan kelantangan tetamu anda, menukar kelantangan sistem juga menukar tahap pemantauan anda.</p>

<h2>Penyelesaian biasa</h2>

<p>Kebanyakan podcaster menggunakan gabungan:</p>
<ul>
  <li>Mod fokus (Jangan Ganggu) untuk menyekat pemberitahuan</li>
  <li>Menutup Slack, Mail, dan aplikasi bising lain secara manual sebelum merakam</li>
  <li>Melaraskan kelantangan dalaman aplikasi komunikasi untuk tetamu</li>
</ul>

<p>Ini berkesan, tetapi mudah tersalah. Lupa mengaktifkan DND dan pemberitahuan merosakkan ambilan anda. Lupa menutup Slack dan panggilan masuk. Dan anda masih tidak boleh mengawal kelantangan tetamu anda berbanding tahap pemantauan anda secara bebas.</p>

<h2>Audio per-aplikasi untuk podcasting</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda membina persekitaran rakaman yang bersih dengan mengawal setiap aplikasi secara bebas:</p>

<img src="/apps/sounddial.png" alt="Persediaan podcasting SoundDial — audio tetamu, pemantauan, dan pemberitahuan pada tahap bebas" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil rakaman</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — audio tetamu yang jelas</li>
  <li><strong>Logic / GarageBand:</strong> 60% — pemantauan selesa tanpa keletihan</li>
  <li><strong>Slack:</strong> disenyapkan — sifar bunyi pemberitahuan</li>
  <li><strong>Mail:</strong> disenyapkan</li>
  <li><strong>Messages:</strong> disenyapkan</li>
  <li><strong>Calendar:</strong> disenyapkan</li>
  <li><strong>Pelayar:</strong> disenyapkan — tiada auto-main mengejutkan</li>
</ul>

<p>Simpan ini sebagai profil "Rakaman". Sebelum menekan butang rakam, gunakan profil dengan satu klik. Setiap sumber pemberitahuan disenyapkan, tetamu anda pada kelantangan penuh, dan pemantauan anda pada tahap yang selesa.</p>

<h3>Profil penyuntingan</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — pemantauan penuh untuk penyuntingan</li>
  <li><strong>Spotify:</strong> disenyapkan — tiada kekeliruan rujukan</li>
  <li><strong>Slack:</strong> 20% — pemberitahuan halus semasa rehat</li>
  <li><strong>Pelayar:</strong> 40% — untuk nota rancangan dan penyelidikan</li>
</ul>

<p>Dua profil, dua klik, dua persekitaran audio yang berbeza sama sekali. Tiada penutupan dan pembukaan semula aplikasi secara manual. Tiada lupa mengaktifkan semula pemberitahuan selepas rakaman.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Mengapa Mac Saya Begitu Kuat pada Kelantangan Penuh? Cara Mendapat Kawalan Lebih Halus",
    description:
      "Pembesar suara MacBook Pro sangat bagus — sehingga ia terlalu kuat. Jika tetapan kelantangan sederhana terasa terlalu kuat, inilah cara mendapat kawalan audio yang lebih tepat.",
    date: "2026-03-08",
    readTime: "4 min baca",
    content: `
<p>Model MacBook Pro baharu Apple (14" dan 16") mempunyai pembesar suara yang sangat berkuasa untuk laptop. Begitu berkuasa sehingga tahap kelantangan sederhana boleh menjadi sangat kuat — terutamanya di bilik senyap, lewat malam, atau dengan fon kepala. Jurang antara "selesa" dan "terlalu kuat" kadangkala hanya satu atau dua langkah kelantangan.</p>

<h2>Mengapa langkah kelantangan terasa terlalu kasar</h2>

<p>macOS mempunyai <strong>16 langkah kelantangan</strong> melalui papan kekunci. Setiap langkah adalah kira-kira 6.25% daripada julat keseluruhan. Pada pembesar suara berkuasa atau fon kepala sensitif, satu langkah boleh mewakili perubahan kelantangan yang ketara — dari "sempurna" ke "terlalu kuat" dengan satu ketukan kekunci kelantangan.</p>

<h2>Pembetulan terbina dalam: kelantangan suku-langkah</h2>

<p>Tekan dan tahan <strong>Option + Shift</strong> dan tekan kelantangan naik/turun. Setiap tekanan melaraskan sebanyak satu perempat daripada langkah biasa, memberi anda <strong>64 tahap</strong> berbanding 16. Kawalan 4x lebih halus ini memudahkan untuk mencari kelantangan yang tepat, terutamanya dengan pembesar suara berkuasa atau fon kepala.</p>

<p>Ini ialah helah audio Mac paling berguna yang kebanyakan orang tidak tahu.</p>

<h2>Masalah yang lebih mendalam: satu peluncur untuk semuanya</h2>

<p>Walaupun dengan 64 tahap, anda masih mempunyai satu peluncur yang mengawal setiap aplikasi. Jika anda menetapkan kelantangan cukup rendah untuk bunyi pemberitahuan yang selesa, muzik anda mungkin terlalu perlahan. Jika anda menetapkannya untuk muzik, bunyi ping pemberitahuan mungkin membuat anda terkejut.</p>

<p>Masalah sebenar ialah sumber audio yang berbeza memerlukan kelantangan yang berbeza. Pemberitahuan harus halus. Muzik harus hadir. Panggilan harus jelas. Video pelayar harus sederhana. Satu peluncur tidak dapat melayani semua ini dengan baik.</p>

<h2>Kelantangan per-aplikasi untuk kawalan tepat</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi peluncur kelantangannya sendiri dengan <strong>kenaikan 1%</strong> dari 0% hingga 200%. Itu 200 tahap ketepatan per aplikasi, berbanding 16 (atau 64 dengan pengubah suai) langkah seluruh sistem macOS.</p>

<img src="/apps/sounddial.png" alt="Kawalan kelantangan per-aplikasi SoundDial yang halus dengan ketepatan 1% pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tetapkan kelantangan sistem anda ke tahap asas sederhana (50-60%), kemudian gunakan SoundDial untuk menala halus setiap aplikasi:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — tahap latar belakang yang selesa</li>
  <li><strong>Slack:</strong> 12% — ping pemberitahuan yang halus</li>
  <li><strong>Zoom:</strong> 85% — audio panggilan yang jelas tanpa terlalu kuat</li>
  <li><strong>Safari:</strong> 45% — main balik video yang sederhana</li>
</ul>

<p>Dengan cara ini, tiada satu sumber audio pun yang "terlalu kuat." Setiap satu ditala ke tahap idealnya secara bebas. Ping Slack pada 12% hampir tidak ketara, manakala panggilan Zoom anda pada 85% sangat jelas — semuanya pada tetapan kelantangan sistem yang sama.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Masalah Kelantangan Slack Huddle pada Mac: Terlalu Perlahan, Terlalu Kuat, atau Berlawan dengan Muzik Anda",
    description:
      "Slack huddle bersaing dengan muzik dan pemberitahuan anda untuk kelantangan yang sama. Inilah cara mengawal audio huddle secara bebas daripada segala-galanya di Mac.",
    date: "2026-03-10",
    readTime: "5 min baca",
    content: `
<p>Slack huddle memang mudah — anda klik butang dan anda sudah dalam panggilan suara tanpa perlu menjadualkan mesyuarat. Tetapi audionya kucar-kacir. Huddle berada pada kelantangan yang sama dengan Spotify anda. Bunyi pemberitahuan Slack berbunyi pada tahap yang sama dengan panggilan. Dan apabila seseorang berkongsi muzik atau skrin dengan audio dalam huddle, ia sama ada tidak kedengaran atau memekakkan telinga.</p>

<p>Masalahnya bukan Slack. Ia macOS. Semuanya melalui satu peluncur kelantangan, jadi audio huddle, bunyi pemberitahuan, muzik, dan audio pelayar semuanya bersaing untuk ruang yang sama.</p>

<h2>Kawalan audio dalaman Slack</h2>

<p>Slack mempunyai kawalan audio yang terhad:</p>
<ul>
  <li><strong>Keutamaan pemberitahuan:</strong> Slack → Settings → Notifications → Sound & appearance. Anda boleh menukar bunyi pemberitahuan atau melumpuhkan bunyi tertentu, tetapi anda tidak boleh menetapkan kelantangan pemberitahuan secara bebas daripada kelantangan huddle.</li>
  <li><strong>Kelantangan huddle:</strong> Semasa huddle, tiada peluncur kelantangan berasingan untuk panggilan berbanding bunyi Slack yang lain. Semuanya dalam Slack ialah satu aliran audio ke macOS.</li>
  <li><strong>Peranti input/output:</strong> Slack → Settings → Audio & Video membolehkan anda memilih peranti mikrofon dan pembesar suara, tetapi bukan tahap kelantangan per ciri.</li>
</ul>

<h2>Tiga masalah audio Slack</h2>

<h3>1. Huddle terlalu perlahan berbanding muzik</h3>
<p>Muzik anda pada tahap yang selesa. Anda menyertai huddle. Suara rakan sekerja anda pada kelantangan yang sama dengan muzik anda — anda tidak dapat membezakan perkataan dengan jelas. Menaikkan kelantangan sistem menjadikan muzik terlalu kuat.</p>

<h3>2. Bunyi pemberitahuan semasa huddle</h3>
<p>Anda dalam perbincangan huddle. Setiap mesej Slack yang masuk berbunyi pada kelantangan yang sama dengan panggilan. Di ruang kerja yang sibuk dengan saluran aktif, bunyi ping yang berterusan menjadikan huddle tidak boleh digunakan.</p>

<h3>3. Huddle terlalu kuat untuk mendengar di latar belakang</h3>
<p>Kadangkala anda menyertai huddle untuk mendengar secara pasif sambil bekerja. Anda mahu ia pada tahap latar belakang — cukup perlahan untuk tidak mengganggu, cukup kuat untuk mendengar jika seseorang menyebut nama anda. macOS tidak membenarkan anda menetapkan Slack ke 20% sambil mengekalkan pelayar anda pada 60%.</p>

<h2>Penyelesaian: kawal kelantangan Slack secara bebas</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi Slack peluncur kelantangannya sendiri, berasingan daripada setiap aplikasi lain. Oleh kerana audio huddle Slack dan bunyi pemberitahuan adalah sebahagian daripada aplikasi yang sama, peluncur mengawal kedua-duanya — tetapi itulah yang anda mahu kebanyakan masa.</p>

<img src="/apps/sounddial.png" alt="SoundDial mengawal kelantangan Slack secara bebas semasa huddle sambil muzik dimainkan pada tahap berbeza" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Persediaan dioptimumkan untuk huddle</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (audio huddle yang jelas, pemberitahuan kuat tetapi anda aktif dalam Slack)</li>
  <li><strong>Spotify:</strong> 15% (latar belakang yang hampir tiada, tidak bersaing dengan suara)</li>
  <li><strong>Pelayar:</strong> disenyapkan (tiada audio tab mengejutkan)</li>
</ul>

<h3>Persediaan huddle pasif</h3>
<ul>
  <li><strong>Slack:</strong> 30% (tahap mendengar latar belakang)</li>
  <li><strong>Spotify:</strong> 40% (audio utama ialah muzik anda)</li>
  <li><strong>Pelayar:</strong> 50% (tahap kerja normal)</li>
</ul>

<p>Simpan setiap satu sebagai profil. Apabila huddle bermula, gunakan profil yang betul dengan satu klik. Atau gunakan <strong>auto-ducking</strong> — apabila huddle mengaktifkan mikrofon anda, SoundDial secara automatik menurunkan semuanya kecuali Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Cara Menetapkan Kelantangan Lalai untuk Aplikasi Baharu pada Mac",
    description:
      "Aplikasi baharu dilancarkan pada kelantangan penuh secara lalai. Inilah cara membuat setiap aplikasi baharu bermula pada tahap yang selesa — supaya tiada yang mengejutkan anda.",
    date: "2026-03-12",
    readTime: "3 min baca",
    content: `
<p>Anda memasang aplikasi baharu. Ia dilancarkan buat pertama kali. Ia serta-merta memainkan audio — bunyi pengenalan, pemberitahuan, video tutorial — pada kelantangan sistem penuh. Anda tidak menjangkakannya. Fon kepala anda dipasang. Telinga anda berdengung.</p>

<p>macOS tidak mempunyai konsep "kelantangan lalai untuk aplikasi baharu" kerana macOS tidak mempunyai kelantangan per-aplikasi. Setiap aplikasi mendapat kelantangan sistem, dan kelantangan sistem ialah apa sahaja yang anda tetapkan terakhir. Aplikasi baharu tidak mendapat layanan istimewa — ia hanya memainkan pada apa sahaja tahap segala-galanya berada.</p>

<h2>Mengapa ini masalah</h2>

<p>Apabila anda mula-mula melancarkan aplikasi, anda tidak tahu betapa kuatnya ia akan berbunyi. Sesetengah aplikasi memainkan bunyi serta-merta (tutorial onboarding, bunyi pemberitahuan, video alu-aluan). Jika kelantangan sistem anda pada 80% kerana anda mendengar muzik, bunyi aplikasi baharu itu juga pada 80% — yang mungkin jauh lebih kuat daripada selesa untuk sumber audio yang tidak dijangka.</p>

<p>Ini terutamanya mengejutkan dengan:</p>
<ul>
  <li>Aplikasi komunikasi (Slack, Teams) yang memainkan bunyi permulaan</li>
  <li>Aplikasi dengan tutorial video pada pelancaran pertama</li>
  <li>Permainan yang memainkan muzik skrin tajuk serta-merta</li>
  <li>Aplikasi berasaskan pelayar yang auto-main kandungan</li>
</ul>

<h2>Penyelesaian: kelantangan lalai untuk aplikasi baharu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mempunyai <strong>kelantangan lalai yang boleh dikonfigurasi</strong> untuk aplikasi baharu. Dalam tetapan, anda menetapkan tahap kelantangan yang sepatutnya aplikasi yang baru dikesan bermula — contohnya, 70%. Kali pertama mana-mana aplikasi dilancarkan dan menghasilkan audio, SoundDial menetapkannya ke 70% dan bukannya 100%.</p>

<img src="/apps/sounddial.png" alt="Tetapan kelantangan lalai SoundDial — aplikasi baharu bermula pada tahap yang dikonfigurasi dan bukannya kelantangan penuh" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ini bermakna:</p>
<ul>
  <li>Tiada audio kelantangan penuh yang mengejutkan daripada aplikasi yang baru dipasang</li>
  <li>Setiap aplikasi baharu bermula pada tahap yang selesa dan boleh diramal</li>
  <li>Anda kemudian boleh melaraskannya naik atau turun daripada lalai mengikut keperluan</li>
  <li>Setelah dilaraskan, ciri <strong>memori kelantangan</strong> mengingati tahap aplikasi itu untuk pelancaran akan datang</li>
</ul>

<p>Ia ciri kecil, tetapi ia menyelesaikan gangguan harian yang sebenar — "letupan mengejutkan aplikasi baharu" yang menangkap semua orang sekurang-kurangnya sekali.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Bunyi Permulaan Mac Terlalu Kuat? Cara Melumpuhkan atau Menurunkannya",
    description:
      "Bunyi loceng permulaan Mac berbunyi pada kelantangan penuh setiap kali anda mula semula — terutamanya memalukan dalam mesyuarat dan bilik senyap. Inilah cara menyenyapkan atau mengawalnya.",
    date: "2026-03-15",
    readTime: "4 min baca",
    content: `
<p>Anda mula semula Mac anda di pejabat yang senyap. Bilik mesyuarat sunyi sepi. Kemudian — <em>BONG</em> — bunyi loceng permulaan berbunyi pada kelantangan penuh. Semua orang memandang anda. Bunyi loceng itu ikonik, tetapi ia juga tidak boleh dikawal dan sering kali memalukan kerana terlalu kuat.</p>

<h2>Cara melumpuhkan bunyi permulaan</h2>

<p>macOS membolehkan anda mematikan bunyi loceng permulaan sepenuhnya:</p>

<ol>
  <li>Pergi ke <strong>System Settings → Sound</strong></li>
  <li>Cari <strong>"Play sound on startup"</strong></li>
  <li>Nyahtandakannya</li>
</ol>

<p>Selesai. Mac anda akan bermula secara senyap mulai sekarang. Tiada arahan Terminal diperlukan — tetapan ini telah tersedia sejak macOS Big Sur.</p>

<h3>Kaedah Terminal (jika anda lebih suka)</h3>
<p>Anda juga boleh melumpuhkannya melalui Terminal:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Untuk mengaktifkan semula:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Bolehkah anda menurunkan bunyi permulaan dan bukannya melumpuhkannya?</h2>

<p>Tidak secara langsung. Bunyi loceng permulaan dimainkan pada kelantangan tetap yang ditentukan oleh kelantangan sistem pada masa penutupan. Jika Mac anda pada kelantangan 80% apabila anda menutupnya, bunyi loceng dimainkan pada kira-kira 80%. Jika ia pada 20%, bunyi loceng lebih perlahan.</p>

<p><strong>Penyelesaian:</strong> Sebelum memulakan semula Mac anda, turunkan kelantangan sistem ke 10-20%. Bunyi loceng permulaan akan dimainkan pada tahap yang lebih rendah itu. Tidak ideal — ia memerlukan anda mengingat — tetapi ia berkesan jika anda mahu bunyi loceng pada kelantangan yang munasabah dan bukannya disenyapkan sepenuhnya.</p>

<h2>Masalah kawalan bunyi Mac yang lebih luas</h2>

<p>Bunyi loceng permulaan hanyalah satu contoh kawalan audio terhad macOS. Bunyi sistem, bunyi pemberitahuan, dan audio aplikasi semuanya dicampur bersama dengan kawalan bebas yang minimum. Jika anda mendapati diri anda kerap melaraskan kelantangan untuk menguruskan sumber audio yang berbeza sepanjang hari, kawalan kelantangan per-aplikasi menyelesaikan masalah yang lebih luas.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi pada Mac anda peluncur kelantangannya sendiri. Tetapkan aplikasi pemberitahuan rendah, muzik pada tahap yang selesa, dan panggilan pada kelantangan penuh — semuanya secara bebas. Simpan konfigurasi sebagai profil dan tukar dengan satu klik.</p>

<img src="/apps/sounddial.png" alt="SoundDial — kawalan kelantangan per-aplikasi untuk menguruskan semua sumber audio Mac secara bebas" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Kelantangan Cisco Webex Terlalu Rendah pada Mac? Cara Memperbaikinya",
    description:
      "Panggilan Webex hampir tidak kedengaran pada Mac anda. Inilah setiap pembetulan — dari tetapan audio Webex hingga meningkatkan kelantangan panggilan melebihi 100% dengan pengadun per-aplikasi.",
    date: "2026-03-18",
    readTime: "5 min baca",
    content: `
<p>Webex ialah salah satu alat persidangan video yang paling banyak digunakan dalam persekitaran korporat — dan salah satu yang paling banyak mendapat aduan tentang kualiti audio pada Mac. Kelantangan panggilan rendah, suara yang tidak jelas, dan audio yang kelihatan lebih perlahan daripada Zoom atau Teams pada kelantangan sistem yang sama. Jika anda hampir tidak dapat mendengar panggilan Webex anda, anda tidak bersendirian.</p>

<h2>1. Semak tetapan audio Webex</h2>

<p>Semasa mesyuarat Webex, klik menu audio (ikon pembesar suara atau tiga titik → Audio Settings):</p>
<ul>
  <li>Pastikan peranti <strong>Speaker</strong> yang betul dipilih</li>
  <li>Seret peluncur kelantangan pembesar suara ke maksimum</li>
  <li>Klik "Test" untuk memainkan nada ujian dan mengesahkan output</li>
  <li>Semak jika "Music Mode" diaktifkan — lumpuhkan ia melainkan anda secara khusus mempersembahkan muzik</li>
  <li>Semak tetapan penyingkiran bunyi — "Remove Background Noise" pada mod agresif boleh mengurangkan kelantangan suara yang dirasakan</li>
</ul>

<h2>2. Semak output macOS</h2>

<p>System Settings → Sound → Output. Sahkan peranti yang betul dipilih dan kelantangan pada maksimum. Selepas kemas kini macOS atau pertukaran peranti, Webex mungkin menggunakan output yang tidak dijangka.</p>

<h2>3. Isu codec Bluetooth</h2>

<p>Menggunakan AirPods atau fon kepala Bluetooth? Webex mengaktifkan mikrofon anda memaksa pertukaran codec AAC→SCO, mengurangkan kualiti dan kelantangan audio. Gunakan mikrofon berasingan (mikrofon Mac terbina dalam atau USB) dan kekalkan fon kepala Bluetooth sebagai output sahaja.</p>

<h2>4. Pemprosesan audio khusus Webex</h2>

<p>Webex mempunyai pemprosesan audio yang agresif yang boleh mengurangkan kelantangan jelas peserta panggilan. Cuba tetapan Webex ini:</p>
<ul>
  <li>Tetapkan penyingkiran bunyi ke "Low" dan bukannya "High"</li>
  <li>Lumpuhkan "Optimize for my voice" jika diaktifkan</li>
  <li>Cuba tukar dari "Computer Audio" ke peranti tertentu</li>
</ul>

<h2>5. Masalah IT/admin</h2>

<p>Dalam persekitaran korporat, Webex sering diuruskan oleh IT dengan dasar audio tertentu. Beberapa tetapan mungkin dikunci atau diprakonfigurasi. Jika pembetulan asas tidak berkesan, semak dengan jabatan IT anda tentang dasar audio Webex. Sesetengah organisasi menyekat tahap audio maksimum atau menguatkuasakan tetapan pemprosesan audio tertentu.</p>

<h2>6. Tingkatkan Webex melebihi 100%</h2>

<p>Jika tetapan dimaksimumkan dan peserta masih terlalu perlahan, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda meningkatkan Webex ke <strong>200%</strong>. Ini menguatkan audio panggilan melebihi maksimum terbina dalam Webex — berguna apabila peserta mempunyai mikrofon yang lemah atau apabila pemprosesan audio Webex mengurangkan isyarat terlalu banyak.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan panggilan Cisco Webex melebihi 100% pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial juga membantu semasa mesyuarat Webex berturut-turut: gunakan auto-ducking untuk menurunkan muzik latar belakang anda secara automatik apabila setiap mesyuarat bermula, dan memulihkannya semasa rehat. Simpan profil kelantangan "Mesyuarat" untuk menetapkan keseimbangan audio pilihan anda dengan serta-merta untuk hari bekerja.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Cara Mendengar Dua Perkara Serentak pada Mac Tanpa Menjadi Gila",
    description:
      "Muzik dan podcast. Kuliah dan video nota. Panggilan dan muzik latar belakang. macOS memaksa anda memilih satu kelantangan untuk kedua-duanya — inilah cara mengimbanginya.",
    date: "2026-03-20",
    readTime: "4 min baca",
    content: `
<p>Anda mahu mendengar dua sumber audio pada masa yang sama. Muzik semasa panggilan. Podcast semasa menonton tutorial. Bunyi ambien latar belakang semasa belajar. Dua perkara, dua kelantangan ideal yang berbeza. macOS memberi anda satu peluncur untuk kedua-duanya.</p>

<p>Ini ialah keterbatasan audio asas macOS: setiap aplikasi berkongsi satu kelantangan. Anda tidak boleh berkata "yang ini pada 30%, yang itu pada 80%." Ia semuanya pada satu tahap, atau tiada langsung.</p>

<h2>Bila anda benar-benar memerlukan dua sumber audio</h2>

<p>Ini bukan kes terpencil. Ia bagaimana kebanyakan orang menggunakan komputer mereka:</p>

<ul>
  <li><strong>Muzik + panggilan video</strong> — yang paling biasa. Muzik latar belakang semasa mesyuarat Zoom, tetapi cukup perlahan untuk mendengar rakan sekerja.</li>
  <li><strong>Kuliah + bahan rujukan</strong> — pelajar menonton kuliah yang dirakam sambil kadangkala menonton tutorial YouTube untuk konteks.</li>
  <li><strong>Podcast + bunyi ambien</strong> — mendengar podcast sambil aplikasi bunyi hujan dimainkan secara perlahan.</li>
  <li><strong>Dua tab pelayar</strong> — video latihan dalam satu tab dan demo dalam yang lain, pada kelantangan berbeza.</li>
  <li><strong>Permainan + sembang suara</strong> — audio permainan untuk keasyikan, Discord untuk komunikasi.</li>
</ul>

<p>Dalam setiap kes, satu sumber ialah "utama" (lebih kuat, lebih penting) dan yang lain ialah "sekunder" (lebih perlahan, menyokong). Nisbah ideal berbeza untuk setiap gabungan, dan ia berubah sepanjang hari.</p>

<h2>Keterbatasan macOS</h2>

<p>macOS mempunyai satu peluncur kelantangan. Tekan kekunci kelantangan dan semuanya berubah secara sama rata. Jika anda menetapkan kelantangan untuk mendengar podcast yang selesa, aplikasi bunyi hujan juga pada tahap itu — sama ada terlalu kuat (mengganggu) atau anda belum melaraskannya dalam aplikasinya sendiri (jika ia mempunyai kawalan kelantangan).</p>

<p>Sesetengah aplikasi mempunyai peluncur kelantangan dalaman (Spotify, VLC), tetapi kebanyakan tidak. Dan walaupun mereka ada, bertukar antara aplikasi untuk melaraskan dua kawalan kelantangan berasingan ialah kikuk dan lambat.</p>

<h2>Penyelesaian: kelantangan per-aplikasi dalam satu panel</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> meletakkan setiap aplikasi dalam satu panel bar menu dengan peluncur kelantangan bebas. Kedua-dua sumber audio, bersebelahan, setiap satu dengan tahapnya sendiri. Laraskan satu tanpa menyentuh yang lain.</p>

<img src="/apps/sounddial.png" alt="SoundDial menunjukkan dua sumber audio pada tahap kelantangan berbeza pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Contoh persediaan:</p>

<p><strong>Muzik + panggilan Zoom:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>Podcast + bunyi hujan:</strong></p>
<ul>
  <li>Aplikasi podcast: 70% | Aplikasi hujan: 15%</li>
</ul>

<p><strong>Kuliah + tutorial YouTube:</strong></p>
<ul>
  <li>Zoom (kuliah): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>Setiap gabungan ialah keseimbangan yang berbeza. Simpan yang anda gunakan secara tetap sebagai <strong>profil kelantangan</strong> dan tukar dengan satu klik. Auto-ducking mengendalikan senario muzik+panggilan secara automatik — apabila panggilan bermula, muzik turun ke tahap yang anda konfigurasikan tanpa anda menyentuh apa-apa.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Cara Menonton Filem pada Mac Tanpa Membangunkan Semua Orang",
    description:
      "Dialog tidak kedengaran, kemudian letupan menggoncang dinding. Inilah cara menjinakkan audio filem untuk tontonan lewat malam pada Mac — tanpa terlepas sepatah perkataan pun.",
    date: "2026-03-22",
    readTime: "5 min baca",
    content: `
<p>Jam 1 pagi. Anda menonton filem pada MacBook anda di atas katil. Watak-watak berbisik — anda naikkan kelantangan. Kemudian adegan kejar-mengejar kereta bermula dan tiba-tiba seluruh apartmen anda boleh mendengarnya. Anda terkejut mencapai kekunci kelantangan. Kitaran ini berulang selama dua jam.</p>

<p>Masalahnya ialah <strong>julat dinamik</strong> — jurang antara detik paling senyap dan paling kuat dalam filem. Di pawagam dengan sistem bunyi yang berkuasa, julat ini mencipta pengalaman yang mengasyikkan. Pada MacBook tengah malam, ia mencipta pertarungan berterusan antara "tidak dapat dengar dialog" dan "membangunkan jiran."</p>

<h2>Mengapa filem lebih kuat daripada muzik atau podcast</h2>

<p>Muzik biasanya dimaster dengan julat dinamik yang dimampatkan — perbezaan antara bahagian paling senyap dan paling kuat agak kecil (mungkin 10-15 dB). Podcast lebih dimampatkan lagi. Filem, terutamanya filem aksi, boleh mempunyai julat dinamik <strong>30-40 dB</strong> — bahagian senyap ialah bisikan-senyap dan bahagian kuat direka untuk menggoncang kerusi pawagam.</p>

<p>Apabila anda menetapkan kelantangan MacBook anda untuk mendengar dialog, adegan aksi 100x lebih kuat dari segi tekanan bunyi. Tiada kelantangan sistem yang selesa yang berfungsi untuk kedua-duanya.</p>

<h2>Pembetulan 1: Gunakan mod malam perkhidmatan penstriman</h2>

<p>Sesetengah perkhidmatan penstriman mempunyai ciri pemampatan julat dinamik khusus untuk ini:</p>
<ul>
  <li><strong>Netflix:</strong> Cari togol "Reduce Loud Sounds" dalam tetapan audio semasa main balik</li>
  <li><strong>Apple TV+:</strong> System Settings → Accessibility → "Reduce Loud Sounds"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost" pada tajuk yang disokong</li>
  <li><strong>Disney+:</strong> Tiada ciri setara pada masa ini</li>
</ul>

<p>Ciri-ciri ini memampatkan julat dinamik supaya bahagian senyap lebih kuat dan bahagian kuat lebih senyap. Hasilnya ialah audio yang lebih sekata yang berfungsi pada kelantangan rendah.</p>

<h2>Pembetulan 2: Gunakan fon kepala</h2>

<p>Fon kepala menyelesaikan bahagian "membangunkan semua orang" — audio anda peribadi. Tetapi ia tidak menyelesaikan masalah julat dinamik. Kitaran dialog-letupan masih berlaku, hanya di telinga anda. Di sinilah kawalan kelantangan per-aplikasi membantu: tetapkan kelantangan aplikasi penstriman anda dengan tepat untuk mendengar melalui fon kepala.</p>

<h2>Pembetulan 3: Tetapkan aplikasi penstriman anda ke kelantangan tertentu</h2>

<p>Isu sebenar untuk tontonan lewat malam ialah aplikasi penstriman anda, bunyi pemberitahuan, dan audio lain semuanya pada kelantangan sistem yang sama. Ping Slack pada pukul 2 pagi pada kelantangan yang sama dengan dialog filem anda ialah kejutan tahap serangan jantung.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda mencipta persediaan lewat malam yang sempurna:</p>

<img src="/apps/sounddial.png" alt="Persediaan filem lewat malam SoundDial — aplikasi penstriman pada kelantangan sederhana, pemberitahuan disenyapkan" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil filem lewat malam</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / pelayar:</strong> 40-50% — tahap dialog yang selesa tanpa adegan aksi yang memekakkan telinga</li>
  <li><strong>Slack:</strong> disenyapkan — tiada ping mengejutkan</li>
  <li><strong>Mail:</strong> disenyapkan</li>
  <li><strong>iMessage:</strong> disenyapkan</li>
  <li><strong>Bunyi sistem:</strong> disenyapkan</li>
</ul>

<p>Simpan ini sebagai profil "Malam". Apabila anda memulakan filem lewat malam, gunakan profil dengan satu klik. Setiap sumber pemberitahuan disenyapkan, dan aplikasi penstriman anda pada kelantangan yang terkawal. Apabila anda selesai, tukar kembali ke profil siang anda.</p>

<p>Gabungkan ini dengan ciri "Reduce Loud Sounds" perkhidmatan penstriman untuk kesan maksimum: perkhidmatan memampatkan julat dinamik, dan SoundDial memastikan tiada apa-apa lain pada Mac anda berbunyi.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Kelantangan Mac Ditetapkan Semula Selepas Tidur? Cara Mengekalkan Tetapan Audio Anda",
    description:
      "Setiap kali Mac anda bangun dari tidur, kelantangan salah — ditetapkan semula ke maksimum, turun ke sifar, atau bertukar ke output yang salah. Inilah sebab dan cara memperbaikinya.",
    date: "2026-03-25",
    readTime: "5 min baca",
    content: `
<p>Anda tutup penutup MacBook anda. Anda bukanya kemudian. Kelantangan berbeza. Mungkin ia pada maksimum sedangkan anda menetapkannya pada 40%. Mungkin ia bertukar dari fon kepala ke pembesar suara. Mungkin ia pada sifar. Ia baik sebelum tidur — sekarang ia salah.</p>

<p>Kelantangan yang ditetapkan semula selepas tidur ialah pepijat macOS yang berterusan yang muncul dalam pelbagai bentuk merentas versi macOS yang berbeza. Inilah puncanya dan cara mengatasinya.</p>

<h2>Mengapa ia berlaku</h2>

<h3>1. Peranti output audio berubah semasa tidur</h3>
<p>Jika anda mempunyai fon kepala Bluetooth yang disambungkan sebelum tidur dan ia terputus sambungan semasa Mac tidur (bateri habis, bergerak di luar jangkauan), macOS bertukar ke pembesar suara terbina dalam apabila ia bangun. Oleh kerana macOS mengingati kelantangan per peranti, kelantangan berubah kepada apa sahaja pembesar suara ditetapkan terakhir — yang mungkin sangat berbeza daripada kelantangan fon kepala anda.</p>

<h3>2. Daemon Core Audio dimulakan semula</h3>
<p>Daemon audio macOS (coreaudiod) kadangkala dimulakan semula semasa kitaran tidur/bangun. Apabila ia dimulakan semula, ia mungkin dimulakan dengan tahap kelantangan lalai dan bukannya tetapan terakhir anda. Ini ialah pepijat sistem yang Apple telah perbaiki sebahagiannya dalam pelbagai kemas kini tetapi tidak pernah dihapuskan sepenuhnya.</p>

<h3>3. Penyambungan semula HDMI/DisplayPort</h3>
<p>Jika anda menggunakan paparan luaran melalui HDMI atau DisplayPort, menutup dan membuka penutup boleh menyebabkan paparan terputus sambungan dan menyambung semula. Sesetengah paparan juga merupakan peranti output audio, dan macOS mungkin bertukar ke atau dari pembesar suara paparan semasa proses ini, menukar kelantangan dalam proses tersebut.</p>

<h3>4. Penyambungan semula Bluetooth</h3>
<p>Apabila peranti Bluetooth menyambung semula selepas tidur, rundingan kelantangan boleh menghasilkan tahap yang berbeza daripada apa yang anda ada sebelumnya. Ini terutamanya biasa dengan fon kepala Bluetooth pihak ketiga (kurang dengan AirPods, yang Apple telah optimumkan).</p>

<h2>Pembetulan</h2>

<h3>Cegah pemutusan Bluetooth semasa tidur</h3>
<p>System Settings → Bluetooth → Advanced (atau klik "i" pada peranti anda). Beberapa tetapan mengawal sama ada Bluetooth kekal aktif semasa tidur. Mengekalkan sambungan aktif menghalang kitaran putus/sambung semula yang menetapkan semula kelantangan.</p>

<h3>Lumpuhkan pertukaran automatik untuk AirPods</h3>
<p>System Settings → Bluetooth → klik "i" bersebelahan AirPods → "Connect to This Mac" → tetapkan ke "When Last Connected to This Mac." Ini menghalang AirPods daripada menyambung secara automatik dari peranti lain semasa tidur.</p>

<h3>Tetapkan peranti output yang konsisten</h3>
<p>Selepas bangun dari tidur, tahan Option dan klik ikon Sound di bar menu. Pilih peranti output pilihan anda. Lakukan ini secara konsisten dan macOS akhirnya akan "melekat" pada pilihan anda.</p>

<h3>Tetapkan semula NVRAM (Mac Intel)</h3>
<p>Jika penetapan semula kelantangan adalah kronik, tetapkan semula NVRAM: matikan → hidupkan sambil menahan Option+Command+P+R selama 20 saat. Ini membersihkan tetapan audio yang tersimpan dan boleh memperbaiki masalah kelantangan yang berterusan.</p>

<h2>Lindungi keseimbangan audio anda dengan SoundDial</h2>

<p>Walaupun kelantangan sistem ditetapkan semula selepas tidur, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> melindungi keseimbangan kelantangan <em>per-aplikasi</em> anda. Ciri <strong>memori kelantangan</strong>nya menyimpan kelantangan setiap aplikasi secara bebas dan memulihkannya selepas bangun, mula semula, atau pelancaran semula aplikasi.</p>

<img src="/apps/sounddial.png" alt="SoundDial mengekalkan tahap kelantangan per-aplikasi selepas kitaran tidur dan bangun Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Jadi walaupun macOS menetapkan semula kelantangan sistem ke 80% selepas tidur, keseimbangan per-aplikasi anda kekal utuh:</p>
<ul>
  <li>Spotify masih pada 30% daripada kelantangan sistem</li>
  <li>Zoom masih pada 100%</li>
  <li>Slack masih disenyapkan</li>
</ul>

<p>Anda mungkin perlu memperbaiki kelantangan sistem (satu pelarasan), tetapi anda tidak perlu mengimbangi semula semua aplikasi anda (yang akan menjadi enam atau tujuh pelarasan). Dan dengan <strong>profil kelantangan</strong>, walaupun pemulihan penuh ialah satu klik.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Audio Mac untuk Pengeluaran Muzik: Kawal DAW dan Komunikasi Secara Berasingan",
    description:
      "Menggunakan Logic Pro atau Ableton sambil dalam panggilan Discord? Inilah cara mendengar DAW anda pada kesetiaan penuh sambil mengekalkan sembang suara pada tahap yang selesa.",
    date: "2026-03-28",
    readTime: "5 min baca",
    content: `
<p>Anda sedang menghasilkan muzik dalam Logic Pro (atau Ableton, atau FL Studio). Anda juga dalam Discord dengan kolaborator. Masalahnya: output DAW anda dan Discord berlawan untuk tahap kelantangan yang sama. Naikkan Logic untuk mendengar campuran anda dengan jelas dan Discord memekakkan telinga anda. Turunkan untuk Discord dan campuran anda terlalu perlahan untuk dinilai dengan betul.</p>

<p>Ini masalah sebenar untuk penerbit muzik pada Mac kerana kelantangan pemantauan secara langsung mempengaruhi keputusan pencampuran. Jika DAW anda terlalu perlahan kerana Discord bersaing, anda akan mencampur lebih kuat daripada yang dimaksudkan. Jika Discord menenggelamkan butiran, anda akan terlepas isu dalam campuran anda.</p>

<h2>Mengapa ini penting untuk pengeluaran</h2>

<p>Pengeluaran muzik memerlukan <strong>tahap pemantauan yang tepat</strong>. Anda perlu mendengar DAW anda pada kelantangan yang konsisten dan dikalibrasi untuk membuat keputusan pencampuran yang boleh dipercayai. Aplikasi komunikasi, pemberitahuan, dan sumber audio lain mengganggu ini — tetapi anda sering memerlukannya berjalan serentak untuk kolaborasi jarak jauh.</p>

<p>Studio profesional menyelesaikan ini dengan laluan monitor berasingan dan sistem talkback. Pada laptop, anda memerlukan perisian.</p>

<h2>Pendekatan dalaman DAW</h2>

<p>Anda boleh menggunakan tahap pemantauan dalaman DAW anda untuk mengekalkannya pada output yang konsisten, kemudian melaraskan kelantangan dalaman Discord. Tetapi:</p>
<ul>
  <li>Peluncur kelantangan output Discord tidak tepat dan terhad kepada 0-100%</li>
  <li>Anda masih tidak dapat menghalang bunyi sistem dan pemberitahuan daripada mengganggu pada tahap yang tidak dijangka</li>
  <li>Jika anda perlu merujuk trek dalam Spotify atau YouTube, itu juga pada kelantangan sistem</li>
</ul>

<h2>Kelantangan per-aplikasi untuk pengeluaran</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda menetapkan kelantangan tepat untuk setiap aplikasi secara bebas:</p>

<img src="/apps/sounddial.png" alt="SoundDial memisahkan output DAW dari Discord dan trek rujukan pada macOS untuk pengeluaran muzik" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Persediaan pengeluaran</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — tahap pemantauan utama anda</li>
  <li><strong>Discord / sembang suara:</strong> 40-60% — boleh didengar tetapi jelas sekunder daripada campuran anda</li>
  <li><strong>Spotify / trek rujukan:</strong> 80% — padankan tahap DAW anda untuk perbandingan A/B yang tepat</li>
  <li><strong>Slack / pemberitahuan:</strong> disenyapkan — sifar gangguan semasa pengeluaran</li>
  <li><strong>Safari / Chrome:</strong> 50% — untuk menonton tutorial tanpa merosakkan telinga anda</li>
</ul>

<h3>Simpan sebagai profil "Pengeluaran"</h3>
<p>Simpan konfigurasi ini dan gunakannya dengan satu klik apabila anda duduk untuk menghasilkan. Apabila anda selesai dan bertukar ke penggunaan biasa, gunakan profil "Normal" anda. Tiada pelarasan semula lapan aplikasi.</p>

<h3>Auto-ducking untuk sesi jarak jauh</h3>
<p>Jika anda dalam panggilan dengan kolaborator, auto-ducking SoundDial boleh menurunkan aplikasi bukan komunikasi apabila mikrofon aktif. Tetapi untuk pengeluaran, anda mungkin mahu <em>melumpuhkan</em> auto-ducking — anda memerlukan DAW anda pada tahap yang konsisten tanpa mengira sama ada anda bercakap. Togolnya ialah satu klik dalam tetapan.</p>

<h2>Nota tentang latensi</h2>

<p>SoundDial menggunakan API Core Audio Tap Apple untuk kawalan kelantangan. Pemprosesan menambah latensi yang tidak ketara — tidak dapat dilihat untuk tujuan pemantauan. Jika anda merakam dan memantau melalui DAW anda dengan pemantauan langsung diaktifkan, SoundDial tidak mengganggu laluan audio DAW anda. Ia hanya melaraskan tahap output yang sampai ke pembesar suara/fon kepala anda.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Kelantangan Apple Music Terlalu Rendah pada Mac? Cara Memperbaiki dan Meningkatkannya",
    description:
      "Apple Music pada kelantangan maksimum pada Mac anda tetapi masih terlalu perlahan? Semak Sound Check, tetapan EQ, dan pelajari cara meningkatkan Apple Music melebihi 100%.",
    date: "2026-03-30",
    readTime: "5 min baca",
    content: `
<p>Apple Music pada kelantangan penuh. Mac anda pada kelantangan penuh. Lagu yang anda tahu sepatutnya kuat hampir tidak kedengaran. Sementara itu, beralih ke Spotify — lagu yang sama, kelantangan yang sama — ia jauh lebih kuat. Apa yang berlaku?</p>

<p>Apple Music mempunyai beberapa tetapan yang boleh mengurangkan kelantangan main balik, dan ia tidak jelas. Mari kita lihat setiap satu.</p>

<h2>1. Semak Sound Check</h2>

<p>Apple Music mempunyai ciri yang dipanggil <strong>Sound Check</strong> yang menormalisasikan kelantangan semua trek supaya ia dimainkan pada kekuatan bunyi yang dirasakan hampir sama. Ini menghalang lonjakan kelantangan yang mengejutkan antara lagu, tetapi ia berbuat demikian dengan <em>mengurangkan</em> kelantangan trek yang lebih kuat — menjadikan semuanya lebih perlahan secara keseluruhan.</p>

<p>Untuk menyemak: Buka aplikasi Music → Settings (⌘,) → Playback → <strong>Sound Check</strong>.</p>

<p>Jika Sound Check diaktifkan, cuba lumpuhkannya. Lagu yang dikurangkan untuk memadankan trek yang lebih perlahan kini akan dimainkan pada tahap mastering asalnya — yang sering kali jauh lebih kuat.</p>

<h2>2. Semak tetapan EQ</h2>

<p>Apple Music mempunyai equalizer terbina dalam. Sesetengah pratetap EQ mengurangkan kelantangan keseluruhan untuk mengelakkan klipping apabila meningkatkan frekuensi tertentu.</p>

<p>Semak: Aplikasi Music → Settings → Playback → <strong>EQ</strong>. Jika pratetap EQ dipilih (terutamanya "Spoken Word," "Late Night," atau "Small Speakers"), cuba tetapkan ke "Off" dan lihat jika kelantangan bertambah baik.</p>

<p>EQ "Late Night" khususnya memampatkan julat dinamik — menjadikan bahagian senyap lebih kuat tetapi bahagian kuat lebih perlahan. Ini boleh menjadikan semuanya terasa "lebih rata" dan lebih rendah dalam kelantangan.</p>

<h2>3. Semak tetapan Audio Tanpa Rugi</h2>

<p>Jika anda mengaktifkan Apple Music Lossless (Settings → Audio Quality), strim berkualiti lebih tinggi mungkin sebenarnya pada kelantangan yang dirasakan lebih rendah daripada strim AAC standard untuk sesetengah trek. Ini kerana lossless tidak mempunyai pelarasan mastering yang sama yang Apple kenakan pada versi AAC.</p>

<p>Cuba tukar sementara ke kualiti AAC untuk melihat sama ada perbezaan kelantangan ketara.</p>

<h2>4. Keselamatan Fon Kepala</h2>

<p>System Settings → Sound → Headphone Safety. Jika "Reduce Loud Audio" dihidupkan, macOS mengehadkan kelantangan fon kepala anda secara global — mempengaruhi Apple Music bersama segala-galanya.</p>

<h2>5. Tingkatkan Apple Music melebihi 100%</h2>

<p>Jika anda telah menyemak semuanya dan Apple Music masih terlalu perlahan — sama ada Sound Check terlalu agresif, album yang senyap, atau pembesar suara MacBook anda tidak cukup kuat — peningkatan kelantangan per-aplikasi menyelesaikannya.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda meningkatkan Apple Music ke <strong>200%</strong>. Isyarat audio dikuatkan pada tahap sistem sebelum ia sampai ke pembesar suara atau fon kepala anda. Hanya Apple Music yang menjadi lebih kuat — Zoom, Slack, dan pelayar anda kekal pada tahap semasa mereka.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan Apple Music melebihi 100% pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ini juga berguna untuk masalah sebaliknya: jika Apple Music terlalu kuat berbanding panggilan Zoom anda, turunkan Apple Music ke 25% dalam SoundDial sambil mengekalkan Zoom pada 100%. Kawalan per-aplikasi bermakna anda tidak perlu berkompromi dengan kelantangan satu aplikasi untuk yang lain.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Pengadun Kelantangan Percuma untuk Mac: Apa yang Anda Sebenarnya Dapat (dan Apa yang Tidak)",
    description:
      "Mencari pengadun kelantangan per-aplikasi percuma untuk Mac? Inilah pecahan jujur tentang apa yang ditawarkan pilihan percuma, apa yang hilang, dan bila ia berbaloi untuk membayar.",
    date: "2026-04-03",
    readTime: "6 min baca",
    content: `
<p>Jika anda mencari "pengadun kelantangan percuma untuk Mac," anda akan menemui satu hasil utama: <strong>Background Music</strong>. Ia satu-satunya aplikasi kawalan kelantangan per-aplikasi percuma dan sumber terbuka yang ketara untuk macOS. Mari lihat apa yang anda sebenarnya dapat — dan apa yang anda korbankan.</p>

<h2>Background Music: pilihan percuma</h2>

<p>Background Music ialah aplikasi percuma, sumber terbuka yang dihoskan di GitHub. Ia memberi anda:</p>

<ul>
  <li><strong>Peluncur kelantangan per-aplikasi</strong> — kawalan kelantangan asas untuk setiap aplikasi yang berjalan</li>
  <li><strong>Auto-jeda muzik</strong> — menjeda pemain muzik anda apabila aplikasi lain memainkan audio, menyambung semula apabila ia berhenti</li>
  <li><strong>Tetapan peranti output lalai</strong> — mengatasi peranti mana yang digunakan oleh aplikasi secara lalai</li>
</ul>

<h3>Apa yang Background Music tidak ada</h3>
<ul>
  <li><strong>Tiada peningkatan kelantangan melebihi 100%</strong> — peluncur dari 0% hingga 100% sahaja. Tidak boleh menguatkan aplikasi yang perlahan.</li>
  <li><strong>Tiada profil kelantangan</strong> — tidak boleh menyimpan dan menukar antara konfigurasi</li>
  <li><strong>Tiada auto-ducking</strong> — auto-jeda berbeza daripada auto-duck. Jeda menghentikan muzik sepenuhnya; ducking menurunkannya ke tahap latar belakang yang selesa. Ramai orang lebih suka muzik latar belakang yang senyap semasa panggilan daripada kesunyian total.</li>
  <li><strong>Tiada memori kelantangan</strong> — tidak mengingati kelantangan per-aplikasi antara mula semula</li>
  <li><strong>Tiada pintasan papan kekunci</strong> — tiada kekunci pintas untuk menogol pengadun atau menyenyapkan semua aplikasi</li>
  <li><strong>Tiada penukaran peranti output</strong> — tidak boleh menukar pembesar suara/fon kepala dari panel yang sama</li>
</ul>

<h3>Masalah kebolehpercayaan</h3>
<p>Masalah terbesar Background Music bukan ciri — ia kestabilan. Ia berfungsi dengan memasang <strong>pemacu peranti audio maya</strong>, dan pemacu ini rosak dengan kemas kini macOS. Selepas hampir setiap keluaran macOS utama (Ventura, Sonoma, Sequoia, Tahoe), pengguna melaporkan:</p>
<ul>
  <li>Peranti maya gagal dipasang</li>
  <li>Audio berkeriut dan gangguan</li>
  <li>Aplikasi tidak dikesan</li>
  <li>Tiada output audio langsung</li>
  <li>Aplikasi ranap semasa pelancaran</li>
</ul>

<p>Oleh kerana ia projek sumber terbuka yang diselenggara oleh sukarelawan, pembetulan tidak sentiasa tepat pada masanya. Anda mungkin tanpa kelantangan per-aplikasi selama berminggu-minggu selepas kemas kini macOS.</p>

<h2>Pilihan "percuma" lain</h2>

<h3>eqMac (tier percuma)</h3>
<p>Tier percuma eqMac menyediakan equalizer seluruh sistem tetapi bukan kawalan kelantangan per-aplikasi. Ciri per-aplikasi memerlukan eqMac Pro (langganan). Versi percuma berguna jika anda terutamanya memerlukan EQ, bukan pencampuran kelantangan.</p>

<h3>macOS terbina dalam</h3>
<p>macOS tidak mempunyai pengadun kelantangan terbina dalam. Yang paling hampir ialah peluncur kelantangan amaran dalam System Settings → Sound, yang hanya mempengaruhi bunyi sistem — bukan audio aplikasi.</p>

<h2>Bila percuma mencukupi</h2>

<p>Background Music mungkin baik jika:</p>
<ul>
  <li>Anda hanya memerlukan kelantangan per-aplikasi asas (0-100%)</li>
  <li>Anda tidak memerlukan profil, auto-ducking, atau peningkatan kelantangan</li>
  <li>Anda selesa memperbaikinya apabila kemas kini macOS merosakkannya</li>
  <li>Anda tidak kisah dengan peranti audio maya dalam rantaian audio anda</li>
</ul>

<h2>Bila ia berbaloi untuk membayar</h2>

<p>Pengadun kelantangan berbayar berbaloi jika anda memerlukan:</p>
<ul>
  <li><strong>Kebolehpercayaan</strong> — berfungsi selepas kemas kini macOS tanpa menunggu pembetulan sukarelawan</li>
  <li><strong>Peningkatan kelantangan ke 200%</strong> — kuatkan aplikasi yang perlahan melebihi maksimum terbina dalam mereka</li>
  <li><strong>Profil</strong> — simpan konfigurasi dan tukar antara Mesyuarat/Fokus/Permainan dengan satu klik</li>
  <li><strong>Auto-ducking</strong> — pengurangan kelantangan automatik semasa panggilan, bukan hanya auto-jeda</li>
  <li><strong>Tiada pemacu sistem</strong> — berfungsi dengan API asli Apple, tiada peranti audio maya yang boleh rosak</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> berharga €14.99 — sekali sahaja, bukan langganan. Untuk konteks, itu kurang daripada dua bulan langganan Spotify, untuk alat yang akan anda gunakan setiap hari. Ia kurang daripada separuh harga SoundSource ($39), dan termasuk ciri (profil, auto-ducking) yang SoundSource tidak ada.</p>

<img src="/apps/sounddial.png" alt="SoundDial — pengadun kelantangan per-aplikasi yang boleh dipercayai untuk Mac dengan profil, auto-ducking, dan peningkatan 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — disemak Apple, kotak pasir, tiada pemacu sistem. €14.99 sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Cara Mengimbangi Kelantangan Muzik dan Sembang Suara pada Mac",
    description:
      "Muzik terlalu kuat melalui Discord. Atau panggilan terlalu perlahan di bawah Spotify. macOS tidak membenarkan anda mengimbanginya — inilah cara menetapkan nisbah yang sempurna.",
    date: "2026-04-05",
    readTime: "4 min baca",
    content: `
<p>Anda mahu mendengar muzik sambil bercakap dengan kawan di Discord (atau Zoom, atau FaceTime). Muzik perlu hadir tetapi tidak mengatasi. Sembang suara perlu jelas dan dominan. Permintaan mudah. macOS menjadikannya mustahil.</p>

<p>Dengan satu kelantangan sistem mengawal semuanya, anda tersekat: naikkan untuk panggilan dan muzik terlalu kuat. Turunkan untuk muzik dan anda tidak dapat mendengar kawan anda. Tiada cara terbina dalam untuk menetapkan dua perkara ini pada tahap yang berbeza.</p>

<h2>Penyelesaian kelantangan dalam-aplikasi</h2>

<p>Kedua-dua Spotify dan Discord mempunyai peluncur kelantangan dalaman. Secara teori, anda boleh menurunkan peluncur Spotify ke 30% dan mengekalkan output Discord pada 100%. Ini mencipta nisbah 30/100.</p>

<p>Dalam amalan:</p>
<ul>
  <li>Anda perlu beralih ke setiap aplikasi untuk melaraskan peluncurnya</li>
  <li>Nisbah berubah apabila anda melaraskan kelantangan sistem (kedua-duanya berskala secara berkadar)</li>
  <li>Tidak setiap aplikasi mempunyai peluncur kelantangan dalaman</li>
  <li>Ia tidak tepat — peluncur Spotify kecil, tiada peratusan dipaparkan</li>
  <li>Jika anda menutup dan membuka semula Spotify, peluncur mungkin ditetapkan semula</li>
</ul>

<h2>Penyelesaian sebenar: kelantangan per-aplikasi yang bebas</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> meletakkan kedua-dua Spotify dan Discord dalam panel yang sama dengan peluncur kelantangan bebas. Tetapkan nisbah yang anda mahu dan biarkan:</p>

<img src="/apps/sounddial.png" alt="SoundDial mengimbangi Spotify dan Discord pada tahap kelantangan yang berbeza pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Nisbah emas untuk muzik + sembang suara</h3>
<p>Berdasarkan cara kebanyakan orang menggunakan ini:</p>
<ul>
  <li><strong>Sembang suara pada 85-100%</strong> — sentiasa jelas kedengaran, dominan dalam campuran</li>
  <li><strong>Muzik pada 20-35%</strong> — hadir tetapi tidak bersaing dengan suara</li>
</ul>

<p>Nisbah tepat bergantung pada muzik, fon kepala anda, dan pilihan peribadi. Intinya ialah anda boleh mencari keseimbangan yang sempurna sekali dan mengekalkannya — dan bukannya sentiasa melaraskan.</p>

<h3>Simpan sebagai profil</h3>
<p>Simpan keseimbangan muzik/sembang suara anda sebagai profil. Profil "Permainan": Discord 100%, permainan 50%, Spotify 20%. Profil "Santai": Discord 70%, Spotify 60%. Tukar antara mereka dengan satu klik.</p>

<h3>Auto-ducking untuk panggilan</h3>
<p>Jika anda mendengar muzik dan panggilan masuk, auto-ducking SoundDial secara automatik menurunkan muzik ke tahap yang anda konfigurasikan. Apabila panggilan tamat, muzik naik semula. Tanpa menyentuh apa-apa.</p>

<p>Masalah keseimbangan audio ialah sesuatu yang setiap pengguna Mac hadapi sebaik sahaja mereka mempunyai muzik dan panggilan berjalan serentak. Ia pembetulan €14.99 sekali sahaja.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Kawalan Kelantangan Mac: Panduan Lengkap (2026)",
    description:
      "Segala yang anda perlu tahu tentang mengawal audio pada macOS — dari pintasan papan kekunci asas hingga kelantangan per-aplikasi, penukaran output, dan automasi.",
    date: "2026-06-12",
    readTime: "12 min baca",
    content: `
<p>macOS memberi anda peluncur kelantangan dan butang senyap. Itulah tahap kawalan audio terbina dalam Apple. Tetapi Mac anda sebenarnya mempunyai lebih banyak keupayaan audio daripada yang kelihatan di permukaan — pintasan papan kekunci tersembunyi, alat kelantangan per-aplikasi, pengurusan peranti output, dan ciri automasi yang kebanyakan pengguna tidak pernah temui.</p>

<p>Ini ialah panduan lengkap untuk mengawal audio pada Mac anda. Dari asas hingga ciri pengguna kuasa, semuanya di satu tempat.</p>

<h2>Bahagian 1: Kawalan kelantangan terbina dalam</h2>

<h3>Kekunci kelantangan</h3>
<p>Kekunci kelantangan naik (F12), kelantangan turun (F11), dan senyap (F10) melaraskan kelantangan sistem dalam 16 langkah. Setiap langkah kira-kira 6.25% daripada julat keseluruhan. Kelantangan semasa ditunjukkan sebagai tindanan pada skrin.</p>

<h3>Kelantangan halus: Option + Shift</h3>
<p>Tahan <strong>Option + Shift</strong> dan tekan kelantangan naik/turun. Setiap tekanan melaraskan sebanyak satu perempat daripada langkah biasa — memberi anda <strong>64 tahap kelantangan</strong> berbanding 16. Penting untuk mencari kelantangan fon kepala yang sempurna apabila langkah biasa terlalu kasar.</p>

<h3>Pelarasan kelantangan senyap: Shift</h3>
<p>Tahan <strong>Shift</strong> dan tekan kelantangan naik/turun. Kelantangan berubah tanpa bunyi maklum balas "pop" yang boleh didengar. Gunakan ini apabila melaraskan kelantangan semasa panggilan atau pembentangan.</p>

<h3>Peluncur kelantangan bar menu</h3>
<p>Jika ikon Sound ada di bar menu anda (aktifkan di System Settings → Control Center → Sound → Always Show in Menu Bar), mengkliknya menunjukkan peluncur kelantangan. Ini ialah peluncur berterusan, bukan bertingkat seperti kekunci papan kekunci, jadi anda boleh menetapkan mana-mana tahap yang tepat.</p>

<h3>Pusat Kawalan</h3>
<p>Klik ikon Pusat Kawalan (ikon dua-togol) di bar menu → klik bahagian Sound untuk peluncur kelantangan dan akses pantas ke pemilihan peranti output.</p>

<h2>Bahagian 2: Pengurusan peranti output</h2>

<h3>Menukar peranti output</h3>
<p>Kaedah terbina dalam terpantas: tahan <strong>Option</strong> dan klik ikon Sound di bar menu. Anda akan melihat senarai semua peranti output dan input yang tersedia. Klik satu untuk bertukar serta-merta.</p>

<p>Sebagai alternatif: System Settings → Sound → Output. Pilih peranti pilihan anda dari senarai.</p>

<h3>Pengurusan peranti Bluetooth</h3>
<p>macOS mengingati tahap kelantangan untuk setiap peranti output secara berasingan. Apabila anda bertukar dari pembesar suara (pada 70%) ke AirPods (pada 40%), kelantangan melaraskan kepada apa yang terakhir kali anda gunakan peranti itu. Ini boleh terasa seperti kelantangan "berubah sendiri" jika anda tidak menjangkakannya.</p>

<h3>Peranti agregat dan multi-output</h3>
<p>Untuk persediaan lanjutan, buka Audio MIDI Setup (Applications → Utilities) untuk mencipta peranti agregat (gabungkan berbilang input) atau peranti multi-output (hantar audio ke berbilang output secara serentak). Ini terutamanya berguna untuk persediaan audio profesional, bukan penggunaan harian.</p>

<h2>Bahagian 3: Kelantangan amaran dan pemberitahuan</h2>

<h3>Kelantangan amaran sistem</h3>
<p>macOS mempunyai peluncur kelantangan amaran berasingan: System Settings → Sound → Alert volume. Ini mengawal kelantangan bunyi sistem (Funk, Tink, Bottle, dll.) secara bebas daripada kelantangan utama. Walau bagaimanapun, ia hanya mempengaruhi amaran sistem macOS — bukan bunyi pemberitahuan daripada aplikasi pihak ketiga seperti Slack, Discord, atau Teams.</p>

<h3>Pengurusan bunyi pemberitahuan</h3>
<p>Pergi ke System Settings → Notifications. Untuk setiap aplikasi, anda boleh menogol "Play sound for notifications" hidup atau mati. Ini binari — anda tidak boleh menjadikan pemberitahuan aplikasi lebih perlahan, hanya hidup sepenuhnya atau mati sepenuhnya.</p>

<h3>Mod fokus</h3>
<p>Mod fokus (System Settings → Focus) menyekat pemberitahuan daripada aplikasi terpilih. Ia boleh menyenyapkan bunyi pemberitahuan, tetapi ia tidak mempengaruhi kelantangan media. Muzik anda terus dimainkan pada kelantangan penuh walaupun dalam Jangan Ganggu.</p>

<h2>Bahagian 4: Kawalan khusus fon kepala</h2>

<h3>Keselamatan Fon Kepala</h3>
<p>System Settings → Sound → Headphone Safety. "Reduce Loud Audio" mengehadkan kelantangan fon kepala berdasarkan pendedahan kumulatif. Anda boleh melumpuhkannya atau melaraskan ambang. Hanya mempengaruhi output fon kepala, bukan pembesar suara.</p>

<h3>Audio Spatial</h3>
<p>Untuk fon kepala yang disokong (AirPods Pro, AirPods Max, beberapa Beats), macOS menyokong Audio Spatial dengan penjejakan kepala. Aktifkan di Control Center → Sound → Spatial Audio. Ini mempengaruhi kedudukan bunyi yang dirasakan tetapi bukan kelantangan.</p>

<h3>Keseimbangan audio</h3>
<p>System Settings → Accessibility → Audio → Balance. Peluncur kiri-kanan yang melaraskan keseimbangan stereo. Pastikan ia dipusatkan jika satu sisi kedengaran lebih perlahan daripada yang lain.</p>

<h2>Bahagian 5: Apa yang macOS tidak boleh lakukan (dan cara memperbaikinya)</h2>

<h3>Kawalan kelantangan per-aplikasi</h3>
<p>macOS mempunyai satu peluncur kelantangan untuk semua aplikasi. Tiada cara terbina dalam untuk menetapkan Spotify ke 30% dan Zoom ke 100%. Ini ialah ciri audio yang paling diminta dalam macOS, dan Apple tidak pernah menambahnya.</p>

<h3>Peningkatan kelantangan melebihi 100%</h3>
<p>Kelantangan macOS dimaksimumkan pada 100%. Jika kandungan terlalu senyap walaupun pada kelantangan maksimum, tiada cara terbina dalam untuk menguatkan lebih lanjut.</p>

<h3>Profil kelantangan</h3>
<p>Tiada cara untuk menyimpan konfigurasi kelantangan (Spotify pada 30%, Zoom pada 100%, Slack disenyapkan) dan bertukar antara pratetap.</p>

<h3>Auto-ducking</h3>
<p>macOS tidak menurunkan audio latar belakang secara automatik apabila anda menyertai panggilan.</p>

<h3>Memori kelantangan per aplikasi</h3>
<p>macOS tidak mengingati tahap kelantangan per-aplikasi kerana kelantangan per-aplikasi tidak wujud.</p>

<p>Kelima-lima ini tersedia dengan <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — aplikasi bar menu macOS asli yang menambah pengadun kelantangan yang Apple tidak pernah bina.</p>

<img src="/apps/sounddial.png" alt="SoundDial — kawalan kelantangan per-aplikasi, profil, auto-ducking, dan peningkatan 200% untuk macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Bahagian 6: Kelantangan per-aplikasi dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mengisi setiap jurang yang disenaraikan di atas:</p>

<ul>
  <li><strong>Kelantangan per-aplikasi:</strong> Setiap aplikasi mendapat peluncurnya sendiri, 0% hingga 200%</li>
  <li><strong>Senyap per-aplikasi:</strong> Satu klik untuk menyenyapkan mana-mana aplikasi</li>
  <li><strong>Peningkatan kelantangan:</strong> Kuatkan aplikasi yang perlahan melebihi 100%</li>
  <li><strong>Profil kelantangan:</strong> Simpan konfigurasi dan tukar dengan satu klik</li>
  <li><strong>Auto-ducking:</strong> Audio latar belakang menurun semasa panggilan, memulihkan selepas</li>
  <li><strong>Memori kelantangan:</strong> Kelantangan setiap aplikasi diingati antara mula semula</li>
  <li><strong>Penukaran peranti output:</strong> Tukar pembesar suara/fon kepala dari panel yang sama</li>
  <li><strong>Pintasan papan kekunci:</strong> ⌃⌥S untuk menogol pengadun, ⌃⌥M untuk menyenyapkan semua</li>
</ul>

<p>Ia menggunakan API Core Audio Tap moden Apple — tiada pemacu sistem, tiada peranti audio maya, tiada sambungan kernel. Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> dengan harga €14.99 (pembelian sekali, tiada langganan), disemak Apple dan dalam kotak pasir. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Kelantangan VLC Terlalu Rendah pada Mac? Cara Meningkatkannya Melebihi 200%",
    description:
      "VLC pada kelantangan maksimum tetapi video masih terlalu perlahan? VLC mempunyai peningkatan 200% terbina dalam — dan anda boleh pergi lebih jauh lagi dengan pengadun kelantangan per-aplikasi.",
    date: "2026-04-08",
    readTime: "4 min baca",
    content: `
<p>Anda menonton video dalam VLC. Dialognya senyap. Anda naikkan kelantangan VLC sepenuhnya. Anda naikkan kelantangan Mac anda sepenuhnya. Masih tidak dapat dengar dengan betul. Video itu hanya dirakam terlalu perlahan.</p>

<p>Berita baik: VLC sebenarnya mempunyai penyelesaian terbina dalam yang kebanyakan orang tidak tahu. Berita yang lebih baik: anda boleh menggabungkannya dengan peningkatan tahap sistem untuk kelantangan yang lebih tinggi lagi.</p>

<h2>Peningkatan kelantangan terbina dalam VLC (sehingga 200%)</h2>

<p>VLC boleh melebihi 100% kelantangan sendiri. Peluncur kelantangan di bar pemain VLC dimaksimumkan pada 100%, tetapi anda boleh meningkatkannya lebih lanjut:</p>

<h3>Kaedah 1: Roda skrol</h3>
<p>Tuding tetikus anda di atas peluncur kelantangan VLC dan skrol ke atas. Peluncur akan melepasi tanda 100% yang kelihatan, sehingga 200%. Anda akan melihat peratusan dipaparkan semasa anda skrol.</p>

<h3>Kaedah 2: Pintasan papan kekunci</h3>
<p>Tekan <strong>Command + Anak Panah Atas</strong> (⌘↑) berulang kali untuk meningkatkan kelantangan melebihi 100%. Setiap tekanan menambah satu langkah. <strong>Command + Anak Panah Bawah</strong> (⌘↓) untuk menurunkan.</p>

<h3>Kaedah 3: Menu Audio</h3>
<p>Pergi ke VLC → Audio → Increase Volume. Ulang sehingga kelantangan cukup tinggi. Tahap semasa ditunjukkan di kanan bawah pemain.</p>

<p>Peningkatan 200% VLC berfungsi dengan menguatkan isyarat audio dalam penyahkod VLC. Pada tahap yang melampau ia boleh memperkenalkan herotan, tetapi untuk fail video yang benar-benar senyap ia sangat berkesan.</p>

<h2>Melebihi peningkatan VLC: penguatan tahap sistem</h2>

<p>Jika VLC pada 200% masih tidak cukup kuat — atau jika anda mahu meningkatkan VLC tanpa mempengaruhi tetapan audio dalamannya — pengadun kelantangan per-aplikasi tahap sistem menambah satu lagi lapisan penguatan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi VLC peluncur kelantangannya sendiri dari 0% hingga 200% pada tahap sistem. Ini digabungkan dengan peningkatan dalaman VLC:</p>

<ul>
  <li>Dalaman VLC: 200% × SoundDial: 200% = penguatan berkesan 400%</li>
  <li>Dalaman VLC: 150% × SoundDial: 150% = penguatan berkesan 225%</li>
</ul>

<p>Ini ialah penguatan yang melampau dan akan memperkenalkan herotan pada sesetengah kandungan, tetapi untuk bahan sumber yang sangat senyap ia mungkin yang anda perlukan.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan VLC pada tahap sistem pada macOS untuk fail video yang senyap" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Lebih penting lagi, SoundDial membolehkan anda meningkatkan VLC <strong>secara bebas</strong>. Pemain muzik, pelayar, dan aplikasi komunikasi anda kekal pada tahap biasa mereka manakala hanya VLC menjadi lebih kuat. Jika anda meningkatkan VLC ke 180% dalam SoundDial, Spotify tidak berubah. Ini sesuatu yang peningkatan terbina dalam VLC tidak boleh lakukan — peningkatan VLC hanya mempengaruhi VLC, tetapi kelantangan sistem tunggal macOS masih mengikat segala-galanya bersama.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Cara Melumpuhkan Audio Ducking pada Mac (atau Mengawalnya Sendiri)",
    description:
      "macOS atau aplikasi anda terus menurunkan muzik anda semasa panggilan tanpa bertanya. Inilah cara menghentikan audio ducking yang tidak diingini — atau menggantikannya dengan ducking yang anda benar-benar kawal.",
    date: "2026-04-10",
    readTime: "5 min baca",
    content: `
<p>Anda menyertai panggilan Zoom. Muzik anda turun hampir ke sifar. Anda tidak menyentuh apa-apa kawalan kelantangan — sesuatu melakukannya untuk anda. Ini ialah <strong>audio ducking</strong>: penurunan automatik audio latar belakang apabila panggilan atau sumber audio penting aktif.</p>

<p>Sesetengah orang menyukainya. Yang lain membencinya — terutamanya apabila ducking terlalu agresif (muzik turun ke sifar dan bukannya tahap latar belakang yang selesa) atau apabila ia dicetuskan secara tidak dijangka.</p>

<p>Inilah cara melumpuhkan ducking yang tidak diingini pada Mac, dan cara menggantikannya dengan ducking yang berfungsi seperti yang anda mahu.</p>

<h2>Dari mana audio ducking datang pada Mac</h2>

<p>macOS sendiri <strong>tidak</strong> mempunyai ciri audio ducking terbina dalam. Jika muzik anda menjadi lebih perlahan semasa panggilan, salah satu daripada ini menyebabkannya:</p>

<h3>1. Pemprosesan audio Zoom</h3>
<p>Zoom boleh mengurangkan audio sistem apabila ia diaktifkan. Semak Zoom → Settings → Audio dan lumpuhkan "Automatically adjust microphone volume." Juga cuba kurangkan penekanan bunyi dari "High" ke "Low."</p>

<h3>2. Pertukaran codec Bluetooth</h3>
<p>Apabila aplikasi mengaktifkan mikrofon fon kepala Bluetooth anda, macOS bertukar dari AAC ke codec SCO. Ini bukan benar-benar "ducking" — ia pertukaran codec yang menjadikan semuanya kedengaran lebih perlahan dan kualiti lebih rendah. Perbaikinya dengan menggunakan mikrofon berasingan.</p>

<h3>3. Aplikasi pihak ketiga yang melakukannya</h3>
<p>Sesetengah aplikasi audio (seperti Background Music) mempunyai ciri auto-jeda atau auto-duck. Sesetengah aplikasi media mengurangkan kelantangan mereka sendiri apabila mereka mengesan sumber audio lain. Semak mana-mana aplikasi utiliti audio yang anda telah pasang.</p>

<h3>4. Aplikasi komunikasi melaraskan audio</h3>
<p>Discord, Teams, dan aplikasi komunikasi lain mempunyai pemprosesan audio mereka sendiri yang boleh mempengaruhi kelantangan yang dirasakan bagi aplikasi lain. Semak tetapan audio setiap aplikasi untuk pilihan "automatically adjust" dan lumpuhkannya.</p>

<h2>Cara menghentikan ducking yang tidak diingini</h2>

<ol>
  <li><strong>Semak tetapan audio Zoom/Teams/Discord</strong> — lumpuhkan pelarasan kelantangan/mikrofon automatik</li>
  <li><strong>Gunakan mikrofon berasingan untuk panggilan</strong> — menghalang pertukaran codec Bluetooth</li>
  <li><strong>Alih keluar utiliti audio</strong> — Background Music, Soundflower, atau mana-mana aplikasi yang mungkin memintas audio</li>
  <li><strong>Semak macOS Accessibility</strong> — System Settings → Accessibility → Audio untuk sebarang tetapan yang tidak dijangka</li>
</ol>

<h2>Ganti ducking buruk dengan ducking yang baik</h2>

<p>Idea di sebalik audio ducking sebenarnya bagus — menurunkan audio latar belakang secara automatik semasa panggilan supaya anda boleh mendengar dengan jelas. Masalahnya ialah apabila ia terlalu agresif (muzik turun ke sifar), tidak boleh dikonfigurasi (anda tidak boleh memilih berapa banyak untuk diturunkan), atau dicetuskan oleh perkara yang salah.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mempunyai ciri auto-ducking terbina dalam yang memberi anda kawalan:</p>

<ul>
  <li><strong>Tahap duck yang boleh dikonfigurasi:</strong> Pilih dengan tepat berapa banyak untuk menurunkan audio latar belakang semasa panggilan — dari 10% (hampir senyap) ke 80% (hampir tidak dikurangkan). Lalai ialah 30%, yang mengekalkan muzik boleh didengar tetapi tidak mengganggu.</li>
  <li><strong>Pengesanan pintar:</strong> Mengesan panggilan dengan memantau penggunaan mikrofon — penunjuk yang sama dengan titik oren macOS. Berfungsi dengan Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Pemulihan sempurna:</strong> Apabila panggilan tamat, setiap aplikasi kembali ke kelantangan sebelumnya dengan tepat. Tiada pelarasan semula.</li>
  <li><strong>Togol mudah:</strong> Hidupkan atau matikan auto-ducking dalam tetapan SoundDial. Apabila anda tidak mahukannya, lumpuhkan. Apabila anda mahukannya kembali, aktifkan.</li>
</ul>

<img src="/apps/sounddial.png" alt="Auto-ducking boleh dikonfigurasi SoundDial — kawal dengan tepat berapa banyak audio latar belakang diturunkan semasa panggilan" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Perbezaannya: dan bukannya sesetengah aplikasi memutuskan muzik anda harus turun ke sifar semasa setiap panggilan, anda memutuskan ia harus turun ke 25%. Dan bukannya kehilangan kawalan, anda mendapatnya. Dan bukannya cuba melumpuhkan ciri tersembunyi dalam tiga aplikasi berbeza, anda mempunyai satu togol di satu tempat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Fon Kepala Bluetooth Terlalu Perlahan pada Mac? Setiap Pembetulan yang Berkesan",
    description:
      "Fon kepala Bluetooth anda berfungsi dengan baik pada telefon anda tetapi kedengaran perlahan pada Mac. Inilah setiap punca — dari isu codec hingga had kelantangan macOS — dan cara memperbaiki setiap satu.",
    date: "2026-04-12",
    readTime: "6 min baca",
    content: `
<p>Fon kepala Bluetooth anda cukup kuat pada telefon anda. Anda sambungkan ke Mac anda — dan semuanya lebih perlahan. Muzik kedengaran samar. Panggilan sukar didengar. Anda telah memaksimumkan kelantangan tetapi ia masih tidak cukup. Apa masalahnya?</p>

<p>Audio Bluetooth pada Mac mempunyai beberapa faktor pengurangan kelantangan yang tidak wujud pada telefon. Inilah setiap satu dan cara memperbaikinya.</p>

<h2>1. Keselamatan Fon Kepala mengehadkan kelantangan anda</h2>

<p>macOS mempunyai ciri terbina dalam yang mengehadkan kelantangan fon kepala untuk melindungi pendengaran anda. Ia mengukur pendedahan bunyi dari semasa ke semasa dan mengurangkan kelantangan maksimum jika ia fikir anda telah mendengar terlalu kuat.</p>

<p>Pergi ke <strong>System Settings → Sound → Headphone Safety</strong>. Jika "Reduce Loud Audio" diaktifkan, lumpuhkannya atau naikkan ambang. Ini ialah punca nombor satu fon kepala Bluetooth lebih perlahan pada Mac berbanding telefon.</p>

<h2>2. Ketidakpadanan codec Bluetooth</h2>

<p>Telefon anda mungkin menyambung ke fon kepala anda menggunakan codec berkualiti lebih tinggi (aptX, LDAC, AAC) manakala Mac anda lalai ke SBC (codec Bluetooth asas). Codec berbeza mempunyai ciri kelantangan maksimum yang berbeza.</p>

<p>macOS biasanya menggunakan AAC untuk peranti Apple dan SBC untuk fon kepala pihak ketiga. Jika fon kepala anda menyokong aptX atau LDAC, macOS tidak akan menggunakannya — Apple hanya menyokong AAC dan SBC.</p>

<p><strong>Pembetulan:</strong> Tidak banyak yang boleh anda lakukan tentang pemilihan codec pada macOS. Tetapi mengetahui ini menjelaskan mengapa fon kepala yang sama mungkin kedengaran berbeza (dan berpotensi lebih perlahan) pada Mac anda berbanding telefon Android menggunakan LDAC.</p>

<h2>3. Pengaktifan mikrofon mencetuskan SCO</h2>

<p>Apabila mana-mana aplikasi mengaktifkan mikrofon fon kepala Bluetooth anda (Zoom, FaceTime, Siri, diktasi), macOS bertukar dari AAC ke codec SCO. SCO direka untuk panggilan telefon pada tahun 2004 — ia kedengaran teruk dan jauh lebih perlahan.</p>

<p><strong>Pembetulan:</strong> Gunakan mikrofon berasingan (mikrofon Mac terbina dalam atau mikrofon USB) dan kekalkan fon kepala Bluetooth anda sebagai output sahaja. Dalam tetapan aplikasi panggilan anda, tetapkan input ke mikrofon Mac anda dan output ke fon kepala anda. Ini menghalang pertukaran SCO.</p>

<h2>4. Isu penyegerakan kelantangan Bluetooth</h2>

<p>Audio Bluetooth mempunyai dua kawalan kelantangan: satu di sisi Mac dan satu di sisi fon kepala. Mereka sepatutnya kekal diselaraskan, tetapi ia boleh tersasar — Mac menunjukkan 100% tetapi fon kepala sebenarnya tidak pada kelantangan penuh.</p>

<p><strong>Pembetulan:</strong> Putuskan sambungan fon kepala (System Settings → Bluetooth → klik "i" → Disconnect), tunggu 5 saat, sambung semula. Ini menyegerakkan semula kelantangan. Sesetengah fon kepala juga mempunyai butang kelantangan mereka sendiri — pastikan itu juga pada maksimum.</p>

<h2>5. Sambungan Bluetooth berkualiti rendah</h2>

<p>Jarak, gangguan (penghala WiFi, peranti USB 3.0), dan halangan antara Mac dan fon kepala anda boleh mengurangkan kualiti isyarat Bluetooth. Apabila isyarat lemah, macOS mungkin mengurangkan kadar bit audio, yang boleh mempengaruhi kelantangan dan kualiti yang dirasakan.</p>

<p><strong>Pembetulan:</strong> Bergerak lebih dekat ke Mac anda. Putuskan sambungan peranti Bluetooth lain yang tidak anda gunakan. Alihkan hab USB 3.0 dari Mac anda (USB 3.0 menghasilkan gangguan dalam jalur 2.4 GHz yang digunakan Bluetooth).</p>

<h2>6. Fon kepala itu sendiri</h2>

<p>Sesetengah fon kepala Bluetooth mempunyai kelantangan maksimum yang lebih rendah daripada yang lain. Fon kepala over-ear dengan pemacu yang lebih besar biasanya lebih kuat daripada earbud. Fon kepala pembatalan bunyi mungkin mempunyai had kelantangan terbina dalam firmware mereka.</p>

<p>Semak aplikasi pengeluar fon kepala (Sony Headphones Connect, Bose Music, Sennheiser Smart Control, dll.) untuk tetapan had kelantangan. Sesetengah fon kepala mempunyai mod "pendengaran selamat" yang mengehadkan kelantangan.</p>

<h2>Masih perlahan? Tingkatkan melebihi 100%</h2>

<p>Jika anda telah menyemak semuanya di atas dan fon kepala anda masih terlalu perlahan pada Mac, anda memerlukan penguatan kelantangan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> meningkatkan kelantangan mana-mana aplikasi sehingga <strong>200%</strong>. Jika Spotify melalui fon kepala Bluetooth anda terlalu perlahan, seret peluncurnya ke 160%. Isyarat audio dikuatkan sebelum ia sampai ke fon kepala anda, dengan berkesan menggandakan kelantangan yang tersedia untuk aplikasi itu.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan aplikasi untuk fon kepala Bluetooth pada Mac dengan peluncur per-aplikasi ke 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Peningkatan per-aplikasi lebih baik daripada peningkatan kelantangan seluruh sistem kerana anda hanya boleh menguatkan aplikasi yang perlahan. Jika podcast anda perlahan tetapi muzik baik, tingkatkan aplikasi podcast ke 170% sambil mengekalkan Spotify pada 80%. Setiap aplikasi kekal pada tahap yang betul.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Audio Mac untuk OBS dan Penstriman: Cara Mengawal Apa yang Penonton Anda Dengar",
    description:
      "Menstrim pada Mac dengan OBS? Penonton anda mendengar semuanya pada kelantangan yang sama — permainan, muzik, amaran, Discord. Inilah cara mengimbangi sumber audio dengan betul.",
    date: "2026-04-15",
    readTime: "7 min baca",
    content: `
<p>Anda sedang menstrim pada Mac anda dengan OBS. Audio permainan anda memekakkan. Panggilan Discord anda berjalan. Spotify memainkan muzik latar belakang. Bunyi amaran berbunyi apabila seseorang melanggan. Penonton anda mendengar semua ini pada kelantangan yang sama — kekacauan di mana panggilan Discord bersaing dengan letupan dan muzik menenggelamkan komen anda.</p>

<p>Masalah teras: macOS memberi anda satu output audio, dan OBS menangkapnya sebagai satu aliran gabungan. Anda tidak boleh memberitahu OBS "tangkap permainan pada 40%, Discord pada 80%, dan Spotify pada 20%" kerana macOS tidak memisahkannya.</p>

<h2>Masalah audio penstriman Mac</h2>

<p>Pada Windows, OBS boleh menangkap audio aplikasi individu secara asli. Anda menambah setiap aplikasi sebagai sumber audio berasingan dan mencampurnya secara bebas dalam OBS. Pada Mac, ini tidak terbina dalam. OBS pada macOS boleh menangkap:</p>

<ul>
  <li><strong>Desktop Audio</strong> — semuanya yang dimainkan pada Mac anda, digabungkan menjadi satu aliran</li>
  <li><strong>Microphone/Aux</strong> — input mikrofon anda</li>
  <li><strong>Application Audio Capture (macOS 13+)</strong> — tangkap audio aplikasi tertentu, tetapi persediaan manual dan terhad</li>
</ul>

<p>Sumber Application Audio Capture (ditambah dalam OBS 30+) berfungsi untuk mengasingkan satu aplikasi, tetapi menguruskan lima sumber audio dengan tahap berasingan dalam OBS adalah kompleks dan tidak setiap aplikasi bekerjasama.</p>

<h2>Pendekatan yang lebih mudah: kawal tahap sebelum OBS menangkapnya</h2>

<p>Daripada cuba memisahkan audio dalam OBS, kawal kelantangan setiap aplikasi <em>sebelum</em> ia sampai ke tangkapan audio desktop OBS. Jika anda turunkan Spotify ke 20% dan tingkatkan Discord ke 90% pada tahap sistem, tangkapan audio desktop OBS mengambil campuran yang sudah seimbang.</p>

<p>Inilah yang <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lakukan. Tetapkan setiap aplikasi ke tahap yang anda mahu penonton anda dengar:</p>

<img src="/apps/sounddial.png" alt="SoundDial mengimbangi tahap audio permainan, Discord, dan muzik untuk penstriman OBS pada Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Persediaan audio penstriman biasa</h3>
<ul>
  <li><strong>Permainan:</strong> 50% — hadir tetapi tidak mengatasi suara anda</li>
  <li><strong>Discord / sembang suara:</strong> 80% — panggilan yang jelas dari pasukan anda</li>
  <li><strong>Spotify / muzik:</strong> 15% — suasana latar belakang yang halus</li>
  <li><strong>Amaran strim (pelayar):</strong> 40% — boleh didengar tetapi tidak mengejutkan</li>
  <li><strong>Slack / pemberitahuan:</strong> disenyapkan — penonton tidak perlu mendengar DM anda</li>
</ul>

<h3>Simpan sebagai profil "Penstriman"</h3>
<p>Simpan konfigurasi ini sebagai profil kelantangan dalam SoundDial. Sebelum anda siaran langsung, gunakan profil "Penstriman" dengan satu klik. Setiap aplikasi melompat ke tahap yang dioptimumkan untuk penstriman. Apabila anda selesai menstrim, tukar kembali ke profil "Normal" atau "Permainan" anda.</p>

<h2>Apa yang anda dengar vs. apa yang penonton dengar</h2>

<p>Dengan SoundDial melaraskan kelantangan per-aplikasi pada tahap sistem, anda dan penonton anda mendengar campuran seimbang yang sama. Ini lebih mudah daripada cuba mengekalkan campuran berasingan (satu untuk anda, satu untuk strim) — yang memerlukan peranti audio maya dan penghalaan kompleks yang rapuh pada Mac.</p>

<p>Jika anda memerlukan campuran yang benar-benar berasingan untuk strim anda berbanding fon kepala anda (cth., anda mahu mendengar Discord lebih kuat daripada penonton anda), anda memerlukan persediaan penghalaan yang lebih kompleks dengan peranti audio maya. Tetapi untuk kebanyakan penstrim, satu campuran yang seimbang dengan baik — dikawal dengan mudah dari bar menu — ialah tepat apa yang diperlukan.</p>

<h2>Mengapa kawalan per-aplikasi lebih baik daripada pencampuran OBS sahaja</h2>

<ul>
  <li><strong>Pelarasan segera:</strong> Pertengahan strim, penonton kata permainan terlalu kuat. Klik bar menu, seret satu peluncur. Selesai. Tanpa menjeda, tanpa membuka tetapan OBS.</li>
  <li><strong>Berfungsi di luar OBS:</strong> Persediaan audio seimbang anda berfungsi walaupun anda tidak menstrim. Profil yang sama, kemudahan yang sama.</li>
  <li><strong>Tiada peranti audio maya:</strong> SoundDial menggunakan API Audio Tap asli Apple — tiada Soundflower, tiada BlackHole, tiada pemacu yang rosak pada kemas kini macOS.</li>
</ul>

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — disemak Apple, €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Cara Membuat Mac Anda Mengingati Kelantangan Per Aplikasi",
    description:
      "Setiap kali anda memulakan semula Spotify atau melancarkan semula Zoom, anda perlu melaraskan semula kelantangan. Inilah cara membuat macOS mengingati tahap kelantangan setiap aplikasi secara automatik.",
    date: "2026-04-18",
    readTime: "4 min baca",
    content: `
<p>Anda menghabiskan lima minit untuk mendapatkan tahap audio anda sempurna. Spotify pada 30%, Zoom pada 100%, Slack pada 15%. Kemudian anda memulakan semula Mac anda. Atau Slack ranap dan melancarkan semula. Atau anda menutup Spotify dan membukanya semula kemudian. Setiap aplikasi ditetapkan semula ke kelantangan lalainya. Anda melaraskan semula semuanya. Lagi.</p>

<p>macOS mengingati kelantangan sistem merentas mula semula. Tetapi ia tidak mengingati kelantangan per-aplikasi — kerana macOS tidak mempunyai kawalan kelantangan per-aplikasi pada awalnya. Tiada apa yang perlu diingati.</p>

<h2>Mengapa aplikasi tidak mengingati kelantangan mereka sendiri</h2>

<p>Sesetengah aplikasi (seperti Spotify dan VLC) mempunyai peluncur kelantangan dalaman yang disimpan antara sesi. Tetapi kebanyakan aplikasi — pelayar, alat komunikasi, utiliti sistem — tidak mempunyai kawalan kelantangan mereka sendiri. Dan walaupun aplikasi yang menyimpan kelantangan dalaman hanya mengingati kedudukan peluncur mereka sendiri, bukan kelantangan mereka berbanding aplikasi lain.</p>

<p>Apa yang anda benar-benar mahu ialah <em>sistem</em> mengingati: "Spotify sepatutnya pada 30% daripada kelantangan sistem, sentiasa." macOS tidak menyokong konsep ini.</p>

<h2>Memori kelantangan dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mempunyai ciri <strong>Memori Kelantangan</strong>. Apabila diaktifkan, ia menyimpan tahap kelantangan setiap aplikasi mengikut pengecam bundlenya. Apabila aplikasi ditutup dan dilancarkan semula — sama ada anda memulakannya semula, ia ranap, atau anda memulakan semula Mac anda — SoundDial secara automatik memulihkannya ke kelantangan yang disimpan.</p>

<img src="/apps/sounddial.png" alt="Memori kelantangan SoundDial — mengingati dan memulihkan tahap kelantangan per-aplikasi pada macOS secara automatik" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Cara ia berfungsi</h3>
<ol>
  <li>Aktifkan "Remember volume per app" dalam tetapan SoundDial</li>
  <li>Tetapkan setiap aplikasi ke kelantangan pilihan anda</li>
  <li>SoundDial menyimpan tahap secara automatik</li>
  <li>Apabila aplikasi dilancarkan semula, kelantangan dipulihkan ke tepat di mana ia berada</li>
</ol>

<p>Tiada penyimpanan manual. Tiada pelarasan semula. Kali pertama anda menetapkan kelantangan anda ialah kali terakhir.</p>

<h3>Apa yang diingati</h3>
<ul>
  <li><strong>Tahap kelantangan</strong> — peratusan tepat (0% hingga 200%)</li>
  <li><strong>Keadaan senyap</strong> — jika anda menyenyapkan aplikasi, ia kekal disenyapkan apabila ia dilancarkan semula</li>
  <li><strong>Per aplikasi</strong> — kelantangan setiap aplikasi disimpan secara bebas mengikut ID bundle</li>
</ul>

<h3>Aplikasi baharu mendapat kelantangan lalai</h3>
<p>Apabila aplikasi dilancarkan buat pertama kali (yang SoundDial belum lihat sebelumnya), ia mendapat kelantangan lalai yang boleh dikonfigurasi. Anda boleh menetapkan lalai ini dalam tetapan SoundDial — supaya aplikasi baharu bermula pada 80% (atau apa sahaja yang anda pilih) dan bukannya berpotensi memekakkan pada 100%.</p>

<h2>Memori kelantangan + profil = tetap dan lupakan</h2>

<p>Memori kelantangan mengendalikan hari ke hari: aplikasi mengekalkan tahap mereka merentas mula semula. Profil mengendalikan penukaran situasi: mod "Mesyuarat", mod "Fokus", mod "Permainan" — gunakan dengan satu klik dan setiap aplikasi melompat ke tahap yang betul untuk situasi itu.</p>

<p>Bersama-sama, anda hampir tidak pernah melaraskan peluncur kelantangan secara manual. Aplikasi mengingati tahap terakhirnya, dan apabila anda menukar konteks, profil menetapkan semuanya sekaligus.</p>

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — disemak Apple, €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Kelantangan Podcast Terlalu Rendah pada Mac? Cara Menjadikannya Lebih Kuat",
    description:
      "Sesetengah podcast berbisik-perlahan pada Mac walaupun pada kelantangan maksimum. Inilah sebabnya — dan cara meningkatkan audio podcast melebihi 100% tanpa mempengaruhi aplikasi lain.",
    date: "2026-04-20",
    readTime: "5 min baca",
    content: `
<p>Anda mendengar podcast pada Mac anda. Hos kedengaran baik, tetapi tetamu — merakam dari mikrofon laptop di dapur mereka — hampir tidak kedengaran. Anda naikkan kelantangan ke 100%. Hos kini terlalu kuat, tetapi tetamu masih senyap. Tiada cara untuk menang kerana masalahnya dalam rakaman, bukan Mac anda.</p>

<p>Kualiti audio podcast sangat berbeza-beza. Rancangan profesional dimaster pada tahap yang konsisten. Tetapi temu bual, podcast indie, dan rakaman langsung sering mempunyai tetamu pada -20 dB atau lebih rendah — jauh lebih perlahan daripada hos atau muzik intro.</p>

<h2>Mengapa sesetengah podcast begitu senyap</h2>

<ul>
  <li><strong>Kualiti mikrofon tetamu:</strong> Satu hos mempunyai persediaan profesional, tetamu menggunakan AirPods. Perbezaan tahap boleh 15+ dB.</li>
  <li><strong>Tiada pasca-pengeluaran:</strong> Podcast yang dihasilkan secara profesional memampatkan dan menormalisasikan tahap. Banyak yang tidak.</li>
  <li><strong>Aplikasi podcast tidak menormalisasikan:</strong> Apple Podcasts dan Spotify menerapkan normalisasi kekuatan bunyi yang minimum atau tiada pada kandungan podcast (tidak seperti muzik).</li>
  <li><strong>Julat dinamik:</strong> Sesetengah penerbit podcast sengaja mengekalkan julat dinamik tinggi untuk bunyi "semula jadi" — yang bermakna bahagian senyap sangat senyap.</li>
</ul>

<h2>Pembetulan dalam-aplikasi</h2>

<h3>Apple Podcasts</h3>
<p>Apple Podcasts tidak mempunyai ciri normalisasi kelantangan atau peningkatan. Apa yang podcast sampaikan itulah yang anda dapat. Kawalan kelantangan dalam-aplikasi dalam versi lama telah dialih keluar — ia kini hanya menggunakan kelantangan sistem.</p>

<h3>Spotify</h3>
<p>Tetapan "Normalize volume" Spotify (Settings → Playback) boleh membantu dengan konsistensi kelantangan antara podcast yang berbeza, tetapi kesannya pada dinamik dalam-episod terhad. Cuba tetapkan ke "Loud" untuk normalisasi maksimum.</p>

<h3>Overcast (pelayar)</h3>
<p>Jika anda menggunakan Overcast (melalui web di overcast.fm), ia mempunyai ciri "Voice Boost" yang menguatkan dan memampatkan audio podcast dengan ketara, menjadikan suara senyap lebih kuat. Ini ialah salah satu penyelesaian terbina dalam yang terbaik — tetapi ia hanya berfungsi dalam Overcast.</p>

<h2>Pembetulan tahap sistem: tingkatkan aplikasi podcast melebihi 100%</h2>

<p>Pembetulan universal ialah menguatkan aplikasi podcast anda melebihi had 100% macOS. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi peluncur kelantangan sehingga <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan Apple Podcasts ke 180% pada Mac untuk episod podcast yang senyap" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tetapkan Apple Podcasts atau aplikasi podcast anda ke 160-180% sambil mengekalkan muzik Spotify pada 40% dan Slack pada 15%. Podcast menjadi lebih kuat tanpa menjadikan segala-galanya lebih menyakitkan telinga. Apabila anda beralih kembali ke muzik, turunkan sahaja aplikasi podcast kembali ke normal — atau biarkan memori kelantangan SoundDial mengingatinya secara automatik.</p>

<p>Pendekatan per-aplikasi ini lebih baik daripada peningkatan kelantangan seluruh sistem kerana:</p>
<ul>
  <li>Hanya aplikasi podcast yang perlahan menjadi lebih kuat</li>
  <li>Muzik kekal pada tahap pilihan anda</li>
  <li>Audio panggilan kekal pada tahap pilihan anda</li>
  <li>Bunyi pemberitahuan tidak tiba-tiba menjadi memekakkan telinga</li>
</ul>

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — disemak Apple, €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Persediaan Audio Mac untuk Kelas dan Kuliah Dalam Talian",
    description:
      "Menonton kuliah sambil mengambil nota, mencari rujukan Google, dan bersembang dengan rakan sekelas — semuanya pada kelantangan yang berbeza. Inilah cara menguruskan audio pelajar pada Mac.",
    date: "2026-04-22",
    readTime: "5 min baca",
    content: `
<p>Anda seorang pelajar yang menghadiri kuliah dalam talian di Zoom. Anda mempunyai tutorial YouTube terbuka di tab lain untuk rujukan. Rakan sekelas anda bersembang di Discord. Spotify memainkan muzik lo-fi di latar belakang. Mac anda melayan semua ini sebagai satu kelantangan. Turunkan lo-fi dan anda tidak dapat mendengar profesor anda. Naikkan kuliah dan ping Discord memecah konsentrasi anda.</p>

<p>macOS mempunyai satu peluncur kelantangan untuk semuanya. Untuk pelajar yang menguruskan berbilang sumber audio, ini ialah titik geseran yang berterusan.</p>

<h2>Timbunan audio pelajar yang tipikal</h2>

<ul>
  <li><strong>Platform kuliah</strong> (Zoom, Teams, Google Meet, Webex) — perlu sangat jelas, sentiasa boleh didengar</li>
  <li><strong>Bahan rujukan</strong> (tutorial YouTube, kuliah yang dirakam) — kelantangan sederhana, perlu boleh dijeda/dilaraskan</li>
  <li><strong>Muzik belajar</strong> (Spotify, Apple Music) — tahap latar belakang rendah, tidak sepatutnya bersaing dengan kuliah</li>
  <li><strong>Sembang</strong> (Discord, iMessage, Slack) — bunyi pemberitahuan yang halus, tidak mengganggu</li>
  <li><strong>Tab pelayar</strong> — kandungan auto-main sesekali yang perlu disenyapkan serta-merta</li>
</ul>

<h2>Keterbatasan macOS</h2>

<p>Dengan satu kelantangan sistem, anda dipaksa berkompromi. Tetapkan cukup tinggi untuk mikrofon profesor yang perlahan, dan Spotify terlalu kuat. Tetapkan untuk muzik yang selesa, dan kuliah tidak kedengaran. Senyapkan Spotify dan anda hilang manfaat fokus muzik latar belakang. Tiada keseimbangan yang selesa kerana setiap aplikasi dikunci pada tahap yang sama.</p>

<h2>Menyediakan audio per-aplikasi untuk belajar</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi peluncur kelantangannya sendiri, supaya anda boleh membina persediaan audio belajar yang ideal:</p>

<img src="/apps/sounddial.png" alt="Persediaan pelajar SoundDial — kuliah pada kelantangan penuh, muzik belajar rendah, pemberitahuan disenyapkan" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil kuliah</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100% — jangan terlepas sepatah perkataan pun</li>
  <li><strong>Spotify:</strong> 15% — suasana latar belakang yang hampir tiada</li>
  <li><strong>Discord:</strong> 10% — pemberitahuan halus sahaja</li>
  <li><strong>Pelayar:</strong> 40% — untuk video rujukan apabila diperlukan</li>
  <li><strong>iMessage:</strong> disenyapkan — semak antara kelas</li>
</ul>

<h3>Profil belajar sendiri</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — muzik belajar yang memotivasikan</li>
  <li><strong>Pelayar:</strong> 70% — video tutorial pada tahap yang jelas</li>
  <li><strong>Discord:</strong> 20% — tersedia untuk kumpulan belajar</li>
  <li><strong>Lain-lain:</strong> disenyapkan</li>
</ul>

<h3>Profil rehat</h3>
<ul>
  <li><strong>Semuanya:</strong> 60-80% — berehat antara kelas</li>
</ul>

<p>Simpan setiap satu sebagai profil kelantangan dan tukar antara mereka dengan satu klik semasa hari anda berlalu. Apabila kuliah bermula, gunakan "Kuliah" — auto-ducking akan mengendalikan selebihnya, menurunkan muzik anda secara automatik apabila profesor bercakap melalui mikrofon anda.</p>

<h2>Mengapa ini penting untuk fokus</h2>

<p>Kajian secara konsisten menunjukkan bahawa mempunyai persekitaran audio yang betul meningkatkan konsentrasi dan pengekalan. Campuran yang salah — muzik terlalu kuat, pemberitahuan terlalu kerap, kuliah terlalu perlahan — mencipta beban kognitif yang tiada kaitan dengan bahan yang anda pelajari. Mendapatkan audio yang betul sekali, menyimpannya sebagai profil, dan tidak pernah memikirkannya lagi menghilangkan sumber gangguan yang berterusan.</p>

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — disemak Apple, €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Bunyi Mac Tidak Berfungsi Selepas Kemas Kini? Panduan Pembetulan Lengkap",
    description:
      "Anda mengemas kini macOS dan kini bunyi anda hilang, berkeriut, atau tersekat pada kelantangan yang salah. Inilah setiap pembetulan untuk mendapatkan audio Mac anda berfungsi semula.",
    date: "2026-04-25",
    readTime: "7 min baca",
    content: `
<p>Anda mengemas kini macOS. Semuanya kelihatan baik — sehingga anda perasan tiada bunyi. Atau bunyi berkeriut. Atau kelantangan tersekat. Atau peranti output audio anda hilang. Isu audio pasca-kemas kini berlaku dengan hampir setiap keluaran macOS, dan ia berjulat dari sedikit menjengkelkan hingga senyap sepenuhnya.</p>

<p>Inilah panduan sistematik untuk memperbaiki audio Mac selepas kemas kini macOS, meliputi setiap isu dan penyelesaian yang diketahui.</p>

<h2>Langkah 1: Semak yang jelas</h2>

<h3>Adakah ia disenyapkan?</h3>
<p>Tekan kekunci naikkan kelantangan. Semak jika penunjuk kelantangan muncul pada skrin. Kadangkala kemas kini menetapkan semula kelantangan sistem ke sifar atau mengaktifkan senyap.</p>

<h3>Adakah peranti output yang betul dipilih?</h3>
<p>Pergi ke System Settings → Sound → Output. Selepas kemas kini, macOS kadangkala bertukar ke peranti output yang tidak dijangka — pembesar suara monitor yang disambungkan, peranti Bluetooth yang tidak disambungkan, atau pembesar suara terbina dalam apabila anda mahukan yang luaran. Pilih peranti yang betul.</p>

<h3>Adakah Keselamatan Fon Kepala mengehadkan kelantangan?</h3>
<p>Kemas kini kadangkala menetapkan semula Keselamatan Fon Kepala ke lalainya (diaktifkan). Semak System Settings → Sound → Headphone Safety dan lumpuhkan "Reduce Loud Audio" jika ia dihidupkan oleh kemas kini.</p>

<h2>Langkah 2: Mulakan semula Core Audio</h2>

<p>Daemon audio (coreaudiod) sering masuk ke keadaan buruk selepas kemas kini. Memulakannya semula ialah pembetulan paling berkesan.</p>

<p>Buka Terminal dan jalankan:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Audio akan terputus sebentar dan mula semula. Uji jika bunyi berfungsi sekarang. Jika ini memperbaikinya, isunya ialah keadaan daemon audio yang basi — biasa selepas kemas kini.</p>

<h2>Langkah 3: Tetapkan semula NVRAM/PRAM</h2>

<p>Untuk Mac Intel: matikan sepenuhnya, kemudian hidupkan sambil menahan <strong>Option + Command + P + R</strong> selama kira-kira 20 saat. Ini menetapkan semula NVRAM, yang menyimpan tetapan kelantangan, pemilihan cakera permulaan, dan keutamaan tahap rendah yang lain.</p>

<p>Untuk Mac Apple Silicon (M1/M2/M3/M4): NVRAM ditetapkan semula secara automatik apabila diperlukan. Mula semula penuh (bukan hanya tidur/bangun) biasanya mencukupi.</p>

<h2>Langkah 4: Semak konflik pemacu audio pihak ketiga</h2>

<p>Kemas kini macOS sering merosakkan pemacu audio pihak ketiga dan sambungan kernel. Jika anda mempunyai mana-mana ini dipasang, ia mungkin menyebabkan masalah:</p>

<ul>
  <li><strong>Soundflower</strong> — dihentikan, sering berkonflik dengan macOS yang lebih baharu</li>
  <li><strong>BlackHole</strong> — peranti audio maya, mungkin perlu dikemas kini selepas kemas kini macOS</li>
  <li><strong>Loopback</strong> — mungkin memerlukan versi baharu untuk macOS yang dikemas kini</li>
  <li><strong>Background Music</strong> — memasang peranti audio maya yang sering rosak pada kemas kini</li>
  <li><strong>Pemacu antara muka audio</strong> — Focusrite, Universal Audio, dll. semak pemacu yang dikemas kini</li>
</ul>

<p><strong>Pembetulan:</strong> Alih keluar atau kemas kini perisian yang berkonflik. Untuk peranti audio maya, semak jika peranti audio yang dipasang oleh aplikasi muncul dalam System Settings → Sound → Output — jika ya dan ia dipilih, tukar ke pembesar suara sebenar anda. Kemudian kemas kini atau nyahpasang aplikasi pihak ketiga.</p>

<h2>Langkah 5: But Mod Selamat</h2>

<p>But ke Mod Selamat untuk menentukan jika isu disebabkan oleh item permulaan atau sambungan pihak ketiga:</p>

<ul>
  <li><strong>Apple Silicon:</strong> Matikan → tahan butang kuasa sehingga "Loading startup options" muncul → pilih cakera permulaan anda → tahan Shift → klik "Continue in Safe Mode"</li>
  <li><strong>Intel:</strong> Mula semula → tahan Shift semasa but sehingga anda melihat tetingkap log masuk</li>
</ul>

<p>Jika audio berfungsi dalam Mod Selamat, sambungan kernel pihak ketiga atau item log masuk ialah puncanya. Siasat perisian yang baru dipasang.</p>

<h2>Langkah 6: Cipta akaun pengguna baharu</h2>

<p>Jika isu berterusan, cipta akaun pengguna sementara baharu (System Settings → Users & Groups → Add User). Log masuk ke akaun baharu dan uji audio. Jika bunyi berfungsi dalam akaun baharu, isunya dengan profil pengguna anda — fail keutamaan yang rosak atau konfigurasi audio.</p>

<h2>Mencegah isu masa depan dengan SoundDial</h2>

<p>Satu kelebihan <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> berbanding alat audio lain: ia tidak memasang pemacu audio sistem. Ia menggunakan API Core Audio Tap asli Apple, yang bermakna ia berfungsi dengan lancar dengan kemas kini macOS tanpa konflik yang membelenggu aplikasi peranti audio maya.</p>

<p>Jika anda telah menggunakan Background Music atau Soundflower dan ia rosak selepas kemas kini, SoundDial ialah pengganti yang tidak akan mempunyai masalah yang sama. Kawalan kelantangan per-aplikasi, peningkatan kelantangan ke 200%, profil, auto-ducking — semuanya tanpa sambungan kernel atau peranti audio maya.</p>

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — disemak Apple, €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Cara Menyenyapkan Semua Aplikasi Sekaligus pada Mac (dan Menyahsenyapkannya dengan Sempurna)",
    description:
      "Perlukan kesunyian segera? Kekunci senyap menyenyapkan semuanya — tetapi menyahsenyapkan menetapkan semula kelantangan seimbang anda yang ditetapkan dengan teliti. Inilah cara yang lebih baik untuk menyenyapkan dan memulihkan pada Mac.",
    date: "2026-04-28",
    readTime: "4 min baca",
    content: `
<p>Seseorang masuk ke bilik. Bos anda menelefon secara tidak dijangka. Pelanggan berkongsi skrin mereka semasa panggilan dan muzik anda mula dimainkan melalui pembesar suara mereka. Anda perlukan kesunyian segera. Sekarang.</p>

<p>Anda tekan kekunci senyap. Semuanya senyap. Krisis diatasi.</p>

<p>Kemudian saat itu berlalu. Anda tekan kekunci senyap sekali lagi. Semuanya kembali — tetapi pada tahap kelantangan sistem, yang tidak mengingati bahawa Spotify pada 30%, Zoom pada 100%, dan Slack pada 15%. Tahap individu tersebut? Hilang. Anda perlu melaraskan semula semuanya secara manual.</p>

<h2>Kekunci senyap sistem: alat tumpul</h2>

<p>Kekunci senyap Mac (F10 atau kekunci pembesar suara-garis miring) menyenyapkan <strong>output audio sistem</strong>. Setiap aplikasi menjadi senyap secara serentak. Menyahsenyapkan memulihkan kelantangan sistem ke tempatnya — tetapi oleh kerana macOS hanya mempunyai satu peluncur kelantangan, tiada tahap per-aplikasi untuk diingati atau dipulihkan.</p>

<p>Ini baik jika anda hanya menggunakan satu aplikasi pada satu masa. Ia masalah jika anda mempunyai enam aplikasi yang diseimbangkan dengan teliti pada tahap yang berbeza dan perlu menyenyapkan + memulihkan semuanya.</p>

<h2>Senyap yang lebih pintar: senyapkan semua per-aplikasi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mempunyai pintasan papan kekunci "Mute All": <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Apabila anda menekannya:</p>
<ol>
  <li>Setiap aplikasi disenyapkan secara individu (keadaan kelantangan setiap aplikasi disimpan)</li>
  <li>Kesunyian segera — sama seperti kekunci senyap</li>
</ol>

<p>Apabila anda menekannya sekali lagi:</p>
<ol>
  <li>Setiap aplikasi dinyahsenyapkan</li>
  <li>Setiap aplikasi kembali ke <strong>tepat</strong> kelantangan yang ia ada sebelum anda menyenyapkan</li>
  <li>Spotify kembali ke 30%, Zoom ke 100%, Slack ke 15% — dipulihkan dengan sempurna</li>
</ol>

<img src="/apps/sounddial.png" alt="Pintasan senyap-semua SoundDial — Control+Option+M untuk menyenyapkan dan menyahsenyapkan semua aplikasi dengan pemulihan kelantangan" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Perbezaan daripada kekunci senyap sistem:</p>
<ul>
  <li><strong>Senyap sistem:</strong> menyenyapkan output → nyahsenyap memulihkan satu kelantangan sistem → keseimbangan per-aplikasi tidak wujud</li>
  <li><strong>SoundDial senyapkan semua:</strong> menyenyapkan setiap aplikasi secara individu → nyahsenyap memulihkan kelantangan individu setiap aplikasi → keseimbangan anda terpelihara</li>
</ul>

<h2>Bila ini penting</h2>

<ul>
  <li><strong>Perkongsian skrin:</strong> Anda berkongsi skrin anda dan perlu menyenyapkan Mac anda sebelum orang lain mendengar muzik anda. ⌃⌥M → senyap → lakukan urusan anda → ⌃⌥M → muzik kembali pada tahap yang tepat.</li>
  <li><strong>Gangguan tidak dijangka:</strong> Seseorang masuk, anda perlukan kesunyian serta-merta. Satu pintasan, tanpa tetikus, tanpa meraba-raba bar menu.</li>
  <li><strong>Panggilan telefon cepat:</strong> Telefon meja anda berdering. Senyapkan Mac, terima panggilan, nyahsenyapkan apabila selesai. Semuanya kembali.</li>
</ul>

<p>Digabungkan dengan pintasan <strong>⌃⌥S</strong> (togol popover SoundDial), anda boleh menguruskan semua audio anda sepenuhnya dari papan kekunci — buka pengadun, laraskan tahap, tutupnya, dan senyapkan/nyahsenyapkan semuanya tanpa menyentuh tetikus.</p>

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Cara Tetapkan Kelantangan Amaran Mac Berasingan daripada Kelantangan Media",
    description:
      "macOS mempunyai peluncur kelantangan amaran tersembunyi, tetapi ia hanya meliputi bunyi sistem. Begini cara benar-benar memisahkan kelantangan pemberitahuan dan media pada Mac.",
    date: "2026-05-02",
    readTime: "5 min baca",
    content: `
<p>Muzik anda berada pada tahap yang sempurna. Kemudian bunyi amaran macOS berbunyi — kesan bunyi "Funk" atau "Tink" — dan ia sangat kuat berbanding muzik anda. Atau sebaliknya: amaran anda tidak kedengaran kerana kelantangan sistem anda rendah untuk muzik latar yang senyap.</p>

<p>Anda mahukan dua kawalan kelantangan berasingan: satu untuk media (muzik, panggilan, video) dan satu untuk amaran dan pemberitahuan. macOS menyokong ini sebahagiannya, tetapi penyelesaian penuh memerlukan alat pihak ketiga.</p>

<h2>Kelantangan amaran terbina dalam macOS</h2>

<p>macOS memang mempunyai kelantangan amaran berasingan. Pergi ke <strong>System Settings → Sound</strong> dan cari peluncur <strong>"Alert volume"</strong>. Ini mengawal kelantangan bunyi sistem macOS — bunyi ralat, pengosongan Sampah, pengatup tangkapan skrin — secara bebas daripada kelantangan sistem utama.</p>

<p>Anda juga boleh memilih bunyi amaran yang hendak digunakan dan sama ada "Play sound effects through" peranti output yang dipilih atau pembesar suara terbina dalam.</p>

<h3>Apa yang dikawal oleh kelantangan amaran</h3>
<ul>
  <li>Bunyi amaran sistem macOS (Funk, Tink, Bottle, dll.)</li>
  <li>Bunyi Finder (Sampah, salinan fail selesai)</li>
  <li>Sesetengah bunyi aplikasi terbina dalam</li>
</ul>

<h3>Apa yang tidak dikawalnya</h3>
<ul>
  <li>Bunyi pemberitahuan Slack</li>
  <li>Bunyi pemberitahuan Discord</li>
  <li>Bunyi Teams/Zoom</li>
  <li>Bunyi pemberitahuan Mail</li>
  <li>Sebarang bunyi pemberitahuan aplikasi pihak ketiga</li>
  <li>Bunyi pemberitahuan pelayar</li>
</ul>

<p>Aplikasi pihak ketiga memainkan bunyi pemberitahuan mereka melalui enjin audio mereka sendiri — ia dilayan sebagai audio aplikasi biasa, bukan amaran sistem. Peluncur kelantangan amaran tidak memberi kesan kepada mereka. Ini bermakna aplikasi yang menghasilkan bunyi pemberitahuan paling menjengkelkan (Slack, Discord, Teams) adalah yang tidak dapat disentuh oleh kelantangan amaran macOS.</p>

<h2>Pembetulan sebenar: kelantangan per-aplikasi untuk aplikasi pemberitahuan</h2>

<p>Untuk benar-benar memisahkan kelantangan pemberitahuan daripada kelantangan media, anda memerlukan kawalan kelantangan per-aplikasi. Tetapkan Slack kepada 15%, Discord kepada 20%, dan Mail kepada 10% — sambil mengekalkan Spotify pada 50% dan pelayar anda pada 60%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberikan setiap aplikasi peluncur kelantangannya sendiri. Anda boleh menetapkan aplikasi yang penuh pemberitahuan kepada tahap yang halus yang ketara tetapi tidak mengganggu, sambil mengekalkan aplikasi media pada kelantangan mendengar yang selesa.</p>

<img src="/apps/sounddial.png" alt="SoundDial memisahkan kelantangan aplikasi pemberitahuan daripada kelantangan aplikasi media pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Contoh persediaan</h3>
<p><strong>Aplikasi media:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60%</li>
  <li>QuickTime/VLC: 70%</li>
</ul>

<p><strong>Aplikasi pemberitahuan:</strong></p>
<ul>
  <li>Slack: 15%</li>
  <li>Discord: 20%</li>
  <li>Mail: 10%</li>
  <li>Calendar: 25%</li>
</ul>

<p><strong>Aplikasi komunikasi:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>FaceTime: 100%</li>
</ul>

<p>Simpan ini sebagai profil dan gunakan dengan satu klik. Pemisahan antara kelantangan pemberitahuan dan media yang tidak disediakan macOS secara asli — selesai dalam masa kurang daripada seminit.</p>

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — disemak Apple, €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Kelantangan Google Meet Terlalu Rendah pada Mac? Cara Memperbaikinya",
    description:
      "Suara di Google Meet hampir tidak kedengaran walaupun pada kelantangan maksimum. Inilah sebab Meet berjalan melalui Chrome, apa maknanya untuk audio, dan cara meningkatkannya.",
    date: "2026-05-01",
    readTime: "5 min baca",
    content: `
<p>Google Meet tidak mempunyai aplikasi Mac asli — ia berjalan dalam pelayar anda. Ini bermakna audio Meet ialah sebahagian daripada aliran audio Chrome (atau Safari), dan sebarang isu kelantangan berkaitan dengan cara pelayar anda mengendalikan audio. Mari kita selesaikannya.</p>

<h2>1. Semak tetapan audio Meet sendiri</h2>

<p>Semasa panggilan Meet, klik menu tiga titik (⋮) → Settings → Audio. Pastikan peranti pembesar suara yang betul dipilih. Meet kadangkala lalai ke peranti yang tidak dijangka, terutamanya jika anda baru-baru ini menyambung atau memutuskan perkakasan audio.</p>

<h2>2. Semak kelantangan tab pelayar anda</h2>

<p>Dalam Chrome: klik kanan tab Meet → pastikan "Mute site" TIDAK dipilih. Tapak yang disenyapkan tidak menghasilkan audio tanpa mengira tetapan lain.</p>

<p>Dalam Safari: klik ikon pembesar suara pada tab untuk memastikan ia tidak disenyapkan.</p>

<h2>3. Semak output sistem</h2>

<p>System Settings → Sound → Output. Sahkan peranti yang betul dipilih dan kelantangan pada maksimum. Juga semak Keselamatan Fon Kepala jika anda menggunakan fon kepala.</p>

<h2>4. Masalah audio Chrome</h2>

<p>Google Meet berjalan sebagai tab Chrome, dan output audio Chrome boleh lebih rendah daripada aplikasi khusus. Chrome memproses audio melalui perender sendiri, yang mempunyai siling kelantangan sendiri. Jika audio keseluruhan Chrome rendah, Meet rendah — walaupun kelantangan macOS pada 100%.</p>

<p>Tiada cara terbina dalam untuk meningkatkan audio Chrome melebihi maksimumnya. macOS melayan Chrome sebagai satu aplikasi dengan satu tahap kelantangan, dan tahap itu dimaksimumkan pada 100%.</p>

<h2>5. Isu codec Bluetooth</h2>

<p>Jika anda menggunakan AirPods atau fon kepala Bluetooth, Google Meet mengaktifkan mikrofon anda memaksa pertukaran codec Bluetooth dari AAC ke SCO. Ini mengurangkan kualiti dan kelantangan audio dengan ketara.</p>

<p><strong>Pembetulan:</strong> Dalam tetapan audio Meet, pilih mikrofon terbina dalam Mac anda sebagai peranti input sambil mengekalkan fon kepala Bluetooth sebagai output. Ini menghalang pertukaran codec dan mengekalkan audio berkualiti tinggi.</p>

<h2>6. Tingkatkan Google Meet (Chrome) melebihi 100%</h2>

<p>Jika Meet masih terlalu perlahan selepas menyemak semuanya, anda perlu menguatkan audio Chrome melebihi apa yang macOS benarkan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi Chrome peluncur kelantangannya sendiri yang naik sehingga <strong>200%</strong>. Oleh kerana Google Meet berjalan dalam Chrome, meningkatkan Chrome meningkatkan Meet. Seret peluncur ke 150% atau 180% dan audio panggilan dikuatkan dalam masa nyata.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan Google Meet (Chrome) melebihi 100% pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ini juga berfungsi dengan Safari jika anda menggunakan Meet dalam Safari. SoundDial mengawal setiap pelayar secara bebas — tingkatkan Safari untuk Meet sambil mengekalkan Chrome pada kelantangan normal untuk segala-galanya.</p>

<p>Dan dengan auto-ducking, muzik latar belakang anda secara automatik menurun apabila panggilan Meet bermula (apabila mikrofon anda aktif) dan memulihkan apabila panggilan tamat.</p>

<p>Tersedia di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — disemak Apple, €14.99 pembelian sekali, tiada langganan, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Kelantangan panggilan FaceTime terlalu rendah pada Mac? Cara Membetulkannya",
    description:
      "Audio FaceTime hampir tidak boleh didengar pada Mac anda walaupun pada kelantangan penuh. Berikut ialah setiap pembetulan — daripada tetapan bunyi kepada meningkatkan FaceTime melepasi 100%.",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>Panggilan FaceTime pada iPhone anda baik-baik saja. Tetapi pada Mac anda, orang lain kedengaran seperti mereka berbisik dari tiga bilik jauhnya. Kelantangan dimaksimumkan. Anda telah menyemak semua yang anda boleh fikirkan. Masih terlalu senyap.</p>

<p>Kelantangan FaceTime yang rendah pada Mac adalah isu biasa dan ia mempunyai beberapa kemungkinan punca. Mari kita lihat setiap satu.</p>

<h2>1. Semak peranti output</h2>

<p>Pergi ke Tetapan Sistem → Bunyi → Output. Pastikan peranti yang betul dipilih. Jika anda baru-baru ini menyambungkan atau memutuskan sambungan fon kepala, paparan atau peranti Bluetooth, macOS mungkin telah bertukar secara automatik kepada output yang tidak dijangka — seperti monitor dengan pembesar suara terbina dalam yang hampir tidak berfungsi.</p>

<h2>2. Semak tetapan audio FaceTime</h2>

<p>Semasa panggilan FaceTime, klik bar menu dan semak FaceTime → Video → pilih peranti output yang betul di bawah Output Audio. FaceTime kadangkala boleh menggunakan peranti output yang berbeza daripada lalai sistem, terutamanya selepas penukaran peranti.</p>

<h2>3. Lumpuhkan penukaran automatik AirPods</h2>

<p>Jika anda mempunyai AirPods yang dipasangkan dengan berbilang peranti Apple, ia mungkin bertukar secara automatik daripada Mac anda pada pertengahan panggilan. Semak Tetapan Sistem → Bluetooth → klik "i" di sebelah AirPods anda → "Sambung ke Mac Ini" → tetapkan kepada "Apabila Kali Terakhir Disambungkan ke Mac Ini" dan bukannya "Secara Automatik" untuk mengelakkan penukaran pertengahan panggilan.</p>

<h2>4. Isu codec Bluetooth</h2>

<p>Menggunakan AirPods atau fon kepala Bluetooth dengan FaceTime mencetuskan suis codec AAC-ke-SCO (kerana FaceTime menggunakan mikrofon anda). SCO mengurangkan kualiti dan kelantangan audio. Gunakan mikrofon berasingan (mikrofon Mac terbina dalam atau USB) untuk memastikan AirPods dalam mod AAC berkualiti tinggi.</p>

<h2>5. Keselamatan fon kepala mengehadkan kelantangan</h2>

<p>Tetapan sistem → keselamatan bunyi → fon kepala. Jika "Kurangkan Audio Kuat" dihidupkan, macOS mengehadkan kelantangan fon kepala anda. Lumpuhkannya atau naikkan ambang.</p>

<h2>6. Tetapkan semula Audio Teras</h2>

<p>Buka Terminal dan jalankan:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Ini memulakan semula daemon audio dan boleh membetulkan keadaan kelantangan rendah yang tersekat. Sertai semula panggilan FaceTime selepas audio dimulakan semula.</p>

<h2>7. Tingkatkan volum FaceTime melepasi 100%</h2>

<p>Jika semua tetapan betul dan FaceTime masih terlalu senyap — mungkin orang lain mempunyai mikrofon yang lemah — anda perlu menguatkan melebihi had macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda meningkatkan kelantangan FaceTime sehingga <strong>200%</strong>. Buka panel bar menu, cari FaceTime dan seret gelangsarnya melepasi 100%. Audio panggilan dikuatkan dalam masa nyata tanpa menjejaskan mana-mana apl lain.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan volum panggilan FaceTime melebihi 100% pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial juga membantu sebaliknya: jika nada dering atau bunyi pemberitahuan FaceTime terlalu kuat semasa masa fokus, turunkan FaceTime kepada 20% atau bisukannya sambil memastikan muzik anda dimainkan. Satu klik untuk membisukan, satu klik untuk menyahredamkan.</p>

<p>Terdapat di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Disemak Apple, kotak pasir, pembelian sekali sahaja, tiada langganan.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac Pintasan Papan Kekunci Kelantangan yang Anda Mungkin Tidak Tahu",
    description:
      "Di luar kekunci kelantangan asas — kawalan terperinci, meredamkan apl tertentu dan pintasan kelantangan setiap apl. Setiap helah papan kekunci audio Mac dijelaskan.",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>Setiap pengguna Mac mengetahui kekunci kelantangan naik/bawah/bisu. Tekan mereka dan kelantangan sistem berubah. Tetapi macOS mempunyai beberapa helah papan kekunci tersembunyi untuk kawalan audio yang kebanyakan orang tidak pernah temui — serta pintasan pihak ketiga yang menjadikan pengurusan kelantangan lebih pantas secara mendadak.</p>

<h2>Pintasan terbina dalam yang perlu diketahui oleh semua orang</h2>

<h3>Pelarasan kelantangan halus</h3>
<p>Pegang <strong>Pilihan + Anjakan</strong> dan tekan kekunci kelantangan naik atau bawah. Setiap akhbar melaraskan kelantangan dengan <strong>satu perempat</strong> daripada langkah biasa, memberi anda 64 tahap dan bukannya 16. Ini penting untuk mencari kelantangan fon kepala yang betul pada lewat malam, atau apabila lompatan antara dua langkah biasa terlalu besar.</p>

<h3>Pelarasan kelantangan senyap</h3>
<p>Pegang <strong>Peralihan</strong> dan tekan kelantangan ke atas atau ke bawah. Kelantangan berubah tetapi bunyi "pop" maklum balas yang boleh didengar ditindas. Berguna apabila anda melaraskan kelantangan semasa panggilan atau pembentangan dan tidak mahu bunyi pop disiarkan kepada semua orang.</p>

<h3>Lompat ke Tetapan bunyi</h3>
<p>Pegang <strong>Pilihan</strong> dan tekan mana-mana kekunci kelantangan untuk membuka Tetapan Sistem → Bunyi secara langsung. Lebih pantas daripada menavigasi Tetapan Sistem secara manual.</p>

<h3>Suis peranti keluaran pantas</h3>
<p>Pegang <strong>Pilihan</strong> dan klik ikon Bunyi dalam bar menu untuk melihat senarai semua peranti output (dan input) yang tersedia. Klik satu untuk bertukar serta-merta. Tidak perlu membuka Tetapan Sistem.</p>

<h2>Perkara yang pintasan papan kekunci macOS tidak boleh lakukan</h2>

<p>Semua pintasan di atas mengawal <strong>Isipadu Sistem</strong> — satu gelangsar yang mempengaruhi setiap apl secara sama rata. Tiada pintasan papan kekunci terbina dalam untuk:</p>

<ul>
  <li>Melaraskan kelantangan apl tertentu</li>
  <li>Meredamkan satu apl tanpa meredamkan segala-galanya</li>
  <li>Bertukar antara konfigurasi kelantangan yang disimpan</li>
  <li>Togol panel pengadun kelantangan</li>
</ul>

<p>macOS tidak mempunyai kawalan kelantangan setiap apl, jadi tiada pintasan untuknya.</p>

<h2>Pintasan papan kekunci kelantangan setiap apl dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Menambah dua pintasan papan kekunci global yang memanjangkan perkara yang boleh macOS lakukan:</p>

<h3>Togol pengadun kelantangan: Kawalan + Pilihan + S</h3>
<p>Akhbar <strong>⌃⌥S</strong> dari mana-mana sahaja dan pop timbul SoundDial terbuka dalam bar menu, menunjukkan setiap apl dengan peluncur kelantangannya sendiri. Laraskan apa yang anda perlukan, tekan pintasan sekali lagi (atau klik jauh) untuk menutupnya. Anda tidak pernah meninggalkan apl semasa anda.</p>

<h3>Bisukan semua apl: Kawalan + Opsyen + M</h3>
<p>Akhbar <strong>⌃⌥M</strong> untuk meredamkan audio setiap apl serta-merta. Tekan sekali lagi untuk menyahredamkan segala-galanya, memulihkan setiap apl kepada kelantangan sebelumnya. Ini ialah butang "senyap segera" yang lebih pantas daripada mencapai kekunci bisu — dan tidak seperti kekunci bisu sistem, ia memulihkan kelantangan setiap apl apabila anda menyahredamkan.</p>

<img src="/apps/sounddial.png" alt="Pintasan papan kekunci SoundDial — Kawalan + Pilihan + S untuk togol, Kawalan + Pilihan + M untuk meredamkan semua" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Aliran kerja dipacu papan kekunci</h2>

<p>Dengan pintasan SoundDial didayakan, anda boleh mengurus semua audio anda tanpa menyentuh tetikus:</p>

<ol>
  <li><strong>⌃⌥S</strong> — buka pengadun</li>
  <li>Gunakan kekunci anak panah atau tetikus untuk melaraskan gelangsar individu</li>
  <li><strong>⌃⌥S</strong> — tutup pengadun</li>
  <li><strong>⌃⌥M</strong> — bisu segera apabila seseorang masuk ke dalam bilik</li>
  <li><strong>⌃⌥M</strong> — nyahbisukan apabila mereka pergi, semuanya kembali normal</li>
</ol>

<p>Digabungkan dengan <strong>Profil kelantangan</strong> (konfigurasi disimpan yang anda tukar dengan satu klik), anda boleh mengurus audio sedozen apl tanpa perlu membuka mana-mana daripadanya secara individu.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Apl Muzik Latar Belakang Tidak Berfungsi pada macOS? Cuba Alternatif Ini",
    description:
      "Apl Muzik Latar Belakang percuma berhenti berfungsi selepas kemas kini macOS? Inilah sebabnya ia rosak, apa yang perlu dilakukan dan alternatif terbaik yang benar-benar berfungsi pada tahun 2026.",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Muzik Latar Belakang ialah apl Mac sumber terbuka percuma yang popular yang memberikan anda kawalan kelantangan asas setiap apl. Ia berfungsi dengan memasang peranti audio maya dan menghalakan semua audio melaluinya. Masalahnya: ia pecah. Kerap.</p>

<p>Selepas hampir setiap kemas kini macOS — Ventura, Sonoma, Sequoia, Tahoe — pengguna melaporkan isu yang sama: peranti audio maya gagal dipasang, gangguan audio dan berderak muncul, sesetengah apl tidak dikesan atau apl hanya ranap semasa pelancaran. Jika anda mencari "Muzik latar belakang tidak berfungsi", anda tidak bersendirian.</p>

<h2>Mengapa Muzik Latar Belakang terus pecah</h2>

<p>Muzik Latar Belakang berfungsi dengan memasang <strong>Pemacu peranti audio maya</strong> (pemalam Core Audio HAL). macOS menghalakan semua audio sistem melalui peranti maya ini dan Muzik Latar Belakang memintas untuk menggunakan kawalan kelantangan setiap apl.</p>

<p>Masalahnya ialah Apple mengubah cara pemacu audio berfungsi dengan hampir setiap keluaran macOS utama. Sekatan keselamatan diperketatkan, API berubah dan mekanisme pemuatan pemacu berkembang. Memandangkan Muzik Latar Belakang ialah projek sumber terbuka yang diselenggara oleh sukarelawan, kemas kini untuk dipadankan dengan perubahan Apple tidak selalunya tepat pada masanya.</p>

<p>Isu biasa selepas kemas kini macOS:</p>
<ul>
  <li><strong>Peranti audio maya tidak dipasang</strong> — Dasar keselamatan baharu macOS menyekat pemandu</li>
  <li><strong>Audio berderak atau gagap</strong> — peranti maya memperkenalkan kependaman yang dikendalikan dengan buruk oleh versi macOS semasa</li>
  <li><strong>Apl tidak muncul</strong> — perubahan pada cara laporan macOS menjalankan proses memecahkan pengesanan apl</li>
  <li><strong>Tiada audio sama sekali</strong> — peranti maya ditetapkan sebagai output lalai tetapi tidak menghantar audio melalui</li>
  <li><strong>Ranap semasa pelancaran</strong> — ketidakserasian dengan versi macOS semasa</li>
</ul>

<h2>Bagaimana untuk membetulkan Muzik Latar Belakang</h2>

<p>Jika Muzik Latar Belakang rosak pada masa ini:</p>

<ol>
  <li><strong>Semak kemas kini:</strong> Lawati halaman keluaran GitHub untuk Muzik Latar Belakang dan lihat sama ada versi baharu telah dikeluarkan untuk versi macOS anda.</li>
  <li><strong>Pasang semula:</strong> Nyahpasang Muzik Latar Belakang sepenuhnya (termasuk peranti audio maya), mulakan semula dan pasang versi terkini.</li>
  <li><strong>Tetapkan semula audio:</strong> Jika audio anda tersekat pada peranti maya, pergi ke Tetapan Sistem → Output → Bunyi dan pilih pembesar suara/fon kepala sebenar anda. Kemudian lari <code>sudo killall coreaudiod</code> di Terminal.</li>
  <li><strong>Semak kebenaran:</strong> Tetapan Sistem → Privasi & Keselamatan — pastikan Muzik Latar Belakang mempunyai kebenaran yang diperlukan.</li>
</ol>

<h2>Alternatif yang tidak menggunakan peranti audio maya</h2>

<p>Isu asas dengan Muzik Latar Belakang ialah seni bina: peranti audio maya rapuh dan rosak dengan kemas kini macOS. Alternatif moden menggunakan Apple <strong>API Ketuk Audio Teras</strong> (diperkenalkan dalam macOS 14), yang membolehkan apl memintas audio setiap proses tanpa memasang pemacu peringkat sistem.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menggunakan API Audio Tap moden — tiada peranti audio maya, tiada pemacu sistem, tiada sambungan kernel. Ia mengetuk strim audio setiap apl secara langsung menggunakan API yang disokong Apple, yang bermaksud ia tidak rosak apabila macOS kemas kini.</p>

<img src="/apps/sounddial.png" alt="SoundDial — alternatif Muzik Latar Belakang yang tidak memasang peranti audio maya" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Apa yang anda dapat daripada Muzik Latar Belakang:</p>
<ul>
  <li><strong>Tiada peranti audio maya</strong> — berfungsi dengan timbunan audio asli Apple, tidak rosak pada kemas kini</li>
  <li><strong>Peningkatan kelantangan kepada 200%</strong> — Muzik latar belakang topi pada 100%</li>
  <li><strong>Profil kelantangan</strong> — simpan dan tukar antara konfigurasi (Muzik Latar Belakang tidak mempunyai apa-apa)</li>
  <li><strong>Mengelak secara automatik</strong> — pengurangan kelantangan automatik semasa panggilan (Muzik Latar Belakang hanya mempunyai jeda automatik, bukan menunduk)</li>
  <li><strong>Memori kelantangan</strong> — mengingati volum setiap apl antara permulaan semula</li>
  <li><strong>Pintasan papan kekunci</strong> — togol pengadun atau bisukan semua apl</li>
  <li><strong>Pembangunan aktif</strong> — sentiasa dikemas kini untuk macOS terkini</li>
</ul>

<p>Pertukaran: SoundDial ialah pembelian berbayar sekali sahaja, manakala Muzik Latar Belakang adalah percuma. Tetapi apl yang benar-benar berfungsi lebih bernilai daripada apl percuma yang rosak setiap enam bulan. Dan kerana SoundDial berada di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, ia telah disemak oleh Apple, kotak pasir untuk keselamatan dan dipasang dengan bersih — tiada muat turun daripada GitHub, tiada penyusunan daripada sumber, tiada pemberian kebenaran sambungan sistem.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "Alternatif SoundSource: Kawalan Kelantangan Setiap Apl yang Lebih Ringan dan Lebih Murah untuk Mac",
    description:
      "SoundSource berkuasa tetapi mahal dan kompleks. Jika anda hanya memerlukan kawalan kelantangan setiap apl tanpa kit alat kejuruteraan audio, berikut ialah perkara yang perlu digunakan.",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>SoundSource oleh Rogue Amoeba ialah apl kawalan kelantangan setiap apl yang paling lama berjalan untuk Mac. Ia berkuasa, dibuat dengan baik dan dilengkapi dengan ciri seperti EQ setiap apl, rantaian kesan audio dan penghalaan output setiap apl. Ia juga berharga $39, memerlukan pemacu audio sistem (ACE), dan mempunyai lebih banyak ciri daripada yang pernah digunakan oleh kebanyakan orang.</p>

<p>Jika apa yang anda mahukan ialah menolak Spotify tanpa menjejaskan Zoom — dan anda tidak memerlukan kit alat kejuruteraan audio penuh — SoundSource mungkin lebih daripada yang anda perlukan. Inilah yang perlu dipertimbangkan.</p>

<h2>Apa yang dilakukan dengan baik oleh SoundSource</h2>

<p>Kredit di mana ia sepatutnya — SoundSource ialah apl profesional yang digilap:</p>
<ul>
  <li><strong>Kawalan kelantangan setiap apl</strong> dengan gelangsar berbutir halus</li>
  <li><strong>EQ setiap aplikasi</strong> dengan penyamaan terbina dalam dan sokongan pemalam Unit Audio</li>
  <li><strong>Penghalaan output setiap apl</strong> — hantar apl yang berbeza kepada pembesar suara yang berbeza</li>
  <li><strong>Rangsangan kelantangan</strong> melepasi 100%</li>
  <li><strong>Kesan audio seluruh sistem</strong></li>
</ul>

<p>Jika anda seorang podcaster, penstrim atau profesional audio yang memerlukan EQ dan rantaian kesan setiap apl, SoundSource dibina khas untuk anda.</p>

<h2>Di mana SoundSource gagal untuk pengguna biasa</h2>

<h3>Harga</h3>
<p>$39 USD adalah curam untuk apl kawalan volum. Jika anda tidak menggunakan EQ, kesan audio atau penghalaan setiap apl, anda membayar untuk ciri yang tidak akan anda sentuh.</p>

<h3>Pemacu sistem</h3>
<p>SoundSource memasang pemacu audio sistem tersuai yang dipanggil ACE (Enjin Tangkapan Audio). Ini berfungsi dengan baik tetapi menambah kerumitan — ia perlu dikemas kini dengan setiap keluaran macOS, kadangkala boleh bercanggah dengan perisian audio lain dan bermakna anda menjalankan kod pihak ketiga pada tahap audio sistem. Sesetengah jabatan IT dalam persekitaran korporat menyekat sambungan kernel dan pemacu audio peringkat sistem.</p>

<h3>Tiada profil kelantangan</h3>
<p>Walaupun set cirinya yang luas, SoundSource tidak mempunyai sistem profil. Anda tidak boleh menyimpan konfigurasi "Mesyuarat" dan konfigurasi "Fokus" dan bertukar antara kedua-duanya. Setiap kali keadaan anda berubah, anda melaraskan setiap gelangsar secara manual.</p>

<h3>Tiada auto-ducking</h3>
<p>SoundSource tidak menurunkan audio latar belakang secara automatik apabila anda menyertai panggilan. Tiada pengesanan panggilan, tiada pelarasan kelantangan automatik, tiada aliran kerja bebas tangan untuk kes penggunaan pengadun setiap apl yang paling biasa.</p>

<h2>SoundDial: memberi tumpuan kepada perkara yang sebenarnya diperlukan oleh kebanyakan orang</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mengambil pendekatan yang berbeza: lakukan kerja teras dengan sempurna, langkau ciri yang tidak diperlukan oleh kebanyakan orang dan tambahkan ciri aliran kerja yang terlepas oleh SoundSource.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Ciri-ciri</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Sumber Bunyi</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Kelantangan setiap apl</td>
  <td style="text-align:center;padding:10px 12px;">Ya (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Membisukan setiap apl</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Profil kelantangan</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Mengelak secara automatik</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Memori kelantangan</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">EQ setiap aplikasi</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Penghalaan output setiap apl</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pemacu audio sistem</td>
  <td style="text-align:center;padding:10px 12px;">Tidak diperlukan</td>
  <td style="text-align:center;padding:10px 12px;">Diperlukan (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pintasan papan kekunci</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Harga</td>
  <td style="text-align:center;padding:10px 12px;">€14.99 sekali sahaja</td>
  <td style="text-align:center;padding:10px 12px;">$39 USD</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — alternatif SoundSource yang lebih ringan dan fokus dengan profil kelantangan dan auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Mana yang patut anda pilih?</h2>

<ul>
  <li><strong>Pilih SoundSource jika:</strong> Anda memerlukan EQ setiap apl, rantaian kesan audio atau penghalaan output setiap apl. Anda seorang podcaster, penstrim atau profesional audio. Anda tidak keberatan dengan harga dan pemacu sistem.</li>
  <li><strong>Pilih <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> jika:</strong> Anda mahukan kawalan kelantangan setiap apl dengan profil dan auto-ducking. Anda mahukan sesuatu yang lebih ringan yang tidak memasang pemacu sistem. Anda mahu berbelanja lebih sedikit. Anda seorang pekerja jauh, pemain, pelajar atau sesiapa sahaja yang hanya mahu menurunkan Slack tanpa menjejaskan Zoom.</li>
</ul>

<p>SoundDial boleh didapati di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — yang bermaksud ia telah disemak oleh Apple, kotak pasir untuk keselamatan, dan memasang/menyahpasang dengan bersih seperti mana-mana apl App Store. Tiada memuat turun DMG daripada tapak web rawak, tiada pemasangan pemacu sistem, tiada pemberian kebenaran sambungan kernel. Pembelian sekali sahaja, tiada langganan.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac Kelantangan Terlalu Kuat pada Tetapan Terendah? Bagaimana untuk Pergi Lebih Senyap",
    description:
      "Walaupun pada takuk kelantangan terendah, Mac anda terlalu kuat — terutamanya pada lewat malam dengan fon kepala. Berikut ialah cara untuk mendapatkan kawalan kelantangan yang lebih halus dan pergi di bawah minimum.",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>Sudah tengah malam. Anda memakai fon kepala. Anda menekan kekunci kelantangan turun sehingga anda berada pada takuk terendah — satu bar. Ia masih terlalu kuat. Akhbar seterusnya adalah bisu. Tiada apa-apa di antaranya. Anda mahukan volum pada 3% tetapi macOS melonjak daripada ~6% kepada 0%.</p>

<p>Ini adalah aduan biasa dengan fon kepala dan pembesar suara sensitif. 16 langkah kelantangan macOS terlalu kasar — langkah kedengaran terendah masih lebih kuat daripada apa yang anda perlukan untuk mendengar lewat malam yang senyap.</p>

<h2>Pembetulan terbina dalam: pelarasan kelantangan suku langkah</h2>

<p>Kebanyakan pengguna Mac tidak tahu ini: anda boleh mendapatkan <strong>4x kawalan kelantangan yang lebih halus</strong> menggunakan pengubah suai papan kekunci.</p>

<p>Pegang <strong>Pilihan + Anjakan</strong> dan tekan kekunci kelantangan naik/bawah. Setiap akhbar melaraskan kelantangan sebanyak satu perempat daripada langkah biasa — memberikan anda 64 langkah dan bukannya 16.</p>

<p>Ini membolehkan anda mencari tahap kelantangan antara takuk biasa. Jurang antara "satu bar" dan "bisu" itu kini mempunyai tiga tahap tambahan yang boleh anda dapati. Untuk mendengar fon kepala larut malam, ini selalunya cukup untuk mencari tahap yang selesa.</p>

<h2>Mengapa sesetengah kandungan lebih kuat daripada yang lain pada kelantangan yang sama</h2>

<p>Anda mungkin perasan bahawa sesetengah apl berasa lebih kuat daripada yang lain walaupun pada kelantangan sistem yang sama. Spotify di satu bar terasa lebih kuat daripada video YouTube di satu bar. Ini kerana setiap apl mengeluarkan audio pada tahap yang berbeza dan kelantangan sistem menskalakannya secara berkadar.</p>

<p>Lagu yang dikuasai pada 0 dB (maksimum) dan podcast yang dirakam pada -15 dB akan berbunyi berbeza secara dramatik pada kelantangan sistem yang sama. Lagu ini 15 dB lebih kuat — yang dianggap kira-kira tiga kali lebih kuat ke telinga anda.</p>

<h2>Penyelesaian sebenar: kelantangan setiap apl untuk kawalan halus</h2>

<p>Pintasan suku langkah membantu, tetapi ia masih melaraskan semua apl secara sama rata. Jika Spotify pada langkah terendah terlalu kuat tetapi panggilan Zum anda pada langkah terendah terlalu senyap, anda tersekat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi anda peluncur kelantangan setiap apl dengan kawalan terperinci — setiap gelangsar bergerak dalam kenaikan 1% daripada 0% kepada 200%. Anda boleh menetapkan Spotify kepada 5% dan Zum kepada 40% pada masa yang sama. Tahap kawalan secara dramatik lebih halus daripada 16 langkah sistem macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial kawalan kelantangan setiap apl yang terperinci dengan kenaikan 1% pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Untuk penggunaan fon kepala larut malam:</p>
<ul>
  <li>Tetapkan kelantangan sistem ke tahap sederhana (40-50%)</li>
  <li>Gunakan SoundDial untuk memperhalusi setiap apl kepada tahap yang anda inginkan</li>
  <li>Spotify pada 8% — muzik latar belakang yang hampir tidak ada</li>
  <li>Penyemak imbas pada 15% — cukup senyap untuk video larut malam</li>
  <li>Pemberitahuan disenyapkan — tiada kejutan ping kuat</li>
</ul>

<p>Simpan ini sebagai profil "Malam" dan gunakannya dengan satu klik apabila anda memakai fon kepala selepas waktu kerja.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Satu AirPod lebih kuat daripada yang lain? Setiap Pembetulan Dijelaskan",
    description:
      "AirPod kiri lebih senyap daripada kanan (atau sebaliknya). Berikut ialah setiap punca — daripada tahi telinga kepada tetapan keseimbangan macOS — dan cara membetulkannya.",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>Satu AirPod kedengaran baik. Yang lain kelihatan lebih senyap. Muzik terasa di luar pusat. Suara kedengaran seperti datang dari satu sisi. Ini adalah salah satu aduan AirPods yang paling biasa, dan ia biasanya mempunyai penyelesaian mudah.</p>

<h2>1. Bersihkan AirPods anda</h2>

<p>Punca yang paling biasa ialah fizikal: tahi telinga atau serpihan sebahagiannya menghalang mesh pembesar suara pada satu AirPod. Malah lapisan nipis penumpukan boleh mengurangkan kelantangan dengan ketara di bahagian itu.</p>

<p><strong>Cara membersihkan:</strong></p>
<ul>
  <li>Gunakan berus kering dan berbulu lembut (berus gigi bersih berfungsi) untuk memberus perlahan-lahan mesh pembesar suara</li>
  <li>Untuk petua silikon AirPods Pro: tanggalkan hujung dan bersihkan kedua-dua hujung dan mesh pembesar suara di bawahnya</li>
  <li>Gunakan kain kering dan bebas serat untuk bahagian luar</li>
  <li><strong>Jangan gunakan:</strong> air, alkohol, udara termampat atau objek tajam — ini boleh merosakkan jaring pembesar suara atau menolak serpihan lebih jauh ke dalam</li>
</ul>

<p>Selepas pembersihan, uji kedua-dua AirPods. Dalam kebanyakan kes, ini menyelesaikan masalah dengan segera.</p>

<h2>2. Semak keseimbangan audio dalam macOS</h2>

<p>macOS mempunyai gelangsar keseimbangan audio kiri-kanan yang mungkin di luar pusat:</p>

<ol>
  <li>Pergi ke <strong>Tetapan Sistem → Kebolehcapaian → Audio</strong></li>
  <li>Cari <strong>Baki</strong> gelangsar</li>
  <li>Pastikan ia betul-betul berpusat antara L dan R</li>
</ol>

<p>Jika gelangsar dialihkan ke satu sisi, itulah punca anda. Pusatkannya dan isipadu hendaklah sama pada kedua-dua belah pihak.</p>

<p>Semak juga <strong>Tetapan → Bunyi Sistem</strong> — Sesetengah versi macOS mempunyai gelangsar keseimbangan dalam tetapan peranti output juga.</p>

<h2>3. Tetapkan semula AirPods anda</h2>

<p>Jika pembersihan dan keseimbangan tidak membantu, cuba tetapkan semula AirPods anda kepada keadaan kilangnya:</p>

<ol>
  <li>Letakkan kedua-dua AirPods dalam bekas pengecasan</li>
  <li>Tutup penutup dan tunggu 30 saat</li>
  <li>Buka penutup</li>
  <li>Tekan dan tahan butang persediaan di bahagian belakang sarung selama 15 saat sehingga lampu status berkelip kuning, kemudian putih</li>
  <li>Pasangkan semula AirPods dengan Mac anda (Tetapan Sistem → Bluetooth)</li>
</ol>

<p>Ini menetapkan semula sebarang penentukuran audio yang disimpan dan boleh membetulkan ketidakseimbangan kelantangan bahagian perisian.</p>

<h2>4. Semak Audio Mono</h2>

<p>Jika ciri kebolehcapaian Audio Mono macOS didayakan, audio stereo dicampurkan ke dalam satu saluran dan dihantar ke kedua-dua AirPods secara sama rata. Walaupun ini tidak sepatutnya menyebabkan perbezaan kelantangan, ia boleh mengubah cara kandungan tertentu berbunyi dan menjadikan satu sisi kelihatan "berbeza."</p>

<p>Semak: Tetapan Sistem → Kebolehcapaian → Audio → pastikan "Audio Mono" dimatikan (melainkan anda memerlukannya).</p>

<h2>5. Gangguan Bluetooth</h2>

<p>AirPods berkomunikasi dengan Mac anda melalui Bluetooth, dan setiap AirPod juga berkomunikasi antara satu sama lain. Jika terdapat gangguan Bluetooth yang ketara (penghala WiFi, hab USB 3.0, peranti Bluetooth lain), satu AirPod mungkin menerima isyarat yang lebih lemah.</p>

<p><strong>Betulkan:</strong> Bergerak lebih dekat dengan Mac anda. Putuskan sambungan peranti Bluetooth yang anda tidak gunakan. Jika anda berada berhampiran hab USB 3.0, cuba alihkannya — USB 3.0 diketahui mengganggu Bluetooth 2.4 GHz.</p>

<h2>6. Isu perkakasan</h2>

<p>Jika tiada pembetulan di atas berfungsi, satu AirPod mungkin mempunyai kecacatan perkakasan — pemacu pembesar suara yang rosak atau mesh yang rosak. Ini berlaku dari semasa ke semasa dengan penggunaan berat.</p>

<p><strong>Betulkan:</strong> Hubungi Sokongan Apple atau lawati Apple Store. Jika AirPods anda berada di bawah jaminan atau AppleCare+, Apple akan menggantikan AirPod yang terjejas. Penggantian AirPod individu juga tersedia untuk pembelian di luar jaminan.</p>

<h2>Keseimbangan audio yang lebih baik dengan kawalan kelantangan setiap apl</h2>

<p>Walaupun kawalan kelantangan setiap apl tidak membetulkan ketidakseimbangan perkakasan antara AirPods, ia menyelesaikan masalah yang berkaitan: apabila sesetengah apl lebih kuat daripada yang lain dalam AirPods anda, ia boleh membesar-besarkan persepsi ketidakseimbangan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda mengesetkan setiap app pada tahap kelantangan yang konsisten. Apabila Spotify berada pada 40%, Zum pada 100% dan Safari pada 60%, anda tahu dengan tepat apa yang diharapkan daripada setiap apl — tiada lonjakan kelantangan secara tiba-tiba yang membuatkan satu AirPod berasa lebih kuat kerana pemberitahuan hanya meletup pada 100%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix dan Streaming Audio Terlalu Senyap di Mac? Cara Membetulkannya",
    description:
      "Dialog senyap, kemudian letupan menggegarkan bilik. Berikut ialah cara membetulkan tahap audio penstriman pada Mac — dan meningkatkan kandungan senyap melebihi 100%.",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>Anda sedang menonton filem di Netflix. Dua watak sedang berbual — anda hampir tidak boleh mendengarnya. Anda menaikkan kelantangan. Adegan aksi bermula. Letupan itu memekakkan telinga. Anda berebut untuk kekunci kelantangan. Ini adalah aduan yang paling biasa tentang penstriman audio, dan ia lebih teruk pada pembesar suara terbina dalam Mac.</p>

<p>Masalahnya bukan Mac anda. Begitulah cara filem dan rancangan TV dikuasai — dan hakikat bahawa macOS tidak memberi anda alat untuk membetulkannya.</p>

<h2>Mengapa audio penstriman mempunyai perubahan kelantangan liar</h2>

<p>Filem dan rancangan TV dikuasai dengan tinggi <strong>Julat dinamik</strong> — perbezaan antara bunyi yang paling senyap dan paling kuat. Dalam teater dengan pembesar suara yang berkuasa dan subwoofer, ini kedengaran luar biasa. Bisikan adalah intim, letupan adalah mendalam.</p>

<p>Pada pembesar suara 2-inci MacBook, julat dinamik itu menjadi liabiliti. Bahagian yang senyap berada di bawah apa yang boleh dihasilkan semula oleh pembesar suara kecil dengan jelas, manakala bahagian yang kuat mencapai had fizikal pembesar suara. Anda akhirnya sentiasa melaraskan kelantangan — naik untuk dialog, menolak untuk bertindak.</p>

<h2>Betulkan 1: Dayakan "Kurangkan Bunyi Kuat" dalam apl penstriman</h2>

<p>Sesetengah perkhidmatan penstriman mempunyai ciri normalisasi volum:</p>
<ul>
  <li><strong>Netflix:</strong> Semasa main balik, klik ikon pembesar suara → semak sama ada terdapat pilihan "Kurangkan Bunyi Kuat" (tersedia dalam penyemak imbas dan apl asli)</li>
  <li><strong>Apple TV+:</strong> Tetapan → Kebolehcapaian → "Kurangkan Bunyi Kuat"</li>
  <li><strong>Disney+:</strong> Tiada tetapan setara tersedia pada masa ini</li>
  <li><strong>Video Perdana Amazon:</strong> Ciri "Dialog Boost" (jika tersedia untuk tajuk)</li>
</ul>

<p>Ciri-ciri ini memampatkan julat dinamik — menjadikan bunyi senyap lebih kuat dan bunyi yang kuat lebih senyap. Hasilnya ialah kelantangan yang lebih sekata yang berfungsi lebih baik pada pembesar suara kecil dan pada tahap pendengaran yang rendah.</p>

<h2>Betulkan 2: Semak penambah bunyi Mac anda</h2>

<p>Pada sesetengah model Mac, macOS menggunakan pemprosesan audio pada pembesar suara terbina dalam. Semak Tetapan Sistem → Bunyi untuk melihat sama ada terdapat sebarang pilihan peningkatan untuk peranti output anda. Pada model MacBook Pro 14" dan 16", sistem pembesar suara mempunyai pemprosesan audio spatial yang boleh menjejaskan kelantangan yang dirasakan.</p>

<h2>Betulkan 3: Gunakan fon kepala berwayar</h2>

<p>Fon kepala memintas masalah saiz pembesar suara sepenuhnya. Malah fon telinga berwayar murah boleh menghasilkan semula dialog yang senyap dengan jelas kerana pemacu berada betul-betul di sebelah gegendang telinga anda. Julat dinamik yang menjadi masalah pada pembesar suara kecil menjadi kelebihan dalam fon kepala.</p>

<h2>Betulkan 4: Tingkatkan audio penstriman melepasi 100%</h2>

<p>Jika kandungannya terlalu senyap — walaupun dengan normalisasi dihidupkan dan kelantangan maksimum — anda memerlukan penguatan melebihi apa yang macOS sediakan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda menggalakkan mana-mana apl untuk <strong>200%</strong>. Jika Safari atau apl Netflix terlalu senyap, seret gelangsarnya melepasi 100%. Audio dikuatkan sebelum ia sampai ke pembesar suara anda, dengan berkesan menggandakan kelantangan maksimum untuk apl itu sahaja.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan audio Netflix kepada 180% pada Mac untuk dialog yang lebih jelas dan audio penstriman" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ini amat berguna apabila:</p>
<ul>
  <li>Menonton filem asing yang tenang di mana dialognya lembut</li>
  <li>Penstriman kandungan lama yang dikuasai pada tahap yang lebih rendah</li>
  <li>Menggunakan pembesar suara MacBook dalam persekitaran yang bising</li>
  <li>Satu perkhidmatan penstriman jauh lebih senyap daripada yang lain</li>
</ul>

<p>Dan kerana SoundDial mengawal setiap apl secara bebas, meningkatkan Netflix kepada 150% tidak menjadikan Spotify atau Slack anda lebih kuat. Setiap apl kekal pada tahapnya sendiri.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac Persediaan Audio untuk Kerja Jauh: Panduan Lengkap",
    description:
      "Panggilan, muzik, pemberitahuan dan masa fokus — semuanya pada satu Mac. Berikut ialah cara menyediakan audio anda supaya tiada apa yang memperjuangkan perhatian anda.",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Kerja jauh pada Mac bermakna komputer anda pada masa yang sama ialah telefon pejabat anda, radio anda, pusat pemberitahuan anda dan stesen kerja mendalam anda. Ini adalah empat mod audio yang berbeza pada asasnya, dan macOS memperlakukan semuanya sama: satu peluncur kelantangan, semuanya pada tahap yang sama, tiada cara untuk mengutamakan.</p>

<p>Panduan ini membincangkan cara menyediakan audio Mac anda untuk kerja jarak jauh supaya panggilan jelas, muzik hadir tetapi tidak mengganggu, pemberitahuan halus dan masa fokus sebenarnya senyap.</p>

<h2>Empat mod audio kerja jarak jauh</h2>

<h3>1. Mod mesyuarat</h3>
<p>Anda sedang dalam panggilan Zoom atau Pasukan. Panggilan itu perlu jelas. Muzik hendaklah senyap atau hampir tidak kedengaran. Kendur tidak sepatutnya berbunyi di telinga anda.</p>

<h3>2. Mod fokus</h3>
<p>Anda melakukan kerja yang mendalam. Muzik latar belakang pada tahap rendah membantu anda menumpukan perhatian. Pemberitahuan sepatutnya hampir tidak dapat dilihat — cukup hadir sehingga anda melihat mesej segera, cukup senyap sehingga ia tidak melanggar aliran.</p>

<h3>3. Mod kolaboratif</h3>
<p>Anda tersedia untuk mesej, memantau Slack, mungkin menonton video latihan. Segala-galanya boleh berada pada tahap sederhana. Pemberitahuan pada kelantangan biasa.</p>

<h3>4. Mod rehat</h3>
<p>Muzik pada kelantangan penuh. YouTube pada kelantangan penuh. Pemberitahuan boleh menunggu.</p>

<h2>Persediaan perkakasan</h2>

<h3>Soalan mikrofon</h3>
<p>Jika anda menggunakan AirPods untuk panggilan, pertimbangkan untuk menggunakan mikrofon yang berasingan. Apabila AirPods digunakan sebagai mikrofon dan pembesar suara, macOS bertukar kepada codec Bluetooth SCO berkualiti rendah, yang mengurangkan kedua-dua kualiti audio dan kelantangan. Menggunakan mikrofon terbina dalam Mac anda (atau mikrofon USB) sambil mengekalkan AirPods kerana output mengelakkan ini sepenuhnya.</p>

<p>Untuk kualiti panggilan terbaik: mikrofon USB atau set kepala dengan mikrofon terbina dalam. Blue Yeti, Elgato Wave, atau set kepala USB asas akan terdengar lebih baik secara mendadak daripada mikrofon AirPods kepada rakan sekerja anda.</p>

<h3>Peranti keluaran</h3>
<p>Ramai pekerja jauh menggunakan dua peranti output:</p>
<ul>
  <li><strong>Fon kepala</strong> Untuk panggilan — privasi, tiada gema, audio yang jelas</li>
  <li><strong>Penceramah</strong> untuk muzik semasa masa bukan panggilan — memenuhi bilik, lebih selesa untuk tempoh yang lama</li>
</ul>

<p>Gunakan Pilihan-klik pada ikon Bunyi dalam bar menu untuk bertukar antara peranti dengan cepat. Atau gunakan penukar peranti terbina dalam SoundDial, yang meletakkan peranti output anda betul-betul di sebelah kawalan kelantangan anda.</p>

<h2>Persediaan perisian</h2>

<h3>Pengurusan pemberitahuan</h3>
<p>Pergi ke Tetapan Sistem → Pemberitahuan. Untuk setiap apl, tentukan sama ada anda memerlukan pemberitahuan bunyi:</p>
<ul>
  <li><strong>Kekalkan bunyi:</strong> Slack (jika anda responsif), Kalendar (mesyuarat), Mesej</li>
  <li><strong>Matikan bunyi:</strong> Mel (semak jadual anda), Berita, apl sosial</li>
</ul>

<p>Ini mengurangkan bilangan apl yang mengeluarkan bunyi kejutan, tetapi ia tidak memberi anda kawalan kelantangan — hanya hidup/mati.</p>

<h3>Mod fokus</h3>
<p>Cipta sekurang-kurangnya dua mod Fokus dalam Tetapan Sistem → Fokus:</p>
<ul>
  <li><strong>"Mesyuarat"</strong> — senyapkan semua pemberitahuan kecuali apl kalendar anda</li>
  <li><strong>"Fokus Kerja"</strong> — benarkan pemberitahuan daripada DM Slack dan pengurus anda, senyapkan segala-galanya</li>
</ul>

<p>Mod fokus mengendalikan penindasan pemberitahuan. Untuk kawalan kelantangan audio, anda memerlukan sesuatu yang lebih.</p>

<h2>Bahagian yang hilang: kawalan kelantangan setiap apl</h2>

<p>Kawalan mod fokus <em>yang mana</em> pemberitahuan masuk tetapi tidak <em>betapa kuatnya</em> apa-apa sahaja. Anda masih mempunyai satu gelangsar kelantangan untuk segala-galanya. Jika anda mahukan Slack pada 15%, Spotify pada 35%, dan Zoom pada 100% — macOS tidak boleh berbuat demikian.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mengisi jurang ini dengan memberikan setiap apl peluncur kelantangannya sendiri. Sediakan audio kerja jauh anda dengan tepat seperti yang anda mahukan:</p>

<img src="/apps/sounddial.png" alt="SoundDial persediaan audio kerja jauh — tahap kelantangan yang berbeza untuk Zoom, Spotify dan Slack pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Simpan profil untuk setiap mod</h3>

<p><strong>Profil mesyuarat:</strong></p>
<ul>
  <li>Zum / Pasukan: 100%</li>
  <li>Spotify: disenyapkan</li>
  <li>Kendur: disenyapkan</li>
  <li>Penyemak imbas: disenyapkan</li>
</ul>

<p><strong>Profil Kerja Fokus:</strong></p>
<ul>
  <li>Spotify: 30%</li>
  <li>Kendur: 10%</li>
  <li>Zum: 80% (sekiranya seseorang memanggil)</li>
  <li>Penyemak imbas: 40%</li>
</ul>

<p><strong>Profil kerjasama:</strong></p>
<ul>
  <li>Segala-galanya pada 50-70%</li>
  <li>Kendur: 30%</li>
</ul>

<p>Tukar antara profil dengan satu klik. Apabila panggilan bermula, perlawanan automatik SoundDial secara automatik menurunkan segala-galanya kecuali apl panggilan anda. Apabila ia tamat, tahap profil anda dipulihkan.</p>

<h2>Aliran kerja harian</h2>

<ol>
  <li>Mulakan kerja → gunakan profil "Fokus Kerja"</li>
  <li>Sertai mesyuarat → auto-ducking mengendalikannya secara automatik (atau gunakan profil "Mesyuarat")</li>
  <li>Mesyuarat tamat → volum dipulihkan kepada tahap Fokus Kerja</li>
  <li>Rehat makan tengah hari → gunakan profil "Rehat", bunyikan muzik</li>
  <li>Kerja mendalam petang → kembali ke Kerja Fokus</li>
</ol>

<p>Jumlah usaha manual: dua atau tiga klik profil setiap hari. Segala-galanya adalah automatik.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Cara Menghentikan Tab Penyemak Imbas daripada Memainkan Audio Secara Auto pada Mac",
    description:
      "Tab latar belakang mula memainkan audio entah dari mana. Iklan, video, tapak berita — berikut ialah cara menyenyapkan tab penyangak dan mengawal audio penyemak imbas pada macOS.",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>Anda mempunyai dua puluh tab terbuka. Anda bekerja di salah satu daripadanya. Tiba-tiba — audio mula dimainkan dari suatu tempat. Iklan video. Klip berita yang dimainkan secara automatik. Tab yang anda buka sejam yang lalu yang memutuskan sekarang adalah masa untuk mula membuat bising. Anda berebut-rebut untuk mencari tab mana itu, mengkliknya satu demi satu.</p>

<p>Memainkan audio secara automatik dalam tab penyemak imbas ialah salah satu pengalaman yang paling menjengkelkan pada mana-mana komputer, dan ia lebih teruk pada Mac kerana macOS tidak mempunyai cara untuk meredamkan apl tertentu (apatah lagi tab tertentu) tanpa meredamkan segala-galanya.</p>

<h2>Lumpuhkan automain dalam Safari</h2>

<p>Safari mempunyai kawalan automain terbina dalam terbaik bagi mana-mana penyemak imbas:</p>

<ol>
  <li>Buka tab Tetapan → Safari (⌘,) → Laman Web</li>
  <li>Pilih "Auto-Play" dalam bar sisi kiri</li>
  <li>Tetapkan lalai di bahagian bawah kepada "Jangan Sekali-kali Main Auto" atau "Hentikan Media dengan Bunyi"</li>
</ol>

<p>"Hentikan Media dengan Bunyi" ialah pilihan terbaik — ia menyekat video yang dimainkan secara automatik dengan audio tetapi membenarkan main automatik yang disenyapkan (yang digunakan oleh banyak tapak untuk video latar belakang hiasan). "Jangan sekali-kali Main Auto" menyekat segala-galanya.</p>

<p>Anda juga boleh mengkonfigurasi tetapan setiap tapak dalam panel yang sama ini jika anda ingin membenarkan automain pada tapak tertentu seperti YouTube atau Netflix.</p>

<h2>Lumpuhkan automain dalam Chrome</h2>

<p>Kawalan automain Chrome kurang terperinci:</p>

<ol>
  <li>Pergi ke <code>chrome://settings/content/sound</code></li>
  <li>Togol "Tapak boleh memainkan bunyi" untuk menentukan tingkah laku lalai</li>
  <li>Tambahkan tapak tertentu pada senarai "Bisu" untuk menyenyapkannya secara kekal</li>
</ol>

<p>Chrome juga membolehkan anda meredamkan tab individu: klik kanan tab → "Meredamkan tapak". Ini meredamkan semua audio daripada tapak itu sehingga anda menyahredamkannya.</p>

<h2>Meredamkan tab dengan cepat</h2>

<p>Kedua-dua Safari dan Chrome menunjukkan ikon pembesar suara pada tab yang menghasilkan audio. Dalam Safari, klik ikon pembesar suara dalam tab untuk meredamkannya. Dalam Chrome, klik kanan tab dan pilih "Bisukan tapak."</p>

<p>Ini berfungsi untuk satu tab pada satu masa, tetapi jika anda mempunyai berbilang tab bising, anda mengkliknya satu demi satu.</p>

<h2>Masalah yang lebih luas: audio penyemak imbas berbanding segala-galanya</h2>

<p>Walaupun automain dilumpuhkan dan tab disenyapkan, anda mungkin masih mahu mengawal seberapa kuat penyemak imbas anda berbanding apl lain. Mungkin anda menonton tutorial YouTube semasa dalam panggilan Zoom — anda mahukan tutorial pada 30% dan Zum pada 100%. Atau anda memainkan muzik latar belakang dalam tab penyemak imbas dan ia bersaing dengan Spotify anda.</p>

<p>macOS menganggap keseluruhan penyemak imbas sebagai satu apl dengan satu kelantangan. Anda tidak boleh menjadikan satu tab lebih senyap daripada yang lain di peringkat sistem. Tetapi awak <em>boleh</em> Jadikan keseluruhan penyemak imbas lebih senyap daripada apl lain.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberikan penyemak imbas anda peluncur kelantangannya sendiri, bebas daripada setiap apl lain. Turunkan Safari kepada 30% sambil mengekalkan Zum pada 100%. Bisukan Chrome sepenuhnya sambil memastikan Spotify dimainkan. Satu klik.</p>

<img src="/apps/sounddial.png" alt="SoundDial mengawal kelantangan penyemak imbas secara bebas daripada apl lain pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ini ialah cara terpantas untuk mengendalikan tab main automatik yang mengejutkan: daripada memburu tab mana yang membuat bising, klik SoundDial dalam bar menu dan bisukan penyemak imbas. Segala-galanya terus dimainkan. Apabila anda telah menemui dan menutup tab yang menyinggung perasaan, nyahredamkan penyemak imbas dan kelantangannya kembali ke tempat asalnya.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Kelantangan Perselisihan Terlalu Kuat (atau Senyap) pada Mac? Cara Membetulkannya",
    description:
      "Perselisihan meletup ke atas permainan anda, atau terlalu senyap untuk mendengar rakan sepasukan. Berikut ialah cara mengawal kelantangan Discord secara bebas daripada semua yang lain pada macOS.",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discord mempunyai dua masalah kelantangan pada Mac. Sama ada ia terlalu kuat — bunyi pemberitahuan meletup di atas permainan dan muzik anda — atau terlalu senyap — anda tidak boleh mendengar rakan sepasukan anda melalui audio permainan. Masalahnya ialah macOS tidak membenarkan anda melaraskan kelantangan Discord secara bebas. Ia dikunci pada gelangsar sistem yang sama seperti yang lain.</p>

<h2>Kawalan kelantangan terbina dalam Discord</h2>

<p>Discord mempunyai beberapa tetapan kelantangan dalaman. Sebelum melihat penyelesaian luaran, pastikan ini dikonfigurasikan:</p>

<h3>Kelantangan keluaran</h3>
<p>Pergi ke Tetapan → Perselisihan (ikon gear) → Suara & Video. Peluncur "Kelantangan Output" mengawal bunyi Discord yang kuat kepada anda. Jika Discord terlalu senyap, pastikan ini pada 100%. Jika ia terlalu kuat, turunkan di sini.</p>

<p><strong>Had:</strong> Ini mengawal campuran dalaman Discord, tetapi ia tidak mengubah kelantangan Discord <em>Berbanding dengan apl lain</em>. Jika permainan anda berada pada 80% volum sistem dan Discord juga pada 80%, melaraskan gelangsar dalaman Discord mengubah keseimbangan — tetapi anda masih terkunci kepada satu volum sistem untuk segala-galanya.</p>

<h3>Kelantangan setiap pengguna</h3>
<p>Klik kanan mana-mana pengguna dalam saluran suara → "Volum Pengguna." Anda boleh melaraskan pengguna individu daripada 0% hingga 200%. Ini berguna jika seseorang lebih kuat atau lebih senyap daripada yang lain, tetapi ia tidak menyelesaikan keseimbangan keseluruhan Discord-vs-lain-apl.</p>

<h3>Jumlah pemberitahuan</h3>
<p>Perselisihan → Tetapan → Pemberitahuan. Anda boleh melumpuhkan bunyi pemberitahuan tertentu (mesej, pekak, bisu, serta/pergi) secara individu. Ini mengurangkan bilangan bunyi yang mengganggu tetapi tidak membenarkan anda menurunkan kelantangannya — hanya hidupkan atau matikannya.</p>

<h2>Masalah sebenar: keseimbangan volum peringkat sistem</h2>

<p>Kawalan dalaman Discord melaraskan campuran Discord sendiri. Tetapi isu sebenar ialah keseimbangan antara Discord dan segala-galanya pada Mac anda: permainan anda, muzik anda, penyemak imbas anda. macOS memberi anda satu gelangsar untuk mereka semua.</p>

<p>Untuk melaraskan kelantangan Discord berbanding permainan anda, anda memerlukan kawalan kelantangan setiap apl — sesuatu yang macOS tidak sediakan secara asli.</p>

<h2>Betulkan dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberikan Discord gelangsar kelantangannya sendiri dalam bar menu anda, bebas daripada setiap apl lain. Tetapkan Discord ke tahap yang anda mahukan — 100% untuk sembang suara yang jelas, 40% untuk latar belakang halus atau disenyapkan sepenuhnya — tanpa menyentuh permainan, muzik atau apa-apa lagi anda.</p>

<img src="/apps/sounddial.png" alt="SoundDial mengawal kelantangan Discord secara bebas daripada permainan dan muzik pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Persediaan biasa</h3>

<p><strong>Bermain dengan Discord:</strong></p>
<ul>
  <li>Perselisihan: 100% (sentiasa dengar rakan sepasukan dengan jelas)</li>
  <li>Permainan: 40% (mengasyikkan tetapi tidak terlalu kuat)</li>
  <li>Spotify: 15% (muzik latar belakang yang halus)</li>
</ul>

<p><strong>Melepak dalam sembang suara:</strong></p>
<ul>
  <li>Perselisihan: 80%</li>
  <li>Penyemak imbas / YouTube: 60%</li>
  <li>Segala-galanya: biasa</li>
</ul>

<p><strong>Kerja fokus (Perselisihan di latar belakang):</strong></p>
<ul>
  <li>Perselisihan: disenyapkan atau 10%</li>
  <li>Spotify: 50%</li>
  <li>Kendur: 15%</li>
</ul>

<p>Simpan setiap satu sebagai <strong>profil kelantangan</strong> dalam SoundDial dan tukar dengan satu klik. Tiada pelarasan semula enam gelangsar setiap kali anda menukar aktiviti.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Cara Menukar Output Audio dengan Cepat pada Mac (Tanpa Menggali Tetapan)",
    description:
      "Bertukar antara pembesar suara, fon kepala dan monitor pada Mac memerlukan terlalu banyak klik. Berikut ialah cara yang lebih pantas untuk menukar peranti output audio anda serta-merta.",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>Anda mencabut palam fon kepala anda dan mahu audio pergi ke pembesar suara anda. Atau anda menyambungkan AirPods dan macOS memilih peranti yang salah. Atau anda masuk ke bilik mesyuarat dan perlu bertukar kepada pembesar suara persidangan. Setiap kali, ia: Tetapan Sistem → Bunyi → Output → tatal → klik. Terlalu banyak klik untuk sesuatu yang sepatutnya mengambil satu.</p>

<p>Berikut ialah semua cara untuk menukar output audio dengan lebih pantas pada Mac — daripada pintasan terbina dalam kepada alatan bar menu yang menghapuskan klik sepenuhnya.</p>

<h2>Kaedah 1: Pilihan-klik ikon kelantangan</h2>

<p>Ini adalah kaedah terbina dalam terpantas dan kebanyakan orang tidak tahu mengenainya.</p>

<p>Pegang <strong>Pilihan (⌥)</strong> dan klik ikon kelantangan/bunyi dalam bar menu anda. Daripada peluncur kelantangan biasa, anda mendapat senarai semua peranti output yang tersedia. Klik yang anda mahukan. Selesai.</p>

<p>Jika anda tidak melihat ikon bunyi dalam bar menu anda, dayakan ikon bunyi: Tetapan Sistem → Pusat Kawalan → Bunyi → pilih "Sentiasa Tunjukkan dalam Bar Menu."</p>

<p><strong>Had:</strong> Ini hanya menunjukkan peranti output — anda tidak boleh melaraskan kelantangan setiap apl atau melihat perkara yang sedang dimainkan daripada menu ini.</p>

<h2>Kaedah 2: Pusat Kawalan</h2>

<p>Klik ikon Pusat Kawalan (ikon dua togol) dalam bar menu → klik bahagian Bunyi → klik nama peranti semasa untuk melihat semua output yang tersedia.</p>

<p><strong>Had:</strong> Ia tiga klik dan bukannya satu. Sedikit lebih perlahan daripada Pilihan-klik ikon kelantangan.</p>

<h2>Kaedah 3: Pintasan Tetapan Sistem</h2>

<p>Anda boleh menyematkan Bunyi pada bar sisi Tetapan Sistem peringkat atas, tetapi ia masih memerlukan navigasi ke tab Output dan memilih peranti. Tidak pantas.</p>

<h2>Kaedah 4: Pintasan papan kekunci (dengan persediaan)</h2>

<p>macOS tidak mempunyai pintasan papan kekunci terbina dalam untuk menukar peranti audio. Walau bagaimanapun, anda boleh menciptanya menggunakan Automator atau Pintas:</p>
<ol>
  <li>Buka apl Pintasan</li>
  <li>Cipta pintasan baharu yang menjalankan skrip shell: <code>SwitchAudioSource -s "Nama Peranti"</code> (memerlukan <code>suisaudio-osx</code> alat baris arahan daripada Homebrew)</li>
  <li>Tetapkan pintasan papan kekunci kepada pintasan</li>
</ol>
<p>Ini berfungsi tetapi memerlukan Homebrew, alat baris arahan dan persediaan manual bagi setiap peranti. Tidak praktikal untuk kebanyakan pengguna.</p>

<h2>Kaedah 5: Penukar peranti terbina dalam SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Termasuk pemilih peranti output terus dalam pop timbul bar menunya — bersama peluncur kelantangan setiap apl anda. Satu klik untuk membuka SoundDial, satu klik untuk menukar peranti. Tiada menggali Tetapan Sistem.</p>

<img src="/apps/sounddial.png" alt="SoundDial dengan penukaran peranti output audio dan kawalan kelantangan setiap apl dalam satu panel bar menu" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Kelebihan menukar peranti di dalam SoundDial: anda boleh menukar output anda <em>dan</em> laraskan volum setiap apl dalam panel yang sama. Tukar kepada AirPods dan segera turunkan Spotify sambil meningkatkan panggilan anda — semuanya tanpa meninggalkan popover.</p>

<p>Digabungkan dengan SoundDial <strong>memori kelantangan</strong> ciri, setiap peranti output boleh mengingati tahap kelantangan setiap aplnya sendiri. Tukar kepada pembesar suara dan baki kelantangan "pembesar suara" anda dikenakan. Tukar kepada fon kepala dan baki "fon kepala" anda dikenakan. Tiada pelarasan semula secara manual.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Betulkan Audio Berderak dan Meletus pada Mac: Panduan Lengkap",
    description:
      "Audio Mac anda berderak, meletup atau tergagap — semasa muzik, panggilan atau main balik video. Berikut ialah setiap punca dan pembetulan yang diketahui untuk gangguan audio macOS.",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>Anda mendengar muzik dan mendengar letupan. Kemudian berderak. Kemudian kegagapan di mana audio terputus selama sepersekian saat dan kembali. Ia bukan lagu - ia Mac anda. Berderak audio pada macOS adalah perkara biasa, dan ia mempunyai sekurang-kurangnya enam sebab yang berbeza.</p>

<p>Panduan ini merangkumi setiap punca audio yang diketahui berderak, meletup dan gagap pada Mac, daripada pembetulan perisian kepada satu isu perkakasan yang perlu anda ketahui.</p>

<h2>1. Mulakan semula Audio Teras (penyelesaian pantas)</h2>

<p>Satu-satunya penyelesaian yang paling berkesan untuk bunyi audio secara tiba-tiba ialah memulakan semula daemon audio macOS. Buka Terminal dan jalankan:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Audio akan terputus selama satu saat dan dimulakan semula. Dalam banyak kes, berderak berhenti serta-merta. Ini berfungsi kerana coreaudiod — proses yang mengurus semua audio pada macOS — boleh masuk ke dalam keadaan rosak selepas kitaran tidur/bangun, sambungan peranti Bluetooth atau ranap apl.</p>

<p>Jika ini membetulkannya, keretakan itu disebabkan oleh isu daemon sementara. Jika ia kembali dengan kerap, teruskan membaca untuk pembetulan kekal.</p>

<h2>2. Beban berlebihan CPU</h2>

<p>Berderak audio sering dikaitkan dengan penggunaan CPU yang tinggi. Apabila CPU Mac anda dimaksimumkan, ia tidak boleh memproses penimbal audio dengan cukup pantas, menyebabkan jurang yang berbunyi seperti letupan dan berderak.</p>

<p><strong>Semak:</strong> Buka Monitor Aktiviti (Aplikasi → Utiliti) dan lihat tab CPU. Jika anda melihat penggunaan CPU yang tinggi secara konsisten (80%+), itu mungkin puncanya.</p>

<p><strong>Betulkan:</strong> Tutup apl yang tidak perlu, terutamanya apl yang banyak sumber seperti penyemak imbas dengan banyak tab, editor video atau VM. Jika proses tertentu menggunakan CPU yang berlebihan, pertimbangkan sama ada ia berkelakuan seperti biasa atau perlu dimulakan semula.</p>

<h2>3. Isu audio Bluetooth</h2>

<p>Bluetooth ialah sumber berderak yang paling biasa untuk pengguna fon kepala dan pembesar suara wayarles. Beberapa perkara boleh menyebabkannya:</p>

<ul>
  <li><strong>Gangguan:</strong> WiFi, peranti USB 3.0 dan peranti Bluetooth lain boleh mengganggu sambungan audio anda. Cuba bergerak lebih dekat dengan Mac anda atau alih keluar sumber gangguan.</li>
  <li><strong>Pensuisan codec:</strong> Apabila apl mengaktifkan mikrofon anda, macOS bertukar daripada codec AAC kepada SCO. Peralihan ini boleh menyebabkan keretakan atau pop ringkas.</li>
  <li><strong>Kesesakan Bluetooth:</strong> Jika anda mempunyai banyak peranti Bluetooth yang disambungkan secara serentak, radio boleh bergelut. Putuskan sambungan peranti yang anda tidak gunakan.</li>
</ul>

<p><strong>Betulkan:</strong> Tetapkan semula Bluetooth dengan menahan Shift+Option, mengklik ikon Bluetooth dalam bar menu dan memilih "Tetapkan semula modul Bluetooth" (jika tersedia). Sebagai alternatif, alih keluar peranti daripada tetapan Bluetooth dan pasangkan semula.</p>

<h2>4. Ketidakpadanan kadar sampel</h2>

<p>Jika peranti output audio anda berjalan pada kadar sampel yang berbeza daripada audio yang dimainkan, macOS perlu mengambil sampel semula dalam masa nyata. Pensampelan semula ini boleh memperkenalkan artifak — terutamanya pada saiz penimbal yang lebih rendah.</p>

<p><strong>Semak:</strong> Buka Persediaan MIDI Audio (Aplikasi → Utiliti), pilih peranti output anda dan semak kadar sampel. Kadar biasa ialah 44.1 kHz (kualiti CD) dan 48 kHz (standard video/penstriman).</p>

<p><strong>Betulkan:</strong> Tetapkan kadar sampel agar sepadan dengan kes penggunaan anda yang paling biasa. Untuk muzik: 44.1 kHz. Untuk video/penstriman: 48 kHz. Jika anda menggunakan antara muka audio USB, rujuk dokumentasinya untuk kadar sampel dan saiz penimbal yang optimum.</p>

<h2>5. Isu penimbal peranti audio USB</h2>

<p>Peranti audio USB luaran (DAC, antara muka audio, fon kepala USB) boleh berderak jika saiz penimbal terlalu kecil untuk beban semasa sistem anda.</p>

<p><strong>Betulkan:</strong> Dalam Persediaan MIDI Audio, pilih peranti USB anda dan cuba tingkatkan saiz penimbal (jika pilihan tersedia). Dalam aplikasi audio seperti Logic, Ableton atau GarageBand, tingkatkan saiz penimbal I/O dalam pilihan audio. Penampan yang lebih besar bermakna sedikit lebih banyak kependaman tetapi gangguan audio yang lebih sedikit.</p>

<h2>6. macOS regresi kemas kini</h2>

<p>Sesetengah kemas kini macOS memperkenalkan pepijat audio. Ini telah berlaku dengan hampir setiap keluaran macOS utama — Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia dan Tahoe semuanya mempunyai bunyi audio yang dilaporkan selepas keluaran awal.</p>

<p><strong>Betulkan:</strong> Semak sama ada Apple telah mengeluarkan kemas kini titik (cth, 15.0.1, 15.1) yang menangani isu audio. Anda juga boleh menyemak Forum Pembangun Apple dan Reddit untuk mengetahui sama ada pengguna lain mengalami isu yang sama. Jika ia adalah pepijat macOS yang diketahui, pembetulan biasanya tiba dalam satu atau dua keluaran titik.</p>

<h2>7. Sambungan kernel atau pemalam audio</h2>

<p>Pemacu audio pihak ketiga, peranti audio maya atau pemalam audio boleh bercanggah dengan timbunan audio asli macOS. Ini amat biasa dengan perisian audio lama yang menggunakan sambungan kernel (kexts) yang ditamatkan dalam versi macOS baru-baru ini.</p>

<p><strong>Betulkan:</strong> Semak sama ada anda mempunyai perisian audio pihak ketiga yang dipasang: Soundflower, BlackHole, Loopback atau pemacu antara muka audio yang lebih lama. Cuba lumpuhkan atau nyahpasangnya buat sementara waktu untuk melihat sama ada berderak berhenti. Jika ya, semak versi yang dikemas kini serasi dengan versi macOS anda.</p>

<h2>Mengurus kualiti audio dengan SoundDial</h2>

<p>Walaupun SoundDial tidak membetulkan perkakasan atau keretakan peringkat sistem secara langsung, ia boleh membantu anda mengurus audio dengan cara yang mengurangkan masalah:</p>

<ul>
  <li><strong>Kurangkan sumber audio yang bersaing:</strong> Gunakan SoundDial untuk meredamkan apl yang anda tidak gunakan secara aktif. Lebih sedikit strim audio serentak bermakna kurang tekanan CPU pada pemprosesan audio.</li>
  <li><strong>Rangsangan kelantangan dan bukannya maks sistem:</strong> Jika anda menjalankan kelantangan sistem pada 100% dan masih menolak apl dengan lebih kuat, laluan audio berfungsi pada hadnya. Penggunaan <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> rangsangan setiap apl untuk menguatkan apl tertentu kepada 200% sambil mengekalkan kelantangan sistem pada 70-80% yang lebih selesa. Ini boleh mengurangkan herotan pada tahap output sistem.</li>
  <li><strong>Penukaran peranti keluaran pantas:</strong> Jika berderak berkaitan dengan peranti output tertentu, SoundDial membolehkan anda menukar peranti daripada panel bar menunya tanpa menggali Tetapan Sistem.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Volum Microsoft Teams Terlalu Rendah pada Mac? Setiap Pembetulan Yang Berfungsi",
    description:
      "Hampir tidak boleh mendengar orang di Pasukan walaupun pada kelantangan maksimum? Berikut ialah setiap punca — daripada tetapan Pasukan kepada codec Bluetooth — dan cara meningkatkan audio panggilan melepasi 100%.",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>Anda berada dalam mesyuarat Pasukan. Rakan sekerja anda sedang membuat pembentangan, tetapi suara mereka kedengaran seperti datang melalui tin tin dari tiga bilik jauhnya. Jumlah Mac anda ialah 100%. Volum pasukan adalah pada 100%. Anda telah menemui semua yang anda boleh temui. Masih terlalu senyap.</p>

<p>Kelantangan rendah pada Microsoft Teams ialah salah satu aduan audio Mac yang paling biasa dalam persekitaran korporat. Puncanya berbeza daripada Zoom, dan beberapa pembetulan adalah khusus Pasukan. Mari kita lihat semuanya.</p>

<h2>1. Semak tetapan audio Pasukan</h2>

<p>Klik ikon profil anda dalam Pasukan → Seting → Peranti (atau Seting → peranti Audio dalam Pasukan baharu).</p>
<ul>
  <li>Pastikan yang betul <strong>Penceramah</strong> peranti dipilih — bukan monitor yang terputus sambungan atau peranti Bluetooth yang tidak aktif</li>
  <li>Gunakan ciri "Buat panggilan ujian" untuk mengesahkan audio berfungsi pada kelantangan yang munasabah</li>
  <li>Semak sama ada "Penindasan bunyi" tidak ditetapkan kepada "Tinggi" — penindasan hingar yang agresif boleh mengurangkan kelantangan suara yang dirasakan</li>
</ul>

<h2>2. Pasukan Baharu lwn Pasukan Klasik</h2>

<p>Microsoft menggantikan "Pasukan Klasik" dengan "Pasukan Baharu" (dibina pada rangka kerja yang berbeza). Versi baharu mengendalikan audio secara berbeza. Jika anda berhijrah baru-baru ini:</p>
<ul>
  <li>Tetapan peranti audio mungkin tidak dibawa — semak semula pilihan pembesar suara anda</li>
  <li>Pasukan baharu menggunakan pemprosesan audio WebRTC, yang boleh berkelakuan berbeza daripada versi klasik</li>
  <li>Cuba matikan "Mod muzik" jika ia didayakan (Tetapan → peranti Audio) — ia mengubah cara Pasukan memproses audio masuk</li>
</ul>

<h2>3. Penukaran codec Bluetooth</h2>

<p>Jika anda menggunakan AirPods atau fon kepala Bluetooth, menyertai panggilan Teams memaksa macOS untuk bertukar daripada codec AAC berkualiti tinggi kepada codec SCO berkualiti rendah (kerana Teams mengaktifkan mikrofon anda). SCO mengurangkan kualiti dan kelantangan audio dengan ketara.</p>

<p><strong>Betulkan:</strong> Gunakan mikrofon terbina dalam Mac anda atau mikrofon USB sambil mengekalkan fon kepala Bluetooth sebagai peranti output. Pergi ke Pasukan → Tetapan → Peranti → Mikrofon dan pilih "Mikrofon MacBook Pro" (atau mikrofon USB anda). Ini menghalang suis codec, memastikan fon kepala anda dalam mod AAC berkualiti tinggi.</p>

<h2>4. Semak peranti output macOS dan kelantangan</h2>

<p>Pergi ke Tetapan Sistem → Bunyi → Output. Sahkan peranti yang betul dipilih dan isipadu keluaran adalah maksimum. Semak juga:</p>
<ul>
  <li><strong>Keselamatan Fon Kepala:</strong> Tetapan sistem → keselamatan bunyi → fon kepala. Jika "Kurangkan Audio Kuat" dihidupkan, ia mengehadkan kelantangan fon kepala anda.</li>
  <li><strong>Baki:</strong> Pastikan gelangsar keseimbangan kiri-kanan berada di tengah — jika ia condong, satu sisi akan menjadi lebih senyap.</li>
</ul>

<h2>5. Tetapkan semula Audio Teras</h2>

<p>Daemon audio macOS kadangkala tersekat pada tahap output rendah selepas tidur, penukaran peranti atau kemas kini Pasukan. Buka Terminal dan jalankan:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Audio dimulakan semula selepas gangguan ringkas. Sertai semula mesyuarat Pasukan dan semak sama ada kelantangan bertambah baik.</p>

<h2>6. Tingkatkan volum Pasukan melebihi 100%</h2>

<p>Jika setiap tetapan dimaksimumkan dan Pasukan masih terlalu senyap — mungkin peserta mempunyai mikrofon yang buruk atau audio mesyuarat sememangnya rendah — anda perlu menguatkan melebihi apa yang biasanya dibenarkan oleh macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda meningkatkan kelantangan mana-mana apl kepada <strong>200%</strong>, termasuk Microsoft Teams. Seret gelangsar Pasukan kepada 150% atau 180% dan audio dikuatkan dalam masa nyata. Hanya Pasukan menjadi lebih kuat — muzik, penyemak imbas dan apl lain anda kekal pada tahap semasa mereka.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan volum panggilan Microsoft Teams melebihi 100% pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial juga membantu dengan masalah terbalik: jika bunyi pemberitahuan Pasukan terlalu kuat semasa masa fokus, turunkan Pasukan kepada 15% atau bisukannya sepenuhnya sambil memastikan muzik anda dimainkan. Satu klik untuk membisukan, satu klik untuk menyahredamkan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Cara Mengawal Kelantangan Setiap Apl pada Mac",
    description:
      "macOS memberi anda satu gelangsar kelantangan untuk segala-galanya. Berikut ialah cara untuk mendapatkan kawalan kelantangan individu untuk setiap apl — dan sebab ia lebih penting daripada yang anda fikirkan.",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>Anda sedang dalam panggilan video. Kendur terus berbunyi. Muzik dimainkan di latar belakang. Anda mencapai kekunci kelantangan dan — semuanya menjadi lebih senyap. Panggilan, muzik, pemberitahuan. macOS mempunyai tepat satu peluncur kelantangan, dan ia mengawal segala-galanya sekaligus.</p>

<p>Windows telah mempunyai pengadun kelantangan setiap apl sejak Vista pada tahun 2006. Dua puluh tahun kemudian, macOS masih tidak. Jika anda ingin menolak Spotify tanpa menjejaskan panggilan Zoom anda, Apple tidak mempunyai jawapan terbina dalam untuk anda.</p>

<p>Panduan ini menerangkan apa itu kawalan kelantangan setiap apl, sebab macOS tidak memilikinya dan cara mendapatkannya.</p>

<h2>Apakah maksud kelantangan setiap apl sebenarnya</h2>

<p>Kelantangan setiap apl bermakna setiap aplikasi pada Mac anda mendapat peluncur kelantangan bebasnya sendiri. Anda boleh menetapkan Spotify kepada 30%, kekalkan Zum pada 100%, bisukan Slack sepenuhnya dan biarkan Safari pada 50% — semuanya pada masa yang sama. Menukar kelantangan satu apl tidak mempunyai kesan pada mana-mana apl lain.</p>

<p>Ini berbeza daripada volum sistem, yang merupakan gelangsar induk tunggal yang menskalakan segala-galanya secara berkadar. Jika kelantangan sistem anda pada 50% dan Spotify dimainkan pada letupan penuh, tiada cara untuk mematikan Spotify sahaja tanpa pengadun setiap apl.</p>

<h2>Mengapa macOS tidak termasuk ini</h2>

<p>Seni bina audio Apple (Audio Teras) benar-benar menyokong kawalan kelantangan setiap apl pada peringkat rangka kerja. Sebab macOS tidak mendedahkannya dalam UI ialah pilihan falsafah reka bentuk: Apple lebih suka kawalan yang lebih sedikit dan permukaan yang lebih ringkas. Satu gelangsar lebih mudah daripada dua belas.</p>

<p>Masalahnya ialah "lebih mudah" berhenti menjadi lebih mudah sebaik sahaja anda mempunyai lebih daripada satu sumber audio yang bersaing untuk perhatian anda. Satu kekunci kelantangan yang mengawal segala-galanya adalah elegan apabila anda melakukan satu perkara. Ia secara aktif bermusuhan apabila anda sedang dalam panggilan dengan muzik dan pemberitahuan pada masa yang sama — itulah cara kebanyakan orang sebenarnya menggunakan Mac mereka.</p>

<h2>Penyelesaian terbina dalam (dan sebab ia tidak berfungsi)</h2>

<h3>1. Kawalan kelantangan dalam apl</h3>
<p>Sesetengah apl mempunyai peluncur kelantangan mereka sendiri — Spotify, VLC, QuickTime. Tetapi kebanyakannya tidak. Slack tidak. Tab Chrome tidak. Bunyi sistem tidak. Dan walaupun apl mempunyai gelangsar, anda perlu membuka apl itu, mencari gelangsar, melaraskannya, kemudian bertukar semula kepada perkara yang anda lakukan. Ia lima klik untuk sesuatu yang sepatutnya menjadi satu.</p>

<h3>2. Persediaan MIDI Audio</h3>
<p>macOS termasuk Persediaan MIDI Audio dalam folder Utiliti. Ia membolehkan anda mengkonfigurasi peranti audio dan mencipta peranti agregat, tetapi ia mempunyai kawalan kelantangan setiap apl sifar. Ia adalah alat konfigurasi peranti, bukan pengadun.</p>

<h3>3. Pelbagai peranti output</h3>
<p>Anda secara teorinya boleh menghalakan apl yang berbeza ke peranti output yang berbeza (fon kepala vs pembesar suara) dan mengawal peranti tersebut secara berasingan. Tetapi itu memerlukan perkakasan tambahan, penghalaan manual setiap apl dan sebenarnya tidak memberi anda kelantangan bebas — hanya hidup/mati bebas setiap peranti.</p>

<h2>Cara pengadun kelantangan setiap apl berfungsi</h2>

<p>Pengadun kelantangan setiap apl yang betul berada dalam bar menu anda dan menunjukkan setiap apl yang sedang menghasilkan audio. Setiap apl mendapat gelangsarnya sendiri. Anda menyeretnya ke atas atau ke bawah, dan hanya kelantangan apl itu berubah. Kelantangan sistem kekal tidak disentuh.</p>

<p>Di bawah hud, ini berfungsi dengan menggunakan macOS <strong>API Ketuk Audio Teras</strong> (diperkenalkan dalam macOS 14) atau teknik peranti audio maya yang lebih lama untuk memintas strim audio setiap apl secara bebas dan menskalakan amplitudnya sebelum ia mencecah pembesar suara.</p>

<p>Ciri-ciri utama yang memisahkan pengadun yang baik dari yang buruk:</p>

<ul>
  <li><strong>Pengesanan apl masa nyata.</strong> Apabila apl baharu mula memainkan audio, ia sepatutnya muncul dalam pengadun secara automatik. Tiada persediaan manual.</li>
  <li><strong>Bisu setiap apl.</strong> Satu klik untuk menyenyapkan apl tertentu tanpa menyentuh kedudukan gelangsarnya.</li>
  <li><strong>Rangsangan kelantangan.</strong> Sesetengah apl (melihat anda, pemain podcast yang senyap) maksimum terlalu rendah. Pengadun yang baik membolehkan anda meningkatkan melepasi 100%.</li>
  <li><strong>Profil.</strong> Konfigurasi kelantangan yang berbeza untuk situasi yang berbeza — "Fokus" dengan segala-galanya disenyapkan kecuali muzik, "Mesyuarat" dengan Zum pada 100% dan segala-galanya pada 20%, "Permainan" dengan audio permainan ditingkatkan.</li>
  <li><strong>Mengelak secara automatik.</strong> Turunkan muzik secara automatik apabila anda memulakan panggilan dan bawa semula muzik apabila panggilan tamat. Ini sahaja bernilai keseluruhan apl.</li>
  <li><strong>Bar menu asli.</strong> Ia sepatutnya hidup dalam bar menu, bukan tetingkap dok. Anda memandang ke atas, menyesuaikan diri, dan kembali bekerja. Tiada penukaran apl.</li>
</ul>

<h2>Siapa yang memerlukan ini</h2>

<p>Sesiapa sahaja yang melakukan lebih daripada satu perkara audio pada satu masa. Itulah kebanyakan orang, tetapi terutamanya:</p>

<ul>
  <li><strong>Pekerja jarak jauh</strong> — panggilan + muzik + pemberitahuan ialah perlanggaran yang paling biasa</li>
  <li><strong>Penstrim dan podcaster</strong> — kawalan tepat ke atas apa yang didengar oleh penonton berbanding apa yang anda dengar</li>
  <li><strong>Pemuzik dan penerbit</strong> — perlu mengasingkan output DAW daripada trek rujukan dan alat komunikasi</li>
  <li><strong>Pemain</strong> — audio permainan lwn Discord lwn muzik ialah tindakan pengimbangan yang berterusan</li>
  <li><strong>Sesiapa sahaja yang mengalami keletihan pemberitahuan</strong> — bisu Slack, simpan segala-galanya</li>
</ul>

<h2>SoundDial</h2>

<p>Saya membina <strong>SoundDial</strong> kerana pengadun kelantangan Mac yang saya mahukan tidak wujud. Ia berada di bar menu anda, menunjukkan setiap apl yang mengeluarkan bunyi dan memberikan setiap apl gelangsar tersendiri. Bisu setiap apl, rangsangan kelantangan, profil dan itik automatik yang menurunkan muzik anda apabila panggilan bermula. Pembelian sekali sahaja, macOS 14+, tiada langganan.</p>

<p>Pengadun kelantangan macOS sepatutnya terbina dalam.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Cara Meredamkan Kendur pada Mac Tanpa Meredamkan Segala-galanya",
    description:
      "Pemberitahuan kendur terus mengganggu tumpuan anda, tetapi anda tidak mahu menyenyapkan muzik atau panggilan anda. Berikut ialah cara untuk membisukan hanya Slack pada macOS.",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>Anda sangat fokus dalam kerja. Spotify memainkan senarai main tumpuan yang sempurna. Kemudian — <em>Berus ketuk</em> — Ping kendur. Dan sekali lagi. Dan sekali lagi. Tiga saluran, dua DM dan pemberitahuan utas dalam tiga puluh saat. Anda mahu meredamkan Slack tetapi mengekalkan muzik anda. macOS berkata: bisukan segala-galanya atau bisukan apa-apa.</p>

<p>Bunyi pemberitahuan Slack ialah salah satu aduan audio teratas untuk pekerja jauh di Mac. Ia direka untuk menarik perhatian anda, yang merupakan masalah apabila anda perlu menumpukan perhatian.</p>

<h2>Pilihan 1: Bisukan pemberitahuan dalam Slack itu sendiri</h2>

<p>Slack mempunyai ciri "Jeda pemberitahuan":</p>
<ol>
  <li>Klik gambar profil anda dalam bar sisi Slack</li>
  <li>Klik "Jeda pemberitahuan"</li>
  <li>Pilih tempoh (30 minit, 1 jam, 2 jam, dll.)</li>
</ol>

<p>Ini menyekat lencana dan bunyi pemberitahuan untuk tempoh yang dipilih. Anda juga boleh meredamkan saluran individu dengan mengklik kanan → "Bisukan saluran."</p>

<p><strong>Had:</strong> Ini adalah semua-atau-tiada setiap saluran. Anda tidak boleh membuat Slack <em>lebih senyap</em> — hanya senyap sepenuhnya atau hidup sepenuhnya. Dan jika anda terlupa untuk menyahjeda, anda terlepas mesej selepas sesi fokus anda tamat. Ia juga tidak menyekat bunyi dalam apl Slack jika anda membuka apl.</p>

<h2>Pilihan 2: Matikan bunyi Slack dalam pemberitahuan macOS</h2>

<p>Pergi ke Tetapan Sistem → Pemberitahuan → Slack. Matikan "Mainkan bunyi untuk pemberitahuan."</p>

<p><strong>Had:</strong> Ini mengalih keluar semua bunyi pemberitahuan Slack secara kekal (sehingga anda menghidupkannya semula). Dan ia hanya menjejaskan pemberitahuan peringkat macOS — jika Slack memainkan bunyi melalui enjin audionya sendiri, tetapan pemberitahuan mungkin tidak menangkap kesemuanya.</p>

<h2>Pilihan 3: Gunakan mod Fokus</h2>

<p>Buat mod Fokus "Fokus" atau "Kerja" dalam Tetapan Sistem → Fokus. Tambah Slack pada senarai "Senyap". Apabila anda mengaktifkan mod Fokus, pemberitahuan Slack akan ditindas.</p>

<p><strong>Had:</strong> Mod fokus menyekat pemberitahuan secara visual dan kedengaran, tetapi ia tidak memberi anda kawalan kelantangan yang terperinci. Anda tidak boleh menyebut "Pemberitahuan Slack pada volum 10%" — ia sama ada dibenarkan sepenuhnya atau disenyapkan sepenuhnya.</p>

<h2>Pilihan 4: Kawalan kelantangan setiap apl (pembetulan sebenar)</h2>

<p>Apa yang anda mahukan sebenarnya adalah mudah: turunkan kelantangan Slack kepada 10-15% sambil mengekalkan segala-galanya pada tahap normal. Ping kendur boleh didengar jika anda mendengarnya, tetapi ia tidak mengganggu aliran anda. Muzik kekal pada kelantangan penuh. Panggilan kekal pada kelantangan penuh.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberikan Slack peluncur kelantangan bebasnya sendiri. Tetapkannya ke mana-mana tahap yang sesuai untuk anda — atau bisukannya sepenuhnya dengan satu klik. Apabila anda sudah bersedia untuk memberi perhatian kepada Slack sekali lagi, nyahredamkannya dan kelantangan kembali ke tempat semula.</p>

<img src="/apps/sounddial.png" alt="SoundDial dengan Slack disenyapkan dan Spotify dimainkan pada kelantangan biasa pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Aliran kerja Slack yang ideal</h3>
<ul>
  <li><strong>Masa fokus:</strong> Kendur pada 10% atau disenyapkan. Spotify pada 40%. Tiada gangguan.</li>
  <li><strong>Masa yang tersedia:</strong> Kendur pada 40%. Pemberitahuan dapat dilihat tanpa mengejutkan.</li>
  <li><strong>Masa pertemuan:</strong> Kendur disenyapkan. Zum pada 100%. Auto-ducking mengendalikan selebihnya.</li>
</ul>

<p>Simpan setiap satu daripada ini sebagai <strong>profil kelantangan</strong> dalam SoundDial dan bertukar antara mereka dengan satu klik. Lebih baik lagi, gunakan auto-ducking — apabila panggilan bermula, SoundDial secara automatik menurunkan segala-galanya (termasuk Slack) dan memulihkannya apabila panggilan tamat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Cara menyediakan profil kelantangan untuk situasi yang berbeza pada Mac",
    description:
      "Persediaan kelantangan yang berbeza untuk mesyuarat, kerja fokus, permainan dan bersantai — boleh ditukar dengan satu klik. Berikut ialah cara profil volum berfungsi pada macOS.",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>Pada jam 9 pagi anda sedang dalam panggilan Zoom — anda mahu Zoom pada 100%, Spotify disenyapkan, Slack disenyapkan. Pada pukul 10 pagi panggilan tamat — anda mahu Spotify pada 40%, Slack pada 15%, Zoom tidak penting. Pada tengah hari anda bermain — permainan pada 60%, Discord pada 100%, segala-galanya disenyapkan. Menjelang jam 6 petang anda menonton YouTube — penyemak imbas pada 80%, segala-galanya senyap.</p>

<p>Setiap situasi mempunyai konfigurasi kelantangan ideal yang berbeza. Dan setiap kali keadaan berubah, anda perlu melaraskan lima atau enam apl secara manual. Atau anda boleh menyimpan setiap persediaan sebagai profil dan bertukar dengan satu klik.</p>

<h2>Apakah profil volum?</h2>

<p>Profil kelantangan ialah syot kilat yang disimpan bagi setiap kelantangan dan keadaan bisu apl. Anda mengkonfigurasi apl anda seperti yang anda mahukan — Spotify pada 30%, Zum pada 100%, Slack disenyapkan — kemudian simpan itu sebagai profil bernama seperti "Kerja" atau "Mesyuarat." Kemudian, anda menggunakan profil dan setiap apl serta-merta melompat ke tahap kelantangan yang disimpan.</p>

<p>Fikirkan ia seperti pratetap paparan untuk audio: sama seperti anda mungkin mempunyai susunan paparan untuk "persediaan meja" vs "mod persembahan", profil kelantangan membolehkan anda bertukar antara konfigurasi audio tanpa melaraskan setiap apl secara manual.</p>

<h2>macOS tidak mempunyai profil kelantangan</h2>

<p>macOS mempunyai mod Fokus (Jangan Ganggu, Kerja, Peribadi, dll.) yang mengawal pemberitahuan yang dilalui. Tetapi mod Fokus tidak mengawal tahap kelantangan. Mereka boleh menyekat bunyi pemberitahuan sepenuhnya, tetapi mereka tidak boleh menetapkan Spotify kepada 30% atau Zum kepada 100%. Tiada cara terbina dalam untuk menyimpan dan memulihkan konfigurasi volum setiap apl.</p>

<h2>Menyediakan profil dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> termasuk sistem profil terbina dalam. Berikut ialah cara untuk menyediakannya:</p>

<h3>Mencipta profil</h3>
<ol>
  <li>Buka SoundDial daripada bar menu</li>
  <li>Laraskan kelantangan setiap apl mengikut kehendak anda untuk situasi tertentu</li>
  <li>Klik butang "+" di bahagian profil</li>
  <li>Beri nama (cth., "Mesyuarat") dan pilih ikon</li>
  <li>Selesai — konfigurasi kelantangan semasa anda disimpan</li>
</ol>

<h3>Menukar profil</h3>
<p>Profil anda yang disimpan muncul sebagai butang dalam popover SoundDial. Klik satu dan setiap apl bertukar serta-merta kepada volum yang disimpan dalam profil tersebut. Satu klik menggantikan lima atau enam pelarasan manual.</p>

<img src="/apps/sounddial.png" alt="SoundDial profil kelantangan — penukaran satu klik antara mod Mesyuarat, Fokus dan Sejuk pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Contoh profil</h3>

<p><strong>Mesyuarat</strong></p>
<ul>
  <li>Zum / Pasukan: 100%</li>
  <li>Spotify: disenyapkan</li>
  <li>Kendur: disenyapkan</li>
  <li>Penyemak imbas: disenyapkan</li>
</ul>

<p><strong>Kerja Fokus</strong></p>
<ul>
  <li>Spotify: 35%</li>
  <li>Kendur: 10%</li>
  <li>Mel: disenyapkan</li>
  <li>Penyemak imbas: 50%</li>
</ul>

<p><strong>Permainan</strong></p>
<ul>
  <li>Permainan: 60%</li>
  <li>Perselisihan: 100%</li>
  <li>Spotify: 20%</li>
  <li>Segala-galanya: disenyapkan</li>
</ul>

<p><strong>Bertenang</strong></p>
<ul>
  <li>Spotify: 70%</li>
  <li>Penyemak imbas: 60%</li>
  <li>Pemberitahuan: 20%</li>
</ul>

<h3>Mengemas kini profil</h3>
<p>Jika volum pilihan anda berubah dari semasa ke semasa, hanya laraskan gelangsar dan kemas kini profil. Kali seterusnya anda menggunakannya, ia menggunakan tetapan baharu.</p>

<h2>Profil + auto-ducking = automatik sepenuhnya</h2>

<p>Gabungkan profil dengan ciri auto-ducking SoundDial dan anda jarang perlu menyentuh kelantangan sama sekali. Gunakan profil "Fokus Kerja" anda pada waktu pagi. Apabila panggilan masuk, auto-ducking menurunkan segala-galanya kecuali apl panggilan. Apabila panggilan tamat, semuanya kembali ke tahap profil anda. Pada penghujung hari, tukar kepada "Sejuk" dengan satu klik.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Kelantangan Panggilan Zum Terlalu Rendah pada Mac? Cara Menggalakkannya",
    description:
      "Anda hampir tidak boleh mendengar orang di Zoom walaupun pada kelantangan maksimum. Berikut ialah setiap pembetulan — daripada tetapan Zum kepada meningkatkan audio panggilan melebihi 100% dengan pengadun kelantangan setiap apl.",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>Anda sedang dalam panggilan Zoom. Orang lain bercakap, tetapi suara mereka hampir tidak kedengaran. Kelantangan Mac anda adalah maksimum. Kelantangan pembesar suara Zum adalah maksimum. Anda bersandar ke skrin anda, berusaha untuk mendengar. Ini tidak sepatutnya sesukar ini.</p>

<p>Kelantangan panggilan Zum rendah adalah sangat biasa, dan ia mempunyai pelbagai sebab. Mari kita lihat setiap pembetulan, daripada semakan tetapan mudah kepada meningkatkan audio Zoom melepasi had biasanya.</p>

<h2>1. Semak tetapan output audio Zum</h2>

<p>Buka Zum → Tetapan → Audio. Di bawah "Pembesar suara", pastikan:</p>
<ul>
  <li>Peranti output yang betul dipilih (bukan monitor tidak aktif atau peranti terputus)</li>
  <li>Gelangsar kelantangan pembesar suara adalah maksimum</li>
  <li>Klik "Uji Pembesar Suara" untuk mengesahkan anda boleh mendengar nada ujian dengan jelas</li>
</ul>

<p>Jika nada ujian juga senyap, masalahnya ialah antara Zum dan pembesar suara anda — teruskan dengan pembetulan di bawah. Jika nada ujian baik-baik saja tetapi panggilan sebenar senyap, peserta lain mungkin mempunyai masalah mikrofon di pihak mereka.</p>

<h2>2. Semak peranti output Mac anda</h2>

<p>Pergi ke Tetapan Sistem → Bunyi → Output. Pastikan peranti yang betul dipilih. Jika anda baru-baru ini menyambungkan/memutuskan sambungan fon kepala, paparan atau peranti Bluetooth, macOS mungkin telah bertukar secara automatik kepada output yang tidak dijangka.</p>

<h2>3. Lumpuhkan pelarasan kelantangan automatik Zum</h2>

<p>Zum mempunyai tetapan "Laraskan kelantangan mikrofon secara automatik" (Tetapan → Audio) yang juga boleh menjejaskan tahap output yang dirasakan dalam sesetengah konfigurasi. Cuba lumpuhkannya dan uji lagi.</p>

<h2>4. Lumpuhkan penindasan bunyi latar belakang (buat sementara waktu)</h2>

<p>Penindasan hingar Zoom menapis bunyi latar belakang secara agresif — tetapi dengan berbuat demikian, ia kadangkala boleh mengurangkan kenyaringan suara orang lain yang dirasakan secara agresif, terutamanya dalam persekitaran yang tenang. Cuba tetapkan "Tekan bunyi latar belakang" kepada "Rendah" atau "Auto" dan bukannya "Tinggi."</p>

<h2>5. Semak codec Bluetooth</h2>

<p>Jika anda menggunakan AirPods atau fon kepala Bluetooth, menyertai panggilan Zoom memaksa macOS untuk bertukar daripada codec AAC berkualiti tinggi kepada codec SCO berkualiti rendah (kerana Zoom menggunakan mikrofon anda). SCO mengurangkan kualiti audio dan boleh menjadikan bunyi audio panggilan lebih senyap dan lebih dimampatkan.</p>

<p><strong>Betulkan:</strong> Gunakan mikrofon berasingan (mikrofon Mac terbina dalam atau mikrofon USB) sambil mengekalkan AirPods sebagai peranti output. Ini menghalang suis codec — AirPods kekal dalam mod AAC dengan kualiti audio dan kelantangan yang lebih baik.</p>

<h2>6. Tetapkan semula Audio Teras</h2>

<p>Daemon audio macOS kadangkala masuk ke dalam keadaan di mana tahap output dikurangkan, terutamanya selepas tidur/bangun atau suis peranti. Buka Terminal dan jalankan:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Audio akan dimulakan semula selepas gangguan ringkas. Sertai semula panggilan Zoom dan semak sama ada kelantangan telah bertambah baik.</p>

<h2>7. Tingkatkan kelantangan Zoom melepasi 100%</h2>

<p>Jika anda telah mencuba segala-galanya di atas dan Zum masih terlalu senyap, masalahnya mungkin output audio Zum tidak cukup kuat untuk persediaan anda. Sesetengah peserta mempunyai mikrofon yang senyap, dan hanya banyak yang boleh dilakukan oleh Zoom untuk menguatkan isyarat mereka.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda meningkatkan kelantangan mana-mana apl kepada <strong>200%</strong> — termasuk Zoom. Jika peserta terlalu senyap, seret gelangsar Zum kepada 150% atau 180%. Isyarat audio dikuatkan melebihi maksimum terbina dalam Zoom, menjadikan suara yang paling senyap pun boleh didengar.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan panggilan Zoom kepada 180% pada Mac untuk audio yang lebih jelas semasa panggilan video" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Kelebihan utama: meningkatkan Zoom tidak menjejaskan apa-apa lagi. Muzik, pemberitahuan dan apl lain anda kekal pada tahap semasa. Hanya Zoom yang menjadi lebih kuat.</p>

<p>Ini juga berfungsi untuk <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong>, dan mana-mana aplikasi panggilan lain. Jika anda boleh mendengarnya, SoundDial boleh meningkatkannya.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Cara Menurunkan Spotify Tanpa Menurunkan Segala-galanya pada Mac",
    description:
      "Anda mahukan Spotify sebagai muzik latar belakang, tetapi menurunkannya dengan kekunci kelantangan menjadikan panggilan anda dan segala-galanya juga lebih senyap. Inilah penyelesaiannya.",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>Anda sedang bekerja. Spotify sedang memainkan muzik latar belakang. Ia agak terlalu kuat — bersaing dengan podcast dalam tab lain atau menyukarkan untuk fokus. Anda mengetik kekunci kelantangan turun. Spotify menjadi lebih senyap. Tetapi begitu juga dengan segala-galanya — panggilan Zoom anda, bunyi pemberitahuan anda, audio penyemak imbas anda. Semua lebih senyap. Itu bukan apa yang anda mahukan.</p>

<p>Ini berlaku kerana macOS mempunyai satu peluncur kelantangan. Tekan kekunci kelantangan dan ia melaraskan <em>Isipadu Sistem</em>, yang menskalakan setiap apl sama rata. Tidak ada cara untuk mengatakan "hanya menurunkan Spotify" dengan kawalan terbina dalam.</p>

<h2>Penyelesaian: Kelantangan dalam apl Spotify</h2>

<p>Spotify mempunyai peluncur kelantangannya sendiri di penjuru kanan bawah apl (atau bahagian bawah pemain). Anda boleh menurunkan ini secara bebas daripada jumlah sistem. Jika sistem anda berada pada 80% dan gelangsar Spotify berada pada 30%, Spotify akan dimainkan pada 24% dengan berkesan manakala yang lain kekal pada 80%.</p>

<p><strong>Masalahnya:</strong> Anda perlu bertukar kepada tetingkap Spotify, cari gelangsar, laraskannya, kemudian bertukar semula kepada perkara yang anda lakukan. Dan gelangsar Spotify adalah kecil, tidak tepat dan tidak menunjukkan peratusan — hanya bar visual. Jika anda berada dalam mesyuarat dan perlu menurunkan muzik anda dengan cepat, meraba-raba dengan gelangsar kecil dalam apl lain adalah tidak sesuai.</p>

<h2>Penyelesaian sebenar: kawalan kelantangan setiap apl</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> meletakkan peluncur kelantangan untuk setiap apl dalam bar menu anda. Untuk menurunkan Spotify tanpa menjejaskan apa-apa lagi:</p>

<ol>
  <li>Klik ikon SoundDial dalam bar menu</li>
  <li>Cari Spotify dalam senarai</li>
  <li>Seret gelangsarnya ke bawah</li>
</ol>

<p>Selesai. Spotify lebih senyap. Zum tidak berubah. Pemberitahuan tidak berubah. Segala-galanya tidak berubah. Anda tidak meninggalkan apl semasa anda — pop timbul bar menu dibuka betul-betul di tempat anda berada.</p>

<img src="/apps/sounddial.png" alt="SoundDial menurunkan kelantangan Spotify secara bebas sambil mengekalkan apl lain pada kelantangan penuh pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Lebih baik lagi: simpan sebagai profil</h2>

<p>Jika anda kerap mahukan Spotify pada tahap latar belakang yang lebih rendah semasa bekerja, simpan persediaan kelantangan pilihan anda sebagai profil. Buat profil "Kerja" dengan Spotify pada 25%, Zum pada 100% dan Slack pada 15%. Lain kali anda duduk untuk bekerja, gunakan profil dengan satu klik dan bukannya melaraskan setiap apl secara individu.</p>

<h2>Lebih baik lagi: auto-ducking semasa panggilan</h2>

<p>SoundDial boleh menurunkan Spotify secara automatik apabila anda menyertai panggilan. Dayakan auto-ducking dalam tetapan, pilih jumlah untuk mengurangkan audio latar belakang (lalai 30%), dan SoundDial mengendalikan yang lain. Muzik anda merunduk apabila panggilan bermula dan kembali apabila ia tamat. Tiada pelarasan manual sama sekali.</p>

<p>Ini ialah aliran kerja yang harus disokong oleh macOS secara asli: "Spotify pada tahap ini, segala-galanya pada tahap itu." Memandangkan Apple belum membinanya, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mengisi jurang.</p>

<p>Pembelian sekali sahaja pada <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Tiada langganan. macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Adakah macOS Tahoe Mempunyai Kawalan Kelantangan Setiap Apl?",
    description:
      "macOS Tahoe (macOS 26) membawa kemas kini utama, tetapi adakah Apple akhirnya menambah pengadun kelantangan? Inilah jawapannya — dan cara mendapatkan kawalan kelantangan setiap apl sekarang.",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>Setiap tahun, pengguna Mac berharap keluaran macOS seterusnya akhirnya akan menyertakan pengadun kelantangan. Setiap tahun, mereka kecewa. Dengan macOS Tahoe (macOS 26), Apple menyampaikan antara muka yang direka bentuk semula, ciri sistem baharu dan penambahbaikan utama di bawah hud. Tetapi adakah mereka menambah kawalan kelantangan setiap apl?</p>

<h2>Jawapan ringkasnya: tidak</h2>

<p>macOS Tahoe tidak termasuk pengadun kelantangan terbina dalam. Tiada kawalan kelantangan setiap apl dalam Tetapan Sistem, Pusat Kawalan atau bar menu. Pengalaman audio adalah sama seperti setiap keluaran macOS sebelum itu: satu peluncur kelantangan sistem yang mengawal segala-galanya sekaligus.</p>

<p>Pusat Kawalan Apple masih menunjukkan satu gelangsar kelantangan. Keutamaan Bunyi dalam Tetapan Sistem masih membenarkan anda memilih peranti output dan melaraskan satu kelantangan induk. Tiada ciri tersembunyi, tiada pilihan lanjutan dan tiada API baharu yang mendedahkan volum setiap apl kepada pengguna.</p>

<h2>Apa yang macOS Tahoe telah diperbaiki untuk audio</h2>

<p>Walaupun kelantangan setiap apl masih tiada, Tahoe telah membawa beberapa penambahbaikan berkaitan audio:</p>

<ul>
  <li><strong>Kestabilan audio Bluetooth yang dipertingkatkan</strong> — lebih sedikit pemutusan sambungan dan isu penukaran codec dengan AirPods dan fon kepala pihak ketiga</li>
  <li><strong>Pemprosesan audio spatial yang lebih baik</strong> — penjejakan kepala yang dipertingkatkan dan pemaparan spatial yang lebih tepat untuk kandungan yang disokong</li>
  <li><strong>Prestasi Audio Teras</strong> — kependaman yang lebih rendah untuk aplikasi audio profesional dan pengeluaran muzik</li>
</ul>

<p>Tiada satu pun daripada ini menangani permintaan asas: "Izinkan saya menolak Spotify tanpa menjejaskan Zoom."</p>

<h2>Adakah Apple akan menambah pengadun kelantangan?</h2>

<p>Tiada petunjuk Apple merancang untuk menambah ciri ini. Ia tidak muncul dalam mana-mana macOS beta, sesi WWDC atau peta jalan yang diketahui. Falsafah reka bentuk audio Apple terus memihak kepada kesederhanaan — satu gelangsar untuk segala-galanya.</p>

<p>Ironinya ialah rangka kerja Audio Teras Apple sendiri menyokong sepenuhnya pengetuman audio setiap proses dan kawalan kelantangan. API Audio Tap yang diperkenalkan pada macOS 14 (Sonoma) menjadikannya lebih mudah bagi pembangun untuk membina alatan audio setiap apl. Apple membina infrastruktur — mereka hanya belum membina antara muka pengguna untuknya.</p>

<h2>Bagaimana untuk mendapatkan kawalan kelantangan setiap apl pada macOS Tahoe</h2>

<p>Memandangkan Apple tidak akan membinanya, apl pihak ketiga mengisi jurang. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ialah apl bar menu macOS asli yang memberi anda pengadun kelantangan — peluncur kelantangan bebas untuk setiap aplikasi yang sedang berjalan.</p>

<img src="/apps/sounddial.png" alt="SoundDial menyediakan kawalan kelantangan setiap apl pada macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial serasi sepenuhnya dengan macOS Tahoe dan menggunakan API Core Audio Tap moden Apple — tiada pemacu audio pihak ketiga atau sambungan kernel diperlukan. Ia berfungsi dengan bersih dengan model keselamatan macOS dan tidak mengganggu apl audio lain.</p>

<p>Apa yang anda dapat:</p>
<ul>
  <li><strong>Gelangsar kelantangan setiap apl</strong> — 0% hingga 200% untuk setiap apl</li>
  <li><strong>Membisukan setiap apl</strong> — satu klik untuk menyenyapkan mana-mana apl</li>
  <li><strong>Profil kelantangan</strong> — simpan konfigurasi dan tukar serta-merta</li>
  <li><strong>Mengelak secara automatik</strong> — audio latar belakang menurun secara automatik semasa panggilan</li>
  <li><strong>Rangsangan kelantangan</strong> — menguatkan apl senyap melebihi 100%</li>
  <li><strong>Memori kelantangan</strong> — mengingati kelantangan setiap apl antara dimulakan semula</li>
  <li><strong>Pintasan papan kekunci</strong> — togol pengadun atau bisukan semua daripada papan kekunci</li>
</ul>

<p>Pembelian sekali sahaja pada <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Tiada langganan. macOS 14.2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Cara Memainkan Muzik pada Pembesar Suara Semasa Menerima Panggilan pada Fon Kepala (Mac)",
    description:
      "Mahukan Spotify pada pembesar suara meja anda dan Zum dalam AirPods anda pada masa yang sama? macOS tidak menjadikan ini mudah — inilah yang sebenarnya berkesan.",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>Berikut ialah perkara yang munasabah yang mungkin anda mahu lakukan: mainkan muzik melalui pembesar suara meja anda semasa menerima panggilan Zoom melalui AirPods anda. Muzik memenuhi bilik, panggilan itu peribadi di telinga anda. Masuk akal.</p>

<p>macOS berkata tidak. Apabila anda memilih peranti output audio, <em>setiap</em> aplikasi menggunakannya. Tukar kepada AirPods untuk Zum dan Spotify juga bertukar kepada AirPods. Tukar kepada pembesar suara untuk Spotify dan Zoom juga pergi ke pembesar suara. Satu peranti output untuk segala-galanya. Tiada pengecualian.</p>

<h2>Mengapa macOS tidak boleh melakukan ini secara asli</h2>

<p>macOS menghalakan semua audio melalui satu peranti output yang dipilih. Anda memilih "Pembesar Suara MacBook Pro" atau "AirPods Pro" dalam Tetapan Sistem → Output Bunyi → dan setiap apl menghantar audio ke peranti tersebut. Tiada penghalaan audio setiap apl terbina dalam.</p>

<p>Reka bentuk ini masuk akal untuk kesederhanaan — kebanyakan orang mahu semua audio mereka datang dari tempat yang sama. Tetapi ia berantakan sebaik sahaja anda mahukan apl yang berbeza pada output yang berbeza.</p>

<h2>Penyelesaian peranti agregat</h2>

<p>Persediaan MIDI Audio macOS (terdapat dalam Aplikasi → Utiliti) membolehkan anda mencipta "Peranti Agregat" yang menggabungkan berbilang output menjadi satu. Walau bagaimanapun, peranti agregat menghantar <em>audio yang sama</em> kepada semua output gabungan — ia tidak membenarkan anda memilih apl yang pergi ke output yang mana. Ia direka untuk persediaan berbilang pembesar suara, bukan penghalaan setiap apl.</p>

<h2>Penyelesaian peranti berbilang output</h2>

<p>Sama seperti peranti agregat, anda boleh mencipta "Peranti Berbilang Output" dalam Persediaan MIDI Audio. Ini menghantar audio yang sama kepada berbilang output secara serentak. Sekali lagi, audio yang sama di mana-mana sahaja — anda tidak boleh menghalakan Spotify ke pembesar suara dan Zum ke fon kepala dengan cara ini.</p>

<h2>Perkara yang sebenarnya berfungsi: apl penghalaan audio setiap apl</h2>

<p>Untuk benar-benar menghalakan apl yang berbeza ke peranti output yang berbeza, anda memerlukan apl penghalaan audio pihak ketiga yang memintas audio setiap apl dan menghantarnya ke output yang anda tentukan. Apl seperti SoundSource (daripada Rogue Amoeba) menyokong ini — ia membenarkan anda menetapkan peranti output tertentu kepada apl individu.</p>

<h2>Pendekatan yang lebih mudah: pemisahan berasaskan isipadu</h2>

<p>Jika matlamat utama anda adalah untuk mendengar panggilan anda dengan jelas melalui muzik anda (dan bukannya menghalakannya ke peranti yang berbeza secara fizikal), kawalan kelantangan setiap apl menyelesaikan masalah dengan lebih mudah.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberikan setiap apl peluncur kelantangannya sendiri. Semasa panggilan, anda boleh:</p>

<ul>
  <li>Tetapkan Zoom/Pasukan/FaceTime kepada <strong>100%</strong></li>
  <li>Turunkan Spotify kepada <strong>20%</strong></li>
  <li>Bisukan segala-galanya</li>
</ul>

<p>Panggilan anda sangat jelas. Muzik ialah latar belakang yang halus. Tiada penukaran peranti diperlukan.</p>

<img src="/apps/sounddial.png" alt="SoundDial menunjukkan Zum pada kelantangan penuh dan Spotify diturunkan semasa panggilan pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Lebih baik lagi: SoundDial <strong>itik automatik</strong> melakukan ini secara automatik. Apabila anda menyertai panggilan, ia mengesan mikrofon anda diaktifkan dan menurunkan semua apl latar belakang ke tahap yang anda konfigurasikan (lalai 30%). Apabila panggilan tamat, semuanya kembali normal. Tiada pelarasan gelangsar manual diperlukan.</p>

<p>Bagi kebanyakan orang, ini menyelesaikan masalah sebenar — "Saya tidak dapat mendengar panggilan saya melalui muzik saya" — tanpa kerumitan menghalakan apl yang berbeza ke peranti fizikal yang berbeza.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac Kelantangan Terus Berubah Dengan Sendirinya: Cara Membetulkannya",
    description:
      "Kelantangan Mac anda melonjak ke atas, turun atau ditetapkan semula secara rawak ke tahap yang berbeza. Berikut ialah setiap sebab yang diketahui dan cara menghentikannya.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>Anda menetapkan kelantangan Mac anda ke tahap yang selesa. Anda memalingkan muka. Apabila anda kembali, ia berbeza. Lebih kuat. Lebih senyap. Tetapkan semula kepada maksimum. Ia terus berlaku, dan anda tidak tahu mengapa.</p>

<p>Ini adalah salah satu isu audio Mac yang paling mengecewakan kerana ia terasa rawak. Tetapi ia hampir tidak pernah benar-benar rawak — sentiasa ada pencetus tertentu. Berikut ialah semua punca yang diketahui dan cara membetulkan setiap satu.</p>

<h2>1. Penyambungan semula peranti Bluetooth</h2>

<p>Ini adalah punca yang paling biasa. Apabila peranti Bluetooth (AirPods, pembesar suara, fon kepala) menyambung atau memutuskan sambungan, macOS menetapkan semula kelantangan kepada mana-mana tahap terakhir digunakan dengan peranti tersebut. Oleh itu, jika anda berada pada 30% pada pembesar suara anda dan AirPods anda bersambung secara automatik, kelantangan mungkin melonjak kepada 80% (tahap AirPods terakhir).</p>

<p><strong>Betulkan:</strong> macOS mengingati tahap kelantangan bagi setiap peranti output. Setiap kali anda bertukar, tetapkan di tempat yang anda mahukan. Lama kelamaan, tahap yang betul akan diingati untuk setiap peranti. Jika peranti Bluetooth menyambung secara automatik secara tidak dijangka, pergi ke Tetapan Sistem → Bluetooth dan alih keluar peranti yang anda tidak gunakan secara aktif.</p>

<h2>2. Output HDMI/DisplayPort</h2>

<p>Menyambungkan atau memutuskan sambungan paparan luaran melalui HDMI atau DisplayPort boleh menyebabkan perubahan kelantangan. Sesetengah paparan juga merupakan peranti output audio dan macOS bertukar kepada mereka secara automatik. Apabila paparan tidur atau terputus, macOS bertukar semula kepada pembesar suara dan boleh menetapkan semula kelantangan.</p>

<p><strong>Betulkan:</strong> Pergi ke Tetapan Sistem → Bunyi → Output dan semak sama ada macOS bertukar secara automatik ke pembesar suara paparan anda. Jika anda tidak mahu audio melalui paparan anda, pilih peranti output pilihan anda secara manual. Sesetengah paparan boleh melumpuhkan output audio mereka dalam tetapan OSD (paparan pada skrin) mereka sendiri.</p>

<h2>3. Apl menukar kelantangan</h2>

<p>Sesetengah apl melaraskan kelantangan sistem secara pengaturcaraan. Zum, sebagai contoh, mempunyai tetapan "Laraskan kelantangan mikrofon secara automatik" yang juga boleh menjejaskan kelantangan output. Apl muzik, apl podcast dan sesetengah permainan juga boleh melaraskan kelantangan apabila ia dilancarkan atau apabila peristiwa tertentu berlaku.</p>

<p><strong>Betulkan:</strong> Semak apl anda yang dibuka baru-baru ini untuk tetapan berkaitan audio. Dalam Zum: Tetapan → Audio → nyahtanda "Laraskan kelantangan mikrofon secara automatik." Dalam Spotify: semak sama ada normalisasi kelantangan menyebabkan perubahan kelantangan yang dirasakan (Tetapan → Main balik → Normalkan kelantangan).</p>

<h2>4. Papan Kekunci atau Bar Sentuh menekan secara tidak sengaja</h2>

<p>Jika anda mempunyai papan kekunci dengan kekunci kelantangan (setiap Mac papan kekunci), penekanan secara tidak sengaja — atau kekunci tersekat — boleh menukar kelantangan. Touch Bar pada model MacBook Pro yang lebih lama amat terdedah kepada perubahan kelantangan secara tidak sengaja daripada memberusnya.</p>

<p><strong>Betulkan:</strong> Semak sama ada kekunci kelantangan tersekat dengan memerhatikan penunjuk kelantangan sambil tidak menyentuh apa-apa. Untuk model Touch Bar, sesuaikan Touch Bar dalam Tetapan Sistem → Papan Kekunci → Tetapan Touch Bar untuk mengalih keluar gelangsar kelantangan atau mengalihkannya ke kedudukan yang kurang diakses.</p>

<h2>5. macOS tetapan semula daemon audio</h2>

<p>Selepas kitaran tidur/bangun, daemon audio macOS (coreaudiod) kadangkala dimulakan semula dan menetapkan semula kelantangan kepada tahap lalai atau cache sebelum ini. Ini ialah pepijat peringkat sistem yang muncul dalam pelbagai versi macOS.</p>

<p><strong>Betulkan:</strong> Jika kelantangan ditetapkan semula secara konsisten selepas bangun daripada tidur, cuba mulakan semula coreaudiod secara manual:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Jika isu berterusan merentas kemas kini macOS, ia mungkin diselesaikan dalam kemas kini akan datang. Sementara itu, menggunakan alat yang mengingati dan memulihkan tahap kelantangan setiap apl boleh mengimbangi.</p>

<h2>6. Tetapan kebolehcapaian</h2>

<p>Sesetengah ciri Kebolehcapaian boleh mengganggu audio. Semak Tetapan Sistem → Kebolehcapaian → Audio untuk sebarang tetapan yang tidak dijangka. Semak juga sama ada VoiceOver atau Kawalan Suis didayakan sebahagiannya — ini boleh menghasilkan tingkah laku kelantangan yang tidak dijangka.</p>

<h2>Kunci volum setiap apl anda dengan SoundDial</h2>

<p>Walaupun anda tidak dapat menghalang macOS daripada menukar kelantangan sistem, anda boleh melindungi anda <em>setiap aplikasi</em> baki kelantangan. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Mengingati tahap kelantangan setiap apl secara bebas. Apabila app dimulakan semula atau apabila Mac anda bangun daripada tidur, SoundDial memulihkan setiap app kepada kelantangan yang disimpan.</p>

<img src="/apps/sounddial.png" alt="SoundDial mengingati tahap volum setiap apl merentas permulaan semula pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ini bermakna walaupun volum sistem berubah, baki peringkat apl anda kekal konsisten:</p>
<ul>
  <li>Spotify kekal pada 40% tanpa mengira perubahan kelantangan sistem</li>
  <li>Zum kekal pada 100% walaupun selepas menyambungkan semula Bluetooth</li>
  <li>Kendur kekal disenyapkan walaupun selepas memulakan semula</li>
</ul>

<p>Digabungkan dengan <strong>Profil kelantangan</strong>, anda boleh memulihkan konfigurasi volum pilihan anda dengan serta-merta untuk sebarang situasi — satu klik untuk kembali ke tempat yang anda mahukan, tanpa mengira apa yang macOS lakukan semasa anda tidak mencari.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Apl Pengadun Kelantangan Terbaik untuk Mac pada 2026",
    description:
      "Perbandingan tanpa omong kosong bagi setiap apl Mac yang memberi anda kawalan kelantangan setiap apl. Ciri-ciri, harga, dan mana yang sebenarnya berbaloi untuk digunakan.",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS tidak mempunyai pengadun kelantangan terbina dalam. Jika anda ingin mengawal kelantangan apl individu — tolak Spotify tanpa menjejaskan Zoom, bisukan Slack tanpa meredamkan segala-galanya — anda memerlukan apl pihak ketiga.</p>

<p>Terdapat beberapa pilihan. Panduan ini membandingkan yang paling ketara berdasarkan ciri, harga, keserasian dan kebolehgunaan sebenar. Tiada pautan ahli gabungan, tiada pilihan yang ditaja.</p>

<h2>Apa yang perlu anda cari</h2>

<p>Sebelum membandingkan apl, berikut ialah perkara penting dalam pengadun kelantangan Mac:</p>

<ul>
  <li><strong>Gelangsar kelantangan setiap apl</strong> — kawalan bebas untuk setiap apl yang sedang berjalan</li>
  <li><strong>Julat kelantangan</strong> — bolehkah anda turun di bawah 100% DAN melebihi 100% (rangsangan)?</li>
  <li><strong>Membisukan setiap apl</strong> — senyapkan satu apl tanpa menyentuh kedudukan kelantangannya</li>
  <li><strong>Profil</strong> — simpan dan tukar antara konfigurasi kelantangan</li>
  <li><strong>Mengelak secara automatik</strong> — menurunkan muzik secara automatik semasa panggilan</li>
  <li><strong>Penyepaduan bar menu</strong> — akses pantas tanpa menukar apl</li>
  <li><strong>macOS keserasian</strong> — berfungsi pada versi macOS terkini</li>
  <li><strong>Model harga</strong> — pembelian sekali lwn langganan</li>
</ul>

<h2>Pilihan</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ialah apl bar menu macOS asli yang memfokuskan pada melakukan satu perkara dengan baik: kawalan kelantangan setiap apl.</p>

<ul>
  <li><strong>Volum setiap apl:</strong> Ya, 0% hingga 200%</li>
  <li><strong>Membisukan setiap apl:</strong> Ya, satu klik</li>
  <li><strong>Rangsangan kelantangan:</strong> Ya, sehingga 200%</li>
  <li><strong>Profil:</strong> Ya, dengan nama dan ikon tersuai</li>
  <li><strong>Bebek automatik:</strong> Ya, dengan tahap itik yang boleh dikonfigurasikan</li>
  <li><strong>Pintasan papan kekunci:</strong> Ya (togol pengadun, bisukan semua)</li>
  <li><strong>Penukaran peranti output:</strong> Ya, daripada panel yang sama</li>
  <li><strong>Memori kelantangan:</strong> Ya, mengingati kelantangan setiap apl antara dimulakan semula</li>
  <li><strong>Harga:</strong> €14.99 pembelian sekali sahaja (tiada langganan) — kurang daripada separuh harga SoundSource</li>
  <li><strong>Memerlukan:</strong> macOS 14.2+</li>
  <li><strong>Boleh didapati di:</strong> Mac App Store (disemak oleh Apple, kotak pasir, tiada pemacu sistem)</li>
</ul>

<p>SoundDial menggunakan API Ketuk Audio Teras moden Apple untuk kawalan audio setiap proses yang bersih. Ia ringan, berjalan sepenuhnya dalam bar menu dan tidak memerlukan persediaan yang rumit. Pada €14.99, ia jauh lebih murah daripada SoundSource ($39) sambil menyertakan ciri yang tidak dimiliki SoundSource — profil kelantangan dan auto-ducking. Dan kerana ia berada di Mac App Store, ia disemak oleh Apple, kotak pasir dan dipasang dengan bersih tanpa memuat turun DMG atau memasang pemacu audio sistem.</p>

<img src="/apps/sounddial.png" alt="SoundDial pengadun kelantangan setiap apl yang menunjukkan peluncur kelantangan apl individu pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Sumber Bunyi (Amoeba Penyangak)</h3>

<p>SoundSource ialah salah satu utiliti audio Mac tertua dan paling mantap. Ia berkuasa dan kaya dengan ciri, menyasarkan pengguna kuasa dan profesional audio.</p>

<ul>
  <li><strong>Volum setiap apl:</strong> Ya</li>
  <li><strong>Membisukan setiap apl:</strong> Ya</li>
  <li><strong>Rangsangan kelantangan:</strong> Ya</li>
  <li><strong>EQ setiap apl:</strong> Ya (sokongan pemalam terbina dalam dan AU)</li>
  <li><strong>Penghalaan output setiap apl:</strong> Ya (hantar apl yang berbeza kepada pembesar suara yang berbeza)</li>
  <li><strong>Profil:</strong> Tiada sistem profil terbina dalam</li>
  <li><strong>Bebek automatik:</strong> Tidak</li>
  <li><strong>Harga:</strong> $39 USD (naik taraf utama sekali sahaja mungkin memerlukan pembelian tambahan)</li>
  <li><strong>Memerlukan:</strong> macOS 12+ (memasang pemacu audio sistem)</li>
</ul>

<p>SoundSource ialah pilihan yang paling berkuasa jika anda memerlukan EQ setiap apl dan rantaian kesan audio. Ia memasang pemacu audio peringkat sistem (ACE) untuk memintas audio, yang menjadikannya sangat berkebolehan tetapi juga lebih invasif. Titik harga $39 lebih tinggi daripada kebanyakan alternatif, dan tiada sistem auto-ducking atau profil.</p>

<h3>Muzik Latar Belakang (Percuma, Sumber Terbuka)</h3>

<p>Muzik Latar Belakang ialah apl sumber terbuka percuma yang menyediakan kawalan kelantangan asas setiap apl. Ia adalah pilihan popular kerana ia percuma.</p>

<ul>
  <li><strong>Volum setiap apl:</strong> Ya</li>
  <li><strong>Membisukan setiap apl:</strong> Ya</li>
  <li><strong>Rangsangan kelantangan:</strong> Tidak (0-100% sahaja)</li>
  <li><strong>Jeda muzik secara automatik:</strong> Ya (menjeda muzik apabila apl lain memainkan audio)</li>
  <li><strong>Profil:</strong> Tidak</li>
  <li><strong>Bebek automatik:</strong> Tidak (jeda automatik berbeza daripada itik automatik)</li>
  <li><strong>Harga:</strong> Percuma</li>
  <li><strong>Memerlukan:</strong> macOS 10.13+ (memasang peranti audio maya)</li>
</ul>

<p>Muzik Latar Belakang ialah pilihan percuma yang kukuh untuk kelantangan asas setiap apl. Walau bagaimanapun, ia belum dikemas kini secara konsisten untuk versi macOS yang lebih baharu. Pengguna melaporkan isu pada macOS Sequoia dan Tahoe — gangguan audio, peranti audio maya gagal dipasang atau apl tidak mengesan sesetengah aplikasi. Ia juga tidak boleh meningkatkan volum melebihi 100%, tidak mempunyai profil dan tiada auto-ducking.</p>

<h3>eqMac</h3>

<p>eqMac ialah terutamanya apl penyamaan yang turut termasuk beberapa keupayaan pencampuran kelantangan.</p>

<ul>
  <li><strong>Volum setiap apl:</strong> Terhad (tertumpu pada EQ, bukan pencampuran)</li>
  <li><strong>EQ seluruh sistem:</strong> Ya, dengan pelbagai pilihan jalur</li>
  <li><strong>Rangsangan kelantangan:</strong> Ya</li>
  <li><strong>Profil:</strong> Pratetap EQ (bukan profil kelantangan)</li>
  <li><strong>Bebek automatik:</strong> Tidak</li>
  <li><strong>Harga:</strong> Peringkat percuma + langganan Pro</li>
  <li><strong>Memerlukan:</strong> macOS 10.14+</li>
</ul>

<p>eqMac ialah pilihan yang lebih baik jika keperluan utama anda ialah penyamaan seluruh sistem (rangsangan bass, pelarasan treble, dsb.) dan bukannya kawalan kelantangan setiap apl. Keupayaan pencampuran kelantangannya adalah sekunder kepada ciri EQnya.</p>

<h2>Jadual perbandingan pantas</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Ciri-ciri</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Sumber Bunyi</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Muzik latar belakang</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Kelantangan setiap apl</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Peningkatan kelantangan (200%)</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Profil kelantangan</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Mengelak secara automatik</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">EQ setiap aplikasi</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Penghalaan output setiap apl</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pintasan papan kekunci</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pemacu sistem diperlukan</td>
  <td style="text-align:center;padding:10px 12px;">Tidak</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
  <td style="text-align:center;padding:10px 12px;">Ya</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Harga</td>
  <td style="text-align:center;padding:10px 12px;">Sekali sahaja</td>
  <td style="text-align:center;padding:10px 12px;">$ 39</td>
  <td style="text-align:center;padding:10px 12px;">Percuma</td>
</tr>
</tbody>
</table>

<h2>Mana satu yang patut anda pilih?</h2>

<ul>
  <li><strong>Jika anda mahukan kawalan kelantangan, profil dan auto-ducking setiap apl:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — pengadun kelantangan yang paling lengkap untuk harga, dengan ciri-ciri (profil, auto-ducking) yang kekurangan alternatif yang lebih mahal.</li>
  <li><strong>Jika anda memerlukan EQ setiap apl dan penghalaan audio:</strong> SoundSource — pilihan paling berkuasa, ditujukan kepada profesional audio yang memerlukan rantaian kesan dan penghalaan output setiap apl.</li>
  <li><strong>Jika anda mahukan sesuatu yang percuma dan asas:</strong> Muzik Latar Belakang — baik untuk kelantangan setiap apl yang mudah, tetapi boleh menghadapi masalah keserasian pada versi macOS yang lebih baharu dan tidak mempunyai rangsangan/profil/ducking.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube Terlalu Senyap dalam Safari atau Chrome pada Mac? Betulkan Serta-merta",
    description:
      "Sesetengah video YouTube hampir tidak boleh didengar walaupun pada kelantangan maksimum. Inilah sebabnya audio penyemak imbas selalunya lebih senyap daripada apl lain — dan cara meningkatkannya melepasi 100% pada Mac.",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>Anda mengklik pada video YouTube. Pencipta sedang bercakap, tetapi anda hampir tidak dapat mendengarnya. Kelantangan sistem adalah pada maksimum. Kelantangan pemain YouTube adalah pada maksimum. Anda bersandar lebih dekat dengan pembesar suara anda. Masih terlalu senyap. Anda membuka Spotify — muzik meletup pada kelantangan penuh. Jadi ia bukan pembesar suara anda. Ia YouTube. Atau lebih tepat lagi, ia adalah video.</p>

<p>Ini sangat biasa, dan ia bukan pepijat. Sesetengah video YouTube hanya dikuasai pada kelantangan yang lebih rendah daripada yang lain, dan macOS tidak memberi anda cara untuk meningkatkan audio penyemak imbas secara selektif.</p>

<h2>Mengapa sesetengah video YouTube begitu senyap</h2>

<h3>Video itu dirakam pada kelantangan rendah</h3>
<p>Tidak setiap pencipta mempunyai peralatan audio profesional. Video yang dirakam dengan mikrofon komputer riba dari seberang bilik akan jauh lebih senyap daripada video yang dirakam dengan mikrofon pemeluwap yang betul. YouTube menormalkan kelantangan pada tahap tertentu ("normalisasi kenyaringan" mereka menyasarkan -14 LUFS), tetapi ini tidak mengimbangi sepenuhnya audio sumber yang sangat senyap.</p>

<h3>Normalisasi kelantangan YouTube</h3>
<p>YouTube melaraskan kelantangan video secara automatik supaya video yang kuat dan senyap dimainkan pada tahap yang lebih kurang sama. Untuk video yang kuat, ini bermakna menolaknya. Untuk video senyap, ini bermakna menaikkannya — tetapi hanya ke satu tahap. Jika audio sumber sangat senyap, normalisasi hanya boleh melakukan banyak perkara tanpa memperkenalkan bunyi bising.</p>

<h3>Audio penyemak imbas ialah warganegara kelas kedua di macOS</h3>
<p>Safari dan Chrome mengendalikan audio secara berbeza daripada apl media khusus. Mereka mengeluarkan melalui enjin audio penyemak imbas, yang mempunyai siling kelantangannya sendiri. Tiada cara untuk meningkatkan audio tab penyemak imbas dari dalam macOS. Penyemak imbas ialah satu apl dengan satu tahap kelantangan — walaupun anda mempunyai sepuluh tab memainkan audio pada tahap yang berbeza.</p>

<h2>Pembetulan pantas untuk dicuba</h2>

<h3>Semak kelantangan pemain YouTube</h3>
<p>Tuding pada ikon pembesar suara pada pemain YouTube dan pastikan gelangsar berada pada maksimum. Sangat mudah untuk menyeret ini ke bawah secara tidak sengaja, dan ia ditetapkan semula secara bebas daripada kelantangan sistem anda.</p>

<h3>Lumpuhkan normalisasi kenyaringan YouTube</h3>
<p>YouTube tidak menawarkan togol yang menghadap pengguna untuk normalisasi kenyaringan. Walau bagaimanapun, sesetengah sambungan penyemak imbas boleh memintasnya. Cari kedai sambungan penyemak imbas anda untuk "Penormalan kelantangan YouTube" atau "Penambah audio YouTube."</p>

<h3>Cuba penyemak imbas lain</h3>
<p>Safari dan Chrome mengendalikan audio secara berbeza. Jika video terlalu senyap dalam satu penyemak imbas, cuba yang lain. Chrome khususnya mengendalikan audio melalui proses yang berasingan ("pemapar"), yang kadangkala boleh mengakibatkan output yang lebih rendah.</p>

<h2>Penyelesaian sebenar: tingkatkan kelantangan penyemak imbas melebihi 100%</h2>

<p>Masalah asas ialah macOS tidak membenarkan anda meningkatkan volum apl tertentu melebihi 100%. Penyemak imbas anda dimaksimumkan, tetapi "maksimum" tidak cukup kuat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menyelesaikannya dengan memberikan setiap apl — termasuk Safari dan Chrome — gelangsar kelantangan bebas yang bermula daripada 0% kepada <strong>200%</strong>. Jika video YouTube terlalu senyap, seret gelangsar penyemak imbas anda kepada 150% atau 180%. Audio dikuatkan dalam masa nyata tanpa menjejaskan mana-mana apl lain.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan penyemak imbas Safari kepada 180% untuk video YouTube yang senyap pada Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ini amat berguna kerana:</p>
<ul>
  <li><strong>Ia serta-merta.</strong> Klik ikon bar menu, seret gelangsar. Anda tidak perlu memasang sambungan penyemak imbas atau menukar sebarang tetapan.</li>
  <li><strong>Ia setiap aplikasi.</strong> Menggalakkan Chrome tidak menjadikan Spotify lebih kuat. Setiap apl kekal bebas.</li>
  <li><strong>Ia berfungsi dengan mana-mana penyemak imbas.</strong> Safari, Chrome, Firefox, Arc, Brave — jika ia adalah apl pada Mac anda, SoundDial boleh mengawalnya.</li>
  <li><strong>Ia meningkat kepada 200%.</strong> Dua kali ganda siling isipadu biasa. Malah video yang paling senyap menjadi kedengaran.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac pemberitahuan berbunyi terlalu kuat dalam fon kepala? Inilah Pembaikan",
    description:
      "Ping kendur dan amaran macOS sangat kuat dalam fon kepala anda semasa muzik anda baik-baik saja. Inilah sebabnya kelantangan pemberitahuan berbeza — dan cara menjinakkannya.",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>Anda memakai fon kepala, mendengar muzik pada kelantangan 40% yang selesa. Pemberitahuan Slack menyala. <em>DING.</em> Ia sangat kuat berbanding muzik anda. Telinga anda berdering. Anda merobek fon kepala anda.</p>

<p>Ini berlaku kerana macOS tidak membenarkan anda mengawal kelantangan pemberitahuan berbanding media secara berasingan. Muzik anda mungkin berada pada tahap yang selesa, tetapi bunyi amaran — Ping kendur, pemberitahuan Mel, peringatan Kalendar, bunyi sistem macOS — meletup pada intensiti penuh berbanding dengan kelantangan sistem anda.</p>

<h2>Sebab pemberitahuan berbunyi lebih kuat daripada muzik</h2>

<p>Bunyi pemberitahuan ialah letupan audio pendek dan tajam yang direka untuk menarik perhatian anda. Mereka mempunyai isipadu puncak yang tinggi mengikut reka bentuk. Muzik, sebaliknya, mempunyai julat dinamik yang luas — petikan yang lebih senyap, petikan yang lebih kuat dan tahap penguasaan keseluruhan yang bertujuan untuk mendengar yang berterusan.</p>

<p>Apabila kelantangan sistem anda berada pada 40%, muzik anda berada pada 40% daripada tahap penguasaannya — yang mungkin merupakan 60-70 dB yang selesa dalam fon kepala anda. Tetapi ding pemberitahuan pada kelantangan sistem 40% mungkin masih mencecah 80+ dB kerana fail bunyi pemberitahuan itu sendiri dikuasai pada tahap puncak yang jauh lebih tinggi. Jumlah sistem menskalakan kedua-duanya sama mengikut peratusan, tetapi tahap permulaan mereka sangat berbeza.</p>

<p>Dalam fon kepala, ini lebih teruk. Bunyi masuk terus ke saluran telinga anda tanpa ruang untuk hilang, jadi perbezaan kelantangan yang dirasakan antara muzik senyap dan ping pemberitahuan tajam diperkuatkan.</p>

<h2>Cara terbina dalam untuk mengurangkan volum pemberitahuan</h2>

<h3>Turunkan kelantangan amaran</h3>
<p>macOS mempunyai gelangsar "Kelantangan amaran" yang berasingan yang terkubur dalam tetapan. Pergi ke <strong>Tetapan → Bunyi Sistem</strong> dan cari <strong>Kelantangan amaran</strong> gelangsar. Ini mengawal kelantangan bunyi dan makluman sistem secara berasingan daripada kelantangan utama.</p>
<p><strong>Had:</strong> Ini hanya menjejaskan makluman sistem macOS (seperti bunyi bip ralat dan bunyi Sampah). Ia tidak menjejaskan bunyi pemberitahuan daripada apl seperti Slack, Discord atau Teams, yang memainkan audio mereka sendiri melalui enjin audio mereka sendiri.</p>

<h3>Lumpuhkan bunyi pemberitahuan bagi setiap apl</h3>
<p>Pergi ke <strong>Tetapan Sistem → Pemberitahuan</strong>, pilih apl yang terlalu kuat dan matikan "Mainkan bunyi untuk pemberitahuan". Ini menyenyapkan pemberitahuan apl itu sepenuhnya.</p>
<p><strong>Had:</strong> Ia semua atau tiada. Anda tidak boleh membuat pemberitahuan Slack <em>lebih senyap</em> — hanya dihidupkan sepenuhnya atau dimatikan sepenuhnya. Dan anda kehilangan isyarat audio yang memberitahu anda sesuatu berlaku tanpa melihat skrin anda.</p>

<h3>Gunakan mod Fokus</h3>
<p>Mod fokus (Jangan Ganggu, Kerja, dsb.) boleh menyekat bunyi pemberitahuan daripada semua apl atau apl yang dipilih. Ini berfungsi semasa sesi fokus mendalam tetapi tidak praktikal sepanjang hari — anda akan terlepas pemberitahuan penting.</p>

<h2>Penyelesaian sebenar: kawal kelantangan apl pemberitahuan secara bebas</h2>

<p>Apa yang anda mahukan sebenarnya adalah mudah: jadikan Slack lebih senyap tanpa menjadikan muzik anda lebih senyap. Kurangkan volum apl pemberitahuan kepada 15% sambil mengekalkan Spotify pada 50%. macOS tidak membenarkan anda melakukan ini.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> melakukan. Ia memberikan setiap apl peluncur kelantangannya sendiri, jadi anda boleh menetapkan apl berat pemberitahuan seperti Slack, Mail dan Kalendar kepada kelantangan yang jauh lebih rendah sambil mengekalkan apl media anda pada tahap yang selesa.</p>

<img src="/apps/sounddial.png" alt="SoundDial menunjukkan Slack pada kelantangan rendah dan Spotify pada kelantangan biasa — kawalan pemberitahuan bebas pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Persediaan mesra fon kepala biasa</h3>
<ul>
  <li><strong>Spotify / Muzik</strong> — 50% (tahap mendengar yang selesa)</li>
  <li><strong>Kendur</strong> — 15% (ketara tetapi tidak mengejutkan)</li>
  <li><strong>Mel</strong> — 10% (ping halus, tidak akan mengejutkan anda)</li>
  <li><strong>Kalendar</strong> — 20% (cukup untuk diperhatikan, tidak menyakitkan)</li>
  <li><strong>Zum / FaceTime</strong> — 90% (audio panggilan jelas)</li>
  <li><strong>Pelayar</strong> — 40% (sepadan dengan tahap muzik untuk main balik video)</li>
</ul>

<p>Simpan ini sebagai profil "Fon Kepala" dalam SoundDial dan gunakannya dengan satu klik setiap kali anda memasangkannya. Buat profil "Penceramah" yang berasingan dengan nisbah yang berbeza untuk semasa anda bekerja di meja anda.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Cara Menghentikan Zum daripada Menurunkan Muzik Anda pada Mac",
    description:
      "Setiap kali anda menyertai panggilan Zum, muzik anda jatuh atau hilang. Inilah sebabnya ia berlaku dan cara mengawal perkara yang menjadi lebih senyap semasa panggilan — mengikut syarat anda.",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>Anda menyertai panggilan Zoom. Spotify dimainkan pada kelantangan yang selesa. Panggilan itu bersambung dan — muzik anda hilang atau jatuh kepada hampir tiada. Anda tidak menyentuh apa-apa. Zum (atau macOS) memutuskan untuk menurunkan muzik anda untuk anda, tanpa bertanya.</p>

<p>Ini membuatkan orang gila kerana ia tidak kelihatan dan automatik. Anda tidak membisukan apa-apa. Anda tidak melaraskan gelangsar. Sesuatu dalam sistem memutuskan muzik anda harus lebih senyap, dan anda tidak mempunyai cara yang jelas untuk mengawalnya.</p>

<p>Inilah yang sebenarnya berlaku dan bagaimana untuk mengambil semula kawalan.</p>

<h2>Sebab muzik anda menjadi lebih senyap semasa panggilan Zoom</h2>

<p>Terdapat dua kemungkinan punca:</p>

<h3>1. Ducking audio terbina dalam Zum</h3>
<p>Zum mempunyai pemprosesan audionya sendiri yang boleh menjejaskan audio lain pada sistem anda. Dalam sesetengah konfigurasi, Zum mengurangkan audio sistem apabila ia mengaktifkan mikrofon anda, jadi audio panggilan lebih jelas. Ini tidak selalu jelas dalam tetapan Zoom.</p>

<p>Semak Zum → Tetapan → Audio:</p>
<ul>
  <li>Cari sebarang tetapan "Laraskan kelantangan mikrofon secara automatik" dan cuba lumpuhkannya</li>
  <li>Semak "Tekan bunyi latar belakang" — ini memproses audio dan boleh menjejaskan kelantangan yang dirasakan</li>
  <li>Pastikan "Gunakan peranti audio berasingan untuk tafsiran serentak" dinyahtanda melainkan anda memerlukannya</li>
</ul>

<h3>2. macOS penukaran codec</h3>
<p>Apabila Zum mengaktifkan mikrofon anda (terutamanya dengan fon kepala Bluetooth seperti AirPods), macOS bertukar daripada codec audio AAC berkualiti tinggi kepada codec SCO berkualiti rendah. Perubahan codec ini selalunya mengurangkan kelantangan dan kualiti audio keseluruhan. Ia bukan salah Zoom secara khusus — ia berlaku dengan mana-mana apl yang menggunakan mikrofon melalui Bluetooth.</p>

<p>Jika anda menggunakan AirPods atau fon kepala Bluetooth lain dan kelantangan menurun apabila panggilan bermula, ini mungkin puncanya.</p>

<h2>Pembetulan terbina dalam</h2>

<h3>Gunakan fon kepala berwayar</h3>
<p>Isu penukaran codec Bluetooth hilang sepenuhnya dengan fon kepala berwayar. Penyesuai fon kepala USB-C atau alat dengar dengan mikrofon terbina dalam mengelakkan suis AAC→SCO sepenuhnya. Kualiti audio kekal konsisten sebelum, semasa dan selepas panggilan.</p>

<h3>Gunakan mikrofon yang berasingan</h3>
<p>Jika anda menggunakan mikrofon terbina dalam Mac anda (atau mikrofon USB luaran) dan bukannya mikrofon AirPods anda, macOS tidak perlu menukar codec Bluetooth. Tetapkan peranti input anda kepada mikrofon terbina dalam dalam Tetapan Sistem → Bunyi → Input, sambil mengekalkan AirPods sebagai output anda. Dengan cara ini AirPods kekal dalam mod AAC dan kelantangan tidak terjejas.</p>

<h3>Laraskan tetapan audio Zum</h3>
<p>Dalam Zum → Tetapan → Audio, bereksperimen dengan melumpuhkan pelarasan mikrofon automatik dan penindasan hingar latar belakang. Ciri ini boleh mengganggu tahap audio apl lain.</p>

<h2>Penyelesaian sebenar: auto-ducking mengikut syarat anda</h2>

<p>Masalah asasnya ialah anda tidak mempunyai kawalan ke atas <em>berapa banyak</em> muzik anda diturunkan semasa panggilan. Sistem membuat keputusan itu untuk anda, dan ia biasanya terlalu agresif — muzik turun kepada hampir sifar dan bukannya tahap latar belakang yang selesa.</p>

<p>Apa yang anda mahukan sebenarnya ialah itik automatik yang boleh dikonfigurasikan: "apabila saya dalam panggilan, turunkan muzik saya kepada 25% — bukan sifar, bukan 50%, tepat 25%."</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi anda perkara ini. Ciri auto-duckingnya memantau mikrofon anda dan melaraskan audio latar belakang secara automatik apabila panggilan bermula — tetapi <strong>anda mengawal tahap itik</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial tetapan auto-ducking — pengurangan kelantangan boleh dikonfigurasikan semasa panggilan Zum pada Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Bagaimana ia berfungsi</h3>
<ol>
  <li>Anda menetapkan tahap itik pilihan anda (10% hingga 80%)</li>
  <li>Anda menyertai panggilan Zoom — mikrofon anda diaktifkan</li>
  <li>SoundDial mengesan panggilan dan menurunkan apl latar belakang ke tahap yang dikonfigurasikan anda</li>
  <li>Audio panggilan anda kekal pada kelantangan penuh</li>
  <li>Anda menutup telefon — semua apl kembali kepada kelantangan sebelumnya</li>
</ol>

<p>Perbezaan daripada pendekatan Zoom/macOS:</p>
<ul>
  <li><strong>Anda memilih tahap.</strong> 30% ialah lalai yang baik — muzik boleh didengar tetapi tidak mengganggu. Anda boleh melaraskan mana-mana sahaja dari 10% (hampir senyap) hingga 80% (hampir tidak dikurangkan).</li>
  <li><strong>Ia memulihkan dengan sempurna.</strong> Apabila panggilan tamat, setiap apl kembali ke tempat ia berada.</li>
  <li><strong>Ia berfungsi dengan semua apl komunikasi.</strong> Zum, Pasukan, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Anda boleh melumpuhkannya.</strong> Jika anda ingin mengurus kelantangan secara manual untuk panggilan tertentu, hanya matikan auto-ducking dalam tetapan SoundDial.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Kelantangan AirPods Terlalu Rendah pada Mac? Setiap Pembetulan Dijelaskan",
    description:
      "AirPods berbunyi senyap pada Mac anda walaupun pada kelantangan penuh? Berikut ialah semua punca — daripada had keselamatan fon kepala kepada keanehan Bluetooth — dan cara membetulkannya.",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>AirPods anda berfungsi dengan baik pada iPhone anda. Mereka sangat kuat. Tetapi pasangkannya ke dalam Mac anda - tanpa wayar, jelas - dan tiba-tiba semuanya terlalu senyap. Kelantangan sistem adalah pada maksimum. Spotify berada pada maksimum. AirPods hanya... tidak cukup kuat.</p>

<p>Ini adalah salah satu aduan audio yang paling biasa daripada pengguna Mac dengan AirPods. Berita baiknya: ia hampir selalu boleh diperbaiki. Berita buruk: terdapat kira-kira enam perkara berbeza yang boleh menyebabkannya, dan anda mungkin perlu menyemak kesemuanya.</p>

<h2>1. Keselamatan Fon Kepala mengehadkan kelantangan anda</h2>

<p>Ini adalah punca yang paling biasa. macOS mempunyai ciri terbina dalam yang mengehadkan kelantangan fon kepala untuk melindungi pendengaran anda.</p>

<p>Pergi ke <strong>Tetapan Sistem → Keselamatan Bunyi → Fon Kepala</strong>.</p>

<p>Jika "Kurangkan Audio Kuat" didayakan, macOS secara aktif mengehadkan kekuatanmu AirPods anda. Ia mengukur pendedahan bunyi dari semasa ke semasa dan mengurangkan kelantangan jika ia fikir anda telah mendengar terlalu kuat terlalu lama.</p>

<p><strong>Betulkan:</strong> Lumpuhkan "Kurangkan Audio Kuat" sepenuhnya, atau naikkan ambang desibel ke tahap yang lebih tinggi. Anda akan segera melihat lebih banyak ruang kepala kelantangan.</p>

<h2>2. Kelantangan Bluetooth tidak segerak</h2>

<p>Audio Bluetooth mempunyai dua kawalan kelantangan berasingan: satu di bahagian Mac dan satu di bahagian AirPods. Ini sepatutnya disegerakkan, tetapi kadangkala ia tidak segerak — Mac menunjukkan 100% tetapi AirPods sebenarnya menerima isyarat kelantangan yang lebih rendah.</p>

<p><strong>Betulkan:</strong> Putuskan sambungan AirPods anda (Tetapan Sistem → Bluetooth → klik "i" di sebelah AirPods anda → Putuskan sambungan), tunggu lima saat, kemudian sambungkan semula. Ini menetapkan semula penyegerakan kelantangan. Juga cuba masukkan semula AirPods ke dalam bekas mereka, tutup penutupnya, tunggu sepuluh saat, kemudian keluarkannya semula.</p>

<h2>3. Codec audio bertukar kepada kualiti yang lebih rendah</h2>

<p>Apabila anda menggunakan mikrofon AirPods anda (untuk panggilan, Siri atau imlak), macOS bertukar daripada codec AAC berkualiti tinggi kepada codec SCO berkualiti rendah. SCO direka untuk panggilan telefon — ia mengurangkan kualiti audio dan juga boleh menjejaskan kelantangan yang dirasakan.</p>

<p><strong>Betulkan:</strong> Jika anda tidak dalam panggilan tetapi audio kedengaran senyap dan berkualiti rendah, putuskan sambungan dan sambungkan semula AirPods anda. macOS harus bertukar semula kepada codec AAC untuk main balik muzik. Jika anda sedang dalam panggilan, ini adalah tingkah laku yang dijangkakan — codec akan bertukar semula secara automatik apabila panggilan tamat.</p>

<h2>4. Satu AirPod lebih senyap daripada yang lain</h2>

<p>Jika kelantangan terasa rendah kerana satu AirPod kelihatan lebih senyap, masalahnya mungkin fizikal — tahi telinga atau serpihan menghalang mesh pembesar suara.</p>

<p><strong>Betulkan:</strong> Bersihkan AirPods anda dengan lembut dengan kain kering dan bebas serat. Untuk mesh pembesar suara, gunakan berus berbulu lembut kering. Jangan gunakan cecair, udara termampat atau objek tajam. Semak juga <strong>Tetapan Sistem → Kebolehcapaian → Audio</strong> — pastikan gelangsar keseimbangan audio kiri/kanan berada di tengah.</p>

<h2>5. Apl itu sendiri mengeluarkan kelantangan rendah</h2>

<p>Sesetengah apl mempunyai kawalan kelantangan dalaman mereka sendiri yang berasingan daripada volum sistem. Spotify, VLC, YouTube dan Zoom semuanya mempunyai peluncur kelantangan bebas. Jika volum dalaman apl ialah pada 50%, anda hanya mendapat separuh daripada kelantangan — walaupun macOS dan AirPods anda berada pada 100%.</p>

<p><strong>Betulkan:</strong> Semak kawalan kelantangan di dalam mana-mana apl yang anda gunakan dan pastikan ia dimaksimumkan.</p>

<h2>6. Audio Teras berada dalam keadaan buruk</h2>

<p>Daemon audio macOS (coreaudiod) kadangkala boleh tersekat dalam keadaan di mana audio Bluetooth dihalakan secara tidak betul atau pada tahap yang dikurangkan, terutamanya selepas tidur/bangun atau bertukar antara berbilang peranti audio.</p>

<p><strong>Betulkan:</strong> Buka Terminal dan jalankan:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Audio akan jatuh sebentar dan dimulakan semula. AirPods anda mungkin disambungkan semula pada tahap kelantangan yang lebih normal.</p>

<h2>Masih terlalu senyap? Tingkatkan kelantangan AirPods melebihi 100%</h2>

<p>Jika anda telah menyemak kesemua enam punca di atas dan AirPods anda masih tidak cukup kuat, anda mungkin memerlukan penguatan kelantangan — meningkatkan isyarat audio melebihi apa yang biasanya dibenarkan oleh macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda meningkatkan kelantangan mana-mana apl sehingga <strong>200%</strong>. Jika Spotify terlalu senyap melalui AirPods anda, seret gelangsar Spotify kepada 150% atau 180% dalam SoundDial. Isyarat audio dikuatkan sebelum ia dihantar ke AirPods anda, dengan berkesan menjadikannya lebih kuat daripada yang dimaksudkan oleh Apple.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan apl untuk AirPods pada Mac dengan peluncur kelantangan setiap apl sehingga 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Kelebihan rangsangan setiap apl: anda boleh meningkatkan apl senyap tanpa menjadikan segala-galanya lebih kuat. Jika panggilan video anda baik-baik saja pada 100% tetapi Spotify memerlukan 170%, SoundDial membolehkan anda menetapkan setiap satu secara bebas.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Kelantangan Spotify Terlalu Rendah pada Mac? Inilah Setiap Pembetulan",
    description:
      "Spotify pada kelantangan maksimum tetapi masih terlalu senyap pada Mac anda? Panduan ini merangkumi setiap sebab — daripada pengehad terbina dalam Spotify kepada tetapan macOS — dan cara meningkatkannya melebihi 100%.",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify berada pada kelantangan penuh. Mac anda berada pada kelantangan penuh. Dan ia masih tidak cukup kuat. Ini adalah salah satu aduan Spotify yang paling biasa di Mac, dan ia mempunyai pelbagai sebab — kebanyakannya tidak jelas.</p>

<p>Panduan ini membincangkan setiap sebab Spotify mungkin terlalu senyap pada Mac anda dan cara membetulkan setiap satu. Termasuk cara meningkatkan volum Spotify melebihi 100% jika tiada apa-apa lagi yang berfungsi.</p>

<h2>Semak gelangsar kelantangan Spotify sendiri terlebih dahulu</h2>

<p>Spotify mempunyai kawalan kelantangan bebas di penjuru kanan bawah apl (atau bahagian bawah skrin pada pemain yang direka bentuk semula). Gelangsar ini berasingan daripada kelantangan sistem Mac anda. Jika ia pada 50%, maka Spotify hanya mengeluarkan separuh daripada potensi volumnya — walaupun volum sistem anda berada pada 100%.</p>

<p><strong>Betulkan:</strong> Pastikan gelangsar kelantangan dalam apl Spotify berada di sebelah kanan (100%).</p>

<h2>Semak normalisasi kelantangan Spotify</h2>

<p>Spotify mempunyai ciri yang dipanggil <strong>Normalisasi Kelantangan</strong> yang secara automatik melaraskan kelantangan main balik supaya semua trek dimainkan pada tahap yang lebih kurang sama. Ini bertujuan untuk mengelakkan lompatan kelantangan yang menggegarkan antara lagu, tetapi ia juga boleh mengurangkan kelantangan keseluruhan trek yang lebih kuat.</p>

<p>Untuk menyemak: Buka Spotify → Tetapan → → Main Balik <strong>Menormalkan kelantangan</strong>.</p>

<p>Anda mempunyai tiga pilihan:</p>
<ul>
  <li><strong>Kuat</strong> — normalisasi paling sedikit, paling hampir dengan tahap penguasaan asal</li>
  <li><strong>Biasa</strong> — normalisasi sederhana (lalai)</li>
  <li><strong>Senyap</strong> — paling normalisasi, mengurangkan kelantangan lagi</li>
</ul>

<p><strong>Betulkan:</strong> Jika Spotify berbunyi terlalu senyap, sama ada lumpuhkan normalisasi sepenuhnya atau tetapkannya kepada "Kuat." Ini adalah satu-satunya punca paling biasa Spotify menjadi senyap secara tidak dijangka.</p>

<h2>Semak tetapan kualiti audio Spotify</h2>

<p>Tetapan kualiti audio yang lebih rendah kadangkala boleh mengakibatkan main balik yang lebih senyap, terutamanya pada perkakasan audio yang lebih lama. Pergi ke Spotify → Tetapan → Kualiti Audio dan pastikan anda menggunakan "Sangat Tinggi" (320 kbps) jika anda mempunyai langganan Premium atau "Tinggi" (256 kbps) pada peringkat percuma.</p>

<h2>Semak had keselamatan fon kepala macOS</h2>

<p>Jika anda menggunakan fon kepala (berwayar atau Bluetooth), macOS mungkin mengehadkan kelantangan anda. Pergi ke <strong>Tetapan Sistem → Keselamatan Bunyi → Fon Kepala</strong>. Jika "Kurangkan Audio Kuat" didayakan, macOS mengehadkan kelantangan fon kepala anda pada tahap yang dianggap selamat.</p>

<p><strong>Betulkan:</strong> Lumpuhkan "Kurangkan Audio Kuat" atau naikkan ambang desibel. Nota: tetapan ini hanya menjejaskan output fon kepala, bukan pembesar suara.</p>

<h2>Semak kelantangan Bluetooth</h2>

<p>Jika anda menggunakan AirPods atau pembesar suara Bluetooth, terdapat lapisan kelantangan yang berasingan. Peranti Bluetooth mempunyai kelantangan sendiri yang dirundingkan antara Mac dan peranti. Kadang-kadang ini tidak segerak.</p>

<p><strong>Betulkan:</strong> Putuskan sambungan dan sambungkan semula peranti Bluetooth anda. Semak juga sama ada peranti mempunyai butang kelantangannya sendiri — pastikan ia juga maksimum.</p>

<h2>Tetapkan semula Audio Teras</h2>

<p>Sistem audio macOS kadangkala boleh tersekat dalam keadaan kelantangan rendah, terutamanya selepas kitaran tidur/bangun atau bertukar antara peranti output. Mulakan semula daemon audio selalunya membetulkan perkara ini.</p>

<p>Buka Terminal dan jalankan:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Audio akan terputus sebentar dan dimulakan semula. Cuba Spotify sekali lagi — ia mungkin lebih kuat.</p>

<h2>Tingkatkan Spotify melebihi 100% dengan SoundDial</h2>

<p>Jika anda telah mencuba segala-galanya di atas dan Spotify masih terlalu senyap, masalahnya mungkin output maksimum Spotify tidak cukup kuat untuk persediaan anda. Ini adalah perkara biasa dengan pembesar suara terbina dalam MacBook dan beberapa peranti Bluetooth.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membolehkan anda meningkatkan kelantangan mana-mana apl sehingga <strong>200%</strong> — termasuk Spotify. Ia memintas strim audio Spotify dan menguatkannya melebihi maksimum terbina dalam apl, tanpa menjejaskan kelantangan mana-mana apl lain.</p>

<img src="/apps/sounddial.png" alt="SoundDial meningkatkan kelantangan Spotify kepada 200% pada macOS sambil mengekalkan apl lain pada kelantangan biasa" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Inilah perbezaan utama: rangsangan kelantangan seluruh sistem akan membuat <em>segala-galanya</em> lebih kuat — pemberitahuan, panggilan, bunyi sistem — bukan hanya Spotify. SoundDial meningkatkan Spotify <em>secara bebas</em>. Tetapkan Spotify kepada 160% manakala penyemak imbas anda kekal pada 80% dan Zoom kekal pada 100%.</p>

<h2>Bonus: auto-ducking untuk muzik semasa panggilan</h2>

<p>Jika masalah sebaliknya juga berlaku — Spotify terlalu kuat semasa panggilan video — ciri auto-ducking SoundDial secara automatik menurunkan Spotify apabila anda menyertai panggilan Zoom, Teams atau FaceTime. Apabila panggilan tamat, Spotify kembali kepada kelantangan sebelumnya. Tiada pelarasan manual diperlukan.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Cara Memisahkan Audio Permainan daripada Discord pada Mac",
    description:
      "Letupan permainan menenggelamkan rakan sepasukan anda di Discord? Berikut ialah cara mengawal audio permainan dan kelantangan sembang suara secara bebas pada macOS.",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>Anda bermain di Mac anda. Letupan berlaku dalam permainan. Rakan sepasukan Discord anda bercakap, tetapi anda tidak boleh mendengar mereka melalui tembakan. Anda menurunkan kelantangan — kini Discord juga lebih senyap. Anda menghidupkannya semula - letupan memekakkan telinga lagi.</p>

<p>Pada Windows, anda akan membuka pengadun kelantangan, menurunkan permainan kepada 40%, dan meninggalkan Discord pada 100%. Pada Mac, anda tidak boleh. macOS memberi anda satu gelangsar kelantangan untuk segala-galanya, jadi audio permainan dan sembang suara dipautkan secara kekal.</p>

<p>Panduan ini menunjukkan kepada anda cara mendapatkan kawalan kelantangan bebas untuk permainan anda dan Discord (atau mana-mana sembang suara) pada Mac.</p>

<h2>Mengapa ini adalah masalah khusus Mac</h2>

<p>Windows telah mempunyai pengadun kelantangan terbina dalam sejak 2006 yang membolehkan anda mengawal kelantangan setiap apl secara bebas. macOS tidak pernah menambah ciri ini. Setiap audio apl dicampur ke dalam satu strim, dan satu-satunya kawalan yang anda miliki ialah satu gelangsar induk yang mempengaruhi segala-galanya secara sama rata.</p>

<p>Ini bermakna:</p>
<ul>
  <li>Jika permainan anda terlalu kuat, menurunkannya juga mematikan Discord</li>
  <li>Jika Discord terlalu senyap, menaikkannya juga menghidupkan permainan</li>
  <li>Anda tidak dapat mencari baki kerana kedua-dua app dikunci pada kelantangan yang sama</li>
</ul>

<h2>Penyelesaian yang tidak benar-benar berfungsi</h2>

<h3>Gunakan tetapan kelantangan dalam permainan</h3>
<p>Kebanyakan permainan mempunyai menu tetapan audio di mana anda boleh menurunkan kelantangan induk, muzik, kesan bunyi dan sembang suara secara bebas. Ini membantu, tetapi anda menukar tetapan dalam permainan — bermakna anda perlu menjeda permainan, menavigasi menu dan melaraskan setiap kali keadaan berubah. Dan jika anda menukar permainan, anda bermula semula.</p>

<h3>Gunakan kawalan kelantangan Discord</h3>
<p>Discord membolehkan anda melaraskan kelantangan output dalam Tetapan → Suara & Video dan anda boleh melaraskan kelantangan pengguna individu dengan mengklik kanan nama mereka. Tetapi ini mengawal campuran dalaman Discord, bukan jumlahnya berbanding apl lain. Jika permainan terlalu kuat, menjadikan Discord lebih kuat secara dalaman tidak membantu kerana kelantangan sistem mempengaruhi kedua-duanya secara sama rata.</p>

<h3>Gunakan peranti output yang berbeza</h3>
<p>Sesetengah orang cuba menghalakan audio permainan ke pembesar suara dan Discord ke fon kepala (atau sebaliknya). macOS tidak menjadikan ini mudah — anda memerlukan peranti audio maya dan penghalaan manual setiap apl. Dan memakai fon kepala dengan pembesar suara yang dimainkan serentak adalah janggal.</p>

<h2>Penyelesaian sebenar: kawalan kelantangan setiap apl</h2>

<p>Apa yang anda perlukan ialah keupayaan untuk menetapkan kelantangan permainan anda secara bebas daripada kelantangan Discord. Inilah yang dilakukan oleh pengadun kelantangan setiap apl.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> berada dalam bar menu anda dan memberikan setiap apl peluncur kelantangannya sendiri. Anda boleh menetapkan permainan anda kepada 35% dan Discord kepada 100% — atau apa sahaja nisbah yang sesuai untuk anda. Tukar satu dan yang lain kekal.</p>

<img src="/apps/sounddial.png" alt="SoundDial menunjukkan peluncur kelantangan bebas untuk permainan dan Discord pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Persediaan permainan biasa</h3>
<ul>
  <li><strong>Permainan</strong> — 30-50% (cukup kuat untuk rendaman, tidak menggembirakan)</li>
  <li><strong>Perselisihan / sembang suara</strong> — 90-100% (sentiasa boleh didengar dengan jelas melalui audio permainan)</li>
  <li><strong>Spotify / muzik</strong> — 15-25% (latar belakang halus, tidak mengganggu)</li>
  <li><strong>Pelayar</strong> — disenyapkan (tiada kejutan video main automatik)</li>
  <li><strong>Kendur / pemberitahuan</strong> — disenyapkan (masa fokus)</li>
</ul>

<h3>Simpan sebagai profil</h3>
<p>SoundDial <strong>Profil kelantangan</strong> membolehkan anda menyimpan konfigurasi ini dan menggunakannya dengan satu klik. Buat profil "Permainan" dengan baki permainan/Discord pilihan anda, profil "Kerja" untuk muzik dan panggilan, dan tukar antara mereka serta-merta. Tiada pelarasan semula gelangsar setiap kali anda duduk untuk bermain.</p>

<h3>Rangsangan kelantangan untuk sembang suara yang senyap</h3>
<p>Kadang-kadang masalahnya bukan kerana permainan itu terlalu kuat — tetapi Discord terlalu senyap. Sesetengah rakan sepasukan mempunyai mikrofon yang buruk, atau output Discord lebih rendah daripada apl lain. SoundDial membolehkan anda meningkatkan kelantangan mana-mana apl sehingga <strong>200%</strong>, jadi anda boleh menguatkan Discord melebihi maksimum biasa tanpa menyentuh kelantangan permainan.</p>

<h2>Berfungsi dengan mana-mana permainan dan sebarang sembang suara</h2>

<p>SoundDial berfungsi dengan setiap apl yang menghasilkan audio pada macOS. Tidak kira sama ada anda bermain melalui Steam, App Store, Epic Games atau permainan penyemak imbas. Tidak kira sama ada anda menggunakan Discord, TeamSpeak, Mumble, atau FaceTime. Jika ia mengeluarkan bunyi, SoundDial boleh mengawalnya.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Mengapa Mac tidak mempunyai pengadun kelantangan seperti Windows?",
    description:
      "Windows telah mempunyai kawalan kelantangan setiap apl sejak 2006. Ia adalah 2026 dan macOS masih belum. Inilah sebab sebenar — dan bagaimana untuk mendapatkannya.",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Setiap versi Windows sejak Vista (2006) telah menyertakan pengadun kelantangan. Klik kanan ikon pembesar suara, klik "Pengadun Kelantangan", dan anda melihat setiap apl dengan peluncur kelantangannya sendiri. Anda boleh meredamkan Chrome tanpa menjejaskan Spotify. Anda boleh menurunkan Discord tanpa menyentuh permainan anda.</p>

<p>Pada macOS? Satu gelangsar. Itu sahaja yang anda dapat. Dua puluh tahun kemas kini Mac — Ventura, Sonoma, Sequoia, Tahoe — dan Apple tidak pernah menambah kawalan kelantangan setiap apl.</p>

<p>Orang ramai sentiasa bertanya soalan ini: <em>Mengapa Mac tidak mempunyai pengadun kelantangan?</em></p>

<h2>Ia bukan batasan teknikal</h2>

<p>Mari kita singkirkan ini: macOS benar-benar boleh melakukan kawalan kelantangan setiap apl. Rangka kerja audio asas — <strong>Audio Teras</strong> — menyokong pengetuman audio setiap proses, penghalaan dan pelarasan keuntungan pada peringkat API. Apple memperkenalkan <strong>API Ketik Audio</strong> dalam macOS 14 (Sonoma), menjadikannya lebih mudah bagi pembangun untuk memintas dan mengubah suai strim audio apl individu.</p>

<p>Pembangun pihak ketiga telah membina pengadun volum setiap apl selama bertahun-tahun menggunakan API ini. Teknologi itu wujud. Apple belum membina versi yang dihadapi pengguna.</p>

<h2>Jadi mengapa Apple tidak membinanya?</h2>

<p>Apple tidak pernah menjelaskan secara terbuka mengapa. Tetapi melihat corak reka bentuk mereka, jawapannya agak jelas: <strong>Apple mengutamakan kesederhanaan berbanding ciri pengguna kuasa.</strong></p>

<p>Satu gelangsar kelantangan lebih mudah daripada dua belas. Ia lebih mudah untuk dijelaskan, lebih mudah dipelajari, dan memerlukan konfigurasi sifar. Bagi pengguna yang hanya melakukan satu perkara pada satu masa — mendengar muzik ATAU mengambil panggilan ATAU menonton video — satu gelangsar berfungsi dengan baik. Apple reka bentuk untuk pengguna ini terlebih dahulu.</p>

<p>Terdapat juga hujah falsafah: Apple percaya apl harus mengurus audio mereka sendiri. Jika Spotify terlalu kuat, matikannya dalam Spotify. Jika Zum terlalu senyap, naikkannya dalam Zum. OS tidak sepatutnya perlu menjadi pengantara.</p>

<p>Masalahnya ialah falsafah ini tidak sepadan dengan realiti. Pada tahun 2026, semua orang melakukan pelbagai tugas dengan audio:</p>

<ul>
  <li>Muzik dimainkan semasa bekerja</li>
  <li>Panggilan video dengan ping pemberitahuan</li>
  <li>Tab penyemak imbas memainkan iklan secara automatik</li>
  <li>Permainan dengan Discord berjalan</li>
  <li>Podcast di satu telinga, Slack di telinga yang lain</li>
</ul>

<p>"Hanya laraskannya dalam setiap apl" bermakna bertukar antara enam apl, mencari enam kawalan kelantangan yang berbeza (beberapa daripadanya tidak wujud) dan melakukan ini beberapa kali sehari. Ia bertentangan dengan mudah.</p>

<h2>Adakah Apple akan menambahnya?</h2>

<p>Tiada petunjuk Apple merancang untuk menambah pengadun kelantangan dalam mana-mana keluaran macOS yang akan datang. Ciri ini tidak muncul dalam mana-mana beta macOS, pemfailan paten atau peta jalan WWDC. Pusat Kawalan Apple dalam bar menu masih menunjukkan hanya peluncur kelantangan sistem tunggal.</p>

<p>Ada kemungkinan Apple menambahkannya akhirnya — mereka telah menggunakan ciri yang pada mulanya mereka tolak sebelum ini (widget, jubin tetingkap, iPad berbilang tetingkap). Tetapi menunggu Apple bermakna menunggu selama-lamanya.</p>

<h2>Bagaimana untuk mendapatkan pengadun kelantangan pada Mac sekarang</h2>

<p>Jawapannya ialah apl bar menu pihak ketiga. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ialah pengadun kelantangan macOS asli yang melakukan apa yang dilakukan oleh pengadun kelantangan Windows — dan banyak lagi.</p>

<img src="/apps/sounddial.png" alt="SoundDial — pengadun kelantangan untuk macOS, menunjukkan gelangsar kelantangan setiap apl dalam bar menu" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Apa yang anda dapat:</p>

<ul>
  <li><strong>Gelangsar kelantangan setiap apl</strong> — setiap apl yang sedang berjalan mendapat gelangsarnya sendiri, 0% hingga 200%</li>
  <li><strong>Membisukan setiap apl</strong> — satu klik untuk menyenyapkan mana-mana apl, klik sekali lagi untuk menyahredamkan</li>
  <li><strong>Profil kelantangan</strong> — simpan konfigurasi untuk situasi yang berbeza (Kerja, Fokus, Permainan) dan tukar dengan satu klik</li>
  <li><strong>Mengelak secara automatik</strong> — audio latar belakang diturunkan secara automatik apabila anda menyertai panggilan dan dipulihkan apabila anda menutup telefon</li>
  <li><strong>Peningkatan kelantangan kepada 200%</strong> — menguatkan apl senyap melebihi maksimum biasa</li>
  <li><strong>Pintasan papan kekunci</strong> — togol pengadun atau bisukan semua apl dengan kekunci pintas</li>
  <li><strong>Penukaran peranti keluaran</strong> — tukar antara pembesar suara, fon kepala dan peranti luaran daripada panel yang sama</li>
  <li><strong>Memori kelantangan</strong> — kelantangan setiap apl diingati antara dimulakan semula</li>
</ul>

<p>Ia adalah ciri yang sepatutnya dibina oleh Apple dua puluh tahun yang lalu. Pembelian sekali sahaja pada <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Tiada langganan. macOS 14.2+.</p>

<p>Pengadun kelantangan macOS sepatutnya terbina dalam.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac Kelantangan Terlalu Rendah? Cara Meningkatkan Bunyi Melebihi 100%",
    description:
      "Mac anda berada pada kelantangan penuh dan ia masih terlalu senyap. Inilah sebabnya ia berlaku dan cara menguatkan audio sehingga 200% tanpa pembesar suara luaran.",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>Jumlah Mac anda ialah 100%. Gelangsar berada di sebelah kanan. Dan ia masih tidak cukup kuat. Podcast terlalu senyap. Peserta panggilan video kedengaran seperti mereka berbisik. Video YouTube dirakam terlalu rendah. Anda telah memaksimumkan — dan ia tidak mencukupi.</p>

<p>Ini adalah salah satu aduan audio yang paling biasa pada Mac, terutamanya dengan pembesar suara terbina dalam pada MacBook Air dan model MacBook Pro yang lebih lama. Pembesar suara secara fizikal kecil, dan sesetengah kandungan hanya dirakam pada tahap yang lebih rendah daripada yang lain.</p>

<p>Inilah sebabnya ia berlaku dan cara benar-benar membetulkannya — termasuk cara meningkatkan volum Mac anda melebihi had 100%.</p>

<h2>Mengapa Mac anda berbunyi terlalu senyap pada kelantangan penuh</h2>

<p>Terdapat beberapa sebab Mac anda mungkin tidak cukup kuat walaupun pada kelantangan maksimum:</p>

<h3>1. Kandungan itu sendiri senyap</h3>
<p>Tidak semua audio dikuasai pada tahap yang sama. Podcast yang dihasilkan secara profesional mungkin memuncak pada -3 dB, manakala video YouTube kasual atau panggilan Zoom yang dirakam mungkin memuncak pada -20 dB. Perbezaannya sangat besar. Apabila kelantangan sistem anda berada pada 100%, kandungan senyap kekal senyap — macOS hanya boleh menguatkan sehingga tahap isyarat asal.</p>

<h3>2. Pembesar suara MacBook mempunyai had fizikal</h3>
<p>Pembesar suara terbina dalam dalam MacBook Air atau MacBook Pro 13" adalah kecil. Ia direka untuk mudah alih, bukan kelantangan. Model MacBook Pro Apple yang lebih besar (14" dan 16") mempunyai pembesar suara yang jauh lebih baik, tetapi walaupun mereka mempunyai siling. Jika anda terbiasa dengan pembesar suara luaran atau fon kepala, pembesar suara terbina dalam akan berasa lemah.</p>

<h3>3. Kelantangan Bluetooth dihadkan</h3>
<p>Sesetengah fon kepala dan pembesar suara Bluetooth mempunyai siling kelantangan sendiri yang berasingan daripada macOS. Walaupun macOS menunjukkan 100%, peranti Bluetooth mungkin tidak berada pada tahap maksimum. Ini amat biasa dengan AirPods, di mana pengehad kelantangan EU atau ciri keselamatan fon kepala dalam Tetapan → Bunyi → Keselamatan Fon Kepala boleh mengehadkan output.</p>

<h3>4. Volum apl individu rendah</h3>
<p>Sesetengah apl mempunyai kawalan kelantangan dalaman mereka sendiri yang berasingan daripada volum sistem. Jika kelantangan dalam apl Spotify ialah pada 50% dan kelantangan sistem pada 100%, anda mendengar dengan berkesan pada 50%. Zum selalunya lalai kepada tahap kelantangan konservatif untuk panggilan.</p>

<h2>Pembetulan terbina dalam untuk dicuba terlebih dahulu</h2>

<h3>Semak had keselamatan fon kepala</h3>
<p>Pergi ke <strong>Tetapan Sistem → Keselamatan Bunyi → Fon Kepala</strong>. Jika "Kurangkan Audio Kuat" didayakan, macOS secara aktif mengehadkan kelantangan anda untuk melindungi pendengaran anda. Anda boleh menyahdayakan ini atau menaikkan ambang. Ini hanya menjejaskan fon kepala — ia tidak menyentuh output pembesar suara.</p>

<h3>Semak kelantangan peranti Bluetooth</h3>
<p>Sesetengah peranti Bluetooth mempunyai kawalan kelantangan bebas. Untuk AirPods, pastikan kelantangan pada kedua-dua Mac dan AirPods dimaksimumkan. Untuk pembesar suara Bluetooth pihak ketiga, semak sama ada pembesar suara mempunyai butang kelantangan atau apl sendiri.</p>

<h3>Semak kelantangan dalam apl</h3>
<p>Buka apl yang terlalu senyap dan cari peluncur kelantangannya sendiri. Spotify mempunyai satu dalam bar pemain. VLC mempunyai satu dalam kawalan main balik. YouTube mempunyai satu pada pemain video. Pastikan ini berada pada 100% sebelum membuat kesimpulan bahawa Mac anda adalah masalahnya.</p>

<h3>Tetapkan semula Audio Teras</h3>
<p>Kadangkala sistem audio macOS masuk ke dalam keadaan buruk selepas kitaran tidur/bangun atau perubahan peranti. Buka Terminal dan jalankan:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Ini memulakan semula daemon audio. Audio anda akan terputus sebentar dan kembali, kadangkala pada tahap yang lebih normal.</p>

<h2>Bagaimana untuk meningkatkan volum melebihi 100%</h2>

<p>Jika anda telah menyemak semua perkara di atas dan Mac anda masih terlalu senyap, anda memerlukan penguatan kelantangan — keupayaan untuk menolak audio <em>di atas</em> siling 100% yang dikenakan oleh macOS.</p>

<p>Peningkatan kelantangan berfungsi dengan memintas isyarat audio sebelum ia sampai ke pembesar suara anda dan mendarabkan amplitudnya. Pada 150%, setiap sampel audio adalah 1.5x lebih kuat daripada yang asal. Pada 200%, ia dua kali ganda. Ini boleh memperkenalkan sedikit herotan pada tahap yang melampau dengan kandungan tertentu, tetapi untuk audio yang senyap, ia adalah satu-satunya cara untuk menjadikannya benar-benar boleh didengar.</p>

<h3>SoundDial: peningkatan volum setiap apl sehingga 200%</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberikan setiap apl pada Mac anda gelangsar kelantangan bebas yang beralih daripada 0% kepada <strong>200%</strong>. Jika apl tertentu terlalu senyap — pemain podcast, tab penyemak imbas, panggilan video — anda boleh meningkatkan apl itu melebihi 100% tanpa menyentuh apa-apa lagi.</p>

<img src="/apps/sounddial.png" alt="SoundDial Peningkatan Kelantangan — Kawalan kelantangan setiap apl dengan penguatan 200% pada macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ini amat berguna untuk:</p>
<ul>
  <li><strong>Apl podcast senyap</strong> — sesetengah pemain maksimum terlalu rendah, terutamanya dengan podcast yang dirakam dalam keadaan suboptimum</li>
  <li><strong>Panggilan video dengan peserta yang senyap</strong> — meningkatkan Zoom atau Pasukan apabila mikrofon seseorang rendah, tanpa menjadikan muzik anda lebih kuat</li>
  <li><strong>Tab penyemak imbas</strong> — Video YouTube, apl web dan media terbenam selalunya dimainkan pada volum yang lebih rendah daripada apl media khusus</li>
  <li><strong>Rakaman lama</strong> — audio arkib, muzik vintaj dan kandungan video lama sering dikuasai pada tahap yang lebih rendah</li>
</ul>

<p>Kelebihan utama berbanding penggalak kelantangan seluruh sistem ialah rangsangan SoundDial <em>setiap aplikasi</em>. Anda boleh meningkatkan apl senyap kepada 180% sambil mengekalkan segala-galanya pada tahap normal. Penggalak seluruh sistem akan menguatkan segala-galanya secara sama rata, menjadikan apl anda yang sudah kuat menyakitkan manakala apl yang senyap menjadi kurang senyap sedikit.</p>

<h2>Apabila penyelesaian luaran lebih baik</h2>

<p>Peningkatan kelantangan mempunyai had. Jika anda cuba mengisi bilik dengan bunyi daripada pembesar suara terbina dalam MacBook Air, tiada perisian boleh mengatasi saiz fizikal pemacu pembesar suara tersebut. Dalam kes itu:</p>

<ul>
  <li><strong>Fon kepala berwayar</strong> — memintas had pembesar suara sepenuhnya, dan kebanyakan fon kepala boleh menjadi lebih kuat daripada pembesar suara terbina dalam</li>
  <li><strong>Pembesar suara luaran</strong> — malah sepasang pembesar suara USB atau Bluetooth yang murah akan mengatasi prestasi pembesar suara MacBook terbina dalam untuk kelantangan mentah</li>
  <li><strong>Antara muka audio USB</strong> — untuk kegunaan profesional, antara muka audio khusus menyediakan isyarat yang bersih dan berkuasa kepada monitor studio atau fon kepala</li>
</ul>

<p>Tetapi untuk kes harian — tab penyemak imbas yang terlalu senyap, panggilan di mana seseorang bergumam, podcast yang dirakam dalam almari — peningkatan kelantangan perisian dengan <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> adalah penyelesaian terpantas. Klik ikon bar menu, seret gelangsar melepasi 100%, selesai.</p>

<p>Pembelian sekali sahaja pada <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Tiada langganan. macOS 14.2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Cara Menurunkan Muzik Secara Automatik Semasa Panggilan Zum pada Mac",
    description:
      "Setiap kali panggilan Zoom bermula, anda berebut-rebut untuk menjeda Spotify. Terdapat cara yang lebih baik — auto-ducking menurunkan muzik anda secara automatik apabila mikrofon anda diaktifkan.",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>Panggilan bermula. Anda berkongsi skrin anda. Muzik anda masih meletup. Anda panik bertukar ke Spotify, tekan jeda, beralih kembali ke Zoom — tetapi semua orang sudah mendengar sepuluh saat senarai main anda. Ia berlaku kepada semua orang, dan ia berlaku kerana macOS tidak mempunyai kaitan antara "panggilan baru dimulakan" dan "mungkin menurunkan muzik."</p>

<p>Pada sesetengah telefon, ini adalah automatik — muzik berhenti seketika atau itik apabila panggilan masuk. Pada Mac, anda bersendirian. Melainkan anda menyediakan auto-ducking.</p>

<h2>Apakah itik audio?</h2>

<p><strong>Audio merunduk</strong> bermakna menurunkan kelantangan audio latar belakang secara automatik apabila sesuatu yang lebih penting berlaku — seperti panggilan suara. Istilah ini berasal daripada kejuruteraan penyiaran, di mana muzik latar belakang "itik di bawah" suara juruhebah.</p>

<p>Dalam amalan, ia berfungsi seperti ini:</p>
<ol>
  <li>Anda mendengar muzik pada kelantangan 50%</li>
  <li>Anda menyertai panggilan Zoom</li>
  <li>Muzik anda turun secara automatik kepada 15%</li>
  <li>Anda boleh mendengar panggilan dengan jelas tanpa melaraskan apa-apa secara manual</li>
  <li>Panggilan berakhir</li>
  <li>Muzik anda secara automatik kembali kepada 50%</li>
</ol>

<p>Tiada penukaran apl. Tiada jeda. Tidak lupa untuk menyahredamkan muzik anda selepas panggilan. Ia automatik sepenuhnya.</p>

<h2>Adakah macOS mempunyai itik audio terbina dalam?</h2>

<p>Tidak. macOS tidak mempunyai ciri itik audio automatik. Tiada apa-apa dalam mod Tetapan Sistem, Kebolehcapaian atau Fokus yang menghubungkan "mikrofon aktif" dengan "audio latar belakang yang lebih rendah." Apple tidak membina ini.</p>

<p>Terdapat tetapan Kebolehcapaian yang dipanggil "Mainkan audio stereo sebagai mono" dan pilihan untuk makluman denyar visual, tetapi tiada apa-apa yang melaraskan kelantangan secara automatik berdasarkan sama ada anda berada dalam panggilan.</p>

<h2>Alternatif manual (dan mengapa ia menyakitkan)</h2>

<h3>Jeda muzik secara manual sebelum setiap panggilan</h3>
<p>Inilah yang kebanyakan orang lakukan. Ia berfungsi - sehingga anda terlupa. Atau sehingga seseorang menelefon secara tidak dijangka. Atau sehingga anda mempunyai panggilan berturut-turut dan anda menjeda dan menyahjeda Spotify dua belas kali sehari. Ini juga bermakna tiada muzik latar semasa panggilan, walaupun anda mahukannya pada kelantangan rendah.</p>

<h3>Gunakan mod Fokus untuk menyenyapkan segala-galanya</h3>
<p>Anda boleh mencipta mod Fokus "Mesyuarat" yang menyekat bunyi pemberitahuan. Tetapi mod Fokus tidak mengawal kelantangan main balik media. Muzik anda terus dimainkan pada letupan penuh walaupun dalam mod Jangan Ganggu — Fokus hanya menyekat pemberitahuan.</p>

<h3>Tetapkan profil kelantangan secara manual</h3>
<p>Buat persediaan "panggilan" di mana anda menurunkan segala-galanya secara manual kecuali apl komunikasi anda sebelum setiap panggilan. Ini berfungsi tetapi memerlukan anda mengingati dan bertukar secara manual setiap kali. Dan anda perlu bertukar semula selepas itu.</p>

<h2>Auto-ducking dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mempunyai ciri auto-ducking terbina dalam yang melakukan perkara yang perlu dilakukan oleh macOS secara asli. Begini cara ia berfungsi:</p>

<h3>Cara ia mengesan panggilan</h3>
<p>SoundDial memantau status mikrofon Mac anda — penunjuk yang sama yang menunjukkan titik oren dalam bar menu anda apabila app menggunakan mikrofon anda. Apabila ia mengesan bahawa apl komunikasi telah mengaktifkan mikrofon anda, ia tahu panggilan telah bermula.</p>

<p>Ia berfungsi dengan semua apl komunikasi utama:</p>
<ul>
  <li><strong>Zum</strong></li>
  <li><strong>Pasukan Microsoft</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Perselisihan</strong></li>
  <li><strong>Kendur</strong> (berkumpul dan memanggil)</li>
  <li><strong>Google Meet</strong> (melalui Chrome)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Perkara yang berlaku apabila panggilan bermula</h3>
<p>Sebaik sahaja mikrofon anda diaktifkan untuk panggilan, SoundDial secara automatik mengurangkan kelantangan semua apl bukan komunikasi kepada tahap yang anda konfigurasikan — lalai ialah 30%. Audio panggilan anda kekal pada kelantangan penuh. Muzik latar jatuh ke tahap yang halus. Bunyi pemberitahuan menjadi senyap.</p>

<p>Penunjuk hijau kecil muncul dalam pengepala SoundDial untuk mengesahkan auto-ducking aktif.</p>

<h3>Apa yang berlaku apabila panggilan tamat</h3>
<p>Apabila anda menutup telefon dan mikrofon dinyahaktifkan, SoundDial memulihkan semua volum apl ke tempat yang tepat sebelum panggilan bermula. Muzik anda kembali sehingga 50% (atau di mana sahaja anda memilikinya). Tiada pelarasan manual diperlukan.</p>

<h3>Mengkonfigurasi tahap itik</h3>
<p>Dalam tetapan SoundDial, anda boleh melaraskan <strong>Tahap itik</strong> — jumlah audio latar belakang yang dikurangkan semasa panggilan. Gelangsar berkisar antara 10% (hampir tidak kedengaran) hingga 80% (masih agak ada). Lalai 30% berfungsi dengan baik untuk kebanyakan orang: muzik ketara tetapi tidak mengganggu perbualan.</p>

<img src="/apps/sounddial.png" alt="SoundDial ciri auto-ducking secara automatik menurunkan kelantangan muzik semasa panggilan Zum pada Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Mengapa auto-ducking lebih baik daripada berhenti seketika</h2>

<p>Menjeda muzik sebelum panggilan kelihatan mudah, tetapi auto-ducking adalah lebih baik dalam beberapa cara:</p>

<ul>
  <li><strong>Ia automatik.</strong> Anda tidak pernah lupa. Tiada berebut-rebut apabila panggilan yang tidak dijangka masuk.</li>
  <li><strong>Anda menyimpan muzik latar belakang.</strong> Ramai orang lebih suka muzik latar belakang yang tenang semasa panggilan daripada senyap. Auto-ducking membolehkan anda mengekalkannya pada tahap yang selesa.</li>
  <li><strong>Ia mengendalikan berbilang apl.</strong> Ia bukan sekadar muzik — bunyi pemberitahuan, tab penyemak imbas dan mana-mana sumber audio lain semuanya ditolak secara serentak.</li>
  <li><strong>Ia memulihkan dengan sempurna.</strong> Apabila panggilan tamat, setiap apl kembali kepada volum sebelumnya yang tepat. Tiada penyesuaian semula.</li>
  <li><strong>Ia berfungsi untuk panggilan berturut-turut.</strong> Jika anda mempunyai tiga mesyuarat berturut-turut, auto-ducking mengendalikan kesemuanya tanpa anda menyentuh apa-apa.</li>
</ul>

<h2>Sediakan dalam masa kurang dari satu minit</h2>

<ol>
  <li>Pasang <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial daripada Mac App Store</a></li>
  <li>Buka tab Tetapan → Auto-Itik</li>
  <li>Dayakan itik automatik</li>
  <li>Laraskan gelangsar paras itik mengikut keutamaan anda</li>
  <li>Itu sahaja - auto-ducking aktif</li>
</ol>

<p>Kali seterusnya anda menyertai panggilan Zoom, Pasukan atau FaceTime, audio latar belakang anda akan diturunkan secara automatik. Apabila anda menutup telefon, ia kembali. Pembelian sekali sahaja, tiada langganan.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Cara Meredamkan Satu Apl pada Mac Tanpa Meredamkan Segala-galanya",
    description:
      "Slack sedang ping. Anda sedang dalam panggilan. Anda mahu membisukan Slack tetapi terus mendengar panggilan anda. macOS tidak membenarkan anda — inilah cara untuk melakukannya.",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>Anda sedang dalam panggilan Zoom. Slack terus mengeluarkan bunyi pemberitahuan. Tab YouTube yang anda terlupa mula dimainkan secara automatik. Anda menekan kekunci bisu — dan kini anda juga tidak dapat mendengar panggilan anda. macOS membisukan <em>segala-galanya</em>. Tiada cara terbina dalam untuk meredamkan hanya satu apl.</p>

<p>Pada Windows, anda akan klik kanan ikon pembesar suara, buka pengadun kelantangan dan klik butang bisu di sebelah Slack. Selesai. Slack senyap, segala-galanya terus dimainkan. macOS tidak mempunyai persamaan.</p>

<p>Panduan ini merangkumi setiap kaedah yang tersedia untuk meredamkan apl tertentu pada Mac anda — daripada penyelesaian terbina dalam kepada satu penyelesaian yang sebenarnya berfungsi seperti butang bisu yang betul.</p>

<h2>Sebab macOS tidak boleh meredamkan apl individu</h2>

<p>macOS menganggap audio sebagai satu strim. Setiap audio apl dicampur bersama sebelum ia sampai ke pembesar suara anda, dan satu-satunya kawalan kelantangan yang Apple berikan kepada anda beroperasi pada output campuran akhir itu. Tiada cara untuk mencapai campuran itu dan menyenyapkan satu apl tanpa menjejaskan yang lain.</p>

<p>Ini bukan had perkakasan — ia adalah pilihan reka bentuk perisian. Rangka kerja Audio Teras macOS menyokong kawalan audio setiap proses pada peringkat API. Apple tidak membina cara yang menghadap pengguna untuk mengaksesnya.</p>

<h2>Penyelesaian terbina dalam (dan hadnya)</h2>

<h3>1. Matikan pemberitahuan untuk apl</h3>
<p>Pergi ke <strong>Tetapan Sistem → Pemberitahuan</strong> dan cari apl yang anda mahu senyapkan. Anda boleh menyahdayakan bunyi untuk pemberitahuannya atau mematikan pemberitahuan sepenuhnya.</p>
<p><strong>Tangkapan:</strong> Ini hanya berfungsi untuk bunyi pemberitahuan. Jika apl mengeluarkan bunyi lain — main balik media, audio panggilan, bunyi dalam apl — ini tidak akan menyentuhnya. Dan anda juga kehilangan pemberitahuan visual, bukan hanya bunyi.</p>

<h3>2. Gunakan mod Fokus</h3>
<p>macOS Mod Fokus (Jangan Ganggu, Kerja, Peribadi dsb.) boleh menyekat bunyi pemberitahuan daripada apl tertentu. Anda boleh mengkonfigurasi apl yang dibenarkan untuk memberitahu anda dalam setiap mod Fokus.</p>
<p><strong>Tangkapan:</strong> Mod fokus adalah mengenai pemberitahuan, bukan audio. Mereka tidak akan meredamkan perhimpunan Slack, tab penyemak imbas yang memainkan audio atau sebarang main balik media. Mereka juga memerlukan konfigurasi pendahuluan untuk setiap mod — anda tidak boleh hanya "meredamkan apl ini sekarang."</p>

<h3>3. Tutup apl</h3>
<p>Pilihan nuklear. Jika anda berhenti dari Slack sepenuhnya, ia tidak boleh mengeluarkan bunyi. Jelas sekali ini bermakna anda juga tidak dapat melihat sebarang mesej sehingga anda membukanya semula.</p>
<p><strong>Tangkapan:</strong> Anda tidak mahu keluar dari apl — anda mahu <em>Teruskan menggunakannya</em> tanpa mendengarnya. Terdapat perbezaan besar antara "bisu" dan "dekat."</p>

<h3>4. Gunakan tetapan apl sendiri</h3>
<p>Sesetengah apl mempunyai tetapan "bunyi bisu" atau "pemberitahuan bisu" yang terkubur di suatu tempat dalam pilihan mereka. Slack memilikinya di bawah Keutamaan → Pemberitahuan → Bunyi & penampilan. Spotify mempunyai ikon pembesar suara dalam pemain.</p>
<p><strong>Tangkapan:</strong> Anda perlu mencari dan menavigasi tetapan setiap apl secara individu. Banyak apl tidak mempunyai pilihan ini sama sekali. Dan bertukar antara "diredamkan" dan "tidak diredamkan" bermakna menyelam kembali ke keutamaan setiap kali, dan bukannya mengklik satu butang.</p>

<h2>Penyelesaian sebenar: butang bisu setiap apl</h2>

<p>Apa yang anda mahukan sebenarnya adalah mudah: butang bisu di sebelah setiap apl yang menyenyapkannya serta-merta, tanpa menjejaskan apa-apa lagi. Klik untuk membisukan, klik sekali lagi untuk menyahredamkan. Apl terus berjalan, anda terus melihat kandungannya — anda tidak mendengarnya.</p>

<p>Inilah yang dilakukan oleh pengadun kelantangan setiap apl. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Terletak dalam bar menu anda dan menunjukkan setiap apl yang sedang berjalan dengan gelangsar kelantangan dan butang bisunya sendiri.</p>

<img src="/apps/sounddial.png" alt="SoundDial menunjukkan butang bisu setiap apl untuk setiap aplikasi dalam bar menu macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Untuk meredamkan satu apl:</p>
<ol>
  <li>Klik ikon SoundDial dalam bar menu anda</li>
  <li>Cari apl yang anda mahu bisukan</li>
  <li>Klik ikon pembesar suara di sebelahnya</li>
</ol>

<p>Itu sahaja. Apl ini disenyapkan. Segala-galanya terus dimainkan pada apa jua kelantangan. Klik ikon pembesar suara sekali lagi untuk menyahredamkan — kelantangan kembali ke tempat sebelumnya.</p>

<h2>Di luar meredamkan: kawalan kelantangan setiap apl</h2>

<p>Sebaik sahaja anda mempunyai pengadun setiap apl, anda menyedari bahawa meredamkan hanyalah penghujung yang melampau daripada perkara yang sebenarnya anda mahukan. Selalunya, anda tidak mahu menyenyapkan apl sepenuhnya — anda mahu membuatnya <em>lebih senyap</em>.</p>

<ul>
  <li>Pemberitahuan kendur pada 15% — cukup halus untuk tidak mengganggu, cukup hadir untuk diperhatikan</li>
  <li>Muzik pada 30% — tahap latar belakang yang tidak bersaing dengan perbualan</li>
  <li>Penyemak imbas pada 60% — selesa untuk main balik video</li>
  <li>Zum pada 100% — kelantangan penuh untuk panggilan yang penting</li>
</ul>

<p>SoundDial memberikan setiap apl gelangsar daripada 0% hingga 200%. Anda boleh menjadikan apl lebih senyap daripada minimum terbina dalam atau lebih kuat daripada maksimum terbina dalam. Dan dengan <strong>Profil kelantangan</strong>, anda boleh menyimpan konfigurasi pilihan anda dan bertukar antara pratetap — mod "Mesyuarat", mod "Fokus", mod "Muzik" — dengan satu klik.</p>

<p>Ciri auto-ducking melangkah lebih jauh: apabila anda memulakan panggilan, SoundDial secara automatik menurunkan segala-galanya kecuali apl komunikasi anda. Apabila panggilan tamat, semuanya akan bangkit semula. Anda tidak pernah menyentuh gelangsar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali sahaja, tiada langganan, macOS 14.2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Pengadun Kelantangan untuk Mac: Ciri Hilang macOS Masih Tidak Mempunyai",
    description:
      "Windows telah mempunyai pengadun kelantangan sejak 2006. Inilah sebabnya macOS masih tidak — dan cara terbaik untuk mendapatkan kawalan kelantangan setiap apl pada Mac anda pada tahun 2026.",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>Klik kanan ikon pembesar suara pada mana-mana PC Windows dan anda akan menemui Pengadun Kelantangan — panel yang menunjukkan setiap aplikasi yang sedang mengeluarkan bunyi, masing-masing dengan gelangsar kelantangan bebasnya sendiri. Anda boleh menurunkan Spotify kepada 20% sambil mengekalkan panggilan Zoom anda pada 100%. Anda boleh meredamkan Chrome tanpa menyentuh apa-apa lagi. Ia telah wujud sejak Windows Vista pada tahun 2006.</p>

<p>Sekarang lakukan perkara yang sama pada Mac. Klik ikon bunyi dalam bar menu. Anda mendapat satu gelangsar. Itu sahaja. Satu gelangsar yang mengawal segala-galanya sekaligus. Setiap apl, setiap pemberitahuan, setiap bunyi sistem — semuanya dikunci bersama.</p>

<p>Ini bukan aduan khusus. Ia adalah ciri audio tunggal yang paling banyak diminta dalam macOS, dan Apple telah mengabaikannya selama dua puluh tahun.</p>

<h2>Apa yang sebenarnya dilakukan oleh pengadun kelantangan</h2>

<p>Pengadun kelantangan memberi anda <strong>kawalan kelantangan bebas untuk setiap aplikasi</strong> pada komputer anda. Daripada satu gelangsar induk, anda mendapat satu gelangsar bagi setiap apl. Setiap gelangsar hanya mempengaruhi output audio apl tertentu itu.</p>

<p>Inilah yang kelihatan seperti dalam amalan:</p>

<ul>
  <li><strong>Spotify</strong> pada 25% — muzik latar belakang pada tahap yang selesa</li>
  <li><strong>Zum</strong> pada 100% — dengar setiap perkataan mesyuarat</li>
  <li><strong>Kendur</strong> disenyapkan — tiada bunyi pemberitahuan semasa masa fokus</li>
  <li><strong>Safari</strong> pada 60% — video YouTube pada kelantangan sederhana</li>
  <li><strong>Bunyi Sistem</strong> pada 10% — maklum balas halus tanpa mengejutkan anda</li>
</ul>

<p>Semua ini berjalan serentak, masing-masing pada kelantangan mereka sendiri. Tukar satu dan tiada yang lain bergerak. Itulah yang dilakukan oleh pengadun kelantangan, dan itulah yang macOS tidak ada.</p>

<h2>Mengapa Apple belum membina satu</h2>

<p>Ia bukan had teknikal. Rangka kerja audio macOS — Core Audio — menyokong sepenuhnya penghalaan audio setiap proses dan kawalan kelantangan pada peringkat API. Apple menggunakan keupayaan ini secara dalaman. Mereka hanya tidak mendedahkannya kepada pengguna.</p>

<p>Sebab yang mungkin ialah falsafah reka bentuk Apple: pilihan yang lebih sedikit, antara muka yang lebih mudah. Satu gelangsar lebih bersih daripada dua belas. Dan bagi seseorang yang hanya pernah melakukan satu perkara pada satu masa — mendengar muzik ATAU mengambil panggilan ATAU menonton video — satu gelangsar tidak mengapa.</p>

<p>Tetapi itu bukan cara orang menggunakan komputer pada tahun 2026. Kerja jarak jauh bermakna anda sedang dalam panggilan dengan muzik dimainkan dan ping Slack dan tab penyemak imbas memainkan video secara automatik, semuanya pada masa yang sama. Model "satu gelangsar untuk segala-galanya" rosak sepenuhnya apabila anda mempunyai lima sumber audio yang bersaing untuk telinga anda.</p>

<h2>Penyelesaian macOS (dan mengapa ia gagal)</h2>

<h3>Gunakan kawalan kelantangan terbina dalam setiap apl</h3>
<p>Spotify mempunyai peluncur kelantangan. VLC mempunyai satu. QuickTime mempunyai satu. Tetapi ini bermakna beralih kepada setiap apl secara individu, mencari kawalan kelantangannya, melaraskannya dan bertukar semula. Ia tersebar di sedozen tempat yang berbeza, dan kebanyakan apl — Slack, Mail, Safari, Chrome — tidak memilikinya.</p>

<h3>Gunakan "Jangan Ganggu" untuk menyenyapkan pemberitahuan</h3>
<p>Mod fokus boleh menyekat bunyi pemberitahuan, tetapi ia adalah binari — segala-galanya atau tiada. Anda tidak boleh mengatakan "simpan bunyi Slack tetapi jadikan ia lebih senyap." Dan mod Fokus tidak menyentuh media atau kelantangan panggilan sama sekali.</p>

<h3>Gunakan Persediaan MIDI Audio</h3>
<p>Utiliti terbina dalam ini menguruskan peranti audio dan kadar sampel. Ia tiada kaitan dengan volum setiap apl. Ia adalah alat konfigurasi peranti, bukan pengadun.</p>

<h3>Buat peranti berbilang output</h3>
<p>Anda boleh menggabungkan output audio ke dalam peranti agregat, tetapi ini menghantar audio yang sama kepada berbilang output — ia tidak memberi anda kawalan setiap apl. Ia berguna jika anda mahukan bunyi pada kedua-dua pembesar suara dan fon kepala secara serentak, tetapi itu adalah masalah yang sama sekali berbeza.</p>

<p>Tiada satu pun daripada penyelesaian ini menyelesaikan isu asas: macOS tidak mempunyai cara terbina dalam untuk mengatakan "jadikan apl ini lebih senyap tanpa menjejaskan apa-apa lagi."</p>

<h2>Apa yang perlu dicari dalam pengadun kelantangan Mac</h2>

<p>Jika Apple tidak akan membinanya, apl pihak ketiga akan. Tetapi tidak semua pengadun kelantangan dicipta sama. Inilah yang membezakan yang baik daripada yang biasa-biasa saja:</p>

<h3>Pengesanan apl masa nyata</h3>
<p>Pengadun harus mengesan secara automatik setiap apl yang sedang menghasilkan audio. Anda tidak perlu menambah apl secara manual atau mengkonfigurasi apa-apa. Buka apl dan ia muncul dalam pengadun. Tutupnya, dan ia hilang.</p>

<h3>Julat volum melebihi 100%</h3>
<p>Sesetengah apl terlalu senyap walaupun pada kelantangan maksimum — pemain podcast senyap, tab penyemak imbas dengan audio lembut, panggilan video di mana mikrofon seseorang rendah. Pengadun yang baik membolehkan anda <strong>Tingkatkan kelantangan sehingga 200%</strong>, menguatkan audio dengan berkesan melebihi apa yang boleh dihasilkan oleh apl itu sendiri.</p>

<h3>Bisu satu klik bagi setiap apl</h3>
<p>Anda sepatutnya boleh meredamkan mana-mana apl dengan satu klik — tanpa menggerakkan gelangsar. Apabila anda menyahredamkan, ia harus kembali ke tempat ia berada. Ini penting untuk menyenyapkan apl yang bising dengan cepat semasa panggilan.</p>

<h3>Profil untuk situasi yang berbeza</h3>
<p>Anda tidak mahu melaraskan lapan gelangsar secara manual setiap kali anda bertukar daripada "bekerja dengan muzik" kepada "panggilan video" kepada "permainan." Profil membolehkan anda menyimpan konfigurasi kelantangan dan menggunakannya dengan satu klik. Profil "Mesyuarat" mungkin menetapkan Zum kepada 100%, muzik kepada 15% dan pemberitahuan kepada 0%. Profil "Fokus" mungkin membisukan segala-galanya kecuali Spotify.</p>

<h3>Auto-ducking semasa panggilan</h3>
<p>Ciri terbaik yang boleh dimiliki oleh pengadun kelantangan: menurunkan audio latar belakang secara automatik apabila anda menyertai panggilan dan memulihkannya apabila panggilan tamat. Tiada pelarasan manual diperlukan. Muzik anda menjadi senyap apabila Zum mengaktifkan mikrofon anda dan kembali apabila anda menutup telefon.</p>

<h3>Penyepaduan bar menu</h3>
<p>Pengadun kelantangan hendaklah berada dalam bar menu — satu klik untuk membuka, melaraskan dan menutup. Ia tidak sepatutnya menjadi tetingkap penuh, tidak sepatutnya mengambil ruang Dock dan tidak sepatutnya memerlukan anda beralih daripada apl semasa anda. Anda sepatutnya boleh melaraskan kelantangan tanpa kehilangan tumpuan pada perkara yang anda lakukan.</p>

<h2>SoundDial: pengadun kelantangan macOS sepatutnya terbina dalam</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ialah apl bar menu macOS asli yang memberikan anda perkara yang tidak akan dilakukan oleh Apple — kawalan kelantangan bebas untuk setiap apl pada Mac anda.</p>

<p>Ia terletak di bar menu anda dan menunjukkan setiap aplikasi yang sedang berjalan dengan peluncur kelantangannya sendiri. Seret gelangsar untuk melaraskan volum apl itu daripada 0% kepada 200%. Klik ikon pembesar suara untuk meredamkannya serta-merta. Tukar antara profil yang disimpan untuk situasi yang berbeza. Dayakan auto-ducking dan muzik anda secara automatik menjadi lebih senyap apabila panggilan bermula.</p>

<img src="/apps/sounddial.png" alt="SoundDial — pengadun kelantangan setiap apl untuk macOS menunjukkan gelangsar kelantangan apl individu dalam bar menu" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ciri-ciri utama:</p>
<ul>
  <li><strong>Gelangsar kelantangan setiap apl</strong> — Julat 0% hingga 200% untuk setiap apl yang sedang berjalan</li>
  <li><strong>Bisu satu klik</strong> — senyapkan mana-mana apl tanpa menggerakkan gelangsarnya</li>
  <li><strong>Profil kelantangan</strong> — simpan dan tukar antara konfigurasi kelantangan</li>
  <li><strong>Mengelak secara automatik</strong> — muzik menurun secara automatik semasa panggilan</li>
  <li><strong>Pintasan papan kekunci</strong> — togol pengadun atau bisukan semua apl dengan kekunci pintas</li>
  <li><strong>Penukaran peranti keluaran</strong> — menukar pembesar suara/fon kepala daripada panel yang sama</li>
  <li><strong>Memori kelantangan</strong> — mengingati kelantangan setiap apl antara dimulakan semula</li>
</ul>

<p>Pembelian sekali sahaja. Tiada langganan. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a>.</p>
`,
  },
};
