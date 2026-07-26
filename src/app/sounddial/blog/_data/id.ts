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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial podcasting setup — guest audio, monitoring, and notifications at independent levels" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% precision on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling Slack volume independently during a huddle while music plays at a different level" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial default volume setting — new apps start at a configured level instead of full blast" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for managing all Mac audio sources independently" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Cisco Webex call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing two audio sources at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial late-night movie setup — streaming app at moderate volume, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial preserving per-app volume levels after Mac sleep and wake cycles" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separating DAW output from Discord and reference tracks on macOS for music production" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Apple Music volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — reliable per-app volume mixer for Mac with profiles, auto-ducking, and 200% boost" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial balancing Spotify and Discord at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control, profiles, auto-ducking, and 200% boost for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting VLC volume at the system level on macOS for quiet video files" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial configurable auto-ducking — control exactly how much background audio is lowered during calls" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting app volume for Bluetooth headphones on Mac with per-app sliders to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial balancing game, Discord, and music audio levels for OBS streaming on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume memory — automatically remembers and restores per-app volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Apple Podcasts volume to 180% on Mac for quiet podcast episodes" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial student setup — lecture at full volume, study music low, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mute-all shortcut — Control+Option+M to mute and unmute all apps with volume restore" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Google Meet (Chrome) volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separating notification app volume from media app volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting FaceTime call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial keyboard shortcuts — Control+Option+S to toggle, Control+Option+M to mute all" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — a Background Music alternative that doesn't install virtual audio devices" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — a lighter, focused SoundSource alternative with volume profiles and auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% increments on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Netflix audio to 180% on Mac for clearer dialog and streaming audio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial remote work audio setup — different volume levels for Zoom, Spotify, and Slack on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling browser volume independently from other apps on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling Discord volume independently from game and music on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial with audio output device switching and per-app volume control in one menu bar panel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Microsoft Teams call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial with Slack muted and Spotify playing at normal volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume profiles — one-click switching between Meeting, Focus, and Chill modes on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Zoom call volume to 180% on Mac for clearer audio during video calls" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial lowering Spotify volume independently while keeping other apps at full volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial providing per-app volume control on macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing Zoom at full volume and Spotify lowered during a call on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial remembering per-app volume levels across restarts on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial per-app volume mixer showing individual app volume sliders on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Safari browser volume to 180% for quiet YouTube videos on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing Slack at low volume and Spotify at normal volume — independent notification control on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial auto-ducking settings — configurable volume reduction during Zoom calls on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting app volume for AirPods on Mac with per-app volume sliders up to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Spotify volume to 200% on macOS while keeping other apps at normal volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing independent volume sliders for a game and Discord on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — the volume mixer for macOS, showing per-app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume boost — per-app volume control with 200% amplification on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial auto-ducking feature automatically lowering music volume during a Zoom call on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing per-app mute buttons for each application in the macOS menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume mixer for macOS showing individual app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Pembelian sekali. Tanpa langganan. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Dapatkan SoundDial di Mac App Store</a>.</p>
`,
  },
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "Alternatif Background Music Terbaik untuk Mac (2026)",
    description: "Background Music rusak pada macOS yang lebih baru? Alternatif pencampur volume per aplikasi yang paling andal adalah SoundDial — aplikasi Mac App Store dalam kotak pasir dengan peningkatan dan profil.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Jika Background Music berhenti berfungsi setelah pembaruan macOS, alternatif yang paling dapat diandalkan adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — pencampur volume bilah menu per aplikasi dari Mac App Store. Ini memberi setiap aplikasi penggeser volumenya sendiri, menambahkan mute, boost, profil volume, dan auto-ducking, dan sepenuhnya di-sandbox dan ditinjau oleh Apple, sehingga tidak ada driver audio yang dapat dipecahkan pada rilis macOS berikutnya.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternatif Background Music Terbaik untuk Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa Background Music rusak pada macOS yang lebih baru</h2>

<p>Background Music adalah proyek sumber terbuka gratis yang benar-benar pintar. Ini memberi pengguna Mac sesuatu yang tidak pernah dimiliki Apple: pencampur volume per aplikasi, jenis yang dimiliki Windows selama bertahun-tahun. Namun desainnya juga menjadi alasan mengapa ia terus gagal.</p>

<p>Untuk merutekan dan mengontrol audio, Background Music menginstal perangkat audio virtual — driver tingkat sistem yang memotong suara Mac Anda. Pendekatan tersebut bekerja dengan baik pada macOS lama, namun setiap rilis besar memperketat keamanan di sekitar kernel dan ekstensi audio. Gejala umum yang dilaporkan pengguna:</p>

<ul>
<li>Tidak ada suara sama sekali setelah instalasi atau setelah pembaruan OS.</li>
<li>Perangkat virtual gagal dimuat, sehingga perutean audio berhenti secara diam-diam.</li>
<li>Aplikasi memerlukan instalasi ulang, reboot, atau penghapusan driver manual untuk pulih.</li>
<li>Pengembangannya didorong oleh komunitas dan dilakukan oleh sukarelawan, sehingga perbaikan untuk macOS baru bisa saja tertunda.</li>
</ul>

<p>Semua ini tidak menjadikan Background Music "buruk". Artinya, alat berbasis driver gratis pada dasarnya rapuh, dan jika Anda mengandalkan volume per aplikasi setiap hari, kerapuhan tersebut akan cepat hilang.</p>

<h2>Apa yang harus dicari sebagai penggantinya</h2>

<p>Sebelum memilih alternatif apa pun, putuskan apa yang sebenarnya Anda perlukan:</p>

<ul>
<li><strong>Keandalan di seluruh pembaruan macOS.</strong> Jika menginstal kernel atau ekstensi audio, kemungkinan terjadi kerusakan sesekali.</li>
<li><strong>Kontrol nyata per aplikasi.</strong> Volume dan mute independen untuk setiap aplikasi adalah garis dasarnya.</li>
<li><strong>Tingkatkan.</strong> Beberapa aplikasi (alat rapat yang senyap, browser tertentu) terlalu senyap — Anda ingin melampaui 100%.</li>
<li><strong>Fitur kenyamanan.</strong> Profil dan pengecilan otomatis adalah hal yang mengubah utilitas menjadi sesuatu yang Anda tetap buka sepanjang hari.</li>
<li><strong>Pemasangan yang aman.</strong> Aplikasi Mac App Store yang di-sandbox tidak dapat menyentuh internal sistem, jadi pencopotan pemasangannya bersih dan pembaruan dilakukan secara otomatis.</li>
</ul>

<h2>Mengapa SoundDial adalah pilihan yang dapat diandalkan</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dibuat untuk memecahkan masalah yang dihadapi pengguna Background Music: mereka menginginkan volume per aplikasi, namun tidak ingin menjaga driver. Itu ada di bilah menu Anda dan melakukan pekerjaan inti dengan baik:</p>

<ul>
<li><strong>Volume independen untuk setiap aplikasi</strong>, dengan bisu per aplikasi di panel yang sama.</li>
<li><strong>Peningkatan per aplikasi</strong> untuk membuat aplikasi senyap menjadi cukup keras untuk didengar.</li>
<li><strong>Profil volume</strong> — simpan campuran (misalnya, "rapat" atau "permainan") dan beralih secara instan alih-alih menyeret penggeser setiap saat.</li>
<li><strong>Merunduk otomatis</strong>, sehingga audio latar belakang otomatis turun pada saat yang seharusnya.</li>
<li><strong>Peralihan keluaran cepat</strong> antara speaker, headphone, dan perangkat lain.</li>
</ul>

<p>Perbedaan terbesarnya adalah cara pemasangannya. SoundDial dikirimkan melalui Mac App Store, yang berarti telah ditinjau dan di-sandbox oleh Apple. Tidak ada DMG untuk diseret, tidak ada driver audio atau ekstensi sistem, dan tidak ada akses kernel. Itulah satu-satunya alasan paling penting mengapa Background Music tidak rusak seperti saat macOS baru hadir — macOS tidak dihubungkan ke bagian sistem yang terus dikunci oleh Apple.</p>

<p>Itu biayanya <strong>€14,99 satu kali</strong>. Tidak gratis, namun tidak ada langganan, dan Anda membayar untuk sesuatu yang terpelihara dan aman untuk dipasang.</p>

<h2>SoundDial vs. Background Music vs. alat gratis</h2>

<p>Background Music bukan satu-satunya pilihan gratis Anda, jadi inilah gambaran jujurnya:</p>

<ul>
<li><strong>Background Music (gratis, sumber terbuka):</strong> volume per aplikasi, tetapi berbasis driver, rentan terhadap kerusakan pada macOS yang lebih baru, dan tidak memiliki peningkatan, profil, dan pengelak otomatis.</li>
<li><strong>FineTune (gratis, sumber terbuka):</strong> aplikasi volume per aplikasi bilah menu yang ringan. Bagus jika gratis adalah satu-satunya persyaratan Anda, tetapi kurangi tambahannya.</li>
<li><strong>eqMac (gratis):</strong> terutama sistem EQ dan booster, bukan mixer per aplikasi yang sebenarnya.</li>
<li><strong>SoundSource oleh Rogue Amoeba (~$39):</strong> opsi kelas pro, dengan EQ per aplikasi dan perutean keluaran penuh. Luar biasa, tapi harganya lebih dari dua kali lipat harga SoundDial dan masih memerlukan pengunduhan ditambah driver perekam audio.</li>
<li><strong>SoundDial (€14,99, Mac App Store):</strong> jalan tengah — volume nyata per aplikasi, mute, boost, profil, dan pengecilan, dikirimkan sebagai instalasi sandbox yang bersih tanpa driver.</li>
</ul>

<p>Jika Anda memerlukan EQ per aplikasi atau perutean studio yang rumit, SoundSource sepadan dengan uang ekstra yang dikeluarkan. Jika Anda menginginkan alat pengotak-atik gratis dan dapat mentolerir kerusakan sesekali, FineTune atau Background Music bisa digunakan. Namun jika tujuan Anda adalah "memberikan volume tersendiri pada setiap aplikasi dan tidak lagi mengganggu setiap pembaruan macOS", SoundDial akan mencapai target tersebut dengan cara yang paling mudah.</p>

<h2>Konteks macOS yang membuat hal ini perlu</h2>

<p>Perlu dikatakan dengan jelas: macOS tidak memiliki mixer volume per aplikasi bawaan. Windows telah memilikinya selama bertahun-tahun dalam volume flyout, tetapi pada Mac, penggeser sistem mengontrol semuanya sekaligus. Kesenjangan itulah yang menjadi alasan utama keberadaan alat seperti Background Music dan SoundDial. Karena Apple tidak mengisinya, pertanyaan praktisnya adalah pendekatan pihak ketiga mana yang Anda percayai — driver gratis yang melawan OS, atau aplikasi sandbox yang berfungsi dengannya.</p>

<p>Siap untuk berhenti melawan driver audio yang rusak? Dapatkan <a href="https://apps.apple.com/app/id6772792641">SoundDial di Mac App Store</a> seharga €14,99 dan mengontrol volume setiap aplikasi dengan cara yang andal.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial: Aplikasi Volume Mac Mana yang Menang?",
    description: "SoundSource ($39, kelas pro) vs SoundDial (€14,99, App Store). Bandingkan volume per aplikasi, peningkatan, profil, dan pengecilan otomatis untuk memilih mixer Mac yang tepat untuk Anda.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Jika Anda hanya ingin kontrol volume per aplikasi yang terinstal dengan rapi dan lebih murah, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah pembelian yang lebih baik bagi kebanyakan orang: €14,99 satu kali, dari Mac App Store, dengan volume per aplikasi, mute, boost, profile, dan auto-ducking. Pilih SoundSource Rogue Amoeba (~$39) hanya jika Anda secara khusus memerlukan EQ per aplikasi dan perutean keluaran lanjutan.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial: Aplikasi Volume Mac Mana yang Menang?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Versi pendek</h2>
<p>macOS masih belum memiliki pencampur volume per aplikasi bawaan. Windows sudah memilikinya selama bertahun-tahun, tetapi pada Mac penggeser volume sistem menggerakkan semuanya sekaligus. SoundSource dan SoundDial hadir untuk memperbaiki kesenjangan tersebut. Mereka hanya membidik pembeli yang berbeda.</p>
<ul>
<li><strong>SoundDial</strong> — €14,99 satu kali, Mac App Store, aplikasi bilah menu. Volume independen per aplikasi, mute per aplikasi, peningkatan per aplikasi, profil tersimpan, pengecilan otomatis, dan peralihan keluaran cepat. Dikotak pasir dan ditinjau oleh Apple, jadi tidak ada instalasi driver.</li>
<li><strong>SoundSource</strong> — ~$39, unduh langsung dari Rogue Amoeba. Segala sesuatu di atas ditambah EQ per aplikasi, perutean keluaran lanjutan, dan efek audio. Membutuhkan driver penangkap audio kecil untuk diinstal.</li>
</ul>

<h2>Harga dan cara membelinya</h2>
<p>Ini adalah perpecahan yang paling jelas. SoundSource berharga sekitar $39 dan dijual langsung oleh Rogue Amoeba. SoundDial berharga €14,99 sebagai pembelian satu kali pada Mac App Store — sedikit di atas sepertiga harga.</p>
<p>Karena <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dikirimkan melalui App Store, sudah di-sandbox, disahkan oleh notaris, dan ditinjau oleh Apple. Anda mengklik Dapatkan, itu diinstal, dan selesai. Tidak ada DMG untuk dipasang, tidak ada izin untuk diberikan ke komponen yang berdekatan dengan kernel, dan tidak ada driver audio atau ekstensi sistem. Itu juga berjalan bersama dengan alur pembaruan App Store normal Anda dan disinkronkan ke Mac Anda yang lain di ID Apple yang sama.</p>
<p>SoundSource mengunduh di luar App Store dan menginstal driver penangkap audio sehingga dapat mencegat dan memproses audio setiap aplikasi. Hal itulah yang membuka fitur-fitur pro-nya, namun juga berarti langkah instalasi ekstra dan komponen yang hidup lebih dalam di sistem.</p>

<h2>Apa yang dilakukan SoundSource dan SoundDial tidak</h2>
<p>SoundSource mendapatkan harganya untuk jenis pengguna tertentu. Jika salah satu dari berikut ini menggambarkan Anda, itu sepadan dengan uang ekstra yang Anda keluarkan:</p>
<ul>
<li><strong>EQ per aplikasi.</strong> Anda ingin equalizer 10-band aktif, katakanlah, Spotify sambil membiarkan Zoom tetap datar. SoundDial mengatur volume, bukan EQ.</li>
<li><strong>Perutean keluaran tingkat lanjut.</strong> Mengirim satu aplikasi ke speaker Anda dan aplikasi lainnya ke headphone atau antarmuka tertentu, dengan kontrol yang baik.</li>
<li><strong>Efek audio dan plugin.</strong> SoundSource dapat menampung efek per aplikasi — benar-benar wilayah pro.</li>
</ul>
<p>Rogue Amoeba memiliki rekam jejak yang panjang dan terpercaya. SoundSource adalah alat yang serius dan harganya seperti itu. Jika Anda seorang profesional audio atau pengguna multi-output berat, ini adalah pilihan yang tepat.</p>

<h2>Apa yang SoundDial lakukan lebih baik untuk penggunaan sehari-hari</h2>
<p>Kebanyakan orang yang menelusuri "pencampur volume Mac" tidak memerlukan EQ. Mereka membutuhkan satu aplikasi yang lebih senyap dibandingkan aplikasi lainnya, dan mereka tidak ingin bersaing dengan installer untuk mendapatkannya. SoundDial membahasnya dengan rapi, dan menambahkan beberapa hal yang patut diperhatikan:</p>
<ul>
<li><strong>Peningkatan per aplikasi.</strong> Beberapa aplikasi dan video terlalu senyap bahkan pada kondisi 100%. SoundDial dapat mendorong satu aplikasi di atas batas normalnya sehingga rapat atau podcast yang tenang akhirnya dapat terdengar.</li>
<li><strong>Profil volume.</strong> Simpan pengaturan lengkap — musik pelan-pelan, browser dibisukan, panggilan aplikasi keras — dan ingat kembali secara instan. Cocok untuk beralih antara "fokus", "rapat", dan "bermain game" tanpa menyeret lima penggeser.</li>
<li><strong>Merunduk otomatis.</strong> Secara otomatis menurunkan audio latar belakang (seperti musik) ketika sumber lain dimulai, sehingga notifikasi, panggilan, atau video tidak terkubur.</li>
<li><strong>Peralihan keluaran cepat.</strong> Beralih di antara speaker, headphone, dan perangkat lain dari bilah menu.</li>
</ul>
<p>Semua itu berjalan dari menu-bar dropdown, jadi hanya dengan sekali klik dan tidak lagi terlihat oleh Anda sepanjang waktu.</p>

<h2>Alternatif gratis, secara singkat</h2>
<p>Anda akan melihat beberapa opsi gratis disebutkan dalam pencarian yang sama. Hal-hal tersebut perlu diketahui tentang:</p>
<ul>
<li><strong>Background Music</strong> — gratis dan bersumber terbuka, memberi Anda volume dasar per aplikasi. Tapi itu bisa rusak pada rilis macOS yang lebih baru, dan tidak memiliki peningkatan, profil, atau pengelak otomatis.</li>
<li><strong>FineTune</strong> — aplikasi volume bilah menu sumber terbuka gratis. Sederhana, namun cakupannya terbatas.</li>
<li><strong>eqMac</strong> — EQ gratis dan penguat sistem, lebih merupakan alat EQ di seluruh sistem daripada mixer per aplikasi yang sesungguhnya.</li>
</ul>
<p>Gratis itu bagus jika itu berhasil untuk Anda. Pengorbanannya adalah kompatibilitas dan dukungan: alat audio sumber terbuka mungkin tertinggal dari pembaruan macOS, dan fitur seperti profil dan pengecilan umumnya tidak ada. Jika pengaturan Anda penting untuk hari kerja Anda, membayar sekali untuk sesuatu yang ditinjau dan dipelihara biasanya merupakan cara yang lebih tenang.</p>

<h2>Yang mana yang harus Anda beli?</h2>
<p>Jawab satu pertanyaan: apakah Anda memerlukan EQ per aplikasi atau perutean keluaran lanjutan?</p>
<ul>
<li><strong>Ya</strong> — beli SoundSource. Itu dibuat untuk itu, dan ~$39 cukup untuk alat pro dengan mesin tingkat pengemudi.</li>
<li><strong>Tidak, saya hanya ingin volume per aplikasi, peningkatan, dan instalasi bersih</strong> — beli SoundDial. Anda mendapatkan pencampuran yang benar-benar penting sehari-hari, ditambah profil dan pengelak otomatis, seharga €14,99 dan tanpa kerumitan pengemudi.</li>
</ul>
<p>Bagi sebagian besar pengguna Mac, pilihan kedua adalah jawaban yang jujur. Anda membayar untuk kontrol volume, bukan untuk studio.</p>

<p><strong>Siap memperbaiki volume Mac dengan cara mudah?</strong> Dapatkan <a href="https://apps.apple.com/app/id6772792641">SoundDial di Mac App Store</a> — €14,99 satu kali, tanpa driver, tanpa DMG. Volume per aplikasi, peningkatan, profil, dan pengecilan otomatis dalam satu klik.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Alternatif SoundSource yang Lebih Murah untuk Volume Per Aplikasi di Mac",
    description: "Ingin volume per aplikasi bergaya SoundSource tanpa harga $39? SoundDial adalah mixer bilah menu Mac App Store seharga €14,99 dengan boost, profil, dan pengelak otomatis.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Jika Anda menginginkan kontrol volume per aplikasi bergaya SoundSource di Mac tetapi $39 terasa mahal, perbaikan tercepat yang dapat diandalkan adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Ini adalah mixer menu-bar satu kali seharga €14,99 dari Mac App Store yang memberi setiap aplikasi penggeser volume, mute, dan boost sendiri — ditambah profil dan pengecilan otomatis — tanpa perlu mengunduh atau menginstal driver audio.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternatif SoundSource yang Lebih Murah untuk Volume Per Aplikasi di Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa orang mencari alternatif SoundSource</h2>
<p>SoundSource oleh Rogue Amoeba adalah perangkat lunak yang luar biasa. Ini benar-benar kelas profesional: equalizer per aplikasi, efek audio, dan perutean output yang memungkinkan Anda mengirim satu aplikasi ke headphone dan aplikasi lainnya ke speaker Anda. Namun kekuatan itu datang dengan dua titik gesekan. Pertama, harganya — sekitar $39. Kedua, ia menginstal driver perekam audio tingkat sistem di luar App Store, yang sebagian orang berhati-hati di mesin kerja atau tidak ingin mengelola seluruh pembaruan macOS.</p>
<p>Bagi kebanyakan orang, kebutuhan sebenarnya jauh lebih sederhana: mematikan Spotify tanpa menyentuh panggilan Zoom, membisukan aplikasi tab browser yang berisik, atau meningkatkan pemutar video senyap hingga melebihi 100%. Jika itu Anda, Anda membayar uang profesional untuk fitur yang tidak akan pernah Anda buka.</p>

<h2>Apa yang dilakukan SoundDial — dan berapa biayanya</h2>
<p>SoundDial berfokus pada pekerjaan volume per aplikasi dan melakukannya dengan rapi. Buka bilah menu dan Anda mendapatkan daftar langsung semua yang mengeluarkan suara, masing-masing dengan kontrolnya sendiri:</p>
<ul>
<li><strong>Volume independen per aplikasi</strong> — satu penggeser per aplikasi, disesuaikan secara real time.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi secara instan tanpa menjeda apa pun.</li>
<li><strong>Peningkatan volume per aplikasi</strong> — mendorong aplikasi senyap melebihi batas maksimum normalnya saat video atau panggilan terlalu lembut.</li>
<li><strong>Profil volume</strong> — simpan campuran (mis. "Fokus", "Game", "Rapat") dan alihkan dalam satu klik.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis mencelupkan aplikasi lain ketika sesuatu yang lebih penting mulai diputar.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antar speaker, headphone, dan perangkat lain dari menu yang sama.</li>
</ul>
<p>Harganya adalah <strong>€14,99, dibayar sekali</strong> — tidak ada langganan. Itu kira-kira sepertiga dari biaya SoundSource, untuk fitur volume yang sebenarnya dijangkau oleh sebagian besar pengguna.</p>

<h2>Perbedaan App Store</h2>
<p>Karena SoundDial dikirimkan melalui <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, ini telah ditinjau dan dimasukkan ke dalam sandbox oleh Apple. Tidak ada DMG yang perlu diseret, tidak ada ekstensi kernel atau driver perekam audio yang harus disetujui, dan tidak ada pembaru terpisah. Anda menginstalnya seperti aplikasi App Store lainnya dan berfungsi. Saat macOS diperbarui, Anda tidak akan bertanya-tanya apakah komponen audio tingkat rendah masih berfungsi.</p>
<blockquote>macOS masih belum memiliki pencampur volume per aplikasi bawaan. Windows sudah memilikinya selama bertahun-tahun, namun pada Mac volume sistemnya semuanya atau tidak sama sekali — itulah celah yang diisi oleh alat ini.</blockquote>

<h2>Bagaimana perbandingannya dengan opsi gratis</h2>
<p>SoundSource bukan satu-satunya alternatif Anda. Ada alat gratis, dan bersikap jujur tentangnya itu penting:</p>
<ul>
<li><strong>Background Music</strong> adalah aplikasi volume per aplikasi sumber terbuka dan gratis. Ini berfungsi untuk banyak orang, tetapi dapat rusak pada rilis macOS yang lebih baru, pembaruan tidak teratur, dan tidak ada peningkatan, tidak ada profil, dan tidak ada pengelak otomatis.</li>
<li><strong>FineTune</strong> adalah aplikasi volume bilah menu sumber terbuka dan gratis — ringan dan praktis, tetapi sekali lagi tidak memiliki fitur profil dan pengecilan.</li>
<li><strong>eqMac</strong> adalah EQ dan penguat sistem gratis. Ini lebih merupakan alat equalizer/boost daripada pencampur per aplikasi yang sebenarnya, dan tidak berfokus pada penggeser aplikasi individual.</li>
</ul>
<p>Gratis adalah pilihan yang sah. Pengorbanannya adalah keandalan dan fitur: alat audio sumber terbuka bergantung pada pemeliharaan sukarela dan dapat tertinggal dari perubahan macOS, dan tidak ada opsi gratis yang menggabungkan profil plus pengelak otomatis seperti yang dilakukan SoundDial. Jika pengaturan Anda sederhana dan Anda tidak keberatan jika terjadi kerusakan sesekali, aplikasi gratis mungkin sudah cukup. Jika Anda menginginkan sesuatu yang terpelihara, di-sandbox, dan berfungsi dengan baik, €14,99 akan memberi Anda hal tersebut.</p>

<h2>Panduan keputusan cepat</h2>
<ul>
<li><strong>Anda memerlukan EQ per aplikasi, efek audio, dan merutekan satu aplikasi ke perangkat output berbeda</strong> → SoundSource sepadan dengan harganya. Tidak ada apa pun di sini yang sepenuhnya menggantikan hal itu.</li>
<li><strong>Anda terutama memerlukan volume per aplikasi, mute, boost, profil, dan pengecilan — tanpa driver</strong> → SoundDial seharga €14,99 adalah pilihan dengan nilai lebih baik.</li>
<li><strong>Anda ingin gratis dan tidak keberatan dengan risiko pemeliharaan</strong> → coba Background Music, FineTune, atau eqMac terlebih dahulu.</li>
</ul>

<h2>Menyiapkannya</h2>
<p>Memulai membutuhkan waktu sekitar satu menit:</p>
<ul>
<li>Instal SoundDial dari Mac App Store — tanpa unduhan eksternal.</li>
<li>Berikan izin audio yang diminta macOS pada peluncuran pertama.</li>
<li>Putar suara di beberapa aplikasi dan buka ikon bilah menu; Anda akan melihat masing-masing dengan penggesernya sendiri.</li>
<li>Seret untuk mengatur level, ketuk untuk membisukan, atau tekan melewati 100% untuk meningkatkan.</li>
<li>Simpan pengaturan Anda sebagai profil, dan aktifkan pengecilan otomatis jika Anda ingin aplikasi lain senyap selama panggilan atau media.</li>
</ul>
<p>Itulah alur kerjanya secara keseluruhan — tidak ada file konfigurasi, tidak ada restart, tidak ada ekstensi sistem yang harus diberkati.</p>

<h2>Intinya</h2>
<p>SoundSource adalah alat yang lebih canggih, namun kebanyakan orang yang mencarinya hanya menginginkan volume per aplikasi yang sesuai. SoundDial memberikan hal tersebut dengan harga sekitar sepertiga dari harga, dikirimkan dengan aman melalui App Store, dan menambahkan profil dan merunduk otomatis di atasnya — tanpa perlu menginstal satu pun driver.</p>

<p>Siap mengontrol volume setiap aplikasi secara mandiri? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> seharga €14,99, satu kali.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "Alternatif FineTune untuk Mac: Mixer Volume Per Aplikasi yang Didukung",
    description: "Mencoba aplikasi bilah menu FineTune gratis dan menginginkan sesuatu yang terpelihara dan aman untuk App Store? Berikut adalah alternatif FineTune terbaik untuk volume per aplikasi di Mac.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Jika Anda menyukai FineTune tetapi menginginkan sesuatu yang dipelihara dan dipasang secara aktif dari sumber tepercaya, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah perbaikan tercepat yang dapat diandalkan. Ini adalah bilah menu Mac App Store pencampur volume per aplikasi dengan volume independen, mute per aplikasi, peningkatan volume, profil tersimpan, dan pengelak otomatis. Ditinjau dan di-sandbox oleh Apple, biayanya €14,99 sekali tanpa driver untuk diinstal.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune Alternatif untuk Mac: Mixer Volume Per Aplikasi yang Didukung" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa mencari alternatif FineTune?</h2>

<p>FineTune adalah ide yang bagus: aplikasi bilah menu sumber terbuka gratis yang memberi Anda kontrol volume per aplikasi di macOS, sesuatu yang masih ditolak oleh Apple (Windows telah memiliki mixer per aplikasi selama bertahun-tahun). Bagi banyak orang, ini melakukan pekerjaan dasar. Namun ada alasan sebenarnya mengapa pengguna mencari sesuatu yang lain.</p>

<ul>
<li><strong>Pemeliharaan tidak pasti.</strong> Proyek hobi sumber terbuka hidup dan mati hanya dalam satu waktu luang pengelola. Saat macOS mengirimkan pembaruan besar, aplikasi terkait audio sering kali menjadi yang pertama rusak, dan Anda harus menunggu perbaikan sukarela yang mungkin tidak akan pernah datang.</li>
<li><strong>Fitur langit-langit.</strong> FineTune mencakup volume per aplikasi dan sedikit lainnya. Jika Anda ingin peningkatan di atas 100%, profil tersimpan, atau pengecilan otomatis, Anda harus menggunakan alat lain.</li>
<li><strong>Kepercayaan dan pembaruan.</strong> Menginstal build mentah di luar App Store berarti tidak ada peninjauan otomatis, tidak ada jaminan sandbox, dan pembaruan manual yang harus Anda lacak sendiri.</li>
</ul>

<p>Semua ini tidak membuat FineTune buruk. Artinya, jika Anda mengandalkan audio per aplikasi setiap hari, Anda mungkin menginginkan sesuatu yang memiliki model dukungan di belakangnya.</p>

<h2>Apa yang SoundDial lakukan secara berbeda</h2>

<p>SoundDial dimulai dari ide inti yang sama, mixer bilah menu dengan penggeser untuk setiap aplikasi yang berjalan, kemudian melangkah lebih jauh dengan fitur-fitur yang sebenarnya diminta oleh pengguna canggih.</p>

<ul>
<li><strong>Volume independen per aplikasi.</strong> Matikan Spotify, pertahankan panggilan Anda dengan volume penuh, nonaktifkan sepenuhnya aplikasi tab browser yang berisik, semuanya dari satu menu.</li>
<li><strong>Peningkatan volume per aplikasi.</strong> Dorong aplikasi senyap ke atas batas normalnya saat podcast atau video dikuasai terlalu rendah. FineTune tidak melakukan ini.</li>
<li><strong>Profil volume.</strong> Simpan campuran, "fokus", "permainan", "rapat", dan alihkan seluruh pengaturan Anda dalam satu klik alih-alih menekan lima bilah geser.</li>
<li><strong>Merunduk otomatis.</strong> Secara otomatis menurunkan audio latar belakang ketika sesuatu yang lebih penting mulai diputar, sehingga musik berkurang ketika ada panggilan masuk.</li>
<li><strong>Peralihan keluaran cepat.</strong> Beralih antara speaker, headphone, dan output lainnya tanpa masuk ke Pengaturan Sistem.</li>
</ul>

<p>Karena <a href="https://apps.apple.com/app/id6772792641">SoundDial dikirimkan melalui Mac App Store</a>, aplikasi ini telah ditinjau dan dimasukkan ke dalam sandbox oleh Apple, dipasang dengan rapi, dan diperbarui melalui mekanisme yang sama seperti aplikasi App Store lainnya. Tidak ada DMG untuk diseret, tidak ada driver audio atau ekstensi sistem, dan tidak ada perintah keamanan yang meminta Anda untuk mengizinkan komponen tingkat kernel.</p>

<h2>SoundDial vs. FineTune dan alat gratis lainnya</h2>

<p>FineTune bukan satu-satunya pilihan gratis, dan ini membantu untuk melihat keseluruhan lanskap dengan jujur.</p>

<ul>
<li><strong>FineTune</strong> — Gratis, sumber terbuka, bilah menu per volume aplikasi. Sederhana dan ringan, tetapi tanpa peningkatan, tanpa profil, tanpa pengerukan, dan pemeliharaan bergantung pada komunitas.</li>
<li><strong>Background Music</strong> — Gratis dan bersumber terbuka, merutekan dan menyesuaikan audio per aplikasi. Benar-benar berguna, tetapi dapat rusak pada rilis macOS yang lebih baru dan tidak memiliki peningkatan, profil, dan pengecilan.</li>
<li><strong>eqMac</strong> — EQ gratis dan penguat sistem. Bagus jika Anda terutama menginginkan equalizer, tetapi ini bukan mixer per aplikasi.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — Opsi kelas pro berharga sekitar $39, dengan EQ per aplikasi dan perutean keluaran. Luar biasa, tetapi perlu diunduh ditambah driver perekam audio, dan biayanya dua kali lipat.</li>
<li><strong>SoundDial</strong> — €14,99 satu kali, aman App Store, tanpa driver. Menambahkan peningkatan, profil, dan pengecilan otomatis selain dasar-dasar volume per aplikasi.</li>
</ul>

<p>Ringkasan jujurnya: jika Anda menginginkan hal yang paling murah dan hanya memerlukan volume dasar per aplikasi, alat gratis ini dapat berfungsi. Jika Anda menginginkan EQ dan perutean per aplikasi dan tidak keberatan membayar dan menginstal driver, SoundSource adalah yang terbaik. SoundDial berada di posisi terbaik, lebih mumpuni dibandingkan aplikasi gratis, jauh lebih murah dibandingkan SoundSource, dan lebih aman untuk dipasang dibandingkan karena Apple meninjau dan melakukan sandbox terhadap aplikasi tersebut.</p>

<h2>Pindah dari FineTune</h2>

<p>Peralihan membutuhkan waktu beberapa menit dan tidak ada ritual pembersihan.</p>

<ul>
<li>Instal SoundDial dari Mac App Store. Tanpa penginstal, tanpa persetujuan driver, tanpa restart.</li>
<li>Klik ikon SoundDial di bilah menu Anda untuk melihat penggeser untuk setiap aplikasi yang berjalan.</li>
<li>Atur mix harian Anda, lalu simpan sebagai profil sehingga Anda dapat langsung mengingatnya.</li>
<li>Secara opsional, aktifkan pengecilan otomatis sehingga audio latar belakang dikesampingkan untuk panggilan dan peringatan.</li>
<li>Saat Anda bahagia, keluarlah dari FineTune. Karena tidak ada aplikasi yang menginstal driver sistem, tidak ada lagi yang perlu dihapus.</li>
</ul>

<p>Anda tetap mempertahankan hal yang Anda sukai tentang FineTune, mixer bilah menu bersih yang tidak pernah diberikan Apple kepada Anda, dan Anda mendapatkan peningkatan, profil, pengecilan, dan dukungan jangka panjang yang disediakan oleh aplikasi App Store yang dikelola.</p>

<h2>Intinya</h2>

<p>FineTune membuktikan konsepnya: volume per aplikasi termasuk dalam bilah menu. SoundDial adalah konsep yang terlihat dengan model dukungan nyata, lebih banyak fitur, dan keamanan App Store, dengan biaya satu kali €14,99 alih-alih bertaruh pada pemeliharaan sukarela.</p>

<p>Siap untuk mixer per aplikasi yang tetap dipertahankan? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> dan mengontrol volume setiap aplikasi dalam hitungan detik.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac Alternatif untuk Volume Per Aplikasi Nyata di Mac",
    description: "Suka peningkatan eqMac tetapi memerlukan volume, mute, dan profil per aplikasi yang tepat? SoundDial adalah perbaikan Mac App Store tercepat — €14,99, dalam kotak pasir, tanpa driver.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Jika Anda menggunakan eqMac untuk EQ dan penguat volumenya tetapi benar-benar menginginkan volume independen untuk setiap aplikasi — plus membisukan, meningkatkan, dan menyimpan profil — perbaikan tercepat yang dapat diandalkan adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Ini adalah pencampur bilah menu Mac App Store: atur level per aplikasi, tingkatkan level senyap, dan ganti profil secara instan. €14,99 satu kali, dalam kotak pasir, tidak ada driver yang perlu dipasang.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — eqMac Alternatif untuk Volume Per Aplikasi Nyata di Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac vs. apa yang sebenarnya Anda butuhkan</h2>

<p>eqMac adalah alat gratis yang solid, dan equalizer serta penguat volume seluruh sistemnya benar-benar berguna. Namun eqMac dibangun berdasarkan satu master EQ dan satu output master. Itu tidak memberi Anda pencampur volume per aplikasi yang nyata — hal yang telah dimiliki Windows selama bertahun-tahun dan macOS masih belum dikirimkan secara asli.</p>

<p>Jadi, jika masalah Anda yang sebenarnya adalah "Spotify terlalu keras saat saya sedang menelepon" atau "game yang satu ini mengejutkan saya, tetapi yang lainnya baik-baik saja," eqMac bukanlah bentuk yang tepat untuk pekerjaan itu. Anda akhirnya menggunakan satu penggeser utama atau mengutak-atik volume internal setiap aplikasi. Itulah celah yang diisi oleh SoundDial.</p>

<h2>Apa yang dilakukan SoundDial dan eqMac tidak</h2>

<ul>
<li><strong>Volume independen per aplikasi</strong> — Musik 40%, browser 100%, panggilan video 70%, semuanya sekaligus, semuanya diingat.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi yang berisik secara instan tanpa menyentuh apa pun lainnya.</li>
<li><strong>Peningkatan per aplikasi</strong> — mendorong aplikasi senyap melampaui batas normalnya, seperti yang dilakukan booster eqMac, namun ditargetkan pada satu aplikasi, bukan keseluruhan sistem.</li>
<li><strong>Profil volume</strong> — simpan pengaturan seperti "Fokus", "Game", atau "Rapat" dan alihkan seluruh campuran dalam satu klik.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis menghilangkan audio latar belakang ketika sesuatu yang lebih penting dimulai, sehingga Anda tidak perlu menggunakan penggeser di tengah panggilan.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antara speaker, headphone, dan output lainnya dari bilah menu.</li>
</ul>

<p>Tumpang tindih dengan eqMac pada dasarnya adalah peningkatan. Segala sesuatu yang lain — mixer, mute, profile, ducking — adalah wilayah yang tidak pernah dirancang untuk dicakup oleh eqMac.</p>

<h2>Apakah Anda masih menginginkan EQ?</h2>

<p>Jujurlah tentang masalah apa yang sedang Anda pecahkan. Jika Anda benar-benar membutuhkan EQ frekuensi — memotong bass, menjinakkan nada tinggi yang keras, membentuk nada keseluruhan sistem Anda — maka eqMac masih memiliki tempatnya, dan gratis. SoundDial adalah pencampur volume, bukan equalizer.</p>

<p>Namun kebanyakan orang menggunakan booster eqMac bukan karena mereka ingin membentuk frekuensi, mereka ingin satu aplikasi lebih keras atau campurannya seimbang. Jika itu Anda, mixer khusus adalah jawaban yang lebih bersih. Anda bahkan dapat menjalankan keduanya: pertahankan eqMac untuk kurva EQ seluruh sistem dan gunakan SoundDial untuk level per aplikasi. Mereka tidak memperebutkan pekerjaan yang sama.</p>

<h2>Bagaimana perbandingannya dengan alat audio Mac lainnya</h2>

<p>Karena Anda sudah berburu alat, berikut gambaran jujurnya:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — opsi kelas pro dengan harga sekitar $39, dengan EQ per aplikasi dan perutean keluaran penuh. Kuat, tetapi memerlukan pengunduhan langsung dan menginstal driver perekam audio. Berlebihan dan mahal jika yang Anda inginkan hanyalah volume per aplikasi dengan profil.</li>
<li><strong>Background Music</strong> — gratis dan bersumber terbuka, namun dapat rusak pada rilis macOS yang lebih baru dan tidak memiliki peningkatan, tidak ada profil, dan tidak ada pengelak otomatis. Hebat bila berhasil, membuat frustrasi bila tidak berhasil.</li>
<li><strong>FineTune</strong> — aplikasi bilah menu sumber terbuka gratis. Layak untuk dilihat jika $0 adalah persyaratan yang sulit, meskipun fitur dan penyempurnaannya lebih ringan.</li>
<li><strong>eqMac</strong> — EQ plus booster gratis, tetapi tidak ada mixer per aplikasi yang sebenarnya, seperti yang dibahas di atas.</li>
</ul>

<p>SoundDial berada di posisi terbaik: lebih fokus dan lebih murah dibandingkan SoundSource, lebih mumpuni dan lebih andal dibandingkan opsi gratis, dan eqMac melakukan pekerjaan per aplikasi yang tidak dilakukannya.</p>

<h2>Mengapa Mac App Store penting di sini</h2>

<p>Beberapa dari alat ini memerlukan pengunduhan langsung dan driver audio tingkat kernel atau pengambilan. Itu berfungsi, tetapi itu adalah hal yang dapat tersangkut pada pembaruan macOS atau tersandung pada pekerjaan Mac yang terkunci.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dikirimkan melalui Mac App Store sebagai gantinya. Itu berarti telah ditinjau dan di-sandbox oleh Apple, diinstal dengan bersih tanpa DMG yang perlu diseret, dan tidak ada driver audio atau ekstensi sistem yang perlu disetujui. Pembaruan tiba melalui App Store seperti aplikasi lainnya, dan mencopot pemasangannya adalah penghapusan normal. Untuk utilitas bilah menu yang menyentuh audio Anda, jalur dengan gesekan yang lebih rendah dan risiko yang lebih rendah itu sangat berharga.</p>

<h2>Pengaturan cepat</h2>

<ul>
<li>Instal SoundDial dari Mac App Store — tanpa restart, tanpa perintah driver.</li>
<li>Buka ikon bilah menu; setiap aplikasi yang sedang mengeluarkan suara muncul dengan penggesernya sendiri.</li>
<li>Tetapkan level, matikan suara yang tidak Anda perlukan, dan tingkatkan suara yang terlalu pelan.</li>
<li>Simpan pengaturan sebagai profil, lalu buat lebih banyak lagi untuk bermain game, panggilan, atau fokus.</li>
<li>Aktifkan pengecilan otomatis sehingga audio latar belakang otomatis hilang.</li>
</ul>

<p>Itulah keseluruhannya. Dalam beberapa menit Anda akan mendapatkan kontrol per aplikasi yang hanya ditunjukkan oleh booster eqMac.</p>

<p><strong>Siap untuk volume nyata per aplikasi di Mac Anda?</strong> <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14,99 satu kali, dalam kotak pasir, tanpa driver, dan melakukan persis seperti yang seharusnya dilakukan oleh mixer bilah menu.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "Mixer Volume Bagus Termurah untuk Mac tahun 2026",
    description: "Mencari mixer volume per aplikasi termurah yang bagus untuk Mac pada tahun 2026? Bandingkan SoundDial, SoundSource, Background Music, FineTune dan eqMac dalam hal harga, keamanan dan fitur.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Pencampur volume per aplikasi dengan nilai terbaik untuk Mac pada tahun 2026 adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikasi bilah menu di Mac App Store dengan harga satu kali €14,99. Ini memberi setiap aplikasi penggeser volumenya sendiri, ditambah mute, boost, profil, dan pengecilan otomatis — tanpa driver, tanpa berlangganan, dan tanpa unduhan yang berisiko. Ini adalah opsi berbayar termurah yang benar-benar berfungsi dengan baik.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mixer Volume Bagus Termurah untuk Mac di tahun 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa "termurah" memerlukan definisi</h2>
<p>Ada alat volume gratis untuk Mac, jadi jika satu-satunya tujuan adalah mengeluarkan uang nol, Anda punya opsi. Namun gratis biasanya dikenakan biaya lain: kerapuhan pada versi macOS baru, hilangnya fitur seperti boost atau profil, atau proses instalasi yang melibatkan driver perekam audio yang harus Anda percayai. "Barang termurah" berarti harga terendah yang tetap memberi Anda mixer stabil dan berfitur lengkap yang akan terus Anda gunakan. Itu lensa yang akan kita gunakan di sini.</p>

<h2>Pertama, hal yang tidak dilakukan macOS</h2>
<p>Windows telah memiliki pencampur volume per aplikasi selama bertahun-tahun — klik kanan ikon speaker dan atur setiap aplikasi secara terpisah. macOS masih belum memiliki apa pun yang setara. Anda mendapatkan satu volume master dan penggeser internal apa pun yang dikirimkan aplikasi (Musik, beberapa browser). Tidak ada cara di seluruh sistem untuk membuat Slack lebih senyap dibandingkan Spotify, atau untuk meningkatkan kualitas panggilan video senyap di atas segalanya. Setiap opsi di bawah ini ada untuk mengisi kesenjangan tersebut.</p>

<h2>Para pesaing, diberi harga dengan jujur</h2>

<h2>SoundDial — €14,99, satu kali</h2>
<p>SoundDial ada di bilah menu Anda dan memberi setiap aplikasi yang berjalan penggeser volume independen. Di luar hal-hal dasar, ini menambahkan fitur-fitur yang sebenarnya dicari orang:</p>
<ul>
<li><strong>Peningkatan per aplikasi</strong> — dorong aplikasi yang terlalu senyap di atas 100% alih-alih bersusah payah mendengarnya.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi tanpa menyentuh aplikasi lainnya.</li>
<li><strong>Profil volume</strong> — menyimpan campuran "panggilan kantor" atau "film malam" dan langsung mengingatnya kembali.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis menghilangkan audio latar belakang saat sesuatu yang lebih penting diputar.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antar speaker, headphone, dan perangkat lain dari menu yang sama.</li>
</ul>
<p>Karena ada di Mac App Store, maka di-sandbox, ditinjau oleh Apple, dan dipasang dengan rapi — tidak ada DMG, tidak ada ekstensi kernel, tidak ada driver audio yang perlu disetujui. Anda membayar <a href="https://apps.apple.com/app/id6772792641">€14,99 sekali</a> dan memilikinya. Bagi kebanyakan orang, ini adalah titik terbaiknya: cukup murah untuk menjadi jawaban ya yang mudah, cukup lengkap sehingga Anda tidak akan melampauinya.</p>

<h2>SoundSource — ~$39, opsi pro</h2>
<p>SoundSource Rogue Amoeba adalah standar emas bagi pengguna listrik. Ia melakukan volume dan mute per aplikasi seperti SoundDial, namun lebih jauh lagi dengan equalizer per aplikasi dan perutean output penuh (kirim satu aplikasi ke headphone, aplikasi lainnya ke speaker). Ini benar-benar luar biasa — tetapi harganya kira-kira $39, dan dipasang di luar App Store dengan komponen perekam audio yang harus Anda beri izin. Jika Anda memerlukan EQ per aplikasi atau perutean yang rumit, itu sepadan dengan uang yang dikeluarkan. Jika Anda hanya menginginkan mixer yang bersih dan murah, Anda membayar untuk kemampuan yang mungkin tidak pernah Anda sentuh.</p>

<h2>Background Music — gratis, sumber terbuka</h2>
<p>Background Music adalah aplikasi sumber terbuka gratis dan terkenal yang menawarkan volume per aplikasi dan jeda otomatis. Hasil tangkapannya: ia terhubung jauh ke dalam Core Audio melalui driver virtual, dan memiliki sejarah panjang dalam memecahkan rilis macOS baru, terkadang memerlukan perbaikan manual atau instalasi ulang setelah pembaruan. Itu juga tidak memiliki peningkatan, profil tersimpan, dan pengelak otomatis. Cocok untuk pengotak-atik yang tidak keberatan dengan pemeliharaan; membuat frustrasi jika Anda hanya ingin itu berhasil.</p>

<h2>FineTune — gratis, bilah menu</h2>
<p>FineTune adalah aplikasi volume bilah menu sumber terbuka dan gratis. Ringan dan menyenangkan, dan untuk penyesuaian sederhana per aplikasi, itu sudah cukup. Namun karena merupakan proyek kecil yang gratis, proyek ini tidak sesuai dengan kedalaman fiturnya — tidak ada profil, tidak ada pengelak otomatis, dan penanganan peningkatan/keluaran yang terbatas. Tanpa biaya, lebih sedikit jaminan umur panjang dan dukungan.</p>

<h2>eqMac — gratis, penguat EQ +</h2>
<p>eqMac adalah equalizer seluruh sistem gratis dengan penguat volume. Ini lebih tentang membentuk nada dan kenyaringan di seluruh Mac Anda daripada menggabungkan aplikasi individual, jadi ini adalah alat yang berbeda untuk pekerjaan yang berbeda. Jika Anda secara khusus menginginkan kontrol per aplikasi, eqMac bukanlah jawabannya, meskipun ini adalah EQ gratis yang bagus.</p>

<h2>Harga vs. nilai: tabel jujur</h2>
<ul>
<li><strong>Benar-benar gratis, tetapi dengan pengorbanan:</strong> Background Music (rapuh, berbasis driver), FineTune (fitur tipis), eqMac (EQ, bukan mixer).</li>
<li><strong>Aplikasi berbayar lengkap termurah:</strong> SoundDial seharga €14,99 — peningkatan, profil, pengecilan, keamanan App Store.</li>
<li><strong>Premium/pro:</strong> SoundSource seharga ~$39 — EQ dan perutean, pemasangan non-App-Store.</li>
</ul>
<p>Dengan kata lain: SoundDial berharga sekitar sepertiga dari SoundSource dan mencakup fitur-fitur yang sebenarnya diinginkan oleh 90% orang. Dan tidak seperti opsi gratis, opsi ini tidak akan rusak secara diam-diam setelah pembaruan macOS, karena tidak bergantung pada driver audio tingkat sistem yang rapuh.</p>

<h2>Mana yang harus Anda pilih?</h2>
<p>Jika Anda seorang profesional yang membutuhkan EQ per aplikasi dan mengarahkan aplikasi ke output berbeda, belilah SoundSource — ini sepadan dengan harganya. Jika Anda menyukai sumber terbuka dan tidak keberatan jika terjadi kerusakan sesekali, cobalah Background Music atau FineTune secara gratis. Namun jika Anda menginginkan opsi termurah yang berfungsi — volume independen, peningkatan, mute, profil yang dapat disimpan, dan pengecilan otomatis, dipasang dengan aman dari App Store — SoundDial jelas merupakan pemenang nilai pada tahun 2026.</p>

<blockquote>Mixer terbaik bukanlah mixer yang memiliki fitur paling banyak atau harga terendah — mixer yang Anda siapkan sekali dan lupakan. Dengan harga €14,99, SoundDial menjadikannya pilihan yang mudah.</blockquote>

<p>Siap memberikan volume tersendiri pada setiap aplikasi? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> untuk satu kali €14,99 — tanpa berlangganan, tanpa driver, tanpa risiko.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Windows Volume Mixer untuk Mac: Dapatkan Kontrol Volume Per Aplikasi",
    description: "Hilangnya Volume Mixer Windows di Mac Anda? macOS tidak memiliki kontrol volume per aplikasi bawaan. Inilah cara tercepat untuk mendapatkannya: SoundDial, mixer menu-bar seharga €14,99.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>macOS tidak memiliki Volume Mixer bawaan seperti Windows, jadi Anda tidak dapat mengatur volume per aplikasi dari Pengaturan Sistem. Perbaikan tercepat dan andal adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikasi bilah menu seharga €14,99 dari Mac App Store. Ini memberi setiap aplikasi penggeser volume, mute, dan boost tersendiri — tanpa driver, tanpa DMG, tanpa pemasangan yang berisiko.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Windows Volume Mixer untuk Mac: Dapatkan Kontrol Volume Per Aplikasi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa Windows Volume Mixer tidak memiliki padanan Mac</h2>

<p>Jika Anda beralih dari Windows, salah satu hal pertama yang akan Anda lewatkan adalah Volume Mixer: klik kanan ikon speaker, dan setiap aplikasi yang berjalan memiliki penggesernya sendiri. Kecilkan Chrome, pertahankan suara Discord, mute Spotify — semuanya di satu tempat.</p>

<p>macOS tidak mengirimkan ini. Kontrol volume Apple adalah penggeser tunggal di seluruh sistem. Level apa pun yang Anda tetapkan berlaku untuk semuanya sekaligus. Tidak ada opsi per aplikasi yang disembunyikan di Pengaturan Sistem, tidak ada perintah Terminal, tidak ada tombol aksesibilitas. Ini adalah kesenjangan yang nyata, dan sudah terjadi selama bertahun-tahun.</p>

<p>Alasannya bersifat arsitektural: aplikasi merutekan audio melalui Core Audio ke perangkat output Anda, dan OS tidak mengekspos mixer yang menghadap pengguna untuk masing-masing aliran. Untuk menciptakan kembali pengalaman Windows, Anda memerlukan aplikasi pihak ketiga yang berada di jalur audio tersebut dan memberi Anda kontrol yang tidak dimiliki Apple.</p>

<h2>Kecocokan terdekat: SoundDial</h2>

<p>SoundDial adalah bilah menu pencampur volume per aplikasi yang dibuat khusus untuk ini. Klik ikonnya dan Anda mendapatkan daftar bersih semua audio yang diputar, masing-masing dengan penggesernya sendiri. Ini adalah "Windows Volume Mixer for Mac" paling langsung yang dapat Anda instal, dan ia melakukan beberapa hal yang tidak pernah bisa dilakukan oleh mixer Windows:</p>

<ul>
<li><strong>Volume independen per aplikasi</strong> — fitur inti. Atur Chrome ke 40%, Zoom ke 100%, musik ke 20%.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi tanpa menyentuh aplikasi lainnya.</li>
<li><strong>Peningkatan volume per aplikasi</strong> — tekan aplikasi senyap <em>di atas</em> 100% ketika audionya terlalu rendah.</li>
<li><strong>Profil volume</strong> — simpan campuran (misalnya "panggilan kerja" atau "permainan") dan panggil kembali secara instan alih-alih menyeret ulang penggeser.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis menurunkan audio latar belakang ketika sesuatu yang lebih penting dimulai, seperti panggilan.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antar speaker, headphone, dan perangkat lain dari menu yang sama.</li>
</ul>

<p>Karena itu di <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, ini telah ditinjau dan dimasukkan ke dalam sandbox oleh Apple. Ini diinstal dengan bersih dengan satu klik — tidak ada DMG yang perlu diseret, tidak ada driver audio atau ekstensi sistem yang harus disetujui, tidak ada perintah keamanan. Dengan biaya €14,99 satu kali (tanpa berlangganan), ini adalah cara paling sederhana untuk menutup kesenjangan.</p>

<h2>Cara mengatur volume per aplikasi di Mac Anda</h2>

<ol>
<li>Instal SoundDial dari Mac App Store.</li>
<li>Berikan izin audio satu kali yang diminta pada peluncuran pertama.</li>
<li>Klik ikon SoundDial di bilah menu Anda.</li>
<li>Seret penggeser di samping aplikasi apa pun untuk mengatur volumenya, atau tekan mute/boost.</li>
<li>Secara opsional, simpan campuran saat ini sebagai profil sehingga Anda dapat memulihkannya nanti.</li>
</ol>

<p>Itulah keseluruhan alur kerja. Ini berperilaku seperti mixer Windows yang sudah Anda ketahui, hanya dari bilah menu, bukan klik kanan pada bilah tugas.</p>

<h2>Bagaimana SoundDial dibandingkan dengan opsi lain</h2>

<p>SoundDial bukan satu-satunya alat di bidang ini, jadi inilah alternatifnya.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — sekitar $39, dan benar-benar kelas profesional: EQ per aplikasi, perutean keluaran per aplikasi, efek. Tapi itu memerlukan pengunduhan langsung ditambah driver perekam audio, dan itu berlebihan (dan lebih mahal) jika Anda hanya menginginkan volume per aplikasi. Pilih jika Anda memerlukan EQ dan perutean; pilih SoundDial jika ingin mixer tanpa kerumitan atau driver.</li>
<li><strong>Background Music</strong> — gratis dan bersumber terbuka, dan itu bagus. Masalahnya: ini dapat rusak pada versi macOS yang lebih baru, dan tidak memiliki peningkatan, profil tersimpan, dan pengelak otomatis. Baik jika Anda merasa nyaman memecahkan masalah driver audio sumber terbuka; kurang ideal jika Anda menginginkan sesuatu yang berhasil.</li>
<li><strong>FineTune</strong> — aplikasi bilah menu sumber terbuka gratis. Ringan dan menarik untuk dilihat jika anggaran adalah prioritasnya, tetapi Anda memperdagangkan polesan, profil, dan keamanan App Store secara gratis.</li>
<li><strong>eqMac</strong> — EQ gratis dan booster seluruh sistem. Ini adalah equalizer terlebih dahulu, bukan mixer per aplikasi, jadi ini memecahkan masalah yang berbeda.</li>
</ul>

<p>Pengorbanannya sederhana. Alat gratis tidak memerlukan biaya apa pun tetapi bisa rapuh atau tidak memiliki banyak fitur. SoundSource kuat namun mahal dan berbasis driver. SoundDial berada di posisi terbaik: €14,99 satu kali, keamanan dan sandbox App Store, serta profil + pengelak otomatis yang dilewati opsi gratis.</p>

<blockquote>Jika yang Anda inginkan hanyalah pengalaman Volume Mixer Windows — penggeser per aplikasi, mute, dan boost, terpasang dengan aman dalam hitungan detik — SoundDial adalah yang paling cocok.</blockquote>

<h2>Intinya</h2>

<p>macOS tidak akan memberi Anda Volume Mixer, dan mungkin tidak akan pernah memberi Anda. Namun Anda tidak harus hidup dengan satu penggeser di seluruh sistem. Mixer bilah menu khusus memulihkan kontrol per aplikasi yang Anda miliki di Windows, dan menambahkan peningkatan, profil, dan pengelak otomatis di atasnya.</p>

<p>Siap mendapatkan volume per aplikasi dengan cara mudah? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> seharga €14,99 — satu kali, di-sandbox, dan dipasang dalam hitungan detik.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Atur Volume Aplikasi Seperti Windows — di Mac Anda",
    description: "Windows memiliki pencampur volume per aplikasi, tetapi macOS tidak. Berikut cara menyetel volume independen untuk setiap aplikasi di Mac Anda — cepat, aman, dan tanpa driver.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>macOS tidak memiliki mixer volume per aplikasi bawaan seperti yang ada di Windows, jadi perbaikan tercepat yang dapat diandalkan adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikasi bilah menu Mac App Store yang memberi setiap aplikasi penggeser volumenya sendiri, pembisuan per aplikasi, dan peningkatan volume. Ini di-sandbox, ditinjau oleh Apple, diinstal tanpa driver, dan berharga €14,99 sekali.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Atur Volume Aplikasi Seperti Windows — di Mac Anda" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa Windows bisa melakukan ini dan macOS tidak</h2>
<p>Jika Anda pernah menggunakan Windows, Anda pasti tahu caranya: klik kanan ikon speaker, buka Volume Mixer, dan seret penggeser terpisah untuk Chrome, Spotify, Discord, dan apa pun yang menimbulkan kebisingan. Ini sederhana dan berhasil.</p>
<p>macOS tidak pernah mengirimkan yang setara. Kontrol audio Apple bersifat global — satu volume master untuk keseluruhan sistem. Anda dapat membisukan aplikasi dengan membisukan sumber di dalam aplikasi tersebut (bahkan jika aplikasi tersebut memiliki kontrol), namun tidak ada tempat terpadu untuk mengatakan "pertahankan musik saya pada 40% sementara rapat saya tetap pada 100%". Kesenjangan itulah yang menjadi alasan keberadaan mixer pihak ketiga.</p>

<h2>Perbaikan tercepat: mixer bilah menu</h2>
<p>Yang paling cocok dengan pengalaman Windows adalah aplikasi bilah menu yang mencantumkan aplikasi audio Anda yang sedang berjalan dan memberikan penggeser pada masing-masing aplikasi. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> melakukan hal ini dengan tepat. Klik ikonnya di bilah menu dan Anda mendapatkan:</p>
<ul>
<li><strong>Volume independen untuk setiap aplikasi</strong> — seret Spotify ke bawah tanpa menyentuh panggilan Anda.</li>
<li><strong>Bisu per aplikasi</strong> — langsung membungkam satu aplikasi yang berisik, biarkan sisanya diputar.</li>
<li><strong>Peningkatan volume per aplikasi</strong> — tekan aplikasi yang terlalu senyap <em>di atas</em> 100% bila max nya sendiri masih terlalu lembek.</li>
<li><strong>Profil volume</strong> — simpan campuran "Kerja" atau "Game" dan panggil kembali dalam satu klik.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis menurunkan audio latar belakang ketika sesuatu yang lebih penting dimulai.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antar speaker, headphone, dan output lainnya dari menu yang sama.</li>
</ul>
<p>Karena ada di Mac App Store, sudah di-sandbox dan ditinjau oleh Apple, diinstal dengan bersih, dan tidak ada DMG yang perlu diseret, tidak ada ekstensi kernel, dan tidak ada driver audio yang harus disetujui di Pengaturan Sistem. Bagian terakhir ini lebih penting daripada kedengarannya — alat berbasis driver cenderung rusak setelah pembaruan macOS.</p>

<h2>Cara mengaturnya (sekitar dua menit)</h2>
<ul>
<li><strong>1.</strong> Instal SoundDial dari Mac App Store dan luncurkan.</li>
<li><strong>2.</strong> Berikan izin audio yang diminta macOS — inilah yang memungkinkan aplikasi melihat streaming per aplikasi.</li>
<li><strong>3.</strong> Klik ikon SoundDial di bilah menu Anda. Setiap aplikasi yang sedang memutar audio muncul dengan penggesernya sendiri.</li>
<li><strong>4.</strong> Seret penggeser aplikasi apa pun untuk mengatur levelnya, atau tekan bisu. Tingkatkan hingga melebihi 100% saat aplikasi terlalu senyap.</li>
<li><strong>5.</strong> (Opsional) Simpan campuran Anda saat ini sebagai profil sehingga Anda dapat memulihkannya nanti, dan aktifkan pengecilan otomatis jika Anda ingin audio latar belakang turun secara otomatis.</li>
</ul>
<p>Itulah keseluruhan alur kerja. Ini berperilaku seperti Mixer Volume Windows yang sudah Anda ketahui, tanpa gesekan pengaturan.</p>

<h2>Bagaimana dengan alternatif gratis dan pro?</h2>
<p>Ada cara lain untuk mendapatkan volume per aplikasi di Mac. Mereka layak untuk diketahui sehingga Anda dapat memilih dengan jujur.</p>
<blockquote>Alat gratis memperdagangkan uang untuk keandalan dan fitur; alat pro memperdagangkan uang dan menyiapkan kedalaman yang mungkin tidak Anda perlukan.</blockquote>
<p><strong>Background Music</strong> gratis dan bersumber terbuka, serta menyediakan volume per aplikasi. Hasil tangkapannya: ia terhubung jauh ke dalam sistem audio dan memiliki riwayat kerusakan pada rilis macOS yang lebih baru, dan tidak memiliki peningkatan, profil, dan pengelak otomatis. Jika berhasil pada pengaturan Anda, bagus — tetapi ini merupakan pertaruhan dalam hal peningkatan.</p>
<p><strong>FineTune</strong> adalah aplikasi bilah menu sumber terbuka gratis dengan semangat yang sama seperti SoundDial. Ini adalah titik awal yang baik jika anggaran adalah satu-satunya perhatian, meskipun ini adalah proyek komunitas tanpa profil dan kecerobohan.</p>
<p><strong>eqMac</strong> adalah EQ dan booster seluruh sistem gratis. Ini bagus untuk membentuk suara secara keseluruhan, tetapi ini bukan mixer per aplikasi yang sebenarnya — Anda menyesuaikan keseluruhan output, bukan aplikasi individual.</p>
<p><strong>SoundSource</strong> oleh Rogue Amoeba (sekitar $39) adalah opsi kelas pro: EQ per aplikasi, perutean output per aplikasi, dan fitur teknisi audio yang serius. Ini luar biasa — tetapi memerlukan pengunduhan langsung dan pemasangan komponen perekam audio, dan biayanya lebih dari dua kali lipat dibandingkan SoundDial. Jika Anda menginginkan perutean dan EQ tingkat studio, itu adalah pilihannya. Jika Anda hanya menginginkan mixer bergaya Windows, itu berlebihan.</p>

<h2>Yang mana yang harus Anda dapatkan?</h2>
<p>Jika tujuan Anda adalah "membuat Mac saya berfungsi seperti Windows Volume Mixer" tanpa unduhan, driver, atau risiko, SoundDial adalah jawaban terbersih. Anda mendapatkan volume per aplikasi, mute, boost, profiles, dan auto-ducking, semuanya aman untuk App Store, dengan biaya satu kali €14,99 — tanpa berlangganan. Pilih SoundSource hanya jika Anda secara khusus memerlukan EQ per aplikasi dan perutean keluaran, dan coba opsi gratis jika Anda merasa nyaman memecahkan masalahnya di seluruh pembaruan macOS.</p>

<p><strong>Siap memberikan volume tersendiri pada setiap aplikasi?</strong> <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> dan siapkan campuran pertama Anda dalam waktu sekitar dua menit.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Cara Membuat Mac Anda Lebih Keras untuk Pendengaran yang Sulit Mendengar",
    description: "Kesulitan mendengarkan Mac bahkan pada volume maksimal? Pelajari cara meningkatkan dan memperjelas audio per aplikasi untuk pendengaran yang mengalami gangguan pendengaran, termasuk SoundDial dan tips bawaan.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Jika Mac Anda tidak cukup keras bahkan pada volume maksimum, perbaikan tercepat yang dapat diandalkan adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, pencampur bilah menu Mac App Store yang memungkinkan Anda meningkatkan aplikasi apa pun melebihi 100% dan membisukan aplikasi lainnya. Itu berarti ucapan yang lebih keras dan jelas dari FaceTime, video, atau pemutar film tanpa mengganggu seluruh sistem Anda. Harganya €14,99, satu kali.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cara Membuat Mac Anda Lebih Keras untuk Pendengaran yang Sulit Mendengar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa memaksimalkan penggeser volume masih belum cukup</h2>
<p>Untuk pendengar yang mengalami gangguan pendengaran, penggeser volume macOS memiliki dua batasan yang membuat frustrasi. Pertama, ini membatasi 100% dari apa yang dihasilkan oleh aplikasi itu sendiri. Jika podcast, video, atau panggilan direkam dengan pelan, "volume penuh" masih terlalu pelan. Kedua, macOS tidak memiliki mixer volume per aplikasi bawaan. Windows telah memilikinya selama bertahun-tahun, tetapi pada Mac setiap aplikasi berbagi satu tingkat master. Jadi saat Anda menaikkan volume untuk mendengar suara lembut, musik latar belakang dan suara notifikasi juga menjadi keras dan tidak nyaman.</p>
<p>Yang sebenarnya Anda butuhkan adalah kemampuan membuat <em>satu</em> aplikasi lebih keras dibandingkan yang lain, mendorongnya melampaui batas normalnya, dan memotong suara yang bersaing sehingga ucapannya menonjol. Itulah celah yang diisi oleh alat-alat ini.</p>

<h2>Pertama, gunakan pengaturan aksesibilitas macOS gratis</h2>
<p>Sebelum menambahkan aplikasi apa pun, ada baiknya menyiapkan apa yang sudah ditawarkan macOS. Ini membantu kejelasan, meskipun tidak menambah kenyaringan:</p>
<ul>
<li><strong>Audio tunggal:</strong> Pengaturan Sistem &rarr; Aksesibilitas &rarr; Audio, aktifkan "Putar audio stereo sebagai mono". Jika pendengaran Anda lebih kuat di satu telinga, ini mengirimkan sinyal penuh ke kedua telinga, sehingga Anda tidak kehilangan separuh dialog.</li>
<li><strong>Penyesuaian saldo:</strong> Di Pengaturan Sistem Suara &rarr;, seret keseimbangan kiri/kanan ke arah telinga Anda yang lebih kuat.</li>
<li><strong>Kurangi suara latar belakang:</strong> Turunkan musik dan suasana di aplikasi yang mengizinkannya, sehingga suara tidak mengganggu soundtrack.</li>
<li><strong>Akomodasi headphone:</strong> Jika Anda menggunakan AirPods atau Beats, Pengaturan Sistem &rarr; Aksesibilitas &rarr; Audio &rarr; Akomodasi Headphone dapat memperkuat suara lembut dan menyetel ucapan.</li>
</ul>
<p>Ini benar-benar berguna dan tidak memerlukan biaya. Tapi tidak satupun dari mereka membuat satu aplikasi senyap <em>lebih keras dari 100%</em>, dan biasanya itulah masalah sebenarnya.</p>

<h2>Cara meningkatkan satu aplikasi melewati 100% dengan SoundDial</h2>
<p>SoundDial ada di bilah menu Anda dan menampilkan penggeser untuk setiap aplikasi yang sedang memutar suara. Berikut alur kerja yang paling membantu bagi penderita gangguan pendengaran:</p>
<ul>
<li><strong>Tingkatkan aplikasi yang Anda dengarkan.</strong> Seret penggesernya ke atas 100% untuk memperkuat panggilan video atau podcast senyap melebihi apa yang diizinkan oleh aplikasi itu sendiri.</li>
<li><strong>Bisukan atau turunkan semuanya.</strong> Tarik ke bawah musik, tab browser, atau suara notifikasi sehingga tidak ada yang menandingi suara yang ingin Anda ikuti.</li>
<li><strong>Aktifkan pengecilan otomatis.</strong> Saat Anda mulai berbicara dalam panggilan, SoundDial secara otomatis menurunkan audio lain sehingga lawan bicara Anda terdengar jelas, lalu memulihkannya setelahnya.</li>
<li><strong>Simpan profil volume.</strong> Buat profil "panggilan video" di mana aplikasi konferensi Anda ditingkatkan dan segalanya senyap, lalu beralih ke profil tersebut secara instan alih-alih menyesuaikannya kembali setiap saat.</li>
<li><strong>Ganti keluaran dengan cepat.</strong> Beralih di antara speaker, headset, atau perangkat yang terhubung dengan alat bantu dengar dari menu yang sama, tanpa menelusuri Pengaturan Sistem.</li>
</ul>
<p>Fitur peningkatan adalah kuncinya di sini. Karena meningkatkan keluaran aplikasi di atas maksimum aslinya, rekaman senyap menjadi sesuatu yang benar-benar dapat Anda dengar, sementara seluruh sistem Anda tetap pada tingkat yang nyaman.</p>

<h2>Penjelasan singkat tentang distorsi</h2>
<p>Peningkatan perangkat lunak apa pun akan memperkuat apa pun yang ada dalam sinyal, sehingga mendorong hingga melampaui 100% pada audio yang sudah bersuara keras dapat menyebabkan kliping. Dalam praktiknya, meningkatkan <em>tenang</em> konten hingga tingkat yang nyaman dan dapat dipahami terdengar bersih. Mulailah dari yang sederhana, angkat bicara hingga ucapannya jelas, dan mundurlah jika mulai terdengar kasar. Melindungi sisa pendengaran Anda itu penting, jadi usahakan untuk mendapatkan kejelasan, bukan kenyaringan maksimum.</p>

<h2>Bagaimana SoundDial dibandingkan dengan alternatifnya</h2>
<p>Anda mempunyai beberapa pilihan, dan kejujuran membantu Anda memilih pilihan yang tepat:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39):</strong> Benar-benar kelas profesional, dengan EQ per aplikasi dan perutean keluaran. Jika Anda ingin menentukan frekuensi gangguan pendengaran, ini sangat berguna. Namun biayanya dua kali lipat lebih mahal, memerlukan pengunduhan langsung, dan menginstal driver perekam audio. Itu lebih banyak pengaturan dan akses sistem daripada yang diinginkan banyak orang.</li>
<li><strong>Background Music (gratis, sumber terbuka):</strong> Menawarkan volume per aplikasi secara gratis, tetapi tidak memiliki peningkatan, profil, dan pengecilan otomatis, dan dapat rusak pada versi macOS yang lebih baru karena terhubung jauh ke dalam sistem audio.</li>
<li><strong>FineTune (gratis, sumber terbuka):</strong> Aplikasi volume bilah menu yang ringan. Baik untuk hal-hal dasar, tetapi tanpa peningkatan, profil, dan pengelakan yang menjadi sandaran pendengar yang mengalami gangguan pendengaran.</li>
<li><strong>eqMac (gratis):</strong> Equalizer dengan booster. Berguna untuk membentuk suara, tetapi dibangun berdasarkan EQ, bukan pencampuran dan profil per aplikasi yang bersih.</li>
</ul>
<p>Dimana <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> yang menonjol adalah keseimbangan harga, keamanan, dan fitur spesifik yang penting di sini. Karena ada di Mac App Store, sudah ditinjau dan dimasukkan ke dalam sandbox oleh Apple, dipasang dengan rapi tanpa DMG, dan tidak memerlukan driver audio atau ekstensi sistem. Anda mendapatkan peningkatan per aplikasi, mute, profil volume, dan pengecilan otomatis dalam satu pembelian satu kali senilai €14,99, tanpa perlu menggali tumpukan audio macOS.</p>

<h2>Intinya</h2>
<p>Siapkan opsi aksesibilitas macOS gratis terlebih dahulu, itu berharga. Namun jika masalah sebenarnya adalah satu aplikasi terlalu senyap, Anda memerlukan alat yang dapat mendorong satu aplikasi melewati 100% dan senyap sisanya. Itulah inti dari peningkatan per aplikasi, dan macOS tidak melakukannya sendiri.</p>

<p>Siap untuk benar-benar mendengarkan Mac Anda? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> seharga €14,99, tingkatkan aplikasi yang Anda perlukan, dan biarkan pengecilan otomatis serta profil membuat ucapan tetap jelas.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Cara Meningkatkan Aplikasi yang Tenang di Mac (Volume Maks Sebelumnya)",
    description: "Satu aplikasi terlalu senyap bahkan pada 100%? Tingkatkan aplikasi tersebut melampaui batas maksimalnya pada Mac dengan SoundDial, pencampur volume per aplikasi. Inilah perbaikan tercepat plus alternatifnya.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Jika satu aplikasi terlalu senyap bahkan pada volume maksimal, perbaikan tercepat yang dapat diandalkan adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, pencampur volume bilah menu per aplikasi untuk macOS. Ini memberi setiap aplikasi penggesernya sendiri ditambah volume <strong>meningkatkan</strong> yang mendorong satu aplikasi melewati 100%, sehingga panggilan video senyap atau tab browser menjadi lebih keras tanpa menyentuh volume sistem Anda. Ini adalah aplikasi €14,99 satu kali di Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cara Meningkatkan Aplikasi yang Tenang di Mac (Volume Maksimal Sebelumnya)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa satu aplikasi senyap bahkan pada kondisi 100%</h2>
<p>macOS hanya memiliki satu volume master. Saat Anda menaikkannya, semuanya menjadi lebih keras. Namun setiap aplikasi juga mengeluarkan suara pada level internalnya masing-masing, dan level tersebut sangat bervariasi. Klip YouTube yang dikuasai secara diam-diam, penelepon Zoom dengan mikrofon yang buruk, game dengan campuran dialog yang rendah, atau tab browser dengan streaming yang lembut semuanya bisa berada jauh di bawah segalanya, bahkan dengan Mac Anda dalam kondisi maksimal.</p>
<p>Masalah sebenarnya: macOS punya <strong>tidak ada mixer volume per aplikasi bawaan</strong>. Windows sudah memilikinya selama bertahun-tahun (Volume Mixer, klik kanan ikon speaker). Di Mac, tidak ada cara asli untuk mengaktifkan satu aplikasi dan membiarkan aplikasi lainnya, dan tentunya tidak ada cara untuk memperkuat satu aplikasi <em>di atas</em> maksimum normalnya. Itulah kesenjangan yang Anda capai.</p>

<h2>Perbaikan tercepat: tingkatkan satu aplikasi saja</h2>
<p>Mixer per aplikasi menyelesaikan masalah ini dengan menyisipkan dirinya di antara aplikasi dan output Anda, sehingga dapat menaikkan atau menurunkan setiap aliran secara independen, dan meningkatkan alirannya melebihi 100%. Dengan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, alurnya pendek:</p>
<ul>
<li>Instal dari Mac App Store dan buka. Itu ada di bilah menu Anda, bukan jendela mengambang.</li>
<li>Klik ikon bilah menu untuk melihat penggeser untuk setiap aplikasi yang sedang memutar audio.</li>
<li>Temukan aplikasi senyap dan seret penggesernya melewati 100% untuk menerapkan peningkatan. Ini memperkuat aplikasi itu saja.</li>
<li>Tinggalkan segala sesuatunya di tempatnya. Volume sistem Anda dan aplikasi lain tetap tidak tersentuh.</li>
</ul>
<p>Karena peningkatannya terjadi per aplikasi, Anda dapat mendorong panggilan video ringan ke tingkat yang nyaman sambil menjaga musik atau notifikasi agar tidak memekakkan telinga. Itulah hal inti yang tidak dapat dilakukan oleh kontrol macOS bawaan.</p>

<h2>Catatan tentang peningkatan dan kliping</h2>
<p>Boost benar-benar berguna, tetapi ini adalah amplifikasi, bukan keajaiban. Jika audio asli suatu aplikasi sangat pelan atau sudah terdistorsi, memutarnya dengan keras dapat menimbulkan kliping atau membuat suara latar belakang menjadi lebih jelas. Dalam praktiknya, peningkatan moderat memperbaiki sebagian besar situasi "panggilan ini terlalu sepi" dengan baik. Dorong ke atas hingga aplikasi terasa nyaman daripada membantingnya ke langit-langit, dan Anda akan menjaga suaranya tetap bersih.</p>

<h2>Selain meningkatkan: apa lagi yang membantu</h2>
<p>Setelah Anda memiliki kontrol per aplikasi, beberapa fitur membuat masalah aplikasi senyap hilang selamanya:</p>
<ul>
<li><strong>Profil volume</strong> — simpan pengaturan (misalnya, "tingkatkan Zoom, turunkan Spotify, nonaktifkan Slack") dan panggil kembali dalam satu klik alih-alih menyeret ulang penggeser setiap rapat.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis mencelupkan aplikasi lain saat aplikasi yang dipilih diputar, sehingga panggilan yang ditingkatkan terdengar jelas melalui audio latar belakang.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi yang berisik tanpa menjeda aplikasi lainnya.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antar speaker, headphone, atau antarmuka eksternal dari menu yang sama.</li>
</ul>

<h2>Bagaimana dengan alternatif gratis dan pro?</h2>
<p>Anda punya pilihan, dan kejujuran penting di sini, jadi inilah pemandangan sebenarnya.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) adalah pilihan kelas pro dengan harga sekitar $39. Ia menghasilkan volume per aplikasi ditambah EQ per aplikasi dan perutean output penuh, lebih banyak daya daripada yang dibutuhkan kebanyakan orang. Keuntungannya: biayanya lebih dari dua kali lipat, ini adalah pengunduhan langsung daripada App Store, dan ia menginstal driver perekam audio untuk melakukan tugasnya. Jika Anda menginginkan perangkat teknisi audio, itu bagus. Jika Anda hanya ingin satu aplikasi lebih keras, itu berlebihan.</p>
<p><strong>Background Music</strong> gratis dan bersumber terbuka, serta dapat melakukan volume dasar per aplikasi. Namun ini adalah proyek komunitas yang memiliki riwayat kegagalan pada versi macOS yang lebih baru, dan tidak memiliki peningkatan melebihi 100%, profil, dan pengelak otomatis. Bagus jika gratis adalah satu-satunya persyaratan dan Anda tidak keberatan jika terjadi kerusakan sesekali.</p>
<p><strong>FineTune</strong> adalah aplikasi bilah menu sumber terbuka gratis, dan <strong>eqMac</strong> adalah EQ dan penguat sistem gratis. Keduanya patut dicoba jika anggaran Anda nol. Ketahuilah bahwa profil tersebut dikelola oleh komunitas, berfokus pada EQ, atau lebih ringan dalam pengelolaan per aplikasi, dan jangan gabungkan profil dan gabungkan dalam satu paket yang sempurna.</p>
<p>Dimana <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> tanah: itu jalan tengah. Lebih murah dari SoundSource, lebih mumpuni dan lebih dapat diandalkan dibandingkan alat gratis, dan ada di dalamnya <strong>Mac App Store</strong>, yang berarti telah ditinjau oleh Apple, dimasukkan ke dalam sandbox, dan diinstal dengan bersih <strong>tidak ada DMG dan tidak ada driver atau ekstensi audio</strong> untuk melesat ke sistem Anda. Bagi kebanyakan orang, rekomendasi jujurnya sederhana: jika Anda menginginkan perbaikan paling mudah yang juga memberi Anda peningkatan, profil, dan pengurangan otomatis, ini adalah nilai terbaik yaitu €14,99 satu kali.</p>

<h2>Jawaban cepat, dinyatakan kembali</h2>
<blockquote>Untuk membuat satu aplikasi Mac lebih keras dari maksimumnya, gunakan pencampur volume per aplikasi dengan boost. Buka SoundDial dari bilah menu, temukan penggeser aplikasi senyap, dan seret melewati 100%. Hanya aplikasi itu yang menjadi lebih keras.</blockquote>

<p>Berhentilah melawan penggeser volume tunggal untuk seluruh Mac Anda. Dapatkan <a href="https://apps.apple.com/app/id6772792641">SoundDial di Mac App Store</a> seharga €14,99 sekali, tingkatkan aplikasi senyap itu melewati batasnya dalam hitungan detik, dan simpan profil sehingga Anda tidak perlu memikirkannya lagi.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Cara Memperkuat Video & Podcast Senyap di Mac Anda",
    description: "Beberapa video, podcast, dan ceramah YouTube terlalu senyap bahkan pada 100%. Berikut cara meningkatkan volume per aplikasi melewati batas maksimal di macOS dengan SoundDial.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Perbaikan tercepat dan andal adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mixer bilah menu Mac App Store yang memberi setiap aplikasi penggeser volumenya sendiri dan nyata <strong>meningkatkan</strong> yang melampaui 100%. Buka browser atau pemutar podcast Anda, seret penggesernya ke atas maksimal, dan video atau ceramah yang tenang akan langsung menjadi lebih nyaring — tanpa driver, tanpa perlu memulai ulang.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cara Memperkuat Video &amp; Podcast Senyap di Mac Anda" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa beberapa video dan podcast terlalu senyap</h2>
<p>Anda mengubah Mac Anda hingga 100%, dan wawancaranya masih berupa bisikan. Ini bukan imajinasimu. Audio dikuasai pada tingkat kenyaringan yang sangat berbeda — webinar yang direkam pada mikrofon laptop, podcast indie yang tenang, atau unggahan ceramah lama dapat berkekuatan 15–20 dB di bawah video YouTube yang diproduksi secara profesional. Volume sistem Anda sudah maksimal, jadi tidak ada ruang tersisa untuk diberikan.</p>
<p>Inilah tangkapannya: macOS punya <strong>tidak ada mixer volume per aplikasi bawaan</strong>. Windows telah memilikinya selama bertahun-tahun (Volume Mixer di system tray), tetapi pada Mac, tombol volume berpindah satu tingkat global untuk semuanya. Tidak ada cara asli untuk mengatakan "buat hanya tab browser ini lebih keras" — apalagi mendorong satu aplikasi melewati 100%.</p>

<h2>Perbaikan sebenarnya: peningkatan volume per aplikasi</h2>
<p>Untuk membuat sumber yang tenang menjadi lebih keras dari biasanya yang dimungkinkan oleh speaker Anda, Anda memerlukan perangkat lunak yang menerapkan penguatan <em>aplikasi itu secara spesifik</em> dan dapat menguat melampaui batas atas 100%. Itulah yang dilakukan oleh mixer per aplikasi dengan fitur boost.</p>
<p>Dengan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, setiap aplikasi yang berjalan muncul di daftar bilah menu dengan penggesernya sendiri. Geser aplikasi senyap hingga 150% atau 200% dan audio diperkuat secara real-time. Karena peningkatannya terjadi per aplikasi, semua hal lainnya — musik, notifikasi, panggilan di jendela lain — tetap pada tingkat normal. Anda tidak menghabiskan seluruh sistem Anda untuk mendengarkan satu podcast lembut.</p>
<blockquote>Volume global menanyakan "seberapa keras Mac?" Mixer per aplikasi menanyakan "seberapa keras suaranya <em>ini</em> aplikasi?" — yang merupakan pertanyaan yang sebenarnya penting ketika satu video senyap dan sisanya baik-baik saja.</blockquote>

<h2>Cara meningkatkan video atau podcast yang tenang, langkah demi langkah</h2>
<ul>
<li><strong>Instal SoundDial</strong> dari Mac App Store. Aplikasi ini sudah di-sandbox dan ditinjau oleh Apple, sehingga dapat diinstal dengan bersih seperti aplikasi lainnya — tanpa pengunduhan terpisah, tanpa driver audio, tanpa tantangan izin.</li>
<li><strong>Mulai bermain</strong> video senyap, episode podcast, atau ceramah di aplikasi apa pun yang Anda gunakan — Safari, Chrome, klien podcast, VLC.</li>
<li><strong>Klik ikon SoundDial</strong> di bilah menu Anda. Anda akan melihat penggeser untuk setiap aplikasi yang sedang mengeluarkan suara.</li>
<li><strong>Tarik penggeser aplikasi tersebut ke atas 100%</strong> — coba 150% dulu, lalu dorong lebih tinggi jika masih terlalu empuk. Perubahannya instan.</li>
<li><strong>Tinggalkan yang lainnya.</strong> Hanya aplikasi yang Anda tingkatkan yang menjadi lebih keras; sistem Anda tetap seimbang.</li>
</ul>
<p>Jika Anda mendapati diri Anda meningkatkan aplikasi yang sama setiap hari — misalnya, pemutar podcast dan browser — Anda dapat menyimpan pengaturan tersebut sebagai <strong>profil volume</strong> dan mengingatnya kembali dalam satu klik alih-alih menyesuaikannya kembali setiap kali.</p>

<h2>Sebuah kata peringatan dalam meningkatkan</h2>
<p>Memperkuat melewati 100% menambah keuntungan, dan keuntungan memiliki batas. Dorong rekaman yang sangat senyap dan berkualitas rendah dengan cukup keras dan Anda mungkin mendengar kliping atau distorsi — itu adalah sumber sinyal yang hilang, bukan cacat pada aplikasi. Tingkatkan suara hingga terdengar nyaman, lalu turunkan kembali jika mulai terdengar keras. Pada speaker laptop internal, peningkatan yang berlebihan juga dapat membebani driver, jadi lebih mudah menggunakannya dibandingkan dengan headphone yang bagus atau speaker eksternal.</p>

<h2>Bagaimana dengan opsi gratis atau bawaan?</h2>
<p>Anda mempunyai alternatif lain, dan ada baiknya Anda jujur mengenai hal tersebut:</p>
<ul>
<li><strong>Volume sistem + penggeser tingkat aplikasi.</strong> Beberapa pemutar (VLC, beberapa browser melalui ekstensi) memungkinkan Anda meningkatkan audionya sendiri. Baik jika Anda hanya membutuhkannya dalam satu aplikasi — tetapi Anda terjebak dalam mengonfigurasi setiap aplikasi secara terpisah, tanpa kontrol terpadu dan tanpa profil.</li>
<li><strong>eqMac</strong> adalah EQ dan booster gratis. Ini dapat meningkatkan kenyaringan seluruh sistem, tetapi ini adalah alat global, bukan pencampur per aplikasi yang bersih, dan berfungsi pada tingkat keluaran keseluruhan.</li>
<li><strong>Background Music</strong> gratis dan bersumber terbuka serta menawarkan volume per aplikasi. Tapi itu bergantung pada pengaturan pengambilan audio yang dapat rusak pada versi macOS yang lebih baru, dan tidak memiliki peningkatan khusus, profil, dan pengelak otomatis.</li>
<li><strong>FineTune</strong> adalah aplikasi bilah menu sumber terbuka gratis — opsi ringan jika Anda menginginkan dasar-dasarnya dan tidak keberatan dengan perangkat lunak yang dikelola komunitas.</li>
<li><strong>SoundSource</strong> oleh Rogue Amoeba (~$39) adalah kelas berat pro-grade: EQ per aplikasi, perutean keluaran, berhasil. Ini juga memerlukan pengunduhan dan driver perekam audio, dan biayanya lebih dari dua kali lipat SoundDial. Berlebihan jika yang Anda inginkan hanyalah membuat audio senyap menjadi lebih keras.</li>
</ul>

<h2>Mengapa SoundDial adalah pilihan praktis</h2>
<p>SoundDial berada di posisi yang tepat untuk masalah ini. Dia <strong>€14,99 satu kali</strong> — tidak ada langganan — dan tetap ada di <strong>Mac App Store</strong>, yang berarti aplikasi tersebut dimasukkan ke dalam sandbox, ditinjau oleh Apple, dan dipasang tanpa DMG atau ekstensi sistem apa pun yang dapat dipercaya. Anda mendapatkan peningkatan per aplikasi yang Anda inginkan, ditambah profil, bisu per aplikasi, peralihan keluaran cepat, dan <strong>merunduk otomatis</strong> yang menurunkan aplikasi lain saat Anda perlu fokus pada satu aplikasi. Ia melakukan hal-hal keras dengan sederhana, dan melakukan sisanya dengan baik.</p>

<p><strong>Bosan berusaha mendengarkan video dan podcast yang tenang?</strong> <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> seharga €14,99 dan memberikan volume tersendiri pada setiap aplikasi — dengan dorongan untuk mendengar apa pun dengan jelas.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Cara Mengatur Volume Berbeda untuk Setiap Aplikasi di Mac",
    description: "macOS tidak memiliki pencampur volume per aplikasi bawaan. Berikut cara mengatur tingkat volume yang independen dan persisten untuk setiap aplikasi di Mac menggunakan SoundDial dan alternatifnya.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>macOS tidak memiliki cara bawaan untuk menyetel volume berbeda untuk setiap aplikasi, jadi Anda memerlukan pencampur volume bilah menu. Perbaikan tercepat dan paling andal adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikasi Mac App Store yang memberi setiap aplikasi penggeser volumenya sendiri, mute per aplikasi, dan peningkatan yang mendorong aplikasi senyap melewati 100%. Tetapkan level Anda satu kali dan level tersebut akan bertahan.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cara Mengatur Volume Berbeda untuk Setiap Aplikasi di Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa Mac tidak memiliki kontrol volume per aplikasi</h2>
<p>Jika Anda beralih dari Windows, Anda mungkin mencari yang setara dengan Windows Volume Mixer, panel kecil tempat setiap aplikasi memiliki penggesernya sendiri. Itu tidak ada di sana. macOS hanya menawarkan satu volume sistem global. Baik itu video YouTube, panggilan Zoom, Spotify, atau game, semuanya memiliki level master yang sama.</p>
<p>Tidak apa-apa sampai tidak. Obrolan Discord menenggelamkan musik Anda. Iklan browser meledak dengan volume penuh sementara podcast Anda diputar dengan tenang di bawahnya. Game Anda memekakkan telinga tetapi panggilan suara di latar belakang terlalu lembut. Satu-satunya "solusi" yang diberikan Apple kepada Anda adalah membuka setiap aplikasi dan menyesuaikan volume internalnya secara manual, jika aplikasi tersebut memilikinya, dan mengulanginya setiap sesi.</p>
<p>Untuk mendapatkan kontrol nyata per aplikasi, Anda memerlukan utilitas kecil yang berada di antara aplikasi dan perangkat keluaran Anda. Di bawah ini adalah cara melakukannya dengan benar, ditambah catatan jujur ​​​​tentang alternatifnya.</p>

<h2>Cara tercepat: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ada di bilah menu Anda dan mencantumkan setiap aplikasi yang sedang memutar audio. Masing-masing mendapat penggeser independen. Inilah keseluruhan alur kerja:</p>
<ul>
<li><strong>Instal dari Mac App Store.</strong> Ini telah ditinjau dan di-sandbox oleh Apple, jadi tidak ada DMG, tidak ada driver audio, dan tidak ada kernel atau ekstensi sistem untuk disetujui. Ini diinstal seperti aplikasi normal lainnya dan dapat dihapus dengan cara yang sama.</li>
<li><strong>Klik ikon bilah menu.</strong> Anda akan melihat penggeser untuk setiap aplikasi aktif, ditambah kontrol utama.</li>
<li><strong>Seret untuk mengatur level.</strong> Turunkan Discord, dorong Spotify ke atas, nonaktifkan aplikasi tab browser yang berisik sepenuhnya dengan satu klik.</li>
<li><strong>Tingkatkan aplikasi yang senyap.</strong> Jika suatu aplikasi terlalu lunak bahkan pada 100%, dorong aplikasi tersebut ke atas 100% dengan peningkatan per aplikasi.</li>
<li><strong>Simpan profil.</strong> Simpan campuran "permainan", "panggilan kerja", atau "musik" Anda dan beralih di antara campuran tersebut secara instan alih-alih menyeret ulang penggeser setiap hari.</li>
</ul>
<p>Dua fitur patut disebutkan karena dapat memecahkan skenario yang paling mengganggu:</p>
<ul>
<li><strong>Merunduk otomatis</strong> secara otomatis menurunkan aplikasi lain saat aplikasi yang dipilih diputar, sehingga musik Anda turun saat ada panggilan masuk dan kembali lagi setelahnya, tanpa perlu mengotak-atik secara manual.</li>
<li><strong>Peralihan keluaran cepat</strong> memungkinkan Anda beralih antara headphone dan speaker dari menu yang sama tanpa masuk ke Pengaturan Sistem.</li>
</ul>
<p>Karena level diingat per aplikasi dan disimpan ke dalam profil, inilah bagian yang sebenarnya diinginkan kebanyakan orang: Anda mengaturnya sekali saja <em>tetap</em> mengatur.</p>

<h2>Alternatif gratis dan berbayar, dibandingkan dengan jujur</h2>
<p>SoundDial bukan satu-satunya pilihan, dan tergantung kebutuhan Anda, alat gratis mungkin sudah cukup. Berikut ini ikhtisar yang adil.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource adalah kelas berat kelas pro. Selain volume per aplikasi, ia juga melakukan EQ per aplikasi dan perutean output penuh, sehingga Anda dapat mengirim satu aplikasi ke headphone dan aplikasi lainnya ke speaker. Benar-benar luar biasa. Pengorbanannya: biayanya sekitar $39, dan ini bukan instalasi App Store yang bersih, ini adalah unduhan langsung yang memerlukan driver perekam audio untuk ditambahkan ke sistem Anda. Jika Anda seorang profesional audio yang membutuhkan EQ dan perutean, itu sangat berharga. Jika Anda hanya ingin setiap aplikasi berada pada volume yang tepat, diperlukan lebih banyak alat dan pengaturan lebih dari yang Anda perlukan.</p>

<h2>Background Music (sumber terbuka, gratis)</h2>
<p>Background Music adalah aplikasi sumber terbuka gratis yang menawarkan volume per aplikasi dan jeda otomatis. Kendalanya adalah keandalan: ia memasang perangkat audio virtual dan memiliki riwayat kerusakan pada rilis macOS yang lebih baru, terkadang memerlukan penginstalan ulang atau perbaikan setelah pembaruan. Itu juga tidak memiliki peningkatan, profil tersimpan, dan pengelak otomatis yang sebenarnya. Bagus jika Anda ingin gratis dan tidak keberatan dengan pemeliharaan sesekali.</p>

<h2>FineTune dan eqMac</h2>
<p>FineTune adalah aplikasi bilah menu sumber terbuka gratis, titik awal yang ringan. eqMac adalah equalizer gratis dengan booster di seluruh sistem, yang lebih ditujukan pada EQ dan perolehan secara keseluruhan dibandingkan memberikan slider persisten pada setiap aplikasi. Keduanya patut dicoba jika kebutuhan Anda terbatas, tetapi tidak ada yang berpusat pada alur kerja "volume berbeda per aplikasi, disimpan sebagai profil".</p>

<h2>Mana yang harus Anda pilih?</h2>
<ul>
<li><strong>Ingin berfungsi dengan rapi, dengan profil dan pengecilan otomatis?</strong> SoundDial seharga €14,99 satu kali, dari App Store, tanpa driver untuk diinstal.</li>
<li><strong>Butuh EQ per aplikasi dan perutean audio dan tidak keberatan dengan harga atau drivernya?</strong> SoundSource.</li>
<li><strong>Mau gratis dan boleh mengutak-atik kapan macOS update?</strong> Background Music, FineTune, atau eqMac.</li>
</ul>
<p>Keuntungan sebenarnya dari SoundDial adalah kombinasinya: volume independen, mute, dan boost untuk setiap aplikasi, disimpan ke dalam profil yang dapat dialihkan, dengan pengecilan otomatis, semua di dalam unduhan App Store dalam kotak pasir yang dapat Anda percayai dan copot pemasangannya dalam satu klik, dengan biaya satu kali €14,99, bukan berlangganan.</p>

<blockquote>Tanpa driver, tanpa ekstensi, tanpa DMG. Atur volume setiap aplikasi satu kali, simpan sebagai profil, dan biarkan pengelak otomatis menangani sisanya.</blockquote>

<p>Siap memberikan volume tersendiri pada setiap aplikasi? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> dan atur campuran sempurna Anda dalam waktu sekitar satu menit.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Jadikan Satu Aplikasi Lebih Senyap Dibandingkan Aplikasi Lainnya di Mac",
    description: "Satu aplikasi keras menenggelamkan sisanya di Mac Anda? Inilah cara tercepat dan andal untuk mengecilkan volume satu aplikasi tanpa menyentuh aplikasi lainnya.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Untuk mematikan satu aplikasi sementara yang lainnya tetap ada, gunakan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, pencampur volume bilah menu per aplikasi untuk macOS. Buka, temukan aplikasi keras dalam daftar, dan seret penggesernya ke bawah. Aplikasi tersebut langsung menjadi lebih senyap sementara musik, panggilan, dan audio lainnya tetap pada levelnya sendiri. Ini merupakan perbaikan tercepat dan paling dapat diandalkan.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Jadikan Satu Aplikasi Lebih Senyap Dibandingkan Aplikasi Lainnya di Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa macOS membuat ini begitu sulit</h2>

<p>Inilah kebenaran yang membuat frustrasi: macOS tidak memiliki pencampur volume per aplikasi bawaan. Windows sudah memilikinya selama bertahun-tahun (klik kanan ikon volume, buka Volume Mixer, selesai), tetapi pada Mac tombol volume dan penggeser bilah menu hanya mengontrol satu hal: keluaran master. Matikan dan semuanya menjadi lebih tenang bersama-sama. Nyalakan dan aplikasi kerasnya tetap keras, hanya lebih keras bersama yang lainnya.</p>

<p>Jadi ketika efek suara game meledak, tab browser memutar iklan secara otomatis, atau bunyi notifikasi terus muncul di podcast Anda, satu-satunya pilihan asli Anda menjadi kikuk: mematikan seluruh sistem, menggali pengaturan volume masing-masing aplikasi (bahkan jika ada), atau keluar dari pelaku sepenuhnya. Semua itu tidak memungkinkan Anda mengatakan "buat aplikasi ini lebih senyap dan biarkan yang lainnya".</p>

<h2>Perbaikan cepat: pencampur volume per aplikasi</h2>

<p>Pencampur volume per aplikasi memberikan penggeser independen pada setiap aplikasi yang berjalan. Itulah kontrol yang Anda lewatkan. Dengan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> tampilannya seperti ini:</p>

<ul>
<li><strong>Buka mixer bilah menu.</strong> Klik ikon SoundDial dan Anda akan melihat daftar langsung setiap aplikasi yang sedang memutar audio.</li>
<li><strong>Temukan yang paling keras.</strong> Game, browser, video call, notifikasi berbunyi, apapun yang menenggelamkan selebihnya.</li>
<li><strong>Tarik penggesernya ke bawah.</strong> Atur ke 40%, 20%, dimana pun yang dirasa seimbang. Perubahannya terjadi secara instan dan hanya memengaruhi aplikasi tersebut.</li>
<li><strong>Tinggalkan yang lainnya.</strong> Pemutar musik Anda, panggilan Anda, tab Anda yang lain, semuanya mempertahankan volume yang Anda atur untuknya.</li>
</ul>

<p>Anda juga dapat menonaktifkan sepenuhnya satu aplikasi dengan satu klik saat aplikasi lain terus diputar, atau meningkatkan aplikasi yang senyap di atas 100% jika terlalu pelan. Tidak perlu memulai ulang aplikasi, tidak perlu menyelami menu.</p>

<h2>Kasus umum di mana hal ini menyelamatkan Anda</h2>

<ul>
<li><strong>Permainan keras dengan musik latar.</strong> Jatuhkan game ke tingkat yang nyaman dan pertahankan playlist Anda dengan volume penuh di bawahnya.</li>
<li><strong>Iklan browser dan video yang melonjak.</strong> Sematkan browser Anda lebih rendah sehingga pemutaran otomatis yang mengejutkan tidak akan membuat Anda terkejut.</li>
<li><strong>Notifikasi berbunyi melalui panggilan atau podcast.</strong> Matikan aplikasi yang banyak notifikasinya tanpa membungkam audio yang sebenarnya Anda pedulikan.</li>
<li><strong>Panggilan video senyap di bawah media keras.</strong> Daripada mengecilkan suara aplikasi, tingkatkan panggilan di atas 100% sehingga Anda dapat mendengar orang dengan jelas.</li>
</ul>

<h2>Atur sekali dengan profil volume dan pengecilan otomatis</h2>

<p>Memperbaiki satu aplikasi yang berisik itu bagus, tetapi Anda mungkin ingin aplikasi itu tetap diperbaiki. SoundDial memiliki dua fitur yang menjadikannya permanen:</p>

<p><strong>Profil volume</strong> memungkinkan Anda menyimpan serangkaian level per aplikasi dan mengingatnya kembali dalam satu klik. Buat profil "Permainan" yang tingkat permainannya 30% dan musiknya 100%, dan profil "Kantor" yang tingkatkan panggilan teleponnya dan yang lainnya diperkecil. Beralih konteks tanpa menyeret ulang penggeser setiap saat.</p>

<p><strong>Merunduk otomatis</strong> secara otomatis menurunkan aplikasi lain saat aplikasi yang dipilih diputar, lalu mengembalikannya lagi setelahnya, sehingga aplikasi keras tidak pernah sepenuhnya membajak audio Anda. Antara profil, merunduk, dan peralihan output cepat (melompat antara speaker dan headphone tanpa membuka Pengaturan Sistem), Anda mengatur keseimbangan satu kali dan berhenti mengatur volume.</p>

<h2>Bagaimana SoundDial dibandingkan dengan alternatifnya</h2>

<p>Ada cara lain untuk mendapatkan volume per aplikasi di Mac. Berikut tampilan jujurnya:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> benar-benar kelas pro: EQ per aplikasi dan perutean keluaran penuh di atas kontrol volume. Namun biayanya lebih dari dua kali lipat, dan memerlukan pengunduhan terpisah ditambah driver perekam audio. Jika Anda menginginkan perangkat tingkat studio, itu bagus. Jika Anda hanya ingin menolak satu aplikasi, itu lebih dari yang Anda perlukan.</li>
<li><strong>Background Music</strong> gratis dan bersumber terbuka, dan itu bagus, tetapi dapat rusak pada versi macOS yang lebih baru, dan tidak memiliki peningkatan volume, profil, dan pengecilan otomatis.</li>
<li><strong>FineTune</strong> adalah aplikasi bilah menu sumber terbuka gratis, dan <strong>eqMac</strong> adalah EQ gratis dengan booster. Keduanya patut dicoba jika gratis adalah prioritas Anda, tetapi Anda memperdagangkan kualitas, keandalan, dan fitur demi harga.</li>
</ul>

<p>SoundDial berada di posisi terbaik: €14,99 satu kali, tanpa berlangganan. Karena ada di Mac App Store, ini telah ditinjau dan dimasukkan ke dalam sandbox oleh Apple, dan diinstal dengan bersih tanpa DMG, tanpa driver audio, dan tanpa ekstensi sistem yang perlu disetujui. Anda mendapatkan fitur yang benar-benar penting untuk masalah ini, volume per aplikasi, mute, boost, profil, dan pengecilan otomatis, tanpa label harga $39 atau alat gratis yang rapuh.</p>

<h2>Intinya</h2>

<p>macOS tidak akan membiarkan Anda mematikan satu aplikasi saja, tapi itu adalah celah yang dapat Anda tutup dalam hitungan detik. Instal mixer per aplikasi, seret penggeser aplikasi keras ke bawah, dan sisa audio Anda tetap berada di tempat yang Anda inginkan. Simpan profil dan Anda tidak akan pernah bertengkar lagi.</p>

<p><strong>Siap untuk membungkam satu aplikasi yang terus menenggelamkan aplikasi lainnya?</strong> Dapatkan <a href="https://apps.apple.com/app/id6772792641">SoundDial di Mac App Store</a> seharga €14,99, satu pembayaran, tanpa driver, tanpa berlangganan.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mac Audio Mixer untuk Streamer: Balance Mic, Game & Musik",
    description: "Cara tercepat untuk menyeimbangkan mikrofon, audio game, musik, dan peringatan saat streaming di Mac. SoundDial memberi Anda pencampur volume per aplikasi dengan profil dan pengecilan.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Untuk menyeimbangkan mikrofon, game, musik, dan peringatan saat streaming di Mac, perbaikan tercepat yang dapat diandalkan adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, pencampur volume bilah menu per aplikasi. macOS tidak memiliki mixer internal, jadi SoundDial memungkinkan Anda mengatur level independen per aplikasi, meningkatkan sumber senyap, menyimpan profil streaming, dan memutar musik secara otomatis saat Anda berbicara.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Audio Mixer untuk Streamer: Menyeimbangkan Mikrofon, Game &amp; Musik" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Masalahnya: macOS tidak memiliki kontrol volume per aplikasi</h2>
<p>Windows telah memiliki Volume Mixer selama bertahun-tahun. macOS masih belum mengirimkannya. Penggeser volume sistem Anda memindahkan semuanya sekaligus, yang tidak berguna saat Anda sedang siaran langsung. Selama streaming, Anda menggunakan setidaknya empat sumber yang semuanya berjuang untuk mendapatkan hasil yang sama:</p>
<ul>
<li><strong>Pemantauan suara / mikrofon Anda</strong> — perlu diutamakan di atas segalanya.</li>
<li><strong>Audio permainan</strong> — keras, dinamis, dan rentan terhadap spiking saat beraksi.</li>
<li><strong>Musik latar</strong> — harus tetap diam di bawah komentar Anda.</li>
<li><strong>Peringatan dan suara obrolan</strong> — Discord, Stream Deck, peringatan pengikut, pemberitahuan.</li>
</ul>
<p>Tanpa kontrol per-aplikasi, Anda akhirnya menggunakan penggeser dalam aplikasi game, mematikan Spotify dengan tangan, dan berdoa agar cutscene yang keras tidak membuat pemirsa Anda kaget. Itu bukan campuran, ini pengendalian kerusakan.</p>

<h2>Apa yang perlu dilakukan oleh mixer streaming yang tepat</h2>
<p>Pengaturan audio yang berfokus pada kreator di Mac akan memberi Anda empat hal: level per aplikasi yang independen, kemampuan untuk meningkatkan sumber yang terlalu senyap, konfigurasi tersimpan yang dapat Anda ingat secara instan, dan pengecilan otomatis sehingga musik berhenti saat Anda berbicara. SoundDial mencakup keempat bilah menu.</p>

<h3>1. Volume independen untuk setiap aplikasi</h3>
<p>Atur game ke 60%, musik ke 25%, Discord ke 80%, dan browser Anda ke 40% — setiap aplikasi memiliki penggesernya sendiri. Tidak ada yang merembes ke hal lain. Anda juga dapat membisukan per-aplikasi secara instan ketika suatu sumber berperilaku buruk di tengah-tengah streaming, tanpa menyentuh aplikasi itu sendiri.</p>

<h3>2. Peningkatan volume untuk sumber senyap</h3>
<p>Beberapa aplikasi dan game terlalu senyap bahkan pada kondisi 100%. Peningkatan per aplikasi SoundDial mendorong sumber melampaui batas normalnya sehingga game yang tidak jelas atau video bervolume rendah berada di tempat yang Anda perlukan — tanpa pengkodean ulang, tanpa plugin.</p>

<h3>3. Profil volume untuk adegan berbeda</h3>
<p>Ini adalah fitur yang paling menghemat waktu streamer. Campuran "Just Chatting" Anda (musik naik, permainan turun) berbeda dari campuran "Boss Fight" Anda (permainan naik, musik hampir senyap), yang berbeda dari campuran "BRB" Anda. Simpan masing-masing sebagai profil dan beralih dengan satu klik alih-alih menyeret empat penggeser secara langsung.</p>

<h3>4. Merunduk secara otomatis sehingga musik mereda sesuai suara Anda</h3>
<p>Pengecilan otomatis secara otomatis menurunkan audio latar belakang saat Anda berbicara dan mengembalikannya saat Anda berhenti. Bagi streamer solo, inilah perbedaan antara komentar yang jelas dan musik yang terus-menerus mengubur suara Anda — ditangani secara otomatis, bukan secara manual.</p>

<h2>Dimana OBS cocok</h2>
<p>OBS adalah alat siaran Anda, bukan pencampur volume desktop Anda. OBS mengontrol level yang masuk ke streaming melalui panel dan filter Audio Mixer, tetapi OBS bekerja dari sumber audio yang ditangkapnya — OBS tidak menjangkau aplikasi macOS individual dan mematikannya di level sistem. Di Mac, mendapatkan audio desktop per aplikasi yang bersih ke OBS selalu menjadi bagian yang sulit.</p>
<p>Alur kerja praktisnya: gunakan SoundDial untuk menyetel level aktual per aplikasi di Mac Anda sehingga yang keluar sudah seimbang, lalu biarkan OBS menangkap dan menyempurnakan level siaran. Atur campuran satu kali pada sumbernya dan OBS tidak akan kesulitan lagi. Peralihan output cepat di SoundDial juga memungkinkan Anda beralih antara headphone dan speaker tanpa perlu masuk ke Pengaturan Sistem antar adegan.</p>

<h2>SoundDial vs. alternatifnya</h2>
<p>Anda punya pilihan, dan kejujuran penting di sini:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> — kelas pro dengan EQ per aplikasi dan perutean keluaran penuh. Ini luar biasa, tetapi biayanya lebih dari dua kali lipat, memerlukan pengunduhan langsung, dan menginstal driver perekam audio. Berlebihan jika Anda terutama membutuhkan level per aplikasi yang bersih, peningkatan, dan pengecilan.</li>
<li><strong>Background Music (gratis, sumber terbuka)</strong> — benar-benar berguna dan gratis, tetapi dapat rusak pada versi macOS yang lebih baru, dan tidak memiliki peningkatan, tidak ada profil, dan tidak ada pengelompokan otomatis — fitur persis seperti yang diandalkan oleh streamer.</li>
<li><strong>FineTune (aplikasi bilah menu sumber terbuka gratis)</strong> — kontrol per aplikasi yang ringan, namun merupakan proyek komunitas tanpa kombinasi profil-plus-penghindaran yang dibuat untuk streaming langsung.</li>
<li><strong>eqMac (EQ + booster gratis)</strong> — bagus untuk membentuk dan meningkatkan nada, tetapi ini adalah equalizer, bukan mixer streaming per aplikasi.</li>
</ul>
<p>Sudut SoundDial : a <strong>€14,99 satu kali</strong> pembelian di <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Telah ditinjau oleh Apple, dimasukkan ke dalam kotak pasir, dan dipasang dengan bersih tanpa DMG dan tanpa driver audio atau ekstensi sistem. Bagian terakhir itu penting bagi streamer: lebih sedikit komponen tingkat kernel berarti lebih sedikit kerusakan mendadak ketika macOS diperbarui pada malam sebelum streaming Anda.</p>

<h2>Pertukaran yang jujur</h2>
<p>Jika Anda memerlukan EQ tingkat siaran dan rantai perutean yang rumit, SoundSource layak mendapatkannya. Jika Anda menginginkan alat pengotak-atik gratis dan tidak keberatan jika terjadi kerusakan sesekali, Background Music atau FineTune bisa digunakan. Namun jika Anda menginginkan perpaduan yang benar-benar dibutuhkan oleh streaming — level per aplikasi, peningkatan, profil adegan yang disimpan, dan pengecilan otomatis — dari instalasi App Store yang aman dan bertahan dari pembaruan macOS, SoundDial adalah jalur paling langsung untuk mendapatkan uang.</p>

<p><strong>Siap memperbaiki audio streaming Anda?</strong> Dapatkan <a href="https://apps.apple.com/app/id6772792641">SoundDial di Mac App Store</a> seharga €14,99 — atur level mikrofon, game, musik, dan peringatan satu kali, simpan sebagai profil, dan biarkan suara Anda tetap terjaga secara otomatis.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Cara Memperbaiki Audio Berderak dan Muncul di macOS Tahoe",
    description: "Audio berderak atau bermunculan setelah memperbarui ke macOS Tahoe 26? Perbaiki dengan mencocokkan laju sampel, menyetel ulang CoreAudio, memeriksa codec Bluetooth Anda, dan menghapus konflik plugin. Berikut urutan pemecahan masalah selengkapnya.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Berderak dan muncul setelah memperbarui ke macOS Tahoe 26 hampir selalu merupakan ketidakcocokan laju sampel, negosiasi codec Bluetooth yang tidak stabil, atau proses CoreAudio yang macet. Perbaiki dengan mencocokkan laju sampel keluaran di Pengaturan Audio MIDI, mengatur ulang <code>coreaudiod</code>, melupakan dan memasangkan kembali headphone Bluetooth, dan menghentikan host plug-in audio. Kerjakan semuanya secara berurutan di bawah ini.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cara Memperbaiki Audio Berderak dan Muncul di macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mulailah dengan perbaikan yang murah</h2>

<p>Sebelum Anda membahas hal teknis apa pun, singkirkan dua hal yang dapat menyelesaikan sebagian besar kasus dalam waktu kurang dari satu menit:</p>

<ul>
<li><strong>Mulai ulang Mac.</strong> Pembaruan Tahoe sering kali membuat daemon audio dalam keadaan setengah bermigrasi. Reboot yang bersih akan memuat ulang CoreAudio dari awal dan menghapus sebagian besar keretakan pasca-pembaruan.</li>
<li><strong>Cabut dan pasang kembali perangkat keluaran.</strong> Jika itu adalah USB DAC, dok, atau antarmuka audio, putuskan sambungannya, tunggu beberapa detik, lalu sambungkan kembali. Coba juga port USB lain, idealnya port langsung di Mac, bukan melalui hub. Hub dan layar yang meneruskan audio adalah sumber suara pop yang umum.</li>
</ul>

<p>Jika suara bising tetap muncul saat reboot, itu masalah konfigurasi, bukan kesalahan. Terus berlanjut.</p>

<h2>Cocokkan frekuensi sampel (penyebab paling umum)</h2>

<p>Kresek Tahoe klasik berasal dari ketidaksesuaian tingkat sampel antara apa yang diinginkan perangkat Anda dan apa yang dikirimkan macOS. Saat aplikasi memutar audio 44,1 kHz dan sistem dikunci pada 48 kHz (atau sebaliknya), pengambilan sampel ulang dapat tersendat atau muncul.</p>

<ul>
<li>Buka <strong>Pengaturan MIDI Audio</strong> (di Aplikasi → Utilitas, atau cari Spotlight).</li>
<li>Pilih perangkat keluaran Anda di sidebar kiri.</li>
<li>Lihatlah <strong>Format</strong> tarik-turun. Coba atur ke <strong>48000.0 Hz, Bilangan Bulat 2ch-24bit</strong> dan tes.</li>
<li>Jika letupan terus berlanjut, alihkan ke <strong>44100,0Hz</strong> dan uji lagi.</li>
<li>Untuk antarmuka, pastikan laju sampel cocok dengan laju proyek DAW Anda.</li>
</ul>

<p>Mengalihkan format juga memaksa CoreAudio untuk menegosiasikan ulang koneksi, yang dengan sendirinya memperbaiki banyak kasus bahkan ketika Anda kembali menggunakan nilai yang sama.</p>

<h2>Setel ulang CoreAudio</h2>

<p>CoreAudio berjalan sebagai daemon latar belakang yang disebut <code>coreaudiod</code>. Setelah pembaruan besar macOS, status perangkat dapat tetap basi. Memulai ulang aman dan langsung berlaku, tanpa perlu reboot.</p>

<p>Buka Terminal dan jalankan:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Masukkan kata sandi Anda saat diminta. Audio Anda akan terhenti sesaat, kemudian daemon diluncurkan kembali secara otomatis dengan keadaan bersih. Ini adalah satu-satunya perbaikan paling efektif untuk keretakan yang muncul entah dari mana pada mesin yang baik-baik saja sebelum pembaruan.</p>

<h2>Periksa headphone dan codec Bluetooth Anda</h2>

<p>Jika bunyi berderak hanya terjadi pada AirPods atau headphone Bluetooth lainnya, masalahnya biasanya pada negosiasi codec, bukan pada speaker Anda. Kualitas audio nirkabel menurun saat koneksi macet atau saat macOS beralih ke mode panggilan bandwidth rendah.</p>

<ul>
<li><strong>Lupakan dan pasangkan kembali perangkat.</strong> Buka Pengaturan Sistem → Bluetooth, lepaskan headphone, lalu pasangkan kembali. Ini mengatur ulang codec yang dinegosiasikan.</li>
<li><strong>Perhatikan penurunan mode panggilan.</strong> Saat aplikasi membuka mikrofon, macOS mengalihkan headset Bluetooth ke profil dua arah berkualitas rendah, yang terdengar renyah. Keluar dari konferensi dan aplikasi suara yang tidak Anda gunakan dan fidelitasnya kembali.</li>
<li><strong>Kurangi gangguan.</strong> Menjauhlah dari lingkungan 2,4 GHz yang ramai dan putuskan sambungan perangkat Bluetooth yang tidak Anda perlukan. Band radio yang sibuk menghasilkan bunyi pop yang terputus-putus.</li>
<li><strong>Matikan input mikrofon</strong> dalam pengaturan aplikasi jika Anda hanya perlu mendengarkan, jadi macOS mempertahankan profil pemutaran berkualitas tinggi.</li>
</ul>

<h2>Keluar dari host plug-in audio dan driver virtual</h2>

<p>Perangkat lunak audio pihak ketiga yang menginstal ekstensi sistem atau perangkat virtual sering menjadi pelaku pelanggaran setelah lompatan OS, karena ekstensi kernel dan audio sering kali memerlukan pembaruan untuk versi macOS yang baru. Tersangka termasuk router audio virtual, aplikasi equalizer, alat loopback, dan utilitas berbasis driver yang lebih lama.</p>

<ul>
<li>Tutup aplikasi equalizer, router audio, atau loopback apa pun dan uji apakah bunyi berderak berhenti.</li>
<li>Periksa Pengaturan Sistem → Umum → Item Masuk Ekstensi &amp; untuk ekstensi audio yang mungkin memerlukan pembaruan atau penghapusan.</li>
<li>Perbarui aplikasi tersebut ke rilis yang kompatibel dengan Tahoe, atau hapus instalan aplikasi yang tidak lagi Anda gunakan. Driver audio yang bertumpuk sering kali saling bertentangan setelah pembaruan besar.</li>
</ul>

<p>Jika menutup salah satu aplikasi ini akan membungkam pop-up tersebut, Anda telah menemukan pelakunya. Instal ulang versi saat ini atau biarkan saja.</p>

<h2>Persempit: seluruh sistem atau satu aplikasi?</h2>

<p>Cari tahu apakah kebisingan terjadi di mana-mana atau hanya di perangkat lunak tertentu. Putar file audio lokal, lalu video browser, lalu aplikasi musik. Jika hanya satu aplikasi yang bermasalah, perbaikannya adalah pengaturan audio atau pembaruan aplikasi itu sendiri, bukan macOS. Jika ini berlaku untuk seluruh sistem, langkah-langkah di atas adalah jawabannya.</p>

<p>Jika Anda masih mengalami kebuntuan, boot ke Safe Mode (tahan tombol daya pada silikon Apple, lalu pilih disk mulai sambil menahan Shift). Safe Mode tidak memuat ekstensi pihak ketiga. Jika audio di sana bersih, item login atau driver adalah penyebabnya, dan Anda dapat mengaktifkannya kembali satu per satu untuk menemukannya.</p>

<h2>Setelah audio Anda bersih</h2>

<p>Crackling adalah masalah driver dan sample-rate, jadi perbaikan di atas adalah solusi yang sebenarnya. Namun setelah pemutaran stabil, Anda mungkin melihat batasan berbeda: macOS masih belum memiliki mixer volume per aplikasi bawaan, seperti halnya Windows. Anda tidak dapat mengecilkan aplikasi yang berisik tanpa mematikan semuanya.</p>

<p>Itulah kesenjangannya <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mengisi. Ini adalah pencampur bilah menu yang memberi setiap aplikasi penggeser volumenya sendiri, mute per aplikasi, dan bahkan peningkatan volume untuk aplikasi senyap, ditambah peralihan output cepat. Ini tidak akan memperbaiki suara berderak, tetapi setelah audio Anda sehat, kontrol harian akan jauh lebih mudah.</p>

<p>Lakukan langkah-langkah di atas secara berurutan, dan mulailah dengan reboot dan pemeriksaan laju sampel. Jika nanti Anda menginginkan kontrol nyata per aplikasi pada pengaturan audio bersih Anda, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah pembelian satu kali senilai €14,99 pada Mac App Store, dalam sandbox tanpa driver atau DMG untuk diinstal.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Gagap atau Terpotong di Mac (Tahoe Fix)",
    description: "AirPods tersendat, terpotong, atau audio terputus pada macOS Tahoe hampir selalu merupakan gangguan Bluetooth atau churn peralihan otomatis. Berikut cara memasangkan kembali, memotong kemacetan 2,4GHz, dan menghentikan hand-off yang merusak pemutaran.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>AirPods tersendat atau terputus-putus pada macOS Tahoe hampir selalu merupakan gangguan Bluetooth, bukan headset rusak. Penyebab umum adalah Wi-Fi 2,4GHz dan kemacetan router, peralihan perangkat otomatis yang agresif, dan pemasangan yang basi. Pasangkan kembali AirPods, matikan peralihan otomatis, dan menjauh dari saluran 2,4GHz yang ramai untuk memperbaiki sebagian besar kasus.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Gagap atau Terpotong di Mac (Tahoe Fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa AirPods turun di Mac secara khusus</h2>

<p>AirPods menggunakan Bluetooth, yang berbagi pita radio 2,4GHz yang ramai dengan Wi-Fi, microwave, perangkat USB 3, dan hampir semua smart plug di rumah Anda. Mac Anda adalah radio yang sibuk: ia menyulap fitur Wi-Fi, Bluetooth, AirDrop, dan Kontinuitas pada antena yang tumpang tindih. Ketika band tersebut menjadi padat, audio Bluetooth adalah hal pertama yang tersendat, karena tidak dapat mentoleransi paket yang terjatuh seperti yang dapat dilakukan oleh transfer file.</p>

<p>Tahoe tidak secara ajaib membuat AirPods Anda menjadi lebih buruk, tetapi instalasi macOS yang baru sering kali mengatur ulang perilaku radio, mengaktifkan kembali penyerahan Kontinuitas, dan menegosiasikan ulang codec. Itu sebabnya masalah sepertinya muncul segera setelah pembaruan. Kabar baiknya: perbaikannya dipahami dengan baik dan sebagian besar gratis.</p>

<h2>Perbaiki 1: Pasangkan kembali AirPods (lakukan ini dulu)</h2>

<p>Pasangan yang basi atau rusak akan bertahan saat reboot dan menyebabkan penurunan intermiten yang terlihat acak. Hapus sepenuhnya dan tambahkan kembali koneksi:</p>

<ul>
<li>Buka <strong>Pengaturan Sistem, Bluetooth</strong>.</li>
<li>Klik tombol info (i) di sebelah AirPods Anda dan pilih <strong>Lupakan Perangkat Ini</strong>.</li>
<li>Masukkan AirPods ke dalam wadahnya, tutup, tunggu 15 detik, lalu buka.</li>
<li>Tahan tombol di bagian belakang casing hingga lampu berkedip putih.</li>
<li>Pasangkan kembali dari daftar Bluetooth.</li>
</ul>

<p>Saat Anda berada di sana, pastikan firmware AirPods terbaru. Tidak ada pembaru manual, tetapi membiarkannya di dekat iPhone atau Mac yang tersambung untuk sementara waktu akan memungkinkan pembaruan dilakukan di latar belakang.</p>

<h2>Perbaiki 2: Matikan peralihan otomatis</h2>

<p>Ini adalah satu-satunya penyebab "penghentian" terbesar bagi orang-orang di ekosistem Apple. AirPods Anda mencoba mengikuti Anda antara Mac, iPhone, dan iPad Anda. Setiap kali ponsel Anda mengira harus mengambil audio, koneksi terhenti di Mac Anda, menyebabkan jeda setengah detik di tengah podcast.</p>

<ul>
<li>Pada Mac: Bluetooth, klik (i) di sebelah AirPods, atur <strong>Hubungkan ke Mac Ini</strong> untuk <strong>Saat Terakhir Terhubung ke Mac Ini</strong> bukannya Secara Otomatis.</li>
<li>Di iPhone: Pengaturan, ketuk AirPods Anda, <strong>Hubungkan ke iPhone Ini</strong>, pilih <strong>Saat Terakhir Terhubung ke iPhone Ini</strong>.</li>
</ul>

<p>Ini menghentikan tarik-menarik antar perangkat. Anda akan memilih secara manual ke mana perginya audio, yang merupakan harga murah untuk pemutaran yang stabil.</p>

<h2>Perbaiki 3: Potong kemacetan 2,4GHz</h2>

<p>Jika penurunan terjadi selama panggilan video, pengunduhan, atau saat orang lain melakukan streaming, berarti pita radio Anda jenuh. Beberapa langkah praktis:</p>

<ul>
<li><strong>Gunakan pita Wi-Fi 5GHz</strong> di Mac Anda. Di pengaturan router Anda, beri nama berbeda pada jaringan 5GHz dan sambungkan ke sana. Ini membebaskan pita 2,4GHz untuk Bluetooth.</li>
<li><strong>Pindahkan hub USB 3 dan Thunderbolt</strong> dari Mac dan AirPods Anda. USB 3 adalah sumber kebisingan 2,4GHz yang terkenal buruk; hub yang ada di sebelah laptop Anda dapat merusak Bluetooth dari jarak beberapa inci.</li>
<li><strong>Ubah saluran 2,4GHz router Anda</strong> ke 1, 6, atau 11 (opsi yang tidak tumpang tindih) dan hindari saluran yang ramai di mana tetangga Anda berada.</li>
<li><strong>Jaga jarak pandang.</strong> Tubuh dan dinding menyerap 2.4GHz. Jika Mac Anda ada di belakang Anda atau di dalam tas, terjatuh akan semakin parah.</li>
</ul>

<blockquote>Router Wi-Fi 6E dan Wi-Fi 7 dapat membantu secara tidak langsung: mendorong perangkat Anda ke 6GHz akan menghapus pita 2,4GHz yang bergantung pada Bluetooth. Namun jaringan yang tidak terkonfigurasi dengan baik yang terus mengarahkan Anda kembali ke 2,4GHz dapat memperburuk keadaan. Periksa band mana yang sebenarnya Anda ikuti.</blockquote>

<h2>Perbaiki 4: Setel ulang tumpukan Bluetooth dan Kontinuitas</h2>

<p>Jika penyandingan ulang tidak berhasil, setel ulang radio itu sendiri:</p>

<ul>
<li>Matikan dan hidupkan Bluetooth dari bilah menu, lalu reboot Mac. Reboot akan menghilangkan sejumlah gangguan audio sementara yang mengejutkan.</li>
<li>Setel ulang SMC/NVRAM di Intel Macs, atau cukup matikan sepenuhnya (jangan mulai ulang) selama 30 detik di Apple Silicon.</li>
<li>Jika Anda tidak menggunakan AirDrop atau Handoff, menonaktifkan Handoff di Pengaturan Sistem, Umum, AirDrop &amp; Handoff akan mengurangi obrolan radio di latar belakang.</li>
</ul>

<h2>Apa yang tidak dapat memperbaikinya (dan apa yang sebenarnya dilakukan oleh pencampur volume)</h2>

<p>Untuk memperjelas cakupannya: semua ini bukan merupakan masalah volume perangkat lunak, dan tidak ada aplikasi volume yang dapat memperbaiki tautan Bluetooth. Jika audio Anda <em>menjatuhkan</em>, kejar isu radio diatas. Aplikasi seperti <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mengontrol volume per aplikasi, mute, dan peralihan output, semuanya tidak menyentuh tumpukan Bluetooth, sehingga tidak akan berhenti tersendat. Di mana mixer benar-benar membantu adalah gangguan yang terjadi di dekatnya, yang banyak disamakan oleh banyak pengguna AirPods dengan putus sekolah: satu aplikasi meledak sementara yang lain terlalu senyap, atau perlu melompati keluaran dengan cepat. Itu masalah keseimbangan volume, bukan masalah koneksi.</p>

<p>Diagnosis dengan jujur. Jika audio terputus-putus dan kembali lagi, itu adalah gangguan atau peralihan otomatis. Jika level antar aplikasi tidak merata, itu adalah masalah pencampuran yang sebenarnya dapat Anda selesaikan dengan perangkat lunak.</p>

<h2>Daftar periksa cepat</h2>

<ul>
<li>Lupakan dan pasangkan kembali AirPods.</li>
<li>Atur Mac dan iPhone ke <strong>Saat Terakhir Terhubung</strong>, bukan Secara Otomatis.</li>
<li>Pindahkan Mac Anda ke Wi-Fi 5GHz; jauhkan hub USB 3.</li>
<li>Atur 2.4GHz ke saluran 1, 6, atau 11.</li>
<li>Nyalakan ulang setelah mengaktifkan Bluetooth.</li>
</ul>

<p>Setelah dropout hilang dan Anda hanya ingin kontrol yang lebih bersih atas seberapa keras setiap aplikasi diputar, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menambahkan pencampur volume per aplikasi yang tepat, mute, boost, dan peralihan output cepat yang masih belum disertakan macOS. Ini adalah pembelian satu kali senilai €14,99 pada Mac App Store, dalam kotak pasir, tanpa driver untuk diinstal.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Speaker Kanan Mati di Mac Setelah Pembaruan Tahoe? Bagaimana Memperbaikinya",
    description: "Satu speaker atau saluran berhenti berfungsi setelah memperbarui ke macOS Tahoe? Mulailah dengan penggeser keseimbangan audio, lalu setel ulang Core Audio, coba mode aman, dan singkirkan perangkat keras. Panduan pemecahan masalah yang jelas.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Jika speaker kanan Anda menjadi senyap setelah memperbarui ke macOS Tahoe, periksa audionya <strong>penggeser keseimbangan</strong> pertama — itu dapat bergeser selama pembaruan. Buka Pengaturan Sistem &gt; Suara &gt; Output dan pastikan Saldo berada di titik mati. Jika tidak apa-apa, mulai ulang Core Audio, boot ke mode aman, lalu singkirkan perangkat keras. Kebanyakan kasus adalah perangkat lunak.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Speaker Kanan Mati di Mac Setelah Pembaruan Tahoe? Bagaimana Memperbaikinya" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pertama: penggeser keseimbangan (perbaiki ini lebih sering dari yang Anda kira)</h2>

<p>Penggeser keseimbangan macet atau bergeser adalah satu-satunya alasan paling umum yang menyebabkan satu saluran menjadi senyap — dan pembaruan macOS terkadang mengganggunya. Sebelum Anda berasumsi yang terburuk:</p>

<ul>
<li>Buka <strong>Pengaturan Sistem Suara &gt;</strong>.</li>
<li>Klik <strong>Keluaran</strong> tab dan pilih speaker Anda (bawaan, atau perangkat eksternal Anda).</li>
<li>Temukan <strong>Keseimbangan</strong> penggeser dan seret ke tengah tepat. Jika ditarik ke kiri, saluran kanan Anda akan terdengar mati.</li>
</ul>

<p>Lakukan ini <em>per perangkat keluaran</em>. Pengaturan keseimbangan diingat secara terpisah untuk speaker internal, headphone, dan setiap antarmuka eksternal — jadi keseimbangan internal yang terpusat tidak akan membantu jika masalahnya ada pada DAC USB Anda.</p>

<h2>Uji apakah itu benar-benar saluran perangkat keras</h2>

<p>Atur masuk atau keluarnya perangkat keras dengan cepat. Putar trek stereo yang Anda kenal dengan baik, lalu sambungkan headphone berkabel. Jika kedua saluran berfungsi di headphone tetapi tidak melalui speaker, masalahnya ada di bagian hilir mesin audio (perangkat keras speaker atau jalur output). Jika saluran yang sama juga mati di headphone, kemungkinan besar itu disebabkan oleh perangkat lunak atau codec audio papan logika.</p>

<p>Anda juga bisa membuka <strong>Musik</strong> atau QuickTime, mainkan sesuatu, dan alihkan keseimbangan ke kiri, lalu ke kanan. Jika audio berpindah dengan lancar antar saluran, kedua speaker hidup dan ini murni masalah pengaturan.</p>

<h2>Mulai ulang Audio Inti</h2>

<p>macOS merutekan semua suara melalui <strong>coreaudiod</strong> proses. Setelah pembaruan besar, statusnya bisa menjadi kacau — keluaran hilang, saluran turun, atau volume berperilaku aneh. Memulai ulang dengan aman dan memaksa macOS untuk membangun kembali grafik audio:</p>

<ul>
<li>Buka <strong>Terminal</strong> (Aplikasi Utilitas &gt;).</li>
<li>Jalankan: <code>sudo killall coreaudiod</code></li>
<li>Masukkan kata sandi Anda. Daemon audio diluncurkan kembali secara otomatis dalam satu atau dua detik.</li>
</ul>

<p>Tidak ada yang dihapus — ini hanya me-reboot subsistem audio. Uji kembali speaker kanan Anda segera setelahnya.</p>

<h2>Nyalakan ulang dengan benar, lalu coba mode aman</h2>

<p>Restart penuh akan menghilangkan gangguan audio sementara yang tidak dapat dilakukan oleh killall. Jika saluran masih mati, boot ke <strong>mode aman</strong>, yang memuat sistem minimal dan melewatkan ekstensi audio pihak ketiga dan item login:</p>

<ul>
<li><strong>silikon apel:</strong> Matikan. Tahan tombol daya hingga "Memuat opsi startup" muncul. Pilih disk Anda, lalu tahan <strong>Pergeseran</strong> dan klik "Lanjutkan dalam Mode Aman".</li>
<li><strong>Intel:</strong> Mulai ulang dan tahan <strong>Pergeseran</strong> sampai jendela login muncul.</li>
</ul>

<p>Jika kedua speaker berfungsi dalam mode aman, driver audio pihak ketiga, perangkat virtual, atau utilitas bilah menu yang diinstal sebelum pembaruan bertentangan dengan tumpukan audio baru Tahoe. Boot kembali ke normal dan hapus atau perbarui perangkat lunak audio yang baru saja diinstal (perekam layar, aplikasi rapat, dan kext perutean audio adalah penyebab umum).</p>

<h2>Setel ulang NVRAM (khusus Intel Macs)</h2>

<p>Pada Intel Mac, pengaturan suara dan speaker ada di NVRAM/PRAM, dan nilai yang sudah usang dapat bertahan dalam pembaruan. Setel ulang: matikan, lalu hidupkan dan segera tahan <strong>Opsi + Perintah + P + R</strong> selama sekitar 20 detik, biarkan Mac dimulai ulang satu kali. Ini tidak berlaku untuk Apple Silicon Mac — mereka mengaturnya secara otomatis, jadi lewati saja jika Anda menggunakan mesin seri M.</p>

<h2>Perbarui lagi — dan periksa rilis poin</h2>

<p>Rilis awal versi macOS utama dikirimkan dengan bug driver audio yang kemudian ditambal. Pergilah ke <strong>Pengaturan Sistem &gt; Umum Pembaruan Perangkat Lunak &gt;</strong> dan instal rilis titik Tahoe yang tertunda (14.x.1, 14.x.2, dll.). Jika ada pembaruan tambahan, sering kali pembaruan tersebut mengatasi regresi audio pasca-pembaruan ini.</p>

<h2>Ketika itu benar-benar perangkat keras</h2>

<p>Jika mode aman, restart Core Audio, dan instalasi ulang yang bersih semuanya gagal — dan saluran yang sama mati di headphone — Anda mungkin melihat kesalahan perangkat keras. Waktu pembaruan bisa saja kebetulan; amplifier speaker dan codec audio gagal. Jalankan <strong>Diagnostik Apple</strong> (matikan, lalu tahan tombol daya di Apple Silicon dan pilih Diagnostik, atau tahan <strong>D</strong> pada Intel saat startup). Jika ini menandai komponen audio, hubungi <strong>Dukungan Apple</strong> atau penyedia layanan resmi. Jangan menghabiskan uang untuk membeli perangkat lunak untuk speaker yang rusak.</p>

<blockquote>Aturan praktisnya: jika audio diputar dengan benar dengan penggeser keseimbangan, kedua speaker baik-baik saja secara fisik dan perbaikan Anda ada dalam perangkat lunak. Jika tidak pernah berpindah ke sisi mati, curigai perangkat keras.</blockquote>

<h2>Dimana perangkat lunak volume cocok (dan di mana tidak)</h2>

<p>Untuk lebih jelasnya: saluran speaker yang mati bukanlah sesuatu yang diperbaiki oleh aplikasi volume — pemeriksaan di atas adalah jalur Anda. Meskipun demikian, setelah audio Anda kembali sehat, macOS masih kekurangan sesuatu yang dimiliki Windows selama bertahun-tahun: pencampur volume per aplikasi yang sebenarnya. Jika Anda mendapati diri Anda menelusuri pengaturan Suara karena satu aplikasi meledak sementara aplikasi lainnya terlalu senyap, mixer bilah menu akan menyukainya <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> memungkinkan Anda mengatur volume independen, membisukan, dan bahkan meningkatkan per aplikasi tanpa menyentuh keseimbangan sistem Anda. Ini adalah alat praktis untuk pencampuran sehari-hari, bukan perbaikan masalah dalam artikel ini.</p>

<h2>Versi pendek</h2>

<ul>
<li>Pusatkan <strong>Keseimbangan</strong> penggeser — per perangkat keluaran.</li>
<li>Uji dengan headphone untuk mengisolasi perangkat keras.</li>
<li>Jalankan <code>sudo killall coreaudiod</code>, lalu mulai ulang.</li>
<li>Coba <strong>mode aman</strong> untuk menangkap konflik pengemudi.</li>
<li>Setel ulang NVRAM di Intel; instal rilis titik Tahoe apa pun.</li>
<li>Masih mati di headphone? Jalankan Diagnostik Apple dan hubungi Apple.</li>
</ul>

<p>Setelah speaker Anda kembali normal, jika mengatur volume per aplikasi merupakan gangguan sehari-hari, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menambahkan mixer macOS selalu hilang — €14,99, satu kali, sandbox, tanpa driver.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods Terjebak di Setengah Volume di Mac Anda? Inilah Perbaikannya",
    description: "Mengapa AirPods terhubung ke Mac Anda dengan volume setengah — biasanya codec Bluetooth beralih ke profil mikrofon hands-free — ditambah perbaikan pemasangan ulang dan cara meningkatkan cadangan level untuk selamanya.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>AirPods biasanya turun hingga setengah volume pada Mac karena macOS mengalihkannya dari profil audio A2DP berkualitas tinggi ke profil hands-free (HFP) berkualitas rendah — yang dibuat untuk penggunaan mikrofon panggilan telepon. Mode itu membatasi keluaran dan kualitas. Perbaiki dengan memaksa Mac kembali ke audio khusus headphone, lalu tingkatkan levelnya agar tetap di sana.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Terjebak di Setengah Volume di Mac Anda? Inilah Perbaikannya" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa ini terjadi: saklar codec</h2>

<p>Perangkat audio Bluetooth seperti AirPods berjalan dalam salah satu dari dua mode. Saat Anda hanya mendengarkan, macOS menggunakan A2DP — stereo penuh, kenyaringan penuh, kualitas bersih. Namun saat aplikasi menginginkan mikrofon Anda, macOS mengalihkan seluruh koneksi ke HFP (Hands-Free Profile). HFP adalah codec telepon dua arah. Kedengarannya tipis, mono-ish, dan terasa lebih senyap karena dirancang untuk panggilan suara, bukan musik.</p>

<p>Masalahnya adalah macOS sering kali tetap terjebak di HFP bahkan setelah aplikasi yang mengambil mikrofon sudah selesai — atau beralih ke HFP saat Anda membuka Zoom, FaceTime, Teams, Discord, atau tab browser dengan izin mikrofon. Jadi AirPods Anda terdengar seperti berada pada "setengah volume" bukan karena penggeser volume dipindahkan, tetapi karena seluruh profil audio diturunkan versinya di bawah Anda.</p>

<p>Anda akan mengenalinya: audio tiba-tiba menjadi senyap dan teredam, AirPods muncul dua kali di pengaturan suara Anda (sekali sebagai output, sekali sebagai mikrofon), dan menaikkan volume sistem sepenuhnya hampir tidak membantu.</p>

<h2>Solusi pemasangan ulang dan codec</h2>

<p>Ini adalah langkah pertama yang jujur. Selesaikan semuanya secara berurutan - salah satu yang paling awal biasanya akan menyelesaikannya.</p>

<ul>
<li><strong>Ubah perangkat masukan Anda.</strong> Buka Pengaturan Sistem → Suara → Masukan dan pilih mikrofon internal Mac Anda, bukan AirPods. Hal ini menghentikan macOS menahan AirPods dalam mode HFP, sehingga output dapat naik kembali ke kualitas A2DP penuh. Ini adalah satu-satunya perbaikan yang paling efektif.</li>
<li><strong>Matikan dan hidupkan Bluetooth.</strong> Reset koneksi yang cepat sering kali menegosiasikan ulang A2DP dengan lancar, terutama jika AirPods macet setelah panggilan berakhir.</li>
<li><strong>Hubungkan kembali AirPods.</strong> Tutup casing, tunggu beberapa detik, buka kembali di dekat Mac, dan pilih kembali sebagai perangkat keluaran.</li>
<li><strong>Keluar dari aplikasi yang mengambil mikrofon.</strong> Keluar sepenuhnya dari Zoom, Teams, Discord, atau tab browser tersebut. Beberapa aplikasi membiarkan sesi mikrofon tetap terbuka di latar belakang dan menyematkan HFP hingga hilang.</li>
<li><strong>Pasangkan kembali dari awal.</strong> Hapus AirPods di bawah Pengaturan Sistem → Bluetooth (klik tombol info → Lupakan Perangkat Ini), lalu pasangkan kembali. Ini menghapus negosiasi profil yang rusak yang tidak dapat diperbaiki hanya dengan beralih saja.</li>
<li><strong>Setel ulang AirPods.</strong> Dengan penutup casing terbuka, tahan tombol pengaturan di bagian belakang hingga lampu berkedip kuning lalu putih. Pasangkan kembali setelahnya. Ini adalah opsi nuklir untuk keanehan tingkat firmware.</li>
<li><strong>Perbarui firmware macOS dan AirPods.</strong> Apple telah mengirimkan perbaikan audio Bluetooth dalam rilis poin. Firmware AirPods diperbarui secara diam-diam saat diisi dayanya di dekat perangkat yang tersambung — jadi biarkan firmware tersebut di dalam casing di dekat Mac Anda semalaman.</li>
</ul>

<blockquote><p>Pola yang harus diperhatikan: jika volume turun saat Anda bergabung dengan panggilan dan pulih kembali saat panggilan berakhir, itu disebabkan oleh tombol HFP — bukan speaker rusak atau kesalahan pengaturan.</p></blockquote>

<h2>Mengapa perbaikan tidak selalu berhasil</h2>

<p>Inilah bagian yang membuat frustrasi. Bahkan setelah dipasangkan ulang, macOS akan dengan senang hati mengalihkan AirPods Anda kembali ke mode bebas genggam senyap saat aplikasi lain menyentuh mikrofon. Anda tidak dapat menonaktifkan perilaku tersebut secara permanen di pengaturan sistem — Apple memperlakukannya sebagai otomatis. Jadi, Anda akhirnya melakukan kembali trik perangkat input beberapa kali sehari, dan setiap saat AirPods Anda sedang melakukan panggilan atau aplikasi yang memerlukan mikrofon, level tersebut kembali dibatasi pada level yang lebih rendah.</p>

<p>Ada juga masalah kedua yang disamakan dengan masalah ini: beberapa aplikasi lebih senyap daripada yang lain pada volume sistem maksimal. Pemutar podcast atau tab browser dapat berada jauh di bawah apa yang diinginkan telinga Anda, bahkan ketika AirPods menjalankan A2DP yang bersih. macOS memberi Anda satu penggeser volume untuk semuanya dan tidak ada kontrol per aplikasi, jadi tidak ada cara asli untuk mengaktifkan kembali satu aplikasi senyap.</p>

<h2>Tingkatkan kembali levelnya — dan pertahankan di sana</h2>

<p>Di sinilah pencampur volume per aplikasi mendapatkan tempatnya. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah aplikasi bilah menu untuk macOS yang memberikan penggeser volume independen pada setiap aplikasi yang berjalan — termasuk peningkatan di atas 100%. Jadi ketika AirPods Anda kembali dari panggilan pada tingkat efektif yang lebih rendah, atau aplikasi tertentu terlalu senyap, Anda menyeret aplikasi itu melewati batas normal dan aplikasi itu tetap di sana.</p>

<p>Secara konkret, itu berarti:</p>

<ul>
<li><strong>PENINGKATAN volume per aplikasi.</strong> Dorong aplikasi senyap di atas standar maksimum alih-alih berusaha keras untuk mendengarnya pada volume sistem "penuh".</li>
<li><strong>Profil volume.</strong> Simpan serangkaian level — browser yang ditingkatkan, musik yang lebih lembut, panggilan video yang keras — dan alihkan seluruh pengaturan dalam satu klik sehingga Anda tidak perlu melakukan penyesuaian ulang setiap kali Anda tersambung kembali.</li>
<li><strong>Peralihan keluaran cepat.</strong> Beralih antara AirPods, speaker laptop, dan DAC eksternal dari bilah menu tanpa menelusuri Pengaturan Sistem, yang membantu saat Anda memaksakan negosiasi profil baru.</li>
<li><strong>Bisu per aplikasi dan merunduk otomatis.</strong> Heningkan satu aplikasi tanpa menyentuh aplikasi lainnya, dan biarkan media turun secara otomatis ketika sesuatu yang lebih penting diputar.</li>
</ul>

<p>Penting untuk memperjelas apa yang dilakukan dan tidak dilakukan. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> tidak akan memaksa macOS untuk tetap berada di A2DP — trik perangkat input di atas masih merupakan alat Anda untuk codec itu sendiri. Apa yang dilakukannya adalah mengembalikan kenyaringan yang dicuri oleh downgrade, per aplikasi, jadi sesi AirPods yang tenang atau aplikasi yang sangat lunak adalah perbaikan sekali jalan, bukan penyebab yang hilang. Dan karena ini adalah aplikasi Mac App Store yang di-sandbox, tidak ada driver audio yang harus diinstal, tidak ada DMG, tidak ada ekstensi kernel — aplikasi ini hanya berjalan.</p>

<h2>Versi pendek</h2>

<p>Jika AirPods Anda terdengar pelan dan teredam di Mac, matikan perangkat input Anda dari AirPods untuk memaksanya keluar dari mode handsfree, dan pasangkan kembali jika gagal. Ketika levelnya masih belum mencapai yang Anda inginkan — atau satu aplikasi terlalu lemah — raihlah peningkatan per aplikasi sehingga Anda dapat mengaturnya sekali dan melanjutkan.</p>

<p>Bosan melawan penggeser volume setiap kali Anda menerima panggilan? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14,99 satu kali, tanpa berlangganan, tanpa driver — dan memberikan volume tersendiri pada setiap aplikasi.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Volume Mac Terus Direset Sendiri di Tahoe? Cara Menguncinya untuk Kebaikan",
    description: "Sejak macOS Tahoe, banyak Mac yang tiba-tiba mengubah atau mengatur ulang volumenya sendiri. Inilah sebabnya hal ini terjadi, cara menghentikan penyebab bawaan, dan cara mengunci volume tetap per aplikasi agar tetap ada.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Jika volume Mac Anda terus disetel ulang sejak macOS Tahoe, cara mengatasinya adalah dengan menghilangkan pengatur otomatis: nonaktifkan audio ducking dan "Putar suara saat startup", setel ulang setelan suara, dan sambungkan kembali output Bluetooth dengan bersih. Untuk level per aplikasi yang melonjak-lonjak, kunci volume tetap per aplikasi dengan mixer agar tidak pernah berpindah lagi.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Volume Mac Terus Direset Sendiri di Tahoe? Cara Menguncinya untuk Kebaikan" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa volume Anda berubah dengan sendirinya setelah Tahoe</h2>

<p>Volume yang bergerak tanpa Anda menyentuhnya terasa seperti kesalahan perangkat keras, tetapi hampir selalu perangkat lunaklah yang menentukan level Anda. macOS memiliki beberapa perilaku otomatis yang secara diam-diam mendorong atau mengatur ulang output, dan perubahan tumpukan audio Tahoe membuat beberapa di antaranya lebih terlihat. Sebelum Anda berasumsi aplikasi atau Mac rusak, ada baiknya Anda mengetahui secara pasti sistem mana yang mengambil penggeser.</p>

<ul>
<li><strong>Audio merunduk:</strong> macOS menurunkan audio lainnya ketika dianggap sesuatu yang lebih penting sedang diputar (Siri, pengumuman aksesibilitas, notifikasi). Setelah pemicunya berakhir, terkadang levelnya tidak kembali lagi.</li>
<li><strong>Reset jabat tangan Bluetooth:</strong> AirPods dan perangkat Bluetooth lainnya menegosiasikan ulang volume saat terhubung. Menghubungkan kembali di tengah sesi dapat mengubah output ke default atau ke tingkat yang lebih keras/lebih tenang.</li>
<li><strong>Peralihan perangkat keluaran:</strong> Saat Anda mencabut headphone, menyambungkan, atau beralih ke speaker monitor, setiap output mengingat volumenya sendiri. Beralih bolak-balik tampak seperti pengaturan ulang "acak".</li>
<li><strong>Default per aplikasi:</strong> Beberapa aplikasi (browser, pemutar video, alat konferensi) menetapkan keuntungannya sendiri saat peluncuran atau saat streaming baru dimulai, sehingga mengesampingkan apa pun yang Anda miliki.</li>
<li><strong>Suara startup dan status login:</strong> Lonceng boot dan login dapat mendorong volume sistem kembali ke tingkat default yang tidak Anda pilih.</li>
</ul>

<h2>Perbaiki penyebab bawaannya terlebih dahulu</h2>

<p>Selesaikan ini secara berurutan. Sebagian besar keluhan "reset sendiri" hilang setelah merunduk dan Bluetooth dikesampingkan.</p>

<ul>
<li><strong>Matikan suara pengaktifan.</strong> Pengaturan Sistem → Suara → hapus centang <em>Putar suara saat startup</em>. Ini menghentikan lonceng boot untuk mengatur ulang level dasar Anda.</li>
<li><strong>Kurangi atau nonaktifkan pemicu merunduk.</strong> Di Pengaturan Sistem → Aksesibilitas → Konten Lisan dan Siri, matikan pengumuman lisan yang tidak Anda perlukan. Lebih sedikit pemicu berarti lebih sedikit momen ketika macOS menurunkan audio dan lupa memulihkannya.</li>
<li><strong>Pasangkan kembali perangkat Bluetooth yang bermasalah.</strong> Hapus AirPods atau headphone dari pengaturan Bluetooth dan pasangkan kembali. Profil yang usang adalah penyebab umum volume terputus saat koneksi.</li>
<li><strong>Atur setiap perangkat keluaran dengan sengaja.</strong> Hubungkan setiap output yang Anda gunakan (bawaan, monitor, headphone) dan atur volumenya satu kali. macOS menyimpan volume per perangkat, jadi mengatur semuanya akan menghilangkan kejutan saat Anda beralih.</li>
<li><strong>Reset Core Audio jika macet.</strong> Buka Terminal dan jalankan <code>sudo killall coreaudiod</code>. Ini memulai ulang daemon audio tanpa reboot dan menghapus status hang yang dapat menyebabkan level tidak menentu.</li>
<li><strong>Perbarui, lalu mulai ulang.</strong> Rilis awal Tahoe point mengirimkan perbaikan audio. Pastikan Anda menggunakan versi terbaru dan reboot satu kali setelah memperbarui.</li>
</ul>

<p>Jika pengaturan ulang berhenti, salah satu penyebab di atas adalah penyebab Anda. Jika Anda <em>sistem</em> volume stabil tetapi masing-masing aplikasi tetap terdengar lebih keras atau lebih pelan dibandingkan aplikasi lainnya, Anda telah mencapai batas kemampuan kontrol bawaan.</p>

<h2>Kesenjangan sebenarnya: macOS tidak dapat mengunci volume per aplikasi</h2>

<p>Inilah bagian yang membuat frustrasi. Windows telah memiliki pencampur volume per aplikasi selama bertahun-tahun — Anda membukanya, menyeret penggeser satu aplikasi, dan pencampur volume tersebut tetap berada di sana. macOS belum pernah mengirimkannya. Tepatnya ada satu penggeser volume sistem, dan setiap aplikasi memperebutkannya. Jadi ketika tab browser menampilkan iklan putar otomatis atau panggilan video terdengar dua kali lebih keras dari musik Anda, satu-satunya pilihan Anda adalah menaikkan volume master secara manual — yang merupakan loop "mengapa ini terus berubah" yang ingin Anda hindari.</p>

<blockquote>Penggeser sistem adalah satu putaran bersama. Tanpa mixer per aplikasi, "setel dan lupakan" tidak mungkin dilakukan pada stok macOS — sesuatu akan selalu menimpa Anda.</blockquote>

<h2>Kunci volume tetap per aplikasi dengan SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menambahkan mixer per aplikasi macOS hilang. Itu ada di bilah menu Anda dan memberi setiap aplikasi yang berjalan penggeser volumenya sendiri, terlepas dari masternya. Karena mengingat level yang Anda tetapkan untuk setiap aplikasi, ini secara langsung menyelesaikan masalah "reset sendiri": Anda memutuskan sekali, dan aplikasi tersebut terbuka pada volume tersebut setiap saat.</p>

<ul>
<li><strong>Volume independen per aplikasi:</strong> menjaga musik tetap pada tingkat 40% dan panggilan video pada tingkat 80% secara bersamaan, tanpa perlu melakukan juggling master-slider.</li>
<li><strong>Bisukan dan tingkatkan per aplikasi:</strong> membungkam aplikasi yang berisik secara instan, atau mendorong aplikasi yang terlalu sepi melewati 100% saat audionya lemah.</li>
<li><strong>Profil volume:</strong> simpan pengaturan untuk "bekerja", "bermain game", atau "fokus" dan alihkan seluruh campuran dalam satu klik.</li>
<li><strong>Merunduk otomatis sesuai persyaratan Anda:</strong> menurunkan aplikasi latar belakang secara otomatis saat Anda berbicara atau saat aplikasi yang dipilih aktif — alih-alih macOS yang memutuskan.</li>
<li><strong>Peralihan keluaran cepat:</strong> beralih antara speaker, headphone, dan audio monitor dari bilah menu tanpa masuk ke pengaturan.</li>
</ul>

<p>Ini adalah pembelian satu kali senilai €14,99 dari Mac App Store — tanpa berlangganan, tanpa driver, tanpa DMG, dan tanpa ekstensi kernel. Karena sepenuhnya di-sandbox dan didistribusikan App Store, Anda tidak menginstal kext audio lama yang mungkin diblokir Tahoe pada pembaruan berikutnya. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mengatur level Anda menggunakan API yang didukung, sehingga volume yang Anda ingat dapat bertahan dari pembaruan dan boot ulang.</p>

<h2>Pendekatan manakah yang sebenarnya Anda perlukan?</h2>

<p>Jika volume seluruh sistem Anda melonjak, mulailah dengan perbaikan bawaan di atas — ducking, Bluetooth, dan akun suara startup untuk sebagian besar kasus. Jika masalahnya adalah satu aplikasi selalu yang aneh, atau Anda bosan dengan master slider yang dikompromikan, mixer per aplikasi adalah satu-satunya jawaban yang sebenarnya. macOS tidak akan menambahkannya, jadi alat bilah menu adalah cara praktis untuk menghasilkan campuran yang benar-benar sesuai dengan tempat Anda meletakkannya.</p>

<p>Bosan mengejar penggeser volume di Tahoe? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> dan mengunci volume yang diingat untuk setiap aplikasi — €14,99 sekali, tanpa berlangganan, tanpa driver.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Kontrol Volume Monitor DAW Anda Secara Terpisah Dari Audio Sistem di Mac",
    description: "macOS tidak memiliki mixer volume per aplikasi bawaan, sehingga DAW dan suara sistem Anda berbagi satu tingkat. Berikut cara mengontrol volume monitor Logic, Ableton, atau GarageBand secara terpisah dari browser dan notifikasi Anda.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>macOS tidak memiliki pencampur volume per aplikasi bawaan, jadi DAW Anda dan yang lainnya berbagi satu penggeser sistem. Untuk mengatur level monitor Anda secara terpisah dari browser, Slack, dan notifikasi, Anda memerlukan kontrol volume per aplikasi. Seperti mixer menu-bar <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> memberikan volume tersendiri pada Logic, Ableton, dan GarageBand, terpisah dari audio sistem.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Kontrol Volume Monitor DAW Anda Secara Terpisah Dari Audio Sistem di Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa satu penggeser volume merusak pemantauan Anda</h2>

<p>Saat Anda memproduksi, DAW Anda hanyalah salah satu dari banyak benda yang menghasilkan suara. Trek referensi diputar di tab browser. Ping Slack tiba. Tutorial YouTube berjalan pada monitor kedua. Di Windows, Volume Mixer memungkinkan Anda menyeimbangkan semua ini secara mandiri. Di macOS, Apple tidak pernah mengirimkan yang setara — tombol volume dan penggeser bilah menu bergerak <em>semuanya</em> sekaligus.</p>

<p>Hal ini menciptakan masalah nyata bagi siapa pun yang mencampurkan suara dengan telinga. Anda menekan level pemantauan yang nyaman di Logic, lalu notifikasi muncul di level yang sama dan mengejutkan telinga Anda. Atau Anda mematikan sistem untuk melindungi pendengaran Anda saat ada suara bising, dan sekarang trek referensi Anda terlalu senyap untuk dibandingkan. Referensi pemantauan Anda tidak lagi stabil, dan referensi stabil adalah inti dari pencampuran.</p>

<blockquote>Memantau pada tingkat yang konsisten adalah salah satu dari sedikit kebiasaan yang dapat meningkatkan mix Anda secara signifikan. Jika suara sistem terus memaksa Anda untuk menggerakkan penggeser utama, Anda akan kehilangan konsistensi tersebut.</blockquote>

<h2>Apa sebenarnya arti "volume DAW terpisah".</h2>

<p>Ada dua hal berbeda yang digabungkan oleh produsen di sini, dan ada baiknya memisahkan keduanya:</p>

<ul>
<li><strong>Tingkat keluaran antarmuka/master</strong> — kenop perangkat keras pada antarmuka audio atau pengontrol monitor Anda. Ini mengatur kenyaringan pendengaran Anda secara absolut dan akan tetap sama setelah dikalibrasi.</li>
<li><strong>Volume perangkat lunak per aplikasi</strong> — seberapa keras setiap aplikasi <em>sebelumnya</em> itu mencapai output itu. Inilah yang hilang dari macOS. Ini memungkinkan Anda menjaga kesatuan DAW sambil memutar Chrome, Musik, atau suara notifikasi hingga setinggi tempat tidur di bawahnya.</li>
</ul>

<p>Anda ingin yang kedua. Tujuannya bukan untuk mengecilkan DAW Anda — melainkan untuk mengecilkan segala sesuatu yang lain, sehingga DAW tetap menjadi sumber Anda yang paling keras dan paling konsisten, dan gangguan tidak akan terdengar di latar belakang.</p>

<h2>Caranya dengan mixer per aplikasi</h2>

<p>Mixer bilah menu seperti <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mencantumkan setiap aplikasi yang sedang memutar audio dan memberikan masing-masing penggesernya sendiri. Alur kerja untuk produser terlihat seperti ini:</p>

<ul>
<li><strong>Kalibrasi antarmuka Anda satu kali.</strong> Atur antarmuka audio atau pengontrol monitor Anda ke tingkat referensi yang nyaman dan dapat diulang, lalu tinggalkan. Ini adalah jangkar tetap Anda.</li>
<li><strong>Setel DAW Anda ke 100%.</strong> Di dalam mixer, biarkan Logic, Ableton, atau GarageBand pada volume perangkat lunak penuh sehingga melewati kesatuan. Master fader DAW Anda sendiri masih melakukan pencampuran yang baik.</li>
<li><strong>Tarik semuanya ke bawah.</strong> Turunkan Chrome, Safari, Musik, dan Slack ke tingkat yang lebih rendah — katakanlah 40–60% — sehingga trek referensi dan pesan berada di bawah campuran Anda alih-alih bersaing dengannya.</li>
<li><strong>Matikan suara hal-hal yang berisik.</strong> Bisu per aplikasi memungkinkan Anda membungkam browser atau aplikasi obrolan sepenuhnya tanpa menyentuh rantai pemantauan Anda. Satu klik, dan DAW Anda terus diputar tanpa disentuh.</li>
</ul>

<p>Karena penggeser DAW tidak pernah bergerak, referensi pemantauan Anda tetap solid sepanjang sesi. Anda dapat memutar trek referensi untuk A/B cepat, lalu membisukannya, dan level campuran Anda tidak berubah satu desibel pun.</p>

<h2>Meningkatkan aplikasi yang tenang alih-alih menolak aplikasi lain</h2>

<p>Terkadang masalahnya berjalan sebaliknya. Demo kasar yang memantul, memo suara, atau referensi diam diputar jauh di bawah level sesi Anda. Menaikkan antarmuka Anda agar dapat mendengarnya berarti segala sesuatunya sekarang menjadi terlalu keras. Per aplikasi <strong>peningkatan volume</strong> memungkinkan Anda mendorong satu aplikasi senyap di atas 100% sehingga sesuai dengan tingkat kerja Anda — tanpa menyentuh output yang dikalibrasi. Ini adalah bagian yang belum pernah dimiliki mixer Windows dan salah satu alat yang lebih berguna saat Anda mengaudisi materi dari luar DAW Anda.</p>

<h2>Profil untuk jenis sesi yang berbeda</h2>

<p>Keseimbangan ideal Anda tidak sama untuk setiap tugas. Pelacakan, pencampuran, dan mendengarkan santai masing-masing menginginkan perpaduan level aplikasi yang berbeda. Profil volume memungkinkan Anda menyimpan pengaturan dan mengingatnya secara instan:</p>

<ul>
<li><strong>Pencampuran:</strong> DAW 100%, browser dan Musik lemah, obrolan dibisukan.</li>
<li><strong>Referensi mendengarkan:</strong> Aplikasi musik atau streaming naik, DAW turun.</li>
<li><strong>Panggilan / kolaborasi:</strong> aplikasi konferensi aktif, DAW ditarik kembali sehingga tidak mengganggu panggilan.</li>
</ul>

<p>Berpindah profil mengalahkan lima bilah geser yang dapat disesuaikan secara manual setiap kali Anda berpindah gigi.</p>

<h2>Peralihan keluaran cepat dan merunduk otomatis</h2>

<p>Dua hal lagi penting di studio. <strong>Merunduk otomatis</strong> dapat secara otomatis mematikan aplikasi latar belakang ketika sumber prioritas berbicara atau memutar, sehingga panggilan atau audio penting selalu terpotong. Dan <strong>peralihan keluaran cepat</strong> dari bilah menu memungkinkan Anda beralih antara antarmuka, monitor, dan headphone tanpa menggali Pengaturan Sistem — tugas yang terus-menerus dilakukan saat Anda memeriksa campuran pada sistem yang berbeda.</p>

<h2>Mengapa bukan driver audio virtual?</h2>

<p>Beberapa alat perutean mengatasi masalah ini dengan menginstal driver audio virtual tingkat kernel. Itu kuat tapi berat: bisa rusak setelah pembaruan macOS, menambah latensi, dan memerlukan izin sistem yang mendalam. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> di-sandbox dan dikirimkan melalui Mac App Store — tanpa driver, tanpa DMG, tanpa penyiapan perangkat agregat. Khusus untuk kontrol tingkat per aplikasi, ini adalah jalur yang jauh lebih sederhana daripada merancang ulang perutean audio Anda.</p>

<p>Siap untuk menjaga tingkat pemantauan Anda tetap stabil sementara yang lainnya tetap pada tempatnya? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> untuk satu kali €14,99 dan berikan volumenya sendiri pada DAW Anda.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Alternatif Audio Hijack yang Lebih Sederhana untuk Volume Per Aplikasi di Mac",
    description: "Jika Anda hanya menginginkan volume independen per aplikasi di macOS, Audio Hijack berlebihan. Berikut adalah alternatif bilah menu yang lebih ringan dan lebih murah yang melakukan volume per aplikasi, membisukan, dan meningkatkan tanpa perutean audio.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Jika yang Anda inginkan hanyalah volume independen per aplikasi di macOS, Audio Hijack adalah alat yang lebih dari yang Anda perlukan. Ini adalah rangkaian perutean dan perekaman audio profesional (sekitar $79) yang dibuat untuk pengambilan, efek, dan grafik sesi. Untuk sekadar mematikan satu aplikasi dan aplikasi lainnya, seperti mixer bilah menu yang ringan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lebih cepat, lebih murah, dan selalu siap.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternatif Audio Hijack yang Lebih Sederhana untuk Volume Per Aplikasi di Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa orang pertama kali memilih Audio Hijack</h2>

<p>macOS tidak memiliki pencampur volume per aplikasi bawaan. Windows telah memilikinya selama bertahun-tahun di Volume Mixer-nya, tetapi pada Mac tombol volume dan penggeser bilah menu hanya menggerakkan satu hal: master sistem. Tidak ada cara pihak pertama untuk mengatakan "pertahankan Spotify pada 40% tetapi tinggalkan video call saya pada 100%".</p>

<p>Jadi orang-orang mencari solusi dan mendarat di Audio Hijack. Itu <em>bisa</em> melakukan volume per aplikasi, karena dapat mencegat dan memproses audio dari satu aplikasi mana pun. Namun kemampuan tersebut merupakan efek samping dari apa yang sebenarnya dirancang untuknya: merekam audio dari aplikasi dan perangkat keras, merangkai efek, merutekan antar perangkat virtual, dan membangun alur sesi yang dapat digunakan kembali. Benar-benar hebat dalam hal itu. Itu hanyalah jawaban berat untuk pertanyaan ringan.</p>

<h2>Dimana Audio Hijack menjadi berlebihan</h2>

<p>Beberapa hal cenderung membuat frustrasi orang yang hanya menginginkan penggeser volume:</p>

<ul>
<li><strong>Harga.</strong> Audio Hijack berharga sekitar $79. Itu adil untuk studio rekaman dalam suatu aplikasi; itu banyak untuk menolak tab browser.</li>
<li><strong>Itu harus terus berjalan.</strong> Pemrosesan per aplikasinya hanya berfungsi saat aplikasi terbuka dan sesi terkait aktif. Hentikan, dan volume Anda akan kembali. Anda mempertahankan stasiun kerja audio lengkap hanya untuk menahan penggeser di tempatnya.</li>
<li><strong>Pemikiran berbasis sesi.</strong> Anda membangun sesi dengan blok dan koneksi. Bertenaga untuk menangkap gambar, namun memerlukan banyak konseptualisasi jika sasaran Anda adalah "aplikasi ini lebih senyap, aplikasi itu lebih keras".</li>
<li><strong>Antarmukanya dalam.</strong> Efek, perutean, meter, pengkabelan blok — area permukaan kaya yang sering Anda abaikan jika Anda tidak pernah merekam apa pun.</li>
</ul>

<blockquote>Aturan praktisnya: jika Anda mau <em>catatan atau rute</em> audio, Audio Hijack mendapatkan harganya. Jika Anda hanya ingin <em>keseimbangan</em> audio antar aplikasi, Anda membayar bengkel saat Anda membutuhkan kenop.</blockquote>

<h2>Alternatif yang lebih sederhana: mixer volume bilah menu</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mengambil satu pekerjaan yang diinginkan kebanyakan orang dan hanya melakukan itu. Itu ada di bilah menu Anda. Klik ikon tersebut dan Anda mendapatkan daftar langsung dari setiap aplikasi yang sedang memutar audio, masing-masing dengan penggesernya sendiri. Seret Spotify ke 30%, biarkan panggilan Anda 100%, nonaktifkan Slack sepenuhnya — selesai, tidak ada sesi yang perlu dibuat.</p>

<p>Cakupannya:</p>

<ul>
<li><strong>Volume independen per aplikasi</strong> — setiap sumber audio memiliki penggesernya sendiri, yang dapat disesuaikan secara real-time.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi yang berisik dengan sekali klik tanpa menyentuh apa pun lagi.</li>
<li><strong>Peningkatan volume per aplikasi</strong> — tekan aplikasi senyap <em>di atas</em> 100% bila max nya sendiri masih terlalu lembek. Ini adalah bagian yang tidak dapat dilakukan oleh penggeser sistem.</li>
<li><strong>Profil volume</strong> — simpan keseluruhan mix (musik pelan, panggilan keras, notifikasi dibisukan) dan panggil kembali dalam satu klik untuk konteks tertentu.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis memasukkan audio latar belakang ketika sesuatu yang lebih penting dimulai, sehingga panggilan atau video tidak terkubur dalam daftar putar Anda.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antara headphone, speaker, dan output lainnya dari menu yang sama.</li>
</ul>

<h2>Praktis: mendapatkan kontrol per aplikasi dalam waktu kurang dari satu menit</h2>

<p>Perbedaan pengaturan adalah intinya. Dengan alat perutean, Anda akan membuat sesi, menambahkan blok sumber, menyambungkannya, dan menjaga aplikasi tetap berjalan. Ini intinya:</p>

<ul>
<li>Instal <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dari Mac App Store.</li>
<li>Putar audio di beberapa aplikasi agar muncul di daftar.</li>
<li>Klik ikon bilah menu dan seret penggeser setiap aplikasi sesuai selera.</li>
<li>Secara opsional, simpan campuran itu sebagai profil, atau tingkatkan aplikasi yang terlalu senyap melebihi 100%.</li>
</ul>

<p>Karena didistribusikan melalui Mac App Store, aplikasi ini dimasukkan ke dalam sandbox dan diinstal seperti aplikasi normal lainnya — tidak <code>.dmg</code> untuk menyeret, tidak ada ekstensi kernel, tidak ada driver audio untuk disetujui di pengaturan Keamanan, dan tidak ada yang perlu disetujui ulang setelah pembaruan macOS. Poin terakhir itu penting: mixer berbasis driver secara historis mengalami kerusakan pada peningkatan OS dan memerlukan instalasi ulang komponen tingkat sistem. Aplikasi App Store dengan sandbox menghindari seluruh kategori pemeliharaan tersebut.</p>

<h2>Yang mana yang harus Anda pilih?</h2>

<p>Jujurlah tentang pekerjaan itu. Pilih <strong>Audio Hijack</strong> jika Anda perlu merekam audio aplikasi atau perangkat keras, menerapkan efek waktu nyata, atau membuat grafik perutean antar perangkat virtual. Itu adalah wilayah asalnya dan setiap dolarnya bernilai di sana.</p>

<p>Pilih mixer bilah menu khusus jika kebutuhan Anda sebenarnya adalah "biarkan saya mengatur volume setiap aplikasi secara mandiri". Anda akan menghabiskan €14,99 satu kali, bukan ~$79, melewati pembuatan sesi, dan mendapatkan peningkatan, mute, profil, dan merunduk di panel yang Anda buka dari bilah menu. Tidak ada fitur perekaman yang tidak akan pernah Anda sentuh, tidak ada stasiun kerja yang berjalan di latar belakang untuk menahan penggeser di tempatnya.</p>

<p>Kebanyakan orang yang mencoba Audio Hijack untuk penyeimbangan volume memecahkan masalah kecil dengan alat yang besar. Jika itu Anda, alat kecil ini lebih cocok — dan harganya jauh lebih murah.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> seharga €14,99, satu kali — volume per aplikasi, peningkatan, mute, profil, dan pengecilan otomatis, langsung dari bilah menu Anda.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Alternatif Boom 3D: Volume Per Aplikasi Tanpa Penggembungan (Mac)",
    description: "Jika Anda menggunakan Boom 3D terutama untuk meningkatkan audio namun benar-benar menginginkan kontrol volume per aplikasi, SoundDial adalah alternatif Mac yang lebih ramping: volume independen per aplikasi, mute dan boost per aplikasi, harga satu kali, tanpa EQ atau driver di seluruh sistem.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Jika Anda menggunakan Boom 3D untuk meningkatkan volume tetapi sebenarnya ingin mengontrol setiap aplikasi secara terpisah, Anda memerlukan alat yang berbeda. Boom 3D adalah penguat volume dan EQ seluruh sistem. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah pencampur volume per aplikasi yang terfokus: volume independen, mute, dan boost untuk setiap aplikasi, satu kali €14,99, tanpa EQ, tanpa driver.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternatif Boom 3D: Volume Per Aplikasi Tanpa Penggembungan (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Apa yang sebenarnya dilakukan (dan tidak dilakukan) Boom 3D</h2>
<p>Boom 3D dibangun berdasarkan tiga hal: peningkatan volume seluruh sistem, equalizer 31-band, dan efek "surround" 3D. Ini menerapkannya pada <em>semuanya</em> Mac Anda diputar sekaligus. Ini benar-benar berguna jika tujuan Anda adalah laptop yang lebih keras atau kurva bass yang Anda sukai secara keseluruhan.</p>
<p>Boom 3D tidak dibuat untuk memperlakukan aplikasi sebagai saluran independen. Tidak ada cara yang tepat untuk mengatakan "Spotify 40%, panggilan video saya 100%, dan tab browser ini dibisukan". Penggesernya menggerakkan seluruh campuran. Dan karena ia menginstal driver audio untuk ditempatkan di jalur sinyal, ia menyentuh sistem Anda pada tingkat yang lebih rendah daripada utilitas kotak pasir. Ini juga diposisikan sebagai produk berbayar dengan siklus peningkatan daripada alat kecil yang hanya digunakan sekali saja.</p>
<blockquote><p>Kisah umumnya: orang menginstal Boom 3D untuk membuat satu aplikasi senyap menjadi lebih nyaring, lalu menyadari bahwa masalah sebenarnya adalah macOS tidak memiliki pencampur volume per aplikasi sama sekali.</p></blockquote>

<h2>Kesenjangannya: macOS tidak memiliki mixer volume</h2>
<p>Ini mengejutkan orang-orang yang datang dari Windows. Windows telah memiliki Volume Mixer per aplikasi selama bertahun-tahun — klik kanan speaker, atur level setiap aplikasi satu per satu. macOS tidak mengirimkan ini. Anda mendapatkan satu volume master dan penggeser internal apa pun yang diekspos oleh setiap aplikasi. Tidak ada cara tingkat OS untuk menyeimbangkan Slack dengan tab YouTube dengan game.</p>
<p>Jadi, ketika aplikasi musik meredam panggilan Anda, satu-satunya pilihan asli Anda adalah yang sederhana: matikan master (yang membuat semuanya tenang) atau gali pengaturan masing-masing aplikasi dengan harapan aplikasi tersebut memiliki kontrol volume. Boom 3D juga tidak menutup kesenjangan tersebut — Boom 3D membuat keseluruhan campuran lebih keras, tidak setiap aplikasi.</p>

<h2>Dimana SoundDial cocok</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah mixer yang hilang. Itu ada di bilah menu Anda dan memberi setiap aplikasi yang berjalan barisnya sendiri dengan penggesernya sendiri. Itulah perbedaan inti dari Boom 3D: alih-alih hanya satu efek global, Anda mendapatkan kontrol per sumber.</p>
<ul>
<li><strong>Volume independen per aplikasi</strong> — atur Spotify ke 30% sementara panggilan video Anda tetap pada 100%.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi yang berisik secara instan tanpa menyentuh apa pun lainnya.</li>
<li><strong>Peningkatan per aplikasi</strong> — jika Anda menyukai trik Boom 3D yang lebih keras dari 100%, SoundDial mempertahankannya, namun ditargetkan pada satu aplikasi, bukan keseluruhan sistem. Aplikasi yang senyap akan didorong melampaui batas normalnya dengan sendirinya.</li>
<li><strong>Profil volume</strong> — simpan tata letak mixer (misalnya "permainan", "rapat", "musik") dan panggil kembali dalam satu klik alih-alih menyeimbangkan ulang penggeser setiap saat.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis memasukkan audio latar belakang ketika sesuatu yang penting dimulai, sehingga panggilan atau isyarat permainan tidak terkubur di bawah musik.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antara headphone, speaker, dan output lainnya dari menu yang sama.</li>
</ul>
<p>Apa yang sengaja tidak dilakukan SoundDial adalah perluasan fitur Boom 3D lainnya. Tidak ada EQ 31-band, tidak ada pemrosesan surround palsu, tidak ada rantai efek seluruh sistem. Jika Anda menginginkan EQ tingkat master, Boom 3D atau rangkaian audio khusus adalah pilihan yang tepat. Jika sebenarnya Anda terus membuka Boom 3D adalah <em>volume</em>, luas permukaan itu sangat besar sehingga Anda harus membayar untuk membawanya.</p>

<h2>Boost, tanpa pengemudi</h2>
<p>Pertanyaan "peningkatan" memerlukan jawaban langsung, karena biasanya itulah alasan pengguna Boom 3D berbelanja alternatif. Peningkatan Boom 3D bersifat global dan berbasis pengemudi. Peningkatan SoundDial adalah per aplikasi dan berjalan di dalam model sandbox aplikasi Apple — ini didistribusikan melalui Mac App Store, jadi tidak ada penginstal terpisah, tidak ada driver tingkat kernel, dan tidak ada komponen sistem sisa yang perlu dihapus instalasinya nanti. Anda mendapatkan hasil "buat aplikasi senyap ini lebih keras" tanpa menyerahkan kendali driver atas seluruh jalur audio Anda.</p>

<h2>Harga: satu kali vs. berkelanjutan</h2>
<p>Boom 3D adalah aplikasi berbayar dengan model pemutakhiran dan lisensinya sendiri, dan harganya bervariasi menurut platform dan versi. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah pembelian satu kali seharga €14,99 — beli sekali, simpan, tanpa berlangganan, dan tanpa pembelian ulang per versi agar mixer tetap berfungsi. Untuk utilitas yang Anda biarkan berjalan di bilah menu setiap hari, harga tetap cenderung lebih tua daripada produk yang harus terus Anda beli kembali.</p>

<h2>Yang mana yang harus Anda pilih?</h2>
<ul>
<li><strong>Pilih Boom 3D</strong> jika kebutuhan Anda sebenarnya adalah equalizer yang serius dan efek audio seluruh sistem, dan Anda tidak keberatan dengan driver audio dalam campurannya.</li>
<li><strong>Pilih SoundDial</strong> jika Anda menginginkan apa yang dianggap remeh oleh pengguna Windows — pencampur volume nyata per aplikasi — plus peningkatan, profil, dan pengecilan otomatis yang ditargetkan, dengan harga satu kali dan tanpa perlu menginstal driver.</li>
</ul>
<p>Kebanyakan orang yang memantulkan Boom 3D termasuk dalam kelompok kedua. Mereka tidak ingin menyetel frekuensi; mereka ingin browser lebih senyap daripada panggilan. Untuk itulah SoundDial dibuat.</p>

<p><strong>Ingin kontrol volume per aplikasi di Mac Anda tanpa EQ mengasapi atau berlangganan?</strong> <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> — €14,99 sekali, dalam sandbox, tanpa driver, dan setiap aplikasi memiliki penggesernya sendiri.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Cara Membungkam Semuanya Kecuali Satu Aplikasi di Mac Anda",
    description: "macOS tidak memiliki pencampur volume per aplikasi, jadi membungkam setiap aplikasi kecuali satu memerlukan bantuan. Berikut ini cara mendengarkan panggilan, streaming, atau permainan Anda saja sementara yang lainnya tetap tidak bersuara.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>macOS tidak memiliki cara bawaan untuk membisukan aplikasi individual, jadi untuk mendengarkan hanya satu aplikasi, Anda memerlukan pencampur volume per aplikasi. Instal <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, buka mixer bilah menunya, matikan setiap aplikasi kecuali yang ingin Anda dengar, dan aplikasi itu terus diputar sementara aplikasi lainnya langsung senyap.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cara Menonaktifkan Segala Sesuatu Kecuali Satu Aplikasi di Mac Anda" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa macOS tidak bisa melakukan ini sendiri</h2>
<p>Windows telah memiliki Volume Mixer selama lebih dari satu dekade: klik kanan ikon speaker, dan setiap aplikasi yang berjalan mendapatkan penggesernya sendiri. macOS belum pernah mengirimkan ini. Tombol volume pada Mac Anda hanya mengontrol satu hal, tingkat output master. Saat Anda mematikan sistem, semuanya akan ikut terganggu. Saat Anda membisukan, semuanya menjadi sunyi.</p>
<p>Tidak apa-apa sampai Anda memiliki lima benda yang mengeluarkan suara sekaligus. Anda sedang melakukan panggilan video, namun tab browser memutar iklan secara otomatis, Spotify masih berjalan, permainan melakukan ping di latar belakang, dan Slack berbunyi. Satu-satunya pilihan asli Anda adalah keluar dari aplikasi, mematikannya satu per satu di dalam pengaturan masing-masing aplikasi (jika ada opsi itu), atau mencabut headphone Anda. Tak satu pun dari hal itu yang memungkinkan Anda mengatakan "simpan yang ini, diamkan sisanya".</p>

<h2>Cara mudahnya: diamkan sisanya dengan mixer</h2>
<p>Mixer per aplikasi berada di antara aplikasi dan perangkat output Anda dan memberikan kontrol volume dan mute tersendiri pada setiap aplikasi. Setelah Anda menjalankannya, mengisolasi satu aplikasi membutuhkan waktu beberapa detik:</p>
<ul>
<li>Buka mixer dari bilah menu Anda. Anda akan melihat daftar langsung setiap aplikasi yang saat ini memproduksi audio.</li>
<li>Temukan satu aplikasi yang ingin Anda dengar, panggilan Anda, streaming Anda, game Anda.</li>
<li>Bisukan semuanya. Ketuk tombol bisu di samping aplikasi lain, atau tarik penggesernya ke nol.</li>
<li>Itu saja. Satu aplikasi yang Anda tinggalkan terus diputar dengan volume penuh sementara aplikasi lainnya tetap senyap.</li>
</ul>
<p>Dengan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, setiap aplikasi dalam daftar memiliki penggeser dan tombol bisu sendiri, jadi ini hanya dengan beberapa klik. Aplikasi baru yang mulai diputar nanti akan muncul secara otomatis, jadi jika suara notifikasi mencoba menyelinap masuk, Anda dapat membungkamnya saat itu juga tanpa menyentuh aplikasi fokus Anda.</p>

<blockquote>Triknya adalah mematikan suara "semuanya kecuali satu" hanyalah kebalikan dari mematikan satu aplikasi. Anda tidak membungkam Mac Anda, Anda membungkam kebisingan di sekitar hal yang benar-benar Anda pedulikan.</blockquote>

<h2>Simpan sebagai profil agar Anda tidak mengulanginya</h2>
<p>Jika ini adalah pengaturan yang sering Anda lakukan, melakukannya dengan tangan setiap saat akan menjadi membosankan. Katakanlah Anda selalu ingin aplikasi panggilan Anda bersuara keras dan yang lainnya mati selama rapat, atau Anda ingin streaming Anda di depan dan di tengah sementara game dan browser tetap senyap. Profil volume menyimpan pengaturan per aplikasi yang tepat dan menerapkannya kembali dalam satu klik.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> memungkinkan Anda menyimpan profil seperti "Rapat" atau "Streaming Saja", lalu beralih ke profil tersebut saat Anda membutuhkannya. Atur sekali, dan mengisolasi satu aplikasi Anda menjadi tindakan bilah menu tunggal, bukan tugas lima penggeser.</p>

<h2>Versi yang lebih cerdas: bebek otomatis, bukan bisu keras</h2>
<p>Terkadang Anda tidak ingin aplikasi lain hilang sepenuhnya, Anda hanya ingin aplikasi tersebut disingkirkan saat sesuatu yang lebih penting dimulai. Itu adalah pengelak otomatis. Saat aplikasi prioritas Anda diputar, aplikasi latar belakang otomatis turun ke level rendah, lalu naik kembali saat berhenti.</p>
<p>Ini ideal untuk panggilan dan streaming. Saat seseorang mulai berbicara, musik Anda akan pelan sehingga Anda dapat mendengarnya, dan saat panggilan berakhir, musik akan muncul kembali dengan sendirinya. Anda mendapatkan hasil "dengarkan satu aplikasi dengan jelas" tanpa mematikan dan mengaktifkan suara secara manual setiap kali situasi berubah. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> termasuk pengecilan otomatis di samping mixer manual, sehingga Anda dapat memilih bisu keras untuk senyap total atau merunduk untuk latar belakang yang lebih lembut.</p>

<h2>Meningkatkan satu aplikasi yang Anda simpan</h2>
<p>Ada bonus untuk mengisolasi satu aplikasi: Anda juga dapat membuatnya lebih keras dari yang biasanya dimungkinkan oleh Mac. Beberapa aplikasi, terutama panggilan video senyap atau streaming yang tidak dikuasai dengan baik, hampir tidak terdengar bahkan pada volume maksimal. Peningkatan per aplikasi mendorong aplikasi individual di atas 100% tanpa meningkatkan output sistem Anda, yang hanya akan memperkuat aplikasi yang sudah Anda nonaktifkan.</p>
<p>Jadi langkah lengkapnya adalah: matikan kebisingan, pertahankan satu aplikasi Anda, dan jika aplikasi itu terlalu senyap, tingkatkan aplikasi tersebut. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menangani ketiganya di jendela mixer yang sama.</p>

<h2>Apa yang tidak Anda daftarkan</h2>
<p>Kekhawatiran umum pada alat audio Mac adalah bahwa alat tersebut memerlukan ekstensi kernel, driver audio virtual, atau penginstal tersembunyi yang diunduh dari situs web acak. Itu adalah kekhawatiran yang sah, dan itulah sebabnya beberapa orang menghindari aplikasi ini sepenuhnya.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ada di Mac App Store, di-sandbox, dan dipasang seperti aplikasi normal lainnya, tanpa driver, tanpa DMG, tanpa ekstensi sistem yang perlu disetujui. Ini adalah pembelian satu kali sebesar €14,99, bukan berlangganan, jadi Anda membayar sekali dan menyimpannya. Itu penting untuk sesuatu yang Anda biarkan berjalan di bilah menu sepanjang hari.</p>

<h2>Rekap cepat</h2>
<ul>
<li>macOS tidak memiliki kontrol volume per aplikasi asli, jadi Anda memerlukan mixer untuk melakukan ini.</li>
<li>Buka mixer, pertahankan satu aplikasi Anda, nonaktifkan atau hilangkan aplikasi lainnya.</li>
<li>Simpan sebagai profil untuk panggilan atau streaming yang sering Anda lakukan.</li>
<li>Gunakan pengecilan otomatis jika Anda ingin aplikasi di latar belakang dibungkam, bukan dimatikan.</li>
<li>Tingkatkan aplikasi yang Anda simpan jika terlalu senyap.</li>
</ul>

<p>Ingin hanya mendengar apa yang penting dan membungkam sisanya? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> dan siapkan profil mute-everything-else pertama Anda dalam waktu kurang dari satu menit.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Pertahankan Volume Berbeda untuk Speaker vs Headphone di Mac",
    description: "macOS melupakan campuran volume tingkat aplikasi saat Anda beralih antara speaker dan headphone. Inilah sebabnya hal ini terjadi, batasan manual, dan cara memori volume per aplikasi memperbaikinya.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>macOS sebenarnya mengingat volume sistem terpisah untuk setiap perangkat keluaran, namun lupa keseimbangan tingkat aplikasi Anda setiap kali Anda beralih. Jadi headphone dan speaker tetap menjaga levelnya secara keseluruhan, namun saat Anda mencabutnya, satu aplikasi meledak dan aplikasi lainnya hilang. Perbaikannya adalah memori volume per aplikasi yang bertahan dari peralihan perangkat, yang mana macOS tidak memiliki alat asli untuk itu.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Pertahankan Volume Berbeda untuk Speaker vs Headphone di Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Apa yang macOS ingat dan apa yang tidak</h2>

<p>Ada kepercayaan umum bahwa macOS memperlakukan setiap perangkat keluaran secara identik. Tidak. Setiap perangkat keluaran menyimpan volume sistemnya sendiri. Atur speaker MacBook Anda ke 30% dan AirPods Anda ke 80%, dan macOS memisahkan kedua angka tersebut. Pasang, cabut, sambungkan kembali, dan setiap perangkat kembali ke tempat Anda meninggalkannya.</p>

<p>Lantas mengapa pengalaman itu masih terasa rusak? Karena memori itu berhenti pada satu penggeser global. macOS memiliki satu kontrol volume untuk semua yang diputar di perangkat tertentu. Ia tidak mengingat seberapa keras masing-masing aplikasi. Saat Anda beralih dari speaker ke headphone, keseimbangan antara Spotify, panggilan Zoom, dan tab YouTube tidak dipertahankan, karena keseimbangan tersebut tidak pernah ada. Setiap aplikasi berbagi penggeser yang sama.</p>

<p>Hasilnya adalah rasa frustrasi yang digambarkan orang sebagai "volume berbeda untuk speaker vs headphone". Apa yang biasanya mereka inginkan bukan hanya tingkat master yang berbeda per perangkat, namun campuran yang diingat: musik yang tenang, panggilan keras, notifikasi ditolak, dan campuran itu tetap utuh baik di speaker meja atau headphone.</p>

<h2>Solusi manual dan kekurangannya</h2>

<p>Anda bisa mencapai setengah jalan dengan alat bawaan, dan ada baiknya mengetahui batasannya sebelum meraih hal lain.</p>

<ul>
<li><strong>Atur volume sistem setiap perangkat satu kali.</strong> Putar audio melalui speaker Anda, atur levelnya, lalu alihkan output ke headphone dan atur level tersebut. macOS mempertahankan keduanya. Ini menangani volume master per perangkat tetapi tidak menangani volume master per aplikasi.</li>
<li><strong>Gunakan volume per aplikasi di tempat aplikasi menawarkannya.</strong> Spotify, VLC, dan sebagian besar browser memiliki volume internalnya sendiri. Anda dapat memangkas aplikasi yang keras di dalam aplikasi itu sendiri. Tangkapannya: pengaturan ini ada di aplikasi, bukan di perangkat, jadi tidak berubah saat Anda beralih ke headphone, dan sebagian besar aplikasi (Slack, Zoom, notifikasi sistem, Mail) tidak memiliki kontrol seperti itu sama sekali.</li>
<li><strong>Beralih output dari Pusat Kontrol atau bilah menu.</strong> Option-klik ikon volume di bilah menu untuk berpindah antar perangkat dengan cepat. Cepat, tetapi hanya memindahkan level master, tidak memulihkan campuran per aplikasi.</li>
</ul>

<p>Ini memberi Anda volume master per perangkat. Apa yang tidak diberikan satu pun dari mereka kepada Anda adalah saldo per aplikasi yang dapat diingat dan mengikuti Anda di seluruh perangkat. Kesenjangan itulah yang menjadi sumber gangguan, dan bersifat struktural: OS tidak memiliki mixer per aplikasi, tidak seperti Windows, yang telah mengirimkannya selama bertahun-tahun.</p>

<h2>Memori volume per aplikasi, dan mengapa peralihan perangkat adalah masalah sebenarnya</h2>

<p>Perbaikan yang lebih dalam adalah memberikan volumenya sendiri pada setiap aplikasi dan membiarkan pengaturan tersebut tetap ada. Seperti itulah mixer per aplikasi <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dibangun untuk. Itu ada di bilah menu Anda, mencantumkan setiap aplikasi yang saat ini mengeluarkan suara, dan memberi masing-masing aplikasi penggeser independen, tombol mute, dan bahkan peningkatan melebihi 100% untuk aplikasi senyap.</p>

<p>Bagian yang penting untuk masalah speaker-vs-headphone: level tersebut diingat. Setel musik Anda ke 40%, panggilan Anda ke 90%, dan aplikasi cerewet ke senyap, dan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> menyimpan campuran itu. Saat Anda mencabut headphone dan kembali menggunakan speaker, Anda tidak selalu menyeimbangkan ulang tiga aplikasi secara manual.</p>

<p>Profil volume membawa hal ini lebih jauh. Anda dapat menyimpan kumpulan level per aplikasi yang diberi nama dan memanggilnya kembali dalam satu klik, sehingga campuran "headphone, pekerjaan terfokus" dan campuran "speaker, rapat" masing-masing merupakan pilihan tunggal, bukan pengaturan ulang manual.</p>

<blockquote><p>Pergeseran mental: berhenti memikirkan satu penggeser utama yang terus Anda seret, dan mulailah memikirkan tentang campuran yang disimpan per situasi. Peralihan perangkat tidak lagi menjadi tugas yang menyeimbangkan kembali.</p></blockquote>

<h2>Peralihan output cepat tanpa kehilangan mix Anda</h2>

<p>Peralihan perangkat harus cepat dan tidak merusak. Dari panel bilah menu yang sama, Anda dapat mengubah perangkat output, jadi berpindah dari speaker ke headphone hanya dengan satu klik, dan level per aplikasi Anda akan muncul, bukannya kembali ke satu nomor global.</p>

<p>Fitur terkait yang patut disebutkan adalah pengecilan otomatis: saat audio masuk ke mikrofon Anda (Anda mulai berbicara, atau panggilan dimulai), aplikasi lain otomatis turun sehingga Anda dapat didengar, lalu kembali ke level yang disetel setelahnya. Prinsip yang sama diterapkan pada perhatian dan bukan pada perangkat, hal lain yang tidak akan dilakukan macOS dengan sendirinya.</p>

<h2>Bagaimana cara mengaturnya</h2>

<ul>
<li>Instal <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dari Mac App Store. Itu di-sandbox, jadi tidak ada driver, tidak ada DMG, dan tidak ada ekstensi kernel untuk disetujui.</li>
<li>Putar audio di aplikasi yang paling sering Anda gunakan agar muncul di mixer.</li>
<li>Tetapkan level setiap aplikasi, matikan suara apa pun yang tidak Anda inginkan, dan tingkatkan suara apa pun yang terlalu senyap.</li>
<li>Simpan pengaturan tersebut sebagai profil, misalnya satu disetel untuk headphone dan satu lagi untuk speaker.</li>
<li>Saat Anda berpindah perangkat, ingat kembali profil yang cocok, atau biarkan level per aplikasi yang Anda simpan terbawa.</li>
</ul>

<p>Ringkasan jujurnya: macOS mengingat volume per perangkat keluaran pada tingkat master, tetapi macOS tidak akan pernah mengingat campuran per aplikasi Anda, karena tidak memiliki mixer per aplikasi. Jika tujuan Anda sebenarnya adalah keseimbangan yang konsisten antara musik, panggilan, dan notifikasi yang bertahan setiap peralihan antara speaker dan headphone, Anda memerlukan memori per aplikasi di atas OS.</p>

<p>Ingin speaker dan headphone menyimpan mixnya sendiri tanpa harus menyesuaikan ulang setiap aplikasi? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> untuk satu kali €14,99, tanpa berlangganan, tanpa driver.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control Dihentikan? Penggantian Volume Per Aplikasi Mac Terbaik (2026)",
    description: "Sound Control oleh Static Z Software dihentikan dan rusak pada macOS modern. Inilah alasannya berhenti berfungsi, apa fungsinya, dan mixer volume per aplikasi terbaik untuk digunakan pada tahun 2026.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Sound Control oleh Static Z Software dihentikan dan tidak lagi dijual atau diperbarui, dan semakin gagal pada macOS modern karena mengandalkan driver audio tingkat kernel yang telah dikunci oleh Apple. Jika Anda memerlukan volume per aplikasi saat ini, pengganti terbersih adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mixer Mac App Store kotak pasir tanpa driver.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control Dihentikan? Penggantian Volume Per Aplikasi Mac Terbaik (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Apa yang sebenarnya dilakukan Sound Control</h2>
<p>Sound Control, selama bertahun-tahun, merupakan jawaban tepat atas kesenjangan macOS yang sebenarnya: masih belum ada mixer volume per aplikasi bawaan di Mac. Windows telah memilikinya di Volume Mixer sejak Vista, namun macOS hanya memberi Anda satu master slider. Sound Control mengisi lubang itu dengan panel bilah menu rapi yang memungkinkan Anda:</p>
<ul>
<li>Tetapkan tingkat volume independen untuk setiap aplikasi yang berjalan.</li>
<li>Bisukan aplikasi satu per satu tanpa menyentuh seluruh audio sistem Anda.</li>
<li>Tingkatkan aplikasi senyap di atas 100 persen.</li>
<li>Terapkan equalizer per aplikasi dan penyesuaian keseimbangan.</li>
<li>Rutekan audio dan sematkan aplikasi ke perangkat keluaran tertentu.</li>
</ul>
<p>Bagi siapa pun yang pernah mengalami panggilan Zoom sementara tab YouTube di latar belakang berbunyi, kontrol per aplikasi itu sangat transformatif. Ini menjadi bahan pokok di banyak mesin pengguna listrik Mac.</p>

<h2>Mengapa itu berhenti bekerja</h2>
<p>Kisah teknis yang jujur penting di sini, karena ini menjelaskan mengapa ini bukan bug yang bisa ditambal begitu saja. Sound Control bekerja dengan menginstal driver audio sistem — ekstensi kernel (kext) yang dimasukkan ke dalam pipeline audio macOS sehingga dapat mencegat dan membentuk ulang output setiap aplikasi. Kaitan dalam itulah yang membuat fitur EQ dan boost menjadi mungkin.</p>
<p>Dimulai dengan macOS 10.15 Catalina dan berakselerasi melalui Big Sur dan transisi Apple Silicon, Apple mulai menghentikan ekstensi kernel demi alternatif ruang pengguna. Di Apple Silicon Mac, memuat kext pihak ketiga memerlukan penurunan keamanan sistem dalam Mode Pemulihan, dan Apple telah memperjelas bahwa audio lama kext berada dalam waktu pinjaman. Perangkat Lunak Z Statis akhirnya berhenti menjual dan mengembangkan Sound Control. Hasilnya: pada versi macOS terbaru, instalasi gagal, gangguan audio, atau driver menolak memuat tanpa penurunan keamanan yang tidak ingin dilakukan oleh kebanyakan orang.</p>
<blockquote>Hal ini bukan merupakan kelalaian pihak pengembang. Ini adalah pergeseran tingkat platform. Apple menutup pintu pada jenis driver audio tingkat rendah yang dibuat oleh Sound Control, dan tidak ada pembaruan yang dapat membukanya kembali sepenuhnya.</blockquote>

<h2>Apa yang berubah pada macOS modern</h2>
<p>Apple memang menambahkan satu hal yang relevan: Core Audio kini menawarkan Tap API (diperkenalkan di macOS 14.2 Sonoma) yang memungkinkan aplikasi menangkap dan memproses audio per proses dari ruang pengguna — tanpa kext, tanpa penurunan versi keamanan, tanpa reboot ke Pemulihan. Ini adalah jalur modern yang disetujui untuk audio per aplikasi, dan ini adalah dasar dari mixer saat ini. Pengorbanannya jujur: ketukan ruang pengguna lebih terbatas daripada driver kernel lama, jadi Anda harus mengharapkan volume per aplikasi yang bersih, mute, dan boost daripada parametrik per aplikasi penuh yang ditawarkan EQ Sound Control.</p>

<h2>Pengganti terbaik: SoundDial</h2>
<p>Jika Anda menginginkan inti dari apa yang dilakukan Sound Control — volume independen per aplikasi — di Mac Anda benar-benar dapat tetap aman dan terkini, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah opsi migrasi bersih terdekat pada tahun 2026. Ini adalah bilah menu pencampur volume per aplikasi yang dibuat untuk tumpukan audio macOS modern. Apa yang dibawa dari alur kerja Sound Control:</p>
<ul>
<li><strong>Volume independen per aplikasi</strong> — satu penggeser untuk setiap aplikasi yang sedang berjalan, tepat di bilah menu.</li>
<li><strong>Bisu per aplikasi</strong> — mengheningkan satu aplikasi sementara aplikasi lainnya terus diputar.</li>
<li><strong>Peningkatan volume per aplikasi</strong> — mendorong aplikasi senyap ke atas batas normalnya.</li>
<li><strong>Profil volume</strong> — simpan pengaturan mixer untuk konteks berbeda (panggilan, musik, permainan) dan beralih di antara konteks tersebut.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis menurunkan volume aplikasi di latar belakang, berguna saat Anda mulai berbicara atau ada panggilan masuk.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antara speaker, headphone, dan perangkat lain tanpa masuk ke Pengaturan Sistem.</li>
</ul>
<p>Perbedaan praktis yang penting dalam migrasi: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dikirimkan melalui Mac App Store, di-sandbox, dan tidak menginstal driver dan tidak ada DMG. Itu berarti tidak ada ekstensi kernel yang harus disetujui, tidak ada Mode Pemulihan, dan tidak ada penurunan postur keamanan Mac Anda — titik kelemahan yang mematikan Sound Control. Ini adalah pembelian satu kali sebesar €14,99, bukan berlangganan.</p>

<h2>Cara beralih, langkah demi langkah</h2>
<ul>
<li><strong>Copot pemasangan Sound Control dengan bersih.</strong> Karena menginstal driver, gunakan uninstallernya sendiri jika masih berjalan, atau hapus komponen driver audionya sebelum menginstal yang baru. Dua kait audio yang bersaing dapat menyebabkan gangguan.</li>
<li><strong>Instal SoundDial dari App Store.</strong> Tidak diperlukan reboot atau perubahan keamanan.</li>
<li><strong>Berikan izin audio yang diminta.</strong> Inilah yang memungkinkannya membaca dan mengontrol keluaran per aplikasi di macOS modern.</li>
<li><strong>Buka panel bilah menu dan atur level.</strong> Aplikasi Anda yang sedang berjalan muncul dengan penggeser individual; sesuaikan, bisukan, atau tingkatkan sesuai kebutuhan.</li>
<li><strong>Simpan profil.</strong> Jika Anda memiliki pengaturan Sound Control favorit, buat ulang pengaturan tersebut sebagai profil sehingga Anda dapat beralih dalam satu klik.</li>
</ul>

<h2>Harapan yang jujur</h2>
<p>Jika satu-satunya alasan Anda menggunakan Sound Control adalah volume per aplikasi, mute, dan boost, mixer sandbox modern akan membantu Anda sepenuhnya. Jika Anda sangat bergantung pada equalizer per aplikasi, ketahuilah bahwa EQ mendalam terkait dengan model driver lama dan merupakan fitur tersulit untuk direproduksi dengan rapi berdasarkan aturan Apple saat ini. Tetapkan ekspektasi yang sesuai, dan Anda tidak akan terkejut.</p>

<p>Siap untuk mendapatkan kembali volume per aplikasi tanpa membuat pengemudi pusing? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> — satu kali €14,99, sandbox, tanpa berlangganan, tanpa driver.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny Hilang — Aplikasi Volume Per Aplikasi Mac Modern untuk Menggantikannya",
    description: "SoundBunny oleh Prosoft dihentikan. Inilah mixer volume per aplikasi macOS yang dipelihara secara aktif untuk menggantikannya — ditambah cara memigrasikan pengaturan audio per aplikasi Anda tanpa driver kernel.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Jika SoundBunny berhenti berfungsi atau tidak lagi dijual, penggantinya yang modern <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, pencampur volume bilah menu per aplikasi yang dibuat untuk macOS saat ini. Ini memberi Anda tugas inti yang sama — volume independen, mute, dan boost per aplikasi — seperti pembelian satu kali Mac App Store senilai €14,99, tanpa driver kernel, DMG, atau langganan yang harus dikelola.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny Hilang — Aplikasi Volume Per Aplikasi Mac Modern untuk Menggantikannya" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Apa yang terjadi dengan SoundBunny?</h2>
<p>SoundBunny adalah utilitas volume per aplikasi Prosoft Engineering untuk macOS. Ini memungkinkan Anda mengatur tingkat volume yang berbeda untuk setiap aplikasi yang berjalan langsung dari bilah menu — Musik senyap, panggilan keras, browser di antara keduanya. Selama bertahun-tahun, ini adalah salah satu dari sedikit alat yang mengisi kesenjangan yang tidak pernah ditutup oleh Apple.</p>
<p>Masalahnya adalah SoundBunny adalah perangkat lunak lawas. Hal ini belum sejalan dengan perubahan besar yang dilakukan Apple terhadap audio dan keamanan macOS — Apple Silicon, waktu proses yang diperketat, aturan ekstensi sistem yang diperketat, dan penghapusan kait audio lama. Ketika utilitas seperti ini berhenti menerima pembaruan, akhirnya rusak: gagal diluncurkan, kehilangan kendali atas aliran aplikasi setelah pembaruan OS, atau tidak dapat diinstal dengan bersih di Mac modern. Jika itu tempat Anda berada, Anda tidak melakukan kesalahan apa pun. Aplikasinya yang tertinggal, bukan Anda.</p>

<h2>Mengapa macOS masih membutuhkan mixer pihak ketiga sama sekali</h2>
<p>Inilah bagian jujurnya: ini adalah celah asli di macOS, bukan bug yang dapat Anda perbaiki di Pengaturan. Windows telah mengirimkan Volume Mixer per aplikasi selama lebih dari satu dekade. macOS belum pernah memilikinya. Penggeser volume sistem dan pengaturan Suara mengontrol Anda <em>perangkat keluaran</em> secara keseluruhan — setiap aplikasi memiliki level master yang sama. Tidak ada cara bawaan untuk mengatakan "pertahankan Safari pada 40% tetapi Zoom pada 100%".</p>
<p>Itu sebabnya alat seperti SoundBunny ada, dan mengapa penggantian masih diperlukan hingga saat ini. Kebutuhan tersebut tidak hilang ketika aplikasinya hilang — Apple masih belum mengatasinya.</p>

<h2>Pengganti modern: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah pencampur volume per aplikasi yang ada di bilah menu Anda dan melakukan hal-hal yang diandalkan oleh pengguna SoundBunny, dibuat berdasarkan macOS saat ini, bukan macOS kemarin. Fitur yang tumpang tindih mencakup hal-hal penting:</p>
<ul>
<li><strong>Volume independen per aplikasi</strong> — satu penggeser per aplikasi yang sedang berjalan, tepatnya model mental SoundBunny.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi yang berisik tanpa menyentuh aplikasi lainnya.</li>
<li><strong>Peningkatan volume per aplikasi</strong> — tekan aplikasi senyap <em>di atas</em> 100% bila video atau panggilan direkam terlalu rendah. SoundBunny tidak dapat secara andal memperkuat sistem maks sebelumnya pada macOS modern; boost adalah peningkatan nyata di sini.</li>
<li><strong>Profil volume</strong> — simpan sekumpulan level per aplikasi (gabungan "pekerjaan", gabungan "permainan") dan beralih di antara level-level tersebut alih-alih mendorong penggeser satu per satu.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis menurunkan volume aplikasi latar belakang saat sumber audio lain (seperti mikrofon Anda saat melakukan panggilan) menjadi aktif.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antar speaker, headphone, dan output lainnya dari menu yang sama.</li>
</ul>

<h2>Seperti apa sebenarnya migrasi itu</h2>
<p>Tidak ada langkah impor — tingkat volume per aplikasi bukanlah file yang Anda bawa — tetapi peralihannya cepat:</p>
<ul>
<li><strong>Hapus SoundBunny dengan benar.</strong> Keluar, lalu hapus aplikasinya. Jika menginstal pembantu atau item login apa pun, hapus juga sehingga dua utilitas tidak berebut aliran audio yang sama.</li>
<li><strong>Instal SoundDial dari Mac App Store.</strong> Itu di-sandbox dan didistribusikan melalui toko, jadi tidak ada DMG untuk dipasang dan tidak ada peringatan "pengembang tak dikenal". Satu pembelian, terkait dengan ID Apple Anda.</li>
<li><strong>Berikan akses audio pada peluncuran pertama.</strong> macOS akan meminta izin SoundDial untuk melihat audio aplikasi. Ini adalah jalur modern dan disetujui yang disediakan Apple — tanpa ekstensi kernel, tanpa reboot, tanpa penurunan keamanan sistem. Berikan itu dan aplikasi Anda yang sedang berjalan akan muncul sebagai penggeser.</li>
<li><strong>Bangun kembali campuran Anda.</strong> Atur aplikasi umum Anda, lalu simpan pengaturan tersebut sebagai profil sehingga Anda tidak perlu mengulanginya.</li>
</ul>

<h2>Perbedaan praktis dari SoundBunny</h2>
<p>Perbedaan yang paling penting adalah itu <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah perangkat lunak saat ini. Ini berjalan secara asli di Apple Silicon, menggunakan API audio yang didukung Apple, dan merupakan aplikasi Mac App Store — yang berarti pembaruan tiba melalui toko dan dibuat untuk bertahan dalam peningkatan OS, bukan merusaknya. Menjadi sandbox juga berarti tidak dapat menjangkau ke luar jalurnya, yang meyakinkan untuk sesuatu yang berada di antara aplikasi dan speaker Anda.</p>
<p>Beberapa peringatan jujur sehingga ekspektasinya benar. Karena SoundDial berfungsi dalam kerangka audio Apple, kontrol paling baik dilakukan untuk aplikasi standar yang dirutekan melalui output sistem normal. Beberapa perangkat lunak memutar audio melalui jalurnya sendiri atau perangkat eksklusif, dan tidak ada mixer bilah menu — termasuk SoundBunny — yang dapat mengaturnya sepenuhnya. Dan volume per aplikasi pada dasarnya merupakan lapisan perangkat lunak di atas macOS; ini bukan mixer perangkat keras. Dalam batas nyata tersebut, ia melakukan pekerjaan yang biasa dilakukan SoundBunny.</p>

<blockquote>Jika Anda beralih ke Mac dari Windows dengan mengharapkan Volume Mixer per aplikasi, ini adalah alat yang mengisi celah tersebut — dan kini alat ini benar-benar dipertahankan.</blockquote>

<p>SoundBunny berjalan dengan baik, tetapi ini merupakan warisan. Jika Anda memerlukan volume per aplikasi, mute, dan boost pada Mac modern, <a href="https://apps.apple.com/app/id6772792641">dapatkan SoundDial di Mac App Store</a> — €14,99 sekali, tanpa berlangganan, tanpa driver.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Alternatif Boom 2 untuk Mac: Volume Per Aplikasi Tanpa Peningkatan Penjualan Boom 3D",
    description: "Boom 2 adalah warisan dan terus mendorong Anda ke Boom 3D. Jika Anda hanya menginginkan volume per aplikasi dan peningkatan sederhana pada macOS modern, berikut adalah alternatif terfokus dan cara kerjanya.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Jika Anda menyukai Boom 2 untuk peningkatan seluruh sistem tetapi ingin yang sederhana <strong>per aplikasi</strong> volume pada Mac saat ini, jawaban jujurnya adalah Boom 2 sudah ketinggalan zaman dan bukan lagi alat yang tepat. Alternatif yang terfokus adalah <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mixer bilah menu yang memberi setiap aplikasi penggeser volume, mute, dan peningkatannya sendiri, seharga €14,99 satu kali, tanpa perlu mendorong ke paket yang lebih besar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternatif Boom 2 untuk Mac: Volume Per Aplikasi Tanpa Peningkatan Penjualan Boom 3D" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa Boom 2 tidak cocok lagi</h2>
<p>Boom 2 adalah aplikasi yang sangat disukai karena alasan tertentu: aplikasi ini meningkatkan volume keseluruhan Mac Anda melebihi maksimum sistem dan menambahkan equalizer. Itu dilakukan di seluruh sistem, bukan per aplikasi. Hal tersebut baik-baik saja pada tahun 2015. Pada tahun 2026 terdapat dua masalah.</p>
<p>Pertama, ini adalah warisan. Global Delight jelas telah mengalihkan energinya ke Boom 3D, dan jika Anda membuka halaman produk Boom 2, Anda akan segera diarahkan ke aplikasi yang lebih baru dan lebih mahal. Boom 2 masih ada, tapi ini adalah batu loncatan yang digunakan vendor untuk menjual Boom 3D, bukan produk yang mendapatkan cinta aktif.</p>
<p>Kedua, dan yang lebih penting: Boom 2 tidak pernah menjadi pencampur volume per aplikasi. Ini memunculkan dan membentuk satu keluaran utama. Jika masalah Anda yang sebenarnya adalah ping Slack lebih keras daripada musik Anda, atau tab browser meredam panggilan, Boom 2 tidak menyelesaikan masalah tersebut. Itu membuat segalanya menjadi lebih nyaring bersama-sama. Itu pekerjaan yang berbeda.</p>

<h2>Apa sebenarnya arti "volume per aplikasi" di macOS</h2>
<p>Inilah konteks jujur yang dilewati sebagian besar pengumpulan alternatif: macOS tidak memiliki mixer volume per aplikasi bawaan sama sekali. Windows sudah memilikinya selama bertahun-tahun — klik kanan speaker, buka Volume Mixer, dan atur Chrome ke 40% dan Spotify ke 80%. Apple tidak pernah mengirimkannya. Tombol volume macOS hanya menggerakkan satu level master.</p>
<p>Jadi, saat Anda mencari "alternatif Boom 2", yang sebenarnya sering Anda cari bukanlah Mac yang lebih keras — melainkan kontrol per aplikasi yang dianggap remeh oleh pengguna Windows. Itu adalah celah nyata dalam sistem operasi, bukan sesuatu yang lupa dibuat oleh Boom 2 atau aplikasi apa pun.</p>

<h2>Dimana SoundDial cocok</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dibangun untuk kesenjangan itu secara khusus. Itu ada di bilah menu dan mencantumkan aplikasi yang sedang memutar audio, masing-masing dengan penggesernya sendiri. Anda menetapkan level per aplikasi alih-alih memaksakan satu kontrol utama dan berharap yang terbaik.</p>
<p>Kegunaannya:</p>
<ul>
<li><strong>Volume independen per aplikasi</strong> — senyapkan browser, simpan musik di tempat yang Anda inginkan, tanpa kompromi global.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi yang berisik tanpa menyentuh apa pun lainnya.</li>
<li><strong>Peningkatan per aplikasi</strong> — mendorong aplikasi individual melampaui batas normalnya ketika video atau panggilan direkam terlalu pelan. Ini adalah bagian yang biasanya dilewatkan oleh penggemar Boom 2, kecuali di sini ini ditargetkan pada satu aplikasi, bukan keseluruhan sistem.</li>
<li><strong>Profil volume</strong> — simpan tata letak seperti "fokus", "rapat", atau "permainan" dan beralih dalam satu klik.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis menurunkan aplikasi lain saat Anda mulai berbicara, berguna untuk panggilan dan perekaman.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antar speaker, headphone, dan output lainnya dari menu yang sama.</li>
</ul>

<h2>Bagaimana cara mengaturnya</h2>
<p>Alur kerjanya singkat:</p>
<ul>
<li>Instal <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dari Mac App Store — tanpa DMG, tanpa driver, tanpa reboot.</li>
<li>Klik ikon bilah menu untuk melihat setiap aplikasi yang sedang mengeluarkan suara.</li>
<li>Seret penggeser setiap aplikasi ke tingkat yang Anda inginkan; membisukan atau meningkatkan satu per satu sesuai kebutuhan.</li>
<li>Simpan susunannya sebagai profil jika Anda ingin menggunakannya kembali nanti.</li>
</ul>
<p>Karena dikirimkan melalui App Store, ia dimasukkan ke dalam kotak pasir dan dipasang dengan rapi. Hal ini patut untuk diperhatikan, karena beberapa alat audio lama mengandalkan ekstensi kernel atau driver audio virtual — hal yang semakin ditolak oleh macOS modern. SoundDial tidak meminta Anda menginstal driver atau menurunkan pengaturan keamanan apa pun.</p>

<h2>Batasan yang jujur</h2>
<p>Peningkatan per aplikasi memang nyata, namun bukan keajaiban. Jika audio sumber suatu aplikasi benar-benar senyap atau direkam dengan buruk, meningkatkannya akan meningkatkan tingkat kebisingan bersama dengan sinyalnya, sehingga materi yang sangat senyap dapat terdengar mendesis ketika ditekan dengan keras. Itu adalah batas amplifikasi secara fisika, bukan cacat pada aplikasi tertentu — peningkatan sistem Boom 2 memiliki konsekuensi yang sama. Perlakukan peningkatan sebagai ruang utama untuk kasus-kasus praktis, bukan penyelamatan untuk audio yang rusak.</p>

<h2>Boom 2 vs. mixer terfokus</h2>
<p>Jika yang Anda sukai dari Boom 2 adalah kenyaringan seluruh sistem ditambah EQ, dan Anda tidak peduli dengan kontrol per aplikasi, Boom 3D adalah penerus yang diinginkan vendor — itu adalah jalan yang adil, dan kami tidak akan berpura-pura sebaliknya. Namun jika Anda mencoba Boom 2 dan menyadari hal yang sebenarnya Anda inginkan adalah menurunkan atau menaikkan satu aplikasi tanpa memindahkan semuanya, paket EQ-dan-boost adalah alat yang salah.</p>
<blockquote>Boom 2 membuat keseluruhan Mac lebih keras. Mixer per aplikasi memungkinkan Anda memutuskan aplikasi mana yang lebih keras. Itu memecahkan masalah yang berbeda.</blockquote>
<p>Perbedaan harga juga patut disebutkan secara jelas. SoundDial adalah €14,99 satu kali. Tidak ada langganan, tidak ada uji coba yang masuk ke paket yang lebih besar, dan tidak ada jalur dalam aplikasi yang mengarahkan Anda ke tingkat yang lebih mahal. Anda membeli mixer, Anda memiliki mixernya.</p>

<p>Jika volume per aplikasi — bukan EQ seluruh sistem — adalah yang sebenarnya Anda cari, <a href="https://apps.apple.com/app/id6772792641">coba SoundDial di Mac App Store</a> dan atur level Anda sebagaimana macOS seharusnya membiarkan Anda selama ini.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial: Volume Per Aplikasi Sumber Terbuka Gratis vs Berbayar di Mac",
    description: "FineTune adalah aplikasi volume per aplikasi sumber terbuka dan gratis untuk Mac; SoundDial adalah aplikasi App Store berbayar dan sandbox dengan peningkatan, profil, dan dukungan. Berikut perbandingan yang jujur ​​untuk membantu Anda memilih.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>FineTune adalah pencampur volume per aplikasi sumber terbuka dan gratis untuk macOS, jadi jika harga adalah satu-satunya perhatian Anda, ini adalah pilihan yang tepat. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah aplikasi Mac App Store berbayar (€14,99, satu kali) yang menambahkan peningkatan volume per aplikasi, profil tersimpan, pengelak otomatis, dan dukungan vendor. Pilihan sebenarnya adalah gratis dan DIY versus kotak pasir dan didukung.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune vs SoundDial: Sumber Terbuka Gratis vs Volume Per Aplikasi Berbayar di Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Masalah yang dipecahkan oleh kedua aplikasi</h2>

<p>macOS masih belum memiliki pencampur volume per aplikasi bawaan. Windows sudah memilikinya selama bertahun-tahun — klik kanan ikon speaker, buka Volume Mixer, dan setiap aplikasi mendapatkan penggesernya sendiri. Di Mac, Anda mendapatkan satu penggeser volume sistem untuk semuanya: musik, panggilan video, YouTube, bunyi notifikasi, dan permainan, semuanya berbagi. Jika panggilan Anda terlalu pelan dan Spotify terlalu keras, satu-satunya "perbaikan" Anda adalah menonaktifkan Spotify sepenuhnya.</p>

<p>FineTune dan SoundDial hadir untuk mengisi kesenjangan tersebut. Mereka memberi setiap aplikasi yang berjalan kontrol volumenya sendiri sehingga Anda dapat, misalnya, menjaga rapat tetap 100% sambil menurunkan musik latar hingga 20% — tanpa menyentuh penggeser utama.</p>

<h2>Apa yang dilakukan FineTune dengan benar</h2>

<p>FineTune adalah aplikasi sumber terbuka yang lebih baru dan gratis dalam semangat SoundSource. Mari kita bersikap adil mengenai kelebihannya, karena itu nyata:</p>

<ul>
  <li><strong>Tidak ada biaya apa pun.</strong> Tanpa lisensi, tanpa uji coba, tanpa gangguan pemutakhiran.</li>
  <li><strong>Sumbernya terbuka.</strong> Anda dapat membaca dengan tepat apa fungsinya, mengauditnya untuk privasi, dan — jika Anda tahu Swift — memodifikasi atau membaginya.</li>
  <li><strong>Ini berbasis komunitas.</strong> Bug dapat diperbaiki oleh siapa saja, dan kodenya dapat bertahan lebih lama dari perusahaan mana pun.</li>
  <li><strong>Ini mencakup kebutuhan inti.</strong> Volume per aplikasi independen, yang merupakan fitur yang sebenarnya ditelusuri oleh 90% orang.</li>
</ul>

<p>Jika satu-satunya persyaratan Anda adalah "izinkan saya menolak satu aplikasi tanpa menolak semuanya," dan Anda merasa nyaman dengan perangkat lunak yang tidak dilengkapi meja dukungan formal, FineTune adalah jawaban yang sah. Merekomendasikannya di sini bukanlah suatu konsesi — ini jujur.</p>

<h2>Pertukaran yang jujur dari jalur DIY</h2>

<p>Gratis dan sumber terbuka membawa biaya nyata yang tidak tertera pada label harga. Ini bukan merupakan ketukan khusus pada FineTune — ini adalah sifat dari pendekatannya:</p>

<ul>
  <li><strong>Instalasinya manual.</strong> Alat audio sumber terbuka biasanya didistribusikan sebagai build yang diunduh atau formula Homebrew, bukan melalui App Store. Anda menginstal di luar ulasan Apple, dan Anda siap untuk terus memperbaruinya.</li>
  <li><strong>Intersepsi audio per aplikasi pada dasarnya rapuh.</strong> Merutekan audio aplikasi lain adalah pekerjaan sistem yang mendalam. Saat Apple mengirimkan pembaruan macOS yang mengubah tumpukan audio, alat ini dapat rusak hingga seseorang memperbaikinya. Dengan proyek sukarela, "seseorang" mungkin sedang sibuk pada bulan itu.</li>
  <li><strong>Dukungan adalah upaya terbaik.</strong> Jika ada yang rusak, solusi Anda adalah masalah GitHub dan tunggu saja. Tidak ada jaminan respons dan tidak ada yang berkewajiban memperbaikinya.</li>
  <li><strong>Cakupan fitur adalah apa pun yang dikirimkan oleh pengelola.</strong> Kontrol volume inti kemungkinan besar tercakup; ekstra bergantung sepenuhnya pada waktu kontributor.</li>
</ul>

<blockquote>Pembingkaian yang jujur: FineTune memperdagangkan uang untuk tanggung jawab pemeliharaan. Anda menghemat €14,99 dan mengambil risiko jika pembaruan OS membuatnya rusak hingga komunitas dapat menyusulnya.</blockquote>

<h2>Dimana SoundDial berbeda</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mengambil perdagangan sebaliknya. Anda membayar sekali, dan sebagai imbalannya Anda mendapatkan produk App Store dengan vendor di belakangnya dan rangkaian fitur yang lebih luas yang dibangun berdasarkan volume per aplikasi:</p>

<ul>
  <li><strong>Volume per aplikasi dan bisu</strong> — garis dasar bersama yang diberikan oleh kedua aplikasi.</li>
  <li><strong>PENINGKATAN volume per aplikasi</strong> — mendorong aplikasi yang terlalu senyap melewati 100%. Berguna untuk aplikasi dengan keluaran audio yang lemah dan menolak aplikasi lainnya masih belum cukup.</li>
  <li><strong>Profil volume</strong> — simpan seluruh campuran ("Rapat", "Fokus", "Permainan") dan beralih dalam satu klik alih-alih menyetel ulang penggeser setiap kali.</li>
  <li><strong>Merunduk otomatis</strong> — secara otomatis menurunkan aplikasi latar belakang saat Anda berbicara atau saat aplikasi yang dipilih menjadi aktif, sehingga panggilan terputus tanpa perlu mengutak-atik secara manual.</li>
  <li><strong>Peralihan keluaran cepat</strong> — beralih antara speaker, headphone, dan output lainnya dari bilah menu.</li>
</ul>

<p>Sama pentingnya adalah <em>bagaimana</em> itu dikirimkan. SoundDial di-sandbox dan didistribusikan melalui Mac App Store — tanpa DMG terpisah, tanpa driver kernel, tanpa instalasi driver audio. Pembaruan datang melalui App Store seperti aplikasi lainnya, dan ada pengembang nyata yang mengirim email jika ada masalah. Itulah nilai nyata dari €14,99: bukan hanya lebih banyak fitur, namun seseorang yang bertanggung jawab menjaga fitur tersebut tetap berfungsi di seluruh rilis macOS.</p>

<h2>Peringatan jujur ​​yang berlaku untuk keduanya</h2>

<p>Tidak ada aplikasi pihak ketiga yang dapat membuat sistem audio macOS menjadi Volume Mixer Windows, karena Apple tidak mengekspos API publik yang bersih untuk audio per aplikasi. Setiap alat dalam kategori ini — gratis atau berbayar, terbuka atau tertutup — mengatasi batasan tersebut menggunakan teknik audio tingkat sistem. Itu berarti FineTune dan SoundDial dapat terpengaruh oleh perubahan audio macOS yang besar. Perbedaannya terletak pada siapa yang bertanggung jawab atas perbaikan setelahnya: komunitas relawan, atau vendor berbayar yang produknya bergantung pada perbaikan tersebut.</p>

<h2>Mana yang harus Anda pilih?</h2>

<ul>
  <li><strong>Pilih FineTune jika</strong> Anda menginginkan tanpa biaya, menghargai transparansi sumber terbuka, hanya memerlukan volume dasar per aplikasi, dan merasa nyaman melakukan instalasi di luar App Store dan mandiri ketika terjadi kerusakan.</li>
  <li><strong>Pilih SoundDial jika</strong> Anda menginginkan instalasi App Store sekali klik, tambahan seperti boost, profil, dan pengelak otomatis, serta jaminan pembaruan dan dukungan dari vendor yang memiliki fitur dalam game tersebut.</li>
</ul>

<p>Keduanya sah. Ini sebenarnya tergantung pada apakah Anda lebih suka mengeluarkan uang atau menghabiskan perhatian. Jika Anda lebih suka membeli aplikasi yang didukung dan di-sandbox dan tidak perlu memikirkannya lagi, <a href="https://apps.apple.com/app/id6772792641">dapatkan SoundDial di Mac App Store</a> untuk satu kali €14,99 — tanpa berlangganan, tanpa driver, tanpa DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial: Apakah Pengaduk Volume Mac Gratis Cukup?",
    description: "Perbandingan yang adil antara aplikasi Background Music gratis dan SoundDial berbayar. Di mana pendekatan driver virtual gratis berhasil, di mana ia rusak, dan kapan mixer asli seharga €14,99 sepadan.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Background Music gratis dan benar-benar bagus dalam hal dasar: Background Music memberi setiap aplikasi penggeser volumenya sendiri dan dapat menjeda musik secara otomatis saat aplikasi lain diputar. Jika hanya itu yang Anda butuhkan, gunakanlah. Tapi itu bergantung pada driver audio virtual yang dapat rusak setelah pembaruan macOS dan tidak memiliki peningkatan per aplikasi, profil, dan peralihan output. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> memperdagangkan uang untuk alternatif yang didukung dan bebas pengemudi, dalam kotak pasir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial: Apakah Pengaduk Volume Mac Gratis Cukup?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pertama, kebenaran jujur tentang macOS</h2>
<p>macOS tidak memiliki pencampur volume per aplikasi bawaan. Windows telah memilikinya selama lebih dari satu dekade di Volume Mixer-nya, namun pada Mac, penggeser sistem memindahkan semuanya sekaligus. Tidak ada API yang didukung Apple yang memungkinkan aplikasi pihak ketiga mencegat dan menyeimbangkan kembali aliran aplikasi individual dengan rapi. Kesenjangan inilah yang menjadi alasan mengapa alat seperti Background Music dan SoundDial ada, dan merupakan penyebab utama dari sebagian besar trade-off di bawah ini.</p>

<h2>Apa yang Background Music lakukan dengan baik</h2>
<p>Background Music adalah aplikasi bilah menu sumber terbuka yang telah ada selama bertahun-tahun dan memiliki pengikut setia karena alasan yang bagus. Ini memberi Anda:</p>
<ul>
<li><strong>Volume independen per aplikasi</strong> — fitur inti. Turunkan Spotify sambil tetap membuat panggilan tetap keras.</li>
<li><strong>Jeda otomatis</strong> — ini dapat menjeda pemutar musik Anda saat audio diputar di tempat lain, yang merupakan sentuhan yang bagus untuk rapat.</li>
<li><strong>Volume perangkat yang mengikuti Anda</strong> dan antarmuka yang sederhana dan tanpa basa-basi.</li>
<li><strong>Tanpa biaya</strong> — gratis dan kodenya bersifat publik.</li>
</ul>
<p>Bagi banyak orang itu sudah cukup. Jika seluruh daftar keinginan Anda adalah "membuat satu aplikasi berisik menjadi lebih senyap tanpa menyentuh aplikasi lainnya", Background Music memenuhinya, dan Anda tidak perlu membayar untuk sesuatu yang tidak Anda perlukan. Bersikap adil di sini penting: ini adalah alat yang berguna secara sah.</p>

<h2>Dimana pendekatan bebas menunjukkan jahitannya</h2>
<p>Hasil tangkapannya adalah <em>bagaimana</em> Background Music mencapai volume per aplikasi. Karena macOS tidak memberikan jalur resmi, ia menginstal driver audio virtual (versi modifikasi dari pendekatan Soundflower lama) yang merutekan audio sistem Anda melalui dirinya sendiri. Arsitektur itu cerdas, tetapi memerlukan biaya yang nyata:</p>
<ul>
<li><strong>Rusak setelah pembaruan macOS.</strong> Driver audio virtual berada jauh di dalam sistem, dan rilis utama macOS secara historis telah menonaktifkan atau membuat driver tersebut tidak stabil. Pengguna secara rutin melaporkan keheningan, distorsi, atau kebutuhan untuk menginstal ulang setelah melakukan upgrade. Saat rusak, Anda sering kali sendirian.</li>
<li><strong>Pemasangannya lebih berat.</strong> Anda menambahkan perangkat audio yang berdekatan dengan kernel ke Mac Anda, bukan hanya aplikasi. Mencopot pemasangan dengan bersih bisa jadi rumit.</li>
<li><strong>Ini menjadi perangkat keluaran default Anda.</strong> Karena semuanya disalurkan melalui perangkat virtual, beberapa aplikasi pro-audio, konferensi, atau game dapat berperilaku aneh, dan mengganti keluaran sebenarnya adalah langkah ekstra.</li>
<li><strong>Pembangunan dilakukan oleh masyarakat.</strong> Tidak ada meja dukungan. Perbaikan terjadi saat sukarelawan punya waktu, yang bagi alat audio yang tiba-tiba menjadi senyap merupakan risiko yang berarti.</li>
</ul>
<p>Semua ini tidak membuat Background Music buruk. Itu menjadikannya alat gratis dengan trade-off alat gratis.</p>

<h2>Apa yang sebenarnya Anda bayar dengan SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah aplikasi Mac App Store, yang membentuk apa adanya. Karena aplikasi App Store di-sandbox dan tidak dapat mengirimkan jenis driver virtual tingkat rendah yang digunakan Background Music, SoundDial dibuat untuk berjalan tanpa menginstal perangkat audio terpisah atau DMG. Artinya:</p>
<ul>
<li><strong>Tidak ada kebiasaan driver virtual.</strong> Tidak ada perangkat keluaran tambahan yang membajak rantai audio Anda, dan tidak ada yang perlu diinstal ulang saat sistem berubah.</li>
<li><strong>Ia bertahan dari pembaruan macOS dengan jauh lebih baik.</strong> Distribusi dan sandbox App Store berarti App Store dibuat berdasarkan jalur yang didukung dan diperbarui melalui toko, sehingga peningkatan OS cenderung tidak membuat Anda diam.</li>
<li><strong>Peningkatan volume per aplikasi.</strong> Ini adalah perbedaan fitur yang nyata: SoundDial dapat mendorong suatu aplikasi <em>di atas</em> 100% untuk sumber senyap — rekaman podcast terlalu pelan, panggilan video teredam. Background Music hanya melemahkan.</li>
<li><strong>Profil volume.</strong> Simpan serangkaian level per aplikasi ("Rapat", "Musik", "Permainan") dan beralih dalam satu klik alih-alih menyeret penggeser setiap saat.</li>
<li><strong>Merunduk otomatis.</strong> Secara otomatis menurunkan volume aplikasi lain ketika sumber yang dipilih diputar — ide jeda otomatis yang lebih dapat dikonfigurasi.</li>
<li><strong>Peralihan keluaran cepat</strong> dimasukkan ke dalam bilah menu, ditambah bisu per aplikasi.</li>
<li><strong>Dukungan nyata.</strong> Ini adalah produk berbayar dengan seseorang yang bertanggung jawab jika terjadi kesalahan.</li>
</ul>

<h2>Keputusan yang jujur</h2>
<blockquote>Jika Anda ingin gratis dan hanya memerlukan volume dasar per aplikasi, dan Anda merasa nyaman memecahkan masalah setelah pembaruan macOS, Background Music adalah pilihan yang tepat. Jika Anda menginginkan peningkatan, profil, pengecilan, peralihan keluaran, tidak ada kerapuhan driver virtual, dan seseorang yang dapat dikirimi email jika rusak, SoundDial bernilai €14,99.</blockquote>
<p>Beberapa pemecah kebuntuan yang konkrit. Jika Anda sering berurusan dengan sumber yang terlalu senyap, boost saja sudah cukup untuk membenarkan harganya — Background Music tidak bisa membuat audio lebih keras daripada sumbernya. Jika Anda takut dengan pertaruhan tahunan "apakah audio saya akan bertahan dalam pembaruan", aplikasi toko sandbox menghilangkan kecemasan itu. Jika Anda menyukai adegan set-and-forget, profil menghemat gesekan nyata. Dan biayanya hanya €14,99 satu kali, bukan berlangganan, jadi perbandingannya adalah pembelian tunggal versus waktu yang Anda habiskan untuk memelihara driver gratis.</p>
<p>Sebaliknya, jika Anda seorang pengotak-atik yang menyukai open source, ingin membaca kodenya, dan kebanyakan hanya menolak satu aplikasi — hematlah uang Anda. Kedua alat tersebut memecahkan masalah inti yang sama; keduanya berbeda dalam hal ketahanan, kedalaman fitur, dan siapa yang menarik perhatian Anda saat macOS berubah di bawahnya.</p>

<p>Ingin volume per aplikasi tanpa pertaruhan driver virtual? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> — satu kali €14,99, sandbox, tanpa driver, dengan boost, profil, dan auto-ducking bawaan.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "Apakah SoundSource Bernilai $39? Alternatif Mac Sekali Pakai yang Lebih Murah",
    description: "SoundSource adalah alat audio Mac yang tangguh dengan harga ~$39, tetapi itu berlebihan jika Anda hanya memerlukan volume dan peningkatan per aplikasi. Berikut perbandingan jujur ​​dan alternatif satu kali senilai €14,99.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>SoundSource sangat berharga jika Anda memerlukan perangkat lengkapnya: volume per aplikasi, EQ 10-band per aplikasi, perutean audio antar perangkat, dan efek seluruh sistem. Namun dengan harga sekitar $39, itu berlebihan jika Anda terutama menginginkan volume per aplikasi, mute per aplikasi, dan peningkatan volume. Untuk pekerjaan yang lebih sempit itu, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> biaya €14,99 sekali.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Apakah SoundSource Bernilai $39? Alternatif Mac Sekali Pakai yang Lebih Murah" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Apa yang sebenarnya dilakukan SoundSource</h2>
<p>SoundSource dari Rogue Amoeba adalah perangkat lunak yang benar-benar luar biasa, dan penting untuk bersikap adil tentang hal itu. Ini bukan hanya pencampur volume. Ini memberi Anda:</p>
<ul>
<li><strong>Kontrol volume per aplikasi</strong> dari bilah menu, fitur yang disukai kebanyakan orang.</li>
<li><strong>Equalizer 10-band penuh</strong> Anda dapat menerapkannya per aplikasi atau seluruh sistem, ditambah efek audio lainnya (melalui plugin Unit Audio).</li>
<li><strong>Perutean keluaran/masukan</strong>, termasuk mengirimkan satu aplikasi ke perangkat keluaran yang berbeda dari perangkat lainnya di sistem.</li>
<li><strong>Peralihan perangkat cepat</strong> dan preset EQ khusus headphone.</li>
</ul>
<p>Jika Anda seorang podcaster, streamer, atau audio nerd yang ingin menyetel EQ di headphone Anda, mengalihkan suara satu aplikasi ke speaker terpisah, atau menumpuk efek Unit Audio, SoundSource layak mendapatkannya. Tidak ada apa pun di sini yang bisa mengetuknya.</p>

<h2>Pertanyaan harga</h2>
<p>SoundSource adalah lisensi satu kali berbayar sekitar $39 (harga bervariasi menurut versi dan promosi). Ini bukan langganan berulang dalam pengertian Netflix, tetapi mengikuti pola aplikasi berbayar klasik: Anda membeli versi utama, dan peningkatan besar di masa mendatang biasanya didiskon untuk peningkatan berbayar, bukan gratis selamanya. Selama beberapa tahun, itu lebih dari satu pembelian. Bagi sebagian besar pengguna Mac, pertanyaan jujurnya adalah: apakah saya membayar $39 untuk rangkaian perutean dan EQ padahal yang benar-benar saya sentuh hanyalah penggeser volume per aplikasi?</p>

<blockquote>Jika Anda telah membuka SoundSource dan hanya menggunakan penggeser volume dan tombol mute, Anda membayar suite untuk menggunakan satu lacinya.</blockquote>

<h2>Mengapa masalah itu ada</h2>
<p>Inilah akar permasalahan yang sebenarnya: macOS tidak memiliki mixer volume per aplikasi bawaan. Windows sudah memilikinya selama bertahun-tahun, namun pada Mac, volume sistemnya semuanya atau tidak sama sekali. Tidak ada cara yang disediakan Apple untuk membuat Spotify tetap senyap saat panggilan video tetap bersuara, atau untuk membisukan satu aplikasi tanpa menyentuh aplikasi lainnya. Kesenjangan itulah yang menyebabkan alat seperti SoundSource dan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ada. Ini adalah batasan OS yang sebenarnya, bukan masalah yang diciptakan oleh salah satu aplikasi untuk dipecahkan.</p>

<h2>Pilihan yang lebih ringan dan lebih murah cocok</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah bilah menu pencampur volume per aplikasi yang dibuat untuk case umum dan bukan case pro-audio. Ini mencakup:</p>
<ul>
<li><strong>Volume independen per aplikasi</strong> — lepaskan musik Anda selagi rapat tetap dalam level penuh.</li>
<li><strong>Bisu per aplikasi</strong> — membungkam satu aplikasi tanpa mematikan Mac.</li>
<li><strong>Peningkatan volume per aplikasi</strong> — mendorong aplikasi senyap di atas normal 100% ketika sumbernya terlalu lunak.</li>
<li><strong>Profil volume</strong> — simpan serangkaian level per aplikasi (misalnya tata letak "fokus" atau "panggilan") dan beralih dalam satu klik.</li>
<li><strong>Merunduk otomatis</strong> — secara otomatis menurunkan aplikasi lain saat Anda mulai berbicara atau saat aplikasi yang dipilih diputar.</li>
<li><strong>Peralihan keluaran cepat</strong> — beralih antara speaker, headphone, dan perangkat lain dari bilah menu.</li>
</ul>
<p>Itu <strong>€14,99 satu kali</strong>, dijual melalui Mac App Store, jadi sandbox dan tidak ada DMG terpisah, tidak ada ekstensi kernel, dan tidak ada driver audio untuk diinstal. Anda mengunduhnya seperti aplikasi App Store lainnya dan memperbaruinya melalui toko.</p>

<h2>Perbandingan yang jujur</h2>
<p>Bersikaplah jernih tentang trade-off. SoundSource melakukan lebih dari SoundDial, dan jika salah satu dari hal berikut ini penting bagi Anda, SoundSource adalah pilihan yang lebih baik:</p>
<ul>
<li>Anda menginginkan per aplikasi atau sistem yang nyata <strong>penyeimbang</strong> dan efek Unit Audio.</li>
<li>Anda perlu melakukannya <strong>merutekan satu aplikasi ke perangkat keluaran yang berbeda</strong> daripada segalanya.</li>
<li>Anda mengandalkan <strong>preset EQ khusus headphone</strong> dan pemrosesan audio yang halus.</li>
</ul>
<p>SoundDial tidak melakukan EQ atau perutean perangkat per aplikasi. Sengaja dibuat lebih sempit. Sebagai imbalannya, Anda mendapatkan harga yang lebih rendah, ukuran yang lebih ringan, dan antarmuka bilah menu yang terfokus untuk hal yang sebenarnya diinginkan kebanyakan orang: menjaga setiap aplikasi pada tingkat yang Anda pilih, dengan peningkatan dan profil di atas.</p>

<h2>Jadi, apakah SoundSource layak?</h2>
<p>Ya, jika Anda akan menggunakan EQ dan routing. Ini adalah perangkat lunak yang matang dan didukung dengan baik dari pengembang terkemuka, dan harganya mencerminkan kemampuan sebenarnya. Tapi "layak" tergantung pada apa yang akan Anda sentuh. Jika Anda membuka aplikasi dan hanya menyesuaikan penggeser volume, membisukan aplikasi, atau berharap aplikasi senyap lebih keras, Anda membayar uang premium untuk kebutuhan mixer dasar. Dalam hal ini, alat sekali pakai seharga €14,99 adalah pilihan yang lebih masuk akal, dan Anda selalu dapat meningkatkan ke SoundSource nanti jika kebutuhan Anda berkembang menjadi EQ dan perutean.</p>

<p>Jika Anda hanya menginginkan volume per aplikasi, peningkatan, mute, profil, dan pengecilan otomatis, <a href="https://apps.apple.com/app/id6772792641">dapatkan SoundDial di Mac App Store</a> — €14,99 sekali, tanpa berlangganan, tanpa driver.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Terlalu Keras di Mac? Matikan Satu Browser Tanpa Mematikan Segalanya",
    description: "Chrome meledak lebih keras dibandingkan aplikasi Anda yang lain di Mac? Pelajari perbaikan bawaan (bisu per tab, pengaturan suara situs) dan cara menyetel volume per aplikasi yang sebenarnya untuk Chrome agar tetap lebih senyap dibandingkan yang lainnya.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>macOS tidak memiliki volume per aplikasi bawaan, jadi Anda tidak dapat mengecilkan Chrome sambil membiarkan aplikasi lain dalam volume penuh. Perbaikan gratis tercepat Anda adalah menonaktifkan tab yang berisik, menurunkan volume di dalam setiap pemutar video, atau memblokir suara per situs di pengaturan Chrome. Untuk tingkat volume Chrome yang nyata dan persisten, Anda memerlukan mixer per aplikasi.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Terlalu Keras di Mac? Matikan Satu Browser Tanpa Mematikan Segalanya" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa Chrome terdengar lebih keras dari yang lainnya</h2>
<p>Chrome tidak selalu "lebih keras" secara desain — Chrome merutekan audio dari banyak sumber independen: YouTube, iklan yang diputar otomatis, panggilan video, tab musik latar, dan aplikasi web yang masing-masing mengirimkan kenyaringannya sendiri. Beberapa situs dikuasai dengan baik, iklannya terkenal keras, dan Chrome memutar semuanya pada tingkat keluaran penuh sistem Anda. Sementara itu, aplikasi musik atau panggilan Anda mungkin lebih senyap, sehingga Chrome mendominasi campurannya.</p>
<p>Di Windows, Anda cukup membuka Volume Mixer dan menyeret penggeser Chrome ke bawah. macOS tidak menyertakan fitur itu. Tombol volume sistem mengontrol semuanya sekaligus, jadi menurunkan Chrome juga akan mematikan musik, notifikasi, dan panggilan Anda. Itulah batasan intinya — dan ini adalah kesenjangan OS, bukan kesalahan yang Anda lakukan.</p>

<h2>Perbaikan bawaan tanpa biaya apa pun</h2>
<p>Sebelum memasang apa pun, cobalah ini. Mereka tidak akan memberi Anda satu pun tombol volume Chrome, tetapi mereka memecahkan sebagian besar masalah "satu tab keras".</p>
<ul>
<li><strong>Matikan suara tab yang berisik.</strong> Klik kanan tab tersebut dan pilih "Bungkam situs", atau klik ikon speaker kecil yang muncul di tab yang memutar audio. Ini membungkam tab itu sepenuhnya tanpa menyentuh Chrome lainnya.</li>
<li><strong>Turunkan volume di dalam pemutar.</strong> Trik paling andal: seret penggeser volume ke bawah di dalam YouTube, Netflix, atau apa pun yang sedang diputar. Pemain web mengingat level mereka sendiri per situs, jadi YouTube yang lebih senyap akan tetap senyap di lain waktu.</li>
<li><strong>Blokir suara per situs.</strong> Pergi ke <em>chrome://pengaturan/konten/suara</em>. Anda dapat membalik situs antara "diizinkan" dan "dibisukan", dan menambahkan domain tertentu ke daftar bisu. Bagus untuk membungkam situs yang memutar otomatis secara permanen.</li>
<li><strong>Matikan iklan putar otomatis.</strong> Audio iklan sering kali menjadi penyebab sebenarnya. Pemblokir konten atau menonaktifkan tab hingga Anda siap menonton akan menghilangkan sebagian besar kenyaringan yang tidak terduga.</li>
</ul>
<blockquote>Ini benar-benar berguna dan gratis. Namun perhatikan apa yang tidak dapat mereka lakukan: mereka membisukan atau mengelola tab individual. Tak satu pun dari mereka mengizinkan Anda mengatakan "pertahankan semua Chrome pada 40% sementara musik saya tetap pada 100%."</blockquote>

<h2>Batasan jujurnya: tidak ada volume per aplikasi di macOS</h2>
<p>Jika tujuan Anda yang sebenarnya adalah "Chrome harus selalu lebih senyap dibandingkan aplikasi saya yang lain", alat bawaannya gagal. Pembungkaman per tab berarti semuanya atau tidak sama sekali. Penggeser pemutar disetel ulang ketika situs tidak mengingatnya dan harus diulang terus-menerus. Dan volume sistem menggerakkan semuanya secara bersamaan.</p>
<p>Ini adalah batasan macOS yang nyata, bukan bug yang dapat Anda konfigurasikan. Apple belum pernah mengirimkan mixer volume bergaya Windows. Satu-satunya cara untuk mendapatkan tingkat volume yang persisten dan independen untuk Chrome khususnya adalah dengan aplikasi pihak ketiga yang berada di antara aplikasi dan perangkat keluaran Anda dan menerapkan penguatan per aplikasi.</p>

<h2>Tetapkan volume nyata per aplikasi untuk Chrome</h2>
<p>Seperti mixer menu-bar <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> memberi macOS kontrol volume per aplikasi yang tidak ada. Ini mencantumkan setiap aplikasi yang sedang memutar audio dan memberikan masing-masing penggesernya sendiri — sehingga Anda dapat menurunkan Chrome ke tingkat yang nyaman dan membiarkan Spotify, panggilan Anda, dan suara sistem persis di tempatnya.</p>
<p>Inilah cara Anda menjinakkan Chrome yang keras dengannya:</p>
<ul>
<li>Buka mixer bilah menu dan temukan Chrome di daftar aplikasi aktif.</li>
<li>Tarik penggeser Chrome ke bawah, katakanlah, 40 hingga 50 persen. Aplikasi lain tetap tidak tersentuh.</li>
<li>Jika aplikasi tertentu juga demikian <em>tenang</em> sebagai gantinya - aplikasi panggilan yang berbisik - gunakan <a href="https://apps.apple.com/app/id6772792641">peningkatan volume per aplikasi</a> untuk mendorongnya di atas 100 persen, sekaligus menjaga Chrome tetap rendah.</li>
<li>Bisukan Chrome secara instan dengan mute per aplikasi saat Anda memerlukan keheningan tanpa menutup tab.</li>
</ul>
<p>Karena levelnya terikat dengan aplikasi, maka level tersebut melekat. Chrome tetap pada volume yang Anda pilih di seluruh tab, situs, dan mulai ulang — tidak perlu menyeret ulang penggeser pemutar setiap kali Anda membuka video baru.</p>

<h2>Lebih jauh lagi: profil, pengecilan, dan peralihan keluaran</h2>
<p>Setelah Anda memiliki kontrol per aplikasi, beberapa tambahan membuatnya layak untuk dipertahankan. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> memungkinkan Anda menghemat volume <strong>profil</strong> — misalnya profil "fokus" dengan Chrome senyap dan musik nyaring, dan profil "menonton" dengan Chrome mendominasi — dan beralih di antara keduanya dalam satu klik. Penghindaran otomatis dapat mematikan aplikasi lain secara otomatis saat sumber yang dipilih dimulai (berguna sehingga panggilan tidak pernah terkubur di bawah tab browser yang keras). Dan peralihan output cepat memungkinkan Anda beralih antara speaker, headphone, dan perangkat lain tanpa perlu masuk ke Pengaturan Sistem.</p>
<p>Ini adalah pembelian satu kali senilai €14,99 pada Mac App Store — tanpa berlangganan, tanpa driver untuk diinstal, tanpa DMG atau ekstensi kernel. Karena di-sandbox dan didistribusikan melalui App Store, ini tidak memerlukan instalasi driver audio yang samar-samar yang diandalkan oleh alat mixer lama.</p>

<h2>Perbaikan mana yang harus Anda gunakan?</h2>
<p>Jika Anda hanya memiliki satu tab yang mengganggu sesekali, gunakan fitur mute bawaan Chrome dan pengaturan suara situs — semuanya gratis dan berfungsi. Jika Anda terus-menerus berharap Chrome dapat ditolak sementara yang lainnya tetap ada, itulah celah yang dibiarkan terbuka oleh macOS, dan mixer per aplikasi adalah solusi yang tepat.</p>

<p>Ingin Chrome lebih senyap secara permanen tanpa mematikan musik atau panggilan Anda? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> dan berikan penggeser volumenya sendiri pada setiap aplikasi.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "Notifikasi WhatsApp & Telegram Terdengar Terlalu Keras di Mac? Tolak Mereka",
    description: "Perbaiki suara notifikasi desktop WhatsApp dan Telegram yang terlalu keras di Mac Anda. Mulailah dengan pengaturan bawaan masing-masing aplikasi, lalu turunkan atau nonaktifkan seluruh aplikasi saat macOS tidak memberi Anda kontrol per aplikasi.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>Mulai dari dalam setiap aplikasi: WhatsApp dan Telegram memungkinkan Anda menonaktifkan atau mengubah suara notifikasi di pengaturannya masing-masing, yang merupakan perbaikan terbersih. Namun macOS tidak memiliki penggeser volume notifikasi per aplikasi, jadi jika suara aplikasi masih terlalu keras, satu-satunya tuas Anda adalah menurunkan atau membisukan audio seluruh aplikasi dengan alat volume per aplikasi.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Notifikasi WhatsApp &amp; Telegram Terdengar Terlalu Keras di Mac? Tolak Mereka" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pertama, gunakan pengaturan notifikasi aplikasi itu sendiri</h2>

<p>Baik WhatsApp maupun Telegram memiliki kontrol suaranya masing-masing, dan di sinilah Anda harus selalu memulai. Ini adalah perbaikan yang paling tepat dan tidak mempengaruhi apa pun di Mac Anda.</p>

<p><strong>Desktop WhatsApp:</strong> Buka WhatsApp, klik <em>Pengaturan</em> (ikon roda gigi), lalu <em>Pemberitahuan</em>. Anda dapat mematikannya <em>Kedengarannya</em> sepenuhnya sambil menyimpan spanduk, atau menonaktifkan pratinjau notifikasi. WhatsApp tidak menawarkan penggeser volume, jadi pada dasarnya aktif atau nonaktif untuk suaranya sendiri.</p>

<p><strong>Desktop Telegram:</strong> Buka <em>Pengaturan → Notifikasi dan Suara</em>. Telegram lebih fleksibel di sini. Anda dapat mematikan suara notifikasi secara global, membisukan obrolan individual, atau mengatur nada khusus (lebih pelan). Anda juga dapat membungkam satu grup yang berisik dengan membukanya dan memilih <em>Bisu</em>. Bagi kebanyakan orang, membisukan obrolan paling keras akan menyelesaikan masalah tanpa harus berdiam diri di mana pun.</p>

<p>Jika suaranya bagus tetapi terlalu sering, nonaktifkan obrolan atau saluran tertentu yang paling sering diaktifkan daripada mematikan suara di seluruh aplikasi. Hal ini membuat peringatan penting tetap terdengar.</p>

<h2>Matikan suara notifikasi di Pengaturan Sistem macOS</h2>

<p>macOS memiliki kontrol lapisan kedua yang dalam beberapa kasus menggantikan aplikasi. Pergi ke <em>Pengaturan Sistem → Pemberitahuan</em>, pilih WhatsApp atau Telegram dalam daftar, lalu matikan <em>Putar suara untuk notifikasi</em>. Ini membungkam bunyi peringatan untuk aplikasi itu sambil tetap menampilkan spanduk.</p>

<p>Ini adalah perbaikan yang benar-benar bagus jika Anda hanya ingin aplikasi diam saat notifikasi dan tidak peduli dengan audio lainnya (panggilan, video). Dikombinasikan dengan pengaturan aplikasi itu sendiri, ini mencakup sebagian besar keluhan 'pingnya menggelegar'.</p>

<h2>Batasan sebenarnya: macOS tidak memiliki volume per aplikasi</h2>

<p>Inilah bagian jujurnya. Langkah-langkah di atas adalah saklar on/off. Yang tidak bisa mereka lakukan adalah mengubah WhatsApp atau Telegram <em>turun</em> menjadi, katakanlah, 40% sambil mempertahankan volume penuh lainnya. Windows telah memiliki pencampur volume per aplikasi selama bertahun-tahun. macOS tidak menyertakannya, dan tidak ada pengaturan tersembunyi atau perintah Terminal yang menambahkannya.</p>

<p>Hal ini penting jika masalahnya bukan pada bunyi notifikasi secara spesifik, namun keseluruhan aplikasi menjadi terlalu keras:</p>

<ul>
<li>WhatsApp atau Telegram <strong>panggilan suara dan video</strong> ledakan itu dengan volume penuh dibandingkan dengan musik atau rapat Anda</li>
<li>Suara notifikasi yang ingin Anda pertahankan tetapi pada level yang lebih rendah, tidak dimatikan seluruhnya</li>
<li>Nada dering yang melonjak jauh melebihi apa pun yang Anda dengarkan</li>
<li>Ingin aplikasi terdengar namun senyap di latar belakang saat Anda fokus pada hal lain</li>
</ul>

<p>Semua itu tidak dapat diselesaikan dengan alat bawaan, karena alat tersebut hanya menawarkan bisu, bukan level. Kesenjangan itu adalah batasan macOS yang sebenarnya, bukan sesuatu yang Anda lewatkan.</p>

<h2>Tetapkan volume per aplikasi dengan SoundDial</h2>

<p>Untuk benar-benar mematikan satu aplikasi, Anda memerlukan pencampur volume per aplikasi. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah aplikasi bilah menu yang memberi macOS kontrol volume per aplikasi yang tidak pernah disertakan. Ini mencantumkan setiap aplikasi yang sedang memutar audio dan memberikan masing-masing aplikasi penggesernya sendiri.</p>

<p>Untuk masalah khusus ini:</p>

<ul>
<li>Buka <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dari bilah menu dan temukan WhatsApp atau Telegram dalam daftar.</li>
<li>Tarik penggesernya ke bawah ke tingkat yang nyaman, misalnya 30–40%, tanpa menyentuh musik, browser, atau panggilan video Anda.</li>
<li>Gunakan per aplikasi <strong>bisu</strong> tombol untuk membungkam aplikasi itu secara instan selama panggilan atau rapat, lalu membunyikannya nanti tanpa menelusuri pengaturan.</li>
<li>Jika Anda membutuhkan yang sebaliknya, aplikasi senyap yang terlalu lembut, per aplikasi <strong>meningkatkan</strong> dapat mendorongnya di atas 100%.</li>
</ul>

<p>Karena menetapkan level per aplikasi, SoundDial membuat lonceng notifikasi dan audio panggilan tetap terdengar namun proporsional, dibandingkan pilihan semua atau tidak sama sekali yang dipaksakan oleh opsi bawaan. Anda juga dapat menyimpan <strong>profil volume</strong>, jadi pengaturan "fokus" yang menjaga aplikasi obrolan tetap rendah hanya dengan sekali klik.</p>

<blockquote>Satu peringatan yang jujur: menurunkan volume keseluruhan aplikasi di SoundDial juga menurunkan bunyi lonceng notifikasi, karena bagi macOS keduanya merupakan audio aplikasi yang sama. Jika Anda ingin notifikasi benar-benar mati tetapi panggilan dengan volume penuh, gunakan fitur mute (senyap) pada aplikasi dan Pengaturan Sistem untuk berbunyi, dan cadangan SoundDial untuk mengatur level umum.</blockquote>

<p>SoundDial adalah pembelian satu kali senilai €14,99 pada Mac App Store, dalam sandbox, tanpa berlangganan, tanpa driver kernel, dan tanpa DMG untuk melakukan sideload. Ini adalah jawaban praktis ketika perbaikan yang sebenarnya Anda inginkan, mematikan satu aplikasi, bukan mematikannya, bukanlah sesuatu yang dapat dilakukan oleh macOS.</p>

<h2>Perbaikan mana yang harus Anda gunakan?</h2>

<p>Bekerja dari atas ke bawah. Coba pengaturan notifikasi aplikasi terlebih dahulu, lalu Pengaturan Sistem macOS untuk mematikan bunyi lonceng. Jika yang benar-benar Anda inginkan adalah menurunkan WhatsApp atau Telegram ke volume tertentu, atau hanya membisukan aplikasi tersebut saat panggilan berlangsung, di situlah mixer per aplikasi mendapatkan tempatnya.</p>

<p>Bosan memilih antara ledakan penuh dan keheningan total untuk aplikasi obrolan Anda? <a href="https://apps.apple.com/app/id6772792641">Dapatkan SoundDial di Mac App Store</a> dan berikan tombol volume tersendiri pada setiap aplikasi.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Audio Game Lebih Keras Dari Discord di Mac? Cara Menyeimbangkan Game vs Volume Suara",
    description: "Game Anda menenggelamkan obrolan suara Discord di Mac dan tidak ada pengaduk volume bawaan. Inilah alasan macOS tidak memiliki volume per aplikasi bergaya Windows, dan cara mengecilkan game sambil tetap meninggikan suara.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>macOS tidak memiliki pengaduk volume per aplikasi bawaan, sehingga Anda tidak dapat membatasi permainan sambil tetap menjaga suara Discord. Cara mengatasinya adalah aplikasi bilah menu yang mengatur volume independen per aplikasi. Turunkan permainan menjadi 40-50%, biarkan obrolan suara pada 100%, dan keduanya tetap seimbang tanpa menyentuh penggeser dalam game.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Audio Game Lebih Keras Dari Discord di Mac? Cara Menyeimbangkan Game vs Volume Suara" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa ini terjadi pada Mac (dan bukan pada Windows)</h2>

<p>Jika Anda pernah bermain game di Windows, Anda pasti tahu Volume Mixer: klik kanan ikon speaker, dan setiap aplikasi yang berjalan memiliki penggesernya sendiri. Anda drop gamenya, naikkan Discord, selesai. macOS tidak pernah mengirimkan fitur itu. Ada satu volume output master dan beberapa tombol tingkat aplikasi yang tertanam dalam pengaturan sistem, namun tidak ada kontrol tingkat per aplikasi untuk aplikasi sewenang-wenang.</p>

<p>Jadi ketika mix sebuah game dikuasai dengan baik, ledakan, musik, dan tembakannya akan terdengar pada tingkat output yang sama dengan suara teman Anda. Beberapa game menampilkan penggeser volume utama, tetapi banyak juga yang tidak cukup rendah, dan banyak peluncur, browser, dan judul mandiri tidak menawarkan kontrol yang berguna sama sekali. Discord sendiri hanya memungkinkan Anda mengatur volume pengguna yang masuk, bukan game pesaing mereka.</p>

<p>Sejujurnya, ini adalah kesenjangan tingkat OS, bukan bug yang dapat Anda atasi. Tumpukan audio Apple merutekan semuanya ke satu aliran keluaran, dan tidak ada UI pihak pertama yang membaginya per aplikasi. Itu sebabnya Anda memerlukan alat pihak ketiga yang berada di antara aplikasi Anda dan perangkat keluaran.</p>

<h2>Solusi manual (dan mengapa gagal)</h2>

<p>Sebelum menggunakan perangkat lunak, ada baiknya mengetahui opsi gratis dan batasannya:</p>

<ul>
<li><strong>Turunkan volume dalam aplikasi game.</strong> Berfungsi jika game memiliki penggeser utama dengan langkah-langkah yang cukup bagus. Banyak yang berhenti pada kenaikan 10% atau menggabungkan musik dan efek menjadi satu, jadi Anda tidak bisa hanya menjinakkan bagian yang keras saja.</li>
<li><strong>Angkat teman Anda di Discord.</strong> Klik kanan setiap pengguna dan tingkatkan volumenya. Ini sedikit membantu tetapi menjadi yang terbaik, dan tidak menyentuh permainan yang sebenarnya masalahnya.</li>
<li><strong>Gunakan headphone dengan kenop volume perangkat keras.</strong> Hanya mengubah level secara keseluruhan, bukan keseimbangan antara game dan suara.</li>
<li><strong>Rutekan audio melalui perangkat virtual.</strong> Alat seperti Loopback atau BlackHole dapat membagi streaming, tetapi ditujukan untuk para profesional, melakukan pengaturan nyata, dan berlebihan untuk "membuat game lebih senyap".</li>
</ul>

<p>Tak satu pun dari hal ini memberi Anda satu hal yang dianggap remeh oleh pengguna Windows: penggeser cepat per aplikasi. Itulah kesenjangannya <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dibangun untuk diisi.</p>

<h2>Perbaikan langsung: volume independen per aplikasi</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah pencampur volume per aplikasi bilah menu untuk macOS. Ini menunjukkan setiap aplikasi yang sedang memutar suara dan memberikan masing-masing penggesernya sendiri, persis seperti Windows Volume Mixer. Untuk masalah permainan versus suara, alur kerjanya singkat:</p>

<ul>
<li>Klik ikon SoundDial di bilah menu Anda saat game dan Discord sedang berjalan.</li>
<li>Temukan game dalam daftar dan tarik penggesernya ke bawah hingga sekitar 40-50%.</li>
<li>Biarkan Discord (atau Slack, Zoom, atau aplikasi suara Anda) pada 100%.</li>
<li>Sesuaikan dengan cepat saat bermain — dorong permainan lebih jauh dalam baku tembak yang keras, mundur selama eksplorasi yang tenang.</li>
</ul>

<p>Karena levelnya per aplikasi, Anda menyetelnya satu kali dan level tersebut akan bertahan. Permainan tetap dibatasi tidak peduli seberapa panas campurannya berjalan, dan teman Anda tetap terdengar jelas di dalamnya.</p>

<h2>Tingkatkan, nonaktifkan, dan profil untuk sisa pengaturan Anda</h2>

<p>Alat yang sama mencakup gangguan terkait yang datang dengan permainan suara:</p>

<ul>
<li><strong>Peningkatan per aplikasi.</strong> Jika mikrofon rekan setimnya senyap bahkan pada maksimum Discord, Anda dapat menekan aplikasi suara <em>di atas</em> 100% sehingga memotong permainan daripada terkubur.</li>
<li><strong>Bisu per aplikasi.</strong> Senyapkan tab browser latar belakang atau aplikasi musik secara instan tanpa melakukan alt-tab atau menghentikan pemutaran.</li>
<li><strong>Profil volume.</strong> Simpan profil "game" dengan game sebesar 45% dan Discord ditingkatkan, lalu beralih kembali ke profil "normal" untuk penggunaan sehari-hari dalam satu klik — tidak perlu menyeret ulang penggeser setiap sesi.</li>
<li><strong>Merunduk otomatis.</strong> Buat game otomatis turun saat seseorang berbicara, sehingga info selalu muncul di awal tindakan.</li>
<li><strong>Peralihan keluaran cepat.</strong> Beralih antara headphone dan speaker dari menu yang sama tanpa masuk ke Pengaturan Sistem.</li>
</ul>

<blockquote><p>Model mentalnya sederhana: satu penggeser per aplikasi, seperti yang dilakukan Windows selama bertahun-tahun. macOS tidak pernah menyediakannya, jadi utilitas kecil mengembalikan paritas.</p></blockquote>

<h2>Apa yang diharapkan dengan jujur</h2>

<p>Mixer per aplikasi memecahkan masalah keseimbangan dengan baik, tetapi tetapkan ekspektasi dengan benar. Mikrofon ini mengontrol tingkat keluaran perangkat lunak — mikrofon ini tidak dapat memperbaiki permainan yang audionya tidak dikuasai dengan baik, dan tidak dapat meningkatkan sinyal yang tidak pernah ditangkap (mikrofon yang benar-benar rusak masih memerlukan perbaikan perangkat keras). Boost menambahkan penguatan nyata, jadi mendorong sumber senyap jauh melampaui 100% dapat menimbulkan distorsi, persis seperti menaikkan ampli terlalu tinggi. Namun, jika digunakan dengan bijaksana, batas permainan sederhana ditambah sedikit peningkatan suara adalah semua yang dibutuhkan sebagian besar pengaturan.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> di-sandbox dan diinstal langsung dari Mac App Store — tanpa driver, tanpa ekstensi kernel, tanpa DMG yang dapat dipercaya. Ini adalah €14,99 satu kali tanpa berlangganan, dan mendukung kontrol volume macOS dalam 28 bahasa.</p>

<p>Berhenti melawan penggeser dalam game Anda. Ambil <a href="https://apps.apple.com/app/id6772792641">SoundDial di Mac App Store</a>, kecilkan permainan, pertahankan pasukan Anda tetap kuat, dan akhirnya dapatkan mixer volume bergaya Windows macOS yang lupa dikirimkan.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Speaker Monitor Eksternal Terlalu Keras atau Terjebak di Mac? Perbaiki Volume HDMI/DisplayPort",
    description: "Mengapa tombol volume Mac Anda tidak mengontrol speaker monitor HDMI atau DisplayPort, dan cara memperbaiki audio yang terlalu keras, macet, atau tidak dapat disesuaikan menggunakan OSD monitor, Pengaturan Audio MIDI, dan perutean output yang lebih baik.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Jika tombol volume Mac Anda berwarna abu-abu atau tidak melakukan apa pun pada monitor yang tersambung melalui HDMI atau DisplayPort, biasanya hal tersebut bukan merupakan bug. Audio tampilan digital sering kali dikirim pada tingkat tetap, dan perangkat keras monitor sendiri yang mengontrol volumenya. Cara mengatasinya adalah dengan menyesuaikan tampilan, mengubah rute output, atau menggunakan perangkat audio lain.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Speaker Monitor Eksternal Terlalu Keras atau Terjebak di Mac? Perbaiki Volume HDMI/DisplayPort" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa tombol volume Mac berhenti berfungsi melalui HDMI/DisplayPort</h2>

<p>HDMI dan DisplayPort membawa audio sebagai aliran digital. Banyak monitor menerima aliran tersebut pada tingkat keluaran tetap dan mengharapkan Anda mengontrol kenyaringan pada layar itu sendiri, bukan pada perangkat sumber. Ketika macOS mendeteksi hal ini, ia menonaktifkan penggeser volume di layar dan membuat tombol F11/F12 menjadi abu-abu, menampilkan simbol "dilarang masuk" saat Anda menekannya.</p>

<p>Ini adalah batasan perangkat keras dan protokol, bukan sesuatu yang dapat dikesampingkan oleh perangkat lunak di Mac. Audio tidak pernah melewati tahap di mana macOS diperbolehkan untuk melemahkannya. Tidak ada aplikasi, driver, atau pengaturan yang dapat memasukkan kontrol volume ke dalam aliran yang layarnya bersikeras untuk diterima pada tingkat penuh. Jujur tentang hal itu akan menghemat waktu berjam-jam untuk mencari perbaikan yang salah.</p>

<h2>Perbaiki 1: Gunakan kontrol monitor itu sendiri (OSD)</h2>

<p>Ini adalah solusi nyata bagi kebanyakan orang. Hampir setiap monitor dengan speaker internal memiliki menu tampilan di layar yang digerakkan oleh tombol fisik atau joystick di bagian belakang atau bawah panel.</p>

<ul>
<li>Tekan tombol OSD/menu untuk membuka pengaturan monitor.</li>
<li>Cari bagian Audio atau Volume.</li>
<li>Turunkan levelnya — ini adalah kontrol yang benar-benar berfungsi melalui HDMI/DP.</li>
</ul>

<p>Beberapa monitor juga menampilkan aplikasi pendamping atau dukungan DDC/CI sehingga Anda dapat menjalankan OSD dari macOS. Utilitas pihak ketiga yang menggunakan DDC dapat memetakan tombol volume Mac Anda ke volume perangkat keras monitor, yang patut dicoba jika Anda benci meraih tombol panel.</p>

<h2>Perbaiki 2: Periksa Pengaturan Audio MIDI</h2>

<p>Buka <strong>Pengaturan MIDI Audio</strong> (di /Aplikasi/Utilitas). Pilih monitor Anda di daftar perangkat. Jika penggeser volume muncul di sebelah kanan, seret ke bawah — terkadang tampilan menampilkan tingkat yang dapat dikontrol perangkat lunak meskipun tombol bilah menu dinonaktifkan. Jika penggeser tidak ada atau berwarna abu-abu, layar mengonfirmasi bahwa penggeser hanya menerima audio tingkat tetap, dan Anda harus kembali ke OSD.</p>

<p>Saat Anda berada di sini, pastikan perangkat keluaran yang benar telah dipilih. Biasanya audio dirutekan secara diam-diam ke monitor yang Anda lupa tersambung, yang menjelaskan suara keras atau tidak ada yang tiba-tiba.</p>

<h2>Perbaiki 3: Rutekan audio ke suatu tempat yang benar-benar dapat Anda kendalikan</h2>

<p>Jika speaker monitor Anda biasa-biasa saja (sebagian besar) dan kontrol volumenya tidak bagus, solusi terbaiknya adalah berhenti menggunakannya:</p>

<ul>
<li>Colokkan speaker atau headphone ke jack headphone-out monitor jika ada — output analog tersebut biasanya dapat dikontrol volumenya dari layar.</li>
<li>Gunakan USB DAC, speaker USB, atau output Bluetooth. Output USB dan analog memberikan kontrol volume perangkat lunak penuh pada macOS, sehingga kunci Anda berfungsi normal kembali.</li>
<li>Pilih speaker internal Mac Anda untuk suara cepat dan gunakan monitor hanya untuk video.</li>
</ul>

<p>Setelah Anda mendapatkan output yang sebenarnya dapat dilemahkan oleh macOS, tombol volume sistem akan berfungsi, dan Anda mendapatkan kembali kontrol yang baik alih-alih beralih di antara langkah-langkah OSD kasar monitor.</p>

<h2>Setelah output berfungsi, kontrol volume per aplikasi</h2>

<p>Mendapatkan kembali keluaran yang dapat dikontrol memecahkan masalah "terlalu keras/macet". Namun macOS masih memberi Anda hanya satu volume master untuk semuanya. Tidak ada mixer per aplikasi bawaan di Mac — Windows sudah memilikinya selama bertahun-tahun, namun Apple tidak pernah mengirimkan produk serupa. Jadi video keras, permainan, dan panggilan pelan semuanya berbagi penggeser yang sama.</p>

<p>Itulah kesenjangannya <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mengisi. Ini adalah mixer bilah menu yang memberikan volume independen pada setiap aplikasi, sehingga Anda dapat menurunkan tab browser tanpa menyentuh musik, membisukan satu aplikasi secara instan, atau meningkatkan volume aplikasi senyap di atas batas normalnya. Anda dapat menyimpan profil volume untuk pengaturan berbeda dan mengganti output dengan cepat dari bilah menu.</p>

<p>Untuk memperjelas tentang ruang lingkup: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mengontrol volume perangkat lunak untuk audio yang mengalir melalui macOS. Ini tidak dapat mengesampingkan monitor yang mengabaikan volume sistem melalui HDMI — itulah perilaku tingkat tetap pada layar, dan hanya OSD atau output lain yang memperbaikinya. Setelah Anda mendapatkan output yang dapat dikontrol, kontrol per aplikasi adalah keunggulan aplikasi.</p>

<h2>Daftar periksa cepat</h2>

<ul>
<li>Tombol berwarna abu-abu melalui HDMI/DP? Gunakan volume OSD monitor — itulah perilaku yang diharapkan.</li>
<li>Periksa Pengaturan Audio MIDI untuk penggeser perangkat lunak tersembunyi.</li>
<li>Konfirmasikan perangkat keluaran yang tepat telah dipilih.</li>
<li>Untuk kontrol sesungguhnya, rutekan audio ke headphone-out, USB, atau Bluetooth.</li>
<li>Kemudian gunakan mixer per aplikasi untuk menyeimbangkan masing-masing aplikasi.</li>
</ul>

<p>Setelah keluaran Anda terkendali, berikan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lihat. Ini adalah pembelian satu kali senilai €14,99 dari Mac App Store — tanpa langganan, tanpa driver, tanpa DMG — dan akhirnya menghadirkan pencampur volume per aplikasi nyata ke macOS.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "Volume USB DAC Tidak Dapat Disesuaikan di Mac? Dapatkan Kembali Kontrol Volume Perangkat Lunak",
    description: "Mengapa macOS membuat penggeser volume menjadi abu-abu di banyak USB DAC, apa artinya, dan cara mengembalikan kontrol volume perangkat lunak yang berfungsi di Mac Anda tanpa mengganggu kualitas audio.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Jika penggeser volume USB DAC Anda berwarna abu-abu di Mac, biasanya itu bukan bug. macOS menonaktifkan volume perangkat lunaknya ketika DAC melaporkan bahwa ia tidak memiliki volume yang dapat dikontrol, sehingga Anda harus menggunakan kenop perangkat keras DAC sendiri. Untuk mengembalikan volume perangkat lunak, gunakan attenuator tingkat aplikasi seperti <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Volume USB DAC Tidak Dapat Disesuaikan di Mac? Dapatkan Kembali Kontrol Volume Perangkat Lunak" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa macOS membuat volume menjadi abu-abu untuk beberapa USB DAC</h2>

<p>Saat Anda menyambungkan perangkat audio USB, macOS menanyakan apa yang dapat dilakukannya melalui protokol USB Audio Class (UAC). Bagian dari jabat tangan itu adalah serangkaian kontrol "unit fitur", termasuk kontrol volume. Jika DAC mendeklarasikan kontrol volume, macOS menghubungkannya ke tombol volume keyboard dan penggeser bilah menu. Jika DAC menyatakan bahwa ia tidak memiliki volume yang dapat disesuaikan host, macOS membuat penggeser menjadi abu-abu sepenuhnya.</p>

<p>Banyak DAC dan amplifier berkualitas tinggi yang sengaja melakukan hal terakhir. Asumsi perancangnya adalah Anda akan memberi DAC sinyal digital skala penuh dan sedikit sempurna serta mengontrol kenyaringan dengan kenop volume analog pada unit itu sendiri. Redaman analog tersebut terjadi setelah konversi digital ke analog, sehingga menghindari pembuangan bit dan benar-benar merupakan jalur yang disukai audiophile. Itu fitur, bukan kesalahan.</p>

<blockquote>Aturan praktisnya: jika DAC Anda memiliki kenop volume fisik dan penggeser Mac berwarna abu-abu, pabrikan ingin Anda menggunakan kenop tersebut. Sinyal dikirim 100% sesuai desain.</blockquote>

<h2>Ketika penggeser berwarna abu-abu sebenarnya merupakan masalah</h2>

<p>Jawaban "gunakan saja kenop" dipecah dalam pengaturan sebenarnya:</p>

<ul>
<li><strong>DAC tidak memiliki kenop.</strong> Banyak USB DAC, dongle, dan antarmuka pro yang ringkas tidak menampilkan kontrol volume dan juga tidak ada kontrol host. Anda terjebak pada level apa pun yang disetel ke amplifier hilir atau speaker aktif.</li>
<li><strong>Kenopnya di luar jangkauan.</strong> Desktop DAC di belakang monitor Anda, atau unit yang mengumpankan amplifier fixed-gain, berarti menyesuaikan volume menjadi tugas fisik alih-alih menekan tombol.</li>
<li><strong>Anda memerlukan saldo per aplikasi, bukan hanya tingkat master.</strong> Bahkan kenop perangkat keras yang sempurna pun merupakan kontrol global tunggal. Itu tidak bisa membuat panggilan Zoom lebih senyap dari musik Anda, atau menghindari permainan saat notifikasi menyala.</li>
</ul>

<p>Tidak ada satu pun yang diperbaiki oleh macOS, karena dari sudut pandang OS, perangkat berfungsi dengan benar. Ini adalah batasan jujurnya: ini adalah kemampuan yang dilaporkan oleh perangkat, dan tidak ada tombol di Pengaturan Sistem untuk mengesampingkannya.</p>

<h2>Solusi yang jujur sebelum Anda menginstal apa pun</h2>

<p>Coba ini dulu, karena tidak ada biayanya:</p>

<ul>
<li><strong>Gunakan kenop perangkat keras atau volume hilir.</strong> Jika DAC atau speaker/amplifier aktif Anda memiliki kontrol, itu adalah opsi paling bersih dan mempertahankan resolusi digital penuh.</li>
<li><strong>Periksa aplikasi atau firmware DAC sendiri.</strong> Beberapa DAC (dan unit berorientasi game) mengirimkan panel kontrol atau pengaturan firmware yang mengaktifkan volume host. Jika opsi "Volume USB" atau "volume perangkat lunak" ada, mengaktifkannya akan membuat penggeser macOS berfungsi kembali.</li>
<li><strong>Coba mode USB lain.</strong> Beberapa perangkat melaporkan kemampuan berbeda dalam mode driver "sesuai kelas" vs. Menginstal atau menghapus driver vendor dapat mengubah apakah macOS melihat kontrol volume.</li>
<li><strong>Lihat di Pengaturan Audio MIDI.</strong> Buka Audio MIDI Setup, pilih perangkat, dan periksa apakah volume master atau per saluran muncul di sana. Kadang-kadang penggeser tersedia di panel itu meskipun bilah menu berwarna abu-abu.</li>
</ul>

<p>Jika tidak ada yang berlaku, Anda memerlukan redaman perangkat lunak di sisi Mac.</p>

<h2>Kontrol volume perangkat lunak dengan redaman per aplikasi</h2>

<p>Ketika perangkat keras tidak menerima perintah volume, opsi yang tersisa adalah melemahkan audio dalam perangkat lunak sebelum mencapai DAC. Inilah yang sebenarnya terjadi <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> tidak. Itu ada di bilah menu Anda dan memberikan volume independen, mute, dan bahkan peningkatan independen pada setiap aplikasi yang berjalan, terlepas dari apakah DAC Anda memperlihatkan kontrol perangkat keras.</p>

<p>Untuk menggunakannya pada DAC yang berwarna abu-abu:</p>

<ul>
<li>Instal <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dari Mac App Store dan membukanya dari bilah menu.</li>
<li>Tetap pilih DAC Anda sebagai output sistem; Anda juga dapat menggunakan peralihan output cepat SoundDial untuk berpindah antara DAC, speaker, dan headphone tanpa masuk ke Pengaturan Sistem.</li>
<li>Tetapkan level per aplikasi: turunkan browser, naikkan pemutar musik, nonaktifkan apa pun yang tidak Anda inginkan. Setiap aplikasi melakukan streaming pada volume yang Anda pilih, dan hasil campuran masuk ke DAC.</li>
<li>Simpan profil volume untuk berbagai skenario (panggilan vs. mendengarkan), dan biarkan aplikasi berlatar belakang bawah otomatis menghilang ketika sesuatu yang lebih penting mulai diputar.</li>
</ul>

<h2>Pengorbanan yang jujur ​​pada kualitas audio</h2>

<p>Atenuasi perangkat lunak mengurangi level digital sebelum konversi, sehingga secara teori hal ini membuang sejumlah kecil resolusi dibandingkan dengan volume analog pada DAC itu sendiri. Dalam praktiknya, pada jalur modern 24-bit dan lebih tinggi pada tingkat pendengaran normal, pengurangannya jauh di bawah apa pun yang terdengar, dan Anda menjaga rentang dinamis penuh DAC untuk apa pun yang diputar mendekati skala penuh. Jika Anda seorang purist yang memiliki kenop analog yang bagus dalam jangkauan, gunakan kenop tersebut. Jika Anda tidak memiliki kontrol perangkat keras yang dapat digunakan, atau Anda memerlukan saldo per aplikasi yang tidak dapat disediakan oleh macOS, volume perangkat lunak adalah solusi yang tepat, dan ini mengalahkan penggeser yang tidak melakukan apa pun.</p>

<p>SoundDial adalah pembelian satu kali senilai €14,99, dalam kotak pasir, tanpa driver, ekstensi kernel, atau penginstal DMG. Jika volume USB DAC Anda berwarna abu-abu dan menekan kenop bukanlah suatu pilihan, <a href="https://apps.apple.com/app/id6772792641">dapatkan SoundDial di Mac App Store</a> dan kembalikan kontrol volume yang berfungsi ke bilah menu Anda.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Batasi Volume Maksimum Satu Aplikasi Keras di Mac (Lindungi Pendengaran Anda)",
    description: "macOS tidak memiliki batasan volume per aplikasi, sehingga satu aplikasi yang keras dapat membuat Anda meledak pada volume sistem penuh. Berikut cara menetapkan batas volume maksimum untuk satu aplikasi di Mac dengan mixer per aplikasi, dan mengapa batasan perangkat keras penting.",
    date: "2026-07-23",
    readTime: "5 menit baca",
    content: `<p>macOS tidak memiliki cara bawaan untuk membatasi volume maksimum satu aplikasi, sehingga program yang bersuara keras akan diputar sesuai pengaturan penggeser sistem Anda. Untuk menetapkan batas atas untuk satu aplikasi, gunakan bilah menu seperti mixer per aplikasi <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: tahan aplikasi tersebut pada, katakanlah, 40 persen sementara volume sistem Anda tetap lebih tinggi untuk aplikasi lainnya.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Batasi Volume Maksimum Satu Aplikasi Loud di Mac (Lindungi Pendengaran Anda)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mengapa satu aplikasi tiba-tiba dapat membuat Anda terpesona pada Mac</h2>

