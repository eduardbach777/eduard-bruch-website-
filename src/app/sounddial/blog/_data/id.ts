import type { ArticleSet } from "./index";

export const idArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Audio Mac untuk Podcasting: Kontrol Apa yang Anda Dengar Saat Merekam",
    description: "Merekam podcast sambil memantau level, mendengar tamu, dan mengelola notifikasi — semuanya berebut satu slider volume. Ini setup yang lebih baik.",
    date: "2026-03-05",
    readTime: "5 menit baca",
    content: `
<p>Anda merekam podcast di Mac. Anda perlu mendengar tamu (via Zoom, Riverside, atau SquadCast) dengan jelas. Anda perlu memantau level rekaman DAW. Anda perlu Slack dibisukan agar ping tidak masuk rekaman. Dan Anda perlu suara notifikasi sistem dimatikan sepenuhnya — suara "ding" macOS di tengah wawancara adalah audio yang tidak bisa digunakan.</p>

<p>macOS memberi Anda satu slider volume untuk semuanya. Itu tidak cukup.</p>

<h2>Tantangan audio podcasting di Mac</h2>

<p>Selama sesi rekaman podcast, Anda biasanya memiliki:</p>
<ul>
  <li><strong>Aplikasi komunikasi</strong> (Zoom, Riverside, SquadCast) — audio tamu, harus jelas</li>
  <li><strong>DAW / aplikasi rekaman</strong> (Logic, GarageBand, Audacity, Hindenburg) — memantau level Anda sendiri</li>
  <li><strong>Sumber notifikasi</strong> (Slack, Mail, Calendar, Messages) — harus benar-benar hening saat merekam</li>
  <li><strong>Browser</strong> — mungkin ada catatan acara, tab riset, atau timer berjalan</li>
</ul>

<p>Semua di volume yang sama itu kacau. Audio tamu bersaing dengan bunyi sistem. Notifikasi Slack bisa merusak take. Dan jika Anda perlu menyesuaikan volume tamu, mengubah volume sistem juga mengubah level monitoring Anda.</p>

<h2>Solusi umum</h2>

<p>Kebanyakan podcaster menggunakan kombinasi:</p>
<ul>
  <li>Mode Fokus (Jangan Ganggu) untuk menekan notifikasi</li>
  <li>Menutup Slack, Mail, dan aplikasi berisik lainnya secara manual sebelum merekam</li>
  <li>Menyesuaikan volume internal aplikasi komunikasi untuk tamu</li>
</ul>

<p>Ini berhasil, tapi rawan kesalahan. Lupa mengaktifkan DND dan notifikasi merusak take. Lupa menutup Slack dan ada panggilan masuk.</p>

<h2>Audio per-aplikasi untuk podcasting</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memungkinkan Anda membangun lingkungan rekaman bersih dengan mengontrol setiap aplikasi secara independen:</p>

<img src="/apps/sounddial.png" alt="SoundDial podcasting setup — guest audio, monitoring, and notifications at independent levels" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil Rekaman</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — audio tamu jelas</li>
  <li><strong>Logic / GarageBand:</strong> 60% — monitoring nyaman tanpa lelah</li>
  <li><strong>Slack:</strong> bisukan — tidak ada suara notifikasi</li>
  <li><strong>Mail:</strong> bisukan</li>
  <li><strong>Messages:</strong> bisukan</li>
  <li><strong>Calendar:</strong> bisukan</li>
  <li><strong>Browser:</strong> bisukan — tidak ada auto-play tak terduga</li>
</ul>

<p>Simpan sebagai profil "Rekaman". Sebelum menekan rekam, terapkan profil dengan satu klik. Setiap sumber notifikasi dibisukan, tamu di volume penuh, dan monitoring di level nyaman.</p>

<h3>Profil Editing</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — monitoring penuh untuk editing</li>
  <li><strong>Spotify:</strong> bisukan — tidak ada kebingungan referensi</li>
  <li><strong>Slack:</strong> 20% — notifikasi halus saat istirahat</li>
  <li><strong>Browser:</strong> 40% — untuk catatan dan riset acara</li>
</ul>

<p>Dua profil, dua klik, dua lingkungan audio yang benar-benar berbeda.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Mengapa Mac Saya Sangat Keras di Volume Penuh? Cara Kontrol Lebih Halus",
    description: "Speaker MacBook Pro luar biasa — sampai terlalu keras. Jika volume sedang pun terasa terlalu keras, ini cara mendapat kontrol audio lebih presisi.",
    date: "2026-03-08",
    readTime: "4 menit baca",
    content: `
<p>MacBook Pro Apple terbaru (14" dan 16") memiliki speaker yang sangat kuat untuk laptop. Begitu kuat sehingga volume sedang bisa benar-benar keras — terutama di ruangan sunyi, larut malam, atau dengan headphone.</p>

<h2>Mengapa langkah volume terasa terlalu kasar</h2>

<p>macOS memiliki <strong>16 langkah volume</strong> via keyboard. Setiap langkah sekitar 6.25%. Di speaker kuat atau headphone sensitif, satu langkah bisa mewakili perubahan volume yang signifikan.</p>

<h2>Perbaikan bawaan: volume seperempat langkah</h2>

<p>Tahan <strong>Option + Shift</strong> dan tekan volume naik/turun. Setiap tekanan menyesuaikan seperempat langkah normal, memberi Anda <strong>64 level</strong>. Kontrol 4x lebih halus ini memudahkan menemukan volume yang tepat.</p>

<h2>Masalah lebih dalam: satu slider untuk semuanya</h2>

<p>Bahkan dengan 64 level, Anda masih punya satu slider yang mengontrol semua aplikasi. Sumber audio berbeda butuh volume berbeda.</p>

<h2>Volume per-aplikasi untuk kontrol presisi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi slider volume sendiri dengan <strong>increment 1%</strong> dari 0% hingga 200%.</p>

<img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% precision on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<ul>
  <li><strong>Spotify:</strong> 35% — level background nyaman</li>
  <li><strong>Slack:</strong> 12% — ping notifikasi halus</li>
  <li><strong>Zoom:</strong> 85% — audio panggilan jelas</li>
  <li><strong>Safari:</strong> 45% — pemutaran video sedang</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Masalah Volume Slack Huddle di Mac: Terlalu Pelan, Terlalu Keras, atau Berebut dengan Musik",
    description: "Slack huddle bersaing dengan musik dan notifikasi Anda untuk volume yang sama. Ini cara mengontrol audio huddle secara independen di Mac.",
    date: "2026-03-10",
    readTime: "5 menit baca",
    content: `
<p>Slack huddle nyaman — klik tombol dan Anda dalam panggilan suara. Tapi audionya berantakan. Huddle di volume yang sama dengan Spotify. Suara notifikasi Slack ping di level yang sama dengan panggilan.</p>

<p>Masalahnya bukan Slack. Itu macOS. Semuanya berjalan melalui satu slider volume.</p>

<h2>Tiga masalah audio Slack</h2>
<h3>1. Huddle terlalu pelan dibanding musik</h3>
<h3>2. Suara notifikasi saat huddle</h3>
<h3>3. Huddle terlalu keras untuk mendengarkan di background</h3>

<h2>Solusi: kontrol volume Slack secara independen</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi Slack slider volume sendiri, terpisah dari aplikasi lain.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling Slack volume independently during a huddle while music plays at a different level" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Setup huddle:</strong> Slack 90-100%, Spotify 15%, Browser bisukan</p>
<p><strong>Setup huddle pasif:</strong> Slack 30%, Spotify 40%, Browser 50%</p>

<p>Simpan sebagai profil. Atau gunakan <strong>auto-ducking</strong> — saat huddle mengaktifkan mic, SoundDial otomatis menurunkan semuanya kecuali Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Cara Mengatur Volume Default untuk Aplikasi Baru di Mac",
    description: "Aplikasi baru diluncurkan di volume penuh secara default. Ini cara membuat setiap aplikasi baru mulai di level nyaman.",
    date: "2026-03-12",
    readTime: "3 menit baca",
    content: `
