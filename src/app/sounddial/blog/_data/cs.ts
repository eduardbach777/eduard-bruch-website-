import type { ArticleSet } from "./index";

export const csArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Audio for Podcasting: Control What You Hear While Recording",
    description: "Recording a podcast while monitoring levels, hearing your guest, and managing notifications — all competing for one volume slider. Here's a better setup.",
    date: "2026-03-05",
    readTime: "5 min čtení",
    content: `
<p>You're recording a podcast on your Mac. You need to hear your guest (via Zoom, Riverside, or SquadCast) clearly. You need to monitor your DAW's recording levels. You need Slack muted so no pings end up in the recording. And you need system notification sounds completely silenced — a macOS "ding" in the middle of an interview is unusable audio.</p>

<p>macOS gives you one volume slider for all of this. It's not enough.</p>

<h2>The podcasting audio challenge on Mac</h2>

<p>During a podcast recording session, you typically have:</p>
<ul>
  <li><strong>Communication app</strong> (Zoom, Riverside, SquadCast) — guest audio, needs to be clear</li>
  <li><strong>DAW / recording app</strong> (Logic, GarageBand, Audacity, Hindenburg) — monitoring your own levels</li>
  <li><strong>Notification sources</strong> (Slack, Mail, Calendar, Messages) — must be completely silent during recording</li>
  <li><strong>Browser</strong> — might have show notes, research tabs, or a timer running</li>
</ul>

<p>All of these at the same volume is chaos. Your guest is competing with system dings. A Slack notification could ruin a take. And if you need to adjust your guest's volume, changing the system volume also changes your monitoring levels.</p>

<h2>The typical workaround</h2>

<p>Most podcasters use a combination of:</p>
<ul>
  <li>Focus mode (Do Not Disturb) to suppress notifications</li>
  <li>Manually quitting Slack, Mail, and other noisy apps before recording</li>
  <li>Adjusting the communication app's internal volume for the guest</li>
</ul>

<p>This works, but it's error-prone. Forget to enable DND and a notification ruins your take. Forget to quit Slack and a call comes in. And you still can't independently control your guest's volume versus your monitoring levels.</p>

<h2>Per-app audio for podcasting</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you build a clean recording environment by controlling each app independently:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial podcasting setup — guest audio, monitoring, and notifications at independent levels" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Recording profile</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — clear guest audio</li>
  <li><strong>Logic / GarageBand:</strong> 60% — comfortable monitoring without fatigue</li>
  <li><strong>Slack:</strong> muted — zero notification sounds</li>
  <li><strong>Mail:</strong> muted</li>
  <li><strong>Messages:</strong> muted</li>
  <li><strong>Calendar:</strong> muted</li>
  <li><strong>Browser:</strong> muted — no surprise auto-play</li>
</ul>

<p>Save this as a "Recording" profile. Before hitting record, apply the profile with one click. Every notification source is silenced, your guest is at full volume, and your monitoring is at a comfortable level.</p>

<h3>Editing profile</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — full monitoring for editing</li>
  <li><strong>Spotify:</strong> muted — no reference confusion</li>
  <li><strong>Slack:</strong> 20% — subtle notifications during breaks</li>
  <li><strong>Browser:</strong> 40% — for show notes and research</li>
</ul>

<p>Two profiles, two clicks, two completely different audio environments. No manually quitting and reopening apps. No forgetting to re-enable notifications after recording.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Why Is My Mac So Loud at Full Volume? How to Get Finer Control",
    description: "MacBook Pro speakers are great — until they're blasting. If even moderate volume settings feel too loud, here's how to get more precise audio control.",
    date: "2026-03-08",
    readTime: "4 min čtení",
    content: `
<p>Apple's newer MacBook Pro models (14" and 16") have remarkably powerful speakers for a laptop. So powerful that moderate volume levels can be genuinely loud — especially in a quiet room, late at night, or with headphones. The gap between "comfortable" and "too much" is sometimes just one or two volume steps.</p>

<h2>Why the volume steps feel too coarse</h2>

<p>macOS has <strong>16 volume steps</strong> via the keyboard. Each step is about 6.25% of the total range. On powerful speakers or sensitive headphones, a single step can represent a significant perceived volume change — going from "perfect" to "too loud" with one tap of the volume key.</p>

<h2>Built-in fix: quarter-step volume</h2>

<p>Hold <strong>Option + Shift</strong> and press volume up/down. Each press adjusts by one quarter of a normal step, giving you <strong>64 levels</strong> instead of 16. This 4x finer control makes it much easier to find the exact right volume, especially with powerful speakers or headphones.</p>

<p>This is the single most useful Mac audio trick that most people don't know about.</p>

<h2>The deeper problem: one slider for everything</h2>

<p>Even with 64 levels, you still have one slider controlling every app. If you set the volume low enough for comfortable notification sounds, your music might be too quiet. If you set it for music, a notification ping might make you jump.</p>

<p>The real issue is that different audio sources need different volumes. Notifications should be subtle. Music should be present. Calls should be clear. Browser video should be moderate. One slider can't serve all of these well.</p>

<h2>Per-app volume for precise control</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives each app its own volume slider with <strong>1% increments</strong> from 0% to 200%. That's 200 levels of precision per app, compared to macOS's 16 (or 64 with the modifier) system-wide steps.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% precision on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Set your system volume to a moderate base level (50-60%), then use SoundDial to fine-tune each app:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — comfortable background level</li>
  <li><strong>Slack:</strong> 12% — subtle notification ping</li>
  <li><strong>Zoom:</strong> 85% — clear call audio without being overwhelming</li>
  <li><strong>Safari:</strong> 45% — moderate video playback</li>
</ul>

<p>This way, no single audio source is ever "too loud." Each one is tuned to its ideal level independently. A Slack ping at 12% is barely noticeable, while your Zoom call at 85% is crystal clear — all at the same system volume setting.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Slack Huddle Volume Issues on Mac: Too Quiet, Too Loud, or Fighting Your Music",
    description: "Slack huddles compete with your music and notifications for the same volume. Here's how to control huddle audio independently from everything else on Mac.",
    date: "2026-03-10",
    readTime: "5 min čtení",
    content: `
<p>Slack huddles are convenient — you click a button and you're in a voice call without scheduling a meeting. But the audio is a mess. The huddle is at the same volume as your Spotify. Slack notification sounds ping at the same level as the call. And when someone shares music or a screen with audio in the huddle, it's either inaudible or deafening.</p>

<p>The problem isn't Slack. It's macOS. Everything runs through one volume slider, so huddle audio, notification sounds, music, and browser audio are all fighting for the same space.</p>

<h2>Slack's internal audio controls</h2>

<p>Slack has limited audio controls:</p>
<ul>
  <li><strong>Notification preferences:</strong> Slack → Settings → Notifications → Sound & appearance. You can change the notification sound or disable specific sounds, but you can't set notification volume independently from huddle volume.</li>
  <li><strong>Huddle volume:</strong> During a huddle, there's no separate volume slider for the call versus Slack's other sounds. Everything in Slack is one audio stream to macOS.</li>
  <li><strong>Input/output device:</strong> Slack → Settings → Audio & Video lets you select mic and speaker devices, but not volume levels per feature.</li>
</ul>

<h2>The three Slack audio problems</h2>

<h3>1. Huddle too quiet relative to music</h3>
<p>Your music is at a comfortable level. You join a huddle. Your coworker's voice is at the same volume as your music — you can't distinguish words clearly. Turning up the system volume makes the music too loud.</p>

<h3>2. Notification sounds during huddles</h3>
<p>You're in a huddle discussion. Every Slack message that comes in pings at the same volume as the call. In a busy workspace with active channels, the constant pinging makes the huddle unusable.</p>

<h3>3. Huddle too loud for background listening</h3>
<p>Sometimes you join a huddle to passively listen while working. You want it at background level — quiet enough to not distract, loud enough to hear if someone says your name. macOS won't let you set Slack to 20% while keeping your browser at 60%.</p>

<h2>The fix: control Slack's volume independently</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives Slack its own volume slider, separate from every other app. Since Slack's huddle audio and notification sounds are part of the same app, the slider controls both — but that's actually what you want most of the time.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling Slack volume independently during a huddle while music plays at a different level" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Huddle-optimized setup</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (clear huddle audio, notifications are loud but you're actively in Slack)</li>
  <li><strong>Spotify:</strong> 15% (barely-there background, doesn't compete with voices)</li>
  <li><strong>Browser:</strong> muted (no surprise tab audio)</li>
</ul>

<h3>Passive huddle setup</h3>
<ul>
  <li><strong>Slack:</strong> 30% (background listening level)</li>
  <li><strong>Spotify:</strong> 40% (primary audio is your music)</li>
  <li><strong>Browser:</strong> 50% (normal working level)</li>
</ul>

<p>Save each as a profile. When a huddle starts, apply the right profile with one click. Or use <strong>auto-ducking</strong> — when the huddle activates your microphone, SoundDial automatically lowers everything except Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Jak nastavit výchozí hlasitost pro nové aplikace na Macu",
    description: "Nové aplikace se ve výchozím nastavení spouštějí na plnou hlasitost. Zde je návod, jak zajistit, aby každá nová aplikace startovala na příjemné úrovni — abyste nebyli ničím zaskočeni.",
    date: "2026-03-12",
    readTime: "3 min čtení",
    content: `
<p>Nainstalujete si novou aplikaci. Spustí se poprvé. Okamžitě přehraje zvuk — úvodní znělku, upozornění, výukové video — na plnou systémovou hlasitost. Nečekali jste to. Máte na uších sluchátka. V uších vám zvoní.</p>

<p>macOS nezná pojem „výchozí hlasitost pro nové aplikace“, protože macOS nemá hlasitost nastavitelnou pro jednotlivé aplikace. Každá aplikace používá systémovou hlasitost, a ta je taková, na jakou jste ji naposledy nastavili. Nové aplikace nedostávají žádné zvláštní zacházení — prostě hrají na stejné úrovni jako všechno ostatní.</p>

<h2>Proč je to problém</h2>

<p>Když aplikaci spustíte poprvé, nemáte ponětí, jak hlasitá bude. Některé aplikace přehrají zvuk okamžitě (úvodní tutoriály, zvuky upozornění, uvítací videa). Pokud je vaše systémová hlasitost na 80 %, protože jste poslouchali hudbu, zvuk nové aplikace bude také na 80 % — což může být na neočekávaný zdroj zvuku mnohem víc, než je příjemné.</p>

<p>Obzvlášť nepříjemné je to u:</p>
<ul>
  <li>komunikačních aplikací (Slack, Teams), které při spuštění přehrají zvuk</li>
  <li>aplikací s výukovými videi při prvním spuštění</li>
  <li>her, které okamžitě spustí hudbu na úvodní obrazovce</li>
  <li>webových aplikací, které automaticky přehrávají obsah</li>
</ul>

<h2>Řešení: výchozí hlasitost pro nové aplikace</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> nabízí <strong>nastavitelnou výchozí hlasitost</strong> pro nové aplikace. V nastavení určíte, na jaké úrovni hlasitosti mají nově detekované aplikace startovat — třeba na 70 %. Když aplikace poprvé spustí zvuk, SoundDial ji nastaví na 70 % místo 100 %.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Nastavení výchozí hlasitosti v SoundDial — nové aplikace startují na nastavené úrovni místo plného výkonu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>To znamená:</p>
<ul>
  <li>žádné překvapivé zvuky na plnou hlasitost od nově nainstalovaných aplikací</li>
  <li>každá nová aplikace startuje na příjemné, předvídatelné úrovni</li>
  <li>hlasitost pak můžete podle potřeby zvýšit nebo snížit oproti výchozí hodnotě</li>
  <li>jakmile ji upravíte, funkce <strong>paměť hlasitosti</strong> si zapamatuje úroveň dané aplikace pro příští spuštění</li>
</ul>

<p>Je to drobná funkce, ale řeší skutečně otravný každodenní problém — „překvapivý nálet nové aplikace“, který dřív nebo později zaskočí každého.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> — jednorázová platba 14,99 €, žádné předplatné, macOS 14.2 a novější.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac Startup Sound Too Loud? How to Disable or Lower It",
    description: "The Mac startup chime blasts at full volume every time you restart — especially awkward in meetings and quiet rooms. Here's how to silence or control it.",
    date: "2026-03-15",
    readTime: "4 min čtení",
    content: `
<p>You restart your Mac in a quiet office. The meeting room is dead silent. Then — <em>BONG</em> — the startup chime blasts at full volume. Everyone looks at you. The chime is iconic, but it's also uncontrollable and often embarrassingly loud.</p>

<h2>How to disable the startup sound</h2>

<p>macOS lets you turn off the startup chime entirely:</p>

<ol>
  <li>Go to <strong>System Settings → Sound</strong></li>
  <li>Find <strong>"Play sound on startup"</strong></li>
  <li>Uncheck it</li>
</ol>

<p>Done. Your Mac will start silently from now on. No Terminal commands needed — this setting has been available since macOS Big Sur.</p>

<h3>Terminal method (if you prefer)</h3>
<p>You can also disable it via Terminal:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>To re-enable:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Can you lower the startup sound instead of disabling it?</h2>

<p>Not directly. The startup chime plays at a fixed volume that's determined by the system volume at the time of shutdown. If your Mac was at 80% volume when you shut it down, the chime plays at roughly 80%. If it was at 20%, the chime is quieter.</p>

<p><strong>Workaround:</strong> Before restarting your Mac, lower the system volume to 10-20%. The startup chime will play at that lower level. Not ideal — it requires remembering — but it works if you want the chime at a reasonable volume rather than silenced entirely.</p>

<h2>The broader Mac sound control problem</h2>

<p>The startup chime is just one example of macOS's limited audio control. System sounds, notification sounds, and app audio are all mixed together with minimal independent control. If you find yourself regularly adjusting volume to manage different audio sources throughout the day, per-app volume control solves the broader problem.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives every app on your Mac its own volume slider. Set notification apps low, music at a comfortable level, and calls at full volume — all independently. Save configurations as profiles and switch with one click.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for managing all Mac audio sources independently" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Cisco Webex Volume Too Low on Mac? How to Fix It",
    description: "Webex calls are barely audible on your Mac. Here's every fix — from Webex audio settings to boosting call volume past 100% with a per-app mixer.",
    date: "2026-03-18",
    readTime: "5 min čtení",
    content: `
<p>Webex is one of the most used video conferencing tools in corporate environments — and one of the most complained about for audio quality on Mac. Low call volume, muffled voices, and audio that seems quieter than Zoom or Teams at the same system volume. If you can barely hear your Webex calls, you're not alone.</p>

<h2>1. Check Webex audio settings</h2>

<p>During a Webex meeting, click the audio menu (speaker icon or the three dots → Audio Settings):</p>
<ul>
  <li>Make sure the correct <strong>Speaker</strong> device is selected</li>
  <li>Drag the speaker volume slider to maximum</li>
  <li>Click "Test" to play a test tone and verify the output</li>
  <li>Check if "Music Mode" is enabled — disable it unless you're specifically presenting music</li>
  <li>Check noise removal settings — "Remove Background Noise" on aggressive mode can reduce perceived voice volume</li>
</ul>

<h2>2. Check macOS output</h2>

<p>System Settings → Sound → Output. Verify the correct device is selected and the volume is at maximum. After a macOS update or device switch, Webex might be using an unexpected output.</p>

<h2>3. Bluetooth codec issue</h2>

<p>Using AirPods or Bluetooth headphones? Webex activating your mic forces the AAC→SCO codec switch, reducing audio quality and volume. Use a separate microphone (built-in Mac mic or USB) and keep Bluetooth headphones as output only.</p>

<h2>4. Webex-specific audio processing</h2>

<p>Webex has aggressive audio processing that can reduce the apparent volume of call participants. Try these Webex settings:</p>
<ul>
  <li>Set noise removal to "Low" instead of "High"</li>
  <li>Disable "Optimize for my voice" if enabled</li>
  <li>Try switching from "Computer Audio" to a specific device</li>
</ul>

<h2>5. The IT/admin problem</h2>

<p>In corporate environments, Webex is often managed by IT with specific audio policies. Some settings may be locked or pre-configured. If basic fixes don't work, check with your IT department about Webex audio policies. Some organizations restrict maximum audio levels or enforce specific audio processing settings.</p>

<h2>6. Boost Webex past 100%</h2>

<p>If settings are maxed and participants are still too quiet, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you boost Webex to <strong>200%</strong>. This amplifies the call audio beyond Webex's built-in maximum — useful when a participant has a bad mic or when Webex's audio processing reduces the signal too much.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Cisco Webex call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial also helps during back-to-back Webex meetings: use auto-ducking to automatically lower your background music when each meeting starts, and restore it during the breaks. Save a "Meetings" volume profile to instantly set your preferred audio balance for the workday.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Jak na Macu poslouchat dvě věci najednou a nezešílet",
    description: "Hudba a podcast. Přednáška a doplňkové video. Hovor a hudba na pozadí. macOS vás nutí volit jednu hlasitost pro obojí — zde je návod, jak je vyvážit.",
    date: "2026-03-20",
    readTime: "4 min čtení",
    content: `
<p>Chcete poslouchat dva zdroje zvuku najednou. Hudbu během hovoru. Podcast při sledování tutoriálu. Zvuky na pozadí při studiu. Dvě věci, dvě různé ideální hlasitosti. macOS vám ale dává jen jeden posuvník pro obojí.</p>

<p>Toto je základní zvukové omezení macOS: všechny aplikace sdílejí jednu hlasitost. Nemůžete říct „tuhle na 30 %, tamtu na 80 %“. Buď je všechno na jedné úrovni, nebo nic.</p>

<h2>Kdy skutečně potřebujete dva zdroje zvuku</h2>

<p>Tohle není výjimečná situace. Je to způsob, jakým většina lidí svůj počítač skutečně používá:</p>

<ul>
  <li><strong>Hudba + videohovor</strong> — nejběžnější případ. Hudba na pozadí během schůzky na Zoomu, ale dost tichá na to, abyste slyšeli kolegy.</li>
  <li><strong>Přednáška + doplňkové materiály</strong> — student sleduje nahranou přednášku a občas si pro kontext pustí tutoriál na YouTube.</li>
  <li><strong>Podcast + zvuky okolí</strong> — posloucháte podcast, zatímco na pozadí tiše hraje aplikace s bílým šumem nebo zvuky deště.</li>
  <li><strong>Dvě karty v prohlížeči</strong> — školicí video v jedné kartě a ukázka v druhé, každá na jiné hlasitosti.</li>
  <li><strong>Hra + hlasový chat</strong> — zvuk hry kvůli atmosféře, Discord kvůli komunikaci.</li>
</ul>

<p>V každém z těchto případů je jeden zdroj „hlavní“ (hlasitější, důležitější) a druhý „vedlejší“ (tišší, podpůrný). Ideální poměr je pro každou kombinaci jiný a navíc se v průběhu dne mění.</p>

<h2>Omezení macOS</h2>

<p>macOS má jeden posuvník hlasitosti. Stisknete klávesu hlasitosti a změní se úplně všechno stejně. Pokud nastavíte hlasitost pro pohodlný poslech podcastu, aplikace se zvuky deště bude na stejné úrovni — buď příliš hlasitá (rušivá), nebo ji musíte upravit přímo v ní (pokud vůbec má vlastní ovládání hlasitosti).</p>

<p>Některé aplikace mají interní posuvníky hlasitosti (Spotify, VLC), ale většina ne. A i když je mají, přepínání mezi aplikacemi kvůli úpravě dvou samostatných ovládacích prvků hlasitosti je nešikovné a pomalé.</p>

<h2>Řešení: hlasitost pro jednotlivé aplikace v jednom panelu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> zobrazí všechny aplikace v jednom panelu v menu baru s nezávislými posuvníky hlasitosti. Oba zdroje zvuku vedle sebe, každý se svou vlastní úrovní. Upravíte jeden, aniž byste se dotkli druhého.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial zobrazující dva zdroje zvuku na různých úrovních hlasitosti na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Příklady nastavení:</p>

<p><strong>Hudba + hovor na Zoomu:</strong></p>
<ul>
  <li>Zoom: 100 % | Spotify: 20 %</li>
</ul>

<p><strong>Podcast + zvuky deště:</strong></p>
<ul>
  <li>Podcastová aplikace: 70 % | Aplikace se zvuky deště: 15 %</li>
</ul>

<p><strong>Přednáška + tutoriál na YouTube:</strong></p>
<ul>
  <li>Zoom (přednáška): 90 % | Chrome (YouTube): 40 %</li>
</ul>

<p>Každá kombinace vyžaduje jiné vyvážení. Ty, které používáte pravidelně, si uložte jako <strong>hlasitostní profily</strong> a přepínejte je jedním kliknutím. Scénář hudba + hovor navíc řeší automatické ztišování — jakmile začne hovor, hudba se sama ztiší na nastavenou úroveň, aniž byste se čehokoli museli dotknout.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> — jednorázová platba 14,99 €, žádné předplatné, macOS 14.2 a novější.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Jak sledovat filmy na Macu, aniž byste probudili celý dům",
    description: "Dialogy jsou neslyšitelné, pak explozí otřesou zdmi. Zde je návod, jak si na Macu zkrotit zvuk filmu pro noční sledování — aniž byste přišli o jediné slovo.",
    date: "2026-03-22",
    readTime: "5 min čtení",
    content: `
<p>Je jedna hodina ráno. Sledujete film na MacBooku v posteli. Postavy šeptají — zesílíte hlasitost. Pak začne honička aut a najednou to slyší celý byt. Vrhnete se po klávese hlasitosti. Tenhle cyklus se opakuje celé dvě hodiny.</p>

<p>Problém se jmenuje <strong>dynamický rozsah</strong> — rozdíl mezi nejtiššími a nejhlasitějšími okamžiky filmu. V kině s výkonným ozvučením vytváří tento rozsah pohlcující zážitek. Na MacBooku o půlnoci z něj vzniká neustálý boj mezi „neslyším dialogy“ a „probudím sousedy“.</p>

<h2>Proč jsou filmy hlasitější než hudba nebo podcasty</h2>

<p>Hudba se obvykle masteruje s komprimovaným dynamickým rozsahem — rozdíl mezi nejtiššími a nejhlasitějšími pasážemi je poměrně malý (zhruba 10–15 dB). Podcasty jsou komprimované ještě víc. Filmy, zejména akční, mohou mít dynamický rozsah <strong>30–40 dB</strong> — tiché pasáže jsou šeptem tiché a hlasité pasáže jsou navržené tak, aby otřásly sedadly v kině.</p>

<p>Když nastavíte hlasitost MacBooku tak, abyste slyšeli dialogy, akční scény budou z hlediska akustického tlaku až stokrát hlasitější. Neexistuje jedna příjemná systémová hlasitost, která by fungovala pro obojí.</p>

<h2>Řešení 1: Použijte noční režim streamovací služby</h2>

<p>Některé streamovací služby mají přímo pro tento účel funkci komprese dynamického rozsahu:</p>
<ul>
  <li><strong>Netflix:</strong> během přehrávání hledejte v nastavení zvuku přepínač „Ztišit hlasité zvuky“</li>
  <li><strong>Apple TV+:</strong> Systémové nastavení → Přístupnost → „Ztišit hlasité zvuky“</li>
  <li><strong>Amazon Prime:</strong> u podporovaných titulů funkce „Zvýraznění dialogů“</li>
  <li><strong>Disney+:</strong> v současnosti bez obdobné funkce</li>
</ul>

<p>Tyto funkce komprimují dynamický rozsah tak, aby tiché pasáže byly hlasitější a hlasité pasáže tišší. Výsledkem je vyrovnanější zvuk, který funguje i při nízké hlasitosti.</p>

<h2>Řešení 2: Použijte sluchátka</h2>

<p>Sluchátka vyřeší část s „probuzením celého domu“ — zvuk slyšíte jen vy. Problém s dynamickým rozsahem ale nevyřeší. Cyklus dialog–exploze se odehrává dál, jen ve vašich uších. Tady pomáhá ovládání hlasitosti podle jednotlivých aplikací: nastavíte hlasitost streamovací aplikace přesně pro poslech ve sluchátkách.</p>

<h2>Řešení 3: Nastavte streamovací aplikaci na konkrétní hlasitost</h2>

<p>Skutečný problém nočního sledování spočívá v tom, že streamovací aplikace, zvuky upozornění a veškerý další zvuk jsou na stejné systémové hlasitosti. Pípnutí ze Slacku ve dvě ráno na stejné hlasitosti jako filmové dialogy dokáže pořádně vylekat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní vytvořit dokonalé noční nastavení:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Noční nastavení SoundDial pro sledování filmů — streamovací aplikace na mírné hlasitosti, upozornění ztlumená" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Profil pro noční sledování filmů</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / prohlížeč:</strong> 40–50 % — příjemná úroveň dialogů bez ohlušujících akčních scén</li>
  <li><strong>Slack:</strong> ztlumeno — žádná překvapivá pípnutí</li>
  <li><strong>Mail:</strong> ztlumeno</li>
  <li><strong>iMessage:</strong> ztlumeno</li>
  <li><strong>Systémové zvuky:</strong> ztlumeno</li>
</ul>

<p>Uložte si to jako profil „Noc“. Když si pustíte večerní film, aplikujte profil jedním kliknutím. Všechny zdroje upozornění jsou ztlumené a streamovací aplikace je na kontrolované hlasitosti. Až skončíte, přepněte zpátky na svůj denní profil.</p>

<p>Pro maximální efekt to zkombinujte s funkcí streamovací služby „Ztišit hlasité zvuky“: služba komprimuje dynamický rozsah a SoundDial se postará o to, aby na vašem Macu nic jiného nevydávalo zvuk.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> — jednorázová platba 14,99 €, žádné předplatné, macOS 14.2 a novější.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac Volume Resets After Sleep? How to Keep Your Audio Settings",
    description: "Every time your Mac wakes from sleep, the volume is wrong — reset to max, dropped to zero, or switched to the wrong output. Here's why and how to fix it.",
    date: "2026-03-25",
    readTime: "5 min čtení",
    content: `
<p>You close your MacBook lid. You open it later. The volume is different. Maybe it's at maximum when you had it at 40%. Maybe it switched from headphones to speakers. Maybe it's at zero. It was fine before sleep — now it's wrong.</p>

<p>Volume resetting after sleep is a persistent macOS bug that appears in various forms across different macOS versions. Here's what causes it and how to deal with it.</p>

<h2>Why it happens</h2>

<h3>1. Audio output device changed during sleep</h3>
<p>If you had Bluetooth headphones connected before sleep and they disconnect while the Mac is asleep (battery died, moved out of range), macOS switches to the built-in speakers when it wakes. Since macOS remembers volume per device, the volume changes to whatever the speakers were last set to — which might be very different from your headphone volume.</p>

<h3>2. Core Audio daemon restart</h3>
<p>macOS's audio daemon (coreaudiod) sometimes restarts during sleep/wake cycles. When it restarts, it may initialize with default volume levels instead of your last settings. This is a system bug that Apple has partially fixed in various updates but never fully eliminated.</p>

<h3>3. HDMI/DisplayPort reconnection</h3>
<p>If you use an external display via HDMI or DisplayPort, closing and opening the lid can cause the display to disconnect and reconnect. Some displays are also audio output devices, and macOS may switch to or from the display's speakers during this process, changing the volume in the process.</p>

<h3>4. Bluetooth re-pairing</h3>
<p>When Bluetooth devices reconnect after sleep, the volume negotiation can result in a different level than what you had before. This is especially common with third-party Bluetooth headphones (less so with AirPods, which Apple has optimized).</p>

<h2>Fixes</h2>

<h3>Prevent Bluetooth disconnection during sleep</h3>
<p>System Settings → Bluetooth → Advanced (or click "i" on your device). Some settings control whether Bluetooth stays active during sleep. Keeping the connection active prevents the disconnect/reconnect cycle that resets volume.</p>

<h3>Disable auto-switching for AirPods</h3>
<p>System Settings → Bluetooth → click "i" next to AirPods → "Connect to This Mac" → set to "When Last Connected to This Mac." This prevents AirPods from auto-connecting from another device during sleep.</p>

<h3>Set a consistent output device</h3>
<p>After waking from sleep, hold Option and click the Sound icon in the menu bar. Select your preferred output device. Do this consistently and macOS should eventually "stick" to your preference.</p>

<h3>Reset NVRAM (Intel Macs)</h3>
<p>If volume resets are chronic, reset NVRAM: shut down → power on holding Option+Command+P+R for 20 seconds. This clears stored audio settings and can fix persistent volume issues.</p>

<h2>Protect your audio balance with SoundDial</h2>

<p>Even if the system volume resets after sleep, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> protects your <em>per-app</em> volume balance. Its <strong>volume memory</strong> feature saves each app's volume independently and restores it after wake, restart, or app relaunch.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial preserving per-app volume levels after Mac sleep and wake cycles" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>So even if macOS resets the system volume to 80% after sleep, your per-app balance stays intact:</p>
<ul>
  <li>Spotify still at 30% of system volume</li>
  <li>Zoom still at 100%</li>
  <li>Slack still muted</li>
</ul>

<p>You might need to fix the system volume (one adjustment), but you don't need to re-balance all your apps (which would be six or seven adjustments). And with <strong>volume profiles</strong>, even the full recovery is one click.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac Audio for Music Production: Control DAW and Communication Separately",
    description: "Using Logic Pro or Ableton while on a Discord call? Here's how to hear your DAW at full fidelity while keeping voice chat at a comfortable level.",
    date: "2026-03-28",
    readTime: "5 min čtení",
    content: `
<p>You're producing music in Logic Pro (or Ableton, or FL Studio). You're also on Discord with a collaborator. The problem: your DAW output and Discord are fighting for the same volume level. Turn up Logic to hear your mix clearly and Discord is blasting in your ears. Turn down for Discord and your mix is too quiet to evaluate properly.</p>

<p>This is a real problem for music producers on Mac because monitoring volume directly affects mixing decisions. If your DAW is too quiet because Discord is competing, you'll mix louder than intended. If Discord is drowning out details, you'll miss issues in your mix.</p>

<h2>Why this matters for production</h2>

<p>Music production requires <strong>accurate monitoring levels</strong>. You need to hear your DAW at a consistent, calibrated volume to make reliable mixing decisions. Communication apps, notifications, and other audio sources interfere with this — but you often need them running simultaneously for remote collaboration.</p>

<p>Professional studios solve this with separate monitor paths and talkback systems. On a laptop, you need software.</p>

<h2>The DAW internal approach</h2>

<p>You could use your DAW's internal monitoring level to keep it at a consistent output, then adjust Discord's volume internally. But:</p>
<ul>
  <li>Discord's output volume slider is imprecise and limited to 0-100%</li>
  <li>You still can't prevent system sounds and notifications from interfering at unexpected levels</li>
  <li>If you need to reference a track in Spotify or YouTube, those are at system volume too</li>
</ul>

<h2>Per-app volume for production</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you set exact volumes for every app independently:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separating DAW output from Discord and reference tracks on macOS for music production" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Production setup</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — your primary monitoring level</li>
  <li><strong>Discord / voice chat:</strong> 40-60% — audible but clearly secondary to your mix</li>
  <li><strong>Spotify / reference tracks:</strong> 80% — match your DAW level for accurate A/B comparisons</li>
  <li><strong>Slack / notifications:</strong> muted — zero interference during production</li>
  <li><strong>Safari / Chrome:</strong> 50% — for watching tutorials without blowing out your ears</li>
</ul>

<h3>Save it as a "Production" profile</h3>
<p>Save this configuration and apply it with one click when you sit down to produce. When you're done and switch to casual use, apply your "Normal" profile. No re-adjusting eight apps.</p>

<h3>Auto-ducking for remote sessions</h3>
<p>If you're on a call with a collaborator, SoundDial's auto-ducking can lower non-communication apps when the mic is active. But for production, you might want to <em>disable</em> auto-ducking — you need your DAW at consistent levels regardless of whether you're talking. The toggle is one click in settings.</p>

<h2>A note about latency</h2>

<p>SoundDial uses Apple's Core Audio Tap API for volume control. The processing adds negligible latency — imperceptible for monitoring purposes. If you're recording and monitoring through your DAW with direct monitoring enabled, SoundDial doesn't interfere with your DAW's audio path. It only adjusts the output level that reaches your speakers/headphones.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Apple Music Volume Too Low on Mac? How to Fix and Boost It",
    description: "Apple Music at max volume on your Mac but still too quiet? Check Sound Check, EQ settings, and learn how to boost Apple Music past 100%.",
    date: "2026-03-30",
    readTime: "5 min čtení",
    content: `
<p>Apple Music is at full volume. Your Mac is at full volume. A song you know should be loud is barely audible. Meanwhile, switching to Spotify — same song, same volume — it's noticeably louder. What's going on?</p>

<p>Apple Music has several settings that can reduce playback volume, and they're not obvious. Let's go through each one.</p>

<h2>1. Check Sound Check</h2>

<p>Apple Music has a feature called <strong>Sound Check</strong> that normalizes the volume of all tracks so they play at roughly the same perceived loudness. This prevents jarring volume jumps between songs, but it does so by <em>reducing</em> the volume of louder tracks — making everything quieter overall.</p>

<p>To check: Open the Music app → Settings (⌘,) → Playback → <strong>Sound Check</strong>.</p>

<p>If Sound Check is enabled, try disabling it. Songs that were being reduced to match quieter tracks will now play at their original mastered level — which is often significantly louder.</p>

<h2>2. Check the EQ setting</h2>

<p>Apple Music has a built-in equalizer. Some EQ presets reduce overall volume to prevent clipping when boosting specific frequencies.</p>

<p>Check: Music app → Settings → Playback → <strong>EQ</strong>. If an EQ preset is selected (especially "Spoken Word," "Late Night," or "Small Speakers"), try setting it to "Off" and see if volume improves.</p>

<p>The "Late Night" EQ in particular compresses dynamic range — making quiet parts louder but loud parts quieter. This can make everything feel "flatter" and lower in volume.</p>

<h2>3. Check Lossless Audio settings</h2>

<p>If you have Apple Music Lossless enabled (Settings → Audio Quality), the higher-quality stream may actually be at a lower perceived volume than the standard AAC stream for some tracks. This is because lossless doesn't have the same mastering adjustments that Apple applies to the AAC versions.</p>

<p>Try temporarily switching to AAC quality to see if the volume difference is noticeable.</p>

<h2>4. Headphone Safety</h2>

<p>System Settings → Sound → Headphone Safety. If "Reduce Loud Audio" is on, macOS is capping your headphone volume globally — affecting Apple Music along with everything else.</p>

<h2>5. Boost Apple Music past 100%</h2>

<p>If you've checked everything and Apple Music is still too quiet — whether it's Sound Check being aggressive, a quiet album, or your MacBook speakers simply not being loud enough — a per-app volume boost solves it.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you boost Apple Music to <strong>200%</strong>. The audio signal is amplified at the system level before it reaches your speakers or headphones. Only Apple Music gets louder — Zoom, Slack, and your browser stay at their current levels.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Apple Music volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>This is also useful for the opposite problem: if Apple Music is too loud relative to your Zoom call, lower Apple Music to 25% in SoundDial while keeping Zoom at 100%. Per-app control means you never have to compromise one app's volume for another's.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Free Volume Mixer for Mac: What You Actually Get (and What You Don't)",
    description: "Looking for a free per-app volume mixer for Mac? Here's an honest breakdown of what free options offer, what they're missing, and when it's worth paying.",
    date: "2026-04-03",
    readTime: "6 min čtení",
    content: `
<p>If you search for "free volume mixer for Mac," you'll find one main result: <strong>Background Music</strong>. It's the only notable free, open-source per-app volume control app for macOS. Let's look at what you actually get — and what you give up.</p>

<h2>Background Music: the free option</h2>

<p>Background Music is a free, open-source app hosted on GitHub. It gives you:</p>

<ul>
  <li><strong>Per-app volume sliders</strong> — basic volume control for each running app</li>
  <li><strong>Auto-pause music</strong> — pauses your music player when another app plays audio, resumes when it stops</li>
  <li><strong>Default output device setting</strong> — override which device apps use by default</li>
</ul>

<h3>What Background Music doesn't have</h3>
<ul>
  <li><strong>No volume boost past 100%</strong> — sliders go from 0% to 100% only. Can't amplify quiet apps.</li>
  <li><strong>No volume profiles</strong> — can't save and switch between configurations</li>
  <li><strong>No auto-ducking</strong> — auto-pause is different from auto-duck. Pause stops music entirely; ducking lowers it to a comfortable background level. Many people prefer quiet background music during calls over total silence.</li>
  <li><strong>No volume memory</strong> — doesn't remember per-app volumes between restarts</li>
  <li><strong>No keyboard shortcuts</strong> — no hotkey to toggle the mixer or mute all apps</li>
  <li><strong>No output device switching</strong> — can't switch speakers/headphones from the same panel</li>
</ul>

<h3>The reliability problem</h3>
<p>Background Music's biggest issue isn't features — it's stability. It works by installing a <strong>virtual audio device driver</strong>, and this driver breaks with macOS updates. After nearly every major macOS release (Ventura, Sonoma, Sequoia, Tahoe), users report:</p>
<ul>
  <li>Virtual device fails to install</li>
  <li>Audio crackling and glitches</li>
  <li>Apps not being detected</li>
  <li>No audio output at all</li>
  <li>App crashes on launch</li>
</ul>

<p>Since it's a volunteer-maintained open-source project, fixes aren't always timely. You might be without per-app volume for weeks after a macOS update.</p>

<h2>Other "free" options</h2>

<h3>eqMac (free tier)</h3>
<p>eqMac's free tier provides a system-wide equalizer but not per-app volume control. The per-app features require eqMac Pro (subscription). The free version is useful if you primarily need EQ, not volume mixing.</p>

<h3>macOS built-in</h3>
<p>macOS has no built-in volume mixer. The closest is the alert volume slider in System Settings → Sound, which only affects system sounds — not app audio.</p>

<h2>When free is enough</h2>

<p>Background Music might be fine if:</p>
<ul>
  <li>You only need basic per-app volume (0-100%)</li>
  <li>You don't need profiles, auto-ducking, or volume boost</li>
  <li>You're comfortable fixing it when macOS updates break it</li>
  <li>You're okay with a virtual audio device in your audio chain</li>
</ul>

<h2>When it's worth paying</h2>

<p>A paid volume mixer is worth it if you need:</p>
<ul>
  <li><strong>Reliability</strong> — works after macOS updates without waiting for volunteer fixes</li>
  <li><strong>Volume boost to 200%</strong> — amplify quiet apps beyond their built-in maximum</li>
  <li><strong>Profiles</strong> — save configurations and switch between Meeting/Focus/Gaming with one click</li>
  <li><strong>Auto-ducking</strong> — automatic volume reduction during calls, not just auto-pause</li>
  <li><strong>No system drivers</strong> — works with Apple's native API, no virtual audio devices that can break</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> costs €14.99 — one time, not a subscription. For context, that's less than two months of a Spotify subscription, for a tool you'll use every day. It's less than half the price of SoundSource ($39), and includes features (profiles, auto-ducking) that SoundSource doesn't have.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — reliable per-app volume mixer for Mac with profiles, auto-ducking, and 200% boost" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, sandboxed, no system drivers. €14.99 one-time, no subscription, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Jak na Macu vyvážit hlasitost hudby a hlasového chatu",
    description: "Hudba přehlušuje Discord. Nebo je hovor pod Spotify slabě slyšet. macOS vám neumožní je vyvážit — zde je návod, jak nastavit ideální poměr.",
    date: "2026-04-05",
    readTime: "4 min čtení",
    content: `
<p>Chcete poslouchat hudbu při povídání s přáteli na Discordu (nebo Zoomu, nebo FaceTime). Hudba má být slyšet, ale nemá přehlušovat. Hlasový chat má být jasný a dominantní. Zdánlivě jednoduchý požadavek. macOS ho ale znemožňuje.</p>

<p>Když všechno ovládá jedna systémová hlasitost, jste v pasti: zesílíte kvůli hovoru a hudba je příliš hlasitá. Ztlumíte kvůli hudbě a přátele neslyšíte. Systém nenabízí žádný vestavěný způsob, jak nastavit tyto dvě věci na různých úrovních.</p>

<h2>Provizorní řešení: hlasitost přímo v aplikaci</h2>

<p>Spotify i Discord mají vlastní interní posuvníky hlasitosti. V teorii byste mohli snížit posuvník Spotify na 30 % a ponechat výstup Discordu na 100 %. Vznikne tak poměr 30/100.</p>

<p>V praxi ale:</p>
<ul>
  <li>musíte přepnout do každé aplikace zvlášť, abyste upravili její posuvník</li>
  <li>poměr se změní, jakmile upravíte systémovou hlasitost (obě se škálují proporcionálně)</li>
  <li>ne každá aplikace má interní posuvník hlasitosti</li>
  <li>je to nepřesné — malý posuvník ve Spotify bez zobrazeného procenta</li>
  <li>když Spotify zavřete a znovu otevřete, posuvník se může resetovat</li>
</ul>

<h2>Skutečné řešení: nezávislá hlasitost pro každou aplikaci</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> zobrazí Spotify i Discord v jednom panelu s nezávislými posuvníky hlasitosti. Nastavíte poměr, jaký chcete, a necháte to tak:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial vyvažující Spotify a Discord na různých úrovních hlasitosti na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zlatý poměr pro hudbu a hlasový chat</h3>
<p>Na základě toho, jak to většina lidí používá:</p>
<ul>
  <li><strong>Hlasový chat na 85–100 %</strong> — vždy jasně slyšitelný, dominantní ve zvukovém mixu</li>
  <li><strong>Hudba na 20–35 %</strong> — je slyšet, ale nikdy nesoupeří s hlasy</li>
</ul>

<p>Přesný poměr závisí na hudbě, vašich sluchátkách a osobních preferencích. Podstatné je, že si ideální vyvážení najdete jednou a pak si ho udržíte — místo neustálého dolaďování.</p>

<h3>Uložte si to jako profil</h3>
<p>Uložte si vyvážení hudby a hlasového chatu jako profil. Profil „Hraní“: Discord 100 %, hra 50 %, Spotify 20 %. Profil „Pohoda“: Discord 70 %, Spotify 60 %. Mezi profily přepínáte jedním kliknutím.</p>

<h3>Automatické ztišování pro hovory</h3>
<p>Pokud posloucháte hudbu a přijde hovor, automatické ztišování v SoundDial samo sníží hudbu na vámi nastavenou úroveň. Když hovor skončí, hudba se zase zesílí. Bez jediného dotyku.</p>

<p>S problémem vyvážení zvuku se dřív nebo později setká každý uživatel Macu, jakmile mu hudba a hovor běží současně. Řešením je jednorázová platba 14,99 €.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> — jednorázová platba 14,99 €, žádné předplatné, macOS 14.2 a novější.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac Volume Control: The Complete Guide (2026)",
    description: "Everything you need to know about controlling audio on macOS — from basic keyboard shortcuts to per-app volume, output switching, and automation.",
    date: "2026-06-12",
    readTime: "12 min čtení",
    content: `
<p>macOS gives you a volume slider and a mute button. That's the extent of Apple's built-in audio control. But your Mac actually has far more audio capabilities than the surface suggests — hidden keyboard shortcuts, per-app volume tools, output device management, and automation features that most users never discover.</p>

<p>This is the complete guide to controlling audio on your Mac. From basics to power-user features, everything in one place.</p>

<h2>Part 1: Built-in volume controls</h2>

<h3>The volume keys</h3>
<p>The volume up (F12), volume down (F11), and mute (F10) keys adjust system volume in 16 steps. Each step is roughly 6.25% of the total range. The current volume is shown as an overlay on screen.</p>

<h3>Fine-grained volume: Option + Shift</h3>
<p>Hold <strong>Option + Shift</strong> and press volume up/down. Each press adjusts by one quarter of a normal step — giving you <strong>64 volume levels</strong> instead of 16. Essential for finding the perfect headphone volume when the normal steps are too coarse.</p>

<h3>Silent volume adjustment: Shift</h3>
<p>Hold <strong>Shift</strong> and press volume up/down. The volume changes without the audible feedback "pop." Use this when adjusting volume during a call or presentation.</p>

<h3>Menu bar volume slider</h3>
<p>If the Sound icon is in your menu bar (enable it in System Settings → Control Center → Sound → Always Show in Menu Bar), clicking it shows a volume slider. This is a continuous slider, not stepped like the keyboard keys, so you can set any precise level.</p>

<h3>Control Center</h3>
<p>Click the Control Center icon (two-toggle icon) in the menu bar → click the Sound section for a volume slider and quick access to output device selection.</p>

<h2>Part 2: Output device management</h2>

<h3>Switching output devices</h3>
<p>The fastest built-in method: hold <strong>Option</strong> and click the Sound icon in the menu bar. You'll see a list of all available output and input devices. Click one to switch instantly.</p>

<p>Alternatively: System Settings → Sound → Output. Select your preferred device from the list.</p>

<h3>Bluetooth device management</h3>
<p>macOS remembers the volume level for each output device separately. When you switch from speakers (at 70%) to AirPods (at 40%), the volume adjusts to what it was last time you used that device. This can feel like the volume is "changing by itself" if you're not expecting it.</p>

<h3>Aggregate and multi-output devices</h3>
<p>For advanced setups, open Audio MIDI Setup (Applications → Utilities) to create aggregate devices (combine multiple inputs) or multi-output devices (send audio to multiple outputs simultaneously). These are primarily useful for professional audio setups, not everyday use.</p>

<h2>Part 3: Alert and notification volume</h2>

<h3>System alert volume</h3>
<p>macOS has a separate alert volume slider: System Settings → Sound → Alert volume. This controls the volume of system sounds (Funk, Tink, Bottle, etc.) independently from the main volume. However, it only affects macOS system alerts — not notification sounds from third-party apps like Slack, Discord, or Teams.</p>

<h3>Notification sound management</h3>
<p>Go to System Settings → Notifications. For each app, you can toggle "Play sound for notifications" on or off. This is binary — you can't make an app's notifications quieter, only fully on or fully off.</p>

<h3>Focus modes</h3>
<p>Focus modes (System Settings → Focus) suppress notifications from selected apps. They can silence notification sounds, but they don't affect media volume. Your music keeps playing at full volume even in Do Not Disturb.</p>

<h2>Part 4: Headphone-specific controls</h2>

<h3>Headphone Safety</h3>
<p>System Settings → Sound → Headphone Safety. "Reduce Loud Audio" limits headphone volume based on cumulative exposure. You can disable it or adjust the threshold. Only affects headphone output, not speakers.</p>

<h3>Spatial Audio</h3>
<p>For supported headphones (AirPods Pro, AirPods Max, some Beats), macOS supports Spatial Audio with head tracking. Enable it in Control Center → Sound → Spatial Audio. This affects the perceived positioning of sound but not volume.</p>

<h3>Audio balance</h3>
<p>System Settings → Accessibility → Audio → Balance. A left-right slider that adjusts the stereo balance. Make sure it's centered if one side sounds quieter than the other.</p>

<h2>Part 5: What macOS can't do (and how to fix it)</h2>

<h3>Per-app volume control</h3>
<p>macOS has one volume slider for all apps. There's no built-in way to set Spotify to 30% and Zoom to 100%. This is the single most requested audio feature in macOS, and Apple has never added it.</p>

<h3>Volume boost beyond 100%</h3>
<p>macOS's volume maxes out at 100%. If content is too quiet even at max volume, there's no built-in way to amplify further.</p>

<h3>Volume profiles</h3>
<p>There's no way to save a volume configuration (Spotify at 30%, Zoom at 100%, Slack muted) and switch between presets.</p>

<h3>Auto-ducking</h3>
<p>macOS doesn't automatically lower background audio when you join a call.</p>

<h3>Volume memory per app</h3>
<p>macOS doesn't remember per-app volume levels because per-app volume doesn't exist.</p>

<p>All five of these are available with <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — a native macOS menu bar app that adds the volume mixer Apple never built.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control, profiles, auto-ducking, and 200% boost for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Part 6: Per-app volume with SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> fills every gap listed above:</p>

<ul>
  <li><strong>Per-app volume:</strong> Every app gets its own slider, 0% to 200%</li>
  <li><strong>Per-app mute:</strong> One click to silence any app</li>
  <li><strong>Volume boost:</strong> Amplify quiet apps beyond 100%</li>
  <li><strong>Volume profiles:</strong> Save configurations and switch with one click</li>
  <li><strong>Auto-ducking:</strong> Background audio lowers during calls, restores after</li>
  <li><strong>Volume memory:</strong> Each app's volume is remembered between restarts</li>
  <li><strong>Output device switching:</strong> Change speakers/headphones from the same panel</li>
  <li><strong>Keyboard shortcuts:</strong> ⌃⌥S to toggle the mixer, ⌃⌥M to mute all</li>
</ul>

<p>It uses Apple's modern Core Audio Tap API — no system drivers, no virtual audio devices, no kernel extensions. Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> for €14.99 (one-time purchase, no subscription), Apple-reviewed and sandboxed. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "VLC Volume Too Low on Mac? How to Boost It Past 200%",
    description: "VLC at max volume but a video is still too quiet? VLC has a built-in 200% boost — plus you can go even further with a per-app volume mixer.",
    date: "2026-04-08",
    readTime: "4 min čtení",
    content: `
<p>You're watching a video in VLC. The dialog is quiet. You turn VLC's volume all the way up. You turn your Mac's volume all the way up. Still can't hear properly. The video was just recorded too quietly.</p>

<p>The good news: VLC actually has a built-in solution that most people don't know about. The even better news: you can stack it with a system-level boost for even more volume.</p>

<h2>VLC's built-in volume boost (up to 200%)</h2>

<p>VLC can go above 100% volume on its own. The volume slider in VLC's player bar maxes out at 100%, but you can increase it further:</p>

<h3>Method 1: Scroll wheel</h3>
<p>Hover your mouse over VLC's volume slider and scroll up. The slider will go past the visible 100% mark, up to 200%. You'll see the percentage displayed as you scroll.</p>

<h3>Method 2: Keyboard shortcut</h3>
<p>Press <strong>Command + Up Arrow</strong> (⌘↑) repeatedly to increase volume above 100%. Each press adds a step. <strong>Command + Down Arrow</strong> (⌘↓) to decrease.</p>

<h3>Method 3: Audio menu</h3>
<p>Go to VLC → Audio → Increase Volume. Repeat until the volume is high enough. The current level is shown in the bottom-right of the player.</p>

<p>VLC's 200% boost works by amplifying the audio signal within VLC's decoder. At extreme levels it can introduce distortion, but for genuinely quiet video files it's very effective.</p>

<h2>Beyond VLC's boost: system-level amplification</h2>

<p>If VLC at 200% still isn't loud enough — or if you want to boost VLC without affecting its internal audio settings — a system-level per-app volume mixer adds another layer of amplification.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives VLC its own volume slider from 0% to 200% at the system level. This stacks with VLC's internal boost:</p>

<ul>
  <li>VLC internal: 200% × SoundDial: 200% = effective 400% amplification</li>
  <li>VLC internal: 150% × SoundDial: 150% = effective 225% amplification</li>
</ul>

<p>This is extreme amplification and will introduce distortion on some content, but for extremely quiet source material it might be what you need.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting VLC volume at the system level on macOS for quiet video files" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>More importantly, SoundDial lets you boost VLC <strong>independently</strong>. Your music player, browser, and communication apps stay at their normal levels while only VLC gets louder. If you boost VLC to 180% in SoundDial, Spotify doesn't change. This is something VLC's built-in boost can't do — VLC's boost only affects VLC, but macOS's single system volume still ties everything else together.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Jak na Macu vypnout automatické ztišování zvuku (nebo si ho ovládat sami)",
    description: "macOS nebo vaše aplikace vám během hovorů samy ztišují hudbu, aniž byste je o to požádali. Zde je návod, jak nechtěné ztišování zastavit — nebo ho nahradit ztišováním, které máte pod kontrolou vy.",
    date: "2026-04-10",
    readTime: "5 min čtení",
    content: `
<p>Připojíte se k hovoru na Zoomu. Hudba klesne téměř k nule. Nedotkli jste se přitom žádného ovládání hlasitosti — udělalo to za vás něco jiného. Tomu se říká <strong>audio ducking (automatické ztišování)</strong>: automatické snížení hlasitosti zvuku na pozadí, když je aktivní hovor nebo jiný důležitý zdroj zvuku.</p>

<p>Někteří lidé to milují. Jiní to nesnášejí — hlavně když je ztišování příliš agresivní (hudba klesne na nulu místo příjemné úrovně na pozadí) nebo když se spustí neočekávaně.</p>

<p>Zde je návod, jak na Macu vypnout nechtěné ztišování a jak ho nahradit takovým, které funguje přesně podle vašich představ.</p>

<h2>Odkud se na Macu bere automatické ztišování</h2>

<p>macOS sám o sobě <strong>nemá</strong> vestavěnou funkci automatického ztišování. Pokud vám hudba během hovorů ztichne, způsobuje to jedna z těchto věcí:</p>

<h3>1. Zpracování zvuku v Zoomu</h3>
<p>Zoom dokáže při aktivaci snížit systémový zvuk. Zkontrolujte Zoom → Nastavení → Zvuk a vypněte volbu „Automaticky upravovat hlasitost mikrofonu“. Zkuste také snížit potlačení šumu z „Vysoké“ na „Nízké“.</p>

<h3>2. Přepínání bluetooth kodeku</h3>
<p>Když aplikace aktivuje mikrofon vašich bluetooth sluchátek, macOS přepne z kodeku AAC na kodek SCO. Ve skutečnosti to není „ztišování“ — je to změna kodeku, díky které zní všechno tišeji a v horší kvalitě. Vyřešíte to použitím samostatného mikrofonu.</p>

<h3>3. Dělá to aplikace třetí strany</h3>
<p>Některé zvukové aplikace (například Background Music) mají funkce automatické pauzy nebo automatického ztišování. Některé mediální aplikace samy sníží svou hlasitost, když detekují jiný zdroj zvuku. Zkontrolujte všechny zvukové utility, které máte nainstalované.</p>

<h3>4. Komunikační aplikace upravující zvuk</h3>
<p>Discord, Teams a další komunikační aplikace mají vlastní zpracování zvuku, které může ovlivnit vnímanou hlasitost ostatních aplikací. V nastavení zvuku každé aplikace zkontrolujte volby typu „automaticky upravovat“ a vypněte je.</p>

<h2>Jak zastavit nechtěné ztišování</h2>

<ol>
  <li><strong>Zkontrolujte nastavení zvuku v Zoomu/Teams/Discordu</strong> — vypněte automatickou úpravu hlasitosti/mikrofonu</li>
  <li><strong>Používejte pro hovory samostatný mikrofon</strong> — zabráníte tím přepínání bluetooth kodeku</li>
  <li><strong>Odinstalujte zvukové utility</strong> — Background Music, Soundflower nebo jakoukoli jinou aplikaci, která by mohla zasahovat do zvuku</li>
  <li><strong>Zkontrolujte Přístupnost v macOS</strong> — Systémové nastavení → Přístupnost → Zvuk, jestli tam není nějaké neočekávané nastavení</li>
</ol>

<h2>Nahraďte špatné ztišování dobrým</h2>

<p>Myšlenka automatického ztišování je ve skutečnosti skvělá — automaticky snížit zvuk na pozadí během hovoru, abyste všechno dobře slyšeli. Problém nastává, když je příliš agresivní (hudba spadne na nulu), nenastavitelné (nemůžete zvolit, o kolik se má hlasitost snížit) nebo se spouští z nesprávného důvodu.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> má vestavěnou funkci automatického ztišování, díky které máte vše pod kontrolou:</p>

<ul>
  <li><strong>Nastavitelná úroveň ztišení:</strong> zvolíte přesně, o kolik se má zvuk na pozadí během hovoru snížit — od 10 % (téměř ticho) po 80 % (sotva znatelné snížení). Výchozí hodnota je 30 %, díky čemuž je hudba slyšet, ale nerozptyluje.</li>
  <li><strong>Chytrá detekce:</strong> hovory rozpozná sledováním využití mikrofonu — stejný indikátor jako oranžová tečka v macOS. Funguje se Zoomem, Teams, FaceTime, Discordem, Slackem, Google Meet, Webexem i Skypem.</li>
  <li><strong>Dokonalé obnovení:</strong> jakmile hovor skončí, každá aplikace se vrátí přesně na svou předchozí hlasitost. Nic nemusíte znovu upravovat.</li>
  <li><strong>Snadné přepínání:</strong> automatické ztišování zapnete nebo vypnete v nastavení SoundDial. Když ho nechcete, vypnete ho. Když ho chcete zpátky, zapnete ho.</li>
</ul>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Nastavitelné automatické ztišování v SoundDial — přesně určíte, o kolik se zvuk na pozadí během hovoru sníží" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Rozdíl je v tomhle: místo toho, aby nějaká aplikace rozhodla, že vaše hudba má při každém hovoru spadnout na nulu, rozhodnete vy, že má klesnout třeba na 25 %. Místo ztráty kontroly ji získáváte. A místo hledání skryté funkce ve třech různých aplikacích máte jeden přepínač na jednom místě.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> — jednorázová platba 14,99 €, žádné předplatné, macOS 14.2 a novější.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Bluetooth Headphones Too Quiet on Mac? Every Fix That Works",
    description: "Your Bluetooth headphones work fine on your phone but sound quiet on Mac. Here's every cause — from codec issues to macOS volume limits — and how to fix each one.",
    date: "2026-04-12",
    readTime: "6 min čtení",
    content: `
<p>Your Bluetooth headphones are plenty loud on your phone. You connect them to your Mac — and everything is quieter. Music sounds muffled. Calls are hard to hear. You've maxed the volume but it's still not enough. What gives?</p>

<p>Bluetooth audio on Mac has several volume-reducing factors that don't exist on phones. Here's each one and how to fix it.</p>

<h2>1. Headphone Safety is capping your volume</h2>

<p>macOS has a built-in feature that limits headphone volume to protect your hearing. It measures sound exposure over time and reduces the maximum volume if it thinks you've been listening too loudly.</p>

<p>Go to <strong>System Settings → Sound → Headphone Safety</strong>. If "Reduce Loud Audio" is enabled, disable it or raise the threshold. This is the number one cause of Bluetooth headphones being quieter on Mac than on a phone.</p>

<h2>2. Bluetooth codec mismatch</h2>

<p>Your phone might connect to your headphones using a higher-quality codec (aptX, LDAC, AAC) while your Mac defaults to SBC (the basic Bluetooth codec). Different codecs have different maximum volume characteristics.</p>

<p>macOS generally uses AAC for Apple devices and SBC for third-party headphones. If your headphones support aptX or LDAC, macOS won't use them — Apple only supports AAC and SBC.</p>

<p><strong>Fix:</strong> Not much you can do about codec selection on macOS. But knowing this explains why the same headphones might sound different (and potentially quieter) on your Mac versus an Android phone using LDAC.</p>

<h2>3. Microphone activation triggers SCO</h2>

<p>When any app activates your Bluetooth headphones' microphone (Zoom, FaceTime, Siri, dictation), macOS switches from AAC to the SCO codec. SCO was designed for phone calls in 2004 — it sounds terrible and is significantly quieter.</p>

<p><strong>Fix:</strong> Use a separate microphone (built-in Mac mic or USB mic) and keep your Bluetooth headphones as output-only. In your call app's settings, set the input to your Mac's mic and the output to your headphones. This prevents the SCO switch.</p>

<h2>4. Bluetooth volume sync issue</h2>

<p>Bluetooth audio has two volume controls: one on the Mac side and one on the headphones side. They're supposed to stay synchronized, but they can drift apart — the Mac shows 100% but the headphones aren't actually at full volume.</p>

<p><strong>Fix:</strong> Disconnect the headphones (System Settings → Bluetooth → click "i" → Disconnect), wait 5 seconds, reconnect. This re-synchronizes the volume. Some headphones also have their own volume buttons — make sure those are at maximum too.</p>

<h2>5. Low-quality Bluetooth connection</h2>

<p>Distance, interference (WiFi routers, USB 3.0 devices), and obstacles between your Mac and headphones can reduce Bluetooth signal quality. When the signal is weak, macOS may reduce the audio bitrate, which can affect perceived volume and quality.</p>

<p><strong>Fix:</strong> Move closer to your Mac. Disconnect other Bluetooth devices you're not using. Move USB 3.0 hubs away from your Mac (USB 3.0 generates interference in the 2.4 GHz band that Bluetooth uses).</p>

<h2>6. The headphones themselves</h2>

<p>Some Bluetooth headphones have lower maximum volume than others. Over-ear headphones with larger drivers generally get louder than earbuds. Noise-canceling headphones may have volume limits built into their firmware.</p>

<p>Check the headphone manufacturer's app (Sony Headphones Connect, Bose Music, Sennheiser Smart Control, etc.) for volume limiting settings. Some headphones have a "safe listening" mode that caps volume.</p>

<h2>Still quiet? Boost beyond 100%</h2>

<p>If you've checked everything above and your headphones are still too quiet on Mac, you need volume amplification.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> boosts any app's volume up to <strong>200%</strong>. If Spotify through your Bluetooth headphones is too quiet, drag its slider to 160%. The audio signal is amplified before it reaches your headphones, effectively doubling the available volume for that app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting app volume for Bluetooth headphones on Mac with per-app sliders to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Per-app boosting is better than a system-wide volume boost because you can amplify only the quiet app. If your podcast is quiet but music is fine, boost the podcast app to 170% while keeping Spotify at 80%. Each app stays at the right level.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac Audio for OBS and Streaming: How to Control What Your Audience Hears",
    description: "Streaming on Mac with OBS? Your viewers hear everything at the same volume — game, music, alerts, Discord. Here's how to balance audio sources properly.",
    date: "2026-04-15",
    readTime: "7 min čtení",
    content: `
<p>You're streaming on your Mac with OBS. Your game audio is blasting. Your Discord call is running. Spotify is playing background music. Alert sounds fire when someone subscribes. Your viewers hear all of this at the same volume — a chaotic mess where Discord callouts compete with explosions and the music drowns out your commentary.</p>

<p>The core problem: macOS gives you one audio output, and OBS captures it as one combined stream. You can't tell OBS "capture the game at 40%, Discord at 80%, and Spotify at 20%" because macOS doesn't separate them.</p>

<h2>The Mac streaming audio problem</h2>

<p>On Windows, OBS can capture individual application audio natively. You add each app as a separate audio source and mix them independently inside OBS. On Mac, this isn't built-in. OBS on macOS can capture:</p>

<ul>
  <li><strong>Desktop Audio</strong> — everything playing on your Mac, combined into one stream</li>
  <li><strong>Microphone/Aux</strong> — your mic input</li>
  <li><strong>Application Audio Capture (macOS 13+)</strong> — capture a specific app's audio, but setup is manual and limited</li>
</ul>

<p>The Application Audio Capture source (added in OBS 30+) works for isolating one app, but managing five audio sources with separate levels inside OBS is complex and not every app cooperates.</p>

<h2>The simpler approach: control levels before OBS captures them</h2>

<p>Instead of trying to separate audio inside OBS, control each app's volume <em>before</em> it reaches OBS's desktop audio capture. If you lower Spotify to 20% and boost Discord to 90% at the system level, OBS's desktop audio capture picks up the already-balanced mix.</p>

<p>This is exactly what <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> does. Set each app to the level you want your viewers to hear:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial balancing game, Discord, and music audio levels for OBS streaming on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Typical streaming audio setup</h3>
<ul>
  <li><strong>Game:</strong> 50% — present but not overpowering your voice</li>
  <li><strong>Discord / voice chat:</strong> 80% — clear callouts from your team</li>
  <li><strong>Spotify / music:</strong> 15% — subtle background vibe</li>
  <li><strong>Stream alerts (browser):</strong> 40% — audible but not jarring</li>
  <li><strong>Slack / notifications:</strong> muted — viewers don't need to hear your DMs</li>
</ul>

<h3>Save it as a "Streaming" profile</h3>
<p>Save this configuration as a volume profile in SoundDial. Before you go live, apply the "Streaming" profile with one click. Every app jumps to its streaming-optimized level. When you're done streaming, switch back to your "Normal" or "Gaming" profile.</p>

<h2>What you hear vs. what viewers hear</h2>

<p>With SoundDial adjusting per-app volume at the system level, both you and your viewers hear the same balanced mix. This is simpler than trying to maintain separate mixes (one for you, one for the stream) — which requires virtual audio devices and complex routing that's fragile on Mac.</p>

<p>If you need a completely separate mix for your stream versus your headphones (e.g., you want to hear Discord louder than your viewers do), you'll need a more complex routing setup with virtual audio devices. But for most streamers, a single well-balanced mix — controlled easily from the menu bar — is exactly what's needed.</p>

<h2>Why per-app control beats OBS-only mixing</h2>

<ul>
  <li><strong>Instant adjustments:</strong> Mid-stream, a viewer says the game is too loud. Click the menu bar, drag one slider. Done. No pausing, no opening OBS settings.</li>
  <li><strong>Works outside OBS:</strong> Your balanced audio setup works even when you're not streaming. Same profiles, same convenience.</li>
  <li><strong>No virtual audio devices:</strong> SoundDial uses Apple's native Audio Tap API — no Soundflower, no BlackHole, no drivers that break on macOS updates.</li>
</ul>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Jak naučit Mac pamatovat si hlasitost jednotlivých aplikací",
    description: "Pokaždé, když restartujete Spotify nebo znovu spustíte Zoom, musíte znovu nastavit hlasitost. Zde je návod, jak přimět macOS, aby si automaticky pamatoval úroveň hlasitosti každé aplikace.",
    date: "2026-04-18",
    readTime: "4 min čtení",
    content: `
<p>Strávíte pět minut doladěním hlasitosti do dokonalosti. Spotify na 30 %, Zoom na 100 %, Slack na 15 %. Pak restartujete Mac. Nebo Slack spadne a znovu se spustí. Nebo zavřete Spotify a později ho znovu otevřete. Každá aplikace se vrátí na výchozí hlasitost. Musíte vše znovu nastavit. Znovu.</p>

<p>macOS si pamatuje systémovou hlasitost napříč restarty. Hlasitost jednotlivých aplikací si ale nepamatuje — protože macOS žádné ovládání hlasitosti po aplikacích vůbec nemá. Není si co pamatovat.</p>

<h2>Proč si aplikace nepamatují vlastní hlasitost</h2>

<p>Některé aplikace (například Spotify a VLC) mají vlastní posuvníky hlasitosti, které se ukládají mezi relacemi. Většina aplikací — prohlížeče, komunikační nástroje, systémové nástroje — ale žádné vlastní ovládání hlasitosti nemá. A i aplikace, které si vnitřní hlasitost ukládají, si pamatují jen pozici svého posuvníku, ne svou hlasitost vůči ostatním aplikacím.</p>

<p>Ve skutečnosti chcete, aby si to pamatoval <em>systém</em>: „Spotify by mělo být vždy na 30 % systémové hlasitosti.“ macOS tento koncept nepodporuje.</p>

<h2>Paměť hlasitosti v SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> má funkci <strong>Paměť hlasitosti</strong>. Po zapnutí ukládá hlasitost každé aplikace podle jejího identifikátoru balíčku (bundle ID). Když se aplikace ukončí a znovu spustí — ať už ji restartujete vy, spadne sama, nebo restartujete celý Mac — SoundDial automaticky obnoví uloženou hlasitost.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume memory — automatically remembers and restores per-app volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Jak to funguje</h3>
<ol>
  <li>V nastavení SoundDial zapněte „Pamatovat hlasitost jednotlivých aplikací“</li>
  <li>Nastavte každé aplikaci preferovanou hlasitost</li>
  <li>SoundDial úroveň automaticky uloží</li>
  <li>Při dalším spuštění aplikace se hlasitost obnoví přesně tam, kde byla</li>
</ol>

<p>Žádné ruční ukládání. Žádné opětovné nastavování. Poprvé nastavíte hlasitost — a naposledy.</p>

<h3>Co si aplikace pamatuje</h3>
<ul>
  <li><strong>Úroveň hlasitosti</strong> — přesné procento (0 % až 200 %)</li>
  <li><strong>Stav ztlumení</strong> — pokud jste aplikaci ztlumili, zůstane ztlumená i po opětovném spuštění</li>
  <li><strong>Pro každou aplikaci zvlášť</strong> — hlasitost každé aplikace se ukládá nezávisle podle bundle ID</li>
</ul>

<h3>Nové aplikace dostanou výchozí hlasitost</h3>
<p>Když se aplikace spustí poprvé (takovou, kterou SoundDial ještě nezná), dostane nastavitelnou výchozí hlasitost. Tuto výchozí hodnotu si můžete nastavit v nastavení SoundDial — takže nové aplikace začínají na 80 % (nebo jaké hodnotě chcete) místo toho, aby vás potenciálně ohlušily na 100 %.</p>

<h2>Paměť hlasitosti + profily = nastavíte jednou a zapomenete</h2>

<p>Paměť hlasitosti se stará o každodenní provoz: aplikace si drží svou hlasitost napříč restarty. Profily řeší přepínání podle situace: režim „Schůzka“, režim „Soustředění“, režim „Hraní“ — aplikujete jedním kliknutím a každá aplikace okamžitě naskočí na hlasitost odpovídající dané situaci.</p>

<p>Dohromady téměř nikdy ručně neupravujete posuvník hlasitosti. Aplikace si pamatuje svou poslední úroveň, a když změníte kontext, profil nastaví vše najednou.</p>

<p>K dispozici na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — schváleno Applem, jednorázová platba 14,99 €, žádné předplatné, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Podcast Volume Too Low on Mac? How to Make It Louder",
    description: "Some podcasts are whisper-quiet on Mac even at max volume. Here's why — and how to boost podcast audio past 100% without affecting other apps.",
    date: "2026-04-20",
    readTime: "5 min čtení",
    content: `
<p>You're listening to a podcast on your Mac. The host sounds fine, but the guest — recording from a laptop mic in their kitchen — is barely audible. You crank the volume to 100%. The host is now too loud, but the guest is still quiet. There's no way to win because the problem is in the recording, not your Mac.</p>

<p>Podcast audio quality varies wildly. Professional shows are mastered at consistent levels. But interviews, indie podcasts, and live recordings often have guests at -20 dB or lower — significantly quieter than the host or the intro music.</p>

<h2>Why some podcasts are so quiet</h2>

<ul>
  <li><strong>Guest mic quality:</strong> One host has a professional setup, the guest is on AirPods. The level difference can be 15+ dB.</li>
  <li><strong>No post-production:</strong> Professionally produced podcasts compress and normalize levels. Many don't.</li>
  <li><strong>Podcast apps don't normalize:</strong> Apple Podcasts and Spotify apply minimal or no loudness normalization to podcast content (unlike music).</li>
  <li><strong>Dynamic range:</strong> Some podcast producers intentionally maintain high dynamic range for "natural" sound — which means quiet parts are very quiet.</li>
</ul>

<h2>In-app fixes</h2>

<h3>Apple Podcasts</h3>
<p>Apple Podcasts has no volume normalization or boost feature. What the podcast delivers is what you get. The in-app volume control in older versions was removed — it now uses only the system volume.</p>

<h3>Spotify</h3>
<p>Spotify's "Normalize volume" setting (Settings → Playback) can help with volume consistency between different podcasts, but its effect on within-episode dynamics is limited. Try setting it to "Loud" for maximum normalization.</p>

<h3>Overcast (browser)</h3>
<p>If you use Overcast (via web at overcast.fm), it has a "Voice Boost" feature that significantly amplifies and compresses podcast audio, making quiet voices louder. This is one of the best built-in solutions — but it only works within Overcast.</p>

<h2>System-level fix: boost podcast apps past 100%</h2>

<p>The universal fix is amplifying your podcast app beyond macOS's 100% limit. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives every app a volume slider up to <strong>200%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Apple Podcasts volume to 180% on Mac for quiet podcast episodes" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Set Apple Podcasts or your podcast app to 160-180% while keeping Spotify music at 40% and Slack at 15%. The podcast gets louder without making everything else painfully loud. When you switch back to music, just drop the podcast app back to normal — or let SoundDial's volume memory remember it automatically.</p>

<p>This per-app approach is better than a system-wide volume boost because:</p>
<ul>
  <li>Only the quiet podcast app gets louder</li>
  <li>Music stays at your preferred level</li>
  <li>Call audio stays at your preferred level</li>
  <li>Notification sounds don't suddenly become deafening</li>
</ul>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Mac Audio Setup for Online Classes and Lectures",
    description: "Watching a lecture while taking notes, Googling references, and chatting classmates — all at different volumes. Here's how to manage student audio on Mac.",
    date: "2026-04-22",
    readTime: "5 min čtení",
    content: `
<p>You're a student attending an online lecture on Zoom. You have a YouTube tutorial open in another tab for reference. Your classmates are chatting on Discord. Spotify is playing lo-fi beats in the background. Your Mac treats all of these as one volume. Turn down the lo-fi and you can't hear your professor. Turn up the lecture and the Discord pings shatter your concentration.</p>

<p>macOS has one volume slider for everything. For students juggling multiple audio sources, this is a constant friction point.</p>

<h2>The typical student audio stack</h2>

<ul>
  <li><strong>Lecture platform</strong> (Zoom, Teams, Google Meet, Webex) — needs to be crystal clear, always audible</li>
  <li><strong>Reference material</strong> (YouTube tutorials, recorded lectures) — moderate volume, needs to be pausable/adjustable</li>
  <li><strong>Study music</strong> (Spotify, Apple Music) — low background level, shouldn't compete with the lecture</li>
  <li><strong>Chat</strong> (Discord, iMessage, Slack) — subtle notification sounds, not disruptive</li>
  <li><strong>Browser tabs</strong> — occasional auto-playing content that needs to be silenced instantly</li>
</ul>

<h2>The macOS limitation</h2>

<p>With one system volume, you're forced to compromise. Set it high enough for a quiet professor's mic, and Spotify is too loud. Set it for comfortable music, and the lecture is inaudible. Mute Spotify and you lose the focus benefit of background music. There's no comfortable balance because every app is locked to the same level.</p>

<h2>Setting up per-app audio for studying</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives each app its own volume slider, so you can build the ideal study audio setup:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial student setup — lecture at full volume, study music low, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Lecture profile</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100% — never miss a word</li>
  <li><strong>Spotify:</strong> 15% — barely-there background ambiance</li>
  <li><strong>Discord:</strong> 10% — subtle notifications only</li>
  <li><strong>Browser:</strong> 40% — for reference videos when needed</li>
  <li><strong>iMessage:</strong> muted — check between classes</li>
</ul>

<h3>Self-study profile</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — motivating study music</li>
  <li><strong>Browser:</strong> 70% — tutorial videos at a clear level</li>
  <li><strong>Discord:</strong> 20% — available for study group</li>
  <li><strong>Everything else:</strong> muted</li>
</ul>

<h3>Break profile</h3>
<ul>
  <li><strong>Everything:</strong> 60-80% — relax between classes</li>
</ul>

<p>Save each as a volume profile and switch between them with one click as your day progresses. When a lecture starts, apply "Lecture" — auto-ducking will handle the rest, automatically lowering your music when the professor speaks through your mic.</p>

<h2>Why this matters for focus</h2>

<p>Studies consistently show that having the right audio environment improves concentration and retention. The wrong mix — music too loud, notifications too frequent, lecture too quiet — creates cognitive load that has nothing to do with the material you're studying. Getting audio right once, saving it as a profile, and never thinking about it again removes a constant source of distraction.</p>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Mac Sound Not Working After Update? Complete Fix Guide",
    description: "You updated macOS and now your sound is gone, crackling, or stuck at the wrong volume. Here's every fix to get your Mac audio working again.",
    date: "2026-04-25",
    readTime: "7 min čtení",
    content: `
<p>You updated macOS. Everything seemed fine — until you noticed there's no sound. Or sound is crackling. Or the volume is stuck. Or your audio output device is gone. Post-update audio issues happen with nearly every macOS release, and they range from mildly annoying to completely silent.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Here's a systematic guide to fixing Mac audio after a macOS update, covering every known issue and solution.</p>

<h2>Step 1: Check the obvious</h2>

<h3>Is it muted?</h3>
<p>Press the volume-up key. Check if the volume indicator appears on screen. Sometimes updates reset the system volume to zero or enable mute.</p>

<h3>Is the right output device selected?</h3>
<p>Go to System Settings → Sound → Output. After an update, macOS sometimes switches to an unexpected output device — a connected monitor's speakers, a Bluetooth device that's not connected, or the built-in speakers when you want external ones. Select the correct device.</p>

<h3>Is Headphone Safety limiting volume?</h3>
<p>Updates sometimes reset Headphone Safety to its default (enabled). Check System Settings → Sound → Headphone Safety and disable "Reduce Loud Audio" if it was turned on by the update.</p>

<h2>Step 2: Restart Core Audio</h2>

<p>The audio daemon (coreaudiod) often gets into a bad state after an update. Restarting it is the single most effective fix.</p>

<p>Open Terminal and run:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Audio will cut out briefly and restart. Test if sound is working now. If this fixes it, the issue was a stale audio daemon state — common after updates.</p>

<h2>Step 3: Reset NVRAM/PRAM</h2>

<p>For Intel Macs: shut down completely, then power on while holding <strong>Option + Command + P + R</strong> for about 20 seconds. This resets the NVRAM, which stores volume settings, startup disk selection, and other low-level preferences.</p>

<p>For Apple Silicon Macs (M1/M2/M3/M4): NVRAM resets automatically when needed. A full restart (not just sleep/wake) is usually sufficient.</p>

<h2>Step 4: Check for third-party audio driver conflicts</h2>

<p>macOS updates frequently break third-party audio drivers and kernel extensions. If you have any of these installed, they might be causing the issue:</p>

<ul>
  <li><strong>Soundflower</strong> — discontinued, often conflicts with newer macOS</li>
  <li><strong>BlackHole</strong> — virtual audio device, may need updating after macOS updates</li>
  <li><strong>Loopback</strong> — may need a new version for the updated macOS</li>
  <li><strong>Background Music</strong> — installs a virtual audio device that frequently breaks on updates</li>
  <li><strong>Audio interface drivers</strong> — Focusrite, Universal Audio, etc. check for updated drivers</li>
</ul>

<p><strong>Fix:</strong> Remove or update the conflicting software. For virtual audio devices, check if the audio device installed by the app appears in System Settings → Sound → Output — if it does and it's selected, switch to your real speakers. Then update or uninstall the third-party app.</p>

<h2>Step 5: Safe Mode boot</h2>

<p>Boot into Safe Mode to determine if the issue is caused by a startup item or third-party extension:</p>

<ul>
  <li><strong>Apple Silicon:</strong> Shut down → hold the power button until "Loading startup options" appears → select your startup disk → hold Shift → click "Continue in Safe Mode"</li>
  <li><strong>Intel:</strong> Restart → hold Shift during boot until you see the login window</li>
</ul>

<p>If audio works in Safe Mode, a third-party kernel extension or login item is the cause. Investigate recently installed software.</p>

<h2>Step 6: Create a new user account</h2>

<p>If the issue persists, create a temporary new user account (System Settings → Users & Groups → Add User). Log into the new account and test audio. If sound works in the new account, the issue is with your user profile — a corrupted preference file or audio configuration.</p>

<h2>Preventing future issues with SoundDial</h2>

<p>One advantage of <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> over other audio tools: it doesn't install a system audio driver. It uses Apple's native Core Audio Tap API, which means it works cleanly with macOS updates without the conflicts that plague virtual audio device apps.</p>

<p>If you've been using Background Music or Soundflower and they broke after an update, SoundDial is a replacement that won't have the same problem. Per-app volume control, volume boost to 200%, profiles, auto-ducking — all without a kernel extension or virtual audio device.</p>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Jak ztlumit všechny aplikace na Macu najednou (a dokonale je zase zapnout)",
    description: "Potřebujete okamžité ticho? Klávesa ztlumení umlčí vše — ale po zrušení ztlumení se vaše pečlivě vyladěné hlasitosti resetují. Zde je lepší způsob, jak na Macu ztlumit a obnovit zvuk.",
    date: "2026-04-28",
    readTime: "4 min čtení",
    content: `
<p>Někdo vejde do místnosti. Neočekávaně zavolá váš šéf. Klient na hovoru sdílí obrazovku a vaše hudba se najednou ozývá z jeho reproduktorů. Potřebujete okamžité ticho. Hned teď.</p>

<p>Stisknete klávesu ztlumení. Vše ztichne. Krize odvrácena.</p>

<p>Pak okamžik pomine. Klávesu stisknete znovu. Vše se vrátí zpět — ale na úrovni systémové hlasitosti, která si nepamatuje, že Spotify bylo na 30 %, Zoom na 100 % a Slack na 15 %. Tyto jednotlivé úrovně? Pryč. Musíte vše ručně nastavit znovu.</p>

<h2>Systémová klávesa ztlumení: tupý nástroj</h2>

<p>Klávesa ztlumení na Macu (F10 nebo klávesa s přeškrtnutým reproduktorem) ztlumí <strong>systémový zvukový výstup</strong>. Všechny aplikace zmlknou najednou. Zrušení ztlumení obnoví systémovou hlasitost tam, kde byla — ale protože macOS má jen jeden posuvník hlasitosti, žádné úrovně jednotlivých aplikací si nepamatuje ani neobnovuje.</p>

<p>To je v pořádku, pokud používáte jen jednu aplikaci najednou. Problém nastává, když máte šest aplikací pečlivě vyladěných na různé úrovně a potřebujete je všechny ztišit a pak zase obnovit.</p>

<h2>Chytřejší ztlumení: ztlumení všech aplikací zvlášť</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> má klávesovou zkratku „Ztlumit vše“: <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Když ji stisknete:</p>
<ol>
  <li>Každá aplikace se ztlumí zvlášť (stav hlasitosti každé aplikace se uloží)</li>
  <li>Okamžité ticho — stejně jako u klávesy ztlumení</li>
</ol>

<p>Když ji stisknete znovu:</p>
<ol>
  <li>Všechny aplikace se odztlumí</li>
  <li>Každá aplikace se vrátí <strong>přesně</strong> na hlasitost, kterou měla před ztlumením</li>
  <li>Spotify se vrátí na 30 %, Zoom na 100 %, Slack na 15 % — dokonale obnoveno</li>
</ol>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mute-all shortcut — Control+Option+M to mute and unmute all apps with volume restore" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Rozdíl oproti systémové klávese ztlumení:</p>
<ul>
  <li><strong>Systémové ztlumení:</strong> ztlumí výstup → odztlumení obnoví jednu systémovou hlasitost → vyvážení jednotlivých aplikací neexistuje</li>
  <li><strong>Ztlumení všech v SoundDial:</strong> ztlumí každou aplikaci zvlášť → odztlumení obnoví individuální hlasitost každé aplikace → vaše vyvážení zůstane zachováno</li>
</ul>

<h2>Kdy se to hodí</h2>

<ul>
  <li><strong>Sdílení obrazovky:</strong> Sdílíte obrazovku a potřebujete ztišit Mac dřív, než druhá strana uslyší vaši hudbu. ⌃⌥M → ticho → vyřídíte, co potřebujete → ⌃⌥M → hudba je zpět přesně na správné úrovni.</li>
  <li><strong>Nečekané vyrušení:</strong> Někdo vejde do místnosti, potřebujete okamžité ticho. Jedna zkratka, žádná myš, žádné hledání v panelu nabídek.</li>
  <li><strong>Rychlý telefonát:</strong> Zazvoní vám stolní telefon. Ztišíte Mac, vyřídíte hovor, po skončení odztlumíte. Vše se vrátí zpět.</li>
</ul>

<p>V kombinaci se zkratkou <strong>⌃⌥S</strong> (přepnutí vyskakovacího panelu SoundDial) můžete celý zvuk ovládat čistě z klávesnice — otevřít mixpult, upravit úrovně, zavřít ho a ztlumit/odztlumit vše bez dotyku myši.</p>

<p>K dispozici na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — jednorázová platba 14,99 €, žádné předplatné, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Google Meet Volume Too Low on Mac? How to Fix It",
    description: "Voices on Google Meet are barely audible even at max volume. Here's why Meet runs through Chrome, what that means for audio, and how to boost it.",
    date: "2026-05-01",
    readTime: "5 min čtení",
    content: `
<p>Google Meet doesn't have a native Mac app — it runs inside your browser. This means Meet's audio is part of Chrome's (or Safari's) audio stream, and any volume issues are tangled up with how your browser handles audio. Let's untangle it.</p>

<h2>1. Check Meet's own audio settings</h2>

<p>During a Meet call, click the three dots menu (⋮) → Settings → Audio. Make sure the correct speaker device is selected. Meet sometimes defaults to an unexpected device, especially if you recently connected or disconnected audio hardware.</p>

<h2>2. Check your browser's tab volume</h2>

<p>In Chrome: right-click the Meet tab → make sure "Mute site" is NOT selected. A muted site produces no audio regardless of other settings.</p>

<p>In Safari: click the speaker icon on the tab to make sure it's not muted.</p>

<h2>3. Check system output</h2>

<p>System Settings → Sound → Output. Verify the right device is selected and the volume is at maximum. Also check Headphone Safety if you're using headphones.</p>

<h2>4. The Chrome audio problem</h2>

<p>Google Meet runs as a Chrome tab, and Chrome's audio output can be lower than dedicated apps. Chrome processes audio through its own renderer, which has its own volume ceiling. If Chrome's overall audio is low, Meet is low — even if macOS volume is at 100%.</p>

<p>There's no built-in way to boost Chrome's audio past its maximum. macOS treats Chrome as one app with one volume level, and that level maxes out at 100%.</p>

<h2>5. Bluetooth codec issue</h2>

<p>If you're using AirPods or Bluetooth headphones, Google Meet activating your microphone forces the Bluetooth codec switch from AAC to SCO. This reduces audio quality and volume significantly.</p>

<p><strong>Fix:</strong> In Meet's audio settings, select your Mac's built-in microphone as the input device while keeping Bluetooth headphones as the output. This prevents the codec switch and maintains high-quality audio.</p>

<h2>6. Boost Google Meet (Chrome) past 100%</h2>

<p>If Meet is still too quiet after checking everything, you need to amplify Chrome's audio beyond what macOS allows.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives Chrome its own volume slider that goes up to <strong>200%</strong>. Since Google Meet runs inside Chrome, boosting Chrome boosts Meet. Drag the slider to 150% or 180% and the call audio is amplified in real-time.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Google Meet (Chrome) volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>This also works with Safari if you use Meet in Safari. SoundDial controls each browser independently — boost Safari for Meet while keeping Chrome at normal volume for everything else.</p>

<p>And with auto-ducking, your background music automatically lowers when a Meet call starts (when your mic activates) and restores when the call ends.</p>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Jak nastavit hlasitost upozornění na Macu odděleně od hlasitosti médií",
    description: "macOS má skrytý posuvník hlasitosti upozornění, ten ale pokrývá jen systémové zvuky. Zde je návod, jak na Macu skutečně oddělit hlasitost oznámení od hlasitosti médií.",
    date: "2026-05-02",
    readTime: "5 min čtení",
    content: `
<p>Vaše hudba hraje na perfektní úrovni. Pak se ozve zvuk upozornění macOS — efekt „Funk“ nebo „Tink“ — a je bolestivě hlasitý ve srovnání s hudbou. Nebo naopak: vaše upozornění jsou neslyšitelná, protože máte systémovou hlasitost nastavenou nízko kvůli tiché hudbě na pozadí.</p>

<p>Chcete dva oddělené ovládací prvky hlasitosti: jeden pro média (hudbu, hovory, video) a jeden pro upozornění a oznámení. macOS to částečně podporuje, ale úplné řešení vyžaduje nástroj třetí strany.</p>

<h2>Vestavěná hlasitost upozornění v macOS</h2>

<p>macOS skutečně má oddělenou hlasitost upozornění. Přejděte do <strong>Nastavení systému → Zvuk</strong> a najděte posuvník <strong>„Hlasitost upozornění“</strong>. Ten řídí hlasitost systémových zvuků macOS — zvukových signálů chyb, vysypání Koše, zvuku závěrky při snímku obrazovky — nezávisle na hlavní systémové hlasitosti.</p>

<p>Můžete si také vybrat, jaký zvuk upozornění se použije, a zda se zvukové efekty mají přehrávat přes zvolené výstupní zařízení, nebo přes vestavěné reproduktory.</p>

<h3>Co hlasitost upozornění ovládá</h3>
<ul>
  <li>Systémové zvuky upozornění macOS (Funk, Tink, Bottle atd.)</li>
  <li>Zvuky Finderu (Koš, dokončení kopírování souboru)</li>
  <li>Některé vestavěné zvuky aplikací</li>
</ul>

<h3>Co neovládá</h3>
<ul>
  <li>Zvuky oznámení Slacku</li>
  <li>Zvuky oznámení Discordu</li>
  <li>Zvuky Teams/Zoom</li>
  <li>Zvuky oznámení Mailu</li>
  <li>Zvuky oznámení jakýchkoli aplikací třetích stran</li>
  <li>Zvuky oznámení prohlížeče</li>
</ul>

<p>Aplikace třetích stran přehrávají svá oznámení přes vlastní zvukový engine — jsou brána jako běžný zvuk aplikace, ne jako systémová upozornění. Posuvník hlasitosti upozornění na ně nemá žádný vliv. To znamená, že aplikace s nejotravnějšími zvuky oznámení (Slack, Discord, Teams) jsou právě ty, na které hlasitost upozornění macOS nedosáhne.</p>

<h2>Skutečné řešení: hlasitost podle aplikace pro aplikace s oznámeními</h2>

<p>Chcete-li opravdu oddělit hlasitost oznámení od hlasitosti médií, potřebujete ovládání hlasitosti po jednotlivých aplikacích. Nastavte Slack na 15 %, Discord na 20 % a Mail na 10 % — zatímco Spotify necháte na 50 % a prohlížeč na 60 %.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dává každé aplikaci vlastní posuvník hlasitosti. Aplikace s množstvím oznámení můžete nastavit na jemnou úroveň, která je znatelná, ale nerušivá, zatímco mediální aplikace zůstanou na příjemné poslechové hlasitosti.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separating notification app volume from media app volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Příklad nastavení</h3>
<p><strong>Mediální aplikace:</strong></p>
<ul>
  <li>Spotify: 50 %</li>
  <li>Safari/Chrome: 60 %</li>
  <li>QuickTime/VLC: 70 %</li>
</ul>

<p><strong>Aplikace s oznámeními:</strong></p>
<ul>
  <li>Slack: 15 %</li>
  <li>Discord: 20 %</li>
  <li>Mail: 10 %</li>
  <li>Kalendář: 25 %</li>
</ul>

<p><strong>Komunikační aplikace:</strong></p>
<ul>
  <li>Zoom/Teams: 100 %</li>
  <li>FaceTime: 100 %</li>
</ul>

<p>Uložte si to jako profil a aplikujte jedním kliknutím. Oddělení hlasitosti oznámení od hlasitosti médií, které macOS nativně neposkytuje — hotovo za necelou minutu.</p>

<p>K dispozici na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — schváleno Applem, jednorázová platba 14,99 €, žádné předplatné, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "FaceTime Call Volume Too Low on Mac? How to Fix It",
    description: "FaceTime audio is barely audible on your Mac even at full volume. Here's every fix — from sound settings to boosting FaceTime past 100%.",
    date: "2026-05-04",
    readTime: "5 min čtení",
    content: `
<p>FaceTime calls on your iPhone are fine. But on your Mac, the other person sounds like they're whispering from three rooms away. Volume is maxed. You've checked everything you can think of. Still too quiet.</p>

<p>Low FaceTime volume on Mac is a common issue, and it has several possible causes. Let's walk through each one.</p>

<h2>1. Check the output device</h2>

<p>Go to System Settings → Sound → Output. Make sure the correct device is selected. If you recently connected or disconnected headphones, a display, or Bluetooth devices, macOS might have auto-switched to an unexpected output — like a monitor with barely-functional built-in speakers.</p>

<h2>2. Check FaceTime's audio settings</h2>

<p>During a FaceTime call, click the menu bar and check FaceTime → Video → select the correct output device under Audio Output. FaceTime can sometimes use a different output device than the system default, especially after device switching.</p>

<h2>3. Disable AirPods auto-switching</h2>

<p>If you have AirPods paired with multiple Apple devices, they might auto-switch away from your Mac mid-call. Check System Settings → Bluetooth → click "i" next to your AirPods → "Connect to This Mac" → set to "When Last Connected to This Mac" instead of "Automatically" to prevent mid-call switching.</p>

<h2>4. Bluetooth codec issue</h2>

<p>Using AirPods or Bluetooth headphones with FaceTime triggers the AAC-to-SCO codec switch (because FaceTime uses your microphone). SCO reduces audio quality and volume. Use a separate microphone (built-in Mac mic or USB) to keep AirPods in high-quality AAC mode.</p>

<h2>5. Headphone safety limiting volume</h2>

<p>System Settings → Sound → Headphone Safety. If "Reduce Loud Audio" is on, macOS is capping your headphone volume. Disable it or raise the threshold.</p>

<h2>6. Reset Core Audio</h2>

<p>Open Terminal and run:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>This restarts the audio daemon and can fix stuck low-volume states. Rejoin the FaceTime call after audio restarts.</p>

<h2>7. Boost FaceTime volume past 100%</h2>

<p>If all settings are correct and FaceTime is still too quiet — perhaps the other person has a weak microphone — you need to amplify beyond macOS's limit.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you boost FaceTime's volume up to <strong>200%</strong>. Open the menu bar panel, find FaceTime, and drag its slider past 100%. The call audio is amplified in real-time without affecting any other app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting FaceTime call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial also helps the reverse: if FaceTime's ringtone or notification sounds are too loud during focus time, lower FaceTime to 20% or mute it while keeping your music playing. One click to mute, one click to unmute.</p>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, sandboxed, one-time purchase, no subscription.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac Volume Keyboard Shortcuts You Probably Don't Know",
    description: "Beyond the basic volume keys — fine-grained control, muting specific apps, and per-app volume shortcuts. Every Mac audio keyboard trick explained.",
    date: "2026-05-06",
    readTime: "5 min čtení",
    content: `
<p>Every Mac user knows the volume up/down/mute keys. Press them and the system volume changes. But macOS has several hidden keyboard tricks for audio control that most people never discover — plus third-party shortcuts that make volume management dramatically faster.</p>

<h2>Built-in shortcuts everyone should know</h2>

<h3>Fine-grained volume adjustment</h3>
<p>Hold <strong>Option + Shift</strong> and press the volume up or down key. Each press adjusts the volume by <strong>one quarter</strong> of a normal step, giving you 64 levels instead of 16. This is essential for finding the right headphone volume late at night, or when the jump between two normal steps is too large.</p>

<h3>Silent volume adjustment</h3>
<p>Hold <strong>Shift</strong> and press volume up or down. The volume changes but the audible feedback "pop" sound is suppressed. Useful when you're adjusting volume during a call or presentation and don't want the pop sound broadcasting to everyone.</p>

<h3>Jump to Sound settings</h3>
<p>Hold <strong>Option</strong> and press any volume key to open System Settings → Sound directly. Faster than navigating through System Settings manually.</p>

<h3>Quick output device switch</h3>
<p>Hold <strong>Option</strong> and click the Sound icon in the menu bar to see a list of all available output (and input) devices. Click one to switch instantly. No need to open System Settings.</p>

<h2>What macOS keyboard shortcuts can't do</h2>

<p>All of the shortcuts above control the <strong>system volume</strong> — one slider that affects every app equally. There are no built-in keyboard shortcuts for:</p>

<ul>
  <li>Adjusting the volume of a specific app</li>
  <li>Muting one app without muting everything</li>
  <li>Switching between saved volume configurations</li>
  <li>Toggling a volume mixer panel</li>
</ul>

<p>macOS simply doesn't have per-app volume control, so there are no shortcuts for it.</p>

<h2>Per-app volume keyboard shortcuts with SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> adds two global keyboard shortcuts that extend what macOS can do:</p>

<h3>Toggle the volume mixer: Control + Option + S</h3>
<p>Press <strong>⌃⌥S</strong> from anywhere and SoundDial's popover opens in the menu bar, showing every app with its own volume slider. Adjust what you need, press the shortcut again (or click away) to close it. You never leave your current app.</p>

<h3>Mute all apps: Control + Option + M</h3>
<p>Press <strong>⌃⌥M</strong> to instantly mute every app's audio. Press it again to unmute everything, restoring each app to its previous volume. This is an "instant silence" button that's faster than reaching for the mute key — and unlike the system mute key, it restores per-app volumes when you unmute.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial keyboard shortcuts — Control+Option+S to toggle, Control+Option+M to mute all" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>The keyboard-driven workflow</h2>

<p>With SoundDial's shortcuts enabled, you can manage all your audio without touching the mouse:</p>

<ol>
  <li><strong>⌃⌥S</strong> — open the mixer</li>
  <li>Use arrow keys or the mouse to adjust individual sliders</li>
  <li><strong>⌃⌥S</strong> — close the mixer</li>
  <li><strong>⌃⌥M</strong> — instant mute when someone walks into the room</li>
  <li><strong>⌃⌥M</strong> — unmute when they leave, everything back to normal</li>
</ol>

<p>Combined with <strong>volume profiles</strong> (saved configurations you switch with one click), you can manage the audio of a dozen apps without ever needing to open any of them individually.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Background Music App Not Working on macOS? Try These Alternatives",
    description: "The free Background Music app stopped working after a macOS update? Here's why it breaks, what to do, and the best alternatives that actually work in 2026.",
    date: "2026-06-08",
    readTime: "5 min čtení",
    content: `
<p>Background Music is a popular free, open-source Mac app that gives you basic per-app volume control. It works by installing a virtual audio device and routing all audio through it. The problem: it breaks. Regularly.</p>

<p>After almost every macOS update — Ventura, Sonoma, Sequoia, Tahoe — users report the same issues: the virtual audio device fails to install, audio glitches and crackling appear, some apps aren't detected, or the app simply crashes on launch. If you searched for "Background Music not working," you're not alone.</p>

<h2>Why Background Music keeps breaking</h2>

<p>Background Music works by installing a <strong>virtual audio device driver</strong> (a Core Audio HAL plugin). macOS routes all system audio through this virtual device, and Background Music intercepts it to apply per-app volume control.</p>

<p>The problem is that Apple changes how audio drivers work with nearly every major macOS release. Security restrictions tighten, APIs change, and driver loading mechanisms evolve. Since Background Music is a volunteer-maintained open-source project, updates to match Apple's changes aren't always timely.</p>

<p>Common issues after macOS updates:</p>
<ul>
  <li><strong>Virtual audio device doesn't install</strong> — macOS's new security policies block the driver</li>
  <li><strong>Audio crackling or stuttering</strong> — the virtual device introduces latency that the current macOS version handles poorly</li>
  <li><strong>Apps not appearing</strong> — changes to how macOS reports running processes break app detection</li>
  <li><strong>No audio at all</strong> — the virtual device is set as default output but isn't passing audio through</li>
  <li><strong>Crash on launch</strong> — incompatibility with the current macOS version</li>
</ul>

<h2>How to fix Background Music</h2>

<p>If Background Music is currently broken:</p>

<ol>
  <li><strong>Check for updates:</strong> Visit the GitHub releases page for Background Music and see if a new version has been released for your macOS version.</li>
  <li><strong>Reinstall:</strong> Uninstall Background Music completely (including the virtual audio device), restart, and install the latest version.</li>
  <li><strong>Reset audio:</strong> If your audio is stuck on the virtual device, go to System Settings → Sound → Output and select your real speakers/headphones. Then run <code>sudo killall coreaudiod</code> in Terminal.</li>
  <li><strong>Check permissions:</strong> System Settings → Privacy & Security — make sure Background Music has the necessary permissions.</li>
</ol>

<h2>Alternatives that don't use virtual audio devices</h2>

<p>The fundamental issue with Background Music is architectural: virtual audio devices are fragile and break with macOS updates. Modern alternatives use Apple's <strong>Core Audio Tap API</strong> (introduced in macOS 14), which lets apps intercept per-process audio without installing a system-level driver.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> uses the modern Audio Tap API — no virtual audio device, no system driver, no kernel extensions. It taps into each app's audio stream directly using Apple's supported API, which means it doesn't break when macOS updates.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — a Background Music alternative that doesn't install virtual audio devices" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>What you get over Background Music:</p>
<ul>
  <li><strong>No virtual audio device</strong> — works with Apple's native audio stack, doesn't break on updates</li>
  <li><strong>Volume boost to 200%</strong> — Background Music caps at 100%</li>
  <li><strong>Volume profiles</strong> — save and switch between configurations (Background Music has none)</li>
  <li><strong>Auto-ducking</strong> — automatic volume reduction during calls (Background Music only has auto-pause, not ducking)</li>
  <li><strong>Volume memory</strong> — remembers per-app volumes between restarts</li>
  <li><strong>Keyboard shortcuts</strong> — toggle the mixer or mute all apps</li>
  <li><strong>Active development</strong> — regularly updated for the latest macOS</li>
</ul>

<p>The trade-off: SoundDial is a one-time paid purchase, while Background Music is free. But an app that actually works is worth more than a free app that breaks every six months. And because SoundDial is on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, it's been reviewed by Apple, sandboxed for security, and installs cleanly — no downloading from GitHub, no compiling from source, no granting system extension permissions.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource Alternative: Lighter, Cheaper Per-App Volume Control for Mac",
    description: "SoundSource is powerful but expensive and complex. If you just need per-app volume control without the audio engineering toolkit, here's what to use instead.",
    date: "2026-06-06",
    readTime: "6 min čtení",
    content: `
<p>SoundSource by Rogue Amoeba is the longest-running per-app volume control app for Mac. It's powerful, well-made, and comes with features like per-app EQ, audio effect chains, and per-app output routing. It's also $39, requires a system audio driver (ACE), and has more features than most people will ever use.</p>

<p>If all you want is to turn down Spotify without affecting Zoom — and you don't need a full audio engineering toolkit — SoundSource might be more than you need. Here's what to consider.</p>

<h2>What SoundSource does well</h2>

<p>Credit where it's due — SoundSource is a polished, professional app:</p>
<ul>
  <li><strong>Per-app volume control</strong> with fine-grained sliders</li>
  <li><strong>Per-app EQ</strong> with built-in equalizers and Audio Unit plugin support</li>
  <li><strong>Per-app output routing</strong> — send different apps to different speakers</li>
  <li><strong>Volume boost</strong> past 100%</li>
  <li><strong>System-wide audio effects</strong></li>
</ul>

<p>If you're a podcaster, streamer, or audio professional who needs per-app EQ and effect chains, SoundSource is purpose-built for you.</p>

<h2>Where SoundSource falls short for regular users</h2>

<h3>Price</h3>
<p>$39 USD is steep for a volume control app. If you don't use the EQ, audio effects, or per-app routing, you're paying for features you'll never touch.</p>

<h3>System driver</h3>
<p>SoundSource installs a custom system audio driver called ACE (Audio Capture Engine). This works well but adds complexity — it needs to be updated with each macOS release, can occasionally conflict with other audio software, and means you're running third-party code at the system audio level. Some IT departments in corporate environments block kernel extensions and system-level audio drivers.</p>

<h3>No volume profiles</h3>
<p>Despite its extensive feature set, SoundSource doesn't have a profile system. You can't save a "Meeting" configuration and a "Focus" configuration and switch between them. Every time your situation changes, you adjust each slider manually.</p>

<h3>No auto-ducking</h3>
<p>SoundSource doesn't automatically lower background audio when you join a call. There's no call detection, no automatic volume adjustment, no hands-free workflow for the most common use case of a per-app mixer.</p>

<h2>SoundDial: focused on what most people actually need</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> takes a different approach: do the core job perfectly, skip the features most people don't need, and add the workflow features that SoundSource misses.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Feature</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app volume</td>
  <td style="text-align:center;padding:10px 12px;">Yes (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app mute</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume profiles</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume memory</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app EQ</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app output routing</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">System audio driver</td>
  <td style="text-align:center;padding:10px 12px;">Not needed</td>
  <td style="text-align:center;padding:10px 12px;">Required (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Keyboard shortcuts</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Price</td>
  <td style="text-align:center;padding:10px 12px;">€14.99 one-time</td>
  <td style="text-align:center;padding:10px 12px;">$39 USD</td>
</tr>
</tbody>
</table>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — a lighter, focused SoundSource alternative with volume profiles and auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Which should you choose?</h2>

<ul>
  <li><strong>Choose SoundSource if:</strong> You need per-app EQ, audio effect chains, or per-app output routing. You're a podcaster, streamer, or audio professional. You don't mind the price and the system driver.</li>
  <li><strong>Choose <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> if:</strong> You want per-app volume control with profiles and auto-ducking. You want something lighter that doesn't install a system driver. You want to spend less. You're a remote worker, gamer, student, or anyone who just wants to turn Slack down without affecting Zoom.</li>
</ul>

<p>SoundDial is available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — which means it's been reviewed by Apple, sandboxed for security, and installs/uninstalls cleanly like any App Store app. No downloading DMGs from random websites, no system driver installations, no granting kernel extension permissions. One-time purchase, no subscription.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac Volume Too Loud at Lowest Setting? How to Go Even Quieter",
    description: "Even at the lowest volume notch, your Mac is too loud — especially late at night with headphones. Here's how to get finer volume control and go below the minimum.",
    date: "2026-05-08",
    readTime: "5 min čtení",
    content: `
<p>It's midnight. You're wearing headphones. You press the volume-down key until you're at the lowest notch — one bar. It's still too loud. The next press is mute. There's nothing in between. You want volume at 3% but macOS jumps from ~6% to 0%.</p>

<p>This is a common complaint with headphones and sensitive speakers. macOS's 16 volume steps are too coarse — the lowest audible step is still louder than what you need for quiet late-night listening.</p>

<h2>Built-in fix: quarter-step volume adjustment</h2>

<p>Most Mac users don't know this: you can get <strong>4x finer volume control</strong> using a keyboard modifier.</p>

<p>Hold <strong>Option + Shift</strong> and press the volume up/down keys. Each press adjusts volume by one quarter of a normal step — giving you 64 steps instead of 16.</p>

<p>This lets you find volume levels between the normal notches. That gap between "one bar" and "mute" now has three additional levels you can land on. For late-night headphone listening, this is often enough to find a comfortable level.</p>

<h2>Why some content is louder than others at the same volume</h2>

<p>You might notice that some apps feel louder than others even at the same system volume. Spotify at one bar feels louder than a YouTube video at one bar. This is because each app outputs audio at different levels, and system volume scales them proportionally.</p>

<p>A song mastered at 0 dB (maximum) and a podcast recorded at -15 dB will sound dramatically different at the same system volume. The song is 15 dB louder — which is perceived as roughly three times louder to your ears.</p>

<h2>The real fix: per-app volume for fine control</h2>

<p>The quarter-step shortcut helps, but it still adjusts all apps equally. If Spotify at the lowest step is too loud but your Zoom call at the lowest step is too quiet, you're stuck.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives you per-app volume sliders with fine-grained control — each slider moves in 1% increments from 0% to 200%. You can set Spotify to 5% and Zoom to 40% at the same time. The level of control is dramatically finer than macOS's 16 system steps.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% increments on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>For late-night headphone use:</p>
<ul>
  <li>Set system volume to a moderate level (40-50%)</li>
  <li>Use SoundDial to fine-tune each app to exactly the level you want</li>
  <li>Spotify at 8% — barely-there background music</li>
  <li>Browser at 15% — quiet enough for late-night video</li>
  <li>Notifications muted — no surprise loud pings</li>
</ul>

<p>Save this as a "Night" profile and apply it with one click when you put on headphones after hours.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "One AirPod Louder Than the Other? Every Fix Explained",
    description: "The left AirPod is quieter than the right (or vice versa). Here's every cause — from earwax to macOS balance settings — and how to fix it.",
    date: "2026-05-10",
    readTime: "5 min čtení",
    content: `
<p>One AirPod sounds fine. The other is noticeably quieter. Music feels off-center. Voices sound like they're coming from one side. This is one of the most common AirPods complaints, and it usually has a simple fix.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>1. Clean your AirPods</h2>

<p>The most common cause is physical: earwax or debris partially blocking the speaker mesh on one AirPod. Even a thin layer of buildup can significantly reduce volume on that side.</p>

<p><strong>How to clean:</strong></p>
<ul>
  <li>Use a dry, soft-bristled brush (a clean toothbrush works) to gently brush the speaker mesh</li>
  <li>For AirPods Pro silicone tips: remove the tip and clean both the tip and the speaker mesh underneath</li>
  <li>Use a dry, lint-free cloth for the exterior</li>
  <li><strong>Don't use:</strong> water, alcohol, compressed air, or sharp objects — these can damage the speaker mesh or push debris further in</li>
</ul>

<p>After cleaning, test both AirPods. In most cases, this fixes the problem immediately.</p>

<h2>2. Check the audio balance in macOS</h2>

<p>macOS has a left-right audio balance slider that might be off-center:</p>

<ol>
  <li>Go to <strong>System Settings → Accessibility → Audio</strong></li>
  <li>Find the <strong>Balance</strong> slider</li>
  <li>Make sure it's exactly centered between L and R</li>
</ol>

<p>If the slider was shifted to one side, that's your culprit. Center it and the volume should be equal on both sides.</p>

<p>Also check <strong>System Settings → Sound</strong> — some macOS versions have a balance slider in the output device settings as well.</p>

<h2>3. Reset your AirPods</h2>

<p>If cleaning and balance don't help, try resetting your AirPods to their factory state:</p>

<ol>
  <li>Put both AirPods in the charging case</li>
  <li>Close the lid and wait 30 seconds</li>
  <li>Open the lid</li>
  <li>Press and hold the setup button on the back of the case for 15 seconds until the status light flashes amber, then white</li>
  <li>Re-pair the AirPods with your Mac (System Settings → Bluetooth)</li>
</ol>

<p>This resets any stored audio calibration and can fix software-side volume imbalances.</p>

<h2>4. Check for Mono Audio</h2>

<p>If macOS's Mono Audio accessibility feature is enabled, stereo audio is mixed into a single channel and sent to both AirPods equally. While this shouldn't cause volume differences, it can change the way certain content sounds and make one side seem "different."</p>

<p>Check: System Settings → Accessibility → Audio → make sure "Mono Audio" is off (unless you need it).</p>

<h2>5. Bluetooth interference</h2>

<p>AirPods communicate with your Mac via Bluetooth, and each AirPod also communicates with the other. If there's significant Bluetooth interference (WiFi routers, USB 3.0 hubs, other Bluetooth devices), one AirPod might receive a weaker signal.</p>

<p><strong>Fix:</strong> Move closer to your Mac. Disconnect Bluetooth devices you're not using. If you're near a USB 3.0 hub, try moving it away — USB 3.0 is known to interfere with 2.4 GHz Bluetooth.</p>

<h2>6. Hardware issue</h2>

<p>If none of the above fixes work, one AirPod might have a hardware defect — a degraded speaker driver or a damaged mesh. This happens over time with heavy use.</p>

<p><strong>Fix:</strong> Contact Apple Support or visit an Apple Store. If your AirPods are under warranty or AppleCare+, Apple will replace the affected AirPod. Individual AirPod replacements are also available for purchase outside warranty.</p>

<h2>Better audio balance with per-app volume control</h2>

<p>While per-app volume control doesn't fix a hardware imbalance between AirPods, it solves a related problem: when some apps are louder than others in your AirPods, it can exaggerate the perception of an imbalance.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you set each app to a consistent volume level. When Spotify is at 40%, Zoom at 100%, and Safari at 60%, you know exactly what to expect from each app — no sudden volume jumps that make one AirPod feel louder because a notification just blasted at 100%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix and Streaming Audio Too Quiet on Mac? How to Fix It",
    description: "Dialog is whisper-quiet, then an explosion shakes the room. Here's how to fix streaming audio levels on Mac — and boost quiet content past 100%.",
    date: "2026-05-17",
    readTime: "5 min čtení",
    content: `
<p>You're watching a movie on Netflix. Two characters are having a conversation — you can barely hear them. You turn up the volume. An action scene starts. The explosions are deafening. You scramble for the volume key. This is the most common complaint about streaming audio, and it's worse on Mac's built-in speakers.</p>

<p>The problem isn't your Mac. It's how movies and TV shows are mastered — and the fact that macOS gives you no tools to fix it.</p>

<h2>Why streaming audio has wild volume swings</h2>

<p>Movies and TV shows are mastered with high <strong>dynamic range</strong> — the difference between the quietest and loudest sounds. In a theater with powerful speakers and a subwoofer, this sounds incredible. Whispers are intimate, explosions are visceral.</p>

<p>On a MacBook's 2-inch speakers, that dynamic range becomes a liability. The quiet parts are below what tiny speakers can reproduce clearly, while the loud parts hit the speaker's physical limits. You end up constantly adjusting volume — turning up for dialog, turning down for action.</p>

<h2>Fix 1: Enable "Reduce Loud Sounds" in the streaming app</h2>

<p>Some streaming services have a volume normalization feature:</p>
<ul>
  <li><strong>Netflix:</strong> During playback, click the speaker icon → check if there's a "Reduce Loud Sounds" option (available in the browser and native app)</li>
  <li><strong>Apple TV+:</strong> Settings → Accessibility → "Reduce Loud Sounds"</li>
  <li><strong>Disney+:</strong> No equivalent setting currently available</li>
  <li><strong>Amazon Prime Video:</strong> "Dialogue Boost" feature (if available for the title)</li>
</ul>

<p>These features compress the dynamic range — making quiet sounds louder and loud sounds quieter. The result is more even volume that works better on small speakers and at low listening levels.</p>

<h2>Fix 2: Check your Mac's sound enhancer</h2>

<p>On some Mac models, macOS applies audio processing to the built-in speakers. Check System Settings → Sound to see if there are any enhancement options for your output device. On MacBook Pro 14" and 16" models, the speaker system has spatial audio processing that can affect perceived volume.</p>

<h2>Fix 3: Use wired headphones</h2>

<p>Headphones bypass the speaker size problem entirely. Even cheap wired earbuds can reproduce quiet dialog clearly because the driver is right next to your eardrum. The dynamic range that's a problem on tiny speakers becomes an advantage in headphones.</p>

<h2>Fix 4: Boost streaming audio past 100%</h2>

<p>If the content is just too quiet — even with normalization on and volume at max — you need amplification beyond what macOS provides.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you boost any app to <strong>200%</strong>. If Safari or the Netflix app is too quiet, drag its slider past 100%. The audio is amplified before it reaches your speakers, effectively doubling the maximum volume for that app only.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Netflix audio to 180% on Mac for clearer dialog and streaming audio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>This is especially useful when:</p>
<ul>
  <li>Watching a quiet foreign film where the dialog is soft</li>
  <li>Streaming older content that was mastered at lower levels</li>
  <li>Using MacBook speakers in a noisy environment</li>
  <li>One streaming service is significantly quieter than another</li>
</ul>

<p>And because SoundDial controls each app independently, boosting Netflix to 150% doesn't make your Spotify or Slack louder. Each app stays at its own level.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac Audio Setup for Remote Work: The Complete Guide",
    description: "Calls, music, notifications, and focus time — all on one Mac. Here's how to set up your audio so nothing fights for your attention.",
    date: "2026-05-12",
    readTime: "8 min čtení",
    content: `
<p>Remote work on a Mac means your computer is simultaneously your office phone, your radio, your notification center, and your deep work station. These are four fundamentally different audio modes, and macOS treats them all the same: one volume slider, everything at the same level, no way to prioritize.</p>

<p>This guide walks through how to set up your Mac's audio for remote work so that calls are clear, music is present but not distracting, notifications are subtle, and focus time is actually quiet.</p>

<h2>The four audio modes of remote work</h2>

<h3>1. Meeting mode</h3>
<p>You're on a Zoom or Teams call. The call needs to be crystal clear. Music should be silent or barely audible. Slack should not be pinging in your ear.</p>

<h3>2. Focus mode</h3>
<p>You're doing deep work. Background music at a low level helps you concentrate. Notifications should be barely perceptible — present enough that you notice an urgent message, quiet enough that they don't break flow.</p>

<h3>3. Collaborative mode</h3>
<p>You're available for messages, monitoring Slack, maybe watching a training video. Everything can be at moderate levels. Notifications at normal volume.</p>

<h3>4. Break mode</h3>
<p>Music at full volume. YouTube at full volume. Notifications can wait.</p>

<h2>Hardware setup</h2>

<h3>The microphone question</h3>
<p>If you're using AirPods for calls, consider using a separate mic instead. When AirPods are used as both mic and speakers, macOS switches to the lower-quality SCO Bluetooth codec, which reduces both audio quality and volume. Using your Mac's built-in mic (or a USB mic) while keeping AirPods as the output avoids this entirely.</p>

<p>For best call quality: a USB microphone or a headset with a built-in mic. The Blue Yeti, Elgato Wave, or even a basic USB headset will sound dramatically better than AirPods' mic to your colleagues.</p>

<h3>Output devices</h3>
<p>Many remote workers use two output devices:</p>
<ul>
  <li><strong>Headphones</strong> for calls — privacy, no echo, clear audio</li>
  <li><strong>Speakers</strong> for music during non-call time — fills the room, more comfortable for long periods</li>
</ul>

<p>Use Option-click on the Sound icon in the menu bar to quickly switch between devices. Or use SoundDial's built-in device switcher, which puts your output devices right next to your volume controls.</p>

<h2>Software setup</h2>

<h3>Notification management</h3>
<p>Go to System Settings → Notifications. For each app, decide whether you need sound notifications:</p>
<ul>
  <li><strong>Keep sounds on:</strong> Slack (if you're responsive), Calendar (meetings), Messages</li>
  <li><strong>Turn sounds off:</strong> Mail (check on your schedule), News, social apps</li>
</ul>

<p>This reduces the number of apps that make surprise sounds, but it doesn't give you volume control — just on/off.</p>

<h3>Focus modes</h3>
<p>Create at least two Focus modes in System Settings → Focus:</p>
<ul>
  <li><strong>"Meeting"</strong> — silence all notifications except your calendar app</li>
  <li><strong>"Focus Work"</strong> — allow notifications from Slack DMs and your manager, silence everything else</li>
</ul>

<p>Focus modes handle notification suppression. For audio volume control, you need something more.</p>

<h2>The missing piece: per-app volume control</h2>

<p>Focus modes control <em>which</em> notifications get through but not <em>how loud</em> anything is. You still have one volume slider for everything. If you want Slack at 15%, Spotify at 35%, and Zoom at 100% — macOS can't do that.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> fills this gap by giving every app its own volume slider. Set up your remote work audio exactly how you want it:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial remote work audio setup — different volume levels for Zoom, Spotify, and Slack on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Save profiles for each mode</h3>

<p><strong>Meeting profile:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>Spotify: muted</li>
  <li>Slack: muted</li>
  <li>Browser: muted</li>
</ul>

<p><strong>Focus Work profile:</strong></p>
<ul>
  <li>Spotify: 30%</li>
  <li>Slack: 10%</li>
  <li>Zoom: 80% (in case someone calls)</li>
  <li>Browser: 40%</li>
</ul>

<p><strong>Collaborative profile:</strong></p>
<ul>
  <li>Everything at 50-70%</li>
  <li>Slack: 30%</li>
</ul>

<p>Switch between profiles with one click. When a call starts, SoundDial's auto-ducking automatically lowers everything except your call app. When it ends, your profile levels restore.</p>

<h2>The daily workflow</h2>

<ol>
  <li>Start work → apply "Focus Work" profile</li>
  <li>Join a meeting → auto-ducking handles it automatically (or apply "Meeting" profile)</li>
  <li>Meeting ends → volumes restore to Focus Work levels</li>
  <li>Lunch break → apply "Break" profile, crank the music</li>
  <li>Afternoon deep work → back to Focus Work</li>
</ol>

<p>Total manual effort: two or three profile clicks per day. Everything else is automatic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Jak zastavit automatické přehrávání zvuku na kartách prohlížeče na Macu",
    description: "Karta na pozadí najednou začne přehrávat zvuk odnikud. Reklamy, videa, zpravodajské weby — zde je návod, jak ztišit zlobivé karty a ovládat zvuk prohlížeče na macOS.",
    date: "2026-05-14",
    readTime: "5 min čtení",
    content: `
<p>Máte otevřených dvacet karet. Pracujete v jedné z nich. Najednou se odněkud ozve zvuk. Video reklama. Automaticky spuštěný zpravodajský klip. Karta, kterou jste otevřeli před hodinou a která se rozhodla, že právě teď je čas začít dělat hluk. Snažíte se zjistit, o kterou kartu jde, a proklikáváte se jimi jednu po druhé.</p>

<p>Automatické přehrávání zvuku na kartách prohlížeče patří k nejotravnějším zážitkům na jakémkoli počítači, a na Macu je to ještě horší, protože macOS nemá způsob, jak ztlumit konkrétní aplikaci (natož konkrétní kartu) bez ztlumení všeho ostatního.</p>

<h2>Vypnutí automatického přehrávání v Safari</h2>

<p>Safari má nejlepší vestavěné ovládání automatického přehrávání ze všech prohlížečů:</p>

<ol>
  <li>Otevřete Safari → Nastavení (⌘,) → záložka Weby</li>
  <li>V levém postranním panelu vyberte „Automatické přehrávání“</li>
  <li>Dole nastavte výchozí hodnotu na „Nikdy nepřehrávat automaticky“ nebo „Zastavit média se zvukem“</li>
</ol>

<p>„Zastavit média se zvukem“ je nejlepší volba — blokuje videa, která se automaticky spouští se zvukem, ale povoluje ztlumené automatické přehrávání (které mnoho webů používá pro dekorativní videa na pozadí). „Nikdy nepřehrávat automaticky“ blokuje úplně vše.</p>

<p>Ve stejném panelu můžete také nastavit pravidla pro jednotlivé weby, pokud chcete automatické přehrávání povolit na konkrétních webech, jako je YouTube nebo Netflix.</p>

<h2>Vypnutí automatického přehrávání v Chrome</h2>

<p>Ovládání automatického přehrávání v Chrome je méně podrobné:</p>

<ol>
  <li>Přejděte na <code>chrome://settings/content/sound</code></li>
  <li>Přepínačem „Weby mohou přehrávat zvuk“ určete výchozí chování</li>
  <li>Konkrétní weby přidejte do seznamu „Ztlumit“, aby byly trvale umlčeny</li>
</ol>

<p>Chrome také umožňuje ztlumit jednotlivé karty: klikněte pravým tlačítkem na kartu → „Ztlumit web.“ Tím se ztlumí veškerý zvuk z daného webu, dokud ho znovu nezapnete.</p>

<h2>Rychlé ztlumení karty</h2>

<p>Safari i Chrome zobrazují ikonu reproduktoru na kartách, které vydávají zvuk. V Safari kartu ztlumíte kliknutím na ikonu reproduktoru. V Chrome klikněte na kartu pravým tlačítkem a vyberte „Ztlumit web.“</p>

<p>Toto funguje vždy jen pro jednu kartu, ale pokud máte hlučných karet víc, proklikáváte se jimi jednu po druhé.</p>

<h2>Širší problém: zvuk prohlížeče vs. všechno ostatní</h2>

<p>I s vypnutým automatickým přehráváním a ztlumenými kartami možná stále chcete řídit, jak hlasitý je prohlížeč vůči ostatním aplikacím. Třeba sledujete výukové video na YouTube během hovoru na Zoomu — chcete mít video na 30 % a Zoom na 100 %. Nebo si na kartě prohlížeče pouštíte hudbu na pozadí a ta soupeří s vaším Spotify.</p>

<p>macOS bere celý prohlížeč jako jednu aplikaci s jednou hlasitostí. Na systémové úrovni nemůžete jednu kartu ztišit víc než druhou. Ale <em>můžete</em> ztišit celý prohlížeč vůči ostatním aplikacím.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dá vašemu prohlížeči vlastní posuvník hlasitosti, nezávislý na všech ostatních aplikacích. Ztište Safari na 30 %, zatímco Zoom necháte na 100 %. Úplně ztlumte Chrome a přitom nechte hrát Spotify. Jedním kliknutím.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling browser volume independently from other apps on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Toto je nejrychlejší způsob, jak zvládnout překvapivě spuštěnou kartu se zvukem: místo pátrání po tom, která karta dělá hluk, klikněte na SoundDial v panelu nabídek a ztlumte prohlížeč. Vše ostatní hraje dál. Jakmile najdete a zavřete provinilou kartu, prohlížeč odztlumíte a jeho hlasitost se vrátí tam, kde byla.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Získejte SoundDial na Mac App Store</a> — jednorázová platba 14,99 €, žádné předplatné, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Discord Volume Too Loud (or Quiet) on Mac? How to Fix It",
    description: "Discord is blasting over your game, or too quiet to hear teammates. Here's how to control Discord's volume independently from everything else on macOS.",
    date: "2026-05-21",
    readTime: "5 min čtení",
    content: `
<p>Discord has two volume problems on Mac. Either it's too loud — notification sounds blast over your game and music — or it's too quiet — you can't hear your teammates over the game audio. The problem is that macOS doesn't let you adjust Discord's volume independently. It's locked to the same system slider as everything else.</p>

<h2>Discord's built-in volume controls</h2>

<p>Discord has several internal volume settings. Before looking at external solutions, make sure these are configured:</p>

<h3>Output volume</h3>
<p>Go to Discord → Settings (gear icon) → Voice & Video. The "Output Volume" slider controls how loud Discord sounds to you. If Discord is too quiet, make sure this is at 100%. If it's too loud, lower it here.</p>

<p><strong>Limitation:</strong> This controls Discord's internal mix, but it doesn't change Discord's volume <em>relative to other apps</em>. If your game is at 80% system volume and Discord is also at 80%, adjusting Discord's internal slider changes the balance — but you're still locked to one system volume for everything.</p>

<h3>Per-user volume</h3>
<p>Right-click any user in a voice channel → "User Volume." You can adjust individual users from 0% to 200%. This is useful if one person is louder or quieter than others, but it doesn't solve the overall Discord-vs-other-apps balance.</p>

<h3>Notification volume</h3>
<p>Discord → Settings → Notifications. You can disable specific notification sounds (message, deafen, mute, join/leave) individually. This reduces the number of disruptive sounds but doesn't let you lower their volume — just turn them on or off.</p>

<h2>The real problem: system-level volume balance</h2>

<p>Discord's internal controls adjust Discord's own mix. But the real issue is the balance between Discord and everything else on your Mac: your game, your music, your browser. macOS gives you one slider for all of them.</p>

<p>To adjust Discord's volume relative to your game, you need per-app volume control — something macOS doesn't provide natively.</p>

<h2>Fix it with SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives Discord its own volume slider in your menu bar, independent from every other app. Set Discord to exactly the level you want — 100% for clear voice chat, 40% for subtle background, or muted entirely — without touching your game, music, or anything else.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling Discord volume independently from game and music on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Common setups</h3>

<p><strong>Gaming with Discord:</strong></p>
<ul>
  <li>Discord: 100% (always hear teammates clearly)</li>
  <li>Game: 40% (immersive but not overpowering)</li>
  <li>Spotify: 15% (subtle background music)</li>
</ul>

<p><strong>Hanging out in voice chat:</strong></p>
<ul>
  <li>Discord: 80%</li>
  <li>Browser/YouTube: 60%</li>
  <li>Everything else: normal</li>
</ul>

<p><strong>Focus work (Discord in background):</strong></p>
<ul>
  <li>Discord: muted or 10%</li>
  <li>Spotify: 50%</li>
  <li>Slack: 15%</li>
</ul>

<p>Save each as a <strong>volume profile</strong> in SoundDial and switch with one click. No re-adjusting six sliders every time you change activities.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Jak rychle přepnout zvukový výstup na Macu (bez prohrabávání se nastavením)",
    description: "Přepínání mezi reproduktory, sluchátky a monitory na Macu zabere příliš mnoho kliknutí. Zde jsou rychlejší způsoby, jak okamžitě změnit zvukové výstupní zařízení.",
    date: "2026-05-19",
    readTime: "5 min čtení",
    content: `
<p>Odpojíte sluchátka a chcete, aby zvuk šel do reproduktorů. Nebo připojíte AirPods a macOS zvolí špatné zařízení. Nebo vejdete do zasedací místnosti a potřebujete přepnout na konferenční reproduktor. Pokaždé je to stejné: Nastavení systému → Zvuk → Výstup → posun → klik. Příliš mnoho kliknutí na něco, co by mělo zabrat jedno.</p>

<p>Zde jsou všechny způsoby, jak na Macu rychleji přepnout zvukový výstup — od vestavěných zkratek až po nástroje v panelu nabídek, které klikání úplně eliminují.</p>

<h2>Metoda 1: Option+klik na ikonu hlasitosti</h2>

<p>Toto je nejrychlejší vestavěná metoda a většina lidí o ní neví.</p>

<p>Podržte <strong>Option (⌥)</strong> a klikněte na ikonu hlasitosti/zvuku v panelu nabídek. Místo běžného posuvníku hlasitosti se zobrazí seznam všech dostupných výstupních zařízení. Klikněte na to, které chcete. Hotovo.</p>

<p>Pokud ikonu zvuku v panelu nabídek nevidíte, zapněte ji: Nastavení systému → Ovládací centrum → Zvuk → vyberte „Vždy zobrazovat v panelu nabídek.“</p>

<p><strong>Omezení:</strong> Tohle zobrazuje jen výstupní zařízení — z tohoto menu nelze upravit hlasitost jednotlivých aplikací ani vidět, co se aktuálně přehrává.</p>

<h2>Metoda 2: Ovládací centrum</h2>

<p>Klikněte na ikonu Ovládacího centra (ikona se dvěma přepínači) v panelu nabídek → klikněte na sekci Zvuk → klikněte na název aktuálního zařízení, abyste viděli všechny dostupné výstupy.</p>

<p><strong>Omezení:</strong> Jsou to tři kliknutí místo jednoho. O něco pomalejší než Option+klik na ikonu hlasitosti.</p>

<h2>Metoda 3: Zkratka v Nastavení systému</h2>

<p>Zvuk si můžete připnout do horní úrovně postranního panelu Nastavení systému, ale i tak je potřeba přejít na záložku Výstup a vybrat zařízení. Není to rychlé.</p>

<h2>Metoda 4: Klávesová zkratka (s nastavením)</h2>

<p>macOS nemá vestavěnou klávesovou zkratku pro přepínání zvukových zařízení. Můžete si ji ale vytvořit pomocí Automatoru nebo Zkratek:</p>
<ol>
  <li>Otevřete aplikaci Zkratky</li>
  <li>Vytvořte novou zkratku, která spustí shellový skript: <code>SwitchAudioSource -s "Název zařízení"</code> (vyžaduje nástroj příkazové řádky <code>switchaudio-osx</code> z Homebrew)</li>
  <li>Přiřaďte zkratce klávesovou zkratku</li>
</ol>
<p>Toto funguje, ale vyžaduje Homebrew, nástroj příkazové řádky a ruční nastavení pro každé zařízení. Pro většinu uživatelů nepraktické.</p>

<h2>Metoda 5: Vestavěný přepínač zařízení v SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> obsahuje výběr výstupního zařízení přímo ve svém vyskakovacím panelu v liště nabídek — vedle posuvníků hlasitosti jednotlivých aplikací. Jedno kliknutí pro otevření SoundDial, jedno kliknutí pro přepnutí zařízení. Žádné prohrabávání se Nastavením systému.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial with audio output device switching and per-app volume control in one menu bar panel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Výhoda přepínání zařízení přímo v SoundDial: výstup můžete přepnout <em>a</em> zároveň upravit hlasitost jednotlivých aplikací ve stejném panelu. Přepnete na AirPods a hned ztišíte Spotify a zesílíte hovor — vše bez opuštění vyskakovacího panelu.</p>

<p>V kombinaci s funkcí <strong>paměť hlasitosti</strong> v SoundDial si každé výstupní zařízení může pamatovat vlastní úrovně hlasitosti jednotlivých aplikací. Přepnete na reproduktory a použije se vaše vyvážení hlasitosti pro „reproduktory“. Přepnete na sluchátka a použije se vyvážení pro „sluchátka“. Žádné ruční přenastavování.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Získejte SoundDial na Mac App Store</a> — jednorázová platba 14,99 €, žádné předplatné, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Fix Audio Crackling and Popping on Mac: Complete Guide",
    description: "Your Mac's audio crackles, pops, or stutters — during music, calls, or video playback. Here's every known cause and fix for macOS audio glitches.",
    date: "2026-05-16",
    readTime: "8 min čtení",
    content: `
<p>You're listening to music and hear a pop. Then a crackle. Then a stutter where the audio cuts out for a fraction of a second and comes back. It's not the song — it's your Mac. Audio crackling on macOS is maddeningly common, and it has at least six different causes.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>This guide covers every known cause of audio crackling, popping, and stuttering on Mac, from software fixes to the one hardware issue you should know about.</p>

<h2>1. Restart Core Audio (the quick fix)</h2>

<p>The single most effective fix for sudden audio crackling is restarting macOS's audio daemon. Open Terminal and run:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Audio will cut out for one second and restart. In many cases, the crackling stops immediately. This works because coreaudiod — the process that manages all audio on macOS — can get into a corrupted state after sleep/wake cycles, Bluetooth device connections, or app crashes.</p>

<p>If this fixes it, the crackling was caused by a temporary daemon issue. If it comes back regularly, read on for permanent fixes.</p>

<h2>2. CPU overload</h2>

<p>Audio crackling often correlates with high CPU usage. When your Mac's CPU is maxed out, it can't process audio buffers fast enough, causing gaps that sound like pops and crackles.</p>

<p><strong>Check:</strong> Open Activity Monitor (Applications → Utilities) and look at the CPU tab. If you see consistently high CPU usage (80%+), that's likely the cause.</p>

<p><strong>Fix:</strong> Close unnecessary apps, especially resource-heavy ones like browsers with many tabs, video editors, or VMs. If a specific process is using excessive CPU, consider whether it's behaving normally or needs to be restarted.</p>

<h2>3. Bluetooth audio issues</h2>

<p>Bluetooth is the most common source of crackling for wireless headphone and speaker users. Several things can cause it:</p>

<ul>
  <li><strong>Interference:</strong> WiFi, USB 3.0 devices, and other Bluetooth devices can interfere with your audio connection. Try moving closer to your Mac or removing sources of interference.</li>
  <li><strong>Codec switching:</strong> When an app activates your microphone, macOS switches from AAC to SCO codec. This transition can cause a brief crackle or pop.</li>
  <li><strong>Bluetooth congestion:</strong> If you have many Bluetooth devices connected simultaneously, the radio can struggle. Disconnect devices you're not using.</li>
</ul>

<p><strong>Fix:</strong> Reset Bluetooth by holding Shift+Option, clicking the Bluetooth icon in the menu bar, and selecting "Reset the Bluetooth module" (if available). Alternatively, remove the device from Bluetooth settings and re-pair it.</p>

<h2>4. Sample rate mismatch</h2>

<p>If your audio output device is running at a different sample rate than the audio being played, macOS has to resample in real-time. This resampling can introduce artifacts — especially at lower buffer sizes.</p>

<p><strong>Check:</strong> Open Audio MIDI Setup (Applications → Utilities), select your output device, and check the sample rate. Common rates are 44.1 kHz (CD quality) and 48 kHz (video/streaming standard).</p>

<p><strong>Fix:</strong> Set the sample rate to match your most common use case. For music: 44.1 kHz. For video/streaming: 48 kHz. If you use a USB audio interface, consult its documentation for the optimal sample rate and buffer size.</p>

<h2>5. USB audio device buffer issues</h2>

<p>External USB audio devices (DACs, audio interfaces, USB headphones) can crackle if the buffer size is too small for your system's current load.</p>

<p><strong>Fix:</strong> In Audio MIDI Setup, select your USB device and try increasing the buffer size (if the option is available). In audio applications like Logic, Ableton, or GarageBand, increase the I/O buffer size in audio preferences. A larger buffer means slightly more latency but fewer audio glitches.</p>

<h2>6. macOS update regression</h2>

<p>Some macOS updates introduce audio bugs. This has happened with nearly every major macOS release — Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia, and Tahoe have all had audio crackling reported after initial release.</p>

<p><strong>Fix:</strong> Check if Apple has released a point update (e.g., 15.0.1, 15.1) that addresses audio issues. You can also check the Apple Developer Forums and Reddit for whether other users are experiencing the same issue. If it's a known macOS bug, a fix usually arrives within one or two point releases.</p>

<h2>7. Kernel extensions or audio plugins</h2>

<p>Third-party audio drivers, virtual audio devices, or audio plugins can conflict with macOS's native audio stack. This is especially common with older audio software that uses kernel extensions (kexts) deprecated in recent macOS versions.</p>

<p><strong>Fix:</strong> Check if you have any third-party audio software installed: Soundflower, BlackHole, Loopback, or older audio interface drivers. Try disabling or uninstalling them temporarily to see if the crackling stops. If it does, check for updated versions compatible with your macOS version.</p>

<h2>Managing audio quality with SoundDial</h2>

<p>While SoundDial doesn't directly fix hardware or system-level crackling, it can help you manage audio in ways that reduce the problem:</p>

<ul>
  <li><strong>Reduce competing audio sources:</strong> Use SoundDial to mute apps you're not actively using. Fewer simultaneous audio streams means less CPU pressure on audio processing.</li>
  <li><strong>Volume boost instead of system max:</strong> If you're running system volume at 100% and still pushing apps louder, the audio path is working at its limits. Use <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial's</a> per-app boost to amplify specific apps to 200% while keeping the system volume at a more comfortable 70-80%. This can reduce distortion at the system output level.</li>
  <li><strong>Quick output device switching:</strong> If crackling is related to a specific output device, SoundDial lets you switch devices from its menu bar panel without digging through System Settings.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Microsoft Teams Volume Too Low on Mac? Every Fix That Works",
    description: "Can barely hear people on Teams even at max volume? Here's every cause — from Teams settings to Bluetooth codecs — and how to boost call audio past 100%.",
    date: "2026-06-04",
    readTime: "7 min čtení",
    content: `
<p>You're in a Teams meeting. Your coworker is presenting, but their voice sounds like it's coming through a tin can from three rooms away. Your Mac volume is at 100%. Teams' volume is at 100%. You've turned up everything you can find. Still too quiet.</p>

<p>Low volume on Microsoft Teams is one of the most common Mac audio complaints in corporate environments. The causes are different from Zoom, and some of the fixes are Teams-specific. Let's walk through all of them.</p>

<h2>1. Check Teams' audio settings</h2>

<p>Click your profile icon in Teams → Settings → Devices (or Settings → Audio devices in the new Teams).</p>
<ul>
  <li>Make sure the correct <strong>Speaker</strong> device is selected — not a disconnected monitor or an inactive Bluetooth device</li>
  <li>Use the "Make a test call" feature to verify audio works at a reasonable volume</li>
  <li>Check that "Noise suppression" isn't set to "High" — aggressive noise suppression can reduce perceived voice volume</li>
</ul>

<h2>2. New Teams vs. Classic Teams</h2>

<p>Microsoft replaced "Classic Teams" with "New Teams" (built on a different framework). The new version handles audio differently. If you recently migrated:</p>
<ul>
  <li>Audio device settings may not have carried over — re-check your speaker selection</li>
  <li>The new Teams uses WebRTC audio processing, which can behave differently than the classic version</li>
  <li>Try toggling "Music mode" off if it's enabled (Settings → Audio devices) — it changes how Teams processes incoming audio</li>
</ul>

<h2>3. Bluetooth codec switching</h2>

<p>If you use AirPods or Bluetooth headphones, joining a Teams call forces macOS to switch from the high-quality AAC codec to the lower-quality SCO codec (because Teams activates your microphone). SCO significantly reduces audio quality and volume.</p>

<p><strong>Fix:</strong> Use your Mac's built-in microphone or a USB mic while keeping Bluetooth headphones as the output device. Go to Teams → Settings → Devices → Microphone and select "MacBook Pro Microphone" (or your USB mic). This prevents the codec switch, keeping your headphones in high-quality AAC mode.</p>

<h2>4. Check macOS output device and volume</h2>

<p>Go to System Settings → Sound → Output. Verify the correct device is selected and the output volume is at maximum. Also check:</p>
<ul>
  <li><strong>Headphone Safety:</strong> System Settings → Sound → Headphone Safety. If "Reduce Loud Audio" is on, it's capping your headphone volume.</li>
  <li><strong>Balance:</strong> Make sure the left-right balance slider is centered — if it's skewed, one side will be quieter.</li>
</ul>

<h2>5. Reset Core Audio</h2>

<p>macOS's audio daemon sometimes gets stuck at a low output level after sleep, device switching, or Teams updates. Open Terminal and run:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Audio restarts after a brief interruption. Rejoin the Teams meeting and check if the volume improved.</p>

<h2>6. Boost Teams volume beyond 100%</h2>

<p>If every setting is maxed out and Teams is still too quiet — perhaps a participant has a bad mic, or the meeting audio is inherently low — you need to amplify beyond what macOS normally allows.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you boost any app's volume to <strong>200%</strong>, including Microsoft Teams. Drag Teams' slider to 150% or 180% and the audio is amplified in real-time. Only Teams gets louder — your music, browser, and other apps stay at their current levels.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Microsoft Teams call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial also helps with the reverse problem: if Teams notification sounds are too loud during focus time, lower Teams to 15% or mute it entirely while keeping your music playing. One click to mute, one click to unmute.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Jak nastavit hlasitost pro jednotlivé aplikace na Macu",
    description: "macOS nabízí jen jeden ovladač hlasitosti pro úplně všechno. Přečtěte si, jak získat samostatné ovládání hlasitosti pro každou aplikaci — a proč na tom záleží víc, než si myslíte.",
    date: "2026-05-20",
    readTime: "7 min čtení",
    content: `
<p>Jste na videohovoru. Slack pořád cinká. Na pozadí hraje hudba. Sáhnete po klávese hlasitosti a — všechno ztichne. Hovor, hudba, notifikace. macOS má přesně jeden ovladač hlasitosti a ten řídí úplně všechno najednou.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — How to Control Per-App Volume on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Windows má mixér hlasitosti pro jednotlivé aplikace už od Visty v roce 2006. O dvacet let později to macOS pořád nemá. Pokud chcete ztlumit Spotify, aniž by to ovlivnilo váš hovor na Zoomu, Apple pro to nemá žádné vestavěné řešení.</p>

<p>Tento článek vysvětluje, co je to ovládání hlasitosti pro jednotlivé aplikace, proč ho macOS nemá a jak ho získat.</p>

<h2>Co vlastně znamená hlasitost pro jednotlivé aplikace</h2>

<p>Hlasitost pro jednotlivé aplikace znamená, že každá aplikace na vašem Macu má vlastní nezávislý ovladač hlasitosti. Můžete nastavit Spotify na 30 %, nechat Zoom na 100 %, úplně ztlumit Slack a Safari nechat na 50 % — a to všechno současně. Změna hlasitosti jedné aplikace nemá žádný vliv na žádnou jinou.</p>

<p>To je něco jiného než systémová hlasitost, což je jeden hlavní ovladač, který škáluje proporcionálně všechno najednou. Pokud je systémová hlasitost na 50 % a Spotify hraje na plné pecky, bez mixéru pro jednotlivé aplikace nemáte šanci ztlumit jen Spotify.</p>

<h2>Proč to macOS neumí</h2>

<p>Zvuková architektura Applu (Core Audio) hlasitost pro jednotlivé aplikace na úrovni frameworku bez problémů podporuje. Důvod, proč to macOS nezpřístupňuje v rozhraní, je designová filozofie: Apple preferuje méně ovladačů a jednodušší prostředí. Jeden posuvník je jednodušší než dvanáct.</p>

<p>Problém je v tom, že „jednodušší" přestává být jednodušší ve chvíli, kdy o vaši pozornost soupeří víc zvukových zdrojů najednou. Jedna klávesa hlasitosti, která řídí úplně všechno, je elegantní, když děláte jednu věc. Je ale vyloženě nepříjemná, když jste na hovoru, hraje hudba a přicházejí notifikace zároveň — a přesně takhle většina lidí svůj Mac skutečně používá.</p>

<h2>Vestavěná řešení (a proč nefungují)</h2>

<h3>1. Ovládání hlasitosti přímo v aplikaci</h3>
<p>Některé aplikace mají vlastní ovladač hlasitosti — Spotify, VLC, QuickTime. Většina je ale nemá. Slack ne. Karty v Chromu ne. Systémové zvuky ne. A i když aplikace posuvník má, musíte ji otevřít, najít ovladač, upravit ho a pak se přepnout zpátky k tomu, co jste dělali. Je to pět kliknutí za něco, co by mělo být jedno.</p>

<h3>2. Nastavení Audio MIDI</h3>
<p>macOS obsahuje aplikaci Nastavení Audio MIDI ve složce Utility. Umožňuje konfigurovat zvuková zařízení a vytvářet agregovaná zařízení, ale nemá žádné ovládání hlasitosti pro jednotlivé aplikace. Je to nástroj pro konfiguraci zařízení, ne mixér.</p>

<h3>3. Více výstupních zařízení</h3>
<p>Teoreticky byste mohli směrovat různé aplikace do různých výstupních zařízení (sluchátka vs. reproduktory) a ovládat je odděleně. To ale vyžaduje další hardware, ruční směrování pro každou aplikaci a ve skutečnosti vám to nedá nezávislou hlasitost — jen nezávislé zapnutí/vypnutí pro každé zařízení.</p>

<h2>Jak funguje mixér hlasitosti pro jednotlivé aplikace</h2>

<p>Pořádný mixér hlasitosti pro jednotlivé aplikace sedí v panelu nabídek a zobrazuje každou aplikaci, která právě přehrává zvuk. Každá aplikace má vlastní posuvník. Přetáhnete ho nahoru nebo dolů a změní se hlasitost jen té dané aplikace. Systémová hlasitost zůstane nedotčená.</p>

<p>Pod kapotou to funguje tak, že se využívá macOS <strong>Core Audio Tap API</strong> (zavedené v macOS 14) nebo starší techniky virtuálních zvukových zařízení, které zachytí zvukový proud každé aplikace samostatně a upraví jeho amplitudu ještě předtím, než se dostane do reproduktorů.</p>

<p>Klíčové funkce, které oddělují dobrý mixér od špatného:</p>

<ul>
  <li><strong>Detekce aplikací v reálném čase.</strong> Když nová aplikace začne přehrávat zvuk, měla by se v mixéru objevit automaticky. Bez ručního nastavování.</li>
  <li><strong>Ztlumení jednotlivých aplikací.</strong> Jedno kliknutí a konkrétní aplikace zmlkne, aniž byste museli hýbat s pozicí jejího posuvníku.</li>
  <li><strong>Zesílení hlasitosti.</strong> Některé aplikace (ano, myslíme tím vás, tiché podcastové přehrávače) mají maximum nastavené příliš nízko. Dobrý mixér vám umožní jít i nad 100 %.</li>
  <li><strong>Profily.</strong> Různá nastavení hlasitosti pro různé situace — „Soustředění" se vším ztlumeným kromě hudby, „Schůzka" se Zoomem na 100 % a vším ostatním na 20 %, „Hraní" se zesíleným zvukem hry.</li>
  <li><strong>Automatické ztišení (auto-ducking).</strong> Automaticky sníží hudbu, když začnete hovor, a vrátí ji zpět, když hovor skončí. Už jen kvůli tomu se aplikace vyplatí.</li>
  <li><strong>Nativní umístění v panelu nabídek.</strong> Měl by žít v panelu nabídek, ne v okně v docku. Mrknete nahoru, upravíte a vrátíte se k práci. Bez přepínání aplikací.</li>
</ul>

<h2>Kdo to potřebuje</h2>

<p>Kdokoli, kdo dělá víc zvukových věcí najednou. To je většina lidí, ale platí to hlavně pro:</p>

<ul>
  <li><strong>Lidi pracující na dálku</strong> — kombinace hovorů, hudby a notifikací je nejčastější zdroj kolizí</li>
  <li><strong>Streamery a podcastery</strong> — potřebují přesně řídit, co slyší publikum a co slyší oni sami</li>
  <li><strong>Hudebníky a producenty</strong> — potřebují oddělit výstup z DAW od referenčních skladeb a komunikačních nástrojů</li>
  <li><strong>Hráče</strong> — zvuk hry, Discord a hudba vyžadují neustálé vyvažování</li>
  <li><strong>Každého, koho unavují notifikace</strong> — ztlumit Slack a nechat všechno ostatní beze změny</li>
</ul>

<h2>SoundDial</h2>

<p>Vytvořil jsem <strong>SoundDial</strong>, protože mixér hlasitosti pro Mac, jaký jsem chtěl, prostě neexistoval. Sídlí v panelu nabídek, zobrazuje každou aplikaci, která vydává zvuk, a každé dává vlastní posuvník. Ztlumení jednotlivých aplikací, zesílení hlasitosti, profily a automatické ztišení, které sníží hudbu, jakmile začne hovor. Jednorázový nákup, macOS 14+, bez předplatného.</p>

<p>Mixér hlasitosti, který by macOS měl mít vestavěný od výroby.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Jak na Macu ztlumit Slack, aniž byste ztlumili všechno ostatní",
    description: "Notifikace ze Slacku vám pořád ruší soustředění, ale hudbu ani hovory ztišit nechcete. Ukážeme vám, jak na macOS ztlumit jen Slack.",
    date: "2026-05-24",
    readTime: "5 min čtení",
    content: `
<p>Jste ponoření do práce. Spotify hraje dokonalý playlist na soustředění. Pak — <em>ťuk ťuk</em> — pípne Slack. A znovu. A znovu. Tři kanály, dvě zprávy a notifikace z vlákna za třicet vteřin. Chcete ztlumit Slack, ale nechat si hudbu. macOS na to říká: buď ztlumte všechno, nebo nic.</p>

<p>Zvuky notifikací Slacku patří mezi nejčastější zvukové stížnosti lidí pracujících na dálku na Macu. Jsou navržené tak, aby upoutaly vaši pozornost, což je přesně problém ve chvíli, kdy se potřebujete soustředit.</p>

<h2>Možnost 1: Ztlumit notifikace přímo ve Slacku</h2>

<p>Slack má funkci „Pozastavit notifikace":</p>
<ol>
  <li>Klikněte na svou profilovou fotku v postranním panelu Slacku</li>
  <li>Klikněte na „Pozastavit notifikace"</li>
  <li>Vyberte dobu trvání (30 minut, 1 hodina, 2 hodiny atd.)</li>
</ol>

<p>Tím se na zvolenou dobu potlačí odznaky notifikací i zvuky. Jednotlivé kanály můžete ztlumit také kliknutím pravým tlačítkem → „Ztlumit kanál".</p>

<p><strong>Omezení:</strong> U každého kanálu je to buď/anebo. Slack nemůžete udělat <em>tišší</em> — jen úplně ztlumit, nebo nechat zapnutý naplno. A pokud zapomenete pozastavení zrušit, po skončení soustředěné práce vám unikají zprávy. Navíc to nepotlačí zvuky přímo v aplikaci, pokud máte Slack otevřený.</p>

<h2>Možnost 2: Vypnout zvuky Slacku v notifikacích macOS</h2>

<p>Přejděte do Nastavení systému → Oznámení → Slack. Vypněte přepínač „Přehrát zvuk s oznámeními".</p>

<p><strong>Omezení:</strong> Tím natrvalo (dokud to znovu nezapnete) zmizí všechny zvuky notifikací Slacku. A týká se to jen notifikací na úrovni macOS — pokud Slack přehrává zvuky přes svůj vlastní zvukový engine, toto nastavení je nemusí zachytit všechny.</p>

<h2>Možnost 3: Použít režim Soustředění</h2>

<p>Vytvořte si režim Soustředění „Práce" nebo podobný v Nastavení systému → Soustředění. Přidejte Slack do seznamu „Ztišeno". Jakmile režim Soustředění aktivujete, notifikace ze Slacku se potlačí.</p>

<p><strong>Omezení:</strong> Režimy Soustředění potlačí notifikace vizuálně i zvukově, ale nedávají vám jemné ovládání hlasitosti. Nemůžete říct „notifikace Slacku na 10 % hlasitosti" — je to buď úplně povoleno, nebo úplně ztlumeno.</p>

<h2>Možnost 4: Hlasitost pro jednotlivé aplikace (skutečné řešení)</h2>

<p>Ve skutečnosti chcete jednoduchou věc: snížit hlasitost Slacku na 10–15 % a všechno ostatní nechat na normální úrovni. Pípnutí Slacku uslyšíte, pokud po nich posloucháte, ale nenaruší vám soustředění. Hudba zůstane na plné hlasitosti. Hovory zůstanou na plné hlasitosti.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dá Slacku vlastní nezávislý posuvník hlasitosti. Nastavte ho na úroveň, která vám vyhovuje — nebo ho jedním kliknutím úplně ztlumte. Jakmile budete zase chtít Slacku věnovat pozornost, zrušte ztlumení a hlasitost se vrátí tam, kde byla.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial with Slack muted and Spotify playing at normal volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ideální workflow pro Slack</h3>
<ul>
  <li><strong>Čas na soustředění:</strong> Slack na 10 % nebo ztlumený. Spotify na 40 %. Žádné vyrušování.</li>
  <li><strong>Čas na dostupnost:</strong> Slack na 40 %. Notifikace jsou znatelné, ale ne leknoucí.</li>
  <li><strong>Čas na schůzky:</strong> Slack ztlumený. Zoom na 100 %. O zbytek se postará automatické ztišení.</li>
</ul>

<p>Každé z těchto nastavení si uložte jako <strong>profil hlasitosti</strong> v SoundDialu a mezi nimi přepínejte jedním kliknutím. Ještě lepší je použít automatické ztišení — když začne hovor, SoundDial automaticky sníží hlasitost úplně všeho (včetně Slacku) a po skončení hovoru ji obnoví.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> — jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Jak si na Macu nastavit profily hlasitosti pro různé situace",
    description: "Různá nastavení hlasitosti pro schůzky, soustředěnou práci, hraní a odpočinek — přepínatelná jedním kliknutím. Ukážeme si, jak profily hlasitosti fungují na macOS.",
    date: "2026-06-02",
    readTime: "5 min čtení",
    content: `
<p>V 9 ráno jste na hovoru na Zoomu — chcete Zoom na 100 %, Spotify ztlumené, Slack ztlumený. V 10 hodin hovor skončí — chcete Spotify na 40 %, Slack na 15 %, na Zoomu nezáleží. V poledne hrajete — hra na 60 %, Discord na 100 %, všechno ostatní ztlumené. V 18 hodin sledujete YouTube — prohlížeč na 80 %, všechno ostatní potichu.</p>

<p>Každá situace má jiné ideální nastavení hlasitosti. A pokaždé, když se situace změní, museli byste ručně upravit pět nebo šest aplikací. Nebo si každé nastavení uložíte jako profil a přepnete jedním kliknutím.</p>

<h2>Co jsou profily hlasitosti?</h2>

<p>Profil hlasitosti je uložený snímek hlasitosti a stavu ztlumení každé aplikace. Nastavíte si aplikace, jak chcete — Spotify na 30 %, Zoom na 100 %, Slack ztlumený — a pak to uložíte jako pojmenovaný profil, třeba „Práce" nebo „Schůzka". Později profil aplikujete a každá aplikace okamžitě skočí na uloženou hlasitost.</p>

<p>Představte si to jako přednastavení displeje, ale pro zvuk: podobně jako můžete mít uspořádání displeje pro „práci u stolu" a „prezentační režim", profily hlasitosti vám umožní přepínat mezi zvukovými konfiguracemi bez ručního nastavování každé aplikace.</p>

<h2>macOS profily hlasitosti nemá</h2>

<p>macOS má režimy Soustředění (Nerušit, Práce, Osobní atd.), které řídí, jaké notifikace se k vám dostanou. Ty ale hlasitost neovládají. Dokážou zvuky notifikací úplně potlačit, ale neumí nastavit Spotify na 30 % nebo Zoom na 100 %. Vestavěný způsob, jak uložit a obnovit nastavení hlasitosti pro jednotlivé aplikace, prostě neexistuje.</p>

<h2>Nastavení profilů v SoundDialu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> má vestavěný systém profilů. Takhle ho nastavíte:</p>

<h3>Vytvoření profilu</h3>
<ol>
  <li>Otevřete SoundDial z panelu nabídek</li>
  <li>Nastavte hlasitost každé aplikace tak, jak ji chcete mít pro danou situaci</li>
  <li>Klikněte na tlačítko „+" v sekci profilů</li>
  <li>Zadejte název (např. „Schůzka") a vyberte ikonu</li>
  <li>Hotovo — aktuální nastavení hlasitosti je uložené</li>
</ol>

<h3>Přepínání profilů</h3>
<p>Uložené profily se zobrazí jako tlačítka v okně SoundDialu. Klikněte na jeden z nich a každá aplikace se okamžitě přepne na hlasitost uloženou v daném profilu. Jedno kliknutí nahradí pět nebo šest ručních úprav.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume profiles — one-click switching between Meeting, Focus, and Chill modes on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Příklady profilů</h3>

<p><strong>Schůzka</strong></p>
<ul>
  <li>Zoom / Teams: 100 %</li>
  <li>Spotify: ztlumené</li>
  <li>Slack: ztlumený</li>
  <li>Prohlížeč: ztlumený</li>
</ul>

<p><strong>Soustředěná práce</strong></p>
<ul>
  <li>Spotify: 35 %</li>
  <li>Slack: 10 %</li>
  <li>Mail: ztlumený</li>
  <li>Prohlížeč: 50 %</li>
</ul>

<p><strong>Hraní</strong></p>
<ul>
  <li>Hra: 60 %</li>
  <li>Discord: 100 %</li>
  <li>Spotify: 20 %</li>
  <li>Všechno ostatní: ztlumené</li>
</ul>

<p><strong>Odpočinek</strong></p>
<ul>
  <li>Spotify: 70 %</li>
  <li>Prohlížeč: 60 %</li>
  <li>Notifikace: 20 %</li>
</ul>

<h3>Aktualizace profilů</h3>
<p>Pokud se vaše preferované hlasitosti postupem času změní, jednoduše upravte posuvníky a profil aktualizujte. Až ho příště použijete, uplatní se nové nastavení.</p>

<h2>Profily + automatické ztišení = plná automatizace</h2>

<p>Když zkombinujete profily s funkcí automatického ztišení v SoundDialu, na hlasitost skoro nikdy nemusíte sahat. Ráno aplikujete profil „Soustředěná práce". Jakmile přijde hovor, automatické ztišení sníží hlasitost všeho kromě aplikace pro hovor. Po skončení hovoru se všechno vrátí na úroveň vašeho profilu. Na konci dne jedním kliknutím přepnete na „Odpočinek".</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> — jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Zoom Call Volume Too Low on Mac? How to Boost It",
    description: "You can barely hear people on Zoom even at max volume. Here's every fix — from Zoom settings to boosting call audio beyond 100% with a per-app volume mixer.",
    date: "2026-05-26",
    readTime: "6 min čtení",
    content: `
<p>You're on a Zoom call. The other person is talking, but their voice is barely audible. Your Mac volume is at maximum. Zoom's speaker volume is at maximum. You're leaning into your screen, straining to hear. This shouldn't be this hard.</p>

<p>Low Zoom call volume is extremely common, and it has multiple causes. Let's walk through every fix, from simple settings checks to boosting Zoom's audio past its normal limit.</p>

<h2>1. Check Zoom's audio output settings</h2>

<p>Open Zoom → Settings → Audio. Under "Speaker," make sure:</p>
<ul>
  <li>The correct output device is selected (not an inactive monitor or disconnected device)</li>
  <li>The speaker volume slider is at maximum</li>
  <li>Click "Test Speaker" to verify you can hear the test tone clearly</li>
</ul>

<p>If the test tone is also quiet, the issue is between Zoom and your speakers — continue with the fixes below. If the test tone is fine but actual calls are quiet, the other participant likely has a microphone issue on their end.</p>

<h2>2. Check your Mac's output device</h2>

<p>Go to System Settings → Sound → Output. Make sure the right device is selected. If you recently connected/disconnected headphones, a display, or Bluetooth devices, macOS might have auto-switched to an unexpected output.</p>

<h2>3. Disable Zoom's automatic volume adjustment</h2>

<p>Zoom has an "Automatically adjust microphone volume" setting (Settings → Audio) that can also affect perceived output levels in some configurations. Try disabling it and testing again.</p>

<h2>4. Disable background noise suppression (temporarily)</h2>

<p>Zoom's noise suppression aggressively filters background noise — but in doing so, it can sometimes reduce the perceived loudness of the other person's voice, especially in quiet environments. Try setting "Suppress background noise" to "Low" or "Auto" instead of "High."</p>

<h2>5. Check Bluetooth codec</h2>

<p>If you're using AirPods or Bluetooth headphones, joining a Zoom call forces macOS to switch from the high-quality AAC codec to the lower-quality SCO codec (because Zoom uses your mic). SCO reduces audio quality and can make call audio sound quieter and more compressed.</p>

<p><strong>Fix:</strong> Use a separate microphone (built-in Mac mic or USB mic) while keeping AirPods as the output device. This prevents the codec switch — AirPods stay in AAC mode with better audio quality and volume.</p>

<h2>6. Reset Core Audio</h2>

<p>macOS's audio daemon sometimes gets into a state where output levels are reduced, especially after sleep/wake or device switches. Open Terminal and run:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Audio will restart after a brief interruption. Rejoin the Zoom call and check if volume has improved.</p>

<h2>7. Boost Zoom's volume past 100%</h2>

<p>If you've tried everything above and Zoom is still too quiet, the problem might be that Zoom's audio output simply isn't loud enough for your setup. Some participants have quiet microphones, and there's only so much Zoom can do to amplify their signal.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you boost any app's volume to <strong>200%</strong> — including Zoom. If a participant is too quiet, drag Zoom's slider to 150% or 180%. The audio signal is amplified beyond Zoom's built-in maximum, making even the quietest voices audible.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Zoom call volume to 180% on Mac for clearer audio during video calls" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>The key advantage: boosting Zoom doesn't affect anything else. Your music, notifications, and other apps stay at their current levels. Only Zoom gets louder.</p>

<p>This also works for <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong>, and any other calling app. If you can hear it, SoundDial can boost it.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Jak na Macu ztišit Spotify, aniž byste ztišili všechno ostatní",
    description: "Chcete mít Spotify jako hudbu na pozadí, jenže když ho ztlumíte klávesami hlasitosti, ztiší se i váš hovor a všechno ostatní. Tady je řešení.",
    date: "2026-05-30",
    readTime: "4 min čtení",
    content: `
<p>Pracujete. Spotify hraje hudbu na pozadí. Je trochu moc nahlas — přebíjí podcast v jiné kartě nebo vám ztěžuje soustředění. Zmáčknete klávesu pro snížení hlasitosti. Spotify ztichne. Jenže ztichne i všechno ostatní — váš hovor na Zoomu, zvuky notifikací, zvuk v prohlížeči. Všechno tišeji. A to jste nechtěli.</p>

<p>Děje se to proto, že macOS má jen jeden ovladač hlasitosti. Stisknete klávesu hlasitosti a ta upraví <em>systémovou hlasitost</em>, která škáluje všechny aplikace stejně. Vestavěnými ovladači nejde říct „ztlum jen Spotify".</p>

<h2>Náhradní řešení: hlasitost přímo ve Spotify</h2>

<p>Spotify má vlastní posuvník hlasitosti v pravém dolním rohu aplikace (nebo dole v přehrávači). Ten můžete ztlumit nezávisle na systémové hlasitosti. Pokud je systémová hlasitost na 80 % a posuvník ve Spotify na 30 %, Spotify bude ve výsledku hrát na 24 %, zatímco všechno ostatní zůstane na 80 %.</p>

<p><strong>Problém:</strong> Musíte přepnout do okna Spotify, najít posuvník, upravit ho a pak se přepnout zpátky k tomu, co jste dělali. A posuvník ve Spotify je malý, nepřesný a nezobrazuje procenta — jen vizuální lištu. Pokud jste na schůzce a potřebujete rychle ztlumit hudbu, tápání s malým posuvníkem v jiné aplikaci není zrovna ideální.</p>

<h2>Skutečné řešení: hlasitost pro jednotlivé aplikace</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> umístí posuvník hlasitosti pro každou aplikaci do panelu nabídek. Chcete-li ztlumit Spotify, aniž byste ovlivnili cokoliv jiného:</p>

<ol>
  <li>Klikněte na ikonu SoundDialu v panelu nabídek</li>
  <li>Najděte Spotify v seznamu</li>
  <li>Přetáhněte jeho posuvník dolů</li>
</ol>

<p>Hotovo. Spotify je tišší. Zoom beze změny. Notifikace beze změny. Všechno ostatní beze změny. Neopustili jste přitom aktuální aplikaci — okno v panelu nabídek se otevře přímo tam, kde jste.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial lowering Spotify volume independently while keeping other apps at full volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Ještě lepší: uložte si to jako profil</h2>

<p>Pokud chcete mít Spotify při práci pravidelně tišší na pozadí, uložte si preferované nastavení hlasitosti jako profil. Vytvořte si profil „Práce" se Spotify na 25 %, Zoomem na 100 % a Slackem na 15 %. Až příště usednete k práci, aplikujte profil jedním kliknutím místo ručního nastavování každé aplikace zvlášť.</p>

<h2>Ještě lepší: automatické ztišení během hovorů</h2>

<p>SoundDial umí automaticky ztlumit Spotify, jakmile se připojíte k hovoru. Zapněte automatické ztišení v nastavení, zvolte, o kolik se má zvuk na pozadí snížit (výchozí hodnota je 30 %), a o zbytek se postará SoundDial. Vaše hudba se ztiší, jakmile hovor začne, a vrátí se zpět, jakmile skončí. Žádné ruční nastavování.</p>

<p>Tohle je workflow, které by měl macOS podporovat nativně: „Spotify na téhle úrovni, všechno ostatní na tamté." Protože ho Apple nevytvořil, tuto mezeru zaplňuje <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>.</p>

<p>Jednorázový nákup na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Bez předplatného. macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Does macOS Tahoe Have Per-App Volume Control?",
    description: "macOS Tahoe (macOS 26) brought major updates, but did Apple finally add a volume mixer? Here's the answer — and how to get per-app volume control right now.",
    date: "2026-06-12",
    readTime: "4 min čtení",
    content: `
<p>Every year, Mac users hope the next macOS release will finally include a volume mixer. Every year, they're disappointed. With macOS Tahoe (macOS 26), Apple delivered a redesigned interface, new system features, and major under-the-hood improvements. But did they add per-app volume control?</p>

<h2>The short answer: no</h2>

<p>macOS Tahoe does not include a built-in volume mixer. There is no per-app volume control in System Settings, Control Center, or the menu bar. The audio experience is the same as every macOS release before it: one system volume slider that controls everything at once.</p>

<p>Apple's Control Center still shows a single volume slider. The Sound preferences in System Settings still let you pick an output device and adjust one master volume. There's no hidden feature, no advanced option, and no new API that exposes per-app volume to users.</p>

<h2>What macOS Tahoe did improve for audio</h2>

<p>While per-app volume is still missing, Tahoe did bring some audio-related improvements:</p>

<ul>
  <li><strong>Improved Bluetooth audio stability</strong> — fewer disconnections and codec switching issues with AirPods and third-party headphones</li>
  <li><strong>Better spatial audio processing</strong> — enhanced head tracking and more accurate spatial rendering for supported content</li>
  <li><strong>Core Audio performance</strong> — lower latency for professional audio applications and music production</li>
</ul>

<p>None of these address the fundamental request: "Let me turn down Spotify without affecting Zoom."</p>

<h2>Will Apple ever add a volume mixer?</h2>

<p>There's no indication Apple plans to add this feature. It hasn't appeared in any macOS beta, WWDC session, or known roadmap. Apple's audio design philosophy continues to favor simplicity — one slider for everything.</p>

<p>The irony is that Apple's own Core Audio framework fully supports per-process audio tapping and volume control. The Audio Tap API introduced in macOS 14 (Sonoma) made it even easier for developers to build per-app audio tools. Apple built the infrastructure — they just haven't built the user interface for it.</p>

<h2>How to get per-app volume control on macOS Tahoe</h2>

<p>Since Apple won't build it, third-party apps fill the gap. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is a native macOS menu bar app that gives you a volume mixer — independent volume sliders for every running application.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial providing per-app volume control on macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial is fully compatible with macOS Tahoe and uses Apple's modern Core Audio Tap API — no third-party audio drivers or kernel extensions required. It works cleanly with macOS's security model and doesn't interfere with other audio apps.</p>

<p>What you get:</p>
<ul>
  <li><strong>Per-app volume sliders</strong> — 0% to 200% for every app</li>
  <li><strong>Per-app mute</strong> — one click to silence any app</li>
  <li><strong>Volume profiles</strong> — save configurations and switch instantly</li>
  <li><strong>Auto-ducking</strong> — background audio lowers automatically during calls</li>
  <li><strong>Volume boost</strong> — amplify quiet apps beyond 100%</li>
  <li><strong>Volume memory</strong> — remembers each app's volume between restarts</li>
  <li><strong>Keyboard shortcuts</strong> — toggle the mixer or mute all from the keyboard</li>
</ul>

<p>One-time purchase on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. No subscription. macOS 14.2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Jak na Macu poslouchat hudbu z reproduktorů a zároveň telefonovat ve sluchátkách",
    description: "Chcete mít Spotify na stolních reproduktorech a Zoom zároveň v AirPods? macOS vám to neusnadní — tady je to, co skutečně funguje.",
    date: "2026-05-15",
    readTime: "5 min čtení",
    content: `
<p>Tohle je rozumná věc, kterou byste mohli chtít udělat: pouštět hudbu přes stolní reproduktory a zároveň mít hovor na Zoomu přes AirPods. Hudba naplní místnost, hovor zůstane soukromý ve vašich uších. Dává to dokonalý smysl.</p>

<p>macOS na to říká ne. Když vyberete výstupní zvukové zařízení, používají ho <em>všechny</em> aplikace. Přepnete na AirPods kvůli Zoomu a Spotify se přepne na AirPods taky. Přepnete na reproduktory kvůli Spotify a Zoom se přepne na reproduktory taky. Jedno výstupní zařízení pro všechno. Bez výjimek.</p>

<h2>Proč to macOS nativně neumí</h2>

<p>macOS směruje veškerý zvuk přes jedno zvolené výstupní zařízení. V Nastavení systému → Zvuk → Výstup vyberete „Reproduktory MacBooku Pro" nebo „AirPods Pro" a každá aplikace posílá zvuk do tohoto zařízení. Vestavěné směrování zvuku pro jednotlivé aplikace neexistuje.</p>

<p>Z hlediska jednoduchosti to dává smysl — většina lidí chce mít veškerý zvuk z jednoho místa. Ale tento přístup se hroutí ve chvíli, kdy chcete mít různé aplikace na různých výstupech.</p>

<h2>Náhradní řešení: agregované zařízení</h2>

<p>Nastavení Audio MIDI v macOS (najdete ho v Aplikace → Utility) umožňuje vytvořit „agregované zařízení", které spojí více výstupů do jednoho. Agregované zařízení ale posílá <em>stejný zvuk</em> do všech spojených výstupů — nemůžete si vybrat, která aplikace půjde na který výstup. Je navržené pro sestavy s více reproduktory, ne pro směrování podle aplikací.</p>

<h2>Náhradní řešení: víceúčelové výstupní zařízení</h2>

<p>Podobně jako agregované zařízení můžete v Nastavení Audio MIDI vytvořit i „víceúčelové výstupní zařízení" (Multi-Output Device). To posílá identický zvuk současně do více výstupů. Zase je to stejný zvuk všude — tímto způsobem nemůžete nasměrovat Spotify na reproduktory a Zoom na sluchátka.</p>

<h2>Co skutečně funguje: aplikace pro směrování zvuku podle aplikací</h2>

<p>Abyste skutečně mohli směrovat různé aplikace do různých výstupních zařízení, potřebujete aplikaci třetí strany pro směrování zvuku, která zachytí zvuk každé aplikace a pošle ho na vámi zvolený výstup. Tohle podporují aplikace jako SoundSource (od Rogue Amoeba) — umožňují přiřadit konkrétní výstupní zařízení jednotlivým aplikacím.</p>

<h2>Jednodušší přístup: oddělení pomocí hlasitosti</h2>

<p>Pokud je vaším hlavním cílem slyšet hovor zřetelně přes hudbu (a ne fyzicky směrovat zvuk do různých zařízení), hlasitost pro jednotlivé aplikace vyřeší problém jednodušeji.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dá každé aplikaci vlastní posuvník hlasitosti. Během hovoru tak můžete:</p>

<ul>
  <li>Nastavit Zoom/Teams/FaceTime na <strong>100 %</strong></li>
  <li>Ztlumit Spotify na <strong>20 %</strong></li>
  <li>Ztlumit všechno ostatní</li>
</ul>

<p>Váš hovor je křišťálově čistý. Hudba je jen jemné pozadí. Přepínání zařízení není potřeba.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing Zoom at full volume and Spotify lowered during a call on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Ještě lepší je, že <strong>automatické ztišení</strong> v SoundDialu tohle zvládne samo. Jakmile se připojíte k hovoru, detekuje aktivaci mikrofonu a sníží hlasitost všech aplikací na pozadí na vámi nastavenou úroveň (výchozí je 30 %). Po skončení hovoru se všechno vrátí do normálu. Ruční nastavování posuvníků není potřeba.</p>

<p>Pro většinu lidí tohle vyřeší skutečný problém — „přes hudbu neslyším svůj hovor" — bez komplikovaného směrování různých aplikací do různých fyzických zařízení.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> — jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac Volume Keeps Changing By Itself: How to Fix It",
    description: "Your Mac's volume randomly jumps up, drops down, or resets to a different level. Here's every known cause and how to stop it.",
    date: "2026-05-18",
    readTime: "6 min čtení",
    content: `
<p>You set your Mac volume to a comfortable level. You look away. When you come back, it's different. Louder. Quieter. Reset to maximum. It keeps happening, and you can't figure out why.</p>

<p>This is one of the most frustrating Mac audio issues because it feels random. But it's almost never actually random — there's always a specific trigger. Here are all the known causes and how to fix each one.</p>

<h2>1. Bluetooth device reconnection</h2>

<p>This is the most common cause. When a Bluetooth device (AirPods, speakers, headphones) connects or disconnects, macOS resets the volume to whatever level was last used with that device. So if you were at 30% on your speakers and your AirPods auto-connect, the volume might jump to 80% (the last AirPods level).</p>

<p><strong>Fix:</strong> macOS remembers volume levels per output device. Each time you switch, set it where you want it. Over time, the right levels will be remembered for each device. If a Bluetooth device is auto-connecting unexpectedly, go to System Settings → Bluetooth and remove devices you don't actively use.</p>

<h2>2. HDMI/DisplayPort output</h2>

<p>Connecting or disconnecting an external display via HDMI or DisplayPort can cause volume changes. Some displays are also audio output devices, and macOS switches to them automatically. When the display sleeps or disconnects, macOS switches back to speakers and may reset the volume.</p>

<p><strong>Fix:</strong> Go to System Settings → Sound → Output and check if macOS is auto-switching to your display's speakers. If you don't want audio through your display, select your preferred output device manually. Some displays can have their audio output disabled in their own OSD (on-screen display) settings.</p>

<h2>3. An app is changing the volume</h2>

<p>Some apps adjust the system volume programmatically. Zoom, for example, has an "Automatically adjust microphone volume" setting that can also affect output volume. Music apps, podcast apps, and some games may also adjust volume when they launch or when specific events occur.</p>

<p><strong>Fix:</strong> Check your recently opened apps for audio-related settings. In Zoom: Settings → Audio → uncheck "Automatically adjust microphone volume." In Spotify: check if volume normalization is causing perceived volume changes (Settings → Playback → Normalize volume).</p>

<h2>4. Keyboard or Touch Bar accidental presses</h2>

<p>If you have a keyboard with volume keys (every Mac keyboard does), accidental presses — or a stuck key — can change the volume. The Touch Bar on older MacBook Pro models is particularly prone to accidental volume changes from brushing against it.</p>

<p><strong>Fix:</strong> Check if a volume key is stuck by watching the volume indicator while not touching anything. For Touch Bar models, customize the Touch Bar in System Settings → Keyboard → Touch Bar Settings to remove the volume slider or move it to a less accessible position.</p>

<h2>5. macOS audio daemon reset</h2>

<p>After sleep/wake cycles, macOS's audio daemon (coreaudiod) sometimes restarts and resets volume to a default or previously cached level. This is a system-level bug that appears in various macOS versions.</p>

<p><strong>Fix:</strong> If volume resets consistently after waking from sleep, try restarting coreaudiod manually:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>If the issue persists across macOS updates, it may be resolved in a future update. In the meantime, using a tool that remembers and restores per-app volume levels can compensate.</p>

<h2>6. Accessibility settings</h2>

<p>Some Accessibility features can interfere with audio. Check System Settings → Accessibility → Audio for any unexpected settings. Also check if VoiceOver or Switch Control is partially enabled — these can produce unexpected volume behaviors.</p>

<h2>Lock your per-app volumes with SoundDial</h2>

<p>Even if you can't prevent macOS from changing the system volume, you can protect your <em>per-app</em> volume balance. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> remembers the volume level of every app independently. When an app restarts or when your Mac wakes from sleep, SoundDial restores each app to its saved volume.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial remembering per-app volume levels across restarts on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>This means even if the system volume changes, your app-level balance stays consistent:</p>
<ul>
  <li>Spotify stays at 40% regardless of system volume changes</li>
  <li>Zoom stays at 100% even after reconnecting Bluetooth</li>
  <li>Slack stays muted even after a restart</li>
</ul>

<p>Combined with <strong>volume profiles</strong>, you can instantly restore your preferred volume configuration for any situation — one click to get back to exactly where you want to be, regardless of what macOS did while you weren't looking.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Nejlepší aplikace pro mixování hlasitosti na Macu v roce 2026",
    description: "Přímočaré srovnání všech aplikací pro Mac, které umožňují ovládat hlasitost jednotlivých aplikací zvlášť. Funkce, ceny a která z nich se skutečně vyplatí používat.",
    date: "2026-06-12",
    readTime: "10 min čtení",
    content: `
<p>macOS nemá vestavěný mixér hlasitosti. Pokud chcete ovládat hlasitost jednotlivých aplikací – ztlumit Spotify, aniž by to ovlivnilo Zoom, umlčet Slack, aniž byste umlčeli úplně vše – potřebujete aplikaci třetí strany.</p>

<p>Existuje několik možností. Tento návod porovnává ty nejvýznamnější podle funkcí, ceny, kompatibility a skutečné použitelnosti. Žádné affiliate odkazy, žádné sponzorované výběry.</p>

<h2>Na co byste se měli zaměřit</h2>

<p>Než začneme aplikace porovnávat, tady je to, na čem u mixéru hlasitosti pro Mac záleží:</p>

<ul>
  <li><strong>Posuvníky hlasitosti pro jednotlivé aplikace</strong> – nezávislé ovládání pro každou spuštěnou aplikaci</li>
  <li><strong>Rozsah hlasitosti</strong> – umí jít pod 100 % I nad 100 % (zesílení)?</li>
  <li><strong>Ztlumení jednotlivých aplikací</strong> – umlčení jedné aplikace bez zásahu do její nastavené hlasitosti</li>
  <li><strong>Profily</strong> – uložení a přepínání mezi konfiguracemi hlasitosti</li>
  <li><strong>Automatické ztišení (auto-ducking)</strong> – automatické snížení hlasitosti hudby během hovorů</li>
  <li><strong>Integrace do lišty menu</strong> – rychlý přístup bez přepínání mezi aplikacemi</li>
  <li><strong>Kompatibilita s macOS</strong> – funguje na nejnovější verzi macOS</li>
  <li><strong>Cenový model</strong> – jednorázová platba vs. předplatné</li>
</ul>

<h2>Možnosti na výběr</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> je nativní aplikace pro lištu menu macOS, zaměřená na to, aby jednu věc dělala pořádně: ovládání hlasitosti jednotlivých aplikací.</p>

<ul>
  <li><strong>Hlasitost jednotlivých aplikací:</strong> Ano, 0 % až 200 %</li>
  <li><strong>Ztlumení jednotlivých aplikací:</strong> Ano, jedním kliknutím</li>
  <li><strong>Zesílení hlasitosti:</strong> Ano, až do 200 %</li>
  <li><strong>Profily:</strong> Ano, s vlastními názvy a ikonami</li>
  <li><strong>Automatické ztišení:</strong> Ano, s nastavitelnou úrovní ztišení</li>
  <li><strong>Klávesové zkratky:</strong> Ano (přepnutí mixéru, ztlumení všeho)</li>
  <li><strong>Přepínání výstupního zařízení:</strong> Ano, ze stejného panelu</li>
  <li><strong>Zapamatování hlasitosti:</strong> Ano, pamatuje si hlasitost každé aplikace i po restartu</li>
  <li><strong>Cena:</strong> 14,99 € jednorázově (žádné předplatné) – méně než polovina ceny SoundSource</li>
  <li><strong>Vyžaduje:</strong> macOS 14.2+</li>
  <li><strong>Dostupné na:</strong> Mac App Store (recenzováno Applem, v sandboxu, bez systémových ovladačů)</li>
</ul>

<p>SoundDial využívá moderní rozhraní Apple Core Audio Tap API pro čisté ovládání zvuku na úrovni jednotlivých procesů. Je nenáročný, běží kompletně v liště menu a nevyžaduje složité nastavení. Za 14,99 € je výrazně levnější než SoundSource (39 $), přitom nabízí funkce, které SoundSource postrádá – profily hlasitosti a automatické ztišení. A protože je na Mac App Store, je recenzovaný Applem, běží v sandboxu a instaluje se čistě, bez stahování DMG souborů nebo instalace systémových zvukových ovladačů.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – mixér hlasitosti pro jednotlivé aplikace se samostatnými posuvníky hlasitosti na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>SoundSource (Rogue Amoeba)</h3>

<p>SoundSource je jedním z nejstarších a nejzavedenějších zvukových nástrojů pro Mac. Je výkonný a bohatý na funkce, cílí na pokročilé uživatele a zvukové profesionály.</p>

<ul>
  <li><strong>Hlasitost jednotlivých aplikací:</strong> Ano</li>
  <li><strong>Ztlumení jednotlivých aplikací:</strong> Ano</li>
  <li><strong>Zesílení hlasitosti:</strong> Ano</li>
  <li><strong>Ekvalizér pro jednotlivé aplikace:</strong> Ano (vestavěný i podpora AU pluginů)</li>
  <li><strong>Směrování výstupu jednotlivých aplikací:</strong> Ano (posílání různých aplikací do různých reproduktorů)</li>
  <li><strong>Profily:</strong> Bez vestavěného systému profilů</li>
  <li><strong>Automatické ztišení:</strong> Ne</li>
  <li><strong>Cena:</strong> 39 USD (jednorázově, větší aktualizace mohou vyžadovat další platbu)</li>
  <li><strong>Vyžaduje:</strong> macOS 12+ (instaluje systémový zvukový ovladač)</li>
</ul>

<p>SoundSource je nejvýkonnější volbou, pokud potřebujete ekvalizér pro jednotlivé aplikace a řetězce zvukových efektů. Instaluje systémový zvukový ovladač (ACE), který zachytává zvuk – díky tomu je velmi schopný, ale zároveň invazivnější. Cena 39 $ je vyšší než u většiny alternativ a chybí automatické ztišení i systém profilů.</p>

<h3>Background Music (zdarma, open source)</h3>

<p>Background Music je bezplatná open-source aplikace, která nabízí základní ovládání hlasitosti jednotlivých aplikací. Je oblíbenou volbou právě proto, že je zdarma.</p>

<ul>
  <li><strong>Hlasitost jednotlivých aplikací:</strong> Ano</li>
  <li><strong>Ztlumení jednotlivých aplikací:</strong> Ano</li>
  <li><strong>Zesílení hlasitosti:</strong> Ne (pouze 0–100 %)</li>
  <li><strong>Automatická pauza hudby:</strong> Ano (pozastaví hudbu, když jiná aplikace přehrává zvuk)</li>
  <li><strong>Profily:</strong> Ne</li>
  <li><strong>Automatické ztišení:</strong> Ne (automatická pauza je něco jiného než auto-ducking)</li>
  <li><strong>Cena:</strong> Zdarma</li>
  <li><strong>Vyžaduje:</strong> macOS 10.13+ (instaluje virtuální zvukové zařízení)</li>
</ul>

<p>Background Music je solidní bezplatnou volbou pro základní ovládání hlasitosti jednotlivých aplikací. Nebyl ale pravidelně aktualizován pro novější verze macOS. Uživatelé hlásí problémy na macOS Sequoia a Tahoe – zvukové artefakty, selhání instalace virtuálního zvukového zařízení nebo to, že aplikace nedetekuje některé programy. Navíc neumí zesílit hlasitost nad 100 %, nemá profily ani automatické ztišení.</p>

<h3>eqMac</h3>

<p>eqMac je primárně ekvalizér, který navíc obsahuje i některé funkce pro mixování hlasitosti.</p>

<ul>
  <li><strong>Hlasitost jednotlivých aplikací:</strong> Omezená (zaměřeno na ekvalizér, ne na mixování)</li>
  <li><strong>Systémový ekvalizér:</strong> Ano, s více pásmy k nastavení</li>
  <li><strong>Zesílení hlasitosti:</strong> Ano</li>
  <li><strong>Profily:</strong> Předvolby ekvalizéru (nikoli profily hlasitosti)</li>
  <li><strong>Automatické ztišení:</strong> Ne</li>
  <li><strong>Cena:</strong> Bezplatná verze + placené předplatné Pro</li>
  <li><strong>Vyžaduje:</strong> macOS 10.14+</li>
</ul>

<p>eqMac je lepší volbou, pokud je vaší hlavní potřebou systémová ekvalizace (zesílení basů, úprava výšek atd.), nikoli ovládání hlasitosti jednotlivých aplikací. Jeho funkce pro mixování hlasitosti jsou až druhořadé vůči funkcím ekvalizéru.</p>

<h2>Rychlé srovnání v tabulce</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Funkce</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Background Music</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Hlasitost jednotlivých aplikací</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Zesílení hlasitosti (200 %)</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Profily hlasitosti</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Automatické ztišení</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Ekvalizér pro jednotlivé aplikace</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Směrování výstupu jednotlivých aplikací</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Klávesové zkratky</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Vyžaduje systémový ovladač</td>
  <td style="text-align:center;padding:10px 12px;">Ne</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
  <td style="text-align:center;padding:10px 12px;">Ano</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Cena</td>
  <td style="text-align:center;padding:10px 12px;">Jednorázově</td>
  <td style="text-align:center;padding:10px 12px;">39 $</td>
  <td style="text-align:center;padding:10px 12px;">Zdarma</td>
</tr>
</tbody>
</table>

<h2>Kterou variantu si vybrat?</h2>

<ul>
  <li><strong>Pokud chcete ovládání hlasitosti jednotlivých aplikací, profily a automatické ztišení:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> – nejkomplexnější mixér hlasitosti za tuto cenu, s funkcemi (profily, automatické ztišení), které chybí i dražším alternativám.</li>
  <li><strong>Pokud potřebujete ekvalizér a směrování zvuku pro jednotlivé aplikace:</strong> SoundSource – nejvýkonnější volba určená zvukovým profesionálům, kteří potřebují řetězce efektů a směrování výstupu jednotlivých aplikací.</li>
  <li><strong>Pokud chcete něco zdarma a jednoduchého:</strong> Background Music – slušná volba pro jednoduché ovládání hlasitosti jednotlivých aplikací, ale může mít problémy s kompatibilitou na novějších verzích macOS a chybí jí zesílení, profily i automatické ztišení.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube Too Quiet in Safari or Chrome on Mac? Fix It Instantly",
    description: "Some YouTube videos are barely audible even at max volume. Here's why browser audio is often quieter than other apps — and how to boost it past 100% on Mac.",
    date: "2026-05-22",
    readTime: "5 min čtení",
    content: `
<p>You click on a YouTube video. The creator is speaking, but you can barely hear them. System volume is at max. YouTube's player volume is at max. You lean closer to your speakers. Still too quiet. You open Spotify — music blasts at full volume. So it's not your speakers. It's YouTube. Or more precisely, it's the video.</p>

<p>This is incredibly common, and it's not a bug. Some YouTube videos are just mastered at a lower volume than others, and macOS gives you no way to selectively boost browser audio.</p>

<h2>Why some YouTube videos are so quiet</h2>

<h3>The video was recorded at low volume</h3>
<p>Not every creator has professional audio equipment. A video recorded with a laptop microphone from across a room will be significantly quieter than one recorded with a proper condenser mic. YouTube normalizes volume to some degree (their "loudness normalization" targets -14 LUFS), but this doesn't fully compensate for extremely quiet source audio.</p>

<h3>YouTube's loudness normalization</h3>
<p>YouTube automatically adjusts video volume so loud and quiet videos play at roughly the same level. For loud videos, this means turning them down. For quiet videos, it means turning them up — but only to a point. If the source audio is very quiet, normalization can only do so much without introducing noise.</p>

<h3>Browser audio is a second-class citizen on macOS</h3>
<p>Safari and Chrome handle audio differently than dedicated media apps. They output through the browser's audio engine, which has its own volume ceiling. There's no way to boost a browser tab's audio from within macOS. The browser is one app with one volume level — even if you have ten tabs playing audio at different levels.</p>

<h2>Quick fixes to try</h2>

<h3>Check YouTube's player volume</h3>
<p>Hover over the speaker icon on the YouTube player and make sure the slider is at maximum. It's easy to accidentally drag this down, and it resets independently of your system volume.</p>

<h3>Disable YouTube's loudness normalization</h3>
<p>YouTube doesn't offer a user-facing toggle for loudness normalization. However, some browser extensions can bypass it. Search your browser's extension store for "YouTube volume normalizer" or "YouTube audio enhancer."</p>

<h3>Try a different browser</h3>
<p>Safari and Chrome handle audio differently. If a video is too quiet in one browser, try the other. Chrome in particular handles audio through a separate process (the "renderer"), which can sometimes result in lower output.</p>

<h2>The real fix: boost browser volume beyond 100%</h2>

<p>The underlying problem is that macOS doesn't let you boost a specific app's volume past 100%. Your browser is maxed out, but "maxed out" isn't loud enough.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> solves this by giving every app — including Safari and Chrome — an independent volume slider that goes from 0% to <strong>200%</strong>. If a YouTube video is too quiet, drag your browser's slider to 150% or 180%. The audio is amplified in real-time without affecting any other app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Safari browser volume to 180% for quiet YouTube videos on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>This is especially useful because:</p>
<ul>
  <li><strong>It's instant.</strong> Click the menu bar icon, drag the slider. You don't need to install a browser extension or change any settings.</li>
  <li><strong>It's per-app.</strong> Boosting Chrome doesn't make Spotify louder. Each app stays independent.</li>
  <li><strong>It works with any browser.</strong> Safari, Chrome, Firefox, Arc, Brave — if it's an app on your Mac, SoundDial can control it.</li>
  <li><strong>It goes up to 200%.</strong> Double the normal volume ceiling. Even the quietest video becomes audible.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac Notification Sounds Too Loud in Headphones? Here's the Fix",
    description: "Slack pings and macOS alerts are painfully loud in your headphones while your music is fine. Here's why notification volume is different — and how to tame it.",
    date: "2026-05-25",
    readTime: "5 min čtení",
    content: `
<p>You're wearing headphones, listening to music at a comfortable 40% volume. A Slack notification fires. <em>DING.</em> It's deafeningly loud compared to your music. Your ears ring. You rip off your headphones.</p>

<p>This happens because macOS doesn't let you separately control the volume of notifications versus media. Your music might be at a comfortable level, but alert sounds — Slack pings, Mail notifications, Calendar reminders, macOS system sounds — blast at full intensity relative to your system volume.</p>

<h2>Why notifications sound louder than music</h2>

<p>Notification sounds are short, sharp audio bursts designed to get your attention. They have high peak volume by design. Music, by contrast, has a wide dynamic range — quieter passages, louder passages, and an overall mastered level that's meant for sustained listening.</p>

<p>When your system volume is at 40%, your music sits at 40% of its mastered level — which might be a comfortable 60-70 dB in your headphones. But a notification ding at 40% system volume might still hit 80+ dB because the notification sound file itself is mastered at a much higher peak level. The system volume scales both equally by percentage, but their starting levels are very different.</p>

<p>In headphones, this is worse. The sound is going directly into your ear canal with no room to dissipate, so the perceived volume difference between quiet music and a sharp notification ping is amplified.</p>

<h2>Built-in ways to reduce notification volume</h2>

<h3>Lower the alert volume</h3>
<p>macOS has a separate "Alert volume" slider buried in settings. Go to <strong>System Settings → Sound</strong> and look for the <strong>Alert volume</strong> slider. This controls the volume of system sounds and alerts separately from the main volume.</p>
<p><strong>Limitation:</strong> This only affects macOS system alerts (like error beeps and Trash sounds). It doesn't affect notification sounds from apps like Slack, Discord, or Teams, which play their own audio through their own audio engine.</p>

<h3>Disable notification sounds per app</h3>
<p>Go to <strong>System Settings → Notifications</strong>, select the app that's too loud, and toggle off "Play sound for notifications." This silences that app's notifications entirely.</p>
<p><strong>Limitation:</strong> It's all-or-nothing. You can't make Slack notifications <em>quieter</em> — only fully on or fully off. And you lose the audio cue that tells you something happened without looking at your screen.</p>

<h3>Use Focus modes</h3>
<p>Focus modes (Do Not Disturb, Work, etc.) can suppress notification sounds from all or selected apps. This works during deep focus sessions but isn't practical all day — you'd miss important notifications.</p>

<h2>The real fix: control notification app volume independently</h2>

<p>What you actually want is simple: make Slack quieter without making your music quieter. Lower notification app volumes to 15% while keeping Spotify at 50%. macOS doesn't let you do this.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> does. It gives every app its own volume slider, so you can set notification-heavy apps like Slack, Mail, and Calendar to a much lower volume while keeping your media apps at a comfortable level.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing Slack at low volume and Spotify at normal volume — independent notification control on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>A typical headphone-friendly setup</h3>
<ul>
  <li><strong>Spotify / Music</strong> — 50% (comfortable listening level)</li>
  <li><strong>Slack</strong> — 15% (noticeable but not startling)</li>
  <li><strong>Mail</strong> — 10% (subtle ping, won't jolt you)</li>
  <li><strong>Calendar</strong> — 20% (enough to notice, not painful)</li>
  <li><strong>Zoom / FaceTime</strong> — 90% (clear call audio)</li>
  <li><strong>Browser</strong> — 40% (matching music level for video playback)</li>
</ul>

<p>Save this as a "Headphones" profile in SoundDial and apply it with one click whenever you plug in. Create a separate "Speakers" profile with different ratios for when you're working at your desk.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Jak zabránit tomu, aby Zoom ztišoval hudbu na Macu",
    description: "Pokaždé, když se připojíte k hovoru v Zoomu, hudba se ztlumí nebo úplně zmizí. Vysvětlíme, proč se to děje a jak si sami určit, co se během hovorů ztiší.",
    date: "2026-05-28",
    readTime: "6 min čtení",
    content: `
<p>Připojíte se k hovoru v Zoomu. Spotify hrálo v příjemné hlasitosti. Hovor se spojí a – vaše hudba zmizí nebo klesne téměř k nule. Sami jste nic nezměnili. Zoom (nebo macOS) se rozhodl ztišit vaši hudbu za vás, bez ptaní.</p>

<p>Lidi to přivádí k šílenství, protože je to neviditelné a automatické. Nic jste neztlumili. Nehýbali jste žádným posuvníkem. Něco v systému rozhodlo, že vaše hudba má být tišší, a vy nemáte žádný zřejmý způsob, jak to ovlivnit.</p>

<p>Tady je vysvětlení, co se skutečně děje, a jak si vzít kontrolu zpět.</p>

<h2>Proč hudba ztiší během hovorů v Zoomu</h2>

<p>Existují dvě možné příčiny:</p>

<h3>1. Vestavěné ztišování zvuku v Zoomu</h3>
<p>Zoom má vlastní zpracování zvuku, které může ovlivnit i ostatní zvuky ve vašem systému. V některých konfiguracích Zoom sníží systémovou hlasitost ve chvíli, kdy aktivuje váš mikrofon, aby byl zvuk hovoru čistší. V nastavení Zoomu to není vždy zřejmé.</p>

<p>Zkontrolujte Zoom → Nastavení → Zvuk (Settings → Audio):</p>
<ul>
  <li>Najděte volbu „Automaticky upravovat hlasitost mikrofonu“ (Automatically adjust microphone volume) a zkuste ji vypnout</li>
  <li>Zkontrolujte „Potlačit šum na pozadí“ (Suppress background noise) – tato funkce zpracovává zvuk a může ovlivnit vnímanou hlasitost</li>
  <li>Ujistěte se, že volba „Použít samostatné zvukové zařízení pro simultánní tlumočení“ (Use separate audio device for simultaneous interpretation) je nezaškrtnutá, pokud ji nepotřebujete</li>
</ul>

<h3>2. Přepínání kodeku v macOS</h3>
<p>Když Zoom aktivuje váš mikrofon (zejména u bezdrátových sluchátek Bluetooth, jako jsou AirPods), macOS přepne z kvalitního zvukového kodeku AAC na méně kvalitní kodek SCO. Tato změna kodeku často sníží celkovou hlasitost i kvalitu zvuku. Není to vysloveně chyba Zoomu – stává se to u jakékoli aplikace, která používá mikrofon přes Bluetooth.</p>

<p>Pokud používáte AirPods nebo jiná bezdrátová sluchátka a hlasitost klesne ve chvíli, kdy hovor začne, je to pravděpodobně tato příčina.</p>

<h2>Vestavěná řešení</h2>

<h3>Používejte drátová sluchátka</h3>
<p>Problém s přepínáním kodeku Bluetooth u drátových sluchátek úplně zmizí. Adaptér USB-C na sluchátka nebo headset s vestavěným mikrofonem se přepínání AAC→SCO zcela vyhne. Kvalita zvuku zůstane stejná před hovorem, během něj i po něm.</p>

<h3>Používejte samostatný mikrofon</h3>
<p>Pokud místo mikrofonu v AirPods použijete vestavěný mikrofon Macu (nebo externí USB mikrofon), macOS nemusí přepínat kodek Bluetooth. Nastavte vstupní zařízení na vestavěný mikrofon v Nastavení systému → Zvuk → Vstup, přičemž AirPods ponecháte jako výstup. Díky tomu AirPods zůstanou v režimu AAC a hlasitost zůstane nedotčená.</p>

<h3>Upravte zvuková nastavení Zoomu</h3>
<p>V Zoom → Nastavení → Zvuk vyzkoušejte vypnutí automatické úpravy mikrofonu a potlačení šumu na pozadí. Tyto funkce mohou zasahovat do hlasitosti zvuku v ostatních aplikacích.</p>

<h2>Skutečné řešení: automatické ztišení podle vašich pravidel</h2>

<p>Zásadní problém je, že nemáte kontrolu nad tím, <em>o kolik</em> se hudba během hovorů ztiší. Toto rozhodnutí dělá systém za vás, a obvykle je příliš razantní – hudba klesne téměř na nulu místo příjemné úrovně na pozadí.</p>

<p>Ve skutečnosti chcete nastavitelné automatické ztišení: „když jsem na hovoru, sniž hudbu na 25 % – ne na nulu, ne na 50 %, přesně na 25 %.“</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám přesně toto umožňuje. Jeho funkce automatického ztišení sleduje váš mikrofon a automaticky upraví zvuk na pozadí ve chvíli, kdy hovor začne – ale <strong>úroveň ztišení určujete vy</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Nastavení automatického ztišení v SoundDial – nastavitelné snížení hlasitosti během hovorů v Zoomu na Macu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Jak to funguje</h3>
<ol>
  <li>Nastavíte si preferovanou úroveň ztišení (10 % až 80 %)</li>
  <li>Připojíte se k hovoru v Zoomu – aktivuje se váš mikrofon</li>
  <li>SoundDial rozpozná hovor a sníží hlasitost aplikací na pozadí na vámi nastavenou úroveň</li>
  <li>Zvuk hovoru zůstane na plné hlasitosti</li>
  <li>Zavěsíte – všechny aplikace se vrátí na svou předchozí hlasitost</li>
</ol>

<p>Rozdíl oproti přístupu Zoomu/macOS:</p>
<ul>
  <li><strong>Úroveň si volíte sami.</strong> 30 % je dobrá výchozí hodnota – hudba je slyšet, ale neruší. Můžete nastavit cokoli od 10 % (téměř tichá) po 80 % (jen mírně ztišená).</li>
  <li><strong>Dokonale obnoví předchozí stav.</strong> Když hovor skončí, každá aplikace se vrátí přesně tam, kde byla.</li>
  <li><strong>Funguje se všemi komunikačními aplikacemi.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Můžete ho vypnout.</strong> Pokud chcete hlasitost pro konkrétní hovor ovládat ručně, stačí v nastavení SoundDial vypnout automatické ztišení.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázová platba 14,99 €, žádné předplatné, macOS 14.2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "AirPods Volume Too Low on Mac? Every Fix Explained",
    description: "AirPods sound quiet on your Mac even at full volume? Here are all the causes — from headphone safety limits to Bluetooth quirks — and how to fix them.",
    date: "2026-06-08",
    readTime: "7 min čtení",
    content: `
<p>Your AirPods work fine on your iPhone. They're plenty loud. But plug them into your Mac — wirelessly, obviously — and suddenly everything is too quiet. System volume is at max. Spotify is at max. The AirPods just... aren't loud enough.</p>

<p>This is one of the most common audio complaints from Mac users with AirPods. The good news: it's almost always fixable. The bad news: there are about six different things that can cause it, and you might need to check all of them.</p>

<h2>1. Headphone Safety is limiting your volume</h2>

<p>This is the most common cause. macOS has a built-in feature that caps headphone volume to protect your hearing.</p>

<p>Go to <strong>System Settings → Sound → Headphone Safety</strong>.</p>

<p>If "Reduce Loud Audio" is enabled, macOS is actively limiting how loud your AirPods can get. It measures sound exposure over time and reduces volume if it thinks you've been listening too loudly for too long.</p>

<p><strong>Fix:</strong> Disable "Reduce Loud Audio" entirely, or raise the decibel threshold to a higher level. You'll immediately notice more volume headroom.</p>

<h2>2. Bluetooth volume is out of sync</h2>

<p>Bluetooth audio has two separate volume controls: one on the Mac side and one on the AirPods side. These are supposed to be synchronized, but sometimes they get out of sync — the Mac shows 100% but the AirPods are actually receiving a lower volume signal.</p>

<p><strong>Fix:</strong> Disconnect your AirPods (System Settings → Bluetooth → click the "i" next to your AirPods → Disconnect), wait five seconds, then reconnect. This resets the volume synchronization. Also try putting the AirPods back in their case, closing the lid, waiting ten seconds, then taking them out again.</p>

<h2>3. The audio codec switched to a lower quality</h2>

<p>When you use your AirPods' microphone (for a call, Siri, or dictation), macOS switches from the high-quality AAC codec to the lower-quality SCO codec. SCO was designed for phone calls — it reduces audio quality and can also affect perceived volume.</p>

<p><strong>Fix:</strong> If you're not on a call but the audio sounds both quiet and low-quality, disconnect and reconnect your AirPods. macOS should switch back to the AAC codec for music playback. If you're on a call, this is expected behavior — the codec will switch back automatically when the call ends.</p>

<h2>4. One AirPod is quieter than the other</h2>

<p>If volume feels low because one AirPod is noticeably quieter, the issue might be physical — earwax or debris blocking the speaker mesh.</p>

<p><strong>Fix:</strong> Clean your AirPods gently with a dry, lint-free cloth. For the speaker mesh, use a dry soft-bristled brush. Don't use liquids, compressed air, or sharp objects. Also check <strong>System Settings → Accessibility → Audio</strong> — make sure the left/right audio balance slider is centered.</p>

<h2>5. The app itself is outputting low volume</h2>

<p>Some apps have their own internal volume controls that are separate from the system volume. Spotify, VLC, YouTube, and Zoom all have independent volume sliders. If the app's internal volume is at 50%, you're only getting half the volume — even if macOS and your AirPods are at 100%.</p>

<p><strong>Fix:</strong> Check the volume control inside whatever app you're using and make sure it's maxed out.</p>

<h2>6. Core Audio is in a bad state</h2>

<p>macOS's audio daemon (coreaudiod) can occasionally get stuck in a state where Bluetooth audio is routed incorrectly or at a reduced level, especially after sleep/wake or switching between multiple audio devices.</p>

<p><strong>Fix:</strong> Open Terminal and run:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Audio will drop for a second and restart. Your AirPods may reconnect at a more normal volume level.</p>

<h2>Still too quiet? Boost AirPods volume beyond 100%</h2>

<p>If you've checked all six causes above and your AirPods are still not loud enough, you might need volume amplification — boosting the audio signal beyond what macOS normally allows.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you boost any app's volume up to <strong>200%</strong>. If Spotify is too quiet through your AirPods, drag Spotify's slider to 150% or 180% in SoundDial. The audio signal is amplified before it's sent to your AirPods, effectively making them louder than Apple intended.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting app volume for AirPods on Mac with per-app volume sliders up to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>The advantage of per-app boosting: you can boost the quiet app without making everything else louder. If your video call is fine at 100% but Spotify needs 170%, SoundDial lets you set each independently.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Spotify Volume Too Low on Mac? Here's Every Fix",
    description: "Spotify at max volume but still too quiet on your Mac? This guide covers every cause — from Spotify's built-in limiter to macOS settings — and how to boost it past 100%.",
    date: "2026-06-11",
    readTime: "7 min čtení",
    content: `
<p>Spotify is at full volume. Your Mac is at full volume. And it's still not loud enough. This is one of the most common Spotify complaints on Mac, and it has multiple causes — most of which aren't obvious.</p>

<p>This guide walks through every reason Spotify might be too quiet on your Mac and how to fix each one. Including how to boost Spotify's volume beyond 100% if nothing else works.</p>

<h2>Check Spotify's own volume slider first</h2>

<p>Spotify has an independent volume control in the bottom-right corner of the app (or bottom of the screen on the redesigned player). This slider is separate from your Mac's system volume. If it's at 50%, then Spotify is only outputting half its potential volume — even if your system volume is at 100%.</p>

<p><strong>Fix:</strong> Make sure Spotify's in-app volume slider is all the way to the right (100%).</p>

<h2>Check Spotify's volume normalization</h2>

<p>Spotify has a feature called <strong>Volume Normalization</strong> that automatically adjusts playback volume so all tracks play at roughly the same level. This is meant to prevent jarring volume jumps between songs, but it can also reduce the overall volume of louder tracks.</p>

<p>To check: Open Spotify → Settings → Playback → <strong>Normalize volume</strong>.</p>

<p>You have three options:</p>
<ul>
  <li><strong>Loud</strong> — least normalization, closest to original mastering levels</li>
  <li><strong>Normal</strong> — moderate normalization (default)</li>
  <li><strong>Quiet</strong> — most normalization, reduces volume further</li>
</ul>

<p><strong>Fix:</strong> If Spotify sounds too quiet, either disable normalization entirely or set it to "Loud." This is the single most common cause of Spotify being unexpectedly quiet.</p>

<h2>Check Spotify's audio quality setting</h2>

<p>Lower audio quality settings can sometimes result in quieter playback, especially on older audio hardware. Go to Spotify → Settings → Audio Quality and make sure you're using "Very High" (320 kbps) if you have a Premium subscription, or "High" (256 kbps) on the free tier.</p>

<h2>Check macOS headphone safety limits</h2>

<p>If you're using headphones (wired or Bluetooth), macOS may be limiting your volume. Go to <strong>System Settings → Sound → Headphone Safety</strong>. If "Reduce Loud Audio" is enabled, macOS is capping your headphone volume at a level it considers safe.</p>

<p><strong>Fix:</strong> Disable "Reduce Loud Audio" or raise the decibel threshold. Note: this setting only affects headphone output, not speakers.</p>

<h2>Check Bluetooth volume</h2>

<p>If you're using AirPods or Bluetooth speakers, there's a separate volume layer. Bluetooth devices have their own volume that's negotiated between the Mac and the device. Sometimes this gets out of sync.</p>

<p><strong>Fix:</strong> Disconnect and reconnect your Bluetooth device. Also check if the device has its own volume buttons — make sure those are at maximum too.</p>

<h2>Reset Core Audio</h2>

<p>macOS's audio system can occasionally get stuck in a low-volume state, especially after sleep/wake cycles or switching between output devices. Restarting the audio daemon often fixes this.</p>

<p>Open Terminal and run:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Audio will cut out for a second and restart. Try Spotify again — it may be louder.</p>

<h2>Boost Spotify beyond 100% with SoundDial</h2>

<p>If you've tried everything above and Spotify is still too quiet, the problem might be that Spotify's maximum output simply isn't loud enough for your setup. This is common with MacBook built-in speakers and some Bluetooth devices.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you boost any app's volume up to <strong>200%</strong> — including Spotify. It intercepts Spotify's audio stream and amplifies it beyond the app's built-in maximum, without affecting any other app's volume.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Spotify volume to 200% on macOS while keeping other apps at normal volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Here's the key difference: a system-wide volume boost would make <em>everything</em> louder — notifications, calls, system sounds — not just Spotify. SoundDial boosts Spotify <em>independently</em>. Set Spotify to 160% while your browser stays at 80% and Zoom stays at 100%.</p>

<h2>Bonus: auto-ducking for music during calls</h2>

<p>If the opposite problem also applies — Spotify is too loud during video calls — SoundDial's auto-ducking feature automatically lowers Spotify when you join a Zoom, Teams, or FaceTime call. When the call ends, Spotify returns to its previous volume. No manual adjustment needed.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Jak oddělit zvuk hry od Discordu na Macu",
    description: "Přehlušují exploze ve hře vaše spoluhráče na Discordu? Ukážeme, jak na macOS nezávisle ovládat hlasitost hry a hlasového chatu.",
    date: "2026-06-10",
    readTime: "6 min čtení",
    content: `
<p>Hrajete na Macu. Ve hře vybuchne exploze. Spoluhráči na Discordu mluví, ale přes střelbu je neslyšíte. Ztlumíte hlasitost – teď je tišší i Discord. Zase ji zvýšíte – exploze jsou zase ohlušující.</p>

<p>Na Windows byste otevřeli mixér hlasitosti, ztlumili hru na 40 % a Discord nechali na 100 %. Na Macu to nejde. macOS nabízí jeden posuvník hlasitosti pro úplně vše, takže zvuk hry a hlasový chat jsou trvale propojené.</p>

<p>Tento návod ukazuje, jak na Macu získat nezávislé ovládání hlasitosti pro hru a Discord (nebo jakýkoli jiný hlasový chat).</p>

<h2>Proč je to problém specifický pro Mac</h2>

<p>Windows má vestavěný mixér hlasitosti už od roku 2006, který umožňuje nezávisle ovládat hlasitost každé aplikace. macOS tuto funkci nikdy nepřidal. Zvuk všech aplikací se smíchá do jednoho proudu a jediné, co máte k dispozici, je jeden hlavní posuvník, který ovlivňuje vše stejně.</p>

<p>To znamená:</p>
<ul>
  <li>Pokud je hra příliš hlasitá, ztlumením se ztiší i Discord</li>
  <li>Pokud je Discord příliš tichý, zesílením se zesílí i hra</li>
  <li>Nemůžete najít rovnováhu, protože obě aplikace jsou svázané se stejnou hlasitostí</li>
</ul>

<h2>Řešení, která ve skutečnosti nefungují</h2>

<h3>Použití nastavení hlasitosti přímo ve hře</h3>
<p>Většina her má nabídku zvukových nastavení, kde lze nezávisle snížit hlavní hlasitost, hudbu, zvukové efekty i hlasový chat. Pomůže to, ale nastavení měníte přímo ve hře – musíte tedy pozastavit hraní, procházet menu a upravovat vše pokaždé, když se podmínky změní. A když přejdete na jinou hru, začínáte od začátku.</p>

<h3>Použití ovládání hlasitosti v Discordu</h3>
<p>Discord umožňuje upravit výstupní hlasitost v Nastavení → Hlas a video (Voice & Video) a hlasitost jednotlivých uživatelů lze upravit kliknutím pravým tlačítkem na jejich jméno. To ale ovládá pouze interní mix Discordu, ne jeho hlasitost vůči ostatním aplikacím. Pokud je hra příliš hlasitá, zesílení Discordu interně nepomůže, protože systémová hlasitost ovlivňuje oboje stejně.</p>

<h3>Použití různých výstupních zařízení</h3>
<p>Někteří lidé zkoušejí směrovat zvuk hry do reproduktorů a Discord do sluchátek (nebo naopak). macOS to neusnadňuje – potřebovali byste virtuální zvukové zařízení a ruční směrování pro jednotlivé aplikace. A nosit sluchátka, zatímco zároveň hrají reproduktory, je přinejlepším nepraktické.</p>

<h2>Skutečné řešení: ovládání hlasitosti jednotlivých aplikací</h2>

<p>Potřebujete možnost nastavit hlasitost hry nezávisle na hlasitosti Discordu. Přesně to dělá mixér hlasitosti pro jednotlivé aplikace.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sídlí v liště menu a dává každé aplikaci vlastní posuvník hlasitosti. Hru si můžete nastavit na 35 % a Discord na 100 % – nebo na jakýkoli poměr, který vám vyhovuje. Změníte jedno a druhé zůstane nedotčené.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial zobrazující nezávislé posuvníky hlasitosti pro hru a Discord na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Typické nastavení pro hraní</h3>
<ul>
  <li><strong>Hra</strong> – 30–50 % (dostatečně hlasitá pro pohlcení, ale ne ohromující)</li>
  <li><strong>Discord / hlasový chat</strong> – 90–100 % (vždy zřetelně slyšitelný přes zvuk hry)</li>
  <li><strong>Spotify / hudba</strong> – 15–25 % (jemné pozadí, nic neruší)</li>
  <li><strong>Prohlížeč</strong> – ztlumený (žádná překvapivá automaticky spuštěná videa)</li>
  <li><strong>Slack / oznámení</strong> – ztlumené (čas na soustředění)</li>
</ul>

<h3>Uložte si to jako profil</h3>
<p><strong>Profily hlasitosti</strong> v SoundDial umožňují tuto konfiguraci uložit a použít jedním kliknutím. Vytvořte si profil „Hraní“ s preferovaným poměrem hry a Discordu, profil „Práce“ pro hudbu a hovory, a mezi nimi okamžitě přepínejte. Žádné znovunastavování posuvníků pokaždé, když si sednete ke hře.</p>

<h3>Zesílení hlasitosti pro tichý hlasový chat</h3>
<p>Někdy problém není v tom, že je hra příliš hlasitá – ale v tom, že je Discord příliš tichý. Někteří spoluhráči mají špatné mikrofony, nebo je výstup Discordu tišší než u ostatních aplikací. SoundDial umožňuje zesílit hlasitost libovolné aplikace až na <strong>200 %</strong>, takže Discord můžete zesílit nad jeho běžné maximum, aniž byste se dotkli hlasitosti hry.</p>

<h2>Funguje s jakoukoli hrou a jakýmkoli hlasovým chatem</h2>

<p>SoundDial funguje s každou aplikací, která na macOS vytváří zvuk. Nezáleží na tom, zda hrajete přes Steam, App Store, Epic Games nebo hru v prohlížeči. Nezáleží na tom, zda používáte Discord, TeamSpeak, Mumble nebo FaceTime. Pokud to vydává zvuk, SoundDial to dokáže ovládat.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázová platba 14,99 €, žádné předplatné, macOS 14.2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Why Doesn't Mac Have a Volume Mixer Like Windows?",
    description: "Windows has had per-app volume control since 2006. It's 2026 and macOS still doesn't. Here's the real reason — and how to get one anyway.",
    date: "2026-06-09",
    readTime: "6 min čtení",
    content: `
<p>Every version of Windows since Vista (2006) has included a volume mixer. Right-click the speaker icon, click "Volume Mixer," and you see every app with its own volume slider. You can mute Chrome without affecting Spotify. You can lower Discord without touching your game.</p>

<p>On macOS? One slider. That's all you get. Twenty years of Mac updates — Ventura, Sonoma, Sequoia, Tahoe — and Apple has never added per-app volume control.</p>

<p>People ask this question constantly: <em>why doesn't Mac have a volume mixer?</em></p>

<h2>It's not a technical limitation</h2>

<p>Let's get this out of the way: macOS can absolutely do per-app volume control. The underlying audio framework — <strong>Core Audio</strong> — supports per-process audio tapping, routing, and gain adjustment at the API level. Apple introduced the <strong>Audio Tap API</strong> in macOS 14 (Sonoma), making it even easier for developers to intercept and modify individual app audio streams.</p>

<p>Third-party developers have been building per-app volume mixers for years using these APIs. The technology exists. Apple just hasn't built a user-facing version of it.</p>

<h2>So why hasn't Apple built it?</h2>

<p>Apple has never publicly explained why. But looking at their design patterns, the answer is fairly clear: <strong>Apple prioritizes simplicity over power-user features.</strong></p>

<p>One volume slider is simpler than twelve. It's easier to explain, easier to learn, and requires zero configuration. For a user who only does one thing at a time — listens to music OR takes a call OR watches a video — one slider works fine. Apple designs for this user first.</p>

<p>There's also a philosophical argument: Apple believes apps should manage their own audio. If Spotify is too loud, turn it down in Spotify. If Zoom is too quiet, turn it up in Zoom. The OS shouldn't need to mediate.</p>

<p>The problem is that this philosophy doesn't match reality. In 2026, everyone multitasks with audio:</p>

<ul>
  <li>Music playing while working</li>
  <li>Video calls with notifications pinging</li>
  <li>Browser tabs auto-playing ads</li>
  <li>Gaming with Discord running</li>
  <li>Podcasts in one ear, Slack in the other</li>
</ul>

<p>"Just adjust it in each app" means switching between six apps, finding six different volume controls (some of which don't exist), and doing this multiple times a day. It's the opposite of simple.</p>

<h2>Will Apple ever add it?</h2>

<p>There's no indication Apple plans to add a volume mixer in any upcoming macOS release. The feature hasn't appeared in any macOS beta, patent filing, or WWDC roadmap. Apple's Control Center in the menu bar still shows only the single system volume slider.</p>

<p>It's possible Apple adds it eventually — they've adopted features they initially rejected before (widgets, window tiling, multi-window iPad). But waiting for Apple means waiting indefinitely.</p>

<h2>How to get a volume mixer on Mac right now</h2>

<p>The answer is a third-party menu bar app. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is a native macOS volume mixer that does exactly what the Windows volume mixer does — plus more.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — the volume mixer for macOS, showing per-app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>What you get:</p>

<ul>
  <li><strong>Per-app volume sliders</strong> — every running app gets its own slider, 0% to 200%</li>
  <li><strong>Per-app mute</strong> — one click to silence any app, click again to unmute</li>
  <li><strong>Volume profiles</strong> — save configurations for different situations (Work, Focus, Gaming) and switch with one click</li>
  <li><strong>Auto-ducking</strong> — background audio automatically lowers when you join a call, and restores when you hang up</li>
  <li><strong>Volume boost to 200%</strong> — amplify quiet apps beyond their normal maximum</li>
  <li><strong>Keyboard shortcuts</strong> — toggle the mixer or mute all apps with a hotkey</li>
  <li><strong>Output device switching</strong> — switch between speakers, headphones, and external devices from the same panel</li>
  <li><strong>Volume memory</strong> — each app's volume is remembered between restarts</li>
</ul>

<p>It's the feature Apple should have built twenty years ago. One-time purchase on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. No subscription. macOS 14.2+.</p>

<p>The volume mixer macOS should have built in.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac Volume Too Low? How to Boost Sound Beyond 100%",
    description: "Your Mac is at full volume and it's still too quiet. Here's why that happens and how to amplify audio up to 200% without external speakers.",
    date: "2026-06-07",
    readTime: "8 min čtení",
    content: `
<p>Your Mac volume is at 100%. The slider is all the way to the right. And it's still not loud enough. The podcast is too quiet. The video call participant sounds like they're whispering. The YouTube video was recorded too low. You've maxed out — and it's not enough.</p>

<p>This is one of the most common audio complaints on Mac, especially with the built-in speakers on MacBook Air and older MacBook Pro models. The speakers are physically small, and some content is simply recorded at a lower level than others.</p>

<p>Here's why it happens and how to actually fix it — including how to boost your Mac's volume beyond the 100% limit.</p>

<h2>Why your Mac sounds too quiet at full volume</h2>

<p>There are several reasons your Mac might not be loud enough even at maximum volume:</p>

<h3>1. The content itself is quiet</h3>
<p>Not all audio is mastered at the same level. A professionally produced podcast might peak at -3 dB, while a casual YouTube video or a recorded Zoom call might peak at -20 dB. The difference is massive. When your system volume is at 100%, quiet content stays quiet — macOS can only amplify up to the original signal level.</p>

<h3>2. MacBook speakers have physical limits</h3>
<p>The built-in speakers in a MacBook Air or a 13" MacBook Pro are small. They're designed for portability, not volume. Apple's larger MacBook Pro models (14" and 16") have significantly better speakers, but even they have a ceiling. If you're used to external speakers or headphones, the built-in speakers will feel weak.</p>

<h3>3. Bluetooth volume is capped</h3>
<p>Some Bluetooth headphones and speakers have their own volume ceiling that's separate from macOS. Even if macOS shows 100%, the Bluetooth device might not be at its maximum. This is especially common with AirPods, where the EU volume limiter or the headphone safety feature in Settings → Sound → Headphone Safety can cap the output.</p>

<h3>4. Individual app volumes are low</h3>
<p>Some apps have their own internal volume control that's separate from the system volume. If Spotify's in-app volume is at 50% and the system volume is at 100%, you're effectively listening at 50%. Zoom often defaults to a conservative volume level for calls.</p>

<h2>Built-in fixes to try first</h2>

<h3>Check headphone safety limits</h3>
<p>Go to <strong>System Settings → Sound → Headphone Safety</strong>. If "Reduce Loud Audio" is enabled, macOS is actively limiting your volume to protect your hearing. You can disable this or raise the threshold. This only affects headphones — it doesn't touch speaker output.</p>

<h3>Check Bluetooth device volume</h3>
<p>Some Bluetooth devices have independent volume controls. For AirPods, make sure the volume on both the Mac and the AirPods is maxed. For third-party Bluetooth speakers, check if the speaker has its own volume button or app.</p>

<h3>Check in-app volume</h3>
<p>Open the app that's too quiet and look for its own volume slider. Spotify has one in the player bar. VLC has one in the playback controls. YouTube has one on the video player. Make sure these are at 100% before concluding that your Mac is the problem.</p>

<h3>Reset Core Audio</h3>
<p>Sometimes the macOS audio system gets into a bad state after sleep/wake cycles or device changes. Open Terminal and run:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>This restarts the audio daemon. Your audio will cut out for a second and come back, sometimes at a more normal level.</p>

<h2>How to boost volume beyond 100%</h2>

<p>If you've checked everything above and your Mac is still too quiet, you need volume amplification — the ability to push audio <em>above</em> the 100% ceiling that macOS imposes.</p>

<p>Volume boosting works by intercepting the audio signal before it reaches your speakers and multiplying its amplitude. At 150%, every audio sample is 1.5x louder than the original. At 200%, it's doubled. This can introduce slight distortion at extreme levels with certain content, but for quiet audio it's the only way to make it actually audible.</p>

<h3>SoundDial: per-app volume boost up to 200%</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives every app on your Mac an independent volume slider that goes from 0% to <strong>200%</strong>. If a specific app is too quiet — a podcast player, a browser tab, a video call — you can boost just that app beyond 100% without touching anything else.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume boost — per-app volume control with 200% amplification on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>This is particularly useful for:</p>
<ul>
  <li><strong>Quiet podcast apps</strong> — some players max out too low, especially with podcasts recorded in suboptimal conditions</li>
  <li><strong>Video calls with quiet participants</strong> — boost Zoom or Teams when someone's mic is low, without making your music louder</li>
  <li><strong>Browser tabs</strong> — YouTube videos, web apps, and embedded media often play at lower volumes than dedicated media apps</li>
  <li><strong>Old recordings</strong> — archival audio, vintage music, and older video content is often mastered at lower levels</li>
</ul>

<p>The key advantage over system-wide volume boosters is that SoundDial boosts <em>per app</em>. You can boost the quiet app to 180% while keeping everything else at normal levels. A system-wide booster would amplify everything equally, making your already-loud apps painfully loud while the quiet one gets slightly less quiet.</p>

<h2>When external solutions are better</h2>

<p>Volume boosting has limits. If you're trying to fill a room with sound from a MacBook Air's built-in speakers, no software can overcome the physical size of those speaker drivers. In that case:</p>

<ul>
  <li><strong>Wired headphones</strong> — bypass speaker limitations entirely, and most headphones can get louder than built-in speakers</li>
  <li><strong>External speakers</strong> — even a cheap pair of USB or Bluetooth speakers will outperform built-in MacBook speakers for raw volume</li>
  <li><strong>USB audio interface</strong> — for professional use, a dedicated audio interface provides a clean, powerful signal to studio monitors or headphones</li>
</ul>

<p>But for the everyday case — a browser tab that's too quiet, a call where someone's mumbling, a podcast that was recorded in a closet — software volume boosting with <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is the fastest fix. Click the menu bar icon, drag the slider past 100%, done.</p>

<p>One-time purchase on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. No subscription. macOS 14.2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Jak automaticky ztišit hudbu během hovorů v Zoomu na Macu",
    description: "Pokaždé, když začne hovor v Zoomu, spěcháte pozastavit Spotify. Existuje lepší způsob – automatické ztišení sníží hlasitost hudby samo, jakmile se aktivuje mikrofon.",
    date: "2026-06-05",
    readTime: "7 min čtení",
    content: `
<p>Hovor začíná. Sdílíte obrazovku. Hudba stále hraje na plno. Zoufale přepnete na Spotify, stisknete pauzu, přepnete zpět do Zoomu – ale všichni už slyšeli deset sekund z vaší playlisty. Stává se to všem, a děje se to proto, že macOS nemá žádné propojení mezi „právě začal hovor“ a „možná by bylo dobré ztišit hudbu“.</p>

<p>U některých telefonů je to automatické – hudba se při příchozím hovoru pozastaví nebo ztiší. Na Macu jste odkázáni sami na sebe. Pokud si tedy nenastavíte automatické ztišení.</p>

<h2>Co je to automatické ztišení (audio ducking)?</h2>

<p><strong>Audio ducking</strong> znamená automatické snížení hlasitosti zvuku na pozadí ve chvíli, kdy se děje něco důležitějšího – například hlasový hovor. Termín pochází z vysílací techniky, kde se hudba na pozadí „schová pod“ hlas moderátora.</p>

<p>V praxi to funguje takto:</p>
<ol>
  <li>Posloucháte hudbu na 50 % hlasitosti</li>
  <li>Připojíte se k hovoru v Zoomu</li>
  <li>Hudba automaticky klesne na 15 %</li>
  <li>Hovor slyšíte jasně, aniž byste cokoli ručně upravovali</li>
  <li>Hovor skončí</li>
  <li>Hudba se automaticky vrátí na 50 %</li>
</ol>

<p>Žádné přepínání aplikací. Žádné pozastavování. Žádné zapomínání zapnout hudbu zpátky po hovoru. Je to plně automatické.</p>

<h2>Má macOS vestavěné automatické ztišení?</h2>

<p>Ne. macOS nemá žádnou funkci automatického ztišení zvuku. V Nastavení systému, v Přístupnosti ani v režimech Soustředění (Focus) nic nepropojuje „mikrofon je aktivní“ se „snížit hlasitost zvuku na pozadí“. Apple to prostě nikdy nevytvořil.</p>

<p>V Přístupnosti existuje nastavení „Přehrávat stereo zvuk jako mono“ (Play stereo audio as mono) a možnosti vizuálních bleskových upozornění, ale nic, co by automaticky upravovalo hlasitost podle toho, zda jste na hovoru.</p>

<h2>Ruční alternativy (a proč jsou nepříjemné)</h2>

<h3>Ruční pozastavení hudby před každým hovorem</h3>
<p>Takto to dělá většina lidí. Funguje to – dokud na to nezapomenete. Nebo dokud vám někdo nezavolá nečekaně. Nebo dokud nemáte hovory jeden za druhým a Spotify pozastavujete a zase spouštíte dvanáctkrát denně. Znamená to také žádnou hudbu na pozadí během hovorů, i když byste ji třeba chtěli mít tiše puštěnou.</p>

<h3>Použití režimu Soustředění pro umlčení všeho</h3>
<p>Můžete si vytvořit režim Soustředění „Schůzka“, který blokuje zvuky upozornění. Režimy Soustředění ale neovládají hlasitost přehrávaného média. Hudba hraje dál na plno i v režimu Nerušit – Soustředění potlačuje pouze oznámení.</p>

<h3>Ruční nastavení profilů hlasitosti</h3>
<p>Vytvořte si nastavení „hovor“, kde ručně ztlumíte vše kromě komunikační aplikace před každým hovorem. Funguje to, ale vyžaduje to, abyste si to pokaždé pamatovali a ručně přepínali. A po hovoru musíte přepnout zpět.</p>

<h2>Automatické ztišení pomocí SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> má vestavěnou funkci automatického ztišení, která dělá přesně to, co by macOS měl umět nativně. Tady je, jak to funguje:</p>

<h3>Jak rozpoznává hovory</h3>
<p>SoundDial sleduje stav mikrofonu vašeho Macu – stejný ukazatel, který v liště menu zobrazí oranžovou tečku, když nějaká aplikace používá váš mikrofon. Jakmile zjistí, že komunikační aplikace aktivovala váš mikrofon, ví, že hovor začal.</p>

<p>Funguje se všemi hlavními komunikačními aplikacemi:</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Slack</strong> (huddly a hovory)</li>
  <li><strong>Google Meet</strong> (přes Chrome)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Co se stane, když hovor začne</h3>
<p>Ve chvíli, kdy se mikrofon aktivuje pro hovor, SoundDial automaticky sníží hlasitost všech nekomunikačních aplikací na vámi nastavenou úroveň – výchozí hodnota je 30 %. Zvuk hovoru zůstane na plné hlasitosti. Hudba na pozadí klesne na jemnou úroveň. Zvuky oznámení ztichnou.</p>

<p>V záhlaví SoundDial se objeví malý zelený indikátor potvrzující, že automatické ztišení je aktivní.</p>

<h3>Co se stane, když hovor skončí</h3>
<p>Když zavěsíte a mikrofon se deaktivuje, SoundDial obnoví hlasitost všech aplikací přesně tam, kde byla před začátkem hovoru. Hudba se vrátí zpět na 50 % (nebo na hodnotu, kterou jste měli nastavenou). Žádná ruční úprava není potřeba.</p>

<h3>Nastavení úrovně ztišení</h3>
<p>V nastavení SoundDial můžete upravit <strong>úroveň ztišení</strong> – o kolik se sníží hlasitost zvuku na pozadí během hovoru. Posuvník sahá od 10 % (sotva slyšitelné) po 80 % (stále dost výrazné). Výchozí hodnota 30 % funguje dobře pro většinu lidí: hudba je znát, ale nezasahuje do konverzace.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Funkce automatického ztišení v SoundDial snižující hlasitost hudby během hovoru v Zoomu na Macu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Proč je automatické ztišení lepší než pozastavování</h2>

<p>Pozastavení hudby před hovorem se zdá jednoduché, ale automatické ztišení je v několika ohledech lepší:</p>

<ul>
  <li><strong>Je automatické.</strong> Nikdy na to nezapomenete. Žádné zmatkování, když přijde neočekávaný hovor.</li>
  <li><strong>Hudbu na pozadí si zachováte.</strong> Mnoho lidí preferuje během hovorů tichou hudbu na pozadí místo úplného ticha. Automatické ztišení vám umožní ji nechat na příjemné úrovni.</li>
  <li><strong>Zvládá více aplikací najednou.</strong> Nejde jen o hudbu – zvuky oznámení, karty prohlížeče i jakékoli další zdroje zvuku se ztiší současně.</li>
  <li><strong>Dokonale obnoví předchozí stav.</strong> Když hovor skončí, každá aplikace se vrátí přesně na svou předchozí hlasitost. Nic nemusíte upravovat.</li>
  <li><strong>Funguje i u hovorů jednoho za druhým.</strong> Pokud máte tři schůzky za sebou, automatické ztišení je zvládne všechny, aniž byste se čehokoli dotkli.</li>
</ul>

<h2>Nastavení za necelou minutu</h2>

<ol>
  <li>Nainstalujte si <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial z Mac App Store</a></li>
  <li>Otevřete Nastavení → záložku Auto-Duck</li>
  <li>Zapněte automatické ztišení</li>
  <li>Nastavte posuvník úrovně ztišení podle svých preferencí</li>
  <li>A je to – automatické ztišení je aktivní</li>
</ol>

<p>Příště, když se připojíte k hovoru v Zoomu, Teams nebo FaceTime, zvuk na pozadí se automaticky ztiší. Když zavěsíte, vrátí se zpět. Jednorázová platba, žádné předplatné.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Jak ztlumit jednu aplikaci na Macu, aniž byste ztlumili úplně vše",
    description: "Slack vyzvání. Jste na hovoru. Chcete ztlumit Slack, ale hovor pořád slyšet. macOS vám to neumožní – ukážeme, jak to přesto zvládnout.",
    date: "2026-06-03",
    readTime: "6 min čtení",
    content: `
<p>Jste na hovoru v Zoomu. Slack pořád vydává zvuky oznámení. Karta YouTube, na kterou jste zapomněli, se spustí automaticky. Stisknete tlačítko ztlumení – a teď neslyšíte ani hovor. macOS ztlumí <em>úplně vše</em>. Neexistuje žádný vestavěný způsob, jak ztlumit jen jednu aplikaci.</p>

<p>Na Windows byste klikli pravým tlačítkem na ikonu reproduktoru, otevřeli mixér hlasitosti a klikli na tlačítko ztlumení vedle Slacku. Hotovo. Slack je tichý, vše ostatní hraje dál. macOS nemá nic obdobného.</p>

<p>Tento návod pokrývá všechny dostupné metody, jak na Macu ztlumit konkrétní aplikaci – od vestavěných obcházecích řešení až po jediné řešení, které skutečně funguje jako pořádné tlačítko ztlumení.</p>

<h2>Proč macOS neumí ztlumit jednotlivé aplikace</h2>

<p>macOS zachází se zvukem jako s jedním jediným proudem. Zvuk všech aplikací se smíchá dohromady dřív, než dorazí k reproduktorům, a jediné ovládání hlasitosti, které vám Apple dává, pracuje s tímto finálním smíchaným výstupem. Neexistuje způsob, jak zasáhnout do tohoto mixu a umlčet jednu aplikaci, aniž by to ovlivnilo ostatní.</p>

<p>Není to hardwarové omezení – je to designové rozhodnutí softwaru. Framework Core Audio v macOS podporuje ovládání zvuku na úrovni jednotlivých procesů na úrovni API. Apple k tomu prostě nevytvořil žádný způsob přístupu pro uživatele.</p>

<h2>Vestavěná obcházecí řešení (a jejich limity)</h2>

<h3>1. Vypněte oznámení pro danou aplikaci</h3>
<p>Přejděte do <strong>Nastavení systému → Oznámení</strong> a najděte aplikaci, kterou chcete umlčet. Můžete vypnout zvuky jejích oznámení, nebo oznámení úplně vypnout.</p>
<p><strong>Háček:</strong> Funguje to pouze pro zvuky oznámení. Pokud aplikace vydává i jiné zvuky – přehrávání médií, zvuk hovoru, zvuky uvnitř aplikace – tohle je neovlivní. A přijdete i o vizuální oznámení, nejen o zvuk.</p>

<h3>2. Použijte režim Soustředění</h3>
<p>Režimy Soustředění v macOS (Nerušit, Práce, Osobní atd.) mohou potlačit zvuky oznámení od konkrétních aplikací. V každém režimu Soustředění si můžete nastavit, které aplikace vás smí upozorňovat.</p>
<p><strong>Háček:</strong> Režimy Soustředění se týkají oznámení, nikoli zvuku. Neztlumí huddle na Slacku, kartu prohlížeče přehrávající zvuk ani jakékoli přehrávání médií. Navíc vyžadují předchozí nastavení pro každý režim – nemůžete si prostě „teď hned ztlumit tuhle aplikaci“.</p>

<h3>3. Zavřete aplikaci</h3>
<p>Nejradikálnější možnost. Pokud Slack úplně ukončíte, nemůže vydávat žádné zvuky. To samozřejmě znamená, že dokud ho znovu neotevřete, neuvidíte ani žádné zprávy.</p>
<p><strong>Háček:</strong> Nechcete aplikaci ukončit – chcete ji <em>dál používat</em>, jen ji neslyšet. Mezi „ztlumit“ a „zavřít“ je obrovský rozdíl.</p>

<h3>4. Použijte vlastní nastavení aplikace</h3>
<p>Některé aplikace mají volbu „ztlumit zvuky“ nebo „ztlumit oznámení“ schovanou někde v nastavení. Slack ji má pod Předvolby → Oznámení → Zvuk a vzhled (Preferences → Notifications → Sound & appearance). Spotify má v přehrávači ikonu reproduktoru.</p>
<p><strong>Háček:</strong> Musíte najít a projít nastavení každé aplikace zvlášť. Mnoho aplikací tuto možnost vůbec nemá. A přepínání mezi „ztlumeno“ a „neztlumeno“ znamená pokaždé znovu prohrabávat předvolby, místo pouhého kliknutí na jedno tlačítko.</p>

<h2>Skutečné řešení: tlačítko ztlumení pro každou aplikaci</h2>

<p>To, co ve skutečnosti chcete, je naprosto jednoduché: tlačítko ztlumení vedle každé aplikace, které ji okamžitě umlčí, aniž by to ovlivnilo cokoli jiného. Kliknutím ztlumíte, dalším kliknutím zapnete zpět. Aplikace běží dál, vidíte její obsah dál – jen ji neslyšíte.</p>

<p>Přesně to dělá mixér hlasitosti pro jednotlivé aplikace. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sídlí v liště menu a zobrazuje každou spuštěnou aplikaci s vlastním posuvníkem hlasitosti a tlačítkem ztlumení.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial zobrazující tlačítka ztlumení pro jednotlivé aplikace v liště menu macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Ztlumení jedné aplikace:</p>
<ol>
  <li>Klikněte na ikonu SoundDial v liště menu</li>
  <li>Najděte aplikaci, kterou chcete ztlumit</li>
  <li>Klikněte na ikonu reproduktoru vedle ní</li>
</ol>

<p>A je to. Aplikace je ztlumená. Vše ostatní hraje dál na stejné hlasitosti jako předtím. Dalším kliknutím na ikonu reproduktoru ztlumení zrušíte – hlasitost se vrátí přesně tam, kde byla předtím.</p>

<h2>Nejen ztlumení: ovládání hlasitosti jednotlivých aplikací</h2>

<p>Jakmile máte mixér pro jednotlivé aplikace, zjistíte, že ztlumení je jen krajní bod toho, co ve skutečnosti chcete. Většinou nechcete aplikaci úplně umlčet – chcete ji jen udělat <em>tišší</em>.</p>

<ul>
  <li>Oznámení Slacku na 15 % – dost jemná, aby nerušila, ale dost výrazná, aby byla znát</li>
  <li>Hudba na 30 % – úroveň pozadí, která nekonkuruje konverzaci</li>
  <li>Prohlížeč na 60 % – příjemná úroveň pro přehrávání videa</li>
  <li>Zoom na 100 % – plná hlasitost pro hovor, na kterém záleží</li>
</ul>

<p>SoundDial dává každé aplikaci posuvník od 0 % do 200 %. Aplikace tak můžete udělat tišší, než je jejich vestavěné minimum, nebo hlasitější, než je jejich vestavěné maximum. A díky <strong>profilům hlasitosti</strong> si můžete uložit oblíbenou konfiguraci a přepínat mezi předvolbami – režim „Schůzka“, režim „Soustředění“, režim „Hudba“ – jediným kliknutím.</p>

<p>Funkce automatického ztišení jde ještě dál: když začnete hovor, SoundDial automaticky ztiší vše kromě vaší komunikační aplikace. Když hovor skončí, vše se vrátí zpět nahoru. Posuvníku se ani nemusíte dotknout.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázová platba 14,99 €, žádné předplatné, macOS 14.2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Volume Mixer for Mac: The Missing Feature macOS Still Doesn't Have",
    description: "Windows has had a volume mixer since 2006. Here's why macOS still doesn't — and the best way to get per-app volume control on your Mac in 2026.",
    date: "2026-06-01",
    readTime: "9 min čtení",
    content: `
<p>Right-click the speaker icon on any Windows PC and you'll find the Volume Mixer — a panel that shows every application currently making sound, each with its own independent volume slider. You can turn Spotify down to 20% while keeping your Zoom call at 100%. You can mute Chrome without touching anything else. It's been there since Windows Vista in 2006.</p>

<p>Now do the same thing on a Mac. Click the sound icon in the menu bar. You get one slider. That's it. One slider that controls everything at once. Every app, every notification, every system sound — all locked together.</p>

<p>This isn't a niche complaint. It's the single most requested audio feature in macOS, and Apple has ignored it for twenty years.</p>

<h2>What a volume mixer actually does</h2>

<p>A volume mixer gives you <strong>independent volume control for every application</strong> on your computer. Instead of one master slider, you get one slider per app. Each slider only affects that specific app's audio output.</p>

<p>Here's what that looks like in practice:</p>

<ul>
  <li><strong>Spotify</strong> at 25% — background music at a comfortable level</li>
  <li><strong>Zoom</strong> at 100% — hear every word of the meeting</li>
  <li><strong>Slack</strong> muted — no notification dings during focus time</li>
  <li><strong>Safari</strong> at 60% — YouTube video at moderate volume</li>
  <li><strong>System Sounds</strong> at 10% — subtle feedback without startling you</li>
</ul>

<p>All of these running simultaneously, each at their own volume. Change one and nothing else moves. That's what a volume mixer does, and that's what macOS doesn't have.</p>

<h2>Why Apple hasn't built one</h2>

<p>It's not a technical limitation. macOS's audio framework — Core Audio — fully supports per-process audio routing and volume control at the API level. Apple uses these capabilities internally. They just haven't exposed them to users.</p>

<p>The likely reason is Apple's design philosophy: fewer options, simpler interface. One slider is cleaner than twelve. And for someone who only ever does one thing at a time — listens to music OR takes a call OR watches a video — one slider is fine.</p>

<p>But that's not how people use computers in 2026. Remote work means you're on a call with music playing and Slack pinging and a browser tab auto-playing a video, all at the same time. The "one slider for everything" model breaks down completely when you have five audio sources competing for your ears.</p>

<h2>The macOS workarounds (and why they fall short)</h2>

<h3>Use each app's built-in volume control</h3>
<p>Spotify has a volume slider. VLC has one. QuickTime has one. But this means switching to each app individually, finding its volume control, adjusting it, and switching back. It's scattered across a dozen different places, and most apps — Slack, Mail, Safari, Chrome — don't even have one.</p>

<h3>Use "Do Not Disturb" to silence notifications</h3>
<p>Focus modes can suppress notification sounds, but they're binary — everything or nothing. You can't say "keep Slack sounds but make them quieter." And Focus modes don't touch media or call volume at all.</p>

<h3>Use Audio MIDI Setup</h3>
<p>This built-in utility manages audio devices and sample rates. It has nothing to do with per-app volume. It's a device configuration tool, not a mixer.</p>

<h3>Create multi-output devices</h3>
<p>You can combine audio outputs into an aggregate device, but this sends the same audio to multiple outputs — it doesn't give you per-app control. It's useful if you want sound on both speakers and headphones simultaneously, but that's a completely different problem.</p>

<p>None of these workarounds solve the fundamental issue: macOS has no built-in way to say "make this app quieter without affecting anything else."</p>

<h2>What to look for in a Mac volume mixer</h2>

<p>If Apple won't build it, third-party apps will. But not all volume mixers are created equal. Here's what separates a good one from a mediocre one:</p>

<h3>Real-time app detection</h3>
<p>The mixer should automatically detect every app that's currently producing audio. You shouldn't have to manually add apps or configure anything. Open an app, and it appears in the mixer. Close it, and it disappears.</p>

<h3>Volume range beyond 100%</h3>
<p>Some apps are too quiet even at maximum volume — quiet podcast players, browser tabs with soft audio, video calls where someone's mic is low. A good mixer lets you <strong>boost volume up to 200%</strong>, effectively amplifying the audio beyond what the app itself can produce.</p>

<h3>One-click mute per app</h3>
<p>You should be able to mute any app with a single click — without moving the slider. When you unmute, it should return to exactly where it was. This is critical for quickly silencing a noisy app during a call.</p>

<h3>Profiles for different situations</h3>
<p>You don't want to manually adjust eight sliders every time you switch from "working with music" to "video call" to "gaming." Profiles let you save a volume configuration and apply it with one click. A "Meeting" profile might set Zoom to 100%, music to 15%, and notifications to 0%. A "Focus" profile might mute everything except Spotify.</p>

<h3>Auto-ducking during calls</h3>
<p>The best feature a volume mixer can have: automatically lower background audio when you join a call, and restore it when the call ends. No manual adjustment needed. Your music gets quiet when Zoom activates your microphone, and comes back when you hang up.</p>

<h3>Menu bar integration</h3>
<p>A volume mixer should live in the menu bar — one click to open, adjust, and close. It shouldn't be a full window, shouldn't take up Dock space, and shouldn't require you to switch away from your current app. You should be able to adjust volumes without losing focus on what you're doing.</p>

<h2>SoundDial: the volume mixer macOS should have built in</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is a native macOS menu bar app that gives you exactly what Apple won't — independent volume control for every app on your Mac.</p>

<p>It sits in your menu bar and shows every running application with its own volume slider. Drag a slider to adjust that app's volume from 0% to 200%. Click the speaker icon to mute it instantly. Switch between saved profiles for different situations. Enable auto-ducking and your music automatically gets quieter when a call starts.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume mixer for macOS showing individual app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Key features:</p>
<ul>
  <li><strong>Per-app volume sliders</strong> — 0% to 200% range for every running app</li>
  <li><strong>One-click mute</strong> — silence any app without moving its slider</li>
  <li><strong>Volume profiles</strong> — save and switch between volume configurations</li>
  <li><strong>Auto-ducking</strong> — music automatically lowers during calls</li>
  <li><strong>Keyboard shortcuts</strong> — toggle the mixer or mute all apps with a hotkey</li>
  <li><strong>Output device switching</strong> — change speakers/headphones from the same panel</li>
  <li><strong>Volume memory</strong> — remembers each app's volume between restarts</li>
</ul>

<p>One-time purchase. No subscription. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a>.</p>
`,
  },
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "Nejlepší alternativa Background Music pro Mac (2026)",
    description: "Rozbití Background Music na novějším macOS? Nejspolehlivější alternativou směšovače hlasitosti pro jednotlivé aplikace je SoundDial – aplikace Mac App Store v izolovaném prostoru s podporou a profily.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Pokud Background Music přestal fungovat po aktualizaci macOS, je nejspolehlivější alternativou <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — směšovač hlasitosti pro jednotlivé aplikace ze Mac App Store. Dává každé aplikaci vlastní posuvník hlasitosti, přidává ztlumení, zesílení, profily hlasitosti a automatické ztlumení a je plně sandboxed a zkontrolován společností Apple, takže v příštím vydání macOS nejsou žádné zvukové ovladače, které by bylo možné přerušit.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Nejlepší alternativa Background Music pro Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč se Background Music rozbije na novějších macOS</h2>

<p>Background Music je skutečně chytrý bezplatný projekt s otevřeným zdrojovým kódem. Uživatelům Mac to dalo něco, co Apple nikdy neměl: mixážní pult pro jednotlivé aplikace, jaký má Windows už léta. Ale jeho design je také důvodem, proč stále selhává.</p>

<p>Pro směrování a ovládání zvuku nainstaluje Background Music virtuální zvukové zařízení – ovladač na systémové úrovni, který zachytí zvuk vašeho Mac. Tento přístup fungoval dobře na starším macOS, ale každé hlavní vydání zpřísňuje zabezpečení kolem jádra a rozšíření zvuku. Běžné příznaky, které uživatelé hlásí:</p>

<ul>
<li>Žádný zvuk po instalaci nebo po aktualizaci OS.</li>
<li>Virtuální zařízení se nenačte, takže směrování zvuku se tiše zastaví.</li>
<li>Aplikace potřebuje k obnovení přeinstalaci, restart nebo ruční odstranění ovladače.</li>
<li>Vývoj je řízen komunitou a tempem dobrovolníků, takže opravy nového macOS mohou zaostávat.</li>
</ul>

<p>Nic z toho nedělá Background Music "špatné." Znamená to pouze, že bezplatný nástroj založený na ovladači je od přírody křehký, a pokud se každý den spoléháte na objem jednotlivých aplikací, tato křehkost rychle stárne.</p>

<h2>Co hledat při náhradě</h2>

<p>Před výběrem jakékoli alternativy se rozhodněte, co skutečně potřebujete:</p>

<ul>
<li><strong>Spolehlivost napříč aktualizacemi macOS.</strong> Pokud instaluje jádro nebo rozšíření zvuku, počítejte s občasným poškozením.</li>
<li><strong>Skutečné ovládání podle aplikace.</strong> Základem je nezávislá hlasitost a ztlumení pro každou aplikaci.</li>
<li><strong>Posílit.</strong> Některé aplikace (nástroje pro tiché schůzky, některé prohlížeče) jsou prostě příliš tiché – chcete se dostat přes 100 %.</li>
<li><strong>Funkce pro pohodlí.</strong> Profily a auto-duck jsou tím, co promění utilitu v něco, co budete mít otevřené celý den.</li>
<li><strong>Bezpečná instalace.</strong> Aplikace Mac App Store v sandboxu se nemůže dotknout vnitřních částí systému, takže odinstalování je čisté a aktualizace jsou automatické.</li>
</ul>

<h2>Proč je SoundDial spolehlivým výběrem</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> byl vytvořen přesně tak, aby vyřešil problém, se kterým se uživatelé Background Music setkávají: chtějí objem pro jednotlivé aplikace, ale nechtějí hlídat řidiče. Žije ve vašem menu a dobře dělá základní práci:</p>

<ul>
<li><strong>Nezávislá hlasitost pro každou aplikaci</strong>se ztlumením pro jednotlivé aplikace na stejném panelu.</li>
<li><strong>Vylepšení pro jednotlivé aplikace</strong> aby byly tiché aplikace dostatečně hlasité, aby je skutečně slyšely.</li>
<li><strong>Objemové profily</strong> — uložit mix (řekněme „schůzka“ nebo „hraní“) a okamžitě přepínat namísto pokaždé přetahování posuvníků.</li>
<li><strong>Auto-ducking</strong>, takže zvuk na pozadí se automaticky sníží, když by měl.</li>
<li><strong>Rychlé přepínání výstupů</strong> mezi reproduktory, sluchátky a dalšími zařízeními.</li>
</ul>

<p>Větší rozdíl je v tom, jak se instaluje. SoundDial se dodává prostřednictvím Mac App Store, což znamená, že je zkontrolováno společností Apple a v sandboxu. Není zde žádný DMG k přetahování, žádný zvukový ovladač nebo systémové rozšíření a žádný přístup k jádru. To je jediný nejdůležitější důvod, proč se nerozbije tak, jak to dělá Background Music, když přijde nový macOS – není zapojen do částí systému, které Apple neustále zamyká.</p>

<p>To stojí <strong>14,99 € jednorázově</strong>. Není to zdarma, ale není tam žádné předplatné a platíte za něco udržovaného a bezpečného k instalaci.</p>

<h2>SoundDial vs. Background Music vs. bezplatné nástroje</h2>

<p>Background Music není vaší jedinou bezplatnou možností, takže zde je poctivé rozložení půdy:</p>

<ul>
<li><strong>Background Music (zdarma, open-source):</strong> objem na aplikaci, ale založený na ovladači, náchylný k rozbití na novějších macOS a postrádá zesílení, profily a automatické ztlumení.</li>
<li><strong>FineTune (zdarma, open-source):</strong> lehká nabídková lišta pro každou aplikaci pro hlasitost aplikace. Dobrý, pokud je zdarma vaším jediným požadavkem, ale tenký na doplňky.</li>
<li><strong>eqMac (zdarma):</strong> primárně systémový ekvalizér a zesilovač, nikoli skutečný mixážní pult pro jednotlivé aplikace.</li>
<li><strong>SoundSource od Rogue Amoeba (~39 $):</strong> možnost profesionální úrovně s ekvalizérem pro jednotlivé aplikace a úplným výstupním směrováním. Vynikající, ale je to více než dvojnásobek ceny SoundDial a stále vyžaduje stažení plus ovladač pro zachycení zvuku.</li>
<li><strong>SoundDial (14,99 EUR, Mac App Store):</strong> střední cesta – skutečná hlasitost jednotlivých aplikací, ztlumení, zesílení, profily a ztlumení, dodávané jako čistá izolovaná instalace bez ovladačů.</li>
</ul>

<p>Pokud potřebujete EQ pro jednotlivé aplikace nebo komplexní směrování studia, SoundSource stojí za peníze navíc. Pokud chcete bezplatný nástroj pro kutila a dokážete tolerovat občasné rozbití, FineTune nebo Background Music vám postačí. Ale pokud je vaším cílem „dát každé aplikaci její vlastní objem a přestat ji rušit každou aktualizaci macOS“, SoundDial zasáhne tento cíl s nejmenšími problémy.</p>

<h2>Kontext macOS, který to vyžaduje</h2>

<p>Stojí za to říci jasně: macOS nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows má jeden už roky ve své nabídce pro objem, ale na Mac systémový posuvník ovládá vše najednou. Tato mezera je jediným důvodem, proč existují nástroje jako Background Music a SoundDial. Protože to Apple nenaplňuje, praktickou otázkou je, kterému přístupu třetí strany důvěřujete – bezplatnému ovladači, který bojuje s operačním systémem, nebo sandboxové aplikaci, která s ním pracuje.</p>

<p>Jste připraveni přestat bojovat s poškozenými zvukovými ovladači? Získejte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 € a ovládejte hlasitost každé aplikace spolehlivým způsobem.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial: Která aplikace Mac Volume vyhrává?",
    description: "SoundSource (39 USD, pro-grade) vs. SoundDial (14,99 EUR, App Store). Porovnejte hlasitost jednotlivých aplikací, zesílení, profily a automatické ztlumení a vyberte si ten správný mixér Mac pro vás.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Pokud chcete pouze ovládání hlasitosti pro jednotlivé aplikace, které se instaluje čistě a stojí méně, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je pro většinu lidí lepší koupě: 14,99 EUR jednorázově, od Mac App Store, s hlasitostí pro aplikaci, ztlumením, zesílením, profily a automatickým ztlumením. Vyberte Rogue Amoeba SoundSource (~ 39 $) pouze v případě, že konkrétně potřebujete EQ pro jednotlivé aplikace a pokročilé směrování výstupu.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial: Která aplikace Mac Volume vyhraje?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Krátká verze</h2>
<p>macOS stále nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows má jeden roky, ale na Mac posuvník hlasitosti systému posouvá vše najednou. SoundSource i SoundDial existují, aby tuto mezeru napravily. Prostě cílí na různé kupce.</p>
<ul>
<li><strong>SoundDial</strong> — 14,99 € jednorázově, Mac App Store, aplikace na liště menu. Nezávislá hlasitost na aplikaci, ztlumení podle aplikace, zesílení podle aplikace, uložené profily, automatické ztlumení a rychlé přepínání výstupu. Sandboxed a Apple-recenzované, takže žádná instalace ovladače.</li>
<li><strong>SoundSource</strong> — ~ 39 $, přímé stažení ze Rogue Amoeba. Vše výše uvedené plus ekvalizér pro jednotlivé aplikace, pokročilé směrování výstupu a zvukové efekty. Vyžaduje instalaci malého ovladače pro zachytávání zvuku.</li>
</ul>

<h2>Cena a způsob nákupu</h2>
<p>Toto je nejjasnější rozdělení. SoundSource stojí zhruba 39 dolarů a prodává jej přímo Rogue Amoeba. SoundDial stojí 14,99 EUR jako jednorázový nákup na Mac App Store – něco málo přes třetinu ceny.</p>
<p>Protože <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodává se prostřednictvím App Store, je v sandboxu, notářsky ověřený a zkontrolován společností Apple. Kliknete na Získat, nainstaluje se a je hotovo. Není zde žádné DMG k připojení, žádná oprávnění k udělení komponentu sousedícímu s jádrem a žádný zvukový ovladač nebo systémové rozšíření. Funguje také spolu s běžným tokem aktualizací App Store a synchronizuje se s ostatními Mac na stejném Apple ID.</p>
<p>SoundSource se stahuje mimo App Store a nainstaluje ovladač pro zachycení zvuku, aby mohl zachytit a zpracovat zvuk každé aplikace. To odemyká jeho profesionální funkce, ale také to znamená další krok instalace a komponentu, která žije hlouběji v systému.</p>

<h2>To, co SoundSource dělá, SoundDial ne</h2>
<p>SoundSource si vydělává na ceně pro konkrétní druh uživatele. Pokud vás některý z těchto popisů vystihuje, stojí to za ty peníze navíc:</p>
<ul>
<li><strong>EQ pro jednotlivé aplikace.</strong> Chcete 10pásmový ekvalizér na, řekněme, Spotify, zatímco Zoom necháte plochý. SoundDial dělá hlasitost, ne EQ.</li>
<li><strong>Pokročilé směrování výstupu.</strong> Odesílání jedné aplikace do reproduktorů a druhé do sluchátek nebo specifického rozhraní s jemným ovládáním.</li>
<li><strong>Audio efekty a pluginy.</strong> SoundSource může hostovat efekty na základě jednotlivých aplikací – skutečně profesionální území.</li>
</ul>
<p>Rogue Amoeba má dlouhou a důvěryhodnou historii. SoundSource je seriózní nástroj a jeho cena je stejná. Pokud jste audio profesionál nebo náročný uživatel s více výstupy, je to to pravé.</p>

<h2>Co SoundDial umí lépe pro každodenní použití</h2>
<p>Většina lidí, kteří hledají „Mac volume mixer“, EQ nepotřebuje. Potřebují jednu aplikaci tišší než druhou a nechtějí bojovat s instalátorem, aby ji získali. SoundDial to čistě pokrývá a přidává několik věcí, které stojí za zmínku:</p>
<ul>
<li><strong>Vylepšení pro jednotlivé aplikace.</strong> Některé aplikace a videa jsou příliš tiché i na 100 %. SoundDial dokáže posouvat jedinou aplikaci nad její normální strop, takže je konečně slyšet tichá schůzka nebo podcast.</li>
<li><strong>Objemové profily.</strong> Uložte si kompletní nastavení – hudba je vypnutá, prohlížeč ztlumen, volejte aplikaci nahlas – a okamžitě si jej vyvolejte. Skvělé pro přepínání mezi „zaměřením“, „schůzkou“ a „hraním“ bez přetahování pěti posuvníků.</li>
<li><strong>Auto-ducking.</strong> Automaticky ponořte zvuk na pozadí (např. hudbu), když se spustí jiný zdroj, takže oznámení, hovory nebo video nebudou pohřbeny.</li>
<li><strong>Rychlé přepínání výstupů.</strong> Přeskakujte mezi reproduktory, sluchátky a dalšími zařízeními z panelu nabídek.</li>
</ul>
<p>To vše se spouští z rozevíracího seznamu na liště nabídek, takže po zbytek času stačí jediné kliknutí a z vašeho obličeje.</p>

<h2>Volné alternativy, krátce</h2>
<p>Ve stejných vyhledáváních uvidíte několik bezplatných možností. Stojí za to vědět o:</p>
<ul>
<li><strong>Background Music</strong> – zdarma a s otevřeným zdrojovým kódem, poskytuje základní objem pro jednotlivé aplikace. Ale může se zlomit na novějších verzích macOS a nemá žádné zesílení, profily ani automatické uhýbání.</li>
<li><strong>FineTune</strong> — bezplatná aplikace pro hlasitost na panelu nabídek s otevřeným zdrojovým kódem. Jednoduché, ale omezeného rozsahu.</li>
<li><strong>eqMac</strong> — bezplatný ekvalizér a zesilovač systému, více systémový nástroj ekvalizéru než skutečný mixér pro jednotlivé aplikace.</li>
</ul>
<p>Zdarma je skvělé, pokud to funguje pro vás. Kompromisem je kompatibilita a podpora: zvukové nástroje s otevřeným zdrojovým kódem mohou za aktualizacemi macOS zaostávat a funkce jako profily a uhýbání obecně neexistují. Pokud je vaše nastavení důležité pro váš pracovní den, zaplatit jednou za něco zkontrolovaného a udržovaného je obvykle klidnější cesta.</p>

<h2>Kterou byste si měli koupit?</h2>
<p>Odpovězte na jednu otázku: potřebujete EQ pro jednotlivé aplikace nebo pokročilé výstupní směrování?</p>
<ul>
<li><strong>Ano</strong> — koupit SoundSource. Je pro to stvořen a ~39 $ je spravedlivých za profesionální nástroj s motorem na úrovni řidiče.</li>
<li><strong>Ne, chci pouze objem jednotlivých aplikací, posílení a čistou instalaci</strong> — koupit SoundDial. Získáte mixování, na kterém skutečně záleží každý den, plus profily a auto-ducking za 14,99 € a nulové problémy s řidičem.</li>
</ul>
<p>Pro velkou většinu uživatelů Mac je tento druhý kbelík upřímnou odpovědí. Platíte za ovládání hlasitosti, ne za studio.</p>

<p><strong>Jste připraveni snadno opravit objem Mac?</strong> Získejte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> — 14,99 EUR jednorázově, bez ovladačů, bez DMG. Hlasitost v jednotlivých aplikacích, zesílení, profily a automatické snížení na jedno kliknutí.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Levnější alternativa SoundSource pro objem jednotlivých aplikací na Mac",
    description: "Chcete objem na aplikaci ve stylu SoundSource bez ceny 39 $? SoundDial je 14,99 EUR Mac App Store menu-bar mixer s boostem, profily a automatickým zvednutím.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Pokud chcete na svém Mac ovládání hlasitosti ve stylu SoundSource pro jednotlivé aplikace, ale 39 $ vám přijde strmých, nejrychlejší spolehlivou opravou je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Jedná se o jednorázový mix menu v hodnotě 14,99 EUR od Mac App Store, který každé aplikaci poskytuje vlastní posuvník hlasitosti, ztlumení a zesílení – plus profily a automatické ztlumení – bez nutnosti stahování nebo instalace ovladače zvuku.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – levnější alternativa SoundSource pro objem jednotlivých aplikací na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč lidé hledají alternativu SoundSource</h2>
<p>SoundSource od Rogue Amoeba je vynikající software. Je to skutečně profesionální: ekvalizéry pro jednotlivé aplikace, zvukové efekty a směrování výstupu, které vám umožní poslat jednu aplikaci do sluchátek a druhou do reproduktorů. Ale tato síla přichází se dvěma třecími body. Za prvé, cena - kolem 39 $. Za druhé, nainstaluje ovladač pro zachycení zvuku na systémové úrovni mimo App Store, na což jsou někteří lidé na pracovním stroji opatrní nebo prostě nechtějí spravovat aktualizace macOS.</p>
<p>Pro většinu lidí je skutečná potřeba mnohem jednodušší: vypnout Spotify, aniž byste se dotkli hovoru Zoom, ztlumit hlučnou aplikaci na kartě prohlížeče nebo zesílit tichý přehrávač videa na více než 100 %. Pokud jste to vy, platíte profesionální peníze za funkce, které nikdy neotevřete.</p>

<h2>Co SoundDial dělá – a co to stojí</h2>
<p>SoundDial se zaměřuje na objemovou práci v jednotlivých aplikacích a dělá to čistě. Otevřete panel nabídek a získáte živý seznam všeho, co vydává zvuk, každý s vlastním ovládáním:</p>
<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — jeden posuvník na aplikaci, upravovaný v reálném čase.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — Okamžitě umlčte jednu aplikaci, aniž byste pozastavili cokoli jiného.</li>
<li><strong>Zvýšení hlasitosti podle aplikace</strong> — posunout tiché aplikace nad jejich normální maximum, když je video nebo hovor příliš tichý.</li>
<li><strong>Objemové profily</strong> – uložit mix (např. „Zaměření“, „Hry“, „Schůzka“) a přepnout jedním kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky ponořte další aplikace, když začne hrát něco důležitějšího.</li>
<li><strong>Rychlé přepínání výstupů</strong> — přeskakování mezi reproduktory, sluchátky a dalšími zařízeními ze stejné nabídky.</li>
</ul>
<p>Cena je <strong>14,99 €, zaplaceno jednou</strong> — žádné předplatné. To je zhruba třetina nákladů SoundSource, pokud jde o objemové funkce, po kterých většina uživatelů skutečně sáhne.</p>

<h2>Rozdíl App Store</h2>
<p>Protože SoundDial se dodává přes <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, je zkontrolován společností Apple a v sandboxu. Není potřeba přetahovat DMG, není třeba schvalovat žádné rozšíření jádra nebo ovladač pro zachycení zvuku a žádný samostatný aktualizátor. Nainstalujete ji jako kteroukoli jinou aplikaci App Store a funguje to. Když se aktualizuje macOS, nebudete se divit, zda nízkoúrovňová audio komponenta stále funguje.</p>
<blockquote>macOS stále nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows má jeden už roky, ale na Mac je systémový objem všechno nebo nic – což je přesně mezera, kterou tyto nástroje zaplňují.</blockquote>

<h2>Jak je to ve srovnání s bezplatnými možnostmi</h2>
<p>SoundSource není vaše jediná alternativa. Existují bezplatné nástroje a je důležité být o nich upřímný:</p>
<ul>
<li><strong>Background Music</strong> je bezplatná aplikace s otevřeným zdrojovým kódem pro jednotlivé aplikace. Funguje to pro mnoho lidí, ale na novějších verzích macOS se to může zlomit, aktualizace jsou nepravidelné a nemá to žádné posílení, žádné profily a žádné automatické uhýbání.</li>
<li><strong>FineTune</strong> je bezplatná aplikace pro hlasitost na panelu nabídek s otevřeným zdrojovým kódem – lehká a šikovná, ale opět postrádá funkce profilu a zmenšování.</li>
<li><strong>eqMac</strong> je bezplatný EQ a systémový booster. Je to spíše nástroj ekvalizéru/posílení než skutečný mixér pro jednotlivé aplikace a nezaměřuje se na posuvníky jednotlivých aplikací.</li>
</ul>
<p>Zdarma je legitimní volba. Kompromisem je spolehlivost a funkce: zvukové nástroje s otevřeným zdrojovým kódem závisí na dobrovolné údržbě a mohou zaostávat za změnami macOS a žádná z bezplatných možností nesdružuje profily plus automatické spouštění jako SoundDial. Pokud je vaše nastavení jednoduché a nevadí vám občasné rozbití, může vám stačit bezplatná aplikace. Pokud chcete něco, co je udržované, v sandboxu a prostě funguje, 14,99 EUR vám kupuje přesně to.</p>

<h2>Průvodce rychlým rozhodnutím</h2>
<ul>
<li><strong>Potřebujete EQ pro jednotlivé aplikace, zvukové efekty a směrování jedné aplikace na jiné výstupní zařízení</strong> → SoundSource stojí za svou cenu. Nic zde plně nenahradí.</li>
<li><strong>Potřebujete hlavně hlasitost pro jednotlivé aplikace, ztlumení, zesílení, profily a ztlumení – bez ovladačů</strong> → SoundDial za 14,99 EUR je výběr s lepší hodnotou.</li>
<li><strong>Chcete zdarma a nevadí vám riziko údržby</strong> → nejprve vyzkoušejte Background Music, FineTune nebo eqMac.</li>
</ul>

<h2>Nastavení</h2>
<p>Začátek trvá asi minutu:</p>
<ul>
<li>Nainstalujte SoundDial ze Mac App Store – žádné externí stahování.</li>
<li>Udělte oprávnění ke zvuku, které macOS vyzve při prvním spuštění.</li>
<li>Přehrajte zvuk v několika aplikacích a otevřete ikonu na panelu nabídek; uvidíte každý s vlastním posuvníkem.</li>
<li>Přetažením nastavíte úrovně, klepnutím ztlumíte nebo posunutím nad 100 % zvýšíte.</li>
<li>Uložte nastavení jako profil a zapněte automatické ztlumení, pokud chcete, aby se ostatní aplikace během hovorů nebo médií ztišily.</li>
</ul>
<p>To je celý pracovní postup – žádné konfigurační soubory, žádné restartování, žádné systémové rozšíření, které by bylo třeba požehnat.</p>

<h2>Sečteno a podtrženo</h2>
<p>SoundSource je výkonnější nástroj, ale většina lidí, kteří jej hledají, chce pouze objem podle aplikace, který se chová. SoundDial to poskytuje za přibližně třetinovou cenu, bezpečně se dodává přes App Store a přidává profily a automatické uhýbání – bez instalace jediného ovladače.</p>

<p>Jste připraveni ovládat hlasitost každé aplikace nezávisle? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> za 14,99 € jednorázově.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "FineTune Alternativa pro Mac: Podporovaný směšovač hlasitosti podle aplikace",
    description: "Vyzkoušeli jste bezplatnou aplikaci na liště nabídek FineTune a chcete něco udržovaného a bezpečného App Store? Zde je nejlepší alternativa FineTune pro objem jednotlivých aplikací na Mac.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Pokud se vám líbil FineTune, ale chcete něco aktivně udržovat a instalovat z důvěryhodného zdroje, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je nejrychlejší spolehlivá oprava. Jedná se o Mac App Store směšovač hlasitosti pro jednotlivé aplikace s nezávislou hlasitostí, ztlumením podle aplikace, zvýšením hlasitosti, uloženými profily a automatickým ztlumením. Po revizi Apple a v sandboxu stojí jednou 14,99 EUR bez nutnosti instalace ovladačů.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune Alternativa pro Mac: Podporovaný směšovač hlasitosti podle aplikace" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč vůbec hledat alternativu FineTune?</h2>

<p>FineTune je pěkný nápad: bezplatná aplikace s otevřeným zdrojovým kódem na liště nabídek, která vám poskytuje ovládání hlasitosti pro jednotlivé aplikace na macOS, což Apple stále odmítá zabudovat (Windows má mix pro jednotlivé aplikace už roky). Pro mnoho lidí dělá základní práci. Existují však skutečné důvody, proč uživatelé hledají něco jiného.</p>

<ul>
<li><strong>Údržba je nejistá.</strong> Open-source hobby projekty žijí a umírají ve volném čase jediného správce. Když macOS dodává velkou aktualizaci, aplikace související se zvukem jsou často první, které se porouchají, a vy čekáte na dobrovolnou opravu, která možná nikdy nepřijde.</li>
<li><strong>Hlavní strop.</strong> FineTune pokrývá objem jednotlivých aplikací a málo dalšího. Pokud chcete boost nad 100 %, uložené profily nebo automatické uhýbání, musíte nasadit jiné nástroje.</li>
<li><strong>Důvěra a aktualizace.</strong> Instalace surového sestavení mimo App Store znamená žádnou automatickou kontrolu, žádné záruky sandboxu a ruční aktualizace, které musíte sledovat sami.</li>
</ul>

<p>Nic z toho nedělá FineTune špatné. Znamená to jen, že pokud se každý den spoléháte na zvuk z jednotlivých aplikací, pravděpodobně budete chtít něco s modelem podpory.</p>

<h2>Co SoundDial dělá jinak</h2>

<p>SoundDial začíná stejnou základní myšlenkou, směšovačem na liště nabídek s posuvníkem pro každou spuštěnou aplikaci, pak jde dále s funkcemi, které pokročilí uživatelé skutečně požadují.</p>

<ul>
<li><strong>Nezávislý objem na aplikaci.</strong> Vypněte Spotify, udržujte hovor na plné hlasitosti, zcela ztlumte hlučnou aplikaci na kartě prohlížeče, to vše z jedné nabídky.</li>
<li><strong>Zvýšení hlasitosti podle aplikace.</strong> Když byl podcast nebo video zvládnuto příliš nízko, posuňte tichou aplikaci nad její normální strop. FineTune to nedělá.</li>
<li><strong>Objemové profily.</strong> Uložte si mix, „zaměřte se“, „hraní“, „schůzky“ a přepněte celé nastavení jediným kliknutím namísto šťouchání pěti posuvníků.</li>
<li><strong>Auto-ducking.</strong> Automaticky snížit zvuk na pozadí, když začne hrát něco důležitějšího, takže hudba při příchozím hovoru klesá.</li>
<li><strong>Rychlé přepínání výstupů.</strong> Přeskakujte mezi reproduktory, sluchátky a dalšími výstupy, aniž byste se museli ponořit do nastavení systému.</li>
</ul>

<p>Protože <a href="https://apps.apple.com/app/id6772792641">SoundDial se dodává prostřednictvím Mac App Store</a>, je zkontrolována společností Apple a uzavřena v sandboxu, instaluje se čistě a aktualizuje se stejným mechanismem jako každá jiná aplikace App Store. Neexistuje žádný DMG k přetažení, žádný zvukový ovladač nebo systémové rozšíření a žádná bezpečnostní výzva, která by vás požádala o povolení komponenty na úrovni jádra.</p>

<h2>SoundDial vs. FineTune a další bezplatné nástroje</h2>

<p>FineTune není jediná bezplatná možnost a pomáhá poctivě vidět celou krajinu.</p>

<ul>
<li><strong>FineTune</strong> — Bezplatná hlasitost s otevřeným zdrojovým kódem pro jednotlivé aplikace. Jednoduché a lehké, ale žádná podpora, žádné profily, žádné uhýbání a údržba závisí na komunitě.</li>
<li><strong>Background Music</strong> — Zdarma a open-source, směruje a upravuje zvuk pro jednotlivé aplikace. Skutečně užitečné, ale na novějších verzích macOS se může zlomit a postrádá zesílení, profily a pokles.</li>
<li><strong>eqMac</strong> — Zdarma EQ a systémový booster. Skvělé, pokud chcete hlavně ekvalizér, ale není to mix pro jednotlivé aplikace.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — Profesionální varianta za přibližně 39 $, s ekvalizérem na aplikaci a výstupním směrováním. Vynikající, ale vyžaduje stažení a ovladač pro zachycení zvuku a stojí více než dvakrát tolik.</li>
<li><strong>SoundDial</strong> — 14,99 € jednorázově, bezpečné App Store, bez ovladačů. Přidává zesílení, profily a automatické snížení hlasitosti nad rámec základních objemů jednotlivých aplikací.</li>
</ul>

<p>Upřímné shrnutí: pokud chcete absolutně nejlevnější věc a potřebujete pouze základní objem na aplikaci, bezplatné nástroje mohou fungovat. Pokud chcete EQ a směrování pro jednotlivé aplikace a nevadí vám platit a instalovat ovladač, SoundSource je těžká váha. SoundDial sedí na sladkém místě, je schopnější než bezplatné aplikace, výrazně levnější než SoundSource a bezpečnější k instalaci, protože je Apple kontroluje a umísťuje do karantény.</p>

<h2>Přesun ze FineTune</h2>

<p>Přepínání trvá několik minut a není zde žádný rituál čištění.</p>

<ul>
<li>Nainstalujte SoundDial ze Mac App Store. Žádný instalátor, žádné schválení ovladače, žádný restart.</li>
<li>Kliknutím na ikonu SoundDial na liště nabídek zobrazíte posuvník pro každou spuštěnou aplikaci.</li>
<li>Nastavte si svůj každodenní mix a poté jej uložte jako profil, abyste si jej mohli okamžitě vyvolat.</li>
<li>Volitelně zapněte automatické ztlumení, takže zvuk na pozadí ustoupí pro hovory a upozornění.</li>
<li>Když jste šťastní, ukončete FineTune. Protože žádná z aplikací neinstaluje systémové ovladače, není co odinstalovat.</li>
</ul>

<p>Zachováte si to, co se vám líbilo na FineTune, čistém mixážním panelu nabídek, který vám Apple nikdy nedal, a získáte podporu, profily, uhýbání a dlouhodobou podporu, kterou poskytuje udržovaná aplikace App Store.</p>

<h2>Sečteno a podtrženo</h2>

<p>FineTune dokazuje koncept: hlasitost jednotlivých aplikací patří do panelu nabídek. SoundDial je to, jak tento koncept vypadá se skutečným modelem podpory, více funkcí a bezpečností App Store za jednorázových 14,99 EUR namísto sázky na dobrovolnou údržbu.</p>

<p>Jste připraveni na mix pro jednotlivé aplikace, který zůstane zachován? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> a ovládat hlasitost každé aplikace během několika sekund.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac Alternativa pro skutečný objem jednotlivých aplikací na Mac",
    description: "Milovali jste vylepšení eqMac, ale potřebujete správnou hlasitost pro jednotlivé aplikace, ztlumení a profily? SoundDial je nejrychlejší oprava Mac App Store – 14,99 EUR, v sandboxu, bez ovladačů.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Pokud jste použili eqMac pro jeho EQ a zesílení hlasitosti, ale opravdu chcete nezávislou hlasitost pro každou aplikaci – plus ztlumení, zesílení a uložené profily – nejrychlejší spolehlivou opravou je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Je to mixážní pult Mac App Store: nastavte úroveň pro každou aplikaci, zesilujte tiché a okamžitě přepínejte profily. 14,99 € jednorázově, v sandboxu, bez instalace ovladačů.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — eqMac Alternativa pro skutečný objem podle aplikace na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac vs. to, co skutečně potřebujete</h2>

<p>eqMac je solidní bezplatný nástroj a jeho systémový ekvalizér a zesilovač hlasitosti jsou skutečně užitečné. Ale eqMac je postaven na jednom hlavním EQ a jednom hlavním výstupu. Neposkytuje vám skutečný mixážní pult pro jednotlivé aplikace – to, co Windows má již roky a macOS se stále nedodává nativně.</p>

<p>Takže pokud je váš skutečný problém „Spotify je příliš hlasitý, když telefonuji“ nebo „tato jedna hra mi fouká uši, ale všechno ostatní je v pořádku“, eqMac není pro tuto práci ten správný tvar. Nakonec budete jezdit na jediném hlavním posuvníku nebo si pohrávat s vnitřním objemem každé aplikace. To je mezera, kterou zaplňuje SoundDial.</p>

<h2>To, co SoundDial dělá, eqMac ne</h2>

<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — Hudba na 40 %, prohlížeč na 100 %, videohovor na 70 %, vše najednou, vše zapamatováno.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — Okamžitě ztište jednu hlučnou aplikaci, aniž byste se dotkli čehokoli jiného.</li>
<li><strong>Vylepšení pro jednotlivé aplikace</strong> — Posuňte tichou aplikaci za její normální strop, jako to dělá booster eqMac, ale zaměří se na jedinou aplikaci namísto celého systému.</li>
<li><strong>Objemové profily</strong> — uložte nastavení jako „Zaměření“, „Hry“ nebo „Schůzka“ a přepněte celý mix jediným kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky stáhne zvuk na pozadí, když začne něco důležitějšího, takže se uprostřed hovoru nesnažíte o posuvník.</li>
<li><strong>Rychlé přepínání výstupů</strong> — přeskakování mezi reproduktory, sluchátky a dalšími výstupy z panelu nabídek.</li>
</ul>

<p>Překrývání se eqMac je v podstatě posílení. Vše ostatní – mixážní pult, ztlumení, profily, tlumení – je území, které eqMac nikdy nebylo navrženo.</p>

<h2>Stále chcete EQ?</h2>

<p>Buďte upřímní ohledně toho, jaký problém řešíte. Pokud skutečně potřebujete frekvenční ekvalizér – ořezávání basů, zkrocení drsných výšek, tvarování tónu celého systému – pak má eqMac stále své místo a je zdarma. SoundDial je směšovač hlasitosti, nikoli ekvalizér.</p>

<p>Ale většina lidí sáhne po zesilovači eqMac ne proto, že by chtěli tvarovat frekvence, ale chtějí jednu aplikaci hlasitější nebo vyvážený mix. Pokud jste to vy, dedikovaný mixér je čistší odpovědí. Můžete dokonce spustit obojí: ponechat eqMac pro křivku EQ pro celý systém a použít SoundDial pro úrovně jednotlivých aplikací. Nehádají se o stejnou práci.</p>

<h2>Jak se porovnává s ostatními zvukovými nástroji Mac</h2>

<p>Protože již lovíte nástroje, zde je poctivá krajina:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — varianta pro-grade za přibližně 39 $, s ekvalizérem na aplikaci a úplným výstupním směrováním. Výkonný, ale vyžaduje přímé stažení a nainstaluje ovladač pro zachycení zvuku. Přehnané a dražší, pokud chcete pouze objem jednotlivých aplikací s profily.</li>
<li><strong>Background Music</strong> — bezplatný a otevřený zdroj, ale na novějších verzích macOS se může zlomit a nemá žádné posílení, žádné profily a žádné automatické uhýbání. Skvělé, když to funguje, frustrující, když ne.</li>
<li><strong>FineTune</strong> — bezplatná aplikace s otevřeným zdrojovým panelem nabídek. Stojí za to se podívat, pokud je tvrdý požadavek 0 $, i když je lehčí na funkce a lesk.</li>
<li><strong>eqMac</strong> — bezplatný EQ plus booster, ale žádný skutečný mix pro jednotlivé aplikace, jak je uvedeno výše.</li>
</ul>

<p>SoundDial sedí na sladkém místě: cílenější a levnější než SoundSource, schopnější a spolehlivější než bezplatné možnosti a dělá to, co eqMac nedělá.</p>

<h2>Proč zde záleží na Mac App Store</h2>

<p>Některé z těchto nástrojů vyžadují přímé stažení a ovladač zvuku na úrovni jádra nebo digitalizaci. Ty fungují, ale jsou to věci, které mohou zadrhnout aktualizaci macOS nebo zakopnout na uzamčeném pracovním Mac.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> místo toho se dodává prostřednictvím Mac App Store. To znamená, že je zkontrolován společností Apple a v sandboxu, instaluje se čistě bez nutnosti přetahování DMG a neexistují žádné zvukové ovladače ani systémová rozšíření ke schválení. Aktualizace přicházejí přes App Store jako každá jiná aplikace a odinstalování je normální smazání. Pro nástroj na liště nabídek, který se dotýká vašeho zvuku, tato cesta s nižším třením a nižším rizikem stojí hodně.</p>

<h2>Rychlé nastavení</h2>

<ul>
<li>Nainstalujte SoundDial ze Mac App Store – bez restartu, bez výzvy ovladače.</li>
<li>Otevřete ikonu panelu nabídek; každá aplikace, která aktuálně vydává zvuk, se zobrazí s vlastním posuvníkem.</li>
<li>Nastavte úrovně, ztlumte to, co nepotřebujete, a zesilte vše, co je příliš tiché.</li>
<li>Uložte uspořádání jako profil a poté vytvořte další pro hraní her, hovory nebo soustředění.</li>
<li>Zapněte automatické ztlumení, aby se zvuk na pozadí automaticky vzdaloval.</li>
</ul>

<p>To je celá smyčka. Během několika minut máte pouze naznačený booster ovládání eqMac pro jednotlivé aplikace.</p>

<p><strong>Jste připraveni na skutečný objem jednotlivých aplikací na vašem Mac?</strong> <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> — 14,99 EUR jednorázově, v sandboxu, bez ovladačů a dělá přesně to, co by měl mixážní pult s nabídkou.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "Nejlevnější dobrý směšovač hlasitosti pro Mac v roce 2026",
    description: "Hledáte nejlevnější dobrý mixážní pult pro jednotlivé aplikace pro Mac v roce 2026? Porovnejte SoundDial, SoundSource, Background Music, FineTune a eqMac z hlediska ceny, bezpečnosti a funkcí.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Směšovač objemu na aplikaci za nejlepší cenu pro Mac v roce 2026 je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikace na panelu nabídek na Mac App Store za jednorázovou cenu 14,99 €. Poskytuje každé aplikaci vlastní posuvník hlasitosti a navíc ztlumení, zesílení, profily a automatické ztlumení – žádné ovladače, žádné předplatné a žádné riskantní stahování. Je to nejlevnější placená varianta, která skutečně funguje spolehlivě.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Nejlevnější dobrý směšovač hlasitosti pro Mac v roce 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč „nejlevnější“ potřebuje definici</h2>
<p>Pro Mac existují bezplatné nástroje pro objem, takže pokud je jediným cílem nulová útrata, máte možnosti. Ale zdarma vás obvykle stojí někde jinde: křehkost nových verzí macOS, chybějící funkce, jako je podpora nebo profily, nebo proces instalace, který zahrnuje ovladač pro zachycení zvuku, kterému musíte věřit. „Nejlevnější zboží“ znamená nejnižší cenu, která vám stále zajistí stabilní a plně vybavený mixér, který budete i nadále používat. To je objektiv, který zde použijeme.</p>

<h2>Za prvé, věc, kterou macOS nedělá</h2>
<p>Windows má už roky mix hlasitosti pro jednotlivé aplikace – klikněte pravým tlačítkem na ikonu reproduktoru a nastavte každou aplikaci nezávisle. macOS stále nemá vestavěno nic ekvivalentního. Získáte jeden hlavní svazek a jakýkoli interní posuvník, který aplikace náhodou dodá (hudba, některé prohlížeče). Neexistuje žádný systémový způsob, jak učinit Slack tišším než Spotify, nebo zvýšit tichý videohovor nad vše ostatní. K vyplnění této mezery existuje každá možnost níže.</p>

<h2>Soutěžící, ceny poctivě</h2>

<h2>SoundDial — 14,99 EUR, jednorázově</h2>
<p>SoundDial žije v liště nabídek a dává každé spuštěné aplikaci nezávislý posuvník hlasitosti. Kromě základů přidává funkce, po kterých lidé skutečně sahají:</p>
<ul>
<li><strong>Vylepšení pro jednotlivé aplikace</strong> — Přesuňte příliš tichou aplikaci nad 100 % místo toho, abyste ji slyšeli.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — ztišit jednu aplikaci, aniž byste se dotkli ostatních.</li>
<li><strong>Objemové profily</strong> — uložit mix „pracovního hovoru“ nebo „filmové noci“ a okamžitě jej vyvolat.</li>
<li><strong>Auto-ducking</strong> — automaticky stáhne zvuk na pozadí, když hraje něco důležitějšího.</li>
<li><strong>Rychlé přepínání výstupů</strong> — přeskakování mezi reproduktory, sluchátky a dalšími zařízeními ze stejné nabídky.</li>
</ul>
<p>Protože je na Mac App Store, je v sandboxu, zkontrolován společností Apple a instaluje se čistě – žádné DMG, žádné rozšíření jádra, žádný zvukový ovladač ke schválení. Vy platíte <a href="https://apps.apple.com/app/id6772792641">14,99 € jednou</a> a vlastnit to. Pro většinu lidí je to sladké místo: dost levné na to, aby to bylo snadné ano, dostatečně úplné, že z toho nepřerostete.</p>

<h2>SoundSource — ~ 39 $, možnost pro profesionály</h2>
<p>Rogue Amoeba SoundSource je zlatý standard pro náročné uživatele. Dělá hlasitost a ztlumení pro jednotlivé aplikace jako SoundDial, ale jde ještě dále s ekvalizéry pro jednotlivé aplikace a úplným směrováním výstupu (odesílat jednu aplikaci do sluchátek, jinou do reproduktorů). Je skutečně vynikající – ale stojí zhruba 39 USD a instaluje se mimo App Store s komponentou pro zachycování zvuku, ke které musíte udělit povolení. Pokud potřebujete EQ pro jednotlivé aplikace nebo složité směrování, stojí to za to. Pokud chcete jen čistý, levný mixér, platíte za schopnosti, kterých se možná nikdy nedotknete.</p>

<h2>Background Music — zdarma, open-source</h2>
<p>Background Music je známá bezplatná aplikace s otevřeným zdrojovým kódem, která nabízí objem pro jednotlivé aplikace a automatické pozastavení. Háček: zapojuje se hluboko do Core Audio prostřednictvím virtuálního ovladače a má za sebou dlouhou historii poruch na nových vydáních macOS, které někdy vyžadují ruční opravy nebo přeinstalaci po aktualizacích. Nechybí ani boost, uložené profily a auto-ducking. Skvělé pro kutily, kterým nevadí údržba; frustrující, pokud chcete, aby to fungovalo.</p>

<h2>FineTune — zdarma, panel nabídek</h2>
<p>FineTune je bezplatná aplikace s otevřeným zdrojovým kódem pro ovládání hlasitosti. Je lehký a příjemný a pro jednoduchou úpravu podle aplikace to může stačit. Ale protože jde o malý bezplatný projekt, neodpovídá hloubce funkcí – žádné profily, žádné automatické klesání a ovládání zesílení/výstupu nejsou omezeny. Nulové náklady, méně záruk na dlouhou životnost a podporu.</p>

<h2>eqMac — zdarma, EQ + booster</h2>
<p>eqMac je bezplatný systémový ekvalizér se zesilovačem hlasitosti. Jde spíše o tvarování tónu a hlasitosti v celém vašem Mac než o míchání jednotlivých aplikací, takže je to jiný nástroj pro jinou práci. Pokud konkrétně chcete ovládání podle aplikace, eqMac není ve skutečnosti řešením, i když je to skvělý bezplatný EQ.</p>

<h2>Cena vs. hodnota: poctivý stůl</h2>
<ul>
<li><strong>Opravdu zdarma, ale s kompromisy:</strong> Background Music (křehké, založené na ovladači), FineTune (tenké funkce), eqMac (EQ, ne mix).</li>
<li><strong>Nejlevnější kompletní placená aplikace:</strong> SoundDial za 14,99 € – zesílení, profily, prohnutí, bezpečnost App Store.</li>
<li><strong>Premium/Pro:</strong> SoundSource za ~39 $ – EQ a směrování, instalace mimo App Store.</li>
</ul>
<p>Jinak řečeno: SoundDial stojí zhruba třetinu SoundSource, přičemž pokrývá funkce, které skutečně chce 90 % lidí. A na rozdíl od bezplatných možností se po aktualizaci macOS tiše nerozbije, protože se nespoléhá na křehký zvukový ovladač na systémové úrovni.</p>

<h2>Které byste si měli vybrat?</h2>
<p>Pokud jste profík, který potřebuje ekvalizér pro jednotlivé aplikace a směrování aplikací na různé výstupy, kupte si SoundSource – získá svou cenu. Pokud milujete open-source a nevadí vám občasné rozbití, vyzkoušejte Background Music nebo FineTune zdarma. Ale pokud chcete nejlevnější možnost, která prostě funguje – nezávislá hlasitost, zesílení, ztlumení, uložitelné profily a automatické ztlumení, bezpečně nainstalované ze App Store – SoundDial je jasným vítězem hodnoty v roce 2026.</p>

<blockquote>Nejlepší mixér není ten, který má nejvíce funkcí nebo nejnižší cenu – je to ten, který si jednou nastavíte a zapomenete na něj. S cenou 14,99 EUR, SoundDial je to snadné volání.</blockquote>

<p>Jste připraveni dát každé aplikaci vlastní objem? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> za jednorázových 14,99 € — žádné předplatné, žádné ovladače, žádné riziko.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Mixér hlasitosti Windows pro Mac: Získejte ovládání hlasitosti podle aplikace",
    description: "Chybí vám Windows Volume Mixer na vašem Mac? macOS nemá vestavěné ovládání hlasitosti pro jednotlivé aplikace. Zde je nejrychlejší způsob, jak to získat: SoundDial, mixážní pult s nabídkou v hodnotě 14,99 EUR.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>macOS nemá vestavěný směšovač hlasitosti jako Windows, takže v nastavení systému nelze nastavit hlasitost pro jednotlivé aplikace. Nejrychlejší a nejspolehlivější oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 14,99 EUR aplikace s panelem nabídek od Mac App Store. Poskytuje každé aplikaci vlastní posuvník hlasitosti, ztlumení a zesílení – žádné ovladače, žádné DMG, žádné riskantní instalace.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Směšovač hlasitosti Windows pro Mac: Získejte ovládání hlasitosti podle aplikace" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč Windows Volume Mixer nemá ekvivalent Mac</h2>

<p>Pokud jste přešli ze Windows, jedna z prvních věcí, která vám bude chybět, je směšovač hlasitosti: klikněte pravým tlačítkem na ikonu reproduktoru a každá spuštěná aplikace dostane svůj vlastní posuvník. Vypněte Chrome, nechte Discord nahlas, ztlumte Spotify – vše na jednom místě.</p>

<p>macOS to prostě nedodává. Ovládání hlasitosti od Applu je jediný posuvník pro celý systém. Jakákoli úroveň, kterou nastavíte, platí pro všechno najednou. V nastavení systému není skryta žádná možnost pro jednotlivé aplikace, žádný příkaz Terminal, žádný přepínač usnadnění. Je to skutečná mezera a je tomu tak už léta.</p>

<p>Důvod je architektonický: aplikace směrují zvuk přes Core Audio do vašeho výstupního zařízení a OS nevystavuje uživatelsky orientovaný mix pro jednotlivé streamy. Chcete-li znovu vytvořit zážitek se Windows, potřebujete aplikaci třetí strany, která sedí v této zvukové cestě a poskytuje ovládací prvky, které Apple vynechal.</p>

<h2>Nejbližší zápas: SoundDial</h2>

<p>SoundDial je směšovač hlasitosti pro jednotlivé aplikace vytvořený speciálně pro tento účel. Klikněte na jeho ikonu a získáte čistý seznam všeho, co přehrává zvuk, každý s vlastním posuvníkem. Je to nejpřímější "Windows Volume Mixer for Mac", který můžete nainstalovat, a dělá několik věcí, které mix Windows nikdy nedokázal:</p>

<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — hlavní rys. Nastavte Chrome na 40 %, Zoom na 100 %, hudbu na 20 %.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — ztišit jednu aplikaci, aniž byste se dotkli ostatních.</li>
<li><strong>Zvýšení hlasitosti podle aplikace</strong> - stiskněte tichou aplikaci <em>výše</em> 100 %, když je jeho vlastní zvuk příliš slabý.</li>
<li><strong>Objemové profily</strong> — uložit mix (např. „pracovní hovor“ nebo „hraní“) a okamžitě jej vyvolat místo opětovného přetahování posuvníků.</li>
<li><strong>Auto-ducking</strong> — automaticky snížit zvuk na pozadí, když začne něco důležitějšího, například hovor.</li>
<li><strong>Rychlé přepínání výstupů</strong> — přeskakování mezi reproduktory, sluchátky a dalšími zařízeními ze stejné nabídky.</li>
</ul>

<p>Protože je na <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, je zkontrolován společností Apple a v sandboxu. Instaluje se čistě jedním kliknutím – žádné DMG přetahování, žádný zvukový ovladač nebo systémové rozšíření ke schválení, žádné bezpečnostní výzvy. Za 14,99 EUR jednorázově (bez předplatného) je to nejjednodušší způsob, jak zacelit mezeru.</p>

<h2>Jak nastavit hlasitost pro jednotlivé aplikace na vašem Mac</h2>

<ol>
<li>Nainstalujte SoundDial ze Mac App Store.</li>
<li>Udělte jednorázové oprávnění ke zvuku, které požaduje při prvním spuštění.</li>
<li>Klikněte na ikonu SoundDial na liště nabídek.</li>
<li>Přetažením posuvníku vedle libovolné aplikace nastavte její hlasitost nebo stiskněte ztlumit/zesílit.</li>
<li>Volitelně uložte aktuální mix jako profil, abyste jej mohli později obnovit.</li>
</ol>

<p>To je celý pracovní postup. Chová se jako mixážní pult Windows, který již znáte, pouze z panelu nabídek namísto kliknutí pravým tlačítkem na hlavní panel.</p>

<h2>Jak si SoundDial stojí v porovnání s ostatními možnostmi</h2>

<p>SoundDial není jediným nástrojem v tomto prostoru, takže zde je upřímný pohled na alternativy.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — kolem 39 $ a skutečně profesionální: EQ na aplikaci, směrování výstupu na aplikaci, efekty. Vyžaduje však přímé stažení plus ovladač pro zachycení zvuku a je to přehnané (a dražší), pokud chcete pouze objem pro jednotlivé aplikace. Vyberte jej, pokud potřebujete EQ a směrování; zvolte SoundDial, pokud chcete mixážní pult bez složitosti nebo ovladače.</li>
<li><strong>Background Music</strong> — zdarma a open-source, což je skvělé. Háček: na novějších verzích macOS se může zlomit a postrádá zesílení, uložené profily a automatické uhýbání. Dobře, pokud jste spokojeni s řešením problémů s open source zvukovými ovladači; méně ideální, pokud chcete něco, co prostě funguje.</li>
<li><strong>FineTune</strong> — bezplatná aplikace s otevřeným zdrojovým panelem nabídek. Lehký a stojí za to se podívat, pokud je prioritou rozpočet, ale lesk, profily a bezpečnost App Store obchodujete zdarma.</li>
<li><strong>eqMac</strong> — bezplatný EQ a systémový booster. Je to nejprve ekvalizér, nikoli mix pro jednotlivé aplikace, takže řeší jiný problém.</li>
</ul>

<p>Kompromis je jednoduchý. Bezplatné nástroje nestojí nic, ale mohou být křehké nebo tenké. SoundSource je výkonný, ale drahý a založený na ovladači. SoundDial sedí na skvělém místě: jednorázová částka 14,99 EUR, bezpečnost App Store a sandboxing a profily + automatické uhýbání, které bezplatné možnosti přeskakují.</p>

<blockquote>Pokud vše, co chcete, je Windows Volume Mixer – posuvníky pro jednotlivé aplikace, ztlumení a zesílení, bezpečně nainstalované během několika sekund – SoundDial je ta nejpřímější shoda.</blockquote>

<h2>Sečteno a podtrženo</h2>

<p>macOS vám Volume Mixer nedá a pravděpodobně ani nikdy nedá. Nemusíte ale žít s jedním celosystémovým posuvníkem. Vyhrazený mix panel nabídek obnovuje ovládání jednotlivých aplikací, které jste měli na Windows, a přidává zesílení, profily a automatické klesání.</p>

<p>Jste připraveni jednoduchým způsobem získat objem jednotlivých aplikací? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> za 14,99 EUR – jednorázově, v izolovaném prostoru a instalace během několika sekund.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Nastavte hlasitost aplikace jako Windows – na vašem Mac",
    description: "Windows má směšovač hlasitosti pro jednotlivé aplikace, ale macOS ne. Zde je návod, jak nastavit nezávislou hlasitost pro každou aplikaci na vašem Mac – rychle, bezpečně a bez ovladačů.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>macOS nemá vestavěný směšovač hlasitosti pro jednotlivé aplikace, jako je ten v Windows, takže nejrychlejší spolehlivá oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikace Mac App Store na liště nabídek, která každé aplikaci poskytuje vlastní posuvník hlasitosti, ztlumení pro každou aplikaci a zvýšení hlasitosti. Je v sandboxu, zkontrolován společností Apple, instaluje se bez ovladačů a jednou stojí 14,99 EUR.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Nastavte hlasitost aplikace jako Windows — na vašem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč to Windows umí a macOS ne</h2>
<p>Pokud jste používali Windows, znáte cvičení: klikněte pravým tlačítkem na ikonu reproduktoru, otevřete Volume Mixer a přetáhněte samostatný posuvník pro Chrome, Spotify, Discord a cokoli jiného, co dělá hluk. Je to jednoduché a prostě to funguje.</p>
<p>macOS nikdy nedodal ekvivalent. Ovládání zvuku Apple je globální – jedna hlavní hlasitost pro celý systém. Aplikaci můžete ztlumit tak, že ztlumíte zdroj v této aplikaci (pokud vůbec má ovládací prvek), ale neexistuje jednotné místo, kde byste řekli „udržujte hudbu na 40 %, zatímco moje schůzka zůstane na 100 %. Tato mezera je přesně důvodem, proč existují mixéry třetích stran.</p>

<h2>Nejrychlejší oprava: směšovač menu</h2>
<p>Nejbližší zážitek ze Windows je aplikace na liště nabídek, která uvádí vaše spuštěné zvukové aplikace a u každé z nich nabízí posuvník. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dělá přesně tohle. Klikněte na jeho ikonu na liště nabídek a získáte:</p>
<ul>
<li><strong>Nezávislá hlasitost pro každou aplikaci</strong> — přetáhněte Spotify dolů, aniž byste se dotkli hovoru.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — Okamžitě ztište jednu hlučnou aplikaci, zbytek nechte hrát.</li>
<li><strong>Zvýšení hlasitosti podle aplikace</strong> – stiskněte příliš tichou aplikaci <em>výše</em> 100%, když je jeho vlastní maximum stále příliš měkké.</li>
<li><strong>Objemové profily</strong> — uložit mix „Práce“ nebo „Hry“ a vyvolat jej jedním kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky snížit zvuk na pozadí, když začne něco důležitějšího.</li>
<li><strong>Rychlé přepínání výstupů</strong> — skok mezi reproduktory, sluchátky a dalšími výstupy ze stejné nabídky.</li>
</ul>
<p>Protože je na Mac App Store, je sandboxován a zkontrolován společností Apple, instaluje se čistě a není zde žádný DMG k přetažení, žádné rozšíření jádra a žádný zvukový ovladač ke schválení v nastavení systému. Na této poslední části záleží víc, než to zní – nástroje založené na ovladačích jsou ty, které mají tendenci se po aktualizacích macOS rozpadat.</p>

<h2>Jak to nastavit (asi dvě minuty)</h2>
<ul>
<li><strong>1.</strong> Nainstalujte SoundDial ze Mac App Store a spusťte jej.</li>
<li><strong>2.</strong> Udělte oprávnění ke zvuku, které vyžaduje macOS – to je to, co aplikaci umožňuje vidět streamy jednotlivých aplikací.</li>
<li><strong>3.</strong> Klikněte na ikonu SoundDial na liště nabídek. Každá aplikace, která aktuálně přehrává zvuk, se zobrazí s vlastním posuvníkem.</li>
<li><strong>4.</strong> Přetažením posuvníku libovolné aplikace nastavte její úroveň nebo stiskněte tlačítko ztlumit. Zvyšte přes 100 %, když je aplikace příliš tichá.</li>
<li><strong>5.</strong> (Volitelné) Uložte svůj aktuální mix jako profil, abyste jej mohli později obnovit, a zapněte automatické ztlumení, pokud chcete, aby se zvuk na pozadí automaticky spouštěl.</li>
</ul>
<p>To je celý pracovní postup. Chová se jako Windows Volume Mixer, který již znáte, bez tření nastavení.</p>

<h2>A co bezplatné a profesionální alternativy?</h2>
<p>Existují další způsoby, jak získat objem pro jednotlivé aplikace na Mac. Stojí za to je znát, abyste si mohli poctivě vybrat.</p>
<blockquote>Bezplatné nástroje vyměňují peníze za spolehlivost a funkce; profesionální nástroje vyměňte peníze a nastavení za hloubku, kterou možná nebudete potřebovat.</blockquote>
<p><strong>Background Music</strong> je zdarma a s otevřeným zdrojovým kódem a poskytuje objem pro jednotlivé aplikace. Háček: zapadá hluboko do audio systému a má za sebou historii lámání na novějších verzích macOS a postrádá zesílení, profily a auto-ducking. Pokud to na vašem nastavení funguje, skvělé – ale je to hazard napříč upgrady.</p>
<p><strong>FineTune</strong> je bezplatná aplikace na panelu nabídek s otevřeným zdrojovým kódem ve stejném duchu jako SoundDial. Je to dobrý výchozí bod, pokud je rozpočet jediným zájmem, i když je to komunitní projekt bez profilů a nevýrazného lesku.</p>
<p><strong>eqMac</strong> je bezplatný systémový EQ a booster. Je to skvělé pro tvarování celkového zvuku, ale není to skutečný mix pro jednotlivé aplikace – upravujete celý výstup, ne jednotlivé aplikace.</p>
<p><strong>SoundSource</strong> od Rogue Amoeba (kolem 39 $) je možnost profesionální úrovně: EQ pro každou aplikaci, směrování výstupu na aplikaci a seriózní funkce zvukového inženýra. Je vynikající – ale vyžaduje přímé stažení a instalaci komponenty pro zachycení zvuku a stojí více než dvojnásobek toho, co SoundDial. Pokud chcete směrování a EQ na úrovni studia, je to volba. Pokud chcete pouze mixér ve stylu Windows, je to přehnané.</p>

<h2>Kterou byste si měli pořídit?</h2>
<p>Pokud je vaším cílem „aby můj Mac fungoval jako Windows Volume Mixer“ bez stahování, ovladačů nebo rizika, SoundDial je nejčistší odpověď. Získáte hlasitost aplikace, ztlumení, zesílení, profily a automatické ztlumení, vše bezpečné pro App Store, za jednorázovou částku 14,99 EUR – bez předplatného. Místo toho zvolte SoundSource pouze v případě, že konkrétně potřebujete EQ a výstupní směrování pro jednotlivé aplikace, a vyzkoušejte bezplatné možnosti, pokud vám vyhovuje jejich odstraňování v aktualizacích macOS.</p>

<p><strong>Jste připraveni dát každé aplikaci vlastní objem?</strong> <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> a nastavte svůj první mix asi za dvě minuty.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Jak zvýšit hlasitost Mac pro nedoslýchavé",
    description: "Máte problém slyšet Mac i při maximální hlasitosti? Naučte se, jak zlepšit a zpřesnit zvuk v jednotlivých aplikacích pro nedoslýchavé, včetně SoundDial a vestavěných tipů.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Pokud váš Mac není dostatečně hlasitý ani při maximální hlasitosti, je nejrychlejší spolehlivá oprava <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store směšovač menu, který vám umožní vylepšit libovolnou aplikaci na více než 100 % a ztlumit vše ostatní. To znamená hlasitější a čistší řeč z přehrávače FaceTime, videa nebo filmů, aniž byste museli napínat celý systém. Je to 14,99 EUR, jednorázově.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Jak zvýšit hlasitost Mac pro nedoslýchavé" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč maximalizovat posuvník hlasitosti stále nestačí</h2>
<p>Pro nedoslýchavé posluchače má posuvník hlasitosti macOS dva frustrující limity. Za prvé, omezuje na 100 % toho, co samotná aplikace vydává. Pokud byl podcast, video nebo hovor nahrán tiše, „plná hlasitost“ je stále příliš tichá. Za druhé, macOS nemá vestavěný mixážní pult pro jednotlivé aplikace. Windows má jeden už roky, ale na Mac sdílí každá aplikace jednu hlavní úroveň. Takže když vše zapnete, abyste slyšeli tichý hlas, hudba na pozadí a zvuky upozornění budou také nepříjemně hlasité.</p>
<p>Co vlastně potřebujete, je schopnost dělat <em>jeden</em> aplikace hlasitější než ostatní, posuňte ji za její normální strop a omezte konkurenční zvuky, aby řeč vynikla. To je přesně mezera, kterou tyto nástroje zaplňují.</p>

<h2>Nejprve použijte bezplatné nastavení usnadnění macOS</h2>
<p>Před přidáním jakékoli aplikace se vyplatí nastavit to, co již macOS nabízí. Ty pomáhají srozumitelnosti, i když nepřidávají syrovou hlasitost:</p>
<ul>
<li><strong>Mono zvuk:</strong> Nastavení systému &rarr; Usnadnění &rarr; Audio, zapněte „Přehrávat stereo zvuk jako mono“. Pokud je váš sluch na jedno ucho silnější, vysílá se plný signál oběma, takže neztratíte polovinu dialogu.</li>
<li><strong>Úprava vyvážení:</strong> V nastavení systému &rarr; Sound přetáhněte vyvážení vlevo/vpravo směrem k silnějšímu uchu.</li>
<li><strong>Omezte zvuky na pozadí:</strong> Nižší hudba a prostředí v aplikacích, které to umožňují, takže hlasy nebojují se zvukovou stopou.</li>
<li><strong>Ubytování pro sluchátka:</strong> Pokud používáte AirPods nebo Beats, Nastavení systému &rarr; Usnadnění &rarr; Zvuk &rarr; Umístění sluchátek může zesílit jemné zvuky a naladit řeč.</li>
</ul>
<p>Jsou opravdu užitečné a nic nestojí. Ale žádný z nich nevytváří jedinou tichou aplikaci <em>hlasitější než 100 %</em>a to je obvykle ten pravý problém.</p>

<h2>Jak zvýšit jednu aplikaci o 100 % pomocí SoundDial</h2>
<p>SoundDial žije v liště nabídek a zobrazuje posuvník pro každou aplikaci, která aktuálně přehrává zvuk. Zde je pracovní postup, který nejvíce pomáhá při poslechu nedoslýchavých:</p>
<ul>
<li><strong>Vylepšete aplikaci, kterou posloucháte.</strong> Přetažením posuvníku nad 100 % zesílíte tichý videohovor nebo podcast nad rámec toho, co aplikace umožňuje sama o sobě.</li>
<li><strong>Vše ostatní ztlumte nebo snižte.</strong> Stáhněte hudbu, karty prohlížeče nebo zvuky oznámení, aby nic nekonkurovalo hlasu, který se snažíte sledovat.</li>
<li><strong>Zapněte automatické uhýbání.</strong> Když začnete mluvit během hovoru, SoundDial automaticky ztlumí další zvuk, takže osoba, se kterou mluvíte, jasně projde, a poté jej obnoví.</li>
<li><strong>Uložte profil svazku.</strong> Vytvořte si profil „videohovorů“, kde je vaše konferenční aplikace vylepšená a vše ostatní je tiché, a poté na něj okamžitě přepněte, místo abyste pokaždé znovu upravovali.</li>
<li><strong>Rychle přepínejte výstup.</strong> Přeskakujte mezi reproduktory, náhlavní soupravou nebo zařízením připojeným k naslouchátku ze stejné nabídky, aniž byste museli procházet nastavení systému.</li>
</ul>
<p>Funkce boost je zde klíčová. Vzhledem k tomu, že zvyšuje výstup aplikace nad své přirozené maximum, šeptem tichý záznam se stává něčím, co skutečně uslyšíte, zatímco zbytek vašeho systému zůstane na pohodlné úrovni.</p>

<h2>Rychlé slovo o zkreslení</h2>
<p>Jakékoli softwarové zesílení zesílí vše, co je v signálu, takže posunutí daleko přes 100 % na již tak hlasitý zvuk může způsobit oříznutí. V praxi posilování <em>tichý</em> obsah až do pohodlné a srozumitelné úrovně zní čistě. Začněte skromně, zvedněte, dokud nebude řeč čistá, a ustupte, pokud začne znít drsně. Na ochraně vašeho zbývajícího sluchu záleží, zaměřte se proto spíše na čistotu než na maximální hlasitost.</p>

<h2>Jak si SoundDial stojí v porovnání s alternativami</h2>
<p>Máte několik možností a upřímnost vám pomůže vybrat tu správnou:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 $):</strong> Skutečně profesionální, s ekvalizérem pro jednotlivé aplikace a výstupním směrováním. Pokud chcete vyřezávat frekvence pro ztrátu sluchu, je to mocné. Stojí však více než dvakrát tolik, vyžaduje přímé stažení a nainstaluje ovladač pro zachytávání zvuku. To je více nastavení a přístupu k systému, než si mnoho lidí přeje.</li>
<li><strong>Background Music (zdarma, open-source):</strong> Nabízí hlasitost pro jednotlivé aplikace zdarma, ale postrádá zesílení, profily a automatické ztlumení a na novějších verzích macOS se může zlomit, protože se zapojuje hluboko do audio systému.</li>
<li><strong>FineTune (zdarma, open-source):</strong> Lehká aplikace pro hlasitost na panelu nabídek. Na základy fajn, ale bez zesílení, profilů a uhýbání, o které se opírají nedoslýchaví posluchači.</li>
<li><strong>eqMac (zdarma):</strong> Ekvalizér s posilovačem. Užitečné pro tvarování zvuku, ale je postaveno spíše na EQ než na čistém mixování a profilech podle aplikace.</li>
</ul>
<p>Kde? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vyniká vyvážeností ceny, bezpečnosti a specifických funkcí, na kterých zde záleží. Vzhledem k tomu, že je na Mac App Store, je zkontrolován společností Apple a v sandboxu, instaluje se čistě bez DMG a nepotřebuje žádné zvukové ovladače ani systémová rozšíření. Získáte zesílení pro jednotlivé aplikace, ztlumení, profily hlasitosti a automatické ztlumení v jednom jednorázovém nákupu v hodnotě 14,99 EUR, aniž by se nic vrtalo do zvukové sady macOS.</p>

<h2>Sečteno a podtrženo</h2>
<p>Nejprve si nastavte bezplatné možnosti usnadnění macOS, které se vyplatí mít. Ale pokud je skutečným problémem to, že jedna aplikace je prostě příliš tichá, potřebujete nástroj, který dokáže jednu aplikaci posunout přes 100 % a zbytek ztišit. To je celý smysl vylepšení pro jednotlivé aplikace a macOS to nedělá samo o sobě.</p>

<p>Jste připraveni skutečně slyšet váš Mac? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> za 14,99 €, vylepšete aplikaci, kterou potřebujete, a nechte automatické uhýbání a profily, aby byla řeč čistá.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Jak posílit tichou aplikaci na Mac (minulá maximální hlasitost)",
    description: "Jedna aplikace je příliš tichá i na 100 %? Vylepšete právě tuto aplikaci nad její maximum na Mac pomocí SoundDial, směšovače hlasitosti pro jednotlivé aplikace. Zde je nejrychlejší oprava plus alternativy.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Pokud je jedna aplikace příliš tichá i při maximální hlasitosti, je nejrychlejší spolehlivá oprava <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, směšovač hlasitosti pro jednotlivé aplikace pro macOS. Poskytuje každé aplikaci vlastní posuvník plus hlasitost <strong>posílení</strong> která posouvá jedinou aplikaci za 100 %, takže tichý videohovor nebo karta prohlížeče jsou hlasitější, aniž byste se dotkli hlasitosti systému. Je to jednorázová aplikace za 14,99 EUR na Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Jak posílit tichou aplikaci na Mac (minulá maximální hlasitost)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč je jedna aplikace tichá i na 100 %</h2>
<p>macOS má pouze jeden hlavní svazek. Když to zvednete, všechno se zesílí. Ale každá aplikace také vydává zvuk na své vlastní interní úrovni a tato úroveň se velmi liší. Tiše zvládnutý klip YouTube, volající Zoom se špatným mikrofonem, hra s nízkým mícháním dialogů nebo karta prohlížeče s měkkým streamem, to vše může sedět hluboko pod vším ostatním, dokonce i s vaším Mac na plné pecky.</p>
<p>Skutečný problém: macOS má <strong>žádný vestavěný mixér hlasitosti pro jednotlivé aplikace</strong>. Windows má jeden už roky (mixér hlasitosti, klikněte pravým tlačítkem na ikonu reproduktoru). Na Mac neexistuje žádný nativní způsob, jak zapnout jednu aplikaci, zatímco zbytek nechat na pokoji, a rozhodně žádný způsob, jak rozšířit jednu aplikaci. <em>výše</em> jeho normální maximum. To je mezera, na kterou narazíte.</p>

<h2>Nejrychlejší oprava: vylepšete pouze jednu aplikaci</h2>
<p>Mixér pro jednotlivé aplikace to řeší tím, že se vloží mezi vaše aplikace a váš výstup, takže může každý stream nezávisle zvýšit nebo snížit a jeden zesílit nad 100 %. s <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, tok je krátký:</p>
<ul>
<li>Nainstalujte ze Mac App Store a otevřete jej. Žije ve vašem menu, ne v plovoucím okně.</li>
<li>Kliknutím na ikonu na liště nabídek zobrazíte posuvník pro každou aplikaci, která aktuálně přehrává zvuk.</li>
<li>Najděte tichou aplikaci a přetáhněte její posuvník za 100 % a použijte zesílení. Zesiluje pouze tuto aplikaci.</li>
<li>Vše ostatní nechte tam, kde to je. Hlasitost systému a další aplikace zůstanou nedotčeny.</li>
</ul>
<p>Vzhledem k tomu, že podpora je na aplikaci, můžete tichý videohovor posouvat na pohodlnou úroveň a zároveň zabránit tomu, aby hudba nebo oznámení drásaly uši. To je hlavní věc, kterou vestavěné ovládací prvky macOS prostě neumí.</p>

<h2>Poznámka k posílení a oříznutí</h2>
<p>Boost je skutečně užitečný, ale je to zesílení, ne magie. Pokud je původní zvuk aplikace velmi tichý nebo již zkreslený, jeho prudké zatočení může způsobit oříznutí nebo jasnější syčení na pozadí. V praxi mírné zesílení vyřeší naprostou většinu situací „tento hovor je příliš tichý“. Posuňte ji nahoru, dokud se aplikace nebude cítit pohodlně, místo abyste ji bouchli do stropu, a zvuk zůstane čistý.</p>

<h2>Kromě posilování: co ještě pomáhá</h2>
<p>Jakmile budete mít kontrolu v jednotlivých aplikacích, několik funkcí způsobí, že problém s tichou aplikací nadobro zmizí:</p>
<ul>
<li><strong>Objemové profily</strong> — uložit nastavení (např. „zesílit Zoom, snížit Spotify, ztlumit Slack“) a vyvolat je jedním kliknutím namísto opětovného přetahování posuvníků při každé schůzce.</li>
<li><strong>Auto-ducking</strong> — Při přehrávání zvolené aplikace automaticky nakloní další aplikace, takže přes zvuk na pozadí bude zřetelně slyšet zesílený hovor.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — ztišit jednu hlučnou aplikaci, aniž by se pozastavilo cokoli jiného.</li>
<li><strong>Rychlé přepínání výstupů</strong> — skok mezi reproduktory, sluchátky nebo externím rozhraním ze stejné nabídky.</li>
</ul>

<h2>A co bezplatné a profesionální alternativy?</h2>
<p>Máte možnosti a na upřímnosti zde záleží, takže tady je skutečná krajina.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) je pro-grade volbou kolem 39 $. Poskytuje hlasitost na aplikaci plus ekvalizér na aplikaci a plné výstupní směrování, více energie, než většina lidí potřebuje. Kompromisy: stojí více než dvojnásobek, jde o přímé stažení spíše než App Store a instaluje ovladač pro zachytávání zvuku, aby mohl pracovat. Pokud chcete sadu nástrojů pro audio inženýra, je to vynikající. Pokud chcete jen jednu aplikaci hlasitější, je to přehnané.</p>
<p><strong>Background Music</strong> je zdarma a s otevřeným zdrojovým kódem a může dělat základní objem pro jednotlivé aplikace. Ale je to komunitní projekt, který má za sebou historii lámání na novějších verzích macOS a postrádá posílení přes 100 %, profily a automatické uhýbání. Skvělé, pokud je jediným požadavkem zdarma a nevadí vám občasné rozbití.</p>
<p><strong>FineTune</strong> je bezplatná aplikace na liště nabídek s otevřeným zdrojovým kódem a <strong>eqMac</strong> je bezplatný EQ a systémový booster. Obojí stojí za vyzkoušení, pokud je váš rozpočet nulový. Stačí vědět, že jsou spravovány komunitou, zaměřeny na EQ nebo lehčí na správu jednotlivých aplikací, a nesdružujte profily a schovávejte se do jednoho leštěného balíčku.</p>
<p>Kde? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pozemky: je to střední cesta. Levnější než SoundSource, schopnější a spolehlivější než bezplatné nástroje, a je na světě <strong>Mac App Store</strong>, což znamená, že je zkontrolováno společností Apple, v izolovaném prostoru a instaluje se čistě s <strong>žádné DMG a žádné zvukové ovladače nebo rozšíření</strong> pro připojení k vašemu systému. Pro většinu lidí je upřímné doporučení jednoduché: chcete-li opravu s co nejmenšími problémy, která vám také poskytne podporu, profily a automatické uhýbání, je to nejlepší hodnota za 14,99 EUR jednorázově.</p>

<h2>Rychlá odpověď, znovu</h2>
<blockquote>Chcete-li, aby byla jedna aplikace Mac hlasitější, než je její maximum, použijte směšovač hlasitosti pro každou aplikaci se zesílením. Otevřete SoundDial z panelu nabídek, najděte posuvník tiché aplikace a přetáhněte jej za 100 %. Jen ta aplikace bude hlasitější.</blockquote>

<p>Přestaňte bojovat s jediným posuvníkem hlasitosti pro celý váš Mac. Získejte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 € jednou, vylepšete tuto tichou aplikaci za její limit během několika sekund a uložte si profil, abyste na to už nikdy nemuseli myslet.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Jak zesílit tichá videa a podcasty na vašem Mac",
    description: "Některá videa, podcasty a přednášky YouTube jsou příliš tiché i na 100 %. Zde je návod, jak zvýšit hlasitost jednotlivých aplikací nad maximum na macOS pomocí SoundDial.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Nejrychlejší a nejspolehlivější oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store směšovač menu, který dává každé aplikaci vlastní posuvník hlasitosti a skutečný <strong>posílení</strong> která překračuje 100 %. Otevřete prohlížeč nebo přehrávač podcastů, přetáhněte jeho posuvník nad maximum a tiché video nebo přednáška okamžitě zesílí – žádné ovladače, žádný restart.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Jak zesílit tichá videa a podcasty na vašem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč jsou některá videa a podcasty příliš tiché</h2>
<p>Natočíte svůj Mac na 100 % a rozhovor je stále jen šepot. To není vaše představa. Zvuk je zvládnut na velmi odlišných úrovních hlasitosti – webinář nahraný na mikrofonu notebooku, tichý nezávislý podcast nebo nahrání staré přednášky může sedět 15–20 dB pod profesionálně vytvořeným videem YouTube. Hlasitost vašeho systému je již maximální, takže nezbývá žádný prostor, který byste mohli dát.</p>
<p>Zde je háček: macOS má <strong>žádný vestavěný mixér hlasitosti pro jednotlivé aplikace</strong>. Windows má jeden už roky (směšovač hlasitosti v systémové liště), ale na Mac se tlačítka hlasitosti posouvají o jednu globální úroveň pro všechno. Neexistuje žádný nativní způsob, jak říci „hlasitější pouze tuto kartu prohlížeče“ – natož posouvat jednu aplikaci přes 100 %.</p>

<h2>Skutečná oprava: zvýšení hlasitosti na aplikaci</h2>
<p>Chcete-li, aby byl tichý zdroj hlasitější, než vaše reproduktory běžně umožňují, potřebujete software, který aplikuje zesílení <em>konkrétně tu aplikaci</em> a může zesílit nad 100% strop. To je přesně to, co dělá mixér pro jednotlivé aplikace s funkcí boost.</p>
<p>s <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, každá spuštěná aplikace se zobrazí v seznamu na liště nabídek s vlastním posuvníkem. Posuňte tichou aplikaci až o 150 % nebo 200 % a zvuk se zesílí v reálném čase. Protože podpora je pro každou aplikaci, vše ostatní – vaše hudba, oznámení, hovor v jiném okně – zůstane na normální úrovni. Nenabijete celý systém, abyste slyšeli jeden jemný podcast.</p>
<blockquote>Globální hlasitost se ptá "Jak hlasitý je Mac?" Mixér pro jednotlivé aplikace se ptá: „Jak hlasitý je <em>toto</em> aplikace?" — což je otázka, na které vlastně záleží, když je jedno video tiché a zbytek je v pořádku.</blockquote>

<h2>Jak zesílit tiché video nebo podcast, krok za krokem</h2>
<ul>
<li><strong>Nainstalujte SoundDial</strong> od Mac App Store. Je v sandboxu a zkontrolována společností Apple, takže se instaluje čistě jako kterákoli jiná aplikace – žádné samostatné stahování, žádný zvukový ovladač, žádná houska s povolením.</li>
<li><strong>Začněte hrát</strong> tiché video, epizoda podcastu nebo přednáška v jakékoli aplikaci, kterou používáte – Safari, Chrome, klient podcastů, VLC.</li>
<li><strong>Klikněte na ikonu SoundDial</strong> ve vašem menu. U každé aplikace, která aktuálně vydává zvuk, se zobrazí posuvník.</li>
<li><strong>Přetáhněte posuvník dané aplikace nad 100 %</strong> — nejprve vyzkoušejte 150 % a poté zatlačte výše, pokud je stále příliš měkký. Změna je okamžitá.</li>
<li><strong>Vše ostatní nechte být.</strong> Hlasitější je pouze aplikace, kterou jste zvýšili; váš systém zůstane vyvážený.</li>
</ul>
<p>Pokud zjistíte, že každý den vylepšujete stejné aplikace – řekněme přehrávač podcastů a váš prohlížeč – můžete toto nastavení uložit jako <strong>objemový profil</strong> a vyvolat jej jedním kliknutím namísto opětovného nastavování pokaždé.</p>

<h2>Pozor na posilování</h2>
<p>Zesílení nad 100 % přidává zisk a zisk má limity. Zatlačte na velmi tichý a nekvalitní záznam dostatečně silně a můžete slyšet ořezávání nebo zkreslení – to je zdroj, kterému dochází čistý signál, ne chyba v aplikaci. Zesilujte, dokud nebude pohodlně slyšitelný, a pokud začne znít drsně, ustupte. Na vestavěných reproduktorech notebooku může extrémní zesílení také zatěžovat řidiče, takže tam jděte snadněji než s dobrými sluchátky nebo externími reproduktory.</p>

<h2>A co bezplatné nebo vestavěné možnosti?</h2>
<p>Máte alternativy a stojí za to být k nim upřímný:</p>
<ul>
<li><strong>Hlasitost systému + posuvníky na úrovni aplikace.</strong> Některé přehrávače (VLC, několik prohlížečů prostřednictvím rozšíření) vám umožňují zesílit vlastní zvuk. Dobře, pokud to někdy potřebujete pouze v jedné aplikaci – ale musíte konfigurovat každou aplikaci zvlášť, bez jednotného ovládání a bez profilů.</li>
<li><strong>eqMac</strong> je bezplatný EQ a booster. Může zvýšit hlasitost v celém systému, ale je to globální nástroj, nikoli čistý mix pro jednotlivé aplikace, a funguje na úrovni celého výstupu.</li>
<li><strong>Background Music</strong> je bezplatný a open source a nabízí objem pro jednotlivé aplikace. Spoléhá se však na nastavení zachycování zvuku, které se může rozbít na novějších verzích macOS, a postrádá vyhrazené zesílení, profily a automatické ztlumení.</li>
<li><strong>FineTune</strong> je bezplatná aplikace s otevřeným zdrojovým kódem nabídek – odlehčená možnost, pokud chcete základy a nevadí vám komunitně spravovaný software.</li>
<li><strong>SoundSource</strong> od Rogue Amoeba (~ 39 $) je profesionální těžká váha: EQ na aplikaci, výstupní směrování, funguje. Vyžaduje také stažení a ovladač pro zachycení zvuku a stojí více než dvojnásobek SoundDial. Přehnané, pokud vše, co chcete, je zesílit tichý zvuk.</li>
</ul>

<h2>Proč je SoundDial praktickou volbou</h2>
<p>SoundDial je ideální pro tento problém. Jeho <strong>14,99 € jednorázově</strong> — žádné předplatné — a žije dál <strong>Mac App Store</strong>, což znamená, že je umístěn v karanténě, zkontrolován společností Apple a instaluje se bez jakéhokoli DMG nebo systémového rozšíření, kterému lze důvěřovat. Získáte podporu pro každou aplikaci, pro kterou jste skutečně přišli, plus profily, ztlumení pro každou aplikaci, rychlé přepínání výstupu a <strong>auto-ducking</strong> které ponoří další aplikace, když se potřebujete soustředit na jednu. Dělá to nahlas jednoduše a zbytek dělá dobře.</p>

<p><strong>Už vás nebaví poslouchat tichá videa a podcasty?</strong> <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> za 14,99 € a dejte každé aplikaci vlastní hlasitost – s podporou, abyste cokoli jasně slyšeli.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Jak nastavit jinou hlasitost pro každou aplikaci na Mac",
    description: "macOS nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Zde je návod, jak nastavit nezávislé, trvalé úrovně hlasitosti pro každou aplikaci na Mac pomocí SoundDial a alternativ.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>macOS nemá žádný vestavěný způsob, jak nastavit pro každou aplikaci jinou hlasitost, takže potřebujete směšovač hlasitosti na liště nabídek. Nejrychlejší a nejspolehlivější oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikaci Mac App Store, která každé aplikaci poskytuje vlastní posuvník hlasitosti, ztlumení pro každou aplikaci a podporu, která posouvá tiché aplikace za 100 %. Nastavte své úrovně jednou a budou se držet.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Jak nastavit jinou hlasitost pro každou aplikaci na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč Mac nemá ovládání hlasitosti pro jednotlivé aplikace</h2>
<p>Pokud jste přešli ze Windows, pravděpodobně jste hledali ekvivalent Windows Volume Mixer, malý panel, kde má každá aplikace svůj vlastní posuvník. Není tam. macOS nabízí pouze jeden globální systémový svazek. Ať už jde o video YouTube, hovor Zoom, Spotify nebo hru, všechny sdílejí stejnou mistrovskou úroveň.</p>
<p>To je v pořádku, dokud není. Chat Discord přehluší vaši hudbu. Reklama v prohlížeči běží na plnou hlasitost, zatímco podcast tiše hraje pod ní. Vaše hra je ohlušující, ale hlasový hovor na pozadí je příliš tichý. Jediným „řešením“, které vám Apple nabízí, je otevřít každou aplikaci a upravit její vnitřní hlasitost ručně, pokud ji aplikace vůbec má, a opakovat to při každé relaci.</p>
<p>Chcete-li získat skutečnou kontrolu pro jednotlivé aplikace, potřebujete malý nástroj, který je umístěn mezi aplikacemi a výstupním zařízením. Níže je uvedeno, jak to udělat správně, plus upřímné poznámky o alternativách.</p>

<h2>Nejrychlejší způsob: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> žije na liště nabídek a uvádí všechny aplikace, které aktuálně přehrávají zvuk. Každý z nich má samostatný posuvník. Zde je celý pracovní postup:</p>
<ul>
<li><strong>Nainstalujte ze Mac App Store.</strong> Je zkontrolován společností Apple a uzavřen v sandboxu, takže zde není žádný DMG, žádný zvukový ovladač ani žádné rozšíření jádra nebo systému ke schválení. Instaluje se jako každá normální aplikace a lze ji odstranit stejným způsobem.</li>
<li><strong>Klikněte na ikonu na liště nabídek.</strong> U každé aktivní aplikace uvidíte posuvník a hlavní ovládací prvek.</li>
<li><strong>Přetažením nastavíte úrovně.</strong> Sklopte Discord dolů, posuňte Spotify nahoru a zcela ztlumte hlučnou aplikaci na kartě prohlížeče jediným kliknutím.</li>
<li><strong>Posilte tiché aplikace.</strong> Pokud je aplikace příliš měkká i při 100 %, posuňte ji nad 100 % pomocí zvýšení pro každou aplikaci.</li>
<li><strong>Uložit profil.</strong> Uložte si svůj „herní“, „pracovní hovor“ nebo „hudební“ mix a okamžitě mezi nimi přepínejte místo toho, abyste každý den přetahovali posuvníky.</li>
</ul>
<p>Dvě funkce stojí za zmínku, protože řeší ty nejnepříjemnější scénáře:</p>
<ul>
<li><strong>Auto-ducking</strong> automaticky sníží ostatní aplikace, když se vybraná aplikace přehrává, takže vaše hudba při příchozím hovoru klesá a poté se vrací, žádné ruční šťouchání.</li>
<li><strong>Rychlé přepínání výstupů</strong> umožňuje přeskakovat mezi sluchátky a reproduktory ze stejné nabídky, aniž byste se museli ponořit do nastavení systému.</li>
</ul>
<p>Protože se úrovně pamatují pro každou aplikaci a ukládají se do profilů, je to část, kterou většina lidí ve skutečnosti chce: jednou ji nastavíte a <em>pobyty</em> nastavit.</p>

<h2>Bezplatné a placené alternativy, upřímně porovnány</h2>
<p>SoundDial není jedinou možností a v závislosti na vašich potřebách může stačit bezplatný nástroj. Tady je férový přehled.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource je profesionální těžká váha. Kromě hlasitosti pro jednotlivé aplikace provádí ekvalizér pro jednotlivé aplikace a úplné směrování výstupu, takže můžete poslat jednu aplikaci do sluchátek a druhou do reproduktorů. Je to opravdu vynikající. Kompromisy: stojí to kolem 39 $ a nejedná se o čistou instalaci App Store, jde o přímé stažení, které vyžaduje přidání ovladače pro zachycení zvuku do vašeho systému. Pokud jste audio profesionál, který potřebuje EQ a směrování, stojí to za to. Pokud chcete, aby každá aplikace měla správnou hlasitost, je to více nástrojů a více nastavení, než potřebujete.</p>

<h2>Background Music (open-source, zdarma)</h2>
<p>Background Music je bezplatná aplikace s otevřeným zdrojovým kódem, která nabízí objem pro jednotlivé aplikace a automatické pozastavení. Háček je ve spolehlivosti: instaluje virtuální zvukové zařízení a v novějších verzích macOS má historii poruch, které někdy vyžadují přeinstalaci nebo opravy po aktualizacích. Chybí mu také boost, uložené profily a opravdové auto-ducking. Skvělé, pokud chcete zdarma a nevadí vám občasná údržba.</p>

<h2>FineTune a eqMac</h2>
<p>FineTune je bezplatná aplikace na panelu nabídek s otevřeným zdrojovým kódem, jednoduchý výchozí bod. eqMac je bezplatný ekvalizér s celosystémovým boosterem, který je zaměřen spíše na EQ a celkový zisk, než na to, aby každé aplikaci dal vlastní trvalý posuvník. Obojí stojí za vyzkoušení, pokud je vaše potřeba úzká, ale ani jedno se nezaměřuje na pracovní postup „různý objem na aplikaci, uložené jako profily“.</p>

<h2>Které byste si měli vybrat?</h2>
<ul>
<li><strong>Chcete, aby to fungovalo čistě, s profily a automatickým uhýbáním?</strong> SoundDial za 14,99 EUR jednorázově, od App Store, bez nutnosti instalace ovladačů.</li>
<li><strong>Potřebujete ekvalizér a směrování zvuku podle aplikace a nevadí vám cena nebo ovladač?</strong> SoundSource.</li>
<li><strong>Chcete zdarma a jste v pořádku, když se aktualizuje macOS?</strong> Background Music, FineTune nebo eqMac.</li>
</ul>
<p>Skutečnou výhodou SoundDial je kombinace: nezávislá hlasitost, ztlumení a zesílení pro každou aplikaci, uložené do přepínatelných profilů, s automatickým zmenšením, to vše uvnitř izolovaného stahování App Store, kterému můžete důvěřovat a odinstalovat jej jediným kliknutím, za jednorázovou cenu 14,99 EUR namísto předplatného.</p>

<blockquote>Žádný ovladač, žádné rozšíření, žádné DMG. Nastavte hlasitost každé aplikace jednou, uložte ji jako profil a o zbytek se postará automatické ztlumení.</blockquote>

<p>Jste připraveni dát každé aplikaci vlastní objem? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> a během minuty nastavte perfektní mix.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Udělejte jednu aplikaci tišší než všechno ostatní na Mac",
    description: "Jedna hlasitá aplikace, která přehluší zbytek vašeho Mac? Zde je nejrychlejší a spolehlivý způsob, jak ztlumit hlasitost jedné aplikace, aniž byste se dotkli ostatních.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Chcete-li vypnout jednu aplikaci, zatímco vše ostatní zůstane na místě, použijte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, směšovač hlasitosti pro jednotlivé aplikace pro macOS. Otevřete ji, najděte hlasitou aplikaci v seznamu a přetáhněte její posuvník dolů. Tato aplikace se okamžitě ztiší, zatímco vaše hudba, hovory a další zvuk si zachovají svou vlastní úroveň. Je to nejrychlejší a nejspolehlivější oprava.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Udělejte jednu aplikaci tišší než všechno ostatní na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč to macOS dělá tak těžkým</h2>

<p>Zde je frustrující pravda: macOS nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows jeden má už roky (klikněte pravým tlačítkem na ikonu hlasitosti, otevřete Volume Mixer, hotovo), ale na Mac tlačítka hlasitosti a posuvník na liště nabídek ovládají pouze jednu věc: hlavní výstup. Ztlumte to a všechno bude tišší. Zapněte to a hlasitá aplikace bude stále hlasitá, jen hlasitější spolu se zbytkem.</p>

<p>Takže když jsou zvukové efekty hry bouřlivé, karta prohlížeče automaticky přehrává reklamu nebo se na vašem podcastu neustále objevují upozornění, vaše jediné nativní možnosti jsou neohrabané: ztlumit celý systém, prokousat se vlastními nastaveními hlasitosti každé aplikace (pokud vůbec nějaké má), nebo pachatele úplně ukončit. Nic z toho vám nedovolí jednoduše říct „udělejte tuto jednu aplikaci tišší a nechte všechno ostatní být“.</p>

<h2>Rychlá oprava: mixér hlasitosti pro jednotlivé aplikace</h2>

<p>Směšovač hlasitosti pro jednotlivé aplikace poskytuje každé spuštěné aplikaci vlastní nezávislý posuvník. To je přesně to ovládání, které vám chybí. s <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vypadá to takto:</p>

<ul>
<li><strong>Otevřete směšovač panelu nabídek.</strong> Klikněte na ikonu SoundDial a uvidíte živý seznam všech aplikací, které aktuálně přehrávají zvuk.</li>
<li><strong>Najděte toho hlasitého.</strong> Hra, prohlížeč, videohovor, zvuky upozornění, cokoli, co topí zbytek.</li>
<li><strong>Přetáhněte jeho posuvník dolů.</strong> Nastavte jej na 40%, 20%, kdekoli se cítí vyvážený. Změna je okamžitá a ovlivní pouze danou aplikaci.</li>
<li><strong>Vše ostatní nechte být.</strong> Váš hudební přehrávač, váš hovor, vaše další karty, všechny udržují hlasitost, kterou jste pro ně nastavili.</li>
</ul>

<p>Můžete také úplně ztlumit jednu aplikaci jedním kliknutím, zatímco ostatní hrají dál, nebo zvýšit tichou aplikaci nad 100 %, pokud je příliš tichá. Žádné restartování aplikace, žádné potápění v menu.</p>

<h2>Běžné případy, kdy vás to zachrání</h2>

<ul>
<li><strong>Hlasitá hra přes hudbu na pozadí.</strong> Pusťte hru na pohodlnou úroveň a udržujte pod ní svůj playlist na plné hlasitosti.</li>
<li><strong>Reklamy v prohlížeči a videa, které rostou.</strong> Připněte si prohlížeč níže, aby vás překvapivé automatické přehrávání nikdy nezklamalo.</li>
<li><strong>Oznámení se ozve během hovoru nebo podcastu.</strong> Vypněte aplikaci s vysokým obsahem oznámení, aniž byste ztišili zvuk, na kterém vám skutečně záleží.</li>
<li><strong>Tichý videohovor pod hlasitým médiem.</strong> Místo ztlumení hlasité aplikace zvyšte hovor nad 100 %, abyste lidi jasně slyšeli.</li>
</ul>

<h2>Nastavte to jednou pomocí profilů hlasitosti a automatického snižování</h2>

<p>Oprava jedné hlasité aplikace je pěkná, ale pravděpodobně budete chtít, aby zůstala opravena. SoundDial má dvě funkce, díky kterým je toto trvalé:</p>

<p><strong>Objemové profily</strong> vám umožní uložit sadu úrovní pro jednotlivé aplikace a vyvolat je jediným kliknutím. Vybudujte si profil „Hry“, kde hra sedí na 30 % a hudba na 100 %, a profil „Práce“, kde jsou hovory posíleny a vše ostatní je utlumeno. Přepínejte kontexty bez opětovného přetahování posuvníků pokaždé.</p>

<p><strong>Auto-ducking</strong> automaticky sníží ostatní aplikace, když se vybraná aplikace přehrává, a poté je vrátí zpět, takže hlasitá aplikace nikdy úplně neunese váš zvuk. Mezi profily, klesáním a rychlým přepínáním výstupu (přeskakování mezi reproduktory a sluchátky bez otevření Nastavení systému) jednou nastavíte rovnováhu a přestanete hlídat hlasitost.</p>

<h2>Jak si SoundDial stojí v porovnání s alternativami</h2>

<p>Existují další způsoby, jak získat objem pro jednotlivé aplikace na Mac. Zde je upřímný pohled:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 $)</strong> je skutečně profesionální: ekvalizér pro jednotlivé aplikace a plné výstupní směrování nad ovládáním hlasitosti. Stojí však více než dvojnásobek a vyžaduje samostatné stažení a ovladač pro zachycení zvuku. Pokud chcete sadu nástrojů na úrovni studia, je to vynikající. Pokud chcete vypnout pouze jednu aplikaci, je to víc, než potřebujete.</li>
<li><strong>Background Music</strong> je zdarma a s otevřeným zdrojovým kódem, což je skvělé, ale na novějších verzích macOS se může zlomit a postrádá zesílení hlasitosti, profily a automatické snížení hlasitosti.</li>
<li><strong>FineTune</strong> je bezplatná aplikace na liště nabídek s otevřeným zdrojovým kódem a <strong>eqMac</strong> je bezplatný EQ s boosterem. Obojí stojí za vyzkoušení, pokud je vaší prioritou zdarma, ale vyměňujete lesk, spolehlivost a funkce za cenu.</li>
</ul>

<p>SoundDial je na skvělém místě: 14,99 EUR jednorázově, bez předplatného. Protože je na Mac App Store, je zkontrolován společností Apple a v sandboxu a instaluje se čistě bez DMG, bez zvukových ovladačů a bez systémových rozšíření ke schválení. Získáte funkce, které jsou pro tento problém skutečně důležité, hlasitost pro jednotlivé aplikace, ztlumení, zesílení, profily a automatické ztlumení, bez cenovky 39 $ nebo křehkého bezplatného nástroje.</p>

<h2>Sečteno a podtrženo</h2>

<p>macOS vám nedovolí vypnout jedinou aplikaci, ale to je mezera, kterou můžete uzavřít během několika sekund. Nainstalujte mixážní pult pro jednotlivé aplikace, přetáhněte posuvník hlasité aplikace dolů a zbytek zvuku zůstane přesně tam, kde ho chcete mít. Uložte si profil a už nikdy nebudete bojovat.</p>

<p><strong>Jste připraveni umlčet jednu aplikaci, která neustále topí zbytek?</strong> Získejte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 €, jedna platba, žádné ovladače, žádné předplatné.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mac Audio Mixer pro streamery: Balance Mic, Game & Music",
    description: "Nejrychlejší způsob, jak vyvážit mikrofon, herní zvuk, hudbu a upozornění při streamování na Mac. SoundDial vám poskytuje mixážní pult pro jednotlivé aplikace s profily a zmenšováním.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Chcete-li vyvážit váš mikrofon, hru, hudbu a upozornění při streamování na Mac, nejrychlejší spolehlivou opravou je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, panel nabídek pro jednotlivé aplikace. macOS nemá žádný vestavěný mixážní pult, takže vám SoundDial umožňuje nastavit nezávislé úrovně pro každou aplikaci, zesílit tiché zdroje, uložit profily streamování a automaticky ukládat hudbu, když mluvíte.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Audio Mixer pro streamery: Balance Mic, Game &amp; Music" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Problém: macOS nemá ovládání hlasitosti pro jednotlivé aplikace</h2>
<p>Windows má Volume Mixer již roky. macOS se stále nedodává. Posuvník hlasitosti systému posouvá vše najednou, což je naživo k ničemu. Během streamu žonglujete alespoň se čtyřmi zdroji, které všechny bojují o stejný výstup:</p>
<ul>
<li><strong>Sledování vašeho hlasu / mikrofonu</strong> — potřebuje sedět nade vším.</li>
<li><strong>Zvuk hry</strong> — hlasité, dynamické a náchylné ke špičkám během akce.</li>
<li><strong>Hudba na pozadí</strong> - měl by zůstat zticha pod vaším komentářem.</li>
<li><strong>Upozornění a zvuky chatu</strong> — Discord, Stream Deck, upozornění pro sledující, upozornění.</li>
</ul>
<p>Bez ovládání v jednotlivých aplikacích skončíte s jízdou na jezdci hry v aplikaci, ručně ztlumíte Spotify a budete se modlit, aby hlasitá cutscéna nesrazila vaše diváky. To není mix, to je kontrola poškození.</p>

<h2>Co musí udělat správný streamovací mixér</h2>
<p>Nastavení zvuku zaměřené na tvůrce na Mac by vám mělo poskytnout čtyři věci: nezávislé úrovně pro jednotlivé aplikace, možnost zesílit příliš tichý zdroj, uložené konfigurace, které si můžete okamžitě vyvolat, a automatické ztlumení, aby hudba klesla ve chvíli, kdy mluvíte. SoundDial pokrývá všechny čtyři z panelu nabídek.</p>

<h3>1. Nezávislá hlasitost pro každou aplikaci</h3>
<p>Nastavte hru na 60 %, hudbu na 25 %, Discord na 80 % a prohlížeč na 40 % – každá aplikace má svůj vlastní posuvník. Nic nekrvácí do ničeho jiného. Můžete také okamžitě vypnout zvuk pro každou aplikaci, když se zdroj chová uprostřed streamu, aniž byste se dotkli samotné aplikace.</p>

<h3>2. Zvýšení hlasitosti pro tiché zdroje</h3>
<p>Některé aplikace a hry jsou prostě příliš tiché i na 100 %. Vylepšení SoundDial pro jednotlivé aplikace posouvá zdroj za jeho normální strop, takže mumlá hra nebo video s nízkou hlasitostí sedí tam, kde je potřebujete – žádné překódování, žádné pluginy.</p>

<h3>3. Profily hlasitosti pro různé scény</h3>
<p>To je funkce, která streamerům šetří nejvíce času. Váš mix „Just Chatting“ (hudba nahoru, hra dolů) se liší od vašeho mixu „Boss Fight“ (hra nahoru, hudba téměř tichá), což se liší od vašeho mixu „BRB“. Uložte si každý jako profil a přepínejte jedním kliknutím namísto přetahování čtyř posuvníků naživo.</p>

<h3>4. Auto-ducking, takže hudba pod vaším hlasem klesá</h3>
<p>Automatické ztlumení automaticky sníží zvuk na pozadí, když mluvíte, a vrátí ho, když přestanete. Pro sólo streamery je to rozdíl mezi jasným komentářem a hudbou, která neustále pohřbívá váš hlas – zpracovaná automaticky namísto ručně.</p>

<h2>Kam se hodí OBS</h2>
<p>OBS je váš nástroj pro vysílání, nikoli váš stolní mixér hlasitosti. OBS ovládá, jaké úrovně jdou do streamu pomocí panelu Audio Mixer a filtrů, ale funguje ze zdrojů zvuku, které zachycuje – nedosahuje do jednotlivých aplikací macOS a nevypíná je na systémové úrovni. Na Mac bylo získání čistého zvuku pro jednotlivé aplikace do OBS vždy tou bolestnou částí.</p>
<p>Praktický pracovní postup: použijte SoundDial k nastavení skutečných úrovní pro jednotlivé aplikace na vašem Mac, takže to, co vyjde, je již vyvážené, pak nechte OBS zachytit a doladit úrovně vysílání. Nastavte mix jednou u zdroje a OBS bude mít mnohem méně k boji. Rychlé přepínání výstupu v SoundDial vám také umožňuje přeskakovat mezi sluchátky a reproduktory, aniž byste se mezi scénami ponořili do nastavení systému.</p>

<h2>SoundDial vs. alternativy</h2>
<p>Máte možnosti a na upřímnosti zde záleží:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 $)</strong> — Pro-grade s ekvalizérem pro jednotlivé aplikace a plným výstupním směrováním. Je vynikající, ale stojí více než dvojnásobek, vyžaduje přímé stažení a nainstaluje ovladač pro zachytávání zvuku. Overkill, pokud potřebujete hlavně čisté úrovně pro jednotlivé aplikace, posílení a pokles.</li>
<li><strong>Background Music (zdarma, open-source)</strong> — skutečně užitečné a zdarma, ale na novějších verzích macOS se může zlomit a nemá žádné zesílení, žádné profily ani automatické uhýbání – přesné funkce, o které se streamery opírají.</li>
<li><strong>FineTune (bezplatná aplikace na liště nabídek s otevřeným zdrojovým kódem)</strong> — Odlehčené ovládání v jednotlivých aplikacích, ale komunitní projekt bez kombinace profilů a krácení vytvořené pro živé vysílání.</li>
<li><strong>eqMac (zdarma EQ + booster)</strong> — dobré pro tvarování tónů a zvýraznění, ale je to ekvalizér, nikoli streamovací mix pro jednotlivé aplikace.</li>
</ul>
<p>Úhel SoundDial: je to a <strong>14,99 € jednorázově</strong> nákup na <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Zkontrolováno společností Apple, v sandboxu a instaluje se čistě bez DMG a bez zvukových ovladačů nebo systémových rozšíření. Na této poslední části záleží pro streamery: méně komponent na úrovni jádra znamená méně překvapivých chyb při aktualizaci macOS noc před vaším streamem.</p>

<h2>Upřímný kompromis</h2>
<p>Pokud potřebujete vysílací ekvalizér a komplexní směrovací řetězce, SoundSource získá svou cenu. Pokud chcete zdarma kutilský nástroj a nevadí vám občasné rozbití, Background Music nebo FineTune vám postačí. Ale pokud chcete mix, který streamování skutečně vyžaduje – úrovně pro jednotlivé aplikace, zesílení, profily uložených scén a automatické ztlumení – z bezpečné instalace App Store, která přežije aktualizace macOS, SoundDial je ta nejpřímější cesta za peníze.</p>

<p><strong>Jste připraveni opravit zvuk streamu?</strong> Získejte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 € — nastavte si jednou úroveň mikrofonu, hry, hudby a upozornění, uložte je jako profily a nechejte automatické ztlumení, aby váš hlas zůstal nahoře.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Jak opravit praskání a praskání zvuku na macOS Tahoe",
    description: "Praskání nebo praskání zvuku po aktualizaci na macOS Tahoe 26? Opravte to porovnáním vzorkovací frekvence, resetováním CoreAudio, kontrolou kodeku Bluetooth a odstraněním konfliktů plug-inů. Zde je úplné pořadí odstraňování problémů.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Praskání a praskání po aktualizaci na macOS Tahoe 26 je téměř vždy nesouladem vzorkovací frekvence, nefunkčním vyjednáváním kodeku Bluetooth nebo zaseknutým procesem CoreAudio. Opravte to přizpůsobením výstupní vzorkovací frekvence v Audio MIDI Setup, resetováním <code>coreaudiod</code>, zapomenutí a opětovné spárování sluchátek Bluetooth a ukončení hostitelů audio plug-inů. Propracujte je v níže uvedeném pořadí.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Jak opravit praskání a praskání zvuku na macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Začněte s levnými opravami</h2>

<p>Než se dotknete něčeho technického, vylučte dvě věci, které většinu případů vyřeší do minuty:</p>

<ul>
<li><strong>Restartujte Mac.</strong> Aktualizace Tahoe překvapivě často ponechává zvukové démony v napůl migrovaném stavu. Čistý restart znovu načte CoreAudio od nuly a odstraní většinu praskání po aktualizaci.</li>
<li><strong>Odpojte a znovu připojte výstupní zařízení.</strong> Pokud se jedná o USB DAC, dokovací stanici nebo audio rozhraní, odpojte je, počkejte několik sekund a znovu je připojte. Vyzkoušejte také jiný port USB, ideálně jeden přímo na Mac, nikoli přes rozbočovač. Rozbočovače a displeje, které přenášejí zvuk, jsou běžným zdrojem praskání.</li>
</ul>

<p>Pokud hluk přežije restart, jde o problém s konfigurací, nikoli o závadu. Pokračuj.</p>

<h2>Přizpůsobte vzorkovací frekvenci (nejčastější příčina)</h2>

<p>Klasické praskání Tahoe pochází z nesouladu vzorkovací frekvence mezi tím, co vaše zařízení chce, a tím, co posílá macOS. Když aplikace přehrává zvuk 44,1 kHz a systém je uzamčen na 48 kHz (nebo naopak), převzorkování může zadrhávat nebo praskat.</p>

<ul>
<li>Otevřít <strong>Nastavení MIDI zvuku</strong> (v Aplikace → Nástroje nebo vyhledejte Spotlight).</li>
<li>V levém postranním panelu vyberte své výstupní zařízení.</li>
<li>Podívejte se na <strong>Formát</strong> rozevírací seznam. Zkuste to nastavit na <strong>48000,0 Hz, 2ch-24bit Integer</strong> a testovat.</li>
<li>Pokud praskání pokračuje, přepněte na <strong>44100,0 Hz</strong> a znovu otestovat.</li>
<li>U rozhraní se ujistěte, že vzorkovací frekvence odpovídá projektové frekvenci vašeho DAW.</li>
</ul>

<p>Přepnutí formátu také přinutí CoreAudio znovu vyjednat připojení, což samo o sobě vyřeší mnoho případů, i když se dostanete zpět na stejnou hodnotu.</p>

<h2>Resetovat CoreAudio</h2>

<p>CoreAudio běží jako démon na pozadí <code>coreaudiod</code>. Po velké aktualizaci macOS může udržovat zastaralý stav zařízení. Restartování je bezpečné a projeví se okamžitě, bez restartu.</p>

<p>Otevřete Terminal a spusťte:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Po zobrazení výzvy zadejte své heslo. Váš zvuk se na sekundu přeruší a pak se démon automaticky znovu spustí s čistým štítem. Toto je jediná nejúčinnější oprava praskání, které se objevuje z ničeho nic na počítači, který byl před aktualizací v pořádku.</p>

<h2>Zkontrolujte sluchátka a kodek Bluetooth</h2>

<p>Pokud k praskání dochází pouze u sluchátek AirPods nebo jiných sluchátek Bluetooth, problém je obvykle ve vyjednávání kodeku, nikoli ve vašich reproduktorech. Kvalita bezdrátového zvuku se zhoršuje, když je připojení přetížené nebo když macOS přejde do režimu volání s nízkou šířkou pásma.</p>

<ul>
<li><strong>Zapomeňte a znovu zařízení spárujte.</strong> Přejděte do Nastavení systému → Bluetooth, sejměte sluchátka a znovu je spárujte. Tím se resetuje vyjednaný kodek.</li>
<li><strong>Sledujte pokles režimu volání.</strong> Když aplikace otevře mikrofon, macOS přepne sluchátka Bluetooth na nekvalitní obousměrný profil, který zní křupavě. Ukončete konferenční a hlasové aplikace, které nepoužíváte, a vrátí se věrnost.</li>
<li><strong>Snižte rušení.</strong> Odejděte z přeplněných 2,4 GHz prostředí a odpojte zařízení Bluetooth, která nepotřebujete. Vytížené rozhlasové pásmo produkuje přerušované zvuky.</li>
<li><strong>Vypněte mikrofonní vstup</strong> v nastavení aplikace, pokud potřebujete pouze poslouchat, takže macOS zachovává vysoce kvalitní profil přehrávání.</li>
</ul>

<h2>Ukončete hostitele zvukových zásuvných modulů a virtuální ovladače</h2>

<p>Zvukový software třetí strany, který instaluje systémové rozšíření nebo virtuální zařízení, je po skoku operačního systému častým pachatelem, protože rozšíření jádra a zvuku často potřebují aktualizaci na novou verzi macOS. Mezi podezřelé patří virtuální zvukové směrovače, aplikace ekvalizéru, nástroje zpětné smyčky a starší nástroje založené na ovladačích.</p>

<ul>
<li>Ukončete jakýkoli ekvalizér, audio-router nebo aplikaci zpětné smyčky a vyzkoušejte, zda praskání přestane.</li>
<li>Zkontrolujte Nastavení systému → Obecné → Položky přihlášení &amp; Extensions pro zvuková rozšíření, která mohou vyžadovat aktualizaci nebo odstranění.</li>
<li>Aktualizujte tyto aplikace na jejich verze kompatibilní s Tahoe nebo odinstalujte ty, které již nepoužíváte. Naskládané ovladače zvuku se po velké aktualizaci často vzájemně střetávají.</li>
</ul>

<p>Pokud ukončení jedné z těchto aplikací ztiší praskání, našli jste svého viníka. Přeinstalujte aktuální verzi nebo ji nechte vypnutou.</p>

<h2>Zúžit to: celý systém nebo jedna aplikace?</h2>

<p>Zjistěte, zda se hluk vyskytuje všude nebo pouze v konkrétním softwaru. Přehrajte místní zvukový soubor, poté video v prohlížeči a poté hudební aplikaci. Pokud praskne pouze jedna aplikace, opravou je vlastní nastavení zvuku nebo aktualizace této aplikace, nikoli macOS. Pokud se jedná o celý systém, odpověď se nachází ve výše uvedených krocích.</p>

<p>Když stále uvíznete, spusťte nouzový režim (podržte tlačítko napájení na křemíku Apple a poté vyberte spouštěcí disk a podržte Shift). Nouzový režim nenačítá žádná rozšíření třetích stran. Pokud je tam zvuk čistý, příčinou je položka přihlášení nebo ovladač a můžete je po jednom znovu povolit, abyste to našli.</p>

<h2>Jakmile bude váš zvuk čistý</h2>

<p>Praskání je problém ovladače a vzorkovací frekvence, takže výše uvedené opravy jej ve skutečnosti řeší. Jakmile je ale přehrávání stabilní, můžete si všimnout jiného omezení: macOS stále nemá vestavěný mixážní pult pro jednotlivé aplikace, jako to dělá Windows. Hlasitou aplikaci nelze vypnout, aniž byste ztlumili vše.</p>

<p>To je ta mezera <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vyplní. Jedná se o směšovač na liště nabídek, který každé aplikaci poskytuje vlastní posuvník hlasitosti, ztlumení pro každou aplikaci a dokonce zvýšení hlasitosti pro tiché aplikace a navíc rychlé přepínání výstupu. Praskání to nevyřeší, ale jakmile je váš zvuk zdravý, každodenní ovládání je mnohem jednodušší.</p>

<p>Projděte výše uvedené kroky v uvedeném pořadí a začněte restartováním a kontrolou vzorkovací frekvence. Pokud později budete chtít skutečnou kontrolu nad aplikací čistého nastavení zvuku, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednorázový nákup za 14,99 EUR na Mac App Store v sandboxu bez ovladačů nebo DMG k instalaci.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Stuttering nebo vysekávání na Mac (Tahoe Fix)",
    description: "AirPods koktání, sekání nebo vypadávání zvuku na macOS Tahoe je téměř vždy rušení Bluetooth nebo automatické přepínání. Zde je návod, jak znovu spárovat, snížit přetížení 2,4 GHz a zastavit přerušování přehrávání.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>AirPods koktání nebo vysekávání na macOS Tahoe je téměř vždy rušení Bluetooth, ne rozbitá sluchátka. Obvyklými viníky jsou přetížení 2,4 GHz Wi-Fi a routeru, agresivní automatické přepínání zařízení a zastaralé párování. Znovu spárujte AirPods, vypněte automatické přepínání a odejděte od přeplněných 2,4GHz kanálů, abyste většinu případů opravili.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Zasekávání nebo vysekávání na Mac (Tahoe Fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč konkrétně AirPods spadnout na Mac</h2>

<p>AirPods používá Bluetooth, který sdílí přeplněné 2,4 GHz rádiové pásmo s Wi-Fi, mikrovlnami, zařízeními USB 3 a téměř každou chytrou zásuvkou ve vaší domácnosti. Vaše Mac je rušné rádio: žongluje s funkcemi Wi-Fi, Bluetooth, AirDrop a Continuity na překrývajících se anténách. Když se toto pásmo zahltí, zvuk Bluetooth se zadrhne jako první, protože nedokáže tolerovat zahozené pakety jako přenos souborů.</p>

<p>Tahoe nezhoršil váš AirPods magicky, ale čerstvá instalace macOS často resetuje chování rádia, znovu povolí předávání kontinuity a znovu vyjedná kodeky. Proto se zdá, že se problémy objevují hned po aktualizaci. Dobrá zpráva: opravy jsou dobře srozumitelné a většinou zdarma.</p>

<h2>Oprava 1: Znovu spárujte AirPods (proveďte nejprve)</h2>

<p>Zastaralé nebo poškozené párování přežije restartování a způsobuje občasné poklesy, které vypadají náhodně. Zcela odeberte a znovu přidejte připojení:</p>

<ul>
<li>Otevřít <strong>Nastavení systému, Bluetooth</strong>.</li>
<li>Klikněte na tlačítko info (i) vedle vašeho AirPods a vyberte <strong>Zapomeňte na toto zařízení</strong>.</li>
<li>Vložte AirPods do jejich pouzdra, zavřete víko, počkejte 15 sekund a poté jej otevřete.</li>
<li>Podržte tlačítko na zadní straně pouzdra, dokud kontrolka nezačne bíle blikat.</li>
<li>Znovu spárujte ze seznamu Bluetooth.</li>
</ul>

<p>Když tam budete, ujistěte se, že je firmware AirPods aktuální. Neexistuje žádný ruční aktualizátor, ale ponecháte je na chvíli v pouzdře poblíž připojeného iPhonu nebo Mac, aby se aktualizovaly na pozadí.</p>

<h2>Oprava 2: Vypněte automatické přepínání</h2>

<p>Toto je jediná největší příčina „odříznutí“ pro lidi v ekosystému Apple. Váš AirPods se vás snaží sledovat mezi vaším Mac, iPhonem a iPadem. Pokaždé, když si váš telefon myslí, že by měl zachytit zvuk, připojení na vašem Mac se zasekne a vytvoří půlsekundový výpadek uprostřed podcastu.</p>

<ul>
<li>Na Mac: Bluetooth klikněte na (i) vedle AirPods, nastavte <strong>Připojte se k tomuto Mac</strong> do <strong>Při posledním připojení k tomuto Mac</strong> místo Automaticky.</li>
<li>Na iPhonu: Nastavení klepněte na svůj AirPods, <strong>Připojte se k tomuto iPhone</strong>, vyberte si <strong>Při posledním připojení k tomuto iPhone</strong>.</li>
</ul>

<p>Tím se zastaví přetahování mezi zařízeními. Ručně vyberete, kam jde zvuk, což je malá cena za stabilní přehrávání.</p>

<h2>Oprava 3: Omezte přetížení 2,4 GHz</h2>

<p>Pokud dojde k poklesu během videohovorů, stahování nebo když jiní lidé streamují, vaše rádiové pásmo je přesycené. Několik praktických kroků:</p>

<ul>
<li><strong>Použijte pásmo Wi-Fi 5 GHz</strong> na vašem Mac. V nastavení routeru dejte 5GHz síti odlišný název a připojte se k ní. Tím se uvolní pásmo 2,4 GHz pro Bluetooth.</li>
<li><strong>Přesuňte rozbočovače USB 3 a Thunderbolt pryč</strong> z vašeho Mac a AirPods. USB 3 je notoricky známý 2,4GHz zdroj hluku; rozbočovač umístěný vedle vašeho notebooku může zničit Bluetooth na několik palců.</li>
<li><strong>Změňte kanál 2,4 GHz routeru</strong> na 1, 6 nebo 11 (nepřekrývající se možnosti) a vyhněte se přeplněným kanálům, které používají vaši sousedé.</li>
<li><strong>Udržujte přímou viditelnost.</strong> Tělesa a stěny absorbují 2,4 GHz. Pokud je váš Mac za vámi nebo v tašce, kapky se zhoršují.</li>
</ul>

<blockquote>Směrovače Wi-Fi 6E a Wi-Fi 7 mohou pomoci nepřímo: přepnutím zařízení na 6 GHz se vymaže pásmo 2,4 GHz, na kterém Bluetooth závisí. Ale špatně nakonfigurovaná síť, která vás drží zpět na 2,4 GHz, může situaci zhoršit. Zkontrolujte, na jakém pásmu vlastně jste.</blockquote>

<h2>Oprava 4: Resetujte zásobník Bluetooth a Continuity</h2>

<p>Pokud se opětovné spárování nezdařilo, resetujte samotná rádia:</p>

<ul>
<li>Vypněte a zapněte Bluetooth na liště nabídek a poté restartujte Mac. Restart vymaže překvapivý počet přechodných zvukových závad.</li>
<li>Resetujte SMC/NVRAM na Intel Mac nebo jednoduše úplně vypněte (ne restartujte) na 30 sekund na Apple Silicon.</li>
<li>Pokud nepoužíváte AirDrop nebo Handoff, deaktivace Handoff v Nastavení systému, Obecné, AirDrop &amp; Handoff omezí chvění rádia na pozadí.</li>
</ul>

<h2>Co to nevyřeší (a co vlastně dělá mixér hlasitosti)</h2>

<p>Aby bylo jasno v rozsahu: nic z toho není problém se softwarem a žádná aplikace pro svazky nemůže opravit odkaz Bluetooth. Pokud je váš zvuk <em>klesání</em>, řeš problém s rádiem výše. Aplikace jako <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ovládání hlasitosti jednotlivých aplikací, ztlumení a přepínání výstupu, nedotýkají se zásobníku Bluetooth, takže nepřestanou koktat. Tam, kde mix skutečně pomáhá, je přilehlá nepříjemnost, kterou si mnoho uživatelů AirPods spojuje s výpadky: jedna aplikace běží, zatímco jiná je příliš tichá, nebo potřebují rychle přeskakovat výstupy. To je problém s vyvážením objemu, ne s připojením.</p>

<p>Diagnostikujte poctivě. Pokud se zvuk na chvíli vypne a vrátí se, jedná se o rušení nebo automatické přepínání. Pokud jsou úrovně mezi aplikacemi nerovnoměrné, je to problém s mícháním, který můžete vyřešit pomocí softwaru.</p>

<h2>Rychlý kontrolní seznam</h2>

<ul>
<li>Zapomeňte a znovu spárujte AirPods.</li>
<li>Nastavte Mac i iPhone na <strong>Při posledním připojení</strong>, ne automaticky.</li>
<li>Přesuňte svůj Mac na 5GHz Wi-Fi; udržujte rozbočovače USB 3 mimo dosah.</li>
<li>Nastavte 2,4 GHz na kanál 1, 6 nebo 11.</li>
<li>Restartujte po přepnutí Bluetooth.</li>
</ul>

<p>Jakmile výpadky zmizí a budete chtít pouze čistší kontrolu nad hlasitostí jednotlivých aplikací, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> přidává správný směšovač hlasitosti pro jednotlivé aplikace, ztlumení, zesílení a rychlé přepínání výstupu, které macOS stále neobsahuje. Jedná se o jednorázový nákup 14,99 EUR na Mac App Store v sandboxu, bez nutnosti instalace ovladačů.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Pravý reproduktor mrtvý na Mac po aktualizaci Tahoe? Jak to opravit",
    description: "Jeden reproduktor nebo kanál přestal fungovat po aktualizaci na macOS Tahoe? Začněte posuvníkem vyvážení zvuku, poté resetujte Core Audio, vyzkoušejte nouzový režim a vylučte hardware. Přehledný průvodce řešením problémů.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Pokud váš pravý reproduktor ztichl po aktualizaci na macOS Tahoe, zkontrolujte zvuk <strong>jezdec vyvážení</strong> první — může se během aktualizace posunout. Přejděte do Nastavení systému &gt; Zvuk &gt; Výstup a ujistěte se, že vyvážení je v mrtvém středu. Pokud je to v pořádku, restartujte Core Audio, nabootujte do nouzového režimu a poté vyřaďte hardware. Většina případů je software.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Nefunkční pravý reproduktor na Mac po aktualizaci Tahoe? Jak to opravit" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Za prvé: posuvník vyvážení (opravuje to častěji, než byste si mysleli)</h2>

<p>Zaseknutý nebo posunutý posuvník vyvážení je jediným nejčastějším důvodem ztišení jednoho kanálu – a aktualizace macOS jej občas postrčí. Než přijmete to nejhorší:</p>

<ul>
<li>Otevřít <strong>Nastavení systému Zvuk &gt;</strong>.</li>
<li>Klikněte na <strong>Výstup</strong> a vyberte své reproduktory (vestavěné nebo externí zařízení).</li>
<li>Najděte <strong>Rovnováha</strong> posuvníku a přetáhněte jej přesně do středu. Pokud by byl vytažen doleva, váš pravý kanál by zněl jako mrtvý.</li>
</ul>

<p>Udělej to <em>na výstupní zařízení</em>. Nastavení vyvážení se pamatuje samostatně pro vestavěné reproduktory, sluchátka a každé externí rozhraní – takže centrované vestavěné vyvážení nepomůže, pokud je problém ve vašem USB DAC.</p>

<h2>Otestujte, zda se skutečně jedná o hardwarový kanál</h2>

<p>Rychle ovládněte hardware. Zahrajte si stereo stopu, kterou dobře znáte, a poté připojte kabelová sluchátka. Pokud oba kanály fungují ve sluchátkách, ale ne přes reproduktory, problém je za zvukovým jádrem (hardware reproduktoru nebo výstupní cesta). Pokud je stejný kanál mrtvý i ve sluchátkách, je to pravděpodobnější software nebo zvukový kodek logické desky.</p>

<p>Můžete také otevřít <strong>Hudba</strong> nebo QuickTime, zahrajte si něco a přepněte vyvážení silně doleva a poté silně doprava. Pokud se zvuk mezi kanály pohybuje čistě, oba reproduktory jsou živé a jedná se čistě o problém nastavení.</p>

<h2>Restartujte Core Audio</h2>

<p>macOS vede veškerý zvuk skrz <strong>coreaudiod</strong> proces. Po velké aktualizaci se jeho stav může zaklínit – výstupy zmizí, kanály klesnou nebo se hlasitost chová podivně. Restartování je bezpečné a přinutí macOS znovu sestavit zvukový graf:</p>

<ul>
<li>Otevřít <strong>Terminal</strong> (Aplikace &gt; Utility).</li>
<li>Spustit: <code>sudo killall coreaudiod</code></li>
<li>Zadejte své heslo. Zvukový démon se automaticky znovu spustí během sekundy nebo dvou.</li>
</ul>

<p>Nic se neodstraní – pouze se restartuje zvukový subsystém. Ihned poté znovu vyzkoušejte pravý reproduktor.</p>

<h2>Restartujte správně a zkuste nouzový režim</h2>

<p>Úplný restart odstraní přechodné zvukové závady, které zabiják neudělá. Pokud je kanál stále mrtvý, spusťte jej <strong>bezpečný režim</strong>, který načte minimální systém a přeskakuje zvuková rozšíření a položky přihlášení od třetích stran:</p>

<ul>
<li><strong>Jablečný křemík:</strong> Vypněte. Podržte tlačítko napájení, dokud se nezobrazí „Načítání možností spuštění“. Vyberte svůj disk a podržte jej <strong>Shift</strong> a klikněte na „Pokračovat v nouzovém režimu“.</li>
<li><strong>Intel:</strong> Restartujte a podržte <strong>Shift</strong> dokud se neobjeví přihlašovací okno.</li>
</ul>

<p>Pokud oba reproduktory fungují v nouzovém režimu, zvukový ovladač, virtuální zařízení nebo nástroj na liště nabídek od třetí strany nainstalovaný před aktualizací je v konfliktu s novým audio zásobníkem Tahoe. Spusťte zpět do normálního stavu a odstraňte nebo aktualizujte nedávno nainstalovaný zvukový software (častými viníky jsou rekordéry obrazovky, aplikace pro schůzky a kexty pro směrování zvuku).</p>

<h2>Resetovat NVRAM (pouze Intel Mac)</h2>

<p>Na Intel Mac jsou nastavení zvuku a reproduktorů aktivní v NVRAM/PRAM a zastaralá hodnota může přežít aktualizaci. Resetujte jej: vypněte, poté zapněte a okamžitě podržte <strong>Option + Command + P + R</strong> po dobu asi 20 sekund a nechte Mac jednou restartovat. To neplatí pro Apple Silicon Mac – spravují to automaticky, takže pokud používáte stroj řady M, přeskočte to.</p>

<h2>Aktualizujte znovu – a zkontrolujte bodové vydání</h2>

<p>První verze jakékoli hlavní verze macOS se dodávají s chybami zvukového ovladače, které budou později opraveny. Vydejte se <strong>Nastavení systému &gt; Obecná aktualizace softwaru &gt;</strong> a nainstalujte jakékoli čekající uvolnění bodu Tahoe (14.x.1, 14.x.2 atd.). Pokud existuje doplňková aktualizace, často řeší přesně tyto zvukové regrese po aktualizaci.</p>

<h2>Když je to opravdu hardware</h2>

<p>Pokud selže nouzový režim, restart Core Audio a čistá reinstalace – a stejný kanál je mrtvý ve sluchátkách – možná se díváte na hardwarovou chybu. Načasování s aktualizací může být náhodné; zesilovače reproduktorů a zvukové kodeky selhávají. Spustit <strong>Diagnostika Apple</strong> (vypněte, podržte tlačítko napájení na Apple Silicon a zvolte Diagnostics, nebo podržte <strong>D</strong> na Intelu při startu). Pokud označí zvukovou komponentu, kontaktujte <strong>Podpora Apple</strong> nebo autorizovaného poskytovatele služeb. Neutrácejte peníze za software pro vyfouknutý reproduktor.</p>

<blockquote>Rychlé pravidlo: pokud se zvuk pohybuje správně pomocí posuvníku vyvážení, oba reproduktory jsou fyzicky v pořádku a vaše oprava je v softwaru. Pokud se nikdy nepohne na mrtvou stranu, podezřívejte hardware.</blockquote>

<h2>Kam se objemový software hodí (a kam ne)</h2>

<p>Aby bylo jasno: mrtvý kanál reproduktoru není něco, co by opravila aplikace hlasitosti – výše uvedené kontroly jsou vaší cestou. To znamená, že jakmile bude váš zvuk opět zdravý, macOS stále postrádá něco, co má Windows už roky: skutečný mix hlasitosti pro jednotlivé aplikace. Pokud jste se přistihli, že se prohrabáváte nastavením zvuku, protože jedna aplikace jela, zatímco jiná byla příliš tichá, použijte mixážní pult <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> umožňuje nastavit nezávislou hlasitost, ztlumení a dokonce zesílení pro každou aplikaci, aniž byste se dotkli vyvážení systému. Je to pohodlný nástroj pro každodenní míchání, ne oprava problému v tomto článku.</p>

<h2>Krátká verze</h2>

<ul>
<li>Vycentrujte <strong>Rovnováha</strong> posuvník — na výstupní zařízení.</li>
<li>Otestujte se sluchátky, abyste izolovali hardware.</li>
<li>Spustit <code>sudo killall coreaudiod</code>, poté restartujte.</li>
<li>Zkuste to <strong>bezpečný režim</strong> zachytit konflikty řidičů.</li>
<li>Resetovat NVRAM na Intel; nainstalujte libovolné bodové uvolnění Tahoe.</li>
<li>Stále mrtvý ve sluchátkách? Spusťte Apple Diagnostics a zavolejte společnosti Apple.</li>
</ul>

<p>Jakmile se vaše reproduktory vrátí do normálu, pokud je žonglování s hlasitostí jednotlivých aplikací každodenní otrava, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodává mixážní pult macOS vždy chyběl — 14,99 €, jednorázový, v sandboxu, bez ovladačů.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods Uvízl na poloviční hlasitosti na vašem Mac? Tady je Oprava",
    description: "Proč se AirPods připojuje k vašemu Mac s poloviční hlasitostí – obvykle pomocí kodeku Bluetooth přepnete na profil mikrofonu handsfree – plus opravy opětovného spárování a jak zvýšit úroveň nadobro.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>AirPods obvykle klesnou na poloviční hlasitost na Mac, protože macOS je přepnul z vysoce kvalitního zvukového profilu A2DP na nízkokvalitní profil hands-free (HFP) – ten, který je vytvořen pro použití mikrofonu pro telefonní hovory. Tento režim omezuje výstup a kvalitu. Opravte to tak, že přepnete Mac zpět na zvuk pouze pro sluchátka a poté zvyšte úroveň, aby tam zůstala.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Zaseknutý při poloviční hlasitosti na vašem Mac? Tady je Oprava" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč se to stane: přepínač kodeků</h2>

<p>Zvuková zařízení Bluetooth jako AirPods běží v jednom ze dvou režimů. Když jen posloucháte, macOS používá A2DP – plné stereo, plná hlasitost, čistá kvalita. Ale v okamžiku, kdy aplikace požaduje váš mikrofon, macOS přepne celé připojení na HFP (Hands-Free Profile). HFP je obousměrný telefonní kodek. Zní tence, mono-ish a znatelně tišší, protože byl navržen pro hlasové hovory, nikoli hudbu.</p>

<p>Problém je v tom, že macOS často zůstává zaseknutý v HFP i po dokončení aplikace, která mikrofon chytila – nebo se do ní přepne v okamžiku, kdy otevřete Zoom, FaceTime, Teams, Discord nebo kartu prohlížeče s oprávněním k mikrofonu. Takže váš AirPods zní, jako by měl „poloviční hlasitost“, ne proto, že se posunul posuvník hlasitosti, ale protože se pod vámi snížil celý zvukový profil.</p>

<p>Poznáte to: zvuk se náhle ztiší a utlumí, AirPods se ve vašem nastavení zvuku zobrazí dvakrát (jednou jako výstup, jednou jako mikrofon) a úplné zvýšení hlasitosti systému sotva pomůže.</p>

<h2>Řešení pro opětovné spárování a kodek</h2>

<p>Toto jsou upřímné první kroky. Propracujte je v pořadí – jeden z prvních to obvykle vymaže.</p>

<ul>
<li><strong>Změňte své vstupní zařízení.</strong> Otevřete Nastavení systému → Zvuk → Vstup a místo AirPods vyberte vestavěný mikrofon vašeho Mac. To zabrání macOS v držení AirPods v režimu HFP, takže výstup se může vrátit zpět na plnou kvalitu A2DP. Toto je jediná nejúčinnější oprava.</li>
<li><strong>Vypněte a zapněte Bluetooth.</strong> Rychlý reset připojení často znovu vyjedná A2DP čistě, zvláště pokud se AirPods zasekne po ukončení hovoru.</li>
<li><strong>Znovu připojte AirPods.</strong> Zavřete pouzdro, počkejte několik sekund, znovu jej otevřete poblíž Mac a znovu je vyberte jako výstupní zařízení.</li>
<li><strong>Ukončete aplikaci, která zachytila mikrofon.</strong> Úplně ukončete Zoom, Teams, Discord nebo příslušnou kartu prohlížeče. Některé aplikace udržují relaci mikrofonu otevřenou na pozadí a připínají HFP, dokud nezmizí.</li>
<li><strong>Znovu spárujte od začátku.</strong> Odeberte AirPods v části Nastavení systému → Bluetooth (klikněte na tlačítko info → Zapomenout toto zařízení) a znovu spárujte. Tím se vymaže poškozené vyjednávání profilu, které samotné přepínání nevyřeší.</li>
<li><strong>Resetujte AirPods.</strong> S nimi v otevřeném víku pouzdra podržte tlačítko nastavení na zadní straně, dokud kontrolka nezačne blikat oranžově a poté bíle. Poté znovu spárujte. Toto je jaderná možnost pro podivnosti na úrovni firmwaru.</li>
<li><strong>Aktualizujte firmware macOS a AirPods.</strong> Apple dodal v bodových vydáních opravy zvuku Bluetooth. Firmware AirPods se aktualizuje tiše, když se nabíjejí v blízkosti připojeného zařízení – nechte je tedy přes noc v pouzdře poblíž vašeho Mac.</li>
</ul>

<blockquote><p>Vzor, který je třeba sledovat: pokud hlasitost klesne v okamžiku, kdy se připojíte k hovoru, a obnoví se, když hovor skončí, je to přepínač HFP – ne rozbitý reproduktor nebo závada v nastavení.</p></blockquote>

<h2>Proč se opravy ne vždy drží</h2>

<p>Tady je ta frustrující část. I po opětovném spárování macOS šťastně přepne váš AirPods zpět do tichého hands-free režimu, jakmile se mikrofonu příště dotkne jakákoliv aplikace. Toto chování nemůžete trvale zakázat v nastavení systému – Apple to považuje za automatické. Takže skončíte tak, že několikrát denně opakujete trik se vstupním zařízením a kdykoli váš AirPods volá nebo je aplikace hladová po mikrofonu, je opět omezena na tuto nižší úroveň.</p>

<p>Existuje také druhý, samostatný problém, který lidé spojují s tímto: některé aplikace jsou při maximální hlasitosti systému tišší než jiné. Přehrávač podcastů nebo karta prohlížeče může sedět hluboko pod tím, co vaše uši chtějí, i když na AirPods běží čistý A2DP. macOS vám nabízí jeden posuvník hlasitosti pro všechno a žádné ovládání podle aplikace, takže neexistuje žádný nativní způsob, jak vrátit jednu tichou aplikaci zpět nahoru.</p>

<h2>Zvyšte úroveň zpět – a udržujte ji tam</h2>

<p>Zde si své místo získává mixážní pult pro jednotlivé aplikace. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aplikace na liště nabídek pro macOS, která dává každé spuštěné aplikaci vlastní nezávislý posuvník hlasitosti – včetně zvýšení nad 100 %. Takže když se váš AirPods vrátí z hovoru na nižší efektivní úrovni nebo je konkrétní aplikace jednoduše příliš tichá, přetáhnete tuto aplikaci za normální strop a zůstane tam.</p>

<p>Konkrétně to znamená:</p>

<ul>
<li><strong>ZVÝŠENÍ hlasitosti jednotlivých aplikací.</strong> Posuňte tichou aplikaci nad standardní maximum namísto namáhání, abyste ji slyšeli při „plné“ hlasitosti systému.</li>
<li><strong>Objemové profily.</strong> Uložte si sadu úrovní – vylepšený prohlížeč, jemnější hudbu, hlasité videohovory – a přepněte celé uspořádání jediným kliknutím, abyste se nemuseli znovu upravovat po každém opětovném připojení.</li>
<li><strong>Rychlé přepínání výstupů.</strong> Přeskakujte mezi AirPods, reproduktory notebooku a externím DAC z lišty nabídek, aniž byste museli procházet nastavením systému, což pomáhá, když si vynucujete nové vyjednávání profilu.</li>
<li><strong>Ztlumení a automatické ztlumení pro jednotlivé aplikace.</strong> Ztište jednu aplikaci, aniž byste se dotkli ostatních, a nechejte média automaticky se ponořit, když se hraje něco důležitějšího.</li>
</ul>

<p>Stojí za to mít jasno v tom, co to dělá a co ne. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nebude nutit macOS zůstat v A2DP – výše uvedený trik se vstupním zařízením je stále vaším nástrojem pro samotný kodek. Udělá vám to, že vám vrátí hlasitost, kterou vám ukradl downgrade, na aplikaci, takže tichá relace AirPods nebo tvrdohlavě měkká aplikace je oprava jedním přetažením namísto ztraceného případu. A protože se jedná o aplikaci Mac App Store v sandboxu, není třeba instalovat žádný zvukový ovladač, žádné DMG, žádné rozšíření jádra – prostě běží.</p>

<h2>Krátká verze</h2>

<p>Pokud váš AirPods zní tiše a tlumeně na vašem Mac, vypněte vstupní zařízení AirPods, abyste je vytlačili z režimu hands-free, a pokud se to nezdaří, znovu spárujte. Když úroveň stále nedosahuje tam, kam chcete – nebo je jedna aplikace příliš měkká – sáhněte po zvýšení pro každou aplikaci, takže ji jednou nastavíte a půjdete dál.</p>

<p>Už vás nebaví bojovat s posuvníkem hlasitosti pokaždé, když přijmete hovor? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> — jednorázová částka 14,99 €, žádné předplatné, žádné ovladače — a dejte každé aplikaci vlastní objem.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac Volume se stále resetuje na Tahoe? Jak to navždy uzamknout",
    description: "Od macOS Tahoe mnoho Mac náhle samo změní nebo resetuje hlasitost. Zde je důvod, proč k tomu dochází, jak zastavit vestavěné příčiny a jak uzamknout pevný svazek pro aplikaci, aby zůstal na místě.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Pokud se vaše hlasitost Mac neustále resetuje od macOS Tahoe, opravou je odstranění automatických seřizovacích prvků: deaktivujte tlumení zvuku a „Přehrát zvuk při spuštění“, resetujte nastavení zvuku a znovu čistě připojte jakýkoli výstup Bluetooth. U úrovní pro jednotlivé aplikace, které přeskakují, uzamkněte pevnou hlasitost pro každou aplikaci pomocí mixéru, aby se již nikdy nezměnila.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Volume se stále resetuje na Tahoe? Jak to navždy uzamknout" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč se po Tahoe změní hlasitost sama od sebe</h2>

<p>Hlasitost, která se pohybuje, aniž byste se jí dotkli, působí jako hardwarová chyba, ale téměř vždy o vaší úrovni rozhoduje software. macOS má několik automatických chování, které tiše pošťouchnou nebo resetují výstup, a změny v zásobníku zvuku Tahoe učinily několik z nich znatelnějších. Než se domníváte, že je aplikace nebo Mac nefunkční, pomůže vám přesně vědět, který systém chytne posuvník.</p>

<ul>
<li><strong>Ztlumení zvuku:</strong> macOS snižuje ostatní zvuk, když si myslí, že hraje něco důležitějšího (Siri, oznámení o usnadnění, upozornění). Poté, co spoušť skončí, úroveň se někdy nevrátí úplně zpět.</li>
<li><strong>Resetování handshake Bluetooth:</strong> AirPods a další zařízení Bluetooth znovu vyjednají hlasitost při připojení. Opětovným připojením uprostřed relace lze výstup přepnout na výchozí nebo na mnohem hlasitější/tišší úroveň.</li>
<li><strong>Přepínání výstupních zařízení:</strong> Když odpojíte sluchátka, dok nebo přepnete na reproduktory monitoru, každý výstup si pamatuje svou vlastní hlasitost. Přepínání tam a zpět vypadá jako „náhodné“ resetování.</li>
<li><strong>Výchozí nastavení pro jednotlivé aplikace:</strong> Některé aplikace (prohlížeče, přehrávače videa, konferenční nástroje) nastavují vlastní zisk při spuštění nebo při spuštění nového streamu a přepíší to, co jste měli.</li>
<li><strong>Zvuk při spuštění a stav přihlášení:</strong> Zaváděcí zvonek a přihlášení mohou posunout hlasitost systému zpět na výchozí úroveň, kterou jste nezvolili.</li>
</ul>

<h2>Nejprve opravte vestavěné příčiny</h2>

<p>Propracujte je v pořadí. Většina stížností na „samotné resetování“ zmizí, jakmile se vyhýbá a Bluetooth jsou vyloučeny.</p>

<ul>
<li><strong>Vypněte zvuk při spuštění.</strong> Nastavení systému → Zvuk → zrušte zaškrtnutí <em>Přehrát zvuk při spuštění</em>. Tím zabráníte tomu, aby zaváděcí zvonek resetoval vaši základní úroveň.</li>
<li><strong>Snižte nebo deaktivujte spouštěče spouštění.</strong> V Nastavení systému → Usnadnění → Mluvený obsah a Siri vypněte mluvená oznámení, která nepotřebujete. Méně spouštění znamená méně okamžiků, kdy macOS snižuje zvuk a zapomíná jej obnovit.</li>
<li><strong>Opravte problém se zařízeními Bluetooth.</strong> Odeberte AirPods nebo sluchátka z nastavení Bluetooth a znovu je spárujte. Zastaralý profil je častou příčinou zasekávání svazku při připojení.</li>
<li><strong>Každé výstupní zařízení nastavte záměrně.</strong> Připojte každý výstup, který používáte (vestavěný, monitor, sluchátka) a nastavte jeho hlasitost jednou. macOS ukládá hlasitost na zařízení, takže nastavení všech odstraní překvapení při přepínání.</li>
<li><strong>Resetujte Core Audio, pokud je zaseknutý.</strong> Otevřete Terminal a spusťte <code>sudo killall coreaudiod</code>. Tím se restartuje audio démon bez restartu a vymaže se zavěšený stav, který může způsobit nevyrovnané úrovně.</li>
<li><strong>Aktualizujte a poté restartujte.</strong> Early Tahoe point uvolňuje dodávané zvukové opravy. Ujistěte se, že máte nejnovější verzi a po aktualizaci jednou restartujte.</li>
</ul>

<p>Pokud se resetování zastaví, jeden z výše uvedených byl vaším viníkem. Pokud váš <em>systém</em> hlasitost je stabilní, ale jednotlivé aplikace jsou stále hlasitější nebo tišší než všechny ostatní, narazili jste na limit toho, co vestavěné ovládací prvky dokážou.</p>

<h2>Skutečná mezera: macOS nemůže uzamknout hlasitost na aplikaci</h2>

<p>Tady je ta frustrující část. Windows má již léta mixážní pult pro jednotlivé aplikace – otevřete jej, přetáhnete posuvník jedné aplikace a zůstane tam. macOS nikdy žádný nedodal. Existuje přesně jeden posuvník hlasitosti systému a každá aplikace o něj bojuje. Takže když karta prohlížeče spustí automaticky přehrávanou reklamu nebo videohovor zazní dvakrát hlasitěji než vaše hudba, jedinou možností je nastavit hlavní hlasitost ručně – což je přesně ta smyčka „proč se to pořád mění“, které se snažíte uniknout.</p>

<blockquote>Systémový posuvník je jediný sdílený číselník. Bez mixpultu pro jednotlivé aplikace je na skladě macOS nemožné „nastavit a zapomenout“ – vždy vás něco přepíše.</blockquote>

<h2>Uzamkněte pevnou hlasitost na aplikaci pomocí SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodává, že chybí mixér macOS pro jednotlivé aplikace. Žije ve vašem menu a dává každé spuštěné aplikaci vlastní posuvník hlasitosti, nezávislý na hlavní. Protože si pamatuje úroveň, kterou jste nastavili pro každou aplikaci, přímo řeší problém „samotného resetování“: rozhodnete se jednou a tato aplikace se pokaždé otevře s touto hlasitostí.</p>

<ul>
<li><strong>Nezávislý objem na aplikaci:</strong> udržet hudbu na 40 % a videohovor na 80 % současně, bez žonglování s mistrovským posuvníkem.</li>
<li><strong>Ztlumení a zesílení pro jednotlivé aplikace:</strong> okamžitě ztište hlučnou aplikaci nebo posuňte příliš tichou aplikaci za 100 %, když je její vlastní zvuk slabý.</li>
<li><strong>Objemové profily:</strong> uložte nastavení pro „práci“, „hraní“ nebo „zaměření“ a přepněte celý mix jediným kliknutím.</li>
<li><strong>Automatické uhýbání podle vašich podmínek:</strong> automaticky snižovat aplikace na pozadí, když mluvíte nebo když je vybraná aplikace aktivní – namísto rozhodování macOS.</li>
<li><strong>Rychlé přepínání výstupu:</strong> přeskakujte mezi reproduktory, sluchátky a monitorujte zvuk z panelu nabídek, aniž byste se museli ponořit do nastavení.</li>
</ul>

<p>Je to jednorázový nákup 14,99 EUR od Mac App Store – žádné předplatné, žádné ovladače, žádné DMG a žádná rozšíření jádra. Protože je plně sandboxován a distribuován App Store, neinstalujete starší zvukový kext, který by Tahoe mohlo zablokovat při příští aktualizaci. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nastavuje úrovně pomocí podporovaných rozhraní API, takže vaše zapamatované svazky přežijí aktualizace a restarty.</p>

<h2>Jaký přístup vlastně potřebujete?</h2>

<p>Pokud hlasitost celého vašeho systému vyskočí, začněte s vestavěnými opravami výše – ve většině případů se jedná o tlumení, Bluetooth a spouštěcí zvuk. Pokud je místo toho problém v tom, že jedna aplikace je vždy ta lichá, nebo jste unavení z toho, že hlavní posuvník je kompromisem, jedinou skutečnou odpovědí je mix pro jednotlivé aplikace. macOS jeden nepřidá, takže nástroj na liště nabídek je praktickou cestou k mixu, který skutečně zůstane tam, kde jej vložíte.</p>

<p>Už vás nebaví honit se za posuvníkem hlasitosti na Tahoe? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> a uzamkněte si zapamatovaný objem pro každou aplikaci – 14,99 EUR jednou, žádné předplatné, žádné ovladače.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Ovládejte hlasitost monitoru DAW odděleně od systémového zvuku na Mac",
    description: "macOS nemá žádný vestavěný mixážní pult pro jednotlivé aplikace, takže vaše DAW a systémové zvuky sdílejí jednu úroveň. Zde je návod, jak ovládat hlasitost monitoru Logic, Ableton nebo GarageBand nezávisle na prohlížeči a oznámeních.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>macOS nemá vestavěný směšovač hlasitosti pro jednotlivé aplikace, takže váš DAW a vše ostatní sdílí jeden systémový posuvník. Chcete-li nastavit úroveň monitoru nezávisle na prohlížečích, Slack a oznámeních, potřebujete ovládání hlasitosti pro jednotlivé aplikace. Menu-bar mixer jako <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dává Logic, Ableton a GarageBand vlastní hlasitost, oddělenou od systémového zvuku.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Ovládejte hlasitost monitoru DAW odděleně od systémového zvuku na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč jeden posuvník hlasitosti ničí vaše monitorování</h2>

<p>Když produkujete, váš DAW je pouze jednou z mnoha věcí, které vytvářejí zvuk. Referenční skladba se přehraje na kartě prohlížeče. Přicházejí pingy Slack. Výukový program YouTube běží na druhém monitoru. Na Windows vám Volume Mixer umožňuje vyvážit všechny tyto nezávisle. Na macOS Apple nikdy nedodal ekvivalent – tlačítka hlasitosti a posuvník na liště nabídek se pohybují <em>všechno</em> najednou.</p>

<p>To vytváří skutečný problém pro každého, kdo mixuje podle sluchu. Vytočíte pohodlnou monitorovací úroveň v Logic, pak se na stejné úrovni ozve upozornění a vyfoukne vám uši. Nebo ztlumíte systém, abyste chránili svůj sluch během hlasité pasáže, a nyní je vaše referenční stopa příliš tichá, než aby se s ní srovnávala. Vaše monitorovací reference již není stabilní a stabilní reference je hlavním bodem míchání.</p>

<blockquote>Monitorování na konzistentní úrovni je jedním z mála návyků, které měřitelně vylepšují vaše mixy. Pokud vás systémové zvuky neustále nutí posouvat hlavní posuvník, ztratíte tuto konzistenci.</blockquote>

<h2>Co vlastně znamená „samostatný svazek DAW“.</h2>

<p>Producenti zde spojují dvě různé věci a stojí za to je oddělit:</p>

<ul>
<li><strong>Úroveň rozhraní / hlavního výstupu</strong> — hardwarový knoflík na vašem audio rozhraní nebo ovladači monitoru. Tím nastavíte absolutní hlasitost poslechu a po kalibraci by měla zůstat nastavená.</li>
<li><strong>Objem softwaru pro jednotlivé aplikace</strong> — jak hlasité jsou jednotlivé aplikace <em>dříve</em> dosáhne toho výstupu. To je to, co macOS chybí. To vám umožní udržet DAW v jednotě a zároveň snížit zvuk Chrome, hudby nebo upozornění na úroveň postele pod ním.</li>
</ul>

<p>Chceš to druhé. Cílem není ztlumit váš DAW – jde o to ztlumit vše ostatní vzhledem k němu, takže DAW zůstane vaším nejhlasitějším a nejkonzistentnějším zdrojem a rušivé prvky budou tiše sedět v pozadí.</p>

<h2>Jak to udělat pomocí mixéru pro jednotlivé aplikace</h2>

<p>Menu-bar mixer, jako je např <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> uvádí všechny aplikace, které aktuálně přehrávají zvuk, a dává každé svůj vlastní posuvník. Pracovní postup pro producenta vypadá takto:</p>

<ul>
<li><strong>Jednou zkalibrujte rozhraní.</strong> Nastavte své zvukové rozhraní nebo ovladač monitoru na pohodlnou, opakovatelnou referenční úroveň a nechte ji. Toto je vaše pevná kotva.</li>
<li><strong>Nastavte DAW na 100 %.</strong> V mixu ponechte Logic, Ableton nebo GarageBand na plné hlasitosti softwaru, aby prošel v jednotce. Vlastní master fader vašeho DAW stále provádí jemné míchání.</li>
<li><strong>Všechno ostatní stáhněte dolů.</strong> Spusťte Chrome, Safari, Music a Slack na nižší úroveň – řekněme 40–60 % – takže referenční skladby a zprávy budou sedět pod vaším mixem, místo aby s ním soutěžily.</li>
<li><strong>Ztlumte hlučné věci.</strong> Ztlumení pro jednotlivé aplikace vám umožní zcela ztišit prohlížeč nebo chatovací aplikaci, aniž byste se dotkli monitorovacího řetězce. Jedno kliknutí a váš DAW hraje beze změny.</li>
</ul>

<p>Vzhledem k tomu, že posuvník DAW se nikdy nepohybuje, vaše reference pro monitorování zůstává pevná během celé relace. Můžete spustit referenční stopu pro rychlé A/B, pak ji ztlumit a úroveň vašeho mixu se neposune ani o decibel.</p>

<h2>Posílení tiché aplikace namísto odmítání ostatních</h2>

<p>Někdy se problém vyvine opačným směrem. Hrubý demo odraz, hlasová poznámka nebo tichá reference se přehrávají hluboko pod úrovní vaší relace. Nastavení rozhraní, abyste to slyšeli, znamená, že vše ostatní je nyní příliš hlasité. Podle aplikace <strong>zvýšení hlasitosti</strong> umožňuje posunout jednu tichou aplikaci nad 100 %, aby odpovídala vaší pracovní úrovni – aniž byste se dotkli kalibrovaného výstupu. Je to kus Windows' mixpultu, který nikdy neměl, a jeden z nejužitečnějších nástrojů, když posloucháte materiál mimo váš DAW.</p>

<h2>Profily pro různé typy relací</h2>

<p>Vaše ideální rovnováha není pro každý úkol stejná. Sledování, míchání a příležitostný poslech vyžadují různé kombinace úrovní aplikací. Profily hlasitosti umožňují uložit nastavení a okamžitě je vyvolat:</p>

<ul>
<li><strong>Míchání:</strong> DAW na 100 %, prohlížeč a hudba jsou nízké, chat ztlumen.</li>
<li><strong>Referenční poslech:</strong> Hudba nebo streamovací aplikace nahoru, DAW dolů.</li>
<li><strong>Hovory / spolupráce:</strong> konferenční aplikace nahoru, DAW stažen zpět, takže do hovoru nekrvácí.</li>
</ul>

<p>Přepínání profilů překonává ruční nastavení pěti posuvníků pokaždé, když změníte rychlostní stupeň.</p>

<h2>Auto-ducking a rychlé přepínání výstupu</h2>

<p>Ve studiu záleží na dalších dvou věcech. <strong>Auto-ducking</strong> může automaticky přepínat aplikace na pozadí, když mluví nebo hraje prioritní zdroj, takže hovor nebo důležitý zvuk vždy přeruší. A <strong>rychlé přepínání výstupů</strong> z panelu nabídek vám umožňuje přeskakovat mezi rozhraním, monitory a sluchátky, aniž byste museli procházet nastavením systému – což je neustálý úkol, když kontrolujete mix na různých systémech.</p>

<h2>Proč ne virtuální zvukový ovladač?</h2>

<p>Některé směrovací nástroje to řeší instalací virtuálního zvukového ovladače na úrovni jádra. Ty jsou výkonné, ale těžké: mohou se po aktualizacích macOS zlomit, přidat latenci a vyžadovat hluboká systémová oprávnění. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je v sandboxu a dodává se prostřednictvím Mac App Store – žádné ovladače, žádné DMG, žádné nastavení agregovaného zařízení. Konkrétně pro ovládání na úrovni aplikace je to mnohem jednodušší cesta než přestavba směrování zvuku.</p>

<p>Jste připraveni udržet úroveň monitorování stabilní, zatímco vše ostatní zůstane na svém místě? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> za jednorázových 14,99 € a dejte svému DAW vlastní objem.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Jednodušší alternativa Audio Hijack pro objem jednotlivých aplikací na Mac",
    description: "Pokud chcete pouze nezávislý objem na aplikaci na macOS, Audio Hijack je přehnané. Zde je lehčí a levnější alternativa panelu nabídek, která umožňuje hlasitost, ztlumení a zesílení jednotlivých aplikací bez směrování zvuku.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Pokud vše, co chcete, je nezávislý svazek na aplikaci na macOS, Audio Hijack je více nástrojem, než potřebujete. Je to profesionální sada pro směrování a nahrávání zvuku (kolem 79 $) vytvořená pro zachycení, efekty a grafy relací. Pro jednoduché otočení jedné aplikace dolů a další nahoru, lehký směšovač nabídek <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je rychlejší, levnější a vždy připraven.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Jednodušší alternativa Audio Hijack pro objem jednotlivých aplikací na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč lidé vůbec sahají po Audio Hijack</h2>

<p>macOS nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows má jeden už roky ve svém Volume Mixer, ale na Mac tlačítka hlasitosti a posuvník na liště nabídek pohybují pouze jednou věcí: hlavním systémem. Neexistuje způsob první strany, jak říct „udržovat Spotify na 40 %, ale nechat můj videohovor na 100 %.</p>

<p>Lidé tedy hledají řešení a přijdou na Audio Hijack. to <em>může</em> dělat hlasitost pro jednotlivé aplikace, protože dokáže zachytit a zpracovat zvuk z jakékoli jednotlivé aplikace. Ale tato schopnost je vedlejším efektem toho, k čemu je ve skutečnosti navržena: nahrávání zvuku z aplikací a hardwaru, řetězení efektů, směrování mezi virtuálními zařízeními a vytváření opakovaně použitelných kanálů relací. V tom je opravdu vynikající. Je to jen těžká odpověď na lehkou otázku.</p>

<h2>Kde se Audio Hijack stává přehnaným</h2>

<p>Několik věcí obvykle frustruje lidi, kteří chtěli pouze posuvník hlasitosti:</p>

<ul>
<li><strong>Cena</strong> Audio Hijack stojí kolem 79 $. To je fér pro nahrávací studio v aplikaci; je to hodně na vypnutí karty prohlížeče.</li>
<li><strong>Musí to běžet dál.</strong> Jeho zpracování pro jednotlivé aplikace funguje pouze tehdy, když je aplikace otevřená a příslušná relace je aktivní. Ukončete to a vaše objemy se vrátí. Ponecháváte si plnou audio pracovní stanici, jen abyste drželi posuvník na místě.</li>
<li><strong>Myšlení založené na relacích.</strong> Vytváříte relace s bloky a připojeními. Výkonné pro zachycení, ale je to hodně koncepční režie, když je vaším cílem „tato aplikace tišší, ta aplikace hlasitější“.</li>
<li><strong>Rozhraní je hluboké.</strong> Efekty, směrování, měřiče, blokové zapojení – bohatá plocha, kterou budete většinou ignorovat, pokud nikdy nic nenahrajete.</li>
</ul>

<blockquote>Základní pravidlo: pokud chcete <em>záznam nebo trasa</em> audio, Audio Hijack si svou cenu vydělá. Pokud jen chcete <em>rovnováhu</em> zvuk mezi aplikacemi, platíte za workshop, když jste potřebovali knoflík.</blockquote>

<h2>Jednodušší alternativa: směšovač hlasitosti na liště nabídek</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bere jedinou práci, pro kterou většina lidí skutečně přišla, a dělá jen to. Žije ve vašem menu. Klikněte na ikonu a získáte živý seznam každé aplikace, která aktuálně přehrává zvuk, každá s vlastním posuvníkem. Přetáhněte Spotify na 30 %, ponechte hovor na 100 %, zcela ztlumte Slack – hotovo, není třeba vytvářet žádnou relaci.</p>

<p>Co zahrnuje:</p>

<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — každý zdroj zvuku má svůj vlastní posuvník, nastavitelný v reálném čase.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — ztište jednu hlučnou aplikaci jediným kliknutím, aniž byste se dotkli čehokoli jiného.</li>
<li><strong>Zvýšení hlasitosti podle aplikace</strong> - stiskněte tichou aplikaci <em>výše</em> 100%, když je jeho vlastní maximum stále příliš měkké. To je kus, který systémový posuvník nikdy nedokáže.</li>
<li><strong>Objemové profily</strong> — uložit celý mix (hudba potichu, hlasité hovory, ztlumená upozornění) a vyvolat jej jedním kliknutím pro daný kontext.</li>
<li><strong>Auto-ducking</strong> — automaticky ponoří zvuk na pozadí, když začne něco důležitějšího, takže hovor nebo video nezůstanou ve vašem seznamu stop.</li>
<li><strong>Rychlé přepínání výstupů</strong> — skok mezi sluchátky, reproduktory a dalšími výstupy ze stejné nabídky.</li>
</ul>

<h2>Praktické: ovládání pomocí aplikace za méně než minutu</h2>

<p>Rozdíl v nastavení je hlavním bodem. Pomocí nástroje pro směrování byste vytvořili relaci, přidali zdrojový blok, propojili jej a udrželi aplikaci spuštěnou. Tady je to v podstatě:</p>

<ul>
<li>Instalovat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> od Mac App Store.</li>
<li>Přehrajte zvuk v několika aplikacích, aby se objevily v seznamu.</li>
<li>Klikněte na ikonu na panelu nabídek a přetáhněte posuvník každé aplikace podle chuti.</li>
<li>Tento mix si můžete uložit jako profil nebo zvýšit příliš tichou aplikaci nad 100 %.</li>
</ul>

<p>Protože je distribuován prostřednictvím Mac App Store, je v sandboxu a instaluje se jako každá normální aplikace – ne <code>.dmg</code> přetahovat, žádné rozšíření jádra, žádný zvukový ovladač ke schválení v nastavení zabezpečení a nic, co by bylo třeba znovu schvalovat po aktualizaci macOS. Na posledním bodě záleží: mixéry založené na ovladačích se historicky pokazí při upgradech OS a vyžadují přeinstalaci součásti na systémové úrovni. Sandboxovaná aplikace App Store se vyhýbá celé této kategorii údržby.</p>

<h2>Kterou byste si měli vybrat?</h2>

<p>Buďte v práci upřímní. Vyberte si <strong>Audio Hijack</strong> pokud potřebujete nahrávat zvuk aplikace nebo hardwaru, aplikovat efekty v reálném čase nebo vytvářet grafy směrování mezi virtuálními zařízeními. To je jeho domov a stojí to tam za každý dolar.</p>

<p>Vyberte si specializovaný směšovač nabídek, pokud skutečně potřebujete „dovolte mi nastavit hlasitost každé aplikace nezávisle“. Jednou utratíte 14,99 EUR namísto ~79 USD, přeskočíte vytváření relace a získáte podporu, ztlumení, profily a ztlumení v panelu, který otevřete z lišty nabídek. Žádné funkce nahrávání, kterých se nikdy nedotknete, žádná pracovní stanice běžící na pozadí, která by držela posuvník na místě.</p>

<p>Většina lidí, kteří vyzkoušeli Audio Hijack pro vyvažování objemu, řešila malý problém pomocí velkého nástroje. Pokud jste to vy, malý nástroj se hodí lépe – a stojí jen zlomek.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> za 14,99 €, jednorázově – hlasitost na aplikaci, zesílení, ztlumení, profily a automatické ztlumení přímo z lišty nabídek.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D Alternativa: Objem na aplikaci bez nadýmání (Mac)",
    description: "Pokud jste Boom 3D používali hlavně pro zesílení zvuku, ale opravdu chtěli ovládání hlasitosti podle aplikace, SoundDial je štíhlejší alternativa Mac: nezávislá hlasitost na aplikaci, ztlumení a zesílení na aplikaci, jednorázová cena, žádný systémový EQ nebo ovladače.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Pokud jste sáhli po Boom 3D pro zvýšení hlasitosti, ale ve skutečnosti jste chtěli ovládat každou aplikaci zvlášť, chcete jiný nástroj. Boom 3D je systémový zesilovač hlasitosti a EQ. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je zaměřený mix hlasitosti pro jednotlivé aplikace: nezávislá hlasitost, ztlumení a zesílení pro každou aplikaci, jednorázově 14,99 €, žádný EQ, žádné ovladače.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D Alternativa: Objem podle aplikace bez nadýmání (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Co Boom 3D skutečně dělá (a nedělá)</h2>
<p>Boom 3D je postaven na třech věcech: zesílení hlasitosti v celém systému, 31pásmový ekvalizér a 3D „prostorové“ efekty. Na ty se vztahuje <em>všechno</em> váš Mac se přehrává najednou. To je skutečně užitečné, pokud je vaším cílem hlasitější přenosný počítač nebo křivka basů, která se vám líbí na celé desce.</p>
<p>Na co Boom 3D není stavěno, je zacházet s aplikacemi jako s nezávislými kanály. Neexistuje žádný čistý způsob, jak říct „Spotify na 40 %, můj videohovor na 100 % a tato karta prohlížeče je ztlumená.“ Jeho posuvník posouvá celý mix. A protože nainstaluje zvukový ovladač, který bude sedět v cestě signálu, dotkne se vašeho systému na nižší úrovni než nástroj v sandboxu. Je také umístěn jako placený produkt s cykly upgradu spíše než jako malý jednorázový nástroj.</p>
<blockquote><p>Běžný příběh: lidé si nainstalují Boom 3D, aby byla jedna tichá aplikace hlasitější, a pak si uvědomí, že skutečným problémem bylo, že macOS nemá vůbec žádný směšovač hlasitosti pro jednotlivé aplikace.</p></blockquote>

<h2>Mezera: macOS nemá směšovač hlasitosti</h2>
<p>To překvapuje lidi přicházející ze Windows. Windows má již roky mixážní pult pro jednotlivé aplikace – klikněte pravým tlačítkem na reproduktor a nastavte úroveň každé aplikace samostatně. macOS to prostě nedodává. Získáte jeden hlavní svazek a jakýkoli vnitřní posuvník, který každá aplikace odhalí. Na úrovni operačního systému neexistuje způsob, jak vyvážit Slack proti kartě YouTube proti hře.</p>
<p>Takže když hudební aplikace přehlušuje váš hovor, vaše jediné přirozené možnosti jsou hrubé: ztlumit master (což vše ztiší) nebo procházet vlastní nastavení každé aplikace a doufat, že má ovládání hlasitosti. Boom 3D tuto mezeru také neuzavře – dělá celý mix hlasitějším, ne každou aplikaci.</p>

<h2>Kam se hodí SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je chybějící mixér. Žije ve vašem menu a dává každé spuštěné aplikaci vlastní řádek s vlastním posuvníkem. To je hlavní rozdíl oproti Boom 3D: namísto jednoho globálního efektu získáte ovládání podle zdroje.</p>
<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — nastavte Spotify na 30 %, zatímco váš videohovor zůstane na 100 %.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — Okamžitě ztište jednu hlučnou aplikaci, aniž byste se dotkli čehokoli jiného.</li>
<li><strong>Vylepšení pro jednotlivé aplikace</strong> — Pokud se vám líbil trik Boom 3D hlasitější než 100 %, SoundDial si to zachovává, ale je zaměřen na jedinou aplikaci namísto celého systému. Tiché aplikace se samy dostanou za normální strop.</li>
<li><strong>Objemové profily</strong> — uložit rozvržení směšovače (např. „hry“, „schůzka“, „hudba“) a vyvolat jej jedním kliknutím namísto pokaždé znovu vyvažování posuvníků.</li>
<li><strong>Auto-ducking</strong> — automaticky ponoří zvuk na pozadí, když začne něco důležitého, takže hovor nebo herní narážka nejsou pohřbeny pod hudbou.</li>
<li><strong>Rychlé přepínání výstupů</strong> — skok mezi sluchátky, reproduktory a dalšími výstupy ze stejné nabídky.</li>
</ul>
<p>Co SoundDial záměrně nedělá, je zbytek rozmachu funkcí Boom 3D. Není zde žádný 31pásmový EQ, žádné faux-surround zpracování, žádný systémový efektový řetězec. Pokud chcete masteringový EQ, Boom 3D nebo speciální audio sada je tou správnou volbou. Pokud jste vlastně stále otevírali Boom 3D, bylo <em>objem</em>, ta plocha je nafouklá, za kterou platíte.</p>

<h2>Boost, bez ovladače</h2>
<p>Otázka "boost" si zaslouží přímou odpověď, protože to je obvykle důvod, proč uživatelé Boom 3D nakupují alternativy. Podpora Boom 3D je globální a založená na ovladačích. Vylepšení SoundDial je pro každou aplikaci a běží uvnitř modelu App-sandbox společnosti Apple – je distribuováno prostřednictvím Mac App Store, takže zde není žádný samostatný instalátor, žádný ovladač na úrovni jádra ani žádné zbylé systémové komponenty, které by bylo možné později odinstalovat. Získáte výsledek „udělej tuto jednu tichou aplikaci hlasitější“, aniž by řidič musel ovládat celou vaši zvukovou cestu.</p>

<h2>Cena: jednorázová vs</h2>
<p>Boom 3D je placená aplikace s vlastním upgradem a licenčním modelem a ceny se liší podle platformy a verze. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jeden jednorázový nákup za 14,99 EUR – kupte si jej jednou, ponechte si jej, žádné předplatné a žádné zpětné odkupy podle verze, aby mixér fungoval. U nástroje, který necháte běžet každý den v liště nabídek, má paušální cena tendenci stárnout lépe než produkt, který musíte znovu nakupovat.</p>

<h2>Kterou byste si měli vybrat?</h2>
<ul>
<li><strong>Vyberte Boom 3D</strong> pokud skutečně potřebujete seriózní ekvalizér a zvukové efekty pro celý systém a nevadí vám zvukový ovladač v mixu.</li>
<li><strong>Vyberte SoundDial</strong> chcete-li to, co uživatelé Windows považují za samozřejmost – skutečný mixážní pult pro jednotlivé aplikace – a navíc cílené posílení, profily a automatické ztlumení, za jednorázovou cenu a bez nutnosti instalace ovladačů.</li>
</ul>
<p>Většina lidí, kteří se odrazí od Boom 3D, spadá do druhé skupiny. Nechtěli ladit frekvence; chtěli, aby byl prohlížeč tišší než hovor. Přesně na to je SoundDial stvořen.</p>

<p><strong>Chcete na svém Mac ovládat hlasitost podle aplikace bez nadýmání EQ nebo předplatného?</strong> <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> — 14,99 EUR jednou, v sandboxu, bez ovladačů a každá aplikace má svůj vlastní posuvník.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Jak ztlumit vše kromě jedné aplikace na vašem Mac",
    description: "macOS nemá žádný směšovač hlasitosti pro jednotlivé aplikace, takže ztišení každé aplikace kromě jedné vyžaduje pomocníka. Zde je návod, jak slyšet pouze váš hovor, stream nebo hru, zatímco vše ostatní zůstane ztlumeno.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>macOS nemá žádný vestavěný způsob, jak ztlumit jednotlivé aplikace, takže k poslechu pouze jedné aplikace potřebujete mixér hlasitosti pro každou aplikaci. Instalovat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, otevřete směšovač panelu nabídek, ztlumte všechny aplikace kromě té, kterou chcete slyšet, a tato aplikace bude hrát dál, zatímco ostatní okamžitě ztichnou.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Jak ztlumit vše kromě jedné aplikace na vašem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč to macOS nedokáže sám o sobě</h2>
<p>Windows má Směšovač hlasitosti již více než deset let: klikněte pravým tlačítkem na ikonu reproduktoru a každá spuštěná aplikace dostane svůj vlastní posuvník. macOS toto nikdy nedodal. Tlačítka hlasitosti na vašem Mac ovládají pouze jednu věc, hlavní výstupní úroveň. Když vypnete systém, všechno se zhroutí. Když ztlumíte, ztlumí se vše.</p>
<p>To je v pořádku, dokud nebudete mít pět věcí vydávajících hluk najednou. Účastníte se videohovoru, ale karta prohlížeče automaticky přehrává reklamu, Spotify stále běží, na pozadí pingne hra a Slack zvoní. Vaší jedinou nativní možností je ukončit aplikace, ztlumit je jednu po druhé ve vlastních nastaveních každé aplikace (pokud tuto možnost vůbec má) nebo strhnout sluchátka. Nic z toho vám nedovolí říct „tohle si nechte, zbytek umlčte“.</p>

<h2>Přímý způsob: zbytek ztlumte pomocí mixéru</h2>
<p>Mixér pro jednotlivé aplikace je umístěn mezi vašimi aplikacemi a výstupním zařízením a dává každé aplikaci vlastní ovládání hlasitosti a ztlumení. Jakmile máte jednu spuštěnou, izolace jedné aplikace trvá několik sekund:</p>
<ul>
<li>Otevřete mixér z lišty nabídek. Uvidíte živý seznam každé aplikace, která aktuálně produkuje zvuk.</li>
<li>Najděte jednu aplikaci, kterou chcete slyšet, svůj hovor, stream, svou hru.</li>
<li>Ztlumte vše ostatní. Klepněte na přepínač ztlumení vedle každé jiné aplikace nebo vytáhněte její posuvník na nulu.</li>
<li>To je vše. Jedna aplikace, kterou jste nechali o samotě, pokračuje v přehrávání na plnou hlasitost, zatímco ostatní zůstávají tiché.</li>
</ul>
<p>s <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, má každá aplikace v seznamu svůj vlastní posuvník a vlastní tlačítko ztlumení, takže se jedná o několik kliknutí. Nové aplikace, které se začnou hrát později, se automaticky zobrazí, takže pokud se zvuk upozornění pokusí vplížit, můžete jej na místě ztišit, aniž byste se dotkli své zaměřené aplikace.</p>

<blockquote>Trik je v tom, že ztlumení „všeho kromě jedné“ je jen opakem ztlumení jedné aplikace. Neztišíte svůj Mac, ztišíte hluk kolem věci, na které vám skutečně záleží.</blockquote>

<h2>Uložte si to jako profil, abyste to nezopakovali</h2>
<p>Pokud je toto nastavení, po kterém často saháte, děláte to ručně pokaždé, když stárne. Řekněme, že během schůzek chcete mít vždy hlasitou aplikaci pro hovory a vše ostatní, nebo chcete, aby byl váš stream v popředí a uprostřed, zatímco hry a prohlížeče zůstaly tiché. Objemový profil ukládá tato přesná nastavení pro jednotlivé aplikace a znovu je použije jedním kliknutím.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> umožňuje uložit profily jako „Schůzka“ nebo „Pouze stream“ a poté na ně přepnout, jakmile je budete potřebovat. Nastavte to jednou a izolování vaší jedné aplikace se stane jedinou akcí na liště nabídek namísto práce s pěti posuvníky.</p>

<h2>Chytřejší verze: auto-duck místo hard-mute</h2>
<p>Někdy nechcete, aby ostatní aplikace úplně zmizely, jen chcete, aby uhnuly z cesty, když začne něco důležitějšího. To je automatické uhýbání. Když se přehrává vaše prioritní aplikace, aplikace na pozadí automaticky klesnou na nízkou úroveň a poté, co se zastaví, se zase zvednou.</p>
<p>To je ideální pro hovory a streamy. Když někdo začne mluvit, vaše hudba se ztlumí, abyste je slyšeli, a když hovor skončí, hudba se sama vrátí. Získáte výsledek „jasně poslouchejte jednu aplikaci“ bez ručního ztlumení a zapínání pokaždé, když se situace změní. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> zahrnuje automatické ztlumení spolu s ručním mixérem, takže si můžete vybrat tvrdé ztlumení pro úplné ztišení nebo ztlumení pro měkčí pozadí.</p>

<h2>Posílení jedné aplikace, kterou jste si ponechali</h2>
<p>K izolaci jediné aplikace je bonus: můžete ji také zvýšit hlasitostí, než váš Mac běžně umožňuje. Některé aplikace, zejména tiché videohovory nebo špatně zvládnuté streamy, jsou sotva slyšitelné i při maximální hlasitosti. Zvýšení pro každou aplikaci posune jednotlivou aplikaci nad 100 %, aniž by nastartovalo váš systémový výstup, což by pouze zesílilo aplikace, které jste již ztlumili.</p>
<p>Úplný krok tedy zní: ztlumte hluk, ponechte si jednu aplikaci, a pokud je tato aplikace příliš tichá, zesilte ji. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> zpracovává všechny tři ve stejném okně směšovače.</p>

<h2>K čemu se nepřihlásíte</h2>
<p>Společným problémem zvukových nástrojů Mac je, že vyžadují rozšíření jádra, virtuální zvukové ovladače nebo stínové instalační programy stažené z náhodného webu. To je oprávněná obava, a proto se někteří lidé těmto aplikacím zcela vyhýbají.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je na Mac App Store, v sandboxu a instaluje se jako každá normální aplikace, žádné ovladače, žádné DMG, žádná systémová rozšíření ke schválení. Je to jednorázový nákup za 14,99 EUR, nikoli předplatné, takže zaplatíte jednou a ponecháte si jej. To záleží na něčem, co necháte běžet na liště nabídek celý den.</p>

<h2>Rychlá rekapitulace</h2>
<ul>
<li>macOS nemá žádné nativní ovládání hlasitosti pro jednotlivé aplikace, takže k tomu potřebujete mixér.</li>
<li>Otevřete mixér, ponechte si jednu aplikaci, ztlumte nebo vynulujte vše ostatní.</li>
<li>Uložte si jej jako profil pro hovory nebo streamy, které často provádíte.</li>
<li>Pokud chcete aplikace na pozadí spíše ztišit, než zabíjet, použijte automatické ztlumení.</li>
<li>Vylepšete svou udržovanou aplikaci, pokud je sama o sobě příliš tichá.</li>
</ul>

<p>Chcete slyšet jen to, na čem záleží, a zbytek umlčet? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> a nastavte svůj první profil ztlumení všeho ostatního za méně než minutu.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Udržujte jinou hlasitost pro reproduktory a sluchátka na Mac",
    description: "Když přepínáte mezi reproduktory a sluchátky, macOS zapomene mix hlasitosti na úrovni aplikace. Zde je důvod, proč k tomu dochází, ruční limity a jak to řeší paměť svazku jednotlivých aplikací.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>macOS si ve skutečnosti pamatuje samostatnou systémovou hlasitost pro každé výstupní zařízení, ale při každém přepnutí zapomene vaši rovnováhu na úrovni aplikace. Sluchátka a reproduktory si tedy udržují svou celkovou úroveň, ale v okamžiku, kdy je odpojíte, jedna aplikace se spustí a další zmizí. Oprava je objemová paměť pro jednotlivé aplikace, která přežije přepínače zařízení, pro které macOS nemá žádný nativní nástroj.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Udržujte jinou hlasitost pro reproduktory a sluchátka na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Co si macOS pamatuje a co ne</h2>

<p>Existuje obecný názor, že macOS zachází s každým výstupním zařízením stejně. To ne. Každé výstupní zařízení ukládá svůj vlastní systémový svazek. Nastavte reproduktory MacBook na 30 % a AirPods na 80 % a macOS ponechá tato dvě čísla oddělená. Zapojte, odpojte, znovu připojte a každé zařízení se vrátí tam, kde jste je nechali.</p>

<p>Proč se tedy zážitek stále cítí zlomený? Protože tato paměť se zastaví na jediném globálním posuvníku. macOS má přesně jeden ovladač hlasitosti pro vše, co se hraje na daném zařízení. Nepamatuje si, jak hlasité byly jednotlivé aplikace. Když přepnete z reproduktorů na sluchátka, rovnováha mezi Spotify, hovorem Zoom a záložkou YouTube se nezachová, protože tato rovnováha nikdy neexistovala. Každá aplikace sdílí stejný posuvník.</p>

<p>Výsledkem je frustrace, kterou lidé popisují jako „jiná hlasitost pro reproduktory a sluchátka“. To, co obvykle chtějí, není jen odlišná hlavní úroveň pro každé zařízení, ale zapamatovatelný mix: tichá hudba, hlasité hovory, ztlumená oznámení a tento mix nedotčený, ať už jsou na stolních reproduktorech nebo sluchátkách.</p>

<h2>Manuální řešení a jejich nedostatky</h2>

<p>Můžete se tam dostat pomocí vestavěných nástrojů a než sáhnete po čemkoli jiném, vyplatí se znát strop.</p>

<ul>
<li><strong>Nastavte hlasitost systému každého zařízení jednou.</strong> Přehrajte zvuk přes reproduktory, nastavte úroveň, poté přepněte výstup na sluchátka a nastavte tuto úroveň. macOS zachovává obojí. To zpracovává hlavní hlasitost na zařízení, ale nic na aplikaci.</li>
<li><strong>Použijte objem pro jednotlivé aplikace tam, kde to aplikace nabízí.</strong> Spotify, VLC a většina prohlížečů má svůj vlastní interní svazek. Hlasitou aplikaci můžete oříznout v samotné aplikaci. Háček: toto nastavení žije v aplikaci, ne v zařízení, takže se nezmění, když přepnete na sluchátka, a většina aplikací (Slack, Zoom, systémová upozornění, Mail) takovou kontrolu vůbec nemá.</li>
<li><strong>Přepněte výstup z Ovládacího centra nebo z panelu nabídek.</strong> Chcete-li rychle přeskakovat mezi zařízeními, klepněte na ikonu hlasitosti na panelu nabídek. Rychlé, ale pouze posouvá hlavní úroveň, neobnovuje mix pro jednotlivé aplikace.</li>
</ul>

<p>Získáte tak hlavní hlasitost pro každé zařízení. Žádný z nich vám nedá, je zapamatovaný zůstatek na aplikaci, který vás sleduje napříč zařízeními. Tato mezera je přesně tam, kde je nepříjemnost, a je strukturální: OS prostě nemá žádný mix pro jednotlivé aplikace, na rozdíl od Windows, který ho dodává už roky.</p>

<h2>Objemová paměť pro jednotlivé aplikace a proč je přepínání zařízení skutečným problémem</h2>

<p>Hlubší opravou je dát každé aplikaci vlastní hlasitost a tato nastavení zachovat. To je to, co má mixér pro jednotlivé aplikace rád <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je stavěn pro. Nachází se na liště nabídek, uvádí všechny aplikace, které aktuálně produkují zvuk, a poskytuje každé z nich nezávislý posuvník, přepínač ztlumení a dokonce i zesílení přes 100 % pro tiché aplikace.</p>

<p>Část, která je důležitá pro problém reproduktorů a sluchátek: tyto úrovně jsou zapamatovány. Nastavte si hudbu na 40 %, hovory na 90 % a chatovací aplikaci na ztlumení a <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> udržuje ten mix. Když odpojíte sluchátka a vrátíte se k reproduktorům, nebudete pokaždé ručně vyvažovat tři aplikace.</p>

<p>Objemové profily to posouvají dále. Můžete uložit pojmenovanou sadu úrovní pro jednotlivé aplikace a vyvolat ji jedním kliknutím, takže mix „sluchátka, soustředěná práce“ a mix „reproduktory, schůzky“ představují jednotlivý výběr, nikoli ruční reset.</p>

<blockquote><p>Mentální posun: přestaňte myslet na jeden hlavní posuvník, který stále přetahujete, a začněte přemýšlet o uloženém mixu pro každou situaci. Přepínání zařízení přestává být úkolem s vyvážením.</p></blockquote>

<h2>Rychlé přepínání výstupu bez ztráty mixu</h2>

<p>Spínací zařízení by měla být rychlá a nedestruktivní. Na stejném panelu nabídky můžete změnit výstupní zařízení, takže přechod z reproduktorů na sluchátka je jedním kliknutím a vaše úrovně pro jednotlivé aplikace se dostaví místo toho, aby se sbalily zpět na jediné globální číslo.</p>

<p>Související funkcí, která stojí za zmínku, je automatické ztlumení zvuku: když do mikrofonu zazní zvuk (začnete mluvit nebo začne hovor), ostatní aplikace se automaticky ponoří, abyste byli slyšet, a poté se vrátí na nastavenou úroveň. Je to stejný princip aplikovaný spíše na pozornost než na zařízení, další věc macOS sama o sobě neudělá.</p>

<h2>Jak to nastavit</h2>

<ul>
<li>Instalovat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> od Mac App Store. Je to sandboxed, takže neexistuje žádný ovladač, žádné DMG ani žádné rozšíření jádra ke schválení.</li>
<li>Přehrávejte zvuk v aplikacích, které používáte nejčastěji, aby se objevily v mixu.</li>
<li>Nastavte úroveň každé aplikace, ztlumte vše, co nechcete, a zesilte vše, co je příliš tiché.</li>
<li>Uložte toto uspořádání jako profil, například jeden vyladěný pro sluchátka a jeden pro reproduktory.</li>
<li>Když přepnete zařízení, vyvolejte odpovídající profil nebo nechte své uložené úrovně pro jednotlivé aplikace přenést.</li>
</ul>

<p>Upřímné shrnutí: macOS si pamatuje hlasitost na výstupní zařízení na hlavní úrovni, ale nikdy si nepamatuje váš mix pro jednotlivé aplikace, protože nemá žádný mix pro jednotlivé aplikace. Pokud je vaším skutečným cílem důsledná rovnováha mezi hudbou, hovory a oznámeními, která přežije každé přepnutí mezi reproduktory a sluchátky, potřebujete nad operačním systémem paměť pro jednotlivé aplikace.</p>

<p>Chcete, aby si reproduktory a sluchátka zachovaly svůj vlastní mix, aniž byste museli znovu upravovat každou aplikaci? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> za jednorázových 14,99 €, žádné předplatné, žádné ovladače.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control ukončeno? Nejlepší náhrada objemu Mac na aplikaci (2026)",
    description: "Sound Control od Static Z Software je ukončen a na moderní macOS přestává fungovat. Zde je důvod, proč přestal fungovat, co udělal a nejlepší mixážní pult pro jednotlivé aplikace, na který lze v roce 2026 přejít.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Sound Control od Static Z Software je ukončen a již se neprodává ani neaktualizuje a na moderním macOS stále více selhává, protože se spoléhal na zvukový ovladač na úrovni jádra, který Apple zablokoval. Pokud dnes potřebujete objem jednotlivých aplikací, nejčistší náhrada je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, sandboxový mixážní pult Mac App Store bez ovladačů.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control ukončeno? Nejlepší náhrada objemu Mac na aplikaci (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Co vlastně Sound Control dokázal</h2>
<p>Sound Control byl po léta hlavní odpovědí na skutečnou mezeru macOS: na Mac stále není vestavěný mixážní pult pro jednotlivé aplikace. Windows má jeden ve svém Volume Mixer od Vista, ale macOS vám poskytuje pouze jeden hlavní posuvník. Sound Control zaplnil tuto díru přehledným panelem s nabídkou, který vám umožní:</p>
<ul>
<li>Nastavte nezávislou úroveň hlasitosti pro každou spuštěnou aplikaci.</li>
<li>Ztlumte jednotlivé aplikace, aniž byste se dotkli zbytku systémového zvuku.</li>
<li>Zvyšte tiché aplikace nad 100 procent.</li>
<li>Použijte ekvalizér a úpravy vyvážení pro jednotlivé aplikace.</li>
<li>Směrujte zvuk a připněte aplikace na konkrétní výstupní zařízení.</li>
</ul>
<p>Pro každého, kdo někdy zažil volání Zoom, zatímco karta YouTube na pozadí šeptá, bylo ovládání pomocí aplikace transformační. Stala se tichou základnou na mnoha počítačích náročných uživatelů Mac.</p>

<h2>Proč to přestalo fungovat</h2>
<p>Zde záleží na poctivém technickém příběhu, protože vysvětluje, proč se nejedná o chybu, kterou může někdo jednoduše opravit. Sound Control fungoval tak, že nainstaloval systémový zvukový ovladač – rozšíření jádra (kext), které se samo vložilo do zvukového potrubí macOS, aby mohlo zachytit a přetvořit výstup každé aplikace. Tento hluboký háček je přesně to, co umožnilo funkce EQ a boost.</p>
<p>Počínaje verzí macOS 10.15 Catalina a akcelerací přes Big Sur a přechod Apple Silicon začal Apple zavrhovat rozšíření jádra ve prospěch alternativ v uživatelském prostoru. U Apple Silicon Mac vyžaduje načítání kext třetích stran snížení zabezpečení systému v režimu obnovy a Apple dal jasně najevo, že starší audio kext jsou na vypůjčený čas. Static Z Software nakonec přestal prodávat a vyvíjet Sound Control. Výsledek: na nejnovějších verzích macOS se instalace nezdaří, zvuk vypadává nebo ovladač jednoduše odmítá načíst bez snížení zabezpečení, které většina lidí právem nechce provést.</p>
<blockquote>Ze strany developera to není zanedbání. Jde o posun na úrovni platformy. Apple zavřel dveře za druhem nízkoúrovňového zvukového ovladače Sound Control, na kterém byl postaven, a žádná aktualizace jej nemůže plně znovu otevřít.</blockquote>

<h2>Co se změnilo na moderním macOS</h2>
<p>Apple přidal jednu relevantní věc: Core Audio nyní nabízí Tap API (zavedené v macOS 14.2 Sonoma), které umožňuje aplikacím zaznamenávat a zpracovávat zvuk podle jednotlivých procesů z uživatelského prostoru – žádné kext, žádné snížení zabezpečení, žádné restartování do Recovery. Toto je schválená moderní cesta pro zvuk v jednotlivých aplikacích a na tom by měl být postaven současný mixér. Kompromis je upřímný: klepnutí v uživatelském prostoru jsou omezenější než starý ovladač jádra, takže byste měli očekávat čistou hlasitost pro jednotlivé aplikace, ztlumení a zesílení spíše než úplný parametrický EQ pro jednotlivé aplikace nabízený Sound Control.</p>

<h2>Nejlepší náhrada: SoundDial</h2>
<p>Pokud chcete jádro toho, co Sound Control dělal – nezávislý objem na aplikaci – na Mac můžete skutečně udržovat zabezpečení a aktuální informace, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je nejbližší možností čisté migrace v roce 2026. Jedná se o směšovač hlasitosti pro jednotlivé aplikace vytvořený pro moderní audio zásobník macOS. Co se přenáší z pracovního postupu Sound Control:</p>
<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — jeden posuvník na spuštěnou aplikaci, přímo v liště nabídek.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — ztišit jednu aplikaci, zatímco vše ostatní hraje.</li>
<li><strong>Zvýšení hlasitosti podle aplikace</strong> — posuňte tichou aplikaci nad její normální strop.</li>
<li><strong>Objemové profily</strong> — uložit nastavení mixpultu pro různé kontexty (hovory, hudba, hry) a přepínat mezi nimi.</li>
<li><strong>Auto-ducking</strong> — automaticky sníží hlasitost aplikace na pozadí, což je užitečné, když začnete mluvit nebo když vám někdo volá.</li>
<li><strong>Rychlé přepínání výstupů</strong> — přeskakování mezi reproduktory, sluchátky a dalšími zařízeními, aniž byste se museli ponořit do nastavení systému.</li>
</ul>
<p>Praktické rozdíly, které jsou důležité pro migraci: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodává se přes Mac App Store, je v sandboxu a neinstaluje žádné ovladače ani DMG. To znamená, že žádné rozšíření jádra ke schválení, žádný režim obnovy a žádné snižování bezpečnostní pozice vašeho Mac – přesně ty bolestivé body, které zabily Sound Control. Jedná se o jednorázový nákup ve výši 14,99 EUR, nikoli o předplatné.</p>

<h2>Jak přepnout, krok za krokem</h2>
<ul>
<li><strong>Odinstalujte Sound Control čistě.</strong> Protože nainstaloval ovladač, použijte jeho vlastní odinstalační program, pokud stále běží, nebo před instalací čehokoli nového odeberte jeho součásti zvukového ovladače. Dva konkurenční audio háčky mohou způsobit závady.</li>
<li><strong>Nainstalujte SoundDial ze App Store.</strong> Není vyžadován žádný restart nebo změny zabezpečení.</li>
<li><strong>Udělte požadované oprávnění ke zvuku.</strong> To umožňuje číst a ovládat výstup jednotlivých aplikací na moderním macOS.</li>
<li><strong>Otevřete panel nabídky a nastavte úrovně.</strong> Vaše spuštěné aplikace se zobrazí s jednotlivými posuvníky; upravit, ztlumit nebo zesílit podle potřeby.</li>
<li><strong>Uložit profil.</strong> Pokud jste měli oblíbená nastavení Sound Control, vytvořte je znovu jako profily, abyste je mohli přepínat jedním kliknutím.</li>
</ul>

<h2>Upřímná očekávání</h2>
<p>Pokud vaším jediným důvodem pro použití Sound Control byla hlasitost v jednotlivých aplikacích, ztlumení a zesílení, moderní mixážní pult v izolovaném prostoru vás plně pokryje. Pokud jste se silně opírali o jeho ekvalizér pro jednotlivé aplikace, uvědomte si, že hluboký EQ byl svázán se starým modelem ovladače a je to nejtěžší funkce, kterou lze podle současných pravidel společnosti Apple čistě reprodukovat. Nastavte podle toho očekávání a nebudete překvapeni.</p>

<p>Jste připraveni získat zpět hlasitost jednotlivých aplikací, aniž by to řidiče trápilo? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> — jednorázová částka 14,99 EUR, v sandboxu, bez předplatného, bez ovladačů.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny je pryč – moderní aplikace Mac pro objem aplikací, která ji nahradí",
    description: "SoundBunny od Prosoft je ukončena. Zde je aktuální, aktivně udržovaný mixážní pult macOS pro jednotlivé aplikace, který jej nahradí – plus jak migrovat nastavení zvuku pro jednotlivé aplikace bez ovladačů jádra.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Pokud SoundBunny přestal fungovat nebo se již neprodává, moderní náhrada ano <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, směšovač hlasitosti pro jednotlivé aplikace vytvořený pro aktuální macOS. Poskytuje vám stejnou základní práci – nezávislý objem, ztlumení a zesílení pro každou aplikaci – jako jednorázový nákup Mac App Store za 14,99 EUR, bez ovladače jádra, DMG nebo předplatného ke správě.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny je pryč — moderní aplikace Mac pro objem aplikací, která ji nahradí" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Co se stalo se SoundBunny?</h2>
<p>SoundBunny byla utilita Prosoft Engineering pro objem jednotlivých aplikací pro macOS. Umožní vám nastavit jinou úroveň hlasitosti pro každou spuštěnou aplikaci přímo z lišty nabídek – hudba tichá, hovor nahlas, prohlížeč někde mezi tím. Po léta to byl jeden z mála nástrojů, který vyplňoval mezeru, kterou Apple nikdy neuzavřel.</p>
<p>Problém je v tom, že SoundBunny je starší software. Neudržel krok s hlubokými změnami, které Apple provedl ve zvuku a zabezpečení macOS – Apple Silicon, posílený runtime, zpřísněná pravidla pro rozšíření systému a odstranění starších zvukových háků. Když nástroj, jako je tento, přestane přijímat aktualizace, nakonec se porouchá: nespustí se, ztratí kontrolu nad streamy aplikací po aktualizaci operačního systému nebo jej jednoduše nelze čistě nainstalovat na moderní Mac. Pokud jste tam, neděláte nic špatného. Aplikace je pozadu, ne vy.</p>

<h2>Proč macOS ještě vůbec potřebuje mixpult třetí strany</h2>
<p>Zde je upřímná část: jedná se o skutečnou mezeru v macOS, ne o chybu, kterou můžete opravit v Nastavení. Windows dodává směšovač hlasitosti pro jednotlivé aplikace již více než deset let. macOS nikdy žádný neměl. Pomocí posuvníku hlasitosti systému a nastavení zvuku se ovládáte <em>výstupní zařízení</em> jako celek – každá aplikace je na stejné mistrovské úrovni. Neexistuje žádný vestavěný způsob, jak říci „udržovat Safari na 40 %, ale Zoom na 100 %.</p>
<p>To je důvod, proč nástroje jako SoundBunny existovaly a proč je dnes stále nutná výměna. Potřeba nezmizela, když aplikace zmizela – Apple to prostě stále neřešil.</p>

<h2>Moderní náhrada: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je směšovač hlasitosti pro jednotlivé aplikace, který žije ve vaší liště nabídek a dělá věci, na které se uživatelé SoundBunny spoléhali, postavený oproti dnešnímu macOS namísto včerejšího. Překrytí funkcí pokrývá to podstatné:</p>
<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — jeden posuvník na běžící aplikaci, přesně mentální model SoundBunny.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — ztišení jediné hlučné aplikace, aniž byste se dotkli všeho ostatního.</li>
<li><strong>Zvýšení hlasitosti podle aplikace</strong> - stiskněte tichou aplikaci <em>výše</em> 100 %, když je video nebo hovor nahrán příliš nízko. SoundBunny nemohl spolehlivě zesílit minulé systémové maximum na moderním macOS; boost je zde skutečný upgrade.</li>
<li><strong>Objemové profily</strong> — uložte sadu úrovní pro jednotlivé aplikace ("pracovní" mix, "herní" mix) a přepínejte mezi nimi místo posouvání posuvníků po jednom.</li>
<li><strong>Auto-ducking</strong> — automaticky sníží hlasitost aplikace na pozadí, když se aktivuje jiný zdroj zvuku (například mikrofon při hovoru).</li>
<li><strong>Rychlé přepínání výstupů</strong> — skok mezi reproduktory, sluchátky a dalšími výstupy ze stejné nabídky.</li>
</ul>

<h2>Jak vlastně migrace vypadá</h2>
<p>Neexistuje žádný krok importu – úrovně hlasitosti pro jednotlivé aplikace nejsou soubor, který přenášíte – ale přepnutí je rychlé:</p>
<ul>
<li><strong>Odstraňte správně SoundBunny.</strong> Ukončete ji a poté aplikaci smažte. Pokud nainstaloval nějakou pomocnou nebo přihlašovací položku, odstraňte ji také, aby se dva nástroje nehádaly o stejné zvukové toky.</li>
<li><strong>Nainstalujte SoundDial ze Mac App Store.</strong> Je umístěn v sandboxu a distribuován prostřednictvím obchodu, takže není třeba připojovat DMG a žádné varování „neidentifikovaného vývojáře“. Jeden nákup spojený s vaším Apple ID.</li>
<li><strong>Při prvním spuštění udělte přístup ke zvuku.</strong> macOS požádá o povolení, aby SoundDial viděl zvuk aplikace. Toto je moderní, schválená cesta, kterou Apple poskytuje – žádné rozšíření jádra, žádné restartování, žádné snížení zabezpečení systému. Udělte to a vaše spuštěné aplikace se zobrazí jako posuvníky.</li>
<li><strong>Znovu sestavte svůj mix.</strong> Nastavte své běžné aplikace a poté toto uspořádání uložte jako profil, abyste jej nikdy nemuseli opakovat.</li>
</ul>

<h2>Praktické rozdíly oproti SoundBunny</h2>
<p>Nejdůležitější rozdíl je v tom <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aktuální software. Běží nativně na Apple Silicon, používá Apple podporovaná audio API a je to aplikace Mac App Store – což znamená, že aktualizace přicházejí přes obchod a je vytvořena tak, aby přežila upgrady OS, spíše než aby se o ně porouchala. Být v sandboxu také znamená, že nemůže dosáhnout mimo svůj jízdní pruh, což je uklidňující pro něco, co sedí mezi vašimi aplikacemi a reproduktory.</p>
<p>Pár upřímných upozornění, takže očekávání jsou správná. Protože SoundDial funguje v rámci audio rámce společnosti Apple, ovládání je nejlepší pro standardní aplikace, které vedou přes běžný systémový výstup. Některý software přehrává zvuk vlastní cestou nebo exkluzivním zařízením a žádný mixážní pult – včetně SoundBunny – je nedokáže plně ovládat. A objem na aplikaci je neodmyslitelně softwarová vrstva nad macOS; není to hardwarový mixér. V těchto skutečných mezích dělá práci, jakou dělal SoundBunny.</p>

<blockquote>Pokud jste přešli na Mac ze Windows s očekáváním mixeru hlasitosti pro jednotlivé aplikace, je to nástroj, který tuto mezeru zaplňuje – a nyní je ve skutečnosti udržován.</blockquote>

<p>SoundBunny měl dobrý chod, ale je to dědictví. Pokud potřebujete hlasitost, ztlumení a zesílení pro jednotlivé aplikace na moderním Mac, <a href="https://apps.apple.com/app/id6772792641">získejte SoundDial na Mac App Store</a> — 14,99 EUR jednou, bez předplatného, bez ovladačů.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 Alternativa pro Mac: Objem na aplikaci bez dodatečného prodeje Boom 3D",
    description: "Boom 2 je dědictví a neustále vás tlačí k Boom 3D. Pokud chcete pouze objem jednotlivých aplikací a jednoduché posílení moderního macOS, zde je zaměřená alternativa a jak to funguje.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Pokud se vám líbil Boom 2 pro podporu celého systému, ale chcete jednoduché <strong>na aplikaci</strong> objem na aktuálním Mac, upřímná odpověď je, že Boom 2 je starší a již není tím správným nástrojem. Cílená alternativa je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, směšovač na liště nabídek, který dává každé aplikaci vlastní posuvník hlasitosti, ztlumení a zesílení za 14,99 EUR jednou, bez nutnosti přepnutí na větší balíček.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 2 Alternativa pro Mac: Objem podle aplikace bez dodatečného prodeje Boom 3D" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč se Boom 2 již nehodí</h2>
<p>Boom 2 byla oblíbená aplikace z konkrétního důvodu: zvýšila celkovou hlasitost vašeho Mac nad systémové maximum a přidala ekvalizér. Dělalo to v celém systému, ne na aplikaci. To bylo v pořádku v roce 2015. V roce 2026 to má dva problémy.</p>
<p>Za prvé, je to dědictví. Global Delight jasně přesunul svou energii do Boom 3D, a pokud otevřete stránku produktu Boom 2, zjistíte, že jste téměř okamžitě postrčeni směrem k novější, dražší aplikaci. Boom 2 stále existuje, ale je to odrazový můstek, který prodejce používá k prodeji Boom 3D, nikoli produkt, který získává aktivní lásku.</p>
<p>Za druhé, a to je důležitější: Boom 2 nikdy nebyl mixpultem hlasitosti pro jednotlivé aplikace. Zvyšuje a tvaruje jeden hlavní výstup. Pokud je vaší skutečnou bolestí to, že ping Slack je hlasitější než vaše hudba, nebo karta prohlížeče přehluší hovor, Boom 2 to neřeší. Společně to všechno zesílí. To je jiná práce.</p>

<h2>Co vlastně znamená „objem na aplikaci“ na macOS</h2>
<p>Zde je upřímný kontext, který většina alternativních shrnutí přeskočí: macOS nemá vůbec žádný vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows má jeden už roky – klikněte pravým tlačítkem na reproduktor, otevřete Volume Mixer a nastavte Chrome na 40 % a Spotify na 80 %. Apple to nikdy neposlal. Tlačítko hlasitosti macOS přesune pouze jednu hlavní úroveň.</p>
<p>Když tedy hledáte „alternativu Boom 2“, to, co často opravdu hledáte, není hlasitější Mac – je to ovládání podle aplikace, které uživatelé Windows považují za samozřejmost. To je skutečná mezera v operačním systému, ne něco, co by Boom 2 nebo jakákoliv jednotlivá aplikace zapomněli vytvořit.</p>

<h2>Kam se hodí SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je postaven speciálně pro tuto mezeru. Žije v liště nabídek a uvádí aplikace aktuálně přehrávající zvuk, každá s vlastním posuvníkem. Nastavujete úrovně pro každou aplikaci, místo abyste šťouchali do jednoho hlavního ovládacího prvku a doufali v to nejlepší.</p>
<p>Co to dělá:</p>
<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — ztište prohlížeč, udržujte hudbu tam, kde ji chcete, bez globálního kompromisu.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — ztišení jedné hlučné aplikace, aniž byste se dotkli čehokoli jiného.</li>
<li><strong>Vylepšení pro jednotlivé aplikace</strong> — přesuňte jednotlivou aplikaci za její normální strop, když je video nebo hovor nahráván příliš tiše. Toto je kousek, který fanoušci Boom 2 obvykle postrádají, až na to, že zde je zaměřen spíše na jednu aplikaci než na celý systém.</li>
<li><strong>Objemové profily</strong> — uložte si rozvržení jako „zaměření“, „schůzka“ nebo „hraní“ a přepínejte je jedním kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky snižovat ostatní aplikace, když začnete mluvit, užitečné pro hovory a nahrávání.</li>
<li><strong>Rychlé přepínání výstupů</strong> — skok mezi reproduktory, sluchátky a dalšími výstupy ze stejné nabídky.</li>
</ul>

<h2>Jak to nastavit</h2>
<p>Pracovní postup je krátký:</p>
<ul>
<li>Instalovat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ze Mac App Store — žádný DMG, žádný ovladač, žádný restart.</li>
<li>Kliknutím na ikonu na liště nabídek zobrazíte všechny aplikace, které aktuálně produkují zvuk.</li>
<li>Přetáhněte posuvník každé aplikace na požadovanou úroveň; ztlumit nebo zesílit individuálně podle potřeby.</li>
<li>Chcete-li uspořádání později znovu použít, uložte jej jako profil.</li>
</ul>
<p>Protože se dodává přes App Store, je v sandboxu a instaluje se čistě. To stojí za zmínku, protože některé starší zvukové nástroje se spoléhaly na rozšíření jádra nebo virtuální zvukové ovladače – tomu, čemu moderní macOS stále více odolává. SoundDial vás nežádá o instalaci ovladače ani snížení žádného nastavení zabezpečení.</p>

<h2>Poctivé omezení</h2>
<p>Posílení podle aplikace je skutečné, ale ne magické. Pokud je zdrojový zvuk aplikace skutečně tichý nebo špatně nahraný, jeho zesílení zvýší hladinu šumu spolu se signálem, takže velmi tichý materiál může při silném zatlačení znít syčevě. To je fyzikální limit zesílení, není to chyba v žádné konkrétní aplikaci – posílení systému Boom 2 mělo stejný kompromis. Berte boost jako prostor pro praktické případy, ne záchranu pro nefunkční zvuk.</p>

<h2>Boom 2 vs. zaměřený mixér</h2>
<p>Pokud to, co jste na Boom 2 milovali, byla celosystémová hlasitost plus ekvalizér, a nestaráte se o ovládání podle aplikací, Boom 3D je zamýšleným nástupcem dodavatele – to je férová cesta a nebudeme předstírat opak. Ale pokud jste vyzkoušeli Boom 2 a uvědomili jste si, že to, co jste vlastně chtěli, bylo zapnout jednu aplikaci dolů nebo nahoru, aniž byste vše posunuli, balíček EQ-and-boost je špatný tvar nástroje.</p>
<blockquote>Boom 2 dělá celý Mac hlasitější. Mixér pro jednotlivé aplikace vám umožní rozhodnout, která aplikace je hlasitější. Ty řeší různé problémy.</blockquote>
<p>Cenový rozdíl také stojí za to jasně pojmenovat. SoundDial je jednorázově 14,99 EUR. Neexistuje žádné předplatné, žádná zkušební verze, která přechází do většího plánu, a žádná cesta v aplikaci, která vás nasměruje na dražší úroveň. Koupíte si mixér, vlastníte mixér.</p>

<p>Pokud je hlasitost na aplikaci – nikoli systémový ekvalizér – to, co jste skutečně chtěli, <a href="https://apps.apple.com/app/id6772792641">zkuste SoundDial na Mac App Store</a> a nastavte si úrovně tak, jak by vás měl macOS nechat po celou dobu.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial: Volný open-source vs. placený objem za aplikaci na Mac",
    description: "FineTune je bezplatná aplikace s otevřeným zdrojovým kódem pro jednotlivé aplikace pro Mac; SoundDial je placená aplikace App Store v sandboxu s podporou, profily a podporou. Zde je upřímné srovnání, které vám pomůže vybrat.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>FineTune je bezplatný směšovač hlasitosti pro jednotlivé aplikace s otevřeným zdrojovým kódem pro macOS, takže pokud je vaším jediným zájmem cena, je to skutečná volba. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je placená (14,99 EUR, jednorázová) aplikace Mac App Store, která přidává zvýšení objemu pro jednotlivé aplikace, uložené profily, automatické uhýbání a podporu dodavatele. Skutečná volba je free-and-DIY versus sandbox-and-supported.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune vs SoundDial: Volný open-source vs. placený objem za aplikaci na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Problém řeší obě aplikace</h2>

<p>macOS stále nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows má jeden už roky – klikněte pravým tlačítkem na ikonu reproduktoru, otevřete Směšovač hlasitosti a každá aplikace dostane svůj vlastní posuvník. Na Mac získáte přesně jeden posuvník systémové hlasitosti pro všechno: vaše hudba, videohovor, YouTube, upozornění a hra, to vše sdílí. Pokud je váš hovor příliš tichý a Spotify příliš hlasitý, vaše jediná „oprava“ je úplné ztlumení Spotify.</p>

<p>FineTune i SoundDial existují, aby tuto mezeru zaplnily. Dávají každé spuštěné aplikaci vlastní ovládání hlasitosti, takže můžete například udržet schůzku na 100 % a zároveň snížit hudbu na pozadí na 20 % – aniž byste se dotkli hlavního posuvníku.</p>

<h2>Co je FineTune správné</h2>

<p>FineTune je novější, bezplatná aplikace s otevřeným zdrojovým kódem v duchu SoundSource. Buďme spravedliví ohledně jeho silných stránek, protože jsou skutečné:</p>

<ul>
  <li><strong>Nic to nestojí.</strong> Žádná licence, žádná zkušební verze, žádná aktualizace.</li>
  <li><strong>Zdroj je otevřený.</strong> Můžete si přečíst, co přesně dělá, zkontrolovat jeho soukromí a – pokud znáte Swift – upravit nebo rozvětvit.</li>
  <li><strong>Je to řízeno komunitou.</strong> Chyby může opravit kdokoli a kód přežije každou jednotlivou společnost.</li>
  <li><strong>Pokrývá základní potřebu.</strong> Nezávislý objem jednotlivých aplikací, což je funkce, kterou skutečně vyhledává 90 % lidí.</li>
</ul>

<p>Pokud je vaším jediným požadavkem „nechte mě vypnout jednu aplikaci, aniž bych ztlumil všechno“, a vyhovuje vám software, který je dodáván bez formální podpory, FineTune je legitimní odpověď. Doporučit to zde není ústupkem – je to upřímné.</p>

<h2>Poctivé kompromisy DIY cesty</h2>

<p>Bezplatný a open-source přináší skutečné náklady, které se na cenovce neprojeví. Toto nejsou klepání konkrétně na FineTune – jde o povahu přístupu:</p>

<ul>
  <li><strong>Instalace je ruční.</strong> Zvukové nástroje s otevřeným zdrojovým kódem jsou obvykle distribuovány jako stažené sestavení nebo vzorec Homebrew, nikoli prostřednictvím App Store. Instalujete mimo recenzi společnosti Apple a jste na háku, abyste ji aktualizovali.</li>
  <li><strong>Zachycování zvuku pomocí aplikace je od přírody křehké.</strong> Směrování zvuku jiné aplikace je hluboká systémová práce. Když Apple dodá aktualizaci macOS, která změní zásobník zvuku, tyto nástroje mohou přestat fungovat, dokud je někdo neopraví. S dobrovolnickým projektem může mít „někdo“ ten měsíc plné ruce práce.</li>
  <li><strong>Podpora je nejlepším úsilím.</strong> Pokud se něco pokazí, vaše řešení je problém GitHubu a čekání. Neexistuje žádná zaručená odpověď a nikdo není povinen to opravit.</li>
  <li><strong>Rozsah funkcí je cokoli, co správci dodají.</strong> Ovládání hlasitosti jádra je pravděpodobně pokryto; příplatky zcela závisí na čase přispěvatele.</li>
</ul>

<blockquote>Poctivé rámování: FineTune vyměňuje peníze za odpovědnost za údržbu. Ušetříte 14,99 EUR a přebíráte riziko, že aktualizace operačního systému jej ponechá nefunkční, dokud to komunita nedožene.</blockquote>

<h2>Kde je SoundDial jiný</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> podniká opačný obchod. Zaplatíte jednou a na oplátku získáte produkt App Store s dodavatelem za ním a širší sadou funkcí postavenou na objemu jednotlivých aplikací:</p>

<ul>
  <li><strong>Hlasitost a ztlumení pro jednotlivé aplikace</strong> — sdílenou základní úroveň poskytují obě aplikace.</li>
  <li><strong>ZVÝŠENÍ hlasitosti jednotlivých aplikací</strong> — posuňte příliš tichou aplikaci přes 100 %. Užitečné pro aplikace se slabým zvukovým výstupem, kde ztišení ostatních stále nestačí.</li>
  <li><strong>Objemové profily</strong> — uložte celé mixy („Schůzka“, „Zaměření“, „Hry“) a přepínejte jedním kliknutím namísto pokaždé resetování posuvníků.</li>
  <li><strong>Auto-ducking</strong> — automaticky snižovat aplikace na pozadí, když mluvíte nebo když se vybraná aplikace aktivuje, takže hovory budou přerušeny bez ručního šťouchání.</li>
  <li><strong>Rychlé přepínání výstupů</strong> — přeskakování mezi reproduktory, sluchátky a dalšími výstupy z panelu nabídek.</li>
</ul>

<p>Stejně důležité je <em>jak</em> odešle se. SoundDial je v sandboxu a distribuován prostřednictvím Mac App Store – žádné samostatné DMG, žádné ovladače jádra, žádná instalace zvukového ovladače. Aktualizace přicházejí přes App Store jako každá jiná aplikace a je tu skutečný vývojář, který vám pošle e-mail, když je něco špatně. To je konkrétní hodnota 14,99 EUR: nejen více funkcí, ale někdo odpovědný za to, že je udrží v provozu ve všech verzích macOS.</p>

<h2>Upřímné upozornění, které platí pro oba</h2>

<p>Žádná aplikace třetí strany nemůže udělat ze zvukového systému macOS Windows' Volume Mixer, protože Apple nevystavuje čisté veřejné API pro zvuk pro jednotlivé aplikace. Každý nástroj v této kategorii – bezplatný nebo placený, otevřený nebo uzavřený – toto omezení obejde pomocí zvukových technik na systémové úrovni. To znamená, že jak FineTune, tak SoundDial mohou být ovlivněny velkými změnami zvuku macOS. Rozdíl je v tom, kdo je zodpovědný za následnou opravu: dobrovolnická komunita nebo placený prodejce, jehož produkt na tom závisí.</p>

<h2>Které byste si měli vybrat?</h2>

<ul>
  <li><strong>Zvolte FineTune, pokud</strong> chcete nulové náklady, oceňujete transparentnost open source, potřebujete pouze základní objem pro jednotlivé aplikace a pohodlně se instalujete mimo App Store a jsou samonosní, když se něco pokazí.</li>
  <li><strong>Zvolte SoundDial, pokud</strong> chcete instalaci App Store jedním kliknutím, doplňky, jako je podpora, profily a auto-ducking, a ujištění o aktualizacích a podpoře od dodavatele se skinem ve hře.</li>
</ul>

<p>Obojí je platné. Skutečně záleží na tom, zda byste raději utráceli peníze nebo věnovali pozornost. Pokud byste si raději koupili podporovanou aplikaci v sandboxu a už o tom nikdy nepřemýšleli, <a href="https://apps.apple.com/app/id6772792641">získejte SoundDial na Mac App Store</a> za jednorázových 14,99 € — žádné předplatné, žádné ovladače, žádné DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial: Stačí bezplatný směšovač hlasitosti Mac?",
    description: "Spravedlivý souboj mezi bezplatnou aplikací Background Music a placenou SoundDial. Kde funguje bezplatný přístup pomocí virtuálních ovladačů, kde se láme a kdy za to stojí nativní mix 14,99 EUR.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Background Music je zdarma a opravdu dobrý v základech: dává každé aplikaci vlastní posuvník hlasitosti a dokáže automaticky pozastavit hudbu, když hraje jiná aplikace. Pokud je to vše, co potřebujete, použijte to. Spoléhá se však na virtuální zvukový ovladač, který se může po aktualizacích macOS přerušit, a postrádá zesílení pro jednotlivé aplikace, profily a přepínání výstupů. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vymění peníze za podporovanou alternativu bez ovladačů, izolovanou v izolovaném prostoru.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial: Stačí bezplatný směšovač hlasitosti Mac?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Za prvé, upřímná pravda o macOS</h2>
<p>macOS nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows má jeden již více než deset let ve svém Volume Mixer, ale na Mac systémový posuvník pohybuje vším najednou. Neexistuje žádné rozhraní API podporované společností Apple, které umožňuje aplikaci třetí strany čistě zachytit a znovu vyvážit jednotlivé proudy aplikací. Tato jediná mezera je důvodem, proč nástroje jako Background Music a SoundDial vůbec existují, a je hlavní příčinou většiny níže uvedených kompromisů.</p>

<h2>Co Background Music dělá dobře</h2>
<p>Background Music je open-source aplikace na liště nabídek, která existuje již léta a má z dobrého důvodu věrné příznivce. To vám dává:</p>
<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — hlavní rys. Otočte Spotify dolů a držte hovor nahlas.</li>
<li><strong>Automatická pauza</strong> — může pozastavit váš hudební přehrávač, když se zvuk spustí jinde, což je příjemný doplněk pro schůzky.</li>
<li><strong>Hlasitost zařízení, která vás sleduje</strong> a jednoduché, ne-nesmyslné rozhraní.</li>
<li><strong>Nulové náklady</strong> — je zdarma a kód je veřejný.</li>
</ul>
<p>Pro spoustu lidí to stačí. Pokud je celý váš seznam přání „udělejte jednu hlučnou aplikaci tišší, aniž byste se dotkli ostatních“, Background Music to pokrývá a neměli byste platit za něco, co nepotřebujete. Být zde spravedlivý je důležitý: je to legitimně užitečný nástroj.</p>

<h2>Kde volný přístup ukazuje své švy</h2>
<p>Háček je v tom <em>jak</em> Background Music dosahuje objemu na aplikaci. Protože macOS nedává žádnou oficiální cestu, nainstaluje virtuální zvukový ovladač (upravená verze starého přístupu Soundflower), který směruje váš systémový zvuk skrz sebe. Tato architektura je chytrá, ale nese skutečné náklady:</p>
<ul>
<li><strong>Rozbije se po aktualizacích macOS.</strong> Virtuální zvukové ovladače jsou hluboko v systému a hlavní verze macOS je historicky deaktivovaly nebo destabilizovaly. Uživatelé běžně hlásí ticho, zkreslení nebo nutnost přeinstalovat po upgradu. Když se to zlomí, jste často sami.</li>
<li><strong>Instalace je těžší.</strong> Do Mac přidáváte zvukové zařízení sousedící s jádrem, nikoli pouze aplikaci. Čisté odinstalování může být nešikovné.</li>
<li><strong>Stane se vaším výchozím výstupním zařízením.</strong> Protože je vše směrováno přes virtuální zařízení, některé pro-audio, konferenční nebo herní aplikace se mohou chovat zvláštně a přepínání skutečného výstupu je krok navíc.</li>
<li><strong>Vývoj probíhá komunitním tempem.</strong> Neexistuje žádný podpůrný stůl. Opravy přicházejí, když má dobrovolník čas, což pro zvukový nástroj, který může náhle ztichnout, je smysluplné riziko.</li>
</ul>
<p>Nic z toho nedělá Background Music špatné. To z něj dělá bezplatný nástroj s výhodami bezplatného nástroje.</p>

<h2>Za co vlastně platíte se SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aplikace Mac App Store, která utváří to, co to je. Protože aplikace App Store jsou v izolovaném prostoru a nemohou dodávat druh nízkoúrovňového virtuálního ovladače, který používá Background Music, je SoundDial vytvořen tak, aby běžel bez instalace samostatného zvukového zařízení nebo DMG. To znamená:</p>
<ul>
<li><strong>Žádné vtipy s virtuálními ovladači.</strong> Neexistuje žádné další výstupní zařízení, které by ukradlo váš zvukový řetězec, a není třeba nic přeinstalovat, když se systém změní.</li>
<li><strong>Aktualizace macOS přežije mnohem elegantněji.</strong> Distribuce App Store a sandboxing znamenají, že je postavena na podporovaných cestách a je aktualizována prostřednictvím obchodu, takže je mnohem méně pravděpodobné, že vás upgrade operačního systému nechá mlčet.</li>
<li><strong>Zvýšení hlasitosti podle aplikace.</strong> Toto je skutečný rozdíl ve funkcích: SoundDial může aplikaci podstrčit <em>výše</em> 100 % pro tiché zdroje – podcast nahraný příliš nízko, tlumený videohovor. Background Music pouze tlumí.</li>
<li><strong>Objemové profily.</strong> Uložte si sadu úrovní pro jednotlivé aplikace ("Schůzky", "Hudba", "Hry") a přepínejte jedním kliknutím namísto pokaždé přetahováním posuvníků.</li>
<li><strong>Auto-ducking.</strong> Automaticky snížit hlasitost ostatních aplikací, když se přehrává vybraný zdroj – lépe konfigurovatelné pojetí automatického pozastavení.</li>
<li><strong>Rychlé přepínání výstupů</strong> zapečené do panelu nabídek a ztlumení pro jednotlivé aplikace.</li>
<li><strong>Skutečná podpora.</strong> Je to placený produkt s někým zodpovědným, když se něco pokazí.</li>
</ul>

<h2>Čestné rozhodnutí</h2>
<blockquote>Pokud chcete zdarma a potřebujete pouze základní objem pro jednotlivé aplikace a jste spokojeni s řešením problémů po aktualizacích macOS, Background Music je solidní volbou. Pokud chcete podporu, profily, zmenšování, přepínání výstupů, žádnou křehkost virtuálního ovladače a někoho, komu chcete poslat e-mail, když se porouchá, SoundDial má hodnotu 14,99 EUR.</blockquote>
<p>Několik konkrétních nerozhodných výsledků. Pokud pravidelně řešíte příliš tiché zdroje, samotný boost ospravedlňuje cenu — Background Music prostě nemůže udělat zvuk hlasitější než zdroj. Pokud se děsíte každoročního hazardu „přežije můj zvuk aktualizaci“, aplikace sandboxed store tuto úzkost odstraní. Pokud máte rádi scény s nastavením a zapomenutím, profily šetří skutečné tření. A jedná se o jednorázovou částku 14,99 EUR, ne o předplatné, takže srovnání představuje jeden nákup oproti času strávenému údržbou bezplatného ovladače.</p>
<p>Naopak, pokud jste kutil, který má rád open source, chce číst kód a většinou jen vypne jednu aplikaci – ušetřete peníze. Oba nástroje řeší stejný základní problém; liší se robustností, hloubkou funkcí a tím, kdo vás chytí, když se pod nimi změní macOS.</p>

<p>Chcete objem jednotlivých aplikací bez hazardu s virtuálním ovladačem? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> — jednorázová cena 14,99 EUR, izolovaná v karanténě, bez ovladačů, se zabudovaným posílením, profily a automatickým uhýbáním.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "Stojí SoundSource za 39 $? Levnější jednorázová alternativa Mac",
    description: "SoundSource je výkonný zvukový nástroj Mac za ~ 39 $, ale pokud potřebujete pouze hlasitost a zesílení pro jednotlivé aplikace, je to přehnané. Zde je poctivé srovnání a jednorázová alternativa za 14,99 EUR.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>SoundSource stojí za to, pokud potřebujete jeho kompletní sadu nástrojů: hlasitost pro jednotlivé aplikace, 10pásmový ekvalizér na aplikaci, směrování zvuku mezi zařízeními a efekty pro celý systém. Ale za cenu kolem 39 $ je to přehnané, pokud chcete hlavně objem na aplikaci, ztlumení na aplikaci a zvýšení hlasitosti. Pro tu užší práci, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> stojí 14,99 € jednou.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Stojí SoundSource 39 $? Levnější jednorázová alternativa Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Co vlastně SoundSource dělá</h2>
<p>Rogue Amoeba SoundSource je skutečně vynikající software a je důležité být spravedlivý. Není to jen směšovač hlasitosti. To vám dává:</p>
<ul>
<li><strong>Ovládání hlasitosti podle aplikace</strong> z panelu nabídek, funkce, pro kterou většina lidí přichází.</li>
<li><strong>Plně 10pásmový ekvalizér</strong> můžete použít pro aplikaci nebo celý systém plus další zvukové efekty (prostřednictvím zásuvných modulů Audio Unit).</li>
<li><strong>Směrování výstupu/vstupu</strong>, včetně odeslání jedné aplikace na jiné výstupní zařízení než zbytek systému.</li>
<li><strong>Rychlé přepínání zařízení</strong> a předvolby EQ specifické pro sluchátka.</li>
</ul>
<p>Pokud jste podcaster, streamer nebo audio blbeček, který si chce vyladit EQ na sluchátkách, přesměrovat zvuk jedné aplikace do samostatného reproduktoru nebo naskládat efekty Audio Unit, SoundSource si svou cenu vydělá. Tady na to nic neklepe.</p>

<h2>Otázka ceny</h2>
<p>SoundSource je placená jednorázová licence kolem 39 $ (cena se liší podle verze a akcí). Nejde o opakované předplatné ve smyslu Netflixu, ale řídí se klasickým vzorem placených aplikací: koupíte si hlavní verzi a budoucí velké upgrady jsou obvykle zlevněné placené upgrady, nikoli navždy zdarma. Za několik let je to více než jeden nákup. Pro mnoho uživatelů Mac je upřímná otázka: platím 39 $ za sadu směrování a ekvalizéru, když se dotýkám pouze posuvníků hlasitosti pro jednotlivé aplikace?</p>

<blockquote>Pokud jste otevřeli SoundSource a používali jste pouze posuvníky hlasitosti a tlačítka ztlumení, platíte za sadu, abyste mohli používat jednu zásuvku.</blockquote>

<h2>Proč ten problém vůbec existuje</h2>
<p>Zde je upřímná hlavní příčina: macOS nemá vestavěný mixér hlasitosti pro jednotlivé aplikace. Windows má jeden roky, ale na Mac je systémová hlasitost všechno nebo nic. Neexistuje žádný způsob od společnosti Apple, jak udržet Spotify tichý, zatímco videohovor zůstává hlasitý, nebo ztlumit jednu aplikaci, aniž byste se dotkli všeho ostatního. Tato mezera je přesně důvodem, proč nástroje jako SoundSource a <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> existovat. Je to skutečné omezení operačního systému, není to něco, co by některá z aplikací vymyslela a problém vyřešit.</p>

<h2>Kde se hodí lehčí, levnější varianta</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je směšovač hlasitosti pro jednotlivé aplikace vytvořený pro běžné pouzdro, nikoli pro pro-audio pouzdro. Pokrývá:</p>
<ul>
<li><strong>Nezávislý objem na aplikaci</strong> — Pusťte si hudbu, zatímco schůzka zůstane na plné úrovni.</li>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> — ztišit jednu aplikaci bez ztlumení Mac.</li>
<li><strong>Zvýšení hlasitosti podle aplikace</strong> — posuňte tichou aplikaci nad normálních 100 %, když je zdroj příliš měkký.</li>
<li><strong>Objemové profily</strong> – uložte sadu úrovní pro jednotlivé aplikace (např. rozložení „zaměření“ nebo „volání“) a přepínejte jedním kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky snižovat ostatní aplikace, když začnete mluvit nebo když se hraje vybraná aplikace.</li>
<li><strong>Rychlé přepínání výstupů</strong> — přeskakování mezi reproduktory, sluchátky a dalšími zařízeními z panelu nabídek.</li>
</ul>
<p>to je <strong>14,99 € jednorázově</strong>, prodávaný prostřednictvím Mac App Store, takže je v sandboxu a není zde žádný samostatný DMG, žádné rozšíření jádra a žádný zvukový ovladač k instalaci. Stáhnete si ji jako kteroukoli aplikaci App Store a aktualizuje se prostřednictvím obchodu.</p>

<h2>Upřímné srovnání</h2>
<p>Mějte jasné oči ohledně kompromisu. SoundSource umí více než SoundDial, a pokud vám na některém z následujících záleží, SoundSource je lepší nákup:</p>
<ul>
<li>Chcete skutečnou aplikaci nebo systém <strong>ekvalizér</strong> a efekty Audio Unit.</li>
<li>musíte <strong>směrovat jednu aplikaci do jiného výstupního zařízení</strong> než všechno ostatní.</li>
<li>Spoléháte na <strong>předvolby EQ specifické pro sluchátka</strong> a jemné zpracování zvuku.</li>
</ul>
<p>SoundDial neprovádí EQ ani směrování zařízení podle aplikace. Je schválně užší. Na oplátku vám přináší nižší cenu, lehčí půdorys a cílené rozhraní na liště nabídek pro to, co většina lidí skutečně chtěla: udržení každé aplikace na vámi zvolené úrovni, s podporou a profily navrchu.</p>

<h2>Takže stojí SoundSource za to?</h2>
<p>Ano, pokud použijete EQ a směrování. Je to vyspělý, dobře podporovaný software od uznávaného vývojáře a cena odráží skutečné schopnosti. Ale "stojí za to" záleží na tom, na co sáhnete. Pokud aplikaci otevřete a pouze upravíte posuvníky hlasitosti, ztlumíte aplikaci nebo si přejete, aby jedna tichá aplikace byla hlasitější, platíte peníze za prémiovou sadu za základní potřeby mixéru. V takovém případě je jednorázový nástroj v hodnotě 14,99 EUR rozumnější a můžete kdykoli přejít na SoundSource později, pokud vaše potřeby přerostou v EQ a směrování.</p>

<p>Pokud vám jde pouze o hlasitost, zesílení, ztlumení, profily a automatické ztlumení u jednotlivých aplikací, <a href="https://apps.apple.com/app/id6772792641">získejte SoundDial na Mac App Store</a> — 14,99 EUR jednou, bez předplatného, bez ovladačů.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Příliš hlasité na Mac? Ztlumte jeden prohlížeč, aniž byste vše ztlumili",
    description: "Chrome tryská hlasitěji než vaše ostatní aplikace na Mac? Naučte se vestavěné opravy (ztlumení jednotlivých karet, nastavení zvuku webu) a jak nastavit skutečnou hlasitost pro jednotlivé aplikace pro Chrome, aby zůstal tišší než všechno ostatní.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>macOS nemá vestavěnou hlasitost pro jednotlivé aplikace, takže nemůžete nativně vypnout Chrome a ponechat ostatní aplikace na plné hlasitosti. Mezi vaše nejrychlejší bezplatné opravy patří ztlumení hlučných karet, snížení hlasitosti v každém přehrávači videa nebo blokování zvuku pro jednotlivé stránky v nastavení Chrome. Pro skutečnou a trvalou úroveň hlasitosti pouze Chrome potřebujete mixážní pult pro jednotlivé aplikace.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Příliš hlasité na Mac? Ztlumte jeden prohlížeč, aniž byste vše ztlumili" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč Chrome zní hlasitěji než všechno ostatní</h2>
<p>Chrome není nutně „hlasitější“ svým designem – jde o to, že Chrome směruje zvuk z mnoha nezávislých zdrojů: YouTube, automaticky přehrávané reklamy, videohovory, karty s hudbou na pozadí a webové aplikace, z nichž každý dodává svou vlastní hlasitost. Některé stránky jsou zvládnuté za tepla, reklamy jsou notoricky hlasité a Chrome je všechny přehrává na plné výstupní úrovni vašeho systému. Vaše hudební aplikace nebo hovor mohou být tišší, takže mixu dominuje Chrome.</p>
<p>Na Windows stačí otevřít Směšovač hlasitosti a přetáhnout posuvník Chrome dolů. macOS prostě tuto funkci neobsahuje. Systémová klávesa hlasitosti ovládá vše najednou, takže otočení Chrome dolů také ztlumí hudbu, oznámení a hovory. To je základní omezení – a je to mezera v operačním systému, ne něco, co děláte špatně.</p>

<h2>Vestavěné opravy, které nic nestojí</h2>
<p>Než něco nainstalujete, vyzkoušejte tyto. Neposkytnou vám jediný ovladač hlasitosti Chrome, ale řeší většinu problémů s "jednou hlasitou záložkou".</p>
<ul>
<li><strong>Ztlumit hlučnou kartu.</strong> Klikněte pravým tlačítkem na kartu a vyberte možnost „Ztlumit web“ nebo klikněte na malou ikonu reproduktoru, která se zobrazí na kartě přehrávající zvuk. Tím se tato karta zcela ztiší, aniž byste se dotkli zbytku Chrome.</li>
<li><strong>Snižte hlasitost uvnitř přehrávače.</strong> Nejspolehlivější trik: přetáhněte posuvník hlasitosti dolů uvnitř YouTube, Netflix nebo cokoli, co hraje. Weboví hráči si pamatují svou vlastní úroveň pro každý web, takže tišší YouTube zůstane příště tichý.</li>
<li><strong>Blokovat zvuk pro jednotlivé stránky.</strong> Přejít na <em>chrome://settings/content/sound</em>. Stránky můžete přepínat mezi „povolenými“ a „ztlumenými“ a přidat konkrétní domény do seznamu ignorovaných. Skvělé pro trvalé umlčení webů, které se automaticky přehrávají.</li>
<li><strong>Zabít automaticky přehrávané reklamy.</strong> Zvuk reklamy je často skutečným viníkem. Blokování obsahu nebo ztlumení karty, dokud nebudete připraveni se dívat, odstraní většinu překvapivé hlasitosti.</li>
</ul>
<blockquote>Ty jsou skutečně užitečné a zdarma. Všimněte si ale, co neumí: ztlumují nebo spravují jednotlivé karty. Žádný z nich vám nedovolí říct „udržujte všechny Chrome na 40 %, zatímco moje hudba zůstane na 100 %.</blockquote>

<h2>Upřímné omezení: žádný objem na aplikaci v macOS</h2>
<p>Pokud je vaším skutečným cílem „Chrome by měl být vždy tišší než mé ostatní aplikace“, vestavěné nástroje zaostávají. Ztlumení na kartě je všechno nebo nic. Posuvníky přehrávače se resetují, když si je web nepamatuje a je třeba je neustále opakovat. A systémový objem posouvá vše dohromady.</p>
<p>Toto je skutečné omezení macOS, nikoli chyba, kterou můžete nakonfigurovat. Apple nikdy nedodal objemový mixér ve stylu Windows. Jediným způsobem, jak získat trvalou nezávislou úroveň hlasitosti konkrétně pro Chrome, je aplikace třetí strany, která je umístěna mezi vašimi aplikacemi a výstupním zařízením a aplikuje zisk pro jednotlivé aplikace.</p>

<h2>Nastavte skutečný objem na aplikaci pro Chrome</h2>
<p>Menu-bar mixer jako <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dává macOS ovládání hlasitosti pro jednotlivé aplikace, které chybí. Obsahuje seznam všech aplikací, které aktuálně přehrávají zvuk, a každé z nich poskytuje vlastní posuvník – takže můžete Chrome stáhnout na pohodlnou úroveň a nechat Spotify, vaše hovory a systémové zvuky přesně tam, kde jsou.</p>
<p>Zde je návod, jak s ním zkrotit hlasitý Chrome:</p>
<ul>
<li>Otevřete panel nabídek a najděte Chrome v seznamu aktivních aplikací.</li>
<li>Přetáhněte posuvník Chrome dolů, řekněme, na 40 až 50 procent. Ostatní aplikace zůstanou nedotčeny.</li>
<li>Pokud je také konkrétní aplikace <em>tichý</em> místo toho — aplikaci pro volání, která šeptá — použijte <a href="https://apps.apple.com/app/id6772792641">zvýšení hlasitosti na aplikaci</a> posunout ji nad 100 procent a zároveň udržet Chrome nízko.</li>
<li>Okamžité ztlumení Chrome pomocí ztlumení pro každou aplikaci, když potřebujete ticho bez zavírání karet.</li>
</ul>
<p>Protože je úroveň svázána s aplikací, drží se. Chrome zůstává na zvolené hlasitosti na kartách, webech a restartech – žádné přetahování posuvníků přehrávače pokaždé, když otevřete nové video.</p>

<h2>Jdeme ještě dále: profily, zmenšování a přepínání výstupů</h2>
<p>Jakmile budete mít kontrolu v jednotlivých aplikacích, vyplatí se mít několik doplňků, které se vyplatí mít po ruce. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> umožňuje ušetřit hlasitost <strong>profily</strong> — například profil „zaměření“, kde je Chrome tichý a hudba hlasitá, a profil „sledování“, kde dominuje Chrome — a přepínat mezi nimi jediným kliknutím. Auto-ducking může automaticky vypnout další aplikace, když se spustí vybraný zdroj (to je praktické, takže hovor nikdy není pohřben pod hlasitou kartou prohlížeče). A rychlé přepínání výstupu vám umožní přeskakovat mezi reproduktory, sluchátky a dalšími zařízeními, aniž byste se museli ponořit do nastavení systému.</p>
<p>Je to jednorázový nákup 14,99 EUR na Mac App Store – žádné předplatné, žádné ovladače k instalaci, žádné DMG nebo rozšíření jádra. Protože je v sandboxu a distribuován prostřednictvím App Store, nevyžaduje, aby útržkovitý zvukový ovladač instaloval starší nástroje mixu, na které se spoléhalo.</p>

<h2>Kterou opravu byste měli použít?</h2>
<p>Pokud máte občas jen jednu nepříjemnou kartu, použijte vestavěné ztlumení Chrome a nastavení zvuku webu – jsou zdarma a fungují. Pokud si neustále přejete, aby bylo možné Chrome jednoduše ztlumit, zatímco vše ostatní zůstane na místě, to je přesně ta mezera, kterou macOS nechává otevřenou, a mixér pro jednotlivé aplikace je čistým řešením.</p>

<p>Chcete Chrome trvale tišší bez ztlumení hudby nebo hovorů? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> a dát každé aplikaci vlastní posuvník hlasitosti.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "Oznámení WhatsApp & Telegram zní na Mac příliš hlasitě? Odmítněte je",
    description: "Opravte zvuky oznámení na ploše WhatsApp a Telegram, které jsou na vašem Mac příliš hlasité. Začněte s vestavěnými nastaveními každé aplikace a poté snižte nebo ztlumte celou aplikaci, když vám macOS neposkytuje žádnou kontrolu pro jednotlivé aplikace.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>Začněte v každé aplikaci: WhatsApp a Telegram vám umožňují ztlumit nebo změnit zvuky oznámení ve vlastním nastavení, což je nejčistší oprava. macOS však nemá žádný posuvník hlasitosti oznámení pro jednotlivé aplikace, takže pokud je vlastní zvuk aplikace stále příliš hlasitý, jedinou skutečnou pákou je snížit nebo ztlumit zvuk celé aplikace pomocí nástroje pro hlasitost jednotlivých aplikací.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Oznámení WhatsApp &amp; Telegram zní na Mac příliš hlasitě? Odmítněte je" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Nejprve použijte vlastní nastavení oznámení aplikace</h2>

<p>Oba modely WhatsApp i Telegram dodávají své vlastní ovladače zvuku a zde byste měli vždy začít. Je to nejpřesnější oprava a nedotýká se ničeho jiného na vašem Mac.</p>

<p><strong>WhatsApp Desktop:</strong> Otevřete WhatsApp, klikněte <em>Nastavení</em> (ikona ozubeného kola), pak <em>Oznámení</em>. Můžete vypnout <em>Zvuky</em> zcela při zachování bannerů nebo vypněte náhledy oznámení. WhatsApp nenabízí posuvník hlasitosti, takže je v podstatě zapnutý nebo vypnutý pro samotný zvuk.</p>

<p><strong>Telegram Desktop:</strong> Otevřít <em>Nastavení → Oznámení a zvuky</em>. Telegram je zde flexibilnější. Zvuk upozornění můžete globálně vypnout, ztlumit jednotlivé chaty nebo nastavit vlastní (tišší) tóny. Můžete také ztišit jednu hlučnou skupinu tak, že ji otevřete a vyberete <em>Ztlumit</em>. Pro většinu lidí problém vyřeší ztlumení nejhlasitějších chatů, aniž by všude bylo ticho.</p>

<p>Pokud je zvuk v pořádku, ale příliš často, ztlumte konkrétní chaty nebo kanály, které se spouštějí nejčastěji, než abyste zabili zvuk v celé aplikaci. Díky tomu jsou důležitá upozornění slyšet.</p>

<h2>Vypněte zvuky upozornění v nastavení systému macOS</h2>

<p>macOS má druhou vrstvu ovládání, která v některých případech přepíše aplikaci. Přejít na <em>Nastavení systému → Upozornění</em>, v seznamu vyberte WhatsApp nebo Telegram a vypněte <em>Přehrát zvuk pro upozornění</em>. Tím se ztiší výstražný zvonek pro danou aplikaci, zatímco se stále zobrazují bannery.</p>

<p>Toto je skutečně dobrá oprava, pokud chcete, aby aplikace byla potichu při oznámeních, a nestaráte se o její další zvuk (hovory, video). V kombinaci s vlastním nastavením aplikace pokrývá většinu stížností typu „ping je trhavý“.</p>

<h2>Skutečné omezení: macOS nemá žádný objem pro jednotlivé aplikace</h2>

<p>Tady je ta upřímná část. Výše uvedené kroky jsou vypínače. Co neumí, je otočit WhatsApp nebo Telegram <em>dolů</em> na, řekněme, 40 % při zachování plné hlasitosti. Windows má už roky mixážní pult pro jednotlivé aplikace. macOS jednoduše žádný neobsahuje a neexistuje žádné skryté nastavení nebo příkaz Terminal, který by jej přidal.</p>

<p>To je důležité, když problém není konkrétně v oznamovacím zvonku, ale je příliš hlasitá celá aplikace:</p>

<ul>
<li>WhatsApp nebo Telegram <strong>hlasové hovory a videohovory</strong> že zvuk na plnou hlasitost vzhledem k vaší hudbě nebo schůzce</li>
<li>Zvuk upozornění, který chcete ponechat, ale na nižší úrovni, ne zcela vypnutý</li>
<li>Vyzváněcí tóny, které převyšují vše, co posloucháte</li>
<li>Chcete, aby byla aplikace slyšitelná, ale tiše na pozadí, zatímco se soustředíte na něco jiného</li>
</ul>

<p>Nic z toho není řešitelné pomocí vestavěných nástrojů, protože nabízejí pouze ztlumení, nikoli úroveň. Tato mezera je skutečným omezením macOS, ne něčím, co vám chybí.</p>

<h2>Nastavte hlasitost pro jednotlivé aplikace pomocí SoundDial</h2>

<p>Chcete-li skutečně vypnout jednu aplikaci namísto jejího vypnutí, potřebujete mixér hlasitosti pro jednotlivé aplikace. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aplikace na liště nabídek, která poskytuje macOS ovládání hlasitosti pro jednotlivé aplikace, se kterým nikdy nebylo dodáno. Uvádí všechny aplikace, které aktuálně přehrávají zvuk, a dává každé z nich vlastní posuvník.</p>

<p>Pro tento konkrétní problém:</p>

<ul>
<li>Otevřít <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> z panelu nabídek a najděte v seznamu WhatsApp nebo Telegram.</li>
<li>Přetáhněte jeho posuvník dolů na pohodlnou úroveň, například 30–40 %, a ponechte hudbu, prohlížeč nebo videohovor beze změny.</li>
<li>Použijte jednotlivé aplikace <strong>ztlumit</strong> Tlačítko pro okamžité ztišení této aplikace během hovoru nebo schůzky a následné zapnutí zvuku později bez procházení nastavení.</li>
<li>Pokud někdy potřebujete opak, tichou aplikaci, která je příliš měkká, pro každou aplikaci <strong>posílení</strong> může to posunout nad 100 %.</li>
</ul>

<p>Protože nastavuje úroveň pro každou aplikaci, SoundDial udržuje upozornění a zvuk volání slyšitelný, ale přiměřený, namísto volby všechno nebo nic, kterou na vás vnucují vestavěné možnosti. Můžete také ušetřit <strong>objemové profily</strong>, takže nastavení „zaměření“, které udržuje chatovací aplikace na nízké úrovni, je dostupné jediným kliknutím.</p>

<blockquote>Jedno upřímné upozornění: snížení celkové hlasitosti aplikace v SoundDial také sníží její upozornění, protože v macOS jde o zvuk stejné aplikace. Pokud chcete oznámení zcela vypnout, ale hovory mají plnou hlasitost, použijte vlastní ztlumení aplikace a nastavení systému pro zvonění a pro nastavení obecné úrovně si vyhraďte SoundDial.</blockquote>

<p>SoundDial je jednorázový nákup za 14,99 EUR na Mac App Store, v sandboxu, bez předplatného, bez ovladačů jádra a bez DMG pro boční načítání. Je to praktická odpověď, když opravu, kterou skutečně chcete, vypnutí jedné aplikace spíše než její vypnutí, není něco, co macOS sám dokáže.</p>

<h2>Kterou opravu byste měli použít?</h2>

<p>Pracujte shora dolů. Nejprve vyzkoušejte vlastní nastavení oznámení aplikace a poté macOS System Settings, abyste ukončili zvonění. Pokud opravdu chcete snížit WhatsApp nebo Telegram na určitou hlasitost nebo ztlumit pouze tuto aplikaci za běhu během hovorů, zde si své místo získá mixážní pult pro jednotlivé aplikace.</p>

<p>Už vás nebaví volit mezi plným výbuchem a úplným tichem pro vaše chatovací aplikace? <a href="https://apps.apple.com/app/id6772792641">Získejte SoundDial na Mac App Store</a> a dát každé aplikaci vlastní ovladač hlasitosti.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Zvuk hry hlasitější než Discord na Mac? Jak vyvážit hlasitost hry a hlasu",
    description: "Vaše hra přehlušuje hlasový chat Discord na Mac a není zde žádný vestavěný mixér hlasitosti. Zde je důvod, proč macOS postrádá hlasitost jednotlivých aplikací ve stylu Windows a jak vypnout hru a zároveň zachovat hlasitost.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>macOS nemá žádný vestavěný mixážní pult pro jednotlivé aplikace, takže nemůžete nativně omezit hru a zároveň nechat Discord nahlas. Oprava je aplikace na liště nabídek, která nastavuje nezávislou hlasitost pro každou aplikaci. Ztlumte hru na 40–50 %, ponechte hlasový chat na 100 % a obojí zůstane vyvážené, aniž byste se dotkli herních posuvníků.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Herní zvuk hlasitější než Discord na Mac? Jak vyvážit hlasitost hry a hlasu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč se to děje na Mac (a ne na Windows)</h2>

<p>Pokud jste hráli na Windows, znáte Směšovač hlasitosti: klikněte pravým tlačítkem na ikonu reproduktoru a každá spuštěná aplikace dostane svůj vlastní posuvník. Zahodíte hru, zvýšíte Discord, hotovo. macOS tuto funkci prostě nikdy nedodával. Existuje jeden hlavní výstupní hlasitost a několik přepínačů na úrovni aplikace, které jsou pohřbeny v nastavení systému, ale žádné ovládání úrovně pro jednotlivé aplikace pro libovolné aplikace.</p>

<p>Takže když je herní mix zvládnutý za tepla, jeho exploze, hudba a střelba se ozývají na stejné výstupní úrovni jako hlasy vašich přátel. Některé hry odhalují hlavní posuvník hlasitosti, ale mnoho z nich neklesá dostatečně nízko a mnoho spouštěčů, prohlížečů a samostatných titulů nenabízí vůbec žádné užitečné ovládání. Samotný Discord vám umožňuje pouze upravit hlasitost příchozích uživatelů, nikoli hru, která jim konkuruje.</p>

<p>Abych byl upřímný, jedná se o mezeru na úrovni operačního systému, ne o chybu, kterou můžete přepnout. Zvukový zásobník společnosti Apple směruje vše do jediného výstupního streamu a neexistuje žádné uživatelské rozhraní první strany, které by to rozdělilo na aplikaci. Proto potřebujete nástroj třetí strany, který se nachází mezi vašimi aplikacemi a výstupním zařízením.</p>

<h2>Manuální řešení (a proč selhávají)</h2>

<p>Než sáhnete po softwaru, vyplatí se znát bezplatné možnosti a jejich limity:</p>

<ul>
<li><strong>Snižte hlasitost hry v aplikaci.</strong> Funguje, pokud má hra hlavní posuvník s dostatečně jemnými kroky. Mnoho se zastaví na 10% přírůstcích nebo spojí hudbu a efekty dohromady, takže nemůžete zkrotit pouze hlasité části.</li>
<li><strong>Zvyšte své přátele v Discord.</strong> Klikněte pravým tlačítkem na každého uživatele a zvyšte jeho hlasitost. To trochu pomáhá, ale doplňuje to a nedotýká se hry, která je ve skutečnosti problémem.</li>
<li><strong>Používejte sluchátka s hardwarovým ovladačem hlasitosti.</strong> Mění pouze celkovou úroveň, nikoli rovnováhu mezi hrou a hlasem.</li>
<li><strong>Směrujte zvuk přes virtuální zařízení.</strong> Nástroje jako Loopback nebo BlackHole dokážou rozdělit streamy, ale jsou zaměřeny na profesionály, mají skutečné nastavení a jsou přehnané pro „ztišení hry“.</li>
</ul>

<p>Žádná z nich vám neposkytuje jedinou věc, kterou uživatelé Windows považují za samozřejmost: rychlý posuvník pro každou aplikaci. To je ta mezera <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je postaven tak, aby naplnil.</p>

<h2>Přímá oprava: nezávislý objem na aplikaci</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je směšovač hlasitosti pro jednotlivé aplikace pro macOS. Zobrazuje každou aplikaci, která právě přehrává zvuk, a dává každé z nich vlastní posuvník, přesně jako Windows Volume Mixer. U problému hra versus hlas je pracovní postup krátký:</p>

<ul>
<li>Klikněte na ikonu SoundDial na liště nabídek, zatímco hra i Discord běží.</li>
<li>Najděte hru v seznamu a stáhněte její posuvník dolů zhruba na 40-50 %.</li>
<li>Ponechte Discord (nebo Slack, Zoom nebo vaši hlasovou aplikaci) na 100 %.</li>
<li>Přizpůsobte se za chodu během hry – posuňte hru dále dolů v hlasité přestřelce, couvejte během tichého průzkumu.</li>
</ul>

<p>Protože úrovně jsou na aplikaci, nastavíte je jednou a zůstanou. Hra zůstane uzavřená bez ohledu na to, jak horký je její vlastní mix, a vaši přátelé jsou přes ni jasně slyšitelní.</p>

<h2>Posílení, ztlumení a profily pro zbytek nastavení</h2>

<p>Stejný nástroj pokrývá sousední nepříjemnosti, které přicházejí s hlasovým hraním:</p>

<ul>
<li><strong>Vylepšení pro jednotlivé aplikace.</strong> Pokud je mikrofon spoluhráče tichý i při maximu Discord, můžete stisknout hlasovou aplikaci <em>výše</em> 100%, takže to spíše prořízne hru, než aby se pohřbilo.</li>
<li><strong>Ztlumení pro jednotlivé aplikace.</strong> Okamžitě ztište kartu prohlížeče na pozadí nebo hudební aplikaci, aniž byste museli používat alt nebo zastavovat přehrávání.</li>
<li><strong>Objemové profily.</strong> Uložte si „herní“ profil se hrou na 45 % a vylepšené Discord, poté jedním kliknutím přepněte zpět na „normální“ profil pro každodenní použití – žádné přetahování posuvníků při každé relaci.</li>
<li><strong>Auto-ducking.</strong> Nechte hru automaticky ponořit, když někdo mluví, takže popisky vždy přistanou na vrcholu akce.</li>
<li><strong>Rychlé přepínání výstupů.</strong> Přeskakujte mezi sluchátky a reproduktory ze stejné nabídky, aniž byste se museli ponořit do nastavení systému.</li>
</ul>

<blockquote><p>Mentální model je jednoduchý: jeden posuvník na aplikaci, tak jak to Windows dělá léta. macOS to prostě nikdy neposkytlo, takže paritu obnoví malý nástroj.</p></blockquote>

<h2>Co čekat upřímně</h2>

<p>Mixér pro jednotlivé aplikace řeší problém s rovnováhou čistě, ale správně nastavuje očekávání. Ovládá softwarové výstupní úrovně – nedokáže opravit hru, jejíž vlastní zvuk je špatně zvládnutý, a nedokáže vytvořit signál, který nebyl nikdy zachycen (skutečně rozbitý mikrofon stále potřebuje opravu hardwaru). Boost přidává skutečný zisk, takže posunutí tichého zdroje daleko za 100 % může způsobit zkreslení, přesně jako když zapnete jakýkoli zesilovač příliš vysoko. Při rozumném použití však většina nastavení potřebuje skromnou herní čepici a malé zesílení hlasu.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je v sandboxu a instaluje se přímo ze Mac App Store – žádné ovladače, žádná rozšíření jádra, žádné DMG, kterým lze důvěřovat. Je to jednorázová cena 14,99 EUR bez předplatného a podporuje ovládání hlasitosti macOS ve 28 jazycích.</p>

<p>Přestaňte bojovat se svými posuvníky ve hře. Chyť <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a>, vypněte hru, nechte svůj tým nahlas a nakonec získejte mixážní pult ve stylu Windows macOS, který jste zapomněli dodat.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Reproduktory externího monitoru jsou příliš hlasité nebo zaseknuté na Mac? Opravte hlasitost HDMI/DisplayPort",
    description: "Proč tlačítka hlasitosti vašeho Mac neovládají reproduktory monitoru HDMI nebo DisplayPort a jak opravit zvuk, který je příliš hlasitý, zaseknutý nebo neupravitelný pomocí OSD monitoru, nastavení Audio MIDI a lepšího výstupního směrování.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Pokud jsou tlačítka hlasitosti vašeho Mac zašedlá nebo nedělají nic pro monitor připojený přes HDMI nebo DisplayPort, obvykle to není chyba. Zvuk digitálního displeje je často odesílán na pevné úrovni a hlasitost ovládá vlastní hardware monitoru. Oprava spočívá v nastavení zobrazení, přesměrování výstupu nebo použití jiného zvukového zařízení.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Reproduktory externího monitoru jsou příliš hlasité nebo zaseknuté na Mac? Opravte hlasitost HDMI/DisplayPort" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč tlačítka hlasitosti Mac přestanou fungovat přes HDMI/DisplayPort</h2>

<p>HDMI a DisplayPort přenášejí zvuk jako digitální stream. Mnoho monitorů přijímá tento proud na pevné výstupní úrovni a očekává, že budete ovládat hlasitost na samotném displeji, nikoli na zdrojovém zařízení. Když to macOS detekuje, deaktivuje posuvník hlasitosti na obrazovce a zešedne klávesy F11/F12 a při jejich stisknutí zobrazí symbol „zákaz vstupu“.</p>

<p>Toto je omezení hardwaru a protokolu, nikoli něco, co může software na Mac přepsat. Zvuk nikdy neprojde fází, kde je macOS dovoleno jej zeslabit. Žádná aplikace, ovladač ani nastavení nemůže vložit ovládání hlasitosti do streamu, který displej trvá na příjmu na plné úrovni. Být upřímný vám ušetří hodiny hledání špatného řešení.</p>

<h2>Oprava 1: Použijte vlastní ovládací prvky monitoru (OSD)</h2>

<p>Toto je skutečné řešení pro většinu lidí. Téměř každý monitor s vestavěnými reproduktory má nabídku na obrazovce ovládanou fyzickými tlačítky nebo joystickem na zadní nebo spodní straně panelu.</p>

<ul>
<li>Stisknutím tlačítka OSD/menu otevřete nastavení monitoru.</li>
<li>Vyhledejte sekci Zvuk nebo Hlasitost.</li>
<li>Zde snižte úroveň – toto je ovládání, které skutečně funguje přes HDMI/DP.</li>
</ul>

<p>Některé monitory také nabízejí doprovodnou aplikaci nebo podporu DDC/CI, takže můžete ovládat OSD ze macOS. Nástroje třetích stran, které mluví DDC, mohou mapovat tlačítka hlasitosti vašeho Mac na hardwarovou hlasitost monitoru, což stojí za vyzkoušení, pokud nenávidíte sahání na tlačítka na panelu.</p>

<h2>Oprava 2: Zkontrolujte nastavení Audio MIDI</h2>

<p>Otevřít <strong>Nastavení MIDI zvuku</strong> (v /Aplikace/Utilities). Vyberte svůj monitor v seznamu zařízení. Pokud se napravo zobrazí posuvník hlasitosti, přetáhněte jej dolů – někdy se na displeji zobrazí softwarově ovladatelná úroveň, i když jsou klávesy na panelu nabídek deaktivovány. Pokud posuvník chybí nebo je zašedlý, displej potvrzuje, že přijímá pouze zvuk s pevnou úrovní, a měli byste se vrátit k OSD.</p>

<p>Když jste zde, potvrďte, že je vybráno správné výstupní zařízení. Je běžné, že zvuk je tiše směrován na monitor, který jste zapomněli připojit, což vysvětluje náhlý hlasitý nebo chybějící zvuk.</p>

<h2>Oprava 3: Směrujte zvuk někam, kde můžete skutečně ovládat</h2>

<p>Pokud jsou reproduktory vašeho monitoru stejně průměrné (většina ano) a jeho ovládání hlasitosti je nemotorné, nejčistším řešením je přestat je používat:</p>

<ul>
<li>Zapojte reproduktory nebo sluchátka do výstupního konektoru pro sluchátka monitoru, pokud jej má – tento analogový výstup lze obvykle ovládat z displeje.</li>
<li>Použijte USB DAC, USB reproduktory nebo výstup Bluetooth. USB a analogové výstupy poskytují macOS plné softwarové ovládání hlasitosti, takže vaše klávesy opět fungují normálně.</li>
<li>Vyberte si vestavěné reproduktory vašeho Mac pro rychlé zvuky a ponechte si monitor pouze pro video.</li>
</ul>

<p>Jakmile se dostanete na výstup, který macOS skutečně dokáže zeslabit, začnou se systémové klávesy hlasitosti chovat a vy získáte opět jemné ovládání namísto přeskakování mezi hrubými kroky OSD monitoru.</p>

<h2>Jakmile výstup funguje, ovládejte hlasitost pro každou aplikaci</h2>

<p>Získání ovladatelného výstupu zpět řeší problém „příliš hlasitý/zaseknutý“. Ale macOS vám stále poskytuje pouze jeden hlavní svazek pro všechno. Na Mac není žádný vestavěný mix pro jednotlivé aplikace – Windows ho má už roky, ale Apple nikdy nedodal ekvivalent. Hlasité video, hra a tichý hovor tedy sdílejí stejný posuvník.</p>

<p>To je ta mezera <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vyplní. Je to mixážní pult, který dává každé aplikaci vlastní nezávislou hlasitost, takže můžete vypnout kartu prohlížeče, aniž byste se dotkli hudby, okamžitě ztlumit jednu aplikaci nebo zvýšit tichou aplikaci nad její normální strop. Můžete uložit profily hlasitosti pro různá nastavení a rychle přepínat výstupy z panelu nabídek.</p>

<p>Aby bylo jasno v rozsahu: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ovládá softwarovou hlasitost zvuku procházejícího přes macOS. Nemůže přepsat monitor, který ignoruje hlasitost systému přes HDMI – to je chování displeje s pevnou úrovní a opraví to pouze OSD nebo jiný výstup. Jakmile se dostanete na ovladatelný výstup, aplikace zazáří v ovládání podle aplikace.</p>

<h2>Rychlý kontrolní seznam</h2>

<ul>
<li>Šedá tlačítka přes HDMI/DP? Použijte hlasitost OSD monitoru – to je očekávané chování.</li>
<li>Zkontrolujte nastavení Audio MIDI, zda neobsahuje skrytý softwarový posuvník.</li>
<li>Ujistěte se, že je vybráno správné výstupní zařízení.</li>
<li>Pro skutečné ovládání nasměrujte zvuk do výstupu pro sluchátka, USB nebo Bluetooth.</li>
<li>Poté použijte mixér pro jednotlivé aplikace k vyvážení jednotlivých aplikací.</li>
</ul>

<p>Jakmile je váš výstup pod kontrolou, dejte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pohled. Je to jednorázový nákup v hodnotě 14,99 EUR od Mac App Store – žádné předplatné, žádné ovladače, žádné DMG – a konečně přináší do macOS skutečný mixážní pult pro jednotlivé aplikace.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "Hlasitost USB DAC se na Mac neupraví? Získejte zpět softwarové ovládání hlasitosti",
    description: "Proč macOS u mnoha USB DAC zašedne posuvník hlasitosti, co to znamená a jak vrátit funkční softwarové ovládání hlasitosti zpět na váš Mac, aniž by došlo ke snížení kvality zvuku.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Pokud je posuvník hlasitosti vašeho USB DAC na Mac šedý, obvykle se nejedná o chybu. macOS deaktivuje hlasitost svého softwaru, když DAC hlásí, že nemá žádnou ovladatelnou hlasitost, očekává se, že použijete vlastní hardwarový knoflík DAC. Chcete-li obnovit hlasitost softwaru, použijte útlumový modul na úrovni aplikace, jako je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC Hlasitost se na Mac neupraví? Získejte zpět softwarové ovládání hlasitosti" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč macOS u některých USB DAC ztmaví hlasitost</h2>

<p>Když připojíte USB audio zařízení, macOS se ho zeptá, co může dělat přes protokol USB Audio Class (UAC). Součástí tohoto podání ruky je sada ovládacích prvků „feature unit“ včetně ovládání hlasitosti. Pokud DAC deklaruje ovládání hlasitosti, macOS jej propojí s klávesami hlasitosti na klávesnici a posuvníkem na liště nabídek. Pokud DAC deklaruje, že nemá hlasitost nastavitelnou hostitelem, macOS posuvník úplně zešedí.</p>

<p>Mnoho vysoce kvalitních DAC a zesilovačů dělá přesně to druhé, záměrně. Předpokladem konstruktéra je, že do DAC přivedete digitální signál v plném rozsahu, bitově dokonalý, a ovládání hlasitosti pomocí analogového knoflíku hlasitosti na samotné jednotce. K tomuto analogovému zeslabení dochází po převodu z digitálního na analogový, takže nedochází k vyhazování bitů a je to skutečně cesta preferovaná audiofily. Je to vlastnost, ne chyba.</p>

<blockquote>Základní pravidlo: pokud má váš DAC fyzický knoflík hlasitosti a posuvník Mac je šedý, výrobce chce, abyste knoflík použili. Signál je vysílán na 100 % podle návrhu.</blockquote>

<h2>Když je ten zašedlý posuvník vlastně problém</h2>

<p>Odpověď „stačí použít knoflík“ se ve skutečných nastaveních rozpadá:</p>

<ul>
<li><strong>DAC nemá žádný knoflík.</strong> Spousta kompaktních USB DAC, hardwarových klíčů a profesionálních rozhraní neodhaluje žádné ovládání hlasitosti ani ovládání hostitele. Uvízli jste na jakékoli úrovni, na kterou je nastaven výstupní zesilovač nebo aktivní reproduktory.</li>
<li><strong>Knoflík je mimo dosah.</strong> Stolní DAC za vaším monitorem nebo jednotka napájející zesilovač s pevným ziskem znamená, že nastavení hlasitosti se místo stisku kláves stává fyzickou prací.</li>
<li><strong>Potřebujete zůstatek na aplikaci, nikoli pouze mistrovskou úroveň.</strong> I dokonalý hardwarový ovladač je jediným globálním ovládáním. Nemůže udělat hovor Zoom tišším než vaše hudba, ani utlumit hru, když se objeví upozornění.</li>
</ul>

<p>Nic z toho není opraveno macOS, protože z pohledu operačního systému se zařízení chová správně. Toto je čestné omezení: je to funkce hlášená zařízením a v nastavení systému není žádný přepínač, který by ji přepsal.</p>

<h2>Poctivá řešení, než cokoliv nainstalujete</h2>

<p>Vyzkoušejte nejprve tyto, protože nic nestojí:</p>

<ul>
<li><strong>Použijte hardwarový knoflík nebo downstream volume.</strong> Pokud váš DAC nebo vaše aktivní reproduktory/zesilovač mají ovládání, je to nejčistší možnost a zachovává plné digitální rozlišení.</li>
<li><strong>Zkontrolujte vlastní aplikaci nebo firmware DAC.</strong> Některé DAC (a herně orientované jednotky) dodávají ovládací panel nebo nastavení firmwaru, které umožňuje hlasitost hostitele. Pokud existuje možnost „Hlasitost USB“ nebo „Hlasitost softwaru“, po jejím zapnutí bude posuvník macOS znovu fungovat.</li>
<li><strong>Zkuste jiný režim USB.</strong> Několik zařízení hlásí různé možnosti v režimu „vyhovující třídě“ oproti režimu proprietárního ovladače. Instalace nebo odebrání ovladače dodavatele může změnit, zda macOS uvidí ovládání hlasitosti.</li>
<li><strong>Podívejte se do Audio MIDI Setup.</strong> Otevřete Audio MIDI Setup, vyberte zařízení a zkontrolujte, zda se zde zobrazuje hlavní nebo na kanál. Občas je na tomto panelu k dispozici posuvník, i když je panel nabídek šedý.</li>
</ul>

<p>Pokud nic z toho neplatí, potřebujete softwarový útlum na straně Mac.</p>

<h2>Softwarové ovládání hlasitosti s útlumem podle aplikace</h2>

<p>Když hardware nepřijme příkaz hlasitosti, zbývající možností je zeslabit zvuk v softwaru, než dosáhne DAC. To je přesně ono <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dělá. Nachází se na liště nabídek a poskytuje každé spuštěné aplikaci vlastní nezávislou hlasitost, ztlumení a dokonce zesílení, bez ohledu na to, zda váš DAC odhaluje hardwarové ovládání.</p>

<p>Chcete-li jej použít pro zašedlý DAC:</p>

<ul>
<li>Instalovat <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ze Mac App Store a otevřete jej z panelu nabídek.</li>
<li>Ponechte svůj DAC vybraný jako systémový výstup; můžete také použít rychlé přepínání výstupu SoundDial k přepínání mezi DAC, reproduktory a sluchátky, aniž byste se museli ponořit do nastavení systému.</li>
<li>Nastavte úrovně pro jednotlivé aplikace: spusťte prohlížeč, zvedněte hudební přehrávač, ztlumte vše, co nechcete. Každá aplikace streamuje hlasitost, kterou si zvolíte, a smíšený výsledek jde do DAC.</li>
<li>Uložte si profily hlasitosti pro různé scénáře (hovory vs. naslouchání) a nechte automatické spouštění aplikací na pozadí, když začne hrát něco důležitějšího.</li>
</ul>

<h2>Poctivý kompromis za kvalitu zvuku</h2>

<p>Softwarový útlum snižuje digitální úroveň před převodem, takže teoreticky zahazuje malé množství rozlišení ve srovnání s analogovou hlasitostí na samotném DAC. V praxi je na moderních 24bitových a vyšších cestách při normálních poslechových úrovních redukce hluboko pod vším slyšitelným a vy si zachováte plný dynamický rozsah DAC pro cokoli hraného téměř v plném rozsahu. Pokud jste purista s dobrým analogovým knoflíkem na dosah, použijte knoflík. Pokud nemáte žádné použitelné hardwarové ovládání nebo potřebujete rovnováhu v jednotlivých aplikacích, kterou macOS prostě nemůže poskytnout, objem softwaru je tím správným kompromisem a překonává posuvník, který nic nedělá.</p>

<p>SoundDial je jednorázový nákup v hodnotě 14,99 EUR, v sandboxu, bez ovladačů, rozšíření jádra nebo instalačních programů DMG. Pokud je hlasitost vašeho USB DAC šedá a sáhnout po knoflíku není možné, <a href="https://apps.apple.com/app/id6772792641">získejte SoundDial na Mac App Store</a> a vrátit funkční ovládání hlasitosti zpět na lištu nabídek.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Omezení maximální hlasitosti jedné hlasité aplikace na Mac (Chraňte svůj sluch)",
    description: "macOS nemá omezení hlasitosti pro jednotlivé aplikace, takže jedna hlasitá aplikace vás může vystřelit na plnou hlasitost systému. Zde je návod, jak nastavit strop maximální hlasitosti pro jednu aplikaci na Mac s mixem pro jednotlivé aplikace a proč záleží na hardwarových limitech.",
    date: "2026-07-23",
    readTime: "5 min čtení",
    content: `<p>macOS nemá žádný vestavěný způsob, jak omezit maximální hlasitost jedné aplikace, takže hlasitý program se přehrává bez ohledu na to, na co je váš systémový posuvník nastaven. Chcete-li nastavit strop pro jednu aplikaci, použijte panel nabídek pro jednotlivé aplikace jako např <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: podržte aplikaci na řekněme 40 procentech, zatímco hlasitost vašeho systému zůstane vyšší pro vše ostatní.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Omezení maximální hlasitosti jedné hlasité aplikace na Mac (Chraňte svůj sluch)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Proč vás jedna aplikace může náhle odpálit na Mac</h2>

<p>Na macOS je posuvník hlasitosti na liště nabídek nebo ovládacím centru jediným celosystémovým ovládacím prvkem. Každá aplikace generuje stejný výstup na stejné úrovni. V operačním systému není zabudován žádný směšovač hlasitosti pro jednotlivé aplikace, jak jej má Windows po léta s panelem směšovače hlasitosti.</p>

<p>Tento design má skutečný dopad na vaše uši. Pokud nastavíte vysokou hlasitost systému, abyste mohli slyšet tichý podcast nebo tichý videohovor, a poté přepněte na hru, oznámení Discord, web plný reklam nebo video, které bylo zvládnuto mnohem hlasitěji, tato aplikace se také přehraje na úrovni celého systému. Výsledkem je klasické strašení skokem: náhlá zvuková stěna s hlasitostí, kterou jste pro danou konkrétní aplikaci nikdy nezamýšleli.</p>

<p>Pro každého, kdo trpí tinnitem, citlivostí na zvuk nebo si prostě cení svého sluchu, je tato nepředvídatelnost problémem. Nesnažíte se vše ztišit. Snažíte se zaručit, že jedna konkrétní hlasitá aplikace nikdy nemůže překročit úroveň, o které jste se rozhodli, že je bezpečná.</p>

<h2>Co zde macOS umí a co nemůže</h2>

<p>Než něco doporučím, dovolte mi být upřímný ohledně limitů.</p>

<ul>
<li><strong>Hlasitost systému</strong> snižuje vše najednou. Ztlumením zkrotíte jednu aplikaci a vaše tiché aplikace budou neslyšitelné.</li>
<li><strong>Posuvníky hlasitosti v aplikaci</strong> existují v některých aplikacích (přehrávače médií, některé prohlížeče na kartě), ale ne ve většině. Hra, videohovor nebo nativní aplikace často nemají vůbec žádné nezávislé ovládání hlasitosti.</li>
<li><strong>Hardwarový strop je skutečný.</strong> Žádný software nedokáže vyslat signál hlasitěji, než je maximum vašeho výstupního zařízení. A naopak, vlastní ovládání hlasitosti aplikace, plus vaše DAC a sluchátka, nastavují, jaká hlasitost je ve skutečnosti „100 procent“. Software dokáže spolehlivě snížit úroveň pro jednotlivé aplikace, ale nedokáže přepsat fyziku vašich sluchátek.</li>
</ul>

<p>Upřímným cílem tedy není magické omezení hlasitosti na úrovni řidiče. Je to praktický a spolehlivý útlum pro jednotlivé aplikace: držte vybranou aplikaci na pevném zlomku výkonu systému, takže vás nikdy nemůže překvapit.</p>

<h2>Jak omezit hlasitost jedné aplikace pomocí mixéru pro jednotlivé aplikace</h2>

<p>Směšovač hlasitosti pro jednotlivé aplikace zachycuje zvuk každé aplikace a umožňuje vám nezávisle nastavit jeho úroveň. Zde je pracovní postup s <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, který se nachází v liště nabídek:</p>

<ul>
<li><strong>Otevřete mixér.</strong> Klikněte na ikonu SoundDial na panelu nabídek. Zobrazí se seznam všech aplikací, které aktuálně přehrávají zvuk, každý s vlastním posuvníkem.</li>
<li><strong>Najděte hlasitou aplikaci.</strong> Vyhledejte aplikaci, kterou chcete omezit, například hru, prohlížeč nebo nástroj pro videokonference.</li>
<li><strong>Nastavte jeho strop.</strong> Přetáhněte posuvník dané aplikace dolů na bezpečnou úroveň, řekněme 35 až 50 procent. Tato aplikace nyní hraje s tímto zlomkem výstupu systému, zatímco všechny ostatní aplikace zůstávají tam, kde byly.</li>
<li><strong>Nechte svůj systémový svazek tam, kde jej potřebujete.</strong> Udržujte systémový posuvník dostatečně vysoko pro vaše tiché aplikace. Omezená aplikace zůstane bez ohledu na to pod kontrolou.</li>
</ul>

<p>Protože úroveň je pro každou aplikaci, efektivně nastavujete maximum pro tento jeden program. I když se snaží přehrát svůj nejhlasitější obsah, nejhlasitější je nyní vámi zvolený zlomek plného obsahu.</p>

<h2>Udělejte čepici přilepenou pomocí profilů</h2>

<p>Pomůže jediné ruční nastavení, ale úrovně aplikace se mohou resetovat, když skončíte a znovu spustíte. Chcete-li vytvořit nastavení bezpečné pro sluch, které přežije restartování, použijte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>objemové profily uživatele. Uložte si profil s preferovanými úrovněmi pro jednotlivé aplikace, například „tichá herní noc“ s hrou na 40 procentech, hudební aplikací na 70 procentech a aplikací pro volání na 90 procentech. Připomeňte si to jedním kliknutím, kdykoli si sednete. Váš strop pro hlasitou aplikaci se vrátí přesně tak, jak jste si jej nastavili.</p>

<p>Pro ochranu sluchu stojí za to znát další dvě funkce:</p>

<ul>
<li><strong>Ztlumení pro jednotlivé aplikace</strong> umožňuje okamžitě umlčet jediného pachatele, aniž byste se dotkli čehokoli jiného, což je užitečné pro aplikaci, která hlasitě rozesílá spamová oznámení.</li>
<li><strong>Auto-ducking</strong> automaticky sníží zvuk na pozadí, když začne něco důležitějšího, takže nejste zachyceni mezi dvěma hlasitými zdroji najednou.</li>
</ul>

<blockquote><p>Softwarový útlum je skutečně účinný pro omezení aplikace, ale je to jedna vrstva ochrany, nikoli lékařská ochrana. Pokud máte tinnitus nebo citlivost na zvuk, spárujte strop pro jednotlivé aplikace s rozumnými celkovými úrovněmi poslechu a přestávkami. Žádná aplikace nenahradí pečlivé návyky na objem.</p></blockquote>

<h2>Poznámka k podpoře a proč je to oddělené</h2>

<p>Stejný mix pro jednotlivé aplikace, který zakrývá hlasitou aplikaci, může také zvýšit příliš tichou aplikaci nad 100 procent, což je užitečné pro aplikace, jejichž vlastní hlasitost je nastavena příliš nízko. Toto jsou dvě strany stejného ovládání: vy rozhodujete o úrovni každé aplikace, nahoru nebo dolů. Pro ochranu sluchu jednoduše zvolíte směr „dolů“ a podržíte jej tam.</p>

<h2>Krátká verze</h2>

<p>macOS vám nedovolí omezit objem jedné aplikace samostatně, a to je skutečný nedostatek operačního systému, nikoli chyba uživatele. Lišta nabídek pro jednotlivé aplikace to zavře: nastavte hlasitou aplikaci na pevný zlomek, uložte ji do profilu a už vás nikdy nemůže odpálit, zatímco ostatní aplikace zůstanou slyšet.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednorázový nákup za 14,99 EUR na Mac App Store v sandboxu bez ovladačů nebo DMG k instalaci. Pokud je cílem chránit vaše uši před jednou nepředvídatelnou aplikací, je to nejjednodušší způsob, jak nastavit tento strop a udržet ho.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Rozdílné vyvážení vlevo/vpravo na aplikaci na Mac – je to možné?",
    description: "Můžete nastavit jiné stereo vyvážení vlevo/vpravo pro každou aplikaci na macOS? Upřímně, ne – ne nativně a ne s většinou nástrojů. Zde je to, co je vlastně možné a kde jsou skutečné limity.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Upřímně, ne – macOS vám neumožňuje nastavit jiné stereo vyvážení vlevo/vpravo pro každou aplikaci a téměř žádný nástroj třetí strany také neodhaluje skutečné posouvání podle aplikace. Pro své výstupní zařízení můžete nastavit jeden globální zůstatek a můžete ovládat každou aplikaci <em>objem</em>, ale nezávisle na aplikaci <em>pánev</em> není funkce, kterou macOS zpřístupňuje.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Rozdílné vyvážení levé/pravé na aplikaci na Mac — Je to možné?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Rovnováha vs. objem – není to totéž</h2>

<p>Stojí za to oddělit dvě myšlenky, které se často zaměňují:</p>
<ul>
  <li><strong>Hlasitost</strong> – jak je aplikace celkově hlasitá. Toto je jedna úroveň aplikovaná na oba kanály.</li>
  <li><strong>Váha (pánev)</strong> — jak je zvuk distribuován mezi levý a pravý reproduktor. Rovnováha „úplná levá“ posílá vše do levého kanálu a umlčuje pravý.</li>
</ul>

<p>Lidé požadující „jinou rovnováhu na aplikaci“ obvykle chtějí jednu ze dvou věcí: přenést zvuk jedné aplikace do jednoho ucha (řekněme hovor do levého ucha, hudbu do pravého) nebo opravit sluchový rozdíl nebo špatný reproduktor na jedné straně – ale pouze pro určité aplikace. To jsou legitimní cíle. Problém je, kde žije kontrola.</p>

<h2>Proč to macOS neumí nativně</h2>

<p>macOS má přesně jeden ovladač vyvážení a žije na úrovni výstupního zařízení. Najdete to pod <strong>Nastavení systému → Zvuk → Výstup</strong>, kde a <em>Rovnováha</em> posuvník posouvá celý mix doleva nebo doprava. To, na co je posuvník nastaven, platí <em>všechno</em> směrované do tohoto zařízení – každá aplikace, každý systémový zvuk, vše najednou.</p>

<p>Ve standardním zásobníku zvuku macOS není žádné rozhraní API, které by říkalo „vykreslit zvuk této aplikace doleva, ta aplikace je doprava“. Aplikace předávají svůj zvuk do systému, který je již smíchaný, a systém použije jednu hlavní rovnováhu na cestě k reproduktorům. Vrstva, kde byste chtěli posouvat jednotlivé aplikace, tedy operační systém jednoduše nezobrazuje. Toto je skutečné omezení operačního systému, ne něco, co může nástroj na liště nabídek zdvořile obejít.</p>

<blockquote>Na rozdíl od jednotlivých aplikací <em>objem</em> – které macOS také nativně postrádá, ale které aplikace lze implementovat klepnutím na zvukový stream – pro každou aplikaci <em>rovnováhu</em> by vyžadovalo opakované posouvání streamu každé aplikace nezávisle a tento háček není dostupný pro aplikace v sandboxu.</blockquote>

<h2>Co SoundDial dělá – a upřímně, co nedělá</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> poskytuje ovládání pro jednotlivé aplikace macOS chybí: nezávislé <strong>objem</strong> pro každou spuštěnou aplikaci, pro každou aplikaci <strong>ztlumit</strong>, objem na aplikaci <strong>posílení</strong> nad 100 %, uložitelný objem <strong>profily</strong>, automatické spouštění a rychlé přepínání výstupu z lišty nabídek.</p>

<p>Abych byl s vámi přímo: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> ovládací prvky pro každou aplikaci <em>hlasitost a ztlumení</em>, nikoli stereo podle aplikace <em>rýžování</em>. Nepošle vám Safari do levého ucha a Spotify do pravého. Pokud vám někdo řekne, že mixážní pult na liště nabídek má na macOS skutečnou rovnováhu L/R pro jednotlivé aplikace, buďte skeptičtí – to není kontrola, kterou vám OS předává. To, co SoundDial skutečně řeší, je mnohem běžnější frustrace: jedna aplikace je příliš hlasitá nebo příliš tichá ve srovnání s jinou.</p>

<h2>Skutečná řešení pro rovnováhu na aplikaci</h2>

<p>Pokud skutečně potřebujete zvuk rozdělený vedle sebe, zde jsou poctivé možnosti, zhruba od nejjednodušších po nejzaujatější:</p>

<ul>
  <li><strong>Globální rovnováha (všechny aplikace):</strong> Použijte Nastavení systému → Zvuk → Výstup → Vyvážení. Toto je vaše jediná vestavěná možnost a ovlivní každou aplikaci. Užitečné pro korekci místnosti nebo asymetrie sluchu, neužitečné pro izolaci jedné aplikace.</li>
  <li><strong>Samostatná výstupní zařízení:</strong> To je nejblíže skutečnému zůstatku na aplikaci. Nasměrujte aplikaci A do jednoho výstupního zařízení a aplikaci B do jiného a poté nastavte vyvážení každého zařízení nezávisle. macOS vám umožňuje vybrat výstupní zařízení v některých aplikacích (a prohlížeče/komunikační aplikace často vystavují svůj vlastní výběr výstupu). Pokud aplikace A ukazuje na zařízení posunuté doleva a aplikace B na zařízení posunuté doprava, efektivně získáte rovnováhu mezi aplikacemi – pokud vám obě aplikace umožní vybrat si jejich výstup.</li>
  <li><strong>Nástroje pro virtuální směrování zvuku:</strong> Nástroje, které vytvářejí virtuální zařízení a interní směšovač, mohou v některých konfiguracích směrovat konkrétní aplikace do konkrétních kanálů. To je výkonné, ale nešikovné, přidává komponentu ve stylu ovladače a pro většinu lidí je to přehnané. Je to doména streamerů a zvukových inženýrů, ne náhodná oprava „volání jedním uchem“.</li>
  <li><strong>Rozdělení hardwaru:</strong> Pokud jde o fyzické reproduktory nebo rozdíl ve sluchu, hardwarový mixážní pult nebo audio rozhraní s ovládáním jednotlivých kanálů zcela obchází softwarový problém.</li>
</ul>

<h2>Když je objem na aplikaci skutečně to, co jste potřebovali</h2>

<p>Mnoho požadavků typu „chci jiný zůstatek na aplikaci“ je ve skutečnosti „jedna aplikace přehlušuje druhou“. Pokud je cílem videohovor, který můžete slyšet přes hudbu, nebo hra, která je vedle chatu Discord příliš hlasitá, vyvážení není tím nástrojem – nezávislá hlasitost ano. To je přesně to, co mix pro jednotlivé aplikace zvládá čistě, bez virtuálních ovladačů nebo směrovací gymnastiky.</p>

<p>Takže upřímné shrnutí: skutečné vyvážení levé a pravé strany v jednotlivých aplikacích není funkcí macOS a žádná aplikace pro mixování to přesvědčivě nepředstírá. Vaše skutečné trasy jsou posuvník globálního vyvážení nebo směrování výstupu podle aplikace do zařízení s odděleným posunem. Ale pokud je základní bolestí relativní hlasitost, je to vyřešený problém.</p>

<p>Chcete nezávislou hlasitost, ztlumení a zesílení pro každou aplikaci na vašem Mac, s uložitelnými profily a bez ovladačů? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Získejte SoundDial na Mac App Store</a> — 14,99 EUR, jednorázově, v sandboxu.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Proč jsou některé aplikace na Mac mnohem hlasitější než jiné? (A jak je vyrovnat)",
    description: "Aplikace znějí na Mac naprosto odlišně, protože každá z nich je upravena na svůj vlastní cíl hlasitosti a macOS nemá vestavěné ovládání hlasitosti pro jednotlivé aplikace. Zde je důvod, proč k tomu dochází a jak vyrovnat své aplikace.",
    date: "2026-07-23",
    readTime: "6 min čtení",
    content: `<p>Aplikace znějí ve vašem Mac naprosto odlišně, protože každá z nich je vytvořena, zpracována a normalizována na svůj vlastní cíl hlasitosti a macOS nemá vestavěné ovládání hlasitosti pro jednotlivé aplikace, které by je sladilo. Spotify, YouTube, Zoom a systémová upozornění procházejí stejným hlavním posuvníkem, takže s ním neustále jezdíte nahoru a dolů.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Proč jsou některé aplikace na Mac mnohem hlasitější než jiné? (A jak je vyrovnat)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Není to váš Mac – je to samotný zvuk</h2>

<p>Jediný systémový posuvník hlasitosti na macOS ovládá konečnou výstupní úroveň pro všechno. Nedotýká se relativní hlasitosti zapečené do audio streamu každé aplikace. Tato základní linie je nastavena dlouho předtím, než se zvuk dostane do vašich reproduktorů, a značně se liší zdroj od zdroje.</p>

<p>Tyto rozdíly řídí tři věci:</p>

<ul>
<li><strong>Mistrovské úrovně.</strong> Úchvatná popová skladba je zvládnuta mnohem lépe než tichá akustická nahrávka nebo mluvený podcast. Film smíchaný pro kino záměrně udržuje šepot tichý a exploze hlasité – to je dynamický rozsah a znamená to, že průměrná úroveň je nízká.</li>
<li><strong>Cíle normalizace hlasitosti.</strong> Streamovací platformy upravují přehrávání na cíl měřený v LUFS (jednotky hlasitosti vzhledem k plnému rozsahu). Spotify míří kolem -14 LUFS, YouTube zhruba -14 LUFS, Apple Music kolem -16 LUFS. Aplikace nebo hra pro videokonference plně využívá svůj vlastní zisk. Dvě aplikace „normalizované“ na různé cíle se nikdy navzájem neshodují.</li>
<li><strong>Žádné vyrovnávání napříč aplikacemi.</strong> Každá aplikace normalizuje pouze svůj vlastní obsah. Nic nekoordinuje Spotify proti Zoom proti hře prohlížeče. macOS je pouze sečte a odešle mix.</li>
</ul>

<h2>Proč na LUFS záleží (srozumitelně)</h2>

<p>Špičková úroveň vám říká jeden nejhlasitější okamžik signálu. LUFS vám řekne, jak hlasité je něco ve skutečnosti <em>cítí</em> v průběhu času vážené podle toho, jak funguje lidský sluch. Tento rozdíl je důvodem, proč mohou podcast a taneční skladba dosáhnout stejného vrcholu, a přitom cítit oddělené světy v hlasitosti – skladba tráví mnohem více času u svého stropu.</p>

<blockquote>Tišší cíl LUFS znamená více prostoru pro hlavu a větší dynamický rozsah. Hlasitější cíl znamená konzistentnější, „vždy plnou“ zvukovou stěnu. Ani jedno není špatné – ale když aplikace cílí na různá čísla, cítíte to jako jedna aplikace křičí a druhá mumlá.</blockquote>

<p>To je upřímná základní příčina. Není to chyba, kterou můžete opravit. Je to fyzika toho, jak je zvuk produkován a dodáván, znásobený v tuctu aplikací, které nikdy nebyly navrženy tak, aby spolu souhlasily.</p>

<h2>Mezera macOS nechává otevřenou</h2>

<p>Zde je část, která lidi skutečně frustruje: Windows již roky dodává mixážní pult pro jednotlivé aplikace. Přímo z hlavního panelu můžete jednu aplikaci stáhnout dolů a jinou nahoru. macOS to nikdy nezahrnovalo. Předvolby zvuku vám poskytují pouze hlavní posuvník a výběr výstupního zařízení.</p>

<p>Takže na Mac byly vaše možnosti tradičně omezené:</p>

<ul>
<li>Upravte u každé aplikace vlastní vnitřní posuvník hlasitosti – pokud jej vůbec má. Mnoho aplikací (Zoom, většina her, systémové zvonkohry) neodhaluje použitelnou aplikaci.</li>
<li>Pokaždé, když přepnete kontext, posuňte hlavní posuvník ručně.</li>
<li>Zcela ztlumte jednu věc, což je tupá oprava, která ve skutečnosti nic nevyváží.</li>
</ul>

<p>Žádný z nich si nepamatuje vaše preference. Ukončete a znovu spusťte aplikaci a jste zpět na začátku.</p>

<h2>Praktická oprava: zapamatovaný objem na aplikaci</h2>

<p>Protože nemůžete přinutit každou službu, aby přepracovala svůj katalog, funkčním řešením je přidat chybějící vrstvu macOS, která se nikdy nedodala: nezávislý, zapamatovaný objem pro každou aplikaci. To je přesně ono <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dělá. Žije na liště nabídek a každé spuštěné aplikaci dává vlastní posuvník, takže hlasitý můžete stáhnout dolů a tichý nahoru, dokud nebudou sedět na úrovni, která vám bude vyhovovat.</p>

<p>Vyrovnání aplikací v praxi:</p>

<ul>
<li>Otevřít <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> z panelu nabídek a uvidíte každou aktivní aplikaci s vlastním ovládáním.</li>
<li>Ztlumte cokoli, co bouří – obvykle hudební nebo video aplikace zvládnuté za tepla – na něco kolem 60–70 %.</li>
<li>Ponechte svou tichou referenční aplikaci (často aplikaci pro volání nebo podcast) na 100 % a použijte jednotlivé aplikace <strong>posílení</strong> aby to přesáhlo 100 %, pokud je stále příliš měkké.</li>
<li>Nastavte úrovně jednou. SoundDial si pamatuje hlasitost každé aplikace, takže zůstatek zůstane zachován i při příštím otevření.</li>
</ul>

<p>Většinu práce s levelováním zde dělají dvě funkce. <strong>Posílit</strong> záleží, protože spousta aplikací je prostě příliš tichých i na maximum – posuvník pro jednotlivé aplikace, který pouze snižuje hlasitost, je nemůže zachránit, ale ten, který dokáže zesílit přes 100 %, ano. A <strong>objemové profily</strong> vám umožní uložit celou sadu úrovní – řekněme profil „hudba zaostřit, hlasité hovory“ pro práci oproti jinému mixu pro hraní her – a okamžitě mezi nimi přepínat namísto přestavování aplikace po aplikaci.</p>

<h2>Kde to pomáhá nejvíce</h2>

<p>Nejběžnější úlevou je skok mezi hudbou a schůzkou: streamování hudby nahlas, pak aplikace pro volání, která ve srovnání zní slabě. Nastavte aplikaci pro volání výše (nebo zesílte), stáhněte hudbu dolů a překvapivý výkyv hlasitosti zmizí. Totéž platí pro tichou hru v prohlížeči proti hlasitému přehrávači videa nebo systémové výstrahy, které přeskakují všechno.</p>

<p>Aby bylo jasno o limitech: SoundDial vyvažuje výstup vašich aplikací. Neupraví špatně produkovanou stopu a nedokáže vymyslet detaily ve zvuku, který byl smíchán s velmi širokým dynamickým rozsahem. Poskytuje vám jeden ovládací prvek macOS, který jste vynechali – stabilní úrovně pro jednotlivé aplikace, které zůstávají na místě.</p>

<p>Už vás nebaví jezdit na hlavním jezdci pokaždé, když přepínáte aplikace? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednorázová cena 14,99 EUR na Mac App Store – v sandboxu, bez ovladačů, bez DMG – a konečně dává každé aplikaci vlastní zapamatovaný objem.</p>`,
  },
  "mac-audio-for-gaming": {
    slug: "mac-audio-for-gaming",
    title: "Zvuk na Macu pro hraní her: oddělte hru, hlasový chat a hudbu",
    description: "Hraní her na Macu znamená žonglovat se zvukem hry, hlasovým chatem v Discordu nebo FaceTimu a hudbou na pozadí – a to vše přes jeden jediný posuvník hlasitosti. Ukážeme vám, jak je rozdělit do nezávislých kanálů.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>Jste uprostřed zápasu. Zvuk hry přehlušuje spoluhráče na Discordu. Ztlumíte systémovou hlasitost – teď slyšíte pokyny týmu, ale zvuky hry jsou příliš tiché na to, abyste stihli zareagovat na kroky nepřítele. Spotify přitom pořád hraje na plné pecky pod tím vším. macOS vám dává jeden posuvník na všechno, a hraní her na Macu tak znamená neustálé přejíždění po té jedné liště.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — separate game, voice chat, and music volume on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Proč je herní zvuk na Macu tak nepřehledný</h2>

<p>Hry interně mixují několik zvukových vrstev – dialogy, efekty, atmosféru, hudbu – a vysílají je jako jeden proud. Aplikace pro hlasový chat jako Discord, FaceTime nebo TeamSpeak přidávají druhý proud. Hudební přehrávač přidává třetí. macOS je všechny považuje za rovnocenné a nechává je přitékat do jednoho hlavního výstupu, aniž by šlo některý z nich upřednostnit nebo je vzájemně vyvážit.</p>

<p>Většina her má vlastní posuvníky hlasitosti, ale jejich úprava znamená přepnout se pomocí alt-tabu z celoobrazovkové hry ven, což vás vyruší ze hry. A i když ztlumíte hudbu ve hře, stejně nemůžete zvýšit hlasitost Discordu vůči herním efektům, aniž byste změnili hlavní hlasitost a ovlivnili tak úplně všechno ostatní.</p>

<h2>Zvuk podle jednotlivých aplikací při hraní</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dává každé aplikaci vlastní nezávislý posuvník hlasitosti přímo v panelu nabídek, takže si můžete namíchat herní zvuk bez zásahu do nastavení hry nebo systémové hlasitosti.</p>

<h3>Typický herní profil</h3>
<ul>
  <li><strong>Hra:</strong> 70 % – dost hlasitá na prostorové zvukové signály, aniž by vás přehlušila</li>
  <li><strong>Discord / FaceTime:</strong> 100 % – pokyny spoluhráčů vždy slyšitelné</li>
  <li><strong>Spotify / Apple Music:</strong> 25 % – hudba na pozadí, která nekonkuruje ostatnímu zvuku</li>
  <li><strong>Prohlížeč:</strong> ztlumeno – žádný zvuk z neočekávané karty</li>
  <li><strong>Slack / Messages:</strong> ztlumeno – nulové vyrušení notifikacemi uprostřed hry</li>
</ul>

<p>Uložte si to jako profil „Hraní". Jedno kliknutí před spuštěním hry a každá aplikace naskočí na svou herní úroveň. Až skončíte, přepněte zpět na běžný profil – žádné ruční přenastavování posuvníků.</p>

<h3>Automatické ztišení pro prioritu hlasu</h3>

<p>Funkce automatického ztišení (auto-ducking) v SoundDialu dokáže automaticky snížit hlasitost hry a hudby vždy, když je aktivní Discord nebo FaceTime. Hlasy spoluhráčů se tak vždy jasně prosadí a ve chvílích ticha se vše zase vrátí na svou úroveň. Jde o stejné chování, jaké si profesionální vysílající nastavují pomocí složitých routovacích nástrojů, tady to ale zvládne jediný přepínač.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-audio-for-djing": {
    slug: "mac-audio-for-djing",
    title: "Zvuk na Macu pro DJing: ovládejte monitoring a výstup nezávisle na sobě",
    description: "DJing na Macu znamená poslouchat si další skladbu ve sluchátkách, zatímco publikum slyší aktuální mix – jenže macOS posílá vše do jednoho výstupu. Ukážeme vám, jak oddělit svůj monitorovací kanál.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>DJujete z Macu – v Traktoru, Seratu, rekordboxu, nebo dokonce v Abletonu při živém setu. Potřebujete si nasčítat další skladbu ve sluchátkách, zatímco publikum přes reproduktory slyší aktuální mix. Jenže máte otevřený prohlížeč se setlistem, možná běží Spotify s referenčními skladbami a Messages neustále cinká přes vaše monitory. macOS nezná koncept „tahle aplikace jde sem, tamta tam" na úrovni hlasitosti.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — DJ audio control on Mac with independent app volumes" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Problém DJského zvuku na macOS</h2>

<p>Profesionální DJský software řeší nasčítání interně – rozděluje svůj vlastní výstup mezi hlavní mix a sluchátkový monitoring. To funguje bez problémů. Potíž je se vším ostatním, co na Macu běží. Systémová upozornění, karty prohlížeče, komunikační aplikace i přehrávače referenčních skladeb – to vše se sbíhá do stejného hlavního výstupu. Pípnutí ze Slacku přes ozvučení sálu uprostřed setu opravdu nepůsobí profesionálně.</p>

<p>Můžete zapnout režim Nerušit, ten ale neztiší aplikace, které už běží – jen potlačí zobrazování bannerů. Automaticky přehrávaná karta prohlížeče nebo vyzvánění FaceTimu se stejně ozve z reproduktorů na té hlasitosti, na jakou je nastavený systém.</p>

<h2>Ovládání zvuku mimo DJský software</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní nastavit nezávislou hlasitost pro každou aplikaci na Macu. Při DJském setu je klíčové ztišit nebo úplně umlčet vše, co není váš DJský software.</p>

<h3>Profil pro DJský set</h3>
<ul>
  <li><strong>Traktor / Serato / rekordbox:</strong> 100 % – plný výstup do vašeho zvukového rozhraní</li>
  <li><strong>Prohlížeč:</strong> ztlumeno – žádný nečekaný zvuk z karet</li>
  <li><strong>Spotify:</strong> ztlumeno nebo 10 % – reference jen po rychlém zrušení ztlumení</li>
  <li><strong>Slack / Messages / Mail:</strong> ztlumeno – nulové zvuky upozornění</li>
  <li><strong>Kalendář:</strong> ztlumeno – žádné pípání připomínek</li>
</ul>

<p>Uložte si to jako profil „DJ set". Než začnete, aplikujte ho jedním kliknutím. Vaše DJská aplikace poběží na plnou hlasitost a nic jiného vás nemůže vyrušit. Po skončení setu přepněte zpět na běžný profil a upozornění se zase obnoví.</p>

<h3>Rychlá kontrola referenčních skladeb</h3>

<p>Potřebujete si uprostřed setu rychle ověřit referenční skladbu na Spotify? Místo zrušení ztlumení celého systému stačí zvýšit samostatný posuvník Spotify, poslechnout si ji ve sluchátkách a pak ho zase stáhnout na nulu. Publikum ji vůbec neuslyší a vaše DJská aplikace zůstane nedotčená.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "control-notification-sounds-mac": {
    slug: "control-notification-sounds-mac",
    title: "Jak ovládat hlasitost zvuků upozornění na Macu",
    description: "Zvuky upozornění na Macu hrají na stejné hlasitosti jako všechno ostatní – nebo jsou úplně vypnuté. Žádná střední cesta v systému není. Ukážeme vám, jak zkrotit hlasitost upozornění, aniž byste museli ztlumit hudbu.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>Spustí se připomínka z Kalendáře a zvuk upozornění zahřmí na stejné hlasitosti jako hudba, kterou jste si právě užívali. Leknete se. Ztlumíte systémovou hlasitost – a teď je hudba zase moc tichá. macOS bere zvuky upozornění a mediální zvuk jako jednu hlasitost a jediný vestavěný únik je zapnutí režimu Nerušit, který ale umlčí úplně všechno, včetně upozornění, která opravdu potřebujete slyšet.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — control notification sound volume independently on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Proč je hlasitost upozornění tak těžké ovládat</h2>

<p>macOS má v Nastavení systému volbu „Přehrávat zvukové efekty přes" a posuvník hlasitosti upozornění, ten ale ovládá všechny systémové zvuky upozornění dohromady. Nejde nastavit „upozornění Kalendáře na 30 %, pípnutí Messages na 50 %, Mail bez zvuku". Každá aplikace generující upozornění sdílí stejnou systémovou úroveň zvuku.</p>

<p>Hlubší problém je v tom, že řada aplikací generuje vlastní zvuky upozornění mimo systémový rámec upozornění. Slack přehrává svůj vlastní zvuk. Discord má svoje vlastní pípnutí. Karty Chromu mohou vydávat zvuky upozornění. Ty posuvník hlasitosti upozornění vůbec neovlivňuje – hrají na té hlasitosti, na jakou je nastavená daná aplikace, a tu řídí jen hlavní posuvník.</p>

<h2>Ovládání zdrojů upozornění podle jednotlivých aplikací</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> to řeší tím, že dá každé aplikaci vlastní posuvník hlasitosti. Protože zvuky upozornění pocházejí z konkrétních aplikací, snížení hlasitosti dané aplikace sníží i její upozornění.</p>

<h3>Praktická nastavení</h3>
<ul>
  <li><strong>Slack:</strong> 15 % – jemné pípnutí, ne leknutí</li>
  <li><strong>Messages:</strong> 20 % – slyšitelné, ale nenápadné</li>
  <li><strong>Mail:</strong> ztlumeno – zprávy zkontrolujete, až budete chtít vy</li>
  <li><strong>Kalendář:</strong> 25 % – akorát tolik, abyste si toho všimli</li>
  <li><strong>Discord:</strong> 10 % – povědomí na pozadí bez zahřmění</li>
  <li><strong>Hudba / prohlížeč:</strong> 70–100 % – plný požitek bez rušení</li>
</ul>

<p>Výsledek: vaše média hrají na hlasitosti, jakou chcete, a zdroje upozornění jsou nastavené tak, aby vás informovaly, ale nelekly. Není potřeba žádný režim Nerušit – slyšíte úplně všechno, jen na hlasitostech, které dávají smysl.</p>

<h3>Kombinujte s profily</h3>

<p>Uložte si profil „Soustředění" s většinou aplikací pro upozornění ztlumených a profil „Běžný" s jemnými úrovněmi hlasitosti. Přepínejte mezi nimi jedním kliknutím podle toho, jestli potřebujete hluboké soustředění, nebo jen pasivní povědomí o dění. Už žádné rozhodování mezi „slyšet úplně všechno na plnou hlasitost" a „neslyšet vůbec nic".</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-volume-too-quiet-at-max": {
    slug: "mac-volume-too-quiet-at-max",
    title: "Hlasitost na Macu je tichá i na maximu – jak ji zesílit nad 100 %",
    description: "Některé aplikace jsou frustrujícně tiché, i když máte hlasitost Macu na maximu. Problém nejsou vaše reproduktory – macOS prostě neumí zesílit jednotlivé aplikace nad jejich výstupní úroveň.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>Hlasitost Macu je na 100 %. Konkrétní aplikace, kterou se snažíte slyšet – tichý volající na Zoomu, tichý podcast, video v prohlížeči – je pořád příliš slabá. Vytočíte systémový posuvník na maximum a pořád to nestačí. Přitom každá jiná aplikace na Macu je teď bolestivě hlasitá. Problém nejsou vaše reproduktory ani sluch. Je v tom, že aplikace vysílá zvuk na nízké interní úrovni a macOS nemá způsob, jak jednu aplikaci zesílit nad její vlastní strop.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — boost Mac volume past 100% for quiet apps" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Proč maximální hlasitost pořád nestačí</h2>

<p>Systémový posuvník hlasitosti škáluje všechno proporcionálně. Pokud aplikace interně vysílá zvuk řekněme na 40 % plného rozsahu, pak i při 100% systémové hlasitosti slyšíte jen 40 % toho, co vaše reproduktory skutečně dokážou vyprodukovat. Běžně se to stává u:</p>
<ul>
  <li>Aplikací pro videohovory, kde má vzdálený účastník tichý mikrofon</li>
  <li>Podcastů a audioknih namasterovaných na konzervativní úrovni</li>
  <li>Starších webových videí s nízkou produkční kvalitou</li>
  <li>Nahrávek obrazovky a tutoriálů, kde mluvčí mluví potichu</li>
</ul>

<p>Hlavní posuvník nedokáže vytáhnout aplikaci nad její vlastní výstupní úroveň. Je to strop, ne zesilovač.</p>

<h2>Zesílení nad 100 % pro jednotlivé aplikace</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> přidává posuvníky hlasitosti pro jednotlivé aplikace, které jdou nad 100 %. Zesílení zesílí zvukový proud jedné aplikace nad její běžné maximum, aniž by se zvýšila systémová hlasitost nebo to ovlivnilo jinou aplikaci.</p>

<h3>Jak to použít</h3>
<ul>
  <li>Otevřete SoundDial z panelu nabídek – každá běžící aplikace se zobrazí s vlastním posuvníkem</li>
  <li>Najděte tichou aplikaci a přetáhněte její posuvník nad hranici 100 %</li>
  <li>Zesílení zvýrazní zvuk jen dané aplikace – vše ostatní zůstane na své aktuální úrovni</li>
  <li>Pokud jste měli systémovou hlasitost vytočenou na maximum, stáhněte ji zpět na příjemnou úroveň</li>
</ul>

<h3>Poznámka ke kvalitě</h3>

<p>Zesílení je skutečné zesílení, ne kouzlo. Mírné zesílení – které posune tichý podcast z neslyšitelného na příjemný – funguje čistě. Extrémní zesílení velmi tichého a šumícího zdrojového zvuku může zvýraznit šum nebo artefakty. V praxi je pro většinu situací „příliš potichu" ideální hodnota 120–150 %, což zní přirozeně a řeší problém bez zkreslení.</p>

<p>Klíčová výhoda oproti vytáčení systémové hlasitosti: hlasitější bude jen tichá aplikace. Vaše hudba, systémové zvuky a ostatní aplikace zůstanou přesně tam, kde byly. Už žádné pouštění všeho na plnou hlasitost jen kvůli tomu, abyste slyšeli jednu věc.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-audio-for-meditation-focus": {
    slug: "mac-audio-for-meditation-focus",
    title: "Zvuk na Macu pro meditaci a soustředění: umlčte vše kromě jedné aplikace",
    description: "Pouštět si na Macu meditační nebo ambientní aplikaci a nechat se přitom neustále vyrušovat upozorněními a dalším zvukem ničí celý smysl. Ukážeme vám, jak izolovat svůj klidný zvuk a umlčet vše ostatní.",
    date: "2026-09-06",
    readTime: "4 min čtení",
    content: `
<p>Otevřete si na Macu meditační aplikaci nebo generátor ambientních zvuků – zvuky deště, binaurální rytmy, vedenou meditaci. Usadíte se. Pak zapípá Slack. Zacinká Mail. Zapomenutá karta prohlížeče spustí video. Celý smysl byl vytvořit klidné zvukové prostředí, a macOS ho právě rozbil, protože všechny aplikace sdílejí stejnou hlasitost a systém neumí říct „ať zvuk vydává jen tahle jedna aplikace".</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — isolate meditation audio and silence everything else on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Problém zvuku při soustředění</h2>

<p>Režim Nerušit potlačí bannery upozornění, ale neztiší aplikace. Slack pořád přehrává své zvuky. Karty prohlížeče se pořád přehrávají automaticky. Kalendář pořád cinká. Jedinou vestavěnou možností je ztlumit vše klávesou pro ztlumení systému – ta ale umlčí i vaši meditační aplikaci. macOS nezná funkci „ztlumit vše kromě téhle jedné aplikace".</p>

<h2>Izolace zvuku jedné aplikace</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní jednotlivě ztlumit každou aplikaci, zatímco vámi vybraná aplikace zůstane na plné hlasitosti. Nastavení zabere pár vteřin.</p>

<h3>Profil pro soustředění a meditaci</h3>
<ul>
  <li><strong>Meditační aplikace (Calm, Headspace, Endel, karta prohlížeče s ambientním zvukem):</strong> 100 %</li>
  <li><strong>Vše ostatní:</strong> ztlumeno</li>
</ul>

<p>Uložte si to jako profil „Soustředění". Jedno kliknutí před vaší relací a hraje jen váš klidný zvuk. Až skončíte, přepněte zpět na běžný profil a vše se vrátí na své obvyklé úrovně.</p>

<h3>Studium a hluboká práce</h3>

<p>Stejný přístup funguje pro jakoukoli soustředěnou pracovní relaci. Nechte lo-fi hudbu nebo bílý šum na příjemné úrovni, ztlumte Slack a e-mail a nechte ambientní vrstvu naplnit vaše sluchátka bez konkurence. Nebojujete s rušivými vlivy – ve vašem zvukovém prostředí prostě neexistují.</p>

<h3>Postupný návrat</h3>

<p>Když vaše relace skončí, nemusíte ručně rušit ztlumení šesti aplikací. Přepněte na profil „Běžný" nebo „Práce" a hlasitost každé aplikace naskočí zpět na úroveň před relací. Žádná zapomenutá ztlumení, žádná hromada zmeškaných upozornění kvůli tomu, že jste zapomněli něco zase zapnout.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-audio-for-video-editing": {
    slug: "mac-audio-for-video-editing",
    title: "Zvuk na Macu pro střih videa: Premiere, DaVinci, náhled časové osy",
    description: "Střih videa na Macu znamená poslouchat zvuk časové osy, zatímco referenční klipy, komunikační aplikace a systémové zvuky soupeří o stejnou hlasitost. Ukážeme vám, jak izolovat zvuk pro střih.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>Střiháte v DaVinci Resolve, Premiere Pro nebo Final Cutu. Posouváte se po časové ose a potřebujete přesně slyšet úrovně dialogů. Jenže Slack pořád pípá, karta prohlížeče s referenčním záběrem hraje a na pozadí běží Apple Music. Nemůžete posoudit zvuk svého střihu, když se do mixu nepředvídatelně mísí zvuk ze tří dalších aplikací.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — video editing audio control on Mac with per-app volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Proč střihači potřebují izolovaný zvuk</h2>

<p>Mixování zvuku ve video editoru vyžaduje přesný monitoring. Pokud zvuk upozornění ze Slacku hraje na stejné úrovni jako dialog na vaší časové ose, nepoznáte, jestli je ten dialog skutečně namixovaný správně. Pokud se do vašeho monitoringu vloudí hudba na pozadí ze Spotify, uši se přizpůsobí a nakonec nastavíte úrovně špatně. Profesionální střihači pracují v akusticky upravených místnostech s řízeným monitorovacím řetězcem – ale i na úrovni softwaru vám macOS nedává žádný způsob, jak oddělit zvuk vašeho střihového programu od všeho ostatního.</p>

<p>Řešení, které používá většina střihačů: před střihem vypnout úplně všechno ostatní. Zavřít Slack, pozastavit Music, zavřít karty prohlížeče. Funguje to, ale znamená to, že si nemůžete pustit tutoriál na YouTube, nechat otevřený chat s klientem nebo poslouchat referenční skladbu, aniž byste si znečistili monitorovací prostředí.</p>

<h2>Ovládání podle aplikací při střihových relacích</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní nechat vše otevřené, ale ovládat, co slyšíte a na jaké úrovni.</p>

<h3>Profil pro střih</h3>
<ul>
  <li><strong>DaVinci / Premiere / Final Cut:</strong> 100 % – přesný monitoring časové osy</li>
  <li><strong>Prohlížeč:</strong> ztlumeno (krátce zrušte ztlumení pro kontrolu referenčního klipu, pak znovu ztlumte)</li>
  <li><strong>Slack / Messages:</strong> ztlumeno – žádné zvuky v monitorovacím řetězci</li>
  <li><strong>Hudba:</strong> ztlumeno – žádný konkurenční zvuk</li>
  <li><strong>Mail / Kalendář:</strong> ztlumeno</li>
</ul>

<h3>Profil pro kontrolu</h3>
<ul>
  <li><strong>Střihový program:</strong> 80 % – příjemná úroveň pro kontrolu</li>
  <li><strong>Slack:</strong> 20 % – zachytíte zprávy během čekání na render</li>
  <li><strong>Prohlížeč:</strong> 50 % – referenční materiál je dostupný</li>
</ul>

<p>Přepínejte mezi profily podle toho, co váš pracovní postup vyžaduje. Během kritického mixování zvuku je umlčeno vše kromě vaší časové osy. Během renderu si zase zapněte upozornění, abyste byli dostupní. Dvě kliknutí, dvě naprosto odlišná monitorovací prostředí.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "per-app-volume-control-mac-2026": {
    slug: "per-app-volume-control-mac-2026",
    title: "Ovládání hlasitosti podle aplikací na Macu v roce 2026 – jaké máte možnosti?",
    description: "macOS ani v roce 2026 stále neobsahuje vestavěný mixér hlasitosti. Zde je přehled všech možností nezávislého ovládání hlasitosti aplikací – zdarma, placené i různá řešení.",
    date: "2026-09-06",
    readTime: "6 min čtení",
    content: `
<p>Píše se rok 2026. Windows má mixér hlasitosti podle aplikací už od Visty v roce 2007. macOS ho pořád nemá. Pokud chcete ztlumit Spotify, aniž byste ztlumili hovor na Zoomu, odpověď od Applu je pořád „nejde to". Jaké jsou tedy vaše skutečné možnosti v roce 2026?</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control options on Mac in 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Současná situace</h2>

<p>Tady je upřímný přehled každého přístupu, který je momentálně k dispozici, včetně skutečných kompromisů.</p>

<h3>Bezplatné možnosti</h3>
<ul>
  <li><strong>Background Music</strong> – open-source, nabízí základní posuvníky hlasitosti podle aplikací. Háček: udržuje ho komunita a historicky se po velkých aktualizacích macOS opakovaně rozbil. Žádné zesílení nad 100 %, žádné profily, žádné automatické ztišení. Pokud je pro vás jedinou podmínkou „zdarma" a nevadí vám řešit problémy po aktualizacích systému, stojí za vyzkoušení.</li>
  <li><strong>FineTune</strong> – zdarma, open-source, minimalistické ovládání hlasitosti v panelu nabídek. Méně funkcí, ale spolehlivé pro základní úpravy.</li>
  <li><strong>eqMac</strong> – bezplatný ekvalizér a systémové ovládání hlasitosti. Zaměřuje se spíš na ekvalizaci než na mixování podle aplikací, ale má i některé funkce pro jednotlivé aplikace.</li>
</ul>

<h3>Placené možnosti</h3>
<ul>
  <li><strong>SoundSource</strong> (Rogue Amoeba, cca 39 $) – profesionální nástroj. Hlasitost podle aplikací, ekvalizace podle aplikací, směrování výstupu, efekty. Instaluje komponentu pro zachytávání zvuku (mimo App Store). Přehnané, pokud chcete jen posuvníky hlasitosti, vynikající, pokud potřebujete pokročilé směrování zvuku.</li>
  <li><strong><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a></strong> (14,99 €, jednorázově) – hlasitost podle aplikací, ztlumení, zesílení nad 100 %, uložitelné profily, automatické ztišení. Mac App Store, sandboxovaný, žádné ovladače. Zlatá střední cesta mezi bezplatnými nástroji a SoundSource.</li>
  <li><strong>Audio Hijack</strong> (Rogue Amoeba, cca 72 $) – zachytává a směruje zvuk mezi aplikacemi. Výkonný pro nahrávání a složité směrování, ale je to profesionální audio nástroj, ne jednoduchý mixér hlasitosti.</li>
</ul>

<h3>Vestavěná řešení</h3>
<ul>
  <li>Některé aplikace mají vlastní posuvníky hlasitosti (Spotify, VLC, většina her). Musíte je ale upravovat uvnitř každé aplikace zvlášť, nic je nekoordinuje a řada aplikací ovládání hlasitosti vůbec nenabízí.</li>
  <li>Režim Nerušit ztlumí bannery upozornění, ale neovládá hlasitost aplikací.</li>
  <li>Systémový posuvník hlasitosti je buď/anebo.</li>
</ul>

<h2>Kterou možnost byste si měli vybrat?</h2>

<p>Buďte upřímní ohledně svých potřeb. Pokud chcete něco zdarma a nevadí vám občasné výpadky, zvolte Background Music. Pokud potřebujete profesionální směrování zvuku a ekvalizaci, zvolte SoundSource. Pokud chcete spolehlivý, jednoduchý mixér hlasitosti s profily a zesílením za rozumnou cenu – s bezpečností App Store a bez instalace ovladačů – ideální volbou je <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-audio-ducking-automatic": {
    slug: "mac-audio-ducking-automatic",
    title: "Automatické ztišení zvuku na Macu – snižte hudbu, když někdo mluví",
    description: "Když začne hovor nebo někdo promluví, vaše hudba by se měla automaticky ztišit. macOS to nativně neumí. Ukážeme vám, jak si na Macu nastavit automatické ztišení zvuku.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>Posloucháte hudbu na Macu. Spustí se hovor na Zoomu. Honem pozastavíte Spotify nebo ztlumíte hlasitost, abyste slyšeli schůzku. Hovor skončí. Hudbu zase pustíte nahoru. Tohle se stává pětkrát denně a pokaždé jde o ruční zásah, který vás vyruší. Automatické ztišení zvuku (ducking) – automatické snížení hlasitosti zvuku na pozadí, když hraje prioritní zdroj – je standardem ve vysílání a streamování. Na macOS nativně neexistuje.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — automatic audio ducking on Mac, lower music during calls" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Co automatické ztišení skutečně dělá</h2>

<p>Ztišení je jednoduché: když se aktivuje určený prioritní zvukový zdroj, všechny ostatní zdroje zvuku sníží svou hlasitost o nastavenou hodnotu. Když prioritní zdroj přestane hrát, vše se vrátí zpět na svou původní úroveň. Moderátoři to používají, aby jejich hlas byl vždy nad hudbou na pozadí. Streameři to používají, aby se herní zvuk ztlumil, když mluví.</p>

<p>Na macOS je nejbližší vestavěné chování nastavení usnadnění, které dokáže snížit zvuk na pozadí během hlášení VoiceOveru. To je ale určené výhradně pro VoiceOver – žádné univerzální ztišení pro hovory, hlasový chat nebo libovolnou aplikaci neexistuje.</p>

<h2>Nastavení automatického ztišení pomocí SoundDialu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> obsahuje automatické ztišení zvuku jako vestavěnou funkci. Určíte, která aplikace má ztišení spouštět – typicky komunikační aplikace – a vše ostatní se automaticky ztiší, jakmile daná aplikace vydává zvuk.</p>

<h3>Běžná nastavení ztišení</h3>
<ul>
  <li><strong>Zoom / Google Meet / FaceTime jako priorita:</strong> hudba, prohlížeč a ostatní aplikace se ztiší, když je aktivní hovor. Váš hlas na schůzce je vždy jasně slyšet bez ručních úprav hlasitosti.</li>
  <li><strong>Discord jako priorita:</strong> zvuk hry a hudba se ztiší, když mluví spoluhráči. Pokyny se nikdy neztratí pod výbuchy nebo hlasitým soundtrackem.</li>
  <li><strong>Nahrávání podcastu:</strong> vše se ztiší, jakmile je aktivní vstup vašeho DAW, což udržuje vaše monitorovací prostředí čisté.</li>
</ul>

<h3>Jak to vypadá v praxi</h3>

<p>Přechod je plynulý – zvuk na pozadí se stáhne, když hraje prioritní aplikace, a zase se vrátí nahoru, když přestane. Po první hodině si toho přestanete všímat, protože to dělá přesně to, co jste dřív dělali ručně, jen bez vyrušení. Už žádné sahání po posuvnících uprostřed konverzace.</p>

<p>V kombinaci s hlasitostí podle aplikací a profily ztišení doplňuje celý obrázek: vaše aplikace už začínají na správných úrovních a ztišení se stará o dynamické úpravy během celého dne.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "control-browser-tab-volume-mac": {
    slug: "control-browser-tab-volume-mac",
    title: "Lze na Macu ovládat hlasitost jednotlivých karet prohlížeče?",
    description: "Jedna karta prohlížeče hraje hlasitý zvuk, zatímco jiná má tiché video. Lze na macOS ovládat hlasitost podle jednotlivých karet? Ukážeme vám, co je skutečně možné a co ne.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>V jedné kartě vám hraje tutoriál na YouTube, v jiné tiché video z Loomu a třetí karta právě spustila automaticky reklamu. Chcete ztlumit kartu s YouTube, zesílit kartu s Loomem a umlčet reklamu – nezávisle na sobě. Lze na macOS ovládat hlasitost podle jednotlivých karet prohlížeče? Krátká a upřímná odpověď: nativně ne, a ani s většinou nástrojů. Můžete ale ovládat hlasitost celého prohlížeče, a to vyřeší většinu problémů.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — control browser audio volume on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Proč hlasitost podle jednotlivých karet neexistuje</h2>

<p>Prohlížeče smíchají zvuk ze všech karet do jednoho výstupního proudu, než ho předají operačnímu systému. Pro macOS je Chrome jedna aplikace produkující jeden zvukový proud. Safari je jedna aplikace. Firefox je jedna aplikace. Systém nemá žádný přehled o tom, která karta generuje jaký zvuk – tato informace žije uvnitř interního zvukového enginu prohlížeče a není zpřístupněná externím nástrojům.</p>

<p>Některé prohlížeče umožňují ztlumit jednotlivé karty (kliknutím na ikonu reproduktoru na kartě), ale je to binární zapnuto/vypnuto – posuvník hlasitosti pro jednotlivé karty neexistuje. Hlučnou kartu můžete ztlumit úplně, ale nemůžete ji stáhnout na 20 %, zatímco jinou necháte na 80 %.</p>

<h2>Co skutečně můžete ovládat</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ovládá hlasitost na úrovni aplikace. Protože každý prohlížeč je samostatná aplikace, získáte nezávislé ovládání nad:</p>

<h3>Pracovní postupy s více prohlížeči</h3>
<ul>
  <li><strong>Chrome:</strong> 100 % – vaše hlavní video nebo tutoriál</li>
  <li><strong>Safari:</strong> 40 % – referenční materiál na pozadí</li>
  <li><strong>Firefox:</strong> ztlumeno – testování nebo vývojářské nástroje, zvuk nepotřebujete</li>
</ul>

<p>Pokud používáte více prohlížečů (jako řada vývojářů a výzkumníků), každý prohlížeč dostane vlastní posuvník. To je skutečné ovládání podle „skupin karet", protože můžete přiřadit různý obsah různým prohlížečům a nezávisle je mixovat.</p>

<h3>Prohlížeč versus vše ostatní</h3>

<p>Běžnější scénář je jednoduše chtít mít zvuk prohlížeče na jiné úrovni než ostatní aplikace. Je hudba přes tutoriál na YouTube moc hlasitá? Stáhněte Spotify na 30 %, zatímco Chrome necháte na 100 %. Máte hovor na Zoomu, zatímco karta prohlížeče přehrává referenční materiál? Během hovoru prohlížeč úplně ztlumte pomocí ztlumení podle aplikace a pak ho zase odztlumte.</p>

<h3>Řešení pomocí ztlumení karty</h3>

<p>Pro skutečné ovládání podle jednotlivých karet v rámci jednoho prohlížeče je vestavěné ztlumení karty vaší jedinou možností. Zkombinujte ho s hlasitostí prohlížeče v SoundDialu: uvnitř prohlížeče ztlumte hlučnou kartu a pak pomocí SoundDialu nastavte celkovou hlasitost prohlížeče tam, kde ji chcete mít vůči ostatním aplikacím.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-audio-for-language-learning": {
    slug: "mac-audio-for-language-learning",
    title: "Zvuk na Macu pro výuku jazyků: oddělte Anki, podcast a video",
    description: "Učit se jazyk na Macu znamená žonglovat se zvukem kartiček, podcasty, video lekcemi a vyhledáváním ve slovníku – a to vše soupeří o stejnou hlasitost. Ukážeme vám, jak je vyvážit.",
    date: "2026-09-06",
    readTime: "4 min čtení",
    content: `
<p>Učíte se na Macu jazyk. Anki přehrává výslovnost k jazykovým kartičkám. Na pozadí běží podcast v cílovém jazyce kvůli ponoření do jazyka. V prohlížeči otevřete gramatickou lekci na YouTube. Teď hrají tři zvukové zdroje současně, každý na jiné přirozené hlasitosti, a macOS vám dává jeden posuvník na ovládání všech. Klipy s výslovností z Anki jsou příliš tiché na to, abyste je zachytili, podcast je moc hlasitý a video na YouTube je někde mezi tím.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — language learning audio setup on Mac with independent app volumes" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Zvukový chaos při studiu jazyků</h2>

<p>Výuka jazyků ze své podstaty zahrnuje více zvukových zdrojů. Aplikace s kartičkami přehrávají krátké klipy. Podcastové aplikace streamují nepřetržitý zvuk. Video lekce mixují mluvené slovo s hudbou a zvukovými efekty. Slovníkové aplikace vyslovují slova na vyžádání. Každý zdroj má svou vlastní interní úroveň hlasitosti a nikdy nejsou vzájemně kalibrované.</p>

<p>Obvyklým řešením je pozastavit vše kromě toho, co právě aktivně používáte. To ale ničí přístup „ponoření na pozadí", na který spoléhá řada studujících – tedy tiché přehrávání zvuku v cílovém jazyce při dalších studijních aktivitách.</p>

<h2>Vrstvený zvuk pro studium jazyků</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní nastavit každou aplikaci na její ideální úroveň a nechat běžet více zdrojů v příjemném mixu.</p>

<h3>Studijní profil</h3>
<ul>
  <li><strong>Anki:</strong> 100 % (zesíleno, pokud jsou klipy tiché) – výslovnost musí být křišťálově čistá</li>
  <li><strong>Podcastová aplikace:</strong> 20–30 % – jemné ponoření na pozadí, nekonkuruje aktivnímu studiu</li>
  <li><strong>Prohlížeč (lekce na YouTube):</strong> 80 % – jasně slyšitelné při sledování, snadno ztlumitelné při opakování kartiček</li>
  <li><strong>Slovníková aplikace:</strong> 90 % – výslovnost slov slyšitelná na vyžádání</li>
  <li><strong>Slack / Messages:</strong> ztlumeno – čas na studium je čas na studium</li>
</ul>

<h3>Režim ponoření</h3>
<ul>
  <li><strong>Podcast / rozhlasový stream:</strong> 60 % – příjemná úroveň pro poslech</li>
  <li><strong>Vše ostatní:</strong> ztlumeno nebo velmi tiché</li>
</ul>

<p>Přepínejte mezi profily, jak přecházíte od aktivního studia k pasivnímu ponoření. Vaše zvukové prostředí se přizpůsobí vašemu režimu učení bez nutnosti pokaždé ručně upravovat posuvníky.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-volume-profiles-work-vs-home": {
    slug: "mac-volume-profiles-work-vs-home",
    title: "Volume profily na Macu: přepínejte mezi zvukovým nastavením pro práci a domov",
    description: "Vaše ideální hlasitosti aplikací v práci se úplně liší od večerního nastavení doma. Ruční přenastavování pěti aplikací při každé změně kontextu je ztráta času. Tady je alternativa na jedno kliknutí.",
    date: "2026-09-06",
    readTime: "4 min čtení",
    content: `
<p>V 9 ráno potřebujete mít Zoom hlasitý, Slack na jemné pípání, hudbu tichou a prohlížeč ztlumený. V 6 večer pracovní den končí – na Zoomu už nezáleží, Slack by měl mlčet, hudba jde na 80 % a prohlížeč pouští Netflix na plnou hlasitost. To je pět nebo šest aplikací, které musíte ručně přenastavit, dvakrát denně, každý den. Většina lidí se s tím neobtěžuje a polovinu času žije se špatně nastavenými hlasitostmi.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — switch between work and home volume profiles on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Daň za přepínání kontextu</h2>

<p>Vaše zvukové potřeby se úplně liší podle toho, co zrovna děláte, ale macOS nezná žádný koncept zvukových kontextů. Neexistuje žádné nastavení hlasitosti pro „pracovní režim" nebo přednastavení pro „večer". Kdykoli se váš kontext změní, buď ručně přenastavíte každou aplikaci, nebo se smíříte s tím, že některé aplikace budou moc hlasité a jiné zase moc tiché.</p>

<p>Není to problém, který nastane jen jednou denně. Řada lidí mění kontext několikrát: ranní soustředění, ranní porada, hluboká práce, oběd, odpolední spolupráce, večerní osobní čas. Každý z nich má svou ideální zvukovou konfiguraci a žádné dvě nejsou stejné.</p>

<h2>Volume profily pro každý kontext</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní uložit kompletní nastavení hlasitosti podle aplikací jako pojmenované profily a přepínat mezi nimi jedním kliknutím z panelu nabídek.</p>

<h3>Pracovní profil</h3>
<ul>
  <li><strong>Zoom / Meet:</strong> 100 %</li>
  <li><strong>Slack:</strong> 20 % – jemná upozornění</li>
  <li><strong>Hudba:</strong> 25 % – soustředění na pozadí</li>
  <li><strong>Prohlížeč:</strong> ztlumeno</li>
  <li><strong>Messages:</strong> ztlumeno</li>
</ul>

<h3>Domácí profil</h3>
<ul>
  <li><strong>Hudba / Spotify:</strong> 80 %</li>
  <li><strong>Prohlížeč (streamování):</strong> 100 %</li>
  <li><strong>Slack:</strong> ztlumeno</li>
  <li><strong>Zoom:</strong> ztlumeno</li>
  <li><strong>Messages:</strong> 50 %</li>
</ul>

<h3>Profil pro soustředění</h3>
<ul>
  <li><strong>Hudba:</strong> 40 % – lo-fi nebo ambient</li>
  <li><strong>Vše ostatní:</strong> ztlumeno</li>
</ul>

<p>Tři profily, tři naprosto odlišná zvuková prostředí. Každé přepnutí trvá jedno kliknutí a projeví se okamžitě. Zvuk vašeho Macu se přizpůsobí vám, ne naopak.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-audio-for-twitch-streaming": {
    slug: "mac-audio-for-twitch-streaming",
    title: "Zvuk na Macu pro streamování na Twitchi: hra, upozornění, hudba, mikrofon",
    description: "Streamování na Twitchi z Macu znamená spravovat zvuk hry, upozornění na stream, hudbu na pozadí a chat – to vše na správné úrovni pro vaše publikum. Ukážeme vám, jak je správně namixovat.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>Streamujete na Twitchi z Macu. OBS zachytává vaši hru, mikrofon a zvuk plochy. Jenže „zvuk plochy" je jeden smíchaný signál – vaše hra, zvuky upozornění, hudba na pozadí, Discord i pípnutí notifikací se sbíhají do stejného kanálu na hlasitosti, jakou zrovna určí macOS. Vaši diváci slyší nevyvážený zmatek, kde upozornění přehlušují hru, hudba utápí váš komentář a náhodné pípnutí ze Slacku přeruší stream.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Twitch streaming audio mix on Mac with per-app volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Proč je streamovaný zvuk na Macu problém</h2>

<p>OBS zachytává „zvuk plochy" jako jeden smíchaný proud – vše, co na Macu hraje, dohromady. Na Windows streameři používají vestavěný mixér hlasitosti, aby si aplikace předem vyvážili, než je OBS zachytí. Na macOS takový mixér neexistuje. Váš mix před zachycením je prostě to, co zrovna hraje na té hlasitosti, na jakou jsou aplikace ve výchozím nastavení.</p>

<p>Profesionální streameři na Macu obvykle používají nástroje pro virtuální směrování zvuku, aby si pro každý zdroj vytvořili samostatný zvukový kanál. To funguje, ale je to složité na nastavení, vyžaduje to zvukové ovladače a rozbije se to pokaždé, když aktualizace macOS změní zvukové frameworky.</p>

<h2>Předmixování pomocí hlasitosti podle aplikací</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní vyvážit každou aplikaci ještě předtím, než OBS zachytí kombinovaný výstup. Protože OBS zachytává finální mix, úprava hlasitosti jednotlivých aplikací v SoundDialu přímo ovlivňuje to, co slyší vaši diváci.</p>

<h3>Profil pro streamování</h3>
<ul>
  <li><strong>Hra:</strong> 60 % – zřetelná, ale nepřehlušující</li>
  <li><strong>Aplikace pro upozornění / Streamlabs:</strong> 40 % – slyšitelná pro zapojení diváků, ale ne hlasitější než hra</li>
  <li><strong>Hudba (Spotify / Apple Music):</strong> 15–20 % – atmosféra na pozadí, hlasitost bezpečná před nároky DMCA</li>
  <li><strong>Discord:</strong> 50 % – komunikace se spolustreamerem nebo moderátory</li>
  <li><strong>Prohlížeč:</strong> ztlumeno – žádný nečekaný zvuk z karty ve streamu</li>
  <li><strong>Slack / Mail / Messages:</strong> ztlumeno – osobní upozornění zůstanou mimo stream</li>
</ul>

<h3>Rychlé úpravy uprostřed streamu</h3>

<p>Divák napíše, že hra je moc hlasitá? Stáhněte jen posuvník hry z panelu nabídek, aniž byste museli přepnout pomocí alt-tabu ze své streamovací scény. Hudba moc tichá? Trochu ji přidejte. Rychlé přetažení posuvníku v SoundDialu je pro diváky neviditelné – žádné panely nastavení na obrazovce, žádné přerušení streamu.</p>

<h3>Automatické ztišení pro komentář</h3>

<p>Zapněte automatické ztišení, aby se zvuk hry a hudby ztišil, když mluvíte. Váš komentář se tak vždy jasně prosadí a zvuk se ve chvílích ticha zase vrátí nahoru – přesně to, čeho profesionální streameři dosahují pomocí drahých systémů pro směrování zvuku.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-audio-for-music-lessons": {
    slug: "mac-audio-for-music-lessons",
    title: "Zvuk na Macu pro online hudební lekce: oddělte DAW, videohovor a metronom",
    description: "Brát nebo vést hudební lekce online znamená slyšet studenta nebo učitele jasně, zatímco DAW, metronom a doprovodné skladby soupeří o stejný posuvník hlasitosti.",
    date: "2026-09-06",
    readTime: "5 min čtení",
    content: `
<p>Jste na online hudební lekci – učíte nebo se učíte. Váš student hraje přes Zoom a vy ho potřebujete slyšet jasně. V GarageBandu nebo Logicu hraje doprovodná skladba. Tiká aplikace s metronomem. Možná máte ve frontě na Spotify referenční nahrávku. To vše soupeří o jeden systémový posuvník hlasitosti. Zvýšíte hlasitost, abyste slyšeli studenta, a metronom je najednou ohlušující. Ručně ztlumíte metronom, a doprovodná skladba je teď moc tichá na to, abyste podle ní mohli hrát.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — online music lesson audio setup with independent app volumes on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Výzva online hudebních lekcí</h2>

<p>Hudební lekce vyžadují přesné vyvážení zvuku, jaké nevyžaduje žádný jiný případ použití. Potřebujete slyšet vzdáleného účastníka s dostatečnou věrností, abyste zachytili problémy s technikou a rytmem. Potřebujete slyšet metronom nebo klikací stopu, ale ne dominantně. Doprovodné skladby musí být pod výkonem, ne nad ním. A pokud jste učitel, možná potřebujete studentovi pustit referenční nahrávky – přepínat mezi aplikacemi a přitom udržet správné relativní hlasitosti.</p>

<p>Každý z těchto zdrojů má svou vlastní interní úroveň hlasitosti a žádný z nich se s ostatními nekoordinuje. macOS nemá žádné nástroje, jak je vyvážit.</p>

<h2>Sestavení zvukového mixu pro lekci</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní nastavit každou aplikaci na její ideální úroveň a vytvořit vyvážený mix pro lekci bez zásahu do interních nastavení aplikací.</p>

<h3>Profil pro výuku</h3>
<ul>
  <li><strong>Zoom / FaceTime:</strong> 100 % – zvuk studenta je priorita</li>
  <li><strong>Aplikace s metronomem:</strong> 35 % – slyšitelné klikání, které nepřehluší</li>
  <li><strong>GarageBand / Logic:</strong> 50 % – doprovodné skladby pod výkonem</li>
  <li><strong>Spotify:</strong> ztlumeno (krátce zrušte ztlumení pro přehrání reference)</li>
  <li><strong>Slack / Mail:</strong> ztlumeno – nulové vyrušení během lekce</li>
</ul>

<h3>Profil pro cvičení</h3>
<ul>
  <li><strong>Metronom:</strong> 50 % – jasný rytmický referenční bod</li>
  <li><strong>DAW:</strong> 80 % – doprovodné skladby na plné cvičební úrovni</li>
  <li><strong>Spotify:</strong> 70 % – referenční nahrávky dostupné</li>
  <li><strong>Vše ostatní:</strong> ztlumeno – soustředěné cvičení</li>
</ul>

<p>Přepněte z výuky na osobní cvičení jedním kliknutím. Vaše zvukové prostředí odpovídá aktivitě, aniž byste pokaždé ručně přenastavovali čtyři nebo pět aplikací.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "mac-audio-for-online-therapy": {
    slug: "mac-audio-for-online-therapy",
    title: "Zvuk na Macu pro online terapii: soukromí, srozumitelnost a nulové vyrušení",
    description: "Online terapeutické sezení vyžaduje naprosté zvukové soukromí a nulové vyrušení. Pípnutí ze Slacku nebo zvuk upozornění během sezení je víc než jen otravné – narušuje to celý proces.",
    date: "2026-09-06",
    readTime: "4 min čtení",
    content: `
<p>Jste na online terapeutickém sezení na Macu. Rozhovor vyžaduje vaši plnou pozornost a pocit soukromí. Pak zapípá Slack. Zacinká připomínka z Kalendáře. Zapomenutá karta prohlížeče spustí zvuk. Každé vyrušení vás vytrhne z okamžiku a úzkost z „přijde ještě něco dalšího?" dokáže narušit sezení ještě dřív, než zazní další zvuk.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — private therapy session audio setup with zero interruptions on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Proč režim Nerušit nestačí</h2>

<p>Režim Nerušit potlačí bannery upozornění a většinu zvuků upozornění, ale není úplný. Některé aplikace přehrávají vlastní zvuková upozornění mimo systémový rámec. Karta prohlížeče se může přehrát automaticky. Aplikace, o které jste zapomněli, že běží, může vydat nečekaný zvuk. A režim Nerušit nepomůže s hlavním problémem: chcete, aby vaše terapeutická aplikace (Zoom, Doxy nebo platforma založená na prohlížeči) byla dokonale zřetelná, zatímco vše ostatní bude zaručeně tiché.</p>

<h2>Uzavřené zvukové prostředí</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vám umožní ztlumit každou aplikaci kromě vaší terapeutické platformy a vytvořit tak zvukové prostředí, kde jsou vyrušení strukturálně nemožná – ne jen potlačená.</p>

<h3>Profil pro terapeutické sezení</h3>
<ul>
  <li><strong>Zoom / prohlížeč (terapeutická platforma):</strong> 100 % – jasná komunikace na plnou hlasitost</li>
  <li><strong>Každá jiná aplikace:</strong> ztlumeno – Slack, Mail, Messages, Kalendář, Music, další prohlížeče</li>
</ul>

<p>Aplikujte profil ještě před začátkem sezení. Po celou následující hodinu bude jediný zvuk, který váš Mac vydá, pocházet z vaší terapeutické aplikace. Žádné pípnutí ze Slacku se nedostane k reproduktorům. Žádné cinknutí z Kalendáře. Žádná zapomenutá karta prohlížeče. Ticho od ostatních aplikací je zaručené, ne jen doufané.</p>

<h3>Návrat k normálu po sezení</h3>

<p>Když sezení skončí, přepněte zpět na svůj běžný profil. Všechny vaše aplikace se vrátí na obvyklou hlasitost. Upozornění, která jste zmeškali, na vás pořád čekají ve svých aplikacích – nic se neztratilo, jen bylo ztišené po dobu, kdy jste potřebovali soukromí.</p>

<h3>Stejné nastavení funguje i pro</h3>
<ul>
  <li>Telemedicínské lékařské konzultace</li>
  <li>Důvěrné pracovní rozhovory</li>
  <li>Důležité telefonické pohovory</li>
  <li>Jakoukoli situaci, kde záleží na zvukovém soukromí a nulovém vyrušení</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
  "virtual-audio-driver-vs-sounddial-mac": {
    slug: "virtual-audio-driver-vs-sounddial-mac",
    title: "Virtuální zvukové ovladače vs SoundDial – který přístup je na Macu lepší?",
    description: "Virtuální zvukové ovladače i mixéry hlasitosti v panelu nabídek slibují ovládání zvuku podle aplikací na Macu. Fungují ale pod kapotou úplně jinak. Tady je upřímné srovnání obou přístupů.",
    date: "2026-09-06",
    readTime: "6 min čtení",
    content: `
<p>Chcete na svém Macu ovládat hlasitost podle jednotlivých aplikací. Našli jste dvě kategorie nástrojů: virtuální zvukové ovladače (jako Loopback, BlackHole nebo ovladačová komponenta v SoundSource) a lehké mixéry v panelu nabídek (jako SoundDial nebo Background Music). Oba slibují nezávislé ovládání hlasitosti aplikací. Dosahují toho ale zásadně odlišnými mechanismy a na kompromisech záleží.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial vs virtual audio drivers — comparing per-app audio approaches on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Jak fungují virtuální zvukové ovladače</h2>

<p>Virtuální zvukový ovladač vytvoří v macOS falešné zvukové zařízení. Aplikace posílají svůj zvuk na toto virtuální zařízení a software ovladače ho dál směruje – po cestě může proudy rozdělovat, mixovat nebo zpracovávat. Je to výkonné: můžete poslat různé aplikace na různé fyzické výstupy, aplikovat ekvalizaci podle jednotlivých aplikací, nahrávat jednotlivé zvukové proudy aplikací a stavět složité směrovací matice.</p>

<p>Kompromisy:</p>
<ul>
  <li><strong>Instalace na systémové úrovni:</strong> ovladače upravují váš zvukový subsystém. Vyžadují bezpečnostní schválení a někdy i restart.</li>
  <li><strong>Křehkost při aktualizacích macOS:</strong> Apple často mění zvukové frameworky. Ovladače se mohou po velké aktualizaci rozbít a vy zůstanete bez zvuku, dokud je vývojář neopraví.</li>
  <li><strong>Složitost:</strong> směrovací matice a virtuální zařízení jsou výkonné, ale matoucí, pokud jen chcete jednu aplikaci ztišit.</li>
  <li><strong>Nejsou na App Store:</strong> aplikace, které instalují ovladače, nelze kvůli omezením sandboxu distribuovat přes Mac App Store.</li>
</ul>

<h2>Jak funguje SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> jde jinou cestou. Používá API macOS k ovládání hlasitosti zvukového proudu každé aplikace, aniž by instaloval jakýkoli ovladač nebo virtuální zařízení. Ve vašem nastavení zvuku se neobjeví žádné falešné zvukové zařízení. Není potřeba žádná úprava systému.</p>

<p>Kompromisy:</p>
<ul>
  <li><strong>Žádné složité směrování:</strong> SoundDial ovládá hlasitost, ztlumení a zesílení podle aplikace – nesměruje aplikace na různé fyzické výstupy ani neaplikuje ekvalizaci podle aplikace.</li>
  <li><strong>Sandboxovaný z App Store:</strong> čistá instalace a odinstalace, žádné bezpečnostní výzvy kvůli ovladačům, žádný potřebný restart.</li>
  <li><strong>Odolnost vůči aktualizacím macOS:</strong> protože neupravuje zvukový subsystém, je méně pravděpodobné, že se po aktualizaci systému rozbije.</li>
  <li><strong>Jednoduchost:</strong> posuvník na aplikaci, profily, automatické ztišení. Žádný směrovací diagram k nastavování.</li>
</ul>

<h2>Který přístup si vybrat?</h2>

<p>Buďte upřímní ohledně toho, co skutečně potřebujete:</p>

<ul>
  <li><strong>Zvolte virtuální zvukový ovladač</strong>, pokud potřebujete směrovat konkrétní aplikace na konkrétní fyzické výstupy (např. hru do sluchátek a hudbu zároveň do reproduktorů), nahrávat jednotlivé zvukové proudy aplikací nebo aplikovat efekty a ekvalizaci podle aplikace. Nejlepší volbou jsou tady Loopback nebo SoundSource.</li>
  <li><strong>Zvolte <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a></strong>, pokud potřebujete hlasitost podle aplikace, ztlumení podle aplikace, zesílení nad 100 %, volume profily a automatické ztišení – bez složitosti a křehkosti instalace ovladače. To pokrývá to, co skutečně potřebuje většina lidí.</li>
</ul>

<p>Většina lidí, kteří hledají „ovládání hlasitosti podle aplikace", chce druhou možnost. Chtějí mít Spotify tišší během hovoru nebo Discord hlasitější než svou hru. To nevyžaduje virtuální zvukové zařízení – vyžaduje to posuvník hlasitosti pro každou aplikaci, což je přesně to, co SoundDial nabízí, aniž by se dotkl vašeho zvukového subsystému.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Stáhněte si SoundDial na Mac App Store</a> – jednorázový nákup za 14,99 €, bez předplatného, macOS 14.2+.</p>
`,
  },
};