<p>Di macOS, penggeser volume di bilah menu atau Pusat Kontrol adalah kontrol tunggal di seluruh sistem. Setiap aplikasi dituangkan ke dalam keluaran yang sama pada tingkat yang sama. Tidak ada mixer volume per aplikasi yang terpasang di sistem operasi seperti yang dimiliki Windows selama bertahun-tahun dengan panel Volume Mixer-nya.</p>

<p>Desain itu memiliki konsekuensi nyata bagi telinga Anda. Jika Anda menyetel volume sistem tinggi sehingga Anda dapat mendengar podcast pelan atau panggilan video lembut, lalu beralih ke game, notifikasi Discord, situs web yang penuh iklan, atau video yang dikuasai jauh lebih keras, aplikasi tersebut juga akan diputar pada tingkat sistem penuh. Hasilnya adalah jump-scare klasik: suara tiba-tiba terdengar pada volume yang tidak pernah Anda inginkan untuk aplikasi tertentu.</p>

<p>Bagi siapa pun yang menderita tinnitus, sensitivitas suara, atau yang hanya menghargai pendengarannya, ketidakpastian adalah masalahnya. Anda tidak mencoba membuat segalanya lebih tenang. Anda mencoba untuk menjamin bahwa satu aplikasi keras tertentu tidak akan pernah melebihi tingkat yang Anda putuskan aman.</p>