<p>Anda menginstal aplikasi baru. Pertama kali diluncurkan. Langsung memutar audio — di volume sistem penuh. Headphone terpasang. Telinga Anda berdenging.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memiliki <strong>volume default yang dapat dikonfigurasi</strong> untuk aplikasi baru. Atur di pengaturan — misalnya 70%. Pertama kali aplikasi baru menghasilkan audio, SoundDial mengaturnya di 70% bukan 100%.</p>

<img src="/apps/sounddial.png" alt="SoundDial default volume setting — new apps start at a configured level instead of full blast" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Fitur <strong>memory volume</strong> akan mengingat level aplikasi itu untuk peluncuran berikutnya.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Suara Startup Mac Terlalu Keras? Cara Menonaktifkan atau Mengecilkan",
    description: "Bunyi startup Mac meledak di volume penuh setiap restart — terutama memalukan di rapat dan ruangan sunyi. Ini cara mengontrolnya.",
    date: "2026-03-15",
    readTime: "4 menit baca",
    content: `
<p>Restart Mac di kantor sunyi. <em>BONG</em> — bunyi startup di volume penuh. Semua orang melihat Anda.</p>

<h2>Cara menonaktifkan suara startup</h2>
<ol>
  <li>Buka <strong>System Settings → Sound</strong></li>
  <li>Cari <strong>"Play sound on startup"</strong></li>
  <li>Hapus centang</li>
</ol>

<p>Tersedia sejak macOS Big Sur. Terminal: <code>sudo nvram StartupMute=%01</code></p>

<h2>Masalah kontrol suara Mac yang lebih luas</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi di Mac slider volume sendiri. Simpan konfigurasi sebagai profil dan ganti dengan satu klik.</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for managing all Mac audio sources independently" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Volume Cisco Webex Terlalu Pelan di Mac? Cara Memperbaiki",
    description: "Panggilan Webex hampir tidak terdengar di Mac Anda. Ini semua perbaikan — dari pengaturan audio hingga boost volume melampaui 100%.",
    date: "2026-03-18",
    readTime: "5 menit baca",
    content: `
<p>Webex adalah salah satu alat konferensi video paling banyak digunakan di lingkungan korporat — dan paling banyak dikeluhkan untuk kualitas audio di Mac.</p>

<p>Periksa pengaturan audio Webex, output macOS, codec Bluetooth, pengaturan noise removal, masalah IT/admin.</p>

<h2>Boost Webex melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memungkinkan Anda boost Webex ke <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Cisco Webex call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Cara Mendengarkan Dua Hal Sekaligus di Mac Tanpa Gila",
    description: "Musik dan podcast. Kuliah dan video catatan. Panggilan dan musik latar. macOS memaksa Anda memilih satu volume — ini cara menyeimbangkannya.",
    date: "2026-03-20",
    readTime: "4 menit baca",
    content: `
<p>Anda ingin mendengarkan dua sumber audio sekaligus. macOS memberi satu slider untuk keduanya.</p>

<h2>Solusi: volume per-aplikasi dalam satu panel</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menempatkan setiap aplikasi dalam satu panel menu bar dengan slider volume independen.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing two audio sources at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Musik + Zoom:</strong> Zoom 100% | Spotify 20%</p>
<p><strong>Podcast + hujan:</strong> Podcast 70% | Hujan 15%</p>

<p>Simpan yang sering digunakan sebagai <strong>profil volume</strong>. Auto-ducking menangani skenario musik+panggilan secara otomatis.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Cara Menonton Film di Mac Tanpa Membangunkan Semua Orang",
    description: "Dialog tidak terdengar, lalu ledakan mengguncang dinding. Ini cara menjinakkan audio film untuk menonton malam hari di Mac.",
    date: "2026-03-22",
    readTime: "5 menit baca",
    content: `
<p>Jam 1 pagi. Menonton film di MacBook. Karakter berbisik — Anda menaikkan volume. Adegan kejar-kejaran dimulai — seluruh apartemen mendengar. Masalahnya adalah <strong>dynamic range</strong>.</p>

<h2>Perbaikan</h2>
<p>Gunakan "Reduce Loud Sounds" di layanan streaming. Gunakan headphone.</p>

<h2>Atur aplikasi streaming di volume spesifik</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memungkinkan setup menonton malam yang sempurna:</p>

<img src="/apps/sounddial.png" alt="SoundDial late-night movie setup — streaming app at moderate volume, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Profil film malam:</strong> Netflix 40-50%, Slack bisukan, Mail bisukan, iMessage bisukan</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Volume Mac Reset Setelah Sleep? Cara Menjaga Pengaturan Audio",
    description: "Setiap Mac bangun dari sleep, volume salah. Ini penyebab dan cara memperbaiki.",
    date: "2026-03-25",
    readTime: "5 menit baca",
    content: `
<p>Tutup lid MacBook. Buka nanti. Volume berubah. Bug macOS yang persisten.</p>

<p>Penyebab: perangkat output berubah saat sleep, Core Audio daemon restart, HDMI/DisplayPort reconnect, Bluetooth re-pairing.</p>

<h2>Lindungi balance audio dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> melindungi balance volume <em>per-aplikasi</em>. Fitur <strong>memory volume</strong> menyimpan dan memulihkan volume setiap aplikasi.</p>

<img src="/apps/sounddial.png" alt="SoundDial preserving per-app volume levels after Mac sleep and wake cycles" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Audio Mac untuk Produksi Musik: Kontrol DAW dan Komunikasi Terpisah",
    description: "Menggunakan Logic Pro atau Ableton sambil di panggilan Discord? Ini cara mendengar DAW dengan jelas sambil menjaga voice chat di level nyaman.",
    date: "2026-03-28",
    readTime: "5 menit baca",
    content: `
<p>Produksi musik membutuhkan <strong>level monitoring yang akurat</strong>. Aplikasi komunikasi, notifikasi mengganggu — tapi Anda sering membutuhkannya untuk kolaborasi remote.</p>

<h2>Volume per-aplikasi untuk produksi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mengatur volume tepat untuk setiap aplikasi:</p>

<img src="/apps/sounddial.png" alt="SoundDial separating DAW output from Discord and reference tracks on macOS for music production" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100%</li>
  <li><strong>Discord:</strong> 40-60%</li>
  <li><strong>Spotify / referensi:</strong> 80%</li>
  <li><strong>Slack / notifikasi:</strong> bisukan</li>
</ul>

