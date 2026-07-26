import type { ArticleSet } from "./index";

export const hrArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Audio for Podcasting: Control What You Hear While Recording",
    description:
      "Recording a podcast while monitoring levels, hearing your guest, and managing notifications — all competing for one volume slider. Here's a better setup.",
    date: "2026-03-05",
    readTime: "5 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "3 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "12 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "7 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "7 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "8 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "8 min čitanja",
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
    readTime: "7 min čitanja",
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
    readTime: "7 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "4 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "10 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "5 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "7 min čitanja",
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
    readTime: "7 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "8 min čitanja",
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
    readTime: "7 min čitanja",
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
    readTime: "6 min čitanja",
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
    readTime: "9 min čitanja",
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
    title: "Najbolja Background Music alternativa za Mac (2026)",
    description: "Background Music kvar na novijem macOS? Najpouzdanija alternativa miksera glasnoće po aplikaciji je SoundDial — Mac App Store aplikacija u sandboxu s pojačanjem i profilima.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Ako je Background Music prestao raditi nakon ažuriranja macOS, najpouzdanija alternativa je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — mikser glasnoće trake izbornika po aplikaciji od Mac App Store. Svakoj aplikaciji daje vlastiti klizač za glasnoću, dodaje isključivanje zvuka, pojačanje, profile glasnoće i automatsko smanjivanje zvuka, a potpuno je zatvoren u sandboxu i pregledan od strane Applea, tako da nema audio upravljačkih programa koji bi se pokvarili na sljedećem izdanju macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — najbolja Background Music alternativa za Mac (2026.)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto se Background Music kvari na novijem macOS</h2>

<p>Background Music je istinski pametan besplatni projekt otvorenog koda. Korisnicima Mac dao je nešto što Apple nikada nije imao: mikser glasnoće po aplikaciji, kakav Windows ima godinama. Ali njegov dizajn također je razlog zbog kojeg neprestano pada.</p>

<p>Za usmjeravanje i kontrolu zvuka, Background Music instalira virtualni audio uređaj — upravljački program na razini sustava koji presreće zvuk vašeg Mac. Taj je pristup dobro funkcionirao na starijem macOS, ali svako veće izdanje pojačava sigurnost oko kernela i audio ekstenzija. Uobičajeni simptomi koje korisnici navode:</p>

<ul>
<li>Nema zvuka uopće nakon instalacije ili nakon ažuriranja OS-a.</li>
<li>Virtualni uređaj ne uspijeva se učitati, pa se usmjeravanje zvuka tiho zaustavlja.</li>
<li>Aplikaciju je potrebno ponovno instalirati, ponovno pokrenuti ili ručno ukloniti upravljački program za oporavak.</li>
<li>Razvoj je vođen zajednicom i tempom volontera, tako da popravci za novi macOS mogu kasniti.</li>
</ul>

<p>Ništa od ovoga ne čini Background Music "lošim". To samo znači da je besplatni alat temeljen na upravljačkim programima po prirodi krhak, a ako se oslanjate na količinu po aplikaciji svaki dan, ta krhkost brzo stari.</p>

<h2>Što tražiti u zamjeni</h2>

<p>Prije nego što odaberete bilo koju alternativu, odlučite što vam zapravo treba:</p>

<ul>
<li><strong>Pouzdanost kroz macOS ažuriranja.</strong> Ako instalira kernel ili audio proširenje, očekujte povremeni kvar.</li>
<li><strong>Stvarna kontrola po aplikaciji.</strong> Osnova je neovisna glasnoća i isključivanje zvuka za svaku aplikaciju.</li>
<li><strong>pojačati.</strong> Neke su aplikacije (alati za tihe sastanke, određeni preglednici) jednostavno pretihe — želite preći 100%.</li>
<li><strong>Pogodne značajke.</strong> Profili i automatsko prigušivanje ono su što pretvara uslužni program u nešto što držite otvorenim cijeli dan.</li>
<li><strong>Sigurna instalacija.</strong> Mac App Store aplikacija u zaštićenom okruženju ne može dirati unutarnje dijelove sustava, tako da je deinstalacija čista, a ažuriranja automatska.</li>
</ul>

<h2>Zašto je SoundDial pouzdan odabir</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> napravljen je kako bi riješio točno problem s kojim se korisnici Background Music susreću: žele količinu po aplikaciji, ali ne žele čuvati vozača. Živi u vašoj traci izbornika i dobro obavlja temeljni posao:</p>

<ul>
<li><strong>Neovisna glasnoća za svaku aplikaciju</strong>, s isključivanjem zvuka po aplikaciji na istoj ploči.</li>
<li><strong>Pojačanje po aplikaciji</strong> kako bi tihe aplikacije bile dovoljno glasne da stvarno čuju.</li>
<li><strong>Profili volumena</strong> — spremite miks (recimo, "sastanak" ili "igranje") i odmah se prebacite umjesto da svaki put povlačite klizače.</li>
<li><strong>Automatsko spuštanje</strong>, tako da se pozadinski zvuk automatski smanjuje kada treba.</li>
<li><strong>Brzo prebacivanje izlaza</strong> između zvučnika, slušalica i drugih uređaja.</li>
</ul>

<p>Veća razlika je u tome kako se instalira. SoundDial se isporučuje kroz Mac App Store, što znači da ga je Apple pregledao i u sandboxu. Nema DMG za povlačenje, nema audio upravljačkog programa ili proširenja sustava, niti pristupa kernelu. To je jedini najvažniji razlog zašto se neće pokvariti na način na koji Background Music radi kada stigne novi macOS — nije spojen na dijelove sustava koje Apple stalno zaključava.</p>

<p>To košta <strong>14,99 € jednokratno</strong>. Nije besplatno, ali nema pretplate i plaćate za nešto što se održava i sigurno za instalaciju.</p>

<h2>SoundDial naspram Background Music naspram besplatnih alata</h2>

<p>Background Music nije vaša jedina besplatna opcija, pa evo poštenog prikaza zemlje:</p>

<ul>
<li><strong>Background Music (besplatno, otvorenog koda):</strong> volumen po aplikaciji, ali temeljen na upravljačkom programu, sklon kvaru na novijim macOS, a nedostaje mu pojačanje, profili i automatsko smanjivanje.</li>
<li><strong>FineTune (besplatno, otvorenog koda):</strong> lagana traka izbornika po aplikaciji za glasnoću. Dobro je ako je besplatno vaš jedini uvjet, ali malo dodataka.</li>
<li><strong>eqMac (besplatno):</strong> primarno sistemski EQ i pojačivač, a ne pravi mikser po aplikaciji.</li>
<li><strong>SoundSource od Rogue Amoeba (~39 USD):</strong> Pro-grade opcija, s EQ-om po aplikaciji i punim izlaznim usmjeravanjem. Izvrsno, ali je više nego duplo skuplji od SoundDial i još uvijek zahtijeva preuzimanje i upravljački program za snimanje zvuka.</li>
<li><strong>SoundDial (14,99 €, Mac App Store):</strong> sredina — stvarna glasnoća po aplikaciji, isključivanje zvuka, pojačavanje, profili i prigušivanje, isporučeno kao čista instalacija u sandboxu bez upravljačkih programa.</li>
</ul>

<p>Ako trebate EQ po aplikaciji ili složeno studijsko usmjeravanje, SoundSource vrijedi dodatnog novca. Ako želite besplatni alat za peglanje i možete tolerirati povremeni kvar, poslužit će FineTune ili Background Music. Ali ako je vaš cilj "dati svakoj aplikaciji vlastitu glasnoću i prestati joj kvariti svako ažuriranje macOS", SoundDial postiže taj cilj uz najmanje gnjavaže.</p>

<h2>macOS kontekst koji ovo čini nužnim</h2>

<p>Vrijedno je jasno reći: macOS nema ugrađeni mikser glasnoće po aplikaciji. Windows već godinama ima jedan u svom flyoutu za glasnoću, ali na Mac klizač sustava kontrolira sve odjednom. Taj jaz je cijeli razlog zašto postoje alati kao što su Background Music i SoundDial. Budući da ga Apple ne ispunjava, praktično pitanje je kojem pristupu treće strane vjerujete — besplatnom upravljačkom programu koji se bori protiv OS-a ili aplikaciji u sandboxu koja radi s njim.</p>

<p>Jeste li spremni prestati se boriti s pokvarenim audio upravljačkim programima? dobiti <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 € i kontrolirajte glasnoću svake aplikacije na pouzdan način.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource protiv SoundDial: Koja Mac Volume aplikacija pobjeđuje?",
    description: "SoundSource (39 USD, pro-grade) u odnosu na SoundDial (14,99 €, App Store). Usporedite glasnoću po aplikaciji, pojačanje, profile i automatsko smanjivanje kako biste odabrali pravi Mac mikser za sebe.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Ako samo želite kontrolu glasnoće po aplikaciji koja se čisto instalira i košta manje, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je bolja kupnja za većinu ljudi: 14,99 € jednokratno, od Mac App Store, s glasnoćom po aplikaciji, isključivanjem zvuka, pojačavanjem, profilima i automatskim smanjivanjem. Odaberite Rogue Amoeba SoundSource (~39 USD) samo ako izričito trebate EQ po aplikaciji i napredno usmjeravanje izlaza.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource protiv SoundDial: Koja Mac Volume aplikacija pobjeđuje?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Kratka verzija</h2>
<p>macOS još uvijek nema ugrađeni mikser glasnoće po aplikaciji. Windows ima jedan već godinama, ali na Mac klizač za glasnoću sustava pomiče sve odjednom. I SoundSource i SoundDial postoje kako bi popravili taj jaz. Oni samo ciljaju na različite kupce.</p>
<ul>
<li><strong>SoundDial</strong> — 14,99 € jednokratno, Mac App Store, aplikacija na traci izbornika. Neovisna glasnoća po aplikaciji, isključivanje zvuka po aplikaciji, pojačanje po aplikaciji, spremljeni profili, automatsko smanjivanje i brzo prebacivanje izlaza. U zaštićenom okruženju i recenzirano od strane Applea, tako da nema instaliranja upravljačkog programa.</li>
<li><strong>SoundSource</strong> — ~39 dolara, izravno preuzimanje sa Rogue Amoeba. Sve gore navedeno plus EQ po aplikaciji, napredno usmjeravanje izlaza i audio efekti. Zahtijeva instaliranje malog upravljačkog programa za snimanje zvuka.</li>
</ul>

<h2>Cijena i kako kupujete</h2>
<p>Ovo je najjasniji razlaz. SoundSource košta otprilike 39 USD i prodaje ga izravno Rogue Amoeba. SoundDial košta 14,99 eura kao jednokratna kupnja na Mac App Store — malo više od trećine cijene.</p>
<p>Jer <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> isporučuje se kroz App Store, zaštićen je u sandboxu, ovjeren kod javnog bilježnika i pregledan od strane Applea. Kliknete Get, instalira se i gotovo. Ne postoji DMG za montiranje, nema dopuštenja za dodjeljivanje komponente susjedne jezgre, niti audio upravljačkog programa ili proširenja sustava. Također radi zajedno s vašim normalnim tijekom ažuriranja App Store i sinkronizira se s vašim drugim Mac na istom Apple ID-u.</p>
<p>SoundSource preuzima izvan App Store i instalira upravljački program za snimanje zvuka kako bi mogao presresti i obraditi zvuk svake aplikacije. To je ono što otključava njegove profesionalne značajke, ali također znači dodatni korak instalacije i komponentu koja živi dublje u sustavu.</p>

<h2>Ono što SoundSource radi, a SoundDial ne</h2>
<p>SoundSource svoju cijenu zarađuje za određenu vrstu korisnika. Ako bilo što od ovoga opisuje vas, vrijedi dodatnog novca:</p>
<ul>
<li><strong>EQ po aplikaciji.</strong> Želite 10-pojasni ekvilajzer na, recimo, Spotify dok Zoom ostavljate ravno. SoundDial daje glasnoću, a ne EQ.</li>
<li><strong>Napredno izlazno usmjeravanje.</strong> Slanje jedne aplikacije na vaše zvučnike, a druge na slušalice ili određeno sučelje, uz finu kontrolu.</li>
<li><strong>Audio efekti i dodaci.</strong> SoundSource može ugostiti efekte na bazi svake aplikacije — istinski za teritorij.</li>
</ul>
<p>Rogue Amoeba ima dugu, pouzdanu evidenciju. SoundSource je ozbiljan alat i cijena mu je ista. Ako ste audio profesionalac ili veliki korisnik više izlaza, to je pravi izbor.</p>

<h2>Što SoundDial radi bolje za svakodnevnu upotrebu</h2>
<p>Većina ljudi koji traže "Mac mikser glasnoće" ne trebaju EQ. Trebaju jednu aplikaciju tišu od druge i ne žele se boriti protiv instalatera da je dobiju. SoundDial to jasno pokriva i dodaje nekoliko stvari koje vrijedi istaknuti:</p>
<ul>
<li><strong>Pojačanje po aplikaciji.</strong> Neke su aplikacije i videozapisi jednostavno pretihi čak i na 100%. SoundDial može gurnuti jednu aplikaciju iznad normalne granice tako da se tihi sastanak ili podcast konačno čuje.</li>
<li><strong>Profili volumena.</strong> Spremite potpunu postavku — glazba tiha, preglednik isključen, aplikacija poziva glasno — i odmah je pozovite. Izvrsno za prebacivanje između "fokusa", "sastanka" i "igre" bez povlačenja pet klizača.</li>
<li><strong>Automatsko spuštanje.</strong> Automatski smanji pozadinski zvuk (kao što je glazba) kada se pokrene drugi izvor, tako da obavijesti, pozivi ili video ne budu zatrpani.</li>
<li><strong>Brzo prebacivanje izlaza.</strong> S trake izbornika prelazite između zvučnika, slušalica i drugih uređaja.</li>
</ul>
<p>Sve to pokreće se s padajućeg izbornika na traci, tako da je udaljeno jednim klikom i bez vašeg lica ostatak vremena.</p>

<h2>Besplatne alternative, ukratko</h2>
<p>Vidjet ćete nekoliko besplatnih opcija spomenutih u istim pretraživanjima. Vrijedno je znati o njima:</p>
<ul>
<li><strong>Background Music</strong> — besplatno i otvorenog koda, daje vam osnovni volumen po aplikaciji. Ali može se pokvariti na novijim macOS izdanjima i nema boost, profile ili auto-ducking.</li>
<li><strong>FineTune</strong> — besplatna aplikacija za glasnoću trake izbornika otvorenog koda. Jednostavno, ali ograničenog opsega.</li>
<li><strong>eqMac</strong> — besplatni EQ i pojačivač sustava, više kao alat za EQ za cijeli sustav nego pravi mikser za svaku aplikaciju.</li>
</ul>
<p>Besplatno je super ako vam odgovara. Nedostatak je kompatibilnost i podrška: audio alati otvorenog koda mogu zaostajati za macOS ažuriranjima, a značajke poput profila i duckinga općenito ne postoje. Ako je vaša postavka važna za vaš radni dan, jednokratno plaćanje za nešto što je pregledano i održavano obično je mirniji put.</p>

<h2>Koju kupiti?</h2>
<p>Odgovorite na jedno pitanje: trebate li EQ po aplikaciji ili napredno usmjeravanje izlaza?</p>
<ul>
<li><strong>da</strong> — kupiti SoundSource. Napravljen je za to, a ~39 dolara je pošteno za profesionalni alat s motorom na razini upravljačkog programa.</li>
<li><strong>Ne, samo želim količinu po aplikaciji, pojačanje i čistu instalaciju</strong> — kupiti SoundDial. Dobivate miksanje koje je zapravo važno iz dana u dan, plus profile i auto-ducking, za 14,99 € i bez problema s vozačem.</li>
</ul>
<p>Za veliku većinu korisnika Mac, ta druga kanta je iskren odgovor. Plaćate kontrolu nad glasnoćom, a ne studio.</p>

<p><strong>Jeste li spremni popraviti zvuk Mac na jednostavan način?</strong> dobiti <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> — 14,99 € jednokratno, bez vozača, bez DMG. Glasnoća po aplikaciji, pojačanje, profili i automatsko smanjivanje u jednom kliku.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Jeftinija SoundSource alternativa za količinu po aplikaciji na Mac",
    description: "Želite količinu po aplikaciji u stilu SoundSource bez cijene od 39 USD? SoundDial je 14,99 € Mac App Store mikser na traci izbornika s pojačanjem, profilima i automatskim smanjivanjem.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Ako želite kontrolu glasnoće po aplikaciji u stilu SoundSource na svom Mac, ali vam se čini da je 39 USD skupo, najbrže pouzdano rješenje je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. To je jednokratni mikser trake izbornika od Mac App Store od 14,99 € koji svakoj aplikaciji daje vlastiti klizač glasnoće, isključivanje zvuka i pojačavanje — plus profile i automatsko smanjivanje — bez preuzimanja ili instaliranja upravljačkog programa za zvuk.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — jeftinija SoundSource alternativa za količinu po aplikaciji na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto ljudi traže SoundSource alternativu</h2>
<p>SoundSource od Rogue Amoeba izvrstan je softver. Zaista je profesionalan: ekvilajzeri po aplikaciji, audio efekti i usmjeravanje izlaza koji vam omogućuje slanje jedne aplikacije na slušalice, a druge na zvučnike. Ali ta snaga dolazi s dvije točke trenja. Prvo, cijena — oko 39 dolara. Drugo, instalira upravljački program za snimanje zvuka na razini sustava izvan App Store, s kojim su neki ljudi oprezni na radnom stroju ili jednostavno ne žele upravljati preko macOS ažuriranja.</p>
<p>Za većinu ljudi stvarna potreba je mnogo jednostavnija: smanjite Spotify bez dodirivanja Zoom poziva, isključite glasnu aplikaciju kartice preglednika ili pojačajte tihi videoplayer preko 100%. Ako ste to vi, plaćate profesionalni novac za značajke koje nikada nećete otvoriti.</p>

<h2>Što SoundDial radi — i koliko košta</h2>
<p>SoundDial se fokusira na posao volumena po aplikaciji i obavlja ga čisto. Otvorite traku izbornika i dobit ćete popis uživo svega što proizvodi zvuk, svaki sa svojom kontrolom:</p>
<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — jedan klizač po aplikaciji, prilagođen u stvarnom vremenu.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — trenutno utišajte jednu aplikaciju bez pauziranja bilo čega drugog.</li>
<li><strong>Povećanje glasnoće po aplikaciji</strong> — gurnite tihe aplikacije iznad njihovog normalnog maksimuma kada je video ili poziv previše tih.</li>
<li><strong>Profili volumena</strong> — spremite miks (npr. "Fokus", "Igranje", "Sastanak") i prebacite jednim klikom.</li>
<li><strong>Automatsko spuštanje</strong> — automatski isključi druge aplikacije kada nešto važnije počne svirati.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — prelazite između zvučnika, slušalica i drugih uređaja iz istog izbornika.</li>
</ul>
<p>Cijena je <strong>€14,99, jednokratno plaćanje</strong> — nema pretplate. To je otprilike trećina cijene SoundSource, za značajke glasnoće za kojima većina korisnika zapravo poseže.</p>

<h2>App Store razlika</h2>
<p>Budući da SoundDial isporučuje kroz <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, recenzirao ga je Apple i u sandboxu. Ne postoji DMG za povlačenje, nema proširenja kernela ili drajvera za snimanje zvuka koji treba odobriti, niti zasebnog programa za ažuriranje. Instalirate je kao bilo koju drugu App Store aplikaciju i radi. Kada se macOS ažurira, ne morate se pitati radi li još uvijek audio komponenta niske razine.</p>
<blockquote>macOS još uvijek nema ugrađeni mikser glasnoće po aplikaciji. Windows ima jedan već godinama, ali na Mac glasnoća sustava je sve ili ništa — što je upravo praznina koju ti alati popunjavaju.</blockquote>

<h2>Kako se uspoređuje s besplatnim opcijama</h2>
<p>SoundSource nije vaša jedina alternativa. Postoje besplatni alati i važno je biti pošten u vezi s njima:</p>
<ul>
<li><strong>Background Music</strong> besplatna je aplikacija otvorenog koda za količinu po aplikaciji. Radi za mnoge ljude, ali se može pokvariti na novijim macOS izdanjima, ažuriranja su neredovita i nema pojačanja, nema profila i nema automatskog smanjivanja.</li>
<li><strong>FineTune</strong> je besplatna aplikacija za glasnoću na traci izbornika otvorenog koda — lagana i praktična, ali opet nema značajke profila i saginjanja.</li>
<li><strong>eqMac</strong> je besplatni EQ i pojačivač sustava. To je više alat za izjednačavanje/pojačavanje nego pravi mikser za svaku aplikaciju i nije usredotočen na klizače pojedinačnih aplikacija.</li>
</ul>
<p>Besplatno je legitiman izbor. Kompromis je pouzdanost i značajke: audio alati otvorenog izvornog koda ovise o dobrovoljnom održavanju i mogu zaostajati za promjenama macOS, a nijedan od besplatnih opcija ne uključuje profile plus automatsko prigušivanje na način na koji to radi SoundDial. Ako je vaše postavljanje jednostavno i nemate ništa protiv povremenih kvarova, besplatna aplikacija može biti dovoljna. Ako želite nešto što je održavano, u sandboxu i jednostavno radi, cijena od 14,99 € će vam kupiti upravo to.</p>

<h2>Vodič za brzo odlučivanje</h2>
<ul>
<li><strong>Potrebni su vam EQ za svaku aplikaciju, audio efekti i usmjeravanje jedne aplikacije na drugi izlazni uređaj</strong> → SoundSource vrijedi svoje cijene. Ništa ovdje to u potpunosti ne zamjenjuje.</li>
<li><strong>Uglavnom vam je potrebna glasnoća po aplikaciji, isključivanje zvuka, pojačavanje, profili i prigušivanje — bez upravljačkih programa</strong> → SoundDial od 14,99 € najbolji je odabir.</li>
<li><strong>Želite besplatno i nemate ništa protiv rizika održavanja</strong> → prvo isprobajte Background Music, FineTune ili eqMac.</li>
</ul>

<h2>Postavljanje</h2>
<p>Početak traje otprilike minutu:</p>
<ul>
<li>Instalirajte SoundDial sa Mac App Store — bez vanjskog preuzimanja.</li>
<li>Odobrite dopuštenje za zvuk koje macOS traži pri prvom pokretanju.</li>
<li>Reproducirajte zvuk u nekoliko aplikacija i otvorite ikonu trake izbornika; vidjet ćete svaki sa svojim klizačem.</li>
<li>Povucite za postavljanje razina, dodirnite za isključivanje zvuka ili pritisnite preko 100% za pojačavanje.</li>
<li>Spremite svoje postavke kao profil i uključite automatsko prigušivanje ako želite da se druge aplikacije utišaju tijekom poziva ili medija.</li>
</ul>
<p>To je cijeli tijek rada — nema konfiguracijskih datoteka, nema ponovnog pokretanja, nema proširenja sustava za blagoslov.</p>

<h2>Zaključak</h2>
<p>SoundSource je moćniji alat, ali većina ljudi koji ga traže samo želi volumen po aplikaciji koji se ponaša. SoundDial to pruža za oko trećinu cijene, sigurno se isporučuje kroz App Store i dodaje profile i automatsko prigušivanje na vrhu — bez ijednog drajvera za instaliranje.</p>

<p>Jeste li spremni zasebno kontrolirati glasnoću svake aplikacije? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> za 14,99 €, jednokratno.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "FineTune Alternativa za Mac: Podržani mikser glasnoće po aplikaciji",
    description: "Isprobali ste besplatnu FineTune aplikaciju trake izbornika i želite nešto održavano i sigurno za App Store? Ovdje je najbolja FineTune alternativa za količinu po aplikaciji na Mac.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Ako vam se sviđa FineTune, ali želite nešto što se aktivno održava i instalira iz pouzdanog izvora, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je najbrže pouzdano rješenje. To je Mac App Store mikser glasnoće na traci izbornika po aplikaciji s neovisnom glasnoćom, isključivanjem zvuka po aplikaciji, pojačavanjem glasnoće, spremljenim profilima i automatskim smanjivanjem. Recenzirano od strane Applea i u sandboxu, jednokratno košta 14,99 € bez instaliranja upravljačkih programa.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune alternativa za Mac: Podržani mikser glasnoće po aplikaciji" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto uopće tražiti FineTune alternativu?</h2>

<p>FineTune je dobra ideja: besplatna aplikacija s trakom izbornika otvorenog koda koja vam daje kontrolu glasnoće po aplikaciji na macOS, nešto što Apple još uvijek odbija ugraditi (Windows godinama ima mikser po aplikaciji). Za mnoge ljude obavlja osnovni posao. Ali postoje pravi razlozi zbog kojih korisnici traže nešto drugo.</p>

<ul>
<li><strong>Održavanje je neizvjesno.</strong> Hobi projekti otvorenog koda žive i umiru u slobodnom vremenu jednog održavatelja. Kada macOS pošalje veliko ažuriranje, aplikacije povezane sa zvukom često se prve pokvare, a vi čekate dobrovoljni popravak koji možda nikada neće doći.</li>
<li><strong>Značajka strop.</strong> FineTune pokriva količinu po aplikaciji i malo više. Ako želite povećanje iznad 100%, spremljene profile ili automatsko spuštanje, morate uključiti druge alate.</li>
<li><strong>Povjerenje i ažuriranja.</strong> Instaliranje sirove verzije izvan App Store znači da nema automatskog pregleda, nema jamstava sandboxa i ručna ažuriranja koja morate sami pratiti.</li>
</ul>

<p>Ništa od ovoga ne čini FineTune lošim. To samo znači da ako se svaki dan oslanjate na zvuk po aplikaciji, vjerojatno želite nešto iza čega stoji model podrške.</p>

<h2>Što SoundDial radi drugačije</h2>

<p>SoundDial počinje od iste temeljne ideje, mikser trake izbornika s klizačem za svaku pokrenutu aplikaciju, a zatim ide dalje sa značajkama koje napredni korisnici zapravo traže.</p>

<ul>
<li><strong>Neovisna glasnoća po aplikaciji.</strong> Smanjite Spotify, držite svoj poziv punom glasnoćom, u potpunosti utišajte bučnu aplikaciju kartice preglednika, sve iz jednog izbornika.</li>
<li><strong>Povećanje glasnoće po aplikaciji.</strong> Gurnite tihu aplikaciju iznad njezine normalne gornje granice kada je podcast ili video presvučen prenisko. FineTune to ne radi.</li>
<li><strong>Profili volumena.</strong> Spremite kombinaciju, "fokus", "igre", "sastanci" i promijenite cijelu postavku jednim pritiskom umjesto da pomičete pet klizača.</li>
<li><strong>Automatsko spuštanje.</strong> Automatski utišajte pozadinski zvuk kad počne svirati nešto važnije, tako da glazba utihne kad stigne poziv.</li>
<li><strong>Brzo prebacivanje izlaza.</strong> Skačite između zvučnika, slušalica i drugih izlaza bez zaranjanja u postavke sustava.</li>
</ul>

<p>Jer <a href="https://apps.apple.com/app/id6772792641">SoundDial se isporučuje preko Mac App Store</a>, recenzirao ju je Apple i u sandboxu, čisto se instalira i ažurira putem istog mehanizma kao i svaka druga App Store aplikacija. Nema DMG za povlačenje, nema audio upravljačkog programa ili proširenja sustava, niti sigurnosnog upita koji od vas traži da dopustite komponentu na razini jezgre.</p>

<h2>SoundDial u odnosu na FineTune i druge besplatne alate</h2>

<p>FineTune nije jedina besplatna opcija i pomaže da se pošteno vidi cijeli krajolik.</p>

<ul>
<li><strong>FineTune</strong> — Besplatna, open-source, glasnoća trake izbornika po aplikaciji. Jednostavan i lagan, ali bez pojačanja, bez profila, bez saginjanja, a održavanje ovisi o zajednici.</li>
<li><strong>Background Music</strong> — Besplatan i otvorenog koda, usmjerava i prilagođava zvuk po aplikaciji. Istinski koristan, ali može se pokvariti na novijim macOS izdanjima i nedostaje mu boost, profili i ducking.</li>
<li><strong>eqMac</strong> — Besplatni EQ i pojačivač sustava. Izvrsno ako uglavnom želite ekvilajzer, ali to nije mikser po aplikaciji.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — Pro-grade opcija za oko 39 USD, s EQ-om po aplikaciji i izlaznim usmjeravanjem. Izvrsno, ali treba ga preuzeti i drajver za snimanje zvuka, a košta više nego dvostruko više.</li>
<li><strong>SoundDial</strong> — 14,99 € jednokratno, App Store-sigurno, bez vozača. Dodaje pojačanje, profile i automatsko smanjivanje povrh osnova glasnoće po aplikaciji.</li>
</ul>

<p>Iskren sažetak: ako želite apsolutno najjeftiniju stvar i trebate samo osnovni volumen po aplikaciji, besplatni alati mogu funkcionirati. Ako želite EQ i usmjeravanje po aplikaciji i nemate ništa protiv plaćanja i instaliranja upravljačkog programa, SoundSource je teška kategorija. SoundDial je na dobrom mjestu, sposobniji od besplatnih aplikacija, dramatično jeftiniji od SoundSource i sigurniji za instalaciju jer ga Apple pregledava i sprema u sandbox.</p>

<h2>Prelazak sa FineTune</h2>

<p>Prebacivanje traje nekoliko minuta i nema rituala čišćenja.</p>

<ul>
<li>Instalirajte SoundDial sa Mac App Store. Nema programa za instalaciju, nema odobrenja upravljačkog programa, nema ponovnog pokretanja.</li>
<li>Kliknite ikonu SoundDial na traci izbornika kako biste vidjeli klizač za svaku pokrenutu aplikaciju.</li>
<li>Postavite svoj svakodnevni miks, a zatim ga spremite kao profil kako biste ga se odmah mogli prisjetiti.</li>
<li>Po želji uključite automatsko prigušivanje tako da se pozadinski zvuk ukloni za pozive i upozorenja.</li>
<li>Kad si sretan, odustani od FineTune. Budući da niti jedna aplikacija ne instalira upravljačke programe sustava, ne postoji ništa što bi trebalo deinstalirati.</li>
</ul>

<p>Zadržali ste ono što vam se svidjelo kod FineTune, čisti mikser trake izbornika koji vam Apple nikada nije dao, i dobili ste pojačanje, profile, ducking i dugoročnu podršku koju pruža održavana aplikacija App Store.</p>

<h2>Zaključak</h2>

<p>FineTune dokazuje koncept: volumen po aplikaciji pripada traci izbornika. SoundDial je ono kako taj koncept izgleda sa stvarnim modelom podrške, više značajki i App Store sigurnošću, za jednokratnih 14,99 € umjesto oklade na volontersko održavanje.</p>

<p>Jeste li spremni za mikser po aplikaciji koji se održava? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> i kontrolirajte glasnoću svake aplikacije u nekoliko sekundi.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac Alternativa za stvarni volumen po aplikaciji na Mac",
    description: "Svidjelo vam se pojačanje eqMac-a, ali trebate odgovarajuću glasnoću po aplikaciji, isključivanje zvuka i profile? SoundDial je najbrži popravak Mac App Store — 14,99 €, u sandboxu, bez upravljačkih programa.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Ako ste koristili eqMac za njegov EQ i pojačivač glasnoće, ali stvarno želite neovisnu glasnoću za svaku aplikaciju — plus isključivanje zvuka, pojačanje i spremljene profile — najbrže pouzdano rješenje je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. To je Mac App Store mikser na traci izbornika: postavite razinu po aplikaciji, pojačajte tihe i trenutno mijenjajte profile. €14,99 jednokratno, u sandboxu, bez instaliranja upravljačkih programa.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — eqMac alternativa za pravi volumen po aplikaciji na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac u odnosu na ono što zapravo trebate</h2>

<p>eqMac je solidan besplatni alat, a njegov ekvilizator za cijeli sustav i pojačivač glasnoće istinski su korisni. Ali eqMac je izgrađen oko jednog glavnog EQ-a i jednog glavnog izlaza. Ne daje vam pravi mikser glasnoće po aplikaciji — stvar koju Windows ima godinama, a macOS još uvijek ne isporučuje izvorno.</p>

<p>Dakle, ako je vaš stvarni problem "Spotify je preglasan dok ja razgovaram" ili "ova jedna igrica mi puca u uši, ali sve ostalo je u redu", eqMac nije pravi oblik za posao. Na kraju vozite jedan glavni klizač ili petljate s unutarnjom glasnoćom svake aplikacije. To je praznina koju popunjava SoundDial.</p>

<h2>Ono što SoundDial radi, a eqMac ne</h2>

<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — Glazba na 40%, preglednik na 100%, video poziv na 70%, sve odjednom, sve zapamćeno.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — trenutno utišajte jednu bučnu aplikaciju bez dodirivanja bilo čega drugog.</li>
<li><strong>Pojačanje po aplikaciji</strong> — progurati tihu aplikaciju iznad njezine normalne granice, kao što to čini pojačivač eqMac-a, ali usmjeren na jednu aplikaciju umjesto na cijeli sustav.</li>
<li><strong>Profili volumena</strong> — spremite postavke kao što su "Fokus", "Igranje" ili "Sastanak" i prebacite cijeli miks jednim klikom.</li>
<li><strong>Automatsko spuštanje</strong> — automatski isključuje pozadinski zvuk kada započne nešto važnije, tako da se ne otimate za klizač tijekom poziva.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — preskakanje između zvučnika, slušalica i drugih izlaza s trake izbornika.</li>
</ul>

<p>Preklapanje sa eqMac je u osnovi poticaj. Sve ostalo — mikser, mute, profili, ducking — teritorij je za koji eqMac nikada nije dizajniran.</p>

<h2>Želite li još uvijek EQ?</h2>

<p>Budite iskreni o tome koji problem rješavate. Ako stvarno trebate frekvencijski EQ — rezanje basa, kroćenje oštrih visokih tonova, oblikovanje cijelog tona vašeg sustava — onda eqMac još uvijek ima svoje mjesto, i to besplatno. SoundDial je mikser za glasnoću, a ne ekvilajzer.</p>

<p>Ali većina ljudi poseže za eqMac pojačivačem ne zato što žele oblikovati frekvencije, žele jednu aplikaciju glasniju ili uravnoteženu kombinaciju. Ako ste to vi, namjenski mikser je čišći odgovor. Možete čak pokrenuti oboje: zadržati eqMac za krivulju EQ-a za cijeli sustav i koristiti SoundDial za razine po aplikaciji. Ne svađaju se oko istog posla.</p>

<h2>Kako se uspoređuje s drugim Mac audio alatima</h2>

<p>Budući da ste već u potrazi za alatima, evo iskrenog krajolika:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — pro-grade opcija za oko 39 USD, s EQ-om po aplikaciji i punim izlaznim usmjeravanjem. Snažan, ali zahtijeva izravno preuzimanje i instalira upravljački program za snimanje zvuka. Pretjerano i skuplje ako sve što želite je količina po aplikaciji s profilima.</li>
<li><strong>Background Music</strong> — besplatan i otvorenog koda, ali se može pokvariti na novijim izdanjima macOS i nema pojačanja, nema profila i nema automatskog smanjivanja. Sjajno kada radi, frustrirajuće kada ne radi.</li>
<li><strong>FineTune</strong> — besplatna aplikacija s trakom izbornika otvorenog koda. Vrijedno je pogledati ako je zahtjev od 0 USD težak, iako je lakši u pogledu značajki i sjaja.</li>
<li><strong>eqMac</strong> — besplatni EQ plus booster, ali bez pravog miksera po aplikaciji, kao što je opisano gore.</li>
</ul>

<p>SoundDial je na dobroj točki: fokusiraniji je i jeftiniji od SoundSource, sposobniji i pouzdaniji od besplatnih opcija, i radi posao po aplikaciji koji eqMac ne radi.</p>

<h2>Zašto je Mac App Store bitan ovdje</h2>