<h2>Apa yang bisa dan tidak bisa dilakukan macOS di sini</h2>

<p>Izinkan saya jujur tentang batasannya sebelum merekomendasikan apa pun.</p>

<ul>
<li><strong>Volume sistem</strong> menurunkan semuanya sekaligus. Matikan untuk menjinakkan satu aplikasi dan aplikasi senyap Anda menjadi tidak terdengar.</li>
<li><strong>Penggeser volume dalam aplikasi</strong> ada di beberapa aplikasi (pemutar media, beberapa browser per tab) namun tidak sebagian besar. Game, panggilan video, atau aplikasi asli sering kali tidak memiliki kontrol volume independen sama sekali.</li>
<li><strong>Langit-langit perangkat keras itu nyata.</strong> Tidak ada perangkat lunak yang dapat mendorong sinyal lebih keras dari maksimum perangkat output Anda. Sebaliknya, penguasaan kenyaringan aplikasi itu sendiri, ditambah DAC dan headphone Anda, mengatur seberapa keras sebenarnya suara "100 persen" terasa. Perangkat lunak dapat menurunkan level per aplikasi dengan andal, tetapi tidak dapat mengubah sifat fisik headphone Anda.</li>
</ul>

<p>Jadi tujuan jujurnya bukanlah pembatasan kenyaringan ajaib di tingkat pengemudi. Ini adalah redaman per aplikasi yang praktis dan andal: tahan aplikasi yang dipilih pada bagian tetap dari output sistem sehingga tidak akan mengejutkan Anda.</p>