<p>SoundDial menggunakan Core Audio Tap API — latensi tidak terasa untuk monitoring.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Volume Apple Music Terlalu Pelan di Mac? Cara Memperbaiki dan Boost",
    description: "Apple Music di volume max tapi masih pelan? Periksa Sound Check, pengaturan EQ, dan cara boost Apple Music melampaui 100%.",
    date: "2026-03-30",
    readTime: "5 menit baca",
    content: `
<p>Apple Music di volume penuh. Mac di volume penuh. Masih pelan. Pindah ke Spotify — lagu yang sama — lebih keras.</p>

<p>Periksa Sound Check (matikan untuk volume lebih keras), EQ (set "Off"), Lossless Audio, Headphone Safety.</p>

<h2>Boost Apple Music melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boost Apple Music ke <strong>200%</strong>. Hanya Apple Music yang lebih keras — aplikasi lain tetap di level saat ini.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Apple Music volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Volume Mixer Gratis untuk Mac: Apa yang Sebenarnya Anda Dapat (dan Tidak Dapat)",
    description: "Mencari volume mixer gratis per-aplikasi untuk Mac? Ini analisis jujur tentang opsi gratis, kekurangannya, dan kapan layak membayar.",
    date: "2026-04-03",
    readTime: "6 menit baca",
    content: `
<p>Hasil utama pencarian "free volume mixer for Mac": <strong>Background Music</strong>. Satu-satunya aplikasi gratis open-source yang notable.</p>

<h2>Background Music: opsi gratis</h2>
<p>Slider per-aplikasi, auto-pause musik. Tapi: tidak ada boost 200%, profil, auto-ducking, memory volume, shortcut keyboard. Masalah terbesar: menginstal <strong>driver audio virtual</strong> yang rusak setiap update macOS.</p>

<h2>Kapan layak membayar</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> €14.99 — sekali beli. Kurang dari setengah harga SoundSource ($39), termasuk profil dan auto-ducking.</p>

<img src="/apps/sounddial.png" alt="SoundDial — reliable per-app volume mixer for Mac with profiles, auto-ducking, and 200% boost" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Di <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — review Apple, sandbox. €14.99, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Cara Menyeimbangkan Volume Musik dan Voice Chat di Mac",
    description: "Musik terlalu keras di Discord. Atau panggilan terlalu pelan di bawah Spotify. Ini cara mengatur rasio sempurna.",
    date: "2026-04-05",
    readTime: "4 menit baca",
    content: `
<p>Anda ingin mendengarkan musik sambil bicara dengan teman di Discord. macOS memaksakan satu volume untuk keduanya.</p>

<h2>Solusi: volume per-aplikasi independen</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menempatkan Spotify dan Discord dalam satu panel dengan slider independen.</p>

<img src="/apps/sounddial.png" alt="SoundDial balancing Spotify and Discord at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Voice chat 85-100%</strong> — selalu jelas terdengar. <strong>Musik 20-35%</strong> — hadir tanpa bersaing.</p>

<p>Simpan sebagai profil. Auto-ducking menangani otomatis saat panggilan masuk.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Kontrol Volume Mac: Panduan Lengkap (2026)",
    description: "Semua yang perlu Anda ketahui tentang mengontrol audio di macOS — dari shortcut keyboard dasar hingga volume per-aplikasi dan otomatisasi.",
    date: "2026-06-12",
    readTime: "12 menit baca",
    content: `
<p>macOS memberi Anda slider volume dan tombol mute. Tapi Mac sebenarnya memiliki kemampuan audio yang jauh lebih banyak. Ini panduan lengkap.</p>

<h2>Bagian 1: Kontrol volume bawaan</h2>
<p>16 langkah. <strong>Option + Shift</strong> = 64 level. <strong>Shift</strong> = tanpa suara "pop".</p>

<h2>Bagian 2: Manajemen perangkat output</h2>
<p><strong>Option</strong> + klik ikon Sound = daftar perangkat, ganti instan.</p>

<h2>Bagian 3: Volume alert</h2>
<p>System Settings → Sound → Alert volume. Hanya untuk suara sistem, bukan aplikasi pihak ketiga.</p>

<h2>Bagian 4-5: Headphone, apa yang tidak bisa macOS</h2>
<p>Tidak ada volume per-aplikasi, boost, profil, auto-ducking, memory.</p>

<h2>Bagian 6: Volume per-aplikasi dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mengisi semua kekurangan:</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume control, profiles, auto-ducking, and 200% boost for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>0-200% per aplikasi, mute, profil, auto-ducking, memory, shortcut keyboard. Core Audio Tap API — tanpa driver. <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99, macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Volume VLC Terlalu Pelan di Mac? Cara Boost Melampaui 200%",
    description: "VLC di volume max tapi video masih pelan? VLC punya boost 200% bawaan — dan Anda bisa menumpuknya dengan mixer per-aplikasi.",
    date: "2026-04-08",
    readTime: "4 menit baca",
    content: `
<p>VLC bisa melampaui 100% bawaan. Scroll mouse, <strong>Command + Panah Atas</strong>, atau Audio → Increase Volume.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menambah 0-200% di level sistem. VLC 200% × SoundDial 200% = amplifikasi efektif 400%.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting VLC volume at the system level on macOS for quiet video files" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Cara Menonaktifkan Audio Ducking di Mac (atau Mengontrolnya Sendiri)",
    description: "macOS atau aplikasi Anda terus mengecilkan musik saat panggilan. Ini cara menghentikan atau menggantinya dengan ducking yang Anda kontrol.",
    date: "2026-04-10",
    readTime: "5 menit baca",
    content: `
<p>Join Zoom. Musik turun hampir nol. Ini <strong>audio ducking</strong>: otomatis mengecilkan audio latar saat panggilan aktif.</p>

<p>macOS sendiri <strong>tidak</strong> memiliki fitur ducking bawaan. Penyebabnya bisa Zoom, switching codec Bluetooth, atau aplikasi pihak ketiga.</p>

<h2>Ganti ducking buruk dengan ducking bagus</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memiliki auto-ducking yang Anda kontrol: level duck bisa dikonfigurasi (10-80%), deteksi via mic, pemulihan sempurna.</p>

<img src="/apps/sounddial.png" alt="SoundDial configurable auto-ducking — control exactly how much background audio is lowered during calls" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Headphone Bluetooth Terlalu Pelan di Mac? Semua Perbaikan yang Berhasil",
    description: "Headphone Bluetooth Anda baik di ponsel tapi pelan di Mac. Ini semua penyebab dan cara memperbaiki.",
    date: "2026-04-12",
    readTime: "6 menit baca",
    content: `
<p>Headphone Bluetooth cukup keras di ponsel. Di Mac — semuanya lebih pelan.</p>

<p>Periksa: Headphone Safety, codec Bluetooth, aktivasi SCO mic, sinkronisasi volume Bluetooth, kualitas koneksi, headphone itu sendiri.</p>

<h2>Masih pelan? Boost melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boost aplikasi apa pun ke <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting app volume for Bluetooth headphones on Mac with per-app sliders to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Audio Mac untuk OBS dan Streaming: Cara Mengontrol Apa yang Penonton Dengar",
    description: "Streaming di Mac dengan OBS? Penonton mendengar semuanya di volume yang sama. Ini cara menyeimbangkan sumber audio.",
    date: "2026-04-15",
    readTime: "7 menit baca",
    content: `
<p>Streaming di Mac dengan OBS. Game, Discord, Spotify, alert — semuanya di volume yang sama untuk penonton.</p>

<h2>Pendekatan simpel: kontrol level sebelum OBS menangkap</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mengatur setiap aplikasi di level yang Anda ingin penonton dengar:</p>

<img src="/apps/sounddial.png" alt="SoundDial balancing game, Discord, and music audio levels for OBS streaming on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Game:</strong> 50%, <strong>Discord:</strong> 80%, <strong>Spotify:</strong> 15%, <strong>Alert:</strong> 40%, <strong>Slack:</strong> bisukan</p>