<p>Neki od ovih alata zahtijevaju izravno preuzimanje i upravljački program na razini jezgre ili snimanje zvuka. Oni rade, ali su one vrste stvari koje mogu zaskočiti macOS ažuriranje ili se spotaknuti na zaključani radni Mac.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> isporučuje se putem Mac App Store umjesto toga. To znači da ga je pregledao Apple i u sandboxu, instalira se čisto bez DMG za povlačenje i nema audio upravljačkih programa ili proširenja sustava za odobravanje. Ažuriranja stižu preko App Store kao i svaka druga aplikacija, a deinstaliranje je normalno brisanje. Za uslužni program na traci izbornika koji se dotiče vašeg zvuka, taj put manjeg trenja i manjeg rizika puno vrijedi.</p>

<h2>Brzo postavljanje</h2>

<ul>
<li>Instalirajte SoundDial sa Mac App Store — bez ponovnog pokretanja, bez upita za upravljački program.</li>
<li>Otvorite ikonu trake izbornika; svaka aplikacija koja trenutno proizvodi zvuk prikazuje se sa svojim klizačem.</li>
<li>Postavite razine, utišajte ono što vam ne treba i pojačajte sve što je pretiho.</li>
<li>Spremite dogovor kao profil, a zatim stvorite više za igranje, pozive ili fokus.</li>
<li>Uključite automatsko smanjivanje kako bi se pozadinski zvuk automatski uklonio.</li>
</ul>

<p>To je cijela petlja. U roku od nekoliko minuta imate kontrolu po aplikaciji eqMac-ov pojačivač koji je samo nagoviješten.</p>

<p><strong>Jeste li spremni za pravi volumen po aplikaciji na vašem Mac?</strong> <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> — 14,99 € jednokratno, u sandboxu, bez upravljačkih programa, i radi točno ono što bi trebao mikser s trakom izbornika.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "Najjeftiniji mikser dobre glasnoće za Mac u 2026",
    description: "Tražite najjeftiniji dobar mikser glasnoće po aplikaciji za Mac u 2026.? Usporedite SoundDial, SoundSource, Background Music, FineTune i eqMac po cijeni, sigurnosti i značajkama.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Mikser glasnoće s najboljom vrijednošću po aplikaciji za Mac u 2026. je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikacija na traci izbornika na Mac App Store za jednokratnih 14,99 €. Svakoj aplikaciji daje vlastiti klizač glasnoće, plus isključivanje zvuka, pojačavanje, profile i automatsko smanjivanje — bez upravljačkih programa, bez pretplate i bez rizičnih preuzimanja. To je najjeftinija plaćena opcija koja zapravo radi pouzdano.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — najjeftiniji mikser dobre glasnoće za Mac u 2026." style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto "najjeftiniji" treba definiciju</h2>
<p>Postoje besplatni alati za količinu za Mac, pa ako je jedini cilj potrošiti nula, imate mogućnosti. Ali besplatno vas obično košta negdje drugdje: krhkost na novim verzijama macOS, značajke koje nedostaju kao što su pojačanje ili profili ili proces instalacije koji uključuje upravljački program za snimanje zvuka kojem morate vjerovati. "Najjeftinije dobro" znači najnižu cijenu koja još uvijek daje stabilan mikser s punim značajkama koji ćete nastaviti koristiti. To je leća koju ćemo ovdje koristiti.</p>

<h2>Prvo, stvar koju macOS ne radi</h2>
<p>Windows već godinama ima mikser glasnoće za svaku aplikaciju — desnom tipkom miša kliknite ikonu zvučnika i postavite svaku aplikaciju zasebno. macOS još uvijek nema ništa ekvivalentno ugrađeno. Dobivate jednu glavnu glasnoću i bilo koji unutarnji klizač koji aplikacija isporuči (Glazba, neki preglednici). Ne postoji način na razini cijelog sustava da Slack učinite tišim od Spotify ili da pojačate tihi video poziv iznad svega ostalog. Svaka opcija u nastavku postoji kako bi popunila tu prazninu.</p>

<h2>Natjecatelji, pošteno procijenjeni</h2>

<h2>SoundDial — 14,99 €, jednokratno</h2>
<p>SoundDial živi u vašoj traci izbornika i daje svakoj pokrenutoj aplikaciji neovisni klizač za glasnoću. Osim osnova, dodaje značajke za kojima ljudi zapravo teže:</p>
<ul>
<li><strong>Pojačanje po aplikaciji</strong> — gurnite pretihu aplikaciju iznad 100% umjesto da se naprežete da je čujete.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — utišajte jednu aplikaciju bez dodirivanja ostalih.</li>
<li><strong>Profili volumena</strong> — spremite miks "poslovni poziv" ili "filmska večer" i odmah ga pozovite.</li>
<li><strong>Automatsko spuštanje</strong> — automatski isključuje pozadinski zvuk kada se reproducira nešto važnije.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — skakanje između zvučnika, slušalica i drugih uređaja iz istog izbornika.</li>
</ul>
<p>Budući da se nalazi na Mac App Store, u sandboxu je, Apple ga je pregledao i čisto se instalira — nema DMG, nema proširenja kernela, nema audio drajvera koji treba odobriti. Vi plaćate <a href="https://apps.apple.com/app/id6772792641">14,99 € jednom</a> i posjedovati ga. Za većinu ljudi ovo je slatka točka: dovoljno jeftino da bude jednostavno da, dovoljno cjelovito da ga nećete prerasti.</p>

<h2>SoundSource — ~39 USD, profesionalna opcija</h2>
<p>Rogue Amoeba SoundSource je zlatni standard za napredne korisnike. Izvršava glasnoću i utišava po aplikaciji kao SoundDial, ali ide dalje s ekvilajzerima po aplikaciji i punim izlaznim usmjeravanjem (pošalji jednu aplikaciju na slušalice, drugu na zvučnike). Zaista je izvrstan — ali košta otprilike 39 USD i instalira se izvan App Store s komponentom za snimanje zvuka za koju morate dati dopuštenje. Ako trebate EQ po aplikaciji ili složeno usmjeravanje, to je vrijedno novca. Ako samo želite čist, jeftin mikser, plaćate za mogućnosti koje možda nikada nećete dotaknuti.</p>

<h2>Background Music — besplatno, otvorenog koda</h2>
<p>Background Music je dobro poznata besplatna aplikacija otvorenog koda koja nudi glasnoću po aplikaciji i automatsku pauzu. Kvaka: zakačio se duboko u Core Audio putem virtualnog upravljačkog programa i ima dugu povijest kvarova na novim macOS izdanjima, ponekad su potrebni ručni popravci ili ponovna instalacija nakon ažuriranja. Također mu nedostaje pojačanje, spremljeni profili i automatsko smanjivanje. Izvrstan za majstore koji ne brinu o održavanju; frustrirajuće ako samo želite da radi.</p>

<h2>FineTune — besplatno, traka izbornika</h2>
<p>FineTune je besplatna aplikacija za glasnoću trake izbornika otvorenog koda. Lagan je i ugodan, a za jednostavnu prilagodbu po aplikaciji može biti dovoljan. No budući da je mali besplatni projekt, ne odgovara dubini značajki — nema profila, nema automatskog smanjivanja i rukovanje povećanjem/izlazom je ograničeno. Bez troškova, manje garancija na dugovječnost i podršku.</p>

<h2>eqMac — besplatno, EQ + booster</h2>
<p>eqMac je besplatni ekvilizator za cijeli sustav s pojačivačem glasnoće. Radi se više o oblikovanju tona i glasnoće u cijelom Mac nego o miješanju pojedinačnih aplikacija, tako da je to drugačiji alat za drugačiji posao. Ako konkretno želite kontrolu po aplikaciji, eqMac zapravo nije odgovor, iako je dobar besplatni EQ.</p>

<h2>Cijena nasuprot vrijednosti: poštena tablica</h2>
<ul>
<li><strong>Uistinu besplatno, ali s kompromisima:</strong> Background Music (lomljivo, temeljeno na drajveru), FineTune (tanke karakteristike), eqMac (EQ, nije mikser).</li>
<li><strong>Najjeftinija kompletna plaćena aplikacija:</strong> SoundDial po 14,99 € — pojačanje, profili, spuštanje, App Store sigurnost.</li>
<li><strong>Premium/pro:</strong> SoundSource pri ~39 USD — EQ i usmjeravanje, instalacija izvan App-Storea.</li>
</ul>
<p>Drugim riječima: SoundDial košta otprilike trećinu SoundSource dok pokriva značajke koje 90% ljudi zapravo želi. I za razliku od besplatnih opcija, neće se tiho pokvariti nakon ažuriranja macOS, jer se ne oslanja na osjetljivi audio upravljački program na razini sustava.</p>

<h2>Koje odabrati?</h2>
<p>Ako ste profesionalac koji treba EQ po aplikaciji i usmjeravanje aplikacija na različite izlaze, kupite SoundSource — zaslužuje svoju cijenu. Ako volite open-source i ne smeta vam povremeni kvar, isprobajte Background Music ili FineTune besplatno. Ali ako želite najjeftiniju opciju koja jednostavno radi — neovisnu glasnoću, pojačanje, isključivanje zvuka, profile koji se mogu spremiti i automatsko smanjivanje zvuka, sigurno instalirano sa App Store — SoundDial je očiti pobjednik u vrijednosti u 2026. godini.</p>

<blockquote>Najbolji mikser nije onaj s najviše mogućnosti ili najnižom cijenom — to je onaj koji jednom postavite i zaboravite. Za 14,99 €, SoundDial čini to lakim pozivom.</blockquote>

<p>Jeste li spremni svakoj aplikaciji dati vlastiti volumen? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> za jednokratnih 14,99 € — bez pretplate, bez vozača, bez rizika.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Windows Mikser glasnoće za Mac: Nabavite kontrolu glasnoće po aplikaciji",
    description: "Nedostaje vam Windows mikser za glasnoću na vašem Mac? macOS nema ugrađenu kontrolu glasnoće po aplikaciji. Evo najbržeg načina da ga nabavite: SoundDial, mikser s trakom izbornika od 14,99 €.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>macOS nema ugrađeni mikser glasnoće kao Windows, tako da ne možete postaviti glasnoću po aplikaciji iz postavki sustava. Najbrže i pouzdano rješenje je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, aplikacija s trakom izbornika od Mac App Store od 14,99 €. Svakoj aplikaciji daje vlastiti klizač glasnoće, isključivanje zvuka i pojačavanje — nema upravljačkih programa, nema DMG, nema rizičnih instalacija.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Windows Mikser glasnoće za Mac: Nabavite kontrolu glasnoće po aplikaciji" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto Windows Volume Mixer nema Mac ekvivalent</h2>

<p>Ako ste se prebacili sa Windows, jedna od prvih stvari koje će vam nedostajati je Volume Mixer: desnom tipkom miša kliknite ikonu zvučnika i svaka pokrenuta aplikacija dobiva svoj klizač. Stišajte Chrome, neka Discord bude glasno, utišajte Spotify — sve na jednom mjestu.</p>

<p>macOS ovo jednostavno ne šalje. Appleova kontrola glasnoće jedan je klizač za cijeli sustav. Koju god razinu postavite odnosi se na sve odjednom. U postavkama sustava nema skrivene opcije po aplikaciji, nema naredbe Terminal, nema prekidača pristupačnosti. To je pravi jaz, i tako je već godinama.</p>

<p>Razlog je arhitektonski: aplikacije usmjeravaju zvuk kroz Core Audio na vaš izlazni uređaj, a OS ne izlaže mikser okrenut prema korisniku za pojedinačne streamove. Da biste ponovno stvorili Windows iskustvo, potrebna vam je aplikacija treće strane koja se nalazi na tom audio putu i daje vam kontrole koje je Apple izostavio.</p>

<h2>Najbliže podudaranje: SoundDial</h2>

<p>SoundDial je mikser glasnoće trake izbornika po aplikaciji napravljen posebno za ovo. Kliknite njegovu ikonu i dobit ćete čist popis svega što reproducira zvuk, svaki sa svojim klizačem. To je najizravniji "Windows Volume Mixer za Mac" koji možete instalirati, i radi nekoliko stvari koje Windows mikser nikada nije mogao:</p>

<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — osnovna značajka. Postavite Chrome na 40%, Zoom na 100%, glazbu na 20%.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — utišajte jednu aplikaciju bez dodirivanja ostalih.</li>
<li><strong>Povećanje glasnoće po aplikaciji</strong> — pritisnite tihu aplikaciju <em>iznad</em> 100% kada je vlastiti zvuk prenizak.</li>
<li><strong>Profili volumena</strong> — spremite miks (npr. "poslovni poziv" ili "igranje") i odmah ga pozovite umjesto ponovnog povlačenja klizača.</li>
<li><strong>Automatsko spuštanje</strong> — automatski smanji pozadinski zvuk kada započne nešto važnije, poput poziva.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — prelazite između zvučnika, slušalica i drugih uređaja iz istog izbornika.</li>
</ul>

<p>Budući da je na <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, recenzirao ga je Apple i u sandboxu. Čisto se instalira jednim klikom — nema DMG za povlačenje, nema audio upravljačkog programa ili proširenja sustava koje treba odobriti, nema sigurnosnih upita. Za 14,99 € jednokratno (bez pretplate), to je najjednostavniji način za smanjivanje praznine.</p>

<h2>Kako postaviti glasnoću po aplikaciji na vašem Mac</h2>

<ol>
<li>Instalirajte SoundDial sa Mac App Store.</li>
<li>Odobrite jednokratno audiodopuštenje koje traži pri prvom pokretanju.</li>
<li>Kliknite ikonu SoundDial na traci izbornika.</li>
<li>Povucite klizač pored bilo koje aplikacije da biste postavili njenu glasnoću ili pritisnite isključivanje/pojačavanje.</li>
<li>Po želji, spremite trenutni miks kao profil kako biste ga kasnije mogli vratiti.</li>
</ol>

<p>To je cijeli tijek rada. Ponaša se kao Windows mikser koji već poznajete, samo iz trake izbornika umjesto desnom tipkom miša na programskoj traci.</p>

<h2>Kako se SoundDial uspoređuje s drugim opcijama</h2>

<p>SoundDial nije jedini alat u ovom prostoru, pa evo iskrenog pogleda na alternative.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — oko 39 dolara, i istinski pro-grade: EQ po aplikaciji, usmjeravanje izlaza po aplikaciji, efekti. Ali zahtijeva izravno preuzimanje plus upravljački program za snimanje zvuka, a pretjerano je (i skuplje) ako samo želite glasnoću po aplikaciji. Odaberite ga ako trebate EQ i usmjeravanje; odaberite SoundDial ako želite mikser bez složenosti ili drajvera.</li>
<li><strong>Background Music</strong> — besplatno i otvorenog koda, što je sjajno. Kvaka: može se pokvariti na novijim verzijama macOS, a nedostaje mu boost, spremljeni profili i automatsko smanjivanje. U redu ako znate rješavati probleme s audio upravljačkim programima otvorenog koda; manje idealno ako želite nešto što jednostavno funkcionira.</li>
<li><strong>FineTune</strong> — besplatna aplikacija s trakom izbornika otvorenog koda. Lagan i vrijedan pažnje ako je proračun prioritet, ali besplatno mijenjate poliranje, profile i App Store sigurnost.</li>
<li><strong>eqMac</strong> — besplatni EQ i pojačivač za cijeli sustav. To je prvo ekvilizator, a ne mikser po aplikaciji, tako da rješava drugačiji problem.</li>
</ul>

<p>Kompromis je jednostavan. Besplatni alati ne koštaju ništa, ali mogu biti krhki ili tanki. SoundSource je moćan, ali skup i temelji se na upravljačkim programima. SoundDial je na najboljem mjestu: jednokratna cijena od 14,99 €, App Store sigurnost i sandboxing, te profili + automatsko smanjivanje koje besplatne opcije preskaču.</p>

<blockquote>Ako je sve što želite Windows Volume Mixer iskustvo — klizači po aplikaciji, isključivanje zvuka i pojačanje, instalirani sigurno u nekoliko sekundi — SoundDial je najizravniji spoj.</blockquote>

<h2>Zaključak</h2>

<p>macOS vam neće dati Volume Mixer, i vjerojatno nikada neće. Ali ne morate živjeti s jednim klizačem za cijeli sustav. Namjenski mikser trake izbornika vraća kontrolu po aplikaciji koju ste imali na Windows i dodaje pojačanje, profile i automatsko smanjivanje.</p>

<p>Jeste li spremni dobiti količinu po aplikaciji na jednostavan način? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> za 14,99 € — jednokratno, u zaštićenom okruženju i instalira se za nekoliko sekundi.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Postavite glasnoću aplikacije kao što to radi Windows — na vašem Mac",
    description: "Windows ima mikser glasnoće po aplikaciji, ali macOS nema. Evo kako postaviti neovisnu glasnoću za svaku aplikaciju na vašem Mac — brzo, sigurno i bez upravljačkih programa.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>macOS nema ugrađeni mikser glasnoće po aplikaciji poput onog u Windows, tako da je najbrže pouzdano rješenje <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store aplikacija na traci izbornika koja svakoj aplikaciji daje vlastiti klizač glasnoće, isključivanje zvuka po aplikaciji i pojačanje glasnoće. Zatvoren je u sandboxu, recenzirao ga je Apple, instalira se bez upravljačkih programa i jednokratno košta 14,99 eura.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Postavite glasnoću aplikacije kao što to čini Windows — na vašem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto Windows to može, a macOS ne može</h2>
<p>Ako ste koristili Windows, znate vježbu: desnom tipkom miša kliknite ikonu zvučnika, otvorite Volume Mixer i povucite zasebni klizač za Chrome, Spotify, Discord i sve ostalo što stvara buku. Jednostavno je i jednostavno radi.</p>
<p>macOS nikad nije isporučio ekvivalent. Appleove audio kontrole su globalne — jedna glavna glasnoća za cijeli sustav. Aplikaciju možete utišati tako da utišate izvor unutar te aplikacije (ako uopće ima kontrolu), ali ne postoji jedinstveno mjesto za reći "neka moja glazba bude na 40%, dok moj sastanak ostane na 100%." Ta praznina je upravo razlog zašto postoje mikseri trećih strana.</p>

<h2>Najbrže rješenje: mikser trake izbornika</h2>
<p>Najbliža iskustvu Windows je aplikacija na traci izbornika koja navodi vaše pokrenute audio aplikacije i svakoj daje klizač. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> radi upravo ovo. Kliknite njegovu ikonu na traci izbornika i dobit ćete:</p>
<ul>
<li><strong>Neovisna glasnoća za svaku aplikaciju</strong> — povucite Spotify prema dolje bez dodirivanja vašeg poziva.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — trenutno utišajte jednu bučnu aplikaciju, a ostale ostavite da rade.</li>
<li><strong>Povećanje glasnoće po aplikaciji</strong> — pritisnite pretihu aplikaciju <em>iznad</em> 100% kada je vlastiti max još uvijek premekan.</li>
<li><strong>Profili volumena</strong> — spremite miks "Work" ili "Gaming" i pozovite ga jednim klikom.</li>
<li><strong>Automatsko spuštanje</strong> — automatski smanji pozadinski zvuk kada započne nešto važnije.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — preskakanje između zvučnika, slušalica i drugih izlaza iz istog izbornika.</li>
</ul>
<p>Budući da je na Mac App Store, u sandboxu je i recenzirao ga je Apple, instalira se čisto i nema DMG za povlačenje, nema proširenja kernela niti audio drajvera koji treba odobriti u postavkama sustava. Taj zadnji dio je važniji nego što zvuči — alati temeljeni na upravljačkim programima su oni koji imaju tendenciju kvara nakon ažuriranja macOS.</p>

<h2>Kako to postaviti (oko dvije minute)</h2>
<ul>
<li><strong>1.</strong> Instalirajte SoundDial sa Mac App Store i pokrenite ga.</li>
<li><strong>2.</strong> Dodijelite dopuštenje za zvuk koje macOS traži — to je ono što aplikaciji omogućuje da vidi streamove po aplikaciji.</li>
<li><strong>3.</strong> Kliknite ikonu SoundDial na traci izbornika. Svaka aplikacija koja trenutno reproducira zvuk prikazuje se sa svojim klizačem.</li>
<li><strong>4.</strong> Povucite klizač bilo koje aplikacije kako biste postavili njezinu razinu ili pritisnite gumb za isključivanje zvuka. Pojačajte preko 100% kada je aplikacija pretiha.</li>
<li><strong>5.</strong> (Izborno) Spremite svoj trenutni miks kao profil kako biste ga kasnije mogli vratiti i uključite automatsko smanjivanje zvuka ako želite da se pozadinski zvuk automatski isključi.</li>
</ul>
<p>To je cijeli tijek rada. Ponaša se kao Windows Volume Mixer koji već poznajete, bez problema s postavljanjem.</p>

<h2>Što je s besplatnim i profesionalnim alternativama?</h2>
<p>Postoje i drugi načini za dobivanje volumena po aplikaciji na Mac. Vrijedi ih znati kako biste mogli pošteno birati.</p>
<blockquote>Besplatni alati trguju novcem za pouzdanost i značajke; profesionalni alati razmjena novca i podešavanje za dubinu koja vam možda neće trebati.</blockquote>
<p><strong>Background Music</strong> besplatan je i otvorenog izvornog koda te pruža količinu po aplikaciji. Kvaka: zakačio se duboko u audio sustav i ima povijest kvarova na novijim macOS izdanjima, a nedostaje mu pojačanje, profili i automatsko smanjivanje. Ako radi na vašim postavkama, odlično — ali to je kockanje s nadogradnjom.</p>
<p><strong>FineTune</strong> je besplatna aplikacija s trakom izbornika otvorenog koda u istom duhu kao SoundDial. To je dobra polazna točka ako je proračun jedina briga, iako je to projekt zajednice bez profila i uglađenosti.</p>
<p><strong>eqMac</strong> je besplatni EQ i pojačivač za cijeli sustav. Izvrstan je za oblikovanje cjelokupnog zvuka, ali nije pravi mikser za svaku aplikaciju — podešavate cijeli izlaz, a ne pojedinačne aplikacije.</p>
<p><strong>SoundSource</strong> by Rogue Amoeba (oko 39 USD) opcija je profesionalne kvalitete: EQ po aplikaciji, usmjeravanje izlaza po aplikaciji i ozbiljne značajke audio inženjera. Izvrstan je — ali zahtijeva izravno preuzimanje i instaliranje komponente za snimanje zvuka, a košta više nego duplo od SoundDial. Ako želite usmjeravanje na studijskoj razini i EQ, to je izbor. Ako samo želite mikser u stilu Windows, to je pretjerano.</p>

<h2>Koju biste trebali uzeti?</h2>
<p>Ako je vaš cilj "učiniti da moj Mac radi kao Windows Volume Mixer" bez preuzimanja, upravljačkih programa ili rizika, SoundDial je najčišći odgovor. Dobivate glasnoću po aplikaciji, isključivanje zvuka, pojačavanje, profile i automatsko smanjivanje zvuka, sve sigurno za App Store, za jednokratnih 14,99 € — bez pretplate. Odaberite SoundSource umjesto toga samo ako izričito trebate EQ i usmjeravanje izlaza po aplikaciji i isprobajte besplatne opcije ako vam odgovara rješavanje problema u macOS ažuriranjima.</p>

<p><strong>Jeste li spremni svakoj aplikaciji dati vlastiti volumen?</strong> <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> i postavite svoj prvi miks za otprilike dvije minute.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Kako učiniti svoj Mac glasnijim za slušanje s oštećenim sluhom",
    description: "Mučite se čuti svoj Mac čak i pri najvećoj glasnoći? Naučite kako pojačati i razjasniti zvuk po aplikaciji za osobe s oštećenim sluhom, uključujući SoundDial i ugrađene savjete.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Ako vaš Mac nije dovoljno glasan čak ni pri najvećoj glasnoći, najbrže pouzdano rješenje je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store mikser trake izbornika koji vam omogućuje da pojačate bilo koju pojedinačnu aplikaciju preko 100% i utišate sve ostalo. To znači glasniji, jasniji govor iz FaceTime, video ili film playera bez pokretanja cijelog sustava. Cijena je 14,99 €, jednokratno.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Kako učiniti svoj Mac glasnijim za osobe s oštećenim sluhom" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto maksimiziranje klizača glasnoće još uvijek nije dovoljno</h2>
<p>Za slušatelje s oštećenim sluhom, macOS klizač glasnoće ima dva frustrirajuća ograničenja. Prvo, ograničava se na 100% onoga što sama aplikacija daje. Ako je podcast, video ili poziv snimljen tiho, "puna glasnoća" je još uvijek preslaba. Drugo, macOS nema ugrađeni mikser glasnoće po aplikaciji. Windows ima jednu već godinama, ali na Mac svaka aplikacija dijeli jednu glavnu razinu. Dakle, kada sve pojačate da čujete tihi glas, pozadinska glazba i zvukovi obavijesti također postaju neugodno glasni.</p>
<p>Ono što vam zapravo treba je sposobnost izrade <em>jedna</em> aplikacija glasnija od ostalih, gurnite je iznad normalne gornje granice i smanjite konkurentske zvukove tako da se govor ističe. Upravo tu prazninu popunjavaju ovi alati.</p>

<h2>Najprije upotrijebite besplatne postavke pristupačnosti macOS</h2>
<p>Prije dodavanja bilo koje aplikacije, vrijedi postaviti ono što macOS već nudi. Oni pomažu jasnoći, iako ne dodaju sirovu glasnoću:</p>
<ul>
<li><strong>Mono audio:</strong> Postavke sustava &rarr; Pristupačnost &rarr; Audio, uključite "Reprodukcija stereo zvuka kao mono." Ako vam je sluh jači na jednom uhu, ovo šalje puni signal na oba, tako da ne gubite pola dijaloga.</li>
<li><strong>Usklađivanje stanja:</strong> U postavkama sustava &rarr; Zvuk, povucite lijevo/desno ravnotežu prema svom jačem uhu.</li>
<li><strong>Smanjite pozadinske zvukove:</strong> Smanjite glazbu i ambijent u aplikacijama koje to dopuštaju, tako da se glasovi ne bore sa zvučnim zapisom.</li>
<li><strong>Smještaj slušalica:</strong> Ako koristite AirPods ili Beats, Postavke sustava &rarr; Pristupačnost &rarr; Audio &rarr; Prilagodba slušalica može pojačati tihe zvukove i prilagoditi se govoru.</li>
</ul>
<p>Oni su uistinu korisni i ne koštaju ništa. Ali nitko od njih ne pravi niti jednu tihu aplikaciju <em>glasnije od 100%</em>, a to je obično pravi problem.</p>

<h2>Kako poboljšati jednu aplikaciju preko 100% uz SoundDial</h2>
<p>SoundDial živi u vašoj traci izbornika i prikazuje klizač za svaku aplikaciju koja trenutno reproducira zvuk. Evo tijeka rada koji najviše pomaže osobama s oštećenim sluhom:</p>
<ul>
<li><strong>Poboljšajte aplikaciju koju slušate.</strong> Povucite njegov klizač iznad 100% kako biste pojačali tihi videopoziv ili podcast izvan onoga što aplikacija dopušta sama.</li>
<li><strong>Isključite ili smanjite sve ostalo.</strong> Povucite prema dolje glazbu, kartice preglednika ili zvukove obavijesti tako da se ništa ne natječe s glasom koji pokušavate pratiti.</li>
<li><strong>Uključite automatsko smanjivanje.</strong> Kada počnete razgovarati tijekom poziva, SoundDial automatski utišava drugi zvuk kako bi osoba s kojom razgovarate jasno čula, a zatim ga ponovo vraća.</li>
<li><strong>Spremite profil volumena.</strong> Napravite profil za "video pozive" gdje je vaša aplikacija za konferencije pojačana, a sve ostalo tiho, a zatim se odmah prebacite na njega umjesto da se svaki put ponovno prilagođavate.</li>
<li><strong>Brzo prebacite izlaz.</strong> Prelazite između zvučnika, slušalica ili uređaja povezanog sa slušnim aparatom iz istog izbornika, bez kopanja po postavkama sustava.</li>
</ul>
<p>Značajka pojačanja je ovdje ključna. Budući da podiže izlaz aplikacije iznad izvornog maksimuma, tiha snimka postaje nešto što zapravo možete čuti, dok ostatak vašeg sustava ostaje na ugodnoj razini.</p>

<h2>Kratka riječ o distorziji</h2>
<p>Svako softversko pojačanje pojačava sve što je u signalu, tako da guranje daleko iznad 100% na ionako glasnom zvuku može dovesti do izrezivanja. U praksi, pojačanje <em>tiho</em> sadržaj do ugodne, razumljive razine zvuči čisto. Počnite skromno, podižite dok govor ne postane jasan i odstupite ako počne zvučati grubo. Zaštita vašeg preostalog sluha je važna, stoga ciljajte na jasnoću, a ne na maksimalnu glasnoću.</p>

<h2>Kako se SoundDial uspoređuje s alternativama</h2>
<p>Imate nekoliko mogućnosti, a iskrenost vam pomaže da odaberete pravu:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 USD):</strong> Istinski profesionalni, s EQ-om po aplikaciji i usmjeravanjem izlaza. Ako želite isklesati frekvencije za gubitak sluha, to je moćno. Ali košta više nego dvostruko više, zahtijeva izravno preuzimanje i instalira upravljački program za snimanje zvuka. To je više postavljanja i pristupa sustavu nego što mnogi ljudi žele.</li>
<li><strong>Background Music (besplatno, otvorenog koda):</strong> Nudi besplatno glasnoću po aplikaciji, ali nema pojačanje, profile i automatsko smanjivanje zvuka, a može se pokvariti na novijim verzijama macOS jer se zakači duboko u audio sustav.</li>
<li><strong>FineTune (besplatno, otvorenog koda):</strong> Lagana aplikacija za glasnoću trake izbornika. Dobar za osnove, ali bez pojačanja, profila i saginjanja na koje se oslanjaju slušatelji s oštećenim sluhom.</li>
<li><strong>eqMac (besplatno):</strong> Ekvilajzer s pojačivačem. Korisno za oblikovanje zvuka, ali je izgrađeno oko EQ-a, a ne čistog miksanja i profila po aplikaciji.</li>
</ul>
<p>Gdje <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ističe se ravnoteža cijene, sigurnosti i specifičnih značajki koje su ovdje važne. Budući da je na Mac App Store, recenzirao ga je Apple i u sandboxu, instalira se čisto bez DMG i ne trebaju audio upravljačke programe ili sistemska proširenja. Dobivate pojačanje po aplikaciji, isključivanje zvuka, profile glasnoće i automatsko prigušivanje u jednoj jednokratnoj kupnji od 14,99 €, bez ikakvog kopanja po macOS audio snopu.</p>

<h2>Zaključak</h2>
<p>Najprije postavite besplatne opcije pristupačnosti macOS, vrijedi ih imati. Ali ako je pravi problem u tome što je jedna aplikacija jednostavno pretiha, potreban vam je alat koji može jednu aplikaciju potisnuti preko 100% i utišati ostale. To je cijela poanta pojačanja po aplikaciji, a macOS to ne radi sam.</p>

<p>Jeste li spremni čuti svoj Mac? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> za 14,99 € poboljšajte aplikaciju koja vam je potrebna i dopustite automatskom prigušivanju i profilima da govor bude jasan.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Kako pojačati tihu aplikaciju na Mac (prošla maksimalna glasnoća)",
    description: "Jedna aplikacija pretiha čak i na 100%? Pojačajte samo tu aplikaciju iznad njenog maksimuma na Mac sa SoundDial, mikserom glasnoće za svaku aplikaciju. Evo najbržeg rješenja i alternativa.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Ako je jedna aplikacija pretiha čak i pri maksimalnoj glasnoći, najbrže pouzdano rješenje je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mikser glasnoće trake izbornika po aplikaciji za macOS. Svakoj aplikaciji daje vlastiti klizač plus glasnoću <strong>pojačati</strong> koji gura jednu aplikaciju preko 100%, tako da tihi video poziv ili kartica preglednika postaju glasniji bez dodirivanja glasnoće vašeg sustava. To je jednokratna aplikacija od 14,99 € na Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Kako pojačati tihu aplikaciju na Mac (prošla maksimalna glasnoća)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto je jedna aplikacija tiha čak i na 100%</h2>
<p>macOS ima samo jedan glavni volumen. Kad ga podignete, sve skupa postaje glasnije. Ali svaka aplikacija također emitira zvuk na vlastitoj unutarnjoj razini, a ta razina jako varira. Tiho savladani YouTube isječak, Zoom pozivatelj s lošim mikrofonom, igra s niskim miksanjem dijaloga ili kartica preglednika s mekim streamom mogu se nalaziti daleko ispod svega ostalog, čak i s vašim Mac punom snagom.</p>
<p>Pravi problem: macOS ima <strong>nema ugrađenog miksera glasnoće po aplikaciji</strong>. Windows ima jedan već godinama (Mikser glasnoće, desnom tipkom miša kliknite ikonu zvučnika). Na Mac ne postoji izvorni način za uključivanje jedne aplikacije dok ostale ostavite same, i definitivno nema načina za pojačavanje jedne aplikacije <em>iznad</em> njegov normalni maksimum. To je praznina koju pogađate.</p>

<h2>Najbrže rješenje: pojačajte samo tu jednu aplikaciju</h2>
<p>Mikser po aplikaciji to rješava tako što se umeće između vaših aplikacija i vašeg izlaza, tako da može neovisno povisiti ili sniziti svaki tok i pojačati jedan iznad 100%. sa <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, tok je kratak:</p>
<ul>
<li>Instalirajte sa Mac App Store i otvorite ga. Živi u vašoj traci izbornika, a ne u plutajućem prozoru.</li>
<li>Kliknite ikonu trake izbornika da vidite klizač za svaku aplikaciju koja trenutno reproducira zvuk.</li>
<li>Pronađite tihu aplikaciju i povucite njen klizač preko 100% da biste primijenili pojačanje. Pojačava samo tu aplikaciju.</li>
<li>Ostavite sve ostalo gdje jeste. Glasnoća vašeg sustava i druge aplikacije ostaju netaknute.</li>
</ul>
<p>Budući da je pojačanje po aplikaciji, možete podići lagani videopoziv na ugodnu razinu, a pritom spriječiti da glazba ili obavijesti paraju uši. To je ključna stvar koju ugrađene macOS kontrole jednostavno ne mogu.</p>

<h2>Napomena o pojačanju i rezanju</h2>
<p>Pojačavanje je istinski korisno, ali je pojačanje, a ne magija. Ako je izvorni zvuk aplikacije vrlo tih ili već izobličen, snažno pokretanje može dovesti do izrezivanja ili učiniti pozadinsko šištanje očiglednijim. U praksi, umjereno pojačanje čisto popravlja veliku većinu situacija "ovaj poziv je pretih". Gurajte ga dok aplikacija ne postane udobna, umjesto da je tresnete do stropa, i zvuk će ostati čist.</p>

<h2>Osim pojačanja: što još pomaže</h2>
<p>Nakon što imate kontrolu po aplikaciji, nekoliko značajki zauvijek nestaje problem tihe aplikacije:</p>
<ul>
<li><strong>Profili volumena</strong> — spremite postavku (npr. "pojačajte Zoom, smanjite Spotify, utišajte Slack") i pozovite je jednim klikom umjesto ponovnog povlačenja klizača svaki sastanak.</li>
<li><strong>Automatsko spuštanje</strong> — automatski isključi druge aplikacije kada se odabrana aplikacija pokrene, tako da se pojačani poziv jasno čuje preko pozadinskog zvuka.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — utišajte jednu bučnu aplikaciju bez pauziranja bilo čega drugog.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — prelazite između zvučnika, slušalica ili vanjskog sučelja iz istog izbornika.</li>
</ul>

