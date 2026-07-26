import type { ArticleSet } from "./index";

export const skArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Audio for Podcasting: Control What You Hear While Recording",
    description:
      "Recording a podcast while monitoring levels, hearing your guest, and managing notifications — all competing for one volume slider. Here's a better setup.",
    date: "2026-03-05",
    readTime: "5 min čítania",
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
    description:
      "MacBook Pro speakers are great — until they're blasting. If even moderate volume settings feel too loud, here's how to get more precise audio control.",
    date: "2026-03-08",
    readTime: "4 min čítania",
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
    description:
      "Slack huddles compete with your music and notifications for the same volume. Here's how to control huddle audio independently from everything else on Mac.",
    date: "2026-03-10",
    readTime: "5 min čítania",
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
    title: "How to Set a Default Volume for New Apps on Mac",
    description:
      "New apps launch at full volume by default. Here's how to make every new app start at a comfortable level — so nothing catches you off guard.",
    date: "2026-03-12",
    readTime: "3 min čítania",
    content: `
<p>You install a new app. It launches for the first time. It immediately plays audio — an intro sound, a notification, a tutorial video — at full system volume. You weren't expecting it. Your headphones are on. Your ears ring.</p>

<p>macOS has no concept of "default volume for new apps" because macOS doesn't have per-app volume. Every app gets the system volume, and the system volume is whatever you last set it to. New apps don't get special treatment — they just blast at whatever level everything else is at.</p>

<h2>Why this is a problem</h2>

<p>When you first launch an app, you have no idea how loud it's going to be. Some apps play sounds immediately (onboarding tutorials, notification sounds, welcome videos). If your system volume is at 80% because you were listening to music, that new app's sound is also at 80% — which might be way louder than comfortable for an unexpected audio source.</p>

<p>This is especially jarring with:</p>
<ul>
  <li>Communication apps (Slack, Teams) that play a startup sound</li>
  <li>Apps with video tutorials on first launch</li>
  <li>Games that blast title screen music immediately</li>
  <li>Browser-based apps that auto-play content</li>
</ul>

<h2>The fix: default volume for new apps</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> has a <strong>configurable default volume</strong> for new apps. In settings, you set what volume level newly detected apps should start at — for example, 70%. The first time any app launches and produces audio, SoundDial sets it to 70% instead of 100%.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial default volume setting — new apps start at a configured level instead of full blast" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>This means:</p>
<ul>
  <li>No surprise full-volume audio from newly installed apps</li>
  <li>Every new app starts at a comfortable, predictable level</li>
  <li>You can then adjust it up or down from the default as needed</li>
  <li>Once adjusted, the <strong>volume memory</strong> feature remembers that app's level for future launches</li>
</ul>

<p>It's a small feature, but it solves a genuine daily annoyance — the "new app surprise blast" that catches everyone off guard at least once.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac Startup Sound Too Loud? How to Disable or Lower It",
    description:
      "The Mac startup chime blasts at full volume every time you restart — especially awkward in meetings and quiet rooms. Here's how to silence or control it.",
    date: "2026-03-15",
    readTime: "4 min čítania",
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
    description:
      "Webex calls are barely audible on your Mac. Here's every fix — from Webex audio settings to boosting call volume past 100% with a per-app mixer.",
    date: "2026-03-18",
    readTime: "5 min čítania",
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
    title: "How to Listen to Two Things at Once on Mac Without Going Crazy",
    description:
      "Music and a podcast. A lecture and notes video. A call and background music. macOS makes you choose one volume for both — here's how to balance them.",
    date: "2026-03-20",
    readTime: "4 min čítania",
    content: `
<p>You want to listen to two audio sources at the same time. Music while on a call. A podcast while watching a tutorial. Background ambiance while studying. Two things, two different ideal volumes. macOS gives you one slider for both.</p>

<p>This is the fundamental audio limitation of macOS: every app shares one volume. You can't say "this one at 30%, that one at 80%." It's everything at one level, or nothing.</p>

<h2>When you actually need two audio sources</h2>

<p>This isn't an edge case. It's how most people use their computers:</p>

<ul>
  <li><strong>Music + video call</strong> — the most common. Background music during a Zoom meeting, but quiet enough to hear colleagues.</li>
  <li><strong>Lecture + reference material</strong> — a student watching a recorded lecture while occasionally watching a YouTube tutorial for context.</li>
  <li><strong>Podcast + ambient sounds</strong> — listening to a podcast while a white noise or rain sounds app plays softly.</li>
  <li><strong>Two browser tabs</strong> — a training video in one tab and a demo in another, at different volumes.</li>
  <li><strong>Game + voice chat</strong> — game audio for immersion, Discord for communication.</li>
</ul>

<p>In every case, one source is "primary" (louder, more important) and the other is "secondary" (quieter, supportive). The ideal ratio is different for each combination, and it changes throughout the day.</p>

<h2>The macOS limitation</h2>

<p>macOS has one volume slider. Press the volume key and everything changes equally. If you set the volume for comfortable podcast listening, the rain sounds app is also at that level — either too loud (distracting) or you haven't adjusted it in its own app (if it even has a volume control).</p>

<p>Some apps have internal volume sliders (Spotify, VLC), but most don't. And even when they do, switching between apps to adjust two separate volume controls is clunky and slow.</p>

<h2>The fix: per-app volume in one panel</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> puts every app in one menu bar panel with independent volume sliders. Both audio sources, side by side, each with their own level. Adjust one without touching the other.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing two audio sources at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Example setups:</p>

<p><strong>Music + Zoom call:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>Podcast + rain sounds:</strong></p>
<ul>
  <li>Podcast app: 70% | Rain app: 15%</li>
</ul>

<p><strong>Lecture + YouTube tutorial:</strong></p>
<ul>
  <li>Zoom (lecture): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>Each combination is a different balance. Save the ones you use regularly as <strong>volume profiles</strong> and switch with one click. Auto-ducking handles the music+call scenario automatically — when a call starts, music drops to your configured level without you touching anything.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "How to Watch Movies on Mac Without Waking Everyone Up",
    description:
      "Dialog is inaudible, then explosions shake the walls. Here's how to tame movie audio for late-night watching on Mac — without missing a word.",
    date: "2026-03-22",
    readTime: "5 min čítania",
    content: `
<p>It's 1 AM. You're watching a movie on your MacBook in bed. The characters are whispering — you turn the volume up. Then a car chase starts and suddenly your entire apartment can hear it. You lunge for the volume key. This cycle repeats for two hours.</p>

<p>The problem is <strong>dynamic range</strong> — the gap between a movie's quietest and loudest moments. In a theater with a powerful sound system, this range creates an immersive experience. On a MacBook at midnight, it creates a constant fight between "can't hear dialog" and "waking the neighbors."</p>

<h2>Why movies are louder than music or podcasts</h2>

<p>Music is typically mastered with compressed dynamic range — the difference between the quietest and loudest parts is relatively small (maybe 10-15 dB). Podcasts are even more compressed. Movies, especially action films, can have a dynamic range of <strong>30-40 dB</strong> — the quiet parts are whisper-quiet and the loud parts are designed to shake theater seats.</p>

<p>When you set your MacBook volume to hear the dialog, the action scenes are 100x louder in terms of sound pressure. There's no comfortable system volume that works for both.</p>

<h2>Fix 1: Use the streaming service's night mode</h2>

<p>Some streaming services have a dynamic range compression feature specifically for this:</p>
<ul>
  <li><strong>Netflix:</strong> Look for a "Reduce Loud Sounds" toggle in the audio settings during playback</li>
  <li><strong>Apple TV+:</strong> System Settings → Accessibility → "Reduce Loud Sounds"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost" on supported titles</li>
  <li><strong>Disney+:</strong> No equivalent feature currently</li>
</ul>

<p>These features compress the dynamic range so quiet parts are louder and loud parts are quieter. The result is more even audio that works at low volumes.</p>

<h2>Fix 2: Use headphones</h2>

<p>Headphones solve the "waking everyone up" part — your audio is private. But they don't solve the dynamic range problem. The dialog-explosion cycle still happens, just in your ears. This is where per-app volume control helps: set your streaming app's volume precisely for headphone listening.</p>

<h2>Fix 3: Set your streaming app to a specific volume</h2>

<p>The real issue for late-night watching is that your streaming app, notification sounds, and any other audio are all at the same system volume. A Slack ping at 2 AM at the same volume as your movie dialog is a heart-attack-level surprise.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lets you create the perfect late-night setup:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial late-night movie setup — streaming app at moderate volume, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Late-night movie profile</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / browser:</strong> 40-50% — comfortable dialog level without deafening action scenes</li>
  <li><strong>Slack:</strong> muted — no surprise pings</li>
  <li><strong>Mail:</strong> muted</li>
  <li><strong>iMessage:</strong> muted</li>
  <li><strong>System sounds:</strong> muted</li>
</ul>

<p>Save this as a "Night" profile. When you start a late-night movie, apply the profile with one click. Every notification source is silenced, and your streaming app is at a controlled volume. When you're done, switch back to your daytime profile.</p>

<p>Combine this with the streaming service's "Reduce Loud Sounds" feature for maximum effect: the service compresses the dynamic range, and SoundDial ensures nothing else on your Mac makes a sound.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac Volume Resets After Sleep? How to Keep Your Audio Settings",
    description:
      "Every time your Mac wakes from sleep, the volume is wrong — reset to max, dropped to zero, or switched to the wrong output. Here's why and how to fix it.",
    date: "2026-03-25",
    readTime: "5 min čítania",
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
    description:
      "Using Logic Pro or Ableton while on a Discord call? Here's how to hear your DAW at full fidelity while keeping voice chat at a comfortable level.",
    date: "2026-03-28",
    readTime: "5 min čítania",
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
    description:
      "Apple Music at max volume on your Mac but still too quiet? Check Sound Check, EQ settings, and learn how to boost Apple Music past 100%.",
    date: "2026-03-30",
    readTime: "5 min čítania",
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
    description:
      "Looking for a free per-app volume mixer for Mac? Here's an honest breakdown of what free options offer, what they're missing, and when it's worth paying.",
    date: "2026-04-03",
    readTime: "6 min čítania",
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
    title: "How to Balance Music and Voice Chat Volume on Mac",
    description:
      "Music is too loud over Discord. Or the call is too quiet under Spotify. macOS doesn't let you balance them — here's how to set the perfect ratio.",
    date: "2026-04-05",
    readTime: "4 min čítania",
    content: `
<p>You want to listen to music while talking to friends on Discord (or Zoom, or FaceTime). The music needs to be present but not overpowering. The voice chat needs to be clear and dominant. Simple request. macOS makes it impossible.</p>

<p>With one system volume controlling everything, you're stuck: turn it up for the call and the music is too loud. Turn it down for the music and you can't hear your friends. There's no built-in way to set these two things at different levels.</p>

<h2>The in-app volume workaround</h2>

<p>Both Spotify and Discord have internal volume sliders. In theory, you could lower Spotify's slider to 30% and keep Discord's output at 100%. This creates a 30/100 ratio.</p>

<p>In practice:</p>
<ul>
  <li>You have to switch to each app to adjust its slider</li>
  <li>The ratio changes when you adjust the system volume (both scale proportionally)</li>
  <li>Not every app has an internal volume slider</li>
  <li>It's imprecise — small Spotify slider, no percentage displayed</li>
  <li>If you close and reopen Spotify, the slider might reset</li>
</ul>

<h2>The real fix: independent per-app volume</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> puts both Spotify and Discord in the same panel with independent volume sliders. Set the ratio you want and leave it:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial balancing Spotify and Discord at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>The golden ratio for music + voice chat</h3>
<p>Based on how most people use this:</p>
<ul>
  <li><strong>Voice chat at 85-100%</strong> — always clearly audible, dominant in the mix</li>
  <li><strong>Music at 20-35%</strong> — present but never competing with voices</li>
</ul>

<p>The exact ratio depends on the music, your headphones, and personal preference. The point is that you can find the perfect balance once and keep it — instead of constantly adjusting.</p>

<h3>Save it as a profile</h3>
<p>Save your music/voice chat balance as a profile. "Gaming" profile: Discord 100%, game 50%, Spotify 20%. "Chill" profile: Discord 70%, Spotify 60%. Switch between them with one click.</p>

<h3>Auto-ducking for calls</h3>
<p>If you're listening to music and a call comes in, SoundDial's auto-ducking automatically lowers the music to your configured level. When the call ends, music comes back up. No touching anything.</p>

<p>The audio balance problem is something every Mac user faces the moment they have music and a call running simultaneously. It's a one-time €14.99 fix.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac Volume Control: The Complete Guide (2026)",
    description:
      "Everything you need to know about controlling audio on macOS — from basic keyboard shortcuts to per-app volume, output switching, and automation.",
    date: "2026-06-12",
    readTime: "12 min čítania",
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
    description:
      "VLC at max volume but a video is still too quiet? VLC has a built-in 200% boost — plus you can go even further with a per-app volume mixer.",
    date: "2026-04-08",
    readTime: "4 min čítania",
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
    title: "How to Disable Audio Ducking on Mac (or Control It Yourself)",
    description:
      "macOS or your apps keep lowering your music during calls without asking. Here's how to stop unwanted audio ducking — or replace it with ducking you actually control.",
    date: "2026-04-10",
    readTime: "5 min čítania",
    content: `
<p>You join a Zoom call. Your music drops to almost nothing. You didn't touch any volume control — something did it for you. This is <strong>audio ducking</strong>: the automatic lowering of background audio when a call or important audio source is active.</p>

<p>Some people love it. Others hate it — especially when the ducking is too aggressive (music drops to zero instead of a comfortable background level) or when it's triggered unexpectedly.</p>

<p>Here's how to disable unwanted ducking on Mac, and how to replace it with ducking that works the way you want.</p>

<h2>Where audio ducking comes from on Mac</h2>

<p>macOS itself does <strong>not</strong> have a built-in audio ducking feature. If your music is getting quieter during calls, one of these is causing it:</p>

<h3>1. Zoom's audio processing</h3>
<p>Zoom can reduce system audio when it activates. Check Zoom → Settings → Audio and disable "Automatically adjust microphone volume." Also try reducing noise suppression from "High" to "Low."</p>

<h3>2. Bluetooth codec switching</h3>
<p>When an app activates your Bluetooth headphones' microphone, macOS switches from AAC to the SCO codec. This isn't really "ducking" — it's a codec change that makes everything sound quieter and lower quality. Fix it by using a separate microphone.</p>

<h3>3. A third-party app doing it</h3>
<p>Some audio apps (like Background Music) have auto-pause or auto-duck features. Some media apps reduce their own volume when they detect another audio source. Check any audio utility apps you have installed.</p>

<h3>4. Communication apps adjusting audio</h3>
<p>Discord, Teams, and other communication apps have their own audio processing that can affect perceived volume of other apps. Check each app's audio settings for "automatically adjust" options and disable them.</p>

<h2>How to stop unwanted ducking</h2>

<ol>
  <li><strong>Check Zoom/Teams/Discord audio settings</strong> — disable automatic volume/mic adjustment</li>
  <li><strong>Use a separate mic for calls</strong> — prevents Bluetooth codec switching</li>
  <li><strong>Remove audio utilities</strong> — Background Music, Soundflower, or any app that might be intercepting audio</li>
  <li><strong>Check macOS Accessibility</strong> — System Settings → Accessibility → Audio for any unexpected settings</li>
</ol>

<h2>Replace bad ducking with good ducking</h2>

<p>The idea behind audio ducking is actually great — automatically lower background audio during calls so you can hear clearly. The problem is when it's too aggressive (music goes to zero), not configurable (you can't choose how much to lower), or triggered by the wrong thing.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> has a built-in auto-ducking feature that puts you in control:</p>

<ul>
  <li><strong>Configurable duck level:</strong> Choose exactly how much to lower background audio during calls — from 10% (nearly silent) to 80% (barely reduced). Default is 30%, which keeps music audible but not distracting.</li>
  <li><strong>Smart detection:</strong> Detects calls by monitoring microphone usage — the same indicator as macOS's orange dot. Works with Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Perfect restoration:</strong> When the call ends, every app returns to exactly its previous volume. No re-adjusting.</li>
  <li><strong>Easy toggle:</strong> Turn auto-ducking on or off in SoundDial's settings. When you don't want it, disable it. When you want it back, enable it.</li>
</ul>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial configurable auto-ducking — control exactly how much background audio is lowered during calls" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>The difference: instead of some app deciding your music should go to zero during every call, you decide it should go to 25%. Instead of losing control, you gain it. And instead of trying to disable a hidden feature in three different apps, you have one toggle in one place.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Bluetooth Headphones Too Quiet on Mac? Every Fix That Works",
    description:
      "Your Bluetooth headphones work fine on your phone but sound quiet on Mac. Here's every cause — from codec issues to macOS volume limits — and how to fix each one.",
    date: "2026-04-12",
    readTime: "6 min čítania",
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
    description:
      "Streaming on Mac with OBS? Your viewers hear everything at the same volume — game, music, alerts, Discord. Here's how to balance audio sources properly.",
    date: "2026-04-15",
    readTime: "7 min čítania",
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
    title: "How to Make Your Mac Remember Volume Per App",
    description:
      "Every time you restart Spotify or relaunch Zoom, you have to re-adjust the volume. Here's how to make macOS remember each app's volume level automatically.",
    date: "2026-04-18",
    readTime: "4 min čítania",
    content: `
<p>You spend five minutes getting your audio levels perfect. Spotify at 30%, Zoom at 100%, Slack at 15%. Then you restart your Mac. Or Slack crashes and relaunches. Or you close Spotify and reopen it later. Every app resets to its default volume. You re-adjust everything. Again.</p>

<p>macOS remembers the system volume across restarts. But it doesn't remember per-app volume — because macOS doesn't have per-app volume control in the first place. There's nothing to remember.</p>

<h2>Why apps don't remember their own volume</h2>

<p>Some apps (like Spotify and VLC) have internal volume sliders that are saved between sessions. But most apps — browsers, communication tools, system utilities — don't have their own volume controls. And even the apps that do save internal volume only remember their own slider position, not their volume relative to other apps.</p>

<p>What you really want is for the <em>system</em> to remember: "Spotify should be at 30% of the system volume, always." macOS doesn't support this concept.</p>

<h2>Volume memory with SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> has a <strong>Volume Memory</strong> feature. When enabled, it saves each app's volume level by its bundle identifier. When the app quits and relaunches — whether you restart it, it crashes, or you restart your Mac — SoundDial automatically restores it to its saved volume.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume memory — automatically remembers and restores per-app volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>How it works</h3>
<ol>
  <li>Enable "Remember volume per app" in SoundDial's settings</li>
  <li>Set each app to your preferred volume</li>
  <li>SoundDial saves the level automatically</li>
  <li>When the app relaunches, the volume is restored to exactly where it was</li>
</ol>

<p>No manual saving. No re-adjusting. The first time you set your volumes is the last time.</p>

<h3>What gets remembered</h3>
<ul>
  <li><strong>Volume level</strong> — the exact percentage (0% to 200%)</li>
  <li><strong>Mute state</strong> — if you muted an app, it stays muted when it relaunches</li>
  <li><strong>Per app</strong> — each app's volume is stored independently by bundle ID</li>
</ul>

<h3>New apps get a default volume</h3>
<p>When an app launches for the first time (one SoundDial hasn't seen before), it gets a configurable default volume. You can set this default in SoundDial's settings — so new apps start at 80% (or whatever you prefer) instead of potentially blasting at 100%.</p>

<h2>Volume memory + profiles = set it and forget it</h2>

<p>Volume memory handles the day-to-day: apps keep their levels across restarts. Profiles handle situational switching: "Meeting" mode, "Focus" mode, "Gaming" mode — apply with one click and every app jumps to the right level for that situation.</p>

<p>Together, you almost never manually adjust a volume slider. The app remembers its last level, and when you change contexts, a profile sets everything at once.</p>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Podcast Volume Too Low on Mac? How to Make It Louder",
    description:
      "Some podcasts are whisper-quiet on Mac even at max volume. Here's why — and how to boost podcast audio past 100% without affecting other apps.",
    date: "2026-04-20",
    readTime: "5 min čítania",
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
    description:
      "Watching a lecture while taking notes, Googling references, and chatting classmates — all at different volumes. Here's how to manage student audio on Mac.",
    date: "2026-04-22",
    readTime: "5 min čítania",
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
    description:
      "You updated macOS and now your sound is gone, crackling, or stuck at the wrong volume. Here's every fix to get your Mac audio working again.",
    date: "2026-04-25",
    readTime: "7 min čítania",
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
    title: "How to Mute All Apps at Once on Mac (and Unmute Them Perfectly)",
    description:
      "Need instant silence? The mute key mutes everything — but unmuting resets your carefully balanced volumes. Here's a better way to mute and restore on Mac.",
    date: "2026-04-28",
    readTime: "4 min čítania",
    content: `
<p>Someone walks into the room. Your boss calls unexpectedly. A client shares their screen on a call and your music starts playing through their speakers. You need instant silence. Right now.</p>

<p>You hit the mute key. Everything goes quiet. Crisis averted.</p>

<p>Then the moment passes. You hit the mute key again. Everything comes back — but at the system volume level, which doesn't remember that Spotify was at 30%, Zoom was at 100%, and Slack was at 15%. Those individual levels? Gone. You have to re-adjust everything manually.</p>

<h2>The system mute key: blunt instrument</h2>

<p>The Mac's mute key (F10 or the speaker-slash key) mutes the <strong>system audio output</strong>. Every app goes silent simultaneously. Unmuting restores the system volume to where it was — but since macOS only has one volume slider, there are no per-app levels to remember or restore.</p>

<p>This is fine if you only use one app at a time. It's a problem if you have six apps carefully balanced at different levels and need to silence + restore them all.</p>

<h2>A smarter mute: per-app mute all</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> has a "Mute All" keyboard shortcut: <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>When you press it:</p>
<ol>
  <li>Every app is muted individually (each app's volume state is saved)</li>
  <li>Instant silence — just like the mute key</li>
</ol>

<p>When you press it again:</p>
<ol>
  <li>Every app is unmuted</li>
  <li>Each app returns to <strong>exactly</strong> the volume it was at before you muted</li>
  <li>Spotify goes back to 30%, Zoom to 100%, Slack to 15% — perfectly restored</li>
</ol>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mute-all shortcut — Control+Option+M to mute and unmute all apps with volume restore" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>The difference from the system mute key:</p>
<ul>
  <li><strong>System mute:</strong> mutes the output → unmute restores one system volume → per-app balance doesn't exist</li>
  <li><strong>SoundDial mute all:</strong> mutes each app individually → unmute restores each app's individual volume → your balance is preserved</li>
</ul>

<h2>When this matters</h2>

<ul>
  <li><strong>Screen sharing:</strong> You're sharing your screen and need to silence your Mac before the other person hears your music. ⌃⌥M → silence → do your thing → ⌃⌥M → music is back at exactly the right level.</li>
  <li><strong>Unexpected interruption:</strong> Someone walks in, you need silence instantly. One shortcut, no mouse, no fumbling for the menu bar.</li>
  <li><strong>Quick phone call:</strong> Your desk phone rings. Silence the Mac, take the call, unmute when done. Everything comes back.</li>
</ul>

<p>Combined with the <strong>⌃⌥S</strong> shortcut (toggle SoundDial's popover), you can manage all your audio entirely from the keyboard — open the mixer, adjust levels, close it, and mute/unmute everything without touching the mouse.</p>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Google Meet Volume Too Low on Mac? How to Fix It",
    description:
      "Voices on Google Meet are barely audible even at max volume. Here's why Meet runs through Chrome, what that means for audio, and how to boost it.",
    date: "2026-05-01",
    readTime: "5 min čítania",
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
    title: "How to Set Mac Alert Volume Separate from Media Volume",
    description:
      "macOS has a hidden alert volume slider, but it only covers system sounds. Here's how to truly separate notification and media volume on Mac.",
    date: "2026-05-02",
    readTime: "5 min čítania",
    content: `
<p>Your music is at a perfect level. Then a macOS alert sound fires — the "Funk" or "Tink" sound effect — and it's painfully loud compared to your music. Or the opposite: your alerts are inaudible because your system volume is low for quiet background music.</p>

<p>You want two separate volume controls: one for media (music, calls, video) and one for alerts and notifications. macOS partially supports this, but the full solution requires a third-party tool.</p>

<h2>macOS's built-in alert volume</h2>

<p>macOS does have a separate alert volume. Go to <strong>System Settings → Sound</strong> and look for the <strong>"Alert volume"</strong> slider. This controls the volume of macOS system sounds — error beeps, Trash emptying, screenshot shutter — independently from the main system volume.</p>

<p>You can also choose which alert sound to use and whether to "Play sound effects through" your selected output device or the built-in speakers.</p>

<h3>What the alert volume controls</h3>
<ul>
  <li>macOS system alert sounds (Funk, Tink, Bottle, etc.)</li>
  <li>Finder sounds (Trash, file copy complete)</li>
  <li>Some built-in app sounds</li>
</ul>

<h3>What it doesn't control</h3>
<ul>
  <li>Slack notification sounds</li>
  <li>Discord notification sounds</li>
  <li>Teams/Zoom sounds</li>
  <li>Mail notification sounds</li>
  <li>Any third-party app notification sounds</li>
  <li>Browser notification sounds</li>
</ul>

<p>Third-party apps play their notification sounds through their own audio engine — they're treated as regular app audio, not system alerts. The alert volume slider has no effect on them. This means the apps that make the most annoying notification sounds (Slack, Discord, Teams) are the ones that macOS's alert volume can't touch.</p>

<h2>The real fix: per-app volume for notification apps</h2>

<p>To truly separate notification volume from media volume, you need per-app volume control. Set Slack to 15%, Discord to 20%, and Mail to 10% — while keeping Spotify at 50% and your browser at 60%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives every app its own volume slider. You can set notification-heavy apps to a subtle level that's noticeable but not jarring, while keeping media apps at a comfortable listening volume.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separating notification app volume from media app volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Example setup</h3>
<p><strong>Media apps:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60%</li>
  <li>QuickTime/VLC: 70%</li>
</ul>

<p><strong>Notification apps:</strong></p>
<ul>
  <li>Slack: 15%</li>
  <li>Discord: 20%</li>
  <li>Mail: 10%</li>
  <li>Calendar: 25%</li>
</ul>

<p><strong>Communication apps:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>FaceTime: 100%</li>
</ul>

<p>Save this as a profile and apply it with one click. The separation between notification and media volume that macOS doesn't provide natively — done in under a minute.</p>

<p>Available on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — Apple-reviewed, €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "FaceTime Call Volume Too Low on Mac? How to Fix It",
    description:
      "FaceTime audio is barely audible on your Mac even at full volume. Here's every fix — from sound settings to boosting FaceTime past 100%.",
    date: "2026-05-04",
    readTime: "5 min čítania",
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
    description:
      "Beyond the basic volume keys — fine-grained control, muting specific apps, and per-app volume shortcuts. Every Mac audio keyboard trick explained.",
    date: "2026-05-06",
    readTime: "5 min čítania",
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
    description:
      "The free Background Music app stopped working after a macOS update? Here's why it breaks, what to do, and the best alternatives that actually work in 2026.",
    date: "2026-06-08",
    readTime: "5 min čítania",
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
    description:
      "SoundSource is powerful but expensive and complex. If you just need per-app volume control without the audio engineering toolkit, here's what to use instead.",
    date: "2026-06-06",
    readTime: "6 min čítania",
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
    description:
      "Even at the lowest volume notch, your Mac is too loud — especially late at night with headphones. Here's how to get finer volume control and go below the minimum.",
    date: "2026-05-08",
    readTime: "5 min čítania",
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
    description:
      "The left AirPod is quieter than the right (or vice versa). Here's every cause — from earwax to macOS balance settings — and how to fix it.",
    date: "2026-05-10",
    readTime: "5 min čítania",
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
    description:
      "Dialog is whisper-quiet, then an explosion shakes the room. Here's how to fix streaming audio levels on Mac — and boost quiet content past 100%.",
    date: "2026-05-17",
    readTime: "5 min čítania",
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
    description:
      "Calls, music, notifications, and focus time — all on one Mac. Here's how to set up your audio so nothing fights for your attention.",
    date: "2026-05-12",
    readTime: "8 min čítania",
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
    title: "How to Stop Browser Tabs from Auto-Playing Audio on Mac",
    description:
      "A background tab starts playing audio out of nowhere. Ads, videos, news sites — here's how to silence rogue tabs and control browser audio on macOS.",
    date: "2026-05-14",
    readTime: "5 min čítania",
    content: `
<p>You have twenty tabs open. You're working in one of them. Suddenly — audio starts playing from somewhere. A video ad. An auto-playing news clip. A tab you opened an hour ago that decided now is the time to start making noise. You scramble to find which tab it is, clicking through them one by one.</p>

<p>Auto-playing audio in browser tabs is one of the most annoying experiences on any computer, and it's worse on Mac because macOS has no way to mute a specific app (let alone a specific tab) without muting everything.</p>

<h2>Disable autoplay in Safari</h2>

<p>Safari has the best built-in autoplay controls of any browser:</p>

<ol>
  <li>Open Safari → Settings (⌘,) → Websites tab</li>
  <li>Select "Auto-Play" in the left sidebar</li>
  <li>Set the default at the bottom to "Never Auto-Play" or "Stop Media with Sound"</li>
</ol>

<p>"Stop Media with Sound" is the best option — it blocks videos that auto-play with audio but allows muted auto-play (which many sites use for decorative background videos). "Never Auto-Play" blocks everything.</p>

<p>You can also configure per-site settings in this same panel if you want to allow autoplay on specific sites like YouTube or Netflix.</p>

<h2>Disable autoplay in Chrome</h2>

<p>Chrome's autoplay controls are less granular:</p>

<ol>
  <li>Go to <code>chrome://settings/content/sound</code></li>
  <li>Toggle "Sites can play sound" to determine the default behavior</li>
  <li>Add specific sites to the "Mute" list to permanently silence them</li>
</ol>

<p>Chrome also lets you mute individual tabs: right-click a tab → "Mute site." This mutes all audio from that site until you unmute it.</p>

<h2>Mute a tab quickly</h2>

<p>Both Safari and Chrome show a speaker icon on tabs that are producing audio. In Safari, click the speaker icon in the tab to mute it. In Chrome, right-click the tab and select "Mute site."</p>

<p>This works for one tab at a time, but if you have multiple noisy tabs, you're clicking through them one by one.</p>

<h2>The broader problem: browser audio vs. everything else</h2>

<p>Even with autoplay disabled and tabs muted, you might still want to control how loud your browser is relative to other apps. Maybe you're watching a YouTube tutorial while on a Zoom call — you want the tutorial at 30% and Zoom at 100%. Or you're playing background music in a browser tab and it's competing with your Spotify.</p>

<p>macOS treats the entire browser as one app with one volume. You can't make one tab quieter than another at the system level. But you <em>can</em> make the entire browser quieter than other apps.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives your browser its own volume slider, independent from every other app. Lower Safari to 30% while keeping Zoom at 100%. Mute Chrome entirely while keeping Spotify playing. One click.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling browser volume independently from other apps on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>This is the fastest way to handle a surprise auto-playing tab: instead of hunting for which tab is making noise, click SoundDial in the menu bar and mute the browser. Everything else keeps playing. When you've found and closed the offending tab, unmute the browser and its volume returns to where it was.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Discord Volume Too Loud (or Quiet) on Mac? How to Fix It",
    description:
      "Discord is blasting over your game, or too quiet to hear teammates. Here's how to control Discord's volume independently from everything else on macOS.",
    date: "2026-05-21",
    readTime: "5 min čítania",
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
    title: "How to Switch Audio Output Quickly on Mac (Without Digging Through Settings)",
    description:
      "Switching between speakers, headphones, and monitors on Mac takes too many clicks. Here are faster ways to change your audio output device instantly.",
    date: "2026-05-19",
    readTime: "5 min čítania",
    content: `
<p>You unplug your headphones and want audio to go to your speakers. Or you connect AirPods and macOS picks the wrong device. Or you walk into a meeting room and need to switch to the conference speaker. Every time, it's: System Settings → Sound → Output → scroll → click. Too many clicks for something that should take one.</p>

<p>Here are all the ways to switch audio output faster on Mac — from built-in shortcuts to menu bar tools that eliminate the clicking entirely.</p>

<h2>Method 1: Option-click the volume icon</h2>

<p>This is the fastest built-in method and most people don't know about it.</p>

<p>Hold <strong>Option (⌥)</strong> and click the volume/sound icon in your menu bar. Instead of the normal volume slider, you get a list of all available output devices. Click the one you want. Done.</p>

<p>If you don't see the sound icon in your menu bar, enable it: System Settings → Control Center → Sound → select "Always Show in Menu Bar."</p>

<p><strong>Limitation:</strong> This only shows output devices — you can't adjust per-app volume or see what's currently playing from this menu.</p>

<h2>Method 2: Control Center</h2>

<p>Click the Control Center icon (the two-toggle icon) in the menu bar → click the Sound section → click the current device name to see all available outputs.</p>

<p><strong>Limitation:</strong> It's three clicks instead of one. Slightly slower than Option-clicking the volume icon.</p>

<h2>Method 3: System Settings shortcut</h2>

<p>You can pin Sound to the top-level System Settings sidebar, but it still requires navigating to the Output tab and selecting a device. Not fast.</p>

<h2>Method 4: Keyboard shortcut (with setup)</h2>

<p>macOS doesn't have a built-in keyboard shortcut for switching audio devices. However, you can create one using Automator or Shortcuts:</p>
<ol>
  <li>Open Shortcuts app</li>
  <li>Create a new shortcut that runs a shell script: <code>SwitchAudioSource -s "Device Name"</code> (requires the <code>switchaudio-osx</code> command-line tool from Homebrew)</li>
  <li>Assign a keyboard shortcut to the shortcut</li>
</ol>
<p>This works but requires Homebrew, a command-line tool, and manual setup per device. Not practical for most users.</p>

<h2>Method 5: SoundDial's built-in device switcher</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> includes an output device picker right in its menu bar popover — alongside your per-app volume sliders. One click to open SoundDial, one click to switch devices. No digging through System Settings.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial with audio output device switching and per-app volume control in one menu bar panel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>The advantage of switching devices inside SoundDial: you can switch your output <em>and</em> adjust per-app volumes in the same panel. Switch to AirPods and immediately lower Spotify while boosting your call — all without leaving the popover.</p>

<p>Combined with SoundDial's <strong>volume memory</strong> feature, each output device can remember its own per-app volume levels. Switch to speakers and your "speakers" volume balance applies. Switch to headphones and your "headphones" balance applies. No manual re-adjusting.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Fix Audio Crackling and Popping on Mac: Complete Guide",
    description:
      "Your Mac's audio crackles, pops, or stutters — during music, calls, or video playback. Here's every known cause and fix for macOS audio glitches.",
    date: "2026-05-16",
    readTime: "8 min čítania",
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
    description:
      "Can barely hear people on Teams even at max volume? Here's every cause — from Teams settings to Bluetooth codecs — and how to boost call audio past 100%.",
    date: "2026-06-04",
    readTime: "7 min čítania",
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
    title: "How to Control Per-App Volume on Mac",
    description:
      "macOS gives you one volume slider for everything. Here's how to get individual volume controls for every app — and why it matters more than you think.",
    date: "2026-05-20",
    readTime: "7 min čítania",
    content: `
<p>You're on a video call. Slack keeps dinging. Music is playing in the background. You reach for the volume key and — everything gets quieter. The call, the music, the notifications. macOS has exactly one volume slider, and it controls everything at once.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Windows has had a per-app volume mixer since Vista in 2006. Twenty years later, macOS still doesn't. If you want to turn down Spotify without affecting your Zoom call, Apple has no built-in answer for you.</p>

<p>This guide explains what per-app volume control is, why macOS doesn't have it, and how to get it.</p>

<h2>What per-app volume actually means</h2>

<p>Per-app volume means every application on your Mac gets its own independent volume slider. You can set Spotify to 30%, keep Zoom at 100%, mute Slack entirely, and leave Safari at 50% — all at the same time. Changing one app's volume has zero effect on any other app.</p>

<p>This is different from the system volume, which is a single master slider that scales everything proportionally. If your system volume is at 50% and Spotify is playing at full blast, there's no way to turn just Spotify down without a per-app mixer.</p>

<h2>Why macOS doesn't include this</h2>

<p>Apple's audio architecture (Core Audio) absolutely supports per-app volume control at the framework level. The reason macOS doesn't expose it in the UI is a design philosophy choice: Apple prefers fewer controls and a simpler surface. One slider is simpler than twelve.</p>

<p>The problem is that "simpler" stops being simpler the moment you have more than one audio source competing for your attention. A single volume key that controls everything is elegant when you're doing one thing. It's actively hostile when you're on a call with music and notifications at the same time — which is how most people actually use their Mac.</p>

<h2>The built-in workarounds (and why they don't work)</h2>

<h3>1. In-app volume controls</h3>
<p>Some apps have their own volume sliders — Spotify, VLC, QuickTime. But most don't. Slack doesn't. Chrome tabs don't. System sounds don't. And even when an app has a slider, you have to open that app, find the slider, adjust it, then switch back to what you were doing. It's five clicks for something that should be one.</p>

<h3>2. Audio MIDI Setup</h3>
<p>macOS includes Audio MIDI Setup in the Utilities folder. It lets you configure audio devices and create aggregate devices, but it has zero per-app volume controls. It's a device configuration tool, not a mixer.</p>

<h3>3. Multiple output devices</h3>
<p>You could theoretically route different apps to different output devices (headphones vs speakers) and control those devices separately. But that requires extra hardware, manual routing per app, and doesn't actually give you independent volume — just independent on/off per device.</p>

<h2>How a per-app volume mixer works</h2>

<p>A proper per-app volume mixer sits in your menu bar and shows every app that's currently producing audio. Each app gets its own slider. You drag it up or down, and only that app's volume changes. The system volume stays untouched.</p>

<p>Under the hood, this works by using macOS's <strong>Core Audio Tap API</strong> (introduced in macOS 14) or older virtual audio device techniques to intercept each app's audio stream independently and scale its amplitude before it hits the speakers.</p>

<p>The key features that separate a good mixer from a bad one:</p>

<ul>
  <li><strong>Real-time app detection.</strong> When a new app starts playing audio, it should appear in the mixer automatically. No manual setup.</li>
  <li><strong>Per-app mute.</strong> One click to silence a specific app without touching its slider position.</li>
  <li><strong>Volume boost.</strong> Some apps (looking at you, quiet podcast players) max out too low. A good mixer lets you boost past 100%.</li>
  <li><strong>Profiles.</strong> Different volume configurations for different situations — "Focus" with everything muted except music, "Meeting" with Zoom at 100% and everything else at 20%, "Gaming" with game audio boosted.</li>
  <li><strong>Auto-ducking.</strong> Automatically lower music when you start a call, and bring it back when the call ends. This alone is worth the entire app.</li>
  <li><strong>Menu bar native.</strong> It should live in the menu bar, not a dock window. You glance up, adjust, and go back to work. No app switching.</li>
</ul>

<h2>Who needs this</h2>

<p>Anyone who does more than one audio thing at a time. That's most people, but especially:</p>

<ul>
  <li><strong>Remote workers</strong> — calls + music + notifications is the most common collision</li>
  <li><strong>Streamers and podcasters</strong> — precise control over what the audience hears vs. what you hear</li>
  <li><strong>Musicians and producers</strong> — need to isolate DAW output from reference tracks and communication tools</li>
  <li><strong>Gamers</strong> — game audio vs. Discord vs. music is a constant balancing act</li>
  <li><strong>Anyone with notification fatigue</strong> — mute Slack, keep everything else</li>
</ul>

<h2>SoundDial</h2>

<p>I built <strong>SoundDial</strong> because the Mac volume mixer I wanted didn't exist. It sits in your menu bar, shows every app that's making sound, and gives each one its own slider. Per-app mute, volume boost, profiles, and auto-ducking that lowers your music when a call starts. One-time purchase, macOS 14+, no subscription.</p>

<p>The volume mixer macOS should have built in.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "How to Mute Slack on Mac Without Muting Everything Else",
    description:
      "Slack notifications keep interrupting your focus, but you don't want to silence your music or calls. Here's how to mute just Slack on macOS.",
    date: "2026-05-24",
    readTime: "5 min čítania",
    content: `
<p>You're deep in focus work. Spotify is playing the perfect concentration playlist. Then — <em>knock brush</em> — Slack pings. And again. And again. Three channels, two DMs, and a thread notification in thirty seconds. You want to mute Slack but keep your music. macOS says: mute everything or mute nothing.</p>

<p>Slack's notification sounds are one of the top audio complaints for remote workers on Mac. They're designed to get your attention, which is exactly the problem when you need to concentrate.</p>

<h2>Option 1: Mute notifications in Slack itself</h2>

<p>Slack has a "Pause notifications" feature:</p>
<ol>
  <li>Click your profile picture in Slack's sidebar</li>
  <li>Click "Pause notifications"</li>
  <li>Choose a duration (30 min, 1 hour, 2 hours, etc.)</li>
</ol>

<p>This suppresses notification badges and sounds for the selected duration. You can also mute individual channels by right-clicking → "Mute channel."</p>

<p><strong>Limitation:</strong> This is all-or-nothing per channel. You can't make Slack <em>quieter</em> — only fully silent or fully on. And if you forget to unpause, you miss messages after your focus session ends. It also doesn't suppress Slack's in-app sounds if you have the app open.</p>

<h2>Option 2: Turn off Slack sounds in macOS notifications</h2>

<p>Go to System Settings → Notifications → Slack. Toggle off "Play sound for notifications."</p>

<p><strong>Limitation:</strong> This removes all Slack notification sounds permanently (until you turn it back on). And it only affects macOS-level notifications — if Slack plays sounds through its own audio engine, the notification setting might not catch all of them.</p>

<h2>Option 3: Use a Focus mode</h2>

<p>Create a "Focus" or "Work" Focus mode in System Settings → Focus. Add Slack to the "Silenced" list. When you activate the Focus mode, Slack notifications are suppressed.</p>

<p><strong>Limitation:</strong> Focus modes suppress notifications visually and audibly, but they don't give you fine-grained volume control. You can't say "Slack notifications at 10% volume" — it's either fully allowed or fully silenced.</p>

<h2>Option 4: Per-app volume control (the real fix)</h2>

<p>What you actually want is simple: turn Slack's volume down to 10-15% while keeping everything else at normal levels. Slack pings are audible if you're listening for them, but they don't interrupt your flow. Music stays at full volume. Calls stay at full volume.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives Slack its own independent volume slider. Set it to whatever level works for you — or mute it entirely with one click. When you're ready to pay attention to Slack again, unmute it and the volume returns to where it was.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial with Slack muted and Spotify playing at normal volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>The ideal Slack workflow</h3>
<ul>
  <li><strong>Focus time:</strong> Slack at 10% or muted. Spotify at 40%. No interruptions.</li>
  <li><strong>Available time:</strong> Slack at 40%. Notifications are noticeable without being startling.</li>
  <li><strong>Meeting time:</strong> Slack muted. Zoom at 100%. Auto-ducking handles the rest.</li>
</ul>

<p>Save each of these as a <strong>volume profile</strong> in SoundDial and switch between them with one click. Better yet, use auto-ducking — when a call starts, SoundDial automatically lowers everything (including Slack) and restores it when the call ends.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "How to Set Up Volume Profiles for Different Situations on Mac",
    description:
      "Different volume setups for meetings, focus work, gaming, and relaxing — switchable with one click. Here's how volume profiles work on macOS.",
    date: "2026-06-02",
    readTime: "5 min čítania",
    content: `
<p>At 9 AM you're on a Zoom call — you want Zoom at 100%, Spotify muted, Slack muted. At 10 AM the call ends — you want Spotify at 40%, Slack at 15%, Zoom doesn't matter. At noon you're gaming — game at 60%, Discord at 100%, everything else muted. By 6 PM you're watching YouTube — browser at 80%, everything else quiet.</p>

<p>Every situation has a different ideal volume configuration. And every time the situation changes, you'd have to adjust five or six apps manually. Or you could save each setup as a profile and switch with one click.</p>

<h2>What are volume profiles?</h2>

<p>A volume profile is a saved snapshot of every app's volume and mute state. You configure your apps how you want them — Spotify at 30%, Zoom at 100%, Slack muted — then save that as a named profile like "Work" or "Meeting." Later, you apply the profile and every app instantly jumps to its saved volume level.</p>

<p>Think of it like display presets for audio: just as you might have a display arrangement for "desk setup" vs "presentation mode," volume profiles let you switch between audio configurations without manually adjusting each app.</p>

<h2>macOS doesn't have volume profiles</h2>

<p>macOS has Focus modes (Do Not Disturb, Work, Personal, etc.) that control which notifications get through. But Focus modes don't control volume levels. They can suppress notification sounds entirely, but they can't set Spotify to 30% or Zoom to 100%. There's no built-in way to save and restore per-app volume configurations.</p>

<h2>Setting up profiles with SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> includes a built-in profile system. Here's how to set it up:</p>

<h3>Creating a profile</h3>
<ol>
  <li>Open SoundDial from the menu bar</li>
  <li>Adjust every app's volume to how you want it for a specific situation</li>
  <li>Click the "+" button in the profile section</li>
  <li>Give it a name (e.g., "Meeting") and choose an icon</li>
  <li>Done — your current volume configuration is saved</li>
</ol>

<h3>Switching profiles</h3>
<p>Your saved profiles appear as buttons in SoundDial's popover. Click one and every app instantly switches to the volumes saved in that profile. One click replaces five or six manual adjustments.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume profiles — one-click switching between Meeting, Focus, and Chill modes on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Example profiles</h3>

<p><strong>Meeting</strong></p>
<ul>
  <li>Zoom / Teams: 100%</li>
  <li>Spotify: muted</li>
  <li>Slack: muted</li>
  <li>Browser: muted</li>
</ul>

<p><strong>Focus Work</strong></p>
<ul>
  <li>Spotify: 35%</li>
  <li>Slack: 10%</li>
  <li>Mail: muted</li>
  <li>Browser: 50%</li>
</ul>

<p><strong>Gaming</strong></p>
<ul>
  <li>Game: 60%</li>
  <li>Discord: 100%</li>
  <li>Spotify: 20%</li>
  <li>Everything else: muted</li>
</ul>

<p><strong>Chill</strong></p>
<ul>
  <li>Spotify: 70%</li>
  <li>Browser: 60%</li>
  <li>Notifications: 20%</li>
</ul>

<h3>Updating profiles</h3>
<p>If your preferred volumes change over time, just adjust the sliders and update the profile. The next time you apply it, it uses the new settings.</p>

<h2>Profiles + auto-ducking = fully automatic</h2>

<p>Combine profiles with SoundDial's auto-ducking feature and you rarely need to touch volume at all. Apply your "Focus Work" profile in the morning. When a call comes in, auto-ducking lowers everything except the call app. When the call ends, everything returns to your profile levels. At the end of the day, switch to "Chill" with one click.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Zoom Call Volume Too Low on Mac? How to Boost It",
    description:
      "You can barely hear people on Zoom even at max volume. Here's every fix — from Zoom settings to boosting call audio beyond 100% with a per-app volume mixer.",
    date: "2026-05-26",
    readTime: "6 min čítania",
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
    title: "How to Lower Spotify Without Lowering Everything Else on Mac",
    description:
      "You want Spotify as background music, but turning it down with the volume keys makes your call and everything else quieter too. Here's the fix.",
    date: "2026-05-30",
    readTime: "4 min čítania",
    content: `
<p>You're working. Spotify is playing background music. It's a little too loud — competing with the podcast in another tab or making it hard to focus. You tap the volume-down key. Spotify gets quieter. But so does everything else — your Zoom call, your notification sounds, your browser audio. All quieter. That's not what you wanted.</p>

<p>This happens because macOS has one volume slider. Press the volume key and it adjusts the <em>system volume</em>, which scales every app equally. There's no way to say "just lower Spotify" with the built-in controls.</p>

<h2>The workaround: Spotify's in-app volume</h2>

<p>Spotify has its own volume slider in the bottom-right corner of the app (or bottom of the player). You can lower this independently of the system volume. If your system is at 80% and Spotify's slider is at 30%, Spotify will play at effectively 24% while everything else stays at 80%.</p>

<p><strong>The problem:</strong> You have to switch to the Spotify window, find the slider, adjust it, then switch back to what you were doing. And Spotify's slider is tiny, imprecise, and doesn't show a percentage — just a visual bar. If you're in a meeting and need to quickly lower your music, fumbling with a small slider in another app is not ideal.</p>

<h2>The real fix: per-app volume control</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> puts a volume slider for every app in your menu bar. To lower Spotify without affecting anything else:</p>

<ol>
  <li>Click the SoundDial icon in the menu bar</li>
  <li>Find Spotify in the list</li>
  <li>Drag its slider down</li>
</ol>

<p>Done. Spotify is quieter. Zoom is unchanged. Notifications are unchanged. Everything else is unchanged. You didn't leave your current app — the menu bar popover opens right where you are.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial lowering Spotify volume independently while keeping other apps at full volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Even better: save it as a profile</h2>

<p>If you regularly want Spotify at a lower background level while working, save your preferred volume setup as a profile. Create a "Work" profile with Spotify at 25%, Zoom at 100%, and Slack at 15%. Next time you sit down to work, apply the profile with one click instead of adjusting each app individually.</p>

<h2>Even better: auto-ducking during calls</h2>

<p>SoundDial can automatically lower Spotify when you join a call. Enable auto-ducking in the settings, choose how much to reduce background audio (default 30%), and SoundDial handles the rest. Your music ducks when the call starts and comes back when it ends. No manual adjustment at all.</p>

<p>This is the workflow macOS should support natively: "Spotify at this level, everything else at that level." Since Apple hasn't built it, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> fills the gap.</p>

<p>One-time purchase on the <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. No subscription. macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Does macOS Tahoe Have Per-App Volume Control?",
    description:
      "macOS Tahoe (macOS 26) brought major updates, but did Apple finally add a volume mixer? Here's the answer — and how to get per-app volume control right now.",
    date: "2026-06-12",
    readTime: "4 min čítania",
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
    title: "How to Play Music on Speakers While Taking Calls on Headphones (Mac)",
    description:
      "Want Spotify on your desk speakers and Zoom in your AirPods at the same time? macOS doesn't make this easy — here's what actually works.",
    date: "2026-05-15",
    readTime: "5 min čítania",
    content: `
<p>Here's a reasonable thing you might want to do: play music through your desk speakers while taking a Zoom call through your AirPods. The music fills the room, the call is private in your ears. Makes perfect sense.</p>

<p>macOS says no. When you select an audio output device, <em>every</em> app uses it. Switch to AirPods for Zoom and Spotify also switches to AirPods. Switch to speakers for Spotify and Zoom also goes to speakers. One output device for everything. No exceptions.</p>

<h2>Why macOS can't do this natively</h2>

<p>macOS routes all audio through a single selected output device. You choose "MacBook Pro Speakers" or "AirPods Pro" in System Settings → Sound → Output, and every app sends audio to that device. There's no built-in per-app audio routing.</p>

<p>This design makes sense for simplicity — most people want all their audio coming from the same place. But it falls apart the moment you want different apps on different outputs.</p>

<h2>The aggregate device workaround</h2>

<p>macOS's Audio MIDI Setup (found in Applications → Utilities) lets you create an "Aggregate Device" that combines multiple outputs into one. However, an aggregate device sends the <em>same audio</em> to all combined outputs — it doesn't let you choose which app goes to which output. It's designed for multi-speaker setups, not per-app routing.</p>

<h2>The multi-output device workaround</h2>

<p>Similar to aggregate devices, you can create a "Multi-Output Device" in Audio MIDI Setup. This sends identical audio to multiple outputs simultaneously. Again, it's the same audio everywhere — you can't route Spotify to speakers and Zoom to headphones this way.</p>

<h2>What actually works: per-app audio routing apps</h2>

<p>To truly route different apps to different output devices, you need a third-party audio routing app that intercepts each app's audio and sends it to the output you specify. Apps like SoundSource (from Rogue Amoeba) support this — they let you assign specific output devices to individual apps.</p>

<h2>A simpler approach: volume-based separation</h2>

<p>If your main goal is to hear your call clearly over your music (rather than routing them to physically different devices), per-app volume control solves the problem more simply.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives every app its own volume slider. During a call, you can:</p>

<ul>
  <li>Set Zoom/Teams/FaceTime to <strong>100%</strong></li>
  <li>Lower Spotify to <strong>20%</strong></li>
  <li>Mute everything else</li>
</ul>

<p>Your call is crystal clear. Music is a subtle background. No device switching needed.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing Zoom at full volume and Spotify lowered during a call on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Even better: SoundDial's <strong>auto-ducking</strong> does this automatically. When you join a call, it detects your microphone activating and lowers all background apps to a level you configure (default 30%). When the call ends, everything returns to normal. No manual slider adjustment needed.</p>

<p>For most people, this solves the actual problem — "I can't hear my call over my music" — without the complexity of routing different apps to different physical devices.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac Volume Keeps Changing By Itself: How to Fix It",
    description:
      "Your Mac's volume randomly jumps up, drops down, or resets to a different level. Here's every known cause and how to stop it.",
    date: "2026-05-18",
    readTime: "6 min čítania",
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
    title: "Best Volume Mixer Apps for Mac in 2026",
    description:
      "A no-nonsense comparison of every Mac app that gives you per-app volume control. Features, pricing, and which one is actually worth using.",
    date: "2026-06-12",
    readTime: "10 min čítania",
    content: `
<p>macOS doesn't have a built-in volume mixer. If you want to control the volume of individual apps — turn down Spotify without affecting Zoom, mute Slack without muting everything — you need a third-party app.</p>

<p>There are several options. This guide compares the most notable ones based on features, pricing, compatibility, and actual usability. No affiliate links, no sponsored picks.</p>

<h2>What you should look for</h2>

<p>Before comparing apps, here's what matters in a Mac volume mixer:</p>

<ul>
  <li><strong>Per-app volume sliders</strong> — independent control for every running app</li>
  <li><strong>Volume range</strong> — can you go below 100% AND above 100% (boost)?</li>
  <li><strong>Per-app mute</strong> — silence one app without touching its volume position</li>
  <li><strong>Profiles</strong> — save and switch between volume configurations</li>
  <li><strong>Auto-ducking</strong> — automatically lower music during calls</li>
  <li><strong>Menu bar integration</strong> — quick access without switching apps</li>
  <li><strong>macOS compatibility</strong> — works on the latest macOS version</li>
  <li><strong>Pricing model</strong> — one-time purchase vs. subscription</li>
</ul>

<h2>The options</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> is a native macOS menu bar app focused on doing one thing well: per-app volume control.</p>

<ul>
  <li><strong>Per-app volume:</strong> Yes, 0% to 200%</li>
  <li><strong>Per-app mute:</strong> Yes, one-click</li>
  <li><strong>Volume boost:</strong> Yes, up to 200%</li>
  <li><strong>Profiles:</strong> Yes, with custom names and icons</li>
  <li><strong>Auto-ducking:</strong> Yes, with configurable duck level</li>
  <li><strong>Keyboard shortcuts:</strong> Yes (toggle mixer, mute all)</li>
  <li><strong>Output device switching:</strong> Yes, from the same panel</li>
  <li><strong>Volume memory:</strong> Yes, remembers each app's volume between restarts</li>
  <li><strong>Price:</strong> €14.99 one-time purchase (no subscription) — less than half the price of SoundSource</li>
  <li><strong>Requires:</strong> macOS 14.2+</li>
  <li><strong>Available on:</strong> Mac App Store (Apple-reviewed, sandboxed, no system drivers)</li>
</ul>

<p>SoundDial uses Apple's modern Core Audio Tap API for clean per-process audio control. It's lightweight, runs entirely in the menu bar, and doesn't require complex setup. At €14.99, it's significantly cheaper than SoundSource ($39) while including features SoundSource lacks — volume profiles and auto-ducking. And because it's on the Mac App Store, it's Apple-reviewed, sandboxed, and installs cleanly without downloading DMGs or installing system audio drivers.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial per-app volume mixer showing individual app volume sliders on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>SoundSource (Rogue Amoeba)</h3>

<p>SoundSource is one of the oldest and most established Mac audio utilities. It's powerful and feature-rich, targeting power users and audio professionals.</p>

<ul>
  <li><strong>Per-app volume:</strong> Yes</li>
  <li><strong>Per-app mute:</strong> Yes</li>
  <li><strong>Volume boost:</strong> Yes</li>
  <li><strong>Per-app EQ:</strong> Yes (built-in and AU plugin support)</li>
  <li><strong>Per-app output routing:</strong> Yes (send different apps to different speakers)</li>
  <li><strong>Profiles:</strong> No built-in profile system</li>
  <li><strong>Auto-ducking:</strong> No</li>
  <li><strong>Price:</strong> $39 USD (one-time, major upgrades may require additional purchase)</li>
  <li><strong>Requires:</strong> macOS 12+ (installs a system audio driver)</li>
</ul>

<p>SoundSource is the most powerful option if you need per-app EQ and audio effect chains. It installs a system-level audio driver (ACE) to intercept audio, which makes it very capable but also more invasive. The $39 price point is higher than most alternatives, and there's no auto-ducking or profile system.</p>

<h3>Background Music (Free, Open Source)</h3>

<p>Background Music is a free, open-source app that provides basic per-app volume control. It's a popular choice because it's free.</p>

<ul>
  <li><strong>Per-app volume:</strong> Yes</li>
  <li><strong>Per-app mute:</strong> Yes</li>
  <li><strong>Volume boost:</strong> No (0-100% only)</li>
  <li><strong>Auto-pause music:</strong> Yes (pauses music when another app plays audio)</li>
  <li><strong>Profiles:</strong> No</li>
  <li><strong>Auto-ducking:</strong> No (auto-pause is different from auto-duck)</li>
  <li><strong>Price:</strong> Free</li>
  <li><strong>Requires:</strong> macOS 10.13+ (installs a virtual audio device)</li>
</ul>

<p>Background Music is a solid free option for basic per-app volume. However, it hasn't been consistently updated for newer macOS versions. Users report issues on macOS Sequoia and Tahoe — audio glitches, the virtual audio device failing to install, or the app not detecting some applications. It also can't boost volume past 100%, has no profiles, and no auto-ducking.</p>

<h3>eqMac</h3>

<p>eqMac is primarily an equalizer app that also includes some volume mixing capabilities.</p>

<ul>
  <li><strong>Per-app volume:</strong> Limited (focused on EQ, not mixing)</li>
  <li><strong>System-wide EQ:</strong> Yes, with multiple band options</li>
  <li><strong>Volume boost:</strong> Yes</li>
  <li><strong>Profiles:</strong> EQ presets (not volume profiles)</li>
  <li><strong>Auto-ducking:</strong> No</li>
  <li><strong>Price:</strong> Free tier + Pro subscription</li>
  <li><strong>Requires:</strong> macOS 10.14+</li>
</ul>

<p>eqMac is the better choice if your primary need is system-wide equalization (bass boost, treble adjustment, etc.) rather than per-app volume control. Its volume mixing capabilities are secondary to its EQ features.</p>

<h2>Quick comparison table</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Feature</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Background Music</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app volume</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume boost (200%)</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume profiles</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app EQ</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app output routing</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Keyboard shortcuts</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">System driver required</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
  <td style="text-align:center;padding:10px 12px;">Yes</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Price</td>
  <td style="text-align:center;padding:10px 12px;">One-time</td>
  <td style="text-align:center;padding:10px 12px;">$39</td>
  <td style="text-align:center;padding:10px 12px;">Free</td>
</tr>
</tbody>
</table>

<h2>Which one should you pick?</h2>

<ul>
  <li><strong>If you want per-app volume control, profiles, and auto-ducking:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — the most complete volume mixer for the price, with features (profiles, auto-ducking) that even more expensive alternatives lack.</li>
  <li><strong>If you need per-app EQ and audio routing:</strong> SoundSource — the most powerful option, aimed at audio professionals who need effect chains and per-app output routing.</li>
  <li><strong>If you want something free and basic:</strong> Background Music — decent for simple per-app volume, but can have compatibility issues on newer macOS versions and lacks boost/profiles/ducking.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube Too Quiet in Safari or Chrome on Mac? Fix It Instantly",
    description:
      "Some YouTube videos are barely audible even at max volume. Here's why browser audio is often quieter than other apps — and how to boost it past 100% on Mac.",
    date: "2026-05-22",
    readTime: "5 min čítania",
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
    description:
      "Slack pings and macOS alerts are painfully loud in your headphones while your music is fine. Here's why notification volume is different — and how to tame it.",
    date: "2026-05-25",
    readTime: "5 min čítania",
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
    title: "How to Stop Zoom from Lowering Your Music on Mac",
    description:
      "Every time you join a Zoom call, your music drops or disappears. Here's why it happens and how to control what gets quieter during calls — on your terms.",
    date: "2026-05-28",
    readTime: "6 min čítania",
    content: `
<p>You join a Zoom call. Spotify was playing at a comfortable volume. The call connects and — your music vanishes or drops to almost nothing. You didn't touch anything. Zoom (or macOS) decided to lower your music for you, without asking.</p>

<p>This drives people crazy because it's invisible and automatic. You didn't mute anything. You didn't adjust a slider. Something in the system decided your music should be quieter, and you have no obvious way to control it.</p>

<p>Here's what's actually happening and how to take back control.</p>

<h2>Why your music gets quieter during Zoom calls</h2>

<p>There are two possible causes:</p>

<h3>1. Zoom's built-in audio ducking</h3>
<p>Zoom has its own audio processing that can affect other audio on your system. In some configurations, Zoom reduces system audio when it activates your microphone, so the call audio is clearer. This isn't always obvious in Zoom's settings.</p>

<p>Check Zoom → Settings → Audio:</p>
<ul>
  <li>Look for any "Automatically adjust microphone volume" setting and try disabling it</li>
  <li>Check "Suppress background noise" — this processes audio and can affect perceived volume</li>
  <li>Make sure "Use separate audio device for simultaneous interpretation" is unchecked unless you need it</li>
</ul>

<h3>2. macOS codec switching</h3>
<p>When Zoom activates your microphone (especially with Bluetooth headphones like AirPods), macOS switches from the high-quality AAC audio codec to the lower-quality SCO codec. This codec change often reduces overall audio volume and quality. It's not Zoom's fault specifically — it happens with any app that uses the microphone over Bluetooth.</p>

<p>If you're using AirPods or other Bluetooth headphones and the volume drops when a call starts, this is likely the cause.</p>

<h2>Built-in fixes</h2>

<h3>Use wired headphones</h3>
<p>The Bluetooth codec switching issue disappears entirely with wired headphones. A USB-C headphone adapter or a headset with a built-in microphone avoids the AAC→SCO switch completely. Audio quality stays consistent before, during, and after calls.</p>

<h3>Use a separate microphone</h3>
<p>If you use your Mac's built-in microphone (or an external USB mic) instead of your AirPods' microphone, macOS doesn't need to switch the Bluetooth codec. Set your input device to the built-in mic in System Settings → Sound → Input, while keeping AirPods as your output. This way AirPods stay in AAC mode and volume is unaffected.</p>

<h3>Adjust Zoom's audio settings</h3>
<p>In Zoom → Settings → Audio, experiment with disabling automatic microphone adjustment and background noise suppression. These features can interfere with other apps' audio levels.</p>

<h2>The real fix: auto-ducking on your terms</h2>

<p>The fundamental problem is that you have no control over <em>how much</em> your music is lowered during calls. The system makes that decision for you, and it's usually too aggressive — music drops to nearly zero instead of a comfortable background level.</p>

<p>What you actually want is configurable auto-ducking: "when I'm on a call, lower my music to 25% — not zero, not 50%, exactly 25%."</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> gives you exactly this. Its auto-ducking feature monitors your microphone and automatically adjusts background audio when a call starts — but <strong>you control the duck level</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial auto-ducking settings — configurable volume reduction during Zoom calls on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>How it works</h3>
<ol>
  <li>You set your preferred duck level (10% to 80%)</li>
  <li>You join a Zoom call — your microphone activates</li>
  <li>SoundDial detects the call and lowers background apps to your configured level</li>
  <li>Your call audio stays at full volume</li>
  <li>You hang up — all apps return to their previous volume</li>
</ol>

<p>The difference from the Zoom/macOS approach:</p>
<ul>
  <li><strong>You choose the level.</strong> 30% is a good default — music is audible but doesn't interfere. You can adjust anywhere from 10% (nearly silent) to 80% (barely reduced).</li>
  <li><strong>It restores perfectly.</strong> When the call ends, every app comes back to exactly where it was.</li>
  <li><strong>It works with all communication apps.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>You can disable it.</strong> If you want to manage volume manually for a specific call, just turn off auto-ducking in SoundDial's settings.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "AirPods Volume Too Low on Mac? Every Fix Explained",
    description:
      "AirPods sound quiet on your Mac even at full volume? Here are all the causes — from headphone safety limits to Bluetooth quirks — and how to fix them.",
    date: "2026-06-08",
    readTime: "7 min čítania",
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
    description:
      "Spotify at max volume but still too quiet on your Mac? This guide covers every cause — from Spotify's built-in limiter to macOS settings — and how to boost it past 100%.",
    date: "2026-06-11",
    readTime: "7 min čítania",
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
    title: "How to Separate Game Audio from Discord on Mac",
    description:
      "Game explosions drowning out your teammates on Discord? Here's how to independently control game audio and voice chat volume on macOS.",
    date: "2026-06-10",
    readTime: "6 min čítania",
    content: `
<p>You're gaming on your Mac. An explosion goes off in-game. Your Discord teammates are talking, but you can't hear them over the gunfire. You turn down the volume — now Discord is quieter too. You turn it back up — the explosions are deafening again.</p>

<p>On Windows, you'd open the volume mixer, turn the game down to 40%, and leave Discord at 100%. On Mac, you can't. macOS gives you one volume slider for everything, so game audio and voice chat are permanently linked.</p>

<p>This guide shows you how to get independent volume control for your game and Discord (or any voice chat) on Mac.</p>

<h2>Why this is a Mac-specific problem</h2>

<p>Windows has had a built-in volume mixer since 2006 that lets you control every app's volume independently. macOS has never added this feature. Every app's audio gets mixed into a single stream, and the only control you have is one master slider that affects everything equally.</p>

<p>This means:</p>
<ul>
  <li>If your game is too loud, turning it down also turns down Discord</li>
  <li>If Discord is too quiet, turning it up also turns up the game</li>
  <li>You can't find a balance because both apps are locked to the same volume</li>
</ul>

<h2>The workarounds that don't really work</h2>

<h3>Use in-game volume settings</h3>
<p>Most games have an audio settings menu where you can lower the master volume, music, sound effects, and voice chat independently. This helps, but you're changing settings inside the game — meaning you have to pause gameplay, navigate menus, and adjust every time conditions change. And if you switch games, you start over.</p>

<h3>Use Discord's volume controls</h3>
<p>Discord lets you adjust the output volume in Settings → Voice & Video, and you can adjust individual users' volumes by right-clicking their name. But this controls Discord's internal mix, not its volume relative to other apps. If the game is too loud, making Discord louder internally doesn't help because the system volume affects both equally.</p>

<h3>Use different output devices</h3>
<p>Some people try routing game audio to speakers and Discord to headphones (or vice versa). macOS doesn't make this easy — you'd need a virtual audio device and manual per-app routing. And wearing headphones with speakers playing simultaneously is awkward at best.</p>

<h2>The actual solution: per-app volume control</h2>

<p>What you need is the ability to set your game's volume independently from Discord's volume. This is exactly what a per-app volume mixer does.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sits in your menu bar and gives every app its own volume slider. You can set your game to 35% and Discord to 100% — or whatever ratio works for you. Change one and the other stays put.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing independent volume sliders for a game and Discord on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Typical gaming setup</h3>
<ul>
  <li><strong>Game</strong> — 30-50% (loud enough for immersion, not overwhelming)</li>
  <li><strong>Discord / voice chat</strong> — 90-100% (always clearly audible over game audio)</li>
  <li><strong>Spotify / music</strong> — 15-25% (subtle background, doesn't interfere)</li>
  <li><strong>Browser</strong> — muted (no surprise auto-play videos)</li>
  <li><strong>Slack / notifications</strong> — muted (focus time)</li>
</ul>

<h3>Save it as a profile</h3>
<p>SoundDial's <strong>volume profiles</strong> let you save this configuration and apply it with one click. Create a "Gaming" profile with your preferred game/Discord balance, a "Work" profile for music and calls, and switch between them instantly. No re-adjusting sliders every time you sit down to play.</p>

<h3>Volume boost for quiet voice chat</h3>
<p>Sometimes the problem isn't that the game is too loud — it's that Discord is too quiet. Some teammates have bad mics, or Discord's output is lower than other apps. SoundDial lets you boost any app's volume up to <strong>200%</strong>, so you can amplify Discord beyond its normal maximum without touching the game volume.</p>

<h2>Works with any game and any voice chat</h2>

<p>SoundDial works with every app that produces audio on macOS. It doesn't matter if you're playing through Steam, the App Store, Epic Games, or a browser game. It doesn't matter if you're using Discord, TeamSpeak, Mumble, or FaceTime. If it makes sound, SoundDial can control it.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Why Doesn't Mac Have a Volume Mixer Like Windows?",
    description:
      "Windows has had per-app volume control since 2006. It's 2026 and macOS still doesn't. Here's the real reason — and how to get one anyway.",
    date: "2026-06-09",
    readTime: "6 min čítania",
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
    description:
      "Your Mac is at full volume and it's still too quiet. Here's why that happens and how to amplify audio up to 200% without external speakers.",
    date: "2026-06-07",
    readTime: "8 min čítania",
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
    title: "How to Automatically Lower Music During Zoom Calls on Mac",
    description:
      "Every time a Zoom call starts, you scramble to pause Spotify. There's a better way — auto-ducking lowers your music automatically when your mic activates.",
    date: "2026-06-05",
    readTime: "7 min čítania",
    content: `
<p>The call starts. You're sharing your screen. Your music is still blasting. You frantically switch to Spotify, hit pause, switch back to Zoom — but everyone already heard ten seconds of your playlist. It happens to everyone, and it happens because macOS has no connection between "a call just started" and "maybe lower the music."</p>

<p>On some phones, this is automatic — music pauses or ducks when a call comes in. On Mac, you're on your own. Unless you set up auto-ducking.</p>

<h2>What is audio ducking?</h2>

<p><strong>Audio ducking</strong> means automatically lowering the volume of background audio when something more important is happening — like a voice call. The term comes from broadcast engineering, where background music "ducks under" the announcer's voice.</p>

<p>In practice, it works like this:</p>
<ol>
  <li>You're listening to music at 50% volume</li>
  <li>You join a Zoom call</li>
  <li>Your music automatically drops to 15%</li>
  <li>You can hear the call clearly without manually adjusting anything</li>
  <li>The call ends</li>
  <li>Your music automatically returns to 50%</li>
</ol>

<p>No switching apps. No pausing. No forgetting to unmute your music after the call. It's fully automatic.</p>

<h2>Does macOS have built-in audio ducking?</h2>

<p>No. macOS has no automatic audio ducking feature. There's nothing in System Settings, Accessibility, or Focus modes that connects "microphone is active" with "lower background audio." Apple simply hasn't built this.</p>

<p>There's an Accessibility setting called "Play stereo audio as mono" and options for visual flash alerts, but nothing that automatically adjusts volume based on whether you're in a call.</p>

<h2>The manual alternatives (and why they're painful)</h2>

<h3>Pause music manually before every call</h3>
<p>This is what most people do. It works — until you forget. Or until someone calls unexpectedly. Or until you have back-to-back calls and you're pausing and unpausing Spotify twelve times a day. It also means no background music during calls, even when you'd want it at a low volume.</p>

<h3>Use Focus mode to silence everything</h3>
<p>You could create a "Meeting" Focus mode that blocks notification sounds. But Focus modes don't control media playback volume. Your music keeps playing at full blast even in Do Not Disturb mode — Focus only suppresses notifications.</p>

<h3>Set volume profiles manually</h3>
<p>Create a "call" setup where you manually lower everything except your communication app before each call. This works but requires you to remember and manually switch every time. And you have to switch back after.</p>

<h2>Auto-ducking with SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> has a built-in auto-ducking feature that does exactly what macOS should do natively. Here's how it works:</p>

<h3>How it detects calls</h3>
<p>SoundDial monitors your Mac's microphone status — the same indicator that shows the orange dot in your menu bar when an app is using your mic. When it detects that a communication app has activated your microphone, it knows a call has started.</p>

<p>It works with all major communication apps:</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Slack</strong> (huddles and calls)</li>
  <li><strong>Google Meet</strong> (via Chrome)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>What happens when a call starts</h3>
<p>The moment your microphone activates for a call, SoundDial automatically reduces the volume of all non-communication apps to a level you configure — the default is 30%. Your call audio stays at full volume. Background music drops to a subtle level. Notification sounds get quiet.</p>

<p>A small green indicator appears in SoundDial's header to confirm auto-ducking is active.</p>

<h3>What happens when the call ends</h3>
<p>When you hang up and the microphone deactivates, SoundDial restores all app volumes to exactly where they were before the call started. Your music comes back up to 50% (or wherever you had it). No manual adjustment needed.</p>

<h3>Configuring the duck level</h3>
<p>In SoundDial's settings, you can adjust the <strong>duck level</strong> — how much background audio is reduced during a call. The slider ranges from 10% (barely audible) to 80% (still quite present). The default of 30% works well for most people: music is noticeable but doesn't interfere with conversation.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial auto-ducking feature automatically lowering music volume during a Zoom call on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Why auto-ducking is better than pausing</h2>

<p>Pausing music before a call seems simple, but auto-ducking is better in several ways:</p>

<ul>
  <li><strong>It's automatic.</strong> You never forget. No scrambling when an unexpected call comes in.</li>
  <li><strong>You keep background music.</strong> Many people prefer quiet background music during calls rather than silence. Auto-ducking lets you keep it at a comfortable level.</li>
  <li><strong>It handles multiple apps.</strong> It's not just music — notification sounds, browser tabs, and any other audio sources all get ducked simultaneously.</li>
  <li><strong>It restores perfectly.</strong> When the call ends, every app returns to its exact previous volume. No re-adjusting.</li>
  <li><strong>It works for back-to-back calls.</strong> If you have three meetings in a row, auto-ducking handles all of them without you touching anything.</li>
</ul>

<h2>Setup in under a minute</h2>

<ol>
  <li>Install <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial from the Mac App Store</a></li>
  <li>Open Settings → Auto-Duck tab</li>
  <li>Enable auto-ducking</li>
  <li>Adjust the duck level slider to your preference</li>
  <li>That's it — auto-ducking is active</li>
</ol>

<p>The next time you join a Zoom, Teams, or FaceTime call, your background audio will automatically lower. When you hang up, it comes back. One-time purchase, no subscription.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "How to Mute One App on Mac Without Muting Everything",
    description:
      "Slack is pinging. You're on a call. You want to mute Slack but keep hearing your call. macOS doesn't let you — here's how to do it anyway.",
    date: "2026-06-03",
    readTime: "6 min čítania",
    content: `
<p>You're on a Zoom call. Slack keeps making notification sounds. A YouTube tab you forgot about starts auto-playing. You hit the mute key — and now you can't hear your call either. macOS mutes <em>everything</em>. There's no built-in way to mute just one app.</p>

<p>On Windows, you'd right-click the speaker icon, open the volume mixer, and click the mute button next to Slack. Done. Slack is silent, everything else keeps playing. macOS has no equivalent.</p>

<p>This guide covers every method available to mute a specific app on your Mac — from built-in workarounds to the one solution that actually works like a proper mute button.</p>

<h2>Why macOS can't mute individual apps</h2>

<p>macOS treats audio as a single stream. Every app's audio gets mixed together before it reaches your speakers, and the only volume control Apple gives you operates on that final mixed output. There's no way to reach into that mix and silence one app without affecting the rest.</p>

<p>This isn't a hardware limitation — it's a software design choice. macOS's Core Audio framework supports per-process audio control at the API level. Apple simply hasn't built a user-facing way to access it.</p>

<h2>Built-in workarounds (and their limits)</h2>

<h3>1. Turn off notifications for the app</h3>
<p>Go to <strong>System Settings → Notifications</strong> and find the app you want to silence. You can disable sounds for its notifications, or turn off notifications entirely.</p>
<p><strong>The catch:</strong> This only works for notification sounds. If the app makes other sounds — media playback, call audio, in-app sounds — this won't touch them. And you lose visual notifications too, not just sound.</p>

<h3>2. Use Focus mode</h3>
<p>macOS Focus modes (Do Not Disturb, Work, Personal, etc.) can suppress notification sounds from specific apps. You can configure which apps are allowed to notify you in each Focus mode.</p>
<p><strong>The catch:</strong> Focus modes are about notifications, not audio. They won't mute a Slack huddle, a browser tab playing audio, or any media playback. They also require upfront configuration for each mode — you can't just "mute this app right now."</p>

<h3>3. Close the app</h3>
<p>The nuclear option. If you quit Slack entirely, it can't make sounds. Obviously this means you also can't see any messages until you reopen it.</p>
<p><strong>The catch:</strong> You don't want to quit the app — you want to <em>keep using it</em> without hearing it. There's a huge difference between "mute" and "close."</p>

<h3>4. Use the app's own settings</h3>
<p>Some apps have a "mute sounds" or "mute notifications" setting buried somewhere in their preferences. Slack has it under Preferences → Notifications → Sound & appearance. Spotify has a speaker icon in the player.</p>
<p><strong>The catch:</strong> You have to find and navigate each app's settings individually. Many apps don't have this option at all. And switching between "muted" and "unmuted" means diving back into preferences every time, instead of clicking one button.</p>

<h2>The real solution: a per-app mute button</h2>

<p>What you actually want is dead simple: a mute button next to each app that silences it instantly, without affecting anything else. Click to mute, click again to unmute. The app keeps running, you keep seeing its content — you just don't hear it.</p>

<p>This is exactly what a per-app volume mixer does. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sits in your menu bar and shows every running app with its own volume slider and mute button.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing per-app mute buttons for each application in the macOS menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>To mute one app:</p>
<ol>
  <li>Click the SoundDial icon in your menu bar</li>
  <li>Find the app you want to mute</li>
  <li>Click the speaker icon next to it</li>
</ol>

<p>That's it. The app is muted. Everything else keeps playing at whatever volume it was. Click the speaker icon again to unmute — the volume returns to exactly where it was before.</p>

<h2>Beyond muting: per-app volume control</h2>

<p>Once you have a per-app mixer, you realize that muting is just the extreme end of what you actually want. Most of the time, you don't want to fully silence an app — you want to make it <em>quieter</em>.</p>

<ul>
  <li>Slack notifications at 15% — subtle enough to not interrupt, present enough to notice</li>
  <li>Music at 30% — background level that doesn't compete with conversation</li>
  <li>Browser at 60% — comfortable for video playback</li>
  <li>Zoom at 100% — full volume for the call that matters</li>
</ul>

<p>SoundDial gives each app a slider from 0% to 200%. You can make apps quieter than their built-in minimum or louder than their built-in maximum. And with <strong>volume profiles</strong>, you can save your preferred configuration and switch between presets — "Meeting" mode, "Focus" mode, "Music" mode — with a single click.</p>

<p>The auto-ducking feature goes even further: when you start a call, SoundDial automatically lowers everything except your communication app. When the call ends, everything comes back up. You never touch a slider.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time purchase, no subscription, macOS 14.2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Volume Mixer for Mac: The Missing Feature macOS Still Doesn't Have",
    description:
      "Windows has had a volume mixer since 2006. Here's why macOS still doesn't — and the best way to get per-app volume control on your Mac in 2026.",
    date: "2026-06-01",
    readTime: "9 min čítania",
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
    title: "Najlepšia alternatíva Background Music pre Mac (2026)",
    description: "Background Music sa pokazí na novšom macOS? Najspoľahlivejšou alternatívou miešania hlasitosti pre jednotlivé aplikácie je SoundDial – aplikácia Mac App Store v karanténe s podporou a profilmi.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak Background Music prestal fungovať po aktualizácii macOS, najspoľahlivejšou alternatívou je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — panel s ponukami pre jednotlivé aplikácie zo Mac App Store. Každej aplikácii dáva vlastný posuvník hlasitosti, pridáva stlmenie, zosilnenie, profily hlasitosti a automatické znižovanie hlasitosti a je plne izolované a skontrolované spoločnosťou Apple, takže pri ďalšom vydaní macOS nie sú potrebné žiadne zvukové ovládače.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – najlepšia alternatíva Background Music pre Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo sa Background Music pokazí na novšom macOS</h2>

<p>Background Music je skutočne šikovný bezplatný projekt s otvoreným zdrojom. Používateľom Mac to dalo niečo, čo Apple nikdy nemal: mixér hlasitosti pre jednotlivé aplikácie, aký má Windows už roky. Ale jeho dizajn je tiež dôvodom, prečo stále zlyháva.</p>

<p>Na smerovanie a ovládanie zvuku nainštaluje Background Music virtuálne zvukové zariadenie – ovládač na systémovej úrovni, ktorý zachytáva zvuk vášho Mac. Tento prístup fungoval dobre na staršom macOS, ale každé hlavné vydanie sprísňuje zabezpečenie rozšírení jadra a zvuku. Bežné príznaky, ktoré používatelia hlásia:</p>

<ul>
<li>Po inštalácii alebo po aktualizácii operačného systému nie je žiadny zvuk.</li>
<li>Virtuálne zariadenie sa nepodarí načítať, takže smerovanie zvuku sa ticho zastaví.</li>
<li>Na obnovenie aplikácie je potrebné preinštalovať, reštartovať alebo manuálne odstrániť ovládač.</li>
<li>Vývoj je riadený komunitou a tempom dobrovoľníkov, takže opravy nového macOS môžu zaostávať.</li>
</ul>

<p>Nič z toho nerobí Background Music „zlým“. Znamená to len, že bezplatný nástroj založený na ovládačoch je svojou povahou krehký, a ak sa každý deň spoliehate na objem jednotlivých aplikácií, táto krehkosť rýchlo zostarne.</p>

<h2>Čo hľadať pri náhrade</h2>

<p>Pred výberom akejkoľvek alternatívy sa rozhodnite, čo skutočne potrebujete:</p>

<ul>
<li><strong>Spoľahlivosť v rámci aktualizácií macOS.</strong> Ak nainštaluje jadro alebo rozšírenie zvuku, počítajte s občasným rozbitím.</li>
<li><strong>Skutočné ovládanie podľa aplikácie.</strong> Základom je nezávislá hlasitosť a stlmenie pre každú aplikáciu.</li>
<li><strong>Boost.</strong> Niektoré aplikácie (nástroje na tiché stretnutia, určité prehliadače) sú jednoducho príliš tiché – chcete sa dostať cez 100 %.</li>
<li><strong>Pohodlné funkcie.</strong> Profily a automatické uhýbanie sú to, čo premení nástroj na niečo, čo máte otvorené celý deň.</li>
<li><strong>Bezpečná inštalácia.</strong> Aplikácia Mac App Store v karanténe sa nemôže dotknúť vnútorných častí systému, takže odinštalovanie je čisté a aktualizácie sú automatické.</li>
</ul>

<h2>Prečo je SoundDial spoľahlivý výber</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bol vytvorený tak, aby presne vyriešil problém, s ktorým sa stretávajú používatelia Background Music: chcú objem pre jednotlivé aplikácie, ale nechcú strážiť vodiča. Žije vo vašom paneli s ponukami a dobre robí základnú prácu:</p>

<ul>
<li><strong>Nezávislá hlasitosť pre každú aplikáciu</strong>so stlmením pre jednotlivé aplikácie na rovnakom paneli.</li>
<li><strong>Zosilnenie podľa aplikácie</strong> aby boli tiché aplikácie dostatočne hlasné, aby ich skutočne počuli.</li>
<li><strong>Objemové profily</strong> — uložiť mix (povedzme „stretnutie“ alebo „hranie“) a okamžite prepínať namiesto presúvania posúvačov zakaždým.</li>
<li><strong>Auto-ducking</strong>, takže zvuk na pozadí sa automaticky zníži, keď by mal.</li>
<li><strong>Rýchle prepínanie výstupov</strong> medzi reproduktormi, slúchadlami a inými zariadeniami.</li>
</ul>

<p>Väčší rozdiel je v spôsobe inštalácie. SoundDial sa dodáva prostredníctvom Mac App Store, čo znamená, že je skontrolovaný spoločnosťou Apple a v karanténe. Neexistuje žiadny DMG na pretiahnutie, žiadny zvukový ovládač alebo systémové rozšírenie a žiadny prístup k jadru. To je jediný najdôležitejší dôvod, prečo sa nezlomí tak, ako to robí Background Music, keď príde nový macOS – nie je zapojený do častí systému, ktoré Apple neustále blokuje.</p>

<p>To stojí <strong>14,99 € jednorazovo</strong>. Nie je to zadarmo, ale nie je tam žiadne predplatné a platíte za niečo udržiavané a bezpečné na inštaláciu.</p>

<h2>SoundDial vs. Background Music vs. bezplatné nástroje</h2>

<p>Background Music nie je vašou jedinou bezplatnou možnosťou, takže tu je poctivý pozemok:</p>

<ul>
<li><strong>Background Music (zadarmo, open-source):</strong> objem na aplikáciu, ale založený na ovládači, náchylný na zlomenie na novšom macOS a chýba mu podpora, profily a automatické stláčanie.</li>
<li><strong>FineTune (zadarmo, open-source):</strong> ľahká aplikácia na úpravu hlasitosti pre jednotlivé aplikácie. Dobré, ak je zadarmo, je vašou jedinou požiadavkou, ale tenké na doplnky.</li>
<li><strong>eqMac (zadarmo):</strong> primárne systémový ekvalizér a zosilňovač, nie skutočný mixér pre jednotlivé aplikácie.</li>
<li><strong>SoundSource od Rogue Amoeba (~ 39 USD):</strong> možnosť profesionálnej úrovne s ekvalizérom pre jednotlivé aplikácie a úplným výstupným smerovaním. Vynikajúce, ale je to viac ako dvojnásobok ceny SoundDial a stále vyžaduje stiahnutie plus ovládač na zachytávanie zvuku.</li>
<li><strong>SoundDial (14,99 EUR, Mac App Store):</strong> stredná cesta – skutočná hlasitosť jednotlivých aplikácií, stlmenie, zosilnenie, profily a skracovanie, dodávané ako čistá izolovaná inštalácia bez ovládačov.</li>
</ul>

<p>Ak potrebujete EQ pre jednotlivé aplikácie alebo komplexné smerovanie štúdia, SoundSource stojí za peniaze navyše. Ak chcete bezplatný drotársky nástroj a dokážete tolerovať občasné rozbitie, FineTune alebo Background Music vám poslúži. Ak je však vaším cieľom „dať každej aplikácii jej vlastný objem a prestať ju rušiť pri každej aktualizácii macOS“, SoundDial zasiahne tento cieľ s čo najmenšími problémami.</p>

<h2>Kontext macOS, ktorý to vyžaduje</h2>

<p>Stojí za to povedať jasne: macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows má jeden už roky vo svojej objemovej ponuke, ale na Mac systémový posuvník ovláda všetko naraz. Táto medzera je hlavným dôvodom existencie nástrojov ako Background Music a SoundDial. Keďže to Apple nenapĺňa, praktickou otázkou je, ktorému prístupu tretej strany dôverujete – bezplatnému ovládaču, ktorý bojuje s OS, alebo aplikácii v karanténe, ktorá s ním spolupracuje.</p>

<p>Ste pripravení prestať bojovať s nefunkčnými zvukovými ovládačmi? Získajte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 € a spoľahlivo ovládajte hlasitosť každej aplikácie.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial: Ktorá aplikácia Mac Volume vyhráva?",
    description: "SoundSource (39 USD, pro-grade) oproti SoundDial (14,99 EUR, App Store). Porovnajte hlasitosť, zosilnenie, profily a automatické znižovanie hlasitosti jednotlivých aplikácií a vyberte si ten správny mixér Mac pre vás.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Ak chcete iba ovládanie hlasitosti pre jednotlivé aplikácie, ktoré sa inštaluje čisto a stojí menej, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je lepšia kúpa pre väčšinu ľudí: 14,99 € jednorazovo, od Mac App Store, s hlasitosťou na aplikáciu, stlmením, zosilnením, profilmi a automatickým znížením hlasitosti. Vyberte si SoundSource od Rogue Amoeba (~ 39 $) iba vtedy, ak konkrétne potrebujete EQ pre jednotlivé aplikácie a pokročilé smerovanie výstupu.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial: Ktorá aplikácia Mac Volume vyhrá?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Krátka verzia</h2>
<p>macOS stále nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows ho má už roky, ale na Mac posúvač hlasitosti systému posúva všetko naraz. SoundSource aj SoundDial existujú, aby túto medzeru napravili. Len sa zameriavajú na rôznych kupujúcich.</p>
<ul>
<li><strong>SoundDial</strong> — 14,99 € jednorazovo, Mac App Store, aplikácia na lište menu. Nezávislá hlasitosť na aplikáciu, stlmenie podľa aplikácie, zosilnenie podľa aplikácie, uložené profily, automatické stlmenie a rýchle prepínanie výstupu. V karanténe a skontrolované spoločnosťou Apple, takže žiadna inštalácia ovládača.</li>
<li><strong>SoundSource</strong> — ~ 39 USD, priame stiahnutie zo Rogue Amoeba. Všetko vyššie plus ekvalizér pre jednotlivé aplikácie, pokročilé smerovanie výstupu a zvukové efekty. Vyžaduje inštaláciu malého ovládača na zachytávanie zvuku.</li>
</ul>

<h2>Cena a ako to kupujete</h2>
<p>Toto je najjasnejšie rozdelenie. SoundSource stojí zhruba 39 dolárov a predáva ho priamo Rogue Amoeba. SoundDial stojí 14,99 EUR ako jednorazový nákup na Mac App Store – o niečo viac ako tretina ceny.</p>
<p>Pretože <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodáva sa cez App Store, je v sandboxe, notársky overený a skontrolovaný spoločnosťou Apple. Kliknete na tlačidlo Získať, nainštaluje sa a je hotovo. Neexistuje žiadne pripojenie DMG, žiadne povolenia na udelenie komponentu susediacemu s jadrom a žiadny zvukový ovládač alebo rozšírenie systému. Funguje tiež spolu s bežným tokom aktualizácie App Store a synchronizuje sa s ostatnými Mac na rovnakom Apple ID.</p>
<p>SoundSource sa stiahne mimo App Store a nainštaluje ovládač na zachytávanie zvuku, aby mohol zachytiť a spracovať zvuk každej aplikácie. To odomyká jeho profesionálne funkcie, no znamená to aj ďalší krok inštalácie a komponent, ktorý žije hlbšie v systéme.</p>

<h2>Čo SoundSource robí, čo SoundDial nie</h2>
<p>SoundSource získava svoju cenu pre špecifický druh používateľov. Ak vás niektorá z týchto možností vystihuje, stojí to za peniaze navyše:</p>
<ul>
<li><strong>EQ podľa aplikácie.</strong> Chcete 10-pásmový ekvalizér na, povedzme, Spotify, zatiaľ čo Zoom necháte plochý. SoundDial robí hlasitosť, nie EQ.</li>
<li><strong>Pokročilé smerovanie výstupu.</strong> Odosielanie jednej aplikácie do reproduktorov a druhej do slúchadiel alebo špecifického rozhrania s jemným ovládaním.</li>
<li><strong>Zvukové efekty a doplnky.</strong> SoundSource môže hostiť efekty na základe jednotlivých aplikácií – skutočne profesionálne územie.</li>
</ul>
<p>Rogue Amoeba má dlhú a dôveryhodnú históriu. SoundSource je seriózny nástroj a má rovnakú cenu. Ak ste audio profík alebo náročný používateľ s viacerými výstupmi, je to tá správna voľba.</p>

<h2>Čo SoundDial robí lepšie pre každodenné použitie</h2>
<p>Väčšina ľudí, ktorí hľadajú „Mac volume mixer“, nepotrebuje EQ. Potrebujú jednu aplikáciu tichšiu ako druhú a nechcú bojovať s inštalatérom, aby ju získali. SoundDial to čisto pokrýva a pridáva niekoľko vecí, ktoré stojí za zmienku:</p>
<ul>
<li><strong>Zosilnenie podľa aplikácie.</strong> Niektoré aplikácie a videá sú príliš tiché aj pri 100 %. SoundDial dokáže posunúť jedinú aplikáciu nad svoj normálny strop, takže konečne bude počuť tiché stretnutie alebo podcast.</li>
<li><strong>Objemové profily.</strong> Uložte si úplné nastavenie – hudba je nízka, prehliadač je stlmený, volajte aplikáciu nahlas – a okamžite si ho vyvolajte. Skvelé na prepínanie medzi „zameraním“, „stretnutím“ a „hraním“ bez ťahania piatich posúvačov.</li>
<li><strong>Auto-ducking.</strong> Automaticky ponorte zvuk na pozadí (napríklad hudbu), keď sa spustí iný zdroj, aby sa upozornenia, hovory alebo video nezastavili.</li>
<li><strong>Rýchle prepínanie výstupov.</strong> Preskakujte medzi reproduktormi, slúchadlami a inými zariadeniami z panela s ponukami.</li>
</ul>
<p>To všetko sa spúšťa z rozbaľovacej ponuky na paneli s ponukami, takže po zvyšok času stačí kliknúť a z vašej tváre von.</p>

<h2>Bezplatné alternatívy, stručne</h2>
<p>V rovnakých vyhľadávaniach sa zobrazí niekoľko bezplatných možností. Oplatí sa o nich vedieť:</p>
<ul>
<li><strong>Background Music</strong> — bezplatný a open source, poskytuje základný objem pre jednotlivé aplikácie. Môže sa však zlomiť na novších vydaniach macOS a nemá žiadne zosilnenie, profily ani automatické sklopenie.</li>
<li><strong>FineTune</strong> — bezplatná aplikácia na hlasitosť panela s ponukami s otvoreným zdrojom. Jednoduché, ale s obmedzeným rozsahom.</li>
<li><strong>eqMac</strong> — bezplatný ekvalizér a zosilňovač systému, viac systémový nástroj EQ ako skutočný mixér pre jednotlivé aplikácie.</li>
</ul>
<p>Zadarmo je skvelé, ak to funguje pre vás. Kompromisom je kompatibilita a podpora: zvukové nástroje s otvoreným zdrojovým kódom môžu zaostávať za aktualizáciami macOS a funkcie ako profily a uhýbanie vo všeobecnosti neexistujú. Ak je vaše nastavenie dôležité pre váš pracovný deň, zaplatiť raz za niečo skontrolované a udržiavané je zvyčajne pokojnejšia cesta.</p>

<h2>Ktorý by ste si mali kúpiť?</h2>
<p>Odpovedzte na jednu otázku: potrebujete EQ pre každú aplikáciu alebo pokročilé smerovanie výstupu?</p>
<ul>
<li><strong>áno</strong> - kúpiť SoundSource. Je na to stvorený a ~39 $ je spravodlivých za profesionálny nástroj s motorom na úrovni vodiča.</li>
<li><strong>Nie, chcem len objem jednotlivých aplikácií, podporu a čistú inštaláciu</strong> - kúpiť SoundDial. Dostanete mixovanie, na ktorom skutočne záleží každý deň, plus profily a automatické stláčanie za 14,99 EUR a nulové problémy s vodičom.</li>
</ul>
<p>Pre veľkú väčšinu používateľov Mac je toto druhé vedro úprimnou odpoveďou. Platíte za ovládanie hlasitosti, nie za štúdio.</p>

<p><strong>Ste pripravení opraviť objem Mac jednoduchým spôsobom?</strong> Získajte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> — 14,99 EUR jednorazovo, bez ovládačov, bez DMG. Hlasitosť jednotlivých aplikácií, zvýšenie, profily a automatické zníženie na jedno kliknutie.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Lacnejšia alternatíva SoundSource pre objem jednotlivých aplikácií na Mac",
    description: "Chcete objem na aplikáciu v štýle SoundSource bez ceny 39 USD? SoundDial je 14,99 EUR Mac App Store panelový mixpult s podporou, profilmi a automatickým stláčaním.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak chcete na svojom Mac ovládať hlasitosť v štýle SoundSource pre jednotlivé aplikácie, ale 39 dolárov sa zdá byť strmých, najrýchlejšia spoľahlivá oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Je to 14,99 EUR jednorazový mix panel s ponukami od Mac App Store, ktorý každej aplikácii poskytuje vlastný posuvník hlasitosti, stlmenie a zosilnenie – plus profily a automatické stláčanie – bez potreby sťahovania alebo inštalácie ovládača zvuku.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – lacnejšia alternatíva SoundSource pre objem jednotlivých aplikácií na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo ľudia hľadajú alternatívu SoundSource</h2>
<p>SoundSource od Rogue Amoeba je vynikajúci softvér. Je to skutočne profesionálne: ekvalizéry pre jednotlivé aplikácie, zvukové efekty a smerovanie výstupu, ktoré vám umožní poslať jednu aplikáciu do slúchadiel a druhú do reproduktorov. Ale táto sila prichádza s dvoma trecími bodmi. Po prvé, cena - okolo 39 dolárov. Po druhé, nainštaluje ovládač na zachytávanie zvuku na systémovej úrovni mimo App Store, na čo sú niektorí ľudia na pracovnom stroji opatrní alebo jednoducho nechcú spravovať aktualizácie macOS.</p>
<p>Pre väčšinu ľudí je skutočná potreba oveľa jednoduchšia: vypnúť Spotify bez toho, aby ste sa dotkli hovoru Zoom, stlmiť hlučnú aplikáciu na karte prehliadača alebo zvýšiť tichý prehrávač videa na viac ako 100 %. Ak ste to vy, platíte profesionálne peniaze za funkcie, ktoré nikdy neotvoríte.</p>

<h2>Čo robí SoundDial – a čo to stojí</h2>
<p>SoundDial sa zameriava na prácu s objemom jednotlivých aplikácií a robí to čisto. Otvorte panel s ponukami a získate živý zoznam všetkého, čo vydáva zvuk, každý s vlastným ovládaním:</p>
<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — jeden posuvník na aplikáciu, upravený v reálnom čase.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — Okamžite stíšiť jednu aplikáciu bez pozastavenia čohokoľvek iného.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie</strong> — posuňte tiché aplikácie nad ich normálne maximum, keď je video alebo hovor príliš tichý.</li>
<li><strong>Objemové profily</strong> – uložte mix (napr. „Zameranie“, „Hry“, „Stretnutie“) a prepínajte jedným kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky ponorte ďalšie aplikácie, keď sa začne hrať niečo dôležitejšie.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — preskakovanie medzi reproduktormi, slúchadlami a inými zariadeniami z rovnakej ponuky.</li>
</ul>
<p>Cena je <strong>14,99 €, platí sa raz</strong> — žiadne predplatné. To je zhruba tretina nákladov na SoundSource vzhľadom na objemové funkcie, po ktorých väčšina používateľov skutočne siaha.</p>

<h2>Rozdiel App Store</h2>
<p>Pretože SoundDial sa dodáva cez <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, je to skontrolované spoločnosťou Apple a v karanténe. Neexistuje žiadny DMG na pretiahnutie, žiadne rozšírenie jadra alebo ovládač na zachytávanie zvuku na schválenie a žiadny samostatný aktualizátor. Nainštalujete ju ako ktorúkoľvek inú aplikáciu App Store a funguje to. Keď sa aktualizuje macOS, nebudete sa pýtať, či nízkoúrovňový audio komponent stále funguje.</p>
<blockquote>macOS stále nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows ho má už roky, ale na Mac je systémový objem všetko alebo nič – čo je presne medzera, ktorú tieto nástroje zapĺňajú.</blockquote>

<h2>Ako je to v porovnaní s bezplatnými možnosťami</h2>
<p>SoundSource nie je vašou jedinou alternatívou. Existujú bezplatné nástroje a je dôležité, aby ste o nich boli úprimní:</p>
<ul>
<li><strong>Background Music</strong> je bezplatná aplikácia s otvoreným zdrojom pre jednotlivé aplikácie. Funguje to pre mnohých ľudí, ale pri novších vydaniach macOS sa to môže zlomiť, aktualizácie sú nepravidelné a nemá to žiadnu podporu, žiadne profily a žiadne automatické stláčanie.</li>
<li><strong>FineTune</strong> je bezplatná aplikácia na hlasitosť v paneli s ponukami s otvoreným zdrojovým kódom – ľahká a praktická, ale opäť jej chýbajú funkcie profilu a zmenšovania.</li>
<li><strong>eqMac</strong> je bezplatný EQ a systémový zosilňovač. Je to skôr nástroj na ekvalizér/posilnenie než skutočný mixér pre jednotlivé aplikácie a nezameriava sa na jednotlivé posúvače aplikácií.</li>
</ul>
<p>Zadarmo je legitímna voľba. Kompromisom je spoľahlivosť a funkcie: audio nástroje s otvoreným zdrojovým kódom závisia od dobrovoľnej údržby a môžu zaostávať za zmenami macOS a žiadna z bezplatných možností nezdružuje profily plus automatické uhýbanie, ako to robí SoundDial. Ak je vaše nastavenie jednoduché a nevadí vám občasné rozbitie, môže stačiť bezplatná aplikácia. Ak chcete niečo, čo je udržiavané, pieskované a jednoducho funguje, za 14,99 € dostanete presne to.</p>

<h2>Sprievodca rýchlym rozhodovaním</h2>
<ul>
<li><strong>Potrebujete ekvalizér pre jednotlivé aplikácie, zvukové efekty a smerovanie jednej aplikácie do iného výstupného zariadenia</strong> → SoundSource stojí za svoju cenu. Nič to tu plne nenahradí.</li>
<li><strong>Potrebujete hlavne hlasitosť aplikácie, stlmenie, zosilnenie, profily a zníženie hlasitosti – bez ovládačov</strong> → SoundDial za 14,99 EUR je cenovo výhodnejšia voľba.</li>
<li><strong>Chcete zadarmo a nevadí vám riziko údržby</strong> → najprv vyskúšajte Background Music, FineTune alebo eqMac.</li>
</ul>

<h2>Nastavenie</h2>
<p>Spustenie trvá približne minútu:</p>
<ul>
<li>Nainštalujte SoundDial zo Mac App Store – žiadne externé sťahovanie.</li>
<li>Udeľte povolenie na zvuk, na ktoré vás macOS vyzve pri prvom spustení.</li>
<li>Prehrajte zvuk v niekoľkých aplikáciách a otvorte ikonu na paneli s ponukami; uvidíte každý s vlastným posúvačom.</li>
<li>Potiahnutím nastavíte úrovne, klepnutím stlmíte alebo posunutím nad 100 % zvýšite.</li>
<li>Uložte si nastavenie ako profil a zapnite automatické stlmenie, ak chcete, aby sa ostatné aplikácie počas hovorov alebo médií stlmili.</li>
</ul>
<p>To je celý pracovný postup – žiadne konfiguračné súbory, žiadne reštartovanie, žiadne rozšírenie systému.</p>

<h2>Spodný riadok</h2>
<p>SoundSource je výkonnejší nástroj, ale väčšina ľudí, ktorí ho hľadajú, chce iba objem podľa aplikácie, ktorý sa správa. SoundDial to poskytuje za približne tretinovú cenu, bezpečne sa dodáva cez App Store a navrch pridáva profily a automatické sklopenie – bez inštalácie jediného ovládača.</p>

<p>Ste pripravení ovládať hlasitosť každej aplikácie nezávisle? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> za 14,99 €, jednorazovo.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "FineTune Alternatíva pre Mac: Podporovaný mixér hlasitosti podľa aplikácie",
    description: "Vyskúšali ste bezplatnú aplikáciu na paneli s ponukami FineTune a chcete niečo udržiavané a bezpečné pre App Store? Tu je najlepšia alternatíva FineTune pre objem jednotlivých aplikácií na Mac.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak sa vám páčil FineTune, ale chcete niečo aktívne udržiavať a inštalovať z dôveryhodného zdroja, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je najrýchlejšia spoľahlivá oprava. Je to Mac App Store panel s ponukami pre jednotlivé aplikácie s nezávislým hlasitosťou, stlmením zvuku podľa aplikácie, zvýšením hlasitosti, uloženými profilmi a automatickým znížením hlasitosti. Po recenzii od spoločnosti Apple a v karanténe stojí raz 14,99 EUR bez inštalácie ovládačov.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – FineTune Alternatíva pre Mac: Podporovaný mixér hlasitosti podľa aplikácie" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo vôbec hľadať alternatívu FineTune?</h2>

<p>FineTune je pekný nápad: bezplatná aplikácia na paneli s ponukami s otvoreným zdrojovým kódom, ktorá vám umožňuje ovládať hlasitosť jednotlivých aplikácií na macOS, čo Apple stále odmieta zabudovať (Windows má mixér pre jednotlivé aplikácie už roky). Pre veľa ľudí to robí základnú prácu. Existujú však skutočné dôvody, prečo používatelia hľadajú niečo iné.</p>

<ul>
<li><strong>Údržba je neistá.</strong> Open-source hobby projekty žijú a umierajú vo voľnom čase jedného správcu. Keď macOS dodáva veľkú aktualizáciu, aplikácie súvisiace so zvukom sa často pokazia ako prvé a vy čakáte na dobrovoľnú opravu, ktorá nemusí nikdy prísť.</li>
<li><strong>Charakteristický strop.</strong> FineTune pokrýva objem jednotlivých aplikácií a nič viac. Ak chcete zvýšenie nad 100 %, uložené profily alebo automatické uhýbanie, musíte použiť iné nástroje.</li>
<li><strong>Dôvera a aktualizácie.</strong> Inštalácia surovej zostavy mimo App Store znamená žiadnu automatickú kontrolu, žiadne záruky sandboxu a manuálne aktualizácie, ktoré musíte sledovať sami.</li>
</ul>

<p>Nič z toho nerobí FineTune zlým. Znamená to len, že ak sa každý deň spoliehate na zvuk z jednotlivých aplikácií, pravdepodobne budete chcieť niečo s modelom podpory.</p>

<h2>Čo robí SoundDial inak</h2>

<p>SoundDial vychádza z rovnakej základnej myšlienky, mixéra s panelom ponúk s posuvným ovládačom pre každú spustenú aplikáciu, a potom ide ešte ďalej s funkciami, ktoré pokročilí používatelia skutočne požadujú.</p>

<ul>
<li><strong>Nezávislý objem na aplikáciu.</strong> Vypnite Spotify, udržujte hovor na plnej hlasitosti, úplne stlmte hlučnú aplikáciu na karte prehliadača, to všetko v jednej ponuke.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie.</strong> Posuňte tichú aplikáciu nad jej normálny strop, keď bol podcast alebo video zvládnuté príliš nízko. FineTune to nerobí.</li>
<li><strong>Objemové profily.</strong> Uložte si mix, „zamerajte sa“, „hranie“, „stretnutia“ a prepnite celé nastavenie jediným kliknutím namiesto posúvania piatich posúvačov.</li>
<li><strong>Auto-ducking.</strong> Automaticky znížte zvuk na pozadí, keď sa začne hrať niečo dôležitejšie, takže hudba pri prichádzajúcom hovore klesá.</li>
<li><strong>Rýchle prepínanie výstupov.</strong> Preskakujte medzi reproduktormi, slúchadlami a inými výstupmi bez toho, aby ste sa museli ponoriť do nastavení systému.</li>
</ul>

<p>Pretože <a href="https://apps.apple.com/app/id6772792641">SoundDial sa dodáva prostredníctvom Mac App Store</a>, je skontrolovaná spoločnosťou Apple a v karanténe, inštaluje sa čisto a aktualizuje sa rovnakým mechanizmom ako každá iná aplikácia App Store. Neexistuje žiadny DMG na pretiahnutie, žiadny zvukový ovládač alebo systémové rozšírenie a žiadna bezpečnostná výzva, ktorá by vás požiadala o povolenie komponentu na úrovni jadra.</p>

<h2>SoundDial vs. FineTune a ďalšie bezplatné nástroje</h2>

<p>FineTune nie je jediná bezplatná možnosť a pomáha úprimne vidieť celú krajinu.</p>

<ul>
<li><strong>FineTune</strong> — Bezplatný, open source, panel s ponukami pre každú aplikáciu. Jednoduché a ľahké, ale bez podpory, bez profilov, bez uhýbania a údržba závisí od komunity.</li>
<li><strong>Background Music</strong> - Bezplatný a otvorený zdroj, smeruje a upravuje zvuk pre jednotlivé aplikácie. Skutočne užitočné, ale na novších vydaniach macOS sa môže zlomiť a chýba mu podpora, profily a klesanie.</li>
<li><strong>eqMac</strong> — Voľný EQ a zosilňovač systému. Skvelé, ak chcete hlavne ekvalizér, ale nie je to mixér pre jednotlivé aplikácie.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> - Profesionálna možnosť za približne 39 dolárov s ekvalizérom pre aplikáciu a výstupným smerovaním. Vynikajúce, ale vyžaduje si to stiahnutie plus ovládač na zachytávanie zvuku a stojí to viac ako dvakrát toľko.</li>
<li><strong>SoundDial</strong> — 14,99 € jednorazovo, App Store-bezpečné, bez ovládačov. Pridáva zvýšenie, profily a automatické znižovanie k základom hlasitosti jednotlivých aplikácií.</li>
</ul>

<p>Úprimné zhrnutie: ak chcete úplne najlacnejšiu vec a potrebujete iba základný objem na aplikáciu, bezplatné nástroje môžu fungovať. Ak chcete EQ a smerovanie podľa aplikácie a nevadí vám zaplatiť a nainštalovať ovládač, SoundSource je ťažká váha. SoundDial sedí na sladkom mieste, je schopnejší ako bezplatné aplikácie, výrazne lacnejší ako SoundSource a bezpečnejší na inštaláciu, pretože ho Apple kontroluje a ukladá do karantény.</p>

<h2>Prechod zo FineTune</h2>

<p>Prepínanie trvá niekoľko minút a nie je tu žiadny čistiaci rituál.</p>

<ul>
<li>Nainštalujte SoundDial zo Mac App Store. Žiadny inštalačný program, žiadne schválenie ovládača, žiadny reštart.</li>
<li>Kliknutím na ikonu SoundDial na lište ponuky zobrazíte posúvač pre každú spustenú aplikáciu.</li>
<li>Nastavte si svoj každodenný mix a potom ho uložte ako profil, aby ste si ho mohli okamžite vyvolať.</li>
<li>Voliteľne zapnite automatické stlmenie zvuku, aby sa zvuk na pozadí ustúpil pre hovory a upozornenia.</li>
<li>Keď ste spokojní, ukončite FineTune. Keďže ani jedna aplikácia neinštaluje systémové ovládače, nie je potrebné nič odinštalovať.</li>
</ul>

<p>Ponecháte si to, čo sa vám páčilo na FineTune, čistom mixážnom paneli s ponukami, ktorý vám Apple nikdy nedal, a získate podporu, profily, zmenšovanie a dlhodobú podporu, ktorú poskytuje udržiavaná aplikácia App Store.</p>

<h2>Spodný riadok</h2>

<p>FineTune dokazuje koncept: hlasitosť jednotlivých aplikácií patrí do panela s ponukami. Takto vyzerá koncept SoundDial so skutočným modelom podpory, viacerými funkciami a bezpečnosťou App Store za jednorazových 14,99 EUR namiesto stávky na dobrovoľnú údržbu.</p>

<p>Ste pripravení na mixér pre jednotlivé aplikácie, ktorý zostane zachovaný? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> a ovládajte hlasitosť každej aplikácie v priebehu niekoľkých sekúnd.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac Alternatíva pre skutočný objem na aplikáciu na Mac",
    description: "Páčilo sa vám zlepšenie eqMac, ale potrebujete správnu hlasitosť, stlmenie a profily pre jednotlivé aplikácie? SoundDial je najrýchlejšia oprava Mac App Store – 14,99 EUR, v sandboxe, bez ovládačov.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak ste použili eqMac na ekvalizér a zvýšenie hlasitosti, ale naozaj chcete nezávislú hlasitosť pre každú aplikáciu – plus stlmenie, zosilnenie a uložené profily – najrýchlejšia spoľahlivá oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Je to Mac App Store panelový mixážny pult: nastavte úroveň pre každú aplikáciu, zosilnite tie tiché a okamžite prepínajte profily. 14,99 EUR jednorazovo, v karanténe, bez inštalácie ovládačov.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – eqMac Alternatíva pre skutočný objem na aplikáciu na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac vs. to, čo skutočne potrebujete</h2>

<p>eqMac je solídny bezplatný nástroj a jeho systémový ekvalizér a zosilňovač hlasitosti sú skutočne užitočné. Ale eqMac je postavený na jednom hlavnom EQ a jednom hlavnom výstupe. Neposkytuje vám skutočný mixér hlasitosti pre jednotlivé aplikácie – to, čo má Windows už roky a macOS sa stále nedodáva natívne.</p>

<p>Takže ak je váš skutočný problém „Spotify je príliš hlasný, keď telefonujem“ alebo „táto hra mi fúka uši, ale všetko ostatné je v poriadku“, eqMac nie je ten správny tvar pre túto prácu. Nakoniec budete jazdiť na jednom hlavnom posúvači alebo si pohrať s vnútorným objemom každej aplikácie. To je medzera, ktorú vypĺňa SoundDial.</p>

<h2>Čo SoundDial robí, čo eqMac nie</h2>

<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — Hudba na 40 %, prehliadač na 100 %, videohovor na 70 %, všetko naraz, všetko zapamätané.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> - okamžite stíšte jednu hlučnú aplikáciu bez toho, aby ste sa dotkli čohokoľvek iného.</li>
<li><strong>Zosilnenie podľa aplikácie</strong> — posuňte tichú aplikáciu za jej normálny strop, ako to robí zosilňovač eqMac, ale je zameraný na jednu aplikáciu namiesto celého systému.</li>
<li><strong>Objemové profily</strong> — uložte nastavenia ako „Zameranie“, „Hry“ alebo „Stretnutie“ a prepnite celý mix jediným kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky pustiť zvuk na pozadí, keď sa začne niečo dôležitejšie, aby ste počas hovoru nemuseli hľadať posúvač.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — skok medzi reproduktormi, slúchadlami a inými výstupmi z panela ponuky.</li>
</ul>

<p>Prekrytie so eqMac je v podstate podpora. Všetko ostatné – mixážny pult, stlmenie zvuku, profily, skrútenie – je oblasť, ktorú eqMac nikdy nepokrýval.</p>

<h2>Stále chcete EQ?</h2>

<p>Buďte úprimní v tom, ktorý problém riešite. Ak skutočne potrebujete frekvenčný ekvalizér – rezanie basov, skrotenie drsných výšok, tvarovanie tónu celého vášho systému – potom má eqMac stále miesto a je zadarmo. SoundDial je mixér hlasitosti, nie ekvalizér.</p>

<p>Väčšina ľudí však siahne po zosilňovači eqMac nie preto, že by chceli tvarovať frekvencie, ale chcú jednu aplikáciu hlasnejšiu alebo vyvážený mix. Ak ste to vy, vyhradený mixér je čistejšou odpoveďou. Môžete dokonca spustiť oboje: ponechajte eqMac pre krivku EQ pre celý systém a použite SoundDial pre úrovne podľa aplikácie. Nehádajú sa o rovnakú prácu.</p>

<h2>Ako sa porovnáva s ostatnými zvukovými nástrojmi Mac</h2>

<p>Keďže už lovíte nástroje, tu je úprimná krajina:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — Profesionálna možnosť za približne 39 USD s ekvalizérom na aplikáciu a úplným výstupným smerovaním. Výkonný, ale vyžaduje priame stiahnutie a nainštaluje ovládač na zachytávanie zvuku. Prehnané a drahšie, ak chcete iba objem jednotlivých aplikácií s profilmi.</li>
<li><strong>Background Music</strong> — bezplatný a otvorený zdroj, ale na novších vydaniach macOS sa môže zlomiť a nemá žiadne zosilnenie, žiadne profily a žiadne automatické stláčanie. Skvelé, keď to funguje, frustrujúce, keď to nefunguje.</li>
<li><strong>FineTune</strong> - bezplatná aplikácia s otvoreným zdrojom s ponukami. Stojí za to pozrieť sa, ak je tvrdá požiadavka 0 USD, hoci je ľahší na funkcie a lesk.</li>
<li><strong>eqMac</strong> - bezplatný EQ plus booster, ale žiadny skutočný mixér pre jednotlivé aplikácie, ako je uvedené vyššie.</li>
</ul>

<p>SoundDial sedí na najlepšom mieste: sústredenejšie a lacnejšie ako SoundSource, schopnejšie a spoľahlivejšie ako bezplatné možnosti a robí prácu pre aplikáciu, ktorú eqMac nie.</p>

<h2>Prečo tu na Mac App Store záleží</h2>

<p>Niektoré z týchto nástrojov vyžadujú priame stiahnutie a ovládač zvuku na úrovni jadra alebo zachytávania. Tie fungujú, ale sú to také veci, ktoré môžu zablokovať aktualizáciu macOS alebo zakopnúť na zablokovanom pracovnom Mac.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> namiesto toho sa dodáva prostredníctvom Mac App Store. To znamená, že je skontrolovaný spoločnosťou Apple a v karanténe, nainštaluje sa čisto bez DMG na ťahanie a neexistujú žiadne zvukové ovládače ani systémové rozšírenia na schválenie. Aktualizácie prichádzajú cez App Store ako každá iná aplikácia a odinštalovanie je normálnym odstránením. Pre nástroj na paneli s ponukami, ktorý sa dotýka vášho zvuku, táto cesta s nižším trením a nižším rizikom stojí veľa.</p>

<h2>Rýchle nastavenie</h2>

<ul>
<li>Nainštalujte SoundDial zo Mac App Store – bez reštartu, bez výzvy ovládača.</li>
<li>Otvorte ikonu panela s ponukami; každá aplikácia, ktorá práve vydáva zvuk, sa zobrazí s vlastným posúvačom.</li>
<li>Nastavte úrovne, stlmte to, čo nepotrebujete, a zosilnite všetko, čo je príliš tiché.</li>
<li>Uložte usporiadanie ako profil a potom vytvorte ďalšie pre hranie hier, hovory alebo zameranie.</li>
<li>Zapnite automatické stlmenie zvuku, aby sa zvuk na pozadí automaticky ustúpil.</li>
</ul>

<p>To je celá slučka. V priebehu niekoľkých minút budete mať iba naznačený zosilňovač eqMac pre jednotlivé aplikácie.</p>

<p><strong>Ste pripravení na skutočný objem jednotlivých aplikácií na svojom Mac?</strong> <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> — 14,99 EUR jednorazovo, v karanténe, bez ovládačov a robí presne to, čo by mal panelový mixér.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "Najlacnejší dobrý objemový mixér pre Mac v roku 2026",
    description: "Hľadáte najlacnejší dobrý mixér hlasitosti na aplikáciu pre Mac v roku 2026? Porovnajte SoundDial, SoundSource, Background Music, FineTune a eqMac z hľadiska ceny, bezpečnosti a funkcií.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Mac v roku 2026 s najlepšou hodnotou na aplikáciu <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikácia na paneli s ponukami na Mac App Store za jednorazovú cenu 14,99 EUR. Poskytuje každej aplikácii vlastný posuvník hlasitosti, plus stlmenie, zosilnenie, profily a automatické znižovanie hlasitosti – žiadne ovládače, žiadne predplatné a žiadne riskantné sťahovanie. Je to najlacnejšia platená možnosť, ktorá skutočne funguje spoľahlivo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Najlacnejší dobrý objemový mixér pre Mac v roku 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo „najlacnejšie“ potrebuje definíciu</h2>
<p>Pre Mac existujú bezplatné nástroje na objem, takže ak je jediným cieľom nulové výdavky, máte možnosti. Ale zadarmo vás zvyčajne stojí niekde inde: krehkosť nových verzií macOS, chýbajúce funkcie, ako je podpora alebo profily, alebo proces inštalácie, ktorý zahŕňa ovládač na zachytávanie zvuku, ktorému musíte dôverovať. „Najlacnejšie dobré“ znamená najnižšiu cenu, vďaka ktorej získate stabilný a plnohodnotný mixér, ktorý budete aj naďalej používať. To je objektív, ktorý tu použijeme.</p>

<h2>Po prvé, vec, ktorú macOS nerobí</h2>
<p>Windows má už roky mixér hlasitosti pre jednotlivé aplikácie – kliknite pravým tlačidlom myši na ikonu reproduktora a nastavte každú aplikáciu samostatne. macOS stále nemá zabudované nič ekvivalentné. Získate jeden hlavný zväzok a akýkoľvek interný posúvač, ktorý aplikácia náhodou dodá (hudba, niektoré prehliadače). Neexistuje žiadny systémový spôsob, ako urobiť Slack tichším ako Spotify, alebo zvýšiť tichý videohovor nad všetko ostatné. Na vyplnenie tejto medzery existuje každá možnosť nižšie.</p>

<h2>Uchádzači, ceny čestne</h2>

<h2>SoundDial — 14,99 EUR, jednorazovo</h2>
<p>SoundDial žije vo vašom paneli s ponukami a poskytuje každej spustenej aplikácii nezávislý posuvník hlasitosti. Okrem základov pridáva funkcie, po ktorých ľudia skutočne siahajú:</p>
<ul>
<li><strong>Zosilnenie podľa aplikácie</strong> — posuňte príliš tichú aplikáciu nad 100 % namiesto toho, aby ste sa snažili ju počuť.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — stíšiť jednu aplikáciu bez toho, aby ste sa dotkli ostatných.</li>
<li><strong>Objemové profily</strong> — uložiť mix „pracovný hovor“ alebo „filmový večer“ a okamžite si ho vyvolať.</li>
<li><strong>Auto-ducking</strong> — automaticky pustiť zvuk na pozadí, keď hrá niečo dôležitejšie.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — skok medzi reproduktormi, slúchadlami a inými zariadeniami z rovnakej ponuky.</li>
</ul>
<p>Pretože je to na Mac App Store, je v sandboxe, skontrolované spoločnosťou Apple a inštaluje sa čisto – žiadne DMG, žiadne rozšírenie jadra, žiadny zvukový ovládač na schválenie. Vy platíte <a href="https://apps.apple.com/app/id6772792641">14,99 € raz</a> a vlastniť ho. Pre väčšinu ľudí je toto sladké miesto: dosť lacné na to, aby to bolo jednoduché áno, dostatočne úplné, aby ste z neho nevyrástli.</p>

<h2>SoundSource – ~ 39 USD, profesionálna možnosť</h2>
<p>Rogue Amoeba SoundSource je zlatým štandardom pre náročných používateľov. Robí hlasitosť a stlmenie podľa aplikácie ako SoundDial, ale ide ešte ďalej s ekvalizérmi pre jednotlivé aplikácie a úplným smerovaním výstupu (odoslanie jednej aplikácie do slúchadiel, inej do reproduktorov). Je skutočne vynikajúci – stojí však približne 39 dolárov a inštaluje sa mimo App Store s komponentom na zachytávanie zvuku, ktorému musíte udeliť povolenie. Ak potrebujete ekvalizér pre jednotlivé aplikácie alebo zložité smerovanie, oplatí sa to. Ak chcete iba čistý a lacný mixér, platíte za schopnosti, ktorých sa možno nikdy nedotknete.</p>

<h2>Background Music — bezplatný, open source</h2>
<p>Background Music je známa bezplatná aplikácia s otvoreným zdrojom, ktorá ponúka objem pre jednotlivé aplikácie a automatické pozastavenie. Háčik: zapája sa hlboko do Core Audio prostredníctvom virtuálneho ovládača a má za sebou dlhú históriu lámania nových verzií macOS, ktoré niekedy vyžadujú manuálne opravy alebo preinštalovanie po aktualizáciách. Chýba mu tiež boost, uložené profily a auto-ducking. Skvelé pre majstrov, ktorým nevadí údržba; frustrujúce, ak chcete, aby to fungovalo.</p>

<h2>FineTune — zadarmo, panel s ponukami</h2>
<p>FineTune je bezplatná aplikácia na hlasitosť panela s ponukami s otvoreným zdrojom. Je ľahký a príjemný a na jednoduché nastavenie podľa aplikácie to môže stačiť. Ale keďže ide o malý bezplatný projekt, nezodpovedá hĺbke funkcií – žiadne profily, žiadne automatické znižovanie a manipulácia so zosilnením/výstupom nie sú obmedzené. Nulové náklady, menej záruk na dlhú životnosť a podporu.</p>

<h2>eqMac — zadarmo, EQ + zosilňovač</h2>
<p>eqMac je bezplatný systémový ekvalizér so zosilňovačom hlasitosti. Ide skôr o tvarovanie tónu a hlasitosti v rámci celého vášho Mac než o miešanie jednotlivých aplikácií, takže ide o iný nástroj na inú prácu. Ak chcete konkrétne ovládanie podľa aplikácie, eqMac nie je v skutočnosti riešením, aj keď je to skvelý bezplatný ekvalizér.</p>

<h2>Cena vs. hodnota: poctivý stôl</h2>
<ul>
<li><strong>Naozaj zadarmo, ale s kompromismi:</strong> Background Music (krehký, založený na ovládači), FineTune (tenké funkcie), eqMac (EQ, nie mixér).</li>
<li><strong>Najlacnejšia kompletná platená aplikácia:</strong> SoundDial za 14,99 € — boost, profily, skrútenie, App Store bezpečnosť.</li>
<li><strong>Premium/Pro:</strong> SoundSource za ~ 39 $ – EQ a smerovanie, inštalácia mimo App-Store.</li>
</ul>
<p>Inak povedané: SoundDial stojí zhruba tretinu SoundSource, pričom pokryje funkcie, ktoré skutočne chce 90 % ľudí. A na rozdiel od bezplatných možností sa po aktualizácii macOS ticho nezlomí, pretože sa nespolieha na krehký zvukový ovládač na systémovej úrovni.</p>

<h2>Ktoré by ste si mali vybrať?</h2>
<p>Ak ste profesionál, ktorý potrebuje ekvalizér pre jednotlivé aplikácie a nasmerovanie aplikácií na rôzne výstupy, kúpte si SoundSource – zarába si svoju cenu. Ak máte radi open-source a nevadí vám občasné rozbitie, vyskúšajte Background Music alebo FineTune zadarmo. Ak však chcete najlacnejšiu možnosť, ktorá jednoducho funguje – nezávislá hlasitosť, zosilnenie, stlmenie, uložené profily a automatické stlmenie, bezpečne nainštalované zo App Store – SoundDial je jasným víťazom hodnoty v roku 2026.</p>

<blockquote>Najlepší mixér nie je ten, ktorý má najviac funkcií alebo najnižšiu cenu – je to ten, ktorý si raz nastavíte a zabudnete naň. So SoundDial za 14,99 € je to jednoduché dorovnať.</blockquote>

<p>Ste pripravení dať každej aplikácii vlastný objem? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> za jednorazových 14,99 € — žiadne predplatné, žiadne ovládače, žiadne riziko.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Windows Volume Mixer pre Mac: Získajte ovládanie hlasitosti podľa aplikácie",
    description: "Chýba vám Windows Volume Mixer na vašom Mac? macOS nemá vstavané ovládanie hlasitosti pre jednotlivé aplikácie. Tu je najrýchlejší spôsob, ako to získať: SoundDial, 14,99 € mixpult s menu.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>macOS nemá vstavaný mixér hlasitosti ako Windows, takže v nastaveniach systému nemôžete nastaviť hlasitosť pre jednotlivé aplikácie. Najrýchlejšia a najspoľahlivejšia oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikácia na paneli s ponukami v hodnote 14,99 EUR od Mac App Store. Každej aplikácii dáva vlastný posuvník hlasitosti, stlmenie a zosilnenie – žiadne ovládače, žiadne DMG, žiadne riskantné inštalácie.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Windows Volume Mixer pre Mac: Získajte ovládanie hlasitosti podľa aplikácie" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo Windows Volume Mixer nemá ekvivalent Mac</h2>

<p>Ak ste prešli zo Windows, jedna z prvých vecí, ktoré vám budú chýbať, je Zmiešavač hlasitosti: kliknite pravým tlačidlom myši na ikonu reproduktora a každá spustená aplikácia dostane svoj vlastný posúvač. Vypnite Chrome, nechajte Discord nahlas, stlmte Spotify – všetko na jednom mieste.</p>

<p>macOS to jednoducho nedodáva. Ovládanie hlasitosti od Apple je jediným posúvačom pre celý systém. Akákoľvek úroveň, ktorú nastavíte, platí pre všetko naraz. V nastaveniach systému nie je skrytá žiadna možnosť pre aplikáciu, žiadny príkaz Terminal, žiadne prepínanie dostupnosti. Je to skutočná medzera a je to tak už roky.</p>

<p>Dôvod je architektonický: aplikácie smerujú zvuk cez Core Audio do vášho výstupného zariadenia a OS nevystavuje používateľsky orientovaný mixér pre jednotlivé streamy. Ak chcete znova vytvoriť zážitok so Windows, potrebujete aplikáciu tretej strany, ktorá sedí v tejto zvukovej ceste a poskytuje vám ovládacie prvky, ktoré Apple vynechal.</p>

<h2>Najbližší zápas: SoundDial</h2>

<p>SoundDial je panel s ponukami pre jednotlivé aplikácie vytvorený špeciálne na tento účel. Kliknite na jeho ikonu a získate prehľadný zoznam všetkého, čo prehráva zvuk, každý s vlastným posúvačom. Je to najpriamejší "Windows Volume Mixer pre Mac", ktorý môžete nainštalovať, a robí niekoľko vecí, ktoré Windows mixer nikdy nedokázal:</p>

<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — základná vlastnosť. Nastavte Chrome na 40 %, Zoom na 100 %, hudbu na 20 %.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — stíšiť jednu aplikáciu bez toho, aby ste sa dotkli ostatných.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie</strong> - stlačte tichú aplikáciu <em>vyššie</em> 100 %, keď je jeho vlastný zvuk príliš nízky.</li>
<li><strong>Objemové profily</strong> — uložiť mix (napr. „pracovný hovor“ alebo „hranie“) a okamžite ho vyvolať namiesto opätovného presúvania posúvačov.</li>
<li><strong>Auto-ducking</strong> — automaticky zníži zvuk na pozadí, keď začne niečo dôležitejšie, napríklad hovor.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — preskakovanie medzi reproduktormi, slúchadlami a inými zariadeniami z rovnakej ponuky.</li>
</ul>

<p>Pretože je to na <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, je to skontrolované spoločnosťou Apple a v karanténe. Inštaluje sa čisto jediným kliknutím – žiadne DMG na preťahovanie, žiadny zvukový ovládač alebo systémové rozšírenie na schválenie, žiadne bezpečnostné výzvy. Za 14,99 EUR jednorazovo (bez predplatného) je to najjednoduchší spôsob, ako vyplniť medzeru.</p>

<h2>Ako nastaviť hlasitosť pre jednotlivé aplikácie na vašom Mac</h2>

<ol>
<li>Nainštalujte SoundDial zo Mac App Store.</li>
<li>Udeľte jednorazové povolenie na prehrávanie zvuku, ktoré požaduje pri prvom spustení.</li>
<li>Kliknite na ikonu SoundDial na lište ponuky.</li>
<li>Potiahnutím posúvača vedľa ľubovoľnej aplikácie nastavte jej hlasitosť alebo stlačte tlačidlo stlmiť/zvýšiť.</li>
<li>Voliteľne môžete uložiť aktuálny mix ako profil, aby ste ho mohli neskôr obnoviť.</li>
</ol>

<p>To je celý pracovný postup. Správa sa ako mixér Windows, ktorý už poznáte, len z panela s ponukami namiesto kliknutia pravým tlačidlom myši na panel úloh.</p>

<h2>Ako sa SoundDial porovnáva s inými možnosťami</h2>

<p>SoundDial nie je jediným nástrojom v tomto priestore, takže tu je úprimný pohľad na alternatívy.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> - okolo 39 dolárov a skutočne profi: EQ na aplikáciu, smerovanie výstupu na aplikáciu, efekty. Vyžaduje si to však priame stiahnutie plus ovládač na zachytávanie zvuku a je to prehnané (a drahšie), ak chcete iba objem jednotlivých aplikácií. Vyberte si ho, ak potrebujete EQ a smerovanie; vyberte SoundDial, ak chcete mixér bez zložitosti alebo ovládača.</li>
<li><strong>Background Music</strong> — bezplatný a open-source, čo je skvelé. Háčik: na novších verziách macOS sa môže zlomiť a chýba mu podpora, uložené profily a automatické sklopenie. Dobre, ak vám vyhovuje riešenie problémov s open source zvukovými ovládačmi; menej ideálne, ak chcete niečo, čo jednoducho funguje.</li>
<li><strong>FineTune</strong> - bezplatná aplikácia s otvoreným zdrojom s ponukami. Ľahký a stojí za to si ho pozrieť, ak je prioritou rozpočet, ale leštidlo, profily a bezpečnosť App Store obchodujete zadarmo.</li>
<li><strong>eqMac</strong> — bezplatný EQ a zosilňovač pre celý systém. Je to najprv ekvalizér, nie mixér pre jednotlivé aplikácie, takže rieši iný problém.</li>
</ul>

<p>Kompromis je jednoduchý. Bezplatné nástroje nestoja nič, ale môžu byť krehké alebo tenké. SoundSource je výkonný, ale drahý a založený na ovládačoch. SoundDial sedí na najlepšom mieste: jednorazová cena 14,99 €, bezpečnosť App Store a sandboxing a profily + automatické uhýbanie, ktoré bezplatné možnosti preskočia.</p>

<blockquote>Ak všetko, čo chcete, je Windows Volume Mixer – posúvače pre jednotlivé aplikácie, stlmenie a zosilnenie, bezpečne nainštalované v priebehu niekoľkých sekúnd – SoundDial je najpriamejšia zhoda.</blockquote>

<h2>Spodný riadok</h2>

<p>macOS vám mixér hlasitosti nedá a pravdepodobne ani nikdy nedá. Nemusíte však žiť s jedným celosystémovým posúvačom. Vyhradený mix panel s ponukami obnovuje ovládanie jednotlivých aplikácií, ktoré ste mali na Windows, a pridáva navrch, profily a automatické sklopenie.</p>

<p>Ste pripravení získať objem pre jednotlivé aplikácie jednoduchým spôsobom? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> za 14,99 EUR – jednorazovo, v karanténe a inštalácia trvá niekoľko sekúnd.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Nastavte hlasitosť aplikácie ako Windows – na svojom Mac",
    description: "Windows má mixér hlasitosti pre jednotlivé aplikácie, ale macOS nie. Tu je návod, ako nastaviť nezávislú hlasitosť pre každú aplikáciu na vašom Mac – rýchlo, bezpečne a bez ovládačov.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie, ako je ten v Windows, takže najrýchlejšia spoľahlivá oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikácia na paneli ponuky Mac App Store, ktorá každej aplikácii poskytuje vlastný posuvník hlasitosti, stlmenie zvuku pre každú aplikáciu a zvýšenie hlasitosti. Je v sandboxe, skontrolovaný spoločnosťou Apple, inštaluje sa bez ovládačov a raz stojí 14,99 EUR.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Nastavte hlasitosť aplikácie ako Windows — na vašom Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo to Windows dokáže a macOS nie</h2>
<p>Ak ste použili Windows, poznáte cvik: kliknite pravým tlačidlom myši na ikonu reproduktora, otvorte Volume Mixer a potiahnite samostatný posuvník pre Chrome, Spotify, Discord a čokoľvek iné, čo vytvára hluk. Je to jednoduché a jednoducho to funguje.</p>
<p>macOS nikdy nedodal ekvivalent. Ovládanie zvuku od Apple je globálne – jedna hlavná hlasitosť pre celý systém. Aplikáciu môžete stlmiť tak, že stlmíte zdroj v tejto aplikácii (ak má dokonca ovládací prvok), ale neexistuje jednotné miesto na to, aby ste povedali „udržať hudbu na 40 %, kým moja schôdza zostane na 100 %. Táto medzera je presne dôvod, prečo existujú mixéry tretích strán.</p>

<h2>Najrýchlejšia oprava: panelový mixér</h2>
<p>Najbližšie k zážitku Windows je aplikácia na paneli s ponukami, ktorá zobrazuje vaše spustené zvukové aplikácie a každej z nich poskytuje posúvač. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> robí presne toto. Kliknite na jeho ikonu na paneli s ponukami a získate:</p>
<ul>
<li><strong>Nezávislá hlasitosť pre každú aplikáciu</strong> — potiahnite Spotify nadol bez toho, aby ste sa dotkli hovoru.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — Okamžite stíšte jednu hlučnú aplikáciu, ostatné nechajte hrať.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie</strong> – stlačte príliš tichú aplikáciu <em>vyššie</em> 100%, keď je jeho vlastné maximum stále príliš mäkké.</li>
<li><strong>Objemové profily</strong> — uložiť mix „Práca“ alebo „Hry“ a vyvolať ho jedným kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky zníži zvuk na pozadí, keď začne niečo dôležitejšie.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — skok medzi reproduktormi, slúchadlami a inými výstupmi z rovnakej ponuky.</li>
</ul>
<p>Pretože je na Mac App Store, je izolovaný a skontrolovaný spoločnosťou Apple, inštaluje sa čisto a nie je potrebné pretiahnuť DMG, žiadne rozšírenie jadra a žiadny zvukový ovládač na schválenie v nastaveniach systému. Na tejto poslednej časti záleží viac, ako to znie – nástroje založené na ovládačoch sú tie, ktoré majú tendenciu sa po aktualizáciách macOS zlomiť.</p>

<h2>Ako to nastaviť (asi dve minúty)</h2>
<ul>
<li><strong>1.</strong> Nainštalujte SoundDial zo Mac App Store a spustite ho.</li>
<li><strong>2.</strong> Udeľte povolenie na zvuk, na ktoré vás macOS vyzve – vďaka tomu môže aplikácia vidieť streamy jednotlivých aplikácií.</li>
<li><strong>3.</strong> Kliknite na ikonu SoundDial na lište ponuky. Každá aplikácia, ktorá práve prehráva zvuk, sa zobrazuje s vlastným posúvačom.</li>
<li><strong>4.</strong> Potiahnutím posúvača ľubovoľnej aplikácie nastavte jej úroveň alebo stlačte tlačidlo stlmiť. Zvýšte úroveň nad 100 %, keď je aplikácia príliš tichá.</li>
<li><strong>5.</strong> (Voliteľné) Uložte svoj aktuálny mix ako profil, aby ste ho mohli neskôr obnoviť, a zapnite automatické stlmenie zvuku, ak chcete, aby sa zvuk na pozadí automaticky pustil.</li>
</ul>
<p>To je celý pracovný postup. Správa sa ako Windows Volume Mixer, ktorý už poznáte, bez nastavenia trenia.</p>

<h2>A čo bezplatné a profesionálne alternatívy?</h2>
<p>Existujú aj iné spôsoby, ako získať objem jednotlivých aplikácií na Mac. Oplatí sa ich poznať, aby ste si mohli poctivo vyberať.</p>
<blockquote>Bezplatné nástroje vymieňajú peniaze za spoľahlivosť a funkcie; profesionálne nástroje vymieňajú peniaze a nastavenia pre hĺbku, ktorú možno nepotrebujete.</blockquote>
<p><strong>Background Music</strong> je bezplatný a s otvoreným zdrojom a poskytuje objem pre jednotlivé aplikácie. Háčik: zapadá hlboko do audio systému a má za sebou históriu lámania na novších vydaniach macOS a chýba mu boost, profily a auto-duck. Ak to funguje na vašom nastavení, skvelé - ale je to hazard s aktualizáciami.</p>
<p><strong>FineTune</strong> je bezplatná aplikácia na paneli s ponukami s otvoreným zdrojovým kódom v rovnakom duchu ako SoundDial. Je to dobrý východiskový bod, ak je rozpočet jediným problémom, hoci je to komunitný projekt bez profilov a nevýrazného lesku.</p>
<p><strong>eqMac</strong> je bezplatný systémový ekvalizér a zosilňovač. Je to skvelé na formovanie celkového zvuku, ale nie je to skutočný mixér pre jednotlivé aplikácie – upravujete celý výstup, nie jednotlivé aplikácie.</p>
<p><strong>SoundSource</strong> od Rogue Amoeba (približne 39 dolárov) je profesionálna možnosť: EQ pre každú aplikáciu, smerovanie výstupu na aplikáciu a seriózne funkcie zvukového inžiniera. Je to vynikajúce - ale vyžaduje si priame stiahnutie a inštaláciu komponentu na zachytávanie zvuku a stojí to viac ako dvojnásobok toho, čo robí SoundDial. Ak chcete smerovanie a EQ na úrovni štúdia, je to voľba. Ak chcete iba mixér v štýle Windows, je to prehnané.</p>

<h2>Ktorý by ste si mali zaobstarať?</h2>
<p>Ak je vaším cieľom „aby môj Mac fungoval ako Windows Volume Mixer“ bez sťahovania, ovládačov alebo rizika, SoundDial je najčistejšia odpoveď. Získate hlasitosť aplikácie, stlmenie, zosilnenie, profily a automatické stlmenie, všetko bezpečné App Store, za jednorazovú cenu 14,99 EUR – bez predplatného. Namiesto toho si vyberte SoundSource iba vtedy, ak konkrétne potrebujete ekvalizér a smerovanie výstupu pre jednotlivé aplikácie a vyskúšajte bezplatné možnosti, ak vám vyhovuje ich riešenie v rámci aktualizácií macOS.</p>

<p><strong>Ste pripravení dať každej aplikácii vlastný objem?</strong> <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> a nastavte svoj prvý mix za približne dve minúty.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Ako zvýšiť hlasitosť vášho Mac na počúvanie ťažko počujúcich",
    description: "Máte problém počuť svoj Mac aj pri maximálnej hlasitosti? Naučte sa, ako vylepšiť a objasniť zvuk pre každú aplikáciu pre nepočujúcich, vrátane SoundDial a vstavaných tipov.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Ak váš Mac nie je dostatočne hlasný ani pri maximálnej hlasitosti, najrýchlejšie spoľahlivé riešenie je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store panelový mixážny pult, ktorý vám umožní vylepšiť akúkoľvek aplikáciu nad 100 % a stlmiť všetko ostatné. To znamená hlasnejšiu a jasnejšiu reč z prehrávača FaceTime, videa alebo filmov bez toho, aby ste museli spustiť celý systém. Je to 14,99 €, jednorazovo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Ako urobiť svoj Mac hlasnejším pre počúvanie ťažko počujúcich" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo maximalizovať posuvník hlasitosti stále nestačí</h2>
<p>Pre slabo počujúcich poslucháčov má posuvník hlasitosti macOS dva frustrujúce limity. Po prvé, obmedzuje na 100 % toho, čo produkuje samotná aplikácia. Ak bol podcast, video alebo hovor zaznamenaný potichu, „plná hlasitosť“ je stále príliš tichá. Po druhé, macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows má jeden už roky, ale na Mac každá aplikácia zdieľa jednu hlavnú úroveň. Takže keď všetko zapnete, aby ste počuli jemný hlas, hudba na pozadí a zvuky upozornení budú tiež nepríjemne hlasné.</p>
<p>To, čo skutočne potrebujete, je schopnosť robiť <em>jeden</em> aplikáciu hlasnejšie ako ostatné, posuňte ju za bežný strop a obmedzte konkurenčné zvuky, aby reč vynikla. To je presne medzera, ktorú tieto nástroje vypĺňajú.</p>

<h2>Najprv použite bezplatné nastavenia dostupnosti macOS</h2>
<p>Pred pridaním akejkoľvek aplikácie sa oplatí nastaviť to, čo už macOS ponúka. Pomáhajú jasnosti, hoci nepridávajú hrubú hlasitosť:</p>
<ul>
<li><strong>Mono zvuk:</strong> Systémové nastavenia &rarr; Prístupnosť &rarr; Audio, zapnite „Prehrávať stereo zvuk ako mono“. Ak je váš sluch silnejší na jedno ucho, vysiela sa plný signál obom, takže nestratíte polovicu dialógu.</li>
<li><strong>Úprava zostatku:</strong> V nastaveniach systému &rarr; Sound potiahnite vyváženie vľavo/vpravo smerom k silnejšiemu uchu.</li>
<li><strong>Znížte zvuky na pozadí:</strong> Znížte hudbu a atmosféru v aplikáciách, ktoré to umožňujú, takže hlasy nebudú bojovať so zvukovou stopou.</li>
<li><strong>Ubytovanie pre slúchadlá:</strong> Ak používate AirPods alebo Beats, Systémové nastavenia &rarr; Prístupnosť &rarr; Zvuk &rarr; Prispôsobenie slúchadiel môže zosilniť jemné zvuky a naladiť reč.</li>
</ul>
<p>Sú skutočne užitočné a nič nestoja. Ale nikto z nich nevytvára jedinú tichú aplikáciu <em>hlasnejšie ako 100 %</em>, a to je zvyčajne skutočný problém.</p>

<h2>Ako vylepšiť jednu aplikáciu o 100 % pomocou SoundDial</h2>
<p>SoundDial žije vo vašom paneli s ponukami a zobrazuje posúvač pre každú aplikáciu, ktorá práve prehráva zvuk. Tu je pracovný postup, ktorý najviac pomáha pri počúvaní nepočujúcich:</p>
<ul>
<li><strong>Vylepšite aplikáciu, ktorú počúvate.</strong> Potiahnutím posúvača nad 100 % zosilníte tichý videohovor alebo podcast nad rámec toho, čo aplikácia umožňuje sama.</li>
<li><strong>Stlmte alebo znížte všetko ostatné.</strong> Stiahnite si hudbu, karty prehliadača alebo zvuky upozornení, aby nič nekonkurovalo hlasu, ktorý sa snažíte nasledovať.</li>
<li><strong>Zapnite automatické stláčanie.</strong> Keď začnete hovoriť počas hovoru, SoundDial automaticky pohltí ďalší zvuk, aby osoba, s ktorou hovoríte, jasne prešla a potom ho obnoví.</li>
<li><strong>Uložte profil hlasitosti.</strong> Vytvorte si profil „videohovorov“, v ktorom je vaša konferenčná aplikácia vylepšená a všetko ostatné je tiché, a potom naň okamžite prepnite namiesto toho, aby ste ho zakaždým znova upravovali.</li>
<li><strong>Rýchlo prepínajte výstup.</strong> Preskakujte medzi reproduktormi, náhlavnou súpravou alebo zariadením pripojeným k načúvaciemu zariadeniu z rovnakej ponuky bez toho, aby ste museli prehrabávať nastavenia systému.</li>
</ul>
<p>Funkcia boost je tu kľúčová. Pretože to zvyšuje výstup aplikácie nad jej prirodzené maximum, šepot tichý záznam sa stáva niečím, čo môžete skutočne počuť, zatiaľ čo zvyšok vášho systému zostáva na pohodlnej úrovni.</p>

<h2>Rýchle slovo o skreslení</h2>
<p>Akékoľvek zosilnenie softvéru zosilní čokoľvek, čo je v signáli, takže posunutie ďaleko za 100 % už aj tak hlasitého zvuku môže spôsobiť orezanie. V praxi posilňovanie <em>ticho</em> obsah až po pohodlnú a zrozumiteľnú úroveň znie čisto. Začnite skromne, zvýšte, kým nebude reč čistá, a ustúpte, ak začne znieť drsne. Na ochrane vášho zostávajúceho sluchu záleží, preto sa zamerajte skôr na čistotu než na maximálnu hlasitosť.</p>

<h2>Ako sa SoundDial porovnáva s alternatívami</h2>
<p>Máte niekoľko možností a úprimnosť vám pomôže vybrať si tú správnu:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~ 39 USD):</strong> Skutočne profesionálny, s ekvalizérom pre jednotlivé aplikácie a výstupným smerovaním. Ak chcete vyrezávať frekvencie pre stratu sluchu, je to mocné. Ale stojí to viac ako dvakrát toľko, vyžaduje si priame stiahnutie a inštaluje ovládač na zachytávanie zvuku. To je viac nastavení a prístupu k systému, ako si mnohí ľudia želajú.</li>
<li><strong>Background Music (zadarmo, open-source):</strong> Ponúka hlasitosť pre jednotlivé aplikácie zadarmo, ale chýba mu podpora, profily a automatické stláčanie a na novších verziách macOS sa môže zlomiť, pretože sa zapája hlboko do audio systému.</li>
<li><strong>FineTune (zadarmo, open-source):</strong> Ľahká aplikácia na ovládanie hlasitosti na paneli s ponukami. Dobré pre základy, ale bez podpory, profilov a skracovania, o ktoré sa opierajú slabo počujúci poslucháči.</li>
<li><strong>eqMac (zadarmo):</strong> Ekvalizér s posilňovačom. Užitočné na tvarovanie zvuku, ale je postavené skôr na EQ než na čistom mixovaní a profiloch jednotlivých aplikácií.</li>
</ul>
<p>Kde <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Vyniká vyváženosťou ceny, bezpečnosti a špecifických vlastností, na ktorých záleží. Pretože je na Mac App Store, je skontrolovaný a upravený spoločnosťou Apple, inštaluje sa čisto bez DMG a nepotrebuje žiadne zvukové ovládače ani systémové rozšírenia. V rámci jednej aplikácie získate zosilnenie, stlmenie, profily hlasitosti a automatické stlmenie zvuku v rámci jedného jednorazového nákupu v hodnote 14,99 EUR bez toho, aby ste sa museli hrabať v audio zásobníku macOS.</p>

<h2>Spodný riadok</h2>
<p>Najprv si nastavte bezplatné možnosti dostupnosti macOS, ktoré sa oplatí mať. Ak je však skutočným problémom to, že jedna aplikácia je jednoducho príliš tichá, potrebujete nástroj, ktorý dokáže jednu aplikáciu posunúť nad 100 % a zvyšok stíšiť. To je celý zmysel zvýšenia jednotlivých aplikácií a macOS to nerobí sám o sebe.</p>

<p>Ste pripravení skutočne počuť svoj Mac? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> za 14,99 €, vylepšite aplikáciu, ktorú potrebujete, a nechajte automatické stláčanie a profily, aby bola reč čistá.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Ako posilniť tichú aplikáciu na Mac (minulý maximálny objem)",
    description: "Jedna aplikácia je príliš tichá aj pri 100 %? Vylepšite práve túto aplikáciu nad jej maximum na Mac pomocou SoundDial, mixéra hlasitosti pre jednotlivé aplikácie. Tu je najrýchlejšia oprava plus alternatívy.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Ak je jedna aplikácia príliš tichá aj pri maximálnej hlasitosti, najrýchlejšia spoľahlivá oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, panel s ponukami pre jednotlivé aplikácie pre macOS. Poskytuje každej aplikácii vlastný posúvač a hlasitosť <strong>posilniť</strong> ktorý posúva jednu aplikáciu nad 100 %, takže tichý videohovor alebo karta prehliadača budú hlasnejšie bez toho, aby ste sa dotkli hlasitosti systému. Je to jednorazová aplikácia v hodnote 14,99 EUR na Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Ako posilniť tichú aplikáciu na Mac (minulý maximálny objem)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo je jedna aplikácia tichá aj na 100 %</h2>
<p>macOS má iba jeden hlavný zväzok. Keď ho zdvihnete, všetko sa razom zosilní. Každá aplikácia však vydáva zvuk aj na svojej vlastnej internej úrovni a táto úroveň sa veľmi líši. Ticho zvládnutý klip YouTube, volajúci Zoom so zlým mikrofónom, hra s nízkym mixovaním dialógov alebo karta prehliadača s jemným streamom, to všetko môže sedieť ďaleko pod všetkým ostatným, dokonca aj s vaším Mac naplno.</p>
<p>Skutočný problém: macOS má <strong>žiadny vstavaný mixér hlasitosti pre jednotlivé aplikácie</strong>. Windows má jeden už roky (Zmiešavač hlasitosti, kliknite pravým tlačidlom myši na ikonu reproduktora). Na Mac neexistuje žiadny natívny spôsob, ako zapnúť jednu aplikáciu, zatiaľ čo ostatné nechať na pokoji, a rozhodne žiadny spôsob, ako zosilniť jednu aplikáciu. <em>vyššie</em> jeho normálne maximum. To je tá medzera, na ktorú narážate.</p>

<h2>Najrýchlejšia oprava: vylepšite iba jednu aplikáciu</h2>
<p>Mixér pre jednotlivé aplikácie to rieši vložením medzi vaše aplikácie a váš výstup, takže môže každý stream nezávisle zvýšiť alebo znížiť a jeden zosilniť nad 100 %. S <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, tok je krátky:</p>
<ul>
<li>Nainštalujte zo Mac App Store a otvorte ho. Žije vo vašom paneli s ponukami, nie v plávajúcom okne.</li>
<li>Kliknutím na ikonu na paneli s ponukami zobrazíte posúvač pre každú aplikáciu, ktorá práve prehráva zvuk.</li>
<li>Nájdite tichú aplikáciu a presuňte jej posúvač nad 100 %, aby ste použili zosilnenie. Zosilňuje iba túto aplikáciu.</li>
<li>Všetko ostatné nechajte tam, kde to je. Hlasitosť vášho systému a ďalšie aplikácie zostanú nedotknuté.</li>
</ul>
<p>Pretože podpora je na aplikáciu, môžete posunúť tichý videohovor na pohodlnú úroveň a zároveň zabrániť tomu, aby hudba alebo upozornenia trhali uši. To je hlavná vec, ktorú vstavané ovládacie prvky macOS jednoducho nedokážu.</p>

<h2>Poznámka o zosilnení a orezaní</h2>
<p>Boost je skutočne užitočný, ale je to zosilnenie, nie kúzlo. Ak je pôvodný zvuk aplikácie veľmi tichý alebo už skreslený, jeho prudké zatáčanie môže spôsobiť orezanie alebo jasnejšie syčanie pozadia. V praxi mierne zosilnenie vyrieši prevažnú väčšinu situácií „tento hovor je príliš tichý“. Posúvajte ho, kým sa aplikácia nebude cítiť pohodlne, namiesto toho, aby ste ňou buchli o strop, a zvuk zostane čistý.</p>

<h2>Okrem posilňovania: čo ešte pomáha</h2>
<p>Akonáhle budete mať kontrolu pre jednotlivé aplikácie, niekoľko funkcií spôsobí, že problém s tichou aplikáciou navždy zmizne:</p>
<ul>
<li><strong>Objemové profily</strong> — uložiť nastavenie (napr. „zosilniť Zoom, znížiť Spotify, stlmiť Slack“) a vyvolať ho jedným kliknutím namiesto opätovného presúvania posúvačov pri každom stretnutí.</li>
<li><strong>Auto-ducking</strong> — pri prehrávaní zvolenej aplikácie automaticky prepínajú ostatné aplikácie, takže cez zvuk na pozadí bude zreteľne počuť zosilnený hovor.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — stíšiť jednu hlučnú aplikáciu bez pozastavenia čohokoľvek iného.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — skok medzi reproduktormi, slúchadlami alebo externým rozhraním z rovnakej ponuky.</li>
</ul>

<h2>A čo bezplatné a profesionálne alternatívy?</h2>
<p>Máte možnosti a tu záleží na úprimnosti, takže tu je skutočná krajina.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) je profesionálna voľba za približne 39 dolárov. Robí objem na aplikáciu plus ekvalizér na aplikáciu a plné výstupné smerovanie, viac energie, než väčšina ľudí potrebuje. Kompromisy: stojí to viac ako dvojnásobok, je to skôr priame stiahnutie ako App Store a na svoju prácu inštaluje ovládač na zachytávanie zvuku. Ak chcete sadu nástrojov zvukového inžiniera, je to vynikajúce. Ak chcete len jednu aplikáciu hlasnejšiu, je to prehnané.</p>
<p><strong>Background Music</strong> je bezplatný a s otvoreným zdrojom a dokáže vytvoriť základný objem pre jednotlivé aplikácie. Ale je to komunitný projekt, ktorý má za sebou históriu prelomenia na novších verziách macOS a chýba mu podpora nad 100 %, profily a automatické uhýbanie. Skvelé, ak je zadarmo jedinou požiadavkou a nevadí vám občasné rozbitie.</p>
<p><strong>FineTune</strong> je bezplatná aplikácia s otvoreným zdrojom ponuky a <strong>eqMac</strong> je bezplatný EQ a systémový zosilňovač. Oboje sa oplatí vyskúšať, ak je váš rozpočet nulový. Len vedzte, že sú spravované komunitou, zameriavajú sa na EQ alebo sú jednoduchšie na správu jednotlivých aplikácií, a nespájajte profily a schovávajte sa do jedného elegantného balíka.</p>
<p>Kde <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pristane: je to stredná cesta. Lacnejší ako SoundSource, schopnejší a spoľahlivejší ako bezplatné nástroje, a je na svete <strong>Mac App Store</strong>, čo znamená, že skontrolované spoločnosťou Apple, v karanténe a nainštaluje sa čisto s <strong>žiadne DMG a žiadne zvukové ovládače alebo rozšírenia</strong> pripevniť k vášmu systému. Pre väčšinu ľudí je úprimné odporúčanie jednoduché: ak chcete opravu s najmenšími problémami, ktorá vám tiež poskytne podporu, profily a automatické uhýbanie, je to najlepšia hodnota za 14,99 EUR jednorazovo.</p>

<h2>Rýchla odpoveď, znovu</h2>
<blockquote>Ak chcete, aby bola jedna aplikácia Mac hlasnejšia, než je jej maximum, použite zosilnený mixér hlasitosti pre jednotlivé aplikácie. Otvorte SoundDial z panela s ponukami, nájdite posúvač tichej aplikácie a potiahnite ho za hranicu 100 %. Iba táto aplikácia je hlasnejšia.</blockquote>

<p>Prestaňte bojovať s jediným posúvačom hlasitosti pre celý váš Mac. Získajte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 EUR raz, vylepšite túto tichú aplikáciu nad limit v priebehu niekoľkých sekúnd a uložte si profil, aby ste na to už nikdy nemuseli myslieť.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Ako zosilniť tiché videá a podcasty na vašom Mac",
    description: "Niektoré videá, podcasty a prednášky YouTube sú príliš tiché aj pri 100 %. Tu je návod, ako zvýšiť objem jednotlivých aplikácií nad maximum na macOS pomocou SoundDial.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Najrýchlejšia a najspoľahlivejšia oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store panelový mixážny pult, ktorý dáva každej aplikácii vlastný posuvník hlasitosti a skutočný <strong>posilniť</strong> čo presahuje 100%. Otvorte prehliadač alebo prehrávač podcastov, potiahnite jeho posúvač nad maximum a tiché video alebo prednáška sa okamžite zosilnia – žiadne ovládače, žiadne reštartovanie.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Ako zosilniť tiché videá a podcasty na vašom Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo sú niektoré videá a podcasty príliš tiché</h2>
<p>Natočíte svoj Mac na 100 % a rozhovor je stále len šepot. Toto nie je tvoja predstava. Zvuk je zvládnutý na veľmi odlišných úrovniach hlasitosti – webinár zaznamenaný na mikrofóne prenosného počítača, tichý nezávislý podcast alebo nahraná stará prednáška môže sedieť 15–20 dB pod profesionálne vyrobeným videom YouTube. Hlasitosť vášho systému je už maximalizovaná, takže vám už nezostáva žiadny priestor.</p>
<p>Tu je háčik: macOS má <strong>žiadny vstavaný mixér hlasitosti pre jednotlivé aplikácie</strong>. Windows má jeden už roky (zmiešavač hlasitosti v systémovej lište), ale na Mac sa tlačidlá hlasitosti posúvajú o jednu globálnu úroveň pre všetko. Neexistuje žiadny natívny spôsob, ako povedať „zvýšiť iba túto kartu prehliadača“ – nehovoriac o prekročení 100 % jednej aplikácie.</p>

<h2>Skutočná oprava: zvýšenie hlasitosti na aplikáciu</h2>
<p>Ak chcete, aby bol tichý zdroj hlasnejší, než vaše reproduktory bežne umožňujú, potrebujete softvér, ktorý aplikuje zosilnenie <em>konkrétne tú aplikáciu</em> a môže sa zvýšiť nad 100 % strop. To je presne to, čo robí mixér pre jednotlivé aplikácie s funkciou boost.</p>
<p>S <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, každá spustená aplikácia sa zobrazí v zozname na lište ponuky s vlastným posúvačom. Posuňte tichú aplikáciu až o 150 % alebo 200 % a zvuk sa zosilní v reálnom čase. Pretože podpora je pre každú aplikáciu, všetko ostatné – vaša hudba, upozornenia, hovor v inom okne – zostane na normálnej úrovni. Nenabíjate celý systém, aby ste počuli jeden jemný podcast.</p>
<blockquote>Globálna hlasitosť sa pýta: „Ako hlasný je Mac?“ Mixér pre jednotlivé aplikácie sa pýta: „Ako je to nahlas <em>toto</em> aplikáciu?" — čo je otázka, na ktorej skutočne záleží, keď je jedno video tiché a ostatné sú v poriadku.</blockquote>

<h2>Ako zosilniť tiché video alebo podcast, krok za krokom</h2>
<ul>
<li><strong>Nainštalujte SoundDial</strong> z modelu Mac App Store. Je v sandboxe a skontrolovaná spoločnosťou Apple, takže sa inštaluje čisto ako ktorákoľvek iná aplikácia – žiadne samostatné sťahovanie, žiadny zvukový ovládač, žiadna rukavica na povolenie.</li>
<li><strong>Začnite hrať</strong> tiché video, epizóda podcastu alebo prednáška v akejkoľvek aplikácii, ktorú používate – Safari, Chrome, klient podcastov, VLC.</li>
<li><strong>Kliknite na ikonu SoundDial</strong> v paneli s ponukami. Pre každú aplikáciu, ktorá momentálne vydáva zvuk, sa zobrazí posúvač.</li>
<li><strong>Presuňte posúvač danej aplikácie nad 100 %</strong> — najprv skúste 150 % a potom zatlačte vyššie, ak je stále príliš mäkké. Zmena je okamžitá.</li>
<li><strong>Všetko ostatné nechajte tak.</strong> Hlasnejšia bude iba aplikácia, ktorú ste posilnili; váš systém zostane vyvážený.</li>
</ul>
<p>Ak zistíte, že každý deň vylepšujete tie isté aplikácie – povedzme prehrávač podcastov a váš prehliadač – môžete toto nastavenie uložiť ako <strong>objemový profil</strong> a vyvolať ho jedným kliknutím namiesto toho, aby ste ho zakaždým znova upravovali.</p>

<h2>Pozor pri posilňovaní</h2>
<p>Zosilnenie nad 100 % pridáva zisk a zisk má limity. Zatlačte na veľmi tichú nahrávku nízkej kvality dostatočne silno a môžete počuť sekanie alebo skreslenie – to je zdroj bez čistého signálu, nie chyba v aplikácii. Zosilňujte, kým nebude pohodlne počuteľné, a potom ustúpte, ak to začne znieť drsne. Na vstavaných reproduktoroch notebooku môže extrémne zosilnenie zaťažiť aj vodičov, takže tam choďte jednoduchšie ako s dobrými slúchadlami alebo externými reproduktormi.</p>

<h2>A čo bezplatné alebo vstavané možnosti?</h2>
<p>Máte alternatívy a stojí za to byť k nim úprimný:</p>
<ul>
<li><strong>Systémová hlasitosť + posuvníky na úrovni aplikácie.</strong> Niektoré prehrávače (VLC, niekoľko prehliadačov prostredníctvom rozšírení) vám umožňujú zosilniť vlastný zvuk. Dobre, ak to niekedy potrebujete iba v jednej aplikácii – ale nemusíte konfigurovať každú aplikáciu samostatne, bez jednotného ovládania a bez profilov.</li>
<li><strong>eqMac</strong> je bezplatný EQ a booster. Môže zvýšiť hlasitosť v celom systéme, ale je to globálny nástroj, nie čistý mixér pre jednotlivé aplikácie a funguje na úrovni celého výstupu.</li>
<li><strong>Background Music</strong> je bezplatný a otvorený zdroj a ponúka objem pre jednotlivé aplikácie. Spolieha sa však na nastavenie zachytávania zvuku, ktoré sa môže zlomiť na novších verziách macOS, a chýba mu vyhradené zosilnenie, profily a automatické stláčanie.</li>
<li><strong>FineTune</strong> je bezplatná aplikácia na paneli s ponukami s otvoreným zdrojom – ľahká možnosť, ak chcete základy a nevadí vám softvér spravovaný komunitou.</li>
<li><strong>SoundSource</strong> od Rogue Amoeba (~ 39 $) je profesionálna ťažká váha: EQ na aplikáciu, výstupné smerovanie, funguje. Vyžaduje tiež stiahnutie a ovládač na zachytávanie zvuku a stojí viac ako dvojnásobok SoundDial. Overkill, ak všetko, čo chcete, je urobiť tichý zvuk hlasnejším.</li>
</ul>

<h2>Prečo je SoundDial praktickou voľbou</h2>
<p>SoundDial je ideálnym miestom pre tento presný problém. to je <strong>14,99 € jednorazovo</strong> — bez predplatného — a žije na <strong>Mac App Store</strong>, čo znamená, že je v karanténe, skontrolovaný spoločnosťou Apple a inštaluje sa bez akéhokoľvek rozšírenia DMG alebo systému, ktorému by ste mohli dôverovať. Získate podporu pre každú aplikáciu, pre ktorú ste skutočne prišli, plus profily, stlmenie zvuku podľa aplikácie, rýchle prepínanie výstupu a <strong>auto-ducking</strong> ktoré potopia ostatné aplikácie, keď sa potrebujete sústrediť na jednu. Robí to nahlas jednoducho a zvyšok robí dobre.</p>

<p><strong>Už vás nebaví počúvať tiché videá a podcasty?</strong> <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> za 14,99 EUR a dajte každej aplikácii vlastný objem – s podporou, aby ste čokoľvek počuli jasne.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Ako nastaviť inú hlasitosť pre každú aplikáciu na Mac",
    description: "macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Tu je návod, ako nastaviť nezávislé, trvalé úrovne hlasitosti pre každú aplikáciu na Mac pomocou SoundDial a alternatív.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>macOS nemá vstavaný spôsob, ako nastaviť inú hlasitosť pre každú aplikáciu, takže potrebujete mixér hlasitosti na paneli s ponukami. Najrýchlejšia a najspoľahlivejšia oprava je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikácia Mac App Store, ktorá každej aplikácii poskytuje vlastný posuvník hlasitosti, stlmenie zvuku pre každú aplikáciu a podporu, ktorá posúva tiché aplikácie nad 100 %. Nastavte si úrovne raz a budú sa držať.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Ako nastaviť inú hlasitosť pre každú aplikáciu na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo Mac nemá ovládanie hlasitosti pre jednotlivé aplikácie</h2>
<p>Ak ste prešli zo Windows, pravdepodobne ste hľadali ekvivalent Windows Volume Mixer, malý panel, kde má každá aplikácia svoj vlastný posuvník. Nie je tam. macOS ponúka iba jeden globálny systémový zväzok. Či už ide o video YouTube, hovor Zoom, Spotify alebo hru, všetky zdieľajú rovnakú majstrovskú úroveň.</p>
<p>To je v poriadku, kým nie je. Discord chat prehluší vašu hudbu. Reklama v prehliadači sa spustí na plnú hlasitosť, zatiaľ čo sa podcast ticho prehráva. Vaša hra je ohlušujúca, ale hlasový hovor na pozadí je príliš tichý. Jediným „riešením“, ktoré vám Apple ponúka, je otvoriť každú aplikáciu a manuálne upraviť jej internú hlasitosť, ak ju aplikácia vôbec má, a opakovať to pri každej relácii.</p>
<p>Ak chcete získať skutočnú kontrolu pre jednotlivé aplikácie, potrebujete malý nástroj, ktorý sa nachádza medzi vašimi aplikáciami a výstupným zariadením. Nižšie je uvedený postup, ako to urobiť správne, plus úprimné poznámky o alternatívach.</p>

<h2>Najrýchlejší spôsob: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> žije vo vašom paneli s ponukami a zobrazuje všetky aplikácie, ktoré práve prehrávajú zvuk. Každý z nich má samostatný posúvač. Tu je celý pracovný postup:</p>
<ul>
<li><strong>Nainštalujte zo Mac App Store.</strong> Je skontrolovaný spoločnosťou Apple a v karanténe, takže nie je potrebné schváliť žiadne DMG, žiadny zvukový ovládač a žiadne rozšírenie jadra alebo systému. Inštaluje sa ako každá normálna aplikácia a dá sa odstrániť rovnakým spôsobom.</li>
<li><strong>Kliknite na ikonu panela s ponukami.</strong> Uvidíte posúvač pre každú aktívnu aplikáciu a hlavný ovládací prvok.</li>
<li><strong>Potiahnutím nastavíte úrovne.</strong> Zapnite Discord, posuňte Spotify nahor a úplne stlmte hlučnú aplikáciu na karte prehliadača jediným kliknutím.</li>
<li><strong>Posilnite tiché aplikácie.</strong> Ak je aplikácia príliš mäkká aj pri 100 %, posuňte ju nad 100 % s podporou pre jednotlivé aplikácie.</li>
<li><strong>Uložiť profil.</strong> Uložte si svoj „herný“, „pracovný hovor“ alebo „hudbu“ a okamžite medzi nimi prepínajte namiesto toho, aby ste každý deň preťahovali posúvače.</li>
</ul>
<p>Za zmienku stoja dve funkcie, pretože riešia tie najnepríjemnejšie scenáre:</p>
<ul>
<li><strong>Auto-ducking</strong> automaticky zníži úroveň ostatných aplikácií, keď sa prehráva zvolená aplikácia, takže vaša hudba sa pri prichádzajúcom hovore zníži a potom sa vráti späť, žiadne manuálne hranie.</li>
<li><strong>Rýchle prepínanie výstupov</strong> umožňuje preskakovať medzi slúchadlami a reproduktormi z rovnakej ponuky bez toho, aby ste museli prejsť do nastavení systému.</li>
</ul>
<p>Keďže úrovne sa pamätajú pre každú aplikáciu a ukladajú sa do profilov, toto je časť, ktorú väčšina ľudí v skutočnosti chce: nastavíte ju raz a <em>pobyty</em> nastaviť.</p>

<h2>Bezplatné a platené alternatívy, úprimne porovnané</h2>
<p>SoundDial nie je jedinou možnosťou a v závislosti od vašich potrieb môže stačiť bezplatný nástroj. Tu je spravodlivý prehľad.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource je profesionálna ťažká váha. Okrem hlasitosti pre jednotlivé aplikácie robí EQ pre každú aplikáciu a úplné smerovanie výstupu, takže jednu aplikáciu môžete poslať do slúchadiel a druhú do reproduktorov. Je to skutočne vynikajúce. Kompromisy: stojí to okolo 39 dolárov a nie je to čistá inštalácia App Store, je to priame stiahnutie, ktoré si vyžaduje pridanie ovládača na zachytávanie zvuku do vášho systému. Ak ste audio profesionál, ktorý potrebuje EQ a smerovanie, stojí to za to. Ak chcete, aby každá aplikácia mala správnu hlasitosť, je to viac nástrojov a viac nastavení, ako potrebujete.</p>

<h2>Background Music (open-source, zadarmo)</h2>
<p>Background Music je bezplatná aplikácia s otvoreným zdrojom, ktorá ponúka objem pre jednotlivé aplikácie a automatické pozastavenie. Háčik je v spoľahlivosti: nainštaluje virtuálne zvukové zariadenie a v novších vydaniach macOS má históriu porúch, ktoré si niekedy vyžadujú preinštalovanie alebo opravy po aktualizáciách. Chýba mu tiež podpora, uložené profily a skutočné automatické uhýbanie. Skvelé, ak chcete zadarmo a nevadí vám občasná údržba.</p>

<h2>FineTune a eqMac</h2>
<p>FineTune je bezplatná aplikácia na paneli s ponukami s otvoreným zdrojovým kódom, ktorá predstavuje jednoduchý východiskový bod. eqMac je bezplatný ekvalizér s celosystémovým zosilňovačom, ktorý je zameraný skôr na ekvalizér a celkový zisk, než na to, aby každej aplikácii dal vlastný trvalý posúvač. Oboje sa oplatí vyskúšať, ak je vaša potreba úzka, ale ani jedno sa nezameriava na pracovný postup „iný objem na aplikáciu, uložené ako profily“.</p>

<h2>Ktoré by ste si mali vybrať?</h2>
<ul>
<li><strong>Chcete, aby to fungovalo čisto, s profilmi a automatickým sklopením?</strong> SoundDial za 14,99 EUR jednorazovo, od App Store, bez inštalácie ovládačov.</li>
<li><strong>Potrebujete ekvalizér a smerovanie zvuku podľa aplikácie a nevadí vám cena alebo ovládač?</strong> SoundSource.</li>
<li><strong>Chcete zadarmo a ste v poriadku, keď sa aktualizujete macOS?</strong> Background Music, FineTune alebo eqMac.</li>
</ul>
<p>Skutočnou výhodou SoundDial je kombinácia: nezávislá hlasitosť, stlmenie a zosilnenie pre každú aplikáciu, uložené do prepínateľných profilov, s automatickým zmenšením, to všetko v rámci stiahnutého súboru App Store v karanténe, ktorému môžete dôverovať a odinštalovať ho jediným kliknutím, za jednorazovú cenu 14,99 EUR namiesto predplatného.</p>

<blockquote>Žiadny ovládač, žiadne rozšírenie, žiadne DMG. Nastavte hlasitosť každej aplikácie raz, uložte ju ako profil a o zvyšok sa postará automatické znižovanie hlasitosti.</blockquote>

<p>Ste pripravení dať každej aplikácii vlastný objem? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> a nastavte si dokonalú zmes asi za minútu.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Urobte jednu aplikáciu tichšiu ako všetko ostatné na Mac",
    description: "Jedna hlasná aplikácia, ktorá prehluší zvyšok vášho Mac? Tu je najrýchlejší a spoľahlivý spôsob, ako stíšiť hlasitosť jednej aplikácie bez toho, aby ste sa dotkli ostatných.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak chcete vypnúť jednu aplikáciu, zatiaľ čo všetko ostatné zostane na mieste, použite <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, panel s ponukami pre jednotlivé aplikácie pre macOS. Otvorte ju, nájdite hlasnú aplikáciu v zozname a potiahnite jej posúvač nadol. Táto aplikácia je okamžite tichšia, zatiaľ čo vaša hudba, hovory a ďalší zvuk si zachovávajú svoju vlastnú úroveň. Je to najrýchlejšia a najspoľahlivejšia oprava.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Urobte jednu aplikáciu tichšou ako všetko ostatné na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo to macOS robí tak ťažkým</h2>

<p>Tu je frustrujúca pravda: macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows ho má už roky (kliknite pravým tlačidlom myši na ikonu hlasitosti, otvorte Mixér hlasitosti, hotovo), ale na Mac tlačidlá hlasitosti a posúvač na paneli s ponukami ovládajú iba jednu vec: hlavný výstup. Stíšte to a všetko spolu pôjde tichšie. Zapnite to a hlasná aplikácia bude stále hlasná, len hlasnejšia spolu so zvyškom.</p>

<p>Takže keď sú zvukové efekty hry výbušné, karta prehliadača automaticky prehráva reklamu alebo sa vo vašom podcaste neustále šíria upozornenia, vaše jediné natívne možnosti sú neohrabané: stlmiť celý systém, prehrabať sa vlastným nastavením hlasitosti každej aplikácie (ak vôbec nejaké má) alebo úplne ukončiť páchateľa. Nič z toho vám neumožňuje jednoducho povedať „urobte túto aplikáciu tichšou a nechajte všetko ostatné na pokoji“.</p>

<h2>Rýchla oprava: mixér hlasitosti na aplikáciu</h2>

<p>Mixér hlasitosti pre jednotlivé aplikácie dáva každej spustenej aplikácii vlastný nezávislý posúvač. To je presne to ovládanie, ktoré vám chýba. S <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vyzerá to takto:</p>

<ul>
<li><strong>Otvorte panelový mixér s ponukami.</strong> Kliknite na ikonu SoundDial a uvidíte živý zoznam všetkých aplikácií, ktoré práve prehrávajú zvuk.</li>
<li><strong>Nájdite toho hlasného.</strong> Hra, prehliadač, videohovor, zvuky upozornení, čokoľvek, čo utopí zvyšok.</li>
<li><strong>Potiahnite jeho posúvač nadol.</strong> Nastavte ho na 40%, 20%, kdekoľvek sa to cíti vyvážene. Zmena je okamžitá a týka sa iba danej aplikácie.</li>
<li><strong>Všetko ostatné nechajte tak.</strong> Váš hudobný prehrávač, váš hovor, vaše ďalšie karty, všetky zachovávajú hlasitosť, ktorú ste im nastavili.</li>
</ul>

<p>Môžete tiež úplne stlmiť jednu aplikáciu jedným kliknutím, zatiaľ čo ostatné hrajú, alebo zvýšiť tichú aplikáciu nad 100 %, ak je príliš tichá. Žiadne reštartovanie aplikácie, žiadne potápanie v menu.</p>

<h2>Bežné prípady, kedy vás to zachráni</h2>

<ul>
<li><strong>Hlasná hra cez hudbu na pozadí.</strong> Pustite hru na pohodlnú úroveň a udržujte pod ňou svoj zoznam skladieb na plnej hlasitosti.</li>
<li><strong>Reklamy v prehliadači a video, ktoré prudko stúpajú.</strong> Pripnite si prehliadač nižšie, aby vás prekvapivé automatické prehrávanie nikdy nezlomilo.</li>
<li><strong>Oznámenie zvoní cez hovor alebo podcast.</strong> Vypnite aplikáciu s množstvom upozornení bez toho, aby ste stlmili zvuk, na ktorom vám skutočne záleží.</li>
<li><strong>Tichý videohovor pod hlasnými médiami.</strong> Namiesto stlmenia hlasitej aplikácie zvýšte hovor nad 100 %, aby ste ľudí jasne počuli.</li>
</ul>

<h2>Nastavte ho raz pomocou profilov hlasitosti a automatického zníženia hlasitosti</h2>

<p>Oprava jednej hlasnej aplikácie je pekná, ale pravdepodobne budete chcieť, aby zostala opravená. SoundDial má dve funkcie, vďaka ktorým je toto trvalé:</p>

<p><strong>Objemové profily</strong> vám umožní uložiť množinu úrovní pre jednotlivé aplikácie a vyvolať ich jediným kliknutím. Zostavte si profil „Hry“, kde hra sedí na 30 % a hudba na 100 %, a profil „Práca“, kde sú hovory posilnené a všetko ostatné je utlmené. Prepínajte kontexty bez opätovného presúvania posúvačov zakaždým.</p>

<p><strong>Auto-ducking</strong> automaticky zníži úroveň ostatných aplikácií, keď sa vybraná aplikácia prehrá, a potom ich vráti späť, takže hlasná aplikácia nikdy úplne nezachytí váš zvuk. Medzi profilmi, znížením hlasitosti a rýchlym prepínaním výstupu (preskakovanie medzi reproduktormi a slúchadlami bez otvorenia nastavení systému) raz nastavíte rovnováhu a prestanete strážiť hlasitosť.</p>

<h2>Ako sa SoundDial porovnáva s alternatívami</h2>

<p>Existujú aj iné spôsoby, ako získať objem jednotlivých aplikácií na Mac. Tu je úprimný pohľad:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~ 39 USD)</strong> je skutočne profesionálny: ekvalizér pre jednotlivé aplikácie a plné výstupné smerovanie nad ovládaním hlasitosti. Stojí to však viac ako dvojnásobok a vyžaduje si samostatné stiahnutie a ovládač na zachytávanie zvuku. Ak chcete sadu nástrojov na úrovni štúdia, je to vynikajúce. Ak chcete vypnúť iba jednu aplikáciu, je to viac, ako potrebujete.</li>
<li><strong>Background Music</strong> je zadarmo a s otvoreným zdrojom, čo je skvelé, ale na novších verziách macOS sa môže zlomiť a chýba mu zvýšenie hlasitosti, profily a automatické stláčanie.</li>
<li><strong>FineTune</strong> je bezplatná aplikácia s otvoreným zdrojom ponuky a <strong>eqMac</strong> je bezplatný EQ s boosterom. Oboje sa oplatí vyskúšať, ak je vašou prioritou bezplatné, ale za cenu vymieňate lesk, spoľahlivosť a funkcie.</li>
</ul>

<p>SoundDial je na sladkom mieste: 14,99 EUR jednorazovo, bez predplatného. Pretože je to na Mac App Store, je skontrolované spoločnosťou Apple a v sandboxe a inštaluje sa čisto bez DMG, bez zvukových ovládačov a bez systémových rozšírení na schválenie. Získate funkcie, ktoré sú pre tento problém skutočne dôležité, objem jednotlivých aplikácií, stlmenie, zosilnenie, profily a automatické stlmenie bez cenovky 39 dolárov alebo krehkého bezplatného nástroja.</p>

<h2>Spodný riadok</h2>

<p>macOS vám nedovolí vypnúť jedinú aplikáciu, ale to je medzera, ktorú môžete zatvoriť v priebehu niekoľkých sekúnd. Nainštalujte mixér pre jednotlivé aplikácie, potiahnite posúvač hlasnej aplikácie nadol a zvyšok zvuku zostane presne tam, kde ho chcete mať. Uložte si profil a už nikdy s tým nebudete bojovať.</p>

<p><strong>Ste pripravení umlčať jednu aplikáciu, ktorá neustále utápa zvyšok?</strong> Získajte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 €, jedna platba, bez ovládačov, bez predplatného.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mac Audio Mixer pre streamery: Vyváženie mikrofónu, hier a hudby",
    description: "Najrýchlejší spôsob vyváženia mikrofónu, zvuku hry, hudby a upozornení pri streamovaní na Mac. SoundDial vám ponúka mixér hlasitosti pre každú aplikáciu s profilmi a znížením hlasitosti.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Na vyváženie mikrofónu, hry, hudby a upozornení pri streamovaní na Mac je najrýchlejšia spoľahlivá oprava <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, panel s ponukami pre jednotlivé aplikácie. macOS nemá vstavaný mixážny pult, takže SoundDial vám umožňuje nastaviť nezávislé úrovne pre každú aplikáciu, zosilniť tiché zdroje, uložiť profily streamovania a automaticky spustiť hudbu, keď hovoríte.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Audio Mixer pre streamery: Vyváženie mikrofónu, hier a hudby" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Problém: macOS nemá ovládanie hlasitosti pre jednotlivé aplikácie</h2>
<p>Windows má už roky mixér hlasitosti. macOS sa stále nedodáva. Posúvač hlasitosti systému posúva všetko naraz, čo je naživo zbytočné. Počas streamu žonglujete aspoň so štyrmi zdrojmi, ktoré všetky bojujú o rovnaký výstup:</p>
<ul>
<li><strong>Monitorovanie vášho hlasu / mikrofónu</strong> — potrebuje sedieť nad všetkým.</li>
<li><strong>Zvuk hry</strong> — hlasné, dynamické a náchylné na špičky počas akcie.</li>
<li><strong>Hudba na pozadí</strong> - mal by zostať ticho pod vaším komentárom.</li>
<li><strong>Upozornenia a zvuky chatu</strong> — Discord, Stream Deck, upozornenia sledovateľov, upozornenia.</li>
</ul>
<p>Bez ovládania jednotlivých aplikácií skončíte tak, že budete jazdiť na posúvači hry v aplikácii, ručne stlmíte Spotify a budete sa modliť, aby hlasná prestrihová scéna nesfúkla vašich divákov. To nie je mix, je to kontrola poškodenia.</p>

<h2>Čo musí robiť správny streamovací mixér</h2>
<p>Nastavenie zvuku zamerané na tvorcu na Mac by vám malo poskytnúť štyri veci: nezávislé úrovne pre jednotlivé aplikácie, možnosť zosilniť zdroj, ktorý je príliš tichý, uložené konfigurácie, ktoré si môžete okamžite vyvolať, a automatické stlmenie, takže hudba padne v momente, keď hovoríte. SoundDial pokrýva všetky štyri z panela s ponukami.</p>

<h3>1. Nezávislá hlasitosť pre každú aplikáciu</h3>
<p>Nastavte hru na 60 %, hudbu na 25 %, Discord na 80 % a prehliadač na 40 % – každá aplikácia má svoj vlastný posúvač. Nič nekrváca do ničoho iného. Môžete tiež okamžite vypnúť zvuk pre každú aplikáciu, keď sa zdroj v strede streamu správa nesprávne, bez toho, aby ste sa dotkli samotnej aplikácie.</p>

<h3>2. Zvýšenie hlasitosti pre tiché zdroje</h3>
<p>Niektoré aplikácie a hry sú jednoducho príliš tiché aj pri 100 %. Zosilnenie SoundDial pre jednotlivé aplikácie posúva zdroj za jeho normálny strop, takže mrmlavá hra alebo video s nízkou hlasitosťou sa zmestí tam, kde ich potrebujete – žiadne prekódovanie, žiadne doplnky.</p>

<h3>3. Profily hlasitosti pre rôzne scény</h3>
<p>Toto je funkcia, ktorá šetrí streamerom najviac času. Váš mix „Just Chatting“ (hudba hore, hra dole) sa líši od vášho mixu „Boss Fight“ (hra hore, hudba takmer tichá), čo sa líši od vášho mixu „BRB“. Uložte si každý ako profil a prepínajte jedným kliknutím namiesto ťahania štyroch posuvníkov naživo.</p>

<h3>4. Auto-ducking, takže hudba pod vašim hlasom ustúpi</h3>
<p>Automatické stlmenie zvuku automaticky zníži zvuk na pozadí, keď hovoríte, a vráti ho späť, keď prestanete. Pre sólo streamerov je to rozdiel medzi komentárom, ktorý je jasný, a hudbou, ktorá neustále pochováva váš hlas – spracovávaný automaticky namiesto manuálneho.</p>

<h2>Kde sa zmestí OBS</h2>
<p>OBS je váš nástroj na vysielanie, nie váš stolný mixér hlasitosti. OBS ovláda, aké úrovne idú do streamu, prostredníctvom panelu Audio Mixer a filtrov, ale funguje zo zdrojov zvuku, ktoré zachytáva – nesiaha do jednotlivých aplikácií macOS a neznižuje ich na systémovej úrovni. Na Mac bolo získanie čistého zvuku pre jednotlivé aplikácie do OBS vždy tou bolestivou časťou.</p>
<p>Praktický pracovný postup: použite SoundDial na nastavenie skutočných úrovní pre jednotlivé aplikácie na vašom Mac, takže to, čo vyjde, je už vyvážené, potom nechajte OBS zachytiť a doladiť úrovne vysielania. Nastavte mix raz pri zdroji a OBS má oveľa menej na boj. Rýchle prepínanie výstupu v SoundDial vám tiež umožňuje preskakovať medzi slúchadlami a reproduktormi bez toho, aby ste sa museli ponárať do nastavení systému medzi scénami.</p>

<h2>SoundDial vs. alternatívy</h2>
<p>Máte možnosti a tu záleží na úprimnosti:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~ 39 USD)</strong> — Pro-grade s ekvalizérom pre jednotlivé aplikácie a úplným výstupným smerovaním. Je to vynikajúce, ale stojí viac ako dvojnásobok, vyžaduje priame stiahnutie a inštaluje ovládač na zachytávanie zvuku. Overkill, ak potrebujete hlavne čisté úrovne pre jednotlivé aplikácie, zvýšenie a zníženie.</li>
<li><strong>Background Music (zadarmo, open-source)</strong> - skutočne užitočné a bezplatné, ale na novších verziách macOS sa môže zlomiť a nemá žiadne zosilnenie, žiadne profily a žiadne automatické uhýbanie - presné funkcie, o ktoré sa opierajú streamery.</li>
<li><strong>FineTune (bezplatná aplikácia s otvoreným zdrojom na paneli s ponukami)</strong> — ľahké ovládanie pre jednotlivé aplikácie, ale komunitný projekt bez kombinácie profilov a zníženia postavenia na živé vysielanie.</li>
<li><strong>eqMac (bezplatný ekvalizér + zosilňovač)</strong> — dobré na tvarovanie a zvýraznenie tónov, ale je to ekvalizér, nie streamovací mixér pre jednotlivé aplikácie.</li>
</ul>
<p>Uhol SoundDial: je to a <strong>14,99 € jednorazovo</strong> nákup na <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Skontrolované spoločnosťou Apple, v karanténe a nainštaluje sa čisto bez DMG a bez zvukových ovládačov alebo systémových rozšírení. Na tejto poslednej časti záleží pre streamerov: menej komponentov na úrovni jadra znamená menej prekvapení, keď sa macOS aktualizuje noc pred streamom.</p>

<h2>Úprimný kompromis</h2>
<p>Ak potrebujete EQ na úrovni vysielania a komplexné smerovacie reťazce, SoundSource zarobí svoju cenu. Ak chcete bezplatný drotársky nástroj a nevadí vám občasné rozbitie, Background Music alebo FineTune vám poslúži. Ak však chcete mix, ktorý si streamovanie skutočne vyžaduje – úrovne pre jednotlivé aplikácie, zosilnenie, profily uložených scén a automatické stláčanie – od bezpečnej inštalácie App Store, ktorá prežije aktualizácie macOS, SoundDial je najpriamejšia cesta za peniaze.</p>

<p><strong>Ste pripravení opraviť zvuk streamu?</strong> Získajte <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 € — nastavte si úroveň mikrofónu, hry, hudby a upozornení raz, uložte si ich ako profily a nechajte automatické stlmenie hlasu na vrchole.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Ako opraviť praskanie a praskanie zvuku na macOS Tahoe",
    description: "Praskajúci alebo praskajúci zvuk po aktualizácii na macOS Tahoe 26? Opravte to prispôsobením vzorkovacej frekvencie, resetovaním CoreAudio, skontrolovaním kodeku Bluetooth a odstránením konfliktov doplnkov. Tu je úplné poradie riešenia problémov.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Praskanie a praskanie po aktualizácii na macOS Tahoe 26 je takmer vždy nesúladom vzorkovacej frekvencie, nestálym vyjednávaním kodeku Bluetooth alebo zaseknutým procesom CoreAudio. Opravte to prispôsobením výstupnej vzorkovacej frekvencie v nastavení Audio MIDI, resetovaním <code>coreaudiod</code>, zabudnutie a opätovné spárovanie slúchadiel Bluetooth a ukončenie hostiteľov audio zásuvných modulov. Postupujte podľa nižšie uvedeného poradia.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Ako opraviť praskanie a praskanie zvuku na macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Začnite s lacnými opravami</h2>

<p>Predtým, ako sa dotknete niečoho technického, vylúčte dve veci, ktoré vyriešia väčšinu prípadov za menej ako minútu:</p>

<ul>
<li><strong>Reštartujte Mac.</strong> Aktualizácia Tahoe prekvapivo často ponecháva zvukových démonov v polovičnom migrovanom stave. Čistý reštart znova načíta CoreAudio od začiatku a odstráni väčšinu praskania po aktualizácii.</li>
<li><strong>Odpojte a znova pripojte výstupné zariadenie.</strong> Ak ide o USB DAC, dock alebo audio rozhranie, odpojte ho, počkajte niekoľko sekúnd a znova ho pripojte. Vyskúšajte aj iný USB port, ideálne jeden priamo na Mac a nie cez rozbočovač. Rozbočovače a displeje, ktoré prenášajú zvuk, sú bežným zdrojom praskania.</li>
</ul>

<p>Ak hluk prežije reštart, ide o problém s konfiguráciou, nie o závadu. Pokračuj.</p>

<h2>Prispôsobte vzorkovaciu frekvenciu (najčastejšia príčina)</h2>

<p>Klasické praskanie Tahoe pochádza z nesúladu vzorkovacej frekvencie medzi tým, čo vaše zariadenie chce, a tým, čo posiela macOS. Keď aplikácia prehráva zvuk s frekvenciou 44,1 kHz a systém je uzamknutý na frekvencii 48 kHz (alebo naopak), prevzorkovanie môže koktať alebo praskať.</p>

<ul>
<li>Otvorte <strong>Nastavenie MIDI zvuku</strong> (v Aplikáciách → Pomôcky alebo vyhľadajte Spotlight).</li>
<li>V ľavom bočnom paneli vyberte svoje výstupné zariadenie.</li>
<li>Pozrite sa na <strong>Formátovať</strong> rozbaľovacia ponuka. Skúste to nastaviť na <strong>48000,0 Hz, 2ch-24bit Integer</strong> a testovať.</li>
<li>Ak praskanie pokračuje, prepnite na <strong>44100,0 Hz</strong> a znova otestujte.</li>
<li>V prípade rozhraní sa uistite, že vzorkovacia frekvencia zodpovedá projektovej frekvencii vášho DAW.</li>
</ul>

<p>Prepnutie formátu tiež prinúti CoreAudio znovu dohodnúť spojenie, čo samo o sebe vyrieši veľa prípadov, aj keď sa dostanete späť na rovnakú hodnotu.</p>

<h2>Resetovať CoreAudio</h2>

<p>CoreAudio beží ako démon na pozadí <code>coreaudiod</code>. Po veľkej aktualizácii macOS môže udržiavať zastaraný stav zariadenia. Reštartovanie je bezpečné a prejaví sa okamžite, bez reštartu.</p>

<p>Otvorte Terminal a spustite:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Po zobrazení výzvy zadajte svoje heslo. Váš zvuk sa na sekundu preruší, potom sa démon automaticky znova spustí s čistým štítom. Toto je jediná najúčinnejšia oprava praskania, ktorá sa objavuje z ničoho nič na počítači, ktorý bol pred aktualizáciou v poriadku.</p>

<h2>Skontrolujte slúchadlá a kodek Bluetooth</h2>

<p>Ak sa praskanie vyskytuje iba na slúchadlách AirPods alebo iných slúchadlách Bluetooth, problémom je zvyčajne vyjednávanie kodeku, nie vaše reproduktory. Kvalita bezdrôtového zvuku sa zhoršuje, keď je pripojenie preťažené alebo keď macOS prejde do režimu hovoru s nízkou šírkou pásma.</p>

<ul>
<li><strong>Zabudnite a znova spárujte zariadenie.</strong> Prejdite do Nastavenia systému → Bluetooth, vyberte slúchadlá a potom ich znova spárujte. Tým sa resetuje dohodnutý kodek.</li>
<li><strong>Sledujte pokles režimu hovoru.</strong> Keď aplikácia otvorí mikrofón, macOS prepne slúchadlá Bluetooth na obojsmerný profil nízkej kvality, ktorý znie chrumkavo. Ukončite konferenčné a hlasové aplikácie, ktoré nepoužívate, a vernosť sa vráti.</li>
<li><strong>Znížte rušenie.</strong> Choďte preč z preplnených 2,4 GHz prostredí a odpojte Bluetooth zariadenia, ktoré nepotrebujete. Rušné rozhlasové pásmo produkuje prerušované zvuky.</li>
<li><strong>Vypnite mikrofónny vstup</strong> v nastaveniach aplikácie, ak potrebujete iba počúvať, takže macOS zachováva vysokokvalitný profil prehrávania.</li>
</ul>

<h2>Ukončite hostiteľov audio doplnkov a virtuálne ovládače</h2>

<p>Zvukový softvér tretej strany, ktorý inštaluje systémové rozšírenie alebo virtuálne zariadenie, je po skoku operačného systému častým páchateľom, pretože rozšírenia jadra a zvuku často potrebujú aktualizáciu na novú verziu macOS. Medzi podozrivých patria virtuálne audio smerovače, aplikácie ekvalizéra, nástroje spätnej slučky a staršie nástroje založené na ovládačoch.</p>

<ul>
<li>Ukončite akýkoľvek ekvalizér, audio smerovač alebo aplikáciu na spätnú väzbu a otestujte, či praskanie prestane.</li>
<li>Skontrolujte Nastavenia systému → Všeobecné → Položky prihlásenia Rozšírenia &amp; pre zvukové rozšírenia, ktoré môžu vyžadovať aktualizáciu alebo odstránenie.</li>
<li>Aktualizujte tieto aplikácie na ich vydania kompatibilné s Tahoe alebo odinštalujte tie, ktoré už nepoužívate. Naskladané zvukové ovládače po veľkej aktualizácii často navzájom kolidujú.</li>
</ul>

<p>Ak ukončenie jednej z týchto aplikácií stíši praskanie, našli ste svojho vinníka. Preinštalujte aktuálnu verziu alebo ju nechajte vypnutú.</p>

<h2>Zúžte to: celý systém alebo jedna aplikácia?</h2>

<p>Zistite, či sa hluk vyskytuje všade alebo len v konkrétnom softvéri. Prehrajte miestny zvukový súbor, potom video prehliadača a potom hudobnú aplikáciu. Ak praskne iba jedna aplikácia, opravou sú vlastné nastavenia zvuku alebo aktualizácia tejto aplikácie, nie macOS. Ak ide o celý systém, odpoveď sa nachádza v krokoch vyššie.</p>

<p>Keď ste stále uviazli, spustite systém v núdzovom režime (podržte tlačidlo napájania na silikóne Apple a potom vyberte spúšťací disk a súčasne podržte kláves Shift). Núdzový režim nenačítava žiadne rozšírenia tretích strán. Ak je tam zvuk čistý, príčinou je prihlasovacia položka alebo ovládač a môžete ich po jednom znova povoliť, aby ste ich našli.</p>

<h2>Keď je váš zvuk čistý</h2>

<p>Praskanie je problém s ovládačom a vzorkovacou frekvenciou, takže vyššie uvedené opravy ho skutočne riešia. Keď je však prehrávanie stabilné, môžete si všimnúť iné obmedzenie: macOS stále nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie, ako to robí Windows. Hlasitú aplikáciu nemôžete vypnúť bez toho, aby ste stlmili všetko.</p>

<p>To je tá medzera <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vypĺňa. Je to mix panel s ponukami, ktorý každej aplikácii poskytuje vlastný posuvník hlasitosti, stlmenie zvuku pre každú aplikáciu a dokonca zvýšenie hlasitosti pre tiché aplikácie, plus rýchle prepínanie výstupu. Praskanie to neopraví, ale akonáhle je váš zvuk zdravý, značne zjednoduší každodenné ovládanie.</p>

<p>Vykonajte vyššie uvedené kroky v uvedenom poradí a začnite reštartovaním a kontrolou vzorkovacej frekvencie. Ak neskôr budete chcieť skutočnú kontrolu podľa aplikácie vo svojom nastavení čistého zvuku, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednorazový nákup za 14,99 EUR na Mac App Store v karanténe bez ovládačov alebo inštalácie DMG.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Zajakávanie alebo vyrezávanie na Mac (Tahoe Fix)",
    description: "AirPods koktanie, vystrihovanie alebo vypadávanie zvuku na macOS Tahoe je takmer vždy rušenie Bluetooth alebo automatické prepínanie. Tu je návod, ako znova spárovať, znížiť preťaženie 2,4 GHz a zastaviť prerušenia, ktoré prerušujú prehrávanie.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Zajakávanie alebo vysekávanie AirPods na macOS Tahoe je takmer vždy rušenie Bluetooth, nie rozbitá náhlavná súprava. Obvyklými vinníkmi sú 2,4 GHz Wi-Fi a preťaženie smerovača, agresívne automatické prepínanie zariadení a zastarané párovanie. Opätovne spárujte AirPods, vypnite automatické prepínanie a vzdiaľte sa od preplnených 2,4 GHz kanálov, aby ste vyriešili väčšinu prípadov.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Zajakávanie alebo vysekávanie na Mac (Tahoe Fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo AirPods klesnúť na Mac konkrétne</h2>

<p>AirPods používa Bluetooth, ktorý zdieľa preplnené rádiové pásmo 2,4 GHz s Wi-Fi, mikrovlnami, zariadeniami USB 3 a takmer každou inteligentnou zásuvkou vo vašej domácnosti. Váš Mac je rušné rádio: žongluje s funkciami Wi-Fi, Bluetooth, AirDrop a Continuity na prekrývajúcich sa anténach. Keď sa toto pásmo zahltí, zvuk Bluetooth sa zasekne ako prvé, pretože nedokáže tolerovať zahodené pakety ako prenos súborov.</p>

<p>Tahoe zázračne nezhoršil váš AirPods, ale čerstvá inštalácia macOS často resetuje správanie rádia, znova povolí odovzdávanie kontinuity a znovu vyjednáva kodeky. Preto sa zdá, že problémy sa objavujú hneď po aktualizácii. Dobrá správa: opravy sú dobre pochopené a väčšinou bezplatné.</p>

<h2>Oprava 1: Znovu spárujte AirPods (urobte to ako prvé)</h2>

<p>Zastarané alebo poškodené párovanie prežije reštarty a spôsobuje občasné poklesy, ktoré vyzerajú náhodne. Úplne odstráňte a znova pridajte pripojenie:</p>

<ul>
<li>Otvorte <strong>Systémové nastavenia, Bluetooth</strong>.</li>
<li>Kliknite na tlačidlo info (i) vedľa vášho AirPods a vyberte si <strong>Zabudnite na toto zariadenie</strong>.</li>
<li>Vložte AirPods do puzdra, zatvorte veko, počkajte 15 sekúnd a potom ho otvorte.</li>
<li>Podržte tlačidlo na zadnej strane puzdra, kým svetlo nezačne blikať nabielo.</li>
<li>Znova spárujte zo zoznamu Bluetooth.</li>
</ul>

<p>Keď ste tam, uistite sa, že firmvér AirPods je aktuálny. Neexistuje žiadny manuálny aktualizátor, ale ak ich na chvíľu necháte v puzdre v blízkosti pripojeného iPhonu alebo Mac, budú sa aktualizovať na pozadí.</p>

<h2>Oprava 2: Vypnite automatické prepínanie</h2>

<p>Toto je jediná najväčšia príčina „odrezania sa“ pre ľudí v ekosystéme Apple. Váš AirPods sa vás snaží sledovať medzi zariadeniami Mac, iPhone a iPad. Zakaždým, keď si váš telefón myslí, že by mal zachytiť zvuk, pripojenie na vašom Mac sa zasekne a vytvorí polsekundový výpadok uprostred podcastu.</p>

<ul>
<li>Na Mac: Bluetooth kliknite na (i) vedľa AirPods, nastavte <strong>Pripojte sa k tomuto Mac</strong> do <strong>Pri poslednom pripojení k tomuto Mac</strong> namiesto Automaticky.</li>
<li>Na iPhone: Nastavenia klepnite na svoj AirPods, <strong>Pripojte sa k tomuto iPhone</strong>, vyberte si <strong>Pri poslednom pripojení k tomuto iPhone</strong>.</li>
</ul>

<p>Tým sa zastaví ťahanice medzi zariadeniami. Manuálne si vyberiete, kam ide zvuk, čo je nízka cena za stabilné prehrávanie.</p>

<h2>Oprava 3: Znížte preťaženie 2,4 GHz</h2>

<p>Ak dôjde k poklesu počas videohovorov, sťahovania alebo pri streamovaní iných ľudí, vaše rádiové pásmo je preplnené. Niekoľko praktických krokov:</p>

<ul>
<li><strong>Použite pásmo Wi-Fi 5 GHz</strong> na vašom Mac. V nastaveniach smerovača pomenujte 5GHz sieť a pripojte sa k nej. Tým sa uvoľní pásmo 2,4 GHz pre Bluetooth.</li>
<li><strong>Presuňte rozbočovače USB 3 a Thunderbolt preč</strong> z vášho Mac a AirPods. USB 3 je notoricky známy 2,4 GHz zdroj hluku; rozbočovač, ktorý sa nachádza vedľa vášho notebooku, môže zničiť Bluetooth na niekoľko centimetrov.</li>
<li><strong>Zmeňte 2,4 GHz kanál smerovača</strong> na 1, 6 alebo 11 (neprekrývajúce sa možnosti) a vyhnite sa preplneným kanálom, ktoré používajú vaši susedia.</li>
<li><strong>Udržujte priamy výhľad.</strong> Telá a steny absorbujú 2,4 GHz. Ak je váš Mac za vami alebo vo vrecku, kvapky sa zhoršujú.</li>
</ul>

<blockquote>Smerovače Wi-Fi 6E a Wi-Fi 7 môžu pomôcť nepriamo: presunutím vašich zariadení na 6 GHz sa vymaže pásmo 2,4 GHz, na ktorom závisí Bluetooth. Ale zle nakonfigurovaná sieť, ktorá vás nasmeruje späť na 2,4 GHz, môže situáciu zhoršiť. Skontrolujte, na ktorej kapele vlastne ste.</blockquote>

<h2>Oprava 4: Resetujte zásobník Bluetooth a kontinuity</h2>

<p>Ak opätovné spárovanie neprebehlo, resetujte samotné rádiá:</p>

<ul>
<li>Vypnite a zapnite Bluetooth na paneli s ponukami a potom reštartujte Mac. Reštartovanie vymaže prekvapivý počet prechodných zvukových porúch.</li>
<li>Resetujte SMC/NVRAM na Intel Mac alebo jednoducho úplne vypnite (nie reštartujte) na 30 sekúnd na Apple Silicon.</li>
<li>Ak nepoužívate AirDrop alebo Handoff, zakázanie Handoff v Nastaveniach systému, Všeobecné, AirDrop &amp; Handoff obmedzí chvenie rádia na pozadí.</li>
</ul>

<h2>Čo to nevyrieši (a čo vlastne robí mixér na objem)</h2>

<p>Aby bolo jasné, pokiaľ ide o rozsah: nič z toho nie je problém so softvérom a žiadna aplikácia na meranie objemu nedokáže opraviť prepojenie Bluetooth. Ak je váš zvuk <em>zhadzovanie</em>, rieš problém s rádiom vyššie. Aplikácie ako <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ovládajú hlasitosť jednotlivých aplikácií, stlmenie a prepínanie výstupu, nedotýkajú sa zásobníka Bluetooth, takže neprestanú koktať. Tam, kde mixér skutočne pomáha, je susedná nepríjemnosť, ktorú si mnohí používatelia AirPods spájajú s výpadkami: jedna aplikácia beží, zatiaľ čo iná je príliš tichá, alebo potrebujú rýchlo preskočiť výstupy. To je problém s vyvážením hlasitosti, nie s pripojením.</p>

<p>Diagnostikujte čestne. Ak sa zvuk na chvíľu vypne a vráti sa, ide o rušenie alebo automatické prepnutie. Ak sú úrovne medzi aplikáciami nerovnomerné, je to problém miešania, ktorý môžete skutočne vyriešiť pomocou softvéru.</p>

<h2>Rýchly kontrolný zoznam</h2>

<ul>
<li>Zabudnite a znova spárujte AirPods.</li>
<li>Nastavte Mac aj iPhone na <strong>Pri poslednom pripojení</strong>, nie Automaticky.</li>
<li>Presuňte svoj Mac na 5GHz Wi-Fi; držte rozbočovače USB 3 mimo dosahu.</li>
<li>Nastavte 2,4 GHz na kanál 1, 6 alebo 11.</li>
<li>Reštartujte po prepnutí Bluetooth.</li>
</ul>

<p>Keď výpadky zmiznú a budete chcieť mať len lepšiu kontrolu nad hlasitosťou jednotlivých aplikácií, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pridáva správny mixér hlasitosti pre jednotlivé aplikácie, stlmenie, zosilnenie a rýchle prepínanie výstupu, ktoré macOS stále neobsahuje. Je to 14,99 EUR jednorazový nákup na Mac App Store v karanténe, bez inštalácie ovládačov.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Nefunkčný pravý reproduktor na Mac po aktualizácii Tahoe? Ako to opraviť",
    description: "Jeden reproduktor alebo kanál prestal fungovať po aktualizácii na macOS Tahoe? Začnite posuvníkom vyváženia zvuku, potom resetujte Core Audio, vyskúšajte núdzový režim a vylúčte hardvér. Prehľadný sprievodca riešením problémov.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Ak sa váš pravý reproduktor po aktualizácii na macOS Tahoe odmlčal, skontrolujte zvuk <strong>posúvač rovnováhy</strong> prvý — môže sa počas aktualizácie posunúť. Prejdite na Nastavenia systému &gt; Zvuk &gt; Výstup a skontrolujte, či je vyváženie v mŕtvom strede. Ak je to v poriadku, reštartujte Core Audio, spustite systém v núdzovom režime a potom vylúčte hardvér. Väčšina prípadov je softvér.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Nefunkčný pravý reproduktor na Mac po aktualizácii Tahoe? Ako to opraviť" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Po prvé: posuvník vyváženia (toto opravuje častejšie, ako by ste si mysleli)</h2>

<p>Zaseknutý alebo posunutý posuvník vyváženia je najčastejším dôvodom, prečo sa jeden kanál stíši – a aktualizácie macOS ho občas postrčia. Predtým, ako si predstavíte to najhoršie:</p>

<ul>
<li>Otvorte <strong>Systémové nastavenia Zvuk &gt;</strong>.</li>
<li>Kliknite na <strong>Výstup</strong> a vyberte svoje reproduktory (vstavané alebo externé zariadenie).</li>
<li>Nájdite <strong>Zostatok</strong> posúvač a potiahnite ho presne do stredu. Ak by ste ho potiahli doľava, váš pravý kanál by znel ako mŕtvy.</li>
</ul>

<p>Urobte toto <em>na výstupné zariadenie</em>. Nastavenie vyváženia sa zapamätá samostatne pre vstavané reproduktory, slúchadlá a každé externé rozhranie – takže vycentrované vstavané vyváženie nepomôže, ak je problém vo vašom USB DAC.</p>

<h2>Otestujte, či je to skutočne hardvérový kanál</h2>

<p>Ovládajte hardvér rýchlo. Zahrajte si stereo stopu, ktorú dobre poznáte, a potom pripojte pár káblových slúchadiel. Ak oba kanály fungujú v slúchadlách, ale nie cez reproduktory, problém je za zvukovým motorom (hardvér reproduktorov alebo výstupná cesta). Ak je rovnaký kanál mŕtvy aj v slúchadlách, je pravdepodobnejšie, že ide o softvér alebo zvukový kodek logickej dosky.</p>

<p>Môžete tiež otvoriť <strong>Hudba</strong> alebo QuickTime, zahrajte si niečo a prepnite vyváženie prudko doľava a potom doprava. Ak sa zvuk medzi kanálmi pohybuje čisto, oba reproduktory sú živé a je to čisto problém s nastaveniami.</p>

<h2>Reštartujte Core Audio</h2>

<p>macOS vedie všetok zvuk cez <strong>coreaudiod</strong> proces. Po veľkej aktualizácii sa jeho stav môže zakliniť – výstupy zmiznú, kanály klesnú alebo sa hlasitosť správa zvláštne. Reštartovanie je bezpečné a prinúti macOS znovu zostaviť zvukový graf:</p>

<ul>
<li>Otvorte <strong>Terminal</strong> (Aplikácie &gt; Utility).</li>
<li>Spustiť: <code>sudo killall coreaudiod</code></li>
<li>Zadajte svoje heslo. Zvukový démon sa automaticky znova spustí v priebehu sekundy alebo dvoch.</li>
</ul>

<p>Nič sa neodstráni – týmto sa iba reštartuje zvukový subsystém. Hneď potom znova otestujte pravý reproduktor.</p>

<h2>Reštartujte správne a potom skúste núdzový režim</h2>

<p>Úplný reštart odstráni prechodné zvukové chyby, ktoré zabíjačka nedokáže. Ak je kanál stále mŕtvy, spustite ho <strong>bezpečný režim</strong>, ktorý načíta minimálny systém a preskočí zvukové rozšírenia a prihlasovacie položky tretích strán:</p>

<ul>
<li><strong>Jablkový kremík:</strong> Vypnúť. Podržte tlačidlo napájania, kým sa nezobrazí „Načítanie možností spustenia“. Vyberte svoj disk a podržte ho <strong>Shift</strong> a kliknite na „Pokračovať v núdzovom režime“.</li>
<li><strong>Intel:</strong> Reštartujte a podržte <strong>Shift</strong> kým sa nezobrazí prihlasovacie okno.</li>
</ul>

<p>Ak oba reproduktory fungujú v núdzovom režime, zvukový ovládač tretej strany, virtuálne zariadenie alebo pomôcka na paneli s ponukami nainštalovaná pred aktualizáciou je v konflikte s novým zvukovým zásobníkom Tahoe. Spustite systém späť do normálu a odstráňte alebo aktualizujte nedávno nainštalovaný zvukový softvér (bežnými vinníkmi sú rekordéry obrazovky, aplikácie na schôdze a kexty na smerovanie zvuku).</p>

<h2>Resetovať NVRAM (iba Intel Mac)</h2>

<p>Na zariadeniach Intel Mac sú nastavenia zvuku a reproduktorov uložené v pamäti NVRAM/PRAM a zastaraná hodnota môže prežiť aktualizáciu. Resetujte ho: vypnite, potom zapnite a okamžite podržte <strong>Option + Command + P + R</strong> na približne 20 sekúnd, pričom sa nechá Mac raz reštartovať. Toto sa nevzťahuje na Apple Silicon Mac – spravujú to automaticky, takže ak používate počítač série M, preskočte to.</p>

<h2>Aktualizujte znova – a skontrolujte, či nedošlo k uvoľneniu bodu</h2>

<p>Skoré vydania akejkoľvek hlavnej verzie macOS sa dodávajú s chybami zvukových ovládačov, ktoré budú neskôr opravené. Zamierte k <strong>Nastavenia systému &gt; Všeobecné Aktualizácia softvéru &gt;</strong> a nainštalujte akékoľvek čakajúce uvoľnenie bodu Tahoe (14.x.1, 14.x.2 atď.). Ak existuje doplnková aktualizácia, často rieši presne tieto regresie zvuku po aktualizácii.</p>

<h2>Keď je to skutočne hardvér</h2>

<p>Ak zlyhá núdzový režim, reštart Core Audio a čistá opätovná inštalácia – a ten istý kanál je mŕtvy v slúchadlách – možno sa pozeráte na chybu hardvéru. Načasovanie s aktualizáciou môže byť náhodné; zosilňovače reproduktorov a zvukové kodeky zlyhávajú. Bežať <strong>Diagnostika Apple</strong> (vypnite, potom podržte tlačidlo napájania na Apple Silicon a vyberte Diagnostics, alebo podržte <strong>D</strong> na Intel pri spustení). Ak označí zvukový komponent, kontaktujte <strong>Podpora spoločnosti Apple</strong> alebo autorizovaného poskytovateľa služieb. Neutrácajte peniaze za softvér pre prefúknutý reproduktor.</p>

<blockquote>Rýchle pravidlo: ak sa zvuk posúva správne pomocou posúvača vyváženia, oba reproduktory sú fyzicky v poriadku a oprava je v softvéri. Ak sa nikdy nepohne na mŕtvu stranu, podozrievajte hardvér.</blockquote>

<h2>Kam sa objemový softvér hodí (a kam nie)</h2>

<p>Aby bolo jasné: mŕtvy kanál reproduktora nie je niečo, čo by opravila aplikácia hlasitosti – vyššie uvedené kontroly sú vašou cestou. To znamená, že keď bude váš zvuk opäť zdravý, macOS stále chýba niečo, čo má Windows už roky: skutočný mixér hlasitosti pre jednotlivé aplikácie. Ak ste sa pristihli pri prehrabávaní sa v nastaveniach zvuku, pretože jedna aplikácia šlapala, zatiaľ čo iná bola príliš tichá, použite panel s ponukami, ako je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> umožňuje nastaviť nezávislú hlasitosť, stlmenie a dokonca zosilnenie pre každú aplikáciu bez toho, aby ste sa dotkli vyváženia systému. Je to praktický nástroj na každodenné miešanie, nie oprava problému v tomto článku.</p>

<h2>Krátka verzia</h2>

<ul>
<li>Vycentrujte <strong>Zostatok</strong> posuvník — na výstupné zariadenie.</li>
<li>Otestujte pomocou slúchadiel, aby ste izolovali hardvér.</li>
<li>Bežať <code>sudo killall coreaudiod</code>, potom reštartujte.</li>
<li>Skúste <strong>bezpečný režim</strong> zachytiť konflikty vodičov.</li>
<li>Obnovte NVRAM na Intel; nainštalujte ľubovoľné bodové uvoľnenie Tahoe.</li>
<li>Stále mŕtvy v slúchadlách? Spustite Apple Diagnostics a zavolajte spoločnosti Apple.</li>
</ul>

<p>Keď sa vaše reproduktory vrátia do normálu, ak je žonglovanie s hlasitosťou jednotlivých aplikácií každodennou nepríjemnosťou, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodáva mixér macOS vždy chýbal — 14,99 €, jednorazový, v sandboxe, bez ovládačov.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods Zaseknutý pri polovičnej hlasitosti na vašom Mac? Tu je Oprava",
    description: "Prečo sa AirPods pripája k vášmu Mac s polovičnou hlasitosťou – zvyčajne pomocou kodeku Bluetooth prepnete na profil mikrofónu handsfree – plus opravy opätovného spárovania a ako zvýšiť úroveň natrvalo.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>AirPods zvyčajne klesnú na polovičnú hlasitosť na Mac, pretože macOS ich prepol z vysokokvalitného zvukového profilu A2DP na nízkokvalitný profil hands-free (HFP), ktorý je vytvorený na použitie mikrofónu na telefonovanie. Tento režim obmedzuje výstup a kvalitu. Opravte to tak, že prinútite Mac späť na zvuk iba pre slúchadlá, potom zvýšte úroveň, aby ste ho tam udržali.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Zaseknutý pri polovičnej hlasitosti na vašom Mac? Tu je Oprava" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo sa to stane: prepínač kodeku</h2>

<p>Zvukové zariadenia Bluetooth ako AirPods fungujú v jednom z dvoch režimov. Keď práve počúvate, macOS používa A2DP – plné stereo, plná hlasitosť, čistá kvalita. Ale v momente, keď aplikácia chce váš mikrofón, macOS prepne celé pripojenie na HFP (Hands-Free Profile). HFP je obojsmerný telefónny kodek. Znie tenký, monofónny a výrazne tichší, pretože bol navrhnutý na hlasové hovory, nie na hudbu.</p>

<p>Problém je v tom, že macOS často zostáva zaseknutý v HFP aj po dokončení aplikácie, ktorá chytila mikrofón – alebo sa do nej prepne v okamihu, keď otvoríte Zoom, FaceTime, Teams, Discord alebo kartu prehliadača s povolením mikrofónu. Takže vaše AirPods znejú, ako keby mali „polovičnú hlasitosť“, nie preto, že by sa posúvač hlasitosti posunul, ale preto, že sa pod vami znížil celý zvukový profil.</p>

<p>Poznáte to: zvuk zrazu stíchne a utlmí sa, AirPods sa zobrazí dvakrát vo vašich nastaveniach zvuku (raz ako výstup, raz ako mikrofón) a úplné zvýšenie hlasitosti systému sotva pomáha.</p>

<h2>Riešenie pre opätovné spárovanie a kodek</h2>

<p>Toto sú úprimné prvé kroky. Prepracujte sa cez ne v poradí – jeden z prvých to zvyčajne vymaže.</p>

<ul>
<li><strong>Zmeňte svoje vstupné zariadenie.</strong> Otvorte Nastavenia systému → Zvuk → Vstup a namiesto AirPods vyberte vstavaný mikrofón vášho Mac. Tým sa zabráni macOS držať AirPods v režime HFP, takže výstup sa môže vrátiť späť na plnú kvalitu A2DP. Toto je jediná najúčinnejšia oprava.</li>
<li><strong>Vypnite a zapnite Bluetooth.</strong> Rýchly reset pripojenia často znovu vyjednáva A2DP čisto, najmä ak sa AirPods zasekne po ukončení hovoru.</li>
<li><strong>Znovu pripojte AirPods.</strong> Zatvorte puzdro, počkajte niekoľko sekúnd, znova ho otvorte v blízkosti Mac a znova ich vyberte ako výstupné zariadenie.</li>
<li><strong>Ukončite aplikáciu, ktorá chytila mikrofón.</strong> Úplne zatvorte Zoom, Teams, Discord alebo príslušnú kartu prehliadača. Niektoré aplikácie držia reláciu mikrofónu otvorenú na pozadí a pripínajú HFP, kým nezmiznú.</li>
<li><strong>Znova spárujte od začiatku.</strong> Odstráňte AirPods v časti Nastavenia systému → Bluetooth (kliknite na tlačidlo informácií → Zabudnúť toto zariadenie) a potom znova spárujte. Tým sa vymaže poškodené vyjednávanie profilu, ktoré samotné prepínanie nevyrieši.</li>
<li><strong>Resetujte AirPods.</strong> Keď sú v otvorenom veku puzdra, podržte tlačidlo nastavenia na zadnej strane, kým svetlo nezačne blikať oranžovo a potom bielo. Potom znova spárujte. Toto je jadrová možnosť pre podivnosti na úrovni firmvéru.</li>
<li><strong>Aktualizujte firmvér macOS a AirPods.</strong> Apple dodal v bodových vydaniach opravy zvuku Bluetooth. Firmvér AirPods sa aktualizuje potichu, keď sa nabíjajú v blízkosti pripojeného zariadenia – nechajte ich preto cez noc v puzdre v blízkosti zariadenia Mac.</li>
</ul>

<blockquote><p>Vzor, ktorý treba sledovať: ak sa hlasitosť zníži hneď, ako sa pripojíte k hovoru, a obnoví sa, keď sa hovor skončí, je to prepínač HFP – nie pokazený reproduktor alebo chyba nastavení.</p></blockquote>

<h2>Prečo sa opravy nie vždy držia</h2>

<p>Tu je tá frustrujúca časť. Dokonca aj po opätovnom spárovaní, macOS šťastne prepne váš AirPods späť do tichého hands-free režimu, keď sa nabudúce akákoľvek aplikácia dotkne mikrofónu. Toto správanie nemôžete natrvalo zakázať v systémových nastaveniach – Apple to považuje za automatické. Takže skončíte tak, že niekoľkokrát denne zopakujete trik so vstupným zariadením a kedykoľvek bude váš AirPods v hovore alebo v aplikácii hladnej po mikrofóne, bude opäť obmedzený na tejto nižšej úrovni.</p>

<p>Existuje aj druhý, samostatný problém, ktorý si ľudia spájajú s týmto: niektoré aplikácie sú pri maximálnej hlasitosti systému tichšie ako iné. Prehrávač podcastov alebo karta prehliadača môže sedieť hlboko pod tým, čo vaše uši chcú, aj keď na AirPods beží čistý A2DP. macOS vám ponúka jeden posúvač hlasitosti pre všetko a žiadne ovládanie podľa aplikácie, takže neexistuje žiadny natívny spôsob, ako posunúť jednu tichú aplikáciu späť.</p>

<h2>Zvýšte úroveň späť - a udržte ju tam</h2>

<p>Tu si svoje miesto zasluhuje mixér hlasitosti na aplikáciu. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aplikácia na paneli s ponukami pre macOS, ktorá dáva každej spustenej aplikácii vlastný nezávislý posuvník hlasitosti – vrátane zvýšenia nad 100 %. Takže keď sa váš AirPods vráti z hovoru na nižšej efektívnej úrovni alebo je konkrétna aplikácia jednoducho príliš tichá, potiahnete túto aplikáciu za normálny strop a zostane tam.</p>

<p>Konkrétne to znamená:</p>

<ul>
<li><strong>ZVÝŠENIE hlasitosti jednotlivých aplikácií.</strong> Posuňte tichú aplikáciu nad štandardné maximum namiesto toho, aby ste sa namáhali, aby ste ju počuli pri „plnej“ hlasitosti systému.</li>
<li><strong>Objemové profily.</strong> Uložte si sadu úrovní – vylepšený prehliadač, jemnejšia hudba, hlasné videohovory – a prepnite celé usporiadanie jediným kliknutím, aby ste sa nemuseli znova prispôsobovať po každom opätovnom pripojení.</li>
<li><strong>Rýchle prepínanie výstupov.</strong> Preskakujte medzi AirPods, reproduktormi notebooku a externým DAC z panela s ponukami bez prehrabávania sa v nastaveniach systému, čo pomáha, keď si vynucujete nové vyjednávanie profilu.</li>
<li><strong>Stlmenie a automatické stlmenie pre jednotlivé aplikácie.</strong> Stlmte jednu aplikáciu bez toho, aby ste sa dotkli ostatných, a nechajte médiá automaticky ponoriť, keď sa prehrá niečo dôležitejšie.</li>
</ul>

<p>Stojí za to mať jasno v tom, čo to robí a čo nie. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nedonúti macOS zostať v A2DP – vyššie uvedený trik so vstupným zariadením je stále vaším nástrojom pre samotný kodek. To, čo robí, je vrátiť vám hlasitosť, ktorú vám ukradli downgrade, pre každú aplikáciu, takže tichá relácia AirPods alebo tvrdohlavo mäkká aplikácia je oprava jedným ťahom namiesto strateného prípadu. A keďže ide o aplikáciu Mac App Store v sandboxe, nie je potrebné inštalovať žiadny zvukový ovládač, žiadne DMG, žiadne rozšírenie jadra – jednoducho beží.</p>

<h2>Krátka verzia</h2>

<p>Ak váš AirPods znie na vašom Mac ticho a tlmene, vypnite vstupné zariadenie AirPods, aby ste ho vynútili z režimu handsfree, a ak to zlyhá, znova ho spárujte. Keď úroveň stále nedosahuje, kam chcete – alebo je jedna aplikácia príliš mäkká – siahnite po zosilnení pre každú aplikáciu, takže ju nastavte raz a pokračujte ďalej.</p>

<p>Už vás nebaví bojovať s posúvačom hlasitosti zakaždým, keď prijmete hovor? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> — jednorazovo 14,99 €, bez predplatného, bez ovládačov — a každej aplikácii dajte vlastný objem.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac Volume sa stále resetuje na Tahoe? Ako to navždy uzamknúť",
    description: "Od macOS Tahoe veľa Mac náhle zmení alebo resetuje svoju hlasitosť samo. Tu je dôvod, prečo sa to deje, ako zastaviť vstavané príčiny a ako uzamknúť pevný zväzok pre aplikáciu, aby zostal na mieste.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Ak sa hlasitosť vášho Mac od macOS Tahoe neustále resetuje, opravou je eliminovať automatické nastavovacie prvky: deaktivujte tlmenie zvuku a „Prehrať zvuk pri spustení“, resetujte nastavenia zvuku a znova čisto pripojte akýkoľvek výstup Bluetooth. Pre úrovne pre jednotlivé aplikácie, ktoré preskakujú, uzamknite pevnú hlasitosť pre každú aplikáciu pomocou mixéra, aby sa už nikdy nehýbala.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Volume sa stále resetuje na Tahoe? Ako to navždy uzamknúť" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo sa váš objem po Tahoe zmení sám od seba</h2>

<p>Hlasitosť, ktorá sa pohybuje bez toho, aby ste sa jej dotkli, pôsobí ako hardvérová chyba, no takmer vždy o vašej úrovni rozhoduje softvér. macOS má niekoľko automatických správaní, ktoré potichu posúvajú alebo resetujú výstup, a zmeny v zásobníku zvuku Tahoe urobili niekoľko z nich viditeľnejšími. Predtým, ako sa domnievate, že je aplikácia alebo Mac nefunkčné, pomôže vám presne vedieť, ktorý systém chytí posúvač.</p>

<ul>
<li><strong>Stlmenie zvuku:</strong> macOS zníži ostatné zvuky, keď si myslí, že hrá niečo dôležitejšie (Siri, oznámenia o dostupnosti, upozornenia). Po ukončení spúšťača sa úroveň niekedy nevráti úplne späť.</li>
<li><strong>Bluetooth sa resetuje handshake:</strong> AirPods a ďalšie zariadenia Bluetooth opätovne dohodnú objem pri pripojení. Opätovné pripojenie uprostred relácie môže prepnúť výstup na predvolenú alebo na oveľa hlasnejšiu/tichšiu úroveň.</li>
<li><strong>Prepínanie výstupných zariadení:</strong> Keď odpojíte slúchadlá, dok alebo prepnete na reproduktory monitora, každý výstup si zapamätá svoju vlastnú hlasitosť. Prepínanie tam a späť vyzerá ako „náhodné“ resetovanie.</li>
<li><strong>Predvolené nastavenia pre jednotlivé aplikácie:</strong> Niektoré aplikácie (prehliadače, prehrávače videa, konferenčné nástroje) nastavujú svoj vlastný zisk pri spustení alebo pri spustení nového streamu, čím prepíšu všetko, čo ste mali.</li>
<li><strong>Zvuk pri spustení a stav prihlásenia:</strong> Bootovací zvonček a prihlásenie môžu posunúť hlasitosť systému späť na predvolenú úroveň, ktorú ste si nevybrali.</li>
</ul>

<h2>Najprv opravte vstavané príčiny</h2>

<p>Prepracujte ich v poradí. Väčšina sťažností „samo sa resetuje“ zmizne, keď sa stiahne a Bluetooth sa vylúči.</p>

<ul>
<li><strong>Vypnite zvuk pri spustení.</strong> Systémové nastavenia → Zvuk → zrušte začiarknutie <em>Prehrať zvuk pri spustení</em>. Tým sa zabráni tomu, aby zvonček pri spustení obnovil vašu základnú úroveň.</li>
<li><strong>Znížte alebo zakážte spúšťače klesania.</strong> V Nastaveniach systému → Prístupnosť → Hovorený obsah a Siri vypnite hovorené oznámenia, ktoré nepotrebujete. Menej spúšťačov znamená menej okamihov, kedy macOS zníži zvuk a zabudne ho obnoviť.</li>
<li><strong>Opätovne spárujte problémové zariadenia Bluetooth.</strong> Odstráňte AirPods alebo slúchadlá z nastavení Bluetooth a znova ich spárujte. Zastaraný profil je častou príčinou zaseknutia zväzku pri pripojení.</li>
<li><strong>Každé výstupné zariadenie nastavte zámerne.</strong> Pripojte každý výstup, ktorý používate (vstavaný, monitor, slúchadlá) a nastavte jeho hlasitosť raz. macOS ukladá hlasitosť na zariadenie, takže ich nastavením všetky odstránite prekvapenie pri prepínaní.</li>
<li><strong>Resetujte Core Audio, ak je zaseknuté.</strong> Otvorte Terminal a spustite <code>sudo killall coreaudiod</code>. Toto reštartuje zvukového démona bez reštartu a vymaže zamrznutý stav, ktorý môže spôsobiť nepravidelné úrovne.</li>
<li><strong>Aktualizujte a potom reštartujte.</strong> Early Tahoe point vydáva dodávané zvukové opravy. Uistite sa, že máte najnovšiu zostavu a po aktualizácii reštartujte.</li>
</ul>

<p>Ak sa resetovanie zastaví, jeden z vyššie uvedených bol vaším vinníkom. Ak váš <em>systém</em> hlasitosť je stabilná, ale jednotlivé aplikácie sú stále hlasnejšie alebo tichšie ako všetky ostatné, narazili ste na limit toho, čo dokážu vstavané ovládacie prvky.</p>

<h2>Skutočná medzera: macOS nedokáže uzamknúť hlasitosť na aplikáciu</h2>

<p>Tu je tá frustrujúca časť. Windows má už roky mixér hlasitosti pre jednotlivé aplikácie – otvoríte ho, potiahnete posúvač jednej aplikácie a zostane tam. macOS ešte nikdy nedodal. Existuje presne jeden posúvač hlasitosti systému a každá aplikácia sa oň poháda. Takže keď karta prehliadača spustí automaticky prehrávanú reklamu alebo sa videohovor ozve dvakrát hlasnejšie ako vaša hudba, vašou jedinou možnosťou je manuálne nastaviť hlavnú hlasitosť – čo je presne tá slučka „prečo sa to stále mení“, ktorej sa snažíte uniknúť.</p>

<blockquote>Systémový posuvník je jeden zdieľaný číselník. Bez mixéra pre jednotlivé aplikácie nie je možné „nastaviť a zabudnúť“ na sklade macOS – vždy vás niečo prekoná.</blockquote>

<h2>Uzamknite pevnú hlasitosť pre aplikáciu pomocou SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodáva, že chýba mixér macOS pre jednotlivé aplikácie. Žije vo vašom paneli s ponukami a dáva každej spustenej aplikácii vlastný posuvník hlasitosti, nezávislý od predlohy. Pretože si pamätá úroveň, ktorú ste nastavili pre každú aplikáciu, priamo rieši problém „samotného resetovania“: rozhodnete sa raz a táto aplikácia sa zakaždým otvorí pri tejto hlasitosti.</p>

<ul>
<li><strong>Nezávislý objem na aplikáciu:</strong> držte hudbu na 40 % a videohovor na 80 % súčasne, bez žonglovania s majstrovským posúvačom.</li>
<li><strong>Stlmenie a zosilnenie pre jednotlivé aplikácie:</strong> okamžite stíšte hlučnú aplikáciu alebo posuňte príliš tichú aplikáciu nad 100 %, keď je jej vlastný zvuk slabý.</li>
<li><strong>Objemové profily:</strong> uložte nastavenia pre „prácu“, „hranie“ alebo „zameranie“ a prepnite celý mix jediným kliknutím.</li>
<li><strong>Auto-duck podľa vašich podmienok:</strong> automaticky spúšťať aplikácie na pozadí, keď hovoríte alebo keď je vybraná aplikácia aktívna – namiesto rozhodovania macOS.</li>
<li><strong>Rýchle prepínanie výstupu:</strong> preskakujte medzi reproduktormi, slúchadlami a monitorujte zvuk z panela s ponukami bez toho, aby ste sa ponorili do nastavení.</li>
</ul>

<p>Je to 14,99 EUR jednorazový nákup od Mac App Store – žiadne predplatné, žiadne ovládače, žiadne DMG a žiadne rozšírenia jadra. Pretože je plne sandboxovaný a distribuovaný App Store, neinštalujete starý zvukový kext, ktorý by Tahoe mohlo zablokovať pri ďalšej aktualizácii. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nastavuje úrovne pomocou podporovaných rozhraní API, aby vaše zapamätané objemy prežili aktualizácie a reštarty.</p>

<h2>Aký prístup vlastne potrebujete?</h2>

<p>Ak hlasitosť celého vášho systému vyskočí, začnite s vyššie uvedenými vstavanými opravami – vo väčšine prípadov klesanie, Bluetooth a zvuk pri spustení. Ak je namiesto toho problém v tom, že jedna aplikácia je vždy tá nepárna, alebo ste unavení z toho, že hlavný posúvač je kompromisom, jedinou skutočnou odpoveďou je mixér pre jednotlivé aplikácie. macOS ho nepridá, takže nástroj na paneli s ponukami je praktickou cestou k mixu, ktorý skutočne zostane tam, kde ho vložíte.</p>

<p>Už vás nebaví naháňať posúvač hlasitosti na Tahoe? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> a uzamknite zapamätaný objem pre každú aplikáciu – 14,99 EUR raz, žiadne predplatné, žiadne ovládače.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Ovládajte hlasitosť monitora DAW oddelene od systémového zvuku na Mac",
    description: "macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie, takže váš DAW a systémové zvuky zdieľajú jednu úroveň. Tu je návod, ako ovládať hlasitosť monitora Logic, Ableton alebo GarageBand nezávisle od vášho prehliadača a upozornení.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie, takže váš DAW a všetko ostatné zdieľajú jeden systémový posúvač. Ak chcete nastaviť úroveň monitora nezávisle od prehliadačov, Slack a upozornení, potrebujete ovládanie hlasitosti pre jednotlivé aplikácie. Menu-bar mixér ako <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dáva Logic, Ableton a GarageBand vlastnú hlasitosť, oddelenú od systémového zvuku.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Ovládajte hlasitosť monitora DAW oddelene od systémového zvuku na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo jeden posúvač hlasitosti ničí vaše monitorovanie</h2>

<p>Keď produkujete, váš DAW je len jednou z mnohých vecí, ktoré vytvárajú zvuk. Na karte prehliadača sa prehrá referenčná skladba. Prichádzajú pingy Slack. Výukový program YouTube beží na druhom monitore. Na Windows vám mixér hlasitosti umožňuje vyvážiť všetky tieto nezávisle. Na macOS spoločnosť Apple nikdy nedodala ekvivalent - tlačidlá hlasitosti a posúvač na lište ponuky sa pohybujú <em>všetko</em> naraz.</p>

<p>To vytvára skutočný problém pre každého, kto mieša podľa ucha. Vytočíte pohodlnú úroveň monitorovania v Logic, potom sa na rovnakej úrovni ozve upozornenie a vyfúkne vám uši. Alebo vypnete systém, aby ste si chránili sluch počas hlasnej pasáže, a teraz je vaša referenčná skladba príliš tichá na porovnanie. Vaša monitorovacia referencia už nie je stabilná a stabilná referencia je hlavným bodom miešania.</p>

<blockquote>Monitorovanie na konzistentnej úrovni je jedným z mála návykov, ktoré merateľne zlepšujú vaše mixy. Ak vás systémové zvuky neustále nútia posúvať hlavný posúvač, strácate túto konzistenciu.</blockquote>

<h2>Čo vlastne znamená „samostatný zväzok DAW“.</h2>

<p>Výrobcovia tu spájajú dve rôzne veci a stojí za to ich oddeliť:</p>

<ul>
<li><strong>Úroveň rozhrania / hlavného výstupu</strong> — hardvérový gombík na vašom audio rozhraní alebo ovládači monitora. Tým sa nastaví absolútna hlasitosť počúvania a po kalibrácii by mala zostať nastavená.</li>
<li><strong>Objem softvéru podľa aplikácie</strong> — ako hlasné sú jednotlivé aplikácie <em>predtým</em> dosiahne tento výstup. Toto macOS chýba. To vám umožní udržať DAW v jednote a zároveň znížiť zvuk Chrome, hudby alebo upozornení na úroveň postele pod ním.</li>
</ul>

<p>Chceš to druhé. Cieľom nie je stíšiť váš DAW – je to stíšiť všetko ostatné vzhľadom k nemu, takže DAW zostane vaším najhlasnejším a najkonzistentnejším zdrojom a rušivé prvky budú ticho sedieť v pozadí.</p>

<h2>Ako to urobiť pomocou mixéra pre jednotlivé aplikácie</h2>

<p>Menu-bar mixer ako napr <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> obsahuje zoznam všetkých aplikácií, ktoré práve prehrávajú zvuk, a dáva každej z nich vlastný posuvník. Pracovný postup producenta vyzerá takto:</p>

<ul>
<li><strong>Raz kalibrujte svoje rozhranie.</strong> Nastavte svoje zvukové rozhranie alebo ovládač monitora na pohodlnú, opakovateľnú referenčnú úroveň a nechajte ju. Toto je vaša pevná kotva.</li>
<li><strong>Nastavte svoj DAW na 100 %.</strong> V mixéri ponechajte Logic, Ableton alebo GarageBand pri plnej softvérovej hlasitosti, aby prešiel jednotne. Vlastný hlavný fader vášho DAW stále robí jemné mixovanie.</li>
<li><strong>Všetko ostatné stiahnite dole.</strong> Znížte úroveň Chrome, Safari, Music a Slack – povedzme 40 – 60 % – takže referenčné skladby a správy budú sedieť pod vaším mixom, namiesto toho, aby s ním súťažili.</li>
<li><strong>Stlmte hlučné veci.</strong> Stlmenie pre jednotlivé aplikácie vám umožňuje úplne stíšiť prehliadač alebo chatovaciu aplikáciu bez toho, aby ste sa dotkli monitorovacieho reťazca. Jedno kliknutie a váš DAW bude hrať nedotknutý.</li>
</ul>

<p>Pretože posúvač DAW sa nikdy nehýbe, vaša referencia monitorovania zostáva pevná počas celej relácie. Môžete spustiť referenčnú stopu pre rýchle A/B, potom ju stlmiť a úroveň vášho mixu sa neposunie ani o decibel.</p>

<h2>Posilnite tichú aplikáciu namiesto toho, aby ste ostatných odmietli</h2>

<p>Niekedy problém prebieha opačným smerom. Hrubý ukážkový odraz, hlasová poznámka alebo tichá referencia sa prehrávajú hlboko pod úrovňou vašej relácie. Keď nastavíte svoje rozhranie, aby ste to počuli, všetko ostatné je teraz príliš hlasné. Podľa aplikácie <strong>zvýšenie hlasitosti</strong> umožňuje posunúť jedinú tichú aplikáciu nad 100 %, aby zodpovedala vašej pracovnej úrovni – bez toho, aby ste sa dotkli vášho kalibrovaného výstupu. Je to kus Windows' mixpultu, ktorý ste nikdy nemali, a jeden z užitočnejších nástrojov, keď skúšate materiál mimo vášho DAW.</p>

<h2>Profily pre rôzne typy relácií</h2>

<p>Vaša ideálna rovnováha nie je rovnaká pre každú úlohu. Sledovanie, miešanie a bežné počúvanie vyžadujú inú kombináciu úrovní aplikácie. Profily hlasitosti vám umožňujú uložiť nastavenie a okamžite ho vyvolať:</p>

<ul>
<li><strong>Miešanie:</strong> DAW na 100 %, prehliadač a hudba sú nízke, chat je stlmený.</li>
<li><strong>Referenčné počúvanie:</strong> Hudba alebo streamovacia aplikácia hore, DAW dole.</li>
<li><strong>Hovory / spolupráca:</strong> konferenčnú aplikáciu, DAW stiahol späť, aby do hovoru nekrvácal.</li>
</ul>

<p>Prepínanie profilov prekonáva ručné nastavenie piatich posuvných ovládačov pri každom preradení.</p>

<h2>Auto-ducking a rýchle prepínanie výstupu</h2>

<p>V štúdiu sú dôležité ešte dve veci. <strong>Auto-ducking</strong> môže automaticky prepínať aplikácie na pozadí, keď hovorí alebo hrá prioritný zdroj, takže hovor alebo dôležitý zvuk sa vždy prerušia. A <strong>rýchle prepínanie výstupov</strong> z panela s ponukami vám umožňuje preskakovať medzi rozhraním, monitormi a slúchadlami bez toho, aby ste sa museli prehrabávať v nastaveniach systému – čo je neustála úloha pri kontrole mixu na rôznych systémoch.</p>

<h2>Prečo nie virtuálny zvukový ovládač?</h2>

<p>Niektoré nástroje na smerovanie to riešia inštaláciou virtuálneho zvukového ovládača na úrovni jadra. Sú výkonné, ale ťažké: môžu sa po aktualizáciách macOS zlomiť, pridať latenciu a vyžadovať hlboké systémové povolenia. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je v karanténe a dodáva sa cez Mac App Store – žiadne ovládače, žiadne DMG, žiadne nastavenie agregovaného zariadenia. Konkrétne pre ovládanie na úrovni aplikácie je to oveľa jednoduchšia cesta ako prestavba smerovania zvuku.</p>

<p>Ste pripravení udržať úroveň monitorovania stabilnú, zatiaľ čo všetko ostatné zostane na svojom mieste? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> za jednorazových 14,99 € a dajte svojmu DAW vlastný objem.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Jednoduchšia alternatíva Audio Hijack pre objem jednotlivých aplikácií na Mac",
    description: "Ak chcete iba nezávislý objem na aplikáciu na macOS, Audio Hijack je prehnané. Tu je ľahšia a lacnejšia alternatíva panela s ponukami, ktorá robí hlasitosť, stlmenie a zosilnenie jednotlivých aplikácií bez smerovania zvuku.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak všetko, čo chcete, je nezávislý objem na aplikáciu na macOS, Audio Hijack je viac nástrojom, než potrebujete. Je to profesionálny balík na smerovanie a nahrávanie zvuku (približne 79 USD) vytvorený na snímanie, efekty a grafy relácie. Na jednoduché otočenie jednej aplikácie smerom nadol a inú nahor môžete použiť ľahký mixér s ponukami <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je rýchlejší, lacnejší a vždy pripravený.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Jednoduchšia alternatíva Audio Hijack pre objem jednotlivých aplikácií na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo ľudia siahajú po Audio Hijack na prvom mieste</h2>

<p>macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows má jeden už roky vo svojom Volume Mixer, ale na Mac tlačidlá hlasitosti a posúvač na paneli s ponukami posúvajú iba jednu vec: hlavný systém. Neexistuje spôsob prvej strany, ako povedať „udržať Spotify na 40 %, ale nechať môj videohovor na 100 %.</p>

<p>Ľudia teda hľadajú riešenie a dostanú sa na Audio Hijack. to <em>môže</em> robiť hlasitosť pre jednotlivé aplikácie, pretože dokáže zachytiť a spracovať zvuk z akejkoľvek jednej aplikácie. Táto schopnosť je však vedľajším efektom toho, na čo je v skutočnosti navrhnutá: nahrávanie zvuku z aplikácií a hardvéru, reťazenie efektov, smerovanie medzi virtuálnymi zariadeniami a vytváranie opakovane použiteľných kanálov relácií. V tom je to naozaj vynikajúce. Je to len ťažká odpoveď na ľahkú otázku.</p>

<h2>Kde sa Audio Hijack stáva prehnaným</h2>

<p>Niekoľko vecí má tendenciu frustrovať ľudí, ktorí chceli iba posúvač hlasitosti:</p>

<ul>
<li><strong>Cena.</strong> Audio Hijack stojí okolo 79 dolárov. To je fér pre nahrávacie štúdio v aplikácii; je to veľa na vypnutie karty prehliadača.</li>
<li><strong>Musí to bežať ďalej.</strong> Jeho spracovanie pre jednotlivé aplikácie funguje iba vtedy, keď je aplikácia otvorená a príslušná relácia je aktívna. Ukončite to a vaše objemy sa vrátia späť. Ponechávate si úplnú zvukovú pracovnú stanicu, len aby ste držali posúvač na mieste.</li>
<li><strong>Myslenie založené na reláciách.</strong> Vytvárate relácie s blokmi a spojeniami. Výkonné na snímanie, ale je to veľa koncepčnej réžie, keď je vaším cieľom „táto aplikácia je tichšia, tá aplikácia hlasnejšia“.</li>
<li><strong>Rozhranie je hlboké.</strong> Efekty, smerovanie, merače, blokové vedenie – bohatá plocha, ktorú budete väčšinou ignorovať, ak nikdy nič nezaznamenáte.</li>
</ul>

<blockquote>Základné pravidlo: ak chcete <em>záznam alebo trasa</em> audio, Audio Hijack si svoju cenu zarába. Ak len chcete <em>rovnováhu</em> zvuk medzi aplikáciami, platíte za workshop, keď ste potrebovali gombík.</blockquote>

<h2>Jednoduchšia alternatíva: mixážny pult hlasitosti</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> berie jedinú prácu, za ktorou väčšina ľudí skutočne prišla a robí len to. Žije vo vašom paneli s ponukami. Kliknite na ikonu a získate živý zoznam každej aplikácie, ktorá práve prehráva zvuk, pričom každá má svoj vlastný posúvač. Potiahnite Spotify na 30 %, ponechajte hovor na 100 %, úplne stlmte Slack – hotovo, nie je potrebné vytvárať reláciu.</p>

<p>Čo pokrýva:</p>

<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — každý zdroj zvuku má svoj vlastný posuvník, ktorý je možné nastaviť v reálnom čase.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — stlmte jednu hlučnú aplikáciu kliknutím bez toho, aby ste sa dotkli čohokoľvek iného.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie</strong> - stlačte tichú aplikáciu <em>vyššie</em> 100%, keď je jeho vlastné maximum stále príliš mäkké. Toto je kúsok, ktorý systémový posúvač nikdy nedokáže.</li>
<li><strong>Objemové profily</strong> — uložiť celý mix (hudba nízka, hovory nahlas, upozornenia stlmené) a vyvolať ho jedným kliknutím pre daný kontext.</li>
<li><strong>Auto-ducking</strong> — automaticky stiahne zvuk na pozadí, keď sa začne niečo dôležitejšie, takže hovor alebo video nezostanú v zozname skladieb.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — skok medzi slúchadlami, reproduktormi a inými výstupmi z rovnakej ponuky.</li>
</ul>

<h2>Praktické: ovládanie jednotlivých aplikácií za menej ako minútu</h2>

<p>Rozdiel v nastavení je základ. Pomocou smerovacieho nástroja by ste vytvorili reláciu, pridali zdrojový blok, prepojili ho a nechali aplikáciu spustenú. Tu je v podstate:</p>

<ul>
<li>Inštalovať <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> z modelu Mac App Store.</li>
<li>Prehrajte zvuk v niekoľkých aplikáciách, aby sa zobrazili v zozname.</li>
<li>Kliknite na ikonu na paneli s ponukami a potiahnite posúvač každej aplikácie podľa chuti.</li>
<li>Tento mix si môžete uložiť ako profil alebo zvýšiť úroveň príliš tichej aplikácie nad 100 %.</li>
</ul>

<p>Pretože je distribuovaný prostredníctvom Mac App Store, je v karanténe a inštaluje sa ako každá normálna aplikácia – nie <code>.dmg</code> na pretiahnutie, žiadne rozšírenie jadra, žiadny zvukový ovládač na schválenie v nastaveniach zabezpečenia a nič, čo by bolo potrebné opätovne schváliť po aktualizácii macOS. Na poslednom bode záleží: mixéry založené na ovládačoch sa historicky pokazia pri aktualizáciách OS a vyžadujú preinštalovanie komponentu na systémovej úrovni. Aplikácia App Store v karanténe sa vyhýba celej tejto kategórii údržby.</p>

<h2>Ktorý by ste si mali vybrať?</h2>

<p>Buďte v práci úprimní. Vyberte si <strong>Audio Hijack</strong> ak potrebujete zaznamenať zvuk aplikácie alebo hardvéru, použiť efekty v reálnom čase alebo vytvoriť grafy smerovania medzi virtuálnymi zariadeniami. To je jeho domov a stojí to tam za každý dolár.</p>

<p>Ak skutočne potrebujete „dovoľte mi nastaviť hlasitosť každej aplikácie nezávisle“, vyberte si vyhradený panelový mixér. Raz utratíte 14,99 EUR namiesto ~79 EUR, preskočíte vytváranie relácie a získate podporu, stlmenie, profily a stlmenie na paneli, ktorý otvoríte z panela s ponukami. Žiadne funkcie nahrávania, ktorých sa nikdy nedotknete, žiadna pracovná stanica bežiaca na pozadí, ktorá by držala posúvač na mieste.</p>

<p>Väčšina ľudí, ktorí vyskúšali Audio Hijack na vyváženie objemu, riešila malý problém s veľkým nástrojom. Ak ste to vy, malý nástroj sa hodí lepšie – a stojí len zlomok.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> za 14,99 EUR, jednorazovo – hlasitosť na aplikáciu, zosilnenie, stlmenie, profily a automatické stlmenie priamo z panela s ponukami.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D Alternatíva: Objem na aplikáciu bez nadúvania (Mac)",
    description: "Ak ste Boom 3D používali hlavne na zosilnenie zvuku, ale naozaj ste chceli ovládanie hlasitosti podľa aplikácie, SoundDial je štíhlejšia alternatíva Mac: nezávislá hlasitosť na aplikáciu, stlmenie a zosilnenie na aplikáciu, jednorazová cena, žiadny systémový ekvalizér alebo ovládače.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak ste siahli po Boom 3D na zvýšenie hlasitosti, ale v skutočnosti ste chceli ovládať každú aplikáciu samostatne, chcete iný nástroj. Boom 3D je systémový zosilňovač hlasitosti a EQ. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je cielený mixér hlasitosti pre jednotlivé aplikácie: nezávislá hlasitosť, stlmenie a zosilnenie pre každú aplikáciu, jednorazovo 14,99 €, bez EQ, bez ovládačov.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D Alternatíva: Objem na aplikáciu bez nadúvania (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Čo Boom 3D skutočne robí (a nerobí)</h2>
<p>Boom 3D je postavený na troch veciach: zosilnenie hlasitosti v celom systéme, 31-pásmový ekvalizér a 3D „priestorové“ efekty. Týka sa to tých <em>všetko</em> váš Mac sa prehrá naraz. To je skutočne užitočné, ak je vaším cieľom hlasnejší prenosný počítač alebo krivka basov, ktoré sa vám páčia.</p>
<p>Na čo Boom 3D nie je stavaný, je zaobchádzanie s aplikáciami ako s nezávislými kanálmi. Neexistuje čistý spôsob, ako povedať „Spotify na 40 %, môj videohovor na 100 % a táto karta prehliadača je stlmená.“ Jeho posúvač posúva celý mix. A pretože nainštaluje zvukový ovládač, ktorý bude sedieť v signálovej ceste, dotkne sa vášho systému na nižšej úrovni ako nástroj v karanténe. Je tiež umiestnený ako platený produkt s cyklami aktualizácie a nie ako malý jednorazový nástroj.</p>
<blockquote><p>Bežný príbeh: ľudia si nainštalujú Boom 3D, aby bola jedna tichá aplikácia hlasnejšia, a potom si uvedomia, že skutočným problémom bolo, že macOS nemá vôbec žiadny mixér hlasitosti pre jednotlivé aplikácie.</p></blockquote>

<h2>Medzera: macOS nemá mixér objemu</h2>
<p>To prekvapuje ľudí prichádzajúcich zo Windows. Windows má už roky mixér hlasitosti pre jednotlivé aplikácie – kliknite pravým tlačidlom myši na reproduktor a nastavte úroveň každej aplikácie jednotlivo. macOS to jednoducho nedodáva. Získate jeden hlavný zväzok a akýkoľvek interný posúvač, ktorý každá aplikácia odhalí. Na úrovni operačného systému neexistuje spôsob, ako vyvážiť Slack proti karte YouTube oproti hre.</p>
<p>Takže keď hudobná aplikácia prehlušuje váš hovor, vaše jediné prirodzené možnosti sú hrubé: stíšiť hlavný ovládač (čo všetko stíši) alebo sa prehrabať vo vlastných nastaveniach každej aplikácie v nádeji, že má ovládanie hlasitosti. Boom 3D túto medzeru tiež neutesňuje – robí celý mix hlasnejším, nie každú aplikáciu.</p>

<h2>Kde sa zmestí SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je chýbajúci mixér. Žije vo vašom paneli s ponukami a dáva každej spustenej aplikácii vlastný riadok s vlastným posúvačom. To je hlavný rozdiel oproti Boom 3D: namiesto jedného globálneho efektu získate kontrolu podľa zdroja.</p>
<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — nastavte Spotify na 30 %, kým váš videohovor zostane na 100 %.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> - okamžite stíšte jednu hlučnú aplikáciu bez toho, aby ste sa dotkli čohokoľvek iného.</li>
<li><strong>Zosilnenie podľa aplikácie</strong> — Ak sa vám páčil trik Boom 3D, ktorý je hlasnejší ako 100 %, SoundDial si ho ponechá, ale je zameraný na jednu aplikáciu namiesto celého systému. Tiché aplikácie sa samy dostanú za bežný strop.</li>
<li><strong>Objemové profily</strong> — uložiť rozloženie mixéra (napr. „hry“, „stretnutie“, „hudba“) a vyvolať ho jediným kliknutím namiesto opätovného vyvažovania posúvačov zakaždým.</li>
<li><strong>Auto-ducking</strong> — automaticky stiahne zvuk na pozadí, keď sa začne niečo dôležité, takže hovor alebo hranie nie je skryté pod hudbou.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — skok medzi slúchadlami, reproduktormi a inými výstupmi z rovnakej ponuky.</li>
</ul>
<p>Čo SoundDial zámerne nerobí, je zvyšok rozľahlosti funkcií Boom 3D. Neexistuje žiadny 31-pásmový ekvalizér, žiadne faux-surround spracovanie, žiadny systémový efektový reťazec. Ak chcete masteringový ekvalizér, Boom 3D alebo špeciálny audio balík je tou správnou voľbou. Ak ste vlastne stále otvárali Boom 3D <em>objem</em>, tá plocha je nafúknutá, za ktorú platíte.</p>

<h2>Boost, bez ovládača</h2>
<p>Otázka „posilňovania“ si zaslúži priamu odpoveď, pretože to je zvyčajne dôvod, prečo používatelia Boom 3D nakupujú alternatívy. Posilnenie Boom 3D je globálne a založené na ovládačoch. Zosilnenie SoundDial je pre každú aplikáciu a beží v modeli App-sandbox od spoločnosti Apple – distribuuje sa prostredníctvom Mac App Store, takže neexistuje žiadny samostatný inštalačný program, žiadny ovládač na úrovni jadra ani žiadne zvyšné systémové komponenty, ktoré by ste mohli neskôr odinštalovať. Dosiahnete výsledok „urobte túto tichú aplikáciu hlasnejšou“ bez toho, aby ste museli ovládať celú vašu zvukovú cestu vodičom.</p>

<h2>Cena: jednorazová vs</h2>
<p>Boom 3D je platená aplikácia s vlastným aktualizačným a licenčným modelom a ceny sa líšia podľa platformy a verzie. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednorazový nákup za 14,99 EUR – kúpte si ho raz, ponechajte si ho, bez predplatného a bez spätného nákupu podľa verzie, aby mixér fungoval. V prípade nástroja, ktorý necháte bežať v paneli s ponukami každý deň, má paušálna cena tendenciu starnúť sa lepšie ako produkt, ktorý musíte znova nakupovať.</p>

<h2>Ktorý by ste si mali vybrať?</h2>
<ul>
<li><strong>Vyberte Boom 3D</strong> ak je vašou skutočnou potrebou seriózny ekvalizér a zvukové efekty pre celý systém a nevadí vám zvukový ovládač v mixe.</li>
<li><strong>Vyberte SoundDial</strong> ak chcete to, čo používatelia Windows považujú za samozrejmosť – skutočný mixér hlasitosti pre jednotlivé aplikácie – plus cielené zvýšenie, profily a automatické znižovanie, za jednorazovú cenu a bez inštalácie ovládačov.</li>
</ul>
<p>Väčšina ľudí, ktorí sa odrazia od Boom 3D, spadá do druhej skupiny. Nechceli ladiť frekvencie; chceli, aby bol prehliadač tichší ako hovor. Presne na to je SoundDial stvorený.</p>

<p><strong>Chcete na svojom Mac ovládať hlasitosť podľa aplikácie bez nadúvania EQ alebo predplatného?</strong> <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> — 14,99 EUR raz, v karanténe, bez ovládačov a každá aplikácia má svoj vlastný posúvač.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Ako stlmiť všetko okrem jednej aplikácie na vašom Mac",
    description: "macOS nemá žiadny mixér hlasitosti pre jednotlivé aplikácie, takže na stlmenie každej aplikácie okrem jednej je potrebný pomocník. Tu je návod, ako počuť iba váš hovor, stream alebo hru, zatiaľ čo všetko ostatné zostane stlmené.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>macOS nemá žiadny vstavaný spôsob, ako stlmiť jednotlivé aplikácie, takže na počúvanie iba jednej aplikácie potrebujete mixér hlasitosti pre každú aplikáciu. Inštalovať <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, otvorte mixér s panelom s ponukami, stlmte každú aplikáciu okrem tej, ktorú chcete počuť, a táto aplikácia sa bude ďalej prehrávať, zatiaľ čo ostatné sa okamžite odmlčia.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Ako stlmiť všetko okrem jednej aplikácie na vašom Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo to macOS nedokáže sám o sebe</h2>
<p>Windows má mixér hlasitosti už viac ako desať rokov: kliknite pravým tlačidlom myši na ikonu reproduktora a každá spustená aplikácia dostane svoj vlastný posúvač. macOS toto ešte nikdy nedodal. Tlačidlá hlasitosti na vašom Mac ovládajú iba jednu vec, hlavnú výstupnú úroveň. Keď vypnete systém, všetko pôjde dole naraz. Keď stlmíte, všetko sa stlmí.</p>
<p>To je v poriadku, kým nebudete mať päť vecí, ktoré vydávajú hluk naraz. Zúčastňujete sa videohovoru, ale na karte prehliadača sa automaticky prehráva reklama, Spotify je stále spustené, hra pinguje na pozadí a Slack zvoní. Jedinou natívnou možnosťou je ukončiť aplikácie, stlmiť ich jednu po druhej vo vlastných nastaveniach každej aplikácie (ak túto možnosť vôbec má) alebo strhnúť slúchadlá. Nič z toho vám nedovolí povedať „toto si nechajte, zvyšok umlčte“.</p>

<h2>Priamy spôsob: zvyšok stlmte mixérom</h2>
<p>Mixér pre jednotlivé aplikácie je umiestnený medzi vašimi aplikáciami a výstupným zariadením a dáva každej aplikácii vlastné ovládanie hlasitosti a stlmenia. Po spustení jednej aplikácie trvá izolácia jednej aplikácie niekoľko sekúnd:</p>
<ul>
<li>Otvorte mixér z panela s ponukami. Uvidíte živý zoznam každej aplikácie, ktorá momentálne produkuje zvuk.</li>
<li>Nájdite jedinú aplikáciu, ktorú chcete počuť, váš hovor, stream, vašu hru.</li>
<li>Stlmiť všetko ostatné. Klepnite na prepínač stlmenia vedľa aplikácie alebo potiahnite jeho posúvač na nulu.</li>
<li>To je všetko. Jedna aplikácia, ktorú ste nechali osamote, pokračuje v prehrávaní pri plnej hlasitosti, zatiaľ čo ostatné zostávajú tiché.</li>
</ul>
<p>S <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, každá aplikácia v zozname má vlastný posúvač a vlastné tlačidlo stlmenia, takže ide o niekoľko kliknutí. Nové aplikácie, ktoré sa začnú prehrávať neskôr, sa zobrazia automaticky, takže ak sa zvuk upozornenia pokúsi vkradnúť, môžete ho na mieste stíšiť bez toho, aby ste sa dotkli sústredenej aplikácie.</p>

<blockquote>Trik je v tom, že stlmenie „všetkého okrem jednej“ je len opakom stlmenia jednej aplikácie. Nestíšite svoj Mac, ale stíšite hluk okolo veci, na ktorej vám skutočne záleží.</blockquote>

<h2>Uložte si ho ako profil, aby ste to nezopakovali</h2>
<p>Ak je toto nastavenie, po ktorom často siahate, robte to ručne vždy, keď zostarnete. Povedzme, že chcete, aby bola vaša aplikácia na volanie počas stretnutí vždy nahlas a všetko ostatné vypnuté, alebo chcete, aby bol váš stream v popredí a v strede, zatiaľ čo hry a prehliadače zostali tiché. Objemový profil ukladá tieto presné nastavenia pre jednotlivé aplikácie a znova ich použije jedným kliknutím.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> umožňuje uložiť profily ako „Stretnutie“ alebo „Iba stream“ a potom na ne prepínať v okamihu, keď ich potrebujete. Nastavte to raz a izolovanie vašej jednej aplikácie sa stane jedinou akciou na paneli s ponukami namiesto práce s piatimi posuvníkmi.</p>

<h2>Inteligentnejšia verzia: automatické stlmenie namiesto tvrdého stlmenia</h2>
<p>Niekedy nechcete, aby ostatné aplikácie úplne zmizli, len chcete, aby zmizli z cesty, keď sa začne niečo dôležitejšie. To je auto-ducking. Keď sa prehráva vaša prioritná aplikácia, aplikácie na pozadí automaticky klesnú na nízku úroveň a po zastavení sa opäť zdvihnú.</p>
<p>To je ideálne pre hovory a streamy. Keď niekto začne hovoriť, vaša hudba sa zníži, takže ho budete počuť, a keď sa hovor skončí, hudba sa sama spustí. Získate výsledok „jasne počuť jednu aplikáciu“ bez manuálneho stlmenia a zapínania vždy, keď sa situácia zmení. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> obsahuje automatické stlmenie spolu s ručným mixérom, takže si môžete vybrať tvrdé stlmenie pre úplné ticho alebo stlmenie pre jemnejšie pozadie.</p>

<h2>Posilnenie jednej aplikácie, ktorú ste si nechali</h2>
<p>Izolácia jedinej aplikácie má bonus: môžete ju tiež zvýšiť hlasitosťou, než váš Mac bežne umožňuje. Niektoré aplikácie, najmä tiché videohovory alebo zle zvládnuté streamy, sú sotva počuteľné aj pri maximálnej hlasitosti. Posilnenie pre jednotlivé aplikácie posunie individuálnu aplikáciu nad 100 % bez toho, aby naštartoval váš systémový výstup, čo by len zosilnilo aplikácie, ktoré ste už stlmili.</p>
<p>Takže úplný krok je: stlmiť hluk, ponechať jednu aplikáciu a ak je táto aplikácia príliš tichá, zvýšte ju. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ovláda všetky tri v rovnakom okne mixéra.</p>

<h2>Na čo sa neprihlásite</h2>
<p>Bežnou obavou zvukových nástrojov Mac je, že vyžadujú rozšírenia jadra, virtuálne zvukové ovládače alebo tieňové inštalátory stiahnuté z náhodnej webovej stránky. Je to legitímna obava, a preto sa niektorí ľudia týmto aplikáciám úplne vyhýbajú.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je na Mac App Store, v karanténe a inštaluje sa ako každá normálna aplikácia, žiadne ovládače, žiadne DMG, žiadne systémové rozšírenia na schválenie. Ide o jednorazový nákup v hodnote 14,99 EUR a nie o predplatné, takže zaplatíte raz a ponecháte si ho. To je dôležité pre niečo, čo necháte bežať na paneli s ponukami celý deň.</p>

<h2>Rýchla rekapitulácia</h2>
<ul>
<li>macOS nemá natívne ovládanie hlasitosti pre jednotlivé aplikácie, takže na to potrebujete mixér.</li>
<li>Otvorte mixér, ponechajte si jednu aplikáciu, stlmte alebo vynulujte všetko ostatné.</li>
<li>Uložte si ho ako profil pre hovory alebo streamy, ktoré často uskutočňujete.</li>
<li>Ak chcete, aby sa aplikácie na pozadí radšej stlmili, než aby ste ich zabili, použite automatické sťahovanie.</li>
<li>Vylepšite svoju uloženú aplikáciu, ak je sama o sebe príliš tichá.</li>
</ul>

<p>Chcete počuť len to, na čom záleží, a zvyšok umlčať? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> a nastavte si svoj prvý profil stlmenia – všetko ostatné za menej ako minútu.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Udržujte inú hlasitosť pre reproduktory a slúchadlá na Mac",
    description: "macOS zabudne mix hlasitosti na úrovni aplikácie, keď prepnete medzi reproduktormi a slúchadlami. Tu je dôvod, prečo sa to deje, manuálne limity a ako to opravuje pamäť objemu pre jednotlivé aplikácie.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>macOS si v skutočnosti pamätá samostatnú systémovú hlasitosť pre každé výstupné zariadenie, no pri každom prepnutí zabudne na rovnováhu na úrovni aplikácie. Slúchadlá a reproduktory si teda zachovávajú svoju vlastnú celkovú úroveň, no v momente, keď ich odpojíte, jedna aplikácia sa spustí a ďalšia zmizne. Opravou je pamäť objemu pre jednotlivé aplikácie, ktorá vydrží prepínače zariadení, na ktoré macOS nemá žiadny natívny nástroj.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zachovajte inú hlasitosť pre reproduktory a slúchadlá na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Čo si macOS pamätá a čo nie</h2>

<p>Existuje všeobecný názor, že macOS zaobchádza s každým výstupným zariadením rovnako. To nie. Každé výstupné zariadenie ukladá svoj vlastný systémový zväzok. Nastavte reproduktory MacBook na 30 % a AirPods na 80 % a macOS ponechá tieto dve čísla oddelené. Zapojte, odpojte, znova pripojte a každé zariadenie sa vráti tam, kde ste ho nechali.</p>

<p>Prečo sa teda táto skúsenosť stále cíti zlomená? Pretože táto pamäť sa zastaví na jedinom globálnom posúvači. macOS má presne jeden ovládač hlasitosti pre všetko, čo sa hrá na danom zariadení. Nepamätá si, aké hlasné boli jednotlivé aplikácie. Keď prepnete z reproduktorov na slúchadlá, rovnováha medzi Spotify, hovorom Zoom a záložkou YouTube sa nezachová, pretože táto rovnováha nikdy neexistovala. Každá aplikácia zdieľa rovnaký posúvač.</p>

<p>Výsledkom je frustrácia, ktorú ľudia opisujú ako „inú hlasitosť pre reproduktory a slúchadlá“. To, čo zvyčajne chcú, nie je len iná hlavná úroveň pre každé zariadenie, ale zapamätateľný mix: tichá hudba, hlasné hovory, stíšenie upozornení a to neporušené, či už sú na stolných reproduktoroch alebo slúchadlách.</p>

<h2>Manuálne riešenia a ich nedostatky</h2>

<p>Môžete sa tam dostať pomocou vstavaných nástrojov a predtým, ako siahnete po čomkoľvek inom, stojí za to poznať strop.</p>

<ul>
<li><strong>Nastavte hlasitosť systému každého zariadenia raz.</strong> Prehrávajte zvuk cez reproduktory, nastavte úroveň, potom prepnite výstup na slúchadlá a nastavte túto úroveň. macOS zachováva oboje. Toto spracováva hlavnú hlasitosť na zariadenie, ale nič na aplikáciu.</li>
<li><strong>Použite objem jednotlivých aplikácií tam, kde to aplikácia ponúka.</strong> Spotify, VLC a väčšina prehliadačov má svoj vlastný interný zväzok. Hlasnú aplikáciu môžete orezať v samotnej aplikácii. Háčik: toto nastavenie žije v aplikácii, nie v zariadení, takže sa nezmení, keď prepnete na slúchadlá, a väčšina aplikácií (Slack, Zoom, systémové upozornenia, Mail) takéto ovládanie vôbec nemá.</li>
<li><strong>Prepnite výstup z ovládacieho centra alebo z panela s ponukami.</strong> Ak chcete rýchlo prechádzať medzi zariadeniami, kliknite na ikonu hlasitosti na paneli s ponukami. Rýchle, ale posúva iba hlavnú úroveň, neobnovuje mix jednotlivých aplikácií.</li>
</ul>

<p>Získate tak hlavný objem pre každé zariadenie. Žiadna z nich vám neposkytne zapamätaný zostatok podľa aplikácie, ktorý vás sleduje naprieč zariadeniami. Táto medzera je presne to, kde žije nepríjemnosť, a je štrukturálna: OS jednoducho nemá žiadny mixér pre jednotlivé aplikácie, na rozdiel od Windows, ktorý ho dodáva už roky.</p>

<h2>Pamäť objemu pre jednotlivé aplikácie a prečo je prepínanie zariadení skutočným problémom</h2>

<p>Hlbšou opravou je dať každej aplikácii vlastný objem a tieto nastavenia zachovať. To je to, čo má mixér podľa aplikácií rád <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je stavaný pre. Nachádza sa vo vašom paneli s ponukami, zobrazuje všetky aplikácie, ktoré momentálne produkujú zvuk, a každej z nich poskytuje nezávislý posuvník, prepínač stlmenia a dokonca zvýšenie o viac ako 100 % pre tiché aplikácie.</p>

<p>Časť, ktorá je dôležitá pre problém reproduktorov a slúchadiel: tieto úrovne sú zapamätané. Nastavte si hudbu na 40 %, hovory na 90 % a chatovaciu aplikáciu stlmte a <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> udržuje ten mix. Keď odpojíte slúchadlá a vrátite sa k reproduktorom, nebudete zakaždým ručne vyrovnávať tri aplikácie.</p>

<p>Objemové profily to posúvajú ďalej. Môžete si uložiť pomenovanú množinu úrovní pre jednotlivé aplikácie a vyvolať ju jedným kliknutím, takže mix „slúchadlá, sústredená práca“ a mix „reproduktory, stretnutia“ predstavujú jeden výber, nie manuálne resetovanie.</p>

<blockquote><p>Mentálny posun: prestaňte myslieť na jeden hlavný posúvač, ktorý stále ťaháte, a začnite premýšľať o uloženom mixe pre každú situáciu. Prepínanie zariadení prestáva byť úlohou opätovného vyvažovania.</p></blockquote>

<h2>Rýchle prepínanie výstupu bez straty mixu</h2>

<p>Spínacie zariadenia by mali byť rýchle a nedeštruktívne. Na tom istom paneli s ponukami môžete zmeniť svoje výstupné zariadenie, takže prechod z reproduktorov na slúchadlá je jedným kliknutím a vaše úrovne pre jednotlivé aplikácie sa objavia namiesto toho, aby sa zrútili späť na jediné globálne číslo.</p>

<p>Súvisiaca funkcia, ktorá stojí za zmienku, je automatické stlmenie zvuku: keď sa zvuk dostane do vášho mikrofónu (začnete hovoriť alebo začne hovor), ostatné aplikácie sa automaticky prepnú, aby vás bolo počuť, a potom sa vrátia na nastavenú úroveň. Je to rovnaký princíp aplikovaný skôr na pozornosť ako na zariadenia, ďalšia vec macOS sama o sebe neurobí.</p>

<h2>Ako to nastaviť</h2>

<ul>
<li>Inštalovať <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> z modelu Mac App Store. Je v sandboxe, takže nie je potrebné schváliť žiadny ovládač, DMG ani rozšírenie jadra.</li>
<li>Prehrávajte zvuk v aplikáciách, ktoré používate najčastejšie, aby sa zobrazili v mixéri.</li>
<li>Nastavte úroveň každej aplikácie, stlmte všetko, čo nechcete, a zosilnite všetko, čo je príliš tiché.</li>
<li>Uložte si toto usporiadanie ako profil, napríklad jeden vyladený pre slúchadlá a jeden pre reproduktory.</li>
<li>Keď zmeníte zariadenia, vyvolajte zodpovedajúci profil alebo jednoducho nechajte preniesť uložené úrovne jednotlivých aplikácií.</li>
</ul>

<p>Úprimné zhrnutie: macOS si pamätá hlasitosť na výstupné zariadenie na hlavnej úrovni, ale nikdy si nezapamätá váš mix pre jednotlivé aplikácie, pretože nemá mix pre jednotlivé aplikácie. Ak je vaším skutočným cieľom konzistentná rovnováha medzi hudbou, hovormi a upozorneniami, ktorá prežije každé prepnutie medzi reproduktormi a slúchadlami, potrebujete navrchu operačného systému pamäť pre jednotlivé aplikácie.</p>

<p>Chcete, aby si reproduktory a slúchadlá zachovali svoj vlastný mix bez prestavovania každej aplikácie? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> za jednorazovo 14,99 €, bez predplatného, bez ovládačov.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control ukončené? Najlepšia náhrada objemu za aplikáciu Mac (2026)",
    description: "Sound Control od Static Z Software je ukončený a prestáva fungovať na modernom macOS. Tu je dôvod, prečo to prestalo fungovať, čo to urobilo a najlepší mixér hlasitosti pre aplikáciu, na ktorý môžete prejsť v roku 2026.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Sound Control od Static Z Software je prerušený a už sa nepredáva ani neaktualizuje a na modernom macOS čoraz viac zlyháva, pretože sa spoliehal na zvukový ovládač na úrovni jadra, ktorý Apple uzamkol. Ak dnes potrebujete objem jednotlivých aplikácií, najčistejšia náhrada je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, sandboxový mixér Mac App Store bez ovládačov.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control ukončené? Najlepšia náhrada objemu Mac na aplikáciu (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Čo vlastne Sound Control dokázal</h2>
<p>Sound Control bol roky hlavnou odpoveďou na skutočnú medzeru macOS: na Mac stále nie je vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows má jeden vo svojom Volume Mixer od Vista, ale macOS vám poskytuje iba jeden hlavný posuvník. Sound Control vyplnil túto dieru prehľadným panelom s ponukami, ktorý vám umožní:</p>
<ul>
<li>Nastavte nezávislú úroveň hlasitosti pre každú spustenú aplikáciu.</li>
<li>Stlmte jednotlivé aplikácie bez toho, aby ste sa dotkli zvyšku systémového zvuku.</li>
<li>Zvýšte tiché aplikácie nad 100 percent.</li>
<li>Použite ekvalizér a úpravy vyváženia pre jednotlivé aplikácie.</li>
<li>Smerujte zvuk a pripnite aplikácie na konkrétne výstupné zariadenia.</li>
</ul>
<p>Pre každého, kto mal niekedy odpálený hovor Zoom, zatiaľ čo karta YouTube na pozadí šepká, bolo ovládanie pomocou aplikácie transformačné. Stala sa tichou základňou na mnohých počítačoch náročných používateľov Mac.</p>

<h2>Prečo to prestalo fungovať</h2>
<p>Tu záleží na poctivom technickom príbehu, pretože vysvetľuje, prečo to nie je chyba, ktorú môže niekto jednoducho opraviť. Sound Control fungoval tak, že nainštaloval systémový zvukový ovládač – rozšírenie jadra (kext), ktoré sa vložilo do zvukového potrubia macOS, aby mohlo zachytiť a pretvoriť výstup každej aplikácie. Tento hlboký háčik je presne to, čo umožnilo funkcie EQ a boost.</p>
<p>Počnúc verziou macOS 10.15 Catalina a zrýchľovaním cez Big Sur a prechod Apple Silicon Apple začal zavrhovať rozšírenia jadra v prospech alternatív používateľského priestoru. V prípade zariadení Apple Silicon Mac si načítanie zariadení kext od tretích strán vyžaduje zníženie zabezpečenia systému v režime obnovenia a spoločnosť Apple dala jasne najavo, že staré zvukové zariadenia kext sú vypožičané. Static Z Software nakoniec prestal predávať a vyvíjať Sound Control. Výsledok: v najnovších verziách macOS inštalácie zlyhajú, zvuk vypadáva alebo ovládač jednoducho odmietne načítať bez zníženia zabezpečenia, ktoré väčšina ľudí právom nechce urobiť.</p>
<blockquote>Toto nie je zanedbanie zo strany developera. Ide o posun na úrovni platformy. Apple zavrel dvere za nízkoúrovňovým zvukovým ovládačom Sound Control, na ktorom bol postavený, a žiadna aktualizácia ho nedokáže úplne znova otvoriť.</blockquote>

<h2>Čo sa zmenilo na modernom macOS</h2>
<p>Apple pridal jednu relevantnú vec: Core Audio teraz ponúka Tap API (zavedené v macOS 14.2 Sonoma), ktoré umožňuje aplikáciám zachytávať a spracovávať zvuk podľa jednotlivých procesov z používateľského priestoru – žiadne kext, žiadne zníženie zabezpečenia, žiadne reštartovanie do obnovy. Toto je schválená moderná cesta pre zvuk pre jednotlivé aplikácie a na tom by mal stavať súčasný mixér. Kompromis je úprimný: klepnutia v používateľskom priestore sú obmedzenejšie ako starý ovládač jadra, takže by ste mali očakávať čistý objem jednotlivých aplikácií, stlmenie a zosilnenie namiesto úplného parametrického EQ Sound Control, ktoré ponúka.</p>

<h2>Najlepšia náhrada: SoundDial</h2>
<p>Ak chcete jadro toho, čo robil Sound Control – nezávislý objem na aplikáciu – na Mac môžete skutočne udržiavať bezpečnosť a aktuálnosť, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je najbližšia možnosť čistej migrácie v roku 2026. Ide o mixážny pult hlasitosti pre jednotlivé aplikácie vytvorený pre moderný zvukový zásobník macOS. Čo sa prenáša z pracovného postupu Sound Control:</p>
<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — jeden posúvač na každú spustenú aplikáciu, priamo v lište ponuky.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — stíšiť jednu aplikáciu, zatiaľ čo všetko ostatné sa hrá.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie</strong> — posuňte tichú aplikáciu nad jej normálny strop.</li>
<li><strong>Objemové profily</strong> — uložiť nastavenia mixéra pre rôzne kontexty (hovory, hudba, hranie hier) a prepínať medzi nimi.</li>
<li><strong>Auto-ducking</strong> — automaticky zníži hlasitosť aplikácií na pozadí, čo je užitočné, keď začnete hovoriť alebo prichádza hovor.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — preskakujte medzi reproduktormi, slúchadlami a inými zariadeniami bez toho, aby ste museli prejsť do nastavení systému.</li>
</ul>
<p>Praktické rozdiely, ktoré sú dôležité pre migráciu: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodáva sa cez Mac App Store, je v karanténe a neinštaluje žiadne ovládače ani DMG. To znamená, že žiadne rozšírenie jadra na schválenie, žiadny režim obnovy a žiadne znižovanie bezpečnostnej pozície vášho Mac – presne tie bolestivé body, ktoré zabili Sound Control. Ide o jednorazový nákup za 14,99 €, nie o predplatné.</p>

<h2>Ako prepínať, krok za krokom</h2>
<ul>
<li><strong>Odinštalujte Sound Control čisto.</strong> Pretože nainštaloval ovládač, pred inštaláciou čohokoľvek nového použite jeho vlastný odinštalačný program, ak stále beží, alebo odstráňte jeho súčasti ovládača zvuku. Dva konkurenčné zvukové háčiky môžu spôsobiť poruchy.</li>
<li><strong>Nainštalujte SoundDial zo App Store.</strong> Nevyžaduje sa reštart ani bezpečnostné zmeny.</li>
<li><strong>Udeľte požadované zvukové povolenie.</strong> To mu umožňuje čítať a ovládať výstup jednotlivých aplikácií na modernom macOS.</li>
<li><strong>Otvorte panel s ponukami a nastavte úrovne.</strong> Vaše spustené aplikácie sa zobrazia s jednotlivými posuvníkmi; upravte, stlmte alebo zosilnite podľa potreby.</li>
<li><strong>Uložiť profil.</strong> Ak ste mali obľúbené nastavenia Sound Control, vytvorte ich znova ako profily, aby ste ich mohli prepínať jedným kliknutím.</li>
</ul>

<h2>Úprimné očakávania</h2>
<p>Ak vaším jediným dôvodom na používanie Sound Control bola hlasitosť, stlmenie a zosilnenie jednotlivých aplikácií, moderný mixpult v izolovanom priestore vás plne pokrýva. Ak ste sa silne opierali o jeho ekvalizér pre jednotlivé aplikácie, uvedomte si, že hlboký ekvalizér bol prepojený so starým modelom ovládača a je to najťažšia funkcia, ktorú je možné podľa súčasných pravidiel spoločnosti Apple čisto reprodukovať. Podľa toho nastavte očakávania a nebudete prekvapení.</p>

<p>Ste pripravení získať späť objem jednotlivých aplikácií bez toho, aby vodiča bolela hlava? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> — jednorazovo 14,99 EUR, v karanténe, bez predplatného, bez ovládačov.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny je preč – moderná aplikácia Mac na objem aplikácie, ktorá ju nahradí",
    description: "SoundBunny od spoločnosti Prosoft je ukončená. Tu je aktuálny, aktívne udržiavaný mixér hlasitosti macOS pre jednotlivé aplikácie, ktorý ho nahradí – plus ako migrovať nastavenie zvuku podľa aplikácie bez ovládačov jadra.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak SoundBunny prestal fungovať alebo sa už nepredáva, moderná náhrada áno <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, panel s ponukami pre jednotlivé aplikácie vytvorený pre aktuálny macOS. Poskytuje vám rovnakú základnú úlohu – nezávislý objem, stlmenie a zosilnenie na aplikáciu – ako jednorazový nákup Mac App Store v hodnote 14,99 EUR bez ovládača jadra, DMG alebo predplatného na správu.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – SoundBunny je preč – moderná aplikácia Mac na objem aplikácií, ktorá ju nahradí" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Čo sa stalo so SoundBunny?</h2>
<p>SoundBunny bola pomôcka spoločnosti Prosoft Engineering pre objem jednotlivých aplikácií pre macOS. Umožní vám nastaviť inú úroveň hlasitosti pre každú spustenú aplikáciu priamo z panela s ponukami – tichá hudba, hlasný hovor, prehliadač niekde medzi tým. Celé roky to bol jeden z mála nástrojov, ktoré vyplnili medzeru, ktorú Apple nikdy neuzavrel.</p>
<p>Problém je v tom, že SoundBunny je starší softvér. Neudržal krok s hlbokými zmenami, ktoré spoločnosť Apple urobila v oblasti zvuku a zabezpečenia macOS – Apple Silicon, sprísnený runtime, sprísnené pravidlá pre rozšírenie systému a odstránenie starších zvukových háčikov. Keď pomôcka, ako je táto, prestane dostávať aktualizácie, nakoniec sa pokazí: nepodarí sa spustiť, stratí kontrolu nad streamovaním aplikácií po aktualizácii operačného systému alebo sa jednoducho nedá čisto nainštalovať na moderný Mac. Ak ste tam, nerobíte nič zlé. Aplikácia je pozadu, nie vy.</p>

<h2>Prečo macOS stále potrebuje mixér tretej strany</h2>
<p>Tu je úprimná časť: toto je skutočná medzera v macOS, nie chyba, ktorú môžete opraviť v nastaveniach. Windows dodáva mixér hlasitosti pre jednotlivé aplikácie už viac ako desať rokov. macOS ešte nikdy nemal. Posúvač hlasitosti systému a nastavenia zvuku ovládajú váš <em>výstupné zariadenie</em> ako celok – každá aplikácia má rovnakú majstrovskú úroveň. Neexistuje žiadny vstavaný spôsob, ako povedať „udržať Safari na 40 %, ale Zoom na 100 %.</p>
<p>To je dôvod, prečo nástroje ako SoundBunny existovali a prečo je dnes stále potrebná výmena. Potreba nezmizla, keď sa to stalo s aplikáciou – spoločnosť Apple to stále neriešila.</p>

<h2>Moderná náhrada: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je mixér hlasitosti pre jednotlivé aplikácie, ktorý žije vo vašom paneli s ponukami a robí veci, na ktoré sa používatelia SoundBunny spoliehali, postavený oproti dnešnému macOS namiesto včerajšieho. Prekrytie funkcií pokrýva podstatné:</p>
<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — jeden posuvník na spustenú aplikáciu, presne mentálny model SoundBunny.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — stíšiť jednu hlučnú aplikáciu bez toho, aby ste sa dotkli všetkého ostatného.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie</strong> - stlačte tichú aplikáciu <em>vyššie</em> 100 %, keď je video alebo hovor nahraný príliš nízko. SoundBunny nedokázal spoľahlivo zosilniť minulé systémové maximum na modernom macOS; boost je tu skutočný upgrade.</li>
<li><strong>Objemové profily</strong> — Uložte si sadu úrovní pre jednotlivé aplikácie ("pracovný" mix, "herný" mix) a prepínajte medzi nimi namiesto posúvania posúvačov po jednom.</li>
<li><strong>Auto-ducking</strong> — automaticky zníži hlasitosť aplikácie na pozadí, keď sa aktivuje iný zdroj zvuku (napríklad váš mikrofón pri hovore).</li>
<li><strong>Rýchle prepínanie výstupov</strong> — skok medzi reproduktormi, slúchadlami a inými výstupmi z rovnakej ponuky.</li>
</ul>

<h2>Ako vlastne migrácia vyzerá</h2>
<p>Neexistuje žiadny krok importu – úrovne hlasitosti jednotlivých aplikácií nie sú súbor, ktorý prenášate – ale prepnutie je rýchle:</p>
<ul>
<li><strong>Správne odstráňte SoundBunny.</strong> Ukončite ju a potom aplikáciu odstráňte. Ak nainštaloval akúkoľvek pomocnú alebo prihlasovaciu položku, odstráňte ju tiež, aby sa dva nástroje nehádali o rovnaké zvukové toky.</li>
<li><strong>Nainštalujte SoundDial zo Mac App Store.</strong> Je uložený v karanténe a distribuovaný cez obchod, takže nie je potrebné pripojiť DMG a žiadne upozornenie „neidentifikovaného vývojára“. Jeden nákup spojený s vaším Apple ID.</li>
<li><strong>Pri prvom spustení udeľte prístup k zvuku.</strong> macOS si vyžiada povolenie pre SoundDial na zobrazenie zvuku aplikácie. Toto je moderná, schválená cesta, ktorú Apple poskytuje – žiadne rozšírenie jadra, žiadne reštartovanie, žiadne zníženie zabezpečenia systému. Udeľte to a vaše spustené aplikácie sa zobrazia ako posúvače.</li>
<li><strong>Obnovte svoj mix.</strong> Nastavte svoje bežné aplikácie a potom uložte toto usporiadanie ako profil, aby ste ho už nikdy nemuseli opakovať.</li>
</ul>

<h2>Praktické rozdiely oproti SoundBunny</h2>
<p>Najdôležitejší rozdiel je v tom <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aktuálny softvér. Beží natívne na Apple Silicon, používa Apple podporované audio API a je to aplikácia Mac App Store – čo znamená, že aktualizácie prichádzajú cez obchod a je postavená tak, aby prežila upgrady operačného systému, nie aby sa na nich pokazila. To, že je v karanténe, tiež znamená, že nemôže dosiahnuť mimo svojho pruhu, čo je upokojujúce pre niečo, čo sedí medzi vašimi aplikáciami a reproduktormi.</p>
<p>Pár úprimných upozornení, takže očakávania sú správne. Pretože SoundDial funguje v rámci audio rámca Apple, ovládanie je najlepšie pre štandardné aplikácie, ktoré smerujú cez normálny systémový výstup. Niektorý softvér prehráva zvuk vlastnou cestou alebo exkluzívnym zariadením a žiadny mixážny pult – vrátane SoundBunny – ich nedokáže plne ovládať. A objem jednotlivých aplikácií je neodmysliteľne softvérovou vrstvou nad macOS; nie je to hardvérový mixér. V rámci týchto skutočných limitov robí prácu, ktorú robil SoundBunny.</p>

<blockquote>Ak ste prešli na Mac zo Windows s očakávaním mixéra hlasitosti pre jednotlivé aplikácie, toto je nástroj, ktorý vyplní túto medzeru – a teraz je to ten, ktorý sa skutočne udržiava.</blockquote>

<p>SoundBunny mal dobrý chod, ale je to dedičstvo. Ak potrebujete hlasitosť, stlmenie a zosilnenie jednotlivých aplikácií na modernom Mac, <a href="https://apps.apple.com/app/id6772792641">získajte SoundDial na Mac App Store</a> — 14,99 EUR raz, bez predplatného, bez ovládačov.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 Alternatíva pre Mac: Objem na aplikáciu bez dodatočného predaja Boom 3D",
    description: "Boom 2 je starý a neustále vás posúva k Boom 3D. Ak chcete iba objem jednotlivých aplikácií a jednoduché zvýšenie moderného modelu macOS, tu je zameraná alternatíva a ako to funguje.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Ak sa vám páčilo Boom 2 pre podporu celého systému, ale chcete jednoduché <strong>na aplikáciu</strong> objem na aktuálnom Mac, úprimná odpoveď je, že Boom 2 je starý a už nie ten správny nástroj. Sústredená alternatíva je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, panelový mixpult, ktorý každej aplikácii poskytuje vlastný posuvník hlasitosti, stlmenie a zvýšenie hlasitosti, za 14,99 EUR raz, bez potreby väčšieho balíka.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Boom 2 Alternatíva pre Mac: Objem podľa aplikácie bez dodatočného predaja Boom 3D" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo sa už Boom 2 nehodí</h2>
<p>Boom 2 bola obľúbená aplikácia z konkrétneho dôvodu: zvýšila celkovú hlasitosť vášho Mac nad systémové maximum a pridala ekvalizér. Robilo to v celom systéme, nie na aplikáciu. To bolo v poriadku v roku 2015. V roku 2026 má dva problémy.</p>
<p>Po prvé, je to dedičstvo. Global Delight očividne presunul svoju energiu do Boom 3D a ak otvoríte produktovú stránku Boom 2, takmer okamžite sa ocitnete v ťahu smerom k novšej, drahšej aplikácii. Boom 2 stále existuje, ale je to odrazový mostík, ktorý predajca používa na predaj Boom 3D, nie produkt získavajúci aktívnu lásku.</p>
<p>Po druhé, a to je dôležitejšie: Boom 2 nikdy nebol mixpultom hlasitosti pre jednotlivé aplikácie. Zvyšuje a formuje jeden hlavný výstup. Ak je vašou skutočnou bolesťou to, že ping Slack je hlasnejší ako vaša hudba, alebo karta prehliadača prehlušuje hovor, Boom 2 to nerieši. Spolu to robí všetko hlasnejším. To je iná práca.</p>

<h2>Čo v skutočnosti znamená „objem na aplikáciu“ na macOS</h2>
<p>Tu je úprimný kontext, ktorý väčšina alternatívnych zhrnutí preskočí: macOS nemá vôbec žiadny vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows má jeden už roky – kliknite pravým tlačidlom myši na reproduktor, otvorte Volume Mixer a nastavte Chrome na 40 % a Spotify na 80 %. Apple to nikdy neposlal. Tlačidlo hlasitosti macOS posúva iba jednu hlavnú úroveň.</p>
<p>Takže keď hľadáte „alternatívu Boom 2“, to, čo často skutočne hľadáte, nie je hlasnejšie Mac – je to ovládanie jednotlivých aplikácií, ktoré používatelia Windows považujú za samozrejmosť. Toto je skutočná medzera v operačnom systéme, nie niečo, čo by Boom 2 alebo ktorákoľvek jednotlivá aplikácia zabudla vytvoriť.</p>

<h2>Kde sa zmestí SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je postavený špeciálne pre túto medzeru. Nachádza sa na paneli s ponukami a obsahuje zoznam aplikácií, ktoré aktuálne prehrávajú zvuk, pričom každá má svoj vlastný posúvač. Úrovne nastavujete pre každú aplikáciu namiesto toho, aby ste postrčili jeden hlavný ovládací prvok a dúfali v to najlepšie.</p>
<p>Čo to robí:</p>
<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — upokojte prehliadač, ponechajte hudbu tam, kde ju chcete, bez globálnych kompromisov.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — stíšte jednu hlučnú aplikáciu bez toho, aby ste sa dotkli čohokoľvek iného.</li>
<li><strong>Zosilnenie podľa aplikácie</strong> — posuňte individuálnu aplikáciu za jej normálny strop, keď je video alebo hovor zaznamenaný príliš ticho. Toto je kúsok, ktorý fanúšikom Boom 2 zvyčajne chýba, až na to, že tu je zameraný na jednu aplikáciu a nie na celý systém.</li>
<li><strong>Objemové profily</strong> — Uložte si rozloženia ako „zameranie“, „stretnutie“ alebo „hranie“ a prepínajte jedným kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky zníži ostatné aplikácie, keď začnete hovoriť, čo je užitočné pri hovoroch a nahrávaní.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — skok medzi reproduktormi, slúchadlami a inými výstupmi z rovnakej ponuky.</li>
</ul>

<h2>Ako to nastaviť</h2>
<p>Pracovný postup je krátky:</p>
<ul>
<li>Inštalovať <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> zo Mac App Store — bez DMG, bez ovládača, bez reštartu.</li>
<li>Kliknutím na ikonu na paneli s ponukami zobrazíte všetky aplikácie, ktoré momentálne produkujú zvuk.</li>
<li>Potiahnite posúvač každej aplikácie na požadovanú úroveň; stlmiť alebo zosilniť individuálne podľa potreby.</li>
<li>Uložte usporiadanie ako profil, ak ho chcete neskôr znova použiť.</li>
</ul>
<p>Pretože sa dodáva cez App Store, je v sandboxe a inštaluje sa čisto. To stojí za zmienku, pretože niektoré staršie zvukové nástroje sa spoliehali na rozšírenia jadra alebo virtuálne zvukové ovládače – niečomu, čomu moderný macOS čoraz viac odoláva. SoundDial od vás nežiada, aby ste nainštalovali ovládač alebo znížili nastavenia zabezpečenia.</p>

<h2>Úprimné obmedzenie</h2>
<p>Zosilnenie podľa aplikácie je skutočné, ale nie magické. Ak je zdrojový zvuk aplikácie skutočne tichý alebo zle zaznamenaný, jeho zosilnením sa spolu so signálom zvýši hladina hluku, takže veľmi tichý materiál môže pri silnom zatlačení znieť syčavo. To je fyzikálny limit zosilnenia, nie chyba v žiadnej konkrétnej aplikácii – zosilnenie systému Boom 2 malo rovnaký kompromis. Zosilnenie berte ako priestor pre praktické prípady, nie záchranu pre nefunkčný zvuk.</p>

<h2>Boom 2 vs. sústredený mixér</h2>
<p>Ak to, čo ste na Boom 2 milovali, bola celosystémová hlasitosť plus ekvalizér a nestaráte sa o ovládanie podľa aplikácie, Boom 3D je zamýšľaným nástupcom predajcu – to je spravodlivá cesta a nebudeme predstierať opak. Ak ste však vyskúšali Boom 2 a uvedomili ste si, že to, čo ste vlastne chceli, bolo zapnúť jednu aplikáciu nadol alebo nahor bez toho, aby ste všetko posunuli, balík EQ a zosilnenia je nesprávny tvar nástroja.</p>
<blockquote>Boom 2 robí celý Mac hlasnejším. Mixér pre jednotlivé aplikácie vám umožňuje rozhodnúť sa, ktorá aplikácia je hlasnejšia. Tie riešia rôzne problémy.</blockquote>
<p>Cenový rozdiel sa tiež oplatí jasne pomenovať. SoundDial je jednorazovo 14,99 EUR. Neexistuje žiadne predplatné, žiadna skúšobná verzia, ktorá prejde do väčšieho plánu, a žiadna cesta v aplikácii, ktorá vás nasmeruje na drahšiu úroveň. Kúpite mixér, vlastníte mixér.</p>

<p>Ak je objem jednotlivých aplikácií – nie systémový ekvalizér – to, čo ste skutočne chceli, <a href="https://apps.apple.com/app/id6772792641">vyskúšajte SoundDial na Mac App Store</a> a nastavte si úrovne tak, ako vám to macOS malo umožniť.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial: Bezplatný open-source vs. platený objem za aplikáciu na Mac",
    description: "FineTune je bezplatná aplikácia s otvoreným zdrojom pre jednotlivé aplikácie pre Mac; SoundDial je platená aplikácia App Store v karanténe s podporou, profilmi a podporou. Tu je úprimné porovnanie, ktoré vám pomôže pri výbere.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>FineTune je bezplatný mixpult hlasitosti pre jednotlivé aplikácie s otvoreným zdrojom pre macOS, takže ak je vašou jedinou starosťou cena, je to skutočná možnosť. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je platená (14,99 EUR, jednorazová) aplikácia Mac App Store, ktorá pridáva zvýšenie objemu pre jednotlivé aplikácie, uložené profily, automatické sťahovanie a podporu dodávateľa. Skutočná voľba je bezplatná a vlastná verzus karanténa a podporovaná.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – FineTune vs SoundDial: Bezplatný open-source vs. platený objem za aplikáciu na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Problém riešia obe aplikácie</h2>

<p>macOS stále nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows má jeden už roky – kliknite pravým tlačidlom myši na ikonu reproduktora, otvorte mixér hlasitosti a každá aplikácia dostane svoj vlastný posúvač. Na Mac získate presne jeden posúvač hlasitosti systému pre všetko: zdieľajú to vašu hudbu, videohovor, YouTube, upozornenia a hru. Ak je váš hovor príliš tichý a Spotify príliš hlasný, vašou jedinou opravou je úplné stlmenie zvuku Spotify.</p>

<p>Na vyplnenie tejto medzery existujú FineTune aj SoundDial. Dávajú každej spustenej aplikácii vlastné ovládanie hlasitosti, takže môžete, povedzme, udržať schôdzu na 100 % a zároveň stiahnuť hudbu na pozadí na 20 % – bez toho, aby ste sa dotkli hlavného posúvača.</p>

<h2>Čo je správne FineTune</h2>

<p>FineTune je novšia, bezplatná aplikácia s otvoreným zdrojovým kódom v duchu SoundSource. Buďme spravodliví, pokiaľ ide o jeho silné stránky, pretože sú skutočné:</p>

<ul>
  <li><strong>Nič to nestojí.</strong> Žiadna licencia, žiadna skúšobná verzia, žiadna inovácia.</li>
  <li><strong>Zdroj je otvorený.</strong> Môžete si prečítať, čo presne robí, skontrolovať súkromie a – ak poznáte Swift – upraviť alebo rozvetviť.</li>
  <li><strong>Je to poháňané komunitou.</strong> Chyby môže opraviť ktokoľvek a kód prežije každú jednu spoločnosť.</li>
  <li><strong>Pokrýva základnú potrebu.</strong> Nezávislý objem jednotlivých aplikácií, čo je funkcia, ktorú skutočne hľadá 90 % ľudí.</li>
</ul>

<p>Ak je vašou jedinou požiadavkou „dovoľte mi vypnúť jednu aplikáciu bez toho, aby som stlačil všetko,“ a vyhovuje vám softvér, ktorý sa dodáva bez formálnej podpory, FineTune je legitímna odpoveď. Odporúčať to tu nie je ústupok – je to úprimné.</p>

<h2>Poctivé kompromisy DIY cesty</h2>

<p>Bezplatný a open-source prináša skutočné náklady, ktoré sa nezobrazujú na cenovke. Toto nie sú údery konkrétne na FineTune – ide o povahu prístupu:</p>

<ul>
  <li><strong>Inštalácia je manuálna.</strong> Zvukové nástroje s otvoreným zdrojovým kódom sa zvyčajne distribuujú ako stiahnutá zostava alebo vzorec Homebrew, nie prostredníctvom App Store. Inštalujete mimo recenziu spoločnosti Apple a ste na háku, aby ste ju aktualizovali.</li>
  <li><strong>Zachytávanie zvuku v rámci aplikácie je svojou povahou krehké.</strong> Smerovanie zvuku inej aplikácie je hĺbková systémová práca. Keď spoločnosť Apple odošle aktualizáciu macOS, ktorá zmení zásobník zvuku, tieto nástroje sa môžu pokaziť, kým ich niekto neopraví. S dobrovoľníckym projektom môže byť „niekto“ v ten mesiac zaneprázdnený.</li>
  <li><strong>Podpora je najlepším úsilím.</strong> Ak sa niečo pokazí, vaše riešenie je problém GitHubu a čakáte. Neexistuje žiadna zaručená odpoveď a nikto nie je povinný to opraviť.</li>
  <li><strong>Rozsah funkcií závisí od toho, čo dodajú správcovia.</strong> Ovládanie hlasitosti jadra je pravdepodobne pokryté; extra závisia výlučne od času prispievateľa.</li>
</ul>

<blockquote>Poctivé usporiadanie: FineTune vymieňa peniaze za zodpovednosť za údržbu. Ušetríte 14,99 EUR a beriete na seba riziko, že aktualizácia operačného systému ho nechá pokazený, kým to komunita nedobehne.</blockquote>

<h2>Kde SoundDial je iný</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> podniká opačný obchod. Zaplatíte raz a na oplátku získate produkt App Store s dodávateľom za ním a širšou súpravou funkcií postavenou na objeme jednotlivých aplikácií:</p>

<ul>
  <li><strong>Hlasitosť a stlmenie jednotlivých aplikácií</strong> — zdieľanú základnú líniu poskytujú obe aplikácie.</li>
  <li><strong>ZVÝŠENIE hlasitosti jednotlivých aplikácií</strong> — posuňte príliš tichú aplikáciu nad 100 %. Užitočné pre aplikácie so slabým zvukovým výstupom, kde stíšenie ostatných stále nestačí.</li>
  <li><strong>Objemové profily</strong> — uložte celé mixy („Stretnutie“, „Zameranie“, „Hry“) a prepínajte jedným kliknutím namiesto toho, aby ste zakaždým prepínali.</li>
  <li><strong>Auto-ducking</strong> — automaticky zníži aplikácie na pozadí, keď hovoríte alebo keď sa zvolená aplikácia aktivuje, takže hovory sa prerušia bez manuálneho hrania.</li>
  <li><strong>Rýchle prepínanie výstupov</strong> — skok medzi reproduktormi, slúchadlami a inými výstupmi z panela ponuky.</li>
</ul>

<p>Rovnako dôležité je <em>ako</em> odosiela sa. SoundDial je izolovaný a distribuovaný cez Mac App Store – žiadne samostatné DMG, žiadne ovládače jadra, žiadna inštalácia ovládača zvuku. Aktualizácie prichádzajú cez App Store ako ktorákoľvek iná aplikácia a je tu skutočný vývojár, ktorý vám pošle e-mail, keď niečo nie je v poriadku. To je konkrétna hodnota 14,99 EUR: nielen viac funkcií, ale niekto zodpovedný za to, aby fungovali vo všetkých vydaniach macOS.</p>

<h2>Úprimné upozornenie, ktoré platí pre oboch</h2>

<p>Žiadna aplikácia tretej strany nemôže urobiť zo zvukového systému macOS Windows' Volume Mixer, pretože Apple nevystavuje čisté verejné API pre zvuk pre jednotlivé aplikácie. Každý nástroj v tejto kategórii – bezplatný alebo platený, otvorený alebo zatvorený – obchádza toto obmedzenie pomocou zvukových techník na úrovni systému. To znamená, že FineTune aj SoundDial môžu byť ovplyvnené veľkými zmenami zvuku macOS. Rozdiel je v tom, kto je zodpovedný za následnú opravu: dobrovoľnícka komunita alebo platený predajca, od ktorého závisí produkt.</p>

<h2>Ktoré by ste si mali vybrať?</h2>

<ul>
  <li><strong>Vyberte FineTune, ak</strong> chcete nulové náklady, ceníte si transparentnosť open source, potrebujete iba základný objem pre jednotlivé aplikácie a pohodlne sa inštalujú mimo App Store a sú samonosné, keď sa veci pokazia.</li>
  <li><strong>Vyberte SoundDial, ak</strong> chcete inštaláciu App Store na jedno kliknutie, doplnky ako boost, profily a auto-ducking a ubezpečenie o aktualizáciách a podpore od predajcu s skinom v hre.</li>
</ul>

<p>Obidve sú platné. Skutočne záleží na tom, či by ste radšej míňali peniaze alebo venovali pozornosť. Ak by ste si radšej kúpili podporovanú aplikáciu v karanténe a už o tom nikdy nepremýšľali, <a href="https://apps.apple.com/app/id6772792641">získajte SoundDial na Mac App Store</a> za jednorazových 14,99 EUR — žiadne predplatné, žiadne ovládače, žiadne DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial: Stačí bezplatný mixér hlasitosti Mac?",
    description: "Spravodlivý súboj medzi bezplatnou aplikáciou Background Music a platenou aplikáciou SoundDial. Kde funguje bezplatný prístup pomocou virtuálnych ovládačov, kde sa zlomí a kedy sa oplatí natívny mixér v hodnote 14,99 €.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Background Music je zadarmo a skutočne dobrý v základoch: dáva každej aplikácii vlastný posuvník hlasitosti a dokáže automaticky pozastaviť hudbu, keď hrá iná aplikácia. Ak je to všetko, čo potrebujete, použite to. Spolieha sa však na virtuálny zvukový ovládač, ktorý sa môže po aktualizáciách macOS pokaziť a chýba mu podpora pre jednotlivé aplikácie, profily a prepínanie výstupov. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vymení peniaze za podporovanú alternatívu bez ovládača, izolovanú v karanténe.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial: Stačí bezplatný mixér hlasitosti Mac?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Po prvé, úprimná pravda o macOS</h2>
<p>macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows má jeden už viac ako desať rokov vo svojom Volume Mixer, ale na Mac posúva systémový posuvník všetko naraz. Neexistuje žiadne rozhranie API podporované spoločnosťou Apple, ktoré by aplikácii tretej strany umožňovalo čisto zachytávať a vyvažovať jednotlivé prúdy aplikácií. Táto jediná medzera je dôvodom, prečo nástroje ako Background Music a SoundDial vôbec existujú a je hlavnou príčinou väčšiny kompromisov uvedených nižšie.</p>

<h2>Čo robí Background Music dobre</h2>
<p>Background Music je open source aplikácia s panelom s ponukami, ktorá existuje už roky a má lojálnych fanúšikov z dobrého dôvodu. Poskytuje vám:</p>
<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — základná vlastnosť. Otočte Spotify nadol a hovor nechajte nahlas.</li>
<li><strong>Automatické pozastavenie</strong> — môže pozastaviť váš hudobný prehrávač, keď sa zvuk spustí inde, čo je príjemné na stretnutia.</li>
<li><strong>Hlasitosť zariadenia, ktorá vás sleduje</strong> a jednoduché, nezmyselné rozhranie.</li>
<li><strong>Nulové náklady</strong> — je zadarmo a kód je verejný.</li>
</ul>
<p>Pre veľa ľudí to stačí. Ak je celý váš zoznam želaní „urob jednu hlučnú aplikáciu tichšiu bez toho, aby ste sa dotkli ostatných“, Background Music to pokrýva a nemali by ste platiť za niečo, čo nepotrebujete. Na férovosti tu záleží: ide o legitímne užitočný nástroj.</p>

<h2>Kde voľný prístup ukazuje svoje švy</h2>
<p>Háčik je v tom <em>ako</em> Background Music dosahuje objem na aplikáciu. Pretože macOS neposkytuje žiadnu oficiálnu cestu, nainštaluje virtuálny zvukový ovládač (upravená verzia starého prístupu Soundflower), ktorý vedie váš systémový zvuk cez seba. Táto architektúra je šikovná, ale prináša skutočné náklady:</p>
<ul>
<li><strong>Po aktualizáciách macOS sa pokazí.</strong> Virtuálne zvukové ovládače sú hlboko v systéme a hlavné vydania macOS ich historicky deaktivovali alebo destabilizovali. Používatelia bežne hlásia ticho, skreslenie alebo potrebu opätovnej inštalácie po inovácii. Keď sa to zlomí, často ste na to sami.</li>
<li><strong>Inštalácia je ťažšia.</strong> Do svojho Mac pridávate zvukové zariadenie susediace s jadrom, nielen aplikáciu. Čisté odinštalovanie môže byť nešikovné.</li>
<li><strong>Stane sa vaším predvoleným výstupným zariadením.</strong> Pretože je všetko smerované cez virtuálne zariadenie, niektoré pro-audio, konferenčné alebo herné aplikácie sa môžu správať zvláštne a prepínanie vášho skutočného výstupu je krok navyše.</li>
<li><strong>Vývoj ide tempom komunity.</strong> Neexistuje žiadny podporný stôl. Opravy prichádzajú, keď má dobrovoľník čas, čo je pre zvukový nástroj, ktorý môže náhle stíšiť, zmysluplné riziko.</li>
</ul>
<p>Nič z toho nerobí Background Music zlým. To z neho robí bezplatný nástroj s výhodami bezplatného nástroja.</p>

<h2>Za čo vlastne platíte so SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aplikácia Mac App Store, ktorá formuje to, čo to je. Pretože aplikácie App Store sú izolované a nemôžu dodávať druh nízkoúrovňového virtuálneho ovládača, ktorý používa Background Music, SoundDial je skonštruovaný tak, aby fungoval bez inštalácie samostatného zvukového zariadenia alebo DMG. To znamená:</p>
<ul>
<li><strong>Žiadne vtipy s virtuálnym ovládačom.</strong> Neexistuje žiadne ďalšie výstupné zariadenie, ktoré by zneškodnilo váš zvukový reťazec, a nie je potrebné nič preinštalovať, keď sa systém zmení.</li>
<li><strong>Aktualizácie macOS prežíva oveľa elegantnejšie.</strong> Distribúcia App Store a karanténa znamenajú, že je postavená na podporovaných cestách a aktualizuje sa prostredníctvom obchodu, takže je oveľa menej pravdepodobné, že by vás inovácia operačného systému nechala ticho.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie.</strong> Toto je skutočný rozdiel funkcií: SoundDial môže tlačiť aplikáciu <em>vyššie</em> 100 % pre tiché zdroje – podcast nahraný príliš nízko, tlmený videohovor. Background Music iba tlmí.</li>
<li><strong>Objemové profily.</strong> Uložte si množinu úrovní pre jednotlivé aplikácie ("Stretnutie", "Hudba", "Hry") a prepínajte jedným kliknutím namiesto toho, aby ste zakaždým posúvali posúvače.</li>
<li><strong>Auto-ducking.</strong> Automaticky znížte hlasitosť iných aplikácií pri prehrávaní zvoleného zdroja – lepšie konfigurovateľné riešenie myšlienky automatického pozastavenia.</li>
<li><strong>Rýchle prepínanie výstupov</strong> zapečené do panela s ponukami a stlmenie pre jednotlivé aplikácie.</li>
<li><strong>Skutočná podpora.</strong> Je to platený produkt s niekým zodpovedným, keď sa niečo pokazí.</li>
</ul>

<h2>Úprimné rozhodnutie</h2>
<blockquote>Ak chcete zadarmo a potrebujete iba základný objem pre jednotlivé aplikácie a po aktualizáciách macOS vám vyhovuje riešenie problémov, Background Music je solídna voľba. Ak chcete podporu, profily, zmenšovanie, prepínanie výstupov, žiadnu krehkosť virtuálneho ovládača a niekoho, komu by ste chceli poslať e-mail, keď sa pokazí, SoundDial má hodnotu 14,99 EUR.</blockquote>
<p>Niekoľko konkrétnych tajbrejkov. Ak sa pravidelne stretávate s príliš tichými zdrojmi, samotné zosilnenie ospravedlňuje cenu – Background Music jednoducho nedokáže urobiť zvuk hlasnejším ako zdroj. Ak sa obávate každoročného hazardu „prežije môj zvuk aktualizáciu“, aplikácia sandboxed store túto úzkosť odstráni. Ak máte radi scény s nastavením a zabudnutím, profily ušetria skutočné trenie. A ide o jednorazovú sumu 14,99 EUR, nie o predplatné, takže porovnanie predstavuje jeden nákup oproti času strávenému údržbou bezplatného ovládača.</p>
<p>Naopak, ak ste drotár, ktorý má rád open source, chce si prečítať kód a väčšinou len vypne jednu aplikáciu – ušetrite peniaze. Oba nástroje riešia rovnaký základný problém; líšia sa robustnosťou, hĺbkou funkcií a tým, kto vás chytí, keď sa pod nimi zmení macOS.</p>

<p>Chcete objem jednotlivých aplikácií bez hazardu s virtuálnym ovládačom? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> — jednorazová cena 14,99 EUR, v karanténe, bez ovládačov, so zabudovaným vylepšením, profilmi a automatickým sklopením.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "Stojí SoundSource za 39 dolárov? Lacnejšia jednorazová alternatíva Mac",
    description: "SoundSource je výkonný zvukový nástroj Mac za cenu ~ 39 USD, ale je to prehnané, ak potrebujete iba hlasitosť a zvýšenie hlasitosti jednotlivých aplikácií. Tu je úprimné porovnanie a jednorazová alternatíva za 14,99 EUR.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>SoundSource stojí za to, ak potrebujete kompletnú súpravu nástrojov: hlasitosť na aplikáciu, 10-pásmový ekvalizér na aplikáciu, smerovanie zvuku medzi zariadeniami a efekty pre celý systém. Ale za približne 39 dolárov je to prehnané, ak chcete hlavne objem na aplikáciu, stlmenie zvuku na aplikáciu a zvýšenie hlasitosti. Pre tú užšiu prácu, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> stojí 14,99 € raz.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Stojí SoundSource 39 dolárov? Lacnejšia jednorazová alternatíva Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Čo vlastne SoundSource robí</h2>
<p>Rogue Amoeba SoundSource je skutočne vynikajúci softvér a je dôležité byť v tomto spravodlivý. Nie je to len objemový mixér. Poskytuje vám:</p>
<ul>
<li><strong>Ovládanie hlasitosti podľa aplikácie</strong> z panela s ponukami, funkcia, pre ktorú prichádza väčšina ľudí.</li>
<li><strong>Plný 10-pásmový ekvalizér</strong> môžete použiť na aplikáciu alebo celý systém, plus ďalšie zvukové efekty (prostredníctvom doplnkov Audio Unit).</li>
<li><strong>Smerovanie výstupu/vstupu</strong>vrátane odoslania jednej aplikácie na iné výstupné zariadenie ako zvyšok systému.</li>
<li><strong>Rýchle prepínanie zariadení</strong> a predvoľby EQ špecifické pre slúchadlá.</li>
</ul>
<p>Ak ste podcaster, streamer alebo audio blbec, ktorý chce vyladiť ekvalizér na svojich slúchadlách, presmerovať zvuk jednej aplikácie do samostatného reproduktora alebo naskladať efekty zvukovej jednotky, SoundSource zarába svoju cenu. Nič tu na to neklepe.</p>

<h2>Otázka ceny</h2>
<p>SoundSource je platená, jednorazová licencia okolo 39 USD (cena sa líši podľa verzie a akcií). Nejde o opakujúce sa predplatné v zmysle Netflixu, ale riadi sa klasickým vzorom platenej aplikácie: kúpite si hlavnú verziu a budúce veľké inovácie sú zvyčajne zľavnené platené aktualizácie, a nie navždy zadarmo. Za niekoľko rokov je to viac ako jeden nákup. Pre mnohých používateľov Mac je úprimná otázka: platím 39 dolárov za súpravu smerovania a ekvalizéra, keď všetko, čoho sa skutočne dotýkam, sú posúvače hlasitosti jednotlivých aplikácií?</p>

<blockquote>Ak ste otvorili SoundSource a používali ste iba posúvače hlasitosti a tlačidlá stlmenia, platíte za sadu, aby ste mohli používať jednu zásuvku.</blockquote>

<h2>Prečo problém vôbec existuje</h2>
<p>Tu je úprimná hlavná príčina: macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie. Windows ho má už roky, ale na Mac je systémová hlasitosť všetko alebo nič. Neexistuje žiadny spôsob od spoločnosti Apple, ako udržať Spotify tichý, zatiaľ čo videohovor zostáva hlasný, alebo ako stlmiť jednu aplikáciu bez toho, aby ste sa dotkli všetkých ostatných. Táto medzera je presne dôvodom, prečo nástroje ako SoundSource a <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> existujú. Je to skutočné obmedzenie operačného systému, nie niečo, čo by niektorá z aplikácií vymyslela ako problém na vyriešenie.</p>

<h2>Kde sa hodí ľahšia, lacnejšia možnosť</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je panel s ponukami pre jednotlivé aplikácie, ktorý bol vytvorený skôr pre bežný prípad než pre prípad pre audio. Zahŕňa:</p>
<ul>
<li><strong>Nezávislý objem na aplikáciu</strong> — pustite hudbu, kým schôdza zostane na plnej úrovni.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> — stíšiť jednu aplikáciu bez stlmenia Mac.</li>
<li><strong>Zvýšenie hlasitosti podľa aplikácie</strong> — posuňte tichú aplikáciu nad jej normálnych 100 %, keď je zdroj príliš mäkký.</li>
<li><strong>Objemové profily</strong> – uložte si sadu úrovní pre jednotlivé aplikácie (napr. rozloženie „zameranie“ alebo „hovor“) a prepínajte jedným kliknutím.</li>
<li><strong>Auto-ducking</strong> — automaticky zníži ostatné aplikácie, keď začnete hovoriť alebo keď sa prehrá vybratá aplikácia.</li>
<li><strong>Rýchle prepínanie výstupov</strong> — preskakovanie medzi reproduktormi, slúchadlami a inými zariadeniami z panela ponuky.</li>
</ul>
<p>to je <strong>14,99 € jednorazovo</strong>, predáva sa prostredníctvom Mac App Store, takže je v karanténe a nie je potrebné inštalovať žiadne samostatné DMG, žiadne rozšírenie jadra a žiadny zvukový ovládač. Stiahnete si ju ako ktorúkoľvek aplikáciu App Store a aktualizuje sa cez obchod.</p>

<h2>Úprimné porovnanie</h2>
<p>Majte jasné oči ohľadom kompromisu. SoundSource dokáže viac ako SoundDial a ak vám na niektorom z nasledujúcich záleží, SoundSource je lepšia kúpa:</p>
<ul>
<li>Chcete skutočnú aplikáciu alebo systém <strong>ekvalizér</strong> a efekty Audio Unit.</li>
<li>Musíte <strong>nasmerovať jednu aplikáciu do iného výstupného zariadenia</strong> než všetko ostatné.</li>
<li>Spoliehate sa na <strong>predvoľby EQ špecifické pre slúchadlá</strong> a jemnozrnné spracovanie zvuku.</li>
</ul>
<p>SoundDial nevykonáva EQ ani smerovanie zariadení podľa aplikácie. Je zámerne užší. Na oplátku vám prináša nižšiu cenu, ľahší pôdorys a sústredené rozhranie panela s ponukami pre to, čo väčšina ľudí skutočne chcela: udržanie každej aplikácie na úrovni, ktorú si vyberiete, s podporou a profilmi navrchu.</p>

<h2>Takže, stojí SoundSource za to?</h2>
<p>Áno, ak použijete EQ a smerovanie. Je to vyspelý, dobre podporovaný softvér od uznávaného vývojára a cena odráža skutočné schopnosti. Ale "stojí za to" závisí od toho, čoho sa dotknete. Ak otvoríte aplikáciu a upravíte len posuvné ovládače hlasitosti, stlmíte aplikáciu alebo si želáte, aby bola jedna tichá aplikácia hlasnejšia, platíte prémiové peniaze za základné potreby mixéra. V takom prípade je rozumnejším riešením jednorazový nástroj v hodnote 14,99 EUR a vždy môžete prejsť na SoundSource neskôr, ak vaše potreby prerastú do EQ a smerovania.</p>

<p>Ak vám ide iba o hlasitosť, zosilnenie, stlmenie zvuku, profily a automatické stlmenie jednotlivých aplikácií, <a href="https://apps.apple.com/app/id6772792641">získajte SoundDial na Mac App Store</a> — 14,99 EUR raz, bez predplatného, bez ovládačov.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Príliš hlasné na Mac? Vypnite jeden prehliadač bez stlmenia všetkého",
    description: "Chrome je hlasnejšie ako vaše ostatné aplikácie na Mac? Naučte sa vstavané opravy (stlmenie jednotlivých kariet, nastavenia zvuku lokality) a ako nastaviť skutočnú hlasitosť pre jednotlivé aplikácie pre Chrome, aby zostal tichší ako všetko ostatné.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>macOS nemá vstavanú hlasitosť pre jednotlivé aplikácie, takže nemôžete natívne vypnúť Chrome a ostatné aplikácie ponechať na plnej hlasitosti. Najrýchlejšie bezplatné opravy sú stlmenie hlučných kariet, zníženie hlasitosti v každom prehrávači videa alebo blokovanie zvuku pre jednotlivé stránky v nastaveniach Chrome. Pre skutočnú a trvalú úroveň hlasitosti iba Chrome potrebujete mixér pre jednotlivé aplikácie.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Príliš hlasné na Mac? Vypnite jeden prehliadač bez stlmenia všetkého" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo Chrome znie hlasnejšie ako všetko ostatné</h2>
<p>Chrome nie je nevyhnutne „hlasnejšie“ z hľadiska dizajnu – ide o to, že Chrome smeruje zvuk z mnohých nezávislých zdrojov: YouTube, automaticky sa prehrávajúce reklamy, videohovory, karty s hudbou na pozadí a webové aplikácie, z ktorých každá dodáva svoju vlastnú hlasitosť. Niektoré stránky sú ovládané horúco, reklamy sú notoricky hlasné a Chrome ich všetky prehráva na plnej výstupnej úrovni vášho systému. Vaša hudobná aplikácia alebo hovor môžu byť tichšie, takže mixu dominuje Chrome.</p>
<p>Na Windows by ste jednoducho otvorili Volume Mixer a potiahli posúvač Chrome nadol. macOS jednoducho túto funkciu neobsahuje. Systémové tlačidlo hlasitosti ovláda všetko naraz, takže otočením Chrome nadol sa zníži aj vaša hudba, upozornenia a hovory. To je hlavné obmedzenie – a je to medzera v operačnom systéme, nie niečo, čo robíte zle.</p>

<h2>Vstavané opravy, ktoré nič nestoja</h2>
<p>Pred inštaláciou čohokoľvek vyskúšajte tieto. Neposkytnú vám ani jeden ovládač hlasitosti Chrome, ale vyriešia väčšinu problémov s „jedným hlasným tabulátorom“.</p>
<ul>
<li><strong>Stlmiť hlučnú kartu.</strong> Kliknite pravým tlačidlom myši na kartu a vyberte možnosť „Stlmiť stránku“ alebo kliknite na malú ikonu reproduktora, ktorá sa zobrazí na karte prehrávajúcej zvuk. Toto stíši túto kartu úplne bez toho, aby ste sa dotkli zvyšku Chrome.</li>
<li><strong>Znížte hlasitosť vo vnútri prehrávača.</strong> Najspoľahlivejší trik: potiahnite posúvač hlasitosti nadol vo vnútri YouTube, Netflix alebo čohokoľvek, čo sa prehráva. Weboví hráči si pamätajú svoju vlastnú úroveň pre každú stránku, takže tichší YouTube zostane tichý aj nabudúce.</li>
<li><strong>Blokovať zvuk pre jednotlivé stránky.</strong> Prejsť na <em>chrome://settings/content/sound</em>. Stránky môžete prepínať medzi „povolenými“ a „stlmenými“ a pridať konkrétne domény do zoznamu ignorovaných. Skvelé na trvalé stíšenie stránok, ktoré sa automaticky prehrávajú.</li>
<li><strong>Zabiť automaticky prehrávané reklamy.</strong> Zvuk reklamy je často skutočným vinníkom. Blokovanie obsahu alebo stlmenie karty, kým nebudete pripravení pozerať, odstráni väčšinu prekvapení hlasitosti.</li>
</ul>
<blockquote>Tieto sú skutočne užitočné a bezplatné. Všimnite si však, čo nedokážu: stlmia alebo spravujú jednotlivé karty. Žiadna z nich vám nedovolí povedať „udržať všetky Chrome na 40 %, kým moja hudba zostane na 100 %.</blockquote>

<h2>Úprimné obmedzenie: žiadny objem na aplikáciu v macOS</h2>
<p>Ak je vaším skutočným cieľom „Chrome by mal byť vždy tichší ako moje ostatné aplikácie“, vstavané nástroje zaostávajú. Stlmenie pre jednotlivé karty je všetko alebo nič. Posuvníky prehrávača sa resetujú, keď si ich stránka nepamätá a musia sa neustále opakovať. A systémová hlasitosť presúva všetko dohromady.</p>
<p>Toto je skutočné obmedzenie macOS, nie chyba, ktorú môžete nakonfigurovať. Spoločnosť Apple nikdy nedodala objemový mixér v štýle Windows. Jediným spôsobom, ako získať trvalú, nezávislú úroveň hlasitosti konkrétne pre Chrome, je aplikácia tretej strany, ktorá je umiestnená medzi vašimi aplikáciami a výstupným zariadením a aplikuje zisk na aplikáciu.</p>

<h2>Nastavte skutočný objem na aplikáciu pre Chrome</h2>
<p>Menu-bar mixér ako <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dáva macOS ovládanie hlasitosti podľa aplikácie, ktoré chýba. Obsahuje zoznam všetkých aplikácií, ktoré práve prehrávajú zvuk, a každej z nich dáva vlastný posuvník – takže môžete Chrome stiahnuť na pohodlnú úroveň a nechať Spotify, vaše hovory a systémové zvuky presne tam, kde sú.</p>
<p>Tu je návod, ako by ste s ním skrotili hlasný Chrome:</p>
<ul>
<li>Otvorte panel s ponukami a nájdite Chrome v zozname aktívnych aplikácií.</li>
<li>Potiahnite posúvač Chrome nadol, povedzme, na 40 až 50 percent. Ostatné aplikácie zostanú nedotknuté.</li>
<li>Ak je to aj konkrétna aplikácia <em>ticho</em> namiesto toho — aplikáciu na volanie, ktorá šepká — použite <a href="https://apps.apple.com/app/id6772792641">zvýšenie hlasitosti na aplikáciu</a> posunúť ju nad 100 percent a zároveň udržať nízku hodnotu Chrome.</li>
<li>Okamžite stlmte zvuk Chrome pomocou stlmenia pre každú aplikáciu, keď potrebujete ticho bez zatvárania kariet.</li>
</ul>
<p>Pretože je úroveň viazaná na aplikáciu, drží sa. Chrome zostáva na zvolenej hlasitosti na kartách, stránkach a reštartoch – žiadne opätovné presúvanie posúvačov prehrávača pri každom otvorení nového videa.</p>

<h2>Ideme ešte ďalej: profily, klesanie a prepínanie výstupov</h2>
<p>Akonáhle budete mať ovládanie pre jednotlivé aplikácie, oplatí sa mať pri sebe niekoľko doplnkov. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> umožňuje ušetriť hlasitosť <strong>profilov</strong> — napríklad profil „zaostrenia“, kde je Chrome tichý a hudba hlasná, a profil „sledovania“, v ktorom dominuje Chrome – a prepínať medzi nimi jediným kliknutím. Automatické sklopenie môže automaticky vypnúť ďalšie aplikácie pri spustení zvoleného zdroja (praktické, takže hovor nikdy nie je skrytý pod hlasnou kartou prehliadača). A rýchle prepínanie výstupov vám umožní preskakovať medzi reproduktormi, slúchadlami a inými zariadeniami bez toho, aby ste museli prejsť do nastavení systému.</p>
<p>Je to 14,99 EUR jednorazový nákup na Mac App Store – žiadne predplatné, žiadne ovládače na inštaláciu, žiadne DMG alebo rozšírenie jadra. Pretože je to sandboxované a distribuované cez App Store, nevyžaduje, aby útržkovitý zvukový ovládač inštaloval staršie mixážne nástroje, na ktoré sa spolieha.</p>

<h2>Ktorú opravu by ste mali použiť?</h2>
<p>Ak máte občas len jednu nepríjemnú kartu, použite vstavané stlmenie zvuku Chrome a nastavenia zvuku stránky – sú zadarmo a fungujú. Ak si neustále želáte, aby sa Chrome jednoducho stíšil, zatiaľ čo všetko ostatné zostalo na mieste, to je presná medzera, ktorú macOS necháva otvorenú a mixér pre jednotlivé aplikácie je čistým riešením.</p>

<p>Chcete Chrome trvalo tichšie bez stlmenia hudby alebo hovorov? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> a dať každej aplikácii vlastný posuvník hlasitosti.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "Oznámenie WhatsApp a Telegram znie na Mac príliš hlasno? Odmietnite ich",
    description: "Opravte zvuky upozornení na pracovnej ploche WhatsApp a Telegram, ktoré sú na vašom Mac príliš hlasné. Začnite so vstavanými nastaveniami každej aplikácie a potom znížte alebo stlmte celú aplikáciu, keď vám macOS neposkytne žiadnu kontrolu pre jednotlivé aplikácie.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>Začnite v každej aplikácii: WhatsApp a Telegram vám umožňujú stlmiť alebo zmeniť zvuky upozornení v ich vlastných nastaveniach, čo je najčistejšia oprava. macOS však nemá posúvač hlasitosti upozornení pre jednotlivé aplikácie, takže ak je vlastný zvuk aplikácie stále príliš hlasný, vašou jedinou skutočnou pákou je znížiť alebo stlmiť zvuk celej aplikácie pomocou nástroja na nastavenie hlasitosti pre jednotlivé aplikácie.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Upozornenie WhatsApp &amp; Telegram znie na Mac príliš hlasno? Odmietnite ich" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Najprv použite vlastné nastavenia upozornení aplikácie</h2>

<p>WhatsApp aj Telegram dodávajú svoje vlastné ovládacie prvky zvuku a tu by ste mali vždy začať. Je to najpresnejšia oprava a nedotýka sa ničoho iného na vašom Mac.</p>

<p><strong>WhatsApp Desktop:</strong> Otvorte WhatsApp, kliknite <em>Nastavenia</em> (ikona ozubeného kolieska), potom <em>Upozornenia</em>. Môžete vypnúť <em>Zvuky</em> úplne pri zachovaní bannerov alebo zakázať náhľady upozornení. WhatsApp neponúka posuvník hlasitosti, takže je v podstate zapnutý alebo vypnutý pre samotný zvuk.</p>

<p><strong>Telegram Desktop:</strong> Otvorte <em>Nastavenia → Upozornenia a zvuky</em>. Telegram je tu flexibilnejší. Zvuk upozornení môžete globálne vypnúť, stlmiť jednotlivé chaty alebo nastaviť vlastné (tichšie) tóny. Môžete tiež stíšiť jednu hlučnú skupinu tak, že ju otvoríte a vyberiete <em>Stlmiť</em>. Pre väčšinu ľudí stlmenie najhlasnejších rozhovorov vyrieši problém bez toho, aby všade stíchli.</p>

<p>Ak je zvuk v poriadku, ale príliš častý, vypnite konkrétne chaty alebo kanály, ktoré sa spúšťajú najčastejšie, namiesto zabíjania zvuku v celej aplikácii. Vďaka tomu budú dôležité upozornenia počuť.</p>

<h2>Vypnite zvuky upozornení v nastaveniach systému macOS</h2>

<p>macOS má druhú vrstvu ovládania, ktorá v niektorých prípadoch prepíše aplikáciu. Prejsť na <em>Systémové nastavenia → Upozornenia</em>, v zozname vyberte WhatsApp alebo Telegram a vypnite <em>Prehrať zvuk pre upozornenia</em>. Tým sa stlmí výstražný signál pre danú aplikáciu, pričom sa budú stále zobrazovať bannery.</p>

<p>Toto je skutočne dobrá oprava, ak chcete, aby bola aplikácia tichá iba pri upozorneniach a nestarali sa o jej ďalší zvuk (hovory, video). V kombinácii s vlastnými nastaveniami aplikácie pokrýva väčšinu sťažností typu „ping je nepríjemný“.</p>

<h2>Skutočné obmedzenie: macOS nemá objem pre jednotlivé aplikácie</h2>

<p>Tu je úprimná časť. Vyššie uvedené kroky predstavujú vypínače. Čo nemôžu urobiť, je otočiť WhatsApp alebo Telegram <em>dole</em> na, povedzme, 40 % pri zachovaní plnej hlasitosti. Windows má už roky mixážny pult pre jednotlivé aplikácie. macOS jednoducho jeden neobsahuje a neexistuje žiadne skryté nastavenie ani príkaz Terminal, ktorý by ho pridal.</p>

<p>To je dôležité, keď problémom nie je konkrétne zvonenie upozornení, ale príliš hlasná celá aplikácia:</p>

<ul>
<li>WhatsApp alebo Telegram <strong>hlasové hovory a videohovory</strong> že zvuk na plnej hlasitosti vzhľadom na vašu hudbu alebo stretnutie</li>
<li>Zvuk upozornenia, ktorý chcete ponechať, ale na nižšej úrovni, nie úplne vypnutý</li>
<li>Vyzváňacie tóny, ktoré výrazne prevyšujú čokoľvek iné, čo počúvate</li>
<li>Chcete, aby bola aplikácia počuteľná, ale potichu na pozadí, zatiaľ čo sa sústredíte na niečo iné</li>
</ul>

<p>Nič z toho nie je riešiteľné vstavanými nástrojmi, pretože ponúkajú iba stlmenie, nie úroveň. Táto medzera je skutočným obmedzením macOS, nie niečo, čo vám chýba.</p>

<h2>Nastavte hlasitosť pre jednotlivé aplikácie pomocou SoundDial</h2>

<p>Ak chcete namiesto vypnutia vypnúť jednu aplikáciu, potrebujete mixér hlasitosti pre jednotlivé aplikácie. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aplikácia na paneli s ponukami, ktorá poskytuje macOS ovládanie hlasitosti pre jednotlivé aplikácie, s ktorým nikdy nebolo dodané. Uvádza zoznam všetkých aplikácií, ktoré práve prehrávajú zvuk, a každej z nich dáva vlastný posuvník.</p>

<p>Pre tento konkrétny problém:</p>

<ul>
<li>Otvorte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> z panela s ponukami a v zozname nájdite WhatsApp alebo Telegram.</li>
<li>Potiahnite jeho posúvač nadol na pohodlnú úroveň, napríklad 30–40 %, pričom svoju hudbu, prehliadač alebo videohovor ponechajte nedotknuté.</li>
<li>Použite jednotlivé aplikácie <strong>stlmiť</strong> tlačidlo na okamžité stlmenie tejto aplikácie počas hovoru alebo schôdze a následné zapnutie zvuku neskôr bez prehrabávania sa v nastaveniach.</li>
<li>Ak by ste niekedy potrebovali opak, tichú aplikáciu, ktorá je príliš mäkká, pre každú aplikáciu <strong>posilniť</strong> môže to posunúť nad 100%.</li>
</ul>

<p>Pretože nastavuje úroveň pre každú aplikáciu, SoundDial ponecháva zvonenie upozornení a zvuk hovoru počuteľný, ale primeraný, namiesto voľby všetko alebo nič, ktorú na vás nútia vstavané možnosti. Môžete tiež ušetriť <strong>objemové profily</strong>, takže nastavenie „zamerania“, ktoré udržiava chatové aplikácie na nízkej úrovni, je dostupné jediným kliknutím.</p>

<blockquote>Jedno úprimné upozornenie: Znížením celkovej hlasitosti aplikácie v SoundDial sa zníži aj jej zvonenie upozornení, pretože v prípade macOS ide o zvuk tej istej aplikácie. Ak chcete, aby boli upozornenia úplne vypnuté, ale hovory s plnou hlasitosťou, použite vlastné stlmenie aplikácie plus systémové nastavenia pre zvonček a na nastavenie všeobecnej úrovne si vyhraďte SoundDial.</blockquote>

<p>SoundDial je jednorazový nákup za 14,99 EUR na Mac App Store, v karanténe, bez predplatného, bez ovládačov jadra a bez DMG na bočné načítanie. Je to praktická odpoveď, keď oprava, ktorú skutočne chcete, vypnutie jednej aplikácie namiesto vypnutia, nie je niečo, čo macOS dokáže sám.</p>

<h2>Ktorú opravu by ste mali použiť?</h2>

<p>Pracujte zhora nadol. Najprv vyskúšajte vlastné nastavenia upozornení aplikácie a potom macOS System Settings, aby ste ukončili zvonenie. Ak skutočne chcete znížiť hlasitosť WhatsApp alebo Telegram na konkrétnu hlasitosť, alebo stlmiť iba túto aplikáciu za behu počas hovorov, tu si svoje miesto zasluhuje mixpult pre jednotlivé aplikácie.</p>

<p>Už vás nebaví vyberať si medzi plným výbuchom a úplným tichom pre vaše chatovacie aplikácie? <a href="https://apps.apple.com/app/id6772792641">Získajte SoundDial na Mac App Store</a> a dať každej aplikácii vlastný ovládač hlasitosti.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Zvuk hry hlasnejší ako Discord na Mac? Ako vyvážiť hlasitosť hry a hlasu",
    description: "Vaša hra prehlušuje hlasový chat Discord na Mac a nie je tu žiadny vstavaný mixér hlasitosti. Tu je dôvod, prečo macOS postráda hlasitosť jednotlivých aplikácií v štýle Windows a ako vypnúť hru a zároveň zachovať hlasitosť.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>macOS nemá vstavaný mixér hlasitosti pre jednotlivé aplikácie, takže nemôžete natívne obmedziť hru a zároveň nechať Discord nahlas. Oprava je aplikácia na paneli s ponukami, ktorá nastavuje nezávislú hlasitosť pre každú aplikáciu. Znížte hru na 40 – 50 %, ponechajte hlasový rozhovor na 100 % a obe zostanú vyvážené bez toho, aby ste sa dotkli posúvačov v hre.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zvuk hry hlasnejší ako Discord na Mac? Ako vyvážiť hlasitosť hry a hlasu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo sa to deje na Mac (a nie na Windows)</h2>

<p>Ak ste hrali na Windows, poznáte mixér hlasitosti: kliknite pravým tlačidlom myši na ikonu reproduktora a každá spustená aplikácia dostane svoj vlastný posúvač. Zahodíte hru, zvýšite Discord, hotovo. macOS túto funkciu jednoducho nikdy nedodával. V systémových nastaveniach je uložený jeden hlavný výstupný objem a niekoľko prepínačov na úrovni aplikácie, ale pre ľubovoľné aplikácie nie je možné ovládať úroveň jednotlivých aplikácií.</p>

<p>Takže keď je mix hry hotový, jeho explózie, hudba a streľba sa ozývajú na rovnakej výstupnej úrovni ako hlasy vašich priateľov. Niektoré hry odhaľujú hlavný posuvník hlasitosti, ale veľa z nich nie je dostatočne nízke a mnohé spúšťače, prehliadače a samostatné tituly neponúkajú žiadne užitočné ovládanie. Samotný Discord vám umožňuje upravovať iba hlasitosť prichádzajúcich používateľov, nie hru, ktorá im konkuruje.</p>

<p>Úprimne povedané, ide o medzeru na úrovni operačného systému, nie o chybu, ktorú môžete odstrániť. Zvukový zásobník spoločnosti Apple smeruje všetko do jedného výstupného toku a neexistuje žiadne používateľské rozhranie prvej strany, ktoré by to rozdelilo podľa aplikácie. Preto potrebujete nástroj tretej strany, ktorý je umiestnený medzi vašimi aplikáciami a výstupným zariadením.</p>

<h2>Manuálne riešenia (a prečo chýbajú)</h2>

<p>Než siahnete po softvéri, stojí za to poznať bezplatné možnosti a ich limity:</p>

<ul>
<li><strong>Znížte hlasitosť hry v aplikácii.</strong> Funguje, ak má hra hlavný posuvník s dostatočne jemnými krokmi. Mnohé sa zastavia na 10% prírastkoch alebo spájajú hudbu a efekty, takže nemôžete skrotiť len hlasné časti.</li>
<li><strong>Vychovávajte svojich priateľov v Discord.</strong> Kliknite pravým tlačidlom myši na každého používateľa a zvýšte jeho hlasitosť. To trochu pomáha, ale vylepšuje to a nedotýka sa hry, v ktorej je vlastne problém.</li>
<li><strong>Používajte slúchadlá s hardvérovým ovládačom hlasitosti.</strong> Mení len celkovú úroveň, nie rovnováhu medzi hrou a hlasom.</li>
<li><strong>Smerujte zvuk cez virtuálne zariadenie.</strong> Nástroje ako Loopback alebo BlackHole dokážu rozdeliť streamy, ale sú zamerané na profesionálov, majú skutočné nastavenie a sú prehnané na to, aby „urobili hru tichšou“.</li>
</ul>

<p>Žiadna z nich vám neposkytuje jednu vec, ktorú používatelia Windows považujú za samozrejmosť: rýchly posúvač pre každú aplikáciu. To je tá medzera <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je stavaný na naplnenie.</p>

<h2>Priama oprava: nezávislý objem na aplikáciu</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je panel s ponukami pre jednotlivé aplikácie pre macOS. Zobrazuje každú aplikáciu, ktorá práve prehráva zvuk, a každej z nich dáva vlastný posuvník, presne ako Windows Volume Mixer. V prípade problému hra verzus hlas je pracovný postup krátky:</p>

<ul>
<li>Kliknite na ikonu SoundDial na paneli s ponukami, keď je spustená hra aj Discord.</li>
<li>Nájdite hru v zozname a potiahnite jej posuvník nadol približne na 40-50%.</li>
<li>Nechajte Discord (alebo Slack, Zoom alebo vašu hlasovú aplikáciu) na 100 %.</li>
<li>Prispôsobujte sa za behu počas hry – posuňte hru ďalej v hlasnej prestrelke a ustúpte počas tichého prieskumu.</li>
</ul>

<p>Pretože úrovne sú pre aplikáciu, nastavíte ich raz a držia sa. Hra zostáva obmedzená bez ohľadu na to, ako horúci je jej vlastný mix, a vaši priatelia sú cez ňu jasne počuteľní.</p>

<h2>Zosilnenie, stlmenie a profily pre zvyšok vášho nastavenia</h2>

<p>Rovnaký nástroj pokrýva susedné nepríjemnosti, ktoré prichádzajú s hlasovým hraním:</p>

<ul>
<li><strong>Zosilnenie podľa aplikácie.</strong> Ak je mikrofón spoluhráča tichý aj pri maxime Discord, môžete stlačiť hlasovú aplikáciu <em>vyššie</em> 100%, takže to skôr presekne hru, než aby sa pochovalo.</li>
<li><strong>Stlmenie pre jednotlivé aplikácie.</strong> Okamžite stlmte kartu prehliadača na pozadí alebo hudobnú aplikáciu bez prerušenia prehrávania.</li>
<li><strong>Objemové profily.</strong> Uložte si „herný“ profil s hrou na 45 % a vylepšené Discord, potom sa jedným kliknutím prepnite späť na „normálny“ profil na každodenné použitie – žiadne opätovné presúvanie posúvačov pri každej relácii.</li>
<li><strong>Auto-ducking.</strong> Nechajte hru automaticky spadnúť, keď niekto hovorí, takže popisky vždy pristanú na vrchole akcie.</li>
<li><strong>Rýchle prepínanie výstupov.</strong> Preskakujte medzi slúchadlami a reproduktormi z rovnakej ponuky bez toho, aby ste sa ponorili do nastavení systému.</li>
</ul>

<blockquote><p>Mentálny model je jednoduchý: jeden posúvač na aplikáciu, ako to už roky robí Windows. macOS to nikdy neposkytol, takže paritu obnoví malý nástroj.</p></blockquote>

<h2>Čo úprimne očakávať</h2>

<p>Mixér pre jednotlivé aplikácie rieši problém s rovnováhou čisto, ale správne nastavuje očakávania. Ovláda výstupné úrovne softvéru – nedokáže opraviť hru, ktorej vlastný zvuk je zle zvládnutý, a nedokáže vyvolať signál, ktorý nikdy nebol zachytený (skutočne pokazený mikrofón stále potrebuje opravu hardvéru). Boost pridáva skutočný zisk, takže posunutie tichého zdroja ďaleko za hranicu 100 % môže spôsobiť skreslenie, presne ako keď zapnete akýkoľvek zosilňovač príliš vysoko. Pri rozumnom používaní však väčšina nastavení potrebuje skromnú hernú čiapku a malé zvýšenie hlasu.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je v karanténe a inštaluje sa priamo zo Mac App Store – žiadne ovládače, žiadne rozšírenia jadra, žiadne DMG, ktorým by ste mohli dôverovať. Je to jednorazová cena 14,99 EUR bez predplatného a podporuje ovládanie hlasitosti macOS v 28 jazykoch.</p>

<p>Prestaňte bojovať so svojimi posúvačmi v hre. Chytiť <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a>, vypnite hru, nechajte svoj tím nahlas a nakoniec získajte mixér hlasitosti v štýle Windows macOS, ktorý ste zabudli dodať.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Reproduktory externého monitora sú príliš hlasné alebo zaseknuté na Mac? Opravte hlasitosť HDMI/DisplayPort",
    description: "Prečo tlačidlá hlasitosti vášho Mac neovládajú reproduktory monitora HDMI alebo DisplayPort a ako opraviť zvuk, ktorý je príliš hlasný, zaseknutý alebo neupraviteľný pomocou OSD monitora, nastavenia Audio MIDI a lepšieho smerovania výstupu.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Ak sú tlačidlá hlasitosti vášho Mac sivé alebo nerobia nič pre monitor pripojený cez HDMI alebo DisplayPort, zvyčajne to nie je chyba. Zvuk digitálneho displeja sa často odosiela na pevnej úrovni a hlasitosť ovláda vlastný hardvér monitora. Opravou je úprava zobrazenia, presmerovanie výstupu alebo použitie iného zvukového zariadenia.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Reproduktory externého monitora sú príliš hlasné alebo zaseknuté na Mac? Opravte hlasitosť HDMI/DisplayPort" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo tlačidlá hlasitosti Mac prestanú fungovať cez HDMI/DisplayPort</h2>

<p>HDMI a DisplayPort prenášajú zvuk ako digitálny stream. Mnohé monitory prijímajú tento tok na pevnej výstupnej úrovni a očakávajú, že budete ovládať hlasitosť na samotnom displeji, nie na zdrojovom zariadení. Keď to macOS zistí, deaktivuje posuvník hlasitosti na obrazovke a zošedí klávesy F11/F12, pričom po ich stlačení zobrazí symbol „zákaz vstupu“.</p>

<p>Toto je obmedzenie hardvéru a protokolu, nie niečo, čo môže softvér na Mac prepísať. Zvuk nikdy neprejde cez fázu, kde ho macOS môže stlmiť. Žiadna aplikácia, ovládač ani nastavenie nedokáže vložiť ovládanie hlasitosti do prúdu, ktorý displej vyžaduje na plnej úrovni. Ak budete v tom úprimní, ušetríte si hodiny hľadania nesprávnej opravy.</p>

<h2>Oprava 1: Použite vlastné ovládacie prvky monitora (OSD)</h2>

<p>Toto je skutočné riešenie pre väčšinu ľudí. Takmer každý monitor so vstavanými reproduktormi má ponuku na obrazovke ovládanú fyzickými tlačidlami alebo joystickom na zadnej alebo spodnej strane panela.</p>

<ul>
<li>Stlačením tlačidla OSD/menu otvorte nastavenia monitora.</li>
<li>Vyhľadajte sekciu Zvuk alebo Hlasitosť.</li>
<li>Znížte úroveň – toto je ovládanie, ktoré skutočne funguje cez HDMI/DP.</li>
</ul>

<p>Niektoré monitory ponúkajú aj sprievodnú aplikáciu alebo podporu DDC/CI, takže môžete ovládať OSD zo macOS. Pomôcky tretích strán, ktoré hovoria DDC, dokážu namapovať tlačidlá hlasitosti vášho Mac na hardvérovú hlasitosť monitora, čo stojí za vyskúšanie, ak nenávidíte siahanie po tlačidlách na paneli.</p>

<h2>Oprava 2: Skontrolujte nastavenie Audio MIDI</h2>

<p>Otvorte <strong>Nastavenie MIDI zvuku</strong> (v /Aplikácie/Pomôcky). Vyberte svoj monitor v zozname zariadení. Ak sa na pravej strane zobrazí posúvač hlasitosti, potiahnite ho nadol – niekedy sa na displeji zobrazí úroveň ovládateľnej softvérom, aj keď sú tlačidlá na paneli ponuky vypnuté. Ak posuvník chýba alebo je sivý, displej potvrdzuje, že akceptuje iba zvuk s pevnou úrovňou a mali by ste sa vrátiť k OSD.</p>

<p>Keď ste tu, potvrďte, že je vybraté správne výstupné zariadenie. Je bežné, že zvuk je ticho smerovaný na monitor, o ktorom ste zabudli, že bol pripojený, čo vysvetľuje náhly hlasný alebo chýbajúci zvuk.</p>

<h2>Oprava 3: Nasmerujte zvuk niekam, kde ho môžete skutočne ovládať</h2>

<p>Ak sú reproduktory vášho monitora aj tak priemerné (väčšina áno) a jeho ovládanie hlasitosti je nemotorné, najčistejším riešením je prestať ich používať:</p>

<ul>
<li>Zapojte reproduktory alebo slúchadlá do výstupného konektora pre slúchadlá na monitore, ak ho má – tento analógový výstup je zvyčajne možné ovládať z displeja.</li>
<li>Použite USB DAC, USB reproduktory alebo výstup Bluetooth. USB a analógové výstupy poskytujú macOS plné softvérové ​​ovládanie hlasitosti, takže vaše klávesy opäť fungujú normálne.</li>
<li>Vyberte si vstavané reproduktory vášho Mac pre rýchle zvuky a monitor si ponechajte iba pre video.</li>
</ul>

<p>Akonáhle ste na výstupe, ktorý macOS skutočne dokáže stlmiť, tlačidlá hlasitosti systému sa správajú a vy opäť získate jemné ovládanie namiesto preskakovania medzi hrubými OSD krokmi monitora.</p>

<h2>Keď výstup funguje, ovládajte hlasitosť pre každú aplikáciu</h2>

<p>Získanie kontrolovateľného výstupu späť rieši problém „príliš hlasný/zaseknutý“. Ale macOS vám stále poskytuje iba jednu hlavnú hlasitosť pre všetko. Mac nemá vstavaný mixér pre jednotlivé aplikácie – Windows ho má už roky, ale Apple nikdy nedodal ekvivalent. Hlasité video, hra a tichý hovor teda zdieľajú rovnaký posúvač.</p>

<p>To je tá medzera <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vypĺňa. Ide o panelový mixážny pult, ktorý dáva každej aplikácii vlastnú nezávislú hlasitosť, takže môžete vypnúť kartu prehliadača bez toho, aby ste sa dotkli hudby, okamžite stlmiť jednu aplikáciu alebo zvýšiť tichú aplikáciu nad jej normálny strop. Môžete uložiť profily hlasitosti pre rôzne nastavenia a rýchlo prepínať výstupy z panela ponuky.</p>

<p>Aby bolo jasné o rozsahu: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ovláda softvérovú hlasitosť zvuku prechádzajúceho cez macOS. Nemôže prepísať monitor, ktorý ignoruje hlasitosť systému cez HDMI – to je správanie displeja s pevnou úrovňou a opraví ho iba OSD alebo iný výstup. Keď sa dostanete na ovládateľný výstup, aplikácia žiari v ovládaní podľa aplikácie.</p>

<h2>Rýchly kontrolný zoznam</h2>

<ul>
<li>Tlačidlá cez HDMI/DP sivé? Použite hlasitosť OSD monitora – to je očakávané správanie.</li>
<li>Skontrolujte nastavenie Audio MIDI, či neobsahuje skrytý softvérový posúvač.</li>
<li>Skontrolujte, či je vybraté správne výstupné zariadenie.</li>
<li>Pre skutočné ovládanie nasmerujte zvuk do výstupu pre slúchadlá, USB alebo Bluetooth.</li>
<li>Potom pomocou mixéra pre jednotlivé aplikácie vyvážte jednotlivé aplikácie.</li>
</ul>

<p>Akonáhle je váš výstup pod kontrolou, dajte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pohľad. Je to jednorazový nákup v hodnote 14,99 EUR od Mac App Store – žiadne predplatné, žiadne ovládače, žiadne DMG – a konečne prináša do macOS skutočný mixér hlasitosti pre jednotlivé aplikácie.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "Hlasitosť USB DAC sa na Mac neupraví? Získajte softvérové ovládanie hlasitosti späť",
    description: "Prečo macOS pre mnohé USB DAC skryje posuvník hlasitosti, čo to znamená a ako vrátiť funkčné softvérové ovládanie hlasitosti späť na váš Mac bez zníženia kvality zvuku.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Ak je posúvač hlasitosti vášho USB DAC na Mac sivý, zvyčajne to nie je chyba. macOS deaktivuje hlasitosť svojho softvéru, keď DAC hlási, že nemá žiadnu ovládateľnú hlasitosť, pričom sa očakáva, že použijete vlastný hardvérový gombík DAC. Ak chcete obnoviť hlasitosť softvéru, použite napríklad zoslabovač na úrovni aplikácie <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC Hlasitosť sa na Mac neupraví? Získajte softvérové ovládanie hlasitosti späť" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo macOS stmaví hlasitosť niektorých USB DAC</h2>

<p>Keď pripojíte zvukové zariadenie USB, macOS sa ho opýta, čo dokáže cez protokol USB Audio Class (UAC). Súčasťou tohto podávania rúk je súprava ovládacích prvkov „feature unit“ vrátane ovládača hlasitosti. Ak DAC deklaruje ovládanie hlasitosti, macOS ho prepojí s klávesmi hlasitosti na klávesnici a posúvačom na paneli s ponukami. Ak DAC vyhlási, že nemá hlasitosť nastaviteľnú hostiteľom, macOS úplne zošedí.</p>

<p>Mnoho vysoko kvalitných DAC a zosilňovačov robí presne to druhé, zámerne. Predpoklad dizajnéra je, že do DAC budete privádzať plnohodnotný, bitovo dokonalý digitálny signál a ovládanie hlasitosti pomocou analógového ovládača hlasitosti na samotnej jednotke. K tomuto analógovému zoslabeniu dochádza po konverzii z digitálneho na analógový, takže nedochádza k vyhadzovaniu bitov a je to skutočne cesta, ktorú uprednostňujú audiofili. Je to vlastnosť, nie chyba.</p>

<blockquote>Základné pravidlo: ak má váš DAC fyzický ovládač hlasitosti a posúvač Mac je sivý, výrobca chce, aby ste ovládač použili. Signál sa vysiela na 100 % podľa návrhu.</blockquote>

<h2>Keď je zašednutý posúvač vlastne problém</h2>

<p>Odpoveď „stačí použiť gombík“ sa v skutočných nastaveniach rozpadne:</p>

<ul>
<li><strong>DAC nemá žiadny gombík.</strong> Množstvo kompaktných USB DAC, hardvérových kľúčov a profesionálnych rozhraní nevystavuje žiadne ovládanie hlasitosti ani ovládanie hostiteľa. Ste zaseknutý na akejkoľvek úrovni, na ktorú je nastavený downstream zosilňovač alebo napájané reproduktory.</li>
<li><strong>Gombík je mimo dosahu.</strong> Stolný počítač DAC za monitorom alebo jednotka napájajúca zosilňovač s pevným ziskom znamená, že nastavenie hlasitosti sa namiesto stláčania klávesov stáva fyzickou prácou.</li>
<li><strong>Potrebujete rovnováhu medzi jednotlivými aplikáciami, nielen majstrovskú úroveň.</strong> Dokonca aj dokonalý hardvérový gombík je jediným globálnym ovládacím prvkom. Nedokáže urobiť hovor Zoom tichším ako vaša hudba ani skrátiť hru, keď sa spustí upozornenie.</li>
</ul>

<p>Žiadna z nich nie je opravená macOS, pretože z pohľadu OS sa zariadenie správa správne. Toto je čestné obmedzenie: je to funkcia hlásená zariadením a v nastaveniach systému nie je žiadny prepínač, ktorý by ju prepísal.</p>

<h2>Čestné riešenia skôr, ako čokoľvek nainštalujete</h2>

<p>Najprv vyskúšajte tieto, pretože nič nestojí:</p>

<ul>
<li><strong>Použite hardvérový gombík alebo dolnú hlasitosť.</strong> Ak váš DAC alebo vaše napájané reproduktory/zosilňovač majú ovládanie, je to najčistejšia možnosť a zachováva plné digitálne rozlíšenie.</li>
<li><strong>Skontrolujte vlastnú aplikáciu alebo firmvér DAC.</strong> Niektoré DAC (a herne orientované jednotky) dodávajú ovládací panel alebo nastavenie firmvéru, ktoré umožňuje hlasitosť hostiteľa. Ak existuje možnosť „Hlasitosť USB“ alebo „Hlasitosť softvéru“, jej zapnutím sa posúvač macOS znova spustí.</li>
<li><strong>Skúste iný režim USB.</strong> Niekoľko zariadení uvádza rôzne možnosti v režime „kompatibilný s triedou“ v porovnaní s režimom proprietárneho ovládača. Inštalácia alebo odstránenie ovládača dodávateľa môže zmeniť, či macOS uvidí ovládanie hlasitosti.</li>
<li><strong>Pozrite sa do Audio MIDI Setup.</strong> Otvorte nastavenie Audio MIDI, vyberte zariadenie a skontrolujte, či sa tam zobrazuje hlavná hlasitosť alebo hlasitosť jednotlivých kanálov. Príležitostne je na tomto paneli k dispozícii posuvník, aj keď je panel ponuky sivý.</li>
</ul>

<p>Ak neplatí nič z toho, potrebujete softvérový útlm na strane Mac.</p>

<h2>Softvérové ovládanie hlasitosti s tlmením podľa aplikácie</h2>

<p>Keď hardvér neakceptuje príkaz hlasitosti, zostávajúcou možnosťou je stlmiť zvuk v softvéri skôr, ako dosiahne DAC. Presne toto <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> robí. Nachádza sa na paneli s ponukami a dáva každej spustenej aplikácii vlastnú nezávislú hlasitosť, stlmenie a dokonca zosilnenie bez ohľadu na to, či váš DAC odhaľuje hardvérové ​​ovládanie.</p>

<p>Ak ho chcete použiť pre sivý DAC:</p>

<ul>
<li>Inštalovať <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> zo Mac App Store a otvorte ho z panela s ponukami.</li>
<li>Nechajte svoj DAC vybraný ako systémový výstup; môžete tiež použiť rýchle prepínanie výstupu SoundDial na prepínanie medzi DAC, reproduktormi a slúchadlami bez toho, aby ste museli prejsť do nastavení systému.</li>
<li>Nastavte úrovne pre jednotlivé aplikácie: zrušte prehliadač, zdvihnite prehrávač hudby, stlmte čokoľvek, čo nechcete. Každá aplikácia streamuje hlasitosť, ktorú si zvolíte, a zmiešaný výsledok ide do DAC.</li>
<li>Uložte si profily hlasitosti pre rôzne scenáre (hovory vs. počúvanie) a povoľte automatické sťahovanie aplikácií na pozadí, keď začne hrať niečo dôležitejšie.</li>
</ul>

<h2>Poctivý kompromis za kvalitu zvuku</h2>

<p>Softvérové ​​zoslabenie znižuje digitálnu úroveň pred konverziou, takže teoreticky zahodí malé množstvo rozlíšenia v porovnaní s analógovou hlasitosťou na samotnom DAC. V praxi je na moderných 24-bitových a vyšších cestách pri normálnych úrovniach počúvania redukcia hlboko pod všetko počuteľné a vy si zachováte plný dynamický rozsah DAC pre čokoľvek hrané takmer v plnom rozsahu. Ak ste purista s dobrým analógovým gombíkom na dosah, použite gombík. Ak nemáte žiadne použiteľné hardvérové ​​ovládanie alebo potrebujete vyváženie jednotlivých aplikácií, ktoré macOS jednoducho nedokáže poskytnúť, objem softvéru je tým správnym kompromisom a prekonáva posúvač, ktorý nič nerobí.</p>

<p>SoundDial je jednorazový nákup v hodnote 14,99 EUR, v karanténe, bez ovládačov, rozšírení jadra alebo inštalátorov DMG. Ak je hlasitosť vášho USB DAC sivá a siahnuť po gombíku nie je možné, <a href="https://apps.apple.com/app/id6772792641">získajte SoundDial na Mac App Store</a> a vráťte funkčné ovládanie hlasitosti späť do panela s ponukami.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Obmedzte maximálnu hlasitosť jednej hlasitej aplikácie na Mac (Chráňte svoj sluch)",
    description: "macOS nemá žiadne obmedzenie hlasitosti pre jednotlivé aplikácie, takže jedna hlasná aplikácia vás môže vybuchnúť na plnú hlasitosť systému. Tu je návod, ako nastaviť strop maximálnej hlasitosti pre jednu aplikáciu na Mac s mixérom pre jednotlivé aplikácie a prečo záleží na hardvérových obmedzeniach.",
    date: "2026-07-23",
    readTime: "5 min čítania",
    content: `<p>macOS nemá žiadny vstavaný spôsob, ako obmedziť maximálnu hlasitosť jednej aplikácie, takže hlasný program sa prehráva pri akomkoľvek nastavení vášho systémového posúvača. Ak chcete nastaviť strop pre jednu aplikáciu, použite napríklad panel s ponukami pre jednotlivé aplikácie <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: podržte túto aplikáciu na, povedzme, 40 percent, zatiaľ čo hlasitosť vášho systému zostane vyššia pre všetko ostatné.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Obmedzte maximálnu hlasitosť jednej hlasitej aplikácie na Mac (Chráňte svoj sluch)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prečo vás jedna aplikácia môže náhle odpáliť na Mac</h2>

<p>Na macOS je posuvník hlasitosti na paneli s ponukami alebo v ovládacom centre jediným celosystémovým ovládacím prvkom. Každá aplikácia sa naleje do rovnakého výstupu na rovnakej úrovni. V operačnom systéme nie je zabudovaný žiadny mixér hlasitosti pre jednotlivé aplikácie, ako ho má Windows už roky s panelom Volume Mixer.</p>

<p>Tento dizajn má skutočný vplyv na vaše uši. Ak nastavíte vysokú hlasitosť systému, aby ste mohli počuť tichý podcast alebo tichý videohovor, potom prepnite na hru, upozornenie Discord, webovú stránku s množstvom reklám alebo video, ktoré bolo ovládané oveľa hlasnejšie, táto aplikácia sa tiež prehrá na úrovni celého systému. Výsledkom je klasické vystrašenie: náhla zvuková stena s hlasitosťou, ktorú ste nikdy nezamýšľali pre túto konkrétnu aplikáciu.</p>

<p>Pre každého, kto má tinnitus, citlivosť na zvuk alebo si jednoducho váži svoj sluch, je problémom táto nepredvídateľnosť. Nesnažíte sa všetko urobiť tichším. Snažíte sa zaručiť, že jedna konkrétna hlasná aplikácia nikdy nemôže prekročiť úroveň, o ktorej ste sa rozhodli, že je bezpečná.</p>

<h2>Čo tu macOS môže a čo nemôže robiť</h2>

<p>Dovoľte mi byť úprimný o limitoch predtým, ako niečo odporučím.</p>

<ul>
<li><strong>Hlasitosť systému</strong> znižuje všetko naraz. Stíšte ho, aby ste skrotili jednu aplikáciu a vaše tiché aplikácie sa stanú nepočuteľnými.</li>
<li><strong>Posúvače hlasitosti v aplikácii</strong> existujú v niektorých aplikáciách (prehrávače médií, niektoré prehliadače na karte), ale nie vo väčšine. Hra, videohovor alebo natívna aplikácia často nemajú žiadne nezávislé ovládanie hlasitosti.</li>
<li><strong>Hardvérový strop je skutočný.</strong> Žiadny softvér nedokáže tlačiť signál hlasnejšie, ako je maximum vášho výstupného zariadenia. Naopak, vlastné ovládanie hlasitosti aplikácie, plus váš DAC a slúchadlá nastavia, akú hlasitosť budete skutočne cítiť na 100 percent. Softvér dokáže spoľahlivo znížiť úroveň jednotlivých aplikácií, ale nedokáže prepísať fyziku vašich slúchadiel.</li>
</ul>

<p>Úprimným cieľom teda nie je magické obmedzenie hlasitosti na úrovni vodiča. Ide o praktický a spoľahlivý útlm pre jednotlivé aplikácie: držte vybranú aplikáciu na pevnom zlomku výstupného systému, aby vás nikdy nemohla prekvapiť.</p>

<h2>Ako obmedziť hlasitosť jednej aplikácie pomocou mixéra pre jednotlivé aplikácie</h2>

<p>Mixér hlasitosti pre jednotlivé aplikácie zachytáva zvuk každej aplikácie a umožňuje vám nezávisle nastaviť jej úroveň. Tu je pracovný postup s <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, ktorý sa nachádza na paneli s ponukami:</p>

<ul>
<li><strong>Otvorte mixér.</strong> Kliknite na ikonu na lište ponuky SoundDial. Zobrazí sa zoznam všetkých aplikácií, ktoré aktuálne prehrávajú zvuk, pričom každá má svoj vlastný posúvač.</li>
<li><strong>Nájdite hlasnú aplikáciu.</strong> Nájdite aplikáciu, ktorú chcete obmedziť, napríklad hru, prehliadač alebo nástroj na videokonferencie.</li>
<li><strong>Nastavte jej strop.</strong> Posuňte posúvač danej aplikácie nadol na bezpečnú úroveň, povedzme 35 až 50 percent. Táto aplikácia sa teraz prehráva s týmto zlomkom výstupného systému, zatiaľ čo všetky ostatné aplikácie zostávajú tam, kde boli.</li>
<li><strong>Nechajte svoj systémový zväzok tam, kde ho potrebujete.</strong> Udržujte systémový posúvač dostatočne vysoko pre vaše tiché aplikácie. Obmedzená aplikácia zostane bez ohľadu na to.</li>
</ul>

<p>Pretože úroveň je pre každú aplikáciu, efektívne nastavujete maximum pre tento jeden program. Aj keď sa snaží prehrať svoj najhlasnejší obsah, najhlasnejší je teraz vami vybraný zlomok plného obsahu.</p>

<h2>Urobte čiapku držať s profilmi</h2>

<p>Pomôže jediné manuálne nastavenie, ale úrovne aplikácií sa môžu po ukončení a opätovnom spustení resetovať. Ak chcete vytvoriť nastavenie bezpečné pre sluch, ktoré prežije reštarty, použite <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>objemové profily používateľa. Uložte si profil s preferovanými úrovňami pre jednotlivé aplikácie, napríklad „tichá herná noc“ s hrou na úrovni 40 percent, hudobnou aplikáciou na úrovni 70 percent a aplikáciou na volanie na úrovni 90 percent. Pripomeňte si ho jedným kliknutím, kedykoľvek si sadnete. Váš strop pre hlasnú aplikáciu sa vráti presne tak, ako ste si ho nastavili.</p>

<p>Pri ochrane sluchu sa oplatí poznať ďalšie dve funkcie:</p>

<ul>
<li><strong>Stlmenie pre jednotlivé aplikácie</strong> umožňuje okamžite umlčať jedného páchateľa bez toho, aby ste sa dotkli čohokoľvek iného, čo je užitočné pre aplikáciu, ktorá rozosiela hlasné upozornenia.</li>
<li><strong>Auto-ducking</strong> automaticky zníži zvuk na pozadí, keď sa spustí niečo dôležitejšie, takže nebudete chytení medzi dvoma hlasnými zdrojmi naraz.</li>
</ul>

<blockquote><p>Softvérové zoslabenie je skutočne účinné na obmedzenie aplikácie, ale je to jedna vrstva ochrany, nie lekárska ochrana. Ak máte tinitus alebo citlivosť na zvuk, spárujte strop podľa aplikácie s rozumnými celkovými úrovňami počúvania a prestávkami. Žiadna aplikácia nenahradí starostlivé návyky na objem.</p></blockquote>

<h2>Poznámka k podpore a prečo je to oddelené</h2>

<p>Rovnaký mixér pre jednotlivé aplikácie, ktorý obmedzuje hlasnú aplikáciu, môže tiež zvýšiť príliš tichú aplikáciu nad 100 percent, čo je užitočné pre aplikáciu, ktorej vlastná hlasitosť je ovládaná príliš nízko. Toto sú dve strany toho istého ovládacieho prvku: vy rozhodujete o úrovni každej aplikácie, hore alebo dole. Pre ochranu sluchu jednoducho zvolíte smer „dole“ a podržíte ho tam.</p>

<h2>Krátka verzia</h2>

<p>macOS vám nedovolí obmedziť objem jednej aplikácie samostatne, a to je skutočná medzera operačného systému, nie chyba používateľa. Panel s ponukami pre jednotlivé aplikácie ju zatvorí: nastavte hlasitú aplikáciu na pevný zlomok, uložte ju do profilu a už vás to nikdy nezničí, kým ostatné aplikácie zostanú počuť.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednorazový nákup za 14,99 EUR na Mac App Store v karanténe bez ovládačov alebo inštalácie DMG. Ak je cieľom chrániť vaše uši pred jednou nepredvídateľnou aplikáciou, je to najjednoduchší spôsob, ako nastaviť tento strop a udržať ho.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Rozdielne vyváženie vľavo/vpravo na aplikáciu na Mac – je to možné?",
    description: "Môžete nastaviť iné stereo vyváženie vľavo/vpravo pre každú aplikáciu na macOS? Úprimne povedané, nie - nie natívne a nie s väčšinou nástrojov. Tu je to, čo je vlastne možné a kde sú skutočné limity.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Úprimne povedané, nie – macOS vám neumožňuje nastaviť iné stereo vyváženie vľavo/vpravo pre každú aplikáciu a takmer žiadny nástroj tretej strany neodhalí skutočné posúvanie podľa aplikácie. Môžete nastaviť jeden globálny zostatok pre vaše výstupné zariadenie a môžete ovládať každú aplikáciu <em>objem</em>, ale nezávisle na aplikácii <em>panvicu</em> nie je funkcia, ktorú macOS sprístupňuje.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Rozdielne vyváženie vľavo/vpravo na aplikáciu na Mac — Je to možné?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Rovnováha vs. objem – nie je to to isté</h2>

<p>Stojí za to oddeliť dva nápady, ktoré sa často zamieňajú:</p>
<ul>
  <li><strong>Objem</strong> – celková hlasitosť aplikácie. Toto je jedna úroveň aplikovaná na oba kanály.</li>
  <li><strong>Váha (panvica)</strong> — ako je zvuk distribuovaný medzi ľavý a pravý reproduktor. Rovnováha „úplnej ľavice“ posiela všetko do ľavého kanála a stíši pravý.</li>
</ul>

<p>Ľudia, ktorí požadujú „iné vyváženie na aplikáciu“, zvyčajne chcú jednu z dvoch vecí: pretlačiť zvuk jednej aplikácie do jedného ucha (povedzme hovor do ľavého ucha, hudbu do pravého) alebo opraviť rozdiel v sluchu alebo zlý reproduktor na jednej strane – ale len pre určité aplikácie. To sú legitímne ciele. Problém je v tom, kde žije kontrola.</p>

<h2>Prečo to macOS nedokáže natívne</h2>

<p>macOS má presne jeden ovládač vyváženia a žije na úrovni výstupného zariadenia. Nájdete ho pod <strong>Systémové nastavenia → Zvuk → Výstup</strong>, kde a <em>Zostatok</em> posúvač posúva celý mix doľava alebo doprava. Čokoľvek, na čo je posuvník nastavený, platí <em>všetko</em> smerované do tohto zariadenia – každá aplikácia, každý systémový zvuk, všetko naraz.</p>

<p>V štandardnom zásobníku zvuku macOS nie je žiadne rozhranie API, ktoré hovorí „vykresliť zvuk tejto aplikácie doľava, tá aplikácia je doprava“. Aplikácie odovzdajú svoj zvuk do systému, ktorý je už zmiešaný, a systém použije jednu hlavnú rovnováhu na ceste k reproduktorom. Takže vrstvu, na ktorej by ste chceli posúvať jednotlivé aplikácie, operačný systém jednoducho nezobrazuje. Toto je skutočné obmedzenie operačného systému, nie niečo, čo môže nástroj na paneli s ponukami zdvorilo obísť.</p>

<blockquote>Na rozdiel od jednotlivých aplikácií <em>objem</em> — ktoré macOS tiež natívne postráda, ale ktoré aplikácie môžu implementovať klepnutím na zvukový stream – pre každú aplikáciu <em>rovnováhu</em> by vyžadovalo opätovné posúvanie prúdu každej aplikácie nezávisle a tento háčik nie je dostupný pre aplikácie v karanténe.</blockquote>

<h2>Čo robí SoundDial – a úprimne povedané, čo nie</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> vám dáva ovládanie podľa aplikácie macOS chýba: nezávislé <strong>objem</strong> pre každú spustenú aplikáciu, pre každú aplikáciu <strong>stlmiť</strong>, objem na aplikáciu <strong>posilniť</strong> nad 100 %, zachrániteľný objem <strong>profilov</strong>, automatické stláčanie a rýchle prepínanie výstupu z lišty ponuky.</p>

<p>Aby som bol priamo s vami: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> ovládacie prvky pre každú aplikáciu <em>hlasitosť a stlmenie</em>, nie stereo podľa aplikácie <em>ryžovanie</em>. Do ľavého ucha vám nepošle Safari a do pravého Spotify. Ak vám niekto povie, že mixážny pult s ponukami robí na macOS skutočnú rovnováhu L/R podľa aplikácie, buďte skeptický – toto nie je kontrola, ktorú vám OS rozdáva. Čo SoundDial skutočne rieši, je oveľa bežnejšia frustrácia: jedna aplikácia je príliš hlasná alebo príliš tichá v porovnaní s inou.</p>

<h2>Skutočné riešenia pre rovnováhu medzi jednotlivými aplikáciami</h2>

<p>Ak skutočne potrebujete zvuk rozdelený vedľa seba, tu sú čestné možnosti, zhruba od najjednoduchších po najzaujímavejšie:</p>

<ul>
  <li><strong>Globálna rovnováha (všetky aplikácie):</strong> Použite Nastavenia systému → Zvuk → Výstup → Vyváženie. Toto je vaša jediná vstavaná možnosť a ovplyvňuje každú aplikáciu. Užitočné na korekciu miestnosti alebo asymetrie sluchu, zbytočné na izoláciu jednej aplikácie.</li>
  <li><strong>Samostatné výstupné zariadenia:</strong> Toto je najbližšie k skutočnému zostatku jednotlivých aplikácií. Nasmerujte aplikáciu A do jedného výstupného zariadenia a aplikáciu B do iného a potom nastavte vyváženie každého zariadenia nezávisle. macOS vám umožňuje vybrať výstupné zariadenie v niektorých aplikáciách (a prehliadače/komunikačné aplikácie často odhaľujú svoj vlastný výber výstupu). Ak aplikácia A ukazuje na zariadenie posunuté doľava a aplikácia B na zariadenie posunuté doprava, efektívne získate rovnováhu medzi aplikáciami – pokiaľ vám obe aplikácie umožnia vybrať si ich výstup.</li>
  <li><strong>Nástroje na virtuálne smerovanie zvuku:</strong> Pomôcky, ktoré vytvárajú virtuálne zariadenia a interný mixér, môžu v niektorých konfiguráciách smerovať konkrétne aplikácie do konkrétnych kanálov. Toto je výkonné, ale nešikovné, pridáva komponent v štýle vodiča a pre väčšinu ľudí je to prehnané. Je to doména streamerov a zvukových inžinierov, nie obyčajná oprava „hovor jedným uchom“.</li>
  <li><strong>Rozdelenie hardvéru:</strong> Ak ide o fyzické reproduktory alebo rozdiel v sluchu, hardvérový mixér alebo audio rozhranie s ovládaním jednotlivých kanálov úplne obchádza softvérový problém.</li>
</ul>

<h2>Keď je objem jednotlivých aplikácií skutočne to, čo ste potrebovali</h2>

<p>Veľa žiadostí typu „chcem iný zostatok na aplikáciu“ je v skutočnosti „jedna aplikácia prehlušuje druhú“. Ak je cieľom videohovor, ktorý môžete počuť pri svojej hudbe, alebo hra, ktorá je pri chate Discord príliš hlasná, vyváženie nie je nástroj – nezávislá hlasitosť áno. To je presne to, čo mixér pre jednotlivé aplikácie zvláda čisto, bez virtuálnych ovládačov alebo gymnastiky smerovania.</p>

<p>Takže úprimné zhrnutie: skutočné vyváženie vľavo/vpravo podľa aplikácie nie je funkciou macOS a žiadna aplikácia na mixovanie to presvedčivo nefalšuje. Vaše skutočné trasy sú posúvač globálnej rovnováhy alebo smerovanie výstupu podľa aplikácie do zariadení s oddeleným posúvaním. Ale ak je základnou bolesťou relatívna hlasitosť, je to vyriešený problém.</p>

<p>Chcete nezávislú hlasitosť, stlmenie a zosilnenie pre každú aplikáciu na svojom Mac, s profilmi, ktoré je možné uložiť, a bez ovládačov? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Získajte SoundDial na Mac App Store</a> — 14,99 €, jednorazovo, v pieskovisku.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Prečo sú niektoré aplikácie na Mac oveľa hlasnejšie ako iné? (A ako ich vyrovnať)",
    description: "Aplikácie znejú na Mac úplne inak, pretože každá z nich je upravená podľa vlastného cieľa hlasitosti a macOS nemá vstavané ovládanie hlasitosti pre jednotlivé aplikácie. Tu je dôvod, prečo sa to deje a ako nastaviť úroveň aplikácií.",
    date: "2026-07-23",
    readTime: "6 min čítania",
    content: `<p>Aplikácie znejú na vašom Mac úplne inak, pretože každá z nich je vytvorená, zvládnutá a normalizovaná na svoj vlastný cieľ hlasitosti a macOS nemá vstavaný ovládač hlasitosti pre jednotlivé aplikácie, ktorý by ich zosúladil. Spotify, YouTube, Zoom a systémové upozornenia prechádzajú cez rovnaký hlavný posuvník, takže neustále jazdíte hore a dole.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial – Prečo sú niektoré aplikácie na Mac oveľa hlasnejšie ako iné? (A ako ich vyrovnať)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Nie je to váš Mac – je to samotný zvuk</h2>

<p>Jediný posúvač systémovej hlasitosti na macOS ovláda konečnú výstupnú úroveň pre všetko. Nedotýka sa relatívnej hlasitosti v audio streame každej aplikácie. Táto základná línia je nastavená dlho predtým, ako sa zvuk dostane do vašich reproduktorov, a výrazne sa líši od zdroja k zdroju.</p>

<p>Tieto rozdiely spôsobujú tri veci:</p>

<ul>
<li><strong>Zvládnutie úrovní.</strong> Výrazná popová skladba je zvládnutá oveľa horlivejšie ako tichá akustická nahrávka alebo hovorený podcast. Film zmiešaný pre kino zámerne zachováva ticho a explózie nahlas – to je dynamický rozsah a znamená to, že priemerná úroveň je nízka.</li>
<li><strong>Ciele normalizácie hlasitosti.</strong> Streamovacie platformy prispôsobujú prehrávanie cieľu meranému v LUFS (jednotky hlasitosti vo vzťahu k plnej škále). Spotify mieri okolo -14 LUFS, YouTube zhruba -14 LUFS, Apple Music okolo -16 LUFS. Aplikácia pre videokonferencie alebo hra úplne využíva svoj vlastný zisk. Dve aplikácie „normalizované“ na rôzne ciele sa nikdy navzájom nezhodujú.</li>
<li><strong>Žiadne vyrovnávanie medzi aplikáciami.</strong> Každá aplikácia normalizuje iba svoj vlastný obsah. Nič nekoordinuje Spotify proti Zoom proti hre v prehliadači. macOS ich len sčíta a odošle mix.</li>
</ul>

<h2>Prečo je LUFS dôležitý (zjednodušene povedané)</h2>

<p>Špičková úroveň vám povie jeden najhlasnejší okamih signálu. LUFS vám povie, aké hlasné je niečo v skutočnosti <em>cíti</em> v priebehu času vážené podľa toho, ako funguje ľudský sluch. Tento rozdiel je dôvod, prečo môžu podcast a tanečná skladba dosiahnuť rovnaký vrchol, no zároveň cítiť oddelené svety v hlasitosti – skladba trávi oveľa viac času pri strope.</p>

<blockquote>Tichší cieľ LUFS znamená viac priestoru na hlavu a väčší dynamický rozsah. Hlasnejší cieľ znamená konzistentnejšiu, „vždy plnú“ zvukovú stenu. Ani jedno nie je zlé – ale keď sa aplikácie zameriavajú na rôzne čísla, máte pocit, že jedna aplikácia kričí a druhá mrmle.</blockquote>

<p>To je úprimná hlavná príčina. Nie je to chyba, ktorú môžete opraviť. Je to fyzika toho, ako sa zvuk vytvára a dodáva, znásobený v desiatkach aplikácií, ktoré nikdy neboli navrhnuté tak, aby navzájom súhlasili.</p>

<h2>Medzera macOS zostáva otvorená</h2>

<p>Tu je časť, ktorá ľudí skutočne frustruje: Windows už roky dodáva mixér hlasitosti pre jednotlivé aplikácie. Priamo na paneli úloh môžete jednu aplikáciu potiahnuť nadol a ďalšiu nahor. macOS to nikdy nezahŕňalo. Predvoľby zvuku vám poskytujú iba hlavný posúvač a výber výstupného zariadenia.</p>

<p>Takže na Mac boli vaše možnosti tradične obmedzené:</p>

<ul>
<li>Upravte pre každú aplikáciu vlastný vnútorný posúvač hlasitosti – ak ho vôbec má. Mnoho aplikácií (Zoom, väčšina hier, systémové zvonkohry) neodhaľuje použiteľnú aplikáciu.</li>
<li>Pri každom prepnutí kontextu prejdite na hlavný posúvač manuálne.</li>
<li>Úplne stlmte jednu vec, ktorá je tupá oprava, ktorá v skutočnosti nič nevyváži.</li>
</ul>

<p>Žiadna z nich si nepamätá vaše preferencie. Ukončite a znova spustite aplikáciu a ste späť na začiatku.</p>

<h2>Praktická oprava: zapamätaný objem na aplikáciu</h2>

<p>Keďže nemôžete prinútiť každú službu, aby prerobila svoj katalóg, funkčným riešením je pridať chýbajúcu vrstvu macOS, ktorá sa nikdy nedodala: nezávislý, zapamätaný objem pre každú aplikáciu. To je presne ono <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> robí. Žije vo vašom paneli s ponukami a dáva každej spustenej aplikácii vlastný posúvač, takže hlasnú aplikáciu môžete stiahnuť nadol a tichú posunúť nahor, kým nebude sedieť na úrovni, ktorá vám bude vyhovovať.</p>

<p>Ak chcete vyrovnať svoje aplikácie v praxi:</p>

<ul>
<li>Otvorte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> z panela s ponukami a uvidíte každú aktívnu aplikáciu s vlastným ovládacím prvkom.</li>
<li>Znížte všetko, čo bije – zvyčajne hudobnú alebo video aplikáciu zvládnutú za tepla – na približne 60 – 70 %.</li>
<li>Nechajte svoju tichú referenčnú aplikáciu (často aplikáciu na volanie alebo podcast) na 100 % a použite každú aplikáciu <strong>posilniť</strong> pretlačiť ho cez 100 %, ak je stále príliš mäkké.</li>
<li>Nastavte úrovne raz. SoundDial si pamätá hlasitosť každej aplikácie, takže zostatok zostane zachovaný aj pri ďalšom otvorení.</li>
</ul>

<p>Väčšinu práce s levelovaním tu robia dve funkcie. <strong>Boost</strong> záleží, pretože veľa aplikácií je jednoducho príliš tichých aj na maximum – posúvač pre jednotlivé aplikácie, ktorý iba znižuje hlasitosť, ich nemôže zachrániť, ale ten, ktorý dokáže zosilniť viac ako 100 % áno. A <strong>objemové profily</strong> Umožní vám uložiť celú sadu úrovní – povedzme profil „zameraná hudba nízka, hlasné hovory“ pre prácu v porovnaní s iným mixom pre hranie hier – a okamžite medzi nimi prepínať namiesto toho, aby ste museli znova upravovať aplikáciu po aplikácii.</p>

<h2>Kde to pomáha najviac</h2>

<p>Najbežnejšou úľavou je skok medzi hudbou a stretnutím: streamovanie hudby nahlas, potom aplikácia na volanie, ktorá v porovnaní znie slabo. Nastavte aplikáciu hovoru vyššie (alebo zosilnite), stiahnite hudbu nadol a prekvapivé kolísanie hlasitosti zmizne. To isté platí pre tichú hru v prehliadači proti hlasnému prehrávaču videa alebo systémové upozornenia, ktoré preskakujú všetko.</p>

<p>Aby bolo jasné, aké sú limity: SoundDial vyvažuje výstup vašich aplikácií. Nedokáže prerobiť zle vytvorenú stopu a nedokáže vymyslieť detaily vo zvuku, ktorý bol zmiešaný s veľmi širokým dynamickým rozsahom. Poskytuje vám jeden ovládací prvok macOS, ktorý ste vynechali – stabilné úrovne pre jednotlivé aplikácie, ktoré zostanú nezmenené.</p>

<p>Už vás nebaví jazdiť na hlavnom posúvači pri každom prepínaní aplikácií? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednorazová cena 14,99 EUR na Mac App Store – v karanténe, bez ovládačov, bez DMG – a konečne dáva každej aplikácii vlastný zapamätaný objem.</p>`,
  },
};