<p>Simpan sebagai profil "Streaming". Tanpa virtual audio device. Audio Tap API native Apple.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Cara Membuat Mac Mengingat Volume Per Aplikasi",
    description: "Setiap restart Spotify atau buka ulang Zoom, harus menyesuaikan lagi. Ini cara macOS mengingat volume setiap aplikasi secara otomatis.",
    date: "2026-04-18",
    readTime: "4 menit baca",
    content: `
<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memiliki <strong>Volume Memory</strong>. Menyimpan volume setiap aplikasi berdasarkan bundle ID. Saat aplikasi diluncurkan ulang, SoundDial mengembalikan volume yang tersimpan.</p>

<img src="/apps/sounddial.png" alt="SoundDial volume memory — automatically remembers and restores per-app volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Mengingat: level volume tepat (0-200%), status mute, setiap aplikasi independen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Volume Podcast Terlalu Pelan di Mac? Cara Membuatnya Lebih Keras",
    description: "Beberapa podcast sangat pelan di Mac bahkan di volume max. Ini penyebabnya — dan cara boost melampaui 100%.",
    date: "2026-04-20",
    readTime: "5 menit baca",
    content: `
<p>Host terdengar baik, tapi tamu merekam dari mic laptop di dapur — hampir tidak terdengar.</p>

<h2>Perbaikan: boost aplikasi podcast melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi slider hingga <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Apple Podcasts volume to 180% on Mac for quiet podcast episodes" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Setup Audio Mac untuk Kelas Online dan Kuliah",
    description: "Menonton kuliah sambil mencatat, Google referensi, dan chat teman sekelas — semuanya di volume berbeda.",
    date: "2026-04-22",
    readTime: "5 menit baca",
    content: `
<p>Mahasiswa menghadiri kuliah online di Zoom. YouTube tutorial di tab lain. Teman sekelas di Discord. Spotify memutar lo-fi. macOS memperlakukan semuanya sebagai satu volume.</p>

<h2>Setup audio per-aplikasi untuk belajar</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>:</p>

<img src="/apps/sounddial.png" alt="SoundDial student setup — lecture at full volume, study music low, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Profil Kuliah:</strong> Zoom 100%, Spotify 15%, Discord 10%</p>
<p><strong>Profil Belajar Mandiri:</strong> Spotify 50%, Browser 70%, Discord 20%</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Suara Mac Tidak Berfungsi Setelah Update? Panduan Perbaikan Lengkap",
    description: "Update macOS dan sekarang suara hilang, crackling, atau terjebak di volume salah. Ini semua perbaikan.",
    date: "2026-04-25",
    readTime: "7 menit baca",
    content: `
<p>Update macOS. Tidak ada suara. Atau crackling. Atau volume terjebak.</p>

<p>Langkah: periksa mute/output/Headphone Safety, restart Core Audio (<code>sudo killall coreaudiod</code>), reset NVRAM, periksa konflik driver pihak ketiga, Safe Mode, akun pengguna baru.</p>

<h2>Pencegahan dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menggunakan Core Audio Tap API native — tidak menginstal driver sistem, tidak rusak saat update macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Cara Membisukan Semua Aplikasi Sekaligus di Mac (dan Mengembalikannya Sempurna)",
    description: "Butuh hening instan? Tombol mute membisukan semuanya — tapi unmute mereset volume yang sudah diatur. Ini cara yang lebih baik.",
    date: "2026-04-28",
    readTime: "4 menit baca",
    content: `
<p>Seseorang masuk ruangan. Butuh hening instan. Tekan mute. Unmute — tapi level individual hilang.</p>

<h2>Mute yang lebih cerdas: ⌃⌥M</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>: <strong>⌃⌥M</strong> membisukan setiap aplikasi secara individual (status tersimpan). Tekan lagi — setiap aplikasi kembali ke <strong>tepat</strong> level sebelumnya.</p>

<img src="/apps/sounddial.png" alt="SoundDial mute-all shortcut — Control+Option+M to mute and unmute all apps with volume restore" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Volume Google Meet Terlalu Pelan di Mac? Cara Memperbaiki",
    description: "Suara di Google Meet hampir tidak terdengar. Ini mengapa Meet berjalan via Chrome dan cara boost-nya.",
    date: "2026-05-01",
    readTime: "5 menit baca",
    content: `
<p>Google Meet berjalan di browser. Audio Meet adalah bagian dari stream Chrome/Safari.</p>

<p>Periksa pengaturan audio Meet, tab tidak di-mute, output macOS, codec Bluetooth.</p>

<h2>Boost Google Meet (Chrome) melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi Chrome slider hingga <strong>200%</strong>. Boost Chrome = boost Meet.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Google Meet (Chrome) volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Cara Mengatur Volume Alert Mac Terpisah dari Volume Media",
    description: "macOS punya slider alert tersembunyi, tapi hanya untuk suara sistem. Ini cara benar-benar memisahkan volume notifikasi dan media.",
    date: "2026-05-02",
    readTime: "5 menit baca",
    content: `
<p>Musik di level sempurna. Alert macOS menyala — menyakitkan keras dibanding musik.</p>

<p>macOS punya slider "Alert volume" (System Settings → Sound), tapi hanya untuk suara sistem — <strong>tidak</strong> untuk Slack, Discord, Teams.</p>

<h2>Solusi: volume per-aplikasi untuk aplikasi notifikasi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi slider sendiri. Slack 15%, Discord 20%, Mail 10% — sambil Spotify tetap 50%.</p>

<img src="/apps/sounddial.png" alt="SoundDial separating notification app volume from media app volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Volume Panggilan FaceTime Terlalu Pelan di Mac? Cara Memperbaiki",
    description: "FaceTime hampir tidak terdengar di Mac bahkan di volume penuh. Ini semua perbaikan — hingga boost melampaui 100%.",
    date: "2026-05-04",
    readTime: "5 menit baca",
    content: `
<p>FaceTime di iPhone baik. Di Mac, lawan bicara seperti berbisik dari jauh.</p>

<p>Periksa output, pengaturan audio FaceTime, AirPods auto-switching, codec Bluetooth, Headphone Safety, reset Core Audio.</p>

<h2>Boost FaceTime melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boost FaceTime ke <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting FaceTime call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Shortcut Keyboard Volume Mac yang Mungkin Belum Anda Tahu",
    description: "Di luar tombol volume dasar — kontrol halus, mute aplikasi tertentu, dan shortcut volume per-aplikasi.",
    date: "2026-05-06",
    readTime: "5 menit baca",
    content: `
<h2>Shortcut bawaan</h2>
<ul>
  <li><strong>Option + Shift + Volume:</strong> 64 level</li>
  <li><strong>Shift + Volume:</strong> tanpa suara "pop"</li>
  <li><strong>Option + Tombol volume:</strong> buka Sound Settings</li>
  <li><strong>Option + Klik ikon Sound:</strong> daftar perangkat</li>
</ul>

<h2>Shortcut SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menambahkan:</p>
<ul>
  <li><strong>⌃⌥S</strong> — toggle mixer</li>
  <li><strong>⌃⌥M</strong> — mute semua (dan unmute dengan level tersimpan)</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial keyboard shortcuts — Control+Option+S to toggle, Control+Option+M to mute all" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Aplikasi Background Music Tidak Berfungsi di macOS? Coba Alternatif Ini",
    description: "Background Music berhenti berfungsi setelah update macOS? Ini mengapa rusak dan alternatif terbaik 2026.",
    date: "2026-06-08",
    readTime: "5 menit baca",
    content: `