<h2>Cara membatasi volume satu aplikasi dengan mixer per aplikasi</h2>

<p>Pencampur volume per aplikasi memotong audio setiap aplikasi dan memungkinkan Anda mengatur levelnya secara independen. Berikut adalah alur kerja dengan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, yang ada di bilah menu:</p>

<ul>
<li><strong>Buka miksernya.</strong> Klik ikon bilah menu SoundDial. Anda akan melihat daftar setiap aplikasi yang sedang memutar audio, masing-masing dengan penggesernya sendiri.</li>
<li><strong>Temukan aplikasi keras.</strong> Temukan aplikasi yang ingin Anda batasi, misalnya game, browser, atau alat konferensi video.</li>
<li><strong>Atur langit-langitnya.</strong> Tarik penggeser aplikasi tersebut ke bawah ke tingkat aman, misalnya 35 hingga 50 persen. Aplikasi tersebut sekarang diputar pada sebagian kecil dari keluaran sistem sementara aplikasi lainnya tetap di tempatnya.</li>
<li><strong>Biarkan volume sistem Anda di tempat yang Anda perlukan.</strong> Jaga agar penggeser sistem cukup tinggi untuk aplikasi Anda yang senyap. Aplikasi yang dibatasi tetap terkendali.</li>
</ul>