<h2>Što je s besplatnim i profesionalnim alternativama?</h2>
<p>Imate mogućnosti, a poštenje je ovdje važno, tako da je ovo pravi krajolik.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) je pro-grade izbor za oko 39 USD. Omogućuje glasnoću po aplikaciji plus EQ po aplikaciji i potpuno usmjeravanje izlaza, više snage nego što većina ljudi treba. Kompromisi: košta više nego dvostruko, izravno je preuzimanje, a ne App Store, i instalira upravljački program za snimanje zvuka koji radi svoj posao. Ako želite alate audio inženjera, izvrsne su. Ako želite samo jednu aplikaciju glasnije, to je pretjerano.</p>
<p><strong>Background Music</strong> besplatan je i otvorenog izvornog koda te može napraviti osnovni volumen po aplikaciji. Ali to je projekt zajednice koji ima povijest probijanja na novijim verzijama macOS, a nedostaje mu povećanje iznad 100%, profili i automatsko smanjivanje. Izvrsno ako je besplatno jedini uvjet i ako vam ne smeta povremeno lomljenje.</p>
<p><strong>FineTune</strong> besplatna je aplikacija s trakom izbornika otvorenog koda i <strong>eqMac</strong> je besplatni EQ i pojačivač sustava. I jedno i drugo vrijedi isprobati ako vam je proračun jednak nuli. Samo znajte da ih održava zajednica, usmjereni su na EQ ili su manji za upravljanje po aplikaciji, i nemojte grupirati profile i saginjanje u jednom dotjeranom paketu.</p>
<p>Gdje <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> zemlje: to je srednji put. Jeftiniji od SoundSource, sposobniji i pouzdaniji od besplatnih alata, a na <strong>Mac App Store</strong>, što znači da ga je pregledao Apple, u sandboxu i da se instalira čisto s <strong>bez DMG i bez audio upravljačkih programa ili proširenja</strong> pričvrstiti na vaš sustav. Za većinu ljudi iskrena preporuka je jednostavna: ako želite popravak s najmanje gnjavaže koji vam također daje pojačanje, profile i automatsko smanjivanje, to je najbolja vrijednost od 14,99 € jednokratno.</p>

<h2>Brz odgovor, ponovio</h2>
<blockquote>Kako bi jedna Mac aplikacija bila glasnija od maksimuma, upotrijebite mikser glasnoće za svaku aplikaciju s pojačavanjem. Otvorite SoundDial na traci izbornika, pronađite tihi klizač aplikacije i povucite ga preko 100%. Samo što ta aplikacija postaje glasnija.</blockquote>

<p>Prestanite se boriti protiv jednog klizača za glasnoću za cijeli Mac. dobiti <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 € jednom, pojačajte tu tihu aplikaciju preko njezinog ograničenja u nekoliko sekundi i spremite profil tako da više nikada ne morate razmišljati o tome.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Kako pojačati tihe videozapise i podcaste na svom Mac",
    description: "Neki YouTube videozapisi, podcasti i predavanja jednostavno su pretihi čak i na 100%. Evo kako povećati volumen po aplikaciji preko maksimuma na macOS sa SoundDial.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Najbrže i pouzdano rješenje je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store mikser trake izbornika koji svakoj aplikaciji daje vlastiti klizač glasnoće i pravi <strong>pojačati</strong> to prelazi 100%. Otvorite preglednik ili podcast player, povucite njegov klizač iznad maksimuma i tihi video ili predavanje odmah će postati glasniji - bez upravljačkih programa, bez ponovnog pokretanja.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Kako pojačati tihe videozapise i podcaste na svom Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto su neki videozapisi i podcasti jednostavno pretihi</h2>
<p>Pokrenete svoj Mac na 100%, a intervju je i dalje šapat. Ovo nije tvoja mašta. Zvuk se svladava na vrlo različitim razinama glasnoće - webinar snimljen mikrofonom prijenosnog računala, tihi indie podcast ili staro predavanje može biti 15-20 dB ispod profesionalno proizvedenog YouTube videa. Glasnoća vašeg sustava već je maksimalna, tako da više nema prostora za glavu.</p>
<p>Evo kvake: macOS ima <strong>nema ugrađenog miksera glasnoće po aplikaciji</strong>. Windows ima jedan već godinama (Mikser glasnoće u programskoj traci), ali na Mac tipke za glasnoću pomiču jednu globalnu razinu za sve. Ne postoji izvorni način da se kaže "učini samo ovu karticu preglednika glasnijom" — a kamoli guranje jedne aplikacije preko 100%.</p>

<h2>Pravo rješenje: povećanje glasnoće po aplikaciji</h2>
<p>Da biste tihi izvor učinili glasnijim nego što vaši zvučnici inače dopuštaju, potreban vam je softver koji primjenjuje pojačanje <em>konkretno tu aplikaciju</em> i može se pojačati preko gornje granice od 100%. Upravo to radi mikser po aplikaciji sa značajkom pojačanja.</p>
<p>sa <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, svaka pokrenuta aplikacija prikazuje se na popisu trake izbornika s vlastitim klizačem. Pomaknite tihu aplikaciju do 150% ili 200% i zvuk se pojačava u stvarnom vremenu. Budući da je pojačanje po aplikaciji, sve ostalo — vaša glazba, obavijesti, poziv u drugom prozoru — ostaje na normalnoj razini. Ne uništavate cijeli sustav da čujete jedan tihi podcast.</p>
<blockquote>Global volume pita "koliko je glasan Mac?" Mikser po aplikaciji pita "koliko je glasno <em>ovo</em> aplikacija?" — koje je pitanje koje je zapravo važno kada je jedan video tih, a ostali su u redu.</blockquote>

<h2>Kako pojačati tihi video ili podcast, korak po korak</h2>
<ul>
<li><strong>Instalirajte SoundDial</strong> iz Mac App Store. Zaštićena je i recenzirana od strane Applea, tako da se instalira čisto kao i bilo koja druga aplikacija — bez zasebnog preuzimanja, bez audio drajvera, bez dopuštenja.</li>
<li><strong>Počni igrati</strong> tihi video, epizodu podcasta ili predavanje u bilo kojoj aplikaciji koju koristite — Safari, Chrome, podcast klijent, VLC.</li>
<li><strong>Kliknite ikonu SoundDial</strong> u traci izbornika. Vidjet ćete klizač za svaku aplikaciju koja trenutno proizvodi zvuk.</li>
<li><strong>Povucite klizač te aplikacije iznad 100%</strong> — pokušajte prvo sa 150%, a zatim pritisnite više ako je još uvijek premekano. Promjena je trenutna.</li>
<li><strong>Sve ostalo ostavite na miru.</strong> Samo aplikacija koju ste pojačali postaje glasnija; vaš sustav ostaje uravnotežen.</li>
</ul>
<p>Ako se nađete kako svaki dan poboljšavate iste aplikacije - recimo, podcast player i vaš preglednik - možete spremiti tu postavku kao <strong>profil volumena</strong> i pozovite ga jednim klikom umjesto ponovnog podešavanja svaki put.</p>

<h2>Riječ opreza pri pojačavanju</h2>
<p>Pojačavanje iznad 100% dodaje dobitak, a dobitak ima ograničenja. Dovoljno snažno pritisnite vrlo tihu snimku niske kvalitete i možda ćete čuti isječak ili izobličenje — to je izvor koji ostaje bez čistog signala, a ne greška u aplikaciji. Pojačajte dok ne bude ugodno čujno, a zatim se povucite ako počne zvučati grubo. Na ugrađenim zvučnicima prijenosnog računala, ekstremno pojačanje također može opteretiti vozače, tako da je tamo lakše nego s dobrim slušalicama ili vanjskim zvučnicima.</p>

<h2>Što je s besplatnim ili ugrađenim opcijama?</h2>
<p>Imate alternative i vrijedi biti iskren u vezi s njima:</p>
<ul>
<li><strong>Glasnoća sustava + klizači na razini aplikacije.</strong> Neki playeri (VLC, nekoliko preglednika putem proširenja) omogućuju vam da pojačate vlastiti zvuk. U redu ako vam ikada zatreba samo u jednoj aplikaciji — ali zapeli ste konfigurirajući svaku aplikaciju zasebno, bez objedinjene kontrole i bez profila.</li>
<li><strong>eqMac</strong> je besplatni EQ i pojačivač. Može povećati glasnoću u cijelom sustavu, ali to je globalni alat, a ne čisti mikser po aplikaciji, i radi na razini cijelog izlaza.</li>
<li><strong>Background Music</strong> besplatan je i otvorenog koda te nudi količinu po aplikaciji. Ali oslanja se na postavku za snimanje zvuka koja se može pokvariti na novijim verzijama macOS, a nedostaje mu posebno pojačanje, profili i automatsko smanjivanje.</li>
<li><strong>FineTune</strong> je besplatna aplikacija s trakom izbornika otvorenog koda — lagana opcija ako želite osnove i ne smeta vam softver koji održava zajednica.</li>
<li><strong>SoundSource</strong> by Rogue Amoeba (~39 USD) teška je kategorija profesionalaca: EQ po aplikaciji, usmjeravanje izlaza, radi. Također zahtijeva preuzimanje i upravljački program za snimanje zvuka, a košta dvostruko više od SoundDial. Pretjerano je ako sve što želite je učiniti tihi zvuk glasnijim.</li>
</ul>

<h2>Zašto je SoundDial praktičan izbor</h2>
<p>SoundDial nalazi se u najboljem slučaju za ovaj točno problem. to je <strong>14,99 € jednokratno</strong> — nema pretplate — i živi na <strong>Mac App Store</strong>, što znači da je u sandboxu, da ga je pregledao Apple i da se instalira bez ikakvog DMG ili proširenja sustava kojemu treba vjerovati. Dobivate pojačanje po aplikaciji po koje ste zapravo došli, plus profile, isključivanje zvuka po aplikaciji, brzo prebacivanje izlaza i <strong>automatsko spuštanje</strong> koji umanjuje druge aplikacije kada se trebate usredotočiti na jednu. Jednostavno radi ono glasno, a ostalo dobro.</p>

<p><strong>Umorni ste od naprezanja da čujete tihe videozapise i podcaste?</strong> <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> za 14,99 € i dajte svakoj aplikaciji vlastitu glasnoću — uz pojačanje da sve jasno čujete.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Kako postaviti različitu glasnoću za svaku aplikaciju na Mac",
    description: "macOS nema ugrađeni mikser glasnoće po aplikaciji. Evo kako postaviti neovisne, trajne razine glasnoće za svaku aplikaciju na Mac koristeći SoundDial i alternative.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>macOS nema ugrađeni način za postavljanje drugačije glasnoće za svaku aplikaciju, pa vam je potreban mikser za glasnoću na traci izbornika. Najbrže i najpouzdanije rješenje je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store aplikacija koja svakoj aplikaciji daje vlastiti klizač glasnoće, isključivanje zvuka po aplikaciji i pojačanje koje gura tihe aplikacije preko 100%. Postavite svoje razine jednom i one ostaju.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Kako postaviti različitu glasnoću za svaku aplikaciju na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto Mac nema kontrolu glasnoće po aplikaciji</h2>
<p>Ako ste se prebacili s Windows, vjerojatno ste tražili ekvivalent Windows Volume Mixer-u, onoj maloj ploči na kojoj svaka aplikacija ima svoj klizač. Nije tamo. macOS nudi samo jedan globalni sistemski volumen. Bilo da se radi o YouTube videu, Zoom pozivu, Spotify ili igrici, svi dijele istu glavnu razinu.</p>
<p>To je u redu dok nije. Discord chat prigušuje vašu glazbu. Oglas u pregledniku se oglasi punom glasnoćom, dok ispod tiho svira vaš podcast. Vaša igra je zaglušujuća, ali glasovni poziv u pozadini je previše tih. Jedino "rješenje" koje vam Apple nudi je da otvorite svaku aplikaciju i ručno prilagodite njenu internu glasnoću, ako je aplikacija uopće ima, i ponovite to svake sesije.</p>
<p>Da biste dobili stvarnu kontrolu po aplikaciji, potreban vam je mali uslužni program koji se nalazi između vaših aplikacija i vašeg izlaznog uređaja. Ispod je kako to ispravno učiniti, plus iskrene bilješke o alternativama.</p>

<h2>Najbrži način: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nalazi se u vašoj traci izbornika i navodi sve aplikacije koje trenutno reproduciraju zvuk. Svaki od njih dobiva neovisni klizač. Evo cijelog tijeka rada:</p>
<ul>
<li><strong>Instalirajte iz Mac App Store.</strong> Apple ga je pregledao i smjestio u sandbox, tako da nema DMG, nema audio drajvera niti kernela ili proširenja sustava koje treba odobriti. Instalira se kao svaka normalna aplikacija i može se ukloniti na isti način.</li>
<li><strong>Pritisnite ikonu trake izbornika.</strong> Vidjet ćete klizač za svaku aktivnu aplikaciju, plus glavnu kontrolu.</li>
<li><strong>Povucite za postavljanje razina.</strong> Smanjite Discord, gurnite Spotify prema gore, u potpunosti utišajte bučnu aplikaciju kartice preglednika jednim klikom.</li>
<li><strong>Pojačajte tihe aplikacije.</strong> Ako je aplikacija previše meka čak i na 100%, gurnite je iznad 100% s pojačanjem po aplikaciji.</li>
<li><strong>Spremite profil.</strong> Pohranite svoj "igranje", "poslovni poziv" ili "glazbeni" miks i trenutno se prebacujte između njih umjesto da svakodnevno povlačite klizače.</li>
</ul>
<p>Dvije značajke vrijedi istaknuti jer rješavaju najdosadnije scenarije:</p>
<ul>
<li><strong>Automatsko spuštanje</strong> automatski smanjuje druge aplikacije kada odabrana aplikacija svira, tako da vaša glazba utihne kada stigne poziv i vrati se nakon toga, bez ručnog petljanja.</li>
<li><strong>Brzo prebacivanje izlaza</strong> omogućuje vam prebacivanje između slušalica i zvučnika iz istog izbornika bez zaranjanja u postavke sustava.</li>
</ul>
<p>Budući da se razine pamte po aplikaciji i spremaju u profile, ovo je dio koji većina ljudi zapravo želi: postavite ga jednom i <em>ostaje</em> postaviti.</p>

<h2>Iskrena usporedba besplatnih i plaćenih alternativa</h2>
<p>SoundDial nije jedina opcija, a ovisno o vašim potrebama, besplatni alat može biti dovoljan. Evo poštenog pregleda.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource je profesionalni teškaš. Uz glasnoću po aplikaciji, radi i EQ po aplikaciji i potpuno usmjeravanje izlaza, tako da možete poslati jednu aplikaciju na slušalice, a drugu na zvučnike. Zaista je izvrstan. Kompromisi: košta oko 39 USD i nije čista instalacija App Store, to je izravno preuzimanje koje zahtijeva da se vašem sustavu doda upravljački program za snimanje zvuka. Ako ste audio profesionalac koji treba EQ i usmjeravanje, isplati se. Ako samo želite da svaka aplikacija ima pravu glasnoću, to je više alata i više podešavanja nego što vam je potrebno.</p>

<h2>Background Music (otvoreni kod, besplatno)</h2>
<p>Background Music je besplatna aplikacija otvorenog koda koja nudi glasnoću po aplikaciji i automatsku pauzu. Kvaka je u pouzdanosti: instalira virtualni audio uređaj i ima povijest kvarova na novijim izdanjima macOS, ponekad zahtijeva ponovnu instalaciju ili popravke nakon ažuriranja. Nedostaje mu i pojačanje, spremljeni profili i pravo automatsko smanjivanje. Izvrsno ako želite besplatno i ne smeta vam povremeno održavanje.</p>

<h2>FineTune i eqMac</h2>
<p>FineTune je besplatna aplikacija s trakom izbornika otvorenog koda, lagana polazna točka. eqMac je besplatni ekvilizator s pojačivačem za cijeli sustav, usmjeren više na EQ i ukupni dobitak nego na davanje vlastitog postojanog klizača svakoj aplikaciji. Oboje vrijedi isprobati ako su vaše potrebe uske, ali nijedno nije usredotočeno na tijek rada "različiti volumen po aplikaciji, spremljen kao profil".</p>

<h2>Što izabrati?</h2>
<ul>
<li><strong>Želite da samo radi, čisto, s profilima i automatskim spuštanjem?</strong> SoundDial po cijeni od 14,99 € jednokratno, od App Store, bez drajvera za instalaciju.</li>
<li><strong>Trebate EQ i audio usmjeravanje po aplikaciji i ne smeta vam cijena ili upravljački program?</strong> SoundSource.</li>
<li><strong>Želite besplatno i možete li petljati kada se macOS ažurira?</strong> Background Music, FineTune ili eqMac.</li>
</ul>
<p>Prava prednost SoundDial je kombinacija: nezavisna glasnoća, isključivanje zvuka i pojačanje za svaku aplikaciju, spremljeno u promjenjive profile, s automatskim smanjivanjem, sve unutar App Store preuzimanja u sandboxu kojem možete vjerovati i deinstalirati ga jednim klikom, za jednokratnih 14,99 € umjesto pretplate.</p>

<blockquote>Nema upravljačkog programa, nema proširenja, nema DMG. Postavite glasnoću svake aplikacije jednom, spremite je kao profil i pustite automatsko smanjivanje zvuka za ostalo.</blockquote>

<p>Jeste li spremni svakoj aplikaciji dati vlastiti volumen? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> i postavite svoju savršenu mješavinu za otprilike minutu.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Neka jedna aplikacija bude tiša od svega drugog na Mac",
    description: "Jedna glasna aplikacija zaglušuje ostale na vašem Mac? Evo najbržeg i pouzdanog načina da smanjite glasnoću jedne aplikacije bez diranja ostalih.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Da isključite jednu aplikaciju dok sve ostalo ostane na mjestu, upotrijebite <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mikser glasnoće trake izbornika po aplikaciji za macOS. Otvorite je, pronađite glasnu aplikaciju na popisu i povucite njezin klizač prema dolje. Ta aplikacija odmah postaje tiša, dok vaša glazba, pozivi i ostali zvukovi ostaju na vlastitoj razini. To je najbrže i najpouzdanije rješenje.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Neka jedna aplikacija bude tiša od svega drugog na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto macOS ovo čini tako teškim</h2>

<p>Evo frustrirajuće istine: macOS nema ugrađeni mikser glasnoće po aplikaciji. Windows ima jedan već godinama (desnom tipkom miša kliknite ikonu glasnoće, otvorite Volume Mixer, gotovo), ali na Mac tipke za glasnoću i klizač trake izbornika kontroliraju samo jednu stvar: glavni izlaz. Stišajte i sve zajedno ide tiše. Pojačajte i glasna aplikacija i dalje će biti glasna, samo glasnija zajedno s ostalima.</p>

<p>Dakle, kada su zvučni efekti igre sjajni, kartica preglednika automatski reproducira oglas ili zvukovi obavijesti stalno šiljaju preko vašeg podcasta, vaše jedine izvorne opcije su nespretne: isključite zvuk cijelog sustava, istražite vlastitu postavku glasnoće svake aplikacije (ako je uopće ima) ili potpuno napustite počinitelja. Ništa od toga ne dopušta vam da jednostavno kažete "učinite ovu jednu aplikaciju tišom i ostavite sve ostalo na miru."</p>

<h2>Brzo rješenje: mikser glasnoće po aplikaciji</h2>

<p>Mikser glasnoće po aplikaciji daje svakoj pokrenutoj aplikaciji vlastiti neovisni klizač. Upravo vam ta kontrola nedostaje. sa <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> izgleda ovako:</p>

<ul>
<li><strong>Otvorite mikser trake izbornika.</strong> Kliknite ikonu SoundDial i vidjet ćete popis uživo svake aplikacije koja trenutno reproducira zvuk.</li>
<li><strong>Nađi onu glasnu.</strong> Igra, preglednik, videopoziv, zvukovi obavijesti, što god guši ostalo.</li>
<li><strong>Povucite njegov klizač prema dolje.</strong> Postavite ga na 40%, 20%, gdje god se čini uravnoteženim. Promjena je trenutna i utječe samo na tu aplikaciju.</li>
<li><strong>Sve ostalo ostavite na miru.</strong> Vaš svirač glazbe, vaš poziv, vaše druge kartice, svi zadržavaju glasnoću koju ste im postavili.</li>
</ul>

<p>Također možete potpuno utišati jednu aplikaciju jednim klikom dok druge nastavljaju igrati ili pojačati tihu aplikaciju iznad 100% ako je preslaba. Nema ponovnog pokretanja aplikacije, nema ronjenja po izborniku.</p>

<h2>Uobičajeni slučajevi u kojima vas ovo spašava</h2>

<ul>
<li><strong>Glasna igra uz pozadinsku glazbu.</strong> Spustite igru na ugodnu razinu i držite svoj popis pjesama na punoj glasnoći ispod nje.</li>
<li><strong>Oglasi u pregledniku i videozapisi koji rastu.</strong> Pričvrstite svoj preglednik niže kako vas iznenadna automatska reprodukcija nikada ne bi uznemirila.</li>
<li><strong>Obavijest zvoni tijekom poziva ili podcasta.</strong> Isključite aplikaciju koja opterećuje obavijestima bez utišavanja zvuka do kojeg vam je stalo.</li>
<li><strong>Tihi video poziv pod glasnim medijima.</strong> Umjesto da smanjite glasnu aplikaciju, pojačajte poziv iznad 100% kako biste jasno čuli ljude.</li>
</ul>

<h2>Postavite ga jednom s profilima glasnoće i automatskim smanjivanjem</h2>

<p>Popravljanje jedne glasne aplikacije je lijepo, ali vjerojatno želite da ostane popravljeno. SoundDial ima dvije značajke koje ovo čine trajnim:</p>

<p><strong>Profili volumena</strong> omogućuju vam spremanje skupa razina po aplikaciji i njihovo ponovno pozivanje jednim klikom. Izgradite profil "Gaming" gdje je igra na 30%, a glazba na 100%, te profil "Work" gdje su pozivi pojačani, a sve ostalo smanjeno. Mijenjajte kontekst bez ponovnog povlačenja klizača svaki put.</p>

<p><strong>Automatsko spuštanje</strong> automatski snižava druge aplikacije kada odabrana aplikacija reproducira, a zatim ih vraća nakon toga, tako da glasna aplikacija nikada u potpunosti ne otme vaš zvuk. Između profila, spuštanja i brzog prebacivanja izlaza (skakanje između zvučnika i slušalica bez otvaranja postavki sustava), postavite balans jednom i prestanete čuvati glasnoću.</p>

<h2>Kako se SoundDial uspoređuje s alternativama</h2>

<p>Postoje i drugi načini za dobivanje volumena po aplikaciji na Mac. Evo iskrenog pogleda:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 USD)</strong> je istinski profesionalan: EQ po aplikaciji i potpuno usmjeravanje izlaza povrh kontrole glasnoće. Ali košta više nego dvostruko i potrebno mu je zasebno preuzimanje plus upravljački program za snimanje zvuka. Ako želite komplet alata na studijskoj razini, izvrstan je. Ako samo želite odbiti jednu aplikaciju, to je više nego što vam treba.</li>
<li><strong>Background Music</strong> je besplatan i otvorenog koda, što je sjajno, ali se može pokvariti na novijim verzijama macOS, a nedostaje mu pojačanje zvuka, profili i automatsko smanjivanje.</li>
<li><strong>FineTune</strong> besplatna je aplikacija s trakom izbornika otvorenog koda i <strong>eqMac</strong> je besplatni EQ s pojačivačem. Oba vrijedi isprobati ako vam je besplatno prioritet, ali mijenjate uglađenost, pouzdanost i značajke za cijenu.</li>
</ul>

<p>SoundDial je na najboljem mjestu: 14,99 € jednokratno, bez pretplate. Budući da je na Mac App Store, recenzirao ga je Apple i u sandboxu, te se čisto instalira bez DMG, bez audio drajvera i bez proširenja sustava koje treba odobriti. Dobivate značajke koje su zapravo važne za ovaj problem, glasnoću po aplikaciji, isključivanje zvuka, pojačavanje, profile i automatsko smanjivanje, bez cijene od 39 USD ili besplatnog osjetljivog alata.</p>

<h2>Zaključak</h2>

<p>macOS vam neće dopustiti da odbijete niti jednu aplikaciju samu, ali to je praznina koju možete premostiti u nekoliko sekundi. Instalirajte mikser za svaku aplikaciju, povucite klizač glasne aplikacije prema dolje i ostatak vašeg zvuka ostaje točno tamo gdje želite. Sačuvajte profil i više se nikada nećete boriti protiv ovoga.</p>

<p><strong>Jeste li spremni ušutkati jednu aplikaciju koja guši ostale?</strong> dobiti <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 €, jedno plaćanje, bez vozača, bez pretplate.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mac Audio mikser za streamere: balans mikrofona, igre i glazbe",
    description: "Najbrži način za balansiranje mikrofona, zvuka igre, glazbe i upozorenja tijekom strujanja na Mac. SoundDial vam daje mikser glasnoće po aplikaciji s profilima i duckingom.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Da biste uravnotežili svoj mikrofon, igru, glazbu i upozorenja tijekom strujanja na Mac, najbrže pouzdano rješenje je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mikser glasnoće trake izbornika po aplikaciji. macOS nema ugrađeni mikser, pa vam SoundDial omogućuje postavljanje neovisnih razina po aplikaciji, pojačavanje tihih izvora, spremanje profila za strujanje i automatsko utišavanje glazbe dok razgovarate.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Audio mikser za streamere: balans mikrofona, igre i glazbe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Problem: macOS nema kontrolu glasnoće po aplikaciji</h2>
<p>Windows već godinama ima mikser za glasnoću. macOS ga još uvijek ne isporučuje. Klizač za glasnoću vašeg sustava pomiče sve odjednom, što je beskorisno kada ste uživo. Tijekom streama žonglirate s najmanje četiri izvora koji se svi bore za isti izlaz:</p>
<ul>
<li><strong>Praćenje vašeg glasa / mikrofona</strong> — treba sjediti iznad svega.</li>
<li><strong>Zvuk igre</strong> — glasno, dinamično i sklono napadima tijekom akcije.</li>
<li><strong>Pozadinska glazba</strong> — trebao bi šutjeti ispod svog komentara.</li>
<li><strong>Upozorenja i zvukovi razgovora</strong> — Discord, Stream Deck, upozorenja za pratitelje, obavijesti.</li>
</ul>
<p>Bez kontrole po aplikaciji na kraju vozite klizač unutar aplikacije u igrici, ručno utišate Spotify i molite se da glasna scena ne oduševi vaše gledatelje. To nije mješavina, to je kontrola oštećenja.</p>

<h2>Što pravi mikser za strujanje treba raditi</h2>
<p>Postavka zvuka usmjerena na kreatora na Mac trebala bi vam dati četiri stvari: neovisne razine po aplikaciji, mogućnost pojačavanja izvora koji je pretih, spremljene konfiguracije kojih se možete odmah prisjetiti i automatsko utišavanje kako bi glazba prestala čim govorite. SoundDial pokriva sva četiri s trake izbornika.</p>

<h3>1. Neovisna glasnoća za svaku aplikaciju</h3>
<p>Postavite igru na 60%, glazbu na 25%, Discord na 80%, a svoj preglednik na 40% — svaka aplikacija ima vlastiti klizač. Ništa ne krvari u bilo što drugo. Također možete trenutno isključiti zvuk po aplikaciji ako se izvor loše ponaša usred streama, bez dodirivanja same aplikacije.</p>

<h3>2. Pojačanje glasnoće za tihe izvore</h3>
<p>Neke aplikacije i igre su jednostavno pretihe čak i na 100%. SoundDial-ovo pojačanje po aplikaciji gura izvor preko njegove normalne granice tako da mumljajuća igrica ili videozapis niske glasnoće sjedne tamo gdje vam treba u miksu — bez ponovnog kodiranja, bez dodataka.</p>

<h3>3. Profili glasnoće za različite scene</h3>
<p>Ovo je značajka koja streamerima štedi najviše vremena. Vaš miks "Just Chatting" (glazba gore, igra utihnula) razlikuje se od vašeg miksa "Boss Fight" (igra gore, glazba gotovo tiha), koji se razlikuje od vašeg miksa "BRB". Spremite svaki kao profil i prebacite se jednim klikom umjesto da povlačite četiri klizača uživo.</p>

<h3>4. Automatsko utišavanje kako bi se glazba utišala ispod vašeg glasa</h3>
<p>Automatsko prigušivanje automatski smanjuje pozadinski zvuk dok govorite i vraća ga kad prestanete. Za solo streamere ovo je razlika između komentara koji je jasan i glazbe koja neprestano zakopava vaš glas — kojom se upravlja automatski umjesto ručno.</p>

<h2>Gdje se OBS uklapa</h2>
<p>OBS je vaš alat za emitiranje, a ne vaš stolni mikser glasnoće. OBS kontrolira koje razine ulaze u stream preko svoje Audio Mixer ploče i filtara, ali radi iz audio izvora koje snima — ne dopire do pojedinačnih macOS aplikacija i ne smanjuje ih na razini sustava. Na Mac, dobivanje čistog zvuka stolnog računala po aplikaciji u OBS uvijek je bio bolan dio.</p>
<p>Praktičan tijek rada: koristite SoundDial za postavljanje stvarnih razina po aplikaciji na vašem Mac tako da ono što izlazi već bude uravnoteženo, zatim pustite OBS da uhvati i fino ugodi razine emitiranja. Postavite miks jednom na izvoru i OBS ima daleko manje borbe. Brzo prebacivanje izlaza u SoundDial također vam omogućuje prebacivanje između slušalica i zvučnika bez zaranjanja u postavke sustava između scena.</p>

<h2>SoundDial naspram alternativa</h2>
<p>Imate mogućnosti, a poštenje je ovdje važno:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 USD)</strong> — Pro-grade s EQ-om po aplikaciji i punim izlaznim usmjeravanjem. Izvrstan je, ali košta više nego dvostruko, zahtijeva izravno preuzimanje i instalira upravljački program za snimanje zvuka. Pretjerano ako su vam uglavnom potrebne čiste razine po aplikaciji, pojačanje i spuštanje.</li>
<li><strong>Background Music (besplatno, otvoreni kod)</strong> — istinski koristan i besplatan, ali može se pokvariti na novijim macOS verzijama i nema pojačanja, nema profila niti automatskog smanjivanja — točne značajke na koje se oslanjaju streameri.</li>
<li><strong>FineTune (besplatna aplikacija s trakom izbornika otvorenog koda)</strong> — lagana kontrola po aplikaciji, ali projekt zajednice bez kombinacije profila i sklanjanja izgrađen za live streaming.</li>
<li><strong>eqMac (besplatni EQ + pojačivač)</strong> — dobar za oblikovanje tonova i pojačavanje, ali je ekvilizator, a ne mikser za strujanje po aplikaciji.</li>
</ul>
<p>SoundDial-ov kut: to je a <strong>14,99 € jednokratno</strong> kupiti na <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Recenzirao ga je Apple, u sandboxu i čisto se instalira bez DMG i audio upravljačkih programa ili proširenja sustava. Taj posljednji dio je važan za streamere: manje komponenti na razini kernela znači manje iznenadnih kvarova kada se macOS ažurira noć prije vašeg streama.</p>

<h2>Poštena zamjena</h2>
<p>Ako trebate EQ razine emitiranja i složene lance usmjeravanja, SoundSource ima svoju cijenu. Ako želite besplatni alat za peglanje i nemate ništa protiv povremenog kvara, poslužit će Background Music ili FineTune. Ali ako želite mješavinu koju strujanje zapravo zahtijeva - razine po aplikaciji, pojačanje, spremljeni profili scene i automatsko smanjivanje - od sigurne App Store instalacije koja preživljava macOS ažuriranja, SoundDial je najizravniji put za novac.</p>

<p><strong>Jeste li spremni popraviti zvuk strujanja?</strong> dobiti <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a> za 14,99 € — postavite svoj mikrofon, igru, glazbu i razinu upozorenja jednom, spremite ih kao profile i dopustite automatskom prigušivanju da vaš glas ostane na vrhu.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Kako popraviti pucketanje i pucanje zvuka na macOS Tahoe",
    description: "Pucketanje ili pucanje zvuka nakon ažuriranja na macOS Tahoe 26? Popravite to usklađivanjem brzine uzorkovanja, resetiranjem CoreAudio, provjerom Bluetooth kodeka i brisanjem sukoba dodataka. Evo cjelovitog naloga za rješavanje problema.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Pucketanje i pucketanje nakon ažuriranja na macOS Tahoe 26 gotovo je uvijek neusklađenost brzine uzorkovanja, nestabilno pregovaranje kodeka Bluetooth ili zaglavljeni proces CoreAudio. Popravite to usklađivanjem izlazne brzine uzorkovanja u Audio MIDI Setup, resetiranje <code>coreaudiod</code>, zaboravljanje i ponovno uparivanje Bluetooth slušalica i napuštanje hostova audio dodataka. Prođite kroz njih redom u nastavku.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Kako popraviti pucketanje i pucanje zvuka na macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Počnite s jeftinim popravcima</h2>

<p>Prije nego što se dotaknete bilo čega tehničkog, isključite dvije stvari koje većinu slučajeva rješavaju za manje od minute:</p>

<ul>
<li><strong>Ponovno pokrenite Mac.</strong> Ažuriranje Tahoea iznenađujuće često ostavlja audio demone u polumigriranom stanju. Čisto ponovno pokretanje ponovno učitava CoreAudio ispočetka i uklanja većinu pucketanja nakon ažuriranja.</li>
<li><strong>Isključite i ponovno uključite izlazni uređaj.</strong> Ako je to USB DAC, dock ili audio sučelje, odspojite ga, pričekajte nekoliko sekundi i ponovno spojite. Isprobajte i neki drugi USB priključak, idealno jedan izravno na Mac, a ne kroz čvorište. Čvorišta i zasloni koji propuštaju zvuk uobičajeni su izvor pucanja.</li>
</ul>

<p>Ako šum preživi ponovno pokretanje, to je problem s konfiguracijom, a ne greška. nastavi.</p>

<h2>Podudaranje stope uzorkovanja (najčešći uzrok)</h2>

<p>Klasično pucketanje Tahoe dolazi od neusklađenosti brzine uzorkovanja između onoga što vaš uređaj želi i onoga što macOS šalje. Kada aplikacija reproducira zvuk od 44,1 kHz, a sustav je zaključan na 48 kHz (ili obrnuto), ponovno uzorkovanje može zastajkivati ​​ili pucati.</p>

<ul>
<li>Otvoreno <strong>Audio MIDI postavke</strong> (u Aplikacije → Uslužni programi ili pretražite Spotlight).</li>
<li>Odaberite izlazni uređaj na lijevoj bočnoj traci.</li>
<li>Pogledajte <strong>Format</strong> padajući izbornik. Pokušajte ga postaviti na <strong>48000,0 Hz, 2 kanala-24 bita cijeli broj</strong> i testirati.</li>
<li>Ako se iskakanje nastavi, prebacite na <strong>44100,0 Hz</strong> i ponovno testirati.</li>
<li>Za sučelja, provjerite odgovara li stopa uzorkovanja stopi projekta vašeg DAW.</li>
</ul>

<p>Promjena formata također prisiljava CoreAudio da ponovno pregovara o vezi, što jedino popravlja mnoge slučajeve čak i kada se vratite na istu vrijednost.</p>

<h2>Resetiraj CoreAudio</h2>

<p>CoreAudio radi kao pozadinski demon tzv <code>coreaudiod</code>. Nakon velikog ažuriranja macOS može zadržati ustajalo stanje uređaja. Ponovno pokretanje je sigurno i stupa na snagu trenutno, bez ponovnog pokretanja.</p>

<p>Otvorite Terminal i pokrenite:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Unesite svoju lozinku kada se to od vas zatraži. Vaš zvuk će se prekinuti na sekundu, a zatim se demon automatski ponovno pokreće s čistom pločom. Ovo je jedini najučinkovitiji popravak za pucketanje koje se pojavljuje niotkuda na računalu koje je bilo u redu prije ažuriranja.</p>

<h2>Provjerite svoje Bluetooth slušalice i kodek</h2>

<p>Ako se pucketanje javlja samo na AirPods ili drugim Bluetooth slušalicama, problem je obično u pregovaranju kodeka, a ne u zvučnicima. Kvaliteta bežičnog zvuka opada kada je veza zagušena ili kada macOS padne u način rada niske propusnosti poziva.</p>