<p>Background Music rusak setelah hampir setiap update macOS karena menggunakan <strong>driver audio virtual</strong>.</p>

<h2>Alternatif tanpa audio device virtual</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menggunakan Audio Tap API — tanpa driver, tidak rusak saat update macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial — a Background Music alternative that doesn't install virtual audio devices" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Dibanding Background Music: boost 200%, profil, auto-ducking, memory volume, shortcut keyboard, development aktif.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "Alternatif SoundSource: Kontrol Volume Per-Aplikasi yang Lebih Ringan dan Murah untuk Mac",
    description: "SoundSource kuat tapi mahal dan kompleks. Jika Anda hanya butuh volume per-aplikasi, ini alternatifnya.",
    date: "2026-06-06",
    readTime: "6 menit baca",
    content: `
<p>SoundSource $39, butuh driver sistem (ACE), banyak fitur yang tidak dibutuhkan kebanyakan orang. Tidak ada profil atau auto-ducking.</p>

<h2>SoundDial: fokus pada kebutuhan nyata</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>: volume per-aplikasi (0-200%), profil, auto-ducking, tanpa driver sistem. €14.99.</p>

<img src="/apps/sounddial.png" alt="SoundDial — a lighter, focused SoundSource alternative with volume profiles and auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Pilih SoundSource jika butuh EQ per-aplikasi atau routing. Pilih <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> jika ingin kontrol volume dengan profil dan auto-ducking, lebih ringan, lebih murah.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Volume Mac Terlalu Keras di Setting Terendah? Cara Lebih Pelan Lagi",
    description: "Bahkan di notch terendah, Mac masih terlalu keras — terutama malam hari dengan headphone. Ini cara mendapat kontrol lebih halus.",
    date: "2026-05-08",
    readTime: "5 menit baca",
    content: `
<p>Tengah malam. Headphone. Level terendah — masih terlalu keras. Langkah berikutnya mute. Tidak ada di antaranya.</p>

<h2>Perbaikan bawaan: Option + Shift</h2>
<p>64 level bukan 16. Tiga level tambahan antara "satu bar" dan "mute".</p>

<h2>Solusi nyata: volume per-aplikasi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — slider 1% dari 0% hingga 200%. Set sistem di 40-50%, lalu fine-tune: Spotify 8%, browser 15%, notifikasi mute.</p>

<img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% increments on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Satu AirPod Lebih Keras dari yang Lain? Semua Perbaikan Dijelaskan",
    description: "AirPod kiri lebih pelan dari kanan (atau sebaliknya). Ini semua penyebab — dari kotoran telinga hingga pengaturan balance macOS.",
    date: "2026-05-10",
    readTime: "5 menit baca",
    content: `
<h2>1. Bersihkan AirPods</h2>
<p>Sikat bulu lembut, kering. Jangan gunakan air, alkohol, udara bertekanan.</p>

<h2>2. Periksa balance audio macOS</h2>
<p>System Settings → Accessibility → Audio → Balance. Pastikan di tengah.</p>

<h2>3. Reset AirPods</h2>
<p>Masukkan case, tutup 30 detik, buka, tahan tombol setup 15 detik.</p>

<h2>4-6. Mono Audio, gangguan Bluetooth, masalah hardware</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membantu mengatur setiap aplikasi di level konsisten, mengurangi lonjakan volume tak terduga.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Audio Netflix dan Streaming Terlalu Pelan di Mac? Cara Memperbaiki",
    description: "Dialog berbisik pelan, lalu ledakan mengguncang ruangan. Ini cara memperbaiki level audio streaming di Mac.",
    date: "2026-05-17",
    readTime: "5 menit baca",
    content: `
<p>Film di Netflix — dialog pelan, aksi memekakkan. Masalahnya dynamic range dan speaker MacBook kecil.</p>

<p>Aktifkan "Reduce Loud Sounds", gunakan headphone, atau boost audio streaming melampaui 100%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boost aplikasi apa pun ke <strong>200%</strong>. Boost Netflix tanpa membuat Spotify atau Slack lebih keras.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Netflix audio to 180% on Mac for clearer dialog and streaming audio" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Setup Audio Mac untuk Kerja Remote: Panduan Lengkap",
    description: "Panggilan, musik, notifikasi, dan waktu fokus — semua di satu Mac. Ini cara mengatur audio Anda.",
    date: "2026-05-12",
    readTime: "8 menit baca",
    content: `
<p>Kerja remote: Mac secara bersamaan adalah telepon kantor, radio, pusat notifikasi, dan stasiun deep work. macOS memperlakukan semuanya sama: satu slider.</p>

<h2>Empat mode audio</h2>
<p>Meeting, fokus, kolaboratif, istirahat.</p>

<h2>Setup dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi slider:</p>

<img src="/apps/sounddial.png" alt="SoundDial remote work audio setup — different volume levels for Zoom, Spotify, and Slack on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Meeting:</strong> Zoom 100%, Spotify mute, Slack mute</p>
<p><strong>Fokus:</strong> Spotify 30%, Slack 10%, Zoom 80%</p>
<p><strong>Kolaboratif:</strong> Semuanya 50-70%</p>

<p>Ganti profil dengan satu klik. Auto-ducking menangani panggilan otomatis.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Cara Menghentikan Tab Browser dari Auto-Play Audio di Mac",
    description: "Tab background mulai memutar audio. Iklan, video, situs berita — ini cara membisukan tab nakal dan mengontrol audio browser.",
    date: "2026-05-14",
    readTime: "5 menit baca",
    content: `
<p>Dua puluh tab terbuka. Tiba-tiba — audio dari entah mana.</p>

<p>Safari: Settings → Websites → Auto-Play → "Never Auto-Play". Chrome: <code>chrome://settings/content/sound</code>.</p>

<h2>Kontrol audio browser</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi browser slider sendiri. Turunkan Safari ke 30% sambil Zoom tetap 100%. Mute Chrome sambil Spotify tetap putar.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling browser volume independently from other apps on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Volume Discord Terlalu Keras (atau Pelan) di Mac? Cara Memperbaiki",
    description: "Discord meledak di atas game, atau terlalu pelan untuk mendengar rekan tim. Ini cara mengontrol volume Discord secara independen di macOS.",
    date: "2026-05-21",
    readTime: "5 menit baca",
    content: `
<p>Discord punya dua masalah volume di Mac. macOS tidak mengizinkan penyesuaian Discord secara independen.</p>

<h2>Perbaiki dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi Discord slider sendiri.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling Discord volume independently from game and music on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Gaming:</strong> Discord 100%, Game 40%, Spotify 15%</p>
<p><strong>Hangout:</strong> Discord 80%, YouTube 60%</p>
<p><strong>Fokus:</strong> Discord mute, Spotify 50%</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Cara Mengganti Output Audio dengan Cepat di Mac",
    description: "Mengganti antara speaker, headphone, dan monitor di Mac butuh terlalu banyak klik. Ini cara lebih cepat.",
    date: "2026-05-19",
    readTime: "5 menit baca",
    content: `
<h2>Metode 1: Option-klik ikon volume</h2>
<p>Tercepat bawaan. Daftar perangkat output, klik untuk mengganti.</p>

<h2>Metode 2: SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menyertakan pemilih perangkat langsung di panel menu bar — bersama slider volume per-aplikasi.</p>