<p>Karena levelnya adalah per aplikasi, Anda secara efektif menetapkan maksimum untuk satu program tersebut. Bahkan ketika ia mencoba memutar kontennya yang paling keras, yang paling keras sekarang adalah bagian penuh yang Anda pilih.</p>

<h2>Buat tutupnya menempel dengan profil</h2>

<p>Satu penyesuaian manual membantu, tetapi level aplikasi dapat diatur ulang saat Anda keluar dan meluncurkan kembali. Untuk membuat pengaturan yang aman untuk pendengaran dan bertahan saat restart, gunakan <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>profil volume. Simpan profil dengan level per aplikasi pilihan Anda, misalnya "malam permainan yang tenang" dengan game sebesar 40 persen, aplikasi musik Anda sebesar 70 persen, dan aplikasi panggilan Anda sebesar 90 persen. Ingat kembali dalam satu klik setiap kali Anda duduk. Langit-langit Anda untuk aplikasi keras kembali persis seperti yang Anda atur.</p>

<p>Dua fitur lagi yang perlu diketahui untuk perlindungan pendengaran:</p>

<ul>
<li><strong>Bisu per aplikasi</strong> memungkinkan Anda langsung membungkam satu pelaku tanpa menyentuh apa pun, berguna untuk aplikasi yang mengirim spam pemberitahuan keras.</li>
<li><strong>Merunduk otomatis</strong> secara otomatis menurunkan audio latar belakang ketika sesuatu yang lebih penting dimulai, sehingga Anda tidak terjebak di antara dua sumber suara keras sekaligus.</li>
</ul>