<ul>
<li><strong>Zaboravite i ponovno uparite uređaj.</strong> Idite na Postavke sustava → Bluetooth, uklonite slušalice, zatim ih ponovno uparite. Ovo poništava dogovoreni kodek.</li>
<li><strong>Pripazite na pad načina poziva.</strong> Kada aplikacija otvori mikrofon, macOS prebacuje Bluetooth slušalice na dvosmjerni profil niske kvalitete, što zvuči hrskavo. Prekinite konferencijske i glasovne aplikacije koje ne koristite i vjernost se vraća.</li>
<li><strong>Smanjite smetnje.</strong> Odmaknite se od prenapučenih 2,4 GHz okruženja i isključite Bluetooth uređaje koji vam ne trebaju. Užurbani radijski pojas proizvodi isprekidane pucketanje.</li>
<li><strong>Isključite mikrofonski ulaz</strong> u postavkama aplikacije ako trebate samo slušati, tako da macOS zadržava profil reprodukcije visoke kvalitete.</li>
</ul>

<h2>Zatvorite hostove audio dodataka i virtualne upravljačke programe</h2>

<p>Audio softver treće strane koji instalira proširenje sustava ili virtualni uređaj čest je prijestupnik nakon skoka OS-a, jer kernel i audio proširenja često trebaju ažuriranje za novu macOS verziju. Sumnjivci uključuju virtualne audio usmjerivače, aplikacije za izjednačavanje, alate za povratnu petlju i starije uslužne programe temeljene na upravljačkim programima.</p>

<ul>
<li>Zatvorite bilo koji ekvilizator, audio-usmjerivač ili aplikaciju povratne petlje i provjerite prestaje li pucketanje.</li>
<li>Provjerite Postavke sustava → Općenito → Stavke za prijavu &amp; Ekstenzije za audio ekstenzije koje je možda potrebno ažurirati ili ukloniti.</li>
<li>Ažurirajte te aplikacije na njihova izdanja kompatibilna s Tahoeom ili deinstalirajte one koje više ne koristite. Složeni audio upravljački programi često su u sukobu jedni s drugima nakon velikog ažuriranja.</li>
</ul>

<p>Ako napuštanje jedne od ovih aplikacija utiša iskakanje, pronašli ste krivca. Ponovno instalirajte trenutnu verziju ili je isključite.</p>

<h2>Suziti izbor: cijeli sustav ili jedna aplikacija?</h2>

<p>Odredite pojavljuje li se šum posvuda ili samo u određenom softveru. Reproducirajte lokalnu audiodatoteku, zatim video iz preglednika, a zatim glazbenu aplikaciju. Ako samo jedna aplikacija pucketa, popravak su vlastite postavke zvuka te aplikacije ili ažuriranje, a ne macOS. Ako se radi o cijelom sustavu, gore navedeni koraci su mjesto gdje se nalazi odgovor.</p>

<p>Kad i dalje zapnete, pokrenite se u sigurnom načinu rada (držite tipku za napajanje na Appleovom siliciju, zatim odaberite disketu za pokretanje držeći Shift). Siguran način rada ne učitava ekstenzije trećih strana. Ako je zvuk tamo čist, uzrok je stavka za prijavu ili upravljački program i možete ih ponovno omogućiti jednog po jednog da biste ih pronašli.</p>

<h2>Nakon što je vaš zvuk čist</h2>

<p>Pucketanje je problem s upravljačkim programom i brzinom uzorkovanja, pa ga zapravo rješavaju gore navedeni popravci. Ali nakon što je reprodukcija stabilna, možda ćete primijetiti drugačije ograničenje: macOS još uvijek nema ugrađeni mikser glasnoće po aplikaciji, kao što to ima Windows. Ne možete stišati glasnu aplikaciju, a da ne stišate sve.</p>

<p>To je jaz <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ispunjava. To je mikser na traci izbornika koji svakoj aplikaciji daje vlastiti klizač glasnoće, isključivanje zvuka po aplikaciji, pa čak i pojačanje glasnoće za tihe aplikacije, plus brzo prebacivanje izlaza. Neće popraviti pucketanje, ali kada vaš zvuk postane zdrav, dnevna kontrola postaje mnogo lakša.</p>

<p>Prođite redom kroz gornje korake i počnite s ponovnim pokretanjem i provjerom uzorkovanja. Ako kasnije poželite stvarnu kontrolu po aplikaciji nad svojim čistim postavkama zvuka, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je €14,99 jednokratna kupnja na Mac App Store, u sandboxu bez upravljačkih programa ili DMG za instalaciju.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Zastajkivanje ili isjecanje na Mac (Tahoe Fix)",
    description: "AirPods zastajkivanje, prekidanje ili ispuštanje zvuka na macOS Tahoe gotovo je uvijek Bluetooth smetnja ili automatsko prekidanje zvuka. Evo kako se ponovno upariti, smanjiti zagušenje od 2,4 GHz i zaustaviti prijenose koji prekidaju reprodukciju.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>AirPods zastajkivanje ili prekidanje na macOS Tahoeu je gotovo uvijek Bluetooth smetnja, a ne pokvarena slušalica. Uobičajeni krivci su 2,4 GHz Wi-Fi i zagušenje usmjerivača, agresivno automatsko prebacivanje uređaja i ustajalo uparivanje. Ponovno uparite AirPods, isključite automatsko prebacivanje i odmaknite se od pretrpanih 2,4 GHz kanala kako biste riješili većinu slučajeva.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods zastajkivanje ili prekid na Mac (Tahoe Fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto AirPods pada baš na Mac</h2>

<p>AirPods koristi Bluetooth, koji dijeli prenatrpani radio pojas od 2,4 GHz s Wi-Fi mrežom, mikrovalnim pećnicama, USB 3 uređajima i skoro svakim pametnim utikačem u vašem domu. Vaš Mac je zauzet radio: žonglira značajkama Wi-Fi, Bluetooth, AirDrop i Continuity na preklapajućim antenama. Kad se taj pojas zaguši, Bluetooth zvuk je prva stvar koja zamuckuje, jer ne može tolerirati ispuštene pakete kao što to može prijenos datoteka.</p>

<p>Tahoe nije magično pogoršao vaš AirPods, ali svježa instalacija macOS često resetira ponašanje radija, ponovno omogućuje prijenose kontinuiteta i ponovno pregovara o kodecima. Zbog toga se čini da se problemi pojavljuju odmah nakon ažuriranja. Dobre vijesti: popravci su dobro razumljivi i uglavnom besplatni.</p>

<h2>Popravak 1: Ponovno uparite AirPods (učinite ovo prvo)</h2>

<p>Zastarjelo ili oštećeno uparivanje preživljava ponovno pokretanje i uzrokuje povremene padove koji izgledaju nasumično. Potpuno uklonite i ponovno dodajte vezu:</p>

<ul>
<li>Otvoreno <strong>Postavke sustava, Bluetooth</strong>.</li>
<li>Kliknite gumb info (i) pored vašeg AirPods i odaberite <strong>Zaboravite ovaj uređaj</strong>.</li>
<li>Stavite AirPods u njihovu kutiju, zatvorite poklopac, pričekajte 15 sekundi, a zatim ga otvorite.</li>
<li>Držite tipku na stražnjoj strani kućišta dok svjetlo ne počne treperiti bijelo.</li>
<li>Ponovno uparivanje s popisa Bluetooth.</li>
</ul>

<p>Dok ste tamo, provjerite je li firmware AirPods aktualan. Ne postoji ručni program za ažuriranje, ali ako ih neko vrijeme ostavite u kućištu u blizini povezanog iPhonea ili Mac, možete se ažurirati u pozadini.</p>

<h2>Popravak 2: Isključite automatsko prebacivanje</h2>

<p>Ovo je najveći pojedinačni uzrok "izbacivanja" za ljude u Appleovom ekosustavu. Vaš AirPods pokušava vas pratiti između vašeg Mac, iPhonea i iPada. Svaki put kad vaš telefon pomisli da bi trebao uhvatiti zvuk, veza na vašem Mac štuca, stvarajući prekid od pola sekunde usred podcasta.</p>

<ul>
<li>Na Mac: Bluetooth, kliknite (i) pored AirPods, postavite <strong>Povežite se s ovim Mac</strong> do <strong>Kada ste zadnji put povezani s ovim Mac</strong> umjesto Automatski.</li>
<li>Na iPhoneu: Postavke, dodirnite svoj AirPods, <strong>Povežite se s ovim iPhoneom</strong>, izaberite <strong>Kada ste zadnji put spojeni na ovaj iPhone</strong>.</li>
</ul>

<p>Time se zaustavlja natezanje između uređaja. Ručno ćete odabrati kamo ide zvuk, što je mala cijena za stabilnu reprodukciju.</p>

<h2>Popravak 3: Smanjite zagušenje od 2,4 GHz</h2>

<p>Ako dođe do pada tijekom videopoziva, preuzimanja ili dok drugi ljudi struje, vaš je radio pojas zasićen. Nekoliko praktičnih poteza:</p>

<ul>
<li><strong>Koristite Wi-Fi pojas od 5 GHz</strong> na vašem Mac. U postavkama usmjerivača dajte mreži od 5 GHz poseban naziv i povežite se na nju. Ovo oslobađa pojas od 2,4 GHz za Bluetooth.</li>
<li><strong>Udaljite USB 3 i Thunderbolt čvorišta</strong> od vaših Mac i AirPods. USB 3 je zloglasni izvor šuma od 2,4 GHz; čvorište koje se nalazi pokraj vašeg prijenosnog računala može uništiti Bluetooth na nekoliko centimetara udaljenosti.</li>
<li><strong>Promijenite kanal vašeg usmjerivača od 2,4 GHz</strong> na 1, 6 ili 11 (opcije koje se ne preklapaju) i izbjegavajte pretrpane kanale na kojima su vaši susjedi.</li>
<li><strong>Održavajte vidokrug.</strong> Tijela i zidovi apsorbiraju 2,4 GHz. Ako je vaš Mac iza vas ili u torbi, padovi se pogoršavaju.</li>
</ul>

<blockquote>Wi-Fi 6E i Wi-Fi 7 usmjerivači mogu neizravno pomoći: guranjem vaših uređaja na 6 GHz čisti se pojas od 2,4 GHz o kojem ovisi Bluetooth. Ali loše konfigurirana mreža koja vas stalno vraća na 2,4 GHz može pogoršati stvari. Provjerite na kojem ste bendu zapravo.</blockquote>

<h2>Popravak 4: Resetirajte Bluetooth i stog kontinuiteta</h2>

<p>Ako ponovno uparivanje nije uspjelo, resetirajte same radije:</p>

<ul>
<li>Isključite i uključite Bluetooth na traci izbornika, zatim ponovno pokrenite Mac. Ponovno pokretanje uklanja iznenađujući broj prolaznih audio grešaka.</li>
<li>Resetirajte SMC/NVRAM na Intel Mac ili jednostavno potpuno isključite (bez ponovnog pokretanja) na 30 sekundi na Apple Siliconu.</li>
<li>Ako ne koristite AirDrop ili Handoff, onemogućite Handoff u System Settings, General, AirDrop &amp; Handoff smanjuje pozadinsko radio brbljanje.</li>
</ul>

<h2>Što to neće popraviti (i što zapravo radi mikser za glasnoću)</h2>

<p>Da razjasnimo opseg: ništa od ovoga nije problem s volumenom softvera i niti jedna aplikacija za volumen ne može popraviti vezu Bluetooth. Ako je vaš zvuk <em>ispuštanje</em>, potjerajte gore navedeni problem radija. Aplikacije poput <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kontrolu glasnoće po aplikaciji, isključivanje zvuka i prebacivanje izlaza, oni ne dodiruju Bluetooth stog, tako da neće prestati zamuckivati. Ono gdje mikser uistinu pomaže je susjedna smetnja koju mnogi korisnici AirPods-a povezuju s ispadanjem: jedna aplikacija radi dok je druga pretiha ili treba brzo preskočiti izlaze. To je problem ravnoteže glasnoće, a ne veze.</p>

<p>Postavite dijagnozu iskreno. Ako se zvuk prekine na ritam i vrati, to je smetnja ili automatsko prebacivanje. Ako su razine samo nejednake između aplikacija, to je problem miješanja koji zapravo možete riješiti softverom.</p>

<h2>Brzi kontrolni popis</h2>

<ul>
<li>Zaboravite i ponovno uparite AirPods.</li>
<li>Postavite i Mac i iPhone na <strong>Kada ste zadnji put povezani</strong>, ne automatski.</li>
<li>Premjestite svoj Mac na 5GHz Wi-Fi; držite USB 3 čvorišta podalje.</li>
<li>Postavite 2,4 GHz na kanal 1, 6 ili 11.</li>
<li>Ponovo pokrenite nakon prebacivanja Bluetooth.</li>
</ul>

<p>Nakon što ispadanja nestanu i samo želite jasniju kontrolu nad time koliko glasno svaka aplikacija reproducira, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodaje odgovarajući mikser glasnoće po aplikaciji, isključivanje zvuka, pojačanje i brzo prebacivanje izlaza koje macOS još uvijek ne uključuje. To je €14,99 jednokratna kupnja na Mac App Store, u sandboxu, bez drajvera za instaliranje.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Desni govornik mrtav na Mac nakon Tahoe ažuriranja? Kako to popraviti",
    description: "Jedan zvučnik ili kanal prestao je raditi nakon ažuriranja na macOS Tahoe? Počnite s klizačem za balans zvuka, zatim resetirajte Core Audio, pokušajte sa sigurnim načinom rada i isključite hardver. Jasan vodič za rješavanje problema.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Ako je vaš desni zvučnik utihnuo nakon ažuriranja na macOS Tahoe, provjerite zvuk <strong>klizač ravnoteže</strong> prvo — može se pomaknuti tijekom ažuriranja. Idite na Postavke sustava &gt; Zvuk &gt; Izlaz i provjerite je li Balans u središtu. Ako je to u redu, ponovno pokrenite Core Audio, pokrenite sustav u sigurnom načinu rada, a zatim isključite hardver. Većina slučajeva je softver.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Desni zvučnik mrtav na Mac nakon Tahoe ažuriranja? Kako to popraviti" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prvo: klizač ravnoteže (popravlja ovo češće nego što mislite)</h2>

<p>Zaglavljeni ili pomaknuti klizač ravnoteže najčešći je razlog zašto se jedan kanal utiša - a ažuriranja macOS povremeno ga poguraju. Prije nego što pretpostavite najgore:</p>

<ul>
<li>Otvoreno <strong>Postavke sustava &gt; Zvuk</strong>.</li>
<li>Kliknite na <strong>Izlaz</strong> i odaberite svoje zvučnike (ugrađene ili vaš vanjski uređaj).</li>
<li>Pronađite <strong>Ravnoteža</strong> klizač i povucite ga točno u središte. Ako ga povučete lijevo, vaš desni kanal bi zvučao mrtvo.</li>
</ul>

<p>Učini ovo <em>po izlaznom uređaju</em>. Postavka balansa pamti se zasebno za ugrađene zvučnike, slušalice i svako vanjsko sučelje — tako da centrirani ugrađeni balans neće pomoći ako je problem na vašem USB DAC-u.</p>

<h2>Provjerite je li to zapravo hardverski kanal</h2>

<p>Brzo ubacite ili izvadite hardver. Pustite stereo pjesmu koju dobro poznajete, a zatim priključite par žičnih slušalica. Ako oba kanala rade u slušalicama, ali ne i kroz zvučnike, problem je nizvodno od audio mehanizma (hardver zvučnika ili izlazni put). Ako je isti kanal mrtav iu slušalicama, vjerojatnije je da je u pitanju softver ili audio kodek logičke ploče.</p>

<p>Možete i otvoriti <strong>Glazba</strong> ili QuickTime, pustite nešto i prebacite ravnotežu oštro ulijevo, a zatim oštro udesno. Ako se zvuk jasno kreće između kanala, oba zvučnika su živa i to je isključivo problem postavki.</p>

<h2>Ponovno pokrenite Core Audio</h2>

<p>macOS usmjerava sav zvuk kroz <strong>coreaudiod</strong> procesuirati. Nakon velikog ažuriranja, njegovo se stanje može zaglaviti — izlazi nestaju, kanali padaju ili se glasnoća ponaša čudno. Ponovno pokretanje je sigurno i prisiljava macOS da ponovno izgradi audiograf:</p>

<ul>
<li>Otvoreno <strong>Terminal</strong> (Aplikacije &gt; Utilities).</li>
<li>trčanje: <code>sudo killall coreaudiod</code></li>
<li>Unesite svoju lozinku. Audio demon se automatski ponovno pokreće unutar sekunde ili dvije.</li>
</ul>

<p>Ništa se ne briše — ovo samo ponovno pokreće audio podsustav. Odmah nakon toga ponovno testirajte svoj desni zvučnik.</p>

<h2>Ispravno ponovno pokrenite sustav, a zatim pokušajte u sigurnom načinu rada</h2>

<p>Potpuno ponovno pokretanje uklanja prolazne audio greške koje killall neće. Ako je kanal i dalje mrtav, pokrenite se <strong>siguran način rada</strong>, koji učitava minimalni sustav i preskače audio proširenja trećih strana i stavke za prijavu:</p>

<ul>
<li><strong>Jabučni silicij:</strong> Ugasi se. Držite tipku za uključivanje dok se ne pojavi "Učitavanje opcija pokretanja". Odaberite svoj disk, a zatim držite <strong>Shift</strong> i kliknite "Nastavi u sigurnom načinu rada."</li>
<li><strong>Intel:</strong> Ponovno pokrenite i držite <strong>Shift</strong> dok se ne pojavi prozor za prijavu.</li>
</ul>

<p>Ako oba zvučnika rade u sigurnom načinu rada, audio upravljački program treće strane, virtualni uređaj ili uslužni program na traci izbornika instaliran prije ažuriranja u sukobu je s Tahoeovim novim audio skupom. Pokrenite se u normalu i uklonite ili ažurirajte nedavno instalirani audio softver (snimači zaslona, ​​aplikacije za sastanke i kextovi za usmjeravanje zvuka česti su krivci).</p>

<h2>Resetiraj NVRAM (samo Intel Macs)</h2>

<p>Na Intel Mac, postavke zvuka i zvučnika nalaze se u NVRAM/PRAM memoriji, a zastarjela vrijednost može preživjeti ažuriranje. Resetirajte ga: isključite, zatim uključite i odmah držite <strong>Option + Command + P + R</strong> oko 20 sekundi, puštajući Mac da se jednom ponovno pokrene. Ovo nije primjenjivo na Apple Silicon Mac - oni upravljaju time automatski, pa preskočite ako ste na računalu serije M.</p>

<h2>Ponovno ažurirajte — i provjerite postoji li točka</h2>

<p>Rana izdanja bilo koje veće macOS verzije isporučuju se s pogreškama audio drajvera koje se kasnije popravljaju. Zaputi se <strong>Postavke sustava &gt; Općenito &gt; Ažuriranje softvera</strong> i instalirajte bilo koje izdanje Tahoe točke na čekanju (14.x.1, 14.x.2, itd.). Ako postoji dopunsko ažuriranje, ono se često bavi upravo tim audio regresijama nakon ažuriranja.</p>

<h2>Kada je istinski hardverski</h2>

<p>Ako sigurni način rada, ponovno pokretanje Core Audio i čista ponovna instalacija ne uspiju - a isti kanal je mrtav u slušalicama - možda tražite hardversku grešku. Vrijeme s ažuriranjem može biti slučajno; pojačala zvučnika i audio kodeci ne rade. Trči <strong>Apple dijagnostika</strong> (isključite, zatim držite tipku za napajanje na Apple Siliconu i odaberite Dijagnostika ili držite <strong>D</strong> na Intelu pri pokretanju). Ako označi audio komponentu, kontaktirajte <strong>Apple podrška</strong> ili ovlašteni serviser. Ne trošite novac na softver za pregorjeli zvučnik.</p>

<blockquote>Kratko pravilo: ako se zvuk ispravno pomiče s klizačem ravnoteže, oba su zvučnika fizički u redu i vaš je popravak u softveru. Ako se nikada ne pomakne na mrtvu stranu, sumnjate na hardver.</blockquote>

<h2>Gdje softver za glasnoću odgovara (a gdje ne)</h2>

<p>Da budemo jasni: mrtav kanal zvučnika nije nešto što popravlja aplikacija za glasnoću — gore navedene provjere vaš su put. Ipak, nakon što vaš zvuk ponovno bude zdrav, macOS još uvijek nema nešto što Windows ima godinama: pravi mikser glasnoće po aplikaciji. Ako ste se našli kako kopate po postavkama zvuka jer je jedna aplikacija radila dok je druga bila pretiha, mikser na traci izbornika poput <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> omogućuje vam postavljanje neovisne glasnoće, isključivanje zvuka, pa čak i pojačavanje po aplikaciji bez diranja u ravnotežu vašeg sustava. To je praktičan alat za svakodnevno miješanje, a ne popravak problema u ovom članku.</p>

<h2>Kratka verzija</h2>

<ul>
<li>Središte <strong>Ravnoteža</strong> klizač — po izlaznom uređaju.</li>
<li>Testirajte sa slušalicama za izolaciju hardvera.</li>
<li>Trči <code>sudo killall coreaudiod</code>, zatim ponovno pokrenite.</li>
<li>Pokušajte <strong>siguran način rada</strong> uhvatiti sukobe vozača.</li>
<li>Resetirajte NVRAM na Intelu; instalirajte bilo koje izdanje Tahoe točke.</li>
<li>Još mrtav u slušalicama? Pokrenite Apple Diagnostics i nazovite Apple.</li>
</ul>

<p>Nakon što se vaši zvučnici vrate u normalu, ako je žongliranje glasnoćom po aplikaciji svakodnevna smetnja, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodaje mikser macOS koji je uvijek nedostajao — 14,99 €, jednokratno, u sandboxu, bez upravljačkih programa.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods zapeo na pola glasnoće na vašem Mac? Evo popravka",
    description: "Zašto se AirPods spaja na vaš Mac na pola glasnoće - obično Bluetooth kodek prelazi na hands-free profil mikrofona - plus popravke ponovnog uparivanja i kako zauvijek podići razinu.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>AirPods obično pada na pola glasnoće na Mac jer ih je macOS prebacio s visokokvalitetnog A2DP audio profila na niskokvalitetni handsfree (HFP) profil — onaj napravljen za korištenje mikrofona za telefonske pozive. Taj način ograničava izlaz i kvalitetu. Popravite to tako da Mac vratite na zvuk samo za slušalice, a zatim pojačajte razinu da ostane tamo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Zapeo na pola glasnoće na vašem Mac? Evo popravka" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto se to događa: prekidač kodeka</h2>

<p>Bluetooth audio uređaji poput AirPods rade u jednom od dva načina. Kada samo slušate, macOS koristi A2DP — puni stereo, puna glasnoća, čista kvaliteta. Ali u trenutku kada aplikacija želi vaš mikrofon, macOS prebacuje cijelu vezu na HFP (Hands-Free Profile). HFP je kodek za dvosmjernu telefoniju. Zvuči tanko, mono i osjetno tiše jer je dizajnirano za glasovne pozive, a ne za glazbu.</p>

<p>Problem je u tome što macOS često ostaje zaglavljen u HFP-u čak i nakon što je aplikacija koja je uhvatila mikrofon gotova — ili se prebacuje u nju čim otvorite Zoom, FaceTime, Teams, Discord ili karticu preglednika s dozvolom za mikrofon. Dakle, vaši AirPods zvuče kao da su na "pola glasnoće" ne zato što se klizač za glasnoću pomaknuo, već zato što je cijeli audio profil smanjen ispod vas.</p>

<p>Prepoznat ćete to: zvuk iznenada postaje tih i prigušen, AirPods se dvaput pojavljuje u vašim postavkama zvuka (jednom kao izlaz, jednom kao mikrofon), a pojačavanje glasnoće sustava do kraja jedva pomaže.</p>

<h2>Zaobilazna rješenja ponovnog uparivanja i kodeka</h2>

<p>Ovo su prvi pošteni koraci. Prođite kroz njih redom - jedan od prvih obično to riješi.</p>

<ul>
<li><strong>Promijenite ulazni uređaj.</strong> Otvorite Postavke sustava → Zvuk → Ulaz i odaberite ugrađeni mikrofon svog Mac umjesto AirPods. Ovo sprječava macOS da drži AirPods u HFP modu, tako da se izlaz može vratiti na punu A2DP kvalitetu. Ovo je najučinkovitije pojedinačno rješenje.</li>
<li><strong>Isključite i uključite Bluetooth.</strong> Brzo resetiranje veze često ponovno čisti A2DP, posebno ako je AirPods zapeo nakon završetka poziva.</li>
<li><strong>Ponovno spojite AirPods.</strong> Zatvorite kućište, pričekajte nekoliko sekundi, ponovno ga otvorite u blizini Mac i ponovno ih odaberite kao izlazni uređaj.</li>
<li><strong>Zatvorite aplikaciju koja je preuzela mikrofon.</strong> Potpuno zatvorite Zoom, Teams, Discord ili tu karticu preglednika. Neke aplikacije drže sesiju mikrofona otvorenom u pozadini i prikvače HFP dok ne nestanu.</li>
<li><strong>Ponovno uparivanje od nule.</strong> Uklonite AirPods u postavkama sustava → Bluetooth (kliknite gumb za informacije → Zaboravi ovaj uređaj), zatim ponovno uparite. Ovo briše oštećeno pregovaranje profila koje samo prebacivanje neće popraviti.</li>
<li><strong>Resetirajte AirPods.</strong> S njima u otvorenom poklopcu kućišta, držite gumb za postavljanje na stražnjoj strani dok svjetlo ne počne treperiti žuto, a zatim bijelo. Nakon toga ponovno uparite. Ovo je nuklearna opcija za neobičnost na razini firmvera.</li>
<li><strong>Ažurirajte macOS i AirPods firmware.</strong> Apple je isporučio Bluetooth audio popravke u točkastim izdanjima. AirPods firmver se tiho ažurira kada se pune u blizini povezanog uređaja — stoga ih ostavite u kućištu blizu svog Mac preko noći.</li>
</ul>

<blockquote><p>Uzorak na koji treba obratiti pažnju: ako glasnoća padne čim se pridružite pozivu i oporavi se kada poziv završi, to je HFP prekidač - a ne pokvaren zvučnik ili greška u postavkama.</p></blockquote>

<h2>Zašto popravci ne vrijede uvijek</h2>

<p>Evo frustrirajućeg dijela. Čak i nakon ponovnog uparivanja, macOS će rado prebaciti vaš AirPods natrag u tihi način rada bez ruku sljedeći put kada bilo koja aplikacija dodirne mikrofon. Ne možete trajno onemogućiti to ponašanje u postavkama sustava — Apple to tretira kao automatsko. Tako da završite ponavljajući trik s ulaznim uređajem nekoliko puta dnevno, i svaki trenutak kada vaš AirPods bude u pozivu ili aplikaciji koja je gladna mikrofona, oni su opet ograničeni na tu nižu razinu.</p>

<p>Postoji i drugi, zaseban problem koji ljudi povezuju s ovim: neke su aplikacije samo tiše od drugih pri maksimalnoj glasnoći sustava. Podcast player ili kartica preglednika mogu se nalaziti znatno ispod onoga što vaše uši žele, čak i kada AirPods pokreće čisti A2DP. macOS vam daje jedan klizač za glasnoću za sve i nema kontrole po aplikaciji, tako da ne postoji izvorni način za ponovno pokretanje jedne tihe aplikacije.</p>

<h2>Podignite razinu - i zadržite je tamo</h2>

<p>Ovo je mjesto gdje mikser glasnoće po aplikaciji zaslužuje svoje mjesto. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aplikacija s trakom izbornika za macOS koja svakoj pokrenutoj aplikaciji daje vlastiti neovisni klizač glasnoće — uključujući pojačanje iznad 100%. Dakle, kada se vaš AirPods vrati s poziva na nižoj učinkovitoj razini ili je određena aplikacija jednostavno pretiha, povučete tu aplikaciju preko normalnog stropa i ona ostaje tamo.</p>

<p>Konkretno, to znači:</p>

<ul>
<li><strong>POJAČANJE glasnoće po aplikaciji.</strong> Gurnite tihu aplikaciju iznad standardnog maksimuma umjesto da se naprežete da je čujete na "punoj" glasnoći sustava.</li>
<li><strong>Profili volumena.</strong> Spremite niz razina — poboljšani preglednik, tiša glazba, glasni videopozivi — i promijenite cijeli raspored jednim klikom kako se ne biste ponovno prilagođavali nakon svakog ponovnog povezivanja.</li>
<li><strong>Brzo prebacivanje izlaza.</strong> Skočite između AirPods, zvučnika prijenosnog računala i vanjskog DAC-a s trake izbornika bez kopanja po postavkama sustava, što pomaže kada forsirate novo pregovaranje o profilu.</li>
<li><strong>Isključivanje zvuka i automatsko smanjivanje zvuka po aplikaciji.</strong> Utišajte jednu aplikaciju bez dodirivanja ostalih i pustite medije da se automatski isključe kada se pokrene nešto važnije.</li>
</ul>

<p>Vrijedno je razjasniti što ovo radi, a što ne. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> neće natjerati macOS da ostane u A2DP — trik s ulaznim uređajem iznad i dalje je vaš alat za sam kodek. Ono što čini je da vam vraća glasnoću koju je ukrao prelazak na stariju verziju, po aplikaciji, tako da je tiha AirPods sesija ili tvrdoglavo mekana aplikacija popravak jednim povlačenjem umjesto izgubljen slučaj. A budući da je to Mac App Store aplikacija u zaštićenom okruženju, nema audio upravljačkog programa za instalaciju, nema DMG, nema proširenja kernela — samo radi.</p>

<h2>Kratka verzija</h2>

<p>Ako vaš AirPods zvuči tiho i prigušeno na vašem Mac, isključite svoj ulazni uređaj sa AirPods kako biste ih prisilili da izađu iz načina rada bez upotrebe ruku i ponovno uparite ako to ne uspije. Kada razina i dalje ne dosegne željenu razinu — ili je jedna aplikacija jednostavno preslaba — posegnite za povećanjem po aplikaciji pa ga postavite jednom i nastavite dalje.</p>

<p>Umorni ste od borbe s klizačem glasnoće svaki put kada odgovorite na poziv? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> — jednokratnih 14,99 €, bez pretplate, bez upravljačkih programa — i dajte svakoj aplikaciji vlastiti volumen.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac Glasnoća se stalno resetira na Tahoeu? Kako to zauvijek zaključati",
    description: "Od macOS Tahoe, mnogi Mac iznenada sami mijenjaju ili resetiraju svoju glasnoću. Evo zašto se to događa, kako zaustaviti ugrađene uzroke i kako zaključati fiksni volumen po aplikaciji tako da ostane na mjestu.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Ako se glasnoća vašeg Mac stalno poništava od macOS Tahoe, rješenje je uklanjanje automatskih regulatora: onemogućite prigušivanje zvuka i "Reproduciraj zvuk pri pokretanju", resetirajte postavke zvuka i ponovno čisto spojite bilo koji Bluetooth izlaz. Za razine po aplikaciji koje skaču okolo, zaključajte fiksnu glasnoću po aplikaciji s mikserom tako da se više nikada ne mijenja.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Glasnoća se stalno resetira na Tahoeu? Kako to zauvijek zaključati" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto se vaš volumen mijenja sam od sebe nakon Tahoea</h2>

<p>Glasnoća koja se pomiče bez da je dodirnete čini se kao kvar na hardveru, ali gotovo uvijek softver umjesto vas odlučuje o vašoj razini. macOS ima nekoliko automatskih ponašanja koja tiho guraju ili poništavaju izlaz, a Tahoeove promjene audio-skupa učinile su neke od njih uočljivijima. Prije nego pretpostavite da su aplikacija ili Mac pokvareni, dobro je znati koji točno sustav hvata klizač.</p>

<ul>
<li><strong>Prigušivanje zvuka:</strong> macOS smanjuje drugi zvuk kada misli da svira nešto važnije (Siri, najave pristupačnosti, obavijesti). Nakon što okidač završi, razina se ponekad ne vrati do kraja.</li>
<li><strong>Bluetooth rukovanje resetira:</strong> AirPods i drugi Bluetooth uređaji ponovno dogovaraju glasnoću pri povezivanju. Ponovno povezivanje usred sesije može prebaciti izlaz na zadanu ili na puno glasniju/tišu razinu.</li>
<li><strong>Prebacivanje izlaznog uređaja:</strong> Kada odspojite slušalice, podnožje ili prijeđete na zvučnike monitora, svaki izlaz pamti vlastitu glasnoću. Prebacivanje naprijed-natrag izgleda kao "nasumično" resetiranje.</li>
<li><strong>Zadane postavke po aplikaciji:</strong> Neke aplikacije (preglednici, videoplayeri, alati za konferencije) postavljaju vlastitu dobit pri pokretanju ili kada započne novi stream, nadjačavajući sve što ste imali.</li>
<li><strong>Zvuk pri pokretanju i stanje prijave:</strong> Zvono pri pokretanju i prijava mogu vratiti glasnoću sustava na zadanu razinu koju niste odabrali.</li>
</ul>

<h2>Prvo riješite ugrađene uzroke</h2>

<p>Proradite ih redom. Većina pritužbi na "resetiranje" nestaje nakon što se isključi ducking i Bluetooth.</p>

<ul>
<li><strong>Isključite zvuk pokretanja.</strong> Postavke sustava → Zvuk → uklonite kvačicu <em>Reproduciraj zvuk pri pokretanju</em>. Time se sprječava da zvono pri pokretanju poništi vašu osnovnu razinu.</li>
<li><strong>Smanjite ili onemogućite okidače za spuštanje.</strong> U postavkama sustava → Pristupačnost → Govorni sadržaj i Siri isključite govorne najave koje vam ne trebaju. Manje okidača znači manje trenutaka u kojima macOS smanjuje zvuk i zaboravlja ga vratiti.</li>
<li><strong>Ponovno uparite problematične Bluetooth uređaje.</strong> Uklonite AirPods ili slušalice iz postavki Bluetooth i ponovno ih uparite. Zastarjeli profil čest je uzrok prekidanja volumena pri povezivanju.</li>
<li><strong>Namjerno postavite svaki izlazni uređaj.</strong> Spojite svaki izlaz koji koristite (ugrađeni, monitor, slušalice) i jednom postavite njegovu glasnoću. macOS pohranjuje glasnoću po uređaju, tako da njihovo postavljanje svih uklanja iznenađenje kada se prebacite.</li>
<li><strong>Resetirajte Core Audio ako je zapeo.</strong> Otvorite Terminal i pokrenite <code>sudo killall coreaudiod</code>. Ovo ponovno pokreće audio demon bez ponovnog pokretanja i briše stanje zastoja koje može uzrokovati nestalne razine.</li>
<li><strong>Ažurirajte, a zatim ponovno pokrenite.</strong> Rani Tahoe point izdaje isporučene audio popravke. Provjerite jeste li na najnovijoj verziji i ponovno pokrenite sustav jednom nakon ažuriranja.</li>
</ul>

<p>Ako resetiranje prestane, jedan od gore navedenih bio je vaš krivac. Ako vaš <em>sustav</em> glasnoća je stabilna, ali pojedinačne aplikacije nastavljaju biti glasnije ili tiše od svega ostalog, dosegli ste granicu onoga što ugrađene kontrole mogu učiniti.</p>

<h2>Prava praznina: macOS ne može zaključati glasnoću po aplikaciji</h2>

<p>Evo frustrirajućeg dijela. Windows godinama ima mikser glasnoće po aplikaciji — otvorite ga, povučete klizač jedne aplikacije i on ostaje tamo. macOS ga nikada nije poslao. Postoji točno jedan klizač glasnoće sustava i svaka se aplikacija bori oko njega. Dakle, kada kartica preglednika pusti oglas za automatsku reprodukciju ili videopoziv bude dvostruko glasniji od vaše glazbe, vaša je jedina opcija da ručno pojačate glavnu glasnoću — što je sama petlja "zašto se ovo stalno mijenja" kojoj pokušavate pobjeći.</p>

<blockquote>Klizač sustava je jedan zajednički kotačić. Bez miksera po aplikaciji, "postavi i zaboravi" nemoguće je na skladištu macOS — uvijek će te nešto nadjačati.</blockquote>

<h2>Zaključajte fiksnu glasnoću po aplikaciji pomoću SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dodaje mikser po aplikaciji macOS nedostaje. Živi u vašoj traci izbornika i daje svakoj pokrenutoj aplikaciji vlastiti klizač za glasnoću, neovisno o glavnom. Budući da pamti razinu koju ste postavili za svaku aplikaciju, izravno rješava problem "poništavanja": odlučite jednom i ta se aplikacija svaki put otvara tom glasnoćom.</p>