<img src="/apps/sounddial.png" alt="SoundDial with audio output device switching and per-app volume control in one menu bar panel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ganti perangkat <em>dan</em> atur volume di panel yang sama. Dengan <strong>volume memory</strong>, setiap perangkat mengingat balance-nya sendiri.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Perbaiki Audio Crackling dan Popping di Mac: Panduan Lengkap",
    description: "Audio Mac crackling, pop, atau stutter — saat musik, panggilan, atau pemutaran video. Ini semua penyebab dan perbaikan.",
    date: "2026-05-16",
    readTime: "8 menit baca",
    content: `
<p>Mendengarkan musik — pop. Crackle. Stutter. Bukan lagunya — itu Mac Anda. Setidaknya enam penyebab.</p>

<p>1. Restart Core Audio (<code>sudo killall coreaudiod</code>). 2. Overload CPU. 3. Masalah Bluetooth. 4. Sample rate mismatch. 5. Masalah buffer USB. 6. Regresi update macOS. 7. Kernel extension atau audio plugin.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> membantu mengelola audio — mute aplikasi tak digunakan, boost per-aplikasi daripada sistem max, ganti perangkat cepat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Volume Microsoft Teams Terlalu Pelan di Mac? Semua Perbaikan yang Berhasil",
    description: "Hampir tidak bisa mendengar orang di Teams bahkan di volume max? Ini semua penyebab — dan cara boost audio panggilan melampaui 100%.",
    date: "2026-06-04",
    readTime: "7 menit baca",
    content: `
<p>Volume rendah di Teams adalah keluhan Mac paling umum di lingkungan korporat.</p>

<p>Periksa pengaturan audio Teams, New vs Classic Teams, codec Bluetooth, output macOS, reset Core Audio.</p>

<h2>Boost Teams melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boost aplikasi apa pun ke <strong>200%</strong>, termasuk Teams.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Microsoft Teams call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, tanpa langganan, macOS 14.2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Cara Mengontrol Volume Per-Aplikasi di Mac",
    description: "macOS memberi satu slider volume. Ini cara mendapat kontrol volume individual untuk setiap aplikasi — dan mengapa itu lebih penting dari yang Anda kira.",
    date: "2026-05-20",
    readTime: "7 menit baca",
    content: `
<p>Windows punya volume mixer sejak 2006. macOS masih belum. Ini cara mendapat kontrol volume per-aplikasi.</p>

<h2>Apa arti volume per-aplikasi</h2>
<p>Setiap aplikasi punya slider independen. Spotify 30%, Zoom 100%, Slack mute, Safari 50%.</p>

<h2>Siapa yang membutuhkan</h2>
<p>Pekerja remote, streamer, musisi, gamer, siapa saja dengan banyak sumber audio.</p>

<h2>SoundDial</h2>

<p>Saya membangun <strong>SoundDial</strong> karena volume mixer Mac yang saya inginkan tidak ada. Di menu bar, setiap aplikasi punya slider. Mute per-aplikasi, boost, profil, auto-ducking. Pembelian sekali, macOS 14+.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Cara Membisukan Slack di Mac Tanpa Membisukan Semuanya",
    description: "Notifikasi Slack terus mengganggu fokus, tapi Anda tidak ingin membisukan musik atau panggilan. Ini cara membisukan hanya Slack.",
    date: "2026-05-24",
    readTime: "5 menit baca",
    content: `
<p>Sedang fokus. Spotify memutar playlist sempurna. Lalu — Slack ping. Dan lagi. macOS: mute semuanya atau tidak sama sekali.</p>

<h2>Solusi: volume per-aplikasi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi Slack slider independen. Set 10-15% atau mute sepenuhnya.</p>

<img src="/apps/sounddial.png" alt="SoundDial with Slack muted and Spotify playing at normal volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Fokus:</strong> Slack 10%, Spotify 40%</p>
<p><strong>Available:</strong> Slack 40%</p>
<p><strong>Meeting:</strong> Slack mute, Zoom 100%</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Cara Mengatur Profil Volume untuk Situasi Berbeda di Mac",
    description: "Setup volume berbeda untuk rapat, fokus, gaming, dan santai — ganti dengan satu klik.",
    date: "2026-06-02",
    readTime: "5 menit baca",
    content: `
<p>Setiap situasi punya konfigurasi volume ideal yang berbeda. Profil volume memungkinkan menyimpan dan mengganti dengan satu klik.</p>

<h2>Setup profil dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memiliki sistem profil bawaan. Atur volume, simpan sebagai profil dengan nama dan ikon.</p>

<img src="/apps/sounddial.png" alt="SoundDial volume profiles — one-click switching between Meeting, Focus, and Chill modes on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Meeting:</strong> Zoom 100%, Spotify mute, Slack mute</p>
<p><strong>Fokus:</strong> Spotify 35%, Slack 10%</p>
<p><strong>Gaming:</strong> Game 60%, Discord 100%, Spotify 20%</p>
<p><strong>Santai:</strong> Spotify 70%, Browser 60%</p>

<p>Kombinasikan dengan auto-ducking = sepenuhnya otomatis.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Volume Panggilan Zoom Terlalu Pelan di Mac? Cara Boost",
    description: "Hampir tidak bisa mendengar orang di Zoom bahkan di volume max. Ini semua perbaikan — hingga boost melampaui 100%.",
    date: "2026-05-26",
    readTime: "6 menit baca",
    content: `
<p>Di panggilan Zoom. Volume max. Masih pelan.</p>

<p>Periksa pengaturan audio Zoom, output macOS, matikan penyesuaian otomatis, kurangi noise suppression, codec Bluetooth, reset Core Audio.</p>

<h2>Boost Zoom melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boost Zoom ke <strong>200%</strong>. Hanya Zoom lebih keras, yang lain tetap.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Zoom call volume to 180% on Mac for clearer audio during video calls" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Bekerja dengan Teams, Meet, FaceTime, Discord, Slack, Webex, Skype.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Cara Mengecilkan Spotify Tanpa Mengecilkan Semuanya di Mac",
    description: "Anda ingin Spotify sebagai musik latar, tapi mengecilkan dengan tombol volume membuat panggilan dan semuanya juga pelan. Ini solusinya.",
    date: "2026-05-30",
    readTime: "4 menit baca",
    content: `
<p>Spotify agak terlalu keras. Tekan tombol turun. Semuanya mengecil. Bukan yang Anda mau.</p>

<h2>Solusi: volume per-aplikasi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>: klik ikon menu bar, temukan Spotify, geser slider. Selesai. Zoom tidak berubah.</p>

<img src="/apps/sounddial.png" alt="SoundDial lowering Spotify volume independently while keeping other apps at full volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Simpan sebagai profil "Kerja". Auto-ducking otomatis mengecilkan Spotify saat panggilan dimulai.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Apakah macOS Tahoe Punya Kontrol Volume Per-Aplikasi?",
    description: "macOS Tahoe (macOS 26) membawa update besar, tapi apakah Apple akhirnya menambah volume mixer? Ini jawabannya.",
    date: "2026-06-12",
    readTime: "4 menit baca",
    content: `
<h2>Jawaban singkat: tidak</h2>

<p>macOS Tahoe tidak menyertakan volume mixer bawaan. Tidak ada kontrol volume per-aplikasi di System Settings, Control Center, atau menu bar.</p>