<blockquote><p>Atenuasi perangkat lunak benar-benar efektif untuk membatasi aplikasi, namun ini merupakan satu lapisan perlindungan, bukan perlindungan medis. Jika Anda menderita tinitus atau sensitivitas suara, pasangkan batasan per aplikasi dengan tingkat pendengaran dan jeda mendengarkan secara keseluruhan yang masuk akal. Tidak ada aplikasi yang menggantikan kebiasaan volume yang hati-hati.</p></blockquote>

<h2>Catatan tentang peningkatan, dan mengapa ini terpisah</h2>

<p>Mixer per aplikasi yang membatasi aplikasi yang bersuara keras juga dapat meningkatkan volume yang terlalu pelan hingga di atas 100 persen, yang berguna untuk aplikasi yang volumenya dikuasai terlalu rendah. Ini adalah dua sisi dari kontrol yang sama: Anda menentukan level setiap aplikasi, naik atau turun. Untuk perlindungan pendengaran Anda cukup memilih arah "bawah" dan menahannya di sana.</p>

<h2>Versi pendek</h2>

<p>macOS tidak akan membiarkan Anda membatasi volume satu aplikasi saja, dan itu adalah celah OS yang sebenarnya, bukan kesalahan pengguna. Pencampur bilah menu per aplikasi menutupnya: atur aplikasi keras ke pecahan tetap, simpan di profil, dan itu tidak akan pernah membuat Anda meledak lagi sementara aplikasi Anda yang lain tetap terdengar.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah pembelian satu kali senilai €14,99 pada Mac App Store, dalam sandbox tanpa driver atau DMG untuk diinstal. Jika melindungi telinga Anda dari satu aplikasi yang tidak dapat diprediksi adalah tujuannya, ini adalah cara paling sederhana untuk menetapkan batas tersebut dan mempertahankannya.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Saldo Kiri/Kanan Berbeda Per Aplikasi di Mac — Mungkinkah?",
    description: "Bisakah Anda menyetel keseimbangan stereo kiri/kanan yang berbeda untuk setiap aplikasi di macOS? Sejujurnya, tidak — tidak secara asli, dan tidak dengan sebagian besar alat. Inilah yang sebenarnya mungkin dan di mana batasan sebenarnya.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Jujur saja, tidak — macOS tidak memungkinkan Anda mengatur keseimbangan stereo kiri/kanan yang berbeda per aplikasi, dan hampir tidak ada alat pihak ketiga yang mengekspos panning per aplikasi yang sebenarnya. Anda dapat menetapkan satu saldo global untuk perangkat keluaran Anda, dan Anda dapat mengontrol per aplikasi <em>volume</em>, namun independen per aplikasi <em>panci</em> bukan fitur yang disediakan macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Saldo Kiri/Kanan Berbeda Per Aplikasi di Mac — Mungkinkah?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Keseimbangan vs. volume — keduanya bukanlah hal yang sama</h2>