<ul>
<li><strong>Neovisna glasnoća po aplikaciji:</strong> održavajte glazbu na 40%, a video poziv na 80% u isto vrijeme, bez žongliranja glavnog klizača.</li>
<li><strong>Utišavanje i pojačavanje po aplikaciji:</strong> trenutno utišajte bučnu aplikaciju ili gurnite pretihu aplikaciju preko 100% kada je njezin zvuk slab.</li>
<li><strong>Profili volumena:</strong> spremite postavke za "posao", "igre" ili "fokus" i prebacite cijeli miks jednim klikom.</li>
<li><strong>Automatsko izbjegavanje pod vašim uvjetima:</strong> automatski spušta pozadinske aplikacije kada govorite ili kada je odabrana aplikacija aktivna — umjesto da macOS odlučuje.</li>
<li><strong>Brzo prebacivanje izlaza:</strong> prelazite između zvučnika, slušalica i pratite zvuk s trake izbornika bez zaranjanja u postavke.</li>
</ul>

<p>To je 14,99 € jednokratne kupnje od Mac App Store — bez pretplate, bez upravljačkih programa, bez DMG i bez proširenja kernela. Budući da je u potpunosti zatvoren i distribuiran App Store, ne instalirate naslijeđeni audio kext koji bi Tahoe mogao blokirati pri sljedećem ažuriranju. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> postavlja vaše razine pomoću podržanih API-ja, tako da vaši zapamćeni volumeni prežive ažuriranja i ponovna pokretanja.</p>

<h2>Koji pristup zapravo trebate?</h2>

<p>Ako glasnoća vašeg cijelog sustava skoči, počnite s gore navedenim ugrađenim popravcima — spuštanje, Bluetooth i račun za zvuk pri pokretanju u većini slučajeva. Ako je umjesto toga problem u tome što je jedna aplikacija uvijek neobična ili vam je dosadilo da glavni klizač bude kompromis, mikser po aplikaciji jedini je pravi odgovor. macOS ga neće dodati, pa je alat trake izbornika praktičan put do miksa koji zaista ostaje tamo gdje ste ga stavili.</p>

<p>Umorni ste od jurnjave za klizačem glasnoće na Tahoeu? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> i zaključajte zapamćeni volumen za svaku aplikaciju — 14,99 € jednom, bez pretplata, bez upravljačkih programa.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Upravljajte glasnoćom monitora DAW zasebno od zvuka sustava na Mac",
    description: "macOS nema ugrađeni mikser glasnoće po aplikaciji, tako da vaš DAW i zvukovi sustava dijele istu razinu. Evo kako kontrolirati glasnoću monitora Logic, Ableton ili GarageBand neovisno o pregledniku i obavijestima.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>macOS nema ugrađeni mikser glasnoće po aplikaciji, tako da vaš DAW i sve ostalo dijele jedan klizač sustava. Za postavljanje razine monitora neovisno o preglednicima, Slack i obavijestima potrebna vam je kontrola glasnoće po aplikaciji. Mikser trake izbornika poput <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> daje Logic, Ableton i GarageBand vlastitu glasnoću, odvojenu od zvuka sustava.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Upravljajte glasnoćom svog DAW monitora odvojeno od zvuka sustava na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto jedan klizač glasnoće uništava vaše praćenje</h2>

<p>Kada producirate, vaš DAW samo je jedna od mnogih stvari koje proizvode zvuk. Referentna pjesma se reproducira na kartici preglednika. Slack stižu pingovi. Vodič za YouTube radi na drugom monitoru. Na Windows, Volume Mixer vam omogućuje da sve to neovisno uravnotežite. Na macOS, Apple nikada nije isporučio ekvivalent - tipke za glasnoću i klizač trake izbornika se pomiču <em>sve</em> odjednom.</p>

<p>To stvara pravi problem za svakoga tko miješa na uho. Odaberete ugodnu razinu praćenja u Logic, a zatim se oglasi obavijest na istoj razini i odsvira vam uši. Ili ste smanjili sustav kako biste zaštitili svoj sluh tijekom glasnog prolaza, a sada je vaša referentna staza pretiha za usporedbu. Vaša referenca za praćenje više nije stabilna, a stabilna referenca je cijela poanta miješanja.</p>

<blockquote>Praćenje na dosljednoj razini jedna je od rijetkih navika koja mjerljivo poboljšava vaše mikseve. Ako vas zvukovi sustava stalno tjeraju da pomičete glavni klizač, gubite tu dosljednost.</blockquote>

<h2>Što zapravo znači "odvojeni DAW volumen".</h2>

<p>Postoje dvije različite stvari koje proizvođači ovdje spajaju i vrijedi ih razdvojiti:</p>

<ul>
<li><strong>Sučelje / glavna izlazna razina</strong> — hardverski gumb na audio sučelju ili kontroleru monitora. Ovo postavlja vašu apsolutnu glasnoću slušanja i trebala bi ostati na mjestu nakon kalibracije.</li>
<li><strong>Količina softvera po aplikaciji</strong> — koliko je glasna svaka aplikacija <em>prije</em> dostiže taj izlaz. To je ono što macOS nedostaje. Omogućuje vam da održite DAW na jedinstvu dok skrećete Chrome, glazbu ili zvukove obavijesti do razine kreveta ispod njega.</li>
</ul>

<p>Želiš drugu. Cilj nije utišati vaš DAW — već utišati sve ostalo u odnosu na njega, tako da DAW ostane vaš najglasniji, najdosljedniji izvor, a smetnje tiho stoje u pozadini.</p>

<h2>Kako to učiniti s mikserom po aplikaciji</h2>

<p>Mikser trake izbornika kao što je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> navodi svaku aplikaciju koja trenutno reproducira zvuk i svakoj daje vlastiti klizač. Tijek rada za proizvođača izgleda ovako:</p>

<ul>
<li><strong>Jednom kalibrirajte svoje sučelje.</strong> Postavite svoje audio sučelje ili kontroler monitora na udobnu, ponovljivu referentnu razinu i ostavite je. Ovo je vaše fiksno sidro.</li>
<li><strong>Postavite svoj DAW na 100%.</strong> U mikseru ostavite Logic, Ableton ili GarageBand na punoj glasnoći softvera tako da prolazi kroz jedinicu. Glavni fader vašeg DAW još uvijek radi fino miksanje.</li>
<li><strong>Sve ostalo povucite dolje.</strong> Spustite Chrome, Safari, glazbu i Slack na nižu razinu — recimo 40–60% — tako da referentne pjesme i poruke budu ispod vašeg miksa umjesto da mu se natječu.</li>
<li><strong>Utišajte bučne stvari.</strong> Isključivanje zvuka po aplikaciji omogućuje vam potpuno utišavanje preglednika ili aplikacije za chat bez dodirivanja vašeg lanca nadzora. Jedan klik i vaš DAW nastavlja svirati netaknut.</li>
</ul>

<p>Budući da se klizač DAW nikada ne pomiče, vaša referenca za praćenje ostaje čvrsta tijekom cijele sesije. Možete pokrenuti referentnu pjesmu za brzi A/B, zatim je utišati, a razina vašeg miksa neće se pomaknuti ni za decibel.</p>

<h2>Poticanje tihe aplikacije umjesto odbijanja drugih</h2>

<p>Ponekad problem ide u suprotnom smjeru. Grubo demo odbijanje, glasovni zapis ili tiha referenca reproduciraju se daleko ispod razine vaše sesije. Pojačavanje sučelja da biste ga čuli znači da je sve ostalo sada preglasno. Po aplikaciji <strong>povećanje glasnoće</strong> omogućuje vam da gurnete jednu tihu aplikaciju iznad 100% kako bi odgovarala vašoj radnoj razini — bez dodirivanja vašeg kalibriranog izlaza. To je komad koji Windows' mikser nikad nije imao i jedan od korisnijih alata kada slušate materijal izvan svog DAW.</p>

<h2>Profili za različite vrste sesija</h2>

<p>Vaša idealna ravnoteža nije ista za svaki zadatak. Praćenje, miksanje i ležerno slušanje žele različitu mješavinu razina aplikacija. Profili glasnoće omogućuju vam da spremite postavku i odmah je pozovete:</p>

<ul>
<li><strong>Miješanje:</strong> DAW na 100%, preglednik i Glazba niski, chat isključen.</li>
<li><strong>Referentno slušanje:</strong> Glazba ili aplikacija za strujanje gore, DAW dolje.</li>
<li><strong>Pozivi/suradnja:</strong> aplikacija za konferencije gore, DAW se povukao unatrag tako da ne ulazi u poziv.</li>
</ul>

<p>Promjena profila je bolja od ručnog podešavanja pet klizača svaki put kad promijenite brzinu.</p>

<h2>Auto-ducking i brzo prebacivanje izlaza</h2>

<p>U studiju su važne još dvije stvari. <strong>Automatsko spuštanje</strong> može automatski isključiti pozadinske aplikacije kada prioritetni izvor govori ili svira, tako da se poziv ili važan zvuk uvijek prekidaju. I <strong>brzo prebacivanje izlaza</strong> s trake izbornika omogućuje vam prebacivanje između sučelja, monitora i slušalica bez kopanja po postavkama sustava — stalni zadatak kada provjeravate miks na različitim sustavima.</p>

<h2>Zašto ne virtualni audio drajver?</h2>

<p>Neki alati za usmjeravanje to rješavaju instaliranjem virtualnog audio upravljačkog programa na razini jezgre. Oni su moćni, ali teški: mogu se pokvariti nakon ažuriranja macOS, dodati latenciju i zahtijevati duboka dopuštenja sustava. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nalazi se u sandboxu i isporučuje se kroz Mac App Store — bez upravljačkih programa, bez DMG, bez podešavanja agregatnog uređaja. Posebno za kontrolu razine po aplikaciji, to je daleko jednostavniji put od ponovnog projektiranja vašeg usmjeravanja zvuka.</p>

<p>Jeste li spremni održati razinu praćenja stabilnom dok sve ostalo ostaje na svom mjestu? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> za jednokratnih 14,99 € i dajte svom DAW vlastiti volumen.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Jednostavnija Audio Hijack alternativa za količinu po aplikaciji na Mac",
    description: "Ako želite samo neovisnu glasnoću po aplikaciji na macOS, Audio Hijack je pretjeran. Ovdje je lakša, jeftinija alternativa za izborničku traku koja pojačava glasnoću po aplikaciji, utišava i pojačava bez usmjeravanja zvuka.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Ako sve što želite je neovisna glasnoća po aplikaciji na macOS, Audio Hijack je više alata nego što vam treba. To je profesionalni paket za usmjeravanje i snimanje zvuka (oko 79 USD) napravljen za snimanje, efekte i grafikone sesija. Za jednostavno isključivanje jedne i druge aplikacije, lagani mikser na traci izbornika <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je brži, jeftiniji i uvijek spreman.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — jednostavnija Audio Hijack alternativa za količinu po aplikaciji na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto ljudi uopće posežu za Audio Hijack</h2>

<p>macOS nema ugrađeni mikser glasnoće po aplikaciji. Windows već godinama ima jedan u svom Volume Mixeru, ali na Mac tipke za glasnoću i klizač trake izbornika pomiču samo jednu stvar: master sustava. Ne postoji način da prva strana kaže "zadrži Spotify na 40%, ali ostavi moj videopoziv na 100%."</p>

<p>Pa ljudi traže zaobilazno rješenje i nailaze na Audio Hijack. to <em>može</em> napraviti glasnoću po aplikaciji, jer može presresti i obraditi zvuk iz bilo koje pojedinačne aplikacije. Ali ta je mogućnost nuspojava onoga za što je zapravo dizajniran: snimanje zvuka iz aplikacija i hardvera, ulančavanje efekata, usmjeravanje između virtualnih uređaja i izgradnja cjevovoda sesije za višekratnu upotrebu. U tome je uistinu izvrstan. To je samo težak odgovor na lagano pitanje.</p>

<h2>Gdje Audio Hijack postaje pretjerano</h2>

<p>Nekoliko stvari frustrira ljude koji su htjeli samo klizač za glasnoću:</p>

<ul>
<li><strong>Cijena.</strong> Audio Hijack stoji oko 79 USD. To je pošteno za studio za snimanje u aplikaciji; puno je za odbijanje kartice preglednika.</li>
<li><strong>Mora nastaviti trčati.</strong> Njegova obrada po aplikaciji radi samo dok je aplikacija otvorena i relevantna sesija aktivna. Prekinite ga i vaši će se volumeni vratiti. Zadržavate punu audio radnu stanicu samo da biste držali klizač na mjestu.</li>
<li><strong>Razmišljanje temeljeno na sesiji.</strong> Gradite sesije s blokovima i vezama. Moćan za snimanje, ali to je puno konceptualnih troškova kada je vaš cilj "ova aplikacija tiša, ona glasnija".</li>
<li><strong>Sučelje je duboko.</strong> Efekti, usmjeravanje, mjerači, blokovi ožičenja — bogata površina koju ćete uglavnom zanemariti ako nikad ništa ne snimite.</li>
</ul>

<blockquote>Osnovno pravilo: ako želite <em>rekord ili ruta</em> audio, Audio Hijack zarađuje svoju cijenu. Ako samo želiš <em>ravnoteža</em> zvuka između aplikacija, plaćate radionicu kada vam je trebao gumb.</blockquote>

<h2>Jednostavnija alternativa: mikser glasnoće na traci izbornika</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> preuzima jedan posao zbog kojeg je većina ljudi zapravo došla i radi samo to. Živi u vašoj traci izbornika. Kliknite ikonu i dobit ćete popis uživo svake aplikacije koja trenutno reproducira zvuk, svaka sa svojim klizačem. Povucite Spotify na 30%, ostavite svoj poziv na 100%, potpuno isključite Slack — gotovo, nema sesije za izgradnju.</p>

<p>Što pokriva:</p>

<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — svaki izvor zvuka dobiva vlastiti klizač, podesiv u stvarnom vremenu.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — utišajte jednu bučnu aplikaciju jednim klikom bez dodirivanja bilo čega drugog.</li>
<li><strong>Povećanje glasnoće po aplikaciji</strong> — pritisnite tihu aplikaciju <em>iznad</em> 100% kada je vlastiti max još uvijek premekan. Ovo je dio koji klizač sustava nikada ne može učiniti.</li>
<li><strong>Profili volumena</strong> — spremite cijeli miks (tiha glazba, glasni pozivi, utišane obavijesti) i pozovite ga jednim klikom za određeni kontekst.</li>
<li><strong>Automatsko spuštanje</strong> — automatski priguši pozadinski zvuk kada započne nešto važnije, tako da poziv ili video ne budu zakopani ispod vašeg popisa za reprodukciju.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — skakanje između slušalica, zvučnika i drugih izlaza iz istog izbornika.</li>
</ul>

<h2>Praktično: dobivanje kontrole po aplikaciji za manje od minute</h2>

<p>Razlika u postavljanju je cijela poanta. S alatom za usmjeravanje izradili biste sesiju, dodali izvorni blok, spojili ga i omogućili da aplikacija radi. Evo u biti:</p>

<ul>
<li>Instalirajte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> iz Mac App Store.</li>
<li>Reproducirajte zvuk u nekoliko aplikacija kako bi se pojavile na popisu.</li>
<li>Pritisnite ikonu trake izbornika i povucite klizač svake aplikacije prema ukusu.</li>
<li>Po želji spremite tu mješavinu kao profil ili pojačajte pretihu aplikaciju preko 100%.</li>
</ul>

<p>Budući da se distribuira putem Mac App Store, zaštićeno je i instalira se kao svaka normalna aplikacija — ne <code>.dmg</code> za povlačenje, bez proširenja kernela, bez audio drajvera za odobravanje u sigurnosnim postavkama i ništa što treba ponovno odobriti nakon ažuriranja macOS. Posljednja točka je važna: mikseri temeljeni na upravljačkim programima povijesno se kvare na nadogradnji OS-a i zahtijevaju ponovnu instalaciju komponente na razini sustava. Aplikacija App Store u zaštićenom okruženju izbjegava cijelu tu kategoriju održavanja.</p>

<h2>Koju odabrati?</h2>

<p>Budite iskreni u vezi posla. Odaberite <strong>Audio Hijack</strong> ako trebate snimiti zvuk aplikacije ili hardvera, primijeniti efekte u stvarnom vremenu ili izgraditi grafikone usmjeravanja između virtualnih uređaja. To je njegov domaći teren i tamo vrijedi svaki dolar.</p>

<p>Odaberite namjenski mikser trake izbornika ako je vaša stvarna potreba "dopustite mi da postavim glasnoću svake aplikacije neovisno." Jednom ćete potrošiti 14,99 € umjesto ~79 $, preskočite izgradnju sesije i dobit ćete pojačanje, isključivanje zvuka, profile i prigušivanje na ploči koju otvorite s trake izbornika. Nema značajki snimanja koje nikada nećete dodirnuti, nema radne stanice koja radi u pozadini da drži klizač na mjestu.</p>

<p>Većina ljudi koji su isprobali Audio Hijack za balansiranje glasnoće rješavali su mali problem velikim alatom. Ako ste to vi, mali alat bolje pristaje — i košta djelić više.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> za 14,99 €, jednokratno — glasnoća po aplikaciji, pojačavanje, isključivanje zvuka, profili i automatsko smanjivanje, izravno s vaše trake izbornika.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D Alternativa: Volumen po aplikaciji bez nadutosti (Mac)",
    description: "Ako ste koristili Boom 3D uglavnom za pojačavanje zvuka, ali ste stvarno željeli kontrolu glasnoće po aplikaciji, SoundDial je manja Mac alternativa: neovisna glasnoća po aplikaciji, utišavanje i pojačavanje po aplikaciji, jednokratna cijena, bez EQ-a za cijeli sustav ili upravljačkih programa.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Ako ste posegnuli za Boom 3D za pojačavanje glasnoće, ali zapravo želite kontrolirati svaku aplikaciju zasebno, želite drugačiji alat. Boom 3D je pojačivač glasnoće i EQ za cijeli sustav. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je fokusirani mikser glasnoće po aplikaciji: neovisna glasnoća, isključivanje zvuka i pojačanje za svaku aplikaciju, jednokratno 14,99 €, bez EQ-a, bez drivera.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D alternativa: Količina po aplikaciji bez prenapuhanosti (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Što Boom 3D zapravo radi (a što ne radi)</h2>
<p>Boom 3D je izgrađen oko tri stvari: pojačanja glasnoće u cijelom sustavu, 31-pojasnog ekvilizatora i 3D "surround" efekata. To se odnosi na one <em>sve</em> vaš Mac svira odjednom. To je doista korisno ako vam je cilj glasnije prijenosno računalo ili krivulja basa koja vam se sviđa u cijelosti.</p>
<p>Ono za što Boom 3D nije stvoren je tretiranje aplikacija kao neovisnih kanala. Ne postoji čist način da se kaže "Spotify na 40%, moj videopoziv na 100%, a ova kartica preglednika isključena." Njegov klizač pomiče cijeli miks. A budući da instalira audio upravljački program da sjedi na putu signala, on dotiče vaš sustav na nižoj razini nego što to čini uslužni program u sandboxu. Također je pozicioniran kao plaćeni proizvod s ciklusima nadogradnje, a ne kao mali jednokratni alat.</p>
<blockquote><p>Uobičajena priča: ljudi instaliraju Boom 3D kako bi jednu tihu aplikaciju učinili glasnijom, a onda shvate da je pravi problem u tome što macOS uopće nema mikser glasnoće za svaku aplikaciju.</p></blockquote>

<h2>Nedostatak: macOS nema mikser za glasnoću</h2>
<p>Ovo iznenađuje ljude koji dolaze iz Windows. Windows godinama ima mikser glasnoće za svaku aplikaciju — desnom tipkom miša kliknite zvučnik, postavite razinu svake aplikacije zasebno. macOS ovo jednostavno ne šalje. Dobivate jedan glavni volumen i svaki unutarnji klizač koji svaka aplikacija izloži. Ne postoji način na razini OS-a za balansiranje Slack i YouTube kartice protiv igre.</p>
<p>Dakle, kada glazbena aplikacija zagluši vaš poziv, vaše jedine izvorne opcije su grube: smanjite master (koji sve utišava) ili kopajte po vlastitim postavkama svake aplikacije nadajući se da ima kontrolu glasnoće. Boom 3D također ne popunjava tu prazninu — čini cijeli miks glasnijim, a ne svaku aplikaciju.</p>

<h2>Gdje SoundDial odgovara</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je mikser koji nedostaje. Živi u vašoj traci izbornika i daje svakoj pokrenutoj aplikaciji vlastiti red s vlastitim klizačem. To je ključna razlika u odnosu na Boom 3D: umjesto jednog globalnog učinka, dobivate kontrolu po izvoru.</p>
<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — postavite Spotify na 30% dok vaš video poziv ostaje na 100%.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — trenutno utišajte jednu bučnu aplikaciju bez dodirivanja bilo čega drugog.</li>
<li><strong>Pojačanje po aplikaciji</strong> — ako vam se svidio Boom 3D-ov trik glasnije od 100%, SoundDial zadržava to, ali cilja na jednu aplikaciju umjesto na cijeli sustav. Tihe aplikacije same bivaju gurnute preko svoje normalne granice.</li>
<li><strong>Profili volumena</strong> — spremite raspored miksera (npr. "igranje", "sastanak," "glazba") i pozovite ga jednim klikom umjesto ponovnog balansiranja klizača svaki put.</li>
<li><strong>Automatsko spuštanje</strong> — automatski priguši pozadinski zvuk kada započne nešto važno, tako da poziv ili znak za igru ne budu skriveni pod glazbom.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — skakanje između slušalica, zvučnika i drugih izlaza iz istog izbornika.</li>
</ul>
<p>Ono što SoundDial namjerno ne radi je ostatak širenja značajki Boom 3D. Nema 31-pojasnog EQ-a, nema faux-surround obrade, nema lanca efekata za cijeli sustav. Ako želite EQ razine masteringa, Boom 3D ili namjenski audio paket pravi su izbor. Ako je ono zbog čega ste zapravo neprestano otvarali Boom 3D <em>volumen</em>, ta površina je nadutost koju plaćate nositi.</p>

<h2>Pojačanje, bez vozača</h2>
<p>Pitanje o "pojačanju" zaslužuje izravan odgovor, jer to je obično razlog zašto korisnici Boom 3D kupuju alternative. Boom 3D-ovo pojačanje je globalno i temelji se na vozaču. SoundDial-ovo pojačanje je po aplikaciji i radi unutar Appleovog modela sandboxa za aplikacije — distribuira se kroz Mac App Store, tako da nema zasebnog programa za instalaciju, nema upravljačkog programa na razini kernela i nema preostalih komponenti sustava koje bi se kasnije deinstalirale. Dobivate ishod "učini ovu jednu tihu aplikaciju glasnijom" bez prepuštanja vozaču kontrole nad cijelim audio putem.</p>

<h2>Cijena: jednokratna naspram stalne</h2>
<p>Boom 3D je aplikacija koja se plaća s vlastitom nadogradnjom i modelom licenciranja, a cijene se razlikuju ovisno o platformi i verziji. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jedna jednokratna kupnja za 14,99 € — kupite jednom, zadržite, nema pretplate i nema ponovne kupnje po verziji kako bi mikser nastavio raditi. Za uslužni program koji ćete ostaviti da radi na traci izbornika svaki dan, paušalna cijena obično stari bolje od proizvoda koji morate stalno kupovati.</p>

<h2>Koju odabrati?</h2>
<ul>
<li><strong>Odaberite Boom 3D</strong> ako je vaša stvarna potreba ozbiljan ekvilizator i audio efekti za cijeli sustav, a ne smeta vam audio drajver u miksu.</li>
<li><strong>Odaberite SoundDial</strong> ako želite ono što Windows korisnici uzimaju zdravo za gotovo — pravi mikser glasnoće po aplikaciji — plus ciljano pojačanje, profile i automatsko smanjivanje, po jednokratnoj cijeni i bez instaliranja upravljačkih programa.</li>
</ul>
<p>Većina ljudi koji odbijaju Boom 3D spadaju u drugu skupinu. Nisu htjeli ugađati frekvencije; htjeli su preglednik tiši od poziva. Upravo je to posao za koji je SoundDial stvoren.</p>

<p><strong>Želite kontrolu glasnoće po aplikaciji na svom Mac bez pretrpavanja EQ-a ili pretplate?</strong> <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> — 14,99 € jednokratno, u zaštićenom okruženju, bez upravljačkih programa, a svaka aplikacija dobiva vlastiti klizač.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Kako utišati sve osim jedne aplikacije na vašem Mac",
    description: "macOS nema mikser glasnoće po aplikaciji, pa je za utišavanje svake aplikacije osim jedne potreban pomoćnik. Evo kako čuti samo svoj poziv, stream ili igru ​​dok je sve ostalo utišano.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>macOS nema ugrađeni način za isključivanje pojedinačnih aplikacija, tako da za slušanje samo jedne aplikacije treba vam mikser glasnoće za svaku aplikaciju. Instalirajte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, otvorite svoj mikser na traci izbornika, utišajte sve aplikacije osim one koju želite čuti i ta aplikacija nastavlja s reprodukcijom dok ostale odmah utihnu.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Kako isključiti zvuk svega osim jedne aplikacije na vašem Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto macOS to ne može učiniti sam</h2>
<p>Windows ima Volume Mixer više od desetljeća: desnom tipkom miša kliknite ikonu zvučnika i svaka pokrenuta aplikacija dobiva vlastiti klizač. macOS ovo nikada nije poslao. Tipke za glasnoću na vašem Mac kontroliraju samo jednu stvar, glavnu izlaznu razinu. Kad ugasite sustav, sve zajedno pada. Kad isključite zvuk, sve se isključi.</p>
<p>To je u redu dok nemate pet stvari koje stvaraju buku odjednom. U videopozivu ste, ali kartica preglednika automatski reproducira oglas, Spotify još uvijek radi, igra pinga u pozadini, a Slack zvoni. Vaše jedine izvorne mogućnosti su da zatvorite aplikacije, isključite ih jednu po jednu u vlastitim postavkama svake aplikacije (ako uopće ima tu opciju) ili povučete slušalice. Ništa od toga ne dopušta vam da kažete "zadrži ovo, ušutkaj ostalo".</p>

<h2>Jednostavan način: utišajte ostatak mikserom</h2>
<p>Mikser po aplikaciji nalazi se između vaših aplikacija i vašeg izlaznog uređaja i daje svakoj aplikaciji vlastitu kontrolu glasnoće i isključivanja zvuka. Nakon što jednu pokrenete, izolacija jedne aplikacije traje nekoliko sekundi:</p>
<ul>
<li>Otvorite mikser na traci izbornika. Vidjet ćete popis uživo svake aplikacije koja trenutno proizvodi zvuk.</li>
<li>Pronađite jednu aplikaciju koju želite čuti, svoj poziv, svoj stream, svoju igru.</li>
<li>Isključite sve ostalo. Dodirnite prekidač za isključivanje zvuka pored svake druge aplikacije ili povucite njezin klizač na nulu.</li>
<li>To je to. Jedna aplikacija koju ste ostavili na miru nastavlja svirati punom glasnoćom dok su ostale tihe.</li>
</ul>
<p>sa <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, svaka aplikacija na popisu ima svoj klizač i svoj gumb za isključivanje zvuka, tako da je ovo nekoliko klikova. Nove aplikacije koje se pokreću kasnije automatski se prikazuju, pa ako se zvuk obavijesti pokuša ušuljati, možete ga utišati na licu mjesta bez dodirivanja vaše fokusirane aplikacije.</p>

<blockquote>Trik je u tome što je utišavanje "svega osim jedne" upravo suprotno od utišavanja jedne aplikacije. Ne utišavate svoj Mac, utišavate buku oko stvari do koje vam je zapravo stalo.</blockquote>

<h2>Spremite ga kao profil kako ga ne biste ponavljali</h2>
<p>Ako je ovo postava za kojom često posežete, zastari to raditi svaki put ručno. Recimo da uvijek želite da vaša aplikacija za pozive bude glasna, a sve ostalo isključeno tijekom sastanaka, ili želite da vaš stream bude ispred i u sredini dok igre i preglednici ostanu tihi. Profil količine pohranjuje te točne postavke po aplikaciji i ponovno ih primjenjuje jednim klikom.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> omogućuje vam spremanje profila poput "Sastanak" ili "Samo stream", a zatim se prebacite na njih čim vam zatrebaju. Postavite ga jednom i izdvajanje vaše jedne aplikacije postaje jedna radnja na traci izbornika umjesto posla s pet klizača.</p>

<h2>Pametnija verzija: automatsko utišavanje umjesto potpunog utišavanja</h2>
<p>Ponekad ne želite da druge aplikacije potpuno nestanu, samo želite da se maknu s puta kada počne nešto važnije. To je automatsko spuštanje. Kada vaša prioritetna aplikacija reproducira, pozadinske aplikacije automatski se spuštaju na nisku razinu, a zatim se vraćaju kad se zaustavi.</p>
<p>Ovo je idealno za pozive i streamove. Kad netko počne govoriti, vaša glazba se stiša tako da je možete čuti, a kad poziv završi, glazba se sama vraća. Dobivate ishod "jasno čujte jednu aplikaciju" bez ručnog isključivanja i uključivanja zvuka svaki put kad se situacija promijeni. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> uključuje automatsko utišavanje uz ručni mikser, tako da možete odabrati snažno utišavanje za potpunu tišinu ili utišavanje za mekšu pozadinu.</p>

<h2>Poboljšanje jedne aplikacije koju ste zadržali</h2>
<p>Postoji bonus za izoliranje jedne aplikacije: također je možete učiniti glasnijom nego što vaš Mac inače dopušta. Neke aplikacije, posebno tihi videopozivi ili loše savladani streamovi, jedva se čuju čak i pri najvećoj glasnoći. Pojačanje po aplikaciji gura pojedinačnu aplikaciju iznad 100% bez pokretanja izlaza vašeg sustava, što bi samo pojačalo aplikacije koje ste već isključili.</p>
<p>Dakle, potpuni potez je: utišajte buku, zadržite svoju jednu aplikaciju, a ako je ta aplikacija pretiha, pojačajte je. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> obrađuje sva tri u istom prozoru miksera.</p>

<h2>Za što se ne prijavljujete</h2>
<p>Uobičajena briga kod Mac audio alata je da zahtijevaju proširenja kernela, virtualne audio upravljačke programe ili sumnjive programe za instalaciju preuzete s nasumičnog web mjesta. To je opravdana zabrinutost i to je razlog zašto neki ljudi u potpunosti izbjegavaju te aplikacije.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nalazi se na Mac App Store, u zaštićenom okruženju i instalira se kao svaka normalna aplikacija, bez upravljačkih programa, bez DMG, bez proširenja sustava za odobravanje. To je jednokratna kupnja od 14,99 €, a ne pretplata, tako da platite jednom i zadržite. To je važno za nešto što ćete cijeli dan ostaviti da radi na traci izbornika.</p>

<h2>Brzi rezime</h2>
<ul>
<li>macOS nema izvornu kontrolu glasnoće po aplikaciji, pa vam je za to potreban mikser.</li>
<li>Otvorite mikser, zadržite svoju jednu aplikaciju, isključite ili isključite sve ostalo.</li>
<li>Spremite ga kao profil za pozive ili streamove koje često obavljate.</li>
<li>Upotrijebite automatsko smanjivanje ako želite da se pozadinske aplikacije utišaju, a ne ugase.</li>
<li>Poboljšajte svoju zadržanu aplikaciju ako je pretiha sama.</li>
</ul>

<p>Želite čuti samo ono što je važno i ušutkati ostalo? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> i postavite svoj prvi profil za utišavanje svega-ostalog za manje od jedne minute.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Zadržite različitu glasnoću za zvučnike u odnosu na slušalice na Mac",
    description: "macOS zaboravlja vaš miks glasnoće na razini aplikacije kada prelazite između zvučnika i slušalica. Evo zašto se to događa, ručna ograničenja i kako to rješava memorija volumena po aplikaciji.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>macOS zapravo pamti zaseban volumen sustava za svaki izlazni uređaj, ali zaboravlja vašu ravnotežu na razini aplikacije svaki put kada se prebacite. Dakle, slušalice i zvučnici zadržavaju vlastitu ukupnu razinu, ali u trenutku kada ih isključite, jedna aplikacija se aktivira, a druga nestaje. Popravak je memorija volumena po aplikaciji koja preživljava promjene uređaja, za što macOS nema izvorni alat.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zadržite različitu glasnoću za zvučnike u odnosu na slušalice na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Čega se macOS sjeća, a čega ne</h2>

<p>Uvriježeno je mišljenje da macOS tretira svaki izlazni uređaj identično. Ne čini se. Svaki izlazni uređaj pohranjuje vlastiti volumen sustava. Postavite MacBook zvučnike na 30%, a AirPods na 80%, a macOS drži te dvije brojke odvojene. Uključite, isključite, ponovno spojite i svaki se uređaj vraća tamo gdje ste ga ostavili.</p>

<p>Pa zašto se iskustvo i dalje čini slomljenim? Zato što se ta memorija zaustavlja na jednom, globalnom klizaču. macOS ima točno jednu kontrolu glasnoće za sve što se reproducira na određenom uređaju. Ne pamti koliko su pojedine aplikacije bile glasne. Kada prijeđete sa zvučnika na slušalice, ravnoteža između Spotify, Zoom poziva i kartice YouTube nije sačuvana jer ta ravnoteža nikada nije postojala. Svaka aplikacija dijeli isti klizač.</p>

<p>Rezultat je frustracija koju ljudi opisuju kao "različitu glasnoću za zvučnike u odnosu na slušalice". Ono što obično žele nije samo različita glavna razina po uređaju, već zapamćeni miks: tiha glazba, glasni pozivi, isključene obavijesti i taj miks netaknut bez obzira na to jesu li na stolnim zvučnicima ili slušalicama.</p>

<h2>Ručna rješenja i gdje ne uspijevaju</h2>

<p>Možete djelomično doći do toga s ugrađenim alatima, a vrijedi upoznati strop prije nego što posegnete za bilo čim drugim.</p>

<ul>
<li><strong>Postavite glasnoću sustava svakog uređaja jednom.</strong> Pustite zvuk preko zvučnika, postavite razinu, zatim prebacite izlaz na slušalice i postavite tu razinu. macOS zadržava oboje. Ovo upravlja glavnom glasnoćom po uređaju, ali ništa po aplikaciji.</li>
<li><strong>Koristite količinu po aplikaciji tamo gdje aplikacija to nudi.</strong> Spotify, VLC i većina preglednika imaju vlastiti unutarnji volumen. Možete smanjiti glasnu aplikaciju unutar same aplikacije. Kvaka: ova postavka postoji u aplikaciji, a ne u uređaju, tako da se ne mijenja kada se prebacite na slušalice, a većina aplikacija (Slack, Zoom, obavijesti sustava, Mail) uopće nema takvu kontrolu.</li>
<li><strong>Prebacite izlaz iz kontrolnog centra ili trake izbornika.</strong> Option-kliknite ikonu glasnoće na traci izbornika za brzo prebacivanje između uređaja. Brzo, ali pomiče samo glavnu razinu, ne vraća kombinaciju po aplikaciji.</li>
</ul>

<p>Ovim dobivate glavni volumen po uređaju. Ono što vam nitko od njih ne daje je zapamćena ravnoteža po aplikaciji koja vas prati na svim uređajima. Ta praznina je upravo ono gdje živi smetnja, i strukturalna je: OS jednostavno nema mikser za svaku aplikaciju, za razliku od Windows-a, koji ga isporučuje godinama.</p>

<h2>Volumen memorije po aplikaciji i zašto je promjena uređaja pravi problem</h2>

<p>Dublje rješenje je dati svakoj aplikaciji vlastitu glasnoću i zadržati te postavke. Tako izgleda mikser po aplikaciji <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je izgrađen za. Nalazi se u vašoj traci izbornika, navodi svaku aplikaciju koja trenutno proizvodi zvuk i svakoj daje neovisni klizač, prekidač za isključivanje zvuka, pa čak i pojačanje preko 100% za tihe aplikacije.</p>