<h2>Cara mendapat kontrol volume per-aplikasi di macOS Tahoe</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sepenuhnya kompatibel dengan macOS Tahoe, menggunakan Core Audio Tap API.</p>

<img src="/apps/sounddial.png" alt="SoundDial providing per-app volume control on macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<ul>
  <li>Slider 0-200% per aplikasi</li>
  <li>Mute per-aplikasi</li>
  <li>Profil volume</li>
  <li>Auto-ducking</li>
  <li>Boost volume melampaui 100%</li>
  <li>Memory volume</li>
  <li>Shortcut keyboard</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — pembelian sekali, macOS 14.2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Cara Memutar Musik di Speaker Sambil Panggilan di Headphone (Mac)",
    description: "Ingin Spotify di speaker meja dan Zoom di AirPods bersamaan? macOS tidak mudah — ini yang berhasil.",
    date: "2026-05-15",
    readTime: "5 menit baca",
    content: `
<p>macOS: saat memilih perangkat output, <em>semua</em> aplikasi menggunakannya. Tidak ada routing per-aplikasi bawaan.</p>

<h2>Pendekatan lebih simpel: pemisahan berbasis volume</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi slider. Zoom 100%, Spotify 20%. Panggilan jelas, musik latar halus.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing Zoom at full volume and Spotify lowered during a call on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Auto-ducking menangani otomatis saat panggilan mulai/berakhir.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Volume Mac Terus Berubah Sendiri: Cara Memperbaiki",
    description: "Volume Mac melompat naik, turun, atau reset ke level berbeda secara acak. Ini semua penyebab dan cara menghentikannya.",
    date: "2026-05-18",
    readTime: "6 menit baca",
    content: `
<p>Set volume nyaman. Kembali — sudah berubah. Penyebab: Bluetooth reconnect, HDMI/DisplayPort, aplikasi mengubah volume, tombol tak sengaja, Core Audio daemon, pengaturan Accessibility.</p>

<h2>Kunci volume per-aplikasi dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mengingat volume setiap aplikasi secara independen. Bahkan jika sistem berubah, balance aplikasi tetap.</p>

<img src="/apps/sounddial.png" alt="SoundDial remembering per-app volume levels across restarts on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Aplikasi Volume Mixer Terbaik untuk Mac di 2026",
    description: "Perbandingan jujur setiap aplikasi Mac untuk kontrol volume per-aplikasi. Fitur, harga, dan mana yang layak digunakan.",
    date: "2026-06-12",
    readTime: "10 menit baca",
    content: `
<p>macOS tidak punya volume mixer bawaan. Ini perbandingan opsi.</p>

<h2>SoundDial</h2>
<p>0-200%, mute, profil, auto-ducking, shortcut, memory volume. €14.99 sekali beli. Mac App Store. Tanpa driver.</p>

<img src="/apps/sounddial.png" alt="SoundDial per-app volume mixer showing individual app volume sliders on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>SoundSource</h2>
<p>Paling powerful. EQ per-app, routing. $39. Butuh driver sistem. Tanpa profil atau auto-ducking.</p>

<h2>Background Music</h2>
<p>Gratis. Dasar. Tanpa boost 200%, profil, auto-ducking. Rusak saat update macOS.</p>

<h2>Mana yang dipilih?</h2>
<ul>
  <li>Volume + profil + auto-ducking: <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a></li>
  <li>EQ + routing per-app: SoundSource</li>
  <li>Gratis dan dasar: Background Music</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube Terlalu Pelan di Safari atau Chrome di Mac? Perbaiki Instan",
    description: "Beberapa video YouTube hampir tidak terdengar di volume max. Ini mengapa audio browser sering lebih pelan — dan cara boost melampaui 100%.",
    date: "2026-05-22",
    readTime: "5 menit baca",
    content: `
<p>YouTube di volume max. Sistem max. Masih pelan. Buka Spotify — keras. Jadi bukan speaker. Itu videonya.</p>

<h2>Solusi: boost volume browser melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi Safari dan Chrome slider hingga <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Safari browser volume to 180% for quiet YouTube videos on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Instan. Per-aplikasi. Bekerja dengan browser apa pun. Hingga 200%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Suara Notifikasi Mac Terlalu Keras di Headphone? Ini Solusinya",
    description: "Slack ping dan alert macOS menyakitkan di headphone sementara musik baik-baik saja. Ini mengapa volume notifikasi berbeda — dan cara menjinakkannya.",
    date: "2026-05-25",
    readTime: "5 menit baca",
    content: `
<p>Pakai headphone, musik di 40%. Slack ping — <em>DING.</em> Memekakkan telinga dibanding musik.</p>

<p>macOS tidak mengizinkan kontrol volume notifikasi terpisah dari media.</p>

<h2>Solusi: kontrol volume aplikasi notifikasi secara independen</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi slider sendiri.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing Slack at low volume and Spotify at normal volume — independent notification control on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Spotify:</strong> 50%, <strong>Slack:</strong> 15%, <strong>Mail:</strong> 10%, <strong>Calendar:</strong> 20%, <strong>Zoom:</strong> 90%</p>

<p>Simpan sebagai profil "Headphone".</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Cara Menghentikan Zoom Mengecilkan Musik Anda di Mac",
    description: "Setiap kali join Zoom, musik turun atau hilang. Ini penyebabnya dan cara mengontrol sesuai keinginan Anda.",
    date: "2026-05-28",
    readTime: "6 menit baca",
    content: `
<p>Join Zoom. Spotify sedang putar nyaman. Panggilan terhubung — musik hilang. Penyebab: audio processing Zoom atau switching codec Bluetooth.</p>

<h2>Solusi: auto-ducking sesuai keinginan Anda</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> punya auto-ducking di mana <strong>Anda mengontrol level duck</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial auto-ducking settings — configurable volume reduction during Zoom calls on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Set level duck (10-80%). Join Zoom → latar mengecil. Selesai → kembali. Bekerja dengan semua aplikasi komunikasi.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Volume AirPods Terlalu Pelan di Mac? Semua Perbaikan Dijelaskan",
    description: "AirPods pelan di Mac bahkan di volume penuh? Ini semua penyebab — dari batas keamanan hingga Bluetooth — dan cara memperbaiki.",
    date: "2026-06-08",
    readTime: "7 menit baca",
    content: `
<p>AirPods cukup keras di iPhone. Di Mac — pelan. Enam penyebab yang mungkin.</p>

<p>1. Headphone Safety. 2. Volume Bluetooth tidak sinkron. 3. Codec SCO. 4. Satu AirPod lebih pelan. 5. Aplikasi output rendah. 6. Core Audio macet.</p>

<h2>Masih pelan? Boost melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boost aplikasi apa pun ke <strong>200%</strong> untuk AirPods.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting app volume for AirPods on Mac with per-app volume sliders up to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Volume Spotify Terlalu Pelan di Mac? Ini Semua Perbaikan",
    description: "Spotify di volume max tapi masih pelan? Panduan ini mencakup semua penyebab — dan cara boost melampaui 100%.",
    date: "2026-06-11",
    readTime: "7 menit baca",
    content: `
<p>Spotify max. Mac max. Masih tidak cukup keras.</p>

<p>Periksa slider Spotify, normalisasi volume (set "Loud" atau matikan), kualitas audio, Headphone Safety, Bluetooth, reset Core Audio.</p>