<p>Ada baiknya memisahkan dua gagasan yang sering membingungkan:</p>
<ul>
  <li><strong>Volume</strong> — seberapa keras suatu aplikasi secara keseluruhan. Ini adalah satu level yang diterapkan pada kedua saluran.</li>
  <li><strong>Saldo (menggeser)</strong> — bagaimana audio didistribusikan antara speaker kiri dan kanan. Keseimbangan "kiri penuh" mengirimkan segalanya ke saluran kiri dan membungkam saluran kanan.</li>
</ul>

<p>Orang yang meminta "keseimbangan berbeda per aplikasi" biasanya menginginkan salah satu dari dua hal: memasukkan suara satu aplikasi ke satu telinga (misalnya, panggilan di telinga kiri, musik di telinga kanan), atau mengoreksi perbedaan pendengaran atau speaker buruk di satu sisi — tetapi hanya untuk aplikasi tertentu. Itu adalah tujuan yang sah. Masalahnya adalah di mana kendali itu berada.</p>

<h2>Mengapa macOS tidak dapat melakukan ini secara asli</h2>

<p>macOS memiliki tepat satu kontrol keseimbangan, dan berada di tingkat perangkat keluaran. Anda akan menemukannya di bawah <strong>Pengaturan Sistem → Suara → Keluaran</strong>, dimana a <em>Keseimbangan</em> penggeser menggeser seluruh campuran ke kiri atau ke kanan. Apa pun yang diatur penggesernya, berlaku untuk <em>semuanya</em> dirutekan ke perangkat itu — setiap aplikasi, setiap suara sistem, semuanya sekaligus.</p>