<p>Ono što je važno za problem zvučnika protiv slušalica: te se razine pamte. Postavite svoju glazbu na 40%, svoje pozive na 90%, a aplikaciju za brbljanje na isključen zvuk i <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> čuva tu mješavinu. Kad odspojite slušalice i vratite se zvučnicima, nećete svaki put ručno balansirati tri aplikacije.</p>

<p>Profili volumena idu dalje. Možete spremiti imenovani skup razina po aplikaciji i pozvati ga jednim klikom, tako da su miks "slušalice, fokusirani rad" i miks "zvučnici, sastanci" pojedinačni odabir, a ne ručni reset.</p>

<blockquote><p>Mentalni pomak: prestanite razmišljati o jednom glavnom klizaču koji neprestano povlačite i počnite razmišljati o spremljenom miksu po situaciji. Zamjena uređaja prestaje biti zadatak ponovnog balansiranja.</p></blockquote>

<h2>Brzo prebacivanje izlaza bez gubitka miksa</h2>

<p>Preklopni uređaji trebaju biti brzi i nedestruktivni. Na istoj ploči trake izbornika možete promijeniti svoj izlazni uređaj, tako da je prelazak sa zvučnika na slušalice jedan klik, a vaše razine po aplikaciji dolaze zajedno umjesto da se sruše natrag na jedan globalni broj.</p>

<p>Povezana značajka koju vrijedi spomenuti je automatsko prigušivanje zvuka: kada se zvuk pojavi na vašem mikrofonu (počnete govoriti ili započne poziv), druge aplikacije se automatski spuštaju tako da vas se može čuti, a zatim se nakon toga vraćaju na svoju postavljenu razinu. To je isti princip koji se primjenjuje na pozornost, a ne na uređaje, još jedna stvar koju macOS neće učiniti sam.</p>

<h2>Kako to postaviti</h2>

<ul>
<li>Instalirajte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> iz Mac App Store. U sandboxu je, tako da nema upravljačkog programa, nema DMG i nema proširenja kernela koje treba odobriti.</li>
<li>Reproducirajte zvuk u aplikacijama koje najčešće koristite tako da se pojave u mikseru.</li>
<li>Postavite razinu svake aplikacije, utišajte sve što ne želite i pojačajte sve što je pretiho.</li>
<li>Spremite taj raspored kao profil, na primjer jedan podešen za slušalice i jedan za zvučnike.</li>
<li>Kada promijenite uređaj, pozovite odgovarajući profil ili jednostavno dopustite da se vaše spremljene razine po aplikaciji prenesu.</li>
</ul>

<p>Iskreni sažetak: macOS pamti glasnoću po izlaznom uređaju na glavnoj razini, ali nikada neće zapamtiti vaš miks po aplikaciji jer nema mikser po aplikaciji. Ako je vaš pravi cilj dosljedna ravnoteža između glazbe, poziva i obavijesti koja preživi svaki prelazak između zvučnika i slušalica, potrebna vam je memorija za svaku aplikaciju povrh OS-a.</p>

<p>Želite da zvučnici i slušalice zadrže vlastiti miks bez ponovnog podešavanja svake aplikacije? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> za jednokratnih 14,99 €, bez pretplate, bez vozača.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control Prekinut? Najbolja zamjena za volumen Mac po aplikaciji (2026.)",
    description: "Sound Control tvrtke Static Z Software je ukinut i prekida se na modernom macOS. Evo zašto je prestao raditi, što je učinio i najbolji mikser glasnoće po aplikaciji na koji možete prijeći 2026.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Sound Control tvrtke Static Z Software ukinut je i više se ne prodaje niti ažurira, a sve više ne uspijeva na modernom macOS jer se oslanja na audio drajver na razini kernela koji je Apple zaključao. Ako vam danas treba količina po aplikaciji, najčišća je zamjena <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store mikser u sandboxu bez upravljačkih programa.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control Prekinut? Najbolja zamjena za volumen Mac po aplikaciji (2026.)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Što je Sound Control zapravo učinio</h2>
<p>Sound Control je godinama bio glavni odgovor na pravi macOS jaz: još uvijek nema ugrađenog miksera glasnoće po aplikaciji na Mac. Windows ima jedan u svom Volume Mixer-u od Viste, ali macOS vam daje samo jedan glavni klizač. Sound Control je ispunio tu rupu urednom pločom trake izbornika koja vam je omogućila:</p>
<ul>
<li>Postavite neovisnu razinu glasnoće za svaku pokrenutu aplikaciju.</li>
<li>Isključite zvuk pojedinačnih aplikacija bez dodirivanja ostatka zvuka sustava.</li>
<li>Pojačajte tihe aplikacije iznad 100 posto.</li>
<li>Primjena ekvilizatora i podešavanja ravnoteže po aplikaciji.</li>
<li>Usmjerite audio i prikvačite aplikacije na određene izlazne uređaje.</li>
</ul>
<p>Za svakoga tko je ikada imao Zoom poziv koji se aktivira dok pozadinska YouTube kartica šapuće, ta kontrola po aplikaciji bila je transformativna. Postao je tihi dio na mnogim strojevima naprednih korisnika Mac.</p>

<h2>Zašto je prestao raditi</h2>
<p>Ovdje je važna iskrena tehnička priča, jer objašnjava zašto ovo nije greška koju netko može jednostavno zakrpati. Sound Control je radio tako što je instalirao sistemski audio drajver — proširenje kernela (kext) koje se umetnulo u macOS audio cjevovod kako bi moglo presresti i preoblikovati izlaz svake aplikacije. Ta duboka kuka je upravo ono što je omogućilo EQ i značajke pojačanja.</p>
<p>Počevši od macOS 10.15 Catalina i ubrzavajući kroz tranziciju Big Sur i Apple Silicon, Apple je počeo obustavljati proširenja kernela u korist alternativa korisničkom prostoru. Na Apple Silicon Macs, učitavanje kexts trećih strana zahtijeva smanjenje sigurnosti sustava u Recovery Mode, a Apple je jasno dao do znanja da su naslijeđeni audio kexts na posuđenom vremenu. Static Z Software na kraju je prestao prodavati i razvijati Sound Control. Rezultat: na novijim verzijama macOS, instalacije ne uspijevaju, audio problemi ili se upravljački program jednostavno odbija učitati bez sigurnosnih sniženja koje većina ljudi s pravom ne želi napraviti.</p>
<blockquote>Ovo nije zanemarivanje programera. To je promjena na razini platforme. Apple je zatvorio vrata vrsti audio drajvera niske razine oko kojeg je izgrađen Sound Control i nikakvo ažuriranje ga ne može u potpunosti ponovno otvoriti.</blockquote>

<h2>Što se promijenilo na modernom macOS</h2>
<p>Apple je dodao jednu relevantnu stvar: Core Audio sada nudi Tap API (uveden u macOS 14.2 Sonoma) koji aplikacijama omogućuje snimanje i obradu zvuka po procesu iz korisničkog prostora — bez kext, bez sigurnosnog vraćanja na stariju verziju, bez ponovnog pokretanja u Recovery. Ovo je odobreni moderni put za zvuk po aplikaciji i na tome bi se trebao graditi trenutni mikser. Kompromis je iskren: dodiri korisničkog prostora ograničeniji su od starog upravljačkog programa kernela, tako da biste trebali očekivati ​​čistu glasnoću po aplikaciji, isključivanje zvuka i pojačanje umjesto punog ponuđenog parametarskog EQ-a Sound Control po aplikaciji.</p>

<h2>Najbolja zamjena: SoundDial</h2>
<p>Ako želite srž onoga što je Sound Control radio — neovisni volumen po aplikaciji — na Mac-u zapravo možete biti sigurni i ažurni, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je najbliža opcija čiste migracije u 2026. To je mikser glasnoće trake izbornika po aplikaciji izgrađen za moderni macOS audio skup. Što se prenosi iz tijeka rada Sound Control:</p>
<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — jedan klizač po pokrenutoj aplikaciji, točno u traci izbornika.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — utišajte jednu aplikaciju dok sve ostale nastavljaju svirati.</li>
<li><strong>Povećanje glasnoće po aplikaciji</strong> — gurnite tihu aplikaciju iznad uobičajenog stropa.</li>
<li><strong>Profili volumena</strong> — spremite postavke miksera za različite kontekste (pozivi, glazba, igre) i prebacivanje između njih.</li>
<li><strong>Automatsko spuštanje</strong> — automatski smanji glasnoću pozadinske aplikacije, korisno kada počnete razgovarati ili primite poziv.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — prelazite između zvučnika, slušalica i drugih uređaja bez zaranjanja u postavke sustava.</li>
</ul>
<p>Praktične razlike koje su važne za migraciju: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> isporučuje se kroz Mac App Store, u sandboxu je i ne instalira upravljačke programe niti DMG. To znači da nema proširenja kernela koje treba odobriti, nema načina oporavka i nema snižavanja sigurnosnog položaja vašeg Mac-a — točne bolne točke koje su ubile Sound Control. To je jednokratna kupnja od 14,99 €, a ne pretplata.</p>

<h2>Kako se prebaciti, korak po korak</h2>
<ul>
<li><strong>Čisto deinstalirajte Sound Control.</strong> Budući da je instalirao upravljački program, upotrijebite vlastiti program za deinstalaciju ako i dalje radi ili uklonite komponente audio upravljačkog programa prije instaliranja bilo čega novog. Dva konkurentna audio priključka mogu uzrokovati kvarove.</li>
<li><strong>Instalirajte SoundDial sa App Store.</strong> Nije potrebno ponovno pokretanje niti sigurnosne promjene.</li>
<li><strong>Odobrite dopuštenje za zvuk koje traži.</strong> To je ono što mu omogućuje čitanje i kontrolu izlaza po aplikaciji na modernom macOS.</li>
<li><strong>Otvorite ploču trake izbornika i postavite razine.</strong> Vaše pokrenute aplikacije pojavljuju se s pojedinačnim klizačima; podesite, utišajte ili pojačajte prema potrebi.</li>
<li><strong>Spremite profil.</strong> Ako ste imali omiljene postavke Sound Control, ponovno ih stvorite kao profile kako biste se mogli prebaciti jednim klikom.</li>
</ul>

<h2>Iskrena očekivanja</h2>
<p>Ako je vaš jedini razlog za korištenje Sound Control glasnoća po aplikaciji, isključivanje zvuka i pojačavanje, moderni mikser u sandboxu u potpunosti vas pokriva. Ako ste se jako oslanjali na njegov ekvilajzer za svaku aplikaciju, imajte na umu da je duboki EQ vezan za stari model drajvera i da je značajku koju je najteže čisto reproducirati prema Appleovim trenutnim pravilima. Postavite očekivanja u skladu s tim i nećete biti iznenađeni.</p>

<p>Jeste li spremni vratiti volumen po aplikaciji bez glavobolja vozača? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> — jednokratnih 14,99 €, u sandboxu, bez pretplate, bez upravljačkih programa.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny je nestao — moderna Mac aplikacija za količinu po aplikaciji koja će ga zamijeniti",
    description: "SoundBunny tvrtke Prosoft je ukinut. Evo trenutnog, aktivno održavanog macOS miksera glasnoće po aplikaciji koji ga zamjenjuje — plus kako premjestiti postavke zvuka po aplikaciji bez upravljačkih programa kernela.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Ako je SoundBunny prestao raditi ili se više ne prodaje, moderna je zamjena <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mikser glasnoće trake izbornika po aplikaciji napravljen za trenutni macOS. Daje vam isti temeljni posao — neovisnu glasnoću, isključivanje zvuka i pojačanje po aplikaciji — kao jednokratnu kupnju Mac App Store od 14,99 €, bez upravljačkog programa kernela, DMG ili pretplate.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny je nestao — moderna Mac aplikacija za količinu po aplikaciji koja će je zamijeniti" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Što se dogodilo sa SoundBunny?</h2>
<p>SoundBunny bio je Prosoft Engineeringov uslužni program za volumen po aplikaciji za macOS. Omogućuje vam postavljanje različite razine glasnoće za svaku pokrenutu aplikaciju izravno s trake izbornika — glazba tiha, poziv glasan, preglednik negdje između. Godinama je to bio jedan od rijetkih alata koji je popunjavao prazninu koju Apple nikada nije zatvorio.</p>
<p>Problem je što je SoundBunny naslijeđeni softver. Nije držao korak s dubokim promjenama koje je Apple napravio u macOS zvuku i sigurnosti — Apple Silicon, ojačano vrijeme izvođenja, pooštrena pravila za proširenje sustava i uklanjanje starijih audio spojnica. Kada uslužni program poput ovog prestane primati ažuriranja, na kraju se pokvari: ne uspije se pokrenuti, izgubi kontrolu nad tokovima aplikacija nakon ažuriranja OS-a ili se jednostavno ne može čisto instalirati na moderan Mac. Ako ste tu, ne radite ništa loše. Aplikacija je iza, ne vi.</p>

<h2>Zašto macOS još uopće treba mikser treće strane</h2>
<p>Evo iskrenog dijela: ovo je pravi nedostatak u macOS, a ne greška koju možete popraviti u Postavkama. Windows već više od desetljeća isporučuje Volume Mixer za svaku aplikaciju. macOS ga nikada nije imao. Klizač za glasnoću sustava i postavke zvuka kontroliraju vaše <em>izlazni uređaj</em> u cjelini — svaka aplikacija ima istu glavnu razinu. Ne postoji ugrađeni način da se kaže "drži Safari na 40%, ali Zoom na 100%."</p>
<p>Zato su alati poput SoundBunny postojali i zašto je zamjena i danas neophodna. Potreba nije nestala kada je aplikacija nestala — Apple je samo još uvijek nije riješio.</p>

<h2>Moderna zamjena: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je mikser za glasnoću po aplikaciji koji živi u vašoj traci izbornika i radi stvari na koje su se korisnici SoundBunny oslanjali, izgrađen nasuprot današnjem macOS umjesto jučerašnjeg. Preklapanje značajki pokriva bitne stvari:</p>
<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — jedan klizač po pokrenutoj aplikaciji, točno SoundBunny mentalni model.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — utišajte jednu bučnu aplikaciju bez diranja svega ostalog.</li>
<li><strong>Povećanje glasnoće po aplikaciji</strong> — pritisnite tihu aplikaciju <em>iznad</em> 100% kada je video ili poziv snimljen prenisko. SoundBunny nije mogao pouzdano pojačati prošli sustav max na modernom macOS; boost je ovdje prava nadogradnja.</li>
<li><strong>Profili volumena</strong> — spremite skup razina po aplikaciji (miks za "posao", miks za "igre") i prebacite se između njih umjesto da pomičete klizače jedan po jedan.</li>
<li><strong>Automatsko spuštanje</strong> — automatski smanji glasnoću pozadinske aplikacije kada drugi izvor zvuka (kao što je vaš mikrofon tijekom poziva) postane aktivan.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — preskakanje između zvučnika, slušalica i drugih izlaza iz istog izbornika.</li>
</ul>

<h2>Kako migracija zapravo izgleda</h2>
<p>Nema koraka uvoza — razine glasnoće po aplikaciji nisu datoteka koju prenosite — ali prebacivanje je brzo:</p>
<ul>
<li><strong>Ispravno uklonite SoundBunny.</strong> Zatvorite je, zatim izbrišite aplikaciju. Ako je instalirao pomoćnu stavku ili stavku za prijavu, uklonite i nju tako da se dva pomoćna programa ne bore oko istih audio tokova.</li>
<li><strong>Instalirajte SoundDial sa Mac App Store.</strong> U sandboxu je i distribuira se kroz trgovinu, tako da nema DMG za montiranje i nema upozorenja "neidentificirani programer". Jedna kupnja, vezana uz vaš Apple ID.</li>
<li><strong>Odobrite pristup zvuku pri prvom pokretanju.</strong> macOS će tražiti dopuštenje da SoundDial vidi zvuk aplikacije. Ovo je moderan, sankcioniran put koji nudi Apple — bez proširenja kernela, bez ponovnog pokretanja, bez smanjenja sigurnosti sustava. Dopustite to i vaše pokrenute aplikacije pojavit će se kao klizači.</li>
<li><strong>Ponovno izgradite svoju kombinaciju.</strong> Postavite svoje uobičajene aplikacije, a zatim spremite taj raspored kao profil tako da ga nikada ne morate ponavljati.</li>
</ul>

<h2>Praktične razlike u odnosu na SoundBunny</h2>
<p>Najvažnija razlika je ta <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> trenutni je softver. Izvorno radi na Apple Siliconu, koristi Appleove podržane audio API-je i Mac App Store je aplikacija — što znači da ažuriranja stižu kroz trgovinu i napravljena je da preživi nadogradnje OS-a, a ne da se pokvari na njima. Budući da je u sandboxu također znači da ne može doseći izvan svoje trake, što je ohrabrujuće za nešto što se nalazi između vaših aplikacija i zvučnika.</p>
<p>Nekoliko iskrenih upozorenja tako da su očekivanja ispravna. Budući da SoundDial radi unutar Appleovog audio okvira, kontrola je najbolja za standardne aplikacije koje usmjeravaju kroz uobičajeni izlaz sustava. Neki softver reproducira zvuk kroz vlastiti put ili ekskluzivni uređaj, a nijedan mikser na traci izbornika - uključujući SoundBunny - ne može u potpunosti njima upravljati. A volumen po aplikaciji inherentno je softverski sloj na vrhu macOS; to nije hardverski mikser. Unutar tih stvarnih granica, radi posao koji je radio SoundBunny.</p>

<blockquote>Ako ste se prebacili na Mac sa Windows očekujući Volume Mixer za svaku aplikaciju, ovo je alat koji popunjava tu prazninu — a sada se zapravo održava.</blockquote>

<p>SoundBunny je imao dobar rezultat, ali to je nasljeđe. Ako trebate glasnoću po aplikaciji, isključivanje zvuka i pojačanje na modernom Mac, <a href="https://apps.apple.com/app/id6772792641">nabavite SoundDial na Mac App Store</a> — 14,99 € jednokratno, bez pretplate, bez upravljačkih programa.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 alternativa za Mac: Količina po aplikaciji bez povećanja prodaje Boom 3D",
    description: "Boom 2 je nasljeđe i stalno vas tjera na Boom 3D. Ako samo želite količinu po aplikaciji i jednostavno pojačanje na modernom macOS, evo fokusirane alternative i načina na koji funkcionira.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Ako vam se sviđa Boom 2 za jačanje cijelog sustava, ali želite jednostavno <strong>po aplikaciji</strong> volumen na trenutnom Mac, iskren odgovor je da je Boom 2 naslijeđe i više nije pravi alat. Fokusirana alternativa je <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mikser na traci izbornika koji svakoj aplikaciji daje vlastiti klizač glasnoće, isključivanje zvuka i pojačavanje, za €14,99 jednom, bez potrebe za većim paketom.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 2 alternativa za Mac: Količina po aplikaciji bez povećanja prodaje Boom 3D" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto Boom 2 više ne odgovara</h2>
<p>Boom 2 je bila omiljena aplikacija iz određenog razloga: pojačala je ukupnu glasnoću vašeg Mac iznad maksimuma sustava i dodala ekvilizator. To je učinio na razini cijelog sustava, a ne po aplikaciji. To je bilo u redu 2015. 2026. ima dva problema.</p>
<p>Prvo, to je nasljeđe. Global Delight očito je premjestio svoju energiju na Boom 3D, a ako otvorite stranicu proizvoda Boom 2, gotovo ćete odmah biti potaknuti na noviju, skuplju aplikaciju. Boom 2 još uvijek postoji, ali to je odskočna daska koju dobavljač koristi za prodaju Boom 3D, a ne proizvod koji dobiva aktivnu ljubav.</p>
<p>Drugo, i još važnije: Boom 2 nikada nije bio mikser glasnoće po aplikaciji. Podiže i oblikuje jedan glavni izlaz. Ako je vaša stvarna muka to što je Slack ping glasniji od vaše glazbe ili kartica preglednika prigušuje poziv, Boom 2 to ne rješava. Sve skupa postaje glasnije. To je drugačiji posao.</p>

<h2>Što "volumen po aplikaciji" zapravo znači na macOS</h2>
<p>Evo iskrenog konteksta koji većina alternativnih zaokruživanja preskače: macOS uopće nema ugrađeni mikser glasnoće po aplikaciji. Windows ima jedan već godinama — desnom tipkom miša kliknite zvučnik, otvorite Volume Mixer i postavite Chrome na 40% i Spotify na 80%. Apple to nikada nije isporučio. Tipka za glasnoću macOS pomiče samo jednu glavnu razinu.</p>
<p>Dakle, kada tražite "Boom 2 alternativu", ono što često stvarno tražite nije glasniji Mac - to je kontrola po aplikaciji koju Windows korisnici uzimaju zdravo za gotovo. To je istinska praznina u operativnom sustavu, a ne nešto što je Boom 2 ili bilo koja aplikacija zaboravila izgraditi.</p>

<h2>Gdje SoundDial odgovara</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> izgrađen je posebno za taj jaz. Živi u traci izbornika i navodi aplikacije koje trenutno reproduciraju zvuk, svaka sa svojim klizačem. Postavljate razine po aplikaciji umjesto da gurate jednu glavnu kontrolu i nadate se najboljem.</p>
<p>Što radi:</p>
<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — utišajte preglednik, držite glazbu gdje je želite, bez globalnog kompromisa.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — utišajte jednu bučnu aplikaciju bez dodirivanja bilo čega drugog.</li>
<li><strong>Pojačanje po aplikaciji</strong> — gurnite pojedinačnu aplikaciju preko normalne granice kada se video ili poziv snimaju pretiho. Ovo je dio koji fanovi Boom 2 obično propuštaju, osim što je ovdje usmjeren na jednu aplikaciju, a ne na cijeli sustav.</li>
<li><strong>Profili volumena</strong> — spremite rasporede kao što su "fokus", "sastanak" ili "igranje" i prebacite ih jednim klikom.</li>
<li><strong>Automatsko spuštanje</strong> — automatski spušta druge aplikacije kada počnete razgovarati, korisno za pozive i snimanje.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — preskakanje između zvučnika, slušalica i drugih izlaza iz istog izbornika.</li>
</ul>

<h2>Kako to postaviti</h2>
<p>Tijek rada je kratak:</p>
<ul>
<li>Instalirajte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> iz Mac App Store — nema DMG, nema upravljačkog programa, nema ponovnog pokretanja.</li>
<li>Kliknite ikonu trake izbornika da vidite svaku aplikaciju koja trenutno proizvodi zvuk.</li>
<li>Povucite klizač svake aplikacije na željenu razinu; isključite ili pojačajte pojedinačno prema potrebi.</li>
<li>Spremite aranžman kao profil ako ga kasnije želite ponovno koristiti.</li>
</ul>
<p>Budući da se isporučuje kroz App Store, u sandboxu je i čisto se instalira. To vrijedi spomenuti, jer su se neki stariji audio alati oslanjali na proširenja kernela ili virtualne audio upravljačke programe — nešto čemu se moderni macOS sve više opire. SoundDial ne traži da instalirate upravljački program ili smanjite sigurnosnu postavku.</p>

<h2>Iskreno ograničenje</h2>
<p>Poticanje po aplikaciji je stvarno, ali nije magično. Ako je izvorni zvuk aplikacije stvarno tih ili loše snimljen, njegovo pojačavanje podiže razinu buke zajedno sa signalom, tako da vrlo tihi materijal može zvučati pištavo kada se jako pritisne. To je fizička granica pojačanja, a ne greška u nekoj određenoj aplikaciji — Boom 2-ovo pojačanje sustava imalo je isti kompromis. Tretirajte pojačanje kao prostor za glavu za praktične slučajeve, a ne kao spas za pokvareni zvuk.</p>

<h2>Boom 2 naspram fokusiranog miksera</h2>
<p>Ako ste kod Boom 2 voljeli glasnoću na cijelom sustavu plus EQ, a nije vam stalo do kontrole po aplikaciji, Boom 3D je namjeravani nasljednik dobavljača — to je pošten put i nećemo se pretvarati da nije tako. Ali ako ste isprobali Boom 2 i shvatili da zapravo želite isključiti ili pojačati jednu aplikaciju bez premještanja svega, EQ-and-boost paket je pogrešan oblik alata.</p>
<blockquote>Boom 2 čini cijeli Mac glasnijim. Mikser po aplikaciji omogućuje vam da odlučite koja je aplikacija glasnija. Oni rješavaju različite probleme.</blockquote>
<p>Razliku u cijeni također vrijedi jasno navesti. SoundDial iznosi 14,99 € jednokratno. Ne postoji pretplata, probno razdoblje koje prelazi u veći plan, niti put unutar aplikacije koji bi vas usmjerio na skuplju razinu. Kupiš mikser, posjeduješ mikser.</p>

<p>Ako je glasnoća po aplikaciji - a ne EQ za cijeli sustav - ono što ste stvarno tražili, <a href="https://apps.apple.com/app/id6772792641">isprobajte SoundDial na Mac App Store</a> i postavite svoje razine onako kako vam je macOS cijelo vrijeme trebao dopustiti.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune u odnosu na SoundDial: besplatni volumen otvorenog koda u odnosu na plaćeni volumen po aplikaciji na Mac",
    description: "FineTune je besplatna aplikacija otvorenog koda za količinu po aplikaciji za Mac; SoundDial je App Store aplikacija u zaštićenom okruženju koja se plaća, s pojačanjem, profilima i podrškom. Evo iskrene usporedbe koja će vam pomoći pri odabiru.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>FineTune je besplatni mikser glasnoće otvorenog koda po aplikaciji za macOS, pa ako vam je cijena jedina briga, to je prava opcija. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je plaćena (14,99 €, jednokratno) Mac App Store aplikacija koja dodaje povećanje glasnoće po aplikaciji, spremljene profile, automatsko smanjivanje i podršku dobavljača. Pravi izbor je besplatno i uradi sam naspram zaštićeno i podržano.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune vs SoundDial: besplatni open-source u odnosu na plaćeni volumen po aplikaciji na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Problem rješavaju obje aplikacije</h2>

<p>macOS još uvijek nema ugrađeni mikser glasnoće po aplikaciji. Windows ima jedan već godinama — desnom tipkom miša kliknite ikonu zvučnika, otvorite Volume Mixer i svaka aplikacija dobiva vlastiti klizač. Na Mac dobivate točno jedan klizač za glasnoću sustava za sve: vaša glazba, videopoziv, YouTube, zvukovi obavijesti i igra sve to dijeli. Ako je vaš poziv pretih, a Spotify preglasan, vaše jedino "popravak" je potpuno isključivanje Spotify.</p>

<p>I FineTune i SoundDial postoje kako bi popunili tu prazninu. Daju svakoj pokrenutoj aplikaciji vlastitu kontrolu glasnoće tako da možete, recimo, održavati sastanak na 100% dok povlačite pozadinsku glazbu na 20% — bez dodirivanja glavnog klizača.</p>

<h2>Ono što FineTune dobije kako treba</h2>

<p>FineTune je novija, besplatna aplikacija otvorenog koda u duhu SoundSource. Budimo pošteni o njegovim prednostima, jer su stvarne:</p>

<ul>
  <li><strong>Ne košta ništa.</strong> Nema licence, nema probe, nema nadogradnje.</li>
  <li><strong>Izvor je otvoren.</strong> Možete pročitati što točno radi, pregledati njegovu privatnost i — ako poznajete Swift — modificirati ga ili račvati.</li>
  <li><strong>Pokreće ga zajednica.</strong> Greške može ispraviti bilo tko, a kod nadživi bilo koju tvrtku.</li>
  <li><strong>Pokriva temeljnu potrebu.</strong> Neovisna količina po aplikaciji, što je značajka koju 90% ljudi zapravo traži.</li>
</ul>

<p>Ako je vaš jedini zahtjev "dopustite mi da isključim jednu aplikaciju, a da ne isključim sve", a zadovoljavate softver koji dolazi bez formalne podrške, FineTune je legitiman odgovor. Preporuka ovdje nije ustupak - to je iskreno.</p>

<h2>Iskreni ustupci DIY rute</h2>

<p>Besplatan i open-source nosi stvarne troškove koji se ne pojavljuju na cijeni. Ovo nisu udarci konkretno na FineTune — to je priroda pristupa:</p>

<ul>
  <li><strong>Montaža je ručna.</strong> Audio alati otvorenog koda obično se distribuiraju kao preuzeta verzija ili Homebrew formula, a ne putem App Store. Instalirate izvan Appleove recenzije i na čekanju ste da ga ažurirate.</li>
  <li><strong>Presretanje zvuka po aplikaciji po prirodi je osjetljivo.</strong> Usmjeravanje zvuka druge aplikacije dubinski je rad sustava. Kada Apple isporuči ažuriranje macOS koje mijenja audio snop, ovi se alati mogu pokvariti dok ih netko ne zakrpi. Volonterskim projektom "netko" može biti zauzet taj mjesec.</li>
  <li><strong>Podrška je najbolji pokušaj.</strong> Ako se nešto pokvari, vaš izlaz je problem s GitHubom i čekanje. Nema zajamčenog odgovora i nitko nije dužan to popraviti.</li>
  <li><strong>Opseg značajke je ono što održavatelji isporuče.</strong> Kontrola glasnoće jezgre vjerojatno je pokrivena; dodaci u potpunosti ovise o vremenu suradnika.</li>
</ul>

<blockquote>Pošteno kadriranje: FineTune mijenja novac za odgovornost održavanja. Uštedjeli ste 14,99 € i preuzeli rizik da ažuriranje OS-a ne radi dok ga zajednica ne uhvati.</blockquote>

<h2>Gdje je SoundDial drugačiji</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> preuzima suprotnu trgovinu. Plaćate jednom, a zauzvrat dobivate App Store proizvod iza kojeg stoji dobavljač i širi skup značajki izgrađen na vrhu količine po aplikaciji:</p>

<ul>
  <li><strong>Glasnoća i isključivanje zvuka po aplikaciji</strong> — zajednička osnovna linija koju isporučuju obje aplikacije.</li>
  <li><strong>POJAČANJE glasnoće po aplikaciji</strong> — gurnite previše tihu aplikaciju preko 100%. Korisno za aplikacije sa slabim audio izlazom u kojima nije dovoljno odbiti druge.</li>
  <li><strong>Profili volumena</strong> — spremite cijele mikseve ("Sastanak", "Fokus", "Igranje") i prebacite se jednim klikom umjesto ponovnog postavljanja klizača svaki put.</li>
  <li><strong>Automatsko spuštanje</strong> — automatski spušta pozadinske aplikacije kada govorite ili kada odabrana aplikacija postane aktivna, tako da se pozivi prekidaju bez ručnog petljanja.</li>
  <li><strong>Brzo prebacivanje izlaza</strong> — preskakanje između zvučnika, slušalica i drugih izlaza s trake izbornika.</li>
</ul>

<p>Jednako je važno <em>kako</em> isporučuje se. SoundDial je u sandboxu i distribuira se kroz Mac App Store — nema zasebnog DMG, nema drajvera kernela, nema instalacije audio drajvera. Ažuriranja dolaze putem App Store kao i bilo koje druge aplikacije, a tu je i pravi programer kojem možete poslati e-poštu kada nešto nije u redu. To je konkretna vrijednost od 14,99 €: ne samo više značajki, već netko odgovoran za njihov rad u macOS izdanjima.</p>

<h2>Iskreno upozorenje koje se odnosi na oboje</h2>

<p>Niti jedna aplikacija treće strane ne može audiosustav macOS-a pretvoriti u Windows' Volume Mixer, jer Apple ne izlaže čisti javni API za zvuk po aplikaciji. Svaki alat u ovoj kategoriji - besplatan ili plaćen, otvoren ili zatvoren - zaobilazi to ograničenje koristeći audio tehnike na razini sustava. To znači da i FineTune i SoundDial mogu biti pod utjecajem velikih macOS audio promjena. Razlika je u tome tko je odgovoran za naknadni popravak: dobrovoljna zajednica ili plaćeni dobavljač čiji proizvod ovisi o tome.</p>

<h2>Koje odabrati?</h2>

<ul>
  <li><strong>Odaberite FineTune ako</strong> želite nula troškova, cijenite transparentnost otvorenog izvornog koda, trebate samo osnovni volumen po aplikaciji i udobno vam je instalirati izvan App Store i sami podržavate kada se nešto pokvari.</li>
  <li><strong>Odaberite SoundDial ako</strong> želite App Store instalaciju jednim klikom, dodatke kao što su boost, profili i auto-ducking, te sigurnost ažuriranja i podrške od dobavljača s skinom u igri.</li>
</ul>

<p>Oba su važeća. Stvarno se svodi na to hoćete li radije trošiti novac ili pozornost. Ako biste radije kupili podržanu aplikaciju u sandboxu i nikada više o njoj ne razmišljali, <a href="https://apps.apple.com/app/id6772792641">nabavite SoundDial na Mac App Store</a> za jednokratnih 14,99 € — bez pretplate, bez drajvera, bez DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music u odnosu na SoundDial: Je li besplatni Mac mikser za glasnoću dovoljan?",
    description: "Pošten međusobni okršaj besplatne aplikacije Background Music i plaćene SoundDial. Gdje pristup besplatnog virtualnog upravljačkog programa funkcionira, gdje se kvari i kada se izvorni mikser od 14,99 € isplati.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Background Music je besplatan i istinski dobar u osnovama: svakoj aplikaciji daje vlastiti klizač za glasnoću i može automatski pauzirati glazbu kada druga aplikacija svira. Ako je to sve što trebate, upotrijebite to. No oslanja se na virtualni audio upravljački program koji se može pokvariti nakon ažuriranja macOS i nedostaje mu pojačanje po aplikaciji, profili i prebacivanje izlaza. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> zamjenjuje novac za podržanu alternativu bez vozača, u zaštićenom okruženju.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music protiv SoundDial: Je li besplatni Mac mikser za glasnoću dovoljan?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Prvo, iskrena istina o macOS</h2>
<p>macOS nema ugrađeni mikser glasnoće po aplikaciji. Windows ima jedan više od desetljeća u svom Volume Mixeru, ali na Mac klizač sustava pomiče sve odjednom. Ne postoji API koji podržava Apple i koji aplikaciji treće strane omogućuje čisto presretanje i rebalans pojedinačnih tokova aplikacija. Taj jedini jaz je razlog zašto alati kao što su Background Music i SoundDial uopće postoje, i to je temeljni uzrok većine dolje navedenih kompromisa.</p>

<h2>Što Background Music radi dobro</h2>
<p>Background Music je aplikacija otvorenog koda s trakom izbornika koja postoji već godinama i ima vjerne sljedbenike s dobrim razlogom. Daje vam:</p>
<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — osnovna značajka. Stišajte Spotify dok je poziv glasan.</li>
<li><strong>Automatska pauza</strong> — može pauzirati vaš glazbeni player kada zvuk započne negdje drugdje, što je zgodna stvar za sastanke.</li>
<li><strong>Glasnoća uređaja koja vas prati</strong> i jednostavno sučelje bez gluposti.</li>
<li><strong>Nulti trošak</strong> — besplatan je i kod je javan.</li>
</ul>
<p>Mnogima je to dovoljno. Ako je vaš cijeli popis želja "učinite jednu bučnu aplikaciju tišom bez diranja ostalih", Background Music to pokriva i ne biste trebali plaćati nešto što vam ne treba. Ovdje je važno biti pošten: ovo je legitimno koristan alat.</p>