<h2>Boost Spotify melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boost Spotify ke <strong>200%</strong> — independen dari aplikasi lain.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Spotify volume to 200% on macOS while keeping other apps at normal volume" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Auto-ducking otomatis mengecilkan Spotify saat panggilan dimulai.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Cara Memisahkan Audio Game dari Discord di Mac",
    description: "Ledakan game menenggelamkan rekan tim di Discord? Ini cara mengontrol volume game dan voice chat secara independen di macOS.",
    date: "2026-06-10",
    readTime: "6 menit baca",
    content: `
<p>Gaming di Mac. Ledakan. Rekan tim Discord bicara — tidak terdengar. Kecilkan — Discord juga pelan. macOS tidak punya mixer bawaan.</p>

<h2>Solusi: volume per-aplikasi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi slider. Game 35%, Discord 100%.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing independent volume sliders for a game and Discord on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Game:</strong> 30-50%, <strong>Discord:</strong> 90-100%, <strong>Spotify:</strong> 15-25%, <strong>Browser:</strong> mute</p>

<p>Simpan sebagai profil "Gaming". Boost Discord ke <strong>200%</strong> jika rekan tim punya mic buruk.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Mengapa Mac Tidak Punya Volume Mixer Seperti Windows?",
    description: "Windows punya kontrol volume per-aplikasi sejak 2006. Ini 2026 dan macOS masih belum. Ini alasan sebenarnya — dan cara mendapatkannya.",
    date: "2026-06-09",
    readTime: "6 menit baca",
    content: `
<p>Setiap Windows sejak Vista (2006) punya volume mixer. macOS? Satu slider. Dua puluh tahun update dan Apple tidak pernah menambahkan.</p>

<h2>Bukan keterbatasan teknis</h2>
<p>Core Audio sepenuhnya mendukung. Apple memperkenalkan Audio Tap API di macOS 14. Apple membangun infrastruktur — hanya belum membangun UI-nya.</p>

<h2>Mengapa Apple belum membangun</h2>
<p>Apple memprioritaskan kesederhanaan. Satu slider lebih sederhana dari dua belas. Tapi "sederhana" berhenti menjadi sederhana saat Anda punya banyak sumber audio bersaing.</p>

<h2>Cara mendapat volume mixer sekarang</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — volume mixer macOS. Slider 0-200%, mute, profil, auto-ducking, shortcut, device switching, memory volume.</p>

<img src="/apps/sounddial.png" alt="SoundDial — the volume mixer for macOS, showing per-app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Fitur yang seharusnya Apple bangun dua puluh tahun lalu. <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — pembelian sekali, macOS 14.2+.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Volume Mac Terlalu Pelan? Cara Boost Suara Melampaui 100%",
    description: "Mac di volume penuh dan masih pelan. Ini penyebabnya dan cara amplifikasi audio hingga 200% tanpa speaker eksternal.",
    date: "2026-06-07",
    readTime: "8 menit baca",
    content: `
<p>Mac di 100%. Masih tidak cukup keras. Podcast pelan. Peserta panggilan berbisik. YouTube direkam terlalu pelan.</p>

<h2>Mengapa Mac pelan di volume penuh</h2>
<p>Konten sendiri pelan, speaker MacBook punya batas fisik, Bluetooth dibatasi, volume internal aplikasi rendah.</p>

<h2>Cara boost melampaui 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> memberi setiap aplikasi slider 0% hingga <strong>200%</strong>. Boost hanya aplikasi yang pelan tanpa mempengaruhi yang lain.</p>

<img src="/apps/sounddial.png" alt="SoundDial volume boost — per-app volume control with 200% amplification on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Berguna untuk podcast pelan, panggilan dengan mic buruk, tab browser, rekaman lama.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — pembelian sekali, macOS 14.2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Cara Otomatis Mengecilkan Musik Saat Panggilan Zoom di Mac",
    description: "Setiap Zoom dimulai, Anda panik pause Spotify. Ada cara lebih baik — auto-ducking mengecilkan musik otomatis saat mic aktif.",
    date: "2026-06-05",
    readTime: "7 menit baca",
    content: `
<p>Panggilan mulai. Berbagi layar. Musik masih keras. Buru-buru ke Spotify, pause — tapi semua sudah dengar.</p>

<h2>Apa itu audio ducking</h2>
<p>Otomatis mengecilkan audio latar saat ada sesuatu lebih penting — seperti panggilan suara.</p>

<h2>macOS tidak punya audio ducking bawaan</h2>

<h2>Auto-ducking dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> mendeteksi panggilan via status mic (titik oranye). Bekerja dengan Zoom, Teams, FaceTime, Discord, Slack, Meet, Webex, Skype.</p>

<img src="/apps/sounddial.png" alt="SoundDial auto-ducking feature automatically lowering music volume during a Zoom call on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Set level duck (10-80%). Panggilan mulai → latar mengecil. Selesai → kembali. Otomatis. Tanpa sentuh.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Cara Membisukan Satu Aplikasi di Mac Tanpa Membisukan Semuanya",
    description: "Slack ping. Anda di panggilan. Ingin mute Slack tapi tetap dengar panggilan. macOS tidak mengizinkan — ini caranya.",
    date: "2026-06-03",
    readTime: "6 menit baca",
    content: `
<p>Di panggilan Zoom. Slack ping terus. Tab YouTube mulai auto-play. Tekan mute — tidak dengar panggilan juga. macOS mute <em>semuanya</em>.</p>

<h2>Mengapa macOS tidak bisa mute aplikasi individual</h2>
<p>macOS memperlakukan audio sebagai satu stream. Tidak ada cara bawaan untuk membisukan satu aplikasi tanpa mempengaruhi sisanya.</p>

<h2>Solusi: tombol mute per-aplikasi</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — menu bar, setiap aplikasi punya slider dan tombol mute.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing per-app mute buttons for each application in the macOS menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Klik ikon speaker di samping aplikasi. Aplikasi itu di-mute. Yang lain tetap putar. Klik lagi — volume kembali tepat seperti sebelumnya.</p>

<p>Slider 0-200%, profil, auto-ducking.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 pembelian sekali, macOS 14.2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Volume Mixer untuk Mac: Fitur yang Hilang yang macOS Masih Belum Punya",
    description: "Windows punya volume mixer sejak 2006. Ini mengapa macOS masih belum — dan cara terbaik mendapat kontrol volume per-aplikasi di Mac 2026.",
    date: "2026-06-01",
    readTime: "9 menit baca",
    content: `
<p>Windows: klik kanan ikon speaker → Volume Mixer → setiap aplikasi punya slider sendiri. macOS: satu slider. Semuanya di level yang sama.</p>

<p>Ini fitur audio paling diminta di macOS, dan Apple mengabaikannya dua puluh tahun.</p>

<h2>Apa yang volume mixer lakukan</h2>
<p>Kontrol volume <strong>independen untuk setiap aplikasi</strong>. Spotify 25%, Zoom 100%, Slack mute, Safari 60%.</p>

<h2>Mengapa Apple belum membangun</h2>
<p>Filosofi desain: lebih sedikit opsi, interface lebih sederhana. Tapi "sederhana" berhenti menjadi sederhana saat Anda punya lima sumber audio bersaing.</p>

<h2>SoundDial: volume mixer yang seharusnya macOS punya</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> duduk di menu bar. Setiap aplikasi punya slider 0-200%. Mute satu klik. Profil. Auto-ducking. Shortcut keyboard. Device switching. Memory volume.</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume mixer for macOS showing individual app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Pembelian sekali. Tanpa langganan. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a>.</p>
`,
  },
};