<p>Tidak ada API di tumpukan audio macOS standar yang mengatakan "render audio aplikasi ini ke kiri, aplikasi itu ke kanan". Aplikasi menyerahkan audionya ke sistem yang sudah tercampur, dan sistem menerapkan satu keseimbangan utama menuju speaker. Jadi lapisan yang Anda inginkan per aplikasi tidak diekspos oleh sistem operasi. Ini adalah batasan OS asli, bukan sesuatu yang dapat diatasi dengan baik oleh utilitas bilah menu.</p>

<blockquote>Berbeda dengan per aplikasi <em>volume</em> — yang juga tidak dimiliki macOS secara asli, tetapi aplikasi mana yang dapat diterapkan dengan mengetuk aliran audio — per aplikasi <em>keseimbangan</em> akan memerlukan penggeseran ulang setiap aliran aplikasi secara terpisah, dan pengait tersebut tidak tersedia untuk aplikasi yang dimasukkan ke dalam sandbox.</blockquote>

<h2>Apa yang dilakukan SoundDial — dan sejujurnya, apa yang tidak dilakukannya</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> memberi Anda kontrol per aplikasi macOS hilang: independen <strong>volume</strong> untuk setiap aplikasi yang berjalan, per aplikasi <strong>bisu</strong>, volume per aplikasi <strong>meningkatkan</strong> di atas 100%, volume yang dapat disimpan <strong>profil</strong>, pengecilan otomatis, dan peralihan keluaran cepat dari bilah menu.</p>

<p>Untuk berterus terang kepada Anda: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> kontrol per aplikasi <em>kenyaringan dan keheningan</em>, bukan stereo per aplikasi <em>mendulang</em>. Ini tidak akan mengirimkan Safari ke telinga kiri Anda dan Spotify ke telinga kanan Anda. Jika seseorang memberi tahu Anda bahwa mixer bilah menu benar-benar menyeimbangkan L/R per aplikasi di macOS, bersikaplah skeptis — itu bukanlah kontrol yang diberikan OS. Apa yang sebenarnya dipecahkan oleh SoundDial adalah rasa frustrasi yang jauh lebih umum: satu aplikasi menjadi terlalu keras atau terlalu senyap dibandingkan aplikasi lainnya.</p>

<h2>Solusi nyata untuk saldo per aplikasi</h2>

<p>Jika Anda benar-benar membutuhkan audio yang dipisahkan secara berdampingan, berikut adalah opsi yang jujur, mulai dari yang paling sederhana hingga yang paling rumit:</p>

<ul>
  <li><strong>Saldo global (semua aplikasi):</strong> Gunakan Pengaturan Sistem → Suara → Output → Keseimbangan. Ini adalah satu-satunya opsi bawaan Anda, dan ini memengaruhi setiap aplikasi. Berguna untuk mengoreksi ruangan atau asimetri pendengaran, tidak berguna untuk mengisolasi satu aplikasi.</li>
  <li><strong>Perangkat keluaran terpisah:</strong> Ini adalah hal yang paling mendekati saldo nyata per aplikasi. Rutekan Aplikasi A ke satu perangkat keluaran dan Aplikasi B ke perangkat lainnya, lalu atur keseimbangan setiap perangkat secara terpisah. macOS memungkinkan Anda memilih perangkat keluaran di dalam beberapa aplikasi (dan browser/aplikasi komunikasi sering kali menampilkan pemilih keluarannya sendiri). Jika Aplikasi A mengarah ke perangkat yang digeser ke kiri dan Aplikasi B ke perangkat yang digeser ke kanan, Anda secara efektif mendapatkan saldo per aplikasi — selama kedua aplikasi memungkinkan Anda memilih keluarannya.</li>
  <li><strong>Alat perutean audio virtual:</strong> Utilitas yang membuat perangkat virtual dan mixer internal, dalam beberapa konfigurasi, dapat merutekan aplikasi tertentu ke saluran tertentu. Ini kuat namun rumit, menambahkan komponen gaya pengemudi, dan berlebihan bagi kebanyakan orang. Ini adalah domain streamer dan teknisi audio, bukan perbaikan biasa "panggilan di satu telinga".</li>
  <li><strong>Pemisahan perangkat keras:</strong> Jika menyangkut speaker fisik atau perbedaan pendengaran, mixer perangkat keras atau antarmuka audio dengan kontrol per saluran akan menghindari masalah perangkat lunak sepenuhnya.</li>
</ul>

<h2>Ketika volume per aplikasi benar-benar sesuai dengan kebutuhan Anda</h2>

<p>Banyak permintaan "Saya ingin saldo berbeda per aplikasi" sebenarnya adalah "satu aplikasi menenggelamkan aplikasi lainnya". Jika tujuannya adalah panggilan video yang dapat Anda dengar sambil mendengarkan musik, atau permainan yang terlalu keras di samping obrolan Discord, keseimbangan bukanlah alatnya — volume independen adalah jawabannya. Itulah yang ditangani oleh mixer per aplikasi dengan bersih, tanpa driver virtual atau senam perutean.</p>

<p>Jadi ringkasan jujurnya: keseimbangan kiri/kanan per aplikasi yang sebenarnya bukanlah fitur macOS, dan tidak ada aplikasi mixer yang memalsukannya dengan meyakinkan. Rute Anda yang sebenarnya adalah penggeser keseimbangan global atau perutean keluaran per aplikasi ke perangkat yang digeser secara terpisah. Namun jika rasa sakit yang mendasarinya relatif keras, maka masalah tersebut sudah teratasi.</p>

<p>Ingin volume independen, mute, dan boost untuk setiap aplikasi di Mac Anda, dengan profil yang dapat disimpan dan tanpa driver? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Dapatkan SoundDial di Mac App Store</a> — €14,99, satu kali, dalam kotak pasir.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Mengapa Beberapa Aplikasi Jauh Lebih Keras Dibandingkan Aplikasi Lainnya di Mac? (Dan Cara Meratakannya)",
    description: "Aplikasi terdengar sangat berbeda di Mac karena masing-masing aplikasi dikuasai sesuai target kenyaringannya sendiri dan macOS tidak memiliki kontrol volume per aplikasi bawaan. Inilah sebabnya hal ini terjadi dan cara meningkatkan level aplikasi Anda.",
    date: "2026-07-23",
    readTime: "6 menit baca",
    content: `<p>Aplikasi terdengar sangat berbeda di Mac Anda karena masing-masing aplikasi dibuat, dikuasai, dan dinormalisasi ke target kenyaringannya sendiri, dan macOS tidak memiliki kontrol volume per aplikasi bawaan untuk merekonsiliasinya. Spotify, YouTube, Zoom, dan peringatan sistem semuanya melewati penggeser utama yang sama, sehingga Anda terjebak naik dan turun terus-menerus.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mengapa Beberapa Aplikasi Jauh Lebih Keras Dibandingkan Aplikasi Lainnya di Mac? (Dan Cara Meratakannya)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ini bukan Mac Anda — melainkan audionya sendiri</h2>

<p>Penggeser volume sistem tunggal pada macOS mengontrol tingkat keluaran akhir untuk semuanya. Itu tidak menyentuh kenyaringan relatif yang dimasukkan ke dalam aliran audio setiap aplikasi. Garis dasar tersebut ditetapkan jauh sebelum suara mencapai speaker Anda, dan ini sangat bervariasi dari satu sumber ke sumber lainnya.</p>

<p>Tiga hal yang mendorong perbedaan tersebut:</p>

<ul>
<li><strong>Menguasai level.</strong> Lagu pop yang kuat dikuasai jauh lebih baik daripada rekaman akustik yang tenang atau podcast lisan. Film yang di-mix untuk bioskop sengaja membuat bisikannya senyap dan meledak dengan keras — itulah rentang dinamisnya, yang berarti level rata-ratanya rendah.</li>
<li><strong>Target normalisasi kenyaringan.</strong> Platform streaming menyesuaikan pemutaran dengan target yang diukur dalam LUFS (Loudness Units relative to Full Scale). Spotify menargetkan sekitar -14 LUFS, YouTube sekitar -14 LUFS, Apple Music sekitar -16 LUFS. Aplikasi konferensi video atau game menerapkan keuntungannya sepenuhnya. Dua aplikasi yang "dinormalisasi" ke target berbeda tidak akan pernah cocok satu sama lain.</li>
<li><strong>Tidak ada leveling lintas aplikasi.</strong> Setiap aplikasi hanya menormalkan kontennya sendiri. Tidak ada yang mengkoordinasikan Spotify dengan Zoom terhadap game browser. macOS hanya menjumlahkannya dan mengirimkan campurannya.</li>
</ul>

<h2>Mengapa LUFS penting (secara sederhana)</h2>

<p>Level puncak memberi tahu Anda momen paling keras dalam sebuah sinyal. LUFS memberi tahu Anda seberapa keras sebenarnya sesuatu itu <em>terasa</em> seiring berjalannya waktu, disesuaikan dengan cara kerja pendengaran manusia. Perbedaan inilah yang menyebabkan podcast dan lagu dance dapat mencapai puncak yang sama namun terasa sangat berbeda dalam hal kenyaringan — lagu tersebut menghabiskan lebih banyak waktu di dekat puncaknya.</p>

<blockquote>Target LUFS yang lebih senyap berarti lebih banyak ruang kepala dan rentang dinamis. Target yang lebih keras berarti dinding suara yang lebih konsisten dan "selalu penuh". Tidak ada yang salah - tetapi ketika aplikasi menargetkan nomor yang berbeda, Anda merasakannya seperti satu aplikasi berteriak dan aplikasi lainnya bergumam.</blockquote>

<p>Itulah akar permasalahan yang jujur. Ini bukan bug yang bisa Anda tambal. Ini adalah fisika tentang bagaimana audio diproduksi dan disampaikan, dikalikan ke selusin aplikasi yang tidak pernah dirancang untuk selaras satu sama lain.</p>

<h2>Kesenjangan yang dibiarkan macOS terbuka</h2>

<p>Inilah bagian yang benar-benar membuat orang frustrasi: Windows telah mengirimkan Volume Mixer per aplikasi selama bertahun-tahun. Anda dapat menarik satu aplikasi ke bawah dan mendorong aplikasi lainnya ke atas, langsung dari taskbar. macOS tidak pernah menyertakan ini. Preferensi suara hanya memberi Anda penggeser utama dan pilihan perangkat keluaran.</p>

<p>Jadi pada Mac pilihan Anda biasanya terbatas:</p>

<ul>
<li>Sesuaikan penggeser volume internal setiap aplikasi — jika ada. Banyak aplikasi (Zoom, sebagian besar game, lonceng sistem) tidak menampilkan aplikasi yang dapat digunakan.</li>
<li>Gunakan penggeser utama secara manual setiap kali Anda berpindah konteks.</li>
<li>Matikan satu hal sepenuhnya, yang merupakan perbaikan tumpul yang sebenarnya tidak menyeimbangkan apa pun.</li>
</ul>

<p>Tak satu pun dari ini mengingat preferensi Anda. Keluar dan luncurkan kembali aplikasi dan Anda kembali ke titik awal.</p>

<h2>Perbaikan praktisnya: volume yang diingat per aplikasi</h2>

<p>Karena Anda tidak dapat memaksa setiap layanan untuk menguasai kembali katalognya, solusi yang bisa diterapkan adalah menambahkan lapisan macOS yang hilang yang tidak pernah dikirimkan: volume independen dan diingat untuk setiap aplikasi. Itulah tepatnya <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> tidak. Itu ada di bilah menu Anda dan memberikan penggesernya sendiri pada setiap aplikasi yang berjalan, sehingga Anda dapat menarik yang bersuara keras ke bawah dan mendorong yang senyap ke atas hingga berada pada tingkat yang terasa bahkan bagi Anda.</p>

<p>Untuk meratakan aplikasi Anda dalam praktiknya:</p>

<ul>
<li>Buka <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dari bilah menu dan Anda akan melihat setiap aplikasi aktif dengan kontrolnya sendiri.</li>
<li>Turunkan apa pun yang sedang booming — biasanya aplikasi musik atau video yang dikuasai dengan baik — hingga sekitar 60-70%.</li>
<li>Biarkan aplikasi referensi tenang Anda (sering kali berupa aplikasi panggilan atau podcast) pada 100%, dan gunakan per aplikasi <strong>meningkatkan</strong> untuk mendorongnya melewati 100% jika masih terlalu lunak.</li>
<li>Atur levelnya satu kali. SoundDial mengingat volume setiap aplikasi, sehingga saldo tetap tersimpan saat Anda membukanya lagi.</li>
</ul>

<p>Dua fitur melakukan sebagian besar pekerjaan leveling di sini. <strong>Tingkatkan</strong> penting karena banyak aplikasi yang terlalu senyap bahkan pada kondisi maksimal — penggeser per aplikasi yang hanya mengurangi volume tidak dapat menyelamatkannya, tetapi penggeser yang dapat memperkuat hingga melebihi 100% dapat menyelamatkannya. Dan <strong>profil volume</strong> memungkinkan Anda menyimpan seluruh rangkaian level — misalnya, profil "fokus musik rendah, panggilan keras" untuk bekerja versus campuran berbeda untuk bermain game — dan beralih di antara keduanya secara instan alih-alih menyesuaikan ulang aplikasi demi aplikasi.</p>

<h2>Dimana hal ini paling membantu</h2>

<p>Kelegaan yang paling umum adalah lompatan musik versus rapat: streaming musik dikuasai dengan suara keras, kemudian aplikasi panggilan terdengar samar jika dibandingkan. Atur aplikasi panggilan lebih tinggi (atau diperkuat), turunkan musik, dan perubahan volume yang mengejutkan menghilang. Hal yang sama berlaku untuk permainan browser yang tenang melawan pemutar video yang keras, atau peringatan sistem yang melompati segalanya.</p>

<p>Untuk memperjelas batasannya: SoundDial menyeimbangkan keluaran aplikasi Anda. Itu tidak akan menguasai ulang trek yang diproduksi dengan buruk, dan tidak dapat menciptakan detail dalam audio yang dicampur dengan rentang dinamis yang sangat lebar. Fungsinya adalah memberi Anda satu-satunya kontrol yang tidak dimiliki macOS — tingkat stabil per aplikasi yang tetap ada.</p>

<p>Bosan mengendarai master slider setiap kali Anda berpindah aplikasi? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adalah €14,99 satu kali untuk Mac App Store — dalam kotak pasir, tanpa driver, tanpa DMG — dan pada akhirnya memberikan volume yang diingat pada setiap aplikasi.</p>`,
  },
};