<h2>Gdje slobodni pristup pokazuje svoje šavove</h2>
<p>Kvaka je <em>kako</em> Background Music postiže volumen po aplikaciji. Budući da macOS ne daje službeni put, on instalira virtualni audio upravljački program (modificiranu verziju starog Soundflower pristupa) koji usmjerava zvuk vašeg sustava kroz sebe. Ta je arhitektura pametna, ali nosi stvarne troškove:</p>
<ul>
<li><strong>Pokvari se nakon ažuriranja macOS.</strong> Virtualni audio upravljački programi nalaze se duboko u sustavu, a glavna izdanja macOS povijesno su ih onemogućila ili destabilizirala. Korisnici redovito prijavljuju tišinu, izobličenje ili potrebu ponovne instalacije nakon nadogradnje. Kad pukne, često ste sami.</li>
<li><strong>Instalacija je teža.</strong> Svojem Mac dodajete audio uređaj blizak jezgri, a ne samo aplikaciju. Čisto deinstaliranje može biti nezgodno.</li>
<li><strong>To postaje vaš zadani izlazni uređaj.</strong> Budući da se sve usmjerava kroz virtualni uređaj, neke pro-audio aplikacije, aplikacije za konferencije ili igre mogu se ponašati čudno, a prebacivanje vašeg stvarnog izlaza dodatni je korak.</li>
<li><strong>Razvoj je usmjeren prema zajednici.</strong> Ne postoji podrška. Popravci stižu kada volonter ima vremena, što za audio alat koji može iznenada utihnuti predstavlja značajan rizik.</li>
</ul>
<p>Ništa od ovoga ne čini Background Music lošim. To ga čini besplatnim alatom s kompromisima besplatnog alata.</p>

<h2>Ono što zapravo plaćate sa SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je Mac App Store aplikacija, koja oblikuje ono što jest. Budući da su App Store aplikacije u sandboxu i ne mogu isporučiti vrstu virtualnog upravljačkog programa niske razine koju koristi Background Music, SoundDial je napravljen za rad bez instaliranja zasebnog audio uređaja ili DMG. To znači:</p>
<ul>
<li><strong>Nema čudnih problema s virtualnim vozačem.</strong> Nema dodatnog izlaznog uređaja koji bi otimao vaš audio lanac, niti se što ponovno instalira kada se sustav promijeni.</li>
<li><strong>Mnogo elegantnije preživljava macOS ažuriranja.</strong> App Store distribucija i sandboxing znače da je izgrađen prema podržanim stazama i da se ažurira kroz trgovinu, tako da je daleko manja vjerojatnost da će vas nadogradnja OS-a ostaviti tihim.</li>
<li><strong>Povećanje glasnoće po aplikaciji.</strong> Ovo je stvarna razlika značajki: SoundDial može gurnuti aplikaciju <em>iznad</em> 100% za tihe izvore — podcast snimljen prenisko, prigušen videopoziv. Background Music samo prigušuje.</li>
<li><strong>Profili volumena.</strong> Spremite skup razina po aplikaciji ("Sastanci", "Glazba", "Igre") i prebacite se jednim klikom umjesto da svaki put povlačite klizače.</li>
<li><strong>Automatsko spuštanje.</strong> Automatski smanji glasnoću drugih aplikacija kada odabrani izvor reproducira — više konfigurabilan pristup ideji automatskog pauziranja.</li>
<li><strong>Brzo prebacivanje izlaza</strong> ugrađeno u traku izbornika, plus isključivanje zvuka po aplikaciji.</li>
<li><strong>Prava podrška.</strong> To je proizvod koji se plaća i netko je odgovoran kada nešto pođe po zlu.</li>
</ul>

<h2>Iskrena odluka</h2>
<blockquote>Ako želite besplatno i trebate samo osnovni volumen po aplikaciji, a lako vam je rješavati probleme nakon ažuriranja macOS, Background Music je dobar izbor. Ako želite pojačanje, profile, ducking, prebacivanje izlaza, bez krhkosti virtualnog upravljačkog programa i nekoga za slanje e-pošte kada se pokvari, SoundDial vrijedi 14,99 €.</blockquote>
<p>Nekoliko konkretnih izjednačenja. Ako redovito imate posla s pretihim izvorima, samo pojačanje opravdava cijenu — Background Music jednostavno ne može učiniti zvuk glasnijim od izvora. Ako se bojite godišnjeg kockanja "hoće li moj zvuk preživjeti ažuriranje", aplikacija trgovine u sandboxu uklanja tu tjeskobu. Ako volite scene namjesti-i-zaboravi, profili štede prave trvenja. I to je jednokratnih 14,99 €, a ne pretplata, tako da je usporedba jedna kupnja u odnosu na vaše vrijeme koje ste potrošili na održavanje besplatnog upravljačkog programa.</p>
<p>Suprotno tome, ako ste petljar koji uživa u otvorenom kodu, želi čitati kod i uglavnom odbija samo jednu aplikaciju — uštedite novac. Oba alata rješavaju isti temeljni problem; razlikuju se po robusnosti, dubini značajki i tko vas uhvati kada se macOS mijenja ispod njih.</p>

<p>Želite količinu po aplikaciji bez kockanja s virtualnim vozačem? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> — jednokratno 14,99 €, u sandboxu, bez upravljačkih programa, s ugrađenim pojačanjem, profilima i automatskim smanjivanjem.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "Vrijedi li SoundSource 39 USD? Jeftinija jednokratna alternativa Mac",
    description: "SoundSource je moćan Mac audio alat za ~39 USD, ali je pretjeran ako trebate samo glasnoću i pojačanje po aplikaciji. Evo iskrene usporedbe i jednokratne alternative od 14,99 €.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>SoundSource se isplati ako vam je potreban njegov potpuni alat: glasnoća po aplikaciji, 10-pojasni EQ po aplikaciji, usmjeravanje zvuka između uređaja i efekti za cijeli sustav. Ali s oko 39 dolara pretjerano je ako uglavnom želite glasnoću po aplikaciji, isključivanje zvuka po aplikaciji i pojačanje glasnoće. Za taj uži posao, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> jednokratno košta 14,99 €.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Vrijedi li SoundSource 39 USD? Jeftinija jednokratna alternativa Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Što SoundSource zapravo radi</h2>
<p>SoundSource Rogue Amoeba je istinski izvrstan softver i važno je biti fer u vezi s tim. To nije samo mikser za glasnoću. Daje vam:</p>
<ul>
<li><strong>Kontrola glasnoće po aplikaciji</strong> s trake izbornika, značajke zbog koje većina ljudi dolazi.</li>
<li><strong>Potpuni 10-pojasni ekvilajzer</strong> možete primijeniti po aplikaciji ili na cijelom sustavu, plus druge audio efekte (putem dodataka Audio Unit).</li>
<li><strong>Izlazno/ulazno usmjeravanje</strong>, uključujući slanje jedne aplikacije na izlazni uređaj različit od ostatka sustava.</li>
<li><strong>Brzo prebacivanje uređaja</strong> i unaprijed postavljene EQ specifične za slušalice.</li>
</ul>
<p>Ako ste podcaster, streamer ili audio štreber koji želi podesiti EQ na svojim slušalicama, preusmjeriti zvuk jedne aplikacije na zasebni zvučnik ili složiti efekte audio jedinice, SoundSource ima svoju cijenu. Ništa ovdje nije zamjena.</p>

<h2>Pitanje cijene</h2>
<p>SoundSource je plaćena, jednokratna licenca oko 39 USD (cijena se razlikuje ovisno o verziji i promocijama). To nije ponavljajuća pretplata u Netflixovom smislu, ali slijedi klasični obrazac plaćene aplikacije: kupite glavnu verziju, a buduće veće nadogradnje obično su plaćene nadogradnje s popustom, a ne besplatne zauvijek. Tijekom nekoliko godina, to je više od jedne kupnje. Za mnoge korisnike Mac, iskreno pitanje je: plaćam li 39 dolara za ruting-and-EQ paket kad sve što stvarno dodirujem su klizači za glasnoću po aplikaciji?</p>

<blockquote>Ako ste otvorili SoundSource i ikada koristili samo klizače za glasnoću i gumbe za isključivanje zvuka, plaćate komplet za korištenje jedne ladice.</blockquote>

<h2>Zašto problem uopće postoji</h2>
<p>Evo iskrenog temeljnog uzroka: macOS nema ugrađeni mikser glasnoće po aplikaciji. Windows ima jedan već godinama, ali na Mac, glasnoća sustava je sve ili ništa. Ne postoji način koji nudi Apple da Spotify bude tih dok videopoziv ostaje glasan ili da isključite zvuk jedne aplikacije bez dodirivanja svega ostalog. Upravo je taj jaz razlog zašto alati poput SoundSource i <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> postojati. To je stvarno ograničenje OS-a, a ne nešto što je bilo koja aplikacija izmislila problem za rješavanje.</p>

<h2>Gdje odgovara lakša, jeftinija opcija</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je mikser glasnoće na traci izbornika po aplikaciji napravljen za uobičajeni slučaj, a ne za pro-audio slučaj. Pokriva:</p>
<ul>
<li><strong>Neovisna glasnoća po aplikaciji</strong> — ispustite svoju glazbu dok sastanak ostaje na punoj razini.</li>
<li><strong>Isključivanje zvuka po aplikaciji</strong> — utišajte jednu aplikaciju bez isključivanja zvuka Mac.</li>
<li><strong>Povećanje glasnoće po aplikaciji</strong> — gurnite tihu aplikaciju iznad normalnih 100% kada je izvor jednostavno previše mekan.</li>
<li><strong>Profili volumena</strong> — spremite skup razina po aplikaciji (npr. raspored "fokus" ili "poziv") i prebacite se jednim klikom.</li>
<li><strong>Automatsko spuštanje</strong> — automatski spušta druge aplikacije kada počnete govoriti ili kada odabrana aplikacija svira.</li>
<li><strong>Brzo prebacivanje izlaza</strong> — skakanje između zvučnika, slušalica i drugih uređaja s trake izbornika.</li>
</ul>
<p>to je <strong>14,99 € jednokratno</strong>, koji se prodaje kroz Mac App Store, tako da je u sandboxu i nema zasebnog DMG, nema proširenja kernela niti audio drajvera za instalaciju. Preuzimate je kao bilo koju App Store aplikaciju i ona se ažurira putem trgovine.</p>

<h2>Iskrena usporedba</h2>
<p>Budite jasni u pogledu kompromisa. SoundSource čini više od SoundDial, a ako vam je nešto od sljedećeg važno, SoundSource je bolja kupovina:</p>
<ul>
<li>Želite pravu aplikaciju ili sustav <strong>ekvilajzer</strong> i efekte audio jedinice.</li>
<li>Trebaš <strong>usmjerite jednu aplikaciju na drugi izlazni uređaj</strong> nego sve ostalo.</li>
<li>Oslanjate se na <strong>unaprijed podešene postavke EQ-a specifične za slušalice</strong> i finu obradu zvuka.</li>
</ul>
<p>SoundDial ne radi EQ ili usmjeravanje uređaja po aplikaciji. Namjerno je uži. Ono što vam daje zauzvrat je niža cijena, manji otisak i fokusirano sučelje trake izbornika za ono što je većina ljudi zapravo željela: održavanje svake aplikacije na razini koju odaberete, s pojačanjem i profilima na vrhu.</p>

<h2>Dakle, isplati li se SoundSource?</h2>
<p>Da, ako ćete koristiti EQ i usmjeravanje. To je zreo, dobro podržan softver od cijenjenog programera, a cijena odražava stvarnu sposobnost. Ali "vrijedi" ovisi o tome što ćete dodirnuti. Ako otvorite aplikaciju i samo prilagodite klizače za glasnoću, isključite aplikaciju ili poželite da jedna tiha aplikacija bude glasnija, plaćate vrhunski novac za osnovne potrebe miksera. U tom slučaju jednokratni alat od 14,99 € je razumniji, a uvijek možete prijeći na SoundSource kasnije ako vaše potrebe prerastu u EQ i usmjeravanje.</p>

<p>Ako su glasnoća po aplikaciji, pojačavanje, isključivanje zvuka, profili i automatsko smanjivanje sve što tražite, <a href="https://apps.apple.com/app/id6772792641">nabavite SoundDial na Mac App Store</a> — 14,99 € jednokratno, bez pretplate, bez upravljačkih programa.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Preglasno na Mac? Isključite jedan preglednik bez isključivanja zvuka svega",
    description: "Chrome puca glasnije od vaših ostalih aplikacija na Mac? Naučite ugrađene popravke (isključivanje zvuka po kartici, postavke zvuka stranice) i kako postaviti stvarnu glasnoću po aplikaciji za Chrome tako da ostane tiši od svega ostalog.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>macOS nema ugrađenu glasnoću po aplikaciji, tako da ne možete izvorno smanjiti Chrome dok druge aplikacije ostavljate na punoj glasnoći. Vaša najbrža besplatna rješenja su isključivanje bučnih kartica, smanjenje glasnoće unutar svakog videoplayera ili blokiranje zvuka po web-mjestu u postavkama Chrome-a. Za pravu, stalnu razinu glasnoće samo za Chrome, potreban vam je mikser za svaku aplikaciju.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Preglasno na Mac? Isključite jedan preglednik bez isključivanja zvuka svega" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto Chrome zvuči glasnije od svega ostalog</h2>
<p>Chrome nije nužno "glasniji" po dizajnu - radi se o tome da Chrome usmjerava zvuk iz mnogih neovisnih izvora: YouTube, oglasi koji se automatski reproduciraju, video pozivi, kartice s pozadinskom glazbom i web-aplikacije od kojih svaka isporučuje vlastitu glasnoću. Neke su stranice vrlo popularne, oglasi su notorno glasni, a Chrome ih sve reproducira na punoj izlaznoj razini vašeg sustava. U međuvremenu bi vaša glazbena aplikacija ili poziv mogli biti tiši, pa Chrome dominira miksom.</p>
<p>Na Windows samo biste otvorili Volume Mixer i povukli Chrome klizač prema dolje. macOS jednostavno ne uključuje tu značajku. Tipka za glasnoću sustava kontrolira sve odjednom, tako da smanjivanje Chrome također smanjuje vašu glazbu, obavijesti i pozive. To je osnovno ograničenje — i to je nedostatak OS-a, a ne nešto što radite krivo.</p>

<h2>Ugrađeni popravci koji ne koštaju ništa</h2>
<p>Prije nego bilo što instalirate, isprobajte ove. Neće vam dati niti jedan Chrome kotačić za glasnoću, ali rješavaju većinu problema s "jednom glasnom karticom".</p>
<ul>
<li><strong>Isključivanje bučne kartice.</strong> Desnom tipkom miša kliknite karticu i odaberite "Utišaj web mjesto" ili kliknite ikonu malog zvučnika koja se pojavljuje na kartici koja reproducira zvuk. Ovo potpuno utišava tu karticu bez dodirivanja ostatka Chrome.</li>
<li><strong>Smanjite glasnoću unutar playera.</strong> Najpouzdaniji trik: povucite klizač glasnoće prema dolje unutar YouTube, Netflixa ili bilo čega drugog. Web igrači pamte vlastitu razinu po stranici, tako da tiši YouTube sljedeći put ostaje tih.</li>
<li><strong>Blokiraj zvuk po stranici.</strong> Idi na <em>chrome://settings/content/sound</em>. Možete mijenjati web stranice između "dopuštenih" i "isključenih" i dodati određene domene na popis za utišavanje. Izvrstan za trajno utišavanje web stranica koje se automatski reproduciraju.</li>
<li><strong>Ukloni oglase za automatsku reprodukciju.</strong> Zvuk oglasa često je pravi krivac. Blokiranje sadržaja ili isključivanje kartice dok ne budete spremni za gledanje uklanja većinu iznenađujuće glasnoće.</li>
</ul>
<blockquote>Oni su uistinu korisni i besplatni. Ali primijetite što ne mogu: isključiti zvuk ili upravljati pojedinačnim karticama. Nitko od njih vam ne dopušta da kažete "zadrži cijeli Chrome na 40%, dok moja glazba ostaje na 100%."</blockquote>

<h2>Iskreno ograničenje: nema volumena po aplikaciji u macOS</h2>
<p>Ako je vaš stvarni cilj "Chrome uvijek treba biti tiši od mojih drugih aplikacija", ugrađeni alati ne uspijevaju. Isključivanje zvuka po kartici je sve ili ništa. Klizači playera poništavaju se kada ih se web-mjesto ne sjeća i moraju se stalno iznova uređivati. A glasnoća sustava pokreće sve zajedno.</p>
<p>Ovo je stvarno macOS ograničenje, a ne greška koju možete konfigurirati. Apple nikada nije isporučio mikser za glasnoću u stilu Windows. Jedini način da dobijete stalnu, neovisnu razinu glasnoće konkretno za Chrome je aplikacija treće strane koja se nalazi između vaših aplikacija i vašeg izlaznog uređaja i primjenjuje pojačanje po aplikaciji.</p>

<h2>Postavite stvarnu glasnoću po aplikaciji za Chrome</h2>
<p>Mikser trake izbornika poput <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> daje macOS kontrolu glasnoće po aplikaciji koja mu nedostaje. Navodi svaku aplikaciju koja trenutno reproducira zvuk i svakoj daje vlastiti klizač — tako da možete povući Chrome na ugodnu razinu i ostaviti Spotify, svoje pozive i zvukove sustava točno tamo gdje jesu.</p>
<p>Evo kako biste njime ukrotili glasni Chrome:</p>
<ul>
<li>Otvorite mikser trake izbornika i pronađite Chrome na popisu aktivnih aplikacija.</li>
<li>Povucite Chrome klizač prema dolje na, recimo, 40 do 50 posto. Ostale aplikacije ostaju netaknute.</li>
<li>Ako je i određena aplikacija <em>tiho</em> umjesto toga — aplikacija za pozive koja šapuće — koristite <a href="https://apps.apple.com/app/id6772792641">povećanje glasnoće po aplikaciji</a> kako bi ga gurnuo iznad 100 posto, dok bi Chrome bio nizak.</li>
<li>Trenutačno isključite Chrome s isključivanjem zvuka po aplikaciji kada vam je potrebna tišina bez zatvaranja kartica.</li>
</ul>
<p>Budući da je razina vezana uz aplikaciju, ostaje. Chrome ostaje na vašoj odabranoj glasnoći na karticama, web-mjestima i ponovnim pokretanjima — bez ponovnog povlačenja klizača playera svaki put kada otvorite novi video.</p>

<h2>Idemo dalje: profili, ducking i prebacivanje izlaza</h2>
<p>Nakon što imate kontrolu po aplikaciji, nekoliko dodataka čini ga vrijednim zadržavanja. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> omogućuje uštedu glasnoće <strong>profilima</strong> — na primjer profil "fokus" gdje je Chrome tih, a glazba glasna, i profil "gledanje" gdje dominira Chrome — i prebacivanje između njih jednim klikom. Automatsko prigušivanje može automatski isključiti druge aplikacije kada se pokrene odabrani izvor (zgodno tako da poziv nikada ne ostane ispod glasne kartice preglednika). A brzo prebacivanje izlaza omogućuje vam prebacivanje između zvučnika, slušalica i drugih uređaja bez zaranjanja u postavke sustava.</p>
<p>To je €14,99 jednokratna kupnja na Mac App Store — bez pretplate, bez instaliranja upravljačkih programa, bez DMG ili proširenja kernela. Budući da je u sandboxu i distribuira se putem App Store, ne zahtijeva nedorečene audio upravljačke programe na koje se oslanjaju stariji alati miksera.</p>

<h2>Koji popravak biste trebali koristiti?</h2>
<p>Ako s vremena na vrijeme imate samo jednu neugodnu karticu, upotrijebite Chrome-ovu ugrađenu funkciju za isključivanje zvuka i postavke zvuka web-mjesta — besplatne su i rade. Ako stalno želite da se Chrome može jednostavno isključiti dok sve ostalo ostaje na mjestu, to je upravo praznina koju macOS ostavlja otvorenim, a mikser po aplikaciji je čisto rješenje.</p>

<p>Želite li Chrome trajno tiši bez isključivanja glazbe ili poziva? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> i dajte svakoj aplikaciji vlastiti klizač za glasnoću.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "WhatsApp & Telegram obavijest zvuči preglasno na Mac? Odbijte ih",
    description: "Popravite zvukove obavijesti radne površine WhatsApp i Telegram koji su preglasni na vašem Mac. Započnite s ugrađenim postavkama svake aplikacije, a zatim smanjite ili utišajte cijelu aplikaciju kada vam macOS ne daje kontrolu po aplikaciji.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>Počnite unutar svake aplikacije: WhatsApp i Telegram vam omogućuju isključivanje ili promjenu zvukova obavijesti u vlastitim postavkama, što je najčistije rješenje. Ali macOS nema klizač za glasnoću obavijesti po aplikaciji, tako da ako je vlastiti zvuk aplikacije još uvijek preglasan, vaša je jedina prava poluga smanjiti ili isključiti zvuk cijele aplikacije pomoću alata za glasnoću po aplikaciji.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — WhatsApp &amp; Telegram Obavijest zvuči preglasno na Mac? Odbijte ih" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Najprije upotrijebite vlastite postavke obavijesti aplikacije</h2>

<p>I WhatsApp i Telegram isporučuju vlastite kontrole zvuka, a to je mjesto gdje biste uvijek trebali početi. To je najprecizniji popravak i ne dodiruje ništa drugo na vašem Mac.</p>

<p><strong>WhatsApp Radna površina:</strong> Otvorite WhatsApp, kliknite <em>postavke</em> (ikona zupčanika), zatim <em>Obavijesti</em>. Možete se isključiti <em>Zvukovi</em> u potpunosti zadržavajući bannere ili onemogućite preglede obavijesti. WhatsApp ne nudi klizač za glasnoću, tako da je u biti uključen ili isključen za sam zvuk.</p>

<p><strong>Telegram Radna površina:</strong> Otvoreno <em>Postavke → Obavijesti i zvukovi</em>. Telegram je ovdje fleksibilniji. Možete globalno isključiti zvuk obavijesti, utišati pojedinačne razgovore ili postaviti prilagođene (tiše) tonove. Također možete utišati jednu bučnu grupu tako da je otvorite i odaberete <em>Isključi zvuk</em>. Za većinu ljudi isključivanje najglasnijih razgovora rješava problem bez da posvuda utihne.</p>

<p>Ako je zvuk dobar, ali prečest, utišajte određene chatove ili kanale koji se najčešće aktiviraju umjesto da isključite zvuk u cijeloj aplikaciji. To održava važna upozorenja zvučnim.</p>

<h2>Isključite zvukove obavijesti u postavkama sustava macOS</h2>

<p>macOS ima drugi sloj kontrole koji u nekim slučajevima nadjačava aplikaciju. Idi na <em>Postavke sustava → Obavijesti</em>, odaberite WhatsApp ili Telegram na popisu i isključite <em>Reproduciraj zvuk za obavijesti</em>. Time se utišava zvono upozorenja za tu aplikaciju dok se banneri i dalje prikazuju.</p>

<p>Ovo je uistinu dobro rješenje ako samo želite da aplikacija bude tiha na obavijestima i ne marite za ostale zvukove (pozivi, video). U kombinaciji s vlastitim postavkama aplikacije, pokriva većinu pritužbi na "ping je neugodan".</p>

<h2>Pravo ograničenje: macOS nema volumen po aplikaciji</h2>

<p>Evo iskrenog dijela. Gore navedeni koraci su prekidači za uključivanje/isključivanje. Ono što ne mogu učiniti je okrenuti WhatsApp ili Telegram <em>dolje</em> na, recimo, 40% dok sve ostalo ostaje na punoj glasnoći. Windows već godinama ima mikser glasnoće po aplikaciji. macOS ga jednostavno ne uključuje i ne postoji skrivena postavka ili naredba Terminal koja ga dodaje.</p>

<p>Ovo je važno kada problem nije konkretno zvono obavijesti, već cijela aplikacija preglasna:</p>

<ul>
<li>WhatsApp ili Telegram <strong>glasovne i video pozive</strong> koji sviraju punom glasnoćom u odnosu na vašu glazbu ili sastanak</li>
<li>Zvuk obavijesti koji želite zadržati, ali na nižoj razini, ne potpuno isključen</li>
<li>Melodije zvona koje su daleko bolje od svega što slušate</li>
<li>Želite da se aplikacija čuje, ali tiho u pozadini dok se vi fokusirate na nešto drugo</li>
</ul>

<p>Ništa od toga nije rješivo s ugrađenim alatima, jer oni nude samo mute, a ne razinu. Taj jaz je stvarno macOS ograničenje, a ne nešto što propuštate.</p>

<h2>Postavite glasnoću po aplikaciji pomoću SoundDial</h2>

<p>Za stvarno isključivanje jedne aplikacije umjesto isključivanja, potreban vam je mikser glasnoće za svaku aplikaciju. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je aplikacija s trakom izbornika koja daje macOS kontrolu glasnoće po aplikaciji koju nikada nije isporučio. Navodi sve aplikacije koje trenutno reprodukuju zvuk i svakoj daje vlastiti klizač.</p>

<p>Za ovaj specifični problem:</p>

<ul>
<li>Otvoreno <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> s trake izbornika i pronađite WhatsApp ili Telegram na popisu.</li>
<li>Povucite njegov klizač prema dolje na ugodnu razinu, na primjer 30–40%, ostavljajući netaknutu glazbu, preglednik ili video poziv.</li>
<li>Koristite aplikaciju po aplikaciji <strong>utišati</strong> gumb za trenutno utišavanje samo te aplikacije tijekom poziva ili sastanka, a zatim ponovno uključivanje zvuka kasnije bez kopanja po postavkama.</li>
<li>Ako vam ikada zatreba suprotno, tiha aplikacija koja je previše mekana, po aplikaciji <strong>pojačati</strong> može ga gurnuti iznad 100%.</li>
</ul>

<p>Budući da postavlja razinu po aplikaciji, SoundDial održava zvukove obavijesti i zvuk poziva čujnim, ali proporcionalnim, umjesto izbora sve ili ništa na koji vam se nameću ugrađene opcije. Možete i uštedjeti <strong>volumenski profili</strong>, tako da je postavka "fokusa" koja drži niske aplikacije za chat udaljena jednim klikom.</p>

<blockquote>Jedno iskreno upozorenje: smanjenje ukupne glasnoće aplikacije u SoundDial također smanjuje zvona obavijesti, budući da je za macOS to zvuk iste aplikacije. Ako želite potpuno isključiti obavijesti, ali pozive pri punoj glasnoći, upotrijebite vlastito isključivanje zvuka aplikacije i postavke sustava za zvono i rezervirajte SoundDial za postavljanje opće razine.</blockquote>

<p>SoundDial je jednokratna kupnja od 14,99 € na Mac App Store, u zaštićenom okruženju, bez pretplate, bez upravljačkih programa kernela i bez DMG za bočno učitavanje. To je praktičan odgovor kada popravak koji zapravo želite, isključivanje jedne aplikacije umjesto isključivanja, nije nešto što sam macOS može učiniti.</p>

<h2>Koji popravak biste trebali koristiti?</h2>

<p>Radite odozgo prema dolje. Isprobajte prvo vlastite postavke obavijesti aplikacije, a zatim macOS Postavke sustava da biste ugasili zvono. Ako je ono što stvarno želite smanjiti WhatsApp ili Telegram na određenu glasnoću ili isključiti samo tu aplikaciju u hodu tijekom poziva, tu je mikser za svaku aplikaciju zaslužen za svoje mjesto.</p>

<p>Umorni ste od biranja između pune snage i potpune tišine za svoje aplikacije za chat? <a href="https://apps.apple.com/app/id6772792641">Nabavite SoundDial na Mac App Store</a> i dajte svakoj aplikaciji vlastiti birač glasnoće.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Zvuk igre glasniji od Discord na Mac? Kako uravnotežiti glasnoću igre i glasa",
    description: "Vaša igra zaglušuje Discord glasovni chat na Mac i nema ugrađeni mikser glasnoće. Evo zašto macOS nema glasnoću po aplikaciji u stilu Windows i kako utišati igru, a glas zadržati glasno.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>macOS nema ugrađeni mikser glasnoće po aplikaciji, tako da ne možete nativno ograničiti svoju igru dok Discord ostaje glasan. Popravak je aplikacija na traci izbornika koja postavlja neovisnu glasnoću po aplikaciji. Smanjite igru ​​na 40-50%, ostavite glasovni chat na 100% i oboje će ostati uravnoteženi bez dodirivanja klizača u igri.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zvuk igre glasniji od Discord na Mac? Kako uravnotežiti glasnoću igre i glasa" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto se to događa na Mac (a ne na Windows)</h2>

<p>Ako ste igrali na Windows, znate Volume Mixer: desnom tipkom miša kliknite ikonu zvučnika i svaka pokrenuta aplikacija dobiva svoj klizač. Ispustiš igru, podigneš Discord, gotovo. macOS jednostavno nikad nije isporučio tu značajku. Postoji jedan glavni izlazni volumen i pregršt prekidača na razini aplikacije zakopanih u postavkama sustava, ali nema kontrole razine po aplikaciji za proizvoljne aplikacije.</p>

<p>Dakle, kada se miks igre brzo savlada, eksplozije, glazba i pucnjava dolaze na istoj izlaznoj razini kao i glasovi vaših prijatelja. Neke igre izlažu glavni klizač glasnoće, ali mnoge se ne spuštaju dovoljno nisko, a mnogi pokretači, preglednici i samostalni naslovi ne nude nikakvu korisnu kontrolu. Discord vam samo omogućuje podešavanje glasnoće dolaznih korisnika, a ne igre koja se natječe s njima.</p>

<p>Da budem iskren, ovo je jaz na razini OS-a, a ne greška koju možete ukloniti. Appleov audio skup usmjerava sve u jedan izlazni tok, a ne postoji korisničko sučelje prve strane koje bi to podijelilo po aplikaciji. Zato vam je potreban alat treće strane koji se nalazi između vaših aplikacija i izlaznog uređaja.</p>

<h2>Ručna rješenja (i zašto ne uspijevaju)</h2>

<p>Prije nego posegnete za softverom, vrijedi upoznati besplatne opcije i njihova ograničenja:</p>

<ul>
<li><strong>Smanjite glasnoću igre unutar aplikacije.</strong> Radi ako igra ima glavni klizač s dovoljno finim koracima. Mnogi se zaustavljaju na koracima od 10% ili spajaju glazbu i efekte zajedno, tako da ne možete ukrotiti samo glasne dijelove.</li>
<li><strong>Podignite svoje prijatelje u Discord.</strong> Desnom tipkom miša kliknite svakog korisnika i pojačajte mu glasnoću. Ovo malo pomaže, ali najviše, i ne dotiče igru ​​koja je zapravo problem.</li>
<li><strong>Koristite slušalice s hardverskim gumbom za glasnoću.</strong> Mijenja samo ukupnu razinu, a ne ravnotežu između igre i glasa.</li>
<li><strong>Usmjerite zvuk kroz virtualni uređaj.</strong> Alati kao što su Loopback ili BlackHole mogu podijeliti streamove, ali oni su namijenjeni profesionalcima, zahtijevaju stvarno postavljanje i pretjerani su za "tišu igru".</li>
</ul>

<p>Ništa od ovoga vam ne daje jednu stvar koju korisnici Windows uzimaju zdravo za gotovo: brzi klizač po aplikaciji. To je jaz <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je izgrađen da ispuni.</p>

<h2>Izravno rješenje: neovisna glasnoća po aplikaciji</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je mikser glasnoće trake izbornika po aplikaciji za macOS. Prikazuje svaku aplikaciju koja trenutno reproducira zvuk i svakoj daje vlastiti klizač, točno kao Windows Volume Mixer. Za problem igre protiv glasa tijek rada je kratak:</p>

<ul>
<li>Kliknite ikonu SoundDial na traci izbornika dok igra i Discord rade.</li>
<li>Pronađite igru na popisu i povucite njezin klizač prema dolje na otprilike 40-50%.</li>
<li>Ostavite Discord (ili Slack, Zoom ili vašu glasovnu aplikaciju) na 100%.</li>
<li>Prilagodite u hodu tijekom igranja — gurnite igru još niže u glasnoj paljbi, povucite se tijekom tihog istraživanja.</li>
</ul>

<p>Budući da se razine odnose na aplikaciju, postavite ih jednom i one ostaju. Igra ostaje ograničena bez obzira na to koliko je vruća njezina miksa, a vaši prijatelji ostaju jasno čujni preko nje.</p>

<h2>Pojačavanje, isključivanje zvuka i profili za ostatak vaših postavki</h2>

<p>Isti alat pokriva susjedne smetnje koje dolaze s igranjem glasa:</p>

<ul>
<li><strong>Pojačanje po aplikaciji.</strong> Ako je suigračev mikrofon tih čak i na Discord maksimumu, možete pritisnuti glasovnu aplikaciju <em>iznad</em> 100% tako da prolazi kroz igru umjesto da se zakopa.</li>
<li><strong>Isključivanje zvuka po aplikaciji.</strong> Trenutačno utišajte pozadinsku karticu preglednika ili glazbenu aplikaciju bez pritiskanja alt taba ili zaustavljanja reprodukcije.</li>
<li><strong>Profili volumena.</strong> Spremite "gaming" profil s igrom na 45% i Discord pojačanim, a zatim se jednim klikom vratite na "normalni" profil za svakodnevnu upotrebu — bez ponovnog povlačenja klizača u svakoj sesiji.</li>
<li><strong>Automatsko spuštanje.</strong> Neka igra automatski pada kad netko priča, tako da oblačići uvijek padaju na vrh akcije.</li>
<li><strong>Brzo prebacivanje izlaza.</strong> Preskačite između slušalica i zvučnika iz istog izbornika bez zaranjanja u postavke sustava.</li>
</ul>

<blockquote><p>Mentalni model je jednostavan: jedan klizač po aplikaciji, onako kako je to Windows radio godinama. macOS ga jednostavno nikad nije pružio, pa mali uslužni program vraća paritet.</p></blockquote>

<h2>Što očekivati iskreno</h2>

<p>Mikser po aplikaciji čisto rješava problem ravnoteže, ali ispravno postavlja očekivanja. Kontrolira izlazne razine softvera — ne može popraviti igru ​​čiji je vlastiti zvuk loše savladan i ne može pokrenuti signal koji nikada nije uhvaćen (stvarno pokvareni mikrofon i dalje treba hardverski popravak). Pojačanje dodaje pravi dobitak, tako da guranje tihog izvora daleko iznad 100% može dovesti do izobličenja, točno kao kad bilo koje pojačalo pojačate previsoko. Međutim, ako se razumno koristi, skromna igraća kapa plus malo pojačanje glasa sve je što je potrebno većini postavki.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nalazi se u sandboxu i instalira se izravno sa Mac App Store — nema upravljačkih programa, nema proširenja kernela, nema DMG kojem se može vjerovati. To je jednokratno 14,99 € bez pretplate i podržava macOS kontrolu glasnoće na 28 jezika.</p>

<p>Prestanite se boriti protiv klizača u igri. zgrabite <a href="https://apps.apple.com/app/id6772792641">SoundDial na Mac App Store</a>, stišajte igru, neka vaša ekipa bude glasna i konačno nabavite Windows mikser za glasnoću macOS koji ste zaboravili poslati.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Zvučnici vanjskog monitora preglasni ili zapeli na Mac? Popravi HDMI/DisplayPort glasnoću",
    description: "Zašto tipke za glasnoću vašeg Mac ne kontroliraju HDMI ili DisplayPort zvučnike monitora i kako popraviti zvuk koji je preglasan, zaglavljen ili nepodesiv pomoću OSD-a monitora, audio MIDI postavki i boljeg izlaznog usmjeravanja.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Ako su tipke za glasnoću vašeg Mac zasivljene ili ne rade ništa za monitor spojen preko HDMI ili DisplayPort, to obično nije greška. Zvuk digitalnog zaslona često se šalje na fiksnoj razini, a vlastiti hardver monitora kontrolira glasnoću. Rješenje je podešavanje zaslona, ​​preusmjeravanje izlaza ili korištenje drugog audio uređaja.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zvučnici vanjskog monitora preglasni ili zaglavljeni na Mac? Popravi HDMI/DisplayPort glasnoću" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto Mac tipke za glasnoću prestaju raditi preko HDMI/DisplayPort</h2>

<p>HDMI i DisplayPort prenose zvuk kao digitalni tok. Mnogi monitori primaju taj tok na fiksnoj izlaznoj razini i očekuju da kontrolirate glasnoću na samom zaslonu, a ne na izvornom uređaju. Kada macOS to otkrije, onemogućuje klizač za glasnoću na zaslonu i zasivljuje tipke F11/F12, prikazujući simbol "zabranjen unos" kada ih pritisnete.</p>

<p>Ovo je ograničenje hardvera i protokola, a ne nešto što softver na Mac može nadjačati. Zvuk nikada ne prolazi kroz fazu u kojoj ga macOS smije prigušiti. Niti jedna aplikacija, upravljački program ili postavka ne može umetnuti kontrolu glasnoće u stream koji zaslon inzistira na primanju na punoj razini. Iskrenost u vezi s tim štedi vam sate traženja pogrešnog rješenja.</p>

<h2>Popravak 1: Koristite vlastite kontrole monitora (OSD)</h2>

<p>Ovo je pravo rješenje za većinu ljudi. Gotovo svaki monitor s ugrađenim zvučnicima ima izbornik na zaslonu koji se pokreće pomoću fizičkih gumba ili joysticka na stražnjoj ili donjoj strani ploče.</p>

<ul>
<li>Pritisnite gumb OSD/izbornik za otvaranje postavki monitora.</li>
<li>Potražite odjeljak Audio ili Volume.</li>
<li>Smanjite razinu tamo — ovo je kontrola koja zapravo radi preko HDMI/DP-a.</li>
</ul>

<p>Neki monitori također izlažu popratnu aplikaciju ili podršku za DDC/CI kako biste mogli pokretati OSD iz macOS. Pomoćni programi trećih strana koji govore DDC mogu preslikati tipke za glasnoću vašeg Mac-a u hardversku glasnoću monitora, što vrijedi isprobati ako mrzite posegnuti za gumbima na ploči.</p>

<h2>Popravak 2: Provjerite audio MIDI postavke</h2>

<p>Otvoreno <strong>Audio MIDI postavke</strong> (u /Applications/Utilities). Odaberite svoj monitor na popisu uređaja. Ako se s desne strane pojavi klizač glasnoće, povucite ga prema dolje — ponekad zaslon izlaže razinu koju može kontrolirati softver čak i kada su tipke na traci izbornika onemogućene. Ako klizač nedostaje ili je zasivljen, zaslon potvrđuje da prihvaća samo zvuk fiksne razine i trebali biste se vratiti na OSD.</p>

<p>Dok ste ovdje, potvrdite da je odabran ispravan izlazni uređaj. Uobičajeno je da se zvuk tiho usmjerava na monitor koji ste zaboravili da je spojen, što objašnjava iznenadni glasan ili odsutan zvuk.</p>

<h2>Popravak 3: Usmjerite zvuk negdje gdje zapravo možete kontrolirati</h2>

<p>Ako su zvučnici vašeg monitora ionako osrednji (većina jesu) i njegova kontrola glasnoće je nespretna, najčišće rješenje je da ih prestanete koristiti:</p>

<ul>
<li>Priključite zvučnike ili slušalice u izlaz za slušalice na monitoru ako ga ima — taj analogni izlaz obično se glasnoćom može kontrolirati sa zaslona.</li>
<li>Koristite USB DAC, USB zvučnike ili Bluetooth izlaz. USB i analogni izlazi daju macOS potpunu softversku kontrolu glasnoće, tako da vaše tipke ponovno rade normalno.</li>
<li>Odaberite ugrađene zvučnike svog Mac za brze zvukove i zadržite monitor samo za video.</li>
</ul>

<p>Jednom kada ste na izlazu koji macOS zapravo može prigušiti, sistemske tipke za glasnoću se ponašaju i vraćate finu kontrolu umjesto da skačete između grubih OSD koraka monitora.</p>

<h2>Nakon što izlaz radi, kontrolirajte glasnoću po aplikaciji</h2>

<p>Vraćanje izlaza koji se može kontrolirati rješava problem "preglasnog / zaglavljenog". Ali macOS vam još uvijek daje samo jedan glavni volumen za sve. Na Mac nema ugrađenog miksera za svaku aplikaciju — Windows ga ima godinama, ali Apple nikada nije isporučio ekvivalent. Dakle, glasan video, igra i tihi poziv dijele isti klizač.</p>

<p>To je jaz <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ispunjava. To je mikser na traci izbornika koji svakoj aplikaciji daje vlastitu neovisnu glasnoću, tako da možete stišati karticu preglednika bez dodirivanja glazbe, odmah isključiti zvuk jedne aplikacije ili pojačati tihu aplikaciju iznad njezine normalne granice. Možete spremiti profile glasnoće za različite postavke i brzo mijenjati izlaze iz trake izbornika.</p>

<p>Da bismo bili jasni u vezi s opsegom: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kontrolira glasnoću softvera za zvuk koji teče kroz macOS. Ne može nadjačati monitor koji zanemaruje glasnoću sustava preko HDMI-ja — to je ponašanje zaslona na fiksnoj razini i samo OSD ili drugi izlaz to popravlja. Nakon što ste na izlazu koji se može kontrolirati, kontrola po aplikaciji je mjesto gdje aplikacija blista.</p>

<h2>Brzi kontrolni popis</h2>

<ul>
<li>Tipke su zasivljene preko HDMI/DP-a? Koristite OSD glasnoću monitora — to je očekivano ponašanje.</li>
<li>Provjerite audio MIDI postavku za skriveni softverski klizač.</li>
<li>Potvrdite da je odabran pravi izlazni uređaj.</li>
<li>Za pravu kontrolu, usmjerite zvuk na izlaz za slušalice, USB ili Bluetooth.</li>
<li>Zatim upotrijebite mikser za svaku aplikaciju kako biste uravnotežili pojedinačne aplikacije.</li>
</ul>

<p>Kada je vaš rezultat pod kontrolom, dajte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> pogled. To je jednokratna kupnja od 14,99 € od Mac App Store — bez pretplate, bez drajvera, bez DMG — i konačno donosi pravi mikser glasnoće po aplikaciji na macOS.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "USB DAC Glasnoća se ne prilagođava na Mac? Vratite softversku kontrolu glasnoće",
    description: "Zašto macOS zasivljuje klizač glasnoće za mnoge USB DAC, što to znači i kako vratiti radnu softversku kontrolu glasnoće na svoj Mac bez narušavanja kvalitete zvuka.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Ako je klizač za glasnoću vašeg USB DAC zasivljen na Mac, to obično nije greška. macOS onemogućuje svoju softversku glasnoću kada DAC javi da nema kontrolu glasnoće, očekujući da koristite vlastiti hardverski gumb DAC. Da biste vratili glasnoću softvera, upotrijebite prigušivač na razini aplikacije poput <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC Glasnoća se ne prilagođava na Mac? Vratite softversku kontrolu glasnoće" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto macOS zasivljuje glasnoću za neke USB DAC</h2>

<p>Kada priključite USB audio uređaj, macOS ga pita što može učiniti preko USB Audio Class (UAC) protokola. Dio tog rukovanja je skup kontrola "jedinice značajki", uključujući kontrolu glasnoće. Ako DAC deklarira kontrolu glasnoće, macOS je povezuje s tipkama za glasnoću na tipkovnici i klizačem trake izbornika. Ako DAC izjavi da nema podesivu glasnoću, macOS potpuno zasivljuje klizač.</p>

<p>Mnogi visokokvalitetni DAC i pojačala rade upravo ovo drugo, namjerno. Pretpostavka dizajnera je da ćete DAC dati digitalni signal pune skale, bit-savršen i kontrolirati glasnoću analognom tipkom za glasnoću na samoj jedinici. To analogno prigušenje događa se nakon digitalno-analogne pretvorbe, tako da se izbjegava odbacivanje bitova i to je doista put koji preferiraju audiofili. To je značajka, a ne greška.</p>

<blockquote>Osnovno pravilo: ako vaš DAC ima fizički gumb za glasnoću, a klizač Mac je zasivljen, proizvođač želi da koristite gumb. Signal se prema dizajnu šalje na 100%.</blockquote>

<h2>Kada je zasivljeni klizač zapravo problem</h2>

<p>Odgovor "samo upotrijebi gumb" ne funkcionira u stvarnim postavkama:</p>

<ul>
<li><strong>DAC nema gumb.</strong> Mnoštvo kompaktnih USB DAC-ova, hardverskih ključeva i profesionalnih sučelja ne otkriva kontrolu glasnoće niti kontrolu glavnog računala. Zapeli ste na kojoj god razini postavljeno nizvodno pojačalo ili električni zvučnici.</li>
<li><strong>Gumb je izvan dosega.</strong> Stolno računalo DAC iza vašeg monitora ili jedinica koja napaja pojačalo s fiksnim pojačanjem znači da podešavanje glasnoće postaje fizički posao umjesto pritiska na tipku.</li>
<li><strong>Potrebna vam je ravnoteža po aplikaciji, a ne samo majstorska razina.</strong> Čak je i savršen hardverski gumb jedna globalna kontrola. Ne može učiniti Zoom poziv tišim od vaše glazbe ili zatajiti igru ​​kada se aktivira obavijest.</li>
</ul>

<p>macOS nije popravio ništa od toga jer se iz perspektive OS-a uređaj ponaša ispravno. Ovo je iskreno ograničenje: to je mogućnost koju prijavljuje uređaj i ne postoji prekidač u postavkama sustava koji bi je nadjačao.</p>

<h2>Iskrena rješenja prije nego što bilo što instalirate</h2>

<p>Isprobajte prvo ovo jer ništa ne košta:</p>

<ul>
<li><strong>Koristite hardverski gumb ili nizvodnu glasnoću.</strong> Ako vaš DAC ili vaši električni zvučnici/pojačalo imaju kontrolu, to je najčišća opcija i čuva punu digitalnu rezoluciju.</li>
<li><strong>Provjerite vlastitu aplikaciju ili firmver DAC.</strong> Neki DAC (i jedinice orijentirane na igre) isporučuju upravljačku ploču ili postavku firmvera koja omogućuje glasnoću glavnog računala. Ako postoji opcija "USB glasnoća" ili "softverska glasnoća", njezinim uključivanjem klizač macOS ponovno radi.</li>
<li><strong>Pokušajte s drugim USB načinom rada.</strong> Nekoliko uređaja izvješćuje o različitim mogućnostima u "class-compliant" načinu rada u odnosu na vlasnički upravljački program. Instaliranje ili uklanjanje upravljačkog programa dobavljača može promijeniti hoće li macOS vidjeti kontrolu glasnoće.</li>
<li><strong>Pogledajte Audio MIDI Setup.</strong> Otvorite Audio MIDI Setup, odaberite uređaj i provjerite pojavljuje li se glavna glasnoća ili glasnoća po kanalu. Povremeno je klizač dostupan na toj ploči čak i kada je traka izbornika zasivljena.</li>
</ul>

<p>Ako ništa od toga ne vrijedi, potrebno vam je softversko prigušenje na strani Mac.</p>

<h2>Softverska kontrola glasnoće s prigušivanjem po aplikaciji</h2>

<p>Kada hardver neće prihvatiti naredbu za glasnoću, preostala je opcija prigušiti zvuk u softveru prije nego što dođe do DAC. To je upravo ono što <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> radi. Nalazi se u vašoj traci izbornika i daje svakoj pokrenutoj aplikaciji vlastitu neovisnu glasnoću, isključivanje zvuka, pa čak i pojačanje, bez obzira na to izlaže li vaš DAC hardversku kontrolu.</p>

<p>Da biste ga koristili za zasivljeni DAC:</p>

<ul>
<li>Instalirajte <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> iz Mac App Store i otvorite ga iz trake izbornika.</li>
<li>Neka vaš DAC bude odabran kao izlaz sustava; također možete koristiti SoundDial brzo prebacivanje izlaza za kretanje između DAC, zvučnika i slušalica bez zaranjanja u postavke sustava.</li>
<li>Postavite razine po aplikaciji: ispustite preglednik, povećajte glazbeni player, isključite što god ne želite. Svaka aplikacija struji glasnoćom koju odaberete, a mješoviti rezultat ide na DAC.</li>
<li>Spremite profile glasnoće za različite scenarije (pozivi naspram slušanja) i dopustite automatskom smanjivanju pozadinskih aplikacija kada počne svirati nešto važnije.</li>
</ul>

<h2>Iskreni kompromis u kvaliteti zvuka</h2>

<p>Softversko prigušenje smanjuje digitalnu razinu prije pretvorbe, tako da u teoriji odbacuje malu količinu rezolucije u usporedbi s analognom glasnoćom na samom DAC. U praksi, na modernim 24-bitnim i višim stazama pri normalnim razinama slušanja, redukcija je daleko ispod svega što se može čuti, a vi zadržavate puni dinamički raspon DAC za sve što se svira blizu pune skale. Ako ste čistunac s dobrim analognim gumbom nadohvat ruke, koristite gumb. Ako nemate upotrebljivu hardversku kontrolu ili vam je potrebna ravnoteža po aplikaciji koju macOS jednostavno ne može osigurati, glasnoća softvera pravi je kompromis i pobjeđuje klizač koji ne radi ništa.</p>

<p>SoundDial je jednokratna kupnja od 14,99 €, u zaštićenom okruženju, bez upravljačkih programa, proširenja kernela ili programa za instalaciju DMG. Ako je glasnoća vašeg USB DAC zasivljena i posezanje za gumbom nije opcija, <a href="https://apps.apple.com/app/id6772792641">nabavite SoundDial na Mac App Store</a> i vratite radnu kontrolu glasnoće na traku izbornika.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Ograničite maksimalnu glasnoću jedne glasne aplikacije na Mac (zaštitite svoj sluh)",
    description: "macOS nema ograničenje glasnoće po aplikaciji, tako da vas jedna glasna aplikacija može razbiti pri punoj glasnoći sustava. Evo kako postaviti gornju granicu maksimalne glasnoće za jednu aplikaciju na Mac s mikserom za svaku aplikaciju i zašto su hardverska ograničenja važna.",
    date: "2026-07-23",
    readTime: "5 min čitanja",
    content: `<p>macOS nema ugrađeni način za ograničavanje maksimalne glasnoće jedne aplikacije, tako da se glasan program reproducira na bilo kojoj postavci klizača vašeg sustava. Da biste postavili gornju granicu za jednu aplikaciju, upotrijebite traku izbornika po aplikaciji kao mikser <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: držite tu aplikaciju na, recimo, 40 posto dok glasnoća vašeg sustava ostaje veća za sve ostalo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Ograničite maksimalnu glasnoću jedne glasne aplikacije na Mac (zaštitite svoj sluh)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Zašto vas jedna aplikacija može iznenada razvaliti na Mac</h2>

<p>Na macOS, klizač za glasnoću na traci izbornika ili Kontrolnom centru je jedna kontrola za cijeli sustav. Svaka aplikacija daje isti izlaz na istoj razini. Ne postoji mikser glasnoće za svaku aplikaciju ugrađen u operativni sustav kao što ga Windows godinama ima sa svojom pločom Volume Mixer.</p>

<p>Taj dizajn ima stvarne posljedice za vaše uši. Ako postavite glasnoću sustava na visoku tako da možete čuti tihi podcast ili tihi videopoziv, a zatim se prebacite na igru, Discord obavijest, web stranicu punu reklama ili video koji je bio znatno glasniji, ta aplikacija također reproducira na razini punog sustava. Rezultat je klasični strah od skoka: iznenadni zid zvuka na glasnoći koju niste namjeravali za tu određenu aplikaciju.</p>

<p>Za svakoga tko ima tinitus, osjetljivost na zvuk ili tko jednostavno cijeni svoj sluh, ta je nepredvidivost problem. Ne pokušavate sve učiniti tišim. Pokušavate jamčiti da jedna određena glasna aplikacija nikada ne može prijeći razinu za koju ste odlučili da je sigurna.</p>

<h2>Što macOS ovdje može, a što ne može</h2>

<p>Dopustite mi da budem iskren o ograničenjima prije nego što išta preporučim.</p>

<ul>
<li><strong>Glasnoća sustava</strong> spušta sve odjednom. Smanjite ga kako biste ukrotili jednu aplikaciju i vaše tihe aplikacije postat će nečujne.</li>
<li><strong>Klizači za glasnoću unutar aplikacije</strong> postoje u nekim aplikacijama (medijski playeri, neki preglednici po kartici), ali ne u većini. Igra, videopoziv ili izvorna aplikacija često uopće nemaju neovisnu kontrolu glasnoće.</li>
<li><strong>Hardverski strop je stvaran.</strong> Nijedan softver ne može pojačati signal jači od maksimuma vašeg izlaznog uređaja. Suprotno tome, vlastito upravljanje glasnoćom aplikacije, plus vaš DAC i slušalice, postavljaju koliko se glasno zapravo osjeća "100 posto". Softver može pouzdano sniziti razinu po aplikaciji, ali ne može prepisati fiziku vaših slušalica.</li>
</ul>

<p>Dakle, pošteni cilj nije čarobno ograničavanje glasnoće na razini vozača. To je praktično, pouzdano prigušenje po aplikaciji: držite odabranu aplikaciju na fiksnom dijelu izlaza sustava kako vas nikada ne bi iznenadila.</p>

<h2>Kako ograničiti glasnoću jedne aplikacije pomoću miksera za svaku aplikaciju</h2>

<p>Mikser glasnoće za svaku aplikaciju presreće zvuk svake aplikacije i omogućuje vam da neovisno postavite njegovu razinu. Evo tijeka rada s <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, koji se nalazi u traci izbornika:</p>

<ul>
<li><strong>Otvorite mikser.</strong> Pritisnite SoundDial ikonu trake izbornika. Vidjet ćete popis svake aplikacije koja trenutno reproducira zvuk, a svaka ima svoj klizač.</li>
<li><strong>Pronađite glasnu aplikaciju.</strong> Pronađite aplikaciju koju želite ograničiti, na primjer igru, preglednik ili alat za videokonferencije.</li>
<li><strong>Postavite mu strop.</strong> Povucite klizač te aplikacije prema dolje na svoju sigurnu razinu, recimo 35 do 50 posto. Ta aplikacija sada reproducira taj dio izlaza sustava dok sve druge aplikacije ostaju tamo gdje su bile.</li>
<li><strong>Ostavite glasnoću sustava tamo gdje vam je potrebna.</strong> Držite klizač sustava dovoljno visoko za svoje tihe aplikacije. Ograničena aplikacija ostaje pod kontrolom bez obzira.</li>
</ul>

<p>Budući da je razina po aplikaciji, zapravo postavljate maksimum za taj jedan program. Čak i kada pokuša reproducirati svoj najglasniji sadržaj, najglasniji je sada vaš odabrani dio pune.</p>

<h2>Zalijepite kapu s profilima</h2>

<p>Jedna ručna prilagodba pomaže, ali razine aplikacije mogu se poništiti kada izađete i ponovno pokrenete. Da biste napravili postavku sigurnu za sluh koja će preživjeti ponovno pokretanje, koristite <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>profili volumena. Spremite profil s željenim razinama po aplikaciji, na primjer "mirna noć igre" s igrom na 40 posto, vašom glazbenom aplikacijom na 70 posto i aplikacijom za pozive na 90 posto. Pozovite ga jednim klikom kad god sjednete. Vaš strop za glasnu aplikaciju vraća se točno onako kako ste ga postavili.</p>

<p>Za zaštitu sluha vrijedi znati još dvije značajke:</p>

<ul>
<li><strong>Isključivanje zvuka po aplikaciji</strong> omogućuje vam trenutno ušutkavanje jednog prijestupnika bez dodirivanja bilo čega drugog, korisno za aplikaciju koja šalje neželjene glasne obavijesti.</li>
<li><strong>Automatsko spuštanje</strong> automatski smanjuje pozadinski zvuk kada počne nešto važnije, tako da niste uhvaćeni između dva glasna izvora odjednom.</li>
</ul>

<blockquote><p>Softversko prigušivanje doista je učinkovito za ograničavanje aplikacije, ali to je jedan sloj zaštite, a ne medicinska zaštita. Ako imate tinitus ili osjetljivost na zvuk, uparite strop po aplikaciji s razumnim ukupnim razinama slušanja i pauzama. Niti jedna aplikacija ne zamjenjuje navike oprezne glasnoće.</p></blockquote>

<h2>Napomena o pojačanju i zašto je odvojeno</h2>

<p>Isti mikser po aplikaciji koji ograničava glasnu aplikaciju također može pojačati pretihu iznad 100 posto, što je zgodno za aplikaciju čija je glasnoća preniska. Ovo su dvije strane iste kontrole: vi odlučujete o razini svake aplikacije, višoj ili nižoj. Za zaštitu sluha jednostavno odaberete smjer "dolje" i tamo ga držite.</p>

<h2>Kratka verzija</h2>

<p>macOS vam neće dopustiti da sami ograničite volumen jedne aplikacije, a to je stvarna praznina OS-a, a ne pogreška korisnika. Mikser trake izbornika po aplikaciji je zatvara: postavite glasnu aplikaciju na fiksnu frakciju, spremite je u profil i više vas nikada neće moći razbiti dok vaše druge aplikacije ostaju čuti.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednokratna kupnja od 14,99 € na Mac App Store, u sandboxu bez upravljačkih programa ili DMG za instalaciju. Ako je cilj zaštititi vaše uši od jedne nepredvidive aplikacije, to je najjednostavniji način da postavite tu gornju granicu i zadržite je.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Različit balans lijevo/desno po aplikaciji na Mac — je li to moguće?",
    description: "Možete li postaviti drugačiji stereo balans lijevo/desno za svaku aplikaciju na macOS? Iskreno, ne — ne nativno, i ne s većinom alata. Evo što je zapravo moguće i gdje su stvarne granice.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Iskreno rečeno, ne — macOS vam ne dopušta da postavite drugačiji stereo balans lijevo/desno po aplikaciji, a gotovo niti jedan alat treće strane ne izlaže stvarno pomicanje po aplikaciji. Možete postaviti jednu globalnu ravnotežu za svoj izlazni uređaj i možete kontrolirati po aplikaciji <em>volumen</em>, ali neovisno po aplikaciji <em>tava</em> nije značajka koju macOS čini dostupnom.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Različit balans lijevo/desno po aplikaciji na Mac — Je li moguće?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ravnoteža naspram volumena — to nije ista stvar</h2>

<p>Vrijedno je razdvojiti dvije ideje koje se često zbunjuju:</p>
<ul>
  <li><strong>Volumen</strong> — koliko je aplikacija općenito glasna. Ovo je jedna razina primijenjena na oba kanala.</li>
  <li><strong>Ravnoteža (pan)</strong> — kako se zvuk distribuira između lijevog i desnog zvučnika. Ravnoteža "puno lijevo" šalje sve u lijevi kanal i utišava desni.</li>
</ul>

<p>Ljudi koji traže "različiti balans po aplikaciji" obično žele jednu od dvije stvari: gurnuti zvuk jedne aplikacije na jedno uho (recimo, poziv u lijevom uhu, glazba u desnom) ili ispraviti razliku u sluhu ili loš zvučnik s jedne strane - ali samo za određene aplikacije. To su legitimni ciljevi. Problem je gdje kontrola živi.</p>

<h2>Zašto macOS to ne može učiniti izvorno</h2>

<p>macOS ima točno jednu kontrolu ravnoteže i živi na razini izlaznog uređaja. Naći ćete ga ispod <strong>Postavke sustava → Zvuk → Izlaz</strong>, gdje je a <em>Ravnoteža</em> klizač pomiče cijeli miks lijevo ili desno. Primjenjuje se na što god je taj klizač postavljen <em>sve</em> preusmjeren na taj uređaj — svaka aplikacija, svaki zvuk sustava, sve odjednom.</p>

<p>Ne postoji API u standardnom macOS audio skupu koji kaže "renderiraj zvuk ove aplikacije ulijevo, te aplikacije udesno." Aplikacije predaju svoj zvuk sustavu koji je već izmiksan, a sustav primjenjuje jedan glavni balans na putu do zvučnika. Dakle, sloj na kojem biste željeli pomicanje po aplikaciji jednostavno nije izložen operativnom sustavu. Ovo je pravo ograničenje OS-a, a ne nešto što uslužni program na traci izbornika može pristojno zaobići.</p>

<blockquote>Za razliku od aplikacije po aplikaciji <em>volumen</em> — što macOS također izvorno nedostaje, ali koje aplikacije mogu implementirati dodirivanjem audio streama — po aplikaciji <em>ravnoteža</em> zahtijevalo bi ponovno pomicanje streama svake aplikacije neovisno, a ta kuka nije dostupna aplikacijama u sandboxu.</blockquote>

<h2>Što SoundDial radi — i iskreno, što ne radi</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> daje vam kontrolu po aplikaciji koja macOS nedostaje: neovisno <strong>volumen</strong> za svaku pokrenutu aplikaciju, po aplikaciji <strong>utišati</strong>, volumen po aplikaciji <strong>pojačati</strong> iznad 100%, volumen koji se može spasiti <strong>profilima</strong>, automatsko smanjivanje i brzo prebacivanje izlaza s trake izbornika.</p>

<p>Da budem iskren s vama: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> kontrole po aplikaciji <em>glasnoća i utišavanje</em>, a ne stereo po aplikaciji <em>pomicanje</em>. Neće vam poslati Safari u lijevo uho i Spotify u desno. Ako vam netko kaže da mikser na traci izbornika radi stvarnu L/R ravnotežu po aplikaciji na macOS, budite skeptični - to nije kontrola koju OS daje. Ono što SoundDial istinski rješava je mnogo češća frustracija: jedna aplikacija je preglasna ili pretiha u odnosu na drugu.</p>

<h2>Prava rješenja za ravnotežu po aplikaciji</h2>

<p>Ako vam je doista potreban audio podijeljen, evo iskrenih opcija, otprilike od najjednostavnijih do najsloženijih:</p>

<ul>
  <li><strong>Globalna ravnoteža (sve aplikacije):</strong> Koristite Postavke sustava → Zvuk → Izlaz → Balans. Ovo je vaša jedina ugrađena opcija i utječe na svaku aplikaciju. Korisno za ispravljanje sobe ili asimetrije sluha, beskorisno za izolaciju jedne aplikacije.</li>
  <li><strong>Odvojeni izlazni uređaji:</strong> Ovo je najbliže stvarnom saldu po aplikaciji. Usmjerite aplikaciju A na jedan izlazni uređaj i aplikaciju B na drugi, a zatim postavite ravnotežu svakog uređaja zasebno. macOS vam omogućuje odabir izlaznog uređaja unutar nekih aplikacija (a preglednici/komunikacijske aplikacije često izlažu vlastiti izlazni birač). Ako aplikacija A pokazuje na uređaj pomaknut ulijevo, a aplikacija B na uređaj pomaknut udesno, zapravo dobivate ravnotežu po aplikaciji — sve dok vam obje aplikacije dopuštaju odabir izlaza.</li>
  <li><strong>Virtualni alati za usmjeravanje zvuka:</strong> Pomoćni programi koji stvaraju virtualne uređaje i interni mikser mogu, u nekim konfiguracijama, usmjeriti određene aplikacije na određene kanale. Ovo je moćno, ali nezgodno, dodaje komponentu vozačkog stila i pretjerano je za većinu ljudi. To je domena streamera i audio inženjera, a ne povremeni "poziv u jednom uhu" popravak.</li>
  <li><strong>Podjela hardvera:</strong> Ako se radi o fizičkim zvučnicima ili razlici u sluhu, hardverski mikser ili audio sučelje s kontrolom po kanalu u potpunosti zaobilaze softverski problem.</li>
</ul>

<h2>Kada je količina po aplikaciji zapravo ono što vam treba</h2>

<p>Mnogi zahtjevi "Želim različitu ravnotežu po aplikaciji" zapravo su "jedna aplikacija guši drugu". Ako je cilj videopoziv koji možete čuti uz svoju glazbu ili igra koja je preglasna pored Discord chata, ravnoteža nije alat – neovisna glasnoća jest. To je upravo ono što mikser po aplikaciji rješava čisto, bez virtualnih upravljačkih programa ili gimnastike usmjeravanja.</p>

<p>Dakle, iskreni sažetak: pravi balans lijevo/desno po aplikaciji nije značajka macOS i niti jedna aplikacija miksera to ne lažira uvjerljivo. Vaše stvarne rute su klizač globalne ravnoteže ili usmjeravanje izlaza po aplikaciji na zasebno prikazane uređaje. Ali ako je temeljna bol relativna glasnoća, to je riješen problem.</p>

<p>Želite neovisnu glasnoću, isključivanje zvuka i pojačanje za svaku aplikaciju na vašem Mac, s profilima koji se mogu spremiti i bez upravljačkih programa? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Nabavite SoundDial na Mac App Store</a> — 14,99 €, jednokratno, u sandboxu.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Zašto su neke aplikacije toliko glasnije od drugih na Mac? (I kako ih izjednačiti)",
    description: "Aplikacije zvuče potpuno drugačije na Mac jer je svaka prilagođena vlastitoj ciljanoj glasnoći, a macOS nema ugrađenu kontrolu glasnoće po aplikaciji. Evo zašto se to događa i kako izjednačiti svoje aplikacije.",
    date: "2026-07-23",
    readTime: "6 min čitanja",
    content: `<p>Aplikacije zvuče potpuno drugačije na vašem Mac jer je svaka od njih autorska, masterirana i normalizirana prema vlastitoj ciljnoj glasnoći, a macOS nema ugrađenu kontrolu glasnoće po aplikaciji koja bi ih uskladila. Spotify, YouTube, Zoom i sistemska upozorenja prolaze kroz isti glavni klizač, tako da ste stalno zaglavljeni u vožnji gore-dolje.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Zašto su neke aplikacije toliko glasnije od drugih na Mac? (I kako ih izjednačiti)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Nije vaš Mac — to je sam zvuk</h2>

<p>Jedinstveni klizač glasnoće sustava na macOS kontrolira konačnu izlaznu razinu za sve. Ne utječe na relativnu glasnoću ugrađenu u audio stream svake aplikacije. Ta je osnovna linija postavljena mnogo prije nego što zvuk dopre do vaših zvučnika, a uvelike varira od izvora do izvora.</p>

<p>Tri stvari uzrokuju te razlike:</p>

<ul>
<li><strong>Savladavanje razina.</strong> Udarna pop pjesma masterirana je daleko toplije od tihe akustične snimke ili govornog podcasta. Film miksiran za kino namjerno utišava šaputanje i glasne eksplozije — to je dinamički raspon, a to znači da je prosječna razina niska.</li>
<li><strong>Ciljevi normalizacije glasnoće.</strong> Platforme za strujanje prilagođavaju reprodukciju cilju izmjerenom u LUFS (jedinice glasnoće u odnosu na punu skalu). Spotify cilja oko -14 LUFS, YouTube otprilike -14 LUFS, Apple Music oko -16 LUFS. Aplikacija ili igra za videokonferencije u potpunosti primjenjuje vlastitu dobit. Dvije aplikacije "normalizirane" na različite ciljeve nikad se neće podudarati.</li>
<li><strong>Nema izravnavanja između aplikacija.</strong> Svaka aplikacija normalizira samo svoj sadržaj. Ništa ne usklađuje Spotify protiv Zoom protiv igre preglednika. macOS ih samo zbraja i šalje miks.</li>
</ul>

<h2>Zašto je LUFS važan (jednostavno rečeno)</h2>

<p>Vršna razina govori vam koji je najglasniji trenutak u signalu. LUFS vam govori koliko je nešto zapravo glasno <em>osjeća</em> tijekom vremena, ponderirano prema tome kako funkcionira ljudski sluh. Ova razlika je razlog zašto podcast i plesna pjesma mogu doseći isti vrhunac, ali se istovremeno osjećaju svjetovima razdvojenim u glasnoći - pjesma provodi daleko više vremena blizu svog stropa.</p>

<blockquote>Tiša LUFS meta znači više prostora za glavu i veći dinamički raspon. Glasniji cilj znači dosljedniji, "uvijek pun" zvučni zid. Ni jedno ni drugo nije pogrešno — ali kada aplikacije ciljaju različite brojeve, to osjećate kao da jedna aplikacija vrišti, a druga mrmlja.</blockquote>

<p>To je iskreni temeljni uzrok. To nije greška koju možete zakrpati. To je fizika načina na koji se zvuk proizvodi i isporučuje, umnožen kroz desetak aplikacija koje nikad nisu bile dizajnirane da se međusobno slažu.</p>

<h2>Jaz macOS ostavlja otvorenim</h2>

<p>Evo dijela koji iskreno frustrira ljude: Windows već godinama isporučuje Volume Mixer za svaku aplikaciju. Jednu aplikaciju možete povući prema dolje i gurnuti drugu prema gore, izravno sa programske trake. macOS ovo nikada nije uključio. Postavke zvuka daju vam samo glavni klizač i odabir izlaznog uređaja.</p>

<p>Dakle, na Mac su vaše mogućnosti tradicionalno ograničene:</p>

<ul>
<li>Podesite unutarnji klizač glasnoće svake aplikacije — ako ga uopće ima. Mnoge aplikacije (Zoom, većina igara, zvona sustava) ne izlažu upotrebljivu.</li>
<li>Ručno pomaknite glavni klizač svaki put kada promijenite kontekst.</li>
<li>Potpuno utišajte jednu stvar, što je grubo rješenje koje zapravo ništa ne uravnotežuje.</li>
</ul>

<p>Nitko od ovih ne pamti vaše postavke. Zatvorite i ponovno pokrenite aplikaciju i vratili ste se na početak.</p>

<h2>Praktično rješenje: zapamćeni volumen po aplikaciji</h2>

<p>Budući da ne možete prisiliti svaku uslugu da ponovno ovlada svojim katalogom, izvedivo rješenje je dodati sloj koji nedostaje macOS nikad isporučen: neovisni, zapamćeni volumen za svaku aplikaciju. To je točno ono što <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> radi. Živi u vašoj traci izbornika i daje svakoj pokrenutoj aplikaciji vlastiti klizač, tako da možete povući onu glasnu prema dolje i gurnuti onu tihu prema gore dok ne sjedne na razinu koja vam se sviđa.</p>

<p>Da biste ujednačili svoje aplikacije u praksi:</p>

<ul>
<li>Otvoreno <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> s trake izbornika i vidjet ćete svaku aktivnu aplikaciju s vlastitom kontrolom.</li>
<li>Smanjite sve što je eksplozivno - obično glazbena ili video aplikacija koja je u potpunosti ovladana - na otprilike 60-70%.</li>
<li>Ostavite svoju tihu referentnu aplikaciju (često aplikaciju za pozive ili podcast) na 100% i koristite po aplikaciji <strong>pojačati</strong> da ga potisnete preko 100% ako je još uvijek premekan.</li>
<li>Postavite razine jednom. SoundDial pamti glasnoću svake aplikacije, tako da se stanje drži sljedeći put kada je otvorite.</li>
</ul>

<p>Dvije značajke ovdje obavljaju većinu posla izravnavanja. <strong>pojačati</strong> važno jer je mnogo aplikacija jednostavno pretiho čak i na maksimumu — klizač po aplikaciji koji samo smanjuje glasnoću ne može ih spasiti, ali onaj koji može pojačati preko 100% može. I <strong>volumenski profili</strong> omogućuju vam spremanje cijelog skupa razina — recimo, profil "fokusiranje glazbe nisko, pozivi glasno" za posao nasuprot drugačije kombinacije za igranje — i prebacivanje između njih trenutno umjesto ponovnog podešavanja aplikacije po aplikaciju.</p>

<h2>Gdje ovo najviše pomaže</h2>

<p>Najčešće olakšanje je skok između glazbe i sastanka: glasno strujanje glazbe, zatim aplikacija za pozive koja u usporedbi zvuči slabo. Postavite aplikaciju za pozive na jaču (ili pojačanu), smanjite glazbu i zapanjujuća promjena glasnoće nestaje. Isto se odnosi na tihu igru ​​preglednika protiv glasnog video playera ili sistemska upozorenja koja iskaču preko svega.</p>

<p>Da pojasnimo ograničenja: SoundDial uravnotežuje ono što vaše aplikacije izlaze. Neće ponovno svladati loše proizvedenu pjesmu i ne može izmisliti detalje u zvuku koji je miksan s vrlo širokim dinamičkim rasponom. Ono što čini je da vam daje jednu kontrolu macOS koja je izostavljena — stabilne razine po aplikaciji koje ostaju.</p>

<p>Umorni ste od vožnje glavnim klizačem svaki put kada mijenjate aplikacije? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> je jednokratno 14,99 € na Mac App Store — u sandboxu, bez upravljačkih programa, bez DMG — i konačno daje svakoj aplikaciji vlastitu zapamćenu glasnoću.</p>`,
  },
};
